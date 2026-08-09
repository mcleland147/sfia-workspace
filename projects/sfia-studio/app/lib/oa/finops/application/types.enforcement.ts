/**
 * FinOps T4 — Soft Enforcement foundation types (dormant capability).
 *
 * Intermediate product literals REVIEW_REQUIRED vs WOULD_BLOCK remain DEFERRED.
 * The TypeScript discriminant `soft_signal` is INTERNAL ONLY:
 * - not persisted
 * - not a public/product API
 * - not a durable event name
 * - not a Morris selection of REVIEW_REQUIRED or WOULD_BLOCK
 */

export const FINOPS_T4_IDENTITY_CONTRACT_VERSION = "t4-v1" as const;

/**
 * Derived, rebuildable SoT-safe enforcement projection.
 * Ledger / cost events remain financially authoritative.
 * Key: projectId + UTC periodStart (YYYY-MM-DD) + currency.
 */
export type FinOpsEnforcementProjection = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
  readonly currency: string;
  /** Canonical Money scale-8 string: billed + providerObserved (no FX). */
  readonly blockingEligibleAmount: string;
  readonly billedAmount: string;
  readonly providerObservedAmount: string;
  readonly eligibleCostEventCount: number;
  readonly billedEventCount: number;
  readonly providerObservedEventCount: number;
  readonly rebuildVersion: number;
  readonly rebuiltAt: string;
};

/**
 * Injected transient effect instruction — NOT a persisted T7 rollout mode.
 * Future activation layer may supply this; T4 does not store OFF/SHADOW/MONITOR/E1.
 */
export type FinOpsEnforcementEffect = "signal_only" | "enforce";

/**
 * Injected policy for mechanism tests / future activation.
 * No default production thresholds. No historical 15/20/25/30.
 */
export type FinOpsEnforcementPolicy = {
  readonly thresholdCode: string;
  readonly currency: string;
  /** Canonical Money scale-8 string; must be strictly positive. */
  readonly thresholdAmount: string;
  readonly effect: FinOpsEnforcementEffect;
};

/**
 * Soft-control decision contract (DECISION-CONTRACT-01 B):
 * ALLOW | INTERMEDIATE SOFT SIGNAL | BLOCK | FAILED
 *
 * Discriminant `soft_signal` = internal stand-in for the deferred product
 * intermediate literal (REVIEW_REQUIRED vs WOULD_BLOCK STILL DEFERRED).
 */
export type FinOpsEnforcementDecisionKind =
  | "allow"
  | "soft_signal"
  | "block"
  | "failed";

export type FinOpsEnforcementDecisionProvenance = {
  readonly projectId: string;
  readonly periodStart: string;
  readonly currency: string;
  readonly thresholdCode: string;
  readonly thresholdAmount: string;
  readonly blockingEligibleAmount: string;
  readonly billedAmount: string;
  readonly providerObservedAmount: string;
  readonly rebuildVersion: number;
  readonly rebuiltAt: string;
};

/**
 * Transient T7 SHADOW Option C dual-gate hint (PRE_WAS_SHADOW).
 *
 * Anti-claims:
 * - optional — absent means legacy capture behavior (no temporal gate)
 * - internal only — not a public/product API
 * - transient — lives only within one coordinateExecutionRun call stack
 * - not persisted — not a durable event / DB column / audit SoT
 * - does not enforce provider path — capture gate ≠ provider gate
 */
export type FinOpsCaptureEligibility = "eligible" | "ineligible";

export type FinOpsEnforcementDecision = {
  readonly decision: FinOpsEnforcementDecisionKind;
  readonly reason: string;
  /** True when FinOps-side technical failure — never means BLOCK. */
  readonly finopsSideOnly?: true;
  readonly provenance?: FinOpsEnforcementDecisionProvenance;
  /**
   * Optional transient capture eligibility from PRE FinOps evaluation.
   * Absent ⇒ preserve historical capture behavior for non-T7 / legacy ports.
   */
  readonly captureEligibility?: FinOpsCaptureEligibility;
};

export type EvaluateFinOpsEnforcementInput = {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly correlationId: string;
  readonly occurredAt: string;
};

export type RebuildEnforcementProjectionInput = {
  readonly projectId: string;
  /** UTC month start YYYY-MM-DD */
  readonly periodStart: string;
};

export type RebuildEnforcementProjectionResult =
  | {
      readonly outcome: "succeeded";
      readonly projections: ReadonlyArray<FinOpsEnforcementProjection>;
    }
  | {
      readonly outcome: "failed";
      readonly code: string;
      readonly message: string;
      readonly finopsSideOnly: true;
    };
