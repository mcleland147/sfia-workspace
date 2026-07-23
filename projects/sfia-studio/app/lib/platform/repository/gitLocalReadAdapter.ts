/**
 * Git local read-only adapter — argument arrays only, no shell, no mutation.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import {
  assertPathInsideRoot,
  decideReadPath,
  normalizeRelativePath,
} from "../security/pathPolicy";
import { digestText, redactSecrets, truncateText } from "../security/redaction";
import {
  CT_DEFAULT_READ_MAX_BYTES,
  CT_MAX_TOOL_RESULT_CHARS,
  CT_TOOL_TIMEOUT_MS,
} from "../tools/types";

function git(
  workspaceRoot: string,
  args: string[],
  timeoutMs = CT_TOOL_TIMEOUT_MS,
): string {
  return execFileSync("git", args, {
    cwd: workspaceRoot,
    encoding: "utf8",
    timeout: timeoutMs,
    maxBuffer: 2 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
  });
}

export class GitLocalReadAdapter {
  constructor(private readonly workspaceRoot: string) {}

  getStatus(): { porcelain: string; summary: string } {
    const porcelain = git(this.workspaceRoot, [
      "status",
      "--porcelain",
    ]).trimEnd();
    const { text, truncated } = truncateText(
      redactSecrets(porcelain || "(clean)"),
      CT_MAX_TOOL_RESULT_CHARS,
    );
    return {
      porcelain: text,
      summary: truncated
        ? "git status (truncated)"
        : `git status (${porcelain ? porcelain.split("\n").length : 0} lines)`,
    };
  }

  getHead(): { sha: string; branch: string; summary: string } {
    const sha = git(this.workspaceRoot, ["rev-parse", "HEAD"]).trim();
    let branch = "(detached)";
    try {
      branch = git(this.workspaceRoot, ["branch", "--show-current"]).trim() ||
        "(detached)";
    } catch {
      /* detached */
    }
    return {
      sha,
      branch,
      summary: `HEAD ${sha.slice(0, 12)} on ${branch}`,
    };
  }

  searchFiles(
    query: string,
    limit = 20,
  ): { paths: string[]; summary: string } {
    const q = query.trim().toLowerCase();
    if (!q) {
      throw Object.assign(new Error("query vide"), {
        toolErrorCode: "INVALID_ARGUMENTS",
      });
    }
    const listed = git(this.workspaceRoot, ["ls-files"]);
    const paths = listed
      .split("\n")
      .map((p) => p.trim())
      .filter(Boolean)
      .filter((p) => {
        const norm = normalizeRelativePath(p);
        if (!norm.ok) return false;
        if (!decideReadPath(norm.normalized).allowed) return false;
        return norm.normalized.toLowerCase().includes(q);
      })
      .slice(0, Math.min(50, Math.max(1, limit)));
    return {
      paths,
      summary: `search « ${digestText(query)} » → ${paths.length} fichier(s)`,
    };
  }

  readFile(
    rawPath: string,
    maxBytes = CT_DEFAULT_READ_MAX_BYTES,
  ): { path: string; content: string; summary: string; truncated: boolean } {
    const norm = normalizeRelativePath(rawPath);
    if (!norm.ok) {
      throw Object.assign(new Error(norm.reason), {
        toolErrorCode: norm.errorCode,
      });
    }
    const policy = decideReadPath(norm.normalized);
    if (!policy.allowed) {
      throw Object.assign(new Error(policy.reason ?? "denied"), {
        toolErrorCode: policy.errorCode ?? "PATH_NOT_ALLOWED",
      });
    }
    const contain = assertPathInsideRoot(
      this.workspaceRoot,
      norm.normalized,
    );
    if (!contain.allowed) {
      throw Object.assign(new Error(contain.reason ?? "denied"), {
        toolErrorCode: contain.errorCode ?? "PATH_NOT_ALLOWED",
      });
    }
    const abs = path.join(this.workspaceRoot, norm.normalized);
    if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
      throw Object.assign(new Error("Fichier introuvable."), {
        toolErrorCode: "PATH_NOT_FOUND",
      });
    }
    const buf = fs.readFileSync(abs);
    if (buf.includes(0)) {
      throw Object.assign(new Error("Fichier binaire refusé."), {
        toolErrorCode: "POLICY_DENIED",
      });
    }
    const cap = Math.min(maxBytes, CT_DEFAULT_READ_MAX_BYTES * 2);
    const slice = buf.subarray(0, cap);
    const raw = slice.toString("utf8");
    const redacted = redactSecrets(raw);
    const { text, truncated } = truncateText(
      redacted,
      CT_MAX_TOOL_RESULT_CHARS,
    );
    return {
      path: norm.normalized,
      content: text,
      truncated: truncated || buf.length > cap,
      summary: `read ${norm.normalized} (${text.length} chars)`,
    };
  }

  getDiff(
    rawPath?: string,
    maxBytes = CT_DEFAULT_READ_MAX_BYTES,
  ): { diff: string; summary: string; truncated: boolean } {
    const args = ["diff"];
    if (rawPath) {
      const norm = normalizeRelativePath(rawPath);
      if (!norm.ok) {
        throw Object.assign(new Error(norm.reason), {
          toolErrorCode: norm.errorCode,
        });
      }
      const policy = decideReadPath(norm.normalized);
      if (!policy.allowed) {
        throw Object.assign(new Error(policy.reason ?? "denied"), {
          toolErrorCode: policy.errorCode ?? "PATH_NOT_ALLOWED",
        });
      }
      args.push("--", norm.normalized);
    }
    const diff = git(this.workspaceRoot, args);
    const redacted = redactSecrets(diff || "(no diff)");
    const { text, truncated } = truncateText(
      redacted.slice(0, maxBytes),
      CT_MAX_TOOL_RESULT_CHARS,
    );
    return {
      diff: text,
      truncated: truncated || redacted.length > maxBytes,
      summary: `diff ${rawPath ?? "(all)"}`,
    };
  }

  listWorktrees(): {
    worktrees: Array<{ pathDigest: string; head: string; branch: string }>;
    summary: string;
  } {
    const out = git(this.workspaceRoot, [
      "worktree",
      "list",
      "--porcelain",
    ]);
    const blocks = out.split("\n\n").filter(Boolean);
    const worktrees = blocks.map((block) => {
      const lines = block.split("\n");
      const wt =
        lines.find((l) => l.startsWith("worktree "))?.slice(9) ?? "";
      const head = lines.find((l) => l.startsWith("HEAD "))?.slice(5) ?? "";
      const branch =
        lines.find((l) => l.startsWith("branch "))?.slice(7) ?? "(detached)";
      const base = path.basename(wt);
      return {
        pathDigest: base ? `[worktree]/${base}` : "[worktree]",
        head: head.slice(0, 12),
        branch: branch.replace("refs/heads/", ""),
      };
    });
    return {
      worktrees,
      summary: `${worktrees.length} worktree(s)`,
    };
  }

  getLog(limit = 5): { entries: string[]; summary: string } {
    const n = Math.min(20, Math.max(1, limit));
    const out = git(this.workspaceRoot, [
      "log",
      `-n${n}`,
      "--pretty=format:%h %s",
    ]);
    const entries = out
      .split("\n")
      .map((l) => redactSecrets(l.trim()))
      .filter(Boolean);
    return {
      entries,
      summary: `log top ${entries.length}`,
    };
  }
}
