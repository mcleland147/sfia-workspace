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

  it("completeStructured passes Responses text.format json_schema strict", async () => {
    createMock.mockResolvedValue({
      id: "resp_structured",
      model: "gpt-test",
      output_text: '{"intentClass":"informative"}',
      usage: { input_tokens: 2, output_tokens: 3, total_tokens: 5 },
    });
    const { OpenAIConversationProvider } = await import(
      "@/lib/platform/ai/openaiProvider"
    );
    const provider = new OpenAIConversationProvider("sk-test", "gpt-test");
    const schema = {
      type: "object",
      additionalProperties: false,
      properties: { intentClass: { type: "string" } },
      required: ["intentClass"],
    };
    const result = await provider.completeStructured({
      messages: [
        { role: "system", content: "sys" },
        { role: "user", content: "ask" },
      ],
      schemaName: "f2_intent_analysis",
      jsonSchema: schema,
    });
    expect(result.text).toContain("informative");
    expect(result.usage).toEqual({
      inputTokens: 2,
      outputTokens: 3,
      totalTokens: 5,
      model: "gpt-test",
      providerResponseId: "resp_structured",
    });
    expect(createMock).toHaveBeenCalledWith(
      expect.objectContaining({
        model: "gpt-test",
        text: {
          format: {
            type: "json_schema",
            name: "f2_intent_analysis",
            schema,
            strict: true,
          },
        },
      }),
    );
    const payload = createMock.mock.calls[0][0];
    expect(payload.input).toEqual([
      { role: "system", content: "sys" },
      { role: "user", content: "ask" },
    ]);
    expect(payload.tools).toBeUndefined();
  });
});
