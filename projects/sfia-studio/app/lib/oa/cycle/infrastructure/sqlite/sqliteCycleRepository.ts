import type { CycleInstance } from "../../domain/types";
import type { CycleRepositoryPort } from "../../ports/cycleRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

type CycleRow = {
  cycle_instance_id: string;
  project_id: string;
  cycle_type_id: string;
  profile: string;
  status: string;
  created_at: string;
  acknowledged_at: string | null;
  closed_at: string | null;
  payload_json: string;
};

function cloneCycle(cycle: CycleInstance): CycleInstance {
  return structuredClone(cycle);
}

/**
 * Durable CycleInstance repository on Product SQLite (M2).
 * Depends on ProductSqliteHandle — not SqliteProductStore class.
 */
export class SqliteCycleRepository implements CycleRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(cycleInstanceId: string): Promise<CycleInstance | null> {
    const row = this.store.db
      .prepare(
        `SELECT cycle_instance_id, project_id, cycle_type_id, profile, status,
                created_at, acknowledged_at, closed_at, payload_json
         FROM oa_cycle_instances WHERE cycle_instance_id = ?`,
      )
      .get(cycleInstanceId) as CycleRow | undefined;
    if (!row) return null;
    return cloneCycle(JSON.parse(row.payload_json) as CycleInstance);
  }

  async exists(cycleInstanceId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(
        `SELECT 1 AS ok FROM oa_cycle_instances WHERE cycle_instance_id = ?`,
      )
      .get(cycleInstanceId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async save(cycle: CycleInstance): Promise<void> {
    if (this.store.failNextSave === "cycle") {
      this.store.failNextSave = null;
      throw new Error("forced_cycle_save_failure");
    }
    const payload = JSON.stringify(cloneCycle(cycle));
    this.store.db
      .prepare(
        `INSERT INTO oa_cycle_instances(
           cycle_instance_id, project_id, cycle_type_id, profile, status,
           created_at, acknowledged_at, closed_at, payload_json
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(cycle_instance_id) DO UPDATE SET
           project_id = excluded.project_id,
           cycle_type_id = excluded.cycle_type_id,
           profile = excluded.profile,
           status = excluded.status,
           created_at = excluded.created_at,
           acknowledged_at = excluded.acknowledged_at,
           closed_at = excluded.closed_at,
           payload_json = excluded.payload_json`,
      )
      .run(
        cycle.cycleInstanceId,
        cycle.projectId,
        cycle.cycleTypeId,
        cycle.profile,
        cycle.status,
        cycle.createdAt,
        cycle.acknowledgedAt ?? null,
        cycle.closedAt ?? null,
        payload,
      );
  }

  async listByProject(projectId: string): Promise<CycleInstance[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_cycle_instances
         WHERE project_id = ?
         ORDER BY created_at ASC, cycle_instance_id ASC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneCycle(JSON.parse(row.payload_json) as CycleInstance),
    );
  }
}
