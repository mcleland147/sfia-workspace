/**
 * MW3 — derive contradictionAssessment from an untrusted cognitive candidate
 * plus actual available Evidence/source pointers.
 *
 * MODEL CANDIDATE ≠ EVIDENCE POLICY.
 * Promotion policy is Studio-owned. disposeContradiction remains the
 * exclusive candidate vs evidence_backed controller.
 */
import type { ContradictionEvidencePointer } from "./contradictionDisposition";
import type { Mw3ContradictionAssessmentInput } from "./runNoraCognitiveTurn";
import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";

/**
 * Untrusted cognitive candidate — not Evidence, not Truth C, not STOP,
 * and not promotion policy.
 */
export type Mw3ContradictionCandidateSignal = {
  conflictPresent: boolean;
  claimedEvidenceIds: string[];
  governingPremise?: string | null;
  governingPremiseInvalidated?: boolean;
  localImpactOnly?: boolean;
  fabricationAttempt?: boolean;
};

/** Studio-owned MW3 source-vs-source promotion floor. Model cannot lower this. */
export const MW3_STUDIO_REQUIRED_SOURCE_COUNT = 2;

/** Studio-owned MW3 freshness enforcement. Model cannot disable this. */
export const MW3_STUDIO_FRESHNESS_MATTERS = true;

export function deriveMw3ContradictionAssessment(input: {
  candidate: Mw3ContradictionCandidateSignal;
  availablePointers: ContradictionEvidencePointer[];
  /** Current Project identity — trusted context/domain boundary. */
  projectId: string;
  sourceBreadth?: "low" | "medium" | "high" | "unknown" | null;
  trustedSfiaProfile?: string | null;
  strategyClass?: CognitiveStrategyClass | null;
}): Mw3ContradictionAssessmentInput | null {
  if (input.candidate.conflictPresent !== true) {
    return null;
  }

  const projectId = input.projectId.trim();
  if (!projectId) {
    return null;
  }

  const studioPolicy = {
    requiredSourceCount: MW3_STUDIO_REQUIRED_SOURCE_COUNT,
    freshnessMatters: MW3_STUDIO_FRESHNESS_MATTERS,
    requiredDomains: [projectId],
  };

  const availableById = new Map(
    input.availablePointers.map((p) => [p.evidenceId, p]),
  );
  const claimed = uniqueStrings(input.candidate.claimedEvidenceIds);
  const evidencePointers: ContradictionEvidencePointer[] = [];

  if (input.candidate.fabricationAttempt === true) {
    return {
      conflict: {
        conflictPresent: true,
        evidencePointers: [],
        ...studioPolicy,
        fabricationAttempt: true,
        sourceBreadth: input.sourceBreadth ?? null,
        trustedSfiaProfile: input.trustedSfiaProfile ?? null,
        strategyClass: input.strategyClass ?? null,
      },
      governingPremiseInvalidated:
        input.candidate.governingPremiseInvalidated === true,
      governingPremise: input.candidate.governingPremise ?? undefined,
      localImpactOnly: input.candidate.localImpactOnly === true,
    };
  }

  for (const evidenceId of claimed) {
    const found = availableById.get(evidenceId);
    if (found) {
      evidencePointers.push({ ...found });
      continue;
    }
    evidencePointers.push({
      evidenceId,
      sourceId: "unresolved",
      domain: "unknown",
      freshness: "unknown",
      attributable: false,
      fabricated: true,
    });
  }

  return {
    conflict: {
      conflictPresent: true,
      evidencePointers,
      ...studioPolicy,
      sourceBreadth: input.sourceBreadth ?? null,
      trustedSfiaProfile: input.trustedSfiaProfile ?? null,
      strategyClass: input.strategyClass ?? null,
    },
    governingPremiseInvalidated:
      input.candidate.governingPremiseInvalidated === true,
    governingPremise: input.candidate.governingPremise ?? undefined,
    localImpactOnly: input.candidate.localImpactOnly === true,
  };
}

function uniqueStrings(items: string[]): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const raw of items) {
    const id = raw.trim();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push(id);
  }
  return out;
}
