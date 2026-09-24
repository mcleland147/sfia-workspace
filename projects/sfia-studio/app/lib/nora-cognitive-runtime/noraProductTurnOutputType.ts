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

/** D-GF-ACW-01 — non-authoritative active-cycle cognitive work items (no ids). */
export const NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: ["type", "statement", "confidence", "blocking"],
  properties: {
    type: {
      type: "string" as const,
      enum: [
        "Observation",
        "Hypothesis",
        "Option",
        "Recommendation",
        "Reservation",
        "Contradiction",
      ],
    },
    statement: { type: "string" as const },
    confidence: {
      anyOf: [
        {
          type: "string" as const,
          enum: ["high", "medium", "low", "none"],
        },
        { type: "null" as const },
      ],
    },
    blocking: { anyOf: [{ type: "boolean" as const }, { type: "null" as const }] },
  },
} as const;

export const NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: ["items"],
  properties: {
    items: {
      type: "array" as const,
      items: NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA,
    },
  },
} as const;

export type NoraActiveCycleWorkItem = {
  type:
    | "Observation"
    | "Hypothesis"
    | "Option"
    | "Recommendation"
    | "Reservation"
    | "Contradiction";
  statement: string;
  confidence: "high" | "medium" | "low" | "none" | null;
  blocking: boolean | null;
};

export type NoraActiveCycleWorkOutput = {
  items: NoraActiveCycleWorkItem[];
};

/**
 * NORA-CONVERSATIONAL-INITIATIVE-01 — ephemeral conversational continuation.
 * Cognitive / non-authoritative / same Product turn — never Truth C,
 * HumanDecision, ExecutionContract, or execution authorization.
 * CR-NCI-01/02: kind×scope matrix; never relabel kind while keeping statement.
 */
export const CONVERSATION_GUIDANCE_KINDS = [
  "RECOMMEND_NEXT_STEP",
  "ASK_CLARIFICATION",
  "PRESENT_OPTIONS",
  "HOLD",
] as const;

export type ConversationGuidanceKind =
  (typeof CONVERSATION_GUIDANCE_KINDS)[number];

export const CONVERSATION_GUIDANCE_SCOPES = [
  "PRE_CYCLE",
  "ACTIVE_CYCLE",
  "LIFECYCLE_TRANSITION",
  "BLOCKER_RESOLUTION",
] as const;

export type ConversationGuidanceScope =
  (typeof CONVERSATION_GUIDANCE_SCOPES)[number];

export const CONVERSATION_GUIDANCE_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: ["kind", "scope", "statement", "rationale"],
  properties: {
    kind: {
      type: "string" as const,
      enum: [...CONVERSATION_GUIDANCE_KINDS],
    },
    scope: {
      type: "string" as const,
      enum: [...CONVERSATION_GUIDANCE_SCOPES],
    },
    statement: { type: "string" as const },
    rationale: {
      anyOf: [{ type: "string" as const }, { type: "null" as const }],
    },
  },
} as const;

export type ConversationGuidance = {
  kind: ConversationGuidanceKind;
  scope: ConversationGuidanceScope;
  statement: string;
  rationale: string | null;
};

/** Fail-closed HOLD when structured guidance is missing / invalid. */
export const CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "La suite n'a pas pu être déterminée de manière fiable à partir de cette sortie.",
    rationale: "sortie structurée insuffisante",
  });

/** Server-owned HOLD — routing blocker (never invents a specific question). */
export const CONVERSATION_GUIDANCE_HOLD_ROUTING_BLOCKER: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "Une clarification matérielle est nécessaire avant de pouvoir orienter la suite.",
    rationale: "routing_blocking_unknown",
  });

/** Server-owned HOLD — multiple plausible cycles. */
export const CONVERSATION_GUIDANCE_HOLD_MULTI_CYCLE: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "Plusieurs trajectoires restent plausibles ; il faut les départager avant de recommander une suite.",
    rationale: "multiple_plausible_cycles",
  });

/** Server-owned HOLD — DEFER requires ACTIVE_CYCLE scope. */
export const CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "Le travail doit rester dans le cycle actif ; aucune transition n'est recommandée sur ce tour.",
    rationale: "active_cycle_scope_required",
  });

/** Server-owned HOLD — Cognitive Stop outranks optimistic guidance / LR. */
export const CONVERSATION_GUIDANCE_HOLD_COGNITIVE_STOP: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "Avant toute suite, il faut lever le frein cognitif qui bloque la progression.",
    rationale: "cognitive_stop_outranks_optimistic_guidance",
  });

/** Server-owned HOLD — structured boundary contradiction. */
export const CONVERSATION_GUIDANCE_HOLD_BOUNDARY: ConversationGuidance =
  Object.freeze({
    kind: "HOLD",
    scope: "BLOCKER_RESOLUTION",
    statement:
      "La suite structurée est incomplète ; aucune progression recommandée tant que le contrat n'est pas cohérent.",
    rationale: "boundary_contradiction_fail_closed",
  });

/**
 * Product Assistant Nora turn contract:
 * - user-visible narrative (required)
 * - pre-cycle routing assessment (required, non-authoritative)
 * - optional Lifecycle Recommendation candidate (nullable)
 * - optional active-cycle work items (nullable; D-GF-ACW-01)
 * - conversationGuidance (required; ephemeral continuation; non-authoritative)
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
      "activeCycleWork",
      "conversationGuidance",
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
      activeCycleWork: {
        anyOf: [
          { type: "null" as const },
          NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA,
        ],
      },
      conversationGuidance: CONVERSATION_GUIDANCE_SCHEMA,
    },
  },
};

export type NoraProductTurnWithOptionalLr = {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  activeCycleWork: NoraActiveCycleWorkOutput | null;
  conversationGuidance: ConversationGuidance;
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

const ACTIVE_CYCLE_WORK_ITEM_TYPES = new Set([
  "Observation",
  "Hypothesis",
  "Option",
  "Recommendation",
  "Reservation",
  "Contradiction",
]);

const ACTIVE_CYCLE_WORK_CONFIDENCES = new Set([
  "high",
  "medium",
  "low",
  "none",
]);

export function isNoraActiveCycleWorkItem(
  value: unknown,
): value is NoraActiveCycleWorkItem {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!ACTIVE_CYCLE_WORK_ITEM_TYPES.has(String(o.type))) return false;
  if (typeof o.statement !== "string") return false;
  if (
    o.confidence !== null &&
    !(
      typeof o.confidence === "string" &&
      ACTIVE_CYCLE_WORK_CONFIDENCES.has(o.confidence)
    )
  ) {
    return false;
  }
  if (o.blocking !== null && typeof o.blocking !== "boolean") return false;
  return true;
}

export function isNoraActiveCycleWorkOutput(
  value: unknown,
): value is NoraActiveCycleWorkOutput {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!Array.isArray(o.items)) return false;
  return o.items.every(isNoraActiveCycleWorkItem);
}

const CONVERSATION_GUIDANCE_KIND_SET = new Set<string>(
  CONVERSATION_GUIDANCE_KINDS,
);
const CONVERSATION_GUIDANCE_SCOPE_SET = new Set<string>(
  CONVERSATION_GUIDANCE_SCOPES,
);

export function isConversationGuidance(
  value: unknown,
): value is ConversationGuidance {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!CONVERSATION_GUIDANCE_KIND_SET.has(String(o.kind))) return false;
  if (!CONVERSATION_GUIDANCE_SCOPE_SET.has(String(o.scope))) return false;
  if (typeof o.statement !== "string" || o.statement.trim().length === 0) {
    return false;
  }
  if (o.rationale !== null && typeof o.rationale !== "string") return false;
  if (typeof o.rationale === "string" && o.rationale.trim().length === 0) {
    return false;
  }
  return true;
}

/**
 * Parse raw conversationGuidance; invalid / missing → fail-closed HOLD.
 * Never invents RECOMMEND_NEXT_STEP.
 */
export function parseConversationGuidanceOrFailClosed(
  value: unknown,
): ConversationGuidance {
  if (!isConversationGuidance(value)) {
    return { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD };
  }
  return {
    kind: value.kind,
    scope: value.scope,
    statement: value.statement.trim(),
    rationale:
      value.rationale === null ? null : String(value.rationale).trim(),
  };
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
  /** Passthrough — not stripped by routing coherence (D-GF-ACW-01). */
  activeCycleWork: NoraActiveCycleWorkOutput | null;
  /** Ephemeral conversational continuation (coherent with disposition). */
  conversationGuidance: ConversationGuidance;
  /** True when a candidate LR was stripped by boundary coherence. */
  lifecycleRecommendationSuppressed: boolean;
  suppressReason: string | null;
  /**
   * Structured boundary contradiction (e.g. EMIT without LR / guidance mismatch).
   * Non-null ⇒ fail-closed — never invent LR; never silent conversational success.
   */
  boundaryContradiction: string | null;
  /**
   * True when guidance was replaced by a server-owned fallback object
   * (never a kind-only relabel that keeps an incompatible statement).
   */
  conversationGuidanceCoerced: boolean;
  conversationGuidanceCoerceReason: string | null;
  /**
   * NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — ephemeral server surface:
   * NONE | NEW_CANDIDATE (this turn emits LR) | REUSE_CURRENT (durable CURRENT satisfies).
   * Not persisted.
   */
  lifecycleRecommendationContinuity:
    | "NONE"
    | "NEW_CANDIDATE"
    | "REUSE_CURRENT";
};

/** Explicit contract code — EMIT disposition requires a Nora-produced LR
 * OR a server-derived CURRENT applicable NEXT_CYCLE recommendation (continuity). */
export const MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION =
  "MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION" as const;

/**
 * EMIT + valid LR requires RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION.
 * CR-NCI-01/03 — never auto-promote HOLD → RECOMMEND; fail-closed instead.
 */
export const CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH =
  "CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH" as const;

function isHoldBlockerResolution(g: ConversationGuidance): boolean {
  return g.kind === "HOLD" && g.scope === "BLOCKER_RESOLUTION";
}

function keepOrReplace(
  base: ConversationGuidance,
  compatible: boolean,
  fallback: ConversationGuidance,
  reason: string,
): {
  conversationGuidance: ConversationGuidance;
  coerced: boolean;
  coerceReason: string | null;
} {
  if (compatible) {
    return { conversationGuidance: base, coerced: false, coerceReason: null };
  }
  return {
    conversationGuidance: { ...fallback },
    coerced: true,
    coerceReason: reason,
  };
}

/**
 * Deterministic conversationGuidance coherence with routing disposition.
 * CR-NCI-01: never relabel kind while keeping an incompatible statement —
 * replace the full object with a server-owned fail-closed HOLD when needed.
 * CR-NCI-02: kind×scope matrix (structured only — no statement prose parse).
 * Never invents RECOMMEND_NEXT_STEP from fail-closed paths.
 */
export function applyConversationGuidanceCoherence(input: {
  conversationGuidance: ConversationGuidance;
  disposition: PreCycleRoutingDisposition;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  boundaryContradiction: string | null;
  /** When true, Cognitive Stop outranks any optimistic guidance → HOLD. */
  cognitiveStop?: boolean;
  /**
   * Server-derived: durable CURRENT NEXT_CYCLE satisfies EMIT without a new LR.
   * Never trust model-alone presence of recommendation text.
   */
  currentLifecycleRecommendationSatisfiesTransition?: boolean;
}): {
  conversationGuidance: ConversationGuidance;
  coerced: boolean;
  coerceReason: string | null;
  /** When set, parent must strip LR and fail-closed (EMIT guidance mismatch). */
  lifecycleGuidanceMismatch: boolean;
} {
  const base = input.conversationGuidance;

  if (input.cognitiveStop === true) {
    if (isHoldBlockerResolution(base)) {
      return {
        conversationGuidance: base,
        coerced: false,
        coerceReason: null,
        lifecycleGuidanceMismatch: false,
      };
    }
    return {
      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_COGNITIVE_STOP },
      coerced: true,
      coerceReason: "cognitive_stop_override",
      lifecycleGuidanceMismatch: false,
    };
  }

  if (input.boundaryContradiction != null) {
    if (isHoldBlockerResolution(base)) {
      return {
        conversationGuidance: base,
        coerced: false,
        coerceReason: null,
        lifecycleGuidanceMismatch: false,
      };
    }
    return {
      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_BOUNDARY },
      coerced: true,
      coerceReason: "boundary_contradiction",
      lifecycleGuidanceMismatch: false,
    };
  }

  const kind = base.kind;
  const scope = base.scope;
  const assessment = input.preCycleRoutingAssessment;

  if (input.disposition === "CONTINUE_PRE_CYCLE") {
    if (assessment.routingBlockingUnknownPresent) {
      const ok =
        (kind === "ASK_CLARIFICATION" && scope === "PRE_CYCLE") ||
        (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
      const r = keepOrReplace(
        base,
        ok,
        CONVERSATION_GUIDANCE_HOLD_ROUTING_BLOCKER,
        "routing_blocking_unknown",
      );
      return { ...r, lifecycleGuidanceMismatch: false };
    }
    // Informative pre-cycle without routing blocker.
    const ok =
      scope === "PRE_CYCLE" ||
      (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
    const r = keepOrReplace(
      base,
      ok,
      CONVERSATION_GUIDANCE_HOLD_BOUNDARY,
      "continue_pre_cycle_scope",
    );
    return { ...r, lifecycleGuidanceMismatch: false };
  }

  if (input.disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
    const ok =
      (kind === "PRESENT_OPTIONS" && scope === "PRE_CYCLE") ||
      (kind === "ASK_CLARIFICATION" && scope === "PRE_CYCLE") ||
      (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
    const r = keepOrReplace(
      base,
      ok,
      CONVERSATION_GUIDANCE_HOLD_MULTI_CYCLE,
      "multiple_plausible_cycles",
    );
    return { ...r, lifecycleGuidanceMismatch: false };
  }

  if (input.disposition === "DEFER_TO_ACTIVE_CYCLE") {
    const ok = scope === "ACTIVE_CYCLE";
    const r = keepOrReplace(
      base,
      ok,
      CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE,
      "active_cycle_scope_required",
    );
    return { ...r, lifecycleGuidanceMismatch: false };
  }

  // EMIT_LIFECYCLE_RECOMMENDATION — new LR this turn OR CURRENT LR reused.
  const transitionRepresented =
    input.lifecycleRecommendation != null ||
    input.currentLifecycleRecommendationSatisfiesTransition === true;
  if (transitionRepresented) {
    const ok =
      kind === "RECOMMEND_NEXT_STEP" && scope === "LIFECYCLE_TRANSITION";
    if (ok) {
      return {
        conversationGuidance: base,
        coerced: false,
        coerceReason: null,
        lifecycleGuidanceMismatch: false,
      };
    }
    // Never auto-promote HOLD/ASK/OPTIONS → RECOMMEND_NEXT_STEP.
    return {
      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_BOUNDARY },
      coerced: true,
      coerceReason: "lifecycle_guidance_mismatch",
      lifecycleGuidanceMismatch: true,
    };
  }

  return {
    conversationGuidance: base,
    coerced: false,
    coerceReason: null,
    lifecycleGuidanceMismatch: false,
  };
}

/**
 * Compose Pilot-facing assistant text for history continuity.
 * narrative + conversationGuidance.statement — no internal field names,
 * no "PROCHAINE ÉTAPE :" label.
 */
export function composePilotFacingAssistantText(
  narrative: string,
  guidance: ConversationGuidance | null | undefined,
): string {
  const n = narrative.trim();
  if (!guidance) return n;
  const statement = guidance.statement.trim();
  if (!statement) return n;
  if (n.includes(statement)) return n;
  if (!n) return statement;
  return `${n}\n\n${statement}`;
}

/**
 * Deterministic coherence between assessment and lifecycleRecommendation.
 * - CONTINUE / HOLD → strip any LR (no premature recommendation).
 * - DEFER_TO_ACTIVE_CYCLE → strip NEXT_CYCLE only (FINALIZE may remain).
 * - EMIT + LR → keep as emitted (never invent one server-side) → NEW_CANDIDATE.
 * - EMIT + null + CURRENT LR SUFFICIENT (server-derived) → REUSE_CURRENT (no write).
 * - EMIT + null + CURRENT LR not sufficient → MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION.
 * - EMIT + LR + incompatible guidance → CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH.
 * - Cognitive Stop → strip LR for this turn; HOLD + BLOCKER_RESOLUTION.
 * Does not parse narrative. Does not create Cycle/HD/START.
 * activeCycleWork is preserved on all return paths (passthrough).
 * conversationGuidance: full-object fallback when incompatible (CR-NCI-01).
 */
export function applyPreCycleRoutingBoundaryCoherence(input: {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  activeCycleWork?: NoraActiveCycleWorkOutput | null;
  conversationGuidance?: ConversationGuidance | null;
  cognitiveStop?: boolean;
  /**
   * Server-derived from selectCurrentLifecycleRecommendations + applicability.
   * Never client/model supplied as authority.
   */
  currentLifecycleRecommendationSatisfiesTransition?: boolean;
}): PreCycleRoutingBoundaryCoherenceResult {
  const disposition = derivePreCycleRoutingDisposition(
    input.preCycleRoutingAssessment,
  );
  const candidate = input.lifecycleRecommendation;
  const activeCycleWork = input.activeCycleWork ?? null;
  const rawGuidance = parseConversationGuidanceOrFailClosed(
    input.conversationGuidance ?? null,
  );
  const cognitiveStop = input.cognitiveStop === true;
  const currentSatisfies =
    input.currentLifecycleRecommendationSatisfiesTransition === true;

  const withGuidance = (
    partial: Omit<
      PreCycleRoutingBoundaryCoherenceResult,
      | "conversationGuidance"
      | "conversationGuidanceCoerced"
      | "conversationGuidanceCoerceReason"
    >,
  ): PreCycleRoutingBoundaryCoherenceResult => {
    const guided = applyConversationGuidanceCoherence({
      conversationGuidance: rawGuidance,
      disposition: partial.disposition,
      preCycleRoutingAssessment: partial.preCycleRoutingAssessment,
      lifecycleRecommendation: partial.lifecycleRecommendation,
      boundaryContradiction: partial.boundaryContradiction,
      cognitiveStop,
      currentLifecycleRecommendationSatisfiesTransition:
        partial.lifecycleRecommendationContinuity === "REUSE_CURRENT" ||
        (partial.lifecycleRecommendation == null &&
          currentSatisfies &&
          partial.disposition === "EMIT_LIFECYCLE_RECOMMENDATION" &&
          partial.boundaryContradiction == null),
    });

    let lifecycleRecommendation = partial.lifecycleRecommendation;
    let lifecycleRecommendationSuppressed =
      partial.lifecycleRecommendationSuppressed;
    let suppressReason = partial.suppressReason;
    let boundaryContradiction = partial.boundaryContradiction;
    let lifecycleRecommendationContinuity =
      partial.lifecycleRecommendationContinuity;

    // CR-NCI-03 — Cognitive Stop outranks LR materialization for this turn.
    if (cognitiveStop && lifecycleRecommendation != null) {
      lifecycleRecommendation = null;
      lifecycleRecommendationSuppressed = true;
      suppressReason = suppressReason ?? "cognitive_stop";
      if (lifecycleRecommendationContinuity === "NEW_CANDIDATE") {
        lifecycleRecommendationContinuity = "NONE";
      }
    }
    // Cognitive Stop also outranks CURRENT LR reuse as actionable next movement.
    if (cognitiveStop && lifecycleRecommendationContinuity === "REUSE_CURRENT") {
      lifecycleRecommendationContinuity = "NONE";
    }

    // CR-NCI-01/03 — EMIT guidance mismatch: fail-closed via contradiction.
    // Keep the Nora-emitted LR on the coherent result for auditability, but
    // orchestrator must not materialize (boundaryContradiction gate).
    // Do not strip LR here — that would make a later normalize look like
    // MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION.
    if (guided.lifecycleGuidanceMismatch) {
      boundaryContradiction = CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH;
      if (lifecycleRecommendationContinuity === "REUSE_CURRENT") {
        lifecycleRecommendationContinuity = "NONE";
      }
    }

    return {
      ...partial,
      lifecycleRecommendation,
      lifecycleRecommendationSuppressed,
      suppressReason,
      boundaryContradiction,
      lifecycleRecommendationContinuity,
      conversationGuidance: guided.conversationGuidance,
      conversationGuidanceCoerced: guided.coerced,
      conversationGuidanceCoerceReason: guided.coerceReason,
    };
  };

  if (disposition === "CONTINUE_PRE_CYCLE") {
    return withGuidance({
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      activeCycleWork,
      lifecycleRecommendationSuppressed: candidate !== null,
      suppressReason:
        candidate !== null
          ? "routing_blocking_unknown_present"
          : null,
      boundaryContradiction: null,
      lifecycleRecommendationContinuity: "NONE",
    });
  }
  if (disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
    return withGuidance({
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      activeCycleWork,
      lifecycleRecommendationSuppressed: candidate !== null,
      suppressReason:
        candidate !== null ? "multiple_plausible_cycles" : null,
      boundaryContradiction: null,
      lifecycleRecommendationContinuity: "NONE",
    });
  }
  if (disposition === "DEFER_TO_ACTIVE_CYCLE") {
    if (candidate?.intent === "NEXT_CYCLE") {
      return withGuidance({
        narrative: input.narrative,
        preCycleRoutingAssessment: input.preCycleRoutingAssessment,
        disposition,
        lifecycleRecommendation: null,
        activeCycleWork,
        lifecycleRecommendationSuppressed: true,
        suppressReason: "active_cycle_covers_work",
        boundaryContradiction: null,
        lifecycleRecommendationContinuity: "NONE",
      });
    }
    return withGuidance({
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: candidate,
      activeCycleWork,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
      boundaryContradiction: null,
      lifecycleRecommendationContinuity:
        candidate != null ? "NEW_CANDIDATE" : "NONE",
    });
  }
  // EMIT_LIFECYCLE_RECOMMENDATION — never invent LR.
  // Continuity: null + server CURRENT sufficient → REUSE_CURRENT (no write).
  // Cognitive Stop outranks transition representation: HOLD path, no MISSING.
  if (candidate === null) {
    if (cognitiveStop) {
      return withGuidance({
        narrative: input.narrative,
        preCycleRoutingAssessment: input.preCycleRoutingAssessment,
        disposition,
        lifecycleRecommendation: null,
        activeCycleWork,
        lifecycleRecommendationSuppressed: false,
        suppressReason: "cognitive_stop",
        boundaryContradiction: null,
        lifecycleRecommendationContinuity: "NONE",
      });
    }
    if (currentSatisfies) {
      return withGuidance({
        narrative: input.narrative,
        preCycleRoutingAssessment: input.preCycleRoutingAssessment,
        disposition,
        lifecycleRecommendation: null,
        activeCycleWork,
        lifecycleRecommendationSuppressed: false,
        suppressReason: null,
        boundaryContradiction: null,
        lifecycleRecommendationContinuity: "REUSE_CURRENT",
      });
    }
    return withGuidance({
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      activeCycleWork,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
      boundaryContradiction: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
      lifecycleRecommendationContinuity: "NONE",
    });
  }
  return withGuidance({
    narrative: input.narrative,
    preCycleRoutingAssessment: input.preCycleRoutingAssessment,
    disposition,
    lifecycleRecommendation: candidate,
    activeCycleWork,
    lifecycleRecommendationSuppressed: false,
    suppressReason: null,
    boundaryContradiction: null,
    lifecycleRecommendationContinuity: "NEW_CANDIDATE",
  });
}

/**
 * Normalize raw structured output into a coherent Product turn.
 * Missing assessment → fail-closed CONTINUE defaults (plain-text Fake path).
 * Missing activeCycleWork → null (backward compatible).
 * Missing / invalid conversationGuidance → fail-closed HOLD.
 */
export function normalizeNoraProductTurnStructuredOutput(
  value: unknown,
  options?: {
    cognitiveStop?: boolean;
    currentLifecycleRecommendationSatisfiesTransition?: boolean;
  },
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

  let activeCycleWork: NoraActiveCycleWorkOutput | null = null;
  if (o.activeCycleWork != null) {
    if (!isNoraActiveCycleWorkOutput(o.activeCycleWork)) {
      return null;
    }
    activeCycleWork = o.activeCycleWork;
  }

  return applyPreCycleRoutingBoundaryCoherence({
    narrative: o.narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
    activeCycleWork,
    conversationGuidance: parseConversationGuidanceOrFailClosed(
      o.conversationGuidance,
    ),
    cognitiveStop: options?.cognitiveStop === true,
    currentLifecycleRecommendationSatisfiesTransition:
      options?.currentLifecycleRecommendationSatisfiesTransition === true,
  });
}

export function isNoraProductTurnWithOptionalLr(
  value: unknown,
): value is NoraProductTurnWithOptionalLr {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (typeof o.narrative !== "string") return false;
  if (!isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)) return false;
  // Backward compat: missing activeCycleWork treated as null.
  if (
    o.activeCycleWork != null &&
    !isNoraActiveCycleWorkOutput(o.activeCycleWork)
  ) {
    return false;
  }
  if (!isConversationGuidance(o.conversationGuidance)) return false;
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
    activeCycleWork: null,
    conversationGuidance: { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD },
  });
}
