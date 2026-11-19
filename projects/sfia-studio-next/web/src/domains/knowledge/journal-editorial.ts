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

/** Soft display targets for decision editorial slots (never rewrite D6 statement in DB). */
export const DECISION_TITLE_WORD_TARGET = 8;
export const DECISION_SUMMARY_LINE_TARGET = 2;

function wordCount(s: string): number {
  return s.split(/\s+/).filter(Boolean).length;
}

function capitalizeFr(s: string): string {
  const t = s.trim();
  if (!t) return t;
  return t.charAt(0).toLocaleUpperCase("fr-FR") + t.slice(1);
}

/**
 * Display title for Journal Décisions — never mutates D6.
 * Prefer a short human objectRef; else derive a short head from the official statement
 * without inventing a new rule (clause before conditions).
 */
export function composeDecisionDisplayTitle(input: {
  statement: string;
  objectRef?: string | null;
}): string {
  const ref = (input.objectRef ?? "").trim();
  if (
    ref &&
    ref.length <= 80 &&
    wordCount(ref) <= 12 &&
    !/^(dec_|msg_|proj_|cmd_)/i.test(ref)
  ) {
    return ref;
  }
  let s = editorialStripPreamble(input.statement).replace(/\s+/g, " ").trim();
  const pour = s.match(/^pour\s+([^,]+),\s*(.+)$/i);
  if (pour) s = pour[2]!.trim();
  // Stop before conditionals that carry the rule body.
  const cond = s.search(
    /\s+(?:que\s+lorsque|lorsque|à\s+condition\s+que|si\s+et\s+seulement|sous\s+réserve|après\s+que)\b/i,
  );
  if (cond >= 24) s = s.slice(0, cond).trim();
  const period = s.search(/[.!;]/);
  if (period >= 24) s = s.slice(0, period).trim();
  // Pattern: « une X ne sera considérée comme Y » → « Conditions de Y d'une X »
  const considered = s.match(
    /\b(?:une|la|le|les)\s+(\p{L}[\p{L}\-]*)\s+ne sera(?:it)?\s+considérée?\s+comme\s+(\p{L}[\p{L}\-]*)/iu,
  );
  if (considered) {
    const noun = considered[1]!;
    const asWhat = considered[2]!;
    const asNoun =
      asWhat.endsWith("ée") || asWhat.endsWith("é")
        ? asWhat.replace(/ée?$/i, "ation")
        : asWhat;
    return capitalizeFr(`Conditions de ${asNoun} d'une ${noun}`);
  }
  const words = s.split(/\s+/).filter(Boolean);
  if (words.length <= DECISION_TITLE_WORD_TARGET) return capitalizeFr(s.replace(/\.$/, ""));
  return capitalizeFr(words.slice(0, DECISION_TITLE_WORD_TARGET).join(" "));
}

/**
 * Short résumé distinct from the official choice — framing / scope only when present.
 */
export function composeDecisionDisplaySummary(input: {
  statement: string;
  explanationMarkdown?: string | null;
}): string {
  const expl = (input.explanationMarkdown ?? "").trim();
  if (expl) {
    const line =
      expl
        .split(/\r?\n/)
        .map((l) => l.replace(/^#+\s*/, "").replace(/[*_`]/g, "").trim())
        .find((l) => l.length > 0) ?? "";
    if (line) return editorialDisplayBullet(line, 180);
  }
  const s = input.statement.replace(/\s+/g, " ").trim();
  const pour = s.match(/^pour\s+([^,]+),/i);
  if (pour) {
    return capitalizeFr(pour[1]!.trim());
  }
  // First sentence only when it is clearly framing (short) and not the whole rule.
  const period = s.indexOf(". ");
  if (period > 20 && period < 140 && period < s.length * 0.45) {
    return s.slice(0, period + 1).trim();
  }
  return editorialDisplayBullet(s, 160);
}

/** Official choice text for display — full D6 statement (authority echo). */
export function composeDecisionChoiceText(statement: string): string {
  return statement.replace(/\s+/g, " ").trim();
}

/**
 * Extract a sourced motivation excerpt from a Pilote message body when explicitly marked.
 * Returns null when absent — never invents motivation.
 */
export function extractSourcedMotivationFromMessage(content: string): string | null {
  const raw = content.replace(/\r\n/g, "\n").trim();
  if (!raw) return null;
  const marked = raw.match(
    /\*\*Motivation\s*:\*\*\s*([\s\S]+?)(?=\n\s*\n\s*\*\*|\n\s*#|$)/i,
  ) ?? raw.match(/Motivation\s*:\s*([\s\S]+?)(?=\n\s*\n|$)/i);
  if (!marked?.[1]) return null;
  const text = marked[1].replace(/\*+/g, "").replace(/\s+/g, " ").trim();
  if (text.length < 24) return null;
  return editorialCompactKnowledgeStatement(text, 600);
}

export function decisionScopeDisplayLabel(scope: string): string {
  const s = scope.trim().toUpperCase();
  if (s === "PROJECT") return "Projet";
  if (s === "CYCLE") return "Cycle";
  if (s === "METHOD") return "Méthode";
  if (s === "TRAJECTORY") return "Trajectoire";
  return scope.trim() || "Portée D6";
}

export function decisionKindDisplayLabel(kind: string): string {
  const k = kind.trim().toUpperCase();
  if (k === "RECORD_DECISION") return "Arbitrage structurant";
  if (k === "REVISE_DECISION") return "Révision d'arbitrage";
  if (k === "REVOKE_DECISION") return "Révocation";
  if (k === "APPLY_RESTRICTION") return "Restriction";
  if (k === "LIFT_RESTRICTION") return "Levée de restriction";
  if (k.includes("CYCLE")) return "Cycle";
  if (k.includes("METHOD")) return "Méthode";
  if (k.includes("TRAJECTORY")) return "Trajectoire";
  return kind.trim() || "Décision";
}

export function decisionListMetaLabel(input: {
  kind: string;
  scope: string;
  supersededByDecisionId?: string | null;
}): string {
  if (input.supersededByDecisionId) {
    return `Décision historique · ${decisionKindDisplayLabel(input.kind)}`;
  }
  return `${decisionKindDisplayLabel(input.kind)} · ${decisionScopeDisplayLabel(input.scope)}`;
}
