import type { CycleInstance } from "../domain/types";
import type { CycleRepositoryPort } from "../ports/cycleRepository";
import type { MemoryCycleStore } from "./memoryCycleStore";

export class MemoryCycleRepository implements CycleRepositoryPort {
  constructor(private readonly store: MemoryCycleStore) {}

  async findById(cycleInstanceId: string): Promise<CycleInstance | null> {
    const found = this.store.cycles.get(cycleInstanceId);
    return found ? structuredClone(found) : null;
  }

  async exists(cycleInstanceId: string): Promise<boolean> {
    return this.store.cycles.has(cycleInstanceId);
  }

  async save(cycle: CycleInstance): Promise<void> {
    if (this.store.failNextSave === "cycle") {
      this.store.failNextSave = null;
      throw new Error("forced_cycle_save_failure");
    }
    this.store.cycles.set(cycle.cycleInstanceId, structuredClone(cycle));
  }

  async listByProject(projectId: string): Promise<CycleInstance[]> {
    const out: CycleInstance[] = [];
    for (const cycle of this.store.cycles.values()) {
      if (cycle.projectId === projectId) {
        out.push(structuredClone(cycle));
      }
    }
    return out;
  }
}
