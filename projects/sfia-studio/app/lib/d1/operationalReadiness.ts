/**
 * T-A7 L-F11F13 — F11.2 operational readiness (internal-only, read-only).
 * Assembles observed state; never mutates MethodMode or history.
 * No HTTP, UI, IAM, or persistence.
 */

import {
  decideMethodModeTransition,
  readMethodModeHold,
  type MethodModeHoldState,
  type MethodModeTransitionDecision,
} from "@/lib/d1/methodModeHold";
import {
  defaultBoundedHistoryProvider,
  type BoundedHistoryAvailability,
  type BoundedHistoryPage,
  type BoundedHistoryProvider,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import {
  METHOD_MODES,
  type MethodMode,
  type D1Project,
} from "@/lib/d1/types";
import { SFIA_CANONICAL_CORE_PATHS } from "@/lib/platform/sfia-context/canonicalPaths";

export type ReadinessUnknown = "UNKNOWN";

/** D1 — access surface is server/internal only (no HTTP). */
export type OperationalReadinessAccessSurface = "INTERNAL_ONLY";

/**
 * Aggregate readiness for internal consumers.
 * Absence of signal must not become READY.
 */
export type OperationalReadinessStatus = "READY" | "NOT_READY" | "UNKNOWN";

export interface OperationalReadinessLegacyDeps {
  readonly methodModesAuthorized: readonly MethodMode[];
  readonly canonicalCorePaths: readonly string[];
  readonly methodCorePathCount: number;
  readonly note: string;
}

export interface OperationalReadinessMigrationStatus {
  readonly status: "NOT_STARTED" | ReadinessUnknown;
  readonly detail: string;
}

export interface OperationalReadinessHealth {
  readonly status: "SIMULATED" | ReadinessUnknown;
  readonly detail: string;
}

export interface OperationalReadinessHistorySummary {
  readonly availability: BoundedHistoryAvailability | ReadinessUnknown;
  readonly returned: number;
  readonly gitCanonical: true;
  readonly gitCanonicalSha: string | null;
  readonly paginationMode: "PREFIX_ONLY" | ReadinessUnknown;
  readonly completeness: "BOUNDED_L_F11F13";
}

export interface OperationalReadinessAudit {
  readonly status: "DEFERRED_EXPLICITLY";
  readonly detail: string;
}

export interface OperationalReadinessSnapshot {
  readonly schemaVersion: "t-a7-f11.2-l-f11f13";
  readonly accessSurface: OperationalReadinessAccessSurface;
  readonly readinessStatus: OperationalReadinessStatus;
  readonly readinessReasons: readonly string[];
  readonly evaluatedAt: string;
  readonly timezoneNote: "timestamps are ISO-8601 UTC (Z)";
  readonly completeness: "BOUNDED_L_F11F13";
  readonly iam: "NOT_SELECTED";
  readonly persistence: "NOT_SELECTED";
  readonly audit: OperationalReadinessAudit;
  readonly observed: {
    readonly projectId: string | null;
    readonly methodMode: MethodMode | null;
    readonly projectState: D1Project["state"] | null;
    readonly hold: MethodModeHoldState;
    readonly legacyDependencies: OperationalReadinessLegacyDeps;
    readonly migration: OperationalReadinessMigrationStatus;
    readonly health: OperationalReadinessHealth;
    readonly history: OperationalReadinessHistorySummary;
    readonly openBlockers: readonly string[];
  };
  readonly decision: MethodModeTransitionDecision["decision"];
  readonly recommendation: "KEEP_HOLD" | "NO_RECOMMENDATION";
  readonly authorization: MethodModeTransitionDecision["authorization"];
  readonly mutable: false;
  readonly adminUi: false;
  readonly writeCommands: false;
}

export interface OperationalReadinessQueryInput {
  readonly project?: D1Project | null;
  readonly historyProvider?: BoundedHistoryProvider;
  readonly historyLimit?: number;
}

function summarizeHistory(page: BoundedHistoryPage): OperationalReadinessHistorySummary {
  return {
    availability: page.availability,
    returned: page.returned,
    gitCanonical: true,
    gitCanonicalSha: page.gitCanonicalSha,
    paginationMode: page.paginationMode,
    completeness: "BOUNDED_L_F11F13",
  };
}

function deriveReadinessStatus(args: {
  holdActive: boolean;
  healthStatus: OperationalReadinessHealth["status"];
  historyAvailability: BoundedHistoryAvailability | ReadinessUnknown;
}): { status: OperationalReadinessStatus; reasons: string[] } {
  const reasons: string[] = [];

  if (args.holdActive) {
    reasons.push("HOLD_ACTIVE");
  }
  if (args.healthStatus === "SIMULATED" || args.healthStatus === "UNKNOWN") {
    reasons.push("HEALTH_NOT_OBSERVED");
  }
  if (args.historyAvailability === "NOT_AVAILABLE") {
    reasons.push("HISTORY_NOT_AVAILABLE");
  } else if (args.historyAvailability === "UNKNOWN") {
    reasons.push("HISTORY_UNKNOWN");
  }

  // Hold blocks transitions → NOT_READY (never READY while hold active).
  if (args.holdActive) {
    return { status: "NOT_READY", reasons };
  }

  // Without an observed health probe, never claim READY.
  if (args.healthStatus === "SIMULATED" || args.healthStatus === "UNKNOWN") {
    return { status: "UNKNOWN", reasons };
  }

  if (args.historyAvailability === "NOT_AVAILABLE") {
    return { status: "UNKNOWN", reasons };
  }

  return { status: "READY", reasons: reasons.length ? reasons : ["OBSERVED_OK"] };
}

export function queryOperationalReadiness(
  input: OperationalReadinessQueryInput = {},
): OperationalReadinessSnapshot {
  const hold = readMethodModeHold();
  const transition = decideMethodModeTransition();
  const historyProvider = input.historyProvider ?? defaultBoundedHistoryProvider;
  const historyPage = historyProvider.read({
    limit: input.historyLimit ?? 10,
  });
  const project = input.project ?? null;
  const methodCores = SFIA_CANONICAL_CORE_PATHS.filter((p) =>
    p.startsWith("method/"),
  );

  const health: OperationalReadinessHealth = {
    status: "SIMULATED",
    detail:
      "No production readiness probe; simulated/local observation only — not evidence of healthy runtime.",
  };

  const derived = deriveReadinessStatus({
    holdActive: hold.active,
    healthStatus: health.status,
    historyAvailability: historyPage.availability,
  });

  const snapshot: OperationalReadinessSnapshot = {
    schemaVersion: "t-a7-f11.2-l-f11f13",
    accessSurface: "INTERNAL_ONLY",
    readinessStatus: derived.status,
    readinessReasons: derived.reasons,
    evaluatedAt: new Date().toISOString(),
    timezoneNote: "timestamps are ISO-8601 UTC (Z)",
    completeness: "BOUNDED_L_F11F13",
    iam: "NOT_SELECTED",
    persistence: "NOT_SELECTED",
    audit: {
      status: "DEFERRED_EXPLICITLY",
      detail:
        "D2 — read audit journal deferred; no persistent audit store in this lot.",
    },
    observed: {
      projectId: project?.projectId ?? null,
      methodMode: project?.methodMode ?? null,
      projectState: project?.state ?? null,
      hold,
      legacyDependencies: {
        methodModesAuthorized: METHOD_MODES,
        canonicalCorePaths: [...SFIA_CANONICAL_CORE_PATHS],
        methodCorePathCount: methodCores.length,
        note: "Observed allowlisted dependencies only; not a removal plan.",
      },
      migration: {
        status: "NOT_STARTED",
        detail: "No migration authorized in T-A7 L-F11F13.",
      },
      health,
      history: summarizeHistory(historyPage),
      openBlockers: hold.reasons.map((r) => r.code),
    },
    decision: transition.decision,
    recommendation: transition.allowed ? "NO_RECOMMENDATION" : "KEEP_HOLD",
    authorization: transition.authorization,
    mutable: false,
    adminUi: false,
    writeCommands: false,
  };

  return Object.freeze({
    ...snapshot,
    readinessReasons: Object.freeze([...snapshot.readinessReasons]),
    audit: Object.freeze({ ...snapshot.audit }),
    observed: Object.freeze({
      ...snapshot.observed,
      hold: Object.freeze({
        ...snapshot.observed.hold,
        reasons: Object.freeze([...snapshot.observed.hold.reasons]),
      }),
      legacyDependencies: Object.freeze({
        ...snapshot.observed.legacyDependencies,
        methodModesAuthorized: Object.freeze([
          ...snapshot.observed.legacyDependencies.methodModesAuthorized,
        ]),
        canonicalCorePaths: Object.freeze([
          ...snapshot.observed.legacyDependencies.canonicalCorePaths,
        ]),
      }),
      migration: Object.freeze({ ...snapshot.observed.migration }),
      health: Object.freeze({ ...snapshot.observed.health }),
      history: Object.freeze({ ...snapshot.observed.history }),
      openBlockers: Object.freeze([...snapshot.observed.openBlockers]),
    }),
  });
}

/** Contract guard: readiness snapshot exposes no write surface. */
export function assertOperationalReadinessReadOnly(
  snapshot: OperationalReadinessSnapshot,
): void {
  if (
    snapshot.mutable !== false ||
    snapshot.adminUi !== false ||
    snapshot.writeCommands !== false ||
    snapshot.accessSurface !== "INTERNAL_ONLY"
  ) {
    throw new Error(
      "Operational readiness snapshot must remain read-only and INTERNAL_ONLY.",
    );
  }
}
