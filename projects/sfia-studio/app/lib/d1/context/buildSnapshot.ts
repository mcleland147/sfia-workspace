import { randomUUID } from "node:crypto";
import { D1ProjectRepository } from "../repository";
import { openD1Db } from "../db";
import { D1_DEFAULT_WORKSPACE_ID } from "../types";
import { D1Error } from "../errors";
import {
  CONTEXT_MATCH_LIMITS,
  CONTEXT_SNAPSHOT_SCHEMA_VERSION,
  type ExistingContextSnapshot,
  type SnapshotProjectCandidate,
} from "./types";

export interface BuildSnapshotOptions {
  workspaceId?: string;
  /** Force CONTEXT_UNAVAILABLE path for tests. */
  forceUnavailable?: boolean;
  repo?: D1ProjectRepository;
}

/**
 * Read-only bounded snapshot of existing D1 Projects.
 * Cycle/Action sources are explicitly UNAVAILABLE (not simulated).
 */
export function buildExistingContextSnapshot(
  options: BuildSnapshotOptions = {},
): ExistingContextSnapshot {
  const snapshotId = `snap-${randomUUID()}`;
  const generatedAt = new Date().toISOString();

  if (
    options.forceUnavailable ||
    process.env.D1_CONTEXT_FORCE_UNAVAILABLE === "1"
  ) {
    return {
      schemaVersion: CONTEXT_SNAPSHOT_SCHEMA_VERSION,
      snapshotId,
      generatedAt,
      projectSourceStatus: "UNAVAILABLE",
      cycleSourceStatus: "UNAVAILABLE",
      actionSourceStatus: "UNAVAILABLE",
      projects: [],
      cycles: [],
      actions: [],
      sourceCounts: { projects: 0, cycles: 0, actions: 0 },
      truncationApplied: false,
      sourceErrors: ["project_repository_unavailable"],
    };
  }

  try {
    const repo = options.repo ?? new D1ProjectRepository(openD1Db());
    const workspaceId = options.workspaceId ?? D1_DEFAULT_WORKSPACE_ID;
    const all = repo.listProjects(workspaceId);
    const max = CONTEXT_MATCH_LIMITS.maxProjectsEvaluated;
    const truncationApplied = all.length > max;
    const sliced = all.slice(0, max);

    const projects: SnapshotProjectCandidate[] = sliced.map((p) => ({
      projectId: p.projectId,
      name: p.name,
      objective: p.objective.slice(0, CONTEXT_MATCH_LIMITS.maxNormalizedTextLength),
      initialContextSummary: p.initialContextSummary
        ? p.initialContextSummary.slice(
            0,
            CONTEXT_MATCH_LIMITS.maxNormalizedTextLength,
          )
        : null,
      status: p.state,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    }));

    // Stable secondary sort by projectId after updated_at DESC from repo
    projects.sort((a, b) => {
      const t = b.updatedAt.localeCompare(a.updatedAt);
      if (t !== 0) return t;
      return a.projectId.localeCompare(b.projectId);
    });

    return {
      schemaVersion: CONTEXT_SNAPSHOT_SCHEMA_VERSION,
      snapshotId,
      generatedAt,
      projectSourceStatus: projects.length === 0 ? "EMPTY" : "AVAILABLE",
      cycleSourceStatus: "UNAVAILABLE",
      actionSourceStatus: "UNAVAILABLE",
      projects,
      cycles: [],
      actions: [],
      sourceCounts: {
        projects: projects.length,
        cycles: 0,
        actions: 0,
      },
      truncationApplied,
      sourceErrors: [],
    };
  } catch (error) {
    const msg =
      error instanceof D1Error
        ? error.code
        : error instanceof Error
          ? "repository_error"
          : "unknown_error";
    return {
      schemaVersion: CONTEXT_SNAPSHOT_SCHEMA_VERSION,
      snapshotId,
      generatedAt,
      projectSourceStatus: "ERROR",
      cycleSourceStatus: "UNAVAILABLE",
      actionSourceStatus: "UNAVAILABLE",
      projects: [],
      cycles: [],
      actions: [],
      sourceCounts: { projects: 0, cycles: 0, actions: 0 },
      truncationApplied: false,
      sourceErrors: [msg],
    };
  }
}
