/**
 * Pre-M6 Execution Window Policy (ARCH-WOP-1).
 *
 * Single server-side mapping: ExecutionWindowClass → resolvedMaxDurationMs.
 * UI / gateway / fake / tests MUST import this module — no duplicated tables.
 *
 * The class lives on ExecutionContract. The resolved duration is snapshotted
 * on the ExecutionAttempt at StartExecution and does not re-derive after start.
 */

export const EXECUTION_WINDOW_CLASSES = [
  "short",
  "standard",
  "long",
  "extended",
] as const;

export type ExecutionWindowClass = (typeof EXECUTION_WINDOW_CLASSES)[number];

export const PRE_M6_EXECUTION_WINDOW_CAP_MS = 60 * 60 * 1000;

export const PRE_M6_EXECUTION_WINDOW_MS = Object.freeze({
  short: 5 * 60 * 1000,
  standard: 15 * 60 * 1000,
  long: 30 * 60 * 1000,
  extended: 60 * 60 * 1000,
} as const satisfies Record<ExecutionWindowClass, number>);

/** Bounded read-only M3 default — D-EXEC-TIME-04. */
export const DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS =
  "standard" as const satisfies ExecutionWindowClass;

export function isExecutionWindowClass(
  value: unknown,
): value is ExecutionWindowClass {
  return (
    typeof value === "string" &&
    (EXECUTION_WINDOW_CLASSES as readonly string[]).includes(value)
  );
}

export type ResolvedExecutionWindow = {
  readonly executionWindowClass: ExecutionWindowClass;
  readonly resolvedMaxDurationMs: number;
};

export type ExecutionWindowResolveFailure = {
  readonly ok: false;
  readonly reason:
    | "execution_window_class_invalid"
    | "execution_window_class_missing"
    | "execution_window_exceeds_pre_m6_cap";
};

export type ExecutionWindowResolveResult =
  | ({ readonly ok: true } & ResolvedExecutionWindow)
  | ExecutionWindowResolveFailure;

/**
 * Resolve a governed class to a duration. Never accepts a free client timeout.
 * Values above the Pre-M6 cap cannot be produced by this table.
 */
export function resolveExecutionWindowClass(
  executionWindowClass: unknown,
): ExecutionWindowResolveResult {
  if (!isExecutionWindowClass(executionWindowClass)) {
    return { ok: false, reason: "execution_window_class_invalid" };
  }
  const resolvedMaxDurationMs =
    PRE_M6_EXECUTION_WINDOW_MS[executionWindowClass];
  if (resolvedMaxDurationMs > PRE_M6_EXECUTION_WINDOW_CAP_MS) {
    return { ok: false, reason: "execution_window_exceeds_pre_m6_cap" };
  }
  return {
    ok: true,
    executionWindowClass,
    resolvedMaxDurationMs,
  };
}

/**
 * StartExecution helper: use the contract class when present; otherwise apply
 * an explicit default (bounded M3 legacy → standard). Never mutates the contract.
 */
export function resolveExecutionWindowForStart(input: {
  executionWindowClass?: unknown;
  defaultClassIfMissing?: ExecutionWindowClass;
}): ExecutionWindowResolveResult {
  if (input.executionWindowClass === undefined) {
    if (!input.defaultClassIfMissing) {
      return { ok: false, reason: "execution_window_class_missing" };
    }
    return resolveExecutionWindowClass(input.defaultClassIfMissing);
  }
  return resolveExecutionWindowClass(input.executionWindowClass);
}

export function assertResolvedTimeoutMs(timeoutMs: unknown): timeoutMs is number {
  return (
    typeof timeoutMs === "number" &&
    Number.isInteger(timeoutMs) &&
    timeoutMs > 0 &&
    timeoutMs <= PRE_M6_EXECUTION_WINDOW_CAP_MS
  );
}
