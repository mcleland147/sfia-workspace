/**
 * SFIA Canonical Context — platform types (no ActionCandidate / OPS1 session).
 * Doctrine remains in Git sources.
 */
import type { SfiaCanonicalSourceRole } from "./canonicalPaths";

export type SfiaProfile =
  | "Light"
  | "Standard"
  | "Critical"
  | "Capitalization";

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

/** Request to resolve canonical context (domain-agnostic). */
export interface CanonicalContextRequest {
  workspaceRoot: string;
  correlationId: string;
  project?: string;
  candidateCycle?: string;
  profileHint?: SfiaProfile;
  validatedDecisions?: string[];
}

export type CanonicalContextResult = SfiaCanonicalContext;
