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
