import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";
import {
  NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
  isNoraLifecycleRecommendationStructuredOutput,
} from "./noraLifecycleRecommendationOutputType";

/**
 * Pre-cycle routing boundary assessment (same Product turn).
 * Non-durable, non-authoritative — forces Routing Relevance / Cycle Ownership
 * into structured facts so server coherence can gate lifecycleRecommendation.
 * NEVER a Fact / HumanDecision / CycleInstance / LPS state.
 */
export const PRE_CYCLE_ROUTING_ASSESSMENT_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: [
    "routingBlockingUnknownPresent",
    "candidateCycleSupportable",
    "remainingUnknownsAreCycleOwned",
    "multiplePlausibleCycles",
    "activeCycleAlreadyCoversWork",
  ],
  properties: {
    /** ROUTING RELEVANCE: an answer could still change cycle / profile / gate / STOP. */
    routingBlockingUnknownPresent: { type: "boolean" as const },
    /** A single next cycle type is honestly supportable. */
    candidateCycleSupportable: { type: "boolean" as const },
    /** CYCLE OWNERSHIP: remaining unknowns belong to that candidate cycle's work. */
    remainingUnknownsAreCycleOwned: { type: "boolean" as const },
    /** More than one cycle remains honestly plausible. */
    multiplePlausibleCycles: { type: "boolean" as const },
    /** An active CycleInstance already covers the work. */
    activeCycleAlreadyCoversWork: { type: "boolean" as const },
  },
} as const;

export type PreCycleRoutingAssessment = {
  routingBlockingUnknownPresent: boolean;
  candidateCycleSupportable: boolean;
  remainingUnknownsAreCycleOwned: boolean;
  multiplePlausibleCycles: boolean;
  activeCycleAlreadyCoversWork: boolean;
};

/**
 * Deterministic disposition derived from assessment facts (not model prose).
 * Not persisted; not authority.
 */
export type PreCycleRoutingDisposition =
  | "CONTINUE_PRE_CYCLE"
  | "EMIT_LIFECYCLE_RECOMMENDATION"
  | "DEFER_TO_ACTIVE_CYCLE"
  | "HOLD_FOR_ROUTING_AMBIGUITY";

/** Fail-closed default for plain-text coerce / missing assessment. */
export const PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT: PreCycleRoutingAssessment =
  Object.freeze({
    routingBlockingUnknownPresent: true,
    candidateCycleSupportable: false,
    remainingUnknownsAreCycleOwned: false,
    multiplePlausibleCycles: false,
    activeCycleAlreadyCoversWork: false,
  });

/** Candidate clear; remaining unknowns belong to the cycle (emit LR). */
export const PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT: PreCycleRoutingAssessment =
  Object.freeze({
    routingBlockingUnknownPresent: false,
    candidateCycleSupportable: true,
    remainingUnknownsAreCycleOwned: true,
    multiplePlausibleCycles: false,
    activeCycleAlreadyCoversWork: false,
  });

/**
 * Product Assistant Nora turn contract:
 * - user-visible narrative (required)
 * - pre-cycle routing assessment (required, non-authoritative)
 * - optional Lifecycle Recommendation candidate (nullable)
 * Same Agents Runner — one model call — no prose parsing.
 */
export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
  type: "json_schema" as const,
  name: "nora_product_turn_with_optional_lr",
  strict: true,
  schema: {
    type: "object" as const,
    additionalProperties: false as const,
    required: [
      "narrative",
      "preCycleRoutingAssessment",
      "lifecycleRecommendation",
    ],
    properties: {
      narrative: { type: "string" as const },
      preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_SCHEMA,
      lifecycleRecommendation: {
        anyOf: [
          { type: "null" as const },
          NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE.schema,
        ],
      },
    },
  },
};

export type NoraProductTurnWithOptionalLr = {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
};

export function isPreCycleRoutingAssessment(
  value: unknown,
): value is PreCycleRoutingAssessment {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  return (
    typeof o.routingBlockingUnknownPresent === "boolean" &&
    typeof o.candidateCycleSupportable === "boolean" &&
    typeof o.remainingUnknownsAreCycleOwned === "boolean" &&
    typeof o.multiplePlausibleCycles === "boolean" &&
    typeof o.activeCycleAlreadyCoversWork === "boolean"
  );
}

/**
 * ROUTING RELEVANCE + CYCLE OWNERSHIP → disposition (deterministic).
 */
export function derivePreCycleRoutingDisposition(
  assessment: PreCycleRoutingAssessment,
): PreCycleRoutingDisposition {
  if (assessment.activeCycleAlreadyCoversWork) {
    return "DEFER_TO_ACTIVE_CYCLE";
  }
  if (assessment.multiplePlausibleCycles) {
    return "HOLD_FOR_ROUTING_AMBIGUITY";
  }
  if (assessment.routingBlockingUnknownPresent) {
    return "CONTINUE_PRE_CYCLE";
  }
  if (assessment.candidateCycleSupportable) {
    // Remaining unknowns may be cycle-owned (typical) or absent — either way,
    // no routing-blocking unknown remains → cede to Lifecycle Recommendation.
    return "EMIT_LIFECYCLE_RECOMMENDATION";
  }
  return "CONTINUE_PRE_CYCLE";
}

export type PreCycleRoutingBoundaryCoherenceResult = {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  disposition: PreCycleRoutingDisposition;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  /** True when a candidate LR was stripped by boundary coherence. */
  lifecycleRecommendationSuppressed: boolean;
  suppressReason: string | null;
  /**
   * Structured boundary contradiction (e.g. EMIT without LR).
   * Non-null ⇒ fail-closed — never invent LR; never silent conversational success.
   */
  boundaryContradiction: string | null;
};

/** Explicit contract code — EMIT disposition requires a Nora-produced LR. */
export const MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION =
  "MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION" as const;

/**
 * Deterministic coherence between assessment and lifecycleRecommendation.
 * - CONTINUE / HOLD → strip any LR (no premature recommendation).
 * - DEFER_TO_ACTIVE_CYCLE → strip NEXT_CYCLE only (FINALIZE may remain).
 * - EMIT + LR → keep as emitted (never invent one server-side).
 * - EMIT + null → MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION (fail-closed).
 * Does not parse narrative. Does not create Cycle/HD/START.
 *
 * remainingUnknownsAreCycleOwned semantics:
 * - true  → remaining unknowns exist and belong to the candidate cycle
 * - false → no materially remaining unknowns (or none that are cycle-owned)
 * Either value is compatible with EMIT when candidateCycleSupportable and
 * no routing blocker / multi-cycle / active-cycle deferral. false is NOT
 * automatically incoherent.
 */
export function applyPreCycleRoutingBoundaryCoherence(input: {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
}): PreCycleRoutingBoundaryCoherenceResult {
  const disposition = derivePreCycleRoutingDisposition(
    input.preCycleRoutingAssessment,
  );
  const candidate = input.lifecycleRecommendation;

  if (disposition === "CONTINUE_PRE_CYCLE") {
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      lifecycleRecommendationSuppressed: candidate !== null,
      suppressReason:
        candidate !== null
          ? "routing_blocking_unknown_present"
          : null,
      boundaryContradiction: null,
    };
  }
  if (disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      lifecycleRecommendationSuppressed: candidate !== null,
      suppressReason:
        candidate !== null ? "multiple_plausible_cycles" : null,
      boundaryContradiction: null,
    };
  }
  if (disposition === "DEFER_TO_ACTIVE_CYCLE") {
    if (candidate?.intent === "NEXT_CYCLE") {
      return {
        narrative: input.narrative,
        preCycleRoutingAssessment: input.preCycleRoutingAssessment,
        disposition,
        lifecycleRecommendation: null,
        lifecycleRecommendationSuppressed: true,
        suppressReason: "active_cycle_covers_work",
        boundaryContradiction: null,
      };
    }
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: candidate,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
      boundaryContradiction: null,
    };
  }
  // EMIT_LIFECYCLE_RECOMMENDATION — never invent LR.
  if (candidate === null) {
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
      boundaryContradiction: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    };
  }
  return {
    narrative: input.narrative,
    preCycleRoutingAssessment: input.preCycleRoutingAssessment,
    disposition,
    lifecycleRecommendation: candidate,
    lifecycleRecommendationSuppressed: false,
    suppressReason: null,
    boundaryContradiction: null,
  };
}

/**
 * Normalize raw structured output into a coherent Product turn.
 * Missing assessment → fail-closed CONTINUE defaults (plain-text Fake path).
 */
export function normalizeNoraProductTurnStructuredOutput(
  value: unknown,
): PreCycleRoutingBoundaryCoherenceResult | null {
  if (!value || typeof value !== "object") return null;
  const o = value as Record<string, unknown>;
  if (typeof o.narrative !== "string") return null;

  const assessment = isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)
    ? o.preCycleRoutingAssessment
    : PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT;

  let lr: NoraLifecycleRecommendationStructuredOutput | null = null;
  if (o.lifecycleRecommendation != null) {
    if (
      !isNoraLifecycleRecommendationStructuredOutput(o.lifecycleRecommendation)
    ) {
      return null;
    }
    lr = o.lifecycleRecommendation;
  }

  return applyPreCycleRoutingBoundaryCoherence({
    narrative: o.narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
  });
}

export function isNoraProductTurnWithOptionalLr(
  value: unknown,
): value is NoraProductTurnWithOptionalLr {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (typeof o.narrative !== "string") return false;
  if (!isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)) return false;
  if (o.lifecycleRecommendation === null) return true;
  return isNoraLifecycleRecommendationStructuredOutput(
    o.lifecycleRecommendation,
  );
}

export function isNoraProductTurnOutputTypeName(name: unknown): boolean {
  return name === NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.name;
}

/** Plain-text / incomplete Fake → fail-closed Product turn JSON. */
export function buildFailClosedProductTurnJson(narrative: string): string {
  return JSON.stringify({
    narrative,
    preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
    lifecycleRecommendation: null,
  });
}
