/**
 * Increment E — MorrisFinalDecision + CycleSummary (distinct from GPT candidate).
 */

export type MorrisFinalAction =
  | "CLOSE_SLICE"
  | "CORRECT"
  | "RELAUNCH_WITH_NEW_GO"
  | "ABANDON";

export interface MorrisFinalDecision {
  schemaVersion: "morris-final-decision-1.0.0";
  decisionId: string;
  verdictId: string;
  requestId: string;
  correlationId: string;
  decidedBy: "Morris";
  decidedAt: string;
  action: MorrisFinalAction;
  rationale?: string;
  acceptedReservations: string[];
  unresolvedReservations: string[];
  consequences: string[];
  requiresNewGo: boolean;
  closureAuthorized: boolean;
  candidateClaimsAccepted: false;
  mvpClaim: false;
  productionReadyClaim: false;
}

/** Historical photograph of the GPT candidate at analysis time (immutable reference). */
export interface CycleSummaryCandidateSnapshot {
  status: string;
  candidateOnly: true;
  closureAuthorized: false;
  morrisDecisionRequired: true;
  notProven: string[];
  gaps: string[];
  risks: string[];
  reservations: string[];
}

export interface CycleSummaryFinalState {
  finalStatus: "CLOSED_WITH_RESERVATIONS";
  morrisDecisionRecorded: true;
  closureAuthorized: true;
  action: "CLOSE_SLICE";
  awaitingMorrisDecision: false;
}

export interface CycleSummary {
  schemaVersion: "cycle-summary-1.0.0";
  summaryId: string;
  /** Present when this summary was regenerated technically from a prior summaryId. */
  previousSummaryId?: string;
  requestId: string;
  correlationId: string;
  verdictId: string;
  decisionId: string;
  finalStatus: "CLOSED_WITH_RESERVATIONS" | string;
  morrisDecisionRecorded: boolean;
  closureAuthorized: boolean;
  markdownArtifact: string;
  executionEvidence: string;
  /** Current post-decision proven facts. */
  proven: string[];
  /** Current open not-proven items (excludes items resolved by CLOSE_SLICE). */
  notProven: string[];
  /** Current open gaps (excludes pre-decision Morris-awaiting gaps). */
  gaps: string[];
  /** Current open risks (excludes pre-decision closure-awaiting risks). */
  risks: string[];
  /** Current open reservations (= unresolvedReservations). */
  reservations: string[];
  unresolvedReservations: string[];
  acceptedReservations: string[];
  resolvedByMorrisDecision: string[];
  candidateSnapshot: CycleSummaryCandidateSnapshot;
  historicalAnalysisContext: string[];
  finalState: CycleSummaryFinalState;
  qualificationFinOps: { calls: number; note: string };
  analysisFinOps: { calls: number; note: string };
  timestamps: { decidedAt: string; summarizedAt: string };
  traceability: {
    analysisRequestId: string;
    executionId: string;
    contractId: string;
    packHash: string;
    increments?: string[];
    trajectory?: Record<string, string>;
  };
  scope: "current-vertical-slice-only";
  mvpClaim: false;
  productionReadyClaim: false;
}
