// assistai-web/src/models/agent.ts
// TODO: Define agent plan and reasoning types

export interface ReasoningStep {
    action: string;
    description: string;
    status: 'pending' | 'completed' | 'error' | 'delegated';
    result?: string;
}

export interface AgentPlan {
    query: string;
    intent: string;
    steps: ReasoningStep[];
    conversationId: string;
}

export interface ToolExecution {
    toolName: string;
    arguments: string;
    result: string;
    status: 'PENDING' | 'SUCCESS' | 'ERROR';
}
