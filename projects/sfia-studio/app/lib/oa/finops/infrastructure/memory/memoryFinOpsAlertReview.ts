/**
 * In-memory FinOps T3 Alert / Morris Review store (unit-test double).
 * Mirrors C1, system transitions, stale rebuild guard, and read-model lists.
 * No privileged acknowledge/resolve product APIs.
 */

import type {
  ApplyProjectPeriodEvaluationInput,
  ApplyProjectPeriodEvaluationResult,
  FinOpsAlertState,
  FinOpsMorrisReviewState,
  FinOpsThresholdEvaluationOutcome,
} from "../../application/types.alertReview";
import type { FinOpsAlertReviewPort } from "../../ports/finopsAlertReviewPort";

function sortKey(currency: string, thresholdCode: string): string {
  return `${currency}\0${thresholdCode}`;
}

function applyAlertTransition(
  existing: FinOpsAlertState | undefined,
  outcome: FinOpsThresholdEvaluationOutcome,
  projectId: string,
  periodStart: string,
  evaluatedAt: string,
): FinOpsAlertState | undefined {
  if (existing && outcome.rebuildVersion < existing.rebuildVersion) {
    // Stale evaluation must not overwrite newer state.
    return existing;
  }

  if (outcome.crossed) {
    if (!existing) {
      return {
        alertId: outcome.alertId,
        dedupKey: outcome.dedupKey,
        projectId,
        periodStart,
        currency: outcome.currency,
        thresholdCode: outcome.thresholdCode,
        evaluationBasis: outcome.evaluationBasis,
        thresholdAmount: outcome.thresholdAmount,
        evaluatedAmount: outcome.evaluatedAmount,
        rebuildVersion: outcome.rebuildVersion,
        state: "open",
        firstCrossedAt: evaluatedAt,
        lastEvaluatedAt: evaluatedAt,
        clearedAt: null,
        createdAt: evaluatedAt,
        updatedAt: evaluatedAt,
      };
    }
    // Recross after cleared → reopen same C1 identity; firstCrossedAt preserved.
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "open",
      lastEvaluatedAt: evaluatedAt,
      clearedAt: null,
      updatedAt: evaluatedAt,
    };
  }

  // below
  if (!existing) {
    // Do not invent a cleared historical row.
    return undefined;
  }
  if (existing.state === "open") {
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "cleared",
      lastEvaluatedAt: evaluatedAt,
      clearedAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }
  // already cleared — update non-identity evidence fields only
  return {
    ...existing,
    evaluationBasis: outcome.evaluationBasis,
    thresholdAmount: outcome.thresholdAmount,
    evaluatedAmount: outcome.evaluatedAmount,
    rebuildVersion: outcome.rebuildVersion,
    lastEvaluatedAt: evaluatedAt,
    updatedAt: evaluatedAt,
  };
}

function applyReviewTransition(
  existing: FinOpsMorrisReviewState | undefined,
  outcome: FinOpsThresholdEvaluationOutcome,
  projectId: string,
  periodStart: string,
  evaluatedAt: string,
): FinOpsMorrisReviewState | undefined {
  if (existing && outcome.rebuildVersion < existing.rebuildVersion) {
    return existing;
  }

  if (
    existing &&
    (existing.state === "acknowledged" || existing.state === "resolved")
  ) {
    // E1 future-safe: never usurp privileged Morris disposition; update
    // non-privileged evidence fields only when not stale.
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      lastEvaluatedAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }

  if (outcome.crossed) {
    if (!existing) {
      return {
        reviewId: outcome.reviewId,
        dedupKey: outcome.dedupKey,
        projectId,
        periodStart,
        currency: outcome.currency,
        thresholdCode: outcome.thresholdCode,
        evaluationBasis: outcome.evaluationBasis,
        thresholdAmount: outcome.thresholdAmount,
        evaluatedAmount: outcome.evaluatedAmount,
        rebuildVersion: outcome.rebuildVersion,
        state: "pending",
        firstRequiredAt: evaluatedAt,
        lastEvaluatedAt: evaluatedAt,
        supersededAt: null,
        createdAt: evaluatedAt,
        updatedAt: evaluatedAt,
      };
    }
    // Recross after superseded → reopen same identity to pending.
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "pending",
      lastEvaluatedAt: evaluatedAt,
      supersededAt: null,
      updatedAt: evaluatedAt,
    };
  }

  if (!existing) {
    return undefined;
  }
  if (existing.state === "pending") {
    return {
      ...existing,
      evaluationBasis: outcome.evaluationBasis,
      thresholdAmount: outcome.thresholdAmount,
      evaluatedAmount: outcome.evaluatedAmount,
      rebuildVersion: outcome.rebuildVersion,
      state: "superseded",
      lastEvaluatedAt: evaluatedAt,
      supersededAt: evaluatedAt,
      updatedAt: evaluatedAt,
    };
  }
  // already superseded
  return {
    ...existing,
    evaluationBasis: outcome.evaluationBasis,
    thresholdAmount: outcome.thresholdAmount,
    evaluatedAmount: outcome.evaluatedAmount,
    rebuildVersion: outcome.rebuildVersion,
    lastEvaluatedAt: evaluatedAt,
    updatedAt: evaluatedAt,
  };
}

export function createMemoryFinOpsAlertReview(): FinOpsAlertReviewPort & {
  readonly _alerts: Map<string, FinOpsAlertState>;
  readonly _reviews: Map<string, FinOpsMorrisReviewState>;
} {
  const alerts = new Map<string, FinOpsAlertState>();
  const reviews = new Map<string, FinOpsMorrisReviewState>();
  /** Per project+period async mutex (stand-in for PG advisory lock). */
  const chains = new Map<string, Promise<unknown>>();

  const alertKey = (projectId: string, periodStart: string, thresholdCode: string, currency: string) =>
    `${projectId}|${periodStart}|${thresholdCode}|${currency}`;

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

  const listAlerts = (projectId: string, periodStart: string) =>
    [...alerts.values()]
      .filter((a) => a.projectId === projectId && a.periodStart === periodStart)
      .sort((a, b) =>
        sortKey(a.currency, a.thresholdCode).localeCompare(
          sortKey(b.currency, b.thresholdCode),
        ),
      );

  const listReviews = (projectId: string, periodStart: string) =>
    [...reviews.values()]
      .filter((r) => r.projectId === projectId && r.periodStart === periodStart)
      .sort((a, b) =>
        sortKey(a.currency, a.thresholdCode).localeCompare(
          sortKey(b.currency, b.thresholdCode),
        ),
      );

  return {
    _alerts: alerts,
    _reviews: reviews,

    async applyProjectPeriodEvaluation(
      input: ApplyProjectPeriodEvaluationInput,
    ): Promise<ApplyProjectPeriodEvaluationResult> {
      const projectId = input.projectId.trim();
      const periodStart = input.periodStart.trim();
      try {
        return await withExclusive(projectId, periodStart, async () => {
          for (const outcome of input.outcomes) {
            if (outcome.kind === "informational_alert") {
              const key = alertKey(
                projectId,
                periodStart,
                outcome.thresholdCode,
                outcome.currency,
              );
              const next = applyAlertTransition(
                alerts.get(key),
                outcome,
                projectId,
                periodStart,
                input.evaluatedAt,
              );
              if (next) alerts.set(key, next);
            } else if (outcome.kind === "morris_review") {
              const key = alertKey(
                projectId,
                periodStart,
                outcome.thresholdCode,
                outcome.currency,
              );
              const next = applyReviewTransition(
                reviews.get(key),
                outcome,
                projectId,
                periodStart,
                input.evaluatedAt,
              );
              if (next) reviews.set(key, next);
            }
          }
          return {
            outcome: "succeeded" as const,
            alerts: listAlerts(projectId, periodStart),
            reviews: listReviews(projectId, periodStart),
          };
        });
      } catch (error) {
        return {
          outcome: "failed",
          code: "FINOPS_T3_APPLY_FAILED",
          message:
            error instanceof Error
              ? error.message
              : "FinOps T3 apply failed",
          finopsSideOnly: true,
        };
      }
    },

    async listAlertsForProjectPeriod(input) {
      return listAlerts(input.projectId.trim(), input.periodStart.trim());
    },

    async listReviewsForProjectPeriod(input) {
      return listReviews(input.projectId.trim(), input.periodStart.trim());
    },
  };
}
