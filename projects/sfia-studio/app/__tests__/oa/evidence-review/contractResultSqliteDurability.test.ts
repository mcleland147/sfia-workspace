/**
 * W3-B M8 SQLite ClaimEvaluation durability.
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
import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { Evidence, ReviewBundle } from "@/lib/oa/evidence-review";

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

const contract: ExecutionContract = {
  schemaVersion: "0.2.0-oa",
  executionContractId: "xct:w3b:sqlite",
  projectId: "prj:w3b:sqlite",
  version: 2,
  status: "confirmed",
  semanticFingerprint: "fp:w3b:sqlite",
  action: "generate",
  target: "artifact",
  scope: "scope",
  requiredAuthority: "N3",
  constraints: [],
  stopConditions: [],
  evidenceRequirements: ["evreq:1"],
  expectedOutputs: ["out:1"],
  requiredCapabilities: ["generate"],
  reversibility: "reversible",
  idempotencyKey: "idem:ec:sqlite",
  correlationId: "cor:ec:w3b:sqlite",
};

describe("Contract Result SQLite durability (M8)", () => {
  it("persists contract-result ClaimEvaluation and restores on new store handle", async () => {
    const dbPath = tempDb();
    const storeA = new SqliteProductStore(dbPath);
    const servicesA = createTestSqliteEvidenceReviewServices({
      productStore: storeA,
      fixedNowIso: "2026-08-24T10:00:00.000Z",
      clock: new FixedClock("2026-08-24T10:00:00.000Z"),
    });

    const evidence: Evidence = {
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:w3b:sqlite",
      type: "artifact",
      source: "attempt",
      sourceKind: "execution_attempt",
      location: "refs/x",
      producedBy: LOCAL_PILOTE_ACTOR,
      producedAt: "2026-08-24T10:00:00.000Z",
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
        executionAttemptId: "xat:w3b:sqlite",
      },
      containsSecrets: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prov:ev:w3b:sqlite",
        actor: LOCAL_PILOTE_ACTOR,
        source: "execution_adapter",
        timestamp: "2026-08-24T10:00:00.000Z",
        correlationId: "cor:ev:w3b:sqlite",
      },
      version: 1,
      createdAt: "2026-08-24T10:00:00.000Z",
      technicalResultRef: "res:w3b:sqlite",
    };
    await servicesA.repository.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp:ev",
      operation: "register",
    });

    const bundle: ReviewBundle = {
      schemaVersion: "0.2.0-oa",
      reviewBundleId: "rb:w3b:sqlite",
      projectId: contract.projectId,
      executionContractId: contract.executionContractId,
      version: 1,
      evidenceRefs: [evidence.evidenceId],
      claimEvaluationRefs: [],
      completeness: "complete",
      status: "draft",
      createdAt: "2026-08-24T10:00:00.000Z",
      synthesisOnly: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prov:rb:w3b:sqlite",
        actor: LOCAL_PILOTE_ACTOR,
        source: "review",
        timestamp: "2026-08-24T10:00:00.000Z",
        correlationId: "cor:rb:w3b:sqlite",
      },
    };
    await servicesA.reviewBundleRepository.create(bundle);

    const evaluated = await servicesA.evaluateContractResult.execute({
      claimEvaluationId: "clm:w3b:sqlite",
      idempotencyKey: "idem:clm:w3b:sqlite",
      actor: LOCAL_PILOTE_ACTOR,
      contract,
      attempt: {
        attemptId: "xat:w3b:sqlite",
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        status: "succeeded",
        resultRef: "res:w3b:sqlite",
      },
      evidence,
      reviewBundle: bundle,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.subjectKind).toBe(
      CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
    );
    expect(evaluated.claimEvaluation.status).toBe("pass");

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
});
