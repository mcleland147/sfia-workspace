/**
 * T-A7 consolidated lot — R1 simulated atomic operation (in-memory only).
 * prepare → apply → verify → rollback. No persistence, migration, or real delivery.
 */

export type AtomicStep = "prepare" | "apply" | "verify" | "rollback";

export type AtomicOutcome =
  | "SUCCEEDED"
  | "FAILED_PREPARE"
  | "FAILED_APPLY"
  | "FAILED_VERIFY"
  | "ROLLED_BACK"
  | "ROLLBACK_FAILED"
  | "PARTIAL_FORBIDDEN";

export interface AtomicOperationState<T> {
  readonly phase: AtomicStep | "idle" | "done";
  readonly initialSnapshot: T;
  readonly workingSnapshot: T;
  readonly outcome: AtomicOutcome | "IN_PROGRESS";
  readonly history: readonly string[];
  readonly rolledBack: boolean;
  readonly partialValidated: false;
}

export interface AtomicOperationResult<T> {
  readonly schemaVersion: "t-a7-r1-atomic-sim.1";
  readonly accessSurface: "INTERNAL_ONLY";
  readonly outcome: AtomicOutcome;
  readonly finalState: AtomicOperationState<T>;
  readonly persistence: "NONE_IN_MEMORY_ONLY";
  readonly productionRollbackProven: false;
  readonly mutable: false;
  readonly iam: "NOT_SELECTED";
}

export type AtomicStepHandler<T> = (state: T) => T;

export interface SimulatedAtomicPlan<T> {
  readonly initial: T;
  readonly prepare: AtomicStepHandler<T>;
  readonly apply: AtomicStepHandler<T>;
  readonly verify: (state: T) => boolean;
  readonly rollback: AtomicStepHandler<T>;
  /** Inject failures for drills (local simulation only). */
  readonly failAt?: AtomicStep;
  /** When failAt=rollback, rollback itself throws/fails. */
  readonly rollbackFails?: boolean;
}

function freezeResult<T extends object>(value: T): T {
  return Object.freeze(value);
}

function clonePlain<T>(value: T): T {
  return structuredClone(value);
}

/**
 * Run a fully simulated atomic operation. On any failure after prepare,
 * attempts rollback to the initial snapshot. Double rollback is idempotent.
 */
export function runSimulatedAtomicOperation<T>(
  plan: SimulatedAtomicPlan<T>,
): AtomicOperationResult<T> {
  const initialSnapshot = clonePlain(plan.initial);
  let working = clonePlain(plan.initial);
  const history: string[] = [];
  let rolledBack = false;

  const buildState = (
    phase: AtomicOperationState<T>["phase"],
    outcome: AtomicOperationState<T>["outcome"],
  ): AtomicOperationState<T> =>
    Object.freeze({
      phase,
      initialSnapshot: clonePlain(initialSnapshot),
      workingSnapshot: clonePlain(working),
      outcome,
      history: Object.freeze([...history]) as readonly string[],
      rolledBack,
      partialValidated: false as const,
    });

  const doRollback = (from: AtomicStep): AtomicOperationResult<T> => {
    history.push(`rollback:from:${from}`);
    if (plan.rollbackFails) {
      history.push("rollback:failed");
      return freezeResult({
        schemaVersion: "t-a7-r1-atomic-sim.1",
        accessSurface: "INTERNAL_ONLY",
        outcome: "ROLLBACK_FAILED",
        finalState: buildState("rollback", "ROLLBACK_FAILED"),
        persistence: "NONE_IN_MEMORY_ONLY",
        productionRollbackProven: false,
        mutable: false,
        iam: "NOT_SELECTED",
      });
    }
    working = clonePlain(plan.rollback(working));
    // Enforce return to initial for honesty of the simulation contract.
    working = clonePlain(initialSnapshot);
    rolledBack = true;
    history.push("rollback:restored_initial");
    return freezeResult({
      schemaVersion: "t-a7-r1-atomic-sim.1",
      accessSurface: "INTERNAL_ONLY",
      outcome: "ROLLED_BACK",
      finalState: buildState("done", "ROLLED_BACK"),
      persistence: "NONE_IN_MEMORY_ONLY",
      productionRollbackProven: false,
      mutable: false,
      iam: "NOT_SELECTED",
    });
  };

  // prepare
  history.push("prepare:start");
  if (plan.failAt === "prepare") {
    history.push("prepare:failed");
    return freezeResult({
      schemaVersion: "t-a7-r1-atomic-sim.1",
      accessSurface: "INTERNAL_ONLY",
      outcome: "FAILED_PREPARE",
      finalState: buildState("prepare", "FAILED_PREPARE"),
      persistence: "NONE_IN_MEMORY_ONLY",
      productionRollbackProven: false,
      mutable: false,
      iam: "NOT_SELECTED",
    });
  }
  working = plan.prepare(working);
  history.push("prepare:ok");

  // apply
  history.push("apply:start");
  if (plan.failAt === "apply") {
    history.push("apply:failed");
    return doRollback("apply");
  }
  working = plan.apply(working);
  history.push("apply:ok");

  // verify
  history.push("verify:start");
  if (plan.failAt === "verify" || !plan.verify(working)) {
    history.push("verify:failed");
    return doRollback("verify");
  }
  history.push("verify:ok");

  // optional rollback-at-success path for drills
  if (plan.failAt === "rollback") {
    return doRollback("rollback");
  }

  return freezeResult({
    schemaVersion: "t-a7-r1-atomic-sim.1",
    accessSurface: "INTERNAL_ONLY",
    outcome: "SUCCEEDED",
    finalState: buildState("done", "SUCCEEDED"),
    persistence: "NONE_IN_MEMORY_ONLY",
    productionRollbackProven: false,
    mutable: false,
    iam: "NOT_SELECTED",
  });
}

/**
 * Idempotent second rollback: if already rolled back / at initial, no-op success.
 */
export function runIdempotentRollback<T>(
  previous: AtomicOperationResult<T>,
  rollback: AtomicStepHandler<T>,
): AtomicOperationResult<T> {
  if (
    previous.outcome === "ROLLED_BACK" ||
    previous.finalState.rolledBack ||
    JSON.stringify(previous.finalState.workingSnapshot) ===
      JSON.stringify(previous.finalState.initialSnapshot)
  ) {
    const history = [
      ...previous.finalState.history,
      "rollback:idempotent_noop",
    ];
    return freezeResult({
      ...previous,
      outcome: "ROLLED_BACK",
      finalState: Object.freeze({
        ...previous.finalState,
        phase: "done" as const,
        outcome: "ROLLED_BACK" as const,
        history: Object.freeze(history) as readonly string[],
        rolledBack: true,
        partialValidated: false as const,
      }),
      productionRollbackProven: false,
    });
  }

  return runSimulatedAtomicOperation({
    initial: previous.finalState.initialSnapshot,
    prepare: (s) => s,
    apply: (s) => s,
    verify: () => false,
    rollback,
    failAt: "verify",
  });
}
