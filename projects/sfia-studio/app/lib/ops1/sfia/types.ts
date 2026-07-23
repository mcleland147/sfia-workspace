/**
 * SFIA types — context from platform; ActionCandidate/proposal stay OPS1-domain.
 */
export type {
  SfiaProfile,
  SfiaSourceDocumentRef,
  SfiaCanonicalContext,
  CanonicalContextRequest,
  CanonicalContextResult,
} from "@/lib/platform/sfia-context/types";

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

import type { SfiaProfile } from "@/lib/platform/sfia-context/types";

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
