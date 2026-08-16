const { Actor } = require('apify');
const axios = require('axios');

Actor.main(async () => {
    const input = await Actor.getInput();
    if (!input || !input.toolName) {
        throw new Error('toolName is required');
    }

    const gatewayUrl = `https://api.m2mcent.com/api/v1/services/${input.toolName !== 'list' ? input.toolName : ''}`;
    
    if (input.toolName === 'list') {
        console.log('[M2MCent] Agent requested the full catalog of tools.');
        const response = await axios.get('https://api.m2mcent.com/mcp');
        const listOut = {
            status: 200,
            data: response.data
        };
        await Actor.setValue('OUTPUT', listOut);
        await Actor.pushData(listOut);
        return;
    }

    if (!input.payload) {
        throw new Error('payload is required for executing a tool');
    }

    let payloadObj = {};
    try {
        payloadObj = typeof input.payload === 'string' ? JSON.parse(input.payload) : input.payload;
    } catch (e) {
        throw new Error('Payload must be a valid JSON string');
    }

    console.log(\[M2MCent] Routing request to: \\);

    try {
        const response = await axios.post(gatewayUrl, payloadObj, {
            headers: { 'Content-Type': 'application/json' },
            validateStatus: status => status < 500
        });

        if (response.status === 402) {
            console.log('\n[M2MCent] ?? 402 Payment Required received.');
            const reqHeader = response.headers['payment-required'] || response.headers['Payment-Required'];
            
            // If user did not provide privateKey, we return the challenge so their Agent can handle it
            if (!input.privateKey) {
                console.log('[M2MCent] Returning x402 challenge back to Apify Actor caller.');
                const out402 = {
                    status: 402,
                    message: 'Payment Required on Base Mainnet',
                    x402_challenge: reqHeader,
                    data: typeof response.data === 'object' && response.data !== null ? response.data : { raw: response.data }
                };
                await Actor.setValue('OUTPUT', out402);
                await Actor.pushData(out402);
                return;
            }
            
            // If private key provided, we theoretically sign and settle here (omitted for brevity, handled by gateway if sig provided)
            console.log('[M2MCent] Key provided, but auto-signing within Apify actor requires CDP facilitator package.');
            throw new Error('Auto-signing inside Apify not fully implemented in this script. Handle 402 externally.');
        }

        console.log('[M2MCent] ✅ Request successful!');
        const successOut = {
            status: 200,
            data: typeof response.data === 'object' && response.data !== null && !Array.isArray(response.data) ? response.data : { raw: response.data }
        };
        await Actor.setValue('OUTPUT', successOut);
        await Actor.pushData(successOut);

    } catch (error) {
        console.error('[M2MCent] Execution failed:', error.message);
        await Actor.setStatusMessage(\Failed: \\);
        throw error;
    }
});
