/**
 * C24 — extract provider usage from OpenAI Agents SDK RunResult without inventing metrics.
 * UNVERIFIED / null when the SDK shape does not expose a field.
 */

export type ProviderRequestUsageEntry = {
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  reasoningTokens: number | null;
  cachedInputTokens: number | null;
};

export type ProviderUsageSnapshot = {
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  reasoningTokens: number | null;
  cachedInputTokens: number | null;
  providerRequests: number | null;
  /** Per-request usage when the SDK exposes `requestUsageEntries`. */
  requestUsageEntries: ProviderRequestUsageEntry[] | null;
  /** Provenance label — never claim values absent from the SDK. */
  provenance: "AGENTS_SDK_RUN_STATE" | "UNAVAILABLE";
  limits: string[];
};

function num(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? v : null;
}

function usageRecord(usage: unknown): Record<string, unknown> | null {
  if (!usage || typeof usage !== "object") return null;
  return usage as Record<string, unknown>;
}

function normalizeRequestUsageEntry(raw: unknown): ProviderRequestUsageEntry | null {
  if (!raw || typeof raw !== "object") return null;
  const rec = raw as Record<string, unknown>;
  const inputTokens = num(rec.inputTokens ?? rec.input_tokens);
  const outputTokens = num(rec.outputTokens ?? rec.output_tokens);
  const totalTokens =
    num(rec.totalTokens ?? rec.total_tokens) ??
    (inputTokens != null && outputTokens != null
      ? inputTokens + outputTokens
      : null);
  const cachedInputTokens = sumDetailField(
    rec.inputTokensDetails ?? rec.input_tokens_details,
    ["cached_tokens", "cachedTokens", "input_cached_tokens"],
  );
  const reasoningTokens = sumDetailField(
    rec.outputTokensDetails ?? rec.output_tokens_details,
    ["reasoning_tokens", "reasoningTokens"],
  );
  if (inputTokens == null && outputTokens == null) return null;
  return {
    inputTokens,
    outputTokens,
    totalTokens,
    reasoningTokens,
    cachedInputTokens,
  };
}

function readRequestUsageEntries(usage: unknown): ProviderRequestUsageEntry[] | null {
  const rec = usageRecord(usage);
  if (!rec) return null;
  const raw =
    rec.requestUsageEntries ??
    rec.request_usage_entries ??
    (usage as { requestUsageEntries?: unknown })?.requestUsageEntries;
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const parsed = raw
    .map((e) => normalizeRequestUsageEntry(e))
    .filter((e): e is ProviderRequestUsageEntry => e != null);
  return parsed.length > 0 ? parsed : null;
}

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
        requestUsageEntries: null,
        provenance: "UNAVAILABLE",
        limits: ["PROVIDER_USAGE_ABSENT"],
      };
    }

    const usageObj = usage as Record<string, unknown>;
    const requestUsageEntries = readRequestUsageEntries(usage);

    const inputTokens = num(usageObj.inputTokens ?? usageObj.input_tokens);
    const outputTokens = num(usageObj.outputTokens ?? usageObj.output_tokens);
    const totalTokens = num(usageObj.totalTokens ?? usageObj.total_tokens);
    const providerRequests = num(usageObj.requests);

    const cachedInputTokens = sumDetailField(
      usageObj.inputTokensDetails ?? usageObj.input_tokens_details,
      ["cached_tokens", "cachedTokens", "input_cached_tokens"],
    );
    const reasoningTokens = sumDetailField(
      usageObj.outputTokensDetails ?? usageObj.output_tokens_details,
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
      requestUsageEntries,
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
      requestUsageEntries: null,
      provenance: "UNAVAILABLE",
      limits: ["PROVIDER_USAGE_EXTRACT_ERROR"],
    };
  }
}

/** Prefer SDK per-request usage for tariff (long-context is per request, not summed). */
export function extractRequestUsageEntriesFromRunResult(
  result: unknown,
): ProviderRequestUsageEntry[] | null {
  try {
    const r = result as {
      state?: { usage?: unknown };
      usage?: unknown;
    };
    const usage = r?.state?.usage ?? r?.usage ?? null;
    return readRequestUsageEntries(usage);
  } catch {
    return null;
  }
}
