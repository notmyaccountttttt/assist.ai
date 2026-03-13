// assistai-web/src/services/api/toolApi.ts
// TODO: Implement tool invocation API client

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

/** POST /api/tool */
export async function executeTool(
    toolName: string,
    args: Record<string, unknown>,
    conversationId: string,
    messageId: string
): Promise<{ toolName: string; result: string; status: string }> {
    // TODO: Implement
    throw new Error('Not implemented');
}

/** GET /api/tools */
export async function listTools(): Promise<{ name: string; description: string }[]> {
    // TODO: Implement
    throw new Error('Not implemented');
}
