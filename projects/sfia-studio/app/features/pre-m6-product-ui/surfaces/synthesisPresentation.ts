import type {
  ProductSynthesisProjection,
  SynthesisSections,
  SynthesisVerdictLabel,
} from "@/lib/oa/synthesis";

export type SynthesisSectionKey = keyof SynthesisSections;

/** Nine sections — P3 / Figma 164:3 contract (full labels). */
export const SYNTHESIS_SECTION_SPECS: readonly {
  readonly key: SynthesisSectionKey;
  readonly label: string;
  readonly testIdSuffix: string;
  readonly ordinal: string;
}[] = [
  { key: "summary", label: "Résumé", testIdSuffix: "summary", ordinal: "01" },
  {
    key: "planned",
    label: "Ce qui était prévu",
    testIdSuffix: "planned",
    ordinal: "02",
  },
  {
    key: "done",
    label: "Ce qui a été réalisé",
    testIdSuffix: "done",
    ordinal: "03",
  },
  {
    key: "evaluation",
    label: "Évaluation du résultat",
    testIdSuffix: "evaluation",
    ordinal: "04",
  },
  {
    key: "gaps",
    label: "Écarts, réserves et blocages",
    testIdSuffix: "gaps",
    ordinal: "05",
  },
  {
    key: "impact",
    label: "Impact sur le projet",
    testIdSuffix: "impact",
    ordinal: "06",
  },
  { key: "verdict", label: "Verdict", testIdSuffix: "verdict", ordinal: "07" },
  {
    key: "recommendation",
    label: "Recommandation / prochaine étape",
    testIdSuffix: "recommendation",
    ordinal: "08",
  },
  {
    key: "verified",
    label: "Éléments vérifiés",
    testIdSuffix: "verified",
    ordinal: "09",
  },
] as const;

export function presentSynthesisVerdictLabel(
  label: SynthesisVerdictLabel,
): string {
  switch (label) {
    case "atteint":
      return "Atteint";
    case "non_prouve":
      return "Non prouvé";
    case "echec":
      return "Échec";
    case "indetermine":
      return "Indéterminé";
    default:
      return label;
  }
}

export function presentSynthesisStatus(status: ProductSynthesisProjection["status"]): string {
  switch (status) {
    case "current":
      return "Courante";
    case "superseded":
      return "Remplacée";
    case "stale_source":
      return "Source obsolète";
    default:
      return status;
  }
}

export function synthesisSummaryExcerpt(
  synthesis: ProductSynthesisProjection,
  maxLen = 220,
): string {
  const text = synthesis.sections.summary.trim();
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen - 1).trim()}…`;
}

export function formatSynthesisGeneratedAt(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

/**
 * Product-truth count label for Éléments vérifiés (Figma 316:2 shape).
 * Bound to sourceBindings.evidenceIds — never hardcoded sample counts.
 */
export function formatVerifiedElementsCount(count: number): string {
  const n = Number.isFinite(count) && count > 0 ? Math.floor(count) : 0;
  return n <= 1 ? `${n} élément` : `${n} éléments`;
}

/** Compact day label for context-rail synthèse (Figma 46:2 « Aujourd'hui »). */
export function formatSynthesisDayLabel(iso: string, now = new Date()): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return formatSynthesisGeneratedAt(iso);
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);
  const startOfThat = new Date(d);
  startOfThat.setHours(0, 0, 0, 0);
  const dayDelta = Math.round(
    (startOfToday.getTime() - startOfThat.getTime()) / 86_400_000,
  );
  if (dayDelta === 0) return "Aujourd'hui";
  if (dayDelta === 1) return "Hier";
  return d.toLocaleDateString("fr-FR", { dateStyle: "medium" });
}
