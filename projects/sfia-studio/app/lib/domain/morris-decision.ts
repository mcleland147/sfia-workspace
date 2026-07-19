import type { Recommendation } from "./recommendation";

/**
 * Morris gate decision — human authority, distinct from copilot Recommendation.
 */
export type MorrisVerdict = "GO" | "CORRIGER" | "STOP";

export interface MorrisDecision {
  readonly kind: "morris-decision";
  id: string;
  gateId: string;
  title: string;
  description: string;
  verdict: MorrisVerdict | null;
  scope: string;
  revocable: boolean;
  confirmed: boolean;
  simulated: true;
}

export function isMorrisDecision(value: unknown): value is MorrisDecision {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as MorrisDecision).kind === "morris-decision"
  );
}

/** Type-level invariant: Recommendation and MorrisDecision are disjoint. */
export type AdvisoryOrDecision = Recommendation | MorrisDecision;

export function assertDistinctTypes(
  rec: Recommendation,
  decision: MorrisDecision,
): void {
  const kinds = new Set([rec.kind, decision.kind]);
  if (kinds.size !== 2) {
    throw new Error("Recommendation and MorrisDecision must remain distinct types");
  }
}
