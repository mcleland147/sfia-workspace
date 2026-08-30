/**
 * Thin SDK function-tool adapters → existing SFIA routeToolCall.
 * SDK visibility ≠ effective authority. Business authorization stays in SFIA.
 *
 * ToolDefinition.parameters are supplied as raw JSON Schema (strict:false)
 * so min/max/required/additionalProperties are preserved without a lossy
 * JSON-Schema→Zod converter.
 */
import { randomUUID } from "node:crypto";
import { tool } from "@openai/agents";
import type { EventSink } from "@/lib/platform/observability/eventSink";
import {
  CONTROL_TOWER_TOOL_DEFINITIONS,
  routeToolCall,
  toolResultForModel,
  type ToolDefinition,
} from "@/lib/platform/tools";
import type { NoraTurnBudget } from "./turnBudget";
import {
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
  claimToolSlot,
} from "./turnBudget";

/**
 * Generic cognitive boundary notice — not a Studio business-authority engine.
 * Product constraints come from Studio-supplied system instructions.
 */
const SFIA_COGNITIVE_BOUNDARY =
  "Nora cognitive runtime: Session/history is conversational continuity only. " +
  "Recommendations remain recommendations — never HumanDecision. " +
  "Do not invent HumanDecision, Confirmation, Truth C, or effective authority. " +
  "Obey Studio-supplied current system constraints. " +
  "Tool exposure is not business authorization. " +
  "Product state and authorization are owned by Studio outside this runtime.";

export function sfiaBoundaryInstructions(): string {
  return SFIA_COGNITIVE_BOUNDARY;
}

export type SfiaJsonObjectSchema = {
  type: "object";
  properties: Record<string, unknown>;
  required?: string[];
  additionalProperties?: boolean;
  description?: string;
  [key: string]: unknown;
};

/**
 * Fail-closed: ToolDefinition.parameters must be a JSON object schema usable by
 * Agents SDK raw parameters (no silent unknown weakening).
 */
export function assertRawJsonObjectSchema(
  name: string,
  parameters: Record<string, unknown>,
): SfiaJsonObjectSchema {
  if (parameters.type !== "object") {
    throw new Error(
      `SFIA_TOOL_SCHEMA_INVALID:${name}: root type must be "object"`,
    );
  }
  if (
    typeof parameters.properties !== "object" ||
    parameters.properties === null ||
    Array.isArray(parameters.properties)
  ) {
    throw new Error(
      `SFIA_TOOL_SCHEMA_INVALID:${name}: properties must be an object`,
    );
  }
  if (
    "additionalProperties" in parameters &&
    typeof parameters.additionalProperties !== "boolean"
  ) {
    throw new Error(
      `SFIA_TOOL_SCHEMA_INVALID:${name}: additionalProperties must be boolean when present`,
    );
  }
  if (
    "required" in parameters &&
    parameters.required !== undefined &&
    !Array.isArray(parameters.required)
  ) {
    throw new Error(
      `SFIA_TOOL_SCHEMA_INVALID:${name}: required must be an array when present`,
    );
  }
  return parameters as SfiaJsonObjectSchema;
}

export type SfiaAgentsToolOptions = {
  correlationId: string;
  workspaceRoot?: string;
  sink?: EventSink;
  definitions?: ToolDefinition[];
  /** Shared run budget — per-model-turn tool slots (CORR-OPT-C-02). */
  budget?: NoraTurnBudget;
};

/** Wrap each exposable Control Tower tool; execute only via routeToolCall. */
export function createSfiaRouteToolAdapters(
  options: SfiaAgentsToolOptions,
) {
  const defs = options.definitions ?? CONTROL_TOWER_TOOL_DEFINITIONS;
  return defs.map((def) => {
    const parameters = assertRawJsonObjectSchema(def.name, def.parameters);
    return tool({
      name: def.name,
      description: def.description,
      // Preserve wire schema (min/max/required/additionalProperties).
      // strict:false avoids OpenAI-strict rewriting that nullable-wraps optionals.
      // Cast: SDK NonStrict typing requires additionalProperties:true, but Studio
      // ToolDefinitions correctly use additionalProperties:false and runtime accepts them.
      parameters: parameters as never,
      strict: false,
      execute: async (args: unknown) => {
        if (options.budget && !claimToolSlot(options.budget)) {
          return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
        }
        const result = await routeToolCall(
          {
            toolCallId: `call_${randomUUID().slice(0, 12)}`,
            name: def.name,
            arguments:
              args && typeof args === "object"
                ? (args as Record<string, unknown>)
                : {},
            sessionId: options.correlationId,
          },
          {
            sink: options.sink,
            workspaceRoot: options.workspaceRoot,
          },
        );
        return toolResultForModel(result);
      },
    });
  });
}

/** Inspect SDK tool parameters for schema-fidelity proofs. */
export function sdkToolParametersOf(
  adapters: ReturnType<typeof createSfiaRouteToolAdapters>,
  name: string,
): Record<string, unknown> | undefined {
  const found = adapters.find((t) => t.name === name);
  return found?.parameters as Record<string, unknown> | undefined;
}

/** Direct routeToolCall for deterministic parity (same SFIA spine as Runner). */
export async function invokeSfiaToolViaRoute(
  name: string,
  args: Record<string, unknown> = {},
  options?: { workspaceRoot?: string; correlationId?: string; sink?: EventSink },
): Promise<string> {
  const result = await routeToolCall(
    {
      toolCallId: `call_${randomUUID().slice(0, 12)}`,
      name,
      arguments: args,
      sessionId: options?.correlationId ?? "nora-cognitive-direct",
    },
    { workspaceRoot: options?.workspaceRoot, sink: options?.sink },
  );
  return toolResultForModel(result);
}
