import { describe, expect, it } from "vitest";
import { evaluateFinOpsReconciliation } from "@/domains/finops/finops-reconciliation";
import type { AdminUsageSnapshot } from "@/domains/finops/provider-admin-usage-collector";

function liveSnap(amount: string): AdminUsageSnapshot {
  return {
    sourceEndpoint: "/organization/costs",
    surfaceObject: "organization.costs.result",
    organizationScope: "org:demo",
    intervalStartUtc: "2023-11-14T22:13:20.000Z",
    intervalEndUtc: "2023-11-15T22:13:20.000Z",
    granularity: "1d",
    dimensions: {
      project_id: "proj_demo",
      api_key_id: null,
      user_id: null,
      model: null,
      line_item: null,
      api_source: null,
    },
    metrics: {
      input_tokens: { presence: "ABSENT", value: null },
      output_tokens: { presence: "ABSENT", value: null },
      input_cached_tokens: { presence: "ABSENT", value: null },
      num_model_requests: { presence: "ABSENT", value: null },
      num_requests: { presence: "ABSENT", value: null },
      amount: { presence: "MEASURED", value: amount },
      currency: { presence: "MEASURED", value: "usd" },
    },
    completeness: "complete",
    collectedAtUtc: "2026-11-26T12:00:00.000Z",
    collectionId: "acol_svc",
    collectionProvenance: "LIVE",
  };
}

describe("FinOps service-path reconciliation", () => {
  it("establishes COMPARABLE when window/org/project/provenance/rights align", () => {
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 0.8,
      studioEstimationKind: "known",
      snapshots: [liveSnap("0.8600000000")],
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:demo",
      configuredOrgId: "demo",
      configuredProjectId: "proj_demo",
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("COMPARABLE");
    expect(r.disclosed).toBe(true);
    expect(r.deltaUsd).toBe("0.0600000000");
  });

  it("refuses disclosure when pilot unauthorized even if math would COMPARABLE", () => {
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 0.8,
      studioEstimationKind: "known",
      snapshots: [liveSnap("0.8600000000")],
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:demo",
      configuredOrgId: "demo",
      configuredProjectId: "proj_demo",
      configuredApiKeyId: null,
      pilotAuthorized: false,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("UNAVAILABLE");
    expect(r.disclosed).toBe(false);
    expect(r.providerCostUsd).toBeNull();
  });

  it("TEST provenance excluded by default", () => {
    const snap = liveSnap("1.0000000000");
    snap.collectionProvenance = "TEST_SUBSTITUTED";
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 0.8,
      studioEstimationKind: "known",
      snapshots: [snap],
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:demo",
      configuredOrgId: "demo",
      configuredProjectId: "proj_demo",
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("UNAVAILABLE");
    expect(r.limits).toContain("NO_LIVE_COMPLETE_SNAPSHOTS");
  });

  it("partial studio estimation never becomes COMPARABLE", () => {
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 0.8,
      studioEstimationKind: "partial",
      snapshots: [liveSnap("0.8600000000")],
      windowStartUtc: "2023-11-14T22:13:20.000Z",
      windowEndUtc: "2023-11-15T22:13:20.000Z",
      organizationScope: "org:demo",
      configuredOrgId: "demo",
      configuredProjectId: "proj_demo",
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("PARTIAL");
    expect(r.disclosed).toBe(false);
  });
});
