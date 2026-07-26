/**
 * VerifyEvidenceIntegrity + MarkEvidenceUnavailable tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { ACTOR, DIGEST_A, DIGEST_B, buildServices } from "./helpers";

async function registerWithDigest(s: ReturnType<typeof buildServices>) {
  const result = await s.registerEvidence.execute({
    evidenceId: "ev:verify-001",
    idempotencyKey: "idem-verify-register-001",
    actor: ACTOR,
    type: "artifact",
    source: "fixture artefact",
    sourceKind: "external",
    bindings: { projectId: "prj:campus360-oa" },
    classification: "internal",
    storageMode: "internal_payload_ref",
    location: "refs/evidence/verify-001",
    digest: DIGEST_A,
    verifiablePayload: true,
  });
  expect(result.ok).toBe(true);
  return result;
}

describe("T-A6-D1 VerifyEvidenceIntegrity", () => {
  it("verifies matching digest", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", {
      availability: "available",
      digest: DIGEST_A,
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.status).toBe("verified");
    expect(result.evidence.version).toBe(2);
    expect(s.memoryAudit.byName("oa.evidence.integrity_verified")).toHaveLength(
      1,
    );
  });

  it("rejects digest mismatch", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", {
      availability: "available",
      digest: DIGEST_B,
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_INTEGRITY_MISMATCH");
  });

  it("rejects missing digest on Evidence", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:nodigest-001",
      idempotencyKey: "idem-verify-nodigest-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:nodigest-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_DIGEST_REQUIRED");
  });

  it("rejects unavailable payload", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", { failWith: "unavailable" });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_UNAVAILABLE");
  });

  it("rejects fake timeout", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", { failWith: "timeout" });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PAYLOAD_METADATA_ERROR");
  });

  it("rejects OCC conflict", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", {
      availability: "available",
      digest: DIGEST_A,
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 99,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("VERSION_CONFLICT");
  });

  it("refuses verify after MarkEvidenceUnavailable", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    const marked = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "fixture revoked",
      idempotencyKey: "idem-mark-before-verify-001",
    });
    expect(marked.ok).toBe(true);
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 2,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_UNAVAILABLE");
  });

  it("never executes payload (metadataOnly only)", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", {
      availability: "available",
      digest: DIGEST_A,
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(true);
    const audit = JSON.stringify(s.memoryAudit.events);
    expect(audit).not.toMatch(/execute|shell|filesystem|network/i);
  });
});

describe("T-A6-D1 MarkEvidenceUnavailable", () => {
  it("marks Evidence unavailable", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:unavail-001",
      idempotencyKey: "idem-unavail-reg-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const result = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:unavail-001",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "source withdrawn",
      idempotencyKey: "idem-unavail-001",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.availability).toBe("unavailable");
    expect(result.evidence.status).toBe("unavailable");
    expect(result.evidence.version).toBe(2);
    expect(result.evidence.unavailableReason).toBe("source withdrawn");
  });

  it("rejects missing Evidence", async () => {
    const s = buildServices();
    const result = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:missing-unavail",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "gone",
      idempotencyKey: "idem-unavail-missing-001",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_NOT_FOUND");
  });

  it("rejects version conflict", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:unavail-occ",
      idempotencyKey: "idem-unavail-occ-reg",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const result = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:unavail-occ",
      actor: ACTOR,
      expectedVersion: 9,
      reason: "stale",
      idempotencyKey: "idem-unavail-occ-001",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("VERSION_CONFLICT");
  });

  it("rejects secret in reason", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:unavail-secret",
      idempotencyKey: "idem-unavail-secret-reg",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const result = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:unavail-secret",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "api_key=abcdefghijklmnopqrstuvwxyz",
      idempotencyKey: "idem-unavail-secret-001",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_SECRET_FORBIDDEN");
  });

  it("idempotent replay of mark unavailable", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:unavail-idem",
      idempotencyKey: "idem-unavail-idem-reg",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const req = {
      evidenceId: "ev:unavail-idem",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "withdrawn",
      idempotencyKey: "idem-unavail-idem-001",
    };
    const first = await s.markEvidenceUnavailable.execute(req);
    const second = await s.markEvidenceUnavailable.execute(req);
    expect(first.ok && second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
  });
});
