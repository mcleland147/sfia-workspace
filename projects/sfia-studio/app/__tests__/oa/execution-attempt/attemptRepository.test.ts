/**
 * T-A5 repository invariants: OCC, activeByContractId, rebuild, drift,
 * modeled shape guard.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  ExecutionAttemptDomainError,
  MemoryExecutionAttemptRepository,
  MemoryExecutionAttemptStore,
  validateAttemptShape,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";
import { NOW } from "./helpers";

function baseAttempt(
  overrides: Partial<ExecutionAttempt> & { attemptId: string },
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:oa-001",
    executionContractVersion: 3,
    selectedAgentRef: "agt:alpha",
    status: "accepted",
    idempotencyKey: `idem-${overrides.attemptId}`,
    correlationId: "cor:test-0001",
    version: 1,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:test-1",
      actor: { actorId: "actor:morris", role: "decision_maker" },
      source: "human_decision",
      timestamp: NOW,
      correlationId: "cor:test-0001",
    },
    selectionStrategy: "capabilities_deterministic",
    selectionProfile: "standard",
    selectionExpiresAt: "2026-07-25T06:15:00.000Z",
    ...overrides,
  };
}

function buildRepo() {
  const store = new MemoryExecutionAttemptStore();
  return { store, repo: new MemoryExecutionAttemptRepository(store) };
}

describe("T-A5 MemoryExecutionAttemptRepository", () => {
  it("creates an accepted attempt at version 1 and returns a clone", async () => {
    const { repo } = buildRepo();
    const attempt = baseAttempt({ attemptId: "xat:a1" });
    await repo.create(attempt);
    const found = await repo.findById("xat:a1");
    expect(found?.status).toBe("accepted");
    expect(found).not.toBe(attempt);
    if (found) {
      found.status = "succeeded";
    }
    const again = await repo.findById("xat:a1");
    expect(again?.status).toBe("accepted");
  });

  it("refuses create with a version other than 1", async () => {
    const { repo } = buildRepo();
    await expect(
      repo.create(baseAttempt({ attemptId: "xat:a1", version: 2 })),
    ).rejects.toBeInstanceOf(ExecutionAttemptDomainError);
  });

  it("refuses a duplicate attemptId", async () => {
    const { repo } = buildRepo();
    await repo.create(baseAttempt({ attemptId: "xat:a1" }));
    await expect(
      repo.create(baseAttempt({ attemptId: "xat:a1" })),
    ).rejects.toMatchObject({ detailCode: "ATTEMPT_ALREADY_EXISTS" });
  });

  it("refuses a reused idempotency key across attempts", async () => {
    const { repo } = buildRepo();
    await repo.create(baseAttempt({ attemptId: "xat:a1" }));
    await expect(
      repo.create(
        baseAttempt({ attemptId: "xat:a2", idempotencyKey: "idem-xat:a1" }),
      ),
    ).rejects.toMatchObject({ detailCode: "ATTEMPT_IDEMPOTENCY_CONFLICT" });
  });

  it("resolves an attempt by idempotency key", async () => {
    const { repo } = buildRepo();
    await repo.create(baseAttempt({ attemptId: "xat:a1" }));
    const found = await repo.findByIdempotencyKey("idem-xat:a1");
    expect(found?.attemptId).toBe("xat:a1");
    expect(await repo.findByIdempotencyKey("idem-unknown")).toBeNull();
  });

  it("enforces OCC on update (stale expectedVersion)", async () => {
    const { repo } = buildRepo();
    await repo.create(baseAttempt({ attemptId: "xat:a1" }));
    const running = baseAttempt({
      attemptId: "xat:a1",
      status: "running",
      version: 2,
      launchedAt: NOW,
      startedAt: NOW,
    });
    await expect(repo.update(running, 99)).rejects.toMatchObject({
      detailCode: "VERSION_CONFLICT",
    });
  });

  it("enforces monotone versioning on update", async () => {
    const { repo } = buildRepo();
    await repo.create(baseAttempt({ attemptId: "xat:a1" }));
    const bad = baseAttempt({
      attemptId: "xat:a1",
      status: "running",
      version: 5,
      launchedAt: NOW,
      startedAt: NOW,
    });
    await expect(repo.update(bad, 1)).rejects.toMatchObject({
      detailCode: "VERSION_CONFLICT",
    });
  });

  it("accepts a valid update and bumps the stored version", async () => {
    const { repo } = buildRepo();
    await repo.create(baseAttempt({ attemptId: "xat:a1" }));
    await repo.update(
      baseAttempt({
        attemptId: "xat:a1",
        status: "running",
        version: 2,
        launchedAt: NOW,
        startedAt: NOW,
      }),
      1,
    );
    const found = await repo.findById("xat:a1");
    expect(found?.status).toBe("running");
    expect(found?.version).toBe(2);
  });

  it("reserves at most one active attempt per contract", async () => {
    const { repo } = buildRepo();
    await repo.reserveActiveContract("xct:oa-001", "xat:a1");
    await expect(
      repo.reserveActiveContract("xct:oa-001", "xat:a2"),
    ).rejects.toMatchObject({ detailCode: "EXECUTION_ALREADY_ACTIVE" });
  });

  it("is idempotent when the same attempt re-reserves", async () => {
    const { repo } = buildRepo();
    await repo.reserveActiveContract("xct:oa-001", "xat:a1");
    await expect(
      repo.reserveActiveContract("xct:oa-001", "xat:a1"),
    ).resolves.toBeUndefined();
  });

  it("releases the active reservation only for the owning attempt", async () => {
    const { repo } = buildRepo();
    await repo.reserveActiveContract("xct:oa-001", "xat:a1");
    await repo.releaseActiveContract("xct:oa-001", "xat:other");
    expect(
      (await repo.findActiveByContract("xct:oa-001")) === null,
    ).toBe(true);
    await repo.create(baseAttempt({ attemptId: "xat:a1" }));
    expect((await repo.findActiveByContract("xct:oa-001"))?.attemptId).toBe(
      "xat:a1",
    );
    await repo.releaseActiveContract("xct:oa-001", "xat:a1");
    expect(await repo.findActiveByContract("xct:oa-001")).toBeNull();
  });

  it("rebuilds the active index from non-terminal attempts", async () => {
    const { store, repo } = buildRepo();
    await repo.create(baseAttempt({ attemptId: "xat:a1" }));
    await repo.create(
      baseAttempt({
        attemptId: "xat:a2",
        executionContractId: "xct:oa-002",
        status: "accepted",
      }),
    );
    store.activeByContractId.clear();
    await repo.rebuildActiveIndex();
    expect((await repo.findActiveByContract("xct:oa-001"))?.attemptId).toBe(
      "xat:a1",
    );
    expect((await repo.findActiveByContract("xct:oa-002"))?.attemptId).toBe(
      "xat:a2",
    );
  });

  it("excludes terminal attempts from the rebuilt index", async () => {
    const { store, repo } = buildRepo();
    await repo.create(baseAttempt({ attemptId: "xat:a1" }));
    await repo.update(
      baseAttempt({
        attemptId: "xat:a1",
        status: "cancelled",
        cancelledAt: NOW,
        version: 2,
      }),
      1,
    );
    store.activeByContractId.set("xct:oa-001", "xat:a1");
    await repo.rebuildActiveIndex();
    expect(await repo.findActiveByContract("xct:oa-001")).toBeNull();
  });

  it("refuses to rebuild when two non-terminal attempts share a contract", async () => {
    const { store, repo } = buildRepo();
    store.attempts.set("xat:a1", baseAttempt({ attemptId: "xat:a1" }));
    store.attempts.set("xat:a2", baseAttempt({ attemptId: "xat:a2" }));
    await expect(repo.rebuildActiveIndex()).rejects.toMatchObject({
      detailCode: "ACTIVE_INDEX_DRIFT",
    });
  });

  it("detects drift when the index points at a missing attempt", async () => {
    const { store, repo } = buildRepo();
    store.activeByContractId.set("xct:oa-001", "xat:ghost");
    const drifts = await repo.detectActiveIndexDrift();
    expect(drifts.map((d) => d.reason)).toContain("indexed_attempt_missing");
  });

  it("detects drift when the index points at a terminal attempt", async () => {
    const { store, repo } = buildRepo();
    store.attempts.set(
      "xat:a1",
      baseAttempt({
        attemptId: "xat:a1",
        status: "succeeded",
        resultRef: "res:ok",
        completedAt: NOW,
        launchedAt: NOW,
        startedAt: NOW,
      }),
    );
    store.activeByContractId.set("xct:oa-001", "xat:a1");
    const drifts = await repo.detectActiveIndexDrift();
    expect(drifts.map((d) => d.reason)).toContain("indexed_attempt_terminal");
  });

  it("detects drift when a non-terminal attempt is not indexed", async () => {
    const { store, repo } = buildRepo();
    store.attempts.set("xat:a1", baseAttempt({ attemptId: "xat:a1" }));
    const drifts = await repo.detectActiveIndexDrift();
    expect(drifts.map((d) => d.reason)).toContain("active_attempt_not_indexed");
  });

  it("fails closed on assertActiveIndexConsistent when drift exists", async () => {
    const { store, repo } = buildRepo();
    store.attempts.set("xat:a1", baseAttempt({ attemptId: "xat:a1" }));
    await expect(repo.assertActiveIndexConsistent()).rejects.toMatchObject({
      detailCode: "ACTIVE_INDEX_DRIFT",
    });
    await repo.rebuildActiveIndex();
    await expect(repo.assertActiveIndexConsistent()).resolves.toBeUndefined();
  });

  it("honours the failNextSave hook exactly once", async () => {
    const { store, repo } = buildRepo();
    store.failNextSave = true;
    await expect(
      repo.create(baseAttempt({ attemptId: "xat:a1" })),
    ).rejects.toMatchObject({ detailCode: "EXECUTION_PERSISTENCE_FAILED" });
    await expect(
      repo.create(baseAttempt({ attemptId: "xat:a1" })),
    ).resolves.toBeUndefined();
  });

  it("rolls back a failed transaction", async () => {
    const { store, repo } = buildRepo();
    await expect(
      store.runInTransaction(async () => {
        await repo.create(baseAttempt({ attemptId: "xat:a1" }));
        throw new Error("boom");
      }),
    ).rejects.toThrow("boom");
    expect(await repo.findById("xat:a1")).toBeNull();
  });

  it("lists attempts of a contract in deterministic order", async () => {
    const { repo } = buildRepo();
    await repo.create(baseAttempt({ attemptId: "xat:b" }));
    await repo.create(
      baseAttempt({ attemptId: "xat:a", executionContractId: "xct:oa-001" }),
    );
    await repo.create(
      baseAttempt({ attemptId: "xat:c", executionContractId: "xct:oa-002" }),
    );
    const listed = await repo.listByContract("xct:oa-001");
    expect(listed.map((a) => a.attemptId)).toEqual(["xat:a", "xat:b"]);
  });
});

describe("T-A5 modeled shape guard", () => {
  it("accepts a well-formed accepted attempt", () => {
    expect(validateAttemptShape(baseAttempt({ attemptId: "xat:a1" }))).toBeNull();
  });

  it.each(["planned", "blocked", "starting", "partial", "completed"])(
    "refuses the non-modeled attempt status %s",
    (status) => {
      const violation = validateAttemptShape(
        baseAttempt({
          attemptId: "xat:a1",
          status: status as ExecutionAttempt["status"],
        }),
      );
      expect(violation?.reason).toBe(`forbidden_status_${status}`);
    },
  );

  it("requires selection fields on accepted", () => {
    const violation = validateAttemptShape(
      baseAttempt({ attemptId: "xat:a1", selectionExpiresAt: undefined }),
    );
    expect(violation?.reason).toBe("accepted_requires_selection_fields");
  });

  it("refuses capabilities_deterministic on the critical profile", () => {
    const violation = validateAttemptShape(
      baseAttempt({ attemptId: "xat:a1", selectionProfile: "critical" }),
    );
    expect(violation?.reason).toBe(
      "capabilities_deterministic_forbidden_on_critical",
    );
  });

  it("requires resultRef and completedAt on succeeded", () => {
    const violation = validateAttemptShape(
      baseAttempt({
        attemptId: "xat:a1",
        status: "succeeded",
        launchedAt: NOW,
        startedAt: NOW,
      }),
    );
    expect(violation?.reason).toBe(
      "succeeded_requires_result_ref_and_completed_at",
    );
  });

  it("requires launchedAt/startedAt on post-launch statuses", () => {
    const violation = validateAttemptShape(
      baseAttempt({ attemptId: "xat:a1", status: "running" }),
    );
    expect(violation?.reason).toBe(
      "post_launch_requires_launched_and_started_at",
    );
  });

  it("requires a retry index and budget when retryOfAttemptId is set", () => {
    const violation = validateAttemptShape(
      baseAttempt({ attemptId: "xat:a2", retryOfAttemptId: "xat:a1" }),
    );
    expect(violation?.reason).toBe("retry_requires_index_and_budget");
  });

  it("caps logRefs at 16 bounded references", () => {
    const violation = validateAttemptShape(
      baseAttempt({
        attemptId: "xat:a1",
        logRefs: Array.from({ length: 17 }, (_, i) => `log:l${i}`),
      }),
    );
    expect(violation?.reason).toBe("log_refs_max_16");
  });
});
