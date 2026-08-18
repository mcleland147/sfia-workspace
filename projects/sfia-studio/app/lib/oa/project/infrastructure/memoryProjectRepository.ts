import type { Project } from "../domain/types";
import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";
import type { MemoryProjectStore } from "./memoryProjectStore";

export class MemoryProjectRepository implements ProjectRepositoryPort {
  constructor(private readonly store: MemoryProjectStore) {}

  async findById(projectId: string): Promise<Project | null> {
    const found = this.store.projects.get(projectId);
    return found ? structuredClone(found) : null;
  }

  async listAll(): Promise<Project[]> {
    const projects = Array.from(this.store.projects.values()).map((project) =>
      structuredClone(project),
    );
    projects.sort((a, b) => {
      const aKey = a.updatedAt ?? a.createdAt;
      const bKey = b.updatedAt ?? b.createdAt;
      return bKey.localeCompare(aKey);
    });
    return projects;
  }

  async exists(projectId: string): Promise<boolean> {
    return this.store.projects.has(projectId);
  }

  async save(project: Project): Promise<void> {
    if (this.store.failNextSave === "project") {
      this.store.failNextSave = null;
      throw new Error("forced_project_save_failure");
    }
    this.store.projects.set(project.projectId, structuredClone(project));
    if (project.currentLpsVersionId) {
      this.store.currentByProject.set(
        project.projectId,
        project.currentLpsVersionId,
      );
    }
  }

  async findIdempotency(idempotencyKey: string): Promise<string | null> {
    return this.store.idempotency.get(idempotencyKey) ?? null;
  }

  async putIdempotency(
    idempotencyKey: string,
    projectId: string,
  ): Promise<void> {
    this.store.idempotency.set(idempotencyKey, projectId);
  }
}
