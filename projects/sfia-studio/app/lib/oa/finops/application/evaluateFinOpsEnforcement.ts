/**
 * FinOps T4 — evaluate soft-control enforcement against dedicated projection.
 *
 * Absent policy → allow / not_configured without projection access (default inert).
 * FAILED ≠ BLOCK. Never throws expected FinOps errors to the coordinator.
 * No default production policy resolver / env / hardcoded thresholds.
 */

import { computeUtcMonthPeriod } from "../domain/period";
import {
  formatMoneyString,
  normalizeCurrency,
  parseMoneyString,
} from "../domain/money";
import type { FinOpsEnforcementPort } from "../ports/finopsEnforcementPort";
import type { FinOpsEnforcementProjectionPort } from "../ports/finopsEnforcementProjectionPort";
import type {
  EvaluateFinOpsEnforcementInput,
  FinOpsEnforcementDecision,
  FinOpsEnforcementPolicy,
} from "./types.enforcement";

export type EvaluateFinOpsEnforcementDeps = {
  readonly projection: FinOpsEnforcementProjectionPort;
  /**
   * Explicitly injected. Returning null ⇒ not_configured allow (inert).
   * No production default resolver exists in this Delivery.
   */
  readonly resolvePolicy: (
    input: EvaluateFinOpsEnforcementInput,
  ) =>
    | Promise<FinOpsEnforcementPolicy | null>
    | FinOpsEnforcementPolicy
    | null;
};

function periodStartDate(occurredAt: string): string {
  return computeUtcMonthPeriod(occurredAt).periodStart.slice(0, 10);
}

function failed(reason: string): FinOpsEnforcementDecision {
  return {
    decision: "failed",
    reason,
    finopsSideOnly: true,
  };
}

function allowNotConfigured(): FinOpsEnforcementDecision {
  return {
    decision: "allow",
    reason: "not_configured",
  };
}

/**
 * Direct T4 evaluation. Never throws for expected FinOps failures.
 */
export async function evaluateFinOpsEnforcement(
  deps: EvaluateFinOpsEnforcementDeps,
  input: EvaluateFinOpsEnforcementInput,
): Promise<FinOpsEnforcementDecision> {
  try {
    const projectId = input.projectId.trim();
    if (!projectId) {
      return failed("invalid_project");
    }

    let policy: FinOpsEnforcementPolicy | null;
    try {
      policy = await deps.resolvePolicy(input);
    } catch {
      return failed("policy_resolver_failed");
    }

    if (!policy) {
      // Default inert: no projection access when policy absent.
      return allowNotConfigured();
    }

    let currency: string;
    let thresholdMinor: bigint;
    let thresholdCanonical: string;
    try {
      currency = normalizeCurrency(policy.currency);
      const thresholdMoney = parseMoneyString(policy.thresholdAmount, currency);
      if (thresholdMoney.amountMinor <= BigInt(0)) {
        return failed("invalid_threshold");
      }
      thresholdMinor = thresholdMoney.amountMinor;
      thresholdCanonical = formatMoneyString(thresholdMoney);
    } catch {
      return failed("invalid_threshold");
    }

    if (policy.effect !== "signal_only" && policy.effect !== "enforce") {
      return failed("invalid_effect");
    }

    let periodStart: string;
    try {
      periodStart = periodStartDate(input.occurredAt);
    } catch {
      return failed("invalid_occurred_at");
    }

    try {
      return await deps.projection.withExclusiveProjectPeriod(
        { projectId, periodStart },
        async (ops) => {
          const row = await ops.readProjection(currency);
          if (!row) {
            return failed("projection_missing");
          }
          const eligible = parseMoneyString(
            row.blockingEligibleAmount,
            currency,
          );
          const provenance = {
            projectId,
            periodStart,
            currency,
            thresholdCode: policy.thresholdCode,
            thresholdAmount: thresholdCanonical,
            blockingEligibleAmount: row.blockingEligibleAmount,
            billedAmount: row.billedAmount,
            providerObservedAmount: row.providerObservedAmount,
            rebuildVersion: row.rebuildVersion,
            rebuiltAt: row.rebuiltAt,
          };

          if (eligible.amountMinor < thresholdMinor) {
            return {
              decision: "allow" as const,
              reason: "below_threshold",
              provenance,
            };
          }

          if (policy.effect === "signal_only") {
            return {
              decision: "soft_signal" as const,
              reason: "threshold_crossed_signal_only",
              provenance,
            };
          }

          return {
            decision: "block" as const,
            reason: "threshold_crossed_enforce",
            provenance,
          };
        },
      );
    } catch {
      return failed("projection_read_failed");
    }
  } catch {
    return failed("evaluation_failed");
  }
}

/**
 * Factory: FinOpsEnforcementPort from projection + injected policy resolver.
 * No default production resolver.
 */
export function createFinOpsEnforcementPort(
  deps: EvaluateFinOpsEnforcementDeps,
): FinOpsEnforcementPort {
  return {
    evaluateBeforeProvider(input) {
      return evaluateFinOpsEnforcement(deps, input);
    },
  };
}
