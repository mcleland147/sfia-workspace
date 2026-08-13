import type { LivingProjectState } from "../../domain/types";
import type { LivingProjectStateRepositoryPort } from "../../ports/livingProjectStateRepositoryPort";
import type { SqliteProductStore } from "./sqliteProductStore";

export class SqliteLivingProjectStateRepository
  implements LivingProjectStateRepositoryPort
{
  constructor(private readonly store: SqliteProductStore) {}

  async findById(lpsVersionId: string): Promise<LivingProjectState | null> {
    const row = this.store.db
      .prepare("SELECT payload_json FROM oa_lps WHERE lps_version_id = ?")
      .get(lpsVersionId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as LivingProjectState);
  }

  async findByProjectAndVersion(
    projectId: string,
    version: number,
  ): Promise<LivingProjectState | null> {
    const row = this.store.db
      .prepare(
        "SELECT payload_json FROM oa_lps WHERE project_id = ? AND version = ?",
      )
      .get(projectId, version) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as LivingProjectState);
  }

  async findCurrentByProjectId(
    projectId: string,
  ): Promise<LivingProjectState | null> {
    const row = this.store.db
      .prepare(
        `SELECT l.payload_json AS payload_json
         FROM oa_lps_current c
         JOIN oa_lps l ON l.lps_version_id = c.lps_version_id
         WHERE c.project_id = ?`,
      )
      .get(projectId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return structuredClone(JSON.parse(row.payload_json) as LivingProjectState);
  }

  async save(lps: LivingProjectState): Promise<void> {
    if (this.store.failNextSave === "lps") {
      this.store.failNextSave = null;
      throw new Error("forced_lps_save_failure");
    }
    const payload = JSON.stringify(structuredClone(lps));
    this.store.db
      .prepare(
        `INSERT INTO oa_lps(
          lps_version_id, project_id, version, status, payload_json, created_at
        ) VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(lps_version_id) DO UPDATE SET
          project_id = excluded.project_id,
          version = excluded.version,
          status = excluded.status,
          payload_json = excluded.payload_json,
          created_at = excluded.created_at`,
      )
      .run(
        lps.lpsVersionId,
        lps.projectId,
        lps.version,
        lps.status,
        payload,
        lps.createdAt,
      );

    if (lps.status === "active") {
      this.store.db
        .prepare(
          `INSERT INTO oa_lps_current(project_id, lps_version_id)
           VALUES (?, ?)
           ON CONFLICT(project_id) DO UPDATE SET
             lps_version_id = excluded.lps_version_id`,
        )
        .run(lps.projectId, lps.lpsVersionId);
    }
  }

  async markSuperseded(lpsVersionId: string): Promise<void> {
    const existing = await this.findById(lpsVersionId);
    if (!existing) {
      throw new Error("lps_missing_for_supersede");
    }
    const next = structuredClone(existing);
    next.status = "superseded";
    const payload = JSON.stringify(next);
    this.store.db
      .prepare(
        `UPDATE oa_lps
         SET status = ?, payload_json = ?
         WHERE lps_version_id = ?`,
      )
      .run("superseded", payload, lpsVersionId);
  }
}
