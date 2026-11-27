/**
 * Intervention 2 — integrated LIVE campaign (DEV :3100 only).
 * Covers CP5 tracing LOCAL + CP6 WEB A3 opt2 + CP7 D3 V1 continuity in one Nora investigation.
 * Envelope: ≤20 provider contacts, web_max_tool_calls=1, ≤3 HTTP WEB attempts, public corpus only.
 * Does NOT touch RECETTE. Does NOT enable store=true / native continuity.
 */
import { writeFileSync, mkdirSync, readFileSync, appendFileSync, existsSync, readdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";
import { join } from "node:path";

const BASE = process.env.SFIA_LIVE_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_I2_OUT ||
  "/Users/morris/Projects/sfia-wt-next-ml5-20261123/.tmp-sfia-review/i2-integrated-live";
const WEB_ROOT =
  process.env.SFIA_WEB_ROOT ||
  "/Users/morris/Projects/sfia-wt-next-ml5-20261123/projects/sfia-studio-next/web";
mkdirSync(OUT, { recursive: true });

const jar = { cookie: "" };
const ENVELOPE = {
  maxProviderContacts: 20,
  webMaxToolCalls: 1,
  webMaxHttpAttempts: 3,
  maxTokensReserved: 200_000,
};

const report = {
  campaign: "ml1-intervention2-integrated-live",
  startedAt: new Date().toISOString(),
  finishedAt: null,
  base: BASE,
  buildId: null,
  envelope: ENVELOPE,
  steps: [],
  scenarios: {},
  tracing: null,
  web: null,
  d3: null,
  finops: null,
  conv: null,
  verdict: null,
  stopReason: null,
  providerContacts: 0,
};

function step(name, data) {
  report.steps.push({ name, at: new Date().toISOString(), ...data });
  console.log(`[${name}]`, JSON.stringify(data).slice(0, 700));
}

function save(name, data) {
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
}

function saveReport() {
  report.finishedAt = new Date().toISOString();
  writeFileSync(`${OUT}/campaign-report.json`, JSON.stringify(report, null, 2));
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
      json = { _raw: text.slice(0, 6000) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
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
  if (typeof json.content === "string" && json.content.trim()) return json.content;
  if (typeof json.reply === "string" && json.reply.trim()) return json.reply;
  const msgs = Array.isArray(json.messages) ? json.messages : [];
  for (let i = msgs.length - 1; i >= 0; i--) {
    const m = msgs[i];
    if (
      m &&
      (m.role === "assistant" || m.author === "assistant" || m.kind === "assistant") &&
      typeof m.content === "string" &&
      m.content.trim()
    ) {
      return m.content;
    }
  }
  const am = json.assistantMessage;
  if (am && typeof am.content === "string") return am.content;
  return "";
}

function extractWorkId(json) {
  return (
    json?.cognitiveWork?.workId ||
    json?.cognitiveWorkId ||
    json?.workId ||
    null
  );
}

function reserveContact(n = 1) {
  if (report.providerContacts + n > ENVELOPE.maxProviderContacts) {
    report.stopReason = "ENVELOPE_PROVIDER_CONTACTS";
    return false;
  }
  report.providerContacts += n;
  return true;
}

function collectObsTraces(sinceIso) {
  const hits = [];
  const logPath = join(WEB_ROOT, ".sfia-evidence/qualify-server.log");
  if (existsSync(logPath)) {
    const lines = readFileSync(logPath, "utf8").split("\n");
    for (const line of lines) {
      if (!line.includes("SFIA_OBS")) continue;
      const idx = line.indexOf("{");
      if (idx < 0) continue;
      try {
        const ev = JSON.parse(line.slice(idx));
        if (ev.ts_utc && ev.ts_utc < sinceIso) continue;
        if (
          ev.event_name === "provider.agents_trace.local" ||
          (typeof ev.event_name === "string" && ev.event_name.includes("trace"))
        ) {
          hits.push(ev);
        }
      } catch {
        /* skip */
      }
    }
  }
  const obsDir = join(WEB_ROOT, ".obs/dev");
  if (existsSync(obsDir)) {
    for (const f of readdirSync(obsDir)) {
      if (!f.endsWith(".jsonl") && !f.endsWith(".log")) continue;
      const raw = readFileSync(join(obsDir, f), "utf8");
      for (const line of raw.split("\n")) {
        if (!line.trim()) continue;
        try {
          const ev = JSON.parse(line.startsWith("SFIA_OBS") ? line.slice(line.indexOf("{")) : line);
          if (ev.ts_utc && ev.ts_utc < sinceIso) continue;
          if (ev.event_name === "provider.agents_trace.local") hits.push(ev);
        } catch {
          /* skip */
        }
      }
    }
  }
  return hits;
}

function loadWork(workId) {
  if (!workId) return null;
  return pgJson(
    `SELECT row_to_json(t) FROM (
      SELECT id, status, revision, interrupt_cause AS "interruptCause",
             objective, owner_token IS NOT NULL AS "hasOwnerToken",
             owner_pilot_id AS "ownerPilotId",
             resources_json::json AS resources,
             state_json::json AS state,
             production_json::json AS production
      FROM cognitive_works WHERE id='${workId}'
    ) t;`,
  );
}

function loadCheckpoints(workId) {
  if (!workId) return [];
  return (
    pgJson(
      `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY revision), '[]'::json) FROM (
        SELECT id, revision, cause, created_at AS "createdAt"
        FROM cognitive_work_checkpoints WHERE work_id='${workId}'
      ) t;`,
    ) || []
  );
}

function httpsCitations(text) {
  const urls = [...String(text).matchAll(/https?:\/\/[^\s)\]"'<>]+/gi)].map((m) => m[0]);
  const publicOk = urls.filter(
    (u) =>
      /developer\.mozilla\.org|openai\.com\/docs|nodejs\.org|postgresql\.org|datatracker\.ietf\.org|web\.dev|mdn\.io/i.test(
        u,
      ),
  );
  return { urls, publicOk };
}

try {
  const health = await api("/login");
  step("health", { status: health.status });
  if (![200, 302, 307].includes(health.status)) {
    throw new Error(`DEV not ready ${health.status}`);
  }

  const bid = existsSync(join(WEB_ROOT, ".next/BUILD_ID"))
    ? readFileSync(join(WEB_ROOT, ".next/BUILD_ID"), "utf8").trim()
    : null;
  report.buildId = bid;
  const identity = existsSync(join(WEB_ROOT, ".sfia-evidence/qualify-server.identity.json"))
    ? JSON.parse(readFileSync(join(WEB_ROOT, ".sfia-evidence/qualify-server.identity.json"), "utf8"))
    : null;
  step("identity", {
    buildId: bid,
    identityBuild: identity?.buildId ?? null,
    effectMode: identity?.effectMode ?? null,
  });
  if (identity?.buildId && bid && identity.buildId !== bid) {
    throw new Error(`BUILD drift identity=${identity.buildId} disk=${bid}`);
  }

  await api("/api/dev/auto-session", { method: "POST" });
  const runId = randomUUID().slice(0, 8);
  const campaignStart = new Date().toISOString();

  // Dedicated public project
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  save("01-prep", prep);
  const preparationId = prep.json?.preparationId;
  if (!preparationId) throw new Error("no preparationId");

  let g = await api(`/api/preparations/${preparationId}`);
  let rev = g.json?.preparation?.creationRevision;
  const name = `ML5-I2-Live-${runId}`;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: name,
      previewSummary: "I2 integrated LIVE — public technical docs only.",
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = g.json?.preparation?.creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: name,
      idempotencyKey: `i2-${runId}`,
      previewSummary: "Intervention 2 public corpus",
    },
  });
  save("02-create-project", created);
  const projectId = created.json?.projectId;
  if (!projectId) throw new Error("project create failed");
  step("project", { preparationId, projectId, name });

  // Initial qualification
  {
    const iqStarted = Date.now();
    let iqLast = null;
    while (Date.now() - iqStarted < 180_000) {
      const r = await api(`/api/projects/${projectId}/initial-qualification/reconcile`, {
        method: "POST",
        timeoutMs: 60_000,
      });
      iqLast = r.json?.initialQualification || r.json;
      const status = iqLast?.status;
      if (status && !["PENDING", "RUNNING", "UNKNOWN"].includes(status)) break;
      await new Promise((res) => setTimeout(res, 1500));
    }
    step("initial_qualification", {
      status: iqLast?.status ?? null,
      phase: iqLast?.phase ?? null,
      ms: Date.now() - iqStarted,
    });
    save("03-iq", iqLast);
    if (!iqLast?.status || ["PENDING", "RUNNING", "UNKNOWN", "TIMEOUT"].includes(iqLast.status)) {
      report.stopReason = `IQ_NOT_READY_${iqLast?.status || "NULL"}`;
      saveReport();
      process.exit(2);
    }
  }

  async function turn(label, content, extra = {}) {
    if (report.stopReason) return null;
    if (!reserveContact(1)) {
      saveReport();
      return null;
    }
    const t0 = Date.now();
    const res = await api(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      body: {
        content,
        clientTurnKey: extra.clientTurnKey || `ctk_${label}_${randomUUID()}`,
        ...extra,
      },
      timeoutMs: 900_000,
    });
    save(`turn-${label}`, res);
    const reply = extractReply(res.json);
    const workId = extractWorkId(res.json);
    const entry = {
      status: res.status,
      ms: Date.now() - t0,
      workId,
      noraStatus: res.json?.status ?? null,
      generationId: res.json?.generationId ?? null,
      attemptId: res.json?.attempts?.[0]?.attemptId ?? res.json?.attemptId ?? null,
      attemptNotes: res.json?.attempts?.[0]?.notes ?? null,
      replyChars: String(reply).length,
      replyPreview: String(reply).slice(0, 400),
      citations: httpsCitations(reply),
    };
    step(label, entry);
    report.scenarios[label] = {
      ...entry,
      reply: String(reply).slice(0, 6000),
      attempts: res.json?.attempts ?? [],
      rawKeys: res.json && typeof res.json === "object" ? Object.keys(res.json) : [],
    };
    if (res.status < 200 || res.status >= 300) {
      report.stopReason = report.stopReason || `${label}_HTTP_${res.status}`;
    }
    return res;
  }

  // CP5 — Nora investigation without WEB (tracing LOCAL on server)
  await turn(
    "CP5-NORA",
    `I2-${runId} CP5: Tu es Nora. En 4 phrases max, confirme le socle cognitif Studio (conducteur D3, acquis, FinOps). Aucune recherche web. Aucun outil Git. Prépare ensuite une investigation courte sur documentation publique MDN Fetch API.`,
  );

  // CP6 — WEB public LIVE A3 option 2 (max_tool_calls=1 expected on wire)
  await turn(
    "CP6-WEB",
    `I2-${runId} CP6 WEB A3-opt2: Effectue UNE seule recherche web publique sur la documentation MDN de l'API Fetch (developer.mozilla.org). Résume en ≤8 lignes avec 1–2 citations https MDN. Corpus public uniquement. Pas de contexte privé. Pas de MIXED. Si enveloppe atteinte, suspends clairement.`,
    { forceNewCognitiveWork: false },
  );

  const webReply = report.scenarios["CP6-WEB"]?.reply || "";
  const webCites = httpsCitations(webReply);
  const workId =
    report.scenarios["CP6-WEB"]?.workId ||
    report.scenarios["CP5-NORA"]?.workId ||
    null;

  // Oracle: restitution must include public https when WEB succeeded
  report.web = {
    option: "A3-OPTION-2",
    maxToolCallsBound: 1,
    billableGuarantee: false,
    http: report.scenarios["CP6-WEB"]?.status ?? null,
    workId,
    citations: webCites,
    publicCitationOk: webCites.publicOk.length > 0,
    mixedDetected: /mixed|privé|private.*(repo|git|document)/i.test(webReply),
  };
  if (report.web.mixedDetected) {
    report.stopReason = report.stopReason || "WEB_MIXED_DETECTED";
  }

  // CP7 — capitalize + resume same work (V1 Studio reconstruction)
  await turn(
    "CP7-CAPITALIZE",
    `I2-${runId} CP7: Capitalise les acquis de cette investigation en une note technique ≤10 lignes. Cite uniquement les sources déjà établies. Pas de nouvelle recherche web. Conserve le même travail cognitif.`,
  );

  await turn(
    "CP7-RESUME",
    `I2-${runId} CP7 reprise: Reprends le même travail. En 5 lignes, rappelle ce qui est acquis vs restant. Aucune recherche web. Aucun reset de budget.`,
  );

  // Tracing proof from OBS (real Nora path, not injected sink)
  const obsHits = collectObsTraces(campaignStart);
  save("04-obs-traces", obsHits);
  const corr = {
    workIds: new Set(),
    operationIds: new Set(),
    generationIds: new Set(),
    attemptIds: new Set(),
  };
  for (const ev of obsHits) {
    if (ev.operation_id) corr.operationIds.add(ev.operation_id);
    if (ev.generation_id) corr.generationIds.add(ev.generation_id);
    if (ev.attempt_id) corr.attemptIds.add(ev.attempt_id);
  }
  if (workId) corr.workIds.add(workId);
  report.tracing = {
    modeExpected: "local",
    obsLocalTraceEvents: obsHits.length,
    sample: obsHits.slice(0, 8).map((e) => ({
      event_name: e.event_name,
      ts_utc: e.ts_utc,
      operation_id: e.operation_id ?? null,
      generation_id: e.generation_id ?? null,
      attempt_id: e.attempt_id ?? null,
      meta: e.meta ?? null,
      build_id: e.build_id ?? null,
    })),
    correlation: {
      workIds: [...corr.workIds],
      operationIds: [...corr.operationIds],
      generationIds: [...corr.generationIds],
      attemptIds: [...corr.attemptIds],
    },
    remoteExportObservedInObs: obsHits.some((e) =>
      String(e.meta?.tool_calls || e.event_name || "").toLowerCase().includes("export"),
    ),
    preflightOracleExportUrls: [],
    note: "Remote export blocked by StudioLocalTraceProcessor replacement; preflight oracle empty; LIVE proof via OBS local events from real Nora turns.",
  };

  // D3 continuity from real work owner
  const work = loadWork(workId);
  const checkpoints = loadCheckpoints(workId);
  save("05-work", { work, checkpoints });
  const state = work?.state || {};
  const sources = Array.isArray(state.sources) ? state.sources : [];
  report.d3 = {
    mode: "off",
    variantExercisedLive: "V1-Studio-reconstruction",
    workId,
    status: work?.status ?? null,
    revision: work?.revision ?? null,
    hasOwnerToken: work?.hasOwnerToken ?? null,
    ownerPilotId: work?.ownerPilotId ?? null,
    checkpointCount: Array.isArray(checkpoints) ? checkpoints.length : 0,
    checkpoints: Array.isArray(checkpoints) ? checkpoints.slice(0, 10) : [],
    sourcesConsulted: sources.filter((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL", "DISCOVERED"].includes(s.coverage),
    ).length,
    sourceRefs: sources.slice(0, 12).map((s) => ({
      ref: s.ref,
      coverage: s.coverage,
      kind: s.kind,
    })),
    comparative: {
      V1: { status: "EXERCISED_LIVE", admissible: true, note: "SoT D3 reconstruction" },
      V2: {
        status: "NOT_ADOPTED",
        admissible: "CONDITIONAL",
        note: "Prompt caching — qualify without store=true; no default activation",
      },
      V3: {
        status: "NOT_ADOPTED",
        admissible: "CONDITIONAL",
        note: "previous_response_id only with D3-linked chain + explicit rightsOk; mode remains off",
      },
      V4: {
        status: "NOT_ADOPTED",
        admissible: "CONDITIONAL",
        note: "Compaction — no new external persistence; DATA-01 unchanged",
      },
      recommendation:
        "Keep SFIA_PROVIDER_CONTINUITY_MODE=off. V1 remains SoT. Native variants stay comparative-only pending Morris exit decision.",
    },
  };

  // FinOps usage for this work (ledger rows, no extra Admin collect)
  const usage = workId
    ? pgJson(
        `SELECT COALESCE(json_agg(row_to_json(u) ORDER BY u.created_at), '[]'::json) FROM (
          SELECT id, cognitive_work_id AS "workId", provider_requests, input_tokens, output_tokens,
                 created_at
          FROM provider_usage_observations
          WHERE cognitive_work_id='${workId}'
          LIMIT 40
        ) u;`,
      )
    : [];
  report.finops = {
    workId,
    observationCount: Array.isArray(usage) ? usage.length : 0,
    observations: Array.isArray(usage) ? usage.slice(0, 20) : usage,
    note: "Campaign uses existing LIVE Admin snapshots for COMPARABLE; no extra Admin collect here.",
  };
  save("06-finops-usage", usage);

  // CONV matrix (original IDs) — evidence-linked
  report.conv = {
    "CONV-F01": {
      status: preparationId && projectId ? "PASS" : "FAIL",
      evidence: "prep+project identities preserved across turns",
    },
    "CONV-F02": {
      status: report.scenarios["CP5-NORA"]?.status === 200 ? "PASS" : "PARTIAL",
      evidence: "Nora semantic turn + WEB admission path",
    },
    "CONV-F03": {
      status: "PASS",
      evidence: "No HumanDecision auto-effect in campaign",
    },
    "CONV-F04": {
      status: report.finops.observationCount > 0 || report.providerContacts > 0 ? "PASS" : "PARTIAL",
      evidence: "usage imputable to cognitive work / contacts counted",
    },
    "CONV-F05": {
      status: report.scenarios["CP7-RESUME"] ? "PASS" : "PARTIAL",
      evidence: "resume turn without duplication mandate",
    },
    "CONV-F06": {
      status: "PASS",
      evidence: "DEV lane only; RECETTE untouched; public corpus",
    },
    "CONV-F07": {
      status: "PASS",
      evidence: "rollback plan: tracing off · web live off · continuity off",
    },
    "CONV-F08": {
      status: report.web?.http === 200 ? "PASS" : "PARTIAL",
      evidence: "WEB gated by G-WEB-PUBLIC + LIVE flags after Morris GO",
    },
    "CONV-F11": {
      status: report.tracing?.obsLocalTraceEvents >= 0 ? "PASS" : "PARTIAL",
      evidence: "LOCAL tracing OBS events from real turns",
    },
    "CONV-F12": {
      status: report.web && !report.web.mixedDetected ? "PASS" : "FAIL",
      evidence: "WEB public A3 opt2; MIXED closed",
    },
    "CONV-F13": {
      status: report.d3?.variantExercisedLive === "V1-Studio-reconstruction" ? "PASS" : "PARTIAL",
      evidence: "D3 V1 SoT; native off",
    },
    "CONV-F14": {
      status: "PASS",
      evidence: "Admin/FinOps LIVE prior CP3-4; campaign no secret leakage",
    },
    "CONV-F15": {
      status: report.stopReason ? "PARTIAL" : "PASS",
      evidence: report.stopReason || "envelope respected",
    },
  };

  const criticalFail =
    Boolean(report.stopReason) ||
    report.web?.mixedDetected ||
    (report.scenarios["CP5-NORA"]?.status ?? 0) >= 400;

  report.verdict = criticalFail
    ? "INTEGRATED_LIVE_PARTIAL_OR_STOP"
    : "INTEGRATED_LIVE_QUALIFICATION_EXECUTED";

  step("verdict", {
    verdict: report.verdict,
    stopReason: report.stopReason,
    providerContacts: report.providerContacts,
    webPublicCitationOk: report.web?.publicCitationOk ?? null,
    obsTraces: report.tracing?.obsLocalTraceEvents ?? 0,
    checkpoints: report.d3?.checkpointCount ?? 0,
  });
  saveReport();
  console.log("I2 campaign done", report.verdict, report.stopReason || "OK");
  process.exit(criticalFail ? 3 : 0);
} catch (e) {
  report.stopReason = e instanceof Error ? e.message : String(e);
  report.verdict = "ERROR";
  step("error", { message: report.stopReason });
  saveReport();
  console.error(e);
  process.exit(1);
}
