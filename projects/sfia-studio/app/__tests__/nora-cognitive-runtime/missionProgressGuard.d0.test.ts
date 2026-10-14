/**
 * P6 — MissionProgressGuard deterministic unit tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assistantMessage,
  functionCall,
  ScriptedModel,
} from "@openai/agents/testing";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import {
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
} from "@/lib/nora-cognitive-runtime";
import {
  MISSION_NO_PROGRESS_REPEAT_LIMIT,
  MISSION_NO_PROGRESS_STOP_STOCK,
  MissionProgressGuard,
  isUsefulMissionProgressFingerprint,
  missionProgressResultFingerprint,
  missionProgressTargetKey,
} from "@/lib/nora-cognitive-runtime/missionProgressGuard";

describe("MissionProgressGuard", () => {
  it("continues until identical tool+target reaches repeat limit", () => {
    const guard = new MissionProgressGuard(MISSION_NO_PROGRESS_REPEAT_LIMIT);
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "projects/sfia-studio/app/package.json",
    };

    const first = guard.observe(sample);
    expect(first.action).toBe("continue");
    expect(first.reasonCodes).toContain("progress_streak:1");

    const second = guard.observe(sample);
    expect(second.action).toBe("continue");
    expect(second.reasonCodes).toContain("progress_streak:2");

    const third = guard.observe(sample);
    expect(third.action).toBe("stop_no_progress");
    expect(third.reasonCodes).toContain("mission_no_progress_repeat");
    expect(third.reasonCodes).toContain("streak:3");
    expect(third.reasonCodes).toContain("tool:git_local_read_file");
  });

  it("empty target never trips no-progress streak (status probes)", () => {
    const guard = new MissionProgressGuard(2);
    for (let i = 0; i < 6; i += 1) {
      const decision = guard.observe({
        toolName: "git_local_get_head",
        targetKey: "",
        resultFingerprint: "ok|||12|f",
      });
      expect(decision.action).toBe("continue");
      expect(decision.reasonCodes).toContain("progress_no_target_skip_streak");
    }
    expect(guard.stopped).toBe(false);
    expect(guard.snapshot().usefulCompletions).toBe(0);
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("resets streak when target changes", () => {
    const guard = new MissionProgressGuard(3);
    const tool = "git_local_read_file";

    guard.observe({ toolName: tool, targetKey: "a.txt" });
    guard.observe({ toolName: tool, targetKey: "a.txt" });
    const afterSwitch = guard.observe({ toolName: tool, targetKey: "b.txt" });
    expect(afterSwitch.action).toBe("continue");
    expect(afterSwitch.reasonCodes).toContain("progress_streak:1");
  });

  it("same target without fingerprint still stops at repeat limit", () => {
    const guard = new MissionProgressGuard(3);
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "projects/sfia-studio/app/package.json",
    };
    guard.observe(sample);
    guard.observe(sample);
    const third = guard.observe(sample);
    expect(third.action).toBe("stop_no_progress");
  });

  it("BUD-01 — no useful completions → extension gate closed", () => {
    const guard = new MissionProgressGuard();
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "missing.md",
      resultFingerprint: "fail|status:failed",
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-02 — useful success unlocks extension", () => {
    const guard = new MissionProgressGuard();
    const fp = missionProgressResultFingerprint({
      ok: true,
      data: { path: "a.md", returnedStartLine: 1, returnedEndLine: 5, bytes: 10, truncated: false },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md",
      resultFingerprint: fp,
    });
    expect(isUsefulMissionProgressFingerprint(fp)).toBe(true);
    expect(guard.hasVerifiableProgressForExtension()).toBe(true);
  });

  it("BUD-03 — markExtensionConsumed closes gate until new useful progress", () => {
    const guard = new MissionProgressGuard();
    const fp = missionProgressResultFingerprint({
      ok: true,
      data: { path: "a.md", returnedStartLine: 1, returnedEndLine: 5, bytes: 10, truncated: false },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md",
      resultFingerprint: fp,
    });
    guard.markExtensionConsumed();
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-04 — after checkpoint, new useful fingerprint reopens extension", () => {
    const guard = new MissionProgressGuard();
    const fp1 = missionProgressResultFingerprint({
      ok: true,
      data: { path: "a.md", returnedStartLine: 1, returnedEndLine: 5, bytes: 10, truncated: false },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md@1-5",
      resultFingerprint: fp1,
    });
    guard.markExtensionConsumed();
    const fp2 = missionProgressResultFingerprint({
      ok: true,
      data: { path: "a.md", returnedStartLine: 6, returnedEndLine: 10, bytes: 10, truncated: false },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md@6-10",
      resultFingerprint: fp2,
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(true);
  });

  it("BUD-05 — after checkpoint, new fail fingerprints never reopen extension", () => {
    const guard = new MissionProgressGuard();
    const okFp = missionProgressResultFingerprint({
      ok: true,
      data: { path: "a.md", returnedStartLine: 1, returnedEndLine: 5, bytes: 10, truncated: false },
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md@1-5",
      resultFingerprint: okFp,
    });
    guard.markExtensionConsumed();
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "b.md",
      resultFingerprint: "fail|status:failed",
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "c.md",
      resultFingerprint: "denied|x",
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
    expect(guard.snapshot().usefulCompletions).toBe(1);
  });

  it("BUD-06 — repeated identical useful fingerprint does not increment useful count", () => {
    const guard = new MissionProgressGuard();
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

  it("BUD-07..08 — isUsefulMissionProgressFingerprint classifies ok vs fail/empty", () => {
    expect(isUsefulMissionProgressFingerprint("ok|p|1-2|10|f")).toBe(true);
    expect(isUsefulMissionProgressFingerprint("ok")).toBe(true);
    expect(isUsefulMissionProgressFingerprint("fail|status:failed")).toBe(false);
    expect(isUsefulMissionProgressFingerprint("denied|x")).toBe(false);
    expect(isUsefulMissionProgressFingerprint("?|x")).toBe(false);
    expect(isUsefulMissionProgressFingerprint("")).toBe(false);
    expect(isUsefulMissionProgressFingerprint("nofp")).toBe(false);
    expect(isUsefulMissionProgressFingerprint("empty")).toBe(false);
  });

  it("BUD-09 — all distinct failed fingerprints never unlock extension", () => {
    const guard = new MissionProgressGuard();
    for (let i = 0; i < 5; i += 1) {
      guard.observe({
        toolName: "git_local_read_file",
        targetKey: `fail-${i}.md`,
        resultFingerprint: `fail|status:failed|${i}`,
      });
    }
    expect(guard.snapshot().usefulCompletions).toBe(0);
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-10 — stopped guard blocks extension even with useful delta", () => {
    const guard = new MissionProgressGuard(3);
    const sample = {
      toolName: "git_local_read_file",
      targetKey: "loop.md",
      resultFingerprint: "ok|loop.md|1-1|1|f",
    };
    guard.observe(sample);
    guard.observe(sample);
    guard.observe(sample);
    expect(guard.stopped).toBe(true);
    guard.markExtensionConsumed();
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("BUD-11 — fail then useful allows extension", () => {
    const guard = new MissionProgressGuard();
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "x.md",
      resultFingerprint: "fail|status:failed",
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "y.md",
      resultFingerprint: "ok|y.md|1-2|20|f",
    });
    expect(guard.hasVerifiableProgressForExtension()).toBe(true);
  });

  it("BUD-12 — snapshot tracks extension checkpoint", () => {
    const guard = new MissionProgressGuard();
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md",
      resultFingerprint: "ok|a.md|1-1|1|f",
    });
    guard.markExtensionConsumed();
    const snap = guard.snapshot();
    expect(snap.usefulCompletions).toBe(1);
    expect(snap.usefulCompletionsAtExtension).toBe(1);
  });

  it("BUD-13 — distinct fail targets do not count as useful completions", () => {
    const guard = new MissionProgressGuard();
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "a.md",
      resultFingerprint: missionProgressResultFingerprint({ ok: false, data: { path: "a.md" } }),
    });
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "b.md",
      resultFingerprint: missionProgressResultFingerprint({
        status: "denied",
        data: { path: "b.md" },
      }),
    });
    expect(guard.snapshot().usefulCompletions).toBe(0);
    expect(guard.snapshot().fingerprintCount).toBe(2);
  });

  it("BUD-14 — useful consumed then only fails keeps gate closed", () => {
    const guard = new MissionProgressGuard();
    guard.observe({
      toolName: "git_local_read_file",
      targetKey: "good.md",
      resultFingerprint: "ok|good.md|1-3|30|f",
    });
    guard.markExtensionConsumed();
    for (const target of ["f1.md", "f2.md", "f3.md"]) {
      guard.observe({
        toolName: "git_local_read_file",
        targetKey: target,
        resultFingerprint: `fail|${target}`,
      });
    }
    expect(guard.hasVerifiableProgressForExtension()).toBe(false);
  });

  it("distinct result fingerprints on same target reset streak", () => {
    const guard = new MissionProgressGuard(3);
    const tool = "git_local_read_file";
    const target = "doc.md@1-50";
    const fpA = missionProgressResultFingerprint({
      ok: true,
      data: { returnedStartLine: 1, returnedEndLine: 10, bytes: 50, truncated: false },
    });
    const fpB = missionProgressResultFingerprint({
      ok: true,
      data: { returnedStartLine: 11, returnedEndLine: 20, bytes: 50, truncated: false },
    });
    guard.observe({ toolName: tool, targetKey: target, resultFingerprint: fpA });
    guard.observe({ toolName: tool, targetKey: target, resultFingerprint: fpA });
    const afterAdvance = guard.observe({
      toolName: tool,
      targetKey: target,
      resultFingerprint: fpB,
    });
    expect(afterAdvance.action).toBe("continue");
    expect(afterAdvance.reasonCodes).toContain("progress_streak:1");
  });
});

describe("missionProgressTargetKey", () => {
  it("includes line window for read_file", () => {
    expect(
      missionProgressTargetKey("git_local_read_file", {
        path: "doc.md",
        startLine: 10,
        endLine: 20,
      }),
    ).toBe("doc.md@10-20");
  });

  it("distinguishes path-only reads", () => {
    expect(
      missionProgressTargetKey("git_local_read_file", { path: "doc.md" }),
    ).toBe("doc.md");
  });
});

describe("MissionProgressGuard — Product tool adapters", () => {
  it("stops runNoraAgentsTurn after three identical read targets", async () => {
    const path = "projects/sfia-studio/app/package.json";
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path, maxBytes: 512 },
          { callId: "loop1" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path, maxBytes: 512 },
          { callId: "loop2" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path, maxBytes: 512 },
          { callId: "loop3" },
        ),
      ],
      [assistantMessage("unreachable")],
    ]);
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:mission-progress-guard",
      projectId: "prj:mission-progress-guard",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Read the same file repeatedly.",
      model,
      enableTools: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
      maxTurns: 8,
    });
    expect(turn.toolCalls).toBeGreaterThanOrEqual(3);
    expect(turn.limitReached).toBe(true);
    expect(turn.continuationObserve?.stopReason).toBe("mission_no_progress");
    expect(turn.continuationObserve?.reasonCodes).toContain(
      "mission_no_progress_repeat",
    );
    expect(turn.text).toBe(MISSION_NO_PROGRESS_STOP_STOCK);
  });
});
