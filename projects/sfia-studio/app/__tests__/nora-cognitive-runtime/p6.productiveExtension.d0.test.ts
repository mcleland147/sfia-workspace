/**
 * R-EXT-02 — Productive mission budget extension (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE,
  ProductSqliteSession,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import { PRODUCTIVE_EXTENSION_MAX } from "@/lib/nora-cognitive-runtime/controlledContinuation";
import {
  MISSION_NO_PROGRESS_REPEAT_LIMIT,
  MissionProgressGuard,
  missionProgressResultFingerprint,
} from "@/lib/nora-cognitive-runtime/missionProgressGuard";

const DOC_PATH = "projects/sfia-studio/app/package.json";
const COMPLETE_MARKER = "PRODUCTIVE_EXT_COMPLETE";

const dirs: string[] = [];

function tmpSession(projectId: string): ProductSqliteSession {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-ext-"));
  dirs.push(dir);
  return new ProductSqliteSession({
    projectId,
    dbPath: path.join(dir, "session.sqlite"),
  });
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function readWindow(pass: number) {
  const startLine = (pass - 1) * 8 + 1;
  return {
    path: DOC_PATH,
    maxBytes: 2048,
    startLine,
    endLine: startLine + 7,
  };
}

function sevenTurnDocumentaryScript() {
  return [
    [functionCall("git_local_read_file", readWindow(1), { callId: "e1" })],
    [functionCall("git_local_read_file", readWindow(2), { callId: "e2" })],
    [functionCall("git_local_read_file", readWindow(3), { callId: "e3" })],
    [functionCall("git_local_read_file", readWindow(4), { callId: "e4" })],
    [functionCall("git_local_read_file", readWindow(5), { callId: "e5" })],
    [functionCall("git_local_read_file", readWindow(6), { callId: "e6" })],
    [assistantMessage(`${COMPLETE_MARKER} — synthesis after six reads.`)],
  ];
}

describe("R-EXT-02 — MissionProgressGuard extension signals", () => {
  it("exports safety envelope and productive extension cap", () => {
    expect(ADAPTIVE_MAX_TURNS_SAFETY_ENVELOPE).toBe(36);
    expect(PRODUCTIVE_EXTENSION_MAX).toBe(3);
  });

  it("BUD-02/03/04 — useful unlocks extension; checkpoint; new useful reopens", () => {
    const guard = new MissionProgressGuard(MISSION_NO_PROGRESS_REPEAT_LIMIT);
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);

    const fp1 = missionProgressResultFingerprint({
      ok: true,
      data: {
        path: "a.md",
        returnedStartLine: 1,
        returnedEndLine: 10,
        bytes: 100,
        truncated: false,
      },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md@1-10",
      resultFingerprint: fp1,
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(true);

    guard.markExtensionConsumed();
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);

    const fp2 = missionProgressResultFingerprint({
      ok: true,
      data: {
        path: "a.md",
        returnedStartLine: 11,
        returnedEndLine: 20,
        bytes: 100,
        truncated: false,
      },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md@11-20",
      resultFingerprint: fp2,
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(true);
  });

  it("BUD-06 — identical useful fingerprint does not add useful completions", () => {
    const guard = new MissionProgressGuard(3);
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "doc.md",
      resultFingerprint: "ok|doc.md|1-5|100|f",
    };
    guard.observe(sample);
    guard.observe(sample);
    guard.markExtensionConsumed();
    expect(guard.snapshot().usefulCompletions).toBe(1);
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-05/09/14 — fail-only fingerprints never unlock extension after checkpoint", () => {
    const guard = new MissionProgressGuard(MISSION_NO_PROGRESS_REPEAT_LIMIT);
    const okFp = missionProgressResultFingerprint({
      ok: true,
      data: {
        path: "seed.md",
        returnedStartLine: 1,
        returnedEndLine: 3,
        bytes: 40,
        truncated: false,
      },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "seed.md",
      resultFingerprint: okFp,
    });
    guard.markExtensionConsumed();
    for (let i = 0; i < 4; i += 1) {
      guard.observe({
        toolName: "git_local_read_file",
        targetKey: `miss-${i}.md`,
        resultFingerprint: missionProgressResultFingerprint({
          ok: false,
          data: { path: `miss-${i}.md` },
        }),
      });
    }
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("identical tool+target+fingerprint streak stops at repeat limit", () => {
    const guard = new MissionProgressGuard(3);
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "doc.md",
      resultFingerprint: "ok|doc.md|1-5|100|f",
    };
    guard.observe(sample);
    guard.observe(sample);
    const third = guard.observe(sample);
    expect(third.action).toBe("stop_no_progress");
  });

  it("distinct fingerprints on same target reset streak (advancing windows)", () => {
    const guard = new MissionProgressGuard(3);
    const tool = "git_local_read_file";
    const target = "doc.md@1-100";
    guard.observe({
      toolName: tool,
      targetKey: target,
      resultFingerprint: "ok|doc.md|1-10|100|f",
    });
    guard.observe({
      toolName: tool,
      targetKey: target,
      resultFingerprint: "ok|doc.md|1-10|100|f",
    });
    const afterNewWindow = guard.observe({
      toolName: tool,
      targetKey: target,
      resultFingerprint: "ok|doc.md|11-20|100|f",
    });
    expect(afterNewWindow.action).toBe("continue");
    expect(afterNewWindow.reasonCodes).toContain("progress_streak:1");
  });
});

describe("R-EXT-02 — productive extension integration (ScriptedModel)", () => {
  it("mission maxTurns=6 continues via productive extension when reads advance", async () => {
    const session = tmpSession("prj:p6-productive-ext");
    const model = new ScriptedModel(sevenTurnDocumentaryScript());
    const result = await runNoraAgentsTurn({
      correlationId: "p6-productive-ext",
      projectId: "prj:p6-productive-ext",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Guided Document Review: read package.json in six passes then synthesize.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Deep",
      adaptiveMaxTurnsDecision: {
        requestedMaxTurns: 6,
        strategyClass: "Deep",
        reasonCodes: ["test_adaptive_pin_6"],
        floor: 3,
        ceiling: 24,
        explicitOverride: false,
      },
    });

    const ext = result.continuationObserve?.productiveExtensions ?? 0;
    const codes = result.continuationObserve?.reasonCodes ?? [];
    expect(
      ext >= 1 || codes.some((c) => c.startsWith("productive_extension_")),
    ).toBe(true);
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain(COMPLETE_MARKER);
    session.close();
  });

  it("explicit maxTurns pins safety envelope — no productive extension beyond explicit cap", async () => {
    const session = tmpSession("prj:p6-explicit-cap");
    const model = new ScriptedModel(sevenTurnDocumentaryScript());
    const explicitMax = 8;
    const result = await runNoraAgentsTurn({
      correlationId: "p6-explicit-cap",
      projectId: "prj:p6-explicit-cap",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Guided Document Review: read package.json in six passes then synthesize.",
      session,
      model,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      enableTools: true,
      maxTurns: explicitMax,
      enableControlledContinuation: true,
    });

    expect(result.continuationObserve?.safetyEnvelope).toBe(explicitMax);
    expect(result.continuationObserve?.productiveExtensions ?? 0).toBe(0);
    expect(
      (result.continuationObserve?.reasonCodes ?? []).some((c) =>
        c.startsWith("productive_extension_"),
      ),
    ).toBe(false);
    session.close();
  });
});
