import type { DatabaseSync } from "node:sqlite";
import { createEventId, createExecutionAttemptId, createExecutionResultId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import { digestText } from "./executionCanonicalize";
import {
  getExecutionContractById,
  readGitHead,
} from "./executionContractService";
import { revalidateBeforeExecution } from "./executionRevalidation";
import {
  buildCursorAdapterPayload,
  createActionWorktree,
} from "./executionWorktree";
import { runCursorAdapter } from "./cursorExecutionAdapter";
import { postCheckExecution } from "./executionPostCheck";
import { resolveWorkspaceRootFromAppCwd } from "./allowlistEvaluation";
import { execFileSync } from "node:child_process";
import type {
  CursorAdapterMode,
  ExecutionAttempt,
  ExecutionAttemptStatus,
  MinimalExecutionResult,
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

function mapAttempt(row: Record<string, unknown>): ExecutionAttempt {
  return {
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
  };
}

export function getLatestExecutionAttempt(
  contractId: string,
  db = openOps1Db(),
): ExecutionAttempt | null {
  const row = db
    .prepare(
      `SELECT * FROM execution_attempts
       WHERE contract_id = ?
       ORDER BY started_at DESC LIMIT 1`,
    )
    .get(contractId) as Record<string, unknown> | undefined;
  if (!row) return null;
  const attempt = mapAttempt(row);
  const resultRow = db
    .prepare(
      `SELECT * FROM execution_results WHERE execution_attempt_id = ?`,
    )
    .get(attempt.executionAttemptId) as Record<string, unknown> | undefined;
  if (resultRow) {
    attempt.result = JSON.parse(
      String(resultRow.payload_json),
    ) as MinimalExecutionResult;
  }
  return attempt;
}

function principalUntouched(workspaceRoot: string, expectedHead: string): boolean {
  const head = readGitHead(workspaceRoot);
  if (head !== expectedHead) return false;
  // Ensure Campus360 (and only the action scope) was not written in the principal tree.
  const campusDiff = execFileSync(
    "git",
    ["diff", "HEAD", "--", "projects/campus360"],
    { cwd: workspaceRoot, encoding: "utf8" },
  ).trim();
  if (campusDiff.length > 0) return false;
  const untrackedCampus = execFileSync(
    "git",
    ["ls-files", "--others", "--exclude-standard", "--", "projects/campus360"],
    { cwd: workspaceRoot, encoding: "utf8" },
  ).trim();
  return untrackedCampus.length === 0;
}

/**
 * Full I5 attempt: revalidate → worktree → adapter → post-check.
 * No auto-retry. No remote Git.
 */
export async function runExecutionAttempt(input: {
  sessionId: string;
  contractId: string;
  /** Force adapter; defaults to contract.adapterMode */
  adapterMode?: CursorAdapterMode;
  workspaceRoot?: string;
}): Promise<{
  attempt: ExecutionAttempt;
  result: MinimalExecutionResult;
  adapterPayload: Record<string, unknown>;
  events: SessionEvent[];
}> {
  const db = openOps1Db();
  const workspaceRoot =
    input.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();
  const events: SessionEvent[] = [];

  events.push(
    insertEvent(
      db,
      input.sessionId,
      "EXECUTION_REVALIDATION_STARTED",
      `revalidate contract=${input.contractId}`,
    ),
  );

  const revalidation = revalidateBeforeExecution({
    sessionId: input.sessionId,
    contractId: input.contractId,
    workspaceRoot,
  });
  if (!revalidation.ok) {
    events.push(
      insertEvent(
        db,
        input.sessionId,
        "EXECUTION_REVALIDATION_FAILED",
        revalidation.reason,
      ),
    );
    throw new Ops1Error("CONFLICT", revalidation.reason);
  }

  const contract = revalidation.contract;
  // Contract adapterMode is authoritative — never silently swap real→fixture.
  if (
    input.adapterMode !== undefined &&
    input.adapterMode !== contract.adapterMode
  ) {
    throw new Ops1Error(
      "CONFLICT",
      `Adaptateur demandé (${input.adapterMode}) ≠ contrat (${contract.adapterMode}) — aucun fallback silencieux.`,
    );
  }
  const adapterMode = contract.adapterMode;
  const executionAttemptId = createExecutionAttemptId();
  const startedAt = nowIsoWithOffset();

  // Anti double-exec: unique insert under immediate transaction
  db.exec("BEGIN IMMEDIATE");
  try {
    const running = db
      .prepare(
        `SELECT execution_attempt_id FROM execution_attempts
         WHERE contract_hash = ?
           AND status IN ('PREPARING','REVALIDATING','RUNNING')`,
      )
      .get(contract.contractHash);
    const succeeded = db
      .prepare(
        `SELECT execution_attempt_id FROM execution_attempts
         WHERE contract_hash = ? AND status = 'SUCCEEDED'`,
      )
      .get(contract.contractHash);
    if (running || succeeded) {
      throw new Ops1Error(
        "CONFLICT",
        "Anti-double-exécution : tentative incompatible déjà présente.",
      );
    }
    db.prepare(
      `INSERT INTO execution_attempts (
        execution_attempt_id, contract_id, contract_hash, session_id,
        status, worktree_path, local_branch_name, adapter_mode,
        started_at, completed_at
      ) VALUES (?, ?, ?, ?, 'PREPARING', NULL, NULL, ?, ?, NULL)`,
    ).run(
      executionAttemptId,
      contract.contractId,
      contract.contractHash,
      input.sessionId,
      adapterMode,
      startedAt,
    );
    db.exec("COMMIT");
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {
      /* ignore */
    }
    throw error;
  }

  db.prepare(
    `UPDATE execution_attempts SET status = 'REVALIDATING' WHERE execution_attempt_id = ?`,
  ).run(executionAttemptId);

  let worktreePath: string | null = null;
  let localBranchName: string | null = null;

  try {
    const wt = createActionWorktree({
      executionAttemptId,
      baseHeadSha: contract.baseHeadSha,
      workspaceRoot,
    });
    worktreePath = wt.worktreePath;
    localBranchName = wt.localBranchName;
    db.prepare(
      `UPDATE execution_attempts
       SET status = 'RUNNING', worktree_path = ?, local_branch_name = ?
       WHERE execution_attempt_id = ?`,
    ).run(worktreePath, localBranchName, executionAttemptId);

    events.push(
      insertEvent(
        db,
        input.sessionId,
        "EXECUTION_WORKTREE_CREATED",
        `worktree=${worktreePath} branch=${localBranchName}`,
      ),
    );

    const adapterPayload = buildCursorAdapterPayload({
      worktreePath,
      objective: contract.actionObjective,
      instructions: contract.actionInstructions,
      allowedReads: contract.allowedReads,
      allowedCreates: contract.allowedCreates,
      allowedModifies: contract.allowedModifies,
      forbiddenPaths: contract.forbiddenPaths,
      maxFilesRead: contract.maxFilesRead,
      maxFilesCreated: contract.maxFilesCreated,
      maxFilesModified: contract.maxFilesModified,
      maxDiffLines: contract.maxDiffLines,
      timeoutSeconds: contract.timeoutSeconds,
      contractHash: contract.contractHash,
      executionAttemptId,
      adapterMode,
    });

    events.push(
      insertEvent(
        db,
        input.sessionId,
        "CURSOR_EXECUTION_STARTED",
        `adapter=${adapterMode} attempt=${executionAttemptId}`,
      ),
    );

    const adapterResult = await runCursorAdapter({
      contract,
      worktreePath,
      adapterMode,
    });

    let status: ExecutionAttemptStatus;
    let outOfContract = false;
    let refusalReason: string | null = null;
    let filesCreated: string[] = [];
    let filesModified: string[] = [];
    let filesDeleted: string[] = [];
    let filesRenamed: string[] = [];
    let diffStat = "";

    if (adapterResult.timedOut) {
      status = "TIMED_OUT";
      refusalReason = "Timeout Cursor — aucun retry automatique.";
      events.push(
        insertEvent(
          db,
          input.sessionId,
          "CURSOR_EXECUTION_FAILED",
          refusalReason,
        ),
      );
    } else if (!adapterResult.ok) {
      status = "FAILED";
      refusalReason = adapterResult.stderr || adapterResult.errorCode || "Adapter failed";
      events.push(
        insertEvent(
          db,
          input.sessionId,
          "CURSOR_EXECUTION_FAILED",
          refusalReason,
        ),
      );
    } else {
      const check = postCheckExecution({ worktreePath, contract });
      filesCreated = check.filesCreated;
      filesModified = check.filesModified;
      filesDeleted = check.filesDeleted;
      filesRenamed = check.filesRenamed;
      diffStat = check.diffStat;
      if (!check.ok) {
        status = "FAILED";
        outOfContract = true;
        refusalReason =
          check.reason ?? "EXECUTION FAILED — OUT-OF-CONTRACT EFFECT DETECTED";
        events.push(
          insertEvent(
            db,
            input.sessionId,
            "EXECUTION_OUT_OF_SCOPE_DETECTED",
            refusalReason,
          ),
        );
        events.push(
          insertEvent(
            db,
            input.sessionId,
            "CURSOR_EXECUTION_FAILED",
            refusalReason,
          ),
        );
      } else if (!principalUntouched(workspaceRoot, contract.baseHeadSha)) {
        status = "FAILED";
        outOfContract = true;
        refusalReason = "Effet détecté sur le repo principal — refusé.";
        events.push(
          insertEvent(
            db,
            input.sessionId,
            "EXECUTION_OUT_OF_SCOPE_DETECTED",
            refusalReason,
          ),
        );
      } else {
        status = "SUCCEEDED";
        events.push(
          insertEvent(
            db,
            input.sessionId,
            "CURSOR_EXECUTION_SUCCEEDED",
            `attempt=${executionAttemptId}`,
          ),
        );
      }
    }

    const completedAt = nowIsoWithOffset();
    const resultId = createExecutionResultId();
    const result: MinimalExecutionResult = {
      resultId,
      executionAttemptId,
      contractHash: contract.contractHash,
      status,
      adapterMode,
      worktreePath,
      exitCode: adapterResult.exitCode,
      timedOut: adapterResult.timedOut,
      stdoutDigest: digestText(adapterResult.stdout),
      stderrDigest: digestText(adapterResult.stderr),
      filesRead: contract.allowedReads,
      filesCreated,
      filesModified,
      filesDeleted,
      filesRenamed,
      diffStat,
      outOfContract,
      refusalReason,
      completedAt,
    };

    db.prepare(
      `UPDATE execution_attempts
       SET status = ?, completed_at = ?
       WHERE execution_attempt_id = ?`,
    ).run(status, completedAt, executionAttemptId);

    db.prepare(
      `INSERT INTO execution_results (
        result_id, execution_attempt_id, contract_hash, status, payload_json, completed_at
      ) VALUES (?, ?, ?, ?, ?, ?)`,
    ).run(
      resultId,
      executionAttemptId,
      contract.contractHash,
      status,
      JSON.stringify(result),
      completedAt,
    );

    return {
      attempt: {
        executionAttemptId,
        contractId: contract.contractId,
        contractHash: contract.contractHash,
        sessionId: input.sessionId,
        status,
        worktreePath,
        localBranchName,
        adapterMode,
        startedAt,
        completedAt,
        result,
      },
      result,
      adapterPayload,
      events,
    };
  } catch (error) {
    const completedAt = nowIsoWithOffset();
    const msg =
      error instanceof Ops1Error ? error.safeMessage : "Exécution stoppée.";
    db.prepare(
      `UPDATE execution_attempts
       SET status = 'STOPPED', completed_at = ?, worktree_path = ?, local_branch_name = ?
       WHERE execution_attempt_id = ?`,
    ).run(completedAt, worktreePath, localBranchName, executionAttemptId);
    events.push(
      insertEvent(db, input.sessionId, "EXECUTION_STOPPED", msg),
    );
    throw error;
  }
}

export function getI5Bundle(sessionId: string): {
  latestContractByAction: Record<string, ReturnType<typeof getExecutionContractById>>;
  latestAttemptByContract: Record<string, ExecutionAttempt | null>;
} {
  const db = openOps1Db();
  const contracts = db
    .prepare(
      `SELECT contract_id, action_candidate_id FROM execution_contracts
       WHERE session_id = ? AND superseded_at IS NULL
       ORDER BY created_at DESC`,
    )
    .all(sessionId) as Array<{
    contract_id: string;
    action_candidate_id: string;
  }>;

  const latestContractByAction: Record<
    string,
    ReturnType<typeof getExecutionContractById>
  > = {};
  const latestAttemptByContract: Record<string, ExecutionAttempt | null> = {};

  for (const row of contracts) {
    if (!latestContractByAction[row.action_candidate_id]) {
      latestContractByAction[row.action_candidate_id] = getExecutionContractById(
        row.contract_id,
        db,
      );
    }
    if (!latestAttemptByContract[row.contract_id]) {
      latestAttemptByContract[row.contract_id] = getLatestExecutionAttempt(
        row.contract_id,
        db,
      );
    }
  }

  return { latestContractByAction, latestAttemptByContract };
}
