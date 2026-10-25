# AKG-M5 L2-D2 — G-ACTIVATION PREPARATION — BOUNDED DELIVERY S1–S4
## REVIEW PACK FULL (mono-cycle)

**Horodatage:** 2026-10-25T04:39:44+0100 (2026-10-25T03:39:44Z)
**GO Morris:** AKG-M5 L2-D2 G-ACTIVATION PREPARATION — BOUNDED DELIVERY S1–S4 (Cycle type 8 Delivery + 9 QA · Critical · EVOL/QA)
**Profil:** Critical — persistance SQLite, freeze D1, routage historique, reprise, préparation cutover.
**Consomme:** GO Delivery borné seulement.
**Ne consomme PAS:** G-ACTIVATION · G-REAL · G-GIT projet · G-MERGE · R-01 formal closure · G-MANIFEST.

---

## 1. Git Truth

### Initial (re-check this cycle)
| Check | Value |
|---|---|
| Delivery toplevel | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-activation-prep-bounded` |
| Correction | Path had wrongly checked out `docs/akg-m5-l2-d2-r01-postmerge-status` @ `241335ee` — **switched** (no reset/clean/force) onto pre-created `feat/akg-m5-l2-d2-activation-prep-bounded` |
| Branch (final) | `feat/akg-m5-l2-d2-activation-prep-bounded` |
| HEAD | `d7aad77e999e4fe64f31a776ddf39c1d99278b1b` |
| origin/main | `d7aad77e999e4fe64f31a776ddf39c1d99278b1b` (**match**) |
| Prior main integration | PR #616 MERGED · CI 40154041670 SUCCESS |
| Docs WT preserved | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d2-postmerge-truth-sync` (detached @ `241335ee`) |
| P6 / other WTs | Preserved (see `git worktree list`) |
| Project commit/push/PR | **NONE** (authorized: handoff L3 only) |

### Final working tree (pre-handoff)
Uncommitted Delivery + R24 PRR authoring on feat branch; no project commit.

---

## 2. Sources consultées (réelles)

- Processus: `prompts/templates/sfia-cycle-execution-template.md` ; `method/sfia-fast-track/core/{sfia-cycle-routing-guide,sfia-chatgpt-cursor-operating-model,sfia-rules-and-guardrails}.md`
- Convergence / Product / AKG-M5 / v3 doctrine (as listed in GO §03)
- PRR README + 03–09 (authoring 05–09 + README overlay)
- Code: `app/lib/oa/project/infrastructure/sqlite/{db,paths,productSqliteSnapshot}.ts` ; `createSqliteProductProjectServices` ; `app/lib/nora-cognitive-runtime/{sessionPaths,productSqliteSession}` ; `app/lib/d1/{db,localOaExclusiveMode,legacyNavigation,commands,wrapD1DatabaseSyncForExclusiveGate}.ts` ; D4 pages ; OPS1 `app/ops1/nouvelle-demande/page.tsx`
- Handoff entrée: `sfia/review-handoff` @ `5882d6f9` blob `98df7115…` (pre-cycle tip)
- Prior DET suites: freeze / injected / D4 / O-01 / D5 / M1

---

## 3. Convergence Pre-check / R23

| Item | Classification |
|---|---|
| OA Product Truth C | **KEEP** |
| Nora Memory B | **KEEP** (distinct ; included in S1 Memory B VACUUM test) |
| D1 historique | **FREEZE** conditionnel · **RETIRE LATER** · no delete / no dual-write |
| D4 Option A | **KEEP** + **COMPLETE** DET harness (S3) — no proj→prj map |
| Local OA-exclusive | **KEEP** DEFAULT OFF · **ADAPT** openD1Db wrap + seal |
| Snapshot | **COMPLETE** minimal helper (`VACUUM INTO` / closed copy) — no new storage engine |
| R-CUT | **COMPLETE** DET rehearsal only |
| Q12 RO fallback | **OPEN** (not implemented) |
| OPS1 | **OUT** initial D4 · inventory only |
| Parallel truth / dual-write / new orchestrator | **REJECTED** |

**Modification minimale retenue:** Product snapshot helper + D1 Proxy wrap on `openD1Db` + seal API + four DET suites + PRR R24 authoring.

---

## 4. Architecture code / PRR impact (R24)

| Surface | Change |
|---|---|
| Product SQLite | New `productSqliteSnapshot.ts` — VACUUM INTO preferred ; closed copy fail-closed on WAL |
| D1 | Wrap every `openD1Db` handle ; `sealD1DbSingletonForLocalOaExclusiveCutover` |
| Navigation | No production code change — S3 harness strengthens DET |
| PRR | 05 H4-env class · 06 snapshot DET PARTIAL · 07 wrap/seal invariants · 08 S1–S4 map · 09 gaps/Q12/OPS1/R-CUT DET · README overlay |
| Manifest digests | **NOT written** — await **G-MANIFEST** · CONFORMANCE PASS **not** declared |

---

## 5. S1 — Snapshot / Restore

**Exit:** SNAPSHOT / RESTORE — DETERMINISTICALLY PROVEN AT TESTED SYNTHETIC SCOPE.

- Strategy: `VACUUM INTO` (Node `DatabaseSync` has no `.backup`)
- Closed copy refused if `-wal`/`-shm` present
- Tests: Project+LPS restore ; source preserved ; overwrite refuse ; Memory B session VACUUM
- **Not claimed:** user DB backup · LIVE App Support · H4 PASS

---

## 6. S2 — Raw DatabaseSync / D1 writers

**Exit:** Applicative `openD1Db` path DET PROVEN · residual raw construction **KNOWN GAP** (declared, not hidden).

- Wrap: `exec` + `Statement.run` re-assert exclusive ; prepare+get allowed for read oracles
- Seal singleton before exclusive in cutover path
- Test: handle acquired before exclusive → mutation refuse after ON
- Residual: `new DatabaseSync` outside `openD1Db` still mutates — **R-03 not fully CLOSED** · proxy-global would need Morris architecture decision (STOP avoided by documenting gap)

---

## 7. S3 — D4 HTTP readiness (DET)

**Exit:** D4 DETERMINISTIC COVERAGE VERIFIED · D4 HTTP LIVE **OPEN**.

- Marker OFF no-op ; ON via override + real env trim `" 1 "`
- Generic → `/studio` ; deep link → notFound ; no mapper in D4 pages
- OPS1 outside helper ; policy OUT of initial D4 cutover
- next/navigation mocked — DET ≠ HTTP LIVE

---

## 8. S4 — R-CUT DET rehearsal

**Exit:** R-CUT DETERMINISTIC REHEARSAL — PASS AT DISPOSABLE TEST SCOPE · LIVE NOT PROVEN.

Sequence: OA create → durable → VACUUM snap → D1 seed → seal+exclusive → D1 write refuse → D4 DET → OA write OK → reopen → snap restore (1 project) → D1 row count unchanged (no dual-write). Q12 left OPEN in-test comment.

Marker OFF after exclusive **not** treated as authorizing D1 reactivation without distinct GO.

---

## 9. H4-env / Fake-Real / Gates

| Gate | Status |
|---|---|
| H4 Fresh Start **class** (DET) | Accepted for harness |
| H4 real instance | **NOT QUALIFIED** |
| Fake/Real | DETERMINISTIC PROVEN AT NEW BOUNDED SCOPE · REAL BOUNDARY **NOT** |
| Q12 | **OPEN** |
| OPS1 | OUT D4 · no `@/lib/d1` on page |
| G-REAL | **NOT GRANTED** |
| G-ACTIVATION | **NOT GRANTED** |
| G-GIT project | **NOT AUTHORIZED** |
| G-MANIFEST | **REQUIRED** before digest write |
| Runtime v3 | **NON ADOPTED** |
| AKG-M5 GLOBAL | **OPEN** |

---

## 10. Validations exécutées

```
vitest S1+S2+S3+S4 → 14 PASS
vitest freeze+injected+D4+O-01+D5+M1 → 30 PASS
git diff --check → clean
```

---

## 11. Fichiers créés / modifiés

### Created
- `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteSnapshot.ts`
- `projects/sfia-studio/app/lib/d1/wrapD1DatabaseSyncForExclusiveGate.ts`
- `projects/sfia-studio/app/__tests__/oa/project/l2d2S1ProductSqliteSnapshot.test.ts`
- `projects/sfia-studio/app/__tests__/d1/l2d2S2RawDatabaseSyncExclusiveGate.test.ts`
- `projects/sfia-studio/app/__tests__/d1/l2d2S3D4HttpReadinessHarness.test.ts`
- `projects/sfia-studio/app/__tests__/oa/project/l2d2S4RcutDeterministicRehearsal.test.ts`

### Modified
- `projects/sfia-studio/app/lib/d1/db.ts`
- `projects/sfia-studio/app/lib/oa/project/index.ts`
- PRR: `README.md`, `05`, `06`, `07`, `08`, `09`

---

## 12. Décisions Morris nécessaires

1. **G-MANIFEST** — sync digests after semantic review of PRR R24
2. **G-GIT projet** — after Critical Delivery Review (explicit GO)
3. Policy on residual raw `DatabaseSync` (accept KNOWN GAP vs architecture pivot)
4. Q12 — implement / defer / waive as cutover prerequisite
5. **G-REAL / H4 instance** — before LIVE HTTP / R-CUT LIVE
6. OPS1 — confirm OUT or require exclusive writer audit if client gains D1
7. **G-ACTIVATION** — only after LIVE exits (not this lot)

---

## 13. Verdict

**AKG-M5 L2-D2 BOUNDED DELIVERY — DETERMINISTIC PASS**

- S1 SNAPSHOT/RESTORE — DET PROVEN
- S2 D1 WRITER INTEGRITY — DET PROVEN on applicative path · **KNOWN GAP** residual raw `new DatabaseSync` (blocking for R-03 full CLOSE; not hidden)
- S3 D4 — DET PROVEN / HTTP LIVE OPEN
- S4 R-CUT — DET REHEARSAL PASS / LIVE NOT PROVEN
- H4 REAL INSTANCE — NOT QUALIFIED
- Q12 — OPEN
- G-REAL / G-ACTIVATION / G-GIT PROJECT — NOT GRANTED / NOT AUTHORIZED
- AKG-M5 GLOBAL — OPEN · RUNTIME V3 — NON ADOPTED

Recommended next (for ChatGPT Critical Review): bounded correction only if residual raw-DB treated as hard blocker; else GO G-REAL borné after H4 instance designation — **not** G-ACTIVATION yet.

---

## 14. MODIFIED / CREATED CONTENT (FULL)

### FILE: projects/sfia-studio/app/lib/d1/wrapD1DatabaseSyncForExclusiveGate.ts
```typescript
/**
 * Bound D1 DatabaseSync handles returned by openD1Db so that under
 * SFIA_STUDIO_LOCAL_OA_EXCLUSIVE the raw mutation surface (exec / Statement.run)
 * fails closed even when the connection was opened before exclusive ON.
 *
 * Read paths (prepare + get/all) remain available for DET oracles / diagnostics.
 * Handles constructed via `new DatabaseSync(...)` outside openD1Db are NOT wrapped
 * — residual KNOWN GAP for non-applicative construction (see S2 tests).
 */
import type { DatabaseSync, StatementSync } from "node:sqlite";
import { assertD1AccessAllowedWhenLocalOaExclusive } from "./localOaExclusiveMode";

function wrapStatement(stmt: StatementSync): StatementSync {
  return new Proxy(stmt, {
    get(target, prop, receiver) {
      if (prop === "run") {
        return (...args: unknown[]) => {
          assertD1AccessAllowedWhenLocalOaExclusive();
          const value = Reflect.get(target, prop, receiver) as (
            ...a: unknown[]
          ) => unknown;
          return value.apply(target, args);
        };
      }
      const value = Reflect.get(target, prop, receiver);
      return typeof value === "function"
        ? (value as (...a: unknown[]) => unknown).bind(target)
        : value;
    },
  }) as StatementSync;
}

export function wrapD1DatabaseSyncForExclusiveGate(
  db: DatabaseSync,
): DatabaseSync {
  return new Proxy(db, {
    get(target, prop, receiver) {
      if (prop === "exec") {
        return (...args: unknown[]) => {
          assertD1AccessAllowedWhenLocalOaExclusive();
          const value = Reflect.get(target, prop, receiver) as (
            ...a: unknown[]
          ) => unknown;
          return value.apply(target, args);
        };
      }
      if (prop === "prepare") {
        return (sql: string) => {
          const value = Reflect.get(target, prop, receiver) as (
            s: string,
          ) => StatementSync;
          return wrapStatement(value.call(target, sql));
        };
      }
      const value = Reflect.get(target, prop, receiver);
      return typeof value === "function"
        ? (value as (...a: unknown[]) => unknown).bind(target)
        : value;
    },
  }) as DatabaseSync;
}
```

### FILE: projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteSnapshot.ts
```typescript
/**
 * Coherent Product SQLite snapshot/restore (L2-D2 G-ACTIVATION PREPARATION S1).
 *
 * Strategy: SQLite `VACUUM INTO` while the source connection is open —
 * produces a consistent destination file without relying on hot file copies
 * of the main DB under an unmanaged WAL.
 *
 * Closed-file copy is allowed only when no `-wal`/`-shm` sidecars exist and
 * the source handle is closed (fail-closed otherwise).
 *
 * Disposable / synthetic paths only for Delivery harness. Not a user backup tool.
 */
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { openProductSqlite } from "./db";

export type ProductSqliteSnapshotResult = {
  readonly method: "vacuum_into" | "closed_copy";
  readonly sourcePath: string;
  readonly destinationPath: string;
  readonly bytes: number;
};

export class ProductSqliteSnapshotError extends Error {
  readonly code:
    | "INVALID_PATH"
    | "WAL_PRESENT"
    | "SOURCE_OPEN_REQUIRED"
    | "DEST_EXISTS"
    | "INTEGRITY_FAILED"
    | "IO";

  constructor(
    code: ProductSqliteSnapshotError["code"],
    message: string,
    cause?: unknown,
  ) {
    super(message, cause !== undefined ? { cause } : undefined);
    this.name = "ProductSqliteSnapshotError";
    this.code = code;
  }
}

function assertAbsoluteSqlitePath(label: string, filePath: string): void {
  if (!filePath || !path.isAbsolute(filePath)) {
    throw new ProductSqliteSnapshotError(
      "INVALID_PATH",
      `${label} must be an absolute filesystem path`,
    );
  }
  if (path.extname(filePath) !== ".sqlite" && !filePath.endsWith(".sqlite")) {
    // Allow *.sqlite* test names; reject empty / directory-looking paths.
    if (filePath.endsWith("/") || filePath.endsWith(path.sep)) {
      throw new ProductSqliteSnapshotError(
        "INVALID_PATH",
        `${label} must be a file path, not a directory`,
      );
    }
  }
}

function walSidecars(dbPath: string): string[] {
  return [`${dbPath}-wal`, `${dbPath}-shm`].filter((p) => fs.existsSync(p));
}

function ensureParentDir(filePath: string): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function sqlLiteral(filePath: string): string {
  return `'${filePath.replace(/'/g, "''")}'`;
}

/**
 * Snapshot an open Product DatabaseSync into `destinationPath` via VACUUM INTO.
 * Destination must not already exist.
 */
export function snapshotProductSqliteVacuumInto(
  sourceDb: DatabaseSync,
  sourcePath: string,
  destinationPath: string,
): ProductSqliteSnapshotResult {
  assertAbsoluteSqlitePath("sourcePath", sourcePath);
  assertAbsoluteSqlitePath("destinationPath", destinationPath);
  if (fs.existsSync(destinationPath)) {
    throw new ProductSqliteSnapshotError(
      "DEST_EXISTS",
      `destination already exists: ${destinationPath}`,
    );
  }
  ensureParentDir(destinationPath);
  try {
    sourceDb.exec(`VACUUM INTO ${sqlLiteral(destinationPath)}`);
  } catch (error) {
    throw new ProductSqliteSnapshotError(
      "IO",
      "VACUUM INTO snapshot failed",
      error,
    );
  }
  verifyProductSqliteIntegrityAtPath(destinationPath);
  return {
    method: "vacuum_into",
    sourcePath,
    destinationPath,
    bytes: fs.statSync(destinationPath).size,
  };
}

/**
 * Snapshot a closed Product DB file by copy. Fail-closed if WAL/SHM sidecars exist.
 */
export function snapshotProductSqliteClosedCopy(
  sourcePath: string,
  destinationPath: string,
): ProductSqliteSnapshotResult {
  assertAbsoluteSqlitePath("sourcePath", sourcePath);
  assertAbsoluteSqlitePath("destinationPath", destinationPath);
  if (!fs.existsSync(sourcePath)) {
    throw new ProductSqliteSnapshotError(
      "INVALID_PATH",
      `source does not exist: ${sourcePath}`,
    );
  }
  const sidecars = walSidecars(sourcePath);
  if (sidecars.length > 0) {
    throw new ProductSqliteSnapshotError(
      "WAL_PRESENT",
      `refusing closed copy while WAL/SHM present: ${sidecars.join(", ")}`,
    );
  }
  if (fs.existsSync(destinationPath)) {
    throw new ProductSqliteSnapshotError(
      "DEST_EXISTS",
      `destination already exists: ${destinationPath}`,
    );
  }
  ensureParentDir(destinationPath);
  try {
    fs.copyFileSync(sourcePath, destinationPath);
  } catch (error) {
    throw new ProductSqliteSnapshotError(
      "IO",
      "closed file copy failed",
      error,
    );
  }
  verifyProductSqliteIntegrityAtPath(destinationPath);
  return {
    method: "closed_copy",
    sourcePath,
    destinationPath,
    bytes: fs.statSync(destinationPath).size,
  };
}

/** Open destination with Product schema migration + integrity_check. */
export function verifyProductSqliteIntegrityAtPath(dbPath: string): void {
  assertAbsoluteSqlitePath("dbPath", dbPath);
  let db: DatabaseSync | null = null;
  try {
    db = openProductSqlite(dbPath);
  } catch (error) {
    throw new ProductSqliteSnapshotError(
      "INTEGRITY_FAILED",
      `product sqlite integrity/open failed: ${dbPath}`,
      error,
    );
  } finally {
    try {
      db?.close();
    } catch {
      /* ignore */
    }
  }
}

/**
 * Restore = verify snapshot file, then open as Product DB (caller owns lifecycle).
 * Does not overwrite `sourcePath`. Destination is the restored working copy.
 */
export function openRestoredProductSqlite(snapshotPath: string): DatabaseSync {
  verifyProductSqliteIntegrityAtPath(snapshotPath);
  return openProductSqlite(snapshotPath);
}
```

### FILE: projects/sfia-studio/app/__tests__/d1/l2d2S2RawDatabaseSyncExclusiveGate.test.ts
```typescript
/**
 * L2-D2 G-ACTIVATION PREPARATION S2 — D1 raw DatabaseSync exclusive gate.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  openD1Db,
  resetD1DbForTests,
  sealD1DbSingletonForLocalOaExclusiveCutover,
} from "@/lib/d1/db";
import { D1Error } from "@/lib/d1/errors";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";
import { D1ProjectRepository } from "@/lib/d1/repository";
import {
  D1_DEFAULT_WORKSPACE_ID,
  D1_GOVERNANCE_METHOD_MODE,
  D1_MONO_OPERATOR_ACTOR_ID,
} from "@/lib/d1/types";

const tempDirs: string[] = [];

function openDisposableD1() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s2-"));
  tempDirs.push(dir);
  const dbPath = path.join(dir, "d1.sqlite");
  setLocalOaExclusiveModeForTests(false);
  process.env.D1_SQLITE_PATH = dbPath;
  resetD1DbForTests();
  const db = openD1Db(dbPath);
  return { dbPath, db };
}

beforeEach(() => {
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  delete process.env.D1_SQLITE_PATH;
});

afterEach(() => {
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  delete process.env.D1_SQLITE_PATH;
  for (const dir of tempDirs.splice(0)) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

describe("L2-D2 S2 raw DatabaseSync exclusive gate", () => {
  it("openD1Db-wrapped handle refuses exec / Statement.run under exclusive ON", () => {
    const { db } = openDisposableD1();
    db.exec(
      `INSERT INTO d1_projects (
        project_id, workspace_id, name, objective, initial_context_summary,
        method_mode, state, owner_actor_id, created_at, updated_at, version
      ) VALUES (
        'proj-raw-1', '${D1_DEFAULT_WORKSPACE_ID}', 'Raw', 'obj', NULL,
        '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
        '2026-10-25T04:00:00.000Z', '2026-10-25T04:00:00.000Z', 1
      )`,
    );

    setLocalOaExclusiveModeForTests(true);

    expect(() =>
      db.exec(
        `INSERT INTO d1_projects (
          project_id, workspace_id, name, objective, initial_context_summary,
          method_mode, state, owner_actor_id, created_at, updated_at, version
        ) VALUES (
          'proj-raw-2', '${D1_DEFAULT_WORKSPACE_ID}', 'Blocked', 'obj', NULL,
          '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
          '2026-10-25T04:01:00.000Z', '2026-10-25T04:01:00.000Z', 1
        )`,
      ),
    ).toThrow(D1Error);

    expect(() =>
      db
        .prepare(
          `INSERT INTO d1_projects (
            project_id, workspace_id, name, objective, initial_context_summary,
            method_mode, state, owner_actor_id, created_at, updated_at, version
          ) VALUES (?, ?, ?, ?, NULL, ?, 'DRAFT', ?, ?, ?, 1)`,
        )
        .run(
          "proj-raw-3",
          D1_DEFAULT_WORKSPACE_ID,
          "BlockedRun",
          "obj",
          D1_GOVERNANCE_METHOD_MODE,
          D1_MONO_OPERATOR_ACTOR_ID,
          "2026-10-25T04:02:00.000Z",
          "2026-10-25T04:02:00.000Z",
        ),
    ).toThrow(D1Error);

    // Reads still allowed on wrapped handle (DET oracle).
    const count = (
      db.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as { c: number }
    ).c;
    expect(count).toBe(1);
  });

  it("sealD1DbSingleton closes applicative singleton before exclusive", () => {
    const { dbPath } = openDisposableD1();
    expect(fs.existsSync(dbPath)).toBe(true);
    sealD1DbSingletonForLocalOaExclusiveCutover();
    setLocalOaExclusiveModeForTests(true);
    expect(() => openD1Db(dbPath)).toThrow(D1Error);
  });

  it("KNOWN GAP residual: unwrapped new DatabaseSync can still mutate under exclusive", () => {
    const { dbPath } = openDisposableD1();
    setLocalOaExclusiveModeForTests(false);
    // Seed schema via applicative open, then hold a raw unwrapped connection.
    resetD1DbForTests();
    const raw = new DatabaseSync(dbPath);
    setLocalOaExclusiveModeForTests(true);
    // Direct construction bypasses openD1Db wrap — residual gap for non-applicative paths.
    raw.exec(
      `INSERT INTO d1_projects (
        project_id, workspace_id, name, objective, initial_context_summary,
        method_mode, state, owner_actor_id, created_at, updated_at, version
      ) VALUES (
        'proj-bypass', '${D1_DEFAULT_WORKSPACE_ID}', 'Bypass', 'obj', NULL,
        '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
        '2026-10-25T04:03:00.000Z', '2026-10-25T04:03:00.000Z', 1
      )`,
    );
    const count = (
      raw.prepare("SELECT COUNT(*) AS c FROM d1_projects WHERE project_id = ?")
        .get("proj-bypass") as { c: number }
    ).c;
    expect(count).toBe(1);
    raw.close();
    // Documented: production cutover must not construct raw D1 handles outside openD1Db.
  });

  it("repository mutations remain fail-closed under exclusive with wrapped injected db", () => {
    const { db } = openDisposableD1();
    const repo = new D1ProjectRepository(db);
    setLocalOaExclusiveModeForTests(true);
    expect(() =>
      repo.createProjectAtomic({
        project: {
          projectId: "proj-blocked",
          workspaceId: D1_DEFAULT_WORKSPACE_ID,
          name: "Blocked",
          objective: "must fail",
          initialContextSummary: null,
          methodMode: D1_GOVERNANCE_METHOD_MODE,
          state: "DRAFT",
          ownerActorId: D1_MONO_OPERATOR_ACTOR_ID,
          createdAt: "2026-10-25T04:04:00.000Z",
          updatedAt: "2026-10-25T04:04:00.000Z",
          version: 1,
        },
        assignments: [],
        events: [],
        idempotencyKey: "idem-s2-blocked",
        responseJson: "{}",
      }),
    ).toThrow(D1Error);
  });
});
```

### FILE: projects/sfia-studio/app/__tests__/d1/l2d2S3D4HttpReadinessHarness.test.ts
```typescript
/**
 * L2-D2 G-ACTIVATION PREPARATION S3 — D4 navigation readiness harness (DET).
 * Exercises page modules with next/navigation mocks + real exclusive env trim.
 * Does NOT start a LIVE Studio HTTP server (G-REAL not granted).
 * @vitest-environment node
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";
import { LOCAL_OA_EXCLUSIVE_ENV_KEY } from "@/lib/d1/localOaExclusiveMode";
import {
  denyLegacyProjectDeepLinkIfExclusive,
  redirectLegacyGenericEntryToStudioIfExclusive,
} from "@/lib/d1/legacyNavigation";

const redirect = vi.fn((url: string) => {
  const err = new Error(`NEXT_REDIRECT:${url}`);
  (err as Error & { digest?: string }).digest = `NEXT_REDIRECT;${url}`;
  throw err;
});
const notFound = vi.fn(() => {
  const err = new Error("NEXT_NOT_FOUND");
  (err as Error & { digest?: string }).digest = "NEXT_NOT_FOUND";
  throw err;
});

vi.mock("next/navigation", () => ({
  redirect: (url: string) => redirect(url),
  notFound: () => notFound(),
}));

beforeEach(() => {
  resetLocalOaExclusiveModeForTests();
  delete process.env[LOCAL_OA_EXCLUSIVE_ENV_KEY];
  redirect.mockClear();
  notFound.mockClear();
});

describe("L2-D2 S3 D4 HTTP readiness harness (DET)", () => {
  it("marker OFF — helpers are no-ops (historical D1 navigation preserved)", () => {
    setLocalOaExclusiveModeForTests(false);
    expect(() => redirectLegacyGenericEntryToStudioIfExclusive()).not.toThrow();
    expect(() => denyLegacyProjectDeepLinkIfExclusive()).not.toThrow();
    expect(redirect).not.toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });

  it("marker ON via test override — generic → /studio ; deep link → notFound", () => {
    setLocalOaExclusiveModeForTests(true);
    expect(() => redirectLegacyGenericEntryToStudioIfExclusive()).toThrow(
      /NEXT_REDIRECT:\/studio/,
    );
    expect(redirect).toHaveBeenCalledWith("/studio");
    expect(() => denyLegacyProjectDeepLinkIfExclusive()).toThrow(/NEXT_NOT_FOUND/);
    expect(notFound).toHaveBeenCalled();
  });

  it("marker ON via real process.env trim (\" 1 \") — no test override", () => {
    resetLocalOaExclusiveModeForTests();
    process.env[LOCAL_OA_EXCLUSIVE_ENV_KEY] = " 1 ";
    expect(() => redirectLegacyGenericEntryToStudioIfExclusive()).toThrow(
      /NEXT_REDIRECT:\/studio/,
    );
    expect(redirect).toHaveBeenCalledWith("/studio");
    expect(() => denyLegacyProjectDeepLinkIfExclusive()).toThrow(/NEXT_NOT_FOUND/);
  });

  it("no proj-* → prj:* translator module is imported by D4 pages", async () => {
    // Structural: deep-link helper never returns an OA id — only notFound.
    setLocalOaExclusiveModeForTests(true);
    try {
      denyLegacyProjectDeepLinkIfExclusive();
    } catch {
      /* expected */
    }
    expect(notFound).toHaveBeenCalledTimes(1);
    // Namespace disjointness: D1 ids stay D1; OA uses prj: — no mapper file in D4 surface.
    const fs = await import("node:fs");
    const path = await import("node:path");
    const appRoot = path.resolve(__dirname, "../..");
    const pageFiles = [
      "app/workspace/page.tsx",
      "app/projects/new/page.tsx",
      "app/nouvelle-demande/page.tsx",
      "app/projects/[id]/page.tsx",
    ];
    for (const rel of pageFiles) {
      const src = fs.readFileSync(path.join(appRoot, rel), "utf8");
      expect(src).toMatch(/legacyNavigation/);
      // Reject executable mapping (not the Option A denial comment).
      expect(src).not.toMatch(/mapProj|`prj:`\s*\+|prj:`\s*\+|toPrj|projIdToPrj/);
      expect(src).not.toMatch(/replace\(\s*\/proj/);
    }
  });

  it("OPS1 /ops1/nouvelle-demande is outside D4 helper wiring (inventory)", async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");
    const ops1Page = path.resolve(
      __dirname,
      "../../app/ops1/nouvelle-demande/page.tsx",
    );
    expect(fs.existsSync(ops1Page)).toBe(true);
    const src = fs.readFileSync(ops1Page, "utf8");
    expect(src).not.toMatch(/legacyNavigation/);
    expect(src).not.toMatch(/@\/lib\/d1/);
    // Policy: OPS1 remains OUT of initial D4 exclusive cutover surface (DET inventory).
    // Any future writer under exclusive requires distinct Morris decision.
  });
});
```

### FILE: projects/sfia-studio/app/__tests__/oa/project/l2d2S1ProductSqliteSnapshot.test.ts
```typescript
/**
 * L2-D2 G-ACTIVATION PREPARATION S1 — Product SQLite snapshot/restore DET.
 * Synthetic temp paths only. @vitest-environment node
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
  openRestoredProductSqlite,
  ProductSqliteSnapshotError,
  snapshotProductSqliteClosedCopy,
  snapshotProductSqliteVacuumInto,
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
    fixedNowIso: "2026-10-25T04:00:00.000Z",
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

describe("L2-D2 S1 Product SQLite snapshot/restore", () => {
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

    // Source remains usable after snapshot.
    const stillThere = await svc.getProject.execute({ projectId });
    expect(stillThere.ok).toBe(true);

    svc.dispose();
    openServices.pop();

    const restoredDb = openRestoredProductSqlite(snapPath);
    const row = restoredDb
      .prepare("SELECT project_id, payload_json FROM oa_projects WHERE project_id = ?")
      .get(projectId) as { project_id: string; payload_json: string };
    expect(row.project_id).toBe(projectId);
    const lps = restoredDb
      .prepare(
        "SELECT payload_json FROM oa_lps WHERE project_id = ? ORDER BY version DESC LIMIT 1",
      )
      .get(projectId) as { payload_json: string };
    expect(JSON.parse(lps.payload_json).objective).toBe(objective);
    restoredDb.close();

    // Reopen via Product services on restored path.
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

  it("closed copy refuses when WAL sidecar present; succeeds when closed clean", async () => {
    const dir = tempDir("sfia-s1-copy-");
    const sourcePath = path.join(dir, "oa-product.sqlite");
    const snapPath = path.join(dir, "copy.sqlite");
    const svc = buildServices(sourcePath);
    const created = await svc.createProject.execute({
      projectId: "prj:s1-copy",
      title: "Copy",
      objective: "closed copy",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:s1-copy-v1",
      idempotencyKey: "s1-copy-1",
    });
    expect(created.ok).toBe(true);

    // Simulate unmanaged WAL presence → fail-closed.
    fs.writeFileSync(`${sourcePath}-wal`, "fake-wal");
    expect(() =>
      snapshotProductSqliteClosedCopy(sourcePath, snapPath),
    ).toThrow(ProductSqliteSnapshotError);
    fs.unlinkSync(`${sourcePath}-wal`);

    svc.dispose();
    openServices.pop();

    const snap = snapshotProductSqliteClosedCopy(sourcePath, snapPath);
    expect(snap.method).toBe("closed_copy");
    const db = openRestoredProductSqlite(snapPath);
    const count = (
      db.prepare("SELECT COUNT(*) AS c FROM oa_projects").get() as { c: number }
    ).c;
    expect(count).toBe(1);
    db.close();
  });

  it("VACUUM INTO refuses overwrite of existing destination", async () => {
    const dir = tempDir("sfia-s1-ow-");
    const sourcePath = path.join(dir, "oa-product.sqlite");
    const snapPath = path.join(dir, "exists.sqlite");
    fs.writeFileSync(snapPath, "x");
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
    // Snapshot via VACUUM INTO on the live session connection (coherent).
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
```

### FILE: projects/sfia-studio/app/__tests__/oa/project/l2d2S4RcutDeterministicRehearsal.test.ts
```typescript
/**
 * L2-D2 G-ACTIVATION PREPARATION S4 — deterministic R-CUT rehearsal (disposable).
 * Links S1 snapshot, S2 D1 seal/freeze, S3 D4 helpers, OA create, reopen.
 * LIVE Studio / real env instance / HTTP server = NOT IN SCOPE.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
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

    // 14. No dual-write: D1 file unchanged (still 1 row; exclusive blocked writes).
    setLocalOaExclusiveModeForTests(false);
    resetD1DbForTests();
    const d1Recheck = openD1Db(d1Path);
    const d1CountAfter = (
      d1Recheck.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as {
        c: number;
      }
    ).c;
    expect(d1CountAfter).toBe(1);
    // Q12 RO fallback: NOT IMPLEMENTED — left OPEN (documented).
  });
});
```

### DIFF: projects/sfia-studio/app/lib/d1/db.ts
```diff
diff --git a/projects/sfia-studio/app/lib/d1/db.ts b/projects/sfia-studio/app/lib/d1/db.ts
index 962e9c29..8af49898 100644
--- a/projects/sfia-studio/app/lib/d1/db.ts
+++ b/projects/sfia-studio/app/lib/d1/db.ts
@@ -2,6 +2,7 @@ import { DatabaseSync } from "node:sqlite";
 import { resolveD1SqlitePath } from "./paths";
 import { D1Error } from "./errors";
 import { assertD1AccessAllowedWhenLocalOaExclusive } from "./localOaExclusiveMode";
+import { wrapD1DatabaseSyncForExclusiveGate } from "./wrapD1DatabaseSyncForExclusiveGate";

 const SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -125,7 +126,7 @@ export function openD1Db(dbPath?: string): DatabaseSync {
     singletonPath = null;
   }
   try {
-    const db = new DatabaseSync(resolved);
+    const db = wrapD1DatabaseSyncForExclusiveGate(new DatabaseSync(resolved));
     migrate(db);
     singleton = db;
     singletonPath = resolved;
@@ -136,7 +137,12 @@ export function openD1Db(dbPath?: string): DatabaseSync {
   }
 }

-export function resetD1DbForTests(): void {
+/**
+ * Close the process D1 singleton before / during local OA-exclusive cutover.
+ * Prevents reuse of a pre-opened applicative handle after exclusive ON.
+ * Does not track DatabaseSync instances constructed outside openD1Db.
+ */
+export function sealD1DbSingletonForLocalOaExclusiveCutover(): void {
   if (singleton) {
     try {
       singleton.close();
@@ -148,6 +154,10 @@ export function resetD1DbForTests(): void {
   singletonPath = null;
 }

+export function resetD1DbForTests(): void {
+  sealD1DbSingletonForLocalOaExclusiveCutover();
+}
+
 export function nowIso(): string {
   return new Date().toISOString();
 }
```

### DIFF: projects/sfia-studio/app/lib/oa/project/index.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/index.ts b/projects/sfia-studio/app/lib/oa/project/index.ts
index 770c0187..6aafb918 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -84,6 +84,14 @@ export {
   type CreateSqliteProductProjectServicesOptions,
   type SqliteProductProjectServices,
 } from "./infrastructure/sqlite/createSqliteProductProjectServices";
+export {
+  openRestoredProductSqlite,
+  ProductSqliteSnapshotError,
+  snapshotProductSqliteClosedCopy,
+  snapshotProductSqliteVacuumInto,
+  verifyProductSqliteIntegrityAtPath,
+  type ProductSqliteSnapshotResult,
+} from "./infrastructure/sqlite/productSqliteSnapshot";

 import type {
   ClockPort,
```

### DIFF: PRR volumes (05–09 + README) — name-status + stat
 ...05-environments-configuration-and-boundaries.md | 10 ++++++++
 .../06-persistence-restart-and-recovery.md         | 29 ++++++++++++----------
 .../07-authority-invariants-and-failure-modes.md   |  6 +++--
 .../08-test-proof-and-conformance-map.md           | 11 ++++++++
 ...9-known-gaps-reserves-and-current-boundaries.md | 10 +++++---
 .../production-runtime-reference/README.md         |  2 ++
 6 files changed, 50 insertions(+), 18 deletions(-)

### DIFF: PRR (full text patches)
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index bd52a599..a1488530 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -57,3 +57,13 @@
 | Isolation | Do **not** set exclusive globally for all Git worktrees ; Fresh Start remains a distinct preparation |
 | Merge effect | Code integrated — **does not** arm marker, create definitive DBs, or start Studio |
 | Anti-claims | Exclusive **not** ACTIVATED · cutover LIVE **not** proven · G-ACTIVATION **OPEN** |
+
+## Overlay — G-ACTIVATION PREPARATION H4-env class (DET harness — 2026-10-25)
+
+| Rule | Detail |
+|---|---|
+| Accepted class | **Fresh Start synthetic / disposable** for Delivery DET (S1–S4) — temp dirs, absolute SQLite paths, teardown of harness-owned resources only |
+| Not claimed | H4 **PASS** for a Morris-designated Studio user instance · Application Support paths · shared DBs across worktrees |
+| Marker in tests | Test-only override **or** real `process.env` trim=`"1"` inside isolated Vitest process — **≠** LIVE Studio env arming |
+| Dual-write | None — Product Truth C writes allowed under exclusive ; D1 applicative writers refuse |
+| Anti-claims | DET harness identity **≠** qualified operational instance · G-REAL / G-ACTIVATION **NOT GRANTED** by this overlay |
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index f2e9a658..6502b63b 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -107,23 +107,26 @@ Four situations must stay distinct (S2 / M-HD-01 HD11):
 | Freeze at mutation | `createProjectAtomic` / `selectMethodModeAtomic` / `BoundedAtomicAuditStore.append|clearForTests` assert before BEGIN/INSERT/UPDATE/DELETE — code CURRENT |
 | Dual-write Product↔D1 | **None** as target under exclusive |
 | H4 local | No historical D1→OA migration |
-| Backups / snapshot | **NOT PROVEN** — debt `R-L2D2-SQLITE-SNAPSHOT` (R-03). Naive file copy of `*.sqlite` **≠** validated cutover backup |
-| Restart | DET reopen / singleton reset / M1 process durability at tested scope · **Studio live restart / R-CUT** = **NOT PROVEN** |
-| Residual boundary | Raw `DatabaseSync` outside D1 applicative APIs **not** guarded — **KNOWN GAP** |
-| Proof | freeze + injected + O-01 + D5 + M1 — **DETERMINISTIC AT TESTED SCOPE** (31 PASS / 7) · post-merge CI SUCCESS |
-| Anti-claims | Exclusive **not** ACTIVATED by merge · cutover LIVE **not** proven · App Support definitive DBs **not** created by merge |
+| Backups / snapshot | **DET PROVEN AT SYNTHETIC SCOPE** (G-ACTIVATION PREPARATION S1) via `VACUUM INTO` + closed-copy fail-closed on WAL — debt `R-L2D2-SQLITE-SNAPSHOT` **PARTIAL**: LIVE/instance Application Support **NOT PROVEN** · naive hot file copy still **≠** coherent backup |
+| Restart | DET reopen / singleton reset / M1 process durability + S4 DET R-CUT rehearsal at disposable scope · **Studio live restart / R-CUT LIVE** = **NOT PROVEN** |
+| Residual boundary | `openD1Db` handles **wrapped** for exclusive mutative gate + singleton **seal** (S2 ADAPT) · unwrapped `new DatabaseSync(...)` outside `openD1Db` remains **KNOWN GAP** (R-03 residual) |
+| Proof | freeze + injected + O-01 + D5 + M1 + S1–S4 DET suites — **DETERMINISTIC AT TESTED SCOPE** · post-merge CI SUCCESS (PR #614 lineage) · S1–S4 = local Delivery (not yet project-merged) |
+| Anti-claims | Exclusive **not** ACTIVATED by merge · cutover LIVE **not** proven · App Support definitive DBs **not** created by merge · DET snapshot **≠** H4 real instance PASS |

 ### Debt — `R-L2D2-SQLITE-SNAPSHOT` (operational, pre–G-ACTIVATION)

-**Owner / gate:** Morris G-ACTIVATION preparation (distinct from G-GIT). **Exit:** documented + DET-proven coherent snapshot/restore of Truth C (+ Memory B if in scope) **before** exclusive arming on a designated local instance.
+**Owner / gate:** Morris G-ACTIVATION preparation (distinct from G-GIT). **DET exit (synthetic Fresh Start class):** PASS via `productSqliteSnapshot.ts` (`VACUUM INTO` / closed copy) + `l2d2S1ProductSqliteSnapshot.test.ts` + S4 rehearsal — Truth C Project+LPS restore on disposable path; Memory B session VACUUM covered when in contract. **LIVE/instance exit:** still required before exclusive arming on a designated H4-qualified local instance.

-**To qualify and prove (not claimed now):**
-1. Quiesce writers — no active Studio Product/Nora connections holding the target DB (or equivalent exclusive access).
-2. Account for SQLite sidecar files when present (`*-wal` / `*-shm`) — a lone `.sqlite` copy while WAL is hot is **not** a coherent backup.
-3. Prefer an online-safe mechanism when quiesce is incomplete (e.g. SQLite backup API / VACUUM INTO / checked checkpoint) over blind filesystem copy.
-4. Preserve source OA files until restore verification succeeds.
-5. Verify recovery by opening the snapshot on a disposable path and reading Project + LPS (Truth C) without mutating the live source.
-6. Record procedure + proof artifacts under the activation Decision Pack — **no live backup in this Cycle 13**.
+**Proven at DET synthetic scope:**
+1. Online-safe snapshot via SQLite `VACUUM INTO` on open Product `DatabaseSync` (Node has no `.backup` API).
+2. Closed-file copy refused when `-wal`/`-shm` sidecars present (fail-closed).
+3. Source preserved; restore opens on a **different** disposable path; integrity via Product open/migrate path.
+4. Destination overwrite refused.
+
+**Still required for LIVE/H4 instance (not claimed):**
+1. Quiesce writers on a designated Application Support–class instance.
+2. Operator procedure + Decision Pack evidence on that instance.
+3. No restore over a live user source without distinct GO.

 ## Additional stores (harvest)

diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 7a2d0c7e..663a2599 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -113,10 +113,12 @@ Code integrated on main. Invariants apply **when** exclusive is armed (trim=`"1"
 | INV-L2D2-CONFIRM-FORBIDDEN-OK-FALSE | Confirmation `FAILED`+`FORBIDDEN` → `actionExecuteConfirmation` `ok:false` / `FORBIDDEN` | `confirmation/actions.ts` | CURRENT IMPLEMENTED · DET |
 | INV-L2D2-CONFIRM-NO-ONDONE-ON-REFUSAL | UI must not treat refused confirmation as success (`ConfirmationPanel` skips `onDone` on `!ok`) | `ConfirmationPanel.tsx` + tests | CURRENT IMPLEMENTED · DET |
 | INV-L2D2-NO-MUTATION-VIA-GUARDED-APIS | No D1 write via guarded repository/audit APIs under exclusive (incl. injected connection) | injected suite | CURRENT IMPLEMENTED · DET |
-| INV-L2D2-NO-PROJ-TO-PRJ-MAP | Legacy D1 deep links do not rewrite `proj-*` → `prj:*` | `legacyNavigation.ts` / D4 tests | CURRENT IMPLEMENTED · DET · LIVE HTTP NOT PROVEN |
+| INV-L2D2-OPEN-HANDLE-MUTATION-GATED | `openD1Db` returns Proxy-wrapped handle — `exec` / `Statement.run` re-assert exclusive gate (reads via prepare+get remain) | `wrapD1DatabaseSyncForExclusiveGate.ts` / S2 suite | LOCAL DELIVERY CANDIDATE · DET (G-ACTIVATION PREPARATION) · not yet project-merged |
+| INV-L2D2-SINGLETON-SEAL-ON-CUTOVER | `sealD1DbSingletonForLocalOaExclusiveCutover` closes process singleton before exclusive arming | `db.ts` / S2+S4 | LOCAL DELIVERY CANDIDATE · DET |
+| INV-L2D2-NO-PROJ-TO-PRJ-MAP | Legacy D1 deep links do not rewrite `proj-*` → `prj:*` | `legacyNavigation.ts` / D4 tests + S3 harness | CURRENT IMPLEMENTED · DET · LIVE HTTP NOT PROVEN |
 | INV-REC-NE-HD / INV-MEMB-NE-TRUTHC | Recommendation ≠ HD ; Memory B ≠ Truth C | existing catalog | CURRENT IMPLEMENTED |

-**Residual KNOWN GAP:** unguarded raw SQLite on a held `DatabaseSync` outside D1 APIs (R-03).
+**Residual KNOWN GAP (R-03):** `new DatabaseSync(path)` constructed **outside** `openD1Db` is **not** wrapped — can still mutate under exclusive if a caller holds such a handle. Applicative D1 path (`openD1Db` + guarded APIs + seal) is gated at DET scope. Closing the residual would require proxy-global / engine pivot → **MORRIS ARCHITECTURE DECISION** (not done in this lot).

 **Failure mode (when exclusive ON):** D1 create/confirm refused ; Product OA create path remains the target continuity surface.

diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index eb0601e3..cca3dcd8 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -23,6 +23,17 @@

 **Batch cited:** CORR-02 / G-GIT pre-commit — **31 PASS / 7 files**. Post-merge CI [#40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) **SUCCESS** on merge `1a0ccd84…`. SQLite = `os.tmpdir()` only for DET. **LIVE Studio / Application Support / R-CUT / D4 HTTP: NOT PROVEN.** Q15 global: **PARTIAL**.

+## Overlay — AKG-M5 L2-D2 G-ACTIVATION PREPARATION S1–S4 (LOCAL DELIVERY CANDIDATE — DET — 2026-10-25)
+
+| Suite file | What it proves | Class |
+|---|---|---|
+| `l2d2S1ProductSqliteSnapshot.test.ts` | Product `VACUUM INTO` restore Project+LPS ; closed-copy WAL fail-closed ; dest overwrite refuse ; Memory B session VACUUM | DET · synthetic tmp only |
+| `l2d2S2RawDatabaseSyncExclusiveGate.test.ts` | Pre-open `openD1Db` handle: `exec`/`run` refuse after exclusive ; reads OK ; singleton seal ; **documents** residual raw `new DatabaseSync` bypass | DET |
+| `l2d2S3D4HttpReadinessHarness.test.ts` | Marker OFF no-op ; ON via override + real env trim ; generic→`/studio` ; deep link notFound ; no mapper ; OPS1 inventory outside D4 helper | DET (mocked next/navigation) · **≠** HTTP LIVE |
+| `l2d2S4RcutDeterministicRehearsal.test.ts` | Integrated: OA create → snapshot → D1 seed → seal+exclusive → D4 DET → OA write → reopen → restore ; no dual-write ; Q12 left OPEN | DET rehearsal · **≠** R-CUT LIVE |
+
+**Non-regression re-run (same Delivery WT):** freeze · injected · D4 · O-01 · D5 · M1 — PASS. **Anti-claims:** DET ≠ LIVE · H4 real instance **NOT QUALIFIED** · G-ACTIVATION / G-REAL **NOT GRANTED**.
+
 ## Flow → tests (selected)

 | Flow | Deterministic tests | Notes |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0ec067ee..16f8a5b3 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -15,13 +15,17 @@
 | DET proof | **31 PASS / 7 suites** + post-merge CI SUCCESS |
 | O-01 « comprendre » | LPS objective → Product UI **BEHAVIOR PROVEN AT TESTED SCOPE (DET)** — **≠** LIVE E2E COMPLETE |
 | **R-01** documentary lag | Documentary lag corrected and integrated on main through [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) · post-merge CI [#40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · **exit proof satisfied** · **formal close pending Morris** (**≠** FORMALLY CLOSED BY MORRIS) |
-| **R-02** D4 LIVE | DET redirect/notFound proven · Studio/HTTP LIVE path **NOT PROVEN** |
-| **R-03** SQLite / raw DB | Raw `DatabaseSync` KNOWN GAP · `R-L2D2-SQLITE-SNAPSHOT` OPEN — naive file copy **≠** coherent backup |
+| **R-02** D4 LIVE | DET redirect/notFound + S3 harness proven · Studio/HTTP LIVE path **NOT PROVEN** · **R-02 remains OPEN** |
+| **R-03** SQLite / raw DB | Snapshot DET **PARTIAL CLOSE** at synthetic scope (`VACUUM INTO`) · residual raw `new DatabaseSync` outside `openD1Db` **KNOWN GAP** · R-03 **not** fully CLOSED |
+| Q12 RO fallback | **OPEN** — not implemented in this Delivery · blocking only if Morris treats it as cutover safety prerequisite |
+| OPS1 | **OUT** of initial D4 helper surface · page uses `NouvelleDemandePageClient` without `@/lib/d1` / `legacyNavigation` · exclusive writer conflict **not** observed on that page import graph · residual product risk if shared client later gains D1 writes → Morris decision |
 | Q15 global | **PARTIAL** |
+| R-CUT DET | **PASS** at disposable test scope (S4) |
 | R-CUT LIVE | **NOT PROVEN** |
+| H4 real instance | **NOT QUALIFIED** — Fresh Start **class** accepted for DET harness only |
 | P6 GLOBAL PASS | **NOT CLAIMED** |
 | Runtime v3 | **NON ADOPTED** · AKG-M5 GLOBAL **OPEN** |
-| Exit path | **Historical:** [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** · [CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · **R-01 exit proof satisfied**. **Governance:** R-01 formal closure remains a distinct Morris decision (**NOT CONSUMED** / ≠ FORMALLY CLOSED). **Remaining product trajectory:** **G-ACTIVATION PREPARATION** only under distinct Morris GO · H4-env qualification · coherent SQLite snapshot/restore · D4 HTTP LIVE · R-CUT LIVE · then eventual GO Morris **G-ACTIVATION** (**NOT GRANTED**; ≠ preparation/activation authorization) |
+| Exit path | **Historical:** [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** · [CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · **R-01 exit proof satisfied**. **Governance:** R-01 formal closure remains a distinct Morris decision (**NOT CONSUMED** / ≠ FORMALLY CLOSED). **This lot:** G-ACTIVATION PREPARATION S1–S4 DET Delivery (local candidate; **G-GIT project NOT AUTHORIZED**). **Remaining:** H4-env instance qualification · D4 HTTP LIVE (G-REAL) · R-CUT LIVE · residual raw-DB policy · then eventual GO Morris **G-ACTIVATION** (**NOT GRANTED**) |

 ## Overlay — AKG-M5 L2-D1 O-01 + D5 (CURRENT ON MAIN — PR #612 post-merge verified 2026-10-24)

diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 0367ea7b..3e11be49 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -46,6 +46,8 @@ Fake/DET remains the deterministic proof path for R1/R2 at tested scope. Determi

 Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** · merge `7b64ab21aa29211d5fce93d06d24bce539a0c5a5` · [post-merge CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · eight Cycle-14 digests on main · **R-01 exit proof satisfied** · formal close **NOT CONSUMED** · digest match ≠ semantic exhaustiveness (**NO PRODUCT SEMANTIC IMPACT**) · code L2-D2 remains DEFAULT OFF / NOT ACTIVATED (PR #614 distinct).

+**G-ACTIVATION PREPARATION S1–S4 (LOCAL DELIVERY CANDIDATE — 2026-10-25):** DET proofs for Product SQLite `VACUUM INTO` snapshot/restore · `openD1Db` exclusive mutation wrap + singleton seal · D4 DET harness · integrated R-CUT rehearsal. Volumes 05–09 R24 authoring in same lot. **Manifest digests NOT refreshed** (await G-MANIFEST). **Anti-claims:** G-ACTIVATION / G-REAL / H4 real instance / D4 HTTP LIVE / R-CUT LIVE / G-GIT project **NOT** granted · residual raw `new DatabaseSync` KNOWN GAP · Q12 OPEN · runtime v3 **NON ADOPTED**.
+
 ## What this corpus is

 This corpus describes **how SFIA Studio actually works now** in the checked-out Git tree:
```


---

## 15. Handoff L3 (to be filled after publish)

| Field | Value |
|---|---|
| Publisher | `scripts/sfia/publish-review-handoff.sh` |
| Message | `review(handoff): AKG-M5 L2-D2 activation prep delivery` |
| Remote SHA | _(pending)_ |
| Remote blob | _(pending)_ |
