import { describe, expect, it } from "vitest";
import {
  buildIdempotencyKey,
  estimateCostUsd,
} from "@/domains/conversation/usage-accounting";

describe("ML5 E03 — buildIdempotencyKey", () => {
  it("is stable for the same logical provider call", () => {
    const base = {
      granularity: "REQUEST" as const,
      operation: "op-1",
      attemptId: "att-1",
      generationId: "gen-1",
      segmentIndex: 2,
      callOrdinal: 0,
    };
    const a = buildIdempotencyKey(base);
    const b = buildIdempotencyKey({ ...base });
    expect(a).toBe(b);
    expect(a).toMatch(/^[a-f0-9]{64}$/);
  });

  it("differs when attempt or segment changes", () => {
    const shared = {
      granularity: "REQUEST" as const,
      operation: "op-1",
      generationId: "gen-1",
    };
    const k1 = buildIdempotencyKey({ ...shared, attemptId: "a1", segmentIndex: 0 });
    const k2 = buildIdempotencyKey({ ...shared, attemptId: "a2", segmentIndex: 0 });
    const k3 = buildIdempotencyKey({ ...shared, attemptId: "a1", segmentIndex: 1 });
    expect(k1).not.toBe(k2);
    expect(k1).not.toBe(k3);
  });

  it("separates REQUEST vs GENERATION_AGGREGATE granularity", () => {
    const parts = {
      operation: "op",
      attemptId: "att",
      generationId: "gen",
      segmentIndex: 0,
    };
    const req = buildIdempotencyKey({ ...parts, granularity: "REQUEST" });
    const agg = buildIdempotencyKey({ ...parts, granularity: "GENERATION_AGGREGATE" });
    expect(req).not.toBe(agg);
  });
});

describe("ML5 E03 — estimateCostUsd", () => {
  it("returns UNKNOWN when token aggregates are incomplete (null, not zero)", () => {
    const r = estimateCostUsd(
      { inputTokens: null, outputTokens: 100, cachedInputTokens: null },
      "gpt-6.2-sol",
    );
    expect(r.costCoverage).toBe("UNKNOWN");
    expect(r.estimatedCostUsd).toBeNull();
    expect(r.limits).toContain("TOKEN_AGGREGATES_INCOMPLETE");
  });

  it("returns UNKNOWN for unrecognized model tariff", () => {
    const r = estimateCostUsd(
      { inputTokens: 1_000, outputTokens: 500, cachedInputTokens: 0 },
      "unknown-model",
    );
    expect(r.costCoverage).toBe("UNKNOWN");
    expect(r.estimatedCostUsd).toBeNull();
  });

  it("computes KNOWN short-context Sol cost with verified cache split", () => {
    const r = estimateCostUsd(
      { inputTokens: 100_000, outputTokens: 20_000, cachedInputTokens: 40_000 },
      "gpt-6.2-sol",
    );
    expect(r.costCoverage).toBe("KNOWN");
    // 60k uncached @ $2/M + 40k cached @ $0.1/M + 20k out @ $10/M
    expect(r.estimatedCostUsd).toBeCloseTo(0.12 + 0.004 + 0.2, 5);
  });

  it("uses PARTIAL when cached input is unverified but input/output known", () => {
    const r = estimateCostUsd(
      { inputTokens: 100_000, outputTokens: 10_000, cachedInputTokens: null },
      "gpt-6-luna",
    );
    expect(r.costCoverage).toBe("PARTIAL");
    expect(r.limits).toContain("CACHED_INPUT_TOKENS_UNVERIFIED");
    // All input treated as uncached: 100k @ $0.1/M + 10k out @ $0.5/M
    expect(r.estimatedCostUsd).toBeCloseTo(0.01 + 0.005, 5);
  });

  it("applies long-context tier from input token threshold on a single request", () => {
    const below = estimateCostUsd(
      {
        inputTokens: 272_000,
        outputTokens: 10_000,
        cachedInputTokens: 0,
      },
      "gpt-6.1-terra",
    );
    const above = estimateCostUsd(
      {
        inputTokens: 272_001,
        outputTokens: 10_000,
        cachedInputTokens: 0,
      },
      "gpt-6.1-terra",
    );
    expect(below.costCoverage).toBe("KNOWN");
    expect(above.costCoverage).toBe("KNOWN");
    expect(above.estimatedCostUsd!).toBeGreaterThan(below.estimatedCostUsd!);
  });
});