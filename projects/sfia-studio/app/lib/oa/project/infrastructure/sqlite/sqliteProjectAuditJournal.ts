import type {
  ProjectAuditEvent,
  ProjectAuditJournalPort,
} from "../../ports/projectAuditJournalPort";
import type { SqliteProductStore } from "./sqliteProductStore";

/** Durable append-only audit journal for OA Product SQLite (M1). */
export class SqliteProjectAuditJournal implements ProjectAuditJournalPort {
  constructor(private readonly store: SqliteProductStore) {}

  append(event: ProjectAuditEvent): void {
    this.store.db
      .prepare(
        `INSERT INTO oa_audit_events(
          event_type, occurred_at, project_id, correlation_id, payload_json
        ) VALUES (?, ?, ?, ?, ?)`,
      )
      .run(
        event.event,
        event.ts,
        "projectId" in event ? (event.projectId ?? null) : null,
        "correlationId" in event ? (event.correlationId ?? null) : null,
        JSON.stringify(event),
      );
  }

  /** Test helper — read all durable audit rows. */
  listAll(): ProjectAuditEvent[] {
    const rows = this.store.db
      .prepare(
        "SELECT payload_json FROM oa_audit_events ORDER BY row_id ASC",
      )
      .all() as Array<{ payload_json: string }>;
    return rows.map((r) => JSON.parse(r.payload_json) as ProjectAuditEvent);
  }
}
