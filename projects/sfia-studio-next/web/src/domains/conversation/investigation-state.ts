/**
 * Axe A — état d'investigation cognitif (conceptuel / runtime mémoire).
 * Pas une machine à états métier obligatoire ni un registre d'autorité D4.
 * Sert à qualifier intention, questions déterminantes, suffisance et reprise.
 */

export type SourceCoverage =
  | "DISCOVERED"
  | "CONSULTED"
  | "VERIFIED"
  | "PARTIAL"
  | "STALE"
  | "DENIED"
  | "CONTRADICTORY"
  | "UNKNOWN";

export type InvestigationSourceRef = {
  kind: "D4" | "HISTORY" | "GIT" | "WEB" | "DECISION" | "REPORT" | "OTHER";
  ref: string;
  title?: string;
  versionOrSha?: string | null;
  coverage: SourceCoverage;
  notes?: string;
};

export type DeterminingQuestion = {
  id: string;
  text: string;
  status: "OPEN" | "ANSWERED" | "BLOCKED" | "DEFERRED";
  importance: "DETERMINANT" | "USEFUL" | "OPTIONAL";
  answerSummary?: string;
  sourceRefs?: string[];
};

export type InvestigationState = {
  intentSummary: string;
  desiredOutcome: string;
  constraints: string[];
  risks: string[];
  profileHint: "simple" | "analyse" | "investigation";
  questions: DeterminingQuestion[];
  sources: InvestigationSourceRef[];
  contradictions: Array<{ a: string; b: string; detail: string }>;
  exclusions: string[];
  remainingWork: string[];
  sufficiency:
    | "SUFFICIENT"
    | "INSUFFICIENT"
    | "BLOCKED_BY_UNKNOWN_RESTRICTION"
    | "BUDGET_EXHAUSTED"
    | "UNKNOWN";
  contractReady: boolean;
  contractReadyBlockedReason?: string | null;
};

export function createEmptyInvestigation(intent: string): InvestigationState {
  return {
    intentSummary: intent.trim(),
    desiredOutcome: "",
    constraints: [],
    risks: [],
    profileHint: intent.trim().length < 80 ? "simple" : "analyse",
    questions: [],
    sources: [],
    contradictions: [],
    exclusions: [],
    remainingWork: [],
    sufficiency: "UNKNOWN",
    contractReady: false,
    contractReadyBlockedReason: "Investigation non évaluée",
  };
}

/**
 * Une restriction déterminante inconnue ou une source critique partielle
 * interdit le statut « contrat prêt ».
 */
export function evaluateContractReadiness(state: InvestigationState): InvestigationState {
  const determinantOpen = state.questions.filter(
    (q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED",
  );
  const criticalPartial = state.sources.some(
    (s) =>
      (s.coverage === "PARTIAL" ||
        s.coverage === "DENIED" ||
        s.coverage === "UNKNOWN" ||
        s.coverage === "STALE") &&
      state.questions.some(
        (q) =>
          q.importance === "DETERMINANT" &&
          q.status !== "ANSWERED" &&
          (q.sourceRefs ?? []).includes(s.ref),
      ),
  );
  const hasContradiction = state.contradictions.length > 0;
  const blockedRestriction = state.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION";

  if (blockedRestriction) {
    return {
      ...state,
      contractReady: false,
      contractReadyBlockedReason: "Restriction déterminante inconnue ou découverte tardive",
      sufficiency: "BLOCKED_BY_UNKNOWN_RESTRICTION",
    };
  }
  if (determinantOpen.length > 0) {
    return {
      ...state,
      contractReady: false,
      contractReadyBlockedReason: `Questions déterminantes ouvertes: ${determinantOpen
        .map((q) => q.id)
        .join(", ")}`,
      sufficiency: "INSUFFICIENT",
    };
  }
  if (criticalPartial) {
    return {
      ...state,
      contractReady: false,
      contractReadyBlockedReason: "Source critique partielle, refusée ou non vérifiable",
      sufficiency: "INSUFFICIENT",
    };
  }
  if (hasContradiction) {
    return {
      ...state,
      contractReady: false,
      contractReadyBlockedReason: "Contradictions non résolues entre sources",
      sufficiency: "INSUFFICIENT",
    };
  }
  return {
    ...state,
    contractReady: true,
    contractReadyBlockedReason: null,
    sufficiency: "SUFFICIENT",
  };
}

/** Lexical miss ≠ demonstrated absence. */
export function qualifySearchMiss(kind: "LEXICAL_MISS" | "DEMONSTRATED_ABSENCE"): SourceCoverage {
  return kind === "DEMONSTRATED_ABSENCE" ? "VERIFIED" : "UNKNOWN";
}

export function resumeInvestigation(
  durable: Partial<InvestigationState> | null | undefined,
  intent: string,
): InvestigationState {
  if (!durable) return createEmptyInvestigation(intent);
  const base = { ...createEmptyInvestigation(intent), ...durable };
  // Ne jamais inventer de lectures non confirmées.
  base.sources = (base.sources ?? []).filter((s) => s.ref && s.coverage);
  return evaluateContractReadiness(base);
}
