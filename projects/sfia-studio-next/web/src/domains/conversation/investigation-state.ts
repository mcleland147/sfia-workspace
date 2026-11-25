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

/**
 * Canonical identity key for coverage — full path (not basename).
 * `git-file:arepo:path/to/file.ts@sha` → `path/to/file.ts`
 */
export function canonicalSourcePathKey(ref: string): string {
  const raw = (ref || "").trim();
  if (!raw) return "";
  const stripSha = (p: string) => p.replace(/@[0-9a-f]+$/i, "");
  // Prefer split over non-greedy regex so short test SHAs still strip.
  if (/^git-file:/i.test(raw)) {
    const parts = raw.split(":");
    // git-file : owner/repo : path[@sha]
    if (parts.length >= 3) {
      const pathPart = parts.slice(2).join(":");
      return stripSha(pathPart).replace(/\\/g, "/").toLowerCase();
    }
  }
  if (/^git-commit:/i.test(raw)) return raw.toLowerCase();
  return stripSha(raw).replace(/\\/g, "/").toLowerCase();
}

/** Cheap consolidation key — reformulations of the same finding collapse. */
export function normalizeConclusionKey(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
}

export function upsertConclusion(list: string[], line: string): string[] {
  const key = normalizeConclusionKey(line);
  if (!key || key.length < 12) return list;
  const exists = list.some((c) => {
    const k = normalizeConclusionKey(c);
    if (!k) return false;
    if (k === key) return true;
    // Near-duplicate: one contains the other with high overlap.
    const shorter = k.length <= key.length ? k : key;
    const longer = k.length > key.length ? k : key;
    return shorter.length >= 40 && longer.includes(shorter);
  });
  if (exists) return list;
  return [...list, line];
}

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
  /**
   * RB-30 — durable métier conclusions / recommendations extracted from
   * structured qualification (answered questions, explicit findings).
   * Never raw private chain-of-thought. Provenance stays in sources/questions.
   */
  conclusions?: string[];
  sufficiency:
    | "SUFFICIENT"
    | "INSUFFICIENT"
    | "BLOCKED_BY_UNKNOWN_RESTRICTION"
    | "BUDGET_EXHAUSTED"
    | "UNKNOWN";
  contractReady: boolean;
  contractReadyBlockedReason?: string | null;
  /** C17 — dedicated technical instruction (≠ conversational reply). */
  productionInstruction?: string | null;
  /** C17 — acceptance criteria distinct from remainingWork. */
  acceptanceCriteria?: string[];
  /** C17 — filiation to exact cognitive work / revision. */
  cognitiveWorkId?: string | null;
  cognitiveRevision?: number | null;
  /**
   * C23 — server-registered public WEB topics for the turn (ref → exact query).
   * Provenance must be established server-side before Nora can use them.
   */
  registeredPublicTopics?: Record<string, string>;
  /** Exact public queries explicitly authorized for this turn. */
  authorizedExactWebQueries?: string[];
  /** Public facts already registered for composition. */
  registeredPublicFacts?: string[];
  /**
   * B2 — when a fixed perimeter is established (listed paths / EXHAUSTIVE mode),
   * total expected sources in that perimeter. Null until inventoried.
   */
  inventoryTotal?: number | null;
  /**
   * Distinct perimeter keys with content fully read (CONSULTED|VERIFIED only).
   * PARTIAL and DENIED are tracked separately — not counted as full reads.
   */
  inventoryExamined?: number | null;
  /** Stable full-path keys of the declared perimeter (never basename-only). */
  inventoryKeys?: string[] | null;
  /** Keys resolved as DENIED (access terminal — not content analysis). */
  inventoryDenied?: number | null;
  /** Keys still only PARTIAL within the perimeter. */
  inventoryPartial?: number | null;
  /** Anti-loop: consecutive no-progress segments across invocations. */
  stagnantSegments?: number | null;
  /** Semantic investigation mode from structured qualification. */
  investigationMode?: "TARGETED" | "EXHAUSTIVE" | "OPEN" | null;
};

export function createEmptyInvestigation(intent: string): InvestigationState {
  return {
    intentSummary: intent.trim(),
    desiredOutcome: "",
    constraints: [],
    risks: [],
    // C14: never derive profileHint from message length.
    profileHint: "analyse",
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
 * C15 — positive sufficiency for contract READY.
 * Absence of open questions / contradictions on an empty or UNKNOWN state
 * must NEVER imply SUFFICIENT / contractReady.
 */
export function evaluateContractReadiness(state: InvestigationState): InvestigationState {
  // C17: BUDGET_EXHAUSTED is not a sticky poison across re-evaluation.
  // Only an explicit global envelope decision (conductor) may re-assert it after
  // checking resources; a technical SEGMENT_INVOCATION_LIMIT must not block READY forever.
  if (state.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION") {
    return {
      ...state,
      contractReady: false,
      contractReadyBlockedReason: "Restriction déterminante inconnue ou découverte tardive",
      sufficiency: "BLOCKED_BY_UNKNOWN_RESTRICTION",
    };
  }

  const intentOk = Boolean(state.intentSummary?.trim());
  const outcomeOk = Boolean(state.desiredOutcome?.trim());
  const consulted = state.sources.filter(
    (s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED",
  );
  const determinantOpen = state.questions.filter(
    (q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED",
  );
  const hasDeterminantQuestions = state.questions.some((q) => q.importance === "DETERMINANT");
  // C16: ANSWERED without exploitable answer is not positive sufficiency.
  const answeredHollow = state.questions.filter(
    (q) =>
      q.importance === "DETERMINANT" &&
      q.status === "ANSWERED" &&
      !(q.answerSummary && q.answerSummary.trim()),
  );
  // Determinant / material source degradation reopens READY even if questions stay ANSWERED.
  const determinantDegraded = state.sources.some((s) => {
    if (s.coverage === "STALE" || s.coverage === "DENIED" || s.coverage === "CONTRADICTORY") {
      return true;
    }
    if (s.coverage !== "PARTIAL" && s.coverage !== "UNKNOWN") return false;
    const linked = state.questions.some(
      (q) =>
        q.importance === "DETERMINANT" &&
        (q.sourceRefs ?? []).includes(s.ref),
    );
    // Unlinked PARTIAL/UNKNOWN on the only consulted path still blocks when no VERIFIED remains.
    return linked || consulted.length === 0;
  });
  const hasContradiction = state.contradictions.length > 0;

  const fail = (reason: string, sufficiency: InvestigationState["sufficiency"] = "INSUFFICIENT") => ({
    ...state,
    contractReady: false as const,
    contractReadyBlockedReason: reason,
    sufficiency,
  });

  if (!intentOk) return fail("Intention non établie", "UNKNOWN");
  if (!outcomeOk) return fail("Résultat attendu non spécifié", "INSUFFICIENT");

  // C18: instruction + criteria text alone is NOT positive sufficiency for READY.
  // Do not invent determinant questions; when present they must be answered with substance.
  // Consulted/verified sources remain the default positive basis.
  if (consulted.length === 0) {
    return fail(
      "Aucune source CONSULTED/VERIFIED — base positive insuffisante pour READY",
      "INSUFFICIENT",
    );
  }
  if (hasDeterminantQuestions) {
    if (determinantOpen.length > 0) {
      return fail(
        `Questions déterminantes ouvertes: ${determinantOpen.map((q) => q.id).join(", ")}`,
      );
    }
    if (answeredHollow.length > 0) {
      return fail(
        `Réponses déterminantes non étayées: ${answeredHollow.map((q) => q.id).join(", ")}`,
      );
    }
  }
  if (determinantDegraded) {
    return fail(
      "Source déterminante dégradée (STALE/DENIED/UNKNOWN/PARTIAL/CONTRADICTORY) — requalification requise",
    );
  }
  if (hasContradiction) {
    return fail("Contradictions non résolues entre sources");
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
