/**
 * FinOps T1 — single authoritative capture writer (application boundary).
 * Audit failures never requalify ledger outcomes.
 */

import type {
  FinOpsCapturePort,
  FinOpsCaptureRequest,
} from "../ports/finopsCapturePort";
import type { FinOpsUsageLedgerPort } from "../ports/finopsUsageLedgerPort";
import { buildUsageEvent } from "./buildUsageEvent";
import type { FinOpsCaptureDiagnostic } from "./types";

export type FinOpsAuditEmitter = {
  readonly emit: (event: {
    readonly type:
      | "finops_capture_created"
      | "finops_capture_duplicate"
      | "finops_capture_failed";
    readonly detail: Readonly<Record<string, unknown>>;
  }) => void;
};

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
    // Audit is best-effort T1; durable observability is T6.
    // Never mutate ledger outcomes, never retry, never expose details.
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
          detail: { code: error.code, retryable: error.retryable },
        });
        return { status: "failed", error };
      }

      if (!built.ok) {
        safeEmit(deps.audit, {
          type: "finops_capture_failed",
          detail: {
            code: built.error.code,
            retryable: built.error.retryable,
          },
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
            detail: { eventId: result.eventId },
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
            detail: { eventId: result.eventId },
          });
          return diagnostic;
        }
        const diagnostic: FinOpsCaptureDiagnostic = {
          status: "failed",
          error: result.error,
        };
        safeEmit(deps.audit, {
          type: "finops_capture_failed",
          detail: {
            code: result.error.code,
            retryable: result.error.retryable,
          },
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
          detail: { code: error.code, retryable: error.retryable },
        });
        return { status: "failed", error };
      }
    },
  };
}
