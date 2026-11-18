# SFIA Review Pack FULL — Correction intégrée composition conversationnelle Nora
**Date/heure :** 2026-11-18T02:27:41+01:00
**Cycle :** Delivery / RUN correctif Critical — levée STOP ChatGPT composition adaptative
**GO :** mandat construction locale existant + corrections (pas push produit / PR / merge / RECETTE / STABLE / LIVE)
**Branche technique locale :** `sfia/next-ml4d-composition-adaptative`
**HEAD tip (commits) :** `a783f014935de0dec5ff8e79a2b18eea0e629756`
**Working tree :** corrections non commitées
**origin/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**Handoff source cycle précédent :** `71ecf87d` / blob `47606b6b…`
**Docs ML4D :** `c9e6fe15` (consulté, non mergé)
**Review Pack :** Full — réinitialisé intégralement (aucun append)
**Handoff :** required / publish-in-cycle

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| Branche | `sfia/next-ml4d-composition-adaptative` (locale, non poussée) |
| HEAD | `a783f014` |
| origin/main | `997d4c4e` |
| Handoff avant cycle | `71ecf87d` / blob `47606b6b48452f0384c27ab89102aaf367fa335b` |
| Divergence locale vs handoff | code WT présent et cohérent avec pack précédent + correctifs A–F |
| Mutations destructives | aucune |
| STOP LOCAL CANDIDATE DIVERGENCE | **non déclenché** |

Fichiers cycle (M/A) : `NoraComposition.tsx`, `conversational-composition/*`, `NoraConversation.tsx`, `NoraVisualComposition.tsx` (alias), `tokens.css`, `ensemble05-travail-nora.spec.ts`, evidence CV-T/Figma, `delivery-history.md`, pack.

---

## 2. Sources

- SFIA v2.6 routing / operating model / guardrails (main)
- Next SEF / ENV-01 / versioning / décisions R5 / cadrage R4 (main)
- Contrats ML4D 01–05 @ `c9e6fe15` (CANDIDATE — non promus)
- Handoff `71ecf87d` comme source de revue
- Doctrine v3 framing 30/33/34/35 + CKC 08 (lecture)

---

## 3. État précédent et causes

Verdict Cursor antérieur : READY WITH RESERVES.
Verdict ChatGPT : **STOP — CORRECTIONS REQUIRED BEFORE DELIVERY GATE**.

Défauts A–F confirmés dans le code local (ComparisonView masquait substance en matrix ; RelationsView SVG coords fixes ; `slice(0,400)` ; body substitute sans politique ; capacités surévaluées ; ACK non qualifiés ; tsc non inventorié).

---

## 4. Corrections A–F

### A — Comparaisons / matrices
`ComparisonView` : variante `matrix` affiche la table **et** un bloc `nora-composition-matrix-details` avec title/summary/pros/cons pour chaque alternative (pas sr-only). Cartes/stacked inchangés. Caption table visible.

### B — Relations
SVG à coordonnées fixes **retiré**. `selectRelationsVariant` → `list` uniquement (`CV_RELATIONS_SVG_DEFERRED`). Affichage : libellés humains + arêtes `source → cible` ; plus d'exposition de `n.kind` brut au Pilote.

### C — Repli
`buildExhaustiveBlockFallback` : reconstruction complète sans troncature ; `textAltFor` l'utilise (plus de `slice(0,400)`). ErrorBoundary conserve ce texte.

### D — Strategy B / vérité
`bodyPolicy` : `substitute` | `complement` | `markdown_only`.
- substitute = complétude structurelle de projection + ownsBody (réserve explicite : **≠ preuve d'identité replyDraft**)
- NoraConversation respecte la policy (complement = replyDraft + composition)

### E — Capacités
`capacityNotes` : `CV_WIRE_MAX_ALTS_5`, `CV_DECISION_PATHS_PARALLEL_NOT_DISTINCT_V1`. CV-T05 prouve parse→null pour 8 alts.

### F — ACK
Rejeu tip clean `a783f014` (worktree détaché, sans WT composition) : **mêmes 2 FAIL** → **PREEXISTING PROVEN**. Propriétaire : parcours R05/idempotence. Non corrigé à l'aveugle.

---

## 5. Design retenu / écartés

Retenu : Strategy B + list relations + matrix+details + bodyPolicy.
Écarté : Strategy A silencieuse ; ELK/RF (disproportionné pour correctif) ; svg_simple ; similarité replyDraft approximative.

---

## 6–8. Fichiers et contenus

### 6.1 `conversational-composition/index.ts`

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

```

### 6.2 `conversational-composition/admission.ts`

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

export const CONVERSATIONAL_COMPOSITION_CONTRACT = "conversational-composition-v1" as const;

/** Families actually delivered in V1 (others are NOT claimed). */
export type CompositionFamily =
  | "narrative"
  | "comparison"
  | "sequence"
  | "dependencies"
  | "references"
  | "choices";

export type ComparisonVariant = "cards" | "matrix" | "stacked" | "text";
export type SequenceVariant = "horizontal" | "vertical" | "text";
/** svg_simple deferred — fixed-coordinate SVG is not fidelity-safe in V1. */
export type RelationsVariant = "list" | "text";

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
 * Relations: structured list (or text) only.
 * Fixed-coordinate SVG is not fidelity-safe — CV-T07/08/09 must not PASS on SVG alone.
 */
export function selectRelationsVariant(
  block: Extract<VisualBlock, { kind: "relations" }>,
  _widthPx: number | null,
): { variant: RelationsVariant; reasonCodes: string[] } {
  const nodes = block.nodes.length;
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
  reasons.push("CV_RELATIONS_STRUCTURED_LIST");
  reasons.push("CV_RELATIONS_SVG_DEFERRED");
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

function decideBodyPolicy(
  composition: VisualComposition,
  ownsBody: boolean,
  admitted: AdmittedBlock[],
  fallbackReasons: string[],
): BodyPresentationPolicy {
  if (!ownsBody) return "markdown_only";
  // Any forced text-capacity variant → still OK if exhaustive fallback exists,
  // but prefer complement when admission itself flagged narrative-only without graphics.
  if (fallbackReasons.includes("CV_NARRATIVE_ONLY")) {
    return "substitute";
  }
  if (!projectionSubstanceRenderComplete(composition)) {
    fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
    return "complement";
  }
  // Unreliable graphic variants must not substitute (svg deferred already).
  const unsafe = admitted.some(
    (a) => a.block.kind === "relations" && a.variant === "svg_simple",
  );
  if (unsafe) {
    fallbackReasons.push("CV_BODY_UNSAFE_RELATIONS_VARIANT");
    return "complement";
  }
  // Structural completeness of projection ≠ replyDraft identity (KNOWN RESERVE).
  fallbackReasons.push("CV_BODY_STRUCTURAL_SUBSTITUTE_NOT_REPLYDRAFT_PROOF");
  return "substitute";
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

  // Wire capacity honesty (e05 MAX_ALTS=5) — graphic 8–18 is NOT claimed.
  capacityNotes.push("CV_WIRE_MAX_ALTS_5");
  capacityNotes.push("CV_RELATIONS_FAMILY_DEPENDENCIES_ONLY");
  capacityNotes.push("CV_DECISION_PATHS_PARALLEL_NOT_DISTINCT_V1");

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

  const bodyPolicy = decideBodyPolicy(composition, ownsBody, admitted, fallbackReasons);

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

### 6.3 `NoraComposition.tsx`

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
  // Defect B: no fixed-coordinate SVG. Structured list is the fidelity-safe V1 path.
  const forceText = variant === "text";
  const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));

  return (
    <section
      className={`fig-visual-block fig-visual-relations fig-comp-block fig-comp-relations fig-comp-variant-${variant}`}
      data-testid="nora-visual-relations"
      data-comp-testid="nora-composition-relations"
      data-block-kind="relations"
      data-block-id={block.id}
      data-variant={variant}
      data-fallback="1"
      data-layout="structured-list"
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-relations-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : (
        <>
          <ul className="fig-visual-relations-list fig-comp-relations-list">
            {block.nodes.map((n) => (
              <li key={n.id} data-node-id={n.id}>
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
                <span className="fig-comp-relations-label">{n.label}</span>
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
                  {e.label ? ` (${e.label})` : ""}
                </li>
              ))}
            </ul>
          ) : null}
        </>
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

### 6.4 `NoraVisualComposition.tsx` (alias actuel)

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

### 6.5 Diff `NoraVisualComposition.tsx`

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

### 6.6 Diff `NoraConversation.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index b149f939..b814d9a8 100644
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
@@ -158,22 +158,43 @@ export function NoraConversation(props: {
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
+                        ? admitConversationalComposition(proj.visualComposition)
+                        : null;
+                      const policy = admission?.bodyPolicy ?? "markdown_only";
+                      const compositionEl =
+                        proj?.visualComposition && policy !== "markdown_only" ? (
+                          <NoraComposition
+                            composition={proj.visualComposition}
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

### 6.7 Diff `tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 8623f598..3ee2d00d 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -2163,6 +2163,128 @@
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

### 6.8 Diff `delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 7b64d566..366dda6e 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,34 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


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
+| Verdict | (voir Review Pack Full correctif) |
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

### 6.9 Diff `ensemble05-travail-nora.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
index 37b839c4..055048c8 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
@@ -566,6 +566,15 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     await ask(E05_S2_DIAGNOSTIC);
     await expect(page.getByTestId("nora-visual-relations")).toBeVisible({ timeout: 45000 });
     await expect(page.getByTestId("nora-visual-icon").first()).toBeVisible();
+    // Corrective B — structured list, no fixed-coordinate SVG.
+    await expect(page.getByTestId("nora-visual-relations").last()).toHaveAttribute(
+      "data-layout",
+      "structured-list",
+    );
+    await expect(page.getByTestId("nora-visual-relations").last()).toHaveAttribute(
+      "data-variant",
+      "list",
+    );
     await expect(page.getByTestId("nora-visual-composition").last()).toHaveAttribute(
       "data-owns-body",
       "1",
@@ -574,6 +583,10 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
       path: path.join(evidenceDir, "runtime-s2-diagnostic-1440.png"),
       fullPage: false,
     });
+    await page.screenshot({
+      path: path.join(evidenceDir, "corrective-runtime-relations-list-1440.png"),
+      fullPage: false,
+    });

     // S3 — comparison + recommendation + choice/ref anchors + provenance P1-B.
     await ask(E05_S3_COMPARISON);
@@ -593,6 +606,8 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     await expect(s3.getByTestId("nora-visual-prov-link")).toHaveCount(1);
     await expect(s3.getByTestId("nora-ref-link")).toHaveCount(0);
     await expect(s3.getByText(/Consulter · Note de cadrage coordination/i)).toHaveCount(1);
+    // Corrective A — alternative substance remains visible (cards or matrix+details).
+    await expect(s3.getByTestId("nora-composition-alt-detail").first()).toBeVisible();
     await page.screenshot({
       path: path.join(evidenceDir, "runtime-visual-comparison-1440.png"),
       fullPage: false,
@@ -601,6 +616,10 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
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

### 6.10 Tests unitaires

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
    const adm = admitConversationalComposition(textOnly);
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

    const adm = admitConversationalComposition(five, { containerWidthPx: 960 });
    expect(adm.bodyPolicy).toBe("substitute");
    expect(projectionSubstanceRenderComplete(five)).toBe(true);
  });

  it("CV-T05 — wire path 8 options: parser rejects; replyDraft path remains (not direct admission cheat)", () => {
    const raw = {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "cmp",
          title: "Trop d'options",
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
    const parsed = parseVisualComposition(raw);
    expect(parsed).toBeNull();
    const adm = admitConversationalComposition(parsed);
    expect(adm.bodyPolicy).toBe("markdown_only");
    expect(adm.admitted).toHaveLength(0);
    // Capacity note is declared on admitted compositions (wire honesty), not null.
    const withinWire = admitConversationalComposition(comparisonFixture(5, 1));
    expect(withinWire.capacityNotes).toContain("CV_WIRE_MAX_ALTS_5");
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

  it("CV-T10 — dense relations → structured list (never svg_simple)", () => {
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
    expect(sel.reasonCodes).toContain("CV_RELATIONS_SVG_DEFERRED");
  });

  it("CV-T14 — admission never invents quantitative chart family", () => {
    const adm = admitConversationalComposition(comparisonFixture(3));
    expect(adm.admitted.every((a) => a.family !== ("chart" as never))).toBe(true);
    expect(adm.capacityNotes).toContain("CV_DECISION_PATHS_PARALLEL_NOT_DISTINCT_V1");
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
    const adm = admitConversationalComposition(comp, { containerWidthPx: 800 });
    expect(adm.admitted.map((a) => a.block.kind)).toEqual([
      "text",
      "comparison",
      "choices",
    ]);
    expect(adm.admitted[1]?.reasonCodes.length).toBeGreaterThan(0);
    expect(adm.bodyPolicy).toBe("substitute");
  });
});

```

### 6.11 Evidence Figma contract

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


### 6.12 Matrice CV-T révisée

# Matrice CV-T01–CV-T20 — Composition adaptative (correctif 2026-11-18)

**Branche :** `sfia/next-ml4d-composition-adaptative` @ tip `a783f014` + WT correctif
**GO :** construction/correction locale — pas LIVE/REAL ; pas RECETTE.

| ID | Statut | Frontière | Preuve / motif |
| --- | --- | --- | --- |
| CV-T01 | PASS | UNIT DETERMINISTIC | admission narrative-only |
| CV-T02 | PARTIAL | BROWSER DETERMINISTIC | T02 S1–S8 PASS ; LIVE Pilote NOT RUN |
| CV-T03 | PASS | UNIT + BROWSER | cards + alt-detail visible ; capture corrective-runtime-comparison-1440 |
| CV-T04 | PARTIAL | UNIT + BROWSER | matrix+details policy + fixture substance ; Figma 04 ref ; largeur matrix runtime dépend fixture S3 (cards) |
| CV-T05 | PASS (repli) | UNIT wire path | parse 8 alts → null ; markdown_only ; graphic 8–18 NOT claimed |
| CV-T06 | PASS | UNIT + BROWSER | sequence vertical ; T02 S4 |
| CV-T07 | PARTIAL | BROWSER | structured-list fallback ; SVG deferred — NOT graph layout PASS |
| CV-T08 | NOT RUN | BROWSER + D6 | wire sans arbre conditionnel distinct |
| CV-T09 | NOT RUN | BROWSER | parallelProcess non distinct V1 |
| CV-T10 | PASS | UNIT + BROWSER | dense → list ; labels humains ; pas d'IDs techniques exposés |
| CV-T11 | PARTIAL | UNIT | exhaustive fallback >400 ; zoom BROWSER NOT RUN dedicated |
| CV-T12 | NOT RUN | BROWSER UX-010 | split 50/50 |
| CV-T13 | PASS | UNIT | provenance fail-closed legacy |
| CV-T14 | PASS | UNIT | pas de chart inventé |
| CV-T15 | PARTIAL | CODE + UNIT | BlockErrorBoundary + exhaustive fallback ; inject BROWSER NOT RUN |
| CV-T16 | PASS | BROWSER fixture | T02 refresh/identity via projection path |
| CV-T17 | NOT RUN | PG/BROWSER | R05 UNKNOWN hors correctif graphique |
| CV-T18 | PASS | UNIT + BROWSER | dual testids + T02 |
| CV-T19 | NOT RUN | LIVE/REAL | non autorisé |
| CV-T20 | PARTIAL | BROWSER | caption table visible ; a11y audit complet NOT RUN |

## ACK / reconcile

| Test | Candidat correctif | Tip clean `a783f014` | Qualification |
| --- | --- | --- | --- |
| C2 ACK lost | FAIL `thread-reconcile-pending` | FAIL identique | **PREEXISTING PROVEN** |
| composer ACK | FAIL `thread-reconcile-pending` | FAIL identique | **PREEXISTING PROVEN** |

## TypeScript

`npx tsc --noEmit` : **32** erreurs — toutes hors fichiers touchés composition (`NONE` sur NoraComposition/admission/…). Inventaire dominant : `ml4c-prior-proposal.pg.test.ts` (21), `create-project.pg.test.ts` (4), unit semantic/s05/ml4c (7).


---

## 9. Tests exécutés

| Suite | Résultat |
| --- | --- |
| Vitest admission+E05+projection+schema | **57 PASS** |
| tsc --noEmit | **32** erreurs ; **0** sur fichiers touchés |
| Playwright ensemble05 (candidat) | 5 PASS / 2 FAIL ACK |
| Playwright T02 seul | **PASS** + captures corrective-* |
| Playwright ACK sur tip clean `a783f014` | **2 FAIL** identiques → PREEXISTING PROVEN |
| LIVE OpenAI | NOT RUN |

### Inventaire TypeScript (extrait)

```
tests/integration/create-project.pg.test.ts(290,16): error TS2551: Property 'projectId' does not exist on type '{ preparation: { id: string; ownerPilotId: string; status: string; creationRevision: number; previewName: string; previewSummary: string; projectionJson: Record<string, unknown> | null; createdAt: Date; updatedAt: Date; }; project: { ...; } | null; conversation: { ...; }; link: { ...; }; projection: PreparationProje...'. Did you mean 'project'?
tests/integration/create-project.pg.test.ts(299,16): error TS2551: Property 'projectId' does not exist on type '{ preparation: { id: string; ownerPilotId: string; status: string; creationRevision: number; previewName: string; previewSummary: string; projectionJson: Record<string, unknown> | null; createdAt: Date; updatedAt: Date; }; project: { ...; } | null; conversation: { ...; }; link: { ...; }; projection: PreparationProje...'. Did you mean 'project'?
tests/integration/create-project.pg.test.ts(306,16): error TS2551: Property 'projectId' does not exist on type '{ preparation: { id: string; ownerPilotId: string; status: string; creationRevision: number; previewName: string; previewSummary: string; projectionJson: Record<string, unknown> | null; createdAt: Date; updatedAt: Date; }; project: { ...; } | null; conversation: { ...; }; link: { ...; }; projection: PreparationProje...'. Did you mean 'project'?
tests/integration/create-project.pg.test.ts(312,16): error TS2551: Property 'projectId' does not exist on type '{ preparation: { id: string; ownerPilotId: string; status: string; creationRevision: number; previewName: string; previewSummary: string; projectionJson: Record<string, unknown> | null; createdAt: Date; updatedAt: Date; }; project: { ...; } | null; conversation: { ...; }; link: { ...; }; projection: PreparationProje...'. Did you mean 'project'?
tests/integration/ml4c-prior-proposal.pg.test.ts(171,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentProp...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(263,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentSour...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(342,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentSour...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(380,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; }' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(442,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentSour...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(479,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "PREPARE"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentProposal: {...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(573,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.revise_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: { documentHint: string; }; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraf...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(650,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; }' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(702,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentSour...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(747,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "PREPARE"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentProposal: {...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(824,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentProp...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(881,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentProp...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(949,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "PREPARE"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentProposal: {...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(1012,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentSour...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(1133,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "PREPARE"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentProposal: {...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(1177,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentSour...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(1272,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "PREPARE"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentProposal: {...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(1350,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; documentSour...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(1542,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.revise_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: { documentHint: string; sectionHint: string; }; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarification...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(1626,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.revise_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: { documentHint: string; sectionHint: string; }; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarification...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/integration/ml4c-prior-proposal.pg.test.ts(1697,7): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.revise_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: { documentHint: string; sectionHint: string; }; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarification...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/unit/ml4c-s05-thread-turn-qualification.test.ts(22,11): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d3.converse"; mode: "EXPLAIN"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; }' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/unit/ml4c-temp-restitution.test.ts(22,3): error TS2322: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention?: string | undefined; desiredOutcome?: string | undefined; ... 11 more ...; visualComposition?: { ...; } | undefined; }' is not assignable to type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }'.
tests/unit/s05-pending-policy.test.ts(16,3): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE"; goal: string; intents: { id: string; capabilityId: "d5.pilotage_command"; mode: "REQUEST_EFFECT"; summary: string; parameters: { pilotageOperation: "OPEN_CYCLE"; cycleType: string; }; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; c...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/unit/s05-pending-policy.test.ts(94,11): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d4.create_document"; mode: "REQUEST_EFFECT"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; }' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/unit/semantic-qualification.test.ts(71,11): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d5.pilotage_command"; mode: "REQUEST_EFFECT"; summary: string; parameters: { pilotageOperation: "OPEN_CYCLE"; cycleType: string; }; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; cla...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/unit/semantic-qualification.test.ts(103,11): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: ({ id: string; capabilityId: "d2.create_project"; mode: "REQUEST_EFFECT"; summary: string; parameters: { projectName: string; }; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; } | { ...; })[]; clarifications: never[]...' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
tests/unit/semantic-qualification.test.ts(173,11): error TS2739: Type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "QUALIFIED"; goal: string; intents: { id: string; capabilityId: "d3.converse"; mode: "EXPLAIN"; summary: string; parameters: {}; constraints: never[]; dependsOn: never[]; sourceEvidence: never[]; }[]; clarifications: never[]; replyDraft: string; }' is missing the following properties from type '{ schemaVersion: "ml4c-sem-qual-v1"; status: "UNAVAILABLE" | "QUALIFIED" | "NEEDS_CLARIFICATION"; goal: string; projectIntention: string; desiredOutcome: string; initialScope: string; ... 10 more ...; visualComposition?: { ...; } | undefined; }': projectIntention, desiredOutcome, initialScope, proposedProjectName
```

Agrégation : ml4c-prior-proposal.pg.test.ts×21 ; create-project.pg.test.ts×4 ; semantic/s05/ml4c unit×7. Aucune ligne NoraComposition/admission/NoraConversation.

---

## 10. Captures runtime / Figma

DEV fixture Browser :
- `corrective-runtime-relations-list-1440.png`
- `corrective-runtime-comparison-1440.png`
- captures T02 historiques rafraîchies (`runtime-s*-1440.png`)

Figma Page 06 refs 03/04 déjà sous `figma-page06/`.
Verdict : géométrie fixture prouvée pour cards/list ; matrix+details prouvée en UNIT + code path ; LIVE éditorial non prouvé.

---

## 11. Fake / Real

| Preuve | Qualif |
| --- | --- |
| Vitest / fixtures | DETERMINISTIC |
| Playwright DEV fixture | BROWSER DETERMINISTIC |
| Figma MCP | DESIGN REF |
| OpenAI / RECETTE / Git REAL | NOT RUN / NOT TOUCHED |

DETERMINISTIC ≠ READY FOR REAL.

---

## 12. ENV / versioning

Lane DEV only. NO RELEASE. RECETTE/STABLE non touchées.

---

## 13. STOP levés / réserves

### A. STOP levés (fidélité bloquante)
- A substance matrice : corrigé (details visibles)
- B SVG non fiable : retiré / list
- C truncature : corrigée
- D body policy explicite
- E capacité wire honnête
- F ACK classifié PREEXISTING PROVEN (preuve tip clean)

### B. Réserves résiduelles
1. substitute ≠ identité replyDraft (structurelle seulement)
2. CV-T07/08/09 graphiques conditionnels/parallèles non livrés comme familles distinctes
3. ACK R05 preexistant — hors mandat correctif si élargissement
4. a11y/zoom dédiés PARTIAL/NOT RUN
5. ELK différé

---

## 14. Verdict

# READY WITH RESERVES

Réserves restantes ne masquent plus la substance des comparaisons ni n'exposent un graphe trompeur ; ACK preexistant documenté ; pas de LIVE/REAL claim.

Pas ADOPTED / Gate C / STABLE / MERGED / REAL PROVEN.

---

## 15. Instruction ChatGPT

Revue Full **correctif** composition conversationnelle Nora (2026-11-18).

- Branche : `sfia/next-ml4d-composition-adaptative` @ `a783f014` + WT
- Handoff précédent : `71ecf87d` / `47606b6b…`
- Docs : `c9e6fe15`
- Corrections A–F + diffs complets (§6) + CV-T + ACK PREEXISTING PROVEN + tsc 32/0 touched
- Points à revoir : bodyPolicy/substitute réserve ; list vs graphe ; ACK owner R05 ; aptitude gate
- Verdict sollicité : confirmer READY WITH RESERVES ou STOP résiduel
