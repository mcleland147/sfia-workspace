/**
 * Contract Result semantic entry #2 — cursor.docs_write.apply (bounded docs-write).
 */
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { Evidence, EvidenceStatus, ExecutionAttemptSnapshot } from "../domain/types";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
import type {
  ContractResultEvidenceSelection,
  ContractResultSemantic,
} from "./contractResultSemantics";
import {
  DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
  expectedDocsWriteConformityOracleFingerprint,
  parseDocsWriteConformityOracleFingerprint,
} from "./docsWriteMinConformityVerifier";
import { isW3bContractResultEvidenceUsable } from "./tempArtifactContractResultSemantic";

export const DOCS_WRITE_CONTRACT_RESULT_RULE_REF =
  "w3b-contract-result/cursor-docs-write-apply-v1" as const;

export const DOCS_WRITE_CONTRACT_RESULT_ER_KEY =
  "evreq:docs_write_artifact" as const;

export const BOUNDED_DOCS_WRITE_EO_TEMPLATE =
  "Résultat d'exécution — cursor.docs_write.apply" as const;

export const DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE =
  "execution_attempt:docs_write" as const;

/**
 * Correction identity for re-evaluation after semantic rule change.
 * Must never overwrite prior CE ids (`clm:docs-write:{attempt}` / W3-B).
 */
export const DOCS_WRITE_STRICT_EO_CORRECTION_REF = "strict-eo-v1" as const;

/**
 * Evidence-completion re-evaluation identity (successor RB + conformity Evidence).
 * Does not mutate the historical rb:docs-write freeze.
 * v1 = historical immutable PASS (headings-only / unbound oracle) — do not reuse.
 * v2 = CR-CEC-01/02/03 bound-oracle + fingerprint attestation.
 */
export const DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF_V1 =
  "evidence-completion-v1" as const;

export const DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF =
  "evidence-completion-v2" as const;

/**
 * Exact historically-bound EO templates (versioned named semantics — no NLP).
 * Apostrophe in EO1 is U+2019 (bound Attempt 3 EC truth).
 */
export const DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET =
  "Le fichier Markdown matérialisé au chemin cible" as const;

export const DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION =
  "Vérification de l\u2019existence et de la conformité minimale du fichier" as const;

/** Identity helpers for docs-write Contract Result ClaimEvaluations. */
export function docsWriteContractResultIdentity(
  attemptId: string,
  options?: {
    readonly correctionRef?: string;
    /**
     * When true with correctionRef, allocate a successor ReviewBundle id
     * (`rb:docs-write:{correction}:{attempt}`) leaving historical RB untouched.
     */
    readonly scopeReviewBundle?: boolean;
  },
): {
  claimEvaluationId: string;
  claimEvaluationIdempotencyKey: string;
  evidenceId: string;
  reviewBundleId: string;
  conformityEvidenceId: string;
} {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const correction = options?.correctionRef?.replace(/[^a-zA-Z0-9:_-]/g, "");
  const baseEvidence = `ev:docs-write:${segment}`.slice(0, 128);
  const baseRb = `rb:docs-write:${segment}`.slice(0, 128);
  if (correction) {
    const scopedRb = options?.scopeReviewBundle
      ? `rb:docs-write:${correction}:${segment}`.slice(0, 128)
      : baseRb;
    return {
      claimEvaluationId: `clm:docs-write:${correction}:${segment}`.slice(0, 128),
      claimEvaluationIdempotencyKey: `idem:docs-write-ce:${correction}:${attemptId}`,
      evidenceId: baseEvidence,
      reviewBundleId: scopedRb,
      conformityEvidenceId:
        `ev:docs-write-conformity:${correction}:${segment}`.slice(0, 128),
    };
  }
  return {
    claimEvaluationId: `clm:docs-write:${segment}`.slice(0, 128),
    claimEvaluationIdempotencyKey: `idem:docs-write-ce:${attemptId}`,
    evidenceId: baseEvidence,
    reviewBundleId: baseRb,
    conformityEvidenceId: `ev:docs-write-conformity:${segment}`.slice(0, 128),
  };
}

export function docsWriteArtifactFactsHold(input: {
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  material: {
    executionContractId?: string;
    projectId?: string;
    cycleInstanceId?: string;
  };
}): boolean {
  const { attempt, evidence, material } = input;
  if (attempt.status !== "succeeded") return false;
  if (evidence.type !== "artifact") return false;
  if (evidence.source !== DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE) return false;
  if (evidence.bindings.executionAttemptId !== attempt.attemptId) return false;

  // Fail-closed: executionContractId must be present and exact — never "valid by absence".
  const contractId =
    material.executionContractId ?? attempt.executionContractId;
  if (!evidence.bindings.executionContractId) return false;
  if (evidence.bindings.executionContractId !== contractId) return false;

  const projectId = material.projectId;
  if (projectId) {
    if (!evidence.bindings.projectId) return false;
    if (evidence.bindings.projectId !== projectId) return false;
  }

  const cycleId = material.cycleInstanceId;
  if (
    cycleId &&
    evidence.bindings.cycleInstanceId &&
    evidence.bindings.cycleInstanceId !== cycleId
  ) {
    return false;
  }

  if (!evidence.digest) return false;
  if (!evidence.location?.trim()) return false;
  return true;
}

/** Artifact-adapted usability — same freeze/status/freshness gates as W3-B. */
export function isDocsWriteContractResultEvidenceUsable(input: {
  evidence: Evidence;
  snapshot: ReviewBundleEvidenceSnapshot | undefined;
}): boolean {
  return isW3bContractResultEvidenceUsable(input);
}

function pickDocsWriteArtifactEvidence(
  evidences: readonly Evidence[],
  attempt: ExecutionAttemptSnapshot,
  material: {
    executionContractId?: string;
    projectId?: string;
    cycleInstanceId?: string;
  },
): Evidence | undefined {
  const matches = evidences.filter((e) =>
    docsWriteArtifactFactsHold({ attempt, evidence: e, material }),
  );
  return matches.length === 1 ? matches[0] : undefined;
}

export function docsWriteConformityFactsHold(input: {
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  artifact: Evidence;
  material: {
    executionContractId?: string;
    projectId?: string;
    cycleInstanceId?: string;
  };
}): boolean {
  const { attempt, evidence, artifact, material } = input;
  if (attempt.status !== "succeeded") return false;
  if (evidence.type !== "attestation") return false;
  // Server-owned: exact v2 verifier profile — never trust caller-only source strings.
  if (evidence.source !== DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE) return false;
  if (evidence.sourceKind !== "system") return false;

  const expectedFp = expectedDocsWriteConformityOracleFingerprint(attempt);
  if (!expectedFp) return false;
  const attestedFp = parseDocsWriteConformityOracleFingerprint(
    evidence.technicalResultRef,
  );
  if (!attestedFp || attestedFp !== expectedFp) return false;

  if (evidence.bindings.executionAttemptId !== attempt.attemptId) return false;
  const contractId =
    material.executionContractId ?? attempt.executionContractId;
  if (!evidence.bindings.executionContractId) return false;
  if (evidence.bindings.executionContractId !== contractId) return false;
  const projectId = material.projectId;
  if (projectId) {
    if (!evidence.bindings.projectId) return false;
    if (evidence.bindings.projectId !== projectId) return false;
  }
  const cycleId = material.cycleInstanceId;
  if (cycleId) {
    if (!evidence.bindings.cycleInstanceId) return false;
    if (evidence.bindings.cycleInstanceId !== cycleId) return false;
  }
  if (!evidence.digest) return false;
  if (evidence.digest !== artifact.digest) return false;
  if (evidence.status !== "available" && evidence.status !== "verified") {
    return false;
  }
  const artifactLocation = artifact.location?.trim() ?? "";
  const evidenceLocation = evidence.location?.trim() ?? "";
  if (!artifactLocation || evidenceLocation !== artifactLocation) return false;
  // OCC version must be a positive integer (frozen snapshot path re-checks exact version).
  if (!Number.isInteger(evidence.version) || evidence.version < 1) return false;
  return true;
}

function pickDocsWriteConformityEvidence(
  evidences: readonly Evidence[],
  attempt: ExecutionAttemptSnapshot,
  artifact: Evidence,
  material: {
    executionContractId?: string;
    projectId?: string;
    cycleInstanceId?: string;
  },
): Evidence | undefined {
  const matches = evidences.filter((e) =>
    docsWriteConformityFactsHold({ attempt, evidence: e, artifact, material }),
  );
  // Ambiguous duplicate conformity Evidence → fail-closed (undefined).
  return matches.length === 1 ? matches[0] : undefined;
}

function isPathShapedExpectedOutput(expectation: string): boolean {
  return (
    expectation.includes("/") ||
    /\.(md|txt|json|ya?ml|ts|tsx|js|jsx)$/i.test(expectation)
  );
}

function boundTargetPath(
  inputs: Record<string, unknown> | undefined,
): string | undefined {
  const raw = inputs?.targetPath;
  return typeof raw === "string" && raw.trim().length > 0
    ? raw.trim()
    : undefined;
}

/**
 * docs_write EO PASS only for deterministic forms:
 * 1) exact canonical bounded EO template;
 * 2) path-shaped EO that exactly equals durable Artifact Evidence.location;
 * 3) named EO materialized-markdown-at-target (bound inputs.targetPath);
 * 4) named EO min-conformity (requires matching conformity attestation Evidence).
 * Unknown / free-form prose → NOT_PROVEN (no NLP, no fuzzy PASS).
 */
export function assessDocsWriteExpectedOutput(input: {
  expectation: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  material: {
    executionContractId?: string;
    projectId?: string;
    cycleInstanceId?: string;
    inputs?: Record<string, unknown>;
  };
  evidences?: readonly Evidence[];
}): "PASS" | "NOT_PROVEN" | "FAIL" {
  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
    return "FAIL";
  }
  if (
    !docsWriteArtifactFactsHold({
      attempt: input.attempt,
      evidence: input.evidence,
      material: input.material,
    })
  ) {
    return "NOT_PROVEN";
  }
  const location = input.evidence.location?.trim() ?? "";
  const expectation = input.expectation.trim();
  if (!expectation) return "NOT_PROVEN";
  if (expectation === BOUNDED_DOCS_WRITE_EO_TEMPLATE) {
    return "PASS";
  }
  if (expectation === DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET) {
    const target = boundTargetPath(input.material.inputs);
    if (!target) return "NOT_PROVEN";
    return location.length > 0 && location === target ? "PASS" : "NOT_PROVEN";
  }
  if (expectation === DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION) {
    const pool = input.evidences ?? [input.evidence];
    const conformity = pickDocsWriteConformityEvidence(
      pool,
      input.attempt,
      input.evidence,
      input.material,
    );
    if (!conformity) return "NOT_PROVEN";
    // Existence is implied by matching digest+location on usable attestation.
    return "PASS";
  }
  if (isPathShapedExpectedOutput(expectation)) {
    return location.length > 0 && expectation === location
      ? "PASS"
      : "NOT_PROVEN";
  }
  return "NOT_PROVEN";
}

export function assessDocsWriteEvidenceRequirement(input: {
  requirement: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
  material: {
    executionContractId?: string;
    projectId?: string;
    cycleInstanceId?: string;
  };
}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
  if (input.ordinal !== 0) return "NOT_PROVEN";
  if (input.requirement !== DOCS_WRITE_CONTRACT_RESULT_ER_KEY) {
    return "NOT_PROVEN";
  }
  if (
    !isDocsWriteContractResultEvidenceUsable({
      evidence: input.evidence,
      snapshot: input.frozenSnapshot,
    })
  ) {
    return "NOT_PROVEN";
  }
  if (
    !docsWriteArtifactFactsHold({
      attempt: input.attempt,
      evidence: input.evidence,
      material: input.material,
    })
  ) {
    return "NOT_SATISFIED";
  }
  return "SATISFIED";
}

export const docsWriteContractResultSemantic: ContractResultSemantic = {
  id: "docs-write",
  ruleRef: DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
  isApplicable(material) {
    if (material.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
    return Boolean(
      material.requiredCapabilities?.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY),
    );
  },
  selectEvidenceIds(input): ContractResultEvidenceSelection {
    const frozen = input.frozenSnapshots;
    if (frozen.length === 0) {
      return {
        requiredEvidenceIds: [],
        incompleteReason: "no_frozen_evidence_snapshots",
      };
    }
    // Select all frozen ids; after load, assessors require exactly one docs_write artifact.
    return {
      requiredEvidenceIds: frozen.map((s) => s.evidenceId),
    };
  },
  assessExpectedOutput(input) {
    const evidence = pickDocsWriteArtifactEvidence(
      input.evidences,
      input.attempt,
      input.material,
    );
    if (!evidence) return "NOT_PROVEN";
    return assessDocsWriteExpectedOutput({
      expectation: input.expectation,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      material: input.material,
      evidences: input.evidences,
    });
  },
  assessEvidenceRequirement(input) {
    const evidence = pickDocsWriteArtifactEvidence(
      input.evidences,
      input.attempt,
      input.material,
    );
    if (!evidence) return "NOT_PROVEN";
    const frozenSnapshot = input.frozenSnapshots.find(
      (s) => s.evidenceId === evidence.evidenceId,
    );
    return assessDocsWriteEvidenceRequirement({
      requirement: input.requirement,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      frozenSnapshot,
      material: input.material,
    });
  },
};

/** @deprecated unused status set re-export for tests that may widen usability. */
export const DOCS_WRITE_USABLE_EVIDENCE_STATUSES = new Set<EvidenceStatus>([
  "available",
  "verified",
]);
