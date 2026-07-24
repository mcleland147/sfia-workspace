import type { CycleInstance } from "../domain/types";

export interface CycleRepositoryPort {
  findById(cycleInstanceId: string): Promise<CycleInstance | null>;
  exists(cycleInstanceId: string): Promise<boolean>;
  save(cycle: CycleInstance): Promise<void>;
  listByProject(projectId: string): Promise<CycleInstance[]>;
}
