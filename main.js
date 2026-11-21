const { Actor } = require('apify');
const axios = require('axios');

const GATEWAY_BASE = 'https://api.m2mcent.com';
const PREMIUM_TIER_NODES = new Set([
    'serp-markdown-crawler-mcp',
    'draco-mesh-compressor-mcp',
    'anti-stuxnet-plc-mcp'
]);

async function safeChargeEvent(eventName, count = 1) {
    try {
        if (typeof Actor.charge === 'function') {
            return await Actor.charge({ eventName, count });
        }
    } catch (err) {
        console.warn(`[Apify] Actor.charge(${eventName}) skipped/unavailable: ${err.message}`);
    }
    return null;
}

function sanitizeCatalogDescription(desc) {
    return String(desc || '').replace(/^\s*\[[^\]]*(?:USDC|USD|x402)[^\]]*\]\s*/i, '').trim();
}

async function fetchCatalogList(options = {}) {
    const started = Date.now();
    const res = await axios.get(`${GATEWAY_BASE}/api/v1/tools`, {
        validateStatus: () => true,
        timeout: 15000
    });
    if (res.status < 200 || res.status >= 300) {
        const err = new Error(`Catalog fetch failed with HTTP ${res.status}`);
        err.httpStatus = res.status;
        throw err;
    }

    const allTools = Array.isArray(res.data)
        ? res.data
        : (res.data?.tools || res.data?.services || []);

    const search = String(options.search || '').trim().toLowerCase();
    const domain = String(options.domain || '').trim().toLowerCase();
    const rawLimit = Number(options.limit);
    const limit = Number.isFinite(rawLimit) ? Math.min(200, Math.max(1, Math.floor(rawLimit))) : 50;

    let filtered = allTools;
    if (search) {
        filtered = filtered.filter((t) =>
            String(t.id || '').toLowerCase().includes(search) ||
            String(t.title || t.name || '').toLowerCase().includes(search) ||
            String(t.description || '').toLowerCase().includes(search)
        );
    }
    if (domain) {
        filtered = filtered.filter((t) => String(t.domain || '').toLowerCase().includes(domain));
    }

    return {
        status: 200,
        toolName: 'list',
        message: 'M2MCent microservices catalog ready',
        paymentMode: 'free_discovery',
        latencyMs: Date.now() - started,
        data: {
            totalCatalogCount: allTools.length,
            matchedCount: filtered.length,
            returnedCount: Math.min(limit, filtered.length),
            flagshipNodes: [
                'b2b-company-enrich-mcp',
                'gas-pulse-mcp',
                'serp-markdown-crawler-mcp',
                'web3-wallet-kyt-mcp',
                'adsb-flight-tracker-mcp'
            ],
            tools: filtered.slice(0, limit).map((t) => ({
                id: t.id,
                title: t.title || t.name,
                domain: t.domain,
                billingTier: PREMIUM_TIER_NODES.has(t.id) ? 'api-call-premium' : 'api-call',
                description: sanitizeCatalogDescription(t.description)
            }))
        }
    };
}

Actor.main(async () => {
    const input = (await Actor.getInput()) || {};
    const explicitToolName = String(input.toolName || '').trim();
    const explicitNodeId = String(input.nodeId || '').trim();
    const cleanToolName = (explicitToolName && explicitToolName.toLowerCase() !== 'list')
        ? explicitToolName
        : (explicitNodeId || explicitToolName || 'list');

    if (!cleanToolName || cleanToolName.toLowerCase() === 'list') {
        const listOpts = (input.payload && typeof input.payload === 'object' && !Array.isArray(input.payload))
            ? input.payload
            : {};
        const listOut = await fetchCatalogList(listOpts);
        await Actor.pushData(listOut);
        await Actor.setStatusMessage(
            `Returned ${listOut.data.returnedCount} of ${listOut.data.totalCatalogCount} microservices in ${listOut.latencyMs}ms.`
        );
        return;
    }

    if (!/^[a-z0-9-]+$/i.test(cleanToolName)) {
        const msg = `Invalid toolName format: "${cleanToolName}". Use toolName="list" to inspect valid slugs.`;
        await Actor.setStatusMessage(msg);
        await Actor.fail(msg);
        return;
    }

    let payloadObj = {};
    if (input.payload !== undefined && input.payload !== null) {
        try {
            payloadObj = typeof input.payload === 'string' ? JSON.parse(input.payload) : input.payload;
        } catch (_) {
            const msg = 'Payload must be a valid JSON object';
            await Actor.setStatusMessage(msg);
            await Actor.fail(msg);
            return;
        }
    }
    if (!payloadObj || typeof payloadObj !== 'object' || Array.isArray(payloadObj)) {
        payloadObj = {};
    }

    const apifyServiceKey = String(process.env.M2MCENT_APIFY_SERVICE_KEY || '').trim();
    if (apifyServiceKey.length < 32) {
        const msg = 'Service temporarily unavailable: Apify backend bridge authentication is not configured.';
        await Actor.setStatusMessage(msg);
        await Actor.fail(msg);
        return;
    }

    const started = Date.now();
    const gatewayUrl = `${GATEWAY_BASE}/${cleanToolName}/api/process`;

    try {
        const response = await axios.post(gatewayUrl, payloadObj, {
            headers: {
                'Content-Type': 'application/json',
                'X-M2M-Apify-Service-Key': apifyServiceKey
            },
            validateStatus: () => true,
            timeout: 20000
        });

        if (response.status === 402) {
            const msg = `Upstream service authentication failed for ${cleanToolName}. Please retry or report this issue in Apify Console.`;
            await Actor.setStatusMessage(msg);
            await Actor.fail(msg);
            return;
        }

        if (response.status >= 400) {
            const snippet = typeof response.data === 'object' && response.data !== null
                ? JSON.stringify(response.data).slice(0, 240)
                : String(response.data || '').slice(0, 240);
            const msg = `Service returned HTTP ${response.status} for ${cleanToolName}: ${snippet}`;
            await Actor.setStatusMessage(msg);
            await Actor.fail(msg);
            return;
        }

        const eventName = PREMIUM_TIER_NODES.has(cleanToolName) ? 'api-call-premium' : 'api-call';
        const chargeRes = await safeChargeEvent(eventName, 1);
        if (!chargeRes && eventName !== 'api-call') {
            await safeChargeEvent('api-call', 1);
        }

        const latencyMs = Date.now() - started;
        const payloadData = response.data?.data ?? response.data;
        const successOut = {
            status: response.status,
            toolName: cleanToolName,
            message: 'Execution completed successfully',
            paymentMode: 'apify_native',
            latencyMs,
            data: typeof payloadData === 'object' && payloadData !== null && !Array.isArray(payloadData)
                ? payloadData
                : { raw: payloadData }
        };
        await Actor.pushData(successOut);
        await Actor.setStatusMessage(`Completed ${cleanToolName} (${response.status}) in ${latencyMs}ms.`);
    } catch (error) {
        const msg = `Execution failed: ${error.message}`;
        await Actor.setStatusMessage(msg);
        await Actor.fail(msg);
    }
});
