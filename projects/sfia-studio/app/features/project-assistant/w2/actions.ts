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

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime/liveProjectContext";
import { amendExecutionContractWithConstraint } from "./amendExecutionContract";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
import { decideTrajectory } from "./decideTrajectory";
import {
  governedExecuteAuthorizedContract,
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "./governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "./inspectExecutionContract";
import { loadPresentedOptionSet } from "./presentedOptionSet";
import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { readW2ProjectHistory } from "./projectHistory";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import type {
  AmendExecutionContractResult,
  ConfirmForAuthorizationResult,
  DecideTrajectoryResult,
  EvaluateExecutionAuthorizationResult,
  GovernedExecuteAuthorizedContractResult,
  GovernedExecutePhaseResult,
  InspectExecutionContractResult,
  PreparedExecutionContractResult,
  ProposeTrajectoryOptionsResult,
} from "./types";
import type { ReadW2ProjectHistoryResult } from "./projectHistory";

const OA_UNAVAILABLE = {
  ok: false as const,
  code: "OA_STACK_UNAVAILABLE",
  message: "Services OA indisponibles — aucune action W2 possible.",
};

export async function w2ProposeTrajectoryOptionsAction(input: {
  projectId: string;
}): Promise<ProposeTrajectoryOptionsResult> {
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
  });
}

export async function w2DecideTrajectoryAction(input: {
  projectId: string;
  optionSetRef: string;
  trajectoryId: string;
  candidateVersion: number;
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
    trajectoryId: input.trajectoryId,
    candidateVersion: input.candidateVersion,
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
   * Explicit Pilot/Nora operation kind. Required — W2 trajectory alone
   * never selects the execution action. Allowlisted server-side.
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

  const prepared = await prepareExecutionContractFromW2Decision({
    oa: runtime.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: context,
    qualifiedOperationKind: input.qualifiedOperationKind,
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
