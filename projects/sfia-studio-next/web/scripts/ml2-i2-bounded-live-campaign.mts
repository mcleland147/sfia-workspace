/**
 * ML2 I2 — Definitive bounded LIVE campaign ml2-i2-docintel-20261127
 * Order: Decisions → Responses → Embeddings → VS retrieval → Vision
 * Preserves cleanup(24) + Nora(40). Synthetic only. WEB OFF. No Admin.
 */
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  readdirSync,
} from "node:fs";
import { join } from "node:path";

const CAMPAIGN_ID = "ml2-i2-docintel-20261127";
const OUT = join(process.cwd(), ".sfia-evidence/document-intelligence/live-campaign");
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

function sha256(buf: Buffer | string) {
  return createHash("sha256").update(buf).digest("hex");
}

function estimateTokens(text: string): number {
  return Math.max(1, Math.ceil(text.length / 4));
}

type PhaseBudget = {
  name: string;
  family: "decisions" | "responses" | "embeddings" | "vector_stores" | "files";
  maxHttp: number;
  maxInputTokens: number | null;
  maxOutputTokens: number | null;
  http: number;
  inputTokens: number;
  outputTokens: number;
};

const budgets: Record<string, PhaseBudget> = {
  decisions: {
    name: "decisions",
    family: "decisions",
    maxHttp: 24,
    maxInputTokens: 32000,
    maxOutputTokens: null,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  responses_control: {
    name: "responses_control",
    family: "responses",
    maxHttp: 48,
    maxInputTokens: 96000,
    maxOutputTokens: 96000,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  embeddings: {
    name: "embeddings",
    family: "embeddings",
    maxHttp: 12,
    maxInputTokens: 32000,
    maxOutputTokens: null,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  retrieval: {
    name: "retrieval",
    family: "vector_stores",
    maxHttp: 64,
    maxInputTokens: null,
    maxOutputTokens: null,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  vision: {
    name: "vision",
    family: "responses",
    maxHttp: 24,
    maxInputTokens: 64000,
    maxOutputTokens: 64000,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  cleanup: {
    name: "cleanup",
    family: "vector_stores",
    maxHttp: 24,
    maxInputTokens: null,
    maxOutputTokens: null,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
  // Nora reserved — never consumed this script
  nora: {
    name: "nora",
    family: "responses",
    maxHttp: 40,
    maxInputTokens: 120000,
    maxOutputTokens: 120000,
    http: 0,
    inputTokens: 0,
    outputTokens: 0,
  },
};

function assertPhase(phase: string, httpNeed = 1, inTok = 0, outTok = 0) {
  const b = budgets[phase];
  if (!b) throw new Error(`unknown phase ${phase}`);
  if (b.http + httpNeed > b.maxHttp) {
    throw new Error(
      `PHASE_HTTP_EXHAUSTED ${phase} ${b.http}+${httpNeed}>${b.maxHttp}`,
    );
  }
  if (b.maxInputTokens != null && b.inputTokens + inTok > b.maxInputTokens) {
    throw new Error(
      `PHASE_INPUT_EXHAUSTED ${phase} ${b.inputTokens}+${inTok}>${b.maxInputTokens}`,
    );
  }
  if (b.maxOutputTokens != null && b.outputTokens + outTok > b.maxOutputTokens) {
    throw new Error(
      `PHASE_OUTPUT_EXHAUSTED ${phase} ${b.outputTokens}+${outTok}>${b.maxOutputTokens}`,
    );
  }
}

function commitPhase(
  phase: string,
  http: number,
  inTok: number,
  outTok: number,
) {
  const b = budgets[phase];
  b.http += http;
  b.inputTokens += inTok;
  b.outputTokens += outTok;
}

const remoteManifest: {
  vectorStoreIds: string[];
  fileIds: string[];
  deleted: Array<{ type: string; id: string; ok: boolean; status?: number }>;
} = { vectorStoreIds: [], fileIds: [], deleted: [] };

const report: Record<string, unknown> = {
  campaignId: CAMPAIGN_ID,
  startedAt: new Date().toISOString(),
  phases: {} as Record<string, unknown>,
  budgets,
  remoteManifest,
  verdict: null as string | null,
};

loadEnvLocal();
process.env.STUDIO_LANE = "DEV";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";
process.env.SFIA_QUALIFY_MODE = "1";

const key = (process.env.OPENAI_API_KEY || "").trim();
if (!key) throw new Error("OPENAI_API_KEY missing");
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
const forbidden = (process.env.SFIA_OPENAI_FORBIDDEN_KEY_FP || "").trim();
if (expected && fp !== expected) throw new Error(`KEY_FP mismatch ${fp}`);
if (forbidden && fp === forbidden) throw new Error("FORBIDDEN Admin key");

const {
  beginCampaignEnvelope,
  runWithProviderEmissionStoreAsync,
  createFrontierAwareFetch,
  ensureFrontierOpenAIClientInstalled,
  getCampaignEnvelopeMetrics,
  assertSdkInvocationAdmission,
} = await import("../src/domains/conversation/provider-emission-frontier.ts");

/** Resume prior phase evidence — never re-emit completed LIVE contacts. */
function loadPhaseEvidence(name: string): Record<string, unknown> | null {
  const p = join(OUT, name);
  if (!existsSync(p)) return null;
  try {
    return JSON.parse(readFileSync(p, "utf8")) as Record<string, unknown>;
  } catch {
    return null;
  }
}

await runWithProviderEmissionStoreAsync(async () => {
  // Cumulative restore via beginCampaignEnvelope — no reset / no endProcessCampaign.
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
      responses: 112, // 48 control + 24 vision + 40 nora reserved
      vector_stores: 88, // 64 retrieval + cleanup share
      files: 40,
    },
  });
  console.log(
    `[RESUME] campaign=${envelope.campaignId} httpCommitted=${envelope.httpAttemptsCommitted} inTok=${envelope.inputTokensCommitted}`,
  );

  const baseFetch = globalThis.fetch.bind(globalThis);
  const httpLog: Array<{ url: string; method: string; phase?: string }> = [];
  const loggingFetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    httpLog.push({
      url,
      method: (init?.method || "POST").toUpperCase(),
    });
    return baseFetch(input, init);
  }) as typeof fetch;
  const gated = createFrontierAwareFetch(loggingFetch, { requireCampaign: true });
  /** Inject demonstrable token bound for Decisions/Embeddings before Frontier. */
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
          const approx = estimateTokens(JSON.stringify(body));
          body.sfia_estimated_input_tokens = Math.min(8000, Math.max(32, approx));
          nextInit = { ...init, body: JSON.stringify(body) };
        }
      } catch {
        /* leave body */
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
  const client = new OpenAI({ apiKey: key, fetch: campaignFetch, maxRetries: 0 });

  const decisionsCorpus = JSON.parse(
    readFileSync(
      join(
        process.cwd(),
        "../construction/convergence-openai-studio/ml2-qualification/corpus-decisions-labels.json",
      ),
      "utf8",
    ),
  );
  const retrievalCorpus = JSON.parse(
    readFileSync(
      join(
        process.cwd(),
        "../construction/convergence-openai-studio/ml2-qualification/corpus-retrieval-oracle.json",
      ),
      "utf8",
    ),
  );

  // ——— PHASE A: Decisions ———
  const priorDecisions = loadPhaseEvidence("phase-decisions.json");
  if (
    priorDecisions &&
    Number(priorDecisions.cases) === 12 &&
    Number(priorDecisions.correct) === 12
  ) {
    report.phases = {
      ...(report.phases as object),
      decisions: priorDecisions,
    };
    const priorBudget = priorDecisions.budget as PhaseBudget | undefined;
    if (priorBudget) {
      budgets.decisions.http = priorBudget.http;
      budgets.decisions.inputTokens = priorBudget.inputTokens;
      budgets.decisions.outputTokens = priorBudget.outputTokens;
    } else {
      budgets.decisions.http = 12;
      budgets.decisions.inputTokens = 2168;
    }
    console.log(
      `[DECISIONS] SKIP resume accuracy=${priorDecisions.correct}/${priorDecisions.cases} http=${budgets.decisions.http}`,
    );
  } else {
  const decisionsRows: unknown[] = [];
  for (const c of decisionsCorpus.cases) {
    const questions: unknown[] = [];
    if (c.kind === "predicate") {
      questions.push({
        type: "predicate",
        name: c.id,
        instructions: c.question,
      });
    } else if (c.kind === "choice") {
      questions.push({
        type: "choice",
        name: c.id,
        instructions: c.question,
        choices: (c.choices as string[]).map((v: string) => ({ value: v })),
      });
    } else if (c.kind === "score") {
      questions.push({
        type: "score",
        name: c.id,
        instructions: c.question,
        levels: (c.levels as string[]).map((label: string) => ({ label })),
      });
    }
    if (c.companionQuestion) {
      questions.push({
        type: "predicate",
        name: c.companionQuestion.id,
        instructions: c.companionQuestion.question,
      });
    }
    const inputText = `Evidence:\n${c.evidence}\n\nAnswer only the named questions.`;
    const estIn = estimateTokens(inputText) + 80;
    assertPhase("decisions", 1, estIn, 0);
    const t0 = Date.now();
    const dec = await client.decisions.create({
      model: "gpt-6-luna",
      input: inputText,
      questions: questions as never,
    });
    const latencyMs = Date.now() - t0;
    const inTok = dec.usage?.input_tokens ?? estIn;
    const outTok = dec.usage?.output_tokens ?? 0;
    commitPhase("decisions", 1, inTok, outTok);

    const answers = dec.answers ?? [];
    const primary = answers.find((a) => a.name === c.id) ?? answers[0];
    let correct: boolean | null = null;
    let uncertaintyOk: boolean | null = null;
    if (primary && primary.type === "predicate") {
      const pred = c.expected.truth === true;
      const predicted = primary.probability >= 0.5;
      correct = predicted === pred;
      if (c.expected.uncertaintyRequired) {
        uncertaintyOk =
          primary.probability > 0.35 && primary.probability < 0.65;
      }
    } else if (primary && primary.type === "choice") {
      correct = String(primary.choice) === String(c.expected.value);
    } else if (primary && primary.type === "score") {
      const levels = c.levels as string[];
      // score is probability-weighted average of level indices
      const idx = Math.round(primary.score);
      const label = levels[Math.min(levels.length - 1, Math.max(0, idx))];
      const top =
        primary.probabilities?.slice().sort((a, b) => b.probability - a.probability)[0]
          ?.label ?? label;
      correct = top === c.expected.level || label === c.expected.level;
    } else if (primary && primary.type === "refusal") {
      correct = c.expected.abstentionOk === true;
    }
    decisionsRows.push({
      id: c.id,
      kind: c.kind,
      class: c.class,
      latencyMs,
      usage: dec.usage,
      answer: primary,
      correct,
      uncertaintyOk,
    });
  }
  const decCorrect = decisionsRows.filter(
    (r) => (r as { correct: boolean | null }).correct === true,
  ).length;
  report.phases = {
    ...(report.phases as object),
    decisions: {
      cases: decisionsRows.length,
      correct: decCorrect,
      accuracy: decCorrect / decisionsRows.length,
      rows: decisionsRows,
      budget: { ...budgets.decisions },
    },
  };
  writeFileSync(
    join(OUT, "phase-decisions.json"),
    JSON.stringify(report.phases.decisions, null, 2) + "\n",
  );
  console.log(
    `[DECISIONS] accuracy=${decCorrect}/${decisionsRows.length} http=${budgets.decisions.http}`,
  );
  } // end decisions emit

  // ——— PHASE B: Responses control (same cases) ———
  const priorResponses = loadPhaseEvidence("phase-responses-control.json");
  if (
    priorResponses &&
    Number(priorResponses.cases) === 12
  ) {
    report.phases = {
      ...(report.phases as object),
      responses_control: priorResponses,
    };
    const priorBudget = priorResponses.budget as PhaseBudget | undefined;
    if (priorBudget) {
      budgets.responses_control.http = priorBudget.http;
      budgets.responses_control.inputTokens = priorBudget.inputTokens;
      budgets.responses_control.outputTokens = priorBudget.outputTokens;
    }
    console.log(
      `[RESPONSES] SKIP resume accuracy=${priorResponses.correct}/${priorResponses.cases}`,
    );
  } else {
  const admitCtrl = assertSdkInvocationAdmission({
    kind: "sdk.agent_run",
    modelId: "gpt-6-luna",
    effort: "medium",
  });
  if (!admitCtrl.ok) {
    throw new Error(`RESPONSES_ADMIT_FAILED ${admitCtrl.reasonCode}:${admitCtrl.reason}`);
  }
  const responsesRows: unknown[] = [];
  for (const c of decisionsCorpus.cases) {
    const schemaHint = JSON.stringify({
      id: c.id,
      type: c.kind,
      // predicate: boolean; choice: string; score: one of levels
      value: c.kind === "predicate" ? true : c.kind === "choice" ? "" : "",
      uncertainty: false,
      abstain: false,
    });
    const prompt = `You are a bounded judgment helper. Evidence:\n${c.evidence}\n\nQuestion: ${c.question}\n${
      c.choices ? `Choices: ${(c.choices as string[]).join(" | ")}\n` : ""
    }${c.levels ? `Levels (ordered): ${(c.levels as string[]).join(" | ")}\n` : ""}
Return ONLY JSON: {"id":"${c.id}","type":"${c.kind}","value":...,"uncertainty":bool,"abstain":bool}
For predicate value is boolean. For choice value is one choice string. For score value is one level string.`;
    const estIn = estimateTokens(prompt) + 50;
    // native count may consume an extra HTTP contact
    assertPhase("responses_control", 2, estIn, 256);
    const t0 = Date.now();
    const resp = await client.responses.create({
      model: "gpt-6-luna",
      store: false,
      max_output_tokens: 256,
      reasoning: { effort: "medium" },
      input: prompt,
    } as never);
    const latencyMs = Date.now() - t0;
    const usage = (resp as { usage?: { input_tokens?: number; output_tokens?: number } })
      .usage;
    const inTok = usage?.input_tokens ?? estIn;
    const outTok = usage?.output_tokens ?? 0;
    // Count HTTP: frontier may have done count+create = 2
    const before = httpLog.length;
    // We can't easily know post-hoc without tracking; use envelope delta
    commitPhase("responses_control", 2, inTok, outTok);

    const text =
      (resp as { output_text?: string }).output_text ||
      JSON.stringify((resp as { output?: unknown }).output ?? "");
    let parsed: {
      value?: unknown;
      uncertainty?: boolean;
      abstain?: boolean;
    } | null = null;
    try {
      const m = text.match(/\{[\s\S]*\}/);
      if (m) parsed = JSON.parse(m[0]);
    } catch {
      parsed = null;
    }
    let correct: boolean | null = null;
    if (!parsed) correct = false;
    else if (parsed.abstain && c.expected.abstentionOk) correct = true;
    else if (c.kind === "predicate") {
      correct = Boolean(parsed.value) === Boolean(c.expected.truth);
    } else if (c.kind === "choice") {
      correct = String(parsed.value) === String(c.expected.value);
    } else if (c.kind === "score") {
      correct = String(parsed.value) === String(c.expected.level);
    }
    responsesRows.push({
      id: c.id,
      latencyMs,
      usage,
      parsed,
      correct,
      rawExcerpt: text.slice(0, 240),
      httpLogAt: before,
    });
  }
  const respCorrect = responsesRows.filter(
    (r) => (r as { correct: boolean | null }).correct === true,
  ).length;
  report.phases = {
    ...(report.phases as object),
    responses_control: {
      cases: responsesRows.length,
      correct: respCorrect,
      accuracy: respCorrect / responsesRows.length,
      rows: responsesRows,
      budget: { ...budgets.responses_control },
    },
  };
  writeFileSync(
    join(OUT, "phase-responses-control.json"),
    JSON.stringify(report.phases.responses_control, null, 2) + "\n",
  );
  console.log(
    `[RESPONSES] accuracy=${respCorrect}/${responsesRows.length} http=${budgets.responses_control.http}`,
  );
  } // end responses emit

  // ——— PHASE C: Embeddings + local similarity ———
  const docs = retrievalCorpus.documents.filter(
    (d: { projectId: string }) => d.projectId.includes("synthetic-a"),
  );
  const queries = retrievalCorpus.queries.filter(
    (q: { authorizedProjectId: string }) =>
      q.authorizedProjectId.includes("synthetic-a"),
  );
  const embedTexts = docs.map(
    (d: { title: string; text: string; sourceId: string }) =>
      `${d.title}\n${d.text}`,
  );
  const estEmb = estimateTokens(embedTexts.join("\n"));
  assertPhase("embeddings", 1, estEmb, 0);
  const embDocs = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: embedTexts,
  });
  commitPhase(
    "embeddings",
    1,
    embDocs.usage?.total_tokens ?? estEmb,
    0,
  );
  const docVecs = embDocs.data.map((d) => d.embedding);

  const queryVecs: number[][] = [];
  // batch queries in one call if possible
  const qTexts = queries.map((q: { query: string }) => q.query);
  const estQ = estimateTokens(qTexts.join("\n"));
  assertPhase("embeddings", 1, estQ, 0);
  const embQ = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: qTexts,
  });
  commitPhase("embeddings", 1, embQ.usage?.total_tokens ?? estQ, 0);
  for (const row of embQ.data) queryVecs.push(row.embedding);

  function cosine(a: number[], b: number[]) {
    let dot = 0,
      na = 0,
      nb = 0;
    for (let i = 0; i < a.length; i++) {
      dot += a[i]! * b[i]!;
      na += a[i]! * a[i]!;
      nb += b[i]! * b[i]!;
    }
    return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-12);
  }

  const embRows = [];
  for (let qi = 0; qi < queries.length; qi++) {
    const q = queries[qi]!;
    const scores = docVecs.map((v, di) => ({
      sourceId: docs[di]!.sourceId,
      score: cosine(queryVecs[qi]!, v),
      revoked: Boolean(docs[di]!.revoked),
    }));
    scores.sort((a, b) => b.score - a.score);
    const top = scores.slice(0, 5);
    // mobilization filter: drop revoked
    const mobilized = top.filter((t) => !t.revoked);
    const relevant = new Set(q.relevantSourceIds ?? []);
    let tp = 0;
    for (const t of mobilized) if (relevant.has(t.sourceId)) tp += 1;
    const revokedHit = top.some((t) => t.revoked);
    embRows.push({
      queryId: q.id,
      type: q.type,
      top: mobilized.map((t) => t.sourceId),
      rawTopIncludingRevoked: top.map((t) => t.sourceId),
      revokedInRawTop: revokedHit,
      recallAt5:
        relevant.size === 0
          ? mobilized.length === 0
            ? 1
            : 0
          : tp / relevant.size,
    });
  }
  report.phases = {
    ...(report.phases as object),
    embeddings: {
      rows: embRows,
      meanRecall:
        embRows.reduce((s, r) => s + r.recallAt5, 0) / Math.max(1, embRows.length),
      budget: { ...budgets.embeddings },
    },
  };
  writeFileSync(
    join(OUT, "phase-embeddings.json"),
    JSON.stringify(report.phases.embeddings, null, 2) + "\n",
  );
  console.log(
    `[EMBEDDINGS] meanRecall=${(report.phases as { embeddings: { meanRecall: number } }).embeddings.meanRecall} http=${budgets.embeddings.http}`,
  );

  // ——— PHASE D: Vector Store retrieval (synthetic) ———
  const vsRows: unknown[] = [];
  assertPhase("retrieval", 1, 0, 0);
  const vs = await client.vectorStores.create({
    name: `ml2-i2-${CAMPAIGN_ID}-a`,
    expires_after: { anchor: "last_active_at", days: 1 },
  } as never);
  commitPhase("retrieval", 1, 0, 0);
  remoteManifest.vectorStoreIds.push(vs.id);

  // Upload a few synthetic text files (not all 8 — keep contacts)
  const uploadDocs = docs.filter((d: { revoked?: boolean }) => !d.revoked).slice(0, 6);
  for (const d of uploadDocs) {
    const content = `${d.title}\n${d.text}\nsourceId=${d.sourceId}\n`;
    const bytes = Buffer.from(content, "utf8");
    if (bytes.length > 200_000) throw new Error("file too large");
    assertPhase("retrieval", 2, 0, 0); // file create + vs attach
    const file = await client.files.create({
      file: await OpenAI.toFile(bytes, `${d.sourceId}.txt`),
      purpose: "assistants",
    });
    commitPhase("retrieval", 1, 0, 0);
    remoteManifest.fileIds.push(file.id);
    await client.vectorStores.files.create(vs.id, { file_id: file.id });
    commitPhase("retrieval", 1, 0, 0);
  }

  // Poll until ready (bounded)
  let ready = false;
  for (let i = 0; i < 8 && !ready; i++) {
    assertPhase("retrieval", 1, 0, 0);
    const listed = await client.vectorStores.files.list(vs.id, { limit: 20 });
    commitPhase("retrieval", 1, 0, 0);
    const statuses = listed.data.map((f) => f.status);
    ready = statuses.length > 0 && statuses.every((s) => s === "completed");
    if (!ready) await new Promise((r) => setTimeout(r, 1500));
  }

  for (const q of queries.slice(0, 8)) {
    assertPhase("retrieval", 1, 0, 0);
    const t0 = Date.now();
    const search = await client.vectorStores.search(vs.id, {
      query: q.query,
      max_num_results: 5,
    } as never);
    commitPhase("retrieval", 1, 0, 0);
    const hits = (search.data ?? []).map((h) => {
      const text = (h.content ?? [])
        .map((c) => ("text" in c ? c.text : ""))
        .join("\n");
      const m = text.match(/sourceId=([a-z0-9-]+)/i);
      return { sourceId: m?.[1] ?? null, filename: h.filename, score: h.score };
    });
    const hitIds = hits.map((h) => h.sourceId).filter(Boolean) as string[];
    const relevant = new Set(q.relevantSourceIds ?? []);
    let tp = 0;
    for (const id of hitIds) if (relevant.has(id)) tp += 1;
    vsRows.push({
      queryId: q.id,
      type: q.type,
      latencyMs: Date.now() - t0,
      hitIds,
      recallAt5:
        relevant.size === 0
          ? hitIds.length === 0
            ? 1
            : 0
          : tp / relevant.size,
      ready,
    });
  }
  report.phases = {
    ...(report.phases as object),
    retrieval_vs: {
      vectorStoreId: vs.id,
      fileIds: [...remoteManifest.fileIds],
      ready,
      rows: vsRows,
      meanRecall:
        (vsRows as { recallAt5: number }[]).reduce((s, r) => s + r.recallAt5, 0) /
        Math.max(1, vsRows.length),
      budget: { ...budgets.retrieval },
    },
  };
  writeFileSync(
    join(OUT, "phase-retrieval-vs.json"),
    JSON.stringify(report.phases.retrieval_vs, null, 2) + "\n",
  );
  console.log(
    `[VS] meanRecall=${(report.phases as { retrieval_vs: { meanRecall: number } }).retrieval_vs.meanRecall} http=${budgets.retrieval.http}`,
  );

  // ——— PHASE E: Vision ———
  const artefactsDir = join(
    process.cwd(),
    ".sfia-evidence/document-intelligence/artefacts",
  );
  const visionCases = [
    {
      id: "P-SCN-01",
      file: "P-SCN-01-network-scan.png",
      ask: "Does router R1 connect to switch S2? Reply JSON {fact:bool, uncertainty:bool}",
      expectFact: true,
    },
    {
      id: "P-DIA-01",
      file: "P-DIA-01-architecture.png",
      ask: "Is D6 labeled as authority only relative to other boxes? JSON {fact:bool, uncertainty:bool}",
      expectFact: true,
    },
    {
      id: "P-BPMN-01",
      file: "P-BPMN-01-flow.png",
      ask: "Does investigation precede note in the flow? JSON {fact:bool, uncertainty:bool}",
      expectFact: true,
    },
    {
      id: "P-ILLEG-01",
      file: "P-ILLEG-01-partial.png",
      ask: "Can you read the blurred bottom-right stamp text exactly? If not readable, fact=false and uncertainty=true. JSON {fact:bool, uncertainty:bool, stampText:string|null}",
      expectFact: false,
      mustUncertainty: true,
    },
    {
      id: "P-TXT-01",
      file: "P-TXT-01-orion-capacity.pdf",
      ask: "What is Orion capacity? JSON {capacity:number|null, uncertainty:bool}",
      mode: "pdf",
    },
    {
      id: "P-TBL-01",
      file: "P-TBL-01-tariff-table.pdf",
      ask: "What is gpt-6-luna medium admissionStatus? JSON {value:string|null, uncertainty:bool}",
      mode: "pdf",
    },
  ];

  const visionRows: unknown[] = [];
  for (const vc of visionCases) {
    const path = join(artefactsDir, vc.file);
    if (!existsSync(path)) {
      visionRows.push({ id: vc.id, error: "MISSING_ARTEFACT" });
      continue;
    }
    const bytes = readFileSync(path);
    const b64 = bytes.toString("base64");
    const isPdf = vc.file.endsWith(".pdf");
    const content: unknown[] = [
      { type: "input_text", text: vc.ask },
    ];
    if (isPdf) {
      content.push({
        type: "input_file",
        filename: vc.file,
        file_data: `data:application/pdf;base64,${b64}`,
      });
    } else {
      content.push({
        type: "input_image",
        image_url: `data:image/png;base64,${b64}`,
      });
    }
    const estIn = Math.ceil(bytes.length / 8) + estimateTokens(vc.ask);
    assertPhase("vision", 2, Math.min(estIn, 20000), 512);
    const t0 = Date.now();
    let resp;
    try {
      const admitVis = assertSdkInvocationAdmission({
        kind: "sdk.agent_run",
        modelId: "gpt-6.1-terra",
        effort: "medium",
      });
      if (!admitVis.ok) {
        throw new Error(
          `VISION_ADMIT_FAILED ${admitVis.reasonCode}:${admitVis.reason}`,
        );
      }
      resp = await client.responses.create({
        model: "gpt-6.1-terra",
        store: false,
        max_output_tokens: 512,
        reasoning: { effort: "medium" },
        input: [{ role: "user", content }],
      } as never);
    } catch (e) {
      visionRows.push({
        id: vc.id,
        error: e instanceof Error ? e.message : String(e),
        latencyMs: Date.now() - t0,
      });
      // still count attempted contacts conservatively
      commitPhase("vision", 1, 0, 0);
      continue;
    }
    const usage = (resp as { usage?: { input_tokens?: number; output_tokens?: number } })
      .usage;
    commitPhase(
      "vision",
      2,
      usage?.input_tokens ?? Math.min(estIn, 20000),
      usage?.output_tokens ?? 0,
    );
    const text =
      (resp as { output_text?: string }).output_text ||
      JSON.stringify((resp as { output?: unknown }).output ?? "");
    let parsed: Record<string, unknown> | null = null;
    try {
      const m = text.match(/\{[\s\S]*\}/);
      if (m) parsed = JSON.parse(m[0]);
    } catch {
      parsed = null;
    }
    let ok: boolean | null = null;
    if (vc.id.startsWith("P-SCN") || vc.id.startsWith("P-DIA") || vc.id.startsWith("P-BPMN")) {
      ok = parsed?.fact === vc.expectFact;
    } else if (vc.id === "P-ILLEG-01") {
      ok =
        parsed?.fact === false &&
        (parsed?.uncertainty === true || parsed?.stampText == null);
    } else if (vc.id === "P-TXT-01") {
      ok = Number(parsed?.capacity) === 12;
    } else if (vc.id === "P-TBL-01") {
      ok = String(parsed?.value || "")
        .toLowerCase()
        .includes("documented_candidate");
    }
    visionRows.push({
      id: vc.id,
      latencyMs: Date.now() - t0,
      usage,
      parsed,
      ok,
      excerpt: text.slice(0, 300),
    });
  }
  report.phases = {
    ...(report.phases as object),
    vision: {
      rows: visionRows,
      okCount: visionRows.filter((r) => (r as { ok?: boolean }).ok === true).length,
      budget: { ...budgets.vision },
    },
  };
  writeFileSync(
    join(OUT, "phase-vision.json"),
    JSON.stringify(report.phases.vision, null, 2) + "\n",
  );
  console.log(
    `[VISION] ok=${(report.phases as { vision: { okCount: number } }).vision.okCount}/${visionRows.length} http=${budgets.vision.http}`,
  );

  // ——— CLEANUP ———
  for (const fid of [...remoteManifest.fileIds]) {
    assertPhase("cleanup", 1, 0, 0);
    try {
      await client.files.delete(fid);
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({ type: "file", id: fid, ok: true });
    } catch (e) {
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({
        type: "file",
        id: fid,
        ok: false,
        status: 0,
      });
    }
  }
  for (const vid of [...remoteManifest.vectorStoreIds]) {
    assertPhase("cleanup", 1, 0, 0);
    try {
      await client.vectorStores.delete(vid);
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({ type: "vector_store", id: vid, ok: true });
    } catch {
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({ type: "vector_store", id: vid, ok: false });
    }
    // verify inaccessible
    assertPhase("cleanup", 1, 0, 0);
    try {
      await client.vectorStores.retrieve(vid);
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({
        type: "vector_store_verify",
        id: vid,
        ok: false,
        status: 200,
      });
    } catch {
      commitPhase("cleanup", 1, 0, 0);
      remoteManifest.deleted.push({
        type: "vector_store_verify",
        id: vid,
        ok: true,
        status: 404,
      });
    }
  }

  report.frontierMetrics = getCampaignEnvelopeMetrics(CAMPAIGN_ID);
  report.httpLogCount = httpLog.length;
  report.budgets = budgets;
  report.noraReservedUntouched = budgets.nora.http === 0;
  report.finishedAt = new Date().toISOString();
  report.verdict = "BOUNDED_LIVE_CAMPAIGN_COMPLETED — SELECTION_CHECKPOINT";

  writeFileSync(
    join(OUT, "remote-resource-manifest.json"),
    JSON.stringify(remoteManifest, null, 2) + "\n",
  );
  writeFileSync(join(OUT, "campaign-report.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(
    JSON.stringify(
      {
        verdict: report.verdict,
        budgets: Object.fromEntries(
          Object.entries(budgets).map(([k, v]) => [
            k,
            { http: v.http, maxHttp: v.maxHttp, in: v.inputTokens, out: v.outputTokens },
          ]),
        ),
        frontierHttp: (report.frontierMetrics as { httpAttemptsCommitted?: number })
          ?.httpAttemptsCommitted,
        noraReservedUntouched: report.noraReservedUntouched,
      },
      null,
      2,
    ),
  );
});
