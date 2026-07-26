/**
 * RegisterEvidence use-case tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { ACTOR, DIGEST_A, buildServices } from "./helpers";

describe("T-A6-D1 RegisterEvidence", () => {
  it("registers manual Evidence (happy path)", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:manual-001",
      idempotencyKey: "idem-register-manual-001",
      actor: ACTOR,
      type: "document",
      source: "manual upload by reviewer",
      sourceKind: "manual",
      bindings: {
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:modeled-001",
      },
      classification: "internal",
      storageMode: "metadata_only",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.status).toBe("available");
    expect(result.evidence.version).toBe(1);
    expect(result.evidence.containsSecrets).toBe(false);
    expect(s.memoryAudit.byName("oa.evidence.registered")).toHaveLength(1);
    const event = s.memoryAudit.events[0];
    expect(JSON.stringify(event)).not.toMatch(/payload|secret|token=/i);
  });

  it("registers external Evidence", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:ext-001",
      idempotencyKey: "idem-register-ext-001",
      actor: ACTOR,
      type: "artifact",
      source: "external CI artefact ref",
      sourceKind: "external",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "internal",
      storageMode: "external_payload_ref",
      location: "refs/external/ci-001",
      digest: DIGEST_A,
      verifiablePayload: true,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.sourceKind).toBe("external");
    expect(result.evidence.digest).toBe(DIGEST_A);
  });

  it("replays identical idempotency key", async () => {
    const s = buildServices();
    const req = {
      evidenceId: "ev:idem-001",
      idempotencyKey: "idem-register-replay-001",
      actor: ACTOR,
      type: "document" as const,
      source: "notes",
      sourceKind: "manual" as const,
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public" as const,
      storageMode: "metadata_only" as const,
    };
    const first = await s.registerEvidence.execute(req);
    const second = await s.registerEvidence.execute(req);
    expect(first.ok && second.ok).toBe(true);
    if (!first.ok || !second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
    expect(second.evidence.evidenceId).toBe(first.evidence.evidenceId);
  });

  it("rejects idempotency conflict on different command", async () => {
    const s = buildServices();
    const key = "idem-register-conflict-001";
    await s.registerEvidence.execute({
      evidenceId: "ev:idem-c1",
      idempotencyKey: key,
      actor: ACTOR,
      type: "document",
      source: "notes-a",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const conflict = await s.registerEvidence.execute({
      evidenceId: "ev:idem-c2",
      idempotencyKey: key,
      actor: ACTOR,
      type: "document",
      source: "notes-b",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("IDEMPOTENCY_CONFLICT");
  });

  it("rejects secrets", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:secret-001",
      idempotencyKey: "idem-register-secret-001",
      actor: ACTOR,
      type: "document",
      source: "Bearer abcdefghijklmnop",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "restricted",
      storageMode: "metadata_only",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_SECRET_FORBIDDEN");
  });

  it("rejects missing bindings", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:bind-001",
      idempotencyKey: "idem-register-bind-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: {},
      classification: "public",
      storageMode: "metadata_only",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_BINDING_REQUIRED");
  });

  it("rejects verifiablePayload without digest", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:digest-001",
      idempotencyKey: "idem-register-digest-001",
      actor: ACTOR,
      type: "artifact",
      source: "notes",
      sourceKind: "external",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "internal",
      storageMode: "external_payload_ref",
      verifiablePayload: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_DIGEST_REQUIRED");
  });

  it("surfaces repository persistence failure", async () => {
    const s = buildServices();
    s.store.failNextSave = true;
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:fail-001",
      idempotencyKey: "idem-register-fail-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_PERSISTENCE_FAILED");
  });
});
