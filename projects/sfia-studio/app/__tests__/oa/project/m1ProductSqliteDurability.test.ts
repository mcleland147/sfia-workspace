/**
 * M1 — OA Product SQLite Project/LPS durability proofs.
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
  resolveProductSqlitePath,
  SqliteProjectAuditJournal,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";

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

const tempDirs: string[] = [];
const openServices: SqliteProductProjectServices[] = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m1-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildSqliteServices(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-13T06:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

afterEach(() => {
  while (openServices.length) {
    const svc = openServices.pop();
    try {
      svc?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M1 Product SQLite durability", () => {
  it("A — create durable: reopen same DB recovers Project + LPS", async () => {
    const dbPath = tempDbPath("a-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const created = await svc1.createProject.execute({
      projectId: "prj:m1-a",
      title: "M1 Durable",
      objective: "Restart-safe Project/LPS",
      context: "critical-context-alpha",
      scope: "scope-campus",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      correlationId: "cor:m1-a",
      lpsVersionId: "lps:m1-a-v1",
      idempotencyKey: "idem:m1-a",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const project = await svc2.getProject.execute({ projectId: "prj:m1-a" });
    const lps = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-a",
    });
    expect(project.ok).toBe(true);
    expect(lps.ok).toBe(true);
    if (!project.ok || !lps.ok) return;
    expect(project.project.projectId).toBe("prj:m1-a");
    expect(project.project.currentLpsVersionId).toBe("lps:m1-a-v1");
    expect(lps.livingProjectState.version).toBe(1);
    expect(lps.livingProjectState.objective).toBe("Restart-safe Project/LPS");
    expect(lps.livingProjectState.context).toBe("critical-context-alpha");
    expect(lps.livingProjectState.scope).toBe("scope-campus");
    expect(lps.livingProjectState.doctrinePackageRef.digest).toBe(VALID_DIGEST);
    expect(lps.livingProjectState.doctrinePackageRef.doctrinePackageId).toBe(
      VALID_PIN.doctrinePackageId,
    );
    expect(lps.livingProjectState.doctrinePackageRef.version).toBe(
      VALID_PIN.version,
    );
  });

  it("B — idempotency restart-safe", async () => {
    const dbPath = tempDbPath("b-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const first = await svc1.createProject.execute({
      projectId: "prj:m1-b",
      title: "Idem",
      objective: "idem objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      idempotencyKey: "idem:m1-b",
      lpsVersionId: "lps:m1-b-v1",
    });
    expect(first.ok).toBe(true);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const second = await svc2.createProject.execute({
      projectId: "prj:m1-b-other",
      title: "Should reuse",
      objective: "ignored",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      idempotencyKey: "idem:m1-b",
      lpsVersionId: "lps:m1-b-v2",
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
    expect(second.project.projectId).toBe("prj:m1-b");
    expect(second.livingProjectState.lpsVersionId).toBe("lps:m1-b-v1");
  });

  it("C — LPS append durable + superseded readable", async () => {
    const dbPath = tempDbPath("c-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    const created = await svc1.createProject.execute({
      projectId: "prj:m1-c",
      title: "Append",
      objective: "v1",
      context: "ctx-v1",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-c-v1",
    });
    expect(created.ok).toBe(true);
    const appended = await svc1.appendLivingProjectStateVersion.execute({
      projectId: "prj:m1-c",
      expectedVersion: 1,
      objective: "v2",
      context: "ctx-v2",
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-c-v2",
    });
    expect(appended.ok).toBe(true);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const current = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-c",
    });
    const prior = await svc2.getLivingProjectStateVersion.execute({
      projectId: "prj:m1-c",
      version: 1,
    });
    expect(current.ok).toBe(true);
    expect(prior.ok).toBe(true);
    if (!current.ok || !prior.ok) return;
    expect(current.livingProjectState.version).toBe(2);
    expect(current.livingProjectState.lpsVersionId).toBe("lps:m1-c-v2");
    expect(current.livingProjectState.context).toBe("ctx-v2");
    expect(prior.livingProjectState.status).toBe("superseded");
    expect(prior.livingProjectState.objective).toBe("v1");
  });

  it("D — optimistic concurrency conflict leaves no partial mutation", async () => {
    const dbPath = tempDbPath("d-product.sqlite");
    const svc = buildSqliteServices(dbPath);
    await svc.createProject.execute({
      projectId: "prj:m1-d",
      title: "Conflict",
      objective: "base",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-d-v1",
    });
    const conflict = await svc.appendLivingProjectStateVersion.execute({
      projectId: "prj:m1-d",
      expectedVersion: 99,
      objective: "should-fail",
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-d-bad",
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("LPS_VERSION_CONFLICT");
    const current = await svc.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-d",
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    expect(current.livingProjectState.version).toBe(1);
    expect(current.livingProjectState.lpsVersionId).toBe("lps:m1-d-v1");
    const missing = await svc.lps.findById("lps:m1-d-bad");
    expect(missing).toBeNull();
  });

  it("E — transaction rollback on forced LPS save failure", async () => {
    const dbPath = tempDbPath("e-product.sqlite");
    const svc = buildSqliteServices(dbPath);
    svc.store.failNextSave = "lps";
    const result = await svc.createProject.execute({
      projectId: "prj:m1-e",
      title: "Rollback",
      objective: "should not persist",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-e-v1",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PERSISTENCE_FAILURE");
    expect(await svc.projects.exists("prj:m1-e")).toBe(false);
    expect(await svc.lps.findById("lps:m1-e-v1")).toBeNull();
  });

  it("F — product path isolation from D1/OPS1 names", () => {
    expect(() => resolveProductSqlitePath("/tmp/d1.sqlite")).toThrow(
      /parallel_engine/,
    );
    expect(() => resolveProductSqlitePath("/tmp/ops1.sqlite")).toThrow(
      /parallel_engine/,
    );
    const ok = resolveProductSqlitePath(tempDbPath("oa-product.sqlite"));
    expect(path.basename(ok)).toBe("oa-product.sqlite");
  });

  it("G — audit append-only survives reopen", async () => {
    const dbPath = tempDbPath("g-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    await svc1.createProject.execute({
      projectId: "prj:m1-g",
      title: "Audit",
      objective: "audit",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-g-v1",
    });
    const before = (svc1.audit as SqliteProjectAuditJournal).listAll().length;
    expect(before).toBeGreaterThan(0);
    svc1.dispose();

    const svc2 = buildSqliteServices(dbPath);
    const after = (svc2.audit as SqliteProjectAuditJournal).listAll();
    expect(after.length).toBe(before);
    expect(after.some((e) => e.event === "oa.project.created")).toBe(true);
  });

  it("H — doctrine digest + context survive restart", async () => {
    const dbPath = tempDbPath("h-product.sqlite");
    const svc1 = buildSqliteServices(dbPath);
    await svc1.createProject.execute({
      projectId: "prj:m1-h",
      title: "Digest",
      objective: "obj-h",
      context: "critical-context-h",
      scope: "scope-h",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m1-h-v1",
    });
    svc1.dispose();
    const svc2 = buildSqliteServices(dbPath);
    const lps = await svc2.getCurrentLivingProjectState.execute({
      projectId: "prj:m1-h",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.context).toBe("critical-context-h");
    expect(lps.livingProjectState.scope).toBe("scope-h");
    expect(lps.livingProjectState.doctrinePackageRef.digest).toBe(VALID_DIGEST);
  });
});
