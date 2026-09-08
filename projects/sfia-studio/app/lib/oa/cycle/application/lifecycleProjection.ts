/**
 * CORR-PROOF-05 — durable Pilot lifecycle projection (reload-safe).
 * Derived from CycleRepository + LPS (+ optional trajectory/assessment).
 * Never owned by F2/proposal process-local state.
 */
import type {
  CycleInstance,
  CycleInstanceStatus,
  FinalizationAssessment,
} from "../domain/types";
import {
  isPausedStatus,
  isStartableCandidateStatus,
  isTerminalCycleStatus,
} from "../domain/lifecycleInvariants";
import type { LifecycleRecommendationEnvelope } from "./lifecycleRecommendation/types";

export type PilotLifecycleProjection = {
  projectId: string;
  activeCycleInstanceId: string | null;
  activeCycle: CycleInstance | null;
  pausedCycles: CycleInstance[];
  /** Startable candidates only (proposed | acknowledged). */
  candidateCycles: CycleInstance[];
  /** Historical superseded — visible, never startable. */
  supersededCycles: CycleInstance[];
  terminalCycles: CycleInstance[];
  /**
   * Selected cycle for CTA surface.
   * Preference: LPS active → single paused → single startable candidate → null (ambiguous).
   * Superseded never selected for canStart; multiple superseded alone do not create ambiguity.
   */
  selectedCycleInstanceId: string | null;
  selectedStatus: CycleInstanceStatus | null;
  selectionAmbiguous: boolean;
  assessment?: FinalizationAssessment | null;
  cta: {
    canStart: boolean;
    canPause: boolean;
    canResume: boolean;
    canFinalize: boolean;
    canCancel: boolean;
  };
  /**
   * Companion — CURRENT Nora lifecycle Recommendations (never eligibility).
   * Recommendation ≠ canFinalize / canStart / HumanDecision.
   */
  currentRecommendations?: LifecycleRecommendationEnvelope[];
  /** Resume reconciliation when selected cycle is paused — never cleared by HD alone. */
  resumeReconciliation?: {
    clean: boolean;
    detailCode?: string | null;
    reason?: string | null;
  } | null;
};

export function projectPilotLifecycle(input: {
  projectId: string;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  assessment?: FinalizationAssessment | null;
  currentRecommendations?: LifecycleRecommendationEnvelope[];
  resumeReconciliation?: PilotLifecycleProjection["resumeReconciliation"];
}): PilotLifecycleProjection {
  const byId = new Map(
    input.cycles.map((c) => [c.cycleInstanceId, c] as const),
  );
  const activeId = input.lpsActiveCycleInstanceId ?? null;
  const activeFromRepo = input.cycles.find((c) => c.status === "active") ?? null;
  const activeCycle =
    (activeId ? byId.get(activeId) ?? null : null) ?? activeFromRepo;

  const pausedCycles = input.cycles.filter((c) => isPausedStatus(c.status));
  const candidateCycles = input.cycles.filter((c) =>
    isStartableCandidateStatus(c.status),
  );
  const supersededCycles = input.cycles.filter(
    (c) => c.status === "superseded",
  );
  const terminalCycles = input.cycles.filter((c) =>
    isTerminalCycleStatus(c.status),
  );

  let selectedCycleInstanceId: string | null = null;
  let selectionAmbiguous = false;

  if (activeCycle) {
    selectedCycleInstanceId = activeCycle.cycleInstanceId;
  } else if (pausedCycles.length === 1) {
    selectedCycleInstanceId = pausedCycles[0]!.cycleInstanceId;
  } else if (pausedCycles.length > 1) {
    selectionAmbiguous = true;
  } else if (candidateCycles.length === 1) {
    selectedCycleInstanceId = candidateCycles[0]!.cycleInstanceId;
  } else if (candidateCycles.length > 1) {
    selectionAmbiguous = true;
  }

  const selected = selectedCycleInstanceId
    ? byId.get(selectedCycleInstanceId) ?? null
    : null;
  const selectedStatus = selected?.status ?? null;

  const cta = {
    canStart: Boolean(
      selected && isStartableCandidateStatus(selected.status) && !activeCycle,
    ),
    canPause: Boolean(selected && selected.status === "active"),
    canResume: Boolean(selected && isPausedStatus(selected.status) && !activeCycle),
    canFinalize: Boolean(
      selected &&
        !isTerminalCycleStatus(selected.status) &&
        (selected.status === "active" ||
          selected.status === "paused" ||
          selected.status === "blocked"),
    ),
    canCancel: Boolean(
      selected && !isTerminalCycleStatus(selected.status),
    ),
  };

  return {
    projectId: input.projectId,
    activeCycleInstanceId: activeCycle?.cycleInstanceId ?? activeId,
    activeCycle,
    pausedCycles,
    candidateCycles,
    supersededCycles,
    terminalCycles,
    selectedCycleInstanceId,
    selectedStatus,
    selectionAmbiguous,
    assessment: input.assessment ?? null,
    cta,
    currentRecommendations: input.currentRecommendations ?? [],
    resumeReconciliation: input.resumeReconciliation ?? null,
  };
}
