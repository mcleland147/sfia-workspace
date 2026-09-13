/**
 * Pilote-facing Lifecycle Recommendation materialization notices (D-RB-BOOT-03).
 * Client-safe — no OA / Node imports.
 */

export const LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE =
  "La prochaine étape a été recommandée, mais Studio n'a pas pu l'enregistrer. Aucun cycle n'a été ouvert." as const;

export function lifecycleRecommendationMaterializeFailurePiloteNotice(input: {
  recommendationAttempted: boolean;
  materialized: boolean | null | undefined;
  code: string | null | undefined;
}): string | null {
  if (!input.recommendationAttempted) return null;
  if (input.materialized === true) return null;
  if (!input.code) return null;
  return LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE;
}
