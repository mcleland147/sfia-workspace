import type {
  AssistantHistoryMessage,
  ProjectAssistantSendResult,
} from "@/features/project-assistant/types";

export type CancellableAssistantSendInput = {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  logicalTurnId?: string;
  turnRetryKey?: string;
  reinstructionOfProposalId?: string | null;
  reservationInteractionContext?: {
    cycleInstanceId: string;
    epistemicItemId: string;
  } | null;
};

/**
 * Browser fetch adapter — request-scoped AbortSignal only.
 * Does not own Product orchestration.
 */
export async function sendCancellableAssistantTurn(
  input: CancellableAssistantSendInput,
  signal: AbortSignal,
): Promise<ProjectAssistantSendResult> {
  const response = await fetch(
    `/api/studio/projects/${encodeURIComponent(input.projectId)}/assistant/send`,
    {
      method: "POST",
      credentials: "same-origin",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        content: input.content,
        ...(input.history ? { history: input.history } : {}),
        ...(input.logicalTurnId ? { logicalTurnId: input.logicalTurnId } : {}),
        ...(input.turnRetryKey ? { turnRetryKey: input.turnRetryKey } : {}),
        ...(input.reinstructionOfProposalId
          ? { reinstructionOfProposalId: input.reinstructionOfProposalId }
          : {}),
        ...(input.reservationInteractionContext
          ? {
              reservationInteractionContext: input.reservationInteractionContext,
            }
          : {}),
      }),
      signal,
    },
  );
  const payload = (await response.json()) as ProjectAssistantSendResult;
  return payload;
}
