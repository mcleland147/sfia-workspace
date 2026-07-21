import type { DatabaseSync } from "node:sqlite";
import {
  createActionCandidateId,
  createEventId,
  createGateDecisionId,
} from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import {
  OPS1_I3_GO_MICROCOPY,
  type ActionAllowlistEvaluation,
  type ActionCandidate,
  type ActionCandidateStatus,
  type ActionQualification,
  type GateDecision,
  type GateDecisionKind,
  type SessionEvent,
  type SessionEventType,
  type SessionQualification,
} from "./types";
import {
  getLatestAllowlistEvaluation,
  supersedeAllowlistEvaluationsForAction,
} from "./allowlistService";

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

function requireOpenSession(db: DatabaseSync, sessionId: string): void {
  const row = db
    .prepare(
      `SELECT status FROM cycle_sessions WHERE session_id = ?`,
    )
    .get(sessionId) as { status: string } | undefined;
  if (!row) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (row.status !== "OPEN") {
    throw new Ops1Error(
      "CONFLICT",
      "La session n’est pas OPEN — I3 n’autorise pas CLOSED.",
    );
  }
}

function mapCandidate(row: Record<string, unknown>): ActionCandidate {
  return {
    actionCandidateId: String(row.action_candidate_id),
    sessionId: String(row.session_id),
    status: row.status as ActionCandidateStatus,
    title: String(row.title),
    objective: String(row.objective),
    scopeSummary: String(row.scope_summary),
    riskSummary: String(row.risk_summary),
    version: Number(row.version),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}

function mapGate(row: Record<string, unknown>): GateDecision {
  return {
    gateDecisionId: String(row.gate_decision_id),
    sessionId: String(row.session_id),
    actionCandidateId: String(row.action_candidate_id),
    actionVersion: Number(row.action_version),
    kind: row.kind as GateDecisionKind,
    motif: row.motif == null ? null : String(row.motif),
    createdAt: String(row.created_at),
  };
}

export function getSessionQualification(
  sessionId: string,
  db = openOps1Db(),
): SessionQualification | null {
  const row = db
    .prepare(
      `SELECT session_id, qualification, updated_at
       FROM session_qualifications WHERE session_id = ?`,
    )
    .get(sessionId) as Record<string, unknown> | undefined;
  if (!row) return null;
  return {
    sessionId: String(row.session_id),
    qualification: row.qualification as ActionQualification,
    updatedAt: String(row.updated_at),
  };
}

export function listActionCandidates(
  sessionId: string,
  db = openOps1Db(),
): ActionCandidate[] {
  const rows = db
    .prepare(
      `SELECT * FROM action_candidates
       WHERE session_id = ?
       ORDER BY created_at ASC`,
    )
    .all(sessionId) as Array<Record<string, unknown>>;
  return rows.map(mapCandidate);
}

export function getActionCandidate(
  actionCandidateId: string,
  db = openOps1Db(),
): ActionCandidate | null {
  const row = db
    .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
    .get(actionCandidateId) as Record<string, unknown> | undefined;
  return row ? mapCandidate(row) : null;
}

export function listGateDecisionsForAction(
  actionCandidateId: string,
  db = openOps1Db(),
): GateDecision[] {
  const rows = db
    .prepare(
      `SELECT * FROM gate_decisions
       WHERE action_candidate_id = ?
       ORDER BY created_at ASC`,
    )
    .all(actionCandidateId) as Array<Record<string, unknown>>;
  return rows.map(mapGate);
}

export function getLatestGateDecision(
  actionCandidateId: string,
  actionVersion?: number,
  db = openOps1Db(),
): GateDecision | null {
  if (actionVersion != null) {
    const row = db
      .prepare(
        `SELECT * FROM gate_decisions
         WHERE action_candidate_id = ? AND action_version = ?
         ORDER BY created_at DESC LIMIT 1`,
      )
      .get(actionCandidateId, actionVersion) as
      | Record<string, unknown>
      | undefined;
    return row ? mapGate(row) : null;
  }
  const row = db
    .prepare(
      `SELECT * FROM gate_decisions
       WHERE action_candidate_id = ?
       ORDER BY created_at DESC LIMIT 1`,
    )
    .get(actionCandidateId) as Record<string, unknown> | undefined;
  return row ? mapGate(row) : null;
}

export function qualifyActionNotRequired(
  sessionId: string,
  db = openOps1Db(),
): { qualification: SessionQualification; event: SessionEvent } {
  requireOpenSession(db, sessionId);
  const now = nowIsoWithOffset();
  db.prepare(
    `INSERT INTO session_qualifications (session_id, qualification, updated_at)
     VALUES (?, 'ACTION_NOT_REQUIRED', ?)
     ON CONFLICT(session_id) DO UPDATE SET
       qualification = excluded.qualification,
       updated_at = excluded.updated_at`,
  ).run(sessionId, now);
  const event = insertEvent(
    db,
    sessionId,
    "ACTION_QUALIFIED_NOT_REQUIRED",
    "qualification=ACTION_NOT_REQUIRED",
    now,
  );
  return {
    qualification: {
      sessionId,
      qualification: "ACTION_NOT_REQUIRED",
      updatedAt: now,
    },
    event,
  };
}

const FIXTURE_DEFAULT = {
  title: "Proposition fixture OPS1 I3",
  objective:
    "Valider une proposition d’action structurée hors chat, sans exécution.",
  scopeSummary:
    "Périmètre documentaire simulé — allowlist exécutable reportée à I4.",
  riskSummary:
    "Aucun effet Cursor/Git/filesystem. GO = validation uniquement.",
};

export function createFixtureActionCandidate(
  sessionId: string,
  overrides?: Partial<
    Pick<ActionCandidate, "title" | "objective" | "scopeSummary" | "riskSummary">
  >,
  db = openOps1Db(),
): { candidate: ActionCandidate; event: SessionEvent } {
  requireOpenSession(db, sessionId);
  const now = nowIsoWithOffset();
  const actionCandidateId = createActionCandidateId();
  const title = overrides?.title?.trim() || FIXTURE_DEFAULT.title;
  const objective = overrides?.objective?.trim() || FIXTURE_DEFAULT.objective;
  const scopeSummary =
    overrides?.scopeSummary?.trim() || FIXTURE_DEFAULT.scopeSummary;
  const riskSummary =
    overrides?.riskSummary?.trim() || FIXTURE_DEFAULT.riskSummary;

  db.prepare(
    `INSERT INTO session_qualifications (session_id, qualification, updated_at)
     VALUES (?, 'ACTION_REQUIRED', ?)
     ON CONFLICT(session_id) DO UPDATE SET
       qualification = excluded.qualification,
       updated_at = excluded.updated_at`,
  ).run(sessionId, now);

  db.prepare(
    `INSERT INTO action_candidates (
      action_candidate_id, session_id, status, title, objective,
      scope_summary, risk_summary, version, created_at, updated_at
    ) VALUES (?, ?, 'PROPOSED', ?, ?, ?, ?, 1, ?, ?)`,
  ).run(
    actionCandidateId,
    sessionId,
    title,
    objective,
    scopeSummary,
    riskSummary,
    now,
    now,
  );

  const event = insertEvent(
    db,
    sessionId,
    "ACTION_CANDIDATE_CREATED",
    `actionCandidateId=${actionCandidateId};version=1;status=PROPOSED`,
    now,
  );

  const candidate = getActionCandidate(actionCandidateId, db);
  if (!candidate) {
    throw new Ops1Error("PERSISTENCE", "ActionCandidate non relisible.");
  }
  return { candidate, event };
}

export function refineActionCandidate(
  input: {
    sessionId: string;
    actionCandidateId: string;
    title: string;
    objective: string;
    scopeSummary: string;
    riskSummary: string;
  },
  db = openOps1Db(),
): { candidate: ActionCandidate; event: SessionEvent } {
  requireOpenSession(db, input.sessionId);
  const existing = getActionCandidate(input.actionCandidateId, db);
  if (!existing || existing.sessionId !== input.sessionId) {
    throw new Ops1Error("NOT_FOUND", "ActionCandidate introuvable.");
  }
  if (
    existing.status === "ABANDONED" ||
    existing.status === "REJECTED" ||
    existing.status === "NOT_REQUIRED"
  ) {
    throw new Ops1Error(
      "CONFLICT",
      "Ce candidat ne peut plus être raffiné dans cet état.",
    );
  }
  if (existing.status === "APPROVED") {
    throw new Ops1Error(
      "CONFLICT",
      "Candidat déjà validé (GO). Utilisez CORRIGER pour rouvrir le raffinement.",
    );
  }

  const now = nowIsoWithOffset();
  const nextVersion = existing.version + 1;
  const title = input.title.trim();
  const objective = input.objective.trim();
  const scopeSummary = input.scopeSummary.trim();
  const riskSummary = input.riskSummary.trim();
  if (!title || !objective || !scopeSummary || !riskSummary) {
    throw new Ops1Error("VALIDATION", "Tous les champs action sont requis.");
  }

  db.prepare(
    `UPDATE action_candidates
     SET title = ?, objective = ?, scope_summary = ?, risk_summary = ?,
         version = ?, status = 'UNDER_REVIEW', updated_at = ?
     WHERE action_candidate_id = ?`,
  ).run(
    title,
    objective,
    scopeSummary,
    riskSummary,
    nextVersion,
    now,
    input.actionCandidateId,
  );

  // I4: refining the action invalidates prior allowlist evaluations.
  supersedeAllowlistEvaluationsForAction(input.actionCandidateId, db);

  const event = insertEvent(
    db,
    input.sessionId,
    "ACTION_CANDIDATE_REFINED",
    `actionCandidateId=${input.actionCandidateId};version=${nextVersion}`,
    now,
  );

  const candidate = getActionCandidate(input.actionCandidateId, db);
  if (!candidate) {
    throw new Ops1Error("PERSISTENCE", "ActionCandidate non relisible.");
  }
  return { candidate, event };
}

function statusAfterGate(kind: GateDecisionKind): ActionCandidateStatus {
  switch (kind) {
    case "GO":
      return "APPROVED";
    case "NO_GO":
      return "REJECTED";
    case "CORRIGER":
      return "CHANGES_REQUESTED";
    case "ABANDONNER":
      return "ABANDONED";
  }
}

export function recordGateDecision(
  input: {
    sessionId: string;
    actionCandidateId: string;
    kind: GateDecisionKind;
    motif?: string | null;
  },
  db = openOps1Db(),
): {
  decision: GateDecision;
  candidate: ActionCandidate;
  event: SessionEvent;
  microcopy: string | null;
} {
  requireOpenSession(db, input.sessionId);
  const existing = getActionCandidate(input.actionCandidateId, db);
  if (!existing || existing.sessionId !== input.sessionId) {
    throw new Ops1Error("NOT_FOUND", "ActionCandidate introuvable.");
  }
  if (
    existing.status === "ABANDONED" ||
    existing.status === "REJECTED" ||
    existing.status === "NOT_REQUIRED"
  ) {
    throw new Ops1Error(
      "CONFLICT",
      "Aucune décision de gate possible sur ce candidat.",
    );
  }
  if (existing.status === "APPROVED" && input.kind !== "CORRIGER") {
    throw new Ops1Error(
      "CONFLICT",
      "Candidat déjà validé — seul CORRIGER peut rouvrir le raffinement.",
    );
  }
  if (
    (existing.status === "PROPOSED" ||
      existing.status === "UNDER_REVIEW" ||
      existing.status === "CHANGES_REQUESTED") &&
    input.kind === "CORRIGER"
  ) {
    // CORRIGER is allowed from review states to explicitly request changes
  }

  const now = nowIsoWithOffset();
  const gateDecisionId = createGateDecisionId();
  const nextStatus = statusAfterGate(input.kind);
  const motif = input.motif?.trim() || null;

  db.prepare(
    `INSERT INTO gate_decisions (
      gate_decision_id, session_id, action_candidate_id, action_version,
      kind, motif, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    gateDecisionId,
    input.sessionId,
    input.actionCandidateId,
    existing.version,
    input.kind,
    motif,
    now,
  );

  db.prepare(
    `UPDATE action_candidates
     SET status = ?, updated_at = ?
     WHERE action_candidate_id = ?`,
  ).run(nextStatus, now, input.actionCandidateId);

  const event = insertEvent(
    db,
    input.sessionId,
    "GATE_DECISION_RECORDED",
    `gateDecisionId=${gateDecisionId};kind=${input.kind};actionVersion=${existing.version};status=${nextStatus}`,
    now,
  );

  const decision = getLatestGateDecision(
    input.actionCandidateId,
    existing.version,
    db,
  );
  const candidate = getActionCandidate(input.actionCandidateId, db);
  if (!decision || !candidate) {
    throw new Ops1Error("PERSISTENCE", "Décision gate non relisible.");
  }

  return {
    decision,
    candidate,
    event,
    microcopy: input.kind === "GO" ? OPS1_I3_GO_MICROCOPY : null,
  };
}

/**
 * Fail-closed: I3 never executes. Always records EXECUTION_REFUSED.
 */
export function refuseExecutionAttempt(
  sessionId: string,
  reason = "I3 — aucune exécution autorisée",
  db = openOps1Db(),
): SessionEvent {
  requireOpenSession(db, sessionId);
  return insertEvent(
    db,
    sessionId,
    "EXECUTION_REFUSED",
    reason,
  );
}

export function getI3Bundle(
  sessionId: string,
  db = openOps1Db(),
): {
  qualification: SessionQualification | null;
  candidates: ActionCandidate[];
  latestDecisionsByAction: Record<string, GateDecision | null>;
  latestAllowlistByAction: Record<string, ActionAllowlistEvaluation | null>;
} {
  const candidates = listActionCandidates(sessionId, db);
  const latestDecisionsByAction: Record<string, GateDecision | null> = {};
  const latestAllowlistByAction: Record<
    string,
    ActionAllowlistEvaluation | null
  > = {};
  for (const c of candidates) {
    latestDecisionsByAction[c.actionCandidateId] = getLatestGateDecision(
      c.actionCandidateId,
      c.version,
      db,
    );
    latestAllowlistByAction[c.actionCandidateId] = getLatestAllowlistEvaluation(
      c.actionCandidateId,
      c.version,
      db,
    );
  }
  return {
    qualification: getSessionQualification(sessionId, db),
    candidates,
    latestDecisionsByAction,
    latestAllowlistByAction,
  };
}
