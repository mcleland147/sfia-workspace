import type { DatabaseSync } from "node:sqlite";
import {
  createAttemptId,
  createEventId,
  createSessionId,
  createTurnId,
} from "./ids";
import { openOps1Db, nowIsoWithOffset, resetOps1DbForTests } from "./db";
import { Ops1Error } from "./errors";
import {
  OPS1_PROJECT_KEY,
  type ConversationAttempt,
  type ConversationAttemptStatus,
  type ConversationMode,
  type CycleSession,
  type JournalTurn,
  type SessionEvent,
  type SessionEventType,
  type TurnRole,
} from "./types";

export { resetOps1DbForTests };

function mapSession(row: Record<string, unknown>): CycleSession {
  const conversationMode =
    (row.conversation_mode as ConversationMode | undefined) ??
    (Number(row.fixture_mode) === 1 ? "fixture" : "live");
  return {
    sessionId: String(row.session_id),
    projectKey: String(row.project_key),
    status: row.status as CycleSession["status"],
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
    parentSessionId: row.parent_session_id
      ? String(row.parent_session_id)
      : null,
    sourceReportId: row.source_report_id
      ? String(row.source_report_id)
      : null,
    fixtureMode: conversationMode === "fixture",
    conversationMode,
  };
}

function mapTurn(row: Record<string, unknown>): JournalTurn {
  return {
    turnId: String(row.turn_id),
    sessionId: String(row.session_id),
    sequence: Number(row.sequence),
    role: row.role as TurnRole,
    content: String(row.content),
    fixture: Number(row.fixture) === 1,
    createdAt: String(row.created_at),
  };
}

function mapAttempt(row: Record<string, unknown>): ConversationAttempt {
  return {
    attemptId: String(row.attempt_id),
    sessionId: String(row.session_id),
    userTurnId: row.user_turn_id ? String(row.user_turn_id) : null,
    assistantTurnId: row.assistant_turn_id
      ? String(row.assistant_turn_id)
      : null,
    provider: String(row.provider),
    status: row.status as ConversationAttemptStatus,
    providerResponseId: row.provider_response_id
      ? String(row.provider_response_id)
      : null,
    model: row.model ? String(row.model) : null,
    inputTokens:
      row.input_tokens == null ? null : Number(row.input_tokens),
    outputTokens:
      row.output_tokens == null ? null : Number(row.output_tokens),
    totalTokens:
      row.total_tokens == null ? null : Number(row.total_tokens),
    requestStartedAt: String(row.request_started_at),
    requestCompletedAt: row.request_completed_at
      ? String(row.request_completed_at)
      : null,
    errorCode: row.error_code ? String(row.error_code) : null,
  };
}

function insertEvent(
  db: DatabaseSync,
  sessionId: string | null,
  type: SessionEventType,
  detail: string,
  createdAt = nowIsoWithOffset(),
): SessionEvent {
  const eventId = createEventId();
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(eventId, sessionId, type, createdAt, detail);
  return { eventId, sessionId, type, createdAt, detail };
}

export function createOpenSession(
  mode: ConversationMode = "fixture",
  db = openOps1Db(),
): {
  session: CycleSession;
  event: SessionEvent;
} {
  if (mode !== "fixture" && mode !== "live") {
    throw new Ops1Error("VALIDATION", "Mode de session invalide.");
  }
  const sessionId = createSessionId();
  const createdAt = nowIsoWithOffset();
  const fixtureMode = mode === "fixture" ? 1 : 0;

  try {
    db.exec("BEGIN IMMEDIATE");
    db.prepare(
      `INSERT INTO cycle_sessions (
         session_id, project_key, status, created_at, updated_at,
         parent_session_id, fixture_mode, conversation_mode
       ) VALUES (?, ?, 'OPEN', ?, ?, NULL, ?, ?)`,
    ).run(sessionId, OPS1_PROJECT_KEY, createdAt, createdAt, fixtureMode, mode);

    const event = insertEvent(
      db,
      sessionId,
      "SESSION_OPENED",
      JSON.stringify({
        projectKey: OPS1_PROJECT_KEY,
        fixtureMode: mode === "fixture",
        conversationMode: mode,
      }),
      createdAt,
    );
    db.exec("COMMIT");

    return {
      session: {
        sessionId,
        projectKey: OPS1_PROJECT_KEY,
        status: "OPEN",
        createdAt,
        updatedAt: createdAt,
        parentSessionId: null,
        fixtureMode: mode === "fixture",
        conversationMode: mode,
      },
      event,
    };
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    try {
      insertEvent(
        db,
        null,
        "SESSION_PERSISTENCE_FAILED",
        "createOpenSession failed",
      );
    } catch {
      /* ignore secondary failure */
    }
    throw new Ops1Error(
      "PERSISTENCE",
      "Échec de création de la session. Aucune session OPEN n’a été enregistrée.",
      error,
    );
  }
}

export function getSession(
  sessionId: string,
  db = openOps1Db(),
): CycleSession | null {
  const row = db
    .prepare(`SELECT * FROM cycle_sessions WHERE session_id = ?`)
    .get(sessionId) as Record<string, unknown> | undefined;
  return row ? mapSession(row) : null;
}

export function listOpenSessions(db = openOps1Db()): CycleSession[] {
  const rows = db
    .prepare(
      `SELECT * FROM cycle_sessions
       WHERE status = 'OPEN'
       ORDER BY created_at DESC`,
    )
    .all() as Record<string, unknown>[];
  return rows.map(mapSession);
}

export function listTurns(
  sessionId: string,
  db = openOps1Db(),
): JournalTurn[] {
  const rows = db
    .prepare(
      `SELECT * FROM journal_turns
       WHERE session_id = ?
       ORDER BY sequence ASC`,
    )
    .all(sessionId) as Record<string, unknown>[];
  return rows.map(mapTurn);
}

export function appendTurn(
  input: {
    sessionId: string;
    role: TurnRole;
    content: string;
    fixture: boolean;
  },
  db = openOps1Db(),
): { turn: JournalTurn; event: SessionEvent } {
  const session = getSession(input.sessionId, db);
  if (!session) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (session.status !== "OPEN") {
    throw new Ops1Error(
      "CONFLICT",
      "La session n’accepte plus de tours (statut non OPEN).",
    );
  }

  const turnId = createTurnId();
  const createdAt = nowIsoWithOffset();

  try {
    db.exec("BEGIN IMMEDIATE");
    const seqRow = db
      .prepare(
        `SELECT COALESCE(MAX(sequence), 0) AS max_seq
         FROM journal_turns WHERE session_id = ?`,
      )
      .get(input.sessionId) as { max_seq: number };
    const sequence = Number(seqRow.max_seq) + 1;

    db.prepare(
      `INSERT INTO journal_turns (
         turn_id, session_id, sequence, role, content, fixture, created_at
       ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    ).run(
      turnId,
      input.sessionId,
      sequence,
      input.role,
      input.content,
      input.fixture ? 1 : 0,
      createdAt,
    );

    db.prepare(
      `UPDATE cycle_sessions SET updated_at = ? WHERE session_id = ?`,
    ).run(createdAt, input.sessionId);

    const event = insertEvent(
      db,
      input.sessionId,
      "TURN_APPENDED",
      JSON.stringify({
        turnId,
        sequence,
        role: input.role,
        fixture: input.fixture,
      }),
      createdAt,
    );
    db.exec("COMMIT");

    return {
      turn: {
        turnId,
        sessionId: input.sessionId,
        sequence,
        role: input.role,
        content: input.content,
        fixture: input.fixture,
        createdAt,
      },
      event,
    };
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    if (error instanceof Ops1Error) throw error;
    try {
      insertEvent(
        db,
        input.sessionId,
        "TURN_PERSISTENCE_FAILED",
        "appendTurn failed",
      );
    } catch {
      /* ignore */
    }
    throw new Ops1Error(
      "PERSISTENCE",
      "Échec d’écriture du tour. Aucun tour partiel n’a été conservé.",
      error,
    );
  }
}

export function startConversationAttempt(
  input: {
    sessionId: string;
    userTurnId: string;
    provider: string;
  },
  db = openOps1Db(),
): ConversationAttempt {
  const session = getSession(input.sessionId, db);
  if (!session) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (session.status !== "OPEN") {
    throw new Ops1Error("CONFLICT", "Session non OPEN.");
  }

  const attemptId = createAttemptId();
  const startedAt = nowIsoWithOffset();

  try {
    db.exec("BEGIN IMMEDIATE");
    db.prepare(
      `INSERT INTO conversation_attempts (
         attempt_id, session_id, user_turn_id, assistant_turn_id, provider,
         status, provider_response_id, model, input_tokens, output_tokens,
         total_tokens, request_started_at, request_completed_at, error_code
       ) VALUES (?, ?, ?, NULL, ?, 'started', NULL, NULL, NULL, NULL, NULL, ?, NULL, NULL)`,
    ).run(
      attemptId,
      input.sessionId,
      input.userTurnId,
      input.provider,
      startedAt,
    );
    insertEvent(
      db,
      input.sessionId,
      "CONVERSATION_ATTEMPT_STARTED",
      JSON.stringify({
        attemptId,
        userTurnId: input.userTurnId,
        provider: input.provider,
      }),
      startedAt,
    );
    db.exec("COMMIT");
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    throw new Ops1Error(
      "PERSISTENCE",
      "Échec d’enregistrement de la tentative conversationnelle.",
      error,
    );
  }

  return {
    attemptId,
    sessionId: input.sessionId,
    userTurnId: input.userTurnId,
    assistantTurnId: null,
    provider: input.provider,
    status: "started",
    providerResponseId: null,
    model: null,
    inputTokens: null,
    outputTokens: null,
    totalTokens: null,
    requestStartedAt: startedAt,
    requestCompletedAt: null,
    errorCode: null,
  };
}

export function completeConversationAttemptSuccess(
  input: {
    attemptId: string;
    sessionId: string;
    assistantTurnId: string;
    providerResponseId: string | null;
    model: string | null;
    inputTokens: number | null;
    outputTokens: number | null;
    totalTokens: number | null;
  },
  db = openOps1Db(),
): ConversationAttempt {
  const completedAt = nowIsoWithOffset();
  try {
    db.exec("BEGIN IMMEDIATE");
    db.prepare(
      `UPDATE conversation_attempts SET
         status = 'succeeded',
         assistant_turn_id = ?,
         provider_response_id = ?,
         model = ?,
         input_tokens = ?,
         output_tokens = ?,
         total_tokens = ?,
         request_completed_at = ?,
         error_code = NULL
       WHERE attempt_id = ? AND session_id = ? AND status = 'started'`,
    ).run(
      input.assistantTurnId,
      input.providerResponseId,
      input.model,
      input.inputTokens,
      input.outputTokens,
      input.totalTokens,
      completedAt,
      input.attemptId,
      input.sessionId,
    );
    insertEvent(
      db,
      input.sessionId,
      "CONVERSATION_ATTEMPT_SUCCEEDED",
      JSON.stringify({
        attemptId: input.attemptId,
        assistantTurnId: input.assistantTurnId,
        model: input.model,
        totalTokens: input.totalTokens,
      }),
      completedAt,
    );
    db.exec("COMMIT");
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    throw new Ops1Error(
      "PERSISTENCE",
      "Échec de finalisation de la tentative (succès).",
      error,
    );
  }
  const attempt = getConversationAttempt(input.attemptId, db);
  if (!attempt) {
    throw new Ops1Error("NOT_FOUND", "Tentative introuvable après succès.");
  }
  return attempt;
}

export function completeConversationAttemptFailure(
  input: {
    attemptId: string;
    sessionId: string;
    errorCode: string;
  },
  db = openOps1Db(),
): ConversationAttempt {
  const completedAt = nowIsoWithOffset();
  const safeCode = input.errorCode.slice(0, 64);
  try {
    db.exec("BEGIN IMMEDIATE");
    db.prepare(
      `UPDATE conversation_attempts SET
         status = 'failed',
         request_completed_at = ?,
         error_code = ?
       WHERE attempt_id = ? AND session_id = ? AND status = 'started'`,
    ).run(completedAt, safeCode, input.attemptId, input.sessionId);
    insertEvent(
      db,
      input.sessionId,
      "CONVERSATION_ATTEMPT_FAILED",
      JSON.stringify({
        attemptId: input.attemptId,
        errorCode: safeCode,
      }),
      completedAt,
    );
    db.exec("COMMIT");
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    throw new Ops1Error(
      "PERSISTENCE",
      "Échec de finalisation de la tentative (échec).",
      error,
    );
  }
  const attempt = getConversationAttempt(input.attemptId, db);
  if (!attempt) {
    throw new Ops1Error("NOT_FOUND", "Tentative introuvable après échec.");
  }
  return attempt;
}

export function getConversationAttempt(
  attemptId: string,
  db = openOps1Db(),
): ConversationAttempt | null {
  const row = db
    .prepare(`SELECT * FROM conversation_attempts WHERE attempt_id = ?`)
    .get(attemptId) as Record<string, unknown> | undefined;
  return row ? mapAttempt(row) : null;
}

export function listConversationAttempts(
  sessionId: string,
  db = openOps1Db(),
): ConversationAttempt[] {
  const rows = db
    .prepare(
      `SELECT * FROM conversation_attempts
       WHERE session_id = ?
       ORDER BY request_started_at ASC`,
    )
    .all(sessionId) as Record<string, unknown>[];
  return rows.map(mapAttempt);
}

export function getSessionBundle(
  sessionId: string,
  db = openOps1Db(),
): {
  session: CycleSession;
  turns: JournalTurn[];
  attempts: ConversationAttempt[];
} | null {
  const session = getSession(sessionId, db);
  if (!session) return null;
  return {
    session,
    turns: listTurns(sessionId, db),
    attempts: listConversationAttempts(sessionId, db),
  };
}
