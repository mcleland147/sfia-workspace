/**
 * Admin/FinOps qualification — PG integrity, provenance, roles, restore probe.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import postgres from "postgres";
import {
  markSubstitutedAdminTransport,
  resetAdminCollectorStateForTests,
  resolveIsolatedAdminCollectorConfig,
  runAdminCollection,
  reconcileFinOpsCosts,
  assessPeriodEquality,
} from "@/domains/finops/provider-admin-usage-collector";
import {
  getAdminCollectionFreshnessFromPg,
  listAdminSnapshotsFromPg,
  upsertAdminSnapshotsPg,
  insertAdminCollectionRun,
  finishAdminCollectionRun,
} from "@/domains/finops/provider-admin-usage-repository";
import type { AdminUsageSnapshot } from "@/domains/finops/provider-admin-usage-collector";

const costsPage = (amount: number, projectId: string) => ({
  object: "page",
  data: [
    {
      object: "bucket",
      start_time: 1_700_000_000,
      end_time: 1_700_086_400,
      results: [
        {
          object: "organization.costs.result",
          amount: { value: amount, currency: "usd" },
          project_id: projectId,
        },
      ],
    },
  ],
  has_more: false,
  next_page: null,
});

function baseSnap(
  overrides: Partial<AdminUsageSnapshot> & {
    completeness: "complete" | "partial";
    collectedAtUtc: string;
    amount: string;
  },
): AdminUsageSnapshot {
  return {
    sourceEndpoint: "/organization/costs",
    surfaceObject: "organization.costs.result",
    organizationScope: "org:qual",
    intervalStartUtc: "2023-11-14T22:13:20.000Z",
    intervalEndUtc: "2023-11-15T22:13:20.000Z",
    granularity: "1d",
    dimensions: {
      project_id: "proj_qual",
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
      amount: { presence: "MEASURED", value: overrides.amount },
      currency: { presence: "MEASURED", value: "usd" },
    },
    collectionId: overrides.collectionId ?? "acol_qual",
    completeness: overrides.completeness,
    collectedAtUtc: overrides.collectedAtUtc,
    collectionProvenance: overrides.collectionProvenance,
  };
}

describe("Admin/FinOps PG qualification", () => {
  beforeAll(() => resetAdminCollectorStateForTests());
  afterAll(() => resetAdminCollectorStateForTests());

  it("partial collect does not overwrite complete snapshot metrics", async () => {
    const runId = `acol_integrity_${Date.now()}`;
    await insertAdminCollectionRun({
      collectionId: runId,
      startedAtUtc: "2026-11-26T10:00:00.000Z",
      status: "READY",
      path: "/organization/costs",
      organizationScope: "org:qual",
      provenance: "LIVE",
    });
    await finishAdminCollectionRun({
      collectionId: runId,
      finishedAtUtc: "2026-11-26T10:00:01.000Z",
      status: "READY",
      pagesFetched: 1,
      limits: [],
      lastError: null,
    });

    await upsertAdminSnapshotsPg(
      [
        baseSnap({
          collectionId: runId,
          completeness: "complete",
          collectedAtUtc: "2026-11-26T10:00:00.000Z",
          amount: "9.0000000000",
        }),
      ],
      "LIVE",
    );

    const runPartial = `${runId}_p`;
    await insertAdminCollectionRun({
      collectionId: runPartial,
      startedAtUtc: "2026-11-26T11:00:00.000Z",
      status: "PARTIAL",
      path: "/organization/costs",
      organizationScope: "org:qual",
      provenance: "LIVE",
    });
    await finishAdminCollectionRun({
      collectionId: runPartial,
      finishedAtUtc: "2026-11-26T11:00:01.000Z",
      status: "PARTIAL",
      pagesFetched: 1,
      limits: [],
      lastError: null,
    });

    await upsertAdminSnapshotsPg(
      [
        baseSnap({
          collectionId: runPartial,
          completeness: "partial",
          collectedAtUtc: "2026-11-26T11:00:00.000Z",
          amount: "0.0100000000",
        }),
      ],
      "LIVE",
    );

    const rows = await listAdminSnapshotsFromPg({
      organizationScope: "org:qual",
      provenance: "LIVE",
    });
    const hit = rows.find((r) => r.dimensions.project_id === "proj_qual");
    expect(hit?.completeness).toBe("complete");
    expect(hit?.metrics.amount.value).toBe("9.0000000000");
  });

  it("TEST provenance is excluded from LIVE product reads", async () => {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: costsPage(3.33, "proj_test_only"),
    }));
    const r = await runAdminCollection({
      config: resolveIsolatedAdminCollectorConfig({
        adminApiKey: null,
        mode: "TEST_SUBSTITUTED",
        liveAuthorized: false,
        organizationScope: "org:qual-test",
        transport,
      }),
      path: "/organization/costs",
      query: { start_time: "1700000000" },
      persistToPg: true,
    });
    expect(r.status).toBe("READY");

    const liveOnly = await listAdminSnapshotsFromPg({
      organizationScope: "org:qual-test",
      provenance: "LIVE",
    });
    expect(liveOnly.some((s) => s.dimensions.project_id === "proj_test_only")).toBe(
      false,
    );
    const testRows = await listAdminSnapshotsFromPg({
      organizationScope: "org:qual-test",
      provenance: "TEST_SUBSTITUTED",
    });
    expect(testRows.some((s) => s.dimensions.project_id === "proj_test_only")).toBe(
      true,
    );
  });

  it("positive COMPARABLE with exact period window", () => {
    const window = {
      startUtc: "2023-11-14T22:13:20.000Z",
      endUtc: "2023-11-15T22:13:20.000Z",
    };
    const rows = [
      baseSnap({
        completeness: "complete",
        collectedAtUtc: "2026-11-26T10:00:00.000Z",
        amount: "0.8600000000",
        collectionProvenance: "LIVE",
      }),
    ];
    const period = assessPeriodEquality(rows, window);
    expect(period.periodEqual).toBe(true);
    const rec = reconcileFinOpsCosts({
      studioEstimatedUsd: "0.8000000000",
      providerCostUsd: "0.8600000000",
      scope: {
        organizationMatches: true,
        organizationIdentityProven: true,
        projectIdsOverlap: true,
        projectAttributionProven: true,
        apiKeyIdsOverlap: false,
        periodOverlap: true,
        periodEqual: period.periodEqual,
        currencyMatches: true,
        providerCurrency: "usd",
        surfacesRequested: ["/organization/costs"],
        groupingCompatible: true,
        coverageComplete: true,
        freshnessAcceptable: true,
        evidenceNotes: ["QUAL_POSITIVE_COMPARABLE"],
      },
    });
    expect(rec.status).toBe("COMPARABLE");
    expect(rec.deltaUsd).toBe("0.0600000000");
  });

  it("finops reader role cannot INSERT snapshots (SET ROLE, no password)", async () => {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL missing");
    const sql = postgres(url, { max: 1 });
    try {
      await sql`SET ROLE sfia_finops_reader`;
      let sqlstate: string | null = null;
      try {
        await sql`
          INSERT INTO provider_admin_collection_runs (
            collection_id, started_at, status, path, organization_scope, collection_provenance
          ) VALUES (
            'acol_should_fail', now(), 'READY', '/organization/costs', 'org:x', 'LIVE'
          )
        `;
      } catch (e: unknown) {
        sqlstate =
          e && typeof e === "object" && "code" in e
            ? String((e as { code: string }).code)
            : "ERR";
      }
      await sql`RESET ROLE`;
      // 42501 insufficient_privilege
      expect(sqlstate).toBe("42501");
    } finally {
      await sql.end({ timeout: 1 });
    }
  });

  it("collector role cannot SELECT pilots (SET ROLE, no password)", async () => {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL missing");
    const sql = postgres(url, { max: 1 });
    try {
      await sql`SET ROLE sfia_admin_collector`;
      let sqlstate: string | null = null;
      try {
        await sql`SELECT id FROM pilots LIMIT 1`;
      } catch (e: unknown) {
        sqlstate =
          e && typeof e === "object" && "code" in e
            ? String((e as { code: string }).code)
            : "ERR";
      }
      await sql`RESET ROLE`;
      expect(sqlstate).toBe("42501");
    } finally {
      await sql.end({ timeout: 1 });
    }
  });

  it("collector role CAN insert snapshot then reader CAN select (positive grant)", async () => {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL missing");
    const sql = postgres(url, { max: 1 });
    const cid = `acol_role_ok_${Date.now()}`;
    try {
      await sql`SET ROLE sfia_admin_collector`;
      await sql`
        INSERT INTO provider_admin_collection_runs (
          collection_id, started_at, status, path, organization_scope, collection_provenance
        ) VALUES (
          ${cid}, now(), 'READY', '/organization/costs', 'org:role-ok', 'TEST_SUBSTITUTED'
        )
      `;
      await sql`RESET ROLE`;
      await sql`SET ROLE sfia_finops_reader`;
      const rows = await sql`
        SELECT collection_id FROM provider_admin_collection_runs WHERE collection_id = ${cid}
      `;
      await sql`RESET ROLE`;
      expect(rows.length).toBe(1);
    } finally {
      await sql.end({ timeout: 1 });
    }
  });

  it("freshness scoped by provenance", async () => {
    const f = await getAdminCollectionFreshnessFromPg({
      organizationScope: "org:qual-test",
      provenance: "TEST_SUBSTITUTED",
    });
    expect(f.snapshotCount).toBeGreaterThan(0);
  });
});
