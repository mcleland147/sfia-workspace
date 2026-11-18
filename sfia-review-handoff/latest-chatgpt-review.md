# SFIA Review Pack FULL — Finalisation C2 + W1 Ensemble 05

**Date/heure :** 2026-11-18T10:57:34+0100
**Cycle :** 8 Delivery Critical — EVOL/CORRECTIVE intégré (UX/Arch/QA)
**Contrat :** SFIA v2.6 Finalisation composition visuelle conversationnelle Nora
**Branche :** `sfia/next-ml4d-composition-adaptative`
**HEAD tip :** `a783f014935de0dec5ff8e79a2b18eea0e629756` (+ WT)
**origin/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**Docs tip :** `a6d9614ceeb2d15b04a19233cd506cd43e031354`
**Handoff précédent :** `235a06ef73b92b4af42c8faa3837588118021128` / blob `77f27d250ee6298028eee75c0b69e9994f842540`
**Review Pack :** Full — réinitialisé
**ENV :** DEV · NO RELEASE · STABLE NOT AVAILABLE · **NO PRODUCT PUSH** · RECETTE non touchée
**Fake/Real :** UNIT+BROWSER FAKE **PROVEN** · HISTORICAL PG REPLAY **NOT RUN** · LIVE **NOT RUN** · VISUAL REVIEW **NOT COMPLETED**

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| pwd / toplevel | workspace `…/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD | `a783f014…` |
| origin/main | `997d4c4e…` |
| Staged | vide |
| WT | candidat Strategy A + C1–C4 + **C2 fix** (suivis + non suivis) |
| STOP Git | **NON** |

SHA fichiers C2 :

| Fichier | sha1 |
| --- | --- |
| admission.ts | `3ef2c92074c493222eb9eceb7e2adfc232906b46` |
| NoraComposition.tsx | `73fa149e8757e139f685546b48189ddd1fec9964` |
| tokens.css | `d76da410d3b8a214f74194321bd345c8ad1a1739` |
| c2-substance-exhaustiveness.test.ts | `b265191cc252bb492472618a99f5d59fd39d67cf` |

---

## 2. Blast radius

| Zone | Résultat |
| --- | --- |
| D3 / SDK | Non modifié (lecture seule) |
| Admission | C2 complément ; policies Strategy A / legacy préservées |
| Conversation | NoraConversation policy branch inchangée ; substance via composition |
| M1 | Pas de migration ; PG DEV inspecté lecture seule |
| UX Travail | SubstanceComplement dans blocs graphiques |
| D4/D9 / D6/D7 | Aucun effet métier ajouté |
| CSS | Règles `.fig-comp-substance-complement*` bornées |
| Tests | +10 C2 UNIT ; T02 assert DOM |

---

## 3. C2 — chaîne et correction

### Défaut
`bodyPolicy=substitute` masque `m.content` ; vues graphiques n'exposaient pas le suffixe substantiel de `textAlternative` (synthesis en `sr-only` seulement).

### Correction
1. `structuredBlockSurface` / `visibleTextAlternativeComplement` (admission)
2. `SubstanceComplement` visible dans Comparison / Sequence / Relations / Synthesis
3. Oracles C2-01…C2-10 (UNIT + renderToStaticMarkup)
4. T02 BROWSER : complément « Réserve C2 » visible ; capture `c2-runtime-substance-complement-1440.png`

### Non-régression anti-redondance
C2-10 : pas de duplication intégrale du replyDraft ; complément ≠ prose complète.

**C2 technique : PASS avec preuves DOM** (pas seulement `bodyPolicy === substitute`).

---

## 4. W1 Figma

Verdict : **FIGMA CONTRACT READY — MORRIS VISUAL VALIDATION REQUIRED**

Frames 01–09 capturées localement. Thème clair 01/02 vs Studio sombre = décision Morris ouverte.
**STOP** transposition pixel-finale. Pas d'ELK/RF installé.

Voir §6.8 paquet Morris intégral.

---

## 5. W3–W5

| Workstream | Statut |
| --- | --- |
| W3 construction pixel | **NON** — gate artistique |
| W3 familles existantes | Préservées (cards/matrix/deps/tree/parallel) |
| W4 UNIT | **122 PASS** (112 baseline + 10 C2) |
| W4 T02 | **1 PASS** (~24s) |
| W4 PG | DEV `sfia-next-dev-pg:5433` UP ; **0** payloads historique visualComposition → **HISTORICAL PG REPLAY — NOT RUN** |
| W4 VISUAL | Captures locales ; canal handoff MD → **VISUAL REVIEW NOT COMPLETED** |
| W5 | Corpus 10 questions préparé ; LIVE NOT RUN |

---

## 6. Diffs exploitables (complets)

### 6.1 Diff `admission.ts` (nouveau fichier vs /dev/null)

```diff
diff --git a/web/src/domains/conversation/conversational-composition/admission.ts b/web/src/domains/conversation/conversational-composition/admission.ts
new file mode 100644
index 00000000..e4e0f41a
--- /dev/null
+++ b/web/src/domains/conversation/conversational-composition/admission.ts
@@ -0,0 +1,680 @@
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
+ * Structured surface rendered by graphic variants — excludes textAlternative.
+ * Used by C1 fallback merge and C2 visible complement detection.
+ */
+export function structuredBlockSurface(block: VisualBlock): string {
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
+    return parts.join("\n");
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
+    return parts.join("\n");
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
+    return parts.join("\n");
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
+    return parts.join("\n");
+  }
+  return "";
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
+  if (block.kind === "choices" || block.kind === "references") {
+    return "";
+  }
+  return mergeTextAlternative(structuredBlockSurface(block), block.textAlternative);
+}
+
+/** Significant tokens for C2 coverage (never prefix-80). */
+function significantTokens(text: string): string[] {
+  return text
+    .toLowerCase()
+    .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
+    .map((t) => t.trim())
+    .filter((t) => t.length > 3);
+}
+
+/**
+ * True when a line/sentence is already represented by structured graphic fields.
+ * Uses inclusion first, then majority token overlap — not a silent truncation heuristic.
+ */
+function coveredBySurface(surface: string, chunk: string): boolean {
+  const c = chunk.trim();
+  if (!c) return true;
+  if (surface.includes(c)) return true;
+  const tokens = significantTokens(c);
+  if (tokens.length === 0) return false;
+  const surfaceLc = surface.toLowerCase();
+  const hits = tokens.filter((t) => surfaceLc.includes(t)).length;
+  return hits / tokens.length >= 0.7;
+}
+
+/**
+ * C2 — complementary substance from textAlternative not covered by structured graphic fields.
+ * Returns empty when fully redundant. Never uses prefix-80 heuristics.
+ * Visible editorial complement must be consultable by the Pilote (not sr-only alone).
+ */
+export function visibleTextAlternativeComplement(block: VisualBlock): string {
+  if (block.kind === "text" || block.kind === "choices" || block.kind === "references") {
+    return "";
+  }
+  const alt = (block.textAlternative ?? "").trim();
+  if (!alt) return "";
+  const surface = structuredBlockSurface(block).trim();
+  if (!surface) return alt;
+  if (surface.includes(alt)) return "";
+
+  const lineChunks = alt
+    .split(/\n+/)
+    .map((l) => l.trim())
+    .filter(Boolean);
+  if (lineChunks.length > 1) {
+    const uncoveredLines = lineChunks.filter((line) => !coveredBySurface(surface, line));
+    if (uncoveredLines.length === 0) return "";
+    return uncoveredLines.join("\n");
+  }
+
+  const sentences = alt
+    .split(/(?<=[.!?…])\s+/)
+    .map((s) => s.trim())
+    .filter(Boolean);
+  if (sentences.length > 1) {
+    const uncovered = sentences.filter((s) => !coveredBySurface(surface, s));
+    if (uncovered.length === 0) return "";
+    if (uncovered.length < sentences.length) return uncovered.join(" ");
+  }
+
+  // Whole alternative is complementary relative to structured surface.
+  return coveredBySurface(surface, alt) ? "" : alt;
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

### 6.2 Diff `NoraComposition.tsx` (nouveau fichier vs /dev/null)

```diff
diff --git a/web/src/components/figma/NoraComposition.tsx b/web/src/components/figma/NoraComposition.tsx
new file mode 100644
index 00000000..046e180c
--- /dev/null
+++ b/web/src/components/figma/NoraComposition.tsx
@@ -0,0 +1,1128 @@
+"use client";
+
+/**
+ * Nora conversational composition renderer.
+ * Product responsibility: adaptive restitution of validated D3 compositions.
+ * Presentation contract: conversational-composition-v1 (admission).
+ * Wire compatibility: e05-visual-composition-v1 (bounded).
+ */
+
+import React, {
+  Component,
+  type ErrorInfo,
+  type ReactNode,
+  useEffect,
+  useLayoutEffect,
+  useRef,
+  useState,
+} from "react";
+
+// Keep React binding for classic JSX transforms (Vitest SSR / esbuild).
+void React;
+import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
+import {
+  admitConversationalComposition,
+  buildExhaustiveBlockFallback,
+  topologicalLayers,
+  visibleTextAlternativeComplement,
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
+/**
+ * C2 — visible complementary substance from textAlternative.
+ * Must remain consultable under bodyPolicy=substitute (not sr-only alone).
+ * Does not duplicate the full replyDraft; only non-redundant complement.
+ */
+function SubstanceComplement({ block }: { block: VisualBlock }) {
+  if (block.kind === "text" || block.kind === "choices" || block.kind === "references") {
+    return null;
+  }
+  const complement = visibleTextAlternativeComplement(block);
+  if (!complement) return null;
+  return (
+    <aside
+      className="fig-comp-substance-complement"
+      data-testid="nora-composition-substance-complement"
+      data-block-id={block.id}
+    >
+      <p className="fig-comp-substance-complement-label">Complément</p>
+      <p className="fig-comp-substance-complement-text">{complement}</p>
+    </aside>
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
+      {!forceText ? <SubstanceComplement block={block} /> : null}
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
+      {!forceText ? <SubstanceComplement block={block} /> : null}
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
+      {!forceText ? <SubstanceComplement block={block} /> : null}
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
+      <SubstanceComplement block={block} />
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

### 6.3 Diff `tokens.css` (`git diff a783f014` — complet)

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 8623f598..9ab8eed5 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -2163,6 +2163,296 @@
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
+/* C2 — complementary substance under substitute (visible, not sr-only) */
+.fig-comp-substance-complement {
+  margin: 12px 0 0;
+  padding: 10px 12px;
+  border-left: 3px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-panel) 72%, transparent);
+}
+
+.fig-comp-substance-complement-label {
+  margin: 0 0 4px;
+  font-size: 11px;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--fig-muted);
+}
+
+.fig-comp-substance-complement-text {
+  margin: 0;
+  overflow-wrap: anywhere;
+  color: var(--fig-ink);
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

### 6.4 Diff `NoraConversation.tsx`

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

### 6.5 Diff `fixture-semantic-qualify.ts` (Réserve C2 S3)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 05ae9e30..e2227fe1 100644
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
@@ -811,7 +838,7 @@ register(
             recommendation:
               "Si les responsabilités d'arbitrage ne sont pas encore claires, préférer une approche progressive — avis conditionnel, pas une décision enregistrée.",
             textAlternative:
-              "Progressive : apprentissage et réversibilité, cohérence temporaire inégale. Simultanée : cohérence immédiate, charge et risque plus élevés. Avis : progressive si les rôles ne sont pas clarifiés.",
+              "Progressive : apprentissage et réversibilité, cohérence temporaire inégale. Simultanée : cohérence immédiate, charge et risque plus élevés. Avis : progressive si les rôles ne sont pas clarifiés.\nRéserve C2 : ne pas conclure à une décision d'arbitrage tant que le porteur n'est pas nommé.",
             provenance: [
               {
                 label: "Note de cadrage coordination",
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
@@ -1018,6 +1059,153 @@ register(
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
+        schemaVersion: "conversational-composition-canonical-v1",
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
+        schemaVersion: "conversational-composition-canonical-v1",
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
+/** A4 — canonical overflow (>12k joined) must fail validation, never COMPLETE raw. */
+const E05_A4_OVERFLOW = "E05_A4_OVERFLOW";
+register(
+  E05_A4_OVERFLOW,
+  dialogue(
+    "Overflow canonique A4",
+    "TEXTE_INITIAL_DIVERGENT_NE_DOIT_PAS_SURVIVRE_EN_COMPLETE",
+    ["NO_EFFECT", "A4_OVERFLOW"],
+    {
+      visualComposition: {
+        schemaVersion: "conversational-composition-canonical-v1",
+        blocks: [0, 1, 2, 3].map((i) => ({
+          kind: "text" as const,
+          id: `ov${i}`,
+          markdown: "Z".repeat(3500),
+        })),
+      },
+    },
+  ),
+);
+
+/** A4 — valid canonical with deliberately divergent replyDraft (derive must win). */
+const E05_A4_DIVERGENT_OK = "E05_A4_DIVERGENT_OK";
+register(
+  E05_A4_DIVERGENT_OK,
+  dialogue(
+    "Derive canonique A4",
+    "TEXTE_DIVERGENT_INDEPENDANT_A_ECRASER",
+    ["NO_EFFECT", "A4_DIVERGENT"],
+    {
+      visualComposition: {
+        schemaVersion: "conversational-composition-canonical-v1",
+        blocks: [
+          {
+            kind: "text",
+            id: "t1",
+            markdown: "Prose canonique unique pour A4-01/A4-04.",
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
@@ -1025,6 +1213,10 @@ for (const [short, long] of [
   ["E05_S4_TRAJECTORY", E05_S4_TRAJECTORY],
   ["E05_S5_COMPOSITE", E05_S5_COMPOSITE],
   ["E05_S7_INSUFFICIENT", E05_S7_INSUFFICIENT],
+  ["E05_F5_DECISION_TREE", E05_F5_DECISION_TREE],
+  ["E05_F5_PARALLEL", E05_F5_PARALLEL],
+  ["E05_A4_OVERFLOW", E05_A4_OVERFLOW],
+  ["E05_A4_DIVERGENT_OK", E05_A4_DIVERGENT_OK],
   ["E05_VISUAL_SIMPLE", E05_S1_SIMPLE],
   ["E05_VISUAL_COMPARISON", E05_S3_COMPARISON],
   ["E05_VISUAL_SEQUENCE", E05_S4_TRAJECTORY],
```

### 6.6 Diff `ensemble05-travail-nora.spec.ts` (assert C2 T02)

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
index 37b839c4..d1947968 100644
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
@@ -593,14 +648,29 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     await expect(s3.getByTestId("nora-visual-prov-link")).toHaveCount(1);
     await expect(s3.getByTestId("nora-ref-link")).toHaveCount(0);
     await expect(s3.getByText(/Consulter · Note de cadrage coordination/i)).toHaveCount(1);
+    // Corrective A — alternative substance remains visible (cards or matrix+details).
+    await expect(s3.getByTestId("nora-composition-alt-detail").first()).toBeVisible();
+    // C2 — complementary reserve from textAlternative must be consultable in DOM (not sr-only).
+    const s3Complement = s3.getByTestId("nora-composition-substance-complement");
+    await expect(s3Complement).toBeVisible();
+    await expect(s3Complement).toContainText(/Réserve C2/i);
+    await expect(s3Complement).toContainText(/porteur n'est pas nommé|porteur n’est pas nommé/i);
     await page.screenshot({
       path: path.join(evidenceDir, "runtime-visual-comparison-1440.png"),
       fullPage: false,
     });
+    await page.screenshot({
+      path: path.join(evidenceDir, "c2-runtime-substance-complement-1440.png"),
+      fullPage: false,
+    });
     await page.screenshot({
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

### 6.7 `tests/unit/c2-substance-exhaustiveness.test.ts` (intégral)

```ts
/**
 * C2 — exhaustivité visible sous bodyPolicy=substitute.
 * Oracles C2-01…C2-10 : substance consultable, pas de dual prose intégrale,
 * pas de preuve sr-only seule.
 */
import { describe, expect, it } from "vitest";
import React, { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  visibleTextAlternativeComplement,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
} from "@/domains/conversation/visual-composition";

// Classic JSX runtime (Vitest/esbuild) expects a global React binding.
(globalThis as typeof globalThis & { React: typeof React }).React = React;

const RESERVE =
  "Réserve : l'arbitrage des responsabilités n'est pas encore décidé — ne pas conclure.";

async function renderComposition(
  composition: NonNullable<ReturnType<typeof parseVisualComposition>>,
  canonicalText: string,
): Promise<string> {
  const { NoraComposition } = await import("@/components/figma/NoraComposition");
  return renderToStaticMarkup(
    createElement(NoraComposition, { composition, canonicalText }),
  );
}

function comparisonWithReserve() {
  return parseVisualComposition({
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [
      {
        kind: "comparison",
        id: "c",
        title: "Options de déploiement",
        alternatives: [
          {
            id: "a",
            title: "Progressif",
            summary: "vagues courtes",
            pros: ["réversible"],
            cons: ["plus long"],
          },
          {
            id: "b",
            title: "Simultané",
            summary: "bascule unique",
            pros: ["rapide"],
            cons: ["risqué"],
          },
        ],
        criteria: [
          { id: "lat", label: "Latence", values: { a: "basse", b: "haute" } },
          { id: "ris", label: "Risque", values: { a: "limité", b: "élevé" } },
          { id: "cout", label: "Coût", values: { a: "étalé", b: "concentré" } },
        ],
        recommendation: "Préférer le progressif si l'arbitrage est flou.",
        textAlternative: `Progressif vagues courtes. Simultané bascule unique.\n${RESERVE}`,
      },
    ],
  })!;
}

describe("C2 substance exhaustiveness", () => {
  it("C2-01 — no composition → policy markdown_only (texte libre inchangé)", () => {
    const adm = admitConversationalComposition(null, { canonicalText: "Bonjour." });
    expect(adm.bodyPolicy).toBe("markdown_only");
    expect(adm.admitted).toHaveLength(0);
  });

  it("C2-02 — composition canonique simple : chaque info consultable", async () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [{ kind: "text", id: "t", markdown: "Synthèse courte du projet." }],
    })!;
    const adm = admitConversationalComposition(comp, {
      canonicalText: "Synthèse courte du projet.",
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("substitute");
    const html = await renderComposition(comp, "Synthèse courte du projet.");
    expect(html).toContain("Synthèse courte du projet.");
    expect(html).not.toContain("nora-composition-substance-complement");
  });

  it("C2-03 — comparaison graphique : critères + réserve complémentaire accessibles", async () => {
    const comp = comparisonWithReserve();
    const adm = admitConversationalComposition(comp, {
      canonicalText: buildExhaustiveBlockFallback(comp.blocks[0]!),
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("substitute");
    expect(visibleTextAlternativeComplement(comp.blocks[0]!)).toContain(RESERVE);

    const html = await renderComposition(
      comp,
      buildExhaustiveBlockFallback(comp.blocks[0]!),
    );
    expect(html).toContain("Progressif");
    expect(html).toContain("Simultané");
    expect(html).toContain("Latence");
    expect(html).toContain("Risque");
    expect(html).toContain("Coût");
    expect(html).toContain('data-testid="nora-composition-substance-complement"');
    // Apostrophe may be HTML-escaped in SSR markup.
    expect(html).toMatch(/Réserve\s*:\s*l(?:'|&#x27;|&#39;)arbitrage des responsabilités/);
    expect(html).toContain("fig-comp-substance-complement");
    expect(html).not.toMatch(/sr-only[^>]*>[^<]*Réserve/);
  });

  it("C2-04 — textAlternative préfixe redondant + suffixe substantiel", () => {
    const block = comparisonWithReserve().blocks[0]!;
    const complement = visibleTextAlternativeComplement(block);
    expect(complement).toBe(RESERVE);
    expect(complement).not.toContain("Progressif vagues courtes");
  });

  it("C2-05 — séquence : condition absente du libellé court n'est pas perdue", async () => {
    const condition =
      "Condition : ne démarrer la vague 2 que si le support est mobilisable.";
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "s",
          title: "Trajectoire",
          steps: [
            { id: "s1", title: "Cadrage", detail: "périmètre" },
            { id: "s2", title: "Vague 1", detail: "pilote" },
            { id: "s3", title: "Vague 2", detail: "extension" },
          ],
          textAlternative: `Cadrage. Vague 1. Vague 2.\n${condition}`,
        },
      ],
    })!;
    expect(visibleTextAlternativeComplement(comp.blocks[0]!)).toContain(condition);
    const html = await renderComposition(comp, "x");
    expect(html).toContain(condition);
    expect(html).toContain("nora-composition-substance-complement");
  });

  it("C2-06 — relations : qualifications/limites lisibles", async () => {
    const limit = "Limite : les liens représentent des conditions, pas un état prouvé.";
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r",
          title: "Dépendances",
          layoutHint: "dependencies",
          nodes: [
            { id: "a", label: "Pratiques locales", kind: "observation" },
            { id: "b", label: "Friction", kind: "finding" },
          ],
          edges: [{ from: "a", to: "b", relation: "depends_on" }],
          textAlternative: `Pratiques locales → Friction.\n${limit}`,
        },
      ],
    })!;
    expect(visibleTextAlternativeComplement(comp.blocks[0]!)).toContain(limit);
    const html = await renderComposition(comp, "x");
    expect(html).toContain(limit);
  });

  it("C2-07 — synthèse : complément ne disparaît pas", async () => {
    const note = "Hypothèse non prouvée : le pic de charge reste à confirmer.";
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "synthesis",
          id: "sy",
          title: "À surveiller",
          items: [
            { id: "i1", label: "Coordination", detail: "rôles flous", tone: "risk" },
            { id: "i2", label: "Support", detail: "capacité locale", tone: "observation" },
          ],
          textAlternative: `Coordination. Support.\n${note}`,
        },
      ],
    })!;
    expect(visibleTextAlternativeComplement(comp.blocks[0]!)).toContain(note);
    const html = await renderComposition(comp, "x");
    expect(html).toContain(note);
    expect(html).not.toMatch(/class="sr-only"[^>]*>[^<]*Hypothèse non prouvée/);
  });

  it("C2-08 — erreur composant : fallback exhaustif via boundary text", () => {
    const comp = comparisonWithReserve();
    const fallback = buildExhaustiveBlockFallback(comp.blocks[0]!);
    expect(fallback).toContain(RESERVE);
    expect(fallback).toContain("Progressif");
  });

  it("C2-09 — legacy : complement policy conservée (pas substitute forcé)", () => {
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

  it("C2-10 — rendu composite : pas de duplication intégrale automatique du replyDraft", async () => {
    const draft =
      "Intro narrative unique. Progressif vagues courtes. Simultané bascule unique. " + RESERVE;
    const comparison = comparisonWithReserve().blocks[0]!;
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t", markdown: "Intro narrative unique." },
        comparison,
      ],
    })!;
    const adm = admitConversationalComposition(comp, {
      canonicalText: draft,
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("substitute");
    const html = await renderComposition(comp, draft);
    const occurrences = html.split(draft).length - 1;
    expect(occurrences).toBe(0);
    expect(html).toMatch(/Réserve\s*:\s*l(?:'|&#x27;|&#39;)arbitrage des responsabilités/);
    expect(html).toContain("Intro narrative unique.");
  });
});
```

### 6.8 Paquet validation Morris Page 06

```md
# Paquet de validation artistique Morris — Figma Page 06

**Date :** 2026-11-18
**Fichier :** `itgvCulInEnFY6DvgIegvP` · page `742:2`
**Session MCP :** `05690991-8dcf-4780-a219-714f1955f094`
**Statut :** **FIGMA CONTRACT READY — MORRIS VISUAL VALIDATION REQUIRED**
**Non-statut :** pas de pixel-finale ; pas de FIGMA TO RUNTIME ALIGNED

## 1. Langage graphique commun (extrait)

- Shell Travail : rail gauche, fil conversation, panneau « En bref » (frames 01/02).
- Restitution éditoriale : sur-titre intention, titre fort, intro courte, séparateur, sections numérotées.
- Cartes d’option : label, titre, résumé, avantages/limites ; hauteur variable selon contenu.
- Matrice : colonnes option / atout / point à vérifier ; densification sans 5 grands panneaux.
- Parcours : étapes numérotées horizontales **ou** liste verticale ; planning calendaire seulement si dates établies.
- Graphes : nœuds typés + connecteurs Manhattan orientés ; note de fidélité / garde-fou en bas.
- Accent éditorial vertical (barre) pour orientation / recommandation / réserve.
- Labels épistémiques (observation, hypothèse, risque, recommandation) — **ne pas** peindre tout risque en rouge critique.

## 2. Composition attendue par famille

| Famille | Frames | Intention | Variantes |
| --- | --- | --- | --- |
| Synthèse / narration | 01 | Arbitrage lisible, KPIs uniquement si établis | prose + callouts + orientation conditionnelle |
| Parcours / planning | 02, 06 | Séquence et jalons | horizontal, vertical, calendrier **si** dates |
| Comparaison | 03, 04, 05 | Options comparables | cards, matrix, stack, texte ; largeur contrainte |
| Dépendances | 07 | Convergence de prérequis | couches + connecteurs + liste humaine |
| Arbre conditionnel | 08 | Oui/non attachés, pas de HumanDecision | arbre dirigé / texte |
| Parallèle | 09 | Voies + sync + gate | lanes + edges + texte |

## 3. Stratégie thème Studio (décision ouverte)

| Observation | Impact |
| --- | --- |
| Frames 01/02 MCP : **fond clair** shell + conversation | Runtime Studio actuel : **sombre** |
| Frames 03–09 : surfaces de composition (souvent sombres / navy) | Tokens Studio `--fig-*` déjà sombres |
| **Recommandation technique** | Adapter la composition aux tokens Studio sombres ; **ne pas** cloner le fond clair Figma 01/02 sans GO Morris thème |

## 4. Responsive / densité

- Conteneur Travail (pas `window.innerWidth`) : ~390 / 430 / 790 / 1040 / 1280 / 1440.
- 3 options → cards ; 5+ → matrix ou liste ; 12–18 → refus d’enveloppe / fallback texte.
- Zoom 200–400 % et split 50/50 : reflow + focus (à prouver W4).

## 5. Écarts runtime actuel vs Figma

| Zone | Runtime | Figma | Écart |
| --- | --- | --- | --- |
| Shell | Sombre Studio | 01/02 clair | Thème |
| Cartes/matrice | Présentes | 03/04 | Structure OK ; DA pixel NON |
| Dépendances | SVG mesuré + liste | 07 Manhattan multi-couches | Géométrie PARTIAL |
| Arbre / parallèle | HTML/CSS directed | 08/09 | Lisibilité PARTIAL vs maquette |
| Complément C2 | `SubstanceComplement` visible | Réserves éditoriales | Alignement intention OK |

## 6. Décisions graphiques encore ouvertes (Morris)

1. Valider adaptation **tokens sombres** vs reproduction thème clair 01/02.
2. Niveau de fidélité pixel attendu pour 07/08/09 (SVG actuel vs ELK/RF — **aucune dépendance ajoutée** sans gate).
3. Calendrier planning (02) : n’activer que si dates canoniques.
4. Iconographie : conserver `NoraSemanticIcon` ou aligner sur symboles Figma page 06.
5. Densité KPI frame 01 : n’afficher que valeurs établies (déjà règle métier).

## 7. Recommandation layout complexes

Conserver **HTML/CSS/SVG mesuré** (DependenciesConnectedView) en V1.
ELK / React Flow : **non installés** ; uniquement si Morris valide un gap de lisibilité après revue des captures 07–09.

## 8. Captures Figma locales

| Frame | Node | Fichier |
| --- | --- | --- |
| 01 | 742:36 | `figma-page06/figma-742-36-synthesis.png` |
| 02 | 743:2 | `figma-page06/figma-743-2-planning.png` |
| 03 | 745:2 | `figma-page06/figma-745-2-three-options.png` |
| 04 | 745:27 | `figma-page06/figma-745-27-matrix.png` |
| 05 | 746:2 | `figma-page06/figma-746-2-constrained.png` |
| 06 | 746:22 | `figma-page06/figma-746-22-vertical-steps.png` |
| 07 | 751:11 | `figma-page06/figma-751-11-dependencies.png` |
| 08 | 752:2 | `figma-page06/figma-752-2-decision-tree.png` |
| 09 | 753:2 | `figma-page06/figma-753-2-parallel.png` |

## Verdict W1

**FIGMA CONTRACT READY — MORRIS VISUAL VALIDATION REQUIRED**

Cursor **STOP** avant transposition pixel-finale non approuvée. Travaux techniques indépendants (C2, preuves, families existantes) poursuivis.
```

### 6.9 Corpus W5

```md
# W5 — Corpus de réception Ensemble 05 (préparation)

**Statut :** préparatoire FAKE — **LIVE NOT RUN** (GO Morris distinct requis)
**Date :** 2026-11-18

| # | Question libre | Représentation pertinente | Texte seul préférable si… | Oracles vérité | Non-redondance | Qualité graphique |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Résume le projet et sujets à surveiller | synthèse + réserves | question triviale | pas de fait inventé | pas de double prose | hiérarchie éditoriale |
| 2 | Compare stratégies et recommande | comparaison cards/matrix | <2 options | recommandation ≠ HumanDecision | complément seulement si nécessaire | critères complets |
| 3 | Dépendances prochaine étape | dépendances dirigées | topologie invalide → liste | liens orientés exacts | liste humaine + SVG | connecteurs mesurés |
| 4 | Jalons réellement connus | séquence / planning | aucune date établie | pas de date inventée | — | ordre sémantique |
| 5 | Décisions restantes | synthèse décisions | — | D6 non déclenché | — | distinction avis/décision |
| 6 | Hypothèses non prouvées | synthèse hypothèses | — | tone hypothèse visible | — | pas de faux fait |
| 7 | Processus multi-équipes parallèle | parallelProcess | topologie refusée | sync orientée | — | voies distinctes |
| 8 | Indicateurs chiffrés établis | tableau/texte | données insuffisantes | pas de graphique inventé | — | honnêteté quanti |
| 9 | Explique sans graphique | narration | toujours OK | narrative-only | — | pas de graphique forcé |
| 10 | Synthèse détaillée sources/risques/pistes | composite | — | sources contrôlées | C2 réserve visible | shell non cassé |

**Limite :** ce corpus ne constitue pas une acceptation W5 ni un Gate C.
```

---

## 7. Matrice familles (rapport §B)

| Famille | Figma | Implémentation | Tests | Capture | Verdict |
| --- | --- | --- | --- | --- | --- |
| Narration/synthèse | 01 | text/synthesis + C2 | UNIT+T02 | figma-742-36 + runtime | PARTIAL DA |
| Parcours | 02/06 | sequence H/V | T02 | figma-743/746-22 | PARTIAL |
| Comparaison | 03/04/05 | cards/matrix/stack/text | UNIT+T02+C2 | figma-745* + c2 PNG | PARTIAL DA ; C2 PASS |
| Dépendances | 07 | SVG mesuré | T02 | figma-751 + f5 | PARTIAL |
| Arbre | 08 | directed HTML | T02 | figma-752 + f5 | PARTIAL |
| Parallèle | 09 | lanes | T02 | figma-753 + f5 | PARTIAL |
| Quantitatif | — | refus si insuffisant | T02 S7 | — | PASS honnêteté |

---

## 8. Verdict Cursor

**READY WITH RESERVES**

Réserves / gates Morris :
1. Validation artistique Page 06 (thème + fidélité 07–09)
2. HISTORICAL PG REPLAY (pas de payloads composition en DEV)
3. VISUAL REVIEW (PNG hors canal handoff)
4. LIVE / réception W5 / Gate C / push produit — GO distincts

**Instruction ChatGPT :** relire `sfia/review-handoff` → `latest-chatgpt-review.md` ; vérifier diffs §6 non vides ; tracer C2 DOM ; ne pas inférer ADOPTED/Gate C/LIVE.

**Fin Review Pack Full — C2 + W1.**
