import { afterEach, describe, expect, it } from "vitest";
import {
  __resetScriptedCursorRunsForTests,
  dispatchCursorRun,
} from "@/domains/execution/cursor-sdk-adapter";
import { priorSendMayHaveOccurred as priorSend } from "@/domains/execution/cursor-claim";

describe("ML5 C12 T-04 DROP_ACK fault injection (SCRIPTED)", () => {
  afterEach(() => {
    delete process.env.SFIA_CURSOR_FAULT_AFTER_SEND;
    __resetScriptedCursorRunsForTests();
  });

  it("throws DROP_ACK after scripted send intent materialized in memory", async () => {
    process.env.SFIA_CURSOR_FAULT_AFTER_SEND = "DROP_ACK";
    await expect(
      dispatchCursorRun(
        {
          attemptId: "efx_c12_ack",
          instructionText: "touch x",
          instructionFingerprint: "fp",
          workspaceCwd: "/tmp",
          idempotencyKey: "efx_c12_ack",
        },
        "SCRIPTED",
      ),
    ).rejects.toThrow(/DROP_ACK/);
  });

  it("priorSendMayHaveOccurred is true when sendRequestedAt present without runId", () => {
    expect(
      priorSend(
        JSON.stringify({
          sendRequestedAt: "2026-11-23T20:00:00.000Z",
        }),
      ),
    ).toBe(true);
    expect(priorSend(JSON.stringify({}))).toBe(false);
  });
});
