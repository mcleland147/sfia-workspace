/**
 * W3-B Contract Result evaluation — TD-W3B-01/02 + ARCH-R02 unit proofs.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessExpectedOutputs,
  assessEvidenceRequirements,
  deriveCanonicalContractResultStatus,
} from "@/lib/oa/evidence-review/application/contractResultAssessment";
import {
  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
  W3B_TEMP_ARTIFACT_ER_KEY,
  W3B_TEMP_ARTIFACT_RULE_REF,
} from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
import { validateClaimEvaluationShape } from "@/lib/oa/evidence-review/domain/claimEvaluationInvariants";
import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
import {
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
  isAttemptContractExactlyBound,
} from "@/lib/oa/evidence-review/domain/contractResultTypes";
import { projectContractResultVerdict } from "@/lib/oa/evidence-review/application/contractResultVerdictProjection";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";

const contract: ExecutionContract = {
  schemaVersion: "0.2.0-oa",
  executionContractId: "ec:w3b:test",
  projectId: "prj:w3b",
  version: 1,
  status: "confirmed",
  semanticFingerprint: "fp:w3b:abc",
  action: "product:generate-temporary-artifact",
  target: "product:project-workspace",
  scope: "product:temporary-local-artifact",
  requiredAuthority: "N3",
  constraints: [],
  stopConditions: ["EXECUTOR_INSUFFICIENT"],
  evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
  expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
  requiredCapabilities: ["cap:product-temp-artifact"],
  reversibility: "reversible",
  idempotencyKey: "idem:ec:w3b",
  correlationId: "cor:ec:w3b:test",
};

const frozenSnapshot = {
  evidenceId: "ev:w3b:1",
  evidenceVersion: 1,
  status: "available",
  availability: "available",
};

const evidence: Evidence = {
  schemaVersion: "0.2.0-oa",
  evidenceId: "ev:w3b:1",
  type: "artifact",
  source: "attempt",
  sourceKind: "execution_attempt",
  location: "refs/x",
  producedBy: { actorId: "actor:p", role: "project_owner" },
  producedAt: "2026-08-24T00:00:00.000Z",
  freshness: "fresh",
  status: "available",
  classification: "internal",
  storageMode: "metadata_only",
  availability: "available",
  retentionClass: "standard",
  legalHold: false,
  bindings: {
    projectId: "prj:w3b",
    executionContractId: "ec:w3b:test",
    executionAttemptId: "xat:w3b:1",
  },
  containsSecrets: false,
  provenance: {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:ev:w3b:1",
    actor: { actorId: "actor:p", role: "project_owner" },
    source: "execution_adapter",
    timestamp: "2026-08-24T00:00:00.000Z",
    correlationId: "cor:ev:w3b:1",
  },
  version: 1,
  createdAt: "2026-08-24T00:00:00.000Z",
  technicalResultRef: "res:w3a:abc123",
};

describe("Contract Result evaluation", () => {
  it("recognized operation + applicable facts → EO PASS + ER SATISFIED + status pass", () => {
    const eo = assessExpectedOutputs({
      contract,
      attempt: {
        attemptId: "xat:w3b:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: contract.semanticFingerprint,
        status: "succeeded",
        resultRef: "res:w3a:abc123",
      },
      evidence,
      evaluatedAt: "2026-08-24T00:00:00.000Z",
      frozenEvidenceSnapshot: frozenSnapshot,
    });
    const er = assessEvidenceRequirements({
      contract,
      attempt: {
        attemptId: "xat:w3b:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: contract.semanticFingerprint,
        status: "succeeded",
        resultRef: "res:w3a:abc123",
      },
      evidence,
      evaluatedAt: "2026-08-24T00:00:00.000Z",
      frozenEvidenceSnapshot: frozenSnapshot,
    });
    expect(eo[0]?.result).toBe("PASS");
    expect(eo[0]?.ruleRef).toBe(W3B_TEMP_ARTIFACT_RULE_REF);
    expect(er[0]?.result).toBe("SATISFIED");
    const status = deriveCanonicalContractResultStatus({
      attemptStatus: "succeeded",
      expectedOutputAssessments: eo,
      evidenceRequirementAssessments: er,
    });
    expect(status).toBe("pass");
    expect(projectContractResultVerdict(status)).toBe("PASS");
  });

  it("technical succeeded + resultRef + Evidence available + unknown EO text → NOT_PROVEN", () => {
    const eo = assessExpectedOutputs({
      contract: {
        ...contract,
        expectedOutputs: ["Temporary artifact produced"],
      },
      attempt: {
        attemptId: "xat:w3b:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: contract.semanticFingerprint,
        status: "succeeded",
        resultRef: "res:w3a:abc123",
      },
      evidence,
      evaluatedAt: "2026-08-24T00:00:00.000Z",
    });
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });

  it("resultRef match alone without server-owned res:w3a shape → NOT_PROVEN", () => {
    const eo = assessExpectedOutputs({
      contract,
      attempt: {
        attemptId: "xat:w3b:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: contract.semanticFingerprint,
        status: "succeeded",
        resultRef: "res:other",
      },
      evidence: { ...evidence, technicalResultRef: "res:other" },
      evaluatedAt: "2026-08-24T00:00:00.000Z",
    });
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });

  it("Evidence available alone without frozen snapshot → ER NOT_PROVEN", () => {
    const er = assessEvidenceRequirements({
      contract,
      attempt: {
        attemptId: "xat:w3b:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: contract.semanticFingerprint,
        status: "succeeded",
        resultRef: "res:w3a:abc123",
      },
      evidence,
      evaluatedAt: "2026-08-24T00:00:00.000Z",
    });
    expect(er[0]?.result).toBe("NOT_PROVEN");
  });

  it("exact binding requires id + version + fingerprint", () => {
    expect(
      isAttemptContractExactlyBound({
        contract,
        attempt: {
          executionContractId: contract.executionContractId,
          executionContractVersion: 1,
          executionContractSemanticFingerprint: contract.semanticFingerprint,
        },
      }),
    ).toBe(true);
    expect(
      isAttemptContractExactlyBound({
        contract,
        attempt: {
          executionContractId: contract.executionContractId,
          executionContractVersion: 2,
          executionContractSemanticFingerprint: contract.semanticFingerprint,
        },
      }),
    ).toBe(false);
    expect(
      isAttemptContractExactlyBound({
        contract: { ...contract, semanticFingerprint: "fp:other" },
        attempt: {
          executionContractId: contract.executionContractId,
          executionContractVersion: 1,
          executionContractSemanticFingerprint: contract.semanticFingerprint,
        },
      }),
    ).toBe(false);
  });

  it("failed attempt → fail / NOT_PROVEN verdict projection", () => {
    const eo = assessExpectedOutputs({
      contract,
      attempt: {
        attemptId: "xat:w3b:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: contract.semanticFingerprint,
        status: "failed",
        errorRef: "err:w3b:1",
      },
      evidence: { ...evidence, technicalResultRef: undefined },
      evaluatedAt: "2026-08-24T00:00:00.000Z",
    });
    expect(eo[0]?.result).toBe("FAIL");
    expect(projectContractResultVerdict("fail")).toBe("FAIL");
    expect(projectContractResultVerdict("not_proven")).toBe("NOT_PROVEN");
  });

  it("contract-result claim shape validates with bounded policy ref", () => {
    const violation = validateClaimEvaluationShape({
      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
      claimEvaluationId: "clm:w3b:e79f8e3b38cf0f6f",
      claimType: "conformite",
      claimStatement: "Contract result assessment (pass) for EC test@v1",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      ruleRef: W3B_TEMP_ARTIFACT_RULE_REF,
      requiredEvidenceRefs: ["ev:w3b:1"],
      providedEvidenceRefs: ["ev:w3b:1"],
      reviewBundleId: "rb:w3b:e79f8e3b38cf0f6f",
      reviewBundleVersion: 1,
      status: "pass",
      proposedBy: { actorId: "actor:local-pilote", role: "project_owner" },
      confirmationAuthority: "system_deterministic",
      proposedAt: "2026-08-24T00:00:00.000Z",
      evaluatedAt: "2026-08-24T00:00:00.000Z",
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:test",
        actor: { actorId: "actor:local-pilote", role: "project_owner" },
        source: "review",
        timestamp: "2026-08-24T00:00:00.000Z",
        correlationId: "cor:clm:w3b:test",
      },
      version: 1,
      subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
      contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
    });
    expect(violation).toBeNull();
  });
});
