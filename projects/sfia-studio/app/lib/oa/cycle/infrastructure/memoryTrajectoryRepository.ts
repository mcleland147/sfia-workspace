import type { ProjectTrajectory } from "../domain/types";
import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";
import {
  trajectoryKey,
  type MemoryCycleStore,
} from "./memoryCycleStore";

export class MemoryTrajectoryRepository implements TrajectoryRepositoryPort {
  constructor(private readonly store: MemoryCycleStore) {}

  async findById(trajectoryId: string): Promise<ProjectTrajectory | null> {
    // Prefer current version for this trajectory id if present among projects.
    for (const key of this.store.currentTrajectoryByProject.values()) {
      const current = this.store.trajectoriesByKey.get(key);
      if (current && current.trajectoryId === trajectoryId) {
        return structuredClone(current);
      }
    }
    // Fallback: highest version for this trajectoryId.
    let best: ProjectTrajectory | null = null;
    for (const traj of this.store.trajectoriesByKey.values()) {
      if (traj.trajectoryId !== trajectoryId) continue;
      if (!best || traj.version > best.version) best = traj;
    }
    return best ? structuredClone(best) : null;
  }

  async findByProjectAndVersion(
    projectId: string,
    version: number,
  ): Promise<ProjectTrajectory | null> {
    for (const traj of this.store.trajectoriesByKey.values()) {
      if (traj.projectId === projectId && traj.version === version) {
        return structuredClone(traj);
      }
    }
    return null;
  }

  async findCurrentByProjectId(
    projectId: string,
  ): Promise<ProjectTrajectory | null> {
    const key = this.store.currentTrajectoryByProject.get(projectId);
    if (!key) return null;
    const found = this.store.trajectoriesByKey.get(key);
    return found ? structuredClone(found) : null;
  }

  async exists(trajectoryId: string): Promise<boolean> {
    for (const traj of this.store.trajectoriesByKey.values()) {
      if (traj.trajectoryId === trajectoryId) return true;
    }
    return false;
  }

  async save(trajectory: ProjectTrajectory): Promise<void> {
    if (this.store.failNextSave === "trajectory") {
      this.store.failNextSave = null;
      throw new Error("forced_trajectory_save_failure");
    }
    const key = trajectoryKey(trajectory.trajectoryId, trajectory.version);
    this.store.trajectoriesByKey.set(key, structuredClone(trajectory));
    if (
      trajectory.status === "candidate" ||
      trajectory.status === "validated" ||
      trajectory.status === "active"
    ) {
      this.store.currentTrajectoryByProject.set(trajectory.projectId, key);
    }
  }

  async markSuperseded(
    trajectoryId: string,
    version: number,
  ): Promise<void> {
    const key = trajectoryKey(trajectoryId, version);
    const existing = this.store.trajectoriesByKey.get(key);
    if (!existing) {
      throw new Error("trajectory_missing_for_supersede");
    }
    const next = structuredClone(existing);
    next.status = "superseded";
    this.store.trajectoriesByKey.set(key, next);
  }
}
