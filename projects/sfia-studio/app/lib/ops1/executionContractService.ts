import { execFileSync } from "node:child_process";
import type { DatabaseSync } from "node:sqlite";
import { createContractId, createEventId, createExecutionGateId } from "./ids";
import { openOps1Db, nowIsoWithOffset } from "./db";
import { Ops1Error } from "./errors";
import { computeContractHash } from "./executionCanonicalize";
import { getLatestAllowlistEvaluation } from "./allowlistService";
import { resolveWorkspaceRootFromAppCwd } from "./allowlistEvaluation";
import { getRealCursorAvailability } from "./cursorExecutionAdapter";
import type {
  CursorAdapterMode,
  ExecutionContract,
  ExecutionContractPayload,
  ExecutionGateRecord,
  SessionEvent,
  SessionEventType,
} from "./types";
import {
  OPS1_DEFAULT_FORBIDDEN_PATHS,
  OPS1_I5_CONTRACT_VERSION,
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

export function readGitHead(workspaceRoot: string): string {
  return execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: workspaceRoot,
    encoding: "utf8",
  }).trim();
}

export function readGitBranch(workspaceRoot: string): string {
  return execFileSync("git", ["branch", "--show-current"], {
    cwd: workspaceRoot,
    encoding: "utf8",
  }).trim();
}

function sortPaths(paths: string[]): string[] {
  return [...new Set(paths)].sort();
}

export function buildContractPayload(input: {
  sessionId: string;
  actionCandidateId: string;
  actionVersion: number;
  actionObjective: string;
  actionInstructions: string;
  allowedReads: string[];
  allowedCreates: string[];
  allowedModifies: string[];
  maxFilesRead?: number;
  maxFilesCreated?: number;
  maxFilesModified?: number;
  maxDiffLines?: number;
  timeoutSeconds?: number;
  workspaceRoot?: string;
  executionBranchName?: string;
  createdAt?: string;
}): ExecutionContractPayload {
  const workspaceRoot = input.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();
  const baseHeadSha = readGitHead(workspaceRoot);
  const baseBranch = readGitBranch(workspaceRoot) || "HEAD";
  const allowedReads = sortPaths(input.allowedReads);
  const allowedCreates = sortPaths(input.allowedCreates);
  const allowedModifies = sortPaths(input.allowedModifies);
  const ops = new Set<"READ" | "CREATE" | "MODIFY">();
  if (allowedReads.length) ops.add("READ");
  if (allowedCreates.length) ops.add("CREATE");
  if (allowedModifies.length) ops.add("MODIFY");

  return {
    contractVersion: OPS1_I5_CONTRACT_VERSION,
    sessionId: input.sessionId,
    actionCandidateId: input.actionCandidateId,
    actionVersion: input.actionVersion,
    gateDecisionId: null,
    gateDecisionType: null,
    gateDecidedBy: null,
    gateDecidedAt: null,
    repositoryRoot: "mcleland147/sfia-workspace",
    baseBranch,
    baseHeadSha,
    executionBranchName:
      input.executionBranchName ?? "ops1/action/pending",
    actionObjective: input.actionObjective.trim(),
    actionInstructions: input.actionInstructions.trim(),
    allowedReads,
    allowedCreates,
    allowedModifies,
    forbiddenPaths: [...OPS1_DEFAULT_FORBIDDEN_PATHS],
    allowedOperations: [...ops].sort() as Array<"READ" | "CREATE" | "MODIFY">,
    maxFilesRead: input.maxFilesRead ?? Math.max(allowedReads.length, 1),
    maxFilesCreated: input.maxFilesCreated ?? Math.max(allowedCreates.length, 0),
    maxFilesModified:
      input.maxFilesModified ?? Math.max(allowedModifies.length, 0),
    maxDiffLines: input.maxDiffLines ?? 200,
    timeoutSeconds: input.timeoutSeconds ?? 120,
    noRemoteGit: true,
    noCommit: true,
    noPush: true,
    noPr: true,
    noMerge: true,
    createdAt: input.createdAt ?? nowIsoWithOffset(),
  };
}

function mapContract(row: Record<string, unknown>): ExecutionContract {
  const payload = JSON.parse(String(row.payload_json)) as ExecutionContractPayload;
  return {
    ...payload,
    contractId: String(row.contract_id),
    contractHash: String(row.contract_hash),
    status: row.status as ExecutionContract["status"],
    allowlistEvaluationId: String(row.allowlist_evaluation_id),
    adapterMode: row.adapter_mode as CursorAdapterMode,
    supersededAt: row.superseded_at == null ? null : String(row.superseded_at),
  };
}

export function getLatestExecutionContract(
  actionCandidateId: string,
  actionVersion: number,
  db = openOps1Db(),
): ExecutionContract | null {
  const row = db
    .prepare(
      `SELECT * FROM execution_contracts
       WHERE action_candidate_id = ?
         AND action_version = ?
         AND superseded_at IS NULL
       ORDER BY created_at DESC
       LIMIT 1`,
    )
    .get(actionCandidateId, actionVersion) as Record<string, unknown> | undefined;
  return row ? mapContract(row) : null;
}

export function getExecutionContractById(
  contractId: string,
  db = openOps1Db(),
): ExecutionContract | null {
  const row = db
    .prepare(`SELECT * FROM execution_contracts WHERE contract_id = ?`)
    .get(contractId) as Record<string, unknown> | undefined;
  return row ? mapContract(row) : null;
}

export function getActiveExecutionGate(
  contractId: string,
  db = openOps1Db(),
): ExecutionGateRecord | null {
  const row = db
    .prepare(
      `SELECT * FROM execution_gates
       WHERE contract_id = ? AND superseded_at IS NULL
       ORDER BY decided_at DESC LIMIT 1`,
    )
    .get(contractId) as Record<string, unknown> | undefined;
  if (!row) return null;
  return {
    executionGateId: String(row.execution_gate_id),
    contractId: String(row.contract_id),
    contractHash: String(row.contract_hash),
    actionCandidateId: String(row.action_candidate_id),
    actionVersion: Number(row.action_version),
    baseHeadSha: String(row.base_head_sha),
    decidedBy: "Morris",
    decidedAt: String(row.decided_at),
    supersededAt: row.superseded_at == null ? null : String(row.superseded_at),
  };
}

/**
 * Create READY_FOR_GATE contract from VALID I4 allowlist + Morris-confirmed fields.
 * Does not invent Campus360 content — objective/instructions come from caller.
 */
export function createExecutionContract(input: {
  sessionId: string;
  actionCandidateId: string;
  actionObjective: string;
  actionInstructions: string;
  adapterMode?: CursorAdapterMode;
  workspaceRoot?: string;
  maxFilesRead?: number;
  maxFilesCreated?: number;
  maxFilesModified?: number;
  maxDiffLines?: number;
  timeoutSeconds?: number;
}): { contract: ExecutionContract; event: SessionEvent } {
  const db = openOps1Db();
  const session = db
    .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
    .get(input.sessionId) as { status: string } | undefined;
  if (!session || session.status !== "OPEN") {
    throw new Ops1Error("CONFLICT", "Session absente ou non OPEN.");
  }

  const candidate = db
    .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
    .get(input.actionCandidateId) as Record<string, unknown> | undefined;
  if (!candidate) {
    throw new Ops1Error("NOT_FOUND", "ActionCandidate introuvable.");
  }
  if (String(candidate.session_id) !== input.sessionId) {
    throw new Ops1Error("CONFLICT", "ActionCandidate hors session.");
  }
  if (String(candidate.status) !== "APPROVED") {
    throw new Ops1Error(
      "CONFLICT",
      "ActionCandidate non APPROVED — GO I3 requis avant contrat I5.",
    );
  }

  const actionVersion = Number(candidate.version);
  const evaluation = getLatestAllowlistEvaluation(
    input.actionCandidateId,
    actionVersion,
    db,
  );
  if (!evaluation || evaluation.status !== "VALID" || !evaluation.evaluationId) {
    throw new Ops1Error(
      "CONFLICT",
      "Allowlist I4 VALID requise avant contrat d’exécution.",
    );
  }

  const objective = input.actionObjective.trim();
  const instructions = input.actionInstructions.trim();
  if (!objective || !instructions) {
    throw new Ops1Error(
      "VALIDATION",
      "Objectif et instructions exactes requis (Morris) — Cursor ne choisit pas le contenu.",
    );
  }

  // Supersede prior contracts for this action version
  const at = nowIsoWithOffset();
  db.prepare(
    `UPDATE execution_contracts
     SET superseded_at = ?, status = 'SUPERSEDED'
     WHERE action_candidate_id = ?
       AND action_version = ?
       AND superseded_at IS NULL`,
  ).run(at, input.actionCandidateId, actionVersion);
  db.prepare(
    `UPDATE execution_gates SET superseded_at = ?
     WHERE action_candidate_id = ?
       AND action_version = ?
       AND superseded_at IS NULL`,
  ).run(at, input.actionCandidateId, actionVersion);

  const contractId = createContractId();
  const payload = buildContractPayload({
    sessionId: input.sessionId,
    actionCandidateId: input.actionCandidateId,
    actionVersion,
    actionObjective: objective,
    actionInstructions: instructions,
    allowedReads: evaluation.allowedReads,
    allowedCreates: evaluation.allowedCreates,
    allowedModifies: evaluation.allowedModifies,
    workspaceRoot: input.workspaceRoot,
    executionBranchName: `ops1/action/${contractId}`,
    maxFilesRead: input.maxFilesRead,
    maxFilesCreated: input.maxFilesCreated,
    maxFilesModified: input.maxFilesModified,
    maxDiffLines: input.maxDiffLines,
    timeoutSeconds: input.timeoutSeconds,
  });

  const contractHash = computeContractHash(payload);
  const adapterMode = input.adapterMode ?? "fixture";
  if (adapterMode === "real") {
    const avail = getRealCursorAvailability();
    if (!avail.available) {
      throw new Ops1Error(
        "CONFIG",
        avail.flagEnabled
          ? "CURSOR EXECUTION BLOCKED — REAL ADAPTER UNAVAILABLE (binaire Cursor introuvable)."
          : "CURSOR EXECUTION BLOCKED — REAL ADAPTER UNAVAILABLE (OPS1_CURSOR_REAL≠1). Aucun fallback fixture.",
      );
    }
  }

  db.prepare(
    `INSERT INTO execution_contracts (
      contract_id, session_id, action_candidate_id, action_version,
      allowlist_evaluation_id, contract_hash, status, adapter_mode,
      payload_json, created_at, superseded_at
    ) VALUES (?, ?, ?, ?, ?, ?, 'READY_FOR_GATE', ?, ?, ?, NULL)`,
  ).run(
    contractId,
    input.sessionId,
    input.actionCandidateId,
    actionVersion,
    evaluation.evaluationId,
    contractHash,
    adapterMode,
    JSON.stringify(payload),
    payload.createdAt,
  );

  insertEvent(
    db,
    input.sessionId,
    "EXECUTION_CONTRACT_CREATED",
    `I5 contract ${contractId} READY_FOR_GATE`,
  );
  const event = insertEvent(
    db,
    input.sessionId,
    "EXECUTION_CONTRACT_HASHED",
    `contractHash=${contractHash}`,
  );

  return {
    contract: {
      ...payload,
      contractId,
      contractHash,
      status: "READY_FOR_GATE",
      allowlistEvaluationId: evaluation.evaluationId,
      adapterMode,
      supersededAt: null,
    },
    event,
  };
}

/**
 * Morris execution GO — distinct from I3 GO / delivery GO / chat text.
 * Binds actionCandidateId + actionVersion + contractHash + baseHeadSha.
 */
export function recordExecutionGate(input: {
  sessionId: string;
  contractId: string;
  contractHash: string;
  actionCandidateId: string;
  actionVersion: number;
  baseHeadSha: string;
}): { gate: ExecutionGateRecord; contract: ExecutionContract; event: SessionEvent } {
  const db = openOps1Db();
  const contract = getExecutionContractById(input.contractId, db);
  if (!contract || contract.supersededAt) {
    throw new Ops1Error("NOT_FOUND", "Contrat d’exécution introuvable ou superseded.");
  }
  if (contract.sessionId !== input.sessionId) {
    throw new Ops1Error("CONFLICT", "Contrat hors session.");
  }
  if (contract.status !== "READY_FOR_GATE" && contract.status !== "APPROVED") {
    throw new Ops1Error("CONFLICT", `Contrat non gateable (status=${contract.status}).`);
  }
  if (contract.contractHash !== input.contractHash) {
    throw new Ops1Error(
      "CONFLICT",
      "EXECUTION REFUSED — contractHash ne correspond pas au contrat gelé.",
    );
  }
  if (contract.actionCandidateId !== input.actionCandidateId) {
    throw new Ops1Error("CONFLICT", "actionCandidateId ne correspond pas.");
  }
  if (contract.actionVersion !== input.actionVersion) {
    throw new Ops1Error("CONFLICT", "actionVersion ne correspond pas.");
  }
  if (contract.baseHeadSha !== input.baseHeadSha) {
    throw new Ops1Error(
      "CONFLICT",
      "baseHeadSha dérivé — nouveau contrat requis.",
    );
  }

  const payload: ExecutionContractPayload = {
    contractVersion: contract.contractVersion,
    sessionId: contract.sessionId,
    actionCandidateId: contract.actionCandidateId,
    actionVersion: contract.actionVersion,
    gateDecisionId: null,
    gateDecisionType: null,
    gateDecidedBy: null,
    gateDecidedAt: null,
    repositoryRoot: contract.repositoryRoot,
    baseBranch: contract.baseBranch,
    baseHeadSha: contract.baseHeadSha,
    executionBranchName: contract.executionBranchName,
    actionObjective: contract.actionObjective,
    actionInstructions: contract.actionInstructions,
    allowedReads: contract.allowedReads,
    allowedCreates: contract.allowedCreates,
    allowedModifies: contract.allowedModifies,
    forbiddenPaths: contract.forbiddenPaths,
    allowedOperations: contract.allowedOperations,
    maxFilesRead: contract.maxFilesRead,
    maxFilesCreated: contract.maxFilesCreated,
    maxFilesModified: contract.maxFilesModified,
    maxDiffLines: contract.maxDiffLines,
    timeoutSeconds: contract.timeoutSeconds,
    noRemoteGit: true,
    noCommit: true,
    noPush: true,
    noPr: true,
    noMerge: true,
    createdAt: contract.createdAt,
  };
  const recomputed = computeContractHash(payload);
  if (recomputed !== contract.contractHash) {
    throw new Ops1Error(
      "CONFLICT",
      "contractHash incohérent au recalcul — contrat INVALID.",
    );
  }

  const decidedAt = nowIsoWithOffset();
  const executionGateId = createExecutionGateId();

  db.prepare(
    `UPDATE execution_gates SET superseded_at = ?
     WHERE contract_id = ? AND superseded_at IS NULL`,
  ).run(decidedAt, contract.contractId);

  // Freeze gate fields into stored payload WITHOUT changing hash identity:
  // Hash was computed with null gate fields; gate is linked separately.
  // Spec requires GO linked to hash — gate table binds hash; payload stays immutable.
  db.prepare(
    `INSERT INTO execution_gates (
      execution_gate_id, contract_id, contract_hash, session_id,
      action_candidate_id, action_version, base_head_sha,
      decided_by, decided_at, superseded_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, 'Morris', ?, NULL)`,
  ).run(
    executionGateId,
    contract.contractId,
    contract.contractHash,
    input.sessionId,
    input.actionCandidateId,
    input.actionVersion,
    input.baseHeadSha,
    decidedAt,
  );

  db.prepare(
    `UPDATE execution_contracts SET status = 'APPROVED' WHERE contract_id = ?`,
  ).run(contract.contractId);

  const event = insertEvent(
    db,
    input.sessionId,
    "EXECUTION_GATE_RECORDED",
    `I5 GO Morris linked to ${contract.contractHash}`,
  );

  return {
    gate: {
      executionGateId,
      contractId: contract.contractId,
      contractHash: contract.contractHash,
      actionCandidateId: input.actionCandidateId,
      actionVersion: input.actionVersion,
      baseHeadSha: input.baseHeadSha,
      decidedBy: "Morris",
      decidedAt,
      supersededAt: null,
    },
    contract: { ...contract, status: "APPROVED" },
    event,
  };
}
