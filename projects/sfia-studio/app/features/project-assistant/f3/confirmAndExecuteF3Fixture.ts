/**
 * Confirm + fixture execute path:
 * Request/Grant Confirmation (scope=contract.scope) → ConfirmExecutionContract
 * → SelectExecutionAgent (capabilities_deterministic) → StartExecution
 * → RecordExecutionResult (metadata-only resultRef).
 *
 * Idempotent: if an attempt already succeeded for the contract, reinject
 * without a second adapter launch.
 */

import type {
  DecisionServices,
  MemoryAuthorityResolver,
} from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type {
  ExecutionAttemptServices,
  TestExecutionAdapter,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import type { F2ContextSnapshot } from "../f2/types";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import {
  F3_ADAPTER_ID,
  F3_AGENT_ID,
  F3_AUTHORITY_SOURCE,
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
  F3_MODE,
  F3_REQUIRED_AUTHORITY,
  F3_SCOPE,
  resolveF3EphemeralNotice,
} from "./constants";
import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
import type { F3ExecutePayload } from "./types";
import { validateF2ForPrepare } from "./validateF2ForPrepare";

export type ConfirmExecuteF3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  fixtureAdapter: TestExecutionAdapter;
  nowIso: () => string;
  /** Product path — enables M5-B W1 LPS evidence/RB factual append. */
  projectServices?: ProjectServices;
  /**
   * True when OA composition uses Product SQLite (Attempt/Evidence/RB durable).
   * Defaults true when projectServices present; false for Memory/process-local.
   */
  productDurablePath?: boolean;
};

function authorityEvidenceIdForProposal(proposalId: string): string {
  return `evd:f3-fixture:${proposalId}`;
}

function ensureFixtureAuthority(
  authority: MemoryAuthorityResolver,
  proposalId: string,
  nowIso: string,
): { ok: true; evidenceId: string } | { ok: false; code: string; message: string } {
  const evidenceId = authorityEvidenceIdForProposal(proposalId);
  if (authority.getEvidence(evidenceId)) {
    return { ok: true, evidenceId };
  }
  try {
    authority.register({
      evidenceId,
      actorId: LOCAL_MORRIS_ACTOR.actorId,
      level: F3_REQUIRED_AUTHORITY,
      scope: F3_SCOPE,
      issuedAt: nowIso,
      source: F3_AUTHORITY_SOURCE,
      canActAsMorris: false,
    });
    return { ok: true, evidenceId };
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Échec enregistrement authority F3 fixture.",
    };
  }
}

async function buildExecutePayload(input: {
  proposal: F3ExecutePayload["proposal"];
  decisionId: string;
  contract: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    constraints: readonly string[];
  };
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  projectId: string;
  deps: ConfirmExecuteF3Deps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const ingested = await ingestEvidenceAndRecommend({
    projectId: input.projectId,
    attemptId: input.attempt.attemptId,
    executionContractId: input.contract.executionContractId,
    deps: {
      evidenceReviewServices: input.deps.evidenceReviewServices,
      projectServices: input.deps.projectServices,
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
      mode: F3_MODE,
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
        mode: F3_MODE,
        constraints: [...input.contract.constraints],
      },
      attempt: {
        attemptId: input.attempt.attemptId,
        status: input.attempt.status,
        selectedAgentRef: input.attempt.selectedAgentRef,
        adapterId: F3_ADAPTER_ID,
        externalEffects: false,
        resultRef: input.attempt.resultRef ?? null,
        launchCount: input.launchCount,
        selectionStrategy:
          input.attempt.selectionStrategy ?? "capabilities_deterministic",
        mode: F3_MODE,
      },
      evidence: ingested.evidence,
      reviewBundle: ingested.reviewBundle,
      recommendation: ingested.recommendation,
      reusedExistingAttempt: input.reusedExistingAttempt,
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
      processLocalNotice: persistenceNotice,
      disclosures: [
        F3_LABELS.fixtureNoReal,
        F3_LABELS.noGitWrite,
        F3_LABELS.recommendationNotDecision,
        F3_LABELS.cursorRealBlocked,
        F3_LABELS.hardOpen,
        F3_LABELS.noReadyClaim,
        F3_LABELS.noTa6Complete,
        persistenceNotice,
      ],
    },
  };
}

export async function confirmAndExecuteF3Fixture(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  deps: ConfirmExecuteF3Deps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string; proposal?: unknown }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;

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

  const validated = await validateF2ForPrepare({
    proposalId: input.proposalId,
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: input.currentContext,
    decisionServices: input.deps.decisionServices,
  });
  if (!validated.ok) {
    return {
      ok: false,
      code: validated.code,
      message: validated.message,
      proposal: validated.proposal ?? null,
    };
  }

  const { proposal, decisionId } = validated;
  const auth = ensureFixtureAuthority(
    input.deps.authorityResolver,
    proposal.proposalId,
    input.deps.nowIso(),
  );
  if (!auth.ok) return { ...auth, proposal };

  const contractResult =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      code: contractResult.error.detailCode,
      message: contractResult.error.message,
      proposal,
    };
  }

  let contract = contractResult.contract;
  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "CONTRACT_PROJECT_MISMATCH",
      message: "Le contrat n'appartient pas à ce projet.",
      proposal,
    };
  }
  if (contract.scope !== F3_SCOPE) {
    return {
      ok: false,
      code: "CONTRACT_SCOPE_MISMATCH",
      message: "Scope contrat ≠ F3 FIXTURE scope.",
      proposal,
    };
  }

  // Double-invoke protection BEFORE version OCC: if attempt already succeeded,
  // reinject without re-launch even if contract version advanced post-exec.
  const listed =
    await input.deps.executionAttemptServices.listExecutionAttempts.execute({
      executionContractId: contract.executionContractId,
    });
  if (listed.ok) {
    const succeeded = listed.attempts.find((a) => a.status === "succeeded");
    if (succeeded) {
      const launchCount = input.deps.fixtureAdapter.launchCallCount;
      return buildExecutePayload({
        proposal,
        decisionId,
        contract,
        attempt: succeeded,
        launchCount,
        reusedExistingAttempt: true,
        projectId: input.projectId,
        deps: input.deps,
      });
    }
  }

  if (contract.version !== input.expectedContractVersion) {
    return {
      ok: false,
      code: "CONTRACT_VERSION_MISMATCH",
      message: `Version contrat attendue ${input.expectedContractVersion}, actuelle ${contract.version}.`,
      proposal,
    };
  }

  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const confirmationId = `cfm:f3:${contract.executionContractId}:${contract.version}`;
    const requested =
      await input.deps.decisionServices.requestConfirmation.execute({
        confirmationId,
        level: F3_REQUIRED_AUTHORITY,
        actionRef: F3_CONFIRM_ACTION_REF,
        requestedBy: LOCAL_MORRIS_ACTOR,
        requestedTo: LOCAL_MORRIS_ACTOR,
        scope: contract.scope,
        idempotencyKey: `idem:f3-cfm:${contract.executionContractId}:v${contract.version}`,
        decisionRef: decisionId,
      });
    if (!requested.ok) {
      return {
        ok: false,
        code: requested.error.detailCode,
        message: requested.error.message,
        proposal,
      };
    }

    const granted = await input.deps.decisionServices.grantConfirmation.execute({
      confirmationId,
      actor: LOCAL_MORRIS_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    if (!granted.ok) {
      return {
        ok: false,
        code: granted.error.detailCode,
        message: granted.error.message,
        proposal,
      };
    }

    const confirmed =
      await input.deps.executionContractServices.confirmExecutionContract.execute(
        {
          executionContractId: contract.executionContractId,
          confirmationId,
          actor: LOCAL_MORRIS_ACTOR,
          authorityEvidenceId: auth.evidenceId,
          expectedVersion: contract.version,
        },
      );
    if (!confirmed.ok) {
      return {
        ok: false,
        code: confirmed.error.detailCode,
        message: confirmed.error.message,
        proposal,
      };
    }
    contract = confirmed.contract;
  } else if (contract.status !== "confirmed" && contract.status !== "executing" && contract.status !== "completed") {
    return {
      ok: false,
      code: "CONTRACT_NOT_CONFIRMABLE",
      message: `Contrat non confirmable (statut ${contract.status}).`,
      proposal,
    };
  }

  const attemptId = `xat:f3:${contract.executionContractId.replace(/^xct:/, "")}`;

  const selected =
    await input.deps.executionAttemptServices.selectExecutionAgent.execute({
      attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: `idem:f3-att:${contract.executionContractId}`,
      actor: LOCAL_MORRIS_ACTOR,
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
      proposal,
    };
  }

  const started =
    await input.deps.executionAttemptServices.startExecution.execute({
      attemptId,
      actor: LOCAL_MORRIS_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
  if (!started.ok) {
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
      proposal,
    };
  }

  const resultRef = `res:f3-fixture:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`;
  const recorded =
    await input.deps.executionAttemptServices.recordExecutionResult.execute({
      attemptId,
      adapterId: F3_ADAPTER_ID,
      resultRef,
      technicalExitCode: 0,
    });
  if (!recorded.ok) {
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
      proposal,
    };
  }

  const launchCount = input.deps.fixtureAdapter.launchCallCount;

  const refreshed =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: contract.executionContractId,
    });
  if (refreshed.ok) contract = refreshed.contract;

  return buildExecutePayload({
    proposal,
    decisionId,
    contract,
    attempt: recorded.attempt,
    launchCount,
    reusedExistingAttempt: false,
    projectId: input.projectId,
    deps: input.deps,
  });
}
