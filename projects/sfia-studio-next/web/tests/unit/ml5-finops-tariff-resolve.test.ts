import { describe, expect, it } from "vitest";
import {
  estimateCostUsd,
  resolveTariffModel,
} from "@/domains/conversation/usage-accounting";

describe("ML5 FinOps tariff model resolution", () => {
  it("falls back from UNVERIFIED sentinel to modelRequested", () => {
    const r = resolveTariffModel({
      modelApplied: "UNVERIFIED",
      modelRequested: "gpt-6-luna",
    });
    expect(r.model).toBe("gpt-6-luna");
    expect(r.modelAppliedUnverified).toBe(true);

    const cost = estimateCostUsd(
      { inputTokens: 10_000, outputTokens: 500, cachedInputTokens: null },
      r.model,
      { modelAppliedUnverified: r.modelAppliedUnverified },
    );
    expect(cost.estimatedCostUsd).not.toBeNull();
    expect(cost.costCoverage).toBe("PARTIAL");
    expect(cost.limits).toContain("MODEL_APPLIED_UNVERIFIED");
    expect(cost.limits).toContain("CACHED_INPUT_TOKENS_UNVERIFIED");
  });

  it("uses verified applied model when catalogued", () => {
    const r = resolveTariffModel({
      modelApplied: "gpt-6.1-terra",
      modelRequested: "gpt-6-luna",
    });
    expect(r.model).toBe("gpt-6.1-terra");
    expect(r.modelAppliedUnverified).toBe(false);
  });

  it("returns null model when both missing", () => {
    const r = resolveTariffModel({
      modelApplied: null,
      modelRequested: null,
    });
    expect(r.model).toBeNull();
    const cost = estimateCostUsd(
      { inputTokens: 100, outputTokens: 10, cachedInputTokens: 0 },
      r.model,
    );
    expect(cost.estimatedCostUsd).toBeNull();
    expect(cost.costCoverage).toBe("UNKNOWN");
  });
});
