/**
 * W3-B M8 SQLite ClaimEvaluation durability + frozen RB path.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import { createTestSqliteEvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
  W3B_TEMP_ARTIFACT_ER_KEY,
} from "@/lib/oa/evidence-review/application/contractResultSemanticEvaluator";
import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  computeExecutionContractSemanticFingerprint,
} from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";

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

function tempDb(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "w3b-ce-"));
  tempDirs.push(dir);
  return path.join(dir, "product.sqlite");
}

function makeContract(): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:w3b:sqlite",
    projectId: "prj:w3b:sqlite",
    version: 2,
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
    idempotencyKey: "idem:ec:sqlite",
    correlationId: "cor:ec:w3b:sqlite",
  };
  return {
    ...base,
    semanticFingerprint: computeExecutionContractSemanticFingerprint(base),
  };
}

const contract = makeContract();
const boundSnap = captureBoundExecutionContractSnapshot(contract);

describe("Contract Result SQLite durability (M8)", () => {
  it("persists contract-result ClaimEvaluation after create+freeze RB and restores on new store handle", async () => {
    const dbPath = tempDb();
    const storeA = new SqliteProductStore(dbPath);
    const servicesA = createTestSqliteEvidenceReviewServices({
      productStore: storeA,
      fixedNowIso: "2026-08-24T10:00:00.000Z",
      clock: new FixedClock("2026-08-24T10:00:00.000Z"),
    });

    const evidence = {
      schemaVersion: "0.2.0-oa" as const,
      evidenceId: "ev:w3b:sqlite",
      type: "artifact" as const,
      source: "attempt",
      sourceKind: "execution_attempt" as const,
      location: "refs/x",
      producedBy: LOCAL_PILOTE_ACTOR,
      producedAt: "2026-08-24T10:00:00.000Z",
      freshness: "fresh" as const,
      status: "available" as const,
      classification: "internal" as const,
      storageMode: "metadata_only" as const,
      availability: "available" as const,
      retentionClass: "standard" as const,
      legalHold: false,
      bindings: {
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        executionAttemptId: "xat:w3b:sqlite",
      },
      containsSecrets: false as const,
      provenance: {
        schemaVersion: "0.1.0-oa" as const,
        provenanceRecordId: "prov:ev:w3b:sqlite",
        actor: LOCAL_PILOTE_ACTOR,
        source: "execution_adapter" as const,
        timestamp: "2026-08-24T10:00:00.000Z",
        correlationId: "cor:ev:w3b:sqlite",
      },
      version: 1,
      createdAt: "2026-08-24T10:00:00.000Z",
      technicalResultRef: "res:w3a:abc1234567890ab",
    };
    await servicesA.repository.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp:ev",
      operation: "register",
    });

    const created = await servicesA.createReviewBundle.execute({
      reviewBundleId: "rb:w3b:sqlite",
      idempotencyKey: "idem:rb:w3b:sqlite",
      actor: LOCAL_PILOTE_ACTOR,
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
      evidenceIds: [evidence.evidenceId],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const frozen = await servicesA.freezeReviewBundle.execute({
      reviewBundleId: "rb:w3b:sqlite",
      expectedVersion: created.reviewBundle.version,
      idempotencyKey: "idem:rb-freeze:w3b:sqlite",
      actor: LOCAL_PILOTE_ACTOR,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;

    const evaluated = await servicesA.evaluateContractResult!.execute({
      claimEvaluationId: "clm:w3b:sqlite",
      idempotencyKey: "idem:clm:w3b:sqlite",
      actor: LOCAL_PILOTE_ACTOR,
      contract,
      attempt: {
        attemptId: "xat:w3b:sqlite",
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        executionContractSemanticFingerprint: contract.semanticFingerprint,
        boundExecutionContract: boundSnap,
        status: "succeeded",
        resultRef: "res:w3a:abc1234567890ab",
      },
      evidence,
      reviewBundle: frozen.reviewBundle,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.subjectKind).toBe(
      CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
    );
    expect(evaluated.claimEvaluation.status).toBe("pass");
    expect(evaluated.claimEvaluation.reviewBundleVersion).toBe(
      frozen.reviewBundle.frozenVersion,
    );

    storeA.close();
    const storeB = new SqliteProductStore(dbPath);
    const servicesB = createTestSqliteEvidenceReviewServices({
      productStore: storeB,
    });
    const restored = await servicesB.claimEvaluationReader.findById(
      "clm:w3b:sqlite",
    );
    expect(restored?.status).toBe("pass");
    expect(restored?.expectedOutputAssessments?.[0]?.result).toBe("PASS");
    storeB.close();
  });

  it("rejects draft ReviewBundle at evaluate time", async () => {
    const dbPath = tempDb();
    const store = new SqliteProductStore(dbPath);
    const services = createTestSqliteEvidenceReviewServices({
      productStore: store,
      fixedNowIso: "2026-08-24T10:00:00.000Z",
      clock: new FixedClock("2026-08-24T10:00:00.000Z"),
    });
    const evidence = {
      schemaVersion: "0.2.0-oa" as const,
      evidenceId: "ev:w3b:draft",
      type: "artifact" as const,
      source: "attempt",
      sourceKind: "execution_attempt" as const,
      location: "refs/x",
      producedBy: LOCAL_PILOTE_ACTOR,
      producedAt: "2026-08-24T10:00:00.000Z",
      freshness: "fresh" as const,
      status: "available" as const,
      classification: "internal" as const,
      storageMode: "metadata_only" as const,
      availability: "available" as const,
      retentionClass: "standard" as const,
      legalHold: false,
      bindings: {
        projectId: contract.projectId,
        executionContractId: contract.executionContractId,
        executionAttemptId: "xat:w3b:draft",
      },
      containsSecrets: false as const,
      provenance: {
        schemaVersion: "0.1.0-oa" as const,
        provenanceRecordId: "prov:ev:w3b:draft",
        actor: LOCAL_PILOTE_ACTOR,
        source: "execution_adapter" as const,
        timestamp: "2026-08-24T10:00:00.000Z",
        correlationId: "cor:ev:w3b:draft",
      },
      version: 1,
      createdAt: "2026-08-24T10:00:00.000Z",
      technicalResultRef: "res:w3a:deadbeef12345678",
    };
    await services.repository.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp:ev:draft",
      operation: "register",
    });
    const created = await services.createReviewBundle.execute({
      reviewBundleId: "rb:w3b:draft",
      idempotencyKey: "idem:rb:w3b:draft",
      actor: LOCAL_PILOTE_ACTOR,
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
      evidenceIds: [evidence.evidenceId],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const evaluated = await services.evaluateContractResult!.execute({
      claimEvaluationId: "clm:w3b:draft",
      idempotencyKey: "idem:clm:w3b:draft",
      actor: LOCAL_PILOTE_ACTOR,
      contract,
      attempt: {
        attemptId: "xat:w3b:draft",
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        executionContractSemanticFingerprint: contract.semanticFingerprint,
        boundExecutionContract: boundSnap,
        status: "succeeded",
        resultRef: "res:w3a:deadbeef12345678",
      },
      evidence,
      reviewBundle: created.reviewBundle,
    });
    expect(evaluated.ok).toBe(false);
    if (evaluated.ok) return;
    expect(evaluated.error.internalCauseRef).toBe("review_bundle_not_frozen");
    store.close();
  });
});
