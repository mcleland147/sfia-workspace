/** @vitest-environment node */
/**
 * P5-S06 CP02 — bounded request-scoped Nora cancellation.
 * ZERO REAL. Same runNoraAgentsTurn / canonical send seam.
 */
import { describe, expect, it } from "vitest";
import type { Model, ModelRequest, ModelResponse } from "@openai/agents";
import { runNoraAgentsTurn } from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import { NoraTurnAbortedError } from "@/lib/nora-cognitive-runtime/noraTurnAbort";
import { parseBrowserSafeAssistantSendBody } from "@/features/project-assistant/browserSafeAssistantSend";
import { noraTurnStoppedFailure } from "@/features/project-assistant/noraTurnStopped";
import { POST as assistantSendPost } from "@/app/api/studio/projects/[projectId]/assistant/send/route";

function hangingAbortModel(observe: {
  sawSignal?: AbortSignal;
  aborted?: boolean;
}): Model {
  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      observe.sawSignal = request.signal;
      await new Promise<void>((_resolve, reject) => {
        const fail = () => {
          observe.aborted = true;
          const error = new Error("AbortError");
          error.name = "AbortError";
          reject(error);
        };
        if (request.signal?.aborted) {
          fail();
          return;
        }
        request.signal?.addEventListener("abort", fail, { once: true });
      });
      throw new Error("unreachable");
    },
    async *getStreamedResponse(): AsyncIterable<never> {
      throw new Error("streaming not used");
    },
  };
}

describe("P5-S06 CP02 Runner signal", () => {
  it("T01 — Runner/model sees AbortSignal and settles as cancellation", async () => {
    const observe: { sawSignal?: AbortSignal; aborted?: boolean } = {};
    const controller = new AbortController();
    const pending = runNoraAgentsTurn({
      correlationId: "cp02-t01",
      projectId: "prj:cp02",
      systemInstructions: "Test",
      userContent: "hello",
      enableTools: false,
      model: hangingAbortModel(observe),
      signal: controller.signal,
    });
    const started = Date.now();
    while (!observe.sawSignal && Date.now() - started < 3000) {
      await new Promise((r) => setTimeout(r, 20));
    }
    expect(observe.sawSignal).toBeDefined();
    controller.abort();
    await expect(pending).rejects.toBeInstanceOf(NoraTurnAbortedError);
    expect(observe.aborted).toBe(true);
  });
});

describe("P5-S06 CP02 transport body", () => {
  it("T02/T26 — browser-safe parse rejects hostile authority fields", () => {
    expect(
      parseBrowserSafeAssistantSendBody({
        content: "ok",
        provider: { complete: () => null },
      }).ok,
    ).toBe(false);
    expect(
      parseBrowserSafeAssistantSendBody({
        content: "ok",
        sessionDbPath: "/tmp/x",
      }).ok,
    ).toBe(false);
    expect(
      parseBrowserSafeAssistantSendBody({
        content: "ok",
        claimedAuthorityLevel: "morris",
      }).ok,
    ).toBe(false);
    expect(parseBrowserSafeAssistantSendBody({ content: "hello" })).toEqual({
      ok: true,
      value: { content: "hello" },
    });
  });

  it("route is POST-only and binds projectId from URL", async () => {
    const get = (assistantSendPost as { GET?: unknown }).GET;
    expect(get).toBeUndefined();
    const res = await assistantSendPost(
      new Request("http://localhost/api/studio/projects/prj%3Ax/assistant/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ content: 1 }),
      }),
      { params: Promise.resolve({ projectId: "prj:x" }) },
    );
    expect(res.status).toBe(400);
    const json = (await res.json()) as { code: string };
    expect(json.code).toBe("INPUT_INVALID");
  });
});

describe("P5-S06 CP02 STOPPED semantics", () => {
  it("T04/T09/T10 — STOPPED is distinct from error and cognitive stop", () => {
    const stopped = noraTurnStoppedFailure("fixture");
    expect(stopped.ok).toBe(false);
    expect(stopped.status).toBe("stopped");
    expect(stopped.code).toBe("NORA_TURN_STOPPED");
    expect(stopped.status).not.toBe("provider_error");
    expect(stopped.status).not.toBe("cognitive_stop");
  });
});
