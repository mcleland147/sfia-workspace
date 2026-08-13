import type {
  ExecutionAuditEvent,
  ExecutionAuditPort,
} from "../../ports/executionAudit";
import type { ProductSqliteHandle } from "@/lib/oa/project";

/**
 * Append-only ExecutionContract audit into Product oa_audit_events (M3).
 */
export class SqliteExecutionAuditJournal implements ExecutionAuditPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  append(event: ExecutionAuditEvent): void {
    this.store.db
      .prepare(
        `INSERT INTO oa_audit_events(event_type, occurred_at, project_id, correlation_id, payload_json)
         VALUES (?, ?, ?, ?, ?)`,
      )
      .run(
        event.event,
        event.ts,
        "projectId" in event ? (event.projectId ?? null) : null,
        "correlationId" in event ? (event.correlationId ?? null) : null,
        JSON.stringify(event),
      );
  }
}
