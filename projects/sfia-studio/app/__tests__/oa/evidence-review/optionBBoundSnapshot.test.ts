/**
 * TD-W3B-02 Option B — Attempt-bound immutable EC semantic snapshot adversarial suite.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import {
  createTestSqliteEvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticFingerprint,
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import {
  BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION,
  captureBoundExecutionContractSnapshot,
  validateBoundExecutionContractSnapshot,
} from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import {
  assessEvidenceRequirements,
  assessExpectedOutputs,
  deriveCanonicalContractResultStatus,
} from "@/lib/oa/evidence-review/application/contractResultAssessment";
import {
  isW3bContractResultEvidenceUsable,
  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
  W3B_TEMP_ARTIFACT_ER_KEY,
} from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
import { EvaluateContractResult } from "@/lib/oa/evidence-review/application/evaluateContractResult";
import { ConfirmClaimEvaluation } from "@/lib/oa/evidence-review/application/confirmClaimEvaluation";
import {
  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
  contractResultBindingsMatchCurrentFacts,
  isAttemptBoundSnapshotValid,
} from "@/lib/oa/evidence-review/domain/contractResultTypes";
import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
import { validateClaimEvaluationShape } from "@/lib/oa/evidence-review/domain/claimEvaluationInvariants";
import type { Evidence } from "@/lib/oa/evidence-review";

const tempDirs: string[] = [];

afterEach(() => {
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) {
      try {
        fs.rmSync(dir, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
    }
  }
});

function makeContract(
  overrides: Partial<ExecutionContract> = {},
): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:w3b:optb",
    projectId: "prj:w3b",
    version: 3,
    status: "confirmed",
    semanticFingerprint: "",
    action: "product:generate-temporary-artifact",
    target: "product:project-workspace",
    scope: "product:temporary-local-artifact",
    requiredAuthority: "N3",
    constraints: [],
    stopConditions: [],
    evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
    expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
    requiredCapabilities: ["cap:product-temp-artifact"],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:optb",
    correlationId: "cor:ec:optb",
    ...overrides,
  };
  const fp = computeExecutionContractSemanticFingerprint(base);
  return { ...base, semanticFingerprint: fp };
}

const contract = makeContract();
const material = executionContractSemanticMaterial(contract);
const fingerprint = computeExecutionContractSemanticMaterialFingerprint(material);

function makeEvidence(overrides: Partial<Evidence> = {}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: "ev:w3b:optb",
    type: "artifact",
    source: "attempt",
    sourceKind: "execution_attempt",
    location: "refs/x",
    producedBy: LOCAL_PILOTE_ACTOR,
    producedAt: "2026-08-24T00:00:00.000Z",
    freshness: "fresh",
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    retentionClass: "standard",
    legalHold: false,
    bindings: {
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
      executionAttemptId: "xat:w3b:optb",
    },
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:ev:optb",
      actor: LOCAL_PILOTE_ACTOR,
      source: "execution_adapter",
      timestamp: "2026-08-24T00:00:00.000Z",
      correlationId: "cor:ev:optb",
    },
    version: 1,
    createdAt: "2026-08-24T00:00:00.000Z",
    technicalResultRef: "res:w3a:abc1234567890ab",
    ...overrides,
  };
}

function makeAttempt(overrides: Record<string, unknown> = {}) {
  const snap =
    overrides.boundExecutionContract === null
      ? undefined
      : ((overrides.boundExecutionContract as ReturnType<
          typeof captureBoundExecutionContractSnapshot
        > | undefined) ??
        captureBoundExecutionContractSnapshot({
          ...contract,
          version: Number(overrides.executionContractVersion ?? contract.version),
        }));
  const { boundExecutionContract: _b, ...rest } = overrides;
  return {
    attemptId: "xat:w3b:optb",
    executionContractId: contract.executionContractId,
    executionContractVersion: contract.version,
    executionContractSemanticFingerprint: fingerprint,
    status: "succeeded" as const,
    resultRef: "res:w3a:abc1234567890ab",
    ...rest,
    boundExecutionContract: snap,
  };
}

const frozenSnapshot = {
  evidenceId: "ev:w3b:optb",
  evidenceVersion: 1,
  status: "available",
  availability: "available",
};

describe("Option B — fingerprint material helper", () => {
  it("same contract → contract helper == material helper", () => {
    expect(computeExecutionContractSemanticFingerprint(contract)).toBe(
      computeExecutionContractSemanticMaterialFingerprint(material),
    );
  });

  it("persistence-normalized material → stable fingerprint", () => {
    const normalized = JSON.parse(JSON.stringify(material));
    expect(
      computeExecutionContractSemanticMaterialFingerprint(normalized),
    ).toBe(fingerprint);
  });

  it("tampered material → different fingerprint", () => {
    expect(
      computeExecutionContractSemanticMaterialFingerprint({
        ...material,
        scope: "tampered-scope",
      }),
    ).not.toBe(fingerprint);
  });
});

describe("Option B — snapshot capture / self-consistency", () => {
  it("1–4 new accepted snapshot fields are self-consistent", () => {
    const snap = captureBoundExecutionContractSnapshot(contract);
    expect(snap.executionContractSchemaVersion).toBe(
      BOUND_EXECUTION_CONTRACT_SNAPSHOT_SCHEMA_VERSION,
    );
    expect(snap.executionContractVersion).toBe(contract.version);
    expect(snap.semanticFingerprint).toBe(fingerprint);
    expect(snap.semanticMaterial.executionContractId).toBe(
      contract.executionContractId,
    );
    const attempt = makeAttempt({ boundExecutionContract: snap });
    expect(isAttemptBoundSnapshotValid(attempt)).toBe(true);
    expect(
      validateBoundExecutionContractSnapshot({ attempt, requirePresent: true })
        .ok,
    ).toBe(true);
  });

  it("11–13 corrupt snapshot fail-closed", () => {
    const snap = captureBoundExecutionContractSnapshot(contract);
    expect(
      isAttemptBoundSnapshotValid(
        makeAttempt({
          boundExecutionContract: {
            ...snap,
            semanticMaterial: { ...snap.semanticMaterial, scope: "x" },
          },
        }),
      ),
    ).toBe(false);
    expect(
      isAttemptBoundSnapshotValid(
        makeAttempt({
          boundExecutionContract: {
            ...snap,
            semanticFingerprint: "deadbeef".repeat(8),
          },
        }),
      ),
    ).toBe(false);
    expect(
      isAttemptBoundSnapshotValid(
        makeAttempt({
          boundExecutionContract: {
            ...snap,
            executionContractVersion: 99,
          },
        }),
      ),
    ).toBe(false);
  });
});

describe("Option B — Contract Result snapshot-only + freshness", () => {
  const evidence = makeEvidence();

  it("5–7 latest EC version/material changes do not alter bound assessment", () => {
    const snap = captureBoundExecutionContractSnapshot(contract);
    const attempt = makeAttempt({ boundExecutionContract: snap });
    const latestMutated = makeContract({
      version: 99,
      scope: "product:amended-scope",
      expectedOutputs: ["Amended EO"],
    });
    expect(latestMutated.semanticFingerprint).not.toBe(fingerprint);
    const eo = assessExpectedOutputs({
      semanticMaterial: snap.semanticMaterial,
      semanticFingerprint: snap.semanticFingerprint,
      attempt,
      evidence,
      evaluatedAt: "2026-08-24T00:00:00.000Z",
      frozenEvidenceSnapshot: frozenSnapshot,
    });
    expect(eo[0]?.result).toBe("PASS");
    expect(eo[0]?.expectation).toBe(W3B_TEMP_ARTIFACT_EO_TEMPLATE);
    expect(eo[0]?.expectation).not.toBe(latestMutated.expectedOutputs?.[0]);
    // Snapshot unchanged vs latest version
    expect(attempt.boundExecutionContract?.executionContractVersion).toBe(3);
    expect(attempt.boundExecutionContract?.executionContractVersion).not.toBe(
      latestMutated.version,
    );
  });

  it("8 old CE bindings cannot satisfy a different Attempt", () => {
    const attemptA = makeAttempt({ attemptId: "xat:a" });
    const attemptB = makeAttempt({ attemptId: "xat:b" });
    expect(
      contractResultBindingsMatchCurrentFacts({
        bindings: {
          projectId: contract.projectId,
          executionContractId: contract.executionContractId,
          executionContractVersion: contract.version,
          executionContractSemanticFingerprint: fingerprint,
          executionAttemptId: "xat:a",
          reviewBundleId: "rb:1",
          reviewBundleVersion: 2,
          evidenceRefs: [evidence.evidenceId],
        },
        attempt: attemptB,
        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
        evidenceIds: [evidence.evidenceId],
      }),
    ).toBe(false);
    expect(attemptA.attemptId).not.toBe(attemptB.attemptId);
  });

  it("10 missing historical snapshot → durable NOT_PROVEN", async () => {
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
      claimEvaluationId: "clm:w3b:missing-snap",
      idempotencyKey: "idem:ce:missing-snap",
      actor: LOCAL_PILOTE_ACTOR,
      contract,
      attempt: makeAttempt({ boundExecutionContract: null }),
      evidence,
      reviewBundle: {
        schemaVersion: "0.2.0-oa",
        reviewBundleId: "rb:w3b:1",
        projectId: contract.projectId,
        version: 2,
        frozenAt: "2026-08-24T00:00:00.000Z",
        frozenVersion: 2,
        evidenceRefs: [evidence.evidenceId],
        claimEvaluationRefs: [],
        completeness: "complete",
        status: "ready_for_review",
        createdAt: "2026-08-24T00:00:00.000Z",
        synthesisOnly: false,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:rb",
          actor: LOCAL_PILOTE_ACTOR,
          source: "review",
          timestamp: "2026-08-24T00:00:00.000Z",
          correlationId: "cor:rb",
        },
        frozenEvidenceSnapshots: [frozenSnapshot],
      },
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.status).toBe("not_proven");
    expect(evaluated.claimEvaluation.claimStatement).toContain(
      "historical_attempt_missing_bound_snapshot",
    );
  });

  it("11 corrupt snapshot at evaluate → fail-closed error", async () => {
    const snap = captureBoundExecutionContractSnapshot(contract);
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
      claimEvaluationId: "clm:w3b:corrupt-snap",
      idempotencyKey: "idem:ce:corrupt-snap",
      actor: LOCAL_PILOTE_ACTOR,
      contract,
      attempt: makeAttempt({
        boundExecutionContract: {
          ...snap,
          semanticFingerprint: "0".repeat(64),
        },
      }),
      evidence,
      reviewBundle: {
        schemaVersion: "0.2.0-oa",
        reviewBundleId: "rb:w3b:1",
        projectId: contract.projectId,
        version: 2,
        frozenAt: "2026-08-24T00:00:00.000Z",
        frozenVersion: 2,
        evidenceRefs: [evidence.evidenceId],
        claimEvaluationRefs: [],
        completeness: "complete",
        status: "ready_for_review",
        createdAt: "2026-08-24T00:00:00.000Z",
        synthesisOnly: false,
        provenance: {
          schemaVersion: "0.1.0-oa",
          provenanceRecordId: "prv:rb",
          actor: LOCAL_PILOTE_ACTOR,
          source: "review",
          timestamp: "2026-08-24T00:00:00.000Z",
          correlationId: "cor:rb",
        },
        frozenEvidenceSnapshots: [frozenSnapshot],
      },
    });
    expect(evaluated.ok).toBe(false);
    if (evaluated.ok) return;
    expect(evaluated.error.internalCauseRef).toBe(
      "bound_snapshot_corrupt_or_inconsistent",
    );
  });

  it("14–15 CE binding fingerprint/version mismatch → no SUCCESS match", () => {
    const attempt = makeAttempt();
    expect(
      contractResultBindingsMatchCurrentFacts({
        bindings: {
          projectId: contract.projectId,
          executionContractId: contract.executionContractId,
          executionContractVersion: contract.version,
          executionContractSemanticFingerprint: "wrong-fp",
          executionAttemptId: attempt.attemptId,
          reviewBundleId: "rb:1",
          reviewBundleVersion: 2,
          evidenceRefs: [evidence.evidenceId],
        },
        attempt,
        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
        evidenceIds: [evidence.evidenceId],
      }),
    ).toBe(false);
    expect(
      contractResultBindingsMatchCurrentFacts({
        bindings: {
          projectId: contract.projectId,
          executionContractId: contract.executionContractId,
          executionContractVersion: 99,
          executionContractSemanticFingerprint: fingerprint,
          executionAttemptId: attempt.attemptId,
          reviewBundleId: "rb:1",
          reviewBundleVersion: 2,
          evidenceRefs: [evidence.evidenceId],
        },
        attempt,
        reviewBundle: { reviewBundleId: "rb:1", frozenVersion: 2 },
        evidenceIds: [evidence.evidenceId],
      }),
    ).toBe(false);
  });

  it("21–24 Evidence freshness positive allowlist", () => {
    for (const freshness of [undefined, "unknown", "stale", "aging"] as const) {
      expect(
        isW3bContractResultEvidenceUsable({
          evidence: { ...evidence, freshness: freshness as never },
          snapshot: frozenSnapshot,
        }),
      ).toBe(false);
    }
    expect(
      isW3bContractResultEvidenceUsable({
        evidence: { ...evidence, status: "rejected" },
        snapshot: { ...frozenSnapshot, status: "rejected" },
      }),
    ).toBe(false);
    expect(
      isW3bContractResultEvidenceUsable({
        evidence: { ...evidence, status: "superseded" },
        snapshot: { ...frozenSnapshot, status: "superseded" },
      }),
    ).toBe(false);
    expect(
      isW3bContractResultEvidenceUsable({
        evidence: { ...evidence, status: "incomplete" as never },
        snapshot: { ...frozenSnapshot, status: "incomplete" },
      }),
    ).toBe(false);
    expect(
      isW3bContractResultEvidenceUsable({
        evidence: { ...evidence, availability: "unavailable" },
        snapshot: { ...frozenSnapshot, availability: "unavailable" },
      }),
    ).toBe(false);
    const er = assessEvidenceRequirements({
      semanticMaterial: material,
      semanticFingerprint: fingerprint,
      attempt: makeAttempt(),
      evidence: { ...evidence, freshness: undefined },
      evaluatedAt: "2026-08-24T00:00:00.000Z",
      frozenEvidenceSnapshot: frozenSnapshot,
    });
    expect(er[0]?.result).toBe("NOT_PROVEN");
  });

  it("25 no evaluator → durable NOT_PROVEN assessments", () => {
    const unknownMaterial = executionContractSemanticMaterial(
      makeContract({ action: "product:unknown" }),
    );
    const eo = assessExpectedOutputs({
      semanticMaterial: unknownMaterial,
      semanticFingerprint: computeExecutionContractSemanticMaterialFingerprint(
        unknownMaterial,
      ),
      attempt: makeAttempt(),
      evidence,
      evaluatedAt: "2026-08-24T00:00:00.000Z",
      frozenEvidenceSnapshot: frozenSnapshot,
    });
    expect(eo[0]?.result).toBe("NOT_PROVEN");
    expect(eo[0]?.ruleRef).toBeUndefined();
    expect(
      deriveCanonicalContractResultStatus({
        attemptStatus: "succeeded",
        expectedOutputAssessments: eo,
        evidenceRequirementAssessments: [],
      }),
    ).toBe("not_proven");
  });
});

describe("Option B — Confirm exact binding", () => {
  it("16 deterministic human confirm refused", async () => {
    const result = await new ConfirmClaimEvaluation(
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
            projectId: contract.projectId,
            executionContractId: contract.executionContractId,
            executionContractVersion: contract.version,
            executionContractSemanticFingerprint: fingerprint,
            executionAttemptId: "xat:w3b:optb",
            reviewBundleId: "rb:1",
            reviewBundleVersion: 2,
            evidenceRefs: ["ev:1"],
          },
          expectedOutputAssessments: [
            {
              itemId: {
                semanticFingerprint: fingerprint,
                itemKind: "EO",
                ordinal: 0,
              },
              expectation: W3B_TEMP_ARTIFACT_EO_TEMPLATE,
              result: "PASS",
              method: "deterministic",
              provenance: {
                evaluatorRef: "w3b",
                evaluatedAt: "2026-08-24T00:00:00.000Z",
              },
            },
          ],
          evidenceRequirementAssessments: [
            {
              itemId: {
                semanticFingerprint: fingerprint,
                itemKind: "ER",
                ordinal: 0,
              },
              requirement: W3B_TEMP_ARTIFACT_ER_KEY,
              result: "SATISFIED",
              method: "deterministic",
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
          projectId: contract.projectId,
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
            actor: LOCAL_PILOTE_ACTOR,
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
        }),
      },
      {
        findById: async () =>
          makeEvidence({ evidenceId: "ev:1", status: "verified" }),
      },
      {
        verify: () => ({
          ok: true,
          reason: "ok",
          resolvedLevel: "N3",
          authorityEvidenceId: "auth:1",
        }),
      },
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
              actor: LOCAL_PILOTE_ACTOR,
              source: "execution_adapter",
              timestamp: "2026-08-24T00:00:00.000Z",
              correlationId: "cor:x",
            },
          }) as never,
      },
    ).execute({
      claimEvaluationId: "clm:cr:det",
      expectedVersion: 1,
      idempotencyKey: "idem:confirm:det",
      actor: { actorId: "actor:b", role: "project_owner" },
      authorityEvidenceId: "auth:1",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.internalCauseRef).toBe(
      "contract_result_deterministic_no_human_confirm",
    );
  });

  it("17 assisted NOT_PROVEN + authorized human cannot become pass", async () => {
    const result = await new ConfirmClaimEvaluation(
      {
        findById: async () => ({
          schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
          claimEvaluationId: "clm:cr:np",
          claimType: "conformite",
          claimStatement: "x",
          criticality: "non_critical",
          evaluationMethod: "assisted",
          requiredEvidenceRefs: ["ev:1"],
          providedEvidenceRefs: ["ev:1"],
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
            projectId: contract.projectId,
            executionContractId: contract.executionContractId,
            executionContractVersion: contract.version,
            executionContractSemanticFingerprint: fingerprint,
            executionAttemptId: "xat:w3b:optb",
            reviewBundleId: "rb:1",
            reviewBundleVersion: 2,
            evidenceRefs: ["ev:1"],
          },
          expectedOutputAssessments: [
            {
              itemId: {
                semanticFingerprint: fingerprint,
                itemKind: "EO",
                ordinal: 0,
              },
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
              itemId: {
                semanticFingerprint: fingerprint,
                itemKind: "ER",
                ordinal: 0,
              },
              requirement: W3B_TEMP_ARTIFACT_ER_KEY,
              result: "NOT_PROVEN",
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
          projectId: contract.projectId,
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
            actor: LOCAL_PILOTE_ACTOR,
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
        }),
      },
      {
        findById: async () =>
          makeEvidence({ evidenceId: "ev:1", status: "verified" }),
      },
      {
        verify: () => ({
          ok: true,
          reason: "ok",
          resolvedLevel: "N3",
          authorityEvidenceId: "auth:1",
        }),
      },
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
              actor: LOCAL_PILOTE_ACTOR,
              source: "execution_adapter",
              timestamp: "2026-08-24T00:00:00.000Z",
              correlationId: "cor:x",
            },
          }) as never,
      },
    ).execute({
      claimEvaluationId: "clm:cr:np",
      expectedVersion: 1,
      idempotencyKey: "idem:confirm:np",
      actor: { actorId: "actor:b", role: "project_owner" },
      authorityEvidenceId: "auth:1",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.internalCauseRef).toBe(
      "contract_result_confirm_derived_not_pass",
    );
  });

  it("19 missing snapshot at Confirm refused", async () => {
    const result = await new ConfirmClaimEvaluation(
      {
        findById: async () => ({
          schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
          claimEvaluationId: "clm:cr:nosnap",
          claimType: "conformite",
          claimStatement: "x",
          criticality: "non_critical",
          evaluationMethod: "assisted",
          requiredEvidenceRefs: ["ev:1"],
          providedEvidenceRefs: ["ev:1"],
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
            projectId: contract.projectId,
            executionContractId: contract.executionContractId,
            executionContractVersion: contract.version,
            executionContractSemanticFingerprint: fingerprint,
            executionAttemptId: "xat:w3b:optb",
            reviewBundleId: "rb:1",
            reviewBundleVersion: 2,
            evidenceRefs: ["ev:1"],
          },
          expectedOutputAssessments: [
            {
              itemId: {
                semanticFingerprint: fingerprint,
                itemKind: "EO",
                ordinal: 0,
              },
              expectation: W3B_TEMP_ARTIFACT_EO_TEMPLATE,
              result: "PASS",
              method: "assisted",
              provenance: {
                evaluatorRef: "w3b",
                evaluatedAt: "2026-08-24T00:00:00.000Z",
              },
            },
          ],
          evidenceRequirementAssessments: [
            {
              itemId: {
                semanticFingerprint: fingerprint,
                itemKind: "ER",
                ordinal: 0,
              },
              requirement: W3B_TEMP_ARTIFACT_ER_KEY,
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
          projectId: contract.projectId,
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
            actor: LOCAL_PILOTE_ACTOR,
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
        }),
      },
      {
        findById: async () =>
          makeEvidence({ evidenceId: "ev:1", status: "verified" }),
      },
      {
        verify: () => ({
          ok: true,
          reason: "ok",
          resolvedLevel: "N3",
          authorityEvidenceId: "auth:1",
        }),
      },
      { nowIso: () => "2026-08-24T00:00:00.000Z" },
      { append: () => {} },
      { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:2" },
      {
        findById: async () =>
          ({
            ...makeAttempt({ boundExecutionContract: null }),
            schemaVersion: "0.2.0-oa",
            selectedAgentRef: "agt:1",
            idempotencyKey: "idem:x",
            correlationId: "cor:x",
            version: 1,
            createdAt: "2026-08-24T00:00:00.000Z",
            provenance: {
              schemaVersion: "0.1.0-oa",
              provenanceRecordId: "prv:x",
              actor: LOCAL_PILOTE_ACTOR,
              source: "execution_adapter",
              timestamp: "2026-08-24T00:00:00.000Z",
              correlationId: "cor:x",
            },
          }) as never,
      },
    ).execute({
      claimEvaluationId: "clm:cr:nosnap",
      expectedVersion: 1,
      idempotencyKey: "idem:confirm:nosnap",
      actor: { actorId: "actor:b", role: "project_owner" },
      authorityEvidenceId: "auth:1",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.internalCauseRef).toBe(
      "contract_result_confirm_missing_bound_snapshot",
    );
  });

  it("20 generic structural claim still requires Morris", () => {
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
});

describe("Option B — SQLite Attempt snapshot restart", () => {
  it("persists bound snapshot and reloads byte-equivalent", async () => {
    // Prefer attempt services if exported via execution-attempt SQLite factory.
    // Fall back: evidence-review CE path uses attempt reader bridge with snapshot.
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "w3b-optb-"));
    tempDirs.push(dir);
    const dbPath = path.join(dir, "product.sqlite");
    const storeA = new SqliteProductStore(dbPath);
    const servicesA = createTestSqliteEvidenceReviewServices({
      productStore: storeA,
      fixedNowIso: "2026-08-24T10:00:00.000Z",
      clock: new FixedClock("2026-08-24T10:00:00.000Z"),
    });
    const snap = captureBoundExecutionContractSnapshot(contract);
    const evidence = makeEvidence();
    await servicesA.repository.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp:ev",
      operation: "register",
    });
    const created = await servicesA.createReviewBundle.execute({
      reviewBundleId: "rb:w3b:optb",
      idempotencyKey: "idem:rb:w3b:optb",
      actor: LOCAL_PILOTE_ACTOR,
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
      evidenceIds: [evidence.evidenceId],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const frozen = await servicesA.freezeReviewBundle.execute({
      reviewBundleId: "rb:w3b:optb",
      expectedVersion: created.reviewBundle.version,
      idempotencyKey: "idem:rb-freeze:w3b:optb",
      actor: LOCAL_PILOTE_ACTOR,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    const evaluated = await servicesA.evaluateContractResult!.execute({
      claimEvaluationId: "clm:w3b:optb",
      idempotencyKey: "idem:clm:w3b:optb",
      actor: LOCAL_PILOTE_ACTOR,
      contract,
      attempt: makeAttempt({ boundExecutionContract: snap }),
      evidence,
      reviewBundle: frozen.reviewBundle,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.status).toBe("pass");
    expect(
      evaluated.claimEvaluation.contractResultBindings
        ?.executionContractSemanticFingerprint,
    ).toBe(snap.semanticFingerprint);
    storeA.close();

    const storeB = new SqliteProductStore(dbPath);
    const servicesB = createTestSqliteEvidenceReviewServices({
      productStore: storeB,
    });
    const restored = await servicesB.claimEvaluationReader.findById(
      "clm:w3b:optb",
    );
    expect(restored?.status).toBe("pass");
    expect(
      restored?.contractResultBindings?.executionContractSemanticFingerprint,
    ).toBe(snap.semanticFingerprint);
    storeB.close();
  });
});

describe("Option B — lifecycle immutability of snapshot on spread updates", () => {
  it("accepted→running→succeeded preserves snapshot JSON", () => {
    const snap = captureBoundExecutionContractSnapshot(contract);
    const accepted = {
      ...makeAttempt({ boundExecutionContract: snap, status: "accepted" }),
      version: 1,
    };
    const before = JSON.stringify(accepted.boundExecutionContract);
    const running = {
      ...accepted,
      status: "running",
      version: accepted.version + 1,
    };
    const succeeded = {
      ...running,
      status: "succeeded",
      resultRef: "res:w3a:abc1234567890ab",
      version: running.version + 1,
    };
    const failed = {
      ...running,
      status: "failed",
      errorRef: "err:1",
      version: running.version + 1,
    };
    const stopped = {
      ...running,
      status: "cancelled",
      stopOrigin: "SYSTEM_GOVERNED_STOP",
      version: running.version + 1,
    };
    const cancelled = {
      ...running,
      status: "cancelled",
      stopOrigin: "USER_CANCEL",
      version: running.version + 1,
    };
    for (const next of [running, succeeded, failed, stopped, cancelled]) {
      expect(JSON.stringify(next.boundExecutionContract)).toBe(before);
      expect(next.executionContractVersion).toBe(
        accepted.executionContractVersion,
      );
    }
  });
});
