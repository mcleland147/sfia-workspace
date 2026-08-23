/**
 * E2E-ONLY terminal Attempt helper for Option A QA harness.
 * Calls existing Attempt use-cases — no status mutation, no second engine.
 * Not exported from product f3/index barrel.
 */

import {
  LOCAL_MORRIS_M3_ACTOR,
  registerM3LocalMorrisAuthority,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import {
  isOptionAQaControlEnabled,
  setProductFailNextSave,
  type ArmedTerminal,
} from "@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl";
import {
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
  F3_MODE,
} from "./constants";
import type { F3ExecutePayload } from "./types";
import { validateResolvedM3ExecutionBoundary } from "./validateResolvedM3ExecutionBoundary";

function absentEvidence(): F3ExecutePayload["evidence"] {
  return {
    evidenceId: "ev:not-produced",
    status: "absent",
    sourceKind: "none",
    technicalResultRef: null,
    verified: false,
    mode: F3_MODE,
  };
}

function absentReviewBundle(): F3ExecutePayload["reviewBundle"] {
  return {
    reviewBundleId: "rb:not-produced",
    status: "absent",
    version: 0,
    evidenceRefs: [],
    mode: F3_MODE,
  };
}

function absentRecommendation(): F3ExecutePayload["recommendation"] {
  return {
    kind: "recommendation",
    status: "absent",
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    mode: F3_MODE,
  };
}

function buildPayload(input: {
  decisionId: string;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string | null;
  };
  launchCount: number;
}): F3ExecutePayload {
  return {
    turnKind: "f3_execute",
    mode: F3_MODE,
    proposal: null,
    decisionId: input.decisionId,
    contract: {
      executionContractId: input.contract.executionContractId,
      version: input.contract.version,
      status: input.contract.status,
      action: input.contract.action,
      target: input.contract.target,
      scope: input.contract.scope,
      requiredAuthority: input.contract.requiredAuthority,
      mode: F3_MODE,
      constraints: [...input.contract.constraints],
    },
    attempt: {
      attemptId: input.attempt.attemptId,
      status: input.attempt.status,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: F3_ADAPTER_ID,
      adapterRef: F3_ADAPTER_ID,
      executionMode: "adapter_sync_fixture",
      realProcessInvoked: false,
      externalEffects: false,
      resultRef: input.attempt.resultRef ?? null,
      launchCount: input.launchCount,
      selectionStrategy: "capabilities_deterministic",
      mode: F3_MODE,
    },
    evidence: absentEvidence(),
    reviewBundle: absentReviewBundle(),
    recommendation: absentRecommendation(),
    reusedExistingAttempt: false,
    executionPerformed: true,
    realExecution: false,
    gitWritePerformed: false,
    labels: {
      fixtureNoReal: F3_LABELS.fixtureNoReal,
      noGitWrite: F3_LABELS.noGitWrite,
      recommendationNotDecision: F3_LABELS.recommendationNotDecision,
      cursorRealBlocked: F3_LABELS.cursorRealBlocked,
      hardOpen: F3_LABELS.hardOpen,
    },
    processLocalNotice:
      "E2E QA terminal outcome — fixture-safe ZERO REAL — Evidence may be absent.",
    disclosures: [
      F3_LABELS.fixtureNoReal,
      F3_LABELS.recommendationNotDecision,
      "E2E QA TERMINAL OUTCOME",
    ],
  };
}

/**
 * Armed confirm interceptor — validate boundary, then existing use-cases only.
 */
export async function runE2eArmedTerminalAttempt(input: {
  armed: ArmedTerminal;
  expectedContractVersion: number;
  runtime: RuntimeApplicationService;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const { runtime, armed } = input;
  if (!runtime.oa) {
    return { ok: false, code: "OA_STACK_UNAVAILABLE", message: "OA missing" };
  }
  if (
    !isOptionAQaControlEnabled({
      fixtureExternalEffects:
        runtime.oa.fixtureAdapter.externalEffects !== false,
    })
  ) {
    return {
      ok: false,
      code: "E2E_QA_CONTROL_DISABLED",
      message: "Control disabled.",
    };
  }

  const boundary = await validateResolvedM3ExecutionBoundary({
    projectId: armed.projectId,
    decisionId: armed.decisionId,
    executionContractId: armed.executionContractId,
    deps: {
      decisionServices: runtime.oa.decisionServices,
      executionContractServices: runtime.oa.executionContractServices,
      authorityResolver: runtime.oa.authorityResolver,
    },
  });
  if (!boundary.ok) return boundary;

  const auth = registerM3LocalMorrisAuthority({
    authorityResolver: runtime.oa.authorityResolver,
    scope: boundary.successor.scope,
    issuedAt: runtime.oa.clock.nowIso(),
    evidenceId: `evd:m3-e2e:${boundary.successor.executionContractId}`,
    forceEnable: true,
  });
  if (!auth.ok) {
    return { ok: false, code: auth.code, message: auth.message };
  }

  let contract = boundary.successor;
  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const confirmationId = `cfm:m3:e2e:${contract.executionContractId}`;
    const requested =
      await runtime.oa.decisionServices.requestConfirmation.execute({
        confirmationId,
        level: "N3",
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: LOCAL_MORRIS_M3_ACTOR,
        requestedTo: LOCAL_MORRIS_M3_ACTOR,
        scope: contract.scope,
        idempotencyKey: confirmationId,
        decisionRef: armed.decisionId,
      });
    if (!requested.ok) {
      return {
        ok: false,
        code: requested.error.detailCode,
        message: requested.error.message,
      };
    }
    const granted = await runtime.oa.decisionServices.grantConfirmation.execute({
      confirmationId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    if (!granted.ok) {
      return {
        ok: false,
        code: granted.error.detailCode,
        message: granted.error.message,
      };
    }
    const confirmed =
      await runtime.oa.executionContractServices.confirmExecutionContract.execute(
        {
          executionContractId: contract.executionContractId,
          confirmationId,
          actor: LOCAL_MORRIS_M3_ACTOR,
          authorityEvidenceId: auth.evidenceId,
          expectedVersion: contract.version,
        },
      );
    if (!confirmed.ok) {
      return {
        ok: false,
        code: confirmed.error.detailCode,
        message: confirmed.error.message,
      };
    }
    contract = confirmed.contract;
  }

  const attemptId = `xat:m3:${contract.executionContractId.replace(/^xct:/, "")}`;
  const selected =
    await runtime.oa.executionAttemptServices.selectExecutionAgent.execute({
      attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: `idem:m3-e2e:${attemptId}`,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
      expectedContractVersion: contract.version,
      selectionProfile: "standard",
      selectionStrategy: "capabilities_deterministic",
      requestedAgentRef: F3_AGENT_ID,
      systemInitiated: true,
    });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
    };
  }

  const started =
    await runtime.oa.executionAttemptServices.startExecution.execute({
      attemptId,
      actor: LOCAL_MORRIS_M3_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
  if (!started.ok) {
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
    };
  }

  let attempt = started.attempt;
  const launchCount = runtime.oa.fixtureAdapter.launchCallCount;

  if (armed.scenario === "attempt_failed") {
    const failed =
      await runtime.oa.executionAttemptServices.recordExecutionFailure.execute({
        attemptId,
        adapterId: F3_ADAPTER_ID,
        stopReason: "E2E_QA_HARNESS_FORCED_FAILURE",
        errorRef: "err:e2e-qa-forced-failure",
      });
    if (!failed.ok) {
      return {
        ok: false,
        code: failed.error.detailCode,
        message: failed.error.message,
      };
    }
    attempt = failed.attempt;
  } else if (armed.scenario === "attempt_timeout") {
    const timed =
      await runtime.oa.executionAttemptServices.triggerAttemptTimeout.execute({
        attemptId,
        autoSafety: true,
        nowIso: new Date(
          Date.parse(attempt.startedAt ?? runtime.oa.clock.nowIso()) +
            (attempt.resolvedMaxDurationMs ?? 30 * 60 * 1000),
        ).toISOString(),
      });
    if (!timed.ok) {
      return {
        ok: false,
        code: timed.error.detailCode,
        message: timed.error.message,
      };
    }
    attempt = timed.attempt;
  } else if (armed.scenario === "attempt_cancelled") {
    const cancelled =
      await runtime.oa.executionAttemptServices.cancelExecutionAttempt.execute({
        attemptId,
        reason: "E2E_QA_HARNESS_CANCEL",
        actor: LOCAL_MORRIS_M3_ACTOR,
        authorityEvidenceId: auth.evidenceId,
      });
    if (!cancelled.ok) {
      return {
        ok: false,
        code: cancelled.error.detailCode,
        message: cancelled.error.message,
      };
    }
    attempt = cancelled.attempt;
  } else if (armed.scenario === "evidence_missing") {
    // Skip ingest deliberately — do not arm failNextSave (would leave hook sticky).
    const recorded =
      await runtime.oa.executionAttemptServices.recordExecutionResult.execute({
        attemptId,
        adapterId: F3_ADAPTER_ID,
        resultRef: `res:e2e-missing-evidence:${attemptId}`,
        technicalExitCode: 0,
      });
    if (!recorded.ok) {
      return {
        ok: false,
        code: recorded.error.detailCode,
        message: recorded.error.message,
      };
    }
    attempt = recorded.attempt;
    setProductFailNextSave(runtime, null);
  }

  const refreshed =
    await runtime.oa.executionContractServices.getExecutionContract.execute({
      executionContractId: contract.executionContractId,
    });
  if (refreshed.ok) contract = refreshed.contract;

  return {
    ok: true,
    payload: buildPayload({
      decisionId: armed.decisionId,
      contract,
      attempt: {
        attemptId: attempt.attemptId,
        status: attempt.status,
        selectedAgentRef: attempt.selectedAgentRef ?? F3_AGENT_ID,
        resultRef: attempt.resultRef,
      },
      launchCount,
    }),
  };
}
