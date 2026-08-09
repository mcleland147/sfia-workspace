/**
 * FinOps T2 — BILLED period reconciliation (PROJECT_PERIOD attribution).
 * Delta-based append-only corrections; no fake executionRunId.
 *
 * Complete snapshot semantics: atoms previously active in the same economic
 * scope but absent from the current complete snapshot converge to zero via
 * negative deltas. Incomplete / failed provider fetches never tombstone.
 */

import {
  buildAbsentFromCompleteSnapshotCorrectionRef,
  buildCorrectionRef,
  buildProviderPayloadDigest,
  derivedSourceReferenceBelongsToScope,
  isParsableDerivedSourceReference,
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
import { buildAggregatesFromCostEvents } from "./recomputeAggregates";
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

function validateProjectPeriodFact(
  fact: BilledPeriodFact,
  input: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly provider: string;
    readonly externalProjectId: string;
  },
): void {
  if (!fact.derivedSourceReference.trim()) {
    throw new Error("derivedSourceReference is required for BILLED period facts");
  }
  if (!isParsableDerivedSourceReference(fact.derivedSourceReference)) {
    throw new Error("derivedSourceReference is not parsable for scope proof");
  }
  if (fact.projectId.trim() !== input.projectId) {
    throw new Error("fact projectId does not match reconciliation projectId");
  }
  if (fact.provider.trim() !== input.provider) {
    throw new Error("fact provider does not match snapshot provider");
  }
  if (fact.externalProjectId.trim() !== input.externalProjectId) {
    throw new Error(
      "fact externalProjectId does not match snapshot externalProjectId",
    );
  }
  if (
    !derivedSourceReferenceBelongsToScope(fact.derivedSourceReference, {
      provider: input.provider,
      externalProjectId: input.externalProjectId,
      sfiaProjectId: input.projectId,
    })
  ) {
    throw new Error(
      "derivedSourceReference does not belong to reconciliation economic scope",
    );
  }
  if (!periodStartMatchesOccurredAt(input.periodStart, fact.sourceBucketStart)) {
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

function currencyFromDerivedSourceReference(
  derivedSourceReference: string,
): string {
  const parts = derivedSourceReference.split("|");
  return normalizeCurrency(parts[parts.length - 1]!);
}

function collectActiveScopedAtoms(
  ledger: ReadonlyArray<FinOpsCostEvent>,
  scope: {
    readonly projectId: string;
    readonly periodStart: string;
    readonly provider: string;
    readonly externalProjectId: string;
  },
): ReadonlyArray<{
  readonly derivedSourceReference: string;
  readonly currency: string;
  readonly cumulativeMinor: bigint;
  readonly occurredAt: string;
}> {
  const byRef = new Map<
    string,
    { currency: string; occurredAt: string; events: FinOpsCostEvent[] }
  >();

  for (const event of ledger) {
    if (
      event.projectId !== scope.projectId ||
      event.periodStart !== scope.periodStart ||
      event.sourceOfTruth !== "BILLED" ||
      event.attributionScope !== "PROJECT_PERIOD" ||
      event.amount === null
    ) {
      continue;
    }
    const ref = event.derivedSourceReference;
    if (!ref || !ref.trim()) {
      throw new Error(
        "FINOPS_RECON_ATOM_SCOPE_UNPROVABLE: PROJECT_PERIOD BILLED event missing derivedSourceReference",
      );
    }
    if (!isParsableDerivedSourceReference(ref)) {
      throw new Error(
        "FINOPS_RECON_ATOM_SCOPE_UNPROVABLE: PROJECT_PERIOD BILLED event has unparsable derivedSourceReference",
      );
    }
    if (
      !derivedSourceReferenceBelongsToScope(ref, {
        provider: scope.provider,
        externalProjectId: scope.externalProjectId,
        sfiaProjectId: scope.projectId,
      })
    ) {
      // Other economic scope — never tombstone.
      continue;
    }
    const existing = byRef.get(ref);
    if (!existing) {
      byRef.set(ref, {
        currency: normalizeCurrency(event.currency),
        occurredAt: event.occurredAt,
        events: [event],
      });
    } else {
      existing.events.push(event);
    }
  }

  const active: Array<{
    derivedSourceReference: string;
    currency: string;
    cumulativeMinor: bigint;
    occurredAt: string;
  }> = [];

  for (const [derivedSourceReference, bucket] of byRef) {
    const cumulativeMinor = sumMoney(
      bucket.currency,
      bucket.events.map((e) => parseMoneyString(e.amount!, bucket.currency)),
    ).amountMinor;
    if (cumulativeMinor === BigInt(0)) continue;
    active.push({
      derivedSourceReference,
      currency: bucket.currency,
      cumulativeMinor,
      occurredAt: bucket.occurredAt,
    });
  }
  return active;
}

async function appendDeltaEvent(input: {
  readonly ops: {
    readonly insertCostEvent: FinOpsReconciliationPort["insertCostEvent"];
  };
  readonly ledger: FinOpsCostEvent[];
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBatchId: string;
  readonly provider: string;
  readonly derivedSourceReference: string;
  readonly currency: string;
  readonly deltaAmount: string;
  readonly correctionRef: string;
  readonly occurredAt: string;
}): Promise<"created" | "duplicate"> {
  const identity = derivePeriodCostEventIdentity({
    projectId: input.projectId,
    periodStart: input.periodStart,
    provider: input.provider,
    derivedSourceReference: input.derivedSourceReference,
    correctionRef: input.correctionRef,
    sourceBatchId: input.sourceBatchId,
    amount: input.deltaAmount,
    currency: input.currency,
  });

  const event: FinOpsCostEvent = {
    costEventId: identity.costEventId,
    dedupKey: identity.dedupKey,
    projectId: input.projectId,
    attributionScope: "PROJECT_PERIOD",
    executionRunId: null,
    derivedSourceReference: input.derivedSourceReference,
    usageEventId: null,
    periodStart: input.periodStart,
    currency: input.currency,
    amount: input.deltaAmount,
    evidenceClass: "billed",
    sourceOfTruth: "BILLED",
    estimationStatus: "available",
    correctionRef: input.correctionRef,
    catalogVersion: null,
    provider: input.provider,
    model: null,
    unit: null,
    billingQuantum: null,
    usageQuantity: null,
    occurredAt: input.occurredAt,
  };

  const result = await input.ops.insertCostEvent(event);
  if (result.outcome === "created") {
    input.ledger.push(event);
    return "created";
  }
  if (result.outcome === "duplicate") {
    return "duplicate";
  }
  if (result.outcome === "conflict") {
    throw new Error(result.message);
  }
  throw new Error(result.message);
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

  const snapshot = input.snapshot;
  if (
    !snapshot ||
    (snapshot.completeness !== "complete" &&
      snapshot.completeness !== "incomplete") ||
    !snapshot.provider?.trim() ||
    !snapshot.externalProjectId?.trim()
  ) {
    return {
      outcome: "failed",
      reconciliationId: null,
      code: "FINOPS_RECON_INVALID_INPUT",
      message:
        "snapshot.completeness, snapshot.provider, and snapshot.externalProjectId are required",
      finopsSideOnly: true,
    };
  }

  const provider = snapshot.provider.trim();
  const externalProjectId = snapshot.externalProjectId.trim();

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

        const presentRefs = new Set<string>();

        for (const fact of input.facts) {
          validateProjectPeriodFact(fact, {
            projectId,
            periodStart,
            provider,
            externalProjectId,
          });
          presentRefs.add(fact.derivedSourceReference);
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

          const insertOutcome = await appendDeltaEvent({
            ops,
            ledger,
            projectId,
            periodStart,
            sourceBatchId,
            provider,
            derivedSourceReference: fact.derivedSourceReference,
            currency,
            deltaAmount,
            correctionRef,
            occurredAt: fact.sourceBucketStart,
          });
          if (insertOutcome === "created") {
            createdCount += 1;
          } else {
            duplicateCount += 1;
          }
          processedCount += 1;
        }

        // Missing-atom corrections only for COMPLETE snapshots of this scope.
        // Incomplete / provider failure must never be treated as empty-complete.
        if (snapshot.completeness === "complete") {
          const active = collectActiveScopedAtoms(ledger, {
            projectId,
            periodStart,
            provider,
            externalProjectId,
          });

          for (const atom of active) {
            if (presentRefs.has(atom.derivedSourceReference)) continue;

            // Target absolute economic state = 0 for this atom in scope.
            const currency =
              atom.currency ||
              currencyFromDerivedSourceReference(atom.derivedSourceReference);
            const cumulative = sumLedgerForAtom(ledger, {
              projectId,
              periodStart,
              currency,
              derivedSourceReference: atom.derivedSourceReference,
            });
            if (cumulative === BigInt(0)) continue;

            const deltaMinor = BigInt(0) - cumulative;
            const deltaAmount = formatMoneyString(
              moneyFromMinor(deltaMinor, currency),
            );
            const correctionRef = buildAbsentFromCompleteSnapshotCorrectionRef({
              derivedSourceReference: atom.derivedSourceReference,
              sourceBatchId,
              provider,
              externalProjectId,
              sfiaProjectId: projectId,
              periodStart,
            });

            const insertOutcome = await appendDeltaEvent({
              ops,
              ledger,
              projectId,
              periodStart,
              sourceBatchId,
              provider,
              derivedSourceReference: atom.derivedSourceReference,
              currency,
              deltaAmount,
              correctionRef,
              occurredAt: atom.occurredAt,
            });
            if (insertOutcome === "created") {
              createdCount += 1;
            } else {
              duplicateCount += 1;
            }
            processedCount += 1;
          }
        }

        // Rebuild from the in-session ledger. A separate DB read would miss
        // uncommitted inserts under withExclusiveProjectPeriodReconciliation.
        const existingAggregates =
          await deps.aggregates.listAggregatesForProjectPeriod({
            projectId,
            periodStart,
          });
        const previousVersions = new Map(
          existingAggregates.map((row) => [row.currency, row.rebuildVersion]),
        );
        const rebuilt = buildAggregatesFromCostEvents({
          projectId,
          periodStart,
          events: ledger,
          rebuiltAt: deps.nowIso(),
          previousVersions,
        });
        const aggregates =
          await deps.aggregates.withExclusiveProjectPeriodRebuild(
            { projectId, periodStart },
            async (aggregateOps) => {
              await aggregateOps.replaceAggregates(rebuilt);
              return rebuilt;
            },
          );

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
          aggregates,
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
