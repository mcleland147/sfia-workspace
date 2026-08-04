/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { PlatformAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter";

describe("D2D2-02 AI-B adapters", () => {
  it("fake returns validated usage without raw prompt/user content", async () => {
    const ai = new FakeAiExecutionAdapter();
    const result = await ai.complete({
      correlationId: "c1",
      lane: "ai",
      operation: "complete",
      messages: [
        {
          role: "user",
          content: "hello alice@example.com sk-abcdefghijklmnopqrstuvwxyz password=secret",
        },
      ],
      timeoutMs: 1000,
    });
    expect(result.kind).toBe("success");
    if (result.kind === "success") {
      expect(result.usage.status).toBe("validated");
      expect(result.redactedSummary).not.toMatch(/alice@|sk-|password|hello/i);
      expect(JSON.stringify(result)).not.toMatch(/sk-abcdefghijklmnopqrstuvwxyz/);
      expect(result).not.toHaveProperty("prompt");
      expect(ai.describeCapability().verified).toBe(false);
    }
  });

  it("platform wrapper omits raw provider text and requires timeout", async () => {
    const ai = new PlatformAiExecutionAdapter(new FakeConversationProvider());
    const missing = await ai.complete({
      correlationId: "c2",
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "ping" }],
    });
    expect(missing.kind).toBe("failure");

    const result = await ai.complete({
      correlationId: "c2b",
      lane: "ai",
      operation: "complete",
      messages: [{ role: "user", content: "ping ghp_abcdefghijklmnopqrstuv" }],
      timeoutMs: 2000,
    });
    expect(result.kind).toBe("success");
    if (result.kind === "success") {
      expect(result.disclosureNotes.some((n) => n.includes("raw_prompt_omitted"))).toBe(true);
      expect(result.disclosureNotes.some((n) => n.includes("raw_response_omitted"))).toBe(true);
      expect(result.redactedSummary).not.toMatch(/ghp_|ping|slice/i);
      expect(ai.describeCapability().verified).toBe(false);
    }
  });
});
