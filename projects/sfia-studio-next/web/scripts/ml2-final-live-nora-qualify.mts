/**
 * FINAL LIVE NORA QUALIFICATION — Morris GO 2026-11-27
 * Campaign ml2-i2-docintel-20261127 (no renew).
 * Cap this run: ≤18 HTTP · ≤38_000 tokens cumulés (in+out) · WEB OFF · DEV synthetic.
 * Hard-stops campaign.maxHttpAttempts at committed+18 after restore.
 */
import { createHash, randomUUID } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const CAMPAIGN_ID = "ml2-i2-docintel-20261127";
const RUN_HTTP_CAP = 18;
const RUN_TOKEN_CAP = 38_000;
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
process.env.SFIA_DOCUMENT_VISION_PUNCTUAL = "1";
process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
process.env.SFIA_DERIVED_EMBEDDING_BACKEND = "pg";
process.env.SFIA_LIVE_CAMPAIGN_ID = CAMPAIGN_ID;
process.env.SFIA_PROTECT_CAMPAIGN_ENVELOPE = "1";
process.env.SFIA_G_LIVE_API = "1";
process.env.SFIA_LIVE_MAX_HTTP_ATTEMPTS = "236";
process.env.SFIA_LIVE_MAX_INPUT_TOKENS = "344000";
process.env.SFIA_LIVE_MAX_OUTPUT_TOKENS = "344000";
// Keep cognitive turns short for GO budget
process.env.SFIA_COGNITIVE_MAX_SEGMENTS = "4";

const key = (process.env.OPENAI_API_KEY || "").trim();
if (!key) throw new Error("OPENAI_API_KEY missing — STOP");
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
const forbidden = (process.env.SFIA_OPENAI_FORBIDDEN_KEY_FP || "").trim();
if (expected && fp !== expected) throw new Error(`KEY_FP mismatch ${fp} — STOP`);
if (forbidden && fp === forbidden) throw new Error("FORBIDDEN Admin key — STOP");

const durableEnvelope = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/live-campaign/envelope-state.json",
);
const sharedState = join(process.cwd(), ".sfia-evidence/live-campaign-state.json");
if (!existsSync(durableEnvelope)) {
  throw new Error("DURABLE_ENVELOPE_MISSING — STOP before emission");
}
{
  mkdirSync(join(process.cwd(), ".sfia-evidence"), { recursive: true });
  const raw = JSON.parse(readFileSync(durableEnvelope, "utf8"));
  if (raw.campaignId !== CAMPAIGN_ID) {
    throw new Error(`CAMPAIGN_MISMATCH ${raw.campaignId} — STOP`);
  }
  raw.protectPersisted = true;
  writeFileSync(sharedState, JSON.stringify(raw, null, 2));
}

type Metrics = {
  httpAttemptsCommitted?: number;
  inputTokensCommitted?: number;
  outputTokensCommitted?: number;
  maxHttpAttempts?: number;
  familyHttp?: Record<string, { committed?: number; maxHttpAttempts?: number }>;
  suspended?: boolean;
  suspendReason?: string | null;
};

const report: Record<string, unknown> = {
  campaignId: CAMPAIGN_ID,
  gate: "FINAL_LIVE_NORA",
  morrisGo: "2026-11-27-final-live-nora-qualification",
  runHttpCap: RUN_HTTP_CAP,
  runTokenCap: RUN_TOKEN_CAP,
  startedAt: new Date().toISOString(),
  preflight: {} as Record<string, unknown>,
  steps: [] as unknown[],
  envelopeBefore: null as Metrics | null,
  envelopeAfter: null as Metrics | null,
  httpDelta: null as number | null,
  tokenDelta: null as number | null,
  verdict: null as string | null,
};

function tokSum(m: Metrics | null | undefined): number {
  return (m?.inputTokensCommitted ?? 0) + (m?.outputTokensCommitted ?? 0);
}

function pushStep(step: Record<string, unknown>) {
  (report.steps as unknown[]).push({
    ...step,
    at: new Date().toISOString(),
  });
}

const {
  beginCampaignEnvelope,
  createFrontierBoundOpenAIClient,
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

  // Restore must show cumulative counters — never wipe.
  const before = getCampaignEnvelopeMetrics();
  if (!before) throw new Error("NO_METRICS — STOP");
  report.envelopeBefore = before as Metrics;
  const httpBefore = before.httpAttemptsCommitted ?? 0;
  const tokBefore = tokSum(before as Metrics);

  // ——— PREFLIGHT: remainder + protections ———
  const httpRemainCampaign = (before.maxHttpAttempts ?? 0) - httpBefore;
  const emb = before.familyHttp?.embeddings;
  const embRemain =
    (emb?.maxHttpAttempts ?? 0) - (emb?.committed ?? 0);
  const resp = before.familyHttp?.responses;
  const respRemain =
    (resp?.maxHttpAttempts ?? 0) - (resp?.committed ?? 0);
  const protectOk =
    existsSync(sharedState) &&
    JSON.parse(readFileSync(sharedState, "utf8")).protectPersisted === true;

  report.preflight = {
    httpBefore,
    tokBefore,
    httpRemainCampaign,
    embRemain,
    respRemain,
    protectPersisted: protectOk,
    campaignId: camp.campaignId,
    webOff:
      process.env.SFIA_WEB_SEARCH_LIVE === "0" &&
      process.env.SFIA_WEB_SEARCH_ENABLED === "0",
  };

  if (!protectOk) throw new Error("PROTECT_NOT_DEMONSTRATED — STOP");
  if (httpBefore !== 99) {
    // Soft warn but continue if ≥99 and remainder still covers GO
    pushStep({
      step: "preflightHttpNote",
      expected: 99,
      actual: httpBefore,
    });
  }
  if (httpRemainCampaign < RUN_HTTP_CAP) {
    throw new Error(
      `HTTP_RELIQUAT_INSUFFISANT remain=${httpRemainCampaign} need=${RUN_HTTP_CAP} — STOP`,
    );
  }
  if (embRemain < 1) {
    throw new Error(`EMBEDDINGS_EXHAUSTED remain=${embRemain} — STOP`);
  }
  if (respRemain < 4) {
    throw new Error(`RESPONSES_RELIQUAT_INSUFFISANT remain=${respRemain} — STOP`);
  }

  // Hard-cap this GO run at Frontier level
  camp.maxHttpAttempts = httpBefore + RUN_HTTP_CAP;
  // Split token headroom ~84/16 (Nora input-heavy)
  const inHead = Math.floor(RUN_TOKEN_CAP * 0.84);
  const outHead = RUN_TOKEN_CAP - inHead;
  camp.maxInputTokens = (before.inputTokensCommitted ?? 0) + inHead;
  camp.maxOutputTokens = (before.outputTokensCommitted ?? 0) + outHead;
  report.preflight = {
    ...(report.preflight as object),
    hardMaxHttp: camp.maxHttpAttempts,
    hardMaxInputTokens: camp.maxInputTokens,
    hardMaxOutputTokens: camp.maxOutputTokens,
    goAuthorized: true,
  };
  pushStep({
    step: "preflightPass",
    hardMaxHttp: camp.maxHttpAttempts,
    hardMaxIn: camp.maxInputTokens,
    hardMaxOut: camp.maxOutputTokens,
  });

  const budgetOk = (): { ok: boolean; reason?: string } => {
    const m = getCampaignEnvelopeMetrics() as Metrics | null;
    if (!m) return { ok: false, reason: "NO_METRICS" };
    if (m.suspended) return { ok: false, reason: `SUSPENDED:${m.suspendReason}` };
    const dHttp = (m.httpAttemptsCommitted ?? 0) - httpBefore;
    const dTok = tokSum(m) - tokBefore;
    if (dHttp >= RUN_HTTP_CAP) return { ok: false, reason: `HTTP_CAP ${dHttp}` };
    if (dTok >= RUN_TOKEN_CAP) return { ok: false, reason: `TOKEN_CAP ${dTok}` };
    return { ok: true };
  };

  const client = await createFrontierBoundOpenAIClient({
    requireCampaign: true,
    maxRetries: 0,
  });
  if (!client) throw new Error("NO_FRONTIER_CLIENT — STOP");

  const { sql: pg } = await import("../src/db/client.ts");
  const projRows = await pg`
    SELECT p.id AS project_id, p.owner_pilot_id AS pilot_id, l.preparation_id
    FROM projects p
    JOIN preparation_project_links l ON l.project_id = p.id
    WHERE p.id = 'proj_330057a0-cb37-4ab1-9c98-be5eb4454ead'
    LIMIT 1
  `;
  const proj = projRows[0];
  if (!proj) throw new Error("SYNTHETIC_PROJECT_MISSING — STOP");
  const pilotId = String(proj.pilot_id);
  const projectId = String(proj.project_id);
  const preparationId = String(proj.preparation_id);

  // ——— 1 Knowledge search (hybrid, 1 embed) — no spoon-fed answers ———
  {
    const b = budgetOk();
    if (!b.ok) throw new Error(`BUDGET_BEFORE_HYBRID — ${b.reason}`);
  }
  const { hybridSearchProjectKnowledge, derivedEmbeddingBackend } =
    await import("../src/domains/knowledge/derived-embedding-service.ts");
  const { searchJournalSubjects } = await import(
    "../src/domains/knowledge/journal.ts"
  );
  const journal = await searchJournalSubjects(
    pilotId,
    projectId,
    "architecture capacité",
    { openPointsOnly: false },
  );
  const lexical = (journal.results || []).slice(0, 5).map((r) => ({
    sourceId: String((r as { subjectId?: string }).subjectId ?? ""),
    snippet: String(
      (r as { title?: string }).title ??
        (r as { snippet?: string }).snippet ??
        "",
    ),
    matchKind: "title" as const,
    channel: "lexical" as const,
  })).filter((h) => h.sourceId);

  const hybrid = await hybridSearchProjectKnowledge({
    pilotId,
    projectId,
    query: "Quels acquis documentent l'architecture et la capacité du projet ?",
    lexical,
    limit: 8,
    client: client as never,
  });
  pushStep({
    step: "knowledgeSearch",
    journalStatus: journal.status,
    journalCount: (journal.results || []).length,
    hybridHits: hybrid.hits.length,
    derivedUsed: hybrid.derivedUsed,
    rightsRevalidated: hybrid.rightsRevalidated,
    backend: hybrid.backend ?? derivedEmbeddingBackend(),
    sourceIds: hybrid.hits.slice(0, 6).map((h) => h.sourceId),
  });

  // ——— 2 Nora investigation (product cognitive turn) ———
  {
    const b = budgetOk();
    if (!b.ok) throw new Error(`BUDGET_BEFORE_NORA — ${b.reason}`);
  }
  const { runNoraCognitiveTurn } = await import(
    "../src/domains/conversation/run-nora-cognitive-turn.ts"
  );
  // Do NOT inject expected facts (capacity=12 etc.) — Nora must retrieve via tools/D4.
  const pilotAsk = [
    "Investigation de cadrage synthétique (projet DEV).",
    "Recherche les connaissances pertinentes du journal et des acquis autorisés.",
    "Consulte les sources D4 disponibles via les outils.",
    "Produis une note courte sourcée (markdown) résumant ce que tu as réellement trouvé,",
    "avec citations des sourceId utilisés. Signale ce qui reste inconnu.",
    "N'invente pas de chiffres. Pas de HumanDecision. WEB interdit.",
  ].join(" ");

  let noraTurn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>;
  try {
    noraTurn = await runNoraCognitiveTurn({
      pilotId,
      preparationId,
      projectId,
      conversationId: null,
      turnCommandId: `ml2-final-live-${randomUUID()}`,
      forceNewWork: true,
      objective: pilotAsk.slice(0, 500),
      userText: pilotAsk,
      contextSnippets: [
        "Lane DEV. WEB LIVE OFF. Campagne ml2-i2-docintel-20261127 — qualification finale.",
        "Utilise search_project_resources / lecture document si pertinent.",
        "Index dérivé PG admissible-only ; droits revalidés à la recherche.",
      ],
      knowledgeSnippets: [],
      toolScope: {
        pilotId,
        preparationId,
        projectId,
        operationId: `ml2-final-op-${Date.now()}`,
        generationId: `ml2-final-gen-${Date.now()}`,
      },
      maxSegmentsThisInvocation: 3,
    });
  } catch (e) {
    pushStep({
      step: "noraInvestigation",
      status: "ERROR",
      error: e instanceof Error ? e.message.slice(0, 400) : String(e),
    });
    throw e;
  }
  pushStep({
    step: "noraInvestigation",
    status: noraTurn.status,
    workId: noraTurn.conductor?.workId ?? null,
    revision: noraTurn.conductor?.revision ?? null,
    segmentsRun: noraTurn.conductor?.segmentsRun ?? null,
    toolCallsObserved: noraTurn.toolCallsObserved ?? null,
    modelApplied: noraTurn.modelApplied ?? null,
    qualificationSchema: noraTurn.qualification?.schemaVersion ?? null,
    observedToolSources: (noraTurn.observedToolSources ?? []).slice(0, 12),
    replyPreview: (noraTurn.content ?? "").slice(0, 800),
    usage: noraTurn.attempts?.slice(-1)?.[0] ?? null,
  });

  // ——— 3 Document production + conservation (product D9, no provider) ———
  const { savePreparationDocument, reviseDocument, listDocumentRevisions } =
    await import("../src/domains/document/service.ts");
  const noteBody = [
    "# Note sourcée — qualification finale ML2",
    "",
    `Travail cognitif: ${noraTurn.conductor?.workId ?? "n/a"} (rév. ${noraTurn.conductor?.revision ?? "?"})`,
    "",
    "## Synthèse Nora",
    "",
    (noraTurn.content ?? "").trim() || "_(réponse vide)_",
    "",
    "## Sources observées (outils)",
    "",
    ...(noraTurn.observedToolSources ?? []).slice(0, 12).map((s) => `- ${s}`),
    "",
    "## Hits hybrides préalables",
    "",
    ...hybrid.hits.slice(0, 6).map(
      (h) => `- ${h.sourceId} (${h.channel ?? "hybrid"})`,
    ),
  ].join("\n");

  const corrCreate = `ml2-final-live-create:${randomUUID()}`;
  const created = await savePreparationDocument(
    pilotId,
    preparationId,
    "Note qualification finale Orion (LIVE Nora)",
    noteBody,
    undefined,
    { correlationKey: corrCreate },
  );
  const docId =
    created && "documentId" in created
      ? String((created as { documentId?: string }).documentId ?? "")
      : "";
  const revId =
    created && "revisionId" in created
      ? String((created as { revisionId?: string }).revisionId ?? "")
      : "";
  pushStep({
    step: "documentConserve",
    createStatus:
      created && "status" in created
        ? String((created as { status: string }).status)
        : null,
    documentId: docId || null,
    revisionId: revId || null,
  });

  // ——— 4 Targeted revision (product) ———
  let reviseStatus: string | null = null;
  let revisionCount = 0;
  if (docId && revId) {
    const corrRev = `ml2-final-live-revise:${randomUUID()}`;
    const revised = await reviseDocument(pilotId, preparationId, {
      documentId: docId,
      sourceRevisionId: revId,
      observedHeadRevisionId: revId,
      contentMarkdown: [
        noteBody,
        "",
        "---",
        "",
        "## Révision ciblée",
        "",
        `- Checkpoint work: ${noraTurn.conductor?.workId}`,
        `- Segments: ${noraTurn.conductor?.segmentsRun}`,
        `- Hybrid hits: ${hybrid.hits.length}`,
        `- rightsRevalidated: ${hybrid.rightsRevalidated}`,
      ].join("\n"),
      correlationKey: corrRev,
    });
    reviseStatus =
      revised && "status" in revised
        ? String((revised as { status: string }).status)
        : null;
    const revs = await listDocumentRevisions(pilotId, preparationId, docId);
    revisionCount = Array.isArray(revs.revisions) ? revs.revisions.length : 0;
  }
  pushStep({
    step: "documentRevise",
    reviseStatus,
    revisionCount,
  });

  // ——— 5 Optional short resume turn if budget remains (≥4 HTTP left) ———
  const mid = getCampaignEnvelopeMetrics() as Metrics;
  const httpUsedMid = (mid.httpAttemptsCommitted ?? 0) - httpBefore;
  const tokUsedMid = tokSum(mid) - tokBefore;
  if (httpUsedMid <= RUN_HTTP_CAP - 4 && tokUsedMid <= RUN_TOKEN_CAP - 8000) {
    const resumeAsk =
      "Reprise du même travail : confirme brièvement les sources déjà citées dans la note et indique s'il manque une consultation. Pas de nouvelle HumanDecision.";
    try {
      const resume = await runNoraCognitiveTurn({
        pilotId,
        preparationId,
        projectId,
        conversationId: null,
        turnCommandId: `ml2-final-resume-${randomUUID()}`,
        workId: noraTurn.conductor?.workId ?? null,
        forceNewWork: false,
        objective: resumeAsk,
        userText: resumeAsk,
        contextSnippets: [
          `Document conservé: ${docId || "n/a"}`,
          "WEB OFF. Reprise cognitive bornée.",
        ],
        knowledgeSnippets: [],
        toolScope: {
          pilotId,
          preparationId,
          projectId,
          operationId: `ml2-final-resume-${Date.now()}`,
          generationId: `ml2-final-resume-gen-${Date.now()}`,
        },
        maxSegmentsThisInvocation: 2,
      });
      pushStep({
        step: "cognitiveResume",
        status: resume.status,
        workId: resume.conductor?.workId ?? null,
        revision: resume.conductor?.revision ?? null,
        replyPreview: (resume.content ?? "").slice(0, 500),
      });
    } catch (e) {
      pushStep({
        step: "cognitiveResume",
        status: "ERROR_OR_BUDGET",
        error: e instanceof Error ? e.message.slice(0, 300) : String(e),
      });
    }
  } else {
    pushStep({
      step: "cognitiveResume",
      skipped: true,
      reason: "BUDGET_MARGIN",
      httpUsedMid,
      tokUsedMid,
    });
  }

  const after = getCampaignEnvelopeMetrics() as Metrics;
  report.envelopeAfter = after;
  report.httpDelta = (after.httpAttemptsCommitted ?? 0) - httpBefore;
  report.tokenDelta = tokSum(after) - tokBefore;
  const withinHttp = (report.httpDelta as number) <= RUN_HTTP_CAP;
  const withinTok = (report.tokenDelta as number) <= RUN_TOKEN_CAP;
  const docOk = Boolean(docId) && revisionCount >= 2;
  const noraOk = noraTurn.status === "COMPLETE" || noraTurn.status === "PARTIAL";
  report.verdict =
    withinHttp && withinTok && docOk && noraOk
      ? "FINAL_LIVE_NORA_PASS_WITHIN_GO"
      : withinHttp && withinTok
        ? "FINAL_LIVE_NORA_PARTIAL_WITHIN_GO"
        : "FINAL_LIVE_NORA_BUDGET_OR_QUALITY_FAIL";
  report.finishedAt = new Date().toISOString();

  writeFileSync(sharedState, join(OUT, "envelope-after.json"));
  copyFileSync(sharedState, durableEnvelope);
  writeFileSync(join(OUT, "final-live-nora-report.json"), JSON.stringify(report, null, 2));
  console.log(
    JSON.stringify(
      {
        verdict: report.verdict,
        httpDelta: report.httpDelta,
        tokenDelta: report.tokenDelta,
        httpBefore,
        httpAfter: after.httpAttemptsCommitted,
        steps: (report.steps as { step?: string }[]).map((s) => s.step),
        workId: noraTurn.conductor?.workId,
        documentId: docId,
        revisionCount,
      },
      null,
      2,
    ),
  );
  if (!withinHttp || !withinTok) process.exit(2);
  if (!noraOk || !docOk) process.exit(3);
});
