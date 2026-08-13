import type { Project } from "../../domain/types";
import type { ProjectRepositoryPort } from "../../ports/projectRepositoryPort";
import type { SqliteProductStore } from "./sqliteProductStore";

export class SqliteProjectRepository implements ProjectRepositoryPort {
  constructor(private readonly store: SqliteProductStore) {}

  async findById(projectId: string): Promise<Project | null> {
    const row = this.store.db
      .prepare("SELECT payload_json FROM oa_projects WHERE project_id = ?")
      .get(projectId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as Project);
  }

  async exists(projectId: string): Promise<boolean> {
    const row = this.store.db
      .prepare("SELECT 1 AS ok FROM oa_projects WHERE project_id = ?")
      .get(projectId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(project: Project): Promise<void> {
    if (this.store.failNextSave === "project") {
      this.store.failNextSave = null;
      throw new Error("forced_project_save_failure");
    }
    const payload = JSON.stringify(structuredClone(project));
    this.store.db
      .prepare(
        `INSERT INTO oa_projects(
          project_id, status, current_lps_version_id, payload_json, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(project_id) DO UPDATE SET
          status = excluded.status,
          current_lps_version_id = excluded.current_lps_version_id,
          payload_json = excluded.payload_json,
          updated_at = excluded.updated_at`,
      )
      .run(
        project.projectId,
        project.status,
        project.currentLpsVersionId ?? null,
        payload,
        project.createdAt,
        project.updatedAt ?? null,
      );
  }

  async findIdempotency(idempotencyKey: string): Promise<string | null> {
    const row = this.store.db
      .prepare(
        "SELECT project_id FROM oa_idempotency WHERE idempotency_key = ?",
      )
      .get(idempotencyKey) as { project_id?: string } | undefined;
    return row?.project_id ?? null;
  }

  async putIdempotency(
    idempotencyKey: string,
    projectId: string,
  ): Promise<void> {
    this.store.db
      .prepare(
        `INSERT INTO oa_idempotency(idempotency_key, project_id, created_at)
         VALUES (?, ?, ?)
         ON CONFLICT(idempotency_key) DO UPDATE SET
           project_id = excluded.project_id`,
      )
      .run(idempotencyKey, projectId, new Date().toISOString());
  }
}
