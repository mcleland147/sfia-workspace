import type { ProjectTrajectory } from "../domain/types";

export interface TrajectoryRepositoryPort {
  findById(trajectoryId: string): Promise<ProjectTrajectory | null>;
  findByProjectAndVersion(
    projectId: string,
    version: number,
  ): Promise<ProjectTrajectory | null>;
  findCurrentByProjectId(
    projectId: string,
  ): Promise<ProjectTrajectory | null>;
  /**
   * Exact project-scoped existence: true iff any ProjectTrajectory row exists
   * for this projectId (any version/status). Not version-windowed.
   * Failures must propagate to the caller (UNKNOWN ≠ absence).
   */
  hasAnyByProjectId(projectId: string): Promise<boolean>;
  exists(trajectoryId: string): Promise<boolean>;
  save(trajectory: ProjectTrajectory): Promise<void>;
  markSuperseded(trajectoryId: string, version: number): Promise<void>;
}
