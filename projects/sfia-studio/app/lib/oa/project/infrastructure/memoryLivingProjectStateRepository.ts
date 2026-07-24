import type { LivingProjectState } from "../domain/types";
import type { LivingProjectStateRepositoryPort } from "../ports/livingProjectStateRepositoryPort";
import type { MemoryProjectStore } from "./memoryProjectStore";

function indexKey(projectId: string, version: number): string {
  return `${projectId}:${version}`;
}

export class MemoryLivingProjectStateRepository
  implements LivingProjectStateRepositoryPort
{
  constructor(private readonly store: MemoryProjectStore) {}

  async findById(lpsVersionId: string): Promise<LivingProjectState | null> {
    const found = this.store.lpsById.get(lpsVersionId);
    return found ? structuredClone(found) : null;
  }

  async findByProjectAndVersion(
    projectId: string,
    version: number,
  ): Promise<LivingProjectState | null> {
    const id = this.store.lpsIndex.get(indexKey(projectId, version));
    if (!id) return null;
    return this.findById(id);
  }

  async findCurrentByProjectId(
    projectId: string,
  ): Promise<LivingProjectState | null> {
    const currentId = this.store.currentByProject.get(projectId);
    if (!currentId) return null;
    return this.findById(currentId);
  }

  async save(lps: LivingProjectState): Promise<void> {
    if (this.store.failNextSave === "lps") {
      this.store.failNextSave = null;
      throw new Error("forced_lps_save_failure");
    }
    this.store.lpsById.set(lps.lpsVersionId, structuredClone(lps));
    this.store.lpsIndex.set(
      indexKey(lps.projectId, lps.version),
      lps.lpsVersionId,
    );
    if (lps.status === "active") {
      this.store.currentByProject.set(lps.projectId, lps.lpsVersionId);
    }
  }

  async markSuperseded(lpsVersionId: string): Promise<void> {
    const existing = this.store.lpsById.get(lpsVersionId);
    if (!existing) {
      throw new Error("lps_missing_for_supersede");
    }
    existing.status = "superseded";
  }
}
