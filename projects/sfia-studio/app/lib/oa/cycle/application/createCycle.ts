import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { createCycleError } from "../domain/errors";
import {
  validateCriticalJustification,
  validateCycleIds,
} from "../domain/invariants";
import { qualifyCycle } from "../domain/qualification";
import type {
  CreateCycleRequest,
  CreateCycleResult,
  CycleInstance,
} from "../domain/types";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "../ports/cycleRepository";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * CreateCycle — stores recommended/accepted profile.
 * Critical → status=`proposed` (no auto-acknowledge; no invented Morris decision).
 * Light/Standard → status=`acknowledged` (no Critical ack gate).
 * Absent CKC never blocks creation.
 */
export class CreateCycle {
  constructor(
    private readonly cycles: CycleRepositoryPort,
    private readonly projectServices: ProjectServices,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
    private readonly store?: CyclePersistenceUnitOfWorkPort,
  ) {}

  async execute(request: CreateCycleRequest): Promise<CreateCycleResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): CreateCycleResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        cycleTypeId: request.cycleTypeId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.cycle.created",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        profile: "Standard",
        status: "proposed",
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.createdBy?.actorId) {
        return fail("CYCLE_INVALID", "created_by_required");
      }

      const idViolation = validateCycleIds({
        cycleInstanceId: request.cycleInstanceId,
        cycleTypeId: request.cycleTypeId,
        projectId: request.projectId,
      });
      if (idViolation) {
        return fail(idViolation.detailCode, idViolation.reason);
      }

      const projectResult = await this.projectServices.getProject.execute({
        projectId: request.projectId,
      });
      if (!projectResult.ok) {
        return fail("PROJECT_NOT_FOUND", "missing_project");
      }

      const qualification = qualifyCycle({
        objective: request.objective,
        scope: request.scope,
        signals: request.signals,
        requestedProfile: request.requestedProfile,
        justification: request.justification,
        cycleTypeId: request.cycleTypeId,
      }).recommendation;

      const justViolation = validateCriticalJustification(
        qualification.recommendedProfile,
        request.justification,
      );
      if (justViolation) {
        return fail(justViolation.detailCode, justViolation.reason);
      }

      if (await this.cycles.exists(request.cycleInstanceId)) {
        return fail("CYCLE_ALREADY_EXISTS", "cycle_id_taken");
      }

      const status =
        qualification.recommendedProfile === "Critical"
          ? "proposed"
          : "acknowledged";

      const cycle: CycleInstance = {
        schemaVersion: "0.1.0-oa",
        cycleInstanceId: request.cycleInstanceId,
        cycleTypeId: request.cycleTypeId,
        projectId: request.projectId,
        profile: qualification.recommendedProfile,
        status,
        acknowledgedAt:
          status === "acknowledged" ? timestamp : undefined,
        createdAt: timestamp,
      };

      const persist = async () => {
        if (await this.cycles.exists(request.cycleInstanceId)) {
          throw new Error("cycle_id_taken");
        }
        await this.cycles.save(cycle);

        if (request.linkAsActiveCycle) {
          const current =
            await this.projectServices.getCurrentLivingProjectState.execute({
              projectId: request.projectId,
            });
          if (!current.ok) {
            throw new Error("missing_current_lps");
          }
          const expected =
            request.expectedLpsVersion ?? current.livingProjectState.version;
          const appended =
            await this.projectServices.appendLivingProjectStateVersion.execute({
              projectId: request.projectId,
              expectedVersion: expected,
              objective: current.livingProjectState.objective,
              createdBy: request.createdBy,
              correlationId,
              context: current.livingProjectState.context,
              scope: current.livingProjectState.scope,
              activeCycleInstanceId: request.cycleInstanceId,
              ckcResolutionRef: request.ckcResolutionRef,
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
        }
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (err instanceof Error && err.message === "cycle_id_taken") {
          return fail("CYCLE_ALREADY_EXISTS", "cycle_id_taken");
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
        event: "oa.cycle.created",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        cycleInstanceId: cycle.cycleInstanceId,
        profile: cycle.profile,
        status: cycle.status,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        cycle: structuredClone(cycle),
        qualification,
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
