/**
 * Shared fixture-safe execution pipeline (PRE-M6 QA-PRE-M6-01 final hardening).
 *
 * ONE mutation sequence for both precondition paths:
 * Confirmation → ConfirmExecutionContract → Select → Start → Record → Evidence.
 *
 * Preconditions (Proposal STALE / M3 successor governance) MUST be closed by
 * the caller BEFORE entry. This helper does not decide authority eligibility.
 */

import type {
  DecisionServices,
  OaActorReference,
} from "@/lib/oa/decision";
import type {
  ExecutionContract,
  ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import type {
  ExecutionAttemptServices,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import type { ProposalDto } from "../f2/types";
import {
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
  resolveF3EphemeralNotice,
} from "./constants";
import { deriveAttemptProvenance } from "./deriveAttemptProvenance";
import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
import type { F3ExecutePayload } from "./types";

export type SharedFixtureSafePipelineDeps = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  fixtureAdapter: TestExecutionAdapter;
  projectServices?: ProjectServices;
  productDurablePath?: boolean;
};

export type SharedFixtureSafePipelineIdentities = {
  confirmationId: string;
  confirmationIdempotencyKey: string;
  confirmationLevel: "N2" | "N3";
  attemptId: string;
  attemptIdempotencyKey: string;
  resultRef: string;
};

export type SharedFixtureSafePipelineInput = {
  projectId: string;
  decisionId: string;
  /** Legacy fixture may carry Proposal for provenance; M3 path passes null. */
  proposal: ProposalDto | null;
  contract: ExecutionContract;
  expectedContractVersion: number;
  actor: OaActorReference;
  authorityEvidenceId: string;
  identities: SharedFixtureSafePipelineIdentities;
  /** Extra disclosures appended after shared labels. */
  extraDisclosures?: readonly string[];
  deps: SharedFixtureSafePipelineDeps;
};

async function buildSharedExecutePayload(input: {
  proposal: ProposalDto | null;
  decisionId: string;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
    launchedAt?: string;
    irreversibleEffectsPossible?: boolean;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  projectId: string;
  extraDisclosures: readonly string[];
  deps: SharedFixtureSafePipelineDeps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const agent = input.deps.executionAttemptServices.registry.getAgent(
    input.attempt.selectedAgentRef,
  );
  const provenance = deriveAttemptProvenance({
    attempt: input.attempt,
    agent,
  });

  const ingested = await ingestEvidenceAndRecommend({
    projectId: input.projectId,
    attemptId: input.attempt.attemptId,
    executionContractId: input.contract.executionContractId,
    provenance,
    deps: {
      evidenceReviewServices: input.deps.evidenceReviewServices,
      projectServices: input.deps.projectServices,
      executionAttemptServices: input.deps.executionAttemptServices,
      executionContractServices: input.deps.executionContractServices,
    },
  });
  if (!ingested.ok) {
    return ingested;
  }

  const productDurable =
    input.deps.productDurablePath ??
    input.deps.projectServices !== undefined;
  const persistenceNotice = resolveF3EphemeralNotice(productDurable);

  return {
    ok: true,
    payload: {
      turnKind: "f3_execute",
      mode: provenance.mode,
      proposal: input.proposal,
      decisionId: input.decisionId,
      contract: {
        executionContractId: input.contract.executionContractId,
        version: input.contract.version,
        status: input.contract.status,
        action: input.contract.action,
        target: input.contract.target,
        scope: input.contract.scope,
        requiredAuthority: input.contract.requiredAuthority,
        mode: provenance.mode,
        constraints: [...input.contract.constraints],
      },
      attempt: {
        attemptId: input.attempt.attemptId,
        status: input.attempt.status,
        selectedAgentRef: input.attempt.selectedAgentRef,
        adapterId: provenance.adapterRef,
        adapterRef: provenance.adapterRef,
        executionMode: provenance.executionMode,
        realProcessInvoked: provenance.realProcessInvoked,
        externalEffects: provenance.externalEffects,
        resultRef: input.attempt.resultRef ?? null,
        launchCount: input.launchCount,
        selectionStrategy:
          input.attempt.selectionStrategy ?? "capabilities_deterministic",
        mode: provenance.mode,
      },
      evidence: ingested.evidence,
      reviewBundle: ingested.reviewBundle,
      recommendation: ingested.recommendation,
      reusedExistingAttempt: input.reusedExistingAttempt,
      executionPerformed: true,
      realExecution: provenance.realExecution,
      gitWritePerformed: false,
      labels: {
        fixtureNoReal: F3_LABELS.fixtureNoReal,
        noGitWrite: F3_LABELS.noGitWrite,
        recommendationNotDecision: F3_LABELS.recommendationNotDecision,
        cursorRealBlocked: F3_LABELS.cursorRealBlocked,
        hardOpen: F3_LABELS.hardOpen,
      },
      processLocalNotice: persistenceNotice,
      disclosures: [
        F3_LABELS.fixtureNoReal,
        F3_LABELS.noGitWrite,
        F3_LABELS.recommendationNotDecision,
        F3_LABELS.cursorRealBlocked,
        F3_LABELS.hardOpen,
        F3_LABELS.noReadyClaim,
        F3_LABELS.noTa6Complete,
        ...input.extraDisclosures,
        persistenceNotice,
      ],
    },
  };
}

/**
 * Shared confirm → select → start → record → evidence pipeline.
 * Caller supplies validated contract + actor + authority evidence + path identities.
 */
export async function executeConfirmedFixtureSafeContract(
  input: SharedFixtureSafePipelineInput,
): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  if (input.deps.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
    return {
      ok: false,
      code: "ADAPTER_IDENTITY_MISMATCH",
      message: "Adapter F3 identity mismatch — REAL/NoOp interdit.",
    };
  }
  if (input.deps.fixtureAdapter.externalEffects !== false) {
    return {
      ok: false,
      code: "EXTERNAL_EFFECTS_FORBIDDEN",
      message: "externalEffects doit rester false (FIXTURE only).",
    };
  }

  let contract = input.contract;
  const extraDisclosures = input.extraDisclosures ?? [];

  // Duplicate-attempt protection BEFORE OCC.
  const listed =
    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId: contract.executionContractId,
    });
  if (listed.ok) {
    const succeeded = listed.attempts.find((a) => a.status === "succeeded");
    if (succeeded) {
      return buildSharedExecutePayload({
        proposal: input.proposal,
        decisionId: input.decisionId,
        contract,
        attempt: succeeded,
        launchCount: input.deps.fixtureAdapter.launchCallCount,
        reusedExistingAttempt: true,
        projectId: input.projectId,
        extraDisclosures,
        deps: input.deps,
      });
    }
  }

  if (contract.version !== input.expectedContractVersion) {
    return {
      ok: false,
      code: "CONTRACT_VERSION_MISMATCH",
      message: `Version contrat attendue ${input.expectedContractVersion}, actuelle ${contract.version}.`,
    };
  }

  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const requested =
      await input.deps.decisionServices.requestConfirmation.execute({
        confirmationId: input.identities.confirmationId,
        level: input.identities.confirmationLevel,
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: input.actor,
        requestedTo: input.actor,
        scope: contract.scope,
        idempotencyKey: input.identities.confirmationIdempotencyKey,
        decisionRef: input.decisionId,
      });
    if (!requested.ok) {
      return {
        ok: false,
        code: requested.error.detailCode,
        message: requested.error.message,
      };
    }

    const granted = await input.deps.decisionServices.grantConfirmation.execute({
      confirmationId: input.identities.confirmationId,
      actor: input.actor,
      authorityEvidenceId: input.authorityEvidenceId,
    });
    if (!granted.ok) {
      return {
        ok: false,
        code: granted.error.detailCode,
        message: granted.error.message,
      };
    }

    const confirmed =
      await input.deps.executionContractServices.confirmExecutionContract.execute(
        {
          executionContractId: contract.executionContractId,
          confirmationId: input.identities.confirmationId,
          actor: input.actor,
          authorityEvidenceId: input.authorityEvidenceId,
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
  } else if (
    contract.status !== "confirmed" &&
    contract.status !== "executing" &&
    contract.status !== "completed"
  ) {
    return {
      ok: false,
      code: "CONTRACT_NOT_CONFIRMABLE",
      message: `Contrat non confirmable (statut ${contract.status}).`,
    };
  }

  const selected =
    await input.deps.executionAttemptServices.selectExecutionAgent.execute({
      attemptId: input.identities.attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: input.identities.attemptIdempotencyKey,
      actor: input.actor,
      authorityEvidenceId: input.authorityEvidenceId,
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
    await input.deps.executionAttemptServices.startExecution.execute({
      attemptId: input.identities.attemptId,
      actor: input.actor,
      authorityEvidenceId: input.authorityEvidenceId,
    });
  if (!started.ok) {
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
    };
  }

  const recorded =
    await input.deps.executionAttemptServices.recordExecutionResult.execute({
      attemptId: input.identities.attemptId,
      adapterId: F3_ADAPTER_ID,
      resultRef: input.identities.resultRef,
      technicalExitCode: 0,
    });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
    };
  }

  const launchCount = input.deps.fixtureAdapter.launchCallCount;

  const refreshed =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: contract.executionContractId,
    });
  if (refreshed.ok) contract = refreshed.contract;

  return buildSharedExecutePayload({
    proposal: input.proposal,
    decisionId: input.decisionId,
    contract,
    attempt: recorded.attempt,
    launchCount,
    reusedExistingAttempt: false,
    projectId: input.projectId,
    extraDisclosures,
    deps: input.deps,
  });
}
