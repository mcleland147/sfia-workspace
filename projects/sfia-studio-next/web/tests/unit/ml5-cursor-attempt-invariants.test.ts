import { describe, expect, it } from "vitest";
import {
  __resetScriptedCursorRunsForTests,
  dispatchCursorRun,
  resolveCursorAdapterMode,
  stopCursorRun,
} from "@/domains/execution/cursor-sdk-adapter";
import { handoffIntegrityHash } from "@/domains/execution/handoff-integrity";

describe("ML5 E — Cursor SDK adapter invariants (SCRIPTED)", () => {
  it("defaults to SCRIPTED", () => {
    expect(resolveCursorAdapterMode({} as unknown as NodeJS.ProcessEnv)).toBe("SCRIPTED");
    expect(
      resolveCursorAdapterMode(
        { SFIA_CURSOR_EFFECT_MODE: "LIVE" } as unknown as NodeJS.ProcessEnv,
      ),
    ).toBe("LIVE");
  });

  it("idempotent replay does not create a second scripted run identity", async () => {
    __resetScriptedCursorRunsForTests();
    const input = {
      attemptId: "efx_test_1",
      instructionText: "do thing",
      instructionFingerprint: "fp1",
      workspaceCwd: "/tmp",
      idempotencyKey: "efx_test_1",
    };
    const a = await dispatchCursorRun(input, "SCRIPTED");
    const b = await dispatchCursorRun(input, "SCRIPTED");
    expect(a.agentId).toBe(b.agentId);
    expect(a.runId).toBe(b.runId);
    expect(b.limits).toContain("IDEMPOTENT_REPLAY");
  });

  it("STOP requested documents cancel ≠ rollback", async () => {
    __resetScriptedCursorRunsForTests();
    const stop = await stopCursorRun({
      attemptId: "efx_x",
      agentId: null,
      runId: null,
      workspaceCwd: "/tmp",
      mode: "SCRIPTED",
    });
    expect(stop.limits).toContain("CANCEL_IS_NOT_ROLLBACK");
    expect(stop.stopRequestedAt).toBeTruthy();
  });

  it("handoff integrity changes when report changes", () => {
    const a = handoffIntegrityHash({
      attemptId: "a1",
      contractFingerprint: "c1",
      reportMarkdown: "one",
      manifest: { filesCreated: ["x"] },
    });
    const b = handoffIntegrityHash({
      attemptId: "a1",
      contractFingerprint: "c1",
      reportMarkdown: "two",
      manifest: { filesCreated: ["x"] },
    });
    expect(a).not.toBe(b);
  });
});
