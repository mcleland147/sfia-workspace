/**
 * ML2 ADAPT — OpenAI Decisions for bounded judgments (predicate/choice/score).
 * NOT HumanDecision D6. Explicit uncertainty + Responses fallback when
 * Decisions abstains / confidence is out of band / API unavailable / invalid.
 *
 * Gate: SFIA_BOUNDED_JUDGMENT=1 (OFF by default).
 */
import { createHash } from "node:crypto";

export const BOUNDED_JUDGMENT_SCHEMA = "ml2-bounded-judgment-v1";

export type BoundedJudgmentKind = "predicate" | "choice" | "score";

export type BoundedJudgmentRequest = {
  kind: BoundedJudgmentKind;
  name: string;
  question: string;
  evidence: string;
  choices?: string[];
  levels?: string[];
  /** When set, probabilities in (lo, hi) are treated as uncertain. */
  uncertaintyBand?: { lo: number; hi: number };
};

export type BoundedJudgmentResult = {
  schema: typeof BOUNDED_JUDGMENT_SCHEMA;
  name: string;
  kind: BoundedJudgmentKind;
  source: "decisions" | "responses_fallback" | "refused";
  value: boolean | string | number | null;
  probability: number | null;
  uncertain: boolean;
  abstain: boolean;
  reason: string | null;
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    model?: string;
  };
};

export function boundedJudgmentEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_BOUNDED_JUDGMENT || "").trim() === "1";
}

/** Heuristic: mid-band probability ⇒ uncertain (caller may tighten). */
export function assessUncertainty(
  probability: number | null,
  band: { lo: number; hi: number } = { lo: 0.35, hi: 0.65 },
): boolean {
  if (probability == null || !Number.isFinite(probability)) return true;
  return probability > band.lo && probability < band.hi;
}

/**
 * p≈0 is NOT sufficient proof the proposition is false (may be AMB/INS collapse).
 * Callers must not treat value=false at p=0 as authoritative without fallback.
 */
export function isOverconfidentFalseAtZero(result: {
  kind: BoundedJudgmentKind;
  value: unknown;
  probability: number | null;
}): boolean {
  if (result.kind !== "predicate") return false;
  if (result.value !== false) return false;
  return result.probability === 0 || result.probability == null;
}

export function shouldFallbackToResponses(result: {
  uncertain: boolean;
  abstain: boolean;
  probability: number | null;
  value: unknown;
  kind?: BoundedJudgmentKind;
  reason?: string | null;
}): boolean {
  if (result.abstain) return true;
  if (result.value == null && result.probability == null) return true;
  if (result.uncertain) return true;
  if (result.reason?.startsWith("INVALID_")) return true;
  if (
    result.kind === "predicate" &&
    isOverconfidentFalseAtZero({
      kind: "predicate",
      value: result.value,
      probability: result.probability,
    })
  ) {
    return true;
  }
  return false;
}

export type DecisionsClient = {
  decisions: {
    create: (body: Record<string, unknown>) => Promise<{
      answers?: Array<{
        type: string;
        name?: string;
        probability?: number;
        choice?: string;
        score?: number;
      }>;
      usage?: { input_tokens?: number; output_tokens?: number };
    }>;
  };
  responses: {
    create: (body: Record<string, unknown>) => Promise<{
      output_text?: string;
      usage?: { input_tokens?: number; output_tokens?: number };
    }>;
  };
};

function buildDecisionsQuestions(req: BoundedJudgmentRequest): unknown[] {
  if (req.kind === "predicate") {
    return [
      {
        type: "predicate",
        name: req.name,
        instructions: req.question,
      },
    ];
  }
  if (req.kind === "choice") {
    return [
      {
        type: "choice",
        name: req.name,
        instructions: req.question,
        choices: (req.choices ?? []).map((value) => ({ value })),
      },
    ];
  }
  return [
    {
      type: "score",
      name: req.name,
      instructions: req.question,
      levels: (req.levels ?? []).map((label) => ({ label })),
    },
  ];
}

function parseStrictBoolean(raw: unknown): boolean | null {
  if (typeof raw === "boolean") return raw;
  // Never Boolean("false") === true
  if (typeof raw === "string") {
    const t = raw.trim().toLowerCase();
    if (t === "true" || t === "yes" || t === "1") return true;
    if (t === "false" || t === "no" || t === "0") return false;
    return null;
  }
  if (typeof raw === "number" && Number.isFinite(raw)) {
    if (raw === 1) return true;
    if (raw === 0) return false;
  }
  return null;
}

export function validateDecisionsAnswer(input: {
  kind: BoundedJudgmentKind;
  answer: {
    type: string;
    probability?: number;
    choice?: string;
    score?: number;
  } | null | undefined;
  choices?: string[];
  levels?: string[];
}): {
  ok: boolean;
  value: boolean | string | number | null;
  probability: number | null;
  reason: string | null;
} {
  const a = input.answer;
  if (!a) {
    return {
      ok: false,
      value: null,
      probability: null,
      reason: "INVALID_MISSING_ANSWER",
    };
  }
  if (a.type !== input.kind) {
    return {
      ok: false,
      value: null,
      probability: null,
      reason: `INVALID_TYPE_MISMATCH:${a.type}`,
    };
  }
  if (input.kind === "predicate") {
    const probability =
      typeof a.probability === "number" && Number.isFinite(a.probability)
        ? a.probability
        : null;
    if (probability == null || probability < 0 || probability > 1) {
      return {
        ok: false,
        value: null,
        probability: null,
        reason: "INVALID_PREDICATE_PROBABILITY",
      };
    }
    // Threshold mapping is interpretive — p=0 must still be treated carefully
    // by shouldFallbackToResponses (overconfident false).
    return {
      ok: true,
      value: probability >= 0.5,
      probability,
      reason: null,
    };
  }
  if (input.kind === "choice") {
    const choice = a.choice != null ? String(a.choice) : null;
    const allowed = input.choices ?? [];
    if (!choice || (allowed.length > 0 && !allowed.includes(choice))) {
      return {
        ok: false,
        value: null,
        probability: null,
        reason: "INVALID_CHOICE",
      };
    }
    // Do NOT invent confidence=1 for choice answers.
    return { ok: true, value: choice, probability: null, reason: null };
  }
  // score
  const levels = input.levels ?? [];
  if (typeof a.score === "number" && Number.isFinite(a.score)) {
    if (levels.length > 0) {
      const asLabel = String(a.score);
      if (!levels.includes(asLabel) && a.choice == null) {
        // numeric score without level labels — accept number, no fake p=1
        return {
          ok: true,
          value: a.score,
          probability: null,
          reason: null,
        };
      }
    }
    return { ok: true, value: a.score, probability: null, reason: null };
  }
  if (a.choice != null) {
    const label = String(a.choice);
    if (levels.length > 0 && !levels.includes(label)) {
      return {
        ok: false,
        value: null,
        probability: null,
        reason: "INVALID_SCORE_LEVEL",
      };
    }
    return { ok: true, value: label, probability: null, reason: null };
  }
  return {
    ok: false,
    value: null,
    probability: null,
    reason: "INVALID_SCORE",
  };
}

function parseResponsesJson(text: string): {
  value?: unknown;
  uncertainty?: boolean;
  abstain?: boolean;
} | null {
  try {
    const m = text.match(/\{[\s\S]*\}/);
    if (!m) return null;
    return JSON.parse(m[0]) as {
      value?: unknown;
      uncertainty?: boolean;
      abstain?: boolean;
    };
  } catch {
    return null;
  }
}

function validateResponsesValue(
  req: BoundedJudgmentRequest,
  raw: unknown,
): { ok: boolean; value: boolean | string | number | null; reason: string | null } {
  if (req.kind === "predicate") {
    const b = parseStrictBoolean(raw);
    if (b == null) {
      return { ok: false, value: null, reason: "INVALID_RESPONSES_PREDICATE" };
    }
    return { ok: true, value: b, reason: null };
  }
  if (req.kind === "choice") {
    const choice = raw != null ? String(raw) : null;
    const allowed = req.choices ?? [];
    if (!choice || (allowed.length > 0 && !allowed.includes(choice))) {
      return { ok: false, value: null, reason: "INVALID_RESPONSES_CHOICE" };
    }
    return { ok: true, value: choice, reason: null };
  }
  if (typeof raw === "number" && Number.isFinite(raw)) {
    return { ok: true, value: raw, reason: null };
  }
  if (raw != null) {
    const label = String(raw);
    const levels = req.levels ?? [];
    if (levels.length > 0 && !levels.includes(label)) {
      return { ok: false, value: null, reason: "INVALID_RESPONSES_LEVEL" };
    }
    return { ok: true, value: label, reason: null };
  }
  return { ok: false, value: null, reason: "INVALID_RESPONSES_SCORE" };
}

/**
 * Run Decisions first; on uncertainty/abstain/invalid/error, Responses JSON fallback.
 * Never records a HumanDecision — Studio admission remains separate (D6).
 */
export async function runBoundedJudgment(input: {
  client: DecisionsClient;
  request: BoundedJudgmentRequest;
  modelDecisions?: string;
  modelResponses?: string;
  effortResponses?: string;
}): Promise<BoundedJudgmentResult> {
  const req = input.request;
  const band = req.uncertaintyBand ?? { lo: 0.35, hi: 0.65 };
  const inputText = `Evidence:\n${req.evidence}\n\nAnswer only the named question.`;

  let decisionsResult: BoundedJudgmentResult | null = null;
  try {
    const dec = await input.client.decisions.create({
      model: input.modelDecisions ?? "gpt-6-luna",
      input: inputText,
      questions: buildDecisionsQuestions(req),
    });
    const primary =
      (dec.answers ?? []).find((a) => a.name === req.name) ??
      (dec.answers ?? [])[0];
    const validated = validateDecisionsAnswer({
      kind: req.kind,
      answer: primary,
      choices: req.choices,
      levels: req.levels,
    });
    const uncertain =
      req.kind === "predicate"
        ? assessUncertainty(validated.probability, band) ||
          isOverconfidentFalseAtZero({
            kind: "predicate",
            value: validated.value,
            probability: validated.probability,
          })
        : !validated.ok;
    decisionsResult = {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "decisions",
      value: validated.ok ? validated.value : null,
      probability: validated.probability,
      uncertain,
      abstain: !validated.ok || validated.value == null,
      reason: validated.reason ?? (uncertain ? "UNCERTAINTY_BAND" : null),
      usage: {
        inputTokens: dec.usage?.input_tokens,
        outputTokens: dec.usage?.output_tokens,
        model: input.modelDecisions ?? "gpt-6-luna",
      },
    };
    if (
      !shouldFallbackToResponses({
        ...decisionsResult,
        kind: req.kind,
      })
    ) {
      await recordBoundedJudgmentFinops(decisionsResult);
      return decisionsResult;
    }
  } catch (e) {
    decisionsResult = {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "refused",
      value: null,
      probability: null,
      uncertain: true,
      abstain: true,
      reason: e instanceof Error ? e.message.slice(0, 200) : "DECISIONS_ERROR",
    };
  }

  // Responses fallback
  try {
    const schemaHint = JSON.stringify({
      id: req.name,
      type: req.kind,
      value: req.kind === "predicate" ? true : "",
      uncertainty: false,
      abstain: false,
    });
    const prompt = `You are a bounded judgment helper. Evidence:\n${req.evidence}\n\nQuestion: ${req.question}\n${
      req.choices ? `Choices: ${req.choices.join(" | ")}\n` : ""
    }${req.levels ? `Levels: ${req.levels.join(" | ")}\n` : ""}
Return ONLY JSON matching ${schemaHint}. If unsure set uncertainty=true and/or abstain=true.
For predicate, value must be boolean true/false — never the strings "true"/"false" without boolean type.`;
    const resp = await input.client.responses.create({
      model: input.modelResponses ?? "gpt-6-luna",
      store: false,
      max_output_tokens: 256,
      reasoning: { effort: input.effortResponses ?? "medium" },
      input: prompt,
    });
    const parsed = parseResponsesJson(resp.output_text ?? "");
    if (!parsed) {
      return {
        ...(decisionsResult ?? {
          schema: BOUNDED_JUDGMENT_SCHEMA,
          name: req.name,
          kind: req.kind,
          value: null,
          probability: null,
          uncertain: true,
          abstain: true,
          reason: "DECISIONS_UNAVAILABLE",
        }),
        source: "responses_fallback",
        reason: "RESPONSES_UNPARSEABLE",
        usage: {
          inputTokens: resp.usage?.input_tokens,
          outputTokens: resp.usage?.output_tokens,
          model: input.modelResponses ?? "gpt-6-luna",
        },
      };
    }
    if (parsed.abstain) {
      return {
        schema: BOUNDED_JUDGMENT_SCHEMA,
        name: req.name,
        kind: req.kind,
        source: "responses_fallback",
        value: null,
        probability: null,
        uncertain: true,
        abstain: true,
        reason: decisionsResult?.reason
          ? `FALLBACK_ABSTAIN_AFTER:${decisionsResult.reason}`
          : "FALLBACK_ABSTAIN",
        usage: {
          inputTokens: resp.usage?.input_tokens,
          outputTokens: resp.usage?.output_tokens,
          model: input.modelResponses ?? "gpt-6-luna",
        },
      };
    }
    const validated = validateResponsesValue(req, parsed.value);
    if (!validated.ok) {
      return {
        schema: BOUNDED_JUDGMENT_SCHEMA,
        name: req.name,
        kind: req.kind,
        source: "refused",
        value: null,
        probability: null,
        uncertain: true,
        abstain: true,
        reason: validated.reason,
        usage: {
          inputTokens: resp.usage?.input_tokens,
          outputTokens: resp.usage?.output_tokens,
          model: input.modelResponses ?? "gpt-6-luna",
        },
      };
    }
    const fallbackResult: BoundedJudgmentResult = {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "responses_fallback",
      value: validated.value,
      probability: null,
      uncertain: Boolean(parsed.uncertainty),
      abstain: false,
      reason: decisionsResult?.reason
        ? `FALLBACK_AFTER:${decisionsResult.reason}`
        : "FALLBACK",
      usage: {
        inputTokens: resp.usage?.input_tokens,
        outputTokens: resp.usage?.output_tokens,
        model: input.modelResponses ?? "gpt-6-luna",
      },
    };
    await recordBoundedJudgmentFinops(fallbackResult);
    return fallbackResult;
  } catch (e) {
    return {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "refused",
      value: null,
      probability: null,
      uncertain: true,
      abstain: true,
      reason: e instanceof Error ? e.message.slice(0, 200) : "FALLBACK_ERROR",
    };
  }
}

async function recordBoundedJudgmentFinops(
  result: BoundedJudgmentResult,
): Promise<void> {
  try {
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    await recordProviderUsageObservation({
      operation:
        result.source === "decisions"
          ? "bounded_judgment.decisions"
          : "bounded_judgment.responses_fallback",
      modelRequested: result.usage?.model ?? null,
      modelApplied: result.usage?.model ?? null,
      inputTokens: result.usage?.inputTokens ?? null,
      outputTokens: result.usage?.outputTokens ?? null,
      status: "succeeded",
      granularity: "REQUEST",
      costCoverage: "PARTIAL",
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: process.env.STUDIO_LANE || "DEV",
        operation: `bounded_judgment.${result.source}`,
        callOrdinal:
          Number.parseInt(
            createHash("sha256")
              .update(`${result.name}:${result.source}`)
              .digest("hex")
              .slice(0, 8),
            16,
          ) % 100000,
      }),
      limits: ["NOT_D6_HUMAN_DECISION", "BOUNDED_JUDGMENT", result.source],
    });
  } catch {
    /* FinOps best-effort */
  }
}

export function boundedJudgmentIdempotencyKey(fields: {
  workId?: string;
  name: string;
  evidenceFp: string;
}): string {
  return createHash("sha256")
    .update(
      JSON.stringify({
        schema: BOUNDED_JUDGMENT_SCHEMA,
        ...fields,
      }),
    )
    .digest("hex")
    .slice(0, 40);
}
