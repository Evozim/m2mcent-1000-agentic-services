const { Actor } = require('apify');
const axios = require('axios');

Actor.main(async () => {
    const input = await Actor.getInput();
    if (!input || !input.toolName || !input.payload) {
        throw new Error('toolName and payload are required');
    }

    const gatewayUrl = \https://api.m2mcent.com/api/v1/services/\\;
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
                await Actor.setValue('OUTPUT', {
                    status: 402,
                    message: 'Payment Required on Base Mainnet',
                    x402_challenge: reqHeader,
                    gateway_response: response.data
                });
                return;
            }
            
            // If private key provided, we theoretically sign and settle here (omitted for brevity, handled by gateway if sig provided)
            console.log('[M2MCent] Key provided, but auto-signing within Apify actor requires CDP facilitator package.');
            throw new Error('Auto-signing inside Apify not fully implemented in this script. Handle 402 externally.');
        }

        console.log('[M2MCent] ? Request successful!');
        await Actor.setValue('OUTPUT', response.data);

    } catch (error) {
        console.error('[M2MCent] Execution failed:', error.message);
        await Actor.setStatusMessage(\Failed: \\);
        throw error;
    }
});
