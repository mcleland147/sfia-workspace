import type { Project } from "../domain/types";

export interface ProjectRepositoryPort {
  findById(projectId: string): Promise<Project | null>;
  exists(projectId: string): Promise<boolean>;
  save(project: Project): Promise<void>;
  /**
   * Idempotency map: key → projectId.
   * Returns projectId previously bound to the key, if any.
   */
  findIdempotency(idempotencyKey: string): Promise<string | null>;
  putIdempotency(idempotencyKey: string, projectId: string): Promise<void>;
}
