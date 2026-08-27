/** @vitest-environment node */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  parseOpenAiReasoningEffort,
  requireLiveConversationSecrets,
  TechnicalError,
} from "@/lib/platform/ai";
import { GitLocalReadAdapter } from "@/lib/platform/repository/gitLocalReadAdapter";
import {
  createToolCallId,
  prepareToolDataForModel,
  resolveToolPathOrRef,
  routeToolCall,
} from "@/lib/platform/tools/toolRouter";
import { CONTROL_TOWER_TOOL_DEFINITIONS } from "@/lib/platform/tools/types";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import { collectToolTelemetry } from "@/features/project-assistant/collectToolTelemetry";
import { isPureRepositoryAnalysisIntent } from "@/features/project-assistant/f2/repositoryIntent";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";

const createMock = vi.fn();

vi.mock("openai", () => ({
  default: class OpenAI {
    responses = { create: createMock };
  },
}));

function minimalProject(): ProjectAssistantContextDto {
  return {
    projectId: "prj:test",
    name: "Test",
    shortReference: null,
    objective: "obj",
    contextSummary: "ctx",
    criticality: "normal",
    constraints: [],
    lpsId: "lps:1",
    lpsVersion: 1,
    lpsCreatedAt: "2026-01-01",
    doctrineId: "doc:1",
    doctrineVersion: "1",
    doctrineDigest: "digest",
    doctrineStatus: "active",
    runtimeMode: "fixture",
    persistence: "process-local",
    readiness: "ready",
  };
}

describe("V3-REAL-A-BLOCKER-01 — DG reasoning config", () => {
  const prevKey = process.env.OPENAI_API_KEY;
  const prevModel = process.env.OPENAI_MODEL;
  const prevEffort = process.env.OPENAI_REASONING_EFFORT;

  afterEach(() => {
    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
    else process.env.OPENAI_API_KEY = prevKey;
    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
    else process.env.OPENAI_MODEL = prevModel;
    if (prevEffort === undefined) delete process.env.OPENAI_REASONING_EFFORT;
    else process.env.OPENAI_REASONING_EFFORT = prevEffort;
    vi.clearAllMocks();
  });

  it("DG-01 — reasoning effort validated and transmitted to Responses API", async () => {
    process.env.OPENAI_API_KEY = "sk-test-key";
    process.env.OPENAI_MODEL = "gpt-test-model";
    process.env.OPENAI_REASONING_EFFORT = "high";
    const secrets = requireLiveConversationSecrets();
    expect(secrets.reasoningEffort).toBe("high");

    createMock.mockResolvedValue({
      id: "resp_r",
      model: "gpt-test-model",
      output_text: "ok",
      usage: { input_tokens: 1, output_tokens: 1, total_tokens: 2 },
    });
    const { OpenAIConversationProvider } = await import(
      "@/lib/platform/ai/openaiProvider"
    );
    const provider = new OpenAIConversationProvider(
      "sk-test",
      "gpt-test-model",
      "high",
    );
    await provider.completeStructured({
      messages: [{ role: "user", content: "x" }],
      schemaName: "t",
      jsonSchema: { type: "object", properties: {}, additionalProperties: false },
    });
    expect(createMock).toHaveBeenCalledWith(
      expect.objectContaining({
        model: "gpt-test-model",
        reasoning: { effort: "high" },
      }),
    );
    await provider.completeRound({
      items: [{ type: "message", role: "user", content: "y" }],
      tools: [],
    });
    expect(createMock.mock.calls.at(-1)?.[0]).toEqual(
      expect.objectContaining({
        reasoning: { effort: "high" },
      }),
    );
  });

  it("DG-02 — invalid reasoning effort fails explicitly", () => {
    expect(() => parseOpenAiReasoningEffort("turbo")).toThrow(TechnicalError);
    process.env.OPENAI_API_KEY = "sk-test-key";
    process.env.OPENAI_MODEL = "gpt-test-model";
    process.env.OPENAI_REASONING_EFFORT = "not-a-level";
    expect(() => requireLiveConversationSecrets()).toThrow(/OPENAI_REASONING_EFFORT/);
  });
});

describe("V3-REAL-A-BLOCKER-01 — DG repository tools", () => {
  let tmp: string;
  let prevExec: string | undefined;

  beforeEach(() => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ra-blocker-"));
    prevExec = process.env.OPS1_EXEC_ROOT;
    // Initialize a tiny git repo with tracked content
    fs.mkdirSync(path.join(tmp, "projects/sfia-studio/docs"), { recursive: true });
    const deep = Array.from({ length: 80 }, (_, i) => `line-${i + 1}`).join("\n");
    const deepWithMarkers = [
      ...Array.from({ length: 40 }, (_, i) => `pad-${i + 1}`),
      "### U-01 unknown marker",
      "M6 disposition text",
      "M7 disposition text",
      ...Array.from({ length: 20 }, (_, i) => `tail-${i + 1}`),
    ].join("\n");
    fs.writeFileSync(
      path.join(tmp, "projects/sfia-studio/docs/deep.md"),
      deepWithMarkers,
      "utf8",
    );
    fs.writeFileSync(
      path.join(tmp, "projects/sfia-studio/docs/policy-notes.md"),
      [
        "# notes",
        "Here we document CURSOR_REAL_TIMEOUT_POLICY as a freeze.",
        'Quotes "back\\slash" and newlines are fine.',
      ].join("\n"),
      "utf8",
    );
    fs.writeFileSync(path.join(tmp, "projects/sfia-studio/docs/pad.md"), deep, "utf8");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
    execFileSync("git", ["init"], { cwd: tmp });
    execFileSync("git", ["config", "user.email", "test@example.com"], { cwd: tmp });
    execFileSync("git", ["config", "user.name", "test"], { cwd: tmp });
    execFileSync("git", ["add", "."], { cwd: tmp });
    execFileSync("git", ["commit", "-m", "init"], { cwd: tmp });
  });

  afterEach(() => {
    if (prevExec === undefined) delete process.env.OPS1_EXEC_ROOT;
    else process.env.OPS1_EXEC_ROOT = prevExec;
    fs.rmSync(tmp, { recursive: true, force: true });
  });

  it("DG-03 — git_local_search_content finds term absent from filename", () => {
    const git = new GitLocalReadAdapter(tmp);
    const r = git.searchContent("CURSOR_REAL_TIMEOUT_POLICY");
    expect(r.matches.length).toBeGreaterThan(0);
    expect(r.matches[0]?.path).toContain("policy-notes.md");
    expect(r.matches.some((m) => m.text.includes("CURSOR_REAL_TIMEOUT_POLICY"))).toBe(
      true,
    );
    // path-only search would miss this
    const pathOnly = git.searchFiles("CURSOR_REAL_TIMEOUT_POLICY");
    expect(pathOnly.paths).toHaveLength(0);
  });

  it("DG-04 — search_content respects pathPolicy", async () => {
    fs.mkdirSync(path.join(tmp, "method"), { recursive: true });
    fs.writeFileSync(
      path.join(tmp, "method/secret-hit.md"),
      "CURSOR_REAL_TIMEOUT_POLICY in forbidden tree",
      "utf8",
    );
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
    execFileSync("git", ["add", "."], { cwd: tmp });
    execFileSync("git", ["commit", "-m", "forbidden"], { cwd: tmp });

    const git = new GitLocalReadAdapter(tmp);
    const r = git.searchContent("CURSOR_REAL_TIMEOUT_POLICY");
    expect(r.matches.every((m) => !m.path.startsWith("method/"))).toBe(true);

    const denied = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_search_content",
        arguments: { query: "x", path: "method/secret-hit.md" },
        sessionId: "sess-dg04",
      },
      { workspaceRoot: tmp },
    );
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.errorCode).toBe("PATH_NOT_ALLOWED");
  });

  it("DG-05/DG-06 — ranged read reaches deep section and signals hasMore", () => {
    const git = new GitLocalReadAdapter(tmp);
    const shallow = git.readFile("projects/sfia-studio/docs/deep.md", 512, {
      startLine: 1,
      endLine: 10,
    });
    expect(shallow.content).toContain("pad-1");
    expect(shallow.content).not.toContain("U-01");
    expect(shallow.hasMore).toBe(true);

    const deep = git.readFile("projects/sfia-studio/docs/deep.md", 8192, {
      startLine: 40,
      endLine: 50,
    });
    expect(deep.content).toContain("U-01");
    expect(deep.content).toContain("M6");
    expect(deep.content).toContain("M7");
    expect(deep.startLine).toBe(40);
    expect(deep.truncated || deep.hasMore || deep.endLine < 63).toBeTruthy();
  });

  it("DG-07 — tool payload remains valid JSON with large markdown / specials", () => {
    const huge = [
      "# Title",
      'He said "hello" with \\ backslash',
      "line\nwith\nnewlines",
      "control-like:\t\r end",
      "x".repeat(20_000),
    ].join("\n");
    const prepared = prepareToolDataForModel(
      {
        path: "projects/sfia-studio/docs/big.md",
        content: huge,
        truncated: false,
      },
      2_000,
    );
    expect(() => JSON.parse(prepared.json)).not.toThrow();
    expect(prepared.truncated).toBe(true);
    expect(prepared.json.length).toBeLessThanOrEqual(2_000 + 64);
  });

  it("DG-08/DG-09/DG-10 — provenance pathOrRef on success; denied not a success source", async () => {
    const events: TechnicalEvent[] = [];
    const sink = {
      emit(e: TechnicalEvent) {
        events.push(e);
      },
    };

    const ok = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: {
          path: "projects/sfia-studio/docs/policy-notes.md",
          startLine: 1,
          endLine: 5,
        },
        sessionId: "sess-prov",
      },
      { workspaceRoot: tmp, sink },
    );
    expect(ok.ok).toBe(true);
    const success = events.find((e) => e.type === "TOOL_SUCCEEDED");
    const successSource = success?.detail.source as
      | { pathOrRef?: string | null }
      | undefined;
    expect(successSource?.pathOrRef).toContain(
      "projects/sfia-studio/docs/policy-notes.md",
    );

    const denied = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: {
          path: "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md",
        },
        sessionId: "sess-prov",
      },
      { workspaceRoot: tmp, sink },
    );
    expect(denied.ok).toBe(false);
    if (!denied.ok) expect(denied.errorCode).toBe("PATH_NOT_ALLOWED");

    const { sources, toolEvents } = collectToolTelemetry(events);
    expect(sources.some((s) => s.pathOrRef?.includes("policy-notes.md"))).toBe(
      true,
    );
    expect(
      sources.some((s) => s.pathOrRef?.includes("method/sfia-fast-track")),
    ).toBe(false);
    expect(
      toolEvents.some(
        (t) =>
          t.status === "denied" &&
          t.errorCode === "PATH_NOT_ALLOWED",
      ),
    ).toBe(true);
    expect(resolveToolPathOrRef("git_local_get_head", {}, { sha: "abc", branch: "main" })).toContain(
      "local:HEAD:main@abc",
    );
  });

  it("DG-16 — PATH_NOT_ALLOWED remains fail-closed", async () => {
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: { path: ".env" },
        sessionId: "sess-deny",
      },
      { workspaceRoot: tmp },
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errorCode).toBe("PATH_NOT_ALLOWED");
      expect(result.status).toBe("denied");
    }
  });
});

describe("V3-REAL-A-BLOCKER-01 — DG routing + grounding rules", () => {
  it("DG-11/12/13 — repository informative intents classified as pure analysis", () => {
    expect(
      isPureRepositoryAnalysisIntent(
        "Avant toute analyse, vérifie la branche, le HEAD et le status Git local, puis compare avec main distant. Ne modifie rien.",
      ),
    ).toBe(true);
    expect(
      isPureRepositoryAnalysisIntent(
        "Lis ce document et résume-le.",
      ),
    ).toBe(true);
    expect(
      isPureRepositoryAnalysisIntent(
        "Cherche CURSOR_REAL_TIMEOUT_POLICY dans le repository. Ne présume pas du fichier : cherche-le.",
      ),
    ).toBe(true);
    expect(
      isPureRepositoryAnalysisIntent(
        "Reconstitue l'historique Product Completion à partir des sources.",
      ),
    ).toBe(true);
  });

  it("DG-14 — true actionable remains non-pure-repo", () => {
    expect(
      isPureRepositoryAnalysisIntent(
        "Prépare un cycle Delivery et qualifie la prochaine étape.",
      ),
    ).toBe(false);
    expect(
      isPureRepositoryAnalysisIntent(
        "Lance Cursor et crée une PR après commit.",
      ),
    ).toBe(false);
  });

  it("DG-15 — grounding rules forbid source-backed claim after failure", () => {
    const prompt = buildProjectSystemPrompt(minimalProject());
    expect(prompt).toMatch(/FAILED\/DENIED\/UNRESOLVED SOURCE/i);
    expect(prompt).toMatch(/ne jamais prétendre avoir lu/i);
    expect(prompt).toMatch(/search hit/i);
    expect(prompt).toMatch(/git_local_search_content/);
  });

  it("DG-17 — no Git/Cursor write tools introduced", () => {
    const names = CONTROL_TOWER_TOOL_DEFINITIONS.map((t) => t.name);
    expect(names).toContain("git_local_search_content");
    expect(names.every((n) => !n.includes("write") && !n.startsWith("cursor_"))).toBe(
      true,
    );
    expect(
      names.some(
        (n) =>
          n.includes("git_write") ||
          n.includes("git_push") ||
          n.startsWith("cursor_"),
      ),
    ).toBe(false);
  });
});
