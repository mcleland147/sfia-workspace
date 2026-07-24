import type { LivingProjectState } from "../domain/types";

export interface LivingProjectStateRepositoryPort {
  findById(lpsVersionId: string): Promise<LivingProjectState | null>;
  findByProjectAndVersion(
    projectId: string,
    version: number,
  ): Promise<LivingProjectState | null>;
  findCurrentByProjectId(
    projectId: string,
  ): Promise<LivingProjectState | null>;
  save(lps: LivingProjectState): Promise<void>;
  /**
   * Mark a prior active LPS as superseded (status only).
   * Snapshots remain readable by id/version.
   */
  markSuperseded(lpsVersionId: string): Promise<void>;
}
