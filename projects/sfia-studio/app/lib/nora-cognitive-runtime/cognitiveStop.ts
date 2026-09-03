/**
 * MW3-S02 — Cognitive STOP honesty (≠ generic error / ≠ Execute STOP).
 *
 * Maps evidence-backed contradiction + governing-premise impact onto an
 * attributable Cognitive STOP over existing progression seams.
 *
 * Cognitive STOP ≠ HumanDecision ≠ Confirmation ≠ provider HITL ≠ transport error.
 */

import type { ContradictionDispositionResult } from "./contradictionDisposition";

/** C3 §11 anatomy cases used for attributable Cognitive STOP messaging. */
export type CognitiveStopAnatomyCode =
  | "E_candidate_contradiction"
  | "F_evidence_backed_contradiction"
  | "G_governing_premise_contradiction"
  | "I_governed_stop";

export type CognitiveProgressionKind =
  | "continue"
  | "cognitive_stop"
  | "technical_failure";

/**
 * Product progression for Nora cognitive path.
 * SUCCESS is never emitted for a Cognitive STOP path.
 */
export type CognitiveProgressionOutcome =
  | "PROGRESS_OK"
  | "PROGRESS_WITH_CONTRADICTION"
  | "COGNITIVE_STOP"
  | "TECHNICAL_FAILURE";

export type CognitiveStopAnatomy = {
  caseCode: CognitiveStopAnatomyCode;
  /** Why progression cannot honestly continue. */
  reason: string;
  /** Evidence-backed contradiction ids (attributable). */
  contradictionEvidenceIds: string[];
  sourceIds: string[];
  governingPremise: string;
  /** Next recovery-shaped action — recommendation, not HumanDecision. */
  nextAction: string;
  /** Explicit: this is not a transport/provider error. */
  notTechnicalError: true;
  /** Explicit: Nora did not consume Pilote HD authority. */
  notHumanDecision: true;
};

export type CognitiveStopDecisionInput = {
  disposition: ContradictionDispositionResult;
  /** Evidence-backed contradiction invalidates an indispensable governing premise. */
  governingPremiseInvalidated: boolean;
  governingPremise?: string;
  /** Local / non-governing impact — surface contradiction, do not STOP. */
  localImpactOnly?: boolean;
  /** Technical/network/tool/transport failure path — never Cognitive STOP. */
  technicalFailure?: boolean;
  technicalFailureMessage?: string;
};

export type CognitiveStopDecision = {
  progression: CognitiveProgressionKind;
  outcome: CognitiveProgressionOutcome;
  /** True only for Cognitive STOP — never for technical failure. */
  cognitiveStop: boolean;
  anatomy: CognitiveStopAnatomy | null;
  /** Surfaced contradiction kind for UX (candidate / evidence_backed / none). */
  surfacedDisposition: ContradictionDispositionResult["disposition"];
  /** Anti-silent-SUCCESS: blocked path never reports product SUCCESS. */
  allowsSilentSuccess: false;
};

export function decideCognitiveStop(
  input: CognitiveStopDecisionInput,
): CognitiveStopDecision {
  const allowsSilentSuccess = false as const;
  const disposition = input.disposition.disposition;

  if (input.technicalFailure === true) {
    return {
      progression: "technical_failure",
      outcome: "TECHNICAL_FAILURE",
      cognitiveStop: false,
      anatomy: null,
      surfacedDisposition: disposition,
      allowsSilentSuccess,
    };
  }

  if (disposition === "none") {
    return {
      progression: "continue",
      outcome: "PROGRESS_OK",
      cognitiveStop: false,
      anatomy: null,
      surfacedDisposition: "none",
      allowsSilentSuccess,
    };
  }

  if (disposition === "candidate") {
    return {
      progression: "continue",
      outcome: "PROGRESS_WITH_CONTRADICTION",
      cognitiveStop: false,
      anatomy: {
        caseCode: "E_candidate_contradiction",
        reason:
          input.disposition.disclosure ??
          "Possible conflict retained as candidate — not evidence-backed.",
        contradictionEvidenceIds: [],
        sourceIds: [],
        governingPremise: input.governingPremise ?? "",
        nextAction: "Verify sources before treating the conflict as proven.",
        notTechnicalError: true,
        notHumanDecision: true,
      },
      surfacedDisposition: "candidate",
      allowsSilentSuccess,
    };
  }

  // evidence_backed — governing invalidation takes precedence over localImpactOnly.
  // Conflicting flags (localImpactOnly=true AND governingPremiseInvalidated=true)
  // fail closed to Cognitive STOP. Do not silently prefer local impact.
  if (input.governingPremiseInvalidated === true) {
    const premise =
      typeof input.governingPremise === "string" &&
      input.governingPremise.trim().length > 0
        ? input.governingPremise.trim()
        : "Indispensable governing premise";

    return {
      progression: "cognitive_stop",
      outcome: "COGNITIVE_STOP",
      cognitiveStop: true,
      anatomy: {
        caseCode: "G_governing_premise_contradiction",
        reason: `Evidence-backed contradiction invalidates governing premise: ${premise}`,
        contradictionEvidenceIds: [...input.disposition.acceptedEvidenceIds],
        sourceIds: [...input.disposition.acceptedSourceIds],
        governingPremise: premise,
        nextAction:
          "Cognitive STOP — replan/recovery as recommendation; Pilote HumanDecision if structural.",
        notTechnicalError: true,
        notHumanDecision: true,
      },
      surfacedDisposition: "evidence_backed",
      allowsSilentSuccess,
    };
  }

  return {
    progression: "continue",
    outcome: "PROGRESS_WITH_CONTRADICTION",
    cognitiveStop: false,
    anatomy: {
      caseCode: "F_evidence_backed_contradiction",
      reason:
        "Evidence-backed contradiction surfaced — governing premise still holds; progression may continue honestly.",
      contradictionEvidenceIds: [...input.disposition.acceptedEvidenceIds],
      sourceIds: [...input.disposition.acceptedSourceIds],
      governingPremise: input.governingPremise ?? "",
      nextAction: "Correct recommendation path if needed; no Cognitive STOP.",
      notTechnicalError: true,
      notHumanDecision: true,
    },
    surfacedDisposition: "evidence_backed",
    allowsSilentSuccess,
  };
}

/** Hard anti-claim helper for T11 silent-success regression. */
export function cognitiveStopAllowsProductSuccess(
  decision: CognitiveStopDecision,
): boolean {
  if (decision.cognitiveStop) return false;
  if (decision.outcome === "COGNITIVE_STOP") return false;
  return decision.allowsSilentSuccess === false
    ? decision.outcome === "PROGRESS_OK" ||
        decision.outcome === "PROGRESS_WITH_CONTRADICTION"
    : false;
}

export function formatCognitiveStopPiloteNotice(
  decision: CognitiveStopDecision,
): string | null {
  if (!decision.cognitiveStop || !decision.anatomy) return null;
  const a = decision.anatomy;
  return [
    "ARRÊT COGNITIF (≠ erreur technique).",
    a.reason,
    a.contradictionEvidenceIds.length > 0
      ? `Evidence: ${a.contradictionEvidenceIds.join(", ")}.`
      : null,
    a.sourceIds.length > 0 ? `Sources: ${a.sourceIds.join(", ")}.` : null,
    `Suite: ${a.nextAction}`,
  ]
    .filter(Boolean)
    .join(" ");
}
