/**
 * FinOps T2 — full rebuild of A1 durable derived aggregates from cost events.
 * Ledger/cost events remain authoritative; aggregates are projections only.
 * SUM of scale-8 amounts — no additional rounding.
 *
 * Rebuild is always project+period COMPLETE (all currencies). Partial
 * per-currency rebuild is intentionally not supported: replace deletes the
 * whole project/period projection.
 */

import {
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  type FinOpsMoney,
} from "../domain/money";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type {
  FinOpsCostEvent,
  FinOpsProjectPeriodAggregate,
  RecomputeAggregatesInput,
  RecomputeAggregatesResult,
} from "./types.aggregate";

export type RecomputeAggregatesDeps = {
  readonly aggregates: FinOpsAggregatePort;
  /** Injected clock for rebuiltAt (ISO). */
  readonly nowIso: () => string;
};

function zeroCanonical(currency: string): string {
  return formatMoneyString(moneyFromMinor(BigInt(0), currency));
}

function addCanonical(
  currency: string,
  left: string,
  right: FinOpsMoney,
): string {
  const sum = parseMoneyString(left, currency).amountMinor + right.amountMinor;
  return formatMoneyString(moneyFromMinor(sum, currency));
}

export function buildAggregatesFromCostEvents(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly events: ReadonlyArray<FinOpsCostEvent>;
  readonly rebuiltAt: string;
  readonly previousVersions?: ReadonlyMap<string, number>;
}): ReadonlyArray<FinOpsProjectPeriodAggregate> {
  type Acc = {
    estimated: string;
    observed: string;
    billed: string;
    unknown: string;
    costEventCount: number;
    unavailableEstimationCount: number;
  };

  const byCurrency = new Map<string, Acc>();

  const ensure = (currencyRaw: string): Acc => {
    const currency = normalizeCurrency(currencyRaw);
    let acc = byCurrency.get(currency);
    if (!acc) {
      acc = {
        estimated: zeroCanonical(currency),
        observed: zeroCanonical(currency),
        billed: zeroCanonical(currency),
        unknown: zeroCanonical(currency),
        costEventCount: 0,
        unavailableEstimationCount: 0,
      };
      byCurrency.set(currency, acc);
    }
    return acc;
  };

  for (const event of input.events) {
    if (event.projectId !== input.projectId) continue;
    if (event.periodStart !== input.periodStart) continue;
    const acc = ensure(event.currency);
    acc.costEventCount += 1;
    if (
      event.estimationStatus === "unavailable" ||
      event.estimationStatus === "unknown"
    ) {
      if (event.evidenceClass === "estimated" || event.evidenceClass === "unknown") {
        acc.unavailableEstimationCount += 1;
      }
    }
    if (event.amount === null) continue;
    const money = parseMoneyString(event.amount, event.currency);
    switch (event.evidenceClass) {
      case "estimated":
        acc.estimated = addCanonical(event.currency, acc.estimated, money);
        break;
      case "observed":
        acc.observed = addCanonical(event.currency, acc.observed, money);
        break;
      case "billed":
        acc.billed = addCanonical(event.currency, acc.billed, money);
        break;
      case "unknown":
        acc.unknown = addCanonical(event.currency, acc.unknown, money);
        break;
      default: {
        const _exhaustive: never = event.evidenceClass;
        void _exhaustive;
      }
    }
  }

  const out: FinOpsProjectPeriodAggregate[] = [];
  for (const [currency, acc] of byCurrency) {
    const prev = input.previousVersions?.get(currency) ?? 0;
    out.push({
      projectId: input.projectId,
      periodStart: input.periodStart,
      currency,
      estimatedAmount: acc.estimated,
      observedAmount: acc.observed,
      billedAmount: acc.billed,
      unknownAmount: acc.unknown,
      inputTokensSum: null,
      outputTokensSum: null,
      totalTokensSum: null,
      costEventCount: acc.costEventCount,
      unavailableEstimationCount: acc.unavailableEstimationCount,
      rebuildVersion: prev + 1,
      rebuiltAt: input.rebuiltAt,
    });
  }
  return out;
}

/**
 * Full project/period A1 rebuild under exclusive serialization.
 * Covers authoritative read → derive → replace on one locked session.
 */
export async function recomputeAggregates(
  deps: RecomputeAggregatesDeps,
  input: RecomputeAggregatesInput,
): Promise<RecomputeAggregatesResult> {
  try {
    const projectId = input.projectId.trim();
    const periodStart = input.periodStart.trim();
    if (!projectId || !periodStart) {
      return {
        outcome: "failed",
        code: "FINOPS_AGGREGATE_INVALID_INPUT",
        message: "projectId and periodStart are required",
      };
    }

    const aggregates = await deps.aggregates.withExclusiveProjectPeriodRebuild(
      { projectId, periodStart },
      async (ops) => {
        const events = await ops.listAllCostEventsForPeriod();
        const existing = await ops.listAggregates();
        const previousVersions = new Map(
          existing.map((row) => [row.currency, row.rebuildVersion]),
        );
        const rebuilt = buildAggregatesFromCostEvents({
          projectId,
          periodStart,
          events,
          rebuiltAt: deps.nowIso(),
          previousVersions,
        });
        await ops.replaceAggregates(rebuilt);
        return rebuilt;
      },
    );

    return { outcome: "succeeded", aggregates };
  } catch (error) {
    return {
      outcome: "failed",
      code: "FINOPS_AGGREGATE_RECOMPUTE_FAILED",
      message:
        error instanceof Error ? error.message : "aggregate recompute failed",
    };
  }
}
