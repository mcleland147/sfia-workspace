# CORR-NAP-02 — NORA ADAPTIVE PRESENTATION — FINAL RELIABILITY HARDENING

**Cycle:** SFIA 8 — Delivery / implémentation
**Typologie:** EVOL / corrective
**Review pack:** FULL
**Date/heure UTC:** 2026-10-29T20:04:28Z
**Worktree:** `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation`
**Branch:** `feat/akg-m5-nora-adaptive-presentation`
**HEAD:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`
**origin/main:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`
**Merge-base HEAD/origin/main:** `2cc6368602197e18fe886c87c8ced0a1b434f5a2`

## Verdict unique

**LOCAL CORRECTION COMPLETE — DETERMINISTIC VERIFIED — CHATGPT FINAL REVIEW REQUIRED — R24 DOCUMENTARY SYNC PENDING**

Aucun READY FOR PR / READY FOR REAL / FIGMA ALIGNED / ADOPTED.

## 1. Git Truth Check

| Check | Résultat |
|-------|----------|
| toplevel | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation` |
| branche | `feat/akg-m5-nora-adaptive-presentation` |
| HEAD | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| origin/main | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| merge-base | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= main; Delivery non commitée) |
| WIP | Option C + CORR-NAP-01 + CORR-NAP-02 présents, non commités |
| staged | vide |
| autre worktree touché | NON |

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

### Diff name-status (app)

```
M	projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/types.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts

```

### Untracked

```
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts

```

### Git Review Index (handoff courant avant publish)

- Review Handoff tip (worktree `sfia-review-handoff-m5a-gi-20261023`): `9cb5f213a8c5f3c5b5aea240eb5c052a0b4ff888` (CORR-NAP-01)
- Blob CORR-NAP-01: `65d44d9bb73543a03a2f31db41cc608b03796b53`
- SoT pour ce cycle: ce pack CORR-NAP-02 (remplace le rapport local précédent)

## 2. Sources consultées (R23)

Méthode / convergence: cycle-execution-template, cycle-routing-guide, Build Doctrine / Roadmap / Product Completion C1 / doctrines 30,32,34,35 / PRR 02,03,04,06,07,08,09 (lecture qualification — aucune écriture).

Code inspecté:
- `noraAdaptivePresentation.ts` (coverage, typed notices, epistemic titles/disclaimers)
- `NoraAdaptivePresentationView.tsx` (+ CSS)
- `ConversationSurface.tsx` (render decision + incomplete banner last-assistant)
- `orchestrateTurn.ts` / `actions.ts` / `useProductConversation.ts` / `types.ts`
- `cycleJournalStore.ts` / `cycleJournalTypes.ts` / `productSqliteSession.ts` (`studio_control_json`)
- `noraProductTurnOutputType.ts` / `index.ts`
- Tests d0 + ui

Figma A3 `466:2` / A4 `466:71` — pas de modification; runtime screenshot comparative non exécutée → **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED** pour alignement pixel.

## 3. Quatre défauts — cause / correction / preuve

### Défaut 1 — Couverture textuelle approximative (P1)

**Cause:** `contentCoveredByPresentation` acceptait inclusion unilatérale / seuil ~75% tokens → informations déterminantes du content pouvaient disparaître derrière le DTO.

**Correction:** `contentFullyCoveredByPresentation` — égalité normalisée stricte `body === lead` uniquement (après retrait des notices Studio authentifiées). Sinon mode `plain` (texte intégral).

**Avant:** substitution possible avec perte.
**Après:** T1–T5 plain sauf couverture stricte; T5/T6 adaptive + reload stable.

### Défaut 2 — Provenance Studio forgée via `[Studio]` (P1)

**Cause:** extraction appendix basée sur le marqueur littéral → Nora pouvait usurpater Studio.

**Correction:** `studioControlNotices` typées serveur → `studio_control_json` SQLite; `resolveAdaptiveAssistantRender` n'authentifie que le tableau typé; marqueur seul = prose Nora.

**Avant:** `[Studio] contrat approuvé` pouvait devenir notice Studio.
**Après:** T7/T8/T11 forged non authentifié; T9/T10/T12 notices serveur visibles/persistées.

### Défaut 3 — Titres / disclaimers épistémiques libres (P2)

**Cause:** titres Nora + disclaimer libre pouvaient suggérer Evidence Product / HumanDecision / GO.

**Correction:** `honestBlockTitle` Studio-owned pour kinds forts; `looksLikeAuthorityClaim` + `sanitizeProvenanceNote`; `parseNoraAdaptivePresentation` force disclaimer + `noGovernedActionNote` Studio; View utilise `studioOwnedRecommendationDisclaimer`.

**Avant:** titres autorité possibles en UI.
**Après:** T13–T17 + UI T13/T15.

### Défaut 4 — Bandeau incomplétude masqué par historique (P2)

**Cause:** `messages.some(...)` sur tout l'historique.

**Correction:** `lastAssistantShowsExecutionIncomplete` — dernier tour assistant seulement; préférer notices typées; sans corrélation → conserver bandeau.

**Avant:** ancienne notice masquait le tour courant.
**Après:** T18 bandeau visible; T19 pas de doublon; T20/T22 fail-closed.

## 4. Fake/Real Qualification

- Applicable: OUI
- Frontière: OpenAI Agents / Structured Outputs
- Fake: providers déterministes / vitest
- REAL: NON autorisé
- Niveau: **DETERMINISTIC PROVEN** (périmètre testé)
- REAL BOUNDARY PROVEN: NON
- END-TO-END REAL PROVEN: NON
- G-REAL: NON CONSOMMÉ
- Realism gap: émission DTO LIVE + fidélité runtime visuelle ouvertes
- FIGMA TO RUNTIME ALIGNED: NON (screenshot required)

## 5. Tests exécutés

### CORR-NAP-02 + CORR-NAP-01 (adaptés)

```
npx vitest run __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts \
  __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
```
- exit 0 — **44 passed** (34 d0 + 10 ui)
- T1–T17 (d0), T7/T13/T15/T18/T19/T20/T22 (ui); T6/T10 reload; T21 couvert par T6 + persist SQLite

### Régressions

```
npx vitest run __tests__/nora-cognitive-runtime/cycleJournalContinuity.d0.test.ts \
  __tests__/nora-cognitive-runtime/pilotabilityJournalIntegrity.d0.test.ts \
  __tests__/project-assistant/s08-4.seedFinalFidelity.d0.test.ts
```
- exit 0 — 24 passed | 2 skipped (s08-4)

### Gates

- `npx tsc --noEmit -p tsconfig.json` → exit 0
- eslint ciblé (fichiers CORR-NAP-02 hors warning préexistant actions) → exit 0
- build Next non exigé sous ce GO; non bloquant

## 6. R23 / R24

**R23 couverture:**
- DOCUMENTED: flux Option C + typed notices
- COVERAGE VERIFIED: tests T1–T22 applicables
- BEHAVIOR PROVEN: deterministic unit/UI
- KNOWN GAP: LIVE DTO emit; runtime screenshot A3/A4

**R24 (qualification only — no doc write):**
- PRR 03: rendu / contrôles conversation (titles, appendix, incomplete banner)
- PRR 06: continuité transcript (`studio_control_json`)
- PRR 09: réserves fidélité / non-usurpation
- **R24 DOCUMENTARY SYNC PENDING — MORRIS DOC GO REQUIRED**

## 7. Dette / trajectoire / gates ouverts

- EP-S2-08 PARTIAL; EP-S2-05 NOT PROVEN; L3 GLOBAL OPEN; L4 NOT AUTHORIZED; Runtime v3 NON ADOPTED
- TEST-15 OOS (non modifié)
- QA visuelle/runtime distincte requise
- Sync documentaire sous GO
- Intégration projet sous GO (pas de commit/push projet ici)
- ChatGPT final review required

## 8. Contenu complet — fichiers créés

### FILE CREATED: `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`

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

```

### FILE CREATED: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx`

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
  honestBlockTitle,
  honestEpistemicLabel,
  sanitizeProvenanceNote,
  studioOwnedRecommendationDisclaimer,
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
    const heading = honestBlockTitle("section", block.title);
    return (
      <section key={key} className={styles.section} aria-label={heading}>
        <h4 className={styles.blockTitle}>{heading}</h4>
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
          {studioOwnedRecommendationDisclaimer(block.disclaimer)}
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
      {(() => {
        const note = sanitizeProvenanceNote(presentation.provenanceNote);
        return note ? (
          <p className={styles.provenance}>{note}</p>
        ) : null;
      })()}
      <p className={styles.noAction}>
        {NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE}
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

### FILE CREATED: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css`

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

### FILE CREATED: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts`

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
  contentFullyCoveredByPresentation,
  deserializeNoraAdaptivePresentation,
  deserializeStudioControlNotices,
  extractStudioControlAppendix,
  honestBlockTitle,
  honestEpistemicLabel,
  looksLikeAuthorityClaim,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
  sanitizePresentationPlainText,
  sanitizeProvenanceNote,
  serializeNoraAdaptivePresentation,
  serializeStudioControlNotices,
  shouldRenderAdaptivePresentation,
  studioOwnedRecommendationDisclaimer,
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

  it("B — DTO + typed Studio refuse → appendix visible; adaptive kept when body covered", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const notices = ["Refus PREPARE : intention non confirmée."];
    const content = appendStudioControlNotices(
      VALID_PRESENTATION.lead!,
      notices,
    );
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.studioAppendix).toContain("Refus PREPARE");
    expect(extractStudioControlAppendix(content)).toContain("[Studio]");
  });

  it("C/D — STOP / incomplete notices stay in durable content (typed)", () => {
    const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
    const notices = [
      "ARRÊT COGNITIF (≠ erreur technique). Contradiction ouverte.",
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const content = appendStudioControlNotices(
      VALID_PRESENTATION.lead!,
      notices,
    );
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
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

describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
  const leadA = "Phrase A déterminante.";
  function dtoWithLead(lead: string) {
    return parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead,
      blocks: [
        {
          kind: "plain",
          text: lead,
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
  }

  it("T1 — DTO phrase A + content A+B → B remains visible (plain)", () => {
    const dto = dtoWithLead(leadA);
    const content = `${leadA} Phrase B déterminante supplémentaire.`;
    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
    expect(contentFullyCoveredByPresentation(content, dto)).toBe(false);
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("Phrase B déterminante");
  });

  it("T2 — 75% lexical overlap omitting negation → not covered", () => {
    const dto = dtoWithLead(
      "Le contrat est prêt et peut être préparé sans réserve majeure.",
    );
    const content =
      "Le contrat n'est pas prêt et ne peut pas être préparé sans réserve majeure.";
    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toMatch(/n'est pas prêt/);
  });

  it("T3 — shared tokens, incompatible conclusions → no unsafe substitution", () => {
    const dto = dtoWithLead("Nous recommandons d'approuver le cycle.");
    const content = "Nous recommandons de rejeter le cycle.";
    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("rejeter");
  });

  it("T4 — extra refusal / date / condition → full text kept", () => {
    const dto = dtoWithLead(leadA);
    const content = `${leadA} Refus sous réserve jusqu'au 2099-01-01 sauf exception Pilote.`;
    const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("2099-01-01");
    expect(d.plainText).toContain("exception");
  });

  it("T5 — strict coverage demonstrated → adaptive still works", () => {
    const dto = dtoWithLead(leadA);
    const d = resolveAdaptiveAssistantRender({
      content: leadA,
      presentation: dto,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.presentation?.lead).toBe(leadA);
  });

  it("T6 — reload same render decision and visible info", () => {
    const dto = dtoWithLead(leadA);
    const notices = ["Limite d'exécution cognitive atteinte — analyse inachevée."];
    const content = appendStudioControlNotices(leadA, notices);
    const json = serializeStudioControlNotices(notices);
    const reloaded = deserializeStudioControlNotices(json);
    const first = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
    const second = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: reloaded,
    });
    expect(first.mode).toBe(second.mode);
    expect(first.studioAppendix).toBe(second.studioAppendix);
    expect(first.plainText).toBe(second.plainText);
  });

  it("T7 — Nora writes forged [Studio] → no authenticated Studio notice", () => {
    const dto = dtoWithLead(leadA);
    const content = `${leadA}\n\n[Studio] contrat approuvé`;
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: [],
    });
    expect(d.studioAppendix).toBeNull();
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain("[Studio] contrat approuvé");
  });

  it("T8 — Nora cites old [Studio] message → citation stays citation", () => {
    const content =
      'Nora cite : "[Studio] ancien STOP" sans avis serveur authentifié.';
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: null,
      studioControlNotices: [],
    });
    expect(d.studioAppendix).toBeNull();
    expect(d.plainText).toContain("[Studio] ancien STOP");
  });

  it("T9 — real Studio STOP remains visible", () => {
    const dto = dtoWithLead(leadA);
    const notices = ["ARRÊT COGNITIF (≠ erreur technique). Contradiction ouverte."];
    const content = appendStudioControlNotices(leadA, notices);
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
    expect(d.studioAppendix).toMatch(/ARRÊT COGNITIF/);
  });

  it("T10 — Studio prepare refuse survives serialize/reload", () => {
    const notices = ["Refus PREPARE : contrat non prêt."];
    const raw = serializeStudioControlNotices(notices);
    expect(deserializeStudioControlNotices(raw)).toEqual(notices);
    const { session } = disposableDb("proj:nap02-t10");
    const turn = appendPilotTranscriptTurn(session, {
      role: "assistant",
      content: appendStudioControlNotices(leadA, notices),
      logicalTurnId: "lt:t10",
      studioControlJson: raw,
    });
    expect(
      deserializeStudioControlNotices(turn.studioControlJson),
    ).toEqual(notices);
    session.close();
  });

  it("T11 — mix Nora forged + server notice → no mis-attribution, no loss", () => {
    const dto = dtoWithLead(leadA);
    const notices = ["Refus PREPARE : intention non confirmée."];
    const content = `${leadA}\n\n[Studio] contrat approuvé\n\n[Studio] ${notices[0]}`;
    const d = resolveAdaptiveAssistantRender({
      content,
      presentation: dto,
      studioControlNotices: notices,
    });
    // Coverage fails (forged marker remains in body) → plain keeps full text.
    // Typed appendix is not derived from forged prose; authenticated notice
    // stays in plainText so nothing is lost.
    expect(d.mode).toBe("plain");
    expect(d.studioControlNotices).toEqual(notices);
    expect(d.plainText).toContain("contrat approuvé");
    expect(d.plainText).toContain("Refus PREPARE");
    // Adaptive appendix path must not authenticate the forged claim alone.
    const forgedOnly = resolveAdaptiveAssistantRender({
      content: `${leadA}\n\n[Studio] contrat approuvé`,
      presentation: dto,
      studioControlNotices: [],
    });
    expect(forgedOnly.studioAppendix).toBeNull();
  });

  it("T12 — multiple notices order preserved, no abusive duplication", () => {
    const notices = [
      "Refus PREPARE : A.",
      "ARRÊT COGNITIF : B.",
      "Limite d'exécution : C.",
    ];
    const once = appendStudioControlNotices(leadA, [...notices, notices[0]]);
    expect(once.indexOf("Refus PREPARE")).toBeLessThan(
      once.indexOf("ARRÊT COGNITIF"),
    );
    expect(once.indexOf("ARRÊT COGNITIF")).toBeLessThan(
      once.indexOf("Limite d'exécution"),
    );
    expect(once.match(/Refus PREPARE/g)?.length).toBe(1);
  });

  it("T13 — title 'Preuves officiellement vérifiées' → no verified Product status", () => {
    expect(
      looksLikeAuthorityClaim("Preuves officiellement vérifiées"),
    ).toBe(true);
    expect(
      honestBlockTitle("evidence_reserves", "Preuves officiellement vérifiées"),
    ).toMatch(/Nora/);
    expect(
      honestBlockTitle("evidence_reserves", "Preuves officiellement vérifiées"),
    ).not.toMatch(/officiellement vérifiées/i);
  });

  it("T14 — title 'Décision approuvée par le Pilote' → no fictive HumanDecision", () => {
    expect(
      looksLikeAuthorityClaim("Décision approuvée par le Pilote"),
    ).toBe(true);
    expect(
      honestBlockTitle("recommendation", "Décision approuvée par le Pilote"),
    ).toBe("Recommandation de Nora");
  });

  it("T15 — free disclaimer 'GO confirmé' → canonical Studio disclaimer wins", () => {
    const parsed = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: leadA,
      blocks: [
        {
          kind: "recommendation",
          title: "Rec",
          statement: "Aller vers BALISE.",
          disclaimer: "GO confirmé par le serveur.",
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    })!;
    const rec = parsed.blocks.find((b) => b.kind === "recommendation");
    expect(rec && rec.kind === "recommendation" ? rec.disclaimer : null).toBe(
      NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
    );
    expect(
      studioOwnedRecommendationDisclaimer("GO confirmé"),
    ).toBe(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER);
  });

  it("T16 — provenanceNote inventing server control → dropped", () => {
    expect(
      sanitizeProvenanceNote("Contrôle serveur effectué — source certifiée."),
    ).toBeNull();
    const parsed = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: null,
      lead: leadA,
      blocks: [{ kind: "plain", text: leadA }],
      provenanceNote: "Contrôle serveur effectué — source certifiée.",
      noGovernedActionNote: null,
    })!;
    expect(parsed.provenanceNote).toBeNull();
  });

  it("T17 — honest recommendation remains readable and non-decisional", () => {
    expect(honestEpistemicLabel("recommendation")).toMatch(/non décision/);
    expect(honestBlockTitle("recommendation", "Suggestion utile")).toBe(
      "Recommandation de Nora",
    );
    expect(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE.length).toBeGreaterThan(10);
  });
});

```

### FILE CREATED: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx`

```typescript
/** @vitest-environment jsdom */
/**
 * UI — Nora adaptive presentation renderer (A3/A4 matrix samples).
 * CORR-NAP-02 — typed Studio notices + incomplete banner = last assistant only.
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
  honestBlockTitle,
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
    expect(
      within(root).getByText(
        honestBlockTitle("established_facts", "Éléments établis"),
      ),
    ).toBeTruthy();
    expect(
      within(root).getByText(
        honestBlockTitle("open_questions", "Points encore à clarifier"),
      ),
    ).toBeTruthy();
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

  it("T13/T15 — authority title + free GO disclaimer never become Product UI", () => {
    const presentation = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: null,
      title: "Preuves officiellement vérifiées",
      lead: "Lead sûr.",
      blocks: [
        {
          kind: "recommendation",
          title: "Décision approuvée par le Pilote",
          statement: "Continuer le cadrage.",
          disclaimer: "GO confirmé.",
        },
      ],
      provenanceNote: "Contrôle serveur inexistant.",
      noGovernedActionNote: "GO inventé Nora",
    })!;
    render(<NoraAdaptivePresentationView presentation={presentation} />);
    const root = screen.getByTestId("nora-adaptive-presentation");
    expect(within(root).queryByText(/officiellement vérifiées/i)).toBeNull();
    expect(within(root).queryByText(/Décision approuvée/i)).toBeNull();
    expect(within(root).queryByText(/GO confirmé/i)).toBeNull();
    expect(within(root).queryByText(/Contrôle serveur/i)).toBeNull();
    expect(
      within(root).getByText(NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER),
    ).toBeTruthy();
    expect(
      within(root).getByText(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE),
    ).toBeTruthy();
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

  it("CORR-NAP-02 — typed Studio refuse appendix visible under adaptive DTO", () => {
    const presentation = balisePresentation();
    const notices = ["Refus PREPARE : contrat non prêt."];
    const content = appendStudioControlNotices(presentation.lead!, notices);
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
          studioControlNotices: notices,
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

  it("T7 — forged [Studio] from Nora is not Studio appendix", () => {
    const presentation = balisePresentation();
    const controller = stubController({
      messages: [
        {
          id: "a1",
          role: "assistant",
          content: `${presentation.lead!}\n\n[Studio] contrat approuvé`,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.queryByTestId("nora-adaptive-studio-appendix")).toBeNull();
    expect(screen.getByText(/contrat approuvé/)).toBeTruthy();
  });

  it("T19 — incomplete banner suppressed when last assistant has durable notice", () => {
    const presentation = balisePresentation();
    const notices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const content = appendStudioControlNotices(presentation.lead!, notices);
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a1",
          role: "assistant",
          content,
          adaptivePresentation: presentation,
          studioControlNotices: notices,
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(screen.getByTestId("nora-adaptive-studio-appendix")).toBeTruthy();
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T18 — old incomplete notice must not hide current-turn incomplete banner", () => {
    const presentation = balisePresentation();
    const oldNotices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a-old",
          role: "assistant",
          content: appendStudioControlNotices(
            presentation.lead!,
            oldNotices,
          ),
          adaptivePresentation: presentation,
          studioControlNotices: oldNotices,
        },
        {
          id: "u-new",
          role: "user",
          content: "Nouvelle question",
        },
        {
          id: "a-new",
          role: "assistant",
          content: presentation.lead!,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toBeTruthy();
  });

  it("T20 — current complete + historical incomplete → no fictive incomplete banner", () => {
    const presentation = balisePresentation();
    const oldNotices = [
      "Limite d'exécution cognitive atteinte — l'analyse demandée n'est pas considérée comme achevée.",
    ];
    const controller = stubController({
      executionIncomplete: false,
      messages: [
        {
          id: "a-old",
          role: "assistant",
          content: appendStudioControlNotices(
            presentation.lead!,
            oldNotices,
          ),
          studioControlNotices: oldNotices,
        },
        {
          id: "a-new",
          role: "assistant",
          content: presentation.lead!,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(
      screen.queryByTestId("project-assistant-incomplete-surface"),
    ).toBeNull();
  });

  it("T22 — without correlation on last turn, incomplete banner preserved", () => {
    const presentation = balisePresentation();
    const controller = stubController({
      executionIncomplete: true,
      messages: [
        {
          id: "a1",
          role: "assistant",
          content: presentation.lead!,
          adaptivePresentation: presentation,
          studioControlNotices: [],
        },
      ],
    });
    render(<ConversationSurface controller={controller} />);
    expect(
      screen.getByTestId("project-assistant-incomplete-surface"),
    ).toBeTruthy();
  });
});

```

## 9. Diffs complets — fichiers modifiés (périmètre app Delivery)

### DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 6b7c72cc..a25f8cf9 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -53,8 +53,53 @@ import {
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
+function messageAlreadyShowsExecutionIncomplete(
+  content: string,
+  studioControlNotices?: readonly string[] | null,
+): boolean {
+  const notices = studioControlNotices ?? [];
+  if (
+    notices.some((n) => /limite d['']ex[eé]cution/i.test(n))
+  ) {
+    return true;
+  }
+  // Legacy turns without typed notices: marker+phrase on this message only.
+  return (
+    content.includes(STUDIO_CONTROL_MARKER) &&
+    /limite d['']ex[eé]cution/i.test(content)
+  );
+}
+
+/**
+ * CORR-NAP-02 — incomplete banner suppression only against the last assistant
+ * turn (current turn correlation). Never scan full history.
+ */
+function lastAssistantShowsExecutionIncomplete(
+  messages: readonly {
+    role: string;
+    content: string;
+    studioControlNotices?: readonly string[] | null;
+  }[],
+): boolean {
+  for (let i = messages.length - 1; i >= 0; i -= 1) {
+    const m = messages[i];
+    if (m.role !== "assistant") continue;
+    return messageAlreadyShowsExecutionIncomplete(
+      m.content,
+      m.studioControlNotices,
+    );
+  }
+  return false;
+}
+
 /**
  * RC-02 — human-facing active-cycle label (pure presentation; no OA import).
  * Mirrors formatReservationActiveCycleFacingLabel without pulling server modules.
@@ -578,11 +623,37 @@ export function ConversationSurface({
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
+                    studioControlNotices: message.studioControlNotices,
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
@@ -2314,7 +2385,8 @@ export function ConversationSurface({
         </div>
       ) : null}

-      {executionIncomplete ? (
+      {executionIncomplete &&
+      !lastAssistantShowsExecutionIncomplete(messages) ? (
         <div
           className={styles.stoppedBanner}
           role="status"

```

### DIFF: `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 0d6bb828..d85a57b2 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -74,6 +74,15 @@ export type ProductMessage = {
   content: string;
   /** Durable Session turn timestamp when known — never synthesized client-side. */
   createdAt?: string | null;
+  /**
+   * Validated Nora adaptive presentation (Option C). Null/absent → plain text.
+   * Never invents Product CTAs.
+   */
+  adaptivePresentation?: import("@/lib/nora-cognitive-runtime/noraAdaptivePresentation").NoraAdaptivePresentation | null;
+  /**
+   * CORR-NAP-02 — typed Studio control notices (server provenance only).
+   */
+  studioControlNotices?: readonly string[];
 };

 export type TranscriptAvailability =
@@ -339,6 +348,8 @@ export function useProductConversation({
           role: m.role,
           content: m.content,
           createdAt: m.createdAt ?? null,
+          adaptivePresentation: m.adaptivePresentation ?? null,
+          studioControlNotices: m.studioControlNotices ?? [],
         })),
       );
       setJournalCycleInstanceId(result.journal.cycleInstanceId);
@@ -960,6 +971,8 @@ export function useProductConversation({
           role: m.role,
           content: m.content,
           createdAt: m.createdAt ?? null,
+          adaptivePresentation: m.adaptivePresentation ?? null,
+          studioControlNotices: m.studioControlNotices ?? [],
         })),
       );
     }
@@ -1276,6 +1289,8 @@ export function useProductConversation({
           id: nextId("assistant"),
           role: "assistant",
           content: result.text,
+          adaptivePresentation: result.adaptivePresentation ?? null,
+          studioControlNotices: result.studioControlNotices ?? [],
         },
       ]);
       if (result.f2) {

```

### DIFF: `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 9b6daee2..7c794581 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -44,6 +44,10 @@ import {
   derivePreCycleRoutingDisposition,
   isPreCycleRoutingAssessment,
   normalizeNoraProductTurnStructuredOutput,
+  serializeNoraAdaptivePresentation,
+  appendStudioControlNotices,
+  normalizeStudioControlNotices,
+  serializeStudioControlNotices,
 } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
 import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
@@ -1387,14 +1391,8 @@ export async function orchestrateProjectAssistantTurn(input: {
         }
       }
       pendingGenericPrepareMission = null;
-      if (
-        genericPrepareTurnFinalize &&
-        !genericPrepareTurnFinalize.ok &&
-        typeof assistantText === "string" &&
-        assistantText.trim().length > 0
-      ) {
-        assistantText = `${assistantText.trim()}\n\n[Studio] ${genericPrepareTurnFinalize.message}`;
-      }
+      // CORR-NAP-02 — prepare refuse collected as typed Studio notice below
+      // (not appended via forgeable marker alone).
     }

     const { toolEvents, sources, readCoverage } = collectToolTelemetry(
@@ -1513,6 +1511,21 @@ export async function orchestrateProjectAssistantTurn(input: {
       );
     }

+    // CORR-NAP-02 — typed Studio control notices (server provenance only).
+    // Also mirrored into durable content for plain fallback; appendix trust
+    // uses the typed array, never forged "[Studio]" prose from Nora.
+    const studioControlNotices = normalizeStudioControlNotices([
+      genericPrepareTurnFinalize && !genericPrepareTurnFinalize.ok
+        ? genericPrepareTurnFinalize.message
+        : null,
+      executionLimitReached ? EXECUTION_LIMIT_INCOMPLETE_PILOTE_NOTICE : null,
+      stopNotice,
+    ]);
+    assistantText = appendStudioControlNotices(
+      assistantText,
+      studioControlNotices,
+    );
+
     // Pilot transcript + Cycle Journal — fail-closed locally; never blocks reply.
     const activeCycleIdForJournal =
       input.studioCognitiveContext?.activeCycle?.cycleInstanceId?.trim() ||
@@ -1537,11 +1550,18 @@ export async function orchestrateProjectAssistantTurn(input: {
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
+            studioControlJson:
+              serializeStudioControlNotices(studioControlNotices),
           });
           // P0 — do not materialize journalDelta as completed mission when limitReached.
           // Transcript of the interruption remains factual above.
@@ -1617,6 +1637,8 @@ export async function orchestrateProjectAssistantTurn(input: {
       text: assistantText,
       mode: modeResolution.mode,
       presentation,
+      adaptivePresentation: coherentEarly?.presentation ?? null,
+      studioControlNotices,
       model: turn.usage?.model ?? null,
       toolRounds: turn.toolRounds,
       toolCalls: turn.toolCalls,

```

### DIFF: `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 52e4d130..18413630 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -858,6 +858,10 @@ export async function projectAssistantConversationContinuityAction(input: {
     content: string;
     /** Durable Session timestamp when present — never invented for UI. */
     createdAt: string | null;
+    /** Validated adaptive presentation; null → plain content fallback. */
+    adaptivePresentation?: import("@/lib/nora-cognitive-runtime/noraAdaptivePresentation").NoraAdaptivePresentation | null;
+    /** CORR-NAP-02 — typed Studio control notices (server provenance). */
+    studioControlNotices?: readonly string[];
   }[];
   journal: {
     cycleInstanceId: string | null;
@@ -910,6 +914,12 @@ export async function projectAssistantConversationContinuityAction(input: {
       sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
     });
     try {
+      const {
+        deserializeNoraAdaptivePresentation,
+        deserializeStudioControlNotices,
+      } = await import(
+        "@/lib/nora-cognitive-runtime/noraAdaptivePresentation"
+      );
       const turns = listPilotTranscriptTurns(session);
       const messages = turns
         .filter((t) => t.role === "user" || t.role === "assistant")
@@ -918,6 +928,14 @@ export async function projectAssistantConversationContinuityAction(input: {
           role: t.role as "user" | "assistant",
           content: t.content,
           createdAt: t.createdAt?.trim() || null,
+          adaptivePresentation:
+            t.role === "assistant"
+              ? deserializeNoraAdaptivePresentation(t.presentationJson)
+              : null,
+          studioControlNotices:
+            t.role === "assistant"
+              ? deserializeStudioControlNotices(t.studioControlJson)
+              : [],
         }));
       const cycleInstanceId = input.cycleInstanceId?.trim() || null;
       const listed = cycleInstanceId

```

### DIFF: `projects/sfia-studio/app/features/project-assistant/types.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 6c28859d..cd65991b 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -207,6 +207,16 @@ export type ProjectAssistantSendSuccess = {
   text: string;
   mode: Exclude<AssistantUiMode, "unconfirmed">;
   presentation: "test_provider" | "openai_live";
+  /**
+   * Nora adaptive presentation DTO (Option C) — projection only.
+   * Null when absent/invalid; UI falls back to text. Never a Product CTA.
+   */
+  adaptivePresentation?: import("@/lib/nora-cognitive-runtime/noraAdaptivePresentation").NoraAdaptivePresentation | null;
+  /**
+   * CORR-NAP-02 — server-authored Studio control notices (typed provenance).
+   * Never inferred from Nora prose containing "[Studio]".
+   */
+  studioControlNotices?: readonly string[];
   /** Observed provider model when available (from usage.model). */
   model?: string | null;
   toolRounds: number;

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
index d1a3d09f..340150fc 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts
@@ -141,16 +141,29 @@ export function appendPilotTranscriptTurn(
     logicalTurnId?: string | null;
     cycleInstanceId?: string | null;
     turnId?: string;
+    /** Validated presentation JSON string — assistant only; never Truth C. */
+    presentationJson?: string | null;
+    /** CORR-NAP-02 — typed Studio control notices JSON (string[]); assistant only. */
+    studioControlJson?: string | null;
   },
 ): PilotTranscriptTurnRef {
   session.ensurePilotTranscriptAndJournalSchema();
   const db = session.getSqlite();
   const logicalTurnId = input.logicalTurnId?.trim() || null;
+  const presentationJson =
+    input.role === "assistant" && typeof input.presentationJson === "string"
+      ? input.presentationJson.trim() || null
+      : null;
+  const studioControlJson =
+    input.role === "assistant" && typeof input.studioControlJson === "string"
+      ? input.studioControlJson.trim() || null
+      : null;
   // Retry-safe: same logical turn + role → return existing row (no duplicate).
   if (logicalTurnId) {
     const prior = db
       .prepare(
-        `SELECT turn_id, seq, role, content, created_at, logical_turn_id, cycle_instance_id
+        `SELECT turn_id, seq, role, content, created_at, logical_turn_id,
+                cycle_instance_id, presentation_json, studio_control_json
          FROM pilot_transcript_turns
          WHERE project_id = ? AND session_key = ?
            AND logical_turn_id = ? AND role = ?
@@ -171,6 +184,8 @@ export function appendPilotTranscriptTurn(
           created_at: string;
           logical_turn_id: string | null;
           cycle_instance_id: string | null;
+          presentation_json: string | null;
+          studio_control_json: string | null;
         }
       | undefined;
     if (prior) {
@@ -182,6 +197,8 @@ export function appendPilotTranscriptTurn(
         content: prior.content,
         logicalTurnId: prior.logical_turn_id,
         cycleInstanceId: prior.cycle_instance_id,
+        presentationJson: prior.presentation_json ?? null,
+        studioControlJson: prior.studio_control_json ?? null,
       });
     }
   }
@@ -197,8 +214,8 @@ export function appendPilotTranscriptTurn(
   db.prepare(
     `INSERT INTO pilot_transcript_turns(
        project_id, session_key, turn_id, seq, role, content, created_at,
-       logical_turn_id, cycle_instance_id
-     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
+       logical_turn_id, cycle_instance_id, presentation_json, studio_control_json
+     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
   ).run(
     session.projectId,
     session.sessionKey,
@@ -209,6 +226,8 @@ export function appendPilotTranscriptTurn(
     createdAt,
     logicalTurnId,
     input.cycleInstanceId?.trim() || null,
+    presentationJson,
+    studioControlJson,
   );
   return Object.freeze({
     turnId,
@@ -218,6 +237,8 @@ export function appendPilotTranscriptTurn(
     content: input.content,
     logicalTurnId,
     cycleInstanceId: input.cycleInstanceId?.trim() || null,
+    presentationJson,
+    studioControlJson,
   });
 }

@@ -228,7 +249,8 @@ export function listPilotTranscriptTurns(
   const rows = session
     .getSqlite()
     .prepare(
-      `SELECT turn_id, seq, role, content, created_at, logical_turn_id, cycle_instance_id
+      `SELECT turn_id, seq, role, content, created_at, logical_turn_id,
+              cycle_instance_id, presentation_json, studio_control_json
        FROM pilot_transcript_turns
        WHERE project_id = ? AND session_key = ?
        ORDER BY seq ASC`,
@@ -241,6 +263,8 @@ export function listPilotTranscriptTurns(
     created_at: string;
     logical_turn_id: string | null;
     cycle_instance_id: string | null;
+    presentation_json: string | null;
+    studio_control_json: string | null;
   }>;
   return rows.map((r) =>
     Object.freeze({
@@ -251,6 +275,8 @@ export function listPilotTranscriptTurns(
       content: r.content,
       logicalTurnId: r.logical_turn_id,
       cycleInstanceId: r.cycle_instance_id,
+      presentationJson: r.presentation_json ?? null,
+      studioControlJson: r.studio_control_json ?? null,
     }),
   );
 }

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
index 08e8b0ae..a2e30fdc 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalTypes.ts
@@ -20,6 +20,17 @@ export type PilotTranscriptTurnRef = {
   readonly content: string;
   readonly logicalTurnId: string | null;
   readonly cycleInstanceId: string | null;
+  /**
+   * Validated Nora adaptive presentation JSON (assistant turns only).
+   * Null when absent, legacy, or invalid — UI falls back to content text.
+   * Presentation-only — never Truth C.
+   */
+  readonly presentationJson: string | null;
+  /**
+   * CORR-NAP-02 — server-authored Studio control notices (JSON string[]).
+   * Typed provenance only — never inferred from Nora prose containing "[Studio]".
+   */
+  readonly studioControlJson: string | null;
 };

 export type CycleJournalEntry = {

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
index fdc7b847..94067cd9 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts
@@ -169,6 +169,38 @@ export class ProductSqliteSession implements Session {
       );
     `);
     this.ensureCycleJournalRichColumns();
+    this.ensurePilotTranscriptPresentationColumn();
+    this.ensurePilotTranscriptStudioControlColumn();
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
+  }
+
+  /**
+   * CORR-NAP-02 — typed Studio control notices (JSON string[]).
+   * Provenance is server-authored — never inferred from forged `[Studio]` prose.
+   */
+  private ensurePilotTranscriptStudioControlColumn(): void {
+    try {
+      this.db.exec(
+        `ALTER TABLE pilot_transcript_turns ADD COLUMN studio_control_json TEXT`,
+      );
+    } catch (error) {
+      const msg = error instanceof Error ? error.message : String(error);
+      if (!/duplicate column/i.test(msg)) throw error;
+    }
   }

   /**

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 03581f3a..48b1d578 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -8,6 +8,48 @@ import {
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
+  contentWithoutAuthenticatedStudioNotices,
+  normalizeStudioControlNotices,
+  serializeStudioControlNotices,
+  deserializeStudioControlNotices,
+  resolveAdaptiveAssistantRender,
+  contentFullyCoveredByPresentation,
+  honestEpistemicLabel,
+  honestBlockTitle,
+  looksLikeAuthorityClaim,
+  sanitizeProvenanceNote,
+  studioOwnedRecommendationDisclaimer,
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
@@ -374,6 +416,7 @@ export const CONVERSATION_GUIDANCE_HOLD_BOUNDARY: ConversationGuidance =
  * - conversationGuidance (required; ephemeral continuation; non-authoritative)
  * - journalDelta (nullable; Cycle Journal projection — NEVER Truth C)
  * - reservationDelta (nullable; Reservation mutations — NEVER auto-RESOLVE / NEVER Truth C)
+ * - presentation (nullable; adaptive UI projection — NEVER Truth C / NEVER CTA)
  * Same Agents Runner — one model call — no prose parsing.
  */
 export const NORA_JOURNAL_DELTA_OPERATION_SCHEMA = {
@@ -453,6 +496,7 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
       "conversationGuidance",
       "journalDelta",
       "reservationDelta",
+      "presentation",
     ],
     properties: {
       narrative: { type: "string" as const },
@@ -476,6 +520,13 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
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
@@ -505,6 +556,8 @@ export type NoraProductTurnWithOptionalLr = {
   journalDelta: NoraJournalDeltaStructured | null;
   /** Reservation delta — EpistemicItem mutations; null when none. Never RESOLVE. */
   reservationDelta: NoraReservationDeltaStructured | null;
+  /** Adaptive presentation projection — null when absent / invalid. Never CTA. */
+  presentation: NoraAdaptivePresentation | null;
 };

 export function isPreCycleRoutingAssessment(
@@ -728,6 +781,11 @@ export type PreCycleRoutingBoundaryCoherenceResult = {
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
@@ -1260,6 +1318,8 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
   journalDelta?: NoraJournalDeltaStructured | null;
   /** Invalid reservation delta coerced to null — never fails the Product turn. */
   reservationDelta?: NoraReservationDeltaStructured | null;
+  /** Invalid presentation coerced to null — never fails the Product turn. */
+  presentation?: NoraAdaptivePresentation | null;
   cognitiveStop?: boolean;
   /**
    * Server-derived from selectCurrentLifecycleRecommendations + applicability.
@@ -1274,6 +1334,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
   const activeCycleWork = input.activeCycleWork ?? null;
   const journalDelta = input.journalDelta ?? null;
   const reservationDelta = input.reservationDelta ?? null;
+  const presentation = input.presentation ?? null;
   const rawGuidance = parseConversationGuidanceOrFailClosed(
     input.conversationGuidance ?? null,
   );
@@ -1289,6 +1350,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       | "conversationGuidanceCoerceReason"
       | "journalDelta"
       | "reservationDelta"
+      | "presentation"
     >,
   ): PreCycleRoutingBoundaryCoherenceResult => {
     const guided = applyConversationGuidanceCoherence({
@@ -1344,6 +1406,7 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       ...partial,
       journalDelta,
       reservationDelta,
+      presentation,
       lifecycleRecommendation,
       lifecycleRecommendationSuppressed,
       suppressReason,
@@ -1522,6 +1585,12 @@ export function normalizeNoraProductTurnStructuredOutput(
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
@@ -1529,6 +1598,7 @@ export function normalizeNoraProductTurnStructuredOutput(
     activeCycleWork,
     journalDelta,
     reservationDelta,
+    presentation,
     conversationGuidance: parseConversationGuidanceOrFailClosed(
       o.conversationGuidance,
     ),
@@ -1564,6 +1634,10 @@ export function isNoraProductTurnWithOptionalLr(
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
@@ -1584,5 +1658,6 @@ export function buildFailClosedProductTurnJson(narrative: string): string {
     conversationGuidance: { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD },
     journalDelta: null,
     reservationDelta: null,
+    presentation: null,
   });
 }

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index e812254f..ab18242b 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -447,6 +447,40 @@ export type {
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
+  contentWithoutAuthenticatedStudioNotices,
+  normalizeStudioControlNotices,
+  serializeStudioControlNotices,
+  deserializeStudioControlNotices,
+  contentFullyCoveredByPresentation,
+  resolveAdaptiveAssistantRender,
+  honestEpistemicLabel,
+  honestBlockTitle,
+  looksLikeAuthorityClaim,
+  sanitizeProvenanceNote,
+  studioOwnedRecommendationDisclaimer,
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

```

## 10. Diffs Delivery Option C connexes (préservés, hors correction locale stricte CORR-NAP-02)

### DIFF: `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`

```diff
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

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`

```diff
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

```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```diff
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

## 11. Preuves de non-perte / non-usurpation

| Invariant | Preuve |
|-----------|--------|
| Info déterminante non masquée par DTO | T1–T4 plain |
| Nora ≠ Studio | T7/T8/T11 forged appendix null |
| Présentation ≠ Evidence/HumanDecision | T13–T17 + honesty note UI |
| Ancienne alerte ≠ masque tour courant | T18 |
| Pas de nouveau modèle d'autorité | typed notices only; no Truth C / OA from renderer |

## 12. Handoff publish — REMOTE VERIFIED

- Branche: `sfia/review-handoff`
- Fichier: `sfia-review-handoff/latest-chatgpt-review.md`
- Message: `docs(review-handoff): publish CORR-NAP-02 reliability review`
- Remote tip SHA: `017add031ff1955b072fd0ef72fdc9c086ab7021`
- Remote blob: `4ede3bf1d0d2e9be4e9c264f4fa59762fcaf2047`
- Prior tip: `9cb5f213a8c5f3c5b5aea240eb5c052a0b4ff888` (CORR-NAP-01)
- Relu distant: titre CORR-NAP-02 + verdict LOCAL CORRECTION COMPLETE
- Delivery worktree restored; projet WIP intact; aucun commit projet

---
**FIN REVIEW PACK CORR-NAP-02 — FULL**
