/**
 * ML2 CP1 — Frontier concurrency (multi-process) + real restart proofs.
 * SUBSTITUTED transport only — no LIVE provider contact.
 */
import { spawnSync, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import {
  mkdirSync,
  writeFileSync,
  existsSync,
  readFileSync,
  unlinkSync,
} from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const OUT = join(process.cwd(), ".sfia-evidence/document-intelligence");
mkdirSync(OUT, { recursive: true });
mkdirSync(join(process.cwd(), ".sfia-evidence"), { recursive: true });

const TEST_KEY = "sk-test-frontier-ml2-bbbbbbbbbbbbbbbb";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);
process.env.STUDIO_LANE = "DEV";
process.env.SFIA_QUALIFY_MODE = "1";
process.env.OPENAI_API_KEY = TEST_KEY;
process.env.SFIA_OPENAI_EXPECTED_KEY_FP = TEST_FP;

const frontierUrl = pathToFileURL(
  join(process.cwd(), "src/domains/conversation/provider-emission-frontier.ts"),
).href;

const frontier = await import("../src/domains/conversation/provider-emission-frontier.ts");
const {
  beginCampaignEnvelope,
  reserveHttpEmission,
  commitProviderEmission,
  createFrontierAwareFetch,
  runWithProviderEmissionStoreAsync,
  getCampaignEnvelopeMetrics,
  endProcessCampaign,
  __resetProviderEmissionFrontierForTests,
  ProviderEmissionRefusedError,
} = frontier;

const laneEnv = {
  STUDIO_LANE: "DEV",
  OPENAI_API_KEY: TEST_KEY,
  SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
} as unknown as NodeJS.ProcessEnv;

const report: Record<string, unknown> = {
  script: "ml2-frontier-preflight-concurrency-restart",
  startedAt: new Date().toISOString(),
  cases: [] as unknown[],
  verdict: null as string | null,
};

function push(name: string, ok: boolean, detail: Record<string, unknown>) {
  (report.cases as unknown[]).push({ name, ok, ...detail });
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}`);
}

function runNodeTs(code: string, envExtra: Record<string, string> = {}) {
  const file = join(OUT, `_child_${createHash("sha1").update(code).digest("hex").slice(0, 8)}.mts`);
  writeFileSync(file, code);
  return spawnSync(
    process.execPath,
    ["--import", "tsx", file],
    {
      cwd: process.cwd(),
      env: { ...process.env, ...envExtra },
      encoding: "utf8",
    },
  );
}

__resetProviderEmissionFrontierForTests();

// Seed campaign state for multi-process race (decisions family max 2, global 3)
const seed = runNodeTs(`
process.env.STUDIO_LANE="DEV";
process.env.SFIA_QUALIFY_MODE="1";
process.env.OPENAI_API_KEY=${JSON.stringify(TEST_KEY)};
process.env.SFIA_OPENAI_EXPECTED_KEY_FP=${JSON.stringify(TEST_FP)};
const f = await import(${JSON.stringify(frontierUrl)});
f.__resetProviderEmissionFrontierForTests();
await f.runWithProviderEmissionStoreAsync(async () => {
  f.endProcessCampaign("ml2-mp-conc");
  f.beginCampaignEnvelope({
    campaignId: "ml2-mp-conc",
    maxHttpAttempts: 3,
    required: true,
    familyHttpLimits: { decisions: 2 },
  });
});
`);
push("seed_multiprocess_campaign", seed.status === 0, {
  status: seed.status,
  stderr: (seed.stderr || "").slice(0, 300),
});

// Four parallel child processes racing the same campaignId
const workerCode = `
process.env.STUDIO_LANE="DEV";
process.env.SFIA_QUALIFY_MODE="1";
process.env.OPENAI_API_KEY=${JSON.stringify(TEST_KEY)};
process.env.SFIA_OPENAI_EXPECTED_KEY_FP=${JSON.stringify(TEST_FP)};
const f = await import(${JSON.stringify(frontierUrl)});
const out = process.env.SFIA_ML2_WORKER_OUT;
await f.runWithProviderEmissionStoreAsync(async () => {
  const c = f.beginCampaignEnvelope({
    campaignId: "ml2-mp-conc",
    maxHttpAttempts: 3,
    required: true,
    familyHttpLimits: { decisions: 2 },
  });
  const r = f.reserveHttpEmission({
    kind: "http.decisions",
    url: "https://api.openai.com/v1/decisions",
    body: JSON.stringify({ model: "gpt-6-luna", sfia_estimated_input_tokens: 12 }),
    skipModelAdmission: true,
    env: {
      STUDIO_LANE: "DEV",
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      SFIA_OPENAI_EXPECTED_KEY_FP: process.env.SFIA_OPENAI_EXPECTED_KEY_FP,
    },
  });
  if (r.ok) f.commitProviderEmission(r);
  const { writeFileSync } = await import("node:fs");
  writeFileSync(out, JSON.stringify({
    ok: r.ok,
    reasonCode: r.ok ? null : r.reasonCode,
    committed: f.getCampaignEnvelopeMetrics("ml2-mp-conc")?.httpAttemptsCommitted,
    family: f.getCampaignEnvelopeMetrics("ml2-mp-conc")?.familyHttp,
    pid: process.pid,
  }));
});
`;

const workerResults = await Promise.all(
  [0, 1, 2, 3].map(
    (i) =>
      new Promise<{ status: number | null; out: string; body: unknown }>((resolve) => {
        const outFile = join(OUT, `mp-worker-${i}.json`);
        if (existsSync(outFile)) unlinkSync(outFile);
        const file = join(OUT, `_mp_worker_${i}.mts`);
        writeFileSync(file, workerCode);
        const child = spawn(process.execPath, ["--import", "tsx", file], {
          cwd: process.cwd(),
          env: { ...process.env, SFIA_ML2_WORKER_OUT: outFile },
        });
        child.on("close", (status) => {
          let body: unknown = null;
          if (existsSync(outFile)) {
            try {
              body = JSON.parse(readFileSync(outFile, "utf8"));
            } catch {
              body = null;
            }
          }
          resolve({ status, out: outFile, body });
        });
      }),
  ),
);

const okWorkers = workerResults.filter((w) => (w.body as { ok?: boolean } | null)?.ok === true);
const refuseWorkers = workerResults.filter((w) => (w.body as { ok?: boolean } | null)?.ok === false);
push("multiprocess_concurrent_family_cap", Boolean(okWorkers.length <= 2 && okWorkers.length >= 1), {
  okWorkers: okWorkers.length,
  refuseWorkers: refuseWorkers.length,
  bodies: workerResults.map((w) => w.body),
  note: "True multi-process race on shared campaign state file; family decisions max=2",
});

// Refuse before contact when exhausted (single process, substituted fetch)
await runWithProviderEmissionStoreAsync(async () => {
  endProcessCampaign("ml2-refuse-before");
  __resetProviderEmissionFrontierForTests();
  beginCampaignEnvelope({
    campaignId: "ml2-refuse-before",
    maxHttpAttempts: 1,
    required: true,
    familyHttpLimits: { embeddings: 1 },
  });
  let hits = 0;
  const fake = (async () => {
    hits += 1;
    return new Response(JSON.stringify({ data: [] }), { status: 200 });
  }) as typeof fetch;
  const gated = createFrontierAwareFetch(fake, { requireCampaign: true });
  const body = JSON.stringify({
    model: "text-embedding-3-small",
    input: ["a"],
    sfia_estimated_input_tokens: 5,
  });
  await gated("https://api.openai.com/v1/embeddings", { method: "POST", body });
  let refused = false;
  try {
    await gated("https://api.openai.com/v1/embeddings", { method: "POST", body });
  } catch (e) {
    refused = e instanceof ProviderEmissionRefusedError;
  }
  push("refuse_before_contact_when_exhausted", Boolean(refused && hits === 1), {
    hits,
    refused,
  });
});

// Real child-process restart restore
const childRestart = runNodeTs(`
process.env.STUDIO_LANE="DEV";
process.env.SFIA_QUALIFY_MODE="1";
process.env.OPENAI_API_KEY=${JSON.stringify(TEST_KEY)};
process.env.SFIA_OPENAI_EXPECTED_KEY_FP=${JSON.stringify(TEST_FP)};
const f = await import(${JSON.stringify(frontierUrl)});
f.__resetProviderEmissionFrontierForTests();
await f.runWithProviderEmissionStoreAsync(async () => {
  f.endProcessCampaign("ml2-restart");
  f.beginCampaignEnvelope({
    campaignId: "ml2-restart",
    maxHttpAttempts: 5,
    required: true,
    maxInputTokens: 1000,
    requireNativeInputBound: false,
    familyHttpLimits: { decisions: 4 },
  });
  const r = f.reserveHttpEmission({
    kind: "http.decisions",
    url: "https://api.openai.com/v1/decisions",
    body: JSON.stringify({ model: "gpt-6-luna", sfia_estimated_input_tokens: 40 }),
    skipModelAdmission: true,
    env: {
      STUDIO_LANE: "DEV",
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      SFIA_OPENAI_EXPECTED_KEY_FP: process.env.SFIA_OPENAI_EXPECTED_KEY_FP,
    },
  });
  if (r.ok) f.commitProviderEmission(r);
  const { writeFileSync } = await import("node:fs");
  const { join } = await import("node:path");
  writeFileSync(join(process.cwd(), ".sfia-evidence/document-intelligence/restart-child-metrics.json"), JSON.stringify(f.getCampaignEnvelopeMetrics("ml2-restart")));
});
`);

// Preserve child state file across test reset (reset deletes live-campaign-state.json).
const statePath = join(process.cwd(), ".sfia-evidence", "live-campaign-state.json");
let preservedState: string | null = null;
if (existsSync(statePath)) {
  preservedState = readFileSync(statePath, "utf8");
}
__resetProviderEmissionFrontierForTests();
if (preservedState) {
  const parsed = JSON.parse(preservedState) as { pid?: number; campaignId?: string };
  // Force "other process" pid so restoreCampaignEnvelopeAfterRestart accepts it.
  parsed.pid = process.pid === 1 ? 2 : process.pid - 1;
  writeFileSync(statePath, JSON.stringify(parsed));
}
await runWithProviderEmissionStoreAsync(async () => {
  const c = beginCampaignEnvelope({
    campaignId: "ml2-restart",
    maxHttpAttempts: 5,
    required: true,
    familyHttpLimits: { decisions: 4 },
  });
  const restoredAtBegin = c.httpAttemptsCommitted;
  const r = reserveHttpEmission({
    kind: "http.decisions",
    url: "https://api.openai.com/v1/decisions",
    body: JSON.stringify({ model: "gpt-6-luna", sfia_estimated_input_tokens: 10 }),
    skipModelAdmission: true,
    env: laneEnv,
  });
  if (r.ok) commitProviderEmission(r);
  const m = getCampaignEnvelopeMetrics("ml2-restart");
  push("process_restart_restores_cumulative", Boolean(
    childRestart.status === 0 &&
      restoredAtBegin === 1 &&
      r.ok &&
      (m?.httpAttemptsCommitted as number) === 2,
  ), {
    childStatus: childRestart.status,
    childStderr: (childRestart.stderr || "").slice(0, 400),
    preservedState: Boolean(preservedState),
    restoredCommittedAtBegin: restoredAtBegin,
    reserveOk: r.ok,
    afterSecondCommit: m?.httpAttemptsCommitted,
    family: m?.familyHttp,
  });
  endProcessCampaign("ml2-restart");
});

const failed = (report.cases as { ok: boolean }[]).filter((c) => !c.ok);
report.verdict =
  failed.length === 0
    ? "LIVE PREFLIGHT FRONTIER CONCURRENCY_RESTART PASSED — SUBSTITUTED"
    : "LIVE PREFLIGHT FRONTIER CONCURRENCY_RESTART FAILED";
report.finishedAt = new Date().toISOString();
writeFileSync(
  join(OUT, "frontier-preflight-concurrency-restart.json"),
  JSON.stringify(report, null, 2) + "\n",
);
console.log(JSON.stringify({ verdict: report.verdict, failed: failed.length }, null, 2));
process.exit(failed.length === 0 ? 0 : 1);
