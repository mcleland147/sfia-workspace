import type { DecisionAuditEvent, DecisionAuditPort } from "../../ports/decisionAudit";
import type { ProductSqliteHandle } from "@/lib/oa/project";

/**
 * Append-only Decision audit into Product oa_audit_events (M3).
 * Same Product DB as Project/Cycle audit — no second journal authority.
 */
export class SqliteDecisionAuditJournal implements DecisionAuditPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  append(event: DecisionAuditEvent): void {
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
