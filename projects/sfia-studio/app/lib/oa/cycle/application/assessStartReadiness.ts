/**
 * CORR-PROOF-05 — pure StartReadiness assessment (no StartLedger).
 * Caller requiresTrajectoryHumanDecision is never sole SoT.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type {
  CycleInstance,
  ProjectTrajectory,
  StartReadinessAssessment,
} from "../domain/types";
import { isStartableCandidateStatus } from "../domain/lifecycleInvariants";
import {
  isAcceptedStartTrajectoryDecision,
  startTrajectorySubjectFor,
} from "./assessFinalization";

export type AssessStartReadinessInput = {
  assessedAt: string;
  projectOk: boolean;
  cycle: CycleInstance | null;
  projectId: string;
  lpsReadable: boolean;
  lpsActiveCycleInstanceId: string | null | undefined;
  siblingActiveExists: boolean;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  /** Optional decisionId supplied by caller — validated, never trusted alone. */
  decisionId?: string;
  blockingReservationStatements?: readonly string[];
  /** Fail-closed when epistemic/blocker reader is unavailable or throws. */
  blockerSourceUnreadable?: boolean;
  doctrineReadable: boolean;
  /**
   * When true, durable context shows an undecided structuring trajectory choice
   * that START must consume (candidate trajectory / undecided amendment).
   */
  structuringTrajectoryChoiceOpen?: boolean;
};

function trajectoryFingerprint(t: ProjectTrajectory): string {
  return `${t.trajectoryId}@v${t.version}:${t.status}:${t.steps
    .map((s) => `${s.stepId}:${s.state}`)
    .join(",")}`;
}

export function assessStartReadiness(
  input: AssessStartReadinessInput,
): StartReadinessAssessment {
  const blockers: string[] = [];

  if (!input.projectOk) blockers.push("project_missing");
  if (!input.cycle) {
    blockers.push("cycle_missing");
  } else {
    if (input.cycle.projectId !== input.projectId) {
      blockers.push("cycle_project_mismatch");
    }
    if (!isStartableCandidateStatus(input.cycle.status)) {
      blockers.push(`cycle_not_candidate:${input.cycle.status}`);
    }
    if (!input.cycle.cycleTypeId?.trim()) {
      blockers.push("cycle_type_missing");
    }
  }

  if (!input.lpsReadable) blockers.push("lps_unreadable");
  if (input.siblingActiveExists) blockers.push("another_active_exists");
  if (
    input.lpsActiveCycleInstanceId &&
    input.cycle &&
    input.lpsActiveCycleInstanceId !== input.cycle.cycleInstanceId
  ) {
    blockers.push("lps_active_pointer_elsewhere");
  }

  if (!input.doctrineReadable) blockers.push("doctrine_unreadable");

  // Product Completion: usable current trajectory required for START compatibility
  if (!input.trajectory) {
    blockers.push("trajectory_missing_or_unreadable");
  } else if (
    input.trajectory.status === "stale" ||
    input.trajectory.status === "superseded"
  ) {
    blockers.push(`trajectory_incompatible:${input.trajectory.status}`);
  }

  const openDeps = (input.trajectory?.steps ?? []).filter(
    (s) => s.state === "blocked",
  );
  if (openDeps.length > 0) {
    blockers.push("trajectory_entry_blocked");
  }

  if (input.blockerSourceUnreadable === true) {
    blockers.push("blocker_source_unreadable");
  }

  const blockingReservations = input.blockingReservationStatements ?? [];
  if (blockingReservations.length > 0) {
    blockers.push("blocking_reservations");
  }

  const structuringOpen =
    input.structuringTrajectoryChoiceOpen === true ||
    input.trajectory?.status === "candidate";

  let requiresTrajectoryHumanDecision = structuringOpen;

  if (requiresTrajectoryHumanDecision) {
    const cycleId = input.cycle?.cycleInstanceId ?? "";
    let hd: HumanDecision | null = null;
    if (input.decisionId) {
      hd =
        input.decisions.find((d) => d.decisionId === input.decisionId) ?? null;
    } else {
      hd =
        input.decisions.find((d) =>
          isAcceptedStartTrajectoryDecision(d, cycleId, input.projectId),
        ) ?? null;
    }
    if (
      !hd ||
      !isAcceptedStartTrajectoryDecision(hd, cycleId, input.projectId)
    ) {
      blockers.push("start_trajectory_hd_missing_or_invalid");
    }
  } else if (input.decisionId) {
    // Arbitrary decisionId must not falsely satisfy when HD not required —
    // but also must not block START. Ignore unless subject matches.
    const hd =
      input.decisions.find((d) => d.decisionId === input.decisionId) ?? null;
    if (
      hd &&
      hd.subject === startTrajectorySubjectFor(input.cycle?.cycleInstanceId ?? "")
    ) {
      requiresTrajectoryHumanDecision = true;
      if (
        !input.cycle ||
        !isAcceptedStartTrajectoryDecision(
          hd,
          input.cycle.cycleInstanceId,
          input.projectId,
        )
      ) {
        blockers.push("start_trajectory_hd_missing_or_invalid");
      }
    }
  }

  void trajectoryFingerprint;

  return {
    ready: blockers.length === 0,
    blockers,
    requiresTrajectoryHumanDecision,
    assessedAt: input.assessedAt,
  };
}
