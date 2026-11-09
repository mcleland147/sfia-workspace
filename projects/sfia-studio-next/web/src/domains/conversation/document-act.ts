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

/** Remove quoted / fenced material so external text cannot authorize a D4 write. */
export function stripNonAuthoritativeSpans(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/«[^»]*»/g, " ")
    .replace(/"[^"]*"/g, " ")
    .replace(/'[^']*'/g, " ");
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

/** Informative / hypothetical questions are not mutation requests. */
export function isInformativeOrHypothetical(text: string): boolean {
  const t = text.trim();
  if (
    /^(comment|pourquoi|quelles?\b|que\s+se\s+passerait|peux-tu|pourrais-tu)\b/i.test(t)
  ) {
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
    // "sans modifier" alone may be a local scope restriction when paired with positive revise —
    // handled by callers; treat as informative only when no positive revise/create remains.
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
 * Revise wins when a positive revise verb + document object (or doc id).
 */
export function qualifyDocumentAct(text: string): QualifiedDocumentAct {
  const trimmed = text.trim();
  if (!trimmed) return { kind: "NONE", reason: "EMPTY" };

  const authorityText = stripNonAuthoritativeSpans(trimmed).replace(/\s+/g, " ").trim();
  if (!authorityText) return { kind: "NONE", reason: "NO_AUTHORITATIVE_TEXT" };

  if (isGlobalDocumentWriteNegation(authorityText)) {
    return { kind: "NONE", reason: "NEGATED_WRITE" };
  }
  if (isInformativeOrHypothetical(authorityText)) {
    // Positive revise with local restriction may still look informative via "sans modifier" —
    // re-check: if a positive revise + doc object remains, allow REVISE below.
    const allowLocalRevise =
      hasPositiveVerb(authorityText, REVISE_VERB_RE) &&
      (DOC_OBJECT_RE.test(authorityText) || DOC_ID_RE.test(authorityText)) &&
      /\b(uniquement|seulement)\b[\s\S]{0,40}\b(section|partie|chapitre)\b/i.test(authorityText);
    if (!allowLocalRevise) {
      return { kind: "NONE", reason: "INFORMATIVE_OR_HYPOTHETICAL" };
    }
  }

  const hasDocObject = DOC_OBJECT_RE.test(authorityText) || DOC_ID_RE.test(authorityText);
  if (hasPositiveVerb(authorityText, REVISE_VERB_RE) && hasDocObject) {
    const idMatch = authorityText.match(DOC_ID_RE);
    const titleMatch = authorityText.match(
      /\b(?:document|note|synthèse|rapport)\s+[«"]?([^»"\n,]{2,80})/i,
    );
    const sectionMatch = authorityText.match(SECTION_RE);
    return {
      kind: "REVISE",
      documentHint: idMatch?.[1] ?? titleMatch?.[1]?.trim() ?? null,
      sectionHint: sectionMatch?.[1] ?? null,
    };
  }

  if (
    (CREATE_PAIR_RE.test(authorityText) || CREATE_PLEASE_RE.test(authorityText)) &&
    hasPositiveVerb(authorityText, CREATE_VERB_RE)
  ) {
    return { kind: "CREATE" };
  }

  // CREATE_PLEASE without create verb (e.g. "document s'il te plaît") — still CREATE if not negated.
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
    const needle = hint.toLowerCase().replace(/[«»"']/g, "").trim();
    const byTitle = available.filter((d) => {
      const t = d.document.title.toLowerCase();
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

const FALSE_UNSAVED_RE =
  /\b(non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+d['’]écriture\s+d4|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde)\b/gi;
const FALSE_SAVED_RE =
  /\b(document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/gi;

/**
 * Remove narration that contradicts the observed D4 effect, without deleting document body.
 */
export function reconcileNarrationWithDocumentEffect(
  assistantContent: string,
  effect: DocumentEffectSummary | null,
): string {
  if (!effect) return assistantContent;
  let text = assistantContent;
  const status = effect.status ?? "UNKNOWN";

  if (status === "AVAILABLE") {
    text = text.replace(FALSE_UNSAVED_RE, "[état d'enregistrement : voir résultat applicatif D4]");
  } else if (status === "FAILED" || status === "CONFLICT" || status === "UNKNOWN") {
    text = text.replace(FALSE_SAVED_RE, "[état d'enregistrement : voir résultat applicatif D4]");
  }

  // If both a residual "non enregistré" and AVAILABLE somehow remain, force a clear marker.
  if (status === "AVAILABLE" && /\bnon\s+enregistré\b/i.test(text)) {
    text = text.replace(/\bnon\s+enregistré\b/gi, "enregistrement : voir résultat applicatif D4");
  }
  return text;
}

/**
 * Application ACK appended after confirmed effect — distinct from Nora narration.
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
      "Ce statut est confirmé par la persistance Studio. Il prévaut sur toute narration contraire.",
    );
  } else if (effect.status === "CONFLICT") {
    lines.push("", "Conflit de base — aucune nouvelle révision écrite. Requalification requise.");
  } else if (effect.status && effect.status !== "AVAILABLE") {
    lines.push("", "Aucun succès d'écriture D4 ne doit être affirmé pour ce tour.");
  }
  return lines.join("\n");
}

export function appendDocumentEffectAck(
  assistantContent: string,
  effect: DocumentEffectSummary | null,
): string {
  if (!effect) return assistantContent;
  const reconciled = reconcileNarrationWithDocumentEffect(assistantContent, effect);
  const ack = formatDocumentEffectAck(effect);
  if (!ack) return reconciled;
  return `${reconciled.trimEnd()}\n\n---\n${ack}\n`;
}
