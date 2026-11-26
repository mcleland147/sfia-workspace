/**
 * Macro-lot 1 — native response-side usage extraction.
 *
 * Distinguishes:
 * - max_tool_calls (a-priori built-in call bound)
 * - tool_usage.web_search.num_requests (a-posteriori billable searches when present)
 *
 * Absent tool_usage ⇒ UNKNOWN (never ASSUMED_1).
 */

export type HostedWebSearchUsageObservation = {
  numRequests: number | null;
  status: "MEASURED" | "UNKNOWN";
  provenance: "RESPONSE_TOOL_USAGE" | "ABSENT";
  limits: string[];
};

export type ResponseNativeUsageObservation = {
  responseId: string | null;
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  cachedInputTokens: number | null;
  reasoningTokens: number | null;
  hostedWebSearch: HostedWebSearchUsageObservation;
  rawToolUsagePresent: boolean;
};

function num(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? Math.floor(v) : null;
}

function asRecord(v: unknown): Record<string, unknown> | null {
  return v && typeof v === "object" ? (v as Record<string, unknown>) : null;
}

export function extractHostedWebSearchUsage(
  responseBody: unknown,
): HostedWebSearchUsageObservation {
  const body = asRecord(responseBody);
  const toolUsage = asRecord(body?.tool_usage);
  if (!toolUsage) {
    return {
      numRequests: null,
      status: "UNKNOWN",
      provenance: "ABSENT",
      limits: ["TOOL_USAGE_ABSENT"],
    };
  }
  const webSearch = asRecord(toolUsage.web_search);
  if (!webSearch) {
    return {
      numRequests: null,
      status: "UNKNOWN",
      provenance: "ABSENT",
      limits: ["TOOL_USAGE_WEB_SEARCH_ABSENT"],
    };
  }
  const n = num(webSearch.num_requests);
  if (n == null || n < 0) {
    return {
      numRequests: null,
      status: "UNKNOWN",
      provenance: "ABSENT",
      limits: ["TOOL_USAGE_WEB_SEARCH_NUM_REQUESTS_UNKNOWN"],
    };
  }
  return {
    numRequests: n,
    status: "MEASURED",
    provenance: "RESPONSE_TOOL_USAGE",
    limits: [],
  };
}

function detailTokens(
  details: unknown,
  keys: string[],
): number | null {
  if (!details) return null;
  const list = Array.isArray(details) ? details : [details];
  let sum = 0;
  let found = false;
  for (const d of list) {
    const rec = asRecord(d);
    if (!rec) continue;
    for (const k of keys) {
      const v = num(rec[k]);
      if (v != null) {
        sum += v;
        found = true;
      }
    }
  }
  return found ? sum : null;
}

/**
 * Parse a Responses API JSON body (or Agents-wrapped response object).
 */
export function extractResponseNativeUsage(
  responseBody: unknown,
): ResponseNativeUsageObservation {
  const body = asRecord(responseBody);
  const usage = asRecord(body?.usage);
  const inputTokens = num(usage?.input_tokens ?? usage?.inputTokens);
  const outputTokens = num(usage?.output_tokens ?? usage?.outputTokens);
  const totalTokens = num(usage?.total_tokens ?? usage?.totalTokens);
  const cachedInputTokens = detailTokens(
    usage?.input_tokens_details ?? usage?.inputTokensDetails,
    ["cached_tokens", "cachedTokens"],
  );
  const reasoningTokens = detailTokens(
    usage?.output_tokens_details ?? usage?.outputTokensDetails,
    ["reasoning_tokens", "reasoningTokens"],
  );
  const responseId =
    typeof body?.id === "string"
      ? body.id
      : typeof body?.response_id === "string"
        ? body.response_id
        : null;

  const hostedWebSearch = extractHostedWebSearchUsage(body);
  return {
    responseId,
    inputTokens,
    outputTokens,
    totalTokens:
      totalTokens ??
      (inputTokens != null && outputTokens != null
        ? inputTokens + outputTokens
        : null),
    cachedInputTokens,
    reasoningTokens,
    hostedWebSearch,
    rawToolUsagePresent: asRecord(body?.tool_usage) != null,
  };
}

/**
 * Reconcile a-priori max_tool_calls reservation with a-posteriori num_requests.
 * Returns the billable count to commit and whether the campaign should suspend.
 */
export function reconcileHostedSearchUsage(input: {
  reservedMaxToolCalls: number;
  observed: HostedWebSearchUsageObservation;
  alreadyCommitted: number;
  maxHostedSearches: number | null;
}): {
  commitDelta: number;
  measured: number | null;
  status: "MEASURED" | "UNKNOWN" | "RESERVED_ONLY";
  suspend: boolean;
  suspendReason: string | null;
  limits: string[];
} {
  const reserved = Math.max(0, Math.floor(input.reservedMaxToolCalls));
  const committed = Math.max(0, Math.floor(input.alreadyCommitted));
  const limits = [...input.observed.limits];

  if (input.observed.status === "MEASURED" && input.observed.numRequests != null) {
    const measured = input.observed.numRequests;
    const nextTotal = committed + measured;
    // When we already reserved `reserved` at emit time, commit only the measured
    // amount for accounting; reservation overshoot is released by caller.
    const suspend =
      input.maxHostedSearches != null && nextTotal > input.maxHostedSearches;
    if (suspend) {
      limits.push("HOSTED_SEARCH_MEASURED_OVER_ENVELOPE");
    }
    // Distinguish: max_tool_calls was never a billable guarantee.
    if (measured !== reserved) {
      limits.push("MAX_TOOL_CALLS_NE_NUM_REQUESTS");
    }
    return {
      commitDelta: measured,
      measured,
      status: "MEASURED",
      suspend,
      suspendReason: suspend ? "CAMPAIGN_HOSTED_SEARCHES_EXHAUSTED" : null,
      limits,
    };
  }

  // UNKNOWN — do not invent ASSUMED_1; keep reserved as envelope pressure only
  // and surface UNKNOWN for FinOps (no false precision).
  limits.push("HOSTED_SEARCH_BILLABLE_UNKNOWN");
  return {
    commitDelta: 0,
    measured: null,
    status: "UNKNOWN",
    suspend: false,
    suspendReason: null,
    limits,
  };
}
