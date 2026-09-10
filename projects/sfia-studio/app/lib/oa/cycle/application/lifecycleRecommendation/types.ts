/**
 * Lifecycle Recommendation — Product-side envelope (not Epistemic schema extension alone).
 * Durable carrier = EpistemicItem type Recommendation + optional typed lifecycleRecommendation.
 * LR-D01 / LR-D03 Option A — no new table; no JSON-in-statement; no relatedObjects machine protocol.
 */
import type { EpistemicLifecycleRecommendation } from "../../domain/types";

export const LIFECYCLE_RECOMMENDATION_INTENTS = [
  "FINALIZE_CURRENT_CYCLE",
  "NEXT_CYCLE",
] as const;

export type LifecycleRecommendationIntent =
  (typeof LIFECYCLE_RECOMMENDATION_INTENTS)[number];

export type LifecycleRecommendationDerivedCurrentness =
  | "CURRENT"
  | "STALE"
  | "SUPERSEDED";

/** Model/cognition candidate — never Product truth until SFIA validation + materialization. */
export type LifecycleRecommendationCandidate = {
  intent: LifecycleRecommendationIntent;
  statement: string;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
  rationale?: string | null;
  /** D-GF-START-01 — required complete for prepareable NEXT_CYCLE. */
  qualificationSignals?: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  } | null;
};

export type LifecycleRecommendationBasisRefs =
  EpistemicLifecycleRecommendation["basisRefs"];

/** Persisted typed payload — aligns with modeled lifecycle-recommendation.schema.json. */
export type PersistedLifecycleRecommendation = EpistemicLifecycleRecommendation;

export type LifecycleRecommendationEnvelope = {
  recommendationId: string;
  projectId: string;
  intent: LifecycleRecommendationIntent;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  producer: "nora";
  producedAt: string;
  statement: string;
  basisFingerprint: string;
  basisRefs: LifecycleRecommendationBasisRefs;
  semanticKey: string;
  authority: "none";
  isHumanDecision: false;
  doesNotActivateCycle: true;
  doesNotFinalize: true;
  doesNotCreateHumanDecision: true;
  epistemicStatus: "active" | "superseded" | "rejected" | "resolved";
  supersedesRecommendationId: string | null;
  /** Derived at read time — never persisted as Epistemic status. */
  derivedCurrentness: LifecycleRecommendationDerivedCurrentness;
  /** D-GF-START-01 — surfaced when persisted on the LR item. */
  qualificationSignals?: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  };
};

export type NoraLifecycleRecommendationStructuredOutput = {
  intent: LifecycleRecommendationIntent;
  statement: string;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  rationale: string | null;
  authority: "none";
  isHumanDecision: false;
  /**
   * D-GF-START-01 — six explicit signals for NEXT_CYCLE when prepareable.
   * null for FINALIZE_CURRENT_CYCLE / incomplete qualification.
   */
  qualificationSignals: {
    structuralChange: boolean;
    securityImpact: boolean;
    architectureImpact: boolean;
    dataImpact: boolean;
    irreversible: boolean;
    lowRiskBounded: boolean;
  } | null;
};
