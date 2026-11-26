/**
 * Isolated Admin Usage/Costs collector entrypoint.
 *
 * Run ONLY as a separate process:
 *   SFIA_ADMIN_COLLECTOR_PROCESS=1 STUDIO_LANE=DEV \
 *   OPENAI_ADMIN_KEY=… SFIA_ADMIN_USAGE_LIVE=1 \
 *   npx tsx scripts/finops-admin-collect.mts --path /organization/costs --start-time <unix>
 *
 * Without SFIA_ADMIN_USAGE_LIVE=1 the script refuses LIVE HTTP (transport still constructible for dry-run with --dry-substituted).
 * Never import this from Next.js / Nora routes.
 */

import {
  resolveIsolatedAdminCollectorConfig,
  runAdminCollection,
} from "../src/domains/finops/provider-admin-usage-collector";
import {
  createAdminHttpTransport,
  isAdminLiveAuthorized,
  loadIsolatedAdminApiKey,
} from "../src/domains/finops/provider-admin-http-transport";

function arg(name: string): string | null {
  const i = process.argv.indexOf(name);
  if (i < 0 || i + 1 >= process.argv.length) return null;
  return process.argv[i + 1];
}

async function main(): Promise<void> {
  const { key, limits } = loadIsolatedAdminApiKey(process.env);
  if (!key) {
    console.log(
      JSON.stringify({
        status: "BLOCKED_NO_SECRET",
        limits,
        note: "Provision OPENAI_ADMIN_KEY in isolated env only — never chat/Git",
      }),
    );
    process.exitCode = 2;
    return;
  }

  const path = arg("--path") ?? "/organization/costs";
  const start = arg("--start-time");
  if (!start) {
    console.log(JSON.stringify({ status: "ERROR", lastError: "MISSING_START_TIME" }));
    process.exitCode = 2;
    return;
  }

  const live = isAdminLiveAuthorized(process.env);
  const dry = process.argv.includes("--dry-substituted");
  if (!live && !dry) {
    console.log(
      JSON.stringify({
        status: "BLOCKED_NO_LIVE_GO",
        limits: ["SFIA_ADMIN_USAGE_LIVE_REQUIRED", "OR_PASS_DRY_SUBSTITUTED"],
      }),
    );
    process.exitCode = 2;
    return;
  }

  const transport = dry
    ? async () => ({
        status: 200,
        json: { object: "page", data: [], has_more: false, next_page: null },
      })
    : createAdminHttpTransport();

  const result = await runAdminCollection({
    config: resolveIsolatedAdminCollectorConfig({
      adminApiKey: key,
      liveAuthorized: live || dry,
      transport,
    }),
    path,
    query: {
      start_time: start,
      bucket_width: arg("--bucket-width") ?? "1d",
      ...(arg("--project-id") ? { project_ids: arg("--project-id")! } : {}),
    },
  });

  // Never print the key. Snapshots may include project/api_key ids (non-secret).
  console.log(
    JSON.stringify({
      status: result.status,
      collectionId: result.collectionId,
      pagesFetched: result.pagesFetched,
      snapshotCount: result.snapshots.length,
      limits: result.limits,
      lastError: result.lastError,
    }),
  );
  if (result.status !== "READY" && result.status !== "PARTIAL") {
    process.exitCode = 3;
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
