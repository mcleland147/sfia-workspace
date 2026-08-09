/**
 * FinOps T2 — BILLED period reconciliation (PROJECT_PERIOD attribution).
 * Delta-based append-only corrections; no fake executionRunId.
 */

import {
  buildCorrectionRef,
  buildProviderPayloadDigest,
} from "./billedPeriodIdentity";
import {
  formatMoneyString,
  moneyFromMinor,
  normalizeCurrency,
  parseMoneyString,
  sumMoney,
} from "../domain/money";
import { computeUtcMonthPeriod } from "../domain/period";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import {
  recomputeAggregates,
  type RecomputeAggregatesDeps,
} from "./recomputeAggregates";
import {
  derivePeriodCostEventIdentity,
  derivePeriodReconciliationDedupKey,
} from "./t2Identity";
import type {
  BilledPeriodFact,
  FinOpsCostEvent,
  ReconcileBilledPeriodInput,
  ReconcileBilledPeriodResult,
} from "./types.aggregate";

export type ReconcileBilledPeriodDeps = {
  readonly reconciliation: FinOpsReconciliationPort;
  readonly aggregates: FinOpsAggregatePort;
  readonly nowIso: () => string;
};

const DEFAULT_MAX_FACTS = 100;

function periodStartMatchesOccurredAt(
  periodStart: string,
  occurredAt: string,
): boolean {
  try {
    const period = computeUtcMonthPeriod(occurredAt);
    return period.periodStart.slice(0, 10) === periodStart;
  } catch {
    return false;
  }
}

function validateProjectPeriodFact(fact: BilledPeriodFact, periodStart: string): void {
  if (!fact.derivedSourceReference.trim()) {
    throw new Error("derivedSourceReference is required for BILLED period facts");
  }
  if (!periodStartMatchesOccurredAt(periodStart, fact.sourceBucketStart)) {
    throw new Error("fact sourceBucketStart does not belong to periodStart");
  }
}

function sumLedgerForAtom(
  events: ReadonlyArray<FinOpsCostEvent>,
  input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly currency: string;
    readonly derivedSourceReference: string;
  },
): bigint {
  const matching = events.filter(
    (e) =>
      e.projectId === input.projectId &&
      e.periodStart === input.periodStart &&
      e.currency === input.currency &&
      e.derivedSourceReference === input.derivedSourceReference &&
      e.sourceOfTruth === "BILLED" &&
      e.attributionScope === "PROJECT_PERIOD" &&
      e.amount !== null,
  );
  if (matching.length === 0) return BigInt(0);
  return sumMoney(
    input.currency,
    matching.map((e) => parseMoneyString(e.amount!, input.currency)),
  ).amountMinor;
}

export async function reconcileBilledPeriod(
  deps: ReconcileBilledPeriodDeps,
  input: ReconcileBilledPeriodInput,
): Promise<ReconcileBilledPeriodResult> {
  const projectId = input.projectId.trim();
  const periodStart = input.periodStart.trim();
  const sourceBatchId = input.sourceBatchId.trim();
  if (!projectId || !periodStart || !sourceBatchId) {
    return {
      outcome: "failed",
      reconciliationId: null,
      code: "FINOPS_RECON_INVALID_INPUT",
      message: "projectId, periodStart, and sourceBatchId are required",
      finopsSideOnly: true,
    };
  }

  const { reconciliationId, dedupKey } = derivePeriodReconciliationDedupKey({
    projectId,
    periodStart,
    sourceBatchId,
  });

  return deps.reconciliation.withExclusiveProjectPeriodReconciliation(
    { projectId, periodStart },
    async (ops) => {
      const existing = await ops.findReconciliationByDedup(dedupKey);
      if (existing && existing.status === "succeeded") {
        const aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
          projectId,
          periodStart,
        });
        return {
          outcome: "succeeded",
          reconciliationId: existing.reconciliationId,
          processedCount: existing.processedCount,
          createdCount: 0,
          duplicateCount: existing.processedCount,
          aggregates,
          idempotentReplay: true,
        };
      }

      const insert = await ops.insertReconciliationRecord({
        reconciliationId,
        dedupKey,
        projectId,
        periodStart,
        sourceBatchId,
        status: "failed",
        processedCount: 0,
        errorCode: null,
        errorMessage: null,
        completedAt: null,
      });

      if (insert.outcome === "duplicate" && insert.existing.status === "succeeded") {
        const aggregates = await deps.aggregates.listAggregatesForProjectPeriod({
          projectId,
          periodStart,
        });
        return {
          outcome: "succeeded",
          reconciliationId: insert.existing.reconciliationId,
          processedCount: insert.existing.processedCount,
          createdCount: 0,
          duplicateCount: insert.existing.processedCount,
          aggregates,
          idempotentReplay: true,
        };
      }

      if (insert.outcome === "failed") {
        return {
          outcome: "failed",
          reconciliationId,
          code: "FINOPS_RECON_PERSIST_FAILED",
          message: insert.message,
          finopsSideOnly: true,
        };
      }

      const maxFacts = input.maxFacts ?? DEFAULT_MAX_FACTS;
      if (
        typeof maxFacts !== "number" ||
        !Number.isSafeInteger(maxFacts) ||
        maxFacts <= 0
      ) {
        await ops.completeReconciliationRecord({
          reconciliationId,
          status: "failed",
          processedCount: 0,
          errorCode: "FINOPS_RECON_INVALID_BATCH_BOUND",
          errorMessage: "maxFacts must be a positive safe integer",
          completedAt: deps.nowIso(),
        });
        return {
          outcome: "failed",
          reconciliationId,
          code: "FINOPS_RECON_INVALID_BATCH_BOUND",
          message: "maxFacts must be a positive safe integer",
          finopsSideOnly: true,
        };
      }

      if (input.facts.length > maxFacts) {
        await ops.completeReconciliationRecord({
          reconciliationId,
          status: "failed",
          processedCount: 0,
          errorCode: "FINOPS_RECON_BATCH_TOO_LARGE",
          errorMessage: `facts exceed bounded batch maxFacts=${maxFacts}`,
          completedAt: deps.nowIso(),
        });
        return {
          outcome: "failed",
          reconciliationId,
          code: "FINOPS_RECON_BATCH_TOO_LARGE",
          message: `facts exceed bounded batch maxFacts=${maxFacts}`,
          finopsSideOnly: true,
        };
      }

      let createdCount = 0;
      let duplicateCount = 0;
      let processedCount = 0;

      try {
        const ledger: FinOpsCostEvent[] = [
          ...(await ops.listCostEventsForProjectPeriod({
            projectId,
            periodStart,
          })),
        ];

        for (const fact of input.facts) {
          validateProjectPeriodFact(fact, periodStart);
          const currency = normalizeCurrency(fact.currency);
          const providerAmount = parseMoneyString(fact.providerAmount, currency);

          const cumulative = sumLedgerForAtom(ledger, {
            projectId,
            periodStart,
            currency,
            derivedSourceReference: fact.derivedSourceReference,
          });
          const deltaMinor = providerAmount.amountMinor - cumulative;
          if (deltaMinor === BigInt(0)) {
            duplicateCount += 1;
            processedCount += 1;
            continue;
          }

          const deltaAmount = formatMoneyString(
            moneyFromMinor(deltaMinor, currency),
          );
          const correctionRef =
            cumulative === BigInt(0)
              ? buildCorrectionRef({ kind: "INITIAL" })
              : buildCorrectionRef({
                  kind: "CORR",
                  providerPayloadDigest: buildProviderPayloadDigest({
                    provider: fact.provider,
                    externalProjectId: fact.externalProjectId,
                    projectId: fact.projectId,
                    periodStart,
                    sourceBucketStart: fact.sourceBucketStart,
                    sourceBucketEndExclusive: fact.sourceBucketEndExclusive,
                    lineItem: fact.lineItem,
                    currency,
                    providerAmount: fact.providerAmount,
                    derivedSourceReference: fact.derivedSourceReference,
                  }),
                });

          const identity = derivePeriodCostEventIdentity({
            projectId,
            periodStart,
            provider: fact.provider,
            derivedSourceReference: fact.derivedSourceReference,
            correctionRef,
            sourceBatchId,
            amount: deltaAmount,
            currency,
          });

          const event: FinOpsCostEvent = {
            costEventId: identity.costEventId,
            dedupKey: identity.dedupKey,
            projectId,
            attributionScope: "PROJECT_PERIOD",
            executionRunId: null,
            derivedSourceReference: fact.derivedSourceReference,
            usageEventId: null,
            periodStart,
            currency,
            amount: deltaAmount,
            evidenceClass: "billed",
            sourceOfTruth: "BILLED",
            estimationStatus: "available",
            correctionRef,
            catalogVersion: null,
            provider: fact.provider,
            model: null,
            unit: null,
            billingQuantum: null,
            usageQuantity: null,
            occurredAt: fact.sourceBucketStart,
          };

          const result = await ops.insertCostEvent(event);
          if (result.outcome === "created") {
            createdCount += 1;
            ledger.push(event);
          } else if (result.outcome === "duplicate") {
            duplicateCount += 1;
          } else if (result.outcome === "conflict") {
            throw new Error(result.message);
          } else {
            throw new Error(result.message);
          }
          processedCount += 1;
        }

        const recomputeDeps: RecomputeAggregatesDeps = {
          aggregates: deps.aggregates,
          nowIso: deps.nowIso,
        };
        const recomputed = await recomputeAggregates(recomputeDeps, {
          projectId,
          periodStart,
        });
        if (recomputed.outcome === "failed") {
          throw new Error(recomputed.message);
        }

        await ops.completeReconciliationRecord({
          reconciliationId,
          status: "succeeded",
          processedCount,
          errorCode: null,
          errorMessage: null,
          completedAt: deps.nowIso(),
        });

        return {
          outcome: "succeeded",
          reconciliationId,
          processedCount,
          createdCount,
          duplicateCount,
          aggregates: recomputed.aggregates,
          idempotentReplay: false,
        };
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "billed period reconciliation failed";
        await ops.completeReconciliationRecord({
          reconciliationId,
          status: "failed",
          processedCount,
          errorCode: "FINOPS_RECON_FAILED",
          errorMessage: message,
          completedAt: deps.nowIso(),
        });
        return {
          outcome: "failed",
          reconciliationId,
          code: "FINOPS_RECON_FAILED",
          message,
          finopsSideOnly: true,
        };
      }
    },
  );
}
