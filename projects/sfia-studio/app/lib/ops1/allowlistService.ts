import type { DatabaseSync } from "node:sqlite";
import { createAllowlistEvaluationId, createEventId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import {
  evaluateAllowlist,
  resolveWorkspaceRootFromAppCwd,
} from "./allowlistEvaluation";
import type {
  ActionAllowlistEvaluation,
  ActionCandidateStatus,
  AllowlistInputEntry,
  SessionEvent,
  SessionEventType,
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

function mapEvaluation(row: Record<string, unknown>): ActionAllowlistEvaluation {
  const payload = JSON.parse(String(row.payload_json)) as ActionAllowlistEvaluation;
  return {
    ...payload,
    evaluationId: String(row.evaluation_id),
    supersededAt: row.superseded_at == null ? null : String(row.superseded_at),
  };
}

function loadCandidate(
  actionCandidateId: string,
  db: DatabaseSync,
): {
  actionCandidateId: string;
  sessionId: string;
  version: number;
  status: ActionCandidateStatus;
} | null {
  const row = db
    .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
    .get(actionCandidateId) as Record<string, unknown> | undefined;
  if (!row) return null;
  return {
    actionCandidateId: String(row.action_candidate_id),
    sessionId: String(row.session_id),
    version: Number(row.version),
    status: row.status as ActionCandidateStatus,
  };
}

export function getLatestAllowlistEvaluation(
  actionCandidateId: string,
  actionVersion: number,
  db = openOps1Db(),
): ActionAllowlistEvaluation | null {
  const row = db
    .prepare(
      `SELECT * FROM allowlist_evaluations
       WHERE action_candidate_id = ?
         AND action_version = ?
         AND superseded_at IS NULL
       ORDER BY evaluated_at DESC
       LIMIT 1`,
    )
    .get(actionCandidateId, actionVersion) as Record<string, unknown> | undefined;
  if (!row) return null;
  return mapEvaluation(row);
}

export function supersedeAllowlistEvaluationsForAction(
  actionCandidateId: string,
  db = openOps1Db(),
): void {
  const at = nowIsoWithOffset();
  db.prepare(
    `UPDATE allowlist_evaluations
     SET superseded_at = ?
     WHERE action_candidate_id = ?
       AND superseded_at IS NULL`,
  ).run(at, actionCandidateId);
}

/**
 * Evaluate + persist allowlist for an action candidate version.
 * Does not execute Cursor / Git / filesystem writes.
 */
export function evaluateAndPersistAllowlist(input: {
  sessionId: string;
  actionCandidateId: string;
  entries: AllowlistInputEntry[];
  workspaceRoot?: string;
}): {
  evaluation: ActionAllowlistEvaluation;
  event: SessionEvent;
} {
  const db = openOps1Db();
  const candidate = loadCandidate(input.actionCandidateId, db);
  if (!candidate) {
    throw new Ops1Error("NOT_FOUND", "ActionCandidate introuvable.");
  }
  if (candidate.sessionId !== input.sessionId) {
    throw new Ops1Error("CONFLICT", "ActionCandidate hors session.");
  }

  const session = db
    .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
    .get(input.sessionId) as { status: string } | undefined;
  if (!session || session.status !== "OPEN") {
    throw new Ops1Error("CONFLICT", "Session absente ou non OPEN.");
  }

  insertEvent(
    db,
    input.sessionId,
    "ALLOWLIST_EVALUATION_STARTED",
    `I4 allowlist evaluation started for ${candidate.actionCandidateId}@v${candidate.version}`,
  );

  const workspaceRoot =
    input.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();

  const evaluation = evaluateAllowlist({
    actionCandidateId: candidate.actionCandidateId,
    actionVersion: candidate.version,
    entries: input.entries,
    workspaceRoot,
    evaluatedAt: nowIsoWithOffset(),
  });

  const at = nowIsoWithOffset();
  db.prepare(
    `UPDATE allowlist_evaluations
     SET superseded_at = ?
     WHERE action_candidate_id = ?
       AND action_version = ?
       AND superseded_at IS NULL`,
  ).run(at, candidate.actionCandidateId, candidate.version);

  const evaluationId = createAllowlistEvaluationId();
  db.prepare(
    `INSERT INTO allowlist_evaluations (
      evaluation_id, session_id, action_candidate_id, action_version,
      status, ui_status_label, payload_json, evaluated_at, superseded_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL)`,
  ).run(
    evaluationId,
    input.sessionId,
    candidate.actionCandidateId,
    candidate.version,
    evaluation.status,
    evaluation.uiStatusLabel,
    JSON.stringify({ ...evaluation, evaluationId }),
    evaluation.evaluatedAt,
  );

  let eventType: SessionEventType;
  if (evaluation.status === "VALID") {
    eventType = "ALLOWLIST_EVALUATION_SUCCEEDED";
  } else if (evaluation.status === "REQUIRES_CORRECTION") {
    eventType = "ALLOWLIST_CORRECTION_REQUIRED";
  } else {
    eventType = "ALLOWLIST_EVALUATION_FAILED";
  }

  const event = insertEvent(
    db,
    input.sessionId,
    eventType,
    `I4 ${evaluation.uiStatusLabel} (${evaluation.status})`,
  );

  return {
    evaluation: { ...evaluation, evaluationId, supersededAt: null },
    event,
  };
}
