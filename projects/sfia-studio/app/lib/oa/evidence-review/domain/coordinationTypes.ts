/**
 * T-A6-D5 bounded coordination — RecommendNextGate (read-only).
 *
 * Sources: delivery framing/decisions (RecommendNextGate L1, no god-orchestrator),
 * modeled T_A7_AUTO_LAUNCH_FORBIDDEN / D-T-A6-10.
 *
 * NOT an aggregate. No persistence. No OCC. No mutation of D1–D4.
 * Recommendation ≠ decision ≠ confirmation ≠ executionAuthority ≠ gate consumed.
 */

import type { ActorReference } from "@/lib/oa/doctrine";

export type { ActorReference };

/** Fixed discriminator — never "decision" / "approved" / "consumed" / "executed". */
export type CoordinationResultKind = "recommendation";

/**
 * Coordination outcome — fail-closed vocabulary from D5 delivery cycle.
 * Never implies gate consumption or Morris decision.
 */
export type CoordinationStatus =
  | "blocked"
  | "not_recommended"
  | "requires_human_decision"
  | "gate_candidate";

export type CoordinationBlockerCode =
  | "source_missing"
  | "version_mismatch"
  | "evidence_unavailable"
  | "evidence_not_verified"
  | "evidence_superseded"
  | "review_bundle_not_frozen"
  | "review_bundle_incomplete"
  | "review_bundle_synthesis_only"
  | "claim_disputed"
  | "claim_waived"
  | "claim_superseded"
  | "claim_not_confirmed"
  | "claim_not_pass"
  | "maturity_blocked"
  | "maturity_superseded"
  | "maturity_not_confirmed"
  | "hard_reservation_open"
  | "cross_aggregate_inconsistency"
  | "no_sources"
  | "t_a7_auto_launch_forbidden";

export type CoordinationGapCode =
  | "evidence_incomplete"
  | "review_incomplete"
  | "claim_confirmation_missing"
  | "maturity_confirmation_missing"
  | "reserve_open"
  | "c1_c4_not_validated"
  | "r_m01_open";

export type NextActionCode =
  | "complete_evidence"
  | "verify_evidence_integrity"
  | "freeze_review_bundle"
  | "complete_review"
  | "evaluate_claim"
  | "confirm_claim_evaluation"
  | "resolve_dispute"
  | "propose_maturity"
  | "confirm_maturity"
  | "downgrade_maturity"
  | "solicit_morris_arbitration"
  | "solicit_morris_go";

/**
 * Gate candidate codes — never consumed by D5.
 * T-A7 / next cycle require an explicit Morris GO (D-T-A6-10).
 */
export type GateCandidateCode =
  | "SOLICIT_MORRIS_GO_FOR_NEXT_CYCLE"
  | "GO_VALIDATE_T_A6_DELIVERY_D5";

export type AuthorityRequirementLevel =
  | "none"
  | "human"
  | "n2"
  | "n3"
  | "morris";

export type SourceSnapshotKind =
  | "evidence"
  | "review_bundle"
  | "claim_evaluation"
  | "maturity_assessment";

export type SourceSnapshot = {
  kind: SourceSnapshotKind;
  id: string;
  version: number;
  status: string;
  projectId?: string;
  subjectRef?: string;
};

export type CoordinationBlocker = {
  code: CoordinationBlockerCode;
  sourceKind?: SourceSnapshotKind;
  sourceId?: string;
  sourceVersion?: number;
  detail?: string;
};

export type CoordinationGap = {
  code: CoordinationGapCode;
  sourceKind?: SourceSnapshotKind;
  sourceId?: string;
  detail?: string;
};

export type NextActionRecommendation = {
  kind: "recommendation";
  actionCode: NextActionCode;
  reasons: string[];
  authorityRequired: AuthorityRequirementLevel;
};

export type GateRecommendation = {
  kind: "recommendation";
  gateCode: GateCandidateCode;
  /** Always false — D5 never consumes a gate. */
  gateConsumed: false;
  /** Always false — D5 never creates a Morris decision. */
  decisionCreated: false;
  reasons: string[];
  authorityRequired: AuthorityRequirementLevel;
};

export type AuthorityRequirement = {
  level: AuthorityRequirementLevel;
  morrisRequired: boolean;
  reasons: string[];
};

/**
 * Deterministic coordination result — computed on demand, not persisted.
 */
export type CoordinationResult = {
  kind: CoordinationResultKind;
  status: CoordinationStatus;
  projectId: string;
  subjectRef?: string;
  assessedAt: string;
  sourceSnapshots: SourceSnapshot[];
  blockers: CoordinationBlocker[];
  gaps: CoordinationGap[];
  nextAction?: NextActionRecommendation;
  nextGate?: GateRecommendation;
  authorityRequirement: AuthorityRequirement;
  /** Always false — maturity/claim PASS ≠ executionAuthority. */
  executionAuthority: false;
  /** Always false — recommendation ≠ gate consumed. */
  gateConsumed: false;
  /** Always false — recommendation ≠ Morris decision. */
  decisionCreated: false;
};

export type VersionedRef = {
  id: string;
  version: number;
};

export type RecommendNextGateRequest = {
  projectId: string;
  subjectRef?: string;
  /** Exact MaturityAssessment binding (preferred chain root). */
  maturityAssessmentId?: string;
  maturityAssessmentVersion?: number;
  claimEvaluationRefs?: VersionedRef[];
  reviewBundleRefs?: VersionedRef[];
  evidenceRefs?: VersionedRef[];
  /**
   * Caller-supplied open HARD reservation refs (e.g. R-M01, R-T-A3-*).
   * D5 may expose them as blockers; never closes them.
   */
  openHardReservationRefs?: string[];
  /**
   * If true, refuse with T_A7_AUTO_LAUNCH_FORBIDDEN (D-T-A6-10).
   */
  attemptAutoLaunchNextCycle?: boolean;
  correlationId?: string;
  nowIso?: string;
  actor?: ActorReference;
};

export type CoordinationDetailCode =
  | "COORDINATION_INVALID"
  | "COORDINATION_NO_SOURCES"
  | "COORDINATION_SOURCE_MISSING"
  | "COORDINATION_VERSION_MISMATCH"
  | "COORDINATION_INCONSISTENT"
  | "T_A7_AUTO_LAUNCH_FORBIDDEN"
  | "COORDINATION_SECRET_FORBIDDEN";

export type CoordinationModeledErrorCode =
  | "VALIDATION_FAILED"
  | "T_A7_AUTO_LAUNCH_FORBIDDEN"
  | "STATE_CONFLICT";

export type CoordinationStructuredError = {
  schemaVersion: "0.1.0-oa";
  errorCode: CoordinationModeledErrorCode;
  detailCode: CoordinationDetailCode;
  message: string;
  severity: "error" | "critical";
  recoverable: boolean;
  timestamp: string;
  correlationId?: string;
  projectId?: string;
};

export type RecommendNextGateResult =
  | {
      ok: true;
      coordination: CoordinationResult;
      error?: undefined;
      durationMs: number;
    }
  | {
      ok: false;
      coordination?: CoordinationResult;
      error: CoordinationStructuredError;
      durationMs: number;
    };
