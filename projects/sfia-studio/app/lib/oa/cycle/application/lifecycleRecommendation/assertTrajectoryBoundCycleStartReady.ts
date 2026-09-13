/**
 * CR-START-01…04 — shared fail-closed readiness for trajectory-bound cycle START.
 *
 * Strong greenfield invariants live here so PilotLifecycleTransitions.start and
 * prepareCycleFromValidatedTrajectory cannot bypass them (historical path).
 */

import { createHash } from "node:crypto";
import type { ProjectServices } from "@/lib/oa/project";
import type { HumanDecision } from "@/lib/oa/decision";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
} from "../../domain/catalogFingerprint";
import { CYCLE_TYPE_CATALOG_VERSION } from "../../domain/cycleTypeCatalog";
import type {
  CycleInstance,
  ExplicitCycleQualificationSignals,
  ProjectTrajectory,
} from "../../domain/types";
import type { CkcQualificationResult } from "../../domain/ckcQualificationResult";
import type { QualifyCycleWithCkcRequest } from "../qualifyCycleWithCkc";
import type {
  LifecycleDecisionReader,
  LifecycleEpistemicReader,
} from "../pilotLifecycleTransitions";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import { computeCandidateContentDigest } from "./candidateTrajectoryDecisionBasis";
import {
  isTargetCycleCurrentlySelectable,
  resolveCandidateTrajectoryProvenance,
} from "./candidateTrajectoryProvenance";
import { projectCkcResolutionRef } from "./ckcResolutionRef";
import {
  parseExplicitQualificationSignals,
  qualificationSignalsEqual,
} from "./qualificationSignals";

/** Must match prepareCycleFromValidatedTrajectory.mintPrepareCycleCorrelationId. */
function mintPrepareCycleCorrelationId(input: {
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

export type QualifyCycleWithCkcPort = {
  execute(request: QualifyCycleWithCkcRequest): Promise<CkcQualificationResult>;
};

/** Minted by prepareCycleFromValidatedTrajectory — never legacy unbound. */
export const TRAJECTORY_BOUND_CYCLE_ID_PREFIX = "cyc:trj-";

export type TrajectoryBindingClass =
  | "LEGACY_UNBOUND"
  | "COMPLETE_TRAJECTORY_BOUND"
  | "INCOMPLETE_TRAJECTORY_BINDING";

/**
 * CR-START-01B — ternary binding classifier.
 * Partial binding or `cyc:trj-*` without full fields must NOT fall through to legacy.
 */
export function classifyTrajectoryBinding(cycle: {
  cycleInstanceId: string;
  trajectoryId?: string;
  trajectoryVersion?: number;
  trajectoryStepId?: string;
}): TrajectoryBindingClass {
  const trajId = cycle.trajectoryId?.trim() ?? "";
  const stepId = cycle.trajectoryStepId?.trim() ?? "";
  const hasId = trajId.length > 0;
  const hasVersion = typeof cycle.trajectoryVersion === "number";
  const hasStep = stepId.length > 0;
  const complete = hasId && hasVersion && hasStep;
  if (complete) return "COMPLETE_TRAJECTORY_BOUND";

  const anyPresent = hasId || hasVersion || hasStep;
  const mintedPrefix = cycle.cycleInstanceId.startsWith(
    TRAJECTORY_BOUND_CYCLE_ID_PREFIX,
  );
  if (anyPresent || mintedPrefix) return "INCOMPLETE_TRAJECTORY_BINDING";
  return "LEGACY_UNBOUND";
}

/** Alias: true only for COMPLETE_TRAJECTORY_BOUND (backward compatible). */
export function isTrajectoryBoundCycle(cycle: CycleInstance): boolean {
  return classifyTrajectoryBinding(cycle) === "COMPLETE_TRAJECTORY_BOUND";
}

/**
 * Revalidate HD-sealed candidate content digest.
 * Lifecycle status alone may have moved candidate→validated; normalize to
 * "candidate" for comparison. Step material (including step.state) is NOT normalized.
 */
export function assertDecisionSealedTrajectoryBasis(input: {
  trajectory: ProjectTrajectory;
  sealedCandidateContentDigest: string;
}): { ok: true } | { ok: false; code: string; reason: string } {
  const recomputed = computeCandidateContentDigest({
    trajectoryId: input.trajectory.trajectoryId,
    version: input.trajectory.version,
    status: "candidate",
    steps: input.trajectory.steps,
  });
  if (recomputed !== input.sealedCandidateContentDigest) {
    return {
      ok: false,
      code: "DECISION_SEALED_TRAJECTORY_DRIFT",
      reason: "candidate_content_digest_mismatch_vs_hd_seal",
    };
  }
  return { ok: true };
}

/**
 * Fail-closed LR/HD/(optional Cycle) qualificationSignals parity.
 * Missing LR signals are never skipped.
 */
export function assertGreenfieldSignalParity(input: {
  lrSignals: ExplicitCycleQualificationSignals | null | undefined;
  hdSignals: ExplicitCycleQualificationSignals | null | undefined;
  cycleSignals?: ExplicitCycleQualificationSignals | null | undefined;
}):
  | { ok: true; signals: ExplicitCycleQualificationSignals }
  | { ok: false; code: string; reason: string } {
  const hd = input.hdSignals
    ? parseExplicitQualificationSignals(input.hdSignals)
    : null;
  if (!hd) {
    return {
      ok: false,
      code: "PROFILE_SIGNALS_MISSING",
      reason: "hd_qualification_signals_incomplete",
    };
  }
  const lr = input.lrSignals
    ? parseExplicitQualificationSignals(input.lrSignals)
    : null;
  if (!lr) {
    return {
      ok: false,
      code: "PROFILE_SIGNALS_MISSING",
      reason: "lr_qualification_signals_required",
    };
  }
  if (!qualificationSignalsEqual(lr, hd)) {
    return {
      ok: false,
      code: "PROVENANCE_SIGNAL_MISMATCH",
      reason: "lr_signals_do_not_match_hd",
    };
  }
  if (input.cycleSignals !== undefined) {
    const cycle = input.cycleSignals
      ? parseExplicitQualificationSignals(input.cycleSignals)
      : null;
    if (!cycle) {
      return {
        ok: false,
        code: "PROFILE_SIGNALS_MISSING",
        reason: "cycle_qualification_signals_incomplete",
      };
    }
    if (!qualificationSignalsEqual(cycle, hd)) {
      return {
        ok: false,
        code: "PROVENANCE_SIGNAL_MISMATCH",
        reason: "cycle_signals_do_not_match_hd",
      };
    }
  }
  return { ok: true, signals: hd };
}

export type AssertTrajectoryBoundCycleStartReadySuccess = {
  ok: true;
  ckcResolutionRef: string;
  stepId: string;
  trajectoryId: string;
  trajectoryVersion: number;
  cycleTypeId: string;
  profile: CycleInstance["profile"];
  qualificationSignals: ExplicitCycleQualificationSignals;
  decisionId: string;
  recommendationId: string;
  correlationId: string;
};

export type AssertTrajectoryBoundCycleStartReadyFailure = {
  ok: false;
  code: string;
  reason: string;
};

export type AssertTrajectoryBoundCycleStartReadyResult =
  | AssertTrajectoryBoundCycleStartReadySuccess
  | AssertTrajectoryBoundCycleStartReadyFailure;

export type AssertTrajectoryBoundCycleStartReadyInput = {
  projectId: string;
  cycle: CycleInstance;
  projectServices: ProjectServices;
  trajectories: TrajectoryRepositoryPort;
  decisions?: LifecycleDecisionReader;
  epistemic?: LifecycleEpistemicReader;
  qualifyCycleWithCkc?: QualifyCycleWithCkcPort;
};

export async function assertTrajectoryBoundCycleStartReady(
  input: AssertTrajectoryBoundCycleStartReadyInput,
): Promise<AssertTrajectoryBoundCycleStartReadyResult> {
  const { projectId, cycle } = input;
  const fail = (
    code: string,
    reason: string,
  ): AssertTrajectoryBoundCycleStartReadyFailure => ({ ok: false, code, reason });

  if (classifyTrajectoryBinding(cycle) !== "COMPLETE_TRAJECTORY_BOUND") {
    return fail("CYCLE_NOT_TRAJECTORY_BOUND", "trajectory_binding_incomplete");
  }
  if (cycle.projectId !== projectId) {
    return fail("CYCLE_PROJECT_MISMATCH", "cycle_wrong_project");
  }

  if (!input.qualifyCycleWithCkc) {
    return fail("CKC_QUALIFIER_UNAVAILABLE", "qualify_cycle_with_ckc_required");
  }
  if (!input.decisions) {
    return fail("DECISION_READER_UNAVAILABLE", "decision_reader_required");
  }
  if (!input.epistemic) {
    return fail("EPISTEMIC_READER_UNAVAILABLE", "epistemic_reader_required");
  }

  const project = await input.projectServices.getProject.execute({ projectId });
  if (!project.ok) {
    return fail("PROJECT_NOT_FOUND", "missing_project");
  }

  const lps = await input.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) {
    return fail("LPS_UNAVAILABLE", "lps_unreadable");
  }
  const activeId = lps.livingProjectState.activeCycleInstanceId;
  if (activeId && activeId !== cycle.cycleInstanceId) {
    return fail("ACTIVE_CYCLE_PRESENT", "active_cycle_already_linked");
  }

  const trajectory =
    await input.trajectories.findCurrentByProjectId(projectId);
  if (!trajectory) {
    return fail("TRAJECTORY_MISSING", "current_trajectory_missing");
  }
  if (
    trajectory.trajectoryId !== cycle.trajectoryId ||
    trajectory.version !== cycle.trajectoryVersion
  ) {
    return fail(
      "CYCLE_BINDING_MISMATCH",
      "cycle_trajectory_id_or_version_mismatch",
    );
  }
  if (trajectory.status !== "validated" && trajectory.status !== "active") {
    return fail(
      "TRAJECTORY_NOT_VALIDATED",
      `trajectory_status_${trajectory.status}`,
    );
  }
  if (!trajectory.decidedByDecisionRef?.trim()) {
    return fail(
      "TRAJECTORY_DECISION_REF_MISSING",
      "decided_by_decision_ref_required",
    );
  }

  const decision = await input.decisions.getById(
    trajectory.decidedByDecisionRef,
  );
  if (!decision || decision.status !== "accepted") {
    return fail(
      "HUMAN_DECISION_MISSING",
      "deciding_hd_unreadable_or_not_accepted",
    );
  }
  if (decision.projectId !== projectId) {
    return fail("HUMAN_DECISION_PROJECT_MISMATCH", "hd_wrong_project");
  }
  if (decision.decisionBasis?.sourceType !== "candidate_trajectory") {
    return fail(
      "HUMAN_DECISION_SOURCE_MISMATCH",
      "expected_candidate_trajectory_basis",
    );
  }
  const ctx = decision.decisionBasis.candidateTrajectoryContext;
  if (!ctx) {
    return fail(
      "HUMAN_DECISION_CONTEXT_MISSING",
      "candidate_trajectory_context_missing",
    );
  }
  if (
    ctx.trajectoryId !== trajectory.trajectoryId ||
    ctx.candidateVersion !== trajectory.version
  ) {
    return fail(
      "TRAJECTORY_VERSION_MISMATCH",
      "hd_candidate_version_or_id_mismatch",
    );
  }

  const hdSignals = parseExplicitQualificationSignals(ctx.qualificationSignals);
  if (!hdSignals) {
    return fail(
      "PROFILE_SIGNALS_MISSING",
      "complete_qualification_signals_required",
    );
  }

  const epistemic = await input.epistemic.listByProject(projectId);
  const sourceLr = epistemic.find(
    (e) => e.epistemicItemId === ctx.recommendationId,
  );
  const lrSignals = parseExplicitQualificationSignals(
    sourceLr?.lifecycleRecommendation?.qualificationSignals,
  );
  const cycleSignals = parseExplicitQualificationSignals(
    cycle.qualificationSignals,
  );
  const parity = assertGreenfieldSignalParity({
    lrSignals,
    hdSignals,
    cycleSignals,
  });
  if (!parity.ok) {
    return fail(parity.code, parity.reason);
  }

  const provenance = resolveCandidateTrajectoryProvenance({
    projectId,
    trajectoryId: trajectory.trajectoryId,
    epistemicItems: epistemic,
  });
  if (provenance.status !== "RESOLVED") {
    return fail(`PROVENANCE_${provenance.status}`, "provenance_not_resolved");
  }
  if (
    provenance.recommendationId !== ctx.recommendationId ||
    provenance.semanticKey !== ctx.semanticKey ||
    provenance.targetCycleTypeId !== ctx.targetCycleTypeId
  ) {
    return fail(
      "PROVENANCE_HD_MISMATCH",
      "provenance_does_not_match_human_decision",
    );
  }

  const basis = assertDecisionSealedTrajectoryBasis({
    trajectory,
    sealedCandidateContentDigest: ctx.candidateContentDigest,
  });
  if (!basis.ok) {
    return fail(basis.code, basis.reason);
  }

  const step = trajectory.steps.find((s) => s.stepId === cycle.trajectoryStepId);
  if (!step) {
    return fail("TRAJECTORY_STEP_MISSING", "cycle_trajectory_step_not_found");
  }
  if (step.state !== "pending") {
    return fail(
      "TRAJECTORY_STEP_NOT_PENDING",
      `step_state_${step.state}`,
    );
  }
  if (!step.cycleTypeId?.trim() || step.cycleTypeId !== cycle.cycleTypeId) {
    return fail(
      "TRAJECTORY_STEP_TYPE_MISMATCH",
      "step_cycle_type_does_not_match_cycle",
    );
  }
  if (step.cycleTypeId !== ctx.targetCycleTypeId) {
    return fail(
      "TARGET_CYCLE_TYPE_MISMATCH",
      "step_cycle_type_does_not_match_hd",
    );
  }
  if (!isTargetCycleCurrentlySelectable(cycle.cycleTypeId)) {
    return fail(
      "TARGET_CYCLE_NOT_SELECTABLE",
      "cycle_type_not_selectable",
    );
  }
  if (!cycle.ckcResolutionRef?.trim()) {
    return fail(
      "CKC_RESOLUTION_REF_MISSING",
      "prepared_cycle_missing_ckc_ref",
    );
  }

  const correlationId = mintPrepareCycleCorrelationId({
    projectId,
    trajectoryId: trajectory.trajectoryId,
    trajectoryVersion: trajectory.version,
    stepId: step.stepId,
  });
  const requalified = await input.qualifyCycleWithCkc.execute({
    cycleTypeId: cycle.cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId,
    signals: parity.signals,
    objective: lps.livingProjectState.objective,
  });
  if (requalified.state !== "success") {
    return fail(requalified.code, "requalify_failed");
  }
  if (requalified.recommendedProfile !== cycle.profile) {
    return fail("PROFILE_MISMATCH", "requalified_profile_differs");
  }
  const expectedRef = projectCkcResolutionRef(requalified.proof);
  if (expectedRef !== cycle.ckcResolutionRef) {
    return fail(
      "CKC_RESOLUTION_REF_MISMATCH",
      "ckc_ref_does_not_match_requalify",
    );
  }

  return {
    ok: true,
    ckcResolutionRef: expectedRef,
    stepId: step.stepId,
    trajectoryId: trajectory.trajectoryId,
    trajectoryVersion: trajectory.version,
    cycleTypeId: cycle.cycleTypeId,
    profile: cycle.profile,
    qualificationSignals: parity.signals,
    decisionId: decision.decisionId,
    recommendationId: ctx.recommendationId,
    correlationId,
  };
}

/** Narrow helper for PREPARE — HD must be accepted candidate_trajectory. */
export function extractAcceptedCandidateTrajectoryDecision(
  decision: HumanDecision | null | undefined,
  projectId: string,
):
  | {
      ok: true;
      decision: HumanDecision;
      ctx: NonNullable<
        NonNullable<HumanDecision["decisionBasis"]>["candidateTrajectoryContext"]
      >;
    }
  | { ok: false; code: string; reason: string } {
  if (!decision) {
    return {
      ok: false,
      code: "HUMAN_DECISION_MISSING",
      reason: "deciding_hd_unreadable",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "HUMAN_DECISION_NOT_ACCEPTED",
      reason: "deciding_hd_not_accepted",
    };
  }
  if (decision.projectId !== projectId) {
    return {
      ok: false,
      code: "HUMAN_DECISION_PROJECT_MISMATCH",
      reason: "hd_wrong_project",
    };
  }
  if (decision.decisionBasis?.sourceType !== "candidate_trajectory") {
    return {
      ok: false,
      code: "HUMAN_DECISION_SOURCE_MISMATCH",
      reason: "expected_candidate_trajectory_basis",
    };
  }
  const ctx = decision.decisionBasis.candidateTrajectoryContext;
  if (!ctx) {
    return {
      ok: false,
      code: "HUMAN_DECISION_CONTEXT_MISSING",
      reason: "candidate_trajectory_context_missing",
    };
  }
  return { ok: true, decision, ctx };
}
