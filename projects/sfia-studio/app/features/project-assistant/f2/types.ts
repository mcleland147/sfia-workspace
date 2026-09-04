/**
 * F2 Qualification + Proposal + Gate — process-local DTOs.
 * Recommendation ≠ Decision ≠ Execution.
 */

import type { Mw3ContradictionCandidateSignal } from "@/lib/nora-cognitive-runtime/deriveMw3Assessment";

export type IntentClass =
  | "informative"
  | "actionable"
  | "ambiguous"
  | "execution_request";

export type F2ProposalStatus =
  | "PROPOSED"
  | "DECISION_REQUIRED"
  | "APPROVED"
  | "APPROVED_WITH_RESERVES"
  | "REFUSED"
  | "AMENDMENT_REQUIRED"
  | "STALE"
  | "NEEDS_CLARIFICATION"
  | "BLOCKED_CRITICAL_JUSTIFICATION"
  | "READY_NO_GATE";

export type F2DecisionKind = "GO" | "GO_WITH_RESERVES" | "NO_GO" | "AMEND";

export type F2QualificationSignals = {
  structuralChange: boolean;
  securityImpact: boolean;
  architectureImpact: boolean;
  dataImpact: boolean;
  irreversible: boolean;
  lowRiskBounded: boolean;
};

export type F2ContextSnapshot = {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  /** Post-mutation cycle linkage when present (M2). */
  activeCycleInstanceId?: string | null;
  ckcResolutionRef?: string | null;
};

export type CkcSemanticProvenance = {
  readonly ckcId: string;
  readonly cycleTypeId: string;
  readonly doctrinePackageId: string;
  readonly packageVersion: string;
  readonly contentDigest: string;
  readonly doctrineStatus: "product-studio-native";
};

export type QualificationDto = {
  cycleTypeId: string;
  cycleLabel: string;
  recommendedProfile: string;
  rationale: string;
  criticalSignalsPresent: boolean;
  requiresJustificationForCritical: boolean;
  capitalizationViaCycleTypeId: boolean;
  isMorrisDecision: false;
  catalogVersion: string;
  catalogHash: string;
  detailedStatus: string;
  disclosures: string[];
  signals: F2QualificationSignals;
  recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE";
  /** Durable CKC binding projection (no raw CKC dimensions). */
  ckcResolutionRef?: string;
  executionAuthority?: false;
  /** W1 bounded seam — attributable product-package CKC guidance (Recommendation only). */
  ckcSemanticProvenance?: CkcSemanticProvenance;
  /** W1 bounded seam — Nora/provider cognitive output attributable to resolved CKC. */
  ckcCognitiveRecommendation?: string;
  /** Set after durable CycleInstance create (M2). */
  cycleInstanceId?: string;
  cycleStatus?: string;
};

export type ProposalDto = {
  proposalId: string;
  status: F2ProposalStatus;
  rephrasedRequest: string;
  objective: string;
  cycleTypeId: string;
  recommendedProfile: string;
  rationale: string;
  scope: string;
  outOfScope: string[];
  activatedBlocks: string[];
  expectedOutcome: string;
  sources: string[];
  risks: string[];
  reservations: string[];
  stopConditions: string[];
  morrisGateRequired: boolean;
  nextPossibleStep: string;
  contextSnapshot: F2ContextSnapshot;
  processLocalNotice: string;
  executionForbidden: true;
  noExecutingStatus: true;
  /** Explicit F2 denial — never an agent binding. */
  agentBinding: "NOT_AVAILABLE";
  criticalJustification?: string | null;
};

export type DecisionDto = {
  decisionId: string;
  proposalId: string;
  kind: F2DecisionKind;
  statusLabel: "DÉCISION PRISE";
  humanDecisionStatus: string;
  scope: string;
  reservesText: string | null;
  capturedAt: string;
  readyForNextGatedStep: boolean;
  executionPerformed: false;
};

/**
 * INTERNAL semantic CWP assessment from analyzeIntent (CORR-MW2-REAL-01).
 * Server-side only — not Truth C / Evidence / Profile / authority / client DTO.
 * F2QualificationSignals ≠ this object.
 */
export type SemanticCognitiveWorkloadLevel =
  | "low"
  | "medium"
  | "high"
  | "unknown";

export type SemanticCognitiveWorkloadAssessment = {
  ambiguity: SemanticCognitiveWorkloadLevel;
  reasoningDepth: SemanticCognitiveWorkloadLevel;
  sourceBreadth: SemanticCognitiveWorkloadLevel;
  toolDependency: SemanticCognitiveWorkloadLevel;
  contradictionRisk: SemanticCognitiveWorkloadLevel;
  verificationNeed: SemanticCognitiveWorkloadLevel;
};

export type IntentAnalysisDto = {
  intentClass: IntentClass;
  candidateCycleTypeId: string | null;
  signals: F2QualificationSignals | null;
  /**
   * INTERNAL CWP semantic assessment (or null).
   * Never serialized on ProjectAssistantSendResult.
   */
  cognitiveWorkload: SemanticCognitiveWorkloadAssessment | null;
  /**
   * INTERNAL untrusted contradiction candidate from structured cognition.
   * Never Evidence; never a client-authored STOP.
   */
  contradictionCandidate?: Mw3ContradictionCandidateSignal | null;
  /**
   * INTERNAL MW5 challenge-response assessment (CORR-MW5-02).
   * Never Truth C / Evidence / HumanDecision / authority.
   * missing|unknown|insufficient ⇒ challenge not satisfied (fail-closed).
   */
  challengeResponseAssessment?:
    | "sufficient"
    | "insufficient"
    | "unknown"
    | null;
  objective: string | null;
  scope: string | null;
  rephrasedRequest: string | null;
  outOfScope: string[];
  risks: string[];
  reservations: string[];
  stopConditions: string[];
  activatedBlocks: string[];
  expectedOutcome: string | null;
  criticalJustification: string | null;
  requestedOperation: string | null;
  parseOk: boolean;
};

export type F2TurnKind =
  | "f1_informative"
  | "f2_clarification"
  | "f2_proposal"
  | "f2_blocked";

export type ProviderTrustDto = {
  presentation: "test_provider" | "openai_live" | "unconfirmed";
  model: string | null;
  mode: "fixture" | "live" | "unavailable" | "unconfirmed";
};
