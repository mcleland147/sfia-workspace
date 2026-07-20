"use server";

import {
  appendTurn,
  createOpenSession,
  getSessionBundle,
  listOpenSessions,
} from "./repository";
import { buildFixtureAssistantReply } from "./fixtureReply";
import { Ops1Error, toSafeClientError } from "./errors";
import { assertMessageContent, assertSessionId } from "./validation";
import type { CycleSession, JournalTurn } from "./types";

export type Ops1ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; code: string; message: string };

function fail(error: unknown): Ops1ActionResult<never> {
  const safe = toSafeClientError(error);
  console.error("[ops1]", safe.code, safe.message, error);
  return { ok: false, code: safe.code, message: safe.message };
}

export async function ops1CreateSessionAction(): Promise<
  Ops1ActionResult<{ session: CycleSession }>
> {
  try {
    const { session, event } = createOpenSession();
    console.info("[ops1] SESSION_OPENED", session.sessionId, event.eventId);
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
  Ops1ActionResult<{ session: CycleSession; turns: JournalTurn[] }>
> {
  try {
    const id = assertSessionId(sessionId);
    const bundle = getSessionBundle(id);
    if (!bundle) {
      throw new Ops1Error("NOT_FOUND", "Session introuvable.");
    }
    return { ok: true, data: bundle };
  } catch (error) {
    return fail(error);
  }
}

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
  try {
    const sessionId = assertSessionId(input.sessionId);
    const content = assertMessageContent(input.content);

    const { turn: userTurn, event } = appendTurn({
      sessionId,
      role: "user",
      content,
      fixture: true,
    });
    console.info(
      "[ops1] TURN_APPENDED",
      sessionId,
      userTurn.turnId,
      event.eventId,
    );

    let assistantTurn: JournalTurn | null = null;
    let assistantError: string | null = null;
    try {
      const reply = buildFixtureAssistantReply(content);
      const appended = appendTurn({
        sessionId,
        role: "assistant_fixture",
        content: reply,
        fixture: true,
      });
      assistantTurn = appended.turn;
      console.info(
        "[ops1] TURN_APPENDED",
        sessionId,
        appended.turn.turnId,
        appended.event.eventId,
      );
    } catch (error) {
      const safe = toSafeClientError(error);
      assistantError = safe.message;
      console.error("[ops1] TURN_PERSISTENCE_FAILED assistant", error);
    }

    return {
      ok: true,
      data: { userTurn, assistantTurn, assistantError },
    };
  } catch (error) {
    return fail(error);
  }
}
