/**
 * FinOps T4 — build + explicit on-demand rebuild of SoT-safe enforcement projection.
 *
 * Blocking-eligible SoTs only: BILLED + PROVIDER_OBSERVED.
 * API_USAGE / LOCAL_COUNT / PARAMETRIC_ESTIMATE / UNKNOWN never contribute.
 * No FX / no cross-currency sum. Money via BigInt minor units.
 * Inconsistent SoT ↔ evidenceClass fails FinOps-side (never silent coerce).
 */

import { evaluateBlockingEligibility } from "../domain/blockingEligibility";
import {
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  type FinOpsMoney,
} from "../domain/money";
import type { FinOpsCostEvent } from "./types.aggregate";
import type { FinOpsEnforcementProjectionPort } from "../ports/finopsEnforcementProjectionPort";
import type {
  FinOpsEnforcementProjection,
  RebuildEnforcementProjectionInput,
  RebuildEnforcementProjectionResult,
} from "./types.enforcement";

export type RebuildEnforcementProjectionDeps = {
  readonly projection: FinOpsEnforcementProjectionPort;
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

function expectedEvidenceForBlockingSoT(
  source: "BILLED" | "PROVIDER_OBSERVED",
): "billed" | "observed" {
  return source === "BILLED" ? "billed" : "observed";
}

export class FinOpsEnforcementBuildError extends Error {
  readonly code: string;
  readonly finopsSideOnly = true as const;
  constructor(code: string, message: string) {
    super(message);
    this.name = "FinOpsEnforcementBuildError";
    this.code = code;
  }
}

type Acc = {
  billed: string;
  providerObserved: string;
  billedEventCount: number;
  providerObservedEventCount: number;
  eligibleCostEventCount: number;
};

/**
 * Pure builder from authoritative cost events.
 * Emits one projection row per currency present in the project/period events.
 */
export function buildEnforcementProjectionsFromCostEvents(input: {
  readonly projectId: string;
  readonly periodStart: string;
  readonly events: ReadonlyArray<FinOpsCostEvent>;
  readonly rebuiltAt: string;
  readonly previousVersions?: ReadonlyMap<string, number>;
}): ReadonlyArray<FinOpsEnforcementProjection> {
  const byCurrency = new Map<string, Acc>();

  const ensure = (currencyRaw: string): Acc => {
    const currency = normalizeCurrency(currencyRaw);
    let acc = byCurrency.get(currency);
    if (!acc) {
      acc = {
        billed: zeroCanonical(currency),
        providerObserved: zeroCanonical(currency),
        billedEventCount: 0,
        providerObservedEventCount: 0,
        eligibleCostEventCount: 0,
      };
      byCurrency.set(currency, acc);
    }
    return acc;
  };

  for (const event of input.events) {
    if (event.projectId !== input.projectId) continue;
    if (event.periodStart !== input.periodStart) continue;

    const currency = normalizeCurrency(event.currency);
    const acc = ensure(currency);

    const eligibility = evaluateBlockingEligibility(event.sourceOfTruth);
    if (!eligibility.eligible) {
      // Non-blocking SoTs (API_USAGE, estimates, UNKNOWN, …) never contribute.
      continue;
    }

    if (
      event.sourceOfTruth !== "BILLED" &&
      event.sourceOfTruth !== "PROVIDER_OBSERVED"
    ) {
      // Defensive: evaluateBlockingEligibility only returns eligible for those two.
      continue;
    }

    const expected = expectedEvidenceForBlockingSoT(event.sourceOfTruth);
    if (event.evidenceClass !== expected) {
      throw new FinOpsEnforcementBuildError(
        "FINOPS_T4_SOT_EVIDENCE_INCONSISTENT",
        "FinOps enforcement projection rejected inconsistent SoT/evidenceClass",
      );
    }

    acc.eligibleCostEventCount += 1;
    if (event.sourceOfTruth === "BILLED") {
      acc.billedEventCount += 1;
    } else {
      acc.providerObservedEventCount += 1;
    }

    if (event.amount === null) continue;

    const money = parseMoneyString(event.amount, currency);
    if (event.sourceOfTruth === "BILLED") {
      acc.billed = addCanonical(currency, acc.billed, money);
    } else {
      acc.providerObserved = addCanonical(currency, acc.providerObserved, money);
    }
  }

  const out: FinOpsEnforcementProjection[] = [];
  for (const [currency, acc] of byCurrency) {
    const billedMoney = parseMoneyString(acc.billed, currency);
    const observedMoney = parseMoneyString(acc.providerObserved, currency);
    const blocking = formatMoneyString(
      moneyFromMinor(
        billedMoney.amountMinor + observedMoney.amountMinor,
        currency,
      ),
    );
    const prev = input.previousVersions?.get(currency) ?? 0;
    out.push({
      projectId: input.projectId,
      periodStart: input.periodStart,
      currency,
      blockingEligibleAmount: blocking,
      billedAmount: acc.billed,
      providerObservedAmount: acc.providerObserved,
      eligibleCostEventCount: acc.eligibleCostEventCount,
      billedEventCount: acc.billedEventCount,
      providerObservedEventCount: acc.providerObservedEventCount,
      rebuildVersion: prev + 1,
      rebuiltAt: input.rebuiltAt,
    });
  }
  return out.sort((a, b) => a.currency.localeCompare(b.currency));
}

/**
 * Explicit on-demand rebuild: short project/period lock → read ledger →
 * build all currencies → atomic replace → commit/release.
 * Never holds the lock across provider I/O.
 */
export async function rebuildEnforcementProjection(
  deps: RebuildEnforcementProjectionDeps,
  input: RebuildEnforcementProjectionInput,
): Promise<RebuildEnforcementProjectionResult> {
  try {
    const projectId = input.projectId.trim();
    const periodStart = input.periodStart.trim();
    if (!projectId || !periodStart) {
      return {
        outcome: "failed",
        code: "FINOPS_T4_REBUILD_INVALID",
        message: "projectId and periodStart are required",
        finopsSideOnly: true,
      };
    }

    const rebuiltAt = deps.nowIso();
    const projections = await deps.projection.withExclusiveProjectPeriod(
      { projectId, periodStart },
      async (ops) => {
        const events = await ops.listAllCostEventsForPeriod();
        const existing = await ops.listProjections();
        const previousVersions = new Map<string, number>();
        for (const row of existing) {
          previousVersions.set(row.currency, row.rebuildVersion);
        }
        const next = buildEnforcementProjectionsFromCostEvents({
          projectId,
          periodStart,
          events,
          rebuiltAt,
          previousVersions,
        });
        await ops.replaceProjections(next);
        return next;
      },
    );

    return { outcome: "succeeded", projections };
  } catch (error) {
    if (error instanceof FinOpsEnforcementBuildError) {
      return {
        outcome: "failed",
        code: error.code,
        message: error.message,
        finopsSideOnly: true,
      };
    }
    return {
      outcome: "failed",
      code: "FINOPS_T4_REBUILD_FAILED",
      message: "FinOps enforcement projection rebuild failed",
      finopsSideOnly: true,
    };
  }
}
