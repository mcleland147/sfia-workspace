/**
 * MW2-S01 — thin internal Cognitive Workload Profile / Strategy policy.
 * Pure, testable. Strategy Class ≠ SFIA Profile ≠ reasoning effort ≠ model.
 * OD-02 Option B: overlapping envelopes + minimum-sufficient workload-sensitive effort.
 *
 * CORR-MW2-DLV-01: UNKNOWN ≠ LOW — Routine requires sufficient KNOWN-low evidence.
 * CORR-MW2-DLV-02: signal honesty — capability available ≠ workload dependency.
 */
import type { OpenAiReasoningEffort } from "@/lib/platform/ai";

export type SignalLevel = "low" | "medium" | "high";
export type SignalValue = SignalLevel | "unknown";

export const COGNITIVE_STRATEGY_CLASSES = [
  "Routine",
  "Focused",
  "Deep",
  "High-Assurance",
] as const;

export type CognitiveStrategyClass = (typeof COGNITIVE_STRATEGY_CLASSES)[number];

export type CognitiveWorkloadSignals = {
  ambiguity: SignalValue;
  reasoningDepth: SignalValue;
  sourceBreadth: SignalValue;
  toolDependency: SignalValue;
  contradictionRisk: SignalValue;
  contextSize: SignalValue;
  verificationNeed: SignalValue;
  multimodality: SignalValue;
  latencySensitivity: SignalValue;
  costBudget: SignalValue;
  rigorCriticality: SignalValue;
};

export type TurnWorkloadContext = {
  projectCriticality?: string | null;
  userContentLength: number;
  historyMessageCount: number;
  historyTotalChars?: number;
  /**
   * Product tool capability flag — NOT a workload dependency fact.
   * Retained for orchestration transport; does not fabricate toolDependency.
   */
  enableTools?: boolean;
};

export type CognitiveStrategyDecision = {
  strategyClass: CognitiveStrategyClass;
  reasoningEffort: OpenAiReasoningEffort;
  criticalChallengeArmed: boolean;
  candidateEnvelope: readonly OpenAiReasoningEffort[];
  reasonCodes: string[];
  normalizedSignals: CognitiveWorkloadSignals;
  bootstrapUsed: boolean;
  reasoningDemand: OpenAiReasoningEffort;
};

/** Candidate overlapping envelopes — DELIVERY DESIGN PARAMETERS, not Morris doctrine. */
export const STRATEGY_REASONING_ENVELOPES: Record<
  CognitiveStrategyClass,
  readonly OpenAiReasoningEffort[]
> = {
  Routine: ["none", "low", "medium"],
  Focused: ["low", "medium", "high"],
  Deep: ["medium", "high", "xhigh"],
  "High-Assurance": ["high", "xhigh", "max"],
};

/** Discriminating dimensions that must be explicitly known-low for Routine. */
export const ROUTINE_KNOWN_LOW_DIMENSIONS = [
  "ambiguity",
  "sourceBreadth",
  "verificationNeed",
  "reasoningDepth",
  "contradictionRisk",
] as const;

const EFFORT_RANK: Record<OpenAiReasoningEffort, number> = {
  none: 0,
  minimal: 0,
  low: 1,
  medium: 2,
  high: 3,
  xhigh: 4,
  max: 5,
};

function levelScore(value: SignalValue): number {
  if (value === "high") return 3;
  if (value === "medium") return 2;
  if (value === "low") return 1;
  return 0;
}

function isKnownLow(value: SignalValue): boolean {
  return value === "low";
}

/**
 * Routine eligibility requires sufficient KNOWN-low evidence on discriminating
 * dimensions. Unknown must NOT count as low (CORR-MW2-DLV-01).
 */
export function isRoutineEligible(
  signals: CognitiveWorkloadSignals,
): boolean {
  for (const key of ROUTINE_KNOWN_LOW_DIMENSIONS) {
    if (!isKnownLow(signals[key])) return false;
  }
  // rigor must be known and not High-Assurance pressure
  if (signals.rigorCriticality === "unknown") return false;
  if (signals.rigorCriticality === "high") return false;
  return true;
}

export function normalizeCognitiveWorkloadSignals(
  partial: Partial<CognitiveWorkloadSignals>,
): CognitiveWorkloadSignals {
  const unknown = "unknown" as const;
  return {
    ambiguity: partial.ambiguity ?? unknown,
    reasoningDepth: partial.reasoningDepth ?? unknown,
    sourceBreadth: partial.sourceBreadth ?? unknown,
    toolDependency: partial.toolDependency ?? unknown,
    contradictionRisk: partial.contradictionRisk ?? unknown,
    contextSize: partial.contextSize ?? unknown,
    verificationNeed: partial.verificationNeed ?? unknown,
    multimodality: partial.multimodality ?? unknown,
    latencySensitivity: partial.latencySensitivity ?? unknown,
    costBudget: partial.costBudget ?? unknown,
    rigorCriticality: partial.rigorCriticality ?? unknown,
  };
}

/**
 * Derive only from observable product facts.
 * CORR-MW2-DLV-02: enableTools does NOT imply toolDependency;
 * multimodality stays unknown unless an actual multimodal fact exists.
 * projectCriticality may feed rigorCriticality but never trustedSfiaProfile.
 */
export function buildSignalsFromTurnContext(
  ctx: TurnWorkloadContext,
): CognitiveWorkloadSignals {
  const crit = (ctx.projectCriticality ?? "").trim().toUpperCase();
  let rigorCriticality: SignalValue = "unknown";
  if (crit === "CRITICAL") rigorCriticality = "high";
  else if (crit === "STANDARD") rigorCriticality = "medium";
  else if (crit === "LOW") rigorCriticality = "low";

  const historyChars = ctx.historyTotalChars ?? 0;
  const totalChars = ctx.userContentLength + historyChars;
  let contextSize: SignalValue = "low";
  if (totalChars > 8000) contextSize = "high";
  else if (totalChars > 2000) contextSize = "medium";

  // Capability available ≠ workload dependency — leave unknown.
  const toolDependency: SignalValue = "unknown";
  // No multimodal fact in turn context — leave unknown.
  const multimodality: SignalValue = "unknown";

  let verificationNeed: SignalValue = "unknown";
  if (rigorCriticality === "high") verificationNeed = "high";

  return normalizeCognitiveWorkloadSignals({
    rigorCriticality,
    contextSize,
    toolDependency,
    verificationNeed,
    multimodality,
  });
}

function computeReasoningDemand(
  signals: CognitiveWorkloadSignals,
): OpenAiReasoningEffort {
  let score = 0;
  score += levelScore(signals.contextSize);
  score += levelScore(signals.verificationNeed);
  score += levelScore(signals.toolDependency);
  score += Math.floor(levelScore(signals.sourceBreadth) / 2);
  score += Math.floor(levelScore(signals.reasoningDepth) / 2);
  score += Math.floor(levelScore(signals.contradictionRisk) / 2);

  if (score >= 8) return "high";
  if (score >= 5) return "medium";
  if (score >= 2) return "low";
  return "none";
}

function selectStrategyClass(
  signals: CognitiveWorkloadSignals,
  trustedSfiaProfile: string | null | undefined,
): { strategyClass: CognitiveStrategyClass; bootstrapUsed: boolean; reasonCodes: string[] } {
  const reasonCodes: string[] = [];
  const rigor = levelScore(signals.rigorCriticality);
  const verification = levelScore(signals.verificationNeed);
  const contradiction = levelScore(signals.contradictionRisk);
  const breadth = levelScore(signals.sourceBreadth);
  const depth = levelScore(signals.reasoningDepth);

  // Strong KNOWN signals may elevate without trusted Profile.
  if (
    (rigor >= 3 && verification >= 2) ||
    (rigor >= 3 && contradiction >= 2) ||
    (verification >= 3 && contradiction >= 2)
  ) {
    reasonCodes.push("high_assurance_signals");
    return { strategyClass: "High-Assurance", bootstrapUsed: false, reasonCodes };
  }

  if (breadth >= 3 || depth >= 3 || (breadth >= 2 && depth >= 2)) {
    reasonCodes.push("deep_synthesis_signals");
    return { strategyClass: "Deep", bootstrapUsed: false, reasonCodes };
  }

  // Routine only with sufficient KNOWN-low evidence (UNKNOWN ≠ LOW).
  if (isRoutineEligible(signals)) {
    reasonCodes.push("routine_known_low_evidence");
    return { strategyClass: "Routine", bootstrapUsed: false, reasonCodes };
  }

  if (!trustedSfiaProfile?.trim()) {
    reasonCodes.push("bootstrap_focused_no_trusted_profile");
    return { strategyClass: "Focused", bootstrapUsed: true, reasonCodes };
  }

  reasonCodes.push("focused_default");
  return { strategyClass: "Focused", bootstrapUsed: false, reasonCodes };
}

function selectMinimumSufficientEffort(
  envelope: readonly OpenAiReasoningEffort[],
  demand: OpenAiReasoningEffort,
): OpenAiReasoningEffort {
  const demandRank = EFFORT_RANK[demand];
  for (const effort of envelope) {
    if (EFFORT_RANK[effort] >= demandRank) return effort;
  }
  return envelope[envelope.length - 1];
}

export function decideCognitiveStrategy(input: {
  signals: CognitiveWorkloadSignals;
  trustedSfiaProfile?: string | null;
}): CognitiveStrategyDecision {
  const normalizedSignals = normalizeCognitiveWorkloadSignals(input.signals);
  const reasoningDemand = computeReasoningDemand(normalizedSignals);
  const { strategyClass, bootstrapUsed, reasonCodes } = selectStrategyClass(
    normalizedSignals,
    input.trustedSfiaProfile,
  );
  const candidateEnvelope = STRATEGY_REASONING_ENVELOPES[strategyClass];
  const reasoningEffort = selectMinimumSufficientEffort(
    candidateEnvelope,
    reasoningDemand,
  );
  const criticalChallengeArmed = strategyClass === "High-Assurance";
  if (criticalChallengeArmed) {
    reasonCodes.push("critical_challenge_armed_hook");
  }
  reasonCodes.push(`demand:${reasoningDemand}`, `effort:${reasoningEffort}`);

  return {
    strategyClass,
    reasoningEffort,
    criticalChallengeArmed,
    candidateEnvelope,
    reasonCodes,
    normalizedSignals,
    bootstrapUsed,
    reasoningDemand,
  };
}
