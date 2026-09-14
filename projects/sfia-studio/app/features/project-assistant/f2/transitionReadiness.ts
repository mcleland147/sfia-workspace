/**
 * CORR-PROOF-02 B1 — Deterministic transition / formalization readiness gate.
 *
 * Server-owned. Distinguishes SAFE ADVISORY vs GOVERNED FORMALIZATION READY.
 * Ambiguous / parse-fail never authorize F2 durable effects.
 * Missing formalization fields are never invented to authorize F2.
 *
 * CORR-PROOF-07 — formalizationReady ≠ createCycle.
 * When ready, orchestrateF2 must still distinguish:
 *   NEW_CYCLE_FORMALIZATION ≠ ACTIVE_CYCLE_GOVERNED_CONTINUATION
 * (see activeCycleGovernedContinuation.ts).
 */

import type { IntentAnalysisDto } from "./types";
import type { F2RoutingMode } from "./activeCycleGovernedContinuation";

export type TransitionReadinessReason =
  | "ready"
  | "parse_failed"
  | "not_governed_intent"
  | "missing_cycle"
  | "missing_signals"
  | "repo_informative_override";

export type TransitionReadiness = {
  readonly formalizationReady: boolean;
  readonly reason: TransitionReadinessReason;
  /**
   * CORR-PROOF-07 — readiness alone never selects routing mode.
   * Default NOT_GOVERNED when not ready; NEW_CYCLE until continuation resolver runs.
   */
  readonly provisionalRoutingMode: F2RoutingMode;
};

export function resolveTransitionReadiness(input: {
  analysis: IntentAnalysisDto;
  /** Deterministic override: pure repository read stays advisory. */
  forceRepoInformative?: boolean;
}): TransitionReadiness {
  if (input.forceRepoInformative) {
    return {
      formalizationReady: false,
      reason: "repo_informative_override",
      provisionalRoutingMode: "NOT_GOVERNED_FORMALIZATION",
    };
  }

  const { analysis } = input;

  if (!analysis.parseOk) {
    return {
      formalizationReady: false,
      reason: "parse_failed",
      provisionalRoutingMode: "NOT_GOVERNED_FORMALIZATION",
    };
  }

  if (
    analysis.intentClass !== "actionable" &&
    analysis.intentClass !== "execution_request"
  ) {
    return {
      formalizationReady: false,
      reason: "not_governed_intent",
      provisionalRoutingMode: "NOT_GOVERNED_FORMALIZATION",
    };
  }

  if (!analysis.candidateCycleTypeId) {
    return {
      formalizationReady: false,
      reason: "missing_cycle",
      provisionalRoutingMode: "NOT_GOVERNED_FORMALIZATION",
    };
  }

  if (!analysis.signals) {
    return {
      formalizationReady: false,
      reason: "missing_signals",
      provisionalRoutingMode: "NOT_GOVERNED_FORMALIZATION",
    };
  }

  // Ready for governed effect prep — routing mode resolved later in orchestrateF2.
  return {
    formalizationReady: true,
    reason: "ready",
    provisionalRoutingMode: "NEW_CYCLE_FORMALIZATION",
  };
}

export function isGovernedFormalizationReady(input: {
  analysis: IntentAnalysisDto;
  forceRepoInformative?: boolean;
}): boolean {
  return resolveTransitionReadiness(input).formalizationReady;
}
