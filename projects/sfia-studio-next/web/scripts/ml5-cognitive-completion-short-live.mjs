/**
 * ML5 cognitive completion — ONE short LIVE investigation (3–5 Git files) + note-from-acquis.
 * DEV :3100 only. Does NOT relaunch the 50-source campaign.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const BASE = process.env.SFIA_ADAPTIVE_BASE || "http://127.0.0.1:3100";
const OUT = process.env.SFIA_ADAPTIVE_OUT || "/tmp/sfia-ml5-cognitive-completion-proofs";
mkdirSync(OUT, { recursive: true });

const CORPUS = [
  "README.md",
  "SFG - Projet Chantiers360.txt",
  "DAA - Chantiers360.txt",
  "backend/src/auth/constants/api-roles.ts",
  "Compte rendu - Validation du périmètre fonctionnel.txt",
];

const REPO_ID = "arepo_60b78cda-7450-47fd-accd-3525c2e53a62";
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
      json = { _raw: text.slice(0, 1200) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}

function save(name, data) {
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
}

function pgJson(sql) {
  try {
    const raw = execSync(
      `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(sql)}`,
      { encoding: "utf8", maxBuffer: 20_000_000 },
    ).trim();
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return raw;
    }
  } catch (e) {
    return { error: String(e) };
  }
}

function metrics(workId) {
  if (!workId) return null;
  const work = pgJson(
    `SELECT row_to_json(t) FROM (
      SELECT id, status, revision, interrupt_cause AS "interruptCause",
             parent_work_id AS "parentWorkId",
             objective, resources_json::json AS resources,
             state_json::json AS state, production_json::json AS production
      FROM cognitive_works WHERE id='${workId}'
    ) t;`,
  );
  const checkpoints = pgJson(
    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY revision), '[]'::json) FROM (
      SELECT id, revision, cause, created_at AS "createdAt"
      FROM cognitive_work_checkpoints WHERE work_id='${workId}'
    ) t;`,
  );
  const state = work?.state || {};
  const resources = work?.resources || {};
  const sources = state.sources || [];
  return {
    workId,
    status: work?.status,
    revision: work?.revision,
    interruptCause: work?.interruptCause,
    parentWorkId: work?.parentWorkId ?? null,
    objective: work?.objective,
    resources,
    inventoryTotal: state.inventoryTotal ?? null,
    inventoryExamined: state.inventoryExamined ?? null,
    inventoryPartial: state.inventoryPartial ?? null,
    inventoryDenied: state.inventoryDenied ?? null,
    inventoryKeys: state.inventoryKeys ?? null,
    investigationMode: state.investigationMode ?? null,
    sufficiency: state.sufficiency ?? null,
    sources: sources.map((s) => ({
      ref: s.ref,
      coverage: s.coverage,
      kind: s.kind,
    })),
    conclusions: state.conclusions || [],
    remainingWork: state.remainingWork || [],
    productionKind: work?.production?.kind ?? null,
    productionStatus: work?.production?.status ?? null,
    contentPreview: (work?.production?.contentMarkdown || "").slice(0, 1200),
    checkpoints: checkpoints || [],
    checkpointCount: Array.isArray(checkpoints) ? checkpoints.length : 0,
  };
}

async function waitIq(projectId, { timeoutMs = 120_000 } = {}) {
  const started = Date.now();
  let last = null;
  while (Date.now() - started < timeoutMs) {
    const r = await api(`/api/projects/${projectId}/initial-qualification/reconcile`, {
      method: "POST",
      timeoutMs: 60_000,
    });
    last = r.json?.initialQualification || r.json;
    if (last?.status && !["PENDING", "RUNNING", "UNKNOWN"].includes(last.status)) {
      return last;
    }
    await new Promise((r) => setTimeout(r, 1500));
  }
  return last;
}

const runId = randomUUID().slice(0, 8);
const projectName = `CogComplete Short ${runId}`;

await api("/api/dev/auto-session", { method: "POST" });
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
      "Examiner un petit périmètre Git, identifier règles et responsabilités, produire une synthèse.",
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
    idempotencyKey: `cog-short-${randomUUID()}`,
    previewSummary:
      "Examiner un petit périmètre Git, identifier règles et responsabilités, produire une synthèse.",
  },
});
const projectId = created.json.projectId;
if (!projectId) throw new Error(`create-project failed: ${JSON.stringify(created.json).slice(0, 600)}`);
const iq = await waitIq(projectId);
const gitLink = await api(`/api/projects/${projectId}/git/links`, {
  method: "POST",
  body: { repositoryId: REPO_ID },
});
if (gitLink.status >= 400) {
  throw new Error(`git link failed: ${JSON.stringify(gitLink.json).slice(0, 500)}`);
}

const investigatePrompt = [
  "Examine les documents et fichiers de ce périmètre, identifie les règles,",
  "les responsabilités et les éventuelles contradictions, puis fais-moi une synthèse.",
  "",
  "Périmètre fixé (révision du dépôt lié ; lecture seule) :",
  ...CORPUS,
  "",
  "Ne relance pas une campagne large. Couvre ce périmètre, puis livre la synthèse.",
].join("\n");

const t0 = Date.now();
const invRes = await api(`/api/preparations/${preparationId}/messages`, {
  method: "POST",
  body: {
    content: investigatePrompt,
    clientTurnKey: `cog-short-inv-${randomUUID()}`,
    forceNewCognitiveWork: true,
  },
  timeoutMs: 900_000,
});
const invWorkId = invRes.json?.cognitiveWork?.workId || null;
const investigation = {
  http: invRes.status,
  status: invRes.json?.status,
  workId: invWorkId,
  segmentsRun: invRes.json?.cognitiveWork?.segmentsRun,
  suspended: invRes.json?.cognitiveWork?.suspended,
  suspendReason: invRes.json?.cognitiveWork?.suspendReason,
  durationMs: Date.now() - t0,
  metrics: metrics(invWorkId),
  replyPreview: (invRes.json?.assistantMessage?.content || invRes.json?.content || "").slice(
    0,
    1500,
  ),
};
save("short-investigation", { investigation, corpus: CORPUS, projectId, preparationId, iq });
console.log("INVESTIGATION", JSON.stringify(investigation).slice(0, 1500));

const notePrompt =
  "Prépare une courte note à partir de cette analyse. Crée le document D4 exploitable. Réutilise les acquis déjà consolidés sans tout relire.";
const t1 = Date.now();
const noteRes = await api(`/api/preparations/${preparationId}/messages`, {
  method: "POST",
  body: {
    content: notePrompt,
    clientTurnKey: `cog-short-note-${randomUUID()}`,
  },
  timeoutMs: 600_000,
});
const noteWorkId = noteRes.json?.cognitiveWork?.workId || null;
const note = {
  http: noteRes.status,
  status: noteRes.json?.status,
  workId: noteWorkId,
  segmentsRun: noteRes.json?.cognitiveWork?.segmentsRun,
  suspended: noteRes.json?.cognitiveWork?.suspended,
  suspendReason: noteRes.json?.cognitiveWork?.suspendReason,
  documentSave: noteRes.json?.documentSave ?? null,
  pendingCandidate: noteRes.json?.pendingDocumentCandidate ?? null,
  durationMs: Date.now() - t1,
  metrics: metrics(noteWorkId),
  replyPreview: (noteRes.json?.assistantMessage?.content || noteRes.json?.content || "").slice(
    0,
    1200,
  ),
};
save("short-note-from-acquis", {
  note,
  priorWorkId: invWorkId,
  projectId,
  preparationId,
});
console.log("NOTE", JSON.stringify(note).slice(0, 1500));
console.log("DONE", OUT);
