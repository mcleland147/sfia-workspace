import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";
const BASE = "http://127.0.0.1:3100";
const OUT = "/tmp/sfia-ml5-adaptive-proofs";
mkdirSync(OUT, { recursive: true });
const jar = { cookie: "" };

async function api(path, { method = "GET", body, timeoutMs = 3_200_000 } = {}) {
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
function save(n, d) {
  writeFileSync(`${OUT}/${n}.json`, JSON.stringify(d, null, 2));
}
function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
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
}
function metrics(workId) {
  if (!workId) return null;
  const work = pg(
    `SELECT row_to_json(t) FROM (SELECT id, status, revision, interrupt_cause, objective, resources_json::json AS resources, state_json::json AS state, parent_work_id FROM cognitive_works WHERE id='${workId}') t;`,
  );
  const checkpoints = pg(
    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY revision),'[]'::json) FROM (SELECT revision, cause, generation_id, created_at FROM cognitive_work_checkpoints WHERE work_id='${workId}') t;`,
  );
  const st = work?.state || {};
  const sources = st.sources || [];
  const r = work?.resources || {};
  return {
    workId,
    status: work?.status,
    revision: work?.revision,
    interruptCause: work?.interrupt_cause,
    parentWorkId: work?.parent_work_id,
    segmentCalls: r.segmentCalls,
    inputTokens: r.inputTokens,
    outputTokens: r.outputTokens,
    totalTokens: (r.inputTokens || 0) + (r.outputTokens || 0),
    limits: (r.limits || []).slice(-16),
    sourcesConsulted: sources.filter((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
    ).length,
    sourcesDiscovered: sources.filter((s) => s.coverage === "DISCOVERED").length,
    inventoryTotal: st.inventoryTotal ?? null,
    inventoryExamined: st.inventoryExamined ?? null,
    conclusions: st.conclusions || [],
    remainingWork: st.remainingWork || [],
    sourceRefs: sources.map((s) => ({ ref: s.ref, coverage: s.coverage })),
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

const inventory = readFileSync(`${OUT}/inventory-50-paths.txt`, "utf8")
  .trim()
  .split("\n")
  .filter(Boolean);
console.log("inventory", inventory.length);

const runId = randomUUID().slice(0, 8);
const projectName = `Adaptive S3 ${runId} Exhaustive50`;
const prep = await api("/api/preparations", { method: "POST", body: {} });
const preparationId = prep.json.preparationId;
if (!preparationId) throw new Error(`prep failed: ${JSON.stringify(prep.json).slice(0, 400)}`);
let g = await api(`/api/preparations/${preparationId}`);
let rev = g.json.preparation.creationRevision;
await api(`/api/preparations/${preparationId}`, {
  method: "PATCH",
  body: {
    previewName: projectName,
    previewSummary:
      "Examiner intégralement 50 sources Git et produire une synthèse structurée avec références.",
    expectedCreationRevision: rev,
  },
});
g = await api(`/api/preparations/${preparationId}`);
rev = g.json.preparation.creationRevision;
const created = await api(`/api/preparations/${preparationId}/create-project`, {
  method: "POST",
  body: {
    expectedCreationRevision: rev,
    projectName,
    idempotencyKey: `s3c-${randomUUID()}`,
    previewSummary:
      "Examiner intégralement 50 sources Git et produire une synthèse structurée avec références.",
  },
});
const projectId = created.json.projectId;
console.log("create-project", created.status, created.json?.status || created.json, projectId);
if (!projectId) {
  throw new Error(`create-project missing projectId: ${JSON.stringify(created.json).slice(0, 800)}`);
}
const iq = await waitIq(projectId);
console.log("iq", iq?.status);
const gitLink = await api(`/api/projects/${projectId}/git/links`, {
  method: "POST",
  body: { repositoryId: "arepo_60b78cda-7450-47fd-accd-3525c2e53a62" },
});
console.log("git-link", gitLink.status, JSON.stringify(gitLink.json).slice(0, 300));
if (gitLink.status >= 400) {
  throw new Error(`git link failed: ${JSON.stringify(gitLink.json).slice(0, 500)}`);
}
// Confirm prep context sees the project (conversation bind).
const prepCtx = await api(`/api/preparations/${preparationId}`);
console.log(
  "prep-ctx",
  prepCtx.json?.project?.id || prepCtx.json?.preparation?.status,
  "convProject",
  prepCtx.json?.conversation?.projectId || null,
);

const prompt = [
  "Examine intégralement les 50 documents de ce périmètre Git Chantiers360 (lecture seule).",
  "Périmètre fixé à l'avance (ne pas en inventer d'autres pour remplacer) :",
  inventory.join("\n"),
  "",
  "Identifie les responsabilités, les règles métier, les décisions, les dépendances et les contradictions.",
  "Produis une synthèse complète avec les références pertinentes.",
  "Couvre effectivement ces 50 sources ; signale celles qui sont inaccessibles.",
  "Tant que la couverture inventaire est incomplète, continue automatiquement sans m'interrompre.",
].join("\n");

const t0 = Date.now();
const res = await api(`/api/preparations/${preparationId}/messages`, {
  method: "POST",
  body: {
    content: prompt,
    clientTurnKey: `s3c-${randomUUID()}`,
    forceNewCognitiveWork: true,
  },
    timeoutMs: 3_200_000,
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
save("s3c-long", { out, raw: res.json, inventoryCount: inventory.length });
console.log("s3c_long", JSON.stringify(out).slice(0, 1200));
console.log("DONE");
