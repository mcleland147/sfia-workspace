import type {
  EpistemicItem,
  EpistemicLifecycleRecommendation,
  ExplicitCycleQualificationSignals,
  ProvenanceRecord,
} from "../../domain/types";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import {
  buildGenuineRelatedObjects,
  computeBasisFingerprint,
  computeSemanticKey,
} from "./basisFingerprint";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationEnvelope,
} from "./types";
import type { ValidateLifecycleRecommendationResult } from "./validateLifecycleRecommendation";
import { parseExplicitQualificationSignals } from "./qualificationSignals";

export function lifecycleRecommendationEpistemicId(input: {
  projectId: string;
  semanticKey: string;
  producedAt: string;
}): string {
  const slug = input.semanticKey.slice(0, 16);
  const ts = input.producedAt.replace(/[^0-9A-Za-z]/g, "").slice(0, 20);
  return `epi:lr:${slug}:${ts}`;
}

export function buildPersistedLifecycleRecommendation(input: {
  intent: EpistemicLifecycleRecommendation["intent"];
  basisRefs: LifecycleRecommendationBasisRefs;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  projectId: string;
  qualificationSignals?: ExplicitCycleQualificationSignals;
}): EpistemicLifecycleRecommendation {
  const basisFingerprint = computeBasisFingerprint(input.basisRefs);
  const semanticKey = computeSemanticKey({
    projectId: input.projectId,
    intent: input.intent,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    targetCycleInstanceId: input.targetCycleInstanceId,
    targetCycleTypeId: input.targetCycleTypeId,
  });
  return {
    intent: input.intent,
    basisFingerprint,
    basisRefs: { ...input.basisRefs, projectId: input.projectId },
    semanticKey,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    targetCycleInstanceId: input.targetCycleInstanceId,
    targetCycleTypeId: input.targetCycleTypeId,
    authority: "none",
    ...(input.qualificationSignals
      ? { qualificationSignals: { ...input.qualificationSignals } }
      : {}),
  };
}

export function encodeLifecycleRecommendationItem(input: {
  recommendationId: string;
  projectId: string;
  validated: Extract<ValidateLifecycleRecommendationResult, { ok: true }>;
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  supersedesRecommendationId?: string | null;
  provenance?: ProvenanceRecord;
}): EpistemicItem {
  const persisted = buildPersistedLifecycleRecommendation({
    intent: input.validated.intent,
    basisRefs: input.basisRefs,
    subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
    targetCycleInstanceId: input.validated.targetCycleInstanceId,
    targetCycleTypeId: input.validated.targetCycleTypeId,
    projectId: input.projectId,
    qualificationSignals: input.validated.qualificationSignals,
  });
  return {
    schemaVersion: "0.1.0-oa",
    epistemicItemId: input.recommendationId,
    type: "Recommendation",
    statement: input.validated.statement,
    status: "active",
    source: "lifecycle-recommendation:nora",
    createdBy: structuredClone(input.createdBy),
    createdAt: input.producedAt,
    supersedes: input.supersedesRecommendationId ?? undefined,
    relatedObjects: buildGenuineRelatedObjects({
      projectId: input.projectId,
      subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
      targetCycleInstanceId: input.validated.targetCycleInstanceId,
    }),
    provenance: input.provenance
      ? structuredClone(input.provenance)
      : undefined,
    lifecycleRecommendation: persisted,
  };
}

export function tryDecodeLifecycleRecommendationItem(
  item: EpistemicItem,
  derivedCurrentness: LifecycleRecommendationEnvelope["derivedCurrentness"],
): LifecycleRecommendationEnvelope | null {
  if (item.type !== "Recommendation") return null;
  if (item.source !== "lifecycle-recommendation:nora") return null;
  const persisted = item.lifecycleRecommendation;
  if (!persisted || persisted.authority !== "none") return null;
  if (!persisted.basisFingerprint || !persisted.semanticKey) return null;

  const qualificationSignals = parseExplicitQualificationSignals(
    persisted.qualificationSignals,
  );

  return {
    recommendationId: item.epistemicItemId,
    projectId: persisted.basisRefs.projectId,
    intent: persisted.intent,
    subjectCycleInstanceId: persisted.subjectCycleInstanceId,
    targetCycleInstanceId: persisted.targetCycleInstanceId,
    targetCycleTypeId: persisted.targetCycleTypeId,
    producer: "nora",
    producedAt: item.createdAt,
    statement: item.statement,
    basisFingerprint: persisted.basisFingerprint,
    basisRefs: persisted.basisRefs,
    semanticKey: persisted.semanticKey,
    authority: "none",
    isHumanDecision: false,
    doesNotActivateCycle: true,
    doesNotFinalize: true,
    doesNotCreateHumanDecision: true,
    epistemicStatus: item.status,
    supersedesRecommendationId: item.supersedes ?? null,
    derivedCurrentness,
    ...(qualificationSignals ? { qualificationSignals } : {}),
  };
}

export async function materializeLifecycleRecommendation(input: {
  updateEpistemicState: UpdateEpistemicState;
  projectId: string;
  validated: Extract<ValidateLifecycleRecommendationResult, { ok: true }>;
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  existingItems: readonly EpistemicItem[];
  provenance?: ProvenanceRecord;
  correlationId?: string;
}): Promise<
  | { ok: true; item: EpistemicItem; supersededId: string | null }
  | { ok: false; code: string; reason: string }
> {
  const semanticKey = computeSemanticKey({
    projectId: input.projectId,
    intent: input.validated.intent,
    subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
    targetCycleInstanceId: input.validated.targetCycleInstanceId,
    targetCycleTypeId: input.validated.targetCycleTypeId,
  });

  const priorActive = input.existingItems.find((e) => {
    if (e.type !== "Recommendation" || e.status !== "active") return false;
    if (e.source !== "lifecycle-recommendation:nora") return false;
    return e.lifecycleRecommendation?.semanticKey === semanticKey;
  });

  const recommendationId = lifecycleRecommendationEpistemicId({
    projectId: input.projectId,
    semanticKey,
    producedAt: input.producedAt,
  });

  const item = encodeLifecycleRecommendationItem({
    recommendationId,
    projectId: input.projectId,
    validated: input.validated,
    basisRefs: input.basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    supersedesRecommendationId: priorActive?.epistemicItemId ?? null,
    provenance: input.provenance,
  });

  const result = await input.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: input.createdBy,
    correlationId: input.correlationId,
    items: [
      {
        epistemicItemId: item.epistemicItemId,
        type: "Recommendation",
        statement: item.statement,
        status: "active",
        source: item.source,
        supersedes: item.supersedes,
        relatedObjects: item.relatedObjects,
        provenance: item.provenance,
        lifecycleRecommendation: item.lifecycleRecommendation,
      },
    ],
  });

  if (!result.ok) {
    return {
      ok: false,
      code: result.error.detailCode,
      reason: result.error.internalCauseRef ?? "materialize_failed",
    };
  }

  return {
    ok: true,
    item,
    supersededId: priorActive?.epistemicItemId ?? null,
  };
}
