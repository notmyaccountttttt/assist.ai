import { MODELS } from '../ollama/modelConfig';
import { generateCompletion } from '../ollama/ollamaClient';

export interface RouteDecision {
    route: 'task' | 'general_chat';
    category?: 'job_search' | 'web_search' | 'automation' | 'code' | 'analysis';
    confidence: number;
}

/**
 * Router / Intent Parser
 * Evaluates user input to determine if it's a multi-step task requiring the reasoning pipeline,
 * or a simple conversational query that goes straight to the chat LLM.
 */
export async function routeQuery(userInput: string): Promise<RouteDecision> {
    const systemPrompt = `
You are the entry-point Intent Router for an autonomous agent system.
Determine if the user's message is asking for a complex action/task OR if it's just general conversation.

Categories of tasks:
- job_search: "find internships", "apply to jobs"
- web_search: "research AI models", "find news"
- automation: "at 7pm do X", "scrape this portal"
- code: "write a python script", "analyze this repo"
- analysis: "summarize this data"

You MUST respond in strictly valid JSON:
{
  "route": "task" | "general_chat",
  "category": "<one of the categories above, or null if general_chat>",
  "confidence": <number 0.0 to 1.0>
}
`.trim();

    try {
        const responseText = await generateCompletion({
            model: MODELS.CONVERSATION, // qwen2: faster, better at general classification
            system: systemPrompt,
            prompt: `User Input: "${userInput}"`,
            format: 'json',
            temperature: 0.1,
        });

        const decision = JSON.parse(responseText);
        return decision as RouteDecision;
    } catch (error) {
        console.error("[Router] Routing failed, defaulting to general_chat:", error);
        return { route: 'general_chat', confidence: 0.0 };
    }
}
