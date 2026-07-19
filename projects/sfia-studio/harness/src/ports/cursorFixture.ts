import type { CursorInstruction, CursorResult } from "../types/contracts.js";
import { HarnessError } from "../types/contracts.js";
import type { CursorExecutorPort } from "./cursorExecutor.js";

/**
 * Fixture-only Cursor executor.
 * Does NOT call Cursor, does NOT claim real Cursor, does NOT invent an API.
 */
export class CursorExecutorPortFixture implements CursorExecutorPort {
  async execute(instruction: CursorInstruction): Promise<CursorResult> {
    if (instruction.mode !== "fixture") {
      throw new HarnessError("CURSOR_MODE_DENIED", "Only fixture mode allowed in this increment");
    }
    const started = Date.now();
    const sim = instruction.simulate ?? "success";

    if (sim === "timeout") {
      return {
        ok: false,
        mode: "fixture",
        summary: "fixture timeout simulated",
        artifacts: [],
        errorCode: "CURSOR_FIXTURE_TIMEOUT",
        durationMs: Date.now() - started,
        realCursorClaimed: false,
      };
    }
    if (sim === "error") {
      return {
        ok: false,
        mode: "fixture",
        summary: "fixture error simulated",
        artifacts: [],
        errorCode: "CURSOR_FIXTURE_ERROR",
        durationMs: Date.now() - started,
        realCursorClaimed: false,
      };
    }
    return {
      ok: true,
      mode: "fixture",
      summary: `fixture success: ${instruction.objective}`,
      artifacts: [`fixture://${instruction.requestId}/analysis.md`],
      durationMs: Date.now() - started,
      realCursorClaimed: false,
    };
  }
}
