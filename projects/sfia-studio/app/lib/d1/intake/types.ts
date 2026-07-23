/** D1-C2 — RequestRoutingProposal candidate (not a sealed schema). */

export const REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION = "0.1.0-d1-c2" as const;

export const C2_OUTCOME_TYPES = [
  "CREATE_PROJECT_CANDIDATE",
  "OPEN_CYCLE_CANDIDATE",
  "ANALYZE_ONLY",
  "NEED_CLARIFICATION",
  "UNDETERMINED",
] as const;
export type C2OutcomeType = (typeof C2_OUTCOME_TYPES)[number];

export const C2_PROPOSAL_STATUSES = [
  "CLARIFICATION_REQUIRED",
  "PROPOSAL_READY",
  "ANALYSIS_ONLY",
  "UNDETERMINED",
] as const;
export type C2ProposalStatus = (typeof C2_PROPOSAL_STATUSES)[number];

export interface RequestRoutingAlternative {
  outcomeType: C2OutcomeType;
  label: string;
  rationale: string;
}

export interface RequestRoutingProposal {
  schemaVersion: typeof REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION;
  proposalId: string;
  rawIntent: string;
  normalizedIntent: string;
  subject: string;
  proposedObjective: string;
  proposedOutcomeType: C2OutcomeType;
  proposedCycleType: string | null;
  proposedProfile: string | null;
  proposedBlocks: string[];
  constraints: string[];
  assumptions: string[];
  missingInformation: string[];
  clarificationQuestion: string | null;
  alternatives: RequestRoutingAlternative[];
  /** 0–1 inclusive — never presented as absolute truth. */
  confidence: number;
  rationale: string;
  requiresHumanConfirmation: boolean;
  status: C2ProposalStatus;
  createdAt: string;
  /** Always null in C2 — matching deferred to C3. */
  proposedProjectId: null;
  /** Always null in C2 — matching deferred to C3. */
  proposedCycleId: null;
}

export interface IntakeClarificationTurn {
  role: "user" | "assistant";
  content: string;
}

export interface AnalyzeIntentInput {
  sessionLocalId: string;
  rawIntent: string;
  clarificationTurns?: IntakeClarificationTurn[];
}

export const D1_INTAKE_MAX_INTENT_LENGTH = 2000;
export const D1_INTAKE_MAX_CLARIFICATION_TURNS = 3;
export const D1_INTAKE_PROVIDER_TIMEOUT_MS = 60_000;
