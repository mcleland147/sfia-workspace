/**
 * Materiality classification for LifecycleRecommendationBasisRefs.
 *
 * A MATERIAL — fingerprinted; write/read must reconstruct identically.
 * B ELIGIBILITY — NOT Recommendation material (Recommendation ≠ eligibility).
 * C AUDIT-ONLY — schema may retain; excluded from material fingerprint.
 * D REMOVE/UNUSED — not used.
 *
 * Classification (CORR-DELIVERY-03):
 * | Field | Class | Notes |
 * | projectId | A | binding |
 * | subjectCycleInstanceId/Status | A | FINALIZE; optional subject on NEXT |
 * | targetCycleInstanceId/TypeId | A | NEXT_CYCLE |
 * | lpsActiveCycleInstanceId/lpsVersion | A | LPS binding |
 * | doctrinePackageId/Version/Digest | A | doctrine-sensitive basis |
 * | trajectoryId/Version/Status | A | trajectory identity |
 * | decisionFingerprint | A | relevant accepted HD |
 * | evidenceFingerprint | A | FINALIZE only |
 * | blockerFingerprint | A | blocking reservations |
 * | reservationBlockingCount | A | derived from blockers (parity aid) |
 * | finalizeAccepted | B | eligibility assessor — excluded from fingerprint |
 * | resumeClean | B | R10 resume eligibility — excluded from fingerprint |
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { CycleInstance, ProjectTrajectory } from "../../domain/types";
import { isCurrentHumanDecisionStatus } from "../assessFinalization";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationIntent,
} from "./types";

export type ResolveCanonicalLifecycleRecommendationBasisInput = {
  intent: LifecycleRecommendationIntent;
  projectId: string;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion: number | null | undefined;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  blockingReservationStatements: readonly string[];
};

export function lifecycleDecisionFingerprint(
  decisions: readonly HumanDecision[],
  projectId: string,
  cycleInstanceId: string | null,
): string {
  const relevant = decisions
    .filter(
      (d) =>
        d.projectId === projectId &&
        (!cycleInstanceId ||
          !d.cycleInstanceId ||
          d.cycleInstanceId === cycleInstanceId) &&
        isCurrentHumanDecisionStatus(d.status),
    )
    .map((d) => `${d.decisionId}:${d.status}:${d.subject}`)
    .sort();
  return relevant.join("|") || "none";
}

export function lifecycleEvidenceFingerprint(
  evidence: readonly Evidence[],
  cycleInstanceId: string | null,
): string {
  const relevant = evidence
    .filter(
      (e) =>
        !cycleInstanceId ||
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

export function lifecycleBlockerFingerprint(
  statements: readonly string[],
): string {
  return statements.slice().sort().join("|") || "none";
}

/**
 * Canonical intent-scoped MATERIAL basis only.
 * finalizeAccepted / resumeClean always null (eligibility, not Recommendation material).
 */
export function resolveCanonicalLifecycleRecommendationBasis(
  input: ResolveCanonicalLifecycleRecommendationBasisInput,
): LifecycleRecommendationBasisRefs {
  const subject = input.subjectCycleInstanceId
    ? input.cycles.find((c) => c.cycleInstanceId === input.subjectCycleInstanceId)
    : undefined;

  const scopeCycleId =
    input.intent === "FINALIZE_CURRENT_CYCLE"
      ? input.subjectCycleInstanceId
      : input.subjectCycleInstanceId ?? input.targetCycleInstanceId;

  const decisionFingerprint = lifecycleDecisionFingerprint(
    input.decisions,
    input.projectId,
    scopeCycleId,
  );
  const blockerFingerprint = lifecycleBlockerFingerprint(
    input.blockingReservationStatements,
  );

  const base: LifecycleRecommendationBasisRefs = {
    projectId: input.projectId,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    subjectCycleStatus: subject?.status ?? null,
    targetCycleInstanceId: input.targetCycleInstanceId,
    targetCycleTypeId: input.targetCycleTypeId,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
    lpsVersion: input.lpsVersion ?? null,
    doctrinePackageId: input.doctrinePackageId ?? null,
    doctrinePackageVersion: input.doctrinePackageVersion ?? null,
    doctrinePackageDigest: input.doctrinePackageDigest ?? null,
    trajectoryId: input.trajectory?.trajectoryId ?? null,
    trajectoryVersion: input.trajectory?.version ?? null,
    trajectoryStatus: input.trajectory?.status ?? null,
    decisionFingerprint,
    blockerFingerprint,
    reservationBlockingCount: input.blockingReservationStatements.length,
    // B — eligibility; never material Recommendation currentness
    finalizeAccepted: null,
    resumeClean: null,
  };

  if (input.intent === "FINALIZE_CURRENT_CYCLE") {
    return {
      ...base,
      evidenceFingerprint: lifecycleEvidenceFingerprint(
        input.evidence,
        input.subjectCycleInstanceId,
      ),
    };
  }

  return {
    ...base,
    evidenceFingerprint: null,
  };
}
