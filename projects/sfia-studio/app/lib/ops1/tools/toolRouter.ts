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
