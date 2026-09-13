/**
 * Option B — durable provenance Observation for greenfield candidate trajectories.
 *
 * Links projectId ↔ source Lifecycle Recommendation ↔ candidate ProjectTrajectory
 * via existing EpistemicItem store. No new table, no ProjectTrajectory field.
 *
 * Authority: none. Not a Recommendation. Not a HumanDecision.
 */
import { randomBytes } from "node:crypto";
import type { ActorReference } from "@/lib/oa/doctrine";
import type { EpistemicItem } from "../../domain/types";
import { getCycleTypeById } from "../../domain/cycleTypeCatalog";

/** Stable Product source for bridge provenance Observations. */
export const CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE =
  "candidate-trajectory-provenance:bridge" as const;

/**
 * System actor for Studio-materialized provenance Observations.
 * Reuses system/none pattern (cf. sys:project-create) — never Pilote / Morris.
 */
export const CANDIDATE_TRAJECTORY_PROVENANCE_ACTOR: ActorReference =
  Object.freeze({
    actorId: "sys:candidate-trajectory-provenance",
    role: "system",
    displayName: "Candidate trajectory provenance",
    authorityLevel: "none",
  });

export const CANDIDATE_TRAJECTORY_PROVENANCE_STATEMENT =
  "Cette trajectoire proposée a été préparée à partir d’une recommandation lifecycle.";

export type CandidateTrajectoryProvenanceStatus =
  | "RESOLVED"
  | "MISSING"
  | "AMBIGUOUS"
  | "INVALID";

export type CandidateTrajectoryProvenanceResolved = {
  status: "RESOLVED";
  provenanceObservationId: string;
  recommendationId: string;
  semanticKey: string;
  targetCycleTypeId: string;
  trajectoryId: string;
  sourceRecommendationEpistemicStatus: EpistemicItem["status"];
};

export type CandidateTrajectoryProvenanceUnresolved = {
  status: Exclude<CandidateTrajectoryProvenanceStatus, "RESOLVED">;
  reason: string;
  trajectoryId: string;
  projectId: string;
  matchingObservationIds?: readonly string[];
};

export type CandidateTrajectoryProvenanceResult =
  | CandidateTrajectoryProvenanceResolved
  | CandidateTrajectoryProvenanceUnresolved;

export function newProvenanceObservationId(): string {
  return `epi:trj-prov-${randomBytes(8).toString("hex")}`;
}

export function buildCandidateTrajectoryProvenanceRelatedObjects(input: {
  projectId: string;
  recommendationId: string;
  trajectoryId: string;
}): string[] {
  return [input.projectId, input.recommendationId, input.trajectoryId];
}

export function buildCandidateTrajectoryProvenanceObservationItem(input: {
  epistemicItemId: string;
  projectId: string;
  recommendationId: string;
  trajectoryId: string;
}): {
  epistemicItemId: string;
  type: "Observation";
  statement: string;
  status: "active";
  source: typeof CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE;
  relatedObjects: string[];
} {
  return {
    epistemicItemId: input.epistemicItemId,
    type: "Observation",
    statement: CANDIDATE_TRAJECTORY_PROVENANCE_STATEMENT,
    status: "active",
    source: CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE,
    relatedObjects: buildCandidateTrajectoryProvenanceRelatedObjects({
      projectId: input.projectId,
      recommendationId: input.recommendationId,
      trajectoryId: input.trajectoryId,
    }),
  };
}

function extractRecommendationIdFromRelatedObjects(
  relatedObjects: readonly string[],
  projectId: string,
  trajectoryId: string,
):
  | { ok: true; recommendationId: string }
  | { ok: false; reason: string } {
  const hasProject = relatedObjects.includes(projectId);
  const hasTrajectory = relatedObjects.includes(trajectoryId);
  if (!hasProject || !hasTrajectory) {
    return { ok: false, reason: "related_objects_missing_project_or_trajectory" };
  }
  const epiRefs = relatedObjects.filter(
    (id) =>
      typeof id === "string" &&
      id.startsWith("epi:") &&
      id !== projectId &&
      id !== trajectoryId,
  );
  if (epiRefs.length === 0) {
    return { ok: false, reason: "related_objects_missing_recommendation_id" };
  }
  if (epiRefs.length > 1) {
    return { ok: false, reason: "related_objects_ambiguous_recommendation_id" };
  }
  return { ok: true, recommendationId: epiRefs[0]! };
}

/**
 * Exact restart-safe reconstruction:
 * trajectoryId → provenance Observation → recommendationId → LR payload.
 * Never uses step.label reverse-mapping.
 */
export function resolveCandidateTrajectoryProvenance(input: {
  projectId: string;
  trajectoryId: string;
  epistemicItems: readonly EpistemicItem[];
}): CandidateTrajectoryProvenanceResult {
  const { projectId, trajectoryId, epistemicItems } = input;
  const unresolved = (
    status: Exclude<CandidateTrajectoryProvenanceStatus, "RESOLVED">,
    reason: string,
    matchingObservationIds?: readonly string[],
  ): CandidateTrajectoryProvenanceUnresolved => ({
    status,
    reason,
    trajectoryId,
    projectId,
    matchingObservationIds,
  });

  if (!projectId?.startsWith("prj:") || !trajectoryId?.startsWith("trj:")) {
    return unresolved("INVALID", "project_or_trajectory_id_invalid");
  }

  const matches = epistemicItems.filter((item) => {
    if (item.type !== "Observation") return false;
    if (item.status !== "active") return false;
    if (item.source !== CANDIDATE_TRAJECTORY_PROVENANCE_SOURCE) return false;
    const related = item.relatedObjects ?? [];
    return related.includes(projectId) && related.includes(trajectoryId);
  });

  if (matches.length === 0) {
    return unresolved("MISSING", "provenance_observation_absent");
  }
  if (matches.length > 1) {
    return unresolved(
      "AMBIGUOUS",
      "multiple_provenance_observations",
      matches.map((m) => m.epistemicItemId),
    );
  }

  const observation = matches[0]!;
  const extracted = extractRecommendationIdFromRelatedObjects(
    observation.relatedObjects ?? [],
    projectId,
    trajectoryId,
  );
  if (!extracted.ok) {
    return unresolved("INVALID", extracted.reason, [observation.epistemicItemId]);
  }

  const recommendation = epistemicItems.find(
    (item) => item.epistemicItemId === extracted.recommendationId,
  );
  if (!recommendation) {
    return unresolved(
      "INVALID",
      "source_recommendation_absent",
      [observation.epistemicItemId],
    );
  }
  if (recommendation.type !== "Recommendation") {
    return unresolved(
      "INVALID",
      "source_not_recommendation",
      [observation.epistemicItemId],
    );
  }

  const lr = recommendation.lifecycleRecommendation;
  if (!lr) {
    return unresolved(
      "INVALID",
      "source_missing_lifecycle_recommendation_payload",
      [observation.epistemicItemId],
    );
  }
  if (lr.intent !== "NEXT_CYCLE") {
    return unresolved(
      "INVALID",
      "source_intent_not_next_cycle",
      [observation.epistemicItemId],
    );
  }
  if (!lr.semanticKey || typeof lr.semanticKey !== "string") {
    return unresolved(
      "INVALID",
      "source_semantic_key_missing",
      [observation.epistemicItemId],
    );
  }
  if (!lr.targetCycleTypeId || typeof lr.targetCycleTypeId !== "string") {
    return unresolved(
      "INVALID",
      "source_target_cycle_type_missing",
      [observation.epistemicItemId],
    );
  }
  if (lr.basisRefs?.projectId && lr.basisRefs.projectId !== projectId) {
    return unresolved(
      "INVALID",
      "source_project_mismatch",
      [observation.epistemicItemId],
    );
  }
  // Historical identity only — catalog entry must exist as a known id.
  // Current selectability (lifecycleStatus === active) is a SEPARATE HD gate.
  const catalog = getCycleTypeById(lr.targetCycleTypeId);
  if (!catalog) {
    return unresolved(
      "INVALID",
      "source_target_cycle_type_not_canonical",
      [observation.epistemicItemId],
    );
  }

  return {
    status: "RESOLVED",
    provenanceObservationId: observation.epistemicItemId,
    recommendationId: recommendation.epistemicItemId,
    semanticKey: lr.semanticKey,
    targetCycleTypeId: lr.targetCycleTypeId,
    trajectoryId,
    sourceRecommendationEpistemicStatus: recommendation.status,
  };
}

/**
 * Current selectability of a canonical cycle type for a new Pilote decision.
 * Distinct from historical provenance RESOLVED.
 */
export function isTargetCycleCurrentlySelectable(
  targetCycleTypeId: string,
): boolean {
  const catalog = getCycleTypeById(targetCycleTypeId);
  return Boolean(catalog && catalog.lifecycleStatus === "active");
}
