/**
 * Continue adaptive LIVE proofs after first multi-segment observation.
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const BASE = "http://127.0.0.1:3100";
const OUT = "/tmp/sfia-ml5-adaptive-proofs";
mkdirSync(OUT, { recursive: true });
const jar = { cookie: "" };

async function api(path, { method = "GET", body, timeoutMs = 1_800_000 } = {}) {
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
    for (const c of res.headers.getSetCookie?.() || []) {
      const part = c.split(";")[0];
      jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
    }
    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      json = { _raw: text.slice(0, 800) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}

function save(name, data) {
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
}
function log(n, d) {
  console.log(`[${n}]`, JSON.stringify(d).slice(0, 600));
}
function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  try {
    const raw = execSync(
      `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
      { encoding: "utf8", maxBuffer: 20_000_000 },
    ).trim();
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return raw;
    }
  } catch (e) {
    return { error: String(e.message || e) };
  }
}
function metrics(workId) {
  if (!workId) return null;
  const work = pg(
    `SELECT row_to_json(t) FROM (SELECT id, status, revision, interrupt_cause, objective, resources_json::json AS resources, state_json::json AS state, parent_work_id FROM cognitive_works WHERE id='${workId}') t;`,
  );
  if (!work || work.error) return { workId, error: work?.error || "missing" };
  const checkpoints = pg(
    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY revision),'[]'::json) FROM (SELECT revision, cause, generation_id, created_at FROM cognitive_work_checkpoints WHERE work_id='${workId}') t;`,
  );
  const st = work.state || {};
  const sources = st.sources || [];
  const r = work.resources || {};
  return {
    workId,
    status: work.status,
    revision: work.revision,
    interruptCause: work.interrupt_cause,
    parentWorkId: work.parent_work_id,
    segmentCalls: r.segmentCalls,
    inputTokens: r.inputTokens,
    outputTokens: r.outputTokens,
    totalTokens: (r.inputTokens || 0) + (r.outputTokens || 0),
    limits: (r.limits || []).slice(-12),
    sourcesConsulted: sources.filter((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
    ).length,
    sourcesDiscovered: sources.filter((s) => s.coverage === "DISCOVERED").length,
    inventoryTotal: st.inventoryTotal ?? null,
    inventoryExamined: st.inventoryExamined ?? null,
    conclusions: st.conclusions || [],
    remainingWork: st.remainingWork || [],
    sourceRefs: sources.map((s) => ({ ref: s.ref, coverage: s.coverage, kind: s.kind })),
    checkpoints: Array.isArray(checkpoints) ? checkpoints : [],
  };
}

await api("/api/dev/auto-session", { method: "POST" });

async function waitIq(projectId) {
  for (let i = 0; i < 80; i++) {
    const r = await api(`/api/projects/${projectId}/initial-qualification/reconcile`, {
      method: "POST",
      timeoutMs: 90_000,
    });
    const st = r.json?.initialQualification?.status;
    if (st && !["PENDING", "RUNNING", "UNKNOWN"].includes(st)) return r.json.initialQualification;
    await new Promise((r) => setTimeout(r, 1500));
  }
  return null;
}

async function newProject(name, intention) {
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  const preparationId = prep.json.preparationId;
  let g = await api(`/api/preparations/${preparationId}`);
  let rev = g.json.preparation.creationRevision;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: { previewName: name, previewSummary: intention, expectedCreationRevision: rev },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = g.json.preparation.creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: name,
      idempotencyKey: `adaptive2-${randomUUID()}`,
      previewSummary: intention,
    },
  });
  const projectId = created.json.projectId;
  const iq = await waitIq(projectId);
  log("qualification", { projectId, status: iq?.status });
  return { preparationId, projectId, iq };
}

async function msg(preparationId, content, opts = {}) {
  return api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: {
      content,
      clientTurnKey: `adaptive2-${randomUUID()}`,
      ...(opts.forceNew ? { forceNewCognitiveWork: true } : {}),
      ...(opts.workId ? { cognitiveWorkId: opts.workId } : {}),
    },
    timeoutMs: opts.timeoutMs ?? 1_800_000,
  });
}

async function attachGit(projectId) {
  return api(`/api/projects/${projectId}/git/links`, {
    method: "POST",
    body: { repositoryId: "arepo_60b78cda-7450-47fd-accd-3525c2e53a62" },
  });
}

// ---- S1 simple on fresh project after IQ terminal ----
if (process.env.SFIA_SKIP_S1 !== "1") {
  const { preparationId, projectId } = await newProject(
    "Adaptive S1b Simple",
    "Projet fictif DEV — réponses conversationnelles simples sans investigation Git.",
  );
  const t0 = Date.now();
  const res = await msg(
    preparationId,
    "En une phrase, qu'est-ce qu'un checkpoint cognitif dans Studio Next ?",
    { forceNew: true, timeoutMs: 180_000 },
  );
  const workId = res.json?.cognitiveWork?.workId || null;
  const out = {
    http: res.status,
    status: res.json?.status,
    workId,
    segmentsRun: res.json?.cognitiveWork?.segmentsRun,
    suspended: res.json?.cognitiveWork?.suspended,
    durationMs: Date.now() - t0,
    metrics: metrics(workId),
    preview: (res.json?.messages || []).slice(-1)[0]?.content?.slice(0, 300) ||
      res.json?.error ||
      null,
  };
  save("s1b-simple", { out, raw: res.json });
  log("s1b_simple", out);
} else {
  log("s1b_simple", { skipped: true, workId: "cgw_a177e731-63c2-4360-a020-b6d12ef25901" });
}

// ---- S2 note from prior acquis (same prep as multi-segment analysis) ----
{
  const preparationId = "prep_85f051f7-0c6e-4649-91fb-f313c840b40c";
  const priorWorkId = "cgw_ef647d73-cad1-4dcc-b2eb-926e7e144d90";
  const t0 = Date.now();
  const res = await msg(
    preparationId,
    "Prépare une note de recommandation à partir de cette analyse. Crée le document D4 exploitable.",
    { forceNew: false, timeoutMs: 600_000 },
  );
  const workId = res.json?.cognitiveWork?.workId || null;
  const out = {
    http: res.status,
    status: res.json?.status,
    workId,
    priorWorkId,
    segmentsRun: res.json?.cognitiveWork?.segmentsRun,
    documentSave: res.json?.documentSave || null,
    pendingCandidate: res.json?.pendingDocumentCandidate
      ? {
          title: res.json.pendingDocumentCandidate.title,
          contentSha256: res.json.pendingDocumentCandidate.contentSha256,
        }
      : null,
    attachment: res.json?.cognitiveAttachmentReason || null,
    durationMs: Date.now() - t0,
    metrics: metrics(workId),
    priorMetrics: metrics(priorWorkId),
  };
  save("s2b-note", { out, raw: res.json });
  log("s2b_note", out);
}

// ---- S3 exhaustive 50 ----
{
  const inventory = readFileSync(`${OUT}/inventory-50-paths.txt`, "utf8")
    .trim()
    .split("\n")
    .filter(Boolean);
  const { preparationId, projectId } = await newProject(
    "Adaptive S3b Exhaustive50",
    "Examiner intégralement un périmètre Git de 50 sources et produire une synthèse structurée.",
  );
  await attachGit(projectId);
  const prompt = [
    "Examine intégralement les 50 documents de ce périmètre Git Chantiers360 (lecture seule).",
    "Périmètre fixé à l'avance :",
    inventory.join("\n"),
    "",
    "Identifie les responsabilités, les règles métier, les décisions, les dépendances et les contradictions.",
    "Produis une synthèse complète avec les références pertinentes.",
    "Couvre effectivement ces 50 sources ; signale celles qui sont inaccessibles.",
  ].join("\n");
  const t0 = Date.now();
  const res = await msg(preparationId, prompt, {
    forceNew: true,
    timeoutMs: 1_800_000,
  });
  const workId = res.json?.cognitiveWork?.workId || null;
  const out = {
    http: res.status,
    status: res.json?.status,
    workId,
    segmentsRun: res.json?.cognitiveWork?.segmentsRun,
    suspended: res.json?.cognitiveWork?.suspended,
    suspendReason: res.json?.cognitiveWork?.suspendReason,
    durationMs: Date.now() - t0,
    metrics: metrics(workId),
  };
  save("s3b-long", { out, raw: res.json });
  log("s3b_long", out);
}

console.log("DONE");
