/**
 * Deterministic server-side Morris gate policy for F2.
 * Model signals never grant authority.
 */

import type { F2QualificationSignals, IntentAnalysisDto } from "./types";

export type GatePolicyInput = {
  recommendedProfile: string;
  signals: F2QualificationSignals;
  intent: IntentAnalysisDto;
  requestedOperation?: string | null;
};

/**
 * Gate required for Critical / structural / security / irreversible /
 * doctrine / git write surface / PR / merge / branch delete / protected paths.
 */
export function evaluateMorrisGateRequired(input: GatePolicyInput): boolean {
  const { signals, recommendedProfile, intent } = input;
  if (recommendedProfile === "Critical") return true;
  if (signals.structuralChange) return true;
  if (signals.securityImpact) return true;
  if (signals.architectureImpact) return true;
  if (signals.irreversible) return true;
  if (!signals.lowRiskBounded && (signals.dataImpact || signals.structuralChange)) {
    return true;
  }

  const op = (
    input.requestedOperation ??
    intent.requestedOperation ??
    ""
  ).toLowerCase();
  const blob = [
    op,
    intent.objective ?? "",
    intent.scope ?? "",
    intent.rephrasedRequest ?? "",
    ...(intent.risks ?? []),
  ]
    .join(" ")
    .toLowerCase();

  const structuralOps = [
    "push",
    "pull request",
    " create pr",
    "merge",
    "suppression branche",
    "delete branch",
    "doctrine",
    "protected path",
    "chemin protégé",
    "cursor",
    "executionrun",
    "git write",
    "github write",
  ];
  if (structuralOps.some((token) => blob.includes(token.trim()))) {
    return true;
  }

  if (intent.intentClass === "execution_request") {
    // Execution requests may propose, but gate is required when impactful.
    if (
      signals.architectureImpact ||
      signals.securityImpact ||
      signals.structuralChange ||
      signals.irreversible
    ) {
      return true;
    }
  }

  return false;
}
