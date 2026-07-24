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
  exists(trajectoryId: string): Promise<boolean>;
  save(trajectory: ProjectTrajectory): Promise<void>;
  markSuperseded(trajectoryId: string, version: number): Promise<void>;
}
