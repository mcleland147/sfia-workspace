import { execFileSync } from "node:child_process";
import { computeContractHash } from "./executionCanonicalize";
import {
  getActiveExecutionGate,
  getExecutionContractById,
  readGitHead,
} from "./executionContractService";
import { getLatestAllowlistEvaluation } from "./allowlistService";
import { openOps1Db } from "./db";
import { Ops1Error } from "./errors";
import type { ExecutionContract, ExecutionContractPayload } from "./types";

export interface RevalidationOk {
  ok: true;
  contract: ExecutionContract;
  workspaceRoot: string;
}

export interface RevalidationFail {
  ok: false;
  reason: string;
}

export type RevalidationResult = RevalidationOk | RevalidationFail;

/** Principal conforme pour I5 = aucun changement Campus360 (sources Studio non commitées autorisées). */
function campus360PrincipalClean(workspaceRoot: string): boolean {
  const out = execFileSync(
    "git",
    ["status", "--porcelain", "--", "projects/campus360"],
    {
      cwd: workspaceRoot,
      encoding: "utf8",
    },
  ).trim();
  return out.length === 0;
}

function stagedEmpty(workspaceRoot: string): boolean {
  const out = execFileSync("git", ["diff", "--cached", "--name-only"], {
    cwd: workspaceRoot,
    encoding: "utf8",
  }).trim();
  return out.length === 0;
}

function hasSucceededAttempt(
  contractHash: string,
): boolean {
  const db = openOps1Db();
  const row = db
    .prepare(
      `SELECT execution_attempt_id FROM execution_attempts
       WHERE contract_hash = ? AND status = 'SUCCEEDED' LIMIT 1`,
    )
    .get(contractHash) as { execution_attempt_id: string } | undefined;
  return Boolean(row);
}

function hasRunningAttempt(contractHash: string): boolean {
  const db = openOps1Db();
  const row = db
    .prepare(
      `SELECT execution_attempt_id FROM execution_attempts
       WHERE contract_hash = ?
         AND status IN ('PREPARING','REVALIDATING','RUNNING')
       LIMIT 1`,
    )
    .get(contractHash) as { execution_attempt_id: string } | undefined;
  return Boolean(row);
}

/**
 * Independent pre-launch revalidation — fail-closed, no auto-repair.
 */
export function revalidateBeforeExecution(input: {
  sessionId: string;
  contractId: string;
  workspaceRoot: string;
}): RevalidationResult {
  const db = openOps1Db();
  const contract = getExecutionContractById(input.contractId, db);
  if (!contract || contract.supersededAt) {
    return { ok: false, reason: "Contrat final absent ou superseded." };
  }
  if (contract.sessionId !== input.sessionId) {
    return { ok: false, reason: "Contrat hors session." };
  }

  const session = db
    .prepare(`SELECT status FROM cycle_sessions WHERE session_id = ?`)
    .get(input.sessionId) as { status: string } | undefined;
  if (!session || session.status !== "OPEN") {
    return { ok: false, reason: "Session non OPEN." };
  }

  const candidate = db
    .prepare(`SELECT * FROM action_candidates WHERE action_candidate_id = ?`)
    .get(contract.actionCandidateId) as Record<string, unknown> | undefined;
  if (!candidate) {
    return { ok: false, reason: "ActionCandidate courante introuvable." };
  }
  if (Number(candidate.version) !== contract.actionVersion) {
    return { ok: false, reason: "actionVersion changée — nouveau contrat requis." };
  }

  const allowlist = getLatestAllowlistEvaluation(
    contract.actionCandidateId,
    contract.actionVersion,
    db,
  );
  if (
    !allowlist ||
    allowlist.status !== "VALID" ||
    allowlist.supersededAt ||
    allowlist.evaluationId !== contract.allowlistEvaluationId
  ) {
    return {
      ok: false,
      reason: "Allowlist I4 invalide, superseded ou non liée au contrat.",
    };
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
    return { ok: false, reason: "contractHash recalculé différent." };
  }

  const gate = getActiveExecutionGate(contract.contractId, db);
  if (!gate) {
    return {
      ok: false,
      reason: "EXECUTION REFUSED — MORRIS ACTION GATE MISSING",
    };
  }
  if (gate.contractHash !== contract.contractHash) {
    return { ok: false, reason: "GO non lié au contractHash courant." };
  }
  if (gate.supersededAt) {
    return { ok: false, reason: "GO superseded." };
  }
  if (gate.baseHeadSha !== contract.baseHeadSha) {
    return { ok: false, reason: "GO baseHeadSha ≠ contrat." };
  }

  let realHead: string;
  try {
    realHead = readGitHead(input.workspaceRoot);
  } catch (error) {
    throw new Ops1Error("INTERNAL", "Impossible de lire HEAD Git.", error);
  }
  if (realHead !== contract.baseHeadSha) {
    return {
      ok: false,
      reason: `HEAD dérivé (attendu ${contract.baseHeadSha}, réel ${realHead}).`,
    };
  }

  if (!campus360PrincipalClean(input.workspaceRoot)) {
    return {
      ok: false,
      reason:
        "Working tree principal Campus360 non conforme (dirty / untracked sous projects/campus360).",
    };
  }
  if (!stagedEmpty(input.workspaceRoot)) {
    return { ok: false, reason: "Index staged non vide." };
  }

  if (
    !(
      contract.noRemoteGit &&
      contract.noCommit &&
      contract.noPush &&
      contract.noPr &&
      contract.noMerge
    )
  ) {
    return { ok: false, reason: "Flags noRemoteGit/noCommit/noPush/noPr/noMerge invalides." };
  }

  if (
    contract.maxFilesRead <= 0 &&
    contract.maxFilesCreated <= 0 &&
    contract.maxFilesModified <= 0
  ) {
    return { ok: false, reason: "Limites fichiers nulles." };
  }
  if (!contract.forbiddenPaths.length) {
    return { ok: false, reason: "forbiddenPaths absents." };
  }
  if (contract.timeoutSeconds <= 0) {
    return { ok: false, reason: "timeoutSeconds invalide." };
  }

  // Contradiction CREATE+MODIFY same path already blocked at I4; re-check buckets
  const createSet = new Set(contract.allowedCreates);
  for (const p of contract.allowedModifies) {
    if (createSet.has(p)) {
      return { ok: false, reason: "Opération contradictoire CREATE+MODIFY." };
    }
  }

  if (hasSucceededAttempt(contract.contractHash)) {
    return {
      ok: false,
      reason: "Exécution SUCCEEDED déjà enregistrée pour ce contractHash.",
    };
  }
  if (hasRunningAttempt(contract.contractHash)) {
    return {
      ok: false,
      reason: "Tentative RUNNING/PREPARING déjà active pour ce contractHash.",
    };
  }

  if (contract.status !== "APPROVED") {
    return { ok: false, reason: "Contrat non APPROVED." };
  }

  return { ok: true, contract, workspaceRoot: input.workspaceRoot };
}
