import type {
  AssistantHistoryMessage,
  ProjectAssistantSendResult,
} from "@/features/project-assistant/types";
import {
  isNoraLiveActivityEvent,
  type NoraLiveActivityEvent,
} from "@/features/project-assistant/liveActivityEvents";

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

export type CancellableAssistantSendOptions = {
  /** Progressive activity from NDJSON transport — never fabricates events. */
  onActivity?: (event: NoraLiveActivityEvent) => void;
};

/**
 * Browser fetch adapter — request-scoped AbortSignal only.
 * Prefers NDJSON progressive responses when the server supports them;
 * falls back to classic JSON for older deployments.
 * Does not own Product orchestration.
 */
export async function sendCancellableAssistantTurn(
  input: CancellableAssistantSendInput,
  signal: AbortSignal,
  options?: CancellableAssistantSendOptions,
): Promise<ProjectAssistantSendResult> {
  const response = await fetch(
    `/api/studio/projects/${encodeURIComponent(input.projectId)}/assistant/send`,
    {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
        accept: "application/x-ndjson, application/json",
      },
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

  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/x-ndjson") && response.body) {
    return readNdjsonProductResult(response.body, options?.onActivity);
  }

  const payload = (await response.json()) as ProjectAssistantSendResult;
  return payload;
}

async function readNdjsonProductResult(
  body: ReadableStream<Uint8Array>,
  onActivity?: (event: NoraLiveActivityEvent) => void,
): Promise<ProjectAssistantSendResult> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let finalResult: ProjectAssistantSendResult | null = null;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let newline = buffer.indexOf("\n");
    while (newline >= 0) {
      const line = buffer.slice(0, newline).trim();
      buffer = buffer.slice(newline + 1);
      newline = buffer.indexOf("\n");
      if (!line) continue;
      let parsed: unknown;
      try {
        parsed = JSON.parse(line) as unknown;
      } catch {
        continue;
      }
      if (
        parsed &&
        typeof parsed === "object" &&
        !Array.isArray(parsed) &&
        (parsed as { type?: unknown }).type === "result" &&
        (parsed as { result?: unknown }).result != null
      ) {
        finalResult = (parsed as { result: ProjectAssistantSendResult }).result;
        continue;
      }
      if (
        finalResult != null ||
        !(
          parsed &&
          typeof parsed === "object" &&
          !Array.isArray(parsed) &&
          (parsed as { type?: unknown }).type === "activity" &&
          isNoraLiveActivityEvent((parsed as { event?: unknown }).event)
        )
      ) {
        continue;
      }
      onActivity?.((parsed as { event: NoraLiveActivityEvent }).event);
    }
  }

  if (finalResult) return finalResult;
  return {
    ok: false,
    status: "provider_unavailable",
    code: "PROGRESSIVE_TRANSPORT_INCOMPLETE",
    message: "Flux progressif terminé sans résultat Product.",
    mode: "unavailable",
    retryable: true,
  };
}
