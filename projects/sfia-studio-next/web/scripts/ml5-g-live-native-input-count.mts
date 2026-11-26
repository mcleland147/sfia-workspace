/**
 * G-LIVE-API targeted — native responses.inputTokens.count vs usage.
 * WEB OFF. Does NOT re-run Chantiers360 investigation.
 */
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = `/tmp/sfia-ml5-g-live-native-count-${new Date()
  .toISOString()
  .slice(0, 10)
  .replace(/-/g, "")}`;
mkdirSync(OUT, { recursive: true });
const save = (n, v) =>
  writeFileSync(join(OUT, `${n}.json`), JSON.stringify(v, null, 2));

const criteria = [];
const record = (id, status, detail) => {
  criteria.push({ id, status, detail });
  console.log(`[${status}] ${id} — ${detail}`);
};

function loadEnvLocal() {
  const p = join(process.cwd(), ".env.local");
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    )
      v = v.slice(1, -1);
    if (!(k in process.env) || process.env[k] === "") process.env[k] = v;
  }
}

async function main() {
  loadEnvLocal();
  process.env.STUDIO_LANE = "DEV";
  process.env.SFIA_WEB_SEARCH_LIVE = "0";
  process.env.SFIA_WEB_SEARCH_ENABLED = "0";
  process.env.SFIA_G_LIVE_API = "1";
  process.env.SFIA_G_WEB_PUBLIC = "0";
  process.env.SFIA_LIVE_CAMPAIGN_ID = "g-live-native-count-20261126";
  process.env.SFIA_LIVE_MAX_HTTP_ATTEMPTS = "4";
  process.env.SFIA_LIVE_MAX_INPUT_TOKEN_COUNT_ATTEMPTS = "8";
  process.env.SFIA_LIVE_MAX_INPUT_TOKENS = "600000";
  process.env.SFIA_LIVE_MAX_OUTPUT_TOKENS = "60000";
  process.env.SFIA_LIVE_MAX_INPUT_TOKENS_PER_REQ = "100000";
  process.env.SFIA_LIVE_MAX_OUTPUT_TOKENS_PER_REQ = "512";

  const key = (process.env.OPENAI_API_KEY || "").trim();
  if (!key) throw new Error("OPENAI_API_KEY missing");
  const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
  const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
  if (expected && expected !== fp) {
    throw new Error(`KEY_FP mismatch expected=${expected} actual=${fp}`);
  }

  const {
    runWithProviderEmissionStoreAsync,
    attachConfiguredLiveCampaignFromEnv,
    createFrontierAwareFetch,
    enableHttpMetaCaptureForTests,
    ensureFrontierOpenAIClientInstalled,
    getActiveCampaignEnvelope,
    getHttpBodiesObservedForTests,
    endProcessCampaign,
    endRequiredCampaignLatch,
  } = await import("@/domains/conversation/provider-emission-frontier");

  const report = {
    gate: "G-LIVE-API",
    focus: "native_input_tokens_count",
    startedAt: new Date().toISOString(),
    out: OUT,
    criteria,
  };

  await runWithProviderEmissionStoreAsync(async () => {
    const campaign = attachConfiguredLiveCampaignFromEnv();
    enableHttpMetaCaptureForTests();
    const baseFetch = globalThis.fetch.bind(globalThis);
    const transportLog = [];
    const loggingFetch = (async (input, init) => {
      const url = String(input);
      transportLog.push({
        url,
        method: (init?.method || "POST").toUpperCase(),
        isCount: url.includes("/input_tokens"),
        isResponses: /\/responses\/?(\?|$)/.test(url) && !url.includes("input_tokens"),
      });
      return baseFetch(input, init);
    });
    await ensureFrontierOpenAIClientInstalled({
      forceReinstall: true,
      fetch: createFrontierAwareFetch(loggingFetch),
      maxRetries: 1,
      requireCampaign: true,
    });

    const OpenAI = (await import("openai")).default;
    const { setDefaultOpenAIClient } = await import("@openai/agents");
    const client = new OpenAI({
      apiKey: key,
      fetch: createFrontierAwareFetch(loggingFetch),
      maxRetries: 1,
    });
    setDefaultOpenAIClient(client);

    const body = {
      model: "gpt-6.1-terra",
      instructions: "Reply with exactly: NATIVE_COUNT_OK",
      input: [
        {
          type: "message",
          role: "user",
          content: "Qualification ping — reply NATIVE_COUNT_OK only.",
        },
      ],
      max_output_tokens: 32,
    };

    // Direct native count via SDK
    const countPayload = {
      model: body.model,
      instructions: body.instructions,
      input: body.input,
    };
    const countRes = await client.responses.inputTokens.count(countPayload);
    save("01-native-count", countRes);
    const counted = Number(countRes?.input_tokens ?? 0);
    record(
      "A-NATIVE-COUNT-HTTP",
      counted > 0 && countRes?.object === "response.input_tokens" ? "PASS" : "FAIL",
      `input_tokens=${counted} object=${countRes?.object}`,
    );

    // Responses create through frontier (will count again if fingerprint path requires)
    const createRes = await client.responses.create({
      ...body,
      reasoning: { effort: "medium" },
    });
    save("02-responses-create", {
      id: createRes.id,
      model: createRes.model,
      usage: createRes.usage,
      status: createRes.status,
      output_text:
        createRes.output_text ??
        JSON.stringify(createRes.output ?? []).slice(0, 500),
    });
    const usedIn = Number(createRes.usage?.input_tokens ?? 0);
    const usedOut = Number(createRes.usage?.output_tokens ?? 0);
    record(
      "A-RESPONSES-USAGE",
      usedIn > 0 ? "PASS" : "FAIL",
      `usage.in=${usedIn} out=${usedOut} model=${createRes.model}`,
    );

    // Compare count vs usage — allow delta explanation
    const delta = usedIn - counted;
    const ratio = counted > 0 ? usedIn / counted : null;
    const countCompare =
      counted > 0 && usedIn > 0 && Math.abs(delta) / Math.max(counted, 1) <= 0.35
        ? "PASS"
        : counted > 0 && usedIn > 0
          ? "PARTIAL"
          : "FAIL";
    record(
      "A-COUNT-VS-USAGE",
      countCompare,
      `count=${counted} usageIn=${usedIn} delta=${delta} ratio=${ratio}`,
    );

    const camp = getActiveCampaignEnvelope();
    save("03-campaign", {
      campaignId: camp?.campaignId,
      httpAttemptsCommitted: camp?.httpAttemptsCommitted,
      inputTokenCountAttemptsCommitted: camp?.inputTokenCountAttemptsCommitted,
      inputTokensReserved: camp?.inputTokensReserved,
      inputTokensCommitted: camp?.inputTokensCommitted,
      requireNativeInputBound: camp?.requireNativeInputBound,
    });
    record(
      "A-COUNT-ATTEMPTS-TRACKED",
      (camp?.inputTokenCountAttemptsCommitted ?? 0) >= 1 ? "PASS" : "FAIL",
      `countCommitted=${camp?.inputTokenCountAttemptsCommitted} httpCommitted=${camp?.httpAttemptsCommitted}`,
    );

    const bodies = getHttpBodiesObservedForTests();
    save("04-transport-oracle", { transportLog, bodies });
    const countCalls = transportLog.filter((t) => t.isCount).length;
    const respCalls = transportLog.filter((t) => t.isResponses).length;
    record(
      "A-TRANSPORT-ORACLE",
      countCalls >= 1 && respCalls >= 1 ? "PASS" : "FAIL",
      `countCalls=${countCalls} respCalls=${respCalls} transportN=${transportLog.length}`,
    );

    // modelApplied observability
    const modelApplied =
      typeof createRes.model === "string" && createRes.model.trim()
        ? createRes.model.trim()
        : "UNVERIFIED";
    record(
      "C-MODEL-APPLIED",
      modelApplied !== "UNVERIFIED" ? "PASS" : "PARTIAL",
      `modelApplied=${modelApplied}`,
    );

    endProcessCampaign(campaign?.campaignId);
    endRequiredCampaignLatch();
  });

  const failed = criteria.filter((c) => c.status === "FAIL");
  const blocked = criteria.filter((c) => c.status === "BLOCKED");
  const partial = criteria.filter((c) => c.status === "PARTIAL");
  const notRun = criteria.filter((c) => c.status === "NOT RUN");
  let verdict;
  if (failed.length) verdict = "G-LIVE-NATIVE-COUNT FAIL";
  else if (blocked.length) verdict = "G-LIVE-NATIVE-COUNT BLOCKED";
  else if (partial.length) verdict = "G-LIVE-NATIVE-COUNT PARTIAL";
  else if (notRun.length) verdict = "G-LIVE-NATIVE-COUNT INCOMPLETE";
  else verdict = "G-LIVE-NATIVE-COUNT PASS — ALL MANDATORY CRITERIA";

  report.verdict = verdict;
  report.endedAt = new Date().toISOString();
  report.criteria = criteria;
  save("00-report", report);
  console.log(JSON.stringify({ verdict, out: OUT, failed: failed.length, partial: partial.length }, null, 2));
  if (failed.length) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
