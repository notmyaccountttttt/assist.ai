// assistai-model/src/ollama/modelConfig.ts
// TODO: Model name constants and default parameters
// phi3:mini      → reasoning
// qwen2:1.5b     → conversation
// nomic-embed-text → embeddings
export const MODELS = {
    REASONING: process.env.LLM_REASONING_MODEL || 'phi3:mini',
    CONVERSATION: process.env.LLM_MODEL || 'qwen2:1.5b',
    EMBEDDING: process.env.EMBEDDING_MODEL || 'nomic-embed-text',
} as const;
