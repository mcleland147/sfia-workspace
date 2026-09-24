/**
 * NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01
 *
 * Pure selection of exactly-one applicable CURRENT NEXT_CYCLE LifecycleRecommendation
 * for pre-cycle multi-turn continuity. Reuses selectCurrentLifecycleRecommendations —
 * no parallel currentness, no prose parse, no session memory.
 *
 * Scope: NEXT_CYCLE pre-cycle continuity only.
 * DEBT: FINALIZE_CURRENT_CYCLE continuity not yet qualified.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
} from "../../domain/types";
import {
  firstFailedRequiredMaterialDimension,
  type LifecycleRecommendationMaterialDimension,
} from "./materialReaderContract";
import { selectCurrentLifecycleRecommendations } from "./currentness";
import type { LifecycleRecommendationEnvelope } from "./types";

export type CurrentLifecycleRecommendationContinuityState =
  | "CURRENT"
  | "NONE"
  | "AMBIGUOUS"
  | "UNAVAILABLE";

/** Minimal durable CURRENT NEXT_CYCLE projection — Recommendation ≠ HumanDecision. */
export type CurrentLifecycleRecommendationProjectionCurrent = {
  readonly intent: "NEXT_CYCLE";
  readonly targetCycleTypeId: string | null;
  readonly targetCycleInstanceId: string | null;
  readonly subjectCycleInstanceId: string | null;
  readonly statement: string;
  readonly rationale: string | null;
  readonly semanticKey: string;
  readonly producedAt: string;
  /** Epistemic item id — server/tests only; never Pilot-facing. */
  readonly recommendationId: string;
};

export type CurrentLifecycleRecommendationContinuityProjection = {
  readonly state: CurrentLifecycleRecommendationContinuityState;
  readonly current: CurrentLifecycleRecommendationProjectionCurrent | null;
};

export type EvaluateCurrentNextCycleLifecycleRecommendationContinuityInput = {
  items: readonly EpistemicItem[];
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion?: number | null;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory?: ProjectTrajectory | null;
  decisions?: readonly HumanDecision[];
  evidence?: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
  /**
   * When LPS points at an active CycleInstance, pre-cycle NEXT_CYCLE continuity
   * must not satisfy EMIT (LR-CONT-08).
   */
  activeCycleInstanceId?: string | null;
  /**
   * When server method orientation resolves a candidate cycle type for this turn,
   * CURRENT target must match. Unresolved → no match requirement.
   */
  expectedTargetCycleTypeId?: string | null;
};

export type EvaluateCurrentNextCycleLifecycleRecommendationContinuityResult = {
  readonly projection: CurrentLifecycleRecommendationContinuityProjection;
  /**
   * Server-derived: exactly one applicable CURRENT NEXT_CYCLE may satisfy
   * EMIT + lifecycleRecommendation=null without MISSING_REQUIRED.
   */
  readonly satisfiesPreCycleNextCycleTransition: boolean;
  /** The single applicable envelope when state=CURRENT; else null. */
  readonly applicable: LifecycleRecommendationEnvelope | null;
};

function projectCurrent(
  env: LifecycleRecommendationEnvelope,
): CurrentLifecycleRecommendationProjectionCurrent {
  return Object.freeze({
    intent: "NEXT_CYCLE" as const,
    targetCycleTypeId: env.targetCycleTypeId,
    targetCycleInstanceId: env.targetCycleInstanceId,
    subjectCycleInstanceId: env.subjectCycleInstanceId,
    statement: env.statement,
    rationale: null,
    semanticKey: env.semanticKey,
    producedAt: env.producedAt,
    recommendationId: env.recommendationId,
  });
}

/**
 * Select exactly one CURRENT NEXT_CYCLE recommendation for pre-cycle continuity.
 * Does not invent recommendations. Does not choose arbitrarily among concurrent keys.
 */
export function evaluateCurrentNextCycleLifecycleRecommendationContinuity(
  input: EvaluateCurrentNextCycleLifecycleRecommendationContinuityInput,
): EvaluateCurrentNextCycleLifecycleRecommendationContinuityResult {
  const failed = input.failedMaterialDimensions ?? new Set();

  // Fail-closed: any required NEXT_CYCLE material dimension UNKNOWN → UNAVAILABLE.
  if (firstFailedRequiredMaterialDimension("NEXT_CYCLE", failed)) {
    return {
      projection: Object.freeze({
        state: "UNAVAILABLE" as const,
        current: null,
      }),
      satisfiesPreCycleNextCycleTransition: false,
      applicable: null,
    };
  }

  const currentAll = selectCurrentLifecycleRecommendations({
    items: input.items,
    cycles: input.cycles,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
    lpsVersion: input.lpsVersion,
    doctrinePackageId: input.doctrinePackageId,
    doctrinePackageVersion: input.doctrinePackageVersion,
    doctrinePackageDigest: input.doctrinePackageDigest,
    trajectory: input.trajectory,
    decisions: input.decisions,
    evidence: input.evidence,
    blockingReservationStatements: input.blockingReservationStatements,
    failedMaterialDimensions: failed,
  });

  const nextCycleCurrent = currentAll.filter((e) => e.intent === "NEXT_CYCLE");

  if (nextCycleCurrent.length === 0) {
    return {
      projection: Object.freeze({
        state: "NONE" as const,
        current: null,
      }),
      satisfiesPreCycleNextCycleTransition: false,
      applicable: null,
    };
  }

  if (nextCycleCurrent.length > 1) {
    // Distinct semanticKeys already (selectCurrent dedupes per key). Concurrent = AMBIGUOUS.
    return {
      projection: Object.freeze({
        state: "AMBIGUOUS" as const,
        current: null,
      }),
      satisfiesPreCycleNextCycleTransition: false,
      applicable: null,
    };
  }

  const only = nextCycleCurrent[0]!;
  const projection: CurrentLifecycleRecommendationContinuityProjection =
    Object.freeze({
      state: "CURRENT" as const,
      current: projectCurrent(only),
    });

  const active =
    input.activeCycleInstanceId ?? input.lpsActiveCycleInstanceId ?? null;
  if (active != null && String(active).trim() !== "") {
    return {
      projection,
      satisfiesPreCycleNextCycleTransition: false,
      applicable: only,
    };
  }

  const target = only.targetCycleTypeId?.trim() || null;
  if (!target) {
    return {
      projection,
      satisfiesPreCycleNextCycleTransition: false,
      applicable: only,
    };
  }

  const expected = input.expectedTargetCycleTypeId?.trim() || null;
  if (expected != null && expected !== target) {
    return {
      projection,
      satisfiesPreCycleNextCycleTransition: false,
      applicable: only,
    };
  }

  return {
    projection,
    satisfiesPreCycleNextCycleTransition: true,
    applicable: only,
  };
}

/** Ephemeral post-model revalidation status — never Pilot-facing / never persisted. */
export type LifecycleRecommendationContinuityRevalidationStatus =
  | "NOT_REQUIRED"
  | "PASS"
  | "STALE"
  | "IDENTITY_CHANGED"
  | "UNAVAILABLE"
  | "NOT_APPLICABLE";

export type RevalidateExactCurrentNextCycleLifecycleRecommendationContinuityResult =
  {
    readonly ok: boolean;
    readonly status: Exclude<
      LifecycleRecommendationContinuityRevalidationStatus,
      "NOT_REQUIRED"
    >;
    readonly recommendationId: string | null;
  };

/**
 * CR-LRC-01 — post-model durable currentness revalidation.
 *
 * Binds to the exact pre-model recommendationId (optional semanticKey check).
 * Does NOT authorize "some CURRENT LR exists now" — identity must match.
 * Does NOT invent / substitute a same-target replacement recommendation.
 *
 * Call only with freshly loaded durable material facts (not StudioCognitiveContext snapshot).
 */
export function revalidateExactCurrentNextCycleLifecycleRecommendationContinuity(input: {
  expectedRecommendationId: string;
  expectedSemanticKey?: string | null;
  facts: EvaluateCurrentNextCycleLifecycleRecommendationContinuityInput;
}): RevalidateExactCurrentNextCycleLifecycleRecommendationContinuityResult {
  const expectedId = input.expectedRecommendationId.trim();
  if (!expectedId) {
    return {
      ok: false,
      status: "NOT_APPLICABLE",
      recommendationId: null,
    };
  }

  const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity(
    input.facts,
  );

  if (evaluated.projection.state === "UNAVAILABLE") {
    return { ok: false, status: "UNAVAILABLE", recommendationId: null };
  }
  if (evaluated.projection.state === "AMBIGUOUS") {
    return { ok: false, status: "NOT_APPLICABLE", recommendationId: null };
  }
  if (evaluated.projection.state === "NONE" || !evaluated.projection.current) {
    return { ok: false, status: "STALE", recommendationId: null };
  }

  const current = evaluated.projection.current;
  if (current.recommendationId !== expectedId) {
    return {
      ok: false,
      status: "IDENTITY_CHANGED",
      recommendationId: current.recommendationId,
    };
  }

  const expectedKey = input.expectedSemanticKey?.trim() || null;
  if (expectedKey != null && current.semanticKey !== expectedKey) {
    return {
      ok: false,
      status: "IDENTITY_CHANGED",
      recommendationId: current.recommendationId,
    };
  }

  if (!evaluated.satisfiesPreCycleNextCycleTransition) {
    return {
      ok: false,
      status: "NOT_APPLICABLE",
      recommendationId: current.recommendationId,
    };
  }

  return {
    ok: true,
    status: "PASS",
    recommendationId: current.recommendationId,
  };
}
