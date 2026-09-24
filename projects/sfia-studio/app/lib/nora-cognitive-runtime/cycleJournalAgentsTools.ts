/**
 * Cycle Journal Agents tools — READ-ONLY same-turn retrieval.
 * Attached alongside SFIA route tools (like hosted web search).
 * NEVER Truth C / HumanDecision / Evidence authority.
 * Project/session/cycle bound server-side — model cannot switch projectId.
 */
import { tool } from "@openai/agents";
import type { ProductSqliteSession } from "./productSqliteSession";
import {
  buildCycleJournalCompactProjection,
  getCycleJournalEntry,
  searchCycleJournalIndex,
} from "./cycleJournalStore";
import { retrieveJournalEntrySourceExcerpts } from "./cycleJournalPrompt";
import type { NoraTurnBudget } from "./turnBudget";
import {
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
  claimToolSlot,
} from "./turnBudget";

export type CycleJournalToolContext = {
  readonly session: ProductSqliteSession;
  readonly cycleInstanceId: string;
  readonly budget?: NoraTurnBudget;
};

function requireCycle(ctx: CycleJournalToolContext): string | null {
  const c = ctx.cycleInstanceId.trim();
  return c || null;
}

/**
 * Same-turn Journal tools for Nora Agents Runner.
 * Bound to one ProductSqliteSession + cycleInstanceId.
 */
export function createCycleJournalAgentsTools(ctx: CycleJournalToolContext) {
  const search = tool({
    name: "cycle_journal_search",
    description:
      "Search the active Cycle Journal index (all subjects of this cycle, not only the compact working set). " +
      "Use BEFORE CREATE when a theme may already exist. Returns bounded id/title/status metadata — never Evidence or Truth C.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["query"],
      properties: {
        query: {
          type: "string",
          description:
            "Substring match on title/summary, or empty string to list recent index rows.",
        },
        includeNonActive: {
          type: "boolean",
          description: "When true, include archived/merged/split. Default false.",
        },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const cycle = requireCycle(ctx);
      if (!cycle) {
        return JSON.stringify({
          ok: false,
          code: "JOURNAL_CYCLE_REQUIRED",
          entries: [],
        });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      const query = typeof o.query === "string" ? o.query : "";
      const includeNonActive = o.includeNonActive === true;
      const entries = searchCycleJournalIndex(ctx.session, cycle, {
        query,
        includeNonActive,
        maxResults: 40,
      });
      return JSON.stringify({
        ok: true,
        cycleInstanceId: cycle,
        count: entries.length,
        entries,
        disclosure:
          "Cycle Journal index only — projection, not Truth C / HumanDecision / Evidence.",
      });
    },
  });

  const getEntry = tool({
    name: "cycle_journal_get_entry",
    description:
      "Fetch one Cycle Journal subject by journalEntryId (same cycle only). Use to recover an older subject before UPDATE.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["journalEntryId"],
      properties: {
        journalEntryId: { type: "string" },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const cycle = requireCycle(ctx);
      if (!cycle) {
        return JSON.stringify({ ok: false, code: "JOURNAL_CYCLE_REQUIRED" });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      const id =
        typeof o.journalEntryId === "string" ? o.journalEntryId.trim() : "";
      if (!id) {
        return JSON.stringify({ ok: false, code: "JOURNAL_ENTRY_ID_REQUIRED" });
      }
      const entry = getCycleJournalEntry(ctx.session, id);
      if (!entry || entry.cycleInstanceId !== cycle) {
        return JSON.stringify({
          ok: false,
          code: "JOURNAL_ENTRY_NOT_FOUND",
          journalEntryId: id,
        });
      }
      return JSON.stringify({
        ok: true,
        entry: {
          journalEntryId: entry.journalEntryId,
          topicOrdinal: entry.topicOrdinal,
          title: entry.title,
          currentSummary: entry.currentSummary,
          stabilizedPoints: entry.stabilizedPoints,
          openPoints: entry.openPoints,
          status: entry.status,
          sourceTurnCount: entry.sourceTurnRefs.length,
          sourceTurnRefs: entry.sourceTurnRefs.slice(-12),
          updatedAt: entry.updatedAt,
        },
        disclosure:
          "Cycle Journal entry — projection only; not Evidence / Truth C.",
      });
    },
  });

  const getSources = tool({
    name: "cycle_journal_get_sources",
    description:
      "Retrieve bounded Pilot transcript excerpts linked to a Journal subject. Use when the compact summary lacks needed detail. Not Evidence.",
    parameters: {
      type: "object",
      additionalProperties: false,
      required: ["journalEntryId"],
      properties: {
        journalEntryId: { type: "string" },
      },
    } as never,
    strict: false,
    execute: async (args: unknown) => {
      if (ctx.budget && !claimToolSlot(ctx.budget)) {
        return TOOL_TURN_BUDGET_EXCEEDED_RESULT;
      }
      const cycle = requireCycle(ctx);
      if (!cycle) {
        return JSON.stringify({ ok: false, code: "JOURNAL_CYCLE_REQUIRED" });
      }
      const o =
        args && typeof args === "object"
          ? (args as Record<string, unknown>)
          : {};
      const id =
        typeof o.journalEntryId === "string" ? o.journalEntryId.trim() : "";
      if (!id) {
        return JSON.stringify({ ok: false, code: "JOURNAL_ENTRY_ID_REQUIRED" });
      }
      const entry = getCycleJournalEntry(ctx.session, id);
      if (!entry || entry.cycleInstanceId !== cycle) {
        return JSON.stringify({
          ok: false,
          code: "JOURNAL_ENTRY_NOT_FOUND",
          journalEntryId: id,
        });
      }
      const excerpts = retrieveJournalEntrySourceExcerpts(ctx.session, id);
      return JSON.stringify({
        ok: excerpts.ok,
        journalEntryId: id,
        title: entry.title,
        excerpts: excerpts.excerpts,
        code: excerpts.code,
        disclosure:
          "Pilot transcript excerpts only — not Evidence / Truth C / HumanDecision.",
      });
    },
  });

  return [search, getEntry, getSources];
}

/** Test helper — working-set vs full index sizes. */
export function journalWorkingSetVsIndexSizes(
  session: ProductSqliteSession,
  cycleInstanceId: string,
): { workingSet: number; indexActive: number } {
  const working = buildCycleJournalCompactProjection(
    session,
    cycleInstanceId,
    24,
  );
  const index = searchCycleJournalIndex(session, cycleInstanceId, {
    query: "",
    includeNonActive: false,
    maxResults: 200,
  });
  return { workingSet: working.entries.length, indexActive: index.length };
}
