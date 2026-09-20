/**
 * PJ-REPROOF-01/02 — Recommendation ↔ OptionSet integrity + Pilote projection.
 *
 * Canonical decision semantics remain OptionSet / recommendedOptionRef /
 * selectedOptionRef. Provider prose may enrich WHY, never WHAT the Options are.
 */

import type { TrajectoryOptionDto } from "./types";

export const RECOMMENDATION_OPTION_REF_MISMATCH =
  "RECOMMENDATION_OPTION_REF_MISMATCH" as const;

export type RecommendedOptionIntegrityResult =
  | { readonly ok: true; readonly option: TrajectoryOptionDto }
  | {
      readonly ok: false;
      readonly code: typeof RECOMMENDATION_OPTION_REF_MISMATCH;
      readonly message: string;
    };

/** A1 — recommendedOptionRef must resolve to exactly one presented option. */
export function assertRecommendedOptionInPresentedSet(input: {
  readonly options: readonly TrajectoryOptionDto[];
  readonly recommendedOptionRef: string;
}): RecommendedOptionIntegrityResult {
  const matches = input.options.filter(
    (o) => o.optionRef === input.recommendedOptionRef,
  );
  if (matches.length === 1) {
    return { ok: true, option: matches[0]! };
  }
  return {
    ok: false,
    code: RECOMMENDATION_OPTION_REF_MISMATCH,
    message:
      matches.length === 0
        ? `recommendedOptionRef « ${input.recommendedOptionRef} » n'appartient pas à l'OptionSet présenté — surface HumanDecision refusée.`
        : `recommendedOptionRef « ${input.recommendedOptionRef} » apparaît ${matches.length} fois — OptionSet incohérent.`,
  };
}

/**
 * Detect provider prose that invents a competing numbered option pack
 * (O1/O2/O3, "Option 1", etc.). Not a sole integrity mechanism — used to
 * fall back to deterministic base rationale for Pilote primary copy.
 */
export function looksLikeInventedOptionPack(text: string): boolean {
  const raw = text ?? "";
  if (!raw.trim()) return false;
  const numbered =
    (raw.match(/(?:^|\n)\s*O\s*[1-9]\b/gim) ?? []).length +
    (raw.match(/(?:^|\n)\s*Option\s*[1-9]\b/gim) ?? []).length +
    (raw.match(/\bO[1-9]\s*[:.)\-–—]/g) ?? []).length +
    (raw.match(/\bO[1-9]\s+[A-ZÀ-Ü]/g) ?? []).length;
  if (numbered >= 2) return true;
  // Two or more "Alternative N" / "Choix N" style lines.
  const alt =
    (raw.match(/(?:^|\n)\s*(?:Alternative|Choix|Piste)\s*[1-9]/gim) ?? [])
      .length;
  return alt >= 2;
}

/** Technical impact / jargon lines — secondary disclosure only. */
export function isTechnicalOptionImpact(line: string): boolean {
  const t = line.trim();
  if (!t) return false;
  return (
    /\bAttempt\b/i.test(t) ||
    /\bEvidence\b/i.test(t) ||
    /\bReviewBundle\b/i.test(t) ||
    /\bContractResult\b/i.test(t) ||
    /\bProductOutcome\b/i.test(t) ||
    /\bproductOutcome\s*:/i.test(t) ||
    /\bstopReason\s*:/i.test(t) ||
    /\brealProcessInvoked\b/i.test(t) ||
    /\bW3C\s*:/i.test(t) ||
    /\bopt:[a-z0-9:_-]+/i.test(t) ||
    /\bepi:[a-z0-9:_-]+/i.test(t) ||
    /\batt:[a-z0-9:_-]+/i.test(t) ||
    /\bevi:[a-z0-9:_-]+/i.test(t) ||
    /\boutcome:\s*(FAIL|STOP|UNCLAIMED|PASS)\b/i.test(t)
  );
}

export function partitionOptionImpactsForPilote(
  impacts: readonly string[],
): {
  readonly primary: readonly string[];
  readonly technical: readonly string[];
} {
  const primary: string[] = [];
  const technical: string[] = [];
  for (const line of impacts) {
    if (isTechnicalOptionImpact(line)) technical.push(line);
    else primary.push(line);
  }
  return { primary, technical };
}

/**
 * Scrub primary Recommendation prose: Markdown markers, code ticks, bare
 * internal refs/IDs. Deterministic; no HTML rendering.
 */
export function scrubPiloteRecommendationProse(text: string): string {
  let out = (text ?? "").replace(/\r\n/g, "\n");
  out = out.replace(/\\n/g, "\n").replace(/\\t/g, "\t");
  out = out.replace(/\*\*([^*]+)\*\*/g, "$1");
  out = out.replace(/__([^_]+)__/g, "$1");
  out = out.replace(/(^|\n)#{1,6}\s+/g, "$1");
  out = out.replace(/`([^`]+)`/g, "$1");
  out = out.replace(/\|.+\|/g, " "); // crude table remnant neutralization
  out = out.replace(/\bopt:[a-z0-9:_-]+\b/gi, "");
  out = out.replace(/\bepi:[a-z0-9:_-]+\b/gi, "");
  out = out.replace(/\batt:[a-z0-9:_-]+\b/gi, "");
  out = out.replace(/\bevi:[a-z0-9:_-]+\b/gi, "");
  out = out.replace(/\brb:[a-z0-9:_-]+\b/gi, "");
  out = out.replace(/\bsha256:[a-f0-9]{16,}\b/gi, "");
  out = out.replace(/\bContractResult\b/g, "résultat du contrat");
  out = out.replace(/\bProductOutcome\b/g, "résultat produit");
  out = out.replace(/\bexpectedOutputs\b/g, "résultats attendus");
  out = out.replace(/\bstopReason\b/g, "motif d'arrêt");
  out = out.replace(/\bHumanDecision\b/g, "décision Pilote");
  out = out.replace(
    /\bRecommendation\s*≠\s*HumanDecision\b/gi,
    "cette recommandation n'est pas une décision",
  );
  out = out.replace(/[^\S\n]{2,}/g, " ");
  out = out.replace(/ *\n */g, "\n").trim();
  return out;
}

/**
 * Project durable Recommendation copy for Pilote.
 *
 * CR-PJ-01 — ONE canonical decision truth:
 *   PresentedOptionSet.options + recommendedOptionRef (+ later selectedOptionRef)
 *
 * Primary `rationale` is ALWAYS grounded in the deterministic canonical base
 * (+ safe CKC guidance). Provider/Nora free prose NEVER becomes the primary
 * description of WHAT Studio recommends — even when it does not look like an
 * O1/O2/O3 pack. Safe cognitive prose may be retained as secondary analysis.
 */
export function projectPiloteRecommendationRationale(input: {
  readonly baseRationale: string;
  readonly cognitiveRecommendation?: string | null;
  readonly guidanceText?: string | null;
}): {
  readonly rationale: string;
  readonly cognitiveAnalysis: string | null;
  readonly usedCognitive: boolean;
  readonly fellBackToBase: boolean;
} {
  const base = scrubPiloteRecommendationProse(input.baseRationale);
  const cognitiveRaw = (input.cognitiveRecommendation ?? "").trim();
  const cognitive = scrubPiloteRecommendationProse(cognitiveRaw);
  const guidance = scrubPiloteRecommendationProse(input.guidanceText ?? "");

  let rationale: string;
  if (guidance && /^[a-z0-9_]+$/i.test(base.trim())) {
    rationale = guidance;
  } else {
    rationale = guidance ? `${base} ${guidance}`.trim() : base;
  }

  const invented =
    Boolean(cognitive) &&
    (looksLikeInventedOptionPack(cognitiveRaw) ||
      looksLikeInventedOptionPack(cognitive));

  // Invented competing option packs are dropped entirely.
  // Non-invented cognitive prose may enrich WHY as secondary analysis only.
  if (!cognitive || invented) {
    return {
      rationale,
      cognitiveAnalysis: null,
      usedCognitive: false,
      fellBackToBase: Boolean(cognitive),
    };
  }

  // Secondary enrichment only — never overrides primary WHAT.
  return {
    rationale,
    cognitiveAnalysis: cognitive,
    usedCognitive: true,
    fellBackToBase: false,
  };
}

/** Constrained cognition ask — explain canonical recommended option only. */
export function buildConstrainedRecommendationCognitionAsk(input: {
  readonly recommendedOptionLabel: string;
  readonly recommendedOptionRef: string;
  readonly subjectLine: string;
}): string {
  return [
    input.subjectLine,
    "",
    `Option canonique recommandée (seule identité de décision): « ${input.recommendedOptionLabel} ».`,
    `Réf. technique (audit seulement, ne pas citer au Pilote): ${input.recommendedOptionRef}.`,
    "",
    "Mission:",
    "- Expliquer POURQUOI cette option canonique convient au contexte métier actuel.",
    "- Donner une conséquence / prochain pas attendu en langage Pilote.",
    "- Rappeler que la recommandation aide à décider et ne lance aucune action automatiquement.",
    "",
    "Interdictions strictes:",
    "- Ne pas inventer d'autres options (pas de O1/O2/O3, pas de liste Alternative 1/2/3).",
    "- Ne pas redéfinir le pack de décision — le OptionSet présenté est déjà scellé.",
    "- Ne pas contredire ni remplacer l'option canonique recommandée (même sans numérotation).",
    "- Pas de Markdown (pas de ##, **, tableaux, fences).",
    "- Pas d'identifiants internes (Attempt/Evidence/ReviewBundle/opt:/epi:) dans la prose Pilote.",
    "- Ne pas décider à la place du Pilote ; ne pas revendiquer d'autorité d'exécution.",
    "",
    "Réponds en français métier, 3 à 6 phrases maximum, texte brut uniquement.",
  ].join("\n");
}
