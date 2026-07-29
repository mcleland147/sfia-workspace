import type { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import type {
  BoundedAtomicOutcome,
  BoundedAtomicPhase,
} from "@/lib/d1/boundedAtomicAudit";
import type {
  LocalProjectCreationAuditEvent,
  LocalProjectCreationAuditPort,
} from "./audit";

function phaseFor(
  event: LocalProjectCreationAuditEvent,
): BoundedAtomicPhase {
  switch (event.event) {
    case "LOCAL_PROJECT_CREATION_REQUESTED":
      return "prepare";
    case "DOCTRINE_RESOLVED":
      return "verify";
    case "PROJECT_CREATED":
      return "apply_project";
    case "LPS_INITIALIZED":
      return "commit";
    case "LOCAL_PROJECT_CREATION_FAILED":
      return "rollback";
  }
}

function outcomeFor(
  event: LocalProjectCreationAuditEvent,
): BoundedAtomicOutcome {
  if (event.result === "FAILED") return "FAILED";
  if (event.event === "LPS_INITIALIZED") return "COMMITTED";
  return "IN_PROGRESS";
}

/**
 * Optional adapter over the existing bounded D1 audit table.
 * Payload contains references/status only: never objective, context, PII, or secret.
 */
export class BoundedSqliteLocalProjectCreationAudit
  implements LocalProjectCreationAuditPort
{
  constructor(private readonly store: BoundedAtomicAuditStore) {}

  append(event: LocalProjectCreationAuditEvent): void {
    this.store.append({
      opId: event.correlationId,
      idempotencyKey: event.idempotencyKey,
      phase: phaseFor(event),
      outcome: outcomeFor(event),
      correlationId: event.correlationId,
      projectRef: event.projectId ?? null,
      cycleRef: null,
      payload: {
        event: event.event,
        doctrinePackageId: event.doctrinePackageId,
        doctrineStatus: event.doctrineStatus,
        lpsVersion: event.lpsVersion,
        errorCode: event.errorCode,
      },
    });
  }
}
