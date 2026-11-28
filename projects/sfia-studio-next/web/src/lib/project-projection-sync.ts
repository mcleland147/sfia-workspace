/**
 * Lot 2 — apply owner projections without a second métier store.
 * A failed re-read keeps the last snapshot of the same project.
 * Journal provenance is not a replacement for the project knowledge shape.
 */

export type ActivityFreshness = "loading" | "ready" | "stale" | "unavailable";

export type ActivitySnapshot = {
  openSubjects: { count: number; examples: Array<{ id: string; title: string }> };
  applicableDecisions: { count: number; examples: Array<{ id: string; statement: string }> };
  documentsInProgress: { count: number; examples: Array<{ id: string; title: string }> };
  openPointsCount: number;
} | null;

export function activityAfterProjectRead(input: {
  previous: ActivitySnapshot;
  incoming: ActivitySnapshot | undefined;
  httpOk: boolean;
}): { activity: ActivitySnapshot; freshness: ActivityFreshness } {
  if (!input.httpOk) {
    return {
      activity: input.previous,
      freshness: input.previous ? "stale" : "unavailable",
    };
  }
  return { activity: input.incoming ?? null, freshness: "ready" };
}

/** Journal GET carries richer provenance. It must not replace project knowledge. */
export function journalMayReplaceProjectKnowledge(): false {
  return false;
}

export type PrepMark = "pending" | "running" | "done" | "incomplete" | "failed";

export type ContextLoadState = "loading" | "ready" | "failed";

/**
 * Four preparation markers. Context load and trajectory qualification are
 * independent: one finishing does not mark the other done.
 */
export function preparationContinuityMarks(input: {
  projectCreated: boolean;
  context: ContextLoadState;
  qualificationStatus: string | null;
}): { project: PrepMark; context: PrepMark; cycles: PrepMark; reply: PrepMark } {
  const q = input.qualificationStatus;
  const proposed = q === "PROPOSED";
  const clarification = q === "CLARIFICATION";
  const failed = q === "FAILED";
  const terminal = proposed || clarification || failed;
  return {
    project: input.projectCreated ? "done" : "pending",
    context:
      input.context === "ready" ? "done" : input.context === "failed" ? "failed" : "running",
    cycles: !input.projectCreated
      ? "pending"
      : failed
        ? "failed"
        : clarification
          ? "incomplete"
          : proposed
            ? "done"
            : "running",
    reply: !terminal ? "pending" : failed ? "failed" : clarification ? "incomplete" : "done",
  };
}
