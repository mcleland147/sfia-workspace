/**
 * Product Execution Context Agents tools — project-bound.
 * `product_execution_context_get` is READ-ONLY.
 * `request_generic_execution_prepare` (D-ER-16…19, Option 2) SOLICITS Generic
 * PREPARE through the unique Product backend — it never authorizes, never
 * executes and never creates an ExecutionAttempt (PREPARE ≠ AUTHORIZE ≠ EXECUTE).
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
  /**
   * D-ER-16 — Product-injected solicitation of Generic PREPARE for the CURRENT
   * project. The model cannot choose projectId / cycle / paths / authority.
   * No task taxonomy (docs_write / REQUIRE_ARTIFACT / cycleTypeId) is accepted.
   * Result MUST be JSON-serializable and carry executionAttemptCreated:false.
   */
  readonly solicitPrepare?: (args: SolicitGenericPrepareToolArgs) => Promise<unknown>;
};

/** Mission fields Nora may supply — NON-AUTHORITATIVE, no required taxonomy. */
export type SolicitGenericPrepareToolArgs = {
  readonly objective?: string;
  readonly expectedOutcome?: string;
  readonly scope?: string;
  readonly contextNotes?: string;
  /** Conservative-only impact flags — can only make Product more cautious. */
  readonly impactSignals?: {
    readonly structuralChange?: boolean;
    readonly securityImpact?: boolean;
    readonly architectureImpact?: boolean;
    readonly dataImpact?: boolean;
    readonly irreversible?: boolean;
  };
};

export const GENERIC_PREPARE_TOOL_DISCLOSURE =
  "PREPARE ≠ AUTHORIZE ≠ EXECUTE — sollicitation Product uniquement; aucune autorisation, aucune exécution, aucun ExecutionAttempt créé par cet outil.";

function parseImpactSignals(
  v: unknown,
): SolicitGenericPrepareToolArgs["impactSignals"] {
  if (!v || typeof v !== "object") return undefined;
  const r = v as Record<string, unknown>;
  return {
    structuralChange: r.structuralChange === true,
    securityImpact: r.securityImpact === true,
    architectureImpact: r.architectureImpact === true,
    dataImpact: r.dataImpact === true,
    irreversible: r.irreversible === true,
  };
}

function str(v: unknown): string | undefined {
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}

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

  if (!ctx.solicitPrepare) return [get];

  const solicit = ctx.solicitPrepare;
  const prepareTool = tool({
    name: "request_generic_execution_prepare",
    description:
      "Solicit Generic PREPARE of an inspectable ExecutionContract for the CURRENT Project, " +
      "for any bounded mission (documentation, code, analysis, other) — no task category, no docs_write, " +
      "no REQUIRE_ARTIFACT, no cycle type needed, and no active cycle required. " +
      "Use when the Pilote wants Cursor to do real work and the mission is clear enough " +
      "(objective + expected outcome or scope). Product qualifies the mission server-side " +
      "(materiality, capabilities, protected paths); structural missions stay blocked until a HumanDecision. " +
      "This tool does NOT authorize and does NOT execute: PREPARE ≠ AUTHORIZE ≠ EXECUTE; " +
      "it never creates an ExecutionAttempt. Report the returned contract/status honestly " +
      "and never claim anything was executed.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: [],
      properties: {
        objective: {
          type: "string",
          description: "What the Pilote wants done (mission objective).",
        },
        expectedOutcome: {
          type: "string",
          description: "Observable expected result of the mission.",
        },
        scope: {
          type: "string",
          description:
            "Where / what is in scope (paths, area). Candidate only — Product resolves authority.",
        },
        contextNotes: {
          type: "string",
          description: "Optional short notes (constraints, risks, reservations).",
        },
        impactSignals: {
          type: "object",
          additionalProperties: false,
          description:
            "Optional: set a flag true ONLY if the mission is structural/security/architecture/data/irreversible. Product still decides.",
          properties: {
            structuralChange: { type: "boolean" },
            securityImpact: { type: "boolean" },
            architectureImpact: { type: "boolean" },
            dataImpact: { type: "boolean" },
            irreversible: { type: "boolean" },
          },
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
          executionAttemptCreated: false,
          disclosure: GENERIC_PREPARE_TOOL_DISCLOSURE,
        });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      try {
        const result = await solicit({
          objective: str(o.objective),
          expectedOutcome: str(o.expectedOutcome),
          scope: str(o.scope),
          contextNotes: str(o.contextNotes),
          impactSignals: parseImpactSignals(o.impactSignals),
        });
        const base =
          result && typeof result === "object"
            ? (result as Record<string, unknown>)
            : { ok: false, code: "PREPARE_SOLICITATION_EMPTY" };
        return JSON.stringify({
          ...base,
          projectId,
          // Forced — the tool can never report an Attempt.
          executionAttemptCreated: false,
          disclosure: GENERIC_PREPARE_TOOL_DISCLOSURE,
        });
      } catch {
        return JSON.stringify({
          ok: false,
          code: "PREPARE_SOLICITATION_FAILED",
          projectId,
          executionAttemptCreated: false,
          disclosure: GENERIC_PREPARE_TOOL_DISCLOSURE,
        });
      }
    },
  });

  return [get, prepareTool];
}
