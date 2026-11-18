# SFIA Review Pack FULL — Complétude diffs C1–C4 (republish)

**Date/heure :** 2026-11-18T10:22:46+0100
**Cycle :** Critical CORRECTIVE documentation — complétude Review Pack (pas de nouveau code produit)
**Branche :** `sfia/next-ml4d-composition-adaptative`
**HEAD tip :** `a783f014935de0dec5ff8e79a2b18eea0e629756` (+ WT)
**origin/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**Docs tip :** `a6d9614ceeb2d15b04a19233cd506cd43e031354`
**Handoff précédent (incomplet) :** `42d3299b398ca063c70f9d534c677188bde31b83` / blob `d2faaa4e9d399c15a8257050c6d9d7f201c968d7`
**Review Pack :** Full — **réinitialisé pour combler** diffs vides/tronqués du pack C1–C4
**ENV :** DEV · NO RELEASE · STABLE NOT AVAILABLE · **NO PRODUCT PUSH**
**Fake/Real :** UNIT+ADAPTER+BROWSER FAKE **PROVEN** (cycle prior) · PG **NOT RUN** · LIVE **NOT RUN**

---

## 0. Motif de republish

Le handoff `42d3299b` a publié avec succès, mais le **contenu** était incomplet pour revue exhaustive :

| Lacune signalée | Correction dans ce pack |
| --- | --- |
| Diff `admission.ts` vide | Diff `--no-index` intégral (fichier nouveau WT) |
| `NoraComposition.tsx` extrait + hash seulement | Diff `--no-index` intégral (fichier nouveau WT) |
| Diff CSS interrompu mid-rule | `git diff a783f014 -- tokens.css` **complet** (279 lignes) |
| C2 renderer peu traçable | Chaîne C2 + diff `NoraConversation.tsx` + `data-body-policy` |

Aucun changement produit nouveau ce cycle ; SHA fichiers :

| Fichier | sha1 |
| --- | --- |
| `admission.ts` | `1240e8eee7795004dbd4ecde3ea6deedfb7c720b` |
| `NoraComposition.tsx` | `36bca3787d3f1035a7f9ba6cd6d1c55c5fe17814` |
| `tokens.css` | `83440883b864b48210ea746a4d315bcef786d4fd` |

Baseline tip inchangé : `a783f014` (+ WT Strategy A / V0.5 / V0.6 / C1–C4).

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD | `a783f014…` |
| Prior handoff | `42d3299b` (contenu incomplet) |
| STOP | **NON** — republish complétude only |

---

## 2. Chaîne C2 — traçabilité admission → renderer (critique)

### 2.1 Décision (`admission.ts` → `decideBodyPolicy`)

- `contentAuthority === "canonical_sections"` (Strategy A) + substance complète :
  - sans blocs graphiques → `substitute` + `CV_BODY_CANONICAL_NARRATIVE_SUBSTITUTE`
  - avec blocs graphiques → `substitute` + `CV_BODY_CANONICAL_GRAPHIC_SUBSTITUTE`
- Legacy (`legacy_projection` / e05) + graphic fidelity OK → `complement` + `CV_BODY_GRAPHIC_COMPLEMENT_ONLY`
- Sinon → `markdown_only`

### 2.2 Application UI (`NoraConversation.tsx`)

```ts
const policy = admission?.bodyPolicy ?? "markdown_only";
const compositionEl =
  proj?.visualComposition && policy !== "markdown_only" ? (
    <NoraComposition composition={...} canonicalText={m.content} ... />
  ) : null;
if (policy === "substitute" && compositionEl) {
  return compositionEl; // C2: no dual prose+visual
}
if (policy === "complement" && compositionEl) {
  return (
    <>
      <SafeMarkdown content={m.content} />
      <div className="fig-comp-complement">{compositionEl}</div>
    </>
  );
}
return <SafeMarkdown content={m.content} />;
```

### 2.3 Exposition renderer (`NoraComposition.tsx`)

Racine : attribut `data-body-policy={admission.bodyPolicy}` (+ `data-owns-body`, `data-contract`).
Le composant **ré-admet** localement (largeur ResizeObserver) ; la **politique d'affichage corps** est appliquée par le parent `NoraConversation` (section 2.2). C2 n'est donc pas « caché » dans le SVG : c'est le branchement substitute vs complement vs markdown_only.

Preuve unitaire : `visual-grammar-c1-c2.test.ts` — canonical graphic → `substitute` ; legacy graphic → `complement`.

---

## 3. C1–C7 (inchangé vs pack prior — statut)

| Contrat | Statut | Preuve |
| --- | --- | --- |
| C1 texte naturel | **PASS** | `buildExhaustiveBlockFallback` ; tests C1 |
| C2 anti-redondance | **PASS** | Strategy A → substitute ; chaîne §2 |
| C3 comparaisons | **PARTIAL** | variantes existantes |
| C4 graphes connectés | **PARTIAL** | SVG mesuré deps ; pas pixel-Figma |
| C5 a11y/reflow | **PARTIAL** | CSS + T02 |
| C6 PG | **NOT RUN** | 5433 DOWN |
| C7 LIVE | **NOT RUN** | GO distinct |

**VISUAL REVIEW NOT COMPLETED** (écart Figma Page 06 vs shell Studio — connu).

---

## 4. Acquis A1–A7 / Tests (cycle prior, non rejoués ce republish)

| Suite | Résultat (prior cycle) |
| --- | --- |
| Vitest ciblés | **112 PASS** |
| Playwright T02 | **1 PASS** |
| PG / LIVE | **NOT RUN** |

Ce pack = complétude documentaire ; pas de re-run obligatoire si tip WT inchangé.

---

## 5. Verdict

**READY WITH RESERVES** (technique inchangé)

Réserves : VISUAL REVIEW NOT COMPLETED ; HISTORICAL PG NOT RUN ; LIVE NOT RUN ; C4 non pixel-Figma.

Objectif de ce handoff : **revue exhaustive du code** désormais possible via diffs complets ci-dessous.

---

## 6. Diffs exploitables (complets)

### 6.1 Diff `admission.ts` (fichier nouveau vs `/dev/null` @ tip `a783f014`)

```diff
diff --git a/web/src/domains/conversation/conversational-composition/admission.ts b/web/src/domains/conversation/conversational-composition/admission.ts
new file mode 100644
index 00000000..e282f780
--- /dev/null
+++ b/web/src/domains/conversation/conversational-composition/admission.ts
@@ -0,0 +1,603 @@
+/**
+ * Conversational composition — Studio admission & variant selection (CV-*).
+ * Deterministic presentation policy only — never invents facts or authority.
+ * Consumes validated visual compositions (legacy wire) after fail-closed parse.
+ *
+ * Body substitution (Strategy B): structural render-completeness only.
+ * Never claims replyDraft semantic equivalence from Zod success.
+ */
+
+import type { VisualBlock, VisualComposition } from "@/domains/conversation/visual-composition";
+import {
+  compositionOwnsBody,
+  hasGraphicBlocks,
+} from "@/domains/conversation/visual-composition";
+import { mayPresentGraphicComposition, maySubstituteNarrative } from "./fidelity";
+import { validateRelationsTopology } from "./topology";
+
+export const CONVERSATIONAL_COMPOSITION_CONTRACT = "conversational-composition-v1" as const;
+
+/** Families delivered when wire+layout support them. */
+export type CompositionFamily =
+  | "narrative"
+  | "comparison"
+  | "sequence"
+  | "dependencies"
+  | "decisionPaths"
+  | "parallelProcess"
+  | "references"
+  | "choices";
+
+export type ComparisonVariant = "cards" | "matrix" | "stacked" | "text";
+export type SequenceVariant = "horizontal" | "vertical" | "text";
+/** Directed layouts + exhaustive list fallback (no fixed-coordinate SVG). */
+export type RelationsVariant = "directed" | "list" | "text";
+
+/**
+ * substitute — composition may replace replyDraft body (structural completeness only).
+ * complement — keep replyDraft visible; composition is additive.
+ * markdown_only — do not render composition as body owner.
+ */
+export type BodyPresentationPolicy = "substitute" | "complement" | "markdown_only";
+
+export type AdmittedBlock = {
+  block: VisualBlock;
+  family: CompositionFamily;
+  variant: string;
+  reasonCodes: string[];
+};
+
+export type AdmissionResult = {
+  contract: typeof CONVERSATIONAL_COMPOSITION_CONTRACT;
+  ownsBody: boolean;
+  /** Deterministic body policy — not a semantic equality proof vs replyDraft. */
+  bodyPolicy: BodyPresentationPolicy;
+  admitted: AdmittedBlock[];
+  fallbackReasons: string[];
+  capacityNotes: string[];
+  containerWidthPx: number | null;
+};
+
+export type AdmissionContext = {
+  /** Effective Travail conversation column width when known. */
+  containerWidthPx?: number | null;
+  /** Canonical replyDraft / message content — required for graphic presentation (C-04). */
+  canonicalText?: string | null;
+};
+
+function labelLen(s: string | undefined): number {
+  return (s ?? "").trim().length;
+}
+
+function maxOptionTextLen(block: Extract<VisualBlock, { kind: "comparison" }>): number {
+  let max = 0;
+  for (const o of block.alternatives) {
+    max = Math.max(max, labelLen(o.title) + labelLen(o.summary));
+    for (const a of o.pros ?? []) max = Math.max(max, labelLen(a));
+    for (const c of o.cons ?? []) max = Math.max(max, labelLen(c));
+  }
+  return max;
+}
+
+/**
+ * CV-04/05 — comparison variant from cardinality, label density, and width.
+ * No dogmatic "N cards" threshold alone.
+ */
+export function selectComparisonVariant(
+  block: Extract<VisualBlock, { kind: "comparison" }>,
+  widthPx: number | null,
+): { variant: ComparisonVariant; reasonCodes: string[] } {
+  const n = block.alternatives.length;
+  const density = maxOptionTextLen(block);
+  const criteria = block.criteria?.length ?? 0;
+  const reasons: string[] = [];
+
+  if (n < 2) {
+    reasons.push("CV_COMPARISON_UNDER_CARDINALITY");
+    return { variant: "text", reasonCodes: reasons };
+  }
+  if (n > 18) {
+    reasons.push("CV_COMPARISON_OVER_CAPACITY");
+    return { variant: "text", reasonCodes: reasons };
+  }
+
+  const narrow = widthPx != null && widthPx < 560;
+  const medium = widthPx != null && widthPx < 900;
+
+  if (n >= 5 || criteria >= 3 || (n >= 4 && density > 220)) {
+    reasons.push("CV_COMPARISON_MATRIX_DENSITY");
+    // Narrow: stacked keeps all substance without horizontal table pressure.
+    return { variant: narrow ? "stacked" : "matrix", reasonCodes: reasons };
+  }
+  if (narrow || (n >= 3 && density > 280)) {
+    reasons.push(narrow ? "CV_COMPARISON_NARROW_STACK" : "CV_COMPARISON_LONG_COPY_STACK");
+    return { variant: "stacked", reasonCodes: reasons };
+  }
+  if (medium && n >= 3) {
+    reasons.push("CV_COMPARISON_MEDIUM_CARDS");
+    return { variant: "cards", reasonCodes: reasons };
+  }
+  reasons.push("CV_COMPARISON_CARDS");
+  return { variant: "cards", reasonCodes: reasons };
+}
+
+export function selectSequenceVariant(
+  block: Extract<VisualBlock, { kind: "sequence" }>,
+  widthPx: number | null,
+): { variant: SequenceVariant; reasonCodes: string[] } {
+  const n = block.steps.length;
+  const long = block.steps.some((s) => labelLen(s.title) + labelLen(s.detail) > 160);
+  const reasons: string[] = [];
+  if (n === 0) {
+    reasons.push("CV_SEQUENCE_EMPTY");
+    return { variant: "text", reasonCodes: reasons };
+  }
+  if (n > 12) {
+    reasons.push("CV_SEQUENCE_OVER_CAPACITY");
+    return { variant: "text", reasonCodes: reasons };
+  }
+  const narrow = widthPx != null && widthPx < 720;
+  if (narrow || n >= 5 || long) {
+    reasons.push(narrow ? "CV_SEQUENCE_NARROW_VERTICAL" : "CV_SEQUENCE_VERTICAL_DENSITY");
+    return { variant: "vertical", reasonCodes: reasons };
+  }
+  reasons.push("CV_SEQUENCE_HORIZONTAL");
+  return { variant: "horizontal", reasonCodes: reasons };
+}
+
+/**
+ * Relations: directed CSS layout when layoutHint + envelope allow; else exhaustive list.
+ * Fixed-coordinate SVG remains forbidden.
+ */
+export function selectRelationsVariant(
+  block: Extract<VisualBlock, { kind: "relations" }>,
+  widthPx: number | null,
+): { variant: RelationsVariant; reasonCodes: string[] } {
+  const nodes = block.nodes.length;
+  const edges = block.edges.length;
+  const reasons: string[] = [];
+  if (nodes === 0) {
+    reasons.push("CV_RELATIONS_EMPTY");
+    return { variant: "text", reasonCodes: reasons };
+  }
+  const ids = new Set(block.nodes.map((n) => n.id));
+  const orphan = block.edges.some((e) => !ids.has(e.from) || !ids.has(e.to));
+  if (orphan) {
+    reasons.push("CV_RELATIONS_ORPHAN_EDGE");
+    return { variant: "list", reasonCodes: reasons };
+  }
+  if (block.preferListFallback) {
+    reasons.push("CV_RELATIONS_PREFER_LIST");
+    return { variant: "list", reasonCodes: reasons };
+  }
+  // F2 — structural topology before claiming directed layout.
+  if (block.layoutHint || edges > 0) {
+    const topo = validateRelationsTopology(
+      block.layoutHint
+        ? block
+        : { ...block, layoutHint: "dependencies" },
+    );
+    reasons.push(...topo.reasonCodes);
+    if (!topo.ok || topo.mode === "list") {
+      reasons.push("CV_RELATIONS_TOPOLOGY_LIST_FALLBACK");
+      return { variant: "list", reasonCodes: reasons };
+    }
+  }
+  const dense = nodes > 10 || edges > 14;
+  const narrow = widthPx != null && widthPx < 520;
+  const longLabels = block.nodes.some((n) => (n.label?.length ?? 0) > 80);
+  if (dense || narrow || longLabels) {
+    reasons.push(
+      dense
+        ? "CV_RELATIONS_DENSE_LIST"
+        : narrow
+          ? "CV_RELATIONS_NARROW_LIST"
+          : "CV_RELATIONS_LONG_LABEL_LIST",
+    );
+    return { variant: "list", reasonCodes: reasons };
+  }
+  if (block.layoutHint || edges > 0) {
+    reasons.push("CV_RELATIONS_DIRECTED_LAYOUT");
+    return { variant: "directed", reasonCodes: reasons };
+  }
+  reasons.push("CV_RELATIONS_STRUCTURED_LIST");
+  return { variant: "list", reasonCodes: reasons };
+}
+
+function familyFor(block: VisualBlock): CompositionFamily {
+  switch (block.kind) {
+    case "comparison":
+      return "comparison";
+    case "sequence":
+      return "sequence";
+    case "relations":
+      if (block.layoutHint === "decisionTree") return "decisionPaths";
+      if (block.layoutHint === "parallelProcess") return "parallelProcess";
+      return "dependencies";
+    case "synthesis":
+    case "text":
+      return "narrative";
+    case "choices":
+      return "choices";
+    case "references":
+      return "references";
+    default:
+      return "narrative";
+  }
+}
+
+/**
+ * Merge structured fallback with textAlternative.
+ * Contract A2: textAlternative is complementary canon when not fully redundant.
+ * Never decide by prefix-80 heuristic (silent suffix loss).
+ * Full inclusion → skip; otherwise append entire alternative (overflow stays explicit upstream).
+ */
+export function mergeTextAlternative(body: string, textAlternative: string | undefined): string {
+  const alt = (textAlternative ?? "").trim();
+  const core = body.trim();
+  if (!alt) return core;
+  if (!core) return alt;
+  if (core.includes(alt)) return core;
+  return `${core}\n${alt}`;
+}
+
+/** Human labels for epistemic node kinds — never expose wire enum to Pilote. */
+function humanNodeKind(kind: string | undefined): string | undefined {
+  switch (kind) {
+    case "fact":
+      return "fait";
+    case "hypothesis":
+      return "hypothèse";
+    case "unknown":
+      return "indéterminé";
+    case "cause":
+      return "cause";
+    case "finding":
+      return "constat";
+    case "observation":
+      return "observation";
+    default:
+      return undefined;
+  }
+}
+
+function humanRole(role: string | undefined): string | undefined {
+  switch (role) {
+    case "information":
+      return "information";
+    case "observation":
+      return "observation";
+    case "fact":
+      return "fait";
+    case "hypothesis":
+      return "hypothèse";
+    case "risk":
+      return "risque";
+    case "recommendation":
+      return "recommandation";
+    case "decision":
+      return "décision";
+    case "dependency":
+      return "dépendance";
+    case "step":
+      return "étape";
+    case "source":
+      return "source";
+    default:
+      return undefined;
+  }
+}
+
+function humanTone(tone: string | undefined): string | undefined {
+  switch (tone) {
+    case "priority":
+      return "priorité";
+    case "finding":
+      return "constat";
+    case "risk":
+      return "risque";
+    case "watch":
+      return "vigilance";
+    case "observation":
+      return "observation";
+    case "hypothesis":
+      return "hypothèse";
+    default:
+      return undefined;
+  }
+}
+
+function humanLayoutHint(hint: string | undefined): string | undefined {
+  switch (hint) {
+    case "dependencies":
+      return "Dépendances";
+    case "decisionTree":
+      return "Arbre conditionnel";
+    case "parallelProcess":
+      return "Processus parallèle";
+    default:
+      return undefined;
+  }
+}
+
+/**
+ * Exhaustive human-readable fallback from validated block fields (C1).
+ * Never truncates. Never exposes wire codes (relation=, layoutHint, enums bruts).
+ */
+export function buildExhaustiveBlockFallback(block: VisualBlock): string {
+  if (block.kind === "text") {
+    return block.markdown;
+  }
+  if (block.kind === "comparison") {
+    const parts: string[] = [block.title];
+    for (const a of block.alternatives) {
+      parts.push(`${a.title}: ${a.summary}`);
+      if (a.pros?.length) parts.push(`Avantages — ${a.pros.join("; ")}`);
+      if (a.cons?.length) parts.push(`Limites — ${a.cons.join("; ")}`);
+    }
+    if (block.criteria?.length) {
+      for (const c of block.criteria) {
+        const vals = block.alternatives
+          .map((a) => `${a.title}: ${c.values[a.id] ?? "—"}`)
+          .join(" ; ");
+        parts.push(`${c.label} — ${vals}`);
+      }
+    }
+    if (block.recommendation) parts.push(`Recommandation: ${block.recommendation}`);
+    if (block.provenance?.length) {
+      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
+    }
+    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
+  }
+  if (block.kind === "sequence") {
+    const parts: string[] = [block.title];
+    const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
+    block.steps.forEach((s, i) => {
+      let line = `${i + 1}. ${s.title}`;
+      const role = humanRole(s.role);
+      if (role) line += ` (${role})`;
+      if (s.detail) line += ` — ${s.detail}`;
+      if (s.dependsOn?.length) {
+        line += ` (dépend de: ${s.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")})`;
+      }
+      if (s.dateLabel) line += ` [${s.dateLabel}]`;
+      parts.push(line);
+    });
+    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
+  }
+  if (block.kind === "relations") {
+    const parts: string[] = [block.title];
+    const layout = humanLayoutHint(block.layoutHint);
+    if (layout) parts.push(layout);
+    const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));
+    for (const n of block.nodes) {
+      let line = n.label;
+      const kind = humanNodeKind(n.kind);
+      if (kind) line += ` (${kind})`;
+      if (n.laneId) line += ` — voie « ${n.laneId} »`;
+      if (n.detail) line += ` — ${n.detail}`;
+      parts.push(line);
+    }
+    for (const e of block.edges) {
+      const from = titleById.get(e.from) ?? e.from;
+      const to = titleById.get(e.to) ?? e.to;
+      const rel = e.relation ?? "flow";
+      // Keep wire direction from→to; natural French, no wire codes.
+      let sense =
+        rel === "condition_true"
+          ? `Si oui (${from}) → ${to}`
+          : rel === "condition_false"
+            ? `Si non (${from}) → ${to}`
+            : rel === "sync"
+              ? `${from} synchronise vers ${to}`
+              : rel === "depends_on"
+                ? `${from} → ${to} (dépendance)`
+                : `${from} → ${to}`;
+      if (e.label) sense += ` (${e.label})`;
+      parts.push(sense);
+    }
+    if (block.provenance?.length) {
+      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
+    }
+    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
+  }
+  if (block.kind === "synthesis") {
+    const parts: string[] = [block.title];
+    for (const it of block.items) {
+      let line = it.detail ? `${it.label}: ${it.detail}` : it.label;
+      const tone = humanTone(it.tone);
+      if (tone) line += ` (${tone})`;
+      const role = humanRole(it.role);
+      if (role) line += ` — ${role}`;
+      parts.push(line);
+    }
+    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
+  }
+  return "";
+}
+
+/**
+ * Structural completeness of projection fields that the renderer will expose visibly.
+ * Does NOT prove equivalence with replyDraft.
+ */
+export function projectionSubstanceRenderComplete(composition: VisualComposition): boolean {
+  for (const block of composition.blocks) {
+    if (block.kind === "choices" || block.kind === "references") continue;
+    if (block.kind === "text") {
+      if (!block.markdown.trim()) return false;
+      continue;
+    }
+    if (block.kind === "comparison") {
+      if (block.alternatives.length < 2) return false;
+      for (const a of block.alternatives) {
+        if (!a.title.trim() || !a.summary.trim()) return false;
+      }
+      if (!block.textAlternative.trim() && !buildExhaustiveBlockFallback(block).trim()) {
+        return false;
+      }
+      continue;
+    }
+    if (block.kind === "sequence") {
+      if (block.steps.length < 1) return false;
+      for (const s of block.steps) {
+        if (!s.title.trim()) return false;
+      }
+      continue;
+    }
+    if (block.kind === "relations") {
+      if (block.nodes.length < 1) return false;
+      for (const n of block.nodes) {
+        if (!n.label.trim()) return false;
+      }
+      continue;
+    }
+    if (block.kind === "synthesis") {
+      if (block.items.length < 1) return false;
+      for (const it of block.items) {
+        if (!it.label.trim()) return false;
+      }
+    }
+  }
+  return composition.blocks.some(
+    (b) => b.kind !== "choices" && b.kind !== "references",
+  );
+}
+
+/**
+ * C-04 — graphic compositions never substitute the canonical body.
+ * They may complement only when deterministic anchor alignment passes.
+ * Otherwise markdown_only (visual refused — no misleading dual presentation).
+ */
+function decideBodyPolicy(
+  composition: VisualComposition,
+  ownsBody: boolean,
+  _admitted: AdmittedBlock[],
+  fallbackReasons: string[],
+  canonicalText: string | null | undefined,
+): BodyPresentationPolicy {
+  if (!ownsBody) return "markdown_only";
+
+  // Strategy A — single semantic authority: sections own substance (C2).
+  // Graphic compositions substitute the derived body to avoid dual prose+visual redundancy.
+  // Exhaustive fallback remains inside each block on render failure.
+  if (composition.contentAuthority === "canonical_sections") {
+    if (!projectionSubstanceRenderComplete(composition)) {
+      fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
+      return "markdown_only";
+    }
+    if (!hasGraphicBlocks(composition)) {
+      fallbackReasons.push("CV_BODY_CANONICAL_NARRATIVE_SUBSTITUTE");
+      return "substitute";
+    }
+    fallbackReasons.push("CV_BODY_CANONICAL_GRAPHIC_SUBSTITUTE");
+    return "substitute";
+  }
+
+  const narrativeOnly = fallbackReasons.includes("CV_NARRATIVE_ONLY");
+  if (narrativeOnly && !hasGraphicBlocks(composition)) {
+    const narr = maySubstituteNarrative(composition, canonicalText);
+    fallbackReasons.push(...narr.reasonCodes);
+    return narr.ok ? "substitute" : "markdown_only";
+  }
+
+  if (!projectionSubstanceRenderComplete(composition)) {
+    fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
+    return "markdown_only";
+  }
+
+  if (!hasGraphicBlocks(composition)) {
+    const narr = maySubstituteNarrative(composition, canonicalText);
+    fallbackReasons.push(...narr.reasonCodes);
+    return narr.ok ? "substitute" : "markdown_only";
+  }
+
+  const fidelity = mayPresentGraphicComposition(composition, canonicalText);
+  fallbackReasons.push(...fidelity.reasonCodes);
+  if (!fidelity.ok) {
+    return "markdown_only";
+  }
+  // Legacy dual-author: aligned graphics complement replyDraft (never mask).
+  fallbackReasons.push("CV_BODY_GRAPHIC_COMPLEMENT_ONLY");
+  return "complement";
+}
+
+/**
+ * Admit a fail-closed-parsed composition into presentable blocks with variants.
+ * CV-10: callers must isolate render errors per block.
+ */
+export function admitConversationalComposition(
+  composition: VisualComposition | null | undefined,
+  ctx: AdmissionContext = {},
+): AdmissionResult {
+  const width = ctx.containerWidthPx ?? null;
+  const fallbackReasons: string[] = [];
+  const capacityNotes: string[] = [];
+
+  if (!composition) {
+    return {
+      contract: CONVERSATIONAL_COMPOSITION_CONTRACT,
+      ownsBody: false,
+      bodyPolicy: "markdown_only",
+      admitted: [],
+      fallbackReasons: ["CV_NO_COMPOSITION"],
+      capacityNotes,
+      containerWidthPx: width,
+    };
+  }
+
+  const ownsBody = compositionOwnsBody(composition);
+  if (!ownsBody) {
+    fallbackReasons.push("CV_COMPOSITION_DOES_NOT_OWN_BODY");
+  }
+  if (!hasGraphicBlocks(composition) && composition.blocks.every((b) => b.kind === "text")) {
+    fallbackReasons.push("CV_NARRATIVE_ONLY");
+  }
+
+  capacityNotes.push("CV_WIRE_MAX_ALTS_12");
+  capacityNotes.push("CV_SCHEMA_READ_E05_PROJECTION_V1_CANONICAL_V1");
+  capacityNotes.push("CV_SCHEMA_WRITE_CANONICAL_V1_ONLY");
+
+  const admitted: AdmittedBlock[] = [];
+  for (const block of composition.blocks) {
+    const family = familyFor(block);
+    if (block.kind === "comparison") {
+      const sel = selectComparisonVariant(block, width);
+      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
+      continue;
+    }
+    if (block.kind === "sequence") {
+      const sel = selectSequenceVariant(block, width);
+      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
+      continue;
+    }
+    if (block.kind === "relations") {
+      const sel = selectRelationsVariant(block, width);
+      admitted.push({ block, family, variant: sel.variant, reasonCodes: sel.reasonCodes });
+      continue;
+    }
+    admitted.push({
+      block,
+      family,
+      variant: block.kind === "synthesis" ? "callout" : "default",
+      reasonCodes: ["CV_DEFAULT_VARIANT"],
+    });
+  }
+
+  const bodyPolicy = decideBodyPolicy(
+    composition,
+    ownsBody,
+    admitted,
+    fallbackReasons,
+    ctx.canonicalText,
+  );
+
+  return {
+    contract: CONVERSATIONAL_COMPOSITION_CONTRACT,
+    ownsBody,
+    bodyPolicy,
+    admitted,
+    fallbackReasons,
+    capacityNotes,
+    containerWidthPx: width,
+  };
+}
```

### 6.2 Diff `NoraComposition.tsx` (fichier nouveau vs `/dev/null`)

```diff
diff --git a/web/src/components/figma/NoraComposition.tsx b/web/src/components/figma/NoraComposition.tsx
new file mode 100644
index 00000000..0efb3956
--- /dev/null
+++ b/web/src/components/figma/NoraComposition.tsx
@@ -0,0 +1,1098 @@
+"use client";
+
+/**
+ * Nora conversational composition renderer.
+ * Product responsibility: adaptive restitution of validated D3 compositions.
+ * Presentation contract: conversational-composition-v1 (admission).
+ * Wire compatibility: e05-visual-composition-v1 (bounded).
+ */
+
+import {
+  Component,
+  type ErrorInfo,
+  type ReactNode,
+  useEffect,
+  useLayoutEffect,
+  useRef,
+  useState,
+} from "react";
+import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
+import {
+  admitConversationalComposition,
+  buildExhaustiveBlockFallback,
+  topologicalLayers,
+  type AdmittedBlock,
+  type ComparisonVariant,
+  type RelationsVariant,
+  type SequenceVariant,
+} from "@/domains/conversation/conversational-composition";
+import type {
+  ComparisonBlock,
+  RelationsBlock,
+  SequenceBlock,
+  SynthesisBlock,
+  TextBlock,
+  VisualBlock,
+  VisualComposition,
+  VisualProvenance,
+} from "@/domains/conversation/visual-composition";
+import {
+  canonicalReferenceKey,
+  compositionAnchorsChoices,
+  compositionAnchorsReferences,
+  partitionChoicesForAnchors,
+  partitionReferencesForAnchors,
+  provenanceConsultableKeys,
+  resolveProvenanceReference,
+} from "@/domains/conversation/visual-composition";
+import type { TurnChoice, TurnReference } from "@/domains/conversation/turn-projection";
+
+function Provenance(props: {
+  items?: VisualProvenance[];
+  canonicalReferences?: TurnReference[];
+  onReference?: (ref: TurnReference) => void;
+}) {
+  if (!props.items?.length) return null;
+  const canonical = props.canonicalReferences ?? [];
+  return (
+    <ul
+      className="fig-visual-provenance fig-comp-provenance"
+      data-testid="nora-visual-provenance"
+    >
+      {props.items.map((p, i) => {
+        const resolved = resolveProvenanceReference(p, canonical);
+        return (
+          <li key={`${p.label}-${i}`} data-consultable={resolved ? "1" : "0"}>
+            {resolved && props.onReference ? (
+              <button
+                type="button"
+                className="fig-nora-ref-link"
+                data-testid="nora-visual-prov-link"
+                data-ref-kind={resolved.kind}
+                onClick={() => props.onReference?.(resolved)}
+              >
+                Consulter · {resolved.label}
+                {resolved.available === false ? " (à vérifier)" : ""}
+              </button>
+            ) : (
+              <span>
+                {p.label}
+                <span className="fig-visual-provenance-note"> — mention descriptive</span>
+              </span>
+            )}
+            {p.note ? <span className="fig-visual-provenance-note"> — {p.note}</span> : null}
+          </li>
+        );
+      })}
+    </ul>
+  );
+}
+
+function Heading(props: {
+  title: string;
+  role?: TextBlock["role"];
+  icon?: TextBlock["icon"];
+}) {
+  return (
+    <h3 className="fig-visual-title fig-comp-title">
+      <NoraSemanticIcon role={props.role} icon={props.icon} />
+      <span>{props.title}</span>
+    </h3>
+  );
+}
+
+type BlockShellProps = {
+  children: ReactNode;
+  textAlternative: string;
+  blockId: string;
+};
+
+/** CV-10 — isolate render failure to one block; keep readable textAlternative. */
+class BlockErrorBoundary extends Component<
+  BlockShellProps,
+  { failed: boolean }
+> {
+  state = { failed: false };
+
+  static getDerivedStateFromError(): { failed: boolean } {
+    return { failed: true };
+  }
+
+  componentDidCatch(_error: Error, _info: ErrorInfo): void {
+    // Presentation-only; never escalate to D3 FAILED.
+  }
+
+  render() {
+    if (this.state.failed) {
+      return (
+        <section
+          className="fig-visual-block fig-comp-block fig-comp-block-fallback"
+          data-testid="nora-composition-block-fallback"
+          data-block-id={this.props.blockId}
+          data-fallback="1"
+        >
+          <p className="fig-comp-fallback-text">{this.props.textAlternative}</p>
+        </section>
+      );
+    }
+    return this.props.children;
+  }
+}
+
+function AlternativeDetails({
+  alt,
+}: {
+  alt: ComparisonBlock["alternatives"][number];
+}) {
+  return (
+    <article className="fig-visual-alt fig-comp-alt" data-alt-id={alt.id} data-testid="nora-composition-alt-detail">
+      <h4>{alt.title}</h4>
+      <p>{alt.summary}</p>
+      {alt.pros?.length ? (
+        <ul className="fig-visual-pros">
+          {alt.pros.map((p) => (
+            <li key={p}>{p}</li>
+          ))}
+        </ul>
+      ) : null}
+      {alt.cons?.length ? (
+        <ul className="fig-visual-cons">
+          {alt.cons.map((c) => (
+            <li key={c}>{c}</li>
+          ))}
+        </ul>
+      ) : null}
+    </article>
+  );
+}
+
+function ComparisonView({
+  block,
+  variant,
+  canonicalReferences,
+  onReference,
+}: {
+  block: ComparisonBlock;
+  variant: ComparisonVariant;
+  canonicalReferences?: TurnReference[];
+  onReference?: (ref: TurnReference) => void;
+}) {
+  const hasCriteria = Boolean(block.criteria?.length);
+  // CV-T04 / Defect A: matrix never hides summary/pros/cons — show complementary details.
+  const showMatrix = variant === "matrix" && hasCriteria;
+  const showCards =
+    variant === "cards" ||
+    variant === "stacked" ||
+    (variant === "matrix" && !hasCriteria);
+  const showMatrixDetails = showMatrix;
+  const forceText = variant === "text";
+
+  return (
+    <section
+      className={`fig-visual-block fig-visual-comparison fig-comp-block fig-comp-comparison fig-comp-variant-${variant}`}
+      data-testid="nora-visual-comparison"
+      data-comp-testid="nora-composition-comparison"
+      data-block-kind="comparison"
+      data-block-id={block.id}
+      data-variant={variant}
+      data-substance-complete="1"
+      aria-label={block.title}
+    >
+      <Heading title={block.title} role={block.role} icon={block.icon} />
+      {forceText ? (
+        <div className="fig-comp-fallback-text" data-testid="nora-composition-comparison-text">
+          {buildExhaustiveBlockFallback(block)}
+        </div>
+      ) : null}
+      {!forceText && showCards ? (
+        <div
+          className={
+            variant === "stacked"
+              ? "fig-visual-comparison-grid fig-comp-comparison-stack"
+              : "fig-visual-comparison-grid fig-comp-comparison-cards"
+          }
+        >
+          {block.alternatives.map((alt) => (
+            <AlternativeDetails key={alt.id} alt={alt} />
+          ))}
+        </div>
+      ) : null}
+      {!forceText && showMatrix ? (
+        <>
+          <div className="fig-visual-matrix-wrap fig-comp-matrix-wrap">
+            <table className="fig-visual-matrix fig-comp-matrix">
+              <caption>Critères de comparaison</caption>
+              <thead>
+                <tr>
+                  <th scope="col">Critère</th>
+                  {block.alternatives.map((a) => (
+                    <th key={a.id} scope="col">
+                      {a.title}
+                    </th>
+                  ))}
+                </tr>
+              </thead>
+              <tbody>
+                {block.criteria!.map((c) => (
+                  <tr key={c.id}>
+                    <th scope="row">{c.label}</th>
+                    {block.alternatives.map((a) => (
+                      <td key={a.id}>{c.values[a.id] ?? "—"}</td>
+                    ))}
+                  </tr>
+                ))}
+              </tbody>
+            </table>
+          </div>
+          {showMatrixDetails ? (
+            <div
+              className="fig-comp-comparison-stack fig-comp-matrix-details"
+              data-testid="nora-composition-matrix-details"
+            >
+              <h4 className="fig-comp-matrix-details-title">Détail des options</h4>
+              {block.alternatives.map((alt) => (
+                <AlternativeDetails key={`detail-${alt.id}`} alt={alt} />
+              ))}
+            </div>
+          ) : null}
+        </>
+      ) : null}
+      {block.recommendation ? (
+        <div className="fig-visual-recommendation" data-testid="nora-visual-recommendation">
+          <NoraSemanticIcon role="recommendation" />
+          <div className="fig-visual-recommendation-body">
+            <span className="fig-visual-recommendation-label">Recommandation (avis Nora)</span>
+            <SafeMarkdown content={block.recommendation} className="fig-visual-inline-md" />
+          </div>
+        </div>
+      ) : null}
+      <Provenance
+        items={block.provenance}
+        canonicalReferences={canonicalReferences}
+        onReference={onReference}
+      />
+    </section>
+  );
+}
+
+function SequenceView({
+  block,
+  variant,
+  canonicalReferences,
+  onReference,
+}: {
+  block: SequenceBlock;
+  variant: SequenceVariant;
+  canonicalReferences?: TurnReference[];
+  onReference?: (ref: TurnReference) => void;
+}) {
+  const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
+  const forceText = variant === "text";
+  return (
+    <section
+      className={`fig-visual-block fig-visual-sequence fig-comp-block fig-comp-sequence fig-comp-variant-${variant}`}
+      data-testid="nora-visual-sequence"
+      data-comp-testid="nora-composition-sequence"
+      data-block-kind="sequence"
+      data-block-id={block.id}
+      data-variant={variant}
+      aria-label={block.title}
+    >
+      <Heading title={block.title} role={block.role ?? "step"} icon={block.icon} />
+      {forceText ? (
+        <div className="fig-comp-fallback-text" data-testid="nora-composition-sequence-text">
+          {buildExhaustiveBlockFallback(block)}
+        </div>
+      ) : (
+        <ol
+          className={
+            variant === "horizontal"
+              ? "fig-visual-steps fig-comp-steps-horizontal"
+              : "fig-visual-steps fig-comp-steps-vertical"
+          }
+        >
+          {block.steps.map((step, idx) => (
+            <li key={step.id} className="fig-visual-step fig-comp-step" data-step-id={step.id}>
+              <div className="fig-visual-step-marker" aria-hidden>
+                {idx + 1}
+              </div>
+              <div className="fig-visual-step-body">
+                <h4>
+                  <NoraSemanticIcon role={step.role ?? "step"} />
+                  {step.title}
+                </h4>
+                {step.detail ? (
+                  <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
+                ) : null}
+                {step.dependsOn?.length ? (
+                  <p className="fig-visual-step-deps" data-testid="nora-visual-step-deps">
+                    <NoraSemanticIcon role="dependency" />
+                    Dépend de :{" "}
+                    {step.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")}
+                  </p>
+                ) : null}
+                {step.dateLabel ? (
+                  <p className="fig-visual-step-date">{step.dateLabel}</p>
+                ) : null}
+              </div>
+              {idx < block.steps.length - 1 ? (
+                <div className="fig-visual-step-connector" aria-hidden />
+              ) : null}
+            </li>
+          ))}
+        </ol>
+      )}
+      <Provenance
+        items={block.provenance}
+        canonicalReferences={canonicalReferences}
+        onReference={onReference}
+      />
+    </section>
+  );
+}
+
+function relationRole(
+  kind: RelationsBlock["nodes"][number]["kind"],
+): TextBlock["role"] {
+  if (kind === "hypothesis") return "hypothesis";
+  if (kind === "observation") return "observation";
+  if (kind === "fact" || kind === "finding") return "fact";
+  return "information";
+}
+
+function RelationsListFallback({
+  block,
+  titleById,
+}: {
+  block: RelationsBlock;
+  titleById: Map<string, string>;
+}) {
+  return (
+    <>
+      <ul className="fig-visual-relations-list fig-comp-relations-list">
+        {block.nodes.map((n) => (
+          <li key={n.id} data-node-id={n.id}>
+            <NoraSemanticIcon role={relationRole(n.kind)} />
+            <span className="fig-comp-relations-label">{n.label}</span>
+            {n.detail ? <span className="fig-comp-relations-detail"> — {n.detail}</span> : null}
+          </li>
+        ))}
+      </ul>
+      {block.edges.length ? (
+        <ul
+          className="fig-visual-relations-edges fig-comp-relations-edges"
+          data-testid="nora-composition-relations-edges"
+        >
+          {block.edges.map((e, i) => (
+            <li key={`${e.from}-${e.to}-${i}`}>
+              {titleById.get(e.from) ?? e.from} → {titleById.get(e.to) ?? e.to}
+              {e.relation ? ` [${e.relation}]` : ""}
+              {e.label ? ` (${e.label})` : ""}
+            </li>
+          ))}
+        </ul>
+      ) : null}
+    </>
+  );
+}
+
+/** C-10/11/12 — CSS directed layout (no fixed SVG coordinates, no ELK dependency). */
+function RelationsDirectedView({
+  block,
+  titleById,
+}: {
+  block: RelationsBlock;
+  titleById: Map<string, string>;
+}) {
+  const hint = block.layoutHint ?? "dependencies";
+
+  if (hint === "parallelProcess") {
+    const lanes = new Map<string, typeof block.nodes>();
+    for (const n of block.nodes) {
+      const lane = n.laneId?.trim() || "voie";
+      const list = lanes.get(lane) ?? [];
+      list.push(n);
+      lanes.set(lane, list);
+    }
+    // A5 — sync is directed toward the target step, not a claim of reciprocity.
+    return (
+      <div
+        className="fig-comp-parallel"
+        data-testid="nora-composition-parallel"
+        data-layout-hint="parallelProcess"
+      >
+        <div className="fig-comp-parallel-lanes">
+          {[...lanes.entries()].map(([lane, nodes]) => (
+            <section key={lane} className="fig-comp-parallel-lane" data-lane={lane}>
+              <h4 className="fig-comp-parallel-lane-title">{lane}</h4>
+              <ol className="fig-comp-parallel-tasks">
+                {nodes.map((n) => (
+                  <li key={n.id} data-node-id={n.id}>
+                    <NoraSemanticIcon role={relationRole(n.kind)} />
+                    <span className="fig-comp-relations-label">{n.label}</span>
+                    {n.detail ? (
+                      <span className="fig-comp-relations-detail"> — {n.detail}</span>
+                    ) : null}
+                  </li>
+                ))}
+              </ol>
+            </section>
+          ))}
+        </div>
+        {block.edges.length ? (
+          <ul
+            className="fig-comp-parallel-edges"
+            data-testid="nora-composition-parallel-edges"
+            data-directed="1"
+          >
+            {block.edges.map((e, i) => (
+              <li key={`${e.from}-${e.to}-${i}`} data-relation={e.relation ?? "flow"}>
+                <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
+                <span className="fig-comp-deps-arrow" aria-hidden>
+                  →
+                </span>
+                <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
+                {e.label ? <span className="fig-comp-deps-label"> ({e.label})</span> : null}
+                {e.relation === "sync" ? (
+                  <span className="fig-comp-deps-rel"> — synchronisation</span>
+                ) : e.relation === "depends_on" ? (
+                  <span className="fig-comp-deps-rel"> — dépendance</span>
+                ) : null}
+              </li>
+            ))}
+          </ul>
+        ) : null}
+        <p className="fig-comp-authority-note">
+          La convergence graphique n&apos;enregistre aucune décision humaine ni validation.
+        </p>
+      </div>
+    );
+  }
+
+  if (hint === "decisionTree") {
+    const children = new Map<string, typeof block.edges>();
+    const targets = new Set(block.edges.map((e) => e.to));
+    for (const e of block.edges) {
+      const list = children.get(e.from) ?? [];
+      list.push(e);
+      children.set(e.from, list);
+    }
+    const roots = block.nodes.filter((n) => !targets.has(n.id));
+    const renderBranch = (nodeId: string, depth: number): ReactNode => {
+      const node = block.nodes.find((n) => n.id === nodeId);
+      if (!node) return null;
+      const outs = children.get(nodeId) ?? [];
+      return (
+        <li key={nodeId} data-node-id={nodeId} data-depth={depth}>
+          <div className="fig-comp-tree-node">
+            <NoraSemanticIcon role={relationRole(node.kind)} />
+            <span className="fig-comp-relations-label">{node.label}</span>
+            {node.detail ? (
+              <span className="fig-comp-relations-detail"> — {node.detail}</span>
+            ) : null}
+          </div>
+          {outs.length ? (
+            <ul className="fig-comp-tree-branches">
+              {outs.map((e) => (
+                <li key={`${e.from}-${e.to}`} data-relation={e.relation ?? "flow"}>
+                  <span className="fig-comp-tree-condition">
+                    {e.relation === "condition_true"
+                      ? "Si oui"
+                      : e.relation === "condition_false"
+                        ? "Si non"
+                        : e.label || "puis"}
+                    {e.label && e.relation?.startsWith("condition") ? ` — ${e.label}` : null}
+                  </span>
+                  <ul>{renderBranch(e.to, depth + 1)}</ul>
+                </li>
+              ))}
+            </ul>
+          ) : null}
+        </li>
+      );
+    };
+    return (
+      <div
+        className="fig-comp-tree"
+        data-testid="nora-composition-decision-tree"
+        data-layout-hint="decisionTree"
+      >
+        <ul className="fig-comp-tree-root">
+          {(roots.length ? roots : block.nodes.slice(0, 1)).map((n) => renderBranch(n.id, 0))}
+        </ul>
+        <p className="fig-comp-authority-note">
+          Les branches conditionnelles sont des propositions de lecture — aucune HumanDecision
+          n&apos;est créée.
+        </p>
+      </div>
+    );
+  }
+
+  // dependencies (default directed) — layered nodes + measured SVG connectors (C4).
+  return (
+    <DependenciesConnectedView block={block} titleById={titleById} />
+  );
+}
+
+/**
+ * C4 — directed dependencies with connectors measured from live node boxes.
+ * No assumed coordinates from Nora; ResizeObserver keeps paths attached on reflow.
+ */
+function DependenciesConnectedView({
+  block,
+  titleById,
+}: {
+  block: RelationsBlock;
+  titleById: Map<string, string>;
+}) {
+  const layers = topologicalLayers(block);
+  const nodeById = new Map(block.nodes.map((n) => [n.id, n] as const));
+  const rootRef = useRef<HTMLDivElement>(null);
+  const [size, setSize] = useState({ w: 0, h: 0 });
+  const [paths, setPaths] = useState<
+    Array<{ key: string; d: string; label: string }>
+  >([]);
+
+  const measure = () => {
+    const root = rootRef.current;
+    if (!root) return;
+    const rootBox = root.getBoundingClientRect();
+    setSize({ w: root.clientWidth, h: root.clientHeight });
+    const next: Array<{ key: string; d: string; label: string }> = [];
+    block.edges.forEach((e, i) => {
+      const fromEl = root.querySelector(`[data-node-id="${CSS.escape(e.from)}"]`);
+      const toEl = root.querySelector(`[data-node-id="${CSS.escape(e.to)}"]`);
+      if (!(fromEl instanceof HTMLElement) || !(toEl instanceof HTMLElement)) return;
+      const a = fromEl.getBoundingClientRect();
+      const b = toEl.getBoundingClientRect();
+      const x1 = a.left + a.width / 2 - rootBox.left;
+      const y1 = a.bottom - rootBox.top;
+      const x2 = b.left + b.width / 2 - rootBox.left;
+      const y2 = b.top - rootBox.top;
+      const midY = (y1 + y2) / 2;
+      const fromLabel = titleById.get(e.from) ?? e.from;
+      const toLabel = titleById.get(e.to) ?? e.to;
+      const rel =
+        e.relation === "depends_on"
+          ? `${fromLabel} → ${toLabel} (dépendance)`
+          : e.relation === "sync"
+            ? `${fromLabel} synchronise vers ${toLabel}`
+            : `${fromLabel} → ${toLabel}`;
+      next.push({
+        key: `${e.from}-${e.to}-${i}`,
+        d: `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`,
+        label: e.label ? `${rel} (${e.label})` : rel,
+      });
+    });
+    setPaths(next);
+  };
+
+  useLayoutEffect(() => {
+    measure();
+    const root = rootRef.current;
+    if (!root || typeof ResizeObserver === "undefined") return;
+    const ro = new ResizeObserver(() => measure());
+    ro.observe(root);
+    return () => ro.disconnect();
+    // eslint-disable-next-line react-hooks/exhaustive-deps -- measure closes over block/titleById
+  }, [block, titleById, layers.length]);
+
+  return (
+    <div
+      className="fig-comp-deps"
+      data-testid="nora-composition-dependencies"
+      data-layout-hint="dependencies"
+      data-dep-layers={layers.length || 0}
+      data-connectors={paths.length > 0 ? "1" : "0"}
+    >
+      <div className="fig-comp-deps-canvas" ref={rootRef}>
+        {layers.length ? (
+          <div className="fig-comp-deps-layers" data-testid="nora-composition-deps-layers">
+            {layers.map((layer, li) => (
+              <div key={`layer-${li}`} className="fig-comp-deps-layer" data-layer={li}>
+                {layer.map((id) => {
+                  const n = nodeById.get(id);
+                  if (!n) return null;
+                  return (
+                    <div key={id} className="fig-comp-deps-node" data-node-id={n.id}>
+                      <NoraSemanticIcon role={relationRole(n.kind)} />
+                      <div>
+                        <div className="fig-comp-relations-label">{n.label}</div>
+                        {n.detail ? (
+                          <div className="fig-comp-relations-detail">{n.detail}</div>
+                        ) : null}
+                      </div>
+                    </div>
+                  );
+                })}
+              </div>
+            ))}
+          </div>
+        ) : (
+          <ol className="fig-comp-deps-nodes">
+            {block.nodes.map((n) => (
+              <li key={n.id} className="fig-comp-deps-node" data-node-id={n.id}>
+                <NoraSemanticIcon role={relationRole(n.kind)} />
+                <div>
+                  <div className="fig-comp-relations-label">{n.label}</div>
+                  {n.detail ? (
+                    <div className="fig-comp-relations-detail">{n.detail}</div>
+                  ) : null}
+                </div>
+              </li>
+            ))}
+          </ol>
+        )}
+        {size.w > 0 && size.h > 0 && paths.length > 0 ? (
+          <svg
+            className="fig-comp-deps-svg"
+            data-testid="nora-composition-deps-connectors"
+            width={size.w}
+            height={size.h}
+            viewBox={`0 0 ${size.w} ${size.h}`}
+            aria-hidden
+          >
+            <defs>
+              <marker
+                id="fig-comp-deps-arrowhead"
+                markerWidth="8"
+                markerHeight="8"
+                refX="6"
+                refY="3"
+                orient="auto"
+              >
+                <path d="M0,0 L6,3 L0,6 Z" className="fig-comp-deps-arrowhead" />
+              </marker>
+            </defs>
+            {paths.map((p) => (
+              <path
+                key={p.key}
+                d={p.d}
+                className="fig-comp-deps-connector"
+                markerEnd="url(#fig-comp-deps-arrowhead)"
+                data-edge-key={p.key}
+              />
+            ))}
+          </svg>
+        ) : null}
+      </div>
+      {block.edges.length ? (
+        <ul
+          className="fig-comp-deps-edges"
+          data-testid="nora-composition-relations-edges"
+          data-directed="1"
+          aria-label="Relations dirigées"
+        >
+          {block.edges.map((e, i) => {
+            const from = titleById.get(e.from) ?? e.from;
+            const to = titleById.get(e.to) ?? e.to;
+            return (
+              <li key={`${e.from}-${e.to}-${i}`} data-edge-from={e.from} data-edge-to={e.to}>
+                <span className="fig-comp-deps-from">{from}</span>
+                <span className="fig-comp-deps-arrow" aria-hidden>
+                  →
+                </span>
+                <span className="fig-comp-deps-to">{to}</span>
+                {e.label ? <span className="fig-comp-deps-label"> ({e.label})</span> : null}
+                {e.relation === "depends_on" ? (
+                  <span className="fig-comp-deps-rel"> — dépendance</span>
+                ) : e.relation === "sync" ? (
+                  <span className="fig-comp-deps-rel"> — synchronisation</span>
+                ) : null}
+              </li>
+            );
+          })}
+        </ul>
+      ) : null}
+    </div>
+  );
+}
+
+function RelationsView({
+  block,
+  variant,
+  canonicalReferences,
+  onReference,
+}: {
+  block: RelationsBlock;
+  variant: RelationsVariant;
+  canonicalReferences?: TurnReference[];
+  onReference?: (ref: TurnReference) => void;
+}) {
+  const forceText = variant === "text";
+  const useDirected = variant === "directed";
+  const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));
+
+  return (
+    <section
+      className={`fig-visual-block fig-visual-relations fig-comp-block fig-comp-relations fig-comp-variant-${variant}`}
+      data-testid="nora-visual-relations"
+      data-comp-testid="nora-composition-relations"
+      data-block-kind="relations"
+      data-block-id={block.id}
+      data-variant={variant}
+      data-fallback={useDirected ? "0" : "1"}
+      data-layout={useDirected ? "directed" : "structured-list"}
+      data-layout-hint={block.layoutHint ?? ""}
+      aria-label={block.title}
+    >
+      <Heading title={block.title} role={block.role} icon={block.icon} />
+      {forceText ? (
+        <div className="fig-comp-fallback-text" data-testid="nora-composition-relations-text">
+          {buildExhaustiveBlockFallback(block)}
+        </div>
+      ) : useDirected ? (
+        <RelationsDirectedView block={block} titleById={titleById} />
+      ) : (
+        <RelationsListFallback block={block} titleById={titleById} />
+      )}
+      <Provenance
+        items={block.provenance}
+        canonicalReferences={canonicalReferences}
+        onReference={onReference}
+      />
+    </section>
+  );
+}
+
+function SynthesisView({
+  block,
+  canonicalReferences,
+  onReference,
+}: {
+  block: SynthesisBlock;
+  canonicalReferences?: TurnReference[];
+  onReference?: (ref: TurnReference) => void;
+}) {
+  return (
+    <section
+      className="fig-visual-block fig-visual-synthesis fig-comp-block fig-comp-synthesis"
+      data-testid="nora-visual-synthesis"
+      data-comp-testid="nora-composition-synthesis"
+      data-block-kind="synthesis"
+      data-block-id={block.id}
+      aria-label={block.title}
+    >
+      <Heading title={block.title} role={block.role} icon={block.icon} />
+      <ul className="fig-visual-synthesis-list">
+        {block.items.map((it) => {
+          const role =
+            it.role ??
+            (it.tone === "risk"
+              ? "risk"
+              : it.tone === "hypothesis"
+                ? "hypothesis"
+                : it.tone === "observation"
+                  ? "observation"
+                  : it.tone === "priority"
+                    ? "recommendation"
+                    : "information");
+          return (
+            <li
+              key={it.id}
+              data-tone={it.tone}
+              className={`fig-visual-synth-item fig-visual-tone-${it.tone}`}
+            >
+              <NoraSemanticIcon role={role} icon={it.icon} />
+              <div>
+                <strong>{it.label}</strong>
+                {it.detail ? (
+                  <SafeMarkdown content={it.detail} className="fig-visual-inline-md" />
+                ) : null}
+              </div>
+            </li>
+          );
+        })}
+      </ul>
+      <p className="sr-only">{block.textAlternative}</p>
+      <Provenance
+        items={block.provenance}
+        canonicalReferences={canonicalReferences}
+        onReference={onReference}
+      />
+    </section>
+  );
+}
+
+function TextView({ block }: { block: TextBlock }) {
+  return (
+    <div
+      className={`fig-visual-block fig-visual-text fig-comp-block fig-comp-text${
+        block.role ? ` fig-visual-text-${block.role}` : ""
+      }`}
+      data-testid="nora-visual-text"
+      data-comp-testid="nora-composition-text"
+      data-block-kind="text"
+      data-role={block.role ?? ""}
+    >
+      {block.role || block.icon ? (
+        <div className="fig-visual-text-head">
+          <NoraSemanticIcon role={block.role} icon={block.icon} />
+        </div>
+      ) : null}
+      <SafeMarkdown content={block.markdown} />
+    </div>
+  );
+}
+
+function ChoicesCluster(props: {
+  choices: TurnChoice[];
+  actionable?: boolean;
+  busy?: boolean;
+  choiceFrozen?: boolean;
+  messageId?: string;
+  residual?: boolean;
+  onChoice?: (choice: TurnChoice, messageId: string) => void;
+  anchorId?: string;
+}) {
+  if (!props.choices.length) return null;
+  return (
+    <div
+      className="fig-nora-choices fig-visual-choices-anchor fig-comp-choices"
+      data-testid="nora-choices"
+      data-block-kind="choices"
+      data-residual={props.residual ? "1" : "0"}
+      data-actionable={props.actionable ? "1" : "0"}
+      data-message-id={props.messageId}
+      data-anchor-id={props.anchorId ?? ""}
+    >
+      {props.choices.map((c) => (
+        <button
+          key={c.id}
+          type="button"
+          className="fig-nora-choice"
+          data-testid="nora-choice"
+          data-choice-id={c.id}
+          disabled={!props.actionable || props.busy || props.choiceFrozen}
+          onClick={() => props.messageId && props.onChoice?.(c, props.messageId)}
+        >
+          {c.label}
+        </button>
+      ))}
+      {!props.actionable ? (
+        <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
+          Propositions expirées — consultation seule.
+        </p>
+      ) : null}
+    </div>
+  );
+}
+
+function RefsCluster(props: {
+  references: TurnReference[];
+  residual?: boolean;
+  anchorId?: string;
+  onReference?: (ref: TurnReference) => void;
+}) {
+  if (!props.references.length) return null;
+  return (
+    <ul
+      className="fig-nora-refs fig-visual-refs-anchor fig-comp-refs"
+      data-testid="nora-refs"
+      data-block-kind="references"
+      data-residual={props.residual ? "1" : "0"}
+      data-anchor-id={props.anchorId ?? ""}
+    >
+      {props.references.map((r, i) => (
+        <li key={`${r.kind}-${r.resourceId ?? r.path ?? r.href ?? i}`}>
+          <button
+            type="button"
+            className="fig-nora-ref-link"
+            data-testid="nora-ref-link"
+            data-ref-kind={r.kind}
+            onClick={() => props.onReference?.(r)}
+          >
+            Consulter · {r.label}
+            {r.available === false ? " (à vérifier)" : ""}
+          </button>
+        </li>
+      ))}
+    </ul>
+  );
+}
+
+/** Defect C — never truncate; exhaustive structured fallback. */
+function textAltFor(block: VisualBlock): string {
+  return buildExhaustiveBlockFallback(block);
+}
+
+function AdmittedBlockView({
+  admitted,
+  canonicalReferences,
+  onReference,
+}: {
+  admitted: AdmittedBlock;
+  canonicalReferences?: TurnReference[];
+  onReference?: (ref: TurnReference) => void;
+}) {
+  const { block, variant } = admitted;
+  if (block.kind === "comparison") {
+    return (
+      <ComparisonView
+        block={block}
+        variant={variant as ComparisonVariant}
+        canonicalReferences={canonicalReferences}
+        onReference={onReference}
+      />
+    );
+  }
+  if (block.kind === "sequence") {
+    return (
+      <SequenceView
+        block={block}
+        variant={variant as SequenceVariant}
+        canonicalReferences={canonicalReferences}
+        onReference={onReference}
+      />
+    );
+  }
+  if (block.kind === "relations") {
+    return (
+      <RelationsView
+        block={block}
+        variant={variant as RelationsVariant}
+        canonicalReferences={canonicalReferences}
+        onReference={onReference}
+      />
+    );
+  }
+  if (block.kind === "synthesis") {
+    return (
+      <SynthesisView
+        block={block}
+        canonicalReferences={canonicalReferences}
+        onReference={onReference}
+      />
+    );
+  }
+  if (block.kind === "text") {
+    return <TextView block={block} />;
+  }
+  return null;
+}
+
+export type NoraCompositionProps = {
+  composition: VisualComposition;
+  /** Canonical replyDraft / message body for width-local re-admission consistency. */
+  canonicalText?: string | null;
+  choices?: TurnChoice[];
+  references?: TurnReference[];
+  actionable?: boolean;
+  busy?: boolean;
+  choiceFrozen?: boolean;
+  messageId?: string;
+  onChoice?: (choice: TurnChoice, messageId: string) => void;
+  onReference?: (ref: TurnReference) => void;
+};
+
+export function NoraComposition(props: NoraCompositionProps) {
+  const rootRef = useRef<HTMLDivElement | null>(null);
+  const [widthPx, setWidthPx] = useState<number | null>(null);
+
+  useEffect(() => {
+    const el = rootRef.current;
+    if (!el || typeof ResizeObserver === "undefined") {
+      setWidthPx(el?.clientWidth ?? null);
+      return;
+    }
+    const ro = new ResizeObserver((entries) => {
+      const w = entries[0]?.contentRect.width;
+      if (typeof w === "number" && Number.isFinite(w)) {
+        setWidthPx(Math.round(w));
+      }
+    });
+    ro.observe(el);
+    setWidthPx(Math.round(el.clientWidth));
+    return () => ro.disconnect();
+  }, []);
+
+  const admission = admitConversationalComposition(props.composition, {
+    containerWidthPx: widthPx,
+    canonicalText: props.canonicalText,
+  });
+  const choices = props.choices ?? [];
+  const references = props.references ?? [];
+  const choiceParts = partitionChoicesForAnchors(props.composition.blocks, choices);
+  const refParts = partitionReferencesForAnchors(props.composition.blocks, references);
+  const alreadyConsultable = provenanceConsultableKeys(
+    props.composition.blocks,
+    references,
+  );
+  const dedupeRefs = (list: TurnReference[]) =>
+    list.filter((r) => !alreadyConsultable.has(canonicalReferenceKey(r)));
+
+  return (
+    <div
+      ref={rootRef}
+      className="fig-visual-composition fig-comp-composition"
+      data-testid="nora-visual-composition"
+      data-comp-testid="nora-composition"
+      data-schema={props.composition.schemaVersion}
+      data-contract={admission.contract}
+      data-owns-body={admission.ownsBody ? "1" : "0"}
+      data-body-policy={admission.bodyPolicy}
+      data-container-width={widthPx ?? ""}
+    >
+      {admission.admitted.map((admitted) => {
+        if (admitted.block.kind === "choices") {
+          return (
+            <ChoicesCluster
+              key={admitted.block.id}
+              choices={choiceParts.byAnchorId.get(admitted.block.id) ?? []}
+              actionable={props.actionable}
+              busy={props.busy}
+              choiceFrozen={props.choiceFrozen}
+              messageId={props.messageId}
+              onChoice={props.onChoice}
+              anchorId={admitted.block.id}
+            />
+          );
+        }
+        if (admitted.block.kind === "references") {
+          return (
+            <RefsCluster
+              key={admitted.block.id}
+              references={dedupeRefs(refParts.byAnchorId.get(admitted.block.id) ?? [])}
+              onReference={props.onReference}
+              anchorId={admitted.block.id}
+            />
+          );
+        }
+        return (
+          <BlockErrorBoundary
+            key={admitted.block.id}
+            blockId={admitted.block.id}
+            textAlternative={textAltFor(admitted.block)}
+          >
+            <AdmittedBlockView
+              admitted={admitted}
+              canonicalReferences={references}
+              onReference={props.onReference}
+            />
+          </BlockErrorBoundary>
+        );
+      })}
+      {compositionAnchorsChoices(props.composition) ? (
+        <ChoicesCluster
+          choices={choiceParts.residual}
+          actionable={props.actionable}
+          busy={props.busy}
+          choiceFrozen={props.choiceFrozen}
+          messageId={props.messageId}
+          onChoice={props.onChoice}
+          residual
+          anchorId="residual-choices"
+        />
+      ) : null}
+      {compositionAnchorsReferences(props.composition) ? (
+        <RefsCluster
+          references={dedupeRefs(refParts.residual)}
+          onReference={props.onReference}
+          residual
+          anchorId="residual-references"
+        />
+      ) : null}
+    </div>
+  );
+}
```

### 6.3 Diff `tokens.css` (`git diff a783f014` — complet, non tronqué)

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 8623f598..284333c7 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -2163,6 +2163,274 @@
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
+.fig-comp-deps-canvas {
+  position: relative;
+}
+
+.fig-comp-deps-svg {
+  position: absolute;
+  inset: 0;
+  width: 100%;
+  height: 100%;
+  pointer-events: none;
+  overflow: visible;
+  z-index: 1;
+}
+
+.fig-comp-deps-connector {
+  fill: none;
+  stroke: color-mix(in srgb, var(--fig-accent, #3a6ea5) 70%, var(--fig-line));
+  stroke-width: 1.75;
+}
+
+.fig-comp-deps-arrowhead {
+  fill: color-mix(in srgb, var(--fig-accent, #3a6ea5) 70%, var(--fig-line));
+}
+
+.fig-comp-deps-layers {
+  position: relative;
+  z-index: 2;
+  display: flex;
+  flex-direction: column;
+  gap: 28px;
+}
+
+.fig-comp-deps-layer {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+  align-items: stretch;
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

### 6.4 Diff `NoraConversation.tsx` (C2 policy branch — `git diff a783f014`)

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

### 6.5 `tests/unit/visual-grammar-c1-c2.test.ts` (intégral)

```ts
/**
 * C1 natural fallback language + C2 Strategy A bodyPolicy substitute.
 */
import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
} from "@/domains/conversation/visual-composition";

const TECHNICAL_MARKERS = [
  "relation=",
  "layoutHint",
  "condition_true",
  "condition_false",
  "parallelProcess",
  "decisionTree",
  "depends_on",
  "Disposition:",
];

describe("C1 — natural French fallback", () => {
  it("relations fallback has no wire codes", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r",
          title: "Graphe",
          layoutHint: "decisionTree",
          nodes: [
            { id: "c", label: "Condition", kind: "unknown", detail: "détail" },
            { id: "y", label: "Oui", kind: "hypothesis", laneId: "voie-oui" },
            { id: "n", label: "Non", kind: "finding" },
          ],
          edges: [
            { from: "c", to: "y", relation: "condition_true", label: "ok" },
            { from: "c", to: "n", relation: "condition_false", label: "ko" },
          ],
          textAlternative: "alt",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    for (const m of TECHNICAL_MARKERS) {
      expect(fb, `must not contain ${m}`).not.toContain(m);
    }
    expect(fb).toContain("Arbre conditionnel");
    expect(fb).toContain("(hypothèse)");
    expect(fb).toContain("Si oui");
    expect(fb).toContain("voie « voie-oui »");
  });
});

describe("C2 — Strategy A display policy", () => {
  it("canonical graphic → substitute (no dual prose)", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t", markdown: "Intro." },
        {
          kind: "comparison",
          id: "c",
          title: "Opts",
          alternatives: [
            { id: "a", title: "A", summary: "sa" },
            { id: "b", title: "B", summary: "sb" },
          ],
          textAlternative: "A vs B",
        },
      ],
    })!;
    const adm = admitConversationalComposition(comp, {
      canonicalText: "Intro. A sa B sb",
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("substitute");
    expect(adm.fallbackReasons).toContain("CV_BODY_CANONICAL_GRAPHIC_SUBSTITUTE");
  });

  it("legacy graphic → complement when fidelity ok", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [
        {
          kind: "comparison",
          id: "c",
          title: "Opts",
          alternatives: [
            { id: "a", title: "Alpha", summary: "latence basse", pros: ["rapide"], cons: ["x"] },
            { id: "b", title: "Beta", summary: "latence haute", pros: ["y"], cons: ["lent"] },
          ],
          textAlternative: "Alpha vs Beta",
        },
      ],
    })!;
    const adm = admitConversationalComposition(comp, {
      canonicalText: "Option Alpha latence basse rapide Option Beta latence haute lent",
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("complement");
  });
});
```

### 6.6 `figma-page06-visual-contract.md`

```md
# Contrat visuel extrait — Figma Page 06 (références composition)

**Date :** 2026-11-18 (~10:15 CET)
**Fichier :** `https://www.figma.com/design/itgvCulInEnFY6DvgIegvP`
**Page :** 06 · node `742:2`
**Session MCP :** `6e05c280-eea3-40fd-818e-26683103503d`
**Statut :** EXTRAIT MCP — **références de conception candidates**, pas spécification pixel-finale validée Morris

## Principes UX acceptés (Morris)

- Sobriété de l’environnement ; richesse maîtrisée de la réponse.
- Hiérarchie éditoriale claire ; cartes uniquement si pertinentes.
- Connexions et représentations fiables ; pas de décoration gratuite.
- Texte essentiel non tronqué ; lisibilité à largeur variable.

## Frames de référence

| Ref | Node | Intention | Capture locale | Dimensions PNG |
| --- | --- | --- | --- | --- |
| 03 | 745:2 | Trois options adaptatives (cartes) | `figma-page06/figma-745-2-three-options.png` | ~1040×820 |
| 04 | 745:27 | Comparaison matricielle | `figma-page06/figma-745-27-matrix.png` | ~1040×820 |
| 07 | 751:11 | Dépendances / convergence | `figma-page06/figma-751-11-dependencies.png` | 1040×1130 |
| 08 | 752:2 | Arbre conditionnel | `figma-page06/figma-752-2-decision-tree.png` | 1040×1130 |
| 09 | 753:2 | Processus parallèle | `figma-page06/figma-753-2-parallel.png` | 1040×1130 |

## Observations structurelles (MCP)

| Frame | Structure observée | Incertitudes |
| --- | --- | --- |
| 03 | Titre + grille de cartes option (titre, résumé, attributs) | Espacements exacts vs Studio sombre |
| 04 | En-têtes critères × options ; tableau dense | Wrap horizontal vs stacked |
| 07 | Nœuds en couches + **connecteurs graphiques** orientés vers convergence | Géométrie exacte des courbes ; DA claire vs tokens Studio |
| 08 | Racine + branches conditionnelles oui/non attachées | Style des conditions |
| 09 | Voies parallèles + liens de sync/convergence | Swimlanes vs grid Studio |

## Choix techniques V1 (bornés — pas ELK/RF)

- HTML/CSS/SVG sémantique ; connecteurs **mesurés** (getBoundingClientRect + ResizeObserver).
- Admission déterministe ; fallback liste humaine si topologie refusée.
- Environnement sombre Studio : écart DA fond clair Figma Page 06 = **connu**, non cloné.

## Validation Morris

| Item | Statut |
| --- | --- |
| Source Figma comme direction | Candidate |
| Source Figma comme exécution pixel-finale | **NON VALIDÉE** |
| Transposition 07–09 | Technique bornée livrée ; conformité pixel **NON revendiquée** |

## Verdict contrat Figma

**FIGMA CONTRACT EXTRACTED — RUNTIME COMPARISON PENDING**

Sans revue Morris des captures Figma/runtime inspectables hors handoff MD :
`VISUAL REVIEW NOT COMPLETED`
```

---

## 7. Instruction ChatGPT

1. Relire `sfia/review-handoff` → `latest-chatgpt-review.md` (ce blob).
2. Vérifier que les diffs §6.1–6.4 sont **non vides** et exploitables jusqu'à la fin des hunks.
3. Tracer C2 : `decideBodyPolicy` → branche `NoraConversation` substitute/complement → `data-body-policy`.
4. Confronter à matrice **06 V0.6** ; ne pas inférer ADOPTED / Gate C / LIVE depuis FAKE.
5. Ne pas conclure « pixel-Figma » : VISUAL REVIEW NOT COMPLETED.

**Fin Review Pack Full — Complétude diffs C1–C4.**
