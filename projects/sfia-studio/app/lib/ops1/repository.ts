import type { DatabaseSync } from "node:sqlite";
import { createEventId, createSessionId, createTurnId } from "./ids";
import { openOps1Db, nowIsoWithOffset, resetOps1DbForTests } from "./db";
import { Ops1Error } from "./errors";
import {
  OPS1_PROJECT_KEY,
  type CycleSession,
  type JournalTurn,
  type SessionEvent,
  type SessionEventType,
  type TurnRole,
} from "./types";

export { resetOps1DbForTests };

function mapSession(row: Record<string, unknown>): CycleSession {
  return {
    sessionId: String(row.session_id),
    projectKey: String(row.project_key),
    status: row.status as CycleSession["status"],
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
    parentSessionId: row.parent_session_id
      ? String(row.parent_session_id)
      : null,
    fixtureMode: Number(row.fixture_mode) === 1,
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

export function createOpenSession(db = openOps1Db()): {
  session: CycleSession;
  event: SessionEvent;
} {
  const sessionId = createSessionId();
  const createdAt = nowIsoWithOffset();

  try {
    db.exec("BEGIN IMMEDIATE");
    db.prepare(
      `INSERT INTO cycle_sessions (
         session_id, project_key, status, created_at, updated_at,
         parent_session_id, fixture_mode
       ) VALUES (?, ?, 'OPEN', ?, ?, NULL, 1)`,
    ).run(sessionId, OPS1_PROJECT_KEY, createdAt, createdAt);

    const event = insertEvent(
      db,
      sessionId,
      "SESSION_OPENED",
      JSON.stringify({ projectKey: OPS1_PROJECT_KEY, fixtureMode: true }),
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
        fixtureMode: true,
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

export function getSessionBundle(
  sessionId: string,
  db = openOps1Db(),
): { session: CycleSession; turns: JournalTurn[] } | null {
  const session = getSession(sessionId, db);
  if (!session) return null;
  return { session, turns: listTurns(sessionId, db) };
}
