/**
 * ML5 S6 — bounded LIVE cognitive calibration (DEV only).
 * Uses real Nora adapter + OpenAI Agents SDK. WEB LIVE must stay off.
 *
 * Envelope (campaign, not operational):
 * - ≤ 40 Responses attempted (retries counted)
 * - ≤ 2_000_000 input tokens cumulative
 * - ≤ 200_000 output tokens cumulative
 * - ≤ 100_000 input / ≤ 10_000 output per request (soft stop)
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { config } from "dotenv";
import path from "node:path";

config({ path: path.resolve(process.cwd(), ".env.local") });

process.env.STUDIO_LANE = "DEV";
process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
process.env.SFIA_COG_PROFILE_TYPE =
  process.env.SFIA_COG_PROFILE_TYPE || "OPERATIONAL_PROVISIONAL";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";

const key = (process.env.OPENAI_API_KEY || "").trim();
if (!key) {
  console.error("STOP: OPENAI_API_KEY missing");
  process.exit(2);
}
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
process.env.SFIA_OPENAI_EXPECTED_KEY_FP =
  process.env.SFIA_OPENAI_EXPECTED_KEY_FP || fp;

const OUT =
  process.env.SFIA_CALIBRATION_OUT ||
  path.resolve(process.cwd(), "../../../.tmp-sfia-review/calibration-live");
mkdirSync(OUT, { recursive: true });

const ENVELOPE = {
  maxResponses: 40,
  maxInputTokens: 2_000_000,
  maxOutputTokens: 200_000,
  maxInputPerRequest: 100_000,
  maxOutputPerRequest: 10_000,
};

type ScenarioResult = {
  id: string;
  phase: string;
  modelRequested: string;
  effortRequested: string;
  modelApplied: string | null;
  effortApplied: string | null;
  status: string;
  qualitative: "PASS" | "FAIL" | "PARTIAL" | "SKIP";
  notes: string[];
  inputTokens: number | null;
  outputTokens: number | null;
  cachedInputTokens: number | null;
  reasoningTokens: number | null;
  providerRequests: number | null;
  estimatedCostUsd: number | null;
  costCoverage: string | null;
  durationMs: number;
  contentPreview: string;
};

const ledger: {
  startedAt: string;
  finishedAt: string | null;
  lane: string;
  keyFingerprint: string;
  admissionMode: string | undefined;
  envelope: typeof ENVELOPE;
  responsesAttempted: number;
  inputTokens: number;
  outputTokens: number;
  estimatedCostUsd: number;
  scenarios: ScenarioResult[];
  stopReason: string | null;
} = {
  startedAt: new Date().toISOString(),
  finishedAt: null,
  lane: "DEV",
  keyFingerprint: fp,
  admissionMode: process.env.SFIA_COGNITIVE_ADMISSION_MODE,
  envelope: ENVELOPE,
  responsesAttempted: 0,
  inputTokens: 0,
  outputTokens: 0,
  estimatedCostUsd: 0,
  scenarios: [],
  stopReason: null,
};

function withinEnvelope(nextIn = 0, nextOut = 0): boolean {
  if (ledger.responsesAttempted >= ENVELOPE.maxResponses) return false;
  if (ledger.inputTokens + nextIn > ENVELOPE.maxInputTokens) return false;
  if (ledger.outputTokens + nextOut > ENVELOPE.maxOutputTokens) return false;
  return true;
}

function save() {
  writeFileSync(
    path.join(OUT, "calibration-ledger.json"),
    JSON.stringify(ledger, null, 2),
  );
}

function scoreQualitative(
  id: string,
  content: string,
  status: string,
): { verdict: ScenarioResult["qualitative"]; notes: string[] } {
  const notes: string[] = [];
  if (status !== "COMPLETE") {
    notes.push(`status=${status}`);
    return { verdict: "FAIL", notes };
  }
  const text = content.trim();
  if (text.length < 20) {
    notes.push("reply_too_short");
    return { verdict: "FAIL", notes };
  }
  // Critical silent failure heuristics (deterministic, not an oracle).
  if (/as an ai language model|i cannot access|hallucin/i.test(text)) {
    notes.push("boilerplate_or_access_claim");
  }
  if (id.includes("negation") && !/(pas|ne |sans|interdit|exclu)/i.test(text)) {
    notes.push("negation_not_reflected");
    return { verdict: "FAIL", notes };
  }
  if (id.includes("multi") && text.length < 80) {
    notes.push("multi_intent_thin");
    return { verdict: "PARTIAL", notes };
  }
  if (id.includes("ambigu") && !/(\?|clarif|précis|ambigu)/i.test(text)) {
    notes.push("ambiguity_not_acknowledged");
    return { verdict: "PARTIAL", notes };
  }
  return { verdict: notes.length ? "PARTIAL" : "PASS", notes };
}

async function runCase(input: {
  id: string;
  phase: string;
  model: "gpt-6-luna" | "gpt-6.1-terra" | "gpt-6.2-sol";
  effort: "none" | "low" | "medium" | "high" | "xhigh" | "max";
  userText: string;
}): Promise<ScenarioResult | null> {
  if (!withinEnvelope()) {
    ledger.stopReason = "ENVELOPE_EXHAUSTED_BEFORE_CASE";
    return null;
  }

  const { buildCognitivePolicy } = await import(
    "../src/domains/conversation/cognitive-policy.ts"
  );
  const { generateNoraReply } = await import(
    "../src/domains/conversation/nora-adapter.ts"
  );

  const policy = buildCognitivePolicy(input.userText, "OPERATIONAL_PROVISIONAL", {
    profileHint: "analyse",
    modelHint: input.model,
    effortHint: input.effort,
  });

  const started = Date.now();
  ledger.responsesAttempted += 1; // count attempt even if SDK loops further
  let result;
  try {
    result = await generateNoraReply({
      userText: input.userText,
      contextSnippets: [
        "Calibration LIVE bornée ML5 — WEB LIVE interdit.",
        "Réponds en français, concis, sans inventer de sources externes.",
      ],
      policyOverride: policy,
    });
  } catch (e) {
    const row: ScenarioResult = {
      id: input.id,
      phase: input.phase,
      modelRequested: policy.modelRequested,
      effortRequested: policy.effortRequested,
      modelApplied: null,
      effortApplied: null,
      status: "THROW",
      qualitative: "FAIL",
      notes: [String((e as Error)?.message ?? e).slice(0, 200)],
      inputTokens: null,
      outputTokens: null,
      cachedInputTokens: null,
      reasoningTokens: null,
      providerRequests: null,
      estimatedCostUsd: null,
      costCoverage: null,
      durationMs: Date.now() - started,
      contentPreview: "",
    };
    ledger.scenarios.push(row);
    save();
    return row;
  }

  const usage = result.usage;
  const inTok = usage?.inputTokens ?? 0;
  const outTok = usage?.outputTokens ?? 0;
  // Approximate additional SDK requests from providerRequests when available
  const reqs = usage?.providerRequests ?? 1;
  if (typeof reqs === "number" && reqs > 1) {
    ledger.responsesAttempted += reqs - 1;
  }
  ledger.inputTokens += inTok || 0;
  ledger.outputTokens += outTok || 0;

  if (
    (inTok || 0) > ENVELOPE.maxInputPerRequest ||
    (outTok || 0) > ENVELOPE.maxOutputPerRequest
  ) {
    ledger.stopReason = `PER_REQUEST_CAP id=${input.id}`;
  }

  const q = scoreQualitative(input.id, result.content || "", result.status);
  const row: ScenarioResult = {
    id: input.id,
    phase: input.phase,
    modelRequested: policy.modelRequested,
    effortRequested: policy.effortRequested,
    modelApplied: result.modelApplied ?? null,
    effortApplied: result.effortApplied ?? null,
    status: result.status,
    qualitative: q.verdict,
    notes: [
      ...q.notes,
      `effort_policy=${policy.effortRequested}`,
      `effort_budget_band=${policy.effortBudgetBand}`,
      ...(result.streamingNotes ? [String(result.streamingNotes).slice(0, 120)] : []),
    ],
    inputTokens: usage?.inputTokens ?? null,
    outputTokens: usage?.outputTokens ?? null,
    cachedInputTokens: usage?.cachedInputTokens ?? null,
    reasoningTokens: usage?.reasoningTokens ?? null,
    providerRequests: usage?.providerRequests ?? null,
    estimatedCostUsd: null,
    costCoverage: null,
    durationMs: Date.now() - started,
    contentPreview: (result.content || "").slice(0, 400),
  };

  // Estimate cost via accounting helper when possible
  try {
    const { estimateCostUsd } = await import(
      "../src/domains/conversation/usage-accounting.ts"
    );
    const est = estimateCostUsd(
      {
        inputTokens: row.inputTokens,
        outputTokens: row.outputTokens,
        cachedInputTokens: row.cachedInputTokens,
      },
      row.modelApplied || row.modelRequested,
      { modelAppliedUnverified: !row.modelApplied },
    );
    row.estimatedCostUsd = est.estimatedCostUsd;
    row.costCoverage = est.costCoverage;
    if (typeof est.estimatedCostUsd === "number") {
      ledger.estimatedCostUsd += est.estimatedCostUsd;
    }
  } catch {
    /* observational */
  }

  ledger.scenarios.push(row);
  save();
  console.log(
    `[${input.phase}/${input.id}] ${row.modelRequested}@${row.effortRequested} status=${row.status} q=${row.qualitative} in=${row.inputTokens} out=${row.outputTokens} ms=${row.durationMs}`,
  );

  if (
    row.status !== "COMPLETE" &&
    /MODEL|ENTITLEMENT|PERMISSION|not found|unsupported/i.test(
      row.notes.join(" "),
    )
  ) {
    ledger.stopReason = `PROVIDER_PERMANENT id=${input.id}`;
  }
  if (!withinEnvelope()) ledger.stopReason = ledger.stopReason || "ENVELOPE_REACHED";
  return row;
}

const CORPUS = {
  simple: "Bonjour. Confirme en une phrase que tu es prêt pour une calibration courte.",
  ambigu:
    "Peux-tu traiter le dossier ? (ne précise pas lequel — signale l'ambiguïté déterminante avant d'agir)",
  multi:
    "1) Résume en 2 puces ce qu'est un sas de préparation. 2) Liste 2 risques si on saute la qualification. 3) Pose une seule question de clarification.",
  negation:
    "Explique brièvement la révision documentaire D4, mais n'invente aucune citation Git et n'ouvre aucune recherche web.",
  investigate:
    "Une demande mélange intention projet et question technique. Quelles capacités te semblent nécessaires, et quelle allocation modèle/effort proposerais-tu (Luna/Terra/Sol) avec justification courte ?",
};

async function main() {
  console.log("Calibration LIVE start", {
    fp,
    out: OUT,
    envelope: ENVELOPE,
  });

  // Phase A — compatibility medium
  for (const model of ["gpt-6-luna", "gpt-6.1-terra", "gpt-6.2-sol"] as const) {
    if (ledger.stopReason) break;
    await runCase({
      id: `A-compat-${model}`,
      phase: "A",
      model,
      effort: "medium",
      userText: CORPUS.simple,
    });
  }

  // Phase B — qualitative medium trio on fixed corpus
  for (const model of ["gpt-6-luna", "gpt-6.1-terra", "gpt-6.2-sol"] as const) {
    for (const [key, text] of Object.entries(CORPUS)) {
      if (key === "simple") continue; // already covered in A
      if (ledger.stopReason) break;
      await runCase({
        id: `B-${key}-${model}`,
        phase: "B",
        model,
        effort: "medium",
        userText: text,
      });
    }
  }

  // Phase C — discriminating couples (bounded)
  const phaseC: Array<{
    id: string;
    model: "gpt-6-luna" | "gpt-6.1-terra" | "gpt-6.2-sol";
    effort: "medium" | "high" | "xhigh";
    text: string;
  }> = [
    {
      id: "C-luna-high-vs-terra-med-a",
      model: "gpt-6-luna",
      effort: "high",
      text: CORPUS.investigate,
    },
    {
      id: "C-terra-med-vs-luna-high-a",
      model: "gpt-6.1-terra",
      effort: "medium",
      text: CORPUS.investigate,
    },
    {
      id: "C-terra-high-vs-sol-med-a",
      model: "gpt-6.1-terra",
      effort: "high",
      text: CORPUS.multi,
    },
    {
      id: "C-sol-med-ref-a",
      model: "gpt-6.2-sol",
      effort: "medium",
      text: CORPUS.multi,
    },
  ];
  for (const c of phaseC) {
    if (ledger.stopReason) break;
    await runCase({
      id: c.id,
      phase: "C",
      model: c.model,
      effort: c.effort,
      userText: c.text,
    });
  }

  ledger.finishedAt = new Date().toISOString();
  if (!ledger.stopReason) ledger.stopReason = "COMPLETED_PLAN";
  save();

  const summary = {
    stopReason: ledger.stopReason,
    responsesAttempted: ledger.responsesAttempted,
    inputTokens: ledger.inputTokens,
    outputTokens: ledger.outputTokens,
    estimatedCostUsd: ledger.estimatedCostUsd,
    byQualitative: ledger.scenarios.reduce(
      (acc, s) => {
        acc[s.qualitative] = (acc[s.qualitative] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    ),
    effortFidelity: ledger.scenarios.map((s) => ({
      id: s.id,
      requested: s.effortRequested,
      applied: s.effortApplied,
    })),
  };
  writeFileSync(
    path.join(OUT, "calibration-summary.json"),
    JSON.stringify(summary, null, 2),
  );
  console.log("Calibration LIVE done", summary);
}

main().catch((e) => {
  ledger.stopReason = `FATAL:${String(e).slice(0, 200)}`;
  save();
  console.error(e);
  process.exit(1);
});
