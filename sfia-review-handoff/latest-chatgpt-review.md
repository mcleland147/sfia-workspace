# SFIA Review Pack FULL — Composition conversationnelle adaptative Nora
**Date/heure :** 2026-11-18T02:07:16+01:00
**Cycle :** Delivery / EVOL / Critical — Remplacement mécanisme graphique expérimental E05
**GO Morris :** 18/11/2026 — construction locale bornée (pas push produit / PR / merge / RECETTE / STABLE)
**Complément :** 18/11/2026 ~02:06 — GO republication handoff après `REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING` (diffs `tokens.css` + `delivery-history.md` manquants)
**Branche technique locale :** `sfia/next-ml4d-composition-adaptative`
**HEAD tip (commits) :** `a783f014935de0dec5ff8e79a2b18eea0e629756`
**Working tree :** modifications non commitées (mandat Git produit non accordé)
**origin/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**Review Pack :** Full — réinitialisé intégralement ce complément (aucun append de l'ancien rapport)
**Handoff précédent :** commit `1e7330e0` / blob `0767cbf7…` — à remplacer par ce pack complet
**Handoff :** required / publish-in-cycle (L3 mono-fichier)

---

## 0. Motif de republication

ChatGPT a qualifié le handoff `1e7330e0` :

> REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING

Écarts corrigés ici :
1. **diff exploitable complet** de `projects/sfia-studio-next/web/src/components/figma/tokens.css` (plus seulement « ~102 lignes »)
2. **diff exploitable complet** de `projects/sfia-studio-next/construction/delivery-history.md`
3. Conservation du contenu intégral des nouveaux modules déjà présents
4. Diff complet de `NoraConversation.tsx` et de l'alias `NoraVisualComposition.tsx`

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| pwd / dépôt | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` · remote `mcleland147/sfia-workspace` |
| Branche | `sfia/next-ml4d-composition-adaptative` (locale, non poussée) |
| Base tip | `a783f014` (feat ML4D / E05 tip) |
| origin/main | `997d4c4e` |
| Docs ML4D tip | `origin/docs/next-ml4d-registre-revues-20261116` @ `c9e6fe15` (consulté par ref, **non mergé**) |
| Mutations destructives | aucune (pas reset --hard / force push / rebase) |
| Worktree E05 | code durable sur cette base ; renderer expérimental remplacé in-place |

**État local (fichiers cycle) :**
- M `NoraConversation.tsx`, `NoraVisualComposition.tsx` (alias), `tokens.css`, `delivery-history.md`, `.tmp-sfia-review/chatgpt-review.md`
- A `NoraComposition.tsx`, `conversational-composition/*`, tests unit, preuves Figma Page 06 / CV-T

---

## 2. Sources & refs

- Routage SFIA v2.6 + operating model / guardrails (main)
- Next SEF / roadmap / naming / ENV-01 / versioning / cadrage R4 (main)
- Décisions R5 2026-11-11/12/15 (main)
- Contrats ML4D docs `03–05` @ `c9e6fe15` (KNOWN : branche docs +29, documentaire only)
- Doctrine v3 framing 30/33/34/35/37 + CKC 08 (lecture seule)
- Figma `itgvCulInEnFY6DvgIegvP` Page 06 `742:2` — session MCP `76f33f97-…`

**KNOWN GAP (non structurant pour V1) :** Strategy A (sections sémantiques canoniques D3) non implémentée — Strategy B retenue pour éviter rupture schéma / STOP architecture.

---

## 3. Audit E05 — inventaire

| Élément | Classe |
| --- | --- |
| `visual-composition.ts` parse/validate/LIVE schema/projection helpers | **CONSERVER PAR RESPONSABILITÉ** |
| Wire `visualComposition` optionnel sur `ml4c-sem-qual-v1` | **COMPATIBILITÉ BORNÉE** |
| `replyDraft` corps durable | **CONSERVER** (vérité textuelle) |
| `NoraVisualComposition` renderer expérimental | **REMPLACER** → `NoraComposition` |
| Alias export `NoraVisualComposition` | **COMPATIBILITÉ BORNÉE** (testid legacy) |
| `NoraSemanticIcon` | **CONSERVER** |
| Layout radial SVG arbitraire | **RETIRER** (remplacé layout hiérarchique + list) |
| elkjs / React Flow / ECharts | **NON INTRODUITS** (V1 HTML/CSS/SVG) |
| Persistance / tables | **AUCUNE migration** |

---

## 4. Architecture réalisée

**Sous-système unique :** `conversational-composition` (admission) + `NoraComposition` (rendu).

**Strategy B V1 :**
1. D3 produit `replyDraft` + optionnel `visualComposition` (`e05-visual-composition-v1`) fail-closed.
2. Studio `admitConversationalComposition` → familles/variantes déterministes (largeur, cardinalité, densité).
3. `NoraComposition` rend blocs avec ErrorBoundary local (CV-10) ; dual testids.
4. Une seule vérité sémantique : pas de second contenu contradictoire persisté.

**Variantes :** comparison cards|matrix|stacked|text ; sequence horizontal|vertical|text ; relations svg_simple|list|text.

---

## 5. Contrat D3

- Schéma : `NoraTurnQualificationSchema` / `ml4c-sem-qual-v1` **inchangé**.
- `replyDraft` max 12000 — inchangé.
- Pas de nouvelle table / migration.
- M1–M5 préservés (projection versionnée ; final-only ; draft sessionStorage ; viewer local ; no migration).
- Extension Strategy A → **STOP — MORRIS ARCHITECTURE DECISION REQUIRED** si demandé.

---

## 6. Modules créés / remplacés / retirés

### Créés
- `web/src/domains/conversation/conversational-composition/admission.ts`
- `web/src/domains/conversation/conversational-composition/index.ts`
- `web/src/components/figma/NoraComposition.tsx`
- `web/tests/unit/conversational-composition-admission.test.ts`
- Evidence : `figma-page06-visual-contract.md`, `cv-t-matrix-composition-adaptative.md`, PNG Figma 03/04

### Remplacés
- Renderer : logique de `NoraVisualComposition` → `NoraComposition`
- `NoraVisualComposition.tsx` = alias de réexport
- `NoraConversation` importe `NoraComposition`

### Retirés (comportement)
- Disposition radiale arbitraire comme défaut relations
- Forçage cartes sans admission de densité/largeur

---

## 7. Contenu des nouveaux fichiers et diffs des fichiers modifiés

### 7.1 `conversational-composition/index.ts` (complet)

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
  selectComparisonVariant,
  selectSequenceVariant,
  selectRelationsVariant,
  type AdmissionContext,
  type AdmissionResult,
  type AdmittedBlock,
  type ComparisonVariant,
  type CompositionFamily,
  type RelationsVariant,
  type SequenceVariant,
} from "./admission";

```

### 7.2 `conversational-composition/admission.ts` (complet)

```ts
/**
 * Conversational composition — Studio admission & variant selection (CV-*).
 * Deterministic presentation policy only — never invents facts or authority.
 * Consumes validated visual compositions (legacy wire) after fail-closed parse.
 */

import type { VisualBlock, VisualComposition } from "@/domains/conversation/visual-composition";
import {
  compositionOwnsBody,
  hasGraphicBlocks,
} from "@/domains/conversation/visual-composition";

export const CONVERSATIONAL_COMPOSITION_CONTRACT = "conversational-composition-v1" as const;

export type CompositionFamily =
  | "narrative"
  | "comparison"
  | "sequence"
  | "dependencies"
  | "decisionPaths"
  | "parallelProcess"
  | "timeline"
  | "references"
  | "choices";

export type ComparisonVariant = "cards" | "matrix" | "stacked" | "text";
export type SequenceVariant = "horizontal" | "vertical" | "text";
export type RelationsVariant = "svg_simple" | "list" | "text";

export type AdmittedBlock = {
  block: VisualBlock;
  family: CompositionFamily;
  variant: string;
  reasonCodes: string[];
};

export type AdmissionResult = {
  contract: typeof CONVERSATIONAL_COMPOSITION_CONTRACT;
  ownsBody: boolean;
  admitted: AdmittedBlock[];
  fallbackReasons: string[];
  containerWidthPx: number | null;
};

export type AdmissionContext = {
  /** Effective Travail conversation column width when known. */
  containerWidthPx?: number | null;
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
  if (block.preferListFallback) {
    reasons.push("CV_RELATIONS_PREFER_LIST");
    return { variant: "list", reasonCodes: reasons };
  }
  // Orphan edge check
  const ids = new Set(block.nodes.map((n) => n.id));
  const orphan = block.edges.some((e) => !ids.has(e.from) || !ids.has(e.to));
  if (orphan) {
    reasons.push("CV_RELATIONS_ORPHAN_EDGE");
    return { variant: "list", reasonCodes: reasons };
  }
  const dense = nodes > 8 || edges > 12;
  const narrow = widthPx != null && widthPx < 640;
  if (dense || narrow) {
    reasons.push(dense ? "CV_RELATIONS_DENSE_LIST" : "CV_RELATIONS_NARROW_LIST");
    return { variant: "list", reasonCodes: reasons };
  }
  if (nodes <= 6 && edges <= 8) {
    reasons.push("CV_RELATIONS_SVG_SIMPLE");
    return { variant: "svg_simple", reasonCodes: reasons };
  }
  reasons.push("CV_RELATIONS_LIST_DEFAULT");
  return { variant: "list", reasonCodes: reasons };
}

function familyFor(block: VisualBlock): CompositionFamily {
  switch (block.kind) {
    case "comparison":
      return "comparison";
    case "sequence":
      return "sequence";
    case "relations":
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
 * Admit a fail-closed-parsed composition into presentable blocks with variants.
 * CV-10: callers must isolate render errors per block.
 */
export function admitConversationalComposition(
  composition: VisualComposition | null | undefined,
  ctx: AdmissionContext = {},
): AdmissionResult {
  const width = ctx.containerWidthPx ?? null;
  const fallbackReasons: string[] = [];

  if (!composition) {
    return {
      contract: CONVERSATIONAL_COMPOSITION_CONTRACT,
      ownsBody: false,
      admitted: [],
      fallbackReasons: ["CV_NO_COMPOSITION"],
      containerWidthPx: width,
    };
  }

  if (!compositionOwnsBody(composition)) {
    fallbackReasons.push("CV_COMPOSITION_DOES_NOT_OWN_BODY");
  }
  if (!hasGraphicBlocks(composition) && composition.blocks.every((b) => b.kind === "text")) {
    fallbackReasons.push("CV_NARRATIVE_ONLY");
  }

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

  return {
    contract: CONVERSATIONAL_COMPOSITION_CONTRACT,
    ownsBody: compositionOwnsBody(composition),
    admitted,
    fallbackReasons,
    containerWidthPx: width,
  };
}

```

### 7.3 `NoraComposition.tsx` (complet)

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
  const hasProsCons = block.alternatives.some(
    (a) => (a.pros?.length ?? 0) + (a.cons?.length ?? 0) > 0,
  );
  const showMatrix = variant === "matrix" ? hasCriteria : false;
  const showCards =
    variant === "cards" ||
    variant === "stacked" ||
    (variant === "matrix" && !hasCriteria) ||
    (variant !== "text" && variant !== "matrix" && (!showMatrix || hasProsCons));
  const forceText = variant === "text";

  return (
    <section
      className={`fig-visual-block fig-visual-comparison fig-comp-block fig-comp-comparison fig-comp-variant-${variant}`}
      data-testid="nora-visual-comparison"
      data-comp-testid="nora-composition-comparison"
      data-block-kind="comparison"
      data-block-id={block.id}
      data-variant={variant}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {forceText ? (
        <p className="fig-comp-fallback-text">{block.textAlternative}</p>
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
            <article key={alt.id} className="fig-visual-alt fig-comp-alt" data-alt-id={alt.id}>
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
          ))}
        </div>
      ) : null}
      {!forceText && (showMatrix || variant === "matrix") && block.criteria?.length ? (
        <div className="fig-visual-matrix-wrap fig-comp-matrix-wrap">
          <table className="fig-visual-matrix fig-comp-matrix">
            <caption className="sr-only">Critères de comparaison</caption>
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
              {block.criteria.map((c) => (
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
      <p className="sr-only">{block.textAlternative}</p>
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
        <p className="fig-comp-fallback-text">{block.textAlternative}</p>
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
      <p className="sr-only">{block.textAlternative}</p>
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
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
  const useSvg = variant === "svg_simple";
  const forceText = variant === "text";
  const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));
  const w = 420;
  const h = Math.max(200, 48 + block.nodes.length * 36);
  // Hierarchical / vertical layout (Figma 07/08) — avoid arbitrary radial packing.
  const positions = block.nodes.map((n, i) => {
    const row = i;
    return {
      id: n.id,
      x: w / 2 + (i % 2 === 0 ? -70 : 70),
      y: 36 + row * 36,
      node: n,
    };
  });
  const byId = new Map(positions.map((p) => [p.id, p]));

  return (
    <section
      className={`fig-visual-block fig-visual-relations fig-comp-block fig-comp-relations fig-comp-variant-${variant}`}
      data-testid="nora-visual-relations"
      data-comp-testid="nora-composition-relations"
      data-block-kind="relations"
      data-block-id={block.id}
      data-variant={variant}
      data-fallback={useSvg ? "0" : "1"}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {forceText ? (
        <p className="fig-comp-fallback-text">{block.textAlternative}</p>
      ) : null}
      {!forceText && useSvg ? (
        <svg
          className="fig-visual-relations-svg fig-comp-relations-svg"
          viewBox={`0 0 ${w} ${h}`}
          role="img"
          aria-label={block.textAlternative}
        >
          {block.edges.map((e, i) => {
            const a = byId.get(e.from);
            const b = byId.get(e.to);
            if (!a || !b) return null;
            return (
              <g key={`${e.from}-${e.to}-${i}`}>
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} className="fig-visual-edge" />
                {e.label ? (
                  <text
                    x={(a.x + b.x) / 2}
                    y={(a.y + b.y) / 2 - 4}
                    className="fig-visual-edge-label"
                  >
                    {e.label}
                  </text>
                ) : null}
              </g>
            );
          })}
          {positions.map((p) => (
            <g key={p.id}>
              <circle
                cx={p.x}
                cy={p.y}
                r={22}
                className={`fig-visual-node fig-visual-node-${p.node.kind}`}
              />
              <text x={p.x} y={p.y + 4} textAnchor="middle" className="fig-visual-node-label">
                {p.node.label}
              </text>
            </g>
          ))}
        </svg>
      ) : null}
      {!forceText ? (
        <>
          <ul className="fig-visual-relations-list fig-comp-relations-list">
            {block.nodes.map((n) => (
              <li key={n.id} data-node-kind={n.kind}>
                <NoraSemanticIcon
                  role={
                    n.kind === "hypothesis"
                      ? "hypothesis"
                      : n.kind === "observation"
                        ? "observation"
                        : n.kind === "fact" || n.kind === "finding"
                          ? "fact"
                          : "information"
                  }
                />
                <span className={`fig-visual-tone fig-visual-tone-${n.kind}`}>{n.kind}</span>
                {n.label}
              </li>
            ))}
          </ul>
          {block.edges.length ? (
            <ul className="fig-visual-relations-edges fig-comp-relations-edges">
              {block.edges.map((e, i) => (
                <li key={`${e.from}-${e.to}-${i}`}>
                  {titleById.get(e.from) ?? e.from} → {titleById.get(e.to) ?? e.to}
                  {e.label ? ` (${e.label})` : ""}
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : null}
      <p className="sr-only">{block.textAlternative}</p>
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

function textAltFor(block: VisualBlock): string {
  if (
    block.kind === "comparison" ||
    block.kind === "sequence" ||
    block.kind === "relations" ||
    block.kind === "synthesis"
  ) {
    return block.textAlternative;
  }
  if (block.kind === "text") return block.markdown.slice(0, 400);
  return "";
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
      data-owns-body="1"
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

### 7.4 `NoraVisualComposition.tsx` — contenu actuel (alias) + diff exploitable complet

#### Contenu actuel

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

#### Diff `git diff` complet

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

### 7.5 `NoraConversation.tsx` — diff exploitable complet

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index b149f939..3e8d2d76 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -2,7 +2,7 @@

 import { useEffect, useRef, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
-import { NoraVisualComposition } from "@/components/figma/NoraVisualComposition";
+import { NoraComposition } from "@/components/figma/NoraComposition";
 import { useNoraThreadScroll } from "@/hooks/useNoraThreadScroll";
 import type {
   MessageProjectionView,
@@ -160,7 +160,7 @@ export function NoraConversation(props: {
                   <div className="fig-msg-body">
                     {proj?.visualComposition &&
                     compositionOwnsBody(proj.visualComposition) ? (
-                      <NoraVisualComposition
+                      <NoraComposition
                         composition={proj.visualComposition}
                         choices={proj.choices}
                         references={proj.references}

```

### 7.6 `tokens.css` — diff exploitable complet (CORRECTIF PACK)

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 8623f598..8bf5f452 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -2163,6 +2163,108 @@
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

### 7.7 `delivery-history.md` — diff exploitable complet (CORRECTIF PACK)

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 7b64d566..54b0187e 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,21 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


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
+| Verdict | `READY WITH RESERVES` — runtime Figma comparison + CV-T browser gap + 2 e2e reconcile flaky/fail |
+
+
 ## delivery_id: DELIV-2026-11-17-ML4D-R05-COGNITIVE-RECOVERY

 | Field | Value |

```

### 7.8 `tests/unit/conversational-composition-admission.test.ts` (complet)

```ts
import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  CONVERSATIONAL_COMPOSITION_CONTRACT,
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
    expect(empty.admitted).toHaveLength(0);
    expect(empty.fallbackReasons).toContain("CV_NO_COMPOSITION");

    const textOnly = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t1", markdown: "Réponse simple." }],
    })!;
    const adm = admitConversationalComposition(textOnly);
    expect(adm.ownsBody).toBe(true);
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
  });

  it("CV-T05 — long copy / narrow → stacked; over-capacity defensive → text", () => {
    // Wire parse caps alternatives at 5; long copy + narrow width still adapts.
    const many = comparisonFixture(5, 0, true);
    const narrow = selectComparisonVariant(many.blocks[0] as never, 480);
    expect(["stacked", "text", "matrix"]).toContain(narrow.variant);
    expect(narrow.variant).not.toBe("cards");

    // Defensive path if a future wire allows >18 (admission, not parse).
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

  it("CV-T10 — dense / preferList / orphan relations → list (no radial)", () => {
    const dense = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r1",
          title: "Dépendances",
          nodes: Array.from({ length: 10 }, (_, i) => ({
            id: `n${i}`,
            label: `Nœud ${i} with a very long human label that must remain readable`,
            kind: "observation",
          })),
          edges: Array.from({ length: 14 }, (_, i) => ({
            from: `n${i % 10}`,
            to: `n${(i + 1) % 10}`,
            label: "lié",
          })),
          textAlternative: "Graphe dense",
        },
      ],
    })!;
    expect(dense).not.toBeNull();
    const sel = selectRelationsVariant(dense!.blocks[0] as never, 900);
    expect(sel.variant).toBe("list");

    // Parse rejects orphan edges; admission still defends if raw slipped through.
    const orphanRaw = {
      kind: "relations" as const,
      id: "r2",
      title: "Orphelin",
      nodes: [
        { id: "a", label: "A", kind: "fact" as const },
        { id: "b", label: "B", kind: "fact" as const },
      ],
      edges: [{ from: "a", to: "missing" }],
      textAlternative: "A vers inconnu",
    };
    expect(selectRelationsVariant(orphanRaw, 900).variant).toBe("list");

    const prefer = {
      ...orphanRaw,
      edges: [{ from: "a", to: "b" }],
      preferListFallback: true,
    };
    expect(selectRelationsVariant(prefer, 900).variant).toBe("list");
  });

  it("CV-T14 — admission never invents quantitative chart family", () => {
    const adm = admitConversationalComposition(comparisonFixture(3));
    expect(adm.admitted.every((a) => a.family !== ("chart" as never))).toBe(true);
    expect(adm.contract).toBe("conversational-composition-v1");
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
    const adm = admitConversationalComposition(comp, { containerWidthPx: 800 });
    expect(adm.admitted.map((a) => a.block.kind)).toEqual([
      "text",
      "comparison",
      "choices",
    ]);
    expect(adm.admitted[1]?.reasonCodes.length).toBeGreaterThan(0);
  });
});

```

### 7.9 Evidence contrat Figma

# Contrat visuel extrait — Figma Page 06 (références composition)

**Date :** 2026-11-18
**Fichier :** `https://www.figma.com/design/itgvCulInEnFY6DvgIegvP`
**Page :** 06 · node `742:2`
**Statut :** EXTRAIT MCP — **pas une preuve runtime**

## Principes UX acceptés (Morris)

- Sobriété de l’environnement ; richesse maîtrisée de la réponse.
- Hiérarchie éditoriale claire ; cartes uniquement si pertinentes.
- Connexions et représentations fiables ; pas de décoration gratuite.
- Texte essentiel non tronqué ; lisibilité à largeur variable.

## Frames de référence

| Ref | Node | Intention |
| --- | --- | --- |
| 01 | 742:36 | Synthèse stratégique |
| 02 | 743:2 | Parcours et planning |
| 03 | 745:2 | Trois options adaptatives |
| 04 | 745:27 | Matrice comparative |
| 05 | 746:2 | Largeur réduite / textes longs |
| 06 | 746:22 | Parcours vertical |
| 07 | 751:11 | Dépendances |
| 08 | 752:2 | Arbre de décision |
| 09 | 753:2 | Flux parallèle |

## Propriétés visuelles observées (MCP)

- Composition claire sectionnée : titre de bloc + corps (cartes / table / liste / graphe).
- Cartes comparison : grille responsive, hauteur intrinsèque au contenu, ombre/bordure soft.
- Matrice : en-têtes critères × options ; wrap horizontal si dense.
- Séquences : marqueurs numérotés + connecteurs ; variante verticale privilégiée en largeur réduite.
- Relations : nœuds labellisés humains ; repli liste si densité.
- Environnement conversationnel sombre Studio (`tokens.css`) — **écart connu** vs maquettes Figma plus claires Page 06 ; la DA « sobriété + hiérarchie » est retenue, pas un clonage pixel-perfect du fond clair.

## Choix techniques candidats (retenus V1)

- HTML/CSS/SVG sémantique ; **pas** elkjs / React Flow / ECharts en V1.
- Admission déterministe `conversational-composition-v1` (variantes cards/matrix/stacked/vertical/list).
- Container queries + ResizeObserver pour largeur effective.
- Dual testids `nora-visual-*` (compat) + `data-comp-testid=nora-composition*`.

## Verdict contrat Figma

**FIGMA CONTRACT EXTRACTED — RUNTIME COMPARISON PENDING**
Sans capture runtime post-implémentation : verdict visuel maximal
`REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED`.


### 7.10 Matrice CV-T

# Matrice CV-T01–CV-T20 — Composition conversationnelle adaptative

**Cycle :** 2026-11-18 · branche locale `sfia/next-ml4d-composition-adaptative`
**GO :** construction locale bornée — pas de LIVE/REAL OpenAI ; pas de RECETTE.

| ID | Statut | Frontière | Preuve / motif |
| --- | --- | --- | --- |
| CV-T01 | PASS | UNIT DETERMINISTIC | `conversational-composition-admission.test.ts` narrative-only |
| CV-T02 | PARTIAL | BROWSER DETERMINISTIC | e2e T02 ordered S1–S8 PASS (fixture) ; LIVE Pilote NOT RUN |
| CV-T03 | PARTIAL | UNIT + FIGMA REF | admission cards 2–3 ; Figma 745:2 capturé ; runtime screenshot NOT RUN |
| CV-T04 | PARTIAL | UNIT + FIGMA REF | admission matrix 5+criteria ; Figma 745:27 capturé ; runtime NOT RUN |
| CV-T05 | PASS | UNIT/property | long/narrow → stacked/text ; wire MAX_ALTS=5 (KNOWN BOUND) |
| CV-T06 | PASS | UNIT | sequence narrow → vertical |
| CV-T07 | NOT RUN | BROWSER | besoin capture graphe convergences + Figma 07 |
| CV-T08 | NOT RUN | BROWSER + D6 | arbre conditionnel ; aucune décision activée — non instrumenté ce cycle |
| CV-T09 | NOT RUN | BROWSER | flux parallèle Figma 09 |
| CV-T10 | PASS | UNIT/property | dense/orphan/preferList → list |
| CV-T11 | NOT RUN | BROWSER a11y | zoom/URL longues — runtime required |
| CV-T12 | NOT RUN | BROWSER UX-010 | pane 50/50 — runtime required |
| CV-T13 | PASS (legacy) | UNIT | provenance fail-closed conservée (`ensemble05-visual-composition`) |
| CV-T14 | PASS | UNIT | aucune famille chart inventée |
| CV-T15 | PARTIAL | CODE | `BlockErrorBoundary` + textAlternative ; BROWSER error inject NOT RUN |
| CV-T16 | PASS (legacy) | BROWSER fixture | T02 refresh path in e2e suite ; identity via existing projection |
| CV-T17 | NOT RUN | PG/BROWSER | R05 UNKNOWN — hors scope graphique ; pas de REAL |
| CV-T18 | PASS | UNIT + BROWSER | parse legacy + dual testids ; e2e T02 composition path |
| CV-T19 | NOT RUN | LIVE/REAL | non autorisé sous ce GO |
| CV-T20 | NOT RUN | BROWSER a11y | audit lecteur d’écran / contraste runtime required |

## Synthèse

- UNIT/property admission : **7/7 PASS**
- e2e Ensemble 05 : **5 PASS / 2 FAIL** (C2 + composer ACK reconcile — tests R05/idempotence, hors renderer ; à requalifier séparément)
- T02 visual composition path : **PASS**
- Verdict visuel Figma/runtime : **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED**


---

## 8. Tests exécutés

| Suite | Commande | Résultat |
| --- | --- | --- |
| Admission + E05 + schema + projection | `npx vitest run tests/unit/conversational-composition-admission.test.ts tests/unit/ensemble05-visual-composition.test.ts tests/unit/ensemble05-turn-projection.test.ts tests/unit/nora-live-output-schema.test.ts` | **54 PASS** |
| Playwright Ensemble 05 DEV fixture | `STUDIO_LANE=DEV STUDIO_FORCE_NORA_FIXTURE=1 npx playwright test tests/e2e/ensemble05-travail-nora.spec.ts` | **5 PASS / 2 FAIL** |
| T02 visual composition path | inclus ci-dessus | **PASS** |
| C2 ACK lost / composer ACK | reconcile `thread-reconcile-pending` | **FAIL** (hors renderer composition ; à requalifier R05) |
| tsc full project | `npx tsc --noEmit` | erreurs préexistantes hors fichiers touchés |
| LIVE OpenAI | — | **NOT RUN** (non autorisé) |
| Runtime screenshot post-impl | — | **NOT RUN** |

---

## 9. Comparaison Figma / runtime

- Captures Figma 03 (`745:2`) et 04 (`745:27`) sauvegardées sous `docs/evidence/.../figma-page06/`.
- **Pas de capture runtime** après remplacement renderer.
- Verdict visuel : **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED**

---

## 10. Fake / Real Qualification

| Preuve | Qualif |
| --- | --- |
| Vitest admission / parse | DETERMINISTIC |
| Playwright fixture Nora | BROWSER DETERMINISTIC (pas LIVE) |
| Figma MCP screenshots | DESIGN REF (pas runtime) |
| OpenAI provider | NOT RUN |
| Git effet externe / RECETTE | NOT TOUCHED |

**DETERMINISTIC PROVEN ≠ READY FOR REAL**

---

## 11. ENV-01 / Versioning

- Lane : **DEV** uniquement.
- RECETTE/STABLE : **aucun déploiement / mutation**.
- Classe : **NO RELEASE** (`0.0.0-dev` ; STABLE NOT AVAILABLE).
- Isolation cookies host partagé : réserve connue inchangée.

---

## 12. Dette / réserves / STOP éventuels

1. Runtime Figma comparison manquante → verdict visuel inconclusif.
2. CV-T07–09, T11–12, T17, T19–20 NOT RUN / BLOCKED.
3. 2 e2e ACK/reconcile FAIL — hors scope graphique ; non attribués au renderer sans preuve.
4. Wire `MAX_ALTS=5` vs scénario CV-T05 « 8–18 options » — borne parse existante ; admission défend >18.
5. Strategy A non livrée — KNOWN GAP documenté.
6. Thème sombre Studio vs maquettes Page 06 plus claires — écart DA environnement.
7. Pack antérieur `1e7330e0` incomplet sur diffs CSS/history — **corrigé dans cette republication**.

**Aucun STOP bloquant d’entrée** après Truth Check + Figma extract + Strategy B.

---

## 13. Verdict

# READY WITH RESERVES

Pas ADOPTED / Gate C CLOSED / STABLE / MERGED / REAL PROVEN.

Complément pack : les contenus modifiés manquants (`tokens.css`, `delivery-history.md`) sont désormais inclus en diff intégral — le motif `REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING` est levé côté publication.

---

## 14. Instruction ChatGPT

Revue Full **complétée** pour le cycle **Composition conversationnelle adaptative Nora** (2026-11-18), republication après incomplete pack.

À examiner en priorité les ajouts manquants précédents :
1. Diff complet `tokens.css` (§7.6) — risques de régression CSS / collision avec `.fig-visual-*` / container queries.
2. Diff complet `delivery-history.md` (§7.7) — journal NO RELEASE.
3. Puis Strategy B, `NoraComposition`, non-régression D3/M1–M5, matrice CV-T, gap runtime/Figma, 2 e2e ACK.

**Verdict sollicité :** confirmation `READY WITH RESERVES` (pack désormais complet) ou élévation STOP / conditions de sortie.
