/**
 * W3-B Contract Result evaluation — TD-W3B-01/02 unit proofs.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessExpectedOutputs,
  assessEvidenceRequirements,
  deriveCanonicalContractResultStatus,
} from "@/lib/oa/evidence-review/application/contractResultAssessment";
import { validateClaimEvaluationShape } from "@/lib/oa/evidence-review/domain/claimEvaluationInvariants";
import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
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
  action: "generate",
  target: "artifact",
  scope: "temp artifact",
  requiredAuthority: "N3",
  constraints: [],
  stopConditions: ["EXECUTOR_INSUFFICIENT"],
  evidenceRequirements: ["evreq:artifact"],
  expectedOutputs: ["Temporary artifact produced"],
  requiredCapabilities: ["generate"],
  reversibility: "reversible",
  idempotencyKey: "idem:ec:w3b",
  correlationId: "cor:ec:w3b:test",
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
  technicalResultRef: "res:w3b:1",
};

describe("Contract Result evaluation", () => {
  it("succeeded + matching resultRef → EO PASS + ER SATISFIED + status pass", () => {
    const eo = assessExpectedOutputs({
      contract,
      attempt: {
        attemptId: "xat:w3b:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
        resultRef: "res:w3b:1",
      },
      evidence,
      evaluatedAt: "2026-08-24T00:00:00.000Z",
    });
    const er = assessEvidenceRequirements({
      contract,
      attempt: {
        attemptId: "xat:w3b:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
        resultRef: "res:w3b:1",
      },
      evidence,
      evaluatedAt: "2026-08-24T00:00:00.000Z",
    });
    expect(eo[0]?.result).toBe("PASS");
    expect(er[0]?.result).toBe("SATISFIED");
    const status = deriveCanonicalContractResultStatus({
      attemptStatus: "succeeded",
      expectedOutputAssessments: eo,
      evidenceRequirementAssessments: er,
    });
    expect(status).toBe("pass");
    expect(projectContractResultVerdict(status)).toBe("PASS");
  });

  it("technical succeeded alone without evidence match → not_proven", () => {
    const eo = assessExpectedOutputs({
      contract,
      attempt: {
        attemptId: "xat:w3b:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: 1,
        status: "succeeded",
        resultRef: "res:other",
      },
      evidence,
      evaluatedAt: "2026-08-24T00:00:00.000Z",
    });
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });

  it("failed attempt → fail / NOT_PROVEN verdict projection", () => {
    const eo = assessExpectedOutputs({
      contract,
      attempt: {
        attemptId: "xat:w3b:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: 1,
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

  it("contract-result claim shape validates", () => {
    const violation = validateClaimEvaluationShape({
      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
      claimEvaluationId: "clm:w3b:e79f8e3b38cf0f6f",
      claimType: "conformite",
      claimStatement: "Contract result assessment (pass) for EC test@v1",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      ruleRef: "w3b-product-completion-contract-result-v1",
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
    });
    expect(violation).toBeNull();
  });
});
