/**
 * FinOps T3 — evaluate injected threshold definitions against T2 aggregates (F3/B3).
 *
 * Crossing rule (implementation detail, not Morris calibration):
 *   evaluatedAmount >= thresholdAmount using existing Money (BigInt minor units).
 * No FX / cross-currency sum. Empty definitions → explicit success no-op.
 */

import {
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  type FinOpsMoney,
} from "../domain/money";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsAlertReviewPort } from "../ports/finopsAlertReviewPort";
import { deriveT3ThresholdIdentity } from "./t3Identity";
import type {
  EvaluateProjectPeriodThresholdsInput,
  EvaluateProjectPeriodThresholdsResult,
  FinOpsThresholdBasis,
  FinOpsThresholdDefinition,
  FinOpsThresholdEvaluationOutcome,
  FinOpsThresholdKind,
} from "./types.alertReview";

export type EvaluateProjectPeriodThresholdsDeps = {
  readonly aggregates: FinOpsAggregatePort;
  readonly alertReview: FinOpsAlertReviewPort;
  readonly nowIso: () => string;
};

function isUtcMonthStartDate(periodStart: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(periodStart)) return false;
  const [y, m, d] = periodStart.split("-").map((x) => Number(x));
  if (!y || !m || !d) return false;
  if (d !== 1) return false;
  if (m < 1 || m > 12) return false;
  // Reject impossible calendar dates via UTC Date round-trip.
  const dt = new Date(Date.UTC(y, m - 1, 1));
  return (
    dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === 1
  );
}

function assertPositiveMoney(money: FinOpsMoney): void {
  if (money.amountMinor <= BigInt(0)) {
    throw new Error("threshold amount must be strictly positive");
  }
}

function moneyGte(evaluated: FinOpsMoney, threshold: FinOpsMoney): boolean {
  if (evaluated.currency !== threshold.currency) {
    throw new Error("Money currency mismatch in threshold compare");
  }
  return evaluated.amountMinor >= threshold.amountMinor;
}

function selectBucketAmount(
  basis: FinOpsThresholdBasis,
  agg: {
    readonly estimatedAmount: string;
    readonly observedAmount: string;
    readonly billedAmount: string;
    readonly currency: string;
  },
): string {
  switch (basis) {
    case "estimated":
      return agg.estimatedAmount;
    case "observed":
      return agg.observedAmount;
    case "billed":
      return agg.billedAmount;
    default: {
      const _exhaustive: never = basis;
      return _exhaustive;
    }
  }
}

function isKind(value: string): value is FinOpsThresholdKind {
  return value === "informational_alert" || value === "morris_review";
}

function isBasis(value: string): value is FinOpsThresholdBasis {
  return value === "estimated" || value === "observed" || value === "billed";
}

/**
 * Validate injected definitions. Conflicting kind/basis/amount on the same C1
 * key fails with FINOPS_T3_THRESHOLD_CONFIG_CONFLICT (never "take the first").
 */
export function validateThresholdDefinitions(
  definitions: ReadonlyArray<FinOpsThresholdDefinition>,
):
  | { readonly ok: true; readonly normalized: ReadonlyArray<FinOpsThresholdDefinition> }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const seen = new Map<
    string,
    { kind: FinOpsThresholdKind; basis: FinOpsThresholdBasis; amount: string }
  >();
  const normalized: FinOpsThresholdDefinition[] = [];

  for (const def of definitions) {
    const thresholdCode = def.thresholdCode.trim();
    if (!thresholdCode) {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "thresholdCode must be non-empty",
      };
    }
    if (!isKind(def.kind)) {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "threshold kind is invalid",
      };
    }
    if (!isBasis(def.basis)) {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "threshold basis is invalid",
      };
    }
    let currency: string;
    let amountMoney: FinOpsMoney;
    try {
      currency = normalizeCurrency(def.currency);
      amountMoney = parseMoneyString(def.amount, currency);
      assertPositiveMoney(amountMoney);
    } catch {
      return {
        ok: false,
        code: "FINOPS_T3_THRESHOLD_INVALID",
        message: "threshold currency/amount is invalid",
      };
    }
    const amount = formatMoneyString(amountMoney);
    const c1 = `${thresholdCode}|${currency}`;
    const prior = seen.get(c1);
    if (prior) {
      if (
        prior.kind !== def.kind ||
        prior.basis !== def.basis ||
        prior.amount !== amount
      ) {
        return {
          ok: false,
          code: "FINOPS_T3_THRESHOLD_CONFIG_CONFLICT",
          message:
            "Conflicting threshold definitions share the same C1 key (project-period deferred to apply; code+currency collide with incompatible kind/basis/amount)",
        };
      }
      // Exact duplicate — ignore second copy (same rule twice is not a conflict).
      continue;
    }
    seen.set(c1, { kind: def.kind, basis: def.basis, amount });
    normalized.push({
      thresholdCode,
      kind: def.kind,
      currency,
      basis: def.basis,
      amount,
    });
  }

  return { ok: true, normalized };
}

export async function evaluateProjectPeriodThresholds(
  deps: EvaluateProjectPeriodThresholdsDeps,
  input: EvaluateProjectPeriodThresholdsInput,
): Promise<EvaluateProjectPeriodThresholdsResult> {
  const projectId = input.projectId.trim();
  const periodStart = input.periodStart.trim();
  if (!projectId || !periodStart) {
    return {
      outcome: "failed",
      code: "FINOPS_T3_EVAL_INVALID_INPUT",
      message: "projectId and periodStart are required",
      finopsSideOnly: true,
    };
  }
  if (!isUtcMonthStartDate(periodStart)) {
    return {
      outcome: "failed",
      code: "FINOPS_T3_EVAL_INVALID_INPUT",
      message: "periodStart must be UTC month-start YYYY-MM-DD",
      finopsSideOnly: true,
    };
  }

  // F3 true no-op: empty injected definitions → success without touching
  // aggregates or alert/review stores (no list/apply side effects).
  if (input.definitions.length === 0) {
    return {
      outcome: "succeeded",
      noop: true,
      evaluatedDefinitionCount: 0,
      alerts: [],
      reviews: [],
    };
  }

  const validated = validateThresholdDefinitions(input.definitions);
  if (!validated.ok) {
    return {
      outcome: "failed",
      code: validated.code,
      message: validated.message,
      finopsSideOnly: true,
    };
  }

  let aggregates;
  try {
    aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
      projectId,
      periodStart,
    });
  } catch {
    return {
      outcome: "failed",
      code: "FINOPS_T3_AGGREGATE_READ_FAILED",
      message: "Failed to read FinOps T2 aggregates for evaluation",
      finopsSideOnly: true,
    };
  }

  const byCurrency = new Map(
    aggregates.map((a) => [normalizeCurrency(a.currency), a] as const),
  );

  const outcomes: FinOpsThresholdEvaluationOutcome[] = [];
  for (const def of validated.normalized) {
    const agg = byCurrency.get(def.currency);
    const evaluatedAmount = agg
      ? selectBucketAmount(def.basis, agg)
      : formatMoneyString(moneyFromMinor(BigInt(0), def.currency));
    const rebuildVersion = agg?.rebuildVersion ?? 0;
    const thresholdMoney = parseMoneyString(def.amount, def.currency);
    const evaluatedMoney = parseMoneyString(evaluatedAmount, def.currency);
    const crossed = moneyGte(evaluatedMoney, thresholdMoney);
    const identity = deriveT3ThresholdIdentity({
      projectId,
      periodStart,
      thresholdCode: def.thresholdCode,
      currency: def.currency,
    });
    outcomes.push({
      kind: def.kind,
      thresholdCode: def.thresholdCode,
      currency: def.currency,
      evaluationBasis: def.basis,
      thresholdAmount: def.amount,
      evaluatedAmount: formatMoneyString(evaluatedMoney),
      rebuildVersion,
      crossed,
      dedupKey: identity.dedupKey,
      alertId: identity.alertId,
      reviewId: identity.reviewId,
    });
  }

  const evaluatedAt = deps.nowIso();

  let applied;
  try {
    applied = await deps.alertReview.applyProjectPeriodEvaluation({
      projectId,
      periodStart,
      outcomes,
      evaluatedAt,
    });
  } catch {
    // Contain unexpected apply throws — never leak raw/sensitive error content.
    return {
      outcome: "failed",
      code: "FINOPS_T3_APPLY_THROWN",
      message: "Unexpected error while applying FinOps T3 evaluation",
      finopsSideOnly: true,
    };
  }

  if (applied.outcome === "failed") {
    return {
      outcome: "failed",
      code: applied.code,
      message: applied.message,
      finopsSideOnly: true,
    };
  }

  return {
    outcome: "succeeded",
    noop: false,
    evaluatedDefinitionCount: validated.normalized.length,
    alerts: applied.alerts,
    reviews: applied.reviews,
  };
}
