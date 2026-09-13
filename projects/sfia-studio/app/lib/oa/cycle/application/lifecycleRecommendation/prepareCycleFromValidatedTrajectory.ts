/**
 * D-GF-START-01 — prepare CycleInstance from validated/current greenfield trajectory.
 *
 * CreateCycle linkAsActiveCycle=false; no LPS mutation; no step state change; no START.
 * Profile from sealed HD/LR qualificationSignals — never invented defaults.
 *
 * CR-START-02/03/04 — fail-closed LR signals, sealed digest, delayed reuse.
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ActorReference } from "@/lib/oa/doctrine";
import type { HumanDecision } from "@/lib/oa/decision";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
} from "../../domain/catalogFingerprint";
import { CYCLE_TYPE_CATALOG_VERSION, getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type {
  CycleInstance,
  CycleProfile,
  ExplicitCycleQualificationSignals,
  ProjectTrajectory,
  TrajectoryStep,
} from "../../domain/types";
import {
  assertDecisionSealedTrajectoryBasis,
  assertGreenfieldSignalParity,
} from "./assertTrajectoryBoundCycleStartReady";
import {
  isTargetCycleCurrentlySelectable,
  resolveCandidateTrajectoryProvenance,
} from "./candidateTrajectoryProvenance";
import { projectCkcResolutionRef } from "./ckcResolutionRef";
import {
  buildCriticalProfileJustificationFromSignals,
  parseExplicitQualificationSignals,
  qualificationSignalsEqual,
  toCreateCycleSignals,
} from "./qualificationSignals";

export const SYSTEM_PREPARE_CYCLE_ACTOR: ActorReference = Object.freeze({
  actorId: "actor:system-prepare",
  role: "system",
  displayName: "System Prepare",
  authorityLevel: "none",
});

export class PrepareCycleAtomicFailure extends Error {
  readonly code: string;
  readonly reason: string;
  constructor(code: string, reason: string) {
    super(`${code}:${reason}`);
    this.name = "PrepareCycleAtomicFailure";
    this.code = code;
    this.reason = reason;
  }
}

export function mintTrajectoryBoundCycleInstanceId(input: {
  projectId: string;
  trajectoryId: string;
  trajectoryVersion: number;
  stepId: string;
  cycleTypeId: string;
}): string {
  const raw = [
    input.projectId,
    input.trajectoryId,
    String(input.trajectoryVersion),
    input.stepId,
    input.cycleTypeId,
  ].join("|");
  const digest = createHash("sha256").update(raw).digest("hex").slice(0, 24);
  return `cyc:trj-${digest}`;
}

/** Stable correlation so prepare/start requalify produce the same CKC ref. */
export function mintPrepareCycleCorrelationId(input: {
  projectId: string;
  trajectoryId: string;
  trajectoryVersion: number;
  stepId: string;
}): string {
  const raw = [
    input.projectId,
    input.trajectoryId,
    String(input.trajectoryVersion),
    input.stepId,
  ].join("|");
  return `cor:gf-prep-${createHash("sha256").update(raw).digest("hex").slice(0, 16)}`;
}

function dependencySatisfied(
  depId: string,
  steps: readonly TrajectoryStep[],
): boolean {
  const dep = steps.find((s) => s.stepId === depId);
  if (!dep) return false;
  return dep.state === "done" || dep.state === "skipped";
}

/**
 * Eligible pending steps: pending + all dependencies satisfied + cycleTypeId present.
 */
export function selectEligiblePendingTrajectorySteps(
  trajectory: ProjectTrajectory,
): TrajectoryStep[] {
  return trajectory.steps.filter((step) => {
    if (step.state !== "pending") return false;
    if (!step.cycleTypeId?.trim()) return false;
    const deps = step.dependencies ?? [];
    return deps.every((d) => dependencySatisfied(d, trajectory.steps));
  });
}

export function selectExactPrepareStep(input: {
  trajectory: ProjectTrajectory;
  targetCycleTypeId: string;
}):
  | { ok: true; step: TrajectoryStep }
  | { ok: false; code: string; reason: string } {
  // D-GF-START-01: all eligible pending steps first — never pick by order/label.
  const eligible = selectEligiblePendingTrajectorySteps(input.trajectory);
  if (eligible.length === 0) {
    return {
      ok: false,
      code: "TRAJECTORY_STEP_SELECTION_REQUIRED",
      reason: "no_eligible_pending_step",
    };
  }
  if (eligible.length > 1) {
    return {
      ok: false,
      code: "TRAJECTORY_STEP_SELECTION_REQUIRED",
      reason: "ambiguous_eligible_pending_steps",
    };
  }
  const step = eligible[0]!;
  if (step.cycleTypeId !== input.targetCycleTypeId) {
    return {
      ok: false,
      code: "TRAJECTORY_STEP_TYPE_MISMATCH",
      reason: "eligible_step_cycle_type_mismatch_hd_target",
    };
  }
  return { ok: true, step };
}

function cycleBindingCompatible(
  existing: CycleInstance,
  expected: {
    trajectoryId: string;
    trajectoryVersion: number;
    trajectoryStepId: string;
    cycleTypeId: string;
    projectId: string;
  },
): boolean {
  return (
    existing.projectId === expected.projectId &&
    existing.trajectoryId === expected.trajectoryId &&
    existing.trajectoryVersion === expected.trajectoryVersion &&
    existing.trajectoryStepId === expected.trajectoryStepId &&
    existing.cycleTypeId === expected.cycleTypeId
  );
}

function isReusablePreparedStatus(status: CycleInstance["status"]): boolean {
  return status === "proposed" || status === "acknowledged";
}

function isTerminalCycleStatus(status: CycleInstance["status"]): boolean {
  return (
    status === "completed" ||
    status === "cancelled" ||
    status === "superseded"
  );
}

function assertReusablePreparedCycle(input: {
  existing: CycleInstance;
  expectedBinding: {
    projectId: string;
    trajectoryId: string;
    trajectoryVersion: number;
    trajectoryStepId: string;
    cycleTypeId: string;
  };
  qualificationSignals: ExplicitCycleQualificationSignals;
  recommendedProfile: CycleProfile;
  ckcResolutionRef: string;
}): void {
  const { existing } = input;
  if (
    !cycleBindingCompatible(existing, input.expectedBinding)
  ) {
    throw new PrepareCycleAtomicFailure(
      "CYCLE_BINDING_CONFLICT",
      "existing_cycle_incompatible_binding",
    );
  }
  if (existing.status === "active") {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_ACTIVE",
      "active_cycle_cannot_be_reused",
    );
  }
  if (isTerminalCycleStatus(existing.status)) {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_TERMINAL",
      `terminal_cycle_${existing.status}`,
    );
  }
  if (!isReusablePreparedStatus(existing.status)) {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_CONTRACT_MISMATCH",
      `status_not_reusable_${existing.status}`,
    );
  }
  const existingSignals = parseExplicitQualificationSignals(
    existing.qualificationSignals,
  );
  if (
    !existingSignals ||
    !qualificationSignalsEqual(existingSignals, input.qualificationSignals)
  ) {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_CONTRACT_MISMATCH",
      "existing_signals_do_not_match",
    );
  }
  if (existing.profile !== input.recommendedProfile) {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_CONTRACT_MISMATCH",
      "existing_profile_does_not_match",
    );
  }
  if (existing.ckcResolutionRef !== input.ckcResolutionRef) {
    throw new PrepareCycleAtomicFailure(
      "PREPARE_REUSE_CONTRACT_MISMATCH",
      "existing_ckc_ref_does_not_match",
    );
  }
}

function extractSealedSignalsFromDecision(
  decision: HumanDecision,
): ExplicitCycleQualificationSignals | null {
  const ctx = decision.decisionBasis?.candidateTrajectoryContext;
  return parseExplicitQualificationSignals(ctx?.qualificationSignals);
}

export type PrepareCycleFromValidatedTrajectoryResult =
  | {
      ok: true;
      cycle: CycleInstance;
      reused: boolean;
      catalogLabel: string | null;
      stepId: string;
      trajectoryId: string;
      trajectoryVersion: number;
      correlationId: string;
    }
  | { ok: false; code: string; reason: string };

export async function prepareCycleFromValidatedTrajectory(input: {
  oa: RuntimeOaStack;
  projectId: string;
}): Promise<PrepareCycleFromValidatedTrajectoryResult> {
  const { oa, projectId } = input;
  if (!projectId?.startsWith("prj:")) {
    return {
      ok: false,
      code: "PROJECT_INVALID",
      reason: "project_id_invalid",
    };
  }

  const fail = (code: string, reason: string): PrepareCycleFromValidatedTrajectoryResult => ({
    ok: false,
    code,
    reason,
  });

  try {
    return await oa.projectServices.store.runInTransaction(async () => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) {
        throw new PrepareCycleAtomicFailure("PROJECT_NOT_FOUND", "missing_project");
      }

      const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
      if (!lps.ok) {
        throw new PrepareCycleAtomicFailure("LPS_UNAVAILABLE", "lps_unreadable");
      }
      if (lps.livingProjectState.activeCycleInstanceId) {
        throw new PrepareCycleAtomicFailure(
          "ACTIVE_CYCLE_PRESENT",
          "active_cycle_already_linked",
        );
      }

      const trajectory =
        await oa.cycleServices.trajectories.findCurrentByProjectId(projectId);
      if (!trajectory) {
        throw new PrepareCycleAtomicFailure(
          "TRAJECTORY_MISSING",
          "current_trajectory_missing",
        );
      }
      if (trajectory.status !== "validated" && trajectory.status !== "active") {
        throw new PrepareCycleAtomicFailure(
          "TRAJECTORY_NOT_VALIDATED",
          `trajectory_status_${trajectory.status}`,
        );
      }
      if (!trajectory.decidedByDecisionRef?.trim()) {
        throw new PrepareCycleAtomicFailure(
          "TRAJECTORY_DECISION_REF_MISSING",
          "decided_by_decision_ref_required",
        );
      }

      const hdResult = await oa.decisionServices.getHumanDecision.execute({
        decisionId: trajectory.decidedByDecisionRef,
      });
      if (!hdResult.ok) {
        throw new PrepareCycleAtomicFailure(
          "HUMAN_DECISION_MISSING",
          "deciding_hd_unreadable",
        );
      }
      const decision = hdResult.decision;
      if (decision.status !== "accepted") {
        throw new PrepareCycleAtomicFailure(
          "HUMAN_DECISION_NOT_ACCEPTED",
          "deciding_hd_not_accepted",
        );
      }
      if (decision.decisionBasis?.sourceType !== "candidate_trajectory") {
        throw new PrepareCycleAtomicFailure(
          "HUMAN_DECISION_SOURCE_MISMATCH",
          "expected_candidate_trajectory_basis",
        );
      }
      if (decision.projectId !== projectId) {
        throw new PrepareCycleAtomicFailure(
          "HUMAN_DECISION_PROJECT_MISMATCH",
          "hd_wrong_project",
        );
      }

      const ctx = decision.decisionBasis.candidateTrajectoryContext;
      if (!ctx) {
        throw new PrepareCycleAtomicFailure(
          "HUMAN_DECISION_CONTEXT_MISSING",
          "candidate_trajectory_context_missing",
        );
      }
      if (ctx.trajectoryId !== trajectory.trajectoryId) {
        throw new PrepareCycleAtomicFailure(
          "PROVENANCE_TRAJECTORY_MISMATCH",
          "hd_trajectory_mismatch",
        );
      }
      if (ctx.candidateVersion !== trajectory.version) {
        throw new PrepareCycleAtomicFailure(
          "TRAJECTORY_VERSION_MISMATCH",
          "hd_candidate_version_mismatch",
        );
      }

      // CR-START-02 — HD signals required; LR signals required and must equal HD.
      const qualificationSignals = extractSealedSignalsFromDecision(decision);
      if (!qualificationSignals) {
        throw new PrepareCycleAtomicFailure(
          "PROFILE_SIGNALS_MISSING",
          "complete_qualification_signals_required",
        );
      }

      // CR-START-03 — sealed material content must still match HD digest.
      const sealedBasis = assertDecisionSealedTrajectoryBasis({
        trajectory,
        sealedCandidateContentDigest: ctx.candidateContentDigest,
      });
      if (!sealedBasis.ok) {
        throw new PrepareCycleAtomicFailure(
          sealedBasis.code,
          sealedBasis.reason,
        );
      }

      const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
      const sourceLr = epistemic.find(
        (e) => e.epistemicItemId === ctx.recommendationId,
      );
      const lrSignals = parseExplicitQualificationSignals(
        sourceLr?.lifecycleRecommendation?.qualificationSignals,
      );
      const signalParity = assertGreenfieldSignalParity({
        lrSignals,
        hdSignals: qualificationSignals,
      });
      if (!signalParity.ok) {
        throw new PrepareCycleAtomicFailure(
          signalParity.code,
          signalParity.reason,
        );
      }

      const provenance = resolveCandidateTrajectoryProvenance({
        projectId,
        trajectoryId: trajectory.trajectoryId,
        epistemicItems: epistemic,
      });
      if (provenance.status !== "RESOLVED") {
        throw new PrepareCycleAtomicFailure(
          `PROVENANCE_${provenance.status}`,
          "provenance_not_resolved",
        );
      }
      if (
        provenance.recommendationId !== ctx.recommendationId ||
        provenance.semanticKey !== ctx.semanticKey ||
        provenance.targetCycleTypeId !== ctx.targetCycleTypeId ||
        provenance.provenanceObservationId !== ctx.provenanceObservationId
      ) {
        throw new PrepareCycleAtomicFailure(
          "PROVENANCE_HD_MISMATCH",
          "provenance_does_not_match_human_decision",
        );
      }

      const stepSelect = selectExactPrepareStep({
        trajectory,
        targetCycleTypeId: ctx.targetCycleTypeId,
      });
      if (!stepSelect.ok) {
        throw new PrepareCycleAtomicFailure(stepSelect.code, stepSelect.reason);
      }
      const step = stepSelect.step;
      const cycleTypeId = step.cycleTypeId!;
      if (cycleTypeId !== ctx.targetCycleTypeId) {
        throw new PrepareCycleAtomicFailure(
          "TARGET_CYCLE_TYPE_MISMATCH",
          "step_cycle_type_does_not_match_hd",
        );
      }
      if (!isTargetCycleCurrentlySelectable(cycleTypeId)) {
        throw new PrepareCycleAtomicFailure(
          "TARGET_CYCLE_NOT_SELECTABLE",
          "cycle_type_not_selectable",
        );
      }

      const cycleInstanceId = mintTrajectoryBoundCycleInstanceId({
        projectId,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        stepId: step.stepId,
        cycleTypeId,
      });
      const correlationId = mintPrepareCycleCorrelationId({
        projectId,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        stepId: step.stepId,
      });

      // CR-START-04 — qualify BEFORE reuse; never early-return on id/binding alone.
      const qualified = await oa.ckcQualification.qualifyCycleWithCkc.execute({
        cycleTypeId,
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId,
        signals: signalParity.signals,
        objective: lps.livingProjectState.objective,
      });
      if (qualified.state !== "success") {
        throw new PrepareCycleAtomicFailure(
          qualified.code,
          "qualify_cycle_with_ckc_failed",
        );
      }

      const ckcResolutionRef = projectCkcResolutionRef(qualified.proof);
      const expectedBinding = {
        projectId,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        trajectoryStepId: step.stepId,
        cycleTypeId,
      };

      const existing = await oa.cycleServices.cycles.findById(cycleInstanceId);
      if (existing) {
        assertReusablePreparedCycle({
          existing,
          expectedBinding,
          qualificationSignals: signalParity.signals,
          recommendedProfile: qualified.recommendedProfile,
          ckcResolutionRef,
        });
        const entry = getCycleTypeById(existing.cycleTypeId);
        return {
          ok: true as const,
          cycle: structuredClone(existing),
          reused: true,
          catalogLabel: entry?.label ?? null,
          stepId: step.stepId,
          trajectoryId: trajectory.trajectoryId,
          trajectoryVersion: trajectory.version,
          correlationId,
        };
      }

      const siblings = await oa.cycleServices.cycles.listByProject(projectId);
      const byBinding = siblings.find((c) =>
        cycleBindingCompatible(c, expectedBinding),
      );
      if (byBinding) {
        assertReusablePreparedCycle({
          existing: byBinding,
          expectedBinding,
          qualificationSignals: signalParity.signals,
          recommendedProfile: qualified.recommendedProfile,
          ckcResolutionRef,
        });
        const entry = getCycleTypeById(byBinding.cycleTypeId);
        return {
          ok: true as const,
          cycle: structuredClone(byBinding),
          reused: true,
          catalogLabel: entry?.label ?? null,
          stepId: step.stepId,
          trajectoryId: trajectory.trajectoryId,
          trajectoryVersion: trajectory.version,
          correlationId,
        };
      }

      const created = await oa.cycleServices.createCycle.execute({
        cycleInstanceId,
        cycleTypeId,
        projectId,
        signals: toCreateCycleSignals(signalParity.signals),
        justification: buildCriticalProfileJustificationFromSignals(
          signalParity.signals,
        ),
        objective: lps.livingProjectState.objective,
        createdBy: SYSTEM_PREPARE_CYCLE_ACTOR,
        correlationId,
        linkAsActiveCycle: false,
        ckcResolutionRef,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        trajectoryStepId: step.stepId,
      });
      if (!created.ok) {
        throw new PrepareCycleAtomicFailure(
          created.error.detailCode,
          created.error.internalCauseRef ?? "create_cycle_failed",
        );
      }

      // Guard: prepare must not have mutated LPS active pointer.
      const lpsAfter =
        await oa.projectServices.getCurrentLivingProjectState.execute({
          projectId,
        });
      if (
        lpsAfter.ok &&
        lpsAfter.livingProjectState.activeCycleInstanceId
      ) {
        throw new PrepareCycleAtomicFailure(
          "LPS_ACTIVE_MUTATED",
          "prepare_must_not_link_active_cycle",
        );
      }

      const entry = getCycleTypeById(created.cycle.cycleTypeId);
      return {
        ok: true as const,
        cycle: structuredClone(created.cycle),
        reused: false,
        catalogLabel: entry?.label ?? null,
        stepId: step.stepId,
        trajectoryId: trajectory.trajectoryId,
        trajectoryVersion: trajectory.version,
        correlationId,
      };
    });
  } catch (err) {
    if (err instanceof PrepareCycleAtomicFailure) {
      return fail(err.code, err.reason);
    }
    return fail(
      "PERSISTENCE_FAILURE",
      err instanceof Error ? err.message : "prepare_cycle_failed",
    );
  }
}
