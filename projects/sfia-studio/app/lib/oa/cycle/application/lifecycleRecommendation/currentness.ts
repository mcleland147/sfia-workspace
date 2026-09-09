import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
} from "../../domain/types";
import { computeBasisFingerprint } from "./basisFingerprint";
import { resolveCanonicalLifecycleRecommendationBasis } from "./resolveCanonicalBasis";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationDerivedCurrentness,
  LifecycleRecommendationEnvelope,
  LifecycleRecommendationIntent,
} from "./types";
import { tryDecodeLifecycleRecommendationItem } from "./materializeLifecycleRecommendation";
import {
  firstFailedRequiredMaterialDimension,
  type LifecycleRecommendationMaterialDimension,
} from "./materialReaderContract";

export function deriveLifecycleRecommendationCurrentness(input: {
  item: EpistemicItem;
  currentBasisRefs: LifecycleRecommendationBasisRefs;
}): LifecycleRecommendationDerivedCurrentness {
  if (input.item.status === "superseded") return "SUPERSEDED";
  if (input.item.status === "rejected" || input.item.status === "resolved") {
    return "STALE";
  }
  const persisted = input.item.lifecycleRecommendation;
  if (!persisted?.basisFingerprint) return "STALE";
  const now = computeBasisFingerprint(input.currentBasisRefs);
  return now === persisted.basisFingerprint ? "CURRENT" : "STALE";
}

export type RebuildLifecycleRecommendationBasisFacts = {
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion?: number | null;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory?: ProjectTrajectory | null;
  decisions?: readonly HumanDecision[];
  evidence?: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
};

/** Exact object equality of material basis (eligibility fields both null). */
export function materialBasisRefsEqual(
  a: LifecycleRecommendationBasisRefs,
  b: LifecycleRecommendationBasisRefs,
): boolean {
  return (
    a.projectId === b.projectId &&
    (a.subjectCycleInstanceId ?? null) === (b.subjectCycleInstanceId ?? null) &&
    (a.subjectCycleStatus ?? null) === (b.subjectCycleStatus ?? null) &&
    (a.targetCycleInstanceId ?? null) === (b.targetCycleInstanceId ?? null) &&
    (a.targetCycleTypeId ?? null) === (b.targetCycleTypeId ?? null) &&
    (a.lpsActiveCycleInstanceId ?? null) ===
      (b.lpsActiveCycleInstanceId ?? null) &&
    (a.lpsVersion ?? null) === (b.lpsVersion ?? null) &&
    (a.doctrinePackageId ?? null) === (b.doctrinePackageId ?? null) &&
    (a.doctrinePackageVersion ?? null) === (b.doctrinePackageVersion ?? null) &&
    (a.doctrinePackageDigest ?? null) === (b.doctrinePackageDigest ?? null) &&
    (a.trajectoryId ?? null) === (b.trajectoryId ?? null) &&
    (a.trajectoryVersion ?? null) === (b.trajectoryVersion ?? null) &&
    (a.trajectoryStatus ?? null) === (b.trajectoryStatus ?? null) &&
    (a.decisionFingerprint ?? null) === (b.decisionFingerprint ?? null) &&
    (a.evidenceFingerprint ?? null) === (b.evidenceFingerprint ?? null) &&
    (a.blockerFingerprint ?? null) === (b.blockerFingerprint ?? null) &&
    (a.reservationBlockingCount ?? null) ===
      (b.reservationBlockingCount ?? null) &&
    (a.finalizeAccepted ?? null) === (b.finalizeAccepted ?? null) &&
    (a.resumeClean ?? null) === (b.resumeClean ?? null)
  );
}

/** Rebuild the same canonical MATERIAL basis from current durable Product facts. */
export function rebuildBasisRefsForRecommendation(input: {
  item: EpistemicItem;
  facts: RebuildLifecycleRecommendationBasisFacts;
}): LifecycleRecommendationBasisRefs | null {
  const persisted = input.item.lifecycleRecommendation;
  if (!persisted) return null;
  const intent = persisted.intent as LifecycleRecommendationIntent;
  return resolveCanonicalLifecycleRecommendationBasis({
    intent,
    projectId: persisted.basisRefs.projectId,
    subjectCycleInstanceId: persisted.subjectCycleInstanceId,
    targetCycleInstanceId: persisted.targetCycleInstanceId,
    targetCycleTypeId: persisted.targetCycleTypeId,
    cycles: input.facts.cycles,
    lpsActiveCycleInstanceId: input.facts.lpsActiveCycleInstanceId,
    lpsVersion: input.facts.lpsVersion ?? null,
    doctrinePackageId: input.facts.doctrinePackageId ?? null,
    doctrinePackageVersion: input.facts.doctrinePackageVersion ?? null,
    doctrinePackageDigest: input.facts.doctrinePackageDigest ?? null,
    trajectory: input.facts.trajectory ?? null,
    decisions: input.facts.decisions ?? [],
    evidence: input.facts.evidence ?? [],
    blockingReservationStatements:
      input.facts.blockingReservationStatements ?? [],
  });
}

export function selectCurrentLifecycleRecommendations(input: {
  items: readonly EpistemicItem[];
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion?: number | null;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory?: ProjectTrajectory | null;
  decisions?: readonly HumanDecision[];
  evidence?: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
  /**
   * Read-side fail-closed: UNKNOWN material readers → omit from CURRENT.
   * Do not substitute []/null as known truth for failed dimensions.
   */
  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
}): LifecycleRecommendationEnvelope[] {
  const failed = input.failedMaterialDimensions ?? new Set();
  const decoded: LifecycleRecommendationEnvelope[] = [];
  for (const item of input.items) {
    if (item.type !== "Recommendation") continue;
    if (item.source !== "lifecycle-recommendation:nora") continue;
    if (!item.lifecycleRecommendation) continue;

    const intent = item.lifecycleRecommendation
      .intent as LifecycleRecommendationIntent;
    if (firstFailedRequiredMaterialDimension(intent, failed)) {
      // Fail closed — do not claim CURRENT when material basis cannot be rebuilt.
      continue;
    }

    const basis = rebuildBasisRefsForRecommendation({
      item,
      facts: {
        cycles: input.cycles,
        lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
        lpsVersion: input.lpsVersion,
        doctrinePackageId: input.doctrinePackageId,
        doctrinePackageVersion: input.doctrinePackageVersion,
        doctrinePackageDigest: input.doctrinePackageDigest,
        trajectory: input.trajectory,
        decisions: input.decisions,
        evidence: input.evidence,
        blockingReservationStatements: input.blockingReservationStatements,
      },
    });
    if (!basis) continue;
    const currentness = deriveLifecycleRecommendationCurrentness({
      item,
      currentBasisRefs: basis,
    });
    const env = tryDecodeLifecycleRecommendationItem(item, currentness);
    if (env) decoded.push({ ...env, basisRefs: basis });
  }

  const current = decoded.filter((d) => d.derivedCurrentness === "CURRENT");
  const byKey = new Map<string, LifecycleRecommendationEnvelope>();
  for (const env of current.sort((a, b) =>
    a.producedAt < b.producedAt ? 1 : -1,
  )) {
    if (!byKey.has(env.semanticKey)) byKey.set(env.semanticKey, env);
  }
  return [...byKey.values()];
}
