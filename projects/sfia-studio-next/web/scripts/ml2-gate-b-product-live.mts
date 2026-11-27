/**
 * Gate B — product LIVE qualification ≤30 HTTP on campaign ml2-i2-docintel-20261127.
 * No renewal. WEB OFF. PG derived backend. Synthetic corpus only.
 */
import { createHash } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const CAMPAIGN_ID = "ml2-i2-docintel-20261127";
const OUT = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/gate-b-product-live",
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

const key = (process.env.OPENAI_API_KEY || "").trim();
if (!key) throw new Error("OPENAI_API_KEY missing");
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
const forbidden = (process.env.SFIA_OPENAI_FORBIDDEN_KEY_FP || "").trim();
if (expected && fp !== expected) throw new Error(`KEY_FP mismatch ${fp}`);
if (forbidden && fp === forbidden) throw new Error("FORBIDDEN Admin key");

const GATE_B_HTTP_CAP = 30;
const durableEnvelope = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/live-campaign/envelope-state.json",
);
const sharedState = join(process.cwd(), ".sfia-evidence/live-campaign-state.json");
if (existsSync(durableEnvelope)) {
  mkdirSync(join(process.cwd(), ".sfia-evidence"), { recursive: true });
  const raw = JSON.parse(readFileSync(durableEnvelope, "utf8"));
  raw.protectPersisted = true;
  writeFileSync(sharedState, JSON.stringify(raw, null, 2));
}

const report: Record<string, unknown> = {
  campaignId: CAMPAIGN_ID,
  gate: "B",
  plan: "live-gate-b-emission-plan-20261127.md",
  startedAt: new Date().toISOString(),
  httpCap: GATE_B_HTTP_CAP,
  ops: [] as unknown[],
  negatives: {} as Record<string, unknown>,
  nora: {} as Record<string, unknown>,
  envelopeBefore: null,
  envelopeAfter: null,
  httpDelta: null,
  verdict: null,
};

const {
  beginCampaignEnvelope,
  createFrontierBoundOpenAIClient,
  getCampaignEnvelopeMetrics,
  runWithProviderEmissionStoreAsync,
  attachConfiguredLiveCampaignFromEnv,
} = await import("../src/domains/conversation/provider-emission-frontier.ts");

await runWithProviderEmissionStoreAsync(async () => {
  // Restore cumulative campaign (pid mismatch → restore path).
  const camp = attachConfiguredLiveCampaignFromEnv(process.env);
  if (!camp) {
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
  }
  report.envelopeBefore = getCampaignEnvelopeMetrics();
  const httpBefore =
    (report.envelopeBefore as { httpAttemptsCommitted?: number })
      ?.httpAttemptsCommitted ?? 0;

  const client = await createFrontierBoundOpenAIClient({
    requireCampaign: true,
    maxRetries: 0,
  });
  if (!client) throw new Error("NO_FRONTIER_CLIENT");

  const { sql: pg } = await import("../src/db/client.ts");
  const projRows = await pg`
    SELECT p.id AS project_id, p.owner_pilot_id AS pilot_id, l.preparation_id
    FROM projects p
    JOIN preparation_project_links l ON l.project_id = p.id
    WHERE p.id = 'proj_330057a0-cb37-4ab1-9c98-be5eb4454ead'
    LIMIT 1
  `;
  const proj = projRows[0];
  if (!proj) throw new Error("SYNTHETIC_PROJECT_A_MISSING");
  const pilotId = String(proj.pilot_id);
  const projectId = String(proj.project_id);
  const preparationId = String(proj.preparation_id);
  const foreignProjectId = "proj_239db87c-0f2c-47ae-b9fd-1b53fd15a7e3";

  const {
    rebuildDerivedIndexFromProjectKnowledge,
    hybridSearchProjectKnowledge,
    revokeDerivedSource,
    derivedEmbeddingBackend,
  } = await import("../src/domains/knowledge/derived-embedding-service.ts");

  // ——— 1 Rebuild PG index ———
  const rebuild = await rebuildDerivedIndexFromProjectKnowledge({
    pilotId,
    projectId,
    preparationId,
    client: client as never,
  });
  (report.ops as unknown[]).push({
    op: "rebuild_pg_index",
    ...rebuild,
    backend: derivedEmbeddingBackend(),
  });

  // ——— 2 Hybrid search (authorized) ———
  const hybrid = await hybridSearchProjectKnowledge({
    pilotId,
    projectId,
    query: "Orion capacity architecture",
    lexical: [],
    limit: 8,
    client: client as never,
  });
  (report.ops as unknown[]).push({
    op: "hybrid_search_authorized",
    hitCount: hybrid.hits.length,
    derivedUsed: hybrid.derivedUsed,
    rightsRevalidated: hybrid.rightsRevalidated,
    backend: hybrid.backend,
  });

  // ——— 3 Negative: foreign pilot vs project B ———
  let foreignDenied = false;
  let foreignReason = "";
  try {
    await hybridSearchProjectKnowledge({
      pilotId,
      projectId: foreignProjectId,
      query: "secret",
      lexical: [],
      client: client as never,
    });
  } catch (e) {
    foreignDenied = true;
    foreignReason = e instanceof Error ? e.message.slice(0, 120) : "ERROR";
  }
  report.negatives = {
    ...(report.negatives as object),
    foreignProject: { denied: foreignDenied, reason: foreignReason },
  };

  // ——— 4 Revoke lifecycle + search absence ———
  const revokeId = hybrid.hits[0]?.sourceId;
  let revokeOk = false;
  let revokedAbsent = true;
  if (revokeId) {
    revokeOk = await revokeDerivedSource(projectId, revokeId);
    const after = await hybridSearchProjectKnowledge({
      pilotId,
      projectId,
      query: "Orion capacity architecture",
      lexical: [],
      limit: 8,
      client: client as never,
    });
    revokedAbsent = !after.hits.some((h) => h.sourceId === revokeId);
    (report.ops as unknown[]).push({
      op: "revoke_lifecycle",
      revokeId,
      revokeOk,
      revokedAbsent,
    });
  }

  // ——— 5 Bounded judgment AMB ———
  const { runBoundedJudgment } = await import(
    "../src/domains/conversation/bounded-judgment.ts"
  );
  const bj = await runBoundedJudgment({
    client: client as never,
    request: {
      kind: "predicate",
      name: "GATEB-AMB",
      question: "Is the evidence conclusive that capacity is exactly 12?",
      evidence:
        "Source A says capacity≈12. Source B says unknown. No authoritative measurement.",
    },
  });
  (report.ops as unknown[]).push({
    op: "bounded_judgment_amb",
    source: bj.source,
    value: bj.value,
    probability: bj.probability,
    uncertain: bj.uncertain,
    abstain: bj.abstain,
    reason: bj.reason,
    usage: bj.usage,
  });

  // ——— 6 Vision punctual on synthetic PDF if present ———
  const pdfPath = join(
    process.cwd(),
    ".sfia-evidence/document-intelligence/artefacts/P-SCN-01-network-scan.pdf",
  );
  if (!existsSync(pdfPath)) {
    (report.ops as unknown[]).push({
      op: "vision_punctual",
      skipped: true,
      reason: "NO_SYNTHETIC_PDF",
    });
  } else {
    const { runDocumentVisionPunctual } = await import(
      "../src/domains/documents/document-vision-punctual.ts"
    );
    const bytes = readFileSync(pdfPath);
    const vis = await runDocumentVisionPunctual({
      client: client as never,
      request: {
        mode: "pdf_bytes",
        bytes,
        filename: "P-SCN-01-network-scan.pdf",
        ask: "JSON {observedFacts:string[],interpretation:string,uncertainty:boolean,pagesConsulted:number[],unreadZones:string[],exactRefs:string[]}",
      },
    });
    (report.ops as unknown[]).push({
      op: "vision_punctual",
      ok: vis.ok,
      usage: vis.usage,
      reason: vis.reason ?? null,
      parsedKeys: vis.parsed ? Object.keys(vis.parsed) : [],
    });
  }

  // ——— 7 Nora product turn (semantic-qual + D4 toolScope) ———
  try {
    const { generateNoraReply } = await import(
      "../src/domains/conversation/nora-adapter.ts"
    );
    const { buildCognitivePolicy } = await import(
      "../src/domains/conversation/cognitive-policy.ts"
    );
    const policy = buildCognitivePolicy(
      "Investigation synthétique Gate B. WEB interdit. Pas d'effet D6.",
      "OPERATIONAL_PROVISIONAL",
      { profileHint: "analyse", modelHint: "gpt-6-luna", effortHint: "medium" },
    );
    const nora = await generateNoraReply({
      userText:
        "Confirme que semantic-qualification reste au cœur. Utilise les outils D4 si utile pour citer les acquis autorisés du projet. Ne crée aucune HumanDecision.",
      contextSnippets: [
        "WEB LIVE OFF. Campagne ml2-i2-docintel-20261127 Gate B.",
        "Architecture: KEEP Responses+semantic-qualification; ADAPT Decisions; E=lexical+PG embeddings; Vision ponctuelle.",
        "Acquis synthétique: Orion capacity = 12 (CURRENT).",
      ],
      policyOverride: policy,
      toolScope: {
        pilotId,
        preparationId,
        projectId,
        operationId: `gateb-op-${Date.now()}`,
        generationId: `gateb-gen-${Date.now()}`,
      },
    });
    report.nora = {
      status: nora.status,
      preview: (nora.content ?? "").slice(0, 500),
      modelApplied: nora.modelApplied,
      qualificationSchema: nora.qualification?.schemaVersion ?? null,
      usage: nora.usage ?? null,
      d6: false,
      toolsBound: true,
    };
  } catch (e) {
    report.nora = {
      status: "ERROR",
      error: e instanceof Error ? e.message.slice(0, 240) : "NORA_ERROR",
    };
  }

  report.envelopeAfter = getCampaignEnvelopeMetrics();
  const httpAfter =
    (report.envelopeAfter as { httpAttemptsCommitted?: number })
      ?.httpAttemptsCommitted ?? 0;
  report.httpDelta = httpAfter - httpBefore;
  const withinCap = (report.httpDelta as number) <= GATE_B_HTTP_CAP;
  report.verdict = withinCap
    ? "GATE_B_LIVE_WITHIN_CAP"
    : "GATE_B_HTTP_CAP_EXCEEDED";
  report.finishedAt = new Date().toISOString();
  writeFileSync(join(OUT, "gate-b-report.json"), JSON.stringify(report, null, 2));
  // Persist durable envelope snapshot for continuity
  if (existsSync(sharedState)) {
    copyFileSync(sharedState, join(OUT, "envelope-after.json"));
    copyFileSync(
      sharedState,
      join(
        process.cwd(),
        ".sfia-evidence/document-intelligence/live-campaign/envelope-state.json",
      ),
    );
  }
  console.log(JSON.stringify({
    verdict: report.verdict,
    httpDelta: report.httpDelta,
    httpBefore,
    httpAfter,
    ops: (report.ops as unknown[]).map((o) => (o as { op?: string }).op),
    nora: report.nora,
    negatives: report.negatives,
  }, null, 2));
  if (!withinCap) process.exit(2);
});
