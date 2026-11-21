# M2MCent: 1,062 AI Agent Microservices

Access **1,062 deterministic AI agent microservices** from a single Apify Store Actor — covering **live B2B Domain OSINT, Web-to-Markdown extraction, Base L2 Web3 KYT/OFAC forensics, Base L2 Gas Oracle, live ADS-B flight radar, DeFi risk modeling, and industrial telemetry**.

Designed for autonomous AI frameworks (**LangChain, CrewAI, AutoGen, Claude MCP, Apify MCP Server**) that need verified, structured JSON outputs in under 2 seconds — billed seamlessly through your Apify account with zero external accounts or third-party setup required.

---

## Quick Start (Copy & Run)

### Input Example 1 — Browse the Live Catalog (`list`)

```json
{
  "toolName": "list",
  "payload": {
    "search": "web3",
    "limit": 20
  }
}
```

### Input Example 2 — Live B2B Corporate Domain OSINT (`b2b-company-enrich-mcp`)

```json
{
  "toolName": "b2b-company-enrich-mcp",
  "payload": {
    "domain": "coinbase.com"
  }
}
```

### Live Output Example

```json
{
  "status": 200,
  "toolName": "b2b-company-enrich-mcp",
  "message": "Execution completed successfully",
  "paymentMode": "apify_native",
  "latencyMs": 380,
  "data": {
    "domain": "coinbase.com",
    "mailProvider": "Google Workspace",
    "mxRecords": ["aspmx.l.google.com", "alt1.aspmx.l.google.com"],
    "spfPolicy": "v=spf1 include:amazonses.com include:_spf.google.com -all",
    "dmarcPolicy": "v=DMARC1; p=reject;",
    "tlsCertificate": {
      "subjectCN": "coinbase.com",
      "issuerO": "Google Trust Services",
      "protocol": "TLSv1.3"
    },
    "techStack": ["TLSv1.3", "HSTS", "Cloudflare", "Google Workspace", "Stripe", "Atlassian"]
  }
}
```

---

## 5 Flagship Live-Telemetry Nodes (Zero Mock Data)

Every flagship endpoint queries live external networks with strict timeouts and returns honest HTTP error codes (`502`/`503`/`504`) if an upstream source is unreachable — never fabricated fallback data.

| Tool Name | Live Data Source | Example Input |
| :--- | :--- | :--- |
| **`b2b-company-enrich-mcp`** | Live DNS (`A`, `MX`, `SPF`, `_dmarc`), TLS X.509 handshake & HTTP HEAD headers | `{"domain": "stripe.com"}` |
| **`gas-pulse-mcp`** | Live Base L2 multi-RPC (`eth_gasPrice` + `eth_maxPriorityFeePerGas`) | `{"chainId": 8453}` |
| **`serp-markdown-crawler-mcp`** | Live HTTP/HTTPS webpage fetch with clean HTML-to-Markdown conversion & JSON-LD extraction | `{"url": "https://news.ycombinator.com"}` |
| **`web3-wallet-kyt-mcp`** | Live Base L2 RPC (`getBalance`, `getTransactionCount`, `getCode`, token blacklist check) + OFAC SDN | `{"walletAddress": "0x8aaBAB75bE8825d0f5D514a9a5cBa04B7bF84920"}` |
| **`adsb-flight-tracker-mcp`** | Live ADS-B aircraft radar (ADSB.lol, airplanes.live, OpenSky Network) | `{"boundingBox": [39.5, -75.0, 41.5, -72.5]}` |

---

## Pricing and Costs

All usage and billing are handled **100% natively through your Apify account** — no external accounts, wallets, or third-party billing required. Check the **Pricing** tab on this Apify Store page for current usage and compute rates.

- **Catalog Discovery (`toolName: "list"`):** Lightweight catalog query using minimal Apify compute.
- **Live Microservice Execution:** Standard Apify Actor execution; failed upstream requests never trigger paid event charges.

---

## Integration Examples

### Python (`apify-client`)

```python
from apify_client import ApifyClient

client = ApifyClient("<YOUR_APIFY_TOKEN>")
run = client.actor("evozim/m2mcent-1000-agentic-services").call(run_input={
    "toolName": "gas-pulse-mcp",
    "payload": {"chainId": 8453}
})
items = list(client.dataset(run["defaultDatasetId"]).iterate_items())
print(items[0])
```

### JavaScript / TypeScript (`apify-client`)

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor('evozim/m2mcent-1000-agentic-services').call({
    toolName: 'b2b-company-enrich-mcp',
    payload: { domain: 'coinbase.com' },
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items[0].data);
```

---

## Support & Issues

Have a question, feature request, or bug report? Open an issue directly in the **Issues** tab on this Apify Store page.
