# M2MCent: The Ultimate 1,000+ Agentic Services Gateway

Welcome to **M2MCent**, the world's most comprehensive catalog of machine-to-machine (M2M) microservices designed specifically for autonomous AI Agents.

This Apify Actor acts as a universal router to **1,004 specialized tools**, bridging the gap between Large Language Models (LLMs) and real-world execution.

## 🚀 How it Works

Instead of deploying 1,000 different Actors, we consolidated our entire API catalog into this single, high-performance Monolithic Gateway. Your agent only needs to know the `toolName` and the `payload`.

### Tool Discovery
To allow your agent to discover what tools are available dynamically, simply run this actor with:
```json
{
  "toolName": "list"
}
```
The Actor will return a JSON array containing the names and descriptions of all 1,004 tools.

### Executing a Tool
Once your agent has selected a tool, call the Actor again. For example:
```json
{
  "toolName": "3d-meshweaver-mcp",
  "payload": {
    "prompt": "a highly detailed 3D model of a futuristic car"
  }
}
```

## ⚡ The x402 Protocol & Monetization

This Actor is completely free to execute on the Apify compute side, but **it enforces the x402 protocol for M2M commerce**. 

When you call a premium endpoint, the Actor will return a `402 Payment Required` HTTP response, alongside a Base Mainnet crypto wallet address and the cost in USDC. Your agent must settle the micro-transaction programmatically via the Base blockchain to receive the final output.

## 📦 Built for the Future
By utilizing Vercel Serverless Functions under the hood, this Apify Gateway scales infinitely without wasting idle RAM. Welcome to the true Agentic Web.
