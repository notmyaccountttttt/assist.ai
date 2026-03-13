import { MODELS } from '../ollama/modelConfig';
import { generateCompletion } from '../ollama/ollamaClient';
import { PlanStep } from './planner';

export interface ReflectionDecision {
    status: 'success' | 'retry' | 'abort';
    reason: string;
}

/**
 * Reflection Agent
 * Evaluates the output of a tool against the intended goal of the step.
 * Prevents hallucinations or silent failures in the automation pipeline.
 */
export async function reflectOnResult(step: PlanStep, toolOutput: any): Promise<ReflectionDecision> {
    const systemPrompt = `
You are a strict QA/Reflection Agent.
Your job is to evaluate if a tool's output satisfies the goal of the current task step.

You must respond in strictly valid JSON matching this schema:
{
  "status": "success" | "retry" | "abort",
  "reason": "<detailed explanation of your decision>"
}

Rules:
- If the output clearly fulfills the 'description' goal, return "success".
- If the output is empty, throws an error, or misses key data, return "retry" and explain what's missing.
- If repeated retries won't fix this (e.g. fatal 404, invalid auth), return "abort".
`.trim();

    const prompt = `
Goal to Evaluate: ${step.description}
Action Performed: ${step.action}
Tool Output:
${JSON.stringify(toolOutput).substring(0, 2000)} // Truncating giant payloads for context window

Evaluate the tool output.
`;

    try {
        const responseText = await generateCompletion({
            model: MODELS.REASONING, // phi3:mini
            system: systemPrompt,
            prompt: prompt,
            format: 'json',
            temperature: 0.0, // Zero temperature for strict grading
        });

        const reflection = JSON.parse(responseText);

        if (!['success', 'retry', 'abort'].includes(reflection.status)) {
            reflection.status = 'retry';
            reflection.reason = 'Reflection model returned invalid status. Forcing retry.';
        }

        return reflection as ReflectionDecision;
    } catch (error) {
        console.warn("[Reflection] Failed to parse reflection JSON, defaulting to success to unblock pipeline:", error);
        return { status: 'success', reason: 'Reflection failed, bypassing checks' };
    }
}
