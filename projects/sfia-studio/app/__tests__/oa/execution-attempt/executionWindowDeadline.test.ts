/**
 * ARCH-WOP-1 — Attempt deadline = startedAt + snapshotted window.
 * Fake nowIso only. No +31 min forge.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  PRE_M6_EXECUTION_WINDOW_MS,
  type ExecutionWindowClass,
} from "@/lib/oa/execution-contract";
import { NOW, buildStack, seedRunningAttempt } from "./helpers";

const CLASSES: ReadonlyArray<ExecutionWindowClass> = [
  "short",
  "standard",
  "long",
  "extended",
];

function addMs(iso: string, ms: number): string {
  return new Date(Date.parse(iso) + ms).toISOString();
}

describe("snapshotted Attempt deadline (ARCH-WOP-1)", () => {
  it.each(CLASSES)(
    "%s: TIMEOUT_NOT_REACHED before snapshot deadline, timeout at deadline, idempotent",
    async (cls) => {
      const windowMs = PRE_M6_EXECUTION_WINDOW_MS[cls];
      const stack = buildStack({
        policy: { attemptTimeoutMs: 30 * 60 * 1000 },
      });
      await seedRunningAttempt(stack);
      const current = await stack.attempts.attempts.findById("xat:oa-001");
      expect(current?.status).toBe("running");
      expect(current?.startedAt).toBe(NOW);
      const snapshotted = {
        ...current!,
        executionWindowClass: cls,
        resolvedMaxDurationMs: windowMs,
        version: current!.version + 1,
      };
      await stack.attempts.attempts.update(snapshotted, current!.version);

      const early = await stack.attempts.triggerAttemptTimeout.execute({
        attemptId: "xat:oa-001",
        autoSafety: true,
        nowIso: addMs(NOW, windowMs - 1),
      });
      expect(early.ok).toBe(false);
      if (!early.ok) {
        expect(early.error.detailCode).toBe("TIMEOUT_NOT_REACHED");
      }
      const still = await stack.attempts.attempts.findById("xat:oa-001");
      expect(still?.status).toBe("running");
      expect(still?.resolvedMaxDurationMs).toBe(windowMs);

      const late = await stack.attempts.triggerAttemptTimeout.execute({
        attemptId: "xat:oa-001",
        autoSafety: true,
        nowIso: addMs(NOW, windowMs),
      });
      expect(late.ok).toBe(true);
      if (!late.ok) return;
      expect(late.attempt.status).toBe("timeout");
      expect(late.attempt.attemptId).toBe("xat:oa-001");
      expect(late.attempt.resolvedMaxDurationMs).toBe(windowMs);

      const replay = await stack.attempts.triggerAttemptTimeout.execute({
        attemptId: "xat:oa-001",
        autoSafety: true,
        nowIso: addMs(NOW, windowMs + 60_000),
      });
      expect(replay.ok).toBe(true);
      if (replay.ok) {
        expect(replay.replayed).toBe(true);
        expect(replay.attempt.attemptId).toBe("xat:oa-001");
      }
    },
  );

  it("uses the snapshot, not the 30 min policy and not a +31 min forge", async () => {
    const stack = buildStack({
      policy: { attemptTimeoutMs: 30 * 60 * 1000 },
    });
    await seedRunningAttempt(stack);
    const current = await stack.attempts.attempts.findById("xat:oa-001");
    await stack.attempts.attempts.update(
      {
        ...current!,
        executionWindowClass: "short",
        resolvedMaxDurationMs: PRE_M6_EXECUTION_WINDOW_MS.short,
        version: current!.version + 1,
      },
      current!.version,
    );
    const atSixMinutes = await stack.attempts.triggerAttemptTimeout.execute({
      attemptId: "xat:oa-001",
      autoSafety: true,
      nowIso: addMs(NOW, 6 * 60 * 1000),
    });
    expect(atSixMinutes.ok).toBe(true);
    if (!atSixMinutes.ok) return;
    expect(atSixMinutes.attempt.status).toBe("timeout");
    expect(Date.parse(addMs(NOW, 6 * 60 * 1000))).not.toBe(
      Date.parse(NOW) + 31 * 60 * 1000,
    );
  });
});
