import type { DatabaseSync } from "node:sqlite";
import { openD1Db, nowIso } from "./db";
import { D1Error } from "./errors";
import type {
  D1Assignment,
  D1AuditEvent,
  D1AuditEventType,
  D1Project,
  MethodMode,
  ProjectState,
} from "./types";

function mapProject(row: Record<string, unknown>): D1Project {
  return {
    projectId: String(row.project_id),
    workspaceId: String(row.workspace_id),
    name: String(row.name),
    objective: String(row.objective),
    initialContextSummary: row.initial_context_summary
      ? String(row.initial_context_summary)
      : null,
    methodMode: row.method_mode ? (String(row.method_mode) as MethodMode) : null,
    state: String(row.state) as ProjectState,
    ownerActorId: String(row.owner_actor_id),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
    version: Number(row.version),
  };
}

export class D1ProjectRepository {
  constructor(private readonly db: DatabaseSync = openD1Db()) {}

  listProjects(workspaceId: string): D1Project[] {
    const rows = this.db
      .prepare(
        `SELECT * FROM d1_projects
         WHERE workspace_id = ?
         ORDER BY updated_at DESC`,
      )
      .all(workspaceId) as Record<string, unknown>[];
    return rows.map(mapProject);
  }

  getProject(projectId: string): D1Project | null {
    const row = this.db
      .prepare(`SELECT * FROM d1_projects WHERE project_id = ?`)
      .get(projectId) as Record<string, unknown> | undefined;
    return row ? mapProject(row) : null;
  }

  getIdempotentResponse(key: string): string | null {
    const row = this.db
      .prepare(
        `SELECT response_json FROM d1_idempotency_keys WHERE idempotency_key = ?`,
      )
      .get(key) as { response_json?: string } | undefined;
    return row?.response_json ?? null;
  }

  listAuditEvents(projectId: string, limit = 20): D1AuditEvent[] {
    const rows = this.db
      .prepare(
        `SELECT * FROM d1_audit_events
         WHERE project_id = ?
         ORDER BY occurred_at DESC
         LIMIT ?`,
      )
      .all(projectId, limit) as Record<string, unknown>[];
    return rows.map((row) => ({
      eventId: String(row.event_id),
      eventType: String(row.event_type) as D1AuditEventType,
      occurredAt: String(row.occurred_at),
      actorId: String(row.actor_id),
      correlationId: String(row.correlation_id),
      projectId: String(row.project_id),
      payloadJson: String(row.payload_json),
    }));
  }

  /**
   * Atomic CreateProject: project + dual assignment (owner+decideur mono-op) + audits + idempotency.
   */
  createProjectAtomic(args: {
    project: D1Project;
    assignments: D1Assignment[];
    events: Array<{
      eventId: string;
      eventType: D1AuditEventType;
      actorId: string;
      correlationId: string;
      payload: Record<string, unknown>;
    }>;
    idempotencyKey: string;
    responseJson: string;
  }): { kind: "created" } | { kind: "idempotent"; responseJson: string } {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const existing = this.getIdempotentResponse(args.idempotencyKey);
      if (existing) {
        this.db.exec("ROLLBACK");
        return { kind: "idempotent", responseJson: existing };
      }

      this.db
        .prepare(
          `INSERT INTO d1_projects (
            project_id, workspace_id, name, objective, initial_context_summary,
            method_mode, state, owner_actor_id, created_at, updated_at, version
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .run(
          args.project.projectId,
          args.project.workspaceId,
          args.project.name,
          args.project.objective,
          args.project.initialContextSummary,
          args.project.methodMode,
          args.project.state,
          args.project.ownerActorId,
          args.project.createdAt,
          args.project.updatedAt,
          args.project.version,
        );

      const assignStmt = this.db.prepare(
        `INSERT INTO d1_assignments (principal_id, project_id, role, created_at)
         VALUES (?, ?, ?, ?)`,
      );
      for (const a of args.assignments) {
        assignStmt.run(a.principalId, a.projectId, a.role, a.createdAt);
      }

      const evtStmt = this.db.prepare(
        `INSERT INTO d1_audit_events (
          event_id, event_type, occurred_at, actor_id, correlation_id, project_id, payload_json
        ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      );
      for (const e of args.events) {
        evtStmt.run(
          e.eventId,
          e.eventType,
          nowIso(),
          e.actorId,
          e.correlationId,
          args.project.projectId,
          JSON.stringify(e.payload),
        );
      }

      this.db
        .prepare(
          `INSERT INTO d1_idempotency_keys (idempotency_key, command, response_json, created_at)
           VALUES (?, 'CreateProject', ?, ?)`,
        )
        .run(args.idempotencyKey, args.responseJson, nowIso());

      this.db.exec("COMMIT");
      return { kind: "created" };
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      if (error instanceof D1Error) throw error;
      throw new D1Error("PERSISTENCE", "Échec CreateProject.", error);
    }
  }

  selectMethodModeAtomic(args: {
    projectId: string;
    methodMode: MethodMode;
    expectedVersion: number;
    nextState: ProjectState;
    actorId: string;
    correlationId: string;
    eventIds: { mode: string; activated?: string };
  }): D1Project {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const current = this.getProject(args.projectId);
      if (!current) {
        throw new D1Error("NOT_FOUND", "Projet introuvable.");
      }
      if (current.version !== args.expectedVersion) {
        throw new D1Error("CONFLICT", "Version projet obsolète.");
      }

      const updatedAt = nowIso();
      const result = this.db
        .prepare(
          `UPDATE d1_projects
           SET method_mode = ?, state = ?, updated_at = ?, version = version + 1
           WHERE project_id = ? AND version = ?`,
        )
        .run(
          args.methodMode,
          args.nextState,
          updatedAt,
          args.projectId,
          args.expectedVersion,
        );
      if (Number(result.changes) !== 1) {
        throw new D1Error("CONFLICT", "Mise à jour concurrente détectée.");
      }

      this.db
        .prepare(
          `INSERT INTO d1_audit_events (
            event_id, event_type, occurred_at, actor_id, correlation_id, project_id, payload_json
          ) VALUES (?, 'PROJECT_MODE_SELECTED', ?, ?, ?, ?, ?)`,
        )
        .run(
          args.eventIds.mode,
          updatedAt,
          args.actorId,
          args.correlationId,
          args.projectId,
          JSON.stringify({ methodMode: args.methodMode }),
        );

      if (args.nextState === "ACTIVE" && current.state !== "ACTIVE") {
        if (!args.eventIds.activated) {
          throw new D1Error("VALIDATION", "eventIds.activated requis.");
        }
        this.db
          .prepare(
            `INSERT INTO d1_audit_events (
              event_id, event_type, occurred_at, actor_id, correlation_id, project_id, payload_json
            ) VALUES (?, 'PROJECT_ACTIVATED', ?, ?, ?, ?, ?)`,
          )
          .run(
            args.eventIds.activated,
            updatedAt,
            args.actorId,
            args.correlationId,
            args.projectId,
            JSON.stringify({ from: current.state, to: "ACTIVE" }),
          );
      }

      this.db.exec("COMMIT");
      const updated = this.getProject(args.projectId);
      if (!updated) {
        throw new D1Error("PERSISTENCE", "Projet perdu après update.");
      }
      return updated;
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      if (error instanceof D1Error) throw error;
      throw new D1Error("PERSISTENCE", "Échec SelectMethodMode.", error);
    }
  }
}
