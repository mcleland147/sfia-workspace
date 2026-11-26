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
  if (!canEmit(1)) {
    ledger.stopReason = ledger.stopReason || `ENVELOPE_BEFORE ${input.label}`;
    return null;
  }
  ledger.responsesAttempted += 1;
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
  if (usage.reqs > 1) {
    const extra = usage.reqs - 1;
    if (!canEmit(extra)) ledger.stopReason = `ENVELOPE_AFTER_MULTI ${input.label}`;
    ledger.responsesAttempted += extra;
  }
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
  if (ledger.stopReason || !canEmit(1)) return;
  ledger.responsesAttempted += 1;
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
    if (typeof reqs === "number" && reqs > 1) {
      ledger.responsesAttempted += Math.max(0, reqs - 1);
    }
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

  const prep = await api("/api/preparations", { method: "POST", body: {} });
  const preparationId = (prep.json as { preparationId: string }).preparationId;
  let g = await api(`/api/preparations/${preparationId}`);
  let rev = (g.json as { preparation: { creationRevision: number } }).preparation
    .creationRevision;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: "ML5-Doc-RoomBooking",
      previewSummary:
        "RoomBooking — inventaire documentaire, contradictions calendrier/budget, synthèse sourcée. Corpus Git borné. Pas de web.",
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = (g.json as { preparation: { creationRevision: number } }).preparation
    .creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: "ML5-Doc-RoomBooking",
      idempotencyKey: `doc-rb-${Date.now()}`,
      previewSummary:
        "Investigation documentaire RoomBooking RB-27..31 — corpus borné, pas de web.",
    },
  });
  const projectId = (created.json as { projectId?: string }).projectId;
  if (!projectId) {
    ledger.stopReason = "PROJECT_CREATE_FAIL";
    ledger.scenarios.push({ create: created });
    save();
    process.exit(2);
  }
  const iq = await waitIq(projectId);
  ledger.scenarios.push({ id: "RB-iq", iq });

  let workId: string | null = null;
  if (!ledger.stopReason) {
    const a = await postPrepMessage({
      preparationId,
      label: "RB27-inventory-plan",
      forceNew: true,
      content:
        "RoomBooking RB-27 à RB-31 (borné): prépare un plan d'investigation documentaire. Inventorie les types de sources nécessaires (cadrage, contraintes, contradictions), les faits déterminants attendus, et les critères de suffisance — sans web, sans inventer de fichiers Git absents. Si aucun dépôt n'est attaché, dis-le et propose le corpus minimal.",
    });
    workId = (a?.workId as string) || null;
  }

  if (!ledger.stopReason && canEmit(1)) {
    await postPrepMessage({
      preparationId,
      label: "RB28-progressive-read",
      cognitiveWorkId: workId,
      content:
        "Poursuis: pour chaque source critique hypothétique, indique comment tu lirais progressivement (extrait → ciblage → consolidation) et ce qui resterait non consulté. Pas de web.",
    });
  }

  if (!ledger.stopReason && canEmit(1)) {
    await postPrepMessage({
      preparationId,
      label: "RB29-31-synthesis",
      cognitiveWorkId: workId,
      content:
        "Consolide une synthèse sourcée des contradictions budget / calendrier / audiovisuel pour RoomBooking, avec reprises possibles et réallocation modèle/effort si le besoin change. Cite uniquement ce que tu as réellement acquis. Pas de web.",
    });
  }

  // PDF cognitive via adapter with fixture text injected as context (honest fixture path).
  const pdfOracle =
    "Document PDF fixture (3 pages): p1 inventory alpha; p2 contradiction beta; p3 consolidation gamma.";
  await adapterCompare({
    id: "PDF-cog-terra-medium",
    model: "gpt-6.1-terra",
    effort: "medium",
    text: `${pdfOracle}\n\nQuelles pages faut-il lire pour trancher la contradiction, et que reste-t-il non consulté si tu ne lis que p1 et p2 ? Cite les pages.`,
  });
  await adapterCompare({
    id: "PDF-cog-terra-high",
    model: "gpt-6.1-terra",
    effort: "high",
    text: `${pdfOracle}\n\nAnalyse multi-pages: relie inventory (p1), contradiction (p2) et consolidation (p3). Qualifie les limites si OCR était nécessaire.`,
  });
  await adapterCompare({
    id: "PDF-cog-sol-medium",
    model: "gpt-6.2-sol",
    effort: "medium",
    text: `${pdfOracle}\n\nMême analyse multi-pages (inventory / contradiction / consolidation) avec citations de pages.`,
  });

  // StockTrack IT-06 — targeted revise instruction (no real doc mutation without auth).
  if (!ledger.stopReason && canEmit(1)) {
    const prep2 = await api("/api/preparations", { method: "POST", body: {} });
    const preparationId2 = (prep2.json as { preparationId: string }).preparationId;
    let g2 = await api(`/api/preparations/${preparationId2}`);
    let rev2 = (g2.json as { preparation: { creationRevision: number } }).preparation
      .creationRevision;
    await api(`/api/preparations/${preparationId2}`, {
      method: "PATCH",
      body: {
        previewName: "ML5-Doc-StockTrack-IT06",
        previewSummary:
          "StockTrack IT-06 — révision ciblée: modifier uniquement les incohérences listées; conserver le reste; un candidat; inspection avant conservation.",
        expectedCreationRevision: rev2,
      },
    });
    g2 = await api(`/api/preparations/${preparationId2}`);
    rev2 = (g2.json as { preparation: { creationRevision: number } }).preparation
      .creationRevision;
    const created2 = await api(
      `/api/preparations/${preparationId2}/create-project`,
      {
        method: "POST",
        body: {
          expectedCreationRevision: rev2,
          projectName: "ML5-Doc-StockTrack-IT06",
          idempotencyKey: `doc-it06-${Date.now()}`,
          previewSummary: "IT-06 revise oracle — pas de mutation métier réelle.",
        },
      },
    );
    const projectId2 = (created2.json as { projectId?: string }).projectId;
    if (projectId2) {
      await waitIq(projectId2);
      await postPrepMessage({
        preparationId: preparationId2,
        label: "IT06-revise-plan",
        forceNew: true,
        content:
          "StockTrack IT-06: décris le protocole de révision ciblée — modifications exactes demandées, conservation stricte du reste, identification des incohérences résiduelles, candidat unique, inspection avant conservation, APPEND vs SUPERSEDE, V1 historique / V2 courante après décision explicite. N'applique aucune modification sur un document réel. Pas de web.",
      });
    } else {
      ledger.scenarios.push({
        id: "IT06-project-create",
        status: "FAILED",
        create: created2,
      });
    }
  }

  ledger.finishedAt = new Date().toISOString();
  if (!ledger.stopReason) ledger.stopReason = "COMPLETED_PLAN";
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
        note:
          "PDF fixture proves extract runtime; Git PDF LIVE frontier requires authorized attached repo PDF",
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
