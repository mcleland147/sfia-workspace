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
 * Semantic preconditions for graphic comparison (not a cardinality quota).
 * Incomplete alternatives → prose — never invent missing pros/cons/criteria cells.
 */
export function comparisonAlternativesExploitable(
  block: Extract<VisualBlock, { kind: "comparison" }>,
): { ok: boolean; completeCount: number; reasonCodes: string[] } {
  const reasons: string[] = [];
  let completeCount = 0;
  for (const a of block.alternatives) {
    const titled = labelLen(a.title) > 0;
    const bodied =
      labelLen(a.summary) > 0 ||
      (a.pros?.length ?? 0) > 0 ||
      (a.cons?.length ?? 0) > 0;
    if (titled && bodied) completeCount += 1;
  }
  if (completeCount < 2) {
    reasons.push("CV_COMPARISON_INCOMPLETE_ALTERNATIVES");
    return { ok: false, completeCount, reasonCodes: reasons };
  }
  if (completeCount < block.alternatives.length) {
    reasons.push("CV_COMPARISON_PARTIAL_ALTERNATIVES");
  }
  // Homogeneous criteria only when every listed criterion has a value for each alt.
  const criteria = block.criteria ?? [];
  if (criteria.length > 0) {
    const altIds = block.alternatives.map((a) => a.id);
    const ragged = criteria.some((c) =>
      altIds.some((id) => labelLen(c.values?.[id] ?? "") === 0),
    );
    if (ragged) {
      reasons.push("CV_COMPARISON_CRITERIA_INCOMPLETE");
    }
  }
  return { ok: true, completeCount, reasonCodes: reasons };
}

/**
 * CV-04/05 — comparison variant from cardinality, label density, and width.
 * No dogmatic "N cards" / "N matrix" threshold alone.
 */
export function selectComparisonVariant(
  block: Extract<VisualBlock, { kind: "comparison" }>,
  widthPx: number | null,
): { variant: ComparisonVariant; reasonCodes: string[] } {
  const n = block.alternatives.length;
  const density = maxOptionTextLen(block);
  const criteria = block.criteria?.length ?? 0;
  const reasons: string[] = [];

  const substance = comparisonAlternativesExploitable(block);
  reasons.push(...substance.reasonCodes);
  if (!substance.ok) {
    return { variant: "text", reasonCodes: reasons };
  }

  if (n < 2) {
    reasons.push("CV_COMPARISON_UNDER_CARDINALITY");
    return { variant: "text", reasonCodes: reasons };
  }
  if (n > 18) {
    reasons.push("CV_COMPARISON_OVER_CAPACITY");
    return { variant: "text", reasonCodes: reasons };
  }

  // Criteria present but incomplete → never a deceptive matrix; fall through to cards/stack/text.
  const criteriaHomogeneous =
    criteria >= 2 && !substance.reasonCodes.includes("CV_COMPARISON_CRITERIA_INCOMPLETE");

  const narrow = widthPx != null && widthPx < 560;
  const medium = widthPx != null && widthPx < 900;

  // Figma 05 — two options in a constrained Travail column → stacked cards.
  if (n === 2 && narrow) {
    reasons.push("CV_COMPARISON_TWO_STACKED");
    return { variant: "stacked", reasonCodes: reasons };
  }
  // Criteria present AND homogeneous → editorial matrix so criterion cells remain visible (C2).
  // Exception: three short options without needing a dense grid stay cards (Figma 03).
  if (criteriaHomogeneous && !(n === 3 && density <= 220)) {
    reasons.push("CV_COMPARISON_MATRIX_CRITERIA");
    return { variant: narrow ? "stacked" : "matrix", reasonCodes: reasons };
  }
  // Figma 04 — five+ options with comparable substance (or dense homogeneous criteria).
  if (
    n >= 5 ||
    (criteriaHomogeneous && criteria >= 3 && n >= 4) ||
    (n >= 4 && density > 220 && criteriaHomogeneous)
  ) {
    reasons.push("CV_COMPARISON_MATRIX_DENSITY");
    return { variant: narrow ? "stacked" : "matrix", reasonCodes: reasons };
  }
  // Figma 03 — three comparable options → cards (even with long copy).
  if (n === 3 && !narrow) {
    reasons.push("CV_COMPARISON_THREE_CARDS");
    return { variant: "cards", reasonCodes: reasons };
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
  // Figma 02 — four editorial steps stay horizontal in a typical Travail column (~600–900px).
  // Vertical only when the column is truly constrained, density is high, or copy is long.
  const narrow = widthPx != null && widthPx < 580;
  if (n >= 5 || long) {
    reasons.push("CV_SEQUENCE_VERTICAL_DENSITY");
    return { variant: "vertical", reasonCodes: reasons };
  }
  if (narrow) {
    reasons.push("CV_SEQUENCE_NARROW_VERTICAL");
    return { variant: "vertical", reasonCodes: reasons };
  }
  reasons.push("CV_SEQUENCE_HORIZONTAL");
  return { variant: "horizontal", reasonCodes: reasons };
}

/**
 * Distinguish dependencies vs parallelProcess without inventing edges.
 * - parallel without ≥2 laneIds → dependencies (hint correction)
 * - dependencies with ≥2 lanes + real sync → parallelProcess
 * - no hint: infer from lanes/sync or depends_on/flow
 * Ambiguous hybrid with lanes (LIVE L07 shape) keeps parallelProcess.
 */
export function normalizeRelationsLayoutHint(
  block: Extract<VisualBlock, { kind: "relations" }>,
): {
  block: Extract<VisualBlock, { kind: "relations" }>;
  reasonCodes: string[];
} {
  const reasons: string[] = [];
  const lanes = new Set(
    block.nodes.map((n) => n.laneId).filter((id): id is string => typeof id === "string" && id.length > 0),
  );
  const hasSync = block.edges.some((e) => e.relation === "sync");
  const hasDepLike = block.edges.some(
    (e) => e.relation === "depends_on" || e.relation === "flow" || e.relation == null,
  );
  const hint = block.layoutHint;

  if (hint === "parallelProcess" && lanes.size < 2) {
    reasons.push("CV_HINT_PARALLEL_WITHOUT_LANES_TO_DEPS");
    return { block: { ...block, layoutHint: "dependencies" }, reasonCodes: reasons };
  }
  if (hint === "dependencies" && lanes.size >= 2 && hasSync) {
    reasons.push("CV_HINT_DEPS_WITH_LANES_SYNC_TO_PARALLEL");
    return { block: { ...block, layoutHint: "parallelProcess" }, reasonCodes: reasons };
  }
  if (!hint) {
    if (lanes.size >= 2) {
      reasons.push("CV_HINT_INFER_PARALLEL_FROM_LANES");
      return { block: { ...block, layoutHint: "parallelProcess" }, reasonCodes: reasons };
    }
    if (hasDepLike && block.edges.length > 0) {
      reasons.push("CV_HINT_INFER_DEPENDENCIES");
      return { block: { ...block, layoutHint: "dependencies" }, reasonCodes: reasons };
    }
  }
  return { block, reasonCodes: reasons };
}

/**
 * Relations: directed CSS layout when layoutHint + envelope allow; else exhaustive list.
 * Fixed-coordinate SVG remains forbidden.
 */
export function selectRelationsVariant(
  block: Extract<VisualBlock, { kind: "relations" }>,
  widthPx: number | null,
): { variant: RelationsVariant; reasonCodes: string[] } {
  const normalized = normalizeRelationsLayoutHint(block);
  const work = normalized.block;
  const nodes = work.nodes.length;
  const edges = work.edges.length;
  const reasons: string[] = [...normalized.reasonCodes];
  if (nodes === 0) {
    reasons.push("CV_RELATIONS_EMPTY");
    return { variant: "text", reasonCodes: reasons };
  }
  const ids = new Set(work.nodes.map((n) => n.id));
  const orphan = work.edges.some((e) => !ids.has(e.from) || !ids.has(e.to));
  if (orphan) {
    reasons.push("CV_RELATIONS_ORPHAN_EDGE");
    return { variant: "list", reasonCodes: reasons };
  }
  if (work.preferListFallback) {
    reasons.push("CV_RELATIONS_PREFER_LIST");
    return { variant: "list", reasonCodes: reasons };
  }
  // F2 — structural topology before claiming directed layout.
  if (work.layoutHint || edges > 0) {
    const topo = validateRelationsTopology(
      work.layoutHint ? work : { ...work, layoutHint: "dependencies" },
    );
    reasons.push(...topo.reasonCodes);
    if (!topo.ok || topo.mode === "list") {
      reasons.push("CV_RELATIONS_TOPOLOGY_LIST_FALLBACK");
      return { variant: "list", reasonCodes: reasons };
    }
  }
  // ELK product path (Morris GO): allow denser graphs for directed families.
  // Envelope for list fallback remains for extreme cases / narrow Travail.
  const elkFamily =
    work.layoutHint === "dependencies" ||
    work.layoutHint === "decisionTree" ||
    work.layoutHint === "parallelProcess";
  const dense = elkFamily ? nodes > 18 || edges > 28 : nodes > 10 || edges > 14;
  const narrow = widthPx != null && widthPx < 420;
  const longLabels = work.nodes.some((n) => (n.label?.length ?? 0) > 120);
  if (dense || (narrow && !elkFamily) || longLabels) {
    reasons.push(
      dense
        ? "CV_RELATIONS_DENSE_LIST"
        : narrow
          ? "CV_RELATIONS_NARROW_LIST"
          : "CV_RELATIONS_LONG_LABEL_LIST",
    );
    return { variant: "list", reasonCodes: reasons };
  }
  if (work.layoutHint || edges > 0) {
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
    case "relations": {
      const { block: normalized } = normalizeRelationsLayoutHint(block);
      if (normalized.layoutHint === "decisionTree") return "decisionPaths";
      if (normalized.layoutHint === "parallelProcess") return "parallelProcess";
      return "dependencies";
    }
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
 * Merge structured fallback with textAlternative.
 * Contract A2: textAlternative is complementary canon when not fully redundant.
 * Never decide by prefix-80 heuristic (silent suffix loss).
 * Full inclusion → skip; otherwise append entire alternative (overflow stays explicit upstream).
 */
export function mergeTextAlternative(body: string, textAlternative: string | undefined): string {
  const alt = (textAlternative ?? "").trim();
  const core = body.trim();
  if (!alt) return core;
  if (!core) return alt;
  if (core.includes(alt)) return core;
  return `${core}\n${alt}`;
}

/** Human labels for epistemic node kinds — never expose wire enum to Pilote. */
function humanNodeKind(kind: string | undefined): string | undefined {
  switch (kind) {
    case "fact":
      return "fait";
    case "hypothesis":
      return "hypothèse";
    case "unknown":
      return "indéterminé";
    case "cause":
      return "cause";
    case "finding":
      return "constat";
    case "observation":
      return "observation";
    default:
      return undefined;
  }
}

function humanRole(role: string | undefined): string | undefined {
  switch (role) {
    case "information":
      return "information";
    case "observation":
      return "observation";
    case "fact":
      return "fait";
    case "hypothesis":
      return "hypothèse";
    case "risk":
      return "risque";
    case "recommendation":
      return "recommandation";
    case "decision":
      return "décision";
    case "dependency":
      return "dépendance";
    case "step":
      return "étape";
    case "source":
      return "source";
    default:
      return undefined;
  }
}

function humanTone(tone: string | undefined): string | undefined {
  switch (tone) {
    case "priority":
      return "priorité";
    case "finding":
      return "constat";
    case "risk":
      return "risque";
    case "watch":
      return "vigilance";
    case "observation":
      return "observation";
    case "hypothesis":
      return "hypothèse";
    default:
      return undefined;
  }
}

function humanLayoutHint(hint: string | undefined): string | undefined {
  switch (hint) {
    case "dependencies":
      return "Dépendances";
    case "decisionTree":
      return "Arbre conditionnel";
    case "parallelProcess":
      return "Processus parallèle";
    default:
      return undefined;
  }
}

/**
 * Structured surface rendered by graphic variants — excludes textAlternative.
 * Used by C1 fallback merge and C2 visible complement detection.
 */
export function structuredBlockSurface(block: VisualBlock): string {
  if (block.kind === "text") {
    return block.markdown;
  }
  if (block.kind === "comparison") {
    const parts: string[] = [block.title];
    if (block.lead) parts.push(block.lead);
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
    if (block.editorialNote) parts.push(block.editorialNote);
    if (block.provenance?.length) {
      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
    }
    return parts.join("\n");
  }
  if (block.kind === "sequence") {
    const parts: string[] = [block.title];
    if (block.headlineAccent) parts.push(block.headlineAccent);
    if (block.lead) parts.push(block.lead);
    const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
    block.steps.forEach((s, i) => {
      let line = `${i + 1}. ${s.title}`;
      const role = humanRole(s.role);
      if (role) line += ` (${role})`;
      if (s.detail) line += ` — ${s.detail}`;
      if (s.dependsOn?.length) {
        line += ` (dépend de: ${s.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")})`;
      }
      if (s.dateLabel) line += ` [${s.dateLabel}]`;
      parts.push(line);
    });
    if (block.timeline) {
      parts.push(
        `Chronologie fictive ${block.timeline.weeks} semaines — ${block.timeline.tracks
          .map((t) => `${t.label} S${t.startWeek}–S${t.endWeek}`)
          .join("; ")}`,
      );
    }
    if (block.closingNote) parts.push(block.closingNote);
    return parts.join("\n");
  }
  if (block.kind === "relations") {
    const parts: string[] = [block.title];
    const layout = humanLayoutHint(block.layoutHint);
    if (layout) parts.push(layout);
    const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));
    for (const n of block.nodes) {
      let line = n.label;
      const kind = humanNodeKind(n.kind);
      if (kind) line += ` (${kind})`;
      if (n.laneId) line += ` — voie « ${n.laneId} »`;
      if (n.detail) line += ` — ${n.detail}`;
      parts.push(line);
    }
    for (const e of block.edges) {
      const from = titleById.get(e.from) ?? e.from;
      const to = titleById.get(e.to) ?? e.to;
      const rel = e.relation ?? "flow";
      // Keep wire direction from→to; natural French, no wire codes.
      let sense =
        rel === "condition_true"
          ? `Si oui (${from}) → ${to}`
          : rel === "condition_false"
            ? `Si non (${from}) → ${to}`
            : rel === "sync"
              ? `${from} synchronise vers ${to}`
              : rel === "depends_on"
                ? `${from} → ${to} (dépendance)`
                : `${from} → ${to}`;
      if (e.label) sense += ` (${e.label})`;
      parts.push(sense);
    }
    if (block.provenance?.length) {
      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
    }
    return parts.join("\n");
  }
  if (block.kind === "synthesis") {
    const parts: string[] = [block.title];
    if (block.headlineAccent) parts.push(block.headlineAccent);
    if (block.lead) parts.push(block.lead);
    if (block.indicators?.length) {
      for (const ind of block.indicators) {
        parts.push(`${ind.value} — ${ind.label}`);
      }
    }
    if (block.strategyCards?.length) {
      for (const c of block.strategyCards) {
        parts.push(`${c.eyebrow} ${c.title}: ${c.summary}`);
        if (c.positive) parts.push(c.positive);
        if (c.counterpart) parts.push(c.counterpart);
      }
    }
    if (block.checklist?.length) {
      for (const c of block.checklist) {
        parts.push(`${c.label}: ${c.detail}`);
      }
    }
    for (const it of block.items) {
      let line = it.detail ? `${it.label}: ${it.detail}` : it.label;
      const tone = humanTone(it.tone);
      if (tone) line += ` (${tone})`;
      const role = humanRole(it.role);
      if (role) line += ` — ${role}`;
      parts.push(line);
    }
    if (block.orientation) parts.push(block.orientation);
    return parts.join("\n");
  }
  return "";
}

/**
 * Exhaustive human-readable fallback from validated block fields (C1).
 * Never truncates. Never exposes wire codes (relation=, layoutHint, enums bruts).
 */
export function buildExhaustiveBlockFallback(block: VisualBlock): string {
  if (block.kind === "text") {
    return block.markdown;
  }
  if (block.kind === "choices" || block.kind === "references") {
    return "";
  }
  return mergeTextAlternative(structuredBlockSurface(block), block.textAlternative);
}

/**
 * Presentation-only normalize for C2 identity checks.
 * Collapses whitespace; never strips negations, digits, units, conditionals, or truth qualifiers.
 */
export function normalizePresentationText(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

/**
 * Exact identity after non-destructive presentation normalize, or exact substring inclusion
 * of the full chunk in the surface. Never uses lexical/token overlap percentages.
 */
function exactlyCoveredBySurface(surface: string, chunk: string): boolean {
  const c = chunk.trim();
  if (!c) return true;
  if (surface.includes(c)) return true;
  const nSurface = normalizePresentationText(surface);
  const nChunk = normalizePresentationText(c);
  if (!nChunk) return true;
  if (nSurface === nChunk) return true;
  if (nSurface.includes(nChunk)) return true;
  return false;
}

/**
 * C2 — complementary substance from textAlternative not covered by structured graphic fields.
 *
 * Conservative / fail-open on uncertainty:
 * - Deduplicate only on exact identity (structured surface inclusion or presentation-normalize equality).
 * - Never treat shared vocabulary as semantic equivalence (no 70% token overlap).
 * - Prefer showing a complement over silent loss of negation, condition, number, or status.
 * Visible editorial complement must be consultable by the Pilote (not sr-only alone).
 */
export function visibleTextAlternativeComplement(block: VisualBlock): string {
  if (block.kind === "text" || block.kind === "choices" || block.kind === "references") {
    return "";
  }
  const alt = (block.textAlternative ?? "").trim();
  if (!alt) return "";
  const surface = structuredBlockSurface(block).trim();
  if (!surface) return alt;
  if (exactlyCoveredBySurface(surface, alt)) return "";

  const lineChunks = alt
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lineChunks.length > 1) {
    const uncoveredLines = lineChunks.filter((line) => !exactlyCoveredBySurface(surface, line));
    if (uncoveredLines.length === 0) return "";
    return uncoveredLines.join("\n");
  }

  const sentences = alt
    .split(/(?<=[.!?…])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (sentences.length > 1) {
    const uncovered = sentences.filter((s) => !exactlyCoveredBySurface(surface, s));
    if (uncovered.length === 0) return "";
    // Prefer keeping any non-exact sentence rather than dropping a determining restriction.
    return uncovered.join(" ");
  }

  // Uncertain / non-identical → keep full alternative (fail-open on substance).
  return alt;
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

  // Strategy A — single semantic authority: sections own substance (C2).
  // Graphic compositions substitute the derived body to avoid dual prose+visual redundancy.
  // Exhaustive fallback remains inside each block on render failure.
  if (composition.contentAuthority === "canonical_sections") {
    if (!projectionSubstanceRenderComplete(composition)) {
      fallbackReasons.push("CV_BODY_SUBSTANCE_INCOMPLETE");
      return "markdown_only";
    }
    if (!hasGraphicBlocks(composition)) {
      fallbackReasons.push("CV_BODY_CANONICAL_NARRATIVE_SUBSTITUTE");
      return "substitute";
    }
    fallbackReasons.push("CV_BODY_CANONICAL_GRAPHIC_SUBSTITUTE");
    return "substitute";
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
  capacityNotes.push("CV_SCHEMA_READ_E05_PROJECTION_V1_CANONICAL_V1");
  capacityNotes.push("CV_SCHEMA_WRITE_CANONICAL_V1_ONLY");

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
      const normalized = normalizeRelationsLayoutHint(block);
      const work = normalized.block;
      const fam = familyFor(work);
      const sel = selectRelationsVariant(work, width);
      admitted.push({
        block: work,
        family: fam,
        variant: sel.variant,
        reasonCodes: [...normalized.reasonCodes, ...sel.reasonCodes],
      });
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
