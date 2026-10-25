/**
 * L2-D2 G-ACTIVATION PREPARATION S4 — deterministic R-CUT rehearsal (disposable).
 * Links S1 snapshot, S2 D1 seal/freeze, S3 D4 helpers, OA create, reopen.
 * LIVE Studio / real env instance / HTTP server = NOT IN SCOPE.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  openRestoredProductSqlite,
  snapshotProductSqliteVacuumInto,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  openD1Db,
  resetD1DbForTests,
  sealD1DbSingletonForLocalOaExclusiveCutover,
} from "@/lib/d1/db";
import { D1Error } from "@/lib/d1/errors";
import { isLocalOaExclusiveMode } from "@/lib/d1/localOaExclusiveMode";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";
import {
  denyLegacyProjectDeepLinkIfExclusive,
  redirectLegacyGenericEntryToStudioIfExclusive,
} from "@/lib/d1/legacyNavigation";
import { createProject as d1CreateProject } from "@/lib/d1/commands";
import { D1_GOVERNANCE_METHOD_MODE } from "@/lib/d1/types";

vi.mock("next/navigation", () => ({
  redirect: (url: string) => {
    throw new Error(`NEXT_REDIRECT:${url}`);
  },
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

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

beforeEach(() => {
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  delete process.env.D1_SQLITE_PATH;
});

afterEach(() => {
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  delete process.env.D1_SQLITE_PATH;
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  for (const dir of tempDirs.splice(0)) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

function buildServices(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-10-25T04:30:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

describe("L2-D2 S4 R-CUT deterministic rehearsal", () => {
  it("snapshot → seal D1 → exclusive → D4 DET → OA write → restore (no dual-write)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s4-rcut-"));
    tempDirs.push(dir);
    const productPath = path.join(dir, "oa-product.sqlite");
    const snapPath = path.join(dir, "oa-product.snap.sqlite");
    const d1Path = path.join(dir, "d1.sqlite");

    // 1–2. Create Product Project + LPS durable.
    const svc = buildServices(productPath);
    const created = await svc.createProject.execute({
      projectId: "prj:s4-rcut",
      title: "R-CUT rehearsal",
      objective: "s4-objective-durable",
      context: "s4-context",
      scope: "s4-scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:s4-rcut-v1",
      idempotencyKey: "s4-rcut-1",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    // 3. Coherent snapshot (S1).
    const snap = snapshotProductSqliteVacuumInto(
      svc.store.db,
      productPath,
      snapPath,
    );
    expect(snap.method).toBe("vacuum_into");

    // 4. Synthetic D1 historical present.
    process.env.D1_SQLITE_PATH = d1Path;
    setLocalOaExclusiveModeForTests(false);
    resetD1DbForTests();
    const d1Db = openD1Db(d1Path);
    const seeded = d1CreateProject({
      name: "Historical D1",
      objective: "pre-cutover",
      methodMode: D1_GOVERNANCE_METHOD_MODE,
      activate: true,
      idempotencyKey: "s4-d1-seed",
    });
    expect(seeded.project.projectId.startsWith("proj-")).toBe(true);
    const d1CountBefore = (
      d1Db.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as {
        c: number;
      }
    ).c;
    expect(d1CountBefore).toBe(1);

    // 5–6. Seal singleton + exclusive ON — D1 writers refuse.
    sealD1DbSingletonForLocalOaExclusiveCutover();
    setLocalOaExclusiveModeForTests(true);
    expect(() =>
      d1CreateProject({
        name: "Should fail",
        objective: "blocked",
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        activate: true,
        idempotencyKey: "s4-d1-blocked",
      }),
    ).toThrow(D1Error);
    expect(() => openD1Db(d1Path)).toThrow(D1Error);

    // 7. D4 DET routing under exclusive.
    expect(() => redirectLegacyGenericEntryToStudioIfExclusive()).toThrow(
      /NEXT_REDIRECT:\/studio/,
    );
    expect(() => denyLegacyProjectDeepLinkIfExclusive()).toThrow(
      /NEXT_NOT_FOUND/,
    );

    // 8. OA Product writes still allowed (Truth C).
    const created2 = await svc.createProject.execute({
      projectId: "prj:s4-oa-2",
      title: "Post exclusive OA",
      objective: "oa-still-writable",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:s4-oa-2-v1",
      idempotencyKey: "s4-oa-2",
    });
    expect(created2.ok).toBe(true);

    // 9–10. Close/reopen Product store — resume original project.
    svc.dispose();
    openServices.pop();
    const reopened = buildServices(productPath);
    const got = await reopened.getProject.execute({ projectId });
    expect(got.ok).toBe(true);
    const lps = await reopened.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (lps.ok) {
      expect(lps.livingProjectState.objective).toBe("s4-objective-durable");
    }

    // 12–13. Restore snapshot on disposable path; source preserved.
    expect(fs.existsSync(productPath)).toBe(true);
    const restoredDb = openRestoredProductSqlite(snapPath);
    const snapCount = (
      restoredDb.prepare("SELECT COUNT(*) AS c FROM oa_projects").get() as {
        c: number;
      }
    ).c;
    // Snapshot taken before second OA create → exactly 1 project.
    expect(snapCount).toBe(1);
    restoredDb.close();

    // 14. No dual-write: D1 row count stable under exclusive still ON.
    // Diagnostic only: disposable readOnly SQLite open — NOT marker OFF rollback,
    // NOT applicative D1 reopen, NOT Q12 RO fallback (Q12 remains OPEN).
    expect(isLocalOaExclusiveMode()).toBe(true);
    const d1Ro = new DatabaseSync(d1Path, { readOnly: true });
    try {
      const d1CountAfter = (
        d1Ro.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as {
          c: number;
        }
      ).c;
      expect(d1CountAfter).toBe(1);
      // Oracle must not mutate: write attempt fails on RO handle.
      expect(() =>
        d1Ro.exec(
          "INSERT INTO d1_projects (project_id) VALUES ('must-not-write')",
        ),
      ).toThrow(/readonly/i);
      expect(
        (
          d1Ro.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as {
            c: number;
          }
        ).c,
      ).toBe(1);
    } finally {
      d1Ro.close();
    }
    // Exclusive remains armed for the remainder of the rehearsal.
    expect(isLocalOaExclusiveMode()).toBe(true);
    expect(() => openD1Db(d1Path)).toThrow(D1Error);
    // Q12 RO fallback product path: NOT IMPLEMENTED — left OPEN.
  });
});
