/**
 * T-A2 Cycle / Trajectory / Epistemic / CKC — domain types (Option A v3-native).
 * Modeled schemas are the reference contract; adoption is T-A2-scoped only.
 * Capitalization is NOT a profile enum — use cycleTypeId `cyc:capitalization`.
 */

import type {
  ActorReference,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine";
export type { ActorReference, ProvenanceRecord };

export const MAX_TRAJECTORY_SNAPSHOT_BYTES = 256_000 as const;

export const CAPITALIZATION_CYCLE_TYPE_ID = "cyc:capitalization" as const;

/** Modeled CycleInstance.profile — no Capitalization member. */
export type CycleProfile = "Light" | "Standard" | "Critical";

export type CycleInstanceStatus =
  | "proposed"
  | "acknowledged"
  | "active"
  | "blocked"
  | "completed"
  | "cancelled"
  | "superseded";

export type TrajectoryStatus =
  | "candidate"
  | "validated"
  | "active"
  | "stale"
  | "superseded";

export type TrajectoryStepState =
  | "pending"
  | "active"
  | "blocked"
  | "done"
  | "skipped";

export type EpistemicItemType =
  | "Observation"
  | "Hypothesis"
  | "Option"
  | "Recommendation"
  | "DecisionRef"
  | "Reservation"
  | "Contradiction"
  | "EvidenceRef";

export type EpistemicItemStatus =
  | "active"
  | "superseded"
  | "rejected"
  | "resolved";

export type EpistemicConfidence = "high" | "medium" | "low" | "none";

export type CkcLevel = "detailed" | "synthetic" | "absent";

export type CkcStatus = "resolved" | "synthetic" | "unavailable" | "invalid";

export type CkcFallbackPolicy = "intra_v3_only" | "none";

export type CkcSource =
  | "repository_candidate"
  | "intra_v3_synthetic"
  | "product_package"
  | "unavailable";

export type CycleInstance = {
  schemaVersion: "0.1.0-oa";
  cycleInstanceId: string;
  cycleTypeId: string;
  projectId: string;
  profile: CycleProfile;
  status: CycleInstanceStatus;
  acknowledgedAt?: string;
  createdAt: string;
  closedAt?: string;
};

export type TrajectoryStep = {
  stepId: string;
  order: number;
  label: string;
  state: TrajectoryStepState;
  dependencies?: string[];
  gate?: string;
  exitCriteria?: string[];
  risks?: string[];
  reservations?: string[];
};

export type ProjectTrajectory = {
  schemaVersion: "0.1.0-oa";
  trajectoryId: string;
  projectId: string;
  version: number;
  status: TrajectoryStatus;
  steps: TrajectoryStep[];
  supersedesTrajectoryVersion?: number;
  /**
   * W2: durable HumanDecision reference that promoted this version to
   * decided/current. Absent on `candidate` (proposed) versions.
   */
  decidedByDecisionRef?: string;
  /** W2: product-level Option reference selected by the HumanDecision. */
  decidedOptionRef?: string;
};

export type EpistemicItem = {
  schemaVersion: "0.1.0-oa";
  epistemicItemId: string;
  type: EpistemicItemType;
  statement: string;
  status: EpistemicItemStatus;
  confidence?: EpistemicConfidence;
  source?: string;
  createdBy: ActorReference;
  createdAt: string;
  supersedes?: string;
  relatedObjects?: string[];
  blocking?: boolean;
  provenance?: ProvenanceRecord;
};

export type CkcResolution = {
  schemaVersion: "0.1.0-oa";
  ckcResolutionId: string;
  cycleTypeId: string;
  level: CkcLevel;
  source?: CkcSource;
  version?: string;
  freshness?: "fresh" | "aging" | "stale" | "unknown";
  confidence?: EpistemicConfidence;
  resolvedAt: string;
  fallbackPolicy: CkcFallbackPolicy;
  status: CkcStatus;
  /** Modeled const false — never execution authority. */
  executionAuthority?: false;
  provenance?: ProvenanceRecord;
};

/** Explicit qualification signals — no invented scores. */
export type CycleQualificationSignals = {
  structuralChange?: boolean;
  securityImpact?: boolean;
  architectureImpact?: boolean;
  dataImpact?: boolean;
  irreversible?: boolean;
  lowRiskBounded?: boolean;
};

export type QualifyCycleRequest = {
  objective?: string;
  scope?: string;
  signals: CycleQualificationSignals;
  requestedProfile?: CycleProfile;
  justification?: string;
  cycleTypeId?: string;
};

export type QualifyCycleRecommendation = {
  recommendedProfile: CycleProfile;
  rationale: string;
  criticalSignalsPresent: boolean;
  /** Recommendation only — NEVER a Morris decision / gate consumption. */
  isMorrisDecision: false;
  requiresJustificationForCritical: boolean;
  /** Schema gap note: Capitalization is cycleTypeId, not profile. */
  capitalizationViaCycleTypeId: boolean;
};

export type CreateCycleRequest = {
  cycleInstanceId: string;
  cycleTypeId: string;
  projectId: string;
  signals: CycleQualificationSignals;
  requestedProfile?: CycleProfile;
  justification?: string;
  objective?: string;
  scope?: string;
  createdBy: ActorReference;
  correlationId?: string;
  /** When true, also stamp Project.activeCycleInstanceId via LPS append path. */
  linkAsActiveCycle?: boolean;
  expectedLpsVersion?: number;
  /**
   * Durable CKC binding projection (no raw CKC dimensions).
   * Written to LPS when linkAsActiveCycle is true.
   */
  ckcResolutionRef?: string;
};

export type CreateInitialTrajectoryRequest = {
  trajectoryId: string;
  projectId: string;
  steps: TrajectoryStep[];
  /** Modeled allows candidate | active for v1. Default: candidate. */
  status?: "candidate" | "active";
  createdBy: ActorReference;
  correlationId?: string;
  expectedLpsVersion: number;
};

export type ProposeTrajectoryVersionRequest = {
  trajectoryId: string;
  projectId: string;
  expectedVersion: number;
  steps: TrajectoryStep[];
  status?: TrajectoryStatus;
  createdBy: ActorReference;
  correlationId?: string;
  expectedLpsVersion: number;
};

/**
 * W2 — promote an existing `candidate` trajectory version to decided/current.
 * `decisionRef` is mandatory: OA never promotes a structuring trajectory
 * without a decision reference. Product-path enforcement (D-W2-03) verifies
 * that the reference is an accepted durable HumanDecision.
 */
export type PromoteDecidedTrajectoryRequest = {
  trajectoryId: string;
  projectId: string;
  /** Version of the candidate to promote. */
  expectedVersion: number;
  status?: "validated" | "active";
  decisionRef: string;
  decidedOptionRef?: string;
  /**
   * W2 A1 — when provided, these steps become the decided trajectory content
   * (same version, candidate → validated). Used so a Pilote-selected option
   * that differs from the recommended outline is sealed at promote time.
   */
  steps?: TrajectoryStep[];
  createdBy: ActorReference;
  correlationId?: string;
  expectedLpsVersion: number;
};

export type UpdateEpistemicStateRequest = {
  projectId: string;
  items: Array<{
    epistemicItemId: string;
    type: EpistemicItemType;
    statement: string;
    status?: EpistemicItemStatus;
    confidence?: EpistemicConfidence;
    source?: string;
    supersedes?: string;
    relatedObjects?: string[];
    blocking?: boolean;
    provenance?: ProvenanceRecord;
    /**
     * Forbidden auto-promotion signal — if true and type is DecisionRef
     * while superseding a Hypothesis, refused.
     */
    promoteFromHypothesis?: boolean;
  }>;
  createdBy: ActorReference;
  correlationId?: string;
};

export type ResolveCycleKnowledgeContractRequest = {
  cycleTypeId: string;
  correlationId?: string;
};

/** Modeled ErrorRecord codes applicable to Cycle/Trajectory/Epistemic/CKC. */
export type CycleModeledErrorCode =
  | "DOCTRINE_UNRESOLVED"
  | "STATE_CONFLICT"
  | "CONTEXT_STALE"
  | "CKC_UNAVAILABLE"
  | "DECISION_REQUIRED"
  | "AUTHORITY_DENIED";

/**
 * T-A2 detail codes — finer than modeled ErrorRecord enum.
 * Mapped onto CycleModeledErrorCode for ErrorRecord-compatible emission (T-A2-D08).
 */
export type CycleDetailCode =
  | "CYCLE_INVALID"
  | "CYCLE_ALREADY_EXISTS"
  | "CYCLE_NOT_FOUND"
  | "CYCLE_CRITICAL_JUSTIFICATION_REQUIRED"
  | "PROJECT_NOT_FOUND"
  | "TRAJECTORY_INVALID"
  | "TRAJECTORY_ALREADY_EXISTS"
  | "TRAJECTORY_NOT_FOUND"
  | "TRAJECTORY_VERSION_CONFLICT"
  | "EPISTEMIC_INVALID"
  | "EPISTEMIC_PROMOTION_FORBIDDEN"
  | "CKC_UNAVAILABLE"
  | "LPS_VERSION_CONFLICT"
  | "CONTEXT_STALE"
  | "STATE_CONFLICT"
  | "PERSISTENCE_FAILURE";

export type CycleStructuredError = {
  code: CycleModeledErrorCode;
  detailCode: CycleDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "D";
  correlationId?: string;
  projectId?: string;
  cycleInstanceId?: string;
  trajectoryId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  epistemicItemId?: string;
  cycleTypeId?: string;
  provenance?: ProvenanceRecord;
  timestamp: string;
  internalCauseRef?: string;
};

export type QualifyCycleResult = {
  ok: true;
  recommendation: QualifyCycleRecommendation;
};

export type CreateCycleSuccess = {
  ok: true;
  cycle: CycleInstance;
  qualification: QualifyCycleRecommendation;
  durationMs: number;
};

export type CreateCycleFailure = {
  ok: false;
  error: CycleStructuredError;
  durationMs: number;
};

export type CreateCycleResult = CreateCycleSuccess | CreateCycleFailure;

export type GetCycleSuccess = {
  ok: true;
  cycle: CycleInstance;
};

export type GetCycleFailure = {
  ok: false;
  error: CycleStructuredError;
};

export type GetCycleResult = GetCycleSuccess | GetCycleFailure;

export type TrajectorySuccess = {
  ok: true;
  trajectory: ProjectTrajectory;
  livingProjectStateVersion?: number;
  durationMs: number;
};

export type TrajectoryFailure = {
  ok: false;
  error: CycleStructuredError;
  durationMs: number;
};

export type TrajectoryResult = TrajectorySuccess | TrajectoryFailure;

export type GetTrajectorySuccess = {
  ok: true;
  trajectory: ProjectTrajectory;
};

export type GetTrajectoryFailure = {
  ok: false;
  error: CycleStructuredError;
};

export type GetTrajectoryResult = GetTrajectorySuccess | GetTrajectoryFailure;

export type EpistemicState = {
  projectId: string;
  items: EpistemicItem[];
};

export type GetEpistemicSuccess = {
  ok: true;
  state: EpistemicState;
};

export type GetEpistemicFailure = {
  ok: false;
  error: CycleStructuredError;
};

export type GetEpistemicResult = GetEpistemicSuccess | GetEpistemicFailure;

export type UpdateEpistemicSuccess = {
  ok: true;
  state: EpistemicState;
  durationMs: number;
};

export type UpdateEpistemicFailure = {
  ok: false;
  error: CycleStructuredError;
  durationMs: number;
};

export type UpdateEpistemicResult =
  | UpdateEpistemicSuccess
  | UpdateEpistemicFailure;

export type ResolveCkcSuccess = {
  ok: true;
  resolution: CkcResolution;
  durationMs: number;
};

export type ResolveCkcFailure = {
  ok: false;
  error: CycleStructuredError;
  durationMs: number;
};

export type ResolveCkcResult = ResolveCkcSuccess | ResolveCkcFailure;
