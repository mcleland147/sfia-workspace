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
  path: string;
  requestedRef: string;
  resolvedSha: string;
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
