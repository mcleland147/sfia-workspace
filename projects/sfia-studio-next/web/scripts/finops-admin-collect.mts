/**
 * Isolated Admin Usage/Costs collector entrypoint.
 *
 * Run ONLY as a separate process:
 *   SFIA_ADMIN_COLLECTOR_PROCESS=1 STUDIO_LANE=DEV \
 *   npx tsx scripts/finops-admin-collect.mts --path /organization/costs --start-time <unix> --dry-substituted
 *
 * LIVE (requires separate G-ADMIN-LIVE + secret provisioned outside shell history):
 *   SFIA_ADMIN_USAGE_LIVE=1 + OPENAI_ADMIN_KEY in collector env only.
 *
 * Never import this from Next.js / Nora routes.
 * Never pass the Admin key on the CLI argv.
 */

import {
  markSubstitutedAdminTransport,
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
  if ((process.env.SFIA_ADMIN_COLLECTOR_PROCESS ?? "").trim() !== "1") {
    console.log(
      JSON.stringify({
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
    console.log(JSON.stringify({ status: "ERROR", lastError: "MISSING_START_TIME" }));
    process.exitCode = 2;
    return;
  }

  const live = isAdminLiveAuthorized(process.env);
  const dry = process.argv.includes("--dry-substituted");
  const persist = !process.argv.includes("--no-persist");
  const end = arg("--end-time");
  const projectId = arg("--project-id");

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

  if (dry) {
    const transport = markSubstitutedAdminTransport(async () => ({
      status: 200,
      json: { object: "page", data: [], has_more: false, next_page: null },
    }));
    const result = await runAdminCollection({
      config: resolveIsolatedAdminCollectorConfig({
        adminApiKey: null,
        mode: "TEST_SUBSTITUTED",
        liveAuthorized: false,
        transport,
      }),
      path,
      query: {
        start_time: start,
        ...(end ? { end_time: end } : {}),
        bucket_width: arg("--bucket-width") ?? "1d",
        ...(projectId ? { project_ids: projectId } : {}),
      },
      persistToPg: persist,
    });
    console.log(
      JSON.stringify({
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
      JSON.stringify({
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
      JSON.stringify({
        status: "BLOCKED_NO_LIVE_GO",
        lastError: e instanceof Error ? e.message : String(e),
      }),
    );
    process.exitCode = 2;
    return;
  }

  if (!end) {
    console.log(
      JSON.stringify({
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
      JSON.stringify({
        status: "ERROR",
        lastError: "MISSING_PROJECT_ID",
        limits: ["LIVE_ENVELOPE_REQUIRES_PROJECT_FILTER"],
      }),
    );
    process.exitCode = 2;
    return;
  }

  const result = await runAdminCollection({
    config: resolveIsolatedAdminCollectorConfig({
      adminApiKey: key,
      mode: "LIVE",
      liveAuthorized: true,
      transport,
    }),
    path,
    query: {
      start_time: start,
      end_time: end,
      bucket_width: arg("--bucket-width") ?? "1d",
      project_ids: projectId,
    },
    persistToPg: persist,
    requireEndTime: true,
  });

  console.log(
    JSON.stringify({
      status: result.status,
      collectionId: result.collectionId,
      pagesFetched: result.pagesFetched,
      snapshotCount: result.snapshots.length,
      limits: result.limits,
      lastError: result.lastError,
      mode: "LIVE",
      persisted: persist,
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
