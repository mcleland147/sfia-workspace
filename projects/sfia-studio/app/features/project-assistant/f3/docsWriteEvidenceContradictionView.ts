/**
 * Client-safe presentation heuristic for docs_write evidence-coherence rematerialize CTA.
 * Not the security boundary — server re-validates on rematerialization.
 *
 * Constants duplicated intentionally to keep this module free of Node/server barrels.
 */

const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply";
const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write";

const GIT_LIFECYCLE_EVIDENCE = new Set([
  "git:local_commit",
  "git:remote_push",
  "git:pull_request",
  "git:ci_status",
  "git:review_status",
  "git:merge",
  "git:post_merge_verification",
  "git:commit",
  "git:push",
]);

const GIT_FORBIDDING_CONSTRAINTS = new Set([
  "NO_COMMIT",
  "NO_GIT_REMOTE",
  "NO_PUSH",
  "NO_PR",
  "NO_MERGE",
]);

/**
 * True when a bounded docs_write EC forbids Git effects but still lists
 * Git lifecycle evidenceRequirements — Morris must rematerialize before Confirm.
 */
export function isDocsWriteEvidenceContradictionView(input: {
  action: string;
  target: string;
  constraints: readonly string[];
  evidenceRequirements: readonly string[];
}): boolean {
  if (input.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
  if (input.target !== M4_BOUNDED_DOCS_WRITE_TARGET) return false;
  const forbidsGit = input.constraints.some((c) =>
    GIT_FORBIDDING_CONSTRAINTS.has(c),
  );
  if (!forbidsGit) return false;
  return input.evidenceRequirements.some((r) => GIT_LIFECYCLE_EVIDENCE.has(r));
}
