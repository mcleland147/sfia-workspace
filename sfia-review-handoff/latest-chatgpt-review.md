# ChatGPT Critical Review Pack — FULL
## AKG-M5 L3-S2 · CYCLE 8 · CORR-NAP-01 — Nora Adaptive Presentation Reliability

**UTC authored:** 2026-10-29T19:47:35Z
**Morris GO:** Correction locale de fiabilité — aucun GO intégration Git / REAL / DOC
**Prior handoff CURRENT (superseded by this publish):** `200f0128085d9c28eaf0f5e0a61feff090631058`
**Verdict:** LOCAL CORRECTION COMPLETE — DETERMINISTIC VERIFIED — CHATGPT REVIEW REQUIRED — R24 DOCUMENTARY SYNC PENDING

**Anti-claims:** No project commit/push/PR/merge · No LIVE/HQA write · No OpenAI LIVE · No Cursor REAL · No TEST-15 · No Figma change · No PRR/Roadmap write · No L3/L4/v3 · No FIGMA TO RUNTIME ALIGNED · Architecture Option C preserved (not redesigned)

---

## 1. Git Truth Check
| Field | Value |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Delivery WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation` |
| Branch | `feat/akg-m5-nora-adaptive-presentation` |
| HEAD | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| origin/main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` MATCH |
| Delivery WIP | **UNCOMMITTED** (preserved; no stash/reset/clean to move work) |
| Prior CURRENT handoff | `200f0128…` MATCH at cycle start |

### git status --short
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
```

### diff --stat (app)
```
 .../hooks/useProductConversation.ts                |  8 +++
 .../surfaces/ConversationSurface.tsx               | 55 ++++++++++++++++--
 .../app/features/project-assistant/actions.ts      |  9 +++
 .../project-assistant/buildProjectSystemPrompt.ts  | 14 ++++-
 .../features/project-assistant/orchestrateTurn.ts  | 17 ++++++
 .../app/features/project-assistant/types.ts        |  5 ++
 .../nora-cognitive-runtime/cycleJournalStore.ts    | 22 +++++--
 .../nora-cognitive-runtime/cycleJournalTypes.ts    |  6 ++
 .../app/lib/nora-cognitive-runtime/index.ts        | 26 +++++++++
 .../noraProductTurnOutputType.ts                   | 67 ++++++++++++++++++++++
 .../nora-cognitive-runtime/productSqliteSession.ts | 16 ++++++
 .../nora-cognitive-runtime/providerAgentsModel.ts  |  4 ++
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |  2 +
 13 files changed, 240 insertions(+), 11 deletions(-)
```

### Git Review Index
| Path | Role |
|---|---|
| `noraAdaptivePresentation.ts` | CREATED+CORR — schema + Studio appendix resolve + honest labels |
| `NoraAdaptivePresentationView.tsx` + CSS | CREATED+CORR — honest epistemic UI + studio appendix |
| `*.d0.test.ts` / `*.ui.test.tsx` | CREATED+CORR — CORR-NAP-01 cases + true legacy migration |
| `orchestrateTurn.ts` | MOD — durable `[Studio]` STOP/incomplete before persist |
| `ConversationSurface.tsx` | MOD — resolveAdaptiveAssistantRender; suppress duplicate incomplete banner |
| Product turn / SQLite / continuity | MOD — Delivery Option C base (unchanged architecture) |

---

## 2. Sources
Template v2.6 · routing · Build Doctrine · Roadmap · C1 · doctrine v3 30/32/34/35 · PRR 02–09 (R24 list only) · Figma A3/A4 validated · handoff CURRENT `200f0128…` (not sole reliance on `4f95db17`).

R23: code + tests primary. R24: NO SEMANTIC DOC WRITE this cycle.

---

## 3. Causes & corrections

### P1 — Studio notices masked by adaptive DTO
**Cause:** ConversationSurface rendered DTO instead of final `content`; post-model `[Studio]` / STOP / incomplete were hidden (or only ephemeral).
**Fix:**
1. `appendStudioControlNotices` — persist STOP + execution-limit into durable `content` as `[Studio] …` (deduped) before transcript write.
2. `resolveAdaptiveAssistantRender` — if non-Studio body not covered by DTO → **plain full text**; if covered → adaptive + **studioAppendix** under DTO.
3. Incomplete surface banner suppressed when durable Studio incomplete already in message (no duplicate).

### P1 — Epistemic fidelity
**Cause:** Labels like « Fait établi » / « Preuve observée » / « Décision Product » overstated Nora claims.
**Fix:** `honestEpistemicLabel` / `honestBlockTitle` + honesty footer — formulation Nora ≠ Studio validation ≠ Evidence Product ≠ HumanDecision. No invented OA linkage. Schema kinds unchanged (non-structuring).

### P2 — Legacy migration
**Cause:** Prior test opened current schema then wrote null presentation (not true pre-column DB).
**Fix:** Raw SQLite create historical `pilot_transcript_turns` **without** `presentation_json` → open via ProductSqliteSession → column added → legacy plain preserved → idempotent reopen → new DTO round-trip → malformed fallback.

---

## 4. Architecture retained
Nora Product turn → presentation DTO → Studio validate → `presentation_json` → View → reload → plain fallback. No second renderer / Truth C / table / authority model.

---

## 5. Validations (exact)
```
npx vitest run \
  __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts \
  __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx \
  __tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts \
  __tests__/nora-cognitive-runtime/cycleJournalContinuity.d0.test.ts \
  __tests__/project-assistant/f2PilotTranscriptPersist.d0.test.ts \
  __tests__/project-assistant/noraConversationalInitiative.d0.test.ts
→ 6 files / 90 tests PASSED

npx tsc --noEmit -p tsconfig.json → exit 0
npx eslint (targeted CORR files) → exit 0
```

### Fake/Real
Applicable YES · boundary Agents/Structured Outputs · DETERMINISTIC PROVEN · REAL/E2E/G-REAL NOT authorized.

### Figma
A3/A4 preserved; no cosmetic redesign. **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED** for strong pixel claim.

---

## 6. R24
PRR 03/06/09 still need DOC GO for adaptive presentation + Studio appendix durability + epistemic honesty. **R24 DOCUMENTARY SYNC PENDING — MORRIS DOC GO REQUIRED.**

---

## 7. Created files — FULL CONTENT

### `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`
```typescript
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
    const rawDisclaimer = nullableText(o.disclaimer, L.maxStringChars);
    return {
      kind: "recommendation",
      title,
      statement,
      disclaimer: rawDisclaimer ?? NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
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

  const provenanceNote = nullableText(o.provenanceNote, L.maxStringChars);
  const noGoverned =
    nullableText(o.noGovernedActionNote, L.maxStringChars) ??
    NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE;

  return Object.freeze({
    version: NORA_ADAPTIVE_PRESENTATION_VERSION,
    eyebrow,
    title,
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

/** Durable Studio control marker — never Product CTA / never Truth C. */
export const STUDIO_CONTROL_MARKER = "[Studio]" as const;

/**
 * Append server control notices into durable assistant text so reload preserves
 * them. Dedupes when already present. Does not invent Product authority.
 */
export function appendStudioControlNotices(
  assistantText: string,
  notices: readonly (string | null | undefined)[],
): string {
  let out = assistantText.trimEnd();
  for (const notice of notices) {
    const t = typeof notice === "string" ? notice.trim() : "";
    if (!t) continue;
    if (out.includes(t)) continue;
    out = `${out}\n\n${STUDIO_CONTROL_MARKER} ${t}`;
  }
  return out;
}

const STUDIO_APPENDIX_SPLIT_RE = /\n\n(?=\[Studio\])/;

/** Extract durable `[Studio] …` control suffixes from final assistant content. */
export function extractStudioControlAppendix(
  content: string,
): string | null {
  const raw = content ?? "";
  if (!raw.includes(STUDIO_CONTROL_MARKER)) return null;
  if (raw.trimStart().startsWith(STUDIO_CONTROL_MARKER)) {
    return raw.trim() || null;
  }
  const parts = raw.split(STUDIO_APPENDIX_SPLIT_RE);
  if (parts.length <= 1) return null;
  const appendix = parts.slice(1).join("\n\n").trim();
  return appendix || null;
}

/** Body without durable Studio control appendix. */
export function contentWithoutStudioAppendix(content: string): string {
  const raw = content ?? "";
  if (raw.trimStart().startsWith(STUDIO_CONTROL_MARKER)) return "";
  const idx = raw.search(STUDIO_APPENDIX_SPLIT_RE);
  if (idx < 0) return raw.trimEnd();
  return raw.slice(0, idx).trimEnd();
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

function contentCoveredByPresentation(
  body: string,
  presentation: NoraAdaptivePresentation,
): boolean {
  const nBody = normalizeCompare(body);
  if (!nBody) return true;
  const nProj = normalizeCompare(presentationPlainProjection(presentation));
  if (!nProj) return false;
  if (nProj.includes(nBody) || nBody.includes(nProj)) return true;
  const bodyTokens = new Set(nBody.split(" ").filter((w) => w.length > 2));
  const projTokens = new Set(nProj.split(" ").filter((w) => w.length > 2));
  if (bodyTokens.size === 0) return true;
  let inter = 0;
  for (const t of bodyTokens) if (projTokens.has(t)) inter += 1;
  return inter / bodyTokens.size >= 0.75;
}

export type AdaptiveAssistantRenderDecision = {
  readonly mode: "adaptive" | "plain";
  readonly presentation: NoraAdaptivePresentation | null;
  /** Durable Studio control suffix to show under adaptive (never CTA). */
  readonly studioAppendix: string | null;
  readonly plainText: string;
};

/**
 * CORR-NAP-01 — server control > cognitive presentation.
 * Adaptive when DTO valid and non-Studio body is covered by the DTO;
 * otherwise full plain text (no loss). Studio `[Studio]` appendix always
 * projected when adaptive (never masked by DTO).
 */
export function resolveAdaptiveAssistantRender(input: {
  content: string;
  presentation: NoraAdaptivePresentation | null | undefined;
}): AdaptiveAssistantRenderDecision {
  const content = input.content ?? "";
  const studioAppendix = extractStudioControlAppendix(content);
  const body = contentWithoutStudioAppendix(content);
  if (!shouldRenderAdaptivePresentation(input.presentation)) {
    return {
      mode: "plain",
      presentation: null,
      studioAppendix: null,
      plainText: content,
    };
  }
  const presentation = input.presentation;
  if (!contentCoveredByPresentation(body, presentation)) {
    return {
      mode: "plain",
      presentation: null,
      studioAppendix: null,
      plainText: content,
    };
  }
  return {
    mode: "adaptive",
    presentation,
    studioAppendix,
    plainText: content,
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

export function honestBlockTitle(
  kind: NoraAdaptiveBlockKind,
  title: string | null | undefined,
): string {
  if (title && title.trim()) return title.trim();
  switch (kind) {
    case "established_facts":
      return "Éléments présentés comme établis (Nora)";
    case "open_questions":
      return "Points encore à clarifier";
    case "recommendation":
      return "Recommandation de Nora";
    case "evidence_reserves":
      return "Preuves et réserves mentionnées (Nora)";
    case "comparison_table":
      return "Comparaison";
    case "list":
      return "Liste";
    case "section":
      return "Section";
    default:
      return "Élément";
  }
}

export const NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE =
  "Les libellés ci-dessus sont une formulation Nora — pas une validation Studio, ni une Evidence Product, ni une HumanDecision." as const;
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx`
```typescript
"use client";

import type { ReactElement } from "react";
import type {
  NoraAdaptivePresentation,
  NoraAdaptivePresentationBlock,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import {
  NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
  NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
  honestBlockTitle,
  honestEpistemicLabel,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import styles from "./NoraAdaptivePresentationView.module.css";

function BlockGlyph({
  kind,
}: {
  kind: NoraAdaptivePresentationBlock["kind"];
}): ReactElement {
  const map: Record<NoraAdaptivePresentationBlock["kind"], string> = {
    plain: "·",
    question: "?",
    section: "§",
    list: "•",
    comparison_table: "⇄",
    established_facts: "✓",
    open_questions: "?",
    recommendation: "↗",
    evidence_reserves: "◎",
    trace_note: "↗",
  };
  return (
    <span className={styles.glyph} aria-hidden="true">
      {map[kind]}
    </span>
  );
}

function renderBlock(
  block: NoraAdaptivePresentationBlock,
  index: number,
): ReactElement {
  const key = `${block.kind}-${index}`;
  if (block.kind === "plain") {
    return (
      <p key={key} className={styles.plain}>
        {block.text}
      </p>
    );
  }
  if (block.kind === "question") {
    return (
      <p key={key} className={styles.question} role="text">
        {block.text}
      </p>
    );
  }
  if (block.kind === "section") {
    return (
      <section key={key} className={styles.section} aria-label={block.title}>
        <h4 className={styles.blockTitle}>{block.title}</h4>
        <p className={styles.blockBody}>{block.body}</p>
      </section>
    );
  }
  if (block.kind === "list") {
    const heading = honestBlockTitle("list", block.title);
    return (
      <section
        key={key}
        className={styles.listBlock}
        aria-label={heading}
      >
        <div className={styles.blockHead}>
          <BlockGlyph kind="list" />
          <div>
            <h4 className={styles.blockTitle}>{heading}</h4>
            <p className={styles.epistemic}>
              {honestEpistemicLabel(block.epistemic)}
            </p>
          </div>
        </div>
        <ul className={styles.itemList}>
          {block.items.map((item, i) => (
            <li key={`${key}-i${i}`}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }
  if (block.kind === "comparison_table") {
    const heading = honestBlockTitle("comparison_table", block.title);
    return (
      <section key={key} className={styles.tableBlock} aria-label={heading}>
        <h4 className={styles.blockTitle}>{heading}</h4>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.columns.map((col, i) => (
                  <th key={`${key}-c${i}`} scope="col">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={`${key}-r${ri}`}>
                  {row.map((cell, ci) => (
                    <td key={`${key}-r${ri}-c${ci}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  if (block.kind === "established_facts") {
    const heading = honestBlockTitle("established_facts", block.title);
    return (
      <section
        key={key}
        className={`${styles.tintBlock} ${styles.tintEstablished}`}
        aria-label={heading}
      >
        <div className={styles.blockHead}>
          <span className={styles.glyphChip} aria-hidden="true">
            <BlockGlyph kind="established_facts" />
          </span>
          <div>
            <h4 className={styles.blockTitle}>{heading}</h4>
            <p className={styles.epistemic}>
              {honestEpistemicLabel("established_fact")}
            </p>
          </div>
        </div>
        <ul className={styles.itemList}>
          {block.items.map((item, i) => (
            <li key={`${key}-i${i}`}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }
  if (block.kind === "open_questions") {
    const heading = honestBlockTitle("open_questions", block.title);
    return (
      <section
        key={key}
        className={`${styles.tintBlock} ${styles.tintOpen}`}
        aria-label={heading}
      >
        <div className={styles.blockHead}>
          <span className={styles.glyphChip} aria-hidden="true">
            <BlockGlyph kind="open_questions" />
          </span>
          <h4 className={styles.blockTitle}>{heading}</h4>
        </div>
        <ul className={styles.itemList}>
          {block.items.map((item, i) => (
            <li key={`${key}-i${i}`}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }
  if (block.kind === "recommendation") {
    const heading = honestBlockTitle("recommendation", block.title);
    return (
      <section
        key={key}
        className={`${styles.tintBlock} ${styles.tintRecommendation}`}
        aria-label={heading}
      >
        <div className={styles.blockHead}>
          <span className={styles.glyphChip} aria-hidden="true">
            <BlockGlyph kind="recommendation" />
          </span>
          <h4 className={styles.blockTitle}>{heading}</h4>
        </div>
        <p className={styles.recommendationStatement}>{block.statement}</p>
        <p className={styles.recommendationDisclaimer}>
          {block.disclaimer ?? NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER}
        </p>
      </section>
    );
  }
  if (block.kind === "evidence_reserves") {
    const heading = honestBlockTitle("evidence_reserves", block.title);
    return (
      <section
        key={key}
        className={`${styles.tintBlock} ${styles.tintEvidence}`}
        aria-label={heading}
      >
        <div className={styles.blockHead}>
          <span className={styles.glyphChip} aria-hidden="true">
            <BlockGlyph kind="evidence_reserves" />
          </span>
          <h4 className={styles.blockTitle}>{heading}</h4>
        </div>
        {block.evidenceItems.length > 0 ? (
          <>
            <p className={styles.epistemic}>
              {honestEpistemicLabel("observed_evidence")}
            </p>
            <ul className={styles.itemList}>
              {block.evidenceItems.map((item, i) => (
                <li key={`${key}-e${i}`}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
        {block.reserveItems.length > 0 ? (
          <>
            <p className={styles.epistemic}>
              {honestEpistemicLabel("reserve_uncertainty")}
            </p>
            <ul className={styles.itemList}>
              {block.reserveItems.map((item, i) => (
                <li key={`${key}-r${i}`}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
      </section>
    );
  }
  return (
    <p key={key} className={styles.traceNote}>
      {block.text}
    </p>
  );
}

export type NoraAdaptivePresentationViewProps = {
  presentation: NoraAdaptivePresentation;
  /**
   * Durable Studio control appendix (`[Studio] …`) — shown under adaptive
   * blocks so server notices are never masked by the DTO.
   */
  studioAppendix?: string | null;
  /** Scrubbed plain fallback when caller forces plain — unused in adaptive mode. */
  fallbackText?: string;
};

/**
 * Bounded adaptive renderer for Nora Option C presentation DTO.
 * No Product CTAs, no HTML injection, no governed action hooks.
 * CORR-NAP-01 — honest epistemic labels; Studio appendix never hidden.
 */
export function NoraAdaptivePresentationView({
  presentation,
  studioAppendix = null,
}: NoraAdaptivePresentationViewProps): ReactElement {
  const appendix = (studioAppendix ?? "").trim();
  return (
    <div
      className={styles.root}
      data-testid="nora-adaptive-presentation"
      data-presentation-version={presentation.version}
    >
      {presentation.eyebrow ? (
        <p className={styles.eyebrow}>{presentation.eyebrow}</p>
      ) : null}
      {presentation.title ? (
        <h3 className={styles.title}>{presentation.title}</h3>
      ) : null}
      {presentation.lead ? (
        <p className={styles.lead}>{presentation.lead}</p>
      ) : null}
      <div className={styles.blocks}>
        {presentation.blocks.map((block, index) => renderBlock(block, index))}
      </div>
      <p
        className={styles.epistemicHonesty}
        data-testid="nora-adaptive-epistemic-honesty"
      >
        {NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE}
      </p>
      {presentation.provenanceNote ? (
        <p className={styles.provenance}>{presentation.provenanceNote}</p>
      ) : null}
      <p className={styles.noAction}>
        {presentation.noGovernedActionNote ??
          NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE}
      </p>
      {appendix ? (
        <div
          className={styles.studioAppendix}
          role="status"
          data-testid="nora-adaptive-studio-appendix"
        >
          {appendix.split(/\n\n+/).map((para, i) => (
            <p key={`studio-${i}`} className={styles.studioAppendixLine}>
              {para}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
```

### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css`
```css
/* Nora adaptive presentation — A3/A4 aligned, PM6 tokens only. */

.root {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-3);
  max-width: 100%;
}

.eyebrow {
  margin: 0;
  font-size: var(--pm6-text-caption);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--pm6-accent);
}

.title {
  margin: 0;
  font-size: var(--pm6-text-body-lg, 1.05rem);
  font-weight: 600;
  color: var(--pm6-ink);
  line-height: 1.35;
}

.lead {
  margin: 0;
  font-size: var(--pm6-text-body);
  color: var(--pm6-ink-soft);
  line-height: 1.45;
  white-space: pre-wrap;
}

.blocks {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-3);
}

.plain,
.question,
.blockBody,
.recommendationStatement {
  margin: 0;
  font-size: var(--pm6-text-body);
  color: var(--pm6-ink);
  line-height: 1.45;
  white-space: pre-wrap;
}

.question {
  font-weight: 500;
}

.section {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-2);
}

.blockTitle {
  margin: 0;
  font-size: var(--pm6-text-body);
  font-weight: 600;
  color: var(--pm6-ink);
  line-height: 1.35;
}

.blockHead {
  display: flex;
  align-items: flex-start;
  gap: var(--pm6-space-3);
}

.glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: inherit;
}

.glyphChip {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: var(--pm6-radius-sm);
  background: var(--pm6-surface);
  color: var(--pm6-ink);
  font-size: 1rem;
}

.tintBlock {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-2);
  padding: var(--pm6-space-3);
  border-radius: var(--pm6-radius-md);
  border: 1px solid transparent;
}

.tintEstablished {
  background: var(--pm6-forest-tint);
  border-color: color-mix(in srgb, var(--pm6-forest) 18%, transparent);
}

.tintEstablished .glyphChip {
  color: var(--pm6-forest);
}

.tintOpen {
  background: var(--pm6-surface-sunken);
  border-color: var(--pm6-border-soft);
}

.tintOpen .glyphChip {
  color: var(--pm6-muted);
}

.tintRecommendation {
  background: var(--pm6-warn-tint);
  border-color: color-mix(in srgb, var(--pm6-accent) 22%, transparent);
}

.tintRecommendation .glyphChip {
  color: var(--pm6-accent);
}

.tintEvidence {
  background: var(--pm6-surface-sunken);
  border-color: var(--pm6-border-soft);
}

.itemList {
  margin: 0;
  padding-left: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: var(--pm6-text-body);
  color: var(--pm6-ink);
  line-height: 1.45;
}

.epistemic {
  margin: 0;
  font-size: var(--pm6-text-caption);
  font-weight: 500;
  color: var(--pm6-muted-strong);
}

.recommendationStatement {
  font-weight: 500;
}

.recommendationDisclaimer {
  margin: 0;
  font-size: var(--pm6-text-caption);
  color: var(--pm6-muted);
  line-height: 1.4;
}

.listBlock,
.tableBlock {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-2);
}

.tableScroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--pm6-text-caption);
  color: var(--pm6-ink);
}

.table th,
.table td {
  border: 1px solid var(--pm6-border-soft);
  padding: 0.45rem 0.55rem;
  text-align: left;
  vertical-align: top;
}

.table th {
  background: var(--pm6-surface-sunken);
  font-weight: 600;
}

.traceNote {
  margin: 0;
  font-size: var(--pm6-text-caption);
  color: var(--pm6-muted);
  line-height: 1.4;
}

.provenance {
  margin: var(--pm6-space-2) 0 0;
  font-size: var(--pm6-text-caption);
  color: var(--pm6-muted);
  line-height: 1.4;
}

.noAction {
  margin: 0;
  font-size: var(--pm6-text-caption);
  font-weight: 500;
  color: var(--pm6-muted);
  line-height: 1.4;
}

.epistemicHonesty {
  margin: 0;
  font-size: var(--pm6-text-caption);
  color: var(--pm6-muted-strong);
  line-height: 1.4;
}

.studioAppendix {
  margin-top: var(--pm6-space-2);
  padding: var(--pm6-space-3);
  border-radius: var(--pm6-radius-md);
  border: 1px solid var(--pm6-border-soft);
  background: var(--pm6-warn-tint);
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-2);
}

.studioAppendixLine {
  margin: 0;
  font-size: var(--pm6-text-body);
  color: var(--pm6-ink);
  line-height: 1.45;
  white-space: pre-wrap;
}

@media (max-width: 640px) {
  .tintBlock {
    padding: var(--pm6-space-2) var(--pm6-space-3);
  }

  .glyphChip {
    width: 1.65rem;
    height: 1.65rem;
  }
}
```

### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts`
```typescript
/**
 * Nora adaptive presentation Option C — schema validation + persistence continuity.
 * DETERMINISTIC only — no OpenAI LIVE.
 */
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { DatabaseSync } from "node:sqlite";
import {
  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
  NORA_ADAPTIVE_PRESENTATION_LIMITS,
  NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
  appendStudioControlNotices,
  deserializeNoraAdaptivePresentation,
  extractStudioControlAppendix,
  honestEpistemicLabel,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
  sanitizePresentationPlainText,
  serializeNoraAdaptivePresentation,
  shouldRenderAdaptivePresentation,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import {
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  buildFailClosedProductTurnJson,
  normalizeNoraProductTurnStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import {
  appendPilotTranscriptTurn,
  listPilotTranscriptTurns,
} from "@/lib/nora-cognitive-runtime/cycleJournalStore";

const tmpDirs: string[] = [];

afterEach(() => {
  while (tmpDirs.length > 0) {
    const d = tmpDirs.pop();
    if (d) rmSync(d, { recursive: true, force: true });
  }
});

function disposableDb(
  projectId = "proj:adapt-pres",
): { session: ProductSqliteSession; dbPath: string } {
  const dir = mkdtempSync(join(tmpdir(), "sfia-adapt-pres-"));
  tmpDirs.push(dir);
  const dbPath = join(dir, "session.sqlite");
  return {
    dbPath,
    session: new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey: "default",
    }),
  };
}

const VALID_PRESENTATION = {
  version: 1 as const,
  eyebrow: "NORA / Cadrage BALISE",
  title: "Synthèse du besoin",
  lead: "Voici les points utiles pour décider de la prochaine étape.",
  blocks: [
    {
      kind: "established_facts" as const,
      title: "Éléments établis",
      items: [
        "Centraliser les demandes et rendre leur état visible.",
        "Prioriser les blocages et les alertes de sécurité.",
      ],
    },
    {
      kind: "open_questions" as const,
      title: "Points encore à clarifier",
      items: [
        "Canaux de réception et informations requises.",
        "Délais, parcours et critères de réussite.",
      ],
    },
    {
      kind: "recommendation" as const,
      title: "Recommandation de Nora",
      statement: "Préparer une note de cadrage métier révisable.",
      disclaimer: null,
    },
  ],
  provenanceNote: "Source : transcript BALISE + contexte durable disponible",
  noGovernedActionNote: null,
};

describe("noraAdaptivePresentation — validation", () => {
  it("accepts A4-shaped multi-block presentation and injects disclaimer", () => {
    const parsed = parseNoraAdaptivePresentation(VALID_PRESENTATION);
    expect(parsed).not.toBeNull();
    expect(parsed!.blocks).toHaveLength(3);
    const rec = parsed!.blocks.find((b) => b.kind === "recommendation");
    expect(rec?.kind).toBe("recommendation");
    if (rec?.kind === "recommendation") {
      expect(rec.disclaimer).toBe(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER);
    }
    expect(parsed!.noGovernedActionNote).toBe(
      NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
    );
    expect(shouldRenderAdaptivePresentation(parsed)).toBe(true);
  });

  it("sanitizes HTML / scriptish tokens out of plain strings", () => {
    expect(sanitizePresentationPlainText("<script>alert(1)</script>")).toBe(
      "alert(1)",
    );
    expect(sanitizePresentationPlainText("javascript:alert(1)")).toBe(
      "alert(1)",
    );
    const scrubbed = parseNoraAdaptivePresentation({
      ...VALID_PRESENTATION,
      lead: "<b>Lead</b> safe",
      blocks: [{ kind: "plain", text: "Hello <em>world</em>" }],
    });
    expect(scrubbed?.lead).toBe("Lead safe");
    expect(scrubbed?.blocks[0]).toEqual({
      kind: "plain",
      text: "Hello world",
    });
  });

  it("rejects unknown version, oversize blocks, and unknown kinds", () => {
    expect(
      parseNoraAdaptivePresentation({ ...VALID_PRESENTATION, version: 99 }),
    ).toBeNull();
    expect(
      parseNoraAdaptivePresentation({
        ...VALID_PRESENTATION,
        blocks: [
          { kind: "cta_button", label: "Approuver", href: "/decide" },
        ],
      }),
    ).toBeNull();
    const tooMany = Array.from(
      { length: NORA_ADAPTIVE_PRESENTATION_LIMITS.maxBlocks + 1 },
      () => ({ kind: "plain" as const, text: "x" }),
    );
    expect(
      parseNoraAdaptivePresentation({
        ...VALID_PRESENTATION,
        blocks: tooMany,
      }),
    ).toBeNull();
  });

  it("rejects action-like fields (additionalProperties) by shape fail", () => {
    expect(
      parseNoraAdaptivePresentation({
        ...VALID_PRESENTATION,
        blocks: [
          {
            kind: "recommendation",
            title: null,
            statement: "Go",
            disclaimer: null,
            actionKind: "GO",
            href: "/execute",
          },
        ],
      }),
    ).toBeNull();
  });

  it("short empty presentation collapses to null", () => {
    expect(
      parseNoraAdaptivePresentation({
        version: 1,
        eyebrow: null,
        title: null,
        lead: null,
        blocks: [],
        provenanceNote: null,
        noGovernedActionNote: null,
      }),
    ).toBeNull();
  });
});

describe("noraAdaptivePresentation — product turn integrate", () => {
  it("schema requires presentation on Product turn output type", () => {
    const required = NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema
      .required as string[];
    expect(required).toContain("presentation");
    expect(
      NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema.properties,
    ).toHaveProperty("presentation");
  });

  it("normalize keeps narrative when presentation invalid; passes valid", () => {
    const invalid = normalizeNoraProductTurnStructuredOutput({
      narrative: "Réponse courte.",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: true,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      },
      lifecycleRecommendation: null,
      activeCycleWork: null,
      conversationGuidance: {
        kind: "ASK_CLARIFICATION",
        scope: "PRE_CYCLE",
        statement: "Peux-tu préciser ?",
        rationale: null,
      },
      journalDelta: null,
      reservationDelta: null,
      presentation: { version: 1, blocks: "nope" },
    });
    expect(invalid?.narrative).toBe("Réponse courte.");
    expect(invalid?.presentation).toBeNull();

    const valid = normalizeNoraProductTurnStructuredOutput({
      narrative: "Synthèse.",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: true,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: false,
        activeCycleAlreadyCoversWork: false,
      },
      lifecycleRecommendation: null,
      activeCycleWork: null,
      conversationGuidance: {
        kind: "ASK_CLARIFICATION",
        scope: "PRE_CYCLE",
        statement: "Souhaitez-vous approfondir ?",
        rationale: null,
      },
      journalDelta: null,
      reservationDelta: null,
      presentation: VALID_PRESENTATION,
    });
    expect(valid?.presentation?.blocks).toHaveLength(3);
  });

  it("fail-closed Product turn JSON includes presentation null", () => {
    const parsed = JSON.parse(buildFailClosedProductTurnJson("Hello"));
    expect(parsed.presentation).toBeNull();
  });
});

describe("noraAdaptivePresentation — SQLite persistence / reload", () => {
  it("migrates legacy DB and round-trips presentation JSON; legacy null falls back", () => {
    const { session, dbPath } = disposableDb();
    // Simulate legacy insert without presentation_json by writing then reading.
    const plain = appendPilotTranscriptTurn(session, {
      role: "user",
      content: "Bonjour",
      logicalTurnId: "lt:1",
    });
    expect(plain.presentationJson).toBeNull();

    const parsed = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const serialized = serializeNoraAdaptivePresentation(parsed);
    const assistant = appendPilotTranscriptTurn(session, {
      role: "assistant",
      content: "Synthèse narrative.",
      logicalTurnId: "lt:1",
      presentationJson: serialized,
    });
    expect(assistant.presentationJson).toBe(serialized);

    session.close();
    // Re-open same file → migration idempotent + reload identical.
    const session2 = new ProductSqliteSession({
      projectId: "proj:adapt-pres",
      dbPath,
      sessionKey: "default",
    });
    const listed = listPilotTranscriptTurns(session2);
    expect(listed).toHaveLength(2);
    const restored = listed.find((t) => t.role === "assistant")!;
    expect(restored.content).toBe("Synthèse narrative.");
    const dto = deserializeNoraAdaptivePresentation(restored.presentationJson);
    expect(dto?.blocks).toHaveLength(3);
    expect(dto?.blocks[0]).toMatchObject({ kind: "established_facts" });
    expect(shouldRenderAdaptivePresentation(dto)).toBe(true);

    // Invalid durable JSON → null DTO (content preserved).
    appendPilotTranscriptTurn(session2, {
      role: "assistant",
      content: "Ancien texte seul.",
      logicalTurnId: "lt:2",
      presentationJson: "{not-json",
    });
    const bad = listPilotTranscriptTurns(session2).find(
      (t) => t.logicalTurnId === "lt:2",
    )!;
    expect(deserializeNoraAdaptivePresentation(bad.presentationJson)).toBeNull();
    expect(bad.content).toBe("Ancien texte seul.");
    session2.close();
  });

  it("retry same logical turn does not duplicate and keeps prior presentation", () => {
    const { session } = disposableDb("proj:retry");
    const parsed = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const first = appendPilotTranscriptTurn(session, {
      role: "assistant",
      content: "A",
      logicalTurnId: "lt:retry",
      presentationJson: serializeNoraAdaptivePresentation(parsed),
    });
    const second = appendPilotTranscriptTurn(session, {
      role: "assistant",
      content: "B-should-not-win",
      logicalTurnId: "lt:retry",
      presentationJson: null,
    });
    expect(second.turnId).toBe(first.turnId);
    expect(second.content).toBe("A");
    expect(second.presentationJson).toBe(first.presentationJson);
    expect(listPilotTranscriptTurns(session).filter((t) => t.role === "assistant")).toHaveLength(
      1,
    );
    session.close();
  });

  it("CORR-NAP-01 P2 — true legacy schema without presentation_json migrates idempotently", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-adapt-legacy-"));
    tmpDirs.push(dir);
    const dbPath = join(dir, "legacy.sqlite");
    const raw = new DatabaseSync(dbPath);
    raw.exec(`
      CREATE TABLE pilot_transcript_turns (
        project_id TEXT NOT NULL,
        session_key TEXT NOT NULL,
        turn_id TEXT NOT NULL,
        seq INTEGER NOT NULL,
        role TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TEXT NOT NULL,
        logical_turn_id TEXT,
        cycle_instance_id TEXT,
        PRIMARY KEY (project_id, session_key, turn_id)
      );
      CREATE UNIQUE INDEX pilot_transcript_seq_uq
        ON pilot_transcript_turns(project_id, session_key, seq);
    `);
    raw
      .prepare(
        `INSERT INTO pilot_transcript_turns(
           project_id, session_key, turn_id, seq, role, content, created_at,
           logical_turn_id, cycle_instance_id
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        "proj:legacy",
        "default",
        "pt:legacy-user",
        0,
        "user",
        "Ancien message utilisateur",
        "2026-01-01T00:00:00.000Z",
        "lt:legacy",
        null,
      );
    raw
      .prepare(
        `INSERT INTO pilot_transcript_turns(
           project_id, session_key, turn_id, seq, role, content, created_at,
           logical_turn_id, cycle_instance_id
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        "proj:legacy",
        "default",
        "pt:legacy-asst",
        1,
        "assistant",
        "Ancien texte assistant sans DTO",
        "2026-01-01T00:00:01.000Z",
        "lt:legacy",
        null,
      );
    raw.close();

    const session = new ProductSqliteSession({
      projectId: "proj:legacy",
      dbPath,
      sessionKey: "default",
    });
    const listed = listPilotTranscriptTurns(session);
    expect(listed).toHaveLength(2);
    expect(listed.every((t) => t.presentationJson == null)).toBe(true);
    expect(listed[1]!.content).toBe("Ancien texte assistant sans DTO");

    // Idempotent reopen
    session.close();
    const session2 = new ProductSqliteSession({
      projectId: "proj:legacy",
      dbPath,
      sessionKey: "default",
    });
    expect(listPilotTranscriptTurns(session2)).toHaveLength(2);

    const parsed = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const withDto = appendPilotTranscriptTurn(session2, {
      role: "assistant",
      content: VALID_PRESENTATION.lead!,
      logicalTurnId: "lt:new",
      presentationJson: serializeNoraAdaptivePresentation(parsed),
    });
    expect(
      deserializeNoraAdaptivePresentation(withDto.presentationJson)?.blocks,
    ).toHaveLength(3);

    appendPilotTranscriptTurn(session2, {
      role: "assistant",
      content: "Texte avec DTO cassé",
      logicalTurnId: "lt:bad",
      presentationJson: '{"version":1,"blocks":',
    });
    const bad = listPilotTranscriptTurns(session2).find(
      (t) => t.logicalTurnId === "lt:bad",
    )!;
    expect(deserializeNoraAdaptivePresentation(bad.presentationJson)).toBeNull();
    expect(bad.content).toBe("Texte avec DTO cassé");
    session2.close();
  });
});

describe("CORR-NAP-01 — Studio control visibility + epistemic honesty", () => {
  it("appends Studio notices without duplication", () => {
    const once = appendStudioControlNotices("Narrative Nora.", [
      "Refus PREPARE : contrat non prêt.",
      "Refus PREPARE : contrat non prêt.",
      null,
    ]);
    expect(once).toContain("[Studio] Refus PREPARE : contrat non prêt.");
    expect(once.match(/Refus PREPARE/g)?.length).toBe(1);
  });

  it("A — DTO valid without notice → adaptive", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const d = resolveAdaptiveAssistantRender({
      content: VALID_PRESENTATION.lead!,
      presentation: dto,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.studioAppendix).toBeNull();
  });

  it("B — DTO + Studio refuse → appendix visible; adaptive kept when body covered", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const content = appendStudioControlNotices(VALID_PRESENTATION.lead!, [
      "Refus PREPARE : intention non confirmée.",
    ]);
    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
    expect(d.mode).toBe("adaptive");
    expect(d.studioAppendix).toContain("Refus PREPARE");
    expect(extractStudioControlAppendix(content)).toContain("[Studio]");
  });

  it("C/D — STOP / incomplete notices stay in durable content", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const content = appendStudioControlNotices(VALID_PRESENTATION.lead!, [
      "ARRÊT COGNITIF (≠ erreur technique). Contradiction ouverte.",
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ]);
    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
    expect(d.mode).toBe("adaptive");
    expect(d.studioAppendix).toMatch(/ARRÊT COGNITIF/);
    expect(d.studioAppendix).toMatch(/Limite d'exécution/);
  });

  it("falls back to plain when non-Studio body is not covered by DTO", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const d = resolveAdaptiveAssistantRender({
      content:
        "Corps entièrement différent ajouté après le modèle, non projeté dans le DTO.",
      presentation: dto,
    });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("Corps entièrement différent");
  });

  it("epistemic labels stay honest (presentation ≠ Product proof)", () => {
    expect(honestEpistemicLabel("established_fact")).toMatch(/Nora/);
    expect(honestEpistemicLabel("observed_evidence")).toMatch(/non Evidence Product/);
    expect(honestEpistemicLabel("product_decision_ref")).toMatch(/non vérifiée/);
    expect(honestEpistemicLabel("recommendation")).toMatch(/non décision/);
  });
});
```

### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx`
```typescript
/** @vitest-environment jsdom */
/**
 * UI — Nora adaptive presentation renderer (A3/A4 matrix samples).
 * DETERMINISTIC — no Product actions from free render.
 */
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { NoraAdaptivePresentationView } from "@/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView";
import {
  NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
  NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
  appendStudioControlNotices,
  parseNoraAdaptivePresentation,
  type NoraAdaptivePresentation,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";

afterEach(() => {
  cleanup();
});

function balisePresentation(): NoraAdaptivePresentation {
  return parseNoraAdaptivePresentation({
    version: 1,
    eyebrow: "NORA / Cadrage BALISE",
    title: null,
    lead: "Nous avons clarifié le besoin initial.",
    blocks: [
      {
        kind: "established_facts",
        title: "Éléments établis",
        items: ["Centraliser les demandes."],
      },
      {
        kind: "open_questions",
        title: "Points encore à clarifier",
        items: ["Canaux de réception."],
      },
      {
        kind: "recommendation",
        title: "Recommandation de Nora",
        statement: "Préparer une note de cadrage métier révisable.",
        disclaimer: null,
      },
    ],
    provenanceNote: "Source : transcript BALISE",
    noGovernedActionNote: null,
  })!;
}

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    liveActivityEvents: [],
    uiState: "READY",
    error: null,
    executionIncomplete: false,
    modeLabel: "fixture",
    ephemeralNotice: "notice",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    gateOpen: false,
    recommendationFreshness: "none",
    qualificationFreshness: "none",
    durableOutcomeFreshness: "none",
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    reservationResolutionProposal: null,
    transcriptAvailability: "available",
    openContinuityPresentation: null,
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    clearReservationResolutionProposal: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

describe("NoraAdaptivePresentationView", () => {
  it("renders BALISE multi-block synthesis without Product CTA", () => {
    render(<NoraAdaptivePresentationView presentation={balisePresentation()} />);
    const root = screen.getByTestId("nora-adaptive-presentation");
    expect(within(root).getByText("Éléments établis")).toBeTruthy();
    expect(within(root).getByText("Points encore à clarifier")).toBeTruthy();
    expect(within(root).getByText(/note de cadrage métier/)).toBeTruthy();
    expect(
      within(root).getByText(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER),
    ).toBeTruthy();
    expect(
      within(root).getByText(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE),
    ).toBeTruthy();
    expect(
      within(root).getByTestId("nora-adaptive-epistemic-honesty"),
    ).toHaveTextContent(NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE);
    expect(within(root).queryByRole("button")).toBeNull();
    expect(root.querySelector("a")).toBeNull();
  });

  it("renders comparison table", () => {
    const presentation = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: "Comparaison",
      lead: null,
      blocks: [
        {
          kind: "comparison_table",
          title: "Options",
          columns: ["Critère", "A", "B"],
          rows: [
            ["Délai", "Court", "Long"],
            ["Risque", "Faible", "Élevé"],
          ],
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    render(<NoraAdaptivePresentationView presentation={presentation} />);
    expect(screen.getByRole("columnheader", { name: "Critère" })).toBeTruthy();
    expect(screen.getByText("Faible")).toBeTruthy();
  });
});

describe("ConversationSurface adaptive message path", () => {
  it("uses adaptive renderer for assistant message with DTO; plain for legacy", () => {
    const presentation = balisePresentation();
    const controller = stubController({
      messages: [
        {
          id: "u1",
          role: "user",
          content: "Synthèse ?",
        },
        {
          id: "a1",
          role: "assistant",
          content: presentation.lead!,
          adaptivePresentation: presentation,
        },
        {
          id: "a2",
          role: "assistant",
          content: "Ancien historique texte seul.",
          adaptivePresentation: null,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByTestId("nora-adaptive-presentation")).toBeTruthy();
    expect(screen.getByText("Ancien historique texte seul.")).toBeTruthy();
  });

  it("CORR-NAP-01 — Studio refuse appendix visible under adaptive DTO", () => {
    const presentation = balisePresentation();
    const content = appendStudioControlNotices(presentation.lead!, [
      "Refus PREPARE : contrat non prêt.",
    ]);
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByTestId("nora-adaptive-presentation")).toBeTruthy();
    expect(screen.getByTestId("nora-adaptive-studio-appendix")).toHaveTextContent(
      "Refus PREPARE",
    );
    expect(screen.queryByRole("button", { name: /Approuver/i })).toBeNull();
  });

  it("CORR-NAP-01 — incomplete surface banner suppressed when durable Studio notice present", () => {
    const presentation = balisePresentation();
    const content = appendStudioControlNotices(presentation.lead!, [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ]);
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByTestId("nora-adaptive-studio-appendix")).toBeTruthy();
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });
});
```

## 8. Modified files — FULL DIFF
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 0d6bb828..45654975 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -74,6 +74,11 @@ export type ProductMessage = {
   content: string;
   /** Durable Session turn timestamp when known — never synthesized client-side. */
   createdAt?: string | null;
+  /**
+   * Validated Nora adaptive presentation (Option C). Null/absent → plain text.
+   * Never invents Product CTAs.
+   */
+  adaptivePresentation?: import("@/lib/nora-cognitive-runtime/noraAdaptivePresentation").NoraAdaptivePresentation | null;
 };

 export type TranscriptAvailability =
@@ -339,6 +344,7 @@ export function useProductConversation({
           role: m.role,
           content: m.content,
           createdAt: m.createdAt ?? null,
+          adaptivePresentation: m.adaptivePresentation ?? null,
         })),
       );
       setJournalCycleInstanceId(result.journal.cycleInstanceId);
@@ -960,6 +966,7 @@ export function useProductConversation({
           role: m.role,
           content: m.content,
           createdAt: m.createdAt ?? null,
+          adaptivePresentation: m.adaptivePresentation ?? null,
         })),
       );
     }
@@ -1276,6 +1283,7 @@ export function useProductConversation({
           id: nextId("assistant"),
           role: "assistant",
           content: result.text,
+          adaptivePresentation: result.adaptivePresentation ?? null,
         },
       ]);
       if (result.f2) {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 6b7c72cc..24af929f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -53,8 +53,21 @@ import {
   presentActivityEventLabel,
   presentLiveActivityTimeline,
 } from "./presentLiveActivityTimeline";
+import { NoraAdaptivePresentationView } from "./NoraAdaptivePresentationView";
+import {
+  resolveAdaptiveAssistantRender,
+  STUDIO_CONTROL_MARKER,
+} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
 import styles from "./ConversationSurface.module.css";

+/** Match durable Studio incomplete notice without importing orchestrateTurn (client). */
+function messageAlreadyShowsExecutionIncomplete(content: string): boolean {
+  return (
+    content.includes(STUDIO_CONTROL_MARKER) &&
+    /limite d['']ex[eé]cution/i.test(content)
+  );
+}
+
 /**
  * RC-02 — human-facing active-cycle label (pure presentation; no OA import).
  * Mirrors formatReservationActiveCycleFacingLabel without pulling server modules.
@@ -578,11 +591,36 @@ export function ConversationSurface({
                 >
                   {message.role === "user" ? "Vous" : "Nora"}
                 </p>
-                <p className={styles.bubbleText}>
-                  {message.role === "assistant"
-                    ? formatNoraAssistantDisplayText(message.content)
-                    : message.content}
-                </p>
+                {(() => {
+                  if (message.role !== "assistant") {
+                    return (
+                      <p className={styles.bubbleText}>{message.content}</p>
+                    );
+                  }
+                  const decision = resolveAdaptiveAssistantRender({
+                    content: message.content,
+                    presentation: message.adaptivePresentation,
+                  });
+                  if (
+                    decision.mode === "adaptive" &&
+                    decision.presentation
+                  ) {
+                    return (
+                      <NoraAdaptivePresentationView
+                        presentation={decision.presentation}
+                        studioAppendix={decision.studioAppendix}
+                        fallbackText={formatNoraAssistantDisplayText(
+                          message.content,
+                        )}
+                      />
+                    );
+                  }
+                  return (
+                    <p className={styles.bubbleText}>
+                      {formatNoraAssistantDisplayText(message.content)}
+                    </p>
+                  );
+                })()}
               </div>
             </article>
           ))
@@ -2314,7 +2352,12 @@ export function ConversationSurface({
         </div>
       ) : null}

-      {executionIncomplete ? (
+      {executionIncomplete &&
+      !messages.some(
+        (m) =>
+          m.role === "assistant" &&
+          messageAlreadyShowsExecutionIncomplete(m.content),
+      ) ? (
         <div
           className={styles.stoppedBanner}
           role="status"
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 52e4d130..db8cdb4c 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -858,6 +858,8 @@ export async function projectAssistantConversationContinuityAction(input: {
     content: string;
     /** Durable Session timestamp when present — never invented for UI. */
     createdAt: string | null;
+    /** Validated adaptive presentation; null → plain content fallback. */
+    adaptivePresentation?: import("@/lib/nora-cognitive-runtime/noraAdaptivePresentation").NoraAdaptivePresentation | null;
   }[];
   journal: {
     cycleInstanceId: string | null;
@@ -910,6 +912,9 @@ export async function projectAssistantConversationContinuityAction(input: {
       sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
     });
     try {
+      const { deserializeNoraAdaptivePresentation } = await import(
+        "@/lib/nora-cognitive-runtime/noraAdaptivePresentation"
+      );
       const turns = listPilotTranscriptTurns(session);
       const messages = turns
         .filter((t) => t.role === "user" || t.role === "assistant")
@@ -918,6 +923,10 @@ export async function projectAssistantConversationContinuityAction(input: {
           role: t.role as "user" | "assistant",
           content: t.content,
           createdAt: t.createdAt?.trim() || null,
+          adaptivePresentation:
+            t.role === "assistant"
+              ? deserializeNoraAdaptivePresentation(t.presentationJson)
+              : null,
         }));
       const cycleInstanceId = input.cycleInstanceId?.trim() || null;
       const listed = cycleInstanceId
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index da0c7997..a574b57f 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -226,7 +226,19 @@ export function buildProjectSystemPrompt(
     "statement : formulation naturelle Pilote (ex. « Je te propose maintenant de… ») ;",
     "varie selon le contexte ; évite le label robotique « PROCHAINE ÉTAPE : ».",
     "N'expose jamais les noms internes conversationGuidance / scope / preCycleRoutingAssessment /",
-    "activeCycleWork / journalDelta / LifecycleRecommendation / semanticKey / basisFingerprint / F1/F2/MW* dans le langage Pilote.",
+    "activeCycleWork / journalDelta / presentation / LifecycleRecommendation / semanticKey / basisFingerprint / F1/F2/MW* dans le langage Pilote.",
+    "",
+    "=== SORTIE STRUCTURÉE presentation (rendu adaptatif Pilote — même tour) ===",
+    "Champ structuré presentation (nullable) — projection d'affichage UNIQUEMENT.",
+    "presentation ≠ Truth C ≠ HumanDecision ≠ ExecutionContract ≠ Evidence ≠ CTA Product.",
+    "narrative reste le texte conversationnel canonique ; presentation organise le rendu (blocs).",
+    "Quand utile (synthèse, comparaison, faits établis + questions ouvertes + recommandation) :",
+    "émets presentation.version=1 avec blocks[] bornés (plain|question|section|list|comparison_table|",
+    "established_facts|open_questions|recommendation|evidence_reserves|trace_note).",
+    "Réponse courte / question simple → presentation = null (pas de carte superflue).",
+    "recommendation.disclaimer : rappeler que ce n'est PAS une décision Pilote.",
+    "JAMAIS de HTML/JS, JAMAIS de bouton/lien d'action, JAMAIS de HumanDecision inventée.",
+    "Si structure incertaine : presentation = null (Studio affichera le texte).",
     "",
     "=== SORTIE STRUCTURÉE journalDelta (Cycle Journal — même tour) ===",
     "Champ structuré journalDelta (nullable) — projection sémantique du cycle actif UNIQUEMENT.",
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 9b6daee2..e662d0be 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -44,6 +44,8 @@ import {
   derivePreCycleRoutingDisposition,
   isPreCycleRoutingAssessment,
   normalizeNoraProductTurnStructuredOutput,
+  serializeNoraAdaptivePresentation,
+  appendStudioControlNotices,
 } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
 import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
@@ -1513,6 +1515,15 @@ export async function orchestrateProjectAssistantTurn(input: {
       );
     }

+    // CORR-NAP-01 — durable Studio control notices into assistant text before
+    // transcript persist so reload keeps STOP / incomplete / prepare refuse.
+    // Deduped; never invents Product authority. Surface banners suppress when
+    // the same text is already in the message (no duplicate).
+    assistantText = appendStudioControlNotices(assistantText, [
+      executionLimitReached ? EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE : null,
+      stopNotice,
+    ]);
+
     // Pilot transcript + Cycle Journal — fail-closed locally; never blocks reply.
     const activeCycleIdForJournal =
       input.studioCognitiveContext?.activeCycle?.cycleInstanceId?.trim() ||
@@ -1537,11 +1548,16 @@ export async function orchestrateProjectAssistantTurn(input: {
             logicalTurnId,
             cycleInstanceId: activeCycleIdForJournal,
           });
+          const adaptivePresentation =
+            coherentEarly?.presentation ?? null;
           const assistantTurn = appendPilotTranscriptTurn(session, {
             role: "assistant",
             content: assistantText,
             logicalTurnId,
             cycleInstanceId: activeCycleIdForJournal,
+            presentationJson: adaptivePresentation
+              ? serializeNoraAdaptivePresentation(adaptivePresentation)
+              : null,
           });
           // P0 — do not materialize journalDelta as completed mission when limitReached.
           // Transcript of the interruption remains factual above.
@@ -1617,6 +1633,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       text: assistantText,
       mode: modeResolution.mode,
       presentation,
+      adaptivePresentation: coherentEarly?.presentation ?? null,
       model: turn.usage?.model ?? null,
       toolRounds: turn.toolRounds,
       toolCalls: turn.toolCalls,
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 6c28859d..dbe7cbdb 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -207,6 +207,11 @@ export type ProjectAssistantSendSuccess = {
   text: string;
   mode: Exclude<AssistantUiMode, "unconfirmed">;
   presentation: "test_provider" | "openai_live";
+  /**
+   * Nora adaptive presentation DTO (Option C) — projection only.
+   * Null when absent/invalid; UI falls back to text. Never a Product CTA.
+   */
+  adaptivePresentation?: import("@/lib/nora-cognitive-runtime/noraAdaptivePresentation").NoraAdaptivePresentation | null;
   /** Observed provider model when available (from usage.model). */
   model?: string | null;
   toolRounds: number;
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
index d1a3d09f..aebe6045 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
@@ -141,16 +141,23 @@ export function appendPilotTranscriptTurn(
     logicalTurnId?: string | null;
     cycleInstanceId?: string | null;
     turnId?: string;
+    /** Validated presentation JSON string — assistant only; never Truth C. */
+    presentationJson?: string | null;
   },
 ): PilotTranscriptTurnRef {
   session.ensurePilotTranscriptAndJournalSchema();
   const db = session.getSqlite();
   const logicalTurnId = input.logicalTurnId?.trim() || null;
+  const presentationJson =
+    input.role === "assistant" && typeof input.presentationJson === "string"
+      ? input.presentationJson.trim() || null
+      : null;
   // Retry-safe: same logical turn + role → return existing row (no duplicate).
   if (logicalTurnId) {
     const prior = db
       .prepare(
-        `SELECT turn_id, seq, role, content, created_at, logical_turn_id, cycle_instance_id
+        `SELECT turn_id, seq, role, content, created_at, logical_turn_id,
+                cycle_instance_id, presentation_json
          FROM pilot_transcript_turns
          WHERE project_id = ? AND session_key = ?
            AND logical_turn_id = ? AND role = ?
@@ -171,6 +178,7 @@ export function appendPilotTranscriptTurn(
           created_at: string;
           logical_turn_id: string | null;
           cycle_instance_id: string | null;
+          presentation_json: string | null;
         }
       | undefined;
     if (prior) {
@@ -182,6 +190,7 @@ export function appendPilotTranscriptTurn(
         content: prior.content,
         logicalTurnId: prior.logical_turn_id,
         cycleInstanceId: prior.cycle_instance_id,
+        presentationJson: prior.presentation_json ?? null,
       });
     }
   }
@@ -197,8 +206,8 @@ export function appendPilotTranscriptTurn(
   db.prepare(
     `INSERT INTO pilot_transcript_turns(
        project_id, session_key, turn_id, seq, role, content, created_at,
-       logical_turn_id, cycle_instance_id
-     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
+       logical_turn_id, cycle_instance_id, presentation_json
+     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
   ).run(
     session.projectId,
     session.sessionKey,
@@ -209,6 +218,7 @@ export function appendPilotTranscriptTurn(
     createdAt,
     logicalTurnId,
     input.cycleInstanceId?.trim() || null,
+    presentationJson,
   );
   return Object.freeze({
     turnId,
@@ -218,6 +228,7 @@ export function appendPilotTranscriptTurn(
     content: input.content,
     logicalTurnId,
     cycleInstanceId: input.cycleInstanceId?.trim() || null,
+    presentationJson,
   });
 }

@@ -228,7 +239,8 @@ export function listPilotTranscriptTurns(
   const rows = session
     .getSqlite()
     .prepare(
-      `SELECT turn_id, seq, role, content, created_at, logical_turn_id, cycle_instance_id
+      `SELECT turn_id, seq, role, content, created_at, logical_turn_id,
+              cycle_instance_id, presentation_json
        FROM pilot_transcript_turns
        WHERE project_id = ? AND session_key = ?
        ORDER BY seq ASC`,
@@ -241,6 +253,7 @@ export function listPilotTranscriptTurns(
     created_at: string;
     logical_turn_id: string | null;
     cycle_instance_id: string | null;
+    presentation_json: string | null;
   }>;
   return rows.map((r) =>
     Object.freeze({
@@ -251,6 +264,7 @@ export function listPilotTranscriptTurns(
       content: r.content,
       logicalTurnId: r.logical_turn_id,
       cycleInstanceId: r.cycle_instance_id,
+      presentationJson: r.presentation_json ?? null,
     }),
   );
 }
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
index 08e8b0ae..8d65d835 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
@@ -20,6 +20,12 @@ export type PilotTranscriptTurnRef = {
   readonly content: string;
   readonly logicalTurnId: string | null;
   readonly cycleInstanceId: string | null;
+  /**
+   * Validated Nora adaptive presentation JSON (assistant turns only).
+   * Null when absent, legacy, or invalid — UI falls back to content text.
+   * Presentation-only — never Truth C.
+   */
+  readonly presentationJson: string | null;
 };

 export type CycleJournalEntry = {
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index e812254f..a746945d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -447,6 +447,32 @@ export type {
   NoraJournalDelta,
   PilotTranscriptTurnRef,
 } from "./cycleJournalTypes";
+export {
+  NORA_ADAPTIVE_PRESENTATION_SCHEMA,
+  NORA_ADAPTIVE_PRESENTATION_VERSION,
+  NORA_ADAPTIVE_PRESENTATION_LIMITS,
+  NORA_ADAPTIVE_BLOCK_KINDS,
+  NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
+  STUDIO_CONTROL_MARKER,
+  parseNoraAdaptivePresentation,
+  deserializeNoraAdaptivePresentation,
+  serializeNoraAdaptivePresentation,
+  shouldRenderAdaptivePresentation,
+  sanitizePresentationPlainText,
+  appendStudioControlNotices,
+  extractStudioControlAppendix,
+  contentWithoutStudioAppendix,
+  resolveAdaptiveAssistantRender,
+  honestEpistemicLabel,
+  honestBlockTitle,
+} from "./noraAdaptivePresentation";
+export type {
+  NoraAdaptivePresentation,
+  NoraAdaptivePresentationBlock,
+  NoraAdaptiveBlockKind,
+  NoraAdaptiveEpistemicRole,
+  AdaptiveAssistantRenderDecision,
+} from "./noraAdaptivePresentation";
 export {
   appendPilotTranscriptTurn,
   listPilotTranscriptTurns,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 03581f3a..653c4b81 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -8,6 +8,40 @@ import {
   isNoraReservationDeltaStructured,
   type NoraReservationDeltaStructured,
 } from "./reservationDelta";
+import {
+  NORA_ADAPTIVE_PRESENTATION_SCHEMA,
+  parseNoraAdaptivePresentation,
+  type NoraAdaptivePresentation,
+} from "./noraAdaptivePresentation";
+
+export {
+  NORA_ADAPTIVE_PRESENTATION_SCHEMA,
+  NORA_ADAPTIVE_PRESENTATION_VERSION,
+  NORA_ADAPTIVE_PRESENTATION_LIMITS,
+  NORA_ADAPTIVE_BLOCK_KINDS,
+  NORA_ADAPTIVE_EPISTEMIC_ROLES,
+  NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
+  NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
+  parseNoraAdaptivePresentation,
+  isNoraAdaptivePresentation,
+  serializeNoraAdaptivePresentation,
+  deserializeNoraAdaptivePresentation,
+  shouldRenderAdaptivePresentation,
+  sanitizePresentationPlainText,
+  appendStudioControlNotices,
+  extractStudioControlAppendix,
+  contentWithoutStudioAppendix,
+  resolveAdaptiveAssistantRender,
+  honestEpistemicLabel,
+  honestBlockTitle,
+  STUDIO_CONTROL_MARKER,
+  NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
+  type NoraAdaptivePresentation,
+  type NoraAdaptivePresentationBlock,
+  type NoraAdaptiveBlockKind,
+  type NoraAdaptiveEpistemicRole,
+  type AdaptiveAssistantRenderDecision,
+} from "./noraAdaptivePresentation";

 export {
   NORA_RESERVATION_DELTA_SCHEMA,
@@ -374,6 +408,7 @@ export const CONVERSATION_GUIDANCE_HOLD_BOUNDARY: ConversationGuidance =
  * - conversationGuidance (required; ephemeral continuation; non-authoritative)
  * - journalDelta (nullable; Cycle Journal projection — NEVER Truth C)
  * - reservationDelta (nullable; Reservation mutations — NEVER auto-RESOLVE / NEVER Truth C)
+ * - presentation (nullable; adaptive UI projection — NEVER Truth C / NEVER CTA)
  * Same Agents Runner — one model call — no prose parsing.
  */
 export const NORA_JOURNAL_DELTA_OPERATION_SCHEMA = {
@@ -453,6 +488,7 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
       "conversationGuidance",
       "journalDelta",
       "reservationDelta",
+      "presentation",
     ],
     properties: {
       narrative: { type: "string" as const },
@@ -476,6 +512,13 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
       reservationDelta: {
         anyOf: [{ type: "null" as const }, NORA_RESERVATION_DELTA_SCHEMA],
       },
+      /** Adaptive UI projection — nullable; never authority / never Product CTA. */
+      presentation: {
+        anyOf: [
+          { type: "null" as const },
+          NORA_ADAPTIVE_PRESENTATION_SCHEMA,
+        ],
+      },
     },
   },
 };
@@ -505,6 +548,8 @@ export type NoraProductTurnWithOptionalLr = {
   journalDelta: NoraJournalDeltaStructured | null;
   /** Reservation delta — EpistemicItem mutations; null when none. Never RESOLVE. */
   reservationDelta: NoraReservationDeltaStructured | null;
+  /** Adaptive presentation projection — null when absent / invalid. Never CTA. */
+  presentation: NoraAdaptivePresentation | null;
 };

 export function isPreCycleRoutingAssessment(
@@ -728,6 +773,11 @@ export type PreCycleRoutingBoundaryCoherenceResult = {
    * Invalid / missing → null. Never includes RESOLVE (Pilot confirmation).
    */
   reservationDelta: NoraReservationDeltaStructured | null;
+  /**
+   * Adaptive presentation passthrough — UI projection only.
+   * Invalid / missing → null (fail-closed; narrative remains).
+   */
+  presentation: NoraAdaptivePresentation | null;
   /** True when a candidate LR was stripped by boundary coherence. */
   lifecycleRecommendationSuppressed: boolean;
   suppressReason: string | null;
@@ -1260,6 +1310,8 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
   journalDelta?: NoraJournalDeltaStructured | null;
   /** Invalid reservation delta coerced to null — never fails the Product turn. */
   reservationDelta?: NoraReservationDeltaStructured | null;
+  /** Invalid presentation coerced to null — never fails the Product turn. */
+  presentation?: NoraAdaptivePresentation | null;
   cognitiveStop?: boolean;
   /**
    * Server-derived from selectCurrentLifecycleRecommendations + applicability.
@@ -1274,6 +1326,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
   const activeCycleWork = input.activeCycleWork ?? null;
   const journalDelta = input.journalDelta ?? null;
   const reservationDelta = input.reservationDelta ?? null;
+  const presentation = input.presentation ?? null;
   const rawGuidance = parseConversationGuidanceOrFailClosed(
     input.conversationGuidance ?? null,
   );
@@ -1289,6 +1342,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       | "conversationGuidanceCoerceReason"
       | "journalDelta"
       | "reservationDelta"
+      | "presentation"
     >,
   ): PreCycleRoutingBoundaryCoherenceResult => {
     const guided = applyConversationGuidanceCoherence({
@@ -1344,6 +1398,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       ...partial,
       journalDelta,
       reservationDelta,
+      presentation,
       lifecycleRecommendation,
       lifecycleRecommendationSuppressed,
       suppressReason,
@@ -1522,6 +1577,12 @@ export function normalizeNoraProductTurnStructuredOutput(
       : null;
   }

+  // Presentation fail-closed locally: invalid → null, narrative remains.
+  let presentation: NoraAdaptivePresentation | null = null;
+  if (o.presentation != null) {
+    presentation = parseNoraAdaptivePresentation(o.presentation);
+  }
+
   return applyPreCycleRoutingBoundaryCoherence({
     narrative: o.narrative,
     preCycleRoutingAssessment: assessment,
@@ -1529,6 +1590,7 @@ export function normalizeNoraProductTurnStructuredOutput(
     activeCycleWork,
     journalDelta,
     reservationDelta,
+    presentation,
     conversationGuidance: parseConversationGuidanceOrFailClosed(
       o.conversationGuidance,
     ),
@@ -1564,6 +1626,10 @@ export function isNoraProductTurnWithOptionalLr(
   ) {
     return false;
   }
+  // Backward compat: missing presentation treated as null; invalid non-null fails.
+  if (o.presentation != null && parseNoraAdaptivePresentation(o.presentation) == null) {
+    return false;
+  }
   if (o.lifecycleRecommendation === null) return true;
   return isNoraLifecycleRecommendationStructuredOutput(
     o.lifecycleRecommendation,
@@ -1584,5 +1650,6 @@ export function buildFailClosedProductTurnJson(narrative: string): string {
     conversationGuidance: { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD },
     journalDelta: null,
     reservationDelta: null,
+    presentation: null,
   });
 }
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
index fdc7b847..eb8a4675 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
@@ -169,6 +169,22 @@ export class ProductSqliteSession implements Session {
       );
     `);
     this.ensureCycleJournalRichColumns();
+    this.ensurePilotTranscriptPresentationColumn();
+  }
+
+  /**
+   * Nora adaptive presentation — nullable JSON on pilot_transcript_turns.
+   * Idempotent ALTER; legacy rows keep NULL → plain content fallback.
+   */
+  private ensurePilotTranscriptPresentationColumn(): void {
+    try {
+      this.db.exec(
+        `ALTER TABLE pilot_transcript_turns ADD COLUMN presentation_json TEXT`,
+      );
+    } catch (error) {
+      const msg = error instanceof Error ? error.message : String(error);
+      if (!/duplicate column/i.test(msg)) throw error;
+    }
   }

   /**
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index 352e55e3..9893638d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -224,6 +224,8 @@ export function coercePlainTextToProductTurnJson(text: string): string {
         activeCycleWork: o.activeCycleWork ?? null,
         conversationGuidance: o.conversationGuidance ?? null,
         journalDelta: o.journalDelta ?? null,
+        reservationDelta: o.reservationDelta ?? null,
+        presentation: o.presentation ?? null,
       });
       if (coherent) {
         return JSON.stringify({
@@ -233,6 +235,8 @@ export function coercePlainTextToProductTurnJson(text: string): string {
           activeCycleWork: coherent.activeCycleWork ?? null,
           conversationGuidance: coherent.conversationGuidance,
           journalDelta: coherent.journalDelta ?? null,
+          reservationDelta: coherent.reservationDelta ?? null,
+          presentation: coherent.presentation ?? null,
         });
       }
       return buildFailClosedProductTurnJson(String(o.narrative));
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index ac3ad90d..7215a08a 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -724,6 +724,8 @@ export async function runNoraAgentsTurn(
               activeCycleWork: coherent.activeCycleWork ?? null,
               conversationGuidance: coherent.conversationGuidance,
               journalDelta: coherent.journalDelta ?? null,
+              reservationDelta: coherent.reservationDelta ?? null,
+              presentation: coherent.presentation ?? null,
             };
           }
         }
```

## 9. Gaps / debt / exit
| Item | Status |
|---|---|
| Runtime Figma screenshot | OPEN |
| OpenAI LIVE presentation emit | NOT RUN |
| Project commit/PR | PENDING distinct GO |
| PRR sync | PENDING DOC GO |
| TEST-15 | OOS |

## 10. Morris decisions
1. Project commit/push GO?
2. DOC GO PRR 03/06/09?
3. Runtime screenshot GO?
4. Optional LIVE structured emit?

## Unique verdict
**LOCAL CORRECTION COMPLETE — DETERMINISTIC VERIFIED — CHATGPT REVIEW REQUIRED — R24 DOCUMENTARY SYNC PENDING**
