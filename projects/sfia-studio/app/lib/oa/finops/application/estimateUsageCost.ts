/**
 * FinOps T2 — estimate usage cost from R3 catalog (HALF_EVEN once).
 * Missing catalog entry ⇒ unavailable/unknown estimation; never invents tariffs.
 * Estimated cost never blocks (caller responsibility; this module only computes).
 */

import {
  formatMoneyString,
  moneyFromRateUsageHalfEven,
  type FinOpsMoney,
} from "../domain/money";
import type { FinOpsPriceCatalogPort } from "../ports/finopsPriceCatalogPort";
import type { FinOpsEstimationStatus } from "./types.aggregate";

export type EstimateUsageCostInput = {
  readonly provider: string;
  readonly model: string | null;
  readonly unit: string;
  readonly currency: string;
  readonly usageQuantity: bigint;
  readonly occurredAt: string;
  readonly catalogVersion?: string;
};

export type EstimateUsageCostResult =
  | {
      readonly status: "available";
      readonly estimationStatus: "available";
      readonly amount: FinOpsMoney;
      readonly amountCanonical: string;
      readonly catalogVersion: string;
      readonly unit: string;
      readonly billingQuantum: string;
      readonly usageQuantity: string;
    }
  | {
      readonly status: "unavailable";
      readonly estimationStatus: FinOpsEstimationStatus;
      readonly reason: string;
    };

export async function estimateUsageCost(
  catalog: FinOpsPriceCatalogPort,
  input: EstimateUsageCostInput,
): Promise<EstimateUsageCostResult> {
  if (!input.model || !input.model.trim()) {
    return {
      status: "unavailable",
      estimationStatus: "unavailable",
      reason: "model required for catalog lookup",
    };
  }

  const lookup = await catalog.lookup({
    provider: input.provider,
    model: input.model,
    unit: input.unit,
    currency: input.currency,
    at: input.occurredAt,
    catalogVersion: input.catalogVersion,
  });

  if (lookup.status === "unavailable") {
    return {
      status: "unavailable",
      estimationStatus: "unavailable",
      reason: lookup.reason,
    };
  }

  const money = moneyFromRateUsageHalfEven({
    ratePerQuantum: lookup.entry.ratePerQuantum,
    usageCount: input.usageQuantity,
    billingQuantum: lookup.entry.billingQuantum,
  });

  return {
    status: "available",
    estimationStatus: "available",
    amount: money,
    amountCanonical: formatMoneyString(money),
    catalogVersion: lookup.entry.catalogVersion,
    unit: lookup.entry.unit,
    billingQuantum: lookup.entry.billingQuantum.toString(),
    usageQuantity: input.usageQuantity.toString(),
  };
}
