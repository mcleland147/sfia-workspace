/**
 * FinOps LIVE qualification against DEV PG (not vitest e2e DB).
 * No Admin calls. No secrets printed.
 *
 *   npx tsx scripts/finops-live-qualify-check.mts
 */
import postgres from "postgres";
import { evaluateFinOpsReconciliation } from "../src/domains/finops/finops-reconciliation";
import type { AdminUsageSnapshot } from "../src/domains/finops/provider-admin-usage-collector";

const LIVE_PROJECT = "proj_HVZL4x3J77GXEVtq9EqRokpR";
const WINDOW_START = "2026-11-26T00:00:00.000Z";
const WINDOW_END = "2026-11-27T00:00:00.000Z";
const COLLECTION_COSTS = "acol_mwyd1ifk_552295cf";

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

    const orgId = snap.organizationScope.startsWith("org:")
      ? snap.organizationScope.slice(4)
      : snap.organizationScope;

    const comparable = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: [snap],
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: snap.organizationScope,
      configuredOrgId: orgId,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });

    const denied = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: [snap],
      windowStartUtc: WINDOW_START,
      windowEndUtc: WINDOW_END,
      organizationScope: snap.organizationScope,
      configuredOrgId: orgId,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: false,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });

    const wrongPeriod = evaluateFinOpsReconciliation({
      studioEstimatedUsd: 3.5,
      studioEstimationKind: "known",
      snapshots: [snap],
      windowStartUtc: "2026-11-01T00:00:00.000Z",
      windowEndUtc: "2026-11-02T00:00:00.000Z",
      organizationScope: snap.organizationScope,
      configuredOrgId: orgId,
      configuredProjectId: LIVE_PROJECT,
      configuredApiKeyId: null,
      pilotAuthorized: true,
      freshnessStatus: "READY",
      freshnessSnapshotCount: 1,
    });

    const pilots = await sql`
      SELECT DISTINCT owner_pilot_id FROM projects LIMIT 5
    `;

    const ok =
      snap.collectionProvenance === "LIVE" &&
      snap.dimensions.project_id === LIVE_PROJECT &&
      comparable.comparability === "COMPARABLE" &&
      comparable.disclosed === true &&
      comparable.providerCostUsd === "3.7127983200" &&
      denied.disclosed === false &&
      denied.providerCostUsd === null &&
      wrongPeriod.comparability !== "COMPARABLE";

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
          comparable: {
            status: comparable.comparability,
            disclosed: comparable.disclosed,
            deltaUsd: comparable.deltaUsd,
          },
          denied: {
            status: denied.comparability,
            disclosed: denied.disclosed,
          },
          wrongPeriod: { status: wrongPeriod.comparability },
          pilotsSampleCount: pilots.length,
          note: "org:unspecified — set SFIA_OPENAI_ORG_SCOPE on next LIVE collect for stronger org identity",
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
