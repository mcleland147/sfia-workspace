/**
 * Chat-first D4 act qualification — create vs revise vs none.
 * Server authority only; Nora text never creates or revises alone.
 */
import { contentSha256, parseFenceMeta } from "@/domains/conversation/document-command";

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

/**
 * Complements allowed between a CREATE verb and a documentary object
 * (location, novelty, title framing) — not a free-form widen of authority.
 * No project/client proper names hardcoded: capitalized tokens pass via isCreateComplementToken.
 *
 * Note: historical CREATE_PLEASE_RE (« document … s'il te plaît ») was removed —
 * politeness alone never authorizes D4; create verb + object must share a clause window.
 */
const CREATE_COMPLEMENT_TOKEN_RE =
  /^(?:et|ou|puis|dans|sur|pour|de|du|des|le|la|les|un|une|ce|cette|ces|au|aux|en|par|avec|vers|sous|interne|internes|studio|projet|recette|nouveau|nouvelle|nouveaux|nouvelles|intitulé|intitulée|intitulés|intitulées|nommé|nommée|appelé|appelée|enregistre|enregistrer|sauvegarde|sauvegarder|persist|persiste|persister|d4|documents?|notes?|synthèses?|rapports?|spécifications?|titre|espace)$/i;

/** Proper-noun / project-label token (structure only — not a name allowlist). */
const CREATE_PROPER_NOUN_TOKEN_RE = /^[A-ZÀ-Ÿ][\wÀ-ÿ-]{1,47}$/;

function isCreateComplementToken(raw: string): boolean {
  const tok = raw.replace(/[.,;:!?«»""''()[\]]/g, "");
  if (!tok) return false;
  if (CREATE_COMPLEMENT_TOKEN_RE.test(tok)) return true;
  // « dans le projet OrionAtlas » — identity-agnostic capitalized label.
  if (CREATE_PROPER_NOUN_TOKEN_RE.test(tok)) return true;
  return false;
}

/** Explicit refusal of durable D4 persistence on an otherwise positive draft. */
function hasDurableSaveNegation(text: string): boolean {
  return (
    /\bne\s+(?:l['’])?enregistre\s+pas\b/i.test(text) ||
    /\bne\s+(?:le\s+|la\s+)?sauvegarde\s+pas\b/i.test(text) ||
    /\bsans\s+(?:l['’])?enregistrer\b/i.test(text) ||
    /\bsans\s+(?:le\s+)?sauvegarder\b/i.test(text) ||
    /\bne\s+(?:l['’])?enregistre\s+pas\s+dans\s+(?:les\s+)?documents?\b/i.test(text) ||
    /\bmais\s+ne\s+(?:l['’])?enregistre\s+pas\b/i.test(text)
  );
}

/** Irresolvable CREATE contradiction on the same utterance (N11 / C12). */
function hasAmbiguousCreateContradiction(text: string): boolean {
  const t = text.replace(/\s+/g, " ").trim();
  // « Crée ou ne crée pas … »
  if (
    /\b(crée|créer|rédige|rédiger)\b[\s\S]{0,48}\bou\b[\s\S]{0,24}\bne\s+(?:en\s+|le\s+|la\s+|l['’])?(?:crée|créer|rédige|rédiger)\s+pas\b/i.test(
      t,
    )
  ) {
    return true;
  }
  // Positive create+document AND negated create+document without Git-branch disambiguation.
  const negCreateDoc =
    /\bne\s+(?:me\s+)?(?:crée|créer)\s+(?:pas|aucun|aucune)[\s\S]{0,48}\bdocuments?\b/i.test(t);
  if (!negCreateDoc) return false;
  if (/\b(branche|github|git)\b/i.test(t)) return false;
  // Count positive (non-negated) create verbs that still see a doc object in their own clause window.
  let positiveCreateDoc = false;
  for (const verb of findVerbMatches(t, CREATE_VERB_RE)) {
    if (isVerbNegated(t, verb.index, verb.text.length)) continue;
    const window = clauseWindowAfterVerb(t, verb.index + verb.text.length);
    if (/\b(documents?|notes?|synthèses?|rapports?|spécifications?)\b/i.test(window)) {
      positiveCreateDoc = true;
      break;
    }
  }
  return positiveCreateDoc && negCreateDoc;
}

/**
 * Text after a verb up to the next create/revise verb, consultative verb,
 * or hard clause break — prevents binding a later clause's documentary object
 * to an earlier verb (e.g. « Crée une branche, puis montre-moi le document »).
 */
function clauseWindowAfterVerb(text: string, afterVerbIndex: number, maxLen = 160): string {
  const after = text.slice(afterVerbIndex, afterVerbIndex + maxLen);
  const nextAct =
    /\b(?:rédige|rédiger|écris|écrire|produis|produire|crée|créer|révise|reviser|réviser|revise|modifie|modifier|corrige|corriger|montre(?:[- ]moi)?|affiche|ouvre|liste|consulte|voir)\b/i.exec(
      after.slice(1),
    );
  let end = after.length;
  if (nextAct?.index != null) end = Math.min(end, nextAct.index + 1);
  // Sequential / contrast clause markers always end the create-object window.
  const seqBreak = /\b(?:puis|ensuite|après(?:\s+quoi)?|alors)\b/i.exec(after);
  if (seqBreak?.index != null) end = Math.min(end, seqBreak.index);
  const hardBreak = /[;]|(\bmais\b)/i.exec(after);
  if (hardBreak?.index != null && hardBreak.index < end) {
    // Keep « mais » local complements only when it does not introduce another act verb soon after.
    const afterMais = after.slice(hardBreak.index);
    if (
      /\bmais\b[\s\S]{0,20}\b(?:ne\s+)?(?:crée|créer|rédige|rédiger|révise|réviser|modifie|modifier|montre|ouvre|affiche)\b/i.test(
        afterMais,
      )
    ) {
      end = Math.min(end, hardBreak.index);
    }
  }
  return after.slice(0, end);
}

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
 * Structured CREATE recognition: positive create verb + documentary object
 * in the *same clause window* (complements / novelty / persist verbs allowed).
 * Does not treat co-presence of words across contradictory clauses as authority.
 */
export function hasExplicitCreateIntent(_text: string): boolean {
  return false;
}


/** Consultative listing / show docs — not a write. */
export function isDocumentaryConsultationOnly(_text: string): boolean {
  return false;
}


/**
 * SEM-02 — retired lexical signal. Documentary write intent comes from Nora
 * semantic qualification (d4.create_document / d4.revise_document REQUEST_EFFECT).
 */
export function hasDocumentaryWriteSignal(_text: string): boolean {
  return false;
}

/** Informative / hypothetical questions are not mutation requests. */
export function isInformativeOrHypothetical(_text: string): boolean {
  return false;
}


/**
 * Global prohibition of documentary write (not a local "don't touch other sections").
 */
export function isGlobalDocumentWriteNegation(_text: string): boolean {
  return false;
}


/**
 * SEM-02 — retired as production métier router.
 * Documentary CREATE/REVISE comes from Nora semantic qualification only.
 * Technical helpers (extractContractualDocumentProposal, resolveReviseTarget, fences)
 * remain for owner execution after semantic REQUEST_EFFECT.
 */
export function qualifyDocumentAct(_text: string): QualifiedDocumentAct {
  return { kind: "NONE", reason: "SEMANTIC_ROUTER_REQUIRED" };
}

/** Backward-compatible predicate — always false after SEM-02 retirement. */
export function explicitDocumentIntent(_text: string): boolean {
  return false;
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

/**
 * Explicit historical-base confirmation bound to concrete identities.
 * Lexical regex alone must never authorize a historical revise (R2).
 */
export type HistoricalSourceConfirmation = {
  documentId: string;
  sourceRevisionId: string;
  observedHeadRevisionId: string;
  choice: "USE_SOURCE" | "USE_HEAD" | "REFUSED";
};

/** Optional Documents→Travail focus: exact drafting source may be historical. */
export type DocumentReviseFocus = {
  documentId: string;
  sourceRevisionId: string;
  sourceRevisionNumber?: number;
  /**
   * Client-supplied body is NEVER authoritative (R1). Kept optional for transport
   * compatibility only — resolveReviseTarget and the conversation owner path ignore it.
   */
  sourceContentMarkdown?: string;
  observedHeadRevisionId: string;
  observedHeadRevisionNumber?: number;
  /** Legacy UX bool — accepted only when identities still match (see resolveHistoricalConfirmation). */
  confirmedHistoricalSource?: boolean;
  /** Preferred R2 confirmation: explicit choice bound to document/source/head IDs. */
  historicalConfirmation?: HistoricalSourceConfirmation;
  /**
   * F2 — server-issued authorization id from an explicit Pilot choice turn.
   * Client bool / fabricated historicalConfirmation alone is never sufficient.
   */
  historicalAuthorizationId?: string;
  /**
   * F1 — when Documents focus is active, D4 REVISE mutate requires explicit conserve
   * bound to a pending candidate id + content hash.
   */
  conserveProposal?: boolean;
  pendingCandidateId?: string;
  pendingCandidateContentSha256?: string;
};

/**
 * F2 — resolve whether a historical source is explicitly confirmed.
 * Never uses free-text lexical matching.
 * Prefer a server-loaded HistoricalSourceAuthorization (passed by caller).
 * Client-only historicalConfirmation / confirmedHistoricalSource are NOT sufficient alone.
 */
export function resolveHistoricalConfirmation(input: {
  focus: DocumentReviseFocus | null | undefined;
  documentId: string;
  sourceRevisionId: string;
  /** Head claimed at confirmation / focus time. */
  claimedObservedHeadRevisionId: string;
  /** Actual AVAILABLE head from D4 at evaluation time. */
  actualHeadRevisionId: string;
  /**
   * Server-loaded authorization for focus.historicalAuthorizationId.
   * When provided, this is the only path that can confirm USE_SOURCE.
   */
  serverAuthorization?: {
    id: string;
    documentId: string;
    sourceRevisionId: string;
    observedHeadRevisionId: string;
    choice: "USE_SOURCE" | "USE_HEAD";
  } | null;
}): {
  confirmed: boolean;
  reason:
    | "NOT_HISTORICAL"
    | "CONFIRMED_SERVER"
    | "REFUSED"
    | "USE_HEAD"
    | "MISSING_CONFIRMATION"
    | "IDENTITY_MISMATCH"
    | "HEAD_MOVED"
    | "CLIENT_CLAIM_INSUFFICIENT";
} {
  const sourceIsHistorical = input.sourceRevisionId !== input.actualHeadRevisionId;
  if (!sourceIsHistorical) {
    return { confirmed: false, reason: "NOT_HISTORICAL" };
  }

  const auth = input.serverAuthorization;
  if (auth) {
    if (
      auth.documentId !== input.documentId ||
      auth.sourceRevisionId !== input.sourceRevisionId ||
      auth.observedHeadRevisionId !== input.claimedObservedHeadRevisionId
    ) {
      return { confirmed: false, reason: "IDENTITY_MISMATCH" };
    }
    if (auth.observedHeadRevisionId !== input.actualHeadRevisionId) {
      return { confirmed: false, reason: "HEAD_MOVED" };
    }
    if (auth.choice === "USE_HEAD") {
      return { confirmed: false, reason: "USE_HEAD" };
    }
    if (auth.choice === "USE_SOURCE") {
      return { confirmed: true, reason: "CONFIRMED_SERVER" };
    }
    return { confirmed: false, reason: "MISSING_CONFIRMATION" };
  }

  // Client-supplied claims without a server authorization never confirm.
  if (
    input.focus?.historicalConfirmation ||
    input.focus?.confirmedHistoricalSource === true
  ) {
    return { confirmed: false, reason: "CLIENT_CLAIM_INSUFFICIENT" };
  }

  return { confirmed: false, reason: "MISSING_CONFIRMATION" };
}

export function resolveReviseTarget(
  docs: DocumentListItem[],
  hint: string | null,
  focus?: DocumentReviseFocus | null,
): ResolvedReviseTarget {
  const available = docs.filter((d) => d.latestRevision?.status === "AVAILABLE");
  if (available.length === 0) {
    return { ok: false, reason: "NO_AVAILABLE_REVISION" };
  }

  if (focus?.documentId && focus.sourceRevisionId && focus.observedHeadRevisionId) {
    const d = available.find((x) => x.document.id === focus.documentId);
    if (!d?.latestRevision) {
      return { ok: false, reason: "NOT_FOUND" };
    }
    if (d.latestRevision.id !== focus.observedHeadRevisionId) {
      // Head moved since focus was taken — caller must requalify; still resolve
      // to current head as observed for CONFLICT at D4 commit.
    }
    // R1: never use client sourceContentMarkdown. Head body may come from the
    // authorized list payload (D4-backed); any non-head source forces empty
    // baseContent so the owner path reloads the exact revision via getDocumentRevision.
    if (focus.sourceRevisionId === d.latestRevision.id) {
      return {
        ok: true,
        documentId: d.document.id,
        title: d.document.title,
        baseRevisionId: focus.sourceRevisionId,
        baseRevisionNumber: focus.sourceRevisionNumber ?? d.latestRevision.revisionNumber,
        baseContent: d.latestRevision.contentMarkdown,
      };
    }
    return {
      ok: true,
      documentId: d.document.id,
      title: d.document.title,
      baseRevisionId: focus.sourceRevisionId,
      baseRevisionNumber: focus.sourceRevisionNumber ?? d.latestRevision.revisionNumber,
      baseContent: "",
    };
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
/**
 * Internal parsing provenance of the extracted title — not a durable business field.
 * Distinguishes structured metadata titles from LEGACY H1 / untitled sentinel synthesis.
 */
export type DocumentProposalTitleProvenance =
  | "STRUCTURED"
  | "LEGACY_H1"
  | "LEGACY_UNTITLED";

export type DocumentProposalExtract =
  | {
      ok: true;
      content: string;
      title: string;
      /** How the title was obtained from the fence source. */
      titleProvenance: DocumentProposalTitleProvenance;
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
        | "DOCUMENT_PROPOSAL_UNCLOSED"
        | "DOCUMENT_PROPOSAL_METADATA_INVALID"
        | "DOCUMENT_PROPOSAL_INTEGRITY_MISMATCH"
        | "DOCUMENT_PROPOSAL_TITLE_MISMATCH";
      path: "none" | "ambiguous" | "empty" | "unclosed";
      fenceCount: number;
      proposalChars: number;
      proposalDigest16: string | null;
      bodyEndsWithNewline: boolean;
      sectionCount: number;
    };

/** Sole mutative proposal marker — exact first info-string token (case-insensitive). */
export const DOCUMENT_PROPOSAL_TAG = "sfia-document";

/**
 * LEGACY fence sentinel when the body has no document-level `# H1`.
 * Not a contractual document title — read-path compatibility only.
 */
export const LEGACY_UNTITLED_DOCUMENT_TITLE = "Document Nora";

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
  | { status: "ok"; content: string; tag: string; fenceInfo: string; openerLength: number }
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
    proposals.push({
      status: "ok",
      content,
      tag: DOCUMENT_PROPOSAL_TAG,
      fenceInfo: open.info.trim(),
      openerLength: open.length,
    });
    i = closedAt + 1;
  }

  return { proposals, contractualOpenCount };
}

/** Remove autonomous contractual fences; keep conversational / illustrative text. */
export function stripContractualDocumentFences(assistantText: string): string {
  const lines = splitMarkdownLines(assistantText);
  const chunks: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const open = parseFenceMarkerLine(lines[i]!.text);
    if (!open) {
      const start = lines[i]!.start;
      const end = i + 1 < lines.length ? lines[i + 1]!.start : assistantText.length;
      chunks.push(assistantText.slice(start, end));
      i += 1;
      continue;
    }
    if (!isContractualProposalOpen(open)) {
      const start = lines[i]!.start;
      const after = skipIllustrativeFence(lines, i, open);
      const end = after < lines.length ? lines[after]!.start : assistantText.length;
      chunks.push(assistantText.slice(start, end));
      i = after;
      continue;
    }
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
      const opensInner =
        cand.info.trim() !== "" ||
        cand.char !== open.char ||
        cand.length < open.length;
      if (opensInner) {
        nest.push({ char: cand.char, length: cand.length });
      }
    }
    if (closedAt == null) break;
    i = closedAt + 1;
  }
  return chunks.join("").trimEnd();
}

function normalizeStructuredProposalBody(
  raw: string,
  expectedChars: number,
): { ok: true; content: string } | { ok: false; reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" } {
  if (raw.length === expectedChars) {
    return { ok: true, content: raw };
  }
  if (raw.length === expectedChars + 1 && raw.endsWith("\n")) {
    return { ok: true, content: raw.slice(0, -1) };
  }
  return { ok: false, reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
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

  const scanned = proposals[0]!;
  let content = scanned.content;
  const meta = parseFenceMeta(scanned.fenceInfo);

  // P0-A: INVALID structured metadata never falls through to LEGACY.
  if (meta.kind === "INVALID") {
    return failProposal("DOCUMENT_PROPOSAL_METADATA_INVALID", "empty", 1, content);
  }

  if (meta.kind === "STRUCTURED") {
    const normalized = normalizeStructuredProposalBody(content, meta.chars);
    if (!normalized.ok) {
      return failProposal(normalized.reason, "empty", 1, content);
    }
    content = normalized.content;
    let title: string;
    try {
      title = Buffer.from(meta.titleB64, "base64url").toString("utf8").trim();
    } catch {
      return failProposal("DOCUMENT_PROPOSAL_METADATA_INVALID", "empty", 1, content);
    }
    if (!title) {
      return failProposal("DOCUMENT_PROPOSAL_METADATA_INVALID", "empty", 1, content);
    }
    const digest = contentSha256(title, content);
    if (digest !== meta.pairSha256) {
      return failProposal("DOCUMENT_PROPOSAL_INTEGRITY_MISMATCH", "empty", 1, content);
    }
    const h1 = /^#\s+(.+?)(?:\r?\n|$)/.exec(content);
    if (h1) {
      const heading = h1[1]!.trim();
      if (heading !== title) {
        return failProposal("DOCUMENT_PROPOSAL_TITLE_MISMATCH", "empty", 1, content);
      }
    }
    if (!content.trim() || content.trim().length < 8) {
      return failProposal("DOCUMENT_PROPOSAL_EMPTY", "empty", 1, content);
    }
    return {
      ok: true,
      content,
      title,
      titleProvenance: "STRUCTURED",
      path: "fence",
      fenceTag: DOCUMENT_PROPOSAL_TAG,
      fenceCount: 1,
      proposalChars: content.length,
      proposalDigest16: digest16(content),
      bodyEndsWithNewline: content.endsWith("\n"),
      sectionCount: locateSections(content).length,
    };
  }

  // LEGACY: fence without structured metadata tokens.
  if (!content.trim() || content.trim().length < 8) {
    return failProposal("DOCUMENT_PROPOSAL_EMPTY", "empty", 1, content);
  }
  const titleLine = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const title = titleLine || LEGACY_UNTITLED_DOCUMENT_TITLE;
  return {
    ok: true,
    content,
    title,
    titleProvenance: titleLine ? "LEGACY_H1" : "LEGACY_UNTITLED",
    path: "fence",
    fenceTag: DOCUMENT_PROPOSAL_TAG,
    fenceCount: 1,
    proposalChars: content.length,
    proposalDigest16: digest16(content),
    bodyEndsWithNewline: content.endsWith("\n"),
    sectionCount: locateSections(content).length,
  };
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

/** CP2 S03 — owner D4 statuses that may appear on DocumentEffectSummary. */
export const DOCUMENT_EFFECT_OWNER_STATUSES = [
  "AVAILABLE",
  "FAILED",
  "CONFLICT",
  "UNKNOWN",
  "NOT_EXECUTED",
] as const;

export type DocumentEffectOwnerStatus =
  (typeof DOCUMENT_EFFECT_OWNER_STATUSES)[number];

/**
 * Map an owner D4 / DocumentSave status onto DocumentEffectSummary.status.
 * Absent or ambiguous values become UNKNOWN — never invent FAILED without proof.
 */
export function mapOwnerDocumentStatusToEffect(
  status: string | null | undefined,
): DocumentEffectOwnerStatus {
  const s = (status ?? "").trim().toUpperCase();
  if (s === "AVAILABLE") return "AVAILABLE";
  if (s === "FAILED") return "FAILED";
  if (s === "CONFLICT") return "CONFLICT";
  if (s === "UNKNOWN") return "UNKNOWN";
  if (s === "NOT_EXECUTED") return "NOT_EXECUTED";
  return "UNKNOWN";
}

/**
 * Build the post-D4 DocumentEffectSummary used by continuation restitution.
 * Preserves owner status, ids, and reason without collapsing UNKNOWN→FAILED.
 */
export function documentSaveToEffectSummary(input: {
  act?: "CREATE" | "REVISE";
  status?: string | null;
  documentId?: string;
  revisionId?: string;
  revisionNumber?: number;
  reason?: string;
  /** When no save object exists at all (no D4 attempt in this branch). */
  absentMeans?: "NOT_EXECUTED" | "UNKNOWN";
}): DocumentEffectSummary {
  if (input.status == null && !input.documentId && !input.reason) {
    return {
      act: input.act ?? "CREATE",
      status: input.absentMeans ?? "NOT_EXECUTED",
      reason: "NO_DOCUMENT_SAVE",
    };
  }
  const status = mapOwnerDocumentStatusToEffect(input.status);
  return {
    act: input.act ?? "CREATE",
    status,
    documentId: input.documentId,
    revisionId: input.revisionId,
    revisionNumber: input.revisionNumber,
    reason:
      input.reason ??
      (status === "AVAILABLE" ? undefined : input.status ?? status),
  };
}

/** Sentences/paragraphs that assert a D4 write outcome (must not compete with applicative truth). */
const TRANSACTIONAL_CLAIM_RE =
  /\b(?:non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+(?:d['’]écriture|disponible)|les\s+outils\s+disponibles\s+(?:sont\s+en\s+lecture\s+seule|ne\s+permettent\s+pas)|outils?\s+(?:en\s+)?lecture\s+seule|je\s+ne\s+(?:peux|puis)\s+(?:donc\s+)?pas\s+(?:exécuter\s+l['’]enregistrement|appliquer|enregistrer|créer|réviser|confirmer(?:\s+(?:la\s+)?(?:sauvegarde|l['’]enregistrement|que(?:\s+la)?\s*sauvegarde)?|garantir(?:\s+(?:la\s+)?sauvegarde)?))|(?:impossible|incapable)\s+de\s+confirmer(?:\s+(?:la\s+)?(?:sauvegarde|l['’]enregistrement))?|ne\s+(?:peux|puis)\s+pas\s+confirmer(?:\s+(?:la\s+)?sauvegarde)?|aucune\s+révision\s+(?:créée|enregistrée)|nouvelle\s+révision\s*:\s*aucune|la\s+version\s+1\s+reste\s+inchangée|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde|document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/i;

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
    // F5 — pilot-facing copy for pending proposal (no internal codes in product surface).
    if (effect.reason === "PROPOSAL_PENDING_CONSERVATION") {
      return [
        "### Proposition non enregistrée",
        "",
        "La rédaction est prête à être examinée dans la visionneuse.",
        "Aucune nouvelle version n'est créée tant que tu n'as pas demandé la conservation.",
      ].join("\n");
    }
    const lines = [
      "### Résultat applicatif",
      "",
      "Aucun enregistrement documentaire n'a été effectué sur ce tour.",
    ];
    if (effect.reason === "HISTORICAL_CONFIRMATION_REQUIRED") {
      lines.push(
        "",
        "Une confirmation de la base historique est requise avant toute révision.",
      );
    } else if (effect.reason === "HISTORICAL_CONFIRMATION_SERVER_REQUIRED") {
      lines.push(
        "",
        "Choisis explicitement la base (historique ou courante) dans la conversation.",
      );
    } else if (effect.reason === "PENDING_CANDIDATE_REQUIRED") {
      lines.push("", "Aucune proposition identifiable n'est prête à être conservée.");
    } else if (
      effect.reason === "CANDIDATE_SUPERSEDED" ||
      effect.reason === "CANDIDATE_CONSUMED" ||
      effect.reason === "CANDIDATE_NOT_FOUND"
    ) {
      lines.push(
        "",
        "La proposition précédente n'est plus valable — demande une nouvelle rédaction.",
      );
    } else     if (effect.reason === "CANDIDATE_HEAD_MOVED" || effect.reason === "HISTORICAL_HEAD_MOVED") {
      lines.push(
        "",
        "La version courante a changé — une nouvelle qualification est nécessaire.",
      );
    } else if (
      effect.reason === "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" ||
      effect.reason === "SECTION_AMBIGUOUS_IN_PROPOSAL" ||
      effect.reason === "SECTION_CONTENT_UNCLEAR_IN_PROPOSAL" ||
      effect.reason === "SECTION_TARGET_OVERLAP" ||
      effect.reason === "SECTION_AMBIGUOUS_OR_MISSING_IN_NEXT" ||
      effect.reason === "SECTION_SCOPE_PREFIX_CHANGED" ||
      effect.reason === "SECTION_SCOPE_EXCEEDED" ||
      effect.reason === "NO_SECTION_STRUCTURE"
    ) {
      lines.push(
        "",
        "La révision ciblée n'a pas pu être appliquée : les sections à modifier sont ambiguës, introuvables ou hors périmètre.",
        "Reformule les cibles (une ou plusieurs sections nommées) ou demande une révision du document entier.",
      );
    } else if (
      effect.reason === "DOCUMENT_PROPOSAL_MISSING" ||
      effect.reason === "DOCUMENT_PROPOSAL_EMPTY" ||
      effect.reason === "DOCUMENT_PROPOSAL_AMBIGUOUS"
    ) {
      lines.push(
        "",
        "Aucune proposition documentaire exploitable n'a été produite sur ce tour.",
      );
    } else if (effect.reason === "NO_EXPLICIT_WRITE" || effect.reason === "SEMANTIC_NONE") {
      lines.push(
        "",
        "Aucune écriture documentaire n'était demandée ou qualifiée sur ce tour.",
      );
    } else if (effect.reason === "QUALIFIED_BUT_NOT_APPLIED" || effect.reason === "MERGE_FAILED") {
      lines.push(
        "",
        "L'intention documentaire a été comprise, mais la proposition n'a pas pu être appliquée.",
      );
    } else if (effect.reason) {
      // RB-18/26 — never claim « non qualifiée » when a concrete downstream reason exists.
      lines.push(
        "",
        "L'intention a pu être comprise, mais aucun enregistrement n'a été effectué — la proposition n'est pas devenue une version.",
      );
    } else {
      lines.push(
        "",
        "Aucun enregistrement documentaire n'a été effectué sur ce tour.",
      );
    }
    return lines.join("\n");
  }

  const lines = [
    "### Résultat d'enregistrement",
    "",
  ];
  if (effect.status === "AVAILABLE") {
    if (effect.revisionNumber != null) {
      lines.push(`Nouvelle version disponible : v${effect.revisionNumber}.`);
    } else {
      lines.push("Nouvelle version documentaire enregistrée.");
    }
    if (effect.idempotentReplay) {
      lines.push("Rejeu idempotent — aucune version supplémentaire créée.");
    }
    lines.push(
      "",
      "L'enregistrement est confirmé. Les versions antérieures restent inchangées.",
    );
  } else if (effect.status === "CONFLICT") {
    lines.push(
      "Conflit de version — aucune nouvelle révision écrite.",
      "Requalification requise avant une nouvelle conservation.",
    );
  } else if (effect.status === "FAILED") {
    lines.push(
      "L'enregistrement a été refusé.",
      "Aucune nouvelle version n'a été créée.",
    );
  } else {
    lines.push(
      "Résultat d'enregistrement encore incertain.",
      "Aucun succès d'écriture ne doit être affirmé pour ce tour.",
    );
  }
  return lines.join("\n");
}

/**
 * Exact byte slices of closed contractual fences from the original assistant text.
 * Used so ACK composition never splits fence interiors on blank lines (QA-06).
 */
export function extractContractualFenceSlices(assistantText: string): string[] {
  const lines = splitMarkdownLines(assistantText);
  const slices: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const open = parseFenceMarkerLine(lines[i]!.text);
    if (!open) {
      i += 1;
      continue;
    }
    if (!isContractualProposalOpen(open)) {
      i = skipIllustrativeFence(lines, i, open);
      continue;
    }
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
      const opensInner =
        cand.info.trim() !== "" ||
        cand.char !== open.char ||
        cand.length < open.length;
      if (opensInner) {
        nest.push({ char: cand.char, length: cand.length });
      }
    }
    if (closedAt == null) break;
    const start = lines[i]!.start;
    const end =
      closedAt + 1 < lines.length ? lines[closedAt + 1]!.start : assistantText.length;
    slices.push(assistantText.slice(start, end));
    i = closedAt + 1;
  }
  return slices;
}

/**
 * Structured final message: prepared content (sanitized) + sole applicative verdict.
 * Guarantees no concurrent « aucune révision » + AVAILABLE.
 * Preserves contractual fence integrity across ACK composition.
 */
export function composeDocumentTurnMessage(
  assistantContent: string,
  effect: DocumentEffectSummary | null,
): string {
  if (!effect) return assistantContent;
  const fenceSlices = extractContractualFenceSlices(assistantContent);
  const narrativeOnly = stripContractualDocumentFences(assistantContent);
  const sanitizedNarrative = reconcileNarrationWithDocumentEffect(narrativeOnly, effect);
  const ack = formatDocumentEffectAck(effect);
  // Strip transactional claims on narrative only — never inside fence slices.
  let body = stripTransactionalClaimUnits(sanitizedNarrative);
  if (effect.status !== "AVAILABLE") {
    const parts = body.split(/\n{2,}/);
    body = parts
      .filter((p) => !NORA_TOOL_BOUNDARY_CLAIM_RE.test(p))
      .join("\n\n")
      .trim();
  }
  const withFences = [body, ...fenceSlices.map((s) => s.replace(/\s+$/u, ""))].filter(
    (s) => s && s.length > 0,
  ).join("\n\n");
  // Trailing whitespace only at the assembly boundary before ACK — fence bodies already closed.
  return `${withFences.replace(/\s+$/u, "")}\n\n---\n${ack}\n`;
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
      /\b(?:aucune\s+révision|ne\s+(?:peux|puis)\s+(?:donc\s+)?pas\s+(?:exécuter|appliquer|confirmer)|impossible\s+de\s+confirmer|non\s+enregistré|outils?\s+disponibles|lecture\s+seule)\b/i.test(
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
