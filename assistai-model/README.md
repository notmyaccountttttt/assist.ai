# assistai-model — Model & Inference Layer

> **Owner**: Your team
> **Stack**: Node.js · TypeScript · TensorFlow.js · Ollama SDK
> **Port**: 3001

## Quick Start

```bash
npm install
npm run dev
```

## Folder Structure

```
src/
├── index.ts                 # Express server entry point
├── routes.ts                # API route definitions
├── ollama/
│   ├── ollamaClient.ts      # Ollama chat/completion client
│   └── modelConfig.ts       # Model name constants & params
├── tensorflow/
│   ├── intentClassifier.ts  # Load & run TF.js intent model
│   └── training/
│       ├── train.ts         # Training script
│       └── dataset.json     # Labelled intent data
├── embeddings/
│   └── embeddingService.ts  # nomic-embed-text via Ollama
├── rag/
│   ├── vectorStore.ts       # In-memory vector store
│   ├── documentLoader.ts    # Load text/markdown docs
│   └── retriever.ts         # Top-k cosine similarity retrieval
├── agents/
│   ├── planner.ts           # Multi-step plan generation
│   ├── executor.ts          # Step execution
│   ├── reflection.ts        # Output validation & retry
│   └── router.ts            # Route to correct agent/tool
├── memory/
│   ├── shortTermMemory.ts   # In-context window
│   ├── longTermMemory.ts    # Persisted summaries
│   └── conversationStore.ts # Conversation persistence
└── tools/
    ├── toolRegistry.ts      # Registry + dispatch
    ├── webSearch.ts          # Web search
    ├── fileSystem.ts         # File read/write
    └── codeExecutor.ts       # Sandboxed code execution
```

## API Endpoints (for backend to call)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/infer` | LLM chat completion (streaming) |
| POST | `/embed` | Generate embeddings |
| POST | `/classify` | Intent classification |
| POST | `/rag/query` | RAG retrieval |

## Ollama Models

| Model | Purpose | Pull command |
|-------|---------|--------------|
| `phi3:mini` | Reasoning | `ollama pull phi3:mini` |
| `qwen2:1.5b` | Conversation | `ollama pull qwen2:1.5b` |
| `nomic-embed-text` | Embeddings | `ollama pull nomic-embed-text` |
