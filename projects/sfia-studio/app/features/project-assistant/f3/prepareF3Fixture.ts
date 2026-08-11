/**
 * F3 PREPARE — BuildExecutionContract + Validate only.
 * NO Select / Start / Evidence / Attempt (F3-D01).
 */

import type { DecisionServices } from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type { MemoryAuthorityResolver } from "@/lib/oa/decision";
import type { F2ContextSnapshot } from "../f2/types";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import {
  F3_ACTION,
  F3_AUTHORITY_SOURCE,
  F3_CAPABILITY,
  F3_CONSTRAINTS,
  F3_EVIDENCE_REQUIREMENTS,
  F3_LABELS,
  F3_MODE,
  F3_PROCESS_LOCAL_NOTICE,
  F3_REQUIRED_AUTHORITY,
  F3_SCOPE,
  F3_STOP_CONDITIONS,
  F3_TARGET,
} from "./constants";
import type { F3PreparePayload } from "./types";
import { validateF2ForPrepare } from "./validateF2ForPrepare";

export type PrepareF3Deps = {
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  executionContractServices: ExecutionContractServices;
  nowIso: () => string;
};

function toContractDto(
  contract: {
    executionContractId: string;
    version: number;
    status: string;
    action: string;
    target: string;
    scope: string;
    requiredAuthority: string;
    constraints: readonly string[];
  },
) {
  return {
    executionContractId: contract.executionContractId,
    version: contract.version,
    status: contract.status,
    action: contract.action,
    target: contract.target,
    scope: contract.scope,
    requiredAuthority: contract.requiredAuthority,
    mode: F3_MODE,
    constraints: [...contract.constraints],
  };
}

export async function prepareF3Fixture(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  currentContext: F2ContextSnapshot;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  deps: PrepareF3Deps;
}): Promise<
  | { ok: true; payload: F3PreparePayload }
  | { ok: false; code: string; message: string; proposal?: unknown }
> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;

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
  const evidenceId = `evd:f3-fixture:${proposal.proposalId}`;
  const issuedAt = input.deps.nowIso();

  try {
    if (!input.deps.authorityResolver.getEvidence(evidenceId)) {
      input.deps.authorityResolver.register({
        evidenceId,
        actorId: LOCAL_MORRIS_ACTOR.actorId,
        level: F3_REQUIRED_AUTHORITY,
        scope: F3_SCOPE,
        issuedAt,
        source: F3_AUTHORITY_SOURCE,
        canActAsMorris: false,
      });
    }
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Échec enregistrement authority F3 fixture.",
      proposal,
    };
  }

  const executionContractId = `xct:f3:${proposal.proposalId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48)}`;
  const idempotencyKey = `idem:f3-prep:${proposal.proposalId}`;

  const built =
    await input.deps.executionContractServices.buildExecutionContract.execute({
      executionContractId,
      projectId: input.projectId,
      decisionRefs: [decisionId],
      action: F3_ACTION,
      target: F3_TARGET,
      scope: F3_SCOPE,
      requiredCapabilities: [F3_CAPABILITY],
      requiredAuthority: F3_REQUIRED_AUTHORITY,
      constraints: [...F3_CONSTRAINTS],
      stopConditions: [...F3_STOP_CONDITIONS],
      evidenceRequirements: [...F3_EVIDENCE_REQUIREMENTS],
      reversibility: "reversible",
      idempotencyKey,
      correlationId: `cor:f3-prep:${proposal.proposalId}`,
      actor: LOCAL_MORRIS_ACTOR,
      authorityEvidenceId: evidenceId,
    });

  if (!built.ok) {
    return {
      ok: false,
      code: built.error.detailCode,
      message: built.error.message,
      proposal,
    };
  }

  const validatedContract =
    await input.deps.executionContractServices.validateExecutionContract.execute(
      {
        executionContractId: built.contract.executionContractId,
        actor: LOCAL_MORRIS_ACTOR,
        authorityEvidenceId: evidenceId,
      },
    );

  if (!validatedContract.ok) {
    return {
      ok: false,
      code: validatedContract.error.detailCode,
      message: validatedContract.error.message,
      proposal,
    };
  }

  const contract = validatedContract.contract;
  if (
    contract.status !== "confirmation_required" &&
    contract.status !== "validated"
  ) {
    return {
      ok: false,
      code: "UNEXPECTED_CONTRACT_STATUS",
      message: `Statut contrat inattendu après Validate: ${contract.status}`,
      proposal,
    };
  }

  return {
    ok: true,
    payload: {
      turnKind: "f3_prepare",
      mode: F3_MODE,
      proposal,
      decisionId,
      contract: toContractDto(contract),
      executionPerformed: false,
      attemptCreated: false,
      labels: {
        fixtureNoReal: F3_LABELS.fixtureNoReal,
        noGitWrite: F3_LABELS.noGitWrite,
        recommendationNotDecision: F3_LABELS.recommendationNotDecision,
        cursorRealBlocked: F3_LABELS.cursorRealBlocked,
        hardOpen: F3_LABELS.hardOpen,
      },
      processLocalNotice: F3_PROCESS_LOCAL_NOTICE,
      disclosures: [
        F3_LABELS.fixtureNoReal,
        F3_LABELS.noGitWrite,
        F3_LABELS.cursorRealBlocked,
        F3_LABELS.hardOpen,
        F3_LABELS.noReadyClaim,
        F3_LABELS.noTa6Complete,
        F3_PROCESS_LOCAL_NOTICE,
      ],
    },
  };
}
