/** D1-C3 — Existing context matching contracts (candidate, not sealed). */

export const CONTEXT_SNAPSHOT_SCHEMA_VERSION = "0.1.0-d1-c3" as const;
export const CONTEXT_MATCH_SCHEMA_VERSION = "0.1.0-d1-c3" as const;

export const CONTEXT_SOURCE_STATUSES = [
  "AVAILABLE",
  "EMPTY",
  "UNAVAILABLE",
  "ERROR",
] as const;
export type ContextSourceStatus = (typeof CONTEXT_SOURCE_STATUSES)[number];

export const CONTEXT_MATCH_RESULT_STATUSES = [
  "STRONG_MATCH",
  "MULTIPLE_MATCHES",
  "POSSIBLE_MATCH",
  "NO_MATCH",
  "CONTEXT_UNAVAILABLE",
  "NEED_CLARIFICATION",
] as const;
export type ContextMatchResultStatus =
  (typeof CONTEXT_MATCH_RESULT_STATUSES)[number];

export const CONTEXT_SCORE_BANDS = [
  "STRONG_MATCH",
  "POSSIBLE_MATCH",
  "WEAK_MATCH",
  "BELOW_THRESHOLD",
] as const;
export type ContextScoreBand = (typeof CONTEXT_SCORE_BANDS)[number];

export const CONTEXT_RECOMMENDED_ACTIONS = [
  "USE_EXISTING_PROJECT",
  "OPEN_CYCLE_IN_PROJECT",
  "RESUME_EXISTING_WORK",
  "CREATE_NEW_PROJECT",
  "ANALYZE_ONLY",
  "ASK_CLARIFICATION",
  "NO_ACTION",
] as const;
export type ContextRecommendedAction =
  (typeof CONTEXT_RECOMMENDED_ACTIONS)[number];

export const CONTEXT_ENTITY_TYPES = ["PROJECT", "CYCLE", "ACTION"] as const;
export type ContextEntityType = (typeof CONTEXT_ENTITY_TYPES)[number];

/** Candidate thresholds — not a global baseline. */
export const CONTEXT_MATCH_THRESHOLDS = {
  strong: 0.78,
  possible: 0.52,
  weak: 0.3,
  ambiguityGap: 0.1,
} as const;

export const CONTEXT_MATCH_LIMITS = {
  maxProjectsEvaluated: 50,
  maxCandidatesPerType: 5,
  maxNormalizedTextLength: 800,
  maxEvidenceItems: 6,
} as const;

export interface SnapshotProjectCandidate {
  projectId: string;
  name: string;
  objective: string;
  initialContextSummary: string | null;
  status: "DRAFT" | "ACTIVE";
  createdAt: string;
  updatedAt: string;
}

export interface ExistingContextSnapshot {
  schemaVersion: typeof CONTEXT_SNAPSHOT_SCHEMA_VERSION;
  snapshotId: string;
  generatedAt: string;
  projectSourceStatus: ContextSourceStatus;
  cycleSourceStatus: ContextSourceStatus;
  actionSourceStatus: ContextSourceStatus;
  projects: SnapshotProjectCandidate[];
  cycles: [];
  actions: [];
  sourceCounts: {
    projects: number;
    cycles: number;
    actions: number;
  };
  truncationApplied: boolean;
  sourceErrors: string[];
}

export interface ScoreBreakdown {
  exactName: number;
  nameSimilarity: number;
  objectiveOverlap: number;
  contextOverlap: number;
  explicitReference: number;
  activeStatus: number;
  recency: number;
  genericPenalty: number;
  finalScore: number;
}

export interface ContextEntityMatch {
  entityType: ContextEntityType;
  entityId: string;
  label: string;
  status: string;
  score: number;
  scoreBand: ContextScoreBand;
  rationale: string;
  evidence: string[];
  warnings: string[];
  recommendedAction: ContextRecommendedAction;
  scoreBreakdown: ScoreBreakdown;
}

export interface ContextMatchResult {
  schemaVersion: typeof CONTEXT_MATCH_SCHEMA_VERSION;
  matchId: string;
  proposalId: string;
  snapshotId: string;
  generatedAt: string;
  resultStatus: ContextMatchResultStatus;
  recommendedRouting: ContextRecommendedAction;
  projectMatches: ContextEntityMatch[];
  cycleMatches: [];
  actionMatches: [];
  ambiguity: boolean;
  noMatchReason: string | null;
  sourceWarnings: string[];
  requiresHumanConfirmation: boolean;
}

export interface ContextSelectionDraft {
  selectedEntityType: ContextEntityType | "NONE";
  selectedEntityId: string | null;
  selectedAt: string;
  selectionSource: "USER" | "RECOMMENDATION";
  userOverrodeRecommendation: boolean;
  requiresFinalConfirmation: true;
}

export interface MatchExistingContextInput {
  sessionLocalId: string;
  proposal: {
    proposalId: string;
    rawIntent: string;
    normalizedIntent: string;
    subject: string;
    proposedObjective: string;
    proposedOutcomeType: string;
  };
  /** Injected snapshot for tests / unavailable simulation. */
  snapshotOverride?: ExistingContextSnapshot;
  /** Test/E2E only — force project source UNAVAILABLE. */
  forceUnavailable?: boolean;
}
