import { createHash } from "node:crypto";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationIntent,
} from "./types";
import { LIFECYCLE_RECOMMENDATION_INTENTS } from "./types";

export function isLifecycleRecommendationIntent(
  value: unknown,
): value is LifecycleRecommendationIntent {
  return (
    typeof value === "string" &&
    (LIFECYCLE_RECOMMENDATION_INTENTS as readonly string[]).includes(value)
  );
}

/**
 * Deterministic fingerprint over MATERIAL Recommendation basis only.
 * Excludes eligibility fields finalizeAccepted / resumeClean (Recommendation ≠ eligibility).
 */
export function computeBasisFingerprint(
  refs: LifecycleRecommendationBasisRefs,
): string {
  const canonical = JSON.stringify({
    projectId: refs.projectId,
    subjectCycleInstanceId: refs.subjectCycleInstanceId ?? null,
    subjectCycleStatus: refs.subjectCycleStatus ?? null,
    targetCycleInstanceId: refs.targetCycleInstanceId ?? null,
    targetCycleTypeId: refs.targetCycleTypeId ?? null,
    lpsActiveCycleInstanceId: refs.lpsActiveCycleInstanceId ?? null,
    lpsVersion: refs.lpsVersion ?? null,
    trajectoryId: refs.trajectoryId ?? null,
    trajectoryVersion: refs.trajectoryVersion ?? null,
    trajectoryStatus: refs.trajectoryStatus ?? null,
    reservationBlockingCount: refs.reservationBlockingCount ?? null,
    doctrinePackageId: refs.doctrinePackageId ?? null,
    doctrinePackageVersion: refs.doctrinePackageVersion ?? null,
    doctrinePackageDigest: refs.doctrinePackageDigest ?? null,
    decisionFingerprint: refs.decisionFingerprint ?? null,
    evidenceFingerprint: refs.evidenceFingerprint ?? null,
    blockerFingerprint: refs.blockerFingerprint ?? null,
  });
  return createHash("sha256").update(canonical).digest("hex");
}

export function computeSemanticKey(input: {
  projectId: string;
  intent: LifecycleRecommendationIntent;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
}): string {
  const raw = [
    input.projectId,
    input.intent,
    input.subjectCycleInstanceId ?? "",
    input.targetCycleInstanceId ?? "",
    input.targetCycleTypeId ?? "",
  ].join("|");
  return createHash("sha256").update(raw).digest("hex").slice(0, 32);
}

/** Genuine domain-object references only — never machine-state prefixes. */
export function buildGenuineRelatedObjects(input: {
  projectId: string;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
}): string[] {
  const out: string[] = [input.projectId];
  if (input.subjectCycleInstanceId) out.push(input.subjectCycleInstanceId);
  if (input.targetCycleInstanceId) out.push(input.targetCycleInstanceId);
  return out;
}

export function candidateFromStructuredOutput(
  output: LifecycleRecommendationCandidate,
): LifecycleRecommendationCandidate {
  return {
    intent: output.intent,
    statement: output.statement.trim(),
    subjectCycleInstanceId: output.subjectCycleInstanceId ?? null,
    targetCycleInstanceId: output.targetCycleInstanceId ?? null,
    targetCycleTypeId: output.targetCycleTypeId ?? null,
    rationale: output.rationale ?? null,
    qualificationSignals:
      output.qualificationSignals === undefined
        ? undefined
        : output.qualificationSignals === null
          ? null
          : { ...output.qualificationSignals },
  };
}
