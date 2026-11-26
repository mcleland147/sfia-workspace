/**
 * Collecteur isolé (processus logique) → PostgreSQL DEV → lecture produit.
 * Uses TEST_SUBSTITUTED transport — no LIVE Admin.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  markSubstitutedAdminTransport,
  resetAdminCollectorStateForTests,
  resolveIsolatedAdminCollectorConfig,
  runAdminCollection,
} from "@/domains/finops/provider-admin-usage-collector";
import {
  getAdminCollectionFreshnessFromPg,
  listAdminSnapshotsFromPg,
} from "@/domains/finops/provider-admin-usage-repository";

const costsPage = {
  object: "page",
  data: [
    {
      object: "bucket",
      start_time: 1_700_000_000,
      end_time: 1_700_086_400,
      results: [
        {
          object: "organization.costs.result",
          amount: { value: 1.25, currency: "usd" },
          project_id: "proj_pg_a",
        },
      ],
    },
  ],
  has_more: false,
  next_page: null,
};

describe("admin snapshots PG persistence (DEV)", () => {
  beforeAll(() => {
    resetAdminCollectorStateForTests();
  });
  afterAll(() => {
    resetAdminCollectorStateForTests();
  });

  it("persists snapshots via collector and survives memory reset", async () => {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: costsPage,
    }));
    const r = await runAdminCollection({
      config: resolveIsolatedAdminCollectorConfig({
        adminApiKey: null,
        mode: "TEST_SUBSTITUTED",
        liveAuthorized: false,
        organizationScope: "org:pg-dev-test",
        transport,
      }),
      path: "/organization/costs",
      query: { start_time: "1700000000", bucket_width: "1d" },
      persistToPg: true,
    });
    expect(r.status).toBe("READY");
    expect(r.snapshots.length).toBe(1);

    // Simulate collector process exit — wipe in-memory SoT.
    resetAdminCollectorStateForTests();

    const fromPg = await listAdminSnapshotsFromPg({
      organizationScope: "org:pg-dev-test",
    });
    expect(fromPg.some((s) => s.dimensions.project_id === "proj_pg_a")).toBe(
      true,
    );
    const freshness = await getAdminCollectionFreshnessFromPg();
    expect(freshness.snapshotCount).toBeGreaterThan(0);
    expect(freshness.status).toBe("READY");
  });

  it("idempotent replay does not duplicate canonical rows", async () => {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: costsPage,
    }));
    const cfg = resolveIsolatedAdminCollectorConfig({
      adminApiKey: null,
      mode: "TEST_SUBSTITUTED",
      liveAuthorized: false,
      organizationScope: "org:pg-dev-test",
      transport,
    });
    await runAdminCollection({
      config: cfg,
      path: "/organization/costs",
      query: { start_time: "1700000000", bucket_width: "1d" },
      persistToPg: true,
    });
    await runAdminCollection({
      config: cfg,
      path: "/organization/costs",
      query: { start_time: "1700000000", bucket_width: "1d" },
      persistToPg: true,
    });
    const rows = await listAdminSnapshotsFromPg({
      organizationScope: "org:pg-dev-test",
    });
    const matches = rows.filter(
      (s) =>
        s.dimensions.project_id === "proj_pg_a" &&
        s.intervalStartUtc.startsWith("2023-11-14"),
    );
    expect(matches.length).toBe(1);
  });
});
