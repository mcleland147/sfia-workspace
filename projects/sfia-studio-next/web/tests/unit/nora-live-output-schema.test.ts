import { describe, expect, it } from "vitest";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { z } from "zod";
import { NoraTurnQualificationSchema } from "@/domains/conversation/semantic-qualification";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VisualCompositionAgentOutputSchema,
} from "@/domains/conversation/visual-composition";
import { categorizeProviderError } from "@/domains/conversation/nora-adapter";

type JsonSchema = Record<string, unknown>;

async function convert(schema: z.ZodType) {
  const toolsPath = path.resolve(
    process.cwd(),
    "node_modules/@openai/agents-core/dist/utils/tools.mjs",
  );
  const { convertAgentOutputTypeToSerializable } = await import(
    pathToFileURL(toolsPath).href
  );
  return convertAgentOutputTypeToSerializable(schema) as {
    type: string;
    name?: string;
    strict?: boolean;
    schema: JsonSchema;
  };
}

async function loadStrictHelpers() {
  const strictPath = path.resolve(
    process.cwd(),
    "node_modules/@openai/agents-core/dist/utils/strictToolSchema.mjs",
  );
  return import(pathToFileURL(strictPath).href) as Promise<{
    prepareOpenAIStrictToolSchema: (schema: JsonSchema) => { schema: JsonSchema };
  }>;
}

function asObject(node: unknown): JsonSchema | undefined {
  return node && typeof node === "object" && !Array.isArray(node)
    ? (node as JsonSchema)
    : undefined;
}

/** Collect property schemas that are effectively empty `{}` (the PROVIDER_ERROR root cause). */
function findEmptyPropertySchemas(
  node: unknown,
  path = "$",
  out: string[] = [],
): string[] {
  const obj = asObject(node);
  if (!obj) return out;
  const props = asObject(obj.properties);
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      const child = asObject(value);
      if (child) {
        const meaningful = Object.keys(child).filter(
          (k) => k !== "description" && k !== "title",
        );
        if (meaningful.length === 0) {
          out.push(`${path}.properties.${key}`);
        }
        findEmptyPropertySchemas(child, `${path}.properties.${key}`, out);
      }
    }
  }
  for (const key of ["items", "additionalProperties"] as const) {
    if (key in obj) {
      findEmptyPropertySchemas(obj[key], `${path}.${key}`, out);
    }
  }
  for (const key of ["anyOf", "oneOf", "allOf"] as const) {
    const arr = obj[key];
    if (Array.isArray(arr)) {
      arr.forEach((item, i) =>
        findEmptyPropertySchemas(item, `${path}.${key}[${i}]`, out),
      );
    }
  }
  return out;
}

function findOpenRecordObjects(
  node: unknown,
  path = "$",
  out: Array<{ path: string; additionalProperties: unknown }> = [],
): Array<{ path: string; additionalProperties: unknown }> {
  const obj = asObject(node);
  if (!obj) return out;
  if (
    obj.type === "object" &&
    obj.additionalProperties !== undefined &&
    obj.additionalProperties !== false
  ) {
    out.push({ path, additionalProperties: obj.additionalProperties });
  }
  const props = asObject(obj.properties);
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      findOpenRecordObjects(value, `${path}.properties.${key}`, out);
    }
  }
  for (const key of ["items", "additionalProperties"] as const) {
    if (key in obj) findOpenRecordObjects(obj[key], `${path}.${key}`, out);
  }
  for (const key of ["anyOf", "oneOf", "allOf"] as const) {
    const arr = obj[key];
    if (Array.isArray(arr)) {
      arr.forEach((item, i) =>
        findOpenRecordObjects(item, `${path}.${key}[${i}]`, out),
      );
    }
  }
  return out;
}

function collectObjectRequiredGaps(
  node: unknown,
  path = "$",
  out: Array<{ path: string; missingFromRequired: string[] }> = [],
): Array<{ path: string; missingFromRequired: string[] }> {
  const obj = asObject(node);
  if (!obj) return out;
  const props = asObject(obj.properties);
  if (props) {
    const required = Array.isArray(obj.required)
      ? (obj.required as string[])
      : [];
    const missing = Object.keys(props).filter((k) => !required.includes(k));
    if (missing.length > 0) {
      out.push({ path, missingFromRequired: missing });
    }
    for (const [key, value] of Object.entries(props)) {
      collectObjectRequiredGaps(value, `${path}.properties.${key}`, out);
    }
  }
  if ("items" in obj) collectObjectRequiredGaps(obj.items, `${path}.items`, out);
  for (const key of ["anyOf", "oneOf", "allOf"] as const) {
    const arr = obj[key];
    if (Array.isArray(arr)) {
      arr.forEach((item, i) =>
        collectObjectRequiredGaps(item, `${path}.${key}[${i}]`, out),
      );
    }
  }
  return out;
}

function visualBlockKinds(schema: JsonSchema): string[] {
  const visual = asObject(asObject(schema.properties)?.visualComposition);
  const blocks = asObject(visual?.properties)?.blocks;
  const items = asObject(asObject(blocks)?.items);
  const anyOf = items?.anyOf;
  if (!Array.isArray(anyOf)) return [];
  return anyOf.map((variant) => {
    const kind = asObject(asObject(asObject(variant)?.properties)?.kind);
    return String(kind?.const ?? "");
  });
}

describe("Nora LIVE structured output schema (E05 visualComposition)", () => {
  it("rejects z.unknown visualComposition as empty JSON Schema property", async () => {
    const broken = z.object({
      replyDraft: z.string(),
      visualComposition: z.unknown().optional(),
    });
    const serialized = await convert(broken);
    const visual = asObject(serialized.schema.properties)?.visualComposition;
    expect(visual).toBeDefined();
    expect(
      Object.keys(visual ?? {}).filter((k) => k !== "description"),
    ).toEqual([]);
  });

  it("serializes VisualCompositionAgentOutputSchema without empty property schema", async () => {
    const wrapped = z.object({
      replyDraft: z.string(),
      visualComposition: VisualCompositionAgentOutputSchema.optional(),
    });
    const serialized = await convert(wrapped);
    const visual = asObject(serialized.schema.properties)?.visualComposition;
    expect(visual).toBeDefined();
    expect(Object.keys(visual ?? {}).length).toBeGreaterThan(0);
    expect(JSON.stringify(visual)).not.toBe("{}");
  });

  it("serializes full NoraTurnQualificationSchema without empty visualComposition", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    const visual = asObject(serialized.schema.properties)?.visualComposition;
    expect(visual).toBeDefined();
    const keys = Object.keys(visual ?? {}).filter(
      (k) => k !== "description",
    );
    expect(keys.length).toBeGreaterThan(0);
    expect(JSON.stringify(visual)).not.toBe("{}");
  });

  it("full D3 schema has no empty property schemas anywhere", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    expect(findEmptyPropertySchemas(serialized.schema)).toEqual([]);
  });

  it("full D3 schema is a root object with additionalProperties false", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    expect(serialized.type).toBe("json_schema");
    expect(serialized.schema.type).toBe("object");
    expect(serialized.schema.additionalProperties).toBe(false);
    expect(Array.isArray(serialized.schema.required)).toBe(true);
  });

  it("serializes all seven visual block variants under anyOf", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    expect(visualBlockKinds(serialized.schema).sort()).toEqual([
      "choices",
      "comparison",
      "references",
      "relations",
      "sequence",
      "synthesis",
      "text",
    ]);
  });

  it("criteria[].values serializes as open record (additionalProperties schema)", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    const opens = findOpenRecordObjects(serialized.schema);
    const valuesPath =
      "$.properties.visualComposition.properties.blocks.items.anyOf[1].properties.criteria.items.properties.values";
    const hit = opens.find((o) => o.path === valuesPath);
    expect(hit).toBeDefined();
    expect(hit?.additionalProperties).toEqual({ type: "string" });
  });

  it("documents Agents SDK convert path: strict=false for full D3 (optional fields)", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    // Production converter falls back when zodTextFormat cannot emit strict SO.
    expect(serialized.strict).toBe(false);
    const gaps = collectObjectRequiredGaps(serialized.schema);
    expect(gaps.some((g) => g.path === "$")).toBe(true);
    expect(
      gaps.find((g) => g.path === "$")?.missingFromRequired,
    ).toEqual(
      expect.arrayContaining([
        "clarifications",
        "continueChoices",
        "visualComposition",
      ]),
    );
  });

  it("openai zodTextFormat rejects full D3 (optional without nullable)", async () => {
    const { zodTextFormat } = await import("openai/helpers/zod");
    expect(() =>
      zodTextFormat(NoraTurnQualificationSchema as never, "output"),
    ).toThrow(/optional\(\).*nullable\(\)/);
  });

  it("Agents SDK prepareOpenAIStrictToolSchema rejects converted D3 schema", async () => {
    const serialized = await convert(NoraTurnQualificationSchema);
    const { prepareOpenAIStrictToolSchema } = await loadStrictHelpers();
    expect(() => prepareOpenAIStrictToolSchema(serialized.schema)).toThrow(
      /strict mode|additionalProperties|anyOf|optional/i,
    );
  });

  it("openai zodTextFormat rejects z.record criteria.values shape", async () => {
    const { zodTextFormat } = await import("openai/helpers/zod");
    const recordShape = z.object({
      values: z.record(z.string(), z.string().max(400)),
    });
    expect(() => zodTextFormat(recordShape as never, "output")).toThrow(
      /additionalProperties: false/,
    );
  });

  it("parseVisualComposition remains fail-closed for invalid composition", () => {
    expect(
      parseVisualComposition({
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [{ kind: "comparison", id: "c1", title: "t", alternatives: [] }],
      }),
    ).toBeNull();
  });

  it("parseVisualComposition accepts a minimal valid comparison with criteria values record", () => {
    const parsed = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "cmp1",
          title: "Options",
          textAlternative: "Deux options.",
          alternatives: [
            { id: "a", title: "A", summary: "Alpha" },
            { id: "b", title: "B", summary: "Beta" },
          ],
          criteria: [
            { id: "c1", label: "Effort", values: { a: "Faible", b: "Élevé" } },
          ],
        },
      ],
    });
    expect(parsed).not.toBeNull();
    expect(parsed?.blocks[0]?.kind).toBe("comparison");
  });

  it("text-only qualification without visualComposition remains valid", () => {
    const parsed = NoraTurnQualificationSchema.safeParse({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "goal",
      projectIntention: "intention",
      desiredOutcome: "outcome",
      initialScope: "scope",
      proposedProjectName: "",
      intents: [],
      replyDraft: "Réponse textuelle seule.",
    });
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.visualComposition).toBeUndefined();
    }
  });

  it("categorizes structured-output schema errors distinctly", () => {
    const c = categorizeProviderError(
      new Error("Invalid schema for response_format json_schema: empty object"),
    );
    expect(c.category).toBe("PROVIDER_SCHEMA_OR_OUTPUT");
    expect(c.category).not.toContain("Invalid schema");
  });
});
