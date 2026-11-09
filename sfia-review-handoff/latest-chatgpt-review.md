# SFIA Review Pack FULL — Passe corrective chat-first D4 (qualification / intégrité / ACK)

- **Date/heure :** 2026-11-09 17:10:25 CET (2026-11-09T16:10:25Z)
- **Cycle :** R5 / ML4 — PASSE CORRECTIVE CIBLÉE du macro-lot Chat First D4 + provenance Git
- **Profil SFIA :** Standard
- **GO Morris :** 2026-11-09 — lever réserves bloquantes revue ChatGPT
- **Branche :** `fix/next-ml4-chat-first-d4-provenance-20261109`
- **HEAD entrée :** `f1b49e20a18e824cc636cc3a1e57bb0ec416e4de`
- **HEAD final :** `1fedb9ff83771c1a12f55714c2d6967c5300ac61`
- **Base macro :** `974b0030a94469bef05496151792e8c35a9a83e9`
- **Handoff précédent :** `origin/sfia/review-handoff` @ `270cf9e4` (blob `2ffc82f5…`)
- **Push projet :** NON

## 1. Git Truth Check

| Item | Valeur |
|---|---|
| origin/main | `6667a43858a5421e391b7441246536daad148bd6` |
| origin/feat ML4 | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` |
| origin/sfia/review-handoff (pré-cycle) | `270cf9e4d9098eea3264d05a63386edaa2c20580` |
| status entrée | clean Product ; untracked hors scope (manifest RECETTE, script qualify, projects/.tmp) laissés intacts |
| RECETTE | non touchée |
| Divergence | aucune — correctif enchaîné sur `f1b49e20a18e824cc636cc3a1e57bb0ec416e4de` |

## 2. Défauts reproduits (revue ChatGPT)

### A — Qualification
Sur `f1b49e20a18e824cc636cc3a1e57bb0ec416e4de`, `qualifyDocumentAct` classait comme écriture :
- « Ne crée pas de document pour cette recherche. » → CREATE
- « Ne modifie pas le document existant. » → REVISE
- « Comment réviser le document sans le modifier ? » → REVISE

### B — Intégrité
`applyTargetedSectionRevision` + `renderSections` reconstruit le Markdown et peut altérer espaces / lignes vides hors cible ; `assertSectionScope` normalisait les espaces et masquait le défaut.

### C — Cohérence ACK
Un message pouvait cumuler narration « non enregistré » et bloc « Résultat applicatif D4 : AVAILABLE ».

## 3. Correctifs appliqués

### A
- `stripNonAuthoritativeSpans` (citations / fences)
- négation globale vs restriction locale (« ne modifie pas les autres sections »)
- questions / hypothèses / « sans enregistrer » → NONE
- verbes positifs uniquement via `hasPositiveVerb` / `isVerbNegated`

### B
- `locateSections` avec offsets exacts, ignore `#` dans fences
- splice `prefix + newBody + suffix` sans reconstruction
- `assertSectionScope` compare bytes exacts hors cible
- refuse proposition conversationnelle / ACK comme corps de section

### C
- `reconcileNarrationWithDocumentEffect` avant append ACK
- neutralise affirmations contradictoires sans supprimer le corps métier
- consignes Nora mises à jour (négation / pas d'affirmation d'enregistrement)

Provenance Git (REC-07) : **inchangée** ce cycle.

## 4. Fichier créé/réécrit — contenu intégral

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
```

## 5. Diffs vs HEAD entrée `f1b49e20a18e824cc636cc3a1e57bb0ec416e4de`


### `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index d8a5f25e..ed76e0d6 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -99,9 +99,10 @@ const SYSTEM_INSTRUCTIONS = [
   "- Pour une question simple: réponse courte, sans surinvestigation.",
   "- Pour une comparaison: structure critique (faits / hypothèses / options / limites).",
   "- Cite la provenance quand un point déterminant s'appuie sur un acquis ou document D4 réellement lu (pas la guidance spécialisée interne).",
-  "- Production documentaire: seulement si le Pilote le demande explicitement.",
+  "- Production documentaire: seulement si le Pilote le demande explicitement et positivement.",
+  "- Une négation (« ne crée pas », « ne révise pas »), une question informative ou une hypothèse n'autorisent aucune écriture D4.",
   "- Distingue toujours rédaction proposée et sauvegarde confirmée. Tu n'affirmes jamais qu'un document est « enregistré », « non enregistré », créé ou révisé : seul le bloc applicatif D4 post-effet (Résultat applicatif D4) porte cette vérité.",
-  "- Révision ciblée: si le Pilote demande de réviser une section d'un document existant, produis le document Markdown complet révisé en ne modifiant que la section demandée; conserve le reste à l'identique.",
+  "- Révision ciblée: si le Pilote demande de réviser une section, produis le Markdown avec la section ciblée mise à jour; ne réécris pas les autres sections.",
   "- Provenance Git: un SHA de contenu (blob) n'est jamais un SHA de commit; cite blobSha et commitSha séparément lorsqu'ils sont fournis par les outils.",
   "Réponds en français. Markdown utile autorisé (titres, listes, tableaux).",
 ].join("\n");

```

### `projects/sfia-studio-next/web/tests/unit/document-act.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
index bdd5fc52..c6c8ff24 100644
--- a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
@@ -5,22 +5,21 @@ import {
   assertSectionScope,
   explicitDocumentIntent,
   formatDocumentEffectAck,
+  isGlobalDocumentWriteNegation,
+  isInformativeOrHypothetical,
+  locateSections,
   qualifyDocumentAct,
+  reconcileNarrationWithDocumentEffect,
   resolveReviseTarget,
   splitMarkdownSections,
 } from "@/domains/conversation/document-act";

-describe("document-act qualification (ML4-REC-08)", () => {
+describe("document-act qualification — positive", () => {
   it("CREATE on explicit rédaction request", () => {
     expect(qualifyDocumentAct("Rédige un document de synthèse sur A et B").kind).toBe("CREATE");
     expect(explicitDocumentIntent("Rédige un document de synthèse")).toBe(true);
   });

-  it("NONE on analytical chatter", () => {
-    expect(qualifyDocumentAct("Bonjour Nora, compare les options").kind).toBe("NONE");
-    expect(explicitDocumentIntent("Bonjour Nora")).toBe(false);
-  });
-
   it("REVISE with section and document hints", () => {
     const q = qualifyDocumentAct(
       "Révise uniquement la section 2 du document Synthèse demandée et conserve le reste",
@@ -41,6 +40,57 @@ describe("document-act qualification (ML4-REC-08)", () => {
       expect(q.documentHint).toBe("doc_7110edbd-ae27-4d85-80a3-84d9c048074a");
     }
   });
+
+  it("positive revise with local restriction on other sections", () => {
+    const q = qualifyDocumentAct(
+      "Révise la section 2 du document, mais ne modifie pas les autres sections.",
+    );
+    expect(q.kind).toBe("REVISE");
+    if (q.kind === "REVISE") expect(q.sectionHint).toBe("2");
+  });
+});
+
+describe("document-act qualification — negation / informative (corrective)", () => {
+  it("NONE on analytical chatter", () => {
+    expect(qualifyDocumentAct("Bonjour Nora, compare les options").kind).toBe("NONE");
+    expect(explicitDocumentIntent("Bonjour Nora")).toBe(false);
+  });
+
+  it("imperative negatives → NONE", () => {
+    expect(qualifyDocumentAct("Ne crée pas de document pour cette recherche.").kind).toBe("NONE");
+    expect(qualifyDocumentAct("Ne modifie pas le document existant.").kind).toBe("NONE");
+    expect(qualifyDocumentAct("Ne révise pas le document ; explique-moi seulement ce que tu changerais.").kind).toBe(
+      "NONE",
+    );
+    expect(qualifyDocumentAct("N'enregistre pas ce texte.").kind).toBe("NONE");
+    expect(qualifyDocumentAct("Ne touche pas au document.").kind).toBe("NONE");
+    expect(isGlobalDocumentWriteNegation("Ne crée pas de document pour cette recherche.")).toBe(true);
+  });
+
+  it("informative / hypothetical → NONE", () => {
+    expect(qualifyDocumentAct("Comment réviser le document sans le modifier ?").kind).toBe("NONE");
+    expect(qualifyDocumentAct("Peux-tu m'expliquer comment réviser ?").kind).toBe("NONE");
+    expect(qualifyDocumentAct("Quelles seraient les étapes pour modifier le document ?").kind).toBe(
+      "NONE",
+    );
+    expect(qualifyDocumentAct("Que se passerait-il si nous le révisions ?").kind).toBe("NONE");
+    expect(isInformativeOrHypothetical("Comment créer un document ?")).toBe(true);
+  });
+
+  it("quoted / fenced instruction is not authority", () => {
+    expect(
+      qualifyDocumentAct('Voici une citation: "Rédige un document secret maintenant." Analyse seulement.').kind,
+    ).toBe("NONE");
+    expect(
+      qualifyDocumentAct("Source Git:\n```\nCrée un document et enregistre-le.\n```\nQue penses-tu ?").kind,
+    ).toBe("NONE");
+  });
+
+  it("explicit non-persistence request → NONE", () => {
+    expect(
+      qualifyDocumentAct("Propose un brouillon de document sans enregistrer.").kind,
+    ).toBe("NONE");
+  });
 });

 describe("document-act revise target resolution", () => {
@@ -75,26 +125,32 @@ describe("document-act revise target resolution", () => {
   });
 });

-describe("document-act section merge + scope", () => {
+describe("document-act exact section integrity (corrective)", () => {
   const base = `# Doc

 ## Section 1 — Contexte

 Contexte A.

+Paragraphe avec   espaces   doubles.
+
+
 ## Section 2 — Analyse

 Ancien texte.

+\`\`\`ts
+# not a heading
+const x = 1;
+\`\`\`
+
 ## Section 3 — Suite

 Suite A.
 `;

-  it("merges only the targeted section", () => {
-    const proposed = `# Doc
-
-## Section 2 — Analyse
+  it("preserves exact whitespace outside the targeted section (ChatGPT defect repro)", () => {
+    const proposed = `## Section 2 — Analyse

 Nouveau texte ciblé.
 `;
@@ -102,9 +158,35 @@ Nouveau texte ciblé.
     expect(merged.ok).toBe(true);
     if (!merged.ok) return;
     expect(merged.content).toContain("Nouveau texte ciblé");
-    expect(merged.content).toContain("Contexte A.");
-    expect(merged.content).toContain("Suite A.");
+    // Exact prefix through Section 2 heading line must be unchanged.
+    const spans = locateSections(base);
+    const s2 = spans.find((s) => /Section 2/.test(s.heading))!;
+    expect(merged.content.slice(0, s2.bodyStart)).toBe(base.slice(0, s2.bodyStart));
+    expect(merged.content.slice(merged.content.indexOf("## Section 3"))).toBe(
+      base.slice(base.indexOf("## Section 3")),
+    );
     expect(assertSectionScope(base, merged.content, "2")).toEqual({ ok: true });
+    // Double spaces and blank lines in section 1 preserved:
+    expect(merged.content).toContain("espaces   doubles.");
+    expect(merged.content).toContain("Paragraphe avec   espaces   doubles.\n\n\n## Section 2");
+  });
+
+  it("does not treat # inside code fences as section headings", () => {
+    const headings = locateSections(base).map((s) => s.heading);
+    expect(headings).toEqual(["Doc", "Section 1 — Contexte", "Section 2 — Analyse", "Section 3 — Suite"]);
+  });
+
+  it("refuses ambiguous / missing section", () => {
+    const dup = `${base}\n## Section 2 — Autre\n\nx\n`;
+    expect(applyTargetedSectionRevision(dup, "## Section 2\n\ny\n", "2").ok).toBe(false);
+    expect(applyTargetedSectionRevision(base, "## Section 9\n\ny\n", "9").ok).toBe(false);
+    expect(applyTargetedSectionRevision("plain text only", "x", "2").ok).toBe(false);
+  });
+
+  it("refuses dumping conversational preamble as section body", () => {
+    const proposed =
+      "Nora (fixture): je n'ai pas d'outil d'écriture D4.\n\n### Résultat applicatif D4\n\nbad";
+    expect(applyTargetedSectionRevision(base, proposed, "2").ok).toBe(false);
   });

   it("detects scope exceeded when other sections change", () => {
@@ -112,7 +194,7 @@ Nouveau texte ciblé.
     expect(assertSectionScope(base, bad, "2").ok).toBe(false);
   });

-  it("splits ATX sections", () => {
+  it("splits ATX sections (compat)", () => {
     expect(splitMarkdownSections(base).map((s) => s.heading)).toEqual([
       "Doc",
       "Section 1 — Contexte",
@@ -122,7 +204,7 @@ Nouveau texte ciblé.
   });
 });

-describe("document-act ACK", () => {
+describe("document-act ACK coherence (corrective)", () => {
   it("formats AVAILABLE create ACK", () => {
     const ack = formatDocumentEffectAck({
       act: "CREATE",
@@ -135,14 +217,35 @@ describe("document-act ACK", () => {
     expect(ack).toMatch(/v1/);
   });

-  it("appends ACK after Nora narration", () => {
-    const out = appendDocumentEffectAck("Je propose un texte.", {
+  it("removes contradictory unsaved claim when AVAILABLE", () => {
+    const out = appendDocumentEffectAck(
+      "Document proposé — non enregistré. Voici le corps.\n\n# Titre\n\nTexte métier.",
+      { act: "CREATE", status: "AVAILABLE", documentId: "doc_y", revisionNumber: 1 },
+    );
+    expect(out).toContain("Résultat applicatif D4");
+    expect(out).toContain("Texte métier.");
+    expect(out).not.toMatch(/\bnon enregistré\b/i);
+    expect(out).toContain("doc_y");
+  });
+
+  it("removes false success when FAILED", () => {
+    const text = reconcileNarrationWithDocumentEffect("J'ai enregistré le document avec succès.", {
       act: "CREATE",
-      status: "AVAILABLE",
-      documentId: "doc_y",
-      revisionNumber: 1,
+      status: "FAILED",
+      reason: "FORBIDDEN",
     });
-    expect(out).toContain("Je propose un texte.");
-    expect(out).toContain("Résultat applicatif D4");
+    expect(text).not.toMatch(/enregistré le document avec succès/i);
+    expect(text).toMatch(/résultat applicatif D4/i);
+  });
+
+  it("keeps useful markdown while appending CONFLICT ack", () => {
+    const out = appendDocumentEffectAck("# Doc\n\nCorps utile.", {
+      act: "REVISE",
+      status: "CONFLICT",
+      reason: "BASE_STALE",
+      documentId: "doc_z",
+    });
+    expect(out).toContain("Corps utile.");
+    expect(out).toMatch(/Conflit de base/);
   });
 });

```

### `projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index 101c81aa..98d978c3 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -101,6 +101,20 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
     expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
   });

+  it("A-neg2: imperative negation and informative questions do not mutate D4", async () => {
+    const pilotId = await seedPilot("ml4-noneg");
+    const prep = await openOrCreatePreparation(pilotId);
+    for (const text of [
+      "Ne crée pas de document pour cette recherche.",
+      "Comment réviser le document sans le modifier ?",
+      "Ne révise pas le document ; explique-moi seulement ce que tu changerais.",
+    ]) {
+      const chat = await postUserMessageAndNora(pilotId, prep.id, text);
+      expect(chat.documentSave == null || chat.documentSave.status !== "AVAILABLE").toBe(true);
+    }
+    expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
+  });
+
   it("B: conversational REVISE keeps same documentId, produces v2, scopes section 2", async () => {
     const pilotId = await seedPilot("ml4-revise");
     const prep = await openOrCreatePreparation(pilotId);
@@ -138,11 +152,80 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
     expect(v2.revision.revisionNumber).toBe(2);
     expect(v2.revision.contentMarkdown).toMatch(/Section 1/i);
     expect(v2.revision.contentMarkdown).toMatch(/Section 3/i);
+    // Exact outside-scope bytes preserved vs v1.
+    const { applyTargetedSectionRevision, assertSectionScope } = await import(
+      "@/domains/conversation/document-act"
+    );
+    const probe = applyTargetedSectionRevision(
+      v1!.contentMarkdown,
+      "## Section 2 — Analyse\n\nprobe\n",
+      "2",
+    );
+    expect(probe.ok).toBe(true);
+    if (probe.ok) {
+      expect(assertSectionScope(v1!.contentMarkdown, v2.revision.contentMarkdown, "2")).toEqual({
+        ok: true,
+      });
+    }

     const msgs = await listMessages(pilotId, prep.id);
     const last = msgs.filter((m) => m.role === "assistant").at(-1);
     expect(last?.content).toMatch(/Résultat applicatif D4/);
     expect(last?.content).toMatch(/REVISE/);
+    expect(last?.content).not.toMatch(/\bnon enregistré\b/i);
+  });
+
+  it("B2: exact whitespace outside revised section is preserved in DB", async () => {
+    const pilotId = await seedPilot("ml4-ws");
+    const prep = await openOrCreatePreparation(pilotId);
+    const weird = `# Doc
+
+## Section 1 — Contexte
+
+Ligne A.
+
+Ligne   B   double.
+
+
+## Section 2 — Analyse
+
+Ancien.
+
+## Section 3 — Suite
+
+Fin.
+`;
+    const v1 = await savePreparationDocument(pilotId, prep.id, "Weird", weird, undefined, {
+      correlationKey: newId("ck"),
+    });
+    expect(v1.status).toBe("AVAILABLE");
+    if (v1.status !== "AVAILABLE" || !v1.documentId || !v1.revisionId) throw new Error("v1");
+
+    const { applyTargetedSectionRevision } = await import("@/domains/conversation/document-act");
+    const merged = applyTargetedSectionRevision(
+      weird,
+      "## Section 2 — Analyse\n\nNouveau.\n",
+      "2",
+    );
+    expect(merged.ok).toBe(true);
+    if (!merged.ok) return;
+
+    const v2 = await reviseDocument(pilotId, prep.id, {
+      documentId: v1.documentId,
+      baseRevisionId: v1.revisionId,
+      contentMarkdown: merged.content,
+      correlationKey: newId("ck"),
+      scope: "section",
+      sectionHint: "2",
+    });
+    expect(v2.status).toBe("AVAILABLE");
+    if (v2.status !== "AVAILABLE" || !v2.revisionId) throw new Error("v2");
+    const got = await getDocumentRevision(pilotId, prep.id, v1.documentId, v2.revisionId);
+    expect(got.status).toBe("AVAILABLE");
+    if (got.status !== "AVAILABLE") return;
+    expect(got.revision.contentMarkdown).toContain("Ligne   B   double.");
+    expect(got.revision.contentMarkdown).toContain("Ligne A.\n\nLigne   B   double.\n\n\n## Section 2");
+    expect(got.revision.contentMarkdown).toContain("## Section 3 — Suite\n\nFin.\n");
   });

   it("C: stale baseRevisionId → CONFLICT without phantom v2; retry idempotent", async () => {

```

### `projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md`

```diff
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index 276b67fc..ccc021d6 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -533,3 +533,18 @@ Macro-correctif local sur candidat `974b0030` → branche `fix/next-ml4-chat-fir
 | USER / RECETTE | NOT RUN | Nouveau build + GO Morris requis |

 Verdict cycle : **ML4 CHAT-FIRST D4 + GIT PROVENANCE — LOCALLY IMPLEMENTED WITH VERIFIED DEV COVERAGE — READY FOR REVIEW — PRODUCT PUSH / RECETTE REDEPLOY NOT AUTHORIZED**.
+
+## 26. Passe corrective — qualification sûre + intégrité section + ACK (2026-11-09)
+
+Suite revue ChatGPT du macro-lot §25. Même branche `fix/next-ml4-chat-first-d4-provenance-20261109`. Push Product **NON AUTORISÉ**.
+
+| Item | Statut | Note |
+|---|---|---|
+| Négation / question informative | CORRIGÉ (DET) | `qualifyDocumentAct` → NONE ; pas de mutation DB |
+| Restriction locale « autres sections » | CONSERVÉ | REVISE positif autorisé |
+| Intégrité Markdown hors cible | CORRIGÉ (DET) | splice exact (`locateSections`) ; plus de `renderSections` normalisant |
+| Cohérence Nora / ACK | CORRIGÉ (DET) | `reconcileNarrationWithDocumentEffect` avant append ACK |
+| Provenance Git REC-07 | INCHANGÉ | non-régression DET |
+| USER / RECETTE | NOT RUN | gate Morris |
+
+Verdict : **ML4 CHAT-FIRST CORRECTIVE PASS — LOCALLY VERIFIED — READY FOR REVIEW**.

```

### `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index af1fd5d5..1486ac01 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -6,7 +6,7 @@
 export type DocumentActKind = "CREATE" | "REVISE" | "NONE";

 export type QualifiedDocumentAct =
-  | { kind: "NONE" }
+  | { kind: "NONE"; reason?: string }
   | { kind: "CREATE" }
   | {
       kind: "REVISE";
@@ -14,33 +14,177 @@ export type QualifiedDocumentAct =
       sectionHint: string | null;
     };

-const CREATE_RE =
-  /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,40}\b(document|note|synthèse|rapport|spécification)\b/i;
-const CREATE_PLEASE_RE =
-  /\b(document|note de synthèse|rapport)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i;
-const REVISE_RE =
-  /\b(révise|reviser|réviser|revise|modifie|modifier|mets?\s+à\s+jour|corrige|corriger)\b/i;
+const CREATE_VERB_RE = /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b/gi;
+const REVISE_VERB_RE =
+  /\b(révise|reviser|réviser|revise|modifie|modifier|mets?\s+à\s+jour|corrige|corriger)\b/gi;
 const DOC_OBJECT_RE = /\b(document|note|synthèse|rapport|spécification)\b/i;
 const SECTION_RE =
   /\b(?:section|partie|chapitre)\s+(\d+|[A-Za-zÀ-ÿ][\wÀ-ÿ-]*)\b/i;
 const DOC_ID_RE = /\b(doc_[a-z0-9-]+)\b/i;

+const CREATE_PAIR_RE =
+  /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,40}\b(document|note|synthèse|rapport|spécification)\b/i;
+const CREATE_PLEASE_RE =
+  /\b(document|note de synthèse|rapport)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i;
+
+/** Remove quoted / fenced material so external text cannot authorize a D4 write. */
+export function stripNonAuthoritativeSpans(text: string): string {
+  return text
+    .replace(/```[\s\S]*?```/g, " ")
+    .replace(/«[^»]*»/g, " ")
+    .replace(/"[^"]*"/g, " ")
+    .replace(/'[^']*'/g, " ");
+}
+
+function findVerbMatches(text: string, re: RegExp): Array<{ index: number; text: string }> {
+  const out: Array<{ index: number; text: string }> = [];
+  const r = new RegExp(re.source, re.flags.includes("g") ? re.flags : `${re.flags}g`);
+  let m: RegExpExecArray | null;
+  while ((m = r.exec(text)) !== null) {
+    out.push({ index: m.index, text: m[0]! });
+  }
+  return out;
+}
+
+/** True when a matched verb is under a local ne … pas / n'… pas negation. */
+export function isVerbNegated(text: string, verbIndex: number, verbLen: number): boolean {
+  const windowStart = Math.max(0, verbIndex - 48);
+  const before = text.slice(windowStart, verbIndex);
+  const after = text.slice(verbIndex, Math.min(text.length, verbIndex + verbLen + 24));
+  if (/\bne\s*$/i.test(before) && /^\s*pas\b/i.test(after.replace(/^[^\s]*/, ""))) {
+    // "ne" immediately before verb token start is rare; handled below
+  }
+  const nePas =
+    /\bne\b[\s\S]{0,40}$/i.test(before) &&
+    (/\bpas\b/i.test(after) || /\bpas\b/i.test(text.slice(verbIndex, verbIndex + verbLen + 40)));
+  const nApostrophe =
+    /\bn['’](?:enregistre|écris|écrit|autorise)\b/i.test(text.slice(windowStart, verbIndex + verbLen + 20));
+  return nePas || nApostrophe;
+}
+
+function hasPositiveVerb(
+  text: string,
+  re: RegExp,
+): boolean {
+  for (const m of findVerbMatches(text, re)) {
+    if (!isVerbNegated(text, m.index, m.text.length)) return true;
+  }
+  return false;
+}
+
+function hasOnlyNegatedVerbs(text: string, re: RegExp): boolean {
+  const matches = findVerbMatches(text, re);
+  if (matches.length === 0) return false;
+  return matches.every((m) => isVerbNegated(text, m.index, m.text.length));
+}
+
+/** Informative / hypothetical questions are not mutation requests. */
+export function isInformativeOrHypothetical(text: string): boolean {
+  const t = text.trim();
+  if (
+    /^(comment|pourquoi|quelles?\b|que\s+se\s+passerait|peux-tu|pourrais-tu)\b/i.test(t)
+  ) {
+    return true;
+  }
+  if (
+    /\b(comment|peux-tu\s+m['’]?expliquer|explique[- ]moi|quelles?\s+(?:seraient|sont)\s+les\s+étapes)\b[\s\S]{0,80}\b(créer|crée|réviser|révise|revise|modifier|modifie|enregistrer)\b/i.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\b(que\s+se\s+passerait[- ]il|si\s+(?:nous|on|je)\s+(?:le\s+)?(?:révisions|modifi(?:ais|ons)|créions))\b/i.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\bexplique[- ]moi\s+seulement\b/i.test(t) ||
+    /\bce\s+que\s+tu\s+changerais\b/i.test(t) ||
+    /\bsans\s+(?:le\s+)?(?:créer|modifier|réviser|enregistrer)\b/i.test(t)
+  ) {
+    // "sans modifier" alone may be a local scope restriction when paired with positive revise —
+    // handled by callers; treat as informative only when no positive revise/create remains.
+    if (!hasPositiveVerb(t, REVISE_VERB_RE) && !hasPositiveVerb(t, CREATE_VERB_RE)) {
+      return true;
+    }
+  }
+  if (
+    /\b(proposition|brouillon|draft)\b[\s\S]{0,40}\b(sans\s+enregistrer|non\s+enregistr)/i.test(t) ||
+    /\bsans\s+(?:créer\s+ni\s+)?enregistrer\b/i.test(t) ||
+    /\bne\s+(?:l['’])?enregistre\s+pas\b/i.test(t)
+  ) {
+    return true;
+  }
+  return false;
+}
+
+/**
+ * Global prohibition of documentary write (not a local "don't touch other sections").
+ */
+export function isGlobalDocumentWriteNegation(text: string): boolean {
+  const t = text.trim();
+  // Local scope restriction: positive revise + don't touch other sections → not global.
+  const localScope =
+    hasPositiveVerb(t, REVISE_VERB_RE) &&
+    /\b(uniquement|seulement)\b[\s\S]{0,40}\b(section|partie|chapitre)\b/i.test(t) &&
+    /\bne\s+(?:modifie|touche|change)\s+pas\s+(?:les\s+)?(?:autres|le\s+reste)\b/i.test(t);
+  if (localScope) return false;
+
+  if (
+    /\bne\s+(?:me\s+)?(?:crée|créer|modifie|modifier|révise|réviser|revise|enregistre|enregistrer|touche)\s+pas\b/i.test(
+      t,
+    ) ||
+    /\bn['’]enregistre\s+pas\b/i.test(t) ||
+    /\bne\s+touche\s+pas\s+au\s+document\b/i.test(t) ||
+    /\bsans\s+créer\s+ni\s+enregistrer\b/i.test(t)
+  ) {
+    // If the only create/revise verbs are negated, treat as global refuse.
+    const posCreate = hasPositiveVerb(t, CREATE_VERB_RE);
+    const posRevise = hasPositiveVerb(t, REVISE_VERB_RE);
+    if (!posCreate && !posRevise) return true;
+    // "Ne crée pas …" with a create verb only under negation:
+    if (hasOnlyNegatedVerbs(t, CREATE_VERB_RE) && !posRevise) return true;
+    if (hasOnlyNegatedVerbs(t, REVISE_VERB_RE) && !posCreate) return true;
+  }
+  return false;
+}
+
 /**
- * Qualify explicit documentary intent. Analytical chatter → NONE.
- * Revise wins when revise verb + document object (or doc id / « le document »).
+ * Qualify explicit documentary intent. Analytical / negative / informative → NONE.
+ * Revise wins when a positive revise verb + document object (or doc id).
  */
 export function qualifyDocumentAct(text: string): QualifiedDocumentAct {
   const trimmed = text.trim();
-  if (!trimmed) return { kind: "NONE" };
+  if (!trimmed) return { kind: "NONE", reason: "EMPTY" };

-  const hasRevise = REVISE_RE.test(trimmed);
-  const hasDocObject = DOC_OBJECT_RE.test(trimmed) || DOC_ID_RE.test(trimmed);
-  if (hasRevise && hasDocObject) {
-    const idMatch = trimmed.match(DOC_ID_RE);
-    const titleMatch = trimmed.match(
+  const authorityText = stripNonAuthoritativeSpans(trimmed).replace(/\s+/g, " ").trim();
+  if (!authorityText) return { kind: "NONE", reason: "NO_AUTHORITATIVE_TEXT" };
+
+  if (isGlobalDocumentWriteNegation(authorityText)) {
+    return { kind: "NONE", reason: "NEGATED_WRITE" };
+  }
+  if (isInformativeOrHypothetical(authorityText)) {
+    // Positive revise with local restriction may still look informative via "sans modifier" —
+    // re-check: if a positive revise + doc object remains, allow REVISE below.
+    const allowLocalRevise =
+      hasPositiveVerb(authorityText, REVISE_VERB_RE) &&
+      (DOC_OBJECT_RE.test(authorityText) || DOC_ID_RE.test(authorityText)) &&
+      /\b(uniquement|seulement)\b[\s\S]{0,40}\b(section|partie|chapitre)\b/i.test(authorityText);
+    if (!allowLocalRevise) {
+      return { kind: "NONE", reason: "INFORMATIVE_OR_HYPOTHETICAL" };
+    }
+  }
+
+  const hasDocObject = DOC_OBJECT_RE.test(authorityText) || DOC_ID_RE.test(authorityText);
+  if (hasPositiveVerb(authorityText, REVISE_VERB_RE) && hasDocObject) {
+    const idMatch = authorityText.match(DOC_ID_RE);
+    const titleMatch = authorityText.match(
       /\b(?:document|note|synthèse|rapport)\s+[«"]?([^»"\n,]{2,80})/i,
     );
-    const sectionMatch = trimmed.match(SECTION_RE);
+    const sectionMatch = authorityText.match(SECTION_RE);
     return {
       kind: "REVISE",
       documentHint: idMatch?.[1] ?? titleMatch?.[1]?.trim() ?? null,
@@ -48,11 +192,19 @@ export function qualifyDocumentAct(text: string): QualifiedDocumentAct {
     };
   }

-  if (CREATE_RE.test(trimmed) || CREATE_PLEASE_RE.test(trimmed)) {
+  if (
+    (CREATE_PAIR_RE.test(authorityText) || CREATE_PLEASE_RE.test(authorityText)) &&
+    hasPositiveVerb(authorityText, CREATE_VERB_RE)
+  ) {
+    return { kind: "CREATE" };
+  }
+
+  // CREATE_PLEASE without create verb (e.g. "document s'il te plaît") — still CREATE if not negated.
+  if (CREATE_PLEASE_RE.test(authorityText) && !isGlobalDocumentWriteNegation(authorityText)) {
     return { kind: "CREATE" };
   }

-  return { kind: "NONE" };
+  return { kind: "NONE", reason: "NO_EXPLICIT_WRITE" };
 }

 /** Backward-compatible predicate used by older call sites / tests. */
@@ -144,55 +296,127 @@ export function resolveReviseTarget(
   };
 }

-type SectionBlock = { heading: string; level: number; body: string };
+export type SectionSpan = {
+  heading: string;
+  level: number;
+  /** Absolute start of the heading line. */
+  start: number;
+  /** Absolute start of body (char after heading line newline), or start+len if no body. */
+  bodyStart: number;
+  /** Exclusive end of section (start of next same-or-higher heading, or EOF). */
+  end: number;
+};
+
+/**
+ * Locate ATX sections with exact offsets. Ignores headings inside fenced code blocks.
+ */
+export function locateSections(md: string): SectionSpan[] {
+  const lines: Array<{ text: string; start: number }> = [];
+  let offset = 0;
+  const rawLines = md.split(/\n/);
+  for (let i = 0; i < rawLines.length; i++) {
+    const text = rawLines[i]!;
+    lines.push({ text, start: offset });
+    offset += text.length + (i < rawLines.length - 1 ? 1 : 0);
+  }

-/** Split markdown into heading-led sections (ATX). Leading preamble kept as level 0. */
-export function splitMarkdownSections(md: string): SectionBlock[] {
-  const lines = md.split(/\r?\n/);
-  const blocks: SectionBlock[] = [];
-  let current: SectionBlock = { heading: "", level: 0, body: "" };
-  for (const line of lines) {
-    const m = /^(#{1,6})\s+(.+)$/.exec(line);
+  const headingLines: Array<{ lineIdx: number; level: number; heading: string }> = [];
+  let inFence = false;
+  for (let i = 0; i < lines.length; i++) {
+    const t = lines[i]!.text;
+    if (/^```/.test(t)) {
+      inFence = !inFence;
+      continue;
+    }
+    if (inFence) continue;
+    const m = /^(#{1,6})\s+(.+?)\s*$/.exec(t);
     if (m) {
-      if (current.heading || current.body.trim()) blocks.push(current);
-      current = { heading: m[2]!.trim(), level: m[1]!.length, body: "" };
-    } else {
-      current.body += (current.body ? "\n" : "") + line;
+      headingLines.push({ lineIdx: i, level: m[1]!.length, heading: m[2]!.trim() });
     }
   }
-  if (current.heading || current.body.trim()) blocks.push(current);
-  return blocks;
+
+  const spans: SectionSpan[] = [];
+  for (let h = 0; h < headingLines.length; h++) {
+    const cur = headingLines[h]!;
+    const line = lines[cur.lineIdx]!;
+    const bodyStart =
+      cur.lineIdx + 1 < lines.length
+        ? lines[cur.lineIdx + 1]!.start
+        : line.start + line.text.length;
+    let end = md.length;
+    for (let n = h + 1; n < headingLines.length; n++) {
+      const nxt = headingLines[n]!;
+      if (nxt.level <= cur.level) {
+        end = lines[nxt.lineIdx]!.start;
+        break;
+      }
+    }
+    spans.push({
+      heading: cur.heading,
+      level: cur.level,
+      start: line.start,
+      bodyStart,
+      end,
+    });
+  }
+  return spans;
+}
+
+/** @deprecated Prefer locateSections for exact edits. Kept for heading lists in tests. */
+export function splitMarkdownSections(
+  md: string,
+): Array<{ heading: string; level: number; body: string }> {
+  return locateSections(md).map((s) => ({
+    heading: s.heading,
+    level: s.level,
+    body: md.slice(s.bodyStart, s.end),
+  }));
 }

-function matchSectionIndexes(blocks: SectionBlock[], hint: string): number[] {
+function matchSectionSpans(spans: SectionSpan[], hint: string): SectionSpan[] {
   const h = hint.toLowerCase().trim();
-  return blocks
-    .map((b, i) => ({ b, i }))
-    .filter(
-      ({ b }) =>
-        b.heading.toLowerCase() === h ||
-        b.heading.toLowerCase().includes(h) ||
-        new RegExp(`\\bsection\\s+${escapeRegExp(h)}\\b`, "i").test(b.heading) ||
-        new RegExp(`\\b${escapeRegExp(h)}\\b`, "i").test(b.heading),
-    )
-    .map(({ i }) => i);
+  return spans.filter(
+    (b) =>
+      b.heading.toLowerCase() === h ||
+      b.heading.toLowerCase().includes(h) ||
+      new RegExp(`\\bsection\\s+${escapeRegExp(h)}\\b`, "i").test(b.heading) ||
+      new RegExp(`\\b${escapeRegExp(h)}\\b`, "i").test(b.heading),
+  );
 }

-function renderSections(blocks: SectionBlock[]): string {
-  return blocks
-    .map((b) => {
-      if (b.level <= 0) return b.body;
-      const head = `${"#".repeat(b.level)} ${b.heading}`;
-      return b.body ? `${head}\n${b.body}` : head;
-    })
-    .join("\n\n")
-    .replace(/\n{3,}/g, "\n\n")
-    .trimEnd() + "\n";
+/**
+ * Extract replacement body for a target section from Nora's proposal.
+ * Refuses conversational dumps that are not a clear section body.
+ */
+export function extractProposedSectionBody(
+  proposedMarkdown: string,
+  sectionHint: string,
+  baseHeading: string,
+): { ok: true; body: string } | { ok: false; reason: string } {
+  const spans = locateSections(proposedMarkdown);
+  const hits = matchSectionSpans(spans, sectionHint);
+  if (hits.length === 1) {
+    return { ok: true, body: proposedMarkdown.slice(hits[0]!.bodyStart, hits[0]!.end) };
+  }
+  if (hits.length > 1) {
+    return { ok: false, reason: "SECTION_AMBIGUOUS_IN_PROPOSAL" };
+  }
+  // No matching heading — refuse dumping the whole conversational reply into the section.
+  if (spans.length > 0 || /résultat applicatif d4|nora\s*\(/i.test(proposedMarkdown)) {
+    return { ok: false, reason: "SECTION_CONTENT_UNCLEAR_IN_PROPOSAL" };
+  }
+  // Bare body without headings — only accept if short and not a full conversation.
+  const trimmed = proposedMarkdown.trim();
+  if (!trimmed || trimmed.length > 20_000) {
+    return { ok: false, reason: "SECTION_CONTENT_UNCLEAR_IN_PROPOSAL" };
+  }
+  void baseHeading;
+  return { ok: true, body: `${trimmed}\n` };
 }

 /**
- * Merge Nora's proposed target section into the base document.
- * Non-target sections are taken exclusively from base (scope control).
+ * Splice Nora's section body into the base document at exact offsets.
+ * Non-target bytes are preserved verbatim (spaces, blank lines, fences).
  */
 export function applyTargetedSectionRevision(
   baseMarkdown: string,
@@ -200,34 +424,36 @@ export function applyTargetedSectionRevision(
   sectionHint: string | null,
 ): { ok: true; content: string } | { ok: false; reason: string } {
   if (!sectionHint) {
+    // Full-document revise only when the proposal is clearly document markdown, not chat.
+    if (/résultat applicatif d4/i.test(proposedMarkdown)) {
+      return { ok: false, reason: "PROPOSAL_CONTAINS_APPLICATIVE_ACK" };
+    }
     return { ok: true, content: proposedMarkdown };
   }
-  const base = splitMarkdownSections(baseMarkdown);
-  const proposed = splitMarkdownSections(proposedMarkdown);
-  const baseHits = matchSectionIndexes(base, sectionHint);
-  if (baseHits.length !== 1) {
+
+  const baseSpans = locateSections(baseMarkdown);
+  if (baseSpans.length === 0) {
+    return { ok: false, reason: "NO_SECTION_STRUCTURE" };
+  }
+  const hits = matchSectionSpans(baseSpans, sectionHint);
+  if (hits.length === 0) {
     return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
   }
-  const proposedHits = matchSectionIndexes(proposed, sectionHint);
-  const replacement: SectionBlock =
-    proposedHits.length === 1
-      ? proposed[proposedHits[0]!]!
-      : {
-          heading: base[baseHits[0]!]!.heading,
-          level: base[baseHits[0]!]!.level,
-          body: proposedMarkdown.trim(),
-        };
-  const merged = base.map((b, i) =>
-    i === baseHits[0]
-      ? { heading: b.heading, level: b.level, body: replacement.body }
-      : b,
-  );
-  return { ok: true, content: renderSections(merged) };
+  if (hits.length > 1) {
+    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
+  }
+  const target = hits[0]!;
+  const extracted = extractProposedSectionBody(proposedMarkdown, sectionHint, target.heading);
+  if (!extracted.ok) return extracted;
+
+  // Keep heading line + everything before bodyStart and everything after end byte-identical.
+  const content =
+    baseMarkdown.slice(0, target.bodyStart) + extracted.body + baseMarkdown.slice(target.end);
+  return { ok: true, content };
 }

 /**
- * When sectionHint is set, require non-target sections to remain identical to base.
- * Fail closed on ambiguous section match.
+ * Exact (non-normalized) check that bytes outside the target section are unchanged.
  */
 export function assertSectionScope(
   baseMarkdown: string,
@@ -235,34 +461,27 @@ export function assertSectionScope(
   sectionHint: string | null,
 ): { ok: true } | { ok: false; reason: string } {
   if (!sectionHint) return { ok: true };
-  const base = splitMarkdownSections(baseMarkdown);
-  const next = splitMarkdownSections(nextMarkdown);
-  const baseHits = matchSectionIndexes(base, sectionHint);
-  const nextHits = matchSectionIndexes(next, sectionHint);
+  const baseSpans = locateSections(baseMarkdown);
+  const nextSpans = locateSections(nextMarkdown);
+  const baseHits = matchSectionSpans(baseSpans, sectionHint);
+  const nextHits = matchSectionSpans(nextSpans, sectionHint);
   if (baseHits.length !== 1) {
     return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
   }
   if (nextHits.length !== 1) {
     return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_NEXT" };
   }
-
-  const baseTarget = baseHits[0]!;
-  const nextTarget = nextHits[0]!;
-  const normalize = (s: string) => s.replace(/\s+/g, " ").trim();
-  const baseOthers = base
-    .filter((_, i) => i !== baseTarget)
-    .map((b) => `${b.level}:${normalize(b.heading)}:${normalize(b.body)}`);
-  const nextOthers = next
-    .filter((_, i) => i !== nextTarget)
-    .map((b) => `${b.level}:${normalize(b.heading)}:${normalize(b.body)}`);
-
-  if (baseOthers.length !== nextOthers.length) {
-    return { ok: false, reason: "SECTION_SCOPE_STRUCTURE_CHANGED" };
+  const b = baseHits[0]!;
+  const n = nextHits[0]!;
+  const basePrefix = baseMarkdown.slice(0, b.bodyStart);
+  const nextPrefix = nextMarkdown.slice(0, n.bodyStart);
+  if (basePrefix !== nextPrefix) {
+    return { ok: false, reason: "SECTION_SCOPE_PREFIX_CHANGED" };
   }
-  for (let i = 0; i < baseOthers.length; i++) {
-    if (baseOthers[i] !== nextOthers[i]) {
-      return { ok: false, reason: "SECTION_SCOPE_EXCEEDED" };
-    }
+  const baseSuffix = baseMarkdown.slice(b.end);
+  const nextSuffix = nextMarkdown.slice(n.end);
+  if (baseSuffix !== nextSuffix) {
+    return { ok: false, reason: "SECTION_SCOPE_EXCEEDED" };
   }
   return { ok: true };
 }
@@ -282,6 +501,35 @@ export type DocumentEffectSummary = {
   idempotentReplay?: boolean;
 };

+const FALSE_UNSAVED_RE =
+  /\b(non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+d['’]écriture\s+d4|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde)\b/gi;
+const FALSE_SAVED_RE =
+  /\b(document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/gi;
+
+/**
+ * Remove narration that contradicts the observed D4 effect, without deleting document body.
+ */
+export function reconcileNarrationWithDocumentEffect(
+  assistantContent: string,
+  effect: DocumentEffectSummary | null,
+): string {
+  if (!effect) return assistantContent;
+  let text = assistantContent;
+  const status = effect.status ?? "UNKNOWN";
+
+  if (status === "AVAILABLE") {
+    text = text.replace(FALSE_UNSAVED_RE, "[état d'enregistrement : voir résultat applicatif D4]");
+  } else if (status === "FAILED" || status === "CONFLICT" || status === "UNKNOWN") {
+    text = text.replace(FALSE_SAVED_RE, "[état d'enregistrement : voir résultat applicatif D4]");
+  }
+
+  // If both a residual "non enregistré" and AVAILABLE somehow remain, force a clear marker.
+  if (status === "AVAILABLE" && /\bnon\s+enregistré\b/i.test(text)) {
+    text = text.replace(/\bnon\s+enregistré\b/gi, "enregistrement : voir résultat applicatif D4");
+  }
+  return text;
+}
+
 /**
  * Application ACK appended after confirmed effect — distinct from Nora narration.
  */
@@ -302,7 +550,7 @@ export function formatDocumentEffectAck(effect: DocumentEffectSummary | null): s
   if (effect.status === "AVAILABLE") {
     lines.push(
       "",
-      "Ce statut est confirmé par la persistance Studio. Ne pas le contredire.",
+      "Ce statut est confirmé par la persistance Studio. Il prévaut sur toute narration contraire.",
     );
   } else if (effect.status === "CONFLICT") {
     lines.push("", "Conflit de base — aucune nouvelle révision écrite. Requalification requise.");
@@ -316,7 +564,9 @@ export function appendDocumentEffectAck(
   assistantContent: string,
   effect: DocumentEffectSummary | null,
 ): string {
+  if (!effect) return assistantContent;
+  const reconciled = reconcileNarrationWithDocumentEffect(assistantContent, effect);
   const ack = formatDocumentEffectAck(effect);
-  if (!ack) return assistantContent;
-  return `${assistantContent.trimEnd()}\n\n---\n${ack}\n`;
+  if (!ack) return reconciled;
+  return `${reconciled.trimEnd()}\n\n---\n${ack}\n`;
 }

```

## 6. Tests exécutés (cette passe — nombres réels)

| Commande | Résultat |
|---|---|
| `npx tsc --noEmit` | PASS |
| `npm run lint` | PASS (warnings préexistants hors scope) |
| `npm run build` | PASS |
| `vitest run tests/unit` | **36 files / 230 tests PASS** (précédent cycle : 220 ; +10 assertions corrective) |
| `vitest document-act.test.ts` | **21 PASS** |
| `vitest git-file-provenance.test.ts` | **2 PASS** (non-régression REC-07) |
| `vitest ml4-chat-first-d4-provenance.pg.test.ts` | **7 PASS** (précédent : 5 ; +négation + whitespace DB) |
| `vitest ml2-knowledge-documents.pg.test.ts` | **6 PASS** |
| `git diff --check` (commit) | PASS |

**Non exécuté / non revendiqué PASS :** LIVE Nora, GitHub REAL read, USER RECETTE, browser E2E.

## 7. Anomalies / réserves

| ID | Statut |
|---|---|
| Réserve A (négation/question) | **LEVÉE** (DET) |
| Réserve B (intégrité espaces) | **LEVÉE** (DET) |
| Réserve C (contradiction ACK) | **LEVÉE** (DET) |
| ML4-REC-07 provenance | non-régression DET |
| REC-03/04/05/06 | hors / OPEN inchangés |
| USER RECETTE | NOT RUN |

## 8. Impacts

- Autorité : toujours serveur ; pas de second moteur / LLM classifier.
- Données : reviseDocument unique propriétaire ; v1 intacte ; hors-cible byte-identical.
- API : inchangée.
- UX : message assistant sans double vérité contradictoire sur l'enregistrement.
- Observabilité : events revise existants conservés.

## 9. Verdict

**READY FOR REVIEW — TARGETED CORRECTIVE PASS COMPLETE WITH VERIFIED LOCAL COVERAGE.**

Prochain gate Morris : mise à disposition RECETTE d'un build issu de `1fedb9ff83771c1a12f55714c2d6967c5300ac61` (GO distinct) — non autorisée ici.

## 10. Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
Confronter HEAD `1fedb9ff83771c1a12f55714c2d6967c5300ac61`, base `974b0030a94469bef05496151792e8c35a9a83e9`, comportements négatifs, préservation exacte, cohérence ACK, tests, non-régression provenance, réserves.
Puis verdict critique et recommandation ou refus de mise à disposition RECETTE.

---
*Fin Review Pack FULL — passe corrective 2026-11-09 — HEAD `1fedb9ff83771c1a12f55714c2d6967c5300ac61`*
