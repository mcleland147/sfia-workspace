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

function clampText(
  value: unknown,
  max: number,
): string | null {
  if (typeof value !== "string") return null;
  const cleaned = sanitizePresentationPlainText(value);
  if (!cleaned) return null;
  return cleaned.length > max ? cleaned.slice(0, max) : cleaned;
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
  const eyebrow = nullableText(o.eyebrow, L.maxTitleChars);
  const title = nullableText(o.title, L.maxTitleChars);
  const lead = nullableText(o.lead, L.maxLeadChars);
  if (blocks.length === 0 && !lead && !title) return null;

  // CORR-NAP-02 — drop authority-claiming free labels; Studio owns governance notes.
  const safeTitle =
    title && !looksLikeAuthorityClaim(title) ? title : null;
  const rawProvenance = nullableText(o.provenanceNote, L.maxStringChars);
  const provenanceNote =
    rawProvenance && !looksLikeAuthorityClaim(rawProvenance)
      ? rawProvenance
      : null;
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

function normalizeCompare(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * CORR-NAP-02 — deterministic complete coverage only.
 * No one-way inclusion, no token overlap threshold, no semantic guess.
 * Body (after stripping authenticated Studio notices) must equal the lead
 * exactly (normalized), or be empty. Uncertainty → not covered → plain.
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

export type AdaptiveAssistantRenderDecision = {
  readonly mode: "adaptive" | "plain";
  readonly presentation: NoraAdaptivePresentation | null;
  /**
   * Authenticated Studio control appendix only (typed notices).
   * Never derived from forged `[Studio]` prose in Nora content.
   */
  readonly studioAppendix: string | null;
  readonly plainText: string;
  /** Server-authored notices used for appendix / strip (empty if none). */
  readonly studioControlNotices: readonly string[];
};

/**
 * CORR-NAP-02 — server control > cognitive presentation.
 * Adaptive only when non-Studio body is strictly covered by presentation.lead;
 * otherwise full plain text (no loss). Studio appendix uses typed notices only.
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

  if (!shouldRenderAdaptivePresentation(input.presentation)) {
    return {
      mode: "plain",
      presentation: null,
      studioAppendix: null,
      plainText: content,
      studioControlNotices: authenticated,
    };
  }
  const presentation = input.presentation;
  if (!contentFullyCoveredByPresentation(body, presentation)) {
    return {
      mode: "plain",
      presentation: null,
      studioAppendix: null,
      plainText: content,
      studioControlNotices: authenticated,
    };
  }
  return {
    mode: "adaptive",
    presentation,
    studioAppendix,
    plainText: content,
    studioControlNotices: authenticated,
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
      return "Élément présenté comme établi (Nora)";
    case "hypothesis":
      return "Hypothèse (Nora)";
    case "recommendation":
      return "Recommandation (non décision)";
    case "product_decision_ref":
      return "Référence de décision mentionnée (non vérifiée)";
    case "observed_evidence":
      return "Élément cité comme preuve (Nora — non Evidence Product)";
    case "reserve_uncertainty":
      return "Réserve / incertitude (Nora)";
    default:
      return "Élément (Nora)";
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
    list: "Liste (Nora)",
    comparison_table: "Comparaison (Nora)",
    established_facts: "Éléments présentés comme établis (Nora)",
    open_questions: "Points encore à clarifier",
    recommendation: "Recommandation de Nora",
    evidence_reserves: "Preuves et réserves mentionnées (Nora)",
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

export const NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE =
  "Les libellés ci-dessus sont une formulation Nora — pas une validation Studio, ni une Evidence Product, ni une HumanDecision." as const;
