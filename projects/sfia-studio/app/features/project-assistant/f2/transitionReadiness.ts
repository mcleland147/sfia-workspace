/**
 * CORR-PROOF-02 B1 — Deterministic transition / formalization readiness gate.
 *
 * Server-owned. Distinguishes SAFE ADVISORY vs GOVERNED FORMALIZATION READY.
 * Ambiguous / parse-fail never authorize F2 durable effects.
 * Missing formalization fields are never invented to authorize F2.
 */

import type { IntentAnalysisDto } from "./types";

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
    };
  }

  const { analysis } = input;

  if (!analysis.parseOk) {
    return { formalizationReady: false, reason: "parse_failed" };
  }

  if (
    analysis.intentClass !== "actionable" &&
    analysis.intentClass !== "execution_request"
  ) {
    return { formalizationReady: false, reason: "not_governed_intent" };
  }

  if (!analysis.candidateCycleTypeId) {
    return { formalizationReady: false, reason: "missing_cycle" };
  }

  if (!analysis.signals) {
    return { formalizationReady: false, reason: "missing_signals" };
  }

  return { formalizationReady: true, reason: "ready" };
}

export function isGovernedFormalizationReady(input: {
  analysis: IntentAnalysisDto;
  forceRepoInformative?: boolean;
}): boolean {
  return resolveTransitionReadiness(input).formalizationReady;
}
