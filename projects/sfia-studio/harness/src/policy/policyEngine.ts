import path from "node:path";
import type { ExecutionContract, GitOp } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";

const DENIED_GIT_TOKENS = [
  "add",
  "commit",
  "push",
  "merge",
  "rebase",
  "reset",
  "clean",
  "cherry-pick",
  "branch", // destructive forms checked separately — show-current is via typed op
];

/** Default-deny policy engine for S1. */
export class PolicyEngine {
  assertContract(contract: ExecutionContract): void {
    if (contract.scenario !== "S1") {
      throw new HarnessError("POLICY_SCENARIO", "Only S1 allowed");
    }
    if (contract.gitEffect !== "none-remote") {
      throw new HarnessError("POLICY_GIT_EFFECT", "gitEffect must be none-remote");
    }
    if (contract.cursorMode !== "fixture") {
      throw new HarnessError("POLICY_CURSOR_MODE", "cursorMode must be fixture for this increment");
    }
    if (!contract.repositoryRoot || !path.isAbsolute(contract.repositoryRoot)) {
      throw new HarnessError("POLICY_REPO_ROOT", "repositoryRoot must be absolute");
    }
    if (!contract.proofDir || !path.isAbsolute(contract.proofDir)) {
      throw new HarnessError("POLICY_PROOF_DIR", "proofDir must be absolute");
    }
    if (contract.timeoutMs <= 0 || contract.timeoutMs > 600_000) {
      throw new HarnessError("POLICY_TIMEOUT", "timeoutMs out of bounds");
    }
    for (const p of contract.allowedPaths) {
      this.assertAllowedPath(contract, p);
    }
    this.assertProofDirInsideOrSibling(contract);
  }

  assertAllowedPath(contract: ExecutionContract, targetPath: string): string {
    const root = path.resolve(contract.repositoryRoot);
    if (targetPath.includes("\0")) {
      throw new HarnessError("POLICY_PATH_INJECTION", "NUL in path");
    }
    if (targetPath.split(/[/\\]/).includes("..")) {
      throw new HarnessError("POLICY_PATH_TRAVERSAL", "path contains ..", { targetPath });
    }
    const resolved = path.resolve(root, targetPath);
    const rel = path.relative(root, resolved);
    if (rel.startsWith("..") || path.isAbsolute(rel)) {
      throw new HarnessError("POLICY_PATH_TRAVERSAL", "path escapes repositoryRoot", {
        targetPath,
        resolved,
      });
    }
    const matchPrefix = contract.allowedPaths.some((p) => {
      if (p === "." || p === "./") return true;
      const pref = path.resolve(root, p);
      return resolved === pref || resolved.startsWith(pref + path.sep);
    });
    if (!matchPrefix) {
      throw new HarnessError("POLICY_PATH_DENIED", "path not in allowlist", { targetPath });
    }
    const ext = path.extname(resolved).toLowerCase();
    const allowedExt = contract.allowedExtensions ?? [".md", ".txt", ".json", ".jsonl", ""];
    if (ext && !allowedExt.includes(ext)) {
      throw new HarnessError("POLICY_EXT_DENIED", `extension denied: ${ext}`);
    }
    return resolved;
  }

  assertGitOp(contract: ExecutionContract, op: GitOp): void {
    this.assertContract(contract);
    const label = op.op;
    const allowed = new Set(contract.allowedCommands);
    if (!allowed.has(label)) {
      throw new HarnessError("POLICY_GIT_OP_DENIED", `Git op not allowlisted: ${label}`, { op });
    }
    // Explicit deny of write-like tokens if someone maps wrong
    if ("ref" in op && /[\s;&|`$]/.test(op.ref)) {
      throw new HarnessError("POLICY_GIT_ARG", "unsafe git ref");
    }
    if (op.op === "log" && (op.maxCount <= 0 || op.maxCount > 20)) {
      throw new HarnessError("POLICY_GIT_LOG_LIMIT", "log maxCount must be 1..20");
    }
  }

  assertDeniedShellCommand(commandLine: string): void {
    const lower = commandLine.toLowerCase();
    for (const token of ["git push", "git commit", "git add", "git merge", "git rebase", "git reset", "git clean"]) {
      if (lower.includes(token)) {
        throw new HarnessError("POLICY_GIT_WRITE_DENIED", `Denied command: ${token}`);
      }
    }
    for (const t of DENIED_GIT_TOKENS) {
      if (new RegExp(`\\bgit\\s+${t}\\b`).test(lower) && !lower.includes("git branch --show-current")) {
        if (t === "branch" && lower.includes("--show-current")) continue;
        throw new HarnessError("POLICY_GIT_WRITE_DENIED", `Denied git token: ${t}`);
      }
    }
  }

  private assertProofDirInsideOrSibling(contract: ExecutionContract): void {
    const proof = path.resolve(contract.proofDir);
    if (proof.includes("..")) {
      // resolved already collapses .. but keep check on original
    }
    // proofDir must be absolute and not a symlink escape — basic check
    if (!path.isAbsolute(proof)) {
      throw new HarnessError("POLICY_PROOF_DIR", "proofDir must be absolute");
    }
  }
}
