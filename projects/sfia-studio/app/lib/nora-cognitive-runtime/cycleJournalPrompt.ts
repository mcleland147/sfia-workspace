/**
 * Compact Cycle Journal prompt projection + targeted source retrieval.
 * NEVER injects full transcript by default. Journal ≠ Truth C.
 */
import type { ProductSqliteSession } from "./productSqliteSession";
import {
  buildCycleJournalCompactProjection,
  retrievePilotTurnsByRefs,
  getCycleJournalEntry,
} from "./cycleJournalStore";
import type { CycleJournalCompactProjection } from "./cycleJournalTypes";

const MAX_SUMMARY_CHARS = 280;
const MAX_EXCERPT_CHARS = 400;
const MAX_RETRIEVED_TURNS = 6;

export function formatCycleJournalCompactForPrompt(
  compact: CycleJournalCompactProjection,
): string {
  const lines = [
    "=== JOURNAL DU CYCLE (projection sémantique — PAS Truth C) ===",
    "Vue compacte des sujets du cycle actif. Ce n'est PAS une HumanDecision,",
    "PAS Evidence, PAS Recommendation autoritaire, PAS LPS. Identités stables.",
    `cycleInstanceId=${compact.cycleInstanceId}`,
    `sujets_actifs=${compact.entries.length}`,
  ];
  if (compact.entries.length === 0) {
    lines.push("(aucun sujet actif — CREATE si un thème durable émerge)");
    lines.push("");
    return lines.join("\n");
  }
  for (const e of compact.entries) {
    const summary =
      e.currentSummary.length > MAX_SUMMARY_CHARS
        ? `${e.currentSummary.slice(0, MAX_SUMMARY_CHARS)}…`
        : e.currentSummary;
    lines.push(
      `- [${e.journalEntryId}] ${e.title} · refs=${e.sourceTurnCount} · ${summary}`,
    );
  }
  lines.push(
    "Si le sujet revient : UPDATE le même journalEntryId (même identité).",
    "CREATE seulement pour un nouveau thème ; MERGE/SPLIT/ARCHIVE explicites.",
    "N'invente pas d'ids ; targetEntryId = id listé ci-dessus ou null pour CREATE.",
    "Working set borné : si le thème peut déjà exister hors de cette liste,",
    "appelle d'abord l'outil cycle_journal_search (index du cycle) AVANT CREATE.",
    "Pour le détail d'un sujet : cycle_journal_get_entry / cycle_journal_get_sources.",
    "Ces outils relisent le transcript durable — ce n'est PAS Evidence / Truth C.",
    "",
  );
  return lines.join("\n");
}

/**
 * Targeted retrieval of pilot transcript turns for one journal entry.
 * Bounded — never dumps the full transcript.
 */
export function retrieveJournalEntrySourceExcerpts(
  session: ProductSqliteSession,
  journalEntryId: string,
  options?: { maxTurns?: number; maxCharsPerTurn?: number },
): {
  ok: boolean;
  journalEntryId: string;
  excerpts: { turnId: string; role: string; content: string }[];
  code: string | null;
} {
  const entry = getCycleJournalEntry(session, journalEntryId);
  if (!entry) {
    return {
      ok: false,
      journalEntryId,
      excerpts: [],
      code: "JOURNAL_ENTRY_NOT_FOUND",
    };
  }
  const maxTurns = options?.maxTurns ?? MAX_RETRIEVED_TURNS;
  const maxChars = options?.maxCharsPerTurn ?? MAX_EXCERPT_CHARS;
  const refs = entry.sourceTurnRefs.slice(-maxTurns);
  const turns = retrievePilotTurnsByRefs(session, refs);
  return {
    ok: true,
    journalEntryId,
    excerpts: turns.map((t) => ({
      turnId: t.turnId,
      role: t.role,
      content:
        t.content.length > maxChars
          ? `${t.content.slice(0, maxChars)}…`
          : t.content,
    })),
    code: null,
  };
}

export function loadCycleJournalCompactForPrompt(
  session: ProductSqliteSession,
  cycleInstanceId: string | null | undefined,
): string | null {
  const cycle = cycleInstanceId?.trim();
  if (!cycle) return null;
  const compact = buildCycleJournalCompactProjection(session, cycle);
  return formatCycleJournalCompactForPrompt(compact);
}
