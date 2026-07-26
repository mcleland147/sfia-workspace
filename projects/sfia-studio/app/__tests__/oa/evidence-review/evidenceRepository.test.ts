/**
 * MemoryEvidenceRepository OCC / isolation tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  EvidenceDomainError,
  MemoryEvidenceRepository,
  MemoryEvidenceStore,
  type Evidence,
} from "@/lib/oa/evidence-review";
import { NOW } from "./helpers";

function base(overrides: Partial<Evidence> & { evidenceId: string }): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    type: "document",
    source: "notes",
    sourceKind: "manual",
    producedAt: NOW,
    status: "available",
    classification: "public",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId: "prj:campus360-oa" },
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:repo-1",
      actor: { actorId: "actor:morris", role: "decision_maker" },
      source: "human_decision",
      timestamp: NOW,
      correlationId: "cor:repo-1",
    },
    version: 1,
    createdAt: NOW,
    idempotencyKey: `idem-${overrides.evidenceId}`,
    ...overrides,
  };
}

function buildRepo() {
  const store = new MemoryEvidenceStore();
  return { store, repo: new MemoryEvidenceRepository(store) };
}

describe("T-A6-D1 MemoryEvidenceRepository", () => {
  it("creates and returns a defensive clone", async () => {
    const { repo } = buildRepo();
    const evidence = base({ evidenceId: "ev:repo-1" });
    await repo.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp1",
      operation: "register",
    });
    const found = await repo.findById("ev:repo-1");
    expect(found?.status).toBe("available");
    expect(found).not.toBe(evidence);
    if (found) found.status = "verified";
    const again = await repo.findById("ev:repo-1");
    expect(again?.status).toBe("available");
  });

  it("refuses create with version other than 1", async () => {
    const { repo } = buildRepo();
    await expect(
      repo.create(base({ evidenceId: "ev:repo-2", version: 2 })),
    ).rejects.toBeInstanceOf(EvidenceDomainError);
  });

  it("refuses duplicate evidenceId", async () => {
    const { repo } = buildRepo();
    await repo.create(base({ evidenceId: "ev:repo-3" }));
    await expect(
      repo.create(base({ evidenceId: "ev:repo-3" })),
    ).rejects.toMatchObject({ detailCode: "EVIDENCE_ALREADY_EXISTS" });
  });

  it("enforces OCC on update", async () => {
    const { repo } = buildRepo();
    await repo.create(base({ evidenceId: "ev:repo-4" }));
    await expect(
      repo.update(
        base({ evidenceId: "ev:repo-4", version: 2, status: "stale" }),
        9,
      ),
    ).rejects.toMatchObject({ detailCode: "VERSION_CONFLICT" });
  });

  it("increments version monotonically on update", async () => {
    const { repo } = buildRepo();
    await repo.create(base({ evidenceId: "ev:repo-5" }));
    await repo.update(
      base({
        evidenceId: "ev:repo-5",
        version: 2,
        status: "unavailable",
        availability: "unavailable",
      }),
      1,
    );
    const found = await repo.findById("ev:repo-5");
    expect(found?.version).toBe(2);
  });

  it("resolves by idempotency key", async () => {
    const { repo } = buildRepo();
    const evidence = base({ evidenceId: "ev:repo-6" });
    await repo.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp6",
      operation: "register",
    });
    const found = await repo.findByIdempotencyKey(`idem-${evidence.evidenceId}`);
    expect(found?.evidence.evidenceId).toBe("ev:repo-6");
  });

  it("isolates store instances", async () => {
    const a = buildRepo();
    const b = buildRepo();
    await a.repo.create(base({ evidenceId: "ev:iso-a" }));
    expect(await b.repo.findById("ev:iso-a")).toBeNull();
  });
});
