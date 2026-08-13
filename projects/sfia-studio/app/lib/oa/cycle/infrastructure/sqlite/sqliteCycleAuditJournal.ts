import type { CycleAuditEvent, CycleAuditPort } from "../../ports/cycleAudit";
import type { ProductSqliteHandle } from "@/lib/oa/project";

/**
 * Append-only Cycle audit into Product oa_audit_events (M2).
 * Same Product DB as Project audit — no second journal authority.
 */
export class SqliteCycleAuditJournal implements CycleAuditPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  append(event: CycleAuditEvent): void {
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
