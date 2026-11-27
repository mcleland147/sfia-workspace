/**
 * FinOps LIVE qualification against DEV PG (not vitest e2e DB).
 * No Admin calls. No secrets printed.
 *
 * Distinguishes:
 * - LIVE historical path → honest NON_COMPARABLE (org:unspecified, partial ledger)
 * - Isolated fixture path → COMPARABLE for UI/service regression only
 *
 *   DATABASE_URL=...5433... npx tsx scripts/finops-live-qualify-check.mts
 */
import postgres from "postgres";
import { evaluateFinOpsReconciliation } from "../src/domains/finops/finops-reconciliation";
import type { AdminUsageSnapshot } from "../src/domains/finops/provider-admin-usage-collector";

const LIVE_PROJECT = "proj_HVZL4x3J77GXEVtq9EqRokpR";
const WINDOW_START = "2026-11-26T00:00:00.000Z";
const WINDOW_END = "2026-11-27T00:00:00.000Z";
const COLLECTION_COSTS = "acol_mwyd1ifk_552295cf";

function fixtureSnap(amount: string): AdminUsageSnapshot {
  return {
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
      amount: { presence: "MEASURED", value: amount },
      currency: { presence: "MEASURED", value: "usd" },
    },
    completeness: "complete",
    collectedAtUtc: "2026-11-27T00:00:00.000Z",
    collectionId: "acol_fixture_qualify",
    collectionProvenance: "LIVE",
  };
}

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url || !url.includes("5433")) {
    console.log(
      JSON.stringify({
        status: "BLOCKED",
        reason: "DATABASE_URL_MUST_BE_DEV_5433",
      }),
    );
    process.exitCode = 2;
    return;
  }
  const sql = postgres(url, { max: 1 });
  try {
    const rows = await sql`
      SELECT source_endpoint, surface_object, organization_scope,
             interval_start_utc, interval_end_utc, granularity,
             project_id, amount, currency, completeness, collection_provenance,
             collection_id, collected_at
      FROM provider_admin_usage_snapshots
      WHERE collection_id = ${COLLECTION_COSTS}
    `;
    if (rows.length === 0) {
      console.log(JSON.stringify({ status: "FAIL", reason: "LIVE_SNAPSHOT_MISSING" }));
      process.exitCode = 3;
      return;
    }
    const r = rows[0]!;
    const snap: AdminUsageSnapshot = {
      sourceEndpoint: r.source_endpoint,
      surfaceObject: r.surface_object,
      organizationScope: r.organization_scope,
      intervalStartUtc: new Date(r.interval_start_utc).toISOString(),
      intervalEndUtc: new Date(r.interval_end_utc).toISOString(),
      granularity: r.granularity,
      dimensions: {
        project_id: r.project_id,
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
        amount: {
          presence: r.amount != null ? "MEASURED" : "ABSENT",
          value: r.amount != null ? String(r.amount) : null,
        },
        currency: {
          presence: r.currency != null ? "MEASURED" : "ABSENT",
          value: r.currency,
        },
      },
      completeness: r.completeness,
      collectedAtUtc: new Date(r.collected_at).toISOString(),
      collectionId: r.collection_id,
      collectionProvenance: r.collection_provenance,
    };

    // Independent Studio ledger oracle — never the historical 3.5 FIXTURE.
    const studioRows = await sql`
      SELECT
        COUNT(*)::int AS observation_count,
        ROUND(SUM(COALESCE(estimated_cost_usd, 0))::numeric, 10)::text AS sum_estimated_cost_usd,
        COUNT(*) FILTER (WHERE estimated_cost_usd IS NULL)::int AS null_cost_rows,
        COUNT(*) FILTER (WHERE cost_coverage IS DISTINCT FROM 'FULL')::int AS non_full_coverage,
        array_agg(DISTINCT cost_coverage) AS coverage_kinds
      FROM provider_usage_observations
      WHERE created_at >= ${WINDOW_START}::timestamptz
        AND created_at <  ${WINDOW_END}::timestamptz
    `;
    const studio = studioRows[0]!;
    const studioSum = Number(studio.sum_estimated_cost_usd ?? 0);
    const studioKind =
      Number(studio.non_full_coverage) > 0 || Number(studio.null_cost_rows) > 0
        ? "partial"
        : "known";

    // LIVE historical: org:unspecified must NOT fabricate COMPARABLE.
    const liveEval = evaluateFinOpsReconciliation({
      studioEstimatedUsd: Number.isFinite(studioSum) ? studioSum : null,
      studioEstimationKind: studioKind,
      snapshots: [snap],
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: snap.organizationScope,
      configuredOrgId: null,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });

    const denied = evaluateFinOpsReconciliation({
      studioEstimatedUsd: studioSum,
      studioEstimationKind: studioKind,
      snapshots: [snap],
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: snap.organizationScope,
      configuredOrgId: null,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: false,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });

    // Isolated positive COMPARABLE — explicit fixture, not LIVE truth.
    const fixtureComparable = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 12.4,
      studioEstimationKind: "known",
      snapshots: [fixtureSnap("13.1000000000")],
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

    const liveHonest =
      snap.collectionProvenance === "LIVE" &&
      snap.organizationScope === "org:unspecified" &&
      snap.metrics.amount.value === "3.7127983200" &&
      liveEval.comparability !== "COMPARABLE" &&
      liveEval.disclosed === false &&
      liveEval.providerCostUsd === null &&
      (liveEval.limits.includes("ORG_IDENTITY_UNPROVEN") ||
        liveEval.comparability === "PARTIAL" ||
        liveEval.comparability === "NON_COMPARABLE");

    const rightsOk =
      denied.disclosed === false && denied.providerCostUsd === null;

    const fixtureOk =
      fixtureComparable.comparability === "COMPARABLE" &&
      fixtureComparable.disclosed === true &&
      fixtureComparable.providerCostUsd === "13.1000000000";

    const ok = liveHonest && rightsOk && fixtureOk;

    console.log(
      JSON.stringify(
        {
          status: ok ? "PASS" : "FAIL",
          live: {
            collectionId: snap.collectionId,
            provenance: snap.collectionProvenance,
            projectId: snap.dimensions.project_id,
            orgScope: snap.organizationScope,
            amount: snap.metrics.amount.value,
            currency: snap.metrics.currency.value,
            window: { start: snap.intervalStartUtc, end: snap.intervalEndUtc },
          },
          studioLedgerOracle: {
            observationCount: studio.observation_count,
            sumEstimatedCostUsd: studio.sum_estimated_cost_usd,
            nullCostRows: studio.null_cost_rows,
            nonFullCoverage: studio.non_full_coverage,
            coverageKinds: studio.coverage_kinds,
            estimationKind: studioKind,
            note: "Independent SQL SUM — NOT the historical 3.5 FIXTURE",
          },
          liveReconciliation: {
            status: liveEval.comparability,
            disclosed: liveEval.disclosed,
            limits: liveEval.limits,
            expected: "NON_COMPARABLE|PARTIAL — never fake COMPARABLE",
          },
          denied: {
            status: denied.comparability,
            disclosed: denied.disclosed,
          },
          fixtureComparablePath: {
            status: fixtureComparable.comparability,
            disclosed: fixtureComparable.disclosed,
            deltaUsd: fixtureComparable.deltaUsd,
            note: "Isolated qualification fixture — not LIVE ledger truth",
          },
        },
        null,
        2,
      ),
    );
    if (!ok) process.exitCode = 3;
  } finally {
    await sql.end({ timeout: 1 });
  }
}

main().catch((e) => {
  console.log(
    JSON.stringify({
      status: "ERROR",
      lastError: e instanceof Error ? e.message : String(e),
    }),
  );
  process.exitCode = 1;
});
