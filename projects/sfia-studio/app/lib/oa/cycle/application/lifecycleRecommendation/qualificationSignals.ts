/**
 * D-GF-START-01 — explicit CycleQualificationSignals helpers.
 * Never invent false defaults. Never reverse-map from labels.
 */

import type {
  CycleQualificationSignals,
  ExplicitCycleQualificationSignals,
} from "../../domain/types";

export const QUALIFICATION_SIGNAL_KEYS = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
  "lowRiskBounded",
] as const;

export type QualificationSignalKey = (typeof QUALIFICATION_SIGNAL_KEYS)[number];

export function isExplicitCycleQualificationSignals(
  value: unknown,
): value is ExplicitCycleQualificationSignals {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  return QUALIFICATION_SIGNAL_KEYS.every((k) => typeof o[k] === "boolean");
}

/**
 * Parse unknown into six explicit booleans or null.
 * Does NOT invent missing fields as false.
 */
export function parseExplicitQualificationSignals(
  value: unknown,
): ExplicitCycleQualificationSignals | null {
  return isExplicitCycleQualificationSignals(value) ? { ...value } : null;
}

export function toCreateCycleSignals(
  signals: ExplicitCycleQualificationSignals,
): CycleQualificationSignals {
  return {
    structuralChange: signals.structuralChange,
    securityImpact: signals.securityImpact,
    architectureImpact: signals.architectureImpact,
    dataImpact: signals.dataImpact,
    irreversible: signals.irreversible,
    lowRiskBounded: signals.lowRiskBounded,
  };
}

export function qualificationSignalsEqual(
  a: ExplicitCycleQualificationSignals,
  b: ExplicitCycleQualificationSignals,
): boolean {
  return QUALIFICATION_SIGNAL_KEYS.every((k) => a[k] === b[k]);
}

/** Deterministic Critical justification from true critical signals only. */
export function buildCriticalProfileJustificationFromSignals(
  signals: ExplicitCycleQualificationSignals,
): string {
  const criticalTrue = (
    [
      "structuralChange",
      "securityImpact",
      "architectureImpact",
      "dataImpact",
      "irreversible",
    ] as const
  ).filter((k) => signals[k]);
  if (criticalTrue.length === 0) {
    return "Profil Critical dérivé des signaux de qualification scellés.";
  }
  return `Profil Critical dérivé des signaux de qualification scellés : ${criticalTrue.join(", ")}.`;
}
