/**
 * P6 — NDJSON progressive send transport (deterministic).
 * ZERO REAL / ZERO OpenAI.
 * @vitest-environment node
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { sendCancellableAssistantTurn } from "@/features/pre-m6-product-ui/hooks/sendCancellableAssistantTurn";
import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";

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

describe("P6 sendCancellableAssistantTurn NDJSON", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("emits activity events before the Product result", async () => {
    const activities: NoraLiveActivityEvent[] = [];
    const started: NoraLiveActivityEvent = {
      kind: "mission_started",
      seq: 1,
      at: "2026-10-14T12:00:00.000Z",
      label: "Nora démarre la mission",
    };
    const tool: NoraLiveActivityEvent = {
      kind: "tool_started",
      seq: 2,
      at: "2026-10-14T12:00:01.000Z",
      label: "Consultation en cours — git_local_read_file",
      toolName: "git_local_read_file",
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
        body: ndjsonBody([
          { type: "activity", event: started },
          { type: "activity", event: tool },
          { type: "result", result },
        ]),
        json: async () => result,
      })),
    );

    const out = await sendCancellableAssistantTurn(
      { projectId: "proj_test", content: "hello" },
      new AbortController().signal,
      { onActivity: (e) => activities.push(e) },
    );

    expect(activities.map((a) => a.kind)).toEqual([
      "mission_started",
      "tool_started",
    ]);
    expect(out).toEqual(result);
  });

  it("falls back to JSON when content-type is application/json", async () => {
    const result = {
      ok: true,
      status: "ok",
      mode: "assisted",
      assistantMessage: { role: "assistant", content: "json" },
    };
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        headers: {
          get: (name: string) =>
            name.toLowerCase() === "content-type"
              ? "application/json"
              : null,
        },
        body: null,
        json: async () => result,
      })),
    );
    const out = await sendCancellableAssistantTurn(
      { projectId: "proj_test", content: "hello" },
      new AbortController().signal,
    );
    expect(out).toEqual(result);
  });
});
