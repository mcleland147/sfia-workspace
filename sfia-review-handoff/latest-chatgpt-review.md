# SFIA Review Pack FULL — Strategy A Canonical Semantic Sections

**Date/heure :** 2026-11-18T08:11:02+0100
**Cycle :** Cycle 8 Delivery / Critical — transition sections sémantiques canoniques
**GO Morris :** 18/11/2026 — contrat Cursor Strategy A + achèvement UX/UI
**Branche :** `sfia/next-ml4d-composition-adaptative`
**HEAD tip :** `a783f014935de0dec5ff8e79a2b18eea0e629756` (+ WT non commitée)
**origin/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**Docs ML4D :** `b27fbe3c8b75165c3ebacc8841876d699ccd3599` (doc 06 V0.3)
**Handoff précédent :** `27f403d257851e327a03e2b58f2cbaa437130e00` / blob `e78b7f3a40d8767e3933dd486ffa86d92469535d`
**Review Pack :** Full — réinitialisé (aucun append)
**ENV :** DEV only · **NO RELEASE** · pas push produit / PR / merge / RECETTE / LIVE
**Fake/Real :** DETERMINISTIC PROVEN · LIVE/REAL **NOT RUN**

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| Branche | `sfia/next-ml4d-composition-adaptative` non poussée |
| HEAD | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| merge-base origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Handoff avant | `27f403d257851e327a03e2b58f2cbaa437130e00` |
| Docs tip | `b27fbe3c8b75165c3ebacc8841876d699ccd3599` |
| STOP divergence | non |
| Mutations destructives | aucune |

Candidat local = WT F1–F5 + mutations Strategy A. Aligné preuves handoff `27f403d2` puis prolongé.

---

## 2. Sources

- SFIA v2.6 template / operating model / guardrails (main)
- SEF, ENV-01, versioning, décisions R5 (main)
- Doc 05 §3.3 + doc 06 @ `b27fbe3c8b75`
- Handoff Full F1–F5 `27f403d2`
- Code local conversation/* (audit réel)

---

## 3. Décision Morris appliquée

Orientation **sections sémantiques canoniques** (Strategy A).
Implémentation locale bornée : une structure → texte dérivé + graphique facultatif.
Pas de migration DB, pas de second moteur, pas de rupture M1.

---

## 4. Architecture avant / après

### Avant (Strategy B)
replyDraft autorité + visualComposition annotation ; fidélité = claims ⊆ texte.

### Après (Strategy A)
`visualComposition` schema `conversational-composition-projection-v1` → `contentAuthority=canonical_sections`.
`validateNoraTurnQualification` dérive `replyDraft` via `deriveReplyDraftFromCanonicalSections`.
Admission identity path (pas de matching lexical).
e05 historique → `legacy_projection` + gate F1 conservée.

Voir fichier architecture §6.

---

## 5. Inventaire

### Nouveaux / module (contenu §6)

- `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/derive-text.ts` (37 L)
- `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/fidelity.ts` (211 L)
- `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/topology.ts` (192 L)
- `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/admission.ts` (485 L)
- `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/index.ts` (46 L)
- `projects/sfia-studio-next/web/tests/unit/canonical-sections-strategy-a.test.ts` (186 L)
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/architecture-canonical-sections-strategy-a.md` (48 L)
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-status.md` (27 L)
- `projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx` (986 L)
- `projects/sfia-studio-next/web/tests/unit/conversational-composition-fidelity.test.ts` (339 L)
- `projects/sfia-studio-next/web/tests/unit/conversational-composition-admission.test.ts` (306 L)

### Modifiés (diff §7)

- `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`
- `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`
- `projects/sfia-studio-next/web/src/components/figma/NoraVisualComposition.tsx`
- `projects/sfia-studio-next/web/src/components/figma/tokens.css`
- `projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts`
- `projects/sfia-studio-next/web/tests/unit/conversational-composition-fidelity.test.ts`
- `projects/sfia-studio-next/construction/delivery-history.md`

### Captures BROWSER (chemins — inspection locale)
- f5-runtime-dependencies-directed-1440.png
- f5-runtime-decision-tree-1440.png
- f5-runtime-parallel-1440.png

**VISUAL REVIEW :** captures présentes localement ; transmission Git handoff = markdown only → **VISUAL REVIEW NOT COMPLETED remotely** (chemins déclarés).

---

## 6. Contenu complet — fichiers nouveaux / module


### `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/derive-text.ts`

```ts
/**
 * Deterministic text derivation from canonical semantic sections (Strategy A / C-01–C-04).
 * Preserves narrative prose from text blocks; appends exhaustive structured fallbacks
 * for graphic sections so no substance is dropped.
 * Never invents facts. Never calls an LLM.
 */

import { buildExhaustiveBlockFallback } from "./admission";
import type { VisualComposition } from "@/domains/conversation/visual-composition";
import { compositionOwnsBody } from "@/domains/conversation/visual-composition";

const MAX_REPLY = 12000;

/**
 * Derive Pilote-facing Markdown from a composition that owns message substance.
 * Returns null when composition does not own body (anchors-only / empty).
 */
export function deriveReplyDraftFromCanonicalSections(
  composition: VisualComposition,
): string | null {
  if (!compositionOwnsBody(composition)) return null;
  const parts: string[] = [];
  for (const block of composition.blocks) {
    if (block.kind === "choices" || block.kind === "references") continue;
    if (block.kind === "text") {
      const md = block.markdown.trim();
      if (md) parts.push(md);
      continue;
    }
    // Graphic / synthesis: exhaustive human-readable form (same substance as renderer).
    const fb = buildExhaustiveBlockFallback(block).trim();
    if (fb) parts.push(fb);
  }
  const joined = parts.join("\n\n").trim();
  if (!joined) return null;
  return joined.length > MAX_REPLY ? joined.slice(0, MAX_REPLY) : joined;
}
```

### `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/fidelity.ts`

```ts
/**
 * Deterministic canonical-fidelity gates (F1 / C-04).
 * Distinguishes: anchor presence ≠ structural validity ≠ content equivalence.
 * Never claims full semantic equality; refuses presentation when substance
 * claims are not literally supported by the canonical replyDraft.
 */

import type { VisualBlock, VisualComposition } from "@/domains/conversation/visual-composition";
import { hasGraphicBlocks } from "@/domains/conversation/visual-composition";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pushClaim(claims: string[], raw: string | undefined | null, minLen = 3): void {
  const t = (raw ?? "").trim();
  if (t.length >= minLen) claims.push(t);
}

/**
 * Substance claims that must appear in canonical text for a graphic block
 * to be presentable. Titles alone are insufficient (F1 adversarial).
 */
export function extractProjectionClaims(composition: VisualComposition): string[] {
  const claims: string[] = [];
  for (const block of composition.blocks) {
    if (block.kind === "comparison") {
      for (const a of block.alternatives) {
        pushClaim(claims, a.title);
        pushClaim(claims, a.summary);
        for (const p of a.pros ?? []) pushClaim(claims, p);
        for (const c of a.cons ?? []) pushClaim(claims, c);
      }
      if (block.criteria) {
        for (const c of block.criteria) {
          pushClaim(claims, c.label);
          for (const v of Object.values(c.values)) pushClaim(claims, v);
        }
      }
      pushClaim(claims, block.recommendation ?? undefined, 8);
    } else if (block.kind === "sequence") {
      for (const s of block.steps) {
        pushClaim(claims, s.title);
        pushClaim(claims, s.detail);
        pushClaim(claims, s.dateLabel ?? undefined);
      }
    } else if (block.kind === "relations") {
      for (const n of block.nodes) {
        pushClaim(claims, n.label);
        pushClaim(claims, n.detail);
      }
      for (const e of block.edges) {
        pushClaim(claims, e.label);
      }
    } else if (block.kind === "synthesis") {
      for (const it of block.items) {
        pushClaim(claims, it.label);
        pushClaim(claims, it.detail);
      }
    }
    // text blocks are gated separately via maySubstituteNarrative (F1-06).
  }
  return claims;
}

/** @deprecated use extractProjectionClaims — kept for callers expecting titles only. */
export function extractProjectionAnchors(composition: VisualComposition): string[] {
  return extractProjectionClaims(composition);
}

export function claimsSupportedByCanonical(
  claims: string[],
  canonicalText: string | null | undefined,
): { ok: boolean; missing: string[]; reasonCodes: string[] } {
  const reasons: string[] = [];
  const canon = typeof canonicalText === "string" ? normalize(canonicalText) : "";
  if (!canon) {
    reasons.push("CV_FIDELITY_NO_CANONICAL_TEXT");
    return { ok: false, missing: claims, reasonCodes: reasons };
  }
  const missing: string[] = [];
  for (const raw of claims) {
    const a = normalize(raw);
    if (a.length < 2) continue;
    if (!canon.includes(a)) missing.push(raw);
  }
  if (missing.length) {
    reasons.push("CV_FIDELITY_CLAIM_MISSING_IN_CANONICAL");
    return { ok: false, missing, reasonCodes: reasons };
  }
  reasons.push("CV_FIDELITY_CLAIMS_SUPPORTED_BY_CANONICAL");
  return { ok: true, missing: [], reasonCodes: reasons };
}

export function projectionAnchorsAlignWithCanonical(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { aligned: boolean; missing: string[]; reasonCodes: string[] } {
  const r = claimsSupportedByCanonical(extractProjectionClaims(composition), canonicalText);
  return { aligned: r.ok, missing: r.missing, reasonCodes: r.reasonCodes };
}

/**
 * Preferential recommendation vs opposite preference in canonical (F1-01).
 * Deterministic: if recommendation names option X and canonical contains
 * an explicit preference for a different option Y among the same set → refuse.
 */
export function detectPreferenceContradiction(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): string[] {
  const reasons: string[] = [];
  const canon = typeof canonicalText === "string" ? normalize(canonicalText) : "";
  if (!canon) return reasons;

  const preferRe =
    /(?:prefer(?:er|e)?|recommande|reten(?:ir|ons)|choisir|retenir)\s+(?:l['’]approche\s+|l['’]option\s+|le\s+)?(.{3,80}?)(?:\.|,|;|$)/gi;

  for (const block of composition.blocks) {
    if (block.kind !== "comparison" || !block.recommendation) continue;
    const rec = normalize(block.recommendation);
    const titles = block.alternatives.map((a) => ({
      title: a.title,
      n: normalize(a.title),
    }));
    const recHits = titles.filter((t) => t.n.length >= 2 && rec.includes(t.n));
    if (recHits.length !== 1) continue;
    const preferred = recHits[0]!;

    // Canonical preference mentions
    const canonPrefs: string[] = [];
    let m: RegExpExecArray | null;
    const re = new RegExp(preferRe.source, preferRe.flags);
    while ((m = re.exec(canon)) !== null) {
      canonPrefs.push(normalize(m[1] ?? ""));
    }
    for (const pref of canonPrefs) {
      for (const t of titles) {
        if (t.n.length >= 2 && pref.includes(t.n) && t.n !== preferred.n) {
          reasons.push("CV_FIDELITY_RECOMMENDATION_OPPOSES_CANONICAL_PREFERENCE");
          return reasons;
        }
      }
    }
  }
  return reasons;
}

export function detectCrudeContradictions(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): string[] {
  return detectPreferenceContradiction(composition, canonicalText);
}

/** Narrative-only: text blocks must be supported by canonical before substitute. */
export function maySubstituteNarrative(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { ok: boolean; reasonCodes: string[] } {
  const texts = composition.blocks.filter((b): b is Extract<VisualBlock, { kind: "text" }> => b.kind === "text");
  if (!texts.length) {
    return { ok: false, reasonCodes: ["CV_FIDELITY_NARRATIVE_EMPTY"] };
  }
  const claims = texts.map((t) => t.markdown);
  const support = claimsSupportedByCanonical(claims, canonicalText);
  if (!support.ok) {
    return {
      ok: false,
      reasonCodes: [...support.reasonCodes, "CV_FIDELITY_NARRATIVE_SUBSTITUTE_REFUSED"],
    };
  }
  return { ok: true, reasonCodes: ["CV_FIDELITY_NARRATIVE_SUBSTITUTE_OK"] };
}

export function mayPresentGraphicComposition(
  composition: VisualComposition,
  canonicalText: string | null | undefined,
): { ok: boolean; reasonCodes: string[]; missing: string[] } {
  if (!hasGraphicBlocks(composition)) {
    return { ok: true, reasonCodes: ["CV_FIDELITY_NARRATIVE_ONLY"], missing: [] };
  }
  // Strategy A — identity path: sections are the sole authority; text was derived from them.
  // No lexical claim matching (that was Strategy B dual-author reconciliation).
  if (composition.contentAuthority === "canonical_sections") {
    return {
      ok: true,
      reasonCodes: ["CV_FIDELITY_IDENTITY_CANONICAL_SECTIONS"],
      missing: [],
    };
  }
  const support = claimsSupportedByCanonical(extractProjectionClaims(composition), canonicalText);
  const pref = detectPreferenceContradiction(composition, canonicalText);
  if (!support.ok || pref.length) {
    return {
      ok: false,
      reasonCodes: [
        ...support.reasonCodes,
        ...pref,
        "CV_FIDELITY_REFUSE_GRAPHIC_PRESENTATION",
      ],
      missing: support.missing,
    };
  }
  return { ok: true, reasonCodes: support.reasonCodes, missing: [] };
}
```

### `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/topology.ts`

```ts
/**
 * Structural topology validation for relations blocks (F2).
 * Independent of fidelity (content) and of CSS presentation.
 */

import type { RelationsBlock } from "@/domains/conversation/visual-composition";

export type TopologyVerdict =
  | { ok: true; reasonCodes: string[]; mode: "directed" | "list" }
  | { ok: false; reasonCodes: string[]; mode: "list" };

function edgeEndsValid(block: RelationsBlock): string[] {
  const ids = new Set(block.nodes.map((n) => n.id));
  const reasons: string[] = [];
  for (const e of block.edges) {
    if (!ids.has(e.from) || !ids.has(e.to)) {
      reasons.push("CV_TOPOLOGY_EDGE_ENDPOINT_UNKNOWN");
    }
    if (e.from === e.to) {
      reasons.push("CV_TOPOLOGY_SELF_LOOP");
    }
  }
  return reasons;
}

function hasCycle(block: RelationsBlock): boolean {
  const adj = new Map<string, string[]>();
  for (const n of block.nodes) adj.set(n.id, []);
  for (const e of block.edges) {
    adj.get(e.from)?.push(e.to);
  }
  const visiting = new Set<string>();
  const done = new Set<string>();
  const dfs = (id: string): boolean => {
    if (visiting.has(id)) return true;
    if (done.has(id)) return false;
    visiting.add(id);
    for (const nxt of adj.get(id) ?? []) {
      if (dfs(nxt)) return true;
    }
    visiting.delete(id);
    done.add(id);
    return false;
  };
  for (const n of block.nodes) {
    if (dfs(n.id)) return true;
  }
  return false;
}

/** Incoming degree map. */
function inDegree(block: RelationsBlock): Map<string, number> {
  const deg = new Map<string, number>();
  for (const n of block.nodes) deg.set(n.id, 0);
  for (const e of block.edges) {
    deg.set(e.to, (deg.get(e.to) ?? 0) + 1);
  }
  return deg;
}

/**
 * decisionTree: a true arborescence — not merely a DAG with one root.
 * - exactly one root (in-degree 0)
 * - every other node has exactly one parent (in-degree 1)
 * - no cycles, no orphans, all nodes reachable from root
 * Shared child (in-degree > 1) → list / directed-deps family, never a fake tree.
 */
export function validateDecisionTree(block: RelationsBlock): TopologyVerdict {
  const ends = edgeEndsValid(block);
  if (ends.length) {
    return { ok: false, reasonCodes: ends, mode: "list" };
  }
  if (!block.edges.length || block.nodes.length < 2) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_TREE_TOO_SPARSE"], mode: "list" };
  }
  if (hasCycle(block)) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_TREE_CYCLE"], mode: "list" };
  }
  const deg = inDegree(block);
  const roots = [...deg.entries()].filter(([, d]) => d === 0).map(([id]) => id);
  if (roots.length !== 1) {
    return {
      ok: false,
      reasonCodes: ["CV_TOPOLOGY_TREE_NOT_SINGLE_ROOT"],
      mode: "list",
    };
  }
  for (const [id, d] of deg) {
    if (id === roots[0]) continue;
    if (d !== 1) {
      return {
        ok: false,
        reasonCodes: ["CV_TOPOLOGY_TREE_SHARED_CHILD"],
        mode: "list",
      };
    }
  }
  // Every non-root must be reachable from root
  const adj = new Map<string, string[]>();
  for (const n of block.nodes) adj.set(n.id, []);
  for (const e of block.edges) adj.get(e.from)?.push(e.to);
  const seen = new Set<string>();
  const stack = [roots[0]!];
  while (stack.length) {
    const id = stack.pop()!;
    if (seen.has(id)) continue;
    seen.add(id);
    for (const nxt of adj.get(id) ?? []) stack.push(nxt);
  }
  if (seen.size !== block.nodes.length) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_TREE_DISCONNECTED"], mode: "list" };
  }
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_TREE_OK"], mode: "directed" };
}

/**
 * dependencies: directed DAG preferred; cycles → list fallback (F2-03).
 */
export function validateDependencies(block: RelationsBlock): TopologyVerdict {
  const ends = edgeEndsValid(block);
  if (ends.length) {
    return { ok: false, reasonCodes: ends, mode: "list" };
  }
  if (!block.edges.length) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_DEPS_NO_EDGES"], mode: "list" };
  }
  if (hasCycle(block)) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_DEPS_CYCLE"], mode: "list" };
  }
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_DEPS_OK"], mode: "directed" };
}

/**
 * parallelProcess: at least 2 nodes; edges optional (lanes).
 * If edges present, must not cycle.
 */
export function validateParallelProcess(block: RelationsBlock): TopologyVerdict {
  const ends = edgeEndsValid(block);
  if (ends.length) {
    return { ok: false, reasonCodes: ends, mode: "list" };
  }
  if (block.nodes.length < 2) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_PARALLEL_TOO_FEW"], mode: "list" };
  }
  if (block.edges.length && hasCycle(block)) {
    return { ok: false, reasonCodes: ["CV_TOPOLOGY_PARALLEL_CYCLE"], mode: "list" };
  }
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_PARALLEL_OK"], mode: "directed" };
}

export function validateRelationsTopology(block: RelationsBlock): TopologyVerdict {
  const hint = block.layoutHint;
  if (hint === "decisionTree") return validateDecisionTree(block);
  if (hint === "dependencies") return validateDependencies(block);
  if (hint === "parallelProcess") return validateParallelProcess(block);
  // No specialized hint → list is correct (not a failure of directed family)
  return { ok: true, reasonCodes: ["CV_TOPOLOGY_LIST_DEFAULT"], mode: "list" };
}

/** Topological layers for DAG rendering (F3). Empty if cycle. */
export function topologicalLayers(block: RelationsBlock): string[][] {
  if (hasCycle(block)) return [];
  const deg = inDegree(block);
  const adj = new Map<string, string[]>();
  for (const n of block.nodes) adj.set(n.id, []);
  for (const e of block.edges) adj.get(e.from)?.push(e.to);

  const layers: string[][] = [];
  let frontier = [...deg.entries()].filter(([, d]) => d === 0).map(([id]) => id);
  const placed = new Set<string>();
  while (frontier.length) {
    layers.push(frontier);
    for (const id of frontier) placed.add(id);
    const next: string[] = [];
    for (const id of frontier) {
      for (const nxt of adj.get(id) ?? []) {
        const d = (deg.get(nxt) ?? 1) - 1;
        deg.set(nxt, d);
        if (d === 0 && !placed.has(nxt)) next.push(nxt);
      }
    }
    frontier = next;
  }
  // orphans not reached
  for (const n of block.nodes) {
    if (!placed.has(n.id)) {
      layers.push([n.id]);
      placed.add(n.id);
    }
  }
  return layers;
}
```

### `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/admission.ts`

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
import { mayPresentGraphicComposition, maySubstituteNarrative } from "./fidelity";
import { validateRelationsTopology } from "./topology";

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
  // F2 — structural topology before claiming directed layout.
  if (block.layoutHint || edges > 0) {
    const topo = validateRelationsTopology(
      block.layoutHint
        ? block
        : { ...block, layoutHint: "dependencies" },
    );
    reasons.push(...topo.reasonCodes);
    if (!topo.ok || topo.mode === "list") {
      reasons.push("CV_RELATIONS_TOPOLOGY_LIST_FALLBACK");
      return { variant: "list", reasonCodes: reasons };
    }
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

  // Strategy A — single semantic authority: sections own substance; body policy is identity-based.
  if (composition.contentAuthority === "canonical_sections") {
    if (!projectionSubstanceRenderComplete(composition)) {
      fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
      return "markdown_only";
    }
    if (!hasGraphicBlocks(composition)) {
      fallbackReasons.push("CV_BODY_CANONICAL_NARRATIVE_SUBSTITUTE");
      return "substitute";
    }
    fallbackReasons.push("CV_BODY_CANONICAL_GRAPHIC_COMPLEMENT");
    return "complement";
  }

  const narrativeOnly = fallbackReasons.includes("CV_NARRATIVE_ONLY");
  if (narrativeOnly && !hasGraphicBlocks(composition)) {
    const narr = maySubstituteNarrative(composition, canonicalText);
    fallbackReasons.push(...narr.reasonCodes);
    return narr.ok ? "substitute" : "markdown_only";
  }

  if (!projectionSubstanceRenderComplete(composition)) {
    fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
    return "markdown_only";
  }

  if (!hasGraphicBlocks(composition)) {
    const narr = maySubstituteNarrative(composition, canonicalText);
    fallbackReasons.push(...narr.reasonCodes);
    return narr.ok ? "substitute" : "markdown_only";
  }

  const fidelity = mayPresentGraphicComposition(composition, canonicalText);
  fallbackReasons.push(...fidelity.reasonCodes);
  if (!fidelity.ok) {
    return "markdown_only";
  }
  // Legacy dual-author: aligned graphics complement replyDraft (never mask).
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
  capacityNotes.push("CV_SCHEMA_WRITE_PROJECTION_V1_ONLY");

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

### `projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/index.ts`

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
  extractProjectionClaims,
  mayPresentGraphicComposition,
  maySubstituteNarrative,
  projectionAnchorsAlignWithCanonical,
  detectCrudeContradictions,
  detectPreferenceContradiction,
  claimsSupportedByCanonical,
} from "./fidelity";

export {
  validateRelationsTopology,
  validateDecisionTree,
  validateDependencies,
  validateParallelProcess,
  topologicalLayers,
  type TopologyVerdict,
} from "./topology";

export { deriveReplyDraftFromCanonicalSections } from "./derive-text";
```

### `projects/sfia-studio-next/web/tests/unit/canonical-sections-strategy-a.test.ts`

```ts
import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  deriveReplyDraftFromCanonicalSections,
  mayPresentGraphicComposition,
  validateDecisionTree,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
} from "@/domains/conversation/visual-composition";
import { validateNoraTurnQualification } from "@/domains/conversation/semantic-qualification";

describe("Strategy A — canonical semantic sections (C-01–C-04)", () => {
  it("SC-derive: projection-v1 sets contentAuthority and derives replyDraft on validate", () => {
    const raw = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      replyDraft: "TEXTE INDEPENDANT QUI DIVERGE",
      intents: [],
      visualComposition: {
        schemaVersion: VISUAL_COMPOSITION_SCHEMA,
        blocks: [
          {
            kind: "text",
            id: "t1",
            markdown: "Prose naturelle : Option Alpha reste préférable si latence critique.",
          },
          {
            kind: "comparison",
            id: "c1",
            title: "Alpha vs Beta",
            alternatives: [
              { id: "a", title: "Option Alpha", summary: "latence basse" },
              { id: "b", title: "Option Beta", summary: "latence haute" },
            ],
            textAlternative: "Alpha vs Beta",
          },
        ],
      },
    };
    const v = validateNoraTurnQualification(raw);
    expect(v.ok).toBe(true);
    if (!v.ok) return;
    expect(v.value.visualComposition?.contentAuthority).toBe("canonical_sections");
    expect(v.value.replyDraft).toContain("Prose naturelle");
    expect(v.value.replyDraft).toContain("Option Alpha");
    expect(v.value.replyDraft).not.toContain("TEXTE INDEPENDANT QUI DIVERGE");
  });

  it("SC-identity: graphics admitted without lexical claim matching when canonical", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "c1",
          title: "A vs B",
          alternatives: [
            { id: "a", title: "Alpha", summary: "sa" },
            { id: "b", title: "Beta", summary: "sb" },
          ],
          textAlternative: "A vs B",
        },
      ],
    })!;
    expect(comp.contentAuthority).toBe("canonical_sections");
    const gate = mayPresentGraphicComposition(comp, "texte sans les titres");
    expect(gate.ok).toBe(true);
    expect(gate.reasonCodes).toContain("CV_FIDELITY_IDENTITY_CANONICAL_SECTIONS");
    const adm = admitConversationalComposition(comp, {
      canonicalText: "texte sans les titres",
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("complement");
  });

  it("SC-legacy: e05 still requires claim support (Strategy B path)", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [
        {
          kind: "comparison",
          id: "c1",
          title: "A vs B",
          alternatives: [
            { id: "a", title: "Alpha", summary: "sa" },
            { id: "b", title: "Beta", summary: "sb" },
          ],
          textAlternative: "A vs B",
        },
      ],
    })!;
    expect(comp.contentAuthority).toBe("legacy_projection");
    const gate = mayPresentGraphicComposition(comp, "texte sans options");
    expect(gate.ok).toBe(false);
  });

  it("SC-10: derived text is exhaustive for structured blocks", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "comparison",
          id: "c1",
          title: "Choix",
          alternatives: [
            { id: "a", title: "Plan A", summary: "économe", pros: ["rapide"], cons: ["limité"] },
            { id: "b", title: "Plan B", summary: "complet", pros: ["riche"], cons: ["lourd"] },
          ],
          recommendation: "Préférer Plan A si budget serré.",
          textAlternative: "A vs B",
        },
      ],
    })!;
    const draft = deriveReplyDraftFromCanonicalSections(comp)!;
    expect(draft).toContain("Plan A");
    expect(draft).toContain("économe");
    expect(draft).toContain("rapide");
    expect(draft).toContain("Préférer Plan A");
  });
});

describe("Topology — true tree vs DAG (C-11)", () => {
  it("SC-20: shared child refuses decisionTree directed", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t",
          title: "DAG pas arbre",
          layoutHint: "decisionTree",
          nodes: [
            { id: "a", label: "Racine A", kind: "unknown" },
            { id: "b", label: "Racine B", kind: "unknown" },
            { id: "c", label: "Enfant partage", kind: "hypothesis" },
          ],
          edges: [
            { from: "a", to: "c", relation: "flow" },
            { from: "b", to: "c", relation: "flow" },
          ],
          textAlternative: "shared",
        },
      ],
    })!;
    const block = comp.blocks[0] as Extract<(typeof comp.blocks)[number], { kind: "relations" }>;
    // two roots → NOT_SINGLE_ROOT; if we force one root with shared child:
    const singleRootShared = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t2",
          title: "Enfant partage",
          layoutHint: "decisionTree",
          nodes: [
            { id: "r", label: "Racine", kind: "unknown" },
            { id: "x", label: "Branche X", kind: "hypothesis" },
            { id: "y", label: "Branche Y", kind: "hypothesis" },
            { id: "z", label: "Enfant partage", kind: "finding" },
          ],
          edges: [
            { from: "r", to: "x", relation: "condition_true" },
            { from: "r", to: "y", relation: "condition_false" },
            { from: "x", to: "z", relation: "flow" },
            { from: "y", to: "z", relation: "flow" },
          ],
          textAlternative: "diamond",
        },
      ],
    })!;
    const diamond = singleRootShared.blocks[0] as Extract<
      (typeof singleRootShared.blocks)[number],
      { kind: "relations" }
    >;
    expect(validateDecisionTree(block).ok).toBe(false);
    expect(validateDecisionTree(diamond).reasonCodes).toContain("CV_TOPOLOGY_TREE_SHARED_CHILD");
    const adm = admitConversationalComposition(singleRootShared, {
      canonicalText: "x",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.variant).toBe("list");
  });
});
```

### `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/architecture-canonical-sections-strategy-a.md`

```md
# Fiche architecture — Strategy A sections sémantiques canoniques

**Date :** 2026-11-18
**Lane :** DEV · **NO RELEASE**
**Base code :** tip `a783f014` + WT
**Orientation Morris :** sections canoniques (doc 05 §3.3)

## 1–12 — Flux observé

| # | Point | État code |
| --- | --- | --- |
| 1 | Production | `nora-adapter.ts` Agents SDK / fixture → `NoraTurnQualification` |
| 2 | Schéma D3 | `NoraTurnQualificationSchema` (`ml4c-sem-qual-v1`) + `visualComposition?` |
| 3 | replyDraft | Champ string ≤12000 ; **dérivé** si `contentAuthority=canonical_sections` |
| 4 | visualComposition | Blocs structured = sections ; WRITE `conversational-composition-projection-v1` |
| 5 | Validateur | `validateNoraTurnQualification` → soft-sanitize composition + derive |
| 6 | Texte | Message `content` = `qualification.replyDraft` (dérivé ou narrative seule) |
| 7 | Graphique | `NoraComposition` + admission CV-* depuis les **mêmes** blocs |
| 8 | Persistance | `stashTurnQualification` → `resultJson.semanticQualification` (existant) |
| 9 | UNKNOWN | Chemins existants ; pas de re-run pour layout |
| 10 | Historique | Parse e05 `legacy_projection` + fidélité claims ; projection-v1 identity |
| 11 | SDK | `@openai/agents@^0.21.0` ; AgentOutputSchema literal projection-v1 |
| 12 | Blast | Pas de migration DB ; pas de second message ; D4/D6/D7 inchangés |

## Option retenue

`visualComposition` (projection-v1) = **autorité sémantique unique** pour les nouveaux tours.
`replyDraft` = dérivation déterministe (`deriveReplyDraftFromCanonicalSections`).
Pas de table annexe, pas de second moteur IA.

## Alternatives rejetées

| Option | Motif |
| --- | --- |
| Dual replyDraft + composition (Strategy B) | Deux histoires → fidélité lexicale insuffisante |
| Nouveau champ `semanticSections` parallèle | Duplication schéma / blast SDK |
| Migration physique des tours | STOP contrat — GO Morris requis |
| Ré-génération IA pour layout | Interdit C-16 / M1 |

## STOP structurels

Aucun déclenché : pas de migration, pas de rupture d'identité turn, pas de changement d'autorité D3/D6.

## Dette / exit

- Fixtures S* encore en e05 (lecture legacy) — migrer progressivement vers projection-v1 en WRITE fixtures.
- Layout CSS/listes d'arêtes ≠ diagramme connecté Figma 07 pixel — gap capacité déclaré si non prouvé.
- LIVE/REAL Nora : NOT RUN.
```

### `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-status.md`

```md
# Matrice C-01–C-22 — Strategy A (après cycle)

| ID | Avant (Strategy B / F1–F5) | Après Strategy A | Preuve |
| --- | --- | --- | --- |
| C-01 | Dual contenu | Source unique projection-v1 | `validateNoraTurnQualification` derive |
| C-02 | Lexical fidelity | Identity path + legacy gate | `fidelity.ts` / tests SC-* |
| C-03 | replyDraft autorité | replyDraft dérivé | `derive-text.ts` |
| C-04 | Claims ⊆ draft | Identity pour canonical | unit Strategy A |
| C-05 | WRITE projection-v1 | inchangé + authority flag | parseVisualComposition |
| C-06 | READ dual e05 | KEEP READ COMPAT | legacy tests |
| C-08 | Cartes/matrice | conservé | T02 / admission |
| C-09 | Séquences | conservé | T02 S4 |
| C-10 | Déps CSS layers | conservé + directed edges | f5 deps PNG / T02 |
| C-11 | DAG≈arbre | **vrai arbre** (1 parent) | `CV_TOPOLOGY_TREE_SHARED_CHILD` |
| C-12 | Parallel sync only | **toutes arêtes** (→/⇄) | parallel-edges testid |
| C-14 | MAX_ALTS=12 | inchangé | admission tests |
| C-15–17 | Reprise / UNKNOWN | non modifié (R05 propriétaire) | NOT RUN absorb |
| C-19 | Historique | e05 read + projection-v1 write | SC-legacy |
| Autres | — | PARTIAL / NOT RUN live | — |

## Qualification Fake/Real

| Niveau | Statut |
| --- | --- |
| DETERMINISTIC PROVEN | OUI (unit + T02 fixture) |
| REAL BOUNDARY OpenAI | NOT RUN |
| END-TO-END REAL | NOT RUN |
```

### `projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx`

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
  topologicalLayers,
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
    const edgeArrow = (relation: string | undefined) =>
      relation === "sync" ? "⇄" : "→";
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
        {block.edges.length ? (
          <ul
            className="fig-comp-parallel-edges"
            data-testid="nora-composition-parallel-edges"
            data-directed="1"
          >
            {block.edges.map((e, i) => (
              <li key={`${e.from}-${e.to}-${i}`} data-relation={e.relation ?? "flow"}>
                <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
                <span className="fig-comp-deps-arrow" aria-hidden>
                  {edgeArrow(e.relation)}
                </span>
                <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
                {e.label ? <span className="fig-comp-deps-label"> ({e.label})</span> : null}
                {e.relation ? (
                  <span className="fig-comp-deps-rel"> · {e.relation}</span>
                ) : null}
              </li>
            ))}
          </ul>
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

  // dependencies (default directed) — F3 layered DAG; arrows are explicit edge rows.
  const layers = topologicalLayers(block);
  const nodeById = new Map(block.nodes.map((n) => [n.id, n] as const));
  return (
    <div
      className="fig-comp-deps"
      data-testid="nora-composition-dependencies"
      data-layout-hint="dependencies"
      data-dep-layers={layers.length || 0}
    >
      {layers.length ? (
        <div className="fig-comp-deps-layers" data-testid="nora-composition-deps-layers">
          {layers.map((layer, li) => (
            <div key={`layer-${li}`} className="fig-comp-deps-layer" data-layer={li}>
              {layer.map((id) => {
                const n = nodeById.get(id);
                if (!n) return null;
                return (
                  <div key={id} className="fig-comp-deps-node" data-node-id={n.id}>
                    <NoraSemanticIcon role={relationRole(n.kind)} />
                    <div>
                      <div className="fig-comp-relations-label">{n.label}</div>
                      {n.detail ? (
                        <div className="fig-comp-relations-detail">{n.detail}</div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ) : (
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
      )}
      {block.edges.length ? (
        <ul
          className="fig-comp-deps-edges"
          data-testid="nora-composition-relations-edges"
          data-directed="1"
        >
          {block.edges.map((e, i) => (
            <li key={`${e.from}-${e.to}-${i}`} data-edge-from={e.from} data-edge-to={e.to}>
              <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
              <span className="fig-comp-deps-arrow" aria-hidden>
                →
              </span>
              <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
              {e.label ? <span className="fig-comp-deps-label"> ({e.label})</span> : null}
              {e.relation ? (
                <span className="fig-comp-deps-rel"> · {e.relation}</span>
              ) : null}
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

### `projects/sfia-studio-next/web/tests/unit/conversational-composition-fidelity.test.ts`

```ts
import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  mayPresentGraphicComposition,
  maySubstituteNarrative,
  validateDecisionTree,
  validateDependencies,
  validateParallelProcess,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
  VisualCompositionAgentOutputSchema,
} from "@/domains/conversation/visual-composition";

const comparisonRaw = {
  schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
  blocks: [
    {
      kind: "comparison",
      id: "cmp",
      title: "A vs B",
      alternatives: [
        {
          id: "a",
          title: "Option Alpha",
          summary: "latence basse",
          pros: ["rapide"],
          cons: ["couteux"],
        },
        {
          id: "b",
          title: "Option Beta",
          summary: "latence haute",
          pros: ["econome"],
          cons: ["lent"],
        },
      ],
      recommendation: "Preferer Option Alpha si latence critique.",
      textAlternative: "Alpha vs Beta",
    },
  ],
};

const faithfulCanon = [
  "Comparaison Option Alpha (latence basse, rapide, couteux)",
  "et Option Beta (latence haute, econome, lent).",
  "Preferer Option Alpha si latence critique.",
].join(" ");

describe("F1 canonical fidelity — adversarial", () => {
  it("F1-01 refuses opposite recommendation (titles alone insufficient)", () => {
    const opposite = {
      ...comparisonRaw,
      blocks: [
        {
          ...comparisonRaw.blocks[0],
          recommendation: "Preferer Option Beta pour le budget.",
        },
      ],
    };
    const comp = parseVisualComposition(opposite)!;
    // Canon prefers Alpha; projection recommends Beta
    const canon = [
      "Option Alpha latence basse rapide couteux.",
      "Option Beta latence haute econome lent.",
      "Preferer Option Alpha si latence critique.",
      "Preferer Option Beta pour le budget.", // claim support — but preference contradiction
    ].join(" ");
    // Without Beta preference phrase matching Alpha preference detector:
    // Use canon that supports all claims of opposite rec but prefers Alpha explicitly
    const canonPreferAlpha = [
      "Option Alpha latence basse rapide couteux.",
      "Option Beta latence haute econome lent.",
      "Preferer Option Beta pour le budget.",
      "Je recommande Option Alpha en priorite.",
    ].join(" ");
    const gate = mayPresentGraphicComposition(comp, canonPreferAlpha);
    // All substance claims present → preference detector may fire
    expect(gate.ok).toBe(false);
  });

  it("F1-02 refuses inverted pros/cons not supported by canonical", () => {
    const comp = parseVisualComposition(comparisonRaw)!;
    const titlesOnly =
      "Option Alpha et Option Beta sont comparees. Preferer Option Alpha si latence critique.";
    const gate = mayPresentGraphicComposition(comp, titlesOnly);
    expect(gate.ok).toBe(false);
    expect(gate.reasonCodes).toContain("CV_FIDELITY_CLAIM_MISSING_IN_CANONICAL");
  });

  it("F1-04 refuses unfounded numeric criteria (legacy dual-author)", () => {
    const withNums = {
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [
        {
          kind: "comparison",
          id: "cmp",
          title: "Couts",
          alternatives: [
            { id: "a", title: "Plan A", summary: "economique" },
            { id: "b", title: "Plan B", summary: "premium" },
          ],
          criteria: [
            { id: "c", label: "Budget", values: { a: "12000 EUR", b: "45000 EUR" } },
          ],
          textAlternative: "A vs B",
        },
      ],
    };
    const comp = parseVisualComposition(withNums)!;
    expect(comp.contentAuthority).toBe("legacy_projection");
    const gate = mayPresentGraphicComposition(
      comp,
      "Plan A economique et Plan B premium. Budget qualitatif seulement.",
    );
    expect(gate.ok).toBe(false);
  });

  it("F1-06 refuses narrative substitute when text differs (legacy dual-author)", () => {
    const textOnly = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [{ kind: "text", id: "t1", markdown: "Texte invente divergent." }],
    })!;
    expect(textOnly.contentAuthority).toBe("legacy_projection");
    const narr = maySubstituteNarrative(textOnly, "Reponse canonique reelle.");
    expect(narr.ok).toBe(false);
    const adm = admitConversationalComposition(textOnly, {
      canonicalText: "Reponse canonique reelle.",
    });
    expect(adm.bodyPolicy).toBe("markdown_only");
  });

  it("F1-07 allows complement when all claims supported", () => {
    const comp = parseVisualComposition(comparisonRaw)!;
    const adm = admitConversationalComposition(comp, { canonicalText: faithfulCanon });
    expect(adm.bodyPolicy).toBe("complement");
    expect(adm.fallbackReasons).toContain("CV_BODY_GRAPHIC_COMPLEMENT_ONLY");
  });

  it("narrative-only may substitute when text ⊆ canonical", () => {
    const textOnly = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t1", markdown: "Reponse simple." }],
    })!;
    const adm = admitConversationalComposition(textOnly, {
      canonicalText: "Reponse simple.",
    });
    expect(adm.bodyPolicy).toBe("substitute");
  });

  it("legacy e05 schema still parses (F4 read)", () => {
    const legacy = parseVisualComposition(comparisonRaw);
    expect(legacy?.schemaVersion).toBe(VISUAL_COMPOSITION_SCHEMA_LEGACY);
  });

  it("active schema parses; agent write rejects legacy (F4)", () => {
    const modern = parseVisualComposition({
      ...comparisonRaw,
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    });
    expect(modern?.schemaVersion).toBe(VISUAL_COMPOSITION_SCHEMA);
    const writeLegacy = VisualCompositionAgentOutputSchema.safeParse(comparisonRaw);
    expect(writeLegacy.success).toBe(false);
    const writeModern = VisualCompositionAgentOutputSchema.safeParse({
      ...comparisonRaw,
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    });
    expect(writeModern.success).toBe(true);
  });
});

describe("F2 topology validation", () => {
  it("F2-01 refuses decisionTree with cycle → list", () => {
    const tree = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t",
          title: "Cycle",
          layoutHint: "decisionTree",
          nodes: [
            { id: "a", label: "Noeud A", kind: "unknown" },
            { id: "b", label: "Noeud B", kind: "unknown" },
          ],
          edges: [
            { from: "a", to: "b", relation: "flow" },
            { from: "b", to: "a", relation: "flow" },
          ],
          textAlternative: "cycle",
        },
      ],
    })!;
    expect(tree).toBeTruthy();
    const block = tree.blocks[0] as Extract<(typeof tree.blocks)[number], { kind: "relations" }>;
    expect(validateDecisionTree(block).ok).toBe(false);
    const adm = admitConversationalComposition(tree, {
      canonicalText: "Noeud A Noeud B",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.variant).toBe("list");
    expect(adm.admitted[0]?.reasonCodes).toContain("CV_TOPOLOGY_TREE_CYCLE");
  });

  it("F2-02 refuses multi-root tree → list", () => {
    const tree = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t",
          title: "Foret",
          layoutHint: "decisionTree",
          nodes: [
            { id: "a", label: "Racine A", kind: "unknown" },
            { id: "b", label: "Racine B", kind: "unknown" },
            { id: "c", label: "Feuille", kind: "hypothesis" },
          ],
          edges: [{ from: "a", to: "c", relation: "flow" }],
          textAlternative: "foret",
        },
      ],
    })!;
    expect(tree).toBeTruthy();
    const block = tree.blocks[0] as Extract<(typeof tree.blocks)[number], { kind: "relations" }>;
    expect(validateDecisionTree(block).reasonCodes).toContain(
      "CV_TOPOLOGY_TREE_NOT_SINGLE_ROOT",
    );
    const adm = admitConversationalComposition(tree, {
      canonicalText: "Racine A Racine B Feuille",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.variant).toBe("list");
  });

  it("F2-03 dependencies cycle → list", () => {
    const deps = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "d",
          title: "Deps",
          layoutHint: "dependencies",
          nodes: [
            { id: "x", label: "Etape X", kind: "observation" },
            { id: "y", label: "Etape Y", kind: "hypothesis" },
          ],
          edges: [
            { from: "x", to: "y", relation: "depends_on" },
            { from: "y", to: "x", relation: "depends_on" },
          ],
          textAlternative: "cycle deps",
        },
      ],
    })!;
    expect(deps).toBeTruthy();
    const block = deps.blocks[0] as Extract<(typeof deps.blocks)[number], { kind: "relations" }>;
    expect(validateDependencies(block).ok).toBe(false);
    const adm = admitConversationalComposition(deps, {
      canonicalText: "Etape X Etape Y",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.variant).toBe("list");
  });

  it("F2-04 valid parallel → directed", () => {
    const par = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "p",
          title: "Parallele",
          layoutHint: "parallelProcess",
          nodes: [
            {
              id: "a1",
              label: "Inventaire site A",
              kind: "observation",
              laneId: "Voie A",
            },
            {
              id: "b1",
              label: "Inventaire site B",
              kind: "observation",
              laneId: "Voie B",
            },
          ],
          edges: [],
          textAlternative: "parallel",
        },
      ],
    })!;
    expect(par).toBeTruthy();
    const block = par.blocks[0] as Extract<(typeof par.blocks)[number], { kind: "relations" }>;
    expect(validateParallelProcess(block).ok).toBe(true);
    const adm = admitConversationalComposition(par, {
      canonicalText: "Inventaire site A Inventaire site B",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.variant).toBe("directed");
    expect(adm.admitted[0]?.family).toBe("parallelProcess");
  });

  it("valid decisionTree → directed", () => {
    const tree = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "t",
          title: "Arbre",
          layoutHint: "decisionTree",
          nodes: [
            { id: "c", label: "Condition roles clarifies", kind: "unknown" },
            { id: "y", label: "Approche progressive", kind: "hypothesis" },
            { id: "n", label: "Reporter le deploiement", kind: "hypothesis" },
          ],
          edges: [
            { from: "c", to: "y", relation: "condition_true", label: "oui" },
            { from: "c", to: "n", relation: "condition_false", label: "non" },
          ],
          textAlternative: "arbre",
        },
      ],
    })!;
    expect(tree).toBeTruthy();
    const adm = admitConversationalComposition(tree, {
      canonicalText:
        "Condition roles clarifies Approche progressive Reporter le deploiement oui non",
      containerWidthPx: 900,
    });
    expect(adm.admitted[0]?.family).toBe("decisionPaths");
    expect(adm.admitted[0]?.variant).toBe("directed");
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/conversational-composition-admission.test.ts`

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

    const block = five.blocks[0];
    const parts: string[] = ["Comparaison"];
    if (block && block.kind === "comparison") {
      for (const a of block.alternatives) {
        parts.push(a.title, a.summary, ...(a.pros ?? []), ...(a.cons ?? []));
      }
      if (block.criteria) {
        for (const c of block.criteria) {
          parts.push(c.label, ...Object.values(c.values));
        }
      }
      if (block.recommendation) parts.push(block.recommendation);
    }
    const adm = admitConversationalComposition(five, {
      containerWidthPx: 960,
      canonicalText: parts.join(" "),
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
      canonicalText: "Amont Aval Convergence alimente",
    });
    expect(adm.admitted[0]?.family).toBe("dependencies");
    expect(adm.bodyPolicy).toBe("complement");
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
      canonicalText: "Intro A sa B sb",
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

---

## 7. Diffs exploitables — fichiers modifiés (vs HEAD)


### `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 3a2a2875..8bcd4978 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -12,6 +12,7 @@ import {
   parseVisualComposition,
   VisualCompositionAgentOutputSchema,
 } from "./visual-composition";
+import { deriveReplyDraftFromCanonicalSections } from "./conversational-composition/derive-text";

 export const SEMANTIC_QUALIFICATION_SCHEMA_VERSION = "ml4c-sem-qual-v1" as const;

@@ -283,6 +284,14 @@ export function validateNoraTurnQualification(raw: unknown): QualificationValida
     const cleaned = parseVisualComposition(q.visualComposition);
     if (cleaned) {
       (q as { visualComposition?: unknown }).visualComposition = cleaned;
+      // Strategy A / C-01–C-04: canonical sections are the single semantic authority.
+      // Derive replyDraft for compatibility — do not keep a second independent narrative.
+      if (cleaned.contentAuthority === "canonical_sections") {
+        const derived = deriveReplyDraftFromCanonicalSections(cleaned);
+        if (derived) {
+          (q as { replyDraft: string }).replyDraft = derived;
+        }
+      }
     } else {
       delete (q as { visualComposition?: unknown }).visualComposition;
     }
```

### `projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
index 7a6c2abf..2c2bed74 100644
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
@@ -248,9 +275,18 @@ export type VisualBlock =
   | ChoicesAnchorBlock
   | ReferencesAnchorBlock;

+/**
+ * Strategy A (canonical sections): composition is the single semantic authority;
+ * replyDraft is derived. Legacy Strategy B projections keep independent replyDraft
+ * and require claim-subset fidelity before graphic presentation.
+ */
+export type CompositionContentAuthority = "canonical_sections" | "legacy_projection";
+
 export type VisualComposition = {
-  schemaVersion: typeof VISUAL_COMPOSITION_SCHEMA;
+  schemaVersion: VisualCompositionSchemaVersion;
   blocks: VisualBlock[];
+  /** Set by parse/validate — not agent-authored independently of schemaVersion. */
+  contentAuthority?: CompositionContentAuthority;
 };

 /**
@@ -298,6 +334,7 @@ const VisualIconAgentSchema = z.enum([
   "source",
 ]);

+/** Agent WRITE path — active projection schema only (F4). Legacy accepted on READ/parse. */
 export const VisualCompositionAgentOutputSchema = z.object({
   schemaVersion: z.literal(VISUAL_COMPOSITION_SCHEMA),
   blocks: z
@@ -325,7 +362,7 @@ export const VisualCompositionAgentOutputSchema = z.object({
                 cons: z.array(z.string().max(200)).max(4).optional(),
               }),
             )
-            .max(5),
+            .max(12),
           criteria: z
             .array(
               z.object({
@@ -367,6 +404,9 @@ export const VisualCompositionAgentOutputSchema = z.object({
           id: z.string().max(64),
           title: z.string().max(160),
           textAlternative: z.string().max(2000),
+          layoutHint: z
+            .enum(["dependencies", "decisionTree", "parallelProcess"])
+            .optional(),
           nodes: z
             .array(
               z.object({
@@ -380,18 +420,29 @@ export const VisualCompositionAgentOutputSchema = z.object({
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
@@ -445,10 +496,10 @@ export type ParseVisualCompositionResult =
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
@@ -868,10 +919,30 @@ function parseRelations(
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
@@ -895,15 +966,34 @@ function parseRelations(
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
@@ -914,6 +1004,7 @@ function parseRelations(
     textAlternative,
     provenance: provenance ?? undefined,
     preferListFallback,
+    layoutHint,
     role: parseRole(o.role) ?? "information",
     icon: parseIcon(o.icon),
   };
@@ -1072,9 +1163,10 @@ export function parseVisualCompositionDetailed(raw: unknown): ParseVisualComposi
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
@@ -1113,9 +1205,15 @@ export function parseVisualCompositionDetailed(raw: unknown): ParseVisualComposi
   if (!blocks.length) {
     return { ok: false, reason: "VISUAL_COMPOSITION_INVALID_OR_EMPTY" };
   }
+  const contentAuthority: CompositionContentAuthority =
+    schemaVersion === VISUAL_COMPOSITION_SCHEMA
+      ? "canonical_sections"
+      : "legacy_projection";
   return {
     ok: true,
-    value: { schemaVersion: VISUAL_COMPOSITION_SCHEMA, blocks },
+    // Preserve legacy schemaVersion on historical payloads; new writes use active schema.
+    // projection-v1 = Strategy A canonical sections; e05 = legacy dual-author projection.
+    value: { schemaVersion, blocks, contentAuthority },
   };
 }

```

### `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 1d7949f2..5cb550e6 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -536,7 +536,7 @@ async function runLiveWithTools(
     "",
     "SORTIE STRUCTURÉE OBLIGATOIRE (qualification sémantique) :",
     "- Remplis l'enveloppe typée (schemaVersion ml4c-sem-qual-v1).",
-    "- replyDraft = texte destiné au Pilote (français, Markdown utile, ≤12000).",
+    "- replyDraft = texte destiné au Pilote (français, Markdown utile, ≤12000). Si visualComposition (sections canoniques) est fournie, Studio DERIVE replyDraft depuis ces sections — ne produis pas une seconde histoire divergente ; place la prose naturelle dans des blocs text et la substance structurée dans comparison|sequence|relations|synthesis.",
     "- goal = compréhension du TOUR courant (demande immédiate / reformulation locale), sans invention.",
     "- projectIntention = intention MÉTIER DURABLE du projet. Distincte de goal et de proposedProjectName.",
     "- Demande ordinaire, conseil local, prochaines étapes, renommage ou confirmation ponctuelle : projectIntention = chaîne vide (conserver l'intention antérieure). Ne jamais recopier goal dans projectIntention.",
@@ -547,7 +547,7 @@ async function runLiveWithTools(
     "- Lorsque tu réévalues les questions ouvertes (QUALIFIED ou NEEDS_CLARIFICATION sur ce périmètre) : TOUJOURS renseigner clarifications (éventuellement []). Ne l'omets que si tu n'as pas réévalué ce périmètre.",
     "- continueChoices (optionnel) = propositions de POURSUITE conversationnelle (ex. « Approfondir B ») avec id, label et transmitText. NE PAS y recopier clarifications. Omettre ou [] si aucune poursuite utile.",
     "- resourceReferences (optionnel) = références consultables document/git/external — ce ne sont PAS des choix de poursuite.",
-    "- visualComposition (optionnel, schema e05-visual-composition-v1) = composition ordonnée de blocs text|comparison|sequence|relations|synthesis. Omettre pour une réponse purement textuelle. N'invente jamais de données manquantes ; chaque bloc graphique DOIT fournir textAlternative. Jamais de HTML/CSS/JS. Ne crée aucun effet métier par la seule présence d'un bloc.",
+    "- visualComposition (optionnel, WRITE schema conversational-composition-projection-v1 = sections sémantiques CANONIQUES ; lecture historique e05-visual-composition-v1) = source unique de sens pour ce tour : blocs text|comparison|sequence|relations|synthesis. Studio dérive le texte de lecture et la vue graphique depuis la même structure. Relations : layoutHint optionnel dependencies|decisionTree|parallelProcess ; edges.relation optionnel depends_on|condition_true|condition_false|sync|flow ; nodes.laneId pour voies parallèles. Omettre pour une réponse purement narrative (replyDraft seul). N'invente jamais de données manquantes ; chaque bloc graphique DOIT fournir textAlternative. Jamais de HTML/CSS/JS. Ne crée aucun effet métier par la seule présence d'un bloc.",
     "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
     "- preparationAssessmentExplanation = justification qualitative courte fondée sur les acquis réels ; respecter les négations (« n'est pas suffisant » ≠ BASE_SUFFICIENTE).",
     "- Si tu n'as pas d'appréciation fiable : omets preparationAssessment (ne pas inventer BASE_SUFFICIENTE).",
```

### `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 05ae9e30..b97bc7cc 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -643,7 +643,14 @@ register(
   E05_S2_DIAGNOSTIC,
   dialogue(
     "Diagnostic coordination multi-sites — établi vs hypothétique",
-    "Diagnostic du besoin de coordination (fallback textuel).",
+    [
+      "Diagnostic du besoin de coordination.",
+      "Éléments liés — sans causalité inventée :",
+      "Pratiques locales divergentes (peut contribuer) et Rôles d'arbitrage flous (peut contribuer)",
+      "vers Friction de coordination ; Impact réel non mesuré.",
+      "À vérifier ensuite : Cartographier les pratiques par site ; Identifier le porteur d'arbitrage ;",
+      "Ne pas conclure à un dysfonctionnement chiffré.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_RELATIONS", "S2"],
     {
       clarifications: [
@@ -687,6 +694,7 @@ register(
             id: "s2-rel",
             title: "Éléments liés — sans causalité inventée",
             role: "information",
+            layoutHint: "dependencies",
             nodes: [
               { id: "o1", label: "Pratiques locales divergentes", kind: "observation" },
               { id: "o2", label: "Rôles d'arbitrage flous", kind: "observation" },
@@ -694,8 +702,18 @@ register(
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
@@ -738,7 +756,16 @@ register(
   E05_S3_COMPARISON,
   dialogue(
     "Comparaison déploiement progressif vs simultané",
-    "Comparaison des approches (fallback).",
+    [
+      "Comparaison Progressive vs simultanée.",
+      "Déploiement progressif : Étendre site par site après apprentissage local.",
+      "Avantages : Apprentissage contrôlé ; Réversibilité locale. Limite : Cohérence temporaire inégale.",
+      "Déploiement simultané : Aligner tous les sites dans la même fenêtre.",
+      "Avantages : Cohérence immédiate. Limites : Charge de conduite élevée ; Peu de marge d'apprentissage.",
+      "Critères : Risque de conduite (Modéré / Élevé), Apprentissage (Fort / Faible),",
+      "Dépendance aux rôles clarifiés (Utile avant chaque vague / Critique dès le départ).",
+      "Si les responsabilités d'arbitrage ne sont pas encore claires, préférer une approche progressive — avis conditionnel, pas une décision enregistrée.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_COMPARISON", "S3"],
     {
       continueChoices: [
@@ -845,7 +872,13 @@ register(
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
@@ -897,7 +930,15 @@ register(
   E05_S5_COMPOSITE,
   dialogue(
     "Recommandation composite conditionnelle",
-    "Recommandation composite (fallback textuel).",
+    [
+      "Recommandation composite. Points saillants :",
+      "Clarifier l'arbitrage entre sites — Préalable utile avant tout déploiement large ;",
+      "Pratiques locales divergentes ;",
+      "Déploiement simultané trop tôt — Risque de conduite si les rôles sont encore flous.",
+      "Rappel des options : Progressive — Vagues successives, apprentissage local. ;",
+      "Simultanée — Alignement immédiat, charge élevée.",
+      "Je recommande d'avancer en mode progressif **si** l'arbitrage inter-sites est clarifié d'abord. Ce n'est pas une HumanDecision.",
+    ].join(" "),
     ["NO_EFFECT", "VISUAL_COMPOSITE", "S5"],
     {
       clarifications: [
@@ -1018,6 +1059,109 @@ register(
   ),
 );

+const E05_F5_DECISION_TREE =
+  "E05_F5_DECISION_TREE Clarifier avant deploiement progressif ou report";
+const E05_F5_PARALLEL =
+  "E05_F5_PARALLEL Inventaire parallele sites A et B puis revue commune";
+
+register(
+  E05_F5_DECISION_TREE,
+  dialogue(
+    "Arbre de decision roles",
+    [
+      "Arbre de lecture — Condition roles clarifies.",
+      "Si oui : Approche progressive.",
+      "Si non : Reporter le deploiement.",
+      "Aucune HumanDecision n'est creee.",
+    ].join(" "),
+    ["NO_EFFECT", "VISUAL_DECISION_TREE", "F5"],
+    {
+      visualComposition: {
+        schemaVersion: "conversational-composition-projection-v1",
+        blocks: [
+          {
+            kind: "relations",
+            id: "f5-tree",
+            title: "Arbre de lecture",
+            layoutHint: "decisionTree",
+            nodes: [
+              { id: "c", label: "Condition roles clarifies", kind: "unknown" },
+              { id: "y", label: "Approche progressive", kind: "hypothesis" },
+              { id: "n", label: "Reporter le deploiement", kind: "hypothesis" },
+            ],
+            edges: [
+              {
+                from: "c",
+                to: "y",
+                relation: "condition_true",
+                label: "oui",
+              },
+              {
+                from: "c",
+                to: "n",
+                relation: "condition_false",
+                label: "non",
+              },
+            ],
+            textAlternative:
+              "Si roles clarifies → Approche progressive, sinon Reporter le deploiement.",
+          },
+        ],
+      },
+    },
+  ),
+);
+
+register(
+  E05_F5_PARALLEL,
+  dialogue(
+    "Processus parallele inventaires",
+    [
+      "Processus parallele : Inventaire site A et Inventaire site B,",
+      "puis Revue commune (sync pret).",
+    ].join(" "),
+    ["NO_EFFECT", "VISUAL_PARALLEL", "F5"],
+    {
+      visualComposition: {
+        schemaVersion: "conversational-composition-projection-v1",
+        blocks: [
+          {
+            kind: "relations",
+            id: "f5-par",
+            title: "Processus parallele",
+            layoutHint: "parallelProcess",
+            nodes: [
+              {
+                id: "a1",
+                label: "Inventaire site A",
+                kind: "observation",
+                laneId: "Voie A",
+              },
+              {
+                id: "b1",
+                label: "Inventaire site B",
+                kind: "observation",
+                laneId: "Voie B",
+              },
+              {
+                id: "g",
+                label: "Revue commune",
+                kind: "finding",
+                laneId: "Gate",
+              },
+            ],
+            edges: [
+              { from: "a1", to: "g", relation: "sync", label: "pret" },
+              { from: "b1", to: "g", relation: "sync", label: "pret" },
+            ],
+            textAlternative: "Voies A/B puis Revue commune",
+          },
+        ],
+      },
+    },
+  ),
+);
+
 /** Short TEST_BOUNDARY keys for e2e (exact match, same envelopes as the natural utterances). */
 for (const [short, long] of [
   ["E05_S2_DIAGNOSTIC", E05_S2_DIAGNOSTIC],
@@ -1025,6 +1169,8 @@ for (const [short, long] of [
   ["E05_S4_TRAJECTORY", E05_S4_TRAJECTORY],
   ["E05_S5_COMPOSITE", E05_S5_COMPOSITE],
   ["E05_S7_INSUFFICIENT", E05_S7_INSUFFICIENT],
+  ["E05_F5_DECISION_TREE", E05_F5_DECISION_TREE],
+  ["E05_F5_PARALLEL", E05_F5_PARALLEL],
   ["E05_VISUAL_SIMPLE", E05_S1_SIMPLE],
   ["E05_VISUAL_COMPARISON", E05_S3_COMPARISON],
   ["E05_VISUAL_SEQUENCE", E05_S4_TRAJECTORY],
```

### `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`

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

### `projects/sfia-studio-next/web/src/components/figma/NoraVisualComposition.tsx`

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

### `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 8623f598..b73071f3 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -2163,6 +2163,255 @@
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
+.fig-comp-deps-layers {
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+}
+
+.fig-comp-deps-layer {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+  align-items: stretch;
+  padding-bottom: 8px;
+  border-bottom: 1px dashed color-mix(in srgb, var(--fig-line) 80%, transparent);
+}
+
+.fig-comp-deps-layer:last-child {
+  border-bottom: 0;
+  padding-bottom: 0;
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
+.fig-comp-deps-layer .fig-comp-deps-node {
+  margin: 0;
+  flex: 1 1 160px;
+  min-width: min(100%, 140px);
+}
+
+.fig-comp-deps-edges {
+  list-style: none;
+  margin: 10px 0 0;
+  padding: 8px 10px;
+  border-left: 3px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-panel) 70%, transparent);
+}
+
+.fig-comp-deps-edges li {
+  margin: 0 0 6px;
+  overflow-wrap: anywhere;
+}
+
+.fig-comp-deps-arrow {
+  margin: 0 6px;
+  color: var(--fig-accent, #3a6ea5);
+  font-weight: 600;
+}
+
+.fig-comp-deps-rel {
+  color: var(--fig-muted);
+  font-size: 12px;
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
+.fig-comp-parallel-sync,
+.fig-comp-parallel-edges {
+  list-style: none;
+  margin: 10px 0 0;
+  padding: 8px 10px;
+  border-left: 3px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-panel) 70%, transparent);
+  overflow-wrap: anywhere;
+}
+
+.fig-comp-parallel-edges li {
+  margin: 0 0 6px;
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

### `projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
index 37b839c4..bc336bac 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
@@ -522,6 +522,8 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     const E05_S4_TRAJECTORY = "E05_S4_TRAJECTORY";
     const E05_S5_COMPOSITE = "E05_S5_COMPOSITE";
     const E05_S7_INSUFFICIENT = "E05_S7_INSUFFICIENT";
+    const E05_F5_DECISION_TREE = "E05_F5_DECISION_TREE";
+    const E05_F5_PARALLEL = "E05_F5_PARALLEL";

     await page.goto("/login");
     await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
@@ -566,14 +568,67 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
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
     );
+    await expect(page.getByTestId("nora-visual-composition").last()).toHaveAttribute(
+      "data-body-policy",
+      "complement",
+    );
+    // F3 — layered deps + explicit directed edges (not undirected list).
+    await expect(page.getByTestId("nora-composition-deps-layers")).toBeVisible();
+    await expect(page.getByTestId("nora-composition-relations-edges")).toHaveAttribute(
+      "data-directed",
+      "1",
+    );
     await page.screenshot({
       path: path.join(evidenceDir, "runtime-s2-diagnostic-1440.png"),
       fullPage: false,
     });
+    await page.screenshot({
+      path: path.join(evidenceDir, "corrective-runtime-relations-list-1440.png"),
+      fullPage: false,
+    });
+    await page.screenshot({
+      path: path.join(evidenceDir, "f5-runtime-dependencies-directed-1440.png"),
+      fullPage: false,
+    });
+
+    // F5 — decision tree (Figma 08 family) + parallel (Figma 09 family).
+    await ask(E05_F5_DECISION_TREE);
+    const tree = page.getByTestId("nora-composition-decision-tree").last();
+    await expect(tree).toBeVisible({ timeout: 45000 });
+    await expect(page.getByTestId("nora-visual-relations").last()).toHaveAttribute(
+      "data-layout",
+      "directed",
+    );
+    await expect(page.getByTestId("nora-visual-relations").last()).toHaveAttribute(
+      "data-layout-hint",
+      "decisionTree",
+    );
+    await page.screenshot({
+      path: path.join(evidenceDir, "f5-runtime-decision-tree-1440.png"),
+      fullPage: false,
+    });
+
+    await ask(E05_F5_PARALLEL);
+    const parallel = page.getByTestId("nora-composition-parallel").last();
+    await expect(parallel).toBeVisible({ timeout: 45000 });
+    await expect(page.getByTestId("nora-visual-relations").last()).toHaveAttribute(
+      "data-layout-hint",
+      "parallelProcess",
+    );
+    await expect(page.getByTestId("nora-composition-parallel-edges")).toBeVisible();
+    await page.screenshot({
+      path: path.join(evidenceDir, "f5-runtime-parallel-1440.png"),
+      fullPage: false,
+    });

     // S3 — comparison + recommendation + choice/ref anchors + provenance P1-B.
     await ask(E05_S3_COMPARISON);
@@ -593,6 +648,8 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     await expect(s3.getByTestId("nora-visual-prov-link")).toHaveCount(1);
     await expect(s3.getByTestId("nora-ref-link")).toHaveCount(0);
     await expect(s3.getByText(/Consulter · Note de cadrage coordination/i)).toHaveCount(1);
+    // Corrective A — alternative substance remains visible (cards or matrix+details).
+    await expect(s3.getByTestId("nora-composition-alt-detail").first()).toBeVisible();
     await page.screenshot({
       path: path.join(evidenceDir, "runtime-visual-comparison-1440.png"),
       fullPage: false,
@@ -601,6 +658,10 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
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

### `projects/sfia-studio-next/web/tests/unit/conversational-composition-fidelity.test.ts`

_Pas de diff git (fichier non suivi ou inchangé vs HEAD)._\n
### `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 7b64d566..38aa4535 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,81 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-CANONICAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~08:10 CET |
+| Macro-lot | Transition Strategy A — sections sémantiques canoniques + achèvement UX |
+| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
+| Architecture | `visualComposition` projection-v1 = autorité ; `replyDraft` dérivé ; e05 = legacy_projection |
+| P0 | derive-text ; contentAuthority ; validateNoraTurnQualification derive ; tree single-parent |
+| P1 | parallel toutes arêtes ; identity admission path |
+| Preuves | Vitest Strategy A + fidelity + admission 29 PASS ; Playwright T02 PASS |
+| Verdict | (voir Review Pack Full Strategy A) |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-F1F5-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~03:55 CET |
+| Macro-lot | F1–F5 Integrated Corrective (fidélité / topologie / relations / schéma / BROWSER) |
+| Type | Cycle Delivery · Critical · RUN correctif dans EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
+| F1 | Claims substance ⊆ replyDraft ; narrative substitute gate ; préférence contradictoire |
+| F2 | topology.ts — tree/deps/parallel ; cycles/multi-root → list |
+| F3 | deps layers + arêtes dirigées ; tree/parallel CSS |
+| F4 | Agent WRITE `conversational-composition-projection-v1` only ; dual READ e05 |
+| F5 | T02 + fixtures tree/parallel + captures `f5-runtime-*.png` |
+| Preuves | Vitest fidelity+admission 24 PASS ; Playwright T02 PASS ; matrice `f-matrix-fidelity-topology.md` |
+| Verdict | READY WITH RESERVES (voir Review Pack Full F1–F5) |
+
+
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

---

## 8. Tests exécutés

| Suite | Commande | Résultat |
| --- | --- | --- |
| Strategy A + fidelity + admission | `npx vitest run tests/unit/canonical-sections-strategy-a.test.ts tests/unit/conversational-composition-fidelity.test.ts tests/unit/conversational-composition-admission.test.ts` | **29 PASS** |
| T02 + F5 | `npx playwright test tests/e2e/ensemble05-travail-nora.spec.ts -g "T02 visual composition"` | **1 PASS** |
| LIVE OpenAI | — | **NOT RUN** |

---

## 9. Matrice C-01–C-22

Voir `c-matrix-strategy-a-status.md` (§6).

---

## 10. Fake / Real

DETERMINISTIC PROVEN (fixture DEV). REAL BOUNDARY / E2E REAL : **NOT RUN**.

---

## 11. Réserves

1. Layout CSS + listes d'arêtes ≠ connecteurs SVG Figma 07 pixel-perfect.
2. Fixtures S* encore e05 (legacy) — WRITE path projection-v1 pour nouveaux tours.
3. Captures PNG non inlinables dans handoff Git distant.
4. R05 ACK FAIL préexistants hors scope.
5. Produit WT dirty — non commit / non poussé.

---

## 12. Décisions Morris restantes

- Commit local produit / revue ChatGPT.
- Éventuel GO LIVE pour pertinence éditoriale sections.
- Promotion RECETTE uniquement après GO distinct.
- Migration fixtures e05 → projection-v1 (optionnelle).

---

## 13. Verdict

**READY WITH RESERVES**

Invariants Strategy A (source unique, dérivation texte, identity graphique, historique e05, tree single-parent, parallel all edges) prouvés en DETERMINISTIC. Pas ADOPTED / Gate C / LIVE.

---

## 14. ACK ChatGPT

Lire `sfia/review-handoff` `latest-chatgpt-review.md` (commit/blob de ce publish). Vérifier Strategy A derive, contentAuthority, topology SHARED_CHILD, parallel-edges, tests SC-*.
