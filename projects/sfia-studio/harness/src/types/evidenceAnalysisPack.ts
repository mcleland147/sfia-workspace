/**
 * Increment E — EvidenceAnalysisPack (sanitized, fail-closed completeness).
 * Built from CursorExecutionReport + review/test evidence projections.
 */

export const EVIDENCE_ANALYSIS_PACK_SCHEMA = "evidence-analysis-pack-1.0.0" as const;

export interface EvidenceAnalysisPack {
  schemaVersion: typeof EVIDENCE_ANALYSIS_PACK_SCHEMA;
  analysisRequestId: string;
  requestId: string;
  correlationId: string;
  qualificationId: string | null;
  executionId: string;
  contractId: string;
  contractHash: string;
  branch: string;
  head: string;
  generatedAt: string;
  executionStatus: string;
  filesCreated: string[];
  filesModified: string[];
  filesDeleted: string[];
  outOfAllowlistChanges: string[];
  remoteGitWrites: number;
  networkUsed: boolean;
  stopRequested: boolean;
  timeout: boolean;
  reportCompleteness: "complete" | "incomplete";
  reviewPackCompleteness: "complete" | "incomplete";
  tests: {
    harnessPassed: boolean;
    appPassed: boolean;
    e2ePassed: boolean;
    notes: string[];
  };
  securityChecks: {
    secretsScanPassed: boolean;
    notes: string[];
  };
  provenFacts: string[];
  reservations: string[];
  morrisDecisionsAlreadyRecorded: string[];
  sourceReferences: string[];
  sanitized: true;
  analysisAuthorized: boolean;
  closureAuthorized: false;
  /** Deterministic content hash of canonical pack body (excl. generatedAt). */
  packHash: string;
  cursorModeNote: string;
}

export interface EvidencePackBuildInput {
  analysisRequestId: string;
  report: {
    schemaVersion: string;
    executionId: string;
    requestId: string;
    correlationId: string;
    contractId: string;
    contractHash: string;
    expectedBranch?: string;
    actualBranch?: string;
    expectedHead?: string;
    actualHead?: string;
    status: string;
    filesCreated?: string[];
    filesModified?: string[];
    filesDeleted?: string[];
    outOfAllowlistChanges?: string[];
    remoteGitWrites?: number;
    networkUsed?: boolean;
    stopRequested?: boolean;
    timeout?: boolean;
    reservations?: string[];
    mode?: string;
    realCursorProcessInvoked?: boolean;
    s1ContractCursorMode?: string;
    analysisAuthorized?: boolean;
    morrisDecisionRequired?: boolean;
  };
  qualificationId?: string | null;
  reviewPackCompleteness?: "complete" | "incomplete";
  reviewPackHasModifiedContent?: boolean;
  tests?: EvidenceAnalysisPack["tests"];
  securityChecks?: EvidenceAnalysisPack["securityChecks"];
  provenFacts?: string[];
  sourceReferences?: string[];
  analysisAuthorized?: boolean;
  generatedAt?: string;
}

export interface EvidencePackValidationResult {
  ok: boolean;
  code?: string;
  missing: string[];
  message: string;
}
