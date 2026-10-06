import type {
  AssistantUiMode,
  ProjectAssistantSendFailure,
} from "./types";

/** Voluntary Pilot STOP — not a Product durable state. */
export function noraTurnStoppedFailure(
  mode: AssistantUiMode,
  logicalTurnId?: string | null,
): ProjectAssistantSendFailure {
  return {
    ok: false,
    status: "stopped",
    code: "NORA_TURN_STOPPED",
    message: "Réponse interrompue.",
    mode,
    retryable: true,
    ...(logicalTurnId ? { logicalTurnId } : {}),
  };
}
