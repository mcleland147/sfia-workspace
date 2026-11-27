/**
 * Targeted Exit — Frontier envelope qualification (SUBSTITUTED transport).
 * Proves cumulative counters, no qualifyRenew, native-bound refuse, restart restore.
 * No LIVE provider contact.
 */
import { mkdirSync, writeFileSync, readFileSync, existsSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const OUT = join(process.cwd(), ".sfia-evidence/targeted-exit");
mkdirSync(OUT, { recursive: true });

const TEST_KEY = "sk-test-frontier-aaaaaaaaaaaaaaaa";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);

process.env.STUDIO_LANE = "DEV";
process.env.SFIA_QUALIFY_MODE = "1";
process.env.OPENAI_API_KEY = TEST_KEY;
process.env.SFIA_OPENAI_EXPECTED_KEY_FP = TEST_FP;

const {
  beginCampaignEnvelope,
  attachConfiguredLiveCampaignFromEnv,
  reserveHttpEmission,
  commitProviderEmission,
  markProviderEmissionUncertain,
  suspendCampaignEnvelope,
  endProcessCampaign,
  getCampaignEnvelopeMetrics,
  getActiveCampaignEnvelope,
  runWithProviderEmissionStore,
  ProviderEmissionRefusedError,
  __resetProviderEmissionFrontierForTests,
} = await import("../src/domains/conversation/provider-emission-frontier.ts");

const laneEnv = {
  STUDIO_LANE: "DEV",
  OPENAI_API_KEY: TEST_KEY,
  SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
} as unknown as NodeJS.ProcessEnv;

const report: Record<string, unknown> = {
  script: "ml5-targeted-exit-frontier-qualify",
  startedAt: new Date().toISOString(),
  cases: [] as unknown[],
  metricsDistinction: {
    studioTurns: "NOT a provider HTTP contact",
    providerHttpAttempts: "Frontier httpAttemptsCommitted",
    nativeInputCounts: "Frontier inputTokenCountAttemptsCommitted",
    reservations: "Frontier *Reserved counters",
    uncertainAfterIncident: "markProviderEmissionUncertain keeps counters",
  },
  verdict: null as string | null,
};

function caseResult(name: string, ok: boolean, detail: Record<string, unknown>) {
  (report.cases as unknown[]).push({ name, ok, ...detail });
  console.log(`[${ok ? "PASS" : "FAIL"}] ${name}`, JSON.stringify(detail).slice(0, 400));
}

const body = JSON.stringify({
  model: "gpt-5.1",
  max_output_tokens: 40,
  sfia_estimated_input_tokens: 25,
});

__resetProviderEmissionFrontierForTests();

// 1. Nominal under envelope
runWithProviderEmissionStore(() => {
  const c = beginCampaignEnvelope({
    campaignId: "te-nominal",
    maxHttpAttempts: 3,
    required: true,
  });
  const r = reserveHttpEmission({
    url: "https://api.openai.com/v1/responses",
    body,
    skipModelAdmission: true,
    env: laneEnv,
  });
  if (r.ok) commitProviderEmission(r);
  const m = getCampaignEnvelopeMetrics("te-nominal");
  caseResult("1_nominal_envelope", Boolean(r.ok && m?.httpAttemptsCommitted === 1), {
    frontierHttpCommitted: m?.httpAttemptsCommitted,
    studioTurnsWouldBe: 1,
    note: "studio turn ≠ HTTP contact; oracle is Frontier",
  });
});

// 2+3. Exhaust then next turn under QUALIFY_MODE — no renew
runWithProviderEmissionStore(() => {
  endProcessCampaign("te-exhaust");
  const c = beginCampaignEnvelope({
    campaignId: "te-exhaust",
    maxHttpAttempts: 1,
    required: true,
  });
  const r1 = reserveHttpEmission({
    url: "https://api.openai.com/v1/responses",
    body,
    skipModelAdmission: true,
    env: laneEnv,
  });
  if (r1.ok) commitProviderEmission(r1);
  const r2 = reserveHttpEmission({
    url: "https://api.openai.com/v1/responses",
    body,
    skipModelAdmission: true,
    env: laneEnv,
  });
  const suspended = getActiveCampaignEnvelope();
  caseResult("2_envelope_exhausted", Boolean(!r2.ok && suspended?.suspended), {
    reasonCode: !r2.ok ? r2.reasonCode : null,
    suspendReason: suspended?.suspendReason,
    httpCommitted: suspended?.httpAttemptsCommitted,
  });
});
runWithProviderEmissionStore(() => {
  const c = beginCampaignEnvelope({
    campaignId: "te-exhaust",
    maxHttpAttempts: 1,
    required: true,
  });
  const blocked = reserveHttpEmission({
    url: "https://api.openai.com/v1/responses",
    body,
    skipModelAdmission: true,
    env: laneEnv,
  });
  caseResult("3_qualify_mode_no_renew", Boolean(c.suspended && !blocked.ok), {
    httpCommittedPreserved: c.httpAttemptsCommitted,
    reasonCode: !blocked.ok ? blocked.reasonCode : null,
  });
});

// 4. Restart reload
{
  const statePath = join(process.cwd(), ".sfia-evidence/live-campaign-state.json");
  const metrics = getCampaignEnvelopeMetrics("te-exhaust");
  writeFileSync(
    statePath,
    JSON.stringify({
      campaignId: "te-restart",
      pid: process.pid - 99,
      createdAtMs: Date.now(),
      envelope: {
        ...(metrics as object),
        campaignId: "te-restart",
        required: true,
        maxHttpAttempts: 2,
        maxInputTokenCountAttempts: null,
        maxInputTokens: null,
        maxOutputTokens: null,
        maxInputTokensPerRequest: null,
        maxOutputTokensPerRequest: null,
        maxHostedSearches: null,
        maxDirectOpens: null,
        requireNativeInputBound: true,
        httpAttemptsReserved: 1,
        httpAttemptsCommitted: 1,
        httpAttemptsReleased: 0,
        inputTokenCountAttemptsReserved: 0,
        inputTokenCountAttemptsCommitted: 0,
        inputTokenCountAttemptsReleased: 0,
        inputTokensReserved: 25,
        inputTokensCommitted: 25,
        outputTokensReserved: 40,
        outputTokensCommitted: 40,
        hostedSearchesCommitted: 0,
        hostedSearchesMeasured: null,
        hostedSearchMeasureStatus: "NONE",
        hostedSearchMeasureLimits: [],
        directOpensCommitted: 0,
        suspended: false,
        suspendReason: null,
      },
    }),
    "utf8",
  );
  endProcessCampaign();
  __resetProviderEmissionFrontierForTests();
  // re-seed file after reset wiped it
  writeFileSync(
    statePath,
    JSON.stringify({
      campaignId: "te-restart",
      pid: process.pid - 99,
      createdAtMs: Date.now(),
      envelope: {
        campaignId: "te-restart",
        required: true,
        maxHttpAttempts: 2,
        maxInputTokenCountAttempts: null,
        maxInputTokens: null,
        maxOutputTokens: null,
        maxInputTokensPerRequest: null,
        maxOutputTokensPerRequest: null,
        maxHostedSearches: null,
        maxDirectOpens: null,
        requireNativeInputBound: true,
        httpAttemptsReserved: 1,
        httpAttemptsCommitted: 1,
        httpAttemptsReleased: 0,
        inputTokenCountAttemptsReserved: 0,
        inputTokenCountAttemptsCommitted: 0,
        inputTokenCountAttemptsReleased: 0,
        inputTokensReserved: 25,
        inputTokensCommitted: 25,
        outputTokensReserved: 40,
        outputTokensCommitted: 40,
        hostedSearchesCommitted: 0,
        hostedSearchesMeasured: null,
        hostedSearchMeasureStatus: "NONE",
        hostedSearchMeasureLimits: [],
        directOpensCommitted: 0,
        suspended: false,
        suspendReason: null,
      },
    }),
    "utf8",
  );
  runWithProviderEmissionStore(() => {
    const c = beginCampaignEnvelope({
      campaignId: "te-restart",
      maxHttpAttempts: 2,
      required: true,
    });
    caseResult("4_restart_reload_counters", c.httpAttemptsCommitted === 1, {
      httpAttemptsCommitted: c.httpAttemptsCommitted,
      inputTokensCommitted: c.inputTokensCommitted,
    });
  });
}

// 5. Concurrency/retries — sequential reserves under same envelope
runWithProviderEmissionStore(() => {
  endProcessCampaign("te-retry");
  beginCampaignEnvelope({ campaignId: "te-retry", maxHttpAttempts: 3, required: true });
  let commits = 0;
  for (let i = 0; i < 2; i++) {
    const r = reserveHttpEmission({
      url: "https://api.openai.com/v1/responses",
      body,
      skipModelAdmission: true,
      env: laneEnv,
    });
    if (r.ok) {
      commitProviderEmission(r);
      commits += 1;
    }
  }
  const m = getCampaignEnvelopeMetrics("te-retry");
  caseResult("5_retries_cumulative", commits === 2 && m?.httpAttemptsCommitted === 2, {
    commits,
    frontierHttpCommitted: m?.httpAttemptsCommitted,
  });
});

// 6. Native bound escape refused
{
  process.env.SFIA_G_LIVE_API = "1";
  process.env.SFIA_LIVE_REQUIRE_NATIVE_INPUT_BOUND = "0";
  process.env.SFIA_LIVE_CAMPAIGN_ID = "te-native-refuse";
  let refused = false;
  try {
    runWithProviderEmissionStore(() => {
      attachConfiguredLiveCampaignFromEnv();
    });
  } catch (e) {
    refused = e instanceof ProviderEmissionRefusedError;
  }
  caseResult("6_native_bound_escape_refused", refused, {});
  delete process.env.SFIA_G_LIVE_API;
  delete process.env.SFIA_LIVE_REQUIRE_NATIVE_INPUT_BOUND;
  delete process.env.SFIA_LIVE_CAMPAIGN_ID;
  endProcessCampaign();
  __resetProviderEmissionFrontierForTests();
}

// 7. Model change does not reset
runWithProviderEmissionStore(() => {
  beginCampaignEnvelope({ campaignId: "te-model", maxHttpAttempts: 5, required: true });
  const r1 = reserveHttpEmission({
    url: "https://api.openai.com/v1/responses",
    body: JSON.stringify({
      model: "gpt-5.1",
      max_output_tokens: 20,
      sfia_estimated_input_tokens: 10,
    }),
    skipModelAdmission: true,
    env: laneEnv,
  });
  if (r1.ok) commitProviderEmission(r1);
  const r2 = reserveHttpEmission({
    url: "https://api.openai.com/v1/responses",
    body: JSON.stringify({
      model: "gpt-5.2",
      max_output_tokens: 20,
      sfia_estimated_input_tokens: 10,
    }),
    skipModelAdmission: true,
    env: laneEnv,
  });
  if (r2.ok) commitProviderEmission(r2);
  const m = getCampaignEnvelopeMetrics("te-model");
  caseResult("7_model_change_preserves", m?.httpAttemptsCommitted === 2, {
    httpAttemptsCommitted: m?.httpAttemptsCommitted,
  });
});

// 8. Explicit new campaignId (authorized new envelope)
runWithProviderEmissionStore(() => {
  const a = beginCampaignEnvelope({ campaignId: "te-camp-a", maxHttpAttempts: 2, required: true });
  const r = reserveHttpEmission({
    url: "https://api.openai.com/v1/responses",
    body,
    skipModelAdmission: true,
    env: laneEnv,
  });
  if (r.ok) commitProviderEmission(r);
  const b = beginCampaignEnvelope({ campaignId: "te-camp-b", maxHttpAttempts: 2, required: true });
  caseResult("8_explicit_new_campaign", a.httpAttemptsCommitted === 1 && b.httpAttemptsCommitted === 0, {
    campA: a.httpAttemptsCommitted,
    campB: b.httpAttemptsCommitted,
  });
});

// 9. D3 checkpoints preserved metaphor — suspended state file retained (no wipe on reattach)
runWithProviderEmissionStore(() => {
  beginCampaignEnvelope({ campaignId: "te-d3", maxHttpAttempts: 1, required: true });
  suspendCampaignEnvelope("D3_CHECKPOINT_PRESERVE");
  const again = beginCampaignEnvelope({ campaignId: "te-d3", maxHttpAttempts: 1, required: true });
  caseResult("9_d3_suspend_preserved", again.suspended && again.suspendReason === "D3_CHECKPOINT_PRESERVE", {
    suspendReason: again.suspendReason,
  });
});

// 10. A3 UNKNOWN without zero
runWithProviderEmissionStore(() => {
  endProcessCampaign("te-a3");
  beginCampaignEnvelope({ campaignId: "te-a3", maxHttpAttempts: 3, required: true });
  const r = reserveHttpEmission({
    url: "https://api.openai.com/v1/responses",
    body,
    skipModelAdmission: true,
    env: laneEnv,
  });
  if (r.ok) {
    markProviderEmissionUncertain({ attemptId: r.attemptId });
  }
  const m = getCampaignEnvelopeMetrics("te-a3");
  caseResult("10_a3_uncertain_no_zero", m?.httpAttemptsCommitted === 1, {
    httpAttemptsCommitted: m?.httpAttemptsCommitted,
    httpAttemptsReserved: m?.httpAttemptsReserved,
  });
});

const cases = report.cases as Array<{ ok: boolean }>;
const allOk = cases.every((c) => c.ok);
report.verdict = allOk
  ? "FRONTIER_CUMULATIVE_ENVELOPE_PROVEN_SUBSTITUTED"
  : "FRONTIER_QUALIFY_GAPS";
report.finishedAt = new Date().toISOString();
writeFileSync(join(OUT, "frontier-qualify-report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ verdict: report.verdict, passed: cases.filter((c) => c.ok).length, total: cases.length }));
endProcessCampaign();
__resetProviderEmissionFrontierForTests();
process.exit(allOk ? 0 : 1);
