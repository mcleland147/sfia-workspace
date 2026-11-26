/**
 * ML5 S6 — provisional policy integrated qualification (DEV product + adapter).
 * Envelope G-LIVE-API: ≤40 Responses (retries counted), ≤2M in / ≤200k out.
 * WEB LIVE must stay OFF. Preconditions enforced before first request.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import { config } from "dotenv";
import path from "node:path";

config({ path: path.resolve(process.cwd(), ".env.local") });

process.env.STUDIO_LANE = "DEV";
process.env.SFIA_COG_PROVISIONAL_POLICY =
  process.env.SFIA_COG_PROVISIONAL_POLICY || "v0.1";
process.env.SFIA_COGNITIVE_ADMISSION_MODE =
  process.env.SFIA_COGNITIVE_ADMISSION_MODE || "operational";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";

const BASE = process.env.SFIA_QUAL_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_QUAL_OUT ||
  path.resolve(process.cwd(), "../../../.tmp-sfia-review/provisional-qual-live");
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
  policy: process.env.SFIA_COG_PROVISIONAL_POLICY || "v0.1",
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
  if (!expectedFp) {
    ledger.stopReason = "EXPECTED_KEY_FP_MISSING";
    ledger.preconditions = checks;
    save();
    return false;
  }
  if (expectedFp !== fp) {
    ledger.stopReason = "KEY_FP_MISMATCH";
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
    clientTurnKey: `prov-${input.label}-${Date.now()}`,
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
    replyStatus:
      (r.json as { replyStatus?: string }).replyStatus ||
      (r.json as { noraStatus?: string }).noraStatus ||
      null,
    durationMs: Date.now() - before,
    replyPreview: String(reply).slice(0, 800),
    replyFull: String(reply).slice(0, 20_000),
    usageRows: usage.rows,
    inputTokens: usage.inTok || null,
    outputTokens: usage.outTok || null,
    providerRequests: usage.reqs || null,
    estimatedCostUsd: usage.cost || null,
    resources: work?.resources ?? null,
    proposedCognitiveModel: work?.state?.proposedCognitiveModel ?? null,
    proposedCognitiveEffort: work?.state?.proposedCognitiveEffort ?? null,
    modelRequested: work?.resources?.modelRequested ?? null,
    effortRequested: work?.resources?.effortRequested ?? null,
  };
  ledger.scenarios.push(row);
  save();
  console.log(
    `[${input.label}] http=${r.status} work=${workId} model=${row.modelRequested}@${row.effortRequested} in=${usage.inTok} out=${usage.outTok} attempted=${ledger.responsesAttempted}`,
  );
  if (
    usage.inTok > ENVELOPE.maxInputPerRequest ||
    usage.outTok > ENVELOPE.maxOutputPerRequest
  ) {
    ledger.stopReason = `PER_REQUEST_CAP ${input.label}`;
  }
  if (!canEmit(1)) ledger.stopReason = ledger.stopReason || "ENVELOPE_REACHED";
  return row;
}

async function main() {
  console.log("Provisional policy qualification start", {
    BASE,
    OUT,
    fp,
    policy: ledger.policy,
  });
  if (!checkPreconditions()) {
    console.error("STOP preconditions", ledger.stopReason);
    process.exit(2);
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
      previewName: "ML5-Prov-Policy-A",
      previewSummary:
        "Nous voulons un outil pour planifier les salles de réunion du siège, avec un historique des réservations, et quelque chose pour le matériel audiovisuel. Budget serré, mise en service avant l’été, et il faudra voir avec l’équipe existante. Peux-tu démarrer ?",
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
      projectName: "ML5-Prov-Policy-A",
      idempotencyKey: `prov-a-${Date.now()}`,
      previewSummary:
        "Planification salles + historique + audiovisuel — contraintes budget et calendrier.",
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
  ledger.scenarios.push({ id: "A-iq", iq });

  let workId: string | null = null;
  if (!ledger.stopReason) {
    const a = await postPrepMessage({
      preparationId,
      label: "A-qualification-initiale",
      forceNew: true,
      content:
        "Peux-tu qualifier cette demande et me dire ce que tu as compris, ce qui bloque, et comment tu proposes de progresser — sans recherche web ?",
    });
    workId = (a?.workId as string) || null;
  }

  if (!ledger.stopReason && canEmit(3)) {
    const prevMode = process.env.SFIA_COGNITIVE_ADMISSION_MODE;
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
    const { buildCognitivePolicy } = await import(
      "../src/domains/conversation/cognitive-policy.ts"
    );
    const { generateNoraReply } = await import(
      "../src/domains/conversation/nora-adapter.ts"
    );
    for (const [id, model, effort, text] of [
      [
        "B-luna-low-simple",
        "gpt-6-luna",
        "low",
        "Bonjour. Confirme en une phrase que tu es disponible.",
      ],
      [
        "B-luna-low-difficulty",
        "gpt-6-luna",
        "low",
        "Analyse les contradictions entre trois politiques internes non fournies et produis une synthèse décisionnelle complète.",
      ],
      [
        "B-luna-medium-compare",
        "gpt-6-luna",
        "medium",
        "Reformule en deux phrases l’objectif d’un sas de préparation projet.",
      ],
    ] as const) {
      if (ledger.stopReason || !canEmit(1)) break;
      ledger.responsesAttempted += 1;
      const policy = buildCognitivePolicy(text, "OPERATIONAL_PROVISIONAL", {
        profileHint: effort === "low" ? "simple" : "analyse",
        modelHint: model,
        effortHint: effort,
      });
      const started = Date.now();
      try {
        const result = await generateNoraReply({
          userText: text,
          contextSnippets: [
            "Qualification Luna bornée — WEB LIVE interdit.",
            "Réponds en français. Si la tâche dépasse l’effort disponible, dis-le clairement.",
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
        let est: number | null = null;
        try {
          const { estimateCostUsd } = await import(
            "../src/domains/conversation/usage-accounting.ts"
          );
          const e = estimateCostUsd(
            {
              inputTokens: inTok,
              outputTokens: outTok,
              cachedInputTokens: result.usage?.cachedInputTokens ?? null,
            },
            result.modelApplied || policy.modelRequested,
            { modelAppliedUnverified: !result.modelApplied },
          );
          est = e.estimatedCostUsd;
          if (typeof est === "number") ledger.estimatedCostUsd += est;
        } catch {
          /* observational */
        }
        ledger.scenarios.push({
          id,
          path: "adapter",
          modelRequested: policy.modelRequested,
          effortRequested: policy.effortRequested,
          admissionReasonCodes: policy.reasonCodes,
          status: result.status,
          replyFull: (result.content || "").slice(0, 20_000),
          replyPreview: (result.content || "").slice(0, 800),
          inputTokens: inTok,
          outputTokens: outTok,
          providerRequests: reqs,
          estimatedCostUsd: est,
          durationMs: Date.now() - started,
        });
        save();
        console.log(
          `[${id}] ${policy.modelRequested}@${policy.effortRequested} ${result.status}`,
        );
      } catch (e) {
        ledger.scenarios.push({
          id,
          error: String((e as Error)?.message ?? e).slice(0, 300),
        });
        save();
      }
    }
    process.env.SFIA_COGNITIVE_ADMISSION_MODE = prevMode || "operational";
  }

  if (!ledger.stopReason && canEmit(1)) {
    await postPrepMessage({
      preparationId,
      label: "E-reallocation-segment-1",
      cognitiveWorkId: workId,
      content:
        "Pour la suite : d’abord une clarification courte des intentions, puis une analyse plus exigeante des contradictions entre budget, calendrier et périmètre audiovisuel. Adapte tes moyens si le besoin change entre ces deux temps. Pas de web.",
    });
  }
  if (!ledger.stopReason && canEmit(1)) {
    await postPrepMessage({
      preparationId,
      label: "E-reallocation-segment-2",
      cognitiveWorkId: workId,
      content:
        "Poursuis maintenant la partie exigeante : contradictions budget / calendrier / audiovisuel, et propose l’allocation modèle/effort pour le prochain segment si nécessaire.",
    });
  }

  if (!ledger.stopReason && canEmit(1)) {
    await postPrepMessage({
      preparationId,
      label: "F-internal-cognitive-guidance",
      cognitiveWorkId: workId,
      content:
        "Consulte le référentiel de guidance cognitive pour une typologie d’analyse multi-contraintes, puis dis-moi quelle guidance tu as utilisée (id) et ce que tu en retires — sans inventer d’id.",
    });
  }

  ledger.scenarios.push({
    id: "C-RoomBooking",
    status: "DEFERRED_ENVELOPE_PRIORITY",
    note: "Corpus RoomBooking borné reporté; ne pas rejouer 50 sources dans cette enveloppe.",
  });
  ledger.scenarios.push({
    id: "D-StockTrack-IT06",
    status: "DEFERRED_ENVELOPE_PRIORITY",
    note: "IT-06 oracle de diff reporté à campagne documentaire dédiée.",
  });

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
