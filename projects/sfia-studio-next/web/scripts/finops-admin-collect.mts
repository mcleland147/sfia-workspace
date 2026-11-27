/**
 * Isolated Admin Usage/Costs collector entrypoint.
 *
 * Run ONLY as a separate operator process (never from Nora / agent chat):
 *
 * TEST:
 *   SFIA_ADMIN_COLLECTOR_PROCESS=1 STUDIO_LANE=DEV \
 *   npx tsx scripts/finops-admin-collect.mts --path /organization/costs \
 *     --start-time <unix> --dry-substituted
 *
 * LIVE (after Morris provisioning — secret never on argv):
 *   SFIA_ADMIN_COLLECTOR_PROCESS=1 STUDIO_LANE=DEV SFIA_ADMIN_USAGE_LIVE=1 \
 *   OPENAI_ADMIN_KEY=… SFIA_ADMIN_COLLECTOR_DATABASE_URL=postgresql://sfia_admin_collector_ops:…@127.0.0.1:5433/sfia_next_dev \
 *   npx tsx scripts/finops-admin-collect.mts \
 *     --path /organization/costs \
 *     --start-time <unix> --end-time <unix> --project-id proj_… \
 *     --max-pages 3
 *
 * Never import this from Next.js / Nora routes.
 * Never pass the Admin key on the CLI argv.
 */

import {
  ADMIN_LIVE_CAMPAIGN_PATHS,
  buildAdminCollectionQuery,
  markSubstitutedAdminTransport,
  resolveIsolatedAdminCollectorConfig,
  runAdminCollection,
} from "../src/domains/finops/provider-admin-usage-collector";
import {
  createAdminHttpTransport,
  isAdminLiveAuthorized,
  loadIsolatedAdminApiKey,
} from "../src/domains/finops/provider-admin-http-transport";
import {
  proveAdminCollectorDbIdentity,
  resolveAdminCollectorDatabaseUrl,
} from "../src/domains/finops/admin-collector-db";

function arg(name: string): string | null {
  const i = process.argv.indexOf(name);
  if (i < 0 || i + 1 >= process.argv.length) return null;
  return process.argv[i + 1];
}

function safeJson(obj: unknown): string {
  return JSON.stringify(obj);
}

async function main(): Promise<void> {
  if ((process.env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() !== "1") {
    console.log(
      safeJson({
        status: "BLOCKED_NO_ISOLATION",
        limits: ["SFIA_ADMIN_COLLECTOR_PROCESS_REQUIRED"],
      }),
    );
    process.exitCode = 2;
    return;
  }

  const path = arg("--path") ?? "/organization/costs";
  const start = arg("--start-time");
  if (!start) {
    console.log(safeJson({ status: "ERROR", lastError: "MISSING_START_TIME" }));
    process.exitCode = 2;
    return;
  }

  const live = isAdminLiveAuthorized(process.env);
  const dry = process.argv.includes("--dry-substituted");
  const persist = !process.argv.includes("--no-persist");
  const end = arg("--end-time");
  const projectId = arg("--project-id");
  const maxPagesRaw = arg("--max-pages");
  const maxPages = maxPagesRaw ? Number(maxPagesRaw) : live ? 3 : 10;

  if (!live && !dry) {
    console.log(
      safeJson({
        status: "BLOCKED_NO_LIVE_GO",
        limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED", "OR_PASS_DRY_SUBSTITUTED"],
      }),
    );
    process.exitCode = 2;
    return;
  }

  if (live && !(ADMIN_LIVE_CAMPAIGN_PATHS as readonly string[]).includes(path)) {
    console.log(
      safeJson({
        status: "ERROR",
        lastError: `LIVE_PATH_NOT_IN_CAMPAIGN:${path}`,
        allowed: ADMIN_LIVE_CAMPAIGN_PATHS,
      }),
    );
    process.exitCode = 2;
    return;
  }

  if (persist && live) {
    const dsn = resolveAdminCollectorDatabaseUrl(process.env);
    if (!dsn.url) {
      console.log(
        safeJson({
          status: "BLOCKED_COLLECTOR_DB",
          limits: dsn.limits,
        }),
      );
      process.exitCode = 2;
      return;
    }
    try {
      const id = await proveAdminCollectorDbIdentity(process.env);
      // Non-secret identity proof only.
      console.log(
        safeJson({
          event: "collector_db_identity",
          currentUser: id.currentUser,
          sessionUser: id.sessionUser,
        }),
      );
    } catch (e) {
      console.log(
        safeJson({
          status: "BLOCKED_COLLECTOR_IDENTITY",
          lastError: e instanceof Error ? e.message : String(e),
        }),
      );
      process.exitCode = 2;
      return;
    }
  }

  if (dry) {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: { object: "page", data: [], has_more: false, next_page: null },
    }));
    const query = buildAdminCollectionQuery({
      path,
      startTimeUnix: start,
      endTimeUnix: end,
      projectId,
      bucketWidth: arg("--bucket-width"),
      live: false,
    });
    const result = await runAdminCollection({
      config: resolveIsolatedAdminCollectorConfig({
        adminApiKey: null,
        mode: "TEST_SUBSTITUTED",
        liveAuthorized: false,
        transport,
      }),
      path,
      query,
      maxPages,
      persistToPg: persist,
    });
    console.log(
      safeJson({
        status: result.status,
        collectionId: result.collectionId,
        pagesFetched: result.pagesFetched,
        snapshotCount: result.snapshots.length,
        limits: result.limits,
        lastError: result.lastError,
        mode: "TEST_SUBSTITUTED",
        persisted: persist,
      }),
    );
    return;
  }

  // LIVE path — key from isolated env only; never argv.
  const { key, limits } = loadIsolatedAdminApiKey(process.env);
  if (!key) {
    console.log(
      safeJson({
        status: "BLOCKED_NO_SECRET",
        limits,
        note: "Provision OPENAI_ADMIN_KEY in isolated env only — never chat/Git/CLI argv",
      }),
    );
    process.exitCode = 2;
    return;
  }

  let transport;
  try {
    transport = createAdminHttpTransport({ liveAuthorized: true });
  } catch (e) {
    console.log(
      safeJson({
        status: "BLOCKED_NO_LIVE_GO",
        lastError: e instanceof Error ? e.message : String(e),
      }),
    );
    process.exitCode = 2;
    return;
  }

  if (!end) {
    console.log(
      safeJson({
        status: "ERROR",
        lastError: "MISSING_END_TIME",
        limits: ["LIVE_ENVELOPE_REQUIRES_END_TIME"],
      }),
    );
    process.exitCode = 2;
    return;
  }
  if (!projectId) {
    console.log(
      safeJson({
        status: "ERROR",
        lastError: "MISSING_PROJECT_ID",
        limits: ["LIVE_ENVELOPE_REQUIRES_PROJECT_FILTER"],
      }),
    );
    process.exitCode = 2;
    return;
  }

  const query = buildAdminCollectionQuery({
    path,
    startTimeUnix: start,
    endTimeUnix: end,
    projectId,
    bucketWidth: arg("--bucket-width"),
    groupBy: arg("--group-by") ?? "project_id",
    live: true,
  });

  const result = await runAdminCollection({
    config: resolveIsolatedAdminCollectorConfig({
      adminApiKey: key,
      mode: "LIVE",
      liveAuthorized: true,
      transport,
    }),
    path,
    query,
    maxPages: Math.min(3, maxPages),
    persistToPg: persist,
    requireEndTime: true,
  });

  console.log(
    safeJson({
      status: result.status,
      collectionId: result.collectionId,
      pagesFetched: result.pagesFetched,
      snapshotCount: result.snapshots.length,
      limits: result.limits,
      lastError: result.lastError,
      mode: "LIVE",
      persisted: persist,
      path,
      // Non-secret envelope echo for Morris audit
      envelope: {
        start_time: start,
        end_time: end,
        project_ids: projectId,
        group_by: query.group_by ?? null,
        bucket_width: query.bucket_width ?? null,
        maxPages: Math.min(3, maxPages),
      },
    }),
  );
  if (result.status !== "READY" && result.status !== "PARTIAL") {
    process.exitCode = 3;
  }
}

main().catch((e) => {
  console.log(
    safeJson({
      status: "ERROR",
      lastError: e instanceof Error ? e.message : String(e),
    }),
  );
  process.exitCode = 1;
});
