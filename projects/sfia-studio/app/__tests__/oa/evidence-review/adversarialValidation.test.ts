/**
 * T-A6-D1 adversarial validation tests (post-correction findings).
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  validateEvidenceShape,
  validateProvenanceSecrets,
  type Evidence,
} from "@/lib/oa/evidence-review";
import { ACTOR, DIGEST_A, NOW, SYSTEM_ACTOR, buildServices } from "./helpers";

function baseEvidence(overrides: Partial<Evidence> = {}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: "ev:adv-001",
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
      provenanceRecordId: "prv:adv-001",
      actor: { actorId: "actor:morris", role: "decision_maker" },
      source: "human_decision",
      timestamp: NOW,
      correlationId: "cor:adv-001",
    },
    version: 1,
    createdAt: NOW,
    ...overrides,
  };
}

describe("T-A6-D1 adversarial validation corrections", () => {
  it("F-A6-D1-01: verify without payload script must not mint verified", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:no-script-verify",
      idempotencyKey: "idem-adv-noscript-001",
      actor: ACTOR,
      type: "artifact",
      source: "fixture",
      sourceKind: "external",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "internal",
      storageMode: "internal_payload_ref",
      digest: DIGEST_A,
      verifiablePayload: true,
    });
    // no setScript — fail-closed
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:no-script-verify",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PAYLOAD_METADATA_ERROR");
    const stored = await s.repository.findById("ev:no-script-verify");
    expect(stored?.status).toBe("available");
  });

  it("F-A6-D1-01: script without digest must not echo expectedDigest", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:script-nodigest",
      idempotencyKey: "idem-adv-script-nodigest-001",
      actor: ACTOR,
      type: "artifact",
      source: "fixture",
      sourceKind: "external",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "internal",
      storageMode: "internal_payload_ref",
      digest: DIGEST_A,
      verifiablePayload: true,
    });
    s.fakePayload.setScript("ev:script-nodigest", {
      availability: "available",
      // digest intentionally omitted
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:script-nodigest",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_DIGEST_REQUIRED");
  });

  it("F-A6-D1-02: rejects secret in provenance actor displayName", () => {
    const evidence = baseEvidence({
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:secret-prov",
        actor: {
          actorId: "actor:morris",
          role: "decision_maker",
          displayName: "Bearer abcdefghijklmnop",
        },
        source: "human_decision",
        timestamp: NOW,
        correlationId: "cor:secret-prov",
      },
    });
    expect(validateProvenanceSecrets(evidence.provenance)?.detailCode).toBe(
      "EVIDENCE_SECRET_FORBIDDEN",
    );
    expect(validateEvidenceShape(evidence)?.detailCode).toBe(
      "EVIDENCE_SECRET_FORBIDDEN",
    );
  });

  it("F-A6-D1-02: Register rejects secret in actor displayName", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:secret-actor",
      idempotencyKey: "idem-adv-secret-actor-001",
      actor: {
        ...ACTOR,
        displayName: "token=super-secret-value-here",
      },
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_SECRET_FORBIDDEN");
  });

  it("refuses Register with status verified", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:reg-verified-forbidden",
      idempotencyKey: "idem-adv-reg-verified-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
      // @ts-expect-error adversarial — verified forbidden at register
      status: "verified",
      digest: DIGEST_A,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_VERIFIED_FORBIDDEN");
  });

  it("refuses invalid digest format on Register", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:bad-digest",
      idempotencyKey: "idem-adv-bad-digest-001",
      actor: ACTOR,
      type: "artifact",
      source: "fixture",
      sourceKind: "external",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "internal",
      storageMode: "external_payload_ref",
      digest: "sha256:not-a-valid-hex-digest" as Evidence["digest"],
      verifiablePayload: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_INVALID");
  });

  it("refuses terminal ingest without diagnostic facts (W3-B fail-closed)", async () => {
    const s = buildServices();
    for (const status of ["timeout", "cancelled"] as const) {
      const attemptId = `xat:adv-${status}`;
      s.fakeAttempts.seed({
        attemptId,
        executionContractId: "xct:oa-001",
        executionContractVersion: 1,
        status,
        resultRef: "res:should-not-matter",
      });
      const result = await s.ingestExecutionAttemptEvidence.execute({
        evidenceId: `ev:adv-${status}`,
        executionAttemptId: attemptId,
        idempotencyKey: `idem-adv-ingest-${status}-001`,
        actor: SYSTEM_ACTOR,
        classification: "internal",
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.detailCode).toBe("ATTEMPT_RESULT_UNAVAILABLE");
      }
    }
  });

  it("defensive clone: nested bindings mutation after get does not affect store", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:clone-nested",
      idempotencyKey: "idem-adv-clone-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const found = await s.repository.findById("ev:clone-nested");
    expect(found).not.toBeNull();
    if (!found) return;
    found.bindings.projectId = "prj:mutated";
    found.provenance.actor.displayName = "mutated";
    const again = await s.repository.findById("ev:clone-nested");
    expect(again?.bindings.projectId).toBe("prj:campus360-oa");
    expect(again?.provenance.actor.displayName).toBeUndefined();
  });

  it("OCC concurrent stale update is refused", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:occ-race",
      idempotencyKey: "idem-adv-occ-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const [a, b] = await Promise.all([
      s.markEvidenceUnavailable.execute({
        evidenceId: "ev:occ-race",
        actor: ACTOR,
        expectedVersion: 1,
        reason: "first",
        idempotencyKey: "idem-adv-occ-a-001",
      }),
      s.markEvidenceUnavailable.execute({
        evidenceId: "ev:occ-race",
        actor: ACTOR,
        expectedVersion: 1,
        reason: "second",
        idempotencyKey: "idem-adv-occ-b-001",
      }),
    ]);
    const oks = [a, b].filter((r) => r.ok);
    const fails = [a, b].filter((r) => !r.ok);
    expect(oks).toHaveLength(1);
    expect(fails).toHaveLength(1);
    if (!fails[0].ok) {
      expect(fails[0].error.detailCode).toBe("VERSION_CONFLICT");
    }
  });
});
