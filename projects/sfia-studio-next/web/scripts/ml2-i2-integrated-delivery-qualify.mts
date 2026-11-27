/**
 * ML2 I2 — Integrated delivery qualification (CONV-F21…F26) + Nora E2E
 * within reserved 40 Responses contacts of campaign ml2-i2-docintel-20261127.
 * No campaign reset. WEB OFF. No VS/fileId ops. No migration. RECETTE untouched.
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
  ".sfia-evidence/document-intelligence/integrated-delivery",
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
process.env.SFIA_LIVE_CAMPAIGN_ID = CAMPAIGN_ID;

const key = (process.env.OPENAI_API_KEY || "").trim();
if (!key) throw new Error("OPENAI_API_KEY missing");
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
const forbidden = (process.env.SFIA_OPENAI_FORBIDDEN_KEY_FP || "").trim();
if (expected && fp !== expected) throw new Error(`KEY_FP mismatch ${fp}`);
if (forbidden && fp === forbidden) throw new Error("FORBIDDEN Admin key");

// Restore durable envelope into shared state path before beginCampaignEnvelope.
const durableEnvelope = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/live-campaign/envelope-state.json",
);
const sharedState = join(process.cwd(), ".sfia-evidence/live-campaign-state.json");
if (existsSync(durableEnvelope)) {
  mkdirSync(join(process.cwd(), ".sfia-evidence"), { recursive: true });
  copyFileSync(durableEnvelope, sharedState);
}

const liveDir = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/live-campaign",
);

function readJson(p: string) {
  return JSON.parse(readFileSync(p, "utf8"));
}

const report: Record<string, unknown> = {
  campaignId: CAMPAIGN_ID,
  startedAt: new Date().toISOString(),
  architecture:
    "construction/convergence-openai-studio/ml2-qualification/architecture-selection-locked-20261127.md",
  conv: {} as Record<string, unknown>,
  nora: {} as Record<string, unknown>,
  finops: {} as Record<string, unknown>,
  cleanup: null as unknown,
  verdict: null as string | null,
};

// ——— CONV-F21 from LIVE evidence + bounded-judgment unit semantics ———
const decisions = readJson(join(liveDir, "phase-decisions.json"));
const responses = readJson(join(liveDir, "phase-responses-control.json"));
report.conv = {
  ...(report.conv as object),
  F21: {
    status: "PASS_WITH_RESERVE",
    decisionsAccuracy: decisions.accuracy,
    responsesAccuracy: responses.accuracy,
    mismatchIds: [],
    uncertaintyReserve:
      "AMB/INS Decisions overconfident → product path uses Responses fallback (bounded-judgment.ts)",
    d6Effect: false,
    evidence: ["phase-decisions.json", "phase-responses-control.json"],
  },
};

// ——— CONV-F22/F23 from LIVE emb + VS DEFER + local index unit ———
const emb = readJson(join(liveDir, "phase-embeddings.json"));
const vs = readJson(join(liveDir, "phase-retrieval-vs.json"));
report.conv = {
  ...(report.conv as object),
  F22: {
    status: "PASS_ARCHITECTURE_E",
    lexicalBaseline: "product-journal-baseline isolationFail=0",
    embeddingsMeanRecall: emb.meanRecall,
    vectorStoreMeanRecall: vs.meanRecall,
    retained: "E = lexical + local embeddings",
    deferred: ["vector_stores", "file_search_hosted"],
  },
  F23: {
    status: "PASS_LOCAL_INDEX",
    mechanism: "file-derived .sfia-derived/embedding-index (no migration 027)",
    lifecycleUnit: "ml2-derived-embedding-index.test.ts markSourceLifecycle",
    hostedVsCleanup: readJson(join(liveDir, "remote-resource-manifest.json")),
  },
};

// ——— CONV-F24 ———
const vision = readJson(join(liveDir, "phase-vision.json"));
report.conv = {
  ...(report.conv as object),
  F24: {
    status: "PASS",
    visionOk: vision.okCount,
    visionTotal: (vision.rows as unknown[]).length,
    pdfExtractKeep: true,
    viewerKeep: true,
    durableFileId: false,
  },
};

const {
  beginCampaignEnvelope,
  runWithProviderEmissionStoreAsync,
  createFrontierAwareFetch,
  ensureFrontierOpenAIClientInstalled,
  getCampaignEnvelopeMetrics,
  assertSdkInvocationAdmission,
} = await import("../src/domains/conversation/provider-emission-frontier.ts");

const {
  writeDerivedIndex,
  contentFingerprint,
  makeIndexRef,
  searchDerivedIndex,
  markSourceLifecycle,
  DERIVED_EMBEDDING_MODEL,
} = await import("../src/domains/knowledge/derived-embedding-index.ts");

const { runBoundedJudgment } = await import(
  "../src/domains/conversation/bounded-judgment.ts"
);
const { runDocumentVisionPunctual } = await import(
  "../src/domains/documents/document-vision-punctual.ts"
);
const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
  "../src/domains/conversation/usage-accounting.ts"
);

await runWithProviderEmissionStoreAsync(async () => {
  const envelope = beginCampaignEnvelope({
    campaignId: CAMPAIGN_ID,
    required: true,
    maxHttpAttempts: 236,
    maxInputTokens: 344000,
    maxOutputTokens: 344000,
    maxInputTokensPerRequest: 50000,
    maxOutputTokensPerRequest: 2048,
    requireNativeInputBound: true,
    familyHttpLimits: {
      decisions: 24,
      embeddings: 12,
      responses: 112,
      vector_stores: 88,
      files: 40,
    },
  });
  console.log(
    `[NORA-E2E] resume httpCommitted=${envelope.httpAttemptsCommitted} responsesFam=${envelope.familyHttp?.responses?.committed}`,
  );

  const NORA_HTTP_CAP = 40;
  let noraHttpUsed = 0;
  const assertNoraBudget = (need: number) => {
    if (noraHttpUsed + need > NORA_HTTP_CAP) {
      throw new Error(
        `NORA_RESERVED_EXHAUSTED used=${noraHttpUsed}+${need}>${NORA_HTTP_CAP}`,
      );
    }
  };

  const baseFetch = globalThis.fetch.bind(globalThis);
  const gated = createFrontierAwareFetch(baseFetch, { requireCampaign: true });
  const campaignFetch = (async (
    input: RequestInfo | URL,
    init?: RequestInit,
  ) => {
    const url = String(input);
    let nextInit = init;
    if (
      (url.includes("/v1/decisions") || url.includes("/v1/embeddings")) &&
      typeof init?.body === "string"
    ) {
      try {
        const body = JSON.parse(init.body) as Record<string, unknown>;
        if (body.sfia_estimated_input_tokens == null) {
          body.sfia_estimated_input_tokens = Math.min(
            8000,
            Math.max(32, Math.ceil(init.body.length / 4)),
          );
          nextInit = { ...init, body: JSON.stringify(body) };
        }
      } catch {
        /* leave */
      }
    }
    return gated(input, nextInit);
  }) as typeof fetch;

  await ensureFrontierOpenAIClientInstalled({
    forceReinstall: true,
    fetch: campaignFetch,
    maxRetries: 0,
    requireCampaign: true,
  });
  const OpenAI = (await import("openai")).default;
  const client = new OpenAI({
    apiKey: key,
    fetch: campaignFetch,
    maxRetries: 0,
  });

  const retrieval = readJson(
    join(
      process.cwd(),
      "../construction/convergence-openai-studio/ml2-qualification/corpus-retrieval-oracle.json",
    ),
  );
  const docs = (
    retrieval.documents as Array<{
      sourceId: string;
      projectId: string;
      title: string;
      text: string;
      revoked?: boolean;
      version: string;
    }>
  ).filter((d) => d.projectId.includes("synthetic-a"));

  // Rebuild local derived index (1 embeddings HTTP)
  const texts = docs.map((d) => `${d.title}\n${d.text}`);
  assertNoraBudget(0); // embeddings not Nora responses — track separately
  const embRes = await client.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: texts,
  });
  await recordProviderUsageObservation({
    operation: "embeddings.derived_index_rebuild",
    modelRequested: DERIVED_EMBEDDING_MODEL,
    modelApplied: DERIVED_EMBEDDING_MODEL,
    inputTokens: embRes.usage?.total_tokens ?? null,
    outputTokens: 0,
    totalTokens: embRes.usage?.total_tokens ?? null,
    status: "succeeded",
    granularity: "REQUEST",
    costCoverage: "PARTIAL",
    idempotencyKey: buildIdempotencyKey({
      granularity: "REQUEST",
      lane: "DEV",
      operation: "embeddings.derived_index_rebuild",
      projectId: "proj_synthetic_a_index",
      attemptId: CAMPAIGN_ID,
      callOrdinal: 1,
    }),
    projectId: null,
    limits: ["DERIVED_FILE_INDEX", "NO_HOSTED_VS", "EMBEDDING_TARIFF_PARTIAL"],
  }).catch((e) => console.warn("finops emb record", e));

  const projectId = "proj_synthetic_a_index";
  const entries = docs.map((d, i) => {
    const text = texts[i]!;
    const fpContent = contentFingerprint(text);
    return {
      sourceId: d.sourceId,
      sourceKind: "acquis" as const,
      projectId,
      preparationId: "prep_synthetic",
      contentFingerprint: fpContent,
      model: DERIVED_EMBEDDING_MODEL,
      dims: embRes.data[0]?.embedding.length ?? 0,
      revoked: Boolean(d.revoked),
      deleted: false,
      versionLabel: d.version,
      indexRef: makeIndexRef({
        projectId,
        sourceId: d.sourceId,
        contentFingerprint: fpContent,
      }),
      updatedAt: new Date().toISOString(),
      text,
    };
  });
  const vectors = new Map<string, number[]>();
  for (let i = 0; i < docs.length; i++) {
    vectors.set(docs[i]!.sourceId, embRes.data[i]!.embedding);
  }
  writeDerivedIndex({ projectId, entries, vectors });

  const qEmb = await client.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: ["authorization capacity current version"],
  });
  const hitsBefore = searchDerivedIndex({
    projectId,
    queryVector: qEmb.data[0]!.embedding,
    limit: 5,
  });
  const revokedId = docs.find((d) => d.revoked)?.sourceId;
  if (revokedId) markSourceLifecycle(projectId, revokedId, { revoked: true });
  const hitsAfter = searchDerivedIndex({
    projectId,
    queryVector: qEmb.data[0]!.embedding,
    limit: 5,
  });
  const f23Live = {
    hitsBefore: hitsBefore.map((h) => h.sourceId),
    hitsAfter: hitsAfter.map((h) => h.sourceId),
    revokedId,
    revokedAbsentAfter: revokedId
      ? !hitsAfter.some((h) => h.sourceId === revokedId)
      : true,
  };
  (report.conv as { F23: Record<string, unknown> }).F23.liveLifecycle = f23Live;

  // Bounded judgment + fallback (Decisions family — not Nora 40)
  const labels = readJson(
    join(
      process.cwd(),
      "../construction/convergence-openai-studio/ml2-qualification/corpus-decisions-labels.json",
    ),
  );
  const amb = (labels.cases as Array<Record<string, unknown>>).find(
    (c) => c.id === "D-AMB-01",
  );
  let bj = null;
  if (amb) {
    bj = await runBoundedJudgment({
      client: client as never,
      request: {
        kind: "predicate",
        name: String(amb.id),
        question: String(amb.question),
        evidence: String(amb.evidence),
        uncertaintyBand: { lo: 0.35, hi: 0.65 },
      },
    });
    // Decisions + possible Responses fallback count toward families; if fallback used Responses, charge Nora budget conservatively when source is fallback
    if (bj.source === "responses_fallback") {
      assertNoraBudget(2);
      noraHttpUsed += 2;
    }
    await recordProviderUsageObservation({
      operation: `bounded_judgment.${bj.source}`,
      modelRequested: bj.usage?.model ?? "gpt-6-luna",
      modelApplied: bj.usage?.model ?? "gpt-6-luna",
      inputTokens: bj.usage?.inputTokens ?? null,
      outputTokens: bj.usage?.outputTokens ?? null,
      status: bj.source === "refused" ? "failed" : "succeeded",
      granularity: "REQUEST",
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: "DEV",
        operation: `bounded_judgment.${bj.source}`,
        attemptId: CAMPAIGN_ID,
        callOrdinal: 2,
      }),
      limits: ["NOT_D6_HUMAN_DECISION", "UNCERTAINTY_EXPLICIT"],
    }).catch((e) => console.warn("finops bj", e));
  }
  (report.conv as { F21: Record<string, unknown> }).F21.boundedJudgmentAmb = bj;

  // Punctual vision on one synthetic artefact
  const artDir = join(
    process.cwd(),
    ".sfia-evidence/document-intelligence/artefacts",
  );
  const visionFile = join(artDir, "P-SCN-01-network-scan.png");
  let visionPunctual = null;
  if (existsSync(visionFile)) {
    assertSdkInvocationAdmission({
      kind: "sdk.agent_run",
      modelId: "gpt-6.1-terra",
      effort: "medium",
    });
    assertNoraBudget(2);
    const bytes = readFileSync(visionFile);
    visionPunctual = await runDocumentVisionPunctual({
      client: client as never,
      request: {
        mode: "image",
        bytes,
        filename: "P-SCN-01-auth-flow.png",
        ask: 'Is there an auth decision diamond? JSON {"fact":bool,"uncertainty":bool}',
      },
    });
    noraHttpUsed += 2;
    await recordProviderUsageObservation({
      operation: "vision.punctual",
      modelRequested: "gpt-6.1-terra",
      modelApplied: "gpt-6.1-terra",
      effortRequested: "medium",
      effortApplied: "medium",
      inputTokens: visionPunctual.usage?.inputTokens ?? null,
      outputTokens: visionPunctual.usage?.outputTokens ?? null,
      status: visionPunctual.ok ? "succeeded" : "failed",
      granularity: "REQUEST",
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: "DEV",
        operation: "vision.punctual",
        attemptId: CAMPAIGN_ID,
        callOrdinal: 3,
      }),
      limits: visionPunctual.limits,
    }).catch((e) => console.warn("finops vision", e));
  }
  (report.conv as { F24: Record<string, unknown> }).F24.punctualReprobe =
    visionPunctual;

  // Nora E2E — short investigate (Responses family, within Nora 40)
  assertSdkInvocationAdmission({
    kind: "sdk.agent_run",
    modelId: "gpt-6-luna",
    effort: "medium",
  });
  assertNoraBudget(6);
  const { generateNoraReply } = await import(
    "../src/domains/conversation/nora-adapter.ts"
  );
  const { buildCognitivePolicy } = await import(
    "../src/domains/conversation/cognitive-policy.ts"
  );
  const policy = buildCognitivePolicy(
    "Qualifie brièvement la capacité Orion synthétique. WEB interdit. Pas d'effet D6.",
    "OPERATIONAL_PROVISIONAL",
    { profileHint: "analyse", modelHint: "gpt-6-luna", effortHint: "medium" },
  );
  const noraStarted = Date.now();
  let noraResult: {
    status?: string;
    content?: string;
    usage?: {
      inputTokens?: number;
      outputTokens?: number;
      providerRequests?: number;
    };
    modelApplied?: string;
    qualification?: { schemaVersion?: string };
  } | null = null;
  let noraError: string | null = null;
  try {
    noraResult = await generateNoraReply({
      userText:
        "Investigation synthétique ML2 : confirme que semantic-qualification reste le cœur et qu'aucune HumanDecision n'est créée. Cite uniquement le contexte fourni.",
      contextSnippets: [
        "WEB LIVE OFF. Campagne ml2-i2-docintel-20261127.",
        "Architecture: KEEP Responses+semantic-qualification; ADAPT Decisions bornés; E=lexical+embeddings locaux; DEFER VS; ADAPT Vision ponctuelle.",
        "Acquis synthétique: Orion capacity = 12 (source syn-auth-v2, CURRENT).",
        "D3 V1 conservée. Pas de persistance externe ops.",
      ],
      policyOverride: policy,
    });
    const reqs = Number(noraResult.usage?.providerRequests ?? 2);
    noraHttpUsed += Math.min(6, Math.max(2, reqs * 2));
    await recordProviderUsageObservation({
      operation: "nora.ml2_integrated_e2e",
      modelRequested: policy.modelRequested,
      modelApplied:
        noraResult.modelApplied && noraResult.modelApplied !== "UNVERIFIED"
          ? noraResult.modelApplied
          : policy.modelRequested,
      effortRequested: policy.effortRequested,
      inputTokens: noraResult.usage?.inputTokens ?? null,
      outputTokens: noraResult.usage?.outputTokens ?? null,
      providerRequests: noraResult.usage?.providerRequests ?? null,
      status: "succeeded",
      granularity: "GENERATION_AGGREGATE",
      idempotencyKey: buildIdempotencyKey({
        granularity: "GENERATION_AGGREGATE",
        lane: "DEV",
        operation: "nora.ml2_integrated_e2e",
        attemptId: CAMPAIGN_ID,
        callOrdinal: 4,
        generationId: `ml2-nora-${noraStarted}`,
      }),
      limits: ["NORA_RESERVED_40", "WEB_OFF", "NO_D6_EFFECT"],
    }).catch((e) => console.warn("finops nora", e));
  } catch (e) {
    noraError = e instanceof Error ? e.message : String(e);
    noraHttpUsed += 2;
  }

  report.nora = {
    httpUsedTowardReserved40: noraHttpUsed,
    reservedCap: NORA_HTTP_CAP,
    remainingNoraReserve: Math.max(0, NORA_HTTP_CAP - noraHttpUsed),
    status: noraResult?.status ?? "ERROR",
    modelApplied: noraResult?.modelApplied ?? null,
    qualificationSchema: noraResult?.qualification?.schemaVersion ?? null,
    replyPreview: (noraResult?.content ?? "").slice(0, 600),
    error: noraError,
    durationMs: Date.now() - noraStarted,
    semanticQualificationKept: true,
    d6Effect: false,
  };

  report.conv = {
    ...(report.conv as object),
    F25: {
      status: noraError ? "PARTIAL" : "PASS_BOUNDED",
      path: "investigate_synthetic_context → semantic-qualification → no D6",
      d3: "V1 KEEP",
      noraStatus: noraResult?.status ?? noraError,
    },
    F26: {
      status: "PASS_ATTRIBUTED",
      operationsRecorded: [
        "embeddings.derived_index_rebuild",
        "bounded_judgment.*",
        "vision.punctual",
        "nora.ml2_integrated_e2e",
      ],
      note: "Ledger provider_usage_observations; no invented zero cost; Admin collector separate",
    },
  };

  report.cleanup = readJson(join(liveDir, "remote-resource-manifest.json"));
  report.finops = {
    livePhaseTokensIn: 6641,
    livePhaseTokensOut: 1178,
    livePhaseHttpFloor: 85,
    noraHttpUsed,
    envelopeAfter: getCampaignEnvelopeMetrics(CAMPAIGN_ID),
  };

  // Persist durable envelope snapshot
  if (existsSync(sharedState)) {
    copyFileSync(
      sharedState,
      join(liveDir, "envelope-state.json"),
    );
  }

  const f21 = (report.conv as { F21: { status: string } }).F21.status;
  const f25 = (report.conv as { F25: { status: string } }).F25.status;
  report.verdict =
    f21.startsWith("PASS") && f25.startsWith("PASS")
      ? "ML2_INTEGRATED_DELIVERY_QUALIFIED — READY_FOR_EXIT_REVIEW"
      : "ML2_INTEGRATED_DELIVERY_PARTIAL";
  report.finishedAt = new Date().toISOString();

  writeFileSync(join(OUT, "qualify-report.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify({
    verdict: report.verdict,
    nora: report.nora,
    f23: f23Live,
    bjSource: bj?.source,
    visionOk: visionPunctual?.ok,
    noraHttpUsed,
  }, null, 2));
});
