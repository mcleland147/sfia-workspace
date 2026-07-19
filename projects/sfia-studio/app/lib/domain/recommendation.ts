/**
 * Copilot recommendation — advisory only, never a Morris gate decision.
 */
export type RecommendationKind =
  | "cycle-profile"
  | "scope"
  | "risk"
  | "next-step";

export interface Recommendation {
  readonly kind: "recommendation";
  id: string;
  title: string;
  summary: string;
  confidence: number;
  source: "copilot";
}

export function isRecommendation(value: unknown): value is Recommendation {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as Recommendation).kind === "recommendation"
  );
}
