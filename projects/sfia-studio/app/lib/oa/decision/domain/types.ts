/**
 * T-A3 Decision / Confirmation / Authority — domain types (Option A v3-native).
 * Modeled schemas are the reference contract; adoption is T-A3-scoped only.
 *
 * Dual enums are intentional:
 * - HumanDecision.authority: morris | delegated | system_non_structuring
 * - Confirmation.level / ActorReference.authorityLevel: N1 | N2 | N3 | none
 *
 * Actor.authorityLevel MUST NOT be trusted from the client — verify via
 * AuthorityResolverPort. N3 verified level does NOT automatically grant Morris
 * gate; HumanDecision.authority === "morris" requires explicit evidence flag
 * `canActAsMorris: true` (or dedicated morrisGrant).
 */

import type {
  ActorReference,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export { OA_SCHEMA_VERSION } from "@/lib/oa/doctrine";
export type { ActorReference, ProvenanceRecord };

/** Alias used in modeled docs — same shape as doctrine ActorReference. */
export type OaActorReference = ActorReference;

export type DecisionAuthority =
  | "morris"
  | "delegated"
  | "system_non_structuring";

export type HumanDecisionStatus =
  | "proposed"
  | "required"
  | "accepted"
  | "refused"
  | "amended"
  | "superseded"
  | "revoked";

export type ConfirmationLevel = "N1" | "N2" | "N3";

export type ConfirmationStatus =
  | "requested"
  | "granted"
  | "refused"
  | "expired"
  | "cancelled"
  | "consumed"
  | "superseded";

export type AuthorityLevel = "N1" | "N2" | "N3";

export type DecisionOption = {
  optionId: string;
  label: string;
  impacts?: string[];
  recommended?: boolean;
};

export type DecisionReservation = {
  reservationId: string;
  statement: string;
  blocking?: boolean;
};

export type HumanDecision = {
  schemaVersion: "0.1.0-oa";
  decisionId: string;
  projectId: string;
  cycleInstanceId?: string;
  subject: string;
  options: DecisionOption[];
  selectedOptionId: string;
  actor: OaActorReference;
  authority: DecisionAuthority;
  status: HumanDecisionStatus;
  effectiveAt: string;
  reversible: boolean;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  supersedes?: string;
  provenance?: ProvenanceRecord;
  /** Optimistic concurrency token — incremented on supersede of this record. */
  version?: number;
};

export type Confirmation = {
  schemaVersion: "0.1.0-oa";
  confirmationId: string;
  level: ConfirmationLevel;
  actionRef: string;
  requestedBy: OaActorReference;
  requestedTo: OaActorReference;
  scope: string;
  status: ConfirmationStatus;
  idempotencyKey: string;
  decisionRef?: string;
  impacts?: string[];
  risks?: string[];
  expiresAt?: string;
  confirmedAt?: string;
  cancelledAt?: string;
  provenance?: ProvenanceRecord;
};

/**
 * Authority evidence registry record.
 * `canActAsMorris` is SEPARATE from level N3 — N3 ≠ Morris gate.
 */
export type AuthorityEvidence = {
  evidenceId: string;
  actorId: string;
  level: AuthorityLevel;
  scope: string;
  issuedAt: string;
  expiresAt?: string;
  source: string;
  /** Explicit Morris-gate grant. Absent/false → cannot claim authority=morris. */
  canActAsMorris?: boolean;
};

export type VerifyAuthorityRequest = {
  actorId: string;
  requiredLevel: AuthorityLevel;
  scope: string;
  evidenceId?: string;
  /** Hostile injection — IGNORED. Never trusted. */
  authorityLevel?: AuthorityLevel | "none";
  displayName?: string;
  /** When true, also require canActAsMorris on matching evidence. */
  requireMorrisGate?: boolean;
};

export type VerifyAuthorityResult = {
  ok: boolean;
  verifiedLevel?: AuthorityLevel;
  canActAsMorris?: boolean;
  reason:
    | "verified"
    | "no_evidence"
    | "expired"
    | "level_insufficient"
    | "scope_mismatch"
    | "morris_gate_denied"
    | "evidence_not_found"
    | "actor_mismatch";
  evidenceId?: string;
};

export type RecordHumanDecisionRequest = {
  decisionId: string;
  projectId: string;
  cycleInstanceId?: string;
  subject: string;
  options: DecisionOption[];
  selectedOptionId: string;
  actor: OaActorReference;
  /**
   * Claimed decision authority. For "morris", AuthorityResolver must verify
   * N3 + canActAsMorris. Never inferred from actorId/displayName.
   */
  authority: DecisionAuthority;
  status?: HumanDecisionStatus;
  reversible: boolean;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  /** Required when authority === system_non_structuring. */
  nonStructuring?: boolean;
  /** Authority evidence id to verify against registry. */
  authorityEvidenceId?: string;
  /**
   * When accepting and another accepted decision exists for the same subject,
   * supersede it (default) or refuse with STATE_CONFLICT.
   */
  supersedeExistingAccepted?: boolean;
  /** After accept: append DecisionRef via public Cycle epistemic API. */
  linkEpistemicDecisionRef?: boolean;
  epistemicItemId?: string;
  /** After accept: append decisionId onto LPS via T-A1 append. */
  linkToLivingProjectState?: boolean;
  expectedLpsVersion?: number;
  correlationId?: string;
};

export type SupersedeHumanDecisionRequest = {
  newDecisionId: string;
  supersedesDecisionId: string;
  selectedOptionId: string;
  options?: DecisionOption[];
  actor: OaActorReference;
  authority: DecisionAuthority;
  reversible: boolean;
  reason: string;
  scope?: string;
  reservations?: DecisionReservation[];
  rationale?: string;
  evidenceRefs?: string[];
  nonStructuring?: boolean;
  authorityEvidenceId?: string;
  /** OCC: expected version of the decision being superseded. */
  expectedVersion?: number;
  correlationId?: string;
};

export type RequestConfirmationRequest = {
  confirmationId: string;
  level: ConfirmationLevel;
  actionRef: string;
  requestedBy: OaActorReference;
  requestedTo: OaActorReference;
  scope: string;
  idempotencyKey: string;
  decisionRef?: string;
  impacts?: string[];
  risks?: string[];
  expiresAt?: string;
  correlationId?: string;
};

export type GrantConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  authorityEvidenceId?: string;
  /** Hostile injection — ignored. */
  claimedAuthorityLevel?: AuthorityLevel | "none";
  correlationId?: string;
};

export type RefuseConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  rationale?: string;
  correlationId?: string;
};

export type ConsumeConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  correlationId?: string;
  /** Wall-clock override for expiry checks (tests). */
  nowIso?: string;
};

export type CancelConfirmationRequest = {
  confirmationId: string;
  actor: OaActorReference;
  correlationId?: string;
};

export type GetHumanDecisionRequest = {
  decisionId: string;
  correlationId?: string;
};

export type ListDecisionHistoryRequest = {
  projectId?: string;
  subject?: string;
  correlationId?: string;
};

/** Modeled ErrorRecord codes applicable to Decision/Confirmation/Authority. */
export type DecisionModeledErrorCode =
  | "DECISION_REQUIRED"
  | "CONFIRMATION_REQUIRED"
  | "AUTHORITY_DENIED"
  | "STATE_CONFLICT"
  | "CONTEXT_STALE";

/**
 * T-A3 detail codes — finer than modeled ErrorRecord enum.
 * AUTHORITY_SCOPE_MISMATCH maps to AUTHORITY_DENIED (modeled enum has no scope code).
 */
export type DecisionDetailCode =
  | "DECISION_INVALID"
  | "DECISION_ALREADY_EXISTS"
  | "DECISION_NOT_FOUND"
  | "DECISION_REQUIRED"
  | "CONFIRMATION_INVALID"
  | "CONFIRMATION_ALREADY_EXISTS"
  | "CONFIRMATION_NOT_FOUND"
  | "CONFIRMATION_REQUIRED"
  | "CONFIRMATION_EXPIRED"
  | "CONFIRMATION_ALREADY_CONSUMED"
  | "CONFIRMATION_IDEMPOTENCY_CONFLICT"
  | "AUTHORITY_DENIED"
  | "AUTHORITY_SCOPE_MISMATCH"
  | "PROJECT_NOT_FOUND"
  | "CYCLE_NOT_FOUND"
  | "CYCLE_PROJECT_MISMATCH"
  | "STATE_CONFLICT"
  | "VERSION_CONFLICT"
  | "LPS_VERSION_CONFLICT"
  | "PERSISTENCE_FAILURE";

export type DecisionStructuredError = {
  code: DecisionModeledErrorCode;
  detailCode: DecisionDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: boolean;
  recoverable: boolean;
  domain: "E";
  correlationId?: string;
  projectId?: string;
  decisionId?: string;
  confirmationId?: string;
  subject?: string;
  expectedVersion?: number;
  currentVersion?: number;
  provenance?: ProvenanceRecord;
  timestamp: string;
  internalCauseRef?: string;
};

export type DecisionSuccess = {
  ok: true;
  decision: HumanDecision;
  supersededDecisionIds?: string[];
  epistemicItemId?: string;
  livingProjectStateVersion?: number;
  durationMs: number;
};

export type DecisionFailure = {
  ok: false;
  error: DecisionStructuredError;
  durationMs: number;
};

export type DecisionResult = DecisionSuccess | DecisionFailure;

export type GetDecisionSuccess = {
  ok: true;
  decision: HumanDecision;
};

export type GetDecisionFailure = {
  ok: false;
  error: DecisionStructuredError;
};

export type GetDecisionResult = GetDecisionSuccess | GetDecisionFailure;

export type ListDecisionsSuccess = {
  ok: true;
  decisions: HumanDecision[];
};

export type ListDecisionsFailure = {
  ok: false;
  error: DecisionStructuredError;
};

export type ListDecisionsResult = ListDecisionsSuccess | ListDecisionsFailure;

export type ConfirmationSuccess = {
  ok: true;
  confirmation: Confirmation;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
};

export type ConfirmationFailure = {
  ok: false;
  error: DecisionStructuredError;
  durationMs: number;
};

export type ConfirmationResult = ConfirmationSuccess | ConfirmationFailure;

export type VerifyAuthorityUseCaseResult = {
  ok: true;
  result: VerifyAuthorityResult;
  durationMs: number;
};
