import ollama from 'ollama';

interface CompletionArgs {
    model: string;
    system: string;
    prompt: string;
    format?: 'json';
    temperature?: number;
}

/**
 * Simple wrapper around the Ollama SDK for the agent architecture.
 */
export async function generateCompletion(args: CompletionArgs): Promise<string> {
    const response = await ollama.generate({
        model: args.model,
        system: args.system,
        prompt: args.prompt,
        format: args.format,
        options: {
            temperature: args.temperature ?? 0.7,
        }
    });

    return response.response;
}
