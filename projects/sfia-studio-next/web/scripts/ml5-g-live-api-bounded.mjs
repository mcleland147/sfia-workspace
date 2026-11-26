/**
 * G-LIVE-API bounded campaign — LIVE-01..04 against DEV :3100 (WEB OFF).
 * Preconditions: qualify server with SFIA_G_LIVE_API=1, WEB flags 0, STUDIO_LANE=DEV.
 * Does not touch RECETTE :3200. Stops when oracle is sufficient — does not burn envelope.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const BASE = process.env.SFIA_LIVE_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_LIVE_OUT ||
  "/tmp/sfia-ml5-g-live-api-20261126";
mkdirSync(OUT, { recursive: true });

const jar = { cookie: "" };

async function api(path, { method = "GET", body, timeoutMs = 900_000 } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${BASE}${path}`, {
      method,
      headers: {
        ...(body ? { "content-type": "application/json" } : {}),
        ...(jar.cookie ? { cookie: jar.cookie } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    const set = res.headers.getSetCookie?.() || [];
    for (const c of set) {
      const part = c.split(";")[0];
      jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
    }
    const text = await res.text();
    let json = null;
    try {
      json = JSON.parse(text);
    } catch {
      json = { _raw: text.slice(0, 4000) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}

function save(name, data) {
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
}

function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  return execSync(
    `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
    { encoding: "utf8", maxBuffer: 20_000_000 },
  ).trim();
}

function pgJson(sql) {
  const raw = pg(sql);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

const report = {
  startedAt: new Date().toISOString(),
  base: BASE,
  campaign: "g-live-api-20261126",
  gate: "G-LIVE-API",
  web: "OFF",
  steps: [],
  scenarios: {},
  finops: null,
  verdict: null,
};

function step(name, data) {
  report.steps.push({ name, at: new Date().toISOString(), ...data });
  console.log(`[${name}]`, JSON.stringify(data).slice(0, 600));
}

async function turn(target, content, extra = {}) {
  const path = target.preparationId
    ? `/api/preparations/${target.preparationId}/messages`
    : `/api/projects/${target.projectId}/messages`;
  return api(path, {
    method: "POST",
    body: {
      content,
      clientTurnKey: extra.clientTurnKey || `ctk_${randomUUID()}`,
      ...extra,
    },
    timeoutMs: 900_000,
  });
}

try {
  const health = await api("/login");
  step("health", { status: health.status });
  if (health.status !== 200 && health.status !== 307 && health.status !== 302) {
    throw new Error(`DEV :3100 not ready status=${health.status}`);
  }

  await api("/api/dev/auto-session", { method: "POST" });
  const runId = randomUUID().slice(0, 8);

  // LIVE-01 — nominal simple turn
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  save("01-prep", prep);
  const preparationId = prep.json?.preparationId;
  if (!preparationId) throw new Error("no preparationId");

  const t0 = Date.now();
  const live01 = await turn(
    { preparationId },
    `LIVE-01 ${runId}: en une phrase, confirme que tu es Nora et que le socle cognitif répond. Aucune recherche web. Aucun outil Git.`,
  );
  save("02-live01", live01);
  const reply01 =
    live01.json?.assistantMessage?.content ||
    live01.json?.message?.content ||
    live01.json?.reply ||
    live01.json?._raw ||
    "";
  const workId01 =
    live01.json?.cognitiveWorkId ||
    live01.json?.workId ||
    live01.json?.assistantMessage?.cognitiveWorkId ||
    null;
  step("LIVE-01", {
    status: live01.status,
    ms: Date.now() - t0,
    workId: workId01,
    replyChars: String(reply01).length,
    replyPreview: String(reply01).slice(0, 280),
  });
  report.scenarios.LIVE01 = {
    status: live01.status,
    ms: Date.now() - t0,
    workId: workId01,
    reply: String(reply01).slice(0, 2000),
  };
  if (live01.status < 200 || live01.status >= 300) {
    throw new Error(`LIVE-01 HTTP ${live01.status}`);
  }

  // LIVE-02 — light tool-using investigation on local/public docs if work exists
  const live02 = await turn(
    { preparationId },
    `LIVE-02 ${runId}: sans recherche web, résume en 5 lignes maximum le rôle de Nora dans Studio Next (allocation cognitive, conducteur, FinOps). Si des acquis existent déjà, mobilise-les. Ne relance pas une investigation exhaustive.`,
  );
  save("03-live02", live02);
  const reply02 =
    live02.json?.assistantMessage?.content ||
    live02.json?.message?.content ||
    live02.json?.reply ||
    "";
  const workId02 =
    live02.json?.cognitiveWorkId ||
    live02.json?.workId ||
    live02.json?.assistantMessage?.cognitiveWorkId ||
    workId01;
  step("LIVE-02", {
    status: live02.status,
    replyChars: String(reply02).length,
    workId: workId02,
    replyPreview: String(reply02).slice(0, 280),
  });
  report.scenarios.LIVE02 = {
    status: live02.status,
    workId: workId02,
    reply: String(reply02).slice(0, 4000),
  };

  // LIVE-03 — restitution / note from acquis
  const live03 = await turn(
    { preparationId },
    `LIVE-03 ${runId}: produis une courte note technique (8 lignes max) consolidant les acquis de ce fil. Pas de nouvelle investigation. Cite uniquement ce qui est déjà établi.`,
  );
  save("04-live03", live03);
  const reply03 =
    live03.json?.assistantMessage?.content ||
    live03.json?.message?.content ||
    live03.json?.reply ||
    "";
  step("LIVE-03", {
    status: live03.status,
    replyChars: String(reply03).length,
    replyPreview: String(reply03).slice(0, 400),
  });
  report.scenarios.LIVE03 = {
    status: live03.status,
    reply: String(reply03).slice(0, 4000),
  };

  // LIVE-04 — FinOps reconciliation from PostgreSQL (no extra LIVE burn)
  const since = report.startedAt;
  const usage = pgJson(
    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY created_at), '[]'::json) FROM (
      SELECT id, created_at, cognitive_work_id, generation_id, attempt_id, operation,
             model_requested, model_applied, effort_requested, effort_applied,
             input_tokens, output_tokens, total_tokens, provider_requests,
             estimated_cost_usd, cost_coverage, status, granularity,
             provider_response_id, limits_json, error_category
      FROM provider_usage_observations
      WHERE created_at >= '${since}'::timestamptz
      ORDER BY created_at
      LIMIT 80
    ) t;`,
  );
  const usageRows = Array.isArray(usage) ? usage : [];
  const sumIn = usageRows.reduce((a, r) => a + (Number(r.input_tokens) || 0), 0);
  const sumOut = usageRows.reduce((a, r) => a + (Number(r.output_tokens) || 0), 0);
  const costs = usageRows
    .map((r) => Number(r.estimated_cost_usd))
    .filter((n) => Number.isFinite(n));
  const sumCost = costs.reduce((a, b) => a + b, 0);
  const attemptIds = [
    ...new Set(usageRows.map((r) => r.attempt_id).filter(Boolean)),
  ];
  const httpMarkers = usageRows.flatMap((r) =>
    Array.isArray(r.limits_json)
      ? r.limits_json.filter((x) => String(x).startsWith("HTTP_ATTEMPT"))
      : [],
  );
  report.finops = {
    observationCount: usageRows.length,
    distinctAttemptIds: attemptIds.length,
    attemptIds,
    httpMarkers: httpMarkers.slice(0, 40),
    sumInputTokens: sumIn,
    sumOutputTokens: sumOut,
    estimatedCostUsdSum: Number(sumCost.toFixed(6)),
    coverages: [...new Set(usageRows.map((r) => r.cost_coverage))],
    granularities: [...new Set(usageRows.map((r) => r.granularity))],
    rows: usageRows.map((r) => ({
      id: r.id,
      attempt_id: r.attempt_id,
      generation_id: r.generation_id,
      operation: r.operation,
      model: r.model_applied || r.model_requested,
      effort: r.effort_applied || r.effort_requested,
      in: r.input_tokens,
      out: r.output_tokens,
      cost: r.estimated_cost_usd,
      coverage: r.cost_coverage,
      granularity: r.granularity,
      limits: r.limits_json,
    })),
  };
  save("05-finops", report.finops);
  step("LIVE-04", {
    observations: usageRows.length,
    attempts: attemptIds.length,
    sumIn,
    sumOut,
    cost: report.finops.estimatedCostUsdSum,
  });

  const finopsApi = await api("/api/settings/consumption").catch((e) => ({
    status: 0,
    json: { error: String(e) },
  }));
  save("06-finops-api", finopsApi);
  report.scenarios.LIVE04 = {
    pgObservations: usageRows.length,
    finopsApiStatus: finopsApi.status,
  };

  const ok =
    report.scenarios.LIVE01.status === 200 &&
    String(report.scenarios.LIVE01.reply || "").length > 20 &&
    usageRows.length >= 1;
  report.verdict = ok
    ? "G-LIVE-API LIVE-01..04 EXERCISED — OBSERVATIONS PERSISTED"
    : "G-LIVE-API PARTIAL — REVIEW SCENARIOS";
  report.endedAt = new Date().toISOString();
  save("00-report", report);
  console.log(JSON.stringify({ verdict: report.verdict, out: OUT }, null, 2));
  process.exit(ok ? 0 : 2);
} catch (e) {
  report.verdict = "G-LIVE-API FAILED";
  report.error = String(e?.stack || e);
  report.endedAt = new Date().toISOString();
  save("00-report", report);
  console.error(report.error);
  process.exit(1);
}
