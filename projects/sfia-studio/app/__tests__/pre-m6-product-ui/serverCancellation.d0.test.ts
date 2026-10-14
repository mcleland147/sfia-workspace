/**
 * R-EXT-05 — Server cancellation + NDJSON transport (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { sendCancellableAssistantTurn } from "@/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn";
import { terminalLiveActivityFromProductResult } from "@/features/project-assistant/liveActivityEvents";
import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";

function stopAvailable(input: {
  cancellable: boolean;
  blocked: boolean;
  f3Busy: boolean;
}): boolean {
  return input.cancellable && !input.blocked && !input.f3Busy;
}

function ndjsonBody(lines: unknown[]): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const text = lines.map((l) => `${JSON.stringify(l)}\n`).join("");
  return new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(text));
      controller.close();
    },
  });
}

describe("R-EXT-05 — AbortSignal reaches fetch", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("passes AbortSignal to fetch and records abort on controller", async () => {
    let capturedSignal: AbortSignal | undefined;
    const controller = new AbortController();

    vi.stubGlobal(
      "fetch",
      vi.fn(async (_url: string, init?: RequestInit) => {
        capturedSignal = init?.signal ?? undefined;
        await new Promise((resolve) => setTimeout(resolve, 50));
        return {
          ok: true,
          headers: { get: () => "application/json" },
          json: async () => ({
            ok: true,
            status: "ok",
            mode: "assisted",
            assistantMessage: { role: "assistant", content: "x" },
          }),
        };
      }),
    );

    const pending = sendCancellableAssistantTurn(
      { projectId: "proj_abort", content: "hi" },
      controller.signal,
    );
    controller.abort();
    await pending.catch(() => undefined);

    expect(capturedSignal).toBe(controller.signal);
    expect(capturedSignal?.aborted).toBe(true);
  });
});

describe("R-EXT-05 — stopAvailable early formula", () => {
  it("cancellable live turn → stop available", () => {
    expect(
      stopAvailable({ cancellable: true, blocked: false, f3Busy: false }),
    ).toBe(true);
  });

  it("idle or blocked → stop unavailable", () => {
    expect(
      stopAvailable({ cancellable: false, blocked: false, f3Busy: false }),
    ).toBe(false);
    expect(
      stopAvailable({ cancellable: true, blocked: true, f3Busy: false }),
    ).toBe(false);
  });
});

describe("R-EXT-05 — NDJSON progressive parser", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("emits activity before result; skips malformed lines; ignores activity after result", async () => {
    const activities: NoraLiveActivityEvent[] = [];
    const before: NoraLiveActivityEvent = {
      kind: "tool_started",
      seq: 1,
      at: "2026-10-14T12:00:00.000Z",
      label: "before",
    };
    const after: NoraLiveActivityEvent = {
      kind: "activity_update",
      seq: 99,
      at: "2026-10-14T12:00:01.000Z",
      label: "after-result-should-drop",
    };
    const result = {
      ok: true,
      status: "ok",
      mode: "assisted",
      assistantMessage: { role: "assistant", content: "done" },
    };

    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        headers: {
          get: (name: string) =>
            name.toLowerCase() === "content-type"
              ? "application/x-ndjson"
              : null,
        },
        body: new ReadableStream<Uint8Array>({
          start(controller) {
            const enc = new TextEncoder();
            controller.enqueue(
              enc.encode(
                [
                  JSON.stringify({ type: "activity", event: before }),
                  "{not-valid-json",
                  JSON.stringify({ type: "result", result }),
                  JSON.stringify({ type: "activity", event: after }),
                ].join("\n") + "\n",
              ),
            );
            controller.close();
          },
        }),
        json: async () => result,
      })),
    );

    const out = await sendCancellableAssistantTurn(
      { projectId: "proj_ndjson", content: "hello" },
      new AbortController().signal,
      { onActivity: (e) => activities.push(e) },
    );

    expect(activities.map((a) => a.label)).toEqual(["before"]);
    expect(out).toEqual(result);
  });
});

describe("R-EXT-05 — transport abort ≠ stop_confirmed", () => {
  it("terminalLiveActivityFromProductResult maps transport abort to provider_unavailable + transport_interrupted", () => {
    const terminal = terminalLiveActivityFromProductResult({
      result: { ok: false, status: "provider_unavailable" },
      transportAbortedWithoutAck: true,
    });
    expect(terminal.kind).toBe("transport_interrupted");
    expect(terminal.kind).not.toBe("stop_confirmed");
  });
});
