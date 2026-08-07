/**
 * FinOps T1 — single authoritative capture writer (application boundary).
 * Audit failures never requalify ledger outcomes.
 * T6-foundation may attach a durable emitter behind FinOpsAuditEmitter.
 */

import type {
  FinOpsCapturePort,
  FinOpsCaptureRequest,
} from "../ports/finopsCapturePort";
import type { FinOpsUsageLedgerPort } from "../ports/finopsUsageLedgerPort";
import { buildUsageEvent } from "./buildUsageEvent";
import type { FinOpsAuditEmitter } from "./finopsAuditTypes";
import type { FinOpsCaptureDiagnostic } from "./types";

export type { FinOpsAuditEmitter } from "./finopsAuditTypes";

function correlationDetail(
  request: FinOpsCaptureRequest,
  extra: Readonly<Record<string, unknown>>,
): Readonly<Record<string, unknown>> {
  return {
    projectId: request.projectId,
    executionRunId: request.executionRunId,
    correlationId: request.correlationId,
    provider: request.provider,
    ...extra,
  };
}

function safeEmit(
  audit: FinOpsAuditEmitter | undefined,
  event: {
    readonly type:
      | "finops_capture_created"
      | "finops_capture_duplicate"
      | "finops_capture_failed";
    readonly detail: Readonly<Record<string, unknown>>;
  },
): void {
  if (!audit) return;
  try {
    audit.emit(event);
  } catch {
    // Audit is best-effort; durable T6 failures must not mutate ledger outcomes.
  }
}

export function createFinOpsCaptureService(deps: {
  readonly ledger: FinOpsUsageLedgerPort;
  readonly audit?: FinOpsAuditEmitter;
}): FinOpsCapturePort {
  return {
    async captureUsage(
      request: FinOpsCaptureRequest,
    ): Promise<FinOpsCaptureDiagnostic> {
      let built;
      try {
        built = buildUsageEvent(request);
      } catch {
        const error = {
          code: "FINOPS_VALIDATION_FAILED" as const,
          message: "FinOps capture rejected invalid event structure",
          retryable: false,
          technicalDetailsRedacted: true as const,
        };
        safeEmit(deps.audit, {
          type: "finops_capture_failed",
          detail: correlationDetail(request, {
            code: error.code,
            retryable: error.retryable,
          }),
        });
        return { status: "failed", error };
      }

      if (!built.ok) {
        safeEmit(deps.audit, {
          type: "finops_capture_failed",
          detail: correlationDetail(request, {
            code: built.error.code,
            retryable: built.error.retryable,
          }),
        });
        return { status: "failed", error: built.error };
      }

      try {
        const result = await deps.ledger.insertUsageEvent(
          built.event,
          built.fingerprint,
        );
        if (result.outcome === "created") {
          const diagnostic: FinOpsCaptureDiagnostic = {
            status: "created",
            eventId: result.eventId,
            dedupKey: built.event.dedupKey,
          };
          safeEmit(deps.audit, {
            type: "finops_capture_created",
            detail: correlationDetail(request, {
              eventId: result.eventId,
              dedupKey: built.event.dedupKey,
            }),
          });
          return diagnostic;
        }
        if (result.outcome === "duplicate") {
          const diagnostic: FinOpsCaptureDiagnostic = {
            status: "duplicate",
            eventId: result.eventId,
            dedupKey: built.event.dedupKey,
          };
          safeEmit(deps.audit, {
            type: "finops_capture_duplicate",
            detail: correlationDetail(request, {
              eventId: result.eventId,
              dedupKey: built.event.dedupKey,
            }),
          });
          return diagnostic;
        }
        const diagnostic: FinOpsCaptureDiagnostic = {
          status: "failed",
          error: result.error,
        };
        safeEmit(deps.audit, {
          type: "finops_capture_failed",
          detail: correlationDetail(request, {
            code: result.error.code,
            retryable: result.error.retryable,
          }),
        });
        return diagnostic;
      } catch {
        const error = {
          code: "FINOPS_CAPTURE_FAILED" as const,
          message: "FinOps capture failed",
          retryable: true,
          technicalDetailsRedacted: true as const,
        };
        safeEmit(deps.audit, {
          type: "finops_capture_failed",
          detail: correlationDetail(request, {
            code: error.code,
            retryable: error.retryable,
          }),
        });
        return { status: "failed", error };
      }
    },
  };
}
