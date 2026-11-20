# M2MCent: 1,062 AI Agent Microservices (Base Mainnet x402 V2 & Live Telemetry)

Access **1,062 deterministic AI agent microservices** from a single Apify Store Actor — covering **live B2B Domain OSINT, Web-to-Markdown extraction, Base L2 Web3 KYT/OFAC forensics, Base Mainnet Gas Oracle, live ADS-B flight radar, DeFi risk modeling, and industrial telemetry**.

Designed for autonomous AI frameworks (**LangChain, CrewAI, AutoGen, Claude MCP, Apify MCP Server**) that need verified, structured JSON outputs in under 2 seconds.

---

## Quick Start (Copy & Run)

### Input Example — Live B2B Corporate Domain OSINT

```json
{
  "nodeId": "b2b-company-enrich-mcp",
  "payload": {
    "domain": "coinbase.com"
  }
}
```

### Live Output Example

```json
{
  "status": 200,
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

| Node ID | Live Data Source | Example Input | Direct x402 Price |
| :--- | :--- | :--- | :---: |
| **`b2b-company-enrich-mcp`** | Live DNS (`A`, `MX`, `SPF`, `_dmarc`), TLS X.509 handshake & HTTP HEAD headers | `{"domain": "stripe.com"}` | `$0.025` |
| **`gas-pulse-mcp`** | Live Base Mainnet multi-RPC (`eth_gasPrice` + `eth_maxPriorityFeePerGas`) | `{"chainId": 8453}` | `$0.005` |
| **`serp-markdown-crawler-mcp`** | Live HTTP/HTTPS webpage fetch with clean HTML-to-Markdown conversion & JSON-LD extraction | `{"url": "https://news.ycombinator.com"}` | `$0.050` |
| **`web3-wallet-kyt-mcp`** | Live Base Mainnet RPC (`getBalance`, `getTransactionCount`, `getCode`, USDC `isBlacklisted`) + OFAC SDN | `{"walletAddress": "0x8aaBAB75bE8825d0f5D514a9a5cBa04B7bF84920"}` | `$0.025` |
| **`adsb-flight-tracker-mcp`** | Live ADS-B aircraft radar (ADSB.lol, airplanes.live, OpenSky Network) | `{"boundingBox": [39.5, -75.0, 41.5, -72.5]}` | `$0.005` |

---

## Pricing and Costs

- **Free Catalog Discovery & Schema Preview (`?dryRun=true`):** **$0.00**.
- **Direct x402 V2 Base Mainnet USDC (`https://api.m2mcent.com`):**
  - Icebreaker tier (`gas-pulse-mcp`, `adsb-flight-tracker-mcp`): **$0.005/call** (**$5.00 per 1,000 calls**).
  - Standard intelligence tier (`b2b-company-enrich-mcp`, `web3-wallet-kyt-mcp`): **$0.025/call** (**$25.00 per 1,000 calls**).
  - Web-to-Markdown extraction (`serp-markdown-crawler-mcp`): **$0.050/call** (**$50.00 per 1,000 calls**).
- **Web2 Apify Credit Billing (No Crypto Wallet):** Use our companion Pay-Per-Event Standby Actor `evozim/m2mcent-universal-proxy` (`$0.03/call` standard, `$0.06/call` premium).

---

## Integration Examples

### Python (`apify-client`)

```python
from apify_client import ApifyClient

client = ApifyClient("<YOUR_APIFY_TOKEN>")
run = client.actor("evozim/m2mcent-1000-agentic-services").call(run_input={
    "nodeId": "gas-pulse-mcp",
    "payload": {"chainId": 8453}
})
items = list(client.dataset(run["defaultDatasetId"]).iterate_items())
print(items[0])
```

### Direct x402 V2 / MCP Endpoints

- **Catalog JSON:** `https://api.m2mcent.com/api/v1/tools`
- **x402 Discovery:** `https://api.m2mcent.com/.well-known/x402.json`
- **Unified MCP Gateway:** `https://api.m2mcent.com/mcp`
- **Facilitator Docs:** `https://m2mcent.com/paywall`
