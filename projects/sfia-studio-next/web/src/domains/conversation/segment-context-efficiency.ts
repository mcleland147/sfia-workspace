/**
 * A.4 / MP-14 — avoid re-injecting the full Journal listing on every conductor segment
 * when durable acquis + checkpoint context already carry continuity.
 * Non-authoritative trimming only; first segment and cold starts keep full bounded listing.
 */

/** Shown when bulk journal snippets are omitted on continuation — tools + acquis block remain. */
export const CONTINUATION_KNOWLEDGE_OMIT_MARKER =
  "[Journal D4 — listing borné omis sur ce segment : réutiliser le bloc acquis ci-dessous et les outils d4 si besoin]";

const JOURNAL_SNIPPET_PREFIX =
  /^(ACQUIS\[|POINT_OUVERT\[|POINT_OUVERT_REACTIVATE\[|SUJET\[|DERIVED_HIT\[)/;

export function isJournalKnowledgeSnippet(line: string): boolean {
  return JOURNAL_SNIPPET_PREFIX.test(line.trim());
}

export function isPreferredKnowledgeSnippet(line: string): boolean {
  return /\/PREFERRED\]|PREFERRED\]/.test(line);
}

/** Split pre-turn snippets into journal lines vs document/publication/auxiliary lines. */
export function partitionKnowledgeSnippets(snippets: string[] | undefined): {
  journal: string[];
  auxiliary: string[];
} {
  const all = snippets ?? [];
  const journal: string[] = [];
  const auxiliary: string[] = [];
  for (const line of all) {
    if (isJournalKnowledgeSnippet(line)) journal.push(line);
    else auxiliary.push(line);
  }
  return { journal, auxiliary };
}

/**
 * On conductor continuation with prior acquis, omit redundant journal listing.
 * Keeps Nora-selected PREFERRED rows when present (B.7).
 */
export function resolveContinuationKnowledgeSnippets(
  baseSnippets: string[] | undefined,
  opts: { useContinuation: boolean; hasPriorAcquis: boolean },
): string[] {
  const { journal, auxiliary } = partitionKnowledgeSnippets(baseSnippets);
  if (!opts.useContinuation || !opts.hasPriorAcquis) {
    return [...journal, ...auxiliary];
  }
  const preferred = journal.filter(isPreferredKnowledgeSnippet);
  if (preferred.length > 0) {
    return [CONTINUATION_KNOWLEDGE_OMIT_MARKER, ...preferred, ...auxiliary];
  }
  return [CONTINUATION_KNOWLEDGE_OMIT_MARKER, ...auxiliary];
}

/**
 * Recent messages are bounded on continuation — checkpoint + userText retain thread intent.
 */
export function resolveContinuationContextSnippets(
  baseSnippets: string[],
  opts: { useContinuation: boolean; hasPriorAcquis: boolean; maxRecent?: number },
): string[] {
  if (!opts.useContinuation || !opts.hasPriorAcquis) return baseSnippets;
  const max = opts.maxRecent ?? 2;
  return baseSnippets.slice(-Math.max(0, max));
}