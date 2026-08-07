/**
 * FinOps T2 — explicit reconcileProjectPeriod (on-demand + bounded batch).
 * estimated → observed → billed via append-only correction cost events.
 * No cron / always-on polling. Failures are FinOps-side only.
 *
 * After the batch inserts, A1 is rebuilt ONCE for the full project/period
 * (all currencies) — never per-currency.
 */

import { normalizeCurrency, parseMoneyString } from "../domain/money";
import { computeUtcMonthPeriod } from "../domain/period";
import type { FinOpsAggregatePort } from "../ports/finopsAggregatePort";
import type { FinOpsReconciliationPort } from "../ports/finopsReconciliationPort";
import {
  recomputeAggregates,
  type RecomputeAggregatesDeps,
} from "./recomputeAggregates";
import {
  deriveCostEventIdentity,
  deriveReconciliationDedupKey,
} from "./t2Identity";
import type {
  FinOpsCostEvent,
  ReconcileProjectPeriodInput,
  ReconcileProjectPeriodResult,
} from "./types.aggregate";

export type ReconcileProjectPeriodDeps = {
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

export async function reconcileProjectPeriod(
  deps: ReconcileProjectPeriodDeps,
  input: ReconcileProjectPeriodInput,
): Promise<ReconcileProjectPeriodResult> {
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

  const { reconciliationId, dedupKey } = deriveReconciliationDedupKey({
    projectId,
    periodStart,
    sourceBatchId,
  });

  const existing = await deps.reconciliation.findReconciliationByDedup(dedupKey);
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

  const insert = await deps.reconciliation.insertReconciliationRecord({
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
    await deps.reconciliation.completeReconciliationRecord({
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
    await deps.reconciliation.completeReconciliationRecord({
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
    for (const fact of input.facts) {
      if (!fact.correctionRef.trim()) {
        throw new Error("correctionRef is required for reconciliation facts");
      }
      if (!periodStartMatchesOccurredAt(periodStart, fact.occurredAt)) {
        throw new Error("fact occurredAt does not belong to periodStart");
      }
      const currency = normalizeCurrency(fact.currency);
      // Validate canonical Money (rejects float leakage / over-scale).
      parseMoneyString(fact.amount, currency);

      const identity = deriveCostEventIdentity({
        projectId,
        executionRunId: fact.executionRunId,
        evidenceClass: fact.evidenceClass,
        correctionRef: fact.correctionRef,
        sourceBatchId,
        amount: fact.amount,
        currency,
      });

      const event: FinOpsCostEvent = {
        costEventId: identity.costEventId,
        dedupKey: identity.dedupKey,
        projectId,
        executionRunId: fact.executionRunId,
        usageEventId: fact.usageEventId,
        periodStart,
        currency,
        amount: fact.amount,
        evidenceClass: fact.evidenceClass,
        sourceOfTruth: fact.sourceOfTruth,
        estimationStatus: "available",
        correctionRef: fact.correctionRef,
        catalogVersion: null,
        provider: fact.provider,
        model: fact.model,
        unit: null,
        billingQuantum: null,
        usageQuantity: null,
        occurredAt: fact.occurredAt,
      };

      const result = await deps.reconciliation.insertCostEvent(event);
      if (result.outcome === "created") createdCount += 1;
      else if (result.outcome === "duplicate") duplicateCount += 1;
      else if (result.outcome === "conflict") {
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

    // ONE full project/period rebuild for ALL currencies (no per-currency path).
    const recomputed = await recomputeAggregates(recomputeDeps, {
      projectId,
      periodStart,
    });
    if (recomputed.outcome === "failed") {
      throw new Error(recomputed.message);
    }

    await deps.reconciliation.completeReconciliationRecord({
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
      error instanceof Error ? error.message : "reconciliation failed";
    await deps.reconciliation.completeReconciliationRecord({
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
}
