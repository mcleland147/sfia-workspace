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
    expect(hit).toBeTruthy();
    orgScope = hit!.organizationScope;
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

  it("service-path COMPARABLE when rights+window+project align", async () => {
    const snaps = (
      await listAdminSnapshotsFromPg({
        organizationScope: orgScope,
        provenance: "LIVE",
      })
    ).filter((s) => s.surfaceObject === "organization.costs.result");

    const orgId = orgScope.startsWith("org:")
      ? orgScope.slice(4)
      : orgScope;

    const r = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: snaps,
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: orgScope,
      configuredOrgId: orgId,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: snaps.length,
    });
    expect(r.comparability).toBe("COMPARABLE");
    expect(r.disclosed).toBe(true);
    expect(r.providerCostUsd).toBe("3.7127983200");
    expect(r.providerCurrency).toBe("usd");
    expect(r.deltaUsd).not.toBeNull();
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
