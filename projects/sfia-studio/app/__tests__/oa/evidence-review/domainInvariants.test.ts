/**
 * T-A6-D1 Evidence domain invariants.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  isAttemptOwnerOfEvidence,
  validateEvidenceShape,
  type Evidence,
} from "@/lib/oa/evidence-review";
import { DIGEST_A, NOW } from "./helpers";

function baseEvidence(overrides: Partial<Evidence> = {}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: "ev:domain-001",
    type: "document",
    source: "manual upload",
    sourceKind: "manual",
    producedAt: NOW,
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    freshness: "fresh",
    bindings: { projectId: "prj:campus360-oa" },
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:domain-001",
      actor: { actorId: "actor:morris", role: "decision_maker" },
      source: "human_decision",
      timestamp: NOW,
      correlationId: "cor:domain-001",
    },
    version: 1,
    createdAt: NOW,
    ...overrides,
  };
}

describe("T-A6-D1 Evidence domain", () => {
  it("accepts a valid Evidence", () => {
    expect(validateEvidenceShape(baseEvidence())).toBeNull();
  });

  it("requires source", () => {
    expect(
      validateEvidenceShape(baseEvidence({ source: "" }))?.detailCode,
    ).toBe("EVIDENCE_SOURCE_REQUIRED");
  });

  it("requires provenance", () => {
    const evidence = baseEvidence();
    // @ts-expect-error intentional
    delete evidence.provenance;
    expect(validateEvidenceShape(evidence)?.detailCode).toBe("EVIDENCE_INVALID");
  });

  it("rejects empty bindings", () => {
    expect(
      validateEvidenceShape(baseEvidence({ bindings: {} }))?.detailCode,
    ).toBe("EVIDENCE_BINDING_REQUIRED");
  });

  it("rejects invalid binding prefixes", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({ bindings: { projectId: "bad:id" } }),
      )?.detailCode,
    ).toBe("EVIDENCE_BINDING_REQUIRED");
  });

  it("rejects secrets in source", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({ source: "token=super-secret-value-here" }),
      )?.detailCode,
    ).toBe("EVIDENCE_SECRET_FORBIDDEN");
  });

  it("requires digest when verifiablePayload is true", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({ verifiablePayload: true }),
      )?.detailCode,
    ).toBe("EVIDENCE_DIGEST_REQUIRED");
  });

  it("requires digest when status is verified", () => {
    expect(
      validateEvidenceShape(baseEvidence({ status: "verified" }))?.detailCode,
    ).toBe("EVIDENCE_DIGEST_REQUIRED");
  });

  it("accepts verified with digest", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({ status: "verified", digest: DIGEST_A }),
      ),
    ).toBeNull();
  });

  it("requires executionAttemptId when sourceKind is execution_attempt", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({
          sourceKind: "execution_attempt",
          bindings: { projectId: "prj:campus360-oa" },
        }),
      )?.detailCode,
    ).toBe("EVIDENCE_BINDING_REQUIRED");
  });

  it("enforces unavailable availability/status pairing", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({
          availability: "unavailable",
          status: "verified",
          digest: DIGEST_A,
        }),
      )?.detailCode,
    ).toBe("EVIDENCE_UNAVAILABLE");
  });

  it("documents Attempt is never Evidence owner", () => {
    expect(isAttemptOwnerOfEvidence()).toBe(false);
  });

  it("rejects containsSecrets true", () => {
    expect(
      validateEvidenceShape(
        // @ts-expect-error intentional adversarial
        baseEvidence({ containsSecrets: true }),
      )?.detailCode,
    ).toBe("EVIDENCE_SECRET_FORBIDDEN");
  });
});
