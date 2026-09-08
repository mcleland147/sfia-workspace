import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";

/**
 * Agents SDK outputType for Lifecycle Recommendation candidates.
 * Same Nora Runner path — no second model call / prose parser.
 */
export const NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE = {
  type: "json_schema" as const,
  name: "nora_lifecycle_recommendation",
  strict: true,
  schema: {
    type: "object" as const,
    additionalProperties: false as const,
    required: [
      "intent",
      "statement",
      "subjectCycleInstanceId",
      "targetCycleInstanceId",
      "targetCycleTypeId",
      "rationale",
      "authority",
      "isHumanDecision",
    ],
    properties: {
      intent: {
        type: "string" as const,
        enum: ["FINALIZE_CURRENT_CYCLE", "NEXT_CYCLE"],
      },
      statement: { type: "string" as const },
      subjectCycleInstanceId: { type: ["string", "null"] as const },
      targetCycleInstanceId: { type: ["string", "null"] as const },
      targetCycleTypeId: { type: ["string", "null"] as const },
      rationale: { type: ["string", "null"] as const },
      authority: { type: "string" as const, enum: ["none"] },
      isHumanDecision: { type: "boolean" as const, enum: [false] },
    },
  },
};

export function isNoraLifecycleRecommendationStructuredOutput(
  value: unknown,
): value is NoraLifecycleRecommendationStructuredOutput {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (o.intent !== "FINALIZE_CURRENT_CYCLE" && o.intent !== "NEXT_CYCLE") {
    return false;
  }
  if (typeof o.statement !== "string") return false;
  if (o.authority !== "none") return false;
  if (o.isHumanDecision !== false) return false;
  return true;
}
