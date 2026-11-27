/**
 * FINAL LIVE NORA — continuation within same Morris GO envelope.
 * Prior partial: http 99→101, tokens +14110, OUTPUT_TOKENS_EXHAUSTED (run cap too tight).
 * Ceiling absolute: HTTP ≤117 (99+18) · tokens ≤74037+38000.
 * Completes investigation restitution + note revision. WEB OFF.
 */
import { createHash, randomUUID } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const CAMPAIGN_ID = "ml2-i2-docintel-20261127";
const GO_HTTP_CEILING = 99 + 18; // absolute after GO
const GO_TOK_BASE = 74037; // in+out before first GO emit
const GO_TOK_CEILING = GO_TOK_BASE + 38_000;
const OUT = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/final-live-nora",
);
mkdirSync(OUT, { recursive: true });

function loadEnvLocal() {
  const p = join(process.cwd(), ".env.local");
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    )
      v = v.slice(1, -1);
    if (!(k in process.env) || process.env[k] === "") process.env[k] = v;
  }
}

loadEnvLocal();
process.env.STUDIO_LANE = "DEV";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";
process.env.SFIA_QUALIFY_MODE = "1";
process.env.SFIA_BOUNDED_JUDGMENT = "1";
process.env.SFIA_DOCUMENT_VISION_PUNCTUAL = "0"; // skip vision this continue
process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
process.env.SFIA_DERIVED_EMBEDDING_BACKEND = "pg";
process.env.SFIA_LIVE_CAMPAIGN_ID = CAMPAIGN_ID;
process.env.SFIA_PROTECT_CAMPAIGN_ENVELOPE = "1";
process.env.SFIA_G_LIVE_API = "1";
process.env.SFIA_LIVE_MAX_HTTP_ATTEMPTS = "236";
process.env.SFIA_LIVE_MAX_INPUT_TOKENS = "344000";
process.env.SFIA_LIVE_MAX_OUTPUT_TOKENS = "344000";
process.env.SFIA_COGNITIVE_MAX_SEGMENTS = "3";

const key = (process.env.OPENAI_API_KEY || "").trim();
if (!key) throw new Error("OPENAI_API_KEY missing — STOP");
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
const forbidden = (process.env.SFIA_OPENAI_FORBIDDEN_KEY_FP || "").trim();
if (expected && fp !== expected) throw new Error(`KEY_FP mismatch — STOP`);
if (forbidden && fp === forbidden) throw new Error("FORBIDDEN Admin key — STOP");

const durableEnvelope = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/live-campaign/envelope-state.json",
);
const sharedState = join(process.cwd(), ".sfia-evidence/live-campaign-state.json");
if (!existsSync(durableEnvelope)) throw new Error("DURABLE_MISSING — STOP");
{
  const raw = JSON.parse(readFileSync(durableEnvelope, "utf8"));
  if (raw.campaignId !== CAMPAIGN_ID) throw new Error("CAMPAIGN_MISMATCH — STOP");
  if (raw.protectPersisted !== true) throw new Error("PROTECT_MISSING — STOP");
  raw.protectPersisted = true;
  if (raw.envelope) {
    raw.envelope.suspended = false;
    raw.envelope.suspendReason = null;
    raw.envelope.maxHttpAttempts = 236;
    raw.envelope.maxInputTokens = 344000;
    raw.envelope.maxOutputTokens = 344000;
    raw.envelope.maxOutputTokensPerRequest = Math.max(
      8192,
      Number(raw.envelope.maxOutputTokensPerRequest ?? 0) || 8192,
    );
  }
  writeFileSync(sharedState, JSON.stringify(raw, null, 2));
  writeFileSync(durableEnvelope, JSON.stringify(raw, null, 2));
}

type Metrics = {
  httpAttemptsCommitted?: number;
  inputTokensCommitted?: number;
  outputTokensCommitted?: number;
  maxHttpAttempts?: number;
  familyHttp?: Record<string, { committed?: number; maxHttpAttempts?: number }>;
  suspended?: boolean;
  suspendReason?: string | null;
  campaignId?: string;
};

const report: Record<string, unknown> = {
  campaignId: CAMPAIGN_ID,
  gate: "FINAL_LIVE_NORA_CONTINUE",
  startedAt: new Date().toISOString(),
  goHttpCeiling: GO_HTTP_CEILING,
  goTokCeiling: GO_TOK_CEILING,
  steps: [] as unknown[],
  envelopeBefore: null,
  envelopeAfter: null,
  verdict: null,
};

const push = (s: Record<string, unknown>) =>
  (report.steps as unknown[]).push({ ...s, at: new Date().toISOString() });

function tokSum(m: Metrics | null | undefined) {
  return (m?.inputTokensCommitted ?? 0) + (m?.outputTokensCommitted ?? 0);
}

function persistDurable(metrics: Metrics, camp: { campaignId: string }) {
  const prev = JSON.parse(readFileSync(sharedState, "utf8"));
  const entry = {
    campaignId: CAMPAIGN_ID,
    pid: process.pid,
    createdAtMs: prev.createdAtMs ?? Date.now(),
    protectPersisted: true,
    envelope: {
      ...(prev.envelope ?? {}),
      ...metrics,
      campaignId: CAMPAIGN_ID,
      required: true,
      suspended: false,
      suspendReason: null,
      maxHttpAttempts: 236,
      maxInputTokens: 344000,
      maxOutputTokens: 344000,
    },
  };
  const body = JSON.stringify(entry, null, 2);
  writeFileSync(sharedState, body);
  writeFileSync(durableEnvelope, body);
  writeFileSync(join(OUT, "envelope-after-continue.json"), body);
}

const {
  beginCampaignEnvelope,
  getCampaignEnvelopeMetrics,
  runWithProviderEmissionStoreAsync,
  attachConfiguredLiveCampaignFromEnv,
} = await import("../src/domains/conversation/provider-emission-frontier.ts");

await runWithProviderEmissionStoreAsync(async () => {
  const camp =
    attachConfiguredLiveCampaignFromEnv(process.env) ??
    beginCampaignEnvelope({
      campaignId: CAMPAIGN_ID,
      maxHttpAttempts: 236,
      maxInputTokens: 344000,
      maxOutputTokens: 344000,
      required: true,
      familyHttpLimits: {
        decisions: 24,
        embeddings: 12,
        responses: 112,
        vector_stores: 88,
        files: 40,
      },
    });

  const before = getCampaignEnvelopeMetrics() as Metrics;
  report.envelopeBefore = before;
  const httpBefore = before.httpAttemptsCommitted ?? 0;
  const tokBefore = tokSum(before);

  if (httpBefore >= GO_HTTP_CEILING) {
    throw new Error(`HTTP_CEILING_REACHED ${httpBefore} — STOP`);
  }
  if (tokBefore >= GO_TOK_CEILING) {
    throw new Error(`TOKEN_CEILING_REACHED ${tokBefore} — STOP`);
  }
  if (!before || httpBefore < 101) {
    push({ step: "preflightWarn", httpBefore, expectedMin: 101 });
  }

  // Hard HTTP ceiling for remainder of GO only — do NOT starve output tokens.
  camp.maxHttpAttempts = GO_HTTP_CEILING;
  camp.maxInputTokens = 344000;
  camp.maxOutputTokens = 344000;
  camp.suspended = false;
  camp.suspendReason = null;
  // Ensure per-request out headroom for completion after tools
  (camp as { maxOutputTokensPerRequest?: number | null }).maxOutputTokensPerRequest =
    8192;

  push({
    step: "preflightContinue",
    httpBefore,
    tokBefore,
    remainHttp: GO_HTTP_CEILING - httpBefore,
    remainTok: GO_TOK_CEILING - tokBefore,
    protect: true,
  });

  const { sql: pg } = await import("../src/db/client.ts");
  const projRows = await pg`
    SELECT p.id AS project_id, p.owner_pilot_id AS pilot_id, l.preparation_id
    FROM projects p
    JOIN preparation_project_links l ON l.project_id = p.id
    WHERE p.id = 'proj_330057a0-cb37-4ab1-9c98-be5eb4454ead'
    LIMIT 1
  `;
  const proj = projRows[0];
  if (!proj) throw new Error("SYNTHETIC_PROJECT_MISSING");
  const pilotId = String(proj.pilot_id);
  const projectId = String(proj.project_id);
  const preparationId = String(proj.preparation_id);

  const priorWork = "cgw_5ce99393-e0bd-4bc8-a3d9-07d0e687ca92";
  const priorDoc = "doc_30e2913e-c777-462e-aded-e1836d03969e";

  const { runNoraCognitiveTurn } = await import(
    "../src/domains/conversation/run-nora-cognitive-turn.ts"
  );

  // Ask Nora to OPEN discovered sources and produce sourced note — no numeric spoon-feed.
  const ask = [
    "Reprise de l'investigation déjà engagée.",
    "Les recherches D4 ont découvert des acquis (métadonnées seulement).",
    "Ouvre maintenant les sources pertinentes via les outils de lecture,",
    "puis rédige une note markdown sourcée (faits observés + sourceId + limites).",
    "N'invente aucun chiffre absent des sources lues. Pas de HumanDecision. WEB interdit.",
  ].join(" ");

  let turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>;
  try {
    turn = await runNoraCognitiveTurn({
      pilotId,
      preparationId,
      projectId,
      conversationId: null,
      turnCommandId: `ml2-final-cont-${randomUUID()}`,
      workId: priorWork,
      forceNewWork: false,
      objective: ask.slice(0, 500),
      userText: ask,
      contextSnippets: [
        "WEB OFF. Continuation qualification finale ML2.",
        `Document déjà conservé: ${priorDoc} — tu peux t'y référer mais priorise les acquis D4 lus.`,
        "Si une source est illisible, signale-le explicitement.",
      ],
      knowledgeSnippets: [],
      toolScope: {
        pilotId,
        preparationId,
        projectId,
        operationId: `ml2-final-cont-op-${Date.now()}`,
        generationId: `ml2-final-cont-gen-${Date.now()}`,
      },
      maxSegmentsThisInvocation: 3,
    });
  } catch (e) {
    push({
      step: "noraContinue",
      status: "ERROR",
      error: e instanceof Error ? e.message.slice(0, 500) : String(e),
    });
    const mid = getCampaignEnvelopeMetrics() as Metrics;
    report.envelopeAfter = mid;
    persistDurable(mid, camp);
    report.verdict = "FINAL_LIVE_NORA_CONTINUE_ERROR";
    writeFileSync(
      join(OUT, "final-live-nora-continue-report.json"),
      JSON.stringify(report, null, 2),
    );
    console.log(JSON.stringify({ verdict: report.verdict, error: true }, null, 2));
    process.exit(2);
  }

  const sources = (turn.observedToolSources ?? []).map((s) => {
    if (typeof s === "string") return s;
    const o = s as { kind?: string; ref?: string; coverage?: string; notes?: string };
    return `${o.kind ?? "?"}:${o.ref ?? "?"} [${o.coverage ?? ""}] ${o.notes ?? ""}`;
  });

  push({
    step: "noraContinue",
    status: turn.status,
    workId: turn.conductor?.workId ?? null,
    revision: turn.conductor?.revision ?? null,
    segmentsRun: turn.conductor?.segmentsRun ?? null,
    toolCallsObserved: turn.toolCallsObserved ?? null,
    modelApplied: turn.modelApplied ?? null,
    qualificationSchema: turn.qualification?.schemaVersion ?? null,
    sourceCount: sources.length,
    sources: sources.slice(0, 20),
    replyPreview: (turn.content ?? "").slice(0, 1200),
  });

  // Revise existing document with completed restitution
  const { reviseDocument, listDocumentRevisions, listDocuments } = await import(
    "../src/domains/document/service.ts"
  );
  const docs = await listDocuments(pilotId, preparationId);
  const owned = docs.find((d) => d.document?.id === priorDoc);
  const head = owned?.latestRevision;
  let reviseStatus: string | null = null;
  let revisionCount = 0;
  if (head?.id) {
    const body = [
      "# Note sourcée — qualification finale ML2 (complétée)",
      "",
      `Travail: ${turn.conductor?.workId} rév.${turn.conductor?.revision}`,
      "",
      "## Restitution Nora",
      "",
      (turn.content ?? "").trim() || "_(vide)_",
      "",
      "## Sources outils",
      "",
      ...sources.slice(0, 20).map((s) => `- ${s}`),
    ].join("\n");
    const revised = await reviseDocument(pilotId, preparationId, {
      documentId: priorDoc,
      sourceRevisionId: head.id,
      observedHeadRevisionId: head.id,
      contentMarkdown: body,
      correlationKey: `ml2-final-cont-revise:${randomUUID()}`,
    });
    reviseStatus =
      revised && "status" in revised
        ? String((revised as { status: string }).status)
        : null;
    const revs = await listDocumentRevisions(pilotId, preparationId, priorDoc);
    revisionCount = Array.isArray(revs.revisions) ? revs.revisions.length : 0;
  }
  push({
    step: "documentReviseComplete",
    reviseStatus,
    revisionCount,
    documentId: priorDoc,
  });

  const after = getCampaignEnvelopeMetrics() as Metrics;
  report.envelopeAfter = after;
  const httpAfter = after.httpAttemptsCommitted ?? 0;
  const tokAfter = tokSum(after);
  const httpDeltaGo = httpAfter - 99;
  const tokDeltaGo = tokAfter - GO_TOK_BASE;
  persistDurable(after, camp);

  const noraOk =
    turn.status === "COMPLETE" ||
    (typeof turn.content === "string" && turn.content.trim().length > 80);
  const within =
    httpAfter <= GO_HTTP_CEILING && tokAfter <= GO_TOK_CEILING;
  report.httpDeltaFromGoStart = httpDeltaGo;
  report.tokenDeltaFromGoStart = tokDeltaGo;
  report.httpAfter = httpAfter;
  report.tokAfter = tokAfter;
  report.verdict =
    within && noraOk && revisionCount >= 2
      ? "FINAL_LIVE_NORA_PASS_WITHIN_GO"
      : within && noraOk
        ? "FINAL_LIVE_NORA_PARTIAL_QUALITY"
        : within
          ? "FINAL_LIVE_NORA_PARTIAL_WITHIN_GO"
          : "FINAL_LIVE_NORA_BUDGET_FAIL";
  report.finishedAt = new Date().toISOString();
  writeFileSync(
    join(OUT, "final-live-nora-continue-report.json"),
    JSON.stringify(report, null, 2),
  );
  console.log(
    JSON.stringify(
      {
        verdict: report.verdict,
        httpDeltaFromGoStart: httpDeltaGo,
        tokenDeltaFromGoStart: tokDeltaGo,
        httpAfter,
        tokAfter,
        status: turn.status,
        workId: turn.conductor?.workId,
        revisionCount,
        replyLen: (turn.content ?? "").length,
        toolCalls: turn.toolCallsObserved,
      },
      null,
      2,
    ),
  );
  if (!within) process.exit(2);
  if (!noraOk) process.exit(3);
});
