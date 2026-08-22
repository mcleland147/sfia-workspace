import type { ProjectTrajectory } from "../../domain/types";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

type CurrentRow = {
  trajectory_id: string;
  version: number;
};

function cloneTrajectory(trajectory: ProjectTrajectory): ProjectTrajectory {
  return structuredClone(trajectory);
}

function trajectoryKey(trajectoryId: string, version: number): string {
  return `${trajectoryId}@${version}`;
}

function shouldUpdateCurrentPointer(trajectory: ProjectTrajectory): boolean {
  return trajectory.status === "validated" || trajectory.status === "active";
}

/**
 * Durable ProjectTrajectory repository on Product SQLite (M6).
 */
export class SqliteTrajectoryRepository implements TrajectoryRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(trajectoryId: string): Promise<ProjectTrajectory | null> {
    for (const row of this.store.db
      .prepare(`SELECT project_id FROM oa_project_trajectory_current`)
      .all() as Array<{ project_id: string }>) {
      const current = await this.findCurrentByProjectId(row.project_id);
      if (current?.trajectoryId === trajectoryId) {
        return current;
      }
    }
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_project_trajectories
         WHERE trajectory_id = ?
         ORDER BY version DESC LIMIT 1`,
      )
      .get(trajectoryId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return cloneTrajectory(JSON.parse(row.payload_json) as ProjectTrajectory);
  }

  async findByProjectAndVersion(
    projectId: string,
    version: number,
  ): Promise<ProjectTrajectory | null> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_project_trajectories
         WHERE project_id = ? AND version = ?`,
      )
      .get(projectId, version) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return cloneTrajectory(JSON.parse(row.payload_json) as ProjectTrajectory);
  }

  async findCurrentByProjectId(
    projectId: string,
  ): Promise<ProjectTrajectory | null> {
    const current = this.store.db
      .prepare(
        `SELECT trajectory_id, version FROM oa_project_trajectory_current
         WHERE project_id = ?`,
      )
      .get(projectId) as CurrentRow | undefined;
    if (!current) return null;
    return this.findByProjectAndVersion(projectId, current.version);
  }

  async exists(trajectoryId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_project_trajectories WHERE trajectory_id = ?`)
      .get(trajectoryId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(trajectory: ProjectTrajectory): Promise<void> {
    if (this.store.failNextSave === "trajectory") {
      this.store.failNextSave = null;
      throw new Error("forced_trajectory_save_failure");
    }
    const now = new Date().toISOString();
    const payload = JSON.stringify(cloneTrajectory(trajectory));
    this.store.db
      .prepare(
        `INSERT INTO oa_project_trajectories(
           trajectory_id, project_id, version, status, payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(trajectory_id, version) DO UPDATE SET
           project_id = excluded.project_id,
           status = excluded.status,
           payload_json = excluded.payload_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        trajectory.trajectoryId,
        trajectory.projectId,
        trajectory.version,
        trajectory.status,
        payload,
        now,
        now,
      );

    if (shouldUpdateCurrentPointer(trajectory)) {
      const occToken = trajectoryKey(trajectory.trajectoryId, trajectory.version);
      this.store.db
        .prepare(
          `INSERT INTO oa_project_trajectory_current(
             project_id, trajectory_id, version, occ_token
           ) VALUES (?, ?, ?, ?)
           ON CONFLICT(project_id) DO UPDATE SET
             trajectory_id = excluded.trajectory_id,
             version = excluded.version,
             occ_token = excluded.occ_token`,
        )
        .run(
          trajectory.projectId,
          trajectory.trajectoryId,
          trajectory.version,
          occToken,
        );
    }
  }

  async markSuperseded(
    trajectoryId: string,
    version: number,
  ): Promise<void> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_project_trajectories
         WHERE trajectory_id = ? AND version = ?`,
      )
      .get(trajectoryId, version) as { payload_json?: string } | undefined;
    if (!row?.payload_json) {
      throw new Error("trajectory_missing_for_supersede");
    }
    const existing = JSON.parse(row.payload_json) as ProjectTrajectory;
    const next = cloneTrajectory(existing);
    next.status = "superseded";
    await this.save(next);
  }
}
