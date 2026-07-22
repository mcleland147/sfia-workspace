# Control Tower Fast Track Delivery — Review Pack Full

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-22 10:44:10 CEST |
| **Cycle** | 8 — Delivery / Fast Track Control Tower Vertical Slice |
| **Profil** | Critical |
| **Gate** | `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` |
| **Repo** | mcleland147/sfia-workspace |
| **Branche** | `delivery/sfia-studio-control-tower-fast-track` (locale, **non poussée**) |
| **HEAD** | `32e5271842b9a344a7e292614675c27ea8ed941b` = origin/main |
| **Handoff plan** | `9419d2d` |

---

## 1. État Git initial

- framing/sfia-studio-control-tower @ 32e5271
- docs 66–72 untracked + README modified ; aucun code
- Branche créée : `delivery/sfia-studio-control-tower-fast-track` (working tree préservé, pas de stash)

## 2. Architecture implémentée

UI → Conversation Service → OpenAI/Fake tool loop → Tool Router → Policy → GitLocalReadAdapter / GitHubReadAdapter (gh|REST) → events
Cursor : OPS1 gate UI → contract → worktree → cursorExecutionAdapter → report → reportReinjection

## 3. OPS1 réutilisé

session, chat live, ActionCandidate, gates, allowlist, contract, worktree, cursor CLI, orchestrator, postcheck, reportService, Ops1SessionScreen

## 4. Créé / modifié

Voir listes ci-dessous + contenus.

## 5. Transport GitHub

`gh` encapsulé si auth (vérifié : mcleland147 logged in) ; sinon REST si GITHUB_TOKEN ; sinon TRANSPORT_UNAVAILABLE explicite.

## 6. Tests

typecheck PASS · lint PASS · 128 unit PASS · build PASS · E2E CT 2/2 · I1/I6 sample PASS

## 7. Captures

.tmp-sfia-review/control-tower-fast-track-evidence/screenshots/01-fixture-git-tool.png
.tmp-sfia-review/control-tower-fast-track-evidence/screenshots/02-tool-denied.png

## 8. Live

Préparé — `CONTROL TOWER LIVE READY — MORRIS INTERACTION REQUIRED`
Non réalisé (pas de clics Morris).

## 9. Anti-claims

Pas de commit/push/PR projet · pas write GitHub · pas MVP/prod · slice non prouvé live · Campus360 principal non modifié

## 10. Contenu complet — fichiers créés (code + doc 73)


### Fichier : `projects/sfia-studio/app/lib/ops1/tools/types.ts`

````
/**
 * Control Tower Fast Track — tool domain types (Lot A).
 * Discriminated unions; deny-by-default policies.
 */
export type ToolErrorCode =
  | "TOOL_NOT_FOUND"
  | "POLICY_DENIED"
  | "REPOSITORY_NOT_ALLOWED"
  | "PATH_NOT_ALLOWED"
  | "PATH_NOT_FOUND"
  | "INVALID_ARGUMENTS"
  | "RESULT_TOO_LARGE"
  | "TIMEOUT"
  | "TRANSPORT_UNAVAILABLE"
  | "PROVIDER_ERROR"
  | "REDACTION_REQUIRED"
  | "INTERNAL_ERROR"
  | "EXECUTION_DENIED_GATE_REQUIRED";

export type ToolCallStatus =
  | "requested"
  | "started"
  | "succeeded"
  | "failed"
  | "denied";

export type ToolTransport = "internal_git" | "gh_cli" | "github_rest" | "none";

export type ControlTowerToolName =
  | "git_local_get_status"
  | "git_local_get_head"
  | "git_local_search_files"
  | "git_local_read_file"
  | "git_local_get_diff"
  | "git_local_list_worktrees"
  | "git_local_get_log"
  | "github_get_repository"
  | "github_get_branch"
  | "github_get_commit"
  | "github_get_pull_request"
  | "github_list_checks"
  | "github_list_pr_comments";

export interface ToolDefinition {
  name: ControlTowerToolName;
  description: string;
  parameters: Record<string, unknown>;
}

export interface ToolCallRequest {
  toolCallId: string;
  name: ControlTowerToolName | string;
  arguments: Record<string, unknown>;
  sessionId: string;
}

export interface ToolUsageMetadata {
  durationMs: number;
  transport: ToolTransport;
  truncated: boolean;
  bytes: number;
}

export type ToolCallResult =
  | {
      ok: true;
      toolCallId: string;
      name: string;
      status: "succeeded";
      data: unknown;
      summary: string;
      usage: ToolUsageMetadata;
    }
  | {
      ok: false;
      toolCallId: string;
      name: string;
      status: "failed" | "denied";
      errorCode: ToolErrorCode;
      message: string;
      usage: ToolUsageMetadata;
    };

export interface ToolPolicyDecision {
  allowed: boolean;
  reason?: string;
  errorCode?: ToolErrorCode;
}

export interface SourceReference {
  kind: "git_local" | "github";
  label: string;
  pathOrRef: string | null;
}

export interface ToolExecutionEventDetail {
  toolCallId: string;
  toolName: string;
  status: ToolCallStatus;
  durationMs?: number;
  source?: SourceReference;
  errorCode?: ToolErrorCode;
  resultDigest?: string;
  summary?: string;
}

export const CT_MAX_TOOL_ROUNDS = 4;
export const CT_MAX_TOOL_CALLS_PER_ROUND = 4;
export const CT_MAX_TOOL_RESULT_CHARS = 12_000;
export const CT_TOOL_TIMEOUT_MS = 15_000;
export const CT_DEFAULT_READ_MAX_BYTES = 32_768;
export const CT_GITHUB_REPO_ALLOWLIST = [
  "mcleland147/sfia-workspace",
] as const;

export const CONTROL_TOWER_TOOL_DEFINITIONS: ToolDefinition[] = [
  {
    name: "git_local_get_status",
    description: "Read local git status (porcelain). Read-only.",
    parameters: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: "git_local_get_head",
    description: "Read local HEAD sha and current branch. Read-only.",
    parameters: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: "git_local_search_files",
    description: "Search tracked files by substring. Read-only.",
    parameters: {
      type: "object",
      properties: {
        query: { type: "string" },
        limit: { type: "integer", minimum: 1, maximum: 50 },
      },
      required: ["query"],
      additionalProperties: false,
    },
  },
  {
    name: "git_local_read_file",
    description:
      "Read a UTF-8 text file relative to repo root. Paths are validated server-side.",
    parameters: {
      type: "object",
      properties: {
        path: { type: "string" },
        maxBytes: { type: "integer", minimum: 1, maximum: 65536 },
      },
      required: ["path"],
      additionalProperties: false,
    },
  },
  {
    name: "git_local_get_diff",
    description: "Read local git diff (optional path). Read-only.",
    parameters: {
      type: "object",
      properties: {
        path: { type: "string" },
        maxBytes: { type: "integer", minimum: 1, maximum: 65536 },
      },
      additionalProperties: false,
    },
  },
  {
    name: "git_local_list_worktrees",
    description: "List local git worktrees (paths redacted). Read-only.",
    parameters: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: "git_local_get_log",
    description: "Read limited local git log. Read-only.",
    parameters: {
      type: "object",
      properties: {
        limit: { type: "integer", minimum: 1, maximum: 20 },
      },
      additionalProperties: false,
    },
  },
  {
    name: "github_get_repository",
    description: "Read allowlisted GitHub repository metadata. Read-only.",
    parameters: {
      type: "object",
      properties: {
        owner: { type: "string" },
        name: { type: "string" },
      },
      additionalProperties: false,
    },
  },
  {
    name: "github_get_branch",
    description: "Read a remote branch tip. Read-only.",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"],
      additionalProperties: false,
    },
  },
  {
    name: "github_get_commit",
    description: "Read a remote commit summary. Read-only.",
    parameters: {
      type: "object",
      properties: {
        sha: { type: "string" },
      },
      required: ["sha"],
      additionalProperties: false,
    },
  },
  {
    name: "github_get_pull_request",
    description: "Read a pull request summary. Read-only.",
    parameters: {
      type: "object",
      properties: {
        number: { type: "integer", minimum: 1 },
      },
      required: ["number"],
      additionalProperties: false,
    },
  },
  {
    name: "github_list_checks",
    description: "List check runs for a ref. Read-only.",
    parameters: {
      type: "object",
      properties: {
        ref: { type: "string" },
      },
      required: ["ref"],
      additionalProperties: false,
    },
  },
  {
    name: "github_list_pr_comments",
    description: "List pull request review comments (truncated). Read-only.",
    parameters: {
      type: "object",
      properties: {
        number: { type: "integer", minimum: 1 },
      },
      required: ["number"],
      additionalProperties: false,
    },
  },
];
````

### Fichier : `projects/sfia-studio/app/lib/ops1/tools/redaction.ts`

````
/** Redaction helpers for tool outputs — never leak secrets to the model. */
const SECRET_PATTERNS: RegExp[] = [
  /\bsk-[A-Za-z0-9_-]{10,}\b/g,
  /\bghp_[A-Za-z0-9]{20,}\b/g,
  /\bgithub_pat_[A-Za-z0-9_]{20,}\b/g,
  /\bOPENAI_API_KEY\s*=\s*.+/gi,
  /\bAuthorization:\s*Bearer\s+\S+/gi,
];

export function redactSecrets(text: string): string {
  let out = text;
  for (const re of SECRET_PATTERNS) {
    out = out.replace(re, "[redacted]");
  }
  return out;
}

export function truncateText(
  text: string,
  maxChars: number,
): { text: string; truncated: boolean } {
  if (text.length <= maxChars) return { text, truncated: false };
  return {
    text: `${text.slice(0, maxChars)}\n…[truncated]`,
    truncated: true,
  };
}

export function digestText(text: string): string {
  const redacted = redactSecrets(text);
  if (redacted.length <= 120) return redacted;
  return `${redacted.slice(0, 117)}…`;
}
````

### Fichier : `projects/sfia-studio/app/lib/ops1/tools/pathPolicy.ts`

````
/**
 * Path / repo policy for Control Tower read tools — deny by default.
 */
import path from "node:path";
import type { ToolErrorCode, ToolPolicyDecision } from "./types";
import { CT_GITHUB_REPO_ALLOWLIST } from "./types";

const FORBIDDEN_PATH_PREFIXES = [
  ".git/",
  ".env",
  "node_modules/",
  "method/",
  "prompts/",
  "scripts/",
  ".github/",
  ".sfia/",
  ".cursor/",
] as const;

const FORBIDDEN_BASENAME_PREFIXES = [".env"] as const;

const FORBIDDEN_BASENAMES = new Set([
  ".env",
  ".env.local",
  ".env.production",
  "credentials.json",
  "id_rsa",
  "id_ed25519",
]);

const ALLOWED_READ_PREFIXES = [
  "projects/campus360/",
  "projects/sfia-studio/",
  "README.md",
] as const;

export function normalizeRelativePath(raw: unknown): {
  ok: true;
  normalized: string;
} | {
  ok: false;
  errorCode: ToolErrorCode;
  reason: string;
} {
  if (typeof raw !== "string" || !raw.trim()) {
    return {
      ok: false,
      errorCode: "INVALID_ARGUMENTS",
      reason: "Chemin manquant.",
    };
  }
  const trimmed = raw.trim();
  if (path.isAbsolute(trimmed) || /^[A-Za-z]:[\\/]/.test(trimmed)) {
    return {
      ok: false,
      errorCode: "PATH_NOT_ALLOWED",
      reason: "Chemin absolu interdit.",
    };
  }
  const posix = trimmed.replace(/\\/g, "/");
  const parts = posix.split("/");
  if (parts.some((p) => p === ".." || p === "")) {
    return {
      ok: false,
      errorCode: "PATH_NOT_ALLOWED",
      reason: "Traversal ou segment vide interdit.",
    };
  }
  return {
    ok: true,
    normalized: parts.filter((p) => p !== ".").join("/"),
  };
}

export function decideReadPath(normalized: string): ToolPolicyDecision {
  const base = normalized.split("/").pop() ?? normalized;
  if (FORBIDDEN_BASENAMES.has(base)) {
    return {
      allowed: false,
      errorCode: "PATH_NOT_ALLOWED",
      reason: "Basename secret interdit.",
    };
  }
  for (const p of FORBIDDEN_BASENAME_PREFIXES) {
    if (base.startsWith(p)) {
      return {
        allowed: false,
        errorCode: "PATH_NOT_ALLOWED",
        reason: "Fichier env/secret interdit.",
      };
    }
  }
  for (const prefix of FORBIDDEN_PATH_PREFIXES) {
    if (normalized === prefix.replace(/\/$/, "") || normalized.startsWith(prefix)) {
      return {
        allowed: false,
        errorCode: "PATH_NOT_ALLOWED",
        reason: `Préfixe interdit: ${prefix}`,
      };
    }
  }
  const allowed = ALLOWED_READ_PREFIXES.some((prefix) => {
    if (prefix.endsWith("/")) {
      return normalized.startsWith(prefix) || normalized === prefix.slice(0, -1);
    }
    return normalized === prefix;
  });
  if (!allowed) {
    return {
      allowed: false,
      errorCode: "PATH_NOT_ALLOWED",
      reason: "Chemin hors allowlist de lecture Control Tower.",
    };
  }
  return { allowed: true };
}

export function decideGithubRepo(
  owner: string,
  name: string,
): ToolPolicyDecision {
  const full = `${owner}/${name}`;
  if (
    !(CT_GITHUB_REPO_ALLOWLIST as readonly string[]).includes(full)
  ) {
    return {
      allowed: false,
      errorCode: "REPOSITORY_NOT_ALLOWED",
      reason: `Repository non allowlisté: ${full}`,
    };
  }
  return { allowed: true };
}

export function assertPathInsideRoot(
  workspaceRoot: string,
  relativePath: string,
): ToolPolicyDecision {
  const abs = path.resolve(workspaceRoot, relativePath);
  const root = path.resolve(workspaceRoot);
  if (abs !== root && !abs.startsWith(root + path.sep)) {
    return {
      allowed: false,
      errorCode: "PATH_NOT_ALLOWED",
      reason: "Chemin hors racine du repository.",
    };
  }
  return { allowed: true };
}
````

### Fichier : `projects/sfia-studio/app/lib/ops1/tools/gitLocalReadAdapter.ts`

````
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
} from "./pathPolicy";
import { digestText, redactSecrets, truncateText } from "./redaction";
import {
  CT_DEFAULT_READ_MAX_BYTES,
  CT_MAX_TOOL_RESULT_CHARS,
  CT_TOOL_TIMEOUT_MS,
} from "./types";

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
````

### Fichier : `projects/sfia-studio/app/lib/ops1/tools/githubReadAdapter.ts`

````
/**
 * GitHub read adapter — transport-agnostic interface.
 * Default transport: encapsulated `gh` CLI (read-only). Optional REST via token.
 */
import { execFileSync } from "node:child_process";
import { decideGithubRepo } from "./pathPolicy";
import { digestText, redactSecrets, truncateText } from "./redaction";
import {
  CT_GITHUB_REPO_ALLOWLIST,
  CT_MAX_TOOL_RESULT_CHARS,
  CT_TOOL_TIMEOUT_MS,
  type ToolTransport,
} from "./types";

export interface GithubRepositoryView {
  fullName: string;
  defaultBranch: string;
  description: string | null;
  url: string;
}

export interface GithubBranchView {
  name: string;
  sha: string;
}

export interface GithubCommitView {
  sha: string;
  message: string;
  author: string | null;
}

export interface GithubPullRequestView {
  number: number;
  title: string;
  state: string;
  headRef: string;
  baseRef: string;
  url: string;
}

export interface GithubCheckView {
  name: string;
  conclusion: string | null;
  status: string;
}

export interface GithubCommentView {
  id: number;
  user: string;
  bodyDigest: string;
}

export interface GithubReadPort {
  readonly transport: ToolTransport;
  getRepository(owner: string, name: string): Promise<GithubRepositoryView>;
  getBranch(owner: string, name: string, branch: string): Promise<GithubBranchView>;
  getCommit(owner: string, name: string, sha: string): Promise<GithubCommitView>;
  getPullRequest(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubPullRequestView>;
  listPullRequestComments(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubCommentView[]>;
  listChecks(
    owner: string,
    name: string,
    ref: string,
  ): Promise<GithubCheckView[]>;
}

function assertRepo(owner: string, name: string): void {
  const d = decideGithubRepo(owner, name);
  if (!d.allowed) {
    throw Object.assign(new Error(d.reason ?? "repo denied"), {
      toolErrorCode: d.errorCode ?? "REPOSITORY_NOT_ALLOWED",
    });
  }
}

function ghJson(args: string[]): unknown {
  const out = execFileSync("gh", args, {
    encoding: "utf8",
    timeout: CT_TOOL_TIMEOUT_MS,
    maxBuffer: 2 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env },
  });
  return JSON.parse(out);
}

export function probeGhAuth(): {
  available: boolean;
  authenticated: boolean;
  reason?: string;
} {
  try {
    execFileSync("gh", ["--version"], {
      encoding: "utf8",
      timeout: 5000,
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch {
    return {
      available: false,
      authenticated: false,
      reason: "gh CLI introuvable",
    };
  }
  try {
    const status = execFileSync("gh", ["auth", "status"], {
      encoding: "utf8",
      timeout: 8000,
      stdio: ["ignore", "pipe", "pipe"],
    });
    // Never return token material — only presence of Logged in
    const ok = /Logged in to github\.com/i.test(status);
    return {
      available: true,
      authenticated: ok,
      reason: ok ? undefined : "gh non authentifié",
    };
  } catch {
    return {
      available: true,
      authenticated: false,
      reason: "gh auth status échec",
    };
  }
}

export class GhCliGithubReadAdapter implements GithubReadPort {
  readonly transport: ToolTransport = "gh_cli";

  async getRepository(owner: string, name: string): Promise<GithubRepositoryView> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}`,
      "--jq",
      "{full_name,default_branch,description,html_url}",
    ]) as Record<string, string | null>;
    return {
      fullName: String(data.full_name),
      defaultBranch: String(data.default_branch ?? "main"),
      description: data.description ? redactSecrets(String(data.description)) : null,
      url: String(data.html_url ?? ""),
    };
  }

  async getBranch(
    owner: string,
    name: string,
    branch: string,
  ): Promise<GithubBranchView> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}/branches/${encodeURIComponent(branch)}`,
      "--jq",
      "{name,commit:{sha:.commit.sha}}",
    ]) as { name: string; commit: { sha: string } };
    return { name: data.name, sha: data.commit.sha };
  }

  async getCommit(
    owner: string,
    name: string,
    sha: string,
  ): Promise<GithubCommitView> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}/commits/${encodeURIComponent(sha)}`,
      "--jq",
      "{sha,commit:{message:.commit.message,author:.commit.author.name}}",
    ]) as {
      sha: string;
      commit: { message: string; author: string | null };
    };
    return {
      sha: data.sha,
      message: redactSecrets(data.commit.message).slice(0, 500),
      author: data.commit.author,
    };
  }

  async getPullRequest(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubPullRequestView> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}/pulls/${number}`,
      "--jq",
      "{number,title,state,html_url,head:{ref:.head.ref},base:{ref:.base.ref}}",
    ]) as {
      number: number;
      title: string;
      state: string;
      html_url: string;
      head: { ref: string };
      base: { ref: string };
    };
    return {
      number: data.number,
      title: redactSecrets(data.title),
      state: data.state,
      headRef: data.head.ref,
      baseRef: data.base.ref,
      url: data.html_url,
    };
  }

  async listPullRequestComments(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubCommentView[]> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}/pulls/${number}/comments?per_page=10`,
      "--jq",
      "[.[] | {id,user:.user.login,body}]",
    ]) as Array<{ id: number; user: string; body: string }>;
    return data.map((c) => ({
      id: c.id,
      user: c.user,
      bodyDigest: digestText(redactSecrets(c.body ?? "")),
    }));
  }

  async listChecks(
    owner: string,
    name: string,
    ref: string,
  ): Promise<GithubCheckView[]> {
    assertRepo(owner, name);
    const data = ghJson([
      "api",
      `repos/${owner}/${name}/commits/${encodeURIComponent(ref)}/check-runs?per_page=20`,
      "--jq",
      "[.check_runs[] | {name,status,conclusion}]",
    ]) as Array<{
      name: string;
      status: string;
      conclusion: string | null;
    }>;
    return data.map((c) => ({
      name: c.name,
      status: c.status,
      conclusion: c.conclusion,
    }));
  }
}

/** REST transport — only when GITHUB_TOKEN explicitly set (never echoed). */
export class RestGithubReadAdapter implements GithubReadPort {
  readonly transport: ToolTransport = "github_rest";
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  private async api(pathname: string): Promise<unknown> {
    const res = await fetch(`https://api.github.com${pathname}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${this.token}`,
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "sfia-studio-control-tower",
      },
      signal: AbortSignal.timeout(CT_TOOL_TIMEOUT_MS),
    });
    if (!res.ok) {
      throw Object.assign(
        new Error(`GitHub REST ${res.status}`),
        { toolErrorCode: "TRANSPORT_UNAVAILABLE" },
      );
    }
    return res.json();
  }

  async getRepository(owner: string, name: string): Promise<GithubRepositoryView> {
    assertRepo(owner, name);
    const data = (await this.api(`/repos/${owner}/${name}`)) as Record<
      string,
      string | null
    >;
    return {
      fullName: String(data.full_name),
      defaultBranch: String(data.default_branch ?? "main"),
      description: data.description
        ? redactSecrets(String(data.description))
        : null,
      url: String(data.html_url ?? ""),
    };
  }

  async getBranch(
    owner: string,
    name: string,
    branch: string,
  ): Promise<GithubBranchView> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/branches/${encodeURIComponent(branch)}`,
    )) as { name: string; commit: { sha: string } };
    return { name: data.name, sha: data.commit.sha };
  }

  async getCommit(
    owner: string,
    name: string,
    sha: string,
  ): Promise<GithubCommitView> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/commits/${encodeURIComponent(sha)}`,
    )) as {
      sha: string;
      commit: { message: string; author: { name?: string } | null };
    };
    return {
      sha: data.sha,
      message: redactSecrets(data.commit.message).slice(0, 500),
      author: data.commit.author?.name ?? null,
    };
  }

  async getPullRequest(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubPullRequestView> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/pulls/${number}`,
    )) as {
      number: number;
      title: string;
      state: string;
      html_url: string;
      head: { ref: string };
      base: { ref: string };
    };
    return {
      number: data.number,
      title: redactSecrets(data.title),
      state: data.state,
      headRef: data.head.ref,
      baseRef: data.base.ref,
      url: data.html_url,
    };
  }

  async listPullRequestComments(
    owner: string,
    name: string,
    number: number,
  ): Promise<GithubCommentView[]> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/pulls/${number}/comments?per_page=10`,
    )) as Array<{ id: number; user: { login: string }; body: string }>;
    return data.map((c) => ({
      id: c.id,
      user: c.user.login,
      bodyDigest: digestText(redactSecrets(c.body ?? "")),
    }));
  }

  async listChecks(
    owner: string,
    name: string,
    ref: string,
  ): Promise<GithubCheckView[]> {
    assertRepo(owner, name);
    const data = (await this.api(
      `/repos/${owner}/${name}/commits/${encodeURIComponent(ref)}/check-runs?per_page=20`,
    )) as {
      check_runs: Array<{
        name: string;
        status: string;
        conclusion: string | null;
      }>;
    };
    return (data.check_runs ?? []).map((c) => ({
      name: c.name,
      status: c.status,
      conclusion: c.conclusion,
    }));
  }
}

export type GithubTransportChoice =
  | { kind: "gh_cli"; adapter: GithubReadPort }
  | { kind: "github_rest"; adapter: GithubReadPort }
  | { kind: "unavailable"; reason: string };

/**
 * Resolve transport without silent fallback.
 * Prefer gh when authenticated; else REST if GITHUB_TOKEN set; else unavailable.
 */
export function resolveGithubReadTransport(): GithubTransportChoice {
  const forceRest = process.env.SFIA_GITHUB_TRANSPORT === "rest";
  const token = process.env.GITHUB_TOKEN?.trim() || process.env.GH_TOKEN?.trim();

  if (forceRest) {
    if (!token) {
      return {
        kind: "unavailable",
        reason: "SFIA_GITHUB_TRANSPORT=rest mais GITHUB_TOKEN absent",
      };
    }
    return { kind: "github_rest", adapter: new RestGithubReadAdapter(token) };
  }

  const gh = probeGhAuth();
  if (gh.available && gh.authenticated) {
    return { kind: "gh_cli", adapter: new GhCliGithubReadAdapter() };
  }

  if (token) {
    return { kind: "github_rest", adapter: new RestGithubReadAdapter(token) };
  }

  return {
    kind: "unavailable",
    reason: gh.reason ?? "GitHub transport indisponible",
  };
}

export function defaultGithubOwnerRepo(): { owner: string; name: string } {
  const [owner, name] = CT_GITHUB_REPO_ALLOWLIST[0].split("/");
  return { owner, name };
}

export function summarizeGithubPayload(data: unknown): string {
  const json = redactSecrets(JSON.stringify(data));
  return truncateText(json, CT_MAX_TOOL_RESULT_CHARS).text;
}
````

### Fichier : `projects/sfia-studio/app/lib/ops1/tools/toolRouter.ts`

````
/**
 * Tool Router — validate, policy, execute, redact, emit events.
 * No Cursor start tools. No shell. Deny by default.
 */
import { randomUUID } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";
import { createEventId } from "../ids";
import { openOps1Db, nowIsoWithOffset } from "../db";
import { resolveWorkspaceRootFromAppCwd } from "../allowlistEvaluation";
import type { SessionEvent, SessionEventType } from "../types";
import { GitLocalReadAdapter } from "./gitLocalReadAdapter";
import {
  defaultGithubOwnerRepo,
  resolveGithubReadTransport,
  summarizeGithubPayload,
  type GithubReadPort,
} from "./githubReadAdapter";
import { digestText, redactSecrets, truncateText } from "./redaction";
import {
  CONTROL_TOWER_TOOL_DEFINITIONS,
  CT_MAX_TOOL_RESULT_CHARS,
  CT_TOOL_TIMEOUT_MS,
  type ControlTowerToolName,
  type ToolCallRequest,
  type ToolCallResult,
  type ToolDefinition,
  type ToolErrorCode,
  type ToolExecutionEventDetail,
  type ToolTransport,
} from "./types";

const KNOWN = new Set(
  CONTROL_TOWER_TOOL_DEFINITIONS.map((t) => t.name),
);

function insertEvent(
  db: DatabaseSync,
  sessionId: string,
  type: SessionEventType,
  detail: ToolExecutionEventDetail | Record<string, unknown>,
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

function asString(v: unknown): string | undefined {
  return typeof v === "string" ? v : undefined;
}

function asInt(v: unknown, fallback: number): number {
  if (typeof v === "number" && Number.isFinite(v)) return Math.floor(v);
  if (typeof v === "string" && /^\d+$/.test(v)) return parseInt(v, 10);
  return fallback;
}

function failResult(
  toolCallId: string,
  name: string,
  errorCode: ToolErrorCode,
  message: string,
  started: number,
  transport: ToolTransport,
  status: "failed" | "denied" = "failed",
): ToolCallResult {
  return {
    ok: false,
    toolCallId,
    name,
    status,
    errorCode,
    message,
    usage: {
      durationMs: Date.now() - started,
      transport,
      truncated: false,
      bytes: 0,
    },
  };
}

export function listExposableTools(): ToolDefinition[] {
  return CONTROL_TOWER_TOOL_DEFINITIONS;
}

export function createToolCallId(): string {
  return `tool-${randomUUID()}`;
}

export async function routeToolCall(
  request: ToolCallRequest,
  options?: {
    db?: DatabaseSync;
    workspaceRoot?: string;
    github?: GithubReadPort | null;
    githubUnavailableReason?: string;
  },
): Promise<ToolCallResult> {
  const db = options?.db ?? openOps1Db();
  const started = Date.now();
  const name = request.name;

  insertEvent(db, request.sessionId, "TOOL_CALL_REQUESTED", {
    toolCallId: request.toolCallId,
    toolName: name,
    status: "requested",
  });

  // Hard deny any cursor_* tools in GPT loop — gate UI only
  if (String(name).startsWith("cursor_")) {
    const result = failResult(
      request.toolCallId,
      name,
      "EXECUTION_DENIED_GATE_REQUIRED",
      "EXECUTION_DENIED — MORRIS GATE REQUIRED",
      started,
      "none",
      "denied",
    );
    insertEvent(db, request.sessionId, "TOOL_CALL_DENIED", {
      toolCallId: request.toolCallId,
      toolName: name,
      status: "denied",
      errorCode: "EXECUTION_DENIED_GATE_REQUIRED",
      durationMs: result.usage.durationMs,
    });
    return result;
  }

  if (!KNOWN.has(name as ControlTowerToolName)) {
    const result = failResult(
      request.toolCallId,
      name,
      "TOOL_NOT_FOUND",
      `Outil inconnu: ${name}`,
      started,
      "none",
      "denied",
    );
    insertEvent(db, request.sessionId, "TOOL_CALL_DENIED", {
      toolCallId: request.toolCallId,
      toolName: name,
      status: "denied",
      errorCode: "TOOL_NOT_FOUND",
      durationMs: result.usage.durationMs,
    });
    return result;
  }

  insertEvent(db, request.sessionId, "TOOL_CALL_STARTED", {
    toolCallId: request.toolCallId,
    toolName: name,
    status: "started",
  });

  const workspaceRoot =
    options?.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();
  const git = new GitLocalReadAdapter(workspaceRoot);

  try {
    const withTimeout = async <T>(p: Promise<T>): Promise<T> => {
      return await Promise.race([
        p,
        new Promise<T>((_, reject) => {
          setTimeout(
            () =>
              reject(
                Object.assign(new Error("TIMEOUT"), {
                  toolErrorCode: "TIMEOUT",
                }),
              ),
            CT_TOOL_TIMEOUT_MS,
          );
        }),
      ]);
    };

    let data: unknown;
    let summary: string;
    let transport: ToolTransport = "internal_git";
    let truncated = false;

    switch (name as ControlTowerToolName) {
      case "git_local_get_status": {
        const r = git.getStatus();
        data = { porcelain: r.porcelain };
        summary = r.summary;
        break;
      }
      case "git_local_get_head": {
        const r = git.getHead();
        data = { sha: r.sha, branch: r.branch };
        summary = r.summary;
        break;
      }
      case "git_local_search_files": {
        const q = asString(request.arguments.query);
        if (!q) {
          return failResult(
            request.toolCallId,
            name,
            "INVALID_ARGUMENTS",
            "query requis",
            started,
            transport,
            "denied",
          );
        }
        const r = git.searchFiles(q, asInt(request.arguments.limit, 20));
        data = { paths: r.paths };
        summary = r.summary;
        break;
      }
      case "git_local_read_file": {
        const p = asString(request.arguments.path);
        if (!p) {
          return failResult(
            request.toolCallId,
            name,
            "INVALID_ARGUMENTS",
            "path requis",
            started,
            transport,
            "denied",
          );
        }
        const r = git.readFile(p, asInt(request.arguments.maxBytes, 32768));
        data = {
          path: r.path,
          content: r.content,
          truncated: r.truncated,
        };
        summary = r.summary;
        truncated = r.truncated;
        break;
      }
      case "git_local_get_diff": {
        const p = asString(request.arguments.path);
        const r = git.getDiff(p, asInt(request.arguments.maxBytes, 32768));
        data = { diff: r.diff, truncated: r.truncated };
        summary = r.summary;
        truncated = r.truncated;
        break;
      }
      case "git_local_list_worktrees": {
        const r = git.listWorktrees();
        data = { worktrees: r.worktrees };
        summary = r.summary;
        break;
      }
      case "git_local_get_log": {
        const r = git.getLog(asInt(request.arguments.limit, 5));
        data = { entries: r.entries };
        summary = r.summary;
        break;
      }
      default: {
        // GitHub tools
        let adapter = options?.github ?? null;
        let unavailable = options?.githubUnavailableReason;
        if (!adapter && options?.github === undefined) {
          const resolved = resolveGithubReadTransport();
          if (resolved.kind === "unavailable") {
            unavailable = resolved.reason;
          } else {
            adapter = resolved.adapter;
            transport = resolved.adapter.transport;
          }
        } else if (adapter) {
          transport = adapter.transport;
        }

        if (!adapter) {
          const reason = unavailable ?? "GitHub read indisponible";
          const result = failResult(
            request.toolCallId,
            name,
            "TRANSPORT_UNAVAILABLE",
            reason,
            started,
            "none",
          );
          insertEvent(db, request.sessionId, "TOOL_CALL_FAILED", {
            toolCallId: request.toolCallId,
            toolName: name,
            status: "failed",
            errorCode: "TRANSPORT_UNAVAILABLE",
            durationMs: result.usage.durationMs,
            summary: reason,
          });
          return result;
        }

        const defaults = defaultGithubOwnerRepo();
        const owner =
          asString(request.arguments.owner) ?? defaults.owner;
        // `name` means repository for get_repository; branch tools use defaults.repo
        const repoName =
          name === "github_get_repository"
            ? (asString(request.arguments.name) ?? defaults.name)
            : (asString(request.arguments.repo) ?? defaults.name);

        switch (name as ControlTowerToolName) {
          case "github_get_repository": {
            const r = await withTimeout(
              adapter.getRepository(owner, repoName),
            );
            data = r;
            summary = `repo ${r.fullName}`;
            break;
          }
          case "github_get_branch": {
            const branch = asString(request.arguments.name);
            if (!branch) {
              return failResult(
                request.toolCallId,
                name,
                "INVALID_ARGUMENTS",
                "name (branch) requis",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.getBranch(owner, repoName, branch),
            );
            data = r;
            summary = `branch ${r.name}@${r.sha.slice(0, 12)}`;
            break;
          }
          case "github_get_commit": {
            const sha = asString(request.arguments.sha);
            if (!sha) {
              return failResult(
                request.toolCallId,
                name,
                "INVALID_ARGUMENTS",
                "sha requis",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.getCommit(owner, repoName, sha),
            );
            data = r;
            summary = `commit ${r.sha.slice(0, 12)}`;
            break;
          }
          case "github_get_pull_request": {
            const number = asInt(request.arguments.number, 0);
            if (number < 1) {
              return failResult(
                request.toolCallId,
                name,
                "INVALID_ARGUMENTS",
                "number requis",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.getPullRequest(owner, repoName, number),
            );
            data = r;
            summary = `PR #${r.number} ${r.state}`;
            break;
          }
          case "github_list_checks": {
            const ref = asString(request.arguments.ref);
            if (!ref) {
              return failResult(
                request.toolCallId,
                name,
                "INVALID_ARGUMENTS",
                "ref requis",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.listChecks(owner, repoName, ref),
            );
            data = { checks: r };
            summary = `${r.length} check(s)`;
            break;
          }
          case "github_list_pr_comments": {
            const number = asInt(request.arguments.number, 0);
            if (number < 1) {
              return failResult(
                request.toolCallId,
                name,
                "INVALID_ARGUMENTS",
                "number requis",
                started,
                transport,
                "denied",
              );
            }
            const r = await withTimeout(
              adapter.listPullRequestComments(owner, repoName, number),
            );
            data = { comments: r };
            summary = `${r.length} comment(s)`;
            break;
          }
          default:
            return failResult(
              request.toolCallId,
              name,
              "TOOL_NOT_FOUND",
              "outil non routé",
              started,
              transport,
              "denied",
            );
        }
        // Cap JSON size
        const serialized = summarizeGithubPayload(data);
        if (serialized.length >= CT_MAX_TOOL_RESULT_CHARS) {
          truncated = true;
        }
        data = JSON.parse(serialized);
      }
    }

    const json = redactSecrets(JSON.stringify(data));
    const capped = truncateText(json, CT_MAX_TOOL_RESULT_CHARS);
    if (capped.truncated) truncated = true;
    if (json.length > CT_MAX_TOOL_RESULT_CHARS * 4) {
      const result = failResult(
        request.toolCallId,
        name,
        "RESULT_TOO_LARGE",
        "Résultat trop volumineux",
        started,
        transport,
      );
      insertEvent(db, request.sessionId, "TOOL_CALL_FAILED", {
        toolCallId: request.toolCallId,
        toolName: name,
        status: "failed",
        errorCode: "RESULT_TOO_LARGE",
        durationMs: result.usage.durationMs,
      });
      return result;
    }

    const parsed = JSON.parse(capped.text) as unknown;
    const result: ToolCallResult = {
      ok: true,
      toolCallId: request.toolCallId,
      name,
      status: "succeeded",
      data: parsed,
      summary,
      usage: {
        durationMs: Date.now() - started,
        transport,
        truncated,
        bytes: capped.text.length,
      },
    };
    insertEvent(db, request.sessionId, "TOOL_CALL_SUCCEEDED", {
      toolCallId: request.toolCallId,
      toolName: name,
      status: "succeeded",
      durationMs: result.usage.durationMs,
      resultDigest: digestText(summary),
      summary,
      source: {
        kind: String(name).startsWith("github_") ? "github" : "git_local",
        label: name,
        pathOrRef: null,
      },
    });
    return result;
  } catch (error) {
    const toolErrorCode =
      error &&
      typeof error === "object" &&
      "toolErrorCode" in error &&
      typeof (error as { toolErrorCode: unknown }).toolErrorCode === "string"
        ? ((error as { toolErrorCode: ToolErrorCode }).toolErrorCode)
        : "INTERNAL_ERROR";
    const message =
      error instanceof Error
        ? redactSecrets(error.message)
        : "Erreur outil interne";
    const status =
      toolErrorCode === "PATH_NOT_ALLOWED" ||
      toolErrorCode === "POLICY_DENIED" ||
      toolErrorCode === "REPOSITORY_NOT_ALLOWED" ||
      toolErrorCode === "INVALID_ARGUMENTS"
        ? "denied"
        : "failed";
    const result = failResult(
      request.toolCallId,
      name,
      toolErrorCode,
      message,
      started,
      String(name).startsWith("github_") ? "gh_cli" : "internal_git",
      status,
    );
    insertEvent(
      db,
      request.sessionId,
      status === "denied" ? "TOOL_CALL_DENIED" : "TOOL_CALL_FAILED",
      {
        toolCallId: request.toolCallId,
        toolName: name,
        status,
        errorCode: toolErrorCode,
        durationMs: result.usage.durationMs,
        summary: message,
      },
    );
    return result;
  }
}

export function toolResultForModel(result: ToolCallResult): string {
  if (result.ok) {
    return redactSecrets(
      JSON.stringify({
        ok: true,
        summary: result.summary,
        data: result.data,
        truncated: result.usage.truncated,
      }),
    );
  }
  return redactSecrets(
    JSON.stringify({
      ok: false,
      errorCode: result.errorCode,
      message: result.message,
    }),
  );
}
````

### Fichier : `projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts`

````
/**
 * Bounded OpenAI / fake tool-calling loop for Control Tower.
 */
import type { DatabaseSync } from "node:sqlite";
import { createEventId } from "../ids";
import { openOps1Db, nowIsoWithOffset } from "../db";
import type { SessionEventType } from "../types";
import {
  createToolCallId,
  listExposableTools,
  routeToolCall,
  toolResultForModel,
} from "../tools/toolRouter";
import {
  CT_MAX_TOOL_CALLS_PER_ROUND,
  CT_MAX_TOOL_ROUNDS,
} from "../tools/types";
import { redactSecrets } from "../tools/redaction";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderInputItem,
  ProviderUsage,
} from "./types";
import { messagesToInputItems } from "./types";

function insertEvent(
  db: DatabaseSync,
  sessionId: string,
  type: SessionEventType,
  detail: Record<string, unknown>,
): void {
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(
    createEventId(),
    sessionId,
    type,
    nowIsoWithOffset(),
    redactSecrets(JSON.stringify(detail)),
  );
}

function mergeUsage(
  a: ProviderUsage | null,
  b: ProviderUsage,
): ProviderUsage {
  if (!a) return b;
  const sum = (x: number | null, y: number | null) =>
    x == null && y == null ? null : (x ?? 0) + (y ?? 0);
  return {
    inputTokens: sum(a.inputTokens, b.inputTokens),
    outputTokens: sum(a.outputTokens, b.outputTokens),
    totalTokens: sum(a.totalTokens, b.totalTokens),
    model: b.model ?? a.model,
    providerResponseId: b.providerResponseId ?? a.providerResponseId,
  };
}

export interface ToolLoopResult {
  text: string;
  usage: ProviderUsage;
  toolRounds: number;
  toolCalls: number;
  limitReached: boolean;
}

export async function runToolCallingLoop(input: {
  sessionId: string;
  messages: ProviderChatMessage[];
  provider: ConversationProvider;
  enableTools?: boolean;
  db?: DatabaseSync;
}): Promise<ToolLoopResult> {
  const db = input.db ?? openOps1Db();
  const tools =
    input.enableTools === false ? [] : listExposableTools();
  const completeRound =
    input.provider.completeRound?.bind(input.provider) ??
    (async (args: {
      items: ProviderInputItem[];
      tools: typeof tools;
    }) => {
      const messages = args.items
        .filter(
          (i): i is Extract<ProviderInputItem, { type: "message" }> =>
            i.type === "message",
        )
        .map((m) => ({ role: m.role, content: m.content }));
      const completion = await input.provider.complete(messages);
      return {
        kind: "message" as const,
        text: completion.text,
        usage: completion.usage,
      };
    });

  let items: ProviderInputItem[] = messagesToInputItems(input.messages);
  let usage: ProviderUsage | null = null;
  let toolRounds = 0;
  let toolCalls = 0;
  let limitReached = false;

  if (tools.length > 0) {
    insertEvent(db, input.sessionId, "SOURCE_SEARCH_STARTED", {
      tools: tools.map((t) => t.name),
    });
  }

  for (let round = 0; round < CT_MAX_TOOL_ROUNDS; round += 1) {
    const result = await completeRound({ items, tools });
    usage = mergeUsage(usage, result.usage);

    if (result.kind === "message") {
      insertEvent(db, input.sessionId, "TOOL_LOOP_COMPLETED", {
        toolRounds,
        toolCalls,
        limitReached,
      });
      return {
        text: result.text,
        usage: usage!,
        toolRounds,
        toolCalls,
        limitReached,
      };
    }

    toolRounds += 1;
    const calls = result.toolCalls.slice(0, CT_MAX_TOOL_CALLS_PER_ROUND);
    const truncatedCalls = result.toolCalls.length > CT_MAX_TOOL_CALLS_PER_ROUND;
    if (truncatedCalls) {
      limitReached = true;
    }

    // Append function_call items then outputs sequentially (audit-friendly)
    for (const call of calls) {
      toolCalls += 1;
      items = [
        ...items,
        {
          type: "function_call",
          callId: call.callId,
          name: call.name,
          argumentsJson: call.argumentsJson,
        },
      ];

      let args: Record<string, unknown> = {};
      try {
        args = JSON.parse(call.argumentsJson || "{}") as Record<
          string,
          unknown
        >;
      } catch {
        args = {};
      }

      const routed = await routeToolCall(
        {
          toolCallId: call.callId || createToolCallId(),
          name: call.name,
          arguments: args,
          sessionId: input.sessionId,
        },
        { db },
      );

      items = [
        ...items,
        {
          type: "function_call_output",
          callId: call.callId,
          output: toolResultForModel(routed),
        },
      ];
    }

    if (round === CT_MAX_TOOL_ROUNDS - 1) {
      insertEvent(db, input.sessionId, "TOOL_LOOP_LIMIT_REACHED", {
        toolRounds,
        toolCalls,
      });
      // One last message-only attempt without tools
      const finalRound = await completeRound({ items, tools: [] });
      usage = mergeUsage(usage, finalRound.usage);
      if (finalRound.kind === "message") {
        return {
          text: finalRound.text,
          usage: usage!,
          toolRounds,
          toolCalls,
          limitReached: true,
        };
      }
      return {
        text: "[TOOL LOOP LIMIT] Analyse partielle — limite de boucle atteinte.",
        usage: usage!,
        toolRounds,
        toolCalls,
        limitReached: true,
      };
    }
  }

  insertEvent(db, input.sessionId, "TOOL_LOOP_LIMIT_REACHED", {
    toolRounds,
    toolCalls,
  });
  return {
    text: "[TOOL LOOP LIMIT] Aucune réponse texte finale.",
    usage: usage ?? {
      inputTokens: null,
      outputTokens: null,
      totalTokens: null,
      model: null,
      providerResponseId: null,
    },
    toolRounds,
    toolCalls,
    limitReached: true,
  };
}
````

### Fichier : `projects/sfia-studio/app/lib/ops1/reportReinjection.ts`

````
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
````

### Fichier : `projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts`

````
/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { GitLocalReadAdapter } from "@/lib/ops1/tools/gitLocalReadAdapter";
import { decideReadPath, normalizeRelativePath } from "@/lib/ops1/tools/pathPolicy";
import {
  createToolCallId,
  routeToolCall,
} from "@/lib/ops1/tools/toolRouter";
import { openOps1Db, resetOps1DbForTests } from "@/lib/ops1/db";
import { createOpenSession } from "@/lib/ops1/repository";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/ops1/allowlistEvaluation";
import { sendConversationMessage } from "@/lib/ops1/conversation/service";
import { FakeConversationProvider } from "@/lib/ops1/conversation/fakeProvider";
import { listToolRelatedEvents } from "@/lib/ops1/reportReinjection";

describe("Control Tower path policy", () => {
  it("denies traversal and absolute paths", () => {
    expect(normalizeRelativePath("../etc/passwd").ok).toBe(false);
    expect(normalizeRelativePath("/etc/passwd").ok).toBe(false);
    expect(decideReadPath(".env").allowed).toBe(false);
    expect(decideReadPath("method/foo.md").allowed).toBe(false);
    expect(
      decideReadPath("projects/campus360/README.md").allowed,
    ).toBe(true);
  });
});

describe("GitLocalReadAdapter + ToolRouter", () => {
  let prevExec: string | undefined;
  let tmp: string;

  beforeEach(() => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ct-tools-"));
    prevExec = process.env.OPS1_EXEC_ROOT;
    process.env.OPS1_EXEC_ROOT = tmp;
    resetOps1DbForTests();
    openOps1Db();
  });

  afterEach(() => {
    resetOps1DbForTests();
    if (prevExec === undefined) delete process.env.OPS1_EXEC_ROOT;
    else process.env.OPS1_EXEC_ROOT = prevExec;
    fs.rmSync(tmp, { recursive: true, force: true });
  });

  it("reads head and status from real workspace", () => {
    const root = resolveWorkspaceRootFromAppCwd();
    const git = new GitLocalReadAdapter(root);
    const head = git.getHead();
    expect(head.sha).toMatch(/^[0-9a-f]{40}$/);
    const status = git.getStatus();
    expect(typeof status.porcelain).toBe("string");
  });

  it("denies .env via router", async () => {
    const { session } = createOpenSession("fixture");
    const result = await routeToolCall({
      toolCallId: createToolCallId(),
      name: "git_local_read_file",
      arguments: { path: ".env" },
      sessionId: session.sessionId,
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errorCode).toBe("PATH_NOT_ALLOWED");
      expect(result.status).toBe("denied");
    }
  });

  it("denies unknown tool and cursor start", async () => {
    const { session } = createOpenSession("fixture");
    const unknown = await routeToolCall({
      toolCallId: createToolCallId(),
      name: "shell_exec",
      arguments: {},
      sessionId: session.sessionId,
    });
    expect(unknown.ok).toBe(false);
    const cursor = await routeToolCall({
      toolCallId: createToolCallId(),
      name: "cursor_start_execution",
      arguments: {},
      sessionId: session.sessionId,
    });
    expect(cursor.ok).toBe(false);
    if (!cursor.ok) {
      expect(cursor.errorCode).toBe("EXECUTION_DENIED_GATE_REQUIRED");
    }
  });

  it("succeeds git_local_get_head", async () => {
    const { session } = createOpenSession("fixture");
    const result = await routeToolCall({
      toolCallId: createToolCallId(),
      name: "git_local_get_head",
      arguments: {},
      sessionId: session.sessionId,
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect((result.data as { sha: string }).sha).toMatch(/^[0-9a-f]{40}$/);
    }
  });

  it("fixture conversation simulates git tool marker", async () => {
    const { session } = createOpenSession("fixture");
    const result = await sendConversationMessage({
      sessionId: session.sessionId,
      content: "État du repo __CT_TOOL_GIT_STATUS__",
    });
    expect(result.assistantTurn?.content).toMatch(/FIXTURE TOOL/);
    expect(result.toolCalls).toBeGreaterThan(0);
    const events = listToolRelatedEvents(session.sessionId);
    expect(events.some((e) => e.type === "TOOL_CALL_SUCCEEDED")).toBe(true);
  });

  it("live fake provider runs tool loop for git status marker", async () => {
    const { session } = createOpenSession("live");
    const provider = new FakeConversationProvider();
    const result = await sendConversationMessage({
      sessionId: session.sessionId,
      content: "Please inspect __CT_TOOL_GIT_STATUS__",
      provider,
    });
    expect(result.assistantError).toBeNull();
    expect(result.assistantTurn?.content).toMatch(/Analyse outils|TEST\/FAKE/);
    expect((result.toolCalls ?? 0) > 0 || (result.toolRounds ?? 0) > 0).toBe(
      true,
    );
  });
});
````

### Fichier : `projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts`

````
/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { openOps1Db, resetOps1DbForTests } from "@/lib/ops1/db";
import { createOpenSession } from "@/lib/ops1/repository";
import {
  buildReinjectionMessage,
  buildUnifiedTimeline,
} from "@/lib/ops1/reportReinjection";
import type { ExecutionReport } from "@/lib/ops1/types";

describe("report reinjection helpers", () => {
  let prevExec: string | undefined;
  let tmp: string;

  beforeEach(() => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ct-reinj-"));
    prevExec = process.env.OPS1_EXEC_ROOT;
    process.env.OPS1_EXEC_ROOT = tmp;
    resetOps1DbForTests();
    openOps1Db();
  });

  afterEach(() => {
    resetOps1DbForTests();
    if (prevExec === undefined) delete process.env.OPS1_EXEC_ROOT;
    else process.env.OPS1_EXEC_ROOT = prevExec;
    fs.rmSync(tmp, { recursive: true, force: true });
  });

  it("builds message without claiming implicit success", () => {
    const report = {
      reportId: "ops1-rpt-1",
      sessionId: "ops1-sess-1",
      contractId: "c1",
      contractHash: "abc",
      executionAttemptId: "att-1",
      adapterMode: "fixture",
      executionStatus: "SUCCEEDED",
      reportStatus: "COMPLETED",
      baseHeadSha: "0".repeat(40),
      startedAt: "t",
      finishedAt: "t",
      durationMs: 10,
      expectedPaths: [],
      filesCreated: [],
      filesModified: [],
      filesDeleted: [],
      filesOutOfContract: [],
      outOfContract: false,
      exitCode: 0,
      timedOut: false,
      worktreeRef: null,
      reserves: [],
      errors: [],
      incompletenessReason: null,
      metrics: {
        durationMs: 10,
        metricsIncomplete: false,
        metricsIncompleteReason: null,
        expectedPathCount: 0,
        touchedPathCount: 0,
        createCount: 0,
        modifyCount: 0,
        deleteCount: 0,
        outOfContract: false,
      },
      coverage: [],
      sealed: true,
      createdAt: "t",
      sealedAt: "t",
    } as ExecutionReport;
    const msg = buildReinjectionMessage(report);
    expect(msg).toContain("[OPS1_REPORT_REINJECTION]");
    expect(msg).toMatch(/≠ succès/i);
  });

  it("timeline defaults to DECISION_REQUIRED", () => {
    const { session } = createOpenSession("fixture");
    const tl = buildUnifiedTimeline(session.sessionId);
    expect(tl.terminal).toBe("DECISION_REQUIRED");
    expect(tl.items.length).toBeGreaterThan(0);
  });
});
````

### Fichier : `projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts`

````
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/control-tower-fast-track-evidence/screenshots",
);

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("Control Tower Fast Track — tools UI", () => {
  test("fixture git tool marker shows tool events", async ({ page }) => {
    await page.goto("/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();

    await page.getByTestId("ops1-create-mode-fixture").check();
    await page.getByTestId("ops1-create-session").click();
    await expect(page.getByTestId("ops1-session-id")).toBeVisible();

    await page
      .getByTestId("ops1-message-input")
      .fill("État projet __CT_TOOL_GIT_STATUS__");
    await page.getByTestId("ops1-send-message").click();

    await expect(page.getByTestId("ct-sources-panel")).toBeVisible();
    await expect(page.getByTestId("ct-tool-event").first()).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("ct-timeline-panel")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "01-fixture-git-tool.png"),
      fullPage: true,
    });
  });

  test("denied path tool is visible as denied/failed event", async ({
    page,
  }) => {
    await page.goto("/nouvelle-demande");
    await page.evaluate(() => window.sessionStorage.clear());
    await page.reload();
    await page.getByTestId("ops1-create-mode-fixture").check();
    await page.getByTestId("ops1-create-session").click();
    await page
      .getByTestId("ops1-message-input")
      .fill("Secret probe __CT_TOOL_DENIED_PATH__");
    await page.getByTestId("ops1-send-message").click();
    await expect(page.getByTestId("ops1-turn").last()).toContainText(
      "PATH_NOT_ALLOWED",
      { timeout: 15_000 },
    );
    await expect(page.getByTestId("ct-tool-event").first()).toBeVisible();
    await page.screenshot({
      path: path.join(screenshotDir, "02-tool-denied.png"),
      fullPage: true,
    });
  });
});
````

### Fichier : `projects/sfia-studio/73-control-tower-fast-track-delivery-report.md`

````
# SFIA Studio — Control Tower Fast Track — Delivery report

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `73-control-tower-fast-track-delivery-report.md` |
| **Branche** | `delivery/sfia-studio-control-tower-fast-track` (locale, **non poussée**) |
| **HEAD** | `32e5271842b9a344a7e292614675c27ea8ed941b` |
| **Gate** | `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` consommé |
| **Statut** | Implémenté — **prêt pour validation live Morris** |
| **Anti-claims** | Slice **non prouvé** live ; pas MVP ; pas production ; pas GitHub write |

---

## 1. Périmètre implémenté

### Lot A — Lecture outillée

- Types outils + policies path/repo
- `GitLocalReadAdapter` (read-only, argv arrays)
- `GitHubReadAdapter` (`gh` CLI + fallback REST si token ; pas de fallback silencieux)
- Tool Router + events
- Boucle tool calling OpenAI / Fake provider
- Simulation fixture via markers `__CT_TOOL_*__`
- UI panneau sources/outils

### Lot B — Cursor + réinjection

- Réutilisation OPS1 I3–I6 (gate UI, contract, worktree, CLI, report)
- `cursor_*` **refusé** dans la boucle GPT (`EXECUTION_DENIED_GATE_REQUIRED`)
- `generateReportAndReinject` : seal → message `[OPS1_REPORT_REINJECTION]` → analyse (tools off)
- `ops1GenerateExecutionReportAction` réinjecte par défaut

### Lot C — Timeline / sécu / tests

- Timeline unifiée (events + turns)
- Tests unitaires CT + E2E tools UI
- Captures runtime sous `.tmp-sfia-review/control-tower-fast-track-evidence/screenshots/`

---

## 2. Fichiers principaux

**Créés :** `lib/ops1/tools/**`, `conversation/toolLoop.ts`, `reportReinjection.ts`, tests CT, `e2e/control-tower-fast-track.spec.ts`, docs 66–73

**Modifiés :** `actions.ts`, `openaiProvider.ts`, `fakeProvider.ts`, `service.ts`, `types.ts`, `Ops1SessionScreen.tsx`, `executionOrchestrator.ts`, `README.md`

---

## 3. Tests

| Suite | Résultat |
|-------|----------|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (warnings résolus) |
| `npm test` | **128** pass |
| `npm run build` | PASS |
| E2E CT tools | **2/2** pass |
| E2E I1 + I6 (échantillon) | PASS |

---

## 4. Validation live — préparation

**GitHub :** `gh` authentifié (`mcleland147`) — transport `gh_cli` disponible.

**Scénario Morris (non exécuté par Cursor) :**

1. Démarrer Studio (`npm run dev` dans `app`, port 3020)
2. Session **live** GPT
3. Demander l’état du projet → outils Git local + GitHub
4. Proposer action Markdown Campus360 allowlistée
5. Gate Morris GO dans l’UI
6. Exécution Cursor (`OPS1_CURSOR_REAL=1` si réel)
7. Générer rapport → réinjection auto → analyse
8. Décider la suite

**Verdict préparation :** `CONTROL TOWER LIVE READY — MORRIS INTERACTION REQUIRED`

---

## 5. Réserves / dette

- Allowlist lecture CT distincte de l’allowlist write Campus360 OPS1
- Prompt Cursor I5 encore orienté Markdown Campus360 (hérité)
- Timeline UI = liste d’événements (pas redesign Figma)
- Validation live Morris **non réalisée** dans ce delivery
- Docs 66–72 toujours **non commités** avec le code (volontaire — pas de GO commit)

---

## 6. Décisions suivantes

1. Validation live Morris
2. `GO commit` / `GO push` / `GO PR` (fermés)
3. Éventuel élargissement allowlist lecture / prompt Cursor générique
````

## 11. Diffs utiles — fichiers modifiés


### Diff : `projects/sfia-studio/app/lib/ops1/types.ts`

````diff
diff --git a/projects/sfia-studio/app/lib/ops1/types.ts b/projects/sfia-studio/app/lib/ops1/types.ts
index a92e16d..2bf9026 100644
--- a/projects/sfia-studio/app/lib/ops1/types.ts
+++ b/projects/sfia-studio/app/lib/ops1/types.ts
@@ -110,7 +110,26 @@ export type SessionEventType =
   | "POST_REPORT_CHAT_RESUMED"
   | "SESSION_CLOSED"
   | "SESSION_CONTINUATION_OPENED"
-  | "CLOSED_SESSION_MUTATION_REFUSED";
+  | "CLOSED_SESSION_MUTATION_REFUSED"
+  | "SOURCE_SEARCH_STARTED"
+  | "TOOL_CALL_REQUESTED"
+  | "TOOL_CALL_STARTED"
+  | "TOOL_CALL_SUCCEEDED"
+  | "TOOL_CALL_FAILED"
+  | "TOOL_CALL_DENIED"
+  | "TOOL_LOOP_COMPLETED"
+  | "TOOL_LOOP_LIMIT_REACHED"
+  | "EXECUTION_PREPARING"
+  | "CURSOR_PROCESS_STARTED"
+  | "CURSOR_PROCESS_COMPLETED"
+  | "CURSOR_PROCESS_FAILED"
+  | "POSTCHECK_STARTED"
+  | "POSTCHECK_COMPLETED"
+  | "REPORT_GENERATION_STARTED"
+  | "REPORT_SEALED"
+  | "REINJECTION_STARTED"
+  | "REINJECTION_COMPLETED"
+  | "REINJECTION_FAILED";

 export interface SessionEvent {
   eventId: string;
````

### Diff : `projects/sfia-studio/app/lib/ops1/conversation/types.ts`

````diff
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/types.ts b/projects/sfia-studio/app/lib/ops1/conversation/types.ts
index ba366f1..aa673c4 100644
--- a/projects/sfia-studio/app/lib/ops1/conversation/types.ts
+++ b/projects/sfia-studio/app/lib/ops1/conversation/types.ts
@@ -1,5 +1,6 @@
 import type { ConversationMode, JournalTurn } from "../types";
 import { Ops1Error } from "../errors";
+import type { ToolDefinition } from "../tools/types";

 /** Provider-facing roles — domain roles mapped without SDK types. */
 export type ProviderChatRole = "user" | "assistant";
@@ -22,9 +23,47 @@ export interface ProviderCompletionResult {
   usage: ProviderUsage;
 }

+export interface ProviderToolCall {
+  callId: string;
+  name: string;
+  argumentsJson: string;
+}
+
+export type ProviderInputItem =
+  | { type: "message"; role: ProviderChatRole; content: string }
+  | {
+      type: "function_call";
+      callId: string;
+      name: string;
+      argumentsJson: string;
+    }
+  | {
+      type: "function_call_output";
+      callId: string;
+      output: string;
+    };
+
+export type ProviderRoundResult =
+  | {
+      kind: "message";
+      text: string;
+      usage: ProviderUsage;
+    }
+  | {
+      kind: "tool_calls";
+      toolCalls: ProviderToolCall[];
+      usage: ProviderUsage;
+    };
+
 export interface ConversationProvider {
   readonly providerId: string;
+  /** Legacy text-only completion (tools disabled). */
   complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult>;
+  /** Optional tool-aware round — default falls back to complete(). */
+  completeRound?(input: {
+    items: ProviderInputItem[];
+    tools: ToolDefinition[];
+  }): Promise<ProviderRoundResult>;
 }

 /**
@@ -87,3 +126,13 @@ export function assertJournalMatchesMode(
     }
   }
 }
+
+export function messagesToInputItems(
+  messages: ProviderChatMessage[],
+): ProviderInputItem[] {
+  return messages.map((m) => ({
+    type: "message" as const,
+    role: m.role,
+    content: m.content,
+  }));
+}
````

### Diff : `projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts`

````diff
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts b/projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
index 932124f..9dc5d11 100644
--- a/projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
+++ b/projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
@@ -1,9 +1,13 @@
 import OpenAI from "openai";
 import { Ops1Error } from "../errors";
+import type { ToolDefinition } from "../tools/types";
 import type {
   ConversationProvider,
   ProviderChatMessage,
   ProviderCompletionResult,
+  ProviderInputItem,
+  ProviderRoundResult,
+  ProviderToolCall,
 } from "./types";

 /**
@@ -23,25 +27,65 @@ export class OpenAIConversationProvider implements ConversationProvider {
   async complete(
     messages: ProviderChatMessage[],
   ): Promise<ProviderCompletionResult> {
+    const round = await this.completeRound({
+      items: messages.map((m) => ({
+        type: "message" as const,
+        role: m.role,
+        content: m.content,
+      })),
+      tools: [],
+    });
+    if (round.kind !== "message") {
+      throw new Ops1Error(
+        "PROVIDER",
+        "Réponse fournisseur inattendue (tool calls sans outils).",
+      );
+    }
+    return { text: round.text, usage: round.usage };
+  }
+
+  async completeRound(input: {
+    items: ProviderInputItem[];
+    tools: ToolDefinition[];
+  }): Promise<ProviderRoundResult> {
     try {
+      const tools =
+        input.tools.length === 0
+          ? []
+          : input.tools.map((t) => ({
+              type: "function" as const,
+              name: t.name,
+              description: t.description,
+              parameters: t.parameters,
+              strict: false,
+            }));
+
       const response = await this.client.responses.create({
         model: this.model,
-        input: messages.map((m) => ({
-          role: m.role,
-          content: m.content,
-        })),
-        // Explicitly no tools — conversation only.
-        tools: [],
+        input: input.items.map((item) => {
+          if (item.type === "message") {
+            return {
+              role: item.role,
+              content: item.content,
+            };
+          }
+          if (item.type === "function_call") {
+            return {
+              type: "function_call",
+              call_id: item.callId,
+              name: item.name,
+              arguments: item.argumentsJson,
+            };
+          }
+          return {
+            type: "function_call_output",
+            call_id: item.callId,
+            output: item.output,
+          };
+        }) as OpenAI.Responses.ResponseInput,
+        tools,
       });

-      const text = (response.output_text ?? "").trim();
-      if (!text) {
-        throw new Ops1Error(
-          "PROVIDER",
-          "Réponse fournisseur vide. Aucun tour assistant live n’a été créé.",
-        );
-      }
-
       const usage = response.usage;
       const inputTokens = usage?.input_tokens ?? null;
       const outputTokens = usage?.output_tokens ?? null;
@@ -50,17 +94,49 @@ export class OpenAIConversationProvider implements ConversationProvider {
         (inputTokens != null && outputTokens != null
           ? inputTokens + outputTokens
           : null);
-
-      return {
-        text,
-        usage: {
-          inputTokens,
-          outputTokens,
-          totalTokens,
-          model: response.model ?? this.model,
-          providerResponseId: response.id ?? null,
-        },
+      const providerUsage = {
+        inputTokens,
+        outputTokens,
+        totalTokens,
+        model: response.model ?? this.model,
+        providerResponseId: response.id ?? null,
       };
+
+      const toolCalls: ProviderToolCall[] = [];
+      const output = response.output ?? [];
+      for (const item of output) {
+        if (
+          item &&
+          typeof item === "object" &&
+          "type" in item &&
+          (item as { type: string }).type === "function_call"
+        ) {
+          const fc = item as {
+            call_id?: string;
+            name?: string;
+            arguments?: string;
+            id?: string;
+          };
+          toolCalls.push({
+            callId: fc.call_id ?? fc.id ?? `call-${toolCalls.length + 1}`,
+            name: fc.name ?? "",
+            argumentsJson: fc.arguments ?? "{}",
+          });
+        }
+      }
+
+      if (toolCalls.length > 0) {
+        return { kind: "tool_calls", toolCalls, usage: providerUsage };
+      }
+
+      const text = (response.output_text ?? "").trim();
+      if (!text) {
+        throw new Ops1Error(
+          "PROVIDER",
+          "Réponse fournisseur vide. Aucun tour assistant live n’a été créé.",
+        );
+      }
+      return { kind: "message", text, usage: providerUsage };
     } catch (error) {
       if (error instanceof Ops1Error) throw error;
       throw new Ops1Error(
````

### Diff : `projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts`

````diff
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts b/projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
index 4f4cb74..e4357ae 100644
--- a/projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
@@ -1,9 +1,17 @@
+import type { ToolDefinition } from "../tools/types";
 import type {
   ConversationProvider,
   ProviderChatMessage,
   ProviderCompletionResult,
+  ProviderInputItem,
+  ProviderRoundResult,
+  ProviderToolCall,
 } from "./types";

+export type FakeToolScriptRound =
+  | { kind: "message"; text: string }
+  | { kind: "tool_calls"; toolCalls: ProviderToolCall[] };
+
 /**
  * Deterministic fake provider for unit/E2E non-live tests.
  * Never presented as live GPT; replies are tagged TEST/FAKE.
@@ -11,12 +19,19 @@ import type {
 export class FakeConversationProvider implements ConversationProvider {
   readonly providerId = "fake-test";
   private callCount = 0;
+  private roundCount = 0;
   private readonly scripted?: string[];
   private readonly failOnCall?: number;
+  private readonly toolScript?: FakeToolScriptRound[];

-  constructor(options?: { scripted?: string[]; failOnCall?: number }) {
+  constructor(options?: {
+    scripted?: string[];
+    failOnCall?: number;
+    toolScript?: FakeToolScriptRound[];
+  }) {
     this.scripted = options?.scripted;
     this.failOnCall = options?.failOnCall;
+    this.toolScript = options?.toolScript;
   }

   async complete(
@@ -47,4 +62,110 @@ export class FakeConversationProvider implements ConversationProvider {
       },
     };
   }
+
+  async completeRound(input: {
+    items: ProviderInputItem[];
+    tools: ToolDefinition[];
+  }): Promise<ProviderRoundResult> {
+    this.roundCount += 1;
+    const usage = {
+      inputTokens: 10 * this.roundCount,
+      outputTokens: 5 * this.roundCount,
+      totalTokens: 15 * this.roundCount,
+      model: "fake-test-model",
+      providerResponseId: `fake-round-${this.roundCount}`,
+    };
+
+    if (this.toolScript && this.toolScript.length > 0) {
+      const step =
+        this.toolScript[
+          Math.min(this.roundCount - 1, this.toolScript.length - 1)
+        ];
+      if (step.kind === "tool_calls" && input.tools.length > 0) {
+        return { kind: "tool_calls", toolCalls: step.toolCalls, usage };
+      }
+      if (step.kind === "message") {
+        return { kind: "message", text: step.text, usage };
+      }
+    }
+
+    // Auto: if last user asks for git/github and tools available, emit one tool call once
+    const lastUser = [...input.items]
+      .reverse()
+      .find((i) => i.type === "message" && i.role === "user");
+    const content =
+      lastUser && lastUser.type === "message" ? lastUser.content : "";
+
+    if (
+      this.roundCount === 1 &&
+      input.tools.length > 0 &&
+      /__CT_TOOL_GIT_STATUS__/i.test(content)
+    ) {
+      return {
+        kind: "tool_calls",
+        toolCalls: [
+          {
+            callId: "fake-call-git-status",
+            name: "git_local_get_status",
+            argumentsJson: "{}",
+          },
+        ],
+        usage,
+      };
+    }
+    if (
+      this.roundCount === 1 &&
+      input.tools.length > 0 &&
+      /__CT_TOOL_GITHUB_REPO__/i.test(content)
+    ) {
+      return {
+        kind: "tool_calls",
+        toolCalls: [
+          {
+            callId: "fake-call-gh-repo",
+            name: "github_get_repository",
+            argumentsJson: "{}",
+          },
+        ],
+        usage,
+      };
+    }
+    if (
+      this.roundCount === 1 &&
+      input.tools.length > 0 &&
+      /__CT_TOOL_DENIED_PATH__/i.test(content)
+    ) {
+      return {
+        kind: "tool_calls",
+        toolCalls: [
+          {
+            callId: "fake-call-env",
+            name: "git_local_read_file",
+            argumentsJson: JSON.stringify({ path: ".env" }),
+          },
+        ],
+        usage,
+      };
+    }
+
+    // After tools or default message
+    const toolOutputs = input.items.filter(
+      (i) => i.type === "function_call_output",
+    );
+    if (toolOutputs.length > 0) {
+      return {
+        kind: "message",
+        text: `[TEST/FAKE · NON LIVE] Analyse outils (${toolOutputs.length}) — aucun succès implicite déclaré.`,
+        usage,
+      };
+    }
+
+    const messages = input.items
+      .filter((i): i is Extract<ProviderInputItem, { type: "message" }> =>
+        i.type === "message",
+      )
+      .map((m) => ({ role: m.role, content: m.content }));
+    const completion = await this.complete(messages);
+    return { kind: "message", text: completion.text, usage: completion.usage };
+  }
 }
````

### Diff : `projects/sfia-studio/app/lib/ops1/conversation/service.ts`

````diff
diff --git a/projects/sfia-studio/app/lib/ops1/conversation/service.ts b/projects/sfia-studio/app/lib/ops1/conversation/service.ts
index b88e051..4417b1c 100644
--- a/projects/sfia-studio/app/lib/ops1/conversation/service.ts
+++ b/projects/sfia-studio/app/lib/ops1/conversation/service.ts
@@ -19,6 +19,12 @@ import {
 } from "./types";
 import { resolveConversationProvider } from "./provider";
 import type { ConversationProvider } from "./types";
+import { runToolCallingLoop } from "./toolLoop";
+import {
+  createToolCallId,
+  routeToolCall,
+} from "../tools/toolRouter";
+import { openOps1Db } from "../db";

 export interface SendMessageResult {
   userTurn: JournalTurn;
@@ -27,6 +33,8 @@ export interface SendMessageResult {
   usage: ConversationUsageCounters | null;
   mode: ConversationMode;
   providerId: string | null;
+  toolRounds?: number;
+  toolCalls?: number;
 }

 function durationMs(startedAt: string, completedAt: string): number | null {
@@ -36,6 +44,60 @@ function durationMs(startedAt: string, completedAt: string): number | null {
   return Math.max(0, b - a);
 }

+/**
+ * Fixture path with optional deterministic tool simulation markers.
+ */
+async function runFixtureWithOptionalTools(
+  sessionId: string,
+  userContent: string,
+): Promise<{ reply: string; toolCalls: number }> {
+  const markers: Array<{ marker: RegExp; name: string; args: Record<string, unknown> }> = [
+    {
+      marker: /__CT_TOOL_GIT_STATUS__/i,
+      name: "git_local_get_status",
+      args: {},
+    },
+    {
+      marker: /__CT_TOOL_GIT_HEAD__/i,
+      name: "git_local_get_head",
+      args: {},
+    },
+    {
+      marker: /__CT_TOOL_GITHUB_REPO__/i,
+      name: "github_get_repository",
+      args: {},
+    },
+    {
+      marker: /__CT_TOOL_DENIED_PATH__/i,
+      name: "git_local_read_file",
+      args: { path: ".env" },
+    },
+  ];
+
+  const db = openOps1Db();
+  const parts: string[] = [buildFixtureAssistantReply(userContent)];
+  let toolCalls = 0;
+  for (const m of markers) {
+    if (!m.marker.test(userContent)) continue;
+    toolCalls += 1;
+    const result = await routeToolCall(
+      {
+        toolCallId: createToolCallId(),
+        name: m.name,
+        arguments: m.args,
+        sessionId,
+      },
+      { db },
+    );
+    parts.push(
+      result.ok
+        ? `[FIXTURE TOOL OK] ${m.name}: ${result.summary}`
+        : `[FIXTURE TOOL ${result.status.toUpperCase()}] ${m.name}: ${result.errorCode} — ${result.message}`,
+    );
+  }
+  return { reply: parts.join("\n"), toolCalls };
+}
+
 /**
  * Orchestrates fixture or live conversation turn using the session's
  * immutable conversationMode. Optional requestedMode is validated then ignored
@@ -47,6 +109,8 @@ export async function sendConversationMessage(input: {
   /** Optional client hint — must match session mode or be omitted. */
   requestedMode?: ConversationMode;
   provider?: ConversationProvider;
+  /** Disable tools even in live (tests). Default: tools enabled for live. */
+  enableTools?: boolean;
 }): Promise<SendMessageResult> {
   const session = getSession(input.sessionId);
   if (!session) {
@@ -81,8 +145,13 @@ export async function sendConversationMessage(input: {

     let assistantTurn: JournalTurn | null = null;
     let assistantError: string | null = null;
+    let toolCalls = 0;
     try {
-      const reply = buildFixtureAssistantReply(input.content);
+      const { reply, toolCalls: tc } = await runFixtureWithOptionalTools(
+        input.sessionId,
+        input.content,
+      );
+      toolCalls = tc;
       const appended = appendTurn({
         sessionId: input.sessionId,
         role: "assistant_fixture",
@@ -101,6 +170,8 @@ export async function sendConversationMessage(input: {
       usage: null,
       mode: "fixture",
       providerId: null,
+      toolRounds: toolCalls > 0 ? 1 : 0,
+      toolCalls,
     };
   }

@@ -130,12 +201,17 @@ export async function sendConversationMessage(input: {
   try {
     const history = listTurns(input.sessionId);
     const messages = buildProviderMessagesFromJournal(history, "live");
-    const completion = await provider.complete(messages);
+    const loop = await runToolCallingLoop({
+      sessionId: input.sessionId,
+      messages,
+      provider,
+      enableTools: input.enableTools !== false,
+    });

     const { turn: assistantTurn } = appendTurn({
       sessionId: input.sessionId,
       role: "assistant_live",
-      content: completion.text,
+      content: loop.text,
       fixture: false,
     });

@@ -143,11 +219,11 @@ export async function sendConversationMessage(input: {
       attemptId: attempt.attemptId,
       sessionId: input.sessionId,
       assistantTurnId: assistantTurn.turnId,
-      providerResponseId: completion.usage.providerResponseId,
-      model: completion.usage.model,
-      inputTokens: completion.usage.inputTokens,
-      outputTokens: completion.usage.outputTokens,
-      totalTokens: completion.usage.totalTokens,
+      providerResponseId: loop.usage.providerResponseId,
+      model: loop.usage.model,
+      inputTokens: loop.usage.inputTokens,
+      outputTokens: loop.usage.outputTokens,
+      totalTokens: loop.usage.totalTokens,
     });

     console.info(
@@ -155,6 +231,7 @@ export async function sendConversationMessage(input: {
       input.sessionId,
       attempt.attemptId,
       finalized.totalTokens,
+      `tools=${loop.toolCalls}`,
     );

     return {
@@ -175,6 +252,8 @@ export async function sendConversationMessage(input: {
       },
       mode: "live",
       providerId: provider.providerId,
+      toolRounds: loop.toolRounds,
+      toolCalls: loop.toolCalls,
     };
   } catch (error) {
     const safe = toSafeClientError(error);
````

### Diff : `projects/sfia-studio/app/lib/ops1/actions.ts`

````diff
diff --git a/projects/sfia-studio/app/lib/ops1/actions.ts b/projects/sfia-studio/app/lib/ops1/actions.ts
index 9084c3c..3b5e942 100644
--- a/projects/sfia-studio/app/lib/ops1/actions.ts
+++ b/projects/sfia-studio/app/lib/ops1/actions.ts
@@ -26,6 +26,11 @@ import {
   generateExecutionReport,
   getLatestReportForSession,
 } from "./reportService";
+import {
+  buildUnifiedTimeline,
+  generateReportAndReinject,
+  listToolRelatedEvents,
+} from "./reportReinjection";
 import {
   closeSession,
   openContinuation,
@@ -47,6 +52,7 @@ import {
 } from "./conversation/config";
 import { sendConversationMessage } from "./conversation/service";
 import { getRealCursorAvailability } from "./cursorExecutionAdapter";
+import { resolveGithubReadTransport, probeGhAuth } from "./tools/githubReadAdapter";
 import type {
   ActionAllowlistEvaluation,
   ActionCandidate,
@@ -64,6 +70,7 @@ import type {
   ProviderPresentation,
   SessionQualification,
   ExecutionReport,
+  SessionEvent,
 } from "./types";

 export type Ops1ActionResult<T> =
@@ -137,6 +144,8 @@ export async function ops1GetSessionAction(
     latestContractByAction: Record<string, ExecutionContract | null>;
     latestAttemptByContract: Record<string, ExecutionAttempt | null>;
     latestReport: ExecutionReport | null;
+    events: SessionEvent[];
+    timeline: ReturnType<typeof buildUnifiedTimeline>;
   }>
 > {
   try {
@@ -159,6 +168,8 @@ export async function ops1GetSessionAction(
         latestContractByAction: i5.latestContractByAction,
         latestAttemptByContract: i5.latestAttemptByContract,
         latestReport: getLatestReportForSession(id),
+        events: listToolRelatedEvents(id),
+        timeline: buildUnifiedTimeline(id),
       },
     };
   } catch (error) {
@@ -172,11 +183,30 @@ export async function ops1GetLiveConfigAction(): Promise<
     available: boolean;
     missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL">;
     testProvider: boolean;
+    github: {
+      available: boolean;
+      transport: string;
+      reason?: string;
+    };
   }>
 > {
   try {
     const status = getLiveConversationAvailability();
     const testProvider = isFakeConversationProviderForced();
+    const ghTransport = resolveGithubReadTransport();
+    const ghProbe = probeGhAuth();
+    const github =
+      ghTransport.kind === "unavailable"
+        ? {
+            available: false,
+            transport: "none",
+            reason: ghTransport.reason,
+          }
+        : {
+            available: true,
+            transport: ghTransport.kind,
+            reason: ghProbe.reason,
+          };
     if (status.available || testProvider) {
       return {
         ok: true,
@@ -184,12 +214,18 @@ export async function ops1GetLiveConfigAction(): Promise<
           available: true,
           missing: status.available ? [] : status.missing,
           testProvider,
+          github,
         },
       };
     }
     return {
       ok: true,
-      data: { available: false, missing: status.missing, testProvider: false },
+      data: {
+        available: false,
+        missing: status.missing,
+        testProvider: false,
+        github,
+      },
     };
   } catch (error) {
     return fail(error);
@@ -520,18 +556,46 @@ export async function ops1GenerateExecutionReportAction(input: {
   sessionId: string;
   contractId: string;
   executionAttemptId?: string;
-}): Promise<Ops1ActionResult<{ report: ExecutionReport }>> {
+  /** Default true — reinject + analyze. Set false for legacy report-only. */
+  reinject?: boolean;
+}): Promise<
+  Ops1ActionResult<{
+    report: ExecutionReport;
+    reinjectionTurn?: JournalTurn | null;
+    analysisTurn?: JournalTurn | null;
+    analysisError?: string | null;
+    reinjectionId?: string;
+  }>
+> {
   try {
     const sessionId = assertSessionId(input.sessionId);
     if (typeof input.contractId !== "string" || !input.contractId) {
       throw new Ops1Error("VALIDATION", "contractId invalide.");
     }
-    const { report } = generateExecutionReport({
+    if (input.reinject === false) {
+      const { report } = generateExecutionReport({
+        sessionId,
+        contractId: input.contractId,
+        executionAttemptId: input.executionAttemptId,
+      });
+      return { ok: true, data: { report } };
+    }
+    const result = await generateReportAndReinject({
       sessionId,
       contractId: input.contractId,
       executionAttemptId: input.executionAttemptId,
+      analyze: true,
     });
-    return { ok: true, data: { report } };
+    return {
+      ok: true,
+      data: {
+        report: result.report,
+        reinjectionTurn: result.reinjectionTurn,
+        analysisTurn: result.analysisTurn,
+        analysisError: result.analysisError,
+        reinjectionId: result.reinjectionId,
+      },
+    };
   } catch (error) {
     return fail(error);
   }
````

### Diff : `projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts`

````diff
diff --git a/projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts b/projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
index ba85a26..5f89cf6 100644
--- a/projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
+++ b/projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
@@ -121,6 +121,15 @@ export async function runExecutionAttempt(input: {
     input.workspaceRoot ?? resolveWorkspaceRootFromAppCwd();
   const events: SessionEvent[] = [];

+  events.push(
+    insertEvent(
+      db,
+      input.sessionId,
+      "EXECUTION_PREPARING",
+      `prepare contract=${input.contractId}`,
+    ),
+  );
+
   events.push(
     insertEvent(
       db,
````

### Diff : `projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx`

````diff
diff --git a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
index 23608f4..d822a3b 100644
--- a/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
+++ b/projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
@@ -213,6 +213,17 @@ export function Ops1SessionScreen({
   const [latestReport, setLatestReport] = useState<ExecutionReport | null>(
     null,
   );
+  const [sessionEvents, setSessionEvents] = useState<
+    Array<{ eventId: string; type: string; createdAt: string; detail: string }>
+  >([]);
+  const [timelineTerminal, setTimelineTerminal] = useState<string>(
+    "DECISION_REQUIRED",
+  );
+  const [githubStatus, setGithubStatus] = useState<{
+    available: boolean;
+    transport: string;
+    reason?: string;
+  } | null>(null);
   const [i6Error, setI6Error] = useState<string | null>(null);
   const [resumeSummary, setResumeSummary] = useState<string | null>(null);
   const [gateMicrocopy, setGateMicrocopy] = useState<string | null>(null);
@@ -254,6 +265,13 @@ export function Ops1SessionScreen({
       latestContractByAction?: Record<string, ExecutionContract | null>;
       latestAttemptByContract?: Record<string, ExecutionAttempt | null>;
       latestReport?: ExecutionReport | null;
+      events?: Array<{
+        eventId: string;
+        type: string;
+        createdAt: string;
+        detail: string;
+      }>;
+      timeline?: { terminal: string };
     }) => {
       setQualification(data.qualification);
       setCandidates(data.candidates);
@@ -262,6 +280,8 @@ export function Ops1SessionScreen({
       setContractByAction(data.latestContractByAction ?? {});
       setAttemptByContract(data.latestAttemptByContract ?? {});
       setLatestReport(data.latestReport ?? null);
+      setSessionEvents(data.events ?? []);
+      setTimelineTerminal(data.timeline?.terminal ?? "DECISION_REQUIRED");
       const latest = data.candidates[data.candidates.length - 1];
       if (latest) {
         setRefineDraft({
@@ -289,6 +309,8 @@ export function Ops1SessionScreen({
         setContractByAction({});
         setAttemptByContract({});
         setLatestReport(null);
+        setSessionEvents([]);
+        setTimelineTerminal("DECISION_REQUIRED");
         setResumeSummary(null);
         setPhase("idle");
         if (typeof window !== "undefined") {
@@ -314,6 +336,7 @@ export function Ops1SessionScreen({
         setLiveAvailable(cfg.data.available);
         setLiveMissing(cfg.data.missing);
         setTestProvider(cfg.data.testProvider);
+        setGithubStatus(cfg.data.github ?? null);
       }
       const cursor = await ops1GetRealCursorAvailabilityAction();
       if (!cancelled && cursor.ok) {
@@ -1026,6 +1049,15 @@ export function Ops1SessionScreen({
                         ) : null}
                       </div>
                       <p className={styles.turnContent}>{turn.content}</p>
+                      {turn.content.startsWith("[OPS1_REPORT_REINJECTION]") ? (
+                        <p
+                          className={styles.hint}
+                          data-testid="ct-reinjection-turn"
+                        >
+                          Rapport réinjecté automatiquement — pas un succès
+                          implicite.
+                        </p>
+                      ) : null}
                     </li>
                   ))}
                 </ol>
@@ -1124,6 +1156,69 @@ export function Ops1SessionScreen({
             </form>
           </section>

+          <section
+            className={styles.panel}
+            data-testid="ct-sources-panel"
+            aria-labelledby="ct-sources-title"
+          >
+            <h2 id="ct-sources-title" className={styles.panelTitle}>
+              Sources & outils (Control Tower)
+            </h2>
+            <p className={styles.muted} data-testid="ct-github-status">
+              GitHub read :{" "}
+              {githubStatus
+                ? githubStatus.available
+                  ? `disponible (${githubStatus.transport})`
+                  : `indisponible — ${githubStatus.reason ?? "auth requise"}`
+                : "—"}
+            </p>
+            <p className={styles.hint}>
+              Markers fixture : __CT_TOOL_GIT_STATUS__ · __CT_TOOL_GITHUB_REPO__
+              · __CT_TOOL_DENIED_PATH__
+            </p>
+            <ul data-testid="ct-tool-events">
+              {sessionEvents
+                .filter(
+                  (e) =>
+                    e.type.startsWith("TOOL_") ||
+                    e.type === "SOURCE_SEARCH_STARTED",
+                )
+                .slice(-20)
+                .map((e) => (
+                  <li key={e.eventId} data-testid="ct-tool-event">
+                    <strong>{e.type}</strong> · {e.createdAt} ·{" "}
+                    {e.detail.slice(0, 160)}
+                  </li>
+                ))}
+            </ul>
+            {sessionEvents.filter((e) => e.type.startsWith("TOOL_")).length ===
+            0 ? (
+              <p className={styles.muted} data-testid="ct-tool-events-empty">
+                Aucun appel d’outil pour cette session.
+              </p>
+            ) : null}
+          </section>
+
+          <section
+            className={styles.panel}
+            data-testid="ct-timeline-panel"
+            aria-labelledby="ct-timeline-title"
+          >
+            <h2 id="ct-timeline-title" className={styles.panelTitle}>
+              Timeline unifiée
+            </h2>
+            <p data-testid="ct-timeline-terminal">
+              État terminal : {timelineTerminal}
+            </p>
+            <ol data-testid="ct-timeline-list">
+              {sessionEvents.slice(-30).map((e) => (
+                <li key={e.eventId} data-testid="ct-timeline-item">
+                  {e.createdAt} — {e.type}
+                </li>
+              ))}
+            </ol>
+          </section>
+
           <section
             className={`${styles.panel} ${styles.i3Panel}`}
             data-testid="ops1-i3-controls"
````

### Diff : `projects/sfia-studio/README.md`

````diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index ccd03ee..cb1b24b 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,7 +4,7 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44`) ; backlog OPS1 **validé avec réserves** (`60`–`62` sur `main`) ; Intégration / DevOps OPS1 **validé avec réserves** (`63`–`65` ; `G-OPS1-DEVOPS-VAL` consommé) ; `.sfia-exec/**` **ignoré** ; Node/scanner/suites/CI **ouverts ou différés** ; live / delivery / code / MVP / production **fermés** |
+| **Statut** | `control-tower-fast-track-delivery-local` — exécution VS **implémentée** sur branche locale `delivery/sfia-studio-control-tower-fast-track` ; **pas de commit/push/PR** ; validation live Morris **requise** ; MVP / production **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
@@ -13,15 +13,17 @@
 | **Profil SFIA** | Critical |
 | **Branche delivery** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
 | **Branche architecture** | historique — MERGED #221 |
-| **Base canonique** | `origin/main` @ `b686eb1394bb4d550eeff1dd64669b3d405579ad` |
+| **Base canonique** | `origin/main` @ `32e5271842b9a344a7e292614675c27ea8ed941b` (I6 mergé ; cadrage Control Tower local) |
 | **Chemin** | `projects/sfia-studio/` |
-| **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
+| **AF-Option C** | **REFORMULÉE ET VALIDÉE** — Studio = cockpit + façade d’orchestration ; policies / exécuteurs logiquement séparés derrière Studio |
+| **Cadrage Control Tower** | `66`–`69` — **validé** (`GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER`) |
+| **Fast Track CT VS** | `70`–`73` — delivery **local** ; `GO EXÉCUTION…` consommé ; live Morris **ouvert** ; commit/push/PR **fermés** |
 | **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
 | **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Revue PR Draft DevOps / merge éventuel / `GO IMPLEMENT OPS1 CI` / `GO DELIVERY I1` / gate Node — **non automatiques** |
+| **Prochaine décision** | Validation live Morris · puis éventuels `GO commit` / `GO push` / `GO PR` — **non automatiques** |

 ---

@@ -147,7 +149,7 @@ Pré-cadrage
   → décision Morris : ouverture éventuelle conception fonctionnelle OPS1 (`G-OPS1-FUNC-DESIGN`) — **non ouverte**
 ```

-Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrage OPS1 **validé avec réserves** et **canonique sur main** (PR #235 / `b686eb1`). **POC maintenu**. MVP / production / industrialisation / delivery OPS1 **non ouverts**. Trajectoire I1–I7 validée au niveau cadrage uniquement. Prochaine décision : ouverture éventuelle de `G-OPS1-FUNC-DESIGN`.
+Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrage OPS1 **validé avec réserves** (PR #235 / `b686eb1`). I6 mergé (`#253` / `32e5271`). I7 clôturé avec **OPS1-I7-R01**. Cadrage Control Tower **validé** (`66`–`69`). Fast Track vertical slice : **`plan-open`** (`70`–`72` ; Option C hybride). **Code non modifié** dans la préparation. MVP / production / industrialisation **fermés**. Prochaine décision : `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE`.

 ---

@@ -374,8 +376,10 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 4. Intégration / DevOps OPS1 — docs [`63`](./63-ops1-integration-devops-foundation.md)–[`65`](./65-ops1-integration-devops-decision-pack.md) **validés avec réserves** · `G-OPS1-DEVOPS-VAL` consommé (2026-07-20 21:27:26 CEST) · 24 décisions · `.sfia-exec/**` ignoré · **non intégrés sur `main` tant que PR non mergée**.
 5. Delivery / code / CI implémentée / live GPT-Cursor / MVP / production — **FERMÉS** (GO Morris distincts requis ; non ouverts automatiquement).
 6. Réserves maintenues : Node non figé · scanner différé · suites intégration différées · CI Studio différée (`GO IMPLEMENT OPS1 CI`) · worktree≠sandbox · stack/fournisseur · FD-CAND-15 · UX-R01…R04 · live fermés.
+7. **Cadrage Control Tower** — docs [`66`](./66-control-tower-product-framing.md)–[`69`](./69-control-tower-options-and-decision-pack.md) — **validé** · `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` consommé · AF-Option C reformulée **validée** · Option C hybride **retenue**.
+8. **Fast Track Control Tower VS** — docs [`70`](./70-control-tower-fast-track-architecture-and-contract.md)–[`72`](./72-control-tower-fast-track-decision-pack.md) — **`plan-open`** · `GO FAST TRACK CONTROL TOWER VERTICAL SLICE` consommé · gate suivante : `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` · **aucun code** avant ce GO.

-**Verdict documentaire courant :** `SFIA STUDIO OPS1 INTEGRATION DEVOPS VALIDATED WITH RESERVATIONS`
+**Verdict documentaire courant :** `SFIA STUDIO CONTROL TOWER FAST TRACK PLAN OPEN — AWAITING EXECUTION GO`


 ---
@@ -393,7 +397,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Scénario OPS1 | Docs `54`–`56` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) ; FD-CAND-13/20/26 levées (OPS1) ; FD-CAND-15 maintenue ; UX-R01…R04 maintenues |
 | Architecture technique OPS1 | Docs `57`–`59` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-TECH-ARCH-VAL` — 2026-07-20 19:17:11 CEST) ; 26 CAND validées ; stack non finalisée |
 | Backlog OPS1 | Docs `60`–`62` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-BACKLOG-VAL` — 2026-07-20 20:52:00 CEST) ; intégrés sur `main` (PR #244) ; 17 epics / 41 stories / 20 décisions |
-| Intégration / DevOps OPS1 | Docs `63`–`65` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-DEVOPS-VAL` — 2026-07-20 21:27:26 CEST) ; 24 CAND ; `.sfia-exec/**` ignoré ; CI/delivery/live/MVP **fermés** ; **pas encore** sur `main` avant merge PR |
+| Intégration / DevOps OPS1 | Docs `63`–`65` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-DEVOPS-VAL` — 2026-07-20 21:27:26 CEST) ; 24 CAND ; `.sfia-exec/**` ignoré ; CI/delivery/live/MVP **fermés** |
+| Cadrage Control Tower | Docs `66`–`69` — **validé** (`GO VALIDATION CADRAGE…`) |
+| Fast Track CT VS | Docs `70`–`72` — **`plan-open`** ; exécution code fermée jusqu’à `GO EXÉCUTION…` |
 | Handoff | `sfia/review-handoff` |

 ---
@@ -477,4 +483,22 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [64-ops1-local-controls-ci-and-evidence-contract.md](./64-ops1-local-controls-ci-and-evidence-contract.md) | Matrice contrôles / commandes / preuves — **VALIDATED WITH RESERVATIONS** |
 | [65-ops1-integration-devops-decision-pack.md](./65-ops1-integration-devops-decision-pack.md) | `OPS1-DEVOPS-CAND-01`…`24` — **VALIDATED WITH RESERVATIONS** (2026-07-20 21:27:26 CEST) |

-*SFIA Studio — POC maintenu — Intégration/DevOps VALIDATED WITH RESERVATIONS — non encore intégré sur `main` tant que PR non mergée — CI / delivery / live / MVP non ouverts.*
+### Cadrage produit Control Tower (validé)
+
+| Document | Rôle |
+|----------|------|
+| [66-control-tower-product-framing.md](./66-control-tower-product-framing.md) | Contexte, problème, vision, principes, acteurs — **validé** |
+| [67-control-tower-capabilities-and-user-journeys.md](./67-control-tower-capabilities-and-user-journeys.md) | Capacités, UX fonctionnelle, parcours P1–P12 — **validé** |
+| [68-control-tower-scope-success-criteria-and-risks.md](./68-control-tower-scope-success-criteria-and-risks.md) | Produit / POC / MVP candidats, critères, risques — **validé** |
+| [69-control-tower-options-and-decision-pack.md](./69-control-tower-options-and-decision-pack.md) | Options A–D ; Option C **retenue** — **validé** |
+
+### Fast Track Control Tower Vertical Slice (`plan-open`)
+
+| Document | Rôle |
+|----------|------|
+| [70-control-tower-fast-track-architecture-and-contract.md](./70-control-tower-fast-track-architecture-and-contract.md) | Archi minimale, inventaire OPS1, outils, adapters, UX — **`plan-open`** |
+| [71-control-tower-fast-track-backlog-and-delivery.md](./71-control-tower-fast-track-backlog-and-delivery.md) | FT-01…12, lots A/B/C, chemin critique — **`plan-open`** |
+| [72-control-tower-fast-track-decision-pack.md](./72-control-tower-fast-track-decision-pack.md) | D1–D8, risques, gate exécution — **plan validé pour exécution** |
+| [73-control-tower-fast-track-delivery-report.md](./73-control-tower-fast-track-delivery-report.md) | Rapport delivery local — **READY FOR MORRIS LIVE VALIDATION** |
+
+*SFIA Studio — Control Tower delivery **local** (`70`–`73`) — live Morris requis — commit/push/PR/MVP/production **fermés**.*
````

## 12. Contrôles

```
 M projects/sfia-studio/README.md
 M projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
 M projects/sfia-studio/app/lib/ops1/actions.ts
 M projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/service.ts
 M projects/sfia-studio/app/lib/ops1/conversation/types.ts
 M projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
 M projects/sfia-studio/app/lib/ops1/types.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/66-control-tower-product-framing.md
?? projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
?? projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
?? projects/sfia-studio/69-control-tower-options-and-decision-pack.md
?? projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md
?? projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md
?? projects/sfia-studio/72-control-tower-fast-track-decision-pack.md
?? projects/sfia-studio/73-control-tower-fast-track-delivery-report.md
?? projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts
?? projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts
?? projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts
?? projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts
?? projects/sfia-studio/app/lib/ops1/reportReinjection.ts
?? projects/sfia-studio/app/lib/ops1/tools/
---
---
 .../app/features/ops1/Ops1SessionScreen.tsx        |  95 ++++++++++++++++
 projects/sfia-studio/app/lib/ops1/actions.ts       |  72 +++++++++++-
 .../app/lib/ops1/conversation/fakeProvider.ts      | 123 +++++++++++++++++++-
 .../app/lib/ops1/conversation/openaiProvider.ts    | 124 +++++++++++++++++----
 .../app/lib/ops1/conversation/service.ts           |  95 ++++++++++++++--
 .../sfia-studio/app/lib/ops1/conversation/types.ts |  49 ++++++++
 .../app/lib/ops1/executionOrchestrator.ts          |   9 ++
 projects/sfia-studio/app/lib/ops1/types.ts         |  21 +++-
 8 files changed, 550 insertions(+), 38 deletions(-)
--- campus360 ---
```

## 13. État Git final

- Branche `delivery/sfia-studio-control-tower-fast-track` @ `32e5271842b9a344a7e292614675c27ea8ed941b` (inchangé — **aucun commit projet**)
- Working tree : code + docs non commités
- Aucun push delivery

## 14. Verdict

**CONTROL TOWER VERTICAL SLICE IMPLEMENTED — READY FOR MORRIS LIVE VALIDATION**

Également : **CONTROL TOWER LIVE READY — MORRIS INTERACTION REQUIRED**

ChatGPT : `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`
