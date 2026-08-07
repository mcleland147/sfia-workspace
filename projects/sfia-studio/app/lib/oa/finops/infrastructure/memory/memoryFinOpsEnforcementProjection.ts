/**
 * In-memory FinOps T4 enforcement projection store (unit-test double).
 * Process-local project/period mutex; no multi-instance pretension.
 */

import type { FinOpsCostEvent } from "../../application/types.aggregate";
import type { FinOpsEnforcementProjection } from "../../application/types.enforcement";
import type {
  FinOpsEnforcementProjectionPort,
  FinOpsExclusiveEnforcementOps,
} from "../../ports/finopsEnforcementProjectionPort";
import { normalizeCurrency } from "../../domain/money";

function projectionKey(
  projectId: string,
  periodStart: string,
  currency: string,
): string {
  return `${projectId}|${periodStart}|${currency}`;
}

export function createMemoryFinOpsEnforcementProjection(options?: {
  readonly costEvents?: ReadonlyArray<FinOpsCostEvent>;
}): FinOpsEnforcementProjectionPort & {
  readonly _projections: Map<string, FinOpsEnforcementProjection>;
  readonly _costEvents: FinOpsCostEvent[];
  readonly seedCostEvents: (events: ReadonlyArray<FinOpsCostEvent>) => void;
} {
  const projections = new Map<string, FinOpsEnforcementProjection>();
  const costEvents: FinOpsCostEvent[] = [...(options?.costEvents ?? [])];
  const chains = new Map<string, Promise<unknown>>();

  const withExclusive = async <T>(
    projectId: string,
    periodStart: string,
    work: () => Promise<T>,
  ): Promise<T> => {
    const lockKey = `${projectId}|${periodStart}`;
    const prev = chains.get(lockKey) ?? Promise.resolve();
    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    const next = prev.then(() => gate);
    chains.set(lockKey, next.catch(() => undefined));
    await prev.catch(() => undefined);
    try {
      return await work();
    } finally {
      release();
    }
  };

  const listFor = (projectId: string, periodStart: string) =>
    [...projections.values()]
      .filter(
        (p) => p.projectId === projectId && p.periodStart === periodStart,
      )
      .sort((a, b) => a.currency.localeCompare(b.currency));

  const buildOps = (
    projectId: string,
    periodStart: string,
  ): FinOpsExclusiveEnforcementOps => ({
    async listAllCostEventsForPeriod() {
      return costEvents
        .filter(
          (e) => e.projectId === projectId && e.periodStart === periodStart,
        )
        .slice()
        .sort((a, b) => {
          const t = a.occurredAt.localeCompare(b.occurredAt);
          return t !== 0 ? t : a.costEventId.localeCompare(b.costEventId);
        });
    },
    async listProjections() {
      return listFor(projectId, periodStart);
    },
    async replaceProjections(next) {
      for (const key of [...projections.keys()]) {
        if (key.startsWith(`${projectId}|${periodStart}|`)) {
          projections.delete(key);
        }
      }
      for (const row of next) {
        if (row.projectId !== projectId || row.periodStart !== periodStart) {
          throw new Error("projection project/period mismatch on replace");
        }
        const currency = normalizeCurrency(row.currency);
        projections.set(
          projectionKey(projectId, periodStart, currency),
          { ...row, currency },
        );
      }
    },
    async readProjection(currencyRaw) {
      const currency = normalizeCurrency(currencyRaw);
      return (
        projections.get(projectionKey(projectId, periodStart, currency)) ??
        null
      );
    },
  });

  return {
    _projections: projections,
    _costEvents: costEvents,
    seedCostEvents(events) {
      costEvents.length = 0;
      costEvents.push(...events);
    },
    async withExclusiveProjectPeriod(input, work) {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      return withExclusive(projectId, periodStart, () =>
        work(buildOps(projectId, periodStart)),
      );
    },
  };
}
