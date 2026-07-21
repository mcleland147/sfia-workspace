/**
 * OPS1 I6 — consolidated post-execution report from I5 attempt + contract.
 * No auto-retry. Sealed reports are immutable.
 */
import { randomUUID } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";
import { createEventId, createReportId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import { getExecutionContractById } from "./executionContractService";
import { formatOps1WorktreeRef } from "./worktreeDisplay";
import type {
  AllowlistMode,
  CursorAdapterMode,
  ExecutionAttempt,
  ExecutionAttemptStatus,
  ExecutionReport,
  ExecutionReportMetrics,
  ExecutionReportStatus,
  MinimalExecutionResult,
  ReportFileCoverage,
  SessionEvent,
  SessionEventType,
} from "./types";

function insertEvent(
  db: DatabaseSync,
  sessionId: string | null,
  type: SessionEventType,
  detail: string,
): SessionEvent {
  const eventId = createEventId();
  const createdAt = nowIsoWithOffset();
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(eventId, sessionId, type, createdAt, detail);
  return { eventId, sessionId, type, createdAt, detail };
}

function parseMs(iso: string | null | undefined): number | null {
  if (!iso) return null;
  const t = Date.parse(iso);
  return Number.isFinite(t) ? t : null;
}

function redactReserves(text: string): string {
  return text.replace(/sk-[A-Za-z0-9]+/g, "[redacted]");
}

function loadAttempt(
  db: DatabaseSync,
  contractId: string,
  executionAttemptId?: string,
): ExecutionAttempt | null {
  const row = (
    executionAttemptId
      ? db
          .prepare(
            `SELECT * FROM execution_attempts
             WHERE execution_attempt_id = ? AND contract_id = ?`,
          )
          .get(executionAttemptId, contractId)
      : db
          .prepare(
            `SELECT * FROM execution_attempts
             WHERE contract_id = ?
             ORDER BY started_at DESC LIMIT 1`,
          )
          .get(contractId)
  ) as Record<string, unknown> | undefined;
  if (!row) return null;

  const attempt: ExecutionAttempt = {
    executionAttemptId: String(row.execution_attempt_id),
    contractId: String(row.contract_id),
    contractHash: String(row.contract_hash),
    sessionId: String(row.session_id),
    status: row.status as ExecutionAttemptStatus,
    worktreePath: row.worktree_path == null ? null : String(row.worktree_path),
    localBranchName:
      row.local_branch_name == null ? null : String(row.local_branch_name),
    adapterMode: row.adapter_mode as CursorAdapterMode,
    startedAt: String(row.started_at),
    completedAt: row.completed_at == null ? null : String(row.completed_at),
    result: null,
  };
  const resultRow = db
    .prepare(
      `SELECT payload_json FROM execution_results WHERE execution_attempt_id = ?`,
    )
    .get(attempt.executionAttemptId) as { payload_json: string } | undefined;
  if (resultRow) {
    attempt.result = JSON.parse(
      resultRow.payload_json,
    ) as MinimalExecutionResult;
  }
  return attempt;
}

export function buildCoverageAndMetrics(input: {
  allowedReads: string[];
  allowedCreates: string[];
  allowedModifies: string[];
  result: MinimalExecutionResult | null | undefined;
  startedAt: string;
  finishedAt: string | null;
}): {
  coverage: ReportFileCoverage[];
  metrics: ExecutionReportMetrics;
  expectedPaths: string[];
  filesOutOfContract: string[];
  incompletenessReason: string | null;
  reportStatus: ExecutionReportStatus;
} {
  const result = input.result;
  const coverage: ReportFileCoverage[] = [];
  const expectedPaths: string[] = [];

  const pushExpected = (path: string, mode: AllowlistMode) => {
    expectedPaths.push(path);
    const observedSet =
      mode === "READ"
        ? new Set(result?.filesRead ?? [])
        : mode === "CREATE"
          ? new Set(result?.filesCreated ?? [])
          : new Set(result?.filesModified ?? []);
    const observed = observedSet.has(path);
    coverage.push({
      path,
      expectedMode: mode,
      observed,
      coverageStatus: observed ? "COVERED" : "MISSING",
      evidenceAvailable: observed,
      gapReason: observed ? null : `Couverture ${mode} absente pour ${path}`,
    });
  };

  for (const p of input.allowedReads) pushExpected(p, "READ");
  for (const p of input.allowedCreates) pushExpected(p, "CREATE");
  for (const p of input.allowedModifies) pushExpected(p, "MODIFY");

  const allowed = new Set(expectedPaths);
  const touched = [
    ...(result?.filesCreated ?? []),
    ...(result?.filesModified ?? []),
    ...(result?.filesDeleted ?? []),
    ...(result?.filesRenamed ?? []),
  ];
  const filesOutOfContract = touched.filter((p) => !allowed.has(p));
  for (const p of filesOutOfContract) {
    coverage.push({
      path: p,
      expectedMode: "MODIFY",
      observed: true,
      coverageStatus: "UNEXPECTED",
      evidenceAvailable: true,
      gapReason: "Chemin hors allowlist observé",
    });
  }

  const startMs = parseMs(input.startedAt);
  const endMs = parseMs(input.finishedAt);
  let durationMs: number | null = null;
  let metricsIncomplete = false;
  let metricsIncompleteReason: string | null = null;
  if (startMs != null && endMs != null && endMs >= startMs) {
    durationMs = endMs - startMs;
  } else {
    metricsIncomplete = true;
    metricsIncompleteReason =
      "durationMs indisponible (startedAt/finishedAt).";
  }

  const metrics: ExecutionReportMetrics = {
    durationMs,
    metricsIncomplete,
    metricsIncompleteReason,
    expectedPathCount: expectedPaths.length,
    touchedPathCount: new Set(touched).size,
    createCount: result?.filesCreated.length ?? 0,
    modifyCount: result?.filesModified.length ?? 0,
    deleteCount: result?.filesDeleted.length ?? 0,
    outOfContract:
      Boolean(result?.outOfContract) || filesOutOfContract.length > 0,
  };

  const missing = coverage.filter((c) => c.coverageStatus === "MISSING");
  let reportStatus: ExecutionReportStatus;
  let incompletenessReason: string | null = null;

  if (!result) {
    reportStatus = "FAILED";
    incompletenessReason = "Résultat d’exécution I5 introuvable.";
  } else if (missing.length > 0 || metricsIncomplete) {
    reportStatus = "REPORT_INCOMPLETE";
    incompletenessReason = [
      missing.length
        ? `${missing.length} chemin(s) allowlisté(s) sans couverture.`
        : null,
      metricsIncompleteReason,
    ]
      .filter(Boolean)
      .join(" ");
  } else {
    reportStatus = "COMPLETED";
  }

  return {
    coverage,
    metrics,
    expectedPaths,
    filesOutOfContract,
    incompletenessReason,
    reportStatus,
  };
}

function mapReportRow(
  row: Record<string, unknown>,
  coverage: ReportFileCoverage[],
): ExecutionReport {
  const payload = JSON.parse(String(row.payload_json)) as ExecutionReport;
  return {
    ...payload,
    reportId: String(row.report_id),
    reportStatus: row.report_status as ExecutionReportStatus,
    sealed: Number(row.sealed) === 1,
    sealedAt: row.sealed_at == null ? null : String(row.sealed_at),
    coverage: coverage.length ? coverage : payload.coverage,
  };
}

export function getReportById(
  reportId: string,
  db = openOps1Db(),
): ExecutionReport | null {
  const row = db
    .prepare(`SELECT * FROM execution_reports WHERE report_id = ?`)
    .get(reportId) as Record<string, unknown> | undefined;
  if (!row) return null;
  const covRows = db
    .prepare(
      `SELECT * FROM report_file_coverage WHERE report_id = ? ORDER BY path`,
    )
    .all(reportId) as Record<string, unknown>[];
  const coverage: ReportFileCoverage[] = covRows.map((c) => ({
    path: String(c.path),
    expectedMode: c.expected_mode as AllowlistMode,
    observed: Number(c.observed) === 1,
    coverageStatus: c.coverage_status as ReportFileCoverage["coverageStatus"],
    evidenceAvailable: Number(c.evidence_available) === 1,
    gapReason: c.gap_reason == null ? null : String(c.gap_reason),
  }));
  return mapReportRow(row, coverage);
}

export function getReportByAttemptId(
  executionAttemptId: string,
  db = openOps1Db(),
): ExecutionReport | null {
  const row = db
    .prepare(
      `SELECT report_id FROM execution_reports WHERE execution_attempt_id = ?`,
    )
    .get(executionAttemptId) as { report_id: string } | undefined;
  if (!row) return null;
  return getReportById(row.report_id, db);
}

export function getLatestReportForSession(
  sessionId: string,
  db = openOps1Db(),
): ExecutionReport | null {
  const row = db
    .prepare(
      `SELECT report_id FROM execution_reports
       WHERE session_id = ?
       ORDER BY created_at DESC LIMIT 1`,
    )
    .get(sessionId) as { report_id: string } | undefined;
  if (!row) return null;
  return getReportById(row.report_id, db);
}

export function generateExecutionReport(input: {
  sessionId: string;
  contractId: string;
  executionAttemptId?: string;
}): { report: ExecutionReport; event: SessionEvent } {
  const db = openOps1Db();
  const session = db
    .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
    .get(input.sessionId) as { status: string } | undefined;
  if (!session) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (session.status !== "OPEN") {
    insertEvent(
      db,
      input.sessionId,
      "CLOSED_SESSION_MUTATION_REFUSED",
      "generateExecutionReport refused on CLOSED",
    );
    throw new Ops1Error(
      "CONFLICT",
      "SESSION CLOSED — IMMUABLE — génération de rapport refusée.",
    );
  }

  const contract = getExecutionContractById(input.contractId, db);
  if (!contract || contract.sessionId !== input.sessionId) {
    throw new Ops1Error("NOT_FOUND", "Contrat d’exécution introuvable.");
  }

  const attemptResolved = loadAttempt(
    db,
    contract.contractId,
    input.executionAttemptId,
  );
  if (!attemptResolved) {
    throw new Ops1Error("NOT_FOUND", "Aucune tentative I5 pour ce contrat.");
  }

  const finishedAt =
    attemptResolved.completedAt ??
    attemptResolved.result?.completedAt ??
    null;

  const built = buildCoverageAndMetrics({
    allowedReads: contract.allowedReads,
    allowedCreates: contract.allowedCreates,
    allowedModifies: contract.allowedModifies,
    result: attemptResolved.result,
    startedAt: attemptResolved.startedAt,
    finishedAt,
  });

  const createdAt = nowIsoWithOffset();
  const reportId = createReportId();
  const errors: string[] = [];
  if (attemptResolved.result?.refusalReason) {
    errors.push(redactReserves(attemptResolved.result.refusalReason));
  }

  const report: ExecutionReport = {
    reportId,
    sessionId: input.sessionId,
    contractId: contract.contractId,
    contractHash: contract.contractHash,
    executionAttemptId: attemptResolved.executionAttemptId,
    adapterMode: attemptResolved.adapterMode,
    executionStatus: attemptResolved.status,
    reportStatus: built.reportStatus,
    baseHeadSha: contract.baseHeadSha,
    startedAt: attemptResolved.startedAt,
    finishedAt,
    durationMs: built.metrics.durationMs,
    expectedPaths: built.expectedPaths,
    filesCreated: attemptResolved.result?.filesCreated ?? [],
    filesModified: attemptResolved.result?.filesModified ?? [],
    filesDeleted: attemptResolved.result?.filesDeleted ?? [],
    filesOutOfContract: built.filesOutOfContract,
    outOfContract: built.metrics.outOfContract,
    exitCode: attemptResolved.result?.exitCode ?? null,
    timedOut: attemptResolved.result?.timedOut ?? false,
    worktreeRef: formatOps1WorktreeRef(attemptResolved.worktreePath),
    reserves: [
      "I6 analyse le rapport — I5 exécute — I7 absent.",
      "Worktree ≠ sandbox OS forte.",
      "adapterMode hors contractHash (héritage I5).",
    ],
    errors,
    incompletenessReason: built.incompletenessReason,
    metrics: built.metrics,
    coverage: built.coverage,
    sealed: true,
    createdAt,
    sealedAt: createdAt,
  };

  // Seal under exclusive lock — refuse overwrite; no auto-retry.
  db.exec("BEGIN IMMEDIATE");
  try {
    const existing = getReportByAttemptId(
      attemptResolved.executionAttemptId,
      db,
    );
    if (existing?.sealed) {
      throw new Ops1Error(
        "CONFLICT",
        "Rapport déjà scellé — écrasement interdit (aucun retry auto).",
      );
    }
    if (existing && !existing.sealed) {
      db.prepare(`DELETE FROM report_file_coverage WHERE report_id = ?`).run(
        existing.reportId,
      );
      db.prepare(`DELETE FROM execution_reports WHERE report_id = ?`).run(
        existing.reportId,
      );
    }

    insertEvent(
      db,
      input.sessionId,
      "EXECUTION_REPORT_STARTED",
      `attempt=${attemptResolved.executionAttemptId}`,
    );

    db.prepare(
      `INSERT INTO execution_reports (
         report_id, session_id, contract_id, contract_hash, execution_attempt_id,
         adapter_mode, execution_status, report_status, base_head_sha,
         started_at, finished_at, duration_ms, payload_json, sealed, created_at, sealed_at
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)`,
    ).run(
      reportId,
      report.sessionId,
      report.contractId,
      report.contractHash,
      report.executionAttemptId,
      report.adapterMode,
      report.executionStatus,
      report.reportStatus,
      report.baseHeadSha,
      report.startedAt,
      report.finishedAt,
      report.durationMs,
      JSON.stringify(report),
      createdAt,
      createdAt,
    );

    for (const c of report.coverage) {
      db.prepare(
        `INSERT INTO report_file_coverage (
           coverage_id, report_id, path, expected_mode, observed,
           coverage_status, evidence_available, gap_reason
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ).run(
        `ops1-rcov-${randomUUID()}`,
        reportId,
        c.path,
        c.expectedMode,
        c.observed ? 1 : 0,
        c.coverageStatus,
        c.evidenceAvailable ? 1 : 0,
        c.gapReason,
      );
    }

    const eventType: SessionEventType =
      report.reportStatus === "COMPLETED"
        ? "EXECUTION_REPORT_COMPLETED"
        : report.reportStatus === "FAILED"
          ? "EXECUTION_REPORT_FAILED"
          : "EXECUTION_REPORT_INCOMPLETE";
    const event = insertEvent(
      db,
      input.sessionId,
      eventType,
      `reportId=${reportId} status=${report.reportStatus}`,
    );
    db.exec("COMMIT");
    return { report, event };
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    if (error instanceof Ops1Error) throw error;
    throw new Ops1Error("PERSISTENCE", "Échec persistance rapport I6.", error);
  }
}
