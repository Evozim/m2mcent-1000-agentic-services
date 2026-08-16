# 🌐 M2MCent: Universal Gateway to 1,004+ AI Agent Microservices

Welcome to **M2MCent**, the largest decentralized ecosystem of specialized machine-to-machine (M2M) microservices, APIs, and Model Context Protocol (MCP) tools in the world.

This Apify Actor functions as a **High-Performance Unified Router** allowing autonomous AI agents (Claude, GPT-4o, LangChain, CrewAI, AutoGen, Cursor, LlamaIndex) to dynamically discover, orchestrate, and execute over **1,004 production-ready microservices** through a single integration.

---

## ⚡ Key Highlights
- **1,004 Dedicated Tools**: From automated smart contract auditing and deepfake detection to industrial SCADA telemetry, satellite imagery, 3D WebGL generation, and real-time scrapers.
- **Built-in x402 V2 Protocol**: Native machine-to-machine micropayments in USDC on Base Mainnet.
- **Zero Cold-Starts**: Ultra-fast serverless architecture responding in milliseconds.
- **Dynamic Introspection**: Autonomous tool discovery for LLMs via the `toolName: "list"` command.

---

## 🧭 Major Capability Domains

| Domain | Key Tools Included | Typical Use Cases |
| :--- | :--- | :--- |
| **🛡️ Cybersecurity & DevSecOps** | `codevulnerability-mcp`, `vaultguard-mcp`, `adversarial-prompt-shield-mcp`, `fuzz-breaker-mcp`, `anti-stuxnet-plc-mcp` | OWASP live audits, .env secret protection, jailbreak filtering, automated fuzzing. |
| **⚡ Web3, DeFi & Cryptography** | `defi-sentinel-mcp`, `gaspulse-mcp`, `sol-forge-mcp`, `quantum-shield-mcp`, `washpulse-mcp`, `multi-bridge-mcp` | Smart contract generation, DEX liquidity audit, post-quantum crypto, cross-chain pathfinding. |
| **🧠 LLM Optimization & RAG** | `token-diet-mcp`, `repo-to-rag-mcp`, `recallmax-neural-mcp`, `verighost-mcp`, `semantic-hash-indexer-mcp` | Token compression (-60% latency), GitHub vectorization, hallucination detection. |
| **🔍 Web Scraping & OSINT** | `google-search-scraper-mcp`, `linkedin-profile-scraper-mcp`, `amazon-price-tracker-mcp`, `apollo-io-lead-gen-mcp` | B2B lead enrichment, price monitoring, real-time social sentiment. |
| **🏭 IoT, Robotics & SCADA** | `modbus-rtu-tcp-parser-mcp`, `bacnet-ip-discovery-mcp`, `ros2-dds-qos-mcp`, `can-bus-decoder-mcp` | Smart building telemetry, robotic arms trajectory, automotive CAN-bus decoding. |
| **🎨 3D, Audio & Multimodal** | `3d-meshweaver-mcp`, `threejs-weaver-mcp`, `deepvoice-guard-mcp`, `spatial-audio-panner-mcp` | 3D mesh optimization, WebGL shaders, voice deepfake forensics, binaural rendering. |
| **⚖️ Legal, Tax & B2B Invoicing** | `lexguard-mcp`, `tos-slayer-mcp`, `legal-validator-mcp`, `sat-cfdi-invoicing-mcp` | Contract risk scoring, TOS clause simplification, corporate tax compliance. |
| **📦 Logistics, Supply Chain & Space** | `logisticflow-mcp`, `adsb-flight-tracker-mcp`, `ais-vessel-tracker-mcp`, `cold-chain-reefer-mcp` | Route optimization, maritime vessel tracking, flight ADS-B radar, cold storage SLA. |

---

## 🛠️ How AI Agents Interact with M2MCent

### 1. Dynamic Tool Discovery (`list`)
Agents can query the entire catalog of available services in real time:

```json
{
  "toolName": "list"
}
```
**Output**: Returns metadata, descriptions, schemas, and endpoint identifiers for all 1,004 tools.

---

### 2. Executing a Specific Microservice
Pass the selected `toolName` and its parameters in `payload`:

#### Example A: Smart Contract Vulnerability Audit
```json
{
  "toolName": "defi-sentinel-mcp",
  "payload": {
    "contractCode": "contract Vault { ... }",
    "fuzzIterations": 500
  }
}
```

#### Example B: B2B Lead Enrichment & Intelligence
```json
{
  "toolName": "apollo-io-lead-gen-mcp",
  "payload": {
    "domain": "stripe.com",
    "role": "Head of AI"
  }
}
```

#### Example C: 3D Mesh Optimization (GLTF/USDZ)
```json
{
  "toolName": "3d-meshweaver-mcp",
  "payload": {
    "meshUrl": "https://assets.example.com/robot.gltf",
    "targetReduction": 0.5
  }
}
```

---

## 💰 Monetization & The x402 Protocol

When invoking premium microservices that require computation or external API bandwidth:
1. The gateway responds with an HTTP `402 Payment Required` header challenge.
2. The challenge includes the **Base Mainnet wallet** and required **micro-amount in USDC** (e.g. `$0.02 - $0.15 USDC`).
3. Autonomous agents settle the transaction on-chain via Coinbase Developer Platform (CDP) or Web3 wallets and instantly receive their data.

---

## 🤖 Python / TypeScript Integration Examples

### Python (Apify Client + LangChain)
```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

# 1. Discover all tools
run = client.actor("evozim/m2mcent-1000-agentic-services").call(run_input={"toolName": "list"})
catalog = client.dataset(run["defaultDatasetId"]).list_items().items[0]["data"]

# 2. Execute chosen tool
result_run = client.actor("evozim/m2mcent-1000-agentic-services").call(run_input={
    "toolName": "codevulnerability-mcp",
    "payload": {"codeSnippet": "SELECT * FROM users WHERE user = " + user_input}
})
print(client.dataset(result_run["defaultDatasetId"]).list_items().items)
```

---

## 📚 Documentation & Full Node Catalog
- **Master Directory (All 1,004 Tools)**: [View Complete Catalog of 1,004 Nodes (CATALOG_1000_NODES.md)](./CATALOG_1000_NODES.md)
- **Master Repository**: [GitHub - Evozim/m2mcent](https://github.com/Evozim/m2mcent)
- **Official Portal**: [m2mcent.com](https://m2mcent.com)
- **MCP Registry**: Search `M2MCent` on Smithery.ai
