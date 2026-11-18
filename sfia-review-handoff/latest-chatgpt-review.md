# SFIA Review Pack FULL — Convergence composition conversationnelle Nora
**Date/heure :** 2026-11-18T03:19:15+01:00
**Cycle :** Delivery / EVOL Critical — convergence doc 06 (C-01–C-22)
**GO Morris :** 18/11/2026 exécution confirmée (« ok go »)
**Branche :** `sfia/next-ml4d-composition-adaptative`
**HEAD tip :** `a783f014935de0dec5ff8e79a2b18eea0e629756` (+ WT non commitée)
**origin/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**Docs ML4D :** `37915d8e` (doc 06 inclus)
**Handoff précédent :** `eb8f6a01` / blob `1d9f9390…`
**Review Pack :** Full — réinitialisé (aucun append)
**ENV :** DEV only · **NO RELEASE** · pas push produit / PR / merge / RECETTE / LIVE

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| Branche locale | `sfia/next-ml4d-composition-adaptative` non poussée |
| HEAD | `a783f014` |
| merge-base origin/main | `997d4c4e` |
| Handoff distant avant | `eb8f6a01` / `1d9f9390fb483535bdec1b570d71aef1ec9856d9` |
| Docs tip | `37915d8e` |
| STOP divergence | non |
| Mutations destructives | aucune |

WT contient le socle correctif précédent + mutations convergence (C-04/05/10–12/14).

---

## 2. Sources

- SFIA v2.6 routing / operating model / guardrails (main)
- Next SEF, ENV-01, versioning, décisions R5 (main)
- Doc 06 @ `37915d8e` (CANDIDATE — non promu)
- Handoff `eb8f6a01` comme baseline revue
- Doctrine 30/33/34/35 (lecture)

---

## 3. Architecture retenue

**Strategy B renforcée (C-04) :**
- replyDraft = vérité canonique
- graphiques : **jamais** `substitute`
- `complement` seulement si ancres de projection ⊆ replyDraft (déterministe)
- sinon `markdown_only` (visuel refusé — pas de double trompeur)

**C-05 :** schema d'écriture `conversational-composition-projection-v1` ; lecture duale `e05-visual-composition-v1`.

**C-10/11/12 :** `layoutHint` + rendu CSS dirigé (deps / decisionTree / parallelProcess). ELK/RF **non** introduits (pas de nouvelle dépendance npm).

**C-14 :** `MAX_ALTS=12` (8 admis ; 18 refuse).

**Écarté :** Strategy A sections D3 (pas de pivot structurant sans STOP) ; similarité heuristique ; SVG coords fixes.

---

## 4. Matrice C-01–C-22

# Matrice C-01–C-22 — statut après cycle convergence (2026-11-18)

**Branche :** `sfia/next-ml4d-composition-adaptative` @ `a783f014` + WT
**Docs 06 ref :** `origin/docs/next-ml4d-registre-revues-20261116` @ `37915d8e`

| ID | Statut sortie | Niveau | Preuve |
| --- | --- | --- | --- |
| C-01 | PARTIAL | UNIT/BROWSER | Blocs hétérogènes ; LIVE pertinence NOT RUN |
| C-02 | PASS (code) | BROWSER T02 | Un message, multi-blocs |
| C-03 | PASS | ARCH | admission + NoraComposition, pas de 2e agent |
| C-04 | PASS | UNIT | substitute interdit pour graphiques ; complement seulement si ancres dans replyDraft ; sinon markdown_only |
| C-05 | PARTIAL | UNIT | Write schema `conversational-composition-projection-v1` ; lecture duale e05 ; adapter prompt mis à jour |
| C-06 | PASS (compat) | UNIT | legacy e05 parse préservé |
| C-07 | PASS | UNIT/BROWSER | markdown_only / texte simple |
| C-08 | PARTIAL | UNIT+BROWSER | matrice+détails ; T02 cards |
| C-09 | PARTIAL | BROWSER T02 | séquence 4 étapes |
| C-10 | PARTIAL | UNIT+BROWSER | directed CSS dependencies ; T02 layoutHint=dependencies |
| C-11 | PARTIAL | UNIT | decisionTree family+layout ; BROWSER Figma 08 NOT RUN dédié |
| C-12 | PARTIAL | UNIT | parallelProcess family+layout ; BROWSER Figma 09 NOT RUN dédié |
| C-13 | DIFFÉRÉ | — | conforme |
| C-14 | PARTIAL | UNIT | MAX_ALTS=12 ; 8 OK ; 18 refuse |
| C-15 | PARTIAL | CODE | container queries ; zoom/split NOT RUN |
| C-16 | PARTIAL | legacy | droits/choix — non régressé intentionnellement |
| C-17 | PARTIAL | UNIT | exhaustive fallback ; inject BROWSER NOT RUN |
| C-18 | NON PROUVÉ | — | jugement Figma global |
| C-19 | PARTIAL | — | ACK PREEXISTING PROVEN (cycle antérieur) |
| C-20 | PARTIAL | — | Vitest 63+ composition ; CV-T partiel |
| C-21 | NOT RUN | LIVE | hors mandat |
| C-22 | GATE | — | pas de promotion |

## Architecture M1 retenue

Strategy B renforcée C-04 : replyDraft canonique ; graphiques en **complement** uniquement après alignement déterministe des ancres ; jamais substitute graphique.
Schema actif d'écriture : `conversational-composition-projection-v1`.
ELK/React Flow : non introduits (layout CSS dirigé suffisant pour V1 mesurée).


---

## 5. Carte E05

| Élément | Classe |
| --- | --- |
| parse e05 historique | CONSERVER (compat) |
| schema write projection-v1 | REMPLACER (écriture active) |
| NoraComposition | CONSERVER / ÉTENDRE |
| NoraVisualComposition alias | COMPATIBILITÉ |
| visual-composition MAX_ALTS/layoutHint | REMPLACER borné |
| nora-adapter prompt schema | REMPLACER (write path) |
| semantic-qualification.ts | NON MODIFIÉ (importe schema agent mis à jour via visual-composition) |
| DB / migrations | AUCUNE |

---

## 6. Fichiers nouveaux (complets)

### fidelity.ts

```ts
/**
 * Deterministic canonical-fidelity gates for conversational composition (C-04).
 * Never claims full semantic equality with replyDraft.
 * Refuses body substitution / misleading complement when alignment cannot be shown.
 */

import type { VisualComposition } from "@/domains/conversation/visual-composition";
import { hasGraphicBlocks } from "@/domains/conversation/visual-composition";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Significant labels that must appear in the canonical reply when graphics are shown. */
export function extractProjectionAnchors(composition: VisualComposition): string[] {
  const anchors: string[] = [];
  for (const block of composition.blocks) {
    if (block.kind === "comparison") {
      for (const a of block.alternatives) {
        if (a.title.trim()) anchors.push(a.title);
      }
    } else if (block.kind === "sequence") {
      for (const s of block.steps) {
        if (s.title.trim()) anchors.push(s.title);
      }
    } else if (block.kind === "relations") {
      for (const n of block.nodes) {
        if (n.label.trim()) anchors.push(n.label);
      }
    } else if (block.kind === "synthesis") {
      for (const it of block.items) {
        if (it.label.trim()) anchors.push(it.label);
      }
    }
  }
  return anchors;
}

/**
 * True when every projection anchor appears as a substring of canonical text.
 * Missing canonical text → not aligned (cannot prove).
 */
export function projectionAnchorsAlignWithCanonical(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { aligned: boolean; missing: string[]; reasonCodes: string[] } {
  const reasons: string[] = [];
  const canon = typeof canonicalText === "string" ? normalize(canonicalText) : "";
  if (!canon) {
    reasons.push("CV_FIDELITY_NO_CANONICAL_TEXT");
    return { aligned: false, missing: extractProjectionAnchors(composition), reasonCodes: reasons };
  }
  const missing: string[] = [];
  for (const raw of extractProjectionAnchors(composition)) {
    const a = normalize(raw);
    if (a.length < 2) continue;
    if (!canon.includes(a)) missing.push(raw);
  }
  if (missing.length) {
    reasons.push("CV_FIDELITY_ANCHOR_MISSING_IN_CANONICAL");
    return { aligned: false, missing, reasonCodes: reasons };
  }
  reasons.push("CV_FIDELITY_ANCHORS_PRESENT_IN_CANONICAL");
  return { aligned: true, missing: [], reasonCodes: reasons };
}

/**
 * Detect crude numeric / recommendation contradictions (deterministic heuristics).
 * Not a full semantic proof — only a fail-closed refusal signal.
 */
export function detectCrudeContradictions(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): string[] {
  const reasons: string[] = [];
  const canon = typeof canonicalText === "string" ? normalize(canonicalText) : "";
  if (!canon || !hasGraphicBlocks(composition)) return reasons;

  for (const block of composition.blocks) {
    if (block.kind !== "comparison" || !block.recommendation) continue;
    const rec = normalize(block.recommendation);
    // If recommendation names an alternative title that is absent from canonical, refuse.
    for (const alt of block.alternatives) {
      const t = normalize(alt.title);
      if (t.length >= 2 && rec.includes(t) && !canon.includes(t)) {
        reasons.push("CV_FIDELITY_RECOMMENDATION_OPTION_ABSENT_FROM_CANONICAL");
      }
    }
  }

  // Digits present only in projection structured fields (criteria values) but not in canonical.
  for (const block of composition.blocks) {
    if (block.kind !== "comparison" || !block.criteria) continue;
    for (const c of block.criteria) {
      for (const v of Object.values(c.values)) {
        const nums = v.match(/\d+(?:[.,]\d+)?/g) ?? [];
        for (const n of nums) {
          if (n.length >= 2 && !canon.includes(n) && !canon.includes(n.replace(",", "."))) {
            reasons.push("CV_FIDELITY_NUMERIC_VALUE_ABSENT_FROM_CANONICAL");
            return reasons;
          }
        }
      }
    }
  }
  return reasons;
}

export function mayPresentGraphicComposition(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { ok: boolean; reasonCodes: string[]; missing: string[] } {
  if (!hasGraphicBlocks(composition)) {
    return { ok: true, reasonCodes: ["CV_FIDELITY_NARRATIVE_ONLY"], missing: [] };
  }
  const align = projectionAnchorsAlignWithCanonical(composition, canonicalText);
  const crude = detectCrudeContradictions(composition, canonicalText);
  if (!align.aligned || crude.length) {
    return {
      ok: false,
      reasonCodes: [...align.reasonCodes, ...crude, "CV_FIDELITY_REFUSE_GRAPHIC_PRESENTATION"],
      missing: align.missing,
    };
  }
  return { ok: true, reasonCodes: align.reasonCodes, missing: [] };
}

```

### admission.ts

```ts
/**
 * Conversational composition — Studio admission & variant selection (CV-*).
 * Deterministic presentation policy only — never invents facts or authority.
 * Consumes validated visual compositions (legacy wire) after fail-closed parse.
 *
 * Body substitution (Strategy B): structural render-completeness only.
 * Never claims replyDraft semantic equivalence from Zod success.
 */

import type { VisualBlock, VisualComposition } from "@/domains/conversation/visual-composition";
import {
  compositionOwnsBody,
  hasGraphicBlocks,
} from "@/domains/conversation/visual-composition";
import { mayPresentGraphicComposition } from "./fidelity";

export const CONVERSATIONAL_COMPOSITION_CONTRACT = "conversational-composition-v1" as const;

/** Families delivered when wire+layout support them. */
export type CompositionFamily =
  | "narrative"
  | "comparison"
  | "sequence"
  | "dependencies"
  | "decisionPaths"
  | "parallelProcess"
  | "references"
  | "choices";

export type ComparisonVariant = "cards" | "matrix" | "stacked" | "text";
export type SequenceVariant = "horizontal" | "vertical" | "text";
/** Directed layouts + exhaustive list fallback (no fixed-coordinate SVG). */
export type RelationsVariant = "directed" | "list" | "text";

/**
 * substitute — composition may replace replyDraft body (structural completeness only).
 * complement — keep replyDraft visible; composition is additive.
 * markdown_only — do not render composition as body owner.
 */
export type BodyPresentationPolicy = "substitute" | "complement" | "markdown_only";

export type AdmittedBlock = {
  block: VisualBlock;
  family: CompositionFamily;
  variant: string;
  reasonCodes: string[];
};

export type AdmissionResult = {
  contract: typeof CONVERSATIONAL_COMPOSITION_CONTRACT;
  ownsBody: boolean;
  /** Deterministic body policy — not a semantic equality proof vs replyDraft. */
  bodyPolicy: BodyPresentationPolicy;
  admitted: AdmittedBlock[];
  fallbackReasons: string[];
  capacityNotes: string[];
  containerWidthPx: number | null;
};

export type AdmissionContext = {
  /** Effective Travail conversation column width when known. */
  containerWidthPx?: number | null;
  /** Canonical replyDraft / message content — required for graphic presentation (C-04). */
  canonicalText?: string | null;
};

function labelLen(s: string | undefined): number {
  return (s ?? "").trim().length;
}

function maxOptionTextLen(block: Extract<VisualBlock, { kind: "comparison" }>): number {
  let max = 0;
  for (const o of block.alternatives) {
    max = Math.max(max, labelLen(o.title) + labelLen(o.summary));
    for (const a of o.pros ?? []) max = Math.max(max, labelLen(a));
    for (const c of o.cons ?? []) max = Math.max(max, labelLen(c));
  }
  return max;
}

/**
 * CV-04/05 — comparison variant from cardinality, label density, and width.
 * No dogmatic "N cards" threshold alone.
 */
export function selectComparisonVariant(
  block: Extract<VisualBlock, { kind: "comparison" }>,
  widthPx: number | null,
): { variant: ComparisonVariant; reasonCodes: string[] } {
  const n = block.alternatives.length;
  const density = maxOptionTextLen(block);
  const criteria = block.criteria?.length ?? 0;
  const reasons: string[] = [];

  if (n < 2) {
    reasons.push("CV_COMPARISON_UNDER_CARDINALITY");
    return { variant: "text", reasonCodes: reasons };
  }
  if (n > 18) {
    reasons.push("CV_COMPARISON_OVER_CAPACITY");
    return { variant: "text", reasonCodes: reasons };
  }

  const narrow = widthPx != null && widthPx < 560;
  const medium = widthPx != null && widthPx < 900;

  if (n >= 5 || criteria >= 3 || (n >= 4 && density > 220)) {
    reasons.push("CV_COMPARISON_MATRIX_DENSITY");
    // Narrow: stacked keeps all substance without horizontal table pressure.
    return { variant: narrow ? "stacked" : "matrix", reasonCodes: reasons };
  }
  if (narrow || (n >= 3 && density > 280)) {
    reasons.push(narrow ? "CV_COMPARISON_NARROW_STACK" : "CV_COMPARISON_LONG_COPY_STACK");
    return { variant: "stacked", reasonCodes: reasons };
  }
  if (medium && n >= 3) {
    reasons.push("CV_COMPARISON_MEDIUM_CARDS");
    return { variant: "cards", reasonCodes: reasons };
  }
  reasons.push("CV_COMPARISON_CARDS");
  return { variant: "cards", reasonCodes: reasons };
}

export function selectSequenceVariant(
  block: Extract<VisualBlock, { kind: "sequence" }>,
  widthPx: number | null,
): { variant: SequenceVariant; reasonCodes: string[] } {
  const n = block.steps.length;
  const long = block.steps.some((s) => labelLen(s.title) + labelLen(s.detail) > 160);
  const reasons: string[] = [];
  if (n === 0) {
    reasons.push("CV_SEQUENCE_EMPTY");
    return { variant: "text", reasonCodes: reasons };
  }
  if (n > 12) {
    reasons.push("CV_SEQUENCE_OVER_CAPACITY");
    return { variant: "text", reasonCodes: reasons };
  }
  const narrow = widthPx != null && widthPx < 720;
  if (narrow || n >= 5 || long) {
    reasons.push(narrow ? "CV_SEQUENCE_NARROW_VERTICAL" : "CV_SEQUENCE_VERTICAL_DENSITY");
    return { variant: "vertical", reasonCodes: reasons };
  }
  reasons.push("CV_SEQUENCE_HORIZONTAL");
  return { variant: "horizontal", reasonCodes: reasons };
}

/**
 * Relations: directed CSS layout when layoutHint + envelope allow; else exhaustive list.
 * Fixed-coordinate SVG remains forbidden.
 */
export function selectRelationsVariant(
  block: Extract<VisualBlock, { kind: "relations" }>,
  widthPx: number | null,
): { variant: RelationsVariant; reasonCodes: string[] } {
  const nodes = block.nodes.length;
  const edges = block.edges.length;
  const reasons: string[] = [];
  if (nodes === 0) {
    reasons.push("CV_RELATIONS_EMPTY");
    return { variant: "text", reasonCodes: reasons };
  }
  const ids = new Set(block.nodes.map((n) => n.id));
  const orphan = block.edges.some((e) => !ids.has(e.from) || !ids.has(e.to));
  if (orphan) {
    reasons.push("CV_RELATIONS_ORPHAN_EDGE");
    return { variant: "list", reasonCodes: reasons };
  }
  if (block.preferListFallback) {
    reasons.push("CV_RELATIONS_PREFER_LIST");
    return { variant: "list", reasonCodes: reasons };
  }
  const dense = nodes > 10 || edges > 14;
  const narrow = widthPx != null && widthPx < 520;
  const longLabels = block.nodes.some((n) => (n.label?.length ?? 0) > 80);
  if (dense || narrow || longLabels) {
    reasons.push(
      dense
        ? "CV_RELATIONS_DENSE_LIST"
        : narrow
          ? "CV_RELATIONS_NARROW_LIST"
          : "CV_RELATIONS_LONG_LABEL_LIST",
    );
    return { variant: "list", reasonCodes: reasons };
  }
  if (block.layoutHint || edges > 0) {
    reasons.push("CV_RELATIONS_DIRECTED_LAYOUT");
    return { variant: "directed", reasonCodes: reasons };
  }
  reasons.push("CV_RELATIONS_STRUCTURED_LIST");
  return { variant: "list", reasonCodes: reasons };
}

function familyFor(block: VisualBlock): CompositionFamily {
  switch (block.kind) {
    case "comparison":
      return "comparison";
    case "sequence":
      return "sequence";
    case "relations":
      if (block.layoutHint === "decisionTree") return "decisionPaths";
      if (block.layoutHint === "parallelProcess") return "parallelProcess";
      return "dependencies";
    case "synthesis":
    case "text":
      return "narrative";
    case "choices":
      return "choices";
    case "references":
      return "references";
    default:
      return "narrative";
  }
}

/**
 * Exhaustive human-readable fallback from validated block fields.
 * Never truncates. Prefer this over abbreviated textAlternative alone.
 */
export function buildExhaustiveBlockFallback(block: VisualBlock): string {
  if (block.kind === "text") {
    return block.markdown;
  }
  if (block.kind === "comparison") {
    const parts: string[] = [block.title];
    for (const a of block.alternatives) {
      parts.push(`${a.title}: ${a.summary}`);
      if (a.pros?.length) parts.push(`Avantages — ${a.pros.join("; ")}`);
      if (a.cons?.length) parts.push(`Limites — ${a.cons.join("; ")}`);
    }
    if (block.criteria?.length) {
      for (const c of block.criteria) {
        const vals = block.alternatives
          .map((a) => `${a.title}: ${c.values[a.id] ?? "—"}`)
          .join(" ; ");
        parts.push(`${c.label} — ${vals}`);
      }
    }
    if (block.recommendation) parts.push(`Recommandation: ${block.recommendation}`);
    if (block.provenance?.length) {
      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
    }
    // Prefer exhaustive reconstruction; append textAlternative only if it adds content.
    const body = parts.join("\n");
    if (block.textAlternative && !body.includes(block.textAlternative.slice(0, 80))) {
      return `${body}\n${block.textAlternative}`;
    }
    return body || block.textAlternative;
  }
  if (block.kind === "sequence") {
    const parts: string[] = [block.title];
    const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
    block.steps.forEach((s, i) => {
      let line = `${i + 1}. ${s.title}`;
      if (s.detail) line += ` — ${s.detail}`;
      if (s.dependsOn?.length) {
        line += ` (dépend de: ${s.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")})`;
      }
      if (s.dateLabel) line += ` [${s.dateLabel}]`;
      parts.push(line);
    });
    return parts.join("\n") || block.textAlternative;
  }
  if (block.kind === "relations") {
    const parts: string[] = [block.title];
    const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));
    for (const n of block.nodes) {
      parts.push(`Élément: ${n.label}`);
    }
    for (const e of block.edges) {
      const from = titleById.get(e.from) ?? e.from;
      const to = titleById.get(e.to) ?? e.to;
      parts.push(e.label ? `${from} → ${to} (${e.label})` : `${from} → ${to}`);
    }
    if (block.provenance?.length) {
      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
    }
    return parts.join("\n") || block.textAlternative;
  }
  if (block.kind === "synthesis") {
    const parts: string[] = [block.title];
    for (const it of block.items) {
      parts.push(it.detail ? `${it.label}: ${it.detail}` : it.label);
    }
    return parts.join("\n") || block.textAlternative;
  }
  return "";
}

/**
 * Structural completeness of projection fields that the renderer will expose visibly.
 * Does NOT prove equivalence with replyDraft.
 */
export function projectionSubstanceRenderComplete(composition: VisualComposition): boolean {
  for (const block of composition.blocks) {
    if (block.kind === "choices" || block.kind === "references") continue;
    if (block.kind === "text") {
      if (!block.markdown.trim()) return false;
      continue;
    }
    if (block.kind === "comparison") {
      if (block.alternatives.length < 2) return false;
      for (const a of block.alternatives) {
        if (!a.title.trim() || !a.summary.trim()) return false;
      }
      if (!block.textAlternative.trim() && !buildExhaustiveBlockFallback(block).trim()) {
        return false;
      }
      continue;
    }
    if (block.kind === "sequence") {
      if (block.steps.length < 1) return false;
      for (const s of block.steps) {
        if (!s.title.trim()) return false;
      }
      continue;
    }
    if (block.kind === "relations") {
      if (block.nodes.length < 1) return false;
      for (const n of block.nodes) {
        if (!n.label.trim()) return false;
      }
      continue;
    }
    if (block.kind === "synthesis") {
      if (block.items.length < 1) return false;
      for (const it of block.items) {
        if (!it.label.trim()) return false;
      }
    }
  }
  return composition.blocks.some(
    (b) => b.kind !== "choices" && b.kind !== "references",
  );
}

/**
 * C-04 — graphic compositions never substitute the canonical body.
 * They may complement only when deterministic anchor alignment passes.
 * Otherwise markdown_only (visual refused — no misleading dual presentation).
 */
function decideBodyPolicy(
  composition: VisualComposition,
  ownsBody: boolean,
  _admitted: AdmittedBlock[],
  fallbackReasons: string[],
  canonicalText: string | null | undefined,
): BodyPresentationPolicy {
  if (!ownsBody) return "markdown_only";

  const narrativeOnly = fallbackReasons.includes("CV_NARRATIVE_ONLY");
  if (narrativeOnly && !hasGraphicBlocks(composition)) {
    return "substitute";
  }

  if (!projectionSubstanceRenderComplete(composition)) {
    fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
    return "markdown_only";
  }

  if (!hasGraphicBlocks(composition)) {
    return "substitute";
  }

  const fidelity = mayPresentGraphicComposition(composition, canonicalText);
  fallbackReasons.push(...fidelity.reasonCodes);
  if (!fidelity.ok) {
    return "markdown_only";
  }
  // Aligned graphics: show canonical text + structured complement (never mask).
  fallbackReasons.push("CV_BODY_GRAPHIC_COMPLEMENT_ONLY");
  return "complement";
}

/**
 * Admit a fail-closed-parsed composition into presentable blocks with variants.
 * CV-10: callers must isolate render errors per block.
 */
export function admitConversationalComposition(
  composition: VisualComposition | null | undefined,
  ctx: AdmissionContext = {},
): AdmissionResult {
  const width = ctx.containerWidthPx ?? null;
  const fallbackReasons: string[] = [];
  const capacityNotes: string[] = [];

  if (!composition) {
    return {
      contract: CONVERSATIONAL_COMPOSITION_CONTRACT,
      ownsBody: false,
      bodyPolicy: "markdown_only",
      admitted: [],
      fallbackReasons: ["CV_NO_COMPOSITION"],
      capacityNotes,
      containerWidthPx: width,
    };
  }

  const ownsBody = compositionOwnsBody(composition);
  if (!ownsBody) {
    fallbackReasons.push("CV_COMPOSITION_DOES_NOT_OWN_BODY");
  }
  if (!hasGraphicBlocks(composition) && composition.blocks.every((b) => b.kind === "text")) {
    fallbackReasons.push("CV_NARRATIVE_ONLY");
  }

  capacityNotes.push("CV_WIRE_MAX_ALTS_12");
  capacityNotes.push("CV_SCHEMA_DUAL_READ_E05_AND_PROJECTION_V1");

  const admitted: AdmittedBlock[] = [];
  for (const block of composition.blocks) {
    const family = familyFor(block);
    if (block.kind === "comparison") {
      const sel = selectComparisonVariant(block, width);
      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
      continue;
    }
    if (block.kind === "sequence") {
      const sel = selectSequenceVariant(block, width);
      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
      continue;
    }
    if (block.kind === "relations") {
      const sel = selectRelationsVariant(block, width);
      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
      continue;
    }
    admitted.push({
      block,
      family,
      variant: block.kind === "synthesis" ? "callout" : "default",
      reasonCodes: ["CV_DEFAULT_VARIANT"],
    });
  }

  const bodyPolicy = decideBodyPolicy(
    composition,
    ownsBody,
    admitted,
    fallbackReasons,
    ctx.canonicalText,
  );

  return {
    contract: CONVERSATIONAL_COMPOSITION_CONTRACT,
    ownsBody,
    bodyPolicy,
    admitted,
    fallbackReasons,
    capacityNotes,
    containerWidthPx: width,
  };
}

```

### index.ts

```ts
/**
 * Conversational composition — Studio presentation subsystem.
 * Product responsibility: adaptive restitution of Nora replies.
 * Wire format today: validated `e05-visual-composition-v1` (COMPATIBILITÉ BORNÉE).
 * Presentation contract: `conversational-composition-v1` admission (CV-*).
 */

export {
  CONVERSATIONAL_COMPOSITION_CONTRACT,
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  projectionSubstanceRenderComplete,
  selectComparisonVariant,
  selectSequenceVariant,
  selectRelationsVariant,
  type AdmissionContext,
  type AdmissionResult,
  type AdmittedBlock,
  type BodyPresentationPolicy,
  type ComparisonVariant,
  type CompositionFamily,
  type RelationsVariant,
  type SequenceVariant,
} from "./admission";

export {
  extractProjectionAnchors,
  mayPresentGraphicComposition,
  projectionAnchorsAlignWithCanonical,
  detectCrudeContradictions,
} from "./fidelity";

```

### NoraComposition.tsx

```tsx
"use client";

/**
 * Nora conversational composition renderer.
 * Product responsibility: adaptive restitution of validated D3 compositions.
 * Presentation contract: conversational-composition-v1 (admission).
 * Wire compatibility: e05-visual-composition-v1 (bounded).
 */

import {
  Component,
  type ErrorInfo,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  type AdmittedBlock,
  type ComparisonVariant,
  type RelationsVariant,
  type SequenceVariant,
} from "@/domains/conversation/conversational-composition";
import type {
  ComparisonBlock,
  RelationsBlock,
  SequenceBlock,
  SynthesisBlock,
  TextBlock,
  VisualBlock,
  VisualComposition,
  VisualProvenance,
} from "@/domains/conversation/visual-composition";
import {
  canonicalReferenceKey,
  compositionAnchorsChoices,
  compositionAnchorsReferences,
  partitionChoicesForAnchors,
  partitionReferencesForAnchors,
  provenanceConsultableKeys,
  resolveProvenanceReference,
} from "@/domains/conversation/visual-composition";
import type { TurnChoice, TurnReference } from "@/domains/conversation/turn-projection";

function Provenance(props: {
  items?: VisualProvenance[];
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  if (!props.items?.length) return null;
  const canonical = props.canonicalReferences ?? [];
  return (
    <ul
      className="fig-visual-provenance fig-comp-provenance"
      data-testid="nora-visual-provenance"
    >
      {props.items.map((p, i) => {
        const resolved = resolveProvenanceReference(p, canonical);
        return (
          <li key={`${p.label}-${i}`} data-consultable={resolved ? "1" : "0"}>
            {resolved && props.onReference ? (
              <button
                type="button"
                className="fig-nora-ref-link"
                data-testid="nora-visual-prov-link"
                data-ref-kind={resolved.kind}
                onClick={() => props.onReference?.(resolved)}
              >
                Consulter · {resolved.label}
                {resolved.available === false ? " (à vérifier)" : ""}
              </button>
            ) : (
              <span>
                {p.label}
                <span className="fig-visual-provenance-note"> — mention descriptive</span>
              </span>
            )}
            {p.note ? <span className="fig-visual-provenance-note"> — {p.note}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}

function Heading(props: {
  title: string;
  role?: TextBlock["role"];
  icon?: TextBlock["icon"];
}) {
  return (
    <h3 className="fig-visual-title fig-comp-title">
      <NoraSemanticIcon role={props.role} icon={props.icon} />
      <span>{props.title}</span>
    </h3>
  );
}

type BlockShellProps = {
  children: ReactNode;
  textAlternative: string;
  blockId: string;
};

/** CV-10 — isolate render failure to one block; keep readable textAlternative. */
class BlockErrorBoundary extends Component<
  BlockShellProps,
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo): void {
    // Presentation-only; never escalate to D3 FAILED.
  }

  render() {
    if (this.state.failed) {
      return (
        <section
          className="fig-visual-block fig-comp-block fig-comp-block-fallback"
          data-testid="nora-composition-block-fallback"
          data-block-id={this.props.blockId}
          data-fallback="1"
        >
          <p className="fig-comp-fallback-text">{this.props.textAlternative}</p>
        </section>
      );
    }
    return this.props.children;
  }
}

function AlternativeDetails({
  alt,
}: {
  alt: ComparisonBlock["alternatives"][number];
}) {
  return (
    <article className="fig-visual-alt fig-comp-alt" data-alt-id={alt.id} data-testid="nora-composition-alt-detail">
      <h4>{alt.title}</h4>
      <p>{alt.summary}</p>
      {alt.pros?.length ? (
        <ul className="fig-visual-pros">
          {alt.pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      ) : null}
      {alt.cons?.length ? (
        <ul className="fig-visual-cons">
          {alt.cons.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function ComparisonView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: ComparisonBlock;
  variant: ComparisonVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const hasCriteria = Boolean(block.criteria?.length);
  // CV-T04 / Defect A: matrix never hides summary/pros/cons — show complementary details.
  const showMatrix = variant === "matrix" && hasCriteria;
  const showCards =
    variant === "cards" ||
    variant === "stacked" ||
    (variant === "matrix" && !hasCriteria);
  const showMatrixDetails = showMatrix;
  const forceText = variant === "text";

  return (
    <section
      className={`fig-visual-block fig-visual-comparison fig-comp-block fig-comp-comparison fig-comp-variant-${variant}`}
      data-testid="nora-visual-comparison"
      data-comp-testid="nora-composition-comparison"
      data-block-kind="comparison"
      data-block-id={block.id}
      data-variant={variant}
      data-substance-complete="1"
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-comparison-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : null}
      {!forceText && showCards ? (
        <div
          className={
            variant === "stacked"
              ? "fig-visual-comparison-grid fig-comp-comparison-stack"
              : "fig-visual-comparison-grid fig-comp-comparison-cards"
          }
        >
          {block.alternatives.map((alt) => (
            <AlternativeDetails key={alt.id} alt={alt} />
          ))}
        </div>
      ) : null}
      {!forceText && showMatrix ? (
        <>
          <div className="fig-visual-matrix-wrap fig-comp-matrix-wrap">
            <table className="fig-visual-matrix fig-comp-matrix">
              <caption>Critères de comparaison</caption>
              <thead>
                <tr>
                  <th scope="col">Critère</th>
                  {block.alternatives.map((a) => (
                    <th key={a.id} scope="col">
                      {a.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.criteria!.map((c) => (
                  <tr key={c.id}>
                    <th scope="row">{c.label}</th>
                    {block.alternatives.map((a) => (
                      <td key={a.id}>{c.values[a.id] ?? "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showMatrixDetails ? (
            <div
              className="fig-comp-comparison-stack fig-comp-matrix-details"
              data-testid="nora-composition-matrix-details"
            >
              <h4 className="fig-comp-matrix-details-title">Détail des options</h4>
              {block.alternatives.map((alt) => (
                <AlternativeDetails key={`detail-${alt.id}`} alt={alt} />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
      {block.recommendation ? (
        <div className="fig-visual-recommendation" data-testid="nora-visual-recommendation">
          <NoraSemanticIcon role="recommendation" />
          <div className="fig-visual-recommendation-body">
            <span className="fig-visual-recommendation-label">Recommandation (avis Nora)</span>
            <SafeMarkdown content={block.recommendation} className="fig-visual-inline-md" />
          </div>
        </div>
      ) : null}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function SequenceView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: SequenceBlock;
  variant: SequenceVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
  const forceText = variant === "text";
  return (
    <section
      className={`fig-visual-block fig-visual-sequence fig-comp-block fig-comp-sequence fig-comp-variant-${variant}`}
      data-testid="nora-visual-sequence"
      data-comp-testid="nora-composition-sequence"
      data-block-kind="sequence"
      data-block-id={block.id}
      data-variant={variant}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role ?? "step"} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-sequence-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : (
        <ol
          className={
            variant === "horizontal"
              ? "fig-visual-steps fig-comp-steps-horizontal"
              : "fig-visual-steps fig-comp-steps-vertical"
          }
        >
          {block.steps.map((step, idx) => (
            <li key={step.id} className="fig-visual-step fig-comp-step" data-step-id={step.id}>
              <div className="fig-visual-step-marker" aria-hidden>
                {idx + 1}
              </div>
              <div className="fig-visual-step-body">
                <h4>
                  <NoraSemanticIcon role={step.role ?? "step"} />
                  {step.title}
                </h4>
                {step.detail ? (
                  <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                ) : null}
                {step.dependsOn?.length ? (
                  <p className="fig-visual-step-deps" data-testid="nora-visual-step-deps">
                    <NoraSemanticIcon role="dependency" />
                    Dépend de :{" "}
                    {step.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")}
                  </p>
                ) : null}
                {step.dateLabel ? (
                  <p className="fig-visual-step-date">{step.dateLabel}</p>
                ) : null}
              </div>
              {idx < block.steps.length - 1 ? (
                <div className="fig-visual-step-connector" aria-hidden />
              ) : null}
            </li>
          ))}
        </ol>
      )}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function relationRole(
  kind: RelationsBlock["nodes"][number]["kind"],
): TextBlock["role"] {
  if (kind === "hypothesis") return "hypothesis";
  if (kind === "observation") return "observation";
  if (kind === "fact" || kind === "finding") return "fact";
  return "information";
}

function RelationsListFallback({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  return (
    <>
      <ul className="fig-visual-relations-list fig-comp-relations-list">
        {block.nodes.map((n) => (
          <li key={n.id} data-node-id={n.id}>
            <NoraSemanticIcon role={relationRole(n.kind)} />
            <span className="fig-comp-relations-label">{n.label}</span>
            {n.detail ? <span className="fig-comp-relations-detail"> — {n.detail}</span> : null}
          </li>
        ))}
      </ul>
      {block.edges.length ? (
        <ul
          className="fig-visual-relations-edges fig-comp-relations-edges"
          data-testid="nora-composition-relations-edges"
        >
          {block.edges.map((e, i) => (
            <li key={`${e.from}-${e.to}-${i}`}>
              {titleById.get(e.from) ?? e.from} → {titleById.get(e.to) ?? e.to}
              {e.relation ? ` [${e.relation}]` : ""}
              {e.label ? ` (${e.label})` : ""}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

/** C-10/11/12 — CSS directed layout (no fixed SVG coordinates, no ELK dependency). */
function RelationsDirectedView({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  const hint = block.layoutHint ?? "dependencies";

  if (hint === "parallelProcess") {
    const lanes = new Map<string, typeof block.nodes>();
    for (const n of block.nodes) {
      const lane = n.laneId?.trim() || "voie";
      const list = lanes.get(lane) ?? [];
      list.push(n);
      lanes.set(lane, list);
    }
    const syncEdges = block.edges.filter((e) => e.relation === "sync");
    return (
      <div
        className="fig-comp-parallel"
        data-testid="nora-composition-parallel"
        data-layout-hint="parallelProcess"
      >
        <div className="fig-comp-parallel-lanes">
          {[...lanes.entries()].map(([lane, nodes]) => (
            <section key={lane} className="fig-comp-parallel-lane" data-lane={lane}>
              <h4 className="fig-comp-parallel-lane-title">{lane}</h4>
              <ol className="fig-comp-parallel-tasks">
                {nodes.map((n) => (
                  <li key={n.id} data-node-id={n.id}>
                    <NoraSemanticIcon role={relationRole(n.kind)} />
                    <span className="fig-comp-relations-label">{n.label}</span>
                    {n.detail ? (
                      <span className="fig-comp-relations-detail"> — {n.detail}</span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
        {syncEdges.length ? (
          <p className="fig-comp-parallel-sync" data-testid="nora-composition-parallel-sync">
            Convergence / sync :{" "}
            {syncEdges
              .map(
                (e) =>
                  `${titleById.get(e.from) ?? e.from} ↔ ${titleById.get(e.to) ?? e.to}${
                    e.label ? ` (${e.label})` : ""
                  }`,
              )
              .join(" ; ")}
          </p>
        ) : null}
        <p className="fig-comp-authority-note">
          La convergence graphique n&apos;enregistre aucune décision humaine ni validation.
        </p>
      </div>
    );
  }

  if (hint === "decisionTree") {
    const children = new Map<string, typeof block.edges>();
    const targets = new Set(block.edges.map((e) => e.to));
    for (const e of block.edges) {
      const list = children.get(e.from) ?? [];
      list.push(e);
      children.set(e.from, list);
    }
    const roots = block.nodes.filter((n) => !targets.has(n.id));
    const renderBranch = (nodeId: string, depth: number): ReactNode => {
      const node = block.nodes.find((n) => n.id === nodeId);
      if (!node) return null;
      const outs = children.get(nodeId) ?? [];
      return (
        <li key={nodeId} data-node-id={nodeId} data-depth={depth}>
          <div className="fig-comp-tree-node">
            <NoraSemanticIcon role={relationRole(node.kind)} />
            <span className="fig-comp-relations-label">{node.label}</span>
            {node.detail ? (
              <span className="fig-comp-relations-detail"> — {node.detail}</span>
            ) : null}
          </div>
          {outs.length ? (
            <ul className="fig-comp-tree-branches">
              {outs.map((e) => (
                <li key={`${e.from}-${e.to}`} data-relation={e.relation ?? "flow"}>
                  <span className="fig-comp-tree-condition">
                    {e.relation === "condition_true"
                      ? "Si oui"
                      : e.relation === "condition_false"
                        ? "Si non"
                        : e.label || "puis"}
                    {e.label && e.relation?.startsWith("condition") ? ` — ${e.label}` : null}
                  </span>
                  <ul>{renderBranch(e.to, depth + 1)}</ul>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      );
    };
    return (
      <div
        className="fig-comp-tree"
        data-testid="nora-composition-decision-tree"
        data-layout-hint="decisionTree"
      >
        <ul className="fig-comp-tree-root">
          {(roots.length ? roots : block.nodes.slice(0, 1)).map((n) => renderBranch(n.id, 0))}
        </ul>
        <p className="fig-comp-authority-note">
          Les branches conditionnelles sont des propositions de lecture — aucune HumanDecision
          n&apos;est créée.
        </p>
      </div>
    );
  }

  // dependencies (default directed)
  return (
    <div
      className="fig-comp-deps"
      data-testid="nora-composition-dependencies"
      data-layout-hint="dependencies"
    >
      <ol className="fig-comp-deps-nodes">
        {block.nodes.map((n) => (
          <li key={n.id} className="fig-comp-deps-node" data-node-id={n.id}>
            <NoraSemanticIcon role={relationRole(n.kind)} />
            <div>
              <div className="fig-comp-relations-label">{n.label}</div>
              {n.detail ? <div className="fig-comp-relations-detail">{n.detail}</div> : null}
            </div>
          </li>
        ))}
      </ol>
      {block.edges.length ? (
        <ul
          className="fig-comp-deps-edges"
          data-testid="nora-composition-relations-edges"
        >
          {block.edges.map((e, i) => (
            <li key={`${e.from}-${e.to}-${i}`}>
              <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
              <span className="fig-comp-deps-arrow" aria-hidden>
                →
              </span>
              <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
              {e.label ? <span className="fig-comp-deps-label"> ({e.label})</span> : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function RelationsView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: RelationsBlock;
  variant: RelationsVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const forceText = variant === "text";
  const useDirected = variant === "directed";
  const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));

  return (
    <section
      className={`fig-visual-block fig-visual-relations fig-comp-block fig-comp-relations fig-comp-variant-${variant}`}
      data-testid="nora-visual-relations"
      data-comp-testid="nora-composition-relations"
      data-block-kind="relations"
      data-block-id={block.id}
      data-variant={variant}
      data-fallback={useDirected ? "0" : "1"}
      data-layout={useDirected ? "directed" : "structured-list"}
      data-layout-hint={block.layoutHint ?? ""}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-relations-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : useDirected ? (
        <RelationsDirectedView block={block} titleById={titleById} />
      ) : (
        <RelationsListFallback block={block} titleById={titleById} />
      )}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function SynthesisView({
  block,
  canonicalReferences,
  onReference,
}: {
  block: SynthesisBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  return (
    <section
      className="fig-visual-block fig-visual-synthesis fig-comp-block fig-comp-synthesis"
      data-testid="nora-visual-synthesis"
      data-comp-testid="nora-composition-synthesis"
      data-block-kind="synthesis"
      data-block-id={block.id}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      <ul className="fig-visual-synthesis-list">
        {block.items.map((it) => {
          const role =
            it.role ??
            (it.tone === "risk"
              ? "risk"
              : it.tone === "hypothesis"
                ? "hypothesis"
                : it.tone === "observation"
                  ? "observation"
                  : it.tone === "priority"
                    ? "recommendation"
                    : "information");
          return (
            <li
              key={it.id}
              data-tone={it.tone}
              className={`fig-visual-synth-item fig-visual-tone-${it.tone}`}
            >
              <NoraSemanticIcon role={role} icon={it.icon} />
              <div>
                <strong>{it.label}</strong>
                {it.detail ? (
                  <SafeMarkdown content={it.detail} className="fig-visual-inline-md" />
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="sr-only">{block.textAlternative}</p>
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function TextView({ block }: { block: TextBlock }) {
  return (
    <div
      className={`fig-visual-block fig-visual-text fig-comp-block fig-comp-text${
        block.role ? ` fig-visual-text-${block.role}` : ""
      }`}
      data-testid="nora-visual-text"
      data-comp-testid="nora-composition-text"
      data-block-kind="text"
      data-role={block.role ?? ""}
    >
      {block.role || block.icon ? (
        <div className="fig-visual-text-head">
          <NoraSemanticIcon role={block.role} icon={block.icon} />
        </div>
      ) : null}
      <SafeMarkdown content={block.markdown} />
    </div>
  );
}

function ChoicesCluster(props: {
  choices: TurnChoice[];
  actionable?: boolean;
  busy?: boolean;
  choiceFrozen?: boolean;
  messageId?: string;
  residual?: boolean;
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  anchorId?: string;
}) {
  if (!props.choices.length) return null;
  return (
    <div
      className="fig-nora-choices fig-visual-choices-anchor fig-comp-choices"
      data-testid="nora-choices"
      data-block-kind="choices"
      data-residual={props.residual ? "1" : "0"}
      data-actionable={props.actionable ? "1" : "0"}
      data-message-id={props.messageId}
      data-anchor-id={props.anchorId ?? ""}
    >
      {props.choices.map((c) => (
        <button
          key={c.id}
          type="button"
          className="fig-nora-choice"
          data-testid="nora-choice"
          data-choice-id={c.id}
          disabled={!props.actionable || props.busy || props.choiceFrozen}
          onClick={() => props.messageId && props.onChoice?.(c, props.messageId)}
        >
          {c.label}
        </button>
      ))}
      {!props.actionable ? (
        <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
          Propositions expirées — consultation seule.
        </p>
      ) : null}
    </div>
  );
}

function RefsCluster(props: {
  references: TurnReference[];
  residual?: boolean;
  anchorId?: string;
  onReference?: (ref: TurnReference) => void;
}) {
  if (!props.references.length) return null;
  return (
    <ul
      className="fig-nora-refs fig-visual-refs-anchor fig-comp-refs"
      data-testid="nora-refs"
      data-block-kind="references"
      data-residual={props.residual ? "1" : "0"}
      data-anchor-id={props.anchorId ?? ""}
    >
      {props.references.map((r, i) => (
        <li key={`${r.kind}-${r.resourceId ?? r.path ?? r.href ?? i}`}>
          <button
            type="button"
            className="fig-nora-ref-link"
            data-testid="nora-ref-link"
            data-ref-kind={r.kind}
            onClick={() => props.onReference?.(r)}
          >
            Consulter · {r.label}
            {r.available === false ? " (à vérifier)" : ""}
          </button>
        </li>
      ))}
    </ul>
  );
}

/** Defect C — never truncate; exhaustive structured fallback. */
function textAltFor(block: VisualBlock): string {
  return buildExhaustiveBlockFallback(block);
}

function AdmittedBlockView({
  admitted,
  canonicalReferences,
  onReference,
}: {
  admitted: AdmittedBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const { block, variant } = admitted;
  if (block.kind === "comparison") {
    return (
      <ComparisonView
        block={block}
        variant={variant as ComparisonVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "sequence") {
    return (
      <SequenceView
        block={block}
        variant={variant as SequenceVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "relations") {
    return (
      <RelationsView
        block={block}
        variant={variant as RelationsVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "synthesis") {
    return (
      <SynthesisView
        block={block}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "text") {
    return <TextView block={block} />;
  }
  return null;
}

export type NoraCompositionProps = {
  composition: VisualComposition;
  /** Canonical replyDraft / message body for width-local re-admission consistency. */
  canonicalText?: string | null;
  choices?: TurnChoice[];
  references?: TurnReference[];
  actionable?: boolean;
  busy?: boolean;
  choiceFrozen?: boolean;
  messageId?: string;
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  onReference?: (ref: TurnReference) => void;
};

export function NoraComposition(props: NoraCompositionProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [widthPx, setWidthPx] = useState<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      setWidthPx(el?.clientWidth ?? null);
      return;
    }
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (typeof w === "number" && Number.isFinite(w)) {
        setWidthPx(Math.round(w));
      }
    });
    ro.observe(el);
    setWidthPx(Math.round(el.clientWidth));
    return () => ro.disconnect();
  }, []);

  const admission = admitConversationalComposition(props.composition, {
    containerWidthPx: widthPx,
    canonicalText: props.canonicalText,
  });
  const choices = props.choices ?? [];
  const references = props.references ?? [];
  const choiceParts = partitionChoicesForAnchors(props.composition.blocks, choices);
  const refParts = partitionReferencesForAnchors(props.composition.blocks, references);
  const alreadyConsultable = provenanceConsultableKeys(
    props.composition.blocks,
    references,
  );
  const dedupeRefs = (list: TurnReference[]) =>
    list.filter((r) => !alreadyConsultable.has(canonicalReferenceKey(r)));

  return (
    <div
      ref={rootRef}
      className="fig-visual-composition fig-comp-composition"
      data-testid="nora-visual-composition"
      data-comp-testid="nora-composition"
      data-schema={props.composition.schemaVersion}
      data-contract={admission.contract}
      data-owns-body={admission.ownsBody ? "1" : "0"}
      data-body-policy={admission.bodyPolicy}
      data-container-width={widthPx ?? ""}
    >
      {admission.admitted.map((admitted) => {
        if (admitted.block.kind === "choices") {
          return (
            <ChoicesCluster
              key={admitted.block.id}
              choices={choiceParts.byAnchorId.get(admitted.block.id) ?? []}
              actionable={props.actionable}
              busy={props.busy}
              choiceFrozen={props.choiceFrozen}
              messageId={props.messageId}
              onChoice={props.onChoice}
              anchorId={admitted.block.id}
            />
          );
        }
        if (admitted.block.kind === "references") {
          return (
            <RefsCluster
              key={admitted.block.id}
              references={dedupeRefs(refParts.byAnchorId.get(admitted.block.id) ?? [])}
              onReference={props.onReference}
              anchorId={admitted.block.id}
            />
          );
        }
        return (
          <BlockErrorBoundary
            key={admitted.block.id}
            blockId={admitted.block.id}
            textAlternative={textAltFor(admitted.block)}
          >
            <AdmittedBlockView
              admitted={admitted}
              canonicalReferences={references}
              onReference={props.onReference}
            />
          </BlockErrorBoundary>
        );
      })}
      {compositionAnchorsChoices(props.composition) ? (
        <ChoicesCluster
          choices={choiceParts.residual}
          actionable={props.actionable}
          busy={props.busy}
          choiceFrozen={props.choiceFrozen}
          messageId={props.messageId}
          onChoice={props.onChoice}
          residual
          anchorId="residual-choices"
        />
      ) : null}
      {compositionAnchorsReferences(props.composition) ? (
        <RefsCluster
          references={dedupeRefs(refParts.residual)}
          onReference={props.onReference}
          residual
          anchorId="residual-references"
        />
      ) : null}
    </div>
  );
}

```

### NoraVisualComposition.tsx (alias)

```tsx
"use client";

/**
 * Compatibility alias — experimental E05 renderer replaced by NoraComposition.
 * Keep export path stable for any residual imports; dual testids preserved.
 */

export {
  NoraComposition as NoraVisualComposition,
  NoraComposition,
  type NoraCompositionProps,
} from "@/components/figma/NoraComposition";

```

### Tests admission

```ts
import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  CONVERSATIONAL_COMPOSITION_CONTRACT,
  projectionSubstanceRenderComplete,
  selectComparisonVariant,
  selectRelationsVariant,
  selectSequenceVariant,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  type VisualComposition,
} from "@/domains/conversation/visual-composition";

function comparisonFixture(nAlts: number, criteria = 0, long = false): VisualComposition {
  const alternatives = Array.from({ length: nAlts }, (_, i) => ({
    id: `a${i}`,
    title: long ? `Option ${i} ${"x".repeat(80)}` : `Option ${i}`,
    summary: long ? `${"long ".repeat(40)}summary ${i}` : `Summary ${i}`,
    pros: long ? [`Pro ${"y".repeat(60)}`] : [`Pro ${i}`],
    cons: [`Con ${i}`],
  }));
  const crit =
    criteria > 0
      ? Array.from({ length: criteria }, (_, i) => ({
          id: `c${i}`,
          label: `Critère ${i}`,
          values: Object.fromEntries(alternatives.map((a) => [a.id, `v${i}`])),
        }))
      : undefined;
  return parseVisualComposition({
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [
      {
        kind: "comparison",
        id: "cmp",
        title: "Comparaison",
        alternatives,
        criteria: crit,
        recommendation: "Si latence critique, préférer Option 0.",
        provenance: [{ label: "Note architecture", note: "hypothèse" }],
        textAlternative: alternatives.map((a) => `${a.title}: ${a.summary}`).join(" | "),
      },
    ],
  })!;
}

describe("conversational composition admission (CV-*)", () => {
  it("CV-T01 — narrative-only / no composition → no graphic ownership", () => {
    const empty = admitConversationalComposition(null);
    expect(empty.contract).toBe(CONVERSATIONAL_COMPOSITION_CONTRACT);
    expect(empty.ownsBody).toBe(false);
    expect(empty.bodyPolicy).toBe("markdown_only");
    expect(empty.admitted).toHaveLength(0);
    expect(empty.fallbackReasons).toContain("CV_NO_COMPOSITION");

    const textOnly = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t1", markdown: "Réponse simple." }],
    })!;
    const adm = admitConversationalComposition(textOnly, {
      canonicalText: "Réponse simple.",
    });
    expect(adm.ownsBody).toBe(true);
    expect(adm.bodyPolicy).toBe("substitute");
    expect(adm.admitted).toHaveLength(1);
    expect(adm.admitted[0]?.family).toBe("narrative");
    expect(adm.fallbackReasons).toContain("CV_NARRATIVE_ONLY");
  });

  it("CV-T03/T04 — 2–3 options → cards; 5 options + criteria → matrix (wide)", () => {
    const three = comparisonFixture(3);
    const c3 = selectComparisonVariant(three.blocks[0] as never, 960);
    expect(c3.variant).toBe("cards");

    const five = comparisonFixture(5, 4);
    const c5 = selectComparisonVariant(five.blocks[0] as never, 960);
    expect(c5.variant).toBe("matrix");
    expect(c5.reasonCodes.some((r) => r.includes("MATRIX"))).toBe(true);

    const canon = five.blocks[0] && "alternatives" in five.blocks[0]
      ? five.blocks[0].alternatives.map((a) => a.title).join(" ")
      : "";
    const adm = admitConversationalComposition(five, {
      containerWidthPx: 960,
      canonicalText: canon,
    });
    expect(adm.bodyPolicy).toBe("complement");
    expect(projectionSubstanceRenderComplete(five)).toBe(true);
  });

  it("CV-T05 — wire path 8 options: parser accepts (MAX_ALTS=12); 18 still rejects", () => {
    const eight = {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "cmp",
          title: "Huit options",
          alternatives: Array.from({ length: 8 }, (_, i) => ({
            id: `a${i}`,
            title: `Option ${i}`,
            summary: `Summary ${i}`,
            pros: [`Pro ${i}`],
            cons: [`Con ${i}`],
          })),
          textAlternative: "huit options",
        },
      ],
    };
    const parsed8 = parseVisualComposition(eight);
    expect(parsed8).not.toBeNull();
    expect(parsed8!.blocks[0]).toMatchObject({ kind: "comparison" });

    const eighteen = {
      ...eight,
      blocks: [
        {
          ...eight.blocks[0],
          alternatives: Array.from({ length: 18 }, (_, i) => ({
            id: `a${i}`,
            title: `Option ${i}`,
            summary: `Summary ${i}`,
          })),
          textAlternative: "dix-huit options",
        },
      ],
    };
    expect(parseVisualComposition(eighteen)).toBeNull();

    const withinWire = admitConversationalComposition(comparisonFixture(5, 1), {
      canonicalText: "Option 0 Option 1 Option 2 Option 3 Option 4",
    });
    expect(withinWire.capacityNotes).toContain("CV_WIRE_MAX_ALTS_12");
  });

  it("CV-T05 — long copy / narrow → stacked; over-capacity defensive → text", () => {
    const many = comparisonFixture(5, 0, true);
    const narrow = selectComparisonVariant(many.blocks[0] as never, 480);
    expect(["stacked", "text", "matrix"]).toContain(narrow.variant);
    expect(narrow.variant).not.toBe("cards");

    const overBlock = {
      kind: "comparison" as const,
      id: "cmp",
      title: "Over",
      alternatives: Array.from({ length: 20 }, (_, i) => ({
        id: `a${i}`,
        title: `O${i}`,
        summary: `s${i}`,
      })),
      textAlternative: "trop d'options",
    };
    const o = selectComparisonVariant(overBlock, 1200);
    expect(o.variant).toBe("text");
  });

  it("CV-T06 — sequence narrow → vertical", () => {
    const seq = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "s1",
          title: "Parcours",
          steps: Array.from({ length: 5 }, (_, i) => ({
            id: `st${i}`,
            title: `Étape ${i}`,
            detail: "détail",
          })),
          textAlternative: "Cinq étapes",
        },
      ],
    })!;
    const v = selectSequenceVariant(seq.blocks[0] as never, 500);
    expect(v.variant).toBe("vertical");
  });

  it("CV-T10 — dense relations → structured list (never svg)", () => {
    const dense = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r1",
          title: "Dépendances",
          nodes: Array.from({ length: 11 }, (_, i) => ({
            id: `n${i}`,
            label: `Nœud ${i} with a very long human label that must remain readable`,
            kind: "observation",
          })),
          edges: Array.from({ length: 15 }, (_, i) => ({
            from: `n${i % 11}`,
            to: `n${(i + 1) % 11}`,
            label: "lié",
          })),
          textAlternative: "Graphe dense",
        },
      ],
    })!;
    expect(dense).not.toBeNull();
    const sel = selectRelationsVariant(dense!.blocks[0] as never, 900);
    expect(sel.variant).toBe("list");
  });

  it("C-10 directed dependencies when layoutHint set and envelope OK", () => {
    const dep = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r1",
          title: "Deps",
          layoutHint: "dependencies",
          nodes: [
            { id: "a", label: "Amont", kind: "observation" },
            { id: "b", label: "Aval", kind: "hypothesis" },
            { id: "c", label: "Convergence", kind: "finding" },
          ],
          edges: [
            { from: "a", to: "c", relation: "depends_on", label: "alimente" },
            { from: "b", to: "c", relation: "depends_on", label: "alimente" },
          ],
          textAlternative: "A et B convergent vers C",
        },
      ],
    })!;
    const sel = selectRelationsVariant(dep.blocks[0] as never, 900);
    expect(sel.variant).toBe("directed");
    const adm = admitConversationalComposition(dep, {
      canonicalText: "Amont Aval Convergence",
    });
    expect(adm.admitted[0]?.family).toBe("dependencies");
  });

  it("CV-T14 — admission never invents quantitative chart family", () => {
    const adm = admitConversationalComposition(comparisonFixture(3), {
      canonicalText: "Option 0 Option 1 Option 2",
    });
    expect(adm.admitted.every((a) => a.family !== ("chart" as never))).toBe(true);
  });

  it("Defect C — exhaustive fallback never truncates long text", () => {
    const longMd = "A".repeat(2500);
    const block = { kind: "text" as const, id: "t1", markdown: longMd };
    const fb = buildExhaustiveBlockFallback(block);
    expect(fb.length).toBe(2500);
    expect(fb).toBe(longMd);
  });

  it("Defect A — matrix fixture preserves all alt substance in exhaustive fallback", () => {
    const five = comparisonFixture(5, 3);
    const block = five.blocks[0]!;
    const fb = buildExhaustiveBlockFallback(block);
    expect(fb).toContain("Option 0");
    expect(fb).toContain("Summary 0");
    expect(fb).toContain("Pro 0");
    expect(fb).toContain("Con 0");
    expect(fb).toContain("Critère 0");
    expect(fb).toContain("Recommandation");
  });

  it("admit preserves block order and reason codes", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t1", markdown: "Intro" },
        {
          kind: "comparison",
          id: "c1",
          title: "Opts",
          alternatives: [
            { id: "a", title: "A", summary: "sa" },
            { id: "b", title: "B", summary: "sb" },
          ],
          textAlternative: "A vs B",
        },
        { kind: "choices", id: "ch" },
      ],
    })!;
    const adm = admitConversationalComposition(comp, {
      containerWidthPx: 800,
      canonicalText: "Intro A B",
    });
    expect(adm.admitted.map((a) => a.block.kind)).toEqual([
      "text",
      "comparison",
      "choices",
    ]);
    expect(adm.admitted[1]?.reasonCodes.length).toBeGreaterThan(0);
    expect(adm.bodyPolicy).toBe("complement");
  });
});

```

### Tests fidelity + C-11/12

```ts
import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  mayPresentGraphicComposition,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
} from "@/domains/conversation/visual-composition";

const comparisonRaw = {
  schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
  blocks: [
    {
      kind: "comparison",
      id: "cmp",
      title: "A vs B",
      alternatives: [
        { id: "a", title: "Option Alpha", summary: "sa", pros: ["pa"], cons: ["ca"] },
        { id: "b", title: "Option Beta", summary: "sb", pros: ["pb"], cons: ["cb"] },
      ],
      recommendation: "Préférer Option Alpha si latence critique.",
      textAlternative: "Alpha vs Beta",
    },
  ],
};

describe("C-04 canonical fidelity gates", () => {
  it("refuses graphic presentation when anchors absent from canonical (markdown_only)", () => {
    const comp = parseVisualComposition(comparisonRaw)!;
    const gate = mayPresentGraphicComposition(comp, "Texte sans les options.");
    expect(gate.ok).toBe(false);
    const adm = admitConversationalComposition(comp, {
      canonicalText: "Texte sans les options.",
    });
    expect(adm.bodyPolicy).toBe("markdown_only");
    expect(adm.fallbackReasons).toContain("CV_FIDELITY_REFUSE_GRAPHIC_PRESENTATION");
  });

  it("allows complement (never substitute) when anchors present in canonical", () => {
    const comp = parseVisualComposition(comparisonRaw)!;
    const canon = "Comparaison Option Alpha et Option Beta pour la latence.";
    const adm = admitConversationalComposition(comp, { canonicalText: canon });
    expect(adm.bodyPolicy).toBe("complement");
    expect(adm.fallbackReasons).toContain("CV_BODY_GRAPHIC_COMPLEMENT_ONLY");
  });

  it("narrative-only may substitute", () => {
    const textOnly = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t1", markdown: "Réponse simple." }],
    })!;
    const adm = admitConversationalComposition(textOnly, {
      canonicalText: "Réponse simple.",
    });
    expect(adm.bodyPolicy).toBe("substitute");
  });

  it("legacy e05 schema still parses (C-06 compat)", () => {
    const legacy = parseVisualComposition(comparisonRaw);
    expect(legacy?.schemaVersion).toBe(VISUAL_COMPOSITION_SCHEMA_LEGACY);
  });

  it("active schema parses (C-05 write path)", () => {
    const modern = parseVisualComposition({
      ...comparisonRaw,
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    });
    expect(modern?.schemaVersion).toBe(VISUAL_COMPOSITION_SCHEMA);
  });
});

describe("C-11/C-12 family mapping", () => {
  it("maps decisionTree layoutHint to decisionPaths family", () => {
    const tree = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t",
          title: "Arbre",
          layoutHint: "decisionTree",
          nodes: [
            { id: "c", label: "Condition rôles clarifiés", kind: "unknown" },
            { id: "y", label: "Approche progressive", kind: "hypothesis" },
            { id: "n", label: "Reporter le déploiement", kind: "hypothesis" },
          ],
          edges: [
            {
              from: "c",
              to: "y",
              relation: "condition_true",
              label: "oui",
            },
            {
              from: "c",
              to: "n",
              relation: "condition_false",
              label: "non",
            },
          ],
          textAlternative: "Si rôles clarifiés → progressive, sinon reporter",
        },
      ],
    })!;
    const adm = admitConversationalComposition(tree, {
      canonicalText:
        "Condition rôles clarifiés Approche progressive Reporter le déploiement",
    });
    expect(adm.admitted[0]?.family).toBe("decisionPaths");
    expect(adm.admitted[0]?.variant).toBe("directed");
  });

  it("maps parallelProcess layoutHint to parallelProcess family", () => {
    const par = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "p",
          title: "Parallèle",
          layoutHint: "parallelProcess",
          nodes: [
            { id: "a1", label: "Inventaire site A", kind: "observation", laneId: "Voie A" },
            { id: "b1", label: "Inventaire site B", kind: "observation", laneId: "Voie B" },
            { id: "g", label: "Revue commune", kind: "finding", laneId: "Gate" },
          ],
          edges: [
            { from: "a1", to: "g", relation: "sync", label: "prêt" },
            { from: "b1", to: "g", relation: "sync", label: "prêt" },
          ],
          textAlternative: "Voies A/B puis revue commune",
        },
      ],
    })!;
    const adm = admitConversationalComposition(par, {
      canonicalText: "Inventaire site A Inventaire site B Revue commune",
    });
    expect(adm.admitted[0]?.family).toBe("parallelProcess");
  });
});

```

---

## 7. Diffs fichiers modifiés (complets)

### NoraConversation.tsx

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index b149f939..1a98c4b6 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -2,17 +2,17 @@

 import { useEffect, useRef, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
-import { NoraVisualComposition } from "@/components/figma/NoraVisualComposition";
+import { NoraComposition } from "@/components/figma/NoraComposition";
 import { useNoraThreadScroll } from "@/hooks/useNoraThreadScroll";
 import type {
   MessageProjectionView,
   TurnChoice,
   TurnReference,
 } from "@/domains/conversation/turn-projection";
+import { admitConversationalComposition } from "@/domains/conversation/conversational-composition";
 import {
   compositionAnchorsChoices,
   compositionAnchorsReferences,
-  compositionOwnsBody,
 } from "@/domains/conversation/visual-composition";

 export type NoraMsg = {
@@ -158,22 +158,46 @@ export function NoraConversation(props: {
                 </div>
                 {isNora ? (
                   <div className="fig-msg-body">
-                    {proj?.visualComposition &&
-                    compositionOwnsBody(proj.visualComposition) ? (
-                      <NoraVisualComposition
-                        composition={proj.visualComposition}
-                        choices={proj.choices}
-                        references={proj.references}
-                        actionable={proj.actionable}
-                        busy={props.busy}
-                        choiceFrozen={props.choiceFrozen}
-                        messageId={m.id}
-                        onChoice={props.onChoice}
-                        onReference={props.onReference}
-                      />
-                    ) : (
-                      <SafeMarkdown content={m.content} />
-                    )}
+                    {(() => {
+                      const admission = proj?.visualComposition
+                        ? admitConversationalComposition(proj.visualComposition, {
+                            canonicalText: m.content,
+                          })
+                        : null;
+                      const policy = admission?.bodyPolicy ?? "markdown_only";
+                      const compositionEl =
+                        proj?.visualComposition && policy !== "markdown_only" ? (
+                          <NoraComposition
+                            composition={proj.visualComposition}
+                            canonicalText={m.content}
+                            choices={proj.choices}
+                            references={proj.references}
+                            actionable={proj.actionable}
+                            busy={props.busy}
+                            choiceFrozen={props.choiceFrozen}
+                            messageId={m.id}
+                            onChoice={props.onChoice}
+                            onReference={props.onReference}
+                          />
+                        ) : null;
+                      if (policy === "substitute" && compositionEl) {
+                        return compositionEl;
+                      }
+                      if (policy === "complement" && compositionEl) {
+                        return (
+                          <>
+                            <SafeMarkdown content={m.content} />
+                            <div
+                              className="fig-comp-complement"
+                              data-testid="nora-composition-complement"
+                            >
+                              {compositionEl}
+                            </div>
+                          </>
+                        );
+                      }
+                      return <SafeMarkdown content={m.content} />;
+                    })()}
                   </div>
                 ) : (
                   <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>

```

### visual-composition.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
index 7a6c2abf..78abe03f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
@@ -13,7 +13,19 @@

 import { z } from "zod";

-export const VISUAL_COMPOSITION_SCHEMA = "e05-visual-composition-v1" as const;
+/** Historical wire — read/compat only for stored turns. */
+export const VISUAL_COMPOSITION_SCHEMA_LEGACY = "e05-visual-composition-v1" as const;
+/** Active write/read contract for new compositions (C-05). */
+export const VISUAL_COMPOSITION_SCHEMA = "conversational-composition-projection-v1" as const;
+export type VisualCompositionSchemaVersion =
+  | typeof VISUAL_COMPOSITION_SCHEMA
+  | typeof VISUAL_COMPOSITION_SCHEMA_LEGACY;
+
+export function isKnownVisualCompositionSchema(
+  v: unknown,
+): v is VisualCompositionSchemaVersion {
+  return v === VISUAL_COMPOSITION_SCHEMA || v === VISUAL_COMPOSITION_SCHEMA_LEGACY;
+}

 export type VisualBlockKind =
   | "comparison"
@@ -166,14 +178,27 @@ export type RelationNode = {
   id: string;
   label: string;
   kind: RelationNodeKind;
+  /** Parallel lane / swimlane id when layoutHint=parallelProcess. */
+  laneId?: string;
+  detail?: string;
 };

+export type RelationEdgeKind =
+  | "depends_on"
+  | "condition_true"
+  | "condition_false"
+  | "sync"
+  | "flow";
+
 export type RelationEdge = {
   from: string;
   to: string;
   label?: string;
+  relation?: RelationEdgeKind;
 };

+export type RelationsLayoutHint = "dependencies" | "decisionTree" | "parallelProcess";
+
 export type RelationsBlock = {
   kind: "relations";
   id: string;
@@ -183,6 +208,8 @@ export type RelationsBlock = {
   textAlternative: string;
   provenance?: VisualProvenance[];
   preferListFallback?: boolean;
+  /** Directed family hint — C-10/11/12. */
+  layoutHint?: RelationsLayoutHint;
   role?: VisualSemanticRole;
   icon?: VisualIconId;
 };
@@ -249,7 +276,7 @@ export type VisualBlock =
   | ReferencesAnchorBlock;

 export type VisualComposition = {
-  schemaVersion: typeof VISUAL_COMPOSITION_SCHEMA;
+  schemaVersion: VisualCompositionSchemaVersion;
   blocks: VisualBlock[];
 };

@@ -299,7 +326,7 @@ const VisualIconAgentSchema = z.enum([
 ]);

 export const VisualCompositionAgentOutputSchema = z.object({
-  schemaVersion: z.literal(VISUAL_COMPOSITION_SCHEMA),
+  schemaVersion: z.enum([VISUAL_COMPOSITION_SCHEMA, VISUAL_COMPOSITION_SCHEMA_LEGACY]),
   blocks: z
     .array(
       z.discriminatedUnion("kind", [
@@ -325,7 +352,7 @@ export const VisualCompositionAgentOutputSchema = z.object({
                 cons: z.array(z.string().max(200)).max(4).optional(),
               }),
             )
-            .max(5),
+            .max(12),
           criteria: z
             .array(
               z.object({
@@ -367,6 +394,9 @@ export const VisualCompositionAgentOutputSchema = z.object({
           id: z.string().max(64),
           title: z.string().max(160),
           textAlternative: z.string().max(2000),
+          layoutHint: z
+            .enum(["dependencies", "decisionTree", "parallelProcess"])
+            .optional(),
           nodes: z
             .array(
               z.object({
@@ -380,18 +410,29 @@ export const VisualCompositionAgentOutputSchema = z.object({
                   "finding",
                   "observation",
                 ]),
+                laneId: z.string().max(64).optional(),
+                detail: z.string().max(400).optional(),
               }),
             )
-            .max(10),
+            .max(12),
           edges: z
             .array(
               z.object({
                 from: z.string().max(64),
                 to: z.string().max(64),
                 label: z.string().max(200).optional(),
+                relation: z
+                  .enum([
+                    "depends_on",
+                    "condition_true",
+                    "condition_false",
+                    "sync",
+                    "flow",
+                  ])
+                  .optional(),
               }),
             )
-            .max(16),
+            .max(20),
           preferListFallback: z.boolean().optional(),
           provenance: z.array(VisualProvenanceAgentSchema).max(4).optional(),
           role: VisualRoleAgentSchema.optional(),
@@ -445,10 +486,10 @@ export type ParseVisualCompositionResult =
   | { ok: false; reason: string };

 const MAX_BLOCKS = 10;
-const MAX_ALTS = 5;
+const MAX_ALTS = 12;
 const MAX_STEPS = 8;
-const MAX_NODES = 10;
-const MAX_EDGES = 16;
+const MAX_NODES = 12;
+const MAX_EDGES = 20;
 const MAX_ITEMS = 8;
 const MAX_PROS_CONS = 4;
 const MAX_CRITERIA = 6;
@@ -868,10 +909,30 @@ function parseRelations(
     const label = fit(labelRaw, MAX_TITLE, ctx);
     if (!nidF || !label) return null;
     ids.add(nidF);
-    nodes.push({ id: nidF, label, kind });
+    let laneId: string | undefined;
+    const laneRaw = asString(n.laneId);
+    if (laneRaw) {
+      laneId = fit(laneRaw, MAX_ID, ctx) ?? undefined;
+      if (!laneId) return null;
+    }
+    let detail: string | undefined;
+    const detailRaw = asString(n.detail);
+    if (detailRaw) {
+      detail = fit(detailRaw, MAX_STR, ctx) ?? undefined;
+      if (!detail) return null;
+    }
+    nodes.push({ id: nidF, label, kind, laneId, detail });
   }
   if (nodes.length < 2) return null;

+  const EDGE_RELATIONS = new Set<RelationEdgeKind>([
+    "depends_on",
+    "condition_true",
+    "condition_false",
+    "sync",
+    "flow",
+  ]);
+
   const edges: RelationEdge[] = [];
   if (o.edges !== undefined && o.edges !== null) {
     if (!Array.isArray(o.edges)) return null;
@@ -895,15 +956,34 @@ function parseRelations(
         label = fit(labelRaw, 80, ctx) ?? undefined;
         if (!label) return null;
       }
-      edges.push({ from: fromF, to: toF, label });
+      let relation: RelationEdgeKind | undefined;
+      const relRaw = asString(e.relation) as RelationEdgeKind | null;
+      if (relRaw) {
+        if (!EDGE_RELATIONS.has(relRaw)) return null;
+        relation = relRaw;
+      }
+      edges.push({ from: fromF, to: toF, label, relation });
     }
   }

   const provenance = parseProvenance(o.provenance, ctx);
   if (provenance === "FAIL") return null;

+  let layoutHint: RelationsLayoutHint | undefined;
+  const hintRaw = asString(o.layoutHint);
+  if (hintRaw) {
+    if (
+      hintRaw !== "dependencies" &&
+      hintRaw !== "decisionTree" &&
+      hintRaw !== "parallelProcess"
+    ) {
+      return null;
+    }
+    layoutHint = hintRaw;
+  }
+
   const preferListFallback =
-    Boolean(o.preferListFallback) || nodes.length > 7 || edges.length > 10;
+    Boolean(o.preferListFallback) || nodes.length > 10 || edges.length > 14;

   return {
     kind: "relations",
@@ -914,6 +994,7 @@ function parseRelations(
     textAlternative,
     provenance: provenance ?? undefined,
     preferListFallback,
+    layoutHint,
     role: parseRole(o.role) ?? "information",
     icon: parseIcon(o.icon),
   };
@@ -1072,9 +1153,10 @@ export function parseVisualCompositionDetailed(raw: unknown): ParseVisualComposi
     return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
   }
   const o = raw as Record<string, unknown>;
-  if (o.schemaVersion !== VISUAL_COMPOSITION_SCHEMA) {
+  if (!isKnownVisualCompositionSchema(o.schemaVersion)) {
     return { ok: false, reason: "VISUAL_COMPOSITION_SCHEMA_MISMATCH" };
   }
+  const schemaVersion = o.schemaVersion;
   if (!Array.isArray(o.blocks)) {
     return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
   }
@@ -1115,7 +1197,8 @@ export function parseVisualCompositionDetailed(raw: unknown): ParseVisualComposi
   }
   return {
     ok: true,
-    value: { schemaVersion: VISUAL_COMPOSITION_SCHEMA, blocks },
+    // Preserve legacy schemaVersion on historical payloads; new writes use active schema.
+    value: { schemaVersion, blocks },
   };
 }

```

### nora-adapter.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 1d7949f2..9fd57296 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -547,7 +547,7 @@ async function runLiveWithTools(
     "- Lorsque tu réévalues les questions ouvertes (QUALIFIED ou NEEDS_CLARIFICATION sur ce périmètre) : TOUJOURS renseigner clarifications (éventuellement []). Ne l'omets que si tu n'as pas réévalué ce périmètre.",
     "- continueChoices (optionnel) = propositions de POURSUITE conversationnelle (ex. « Approfondir B ») avec id, label et transmitText. NE PAS y recopier clarifications. Omettre ou [] si aucune poursuite utile.",
     "- resourceReferences (optionnel) = références consultables document/git/external — ce ne sont PAS des choix de poursuite.",
-    "- visualComposition (optionnel, schema e05-visual-composition-v1) = composition ordonnée de blocs text|comparison|sequence|relations|synthesis. Omettre pour une réponse purement textuelle. N'invente jamais de données manquantes ; chaque bloc graphique DOIT fournir textAlternative. Jamais de HTML/CSS/JS. Ne crée aucun effet métier par la seule présence d'un bloc.",
+    "- visualComposition (optionnel, schema conversational-composition-projection-v1 ; lecture historique e05-visual-composition-v1) = composition ordonnée de blocs text|comparison|sequence|relations|synthesis. Les titres/libellés des blocs graphiques DOIVENT apparaître aussi dans replyDraft. Relations : layoutHint optionnel dependencies|decisionTree|parallelProcess ; edges.relation optionnel depends_on|condition_true|condition_false|sync|flow ; nodes.laneId pour voies parallèles. Omettre pour une réponse purement textuelle. N'invente jamais de données manquantes ; chaque bloc graphique DOIT fournir textAlternative. Jamais de HTML/CSS/JS. Ne crée aucun effet métier par la seule présence d'un bloc.",
     "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
     "- preparationAssessmentExplanation = justification qualitative courte fondée sur les acquis réels ; respecter les négations (« n'est pas suffisant » ≠ BASE_SUFFICIENTE).",
     "- Si tu n'as pas d'appréciation fiable : omets preparationAssessment (ne pas inventer BASE_SUFFICIENTE).",

```

### fixture-semantic-qualify.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 05ae9e30..8384dad3 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -643,7 +643,13 @@ register(
   E05_S2_DIAGNOSTIC,
   dialogue(
     "Diagnostic coordination multi-sites — établi vs hypothétique",
-    "Diagnostic du besoin de coordination (fallback textuel).",
+    [
+      "Diagnostic du besoin de coordination.",
+      "Éléments : Pratiques locales divergentes ; Rôles d'arbitrage flous ;",
+      "hypothèse Friction de coordination ; Impact réel non mesuré.",
+      "Suite : Cartographier les pratiques par site ; Identifier le porteur d'arbitrage ;",
+      "Ne pas conclure à un dysfonctionnement chiffré.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_RELATIONS", "S2"],
     {
       clarifications: [
@@ -687,6 +693,7 @@ register(
             id: "s2-rel",
             title: "Éléments liés — sans causalité inventée",
             role: "information",
+            layoutHint: "dependencies",
             nodes: [
               { id: "o1", label: "Pratiques locales divergentes", kind: "observation" },
               { id: "o2", label: "Rôles d'arbitrage flous", kind: "observation" },
@@ -694,8 +701,18 @@ register(
               { id: "u1", label: "Impact réel non mesuré", kind: "unknown" },
             ],
             edges: [
-              { from: "o1", to: "h1", label: "peut contribuer" },
-              { from: "o2", to: "h1", label: "peut contribuer" },
+              {
+                from: "o1",
+                to: "h1",
+                label: "peut contribuer",
+                relation: "depends_on",
+              },
+              {
+                from: "o2",
+                to: "h1",
+                label: "peut contribuer",
+                relation: "depends_on",
+              },
             ],
             textAlternative:
               "Observations : pratiques divergentes et rôles flous. Hypothèse : friction de coordination. Inconnue : impact réel non mesuré.",
@@ -738,7 +755,13 @@ register(
   E05_S3_COMPARISON,
   dialogue(
     "Comparaison déploiement progressif vs simultané",
-    "Comparaison des approches (fallback).",
+    [
+      "Comparaison Progressive vs simultanée.",
+      "Déploiement progressif : étendre site par site après apprentissage local.",
+      "Déploiement simultané : aligner tous les sites dans la même fenêtre.",
+      "Critères : Risque de conduite, Apprentissage, Dépendance aux rôles clarifiés.",
+      "Si les responsabilités d'arbitrage ne sont pas encore claires, préférer une approche progressive.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_COMPARISON", "S3"],
     {
       continueChoices: [
@@ -845,7 +868,13 @@ register(
   E05_S4_TRAJECTORY,
   dialogue(
     "Parcours de clarification avant travaux",
-    "Parcours proposé (fallback).",
+    [
+      "Parcours Clarifier avant de lancer :",
+      "Partager le constat de coordination ;",
+      "Clarifier les responsabilités d'arbitrage ;",
+      "Choisir progressive ou simultanée ;",
+      "Préparer la première vague / fenêtre.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_SEQUENCE", "S4"],
     {
       visualComposition: {
@@ -897,7 +926,13 @@ register(
   E05_S5_COMPOSITE,
   dialogue(
     "Recommandation composite conditionnelle",
-    "Recommandation composite (fallback textuel).",
+    [
+      "Recommandation composite. Points saillants :",
+      "Clarifier l'arbitrage entre sites ;",
+      "Pratiques locales divergentes ;",
+      "Déploiement simultané trop tôt.",
+      "Rappel des options : Progressive ; Simultanée.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_COMPOSITE", "S5"],
     {
       clarifications: [

```

### tokens.css

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 8623f598..084a5b70 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -2163,6 +2163,212 @@
   }
 }

+/* Conversational composition v1 — adaptive presentation (CV-*) */
+.fig-comp-composition {
+  container-type: inline-size;
+  container-name: nora-composition;
+}
+
+.fig-comp-title {
+  overflow-wrap: anywhere;
+  word-break: break-word;
+}
+
+.fig-comp-alt h4,
+.fig-comp-alt p,
+.fig-comp-step h4,
+.fig-comp-fallback-text,
+.fig-comp-matrix th,
+.fig-comp-matrix td {
+  overflow-wrap: anywhere;
+  word-break: break-word;
+  white-space: normal;
+}
+
+.fig-comp-comparison-stack {
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+}
+
+.fig-comp-matrix-details {
+  margin-top: 12px;
+}
+
+.fig-comp-matrix-details-title {
+  margin: 0 0 8px;
+  font-size: 13px;
+  font-weight: 600;
+  color: var(--fig-muted);
+}
+
+.fig-comp-relations-label {
+  overflow-wrap: anywhere;
+  word-break: break-word;
+}
+
+.fig-comp-complement {
+  margin-top: 12px;
+}
+
+.fig-comp-authority-note {
+  margin: 10px 0 0;
+  font-size: 12px;
+  color: var(--fig-quiet);
+}
+
+.fig-comp-deps-nodes,
+.fig-comp-parallel-tasks,
+.fig-comp-tree-root,
+.fig-comp-tree-branches {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+}
+
+.fig-comp-deps-node,
+.fig-comp-tree-node {
+  display: flex;
+  gap: 8px;
+  align-items: flex-start;
+  padding: 8px 10px;
+  margin: 0 0 8px;
+  border: 1px solid var(--fig-line);
+  border-radius: 8px;
+  background: color-mix(in srgb, var(--fig-panel) 88%, transparent);
+}
+
+.fig-comp-deps-edges {
+  list-style: none;
+  margin: 8px 0 0;
+  padding: 0;
+}
+
+.fig-comp-deps-edges li {
+  margin: 0 0 6px;
+  overflow-wrap: anywhere;
+}
+
+.fig-comp-deps-arrow {
+  margin: 0 6px;
+  color: var(--fig-muted);
+}
+
+.fig-comp-parallel-lanes {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
+  gap: 12px;
+}
+
+.fig-comp-parallel-lane {
+  border: 1px solid var(--fig-line);
+  border-radius: 8px;
+  padding: 10px 12px;
+}
+
+.fig-comp-parallel-lane-title {
+  margin: 0 0 8px;
+  font-size: 13px;
+  color: var(--fig-muted);
+}
+
+.fig-comp-parallel-sync {
+  margin-top: 10px;
+  overflow-wrap: anywhere;
+}
+
+.fig-comp-tree-branches {
+  margin: 6px 0 0 16px;
+  padding-left: 10px;
+  border-left: 2px solid var(--fig-line);
+}
+
+.fig-comp-tree-condition {
+  display: block;
+  margin: 4px 0;
+  font-size: 12px;
+  color: var(--fig-muted);
+}
+
+.fig-comp-relations-detail {
+  color: var(--fig-muted);
+  overflow-wrap: anywhere;
+}
+
+.fig-comp-comparison-cards {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
+  gap: 12px;
+}
+
+.fig-comp-matrix-wrap {
+  overflow-x: auto;
+  max-width: 100%;
+  -webkit-overflow-scrolling: touch;
+}
+
+.fig-comp-matrix {
+  width: max-content;
+  min-width: 100%;
+  border-collapse: collapse;
+}
+
+.fig-comp-matrix th,
+.fig-comp-matrix td {
+  padding: 8px 10px;
+  text-align: left;
+  vertical-align: top;
+  white-space: normal;
+}
+
+.fig-comp-steps-vertical {
+  display: flex;
+  flex-direction: column;
+  gap: 0;
+}
+
+.fig-comp-steps-horizontal {
+  display: flex;
+  flex-direction: row;
+  flex-wrap: wrap;
+  gap: 12px;
+  align-items: stretch;
+}
+
+.fig-comp-steps-horizontal > .fig-comp-step {
+  flex: 1 1 180px;
+  min-width: min(100%, 180px);
+}
+
+.fig-comp-relations-svg {
+  width: 100%;
+  max-width: 100%;
+  height: auto;
+}
+
+.fig-comp-relations-svg .fig-visual-node-label {
+  font-size: 10px;
+}
+
+.fig-comp-block-fallback,
+.fig-comp-fallback-text {
+  margin: 0;
+  padding: 10px 12px;
+  border-left: 3px solid var(--fig-line);
+  color: var(--fig-ink);
+  background: color-mix(in srgb, var(--fig-panel) 80%, transparent);
+}
+
+@container nora-composition (max-width: 560px) {
+  .fig-comp-comparison-cards {
+    grid-template-columns: 1fr;
+  }
+
+  .fig-comp-steps-horizontal {
+    flex-direction: column;
+  }
+}
+
 .project-unavailable {
   display: flex;
   align-items: flex-start;

```

### delivery-history.md

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 7b64d566..8a64de63 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,49 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-18-COMPOSITION-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~03:18 CET |
+| Macro-lot | Convergence composition conversationnelle (doc 06 C-01–C-22) |
+| Type | Cycle Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
+| P0 C-04 | Graphiques : jamais substitute ; complement seulement si ancres replyDraft ; sinon markdown_only |
+| P1 C-05/14 | Schema write `conversational-composition-projection-v1` ; dual-read e05 ; MAX_ALTS=12 |
+| P1 C-10/11/12 | layoutHint + RelationsDirectedView CSS (deps/tree/parallel) ; ELK non introduit |
+| Preuves | Vitest composition 65 PASS (admission+fidelity+E05+schema) ; tsc 32/0 touched ; T02 PASS |
+| Verdict | (voir Review Pack Full convergence) |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-ADAPTATIVE-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~02:25 CET |
+| Macro-lot | Correction intégrée composition conversationnelle (réponse STOP ChatGPT) |
+| Type | Cycle Delivery · Critical · RUN correctif dans EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
+| Corrections | A matrice+détails ; B relations list only (SVG différé) ; C repli exhaustif ; D bodyPolicy substitute/complement ; E capacité wire honnête ; F ACK PREEXISTING PROVEN |
+| Preuves | Vitest 57 PASS ; tsc 32 préexistantes / 0 touched ; T02 PASS + captures corrective ; ACK FAIL identique sur tip clean `a783f014` |
+| Verdict | supersédé par cycle convergence |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-ADAPTATIVE-V1
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~01:22 CET |
+| Macro-lot | Remplacement mécanisme graphique expérimental E05 → composition conversationnelle adaptative |
+| Type | Cycle Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
+| Architecture | Strategy B V1 — `replyDraft` canonique ; wire `e05-visual-composition-v1` conservé ; admission `conversational-composition-v1` ; renderer `NoraComposition` |
+| Scope | admission/variantes CV-* ; `NoraComposition` + CSS container queries ; alias `NoraVisualComposition` ; wire `NoraConversation` ; tests unit ; preuves Figma Page 06 ; matrice CV-T |
+| Non-scope | Migration DB ; Strategy A sections sémantiques ; elkjs/RF/ECharts ; push produit ; RECETTE/STABLE ; LIVE OpenAI |
+| Preuves | Vitest admission+E05+schema+projection 54 PASS ; Playwright ensemble05 5 PASS / 2 FAIL (C2/ACK hors renderer) ; T02 composition PASS |
+| Verdict | `READY WITH RESERVES` — supersédé par STOP ChatGPT puis correctif |
+
+
 ## delivery_id: DELIV-2026-11-17-ML4D-R05-COGNITIVE-RECOVERY

 | Field | Value |

```

### ensemble05-travail-nora.spec.ts

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
index 37b839c4..af559ade 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
@@ -566,6 +566,11 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     await ask(E05_S2_DIAGNOSTIC);
     await expect(page.getByTestId("nora-visual-relations")).toBeVisible({ timeout: 45000 });
     await expect(page.getByTestId("nora-visual-icon").first()).toBeVisible();
+    // C-10 — directed CSS layout (or list fallback); never fixed-coordinate SVG.
+    const rel = page.getByTestId("nora-visual-relations").last();
+    const layout = await rel.getAttribute("data-layout");
+    expect(layout === "directed" || layout === "structured-list").toBeTruthy();
+    await expect(rel).toHaveAttribute("data-layout-hint", "dependencies");
     await expect(page.getByTestId("nora-visual-composition").last()).toHaveAttribute(
       "data-owns-body",
       "1",
@@ -574,6 +579,10 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
       path: path.join(evidenceDir, "runtime-s2-diagnostic-1440.png"),
       fullPage: false,
     });
+    await page.screenshot({
+      path: path.join(evidenceDir, "corrective-runtime-relations-list-1440.png"),
+      fullPage: false,
+    });

     // S3 — comparison + recommendation + choice/ref anchors + provenance P1-B.
     await ask(E05_S3_COMPARISON);
@@ -593,6 +602,8 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     await expect(s3.getByTestId("nora-visual-prov-link")).toHaveCount(1);
     await expect(s3.getByTestId("nora-ref-link")).toHaveCount(0);
     await expect(s3.getByText(/Consulter · Note de cadrage coordination/i)).toHaveCount(1);
+    // Corrective A — alternative substance remains visible (cards or matrix+details).
+    await expect(s3.getByTestId("nora-composition-alt-detail").first()).toBeVisible();
     await page.screenshot({
       path: path.join(evidenceDir, "runtime-visual-comparison-1440.png"),
       fullPage: false,
@@ -601,6 +612,10 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
       path: path.join(evidenceDir, "runtime-s3-provenance-1440.png"),
       fullPage: false,
     });
+    await page.screenshot({
+      path: path.join(evidenceDir, "corrective-runtime-comparison-1440.png"),
+      fullPage: false,
+    });

     // S4 — trajectory / sequence with human-readable dependencies (V02).
     await ask(E05_S4_TRAJECTORY);

```

### NoraVisualComposition.tsx

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraVisualComposition.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraVisualComposition.tsx
index 707e39f9..1dc6ec66 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraVisualComposition.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraVisualComposition.tsx
@@ -1,634 +1,12 @@
 "use client";

-import { SafeMarkdown } from "@/components/SafeMarkdown";
-import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
-import type {
-  ComparisonBlock,
-  RelationsBlock,
-  SequenceBlock,
-  SynthesisBlock,
-  TextBlock,
-  VisualBlock,
-  VisualComposition,
-  VisualProvenance,
-} from "@/domains/conversation/visual-composition";
-import {
-  canonicalReferenceKey,
-  compositionAnchorsChoices,
-  compositionAnchorsReferences,
-  partitionChoicesForAnchors,
-  partitionReferencesForAnchors,
-  provenanceConsultableKeys,
-  resolveProvenanceReference,
-} from "@/domains/conversation/visual-composition";
-import type { TurnChoice, TurnReference } from "@/domains/conversation/turn-projection";
-
-function Provenance(props: {
-  items?: VisualProvenance[];
-  canonicalReferences?: TurnReference[];
-  onReference?: (ref: TurnReference) => void;
-}) {
-  if (!props.items?.length) return null;
-  const canonical = props.canonicalReferences ?? [];
-  return (
-    <ul className="fig-visual-provenance" data-testid="nora-visual-provenance">
-      {props.items.map((p, i) => {
-        const resolved = resolveProvenanceReference(p, canonical);
-        return (
-          <li key={`${p.label}-${i}`} data-consultable={resolved ? "1" : "0"}>
-            {resolved && props.onReference ? (
-              <button
-                type="button"
-                className="fig-nora-ref-link"
-                data-testid="nora-visual-prov-link"
-                data-ref-kind={resolved.kind}
-                onClick={() => props.onReference?.(resolved)}
-              >
-                Consulter · {resolved.label}
-                {resolved.available === false ? " (à vérifier)" : ""}
-              </button>
-            ) : (
-              <span>
-                {p.label}
-                <span className="fig-visual-provenance-note"> — mention descriptive</span>
-              </span>
-            )}
-            {p.note ? <span className="fig-visual-provenance-note"> — {p.note}</span> : null}
-          </li>
-        );
-      })}
-    </ul>
-  );
-}
-
-function Heading(props: {
-  title: string;
-  role?: TextBlock["role"];
-  icon?: TextBlock["icon"];
-}) {
-  return (
-    <h3 className="fig-visual-title">
-      <NoraSemanticIcon role={props.role} icon={props.icon} />
-      <span>{props.title}</span>
-    </h3>
-  );
-}
-
-function ComparisonView({
-  block,
-  canonicalReferences,
-  onReference,
-}: {
-  block: ComparisonBlock;
-  canonicalReferences?: TurnReference[];
-  onReference?: (ref: TurnReference) => void;
-}) {
-  const showMatrix = Boolean(block.criteria?.length);
-  // Prefer matrix when criteria dominate; avoid repeating same facts as cards+matrix.
-  const showCards = !showMatrix || block.alternatives.some((a) => (a.pros?.length ?? 0) + (a.cons?.length ?? 0) > 0);
-  return (
-    <section
-      className="fig-visual-block fig-visual-comparison"
-      data-testid="nora-visual-comparison"
-      data-block-kind="comparison"
-      data-block-id={block.id}
-      aria-label={block.title}
-    >
-      <Heading title={block.title} role={block.role} icon={block.icon} />
-      {showCards ? (
-        <div className="fig-visual-comparison-grid">
-          {block.alternatives.map((alt) => (
-            <article key={alt.id} className="fig-visual-alt" data-alt-id={alt.id}>
-              <h4>{alt.title}</h4>
-              <p>{alt.summary}</p>
-              {alt.pros?.length ? (
-                <ul className="fig-visual-pros">
-                  {alt.pros.map((p) => (
-                    <li key={p}>{p}</li>
-                  ))}
-                </ul>
-              ) : null}
-              {alt.cons?.length ? (
-                <ul className="fig-visual-cons">
-                  {alt.cons.map((c) => (
-                    <li key={c}>{c}</li>
-                  ))}
-                </ul>
-              ) : null}
-            </article>
-          ))}
-        </div>
-      ) : null}
-      {showMatrix ? (
-        <div className="fig-visual-matrix-wrap">
-          <table className="fig-visual-matrix">
-            <caption className="sr-only">Critères de comparaison</caption>
-            <thead>
-              <tr>
-                <th scope="col">Critère</th>
-                {block.alternatives.map((a) => (
-                  <th key={a.id} scope="col">
-                    {a.title}
-                  </th>
-                ))}
-              </tr>
-            </thead>
-            <tbody>
-              {block.criteria!.map((c) => (
-                <tr key={c.id}>
-                  <th scope="row">{c.label}</th>
-                  {block.alternatives.map((a) => (
-                    <td key={a.id}>{c.values[a.id] ?? "—"}</td>
-                  ))}
-                </tr>
-              ))}
-            </tbody>
-          </table>
-        </div>
-      ) : null}
-      {block.recommendation ? (
-        <div className="fig-visual-recommendation" data-testid="nora-visual-recommendation">
-          <NoraSemanticIcon role="recommendation" />
-          <div className="fig-visual-recommendation-body">
-            <span className="fig-visual-recommendation-label">Recommandation (avis Nora)</span>
-            <SafeMarkdown content={block.recommendation} className="fig-visual-inline-md" />
-          </div>
-        </div>
-      ) : null}
-      <p className="sr-only">{block.textAlternative}</p>
-      <Provenance
-        items={block.provenance}
-        canonicalReferences={canonicalReferences}
-        onReference={onReference}
-      />
-    </section>
-  );
-}
-
-function SequenceView({
-  block,
-  canonicalReferences,
-  onReference,
-}: {
-  block: SequenceBlock;
-  canonicalReferences?: TurnReference[];
-  onReference?: (ref: TurnReference) => void;
-}) {
-  const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
-  return (
-    <section
-      className="fig-visual-block fig-visual-sequence"
-      data-testid="nora-visual-sequence"
-      data-block-kind="sequence"
-      data-block-id={block.id}
-      aria-label={block.title}
-    >
-      <Heading title={block.title} role={block.role ?? "step"} icon={block.icon} />
-      <ol className="fig-visual-steps">
-        {block.steps.map((step, idx) => (
-          <li key={step.id} className="fig-visual-step" data-step-id={step.id}>
-            <div className="fig-visual-step-marker" aria-hidden>
-              {idx + 1}
-            </div>
-            <div className="fig-visual-step-body">
-              <h4>
-                <NoraSemanticIcon role={step.role ?? "step"} />
-                {step.title}
-              </h4>
-              {step.detail ? (
-                <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
-              ) : null}
-              {step.dependsOn?.length ? (
-                <p className="fig-visual-step-deps" data-testid="nora-visual-step-deps">
-                  <NoraSemanticIcon role="dependency" />
-                  Dépend de :{" "}
-                  {step.dependsOn
-                    .map((id) => titleById.get(id) ?? id)
-                    .join(", ")}
-                </p>
-              ) : null}
-              {step.dateLabel ? (
-                <p className="fig-visual-step-date">{step.dateLabel}</p>
-              ) : null}
-            </div>
-            {idx < block.steps.length - 1 ? (
-              <div className="fig-visual-step-connector" aria-hidden />
-            ) : null}
-          </li>
-        ))}
-      </ol>
-      <p className="sr-only">{block.textAlternative}</p>
-      <Provenance
-        items={block.provenance}
-        canonicalReferences={canonicalReferences}
-        onReference={onReference}
-      />
-    </section>
-  );
-}
-
-function RelationsView({
-  block,
-  canonicalReferences,
-  onReference,
-}: {
-  block: RelationsBlock;
-  canonicalReferences?: TurnReference[];
-  onReference?: (ref: TurnReference) => void;
-}) {
-  const useSvg = !block.preferListFallback && block.nodes.length <= 7;
-  const w = 360;
-  const h = 220;
-  const cx = w / 2;
-  const cy = h / 2;
-  const r = Math.min(w, h) * 0.34;
-  const positions = block.nodes.map((n, i) => {
-    const angle = (Math.PI * 2 * i) / block.nodes.length - Math.PI / 2;
-    return {
-      id: n.id,
-      x: cx + r * Math.cos(angle),
-      y: cy + r * Math.sin(angle),
-      node: n,
-    };
-  });
-  const byId = new Map(positions.map((p) => [p.id, p]));
-
-  return (
-    <section
-      className="fig-visual-block fig-visual-relations"
-      data-testid="nora-visual-relations"
-      data-block-kind="relations"
-      data-block-id={block.id}
-      data-fallback={useSvg ? "0" : "1"}
-      aria-label={block.title}
-    >
-      <Heading title={block.title} role={block.role} icon={block.icon} />
-      {useSvg ? (
-        <svg
-          className="fig-visual-relations-svg"
-          viewBox={`0 0 ${w} ${h}`}
-          role="img"
-          aria-label={block.textAlternative}
-        >
-          {block.edges.map((e, i) => {
-            const a = byId.get(e.from);
-            const b = byId.get(e.to);
-            if (!a || !b) return null;
-            return (
-              <g key={`${e.from}-${e.to}-${i}`}>
-                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="fig-visual-edge" />
-                {e.label ? (
-                  <text
-                    x={(a.x + b.x) / 2}
-                    y={(a.y + b.y) / 2 - 4}
-                    className="fig-visual-edge-label"
-                  >
-                    {e.label}
-                  </text>
-                ) : null}
-              </g>
-            );
-          })}
-          {positions.map((p) => (
-            <g key={p.id}>
-              <circle
-                cx={p.x}
-                cy={p.y}
-                r={28}
-                className={`fig-visual-node fig-visual-node-${p.node.kind}`}
-              />
-              <text x={p.x} y={p.y + 4} textAnchor="middle" className="fig-visual-node-label">
-                {p.node.label.length > 18 ? `${p.node.label.slice(0, 16)}…` : p.node.label}
-              </text>
-            </g>
-          ))}
-        </svg>
-      ) : null}
-      <ul className="fig-visual-relations-list">
-        {block.nodes.map((n) => (
-          <li key={n.id} data-node-kind={n.kind}>
-            <NoraSemanticIcon
-              role={
-                n.kind === "hypothesis"
-                  ? "hypothesis"
-                  : n.kind === "observation"
-                    ? "observation"
-                    : n.kind === "fact" || n.kind === "finding"
-                      ? "fact"
-                      : "information"
-              }
-            />
-            <span className={`fig-visual-tone fig-visual-tone-${n.kind}`}>{n.kind}</span>
-            {n.label}
-          </li>
-        ))}
-      </ul>
-      {block.edges.length ? (
-        <ul className="fig-visual-relations-edges">
-          {block.edges.map((e, i) => (
-            <li key={`${e.from}-${e.to}-${i}`}>
-              {e.from} → {e.to}
-              {e.label ? ` (${e.label})` : ""}
-            </li>
-          ))}
-        </ul>
-      ) : null}
-      <p className="sr-only">{block.textAlternative}</p>
-      <Provenance
-        items={block.provenance}
-        canonicalReferences={canonicalReferences}
-        onReference={onReference}
-      />
-    </section>
-  );
-}
-
-function SynthesisView({
-  block,
-  canonicalReferences,
-  onReference,
-}: {
-  block: SynthesisBlock;
-  canonicalReferences?: TurnReference[];
-  onReference?: (ref: TurnReference) => void;
-}) {
-  return (
-    <section
-      className="fig-visual-block fig-visual-synthesis"
-      data-testid="nora-visual-synthesis"
-      data-block-kind="synthesis"
-      data-block-id={block.id}
-      aria-label={block.title}
-    >
-      <Heading title={block.title} role={block.role} icon={block.icon} />
-      <ul className="fig-visual-synthesis-list">
-        {block.items.map((it) => {
-          const role =
-            it.role ??
-            (it.tone === "risk"
-              ? "risk"
-              : it.tone === "hypothesis"
-                ? "hypothesis"
-                : it.tone === "observation"
-                  ? "observation"
-                  : it.tone === "priority"
-                    ? "recommendation"
-                    : "information");
-          return (
-            <li
-              key={it.id}
-              data-tone={it.tone}
-              className={`fig-visual-synth-item fig-visual-tone-${it.tone}`}
-            >
-              <NoraSemanticIcon role={role} icon={it.icon} />
-              <div>
-                <strong>{it.label}</strong>
-                {it.detail ? (
-                  <SafeMarkdown content={it.detail} className="fig-visual-inline-md" />
-                ) : null}
-              </div>
-            </li>
-          );
-        })}
-      </ul>
-      <p className="sr-only">{block.textAlternative}</p>
-      <Provenance
-        items={block.provenance}
-        canonicalReferences={canonicalReferences}
-        onReference={onReference}
-      />
-    </section>
-  );
-}
-
-function TextView({ block }: { block: TextBlock }) {
-  return (
-    <div
-      className={`fig-visual-block fig-visual-text${block.role ? ` fig-visual-text-${block.role}` : ""}`}
-      data-testid="nora-visual-text"
-      data-block-kind="text"
-      data-role={block.role ?? ""}
-    >
-      {block.role || block.icon ? (
-        <div className="fig-visual-text-head">
-          <NoraSemanticIcon role={block.role} icon={block.icon} />
-        </div>
-      ) : null}
-      <SafeMarkdown content={block.markdown} />
-    </div>
-  );
-}
-
-function ChoicesCluster(props: {
-  choices: TurnChoice[];
-  actionable?: boolean;
-  busy?: boolean;
-  choiceFrozen?: boolean;
-  messageId?: string;
-  residual?: boolean;
-  onChoice?: (choice: TurnChoice, messageId: string) => void;
-  anchorId?: string;
-}) {
-  if (!props.choices.length) return null;
-  return (
-    <div
-      className="fig-nora-choices fig-visual-choices-anchor"
-      data-testid="nora-choices"
-      data-block-kind="choices"
-      data-residual={props.residual ? "1" : "0"}
-      data-actionable={props.actionable ? "1" : "0"}
-      data-message-id={props.messageId}
-      data-anchor-id={props.anchorId ?? ""}
-    >
-      {props.choices.map((c) => (
-        <button
-          key={c.id}
-          type="button"
-          className="fig-nora-choice"
-          data-testid="nora-choice"
-          data-choice-id={c.id}
-          disabled={!props.actionable || props.busy || props.choiceFrozen}
-          onClick={() => props.messageId && props.onChoice?.(c, props.messageId)}
-        >
-          {c.label}
-        </button>
-      ))}
-      {!props.actionable ? (
-        <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
-          Propositions expirées — consultation seule.
-        </p>
-      ) : null}
-    </div>
-  );
-}
-
-function RefsCluster(props: {
-  references: TurnReference[];
-  residual?: boolean;
-  anchorId?: string;
-  onReference?: (ref: TurnReference) => void;
-}) {
-  if (!props.references.length) return null;
-  return (
-    <ul
-      className="fig-nora-refs fig-visual-refs-anchor"
-      data-testid="nora-refs"
-      data-block-kind="references"
-      data-residual={props.residual ? "1" : "0"}
-      data-anchor-id={props.anchorId ?? ""}
-    >
-      {props.references.map((r, i) => (
-        <li key={`${r.kind}-${r.resourceId ?? r.path ?? r.href ?? i}`}>
-          <button
-            type="button"
-            className="fig-nora-ref-link"
-            data-testid="nora-ref-link"
-            data-ref-kind={r.kind}
-            onClick={() => props.onReference?.(r)}
-          >
-            Consulter · {r.label}
-            {r.available === false ? " (à vérifier)" : ""}
-          </button>
-        </li>
-      ))}
-    </ul>
-  );
-}
-
-export function NoraVisualComposition(props: {
-  composition: VisualComposition;
-  choices?: TurnChoice[];
-  references?: TurnReference[];
-  actionable?: boolean;
-  busy?: boolean;
-  choiceFrozen?: boolean;
-  messageId?: string;
-  onChoice?: (choice: TurnChoice, messageId: string) => void;
-  onReference?: (ref: TurnReference) => void;
-}) {
-  const choices = props.choices ?? [];
-  const references = props.references ?? [];
-  const choiceParts = partitionChoicesForAnchors(props.composition.blocks, choices);
-  const refParts = partitionReferencesForAnchors(props.composition.blocks, references);
-  // Provenance consultable wins first; refs clusters skip the same canonical identity.
-  const alreadyConsultable = provenanceConsultableKeys(
-    props.composition.blocks,
-    references,
-  );
-  const dedupeRefs = (list: TurnReference[]) =>
-    list.filter((r) => !alreadyConsultable.has(canonicalReferenceKey(r)));
-
-  return (
-    <div
-      className="fig-visual-composition"
-      data-testid="nora-visual-composition"
-      data-schema={props.composition.schemaVersion}
-      data-owns-body="1"
-    >
-      {props.composition.blocks.map((b) => {
-        if (b.kind === "choices") {
-          return (
-            <ChoicesCluster
-              key={b.id}
-              choices={choiceParts.byAnchorId.get(b.id) ?? []}
-              actionable={props.actionable}
-              busy={props.busy}
-              choiceFrozen={props.choiceFrozen}
-              messageId={props.messageId}
-              onChoice={props.onChoice}
-              anchorId={b.id}
-            />
-          );
-        }
-        if (b.kind === "references") {
-          return (
-            <RefsCluster
-              key={b.id}
-              references={dedupeRefs(refParts.byAnchorId.get(b.id) ?? [])}
-              onReference={props.onReference}
-              anchorId={b.id}
-            />
-          );
-        }
-        return (
-          <BlockView
-            key={b.id}
-            block={b}
-            canonicalReferences={references}
-            onReference={props.onReference}
-          />
-        );
-      })}
-      {/* Residuals only when anchors exist — otherwise NoraConversation footer owns them. */}
-      {compositionAnchorsChoices(props.composition) ? (
-        <ChoicesCluster
-          choices={choiceParts.residual}
-          actionable={props.actionable}
-          busy={props.busy}
-          choiceFrozen={props.choiceFrozen}
-          messageId={props.messageId}
-          onChoice={props.onChoice}
-          residual
-          anchorId="residual-choices"
-        />
-      ) : null}
-      {compositionAnchorsReferences(props.composition) ? (
-        <RefsCluster
-          references={dedupeRefs(refParts.residual)}
-          onReference={props.onReference}
-          residual
-          anchorId="residual-references"
-        />
-      ) : null}
-    </div>
-  );
-}
-
-function BlockView({
-  block,
-  canonicalReferences,
-  onReference,
-}: {
-  block: VisualBlock;
-  canonicalReferences?: TurnReference[];
-  onReference?: (ref: TurnReference) => void;
-}) {
-  switch (block.kind) {
-    case "comparison":
-      return (
-        <ComparisonView
-          block={block}
-          canonicalReferences={canonicalReferences}
-          onReference={onReference}
-        />
-      );
-    case "sequence":
-      return (
-        <SequenceView
-          block={block}
-          canonicalReferences={canonicalReferences}
-          onReference={onReference}
-        />
-      );
-    case "relations":
-      return (
-        <RelationsView
-          block={block}
-          canonicalReferences={canonicalReferences}
-          onReference={onReference}
-        />
-      );
-    case "synthesis":
-      return (
-        <SynthesisView
-          block={block}
-          canonicalReferences={canonicalReferences}
-          onReference={onReference}
-        />
-      );
-    case "text":
-      return <TextView block={block} />;
-    default:
-      return null;
-  }
-}
+/**
+ * Compatibility alias — experimental E05 renderer replaced by NoraComposition.
+ * Keep export path stable for any residual imports; dual testids preserved.
+ */
+
+export {
+  NoraComposition as NoraVisualComposition,
+  NoraComposition,
+  type NoraCompositionProps,
+} from "@/components/figma/NoraComposition";

```

---

## 8. Tests

| Suite | Résultat |
| --- | --- |
| Vitest admission+fidelity+E05+projection+schema | **65 PASS** (11+7+20+12+15) |
| tsc --noEmit | **32** préexistantes ; **0** touched |
| Playwright T02 | **PASS** |
| ACK e2e | non rejoués ce cycle ; qualification PREEXISTING PROVEN cycle antérieur |
| LIVE OpenAI | NOT RUN |

---

## 9. Captures / Figma

- T02 refreshes runtime captures
- Figma Page 06 refs 03/04 déjà en evidence
- Figma 07/08/09 : contrat layoutHint + unit directed ; captures BROWSER dédiées 08/09 **NOT RUN** (PARTIAL C-11/12)
- Verdict esthétique global : NON PROUVÉ (C-18)

---

## 10. Fake/Real

DETERMINISTIC + BROWSER fixture. LIVE/REAL NOT PROVEN. DETERMINISTIC ≠ READY FOR REAL.

---

## 11. ENV / versioning

DEV only. NO RELEASE. RECETTE/STABLE non touchées.

---

## 12. STOP levés / réserves

### Levés
- C-04 blocking : substitute graphique impossible sans ancres ; contradiction → markdown_only
- C-05 write path hors e05-only (dual-read)
- C-10 directed deps livré (CSS)
- C-14 capacité 8 options

### Réserves
- C-11/12 BROWSER Figma 08/09 dédiés NOT RUN (UNIT family OK)
- C-18 esthétique globale
- C-21 LIVE
- ACK R05 preexistant
- ELK non évalué benchmark complet (CSS retenu comme plus simple)

Aucune contradiction sémantique connue laissée en substitute.

---

## 13. Verdict

# READY WITH RESERVES

Périmètre livré : C-04 sécurisé ; C-05/14 partiels opérationnels ; C-10 dirigé ; C-11/12 modèle+rendu UNIT ; preuves BROWSER T02.
Pas ADOPTED / Gate C / STABLE / MERGED / REAL PROVEN / ML4D CLOSED.

---

## 14. Instruction ChatGPT

Revue Full **convergence** composition Nora (2026-11-18).

- Repo WT `sfia/next-ml4d-composition-adaptative` @ `a783f014`
- Docs 06 @ `37915d8e`
- Handoff précédent `eb8f6a01`
- Points : C-04 bodyPolicy ; dual schema ; directed layouts ; MAX_ALTS=12 ; matrice C-01–22 ; réserves C-11/12 BROWSER
- Verdict sollicité : confirmer READY WITH RESERVES ou STOP résiduel
