/**
 * RealExecutionWorkspacePort — OA-owned isolated worktree preparation (M4 R2).
 *
 * Server-side roots only; callers supply attemptId + contract-bound baseHeadSha.
 * Never accepts a free client cwd.
 */

export type PrepareWorkspaceRequest = {
  readonly attemptId: string;
  /** Full 40-hex Git SHA from ExecutionContract.inputs.baseHeadSha. */
  readonly baseHeadSha: string;
};

export type PrepareWorkspaceResult = {
  readonly workspacePath: string;
  readonly verifiedHeadSha: string;
};

export interface RealExecutionWorkspacePort {
  prepareWorkspace(
    request: PrepareWorkspaceRequest,
  ): Promise<PrepareWorkspaceResult>;
}
