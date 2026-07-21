/**
 * OPS1 I6 — session close + linked continuation (CLOSED immutable).
 */
import type { DatabaseSync } from "node:sqlite";
import { createEventId, createSessionId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import { getSession } from "./repository";
import { getLatestReportForSession, getReportById } from "./reportService";
import {
  OPS1_PROJECT_KEY,
  type CycleSession,
  type SessionEvent,
  type SessionEventType,
} from "./types";

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

export function closeSession(sessionId: string): {
  session: CycleSession;
  event: SessionEvent;
} {
  const db = openOps1Db();
  const session = getSession(sessionId, db);
  if (!session) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (session.status === "CLOSED") {
    return {
      session,
      event: insertEvent(
        db,
        sessionId,
        "SESSION_CLOSED",
        "already CLOSED",
      ),
    };
  }

  const at = nowIsoWithOffset();
  db.prepare(
    `UPDATE cycle_sessions SET status = 'CLOSED', updated_at = ? WHERE session_id = ?`,
  ).run(at, sessionId);
  const event = insertEvent(db, sessionId, "SESSION_CLOSED", "CLOSED by Morris");
  const refreshed = getSession(sessionId, db);
  if (!refreshed) {
    throw new Ops1Error("INTERNAL", "Session absente après clôture.");
  }
  return { session: refreshed, event };
}

export function refuseClosedMutation(
  sessionId: string,
  detail: string,
): never {
  const db = openOps1Db();
  insertEvent(
    db,
    sessionId,
    "CLOSED_SESSION_MUTATION_REFUSED",
    detail,
  );
  throw new Ops1Error(
    "CONFLICT",
    "SESSION CLOSED — IMMUABLE — mutation refusée.",
  );
}

export function resumePostReportChat(sessionId: string): {
  session: CycleSession;
  event: SessionEvent;
  reportSummary: string;
} {
  const db = openOps1Db();
  const session = getSession(sessionId, db);
  if (!session) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (session.status !== "OPEN") {
    refuseClosedMutation(sessionId, "resumePostReportChat");
  }
  const report = getLatestReportForSession(sessionId, db);
  if (!report) {
    throw new Ops1Error(
      "CONFLICT",
      "Aucun rapport I6 disponible — reprise chat refusée.",
    );
  }
  const reportSummary = [
    `reportId=${report.reportId}`,
    `reportStatus=${report.reportStatus}`,
    `executionAttemptId=${report.executionAttemptId}`,
    `contractHash=${report.contractHash.slice(0, 12)}…`,
    `durationMs=${report.durationMs ?? "n/a"}`,
    `creates=${report.metrics.createCount}`,
    `modifies=${report.metrics.modifyCount}`,
    `deletes=${report.metrics.deleteCount}`,
    `outOfContract=${report.outOfContract}`,
    "REPRISE CHAT ≠ NOUVELLE EXÉCUTION",
  ].join(" | ");
  const event = insertEvent(
    db,
    sessionId,
    "POST_REPORT_CHAT_RESUMED",
    reportSummary,
  );
  return { session, event, reportSummary };
}

/**
 * Open a new OPEN session linked to a CLOSED parent (immutability preserved).
 */
export function openContinuation(input: {
  parentSessionId: string;
}): {
  session: CycleSession;
  event: SessionEvent;
  parent: CycleSession;
  sourceReportId: string | null;
} {
  const db = openOps1Db();
  const parent = getSession(input.parentSessionId, db);
  if (!parent) {
    throw new Ops1Error("NOT_FOUND", "Session parente introuvable.");
  }
  if (parent.status !== "CLOSED") {
    throw new Ops1Error(
      "CONFLICT",
      "Continuation réservée aux sessions CLOSED.",
    );
  }

  const sourceReport = getLatestReportForSession(parent.sessionId, db);
  const sourceReportId = sourceReport?.reportId ?? null;
  if (sourceReportId) {
    const check = getReportById(sourceReportId, db);
    if (!check) {
      throw new Ops1Error("INTERNAL", "sourceReportId incohérent.");
    }
  }

  const sessionId = createSessionId();
  const createdAt = nowIsoWithOffset();
  const mode = parent.conversationMode;
  const fixtureMode = mode === "fixture" ? 1 : 0;

  db.exec("BEGIN IMMEDIATE");
  try {
    db.prepare(
      `INSERT INTO cycle_sessions (
         session_id, project_key, status, created_at, updated_at,
         parent_session_id, fixture_mode, conversation_mode, source_report_id
       ) VALUES (?, ?, 'OPEN', ?, ?, ?, ?, ?, ?)`,
    ).run(
      sessionId,
      OPS1_PROJECT_KEY,
      createdAt,
      createdAt,
      parent.sessionId,
      fixtureMode,
      mode,
      sourceReportId,
    );

    const event = insertEvent(
      db,
      sessionId,
      "SESSION_CONTINUATION_OPENED",
      JSON.stringify({
        parentSessionId: parent.sessionId,
        sourceReportId,
      }),
      createdAt,
    );
    db.exec("COMMIT");

    // Parent must remain CLOSED and unchanged
    const parentAfter = getSession(parent.sessionId, db);
    if (!parentAfter || parentAfter.status !== "CLOSED") {
      throw new Ops1Error(
        "INTERNAL",
        "Session parente mutée pendant continuation — incohérent.",
      );
    }

    return {
      session: {
        sessionId,
        projectKey: OPS1_PROJECT_KEY,
        status: "OPEN",
        createdAt,
        updatedAt: createdAt,
        parentSessionId: parent.sessionId,
        sourceReportId,
        fixtureMode: mode === "fixture",
        conversationMode: mode,
      },
      event,
      parent: parentAfter,
      sourceReportId,
    };
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    if (error instanceof Ops1Error) throw error;
    throw new Ops1Error(
      "PERSISTENCE",
      "Échec ouverture continuation I6.",
      error,
    );
  }
}
