/**
 * CORR-PROOF-05 — server-owned PAUSE/RESUME reconciliation (no caller SoT).
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type {
  CycleInstance,
  PauseReconciliationSnapshot,
  ProjectTrajectory,
} from "../domain/types";
import { isCurrentHumanDecisionStatus } from "./assessFinalization";

export type BuildPauseSnapshotInput = {
  pausedAt: string;
  lpsVersion: number;
  lpsActiveCycleInstanceId: string | null | undefined;
  objective: string;
  context: string;
  scope: string;
  doctrinePackageId?: string;
  doctrinePackageVersion?: string;
  doctrinePackageDigest?: string;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
  blockerSnapshotState: "KNOWN" | "UNKNOWN";
  blockerSnapshotReason?: string;
  projectId: string;
  cycleInstanceId: string;
};

export function trajectoryFingerprint(
  trajectory: ProjectTrajectory | null,
): string | null {
  if (!trajectory) return null;
  return `${trajectory.trajectoryId}@v${trajectory.version}:${trajectory.status}:${trajectory.steps
    .map((s) => `${s.stepId}:${s.state}`)
    .join(",")}`;
}

function decisionFingerprint(
  decisions: readonly HumanDecision[],
  projectId: string,
  cycleInstanceId: string,
): string {
  const relevant = decisions
    .filter(
      (d) =>
        d.projectId === projectId &&
        (!d.cycleInstanceId || d.cycleInstanceId === cycleInstanceId) &&
        isCurrentHumanDecisionStatus(d.status),
    )
    .map((d) => `${d.decisionId}:${d.status}:${d.subject}`)
    .sort();
  return relevant.join("|") || "none";
}

function evidenceFingerprint(
  evidence: readonly Evidence[],
  cycleInstanceId: string,
): string {
  const relevant = evidence
    .filter(
      (e) =>
        !e.bindings?.cycleInstanceId ||
        e.bindings.cycleInstanceId === cycleInstanceId,
    )
    .map(
      (e) =>
        `${e.evidenceId}:${e.status}:${e.availability ?? ""}:${e.freshness ?? ""}`,
    )
    .sort();
  return relevant.join("|") || "none";
}

export function buildPauseReconciliationSnapshot(
  input: BuildPauseSnapshotInput,
): PauseReconciliationSnapshot {
  return {
    pausedAt: input.pausedAt,
    lpsVersion: input.lpsVersion,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
    objective: input.objective,
    context: input.context,
    scope: input.scope,
    doctrinePackageId: input.doctrinePackageId,
    doctrinePackageVersion: input.doctrinePackageVersion,
    doctrinePackageDigest: input.doctrinePackageDigest,
    trajectoryId: input.trajectory?.trajectoryId ?? null,
    trajectoryVersion: input.trajectory?.version ?? null,
    trajectoryFingerprint: trajectoryFingerprint(input.trajectory),
    currentDecisionFingerprint: decisionFingerprint(
      input.decisions,
      input.projectId,
      input.cycleInstanceId,
    ),
    evidenceFingerprint: evidenceFingerprint(
      input.evidence,
      input.cycleInstanceId,
    ),
    blockerFingerprint:
      input.blockerSnapshotState === "UNKNOWN"
        ? null
        : (input.blockingReservationStatements ?? []).slice().sort().join("|") ||
          "none",
    blockerSnapshotState: input.blockerSnapshotState,
    blockerSnapshotReason: input.blockerSnapshotReason,
  };
}

export type ResumeReconciliationInput = {
  cycle: CycleInstance;
  projectId: string;
  lpsReadable: boolean;
  lpsVersion: number;
  lpsActiveCycleInstanceId: string | null | undefined;
  objective: string;
  context: string;
  scope: string;
  doctrinePackageId?: string;
  doctrinePackageVersion?: string;
  doctrinePackageDigest?: string;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
  /** Current blocker source unreadable → fail-closed drift. */
  blockerSourceUnreadable?: boolean;
  siblingActiveExists: boolean;
  /** Caller hint — forces drift when true; never proves clean when false. */
  callerMaterialDriftHint?: boolean;
};

export type ResumeReconciliationResult = {
  clean: boolean;
  driftReasons: string[];
  requiresReplanHumanDecision: boolean;
};

export function assessResumeReconciliation(
  input: ResumeReconciliationInput,
): ResumeReconciliationResult {
  const driftReasons: string[] = [];

  if (input.callerMaterialDriftHint === true) {
    driftReasons.push("caller_material_drift_hint");
  }

  const snap = input.cycle.pauseReconciliation;
  if (!snap) {
    driftReasons.push("pause_snapshot_missing");
  }

  if (!input.lpsReadable) {
    driftReasons.push("lps_unreadable");
  }

  if (input.siblingActiveExists) {
    driftReasons.push("another_active_exists");
  }

  if (
    input.lpsActiveCycleInstanceId &&
    input.lpsActiveCycleInstanceId !== input.cycle.cycleInstanceId
  ) {
    driftReasons.push("lps_active_pointer_elsewhere");
  }

  if (input.blockerSourceUnreadable) {
    driftReasons.push("blocker_source_unreadable");
  }

  if (snap) {
    if (snap.objective !== input.objective) driftReasons.push("objective_drift");
    if (snap.context !== input.context) driftReasons.push("context_drift");
    if (snap.scope !== input.scope) driftReasons.push("scope_drift");

    if (
      (snap.doctrinePackageId ?? "") !== (input.doctrinePackageId ?? "") ||
      (snap.doctrinePackageVersion ?? "") !==
        (input.doctrinePackageVersion ?? "") ||
      (snap.doctrinePackageDigest ?? "") !== (input.doctrinePackageDigest ?? "")
    ) {
      driftReasons.push("doctrine_pin_drift");
    }

    const currentTrajFp = trajectoryFingerprint(input.trajectory);
    if ((snap.trajectoryFingerprint ?? null) !== currentTrajFp) {
      driftReasons.push("trajectory_material_drift");
    }

    const currentDecFp = decisionFingerprint(
      input.decisions,
      input.projectId,
      input.cycle.cycleInstanceId,
    );
    if ((snap.currentDecisionFingerprint ?? "none") !== currentDecFp) {
      driftReasons.push("human_decision_material_drift");
    }

    const currentEvFp = evidenceFingerprint(
      input.evidence,
      input.cycle.cycleInstanceId,
    );
    if ((snap.evidenceFingerprint ?? "none") !== currentEvFp) {
      const stale = input.evidence.some(
        (e) =>
          (!e.bindings?.cycleInstanceId ||
            e.bindings.cycleInstanceId === input.cycle.cycleInstanceId) &&
          (e.status === "stale" ||
            e.status === "unavailable" ||
            e.availability === "unavailable"),
      );
      if (stale || currentEvFp !== (snap.evidenceFingerprint ?? "none")) {
        driftReasons.push("evidence_freshness_drift");
      }
    }

    // Blocker baseline closed-world (#3B): ONLY explicit KNOWN may compare.
    // Missing/undefined/malformed/UNKNOWN → fail-closed (legacy snapshots included).
    if (snap.blockerSnapshotState !== "KNOWN") {
      driftReasons.push("blocker_baseline_unknown");
    } else if (!input.blockerSourceUnreadable) {
      const blockerFp =
        (input.blockingReservationStatements ?? []).slice().sort().join("|") ||
        "none";
      if ((snap.blockerFingerprint ?? "none") !== blockerFp) {
        driftReasons.push("blocker_introduced_or_changed");
      }
    }
  }

  // Deduplicate
  const unique = [...new Set(driftReasons)];
  return {
    clean: unique.length === 0,
    driftReasons: unique,
    requiresReplanHumanDecision: unique.length > 0,
  };
}
