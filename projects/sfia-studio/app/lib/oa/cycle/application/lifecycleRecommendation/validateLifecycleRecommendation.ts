import type { CycleInstance } from "../../domain/types";
import { isTerminalCycleStatus } from "../../domain/lifecycleInvariants";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationIntent,
} from "./types";

export type ValidateLifecycleRecommendationInput = {
  projectId: string;
  candidate: LifecycleRecommendationCandidate;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  /** When known — trajectory must be trajectory-aware for NEXT_CYCLE. */
  hasTrajectoryContext?: boolean;
};

export type ValidateLifecycleRecommendationResult =
  | {
      ok: true;
      intent: LifecycleRecommendationIntent;
      subjectCycleInstanceId: string | null;
      targetCycleInstanceId: string | null;
      targetCycleTypeId: string | null;
      statement: string;
      basisSeed: LifecycleRecommendationBasisRefs;
    }
  | {
      ok: false;
      code: string;
      reason: string;
    };

/**
 * Deterministic SFIA validation — fail closed.
 * Does not mutate Cycle/LPS/HD.
 */
export function validateLifecycleRecommendation(
  input: ValidateLifecycleRecommendationInput,
): ValidateLifecycleRecommendationResult {
  const { candidate, projectId, cycles } = input;
  if (!projectId.startsWith("prj:")) {
    return { ok: false, code: "LR_PROJECT_INVALID", reason: "project_binding" };
  }
  const statement = (candidate.statement ?? "").trim();
  if (statement.length < 1) {
    return { ok: false, code: "LR_STATEMENT_INVALID", reason: "statement_empty" };
  }

  const byId = new Map(cycles.map((c) => [c.cycleInstanceId, c] as const));

  if (candidate.intent === "FINALIZE_CURRENT_CYCLE") {
    const subjectId = candidate.subjectCycleInstanceId ?? null;
    if (!subjectId || !byId.has(subjectId)) {
      return {
        ok: false,
        code: "LR_SUBJECT_INVALID",
        reason: "finalize_subject_missing",
      };
    }
    const subject = byId.get(subjectId)!;
    if (subject.projectId !== projectId) {
      return {
        ok: false,
        code: "LR_PROJECT_MISMATCH",
        reason: "subject_wrong_project",
      };
    }
    if (isTerminalCycleStatus(subject.status)) {
      return {
        ok: false,
        code: "LR_SUBJECT_TERMINAL",
        reason: "finalize_subject_terminal",
      };
    }
    // Eligibility is NOT required — Recommendation ≠ canFinalize.
    return {
      ok: true,
      intent: candidate.intent,
      subjectCycleInstanceId: subjectId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      statement,
      basisSeed: {
        projectId,
        subjectCycleInstanceId: subjectId,
        subjectCycleStatus: subject.status,
        lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
      },
    };
  }

  if (candidate.intent === "NEXT_CYCLE") {
    const targetId = candidate.targetCycleInstanceId ?? null;
    const targetType = candidate.targetCycleTypeId ?? null;
    if (!targetId && !targetType) {
      return {
        ok: false,
        code: "LR_TARGET_MISSING",
        reason: "next_cycle_needs_target",
      };
    }
    if (targetId) {
      const target = byId.get(targetId);
      if (!target) {
        return {
          ok: false,
          code: "LR_TARGET_INVALID",
          reason: "target_cycle_missing",
        };
      }
      if (target.projectId !== projectId) {
        return {
          ok: false,
          code: "LR_PROJECT_MISMATCH",
          reason: "target_wrong_project",
        };
      }
      if (
        target.status === "active" ||
        target.status === "completed" ||
        target.status === "cancelled" ||
        target.status === "superseded"
      ) {
        return {
          ok: false,
          code: "LR_TARGET_STATUS",
          reason: "target_not_startable_state",
        };
      }
      // Single ACTIVE invariant: Recommendation must not imply a second active.
      const active =
        cycles.find((c) => c.status === "active") ??
        (input.lpsActiveCycleInstanceId
          ? byId.get(input.lpsActiveCycleInstanceId)
          : null);
      if (active && active.cycleInstanceId === targetId) {
        return {
          ok: false,
          code: "LR_TARGET_ACTIVE",
          reason: "target_already_active",
        };
      }
    }
    if (input.hasTrajectoryContext === false) {
      return {
        ok: false,
        code: "LR_TRAJECTORY_REQUIRED",
        reason: "next_cycle_requires_trajectory",
      };
    }
    return {
      ok: true,
      intent: candidate.intent,
      subjectCycleInstanceId: candidate.subjectCycleInstanceId ?? null,
      targetCycleInstanceId: targetId,
      targetCycleTypeId: targetType,
      statement,
      basisSeed: {
        projectId,
        subjectCycleInstanceId: candidate.subjectCycleInstanceId ?? null,
        targetCycleInstanceId: targetId,
        targetCycleTypeId: targetType,
        lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
      },
    };
  }

  return { ok: false, code: "LR_INTENT_INVALID", reason: "unknown_intent" };
}
