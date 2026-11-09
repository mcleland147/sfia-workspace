# SFIA Review Pack FULL — Finalisation Chat First D4 (R06 titre cité + restitution)

- **Date/heure :** 2026-11-09 17:29:13 CET (2026-11-09T16:29:13Z)
- **Cycle :** R5 / ML4 — FINALISATION MACRO-CORRECTIF CHAT FIRST D4
- **Profil :** Standard — RUN correctif
- **Branche :** `fix/next-ml4-chat-first-d4-provenance-20261109`
- **HEAD entrée :** `1fedb9ff83771c1a12f55714c2d6967c5300ac61`
- **HEAD final :** `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b`
- **Base macro :** `974b0030a94469bef05496151792e8c35a9a83e9`
- **Handoff précédent :** `8b03f9f9` / blob `5cedcc74…`
- **Push projet :** NON

## 1. Git Truth Check

| Item | Valeur |
|---|---|
| origin/main | `6667a43858a5421e391b7441246536daad148bd6` |
| origin/feat | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` |
| RECETTE | non touchée |
| Untracked hors scope | laissés intacts (manifest, script qualify, projects/.tmp) |
| Présence passes 1–2 | `f1b49e20` puis `1fedb9ff` ancêtres de `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b` |

## 2. Défauts reproduits

### A — Titre cité
`stripNonAuthoritativeSpans` supprimait «…» avant extraction → `documentHint` erroné → `REVISE_NOT_FOUND`.

### B — Restitution
Regex partielle : « Les outils… ne permettent pas », « Je ne peux donc pas appliquer », « aucune créée », « v1 inchangée » pouvaient coexister avec ACK AVAILABLE.

## 3. Correctifs

- `extractDocumentDesignation(raw)` séparé de l'authority strip (placeholder `document [désigné]`).
- Hint explicite introuvable → NOT_FOUND (pas de fallback silencieux).
- Polite positive vs informative (`Peux-tu réviser X` ≠ `Peux-tu m'expliquer comment`).
- `composeDocumentTurnMessage` : purge des unités transactionnelles + ACK seul verdict.
- Oracle R06 intégré via `postUserMessageAndNora` + DB (DET fixture ; LIVE NOT RUN).

## 4. Blast radius

API publique inchangée · D4 reviseDocument propriétaire · D6/D9/provenance inchangés · UX message assistant · ownership/idempotence conservés.

## 5. Fichier principal — contenu intégral

### `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts`

```typescript
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
const DOC_OBJECT_RE = /\b(document|note|synthèse|rapport|spécification)\b/i;
const SECTION_RE =
  /\b(?:section|partie|chapitre)\s+(\d+|[A-Za-zÀ-ÿ][\wÀ-ÿ-]*)\b/i;
const DOC_ID_RE = /\b(doc_[a-z0-9-]+)\b/i;

const CREATE_PAIR_RE =
  /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,40}\b(document|note|synthèse|rapport|spécification)\b/i;
const CREATE_PLEASE_RE =
  /\b(document|note de synthèse|rapport)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i;

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

/** True when a matched verb is under a local ne … pas / n'… pas negation. */
export function isVerbNegated(text: string, verbIndex: number, verbLen: number): boolean {
  const windowStart = Math.max(0, verbIndex - 48);
  const before = text.slice(windowStart, verbIndex);
  const after = text.slice(verbIndex, Math.min(text.length, verbIndex + verbLen + 24));
  if (/\bne\s*$/i.test(before) && /^\s*pas\b/i.test(after.replace(/^[^\s]*/, ""))) {
    // "ne" immediately before verb token start is rare; handled below
  }
  const nePas =
    /\bne\b[\s\S]{0,40}$/i.test(before) &&
    (/\bpas\b/i.test(after) || /\bpas\b/i.test(text.slice(verbIndex, verbIndex + verbLen + 40)));
  const nApostrophe =
    /\bn['’](?:enregistre|écris|écrit|autorise)\b/i.test(text.slice(windowStart, verbIndex + verbLen + 20));
  return nePas || nApostrophe;
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

/** Informative / hypothetical questions are not mutation requests. */
export function isInformativeOrHypothetical(text: string): boolean {
  const t = text.trim();
  // Polite positive action first — « Peux-tu réviser le document X ? » is not informative.
  if (isPolitePositiveDocumentAction(t) && !/\bm['’]?expliquer\b|\bcomment\b|\bétapes\b/i.test(t)) {
    return false;
  }
  if (/^(comment|pourquoi|quelles?\b|que\s+se\s+passerait)\b/i.test(t)) {
    return true;
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
    /\bne\s+(?:me\s+)?(?:crée|créer|modifie|modifier|révise|réviser|revise|enregistre|enregistrer|touche)\s+pas\b/i.test(
      t,
    ) ||
    /\bn['’]enregistre\s+pas\b/i.test(t) ||
    /\bne\s+touche\s+pas\s+au\s+document\b/i.test(t) ||
    /\bsans\s+créer\s+ni\s+enregistrer\b/i.test(t)
  ) {
    // If the only create/revise verbs are negated, treat as global refuse.
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

  if (positiveRevise && hasDocObject) {
    return {
      kind: "REVISE",
      documentHint: designation.documentId ?? designation.titleHint,
      sectionHint: designation.sectionHint,
    };
  }

  if (
    (CREATE_PAIR_RE.test(authorityText) || CREATE_PLEASE_RE.test(authorityText)) &&
    hasPositiveVerb(authorityText, CREATE_VERB_RE)
  ) {
    return { kind: "CREATE" };
  }

  if (CREATE_PLEASE_RE.test(authorityText) && !isGlobalDocumentWriteNegation(authorityText)) {
    return { kind: "CREATE" };
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

function matchSectionSpans(spans: SectionSpan[], hint: string): SectionSpan[] {
  const h = hint.toLowerCase().trim();
  return spans.filter(
    (b) =>
      b.heading.toLowerCase() === h ||
      b.heading.toLowerCase().includes(h) ||
      new RegExp(`\\bsection\\s+${escapeRegExp(h)}\\b`, "i").test(b.heading) ||
      new RegExp(`\\b${escapeRegExp(h)}\\b`, "i").test(b.heading),
  );
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

  // Keep heading line + everything before bodyStart and everything after end byte-identical.
  const content =
    baseMarkdown.slice(0, target.bodyStart) + extracted.body + baseMarkdown.slice(target.end);
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

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export type DocumentEffectSummary = {
  act: "CREATE" | "REVISE";
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
  /\b(?:non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+(?:d['’]écriture|disponible)|les\s+outils\s+disponibles\s+ne\s+permettent\s+pas|je\s+ne\s+peux\s+(?:donc\s+)?pas\s+(?:appliquer|enregistrer|créer|réviser)|aucune\s+révision\s+(?:créée|enregistrée)|nouvelle\s+révision\s*:\s*aucune|la\s+version\s+1\s+reste\s+inchangée|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde|document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/i;

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
  let body = sanitized;
  if (effect.status === "AVAILABLE") {
    body = stripTransactionalClaimUnits(body);
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
    return TRANSACTIONAL_CLAIM_RE.test(withoutAck) &&
      /\b(?:aucune\s+révision|ne\s+peux\s+(?:donc\s+)?pas\s+appliquer|non\s+enregistré|outils?\s+disponibles\s+ne\s+permettent)\b/i.test(
        withoutAck,
      );
  }
  return false;
}
```

## 6. Diffs vs `1fedb9ff83771c1a12f55714c2d6967c5300ac61`

### `projects/sfia-studio-next/web/tests/unit/document-act.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
index c6c8ff24..9ccd09ca 100644
--- a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
@@ -3,10 +3,14 @@ import {
   appendDocumentEffectAck,
   applyTargetedSectionRevision,
   assertSectionScope,
+  composeDocumentTurnMessage,
   explicitDocumentIntent,
+  extractDocumentDesignation,
   formatDocumentEffectAck,
+  hasCompetingTransactionalClaim,
   isGlobalDocumentWriteNegation,
   isInformativeOrHypothetical,
+  isPolitePositiveDocumentAction,
   locateSections,
   qualifyDocumentAct,
   reconcileNarrationWithDocumentEffect,
@@ -48,6 +52,31 @@ describe("document-act qualification — positive", () => {
     expect(q.kind).toBe("REVISE");
     if (q.kind === "REVISE") expect(q.sectionHint).toBe("2");
   });
+
+  it("quoted French title is designation data, not stripped for targeting", () => {
+    const raw =
+      'Révise le document «Références externes — Enseignements de Chantiers360» en modifiant seulement la section 2.';
+    const des = extractDocumentDesignation(raw);
+    expect(des.titleHint).toBe("Références externes — Enseignements de Chantiers360");
+    expect(des.sectionHint).toBe("2");
+    const q = qualifyDocumentAct(raw);
+    expect(q.kind).toBe("REVISE");
+    if (q.kind === "REVISE") {
+      expect(q.documentHint).toBe("Références externes — Enseignements de Chantiers360");
+      expect(q.sectionHint).toBe("2");
+    }
+  });
+
+  it("ASCII-quoted title and polite positive request", () => {
+    const raw = 'Peux-tu réviser le document "Références externes — Enseignements de Chantiers360" ?';
+    expect(isPolitePositiveDocumentAction(raw)).toBe(true);
+    expect(isInformativeOrHypothetical(raw)).toBe(false);
+    const q = qualifyDocumentAct(raw);
+    expect(q.kind).toBe("REVISE");
+    if (q.kind === "REVISE") {
+      expect(q.documentHint).toMatch(/Références externes/);
+    }
+  });
 });

 describe("document-act qualification — negation / informative (corrective)", () => {
@@ -91,6 +120,12 @@ describe("document-act qualification — negation / informative (corrective)", (
       qualifyDocumentAct("Propose un brouillon de document sans enregistrer.").kind,
     ).toBe("NONE");
   });
+
+  it("peux-tu m'expliquer how to revise → NONE (informative)", () => {
+    expect(qualifyDocumentAct("Peux-tu m'expliquer comment réviser un document ?").kind).toBe(
+      "NONE",
+    );
+  });
 });

 describe("document-act revise target resolution", () => {
@@ -204,7 +239,7 @@ Nouveau texte ciblé.
   });
 });

-describe("document-act ACK coherence (corrective)", () => {
+describe("document-act ACK coherence (finalisation)", () => {
   it("formats AVAILABLE create ACK", () => {
     const ack = formatDocumentEffectAck({
       act: "CREATE",
@@ -228,6 +263,36 @@ describe("document-act ACK coherence (corrective)", () => {
     expect(out).toContain("doc_y");
   });

+  it("R06-style competing claims cannot coexist with AVAILABLE", () => {
+    const cognitive =
+      "Les outils disponibles ne permettent pas de l'enregistrer dans D4.\n\n" +
+      "Je ne peux donc pas appliquer la révision.\n\n" +
+      "Nouvelle révision : aucune créée.\n\n" +
+      "La version 1 reste inchangée.\n\n" +
+      "# Document révisé\n\n## Section 2 — Sources\n\nBlob vs commit clarifié.\n";
+    const out = composeDocumentTurnMessage(cognitive, {
+      act: "REVISE",
+      status: "AVAILABLE",
+      documentId: "doc_r06",
+      revisionNumber: 2,
+    });
+    expect(out).toMatch(/Résultat applicatif D4/);
+    expect(out).toMatch(/AVAILABLE/);
+    expect(out).toContain("Blob vs commit clarifié");
+    expect(out).not.toMatch(/ne permettent pas/i);
+    expect(out).not.toMatch(/je ne peux donc pas appliquer/i);
+    expect(out).not.toMatch(/aucune créée/i);
+    expect(out).not.toMatch(/version 1 reste inchangée/i);
+    expect(
+      hasCompetingTransactionalClaim(out, {
+        act: "REVISE",
+        status: "AVAILABLE",
+        documentId: "doc_r06",
+        revisionNumber: 2,
+      }),
+    ).toBe(false);
+  });
+
   it("removes false success when FAILED", () => {
     const text = reconcileNarrationWithDocumentEffect("J'ai enregistré le document avec succès.", {
       act: "CREATE",
@@ -235,7 +300,6 @@ describe("document-act ACK coherence (corrective)", () => {
       reason: "FORBIDDEN",
     });
     expect(text).not.toMatch(/enregistré le document avec succès/i);
-    expect(text).toMatch(/résultat applicatif D4/i);
   });

   it("keeps useful markdown while appending CONFLICT ack", () => {

```

### `projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index 98d978c3..f749715d 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -29,6 +29,11 @@ import {
   savePreparationDocument,
 } from "@/domains/document/service";
 import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";
+import {
+  assertSectionScope,
+  hasCompetingTransactionalClaim,
+  qualifyDocumentAct,
+} from "@/domains/conversation/document-act";

 async function seedPilot(label: string) {
   const id = newId("pilot");
@@ -352,4 +357,118 @@ Fin.
     expect(refs.refs.some((r) => r.name === "feat/candidate-ml4")).toBe(true);
     expect(refs.refs.every((r) => r.sha.length === 40)).toBe(true);
   });
+
+  it("R06 oracle: quoted title revise via postUserMessageAndNora (DET fixture)", async () => {
+    const title = "Références externes — Enseignements de Chantiers360";
+    const v1Body = `# ${title}
+
+## Section 1 — Contexte
+
+Contexte CampusFlow.
+
+## Section 2 — Sources consultées et provenance disponible
+
+- Source initiale (SHA fichier confondu avec commit).
+
+## Section 3 — Limites
+
+Aucune écriture GitHub.
+`;
+    const pilotId = await seedPilot("ml4-r06");
+    const prep = await openOrCreatePreparation(pilotId);
+    // Distractor document — must not be selected when title is explicit.
+    await savePreparationDocument(
+      pilotId,
+      prep.id,
+      "Autre note CampusFlow",
+      "# Autre\n\n## Section 2 — Autre\n\nx\n",
+      undefined,
+      { correlationKey: newId("ck") },
+    );
+    const seeded = await savePreparationDocument(pilotId, prep.id, title, v1Body, undefined, {
+      correlationKey: newId("ck"),
+    });
+    expect(seeded.status).toBe("AVAILABLE");
+    if (seeded.status !== "AVAILABLE" || !seeded.documentId || !seeded.revisionId) {
+      throw new Error("seed v1 failed");
+    }
+
+    const ask =
+      `Nora, je souhaite réviser le document D4 existant «${title}» dans CampusFlow.\n\n` +
+      `Révise uniquement sa section 2 «Sources consultées et provenance disponible».\n\n` +
+      `Complète la première source consultée et corrige la distinction entre SHA de fichier et SHA de commit.\n\n` +
+      `Conserve toutes les autres sections inchangées.\n\n` +
+      `Je valide explicitement cette révision dans D4 uniquement.\n` +
+      `Je n'autorise aucune écriture GitHub.`;
+
+    expect(qualifyDocumentAct(ask).kind).toBe("REVISE");
+    const q = qualifyDocumentAct(ask);
+    if (q.kind === "REVISE") {
+      expect(q.documentHint).toBe(title);
+      expect(q.sectionHint).toBe("2");
+    }
+
+    const result = await postUserMessageAndNora(pilotId, prep.id, ask);
+    expect(result.documentSave?.status).toBe("AVAILABLE");
+    expect(result.documentSave?.act).toBe("REVISE");
+    expect(result.documentSave?.documentId).toBe(seeded.documentId);
+    expect(result.documentSave?.revisionNumber).toBe(2);
+    expect(result.documentSave?.baseRevisionId).toBe(seeded.revisionId);
+
+    const listed = await listDocumentRevisions(pilotId, prep.id, seeded.documentId);
+    expect(listed.status).toBe("AVAILABLE");
+    expect(listed.revisions.filter((r) => r.status === "AVAILABLE").map((r) => r.revisionNumber)).toEqual([
+      1, 2,
+    ]);
+    const v1 = listed.revisions.find((r) => r.revisionNumber === 1)!;
+    const v2 = listed.revisions.find((r) => r.revisionNumber === 2)!;
+    expect(assertSectionScope(v1.contentMarkdown, v2.contentMarkdown, "2")).toEqual({ ok: true });
+    expect(v2.contentMarkdown).toContain("## Section 1 — Contexte");
+    expect(v2.contentMarkdown).toContain("## Section 3 — Limites");
+    expect(v2.contentMarkdown).toContain("Aucune écriture GitHub.");
+
+    const msgs = await listMessages(pilotId, prep.id);
+    const last = msgs.filter((m) => m.role === "assistant").at(-1)!;
+    expect(last.content).toMatch(/Résultat applicatif D4/);
+    expect(last.content).toContain(seeded.documentId);
+    expect(last.content).toMatch(/AVAILABLE|révision: v2/i);
+    expect(
+      hasCompetingTransactionalClaim(last.content, {
+        act: "REVISE",
+        status: "AVAILABLE",
+        documentId: seeded.documentId,
+        revisionNumber: 2,
+      }),
+    ).toBe(false);
+    expect(last.content).not.toMatch(/aucune révision créée/i);
+    expect(last.content).not.toMatch(/je ne peux donc pas appliquer/i);
+
+    // Re-open v1 and v2
+    const r1 = await getDocumentRevision(pilotId, prep.id, seeded.documentId, v1.id);
+    const r2 = await getDocumentRevision(pilotId, prep.id, seeded.documentId, v2.id);
+    expect(r1.status).toBe("AVAILABLE");
+    expect(r2.status).toBe("AVAILABLE");
+  });
+
+  it("R06-neg: explicit title miss → NOT_FOUND, no phantom v2 on other doc", async () => {
+    const pilotId = await seedPilot("ml4-r06miss");
+    const prep = await openOrCreatePreparation(pilotId);
+    const only = await savePreparationDocument(
+      pilotId,
+      prep.id,
+      "Document unique présent",
+      "# X\n\n## Section 1\n\na\n\n## Section 2\n\nb\n",
+      undefined,
+      { correlationKey: newId("ck") },
+    );
+    expect(only.status).toBe("AVAILABLE");
+    const ask =
+      'Révise uniquement la section 2 du document «Titre qui n\'existe pas du tout» et conserve le reste.';
+    const result = await postUserMessageAndNora(pilotId, prep.id, ask);
+    expect(result.documentSave?.status).toBe("FAILED");
+    expect(result.documentSave?.reason).toMatch(/REVISE_NOT_FOUND/);
+    const docs = await listDocuments(pilotId, prep.id);
+    expect(docs).toHaveLength(1);
+    expect(docs[0]!.latestRevision?.revisionNumber).toBe(1);
+  });
 });

```

### `projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md`

```diff
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index ccc021d6..a08a05a8 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -548,3 +548,15 @@ Suite revue ChatGPT du macro-lot §25. Même branche `fix/next-ml4-chat-first-d4
 | USER / RECETTE | NOT RUN | gate Morris |

 Verdict : **ML4 CHAT-FIRST CORRECTIVE PASS — LOCALLY VERIFIED — READY FOR REVIEW**.
+
+## 27. Finalisation R06 — titre cité + restitution (2026-11-09)
+
+| Item | Statut | Note |
+|---|---|---|
+| Titre entre guillemets | CORRIGÉ (DET) | `extractDocumentDesignation` séparé de `stripNonAuthoritativeSpans` |
+| Fallback titre manquant | FAIL-CLOSED | hint explicite → NOT_FOUND, pas de bascule silencieuse |
+| Restitution Nora/ACK | CORRIGÉ (DET) | `composeDocumentTurnMessage` — verdict applicatif unique |
+| Oracle R06 intégré | DET PG PASS | `postUserMessageAndNora` + persistance v1/v2 ; LIVE Nora NOT RUN |
+| Provenance REC-07 | INCHANGÉ | non-régression |
+
+Verdict : **ML4 CHAT-FIRST R06 INTEGRATED CORRECTIVE — LOCALLY VERIFIED — READY FOR REVIEW**.

```

### `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 1486ac01..5e0e53c2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -27,15 +27,75 @@ const CREATE_PAIR_RE =
 const CREATE_PLEASE_RE =
   /\b(document|note de synthèse|rapport)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i;

-/** Remove quoted / fenced material so external text cannot authorize a D4 write. */
+/**
+ * Extract a document designation (id or cited title) from the raw Pilote text.
+ * Quotes are data here — never execution authority.
+ */
+export function extractDocumentDesignation(rawText: string): {
+  documentId: string | null;
+  titleHint: string | null;
+  sectionHint: string | null;
+} {
+  const idMatch = rawText.match(DOC_ID_RE);
+  const sectionMatch = rawText.match(SECTION_RE);
+
+  // document … «Title» / document "Title" — allow short qualifiers between noun and quote
+  // (e.g. «document D4 existant «Références…»»).
+  const quoted =
+    rawText.match(
+      /\b(?:document|note|synthèse|rapport|spécification)\b[\s\S]{0,48}?[«“"]([^»”"\n]{2,120})[»”"]/i,
+    ) ||
+    rawText.match(
+      /\b(?:document|note|synthèse|rapport|spécification)\b[\s\S]{0,48}?['‘]([^’'\n]{2,120})['’]/i,
+    );
+
+  // Fallback: unquoted title after document (stop at punctuation / line break)
+  const unquoted = !quoted
+    ? rawText.match(
+        /\b(?:document|note|synthèse|rapport)\s+(?!doc_)([^\n.!?]{2,120}?)(?=\s+(?:en\s+modifiant|en\s+révisant|dans\b|et\b|mais\b|,|\.|$))/i,
+      )
+    : null;
+
+  const titleHint = (quoted?.[1] ?? unquoted?.[1] ?? null)?.trim() || null;
+  return {
+    documentId: idMatch?.[1] ?? null,
+    titleHint,
+    sectionHint: sectionMatch?.[1] ?? null,
+  };
+}
+
+/**
+ * Authority strip: remove fenced / quoted material that must not authorize writes.
+ * Document designations are neutralized to a placeholder so «document» remains visible
+ * for act qualification without importing quoted imperatives as authority.
+ */
 export function stripNonAuthoritativeSpans(text: string): string {
   return text
     .replace(/```[\s\S]*?```/g, " ")
+    .replace(
+      /\b(document|note|synthèse|rapport|spécification)\b[\s\S]{0,48}?[«“"][^»”"\n]{1,120}[»”"]/gi,
+      "$1 [désigné]",
+    )
+    .replace(
+      /\b(document|note|synthèse|rapport|spécification)\b[\s\S]{0,48}?['‘][^’'\n]{1,120}['’]/gi,
+      "$1 [désigné]",
+    )
     .replace(/«[^»]*»/g, " ")
     .replace(/"[^"]*"/g, " ")
     .replace(/'[^']*'/g, " ");
 }

+/** Normalize titles for non-destructive comparison. */
+export function normalizeDocumentTitle(title: string): string {
+  return title
+    .normalize("NFKC")
+    .toLowerCase()
+    .replace(/[«»""'']/g, "")
+    .replace(/[–—−]/g, "-")
+    .replace(/\s+/g, " ")
+    .trim();
+}
+
 function findVerbMatches(text: string, re: RegExp): Array<{ index: number; text: string }> {
   const out: Array<{ index: number; text: string }> = [];
   const r = new RegExp(re.source, re.flags.includes("g") ? re.flags : `${re.flags}g`);
@@ -78,12 +138,24 @@ function hasOnlyNegatedVerbs(text: string, re: RegExp): boolean {
   return matches.every((m) => isVerbNegated(text, m.index, m.text.length));
 }

+/** Polite but positive action request (not an explanation request). */
+export function isPolitePositiveDocumentAction(text: string): boolean {
+  if (/\bm['’]?expliquer\b|\bcomment\b|\bquelles?\s+(?:seraient|sont)\s+les\s+étapes\b|\bétapes\s+pour\b/i.test(text)) {
+    return false;
+  }
+  return /\b(?:peux-tu|pourrais-tu|merci\s+de|je\s+(?:te\s+)?(?:demande|souhaite)|je\s+valide\s+explicitement)\b[\s\S]{0,80}\b(?:réviser|reviser|révise|modifier|modifie|corriger|corrige|créer|crée|rédiger|rédige|écrire|écris)\b/i.test(
+    text,
+  );
+}
+
 /** Informative / hypothetical questions are not mutation requests. */
 export function isInformativeOrHypothetical(text: string): boolean {
   const t = text.trim();
-  if (
-    /^(comment|pourquoi|quelles?\b|que\s+se\s+passerait|peux-tu|pourrais-tu)\b/i.test(t)
-  ) {
+  // Polite positive action first — « Peux-tu réviser le document X ? » is not informative.
+  if (isPolitePositiveDocumentAction(t) && !/\bm['’]?expliquer\b|\bcomment\b|\bétapes\b/i.test(t)) {
+    return false;
+  }
+  if (/^(comment|pourquoi|quelles?\b|que\s+se\s+passerait)\b/i.test(t)) {
     return true;
   }
   if (
@@ -105,8 +177,6 @@ export function isInformativeOrHypothetical(text: string): boolean {
     /\bce\s+que\s+tu\s+changerais\b/i.test(t) ||
     /\bsans\s+(?:le\s+)?(?:créer|modifier|réviser|enregistrer)\b/i.test(t)
   ) {
-    // "sans modifier" alone may be a local scope restriction when paired with positive revise —
-    // handled by callers; treat as informative only when no positive revise/create remains.
     if (!hasPositiveVerb(t, REVISE_VERB_RE) && !hasPositiveVerb(t, CREATE_VERB_RE)) {
       return true;
     }
@@ -154,41 +224,45 @@ export function isGlobalDocumentWriteNegation(text: string): boolean {

 /**
  * Qualify explicit documentary intent. Analytical / negative / informative → NONE.
- * Revise wins when a positive revise verb + document object (or doc id).
+ * Act qualification uses authority-stripped text; target designation uses raw text.
  */
 export function qualifyDocumentAct(text: string): QualifiedDocumentAct {
   const trimmed = text.trim();
   if (!trimmed) return { kind: "NONE", reason: "EMPTY" };

+  const designation = extractDocumentDesignation(trimmed);
   const authorityText = stripNonAuthoritativeSpans(trimmed).replace(/\s+/g, " ").trim();
   if (!authorityText) return { kind: "NONE", reason: "NO_AUTHORITATIVE_TEXT" };

-  if (isGlobalDocumentWriteNegation(authorityText)) {
+  if (isGlobalDocumentWriteNegation(authorityText) || isGlobalDocumentWriteNegation(trimmed)) {
     return { kind: "NONE", reason: "NEGATED_WRITE" };
   }
-  if (isInformativeOrHypothetical(authorityText)) {
-    // Positive revise with local restriction may still look informative via "sans modifier" —
-    // re-check: if a positive revise + doc object remains, allow REVISE below.
+  if (isInformativeOrHypothetical(authorityText) || isInformativeOrHypothetical(trimmed)) {
     const allowLocalRevise =
-      hasPositiveVerb(authorityText, REVISE_VERB_RE) &&
-      (DOC_OBJECT_RE.test(authorityText) || DOC_ID_RE.test(authorityText)) &&
-      /\b(uniquement|seulement)\b[\s\S]{0,40}\b(section|partie|chapitre)\b/i.test(authorityText);
-    if (!allowLocalRevise) {
+      (hasPositiveVerb(authorityText, REVISE_VERB_RE) || hasPositiveVerb(trimmed, REVISE_VERB_RE)) &&
+      (DOC_OBJECT_RE.test(authorityText) ||
+        DOC_ID_RE.test(trimmed) ||
+        Boolean(designation.titleHint)) &&
+      /\b(uniquement|seulement)\b[\s\S]{0,40}\b(section|partie|chapitre)\b/i.test(trimmed);
+    if (!allowLocalRevise && !isPolitePositiveDocumentAction(trimmed)) {
       return { kind: "NONE", reason: "INFORMATIVE_OR_HYPOTHETICAL" };
     }
   }

-  const hasDocObject = DOC_OBJECT_RE.test(authorityText) || DOC_ID_RE.test(authorityText);
-  if (hasPositiveVerb(authorityText, REVISE_VERB_RE) && hasDocObject) {
-    const idMatch = authorityText.match(DOC_ID_RE);
-    const titleMatch = authorityText.match(
-      /\b(?:document|note|synthèse|rapport)\s+[«"]?([^»"\n,]{2,80})/i,
-    );
-    const sectionMatch = authorityText.match(SECTION_RE);
+  const hasDocObject =
+    DOC_OBJECT_RE.test(authorityText) ||
+    Boolean(designation.documentId) ||
+    Boolean(designation.titleHint);
+  const positiveRevise =
+    hasPositiveVerb(authorityText, REVISE_VERB_RE) ||
+    (isPolitePositiveDocumentAction(trimmed) &&
+      /\b(?:réviser|reviser|révise|modifier|modifie|corriger|corrige)\b/i.test(trimmed));
+
+  if (positiveRevise && hasDocObject) {
     return {
       kind: "REVISE",
-      documentHint: idMatch?.[1] ?? titleMatch?.[1]?.trim() ?? null,
-      sectionHint: sectionMatch?.[1] ?? null,
+      documentHint: designation.documentId ?? designation.titleHint,
+      sectionHint: designation.sectionHint,
     };
   }

@@ -199,7 +273,6 @@ export function qualifyDocumentAct(text: string): QualifiedDocumentAct {
     return { kind: "CREATE" };
   }

-  // CREATE_PLEASE without create verb (e.g. "document s'il te plaît") — still CREATE if not negated.
   if (CREATE_PLEASE_RE.test(authorityText) && !isGlobalDocumentWriteNegation(authorityText)) {
     return { kind: "CREATE" };
   }
@@ -251,9 +324,9 @@ export function resolveReviseTarget(
         baseContent: d.latestRevision!.contentMarkdown,
       };
     }
-    const needle = hint.toLowerCase().replace(/[«»"']/g, "").trim();
+    const needle = normalizeDocumentTitle(hint);
     const byTitle = available.filter((d) => {
-      const t = d.document.title.toLowerCase();
+      const t = normalizeDocumentTitle(d.document.title);
       return t === needle || t.includes(needle) || needle.includes(t);
     });
     if (byTitle.length === 1) {
@@ -274,6 +347,7 @@ export function resolveReviseTarget(
         candidates: byTitle.map((d) => d.document.id),
       };
     }
+    // Explicit hint that matches nothing — never fall through to "sole document".
     return { ok: false, reason: "NOT_FOUND" };
   }

@@ -501,37 +575,74 @@ export type DocumentEffectSummary = {
   idempotentReplay?: boolean;
 };

-const FALSE_UNSAVED_RE =
-  /\b(non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+d['’]écriture\s+d4|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde)\b/gi;
-const FALSE_SAVED_RE =
-  /\b(document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/gi;
+/** Sentences/paragraphs that assert a D4 write outcome (must not compete with applicative truth). */
+const TRANSACTIONAL_CLAIM_RE =
+  /\b(?:non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+(?:d['’]écriture|disponible)|les\s+outils\s+disponibles\s+ne\s+permettent\s+pas|je\s+ne\s+peux\s+(?:donc\s+)?pas\s+(?:appliquer|enregistrer|créer|réviser)|aucune\s+révision\s+(?:créée|enregistrée)|nouvelle\s+révision\s*:\s*aucune|la\s+version\s+1\s+reste\s+inchangée|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde|document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/i;
+
+/**
+ * Extract prepared document markdown (fence or ATX body) from Nora narration.
+ */
+export function extractPreparedDocumentBody(assistantContent: string): string | null {
+  const fence = assistantContent.match(/```(?:markdown|md)?\n([\s\S]+?)```/i);
+  if (fence?.[1] && fence[1].trim().length > 40) return fence[1].trim();
+  const heading = assistantContent.match(/(?:^|\n)(#\s+[^\n]+[\s\S]{40,})/);
+  if (heading?.[1]) {
+    // Stop before an applicative / meta heading if present.
+    const body = heading[1].replace(/\n#{1,3}\s+Résultat applicatif D4[\s\S]*$/i, "").trim();
+    return body.length > 40 ? body : null;
+  }
+  return null;
+}
+
+function stripTransactionalClaimUnits(text: string): string {
+  // Drop whole paragraphs that contain transactional claims; keep document/code fences intact.
+  const parts = text.split(/\n{2,}/);
+  const kept: string[] = [];
+  for (const part of parts) {
+    const trimmed = part.trim();
+    if (!trimmed) continue;
+    if (/^```/.test(trimmed) || /^#\s+/.test(trimmed)) {
+      // Inside a markdown doc block: strip claim *lines* only, keep structure.
+      if (/^#\s+/.test(trimmed) && !TRANSACTIONAL_CLAIM_RE.test(trimmed.split("\n")[0] ?? "")) {
+        const lines = trimmed.split("\n").filter((ln) => !TRANSACTIONAL_CLAIM_RE.test(ln));
+        if (lines.length) kept.push(lines.join("\n"));
+        continue;
+      }
+      if (/^```/.test(trimmed)) {
+        kept.push(part);
+        continue;
+      }
+    }
+    if (TRANSACTIONAL_CLAIM_RE.test(trimmed)) continue;
+    // Also drop individual claim sentences inside mixed paragraphs.
+    const sentences = trimmed.split(/(?<=[.!?…])\s+/);
+    const clean = sentences.filter((s) => !TRANSACTIONAL_CLAIM_RE.test(s)).join(" ").trim();
+    if (clean) kept.push(clean);
+  }
+  return kept.join("\n\n").trim();
+}

 /**
  * Remove narration that contradicts the observed D4 effect, without deleting document body.
+ * Prefer structured composition via appendDocumentEffectAck / composeDocumentTurnMessage.
  */
 export function reconcileNarrationWithDocumentEffect(
   assistantContent: string,
   effect: DocumentEffectSummary | null,
 ): string {
   if (!effect) return assistantContent;
-  let text = assistantContent;
-  const status = effect.status ?? "UNKNOWN";
-
-  if (status === "AVAILABLE") {
-    text = text.replace(FALSE_UNSAVED_RE, "[état d'enregistrement : voir résultat applicatif D4]");
-  } else if (status === "FAILED" || status === "CONFLICT" || status === "UNKNOWN") {
-    text = text.replace(FALSE_SAVED_RE, "[état d'enregistrement : voir résultat applicatif D4]");
-  }
-
-  // If both a residual "non enregistré" and AVAILABLE somehow remain, force a clear marker.
-  if (status === "AVAILABLE" && /\bnon\s+enregistré\b/i.test(text)) {
-    text = text.replace(/\bnon\s+enregistré\b/gi, "enregistrement : voir résultat applicatif D4");
-  }
-  return text;
+  const prepared = extractPreparedDocumentBody(assistantContent);
+  if (prepared) {
+    // Keep prepared document; drop competing cognitive transactional claims around it.
+    const around = assistantContent.replace(prepared, "\n");
+    const cognitive = stripTransactionalClaimUnits(around);
+    return [cognitive, prepared].filter(Boolean).join("\n\n").trim();
+  }
+  return stripTransactionalClaimUnits(assistantContent);
 }

 /**
- * Application ACK appended after confirmed effect — distinct from Nora narration.
+ * Application ACK — sole transactional verdict for the turn.
  */
 export function formatDocumentEffectAck(effect: DocumentEffectSummary | null): string {
   if (!effect) return "";
@@ -550,7 +661,7 @@ export function formatDocumentEffectAck(effect: DocumentEffectSummary | null): s
   if (effect.status === "AVAILABLE") {
     lines.push(
       "",
-      "Ce statut est confirmé par la persistance Studio. Il prévaut sur toute narration contraire.",
+      "Ce statut est confirmé par la persistance Studio. Il est le seul verdict transactionnel de ce tour.",
     );
   } else if (effect.status === "CONFLICT") {
     lines.push("", "Conflit de base — aucune nouvelle révision écrite. Requalification requise.");
@@ -560,13 +671,44 @@ export function formatDocumentEffectAck(effect: DocumentEffectSummary | null): s
   return lines.join("\n");
 }

-export function appendDocumentEffectAck(
+/**
+ * Structured final message: prepared content (sanitized) + sole applicative verdict.
+ * Guarantees no concurrent « aucune révision » + AVAILABLE.
+ */
+export function composeDocumentTurnMessage(
   assistantContent: string,
   effect: DocumentEffectSummary | null,
 ): string {
   if (!effect) return assistantContent;
-  const reconciled = reconcileNarrationWithDocumentEffect(assistantContent, effect);
+  const sanitized = reconcileNarrationWithDocumentEffect(assistantContent, effect);
   const ack = formatDocumentEffectAck(effect);
-  if (!ack) return reconciled;
-  return `${reconciled.trimEnd()}\n\n---\n${ack}\n`;
+  // Final safety: drop residual contradictory fragments after sanitize.
+  let body = sanitized;
+  if (effect.status === "AVAILABLE") {
+    body = stripTransactionalClaimUnits(body);
+  }
+  return `${body.trimEnd()}\n\n---\n${ack}\n`;
+}
+
+export function appendDocumentEffectAck(
+  assistantContent: string,
+  effect: DocumentEffectSummary | null,
+): string {
+  return composeDocumentTurnMessage(assistantContent, effect);
+}
+
+/** True when a visible message still contains a competing transactional claim. */
+export function hasCompetingTransactionalClaim(
+  message: string,
+  effect: DocumentEffectSummary | null,
+): boolean {
+  if (!effect) return false;
+  const withoutAck = message.replace(/### Résultat applicatif D4[\s\S]*$/i, "");
+  if (effect.status === "AVAILABLE") {
+    return TRANSACTIONAL_CLAIM_RE.test(withoutAck) &&
+      /\b(?:aucune\s+révision|ne\s+peux\s+(?:donc\s+)?pas\s+appliquer|non\s+enregistré|outils?\s+disponibles\s+ne\s+permettent)\b/i.test(
+        withoutAck,
+      );
+  }
+  return false;
 }

```

## 7. Tests — nombres de CETTE passe

| Suite | Résultat |
|---|---|
| tsc --noEmit | PASS |
| lint | PASS (warnings préexistants) |
| build | PASS |
| vitest unit | **36 files / 234 tests PASS** (cycle préc. 230) |
| document-act unit | **25 PASS** |
| ml4-chat-first-d4-provenance.pg | **9 PASS** (préc. 7 ; +R06 oracle + NOT_FOUND) |
| ml2-knowledge-documents.pg | **6 PASS** |
| git-file-provenance unit | **2 PASS** |
| LIVE Nora / REAL Git / USER RECETTE | **NOT RUN** |

### Preuve R06 intégrée (DET)
- Intention REVISE + titre cité résolu
- documentId exact (distractor ignoré)
- v1 conservée, v2 AVAILABLE, scope section 2 exact
- message sans claims concurrents
- réouverture v1/v2

Réalisme manquant : Nora LIVE non contactée — fixture DEV uniquement.

## 8. Anomalies

| ID | Statut |
|---|---|
| REC-08 R06 titre/restitution | CORRIGÉ localement (DET) |
| REC-07 provenance | non-régression |
| REC-03/01/02 | hors |
| USER R06 | NOT RUN |

## 9. Verdict

**READY FOR REVIEW — CHAT-FIRST D4 R06 INTEGRATED CORRECTIVE COVERAGE VERIFIED LOCALLY.**

Prochain gate Morris : mise à disposition RECETTE d'un build issu de `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b` (GO distinct).

## 10. Instruction ChatGPT

Relire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
Comparer HEAD `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b`, résolution titre cité, oracle R06, restitution, tests, limites, non-régression provenance.
Puis recommander ou refuser RECETTE.

---
*Fin Review Pack FULL — finalisation R06 — HEAD `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b`*
