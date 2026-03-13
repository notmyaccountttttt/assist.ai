// assistai-web/src/services/api/agentApi.ts
// TODO: Implement agent plan API client

import { AgentPlan } from '@/models/agent';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

/** POST /api/agent/plan */
export async function createPlan(query: string, context: string, conversationId: string): Promise<AgentPlan> {
    // TODO: Implement
    throw new Error('Not implemented');
}

/** POST /api/agent/execute */
export async function executePlan(plan: AgentPlan): Promise<Record<string, unknown>> {
    // TODO: Implement
    throw new Error('Not implemented');
}
