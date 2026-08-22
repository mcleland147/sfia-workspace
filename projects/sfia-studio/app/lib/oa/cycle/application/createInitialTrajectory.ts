import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { createCycleError } from "../domain/errors";
import {
  assertTrajectorySize,
  isOaIdentifier,
  validateTrajectorySteps,
} from "../domain/invariants";
import type {
  CreateInitialTrajectoryRequest,
  ProjectTrajectory,
  TrajectoryResult,
} from "../domain/types";
import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * CreateInitialTrajectory — v1, status candidate|active.
 * Links to project via T-A1 AppendLivingProjectStateVersion (expectedVersion).
 */
export class CreateInitialTrajectory {
  constructor(
    private readonly trajectories: TrajectoryRepositoryPort,
    private readonly projectServices: ProjectServices,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
    private readonly store?: CyclePersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: CreateInitialTrajectoryRequest,
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
        expectedVersion: request.expectedLpsVersion,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.trajectory.created",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        trajectoryId: request.trajectoryId,
        version: 1,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.createdBy?.actorId) {
        return fail("TRAJECTORY_INVALID", "created_by_required");
      }
      if (
        !isOaIdentifier(request.trajectoryId) ||
        !request.trajectoryId.startsWith("trj:")
      ) {
        return fail("TRAJECTORY_INVALID", "trajectory_id_invalid");
      }
      if (
        !isOaIdentifier(request.projectId) ||
        !request.projectId.startsWith("prj:")
      ) {
        return fail("TRAJECTORY_INVALID", "project_id_invalid");
      }

      // Clone FIRST then validate — closes TOCTOU on request.steps mutation after await.
      const steps = structuredClone(request.steps);
      const status = request.status ?? "candidate";

      const stepsViolation = validateTrajectorySteps(steps);
      if (stepsViolation) {
        return fail(stepsViolation.detailCode, stepsViolation.reason);
      }

      const draft: Pick<ProjectTrajectory, "steps" | "status" | "version"> = {
        steps,
        status,
        version: 1,
      };
      const sizeViolation = assertTrajectorySize(draft);
      if (sizeViolation) {
        return fail(sizeViolation.detailCode, sizeViolation.reason);
      }

      const projectResult = await this.projectServices.getProject.execute({
        projectId: request.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      if (await this.trajectories.exists(request.trajectoryId)) {
        return fail("TRAJECTORY_ALREADY_EXISTS", "trajectory_id_taken");
      }

      const existingCurrent =
        await this.trajectories.findCurrentByProjectId(request.projectId);
      if (existingCurrent) {
        return fail("TRAJECTORY_ALREADY_EXISTS", "project_already_has_trajectory");
      }

      const trajectory: ProjectTrajectory = {
        schemaVersion: "0.1.0-oa",
        trajectoryId: request.trajectoryId,
        projectId: request.projectId,
        version: 1,
        status,
        steps: structuredClone(steps),
      };

      let lpsVersion = 0;

      const persist = async () => {
        if (await this.trajectories.exists(request.trajectoryId)) {
          throw new Error("trajectory_id_taken");
        }
        await this.trajectories.save(trajectory);

        const current =
          await this.projectServices.getCurrentLivingProjectState.execute({
            projectId: request.projectId,
          });
        if (!current.ok) {
          throw new Error("missing_current_lps");
        }

        const appended =
          await this.projectServices.appendLivingProjectStateVersion.execute({
            projectId: request.projectId,
            expectedVersion: request.expectedLpsVersion,
            objective: current.livingProjectState.objective,
            createdBy: request.createdBy,
            correlationId,
            context: current.livingProjectState.context,
            scope: current.livingProjectState.scope,
            trajectoryId: request.trajectoryId,
            trajectoryVersion: 1,
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
        if (err instanceof Error && err.message === "trajectory_id_taken") {
          return fail("TRAJECTORY_ALREADY_EXISTS", "trajectory_id_taken");
        }
        if (err instanceof Error && err.message === "lps_version_conflict") {
          return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
            expectedVersion: request.expectedLpsVersion,
            currentVersion: (err as Error & { currentVersion?: number })
              .currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_create_failed");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.trajectory.created",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        trajectoryId: request.trajectoryId,
        version: 1,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        trajectory: structuredClone(trajectory),
        livingProjectStateVersion: lpsVersion,
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
