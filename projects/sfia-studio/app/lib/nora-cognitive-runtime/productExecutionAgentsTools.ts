/**
 * Product Execution Context Agents tools — READ-ONLY, project-bound.
 * Pattern harvested from cycleJournalAgentsTools.ts.
 * Model cannot switch projectId / paths / SQL / credentials.
 */
import { tool } from "@openai/agents";
import type { NoraTurnBudget } from "./turnBudget";
import {
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
  claimToolSlot,
} from "./turnBudget";
import type {
  ProductExecutionContext,
  ProductExecutionContextQuery,
  ResolveProductExecutionContextResult,
} from "@/features/project-assistant/w2/resolveProductExecutionContext";

export type ProductExecutionToolContext = {
  readonly projectId: string;
  readonly resolve: (
    query: ProductExecutionContextQuery,
  ) => Promise<ResolveProductExecutionContextResult>;
  readonly budget?: NoraTurnBudget;
};

function requireProject(ctx: ProductExecutionToolContext): string | null {
  const p = ctx.projectId.trim();
  return p || null;
}

function boundContextJson(context: ProductExecutionContext): string {
  // Drop large artifact preview from default tool payload — keep summary + completeness.
  const bounded = {
    ...context,
    artifact: {
      kind: context.artifact.kind,
      present: context.artifact.present,
      completeness: context.artifact.completeness,
      preview:
        context.artifact.preview && context.artifact.preview.length > 800
          ? `${context.artifact.preview.slice(0, 800)}…`
          : context.artifact.preview,
    },
  };
  return JSON.stringify(bounded);
}

/**
 * Same-turn Product Resolution tools for Nora Agents Runner.
 * Bound to one projectId — server validates lineage.
 */
export function createProductExecutionAgentsTools(
  ctx: ProductExecutionToolContext,
) {
  const get = tool({
    name: "product_execution_context_get",
    description:
      "Resolve durable Product execution facts for the CURRENT Project only " +
      "(ExecutionContract, Attempt, CursorExecutionReport CLAIM, Artifact summary, " +
      "Evidence, ReviewBundle, ClaimEvaluation, post-Evidence Recommendation). " +
      "Use when the Pilot asks what happened in the last execution — do NOT ask the Pilot for Attempt/EC IDs Studio already holds. " +
      "READ-ONLY. Never Evidence authority. Cursor report is CLAIM not Evidence.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: [],
      properties: {
        selector: {
          type: "string",
          description:
            'Use "latest" (default), or omit. Do not invent foreign project ids.',
        },
        executionContractId: {
          type: "string",
          description:
            "Optional EC id known to belong to this Project. Rejected if foreign.",
        },
        attemptId: {
          type: "string",
          description:
            "Optional Attempt id known to belong to this Project. Rejected if foreign.",
        },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const projectId = requireProject(ctx);
      if (!projectId) {
        return JSON.stringify({
          ok: false,
          code: "PRODUCT_PROJECT_REQUIRED",
          context: null,
        });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      let query: ProductExecutionContextQuery = { kind: "latest" };
      if (typeof o.attemptId === "string" && o.attemptId.trim()) {
        query = { kind: "byAttemptId", attemptId: o.attemptId.trim() };
      } else if (
        typeof o.executionContractId === "string" &&
        o.executionContractId.trim()
      ) {
        query = {
          kind: "byExecutionContractId",
          executionContractId: o.executionContractId.trim(),
        };
      }
      const resolved = await ctx.resolve(query);
      if (!resolved.ok) {
        return JSON.stringify({
          ok: false,
          code: resolved.code,
          message: resolved.message,
          projectId,
          context: null,
        });
      }
      return JSON.stringify({
        ok: true,
        projectId,
        context: JSON.parse(boundContextJson(resolved.context)),
        disclosure:
          "Product Resolution projection — READ-ONLY; CursorExecutionReport=CLAIM; Attempt succeeded ≠ Product PROVEN.",
      });
    },
  });

  return [get];
}
