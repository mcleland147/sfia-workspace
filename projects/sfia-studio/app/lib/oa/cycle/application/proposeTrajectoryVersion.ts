import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { createCycleError } from "../domain/errors";
import {
  assertTrajectorySize,
  validateProposeTrajectoryStatus,
  validateTrajectorySteps,
} from "../domain/invariants";
import type {
  ProjectTrajectory,
  ProposeTrajectoryVersionRequest,
  TrajectoryResult,
} from "../domain/types";
import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/** Thrown inside a transaction when optimistic expectedVersion mismatches. */
export class TrajectoryVersionConflictSignal extends Error {
  readonly currentVersion: number;

  constructor(currentVersion: number) {
    super("trajectory_version_conflict");
    this.name = "TrajectoryVersionConflictSignal";
    this.currentVersion = currentVersion;
  }
}

/**
 * D-W2-A3-01 — resolve the semantic lineage HEAD for a ProjectTrajectory.
 *
 * Prefer current when present, then probe forward with findByProjectAndVersion
 * so an undecided candidate ahead of current (CAS B) is the OCC base.
 * When no current exists, start from findById (latest for trajectoryId) and
 * probe forward the same way (CAS A).
 *
 * Uses existing repository queries only — no new SoT / port contract.
 */
export async function resolveTrajectoryLineageHead(
  trajectories: TrajectoryRepositoryPort,
  projectId: string,
  trajectoryId: string,
): Promise<ProjectTrajectory | null> {
  const current = await trajectories.findCurrentByProjectId(projectId);
  let head: ProjectTrajectory | null = null;

  if (current) {
    if (current.trajectoryId !== trajectoryId) {
      return null;
    }
    head = current;
  } else {
    const byId = await trajectories.findById(trajectoryId);
    if (!byId || byId.projectId !== projectId) {
      return null;
    }
    head = byId;
  }

  let probe = head.version + 1;
  for (;;) {
    const next = await trajectories.findByProjectAndVersion(projectId, probe);
    if (!next) break;
    if (next.trajectoryId !== trajectoryId) break;
    head = next;
    probe += 1;
  }
  return head;
}

/**
 * ProposeTrajectoryVersion — expectedVersion required against lineage HEAD;
 * supersede previous candidate (D-W2-A3-01) or previous current when installing
 * validated/active; cyclic deps → TRAJECTORY_INVALID; deep clone.
 * Logical rollback = propose new version restoring prior steps (never rewrite history).
 * Candidate status never updates oa_project_trajectory_current.
 */
export class ProposeTrajectoryVersion {
  constructor(
    private readonly trajectories: TrajectoryRepositoryPort,
    private readonly projectServices: ProjectServices,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
    private readonly store?: CyclePersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: ProposeTrajectoryVersionRequest,
  ): Promise<TrajectoryResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): TrajectoryResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        trajectoryId: request.trajectoryId,
        expectedVersion: request.expectedVersion,
        internalCauseRef,
        ...extra,
      });
      if (detailCode === "TRAJECTORY_VERSION_CONFLICT") {
        this.audit.append({
          event: "oa.trajectory.version_conflict",
          ts: timestamp,
          correlationId,
          projectId: request.projectId,
          trajectoryId: request.trajectoryId,
          expectedVersion: request.expectedVersion,
          currentVersion: extra?.currentVersion,
          result: "conflict",
          detailCode: "TRAJECTORY_VERSION_CONFLICT",
          durationMs,
        });
      } else {
        this.audit.append({
          event: "oa.trajectory.version_proposed",
          ts: timestamp,
          correlationId,
          projectId: request.projectId,
          trajectoryId: request.trajectoryId,
          version: request.expectedVersion + 1,
          result: "error",
          detailCode,
          durationMs,
        });
      }
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.createdBy?.actorId) {
        return fail("TRAJECTORY_INVALID", "created_by_required");
      }
      if (
        !Number.isInteger(request.expectedVersion) ||
        request.expectedVersion < 1
      ) {
        return fail("TRAJECTORY_INVALID", "expected_version_invalid");
      }
      if (
        !Number.isInteger(request.expectedLpsVersion) ||
        request.expectedLpsVersion < 1
      ) {
        return fail("TRAJECTORY_INVALID", "expected_lps_version_invalid");
      }

      // Clone FIRST then validate — closes TOCTOU on request.steps mutation after await.
      const steps = structuredClone(request.steps);
      const status = request.status ?? "candidate";

      const statusViolation = validateProposeTrajectoryStatus(status);
      if (statusViolation) {
        return fail(statusViolation.detailCode, statusViolation.reason);
      }

      const stepsViolation = validateTrajectorySteps(steps);
      if (stepsViolation) {
        return fail(stepsViolation.detailCode, stepsViolation.reason);
      }

      const sizeViolation = assertTrajectorySize({
        steps,
        status,
        version: request.expectedVersion + 1,
      });
      if (sizeViolation) {
        return fail(sizeViolation.detailCode, sizeViolation.reason);
      }

      const projectResult = await this.projectServices.getProject.execute({
        projectId: request.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      let nextTrajectory: ProjectTrajectory | undefined;
      let nextVersion = 0;
      let previousVersion = 0;
      let lpsVersion = 0;

      const persist = async () => {
        const head = await resolveTrajectoryLineageHead(
          this.trajectories,
          request.projectId,
          request.trajectoryId,
        );
        if (!head) {
          throw new Error("missing_lineage_head");
        }
        if (head.trajectoryId !== request.trajectoryId) {
          throw new Error("trajectory_id_mismatch");
        }
        if (head.projectId !== request.projectId) {
          throw new Error("project_id_mismatch");
        }
        if (request.expectedVersion !== head.version) {
          throw new TrajectoryVersionConflictSignal(head.version);
        }

        // Refuse silent rewrite: next version must not already exist.
        const colliding = await this.trajectories.findByProjectAndVersion(
          request.projectId,
          head.version + 1,
        );
        if (colliding) {
          throw new TrajectoryVersionConflictSignal(colliding.version);
        }

        nextVersion = head.version + 1;
        previousVersion = head.version;

        const trajectory: ProjectTrajectory = {
          schemaVersion: "0.1.0-oa",
          trajectoryId: request.trajectoryId,
          projectId: request.projectId,
          version: nextVersion,
          status,
          steps: structuredClone(steps),
          supersedesTrajectoryVersion: head.version,
        };

        const promotesEffectiveCurrent =
          status === "validated" || status === "active";
        // D-W2-A3-01: candidate→candidate supersedes prior candidate only.
        // Proposing a new candidate from a decided current leaves current intact.
        if (promotesEffectiveCurrent || head.status === "candidate") {
          await this.trajectories.markSuperseded(
            head.trajectoryId,
            head.version,
          );
        }
        await this.trajectories.save(trajectory);
        nextTrajectory = trajectory;

        const currentLps =
          await this.projectServices.getCurrentLivingProjectState.execute({
            projectId: request.projectId,
          });
        if (!currentLps.ok) {
          throw new Error("missing_current_lps");
        }

        const appended =
          await this.projectServices.appendLivingProjectStateVersion.execute({
            projectId: request.projectId,
            expectedVersion: request.expectedLpsVersion,
            objective: currentLps.livingProjectState.objective,
            createdBy: request.createdBy,
            correlationId,
            context: currentLps.livingProjectState.context,
            scope: currentLps.livingProjectState.scope,
            trajectoryId: request.trajectoryId,
            trajectoryVersion: nextVersion,
          });

        if (!appended.ok) {
          if (appended.error.detailCode === "LPS_VERSION_CONFLICT") {
            const err = new Error("lps_version_conflict") as Error & {
              currentVersion?: number;
            };
            err.currentVersion = appended.error.currentVersion;
            throw err;
          }
          throw new Error("lps_append_failed");
        }
        lpsVersion = appended.livingProjectState.version;
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err instanceof TrajectoryVersionConflictSignal) {
          return fail("TRAJECTORY_VERSION_CONFLICT", "expected_version_mismatch", {
            expectedVersion: request.expectedVersion,
            currentVersion: err.currentVersion,
          });
        }
        if (err instanceof Error && err.message === "lps_version_conflict") {
          return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
            expectedVersion: request.expectedLpsVersion,
            currentVersion: (err as Error & { currentVersion?: number })
              .currentVersion,
          });
        }
        if (
          err instanceof Error &&
          (err.message === "missing_lineage_head" ||
            err.message === "missing_current_trajectory")
        ) {
          return fail("TRAJECTORY_NOT_FOUND", "missing_lineage_head");
        }
        if (err instanceof Error && err.message === "trajectory_id_mismatch") {
          return fail("TRAJECTORY_INVALID", "trajectory_id_mismatch");
        }
        if (err instanceof Error && err.message === "project_id_mismatch") {
          return fail("TRAJECTORY_INVALID", "project_id_mismatch");
        }
        return fail("PERSISTENCE_FAILURE", "atomic_propose_failed");
      }

      if (!nextTrajectory) {
        return fail("PERSISTENCE_FAILURE", "atomic_propose_incomplete");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.trajectory.version_proposed",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        trajectoryId: request.trajectoryId,
        version: nextVersion,
        previousVersion,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        trajectory: structuredClone(nextTrajectory),
        livingProjectStateVersion: lpsVersion,
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
