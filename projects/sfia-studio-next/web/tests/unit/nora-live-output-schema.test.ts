import { describe, expect, it } from "vitest";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { z } from "zod";
import { NoraTurnQualificationSchema } from "@/domains/conversation/semantic-qualification";
import { VisualCompositionAgentOutputSchema } from "@/domains/conversation/visual-composition";
import { categorizeProviderError } from "@/domains/conversation/nora-adapter";

async function convert(schema: z.ZodType) {
  const toolsPath = path.resolve(
    process.cwd(),
    "node_modules/@openai/agents-core/dist/utils/tools.mjs",
  );
  const { convertAgentOutputTypeToSerializable } = await import(
    pathToFileURL(toolsPath).href
  );
  return convertAgentOutputTypeToSerializable(schema);
}

describe("Nora LIVE structured output schema (E05 visualComposition)", () => {
  it("rejects z.unknown visualComposition as empty JSON Schema property", async () => {
    const broken = z.object({
      replyDraft: z.string(),
      visualComposition: z.unknown().optional(),
    });
    const serialized = await convert(broken);
    const visual = (serialized.schema as { properties?: Record<string, unknown> })
      ?.properties?.visualComposition as Record<string, unknown> | undefined;
    expect(visual).toBeDefined();
    expect(Object.keys(visual ?? {}).filter((k) => k !== "description")).toEqual([]);
  });

  it("serializes VisualCompositionAgentOutputSchema without empty property schema", async () => {
    const wrapped = z.object({
      replyDraft: z.string(),
      visualComposition: VisualCompositionAgentOutputSchema.optional(),
    });
    const serialized = await convert(wrapped);
    const visual = (serialized.schema as { properties?: Record<string, unknown> })
      ?.properties?.visualComposition as Record<string, unknown> | undefined;
    expect(visual).toBeDefined();
    expect(Object.keys(visual ?? {}).length).toBeGreaterThan(0);
    expect(JSON.stringify(visual)).not.toBe("{}");
  });

  it("serializes full NoraTurnQualificationSchema without empty visualComposition", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    const visual = (serialized.schema as { properties?: Record<string, unknown> })
      ?.properties?.visualComposition as Record<string, unknown> | undefined;
    expect(visual).toBeDefined();
    const keys = Object.keys(visual ?? {}).filter((k) => k !== "description");
    expect(keys.length).toBeGreaterThan(0);
    expect(JSON.stringify(visual)).not.toBe("{}");
  });

  it("categorizes structured-output schema errors distinctly", () => {
    const c = categorizeProviderError(
      new Error("Invalid schema for response_format json_schema: empty object"),
    );
    expect(c.category).toBe("PROVIDER_SCHEMA_OR_OUTPUT");
    expect(c.category).not.toContain("Invalid schema");
  });
});
