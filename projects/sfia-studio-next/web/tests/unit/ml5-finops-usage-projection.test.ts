import { describe, expect, it } from "vitest";
import {
  aggregateEstimatedCost,
  aggregateTokenTotal,
  computeMeasureCoveragePercent,
  formatMeasuredUsd,
  parseFinOpsPeriodDays,
  resolvePersonalSettingsActive,
  tokenTotalForRow,
} from "@/domains/finops/usage-projection";

describe("ML5 E06 — FinOps usage projection", () => {
  it("parseFinOpsPeriodDays defaults to 30", () => {
    expect(parseFinOpsPeriodDays(null)).toBe(30);
    expect(parseFinOpsPeriodDays("7")).toBe(7);
    expect(parseFinOpsPeriodDays("999")).toBe(30);
  });

  it("aggregateEstimatedCost never invents zero when all costs unknown", () => {
    const r = aggregateEstimatedCost([
      { estimatedCostUsd: null, costCoverage: "UNKNOWN" },
      { estimatedCostUsd: null, costCoverage: "UNKNOWN" },
    ]);
    expect(r.kind).toBe("unknown");
    expect(formatMeasuredUsd(r)).toBe("Inconnu");
  });

  it("aggregateTokenTotal returns unknown when token rows incomplete", () => {
    const r = aggregateTokenTotal([
      { totalTokens: null, inputTokens: 10, outputTokens: null },
    ]);
    expect(r.kind).not.toBe("known");
    expect(formatMeasuredUsd({ kind: "unknown" })).toBe("Inconnu");
  });

  it("tokenTotalForRow uses input+output only when both present", () => {
    expect(tokenTotalForRow({ totalTokens: 5, inputTokens: 1, outputTokens: 1 })).toBe(5);
    expect(tokenTotalForRow({ totalTokens: null, inputTokens: 3, outputTokens: 4 })).toBe(7);
    expect(tokenTotalForRow({ totalTokens: null, inputTokens: 3, outputTokens: null })).toBeNull();
  });

  it("computeMeasureCoveragePercent handles empty", () => {
    expect(computeMeasureCoveragePercent([]).kind).toBe("empty");
  });

  it("resolvePersonalSettingsActive maps settings routes", () => {
    expect(resolvePersonalSettingsActive("/settings/integrations")).toBe("integrations");
    expect(resolvePersonalSettingsActive("/settings/consumption/travaux/x")).toBe("consumption");
    expect(resolvePersonalSettingsActive("/portfolio")).toBeNull();
  });
});