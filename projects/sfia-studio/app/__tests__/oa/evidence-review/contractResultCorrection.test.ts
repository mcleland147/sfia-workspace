/**
 * W3-B correction — authority, cancel Evidence, stale bindings.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { ConfirmClaimEvaluation } from "@/lib/oa/evidence-review/application/confirmClaimEvaluation";
import { IngestExecutionAttemptEvidence } from "@/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence";
import { validateClaimEvaluationShape } from "@/lib/oa/evidence-review/domain/claimEvaluationInvariants";
import {
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
  contractResultBindingsMatchCurrentFacts,
} from "@/lib/oa/evidence-review/domain/contractResultTypes";
import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
import { projectW3bProductTerminal } from "@/features/project-assistant/w2/w3bProductTerminalProjection";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";

const contract: ExecutionContract = {
  schemaVersion: "0.2.0-oa",
  executionContractId: "ec:w3b:corr",
  projectId: "prj:w3b",
  version: 3,
  status: "confirmed",
  semanticFingerprint: "fp:w3b:corr",
  action: "product:generate-temporary-artifact",
  target: "product:project-workspace",
  scope: "product:temporary-local-artifact",
  requiredAuthority: "N3",
  constraints: [],
  stopConditions: [],
  evidenceRequirements: ["evreq:generate-temporary-artifact"],
  expectedOutputs: ["Résultat d'exécution — generate-temporary-artifact"],
  requiredCapabilities: ["cap:product-temp-artifact"],
  reversibility: "reversible",
  idempotencyKey: "idem:ec:corr",
  correlationId: "cor:ec:corr",
};

describe("W3-B contract result correction proofs", () => {
  it("structural generic claim still requires Morris at pass shape validation", () => {
    const violation = validateClaimEvaluationShape({
      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
      claimEvaluationId: "clm:generic:structural",
      claimType: "conformite",
      claimStatement: "generic structural",
      criticality: "structural",
      evaluationMethod: "assisted",
      requiredEvidenceRefs: ["ev:1"],
      providedEvidenceRefs: ["ev:1"],
      reviewBundleId: "rb:1",
      reviewBundleVersion: 1,
      status: "pass",
      proposedBy: { actorId: "actor:a", role: "project_owner" },
      confirmationAuthority: "authorized_human",
      confirmedBy: { actorId: "actor:b", role: "project_owner" },
      confirmedAt: "2026-08-24T00:00:00.000Z",
      proposedAt: "2026-08-24T00:00:00.000Z",
      evaluatedAt: "2026-08-24T00:00:00.000Z",
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:1",
        actor: { actorId: "actor:a", role: "project_owner" },
        source: "review",
        timestamp: "2026-08-24T00:00:00.000Z",
        correlationId: "cor:1",
      },
      version: 1,
    });
    expect(violation?.reason).toBe("structural_requires_morris");
  });

  it("contract result structural metadata does not inherit Morris at pass validation", () => {
    const violation = validateClaimEvaluationShape({
      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
      claimEvaluationId: "clm:cr:structural",
      claimType: "conformite",
      claimStatement: "contract result",
      criticality: "structural",
      evaluationMethod: "deterministic",
      ruleRef: "w3b-contract-result/product-generate-temporary-artifact-v1",
      requiredEvidenceRefs: ["ev:1"],
      providedEvidenceRefs: ["ev:1"],
      reviewBundleId: "rb:1",
      reviewBundleVersion: 1,
      status: "pass",
      proposedBy: { actorId: "actor:a", role: "project_owner" },
      confirmationAuthority: "system_deterministic",
      proposedAt: "2026-08-24T00:00:00.000Z",
      evaluatedAt: "2026-08-24T00:00:00.000Z",
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:cr",
        actor: { actorId: "actor:a", role: "project_owner" },
        source: "review",
        timestamp: "2026-08-24T00:00:00.000Z",
        correlationId: "cor:cr",
      },
      version: 1,
      subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
      contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
    });
    expect(violation).toBeNull();
  });

  it("stale CE pass does not project SUCCESS after EC version drift", () => {
    const attempt: ExecutionAttempt = {
      schemaVersion: "0.2.0-oa",
      attemptId: "xat:w3b:stale",
      executionContractId: contract.executionContractId,
      executionContractVersion: 4,
      executionContractSemanticFingerprint: "fp:w3b:new",
      selectedAgentRef: "agt:1",
      status: "succeeded",
      idempotencyKey: "idem:xat",
      correlationId: "cor:xat",
      version: 1,
      createdAt: "2026-08-24T00:00:00.000Z",
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:xat",
        actor: { actorId: "actor:a", role: "project_owner" },
        source: "execution_adapter",
        timestamp: "2026-08-24T00:00:00.000Z",
        correlationId: "cor:xat",
      },
      resultRef: "res:w3a:deadbeef",
    };
    const product = projectW3bProductTerminal({
      attempt,
      contract,
      evidence: {
        schemaVersion: "0.2.0-oa",
        evidenceId: "ev:1",
        type: "artifact",
        source: "attempt",
        sourceKind: "execution_attempt",
        location: "refs/x",
        producedBy: { actorId: "actor:a", role: "project_owner" },
        producedAt: "2026-08-24T00:00:00.000Z",
        freshness: "fresh",
        status: "available",
        classification: "internal",
        storageMode: "metadata_only",
        availability: "available",
        retentionClass: "standard",
        legalHold: false,
        bindings: {},
        containsSecrets: false,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:ev",
          actor: { actorId: "actor:a", role: "project_owner" },
          source: "execution_adapter",
          timestamp: "2026-08-24T00:00:00.000Z",
          correlationId: "cor:ev",
        },
        version: 1,
        createdAt: "2026-08-24T00:00:00.000Z",
        technicalResultRef: "res:w3a:deadbeef",
      },
      reviewBundle: {
        schemaVersion: "0.2.0-oa",
        reviewBundleId: "rb:1",
        projectId: "prj:w3b",
        version: 2,
        frozenVersion: 2,
        frozenAt: "2026-08-24T00:00:00.000Z",
        evidenceRefs: ["ev:1"],
        claimEvaluationRefs: [],
        completeness: "complete",
        status: "ready_for_review",
        createdAt: "2026-08-24T00:00:00.000Z",
        synthesisOnly: false,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:rb",
          actor: { actorId: "actor:a", role: "project_owner" },
          source: "review",
          timestamp: "2026-08-24T00:00:00.000Z",
          correlationId: "cor:rb",
        },
      },
      claimEvaluation: {
        schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
        claimEvaluationId: "clm:stale",
        claimType: "conformite",
        claimStatement: "stale",
        criticality: "non_critical",
        evaluationMethod: "deterministic",
        ruleRef: "w3b-contract-result/product-generate-temporary-artifact-v1",
        requiredEvidenceRefs: ["ev:1"],
        providedEvidenceRefs: ["ev:1"],
        reviewBundleId: "rb:1",
        reviewBundleVersion: 2,
        status: "pass",
        proposedBy: { actorId: "actor:a", role: "project_owner" },
        confirmationAuthority: "system_deterministic",
        proposedAt: "2026-08-24T00:00:00.000Z",
        evaluatedAt: "2026-08-24T00:00:00.000Z",
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:clm",
          actor: { actorId: "actor:a", role: "project_owner" },
          source: "review",
          timestamp: "2026-08-24T00:00:00.000Z",
          correlationId: "cor:clm",
        },
        version: 1,
        subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
        contractResultBindings: {
          projectId: "prj:w3b",
          executionContractId: contract.executionContractId,
          executionContractVersion: 2,
          executionContractSemanticFingerprint: "fp:w3b:old",
          executionAttemptId: attempt.attemptId,
          reviewBundleId: "rb:1",
          reviewBundleVersion: 2,
          evidenceRefs: ["ev:1"],
        },
        contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
      },
    });
    expect(product.outcome).toBe("UNCLAIMED");
    expect(
      contractResultBindingsMatchCurrentFacts({
        projectId: "prj:w3b",
        cycleInstanceId: null,
        bindings: product.claimEvaluationId
          ? {
              projectId: "prj:w3b",
              executionContractId: contract.executionContractId,
              executionContractVersion: 2,
              executionContractSemanticFingerprint: "fp:w3b:old",
              executionAttemptId: attempt.attemptId,
              reviewBundleId: "rb:1",
              reviewBundleVersion: 2,
              evidenceRefs: ["ev:1"],
            }
          : ({} as never),
        attempt,
        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
        evidenceIds: ["ev:1"],
      }),
    ).toBe(false);
  });

  it("USER_CANCEL Evidence uses user-cancel location, not governed-stop", async () => {
    const ingested = await new IngestExecutionAttemptEvidence(
      {
        create: async () => {},
        findById: async () => null,
        findByIdempotencyKey: async () => null,
        exists: async () => false,
        update: async () => {},
      },
      {
        findById: async () => ({
          attemptId: "xat:cancel:1",
          executionContractId: "xct:1",
          executionContractVersion: 1,
          status: "cancelled",
          cancelledAt: "2026-08-24T00:00:00.000Z",
          stopOrigin: "USER_CANCEL" as const,
        }),
      },
      { nowIso: () => "2026-08-24T00:00:00.000Z" },
      { append: () => {} },
      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
    ).execute({
      evidenceId: "ev:cancel:1",
      executionAttemptId: "xat:cancel:1",
      idempotencyKey: "idem:ev:cancel:1",
      actor: { actorId: "actor:a", role: "project_owner" },
      classification: "internal",
      storageMode: "metadata_only",
      bindings: { projectId: "prj:1", executionContractId: "xct:1" },
    });
    expect(ingested.ok).toBe(true);
    if (!ingested.ok) return;
    expect(ingested.evidence.location).toContain("/user-cancel");
    expect(ingested.evidence.source).toContain(":user-cancel");
  });

  it("contract result deterministic confirm is forbidden", async () => {
    const confirm = new ConfirmClaimEvaluation(
      {
        findById: async () => ({
          schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
          claimEvaluationId: "clm:cr:det",
          claimType: "conformite",
          claimStatement: "x",
          criticality: "non_critical",
          evaluationMethod: "deterministic",
          requiredEvidenceRefs: ["ev:1"],
          providedEvidenceRefs: ["ev:1"],
          reviewBundleId: "rb:1",
          reviewBundleVersion: 1,
          status: "evaluating",
          proposedBy: { actorId: "actor:a", role: "project_owner" },
          proposedAt: "2026-08-24T00:00:00.000Z",
          provenance: {
            schemaVersion: "0.1.0-oa",
            provenanceRecordId: "prv:1",
            actor: { actorId: "actor:a", role: "project_owner" },
            source: "review",
            timestamp: "2026-08-24T00:00:00.000Z",
            correlationId: "cor:1",
          },
          version: 1,
          subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
        }),
        findByIdempotencyKey: async () => null,
        exists: async () => true,
        create: async () => {},
        update: async () => {},
      },
      {
        findById: async () =>
          ({
            schemaVersion: "0.2.0-oa",
            reviewBundleId: "rb:1",
            projectId: "prj:1",
            version: 1,
            frozenAt: "2026-08-24T00:00:00.000Z",
            frozenVersion: 1,
            evidenceRefs: ["ev:1"],
            claimEvaluationRefs: [],
            completeness: "complete",
            status: "ready_for_review",
            createdAt: "2026-08-24T00:00:00.000Z",
            synthesisOnly: false,
            provenance: {
              schemaVersion: "0.1.0-oa",
              provenanceRecordId: "prv:rb",
              actor: { actorId: "actor:a", role: "project_owner" },
              source: "review",
              timestamp: "2026-08-24T00:00:00.000Z",
              correlationId: "cor:rb",
            },
            frozenEvidenceSnapshots: [
              {
                evidenceId: "ev:1",
                evidenceVersion: 1,
                status: "verified",
                availability: "available",
              },
            ],
          }) as import("@/lib/oa/evidence-review/domain/reviewBundleTypes").ReviewBundle,
      },
      {
        findById: async () =>
          ({
            schemaVersion: "0.2.0-oa",
            evidenceId: "ev:1",
            type: "artifact",
            source: "test",
            sourceKind: "execution_attempt",
            location: "refs/test",
            producedBy: { actorId: "actor:a", role: "project_owner" },
            producedAt: "2026-08-24T00:00:00.000Z",
            freshness: "fresh",
            status: "verified",
            classification: "internal",
            storageMode: "metadata_only",
            availability: "available",
            retentionClass: "standard",
            legalHold: false,
            bindings: { projectId: "prj:1" },
            containsSecrets: false,
            provenance: {
              schemaVersion: "0.1.0-oa",
              provenanceRecordId: "prv:ev",
              actor: { actorId: "actor:a", role: "project_owner" },
              source: "review",
              timestamp: "2026-08-24T00:00:00.000Z",
              correlationId: "cor:ev",
            },
            version: 1,
            createdAt: "2026-08-24T00:00:00.000Z",
          }) as import("@/lib/oa/evidence-review/domain/types").Evidence,
      },
      { verify: () => ({ ok: true, reason: "ok" }) },
      { nowIso: () => "2026-08-24T00:00:00.000Z" },
      { append: () => {} },
      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
    );
    const result = await confirm.execute({
      claimEvaluationId: "clm:cr:det",
      expectedVersion: 1,
      idempotencyKey: "idem:confirm:cr",
      actor: { actorId: "actor:b", role: "project_owner" },
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.internalCauseRef).toBe(
      "contract_result_deterministic_no_human_confirm",
    );
  });
});
