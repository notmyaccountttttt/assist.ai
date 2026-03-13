// assistai-web/src/services/api/chatApi.ts
// TODO: Implement SSE streaming chat client and history fetch

import { Message, Conversation } from '@/models/conversation';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

/** POST /api/chat — returns SSE stream */
export async function streamChat(
    conversationId: string | null,
    userId: string,
    message: string,
    useReasoning: boolean,
    onToken: (token: string) => void,
    onDone: () => void,
    onError: (error: string) => void
): Promise<void> {
    // TODO: Implement EventSource / fetch SSE streaming
    throw new Error('Not implemented');
}

/** GET /api/history?userId= */
export async function fetchConversations(userId: string): Promise<Conversation[]> {
    // TODO: Implement
    throw new Error('Not implemented');
}

/** GET /api/history/{conversationId} */
export async function fetchMessages(conversationId: string): Promise<Message[]> {
    // TODO: Implement
    throw new Error('Not implemented');
}
