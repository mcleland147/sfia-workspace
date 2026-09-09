/**
 * Strict pre-trajectory bootstrap for the first NEXT_CYCLE Lifecycle Recommendation
 * on a genuine fresh Project (D-RB-BOOT-01).
 *
 * Never treats reader failure as absence. Never auto-creates ProjectTrajectory.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { CycleInstance, ProjectTrajectory } from "../../domain/types";
import type { TrajectoryRepositoryPort } from "../../ports/trajectoryRepository";
import { isCurrentHumanDecisionStatus } from "../assessFinalization";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";
import type { LifecycleRecommendationCandidate } from "./types";

/** Max version probe — lineages are sequential; avoids unbounded scans. */
export const TRAJECTORY_HISTORY_PROBE_MAX_VERSION = 64 as const;

export type TrajectoryBootstrapPresenceKind =
  | "current"
  | "never"
  | "history_without_current"
  | "unknown";

export type TrajectoryBootstrapPresence =
  | { kind: "current"; trajectory: ProjectTrajectory }
  | { kind: "never" }
  | { kind: "history_without_current" }
  | { kind: "unknown"; reason: string };

export type GreenfieldBootstrapEligibilityResult =
  | { eligible: true }
  | { eligible: false; code: string; reason: string };

/**
 * Pure classification from already-resolved reads.
 * Callers must pass unknown when any required reader threw / failed.
 */
export function classifyTrajectoryBootstrapPresence(input: {
  readerFailed: boolean;
  current: ProjectTrajectory | null;
  /** True when any historical/candidate row exists for the project. */
  anyVersionExists: boolean;
}): TrajectoryBootstrapPresence {
  if (input.readerFailed) {
    return { kind: "unknown", reason: "trajectory_reader_failed" };
  }
  if (input.current) {
    return { kind: "current", trajectory: input.current };
  }
  if (input.anyVersionExists) {
    return { kind: "history_without_current" };
  }
  return { kind: "never" };
}

/**
 * Resolve presence using existing TrajectoryRepositoryPort only.
 * findCurrentByProjectId + findByProjectAndVersion — no new store / list API.
 */
export async function resolveTrajectoryBootstrapPresence(
  trajectories: TrajectoryRepositoryPort,
  projectId: string,
): Promise<TrajectoryBootstrapPresence> {
  try {
    const current = await trajectories.findCurrentByProjectId(projectId);
    if (current) {
      return { kind: "current", trajectory: current };
    }
    let anyVersionExists = false;
    for (let version = 1; version <= TRAJECTORY_HISTORY_PROBE_MAX_VERSION; version += 1) {
      const row = await trajectories.findByProjectAndVersion(projectId, version);
      if (row) {
        anyVersionExists = true;
        break;
      }
    }
    return classifyTrajectoryBootstrapPresence({
      readerFailed: false,
      current: null,
      anyVersionExists,
    });
  } catch (error) {
    return {
      kind: "unknown",
      reason:
        error instanceof Error ? error.message : "trajectory_presence_unresolved",
    };
  }
}

/** Canonical catalog gate for targetCycleTypeId (D-RB-BOOT-02). */
export function validateCanonicalTargetCycleTypeId(
  targetCycleTypeId: string | null,
): { ok: true; cycleTypeId: string } | { ok: false; code: string; reason: string } {
  if (!targetCycleTypeId || targetCycleTypeId.trim().length < 1) {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_MISSING",
      reason: "target_cycle_type_required_for_type_based_next",
    };
  }
  const entry = getCycleTypeById(targetCycleTypeId);
  if (!entry) {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_UNKNOWN",
      reason: "target_cycle_type_not_in_catalog",
    };
  }
  if (entry.lifecycleStatus !== "active") {
    return {
      ok: false,
      code: "LR_TARGET_CYCLE_TYPE_NOT_SELECTABLE",
      reason: "target_cycle_type_not_selectable",
    };
  }
  return { ok: true, cycleTypeId: entry.cycleTypeId };
}

/**
 * Strict bootstrap eligibility — first NEXT_CYCLE on a Project that never had
 * a ProjectTrajectory. Fail closed on unknown / history / cycles / HD / ids.
 */
export function assessGreenfieldPreTrajectoryBootstrapEligibility(input: {
  candidate: LifecycleRecommendationCandidate;
  presence: TrajectoryBootstrapPresence;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  decisions: readonly HumanDecision[];
}): GreenfieldBootstrapEligibilityResult {
  if (input.candidate.intent !== "NEXT_CYCLE") {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_INTENT",
      reason: "bootstrap_next_cycle_only",
    };
  }
  if (input.presence.kind === "unknown") {
    return {
      eligible: false,
      code: "LR_BASIS_TRAJECTORY_UNAVAILABLE",
      reason: "trajectory_presence_unknown",
    };
  }
  if (input.presence.kind === "current") {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_NOT_APPLICABLE",
      reason: "current_trajectory_present",
    };
  }
  if (input.presence.kind === "history_without_current") {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_HISTORY_PRESENT",
      reason: "prior_or_candidate_trajectory_exists",
    };
  }
  // presence.kind === "never"
  if (input.cycles.length > 0) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_CYCLE_PRESENT",
      reason: "cycle_instance_exists",
    };
  }
  if (input.lpsActiveCycleInstanceId) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_ACTIVE_CYCLE",
      reason: "active_cycle_present",
    };
  }
  if (input.candidate.subjectCycleInstanceId) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_SUBJECT_FORBIDDEN",
      reason: "subject_cycle_not_allowed_in_bootstrap",
    };
  }
  if (input.candidate.targetCycleInstanceId) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_TARGET_INSTANCE_FORBIDDEN",
      reason: "target_cycle_instance_not_allowed_in_bootstrap",
    };
  }
  const typeGate = validateCanonicalTargetCycleTypeId(
    input.candidate.targetCycleTypeId ?? null,
  );
  if (!typeGate.ok) {
    return {
      eligible: false,
      code: typeGate.code,
      reason: typeGate.reason,
    };
  }
  const currentHd = input.decisions.filter((d) =>
    isCurrentHumanDecisionStatus(d.status),
  );
  if (currentHd.length > 0) {
    return {
      eligible: false,
      code: "LR_BOOTSTRAP_HD_PRESENT",
      reason: "current_human_decision_incompatible_with_bootstrap",
    };
  }
  return { eligible: true };
}
