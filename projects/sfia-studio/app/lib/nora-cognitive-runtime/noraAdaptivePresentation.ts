/**
 * Nora adaptive presentation — Option C projection (A3/A4).
 *
 * Presentation-only: NEVER Truth C, HumanDecision, ExecutionContract,
 * Evidence authority, ReviewBundle, or Product CTA. Fail-closed to null
 * (caller keeps plain narrative / transcript content).
 */

export const NORA_ADAPTIVE_PRESENTATION_VERSION = 1 as const;

export const NORA_ADAPTIVE_PRESENTATION_LIMITS = Object.freeze({
  maxBlocks: 12,
  maxItems: 20,
  maxColumns: 6,
  maxRows: 20,
  maxStringChars: 2000,
  maxTitleChars: 160,
  maxLeadChars: 4000,
});

export const NORA_ADAPTIVE_BLOCK_KINDS = [
  "plain",
  "question",
  "section",
  "list",
  "comparison_table",
  "established_facts",
  "open_questions",
  "recommendation",
  "evidence_reserves",
  "trace_note",
] as const;

export type NoraAdaptiveBlockKind =
  (typeof NORA_ADAPTIVE_BLOCK_KINDS)[number];

/** Explicit epistemic labels — never silently blend. */
export const NORA_ADAPTIVE_EPISTEMIC_ROLES = [
  "established_fact",
  "hypothesis",
  "recommendation",
  "product_decision_ref",
  "observed_evidence",
  "reserve_uncertainty",
] as const;

export type NoraAdaptiveEpistemicRole =
  (typeof NORA_ADAPTIVE_EPISTEMIC_ROLES)[number];

export const NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER =
  "Proposition uniquement — aucune décision du Pilote enregistrée." as const;

export const NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE =
  "Pas d'action gouvernée issue de ces blocs de présentation." as const;

const BLOCK_KIND_SET = new Set<string>(NORA_ADAPTIVE_BLOCK_KINDS);
const EPISTEMIC_SET = new Set<string>(NORA_ADAPTIVE_EPISTEMIC_ROLES);

/** Shared string field for OpenAI strict json_schema. */
const STRING_PROP = { type: "string" as const };
const NULLABLE_STRING = {
  anyOf: [{ type: "string" as const }, { type: "null" as const }],
} as const;
const STRING_ARRAY = {
  type: "array" as const,
  items: { type: "string" as const },
} as const;

const EPISTEMIC_PROP = {
  type: "string" as const,
  enum: [...NORA_ADAPTIVE_EPISTEMIC_ROLES],
} as const;

/**
 * Discriminated block catalogue (OpenAI Responses json_schema strict:true).
 * No HTML, no href, no action hooks — strings/lists only.
 */
export const NORA_ADAPTIVE_PRESENTATION_BLOCK_SCHEMA = {
  anyOf: [
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: ["kind", "text"],
      properties: {
        kind: { type: "string" as const, enum: ["plain"] },
        text: STRING_PROP,
      },
    },
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: ["kind", "text"],
      properties: {
        kind: { type: "string" as const, enum: ["question"] },
        text: STRING_PROP,
      },
    },
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: ["kind", "title", "body"],
      properties: {
        kind: { type: "string" as const, enum: ["section"] },
        title: STRING_PROP,
        body: STRING_PROP,
      },
    },
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: ["kind", "title", "items", "epistemic"],
      properties: {
        kind: { type: "string" as const, enum: ["list"] },
        title: NULLABLE_STRING,
        items: STRING_ARRAY,
        epistemic: EPISTEMIC_PROP,
      },
    },
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: ["kind", "title", "columns", "rows"],
      properties: {
        kind: { type: "string" as const, enum: ["comparison_table"] },
        title: NULLABLE_STRING,
        columns: STRING_ARRAY,
        rows: {
          type: "array" as const,
          items: STRING_ARRAY,
        },
      },
    },
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: ["kind", "title", "items"],
      properties: {
        kind: { type: "string" as const, enum: ["established_facts"] },
        title: NULLABLE_STRING,
        items: STRING_ARRAY,
      },
    },
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: ["kind", "title", "items"],
      properties: {
        kind: { type: "string" as const, enum: ["open_questions"] },
        title: NULLABLE_STRING,
        items: STRING_ARRAY,
      },
    },
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: ["kind", "title", "statement", "disclaimer"],
      properties: {
        kind: { type: "string" as const, enum: ["recommendation"] },
        title: NULLABLE_STRING,
        statement: STRING_PROP,
        disclaimer: NULLABLE_STRING,
      },
    },
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: ["kind", "title", "evidenceItems", "reserveItems"],
      properties: {
        kind: { type: "string" as const, enum: ["evidence_reserves"] },
        title: NULLABLE_STRING,
        evidenceItems: STRING_ARRAY,
        reserveItems: STRING_ARRAY,
      },
    },
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: ["kind", "text"],
      properties: {
        kind: { type: "string" as const, enum: ["trace_note"] },
        text: STRING_PROP,
      },
    },
  ],
} as const;

/** OpenAI strict fragment — used as nullable property on Product turn. */
export const NORA_ADAPTIVE_PRESENTATION_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: [
    "version",
    "eyebrow",
    "title",
    "lead",
    "blocks",
    "provenanceNote",
    "noGovernedActionNote",
  ],
  properties: {
    version: { type: "integer" as const, enum: [1] },
    eyebrow: NULLABLE_STRING,
    title: NULLABLE_STRING,
    lead: NULLABLE_STRING,
    blocks: {
      type: "array" as const,
      items: NORA_ADAPTIVE_PRESENTATION_BLOCK_SCHEMA,
    },
    provenanceNote: NULLABLE_STRING,
    noGovernedActionNote: NULLABLE_STRING,
  },
} as const;

export type NoraAdaptivePresentationBlock =
  | { readonly kind: "plain"; readonly text: string }
  | { readonly kind: "question"; readonly text: string }
  | { readonly kind: "section"; readonly title: string; readonly body: string }
  | {
      readonly kind: "list";
      readonly title: string | null;
      readonly items: readonly string[];
      readonly epistemic: NoraAdaptiveEpistemicRole;
    }
  | {
      readonly kind: "comparison_table";
      readonly title: string | null;
      readonly columns: readonly string[];
      readonly rows: readonly (readonly string[])[];
    }
  | {
      readonly kind: "established_facts";
      readonly title: string | null;
      readonly items: readonly string[];
    }
  | {
      readonly kind: "open_questions";
      readonly title: string | null;
      readonly items: readonly string[];
    }
  | {
      readonly kind: "recommendation";
      readonly title: string | null;
      readonly statement: string;
      readonly disclaimer: string | null;
    }
  | {
      readonly kind: "evidence_reserves";
      readonly title: string | null;
      readonly evidenceItems: readonly string[];
      readonly reserveItems: readonly string[];
    }
  | { readonly kind: "trace_note"; readonly text: string };

export type NoraAdaptivePresentation = {
  readonly version: typeof NORA_ADAPTIVE_PRESENTATION_VERSION;
  readonly eyebrow: string | null;
  readonly title: string | null;
  readonly lead: string | null;
  readonly blocks: readonly NoraAdaptivePresentationBlock[];
  readonly provenanceNote: string | null;
  readonly noGovernedActionNote: string | null;
};

const HTML_TAG_RE = /<\/?[a-z][^>]*>/gi;
const SCRIPTISH_RE = /javascript:|data:text\/html|on\w+\s*=/i;

/** Strip tags / scriptish fragments; never interpret as HTML. */
export function sanitizePresentationPlainText(input: string): string {
  return input
    .replace(HTML_TAG_RE, "")
    .replace(SCRIPTISH_RE, "")
    .replace(/\u0000/g, "")
    .trim();
}

/**
 * Bounded string for Option C parse — NAP-SINGLE-RESPONSE-D1.
 * Rejects over-limit (no silent slice success). Exact max length is accepted
 * by parse but flagged via presentationHitsLimitBoundary for A1 gating.
 */
function clampText(
  value: unknown,
  max: number,
): string | null {
  if (typeof value !== "string") return null;
  const cleaned = sanitizePresentationPlainText(value);
  if (!cleaned) return null;
  if (cleaned.length > max) return null;
  return cleaned;
}

function nullableText(
  value: unknown,
  max: number,
): string | null {
  if (value === null || value === undefined) return null;
  return clampText(value, max);
}

function parseStringList(
  value: unknown,
  maxItems: number,
  maxChars: number,
): string[] | null {
  if (!Array.isArray(value)) return null;
  if (value.length > maxItems) return null;
  const out: string[] = [];
  for (const item of value) {
    const t = clampText(item, maxChars);
    if (t == null) return null;
    out.push(t);
  }
  return out;
}

const BLOCK_ALLOWED_KEYS: Record<NoraAdaptiveBlockKind, ReadonlySet<string>> = {
  plain: new Set(["kind", "text"]),
  question: new Set(["kind", "text"]),
  section: new Set(["kind", "title", "body"]),
  list: new Set(["kind", "title", "items", "epistemic"]),
  comparison_table: new Set(["kind", "title", "columns", "rows"]),
  established_facts: new Set(["kind", "title", "items"]),
  open_questions: new Set(["kind", "title", "items"]),
  recommendation: new Set(["kind", "title", "statement", "disclaimer"]),
  evidence_reserves: new Set([
    "kind",
    "title",
    "evidenceItems",
    "reserveItems",
  ]),
  trace_note: new Set(["kind", "text"]),
};

function hasOnlyAllowedKeys(
  o: Record<string, unknown>,
  allowed: ReadonlySet<string>,
): boolean {
  return Object.keys(o).every((k) => allowed.has(k));
}

function parseBlock(
  value: unknown,
): NoraAdaptivePresentationBlock | null {
  if (!value || typeof value !== "object") return null;
  const o = value as Record<string, unknown>;
  const kind = String(o.kind ?? "");
  if (!BLOCK_KIND_SET.has(kind)) return null;
  const allowed = BLOCK_ALLOWED_KEYS[kind as NoraAdaptiveBlockKind];
  if (!hasOnlyAllowedKeys(o, allowed)) return null;
  const L = NORA_ADAPTIVE_PRESENTATION_LIMITS;

  if (kind === "plain" || kind === "question" || kind === "trace_note") {
    const text = clampText(o.text, L.maxStringChars);
    if (!text) return null;
    return { kind, text };
  }
  if (kind === "section") {
    const title = clampText(o.title, L.maxTitleChars);
    const body = clampText(o.body, L.maxStringChars);
    if (!title || !body) return null;
    return { kind: "section", title, body };
  }
  if (kind === "list") {
    const title = nullableText(o.title, L.maxTitleChars);
    const items = parseStringList(o.items, L.maxItems, L.maxStringChars);
    if (!items || items.length === 0) return null;
    if (!EPISTEMIC_SET.has(String(o.epistemic))) return null;
    return {
      kind: "list",
      title,
      items,
      epistemic: o.epistemic as NoraAdaptiveEpistemicRole,
    };
  }
  if (kind === "comparison_table") {
    const title = nullableText(o.title, L.maxTitleChars);
    const columns = parseStringList(o.columns, L.maxColumns, L.maxTitleChars);
    if (!columns || columns.length === 0) return null;
    if (!Array.isArray(o.rows) || o.rows.length > L.maxRows) return null;
    const rows: string[][] = [];
    for (const row of o.rows) {
      const cells = parseStringList(row, columns.length, L.maxStringChars);
      if (!cells || cells.length !== columns.length) return null;
      rows.push(cells);
    }
    return { kind: "comparison_table", title, columns, rows };
  }
  if (kind === "established_facts" || kind === "open_questions") {
    const title = nullableText(o.title, L.maxTitleChars);
    const items = parseStringList(o.items, L.maxItems, L.maxStringChars);
    if (!items || items.length === 0) return null;
    return { kind, title, items };
  }
  if (kind === "recommendation") {
    const title = nullableText(o.title, L.maxTitleChars);
    const statement = clampText(o.statement, L.maxStringChars);
    if (!statement) return null;
    // CORR-NAP-02 — governance disclaimer is Studio-owned (Nora cannot replace).
    return {
      kind: "recommendation",
      title,
      statement,
      disclaimer: NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
    };
  }
  if (kind === "evidence_reserves") {
    const title = nullableText(o.title, L.maxTitleChars);
    const evidenceItems = parseStringList(
      o.evidenceItems,
      L.maxItems,
      L.maxStringChars,
    );
    const reserveItems = parseStringList(
      o.reserveItems,
      L.maxItems,
      L.maxStringChars,
    );
    if (!evidenceItems || !reserveItems) return null;
    if (evidenceItems.length === 0 && reserveItems.length === 0) return null;
    return { kind: "evidence_reserves", title, evidenceItems, reserveItems };
  }
  return null;
}

/**
 * Validate + normalize raw presentation. Invalid / unknown version → null.
 * Never invents Product CTAs. Injects recommendation disclaimer when absent.
 */
const PRESENTATION_ALLOWED_KEYS = new Set([
  "version",
  "eyebrow",
  "title",
  "lead",
  "blocks",
  "provenanceNote",
  "noGovernedActionNote",
]);

export function parseNoraAdaptivePresentation(
  value: unknown,
): NoraAdaptivePresentation | null {
  if (value == null) return null;
  if (!value || typeof value !== "object") return null;
  const o = value as Record<string, unknown>;
  if (!hasOnlyAllowedKeys(o, PRESENTATION_ALLOWED_KEYS)) return null;
  if (o.version !== NORA_ADAPTIVE_PRESENTATION_VERSION) return null;
  if (!Array.isArray(o.blocks)) return null;
  const L = NORA_ADAPTIVE_PRESENTATION_LIMITS;
  if (o.blocks.length > L.maxBlocks) return null;

  const blocks: NoraAdaptivePresentationBlock[] = [];
  for (const raw of o.blocks) {
    const block = parseBlock(raw);
    if (!block) return null;
    blocks.push(block);
  }

  // Short plain-only with empty blocks is useless — treat as absent.
  const rawEyebrow = nullableText(o.eyebrow, L.maxTitleChars);
  const title = nullableText(o.title, L.maxTitleChars);
  const lead = nullableText(o.lead, L.maxLeadChars);
  if (blocks.length === 0 && !lead && !title) return null;

  // CORR-NAP-02 / CORR-NAP-D1-EYEBROW-01 — drop authority-claiming free labels;
  // eyebrow is presentation chrome, never authenticated Product authority.
  const eyebrow = sanitizePresentationEyebrow(rawEyebrow);
  const safeTitle =
    title && !looksLikeAuthorityClaim(title) ? title : null;
  const rawProvenance = nullableText(o.provenanceNote, L.maxStringChars);
  const provenanceNote = sanitizeProvenanceNote(rawProvenance);
  const noGoverned = NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE;

  return Object.freeze({
    version: NORA_ADAPTIVE_PRESENTATION_VERSION,
    eyebrow,
    title: safeTitle,
    lead,
    blocks: Object.freeze([...blocks]),
    provenanceNote,
    noGovernedActionNote: noGoverned,
  });
}

export function isNoraAdaptivePresentation(
  value: unknown,
): value is NoraAdaptivePresentation {
  return parseNoraAdaptivePresentation(value) != null;
}

/** Serialize for SQLite — only after validation. */
export function serializeNoraAdaptivePresentation(
  value: NoraAdaptivePresentation,
): string {
  return JSON.stringify(value);
}

/** Read durable JSON; invalid → null (caller keeps content text). */
export function deserializeNoraAdaptivePresentation(
  raw: string | null | undefined,
): NoraAdaptivePresentation | null {
  if (raw == null) return null;
  const trimmed = String(raw).trim();
  if (!trimmed) return null;
  try {
    return parseNoraAdaptivePresentation(JSON.parse(trimmed));
  } catch {
    return null;
  }
}

/**
 * True when adaptive UI should render (validated + has structure beyond empty).
 * Short Q with only lead/plain may still render lightly.
 */
export function shouldRenderAdaptivePresentation(
  value: NoraAdaptivePresentation | null | undefined,
): value is NoraAdaptivePresentation {
  if (!value) return false;
  if (value.blocks.length > 0) return true;
  return Boolean(value.lead || value.title);
}

/** Durable Studio control marker — display only; NEVER a trust signal by itself. */
export const STUDIO_CONTROL_MARKER = "[Studio]" as const;

/**
 * Normalize server-authored Studio control notices (typed provenance).
 * Empty / non-string entries dropped. Never invents notices from prose.
 */
export function normalizeStudioControlNotices(
  notices: readonly (string | null | undefined)[] | null | undefined,
): readonly string[] {
  if (!notices || notices.length === 0) return Object.freeze([]);
  const out: string[] = [];
  const seen = new Set<string>();
  for (const notice of notices) {
    if (typeof notice !== "string") continue;
    const t = notice.trim();
    if (!t || seen.has(t)) continue;
    seen.add(t);
    out.push(t);
  }
  return Object.freeze(out);
}

export function serializeStudioControlNotices(
  notices: readonly string[],
): string | null {
  const normalized = normalizeStudioControlNotices(notices);
  if (normalized.length === 0) return null;
  return JSON.stringify(normalized);
}

export function deserializeStudioControlNotices(
  raw: string | null | undefined,
): readonly string[] {
  if (raw == null) return Object.freeze([]);
  const trimmed = String(raw).trim();
  if (!trimmed) return Object.freeze([]);
  try {
    const parsed = JSON.parse(trimmed) as unknown;
    if (!Array.isArray(parsed)) return Object.freeze([]);
    return normalizeStudioControlNotices(
      parsed.map((x) => (typeof x === "string" ? x : null)),
    );
  } catch {
    return Object.freeze([]);
  }
}

/**
 * Append server-authored control notices into durable assistant text so plain
 * fallback / reload keep them readable. Dedupes. Does not invent authority.
 * Typed `studioControlNotices` remains the sole provenance for Studio styling.
 */
export function appendStudioControlNotices(
  assistantText: string,
  notices: readonly (string | null | undefined)[],
): string {
  let out = assistantText.trimEnd();
  for (const notice of normalizeStudioControlNotices(notices)) {
    if (out.includes(notice)) continue;
    out = `${out}\n\n${STUDIO_CONTROL_MARKER} ${notice}`;
  }
  return out;
}

/**
 * Strip only suffixes that match **authenticated** Studio notices.
 * Forged `[Studio] …` prose from Nora is left in the body (never trusted).
 */
export function contentWithoutAuthenticatedStudioNotices(
  content: string,
  authenticatedNotices: readonly string[],
): string {
  let out = (content ?? "").trimEnd();
  const notices = normalizeStudioControlNotices(authenticatedNotices);
  if (notices.length === 0) return out;
  let changed = true;
  while (changed) {
    changed = false;
    for (const n of notices) {
      const suffix = `\n\n${STUDIO_CONTROL_MARKER} ${n}`;
      if (out.endsWith(suffix)) {
        out = out.slice(0, -suffix.length).trimEnd();
        changed = true;
        continue;
      }
      const only = `${STUDIO_CONTROL_MARKER} ${n}`;
      if (out === only) {
        out = "";
        changed = true;
      }
    }
  }
  return out;
}

/**
 * @deprecated CORR-NAP-02 — marker-based extraction is not Studio provenance.
 * Prefer typed `studioControlNotices`. Kept for migration/tests of plain text.
 */
export function extractStudioControlAppendix(
  content: string,
): string | null {
  const raw = content ?? "";
  if (!raw.includes(STUDIO_CONTROL_MARKER)) return null;
  const parts = raw.split(/\n\n(?=\[Studio\])/);
  if (parts.length <= 1) {
    return raw.trimStart().startsWith(STUDIO_CONTROL_MARKER)
      ? raw.trim() || null
      : null;
  }
  const appendix = parts.slice(1).join("\n\n").trim();
  return appendix || null;
}

/** @deprecated Prefer contentWithoutAuthenticatedStudioNotices. */
export function contentWithoutStudioAppendix(content: string): string {
  // Fail-closed: without typed notices, do not strip any [Studio] text
  // (forged markers must remain visible as Nora prose, not silently removed).
  return (content ?? "").trimEnd();
}

function blockPlainTexts(block: NoraAdaptivePresentationBlock): string[] {
  switch (block.kind) {
    case "plain":
    case "question":
    case "trace_note":
      return [block.text];
    case "section":
      return [block.title, block.body];
    case "list":
    case "established_facts":
    case "open_questions":
      return [block.title ?? "", ...block.items];
    case "comparison_table":
      return [
        block.title ?? "",
        ...block.columns,
        ...block.rows.flatMap((r) => [...r]),
      ];
    case "recommendation":
      return [block.title ?? "", block.statement, block.disclaimer ?? ""];
    case "evidence_reserves":
      return [
        block.title ?? "",
        ...block.evidenceItems,
        ...block.reserveItems,
      ];
    default:
      return [];
  }
}

/** Projection of DTO strings for coverage compare (presentation-only). */
export function presentationPlainProjection(
  presentation: NoraAdaptivePresentation,
): string {
  const chunks: string[] = [];
  if (presentation.eyebrow) chunks.push(presentation.eyebrow);
  if (presentation.title) chunks.push(presentation.title);
  if (presentation.lead) chunks.push(presentation.lead);
  for (const block of presentation.blocks) {
    chunks.push(...blockPlainTexts(block));
  }
  if (presentation.provenanceNote) chunks.push(presentation.provenanceNote);
  return chunks.filter(Boolean).join("\n");
}

/**
 * Legacy coverage normalize — strips punctuation (incl. operators).
 * Kept for CORR-NAP-02 diagnostics only. Do NOT use for A1 T1/T2.
 */
export function normalizeCompare(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * CORR-NAP-D1-FIDELITY-01 / -02 — conservative A1 compare.
 * Preserves case (mW≠MW), relational operators, signs, %, numbers, units,
 * negation, and meaningful punctuation.
 * Safe transforms only: CRLF→LF, NFC, collapse horizontal whitespace, trim.
 * Never case-fold. Never fuzzy / overlap / keyword.
 */
export function normalizeCanonicalCompare(text: string): string {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .normalize("NFC")
    .replace(/[^\S\n]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/ +\n/g, "\n")
    .replace(/\n+/g, "\n")
    .trim();
}

/**
 * CORR-NAP-02 — legacy lead≡body gate (kept for tests / diagnostics).
 * A1 Path uses body ≡ composeCanonicalFromPresentation instead.
 */
export function contentFullyCoveredByPresentation(
  body: string,
  presentation: NoraAdaptivePresentation,
): boolean {
  const nBody = normalizeCompare(body);
  if (!nBody) return true;
  const nLead = normalizeCompare(presentation.lead ?? "");
  if (!nLead) return false;
  return nBody === nLead;
}

/** Honest non-empty fallback when narrative and presentation are both unusable. */
export const NORA_UNUSABLE_TURN_FALLBACK_TEXT =
  "Nora n'a pas pu produire une restitution exploitable pour ce tour. Aucune action gouvernée n'a été exécutée." as const;

/**
 * CORR-NAP-D1-FIDELITY-01 / R-D1-02 — durable category labels.
 * Natural, non-authority-claiming. Never invent Evidence Product / HD.
 */
function durableCategoryLabel(block: NoraAdaptivePresentationBlock): string {
  switch (block.kind) {
    case "list":
      return honestEpistemicLabel(block.epistemic);
    case "established_facts":
      return honestBlockTitle("established_facts", null);
    case "open_questions":
      return honestBlockTitle("open_questions", null);
    case "recommendation":
      return "Recommandation — non décision";
    case "evidence_reserves":
      return honestBlockTitle("evidence_reserves", null);
    default:
      return "";
  }
}

/**
 * CORR-NAP-D1-FIDELITY-02 / R-D1-02 — durable heading aligned with View.
 * Reuses honestBlockTitle (strong kinds → Studio defaults; weak → free only
 * if not authority-claiming). Never promotes Nora free titles to Product authority.
 */
function durableSafeHeading(
  kind: NoraAdaptiveBlockKind,
  title: string | null | undefined,
): string {
  return honestBlockTitle(kind, title);
}

function formatBlockCanonical(block: NoraAdaptivePresentationBlock): string {
  switch (block.kind) {
    case "plain":
    case "question":
    case "trace_note":
      return block.text;
    case "section":
      return `${durableSafeHeading("section", block.title)}\n${block.body}`;
    case "list": {
      // Strong kind: Studio list label + epistemic role (never free "GO confirmé").
      const head = `${durableSafeHeading("list", block.title)}\n${durableCategoryLabel(block)}`;
      return `${head}\n${block.items.map((i) => `- ${i}`).join("\n")}`;
    }
    case "established_facts":
    case "open_questions": {
      const head = durableSafeHeading(block.kind, block.title);
      return `${head}\n${block.items.map((i) => `- ${i}`).join("\n")}`;
    }
    case "comparison_table": {
      const head = durableSafeHeading("comparison_table", block.title);
      const header = block.columns.join(" | ");
      const sep = block.columns.map(() => "---").join(" | ");
      const rows = block.rows.map((r) => r.join(" | ")).join("\n");
      return `${head}\n${header}\n${sep}\n${rows}`;
    }
    case "recommendation": {
      const head = durableCategoryLabel(block);
      const disc =
        block.disclaimer?.trim() || NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER;
      return `${head}\n${block.statement}\n${disc}`;
    }
    case "evidence_reserves": {
      // Strong kind — never emit free Nora title into Memory B.
      const parts: string[] = [];
      if (block.evidenceItems.length > 0) {
        parts.push("Éléments mentionnés comme preuves");
        parts.push(...block.evidenceItems.map((i) => `- ${i}`));
      }
      if (block.reserveItems.length > 0) {
        parts.push("Réserves et incertitudes");
        parts.push(...block.reserveItems.map((i) => `- ${i}`));
      }
      return parts.join("\n");
    }
    default:
      return "";
  }
}

function composeBlocksOnly(presentation: NoraAdaptivePresentation): string {
  return presentation.blocks
    .map(formatBlockCanonical)
    .filter((s) => s.trim().length > 0)
    .join("\n\n");
}

/**
 * Lead visibility for A1 chrome — never drop unique lead info blindly.
 * Redundancy uses conservative A1 compare (R-D1-01) — operators preserved.
 */
export function shouldDisplayPresentationLead(
  presentation: NoraAdaptivePresentation,
): boolean {
  const lead = (presentation.lead ?? "").trim();
  if (!lead) return false;
  const nLead = normalizeCanonicalCompare(lead);
  if (!nLead) return false;
  const blocksText = composeBlocksOnly(presentation);
  if (blocksText && normalizeCanonicalCompare(blocksText) === nLead) {
    return false;
  }
  for (const block of presentation.blocks) {
    for (const t of blockPlainTexts(block)) {
      if (t && normalizeCanonicalCompare(t) === nLead) return false;
    }
  }
  return true;
}

/**
 * Deterministic conversational transcript from a validated presentation.
 * Not Truth C. Not a cognitive summary. Preserves order, tables, reserves,
 * recommendation-as-proposal. Omits redundant lead (see shouldDisplayPresentationLead).
 */
export function composeCanonicalFromPresentation(
  presentation: NoraAdaptivePresentation,
): string {
  const chunks: string[] = [];
  // CORR-NAP-D1-EYEBROW-01 — shared eyebrow sanitation (parse / compose / View).
  const eyebrow = sanitizePresentationEyebrow(presentation.eyebrow);
  if (eyebrow) {
    chunks.push(eyebrow);
  }
  // presentation.title already null when authority-claiming (parse); belt-and-suspenders.
  if (presentation.title?.trim() && !looksLikeAuthorityClaim(presentation.title)) {
    chunks.push(presentation.title.trim());
  }
  if (shouldDisplayPresentationLead(presentation) && presentation.lead) {
    chunks.push(presentation.lead.trim());
  }
  const blocks = composeBlocksOnly(presentation);
  if (blocks) chunks.push(blocks);
  const provenance = sanitizeProvenanceNote(presentation.provenanceNote);
  if (provenance) chunks.push(provenance);
  return chunks.join("\n\n").trim();
}

/**
 * True when a string field sits exactly at its max — ambiguous truncation.
 * NOT a proof of truncation; fail-closed for A1 admissibility only.
 */
export function presentationHitsLimitBoundary(
  presentation: NoraAdaptivePresentation,
): boolean {
  const L = NORA_ADAPTIVE_PRESENTATION_LIMITS;
  if (presentation.blocks.length >= L.maxBlocks) return true;
  const check = (s: string | null | undefined, max: number) =>
    typeof s === "string" && s.length >= max;
  if (check(presentation.eyebrow, L.maxTitleChars)) return true;
  if (check(presentation.title, L.maxTitleChars)) return true;
  if (check(presentation.lead, L.maxLeadChars)) return true;
  if (check(presentation.provenanceNote, L.maxStringChars)) return true;
  for (const block of presentation.blocks) {
    switch (block.kind) {
      case "plain":
      case "question":
      case "trace_note":
        if (check(block.text, L.maxStringChars)) return true;
        break;
      case "section":
        if (check(block.title, L.maxTitleChars)) return true;
        if (check(block.body, L.maxStringChars)) return true;
        break;
      case "list":
      case "established_facts":
      case "open_questions":
        if (check(block.title, L.maxTitleChars)) return true;
        if (block.items.length >= L.maxItems) return true;
        if (block.items.some((i) => i.length >= L.maxStringChars)) return true;
        break;
      case "comparison_table":
        if (check(block.title, L.maxTitleChars)) return true;
        if (block.columns.length >= L.maxColumns) return true;
        if (block.rows.length >= L.maxRows) return true;
        if (block.columns.some((c) => c.length >= L.maxTitleChars)) return true;
        if (
          block.rows.some((r) =>
            r.some((c) => c.length >= L.maxStringChars),
          )
        ) {
          return true;
        }
        break;
      case "recommendation":
        if (check(block.title, L.maxTitleChars)) return true;
        if (check(block.statement, L.maxStringChars)) return true;
        break;
      case "evidence_reserves":
        if (check(block.title, L.maxTitleChars)) return true;
        if (block.evidenceItems.length >= L.maxItems) return true;
        if (block.reserveItems.length >= L.maxItems) return true;
        if (
          [...block.evidenceItems, ...block.reserveItems].some(
            (i) => i.length >= L.maxStringChars,
          )
        ) {
          return true;
        }
        break;
      default:
        break;
    }
  }
  return false;
}

/**
 * CORR-NAP-D1-FIDELITY-01 / R-D1-03 — conversational substance for A1.
 * Title / eyebrow / provenance alone are decorative metadata, not an answer.
 */
export function presentationHasConversationalSubstance(
  presentation: NoraAdaptivePresentation,
): boolean {
  if ((presentation.lead ?? "").trim()) return true;
  return composeBlocksOnly(presentation).trim().length > 0;
}

/**
 * Deterministic A1 structural gate only.
 * NEVER certifies semantic / cognitive completeness (R1).
 * Requires conversational substance (R-D1-03) — not title-only.
 */
export function isPresentationStructurallyAdmissibleForA1(
  presentation: NoraAdaptivePresentation | null | undefined,
): boolean {
  if (!shouldRenderAdaptivePresentation(presentation)) return false;
  if (!presentationHasConversationalSubstance(presentation)) return false;
  if (presentationHitsLimitBoundary(presentation)) return false;
  const composed = composeCanonicalFromPresentation(presentation);
  if (!composed.trim()) return false;
  return true;
}

/** A1 T1/T2 equality — conservative (R-D1-01). */
export function canonicalTextsEquivalent(a: string, b: string): boolean {
  return normalizeCanonicalCompare(a) === normalizeCanonicalCompare(b);
}

/**
 * T1/T2 — whether durable pilot-facing core (pre-notices) may use A1.
 * Conservatively requires exact normalized equality with compose, or empty
 * core with admissible structure. No fuzzy / overlap / keyword tricks.
 */
export function isA1TransitionAdmissible(input: {
  pilotFacingCore: string;
  presentation: NoraAdaptivePresentation | null | undefined;
}): boolean {
  if (!isPresentationStructurallyAdmissibleForA1(input.presentation)) {
    return false;
  }
  const presentation = input.presentation!;
  const composed = composeCanonicalFromPresentation(presentation);
  const core = (input.pilotFacingCore ?? "").trim();
  if (!core) return true; // empty narrative → derive from structure (A1-primary)
  return canonicalTextsEquivalent(core, composed);
}

/**
 * Build durable conversational content for a new turn (Memory B `content`).
 * A1: composed (+ caller appends notices). B: pilotFacingCore as-is.
 * Does not invent text. Empty+invalid → honest fallback.
 */
export function buildDurableAssistantContentForTurn(input: {
  pilotFacingCore: string;
  presentation: NoraAdaptivePresentation | null | undefined;
}): {
  readonly contentCore: string;
  readonly usedA1: boolean;
  readonly presentation: NoraAdaptivePresentation | null;
} {
  const core = (input.pilotFacingCore ?? "").trim();
  const presentation = input.presentation ?? null;
  if (isA1TransitionAdmissible({ pilotFacingCore: core, presentation })) {
    const composed = composeCanonicalFromPresentation(presentation!);
    return {
      contentCore: composed,
      usedA1: true,
      presentation,
    };
  }
  if (!core && !shouldRenderAdaptivePresentation(presentation)) {
    return {
      contentCore: NORA_UNUSABLE_TURN_FALLBACK_TEXT,
      usedA1: false,
      presentation: null,
    };
  }
  return {
    contentCore: core || NORA_UNUSABLE_TURN_FALLBACK_TEXT,
    usedA1: false,
    presentation,
  };
}

/**
 * CORR-NAP-TEST16-01 / CR-02 — Pilot-facing label for the canonical narrative
 * layer when structured projection and body diverge (strict coverage false).
 * Canonical is the conversational restitution reference (not HumanDecision /
 * Evidence Product).
 */
export const NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL =
  "Réponse complète de Nora" as const;

/**
 * CR-02 R1 — secondary structured projection when coverage is not demonstrated.
 * Never presented as certified / GO / HumanDecision.
 */
export const NORA_ADAPTIVE_SECONDARY_PROJECTION_LABEL =
  "Projection structurée (Nora — non certifiée)" as const;

export const NORA_ADAPTIVE_SECONDARY_PROJECTION_WARNING =
  "Cette projection est une reformulation Nora non certifiée et peut diverger du récit complet ci-dessus. Le récit complet fait référence pour la restitution conversationnelle." as const;

/**
 * CR-03 — cosmetic-only normalize for fidelity compare / conservative display.
 * Escapes + soft markdown markers only. Never deletes phrases or jargon.
 */
export function cosmeticCanonicalNormalize(text: string): string {
  return text
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\r/g, "")
    .replace(/\\\*/g, "*")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/(^|\n)#{1,6}\s+/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[^\S\n]{2,}/g, " ")
    .replace(/ *\n */g, "\n")
    .trim();
}

/**
 * Presentation-only jargon that formatNoraAssistantDisplayText may soften.
 * Stripped from BOTH sides of the CR-03 fidelity key so intentional UI scrub
 * (READY_NO_GATE, F2 process footer, etc.) does not force an unscrubbed DOM.
 * Never strips fidelity-bearing refusals such as "Nora n'émet pas de décision
 * Pilote" — those remain in the key and keep fail-closed source when removed.
 */
function stripAllowlistedPresentationJargonForFidelityCompare(text: string): string {
  return text
    .replace(/\bREADY_NO_GATE\b/g, "")
    .replace(/\bTEMPORARY WITH EXIT\b/gi, "")
    .replace(/\bProduct SQLite\b/gi, "")
    .replace(/\[Mode (?:réel|test)\]\s*/gi, "")
    .replace(
      /Qualification SFIA et proposition structurée générées\.?\s*/gi,
      "",
    )
    .replace(
      /RECOMMANDATION\s*[—–-]\s*PAS UNE DÉCISION HUMAINE\.?\s*/gi,
      "",
    )
    .replace(
      /Recommandation\s*≠\s*décision Pilote[^.]*\.\s*/gi,
      "",
    )
    .replace(
      /Pas de gate de construction supplémentaire[^.]*\.\s*/gi,
      "",
    )
    .replace(
      /CONTINUE\s*[—–-]\s*cognition propose-only[^.]*\.\s*/gi,
      "",
    )
    .replace(
      /\bAUCUNE EXÉCUTION\s*[—–-]\s*ZERO Attempt\s*[—–-]\s*ZERO Cursor REAL\b/gi,
      "",
    )
    .replace(/\bZERO Attempt\b/gi, "")
    .replace(/\bZERO Cursor REAL\b/gi, "")
    .replace(
      /\bAUCUNE EXÉCUTION\s*[—–-]\s*F2\s*S['’]ARRÊTE ICI\b/gi,
      "",
    )
    .replace(/\bDECISION_REQUIRED\b/g, "")
    .replace(/\bpending_reinstruction_required\b/g, "")
    .replace(/\bdocs_write\b/g, "")
    .replace(/\bopt:[a-z0-9:_-]+\b/gi, "")
    .replace(/\bepi:[a-z0-9:_-]+\b/gi, "")
    .replace(/\batt:[a-z0-9:_-]+\b/gi, "")
    .replace(/\bevi:[a-z0-9:_-]+\b/gi, "")
    .replace(/\[MW5[^\]]*\]/gi, "")
    .replace(/\bcount=\d+\b/gi, "");
}

function fidelityCompareKey(text: string): string {
  return stripAllowlistedPresentationJargonForFidelityCompare(
    cosmeticCanonicalNormalize(text),
  )
    .replace(/\s+([?.!;,:])/g, "$1")
    .replace(/([([{])\s+/g, "$1")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();
}

/**
 * CR-03 — display text for adaptive_with_canonical primary layer.
 *
 * Uses the shared pilot formatter when the transform is presentation-pure
 * (same fidelity key). If the formatter empties a non-empty source, or
 * deletes/substitutes material (fidelity key diverges), fall back to a
 * conservative cosmetic-only rendering of the source. Never returns empty
 * when source is non-empty. Does not invent Studio provenance.
 *
 * `formatDisplay` is injected (typically formatNoraAssistantDisplayText) so
 * this module does not depend on presentationLabels.
 */
export function resolveAdaptiveCanonicalDisplayText(
  source: string,
  formatDisplay: (text: string) => string,
): string {
  const raw = (source ?? "").trim();
  if (!raw) return "";
  const formatted = String(formatDisplay(raw) ?? "").trim();
  if (!formatted) {
    return cosmeticCanonicalNormalize(raw) || raw;
  }
  if (fidelityCompareKey(formatted) === fidelityCompareKey(raw)) {
    return formatted;
  }
  // Destructive / substitutive scrub — keep source (cosmetic escapes only).
  return cosmeticCanonicalNormalize(raw) || raw;
}

export type AdaptiveAssistantRenderMode =
  | "adaptive"
  | "plain";

/**
 * @deprecated Dual layer removed in NAP-SINGLE-RESPONSE-D1 (A1+B).
 * Kept as type alias so older call sites compile during transition; never emitted.
 */
export type AdaptiveAssistantRenderModeLegacy =
  | AdaptiveAssistantRenderMode
  | "adaptive_with_canonical";

export type AdaptiveAssistantRenderDecision = {
  readonly mode: AdaptiveAssistantRenderMode;
  readonly presentation: NoraAdaptivePresentation | null;
  /**
   * Authenticated Studio control appendix only (typed notices).
   * Never derived from forged `[Studio]` prose in Nora content.
   */
  readonly studioAppendix: string | null;
  readonly plainText: string;
  /** Server-authored notices used for appendix / strip (empty if none). */
  readonly studioControlNotices: readonly string[];
  /**
   * A1: true when durable body (notices stripped) ≡ composeCanonical.
   * Never a fuzzy claim. Never semantic-completeness certification.
   */
  readonly contentFullyCovered: boolean;
  /**
   * Always null under single-response contract (B uses plainText; no dual layer).
   * Retained for API stability with prior CR-03 callers.
   */
  readonly canonicalNarrative: string | null;
  /** Structural A1 gate only — NOT semantic completeness (R1). */
  readonly structurallyAdmissibleForA1: boolean;
  /** True when render mode is adaptive (structured-first single surface). */
  readonly usedA1: boolean;
};

/**
 * NAP-SINGLE-RESPONSE-D1 — A1 structured-first OR B canonical plain.
 *
 * - Invalid / absent presentation → plain (B).
 * - Structurally admissible + body ≡ composeCanonical → adaptive (A1), one surface.
 * - Otherwise → plain (B) with full durable body; presentation not shown
 *   (never dual canonical + projection; never hide unique narrative via CSS).
 * - Studio appendix: typed notices only.
 */
export function resolveAdaptiveAssistantRender(input: {
  content: string;
  presentation: NoraAdaptivePresentation | null | undefined;
  /** Typed server provenance — sole source of Studio appendix trust. */
  studioControlNotices?: readonly (string | null | undefined)[] | null;
}): AdaptiveAssistantRenderDecision {
  const content = input.content ?? "";
  const authenticated = normalizeStudioControlNotices(
    input.studioControlNotices,
  );
  const body = contentWithoutAuthenticatedStudioNotices(
    content,
    authenticated,
  );
  const studioAppendix =
    authenticated.length > 0
      ? authenticated
          .map((n) => `${STUDIO_CONTROL_MARKER} ${n}`)
          .join("\n\n")
      : null;

  const presentation = input.presentation ?? null;
  const structurallyAdmissibleForA1 =
    isPresentationStructurallyAdmissibleForA1(presentation);

  if (!shouldRenderAdaptivePresentation(presentation)) {
    return {
      mode: "plain",
      presentation: null,
      studioAppendix: authenticated.length > 0 ? studioAppendix : null,
      plainText: content.trim() ? content : NORA_UNUSABLE_TURN_FALLBACK_TEXT,
      studioControlNotices: authenticated,
      contentFullyCovered: false,
      canonicalNarrative: null,
      structurallyAdmissibleForA1: false,
      usedA1: false,
    };
  }

  const composed = composeCanonicalFromPresentation(presentation!);
  const a1Match =
    structurallyAdmissibleForA1 &&
    (canonicalTextsEquivalent(body, composed) ||
      (!body.trim() && Boolean(composed.trim())));

  if (a1Match) {
    return {
      mode: "adaptive",
      presentation,
      studioAppendix,
      plainText: content,
      studioControlNotices: authenticated,
      contentFullyCovered: true,
      canonicalNarrative: null,
      structurallyAdmissibleForA1: true,
      usedA1: true,
    };
  }

  // T2 / incomplete / non-equivalent — B only (single canonical surface).
  return {
    mode: "plain",
    presentation: null,
    studioAppendix: authenticated.length > 0 ? studioAppendix : null,
    plainText: content.trim() ? content : NORA_UNUSABLE_TURN_FALLBACK_TEXT,
    studioControlNotices: authenticated,
    contentFullyCovered: false,
    canonicalNarrative: null,
    structurallyAdmissibleForA1,
    usedA1: false,
  };
}

/**
 * Honest Pilot-facing label for Nora epistemic roles.
 * Presentation ≠ Product proof / ≠ HumanDecision / ≠ verified Evidence.
 */
export function honestEpistemicLabel(
  role: NoraAdaptiveEpistemicRole,
): string {
  switch (role) {
    case "established_fact":
      return "Présenté comme établi";
    case "hypothesis":
      return "Hypothèse";
    case "recommendation":
      return "Recommandation — non décision";
    case "product_decision_ref":
      return "Référence de décision mentionnée (non vérifiée)";
    case "observed_evidence":
      return "Cité comme preuve observée (non Evidence Product)";
    case "reserve_uncertainty":
      return "Réserve / incertitude";
    default:
      return "Élément";
  }
}

/** Strong kinds — Studio-owned titles only (Nora free titles never become authority UI). */
const STRONG_TITLE_KINDS = new Set<NoraAdaptiveBlockKind>([
  "established_facts",
  "open_questions",
  "recommendation",
  "evidence_reserves",
  "list",
]);

/**
 * Phrases that would imply Product/Studio authority if shown as a heading.
 * Matched case-insensitively on free Nora titles / provenance notes.
 */
const AUTHORITY_CLAIM_RE =
  /\b(preuves?\s+officiel\w*|officiellement\s+v[eé]rif\w*|evidence\s+product\b|d[eé]cision\s+approuv\w*|human\s*decision\b|go\s+confirm\w*|valid[eé]e?\s+par\s+(le\s+)?studio\b|contr[oô]le\s+serveur\b|approuv[eé]e?\s+par\s+le\s+pilote\b)/i;

export function looksLikeAuthorityClaim(text: string | null | undefined): boolean {
  if (!text || typeof text !== "string") return false;
  return AUTHORITY_CLAIM_RE.test(text.trim());
}

/**
 * Studio-safe block title. Strong kinds always use Studio defaults.
 * Free Nora titles allowed only for weak kinds and only when not authority-claiming.
 */
export function honestBlockTitle(
  kind: NoraAdaptiveBlockKind,
  title: string | null | undefined,
): string {
  const safeDefaults: Record<NoraAdaptiveBlockKind, string> = {
    plain: "Élément",
    question: "Question",
    section: "Section",
    list: "Liste",
    comparison_table: "Comparaison",
    established_facts: "Éléments présentés comme établis",
    open_questions: "Points encore à clarifier",
    recommendation: "Recommandation",
    evidence_reserves: "Preuves et réserves mentionnées",
    trace_note: "Note",
  };
  if (STRONG_TITLE_KINDS.has(kind)) {
    return safeDefaults[kind];
  }
  const trimmed = typeof title === "string" ? title.trim() : "";
  if (trimmed && !looksLikeAuthorityClaim(trimmed)) {
    return trimmed;
  }
  return safeDefaults[kind];
}

/**
 * Studio-owned governance disclaimer — Nora cannot replace it.
 */
export function studioOwnedRecommendationDisclaimer(
  noraDisclaimer?: string | null,
): string {
  void noraDisclaimer;
  return NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER;
}

/** Drop provenance notes that claim server/Product certification. */
export function sanitizeProvenanceNote(
  note: string | null | undefined,
): string | null {
  if (note == null) return null;
  const t = String(note).trim();
  if (!t) return null;
  if (looksLikeAuthorityClaim(t)) return null;
  return t;
}

/**
 * CORR-NAP-D1-EYEBROW-01 — presentation eyebrow is chrome, never Product authority.
 * Reuses looksLikeAuthorityClaim only (no parallel keyword policy).
 */
export function sanitizePresentationEyebrow(
  eyebrow: string | null | undefined,
): string | null {
  if (eyebrow == null) return null;
  const t = String(eyebrow).trim();
  if (!t) return null;
  if (looksLikeAuthorityClaim(t)) return null;
  return t;
}

export const NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE =
  "Les libellés ci-dessus sont une formulation Nora — pas une validation Studio, ni une Evidence Product, ni une HumanDecision." as const;

/**
 * CORR-NAP-LIVE-RENDER-01 — B-path segments for a readable GFM table without
 * inventing Option C structure or altering cell text.
 * Fail-closed: malformed / incomplete tables stay plain text.
 */
export type NoraCanonicalFallbackSegment =
  | { kind: "text"; text: string }
  | {
      kind: "table";
      columns: string[];
      rows: string[][];
      /** Exact source slice (header + sep + rows) — fidelity oracle. */
      raw: string;
    };

const GFM_TABLE_ROW_RE = /^\|(.+)\|$/;
const GFM_TABLE_SEP_RE = /^\|[\s|:\-]+\|$/;

function splitGfmTableCells(line: string): string[] {
  const trimmed = line.trim();
  const inner =
    trimmed.startsWith("|") && trimmed.endsWith("|")
      ? trimmed.slice(1, -1)
      : trimmed;
  return inner.split("|").map((c) => c.trim());
}

function isGfmTableSeparatorLine(line: string): boolean {
  const t = line.trim();
  if (!GFM_TABLE_SEP_RE.test(t)) return false;
  const cells = splitGfmTableCells(t);
  if (cells.length === 0) return false;
  return cells.every((c) => /^:?-{3,}:?$/.test(c));
}

function isGfmTableDataOrHeaderLine(line: string): boolean {
  const t = line.trim();
  if (!GFM_TABLE_ROW_RE.test(t)) return false;
  if (isGfmTableSeparatorLine(t)) return false;
  return splitGfmTableCells(t).length > 0;
}

/**
 * Split canonical plain text into text / GFM-table segments for fallback B.
 * Preserves every character of the source when flattened (join of segments).
 * Does not dedupe recommendations or rewrite narrative.
 */
export function splitPlainTextWithMarkdownTables(
  plainText: string,
): NoraCanonicalFallbackSegment[] {
  const source = String(plainText ?? "");
  if (!source) return [{ kind: "text", text: "" }];

  const lines = source.split("\n");
  const segments: NoraCanonicalFallbackSegment[] = [];
  let textBuf: string[] = [];

  const flushText = () => {
    if (textBuf.length === 0) return;
    segments.push({ kind: "text", text: textBuf.join("\n") });
    textBuf = [];
  };

  let i = 0;
  while (i < lines.length) {
    const headerLine = lines[i] ?? "";
    const sepLine = lines[i + 1] ?? "";
    if (
      isGfmTableDataOrHeaderLine(headerLine) &&
      isGfmTableSeparatorLine(sepLine)
    ) {
      const columns = splitGfmTableCells(headerLine);
      const rows: string[][] = [];
      let j = i + 2;
      while (j < lines.length && isGfmTableDataOrHeaderLine(lines[j] ?? "")) {
        const cells = splitGfmTableCells(lines[j] ?? "");
        // Pad / trim to column count without inventing content beyond ""
        const normalized =
          cells.length === columns.length
            ? cells
            : columns.map((_, idx) => cells[idx] ?? "");
        rows.push(normalized);
        j += 1;
      }
      if (rows.length > 0) {
        flushText();
        const raw = lines.slice(i, j).join("\n");
        segments.push({ kind: "table", columns, rows, raw });
        i = j;
        continue;
      }
    }
    textBuf.push(headerLine);
    i += 1;
  }
  flushText();
  return segments.length > 0 ? segments : [{ kind: "text", text: source }];
}

/** Flatten segments back to source text (exact round-trip via raw slices). */
export function flattenCanonicalFallbackSegments(
  segments: NoraCanonicalFallbackSegment[],
): string {
  return segments
    .map((seg) => (seg.kind === "text" ? seg.text : seg.raw))
    .join("\n");
}
