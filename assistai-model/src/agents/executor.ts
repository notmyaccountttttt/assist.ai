import { PlanStep } from './planner';
import { reflectOnResult } from './reflection';
import { executeTool } from '../tools/toolRegistry'; // Assumes tool dispatcher exists

export interface StepResult {
    step: number;
    tool: string;
    result: any;
    status: 'success' | 'failed';
    error?: string;
}

/**
 * Executor Agent
 * Iterates through the Planner's execution plan, invoking the Tool system,
 * and leveraging the Reflection Agent to ensure accuracy.
 */
export async function executePlan(plan: PlanStep[], taskId: string, maxRetries = 2): Promise<StepResult[]> {
    const executionLogs: StepResult[] = [];

    for (const step of plan) {
        console.log(`[Executor] Starting Step ${step.step}: ${step.action} - ${step.description}`);

        let currentAttempt = 0;
        let stepSuccess = false;
        let finalResult: any = null;

        while (currentAttempt <= maxRetries && !stepSuccess) {
            currentAttempt++;
            try {
                // 1. Tool System Invocation
                const toolResult = await executeTool(step.action, { description: step.description, taskId });

                // 2. Reflection Agent Verification
                console.log(`[Executor] Verifying output with Reflection Agent...`);
                const reflection = await reflectOnResult(step, toolResult);

                if (reflection.status === 'success') {
                    stepSuccess = true;
                    finalResult = toolResult;
                    console.log(`[Executor] Step ${step.step} completed successfully.`);
                } else if (reflection.status === 'retry') {
                    console.warn(`[Executor] Reflection rejected result. Reason: ${reflection.reason}. Retrying (${currentAttempt}/${maxRetries})...`);
                } else {
                    // reflection decided to abort or revise plan (handling simplified here)
                    throw new Error(`Fatal reflection error: ${reflection.reason}`);
                }
            } catch (error) {
                console.error(`[Executor] Error on step ${step.step}:`, error);
                if (currentAttempt > maxRetries) {
                    executionLogs.push({
                        step: step.step,
                        tool: step.action,
                        result: null,
                        status: 'failed',
                        error: error instanceof Error ? error.message : 'Unknown tool failure',
                    });
                    // For strict pipelines, failing one step fails the workflow:
                    throw new Error(`Execution aborted at step ${step.step}: ${error}`);
                }
            }
        }

        if (stepSuccess) {
            executionLogs.push({
                step: step.step,
                tool: step.action,
                result: finalResult,
                status: 'success'
            });
        }
    }

    return executionLogs;
}
