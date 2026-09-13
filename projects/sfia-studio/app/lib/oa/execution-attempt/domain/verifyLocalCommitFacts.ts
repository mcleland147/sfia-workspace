/**
 * Independent local-commit verification facts (Studio READ-ONLY).
 * Cursor remains the mutation executor — Studio never runs git commit.
 * CR-GCEC-GC-02 / GC-04 hardenings.
 */
export type LocalCommitArtifactCheck = {
  readonly path: string;
  readonly expectedDigest: string;
  readonly actualDigest: string;
};

export type LocalCommitVerificationInput = {
  readonly expectedParentSha: string;
  readonly observedHeadSha: string;
  readonly observedParentSha: string;
  readonly exactPaths: readonly string[];
  readonly observedChangedPaths: readonly string[];
  readonly expectedCommitMessage: string;
  readonly observedCommitMessage: string;
  readonly artifactChecks: readonly LocalCommitArtifactCheck[];
  readonly worktreeDirty: boolean;
  /**
   * Commit count from expectedParent (exclusive) to HEAD (inclusive).
   * Must be exactly 1. Derived by local observer — not a free caller flag.
   */
  readonly commitsFromExpectedParent: number;
};

export type LocalCommitVerificationResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly reason: string };

function normalizeSha(sha: string): string {
  return sha.trim().toLowerCase();
}

function normalizePath(p: string): string {
  return p.replace(/\\/g, "/").replace(/^\.\//, "").trim();
}

function sortedUnique(paths: readonly string[]): string[] {
  return [...new Set(paths.map(normalizePath).filter(Boolean))].sort();
}

/**
 * Pure verification of a local commit observation against the bound commit spec.
 */
export function verifyLocalCommitFacts(
  input: LocalCommitVerificationInput,
): LocalCommitVerificationResult {
  const expectedParent = normalizeSha(input.expectedParentSha);
  const head = normalizeSha(input.observedHeadSha);
  const parent = normalizeSha(input.observedParentSha);

  if (!/^[0-9a-f]{40}$/.test(expectedParent)) {
    return { ok: false, reason: "expected_parent_sha_invalid" };
  }
  if (!/^[0-9a-f]{40}$/.test(head)) {
    return { ok: false, reason: "observed_head_sha_invalid" };
  }
  if (!/^[0-9a-f]{40}$/.test(parent)) {
    return { ok: false, reason: "observed_parent_sha_invalid" };
  }
  if (head === expectedParent) {
    return { ok: false, reason: "head_unchanged" };
  }
  if (parent !== expectedParent) {
    return { ok: false, reason: "parent_mismatch" };
  }
  if (input.commitsFromExpectedParent !== 1) {
    return { ok: false, reason: "unexpected_extra_commits" };
  }

  const expectedPaths = sortedUnique(input.exactPaths);
  const observedPaths = sortedUnique(input.observedChangedPaths);
  if (expectedPaths.length === 0) {
    return { ok: false, reason: "exact_paths_empty" };
  }
  if (expectedPaths.join("\0") !== observedPaths.join("\0")) {
    const missing = expectedPaths.filter((p) => !observedPaths.includes(p));
    const extra = observedPaths.filter((p) => !expectedPaths.includes(p));
    if (missing.length > 0) {
      return { ok: false, reason: "changed_paths_missing" };
    }
    if (extra.length > 0) {
      return { ok: false, reason: "changed_paths_extra" };
    }
    return { ok: false, reason: "changed_paths_mismatch" };
  }

  // Exact subject match (already shell-validated on the spec side).
  if (input.observedCommitMessage !== input.expectedCommitMessage) {
    return { ok: false, reason: "commit_message_mismatch" };
  }

  if (input.worktreeDirty) {
    return { ok: false, reason: "worktree_dirty_after_commit" };
  }

  // Artifact coverage must be exactly exactPaths (1:1).
  if (input.artifactChecks.length === 0) {
    return { ok: false, reason: "artifact_checks_missing" };
  }
  const checkPaths = sortedUnique(input.artifactChecks.map((c) => c.path));
  if (checkPaths.join("\0") !== expectedPaths.join("\0")) {
    if (checkPaths.length < expectedPaths.length) {
      return { ok: false, reason: "artifact_coverage_incomplete" };
    }
    if (checkPaths.length > expectedPaths.length) {
      return { ok: false, reason: "artifact_coverage_extra" };
    }
    return { ok: false, reason: "artifact_coverage_mismatch" };
  }

  for (const check of input.artifactChecks) {
    const expected = check.expectedDigest.trim().toLowerCase();
    const actual = check.actualDigest.trim().toLowerCase();
    if (!/^sha256:[a-f0-9]{64}$/.test(expected) || !/^sha256:[a-f0-9]{64}$/.test(actual)) {
      return { ok: false, reason: "artifact_digest_invalid" };
    }
    if (expected !== actual) {
      return { ok: false, reason: "artifact_digest_mismatch" };
    }
  }

  return { ok: true };
}

/**
 * CR-GCEC-GC-02 — authorizedEffects MUST be exactly one unique effect: git.commit.
 */
export function isBoundedGitCommitOnlySlice(
  authorizedEffects: readonly string[] | undefined | null,
): boolean {
  if (!authorizedEffects || authorizedEffects.length === 0) return false;
  const unique = new Set(authorizedEffects);
  return unique.size === 1 && unique.has("git.commit");
}
