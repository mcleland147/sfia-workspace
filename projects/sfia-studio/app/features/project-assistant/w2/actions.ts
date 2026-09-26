"use server";

/**
 * W2 / W3-A server actions — thin transport over the product application path.
 *
 * The client may only send a projectId, an opaque option-set reference, the
 * trajectory version it was shown and the option it selects. Options,
 * recommendation, authority and inspection state are always resolved
 * server-side from durable truth: no client payload can decide, widen
 * authority, or claim an inspection.
 *
 * W2 authorize stops before Execute. W3-A `w2GovernedExecuteAction` may create
 * a fixture Attempt only after a fresh AUTHORIZED evaluation (Pilote actor).
 */

import { headers } from "next/headers";
import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime/liveProjectContext";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
import { amendExecutionContractWithConstraint } from "./amendExecutionContract";
import { rematerializeDocsWriteEvidenceRequirements } from "../f3/rematerializeDocsWriteEvidenceRequirements";
import type { RematerializeDocsWriteEvidenceResult } from "../f3/rematerializeDocsWriteEvidenceRequirements";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
import { decideTrajectory } from "./decideTrajectory";
import {
  governedExecuteAuthorizedContract,
  governedExecuteCancel,
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "./governedExecuteAuthorizedContract";
import {
  materializeW3bProductTerminal,
  rehydrateLatestW3bProductTerminalForContract,
  rehydrateW3bProductTerminal,
} from "./materializeW3bProductTerminal";
import { inspectExecutionContract } from "./inspectExecutionContract";
import { loadPresentedOptionSet } from "./presentedOptionSet";
import { readActiveProposalDecisionSubject } from "./activeProposalDecisionSubject";
import { readCurrentGovernedExecutionContinuity } from "./readCurrentGovernedExecutionContinuity";
import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
import { prepareDocsWriteRecoverySuccessorFromDecision } from "./prepareDocsWriteRecoverySuccessor";
import { resolveRecoveryExecutionBinding } from "./resolveRecoveryExecutionBinding";
import {
  readRecoveryOwnedDecisionContinuity,
  type RecoveryOwnedDecisionContinuityResult,
} from "./readRecoveryOwnedDecisionContinuity";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { readW2ProjectHistory } from "./projectHistory";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import type {
  ActiveDecisionSubjectReadResult,
  AmendExecutionContractResult,
  AmendedExecutionContractDto,
  ConfirmForAuthorizationResult,
  CurrentGovernedExecutionContinuityResult,
  DecideTrajectoryResult,
  EvaluateExecutionAuthorizationResult,
  GovernedExecuteAuthorizedContractResult,
  GovernedExecutePhaseResult,
  InspectExecutionContractResult,
  MaterializeProductOutcomeActionResult,
  PreparedExecutionContractResult,
  ProposeTrajectoryOptionsResult,
} from "./types";
import type { ReadW2ProjectHistoryResult } from "./projectHistory";
import type { RecoveryExecutionBinding } from "./resolveRecoveryExecutionBinding";

const OA_UNAVAILABLE = {
  ok: false as const,
  code: "OA_STACK_UNAVAILABLE",
  message: "Services OA indisponibles — aucune action W2 possible.",
};

export async function w2ProposeTrajectoryOptionsAction(input: {
  projectId: string;
  /**
   * CORR-PROOF-10 — opaque Proposal subject. Server resolves/validates.
   * Hostile objective/path/operation payloads are ignored (not accepted).
   */
  proposalId?: string | null;
  /** Hostile — ignored. */
  targetPath?: unknown;
  requestedOperation?: unknown;
  objective?: unknown;
}): Promise<ProposeTrajectoryOptionsResult> {
  void input.targetPath;
  void input.requestedOperation;
  void input.objective;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  const qualification = await resolveW2QualificationInputs({
    oa: runtime.oa,
    projectId: input.projectId,
  });
  if (!qualification.ok) {
    return {
      ok: false,
      code: qualification.code,
      message: qualification.message,
    };
  }

  return proposeTrajectoryOptions({
    oa: runtime.oa,
    projectId: input.projectId,
    ...qualification.qualification.inputs,
    packagePin: qualification.qualification.packagePin,
    objective: qualification.qualification.objective,
    projectTitle: qualification.qualification.projectTitle,
    proposalId: input.proposalId ?? null,
  });
}

/**
 * CORR-PROOF-10 — durable decision-subject continuity read.
 * Rehydrates bound Proposal PresentedOptionSet or reports pending reinstruction.
 * Epistemic read failure → fail closed (never "none").
 */
export async function w2ReadActiveDecisionSubjectAction(input: {
  projectId: string;
}): Promise<ActiveDecisionSubjectReadResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  const read = await readActiveProposalDecisionSubject(
    runtime.oa,
    input.projectId,
  );
  if (!read.ok) {
    return { ok: false, code: read.code, message: read.message };
  }
  if (read.kind === "none") {
    return { ok: true, kind: "none" };
  }
  if (read.kind === "pending_reinstruction_required") {
    return {
      ok: true,
      kind: "pending_reinstruction_required",
      message: read.message,
      proposalIds: read.markers.map((m) => m.proposalId),
      recoverableProposalIds: read.recoverableProposalIds,
    };
  }
  if (read.kind === "pursue_prepare_ready") {
    return {
      ok: true,
      kind: "pursue_prepare_ready",
      decision: read.decision,
    };
  }
  return {
    ok: true,
    kind: "bound_awaiting_decision",
    optionSet: read.optionSet,
  };
}

/**
 * Restart-safe governed ExecutionContract + inspection continuity.
 * Client sends projectId only — server discovers durable continuation.
 * READ-ONLY: never records inspection or mutates Product semantic state.
 */
export async function w2ReadCurrentGovernedExecutionContinuityAction(input: {
  projectId: string;
}): Promise<CurrentGovernedExecutionContinuityResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return readCurrentGovernedExecutionContinuity({
    oa: runtime.oa,
    projectId: input.projectId,
  });
}

/**
 * CORR-01 / C2 — restart continuity for recovery-owned GOVERNED HumanDecision.
 * Reconstructs decision + RecoveryExecutionBinding from durable trajectory tip.
 * READ-ONLY. Client sends projectId only.
 */
export async function w2ReadRecoveryOwnedDecisionContinuityAction(input: {
  projectId: string;
}): Promise<RecoveryOwnedDecisionContinuityResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return readRecoveryOwnedDecisionContinuity({
    oa: runtime.oa,
    projectId: input.projectId,
  });
}

export async function w2DecideTrajectoryAction(input: {
  projectId: string;
  optionSetRef: string;
  /**
   * Required for project_trajectory PresentedOptionSets.
   * Hostile / ignored when presented set is proposal subject mode
   * (decide loads sealed binding — never trusts client trajectory fields).
   */
  trajectoryId?: string | null;
  candidateVersion?: number | null;
  selectedOptionRef: string;
  reservesText?: string | null;
  /** Hostile — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<DecideTrajectoryResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  // A2 — load the exact presented OptionSet; never re-derive from live qualification.
  const presented = await loadPresentedOptionSet(
    runtime.oa,
    input.projectId,
    input.optionSetRef,
  );
  if (!presented.ok) {
    return {
      ok: false,
      code: presented.code,
      message: presented.message,
    };
  }

  return decideTrajectory({
    oa: runtime.oa,
    projectId: input.projectId,
    optionSetRef: input.optionSetRef,
    options: presented.presented.options,
    recommendedOptionRef: presented.presented.recommendedOptionRef,
    selectedOptionRef: input.selectedOptionRef,
    trajectoryId: input.trajectoryId ?? null,
    candidateVersion: input.candidateVersion ?? null,
    epistemicRefs: presented.presented.epistemicRefs,
    reservesText: input.reservesText ?? null,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
  });
}

export async function w2InspectExecutionContractAction(input: {
  projectId: string;
  executionContractId: string;
  expectedVersion?: number;
}): Promise<InspectExecutionContractResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return inspectExecutionContract({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    expectedVersion: input.expectedVersion,
  });
}

export async function w2ConfirmExecutionContractAction(input: {
  projectId: string;
  executionContractId: string;
}): Promise<ConfirmForAuthorizationResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return confirmExecutionContractForAuthorization({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
  });
}

export async function w2AuthorizeExecutionContractAction(input: {
  projectId: string;
  executionContractId: string;
  /** Hostile — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<EvaluateExecutionAuthorizationResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return evaluateExecutionAuthorization({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
  });
}

/**
 * Pilote material amendment — append one tightening execution constraint via
 * OA supersession. Client cannot choose actor/authority; no Execute.
 */
export async function w2AmendExecutionContractAction(input: {
  projectId: string;
  executionContractId: string;
  additionalConstraint: string;
  /** Hostile — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<AmendExecutionContractResult> {
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return amendExecutionContractWithConstraint({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    additionalConstraint: input.additionalConstraint,
  });
}

/**
 * Rematerialize docs_write evidenceRequirements when Git lifecycle proofs
 * contradict NO_* constraints. Supersession only — no Confirm / Execute / REAL.
 */
export async function w2RematerializeDocsWriteEvidenceAction(input: {
  projectId: string;
  executionContractId: string;
  /** Hostile — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<RematerializeDocsWriteEvidenceResult> {
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return rematerializeDocsWriteEvidenceRequirements({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
  });
}

async function loadF2ContextForProject(
  oa: NonNullable<ReturnType<typeof getRuntimeApplicationService>["oa"]>,
  projectId: string,
) {
  const live = await readLiveProjectContext(oa, projectId);
  if (!live.ok) return null;
  return {
    projectId,
    lpsId: live.context.lpsId,
    lpsVersion: live.context.lpsVersion,
    doctrineDigest: live.context.doctrineDigest,
    activeCycleInstanceId: live.context.activeCycleInstanceId,
    ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
  };
}

/**
 * W3-A / FC-08 — native ExecutionContract preparation from W2 HumanDecision.
 * NO F3 fixture semantic overwrite on the canonical /studio path.
 */
export async function w2PrepareExecutionContractAction(input: {
  projectId: string;
  decisionId: string;
  /**
   * PJ-REPROOF-04 — Product UI sends projectId + decisionId only.
   * Studio derives ActualExecutionWork from durable Product context.
   * Optional qualifiedOperationKind remains for tests/compat only; ignored
   * when durable diagnostic derivation applies; hostile kinds fail closed.
   */
  qualifiedOperationKind?: unknown;
  /** Hostile — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<PreparedExecutionContractResult> {
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  const context = await loadF2ContextForProject(runtime.oa, input.projectId);
  if (!context) {
    return {
      ok: false,
      code: "PROJECT_NOT_FOUND",
      message: "Projet ou LPS introuvable pour la préparation EC.",
    };
  }

  const pilote = await resolveCurrentAuthenticatedPilote({
    headers: await headers(),
  });
  if (!pilote.ok) {
    return {
      ok: false,
      code: pilote.code,
      message: pilote.message,
    };
  }

  const prepared = await prepareExecutionContractFromW2Decision({
    oa: runtime.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: context,
    qualifiedOperationKind: input.qualifiedOperationKind,
    authenticatedPilote: pilote,
  });

  if (!prepared.ok) {
    return prepared;
  }

  return {
    ok: true,
    contract: prepared.contract,
    decisionId: prepared.decisionId,
    f3SemanticOverwrite: false,
    executionPerformed: false,
    attemptCreated: false,
  };
}

/**
 * R8 — read RecoveryExecutionBinding for UI (docs_write recovery CTA).
 * Client sends only projectId + optional decisionId. No path/op injection.
 * Also reports recoveryContextPresent so UI can fail-closed when a known
 * recovery subject exists but binding cannot be constructed (no generic PREPARE).
 */
export async function w2ReadRecoveryExecutionBindingAction(input: {
  projectId: string;
  decisionId?: string | null;
}): Promise<
  | {
      readonly ok: true;
      readonly binding: RecoveryExecutionBinding | null;
      readonly recoveryContextPresent: boolean;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly recoveryContextPresent: boolean;
    }
> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return { ...OA_UNAVAILABLE, recoveryContextPresent: false };
  }
  return resolveRecoveryExecutionBinding({
    oa: runtime.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
}

/**
 * R8 — prepare bounded docs_write successor from recovery HD + failed EC binding.
 * Does not accept client path/operation. Cancels wrong generic current if needed.
 */
export async function w2PrepareRecoveryDocsWriteAction(input: {
  projectId: string;
  decisionId: string;
  /** Hostile — ignored. */
  targetPath?: unknown;
  qualifiedOperationKind?: unknown;
  real?: unknown;
}): Promise<
  | {
      readonly ok: true;
      readonly contract: AmendedExecutionContractDto;
      readonly decisionId: string;
      readonly cancelledWrongGenericContractId: string | null;
      readonly reusedFromIdempotency: boolean;
      readonly f3SemanticOverwrite: false;
      readonly executionPerformed: false;
      readonly attemptCreated: false;
      readonly binding: RecoveryExecutionBinding;
    }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  void input.targetPath;
  void input.qualifiedOperationKind;
  void input.real;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  const context = await loadF2ContextForProject(runtime.oa, input.projectId);
  if (!context) {
    return {
      ok: false,
      code: "PROJECT_NOT_FOUND",
      message: "Projet ou LPS introuvable pour la préparation recovery.",
    };
  }

  const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
    oa: runtime.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: context,
  });
  if (!prepared.ok) return prepared;

  return {
    ok: true,
    contract: prepared.successor,
    decisionId: prepared.decisionId,
    cancelledWrongGenericContractId: prepared.cancelledWrongGenericContractId,
    reusedFromIdempotency: prepared.reusedFromIdempotency,
    f3SemanticOverwrite: false,
    executionPerformed: false,
    attemptCreated: false,
    binding: prepared.binding,
  };
}

/**
 * W3-A phase 1 — SelectExecutionAgent → accepted.
 */
export async function w2GovernedExecuteSelectAction(input: {
  projectId: string;
  executionContractId: string;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  authorityReceiptRef?: unknown;
  real?: unknown;
}): Promise<GovernedExecutePhaseResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;
  return governedExecuteSelectAgent({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
    authorityReceiptRef: input.authorityReceiptRef,
    real: input.real,
  });
}

/**
 * W3-A phase 2 — StartExecution → running.
 */
export async function w2GovernedExecuteStartAction(input: {
  projectId: string;
  executionContractId: string;
  attemptId: string;
  canActAsMorris?: unknown;
  authorityReceiptRef?: unknown;
  real?: unknown;
}): Promise<GovernedExecutePhaseResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;
  return governedExecuteStart({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    attemptId: input.attemptId,
    canActAsMorris: input.canActAsMorris,
    authorityReceiptRef: input.authorityReceiptRef,
    real: input.real,
  });
}

/**
 * W3-A phase 3 — RecordExecutionResult → technical terminal.
 */
export async function w2GovernedExecuteCompleteAction(input: {
  projectId: string;
  executionContractId: string;
  attemptId: string;
  canActAsMorris?: unknown;
  authorityReceiptRef?: unknown;
  real?: unknown;
}): Promise<GovernedExecuteAuthorizedContractResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;
  return governedExecuteRecordResult({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    attemptId: input.attemptId,
    canActAsMorris: input.canActAsMorris,
    authorityReceiptRef: input.authorityReceiptRef,
    real: input.real,
    // Product Complete — await REAL pending spawn-ACK to terminal (docs_write parity).
    awaitIfPending: true,
  });
}

/**
 * Cancel while Attempt is running (Pilote Arrêter).
 * USER_CANCEL only — Product STOP requires SystemGovernedStop provenance.
 */
export async function w2GovernedExecuteCancelAction(input: {
  projectId: string;
  executionContractId: string;
  attemptId: string;
  reason?: string;
  canActAsMorris?: unknown;
  real?: unknown;
}): Promise<GovernedExecuteAuthorizedContractResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;
  return governedExecuteCancel({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    attemptId: input.attemptId,
    reason: input.reason,
    canActAsMorris: input.canActAsMorris,
    real: input.real,
  });
}

/**
 * W3-B — FC-12 Evidence + RB + Contract Result CE then FC-11 projection.
 */
export async function w2MaterializeProductOutcomeAction(input: {
  projectId: string;
  attemptId: string;
  claimedProductOutcome?: unknown;
  cycleProfile?: unknown;
  ckcId?: unknown;
}): Promise<MaterializeProductOutcomeActionResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "OA runtime indisponible.",
    };
  }
  return materializeW3bProductTerminal({
    oa: runtime.oa,
    projectId: input.projectId,
    attemptId: input.attemptId,
    claimedProductOutcome: input.claimedProductOutcome,
    cycleProfile: input.cycleProfile,
    ckcId: input.ckcId,
  });
}

export async function w2RehydrateProductOutcomeAction(input: {
  projectId: string;
  attemptId: string;
}): Promise<MaterializeProductOutcomeActionResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "OA runtime indisponible.",
    };
  }
  return rehydrateW3bProductTerminal({
    oa: runtime.oa,
    projectId: input.projectId,
    attemptId: input.attemptId,
  });
}

export async function w2RehydrateLatestProductOutcomeAction(input: {
  projectId: string;
  executionContractId: string;
}): Promise<
  | {
      readonly ok: true;
      readonly product: import("./types").W3BProductOutcomeDto;
      readonly attemptId: string;
      readonly attemptStatus: string;
      readonly reusedFromIdempotency: true;
      readonly postEvidence?: import("./types").W3cPostEvidenceLoopDto;
    }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_UNAVAILABLE",
      message: "OA runtime indisponible.",
    };
  }
  return rehydrateLatestW3bProductTerminalForContract({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
  });
}

/**
 * W3-A — Governed Execute after W2 AUTHORIZED.
 * Fresh authority evaluation; Pilote actor; fixture Attempt only; no REAL.
 * Hostile client fields (receipt-as-permission, Morris claims, real flags) ignored.
 */
export async function w2GovernedExecuteAction(input: {
  projectId: string;
  executionContractId: string;
  /** Hostile — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  authorityReceiptRef?: unknown;
  real?: unknown;
  adapterRef?: unknown;
}): Promise<GovernedExecuteAuthorizedContractResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return governedExecuteAuthorizedContract({
    oa: runtime.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
    authorityReceiptRef: input.authorityReceiptRef,
    real: input.real,
    adapterRef: input.adapterRef,
  });
}

export async function w2ReadProjectHistoryAction(input: {
  projectId: string;
}): Promise<ReadW2ProjectHistoryResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return OA_UNAVAILABLE;

  return readW2ProjectHistory({
    oa: runtime.oa,
    projectId: input.projectId,
  });
}
