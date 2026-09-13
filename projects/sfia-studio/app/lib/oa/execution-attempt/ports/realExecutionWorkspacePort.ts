/**
 * RealExecutionWorkspacePort — OA-owned isolated worktree preparation (M4 R2)
 * + D-GCEC-CONT-01 prior-Attempt resume/attach/verify (pre-commit window).
 *
 * Server-side roots only; callers supply attemptId + contract-bound baseHeadSha.
 * Never accepts a free client cwd / workspace path.
 */

export type PrepareWorkspaceRepositoryBinding = {
  readonly identity: string;
  readonly remoteUrl: string;
  readonly defaultBranch: string;
  readonly pathRoot?: string;
};

export type PrepareWorkspaceRequest = {
  readonly attemptId: string;
  /** Full 40-hex Git SHA from ExecutionContract.inputs.baseHeadSha. */
  readonly baseHeadSha: string;
  /** Explicit Project repository binding — never ambient sfia-workspace. */
  readonly repositoryBinding?: PrepareWorkspaceRepositoryBinding;
  /** Server-resolved absolute path to the local managed clone. */
  readonly managedRepoRoot?: string;
};

export type PrepareWorkspaceResult = {
  readonly workspacePath: string;
  readonly verifiedHeadSha: string;
};

/** Verified file fact from VERIFIED Artifact Evidence — not a free path grant. */
export type ResumeVerifiedFileFact = {
  readonly path: string;
  /** Canonical digest `sha256:<hex>` from Evidence. */
  readonly digest: string;
};

/**
 * D-GCEC-CONT-01 — resume prior Attempt worktree.
 * Path is ALWAYS derived server-side from execRoot + priorAttemptId.
 * Never includes a free workspacePath / cwd.
 */
export type ResumeVerifiedWorkspaceRequest = {
  readonly currentAttemptId: string;
  readonly priorAttemptId: string;
  /** Expected Git HEAD of the mutable pre-commit worktree (usually EC baseHeadSha). */
  readonly expectedHeadSha: string;
  readonly expectedVerifiedFiles: readonly ResumeVerifiedFileFact[];
  readonly repositoryBinding?: PrepareWorkspaceRepositoryBinding;
  readonly managedRepoRoot?: string;
};

export type ResumeVerifiedWorkspaceResult = {
  readonly workspacePath: string;
  readonly verifiedHeadSha: string;
  readonly priorAttemptId: string;
};

export interface RealExecutionWorkspacePort {
  prepareWorkspace(
    request: PrepareWorkspaceRequest,
  ): Promise<PrepareWorkspaceResult>;

  /**
   * D-GCEC-CONT-01 — attach/verify an existing prior-Attempt worktree.
   * MUST NOT create a new worktree, checkout, reset, copy, or mutate files.
   */
  resumeVerifiedWorkspace(
    request: ResumeVerifiedWorkspaceRequest,
  ): Promise<ResumeVerifiedWorkspaceResult>;
}
