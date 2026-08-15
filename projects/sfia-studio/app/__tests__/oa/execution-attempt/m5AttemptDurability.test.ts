/**
 * M5 — ExecutionAttempt durability + durable resultRecordingAttempts budget.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  SqliteExecutionAttemptRepository,
  SqliteExecutionAttemptTechnicalStore,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const NOW = "2026-08-15T08:30:00.000Z";

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-att-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function openProjects(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: NOW,
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

function baseAttempt(
  overrides: Partial<ExecutionAttempt> & { attemptId: string },
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:m5-001",
    executionContractVersion: 1,
    selectedAgentRef: "agt:fixture",
    status: "accepted",
    idempotencyKey: `idem-${overrides.attemptId}`,
    correlationId: "cor:m5-att",
    version: 1,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:m5-att",
      actor: { actorId: "actor:morris", role: "decision_maker" },
      source: "human_decision",
      timestamp: NOW,
      correlationId: "cor:m5-att",
    },
    selectionStrategy: "capabilities_deterministic",
    selectionProfile: "standard",
    selectionExpiresAt: "2026-08-15T09:00:00.000Z",
    ...overrides,
  };
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M5 ExecutionAttempt durability", () => {
  it("persists attempt + active index + result budget across reopen", async () => {
    const dbPath = tempDbPath("attempt.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-att",
      title: "M5 Attempt",
      objective: "m5-att-objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-att-v1",
      idempotencyKey: "idem:m5-att-prj",
    });

    const repo = new SqliteExecutionAttemptRepository(projects.store);
    const tech = new SqliteExecutionAttemptTechnicalStore(projects.store);
    const attempt = baseAttempt({ attemptId: "xat:m5-durable" });
    await repo.create(attempt);
    await repo.reserveActiveContract(
      attempt.executionContractId,
      attempt.attemptId,
    );
    tech.resultRecordingAttempts.set(attempt.attemptId, 2);

    const active = await repo.findActiveByContract(attempt.executionContractId);
    expect(active?.attemptId).toBe("xat:m5-durable");
    expect(tech.resultRecordingAttempts.get(attempt.attemptId)).toBe(2);

    projects.dispose();
    openServices.pop();

    const projects2 = openProjects(dbPath);
    const repo2 = new SqliteExecutionAttemptRepository(projects2.store);
    const tech2 = new SqliteExecutionAttemptTechnicalStore(projects2.store);
    const loaded = await repo2.findById("xat:m5-durable");
    expect(loaded?.status).toBe("accepted");
    expect(loaded?.idempotencyKey).toBe("idem-xat:m5-durable");
    const active2 = await repo2.findActiveByContract("xct:m5-001");
    expect(active2?.attemptId).toBe("xat:m5-durable");
    expect(tech2.resultRecordingAttempts.get("xat:m5-durable")).toBe(2);
  });

  it("enforces OCC and active reservation on SQLite", async () => {
    const dbPath = tempDbPath("occ.sqlite");
    const projects = openProjects(dbPath);
    const repo = new SqliteExecutionAttemptRepository(projects.store);
    await repo.create(baseAttempt({ attemptId: "xat:m5-occ" }));
    await expect(
      repo.update(
        baseAttempt({
          attemptId: "xat:m5-occ",
          status: "running",
          version: 2,
          startedAt: NOW,
        }),
        99,
      ),
    ).rejects.toMatchObject({ detailCode: "VERSION_CONFLICT" });

    await repo.reserveActiveContract("xct:m5-001", "xat:m5-occ");
    await expect(
      repo.reserveActiveContract("xct:m5-001", "xat:other"),
    ).rejects.toMatchObject({ detailCode: "EXECUTION_ALREADY_ACTIVE" });
  });

  it("concurrent update with same expectedVersion → one win, one VERSION_CONFLICT", async () => {
    const dbPath = tempDbPath("occ-concurrent.sqlite");
    const projects = openProjects(dbPath);
    const repo = new SqliteExecutionAttemptRepository(projects.store);
    await repo.create(baseAttempt({ attemptId: "xat:m5-occ-c" }));

    const results = await Promise.allSettled([
      repo.update(
        baseAttempt({
          attemptId: "xat:m5-occ-c",
          status: "accepted",
          version: 2,
          updatedAt: NOW,
          selectionExpiresAt: "2026-08-15T09:10:00.000Z",
        }),
        1,
      ),
      repo.update(
        baseAttempt({
          attemptId: "xat:m5-occ-c",
          status: "accepted",
          version: 2,
          updatedAt: NOW,
          selectionExpiresAt: "2026-08-15T09:20:00.000Z",
        }),
        1,
      ),
    ]);

    const fulfilled = results.filter((r) => r.status === "fulfilled");
    const rejected = results.filter((r) => r.status === "rejected");
    expect(fulfilled).toHaveLength(1);
    expect(rejected).toHaveLength(1);
    expect(rejected[0]).toMatchObject({
      status: "rejected",
      reason: expect.objectContaining({ detailCode: "VERSION_CONFLICT" }),
    });
    const loaded = await repo.findById("xat:m5-occ-c");
    expect(loaded?.version).toBe(2);
  });

  it("concurrent reserveActiveContract different attemptIds → one EXECUTION_ALREADY_ACTIVE", async () => {
    const dbPath = tempDbPath("reserve-concurrent.sqlite");
    const projects = openProjects(dbPath);
    const repo = new SqliteExecutionAttemptRepository(projects.store);
    await repo.create(
      baseAttempt({ attemptId: "xat:m5-res-a", executionContractId: "xct:m5-res" }),
    );
    await repo.create(
      baseAttempt({ attemptId: "xat:m5-res-b", executionContractId: "xct:m5-res" }),
    );

    const results = await Promise.allSettled([
      repo.reserveActiveContract("xct:m5-res", "xat:m5-res-a"),
      repo.reserveActiveContract("xct:m5-res", "xat:m5-res-b"),
    ]);

    const fulfilled = results.filter((r) => r.status === "fulfilled");
    const rejected = results.filter((r) => r.status === "rejected");
    expect(fulfilled).toHaveLength(1);
    expect(rejected).toHaveLength(1);
    expect(rejected[0]).toMatchObject({
      status: "rejected",
      reason: expect.objectContaining({
        detailCode: "EXECUTION_ALREADY_ACTIVE",
      }),
    });
    const active = await repo.findActiveByContract("xct:m5-res");
    expect(["xat:m5-res-a", "xat:m5-res-b"]).toContain(active?.attemptId);
  });
});
