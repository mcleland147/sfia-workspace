import { qualifyObservedFacts, type PrCurrentState } from "@/domains/proofs/qualify";

export type ProjectPublicationListItem = {
  publicationRefId: string;
  documentId: string;
  revisionId: string;
  repositoryId: string;
  repositoryFullName: string;
  targetPath: string;
  targetBranch: string;
  publicationBranch: string | null;
  baseSha: string | null;
  headSha: string | null;
  prNumber: number | null;
  /** Persisted D8 status (PR_OPEN, PR_CLOSED, MERGED, COMMITTED, …). */
  publicationStatus: string;
  effectAttemptId: string | null;
  effectKind: string | null;
  effectStatus: string | null;
  prCurrentState: PrCurrentState | null;
  /** Historical PR_OPEN fact only — not live openness. */
  pullRequestCreatedObserved: boolean;
  /** MERGE fact observed — never inferred from PR_OPEN or open PR alone. */
  mergeObserved: boolean;
  commitObserved: boolean;
  /**
   * @deprecated Prefer `prStatusKind`. True only means Studio historically recorded PR_OPEN —
   * never "currently open on GitHub".
   */
  openPullRequest: boolean;
  /**
   * Honest PR/merge status for UI (E08-S04).
   * Without a dated live provider observation, OPEN stays HISTORICAL / UNKNOWN — never LIVE.
   */
  prStatusKind:
    | "MERGE_OBSERVED"
    | "PR_OPEN_HISTORICAL"
    | "PR_CREATED_HISTORICAL"
    | "PR_CLOSED_HISTORICAL"
    | "COMMIT_OBSERVED"
    | "UNKNOWN";
  /** Short Pilot-facing label — never claims live GitHub openness from history alone. */
  prStatusLabel: string;
  updatedAt: string;
  limits: string[];
};

type RefDetailJson = {
  publicationBranch?: string;
  prCurrentState?: PrCurrentState;
};

export type PublicationRefProjectionInput = {
  id: string;
  documentId: string;
  revisionId: string;
  repositoryId: string;
  targetPath: string;
  targetBranch: string;
  baseSha: string | null;
  headSha: string | null;
  prNumber: number | null;
  status: string;
  effectAttemptId: string | null;
  detailJson: string;
  updatedAt: Date;
};

export type EffectAttemptProjectionInput = {
  kind: string;
  status: string;
} | null;

export function projectPublicationFromRow(input: {
  ref: PublicationRefProjectionInput;
  repositoryFullName: string;
  attempt: EffectAttemptProjectionInput;
  facts: Array<{ factKind: string; sha: string; prNumber?: number | null }>;
}): ProjectPublicationListItem {
  const detail = JSON.parse(input.ref.detailJson || "{}") as RefDetailJson;
  const prCurrentState = detail.prCurrentState ?? null;
  const qualification = qualifyObservedFacts(input.facts, {
    prCurrentState: prCurrentState ?? undefined,
  });
  const mergeObserved = qualification.mergeObserved;
  const historicallyRecordedOpen =
    input.ref.status === "PR_OPEN" && !mergeObserved && input.ref.prNumber != null;
  // Legacy field kept for callers — semantics = historical open record, not live.
  const openPullRequest = historicallyRecordedOpen;

  let prStatusKind: ProjectPublicationListItem["prStatusKind"] = "UNKNOWN";
  let prStatusLabel = "Statut Git non actualisé";
  if (mergeObserved) {
    prStatusKind = "MERGE_OBSERVED";
    prStatusLabel = "Fusion vérifiée (fait D8)";
  } else if (input.ref.status === "PR_CLOSED" || prCurrentState === "CLOSED") {
    prStatusKind = "PR_CLOSED_HISTORICAL";
    prStatusLabel = "PR fermée (historique Studio — non live GitHub)";
  } else if (historicallyRecordedOpen) {
    prStatusKind = "PR_OPEN_HISTORICAL";
    prStatusLabel = "PR enregistrée ouverte (historique — non actualisée)";
  } else if (qualification.prCreatedHistorically) {
    prStatusKind = "PR_CREATED_HISTORICAL";
    prStatusLabel = "PR créée (historique — ouverture live non affirmée)";
  } else if (qualification.commitObserved) {
    prStatusKind = "COMMIT_OBSERVED";
    prStatusLabel = "Commit observé (fait D8)";
  }

  const limits = [...qualification.limits];
  if (historicallyRecordedOpen) {
    limits.push("PR_OPENNESS_NOT_LIVE");
  }

  return {
    publicationRefId: input.ref.id,
    documentId: input.ref.documentId,
    revisionId: input.ref.revisionId,
    repositoryId: input.ref.repositoryId,
    repositoryFullName: input.repositoryFullName,
    targetPath: input.ref.targetPath,
    targetBranch: input.ref.targetBranch,
    publicationBranch: detail.publicationBranch ?? null,
    baseSha: input.ref.baseSha,
    headSha: input.ref.headSha,
    prNumber: input.ref.prNumber,
    publicationStatus: input.ref.status,
    effectAttemptId: input.ref.effectAttemptId,
    effectKind: input.attempt?.kind ?? null,
    effectStatus: input.attempt?.status ?? null,
    prCurrentState,
    pullRequestCreatedObserved: qualification.prCreatedHistorically,
    mergeObserved,
    commitObserved: qualification.commitObserved,
    openPullRequest,
    prStatusKind,
    prStatusLabel,
    updatedAt: input.ref.updatedAt.toISOString(),
    limits,
  };
}