import { execFileSync } from "node:child_process";
import type { ExecutionContract } from "./types";

export interface PostExecutionCheck {
  ok: boolean;
  outOfContract: boolean;
  reason: string | null;
  filesCreated: string[];
  filesModified: string[];
  filesDeleted: string[];
  filesRenamed: string[];
  diffStat: string;
  statusShort: string;
  numstatLines: number;
}

function runGit(cwd: string, args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" });
}

/**
 * Immediate post-execution control inside the action worktree.
 */
export function postCheckExecution(input: {
  worktreePath: string;
  contract: ExecutionContract;
}): PostExecutionCheck {
  const statusShort = runGit(input.worktreePath, ["status", "--short"]);
  const diffStat = runGit(input.worktreePath, ["diff", "--stat"]);
  const nameStatus = runGit(input.worktreePath, ["diff", "--name-status"]);
  const numstat = runGit(input.worktreePath, ["diff", "--numstat"]);
  runGit(input.worktreePath, ["diff", "--check"]);
  const untracked = runGit(input.worktreePath, [
    "ls-files",
    "--others",
    "--exclude-standard",
  ])
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const filesCreated: string[] = [...untracked];
  const filesModified: string[] = [];
  const filesDeleted: string[] = [];
  const filesRenamed: string[] = [];

  for (const line of nameStatus.split("\n").map((l) => l.trim()).filter(Boolean)) {
    const [code, ...rest] = line.split(/\s+/);
    const filePath = rest.join(" ");
    if (!code) continue;
    if (code.startsWith("R")) {
      filesRenamed.push(filePath);
    } else if (code === "D") {
      filesDeleted.push(filePath);
    } else if (code === "A") {
      filesCreated.push(filePath);
    } else if (code === "M") {
      filesModified.push(filePath);
    } else {
      filesModified.push(filePath);
    }
  }

  const allowedCreates = new Set(input.contract.allowedCreates);
  const allowedModifies = new Set(input.contract.allowedModifies);

  let reason: string | null = null;
  if (filesDeleted.length) {
    reason = "Suppression détectée — hors contrat.";
  } else if (filesRenamed.length) {
    reason = "Rename détecté — hors contrat.";
  } else if (filesCreated.some((p) => !allowedCreates.has(p))) {
    reason = "Création hors allowedCreates.";
  } else if (filesModified.some((p) => !allowedModifies.has(p))) {
    reason = "Modification hors allowedModifies.";
  } else if (filesCreated.length > input.contract.maxFilesCreated) {
    reason = "Dépassement maxFilesCreated.";
  } else if (filesModified.length > input.contract.maxFilesModified) {
    reason = "Dépassement maxFilesModified.";
  }

  // Diff line budget (added+removed)
  let diffLines = 0;
  for (const line of numstat.split("\n").filter(Boolean)) {
    const [a, b] = line.split("\t");
    const add = a === "-" ? 0 : Number(a);
    const del = b === "-" ? 0 : Number(b);
    if (!Number.isNaN(add)) diffLines += add;
    if (!Number.isNaN(del)) diffLines += del;
  }
  // Untracked creates aren't in numstat — approximate via status
  if (!reason && diffLines > input.contract.maxDiffLines) {
    reason = "Dépassement maxDiffLines.";
  }

  for (const p of [...filesCreated, ...filesModified]) {
    if (!p.endsWith(".md")) {
      reason = `Fichier non Markdown: ${p}`;
      break;
    }
    for (const forbidden of input.contract.forbiddenPaths) {
      if (p === forbidden || p.startsWith(forbidden)) {
        reason = `Chemin interdit: ${p}`;
        break;
      }
    }
    if (reason) break;
  }

  // Ensure no commits created in worktree vs base
  const logCount = runGit(input.worktreePath, [
    "rev-list",
    "--count",
    `${input.contract.baseHeadSha}..HEAD`,
  ]).trim();
  if (logCount !== "0") {
    reason = "Commit détecté dans le worktree d’action.";
  }

  const outOfContract = Boolean(reason);
  return {
    ok: !outOfContract,
    outOfContract,
    reason,
    filesCreated: [...new Set(filesCreated)].sort(),
    filesModified: [...new Set(filesModified)].sort(),
    filesDeleted: [...new Set(filesDeleted)].sort(),
    filesRenamed: [...new Set(filesRenamed)].sort(),
    diffStat,
    statusShort,
    numstatLines: diffLines,
  };
}
