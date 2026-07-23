/** @vitest-environment node */
import { beforeEach, describe, expect, it, vi } from "vitest";

const createMock = vi.fn();

vi.mock("openai", () => ({
  default: class OpenAI {
    responses = { create: createMock };
  },
}));

describe("OpenAIConversationProvider mapping", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("extracts text and usage; requests empty tools", async () => {
    createMock.mockResolvedValue({
      id: "resp_123",
      model: "gpt-test",
      output_text: "  hello live  ",
      usage: { input_tokens: 3, output_tokens: 4, total_tokens: 7 },
    });
    const { OpenAIConversationProvider } = await import(
      "@/lib/platform/ai/openaiProvider"
    );
    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
    const result = await provider.complete([
      { role: "user", content: "hi" },
      { role: "assistant", content: "prev" },
      { role: "user", content: "again" },
    ]);
    expect(result.text).toBe("hello live");
    expect(result.usage).toEqual({
      inputTokens: 3,
      outputTokens: 4,
      totalTokens: 7,
      model: "gpt-test",
      providerResponseId: "resp_123",
    });
    expect(createMock).toHaveBeenCalledWith(
      expect.objectContaining({
        model: "gpt-test",
        tools: [],
      }),
    );
    const payload = createMock.mock.calls[0][0];
    expect(payload.input).toHaveLength(3);
  });

  it("maps provider failures to safe TechnicalError", async () => {
    createMock.mockRejectedValue(new Error("upstream boom sk-secret"));
    const { OpenAIConversationProvider } = await import(
      "@/lib/platform/ai/openaiProvider"
    );
    const { TechnicalError } = await import("@/lib/platform/ai/errors");
    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
    await expect(
      provider.complete([{ role: "user", content: "x" }]),
    ).rejects.toBeInstanceOf(TechnicalError);
  });
});
