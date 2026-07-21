"use server";

import {
  createOpenSession,
  getSessionBundle,
  listOpenSessions,
} from "./repository";
import { Ops1Error, toSafeClientError } from "./errors";
import {
  assertConversationMode,
  assertMessageContent,
  assertSessionId,
} from "./validation";
import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
} from "./conversation/config";
import { sendConversationMessage } from "./conversation/service";
import type {
  ConversationAttempt,
  ConversationMode,
  ConversationUsageCounters,
  CycleSession,
  JournalTurn,
  ProviderPresentation,
} from "./types";

export type Ops1ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; code: string; message: string };

function fail(error: unknown): Ops1ActionResult<never> {
  const safe = toSafeClientError(error);
  console.error("[ops1]", safe.code, safe.message);
  return { ok: false, code: safe.code, message: safe.message };
}

function resolvePresentation(
  mode: ConversationMode,
): ProviderPresentation {
  if (mode === "fixture") return "fixture";
  if (isFakeConversationProviderForced()) return "test_provider";
  return "openai_live";
}

export async function ops1CreateSessionAction(input?: {
  mode?: ConversationMode;
}): Promise<Ops1ActionResult<{ session: CycleSession }>> {
  try {
    const mode = assertConversationMode(input?.mode ?? "fixture");
    if (mode === "live") {
      const availability = getLiveConversationAvailability();
      // Fake provider may satisfy E2E without real secrets when forced.
      if (!availability.available && !isFakeConversationProviderForced()) {
        throw new Ops1Error(
          "CONFIG",
          `Création live impossible (variables manquantes : ${availability.missing.join(", ")}).`,
        );
      }
    }
    const { session, event } = createOpenSession(mode);
    console.info(
      "[ops1] SESSION_OPENED",
      session.sessionId,
      event.eventId,
      session.conversationMode,
    );
    return { ok: true, data: { session } };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1ListOpenSessionsAction(): Promise<
  Ops1ActionResult<{ sessions: CycleSession[] }>
> {
  try {
    return { ok: true, data: { sessions: listOpenSessions() } };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1GetSessionAction(
  sessionId: string,
): Promise<
  Ops1ActionResult<{
    session: CycleSession;
    turns: JournalTurn[];
    attempts: ConversationAttempt[];
    presentation: ProviderPresentation;
  }>
> {
  try {
    const id = assertSessionId(sessionId);
    const bundle = getSessionBundle(id);
    if (!bundle) {
      throw new Ops1Error("NOT_FOUND", "Session introuvable.");
    }
    return {
      ok: true,
      data: {
        ...bundle,
        presentation: resolvePresentation(bundle.session.conversationMode),
      },
    };
  } catch (error) {
    return fail(error);
  }
}

/** Availability only — never returns secret values. */
export async function ops1GetLiveConfigAction(): Promise<
  Ops1ActionResult<{
    available: boolean;
    missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL">;
    testProvider: boolean;
  }>
> {
  try {
    const status = getLiveConversationAvailability();
    const testProvider = isFakeConversationProviderForced();
    if (status.available || testProvider) {
      return {
        ok: true,
        data: {
          available: true,
          missing: status.available ? [] : status.missing,
          testProvider,
        },
      };
    }
    return {
      ok: true,
      data: { available: false, missing: status.missing, testProvider: false },
    };
  } catch (error) {
    return fail(error);
  }
}

/**
 * Append user message using the session's immutable mode.
 * Optional requestedMode must match or the call is rejected before write.
 */
export async function ops1SendMessageAction(input: {
  sessionId: string;
  content: string;
  /** Optional; if provided must equal session.conversationMode. */
  mode?: ConversationMode;
}): Promise<
  Ops1ActionResult<{
    userTurn: JournalTurn;
    assistantTurn: JournalTurn | null;
    assistantError: string | null;
    usage: ConversationUsageCounters | null;
    mode: ConversationMode;
    presentation: ProviderPresentation;
  }>
> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    const content = assertMessageContent(input.content);
    const requestedMode =
      input.mode !== undefined ? assertConversationMode(input.mode) : undefined;

    const result = await sendConversationMessage({
      sessionId,
      content,
      requestedMode,
    });

    return {
      ok: true,
      data: {
        userTurn: result.userTurn,
        assistantTurn: result.assistantTurn,
        assistantError: result.assistantError,
        usage: result.usage,
        mode: result.mode,
        presentation: resolvePresentation(result.mode),
      },
    };
  } catch (error) {
    return fail(error);
  }
}

/** @deprecated I1 name — fixture sessions only. */
export async function ops1AppendUserMessageAction(input: {
  sessionId: string;
  content: string;
}): Promise<
  Ops1ActionResult<{
    userTurn: JournalTurn;
    assistantTurn: JournalTurn | null;
    assistantError: string | null;
  }>
> {
  const result = await ops1SendMessageAction({
    ...input,
    mode: "fixture",
  });
  if (!result.ok) return result;
  return {
    ok: true,
    data: {
      userTurn: result.data.userTurn,
      assistantTurn: result.data.assistantTurn,
      assistantError: result.data.assistantError,
    },
  };
}
