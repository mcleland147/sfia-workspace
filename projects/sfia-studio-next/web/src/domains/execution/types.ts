export type EffectKind = "GIT_PUBLICATION" | "GIT_MERGE" | "CURSOR_EXECUTION";

export type EffectAttemptStatus =
  | "PREPARED"
  | "AUTHORIZED"
  | "DISPATCHED"
  | "COMPLETED"
  | "AMBIGUOUS"
  | "CONFLICT"
  | "REQUIRES_REQUALIFICATION"
  | "FAILED";

/** Four engagements immediately readable by the Pilote (D01/D04). */
export type ContractEngagements = {
  willDo: string;
  willNotDo: string;
  expectedResult: string;
  pilotControl: string;
};

/** Six R2 D7 volets (D05). */
export type ContractVolets = {
  mission: string;
  perimeter: string;
  capabilitiesAuthority: string;
  stopConditions: string;
  proofsSources: string;
  integrity: string;
};

export type TechnicalContractBody = {
  title: string;
  engagements: ContractEngagements;
  volets: ContractVolets;
  /** Full technical instruction — never truncated for storage. */
  instructionText: string;
  risks: string[];
  exclusions: string[];
  acceptance: {
    criteria: string[];
    expectedProofs: string[];
  };
  executor: {
    kind: "CURSOR_SDK_LOCAL";
    capabilities: string[];
    permissionsNeeded: string[];
  };
  stopConditions: string[];
  reversibilityLimits: string[];
  gitScope?: {
    required: boolean;
    repositoryFullName?: string | null;
    baseRef?: string | null;
    workBranch?: string | null;
    baseSha?: string | null;
  } | null;
};

export type CursorExecutionPlan = {
  kind: "CURSOR_EXECUTION";
  contractId: string;
  contractKey: string;
  contractVersion: number;
  contractFingerprint: string;
  instructionFingerprint: string;
  workspaceCwd: string;
  effectProviderMode: "SCRIPTED" | "LIVE";
  gitScope?: TechnicalContractBody["gitScope"];
  mcpRequired: string[];
};

/**
 * LIVE projection fields stored in effect_attempts.resultJson (not a second engine).
 * Invariants: sendRequested ≠ runObserved; ack ≠ done; timeout ≠ no effect;
 * stopRequested ≠ stopped; cancel ≠ rollback; finished ≠ conforming.
 */
export type CursorLiveProjection = {
  sendRequestedAt?: string | null;
  ackReceivedAt?: string | null;
  runObservedAt?: string | null;
  agentId?: string | null;
  runId?: string | null;
  lastActivitySummary?: string | null;
  stopRequestedAt?: string | null;
  stopObservedAt?: string | null;
  terminalStatus?: "finished" | "error" | "cancelled" | "unknown" | null;
  reportStatus?:
    | "EXPECTED"
    | "RECEIVED"
    | "INCOMPLETE"
    | "MISSING"
    | "REJECTED"
    | "UNVERIFIED"
    | null;
  limits?: string[];
  claim?: unknown;
};

export type PublicationStep = "CREATE_BRANCH" | "PUBLISH_FILE" | "OPEN_PR";

export type DiffKind =
  | "CREATE"
  | "MODIFY"
  | "UNCHANGED"
  | "MISSING_BASE"
  | "INACCESSIBLE"
  | "FORBIDDEN"
  | "TIMEOUT"
  | "AMBIGUOUS_READ"
  | "REF_STALE";

export type InspectionDiff = {
  kind: DiffKind;
  basePath: string;
  baseSha: string | null;
  baseContent: string | null;
  proposedContent: string;
  unifiedDiff: string;
  inspectionFingerprint: string;
  /** Remote-read classification detail — never invent CREATE on FORBIDDEN/TIMEOUT. */
  remoteReadCode?: string | null;
};

export type PublicationPlan = {
  documentId: string;
  revisionId: string;
  preparationId: string;
  repositoryId: string;
  repositoryFullName: string;
  authorizationId: string;
  installationId: string;
  actorLogin: string | null;
  permissions: Record<string, string>;
  targetPath: string;
  targetBranch: string;
  publicationBranch: string;
  baseRef: string;
  baseSha: string | null;
  revisionFingerprint: string;
  contentMarkdown: string;
  inspection: InspectionDiff;
  steps: PublicationStep[];
  /**
   * Effect provider mode frozen at prepare (REAL|SCRIPTED).
   * Orthogonal to OAuth CONNECTED. Historical plans may omit → UNKNOWN provenance.
   */
  effectProviderMode?: "REAL" | "SCRIPTED";
};

/** Current remote PR state — distinct from historical creation fact. */
export type PrCurrentState = "OPEN" | "CLOSED" | "MERGED" | "UNKNOWN" | "ABSENT";

export type PublicationProgress = {
  branchCreated?: boolean;
  branchSha?: string;
  filePublished?: boolean;
  /** Git commit SHA at publication branch tip (not Contents blob SHA). */
  commitSha?: string | null;
  /** GitHub Contents API blob SHA when file bytes matched plan — diagnostic only. */
  contentBlobSha?: string | null;
  /** Historical: a PR number was observed as created for this attempt. */
  prCreated?: boolean;
  /**
   * Legacy alias — means "PR was observed created", NOT "currently OPEN".
   * Prefer prCreated + prCurrentState for new logic.
   */
  prOpened?: boolean;
  prNumber?: number | null;
  /** Live remote qualification — never invent OPEN from stale progress alone. */
  prCurrentState?: PrCurrentState;
  lastStep?: PublicationStep | "NONE";
};

export type MergePlan = {
  repositoryId: string;
  repositoryFullName: string;
  authorizationId: string;
  installationId: string;
  actorLogin: string | null;
  publicationAttemptId: string;
  publicationRefId: string;
  documentId: string;
  revisionId: string;
  targetPath: string;
  prNumber: number;
  expectedHeadSha: string;
  expectedBaseSha: string | null;
  expectedHeadRef: string;
  expectedBaseRef: string;
  publicationBranch: string;
  /**
   * Effect provider mode frozen at prepare (REAL|SCRIPTED).
   * Historical plans may omit → UNKNOWN provenance on reconcile (ML4-REC-01 parity).
   */
  effectProviderMode?: "REAL" | "SCRIPTED";
};
