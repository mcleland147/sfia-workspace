/**
 * ML5 adaptive continuation — three discriminating LIVE scenarios (DEV only).
 * Product API path only — no injected checkpoints / no direct model calls.
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const BASE = process.env.SFIA_ADAPTIVE_BASE || "http://127.0.0.1:3100";
const OUT = process.env.SFIA_ADAPTIVE_OUT || "/tmp/sfia-ml5-adaptive-proofs";
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

function loadWorkMetrics(workId) {
  if (!workId) return null;
  const work = pgJson(
    `SELECT row_to_json(t) FROM (
      SELECT id, status, revision, interrupt_cause AS "interruptCause",
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
    objective: work?.objective,
    resources,
    inventoryTotal: state.inventoryTotal ?? null,
    inventoryExamined: state.inventoryExamined ?? null,
    sourcesConsulted: sources.filter((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
    ).length,
    sourcesDiscovered: sources.filter((s) => s.coverage === "DISCOVERED").length,
    sourceRefs: sources.map((s) => ({
      ref: s.ref,
      coverage: s.coverage,
      kind: s.kind,
    })),
    conclusions: state.conclusions || [],
    remainingWork: state.remainingWork || [],
    checkpoints: checkpoints || [],
    checkpointCount: Array.isArray(checkpoints) ? checkpoints.length : 0,
  };
}

const report = {
  startedAt: new Date().toISOString(),
  base: BASE,
  steps: [],
  inventory: null,
  scenarios: {},
};
function step(name, data) {
  report.steps.push({ name, at: new Date().toISOString(), ...data });
  console.log(`[${name}]`, JSON.stringify(data).slice(0, 500));
}

function summarizeTurn(json, httpStatus = null) {
  const cw = json.cognitiveWork || json.conductor || {};
  const inv = cw.investigation || json.investigation || {};
  const resources = cw.resources || {};
  const lastMsg =
    (json.messages || []).slice(-1)[0] ||
    (json.assistantMessage ? { content: json.assistantMessage } : null);
  return {
    httpStatus: httpStatus ?? json.httpStatus ?? null,
    apiError: json.error || null,
    replyStatus: json.replyStatus || json.noraStatus || json.status,
    workId: cw.workId || cw.id || null,
    revision: cw.revision ?? null,
    segmentsRun: cw.segmentsRun ?? null,
    suspended: cw.suspended ?? null,
    suspendReason: cw.suspendReason ?? null,
    inputTokens: resources.inputTokens ?? null,
    outputTokens: resources.outputTokens ?? null,
    totalTokens:
      (resources.inputTokens ?? 0) + (resources.outputTokens ?? 0) || null,
    segmentCalls: resources.segmentCalls ?? null,
    cacheTokens: resources.cacheTokens ?? null,
    limits: (resources.limits || []).slice(-12),
    sourcesConsulted: (inv.sources || []).filter((s) =>
      ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
    ).length,
    sourcesDiscovered: (inv.sources || []).filter((s) => s.coverage === "DISCOVERED")
      .length,
    inventoryTotal: inv.inventoryTotal ?? null,
    inventoryExamined: inv.inventoryExamined ?? null,
    conclusions: (inv.conclusions || []).length,
    remainingWork: inv.remainingWork || [],
    parentWorkHint: cw.parentWorkId || null,
    attachmentReason: json.cognitiveAttachmentReason || null,
    documentSave: json.documentSave || null,
    contentPreview: (lastMsg?.content || json.content || "").slice(0, 400),
  };
}

await api("/api/dev/auto-session", { method: "POST" });
step("auth", { ok: true });

async function waitQualificationTerminal(projectId, { timeoutMs = 120_000 } = {}) {
  const started = Date.now();
  let last = null;
  while (Date.now() - started < timeoutMs) {
    const r = await api(
      `/api/projects/${projectId}/initial-qualification/reconcile`,
      { method: "POST", timeoutMs: 60_000 },
    );
    last = r.json?.initialQualification || r.json;
    const status = last?.status;
    if (status && !["PENDING", "RUNNING", "UNKNOWN"].includes(status)) {
      return last;
    }
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }
  return last;
}

async function newProject(name, intention) {
  const intentionText =
    intention ||
    "Analyser et documenter les mécanismes métier d'un dépôt Git autorisé, puis produire des notes de recommandation actionnables.";
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  const preparationId = prep.json.preparationId;
  let g = await api(`/api/preparations/${preparationId}`);
  let rev = g.json.preparation.creationRevision;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: name,
      previewSummary: intentionText,
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = g.json.preparation.creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: name,
      idempotencyKey: `adaptive-${randomUUID()}`,
      previewSummary: intentionText,
    },
  });
  const projectId = created.json.projectId;
  const iq = await waitQualificationTerminal(projectId);
  step("qualification", {
    projectId,
    status: iq?.status,
    phase: iq?.phase,
    composerLocked: iq?.composerLocked,
  });
  return { preparationId, projectId, iq };
}

async function msg(preparationId, content, opts = {}) {
  return api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: {
      content,
      clientTurnKey: `adaptive-${randomUUID()}`,
      ...(opts.forceNew ? { forceNewCognitiveWork: true } : {}),
      ...(opts.workId ? { cognitiveWorkId: opts.workId } : {}),
    },
    timeoutMs: opts.timeoutMs ?? 1_800_000,
  });
}

const REPO_ID =
  process.env.SFIA_CHANTIERS360_REPO_ID ||
  "arepo_60b78cda-7450-47fd-accd-3525c2e53a62";

async function ensureGitLinked(projectId) {
  const links = await api(`/api/projects/${projectId}/git/links`);
  save(`git-links-before-${projectId}`, links.json);
  const attach = await api(`/api/projects/${projectId}/git/links`, {
    method: "POST",
    body: { repositoryId: REPO_ID },
  });
  save(`git-attach-${projectId}`, attach.json);
  const after = await api(`/api/projects/${projectId}/git/links`);
  save(`git-links-after-${projectId}`, after.json);
  return { attach: attach.json, links: after.json };
}

// ---------- Inventory BEFORE scenarios (authorized Chantiers360 corpus) ----------
{
  const invPath = `${OUT}/inventory-50-paths.txt`;
  let paths = [];
  try {
    paths = readFileSync(invPath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean);
  } catch {
    paths = [];
  }
  if (paths.length < 50) {
    try {
      const raw = execSync(
        `gh api "repos/mcleland147/chantiers360/git/trees/main?recursive=1" --jq '[.tree[] | select(.type=="blob") | .path | select(test("\\\\.(md|txt|ts|tsx|prisma|sql|yml|yaml|json)$";"i")) | select(test("package-lock|node_modules")|not)] | .[0:50] | .[]'`,
        { encoding: "utf8" },
      );
      paths = raw.trim().split("\n").filter(Boolean);
      writeFileSync(invPath, paths.join("\n") + "\n");
    } catch (e) {
      step("inventory_error", { error: String(e) });
    }
  }
  report.inventory = {
    count: paths.length,
    establishedAt: new Date().toISOString(),
    source: "github-tree-main-predeclared",
    repository: "mcleland147/chantiers360",
    paths,
  };
  save("inventory-50", report.inventory);
  step("inventory", {
    count: paths.length,
    source: report.inventory.source,
    sample: paths.slice(0, 5),
  });
  if (paths.length < 50) {
    console.error("HARD STOP: inventory < 50");
    process.exit(2);
  }
}

// ========== SCENARIO 1 — simple ==========
{
  const { preparationId, projectId } = await newProject(
    "Adaptive S1 Simple",
    "Projet fictif DEV pour valider une demande conversationnelle simple sans investigation Git.",
  );
  const t0 = Date.now();
  const res = await msg(
    preparationId,
    "En une phrase, qu'est-ce qu'un checkpoint cognitif dans Studio Next ?",
    { forceNew: true, timeoutMs: 180_000 },
  );
  const summary = {
    ...summarizeTurn(res.json, res.status),
    durationMs: Date.now() - t0,
  };
  const metrics = loadWorkMetrics(summary.workId);
  save("s1-simple", { summary, metrics, raw: res.json });
  report.scenarios.s1 = { preparationId, projectId, summary, metrics };
  step("s1_simple", { ...summary, metrics });
}

// ========== SCENARIO 2 — investigation + note ==========
{
  const { preparationId, projectId } = await newProject(
    "Adaptive S2 Chantiers360",
    "Analyser les conflits de planning Chantiers360 et produire une note de recommandation transposable.",
  );
  await ensureGitLinked(projectId);

  const t0 = Date.now();
  const analysis = await msg(
    preparationId,
    "Analyse les mécanismes de gestion des conflits de planning dans Chantiers360. Examine les spécifications, le code et les tests, puis identifie les approches transposables à une petite application de réservation.",
    { forceNew: true, timeoutMs: 1_200_000 },
  );
  const analysisSummary = {
    ...summarizeTurn(analysis.json, analysis.status),
    durationMs: Date.now() - t0,
  };
  const analysisMetrics = loadWorkMetrics(analysisSummary.workId);
  save("s2-analysis", {
    summary: analysisSummary,
    metrics: analysisMetrics,
    raw: analysis.json,
  });
  step("s2_analysis", { ...analysisSummary, metrics: analysisMetrics });

  const t1 = Date.now();
  const note = await msg(
    preparationId,
    "Prépare une note de recommandation à partir de cette analyse. Crée le document D4.",
    { forceNew: false, timeoutMs: 600_000 },
  );
  const noteSummary = {
    ...summarizeTurn(note.json, note.status),
    durationMs: Date.now() - t1,
    priorWorkId: analysisSummary.workId,
  };
  const noteMetrics = loadWorkMetrics(noteSummary.workId);
  save("s2-note", { summary: noteSummary, metrics: noteMetrics, raw: note.json });
  step("s2_note", { ...noteSummary, metrics: noteMetrics });
  report.scenarios.s2 = {
    preparationId,
    projectId,
    analysis: analysisSummary,
    analysisMetrics,
    note: noteSummary,
    noteMetrics,
  };
}

// ========== SCENARIO 3 — exhaustive 50 sources ==========
{
  const { preparationId, projectId } = await newProject(
    "Adaptive S3 Exhaustive50",
    "Examiner intégralement un périmètre Git de 50 sources et produire une synthèse structurée avec références.",
  );
  await ensureGitLinked(projectId);

  const inventoryList = (report.inventory?.paths || []).join("\n");
  const prompt = [
    "Examine intégralement les 50 documents de ce périmètre Git Chantiers360 (lecture seule).",
    "Périmètre fixé à l'avance (ne pas en inventer d'autres pour remplacer) :",
    inventoryList,
    "",
    "Identifie les responsabilités, les règles métier, les décisions, les dépendances et les contradictions.",
    "Produis une synthèse complète avec les références pertinentes.",
    "Couvre effectivement ces 50 sources ; signale celles qui sont inaccessibles.",
  ].join("\n");

  const t0 = Date.now();
  const longRun = await msg(preparationId, prompt, {
    forceNew: true,
    timeoutMs: 1_800_000,
  });
  const longSummary = {
    ...summarizeTurn(longRun.json, longRun.status),
    durationMs: Date.now() - t0,
  };
  const longMetrics = loadWorkMetrics(longSummary.workId);
  save("s3-long", { summary: longSummary, metrics: longMetrics, raw: longRun.json });
  step("s3_long", { ...longSummary, metrics: longMetrics });
  report.scenarios.s3 = {
    preparationId,
    projectId,
    summary: longSummary,
    metrics: longMetrics,
  };
}

report.finishedAt = new Date().toISOString();
save("campaign-report", report);
writeFileSync(`${OUT}/campaign-report.md`, [
  "# ML5 Adaptive LIVE Campaign",
  "",
  `- Started: ${report.startedAt}`,
  `- Finished: ${report.finishedAt}`,
  `- Inventory: ${report.inventory?.count} (${report.inventory?.source})`,
  "",
  "## S1 Simple",
  "```json",
  JSON.stringify(report.scenarios.s1?.summary, null, 2),
  "```",
  "",
  "## S2 Analysis",
  "```json",
  JSON.stringify(report.scenarios.s2?.analysis, null, 2),
  "```",
  "",
  "## S2 Note",
  "```json",
  JSON.stringify(report.scenarios.s2?.note, null, 2),
  "```",
  "",
  "## S3 Long",
  "```json",
  JSON.stringify(report.scenarios.s3?.summary, null, 2),
  "```",
].join("\n"));

console.log("DONE", OUT);
process.exit(0);
