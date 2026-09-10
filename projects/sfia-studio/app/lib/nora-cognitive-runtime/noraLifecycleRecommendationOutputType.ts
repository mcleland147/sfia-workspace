import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";
import { isExplicitCycleQualificationSignals } from "@/lib/oa/cycle/application/lifecycleRecommendation/qualificationSignals";

const QUALIFICATION_SIGNALS_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: [
    "structuralChange",
    "securityImpact",
    "architectureImpact",
    "dataImpact",
    "irreversible",
    "lowRiskBounded",
  ],
  properties: {
    structuralChange: { type: "boolean" as const },
    securityImpact: { type: "boolean" as const },
    architectureImpact: { type: "boolean" as const },
    dataImpact: { type: "boolean" as const },
    irreversible: { type: "boolean" as const },
    lowRiskBounded: { type: "boolean" as const },
  },
};

/**
 * Agents SDK outputType for Lifecycle Recommendation candidates.
 * Same Nora Runner path — no second model call / prose parser.
 * D-GF-START-01: qualificationSignals (object | null) on the same turn.
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
      "qualificationSignals",
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
      qualificationSignals: {
        anyOf: [QUALIFICATION_SIGNALS_SCHEMA, { type: "null" as const }],
      },
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
  if (
    !(
      o.qualificationSignals === null ||
      isExplicitCycleQualificationSignals(o.qualificationSignals)
    )
  ) {
    return false;
  }
  return true;
}
