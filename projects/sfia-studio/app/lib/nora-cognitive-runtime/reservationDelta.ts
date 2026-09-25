/**
 * CYCLE-RESERVATION-PILOTING-01 — structured reservationDelta (same Product turn).
 * NEVER Truth C alone; NEVER auto-RESOLVE; applied to EpistemicItem store only.
 */

import type {
  ReservationAttentionBy,
  ReservationFinalizationRelevance,
  ReservationImpact,
  ReservationResolutionBasisType,
} from "@/lib/oa/cycle/domain/reservationSemantics";

export const NORA_RESERVATION_DELTA_OPERATION_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: [
    "op",
    "targetReservationId",
    "title",
    "summary",
    "impact",
    "attentionBy",
    "finalizationRelevance",
    "rationale",
    "resolutionCondition",
    "journalEntryRefs",
    "sourceTurnRefs",
    "basisType",
    "basisRefs",
  ],
  properties: {
    op: {
      type: "string" as const,
      enum: ["CREATE", "UPDATE", "PROPOSE_RESOLUTION"] as const,
    },
    targetReservationId: {
      anyOf: [{ type: "null" as const }, { type: "string" as const }],
    },
    title: {
      anyOf: [{ type: "null" as const }, { type: "string" as const }],
    },
    summary: {
      anyOf: [{ type: "null" as const }, { type: "string" as const }],
    },
    impact: {
      anyOf: [
        { type: "null" as const },
        {
          type: "string" as const,
          enum: ["minor", "moderate", "major"] as const,
        },
      ],
    },
    attentionBy: {
      anyOf: [
        { type: "null" as const },
        {
          type: "string" as const,
          enum: [
            "during_cycle",
            "before_recommendation",
            "before_decision",
            "before_execution_contract",
            "before_finalization",
          ] as const,
        },
      ],
    },
    finalizationRelevance: {
      anyOf: [
        { type: "null" as const },
        {
          type: "string" as const,
          enum: ["none", "may_affect", "must_resolve"] as const,
        },
      ],
    },
    rationale: {
      anyOf: [{ type: "null" as const }, { type: "string" as const }],
    },
    resolutionCondition: {
      anyOf: [{ type: "null" as const }, { type: "string" as const }],
    },
    journalEntryRefs: {
      type: "array" as const,
      items: { type: "string" as const },
    },
    sourceTurnRefs: {
      type: "array" as const,
      items: { type: "string" as const },
    },
    basisType: {
      anyOf: [
        { type: "null" as const },
        {
          type: "string" as const,
          enum: ["clarification", "human_decision", "evidence"] as const,
        },
      ],
    },
    basisRefs: {
      type: "array" as const,
      items: { type: "string" as const },
    },
  },
} as const;

export const NORA_RESERVATION_DELTA_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: ["operations"],
  properties: {
    operations: {
      type: "array" as const,
      items: NORA_RESERVATION_DELTA_OPERATION_SCHEMA,
    },
  },
} as const;

export type NoraReservationDeltaOperationStructured = {
  op: "CREATE" | "UPDATE" | "PROPOSE_RESOLUTION";
  targetReservationId: string | null;
  title: string | null;
  summary: string | null;
  impact: ReservationImpact | null;
  attentionBy: ReservationAttentionBy | null;
  finalizationRelevance: ReservationFinalizationRelevance | null;
  rationale: string | null;
  resolutionCondition: string | null;
  journalEntryRefs: string[];
  sourceTurnRefs: string[];
  basisType: ReservationResolutionBasisType | null;
  basisRefs: string[];
};

export type NoraReservationDeltaStructured = {
  operations: NoraReservationDeltaOperationStructured[];
};

const IMPACTS = new Set(["minor", "moderate", "major"]);
const ATTENTIONS = new Set([
  "during_cycle",
  "before_recommendation",
  "before_decision",
  "before_execution_contract",
  "before_finalization",
]);
const FINALIZATION = new Set(["none", "may_affect", "must_resolve"]);
const BASIS = new Set(["clarification", "human_decision", "evidence"]);
const OPS = new Set(["CREATE", "UPDATE", "PROPOSE_RESOLUTION"]);

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((v) => typeof v === "string");
}

export function isNoraReservationDeltaOperationStructured(
  value: unknown,
): value is NoraReservationDeltaOperationStructured {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!OPS.has(String(o.op))) return false;
  if (o.targetReservationId !== null && typeof o.targetReservationId !== "string") {
    return false;
  }
  if (o.title !== null && typeof o.title !== "string") return false;
  if (o.summary !== null && typeof o.summary !== "string") return false;
  if (o.impact !== null && !IMPACTS.has(String(o.impact))) return false;
  if (o.attentionBy !== null && !ATTENTIONS.has(String(o.attentionBy))) {
    return false;
  }
  if (
    o.finalizationRelevance !== null &&
    !FINALIZATION.has(String(o.finalizationRelevance))
  ) {
    return false;
  }
  if (o.rationale !== null && typeof o.rationale !== "string") return false;
  if (o.resolutionCondition !== null && typeof o.resolutionCondition !== "string") {
    return false;
  }
  if (!isStringArray(o.journalEntryRefs)) return false;
  if (!isStringArray(o.sourceTurnRefs)) return false;
  if (o.basisType !== null && !BASIS.has(String(o.basisType))) return false;
  if (!isStringArray(o.basisRefs)) return false;
  return true;
}

export function isNoraReservationDeltaStructured(
  value: unknown,
): value is NoraReservationDeltaStructured {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!Array.isArray(o.operations)) return false;
  return o.operations.every(isNoraReservationDeltaOperationStructured);
}
