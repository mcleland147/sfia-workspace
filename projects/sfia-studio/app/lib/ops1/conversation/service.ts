import { buildFixtureAssistantReply } from "../fixtureReply";
import { Ops1Error, toSafeClientError } from "../errors";
import {
  appendTurn,
  completeConversationAttemptFailure,
  completeConversationAttemptSuccess,
  getSession,
  listTurns,
  startConversationAttempt,
} from "../repository";
import type {
  ConversationMode,
  ConversationUsageCounters,
  JournalTurn,
} from "../types";
import {
  assertJournalMatchesMode,
  buildProviderMessagesFromJournal,
} from "./types";
import { resolveConversationProvider } from "./provider";
import type { ConversationProvider } from "./types";

export interface SendMessageResult {
  userTurn: JournalTurn;
  assistantTurn: JournalTurn | null;
  assistantError: string | null;
  usage: ConversationUsageCounters | null;
  mode: ConversationMode;
  providerId: string | null;
}

function durationMs(startedAt: string, completedAt: string): number | null {
  const a = Date.parse(startedAt);
  const b = Date.parse(completedAt);
  if (Number.isNaN(a) || Number.isNaN(b)) return null;
  return Math.max(0, b - a);
}

/**
 * Orchestrates fixture or live conversation turn using the session's
 * immutable conversationMode. Optional requestedMode is validated then ignored
 * if matching; mismatch is rejected before any persistence or provider call.
 */
export async function sendConversationMessage(input: {
  sessionId: string;
  content: string;
  /** Optional client hint — must match session mode or be omitted. */
  requestedMode?: ConversationMode;
  provider?: ConversationProvider;
}): Promise<SendMessageResult> {
  const session = getSession(input.sessionId);
  if (!session) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (session.status !== "OPEN") {
    throw new Ops1Error(
      "CONFLICT",
      "La session n’accepte plus de tours (statut non OPEN).",
    );
  }

  const mode = session.conversationMode;

  if (input.requestedMode && input.requestedMode !== mode) {
    throw new Ops1Error(
      "CONFLICT",
      `Mode refusé : cette session est verrouillée en « ${mode} ». Créez une nouvelle session pour changer de mode.`,
    );
  }

  // Defense: refuse mixed journals before any write.
  assertJournalMatchesMode(listTurns(input.sessionId), mode);

  if (mode === "fixture") {
    const { turn: userTurn } = appendTurn({
      sessionId: input.sessionId,
      role: "user",
      content: input.content,
      fixture: true,
    });

    let assistantTurn: JournalTurn | null = null;
    let assistantError: string | null = null;
    try {
      const reply = buildFixtureAssistantReply(input.content);
      const appended = appendTurn({
        sessionId: input.sessionId,
        role: "assistant_fixture",
        content: reply,
        fixture: true,
      });
      assistantTurn = appended.turn;
    } catch (error) {
      assistantError = toSafeClientError(error).message;
    }

    return {
      userTurn,
      assistantTurn,
      assistantError,
      usage: null,
      mode: "fixture",
      providerId: null,
    };
  }

  // LIVE path — no silent fallback to fixture.
  const provider = input.provider ?? resolveConversationProvider();

  const { turn: userTurn } = appendTurn({
    sessionId: input.sessionId,
    role: "user",
    content: input.content,
    fixture: false,
  });

  const attempt = startConversationAttempt({
    sessionId: input.sessionId,
    userTurnId: userTurn.turnId,
    provider: provider.providerId,
  });

  console.info(
    "[ops1] CONVERSATION_ATTEMPT_STARTED",
    input.sessionId,
    attempt.attemptId,
    provider.providerId,
  );

  try {
    const history = listTurns(input.sessionId);
    const messages = buildProviderMessagesFromJournal(history, "live");
    const completion = await provider.complete(messages);

    const { turn: assistantTurn } = appendTurn({
      sessionId: input.sessionId,
      role: "assistant_live",
      content: completion.text,
      fixture: false,
    });

    const finalized = completeConversationAttemptSuccess({
      attemptId: attempt.attemptId,
      sessionId: input.sessionId,
      assistantTurnId: assistantTurn.turnId,
      providerResponseId: completion.usage.providerResponseId,
      model: completion.usage.model,
      inputTokens: completion.usage.inputTokens,
      outputTokens: completion.usage.outputTokens,
      totalTokens: completion.usage.totalTokens,
    });

    console.info(
      "[ops1] CONVERSATION_ATTEMPT_SUCCEEDED",
      input.sessionId,
      attempt.attemptId,
      finalized.totalTokens,
    );

    return {
      userTurn,
      assistantTurn,
      assistantError: null,
      usage: {
        inputTokens: finalized.inputTokens,
        outputTokens: finalized.outputTokens,
        totalTokens: finalized.totalTokens,
        model: finalized.model,
        provider: finalized.provider,
        attemptId: finalized.attemptId,
        durationMs: durationMs(
          finalized.requestStartedAt,
          finalized.requestCompletedAt ?? finalized.requestStartedAt,
        ),
      },
      mode: "live",
      providerId: provider.providerId,
    };
  } catch (error) {
    const safe = toSafeClientError(error);
    completeConversationAttemptFailure({
      attemptId: attempt.attemptId,
      sessionId: input.sessionId,
      errorCode: safe.code,
    });
    console.error(
      "[ops1] CONVERSATION_ATTEMPT_FAILED",
      input.sessionId,
      attempt.attemptId,
      safe.code,
    );
    return {
      userTurn,
      assistantTurn: null,
      assistantError: safe.message,
      usage: null,
      mode: "live",
      providerId: provider.providerId,
    };
  }
}
