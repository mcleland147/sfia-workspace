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
