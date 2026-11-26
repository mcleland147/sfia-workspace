import { describe, expect, it } from "vitest";
import {
  aggregateEstimatedCost,
  aggregateTokenTotal,
  computeEstimationCompletenessPercent,
  computeMeasureCoveragePercent,
  formatMeasuredUsd,
  finOpsDailyChartYTicks,
  finOpsDailyXAxisLabels,
  formatModelBreakdownCost,
  formatUsdAxisFr,
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

  it("aggregateEstimatedCost returns partial when any row is PARTIAL", () => {
    const r = aggregateEstimatedCost([
      { estimatedCostUsd: "1.5", costCoverage: "KNOWN" },
      { estimatedCostUsd: "0.5", costCoverage: "PARTIAL" },
    ]);
    expect(r.kind).toBe("partial");
    if (r.kind === "partial") expect(r.value).toBeCloseTo(2);
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

  it("computeMeasureCoveragePercent does not assume request count 1", () => {
    const unknown = computeMeasureCoveragePercent([
      { costCoverage: "KNOWN", providerRequests: null },
    ]);
    expect(unknown.kind).toBe("unknown");
    const mixed = computeMeasureCoveragePercent([
      { costCoverage: "KNOWN", providerRequests: 2 },
      { costCoverage: "UNKNOWN", providerRequests: null },
    ]);
    expect(mixed.kind).toBe("partial");
    if (mixed.kind === "partial") expect(mixed.value).toBe(100);
  });

  it("estimation completeness excludes PARTIAL from fully-known rate", () => {
    // Without independent emission census, observation coverage stays PARTIAL.
    const obs = computeMeasureCoveragePercent([
      { costCoverage: "KNOWN", providerRequests: 2 },
      { costCoverage: "PARTIAL", providerRequests: 2 },
    ]);
    expect(obs.kind).toBe("partial");
    if (obs.kind === "partial") expect(obs.value).toBe(100);

    const obsCensus = computeMeasureCoveragePercent(
      [
        { costCoverage: "KNOWN", providerRequests: 2 },
        { costCoverage: "PARTIAL", providerRequests: 2 },
      ],
      { emissionCensusComplete: true },
    );
    expect(obsCensus.kind).toBe("known");
    if (obsCensus.kind === "known") expect(obsCensus.value).toBe(100);

    const fin = computeEstimationCompletenessPercent([
      { costCoverage: "KNOWN", providerRequests: 2 },
      { costCoverage: "PARTIAL", providerRequests: 2 },
    ]);
    expect(fin.kind).toBe("partial");
    if (fin.kind === "partial") expect(fin.value).toBe(50);
  });

  it("resolvePersonalSettingsActive maps settings routes", () => {
    expect(resolvePersonalSettingsActive("/settings/integrations")).toBe("integrations");
    expect(resolvePersonalSettingsActive("/settings/consumption/travaux/x")).toBe("consumption");
    expect(resolvePersonalSettingsActive("/portfolio")).toBeNull();
  });

  it("formatUsdAxisFr uses compact dollars for chart ticks", () => {
    expect(formatUsdAxisFr(3)).toBe("3 $");
    expect(formatUsdAxisFr(0)).toBe("0 $");
  });

  it("finOpsDailyXAxisLabels matches Figma J-29 / Aujourd'hui", () => {
    expect(finOpsDailyXAxisLabels(30)).toEqual({ start: "J-29", end: "Aujourd'hui" });
  });

  it("finOpsDailyChartYTicks descends from scale max", () => {
    const ticks = finOpsDailyChartYTicks(2.4);
    expect(ticks[0]).toBe(3);
    expect(ticks[ticks.length - 1]).toBe(0);
  });

  it("formatModelBreakdownCost never shows zero for unknown coverage", () => {
    expect(formatModelBreakdownCost({ costUsd: null, coverage: "UNKNOWN" })).toBe("Inconnu");
    expect(formatModelBreakdownCost({ costUsd: 1.2, coverage: "PARTIAL" })).toContain("1,20");
  });
});