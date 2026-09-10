/**
 * D-GF-START-01 — START a prepared trajectory-bound CycleInstance.
 *
 * N3 Pilote via registerLocalPiloteAuthority + PilotLifecycleTransitions.start.
 * No second HD, no Confirmation, no EC. Revalidates sealed signals + CKC ref.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
} from "../../domain/catalogFingerprint";
import { CYCLE_TYPE_CATALOG_VERSION, getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type { CycleInstance } from "../../domain/types";
import {
  isTargetCycleCurrentlySelectable,
  resolveCandidateTrajectoryProvenance,
} from "./candidateTrajectoryProvenance";
import { projectCkcResolutionRef } from "./ckcResolutionRef";
import {
  mintPrepareCycleCorrelationId,
  selectExactPrepareStep,
} from "./prepareCycleFromValidatedTrajectory";
import { parseExplicitQualificationSignals } from "./qualificationSignals";

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
      if (trajectory.status !== "validated" && trajectory.status !== "active") {
        throw new StartPreparedCycleAtomicFailure(
          "TRAJECTORY_NOT_VALIDATED",
          `trajectory_status_${trajectory.status}`,
        );
      }
      if (!trajectory.decidedByDecisionRef?.trim()) {
        throw new StartPreparedCycleAtomicFailure(
          "TRAJECTORY_DECISION_REF_MISSING",
          "decided_by_decision_ref_required",
        );
      }

      const hdResult = await oa.decisionServices.getHumanDecision.execute({
        decisionId: trajectory.decidedByDecisionRef,
      });
      if (!hdResult.ok || hdResult.decision.status !== "accepted") {
        throw new StartPreparedCycleAtomicFailure(
          "HUMAN_DECISION_MISSING",
          "deciding_hd_unreadable_or_not_accepted",
        );
      }
      const decision = hdResult.decision;
      if (decision.decisionBasis?.sourceType !== "candidate_trajectory") {
        throw new StartPreparedCycleAtomicFailure(
          "HUMAN_DECISION_SOURCE_MISMATCH",
          "expected_candidate_trajectory_basis",
        );
      }
      const ctx = decision.decisionBasis.candidateTrajectoryContext;
      if (!ctx) {
        throw new StartPreparedCycleAtomicFailure(
          "HUMAN_DECISION_CONTEXT_MISSING",
          "candidate_trajectory_context_missing",
        );
      }

      const qualificationSignals = parseExplicitQualificationSignals(
        ctx.qualificationSignals,
      );
      if (!qualificationSignals) {
        throw new StartPreparedCycleAtomicFailure(
          "PROFILE_SIGNALS_MISSING",
          "complete_qualification_signals_required",
        );
      }

      const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
      const provenance = resolveCandidateTrajectoryProvenance({
        projectId,
        trajectoryId: trajectory.trajectoryId,
        epistemicItems: epistemic,
      });
      if (provenance.status !== "RESOLVED") {
        throw new StartPreparedCycleAtomicFailure(
          `PROVENANCE_${provenance.status}`,
          "provenance_not_resolved",
        );
      }
      if (
        provenance.recommendationId !== ctx.recommendationId ||
        provenance.semanticKey !== ctx.semanticKey ||
        provenance.targetCycleTypeId !== ctx.targetCycleTypeId
      ) {
        throw new StartPreparedCycleAtomicFailure(
          "PROVENANCE_HD_MISMATCH",
          "provenance_does_not_match_human_decision",
        );
      }

      const stepSelect = selectExactPrepareStep({
        trajectory,
        targetCycleTypeId: ctx.targetCycleTypeId,
      });
      if (!stepSelect.ok) {
        throw new StartPreparedCycleAtomicFailure(
          stepSelect.code,
          stepSelect.reason,
        );
      }
      const step = stepSelect.step;
      const cycleTypeId = step.cycleTypeId!;
      if (!isTargetCycleCurrentlySelectable(cycleTypeId)) {
        throw new StartPreparedCycleAtomicFailure(
          "TARGET_CYCLE_NOT_SELECTABLE",
          "cycle_type_not_selectable",
        );
      }

      const cycles = await oa.cycleServices.cycles.listByProject(projectId);
      let cycle: CycleInstance | null = null;
      if (input.cycleInstanceId) {
        cycle =
          cycles.find((c) => c.cycleInstanceId === input.cycleInstanceId) ??
          null;
      } else {
        const matches = cycles.filter(
          (c) =>
            c.trajectoryId === trajectory.trajectoryId &&
            c.trajectoryVersion === trajectory.version &&
            c.trajectoryStepId === step.stepId &&
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
      if (
        cycle.trajectoryId !== trajectory.trajectoryId ||
        cycle.trajectoryVersion !== trajectory.version ||
        cycle.trajectoryStepId !== step.stepId ||
        cycle.cycleTypeId !== cycleTypeId
      ) {
        throw new StartPreparedCycleAtomicFailure(
          "CYCLE_BINDING_MISMATCH",
          "cycle_trajectory_binding_mismatch",
        );
      }
      if (!cycle.ckcResolutionRef?.trim()) {
        throw new StartPreparedCycleAtomicFailure(
          "CKC_RESOLUTION_REF_MISSING",
          "prepared_cycle_missing_ckc_ref",
        );
      }

      const sealedOnCycle = parseExplicitQualificationSignals(
        cycle.qualificationSignals,
      );
      if (!sealedOnCycle) {
        throw new StartPreparedCycleAtomicFailure(
          "PROFILE_SIGNALS_MISSING",
          "cycle_qualification_signals_incomplete",
        );
      }

      const correlationId = mintPrepareCycleCorrelationId({
        projectId,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        stepId: step.stepId,
      });
      const requalified = await oa.ckcQualification.qualifyCycleWithCkc.execute({
        cycleTypeId,
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId,
        signals: sealedOnCycle,
        objective: lps.livingProjectState.objective,
      });
      if (requalified.state !== "success") {
        throw new StartPreparedCycleAtomicFailure(
          requalified.code,
          "requalify_failed",
        );
      }
      if (requalified.recommendedProfile !== cycle.profile) {
        throw new StartPreparedCycleAtomicFailure(
          "PROFILE_MISMATCH",
          "requalified_profile_differs",
        );
      }
      const expectedRef = projectCkcResolutionRef(requalified.proof);
      if (expectedRef !== cycle.ckcResolutionRef) {
        throw new StartPreparedCycleAtomicFailure(
          "CKC_RESOLUTION_REF_MISMATCH",
          "ckc_ref_does_not_match_requalify",
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
        throw new StartPreparedCycleAtomicFailure(
          started.error.detailCode,
          started.error.internalCauseRef ?? "start_failed",
        );
      }

      const entry = getCycleTypeById(started.cycle.cycleTypeId);
      return {
        ok: true as const,
        cycle: structuredClone(started.cycle),
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        stepId: step.stepId,
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
