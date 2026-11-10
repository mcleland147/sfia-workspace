export type ObservedFactInput = {
  factKind: string;
  sha: string;
  prNumber?: number | null;
  detailJson?: string;
};

export type PrCurrentState = "OPEN" | "CLOSED" | "MERGED" | "UNKNOWN" | "ABSENT";

export type QualificationResult = {
  /** Historical: a COMMIT fact was recorded. */
  commitObserved: boolean;
  /** Historical: a PR_OPEN fact was recorded (creation observed). */
  prCreatedHistorically: boolean;
  /**
   * @deprecated Prefer prCreatedHistorically — does NOT mean PR is currently open.
   * Kept for backward-compatible callers; equals prCreatedHistorically.
   */
  prOpen: boolean;
  /** Live remote state when known; UNKNOWN if not supplied. */
  prCurrentState: PrCurrentState;
  mergeObserved: boolean;
  testsPass: false;
  conformityProven: false;
  morrisAcceptance: false;
  adopted: false;
  limits: string[];
};

/**
 * Qualify observed Git facts without inventing live PR openness.
 * Historical PR_OPEN ≠ currently OPEN.
 */
export function qualifyObservedFacts(
  facts: ObservedFactInput[],
  opts?: { prCurrentState?: PrCurrentState },
): QualificationResult {
  const kinds = new Set(facts.map((f) => f.factKind));
  const prCreatedHistorically = kinds.has("PR_OPEN");
  const prCurrentState = opts?.prCurrentState ?? "UNKNOWN";
  const limits = [
    "Commit/PR observés ≠ tests conformes",
    "Merge observé ≠ acceptation Morris",
    "Aucune preuve ADOPTED/STABLE depuis Git seul",
    "Fait historique PR_OPEN ≠ état courant OPEN",
  ];
  if (prCreatedHistorically && prCurrentState === "CLOSED") {
    limits.push("PR créée historiquement puis CLOSED — merge interdit sans nouvelle inspection");
  }
  return {
    commitObserved: kinds.has("COMMIT"),
    prCreatedHistorically,
    prOpen: prCreatedHistorically,
    prCurrentState,
    mergeObserved: kinds.has("MERGE"),
    testsPass: false,
    conformityProven: false,
    morrisAcceptance: false,
    adopted: false,
    limits,
  };
}
