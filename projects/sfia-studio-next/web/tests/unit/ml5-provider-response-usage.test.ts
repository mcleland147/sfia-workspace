import { describe, expect, it } from "vitest";
import {
  extractHostedWebSearchUsage,
  extractResponseNativeUsage,
  reconcileHostedSearchUsage,
} from "@/domains/conversation/provider-response-usage";

describe("provider-response-usage", () => {
  it("returns UNKNOWN when tool_usage absent — never ASSUMED_1", () => {
    const u = extractHostedWebSearchUsage({ id: "resp_1", usage: {} });
    expect(u.status).toBe("UNKNOWN");
    expect(u.numRequests).toBeNull();
    expect(u.limits).toContain("TOOL_USAGE_ABSENT");
  });

  it("measures num_requests when present", () => {
    const u = extractHostedWebSearchUsage({
      tool_usage: { web_search: { num_requests: 3 } },
    });
    expect(u).toEqual({
      numRequests: 3,
      status: "MEASURED",
      provenance: "RESPONSE_TOOL_USAGE",
      limits: [],
    });
  });

  it("extracts response usage aggregates", () => {
    const n = extractResponseNativeUsage({
      id: "resp_x",
      usage: {
        input_tokens: 10,
        output_tokens: 4,
        total_tokens: 14,
        input_tokens_details: { cached_tokens: 2 },
        output_tokens_details: { reasoning_tokens: 1 },
      },
      tool_usage: { web_search: { num_requests: 1 } },
    });
    expect(n.responseId).toBe("resp_x");
    expect(n.inputTokens).toBe(10);
    expect(n.outputTokens).toBe(4);
    expect(n.cachedInputTokens).toBe(2);
    expect(n.reasoningTokens).toBe(1);
    expect(n.hostedWebSearch.numRequests).toBe(1);
    expect(n.rawToolUsagePresent).toBe(true);
  });

  it("reconcile: measured over envelope suspends", () => {
    const r = reconcileHostedSearchUsage({
      reservedMaxToolCalls: 2,
      observed: {
        numRequests: 3,
        status: "MEASURED",
        provenance: "RESPONSE_TOOL_USAGE",
        limits: [],
      },
      alreadyCommitted: 0,
      maxHostedSearches: 2,
    });
    expect(r.suspend).toBe(true);
    expect(r.commitDelta).toBe(3);
    expect(r.limits).toContain("HOSTED_SEARCH_MEASURED_OVER_ENVELOPE");
    expect(r.limits).toContain("MAX_TOOL_CALLS_NE_NUM_REQUESTS");
  });

  it("reconcile: UNKNOWN does not invent billable commit", () => {
    const r = reconcileHostedSearchUsage({
      reservedMaxToolCalls: 1,
      observed: {
        numRequests: null,
        status: "UNKNOWN",
        provenance: "ABSENT",
        limits: ["TOOL_USAGE_ABSENT"],
      },
      alreadyCommitted: 0,
      maxHostedSearches: 5,
    });
    expect(r.commitDelta).toBe(0);
    expect(r.status).toBe("UNKNOWN");
    expect(r.limits).toContain("HOSTED_SEARCH_BILLABLE_UNKNOWN");
  });
});
