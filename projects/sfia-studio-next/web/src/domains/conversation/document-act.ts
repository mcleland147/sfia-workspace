/**
 * Chat-first D4 act qualification — create vs revise vs none.
 * Server authority only; Nora text never creates or revises alone.
 */

export type DocumentActKind = "CREATE" | "REVISE" | "NONE";

export type QualifiedDocumentAct =
  | { kind: "NONE" }
  | { kind: "CREATE" }
  | {
      kind: "REVISE";
      documentHint: string | null;
      sectionHint: string | null;
    };

const CREATE_RE =
  /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,40}\b(document|note|synthèse|rapport|spécification)\b/i;
const CREATE_PLEASE_RE =
  /\b(document|note de synthèse|rapport)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i;
const REVISE_RE =
  /\b(révise|reviser|réviser|revise|modifie|modifier|mets?\s+à\s+jour|corrige|corriger)\b/i;
const DOC_OBJECT_RE = /\b(document|note|synthèse|rapport|spécification)\b/i;
const SECTION_RE =
  /\b(?:section|partie|chapitre)\s+(\d+|[A-Za-zÀ-ÿ][\wÀ-ÿ-]*)\b/i;
const DOC_ID_RE = /\b(doc_[a-z0-9-]+)\b/i;

/**
 * Qualify explicit documentary intent. Analytical chatter → NONE.
 * Revise wins when revise verb + document object (or doc id / « le document »).
 */
export function qualifyDocumentAct(text: string): QualifiedDocumentAct {
  const trimmed = text.trim();
  if (!trimmed) return { kind: "NONE" };

  const hasRevise = REVISE_RE.test(trimmed);
  const hasDocObject = DOC_OBJECT_RE.test(trimmed) || DOC_ID_RE.test(trimmed);
  if (hasRevise && hasDocObject) {
    const idMatch = trimmed.match(DOC_ID_RE);
    const titleMatch = trimmed.match(
      /\b(?:document|note|synthèse|rapport)\s+[«"]?([^»"\n,]{2,80})/i,
    );
    const sectionMatch = trimmed.match(SECTION_RE);
    return {
      kind: "REVISE",
      documentHint: idMatch?.[1] ?? titleMatch?.[1]?.trim() ?? null,
      sectionHint: sectionMatch?.[1] ?? null,
    };
  }

  if (CREATE_RE.test(trimmed) || CREATE_PLEASE_RE.test(trimmed)) {
    return { kind: "CREATE" };
  }

  return { kind: "NONE" };
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

type SectionBlock = { heading: string; level: number; body: string };

/** Split markdown into heading-led sections (ATX). Leading preamble kept as level 0. */
export function splitMarkdownSections(md: string): SectionBlock[] {
  const lines = md.split(/\r?\n/);
  const blocks: SectionBlock[] = [];
  let current: SectionBlock = { heading: "", level: 0, body: "" };
  for (const line of lines) {
    const m = /^(#{1,6})\s+(.+)$/.exec(line);
    if (m) {
      if (current.heading || current.body.trim()) blocks.push(current);
      current = { heading: m[2]!.trim(), level: m[1]!.length, body: "" };
    } else {
      current.body += (current.body ? "\n" : "") + line;
    }
  }
  if (current.heading || current.body.trim()) blocks.push(current);
  return blocks;
}

function matchSectionIndexes(blocks: SectionBlock[], hint: string): number[] {
  const h = hint.toLowerCase().trim();
  return blocks
    .map((b, i) => ({ b, i }))
    .filter(
      ({ b }) =>
        b.heading.toLowerCase() === h ||
        b.heading.toLowerCase().includes(h) ||
        new RegExp(`\\bsection\\s+${escapeRegExp(h)}\\b`, "i").test(b.heading) ||
        new RegExp(`\\b${escapeRegExp(h)}\\b`, "i").test(b.heading),
    )
    .map(({ i }) => i);
}

function renderSections(blocks: SectionBlock[]): string {
  return blocks
    .map((b) => {
      if (b.level <= 0) return b.body;
      const head = `${"#".repeat(b.level)} ${b.heading}`;
      return b.body ? `${head}\n${b.body}` : head;
    })
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trimEnd() + "\n";
}

/**
 * Merge Nora's proposed target section into the base document.
 * Non-target sections are taken exclusively from base (scope control).
 */
export function applyTargetedSectionRevision(
  baseMarkdown: string,
  proposedMarkdown: string,
  sectionHint: string | null,
): { ok: true; content: string } | { ok: false; reason: string } {
  if (!sectionHint) {
    return { ok: true, content: proposedMarkdown };
  }
  const base = splitMarkdownSections(baseMarkdown);
  const proposed = splitMarkdownSections(proposedMarkdown);
  const baseHits = matchSectionIndexes(base, sectionHint);
  if (baseHits.length !== 1) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
  }
  const proposedHits = matchSectionIndexes(proposed, sectionHint);
  const replacement: SectionBlock =
    proposedHits.length === 1
      ? proposed[proposedHits[0]!]!
      : {
          heading: base[baseHits[0]!]!.heading,
          level: base[baseHits[0]!]!.level,
          body: proposedMarkdown.trim(),
        };
  const merged = base.map((b, i) =>
    i === baseHits[0]
      ? { heading: b.heading, level: b.level, body: replacement.body }
      : b,
  );
  return { ok: true, content: renderSections(merged) };
}

/**
 * When sectionHint is set, require non-target sections to remain identical to base.
 * Fail closed on ambiguous section match.
 */
export function assertSectionScope(
  baseMarkdown: string,
  nextMarkdown: string,
  sectionHint: string | null,
): { ok: true } | { ok: false; reason: string } {
  if (!sectionHint) return { ok: true };
  const base = splitMarkdownSections(baseMarkdown);
  const next = splitMarkdownSections(nextMarkdown);
  const baseHits = matchSectionIndexes(base, sectionHint);
  const nextHits = matchSectionIndexes(next, sectionHint);
  if (baseHits.length !== 1) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
  }
  if (nextHits.length !== 1) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_NEXT" };
  }

  const baseTarget = baseHits[0]!;
  const nextTarget = nextHits[0]!;
  const normalize = (s: string) => s.replace(/\s+/g, " ").trim();
  const baseOthers = base
    .filter((_, i) => i !== baseTarget)
    .map((b) => `${b.level}:${normalize(b.heading)}:${normalize(b.body)}`);
  const nextOthers = next
    .filter((_, i) => i !== nextTarget)
    .map((b) => `${b.level}:${normalize(b.heading)}:${normalize(b.body)}`);

  if (baseOthers.length !== nextOthers.length) {
    return { ok: false, reason: "SECTION_SCOPE_STRUCTURE_CHANGED" };
  }
  for (let i = 0; i < baseOthers.length; i++) {
    if (baseOthers[i] !== nextOthers[i]) {
      return { ok: false, reason: "SECTION_SCOPE_EXCEEDED" };
    }
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
      "Ce statut est confirmé par la persistance Studio. Ne pas le contredire.",
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
  const ack = formatDocumentEffectAck(effect);
  if (!ack) return assistantContent;
  return `${assistantContent.trimEnd()}\n\n---\n${ack}\n`;
}
