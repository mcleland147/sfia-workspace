/**
 * Greenfield bridge (D-RB-BOOT-01 / Option B2):
 * CURRENT NEXT_CYCLE Lifecycle Recommendation → durable candidate ProjectTrajectory.
 *
 * Deterministic Product mechanics only — no model call, no HD, no CycleInstance, no START.
 * Reuses greenfield bootstrap eligibility + CreateInitialTrajectory.
 */
import { randomBytes } from "node:crypto";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ActorReference } from "@/lib/oa/doctrine";
import {
  CYCLE_TYPE_CATALOG,
  getCycleTypeById,
} from "../../domain/cycleTypeCatalog";
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
  TrajectoryStep,
} from "../../domain/types";
import type { CreateInitialTrajectory } from "../createInitialTrajectory";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import {
  assessGreenfieldPreTrajectoryBootstrapEligibility,
  resolveTrajectoryBootstrapPresence,
  validateCanonicalTargetCycleTypeId,
} from "./greenfieldLifecycleBootstrap";
import {
  selectCurrentLifecycleRecommendations,
  type RebuildLifecycleRecommendationBasisFacts,
} from "./currentness";
import type { LifecycleRecommendationMaterialDimension } from "./materialReaderContract";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "./noraActor";
import type { LifecycleRecommendationEnvelope } from "./types";

function newCorId(): string {
  return `cor:${randomBytes(8).toString("hex")}`;
}

function newTrajectoryId(): string {
  return `trj:lr-bridge-${randomBytes(6).toString("hex")}`;
}

function newStepId(canonicalKey: string): string {
  const slug = canonicalKey.replace(/[^a-z0-9-]/gi, "").slice(0, 24) || "cycle";
  return `stp:${slug}-${randomBytes(4).toString("hex")}`;
}

export type PrepareCandidateTrajectoryDeps = {
  trajectories: TrajectoryRepositoryPort;
  createInitialTrajectory: CreateInitialTrajectory;
  listEpistemicByProject: (projectId: string) => Promise<EpistemicItem[]>;
  listCyclesByProject: (projectId: string) => Promise<CycleInstance[]>;
  listDecisionsByProject: (projectId: string) => Promise<HumanDecision[]>;
  listEvidenceByProject?: (projectId: string) => Promise<Evidence[]>;
  getCurrentLps: (projectId: string) => Promise<
    | {
        ok: true;
        livingProjectState: {
          version: number;
          activeCycleInstanceId?: string | null;
          trajectoryId?: string | null;
          trajectoryVersion?: number | null;
          doctrinePackageRef?: {
            doctrinePackageId: string;
            version: string;
            digest: string;
          };
        };
      }
    | { ok: false }
  >;
  getProjectDoctrinePin?: (projectId: string) => Promise<{
    doctrinePackageId: string;
    version: string;
    digest: string;
  } | null>;
  /** Injected for tests — defaults to Nora lifecycle non-authoritative actor. */
  createdBy?: ActorReference;
  /** Injected ids for deterministic tests. */
  newTrajectoryId?: () => string;
  newStepId?: (canonicalKey: string) => string;
  correlationId?: string;
};

export type PrepareCandidateTrajectorySuccess = {
  ok: true;
  projectId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
  catalogLabel: string;
  trajectoryId: string;
  trajectoryVersion: number;
  stepId: string;
  correlationId: string;
  lpsVersionAfter: number;
  sourceDerivedCurrentnessBefore: "CURRENT";
};

export type PrepareCandidateTrajectoryFailure = {
  ok: false;
  code: string;
  reason: string;
  correlationId: string;
};

export type PrepareCandidateTrajectoryResult =
  | PrepareCandidateTrajectorySuccess
  | PrepareCandidateTrajectoryFailure;

/**
 * Resolve exactly one CURRENT NEXT_CYCLE Lifecycle Recommendation from durable truth.
 * Ambiguity (0 or >1) → fail-closed.
 */
export function selectExactCurrentNextCycleRecommendation(
  current: readonly LifecycleRecommendationEnvelope[],
):
  | { ok: true; recommendation: LifecycleRecommendationEnvelope }
  | { ok: false; code: string; reason: string } {
  const next = current.filter(
    (r) =>
      r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
  );
  if (next.length === 0) {
    return {
      ok: false,
      code: "TRJ_BRIDGE_NO_CURRENT_NEXT_CYCLE",
      reason: "no_current_next_cycle_lifecycle_recommendation",
    };
  }
  if (next.length > 1) {
    return {
      ok: false,
      code: "TRJ_BRIDGE_AMBIGUOUS_CURRENT_NEXT_CYCLE",
      reason: "multiple_current_next_cycle_recommendations",
    };
  }
  return { ok: true, recommendation: next[0]! };
}

export function buildSingleRecommendedCycleStep(input: {
  targetCycleTypeId: string;
  stepId: string;
}):
  | { ok: true; step: TrajectoryStep; catalogLabel: string; cycleTypeId: string }
  | { ok: false; code: string; reason: string } {
  const gate = validateCanonicalTargetCycleTypeId(input.targetCycleTypeId);
  if (!gate.ok) {
    return { ok: false, code: gate.code, reason: gate.reason };
  }
  const entry = getCycleTypeById(gate.cycleTypeId);
  if (!entry || entry.lifecycleStatus !== "active") {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_NOT_SELECTABLE",
      reason: "target_cycle_type_not_selectable",
    };
  }
  return {
    ok: true,
    cycleTypeId: entry.cycleTypeId,
    catalogLabel: entry.label,
    step: {
      stepId: input.stepId,
      order: 1,
      label: entry.label,
      state: "pending",
    },
  };
}

/**
 * Server-owned bridge. Client must supply projectId only.
 */
export async function prepareCandidateTrajectoryFromCurrentRecommendation(input: {
  projectId: string;
  deps: PrepareCandidateTrajectoryDeps;
  blockingReservationStatements?: readonly string[];
  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
}): Promise<PrepareCandidateTrajectoryResult> {
  const correlationId = input.deps.correlationId ?? newCorId();
  const fail = (code: string, reason: string): PrepareCandidateTrajectoryFailure => ({
    ok: false,
    code,
    reason,
    correlationId,
  });

  const projectId = input.projectId;
  if (!projectId || !projectId.startsWith("prj:")) {
    return fail("TRJ_BRIDGE_PROJECT_INVALID", "project_id_invalid");
  }

  const lpsResult = await input.deps.getCurrentLps(projectId);
  if (!lpsResult.ok) {
    return fail("TRJ_BRIDGE_LPS_UNAVAILABLE", "current_lps_unreadable");
  }
  const lps = lpsResult.livingProjectState;
  const expectedLpsVersion = lps.version;

  let epistemicItems: EpistemicItem[];
  let cycles: CycleInstance[];
  let decisions: HumanDecision[];
  let evidence: Evidence[] = [];
  const failed = new Set<LifecycleRecommendationMaterialDimension>(
    input.failedMaterialDimensions ?? [],
  );

  try {
    epistemicItems = await input.deps.listEpistemicByProject(projectId);
  } catch {
    return fail("TRJ_BRIDGE_EPISTEMIC_UNAVAILABLE", "epistemic_reader_failed");
  }
  try {
    cycles = await input.deps.listCyclesByProject(projectId);
  } catch {
    return fail("TRJ_BRIDGE_CYCLES_UNAVAILABLE", "cycle_reader_failed");
  }
  try {
    decisions = await input.deps.listDecisionsByProject(projectId);
  } catch {
    return fail("TRJ_BRIDGE_DECISIONS_UNAVAILABLE", "decision_reader_failed");
  }
  if (input.deps.listEvidenceByProject) {
    try {
      evidence = await input.deps.listEvidenceByProject(projectId);
    } catch {
      failed.add("evidence");
    }
  }

  const presence = await resolveTrajectoryBootstrapPresence(
    input.deps.trajectories,
    projectId,
  );
  if (presence.kind === "unknown") {
    return fail("TRJ_BRIDGE_TRAJECTORY_UNKNOWN", presence.reason);
  }
  if (presence.kind !== "never") {
    return fail(
      presence.kind === "current"
        ? "TRJ_BRIDGE_TRAJECTORY_CURRENT_PRESENT"
        : "TRJ_BRIDGE_TRAJECTORY_HISTORY_PRESENT",
      presence.kind === "current"
        ? "current_trajectory_present"
        : "prior_or_candidate_trajectory_exists",
    );
  }

  const doctrinePin =
    (await input.deps.getProjectDoctrinePin?.(projectId)) ??
    lps.doctrinePackageRef ??
    null;

  const facts: RebuildLifecycleRecommendationBasisFacts = {
    cycles,
    lpsActiveCycleInstanceId: lps.activeCycleInstanceId ?? null,
    lpsVersion: lps.version,
    doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
    doctrinePackageVersion: doctrinePin?.version ?? null,
    doctrinePackageDigest: doctrinePin?.digest ?? null,
    trajectory: null,
    decisions,
    evidence,
    blockingReservationStatements: input.blockingReservationStatements ?? [],
  };

  const current = selectCurrentLifecycleRecommendations({
    items: epistemicItems,
    ...facts,
    failedMaterialDimensions: failed,
  });

  const selected = selectExactCurrentNextCycleRecommendation(current);
  if (!selected.ok) {
    return fail(selected.code, selected.reason);
  }
  const recommendation = selected.recommendation;

  if (recommendation.epistemicStatus !== "active") {
    return fail(
      "TRJ_BRIDGE_RECOMMENDATION_NOT_ACTIVE",
      "recommendation_epistemic_status_not_active",
    );
  }
  if (recommendation.authority !== "none") {
    return fail("TRJ_BRIDGE_AUTHORITY_FORBIDDEN", "authority_must_be_none");
  }
  if (recommendation.isHumanDecision !== false) {
    return fail(
      "TRJ_BRIDGE_HUMAN_DECISION_FORBIDDEN",
      "recommendation_must_not_be_human_decision",
    );
  }
  if (recommendation.subjectCycleInstanceId) {
    return fail(
      "TRJ_BRIDGE_SUBJECT_FORBIDDEN",
      "subject_cycle_not_allowed_for_greenfield_bridge",
    );
  }
  if (recommendation.targetCycleInstanceId) {
    return fail(
      "TRJ_BRIDGE_TARGET_INSTANCE_FORBIDDEN",
      "target_cycle_instance_not_allowed_for_greenfield_bridge",
    );
  }

  const eligibility = assessGreenfieldPreTrajectoryBootstrapEligibility({
    candidate: {
      intent: recommendation.intent,
      statement: recommendation.statement,
      subjectCycleInstanceId: recommendation.subjectCycleInstanceId,
      targetCycleInstanceId: recommendation.targetCycleInstanceId,
      targetCycleTypeId: recommendation.targetCycleTypeId,
    },
    presence,
    cycles,
    lpsActiveCycleInstanceId: lps.activeCycleInstanceId ?? null,
    decisions,
  });
  if (!eligibility.eligible) {
    return fail(eligibility.code, eligibility.reason);
  }

  const targetCycleTypeId = recommendation.targetCycleTypeId;
  if (!targetCycleTypeId) {
    return fail(
      "LR_TARGET_CYCLE_TYPE_MISSING",
      "target_cycle_type_required_for_type_based_next",
    );
  }

  const mkStepId = input.deps.newStepId ?? newStepId;
  const entry = getCycleTypeById(targetCycleTypeId);
  const canonicalKey = entry?.canonicalKey ?? "cycle";
  const stepId = mkStepId(canonicalKey);
  const stepBuild = buildSingleRecommendedCycleStep({
    targetCycleTypeId,
    stepId,
  });
  if (!stepBuild.ok) {
    return fail(stepBuild.code, stepBuild.reason);
  }

  const trajectoryId = (input.deps.newTrajectoryId ?? newTrajectoryId)();
  const createdBy =
    input.deps.createdBy ?? NORA_LIFECYCLE_RECOMMENDATION_ACTOR;

  const created = await input.deps.createInitialTrajectory.execute({
    trajectoryId,
    projectId,
    steps: [stepBuild.step],
    status: "candidate",
    createdBy,
    correlationId,
    expectedLpsVersion,
  });

  if (!created.ok) {
    return fail(
      created.error.detailCode,
      created.error.internalCauseRef ?? "create_initial_trajectory_failed",
    );
  }

  const trajectory = created.trajectory;
  if (trajectory.decidedByDecisionRef) {
    return fail(
      "TRJ_BRIDGE_DECISION_REF_LEAK",
      "candidate_must_not_carry_decision_ref",
    );
  }

  return {
    ok: true,
    projectId,
    recommendationId: recommendation.recommendationId,
    semanticKey: recommendation.semanticKey,
    targetCycleTypeId: stepBuild.cycleTypeId,
    catalogLabel: stepBuild.catalogLabel,
    trajectoryId: trajectory.trajectoryId,
    trajectoryVersion: trajectory.version,
    stepId: stepBuild.step.stepId,
    correlationId,
    lpsVersionAfter: created.livingProjectStateVersion ?? expectedLpsVersion + 1,
    sourceDerivedCurrentnessBefore: "CURRENT",
  };
}

/**
 * Durable read of a pre-cycle candidate ProjectTrajectory (not current).
 * Prefer LPS trajectory pointer when present; never coerces candidate to current.
 */
export async function readPreCycleCandidateTrajectory(input: {
  projectId: string;
  trajectories: TrajectoryRepositoryPort;
  getCurrentLps: PrepareCandidateTrajectoryDeps["getCurrentLps"];
  listCyclesByProject: (projectId: string) => Promise<CycleInstance[]>;
}): Promise<
  | {
      ok: true;
      candidate: {
        trajectoryId: string;
        version: number;
        status: "candidate";
        projectId: string;
        steps: readonly TrajectoryStep[];
        catalogLabel: string | null;
        targetCycleTypeId: string | null;
        decidedByDecisionRef: null;
        isEffectiveCurrent: false;
      };
    }
  | { ok: true; candidate: null }
  | { ok: false; code: string; reason: string }
> {
  const lpsResult = await input.getCurrentLps(input.projectId);
  if (!lpsResult.ok) {
    return { ok: false, code: "TRJ_BRIDGE_LPS_UNAVAILABLE", reason: "lps_unreadable" };
  }
  const lps = lpsResult.livingProjectState;

  try {
    const cycles = await input.listCyclesByProject(input.projectId);
    if (cycles.length > 0 || lps.activeCycleInstanceId) {
      // Pre-cycle candidate surface is only for greenfield-before-cycle.
      // Still allow reading LPS-linked candidate if present, but callers gate UI.
    }
  } catch {
    return {
      ok: false,
      code: "TRJ_BRIDGE_CYCLES_UNAVAILABLE",
      reason: "cycle_reader_failed",
    };
  }

  let trajectory: ProjectTrajectory | null = null;
  try {
    if (
      typeof lps.trajectoryVersion === "number" &&
      lps.trajectoryVersion >= 1
    ) {
      trajectory =
        (await input.trajectories.findByProjectAndVersion(
          input.projectId,
          lps.trajectoryVersion,
        )) ?? null;
    }
    if (!trajectory) {
      const presence = await resolveTrajectoryBootstrapPresence(
        input.trajectories,
        input.projectId,
      );
      if (presence.kind === "unknown") {
        return {
          ok: false,
          code: "TRJ_BRIDGE_TRAJECTORY_UNKNOWN",
          reason: presence.reason,
        };
      }
      if (presence.kind === "history_without_current") {
        trajectory =
          (await input.trajectories.findByProjectAndVersion(
            input.projectId,
            1,
          )) ?? null;
      }
    }
  } catch (error) {
    return {
      ok: false,
      code: "TRJ_BRIDGE_TRAJECTORY_UNKNOWN",
      reason:
        error instanceof Error ? error.message : "trajectory_reader_failed",
    };
  }

  if (!trajectory || trajectory.status !== "candidate") {
    return { ok: true, candidate: null };
  }

  const current = await input.trajectories.findCurrentByProjectId(
    input.projectId,
  );
  if (current && current.trajectoryId === trajectory.trajectoryId) {
    // Candidate must not be effective current — refuse to mis-present.
    return { ok: true, candidate: null };
  }

  const first = trajectory.steps[0] ?? null;
  let targetCycleTypeId: string | null = null;
  let catalogLabel: string | null = first?.label ?? null;
  if (first?.label) {
    // Reverse-resolve catalog label → id when unique (presentation aid only).
    // Canonical identity remains the source Recommendation / bridge result.
    const matches = CYCLE_TYPE_CATALOG.entries.filter(
      (e) => e.label === first.label && e.lifecycleStatus === "active",
    );
    if (matches.length === 1) {
      targetCycleTypeId = matches[0]!.cycleTypeId;
      catalogLabel = matches[0]!.label;
    }
  }

  return {
    ok: true,
    candidate: {
      trajectoryId: trajectory.trajectoryId,
      version: trajectory.version,
      status: "candidate",
      projectId: trajectory.projectId,
      steps: trajectory.steps,
      catalogLabel,
      targetCycleTypeId,
      decidedByDecisionRef: null,
      isEffectiveCurrent: false,
    },
  };
}
