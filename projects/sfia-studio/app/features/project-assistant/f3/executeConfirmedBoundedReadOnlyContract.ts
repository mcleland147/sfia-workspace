/**
 * Confirm → Select M4 bounded RO → Grant Gate D → StartExecution REAL port.
 * No fixture fallback. No client adapter/command. No NodeCursorProcessRunner here.
 */

import type {
  DecisionServices,
  OaActorReference,
} from "@/lib/oa/decision";
import type {
  ExecutionContract,
  ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_RO_CURSOR_AGENT_ID,
  type ExecutionAttemptServices,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import type { ProposalDto } from "../f2/types";
import { resolvePersistenceNotice } from "../presentationLabels";
import {
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
} from "./constants";
import { deriveAttemptProvenance } from "./deriveAttemptProvenance";
import { completeBoundedReadOnlyLaunch } from "./completeBoundedReadOnlyLaunch";
import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
import type { F3ExecutePayload } from "./types";
import type { BoundedLaunchObservationFacts } from "./completeBoundedReadOnlyLaunch";

export type BoundedReadOnlyPipelineDeps = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  projectServices?: ProjectServices;
  productDurablePath?: boolean;
  nowIso: () => string;
};

export type BoundedReadOnlyPipelineIdentities = {
  confirmationId: string;
  confirmationIdempotencyKey: string;
  confirmationLevel: "N2" | "N3";
  attemptId: string;
  attemptIdempotencyKey: string;
  grantId: string;
};

function launchCallCountOf(port: unknown): number {
  if (port && typeof port === "object" && "launchCallCount" in port) {
    const n = (port as { launchCallCount: unknown }).launchCallCount;
    return typeof n === "number" ? n : 0;
  }
  return 0;
}

function pendingEvidence(mode: F3ExecutePayload["mode"]): F3ExecutePayload["evidence"] {
  return {
    evidenceId: "ev:pending-real",
    status: "pending",
    sourceKind: "execution_attempt",
    technicalResultRef: null,
    verified: false,
    mode,
  };
}

function pendingReviewBundle(
  mode: F3ExecutePayload["mode"],
): F3ExecutePayload["reviewBundle"] {
  return {
    reviewBundleId: "rb:pending-real",
    status: "pending",
    version: 0,
    evidenceRefs: [],
    mode,
  };
}

function pendingRecommendation(
  mode: F3ExecutePayload["mode"],
): F3ExecutePayload["recommendation"] {
  return {
    kind: "recommendation",
    status: "pending",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    recommendationLabel: F3_LABELS.recommendationNotDecision,
    mode,
    analysisStatus: "not_attempted",
    analysisText: null,
    analysisProviderId: null,
    analysisUnavailableReason: null,
  };
}

function buildPayload(input: {
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
    startedAt?: string;
    executionWindowClass?: string;
    resolvedMaxDurationMs?: number;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  extraDisclosures: readonly string[];
  productDurablePath: boolean;
  provenance: ReturnType<typeof deriveAttemptProvenance>;
  processRef?: string | null;
  ingested?: Extract<
    Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
    { ok: true }
  >;
}): F3ExecutePayload {
  const persistenceNotice = resolvePersistenceNotice({
    productDurablePath: input.productDurablePath,
    mode: input.provenance.mode,
    kind: "execute",
  });
  return {
    turnKind: "f3_execute",
    mode: input.provenance.mode,
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
      mode: input.provenance.mode,
      constraints: [...input.contract.constraints],
    },
    attempt: {
      attemptId: input.attempt.attemptId,
      status: input.attempt.status,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: input.provenance.adapterRef,
      adapterRef: input.provenance.adapterRef,
      executionMode: input.provenance.executionMode,
      realProcessInvoked: input.provenance.realProcessInvoked,
      externalEffects: input.provenance.externalEffects,
      resultRef: input.attempt.resultRef ?? null,
      launchCount: input.launchCount,
      selectionStrategy:
        input.attempt.selectionStrategy ?? "capabilities_deterministic",
      mode: input.provenance.mode,
      startedAt: input.attempt.startedAt ?? null,
      executionWindowClass: input.attempt.executionWindowClass ?? null,
      resolvedMaxDurationMs: input.attempt.resolvedMaxDurationMs ?? null,
      processRef: input.processRef ?? null,
    },
    evidence: input.ingested?.evidence ?? pendingEvidence(input.provenance.mode),
    reviewBundle:
      input.ingested?.reviewBundle ??
      pendingReviewBundle(input.provenance.mode),
    recommendation:
      input.ingested?.recommendation ??
      pendingRecommendation(input.provenance.mode),
    reusedExistingAttempt: input.reusedExistingAttempt,
    executionPerformed: true,
    realExecution: input.provenance.realExecution,
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
      F3_LABELS.noGitWrite,
      F3_LABELS.recommendationNotDecision,
      F3_LABELS.noReadyClaim,
      F3_LABELS.noTa6Complete,
      "BOUNDED READ-ONLY REAL BRANCH — provenance from Attempt, not env flag",
      ...input.extraDisclosures,
      persistenceNotice,
    ],
  };
}

async function finishBoundedAttempt(input: {
  projectId: string;
  decisionId: string;
  proposal: ProposalDto | null;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
    launchedAt?: string;
    irreversibleEffectsPossible?: boolean;
    version?: number;
    startedAt?: string;
    executionWindowClass?: string;
    resolvedMaxDurationMs?: number;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  extraDisclosures: readonly string[];
  productDurablePath: boolean;
  deps: BoundedReadOnlyPipelineDeps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const attempts = input.deps.executionAttemptServices;
  let attempt = input.attempt;
  let facts: BoundedLaunchObservationFacts | null = null;
  let processRef: string | null = null;
  const extra = [...input.extraDisclosures];

  if (attempt.status === "running" && !attempt.resultRef) {
    const completed = await completeBoundedReadOnlyLaunch({
      attempt: attempt as never,
      services: attempts,
    });
    if (!completed.ok) return completed;
    attempt = completed.attempt;
    facts = completed.facts;
    processRef =
      completed.facts?.processRef ??
      completed.observation?.processRef ??
      null;
    if (completed.status === "running") {
      extra.push(
        "REAL process ACK — completion still pending; no Evidence candidate",
      );
    } else if (completed.status === "timeout") {
      extra.push("REAL process timed out — no Evidence candidate");
    } else if (completed.status === "failed") {
      extra.push("REAL process non-zero exit — no Evidence candidate");
    }
  }

  const agent = attempts.registry.getAgent(attempt.selectedAgentRef);
  const provenance = deriveAttemptProvenance({ attempt, agent });

  const refreshed =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.contract.executionContractId,
    });
  const contract = refreshed.ok ? refreshed.contract : input.contract;

  let ingested:
    | Extract<
        Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
        { ok: true }
      >
    | undefined;
  if (attempt.status === "succeeded" && attempt.resultRef) {
    const result = await ingestEvidenceAndRecommend({
      projectId: input.projectId,
      attemptId: attempt.attemptId,
      executionContractId: contract.executionContractId,
      provenance,
      executionObservation: facts,
      deps: {
        evidenceReviewServices: input.deps.evidenceReviewServices,
        projectServices: input.deps.projectServices,
        executionAttemptServices: attempts,
        executionContractServices: input.deps.executionContractServices,
      },
    });
    if (!result.ok) return result;
    ingested = result;
  }

  return {
    ok: true,
    payload: buildPayload({
      proposal: input.proposal,
      decisionId: input.decisionId,
      contract,
      attempt,
      launchCount: input.launchCount,
      reusedExistingAttempt: input.reusedExistingAttempt,
      extraDisclosures: extra,
      productDurablePath: input.productDurablePath,
      provenance,
      processRef,
      ingested,
    }),
  };
}

export async function executeConfirmedBoundedReadOnlyContract(input: {
  projectId: string;
  decisionId: string;
  proposal: ProposalDto | null;
  contract: ExecutionContract;
  expectedContractVersion: number;
  actor: OaActorReference;
  authorityEvidenceId: string;
  identities: BoundedReadOnlyPipelineIdentities;
  extraDisclosures?: readonly string[];
  deps: BoundedReadOnlyPipelineDeps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const attempts = input.deps.executionAttemptServices;
  const realBoundary = attempts.realBoundary;
  if (!realBoundary) {
    return {
      ok: false,
      code: "REAL_BOUNDARY_REQUIRED",
      message:
        "Contrat bounded read-only REAL refusé — realBoundary absent (fail-closed, pas de fallback fixture).",
    };
  }
  if (!attempts.grantRealExecutionGate) {
    return {
      ok: false,
      code: "GATE_D_REQUIRED",
      message:
        "Contrat bounded read-only REAL refusé — Gate D non disponible (fail-closed, pas de fallback fixture).",
    };
  }

  let contract = input.contract;
  const extraDisclosures = input.extraDisclosures ?? [];
  const productDurable =
    input.deps.productDurablePath ?? input.deps.projectServices !== undefined;

  const listed = await attempts.listExecutionAttempts.execute({
    executionContractId: contract.executionContractId,
  });
  if (listed.ok) {
    const reusable = listed.attempts.find(
      (a) => a.status === "succeeded" || a.status === "running",
    );
    if (reusable) {
      return finishBoundedAttempt({
        projectId: input.projectId,
        decisionId: input.decisionId,
        proposal: input.proposal,
        contract,
        attempt: reusable,
        launchCount: launchCallCountOf(realBoundary.launchPort),
        reusedExistingAttempt: true,
        extraDisclosures,
        productDurablePath: productDurable,
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
    const requested = await input.deps.decisionServices.requestConfirmation.execute({
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

  const selected = await attempts.selectExecutionAgent.execute({
    attemptId: input.identities.attemptId,
    executionContractId: contract.executionContractId,
    idempotencyKey: input.identities.attemptIdempotencyKey,
    actor: input.actor,
    authorityEvidenceId: input.authorityEvidenceId,
    expectedContractVersion: contract.version,
    selectionProfile: "standard",
    selectionStrategy: "capabilities_deterministic",
    requestedAgentRef: M4_BOUNDED_RO_CURSOR_AGENT_ID,
    systemInitiated: true,
  });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
    };
  }

  const nowMs = Date.parse(input.deps.nowIso());
  const expiresAt = new Date(
    (Number.isFinite(nowMs) ? nowMs : Date.now()) + 60 * 60 * 1000,
  ).toISOString();

  const gate = await attempts.grantRealExecutionGate.execute({
    grantId: input.identities.grantId,
    attemptId: input.identities.attemptId,
    actor: input.actor,
    expiresAt,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  if (!gate.ok) {
    return {
      ok: false,
      code: gate.error.detailCode,
      message: gate.error.message,
    };
  }

  const started = await attempts.startExecution.execute({
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

  return finishBoundedAttempt({
    projectId: input.projectId,
    decisionId: input.decisionId,
    proposal: input.proposal,
    contract,
    attempt: started.attempt,
    launchCount: launchCallCountOf(realBoundary.launchPort),
    reusedExistingAttempt: false,
    extraDisclosures,
    productDurablePath: productDurable,
    deps: input.deps,
  });
}
