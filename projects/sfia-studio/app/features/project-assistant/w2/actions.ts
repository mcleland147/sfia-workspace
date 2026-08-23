"use server";

/**
 * W2 server actions — thin transport over the product application path.
 *
 * The client may only send a projectId, an opaque option-set reference, the
 * trajectory version it was shown and the option it selects. Options,
 * recommendation, authority and inspection state are always resolved
 * server-side from durable truth: no client payload can decide, widen
 * authority, or claim an inspection.
 *
 * No action here reaches an execution path.
 */

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
import { decideTrajectory } from "./decideTrajectory";
import { inspectExecutionContract } from "./inspectExecutionContract";
import { loadPresentedOptionSet } from "./presentedOptionSet";
import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
import { readW2ProjectHistory } from "./projectHistory";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import type {
  ConfirmForAuthorizationResult,
  DecideTrajectoryResult,
  EvaluateExecutionAuthorizationResult,
  InspectExecutionContractResult,
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
