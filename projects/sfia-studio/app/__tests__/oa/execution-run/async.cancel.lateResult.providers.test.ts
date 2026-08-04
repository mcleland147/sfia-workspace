/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  invokeWithTimeoutAndCancellation,
  recordLateProviderResult,
} from "@/lib/oa/execution-run/application/providerInvocation";
import { normalizedFailure } from "@/lib/oa/execution-run/domain/errors";

describe("D2D2-06 ASYNC-B", () => {
  it("times out exactly as timed_out", async () => {
    const outcome = await invokeWithTimeoutAndCancellation(
      async () =>
        new Promise<never>(() => {
          /* hang */
        }),
      { timeoutMs: 20, correlationId: "a1", maxRetries: 0 },
    );
    expect(outcome.status).toBe("timed_out");
  });

  it("cancellation yields exactly cancelled (not completed)", async () => {
    const ac = new AbortController();
    const p = invokeWithTimeoutAndCancellation(
      async (signal) =>
        new Promise<
          | {
              kind: "cancelled";
              failure: ReturnType<typeof normalizedFailure>;
            }
        >((resolve) => {
          const finish = () => {
            resolve({
              kind: "cancelled",
              failure: normalizedFailure({
                family: "cancelled",
                code: "CANCELLED",
                userMessage: "cancelled",
                retryable: false,
                correlationId: "a2",
              }),
            });
          };
          if (signal.aborted) {
            finish();
            return;
          }
          signal.addEventListener("abort", finish, { once: true });
        }),
      { timeoutMs: 5_000, signal: ac.signal, correlationId: "a2", maxRetries: 0 },
    );
    ac.abort();
    const outcome = await p;
    expect(outcome.status).toBe("cancelled");
  });

  it("late result record never mutates terminal", () => {
    const late = recordLateProviderResult({
      receivedAt: new Date().toISOString(),
      terminalState: "cancelled",
      redactedSummary: "late-evidence-only",
    });
    expect(late.mutatesTerminal).toBe(false);
    expect(late.kind).toBe("late_result");
  });

  it("bounds retries to max 3", async () => {
    let calls = 0;
    const outcome = await invokeWithTimeoutAndCancellation(
      async () => {
        calls += 1;
        throw new Error("boom");
      },
      {
        timeoutMs: 100,
        correlationId: "a3",
        maxRetries: 99,
        classifyRetry: () => "retryable",
      },
    );
    expect(outcome.status).toBe("failed");
    expect(calls).toBeLessThanOrEqual(4);
  });
});
