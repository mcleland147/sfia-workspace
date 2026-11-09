/**
 * Chat-first D4 act qualification — create vs revise vs none.
 * Server authority only; Nora text never creates or revises alone.
 */

export type DocumentActKind = "CREATE" | "REVISE" | "NONE";

export type QualifiedDocumentAct =
  | { kind: "NONE"; reason?: string }
  | { kind: "CREATE" }
  | {
      kind: "REVISE";
      documentHint: string | null;
      sectionHint: string | null;
    };

const CREATE_VERB_RE = /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b/gi;
const REVISE_VERB_RE =
  /\b(révise|reviser|réviser|revise|modifie|modifier|mets?\s+à\s+jour|corrige|corriger)\b/gi;
/** Singular or plural documentary objects (CREATE/REVISE recognition). */
const DOC_OBJECT_RE = /\b(documents?|notes?|synthèses?|rapports?|spécifications?)\b/i;
const SECTION_RE =
  /\b(?:section|partie|chapitre)\s+(\d+|[A-Za-zÀ-ÿ][\wÀ-ÿ-]*)\b/i;
const DOC_ID_RE = /\b(doc_[a-z0-9-]+)\b/i;

/** Close create↔object pair (short formulations). */
const CREATE_PAIR_CLOSE_RE =
  /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,48}\b(documents?|notes?|synthèses?|rapports?|spécifications?)\b/i;
const CREATE_PLEASE_RE =
  /\b(documents?|note de synthèse|rapports?)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i;

/**
 * Complements allowed between a CREATE verb and a documentary object
 * (location, novelty, title framing) — not a free-form widen of authority.
 */
const CREATE_COMPLEMENT_TOKEN_RE =
  /^(?:et|ou|puis|dans|sur|pour|de|du|des|le|la|les|un|une|ce|cette|ces|au|aux|en|par|avec|vers|sous|interne|internes|studio|projet|campusflow|recette|nouveau|nouvelle|nouveaux|nouvelles|intitulé|intitulée|intitulés|intitulées|nommé|nommée|appelé|appelée|enregistre|enregistrer|sauvegarde|sauvegarder|persist|persiste|persister|d4|documents?|notes?|synthèses?|rapports?|spécifications?|titre|espace)$/i;

/**
 * Extract a document designation (id or cited title) from the raw Pilote text.
 * Quotes are data here — never execution authority.
 */
export function extractDocumentDesignation(rawText: string): {
  documentId: string | null;
  titleHint: string | null;
  sectionHint: string | null;
} {
  const idMatch = rawText.match(DOC_ID_RE);
  const sectionMatch = rawText.match(SECTION_RE);

  // document … «Title» / document "Title" — allow short qualifiers between noun and quote
  // (e.g. «document D4 existant «Références…»»).
  const quoted =
    rawText.match(
      /\b(?:document|note|synthèse|rapport|spécification)\b[\s\S]{0,48}?[«“"]([^»”"\n]{2,120})[»”"]/i,
    ) ||
    rawText.match(
      /\b(?:document|note|synthèse|rapport|spécification)\b[\s\S]{0,48}?['‘]([^’'\n]{2,120})['’]/i,
    );

  // Fallback: unquoted title after document (stop at punctuation / line break)
  const unquoted = !quoted
    ? rawText.match(
        /\b(?:document|note|synthèse|rapport)\s+(?!doc_)([^\n.!?]{2,120}?)(?=\s+(?:en\s+modifiant|en\s+révisant|dans\b|et\b|mais\b|,|\.|$))/i,
      )
    : null;

  const titleHint = (quoted?.[1] ?? unquoted?.[1] ?? null)?.trim() || null;
  return {
    documentId: idMatch?.[1] ?? null,
    titleHint,
    sectionHint: sectionMatch?.[1] ?? null,
  };
}

/**
 * Authority strip: remove fenced / quoted material that must not authorize writes.
 * Document designations are neutralized to a placeholder so «document» remains visible
 * for act qualification without importing quoted imperatives as authority.
 */
export function stripNonAuthoritativeSpans(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(
      /\b(document|note|synthèse|rapport|spécification)\b[\s\S]{0,48}?[«“"][^»”"\n]{1,120}[»”"]/gi,
      "$1 [désigné]",
    )
    .replace(
      /\b(document|note|synthèse|rapport|spécification)\b[\s\S]{0,48}?['‘][^’'\n]{1,120}['’]/gi,
      "$1 [désigné]",
    )
    .replace(/«[^»]*»/g, " ")
    .replace(/"[^"]*"/g, " ")
    .replace(/'[^']*'/g, " ");
}

/** Normalize titles for non-destructive comparison. */
export function normalizeDocumentTitle(title: string): string {
  return title
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[«»""'']/g, "")
    .replace(/[–—−]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function findVerbMatches(text: string, re: RegExp): Array<{ index: number; text: string }> {
  const out: Array<{ index: number; text: string }> = [];
  const r = new RegExp(re.source, re.flags.includes("g") ? re.flags : `${re.flags}g`);
  let m: RegExpExecArray | null;
  while ((m = r.exec(text)) !== null) {
    out.push({ index: m.index, text: m[0]! });
  }
  return out;
}

/** True when a matched verb is under a local ne … pas/aucun / n'… pas negation. */
export function isVerbNegated(text: string, verbIndex: number, verbLen: number): boolean {
  const windowStart = Math.max(0, verbIndex - 48);
  const before = text.slice(windowStart, verbIndex);
  const afterSpan = text.slice(verbIndex, Math.min(text.length, verbIndex + verbLen + 40));
  const after = text.slice(verbIndex, Math.min(text.length, verbIndex + verbLen + 24));
  const negParticle = /\b(?:pas|aucun|aucune)\b/i;
  const nePas =
    /\bne\b[\s\S]{0,40}$/i.test(before) &&
    (negParticle.test(after) || negParticle.test(afterSpan));
  const nApostrophe =
    /\bn['’](?:enregistre|écris|écrit|autorise)\b/i.test(text.slice(windowStart, verbIndex + verbLen + 20));
  // « sans (le) créer / sans le modifier » — local prohibition of that verb, not authority.
  const sansVerb =
    /\bsans\s+(?:le\s+|la\s+|l['’]|les\s+|un\s+|une\s+)?$/i.test(before) &&
    /^(?:créer|crée|rédiger|rédige|écrire|écris|produire|produis|enregistrer|enregistre|sauvegarder|sauvegarde|modifier|modifie|réviser|révise)\b/i.test(
      text.slice(verbIndex),
    );
  return nePas || nApostrophe || sansVerb;
}

function hasPositiveVerb(
  text: string,
  re: RegExp,
): boolean {
  for (const m of findVerbMatches(text, re)) {
    if (!isVerbNegated(text, m.index, m.text.length)) return true;
  }
  return false;
}

function hasOnlyNegatedVerbs(text: string, re: RegExp): boolean {
  const matches = findVerbMatches(text, re);
  if (matches.length === 0) return false;
  return matches.every((m) => isVerbNegated(text, m.index, m.text.length));
}

/** Polite but positive action request (not an explanation request). */
export function isPolitePositiveDocumentAction(text: string): boolean {
  if (/\bm['’]?expliquer\b|\bcomment\b|\bquelles?\s+(?:seraient|sont)\s+les\s+étapes\b|\bétapes\s+pour\b/i.test(text)) {
    return false;
  }
  return /\b(?:peux-tu|pourrais-tu|merci\s+de|je\s+(?:te\s+)?(?:demande|souhaite)|je\s+valide\s+explicitement)\b[\s\S]{0,80}\b(?:réviser|reviser|révise|modifier|modifie|corriger|corrige|créer|crée|rédiger|rédige|écrire|écris)\b/i.test(
    text,
  );
}

/**
 * Structured CREATE recognition: positive create verb + documentary object,
 * allowing reasonable complements (location, novelty, title) without treating
 * any occurrence of « document » as authority.
 */
export function hasExplicitCreateIntent(text: string): boolean {
  const t = text.replace(/\s+/g, " ").trim();
  if (!t || !hasPositiveVerb(t, CREATE_VERB_RE)) return false;

  if (CREATE_PAIR_CLOSE_RE.test(t) || CREATE_PLEASE_RE.test(t)) return true;

  // Verb … (complements) … (nouveau)? document(s)
  for (const verb of findVerbMatches(t, CREATE_VERB_RE)) {
    if (isVerbNegated(t, verb.index, verb.text.length)) continue;
    const after = t.slice(verb.index + verb.text.length, verb.index + verb.text.length + 160);
    const obj = after.match(
      /\b(nouveau(?:x)?|nouvelle(?:s)?)?\s*(documents?|notes?|synthèses?|rapports?|spécifications?)\b/i,
    );
    if (!obj || obj.index == null) continue;
    const between = after.slice(0, obj.index).trim();
    if (!between) return true;
    // Persist verbs between create and object (« crée et enregistre … document »)
    if (/\b(enregistre|enregistrer|sauvegarde|sauvegarder|persist(?:e|er)?)\b/i.test(between)) {
      return true;
    }
    // Novelty marker near object
    if (/\b(nouveau|nouvelle|nouveaux|nouvelles)\b/i.test(between + " " + (obj[0] ?? ""))) {
      const tokens = between.split(/\s+/).filter(Boolean);
      if (tokens.every((tok) => CREATE_COMPLEMENT_TOKEN_RE.test(tok.replace(/[.,;:!?]/g, "")))) {
        return true;
      }
    }
    // Pure complement bridge (dans les Documents internes de Studio …)
    const tokens = between.split(/\s+/).filter(Boolean);
    if (
      tokens.length > 0 &&
      tokens.length <= 16 &&
      tokens.every((tok) => CREATE_COMPLEMENT_TOKEN_RE.test(tok.replace(/[.,;:!?]/g, "")))
    ) {
      return true;
    }
  }
  return false;
}

/** Consultative listing / show docs — not a write. */
export function isDocumentaryConsultationOnly(text: string): boolean {
  const t = text.trim();
  if (hasPositiveVerb(t, CREATE_VERB_RE) || hasPositiveVerb(t, REVISE_VERB_RE)) return false;
  return (
    /\b(montre[- ]moi|affiche|liste|consulte|voir|quels?\s+sont|disponible)\b[\s\S]{0,40}\bdocuments?\b/i.test(
      t,
    ) || /\bdocuments?\s+disponibles?\b/i.test(t)
  );
}

/**
 * Plausible documentary write language (signal only — not authority to mutate).
 * Used for loyal NOT_EXECUTED restitution / observability when kind is NONE.
 */
export function hasDocumentaryWriteSignal(text: string): boolean {
  const t = text.trim();
  if (!t || isDocumentaryConsultationOnly(t)) return false;
  // Pure questions / drafts-without-save must not trigger NOT_EXECUTED pollution.
  if (isInformativeOrHypothetical(t)) return false;
  if (hasExplicitCreateIntent(t)) return true;
  if (hasPositiveVerb(t, REVISE_VERB_RE) && DOC_OBJECT_RE.test(t)) return true;
  if (hasPositiveVerb(t, CREATE_VERB_RE) && DOC_OBJECT_RE.test(t)) return true;
  return false;
}

/** Informative / hypothetical questions are not mutation requests. */
export function isInformativeOrHypothetical(text: string): boolean {
  const t = text.trim();
  // Leading question framing wins over a create/revise verb later in the same utterance (N3/N4/N9).
  if (/^(comment|pourquoi|quelles?\b|que\s+se\s+passerait)\b/i.test(t)) {
    return true;
  }
  // Explicit CREATE intent wins over trailing « comment je peux le retrouver » clauses.
  if (hasExplicitCreateIntent(t)) return false;
  // Polite positive action first — « Peux-tu réviser le document X ? » is not informative.
  if (isPolitePositiveDocumentAction(t) && !/\bm['’]?expliquer\b|\bcomment\b|\bétapes\b/i.test(t)) {
    return false;
  }
  if (
    /\b(comment|peux-tu\s+m['’]?expliquer|explique[- ]moi|quelles?\s+(?:seraient|sont)\s+les\s+étapes)\b[\s\S]{0,80}\b(créer|crée|réviser|révise|revise|modifier|modifie|enregistrer)\b/i.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(que\s+se\s+passerait[- ]il|si\s+(?:nous|on|je)\s+(?:le\s+)?(?:révisions|modifi(?:ais|ons)|créions))\b/i.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\bexplique[- ]moi\s+seulement\b/i.test(t) ||
    /\bce\s+que\s+tu\s+changerais\b/i.test(t) ||
    /\bsans\s+(?:le\s+)?(?:créer|modifier|réviser|enregistrer)\b/i.test(t)
  ) {
    if (!hasPositiveVerb(t, REVISE_VERB_RE) && !hasPositiveVerb(t, CREATE_VERB_RE)) {
      return true;
    }
  }
  if (
    /\b(proposition|brouillon|draft)\b[\s\S]{0,40}\b(sans\s+enregistrer|non\s+enregistr)/i.test(t) ||
    /\bsans\s+(?:créer\s+ni\s+)?enregistrer\b/i.test(t) ||
    /\bne\s+(?:l['’])?enregistre\s+pas\b/i.test(t)
  ) {
    return true;
  }
  return false;
}

/**
 * Global prohibition of documentary write (not a local "don't touch other sections").
 */
export function isGlobalDocumentWriteNegation(text: string): boolean {
  const t = text.trim();
  // Local scope restriction: positive revise + don't touch other sections → not global.
  const localScope =
    hasPositiveVerb(t, REVISE_VERB_RE) &&
    /\b(uniquement|seulement)\b[\s\S]{0,40}\b(section|partie|chapitre)\b/i.test(t) &&
    /\bne\s+(?:modifie|touche|change)\s+pas\s+(?:les\s+)?(?:autres|le\s+reste)\b/i.test(t);
  if (localScope) return false;

  if (
    /\bne\s+(?:me\s+)?(?:crée|créer|modifie|modifier|révise|réviser|revise|enregistre|enregistrer|touche)\s+(?:pas|aucun|aucune)\b/i.test(
      t,
    ) ||
    /\bn['’]enregistre\s+pas\b/i.test(t) ||
    /\bne\s+touche\s+pas\s+au\s+document\b/i.test(t) ||
    /\bsans\s+créer\s+ni\s+enregistrer\b/i.test(t) ||
    /\baucun(?:e)?\s+documents?\b/i.test(t)
  ) {
    // If the only create/revise verbs are negated, treat as global refuse.
    // A positive CREATE/REVISE on another clause is preserved (A5 / N8).
    const posCreate = hasPositiveVerb(t, CREATE_VERB_RE);
    const posRevise = hasPositiveVerb(t, REVISE_VERB_RE);
    if (!posCreate && !posRevise) return true;
    // "Ne crée pas …" with a create verb only under negation:
    if (hasOnlyNegatedVerbs(t, CREATE_VERB_RE) && !posRevise) return true;
    if (hasOnlyNegatedVerbs(t, REVISE_VERB_RE) && !posCreate) return true;
  }
  return false;
}

/**
 * Qualify explicit documentary intent. Analytical / negative / informative → NONE.
 * Act qualification uses authority-stripped text; target designation uses raw text.
 */
export function qualifyDocumentAct(text: string): QualifiedDocumentAct {
  const trimmed = text.trim();
  if (!trimmed) return { kind: "NONE", reason: "EMPTY" };

  const designation = extractDocumentDesignation(trimmed);
  const authorityText = stripNonAuthoritativeSpans(trimmed).replace(/\s+/g, " ").trim();
  if (!authorityText) return { kind: "NONE", reason: "NO_AUTHORITATIVE_TEXT" };

  if (isGlobalDocumentWriteNegation(authorityText) || isGlobalDocumentWriteNegation(trimmed)) {
    return { kind: "NONE", reason: "NEGATED_WRITE" };
  }
  if (isInformativeOrHypothetical(authorityText) || isInformativeOrHypothetical(trimmed)) {
    const allowLocalRevise =
      (hasPositiveVerb(authorityText, REVISE_VERB_RE) || hasPositiveVerb(trimmed, REVISE_VERB_RE)) &&
      (DOC_OBJECT_RE.test(authorityText) ||
        DOC_ID_RE.test(trimmed) ||
        Boolean(designation.titleHint)) &&
      /\b(uniquement|seulement)\b[\s\S]{0,40}\b(section|partie|chapitre)\b/i.test(trimmed);
    if (!allowLocalRevise && !isPolitePositiveDocumentAction(trimmed)) {
      return { kind: "NONE", reason: "INFORMATIVE_OR_HYPOTHETICAL" };
    }
  }

  const hasDocObject =
    DOC_OBJECT_RE.test(authorityText) ||
    Boolean(designation.documentId) ||
    Boolean(designation.titleHint);
  const positiveRevise =
    hasPositiveVerb(authorityText, REVISE_VERB_RE) ||
    (isPolitePositiveDocumentAction(trimmed) &&
      /\b(?:réviser|reviser|révise|modifier|modifie|corriger|corrige)\b/i.test(trimmed));

  // REVISE before CREATE — « ne crée pas …, révise la section 2 » → REVISE (N8), never CREATE.
  if (positiveRevise && hasDocObject) {
    return {
      kind: "REVISE",
      documentHint: designation.documentId ?? designation.titleHint,
      sectionHint: designation.sectionHint,
    };
  }

  // CREATE — structured recognition on authority-stripped text only (A7: never Git/quote/tool).
  if (hasExplicitCreateIntent(authorityText)) {
    return { kind: "CREATE" };
  }

  if (CREATE_PLEASE_RE.test(authorityText) && !isGlobalDocumentWriteNegation(authorityText)) {
    return { kind: "CREATE" };
  }

  if (hasPositiveVerb(authorityText, CREATE_VERB_RE) && !DOC_OBJECT_RE.test(authorityText)) {
    return { kind: "NONE", reason: "CREATE_WITHOUT_OBJECT" };
  }

  if (hasPositiveVerb(authorityText, CREATE_VERB_RE) && DOC_OBJECT_RE.test(authorityText)) {
    return { kind: "NONE", reason: "CREATE_OBJECT_BRIDGE_UNQUALIFIED" };
  }

  return { kind: "NONE", reason: "NO_EXPLICIT_WRITE" };
}

/** Backward-compatible predicate used by older call sites / tests. */
export function explicitDocumentIntent(text: string): boolean {
  const q = qualifyDocumentAct(text);
  return q.kind === "CREATE" || q.kind === "REVISE";
}

export type DocumentListItem = {
  document: { id: string; title: string };
  latestRevision: { id: string; revisionNumber: number; status: string; contentMarkdown: string } | null;
};

export type ResolvedReviseTarget =
  | {
      ok: true;
      documentId: string;
      title: string;
      baseRevisionId: string;
      baseRevisionNumber: number;
      baseContent: string;
    }
  | { ok: false; reason: "NOT_FOUND" | "AMBIGUOUS" | "NO_AVAILABLE_REVISION"; candidates?: string[] };

export function resolveReviseTarget(
  docs: DocumentListItem[],
  hint: string | null,
): ResolvedReviseTarget {
  const available = docs.filter((d) => d.latestRevision?.status === "AVAILABLE");
  if (available.length === 0) {
    return { ok: false, reason: "NO_AVAILABLE_REVISION" };
  }

  if (hint) {
    const byId = available.filter((d) => d.document.id === hint);
    if (byId.length === 1) {
      const d = byId[0]!;
      return {
        ok: true,
        documentId: d.document.id,
        title: d.document.title,
        baseRevisionId: d.latestRevision!.id,
        baseRevisionNumber: d.latestRevision!.revisionNumber,
        baseContent: d.latestRevision!.contentMarkdown,
      };
    }
    const needle = normalizeDocumentTitle(hint);
    const byTitle = available.filter((d) => {
      const t = normalizeDocumentTitle(d.document.title);
      return t === needle || t.includes(needle) || needle.includes(t);
    });
    if (byTitle.length === 1) {
      const d = byTitle[0]!;
      return {
        ok: true,
        documentId: d.document.id,
        title: d.document.title,
        baseRevisionId: d.latestRevision!.id,
        baseRevisionNumber: d.latestRevision!.revisionNumber,
        baseContent: d.latestRevision!.contentMarkdown,
      };
    }
    if (byTitle.length > 1) {
      return {
        ok: false,
        reason: "AMBIGUOUS",
        candidates: byTitle.map((d) => d.document.id),
      };
    }
    // Explicit hint that matches nothing — never fall through to "sole document".
    return { ok: false, reason: "NOT_FOUND" };
  }

  if (available.length === 1) {
    const d = available[0]!;
    return {
      ok: true,
      documentId: d.document.id,
      title: d.document.title,
      baseRevisionId: d.latestRevision!.id,
      baseRevisionNumber: d.latestRevision!.revisionNumber,
      baseContent: d.latestRevision!.contentMarkdown,
    };
  }

  return {
    ok: false,
    reason: "AMBIGUOUS",
    candidates: available.map((d) => d.document.id),
  };
}

export type SectionSpan = {
  heading: string;
  level: number;
  /** Absolute start of the heading line. */
  start: number;
  /** Absolute start of body (char after heading line newline), or start+len if no body. */
  bodyStart: number;
  /** Exclusive end of section (start of next same-or-higher heading, or EOF). */
  end: number;
};

/**
 * Locate ATX sections with exact offsets. Ignores headings inside fenced code blocks.
 */
export function locateSections(md: string): SectionSpan[] {
  const lines: Array<{ text: string; start: number }> = [];
  let offset = 0;
  const rawLines = md.split(/\n/);
  for (let i = 0; i < rawLines.length; i++) {
    const text = rawLines[i]!;
    lines.push({ text, start: offset });
    offset += text.length + (i < rawLines.length - 1 ? 1 : 0);
  }

  const headingLines: Array<{ lineIdx: number; level: number; heading: string }> = [];
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i]!.text;
    if (/^```/.test(t)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^(#{1,6})\s+(.+?)\s*$/.exec(t);
    if (m) {
      headingLines.push({ lineIdx: i, level: m[1]!.length, heading: m[2]!.trim() });
    }
  }

  const spans: SectionSpan[] = [];
  for (let h = 0; h < headingLines.length; h++) {
    const cur = headingLines[h]!;
    const line = lines[cur.lineIdx]!;
    const bodyStart =
      cur.lineIdx + 1 < lines.length
        ? lines[cur.lineIdx + 1]!.start
        : line.start + line.text.length;
    let end = md.length;
    for (let n = h + 1; n < headingLines.length; n++) {
      const nxt = headingLines[n]!;
      if (nxt.level <= cur.level) {
        end = lines[nxt.lineIdx]!.start;
        break;
      }
    }
    spans.push({
      heading: cur.heading,
      level: cur.level,
      start: line.start,
      bodyStart,
      end,
    });
  }
  return spans;
}

/** @deprecated Prefer locateSections for exact edits. Kept for heading lists in tests. */
export function splitMarkdownSections(
  md: string,
): Array<{ heading: string; level: number; body: string }> {
  return locateSections(md).map((s) => ({
    heading: s.heading,
    level: s.level,
    body: md.slice(s.bodyStart, s.end),
  }));
}

/**
 * Leading top-level section index from an ATX heading text (no `#`).
 * Accepts: "2. Title", "Section 2 — Title", "2 — Title".
 * Rejects embedded numbers: "Source 2 — …", "3.2. Sub", list-like bodies (not headings).
 */
export function leadingSectionNumber(heading: string): string | null {
  const t = heading.trim();
  const asSection = /^section\s+(\d+)\b/i.exec(t);
  if (asSection) return asSection[1]!;
  // "2. Title" — require whitespace after the first dotted integer (excludes "3.2. …").
  const dotted = /^(\d+)\.\s+\S/.exec(t);
  if (dotted) return dotted[1]!;
  const dashed = /^(\d+)\s*[—–\-]\s+\S/.exec(t);
  if (dashed) return dashed[1]!;
  return null;
}

function parseSectionHint(hint: string): { number: string | null; titleTail: string | null } {
  const h = hint.trim();
  const withTail =
    /^(?:section\s+)?(\d+)(?:\s*[.:—–\-]\s*|\s+)(.+)$/i.exec(h) ||
    /^(?:section\s+)?(\d+)\s*$/i.exec(h);
  if (withTail) {
    return {
      number: withTail[1]!,
      titleTail: (withTail[2] ?? "").trim() || null,
    };
  }
  return { number: null, titleTail: null };
}

/**
 * Resolve section spans for a Pilote/Nora hint.
 * Numeric hints ("2", "section 2") match only headings whose *leading* section
 * number is that index — never bare `\b2\b` inside "Source 2" / "3.2".
 */
function matchSectionSpans(spans: SectionSpan[], hint: string): SectionSpan[] {
  const h = hint.toLowerCase().trim();
  if (!h) return [];

  const exact = spans.filter((b) => b.heading.toLowerCase() === h);
  if (exact.length === 1) return exact;

  const parsed = parseSectionHint(hint);
  if (parsed.number) {
    const byNum = spans.filter((b) => leadingSectionNumber(b.heading) === parsed.number);
    if (parsed.titleTail) {
      const title = parsed.titleTail.toLowerCase();
      const refined = byNum.filter((b) => {
        const heading = b.heading.toLowerCase();
        return heading.includes(title) || title.includes(heading);
      });
      if (refined.length > 0) return refined;
    }
    return byNum;
  }

  // Title-only hint: equality / inclusion — no digit-as-word shortcut.
  return spans.filter(
    (b) =>
      b.heading.toLowerCase() === h ||
      b.heading.toLowerCase().includes(h) ||
      h.includes(b.heading.toLowerCase()),
  );
}

/**
 * Contractual document proposal (B).
 *
 * Documentary content destined for D4 must appear in exactly one CommonMark
 * fenced block whose info-string first word is exactly `sfia-document`.
 * Generic ```markdown / ```md fences are treated as illustrative only — they
 * never authorize a D4 write (ambiguity regularisation after regex false positives).
 *
 * Parsing is structural (line scanner): an inner shorter fence cannot close the
 * outer contractual fence; truncated or unclosed proposals are refused.
 * No lexical scrubbing of legitimate métier wording.
 */
export type DocumentProposalExtract =
  | {
      ok: true;
      content: string;
      title: string;
      path: "fence";
      fenceTag: string;
      fenceCount: 1;
      proposalChars: number;
      proposalDigest16: string;
      bodyEndsWithNewline: boolean;
      sectionCount: number;
    }
  | {
      ok: false;
      reason:
        | "DOCUMENT_PROPOSAL_MISSING"
        | "DOCUMENT_PROPOSAL_AMBIGUOUS"
        | "DOCUMENT_PROPOSAL_EMPTY"
        | "DOCUMENT_PROPOSAL_UNCLOSED";
      path: "none" | "ambiguous" | "empty" | "unclosed";
      fenceCount: number;
      proposalChars: number;
      proposalDigest16: string | null;
      bodyEndsWithNewline: boolean;
      sectionCount: number;
    };

/** Sole mutative proposal marker — exact first info-string token (case-insensitive). */
export const DOCUMENT_PROPOSAL_TAG = "sfia-document";

type FenceMarker = {
  indent: number;
  char: "`" | "~";
  length: number;
  info: string;
};

function digest16(text: string): string {
  // Structural correlation fingerprint (length + FNV) — never log bodies.
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16).padStart(8, "0") + text.length.toString(16).padStart(8, "0");
}

function splitMarkdownLines(md: string): Array<{ text: string; start: number }> {
  const lines: Array<{ text: string; start: number }> = [];
  let offset = 0;
  const rawLines = md.split("\n");
  for (let i = 0; i < rawLines.length; i++) {
    const text = rawLines[i]!;
    lines.push({ text, start: offset });
    offset += text.length + (i < rawLines.length - 1 ? 1 : 0);
  }
  return lines;
}

/** CommonMark-ish fence opener/closer on a single line (indent ≤ 3). */
function parseFenceMarkerLine(line: string): FenceMarker | null {
  const m = /^( {0,3})(`{3,}|~{3,})(.*)$/.exec(line);
  if (!m) return null;
  const indent = m[1]!.length;
  const ticks = m[2]!;
  const char = ticks[0] as "`" | "~";
  const length = ticks.length;
  const info = m[3] ?? "";
  // Backtick fences cannot include backticks in the info string (CommonMark).
  if (char === "`" && info.includes("`")) return null;
  return { indent, char, length, info };
}

function fenceInfoFirstToken(info: string): string {
  return info.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
}

function isContractualProposalOpen(marker: FenceMarker): boolean {
  // Exact token match only — rejects mdx, sfia-documentation, markdown, md, …
  return fenceInfoFirstToken(marker.info) === DOCUMENT_PROPOSAL_TAG;
}

function isFenceClose(marker: FenceMarker, open: FenceMarker): boolean {
  if (marker.char !== open.char) return false;
  if (marker.length < open.length) return false;
  // Closing fence info must be empty (whitespace only).
  return marker.info.trim() === "";
}

type ScannedProposal =
  | { status: "ok"; content: string; tag: string }
  | { status: "unclosed" };

/**
 * Skip a non-contractual (illustrative) fence opened at `openIdx`.
 * Content inside — including nested ```sfia-document examples — is opaque.
 * Returns the line index after the closing fence, or `lines.length` if unclosed
 * (caller must not harvest inner contractual markers from an unclosed illustrative).
 */
function skipIllustrativeFence(
  lines: Array<{ text: string; start: number }>,
  openIdx: number,
  open: FenceMarker,
): number {
  for (let j = openIdx + 1; j < lines.length; j++) {
    const cand = parseFenceMarkerLine(lines[j]!.text);
    if (cand && isFenceClose(cand, open)) {
      return j + 1;
    }
  }
  return lines.length;
}

/**
 * Scan assistant Markdown for autonomous top-level `sfia-document` fences.
 *
 * First-level structure:
 * - conversational text (no fence);
 * - illustrative fences (any non-`sfia-document` open) — opaque until closed;
 * - autonomous contractual `sfia-document` fences — extractable proposals.
 *
 * Inside a contractual proposal, nested code fences are tracked with a stack so
 * an inner ```bash … ``` does not terminate the outer proposal.
 *
 * A `sfia-document` marker nested inside an illustrative fence is never an
 * autonomous proposal (isolation rule).
 */
export function scanContractualDocumentFences(assistantText: string): {
  proposals: ScannedProposal[];
  contractualOpenCount: number;
} {
  const lines = splitMarkdownLines(assistantText);
  const proposals: ScannedProposal[] = [];
  let i = 0;
  let contractualOpenCount = 0;

  while (i < lines.length) {
    const open = parseFenceMarkerLine(lines[i]!.text);
    if (!open) {
      i += 1;
      continue;
    }

    // Illustrative / non-mutative fence: skip entirely (do not scan interior).
    // Unclosed illustrative → advance to EOF; never promote interior markers.
    if (!isContractualProposalOpen(open)) {
      i = skipIllustrativeFence(lines, i, open);
      continue;
    }

    // Autonomous contractual proposal at first level.
    contractualOpenCount += 1;
    const bodyStartLine = i + 1;
    const nest: Array<{ char: "`" | "~"; length: number }> = [];
    let closedAt: number | null = null;

    for (let j = bodyStartLine; j < lines.length; j++) {
      const cand = parseFenceMarkerLine(lines[j]!.text);
      if (!cand) continue;

      if (nest.length === 0 && isFenceClose(cand, open)) {
        closedAt = j;
        break;
      }

      if (nest.length > 0) {
        const top = nest[nest.length - 1]!;
        if (cand.char === top.char && cand.length >= top.length && cand.info.trim() === "") {
          nest.pop();
          continue;
        }
      }

      // Inner opener: info-tagged fence, or shorter run of the same character
      // that cannot close the outer proposal, or any other fence char.
      const opensInner =
        cand.info.trim() !== "" ||
        cand.char !== open.char ||
        cand.length < open.length;
      if (opensInner) {
        nest.push({ char: cand.char, length: cand.length });
      }
    }

    if (closedAt == null) {
      proposals.push({ status: "unclosed" });
      break;
    }

    // Body bytes from first body line through the newline before the closer.
    let content = "";
    if (bodyStartLine < closedAt) {
      const start = lines[bodyStartLine]!.start;
      content = assistantText.slice(start, lines[closedAt]!.start);
    }
    proposals.push({ status: "ok", content, tag: DOCUMENT_PROPOSAL_TAG });
    i = closedAt + 1;
  }

  return { proposals, contractualOpenCount };
}

function failProposal(
  reason: Extract<DocumentProposalExtract, { ok: false }>["reason"],
  path: Extract<DocumentProposalExtract, { ok: false }>["path"],
  fenceCount: number,
  content?: string,
): DocumentProposalExtract {
  const body = content ?? "";
  return {
    ok: false,
    reason,
    path,
    fenceCount,
    proposalChars: body.length,
    proposalDigest16: body ? digest16(body) : null,
    bodyEndsWithNewline: body.endsWith("\n"),
    sectionCount: body ? locateSections(body).length : 0,
  };
}

export function extractContractualDocumentProposal(
  assistantText: string,
): DocumentProposalExtract {
  const { proposals, contractualOpenCount } = scanContractualDocumentFences(assistantText);

  if (contractualOpenCount === 0) {
    return failProposal("DOCUMENT_PROPOSAL_MISSING", "none", 0);
  }
  if (proposals.some((p) => p.status === "unclosed")) {
    return failProposal("DOCUMENT_PROPOSAL_UNCLOSED", "unclosed", contractualOpenCount);
  }
  if (proposals.length > 1) {
    return failProposal("DOCUMENT_PROPOSAL_AMBIGUOUS", "ambiguous", proposals.length);
  }
  if (proposals.length !== 1 || proposals[0]!.status !== "ok") {
    return failProposal("DOCUMENT_PROPOSAL_MISSING", "none", contractualOpenCount);
  }

  const content = proposals[0]!.content;
  if (!content.trim() || content.trim().length < 8) {
    return failProposal("DOCUMENT_PROPOSAL_EMPTY", "empty", 1, content);
  }
  const titleLine = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return {
    ok: true,
    content,
    title: titleLine || "Document Nora",
    path: "fence",
    fenceTag: DOCUMENT_PROPOSAL_TAG,
    fenceCount: 1,
    proposalChars: content.length,
    proposalDigest16: digest16(content),
    bodyEndsWithNewline: content.endsWith("\n"),
    sectionCount: locateSections(content).length,
  };
}

/**
 * Extract replacement body for a target section from Nora's proposal.
 * Refuses conversational dumps that are not a clear section body.
 */
export function extractProposedSectionBody(
  proposedMarkdown: string,
  sectionHint: string,
  baseHeading: string,
): { ok: true; body: string } | { ok: false; reason: string } {
  const spans = locateSections(proposedMarkdown);
  const hits = matchSectionSpans(spans, sectionHint);
  if (hits.length === 1) {
    return { ok: true, body: proposedMarkdown.slice(hits[0]!.bodyStart, hits[0]!.end) };
  }
  if (hits.length > 1) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_IN_PROPOSAL" };
  }
  // No matching heading — refuse dumping the whole conversational reply into the section.
  if (spans.length > 0 || /résultat applicatif d4|nora\s*\(/i.test(proposedMarkdown)) {
    return { ok: false, reason: "SECTION_CONTENT_UNCLEAR_IN_PROPOSAL" };
  }
  // Bare body without headings — only accept if short and not a full conversation.
  const trimmed = proposedMarkdown.trim();
  if (!trimmed || trimmed.length > 20_000) {
    return { ok: false, reason: "SECTION_CONTENT_UNCLEAR_IN_PROPOSAL" };
  }
  void baseHeading;
  return { ok: true, body: `${trimmed}\n` };
}

/**
 * Splice Nora's section body into the base document at exact offsets.
 * Non-target bytes are preserved verbatim (spaces, blank lines, fences).
 * Corrective A: ensure a line break before the base suffix so the next ATX
 * heading remains at column 0 — without rewriting the suffix itself.
 */
export function applyTargetedSectionRevision(
  baseMarkdown: string,
  proposedMarkdown: string,
  sectionHint: string | null,
): { ok: true; content: string } | { ok: false; reason: string } {
  if (!sectionHint) {
    // Full-document revise only when the proposal is clearly document markdown, not chat.
    if (/résultat applicatif d4/i.test(proposedMarkdown)) {
      return { ok: false, reason: "PROPOSAL_CONTAINS_APPLICATIVE_ACK" };
    }
    return { ok: true, content: proposedMarkdown };
  }

  const baseSpans = locateSections(baseMarkdown);
  if (baseSpans.length === 0) {
    return { ok: false, reason: "NO_SECTION_STRUCTURE" };
  }
  const hits = matchSectionSpans(baseSpans, sectionHint);
  if (hits.length === 0) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
  }
  if (hits.length > 1) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
  }
  const target = hits[0]!;
  const extracted = extractProposedSectionBody(proposedMarkdown, sectionHint, target.heading);
  if (!extracted.ok) return extracted;

  // A: body may omit a terminal newline; suffix must keep starting at a line boundary.
  const body = extracted.body.endsWith("\n") ? extracted.body : `${extracted.body}\n`;

  // Keep heading line + everything before bodyStart and everything after end byte-identical.
  const content =
    baseMarkdown.slice(0, target.bodyStart) + body + baseMarkdown.slice(target.end);
  return { ok: true, content };
}

/**
 * Exact (non-normalized) check that bytes outside the target section are unchanged.
 */
export function assertSectionScope(
  baseMarkdown: string,
  nextMarkdown: string,
  sectionHint: string | null,
): { ok: true } | { ok: false; reason: string } {
  if (!sectionHint) return { ok: true };
  const baseSpans = locateSections(baseMarkdown);
  const nextSpans = locateSections(nextMarkdown);
  const baseHits = matchSectionSpans(baseSpans, sectionHint);
  const nextHits = matchSectionSpans(nextSpans, sectionHint);
  if (baseHits.length !== 1) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
  }
  if (nextHits.length !== 1) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_NEXT" };
  }
  const b = baseHits[0]!;
  const n = nextHits[0]!;
  const basePrefix = baseMarkdown.slice(0, b.bodyStart);
  const nextPrefix = nextMarkdown.slice(0, n.bodyStart);
  if (basePrefix !== nextPrefix) {
    return { ok: false, reason: "SECTION_SCOPE_PREFIX_CHANGED" };
  }
  const baseSuffix = baseMarkdown.slice(b.end);
  const nextSuffix = nextMarkdown.slice(n.end);
  if (baseSuffix !== nextSuffix) {
    return { ok: false, reason: "SECTION_SCOPE_EXCEEDED" };
  }
  return { ok: true };
}

export type DocumentEffectSummary = {
  /** NONE = pre-effect (no D4 transaction attempted). */
  act: "CREATE" | "REVISE" | "NONE";
  /** AVAILABLE | FAILED | CONFLICT | UNKNOWN | NOT_EXECUTED */
  status?: string;
  documentId?: string;
  revisionId?: string;
  revisionNumber?: number;
  baseRevisionId?: string;
  reason?: string;
  idempotentReplay?: boolean;
};

/** Sentences/paragraphs that assert a D4 write outcome (must not compete with applicative truth). */
const TRANSACTIONAL_CLAIM_RE =
  /\b(?:non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+(?:d['’]écriture|disponible)|les\s+outils\s+disponibles\s+(?:sont\s+en\s+lecture\s+seule|ne\s+permettent\s+pas)|outils?\s+(?:en\s+)?lecture\s+seule|je\s+ne\s+peux\s+(?:donc\s+)?pas\s+(?:exécuter\s+l['’]enregistrement|appliquer|enregistrer|créer|réviser)|aucune\s+révision\s+(?:créée|enregistrée)|nouvelle\s+révision\s*:\s*aucune|la\s+version\s+1\s+reste\s+inchangée|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde|document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/i;

/** Nora tool-boundary claims that must not be presented as the cause of an observed Studio D4 effect. */
const NORA_TOOL_BOUNDARY_CLAIM_RE =
  /\b(?:les\s+outils\s+disponibles\s+(?:sont\s+en\s+lecture\s+seule|ne\s+permettent\s+pas)|aucun\s+outil\s+(?:d['’]écriture|disponible)|outils?\s+(?:en\s+)?lecture\s+seule|je\s+ne\s+peux\s+(?:donc\s+)?pas\s+(?:exécuter\s+l['’]enregistrement|appliquer|enregistrer|créer|réviser))\b/i;

/**
 * Extract prepared document markdown (fence or ATX body) from Nora narration.
 */
export function extractPreparedDocumentBody(assistantContent: string): string | null {
  const fence = assistantContent.match(/```(?:markdown|md)?\n([\s\S]+?)```/i);
  if (fence?.[1] && fence[1].trim().length > 40) return fence[1].trim();
  const heading = assistantContent.match(/(?:^|\n)(#\s+[^\n]+[\s\S]{40,})/);
  if (heading?.[1]) {
    // Stop before an applicative / meta heading if present.
    const body = heading[1].replace(/\n#{1,3}\s+Résultat applicatif D4[\s\S]*$/i, "").trim();
    return body.length > 40 ? body : null;
  }
  return null;
}

function stripTransactionalClaimUnits(text: string): string {
  // Drop whole paragraphs that contain transactional claims; keep document/code fences intact.
  const parts = text.split(/\n{2,}/);
  const kept: string[] = [];
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    if (/^```/.test(trimmed) || /^#\s+/.test(trimmed)) {
      // Inside a markdown doc block: strip claim *lines* only, keep structure.
      if (/^#\s+/.test(trimmed) && !TRANSACTIONAL_CLAIM_RE.test(trimmed.split("\n")[0] ?? "")) {
        const lines = trimmed.split("\n").filter((ln) => !TRANSACTIONAL_CLAIM_RE.test(ln));
        if (lines.length) kept.push(lines.join("\n"));
        continue;
      }
      if (/^```/.test(trimmed)) {
        kept.push(part);
        continue;
      }
    }
    if (TRANSACTIONAL_CLAIM_RE.test(trimmed)) continue;
    // Also drop individual claim sentences inside mixed paragraphs.
    const sentences = trimmed.split(/(?<=[.!?…])\s+/);
    const clean = sentences.filter((s) => !TRANSACTIONAL_CLAIM_RE.test(s)).join(" ").trim();
    if (clean) kept.push(clean);
  }
  return kept.join("\n\n").trim();
}

/**
 * Remove narration that contradicts the observed D4 effect, without deleting document body.
 * Prefer structured composition via appendDocumentEffectAck / composeDocumentTurnMessage.
 */
export function reconcileNarrationWithDocumentEffect(
  assistantContent: string,
  effect: DocumentEffectSummary | null,
): string {
  if (!effect) return assistantContent;
  const prepared = extractPreparedDocumentBody(assistantContent);
  if (prepared) {
    // Keep prepared document; drop competing cognitive transactional claims around it.
    const around = assistantContent.replace(prepared, "\n");
    const cognitive = stripTransactionalClaimUnits(around);
    return [cognitive, prepared].filter(Boolean).join("\n\n").trim();
  }
  return stripTransactionalClaimUnits(assistantContent);
}

/**
 * Application ACK — sole transactional verdict for the turn.
 */
export function formatDocumentEffectAck(effect: DocumentEffectSummary | null): string {
  if (!effect) return "";

  // Pre-effect: plausible documentary intent but no D4 transaction attempted.
  // Never fabricate a FAILED documentSave — this is NOT_EXECUTED, not a server refuse.
  if (effect.status === "NOT_EXECUTED" || effect.act === "NONE") {
    const lines = [
      "### Résultat applicatif (pré-effet)",
      "",
      "- Acte documentaire exécuté: aucun",
      "- Statut: NOT_EXECUTED",
      "- Transaction D4: non tentée",
    ];
    if (effect.reason) lines.push(`- raison: ${effect.reason}`);
    lines.push(
      "",
      "Aucun acte documentaire exécuté : la demande n'a pas été qualifiée pour une écriture.",
      "La réponse Nora ci-dessus n'est pas un verdict D4.",
    );
    return lines.join("\n");
  }

  const lines = [
    "### Résultat applicatif D4 (source de vérité)",
    "",
    `- Acte demandé: ${effect.act}`,
    `- Statut observé: ${effect.status ?? "UNKNOWN"}`,
  ];
  if (effect.documentId) lines.push(`- documentId: \`${effect.documentId}\``);
  if (effect.revisionNumber != null) lines.push(`- révision: v${effect.revisionNumber}`);
  if (effect.revisionId) lines.push(`- revisionId: \`${effect.revisionId}\``);
  if (effect.baseRevisionId) lines.push(`- baseRevisionId: \`${effect.baseRevisionId}\``);
  if (effect.idempotentReplay) lines.push("- rejeu idempotent: oui");
  if (effect.reason) lines.push(`- raison: ${effect.reason}`);
  if (effect.status === "AVAILABLE") {
    lines.push(
      "",
      "Ce statut est confirmé par la persistance Studio. Il est le seul verdict transactionnel de ce tour.",
    );
  } else if (effect.status === "CONFLICT") {
    lines.push("", "Conflit de base — aucune nouvelle révision écrite. Requalification requise.");
  } else if (effect.status === "FAILED") {
    lines.push(
      "",
      "Studio a exécuté l'acte documentaire et a refusé l'écriture. Le motif ci-dessus est le verdict transactionnel.",
      "Les outils Nora restent en lecture seule ; cela n'explique pas un refus applicatif déjà observé.",
    );
  } else if (effect.status && effect.status !== "AVAILABLE") {
    lines.push("", "Aucun succès d'écriture D4 ne doit être affirmé pour ce tour.");
  }
  return lines.join("\n");
}

/**
 * Structured final message: prepared content (sanitized) + sole applicative verdict.
 * Guarantees no concurrent « aucune révision » + AVAILABLE.
 */
export function composeDocumentTurnMessage(
  assistantContent: string,
  effect: DocumentEffectSummary | null,
): string {
  if (!effect) return assistantContent;
  const sanitized = reconcileNarrationWithDocumentEffect(assistantContent, effect);
  const ack = formatDocumentEffectAck(effect);
  // Final safety: drop residual contradictory fragments after sanitize.
  // When Studio observed any D4 effect, Nora tool-boundary claims must not compete
  // with the applicative verdict (AVAILABLE *or* FAILED/CONFLICT/UNKNOWN).
  let body = stripTransactionalClaimUnits(sanitized);
  if (effect.status !== "AVAILABLE") {
    // Keep non-transactional cognitive text, but always drop tool-boundary excuses.
    const parts = body.split(/\n{2,}/);
    body = parts
      .filter((p) => !NORA_TOOL_BOUNDARY_CLAIM_RE.test(p))
      .join("\n\n")
      .trim();
  }
  return `${body.trimEnd()}\n\n---\n${ack}\n`;
}

export function appendDocumentEffectAck(
  assistantContent: string,
  effect: DocumentEffectSummary | null,
): string {
  return composeDocumentTurnMessage(assistantContent, effect);
}

/** True when a visible message still contains a competing transactional claim. */
export function hasCompetingTransactionalClaim(
  message: string,
  effect: DocumentEffectSummary | null,
): boolean {
  if (!effect) return false;
  const withoutAck = message.replace(/### Résultat applicatif D4[\s\S]*$/i, "");
  if (effect.status === "AVAILABLE") {
    return (
      TRANSACTIONAL_CLAIM_RE.test(withoutAck) &&
      /\b(?:aucune\s+révision|ne\s+peux\s+(?:donc\s+)?pas\s+(?:exécuter|appliquer)|non\s+enregistré|outils?\s+disponibles|lecture\s+seule)\b/i.test(
        withoutAck,
      )
    );
  }
  // Observed FAILED/CONFLICT/UNKNOWN: Nora must not blame missing write tools for the outcome.
  if (effect.status === "FAILED" || effect.status === "CONFLICT" || effect.status === "UNKNOWN") {
    return NORA_TOOL_BOUNDARY_CLAIM_RE.test(withoutAck);
  }
  return false;
}
