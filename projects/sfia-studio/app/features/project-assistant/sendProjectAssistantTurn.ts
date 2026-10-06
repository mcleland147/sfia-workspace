/**
 * Canonical Project Assistant send APPLICATION seam.
 * Used by the thin Server Action and the cancellable HTTP transport.
 * Not a second Nora / not a second orchestrator.
 */

import { orchestrateAssistantSend } from "./f2/orchestrateF2";
import {
  runMw6GovernedNoraProductTurn,
  type RunMw6GovernedNoraProductTurnInput,
} from "./mw6GovernedNoraTurn";
import type {
  AssistantHistoryMessage,
  ProjectAssistantSendResult,
} from "./types";

export type SendProjectAssistantTurnInput = {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  executionContractId?: string;
  authorityEvidenceId?: unknown;
  governedAuthority?: unknown;
  actorId?: unknown;
  getExecutionContract?: unknown;
  checkExecutionAuthorization?: unknown;
  authorityResolver?: unknown;
  authorizedContract?: unknown;
  currentExternalDiscoveryIntent?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  resolveAuthenticatedPilote?: RunMw6GovernedNoraProductTurnInput["resolveAuthenticatedPilote"];
  provider?: import("@/lib/platform/ai").ConversationProvider;
  sessionDbPath?: string;
  logicalTurnId?: string;
  turnRetryKey?: string;
  reinstructionOfProposalId?: string | null;
  reservationInteractionContext?: {
    cycleInstanceId?: unknown;
    epistemicItemId?: unknown;
  } | null;
};

export type SendProjectAssistantTurnOptions = {
  /** Request-scoped AbortSignal from cancellable transport. Never persisted. */
  signal?: AbortSignal;
};

export async function sendProjectAssistantTurn(
  input: SendProjectAssistantTurnInput,
  options?: SendProjectAssistantTurnOptions,
): Promise<ProjectAssistantSendResult> {
  const executionContractId =
    typeof input.executionContractId === "string"
      ? input.executionContractId.trim()
      : "";
  if (executionContractId.length > 0) {
    return runMw6GovernedNoraProductTurn({
      projectId: input.projectId,
      content: input.content,
      history: input.history,
      executionContractId,
      claimedAuthorityEvidenceId: input.authorityEvidenceId,
      resolveAuthenticatedPilote: input.resolveAuthenticatedPilote,
      provider: input.provider,
      sessionDbPath: input.sessionDbPath,
      governedAuthority: input.governedAuthority,
      actorId: input.actorId,
      authorityEvidenceId: input.authorityEvidenceId,
      getExecutionContract: input.getExecutionContract,
      checkExecutionAuthorization: input.checkExecutionAuthorization,
      authorityResolver: input.authorityResolver,
      authorizedContract: input.authorizedContract,
      currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
      canActAsMorris: input.canActAsMorris,
      claimedAuthorityLevel: input.claimedAuthorityLevel,
    });
  }
  const reinstructionOfProposalId =
    typeof input.reinstructionOfProposalId === "string"
      ? input.reinstructionOfProposalId.trim() || null
      : null;
  return orchestrateAssistantSend({
    projectId: input.projectId,
    content: input.content,
    history: input.history,
    provider: input.provider,
    sessionDbPath: input.sessionDbPath,
    logicalTurnId: input.logicalTurnId,
    turnRetryKey: input.turnRetryKey,
    reinstructionOfProposalId,
    reservationInteractionContext: input.reservationInteractionContext,
    signal: options?.signal,
  });
}
