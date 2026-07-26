/**
 * Append-only audit sink for T-A6-D1 Evidence.
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
  | "oa.evidence.concurrent_modification_rejected";

export type EvidenceAuditEvent = {
  event: EvidenceAuditEventName;
  ts: string;
  correlationId?: string;
  evidenceId?: string;
  executionAttemptId?: string;
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
