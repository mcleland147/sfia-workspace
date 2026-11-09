export type IntegrationStatus =
  | "DISCONNECTED"
  | "CONNECTED"
  | "PENDING_APPROVAL"
  | "ACCESS_REMOVED"
  | "REVOKED"
  | "EXPIRED"
  | "REQUIRES_REAUTH";

export type RepositoryStatus = "ACTIVE" | "REMOVED";

export type ProjectGitLinkStatus = "ATTACHED" | "DETACHED";

export type RepoRef = {
  owner: string;
  name: string;
  fullName: string;
  defaultBranch?: string | null;
};

export type GitFileProvenance = {
  owner: string;
  /** Repository fullName when known (owner/name). */
  fullName?: string;
  path: string;
  requestedRef: string;
  /**
   * @deprecated Prefer blobSha. Historically often held Contents API blob sha
   * (REAL) or a commit-like value (SCRIPTED legacy). Kept additive for callers.
   */
  resolvedSha: string;
  /** Git blob object SHA for the file content (Contents API `sha`). */
  blobSha: string;
  /**
   * Commit SHA actually used for the read when verified.
   * Null when the commit could not be established honestly.
   */
  commitSha: string | null;
  /** True only when commitSha was resolved via ref→commit (or verified pin). */
  commitShaVerified: boolean;
  /**
   * Permalink to path at commitSha when verified; never built from blobSha alone.
   */
  permalink: string | null;
  readAt: string;
  permissions: string[];
  freshnessLimitAt: string;
  coverage: "COMPLETE" | "PARTIAL" | "DENIED";
};

export type GitSourceSummary = {
  linkId: string;
  repositoryId: string;
  fullName: string;
  defaultBranch: string | null;
  attachedAt: string;
};
