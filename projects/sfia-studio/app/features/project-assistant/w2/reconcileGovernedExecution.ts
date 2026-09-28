/**
 * PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01 — server-side Reconciler.
 *
 * Idempotent, bounded, no second truth. Derives continuity → applies one
 * deterministic allowed transition at a time → re-derives.
 *
 * INITIATION vs CONTINUATION:
 * - intent=observe / continue without Attempt → never creates Attempt
 * - intent=execute → may initiate Attempt after existing authority checks
 * - existing Attempt → continues deterministic steps of the same EC
 *
 * REHYDRATE remains separate and read-only.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  governedExecuteAuthorizedContract,
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "./governedExecuteAuthorizedContract";
import { materializeW3bProductTerminal } from "./materializeW3bProductTerminal";
import {
  deriveGovernedExecutionContinuityProjection,
  type GovernedExecutionContinuityProjection,
} from "./deriveGovernedExecutionContinuityProjection";

export type ReconcileGovernedExecutionIntent =
  | "observe"
  | "execute"
  | "continue";

export type ReconcileGovernedExecutionResult =
  | {
      readonly ok: true;
      readonly intent: ReconcileGovernedExecutionIntent;
      readonly projection: GovernedExecutionContinuityProjection;
      readonly transitionsApplied: readonly string[];
      readonly stoppedReason: string;
      readonly product?: unknown;
      readonly postEvidence?: unknown;
      readonly executeResult?: unknown;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly projection?: GovernedExecutionContinuityProjection;
      readonly transitionsApplied?: readonly string[];
    };

const MAX_TRANSITIONS = 6;

async function readProjection(
  oa: RuntimeOaStack,
  projectId: string,
  executionContractId: string,
): Promise<
  | { ok: true; projection: GovernedExecutionContinuityProjection }
  | { ok: false; code: string; message: string }
> {
  return deriveGovernedExecutionContinuityProjection({
    oa,
    projectId,
    query: { kind: "byExecutionContractId", executionContractId },
  });
}

/**
 * Server-owned reconcile/continue for governed execution continuity.
 */
export async function reconcileGovernedExecution(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly intent: ReconcileGovernedExecutionIntent;
  readonly forceLocalAuthority?: boolean;
}): Promise<ReconcileGovernedExecutionResult> {
  const transitions: string[] = [];
  const { oa, projectId, executionContractId, intent } = input;

  let derived = await readProjection(oa, projectId, executionContractId);
  if (!derived.ok) {
    return {
      ok: false,
      code: derived.code,
      message: derived.message,
    };
  }

  // Durable Product Truth lineage integrity → STOP before any mutation.
  if (derived.projection.recoveryRequired) {
    return {
      ok: true,
      intent,
      projection: derived.projection,
      transitionsApplied: [],
      stoppedReason: "recovery_required",
    };
  }

  if (intent === "observe") {
    return {
      ok: true,
      intent,
      projection: derived.projection,
      transitionsApplied: [],
      stoppedReason: "observe_only",
    };
  }

  // Execute may initiate; continue must not create Attempt.
  if (intent === "continue" && !derived.projection.attemptId) {
    return {
      ok: true,
      intent,
      projection: derived.projection,
      transitionsApplied: [],
      stoppedReason: "no_attempt_continue_is_read_stable",
    };
  }

  let executeResult: unknown;
  let product: unknown;
  let postEvidence: unknown;

  if (intent === "execute" && !derived.projection.attemptId) {
    // Full governed initiation — reuses existing authority/select/start/record path.
    const executed = await governedExecuteAuthorizedContract({
      oa,
      projectId,
      executionContractId,
      forceLocalAuthority: input.forceLocalAuthority,
    });
    transitions.push("governedExecuteAuthorizedContract");
    executeResult = executed;
    if (!executed.ok) {
      const afterFail = await readProjection(oa, projectId, executionContractId);
      return {
        ok: false,
        code: executed.code,
        message: executed.message,
        projection: afterFail.ok ? afterFail.projection : derived.projection,
        transitionsApplied: transitions,
      };
    }
    derived = await readProjection(oa, projectId, executionContractId);
    if (!derived.ok) {
      return {
        ok: false,
        code: derived.code,
        message: derived.message,
        transitionsApplied: transitions,
      };
    }
  } else if (intent === "execute" && derived.projection.attemptId) {
    // Attempt already exists — treat as continue of same EC (no second Attempt).
    transitions.push("execute_redelegated_to_continue");
  } else if (intent === "continue" && derived.projection.stage === "ATTEMPT_ACCEPTED") {
    const attemptId = derived.projection.attemptId!;
    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId,
      attemptId,
      forceLocalAuthority: input.forceLocalAuthority,
    });
    transitions.push("governedExecuteStart");
    if (!started.ok) {
      const after = await readProjection(oa, projectId, executionContractId);
      return {
        ok: false,
        code: started.code,
        message: started.message,
        projection: after.ok ? after.projection : derived.projection,
        transitionsApplied: transitions,
      };
    }
    derived = await readProjection(oa, projectId, executionContractId);
    if (!derived.ok) {
      return {
        ok: false,
        code: derived.code,
        message: derived.message,
        transitionsApplied: transitions,
      };
    }
  } else if (intent === "continue" && derived.projection.stage === "RUNNING") {
    const attemptId = derived.projection.attemptId!;
    const recorded = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId,
      attemptId,
      forceLocalAuthority: input.forceLocalAuthority,
    });
    transitions.push("governedExecuteRecordResult");
    if (!recorded.ok) {
      // Honest: may still be running / await external — do not invent terminal.
      const after = await readProjection(oa, projectId, executionContractId);
      if (after.ok && after.projection.stage === "RUNNING") {
        return {
          ok: true,
          intent,
          projection: after.projection,
          transitionsApplied: transitions,
          stoppedReason: "still_running_or_await_external",
          executeResult: recorded,
        };
      }
      return {
        ok: false,
        code: recorded.code,
        message: recorded.message,
        projection: after.ok ? after.projection : derived.projection,
        transitionsApplied: transitions,
      };
    }
    derived = await readProjection(oa, projectId, executionContractId);
    if (!derived.ok) {
      return {
        ok: false,
        code: derived.code,
        message: derived.message,
        transitionsApplied: transitions,
      };
    }
  }

  // Bounded deterministic product/post-evidence continuation loop
  for (let i = 0; i < MAX_TRANSITIONS; i++) {
    const p = derived.projection;
    if (p.recoveryRequired) {
      return {
        ok: true,
        intent,
        projection: p,
        transitionsApplied: transitions,
        stoppedReason: "recovery_required",
        executeResult,
        product,
        postEvidence,
      };
    }
    if (p.humanDecisionRequired || p.nextDeterministicAction === "HUMAN_DECISION_REQUIRED") {
      return {
        ok: true,
        intent,
        projection: p,
        transitionsApplied: transitions,
        stoppedReason: "human_decision_required",
        executeResult,
        product,
        postEvidence,
      };
    }
    if (p.nextDeterministicAction === "AWAIT_EXTERNAL") {
      return {
        ok: true,
        intent,
        projection: p,
        transitionsApplied: transitions,
        stoppedReason: "await_external",
        executeResult,
        product,
        postEvidence,
      };
    }
    if (p.nextDeterministicAction === "NONE") {
      return {
        ok: true,
        intent,
        projection: p,
        transitionsApplied: transitions,
        stoppedReason: "stable",
        executeResult,
        product,
        postEvidence,
      };
    }

    if (
      p.nextDeterministicAction === "MATERIALIZE_PRODUCT" ||
      p.nextDeterministicAction === "RUN_POST_EVIDENCE"
    ) {
      if (!p.attemptId) {
        return {
          ok: false,
          code: "RECONCILE_ATTEMPT_MISSING",
          message: "Materialize requis mais attemptId absent.",
          projection: p,
          transitionsApplied: transitions,
        };
      }
      const materialized = await materializeW3bProductTerminal({
        oa,
        projectId,
        attemptId: p.attemptId,
      });
      transitions.push(
        p.nextDeterministicAction === "RUN_POST_EVIDENCE"
          ? "materializeW3bProductTerminal(postEvidence)"
          : "materializeW3bProductTerminal",
      );
      product = materialized.ok ? materialized.product : materialized.product;
      postEvidence = materialized.postEvidence;
      if (!materialized.ok && !materialized.product) {
        const after = await readProjection(oa, projectId, executionContractId);
        return {
          ok: false,
          code: materialized.code,
          message: materialized.message,
          projection: after.ok ? after.projection : p,
          transitionsApplied: transitions,
        };
      }
      derived = await readProjection(oa, projectId, executionContractId);
      if (!derived.ok) {
        return {
          ok: false,
          code: derived.code,
          message: derived.message,
          transitionsApplied: transitions,
        };
      }
      continue;
    }

    // Unknown next action — fail closed rather than invent
    return {
      ok: true,
      intent,
      projection: p,
      transitionsApplied: transitions,
      stoppedReason: `unhandled_next:${p.nextDeterministicAction}`,
      executeResult,
      product,
      postEvidence,
    };
  }

  return {
    ok: true,
    intent,
    projection: derived.projection,
    transitionsApplied: transitions,
    stoppedReason: "transition_limit_reached",
    executeResult,
    product,
    postEvidence,
  };
}

/** @internal — select-only path retained for phased Fake realism tests */
export async function reconcileSelectOnlyForTests(input: {
  oa: RuntimeOaStack;
  projectId: string;
  executionContractId: string;
  forceLocalAuthority?: boolean;
}) {
  return governedExecuteSelectAgent(input);
}
