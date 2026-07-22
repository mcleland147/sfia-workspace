/**
 * Report reinjection — seal → correlated conversation message → optional GPT analysis.
 * No auto-retry. No implicit success.
 */
import type { DatabaseSync } from "node:sqlite";
import { createEventId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import { appendTurn, getSession, listTurns } from "./repository";
import {
  generateExecutionReport,
  getLatestReportForSession,
  getReportById,
} from "./reportService";
import type {
  ExecutionReport,
  JournalTurn,
  SessionEvent,
  SessionEventType,
} from "./types";
import { redactSecrets } from "./tools/redaction";
import { sendConversationMessage } from "./conversation/service";

export const REPORT_REINJECTION_PREFIX = "[OPS1_REPORT_REINJECTION]";

function insertEvent(
  db: DatabaseSync,
  sessionId: string,
  type: SessionEventType,
  detail: Record<string, unknown>,
): SessionEvent {
  const eventId = createEventId();
  const createdAt = nowIsoWithOffset();
  const payload = redactSecrets(JSON.stringify(detail));
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(eventId, sessionId, type, createdAt, payload);
  return { eventId, sessionId, type, createdAt, detail: payload };
}

function alreadyReinjected(
  db: DatabaseSync,
  sessionId: string,
  reportId: string,
): boolean {
  const rows = db
    .prepare(
      `SELECT detail FROM session_events
       WHERE session_id = ? AND type = 'REINJECTION_COMPLETED'`,
    )
    .all(sessionId) as Array<{ detail: string }>;
  return rows.some((r) => {
    try {
      const parsed = JSON.parse(r.detail) as { reportId?: string };
      return parsed.reportId === reportId;
    } catch {
      return r.detail.includes(reportId);
    }
  });
}

export function buildReinjectionMessage(report: ExecutionReport): string {
  const lines = [
    REPORT_REINJECTION_PREFIX,
    `reportId=${report.reportId}`,
    `executionAttemptId=${report.executionAttemptId}`,
    `contractHash=${report.contractHash}`,
    `reportStatus=${report.reportStatus}`,
    `executionStatus=${report.executionStatus}`,
    `adapterMode=${report.adapterMode}`,
    `outOfContract=${report.outOfContract}`,
    `durationMs=${report.durationMs ?? "n/a"}`,
    `creates=${report.metrics.createCount}`,
    `modifies=${report.metrics.modifyCount}`,
    `deletes=${report.metrics.deleteCount}`,
    `coverageGaps=${report.coverage.filter((f) => f.coverageStatus === "MISSING").length}`,
    "IMPORTANT: l’existence du rapport ≠ succès métier implicite.",
    "Décision Morris requise pour la suite.",
  ];
  return lines.join("\n");
}

export async function generateReportAndReinject(input: {
  sessionId: string;
  contractId: string;
  executionAttemptId?: string;
  /** When true, ask GPT/fixture to analyze after injection. */
  analyze?: boolean;
}): Promise<{
  report: ExecutionReport;
  reinjectionTurn: JournalTurn | null;
  analysisTurn: JournalTurn | null;
  analysisError: string | null;
  reinjectionId: string;
}> {
  const db = openOps1Db();
  const session = getSession(input.sessionId, db);
  if (!session) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (session.status !== "OPEN") {
    throw new Ops1Error("CONFLICT", "Session fermée — réinjection refusée.");
  }

  insertEvent(db, input.sessionId, "REPORT_GENERATION_STARTED", {
    contractId: input.contractId,
  });

  const { report } = generateExecutionReport({
    sessionId: input.sessionId,
    contractId: input.contractId,
    executionAttemptId: input.executionAttemptId,
  });

  if (report.sessionId !== input.sessionId) {
    throw new Ops1Error("CONFLICT", "Rapport non corrélé à la session.");
  }
  if (!report.sealed) {
    throw new Ops1Error("CONFLICT", "Rapport non scellé — réinjection refusée.");
  }

  insertEvent(db, input.sessionId, "REPORT_SEALED", {
    reportId: report.reportId,
    reportStatus: report.reportStatus,
  });

  if (alreadyReinjected(db, input.sessionId, report.reportId)) {
    throw new Ops1Error(
      "CONFLICT",
      "Réinjection déjà réalisée pour ce reportId.",
    );
  }

  const reinjectionId = createEventId();
  insertEvent(db, input.sessionId, "REINJECTION_STARTED", {
    reinjectionId,
    reportId: report.reportId,
    executionAttemptId: report.executionAttemptId,
    contractHash: report.contractHash,
  });

  let reinjectionTurn: JournalTurn | null = null;
  try {
    const content = buildReinjectionMessage(report);
    const role =
      session.conversationMode === "fixture"
        ? "assistant_fixture"
        : "assistant_live";
    const appended = appendTurn({
      sessionId: input.sessionId,
      role,
      content,
      fixture: session.conversationMode === "fixture",
    });
    reinjectionTurn = appended.turn;
    insertEvent(db, input.sessionId, "REINJECTION_COMPLETED", {
      reinjectionId,
      reportId: report.reportId,
      turnId: reinjectionTurn.turnId,
    });
  } catch (error) {
    insertEvent(db, input.sessionId, "REINJECTION_FAILED", {
      reinjectionId,
      reportId: report.reportId,
      error: error instanceof Error ? error.message : "unknown",
    });
    throw error;
  }

  let analysisTurn: JournalTurn | null = null;
  let analysisError: string | null = null;

  if (input.analyze !== false) {
    try {
      const analysis = await sendConversationMessage({
        sessionId: input.sessionId,
        content: [
          "Analyse le rapport d’exécution réinjecté ci-dessus.",
          "Ne déclare pas de succès implicite.",
          `reportStatus=${report.reportStatus}.`,
          "Indique la prochaine décision Morris possible.",
        ].join(" "),
        enableTools: false,
      });
      analysisTurn = analysis.assistantTurn;
      analysisError = analysis.assistantError;
    } catch (error) {
      analysisError =
        error instanceof Error
          ? error.message
          : "Analyse GPT indisponible après rapport";
      // Report remains consultable; no auto-retry
    }
  }

  return {
    report,
    reinjectionTurn,
    analysisTurn,
    analysisError,
    reinjectionId,
  };
}

export function listToolRelatedEvents(sessionId: string, db = openOps1Db()) {
  const rows = db
    .prepare(
      `SELECT event_id, session_id, type, created_at, detail
       FROM session_events
       WHERE session_id = ?
       ORDER BY created_at ASC, event_id ASC`,
    )
    .all(sessionId) as Array<{
    event_id: string;
    session_id: string | null;
    type: string;
    created_at: string;
    detail: string;
  }>;
  return rows.map((r) => ({
    eventId: r.event_id,
    sessionId: r.session_id,
    type: r.type as SessionEventType,
    createdAt: r.created_at,
    detail: r.detail,
  }));
}

export function buildUnifiedTimeline(sessionId: string, db = openOps1Db()) {
  const events = listToolRelatedEvents(sessionId, db);
  const turns = listTurns(sessionId, db);
  const report = getLatestReportForSession(sessionId, db);
  const items = [
    ...events.map((e, index) => ({
      kind: "event" as const,
      at: e.createdAt,
      seq: index,
      type: e.type,
      detail: e.detail,
      id: e.eventId,
    })),
    ...turns.map((t, index) => ({
      kind: "turn" as const,
      at: t.createdAt,
      seq: 10_000 + index,
      type: t.role,
      detail: t.content.slice(0, 200),
      id: t.turnId,
    })),
  ].sort((a, b) => {
    const c = a.at.localeCompare(b.at);
    return c !== 0 ? c : a.seq - b.seq;
  });

  let terminal:
    | "COMPLETED"
    | "COMPLETED_WITH_RESERVATIONS"
    | "REPORT_INCOMPLETE"
    | "FAILED"
    | "STOPPED"
    | "DECISION_REQUIRED" = "DECISION_REQUIRED";

  if (report?.reportStatus === "FAILED") terminal = "FAILED";
  else if (report?.reportStatus === "REPORT_INCOMPLETE")
    terminal = "REPORT_INCOMPLETE";
  else if (report?.reportStatus === "COMPLETED") {
    terminal =
      report.outOfContract || report.reserves.length > 0
        ? "COMPLETED_WITH_RESERVATIONS"
        : "COMPLETED";
  }

  return { items, terminal, reportId: report?.reportId ?? null };
}

// re-export for callers that need getReportById correlation checks
export { getReportById };
