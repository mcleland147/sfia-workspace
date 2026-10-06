import type { AssistantHistoryMessage } from "./types";

const ALLOWED_KEYS = new Set([
  "content",
  "history",
  "logicalTurnId",
  "turnRetryKey",
  "reinstructionOfProposalId",
  "reservationInteractionContext",
]);

const HOSTILE_KEYS = new Set([
  "provider",
  "sessionDbPath",
  "resolveAuthenticatedPilote",
  "governedAuthority",
  "actorId",
  "canActAsMorris",
  "claimedAuthorityLevel",
  "executionContractId",
  "authorityEvidenceId",
  "getExecutionContract",
  "checkExecutionAuthorization",
  "authorityResolver",
  "authorizedContract",
  "currentExternalDiscoveryIntent",
  "model",
  "reasoning",
  "signal",
]);

export type BrowserSafeAssistantSendBody = {
  content: string;
  history?: AssistantHistoryMessage[];
  logicalTurnId?: string;
  turnRetryKey?: string;
  reinstructionOfProposalId?: string | null;
  reservationInteractionContext?: {
    cycleInstanceId?: unknown;
    epistemicItemId?: unknown;
  } | null;
};

export function parseBrowserSafeAssistantSendBody(
  raw: unknown,
):
  | { ok: true; value: BrowserSafeAssistantSendBody }
  | { ok: false; code: string; message: string } {
  if (raw == null || typeof raw !== "object" || Array.isArray(raw)) {
    return {
      ok: false,
      code: "INPUT_INVALID",
      message: "Corps JSON objet requis.",
    };
  }
  const record = raw as Record<string, unknown>;
  for (const key of Object.keys(record)) {
    if (HOSTILE_KEYS.has(key)) {
      return {
        ok: false,
        code: "HOSTILE_FIELD",
        message: "Champ non autorisé sur ce transport.",
      };
    }
    if (!ALLOWED_KEYS.has(key)) {
      return {
        ok: false,
        code: "INPUT_INVALID",
        message: "Champ inconnu rejeté.",
      };
    }
  }
  if (typeof record.content !== "string") {
    return {
      ok: false,
      code: "INPUT_INVALID",
      message: "content string requis.",
    };
  }
  if (record.content.length > 20_000) {
    return {
      ok: false,
      code: "INPUT_INVALID",
      message: "Message trop long.",
    };
  }
  let history: AssistantHistoryMessage[] | undefined;
  if (record.history !== undefined) {
    if (!Array.isArray(record.history)) {
      return {
        ok: false,
        code: "INPUT_INVALID",
        message: "history invalide.",
      };
    }
    history = [];
    for (const item of record.history) {
      const role = (item as { role?: unknown }).role;
      if (
        item == null ||
        typeof item !== "object" ||
        (role !== "user" && role !== "assistant") ||
        typeof (item as { content?: unknown }).content !== "string"
      ) {
        return {
          ok: false,
          code: "INPUT_INVALID",
          message: "history invalide.",
        };
      }
      history.push({
        role: (item as { role: "user" | "assistant" }).role,
        content: (item as { content: string }).content,
      });
    }
  }
  const logicalTurnId =
    typeof record.logicalTurnId === "string"
      ? record.logicalTurnId
      : undefined;
  const turnRetryKey =
    typeof record.turnRetryKey === "string" ? record.turnRetryKey : undefined;
  let reinstructionOfProposalId: string | null | undefined;
  if (record.reinstructionOfProposalId === null) {
    reinstructionOfProposalId = null;
  } else if (typeof record.reinstructionOfProposalId === "string") {
    reinstructionOfProposalId = record.reinstructionOfProposalId;
  }
  let reservationInteractionContext:
    | { cycleInstanceId?: unknown; epistemicItemId?: unknown }
    | null
    | undefined;
  if (record.reservationInteractionContext === null) {
    reservationInteractionContext = null;
  } else if (
    record.reservationInteractionContext != null &&
    typeof record.reservationInteractionContext === "object"
  ) {
    const ctx = record.reservationInteractionContext as Record<string, unknown>;
    reservationInteractionContext = {
      cycleInstanceId: ctx.cycleInstanceId,
      epistemicItemId: ctx.epistemicItemId,
    };
  }
  return {
    ok: true,
    value: {
      content: record.content,
      ...(history ? { history } : {}),
      ...(logicalTurnId ? { logicalTurnId } : {}),
      ...(turnRetryKey ? { turnRetryKey } : {}),
      ...(reinstructionOfProposalId !== undefined
        ? { reinstructionOfProposalId }
        : {}),
      ...(reservationInteractionContext !== undefined
        ? { reservationInteractionContext }
        : {}),
    },
  };
}
