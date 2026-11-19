/**
 * Pure Journal editorial helpers — safe for Client Components (no DB / node: imports).
 */

/**
 * Storage soft ceiling — strip narrative preamble; do not aggressively truncate truth in DB.
 * Display density (≈160 / bullet) is applied in the Journal UI only.
 */
export const KNOWLEDGE_STATEMENT_STORAGE_MAX = 2000;
/** @deprecated alias — prefer KNOWLEDGE_STATEMENT_STORAGE_MAX */
export const KNOWLEDGE_STATEMENT_SOFT_MAX = KNOWLEDGE_STATEMENT_STORAGE_MAX;
/** Nominal Journal bullet display length (restitution only). */
export const KNOWLEDGE_BULLET_DISPLAY_MAX = 160;
export const SUBJECT_SUMMARY_TARGET_MIN = 400;
export const SUBJECT_SUMMARY_TARGET_MAX = 650;
export const JOURNAL_ACQUIS_DISPLAY_LIMIT = 6;
export const JOURNAL_OPEN_POINT_DISPLAY_LIMIT = 4;

export function editorialStripPreamble(raw: string): string {
  let s = raw.replace(/\s+/g, " ").trim();
  s = s.replace(
    /^(selon\s+(le\s+pilote|les\s+nouvelles\s+précisions\s+du\s+pilote|les\s+précisions\s+du\s+pilote)|le\s+pilote\s+précise\s+que|nous\s+avons\s+appris\s+que|dans\s+le\s+message\s+précédent)\s*[,:]?\s*/i,
    "",
  );
  return s;
}

export function editorialCompactKnowledgeStatement(
  raw: string,
  maxLen = KNOWLEDGE_STATEMENT_STORAGE_MAX,
): string {
  const s = editorialStripPreamble(raw);
  if (s.length <= maxLen) return s;
  const cut = s.slice(0, maxLen);
  const at = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "), cut.lastIndexOf(", "));
  if (at >= Math.floor(maxLen * 0.55)) return cut.slice(0, at + 1).trim();
  return `${cut.replace(/\s+\S*$/, "").trim()}…`;
}

/** Display-only compaction for Journal bullets — never write this back as authority. */
export function editorialDisplayBullet(
  raw: string,
  maxLen = KNOWLEDGE_BULLET_DISPLAY_MAX,
): string {
  return editorialCompactKnowledgeStatement(raw, maxLen);
}

/**
 * Prefer durable, distinct CURRENT acquis for nominal Journal view (not merely last N).
 * Critical extras remain in `overflow` for secondary access — never deleted.
 */
export function prioritizeAcquisForJournalDisplay<T extends { id: string; statement: string }>(
  rows: T[],
  limit = JOURNAL_ACQUIS_DISPLAY_LIMIT,
): { visible: T[]; overflow: T[] } {
  if (rows.length <= limit) return { visible: rows, overflow: [] };
  const scored = rows.map((row, index) => {
    const s = editorialStripPreamble(row.statement).toLowerCase();
    let score = 0;
    if (/\d/.test(s)) score += 3;
    if (/(actuellement|aujourd|incident|correction|responsabilité|interchange)/i.test(s)) {
      score += 2;
    }
    if (s.length >= 40 && s.length <= 220) score += 1;
    score += Math.max(0, (rows.length - index) * 0.01);
    return { row, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const visibleIds = new Set(scored.slice(0, limit).map((x) => x.row.id));
  const visible = rows.filter((r) => visibleIds.has(r.id));
  const overflow = rows.filter((r) => !visibleIds.has(r.id));
  return { visible, overflow };
}

export function prioritizeOpenPointsForJournalDisplay<T extends { id: string; statement: string }>(
  rows: T[],
  limit = JOURNAL_OPEN_POINT_DISPLAY_LIMIT,
): { visible: T[]; overflow: T[] } {
  if (rows.length <= limit) return { visible: rows, overflow: [] };
  const seen = new Set<string>();
  const unique: T[] = [];
  for (const row of rows) {
    const key = editorialStripPreamble(row.statement)
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim()
      .slice(0, 80);
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(row);
  }
  return {
    visible: unique.slice(0, limit),
    overflow: rows.filter((r) => !unique.slice(0, limit).some((v) => v.id === r.id)),
  };
}

/**
 * Deterministic synthesis from CURRENT knowledge when Nora capitalises ACQUIS
 * without a SUBJECT revision intent — D4-owned, versioned via appendSubjectSummaryRevision.
 */
export function composeSubjectSummaryFromCurrentKnowledge(input: {
  subjectTitle: string;
  acquisStatements: string[];
  openPointStatements?: string[];
}): string {
  const title = input.subjectTitle.replace(/\s+/g, " ").trim() || "Sujet";
  const facts = input.acquisStatements
    .map((s) => editorialStripPreamble(s))
    .filter((s) => s.length >= 12);
  const opens = (input.openPointStatements ?? [])
    .map((s) => editorialStripPreamble(s))
    .filter((s) => s.length >= 8);
  const { visible: topFacts } = prioritizeAcquisForJournalDisplay(
    facts.map((statement, i) => ({ id: `f${i}`, statement })),
    5,
  );
  const factBits = topFacts.map((f) => f.statement.replace(/\.$/, ""));
  const openBit = opens[0]?.replace(/\.$/, "");
  let body =
    factBits.length === 0
      ? `${title} : compréhension encore en construction à partir des échanges.`
      : `${title} — ${factBits.join(" ; ")}.`;
  if (openBit) {
    body += ` Point encore ouvert : ${openBit}.`;
  } else {
    body += " Orientation : consolider les faits sourcés et trancher les responsabilités restantes.";
  }
  body = body.replace(/\s+/g, " ").trim();
  if (body.length < SUBJECT_SUMMARY_TARGET_MIN && factBits.length > 0) {
    body += ` Ces éléments reflètent l'état courant capitalisé, distinct des situations historiques.`;
  }
  if (body.length > SUBJECT_SUMMARY_TARGET_MAX) {
    const cut = body.slice(0, SUBJECT_SUMMARY_TARGET_MAX);
    const at = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "));
    body =
      at >= Math.floor(SUBJECT_SUMMARY_TARGET_MAX * 0.55)
        ? cut.slice(0, at + 1).trim()
        : `${cut.replace(/\s+\S*$/, "").trim()}…`;
  }
  return body;
}
