/**
 * In-memory FinOps T2 ports for unit tests (no Postgres).
 */

import type {
  FinOpsCostEvent,
  FinOpsCostEventInsertResult,
  FinOpsProjectPeriodAggregate,
  FinOpsReconciliationRecord,
} from "../../application/types.aggregate";
import type { FinOpsAggregatePort } from "../../ports/finopsAggregatePort";
import type {
  FinOpsPriceCatalogEntry,
  FinOpsPriceCatalogPort,
} from "../../ports/finopsPriceCatalogPort";
import type { FinOpsReconciliationPort } from "../../ports/finopsReconciliationPort";

export function createMemoryFinOpsAggregateStore(
  reconciliation?: {
    readonly listCostEventsForProjectPeriod: FinOpsReconciliationPort["listCostEventsForProjectPeriod"];
  },
): FinOpsAggregatePort & {
  readonly _rows: Map<string, FinOpsProjectPeriodAggregate>;
} {
  const rows = new Map<string, FinOpsProjectPeriodAggregate>();
  const keyOf = (projectId: string, periodStart: string, currency: string) =>
    `${projectId}|${periodStart}|${currency}`;

  /** Per project+period async mutex (unit-test stand-in; PG uses advisory locks). */
  const exclusiveChains = new Map<string, Promise<unknown>>();

  const replaceLocal = (input: {
    projectId: string;
    periodStart: string;
    aggregates: ReadonlyArray<FinOpsProjectPeriodAggregate>;
  }) => {
    for (const [k, v] of [...rows.entries()]) {
      if (v.projectId === input.projectId && v.periodStart === input.periodStart) {
        rows.delete(k);
      }
    }
    for (const agg of input.aggregates) {
      rows.set(keyOf(agg.projectId, agg.periodStart, agg.currency), agg);
    }
  };

  return {
    _rows: rows,
    async replaceProjectPeriodAggregates(input) {
      replaceLocal(input);
    },
    async readAggregate(key) {
      return rows.get(keyOf(key.projectId, key.periodStart, key.currency)) ?? null;
    },
    async listAggregatesForProjectPeriod(input) {
      return [...rows.values()]
        .filter(
          (r) =>
            r.projectId === input.projectId &&
            r.periodStart === input.periodStart,
        )
        .sort((a, b) => a.currency.localeCompare(b.currency));
    },
    async withExclusiveProjectPeriodRebuild(input, work) {
      const lockKey = `${input.projectId}|${input.periodStart}`;
      const prev = exclusiveChains.get(lockKey) ?? Promise.resolve();
      let release!: () => void;
      const gate = new Promise<void>((resolve) => {
        release = resolve;
      });
      const next = prev.then(() => gate);
      exclusiveChains.set(lockKey, next.catch(() => undefined));
      await prev.catch(() => undefined);
      try {
        const costSource = reconciliation;
        return await work({
          async listAllCostEventsForPeriod() {
            if (!costSource) {
              throw new Error(
                "memory aggregate exclusive rebuild requires reconciliation wiring",
              );
            }
            return costSource.listCostEventsForProjectPeriod({
              projectId: input.projectId,
              periodStart: input.periodStart,
            });
          },
          async listAggregates() {
            return [...rows.values()]
              .filter(
                (r) =>
                  r.projectId === input.projectId &&
                  r.periodStart === input.periodStart,
              )
              .sort((a, b) => a.currency.localeCompare(b.currency));
          },
          async replaceAggregates(aggregates) {
            replaceLocal({
              projectId: input.projectId,
              periodStart: input.periodStart,
              aggregates,
            });
          },
        });
      } finally {
        release();
      }
    },
  };
}

export function createMemoryFinOpsReconciliation(): FinOpsReconciliationPort & {
  readonly _costEvents: FinOpsCostEvent[];
  readonly _recon: Map<string, FinOpsReconciliationRecord>;
} {
  const costEvents: FinOpsCostEvent[] = [];
  const recon = new Map<string, FinOpsReconciliationRecord>();
  const byDedup = new Map<string, FinOpsCostEvent>();
  const exclusiveChains = new Map<string, Promise<unknown>>();

  const coreOps = {
    async insertCostEvent(event: FinOpsCostEvent): Promise<FinOpsCostEventInsertResult> {
      const existing = byDedup.get(event.dedupKey);
      if (existing) {
        const same =
          existing.amount === event.amount &&
          existing.evidenceClass === event.evidenceClass &&
          existing.correctionRef === event.correctionRef &&
          existing.executionRunId === event.executionRunId &&
          existing.attributionScope === event.attributionScope &&
          existing.derivedSourceReference === event.derivedSourceReference;
        if (!same) {
          return {
            outcome: "conflict",
            code: "FINOPS_COST_DEDUP_CONFLICT",
            message: "FinOps cost dedup conflict with divergent payload",
          };
        }
        return { outcome: "duplicate", costEventId: existing.costEventId };
      }
      costEvents.push(event);
      byDedup.set(event.dedupKey, event);
      return { outcome: "created", costEventId: event.costEventId };
    },
    async listCostEventsForProjectPeriod(input: {
      readonly projectId: string;
      readonly periodStart: string;
      readonly currency?: string;
    }) {
      return costEvents.filter(
        (e) =>
          e.projectId === input.projectId &&
          e.periodStart === input.periodStart &&
          (input.currency === undefined || e.currency === input.currency),
      );
    },
    async findReconciliationByDedup(dedupKey: string) {
      return recon.get(dedupKey) ?? null;
    },
    async insertReconciliationRecord(record: FinOpsReconciliationRecord) {
      const existing = recon.get(record.dedupKey);
      if (existing) {
        return { outcome: "duplicate" as const, existing };
      }
      recon.set(record.dedupKey, record);
      return { outcome: "created" as const };
    },
    async completeReconciliationRecord(input: {
      readonly reconciliationId: string;
      readonly status: "succeeded" | "failed";
      readonly processedCount: number;
      readonly errorCode: string | null;
      readonly errorMessage: string | null;
      readonly completedAt: string;
    }) {
      for (const [k, v] of recon.entries()) {
        if (v.reconciliationId === input.reconciliationId) {
          recon.set(k, {
            ...v,
            status: input.status,
            processedCount: input.processedCount,
            errorCode: input.errorCode,
            errorMessage: input.errorMessage,
            completedAt: input.completedAt,
          });
        }
      }
    },
  };

  return {
    _costEvents: costEvents,
    _recon: recon,
    insertCostEvent: coreOps.insertCostEvent,
    listCostEventsForProjectPeriod: coreOps.listCostEventsForProjectPeriod,
    findReconciliationByDedup: coreOps.findReconciliationByDedup,
    insertReconciliationRecord: coreOps.insertReconciliationRecord,
    completeReconciliationRecord: coreOps.completeReconciliationRecord,
    async withExclusiveProjectPeriodReconciliation(input, work) {
      const lockKey = `${input.projectId}|${input.periodStart}`;
      const prev = exclusiveChains.get(lockKey) ?? Promise.resolve();
      let release!: () => void;
      const gate = new Promise<void>((resolve) => {
        release = resolve;
      });
      const next = prev.then(() => gate);
      exclusiveChains.set(lockKey, next.catch(() => undefined));
      await prev.catch(() => undefined);
      try {
        return await work(coreOps);
      } finally {
        release();
      }
    },
  };
}

/** Pair memory aggregate + reconciliation so exclusive rebuild can list events. */
export function createMemoryFinOpsT2Pair(): {
  readonly reconciliation: ReturnType<typeof createMemoryFinOpsReconciliation>;
  readonly aggregates: ReturnType<typeof createMemoryFinOpsAggregateStore>;
} {
  const reconciliation = createMemoryFinOpsReconciliation();
  const aggregates = createMemoryFinOpsAggregateStore(reconciliation);
  return { reconciliation, aggregates };
}

/** Fictitious fixture catalog — NOT real provider tariffs. */
export function createMemoryFinOpsPriceCatalog(
  entries: ReadonlyArray<FinOpsPriceCatalogEntry>,
): FinOpsPriceCatalogPort {
  return {
    async lookup(query) {
      const matches = entries.filter((e) => {
        if (e.provider !== query.provider) return false;
        if (e.model !== query.model) return false;
        if (e.unit !== query.unit) return false;
        if (e.ratePerQuantum.currency !== query.currency) return false;
        if (query.catalogVersion && e.catalogVersion !== query.catalogVersion) {
          return false;
        }
        if (e.validFrom > query.at) return false;
        if (e.validTo !== null && e.validTo <= query.at) return false;
        return true;
      });
      matches.sort((a, b) => (a.validFrom < b.validFrom ? 1 : -1));
      if (matches.length === 0) {
        return {
          status: "unavailable",
          reason: "no catalog entry configured for provider/model/unit/currency",
        };
      }
      return { status: "found", entry: matches[0]! };
    },
  };
}
