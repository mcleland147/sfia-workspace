import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { createCycleError } from "../domain/errors";
import { isOaIdentifier, validateTrajectorySteps } from "../domain/invariants";
import type {
  ProjectTrajectory,
  PromoteDecidedTrajectoryRequest,
  TrajectoryResult,
} from "../domain/types";
import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { TrajectoryRepositoryPort } from "../ports/trajectoryRepository";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * W2 — PromoteDecidedTrajectory.
 *
 * Promotes an existing `candidate` ProjectTrajectory version to
 * `validated`/`active` so it becomes the effective current trajectory.
 * A `decisionRef` is structurally mandatory: this use case cannot promote a
 * structuring trajectory without a decision reference. Verifying that the
 * reference is an accepted durable HumanDecision belongs to the product
 * application path (D-W2-03).
 *
 * Only `candidate` versions are promotable — already-current, stale and
 * superseded versions are refused so no silent re-promotion can occur.
 */
export class PromoteDecidedTrajectory {
  constructor(
    private readonly trajectories: TrajectoryRepositoryPort,
    private readonly projectServices: ProjectServices,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
    private readonly store?: CyclePersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: PromoteDecidedTrajectoryRequest,
  ): Promise<TrajectoryResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");
    const status = request.status ?? "validated";

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
      this.audit.append({
        event: "oa.trajectory.decided",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        trajectoryId: request.trajectoryId,
        version: request.expectedVersion,
        decisionRef: request.decisionRef ?? "",
        status,
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
        typeof request.decisionRef !== "string" ||
        !isOaIdentifier(request.decisionRef)
      ) {
        return fail("TRAJECTORY_INVALID", "decision_ref_required");
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

      let sealedSteps: ProjectTrajectory["steps"] | undefined;
      if (request.steps !== undefined) {
        sealedSteps = structuredClone(request.steps);
        const stepsViolation = validateTrajectorySteps(sealedSteps);
        if (stepsViolation) {
          return fail(stepsViolation.detailCode, stepsViolation.reason);
        }
      }

      const projectResult = await this.projectServices.getProject.execute({
        projectId: request.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      let promoted: ProjectTrajectory | undefined;
      let lpsVersion = 0;

      const persist = async () => {
        const existing = await this.trajectories.findByProjectAndVersion(
          request.projectId,
          request.expectedVersion,
        );
        if (!existing) {
          throw new Error("trajectory_version_not_found");
        }
        if (existing.trajectoryId !== request.trajectoryId) {
          throw new Error("trajectory_id_mismatch");
        }
        if (existing.status !== "candidate") {
          throw new Error("not_candidate");
        }

        const next: ProjectTrajectory = {
          ...structuredClone(existing),
          status,
          decidedByDecisionRef: request.decisionRef,
          decidedOptionRef: request.decidedOptionRef,
          ...(sealedSteps !== undefined ? { steps: sealedSteps } : {}),
        };

        // Supersede the previously decided version before moving the pointer.
        const previousCurrent = await this.trajectories.findCurrentByProjectId(
          request.projectId,
        );
        if (
          previousCurrent &&
          previousCurrent.version !== next.version &&
          previousCurrent.status !== "superseded"
        ) {
          await this.trajectories.markSuperseded(
            previousCurrent.trajectoryId,
            previousCurrent.version,
          );
        }

        await this.trajectories.save(next);
        promoted = next;

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
            trajectoryVersion: next.version,
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
        const message = err instanceof Error ? err.message : "unknown";
        if (message === "trajectory_version_not_found") {
          return fail("TRAJECTORY_NOT_FOUND", "trajectory_version_not_found");
        }
        if (message === "trajectory_id_mismatch") {
          return fail("TRAJECTORY_NOT_FOUND", "trajectory_id_mismatch");
        }
        if (message === "not_candidate") {
          return fail("STATE_CONFLICT", "trajectory_version_not_candidate");
        }
        if (message === "lps_version_conflict") {
          return fail("LPS_VERSION_CONFLICT", "expected_version_mismatch", {
            expectedVersion: request.expectedLpsVersion,
            currentVersion: (err as Error & { currentVersion?: number })
              .currentVersion,
          });
        }
        return fail("PERSISTENCE_FAILURE", "atomic_promote_failed");
      }

      if (!promoted) {
        return fail("PERSISTENCE_FAILURE", "atomic_promote_incomplete");
      }

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.trajectory.decided",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        trajectoryId: request.trajectoryId,
        version: promoted.version,
        decisionRef: request.decisionRef,
        status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        trajectory: structuredClone(promoted),
        livingProjectStateVersion: lpsVersion,
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
