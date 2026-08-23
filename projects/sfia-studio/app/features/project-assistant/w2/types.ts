/**
 * W2 product DTOs — Options / Recommendation / HumanDecision / Trajectory /
 * ExecutionContract inspection / effective authority.
 *
 * Hard product invariants encoded in these shapes:
 *   Option ≠ Recommendation ≠ HumanDecision ≠ Confirmation ≠ result
 *   PROPOSED ≠ DECIDED
 * A Recommendation carries `isHumanDecision: false` and
 * `promotesTrajectory: false` so no surface can present it as an arbitration.
 */

import type { TrajectoryStep } from "@/lib/oa/cycle";

export type W2OptionKind = "OPTION";

export type TrajectoryOptionDto = {
  readonly kind: W2OptionKind;
  readonly optionRef: string;
  readonly label: string;
  readonly intent: string;
  readonly impacts: readonly string[];
  readonly reservations: readonly string[];
  readonly steps: readonly TrajectoryStep[];
};

export type TrajectoryRecommendationDto = {
  readonly label: "RECOMMANDATION — PAS UNE DÉCISION";
  readonly recommendedOptionRef: string;
  readonly rationale: string;
  /** Structural denials — a Recommendation never decides nor promotes. */
  readonly isHumanDecision: false;
  readonly promotesTrajectory: false;
  /**
   * W1 bounded CKC seam attribution when the qualification carried it.
   * Absent attribution is reported honestly rather than invented.
   */
  readonly ckcAttribution: string | null;
};

export type TrajectoryDecisionPhase =
  | "NO_OPTIONS"
  | "OPTIONS_PROPOSED"
  | "DECIDED";

export type ProposedTrajectoryDto = {
  readonly trajectoryId: string;
  readonly version: number;
  readonly status: "candidate";
  readonly statusLabel: "TRAJECTOIRE PROPOSÉE";
  readonly isCurrent: false;
};

export type DecidedTrajectoryDto = {
  readonly trajectoryId: string;
  readonly version: number;
  readonly status: "validated" | "active";
  readonly statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE";
  readonly isCurrent: true;
  readonly decidedByDecisionRef: string | null;
  readonly decidedOptionRef: string | null;
};

export type TrajectoryDecisionRecordDto = {
  readonly decisionId: string;
  readonly selectedOptionRef: string;
  readonly actorRole: "Pilote";
  readonly authorityClass: "morris";
  readonly statusLabel: "DÉCISION HUMAINE PRISE";
  readonly capturedAt: string;
  readonly decisionBasisLinked: true;
  readonly reservesText: string | null;
};

export type TrajectoryOptionSetDto = {
  readonly optionSetRef: string;
  readonly cycleTypeId: string;
  readonly recommendedProfile: string;
  readonly options: readonly TrajectoryOptionDto[];
  readonly recommendation: TrajectoryRecommendationDto;
  readonly epistemicRefs: readonly string[];
  readonly proposedTrajectory: ProposedTrajectoryDto;
  readonly phase: "OPTIONS_PROPOSED";
  readonly autoDecisionPerformed: false;
  readonly executionPerformed: false;
};

export type W2Failure = {
  readonly ok: false;
  readonly code: string;
  readonly message: string;
};

/* -------------------------------------------------------------------------- */
/* Track C — inspection / effective authority                                  */
/* -------------------------------------------------------------------------- */

export type ContractInspectionStateDto = {
  readonly executionContractId: string;
  readonly contractVersion: number;
  readonly semanticFingerprint: string;
  readonly statusLabel:
    | "NON INSPECTÉ"
    | "INSPECTÉ"
    | "RÉINSPECTION REQUISE — CONTRAT MODIFIÉ";
  readonly inspectionSufficient: boolean;
  readonly attestationRef: string | null;
  readonly attestedVersion: number | null;
  readonly staleAttestationRef: string | null;
  readonly reinspectionRequired: boolean;
  readonly reason:
    | "no_attestation"
    | "inspected"
    | "contract_version_changed"
    | "semantic_fingerprint_changed"
    | "contract_fingerprint_absent";
  /** Structural denial — inspecting is never authorizing. */
  readonly grantsAuthority: false;
};

export type InspectExecutionContractResult =
  | ({ readonly ok: true } & ContractInspectionStateDto)
  | W2Failure;

export type ConfirmationRequirementDto = {
  readonly required: boolean;
  readonly satisfied: boolean;
  readonly confirmationRef: string | null;
  readonly statusLabel:
    | "CONFIRMATION NON REQUISE"
    | "CONFIRMATION REQUISE — MANQUANTE"
    | "CONFIRMATION REQUISE — OBTENUE";
  /** Never fabricated: a missing required Confirmation blocks honestly. */
  readonly fabricated: false;
};

export type ConfirmForAuthorizationResult =
  | {
      readonly ok: true;
      readonly executionContractId: string;
      readonly contractVersion: number;
      readonly confirmationRef: string | null;
      readonly statusLabel: "CONFIRMATION REQUISE — OBTENUE";
      readonly alreadyConfirmed: boolean;
      /** Confirming authorizes nothing to run. */
      readonly executionPerformed: false;
    }
  | W2Failure;

export type AgentCapabilityOutcomeDto = {
  readonly sufficient: boolean;
  readonly evaluatedAgentRefs: readonly string[];
  readonly sufficientAgentRef: string | null;
  readonly reason: string;
  readonly statusLabel:
    | "EXÉCUTEUR SUFFISANT"
    | "EXÉCUTEUR INSUFFISANT — BLOQUÉ";
};

export type ExecutionAuthorizationOutcomeDto = {
  readonly executionContractId: string;
  readonly contractVersion: number;
  readonly outcome: "AUTHORIZED" | "BLOCKED";
  readonly outcomeLabel:
    | "AUTORISÉ — STOP AVANT EXECUTE"
    | "BLOQUÉ — ACTION REQUISE";
  readonly reasonCode: string;
  readonly reasonText: string;
  readonly nextAction: string;
  readonly inspection: ContractInspectionStateDto;
  readonly confirmation: ConfirmationRequirementDto;
  readonly agentCapability: AgentCapabilityOutcomeDto;
  readonly authorityReceiptRef: string;
  readonly decisionRefs: readonly string[];
  readonly requiredAuthority: string;
  readonly verifiedAuthorityLevel: string | null;
  /** STOP BEFORE EXECUTE — no ExecutionAttempt is ever created here. */
  readonly executionPerformed: false;
  readonly attemptCreated: false;
};

export type EvaluateExecutionAuthorizationResult =
  | ({ readonly ok: true } & ExecutionAuthorizationOutcomeDto)
  | W2Failure;

export type ProposeTrajectoryOptionsResult =
  | ({ readonly ok: true } & TrajectoryOptionSetDto)
  | W2Failure;

export type DecideTrajectoryResult =
  | {
      readonly ok: true;
      readonly decision: TrajectoryDecisionRecordDto;
      readonly trajectory: DecidedTrajectoryDto;
      readonly livingProjectStateVersion: number;
      readonly executionPerformed: false;
    }
  | W2Failure;
