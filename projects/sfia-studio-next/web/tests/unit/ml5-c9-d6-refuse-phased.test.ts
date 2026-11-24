/**
 * ML5 C9 — D6 refuse is an authenticated act; SCRIPTED phased emits RUNNING then finished.
 */
import { describe, expect, it, afterEach } from "vitest";
import {
  __resetScriptedCursorRunsForTests,
  advanceScriptedRunToFinished,
  dispatchCursorRun,
  isScriptedPhasedMode,
} from "@/domains/execution/cursor-sdk-adapter";

describe("ML5 C9 SCRIPTED phased + D6 refuse helpers", () => {
  afterEach(() => {
    __resetScriptedCursorRunsForTests();
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
  });

  it("isScriptedPhasedMode reads env", () => {
    expect(isScriptedPhasedMode({} as NodeJS.ProcessEnv)).toBe(false);
    expect(isScriptedPhasedMode({ ...process.env, SFIA_CURSOR_SCRIPTED_PHASED: "1" })).toBe(true);
  });

  it("SCRIPTED phased returns RUNNING observation without terminal", async () => {
    process.env.SFIA_CURSOR_SCRIPTED_PHASED = "1";
    const d = await dispatchCursorRun(
      {
        attemptId: "efx_test_phased",
        instructionText: "noop",
        instructionFingerprint: "fp",
        workspaceCwd: "/tmp",
        idempotencyKey: "efx_test_phased",
        waitForTerminal: true, // env PHASED still forces running first
      },
      "SCRIPTED",
    );
    expect(d.terminalStatus).toBeNull();
    expect(d.lastActivitySummary).toBe("SCRIPTED_OBSERVATION_RUNNING");
    expect(d.limits).toContain("SCRIPTED_PHASED");
    const fin = advanceScriptedRunToFinished("efx_test_phased");
    expect(fin?.lastActivitySummary).toBe("SCRIPTED_OBSERVATION_FINISHED");
    expect(fin?.resultText).toContain("efx_test_phased");
  });

  it("SCRIPTED non-phased still finishes immediately", async () => {
    const d = await dispatchCursorRun(
      {
        attemptId: "efx_test_immediate",
        instructionText: "noop",
        instructionFingerprint: "fp",
        workspaceCwd: "/tmp",
        idempotencyKey: "efx_test_immediate",
        waitForTerminal: true,
      },
      "SCRIPTED",
    );
    expect(d.terminalStatus).toBe("finished");
    expect(d.lastActivitySummary).toBe("SCRIPTED_FINISHED");
  });
});
