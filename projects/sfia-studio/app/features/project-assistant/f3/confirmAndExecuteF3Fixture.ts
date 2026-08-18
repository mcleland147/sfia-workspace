/**
 * Confirm + fixture execute path (legacy Proposal precondition):
 * validateF2ForPrepare → fixture authority → SHARED confirm/select/start/evidence pipeline.
 *
 * Idempotent: if an attempt already succeeded for the contract, reinject
 * without a second adapter launch (handled inside shared pipeline).
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
  F3_AUTHORITY_SOURCE,
  F3_REQUIRED_AUTHORITY,
  F3_SCOPE,
} from "./constants";
import { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
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

  const contract = contractResult.contract;
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

  const attemptId = `xat:f3:${contract.executionContractId.replace(/^xct:/, "")}`;
  const executed = await executeConfirmedFixtureSafeContract({
    projectId: input.projectId,
    decisionId,
    proposal,
    contract,
    expectedContractVersion: input.expectedContractVersion,
    actor: LOCAL_MORRIS_ACTOR,
    authorityEvidenceId: auth.evidenceId,
    identities: {
      confirmationId: `cfm:f3:${contract.executionContractId}:${contract.version}`,
      confirmationIdempotencyKey: `idem:f3-cfm:${contract.executionContractId}:v${contract.version}`,
      confirmationLevel: F3_REQUIRED_AUTHORITY,
      attemptId,
      attemptIdempotencyKey: `idem:f3-att:${contract.executionContractId}`,
      resultRef: `res:f3-fixture:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`,
    },
    deps: {
      decisionServices: input.deps.decisionServices,
      executionContractServices: input.deps.executionContractServices,
      executionAttemptServices: input.deps.executionAttemptServices,
      evidenceReviewServices: input.deps.evidenceReviewServices,
      fixtureAdapter: input.deps.fixtureAdapter,
      projectServices: input.deps.projectServices,
      productDurablePath: input.deps.productDurablePath,
    },
  });

  if (!executed.ok) {
    return { ...executed, proposal };
  }
  return executed;
}
