/**
 * FinOps T6-foundation — structured audit event types (T1 capture outcomes only).
 * T2/T3/T4/T5 event types are out of scope for this Delivery.
 */

export const FINOPS_T6_FOUNDATION_EVENT_TYPES = [
  "finops_capture_created",
  "finops_capture_duplicate",
  "finops_capture_failed",
] as const;

export type FinOpsT6FoundationEventType =
  (typeof FINOPS_T6_FOUNDATION_EVENT_TYPES)[number];

export type FinOpsAuditRecord = {
  readonly auditEventId: string;
  readonly eventType: FinOpsT6FoundationEventType;
  readonly projectId: string | null;
  readonly executionRunId: string | null;
  readonly correlationId: string | null;
  readonly occurredAt: string;
  /** Already redacted / whitelisted payload — never store raw secrets. */
  readonly payload: Readonly<Record<string, unknown>>;
};

export function isFinOpsT6FoundationEventType(
  value: string,
): value is FinOpsT6FoundationEventType {
  return (FINOPS_T6_FOUNDATION_EVENT_TYPES as readonly string[]).includes(value);
}

/**
 * T1 capture audit boundary (sync, best-effort).
 * Durable T6 journals adapt behind this interface.
 */
export type FinOpsAuditEmitter = {
  readonly emit: (event: {
    readonly type: FinOpsT6FoundationEventType;
    readonly detail: Readonly<Record<string, unknown>>;
  }) => void;
};
