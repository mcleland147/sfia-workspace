/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { getLiveConversationAvailability } from "@/lib/platform/ai/config";
import { messagesToInputItems } from "@/lib/platform/ai/types";
import { noopEventSink } from "@/lib/platform/observability/eventSink";
import { redactSecrets } from "@/lib/platform/security/redaction";

describe("platform AI + security foundations", () => {
  it("fake provider returns tagged non-live text", async () => {
    const provider = new FakeConversationProvider();
    const result = await provider.complete([
      { role: "user", content: "ping" },
    ]);
    expect(result.text).toContain("TEST/FAKE");
    expect(result.usage.model).toBe("fake-test-model");
  });

  it("messagesToInputItems preserves order", () => {
    const items = messagesToInputItems([
      { role: "system", content: "s" },
      { role: "user", content: "u" },
    ]);
    expect(items).toEqual([
      { type: "message", role: "system", content: "s" },
      { type: "message", role: "user", content: "u" },
    ]);
  });

  it("availability probe never returns secrets", () => {
    const status = getLiveConversationAvailability();
    expect(JSON.stringify(status)).not.toMatch(/sk-/);
  });

  it("redacts openai-like secrets", () => {
    expect(redactSecrets("key=sk-abcdefghijklmnop")).toContain("[redacted]");
  });

  it("noop EventSink does not throw", () => {
    expect(() =>
      noopEventSink.emit({
        type: "AI_REQUESTED",
        correlationId: "x",
        detail: {},
      }),
    ).not.toThrow();
  });
});
