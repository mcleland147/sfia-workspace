/**
 * G-LIVE-API convergence — real Chantiers360 / planning investigation (WEB OFF).
 * Criteria are evaluated individually; HTTP 200 / COMPLETE / PG rows alone ≠ PASS.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const BASE = process.env.SFIA_LIVE_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_LIVE_OUT || "/tmp/sfia-ml5-g-live-api-convergence-20261126";
const PROJECT_ID =
  process.env.SFIA_LIVE_PROJECT_ID ||
  "proj_fdd9b064-a8a4-4296-bb6b-e8b64ebe914d";
/** Product posts Nora turns via preparation messages (project page uses prep link). */
let PREPARATION_ID = process.env.SFIA_LIVE_PREPARATION_ID || "";
mkdirSync(OUT, { recursive: true });

const jar = { cookie: "" };
const criteria = [];

function recordCriterion(id, status, detail) {
  criteria.push({ id, status, detail });
  console.log(`[CRITERION ${id}] ${status} — ${String(detail).slice(0, 400)}`);
}

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
      json = { _raw: text.slice(0, 8000) };
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

function extractReply(json) {
  if (!json || typeof json !== "object") return "";
  const msgs = Array.isArray(json.messages) ? json.messages : [];
  for (let i = msgs.length - 1; i >= 0; i--) {
    const m = msgs[i];
    if (
      m &&
      (m.role === "assistant" || m.author === "assistant") &&
      typeof m.content === "string" &&
      m.content.trim()
    ) {
      return m.content;
    }
  }
  return typeof json.content === "string" ? json.content : "";
}

function extractWorkId(json) {
  return json?.cognitiveWork?.workId || json?.cognitiveWorkId || null;
}

const report = {
  startedAt: new Date().toISOString(),
  base: BASE,
  projectId: PROJECT_ID,
  campaign: "g-live-api-convergence-20261126",
  gate: "G-LIVE-API",
  web: "OFF",
  criteria: [],
  scenarios: {},
  finops: null,
  verdict: null,
};

// Independent oracle seeds (not given to Nora as answers) — markers we expect
// after consulting Chantiers360 / planning materials.
const ORACLE_MARKERS = [
  /réserv/i,
  /conflit|conflict|double/i,
  /salle|room|créneau|slot|planning/i,
];

try {
  const health = await api("/login");
  recordCriterion(
    "PRE-HEALTH",
    health.status === 200 || health.status === 307 || health.status === 302
      ? "PASS"
      : "FAIL",
    `status=${health.status}`,
  );
  if (criteria[criteria.length - 1].status === "FAIL") throw new Error("DEV not ready");

  await api("/api/dev/auto-session", { method: "POST" });

  const proj = await api(`/api/projects/${PROJECT_ID}`);
  save("01-project", proj);
  recordCriterion(
    "PRE-PROJECT",
    proj.status === 200 ? "PASS" : "FAIL",
    `status=${proj.status} name=${proj.json?.name || proj.json?.project?.name || "?"}`,
  );

  const gitLinks = pgJson(
    `SELECT COALESCE(json_agg(row_to_json(t)), '[]'::json) FROM (
      SELECT l.id, l.status, r.full_name, r.default_branch
      FROM project_git_links l
      JOIN authorized_repositories r ON r.id = l.repository_id
      WHERE l.project_id='${PROJECT_ID}' AND l.status='ATTACHED'
    ) t;`,
  );
  save("02-git-links", gitLinks);
  const hasGit = Array.isArray(gitLinks) && gitLinks.length > 0;
  recordCriterion(
    "PRE-GIT",
    hasGit ? "PASS" : "BLOCKED",
    hasGit ? gitLinks.map((g) => g.full_name).join(",") : "no ATTACHED git link",
  );
  if (!hasGit) throw new Error("BLOCKED — corpus Git missing for investigation");

  if (!PREPARATION_ID) {
    PREPARATION_ID =
      pg(
        `SELECT preparation_id FROM preparation_project_links WHERE project_id='${PROJECT_ID}' LIMIT 1;`,
      ) || "";
  }
  save("02b-preparation", { preparationId: PREPARATION_ID });
  recordCriterion(
    "PRE-PREPARATION",
    PREPARATION_ID ? "PASS" : "BLOCKED",
    PREPARATION_ID || "no preparation_project_links row",
  );
  if (!PREPARATION_ID) throw new Error("BLOCKED — preparation link missing");

  // P2 investigation — real planning question (not "describe Nora")
  const question = [
    "Investigation planning / RoomBooking (qualification ML5) :",
    "À partir du dépôt Git rattaché et des documents du projet, identifie comment les conflits",
    "de double réservation (même ressource, créneaux qui se chevauchent) sont détectés ou devraient l'être.",
    "Consulte au moins deux sources distinctes (fichiers ou documents). Cite les chemins/refs consultés.",
    "Distingue faits observés, hypothèses et recommandations. N'invente pas de code absent.",
    "Aucune recherche web.",
  ].join(" ");

  const t0 = Date.now();
  const inv = await api(`/api/preparations/${PREPARATION_ID}/messages`, {
    method: "POST",
    body: {
      content: question,
      clientTurnKey: `ctk_inv_${randomUUID()}`,
      forceNewCognitiveWork: true,
    },
  });
  save("03-investigation", inv);
  const replyInv = extractReply(inv.json);
  const workId = extractWorkId(inv.json);
  const tools = inv.json?.toolCallsObserved ?? 0;
  const sources =
    inv.json?.cognitiveWork?.sources ||
    inv.json?.qualification?.sources ||
    inv.json?.turnProjection?.sources ||
    [];
  report.scenarios.INVESTIGATION = {
    status: inv.status,
    noraStatus: inv.json?.status,
    ms: Date.now() - t0,
    workId,
    toolCallsObserved: tools,
    attempts: inv.json?.attempts ?? [],
    generationId: inv.json?.generationId ?? null,
    reply: replyInv,
    policy: inv.json?.policy ?? null,
  };

  recordCriterion(
    "P2-HTTP",
    inv.status === 200 ? "PASS" : "FAIL",
    `status=${inv.status}`,
  );
  recordCriterion(
    "P2-COMPLETE",
    inv.json?.status === "COMPLETE" || inv.json?.status === "PARTIAL"
      ? "PASS"
      : "FAIL",
    `noraStatus=${inv.json?.status} notes=${inv.json?.attempts?.[0]?.notes}`,
  );
  recordCriterion(
    "P2-TOOLS-OR-SOURCES",
    tools > 0 || (Array.isArray(sources) && sources.length > 0) || /CONSULT|Git|doc_|path|fichier|\.md|\.ts|\.py/i.test(replyInv)
      ? "PASS"
      : "FAIL",
    `tools=${tools} replyHasSourceCue=${/Git|doc_|path|fichier|\.md/i.test(replyInv)}`,
  );
  const oracleHits = ORACLE_MARKERS.filter((re) => re.test(replyInv)).length;
  recordCriterion(
    "P2-ORACLE-CONTENT",
    oracleHits >= 2 && replyInv.length > 200 ? "PASS" : "FAIL",
    `oracleHits=${oracleHits}/3 replyChars=${replyInv.length}`,
  );
  recordCriterion(
    "P2-NOT-GENERIC-NORA-DESC",
    !/Aucun acquis pertinent n'a été trouvé dans la recherche ciblée/i.test(replyInv)
      ? "PASS"
      : "FAIL",
    "generic Nora self-description pattern",
  );

  // Reprise + note technique
  const noteReq = await api(`/api/preparations/${PREPARATION_ID}/messages`, {
    method: "POST",
    body: {
      content:
        "À partir uniquement des acquis de l'investigation précédente sur les conflits de réservation, produis une note technique distincte (12 lignes max) : faits sourcés, limites, recommandations. Pas de nouvelle exploration exhaustive si les acquis suffisent.",
      clientTurnKey: `ctk_note_${randomUUID()}`,
      ...(workId ? { cognitiveWorkId: workId } : {}),
    },
  });
  save("04-note", noteReq);
  const replyNote = extractReply(noteReq.json);
  report.scenarios.NOTE = {
    status: noteReq.status,
    noraStatus: noteReq.json?.status,
    workId: extractWorkId(noteReq.json) || workId,
    reply: replyNote,
    attempts: noteReq.json?.attempts ?? [],
  };
  recordCriterion(
    "P2-NOTE",
    noteReq.status === 200 &&
      replyNote.length > 120 &&
      (/fait|recommand|limite|source|conflit|réserv/i.test(replyNote) ||
        /```sfia-document/.test(replyNote))
      ? "PASS"
      : "FAIL",
    `chars=${replyNote.length}`,
  );

  // FinOps real API — period=7 summary is pilot/period scope, NOT campaign scope.
  const finopsSummary = await api("/api/finops/summary?period=7");
  save("05-finops-summary", finopsSummary);
  recordCriterion(
    "P3-FINOPS-API",
    finopsSummary.status === 200 ? "PASS" : "FAIL",
    `status=${finopsSummary.status}`,
  );

  const finopsWorks = await api(
    `/api/finops/works?period=7&projectId=${encodeURIComponent(PROJECT_ID)}`,
  );
  save("06-finops-works", finopsWorks);
  recordCriterion(
    "P3-FINOPS-WORKS",
    finopsWorks.status === 200 ? "PASS" : "FAIL",
    `status=${finopsWorks.status}`,
  );

  let finopsWork = null;
  if (workId) {
    finopsWork = await api(
      `/api/finops/works/${encodeURIComponent(workId)}?period=7`,
    );
    save("07-finops-work", finopsWork);
    recordCriterion(
      "P3-FINOPS-WORK-DETAIL",
      finopsWork.status === 200 ? "PASS" : "FAIL",
      `status=${finopsWork.status}`,
    );
  } else {
    recordCriterion("P3-FINOPS-WORK-DETAIL", "NOT RUN", "no workId");
  }

  const ui = await api("/settings/consumption");
  recordCriterion(
    "P3-FINOPS-UI",
    ui.status === 200 ? "PASS" : "FAIL",
    `status=${ui.status} (HTTP shell only — browser UI not exercised here)`,
  );

  // Same-scope reconciliation: PG rows for THIS workId vs work-detail API KPIs.
  // Never compare campaign-local billable sum against period=7 pilot totalRequests.
  const usageScopeSql = workId
    ? `cognitive_work_id='${workId.replace(/'/g, "''")}'`
    : `created_at >= '${sinceSafe(report.startedAt)}'::timestamptz`;
  const usage = pgJson(
    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY created_at), '[]'::json) FROM (
      SELECT id, created_at, cognitive_work_id, generation_id, attempt_id, operation,
             input_tokens, output_tokens, total_tokens, provider_requests, estimated_cost_usd,
             cost_coverage, granularity, limits_json
      FROM provider_usage_observations
      WHERE ${usageScopeSql}
      ORDER BY created_at LIMIT 500
    ) t;`,
  );
  const rows = Array.isArray(usage) ? usage : [];
  const isCorrOnly = (r) =>
    Array.isArray(r.limits_json) &&
    r.limits_json.some(
      (l) =>
        String(l) === "HTTP_ATTEMPT_USAGE_UNKNOWN" ||
        String(l) === "HTTP_ATTEMPT_CORRELATION_ONLY" ||
        String(l).includes("HTTP_ATTEMPT_USAGE_UNKNOWN") ||
        String(l).includes("HTTP_ATTEMPT_CORRELATION_ONLY"),
    );
  const billable = rows.filter((r) => !isCorrOnly(r));
  const corrOnly = rows.length - billable.length;
  const sumReq = billable.reduce(
    (a, r) => a + (Number(r.provider_requests) || 0),
    0,
  );
  const sumIn = billable.reduce((a, r) => a + (Number(r.input_tokens) || 0), 0);
  const sumOut = billable.reduce(
    (a, r) => a + (Number(r.output_tokens) || 0),
    0,
  );
  const sumCost = billable.reduce(
    (a, r) => a + (Number(r.estimated_cost_usd) || 0),
    0,
  );
  const apiWorkKpis = finopsWork?.json?.kpis ?? null;
  const apiProviderRequests =
    apiWorkKpis?.providerRequests?.kind === "known" ||
    apiWorkKpis?.providerRequests?.kind === "partial"
      ? Number(apiWorkKpis.providerRequests.value)
      : null;
  const apiTokens =
    apiWorkKpis?.totalTokens?.kind === "known" ||
    apiWorkKpis?.totalTokens?.kind === "partial"
      ? Number(apiWorkKpis.totalTokens.value)
      : null;
  const apiCost =
    apiWorkKpis?.estimatedCostUsd?.kind === "known" ||
    apiWorkKpis?.estimatedCostUsd?.kind === "partial"
      ? Number(apiWorkKpis.estimatedCostUsd.value)
      : null;
  const period7PilotTotal =
    finopsSummary.json?.summary?.kpis?.totalRequests ?? null;

  report.finops = {
    scope: workId ? { kind: "cognitiveWorkId", cognitiveWorkId: workId } : { kind: "campaignWindow", since: report.startedAt },
    observationCount: rows.length,
    billableCount: billable.length,
    correlationOnlyCount: corrOnly,
    sumProviderRequestsBillable: sumReq,
    sumInputTokens: sumIn,
    sumOutputTokens: sumOut,
    sumEstimatedCostUsdBillable: sumCost,
    workDetailKpis: apiWorkKpis,
    /** Informative only — pilot/period scope; must not gate work-scope double-count. */
    period7PilotTotalRequests: period7PilotTotal,
    note: "Compare PG billable provider_requests for workId to GET /api/finops/works/:id providerRequests; do not compare campaign rows to period=7 pilot totals.",
  };
  save("08-finops-pg", report.finops);

  if (!workId) {
    recordCriterion(
      "P3-NO-DOUBLE-COUNT-HINT",
      "NOT RUN",
      "no workId — cannot reconcile PG vs work-detail API on same scope",
    );
    recordCriterion(
      "P3-PG-OBSERVATIONS",
      "NOT RUN",
      "no workId — campaign-window PG alone is not FinOps work-scope proof",
    );
  } else if (finopsWork?.status !== 200 || apiProviderRequests == null) {
    recordCriterion(
      "P3-NO-DOUBLE-COUNT-HINT",
      "BLOCKED",
      `work detail unavailable status=${finopsWork?.status} apiProviderRequests=${apiProviderRequests}`,
    );
    recordCriterion(
      "P3-PG-OBSERVATIONS",
      billable.length >= 1 ? "PARTIAL" : "FAIL",
      `billable=${billable.length} totalRows=${rows.length} (API work KPIs missing)`,
    );
  } else {
    const reqMatch = apiProviderRequests === sumReq;
    const tokensMatch =
      apiTokens == null ||
      apiTokens ===
        billable.reduce(
          (a, r) =>
            a +
            (Number(r.total_tokens) ||
              (Number(r.input_tokens) || 0) + (Number(r.output_tokens) || 0)),
          0,
        );
    const costMatch =
      apiCost == null || Math.abs(apiCost - sumCost) < 1e-6;
    recordCriterion(
      "P3-NO-DOUBLE-COUNT-HINT",
      reqMatch && tokensMatch && costMatch ? "PASS" : "FAIL",
      `workId=${workId} pgBillableReq=${sumReq} apiWorkReq=${apiProviderRequests} corrOnly=${corrOnly} timelineRows=${rows.length} period7PilotTotalReq=${period7PilotTotal} (pilot total is out of scope)`,
    );
    recordCriterion(
      "P3-PG-OBSERVATIONS",
      billable.length >= 1 ? "PASS" : "FAIL",
      `billable=${billable.length} corrOnly=${corrOnly} totalRows=${rows.length}`,
    );
  }

  report.criteria = criteria;
  const failed = criteria.filter((c) => c.status === "FAIL");
  const blocked = criteria.filter((c) => c.status === "BLOCKED");
  const partial = criteria.filter((c) => c.status === "PARTIAL");
  const notRun = criteria.filter((c) => c.status === "NOT RUN");
  // Mandatory criteria PARTIAL / BLOCKED / NOT RUN must never yield ALL PASS.
  if (failed.length > 0) {
    report.verdict = "G-LIVE-API CONVERGENCE FAIL — SEE CRITERIA";
  } else if (blocked.length > 0) {
    report.verdict = "G-LIVE-API CONVERGENCE BLOCKED — SEE CRITERIA";
  } else if (partial.length > 0) {
    report.verdict = "G-LIVE-API CONVERGENCE PARTIAL — SEE CRITERIA";
  } else if (notRun.length > 0) {
    report.verdict = "G-LIVE-API CONVERGENCE INCOMPLETE — MANDATORY CRITERIA NOT RUN";
  } else {
    report.verdict = "G-LIVE-API CONVERGENCE PASS — ALL MANDATORY CRITERIA";
  }
  report.endedAt = new Date().toISOString();
  save("00-report", report);
  console.log(
    JSON.stringify(
      {
        verdict: report.verdict,
        out: OUT,
        failed: failed.length,
        blocked: blocked.length,
        partial: partial.length,
        notRun: notRun.length,
      },
      null,
      2,
    ),
  );
  process.exit(
    failed.length || blocked.length || partial.length || notRun.length ? 2 : 0,
  );
} catch (e) {
  report.criteria = criteria;
  report.verdict = "G-LIVE-API CONVERGENCE ERROR";
  report.error = String(e?.stack || e);
  report.endedAt = new Date().toISOString();
  save("00-report", report);
  console.error(report.error);
  process.exit(1);
}

function sinceSafe(iso) {
  return String(iso || new Date().toISOString()).replace(/'/g, "''");
}
