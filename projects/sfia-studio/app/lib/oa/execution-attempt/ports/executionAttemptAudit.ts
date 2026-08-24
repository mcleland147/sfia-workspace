/**
 * Append-only audit sink for T-A5 ExecutionAttempt.
 *
 * Events carry refs only: never secrets, tokens, full Confirmation records,
 * full authority evidence, or business payloads.
 */

export type AttemptAuditEventName =
  | "oa.execution_attempt.agent_proposed"
  | "oa.execution_attempt.agent_selected"
  | "oa.execution_attempt.accepted"
  | "oa.execution_attempt.started"
  | "oa.execution_attempt.launch_failed"
  | "oa.execution_attempt.result_pending"
  | "oa.execution_attempt.succeeded"
  | "oa.execution_attempt.failed"
  | "oa.execution_attempt.timed_out"
  | "oa.execution_attempt.cancellation_requested"
  | "oa.execution_attempt.cancelled"
  | "oa.execution_attempt.system_governed_stop"
  | "oa.execution_attempt.cancellation_failed"
  | "oa.execution_attempt.retry_authorized"
  | "oa.execution_attempt.authorization_denied"
  | "oa.execution_attempt.authorization_checked"
  | "oa.execution_attempt.compensated"
  | "oa.execution_attempt.stale_context_detected"
  | "oa.execution_attempt.read"
  | "oa.execution_contract.status_written";

export type ExecutionAttemptAuditEvent = {
  event: AttemptAuditEventName;
  ts: string;
  correlationId?: string;
  attemptId?: string;
  executionContractId?: string;
  executionContractVersion?: number;
  selectedAgentRef?: string;
  adapterId?: string;
  confirmationRef?: string;
  authorityEvidenceRef?: string;
  previousStatus?: string;
  newStatus?: string;
  contractStatus?: string;
  retryIndex?: number;
  expectedVersion?: number;
  stopReason?: string;
  result: "ok" | "error";
  detailCode?: string;
  durationMs: number;
};

export interface ExecutionAttemptAuditPort {
  append(event: ExecutionAttemptAuditEvent): void;
}
