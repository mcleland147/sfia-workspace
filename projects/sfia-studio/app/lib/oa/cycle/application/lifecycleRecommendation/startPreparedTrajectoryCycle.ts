/**
 * D-GF-START-01 — START a prepared trajectory-bound CycleInstance.
 *
 * Facade: resolve prepared cycle + registerLocalPiloteAuthority +
 * PilotLifecycleTransitions.start. Strong invariants live in
 * assertTrajectoryBoundCycleStartReady (invoked inside start).
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type { CycleInstance } from "../../domain/types";
import { isTrajectoryBoundCycle } from "./assertTrajectoryBoundCycleStartReady";
import { selectExactPrepareStep } from "./prepareCycleFromValidatedTrajectory";

export class StartPreparedCycleAtomicFailure extends Error {
  readonly code: string;
  readonly reason: string;
  constructor(code: string, reason: string) {
    super(`${code}:${reason}`);
    this.name = "StartPreparedCycleAtomicFailure";
    this.code = code;
    this.reason = reason;
  }
}

export type StartPreparedTrajectoryCycleResult =
  | {
      ok: true;
      cycle: CycleInstance;
      trajectoryId: string;
      trajectoryVersion: number;
      stepId: string;
      catalogLabel: string | null;
      lpsVersionAfter: number | undefined;
      activeCycleInstanceId: string;
    }
  | { ok: false; code: string; reason: string };

export async function startPreparedTrajectoryCycle(input: {
  oa: RuntimeOaStack;
  projectId: string;
  /** Optional — when omitted, server resolves the single prepared bound cycle. */
  cycleInstanceId?: string;
  /** Test inject for local Pilote authority gate. */
  forceLocalAuthority?: boolean;
}): Promise<StartPreparedTrajectoryCycleResult> {
  const { oa, projectId } = input;
  if (!projectId?.startsWith("prj:")) {
    return {
      ok: false,
      code: "PROJECT_INVALID",
      reason: "project_id_invalid",
    };
  }

  const fail = (
    code: string,
    reason: string,
  ): StartPreparedTrajectoryCycleResult => ({ ok: false, code, reason });

  try {
    return await oa.projectServices.store.runInTransaction(async () => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) {
        throw new StartPreparedCycleAtomicFailure(
          "PROJECT_NOT_FOUND",
          "missing_project",
        );
      }

      const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) {
        throw new StartPreparedCycleAtomicFailure(
          "LPS_UNAVAILABLE",
          "lps_unreadable",
        );
      }
      if (lps.livingProjectState.activeCycleInstanceId) {
        throw new StartPreparedCycleAtomicFailure(
          "ACTIVE_CYCLE_PRESENT",
          "active_cycle_already_linked",
        );
      }

      const trajectory =
        await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
      if (!trajectory) {
        throw new StartPreparedCycleAtomicFailure(
          "TRAJECTORY_MISSING",
          "current_trajectory_missing",
        );
      }

      // Thin resolution only — full readiness is enforced inside pilotLifecycle.start.
      let cycle: CycleInstance | null = null;
      const cycles = await oa.cycleServices.cycles.listByProject(projectId);
      if (input.cycleInstanceId) {
        cycle =
          cycles.find((c) => c.cycleInstanceId === input.cycleInstanceId) ??
          null;
      } else {
        const hdResult = trajectory.decidedByDecisionRef
          ? await oa.decisionServices.getHumanDecision.execute({
              decisionId: trajectory.decidedByDecisionRef,
            })
          : null;
        const targetCycleTypeId =
          hdResult?.ok &&
          hdResult.decision.decisionBasis?.candidateTrajectoryContext
            ?.targetCycleTypeId
            ? hdResult.decision.decisionBasis.candidateTrajectoryContext
                .targetCycleTypeId
            : null;
        const stepSelect = targetCycleTypeId
          ? selectExactPrepareStep({
              trajectory,
              targetCycleTypeId,
            })
          : null;
        const stepId =
          stepSelect && stepSelect.ok ? stepSelect.step.stepId : null;
        const matches = cycles.filter(
          (c) =>
            isTrajectoryBoundCycle(c) &&
            c.trajectoryId === trajectory.trajectoryId &&
            c.trajectoryVersion === trajectory.version &&
            (stepId == null || c.trajectoryStepId === stepId) &&
            (c.status === "proposed" || c.status === "acknowledged"),
        );
        if (matches.length > 1) {
          throw new StartPreparedCycleAtomicFailure(
            "PREPARED_CYCLE_AMBIGUOUS",
            "multiple_prepared_cycles",
          );
        }
        cycle = matches[0] ?? null;
      }
      if (!cycle) {
        throw new StartPreparedCycleAtomicFailure(
          "PREPARED_CYCLE_MISSING",
          "prepared_cycle_not_found",
        );
      }
      if (!isTrajectoryBoundCycle(cycle)) {
        throw new StartPreparedCycleAtomicFailure(
          "CYCLE_BINDING_MISMATCH",
          "cycle_not_trajectory_bound",
        );
      }
      if (cycle.status !== "proposed" && cycle.status !== "acknowledged") {
        throw new StartPreparedCycleAtomicFailure(
          "PREPARED_CYCLE_MISSING",
          `cycle_status_${cycle.status}`,
        );
      }

      const scope = `pilot-lifecycle:${cycle.cycleInstanceId}`;
      const issuedAt = oa.clock.nowIso();
      const authority = registerLocalPiloteAuthority({
        authorityResolver: oa.authorityResolver,
        scope,
        issuedAt,
        forceEnable: input.forceLocalAuthority === true,
      });
      if (!authority.ok) {
        throw new StartPreparedCycleAtomicFailure(
          authority.code,
          authority.message,
        );
      }

      const started = await oa.cycleServices.pilotLifecycle.start({
        cycleInstanceId: cycle.cycleInstanceId,
        projectId,
        createdBy: {
          actorId: LOCAL_PILOTE_ACTOR.actorId,
          role: LOCAL_PILOTE_ACTOR.role,
          displayName: LOCAL_PILOTE_ACTOR.displayName,
          authorityLevel: LOCAL_PILOTE_ACTOR.authorityLevel,
        },
        authorityEvidenceId: authority.evidenceId,
        expectedLpsVersion: lps.livingProjectState.version,
        correlationId: `cor:gf-start-${cycle.cycleInstanceId.slice(-12)}`,
      });
      if (!started.ok) {
        // Surface strong-guard codes (internalCauseRef) when detail is closed enum.
        const code =
          started.error.detailCode === "CYCLE_START_NOT_READY" &&
          started.error.internalCauseRef
            ? started.error.internalCauseRef
            : started.error.detailCode;
        throw new StartPreparedCycleAtomicFailure(
          code,
          started.error.internalCauseRef ?? "start_failed",
        );
      }

      const entry = getCycleTypeById(started.cycle.cycleTypeId);
      return {
        ok: true as const,
        cycle: structuredClone(started.cycle),
        trajectoryId: cycle.trajectoryId!,
        trajectoryVersion: cycle.trajectoryVersion!,
        stepId: cycle.trajectoryStepId!,
        catalogLabel: entry?.label ?? null,
        lpsVersionAfter: started.livingProjectStateVersion,
        activeCycleInstanceId: started.cycle.cycleInstanceId,
      };
    });
  } catch (err) {
    if (err instanceof StartPreparedCycleAtomicFailure) {
      return fail(err.code, err.reason);
    }
    return fail(
      "PERSISTENCE_FAILURE",
      err instanceof Error ? err.message : "start_prepared_cycle_failed",
    );
  }
}
