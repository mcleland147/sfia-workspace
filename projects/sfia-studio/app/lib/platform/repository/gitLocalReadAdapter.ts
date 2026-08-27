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

/** git grep exits 1 when no matches — treat as empty, not failure. */
function gitGrep(
  workspaceRoot: string,
  args: string[],
  timeoutMs = CT_TOOL_TIMEOUT_MS,
): string {
  try {
    return git(workspaceRoot, args, timeoutMs);
  } catch (error) {
    const status =
      error &&
      typeof error === "object" &&
      "status" in error &&
      typeof (error as { status: unknown }).status === "number"
        ? (error as { status: number }).status
        : null;
    if (status === 1) return "";
    throw error;
  }
}

export type GitReadRange = {
  startLine?: number;
  endLine?: number;
};

export type GitReadFileResult = {
  path: string;
  content: string;
  summary: string;
  truncated: boolean;
  startLine: number;
  endLine: number;
  hasMore: boolean;
};

export type GitContentMatch = {
  path: string;
  line: number;
  text: string;
};

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

  /**
   * Fixed-string content search via `git grep` (read-only, no shell).
   * Hits outside pathPolicy are filtered out.
   */
  searchContent(
    query: string,
    opts?: { path?: string; limit?: number; maxBytes?: number },
  ): {
    matches: GitContentMatch[];
    summary: string;
    truncated: boolean;
  } {
    const q = query.trim();
    if (!q) {
      throw Object.assign(new Error("query vide"), {
        toolErrorCode: "INVALID_ARGUMENTS",
      });
    }
    const limit = Math.min(50, Math.max(1, opts?.limit ?? 20));
    const maxBytes = Math.min(
      opts?.maxBytes ?? CT_DEFAULT_READ_MAX_BYTES,
      CT_DEFAULT_READ_MAX_BYTES * 2,
    );

    const args = ["grep", "-n", "-I", "-F", "-e", q, "--"];
    if (opts?.path?.trim()) {
      const norm = normalizeRelativePath(opts.path.trim());
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
      args.push(norm.normalized);
    } else {
      args.push(".");
    }

    const raw = gitGrep(this.workspaceRoot, args);
    const matches: GitContentMatch[] = [];
    let truncated = false;
    let bytes = 0;

    for (const line of raw.split("\n")) {
      if (!line.trim()) continue;
      // path:line:text — path may contain colons rarely; split carefully
      const firstColon = line.indexOf(":");
      const secondColon =
        firstColon >= 0 ? line.indexOf(":", firstColon + 1) : -1;
      if (firstColon < 0 || secondColon < 0) continue;
      const filePath = line.slice(0, firstColon);
      const lineNo = Number.parseInt(line.slice(firstColon + 1, secondColon), 10);
      const textRaw = line.slice(secondColon + 1);
      if (!Number.isFinite(lineNo) || lineNo < 1) continue;

      const norm = normalizeRelativePath(filePath);
      if (!norm.ok) continue;
      if (!decideReadPath(norm.normalized).allowed) continue;

      const snippet = redactSecrets(textRaw).slice(0, 400);
      const entry: GitContentMatch = {
        path: norm.normalized,
        line: lineNo,
        text: snippet,
      };
      const entryBytes = Buffer.byteLength(JSON.stringify(entry), "utf8");
      if (matches.length >= limit || bytes + entryBytes > maxBytes) {
        truncated = true;
        break;
      }
      matches.push(entry);
      bytes += entryBytes;
    }

    if (raw.split("\n").filter((l) => l.trim()).length > matches.length) {
      truncated = true;
    }

    return {
      matches,
      truncated,
      summary: `content « ${digestText(q)} » → ${matches.length} hit(s)${truncated ? " (truncated)" : ""}`,
    };
  }

  readFile(
    rawPath: string,
    maxBytes = CT_DEFAULT_READ_MAX_BYTES,
    range?: GitReadRange,
  ): GitReadFileResult {
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

    const fullText = buf.toString("utf8");
    const lines = fullText.split("\n");
    const totalLines = lines.length;

    const startRequested =
      typeof range?.startLine === "number" && range.startLine >= 1
        ? Math.floor(range.startLine)
        : 1;
    const endRequested =
      typeof range?.endLine === "number" && range.endLine >= 1
        ? Math.floor(range.endLine)
        : totalLines;

    if (startRequested > totalLines) {
      throw Object.assign(
        new Error(
          `startLine ${startRequested} hors document (${totalLines} lignes).`,
        ),
        { toolErrorCode: "INVALID_ARGUMENTS" },
      );
    }

    const startLine = Math.min(startRequested, totalLines);
    const endLine = Math.max(startLine, Math.min(endRequested, totalLines));
    const ranged = lines.slice(startLine - 1, endLine).join("\n");
    const hasMoreLines = endLine < totalLines;

    const cap = Math.min(maxBytes, CT_DEFAULT_READ_MAX_BYTES * 2);
    const byteSlice =
      Buffer.byteLength(ranged, "utf8") > cap
        ? Buffer.from(ranged, "utf8").subarray(0, cap).toString("utf8")
        : ranged;
    const byteTruncated = Buffer.byteLength(ranged, "utf8") > cap;
    const redacted = redactSecrets(byteSlice);
    const { text, truncated: charTruncated } = truncateText(
      redacted,
      CT_MAX_TOOL_RESULT_CHARS,
    );
    const truncated = byteTruncated || charTruncated;
    const hasMore = hasMoreLines || truncated;

    return {
      path: norm.normalized,
      content: text,
      truncated,
      startLine,
      endLine,
      hasMore,
      summary: `read ${norm.normalized} L${startLine}-${endLine}/${totalLines} (${text.length} chars)${hasMore ? " hasMore" : ""}`,
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
