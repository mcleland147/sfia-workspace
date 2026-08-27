/**
 * Tool Router — validate, policy, execute, redact, emit events.
 * No Cursor start tools. No shell. Deny by default.
 * Domain-agnostic: EventSink injectable (no OPS1 DB dependency).
 */
import { randomUUID } from "node:crypto";
import type { EventSink } from "../observability/eventSink";
import { noopEventSink } from "../observability/eventSink";
import type { TechnicalEventType } from "../observability/types";
import { resolveWorkspaceRootFromAppCwd } from "../repository/workspaceRoot";
import { GitLocalReadAdapter } from "../repository/gitLocalReadAdapter";
import {
  defaultGithubOwnerRepo,
  resolveGithubReadTransport,
  summarizeGithubPayload,
  type GithubReadPort,
} from "../repository/githubReadAdapter";
import { digestText, redactSecrets, truncateText } from "../security/redaction";
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

const OPS1_TO_TECHNICAL: Record<string, TechnicalEventType> = {
  TOOL_CALL_REQUESTED: "TOOL_REQUESTED",
  TOOL_CALL_STARTED: "TOOL_STARTED",
  TOOL_CALL_SUCCEEDED: "TOOL_SUCCEEDED",
  TOOL_CALL_DENIED: "TOOL_DENIED",
  TOOL_CALL_FAILED: "TOOL_FAILED",
};

const LARGE_STRING_KEYS = new Set([
  "content",
  "diff",
  "porcelain",
  "text",
  "snippet",
  "summary",
]);

function emitToolEvent(
  sink: EventSink,
  correlationId: string,
  ops1Type: string,
  detail: ToolExecutionEventDetail | Record<string, unknown>,
): void {
  const type = OPS1_TO_TECHNICAL[ops1Type] ?? "TOOL_FAILED";
  sink.emit({
    type,
    correlationId,
    detail: JSON.parse(redactSecrets(JSON.stringify(detail))) as Record<
      string,
      unknown
    >,
  });
}

function asString(v: unknown): string | undefined {
  return typeof v === "string" ? v : undefined;
}

function asInt(v: unknown, fallback: number): number {
  if (typeof v === "number" && Number.isFinite(v)) return Math.floor(v);
  if (typeof v === "string" && /^\d+$/.test(v)) return parseInt(v, 10);
  return fallback;
}

function asOptionalPositiveInt(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v) && v >= 1) {
    return Math.floor(v);
  }
  if (typeof v === "string" && /^\d+$/.test(v)) {
    const n = parseInt(v, 10);
    return n >= 1 ? n : undefined;
  }
  return undefined;
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

/**
 * Cap large string fields BEFORE JSON serialization so the payload is always
 * valid JSON. Never mid-truncate a serialized JSON string then re-parse it.
 */
export function prepareToolDataForModel(
  data: unknown,
  maxChars = CT_MAX_TOOL_RESULT_CHARS,
): { data: unknown; truncated: boolean; json: string } {
  let truncated = false;

  const shrinkString = (s: string, budget: number): string => {
    const { text, truncated: t } = truncateText(s, Math.max(64, budget));
    if (t) truncated = true;
    return text;
  };

  const walk = (value: unknown, budget: number): unknown => {
    if (typeof value === "string") {
      return shrinkString(value, budget);
    }
    if (Array.isArray(value)) {
      const out: unknown[] = [];
      let remaining = budget;
      for (const item of value) {
        if (remaining < 32) {
          truncated = true;
          break;
        }
        const next = walk(item, remaining);
        const cost = JSON.stringify(next).length + 1;
        out.push(next);
        remaining -= cost;
      }
      if (out.length < value.length) truncated = true;
      return out;
    }
    if (value && typeof value === "object") {
      const obj = value as Record<string, unknown>;
      const keys = Object.keys(obj);
      const prioritized = [
        ...keys.filter((k) => LARGE_STRING_KEYS.has(k)),
        ...keys.filter((k) => !LARGE_STRING_KEYS.has(k)),
      ];
      const out: Record<string, unknown> = {};
      let remaining = budget;
      for (const key of prioritized) {
        if (remaining < 32) {
          truncated = true;
          break;
        }
        const next = walk(obj[key], remaining);
        out[key] = next;
        remaining -= JSON.stringify({ [key]: next }).length;
      }
      return out;
    }
    return value;
  };

  let current = walk(data, Math.max(256, maxChars - 128));
  let json = redactSecrets(JSON.stringify(current));

  // Hard shrink content-like fields if still over budget (still valid JSON).
  let guard = 0;
  while (json.length > maxChars && guard < 8) {
    guard += 1;
    truncated = true;
    if (current && typeof current === "object" && !Array.isArray(current)) {
      const obj = { ...(current as Record<string, unknown>) };
      for (const key of LARGE_STRING_KEYS) {
        if (typeof obj[key] === "string") {
          const budget = Math.max(
            64,
            Math.floor((maxChars - 200) / 2),
          );
          obj[key] = shrinkString(obj[key] as string, budget);
        }
      }
      current = obj;
    } else if (typeof current === "string") {
      current = shrinkString(current, Math.max(64, maxChars - 64));
    } else {
      current = {
        note: "payload capped",
        digest: digestText(json),
      };
    }
    json = redactSecrets(JSON.stringify(current));
  }

  if (json.length > maxChars) {
    // Last resort: replace with a tiny valid object (never invalid JSON).
    truncated = true;
    current = {
      note: "RESULT_CAPPED",
      digest: digestText(json),
    };
    json = JSON.stringify(current);
  }

  return { data: current, truncated, json };
}

export function resolveToolPathOrRef(
  name: string,
  args: Record<string, unknown>,
  data: unknown,
): string | null {
  const dataObj =
    data && typeof data === "object"
      ? (data as Record<string, unknown>)
      : null;

  switch (name as ControlTowerToolName) {
    case "git_local_read_file": {
      const p = asString(dataObj?.path) ?? asString(args.path);
      if (!p) return null;
      const start = dataObj?.startLine;
      const end = dataObj?.endLine;
      if (typeof start === "number" && typeof end === "number") {
        return `${p}#L${start}-${end}`;
      }
      return p;
    }
    case "git_local_search_files": {
      const q = asString(args.query);
      return q ? `path-search:${q}` : null;
    }
    case "git_local_search_content": {
      const q = asString(args.query);
      const scope = asString(args.path);
      if (!q) return null;
      return scope ? `content-search:${q}@${scope}` : `content-search:${q}`;
    }
    case "git_local_get_head": {
      const sha = asString(dataObj?.sha);
      const branch = asString(dataObj?.branch);
      if (sha && branch) return `local:HEAD:${branch}@${sha}`;
      return "local:HEAD";
    }
    case "git_local_get_status":
      return "local:status";
    case "git_local_get_diff": {
      const p = asString(args.path);
      return p ? `local:diff:${p}` : "local:diff";
    }
    case "git_local_list_worktrees":
      return "local:worktrees";
    case "git_local_get_log":
      return "local:log";
    case "github_get_repository": {
      const full = asString(dataObj?.fullName);
      return full ? `github:repo:${full}` : "github:repo";
    }
    case "github_get_branch": {
      const branch = asString(dataObj?.name) ?? asString(args.name);
      const sha = asString(dataObj?.sha);
      if (branch && sha) return `github:branch:${branch}@${sha}`;
      return branch ? `github:branch:${branch}` : "github:branch";
    }
    case "github_get_commit": {
      const sha = asString(dataObj?.sha) ?? asString(args.sha);
      return sha ? `github:commit:${sha}` : "github:commit";
    }
    case "github_get_pull_request": {
      const number =
        typeof dataObj?.number === "number"
          ? dataObj.number
          : asOptionalPositiveInt(args.number);
      return number ? `github:pr:#${number}` : "github:pr";
    }
    case "github_list_checks": {
      const ref = asString(args.ref);
      return ref ? `github:checks:${ref}` : "github:checks";
    }
    case "github_list_pr_comments": {
      const number = asOptionalPositiveInt(args.number);
      return number ? `github:pr-comments:#${number}` : "github:pr-comments";
    }
    default:
      return null;
  }
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
    sink?: EventSink;
    workspaceRoot?: string;
    github?: GithubReadPort | null;
    githubUnavailableReason?: string;
  },
): Promise<ToolCallResult> {
  const sink = options?.sink ?? noopEventSink;
  const started = Date.now();
  const name = request.name;

  emitToolEvent(sink, request.sessionId, "TOOL_CALL_REQUESTED", {
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
    emitToolEvent(sink, request.sessionId, "TOOL_CALL_DENIED", {
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
    emitToolEvent(sink, request.sessionId, "TOOL_CALL_DENIED", {
      toolCallId: request.toolCallId,
      toolName: name,
      status: "denied",
      errorCode: "TOOL_NOT_FOUND",
      durationMs: result.usage.durationMs,
    });
    return result;
  }

  emitToolEvent(sink, request.sessionId, "TOOL_CALL_STARTED", {
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
      case "git_local_search_content": {
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
        const r = git.searchContent(q, {
          path: asString(request.arguments.path),
          limit: asInt(request.arguments.limit, 20),
          maxBytes: asInt(request.arguments.maxBytes, 32768),
        });
        data = { matches: r.matches, truncated: r.truncated };
        summary = r.summary;
        truncated = r.truncated;
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
        const startLine = asOptionalPositiveInt(request.arguments.startLine);
        const endLine = asOptionalPositiveInt(request.arguments.endLine);
        const r = git.readFile(p, asInt(request.arguments.maxBytes, 32768), {
          startLine,
          endLine,
        });
        data = {
          path: r.path,
          content: r.content,
          truncated: r.truncated,
          startLine: r.startLine,
          endLine: r.endLine,
          hasMore: r.hasMore,
        };
        summary = r.summary;
        truncated = r.truncated || r.hasMore;
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
          emitToolEvent(sink, request.sessionId, "TOOL_CALL_FAILED", {
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
        // Cap JSON size via structured summarize (still valid JSON)
        const serialized = summarizeGithubPayload(data);
        if (serialized.length >= CT_MAX_TOOL_RESULT_CHARS) {
          truncated = true;
        }
        data = JSON.parse(serialized);
      }
    }

    const prepared = prepareToolDataForModel(data, CT_MAX_TOOL_RESULT_CHARS);
    if (prepared.truncated) truncated = true;
    if (prepared.json.length > CT_MAX_TOOL_RESULT_CHARS * 4) {
      const result = failResult(
        request.toolCallId,
        name,
        "RESULT_TOO_LARGE",
        "Résultat trop volumineux",
        started,
        transport,
      );
      emitToolEvent(sink, request.sessionId, "TOOL_CALL_FAILED", {
        toolCallId: request.toolCallId,
        toolName: name,
        status: "failed",
        errorCode: "RESULT_TOO_LARGE",
        durationMs: result.usage.durationMs,
      });
      return result;
    }

    const pathOrRef = resolveToolPathOrRef(
      name,
      request.arguments,
      prepared.data,
    );
    const result: ToolCallResult = {
      ok: true,
      toolCallId: request.toolCallId,
      name,
      status: "succeeded",
      data: prepared.data,
      summary,
      usage: {
        durationMs: Date.now() - started,
        transport,
        truncated,
        bytes: prepared.json.length,
      },
    };
    emitToolEvent(sink, request.sessionId, "TOOL_CALL_SUCCEEDED", {
      toolCallId: request.toolCallId,
      toolName: name,
      status: "succeeded",
      durationMs: result.usage.durationMs,
      resultDigest: digestText(summary),
      summary,
      source: {
        kind: String(name).startsWith("github_") ? "github" : "git_local",
        label: name,
        pathOrRef,
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
    const deniedPath =
      asString(request.arguments.path) ??
      asString(request.arguments.query) ??
      null;
    const result = failResult(
      request.toolCallId,
      name,
      toolErrorCode,
      message,
      started,
      String(name).startsWith("github_") ? "gh_cli" : "internal_git",
      status,
    );
    emitToolEvent(
      sink,
      request.sessionId,
      status === "denied" ? "TOOL_CALL_DENIED" : "TOOL_CALL_FAILED",
      {
        toolCallId: request.toolCallId,
        toolName: name,
        status,
        errorCode: toolErrorCode,
        durationMs: result.usage.durationMs,
        summary: message,
        pathOrRef: deniedPath,
      },
    );
    return result;
  }
}

export function toolResultForModel(result: ToolCallResult): string {
  if (result.ok) {
    // data already capped to valid JSON-safe structure
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
