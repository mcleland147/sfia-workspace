import { describe, expect, it } from "vitest";
import {
  aggregateEstimatedCost,
  classifyObservedWorkCounts,
  costPerObservedCompletedWork,
  finOpsConfirmedValueLabel,
  finOpsShortModelLabel,
  aggregateTokenTotal,
  computeEstimationCompletenessPercent,
  computeMeasureCoveragePercent,
  sumBillableProviderRequests,
  formatMeasuredUsd,
  finOpsDailyChartYTicks,
  finOpsDailyXAxisLabels,
  formatModelBreakdownCost,
  formatUsdAxisFr,
  finOpsMeasureCoverageSubtext,
  finOpsModelDisplayLabel,
  effectiveFinOpsProjectId,
  effectiveFinOpsProjectIdForWork,
  parseFinOpsPeriodDays,
  resolveObservedProjectId,
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
    expect(
      tokenTotalForRow({
        totalTokens: 12,
        inputTokens: 10,
        outputTokens: 4,
      }),
    ).toBe(12);
  });

  it("keeps an unattributed observation from turning the completed count into a known zero", () => {
    const mixed = classifyObservedWorkCounts({
      statuses: ["COMPLETE", "OPEN"],
      unattributedBillable: 3,
      hasAnyObservation: true,
    });
    expect(mixed.completed.kind).toBe("partial");
    if (mixed.completed.kind === "partial") {
      expect(mixed.completed.value).toBe(1);
      expect(mixed.completed.note).toContain("Observations non attribuées : 3");
      expect(mixed.completed.note).toContain("En cours : 1");
    }
    expect(
      costPerObservedCompletedWork({
        cost: { kind: "known", value: 1.2 },
        completed: mixed.completed,
      }).kind,
    ).toBe("unknown");
  });

  it("keeps the global ratio only when every billable observation is linked", () => {
    const completed = classifyObservedWorkCounts({
      statuses: ["COMPLETE", "COMPLETE"],
      unattributedBillable: 0,
      hasAnyObservation: true,
    }).completed;
    const ratio = costPerObservedCompletedWork({
      cost: { kind: "partial", value: 2 },
      completed,
    });
    expect(completed).toEqual({ kind: "known", value: 2 });
    expect(ratio.kind).toBe("partial");
    if (ratio.kind === "partial") {
      expect(ratio.value).toBe(1);
      expect(ratio.note).toContain("global");
    }
  });

  it("does not present a requested model or effort as confirmed", () => {
    expect(
      finOpsConfirmedValueLabel({ applied: "UNVERIFIED", requested: "medium" }),
    ).toBe("medium (demandé)");
    expect(finOpsShortModelLabel("gpt-6.1-terra (demandé)")).toBe("Terra (demandé)");
    expect(finOpsShortModelLabel("non vérifié")).toBe("non vérifié");
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

  it("finOpsMeasureCoverageSubtext explains zero KNOWN estimation with observed requests", () => {
    const sub = finOpsMeasureCoverageSubtext({
      totalRequests: 4,
      measuredRequests: 4,
      estimationCompletenessPercent: { kind: "partial", value: 0 },
    });
    expect(sub).toContain("PARTIAL ou inconnus");
    expect(sub).not.toContain("estimation connue 0");
  });

  it("excludes HTTP attempt correlation rows from cost and request totals", () => {
    const rows = [
      {
        estimatedCostUsd: "2.00",
        costCoverage: "KNOWN",
        totalTokens: 100,
        inputTokens: 60,
        outputTokens: 40,
        providerRequests: 1,
        limitsJson: ["MULTI_HTTP_ATTEMPT_AGGREGATE"],
      },
      {
        estimatedCostUsd: null,
        costCoverage: "PARTIAL",
        totalTokens: null,
        inputTokens: null,
        outputTokens: null,
        providerRequests: null,
        limitsJson: ["HTTP_ATTEMPT_CORRELATION_ONLY", "HTTP_ATTEMPT_USAGE_UNKNOWN"],
      },
      {
        // E2-REL-05 — USAGE_UNKNOWN alone is NOT a correlation companion; keep in request census.
        estimatedCostUsd: null,
        costCoverage: "PARTIAL",
        totalTokens: null,
        inputTokens: null,
        outputTokens: null,
        providerRequests: 1,
        limitsJson: ["HTTP_ATTEMPT_USAGE_UNKNOWN"],
      },
    ];
    const cost = aggregateEstimatedCost(rows);
    expect(cost.kind).toBe("partial");
    if (cost.kind === "partial") expect(cost.value).toBeCloseTo(2);
    const tokens = aggregateTokenTotal(rows);
    expect(tokens.kind).not.toBe("known");
    expect(sumBillableProviderRequests(rows)).toBe(2);
    // PARTIAL+USAGE_UNKNOWN still has coverage class PARTIAL → counted in measured census.
    expect(sumBillableProviderRequests(rows, { onlyWithObservedCost: true })).toBe(2);
    expect(
      sumBillableProviderRequests(
        rows.map((r) =>
          r.limitsJson?.includes("HTTP_ATTEMPT_USAGE_UNKNOWN") &&
          !r.limitsJson?.includes("HTTP_ATTEMPT_CORRELATION_ONLY")
            ? { ...r, costCoverage: "UNKNOWN", providerRequests: 1 }
            : r,
        ),
        { onlyWithObservedCost: true },
      ),
    ).toBe(1);
  });

  it("E2-REL-05 — effectiveFinOpsProjectId refuses obs≠work conflict", () => {
    expect(
      effectiveFinOpsProjectId({ observationProjectId: "pA", workProjectId: "pA" }),
    ).toBe("pA");
    expect(
      effectiveFinOpsProjectId({ observationProjectId: null, workProjectId: "pA" }),
    ).toBe("pA");
    expect(
      effectiveFinOpsProjectId({ observationProjectId: "pA", workProjectId: null }),
    ).toBe("pA");
    expect(
      effectiveFinOpsProjectId({ observationProjectId: "pB", workProjectId: "pA" }),
    ).toBeNull();
  });

  it("E2-REL-05 — effectiveFinOpsProjectIdForWork null on any conflicting row", () => {
    expect(
      effectiveFinOpsProjectIdForWork("pA", [
        { projectId: "pA" },
        { projectId: null },
      ]),
    ).toBe("pA");
    expect(
      effectiveFinOpsProjectIdForWork("pA", [
        { projectId: "pA" },
        { projectId: "pB" },
      ]),
    ).toBeNull();
    expect(
      effectiveFinOpsProjectIdForWork(null, [{ projectId: "pA" }, { projectId: "pB" }]),
    ).toBeNull();
  });

  it("E2 A.7 — resolveObservedProjectId refuses multi-project attribution", () => {
    expect(resolveObservedProjectId([])).toBeNull();
    expect(resolveObservedProjectId([{ projectId: null }])).toBeNull();
    expect(
      resolveObservedProjectId([{ projectId: "p1" }, { projectId: "p1" }]),
    ).toBe("p1");
    expect(
      resolveObservedProjectId([{ projectId: "p1" }, { projectId: "p2" }]),
    ).toBeNull();
  });

  it("E2 A.7 — finOpsModelDisplayLabel never presents UNVERIFIED as applied", () => {
    expect(
      finOpsModelDisplayLabel({
        modelApplied: "UNVERIFIED",
        modelRequested: "gpt-6.2-sol",
      }),
    ).toBe("gpt-6.2-sol (demandé)");
    expect(
      finOpsModelDisplayLabel({
        modelApplied: "gpt-6.1-terra",
        modelRequested: "gpt-6.2-sol",
      }),
    ).toBe("gpt-6.1-terra");
    expect(
      finOpsModelDisplayLabel({ modelApplied: null, modelRequested: null }),
    ).toBeNull();
  });
});