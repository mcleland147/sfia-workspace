/**
 * Append-only audit sink for T-A6 Evidence / ReviewBundle.
 * Events carry refs only — never payloads, secrets, or personal data beyond actorId.
 */

export type EvidenceAuditEventName =
  | "oa.evidence.registered"
  | "oa.evidence.execution_attempt_ingested"
  | "oa.evidence.integrity_verified"
  | "oa.evidence.integrity_rejected"
  | "oa.evidence.unavailable"
  | "oa.evidence.operation_rejected"
  | "oa.evidence.idempotency_conflict"
  | "oa.evidence.concurrent_modification_rejected"
  | "oa.review_bundle.created"
  | "oa.review_bundle.evidence_attached"
  | "oa.review_bundle.evidence_removed"
  | "oa.review_bundle.frozen"
  | "oa.review_bundle.review_started"
  | "oa.review_bundle.accepted"
  | "oa.review_bundle.rejected"
  | "oa.review_bundle.marked_incomplete"
  | "oa.review_bundle.reopened"
  | "oa.review_bundle.operation_rejected"
  | "oa.review_bundle.idempotency_conflict"
  | "oa.review_bundle.concurrent_modification_rejected"
  | "oa.claim_evaluation.created"
  | "oa.claim_evaluation.evaluated"
  | "oa.claim_evaluation.passed"
  | "oa.claim_evaluation.failed"
  | "oa.claim_evaluation.inconclusive"
  | "oa.claim_evaluation.confirmation_requested"
  | "oa.claim_evaluation.confirmed"
  | "oa.claim_evaluation.waived"
  | "oa.claim_evaluation.disputed"
  | "oa.claim_evaluation.operation_rejected"
  | "oa.claim_evaluation.authority_rejected"
  | "oa.claim_evaluation.idempotency_conflict"
  | "oa.claim_evaluation.concurrent_modification_rejected";

export type EvidenceAuditEvent = {
  event: EvidenceAuditEventName;
  ts: string;
  correlationId?: string;
  evidenceId?: string;
  evidenceIds?: string[];
  executionAttemptId?: string;
  reviewBundleId?: string;
  successorReviewBundleId?: string;
  claimEvaluationId?: string;
  actorId?: string;
  previousStatus?: string;
  newStatus?: string;
  version?: number;
  expectedVersion?: number;
  result: "ok" | "error";
  detailCode?: string;
  durationMs: number;
};

export interface EvidenceAuditPort {
  append(event: EvidenceAuditEvent): void;
}
