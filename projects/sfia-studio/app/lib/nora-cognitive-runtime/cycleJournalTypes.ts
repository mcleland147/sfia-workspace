/**
 * CYCLE JOURNAL — types only.
 * Projection sémantique cycle-aware. NEVER Truth C / HumanDecision / Evidence / Recommendation authority.
 */
export type CycleJournalEntryStatus = "active" | "archived" | "merged" | "split";

export type CycleJournalMutationOp =
  | "CREATE"
  | "UPDATE"
  | "MERGE"
  | "SPLIT"
  | "ARCHIVE";

/** Durable Pilote-facing turn ref — survives Memory B compaction. */
export type PilotTranscriptTurnRef = {
  readonly turnId: string;
  readonly role: "user" | "assistant";
  readonly seq: number;
  readonly createdAt: string;
  readonly content: string;
  readonly logicalTurnId: string | null;
  readonly cycleInstanceId: string | null;
};

export type CycleJournalEntry = {
  readonly journalEntryId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string;
  /** Stable Pilot-facing topic number within the cycle (1-based). Never renumbered. */
  readonly topicOrdinal: number;
  readonly title: string;
  readonly currentSummary: string;
  /** Settled navigable points for this subject (projection only). */
  readonly stabilizedPoints: readonly string[];
  /** Still-open navigable points for this subject (projection only). */
  readonly openPoints: readonly string[];
  readonly status: CycleJournalEntryStatus;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly sourceTurnRefs: readonly string[];
  /** Parent entry when this entry was produced by SPLIT or is a MERGE result. */
  readonly lineageParentIds: readonly string[];
  /** When MERGE/ARCHIVE/SPLIT supersedes this entry. */
  readonly supersededById: string | null;
  readonly lastLogicalTurnId: string | null;
};

/** Same-turn structured delta from Nora (validated; no prose parse). */
export type NoraJournalDeltaOperation = {
  readonly op: CycleJournalMutationOp;
  readonly targetEntryId: string | null;
  readonly title: string | null;
  readonly currentSummary: string | null;
  /** Optional — null/omit keeps or defaults empty; UPDATE replaces when provided. */
  readonly stabilizedPoints?: readonly string[] | null;
  readonly openPoints?: readonly string[] | null;
  /** Additional source turn ids to attach (server also binds current turn). */
  readonly sourceTurnRefs: readonly string[];
  /** MERGE: ids absorbed into target; SPLIT: sibling titles optional via title. */
  readonly relatedEntryIds: readonly string[];
};

export type NoraJournalDelta = {
  readonly operations: readonly NoraJournalDeltaOperation[];
};

export type CycleJournalCompactProjection = {
  readonly cycleInstanceId: string;
  readonly currentTopicEntryId: string | null;
  readonly entries: readonly {
    readonly journalEntryId: string;
    readonly topicOrdinal: number;
    readonly title: string;
    readonly currentSummary: string;
    readonly stabilizedPoints: readonly string[];
    readonly openPoints: readonly string[];
    readonly status: CycleJournalEntryStatus;
    readonly sourceTurnCount: number;
    readonly updatedAt: string;
    readonly isCurrentTopic: boolean;
  }[];
};
