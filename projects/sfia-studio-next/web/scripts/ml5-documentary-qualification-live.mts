/**
 * ML5 S5 — documentary LIVE qualification (DEV).
 * Envelope: ≤40 Responses (retries counted), ≤2M in / ≤200k out.
 * Policy: v0.2 explicit. WEB LIVE OFF.
 * Scenarios: PDF extract/cognitive, RoomBooking RB-27..31 borné, Terra High,
 *            StockTrack IT-06 revise oracle when reachable.
 */
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import { config } from "dotenv";
import path from "node:path";

config({ path: path.resolve(process.cwd(), ".env.local") });

process.env.STUDIO_LANE = "DEV";
process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
process.env.SFIA_COGNITIVE_ADMISSION_MODE =
  process.env.SFIA_COGNITIVE_ADMISSION_MODE || "operational";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";

const BASE = process.env.SFIA_QUAL_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_QUAL_OUT ||
  path.resolve(
    process.cwd(),
    "../../../.tmp-sfia-review/documentary-qual-live-20261126",
  );
mkdirSync(OUT, { recursive: true });

const ENVELOPE = {
  maxResponses: 40,
  maxInputTokens: 2_000_000,
  maxOutputTokens: 200_000,
  maxInputPerRequest: 100_000,
  maxOutputPerRequest: 10_000,
};

const key = (process.env.OPENAI_API_KEY || "").trim();
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
const expectedFp = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "")
  .trim()
  .toLowerCase();
const forbiddenFp = (process.env.SFIA_OPENAI_FORBIDDEN_KEY_FP || "")
  .trim()
  .toLowerCase();

type Ledger = {
  startedAt: string;
  finishedAt: string | null;
  policy: string;
  keyFingerprint: string;
  envelope: typeof ENVELOPE;
  responsesAttempted: number;
  inputTokens: number;
  outputTokens: number;
  estimatedCostUsd: number;
  stopReason: string | null;
  preconditions: Record<string, unknown>;
  scenarios: Array<Record<string, unknown>>;
};

const ledger: Ledger = {
  startedAt: new Date().toISOString(),
  finishedAt: null,
  policy: "v0.2",
  keyFingerprint: fp,
  envelope: ENVELOPE,
  responsesAttempted: 0,
  inputTokens: 0,
  outputTokens: 0,
  estimatedCostUsd: 0,
  stopReason: null,
  preconditions: {},
  scenarios: [],
};

function save() {
  writeFileSync(
    path.join(OUT, "qualification-ledger.json"),
    JSON.stringify(ledger, null, 2),
  );
}

function canEmit(reserve = 1): boolean {
  if (ledger.responsesAttempted + reserve > ENVELOPE.maxResponses) return false;
  if (ledger.inputTokens >= ENVELOPE.maxInputTokens) return false;
  if (ledger.outputTokens >= ENVELOPE.maxOutputTokens) return false;
  return true;
}

/**
 * Reserve provider attempt slots BEFORE emission (retries/segments included).
 * Reconcile afterward with observed provider_requests — never under-count.
 */
function reserveBeforeEmit(slots: number): boolean {
  if (!canEmit(slots)) return false;
  ledger.responsesAttempted += slots;
  return true;
}

function reconcileAfterEmit(reserved: number, observedRequests: number) {
  const actual = Math.max(1, observedRequests || 1);
  const delta = actual - reserved;
  if (delta > 0) {
    if (!canEmit(delta)) {
      ledger.stopReason =
        ledger.stopReason || `ENVELOPE_EXCEEDED_AFTER_EMIT +${delta}`;
    }
    ledger.responsesAttempted += delta;
  } else if (delta < 0) {
    // Release unused reservation.
    ledger.responsesAttempted = Math.max(0, ledger.responsesAttempted + delta);
  }
}

const jar = { cookie: "" };
async function api(
  p: string,
  opts: { method?: string; body?: unknown; timeoutMs?: number } = {},
) {
  const res = await fetch(`${BASE}${p}`, {
    method: opts.method || "GET",
    headers: {
      ...(opts.body ? { "content-type": "application/json" } : {}),
      ...(jar.cookie ? { cookie: jar.cookie } : {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
    signal: AbortSignal.timeout(opts.timeoutMs ?? 900_000),
  });
  for (const c of res.headers.getSetCookie?.() || []) {
    const part = c.split(";")[0]!;
    jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
  }
  const text = await res.text();
  let json: Record<string, unknown> = {};
  try {
    json = JSON.parse(text) as Record<string, unknown>;
  } catch {
    json = { _raw: text.slice(0, 800) };
  }
  return { status: res.status, json, text };
}

function pgJson(sql: string): unknown {
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
    return { error: String(e).slice(0, 200) };
  }
}

function checkPreconditions(): boolean {
  const checks: Record<string, unknown> = {
    lane: process.env.STUDIO_LANE,
    policy: process.env.SFIA_COG_PROVISIONAL_POLICY,
    admission: process.env.SFIA_COGNITIVE_ADMISSION_MODE,
    webLive: process.env.SFIA_WEB_SEARCH_LIVE,
    webEnabled: process.env.SFIA_WEB_SEARCH_ENABLED,
    expectedFpPresent: Boolean(expectedFp),
    keyFpMatch: expectedFp === fp,
    forbiddenDistinct: Boolean(forbiddenFp) && forbiddenFp !== fp,
    base: BASE,
  };
  if (!key) {
    ledger.stopReason = "OPENAI_API_KEY_MISSING";
    ledger.preconditions = checks;
    save();
    return false;
  }
  if (!expectedFp || expectedFp !== fp) {
    ledger.stopReason = expectedFp ? "KEY_FP_MISMATCH" : "EXPECTED_KEY_FP_MISSING";
    ledger.preconditions = checks;
    save();
    return false;
  }
  if (process.env.SFIA_WEB_SEARCH_LIVE === "1") {
    ledger.stopReason = "WEB_LIVE_MUST_BE_OFF";
    ledger.preconditions = checks;
    save();
    return false;
  }
  if (process.env.SFIA_COG_PROVISIONAL_POLICY !== "v0.2") {
    ledger.stopReason = "POLICY_MUST_BE_V0_2";
    ledger.preconditions = checks;
    save();
    return false;
  }
  ledger.preconditions = { ...checks, ok: true };
  writeFileSync(
    path.join(OUT, "preconditions.json"),
    JSON.stringify(ledger.preconditions, null, 2),
  );
  return true;
}

function accumulateUsage(workId: string | null | undefined) {
  if (!workId) return { inTok: 0, outTok: 0, cost: 0, reqs: 0, rows: [] as unknown[] };
  const usage = pgJson(
    `SELECT COALESCE(json_agg(row_to_json(t)), '[]'::json) FROM ( SELECT operation, model_requested AS "modelRequested", effort_requested AS "effortRequested", model_applied AS "modelApplied", input_tokens AS "inputTokens", output_tokens AS "outputTokens", provider_requests AS "providerRequests", estimated_cost_usd AS "estimatedCostUsd", cost_coverage AS "costCoverage", segment_index AS "segmentIndex", created_at AS "createdAt" FROM provider_usage_observations WHERE cognitive_work_id='${workId}' ORDER BY created_at ) t;`,
  );
  const rows = Array.isArray(usage) ? usage : [];
  let inTok = 0;
  let outTok = 0;
  let cost = 0;
  let reqs = 0;
  for (const row of rows as Array<Record<string, unknown>>) {
    if (typeof row.inputTokens === "number") inTok += row.inputTokens as number;
    if (typeof row.outputTokens === "number") outTok += row.outputTokens as number;
    if (typeof row.estimatedCostUsd === "number")
      cost += row.estimatedCostUsd as number;
    if (typeof row.providerRequests === "number")
      reqs += row.providerRequests as number;
  }
  return { inTok, outTok, cost, reqs, rows };
}

function loadWork(workId: string | null | undefined) {
  if (!workId) return null;
  return pgJson(
    `SELECT row_to_json(t) FROM ( SELECT id, status, revision, resources_json::json AS resources, state_json::json AS state FROM cognitive_works WHERE id='${workId}' ) t;`,
  );
}

async function waitIq(projectId: string, timeoutMs = 180_000) {
  const start = Date.now();
  let last: unknown = null;
  while (Date.now() - start < timeoutMs) {
    const r = await api(
      `/api/projects/${projectId}/initial-qualification/reconcile`,
      { method: "POST", timeoutMs: 60_000 },
    );
    last =
      (r.json as { initialQualification?: unknown }).initialQualification ||
      r.json;
    const status = (last as { status?: string } | null)?.status;
    if (status && !["PENDING", "RUNNING", "UNKNOWN"].includes(status)) return last;
    await new Promise((r) => setTimeout(r, 1500));
  }
  return { status: "TIMEOUT", last };
}

async function postPrepMessage(input: {
  preparationId: string;
  content: string;
  label: string;
  cognitiveWorkId?: string | null;
  forceNew?: boolean;
}): Promise<Record<string, unknown> | null> {
  // Conservative pre-emission reservation (conductor segments + tool fan-out).
  const RESERVE_SLOTS = 6;
  if (!reserveBeforeEmit(RESERVE_SLOTS)) {
    ledger.stopReason = ledger.stopReason || `ENVELOPE_BEFORE ${input.label}`;
    return null;
  }
  const before = Date.now();
  const body: Record<string, unknown> = {
    content: input.content,
    clientTurnKey: `doc-${input.label}-${Date.now()}`,
  };
  if (input.forceNew) body.forceNewCognitiveWork = true;
  if (input.cognitiveWorkId) body.cognitiveWorkId = input.cognitiveWorkId;

  const r = await api(`/api/preparations/${input.preparationId}/messages`, {
    method: "POST",
    body,
    timeoutMs: 900_000,
  });
  const cw =
    ((r.json as { cognitiveWork?: Record<string, unknown> }).cognitiveWork ||
      (r.json as { conductor?: Record<string, unknown> }).conductor ||
      {}) as Record<string, unknown>;
  const workId = (cw.workId || cw.id || null) as string | null;
  const msgs = (r.json as { messages?: Array<{ content?: string }> }).messages;
  const reply =
    msgs?.slice(-1)[0]?.content ||
    String((r.json as { content?: string }).content || "");

  const usage = accumulateUsage(workId);
  reconcileAfterEmit(RESERVE_SLOTS, usage.reqs || 1);
  ledger.inputTokens += usage.inTok;
  ledger.outputTokens += usage.outTok;
  ledger.estimatedCostUsd += usage.cost;

  const work = loadWork(workId) as {
    resources?: Record<string, unknown>;
    state?: Record<string, unknown>;
    revision?: number;
    status?: string;
  } | null;

  const row = {
    id: input.label,
    path: "product",
    http: r.status,
    workId,
    revision: work?.revision ?? cw.revision ?? null,
    status: work?.status ?? null,
    durationMs: Date.now() - before,
    replyPreview: String(reply).slice(0, 800),
    replyFull: String(reply).slice(0, 24_000),
    usageRows: usage.rows,
    inputTokens: usage.inTok || null,
    outputTokens: usage.outTok || null,
    providerRequests: usage.reqs || null,
    estimatedCostUsd: usage.cost || null,
    modelRequested: work?.resources?.modelRequested ?? null,
    effortRequested: work?.resources?.effortRequested ?? null,
    proposedCognitiveModel: work?.state?.proposedCognitiveModel ?? null,
    proposedCognitiveEffort: work?.state?.proposedCognitiveEffort ?? null,
  };
  ledger.scenarios.push(row);
  save();
  console.log(
    `[${input.label}] http=${r.status} work=${workId} model=${row.modelRequested}@${row.effortRequested} attempted=${ledger.responsesAttempted}`,
  );
  if (!canEmit(1)) ledger.stopReason = ledger.stopReason || "ENVELOPE_REACHED";
  return row;
}

async function adapterCompare(input: {
  id: string;
  model: "gpt-6.1-terra" | "gpt-6.2-sol";
  effort: "medium" | "high";
  text: string;
}) {
  const ADAPTER_RESERVE = 3;
  if (ledger.stopReason || !reserveBeforeEmit(ADAPTER_RESERVE)) return;
  const prevMode = process.env.SFIA_COGNITIVE_ADMISSION_MODE;
  process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
  const { buildCognitivePolicy } = await import(
    "../src/domains/conversation/cognitive-policy.ts"
  );
  const { generateNoraReply } = await import(
    "../src/domains/conversation/nora-adapter.ts"
  );
  const { estimateCostUsd } = await import(
    "../src/domains/conversation/usage-accounting.ts"
  );
  const policy = buildCognitivePolicy(input.text, "OPERATIONAL_PROVISIONAL", {
    profileHint: "analyse",
    modelHint: input.model,
    effortHint: input.effort,
  });
  const started = Date.now();
  try {
    const result = await generateNoraReply({
      userText: input.text,
      contextSnippets: [
        "Qualification documentaire ML5 — WEB LIVE interdit.",
        "Cite pages PDF uniquement si le texte extrait est fourni ci-dessous.",
        "Réponds en français.",
      ],
      policyOverride: policy,
    });
    const inTok = result.usage?.inputTokens ?? 0;
    const outTok = result.usage?.outputTokens ?? 0;
    const reqs = result.usage?.providerRequests ?? 1;
    reconcileAfterEmit(
      ADAPTER_RESERVE,
      typeof reqs === "number" ? reqs : 1,
    );
    ledger.inputTokens += inTok;
    ledger.outputTokens += outTok;
    const e = estimateCostUsd(
      {
        inputTokens: inTok,
        outputTokens: outTok,
        cachedInputTokens: result.usage?.cachedInputTokens ?? null,
      },
      result.modelApplied && result.modelApplied !== "UNVERIFIED"
        ? result.modelApplied
        : policy.modelRequested,
      { modelAppliedUnverified: !result.modelApplied || result.modelApplied === "UNVERIFIED" },
    );
    if (typeof e.estimatedCostUsd === "number") {
      ledger.estimatedCostUsd += e.estimatedCostUsd;
    }
    ledger.scenarios.push({
      id: input.id,
      path: "adapter",
      modelRequested: policy.modelRequested,
      effortRequested: policy.effortRequested,
      modelApplied: result.modelApplied,
      status: result.status,
      replyFull: (result.content || "").slice(0, 24_000),
      replyPreview: (result.content || "").slice(0, 800),
      inputTokens: inTok,
      outputTokens: outTok,
      providerRequests: reqs,
      estimatedCostUsd: e.estimatedCostUsd,
      costCoverage: e.costCoverage,
      costLimits: e.limits,
      durationMs: Date.now() - started,
    });
    save();
    console.log(
      `[${input.id}] ${policy.modelRequested}@${policy.effortRequested} ${result.status} cost=${e.estimatedCostUsd}`,
    );
  } catch (err) {
    ledger.scenarios.push({
      id: input.id,
      error: String((err as Error)?.message ?? err).slice(0, 400),
    });
    save();
  } finally {
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = prevMode || "operational";
  }
}

async function main() {
  console.log("Documentary qualification start", { BASE, OUT, fp, policy: "v0.2" });
  if (!checkPreconditions()) {
    console.error("STOP preconditions", ledger.stopReason);
    process.exit(2);
  }

  // PDF fixture extract — deterministic runtime proof (not a Git LIVE claim).
  try {
    const { extractPdfText } = await import(
      "../src/domains/documents/pdf-extract-server.ts"
    );
    const bytes = new Uint8Array(
      readFileSync(path.resolve(process.cwd(), "tests/fixtures/ml5-sample.pdf")),
    );
    const pdf = await extractPdfText({
      bytes,
      identity: {
        provenance: "FIXTURE",
        sourceRef: "fixture:ml5-sample.pdf",
        versionToken: null,
        mimeClaimed: "application/pdf",
      },
      searchQuery: "contradiction",
    });
    ledger.scenarios.push({
      id: "PDF-fixture-extract",
      path: "runtime",
      ok: pdf.ok,
      ...(pdf.ok
        ? {
            pageCount: pdf.pageCount,
            pagesAvailable: pdf.pagesAvailable,
            searchHits: pdf.searchHits,
            fingerprint: pdf.fingerprint,
            sample: pdf.pages.map((p) => ({
              page: p.pageNumber,
              text: p.text.slice(0, 120),
            })),
          }
        : { reason: pdf.reasonCode, message: pdf.message }),
      note: "FIXTURE — proves parser/renderer path, not Git/WEB access frontier",
    });
    save();
  } catch (e) {
    ledger.scenarios.push({
      id: "PDF-fixture-extract",
      error: String((e as Error)?.message ?? e).slice(0, 300),
    });
    save();
  }

  const health = await api("/login").catch(() => ({ status: 0, json: {} }));
  ledger.preconditions = { ...ledger.preconditions, healthHttp: health.status };
  save();
  if (health.status < 200 || health.status >= 500) {
    ledger.stopReason = "DEV_HEALTH_FAIL";
    save();
    process.exit(2);
  }

  const auth = await api("/api/dev/auto-session", { method: "POST" });
  if (auth.status !== 200) {
    ledger.stopReason = `AUTO_SESSION_${auth.status}`;
    save();
    process.exit(2);
  }

  // --- S3 corpus (must exist before LIVE spend) ---
  const RB_PROJECT_ID =
    process.env.SFIA_QUAL_RB_PROJECT_ID ||
    "proj_896d204b-2f6f-4dd2-b4ff-1727469d0e52";
  const RB_PREP_ID =
    process.env.SFIA_QUAL_RB_PREP_ID ||
    "prep_0e1c005b-c62c-4e5f-9ede-884b837b407e";
  const ST_PROJECT_ID =
    process.env.SFIA_QUAL_ST_PROJECT_ID ||
    "proj_64691238-7d32-40e3-8e6f-bcd31363287e";
  const ST_PREP_ID =
    process.env.SFIA_QUAL_ST_PREP_ID ||
    "prep_11f71e3d-d053-4b9e-a62b-3ddd3ec1acfd";
  const ST_DOC_ID =
    process.env.SFIA_QUAL_ST_DOC_ID ||
    "doc_65200758-7b3c-40a8-9998-3d373b3aacc9";
  const GIT_PDF_PATH = "Diagramme BPMN_BatiNova.pdf";
  const GIT_REPO = "mcleland147/chantiers360";
  const GIT_COMMIT = "8c398c494dd918272aab5b2653777c6c21d2e76e";

  // Preflight: Git attach on RB project
  const rbGit = pgJson(
    `SELECT row_to_json(t) FROM (SELECT gl.status, ar.full_name FROM project_git_links gl JOIN authorized_repositories ar ON ar.id=gl.repository_id WHERE gl.project_id='${RB_PROJECT_ID}' AND gl.status='ATTACHED' LIMIT 1) t;`,
  ) as { status?: string; full_name?: string } | null;
  const stDoc = pgJson(
    `SELECT row_to_json(t) FROM (SELECT d.id, d.title, length(r.content_markdown) AS chars, (r.content_markdown ILIKE '%RM-02%' AND r.content_markdown ILIKE '%REC-03%') AS oracle_ok FROM documents d JOIN document_revisions r ON r.document_id=d.id WHERE d.id='${ST_DOC_ID}' AND r.status='AVAILABLE' ORDER BY r.revision_number DESC LIMIT 1) t;`,
  ) as { oracle_ok?: boolean; title?: string; chars?: number } | null;

  ledger.preconditions = {
    ...ledger.preconditions,
    rbProjectId: RB_PROJECT_ID,
    rbPrepId: RB_PREP_ID,
    rbGit,
    stProjectId: ST_PROJECT_ID,
    stPrepId: ST_PREP_ID,
    stDocId: ST_DOC_ID,
    stDoc,
    gitPdfPath: GIT_PDF_PATH,
    gitRepo: GIT_REPO,
    gitCommit: GIT_COMMIT,
  };
  save();

  if (!rbGit || rbGit.status !== "ATTACHED" || rbGit.full_name !== GIT_REPO) {
    ledger.stopReason = "RB_GIT_CORPUS_MISSING";
    save();
    process.exit(2);
  }
  if (!stDoc?.oracle_ok) {
    ledger.stopReason = "STOCKTRACK_V1_CORPUS_MISSING";
    save();
    process.exit(2);
  }

  const preparationId = RB_PREP_ID;
  const projectId = RB_PROJECT_ID;

  // RB-27/28 — real Git investigation (planning conflicts), not a hypothetical plan.
  let workId: string | null = null;
  if (!ledger.stopReason) {
    const a = await postPrepMessage({
      preparationId,
      label: "RB27-git-planning-investigation",
      forceNew: true,
      content: [
        "Approfondis les conflits de planning dans le dépôt Git déjà attaché (lecture seule).",
        "Lis réellement : evolutions/EVOL-002-planning-ouvriers.md,",
        "backend/src/common/rules/planning-conflicts.rules.ts et sa spec,",
        "backend/src/planning/planning.service.ts, planning.controller.ts,",
        "backend/prisma/migrations/0004_worker_planning/migration.sql,",
        "backend/test/planning.api.spec.ts et e2e/tests/recette/evol-002-planning.spec.ts.",
        "Consolide les conclusions sur chevauchement, 409, index vs exclusion, check-then-insert.",
        "Ne modifie aucun document. Pas de web. Cite chemins et commit consultés.",
      ].join(" "),
    });
    workId = (a?.workId as string) || null;
  }

  // RB-28 — reprise utile after first pass.
  if (!ledger.stopReason && canEmit(6)) {
    await postPrepMessage({
      preparationId,
      label: "RB28-resume-from-acquis",
      cognitiveWorkId: workId,
      content: [
        "Reprise : à partir des acquis déjà obtenus, complète uniquement le travail restant utile",
        "(tests d'intégration concurrent, garantie au point d'écriture). Ne relis pas à l'aveugle",
        "les sources déjà CONSULTED. Pas de mutation documentaire. Pas de web.",
      ].join(" "),
    });
  }

  // RB-29 — intention shift to read-only Git (viewer may stay open).
  if (!ledger.stopReason && canEmit(6)) {
    await postPrepMessage({
      preparationId,
      label: "RB29-intention-git-readonly",
      cognitiveWorkId: workId,
      content: [
        "Changement d'intention : consultation Git lecture seule uniquement.",
        "Identifie deux inspirations proportionnées dans le dépôt pour une note technique future,",
        "sans préparer de révision documentaire et sans mutation D4. Pas de web.",
      ].join(" "),
    });
  }

  // RB-30/31 — produce distinct technical note from acquis.
  if (!ledger.stopReason && canEmit(6)) {
    await postPrepMessage({
      preparationId,
      label: "RB31-technical-note-from-acquis",
      cognitiveWorkId: workId,
      content: [
        "À partir de l'analyse de conflits de planning déjà réalisée, produis une courte note technique",
        "distincte (nouveau document) : références Git exactes, recommandations distinguées des décisions,",
        "limites. Présente le candidat pour inspection avant conservation. Pas de web.",
      ].join(" "),
    });
  }

  // Git PDF REAL — Nora via Git tools on authorized PDF (oracle independent of prompt).
  if (!ledger.stopReason && canEmit(6)) {
    await postPrepMessage({
      preparationId,
      label: "GIT-PDF-BPMN-read",
      forceNew: true,
      content: [
        `Dans le dépôt Git attaché (${GIT_REPO} @ ${GIT_COMMIT}), ouvre le PDF`,
        `"${GIT_PDF_PATH}". Extrais plusieurs pages, recherche un élément déterminant du diagramme,`,
        "cite la page réellement consultée, et indique le commit. Ne me donne pas le contenu attendu",
        "inventé : utilise les outils Git PDF. Pas de web.",
      ].join(" "),
    });
  }

  // StockTrack IT-06 — real revise on seeded V1 (inspection before conserve).
  if (!ledger.stopReason && canEmit(6)) {
    await postPrepMessage({
      preparationId: ST_PREP_ID,
      label: "IT06-revise-rm02-rec03",
      forceNew: true,
      content: [
        "Repars de la version V1 actuellement conservée du document de conception fonctionnelle de StockTrack,",
        "sans réutiliser les propositions précédentes. Je souhaite que la référence d'un article comporte",
        "au minimum trois caractères. Modifie uniquement la règle RM-02 et le scénario REC-03 pour intégrer",
        "cette exigence et vérifier qu'une référence de deux caractères est refusée. Conserve strictement",
        "tout le reste du document à l'identique. Compare ta proposition avec la V1 et présente-moi le",
        "document révisé complet pour inspection avant conservation. Pas de web.",
      ].join(" "),
    });
  }

  // Terra High vs Medium — only if envelope remains (discriminant on RB acquis reuse).
  if (!ledger.stopReason && canEmit(3)) {
    await adapterCompare({
      id: "ALLOC-terra-high-rb-synthesis",
      model: "gpt-6.1-terra",
      effort: "high",
      text: [
        "À partir d'une investigation Git planning déjà faite (chevauchement strict, 409, index non exclusif,",
        "check-then-insert), rédige une synthèse courte avec recommandations vs décisions et limites.",
        "N'invente pas de chemins non fournis.",
      ].join(" "),
    });
  }
  if (!ledger.stopReason && canEmit(3)) {
    await adapterCompare({
      id: "ALLOC-terra-medium-rb-synthesis",
      model: "gpt-6.1-terra",
      effort: "medium",
      text: [
        "Même consigne de synthèse planning Git (chevauchement, 409, index, check-then-insert) —",
        "recommandations vs décisions, limites. N'invente pas de chemins.",
      ].join(" "),
    });
  }

  ledger.finishedAt = new Date().toISOString();
  if (!ledger.stopReason) ledger.stopReason = "COMPLETED_DOCUMENTARY_LIVE";
  save();
  writeFileSync(
    path.join(OUT, "qualification-summary.json"),
    JSON.stringify(
      {
        stopReason: ledger.stopReason,
        responsesAttempted: ledger.responsesAttempted,
        inputTokens: ledger.inputTokens,
        outputTokens: ledger.outputTokens,
        estimatedCostUsd: ledger.estimatedCostUsd,
        scenarioCount: ledger.scenarios.length,
        policy: ledger.policy,
        projectId,
        preparationId,
        workId,
        stockTrackProjectId: ST_PROJECT_ID,
        stockTrackDocId: ST_DOC_ID,
        gitPdf: { repo: GIT_REPO, commit: GIT_COMMIT, path: GIT_PDF_PATH },
        note:
          "RoomBooking uses attached chantiers360; StockTrack uses seeded V1; Git PDF = Diagramme BPMN_BatiNova.pdf",
      },
      null,
      2,
    ),
  );
  console.log("DONE", ledger.stopReason, {
    responsesAttempted: ledger.responsesAttempted,
    inputTokens: ledger.inputTokens,
    outputTokens: ledger.outputTokens,
    estimatedCostUsd: ledger.estimatedCostUsd,
  });
}

main().catch((e) => {
  ledger.stopReason = `THROW ${String(e).slice(0, 200)}`;
  ledger.finishedAt = new Date().toISOString();
  save();
  console.error(e);
  process.exit(1);
});
