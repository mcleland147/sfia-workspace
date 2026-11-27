/**
 * ML2 ADAPT — OpenAI Decisions for bounded judgments (predicate/choice/score).
 * NOT HumanDecision D6. Explicit uncertainty + Responses fallback when
 * Decisions abstains / confidence is out of band / API unavailable.
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

export function shouldFallbackToResponses(result: {
  uncertain: boolean;
  abstain: boolean;
  probability: number | null;
  value: unknown;
}): boolean {
  if (result.abstain) return true;
  if (result.value == null && result.probability == null) return true;
  // LIVE showed AMB/INS collapsed to ~0 — treat overconfident "false" on
  // explicitly ambiguous prompts as fallback-eligible when flagged uncertain.
  if (result.uncertain) return true;
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

/**
 * Run Decisions first; on uncertainty/abstain/error, Responses JSON fallback.
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
    let value: boolean | string | number | null = null;
    let probability: number | null = null;
    if (primary?.type === "predicate") {
      probability =
        typeof primary.probability === "number" ? primary.probability : null;
      value = probability != null ? probability >= 0.5 : null;
    } else if (primary?.type === "choice") {
      value = primary.choice != null ? String(primary.choice) : null;
      probability = 1;
    } else if (primary?.type === "score") {
      value =
        typeof primary.score === "number"
          ? primary.score
          : primary.choice != null
            ? String(primary.choice)
            : null;
      probability = 1;
    }
    const uncertain =
      req.kind === "predicate" ? assessUncertainty(probability, band) : false;
    decisionsResult = {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "decisions",
      value,
      probability,
      uncertain,
      abstain: value == null,
      reason: uncertain ? "UNCERTAINTY_BAND" : null,
      usage: {
        inputTokens: dec.usage?.input_tokens,
        outputTokens: dec.usage?.output_tokens,
        model: input.modelDecisions ?? "gpt-6-luna",
      },
    };
    if (!shouldFallbackToResponses(decisionsResult)) {
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
Return ONLY JSON matching ${schemaHint}. If unsure set uncertainty=true and/or abstain=true.`;
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
    let value: boolean | string | number | null = null;
    if (req.kind === "predicate") value = Boolean(parsed.value);
    else if (typeof parsed.value === "number") value = parsed.value;
    else value = parsed.value != null ? String(parsed.value) : null;
    return {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "responses_fallback",
      value: parsed.abstain ? null : value,
      probability: null,
      uncertain: Boolean(parsed.uncertainty) || Boolean(parsed.abstain),
      abstain: Boolean(parsed.abstain),
      reason: decisionsResult?.reason
        ? `FALLBACK_AFTER:${decisionsResult.reason}`
        : "FALLBACK",
      usage: {
        inputTokens: resp.usage?.input_tokens,
        outputTokens: resp.usage?.output_tokens,
        model: input.modelResponses ?? "gpt-6-luna",
      },
    };
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
