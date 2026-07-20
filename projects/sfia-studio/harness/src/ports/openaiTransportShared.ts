/**
 * Shared OpenAI HTTPS transport helpers for Increment C.
 * Re-exports spike-safe sanitization/transport without enabling spike verdict path.
 */

export {
  createDefaultTransport,
  extractMessageContent,
  observeChatCompletionResponse,
  sanitizeOpenAiErrorText,
  type OpenAITransport,
} from "./openaiRealSpike.js";

import type { GPTUsageSummary } from "../types/gptContracts.js";

export function parseUsageFromCompletion(
  data: Record<string, unknown>,
  durationMs: number,
  model: string,
): GPTUsageSummary {
  const usage = (data.usage ?? {}) as Record<string, unknown>;
  const details = (usage.completion_tokens_details ?? {}) as Record<string, unknown>;
  const id = data.id;
  const responseIdRedacted =
    typeof id === "string" && id.length > 12
      ? `redacted:${id.slice(0, 6)}…${id.slice(-4)}`
      : typeof id === "string"
        ? `redacted:${id.length}`
        : undefined;
  return {
    inputTokens: typeof usage.prompt_tokens === "number" ? usage.prompt_tokens : undefined,
    outputTokens: typeof usage.completion_tokens === "number" ? usage.completion_tokens : undefined,
    totalTokens: typeof usage.total_tokens === "number" ? usage.total_tokens : undefined,
    reasoningTokens:
      typeof details.reasoning_tokens === "number" ? details.reasoning_tokens : undefined,
    modelReturned: typeof data.model === "string" ? data.model : model,
    responseIdRedacted,
    durationMs,
    monetaryCostClaimed: false,
  };
}
