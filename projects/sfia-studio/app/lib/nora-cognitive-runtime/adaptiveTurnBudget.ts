/**
 * P1 — Adaptive Runner model-turn budget (delivery design parameters).
 *
 * Proportioned to CognitiveStrategyClass + known workload signals.
 * UNKNOWN ≠ LOW (CORR-MW2-DLV-01). Never unlimited. Never derived solely
 * from experimental maxTurns=12 documentary qualification.
 *
 * Strategy Class ≠ Product authority. Floor/ceiling are server FinOps guards.
 */
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import type {
  CognitiveStrategyClass,
  CognitiveWorkloadSignals,
  SignalValue,
} from "./cognitiveWorkloadPolicy";

/** Legacy Product default when no adaptive decision applies. */
export const LEGACY_DEFAULT_MAX_TURNS = CT_MAX_TOOL_ROUNDS + 1; // 5

/** Absolute production floor — never below this without explicit caller override. */
export const ADAPTIVE_MAX_TURNS_FLOOR = 3;

/**
 * Absolute production ceiling — FinOps hard guard.
 * Intentionally NOT 12 (experimental documentary proof only).
 */
export const ADAPTIVE_MAX_TURNS_CEILING = 10;

/**
 * Base mission maxTurns by strategy class (delivery parameters).
 * Routine preserves legacy default (5).
 */
export const STRATEGY_BASE_MAX_TURNS: Record<CognitiveStrategyClass, number> = {
  Routine: LEGACY_DEFAULT_MAX_TURNS,
  Focused: 8,
  Deep: 10,
  "High-Assurance": 10,
};

export type AdaptiveMaxTurnsDecision = {
  /** Mission maxTurns before campaign clamp. */
  requestedMaxTurns: number;
  strategyClass: CognitiveStrategyClass | null;
  reasonCodes: string[];
  floor: number;
  ceiling: number;
  /** True when caller explicit maxTurns was used (tests / eval pins). */
  explicitOverride: boolean;
};

function clampInt(n: number, lo: number, hi: number): number {
  if (!Number.isFinite(n)) return lo;
  return Math.max(lo, Math.min(hi, Math.trunc(n)));
}

function isKnownHigh(value: SignalValue | undefined): boolean {
  return value === "high";
}

function isKnownMediumOrHigh(value: SignalValue | undefined): boolean {
  return value === "medium" || value === "high";
}

/**
 * Light, observable hints from Pilot request text — never invents LOW for unknowns.
 * Used only to elevate known dimensions when wording is explicit.
 */
export function inferWorkloadHintsFromUserContent(
  content: string,
): Partial<CognitiveWorkloadSignals> {
  const c = content.trim();
  if (!c) return {};
  const hints: Partial<CognitiveWorkloadSignals> = {};
  // Require multi-doc / documentary-analysis cues — bare "document" alone must NOT elevate.
  if (
    /documentary|multi[- ]?source|plusieurs\s+sources|guided\s+document|analys(?:e|er)\s+(?:plusieurs|les)\s+documents|cross[- ]?read|lire\s+(?:plusieurs|les)\s+fichiers|plusieurs\s+documents|documents\s+du\s+projet|compar(?:e|er)\s+(?:les\s+)?sources/i.test(
      c,
    )
  ) {
    hints.sourceBreadth = "high";
    hints.toolDependency = "high";
  }
  if (
    /v[ée]rif|cross[- ]?check|contradic|coherence|coh[ée]rence|entre\s+documents/i.test(
      c,
    )
  ) {
    hints.verificationNeed = "high";
  }
  return hints;
}

/**
 * Resolve adaptive mission maxTurns.
 * Explicit caller maxTurns always wins (tests, eval). Otherwise strategy+signals.
 */
export function resolveAdaptiveMaxTurns(input: {
  strategyClass?: CognitiveStrategyClass | null;
  signals?: Partial<CognitiveWorkloadSignals> | null;
  explicitMaxTurns?: number | null;
}): AdaptiveMaxTurnsDecision {
  const reasonCodes: string[] = [];
  const floor = ADAPTIVE_MAX_TURNS_FLOOR;
  const ceiling = ADAPTIVE_MAX_TURNS_CEILING;

  if (
    input.explicitMaxTurns != null &&
    Number.isFinite(input.explicitMaxTurns)
  ) {
    const requestedMaxTurns = Math.max(0, Math.trunc(input.explicitMaxTurns));
    reasonCodes.push("explicit_caller_maxTurns");
    return {
      requestedMaxTurns,
      strategyClass: input.strategyClass ?? null,
      reasonCodes,
      floor,
      ceiling,
      explicitOverride: true,
    };
  }

  const strategy = input.strategyClass ?? null;
  let base =
    strategy != null
      ? STRATEGY_BASE_MAX_TURNS[strategy]
      : LEGACY_DEFAULT_MAX_TURNS;
  reasonCodes.push(
    strategy != null
      ? `strategy_base:${strategy}:${base}`
      : `legacy_default:${base}`,
  );

  const signals = input.signals ?? {};
  // Known-high breadth/verification may bump within ceiling — never invent from unknown.
  if (
    isKnownHigh(signals.sourceBreadth) ||
    isKnownHigh(signals.verificationNeed)
  ) {
    const bumped = Math.min(ceiling, Math.max(base, 10));
    if (bumped > base) {
      reasonCodes.push("known_high_breadth_or_verification_bump");
      base = bumped;
    }
  } else if (
    isKnownMediumOrHigh(signals.sourceBreadth) &&
    isKnownMediumOrHigh(signals.toolDependency)
  ) {
    const bumped = Math.min(ceiling, Math.max(base, 8));
    if (bumped > base) {
      reasonCodes.push("known_medium_doc_tool_bump");
      base = bumped;
    }
  }

  // Unknown-heavy path: do not elevate beyond strategy base (UNKNOWN ≠ LOW inflate).
  if (
    signals.sourceBreadth === "unknown" &&
    signals.verificationNeed === "unknown" &&
    signals.reasoningDepth === "unknown"
  ) {
    reasonCodes.push("unknown_signals_no_inflate");
  }

  const requestedMaxTurns = clampInt(base, floor, ceiling);
  if (requestedMaxTurns !== base) {
    reasonCodes.push(`clamped_to_floor_ceiling:${requestedMaxTurns}`);
  }

  return {
    requestedMaxTurns,
    strategyClass: strategy,
    reasonCodes,
    floor,
    ceiling,
    explicitOverride: false,
  };
}
