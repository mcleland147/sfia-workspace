import type { EpistemicItem } from "../domain/types";

export interface EpistemicRepositoryPort {
  listByProject(projectId: string): Promise<EpistemicItem[]>;
  findById(epistemicItemId: string): Promise<EpistemicItem | null>;
  save(item: EpistemicItem): Promise<void>;
  markSuperseded(epistemicItemId: string): Promise<void>;
}
