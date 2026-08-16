# 🌐 M2MCent: Universal Gateway to 1,004+ AI Agent Microservices

Welcome to **M2MCent**, the world's most comprehensive decentralized catalog of machine-to-machine (M2M) microservices, specialized APIs, and Model Context Protocol (MCP) tools designed specifically for autonomous AI Agents.

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

## 📋 Full Directory of All 1,004 Microservices (Searchable)
*All services below are accessible via this Apify Gateway. The standard invocation fee is **$0.05 USDC** via the x402 protocol.*

### 🎨 3D, Audio & Spatial Multimodal
- ``3d-meshweaver-mcp``, ``3d-pallet-packing-mcp``, ``audio-anonymizer-voice-scrambler-mcp``, ``audio-description-mcp``, ``audio-watermarking-detector-mcp``, 
- ``draco-mesh-compressor-mcp``, ``head-tracking-audio-sync-mcp``, ``hrtf-binaural-renderer-mcp``, ``image-metadata-exif-mcp``, ``matchmove-3d-camera-mcp``, 
- ``mesh-collision-hull-mcp``, ``meshtastic-915mhz-mcp``, ``navmesh-pathfinder-mcp``, ``nerf-to-mesh-exporter-mcp``, ``occlusion-audio-filter-mcp``, 
- ``photogrammetry-mesh-builder-mcp``, ``podcast-audio-transcriber-mcp``, ``react-video-automator-mcp``, ``render-stream-mcp``, ``spatial-audio-3d-synthesizer-mcp``, 
- ``spatial-audio-panner-mcp``, ``synthetic-video-deepfake-scanner-mcp``, ``tiktok-audio-extractor-mcp``, ``tiktok-video-cleaner-mcp``, ``video-factory-mcp``, 
- ``video-frame-extractor-mcp``, ``video-highlight-extractor-mcp``, ``video-stabilizer-mcp``, ``video-summarizer-llm-mcp``, ``volumetric-video-encoder-mcp``

### Autonomous Agent Utility
- ``4-20ma-analog-converter-mcp``, ``5g-core-nfv-mcp``, ``90-percent-liquidity-advance-mcp``, ``accounts-receivable-ledger-mcp``, ``acoustic-reverb-simulator-mcp``, 
- ``active-seat-metering-mcp``, ``actuarial-life-table-mcp``, ``ad-fraud-click-detector-mcp``, ``ad-sniper-mcp``, ``ad-spend-auditor-mcp``, 
- ``adversarial-suffix-mcp``, ``aegis-policy-mcp``, ``affiliate-link-attribution-mcp``, ``afforestation-satellite-mcp``, ``agent-collision-preventer-mcp``, 
- ``agent-collusion-detector-mcp``, ``agent-council-voting-mcp``, ``agent-credit-history-mcp``, ``agent-phone-mcp``, ``agent-slashing-protocol-mcp``, 
- ``agent-telephony-mcp``, ``agentic-credit-line-issuer-mcp``, ``agentic-payroll-processor-mcp``, ``agentphone-ai-mcp``, ``agile-sprint-mcp``, 
- ``ai-fleet-cards-mcp``, ``ai-humanizer-mcp``, ``ai-right-to-opt-out-gate-mcp``, ``ai-safety-incident-logger-mcp``, ``ai-watermark-provenance-verifier-mcp``, 
- ``airbnb-host-analyzer-mcp``, ``airbnb-smart-lock-mcp``, ``airport-slot-allocator-mcp``, ``akamai-bot-manager-bypass-mcp``, ``albedo-delighter-mcp``, 
- ``algorithmic-bias-scrubber-mcp``, ``aliexpress-dropship-finder-mcp``, ``ambient-occlusion-map-mcp``, ``ambisonics-b-format-encoder-mcp``, ``amr-fleet-dispatcher-mcp``, 
- ``angellist-startup-jobs-mcp``, ``anomaly-detection-sentinel-mcp``, ``anonymous-credential-issuer-mcp``, ``anti-collusion-detector-mcp``, ``anti-sandwich-slippage-mcp``, 
- ``anti-stuxnet-plc-mcp``, ``api-key-load-balancer-mcp``, ``api-quota-balancer-mcp``, ``api-rate-limit-enforcer-mcp``, ``apify-native-mcp``, 
- ``apollo-io-lead-gen-mcp``, ``app-store-builder-mcp``, ``apple-vision-pro-optimizer-mcp``, ``ar-kit-blendshape-mcp``, ``ar-plane-detector-mcp``, 
- ``arabic-calligraphy-parser-mcp``, ``arbitration-fee-splitter-mcp``, ``architecture-dna-mcp``, ``ashrae-compliance-mcp``, ``auth-sentinel-mcp``, 
- ``auto-telematics-policy-mcp``, ``automated-amendment-negotiator-mcp``, ``automated-debt-collector-mcp``, ``automated-dpia-reporter-mcp``, ``automated-xml-invoicing-mcp``, 
- ``automation-weaver-mcp``, ``autonomous-haul-truck-mcp``, ``autonomous-tractor-path-mcp``, ``aws-builder-mcp``, ``aws-key-revoker-webhook-mcp``, 
- ``b2b-lead-closer-mcp``, ``backhaul-empty-return-mcp``, ``bacnet-ip-discovery-mcp``, ``bandwidth-micro-marketplace-mcp``, ``bankruptcy-asset-liquidator-mcp``, 
- ``barcode-qr-decoder-mcp``, ``base-to-polygon-relayer-mcp``, ``base64-payload-decoder-mcp``, ``batch-request-bundler-mcp``, ``battery-return-home-mcp``, 
- ``best-and-final-offer-mcp``, ``bestbuy-deal-alerter-mcp``, ``bft-swarm-vote-aggregator-mcp``, ``bias-auditor-mcp``, ``bias-drift-monitor-mcp``, 
- ``bid-clarification-q-and-a-mcp``, ``bidding-strategy-optimizer-mcp``, ``binance-orderbook-mcp``, ``bing-ai-results-mcp``, ``bio-data-parser-mcp``, 
- ``bio-safe-audit-mcp``, ``blendshape-mapper-mcp``, ``blind-signature-voting-gate-mcp``, ``blinded-macaroon-signer-mcp``, ``bms-schedule-override-mcp``, 
- ``body-gesture-synthesizer-mcp``, ``boids-flocking-algorithm-mcp``, ``boiler-water-temp-mcp``, ``bone-rig-retargeter-mcp``, ``botnet-behavior-analyzer-mcp``, 
- ``bug-bounty-hunter-mcp``, ``bulk-shipping-negotiator-mcp``, ``bulletproofs-range-check-mcp``, ``can-bus-decoder-mcp``, ``captcha-bypass-attestation-gate-mcp``, 
- ``catalog-engine-mcp``, ``ccs-chademo-protocol-mcp``, ``cdn-cache-warmup-agent-mcp``, ``cell-balancing-algorithm-mcp``, ``cell-tower-handoff-mcp``, 
- ``certora-rule-generator-mcp``, ``cgroup-cpu-throttler-mcp``, ``charge-curve-optimizer-mcp``, ``chargeback-insurance-pool-mcp``, ``cheap-compute-sniper-mcp``, 
- ``chembl-affinity-oracle-mcp``, ``chiller-cop-efficiency-mcp``, ``chinese-scroll-digitizer-mcp``, ``chirpstack-lorawan-mcp``, ``chroot-filesystem-jail-mcp``, 
- ``claim-denial-appeal-mcp``, ``clarity-gate-mcp``, ``clause-risk-score-evaluator-mcp``, ``clawback-prevention-sentinel-mcp``, ``cleancode-ai-mcp``, 
- ``clinical-phase-analyzer-mcp``, ``clinical-trial-matcher-mcp``, ``cloth-physics-solver-mcp``, ``cloudflare-turnstile-bypass-mcp``, ``cloudscale-sim-mcp``, 
- ``co2-inference-calculator-mcp``, ``cobot-safety-zone-mcp``, ``coingecko-historical-mcp``, ``cold-vault-migrator-mcp``, ``collusion-detection-sentinel-mcp``, 
- ``commodity-futures-oracle-mcp``, ``computer-vision-damage-mcp``, ``computer-vision-defect-mcp``, ``conflict-minerals-audit-mcp``, ``consensus-voter-mcp``, 
- ``cookie-stuffing-detector-mcp``, ``cooperative-dividend-mcp``, ``cooperative-swarm-incentiver-mcp``, ``copyrighted-music-fingerprint-matcher-mcp``, ``coq-proof-assistant-mcp``, 
- ``coral-tpu-delegate-mcp``, ``corporate-kyc-registry-mcp``, ``corporate-treasury-multisig-mcp``, ``cost-optimal-model-selector-mcp``, ``counter-offer-bot-mcp``, 
- ``craigslist-local-deals-mcp``, ``credit-risk-mcp``, ``crispr-cas9-offtarget-mcp``, ``crop-pest-diagnostic-mcp``, ``crop-yield-insurance-mcp``, 
- ``cross-company-agent-dispute-court-mcp``, ``cross-device-attribution-mcp``, ``cross-docking-coordinator-mcp``, ``cross-modal-embedding-aligner-mcp``, ``cross-shard-state-sync-mcp``, 
- ``crunchbase-funding-mcp``, ``cuneiform-tablet-reader-mcp``, ``customs-clearance-bot-mcp``, ``customs-duty-calculator-mcp``, ``cyber-breach-liability-mcp``, 
- ``damaged-text-inpainter-mcp``, ``dan-jailbreak-filter-mcp``, ``dark-pool-liquidity-mcp``, ``darknet-address-filter-mcp``, ``darkweb-breach-mcp``, 
- ``darkweb-threat-feed-mcp``, ``darwin-ideation-mcp``, ``data-diode-unidirectional-mcp``, ``data-observability-mcp``, ``data-poisoning-detector-mcp``, 
- ``datadome-bypass-agent-mcp``, ``datahealth-observer-mcp``, ``ddos-scrubbing-proxy-node-mcp``, ``deadlock-resolver-mcp``, ``debt-collection-bot-mcp``, 
- ``decentralized-credit-bureau-mcp``, ``deepfake-lens-mcp``, ``deepfake-sentinel-mcp``, ``default-probability-model-mcp``, ``default-risk-oracle-mcp``, 
- ``depreciation-value-calculator-mcp``, ``depth-map-estimator-mcp``, ``devrel-amplifier-mcp``, ``dialogue-distiller-mcp``, ``dicom-imaging-analyzer-mcp``, 
- ``diesel-anti-theft-mcp``, ``dilithium-signature-verifier-mcp``, ``direct-air-capture-bidder-mcp``, ``discount-coupon-validator-mcp``, ``displacement-height-map-mcp``, 
- ``dispute-penalty-calculator-mcp``, ``distributed-lock-service-mcp``, ``dnp3-protocol-analyzer-mcp``, ``docdigest-mcp``, ``dockerfile-credential-mcp``, 
- ``document-layout-analyzer-mcp``, ``dolby-atmos-metadata-mcp``, ``domain-authority-checker-mcp``, ``domain-dnssec-trust-verifier-mcp``, ``drayage-port-scheduler-mcp``, 
- ``drill-core-logger-mcp``, ``driver-fatigue-camera-mcp``, ``drug-interaction-checker-mcp``, ``dune-analytics-query-mcp``, ``duplicate-content-remover-mcp``, 
- ``dutch-auction-surplus-mcp``, ``dynamic-discounting-mcp``, ``dynamic-procurement-oracle-mcp``, ``ebay-auction-sniper-mcp``, ``eco-optimizer-mcp``, 
- ``edge-inference-benchmarker-mcp``, ``edge-latency-triangulator-mcp``, ``eip5564-stealth-address-mcp``, ``eip712-signature-bridge-mcp``, ``eld-logbook-compliance-mcp``, 
- ``electronic-health-record-mcp``, ``elevator-dispatch-mcp``, ``embedding-model-migrator-mcp``, ``embedding-poisoning-scanner-mcp``, ``emergency-global-pause-mcp``, 
- ``empire-treasury-multisig-mcp``, ``end-effector-grasp-mcp``, ``energy-consumption-meter-oracle-mcp``, ``energy-monitoring-plug-mcp``, ``energy-syndicate-buyer-mcp``, 
- ``enterprise-b2b-mediator-mcp``, ``entity-relationship-extractor-mcp``, ``env-locker-mcp``, ``env-variable-obfuscator-mcp``, ``ephemeral-docker-jail-mcp``, 
- ``ephemeral-vpn-session-mcp``, ``esd-emergency-shutdown-mcp``, ``esg-certification-auditor-mcp``, ``etsy-trend-analyzer-mcp``, ``eu-ai-act-risk-classifier-mcp``, 
- ``ev-charge-broker-mcp``, ``evm-opcode-fuzzer-mcp``, ``excess-inventory-sweeper-mcp``, ``facial-mocap-retargeter-mcp``, ``factoring-yield-farmer-mcp``, 
- ``fbx-animation-extractor-mcp``, ``feature-flag-entitlement-mcp``, ``featured-snippet-extractor-mcp``, ``fedex-tracking-oracle-mcp``, ``fertilizer-n-p-k-oracle-mcp``, 
- ``fft-vibration-analysis-mcp``, ``fhir-r4-parser-mcp``, ``fiat-onramp-mcp``, ``fiber-optic-fault-mcp``, ``financial-advice-disclaimer-mcp``, 
- ``fine-tuned-model-weights-merger-mcp``, ``fine-tuning-quality-scorer-mcp``, ``flash-crash-halt-mcp``, ``flash-loan-liquidator-mcp``, ``flashbots-bundle-sender-mcp``, 
- ``flashloan-attack-fuzzer-mcp``, ``fleet-range-estimator-mcp``, ``fluid-particle-emitter-mcp``, ``fp16-mixed-precision-mcp``, ``fraud-claim-detector-mcp``, 
- ``freemium-conversion-scorer-mcp``, ``front-running-protector-mcp``, ``front-running-simulator-mcp``, ``fuel-surcharge-oracle-mcp``, ``fuzz-breaker-mcp``, 
- ``gas-pulse-mcp``, ``gastor-motherboard-mcp``, ``gdpr-compliance-auditor-mcp``, ``gdpr-pii-scrubber-mcp``, ``genesis-block-archiver-mcp``, 
- ``geometry-simplifier-mcp``, ``geothermal-yield-oracle-mcp``, ``ghost-embedding-cleaner-mcp``, ``ghostblock-mcp``, ``git-commit-history-scanner-mcp``, 
- ``github-action-secret-mcp``, ``glassdoor-company-reviews-mcp``, ``global-x402-fee-distributor-mcp``, ``gltf-texture-packer-mcp``, ``gltf-to-usdz-converter-mcp``, 
- ``google-flights-matrix-mcp``, ``google-news-aggregator-mcp``, ``gpu-capacity-auctioneer-mcp``, ``gpu-hardware-fingerprinter-mcp``, ``grandmaster-api-gateway-mcp``, 
- ``grant-proposal-writer-mcp``, ``green-compute-certificate-issuer-mcp``, ``green-screen-keyer-mcp``, ``grid-demand-response-mcp``, ``grid-demand-response-pause-gate-mcp``, 
- ``grid-trading-bot-mcp``, ``groth16-proof-verifier-mcp``, ``hallucination-detector-mcp``, ``harmful-content-classifier-mcp``, ``hashicorp-vault-sync-mcp``, 
- ``hazmat-compliance-checker-mcp``, ``hcaptcha-solver-oracle-mcp``, ``hdr-cubemap-stitcher-mcp``, ``header-bidding-wrapper-mcp``, ``headless-browser-stealth-mcp``, 
- ``headless-browser-stealth-patcher-mcp``, ``helium-financial-mcp``, ``helium-network-miner-mcp``, ``heterogeneous-compute-balancer-mcp``, ``hieroglyph-translator-mcp``, 
- ``high-risk-exchange-mcp``, ``high-ticket-dispute-court-mcp``, ``hipaa-phi-sanitizer-mcp``, ``historian-data-tamper-mcp``, ``historical-ligature-resolver-mcp``, 
- ``historical-log-archiver-mcp``, ``hl7-v2-message-broker-mcp``, ``hmi-unauthorized-access-mcp``, ``hnsw-graph-connectivity-repair-mcp``, ``home-assistant-yaml-mcp``, 
- ``homomorphic-encryption-proxy-mcp``, ``html-to-markdown-cleaner-mcp``, ``humanoid-balance-mcp``, ``iaq-air-quality-mcp``, ``icd10-mapper-oracle-mcp``, 
- ``iec61850-substation-mcp``, ``ik-inverse-kinematics-mcp``, ``impermanent-loss-hedger-mcp``, ``industrial-edge-gateway-mcp``, ``inference-cost-hedger-mcp``, 
- ``insurance-claim-auto-filer-mcp``, ``int8-quantization-mcp``, ``international-nda-drafter-mcp``, ``interoperability-message-bus-mcp``, ``interstellar-node-registry-mcp``, 
- ``ioc-malware-hash-mcp``, ``ip-infringement-scanner-mcp``, ``irrigation-schedule-mcp``, ``irs-compliance-check-oracle-mcp``, ``irs-form-1099-generator-mcp``, 
- ``jetson-cuda-accelerator-mcp``, ``joint-venture-treasury-mcp``, ``json-payload-minifier-mcp``, ``jsonl-dataset-exporter-mcp``, ``jurisdiction-governing-law-mcp``, 
- ``k-framework-semantics-mcp``, ``kinematic-character-controller-mcp``, ``knowledge-graph-compressor-mcp``, ``kyber-key-encapsulation-mcp``, ``kyc-identity-verifier-mcp``, 
- ``labor-trends-mcp``, ``language-detector-filter-mcp``, ``latency-penalty-calculator-mcp``, ``latin-papyrus-ocr-mcp``, ``lease-agreement-analyzer-mcp``, 
- ``legacy-migrator-mcp``, ``lemon-law-compliance-mcp``, ``leo-satellite-uplink-mcp``, ``lidar-360-collision-mcp``, ``lidar-las-laz-parser-mcp``, 
- ``lidar-odometry-mcp``, ``lifetime-value-revshare-mcp``, ``linear-broker-mcp``, ``linkedin-lead-gen-mcp``, ``liquidity-pause-trigger-mcp``, 
- ``liquidity-pool-balancer-mcp``, ``lithium-degradation-mcp``, ``live2d-animator-mcp``, ``lod-generator-mcp``, ``logisticflow-mcp``, 
- ``logoscout-mcp``, ``logsentinel-mcp``, ``lyft-fare-estimator-mcp``, ``m2m-vat-calculator-oracle-mcp``, ``m2mcent-supreme-court-mcp``, 
- ``machine-downtime-predictor-mcp``, ``malicious-payload-honeypot-mcp``, ``marinetraffic-vessel-mcp``, ``master-swarm-orchestrator-mcp``, ``material-graph-converter-mcp``, 
- ``matter-over-thread-mcp``, ``mc-data-monitor-mcp``, ``medical-billing-coder-mcp``, ``metallic-roughness-packer-mcp``, ``metasploit-payload-analyzer-mcp``, 
- ``mev-boost-relay-mcp``, ``micro-royalty-distribution-node-mcp``, ``microgrid-island-mode-mcp``, ``milestone-refund-calculator-mcp``, ``mine-tailings-monitor-mcp``, 
- ``mitre-attck-mapper-mcp``, ``mixer-deposit-detector-mcp``, ``model-checking-verifier-mcp``, ``model-collapse-preventer-mcp``, ``model-explainability-auditor-mcp``, 
- ``model-fallback-negotiator-mcp``, ``model-hallucination-probability-oracle-mcp``, ``model-quantization-energy-tuner-mcp``, ``model-weights-hash-auditor-mcp``, ``moq-minimum-order-mcp``, 
- ``motion-blur-adder-mcp``, ``moveit-trajectory-mcp``, ``mqtt-v5-broker-bridge-mcp``, ``mrr-churn-predictor-mcp``, ``multi-agent-deadlock-breaker-mcp``, 
- ``multi-bridge-mcp``, ``multi-level-mlm-divider-mcp``, ``multi-sig-agent-authorizer-mcp``, ``multi-sig-tiebreaker-mcp``, ``multi-touch-attribution-mcp``, 
- ``multimodal-ocr-handwriting-parser-mcp``, ``multisig-emergency-vote-mcp``, ``nash-equilibrium-calculator-mcp``, ``nash-equilibrium-solver-mcp``, ``ndvi-satellite-health-mcp``, 
- ``net-zero-pathway-oracle-mcp``, ``net30-net60-terms-negotiator-mcp``, ``network-health-panopticon-mcp``, ``network-namespace-isolate-mcp``, ``network-slicing-allocator-mcp``, 
- ``neural-graph-mapper-mcp``, ``no-fly-zone-compliance-mcp``, ``node-1000-immutable-beacon-mcp``, ``normal-map-baker-mcp``, ``normal-roughness-baker-mcp``, 
- ``notary-digital-signer-mcp``, ``nsfw-frame-censor-mcp``, ``nullifier-hash-generator-mcp``, ``nvd-cvss-v4-oracle-mcp``, ``obj-to-gltf-pipeline-mcp``, 
- ``occupancy-lighting-mcp``, ``ofac-sanctions-screener-mcp``, ``omniverse-scene-exporter-mcp``, ``onnx-graph-pruner-mcp``, ``openrtb-3-bidder-mcp``, 
- ``opensea-nft-floor-mcp``, ``openvino-npu-optimizer-mcp``, ``optical-flow-estimator-mcp``, ``optimistic-rollup-challenger-mcp``, ``oracle-data-feed-sla-verifier-mcp``, 
- ``oracle-jury-summoner-mcp``, ``order-book-spread-mcp``, ``order-flow-auction-mcp``, ``ore-purity-assay-mcp``, ``organic-text-engine-mcp``, 
- ``p2p-file-chunk-distributor-mcp``, ``packet-forwarder-mcp``, ``paleography-classifier-mcp``, ``pallet-lot-appraiser-mcp``, ``parametric-weather-insurance-mcp``, 
- ``pareto-optimal-negotiator-mcp``, ``past-performance-auditor-mcp``, ``payload-decoder-ttn-mcp``, ``payload-drop-calculator-mcp``, ``payroll-withholding-mcp``, 
- ``pdf-ocr-extractor-mcp``, ``pedersen-commitment-mcp``, ``peer-to-peer-lending-mcp``, ``peg-depeg-alerter-mcp``, ``pep-database-oracle-mcp``, 
- ``perimeterx-solver-mcp``, ``pgf-payment-channel-mcp``, ``pharmacokinetics-model-mcp``, ``philips-hue-sync-mcp``, ``pid-loop-tuner-mcp``, 
- ``pii-anonymizer-rgpd-mcp``, ``pii-data-exfiltration-mcp``, ``pitchdeck-auto-mcp``, ``pixar-usd-assembler-mcp``, ``platooning-convoy-mcp``, 
- ``plonk-circuit-builder-mcp``, ``ply-splat-compressor-mcp``, ``point-cloud-denoiser-mcp``, ``poisson-surface-reconstruction-mcp``, ``polyglot-debugger-mcp``, 
- ``polygon-reduction-optimizer-mcp``, ``port-congestion-oracle-mcp``, ``pose-estimation-openpose-mcp``, ``post-quantum-tls-tunnel-mcp``, ``pr-campaign-launcher-mcp``, 
- ``premium-risk-scorer-mcp``, ``presence-mmwave-radar-mcp``, ``prisoner-dilemma-simulator-mcp``, ``privacy-preserving-auth-mcp``, ``privacymask-mcp``, 
- ``profibus-data-logger-mcp``, ``programmatic-dsp-bridge-mcp``, ``proof-of-work-captcha-mcp``, ``prosody-pitch-analyzer-mcp``, ``protein-folding-alpha-mcp``, 
- ``protocol-upgrade-proposer-mcp``, ``proxy-collision-checker-mcp``, ``pue-datacenter-optimizer-mcp``, ``python-ast-sandbox-mcp``, ``qos-bandwidth-shaper-mcp``, 
- ``quantum-entropy-generator-mcp``, ``quantum-random-number-gen-mcp``, ``quantum-resistant-signature-oracle-mcp``, ``query-forge-mcp``, ``quickbooks-api-sync-agent-mcp``, 
- ``quiz-factory-mcp``, ``quorum-sensing-broker-mcp``, ``ram-state-freezer-mcp``, ``ran-optimization-mcp``, ``ransomware-negotiation-bot-mcp``, 
- ``rapier-wasm-physics-mcp``, ``rare-edge-case-generator-mcp``, ``rate-limit-manager-mcp``, ``raycast-hit-tester-mcp``, ``readability-score-eval-mcp``, 
- ``real-time-subtitles-translator-node-mcp``, ``recaptcha-v3-solver-mcp``, ``recursive-self-improvement-mcp``, ``reddit-keyword-monitor-mcp``, ``reddit-trend-hunter-mcp``, 
- ``reefer-temp-monitor-mcp``, ``reentrancy-detector-mcp``, ``refrigerated-temp-sla-mcp``, ``refurbished-grade-mcp``, ``regenerative-braking-mcp``, 
- ``renewable-energy-cert-mcp``, ``renewable-energy-credits-trader-mcp``, ``replacement-inventory-checker-mcp``, ``reputation-decay-calculator-mcp``, ``request-rate-throttler-mcp``, 
- ``residential-ip-micro-rotator-mcp``, ``residential-proxy-rotator-mcp``, ``resource-allocation-game-mcp``, ``rfp-compliance-matrix-mcp``, ``rfq-quote-generator-mcp``, 
- ``rife-60fps-interpolator-mcp``, ``rma-shipping-label-mcp``, ``room-impulse-response-mcp``, ``ros2-dds-qos-mcp``, ``route-weather-hazard-mcp``, 
- ``rssi-triangulation-mcp``, ``rule-porter-mcp``, ``rules-gen-mcp``, ``salescloser-ai-mcp``, ``salvage-value-oracle-mcp``, 
- ``sar-report-generator-mcp``, ``sat-cfdi-invoicing-mcp``, ``satori-aligner-mcp``, ``sbom-cyclonedx-auditor-mcp``, ``scene-change-detector-mcp``, 
- ``science-oracle-mcp``, ``scope-3-emissions-mcp``, ``scrap-metal-recycling-mcp``, ``sd-wan-route-mcp``, ``sdr-meeting-booker-mcp``, 
- ``seamless-tiling-ai-mcp``, ``sec-edgar-form4-mcp``, ``seccomp-filter-enforcer-mcp``, ``secure-enclave-attestation-mcp``, ``seismic-blast-planner-mcp``, 
- ``semantic-drift-detector-mcp``, ``semantic-hash-indexer-mcp``, ``semantic-redundancy-pruner-mcp``, ``sentiment-trail-mcp``, ``seo-first-page-guarantee-mcp``, 
- ``seo-ghost-mcp``, ``seo-keyword-ranker-mcp``, ``serp-analyzer-mcp``, ``serverless-db-oracle-mcp``, ``shadow-ai-use-sentinel-mcp``, 
- ``shapley-value-distributor-mcp``, ``sigfox-backend-bridge-mcp``, ``sign-language-translator-mcp``, ``singularity-event-horizon-mcp``, ``sla-downtime-refund-mcp``, 
- ``slack-message-sanitizer-mcp``, ``slam-gmapping-mcp``, ``slash-stake-penalty-mcp``, ``slide-factory-mcp``, ``slippage-tolerance-mcp``, 
- ``slither-ast-analyzer-mcp``, ``smart-meter-reader-mcp``, ``smelter-emissions-mcp``, ``smiles-structure-parser-mcp``, ``smt-solver-oracle-mcp``, 
- ``soc-soh-calculator-mcp``, ``soc2-audit-trail-generator-mcp``, ``social-sentiment-crawler-mcp``, ``soft-body-simulator-mcp``, ``software-license-compliance-mcp``, 
- ``sol-forge-mcp``, ``solar-irradiance-predictor-mcp``, ``solidity-slither-wrapper-mcp``, ``sonoff-tasmota-flash-mcp``, ``spam-intent-classifier-mcp``, 
- ``spatial-metadata-injector-mcp``, ``spatial-occlusion-mapper-mcp``, ``spectrum-auction-oracle-mcp``, ``speech-emotion-forensic-analyzer-mcp``, ``speech-to-text-whisper-mcp``, 
- ``spot-market-sweeper-mcp``, ``srt-vtt-subtitle-gen-mcp``, ``sso-auth-bridge-mcp``, ``sso-saml-provisioner-mcp``, ``ssp-yield-optimizer-mcp``, 
- ``stack-trace-medic-mcp``, ``state-machine-liveness-mcp``, ``state-trie-pruner-mcp``, ``stealth-address-generator-mcp``, ``stem-separator-demucs-mcp``, 
- ``streaming-micropayment-channel-mcp``, ``stripe-secret-rotator-mcp``, ``styleforge-ai-mcp``, ``subagent-health-monitor-mcp``, ``substance-sbsar-parser-mcp``, 
- ``subzero-kv-compressor-mcp``, ``super-resolution-4k-mcp``, ``supplier-sla-penalty-mcp``, ``swarm-coordinator-mcp``, ``swarm-formation-control-mcp``, 
- ``sybil-graph-clustering-mcp``, ``sybil-resistance-score-mcp``, ``sybil-resistance-zk-gate-mcp``, ``symbolic-execution-engine-mcp``, ``synthetic-data-entropy-eval-mcp``, 
- ``synthetic-data-purity-checker-mcp``, ``synthetic-voice-curator-mcp``, ``talent-sourcer-mcp``, ``target-gene-discovery-mcp``, ``target-product-reviewer-mcp``, 
- ``task-orchestrator-mcp``, ``task-preemption-allocator-mcp``, ``tco-5-year-calculator-mcp``, ``tcp-packet-latency-minimizer-mcp``, ``technical-spec-matcher-mcp``, 
- ``tee-attestation-verifier-mcp``, ``tei-xml-exporter-mcp``, ``telemedicine-triage-bot-mcp``, ``tensorrt-model-compiler-mcp``, ``text-chunking-semantic-mcp``, 
- ``texture-channel-mixer-mcp``, ``tflite-micro-exporter-mcp``, ``the-gem-smith-mcp``, ``thermal-runaway-predictor-mcp``, ``thermal-throttle-predictor-mcp``, 
- ``third-party-repair-quote-mcp``, ``threat-model-game-solver-mcp``, ``threejs-weaver-mcp``, ``tiered-commission-oracle-mcp``, ``tiered-pricing-unlocker-mcp``, 
- ``tiktok-shorts-cropper-mcp``, ``time-lock-deadline-mcp``, ``timelock-bypass-admin-mcp``, ``timestamp-chapter-marker-mcp``, ``tls-fingerprint-randomizer-mcp``, 
- ``tls-ja4-fingerprinter-mcp``, ``toll-weigh-station-mcp``, ``topology-rebuilder-mcp``, ``tornado-cash-tracer-mcp``, ``toxic-content-classifier-mcp``, 
- ``toxicology-ld50-mcp``, ``tpms-tire-pressure-mcp``, ``trade-credit-insurance-mcp``, ``trademark-infringement-mcp``, ``tradingview-technical-mcp``, 
- ``trailer-door-seal-mcp``, ``training-data-copyright-tracer-mcp``, ``training-set-deduplicator-mcp``, ``transfer-pricing-oracle-mcp``, ``tripadvisor-restaurant-mcp``, 
- ``trust-vision-mcp``, ``tts-emotion-controller-mcp``, ``tuya-local-key-mcp``, ``tvl-drain-detector-mcp``, ``twitch-streamer-stats-mcp``, 
- ``twitter-sentiment-analyzer-mcp``, ``tx-origin-phishing-mcp``, ``uber-h3-hex-grid-mcp``, ``uber-surge-pricing-mcp``, ``ui-factory-mcp``, 
- ``unauthorized-crawler-blocker-mcp``, ``uncle-bandit-detector-mcp``, ``uncollateralized-loan-mcp``, ``universal-translator-hub-mcp``, ``upwork-freelancer-stats-mcp``, 
- ``usdc-payout-distributor-mcp``, ``user-agent-generator-mcp``, ``usps-delivery-status-mcp``, ``utm-geofence-navigator-mcp``, ``uv-unwrapping-agent-mcp``, 
- ``ux-auditor-pro-mcp``, ``uxui-auditor-mcp``, ``v2g-grid-oracle-mcp``, ``vat-moss-eu-calculator-mcp``, ``vault-invariant-checker-mcp``, 
- ``vav-box-damper-mcp``, ``vector-cache-dehydrator-mcp``, ``vector-database-backup-oracle-mcp``, ``vector-dimension-compressor-mcp``, ``vector-embedding-prep-mcp``, 
- ``vellum-background-remover-mcp``, ``vendor-financial-health-mcp``, ``vendor-lockin-evaluator-mcp``, ``vendor-lockin-preventer-mcp``, ``venture-capital-pitch-mcp``, 
- ``verifiable-random-function-oracle-mcp``, ``verighost-mcp``, ``verra-carbon-credit-mcp``, ``verra-micro-credit-mcp``, ``vertex-welder-mcp``, 
- ``viseme-lipsync-generator-mcp``, ``visual-qa-frame-analyzer-mcp``, ``voice-cloning-biometric-liveness-mcp``, ``volume-discount-calculator-mcp``, ``vr-soundscape-generator-mcp``, 
- ``vroid-model-importer-mcp``, ``vtol-transition-mcp``, ``vwap-twap-execution-mcp``, ``walmart-inventory-checker-mcp``, ``washpulse-mcp``, 
- ``wasm-isolated-runner-mcp``, ``water-cooling-efficiency-auditor-mcp``, ``water-treatment-scada-mcp``, ``weather-yield-model-mcp``, ``web3-sentiment-mcp``, 
- ``webapp-uat-audit-mcp``, ``webapp-uat-mcp``, ``webrtc-avatar-streamer-mcp``, ``weighted-scoring-oracle-mcp``, ``white-hat-payout-mcp``, 
- ``wholesale-clearance-bot-mcp``, ``wholesale-group-buy-mcp``, ``wind-turbine-forecast-mcp``, ``workers-comp-evaluator-mcp``, ``workflow-state-machine-mcp``, 
- ``x-data-mcp``, ``yahoo-finance-news-mcp``, ``yara-rule-generator-mcp``, ``yellowpages-directory-mcp``, ``youtube-comment-miner-mcp``, 
- ``youtube-transcript-extractor-mcp``, ``youtube-transcript-json-mcp``, ``yul-gasmaster-mcp``, ``z-wave-network-heal-mcp``, ``z3-theorem-prover-mcp``, 
- ``zero-day-exploit-scanner-mcp``, ``zero-knowledge-kyc-bridge-mcp``, ``zero-knowledge-kyc-mcp``, ``zero-knowledge-model-execution-proof-mcp``, ``zero-shot-voice-clone-mcp``, 
- ``zero-trust-network-gate-mcp``, ``zeroknowledge-vault-mcp``, ``zigbee2mqtt-bridge-mcp``, ``zillow-real-estate-mcp``, ``zk-agent-identity-prover-mcp``, 
- ``zk-otc-settlement-mcp``, ``zk-payroll-vault-mcp``, ``zk-snark-payload-verifier-mcp``, ``zod-schema-enforcer-mcp``, ``zombie-saas-cleaner-mcp``, 
- ``zoominfo-contact-finder-mcp``

### 🔍 Web Scraping, OSINT & Growth
- ``adsb-flight-tracker-mcp``, ``ais-vessel-tracker-mcp``, ``alibaba-supplier-intel-mcp``, ``amazon-price-tracker-mcp``, ``baidu-china-search-mcp``, 
- ``behance-portfolio-scraper-mcp``, ``booking-hotel-prices-mcp``, ``bunker-fuel-prices-mcp``, ``chicago-grain-prices-mcp``, ``coinmarketcap-prices-mcp``, 
- ``deepsort-object-tracker-mcp``, ``dhl-shipment-tracker-mcp``, ``dribbble-designer-intel-mcp``, ``duckduckgo-privacy-search-mcp``, ``ecommerce-tracker-mcp``, 
- ``extended-warranty-pricer-mcp``, ``facebook-group-leads-mcp``, ``fda-approval-tracker-mcp``, ``flightradar24-tracker-mcp``, ``foursquare-venue-intel-mcp``, 
- ``gas-price-derivatives-oracle-mcp``, ``github-developer-intel-mcp``, ``github-repo-intel-mcp``, ``google-maps-leads-mcp``, ``google-search-scraper-mcp``, 
- ``green-hydrogen-tracker-mcp``, ``handoff-tracker-mcp``, ``indeed-resume-scraper-mcp``, ``influencer-roi-tracker-mcp``, ``instagram-profile-scraper-mcp``, 
- ``linkedin-profile-scraper-mcp``, ``lithium-copper-prices-mcp``, ``livestock-rfid-tracker-mcp``, ``molecular-patent-search-mcp``, ``neural-architecture-search-mcp``, 
- ``patent-prior-art-search-mcp``, ``pinterest-board-scraper-mcp``, ``planar-tracker-mocha-mcp``, ``price-parity-auditor-mcp``, ``rare-earth-tracker-mcp``, 
- ``raw-material-index-pricer-mcp``, ``real-estate-title-search-mcp``, ``second-price-auction-host-mcp``, ``second-price-auctioneer-mcp``, ``shein-fashion-scraper-mcp``, 
- ``shodan-open-port-intel-mcp``, ``shopify-catalog-scraper-mcp``, ``skyscanner-price-tracker-mcp``, ``smart-contract-expense-tracker-mcp``, ``snapchat-geo-intel-mcp``, 
- ``stolen-funds-tracker-mcp``, ``telegram-channel-scraper-mcp``, ``viewability-pixel-tracker-mcp``, ``voice-intel-mcp``, ``web-scraper-pro-mcp``, 
- ``yandex-russia-search-mcp``, ``yelp-review-scraper-mcp``

### 🛡️ Cybersecurity & DevSecOps
- ``adversarial-prompt-shield-mcp``, ``agent-reputation-zk-shield-mcp``, ``agentic-ip-reputation-guard-mcp``, ``binary-exploitation-shield-mcp``, ``codevulnerability-mcp``, 
- ``ddos-mitigation-shield-mcp``, ``deepvoice-guard-mcp``, ``delegatecall-vulnerability-mcp``, ``edge-latency-guard-mcp``, ``integer-overflow-guard-mcp``, 
- ``jit-liquidity-shield-mcp``, ``lexguard-mcp``, ``multimodal-prompt-injection-guard-mcp``, ``npm-package-leak-mcp``, ``oil-pipeline-leak-mcp``, 
- ``oracle-manipulation-guard-mcp``, ``prompt-leakage-shield-mcp``, ``ptrace-system-call-guard-mcp``, ``quantum-shield-mcp``, ``race-condition-shield-mcp``, 
- ``ram-heap-leak-sanitizer-mcp``, ``shielded-erc20-transfer-mcp``, ``side-channel-attack-shield-mcp``, ``time-bandit-attack-guard-mcp``, ``tool-guardian-mcp``, 
- ``unicode-obfuscation-guard-mcp``, ``vaultguard-mcp``, ``zero-leak-mcp``

### 📦 Logistics, Supply Chain & Hardware
- ``air-freight-waybill-mcp``, ``carbon-aware-inference-router-mcp``, ``cargo-insurance-broker-mcp``, ``cargo-load-balancer-mcp``, ``container-ship-router-mcp``, 
- ``context-window-overflow-router-mcp``, ``dex-arbitrage-router-mcp``, ``fuel-efficiency-router-mcp``, ``ltl-consolidation-router-mcp``, ``private-mempool-router-mcp``, 
- ``reverse-logistics-router-mcp``, ``spot-freight-auction-mcp``, ``swarm-task-router-mcp``, ``ups-logistics-status-mcp``

### ⚡ Web3, DeFi & Cryptography
- ``atomic-swap-coordinator-mcp``, ``battery-swap-station-mcp``, ``chain-agnostic-escrow-reader-mcp``, ``chainalysis-aml-risk-mcp``, ``cold-chain-reefer-mcp``, 
- ``cross-chain-contract-relayer-mcp``, ``cross-chain-escrow-bridge-mcp``, ``cross-chain-l402-verifier-mcp``, ``crypto-capital-gains-mcp``, ``crypto-dispute-mediator-mcp``, 
- ``crypto-price-oracle-mcp``, ``crypto-tax-loss-harvester-mcp``, ``defi-sentinel-mcp``, ``defi-yield-tax-reporter-mcp``, ``defillama-tvl-tracker-mcp``, 
- ``escrow-commitment-pool-mcp``, ``escrow-deed-verifier-mcp``, ``escrow-fund-recovery-mcp``, ``escrow-refund-releaser-mcp``, ``escrow-time-lock-factory-mcp``, 
- ``flash-escrow-settlement-gate-mcp``, ``iso27001-compliance-escrow-mcp``, ``jwt-token-expiration-mcp``, ``lattice-based-crypto-oracle-mcp``, ``messari-crypto-intel-mcp``, 
- ``multi-token-fee-converter-mcp``, ``multichain-state-sync-mcp``, ``offchain-zk-state-channel-mcp``, ``onchain-formal-proof-mcp``, ``onchain-reputation-oracle-mcp``, 
- ``quantum-safe-llm-session-encryptor-mcp``, ``rate-limit-swap-broker-mcp``, ``styleseed-tokenizer-mcp``, ``supply-chain-finance-mcp``, ``token-burn-accounting-mcp``, 
- ``token-burn-predictor-mcp``, ``token-dictionary-encoder-mcp``, ``token-diet-mcp``, ``token-futures-contract-mcp``, ``token-latency-hedging-router-mcp``, 
- ``token-smuggling-detector-mcp``, ``token-spot-price-oracle-mcp``, ``tokenburn-optimizer-mcp``, ``tokenomic-pulse-mcp``, ``uniswap-pool-stats-mcp``, 
- ``wallet-hygiene-mcp``, ``web3-wallet-kyt-mcp``, ``yield-bearing-escrow-vault-mcp``

### ⚖️ B2B Legal, Tax & Compliance
- ``automated-invoice-factoring-gate-mcp``, ``b2b-contract-renewal-mcp``, ``b2b-legal-contract-parser-mcp``, ``breach-of-contract-mcp``, ``carbon-tax-auto-withholder-mcp``, 
- ``carbon-tax-compliance-mcp``, ``contractoracle-mcp``, ``corporate-tax-bracket-mcp``, ``corporate-tax-jurisdiction-mcp``, ``eip712-typed-contract-builder-mcp``, 
- ``legal-contract-validator-mcp``, ``legal-logic-fuzzer-mcp``, ``legal-validator-mcp``, ``nft-invoice-minter-mcp``, ``receipt-invoice-parser-mcp``, 
- ``reinsurance-contract-mcp``, ``rotoscope-mask-generator-mcp``, ``sales-tax-nexus-mcp``, ``smart-contract-auditor-pro-mcp``, ``smart-contract-freezer-mcp``, 
- ``smart-contract-lawyer-mcp``, ``smart-contract-upgrade-auditor-mcp``, ``tax-loss-harvesting-mcp``, ``tos-slayer-mcp``, ``zero-knowledge-contract-validator-mcp``

### 🧠 LLM Optimization & Knowledge RAG
- ``backrun-arbitrage-blocker-mcp``, ``brotli-prompt-compressor-mcp``, ``context-deduplicator-oracle-mcp``, ``context-targeting-oracle-mcp``, ``context-window-optimizer-mcp``, 
- ``cpm-cpa-arbitrage-mcp``, ``ephemeral-memory-shredder-mcp``, ``indirect-prompt-injection-mcp``, ``layer2-storage-proof-mcp``, ``llm-benchmark-evaluator-mcp``, 
- ``llm-provider-outage-fallback-mcp``, ``llm-response-streaming-compressor-mcp``, ``long-term-memory-indexer-mcp``, ``memory-limit-watchdog-mcp``, ``memory-summarizer-mcp``, 
- ``multi-agent-memory-garbage-collector-mcp``, ``policy-coverage-oracle-mcp``, ``private-llm-instance-provisioner-mcp``, ``prompt-cache-hit-maximizer-mcp``, ``prompt-efficiency-scorer-mcp``, 
- ``prompt-refiner-mcp``, ``prompt-routing-arbitrageur-mcp``, ``quota-overage-biller-mcp``, ``rag-vector-cleaner-mcp``, ``ragdoll-joint-limits-mcp``, 
- ``ram-memory-shredder-mcp``, ``recallmax-mcp``, ``recallmax-neural-mcp``, ``repo-to-rag-mcp``, ``sustainable-llm-leaderboard-oracle-mcp``, 
- ``system-prompt-protector-mcp``, ``uninitialized-storage-mcp``, ``vector-index-defragmenter-mcp``

### 🏭 IoT, Robotics & Industrial SCADA
- ``drone-crop-sprayer-mcp``, ``drone-delivery-router-mcp``, ``drone-map-stitcher-mcp``, ``esim-iot-profile-mcp``, ``heat-recycling-telemetry-node-mcp``, 
- ``mavlink-px4-telemetry-mcp``, ``modbus-rtu-tcp-parser-mcp``, ``nb-iot-cellular-mcp``, ``nuclear-reactor-telemetry-mcp``, ``opc-ua-telemetry-mcp``, 
- ``rgbd-sensor-calibrator-mcp``, ``soil-moisture-iot-mcp``, ``solar-inverter-modbus-mcp``, ``urdf-robot-parser-mcp``



---

## 📚 Technical Documentation & Repositories
- **Master Technical Encyclopedia**: [View Code Architecture Encyclopedia (M2MCENT_1000_NODES_CODE_ENCYCLOPEDIA.md)](./M2MCENT_1000_NODES_CODE_ENCYCLOPEDIA.md)
- **Master Repository**: [GitHub - Evozim/m2mcent](https://github.com/Evozim/m2mcent)
- **Official Portal**: [m2mcent.com](https://m2mcent.com)
- **MCP Registry**: Search `M2MCent` on Smithery.ai
