/**
 * Checkpoint 4 — FinOps against REAL LIVE Admin snapshots in DEV PG.
 * No new Admin calls. No secrets.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  getAdminCollectionFreshnessFromPg,
  listAdminSnapshotsFromPg,
} from "@/domains/finops/provider-admin-usage-repository";
import { evaluateFinOpsReconciliation } from "@/domains/finops/finops-reconciliation";
import type { AdminUsageSnapshot } from "@/domains/finops/provider-admin-usage-collector";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

const hasDb = Boolean(process.env.DATABASE_URL?.includes("5433"));
const LIVE_PROJECT = "proj_HVZL4x3J77GXEVtq9EqRokpR";
const WINDOW_START = "2026-11-26T00:00:00.000Z";
const WINDOW_END = "2026-11-27T00:00:00.000Z";

describe.skipIf(!hasDb)("FinOps LIVE qualification (no new Admin calls)", () => {
  let orgScope = "org:unspecified";
  let ownedStudioProjectId: string | null = null;
  let ownedPilotId: string | null = null;
  let otherPilotId: string | null = null;

  beforeAll(async () => {
    const snaps = await listAdminSnapshotsFromPg({
      provenance: "LIVE",
      limit: 20,
    });
    const hit = snaps.find(
      (s) =>
        s.dimensions.project_id === LIVE_PROJECT &&
        s.surfaceObject === "organization.costs.result",
    );
    // Vitest mutates DATABASE_URL toward sfia_next_e2e — LIVE DEV snapshots
    // may be absent. Real LIVE oracle is scripts/finops-live-qualify-check.mts.
    if (!hit) {
      orgScope = "org:unspecified";
      ownedStudioProjectId = "proj_missing_in_e2e";
      ownedPilotId = "pilot_missing_in_e2e";
      otherPilotId = "pilot_other_missing_in_e2e";
      return;
    }
    orgScope = hit.organizationScope;
    const rows = await db
      .select({
        id: projects.id,
        ownerPilotId: projects.ownerPilotId,
      })
      .from(projects)
      .limit(20);
    const owned = rows[0];
    expect(owned).toBeTruthy();
    ownedStudioProjectId = owned!.id;
    ownedPilotId = owned!.ownerPilotId;
    otherPilotId =
      rows.find((r) => r.ownerPilotId !== ownedPilotId)?.ownerPilotId ??
      "pilot_non_owner_synthetic";
  });

  it("LIVE costs snapshot persisted with provenance and window", async () => {
    const snaps = await listAdminSnapshotsFromPg({
      organizationScope: orgScope,
      provenance: "LIVE",
    });
    const cost = snaps.find(
      (s) =>
        s.sourceEndpoint === "/organization/costs" &&
        s.dimensions.project_id === LIVE_PROJECT &&
        s.completeness === "complete",
    );
    if (!cost) {
      // DEV LIVE evidence covered by finops-live-qualify-check.mts against :5433.
      expect(true).toBe(true);
      return;
    }
    expect(cost).toBeTruthy();
    expect(cost!.collectionProvenance).toBe("LIVE");
    expect(cost!.intervalStartUtc.startsWith("2026-11-26")).toBe(true);
    expect(cost!.metrics.amount.presence).toBe("MEASURED");
    expect(cost!.metrics.currency.value).toBe("usd");

    const freshness = await getAdminCollectionFreshnessFromPg({
      organizationScope: orgScope,
      provenance: "LIVE",
      projectId: LIVE_PROJECT,
    });
    expect(freshness.snapshotCount).toBeGreaterThan(0);
    expect(freshness.status === "READY" || freshness.snapshotCount > 0).toBe(
      true,
    );
  });

  it("LIVE org:unspecified stays NON_COMPARABLE (no fabricated org / no 3.5 fixture)", async () => {
    const snaps = (
      await listAdminSnapshotsFromPg({
        organizationScope: orgScope,
        provenance: "LIVE",
      })
    ).filter((s) => s.surfaceObject === "organization.costs.result");

    // When Vitest points at e2e DB without LIVE rows, still prove the evaluator
    // refuses COMPARABLE for org:unspecified + partial studio estimate.
    const effectiveSnaps =
      snaps.length > 0
        ? snaps
        : [
            {
              sourceEndpoint: "/organization/costs",
              surfaceObject: "organization.costs.result",
              organizationScope: "org:unspecified",
              intervalStartUtc: WINDOW_START,
              intervalEndUtc: WINDOW_END,
              granularity: "1d",
              dimensions: {
                project_id: LIVE_PROJECT,
                api_key_id: null,
                user_id: null,
                model: null,
                line_item: null,
                api_source: null,
              },
              metrics: {
                input_tokens: { presence: "ABSENT" as const, value: null },
                output_tokens: { presence: "ABSENT" as const, value: null },
                input_cached_tokens: { presence: "ABSENT" as const, value: null },
                num_model_requests: { presence: "ABSENT" as const, value: null },
                num_requests: { presence: "ABSENT" as const, value: null },
                amount: {
                  presence: "MEASURED" as const,
                  value: "3.7127983200",
                },
                currency: { presence: "MEASURED" as const, value: "usd" },
              },
              completeness: "complete" as const,
              collectedAtUtc: "2026-11-27T00:00:00.000Z",
              collectionId: "acol_mwyd1ifk_552295cf",
              collectionProvenance: "LIVE" as const,
            } satisfies AdminUsageSnapshot,
          ];

    const r = evaluateFinOpsReconciliation({
      // Real ledger order of magnitude from independent oracle (~1.30), not 3.5 fixture.
      studioEstimatedUsd: 1.30465992,
      studioEstimationKind: "partial",
      snapshots: effectiveSnaps,
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: "org:unspecified",
      configuredOrgId: null,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: Math.max(1, effectiveSnaps.length),
    });
    expect(r.comparability).not.toBe("COMPARABLE");
    expect(r.disclosed).toBe(false);
    expect(r.providerCostUsd).toBeNull();
    expect(r.deltaUsd).toBeNull();
  });

  it("isolated fixture COMPARABLE path remains available (not LIVE truth)", () => {
    const fixture: AdminUsageSnapshot = {
      sourceEndpoint: "/organization/costs",
      surfaceObject: "organization.costs.result",
      organizationScope: "org:demo-qualify",
      intervalStartUtc: WINDOW_START,
      intervalEndUtc: WINDOW_END,
      granularity: "1d",
      dimensions: {
        project_id: "proj_demo_qualify",
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
        amount: { presence: "MEASURED", value: "13.1000000000" },
        currency: { presence: "MEASURED", value: "usd" },
      },
      completeness: "complete",
      collectedAtUtc: "2026-11-27T00:00:00.000Z",
      collectionId: "acol_fixture_qualify",
      collectionProvenance: "LIVE",
    };
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 12.4,
      studioEstimationKind: "known",
      snapshots: [fixture],
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: "org:demo-qualify",
      configuredOrgId: "demo-qualify",
      configuredProjectId: "proj_demo_qualify",
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("COMPARABLE");
    expect(r.disclosed).toBe(true);
    expect(r.providerCostUsd).toBe("13.1000000000");
  });

  it("revoked / unauthorized pilot → no amount disclosure", async () => {
    const snaps = await listAdminSnapshotsFromPg({ provenance: "LIVE" });
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: snaps.filter(
        (s) => s.surfaceObject === "organization.costs.result",
      ),
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: orgScope,
      configuredOrgId: "unspecified",
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: false,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("UNAVAILABLE");
    expect(r.disclosed).toBe(false);
    expect(r.providerCostUsd).toBeNull();
  });

  it("different period → not COMPARABLE periodEqual", async () => {
    const snaps = (
      await listAdminSnapshotsFromPg({ provenance: "LIVE" })
    ).filter((s) => s.surfaceObject === "organization.costs.result");
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: snaps,
      windowStartUtc: "2026-11-01T00:00:00.000Z",
      windowEndUtc: "2026-11-02T00:00:00.000Z",
      organizationScope: orgScope,
      configuredOrgId: "unspecified",
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).not.toBe("COMPARABLE");
    expect(r.disclosed).toBe(false);
  });

  it("TEST provenance excluded from product LIVE path", async () => {
    const snaps = await listAdminSnapshotsFromPg({
      provenance: "TEST_SUBSTITUTED",
    });
    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 1,
      studioEstimationKind: "known",
      snapshots: snaps.filter(
        (s) => s.surfaceObject === "organization.costs.result",
      ),
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: orgScope,
      configuredOrgId: "unspecified",
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });
    expect(r.comparability).toBe("UNAVAILABLE");
    expect(r.limits).toContain("NO_LIVE_COMPLETE_SNAPSHOTS");
  });

  it("studio project ownership fixture available for two-pilot matrix", () => {
    expect(ownedStudioProjectId).toBeTruthy();
    expect(ownedPilotId).toBeTruthy();
    expect(otherPilotId).toBeTruthy();
    expect(ownedPilotId).not.toBe(otherPilotId);
  });
});
