/**
 * W3-B correction pass 2 — C07/C08/C09/C10 proofs.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { EvaluateContractResult } from "@/lib/oa/evidence-review/application/evaluateContractResult";
import { ConfirmClaimEvaluation } from "@/lib/oa/evidence-review/application/confirmClaimEvaluation";
import {
  assessEvidenceRequirements,
  deriveCanonicalContractResultStatus,
} from "@/lib/oa/evidence-review/application/contractResultAssessment";
import {
  isW3bContractResultEvidenceUsable,
} from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
import {
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
  buildContractResultItemId,
} from "@/lib/oa/evidence-review/domain/contractResultTypes";
import {
  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
} from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { executionContractSemanticMaterial, computeExecutionContractSemanticMaterialFingerprint } from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import type { Evidence } from "@/lib/oa/evidence-review";

const baseContract: ExecutionContract = {
  schemaVersion: "0.2.0-oa",
  executionContractId: "xct:w3b:pass2",
  projectId: "prj:w3b",
  version: 7,
  status: "completed",
  semanticFingerprint: "fp:w3b:pass2",
  action: "product:generate-temporary-artifact",
  target: "product:project-workspace",
  scope: "product:temporary-local-artifact",
  requiredAuthority: "N3",
  constraints: [],
  stopConditions: [],
  evidenceRequirements: ["evreq:generate-temporary-artifact"],
  expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
  requiredCapabilities: ["cap:product-temp-artifact"],
  reversibility: "reversible",
  idempotencyKey: "idem:ec:pass2",
  correlationId: "cor:ec:pass2",
};

const semanticMaterial = executionContractSemanticMaterial(baseContract);
const boundFingerprint = computeExecutionContractSemanticMaterialFingerprint(semanticMaterial);
;(baseContract as { semanticFingerprint?: string }).semanticFingerprint = boundFingerprint;

const goodEvidence: Evidence = {
  schemaVersion: "0.2.0-oa",
  evidenceId: "ev:w3b:pass2",
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
  bindings: { executionAttemptId: "xat:w3b:1" },
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
  technicalResultRef: "res:w3a:abc1234567890ab",
};

function makeAttempt(overrides: Record<string, unknown> = {}) {
  const snap = captureBoundExecutionContractSnapshot({
    ...baseContract,
    version: Number(overrides.executionContractVersion ?? 3),
    semanticFingerprint: boundFingerprint,
  });
  const bound =
    overrides.boundExecutionContract === null
      ? undefined
      : ((overrides.boundExecutionContract as typeof snap | undefined) ?? snap);
  const { boundExecutionContract: _ignored, ...rest } = overrides;
  return {
    attemptId: "xat:w3b:1",
    executionContractId: baseContract.executionContractId,
    executionContractVersion: 3,
    executionContractSemanticFingerprint: boundFingerprint,
    status: "succeeded",
    resultRef: "res:w3a:abc1234567890ab",
    ...rest,
    boundExecutionContract: bound,
  };
}


describe("W3-B correction pass 2", () => {
  it("C09 — stale Evidence cannot satisfy ER", () => {
    expect(
      isW3bContractResultEvidenceUsable({
        evidence: { ...goodEvidence, status: "stale", freshness: "stale" },
        snapshot: {
          evidenceId: goodEvidence.evidenceId,
          evidenceVersion: 1,
          status: "stale",
          availability: "available",
        },
      }),
    ).toBe(false);
    const er = assessEvidenceRequirements({
      semanticMaterial,
      semanticFingerprint: boundFingerprint,
      attempt: makeAttempt(),
      evidence: { ...goodEvidence, status: "stale", freshness: "stale" },
      evaluatedAt: "2026-08-24T00:00:00.000Z",
      frozenEvidenceSnapshot: {
        evidenceId: goodEvidence.evidenceId,
        evidenceVersion: 1,
        status: "stale",
        availability: "available",
      },
    });
    expect(er[0]?.result).toBe("NOT_PROVEN");
  });

  it("C10 — unknown action materializes durable not_proven CE", async () => {
    const evaluated = await new EvaluateContractResult(
      {
        findById: async () => null,
        findByIdempotencyKey: async () => null,
        exists: async () => false,
        create: async () => {},
        update: async () => {},
      },
      { nowIso: () => "2026-08-24T00:00:00.000Z" },
      { append: () => {} },
      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
    ).execute({
      claimEvaluationId: "clm:w3b:unknown",
      idempotencyKey: "idem:ce:unknown",
      actor: { actorId: "actor:a", role: "project_owner" },
      contract: { ...baseContract, action: "product:unknown-action" },
      attempt: makeAttempt({
        boundExecutionContract: captureBoundExecutionContractSnapshot({
          ...baseContract,
          version: 3,
          action: "product:unknown-action",
          semanticFingerprint: computeExecutionContractSemanticMaterialFingerprint(
            executionContractSemanticMaterial({
              ...baseContract,
              action: "product:unknown-action",
            }),
          ),
        }),
        executionContractSemanticFingerprint:
          computeExecutionContractSemanticMaterialFingerprint(
            executionContractSemanticMaterial({
              ...baseContract,
              action: "product:unknown-action",
            }),
          ),
      }),
      evidence: goodEvidence,
      reviewBundle: {
        schemaVersion: "0.2.0-oa",
        reviewBundleId: "rb:w3b:1",
        projectId: "prj:w3b",
        version: 2,
        frozenAt: "2026-08-24T00:00:00.000Z",
        frozenVersion: 2,
        evidenceRefs: [goodEvidence.evidenceId],
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
            evidenceId: goodEvidence.evidenceId,
            evidenceVersion: 1,
            status: "available",
            availability: "available",
          },
        ],
      },
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.status).toBe("not_proven");
    expect(evaluated.claimEvaluation.ruleRef).toBeUndefined();
    expect(evaluated.claimEvaluation.claimStatement).toContain(
      "no_applicable_contract_result_rule",
    );
  });

  it("C08 — assisted confirm cannot mint pass from NOT_PROVEN EO assessments", async () => {
    const confirm = new ConfirmClaimEvaluation(
      {
        findById: async () => ({
          schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
          claimEvaluationId: "clm:cr:assisted",
          claimType: "conformite",
          claimStatement: "x",
          criticality: "non_critical",
          evaluationMethod: "assisted",
          requiredEvidenceRefs: ["ev:w3b:pass2"],
          providedEvidenceRefs: ["ev:w3b:pass2"],
          reviewBundleId: "rb:1",
          reviewBundleVersion: 2,
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
          contractResultReviewPolicyRef: W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
          contractResultBindings: {
            projectId: "prj:w3b",
            executionContractId: baseContract.executionContractId,
            executionContractVersion: 3,
            executionContractSemanticFingerprint: boundFingerprint,
            executionAttemptId: "xat:w3b:1",
            reviewBundleId: "rb:1",
            reviewBundleVersion: 2,
            evidenceRefs: ["ev:w3b:pass2"],
          },
          expectedOutputAssessments: [
            {
              itemId: buildContractResultItemId({
                semanticFingerprint: boundFingerprint,
                itemKind: "EO",
                ordinal: 0,
              }),
              expectation: W3B_TEMP_ARTIFACT_EO_TEMPLATE,
              result: "NOT_PROVEN",
              method: "assisted",
              provenance: {
                evaluatorRef: "w3b",
                evaluatedAt: "2026-08-24T00:00:00.000Z",
              },
            },
          ],
          evidenceRequirementAssessments: [
            {
              itemId: buildContractResultItemId({
                semanticFingerprint: boundFingerprint,
                itemKind: "ER",
                ordinal: 0,
              }),
              requirement: "evreq:generate-temporary-artifact",
              result: "SATISFIED",
              method: "assisted",
              provenance: {
                evaluatorRef: "w3b",
                evaluatedAt: "2026-08-24T00:00:00.000Z",
              },
            },
          ],
        }),
        findByIdempotencyKey: async () => null,
        exists: async () => true,
        create: async () => {},
        update: async () => {},
      },
      {
        findById: async () => ({
          schemaVersion: "0.2.0-oa",
          reviewBundleId: "rb:1",
          projectId: "prj:w3b",
          version: 2,
          frozenAt: "2026-08-24T00:00:00.000Z",
          frozenVersion: 2,
          evidenceRefs: ["ev:w3b:pass2"],
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
              evidenceId: "ev:w3b:pass2",
              evidenceVersion: 1,
              status: "verified",
              availability: "available",
            },
          ],
        }),
      },
      {
        findById: async () => ({ ...goodEvidence, status: "verified" as const }),
      },
      { verify: () => ({ ok: true, reason: "ok" }) },
      { nowIso: () => "2026-08-24T00:00:00.000Z" },
      { append: () => {} },
      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
      {
        findById: async () =>
          ({
            ...makeAttempt(),
            schemaVersion: "0.2.0-oa",
            selectedAgentRef: "agt:1",
            idempotencyKey: "idem:x",
            correlationId: "cor:x",
            version: 1,
            createdAt: "2026-08-24T00:00:00.000Z",
            provenance: {
              schemaVersion: "0.1.0-oa",
              provenanceRecordId: "prv:x",
              actor: { actorId: "actor:a", role: "project_owner" },
              source: "execution_adapter",
              timestamp: "2026-08-24T00:00:00.000Z",
              correlationId: "cor:x",
            },
          }) as never,
      },
    );
    const result = await confirm.execute({
      claimEvaluationId: "clm:cr:assisted",
      expectedVersion: 1,
      idempotencyKey: "idem:confirm:assisted",
      actor: { actorId: "actor:b", role: "project_owner" },
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.internalCauseRef).toBe(
      "contract_result_confirm_derived_not_pass",
    );
  });

  it("C08 — assisted confirm may pass only when all assessments derive pass", async () => {
    const eoPass = {
      itemId: buildContractResultItemId({
        semanticFingerprint: baseContract.semanticFingerprint!,
        itemKind: "EO" as const,
        ordinal: 0,
      }),
      expectation: W3B_TEMP_ARTIFACT_EO_TEMPLATE,
      result: "PASS" as const,
      method: "assisted" as const,
      provenance: {
        evaluatorRef: "w3b",
        evaluatedAt: "2026-08-24T00:00:00.000Z",
      },
    };
    const erSat = {
      itemId: buildContractResultItemId({
        semanticFingerprint: baseContract.semanticFingerprint!,
        itemKind: "ER" as const,
        ordinal: 0,
      }),
      requirement: "evreq:generate-temporary-artifact",
      result: "SATISFIED" as const,
      method: "assisted" as const,
      provenance: {
        evaluatorRef: "w3b",
        evaluatedAt: "2026-08-24T00:00:00.000Z",
      },
    };
    expect(
      deriveCanonicalContractResultStatus({
        attemptStatus: "succeeded",
        expectedOutputAssessments: [eoPass],
        evidenceRequirementAssessments: [erSat],
      }),
    ).toBe("pass");
  });
});
