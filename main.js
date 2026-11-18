const { Actor } = require('apify');
const axios = require('axios');

Actor.main(async () => {
    const input = await Actor.getInput() || {};
    const toolName = input.toolName || 'list';

    if (toolName === 'list') {
        console.log('[M2MCent] Agent requested the full catalog of tools.');
        let catalogData;
        try {
            const response = await axios.get('https://api.m2mcent.com/api/v1/tools', { timeout: 8000 });
            catalogData = response.data;
        } catch (err) {
            console.log('[M2MCent] Falling back to internal catalog metadata.');
            catalogData = {
                status: 'operational',
                totalMicroservices: 1062,
                protocol: 'x402-v2',
                network: 'Base Mainnet',
                documentation: 'https://m2mcent.com'
            };
        }
        const listOut = {
            status: 200,
            message: 'M2MCent 1,062 microservices catalog ready',
            data: catalogData
        };
        await Actor.pushData(listOut);
        return;
    }

    const gatewayUrl = `https://api.m2mcent.com/${toolName}/api/process`;

    if (!input.payload) {
        throw new Error('payload is required for executing a tool');
    }

    let payloadObj = {};
    try {
        payloadObj = typeof input.payload === 'string' ? JSON.parse(input.payload) : input.payload;
    } catch (e) {
        throw new Error('Payload must be a valid JSON string');
    }

    console.log(`[M2MCent] Routing request to: ${gatewayUrl}`);

    try {
        const headers = { 'Content-Type': 'application/json' };
        if (input.paymentSignature) {
            headers['Payment-Signature'] = input.paymentSignature;
            console.log('[M2MCent] Injecting Payment-Signature header...');
        }

        const response = await axios.post(gatewayUrl, payloadObj, {
            headers,
            validateStatus: status => status < 500
        });

        if (response.status === 402) {
            console.log('\n[M2MCent] 💰 402 Payment Required received.');
            const reqHeader = response.headers['payment-required'] || response.headers['Payment-Required'];
            
            console.log('[M2MCent] Returning x402 challenge back to Apify Actor caller.');
            const out402 = {
                status: 402,
                message: 'Payment Required on Base Mainnet',
                x402_challenge: reqHeader,
                directive: "Pass your EIP-3009 signature in the 'paymentSignature' input field on your next run.",
                data: typeof response.data === 'object' && response.data !== null ? response.data : { raw: response.data }
            };
            await Actor.pushData(out402);
            return;
        }

        console.log('[M2MCent] ✅ Request successful!');
        const successOut = {
            status: 200,
            data: typeof response.data === 'object' && response.data !== null && !Array.isArray(response.data) ? response.data : { raw: response.data }
        };
        await Actor.pushData(successOut);

    } catch (error) {
        console.error('[M2MCent] Execution failed:', error.message);
        await Actor.setStatusMessage(`Failed: ${error.message}`);
        throw error;
    }
});
