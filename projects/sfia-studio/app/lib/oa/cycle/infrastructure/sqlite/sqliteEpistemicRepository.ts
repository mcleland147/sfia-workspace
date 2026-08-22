import type { EpistemicItem } from "../../domain/types";
import type { EpistemicRepositoryPort } from "../../ports/epistemicRepository";
import type { ProductSqliteHandle } from "@/lib/oa/project";

function cloneItem(item: EpistemicItem): EpistemicItem {
  return structuredClone(item);
}

/**
 * Selective epistemic persistence on Product SQLite (M6).
 * Only materialized items are saved via saveForProject.
 */
export class SqliteEpistemicRepository implements EpistemicRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async listByProject(projectId: string): Promise<EpistemicItem[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_epistemic_items
         WHERE project_id = ? AND materialized = 1
         ORDER BY created_at ASC, epistemic_item_id ASC`,
      )
      .all(projectId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneItem(JSON.parse(row.payload_json) as EpistemicItem),
    );
  }

  async findById(epistemicItemId: string): Promise<EpistemicItem | null> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_epistemic_items WHERE epistemic_item_id = ?`,
      )
      .get(epistemicItemId) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return cloneItem(JSON.parse(row.payload_json) as EpistemicItem);
  }

  async save(item: EpistemicItem): Promise<void> {
    void item;
    // Non-materialized drafts remain process-local by design.
  }

  async saveForProject(projectId: string, item: EpistemicItem): Promise<void> {
    if (this.store.failNextSave === "epistemic") {
      this.store.failNextSave = null;
      throw new Error("forced_epistemic_save_failure");
    }
    const now = new Date().toISOString();
    const payload = JSON.stringify(cloneItem(item));
    this.store.db
      .prepare(
        `INSERT INTO oa_epistemic_items(
           epistemic_item_id, project_id, type, status, materialized, payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, 1, ?, ?, ?)
         ON CONFLICT(epistemic_item_id) DO UPDATE SET
           project_id = excluded.project_id,
           type = excluded.type,
           status = excluded.status,
           materialized = excluded.materialized,
           payload_json = excluded.payload_json,
           updated_at = excluded.updated_at`,
      )
      .run(
        item.epistemicItemId,
        projectId,
        item.type,
        item.status,
        payload,
        now,
        now,
      );
  }

  async markSuperseded(epistemicItemId: string): Promise<void> {
    const existing = await this.findById(epistemicItemId);
    if (!existing) {
      throw new Error("epistemic_missing_for_supersede");
    }
    const next = cloneItem(existing);
    next.status = "superseded";
    await this.saveForProject(
      next.relatedObjects?.find((id) => id.startsWith("prj:")) ??
        (this.store.db
          .prepare(
            `SELECT project_id FROM oa_epistemic_items WHERE epistemic_item_id = ?`,
          )
          .get(epistemicItemId) as { project_id?: string } | undefined
        )?.project_id ??
        "",
      next,
    );
  }
}
