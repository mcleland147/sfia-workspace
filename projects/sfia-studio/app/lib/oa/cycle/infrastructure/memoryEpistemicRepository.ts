import type { EpistemicItem } from "../domain/types";
import type { EpistemicRepositoryPort } from "../ports/epistemicRepository";
import type { MemoryCycleStore } from "./memoryCycleStore";

export class MemoryEpistemicRepository implements EpistemicRepositoryPort {
  constructor(private readonly store: MemoryCycleStore) {}

  async listByProject(projectId: string): Promise<EpistemicItem[]> {
    const ids = this.store.epistemicByProject.get(projectId) ?? [];
    const out: EpistemicItem[] = [];
    for (const id of ids) {
      const item = this.store.epistemicById.get(id);
      if (item) out.push(structuredClone(item));
    }
    return out;
  }

  async findById(epistemicItemId: string): Promise<EpistemicItem | null> {
    const found = this.store.epistemicById.get(epistemicItemId);
    return found ? structuredClone(found) : null;
  }

  async save(item: EpistemicItem): Promise<void> {
    if (this.store.failNextSave === "epistemic") {
      this.store.failNextSave = null;
      throw new Error("forced_epistemic_save_failure");
    }
    this.store.epistemicById.set(item.epistemicItemId, structuredClone(item));
  }

  async saveForProject(
    projectId: string,
    item: EpistemicItem,
  ): Promise<void> {
    if (this.store.failNextSave === "epistemic") {
      this.store.failNextSave = null;
      throw new Error("forced_epistemic_save_failure");
    }
    this.store.epistemicById.set(item.epistemicItemId, structuredClone(item));
    const ids = this.store.epistemicByProject.get(projectId) ?? [];
    if (!ids.includes(item.epistemicItemId)) {
      this.store.epistemicByProject.set(projectId, [
        ...ids,
        item.epistemicItemId,
      ]);
    }
  }

  async markSuperseded(epistemicItemId: string): Promise<void> {
    const existing = this.store.epistemicById.get(epistemicItemId);
    if (!existing) {
      throw new Error("epistemic_missing_for_supersede");
    }
    const next = structuredClone(existing);
    next.status = "superseded";
    this.store.epistemicById.set(epistemicItemId, next);
  }
}
