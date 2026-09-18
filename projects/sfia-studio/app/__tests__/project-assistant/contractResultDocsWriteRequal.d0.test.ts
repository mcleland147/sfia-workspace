/**
 * T21 — docs_write Contract Result requalification (ZERO REAL).
 * Old not_proven CE → freeze docs_write RB → new PASS CE superseding → resolver returns successor.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import type { Digest } from "@/lib/oa/doctrine";
import {
  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
  CLAIM_EVALUATION_SCHEMA_VERSION,
  createInMemoryEvidenceReviewServices,
  docsWriteContractResultIdentity,
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
  DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
  resolveCurrentContractResultClaimEvaluation,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { requalifyDocsWriteContractResult } from "@/features/project-assistant/w2/requalifyDocsWriteContractResult";

const ACTOR = { actorId: "actor:requal", role: "project_owner" as const };
const NOW = "2026-09-18T09:00:00.000Z";
const ATTEMPT_ID = "xat:w3a:c4c5670edb4658cc";
const PROJECT_ID = "prj:requal";
const TARGET = "docs/functional-design.md";

function makeDocsWriteContract(): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:requal:docs",
    projectId: PROJECT_ID,
    cycleInstanceId: "cyc:requal:1",
    version: 2,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: TARGET,
    scope: "docs/",
    requiredAuthority: "N3",
    constraints: ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"],
    stopConditions: [],
    evidenceRequirements: [DOCS_WRITE_CONTRACT_RESULT_ER_KEY],
    expectedOutputs: [BOUNDED_DOCS_WRITE_EO_TEMPLATE],
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:requal:docs",
    correlationId: "cor:ec:requal:docs",
  };
  base.semanticFingerprint = computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(base),
  );
  return base;
}

describe("docs_write Contract Result requalification (T21)", () => {
  it("T21 — not_proven prior → freeze + PASS successor supersedes; wrong path NOT_PROVEN; ZERO REAL", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeDocsWriteContract();
    const snap = captureBoundExecutionContractSnapshot(contract);
    const attempt = {
      attemptId: ATTEMPT_ID,
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      executionContractSemanticFingerprint: snap.semanticFingerprint,
      boundExecutionContract: snap,
      status: "succeeded",
      resultRef: "res:w3a:c4c5670edb4658cc",
      selectedAgentRef: "agent:docs-write",
      version: 3,
      createdAt: NOW,
      updatedAt: NOW,
    } as ExecutionAttempt;

    // Prior W3-B-style not_proven CE (no applicable rule historically).
    await services.claimEvaluationRepository.create({
      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
      claimEvaluationId: "clm:w3b:prior-not-proven",
      claimType: "conformite",
      claimStatement:
        "Contract result assessment (not_proven) — no_applicable_contract_result_rule",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:w3b:tech"],
      reviewBundleId: "rb:w3b:tech",
      reviewBundleVersion: 1,
      status: "not_proven",
      proposedBy: ACTOR,
      proposedAt: NOW,
      evaluatedAt: NOW,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:prior",
        actor: ACTOR,
        source: "review",
        timestamp: NOW,
        correlationId: "cor:prior",
        projectId: PROJECT_ID,
      },
      version: 1,
      subjectKind: "execution_contract_result",
      contractResultBindings: {
        projectId: PROJECT_ID,
        cycleInstanceId: "cyc:requal:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        executionContractSemanticFingerprint: snap.semanticFingerprint,
        executionAttemptId: ATTEMPT_ID,
        reviewBundleId: "rb:w3b:tech",
        reviewBundleVersion: 1,
        evidenceRefs: ["ev:w3b:tech"],
      },
    });

    const ingested = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: services,
      projectId: PROJECT_ID,
      cycleInstanceId: "cyc:requal:1",
      executionContractId: contract.executionContractId,
      executionAttemptId: ATTEMPT_ID,
      targetPath: TARGET,
      digest:
        "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(ingested.ok).toBe(true);
    if (!ingested.ok) return;

    const ids = docsWriteContractResultIdentity(ATTEMPT_ID);
    expect(ingested.evidenceId).toBe(ids.evidenceId);
    expect(ingested.reviewBundleId).toBe(ids.reviewBundleId);

    const draftRb = await services.reviewBundleReader.findById(ids.reviewBundleId);
    expect(draftRb?.status).toBe("draft");
    expect(draftRb?.frozenAt).toBeUndefined();

    const requal = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(requal.ok).toBe(true);
    if (!requal.ok) return;
    expect(requal.claimEvaluation.status).toBe("pass");
    expect(requal.claimEvaluation.ruleRef).toBe(
      DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
    );
    expect(requal.claimEvaluation.supersedesClaimEvaluationId).toBe(
      "clm:w3b:prior-not-proven",
    );
    expect(requal.reviewBundle.frozenAt).toBeTruthy();
    expect(requal.supersededClaimEvaluationId).toBe("clm:w3b:prior-not-proven");

    const current = await resolveCurrentContractResultClaimEvaluation({
      repo: services.claimEvaluationRepository,
      projectId: PROJECT_ID,
      executionAttemptId: ATTEMPT_ID,
    });
    expect(current.status).toBe("one");
    if (current.status === "one") {
      expect(current.claimEvaluation.claimEvaluationId).toBe(ids.claimEvaluationId);
      expect(current.claimEvaluation.status).toBe("pass");
    }

    // Wrong path → NOT_PROVEN (new CE id, no REAL).
    const wrongIngest = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: services,
      projectId: PROJECT_ID,
      cycleInstanceId: "cyc:requal:1",
      executionContractId: contract.executionContractId,
      executionAttemptId: "xat:w3a:wrongpath01",
      targetPath: "docs/wrong.md",
      digest:
        "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" as Digest,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(wrongIngest.ok).toBe(true);
    if (!wrongIngest.ok) return;

    const wrongContract = makeDocsWriteContract();
    wrongContract.executionContractId = "xct:requal:wrong";
    wrongContract.expectedOutputs = [TARGET];
    wrongContract.semanticFingerprint =
      computeExecutionContractSemanticMaterialFingerprint(
        executionContractSemanticMaterial(wrongContract),
      );
    const wrongSnap = captureBoundExecutionContractSnapshot(wrongContract);
    const wrongAttempt = {
      ...attempt,
      attemptId: "xat:w3a:wrongpath01",
      executionContractId: wrongContract.executionContractId,
      executionContractSemanticFingerprint: wrongSnap.semanticFingerprint,
      boundExecutionContract: wrongSnap,
    } as ExecutionAttempt;

    const wrongRequal = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt: wrongAttempt,
      contract: wrongContract,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(wrongRequal.ok).toBe(true);
    if (!wrongRequal.ok) return;
    expect(wrongRequal.claimEvaluation.status).toBe("not_proven");

    // ZERO REAL markers — no process spawn / REAL mode in this module path.
    expect(requal.claimEvaluation.evaluationMethod).toBe("deterministic");
  });
});
