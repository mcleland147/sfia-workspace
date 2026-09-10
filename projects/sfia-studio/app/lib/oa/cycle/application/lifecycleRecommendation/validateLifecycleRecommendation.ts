import type { HumanDecision } from "@/lib/oa/decision";
import type {
  CycleInstance,
  ExplicitCycleQualificationSignals,
} from "../../domain/types";
import { isTerminalCycleStatus } from "../../domain/lifecycleInvariants";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationIntent,
} from "./types";
import {
  assessGreenfieldPreTrajectoryBootstrapEligibility,
  validateCanonicalTargetCycleTypeId,
  type TrajectoryBootstrapPresence,
} from "./greenfieldLifecycleBootstrap";
import { parseExplicitQualificationSignals } from "./qualificationSignals";

export type ValidateLifecycleRecommendationInput = {
  projectId: string;
  candidate: LifecycleRecommendationCandidate;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  /**
   * When known true — current trajectory present (standard non-bootstrap path).
   * When false — absence of current; bootstrap may still apply if presence=never.
   * When undefined — legacy callers; trajectory rule not enforced here.
   */
  hasTrajectoryContext?: boolean;
  /**
   * Explicit presence classification. Required to allow bootstrap.
   * unknown → fail closed (never treat as never).
   */
  trajectoryBootstrapPresence?: TrajectoryBootstrapPresence;
  /** Decisions used only for bootstrap incompatibility gate. */
  decisions?: readonly HumanDecision[];
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
      /** True when NEXT_CYCLE accepted via strict greenfield bootstrap. */
      greenfieldBootstrap?: boolean;
      /**
       * D-GF-START-01 — complete six booleans on NEXT_CYCLE success.
       * Absent on FINALIZE (signals ignored).
       */
      qualificationSignals?: ExplicitCycleQualificationSignals;
    }
  | {
      ok: false;
      code: string;
      reason: string;
    };

function requireNextCycleQualificationSignals(
  candidate: LifecycleRecommendationCandidate,
):
  | { ok: true; signals: ExplicitCycleQualificationSignals }
  | { ok: false; code: string; reason: string } {
  const signals = parseExplicitQualificationSignals(
    candidate.qualificationSignals,
  );
  if (!signals) {
    return {
      ok: false,
      code: "LR_QUALIFICATION_SIGNALS_INCOMPLETE",
      reason: "next_cycle_requires_complete_qualification_signals",
    };
  }
  return { ok: true, signals };
}

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
    // FINALIZE: ignore qualificationSignals / allow null or absent.
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
    // Type-based NEXT_CYCLE must use a canonical catalog cycleTypeId (D-RB-BOOT-02).
    if (targetType) {
      const typeGate = validateCanonicalTargetCycleTypeId(targetType);
      if (!typeGate.ok) {
        return {
          ok: false,
          code: typeGate.code,
          reason: typeGate.reason,
        };
      }
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

    const presence = input.trajectoryBootstrapPresence;
    const hasCurrent =
      input.hasTrajectoryContext === true || presence?.kind === "current";

    if (!hasCurrent) {
      // Strict greenfield bootstrap (D-RB-BOOT-01) — never generic null fallback.
      if (!presence) {
        // Legacy callers without presence: preserve prior fail-closed when
        // hasTrajectoryContext === false; allow when undefined (older tests).
        if (input.hasTrajectoryContext === false) {
          return {
            ok: false,
            code: "LR_TRAJECTORY_REQUIRED",
            reason: "next_cycle_requires_trajectory",
          };
        }
      } else if (presence.kind === "unknown") {
        return {
          ok: false,
          code: "LR_BASIS_TRAJECTORY_UNAVAILABLE",
          reason: "trajectory_presence_unknown",
        };
      } else {
        const bootstrap = assessGreenfieldPreTrajectoryBootstrapEligibility({
          candidate,
          presence,
          cycles,
          lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
          decisions: input.decisions ?? [],
        });
        if (!bootstrap.eligible) {
          if (bootstrap.code.startsWith("LR_BOOTSTRAP_") || bootstrap.code.startsWith("LR_TARGET_CYCLE_TYPE_") || bootstrap.code.startsWith("LR_BASIS_")) {
            return {
              ok: false,
              code: bootstrap.code,
              reason: bootstrap.reason,
            };
          }
          return {
            ok: false,
            code: "LR_TRAJECTORY_REQUIRED",
            reason: bootstrap.reason,
          };
        }
        const signalsGate = requireNextCycleQualificationSignals(candidate);
        if (!signalsGate.ok) {
          return {
            ok: false,
            code: signalsGate.code,
            reason: signalsGate.reason,
          };
        }
        return {
          ok: true,
          intent: candidate.intent,
          subjectCycleInstanceId: null,
          targetCycleInstanceId: null,
          targetCycleTypeId: targetType,
          statement,
          greenfieldBootstrap: true,
          qualificationSignals: signalsGate.signals,
          basisSeed: {
            projectId,
            subjectCycleInstanceId: null,
            targetCycleInstanceId: null,
            targetCycleTypeId: targetType,
            lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
            trajectoryId: null,
            trajectoryVersion: null,
            trajectoryStatus: null,
          },
        };
      }
    }

    const signalsGate = requireNextCycleQualificationSignals(candidate);
    if (!signalsGate.ok) {
      return {
        ok: false,
        code: signalsGate.code,
        reason: signalsGate.reason,
      };
    }
    return {
      ok: true,
      intent: candidate.intent,
      subjectCycleInstanceId: candidate.subjectCycleInstanceId ?? null,
      targetCycleInstanceId: targetId,
      targetCycleTypeId: targetType,
      statement,
      qualificationSignals: signalsGate.signals,
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
