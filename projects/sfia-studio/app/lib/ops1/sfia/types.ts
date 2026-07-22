/**
 * SFIA Canonical Context Engine — domain types.
 * Structured runtime representations; doctrine remains in Git sources.
 */
import type { SfiaCanonicalSourceRole } from "./canonicalPaths";

export type SfiaProfile =
  | "Light"
  | "Standard"
  | "Critical"
  | "Capitalization";

export type SfiaFileOperation = "READ" | "CREATE" | "MODIFY" | "DELETE";

export type SfiaProposalKind =
  | "no_action"
  | "clarification_required"
  | "action_proposed"
  | "decision_required"
  | "blocked";

export type SfiaCompilationStatus =
  | "COMPILED"
  | "CLARIFICATION_REQUIRED"
  | "POLICY_DENIED"
  | "GATE_REQUIRED"
  | "PATH_DENIED"
  | "CONTEXT_STALE"
  | "INVALID_PROPOSAL"
  | "BLOCKED";

export interface SfiaSourceDocumentRef {
  path: string;
  digest: string;
  blobSha: string | null;
  role: SfiaCanonicalSourceRole | "project_doc" | "handoff";
  sizeBytes: number;
  readAt: string;
  summaryExcerpt: string;
}

export interface SfiaCanonicalContext {
  contextId: string;
  generatedAt: string;
  repository: string;
  branch: string;
  headSha: string;
  baseSha: string;
  methodBaseline: string;
  sourceDocuments: SfiaSourceDocumentRef[];
  project: string;
  currentCycle: string;
  candidateCycle: string;
  profile: SfiaProfile;
  profileJustification: string;
  activeBlocks: string[];
  inactiveBlocks: string[];
  validatedDecisions: string[];
  candidateDecisions: string[];
  openGates: string[];
  closedGates: string[];
  allowedOperations: string[];
  forbiddenOperations: string[];
  allowedPaths: string[];
  protectedPaths: string[];
  stopConditions: string[];
  reviewPackRequirement: "light" | "full" | "required";
  reviewHandoffRequirement: "required_publish_in_cycle";
  cursorTemplatePath: string;
  expectedVerdicts: string[];
  unresolvedQuestions: string[];
  warnings: string[];
  /** Permanent core facts injected every GPT turn (Level 1). */
  permanentCore: string[];
}

export interface SfiaProposedFile {
  path: string;
  operation: SfiaFileOperation;
  exactContent?: string;
}

export type SfiaActionProposal =
  | {
      kind: "no_action";
      proposalId: string;
      sessionId: string;
      contextId: string;
      userVisibleSummary: string;
      rationale: string;
    }
  | {
      kind: "clarification_required";
      proposalId: string;
      sessionId: string;
      contextId: string;
      userVisibleSummary: string;
      unresolvedQuestions: string[];
    }
  | {
      kind: "decision_required";
      proposalId: string;
      sessionId: string;
      contextId: string;
      userVisibleSummary: string;
      requiredGates: string[];
    }
  | {
      kind: "blocked";
      proposalId: string;
      sessionId: string;
      contextId: string;
      userVisibleSummary: string;
      reason: string;
    }
  | {
      kind: "action_proposed";
      proposalId: string;
      sessionId: string;
      contextId: string;
      objective: string;
      rationale: string;
      cycle: string;
      profile: SfiaProfile;
      profileJustification: string;
      blocks: string[];
      project: string;
      operations: string[];
      files: SfiaProposedFile[];
      expectedEffects: string[];
      excludedEffects: string[];
      requiredGates: string[];
      stopConditions: string[];
      cursorRequired: boolean;
      reviewPackLevel: "light" | "full";
      reviewHandoffRequired: boolean;
      userVisibleSummary: string;
      exactRequestedContent?: string;
      confidence: number;
      unresolvedQuestions: string[];
    };

export interface SfiaCompilationResult {
  status: SfiaCompilationStatus;
  contextId: string;
  proposalId: string;
  sessionId: string;
  reasons: string[];
  deniedOperations: string[];
  deniedPaths: string[];
  actionCandidateId?: string;
  title?: string;
  objective?: string;
  scopeSummary?: string;
  riskSummary?: string;
  files?: SfiaProposedFile[];
  exactContent?: string;
}

export interface SfiaCursorPromptInstantiation {
  templatePath: string;
  templateDigest: string;
  templateBlobSha: string | null;
  contextId: string;
  actionId: string;
  promptText: string;
  instantiatedAt: string;
}
