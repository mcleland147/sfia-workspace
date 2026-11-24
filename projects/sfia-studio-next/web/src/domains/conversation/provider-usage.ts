/**
 * C24 — extract provider usage from OpenAI Agents SDK RunResult without inventing metrics.
 * UNVERIFIED / null when the SDK shape does not expose a field.
 */

export type ProviderUsageSnapshot = {
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  reasoningTokens: number | null;
  cachedInputTokens: number | null;
  providerRequests: number | null;
  /** Provenance label — never claim values absent from the SDK. */
  provenance: "AGENTS_SDK_RUN_STATE" | "UNAVAILABLE";
  limits: string[];
};

function sumDetailField(
  details: unknown,
  keys: string[],
): number | null {
  if (!details) return null;
  const list = Array.isArray(details) ? details : [details];
  let sum = 0;
  let found = false;
  for (const d of list) {
    if (!d || typeof d !== "object") continue;
    const rec = d as Record<string, unknown>;
    for (const k of keys) {
      const v = rec[k];
      if (typeof v === "number" && Number.isFinite(v)) {
        sum += v;
        found = true;
      }
    }
  }
  return found ? sum : null;
}

/**
 * Prefer `result.state.usage` (Agents SDK). Never invent zeros as observed metrics —
 * absent usage ⇒ null + UNAVAILABLE.
 */
export function extractProviderUsageFromRunResult(
  result: unknown,
): ProviderUsageSnapshot {
  const limits: string[] = [];
  try {
    const r = result as {
      state?: { usage?: Record<string, unknown> };
      usage?: Record<string, unknown>;
    };
    const usage = r?.state?.usage ?? r?.usage ?? null;
    if (!usage || typeof usage !== "object") {
      return {
        inputTokens: null,
        outputTokens: null,
        totalTokens: null,
        reasoningTokens: null,
        cachedInputTokens: null,
        providerRequests: null,
        provenance: "UNAVAILABLE",
        limits: ["PROVIDER_USAGE_ABSENT"],
      };
    }

    const num = (v: unknown): number | null =>
      typeof v === "number" && Number.isFinite(v) ? v : null;

    const inputTokens = num(usage.inputTokens ?? usage.input_tokens);
    const outputTokens = num(usage.outputTokens ?? usage.output_tokens);
    const totalTokens = num(usage.totalTokens ?? usage.total_tokens);
    const providerRequests = num(usage.requests);

    const cachedInputTokens = sumDetailField(
      usage.inputTokensDetails ?? usage.input_tokens_details,
      ["cached_tokens", "cachedTokens", "input_cached_tokens"],
    );
    const reasoningTokens = sumDetailField(
      usage.outputTokensDetails ?? usage.output_tokens_details,
      ["reasoning_tokens", "reasoningTokens"],
    );

    if (inputTokens == null && outputTokens == null) {
      limits.push("PROVIDER_USAGE_EMPTY_AGGREGATES");
    }
    if (cachedInputTokens == null) limits.push("CACHED_INPUT_TOKENS_UNVERIFIED");
    if (reasoningTokens == null) limits.push("REASONING_TOKENS_UNVERIFIED");

    return {
      inputTokens,
      outputTokens,
      totalTokens:
        totalTokens ??
        (inputTokens != null && outputTokens != null
          ? inputTokens + outputTokens
          : null),
      reasoningTokens,
      cachedInputTokens,
      providerRequests,
      provenance: "AGENTS_SDK_RUN_STATE",
      limits,
    };
  } catch {
    return {
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
      reasoningTokens: null,
      cachedInputTokens: null,
      providerRequests: null,
      provenance: "UNAVAILABLE",
      limits: ["PROVIDER_USAGE_EXTRACT_ERROR"],
    };
  }
}
