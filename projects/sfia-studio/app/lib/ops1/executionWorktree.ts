import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { Ops1Error } from "./errors";
import { resolveOps1ExecRoot } from "./paths";

export interface WorktreeCreation {
  worktreePath: string;
  localBranchName: string;
  baseHeadSha: string;
}

/**
 * Create dedicated local action worktree after full revalidation.
 * Worktree ≠ strong OS sandbox — documented reserve.
 */
export function createActionWorktree(input: {
  executionAttemptId: string;
  baseHeadSha: string;
  workspaceRoot: string;
}): WorktreeCreation {
  const execRoot = resolveOps1ExecRoot();
  const worktreesRoot = path.join(execRoot, "worktrees");
  fs.mkdirSync(worktreesRoot, { recursive: true });

  const worktreePath = path.join(worktreesRoot, input.executionAttemptId);
  if (fs.existsSync(worktreePath)) {
    throw new Ops1Error(
      "CONFLICT",
      "Chemin worktree déjà présent — tentative ambiguë refusée.",
    );
  }

  // Must stay under .sfia-exec (or OPS1_EXEC_ROOT override)
  const resolved = path.resolve(worktreePath);
  const principal = path.resolve(input.workspaceRoot);
  if (resolved === principal || resolved.startsWith(principal + path.sep)) {
    // Allow only if under .sfia-exec inside studio which is ignored
    if (!resolved.includes(`${path.sep}.sfia-exec${path.sep}`) && !process.env.OPS1_EXEC_ROOT) {
      throw new Ops1Error(
        "PERSISTENCE",
        "Worktree doit être hors contamination ambiguë du working tree principal.",
      );
    }
  }

  const localBranchName = `ops1/action/${input.executionAttemptId}`;

  try {
    execFileSync(
      "git",
      [
        "worktree",
        "add",
        "-b",
        localBranchName,
        worktreePath,
        input.baseHeadSha,
      ],
      {
        cwd: input.workspaceRoot,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
  } catch (error) {
    throw new Ops1Error(
      "INTERNAL",
      "Échec création worktree d’action.",
      error,
    );
  }

  const head = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: worktreePath,
    encoding: "utf8",
  }).trim();
  if (head !== input.baseHeadSha) {
    throw new Ops1Error(
      "CONFLICT",
      "Worktree HEAD ≠ baseHeadSha du contrat.",
    );
  }

  return {
    worktreePath,
    localBranchName,
    baseHeadSha: input.baseHeadSha,
  };
}

/** Inspectable adapter payload — no secrets. */
export function buildCursorAdapterPayload(input: {
  worktreePath: string;
  objective: string;
  instructions: string;
  allowedReads: string[];
  allowedCreates: string[];
  allowedModifies: string[];
  forbiddenPaths: string[];
  maxFilesRead: number;
  maxFilesCreated: number;
  maxFilesModified: number;
  maxDiffLines: number;
  timeoutSeconds: number;
  contractHash: string;
  executionAttemptId: string;
  adapterMode: "fixture" | "real";
}): Record<string, unknown> {
  return {
    cwd: input.worktreePath,
    objective: input.objective,
    instructions: input.instructions,
    allowlist: {
      reads: input.allowedReads,
      creates: input.allowedCreates,
      modifies: input.allowedModifies,
    },
    forbiddenPaths: input.forbiddenPaths,
    limits: {
      maxFilesRead: input.maxFilesRead,
      maxFilesCreated: input.maxFilesCreated,
      maxFilesModified: input.maxFilesModified,
      maxDiffLines: input.maxDiffLines,
      timeoutSeconds: input.timeoutSeconds,
    },
    contractHash: input.contractHash,
    executionAttemptId: input.executionAttemptId,
    adapterMode: input.adapterMode,
    gitRemote: false,
    commit: false,
    push: false,
    pr: false,
  };
}
