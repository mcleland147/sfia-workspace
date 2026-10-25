/**
 * L2-D2 G-ACTIVATION PREPARATION S1 / CR-S1-01 — Product SQLite snapshot/restore DET.
 * Operational path: VACUUM INTO only. closed_copy unavailable (no false quiescence).
 * Integrity: readOnly PRAGMA — no Product migration. Synthetic temp paths only.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  openRestoredProductSqlite,
  ProductSqliteSnapshotError,
  snapshotProductSqliteClosedCopy,
  snapshotProductSqliteVacuumInto,
  verifyProductSqliteIntegrityAtPath,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";

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

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

function buildServices(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-10-25T05:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
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

describe("L2-D2 S1 / CR-S1-01 Product SQLite snapshot/restore", () => {
  it("VACUUM INTO restores Project + LPS on a disposable path", async () => {
    const dir = tempDir("sfia-s1-vac-");
    const sourcePath = path.join(dir, "oa-product.sqlite");
    const snapPath = path.join(dir, "oa-product.snap.sqlite");
    const svc = buildServices(sourcePath);

    const created = await svc.createProject.execute({
      projectId: "prj:s1-vac",
      title: "S1 Snapshot",
      objective: "durable LPS objective for restore",
      context: "s1-context",
      scope: "s1-scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:s1-vac-v1",
      idempotencyKey: "s1-vac-1",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;
    const objective = created.livingProjectState.objective;

    const snap = snapshotProductSqliteVacuumInto(
      svc.store.db,
      sourcePath,
      snapPath,
    );
    expect(snap.method).toBe("vacuum_into");
    expect(snap.bytes).toBeGreaterThan(0);
    expect(fs.existsSync(sourcePath)).toBe(true);

    const stillThere = await svc.getProject.execute({ projectId });
    expect(stillThere.ok).toBe(true);

    svc.dispose();
    openServices.pop();

    const restoredDb = openRestoredProductSqlite(snapPath);
    const row = restoredDb
      .prepare(
        "SELECT project_id, payload_json FROM oa_projects WHERE project_id = ?",
      )
      .get(projectId) as { project_id: string; payload_json: string };
    expect(row.project_id).toBe(projectId);
    const lps = restoredDb
      .prepare(
        "SELECT payload_json FROM oa_lps WHERE project_id = ? ORDER BY version DESC LIMIT 1",
      )
      .get(projectId) as { payload_json: string };
    expect(JSON.parse(lps.payload_json).objective).toBe(objective);
    restoredDb.close();

    const restoredSvc = buildServices(snapPath);
    const got = await restoredSvc.getProject.execute({ projectId });
    expect(got.ok).toBe(true);
    if (!got.ok) return;
    expect(got.project.projectId).toBe(projectId);
    const lpsGot = await restoredSvc.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsGot.ok).toBe(true);
    if (!lpsGot.ok) return;
    expect(lpsGot.livingProjectState.objective).toBe(objective);
  });

  it("closed_copy is unavailable (CR-S1-01 — no false quiescence guarantee)", async () => {
    const dir = tempDir("sfia-s1-copy-");
    const sourcePath = path.join(dir, "oa-product.sqlite");
    const snapPath = path.join(dir, "copy.sqlite");
    const svc = buildServices(sourcePath);
    await svc.createProject.execute({
      projectId: "prj:s1-copy",
      title: "Copy",
      objective: "closed copy unavailable",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:s1-copy-v1",
      idempotencyKey: "s1-copy-1",
    });
    // Even with no WAL sidecars and after dispose, closed_copy must refuse.
    svc.dispose();
    openServices.pop();
    expect(fs.existsSync(`${sourcePath}-wal`)).toBe(false);
    expect(() =>
      snapshotProductSqliteClosedCopy(sourcePath, snapPath),
    ).toThrow(ProductSqliteSnapshotError);
    try {
      snapshotProductSqliteClosedCopy(sourcePath, snapPath);
    } catch (error) {
      expect(error).toBeInstanceOf(ProductSqliteSnapshotError);
      expect((error as ProductSqliteSnapshotError).code).toBe(
        "CLOSED_COPY_UNAVAILABLE",
      );
    }
    expect(fs.existsSync(snapPath)).toBe(false);
    // Source preserved.
    expect(fs.existsSync(sourcePath)).toBe(true);
  });

  it("VACUUM INTO refuses overwrite of existing destination; source preserved", async () => {
    const dir = tempDir("sfia-s1-ow-");
    const sourcePath = path.join(dir, "oa-product.sqlite");
    const snapPath = path.join(dir, "exists.sqlite");
    fs.writeFileSync(snapPath, "preexisting");
    const svc = buildServices(sourcePath);
    await svc.createProject.execute({
      projectId: "prj:s1-ow",
      title: "OW",
      objective: "ow",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:s1-ow-v1",
      idempotencyKey: "s1-ow-1",
    });
    expect(() =>
      snapshotProductSqliteVacuumInto(svc.store.db, sourcePath, snapPath),
    ).toThrow(/already exists/);
    expect(fs.readFileSync(snapPath, "utf8")).toBe("preexisting");
    expect(fs.existsSync(sourcePath)).toBe(true);
  });

  it("read-only integrity check does not migrate schema_meta", async () => {
    const dir = tempDir("sfia-s1-ro-");
    const sourcePath = path.join(dir, "oa-product.sqlite");
    const snapPath = path.join(dir, "oa-product.snap.sqlite");
    const svc = buildServices(sourcePath);
    await svc.createProject.execute({
      projectId: "prj:s1-ro",
      title: "RO",
      objective: "integrity",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:s1-ro-v1",
      idempotencyKey: "s1-ro-1",
    });
    snapshotProductSqliteVacuumInto(svc.store.db, sourcePath, snapPath);
    svc.dispose();
    openServices.pop();

    const beforeStat = fs.statSync(snapPath);
    const roBefore = new DatabaseSync(snapPath, { readOnly: true });
    const versionBefore = (
      roBefore
        .prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'")
        .get() as { value: string }
    ).value;
    roBefore.close();

    verifyProductSqliteIntegrityAtPath(snapPath);

    const afterStat = fs.statSync(snapPath);
    expect(afterStat.size).toBe(beforeStat.size);
    expect(afterStat.mtimeMs).toBe(beforeStat.mtimeMs);
    const roAfter = new DatabaseSync(snapPath, { readOnly: true });
    const versionAfter = (
      roAfter
        .prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'")
        .get() as { value: string }
    ).value;
    roAfter.close();
    expect(versionAfter).toBe(versionBefore);

    // RO open refuses writes.
    const roWrite = new DatabaseSync(snapPath, { readOnly: true });
    expect(() =>
      roWrite.exec("CREATE TABLE IF NOT EXISTS should_not_exist (x INTEGER)"),
    ).toThrow(/readonly/i);
    roWrite.close();
  });

  it("corrupt destination fails integrity; missing source path fails closed", () => {
    const dir = tempDir("sfia-s1-bad-");
    const missing = path.join(dir, "missing.sqlite");
    expect(() => verifyProductSqliteIntegrityAtPath(missing)).toThrow(
      ProductSqliteSnapshotError,
    );

    const corrupt = path.join(dir, "corrupt.sqlite");
    fs.writeFileSync(corrupt, "not-a-sqlite-database");
    expect(() => verifyProductSqliteIntegrityAtPath(corrupt)).toThrow(
      ProductSqliteSnapshotError,
    );
  });

  it("Memory B session VACUUM INTO restores session items (distinct from Truth C)", async () => {
    const dir = tempDir("sfia-s1-mem-");
    const sessionPath = path.join(dir, "nora-session.sqlite");
    const snapPath = path.join(dir, "nora-session.snap.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:s1-mem",
      dbPath: sessionPath,
      sessionKey: "default",
    });
    await session.addItems([
      { role: "user", content: [{ type: "input_text", text: "hello-s1" }] },
    ]);
    session.getSqlite().exec(`VACUUM INTO '${snapPath.replace(/'/g, "''")}'`);
    session.close();
    expect(fs.existsSync(snapPath)).toBe(true);
    const restored = new ProductSqliteSession({
      projectId: "prj:s1-mem",
      dbPath: snapPath,
      sessionKey: "default",
    });
    const items = await restored.getItems();
    expect(JSON.stringify(items)).toContain("hello-s1");
    restored.close();
  });
});
