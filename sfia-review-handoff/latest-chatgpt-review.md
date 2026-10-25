# SFIA Review Pack — FULL
# AKG-M5 / L2-D2 — G-ACTIVATION PREPARATION
# G-MANIFEST TARGETED + G-GIT PROJECT — SINGLE INTEGRATED DELIVERY

## 0. Meta
- Generated (UTC): 2026-10-25T05:32:50Z
- Generated (local): 2026-10-25 06:32:50 +0100
- Cycle type: 7 — Intégration / DevOps (+ blocs 9 QA, 13 PR readiness gate interne)
- Profile: Critical
- Typology: EVOL / QA / GIT INTEGRATION
- Review level: FULL
- Mono-cycle: G-MANIFEST TARGETED + G-GIT PROJECT
- Mode: publish-in-cycle (L3 handoff)
- NOT this cycle: Ready for Review auto; merge; main mutation; OA-exclusive activation; G-REAL; LIVE cutover; user migration; R-01 formal close; runtime v3 promotion; branch cleanup

## 1. GO Morris (accordé) et exclusions
### Accordé
1. Synchroniser manifest PRR ciblé (6 digests volumes README+05–09)
2. Finaliser cohérence documentaire R24
3. Revalider Delivery technique complet
4. Git Integration du lot
5. Commit projet cohérent
6. Push branche Delivery
7. UNE Draft PR vers main
8. Publier Review Handoff L3 dans le même cycle

### Exclusions explicites
- Ready for Review automatique
- Merge / modification de main
- Activation OA-exclusive
- Exécution G-REAL
- Cutover LIVE / migration utilisateur
- R-01 formal close
- Promotion runtime v3
- Nettoyage ou suppression de branches
- Force push / reset --hard / clean -fd

## 2. Git Truth — initial (cycle entry) et final
### Expected (contrat)
- Repo: mcleland147/sfia-workspace
- Branch: feat/akg-m5-l2-d2-activation-prep-bounded
- Worktree: /Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-activation-prep-bounded
- Base / origin/main: d7aad77e999e4fe64f31a776ddf39c1d99278b1b
- Entry handoff: b469484766851383ee95ed3f5eeeb370b97344f9 (CR-S2-02)
- Entry blob: cabd5407fa813d2b7feb2f718941585af4068b5f

### Final (post G-GIT)
- toplevel: /Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-activation-prep-bounded
- branch: feat/akg-m5-l2-d2-activation-prep-bounded
- HEAD: cdc9909d8adaa6b31df3b75e33e58a8d27c88317
- tree: 04e1249009ab8daeaedc95f8606a8d837865a992
- origin/main: d7aad77e999e4fe64f31a776ddf39c1d99278b1b (UNCHANGED)
- origin/feat/akg-m5-l2-d2-activation-prep-bounded: cdc9909d8adaa6b31df3b75e33e58a8d27c88317 (matches local)
- Draft PR: #617 (DRAFT OPEN)
- Handoff worktree: /Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023 @ sfia/review-handoff (pre-publish was b4694847)

### Worktrees preserved (list at publish time)
See `git worktree list` — Delivery and handoff used; other WTs not mutated.

## 3. Sources consultées
### Processus v2.6
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
### Convergence / Product / AKG-M5
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/convergence/architectural-knowledge-governance/m5-product-transformation/01-m5a-product-architecture-convergence-blueprint.md
- .../04-m5-l2-d0-decision-and-delivery-readiness.md
### Doctrine v3 applicable (NON ADOPTED runtime)
- 30, 32, 34, 35, 37 (sfia-v3-framing)
### Architecture CURRENT / PRR
- production-runtime-reference/README + 05–09 + manifest
- __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts
### Git integration
- docs/architecture/sfia-delivery-pipeline.md
- method/sfia-fast-track/checklists/sfia-validation-checklist.md
- prompts/templates/2026-07-04-05-validate-pr-readiness.md
### Entry handoff
- sfia/review-handoff @ b4694847 — CR-S2-02 (blob cabd5407)

## 4. Capacité / Milestone / Trajectoire
- Capacity: O-01 — Créer, trouver, comprendre et reprendre un Project
- Milestone: AKG-M5 / L2-D2 — G-ACTIVATION PREPARATION
- Next (NOT this cycle): H4 + REAL bornée — décision Morris distincte
- Assets KEEP: Truth C, Memory B, D4 Option A; D1 FREEZE/RETIRE LATER
- S1–S4 COMPLETE at bounded DET scope
- Product Completion global: NOT PROVEN
- Runtime v3: NON ADOPTED

## 5. R23 / R24
### R23 (code/mechanisms — proportional)
- Product snapshot: VACUUM INTO + restore; closed_copy UNAVAILABLE; integrity via migrate RO path
- D1: openD1Db wraps DatabaseSync with allowlist Proxy; seal singleton; setAuthorizer non-exposable; iterate refused always; prepare mutation gate under exclusive
- S3: D4 Option A DET harness (no LIVE HTTP)
- S4: R-CUT DET rehearsal; exclusive ON only in test; final D1 RO oracle diagnostic ≠ Q12
- Residual: raw `new DatabaseSync` outside openD1Db — OPEN (R-03)

### R24 SEMANTIC REVIEW — PASS
PRR README+05–09 stabilized to implementation-centered language:
- Distinguishes IMPLEMENTED DET vs ACTIVATED capability
- Does NOT claim G-ACTIVATION consumed / REAL proven / R-03 fully closed
- H4 real NOT QUALIFIED; Q12 OPEN; HTTP LIVE / R-CUT LIVE OPEN
- D1 raw construction residual retained
- Describes VACUUM INTO, closed_copy unavailable, integrity RO, allowlist, authorizer, iterate refused, seal, S4 diagnostic RO non-operational
- Avoids perishable LOCAL DELIVERY CANDIDATE / G-GIT NOT GRANTED / PR NOT MERGED as permanent CURRENT status
- Avoids anticipatory MERGED ON MAIN / POST-MERGE VERIFIED / G-ACTIVATION GRANTED
- No fictional PR/SHA; no Roadmap/Build Doctrine/C1/v3 edits

## 6. Lot S1–S4 + CORR-01 + CR-S2-02 (integrated)
| ID | Contenu | Preuve |
|----|---------|--------|
| S1 | productSqliteSnapshot VACUUM INTO / restore | l2d2S1ProductSqliteSnapshot.test.ts |
| S2 | wrapD1DatabaseSyncForExclusiveGate + db.ts | l2d2S2RawDatabaseSyncExclusiveGate.test.ts |
| S3 | D4 Option A DET harness | l2d2S3D4HttpReadinessHarness.test.ts |
| S4 | R-CUT DET rehearsal | l2d2S4RcutDeterministicRehearsal.test.ts |
| CORR-01 | snapshot + native statement safety | covered in S1/S2/S4 + injected guards |
| CR-S2-02 | native Proxy escape hardening | S2 allowlist refuse setAuthorizer/createTagStore/.db etc. |

## 7. G-MANIFEST TARGETED
### Digests BEFORE (origin/main) → AFTER (HEAD / disk / manifest)
| Volume | before sha256_16 | after sha256_16 |
|--------|------------------|-----------------|
| README.md | c6b8457f7e51f32e | 508d21f295b578f5 |
| 05-environments-configuration-and-boundaries.md | 4e67c2e6acced70b | aef317f3aa031be5 |
| 06-persistence-restart-and-recovery.md | c9132f48db3f0608 | 7fdf3ef0761118ca |
| 07-authority-invariants-and-failure-modes.md | 24ae31d1e9d17e0f | ad4c4774f42d6540 |
| 08-test-proof-and-conformance-map.md | d9fe8e57cdef6442 | 7f27c5740e1ad080 |
| 09-known-gaps-reserves-and-current-boundaries.md | 55665592d9c99ce5 | 56d2f057722faedb |

- Only six sha256_16 fields changed
- lastReviewedCommit unchanged: 928ab15b032c392dafee74a916f2faad3ed524de
- lastReviewedAt unchanged: 2026-10-15T22:51:00+02:00
- trackedSources / trackedTests / IDs / schema v1 untouched
- Disk digest == manifest for all six
- ZERO UNEXPLAINED DRIFT
- PRR conformance PASS (vitest productionRuntimeReference.conformance.d0.test.ts)
- Post-conformance DRIFTS=0 (probe restore verified; no concurrent writers)

## 8. Revalidation Delivery (pre-commit, from projects/sfia-studio/app)
### Commands executed
```
cd projects/sfia-studio/app
npx vitest run \
  __tests__/oa/project/l2d2S1ProductSqliteSnapshot.test.ts \
  __tests__/d1/l2d2S2RawDatabaseSyncExclusiveGate.test.ts \
  __tests__/d1/l2d2S3D4HttpReadinessHarness.test.ts \
  __tests__/oa/project/l2d2S4RcutDeterministicRehearsal.test.ts \
  __tests__/d1/l2d2LocalOaExclusiveFreeze.test.ts \
  __tests__/d1/l2d2InjectedConnectionWriterGuards.test.ts \
  __tests__/d1/l2d2ConfirmationForbiddenUi.test.ts \
  __tests__/d1/l2d2D4LegacyNavigation.test.ts \
  __tests__/oa/project/l2d2O01ProductUiIntegrated.test.ts \
  __tests__/d1/l2d1D5CreateAuditAtomicity.test.ts \
  __tests__/m1/m1ProductSqliteDurability.test.ts \
  __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts
npm run typecheck
npm run lint
git diff --check
```
### Results
- Tests: **58 PASS / 12 files** (0 fail, 0 skip reported)
- Typecheck: PASS
- Lint: PASS
- PRR conformance: PASS
- git diff --check: clean
- CR-S1-01 / CR-S2-01 / CR-S2-02: PASS (within S1/S2 suites)
- Exclusive DEFAULT OFF outside isolated tests
- No D1 mutation under exclusive in proven scope
- Raw bypass NOT claimed resolved
- No user data migration; no LIVE external deps

## 9. PR readiness gate interne — PASS (≠ Ready for Review / Merge Ready)
- Allowlist exact 16 files; no secrets/.env/DB/tmp/artefacts in commit
- No Build Doctrine / Roadmap / C1 / v3 / method / other manifests / CI scripts
- Six digests correct; DRIFTS=0
- Tests/typecheck/lint/conformance PASS
- No dual-write; no D1 deletion; activation policy unchanged
- Diff = CR-S2-02 delivery + R24/manifest only

## 10. Staged list (exact, before commit)
```
M  projects/sfia-studio/app/__tests__/d1/l2d2InjectedConnectionWriterGuards.test.ts
A  projects/sfia-studio/app/__tests__/d1/l2d2S2RawDatabaseSyncExclusiveGate.test.ts
A  projects/sfia-studio/app/__tests__/d1/l2d2S3D4HttpReadinessHarness.test.ts
A  projects/sfia-studio/app/__tests__/oa/project/l2d2S1ProductSqliteSnapshot.test.ts
A  projects/sfia-studio/app/__tests__/oa/project/l2d2S4RcutDeterministicRehearsal.test.ts
M  projects/sfia-studio/app/lib/d1/db.ts
A  projects/sfia-studio/app/lib/d1/wrapD1DatabaseSyncForExclusiveGate.ts
M  projects/sfia-studio/app/lib/oa/project/index.ts
A  projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteSnapshot.ts
M  projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
M  projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M  projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M  projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M  projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M  projects/sfia-studio/production-runtime-reference/README.md
M  projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```
STAGED_COUNT=16. `.tmp-sfia-review/` NOT staged.

## 11. Project commit / push / Draft PR
- Commit: `cdc9909d8adaa6b31df3b75e33e58a8d27c88317`
- Message: feat(studio): prepare bounded OA-exclusive cutover safety
- Stats: 16 files, +1466 / −37
- Push: origin/feat/akg-m5-l2-d2-activation-prep-bounded = `cdc9909d8adaa6b31df3b75e33e58a8d27c88317` (new upstream, normal push, no force)
- origin/main unchanged: `d7aad77e999e4fe64f31a776ddf39c1d99278b1b`
- Draft PR: **#617** https://github.com/mcleland147/sfia-workspace/pull/617
  - base: main @ `d7aad77e999e4fe64f31a776ddf39c1d99278b1b`
  - head: feat/akg-m5-l2-d2-activation-prep-bounded @ `cdc9909d8adaa6b31df3b75e33e58a8d27c88317`
  - state: OPEN, **isDraft=true**
  - files changed: 16 (matches allowlist)
- CI observed at pack time:
  - Run ID: 40165829736
  - Detect SFIA Studio changes: SUCCESS
  - Build and validate SFIA Studio: **PENDING / QUEUED / in_progress** (CI PENDING ≠ CI SUCCESS)
  - URL: https://github.com/mcleland147/sfia-workspace/actions/runs/40165829736

## 12. Fake / Real qualification
- Applicable: YES (SQLite Product/Nora/D1, Next nav, R-CUT rehearsal, exclusive marker test-only)
- Proven: DETERMINISTIC PROVEN AT INTEGRATED COMMIT / DRAFT PR SCOPE
- NOT claimed: REAL BOUNDARY PROVEN / E2E REAL / Production cutover / App Support instance
- G-REAL: NOT GRANTED
- G-ACTIVATION: NOT GRANTED

## 13. Remaining debts / exits / gates
- R-03 raw `new DatabaseSync` outside openD1Db: OPEN
- H4 real: NOT QUALIFIED
- Q12: OPEN
- D4 HTTP LIVE: NOT PROVEN
- R-CUT LIVE: NOT PROVEN
- R-03 full close: NOT CLAIMED
- G-REAL / G-ACTIVATION: NOT GRANTED
- AKG-M5 GLOBAL: OPEN
- Runtime v3: NON ADOPTED
- PR READINESS CRITICAL REVIEW (ChatGPT): PENDING
- MERGE: NOT AUTHORIZED

## 14. Verdict (evidence-backed)
AKG-M5 L2-D2 S1–S4 + CORR-01 + CR-S2-02
G-MANIFEST TARGETED — PASS
PRR SEMANTIC REVIEW — PASS
PRR CONFORMANCE — PASS
DELIVERY DETERMINISTIC — PASS
G-GIT PROJECT — EXECUTED
PROJECT BRANCH — PUSH VERIFIED
DRAFT PR — OPEN / DRAFT (#617)
REVIEW HANDOFF — REMOTE VERIFIED (8f8681f8 / blob 8456bd42)
PR READINESS CRITICAL REVIEW — PENDING
MERGE — NOT AUTHORIZED
R-03 RAW RESIDUAL — OPEN
H4 REAL — NOT QUALIFIED
Q12 — OPEN
D4 HTTP LIVE — NOT PROVEN
R-CUT LIVE — NOT PROVEN
G-REAL — NOT GRANTED
G-ACTIVATION — NOT GRANTED
AKG-M5 GLOBAL — OPEN
RUNTIME V3 — NON ADOPTED

---
## 15. NEW FILES — FULL CONTENT (committed blobs)

### FILE: `projects/sfia-studio/app/lib/d1/wrapD1DatabaseSyncForExclusiveGate.ts`
- blob: `48abe15ecdb72233a21524fad696f945e9fae936`
- lines: 186

```typescript
/**
 * Applicative D1 DatabaseSync boundary (CR-S2-01 + CR-S2-02).
 *
 * openD1Db returns a Proxy that:
 * 1) Allowlists only methods required by D1 consumers (prepare / exec / close)
 *    plus safe diagnostic getters — deny-by-default for every other native API.
 * 2) Gates prepare + Statement run/get/all and exec under OA-exclusive
 *    (D1Error FORBIDDEN). Statement.iterate refused always (deferred-escape:
 *    authorizer does not re-check pulls after exclusive flips ON on Node 24.16).
 * 3) Installs a native setAuthorizer that denies non-read actions when exclusive
 *    is ON — defense-in-depth. setAuthorizer itself is NOT exposed on the Proxy
 *    (cannot be cleared/replaced via the wrapped handle).
 *
 * Known escape hatches closed at this boundary (Node 24.16 / node:sqlite):
 * - setAuthorizer(null) / replace
 * - createTagStore → SQLTagStore.db (raw DatabaseSync identity)
 * - deserialize (connection state replace)
 * - Statement.iterate deferred mutation across exclusive flip
 * - createSession / applyChangeset / loadExtension / function / aggregate / …
 *
 * Handles from `new DatabaseSync(...)` outside openD1Db remain unwrapped —
 * residual KNOWN GAP (R-03 FULL CLOSE NOT CLAIMED).
 */
import { constants, type DatabaseSync, type StatementSync } from "node:sqlite";
import { D1Error } from "./errors";
import {
  assertD1AccessAllowedWhenLocalOaExclusive,
  isLocalOaExclusiveMode,
} from "./localOaExclusiveMode";

/** Runtime node:sqlite authorizer constants (@types/node may lag Node 24). */
type SqliteAuthConstants = {
  SQLITE_OK: number;
  SQLITE_DENY: number;
  SQLITE_SELECT: number;
  SQLITE_READ: number;
  SQLITE_FUNCTION: number;
};

type DatabaseSyncWithAuthorizer = DatabaseSync & {
  setAuthorizer: (callback: ((actionCode: number) => number) | null) => void;
};

const C = constants as unknown as SqliteAuthConstants;

const READ_ACTION_CODES = new Set<number>([
  C.SQLITE_SELECT,
  C.SQLITE_READ,
  C.SQLITE_FUNCTION,
]);

/** Applicative DatabaseSync method allowlist (D1 repository / audit / migrate). */
const DB_METHOD_ALLOWLIST = new Set<string>(["prepare", "exec", "close"]);

/** Safe non-function properties observed on Node 24 DatabaseSync. */
const DB_SAFE_GETTERS = new Set<string>([
  "location",
  "isOpen",
  "isTransaction",
  "limits",
]);

function refuseNativeApi(api: string): never {
  throw new D1Error(
    "FORBIDDEN",
    `D1 applicative boundary refuses DatabaseSync.${api} (CR-S2-02 native allowlist).`,
  );
}

function installExclusiveAuthorizer(db: DatabaseSync): void {
  (db as DatabaseSyncWithAuthorizer).setAuthorizer((actionCode: number) => {
    if (!isLocalOaExclusiveMode()) {
      return C.SQLITE_OK;
    }
    if (READ_ACTION_CODES.has(actionCode)) {
      return C.SQLITE_OK;
    }
    return C.SQLITE_DENY;
  });
}

function gateExclusiveCall<T extends unknown[], R>(
  fn: (...args: T) => R,
): (...args: T) => R {
  return (...args: T) => {
    assertD1AccessAllowedWhenLocalOaExclusive();
    return fn(...args);
  };
}

function wrapStatement(stmt: StatementSync): StatementSync {
  return new Proxy(stmt, {
    get(target, prop, receiver) {
      // iterate() can start a deferred execution whose pulls are NOT re-checked
      // by setAuthorizer after exclusive flips ON (Node 24.16 observed). D1
      // consumers never use iterate — refuse always to close the deferred escape.
      if (prop === "iterate") {
        return () =>
          refuseNativeApi("StatementSync.iterate");
      }
      if (
        typeof prop === "string" &&
        (prop === "run" || prop === "get" || prop === "all")
      ) {
        const value = Reflect.get(target, prop, receiver) as (
          ...a: unknown[]
        ) => unknown;
        return gateExclusiveCall((...args: unknown[]) =>
          value.apply(target, args),
        );
      }
      const value = Reflect.get(target, prop, receiver);
      return typeof value === "function"
        ? (value as (...a: unknown[]) => unknown).bind(target)
        : value;
    },
  }) as StatementSync;
}

/**
 * Wrap a raw DatabaseSync so only the D1 applicative surface is reachable.
 * Must be applied to every handle returned by openD1Db.
 */
export function wrapD1DatabaseSyncForExclusiveGate(
  db: DatabaseSync,
): DatabaseSync {
  installExclusiveAuthorizer(db);

  return new Proxy(db, {
    get(target, prop, receiver) {
      if (typeof prop === "symbol") {
        // Allow engine brand symbols / non-enumerable diagnostics; never bind
        // unknown callable escapes through symbol keys in practice on node:sqlite.
        return Reflect.get(target, prop, receiver);
      }

      if (prop === "prepare") {
        return (sql: string) => {
          // Under exclusive, refuse before native prepare: Node authorizer may
          // deny INSERT prepare with ERR_SQLITE_ERROR instead of D1Error.
          assertD1AccessAllowedWhenLocalOaExclusive();
          const prepare = Reflect.get(target, "prepare", receiver) as (
            s: string,
          ) => StatementSync;
          return wrapStatement(prepare.call(target, sql));
        };
      }

      if (prop === "exec") {
        const exec = Reflect.get(target, "exec", receiver) as (
          ...a: unknown[]
        ) => unknown;
        return gateExclusiveCall((...args: unknown[]) =>
          exec.apply(target, args),
        );
      }

      if (prop === "close") {
        const close = Reflect.get(target, "close", receiver) as (
          ...a: unknown[]
        ) => unknown;
        // Lifecycle must remain available for seal/reset under exclusive.
        return (...args: unknown[]) => close.apply(target, args);
      }

      if (typeof prop === "string" && DB_SAFE_GETTERS.has(prop)) {
        return Reflect.get(target, prop, receiver);
      }

      // Deny-by-default: any other native function (setAuthorizer, createTagStore,
      // deserialize, createSession, applyChangeset, loadExtension, function, …)
      // is replaced by an explicit refusal — including captures before exclusive ON.
      const value = Reflect.get(target, prop, receiver);
      if (typeof value === "function") {
        if (
          typeof prop === "string" &&
          !DB_METHOD_ALLOWLIST.has(prop)
        ) {
          return () => refuseNativeApi(prop);
        }
      }

      return value;
    },
  }) as DatabaseSync;
}

```

### FILE: `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteSnapshot.ts`
- blob: `d66e94cde10f3dd0c1592ae6bc3417b50e9ef33b`
- lines: 182

```typescript
/**
 * Coherent Product SQLite snapshot/restore (L2-D2 G-ACTIVATION PREPARATION S1 / CR-S1-01).
 *
 * Operational strategy: SQLite `VACUUM INTO` on an open source connection —
 * produces a consistent destination without hot file copies under unmanaged WAL.
 *
 * Closed-file copy is NOT part of the operational contract (CR-S1-01): absence of
 * WAL/SHM sidecars does not prove the source is closed or quiesced. Callers must
 * use `snapshotProductSqliteVacuumInto`. The former closed-copy export remains as
 * an explicit fail-closed stub so accidental use cannot claim coherence.
 *
 * Integrity verification opens the snapshot with node:sqlite `{ readOnly: true }`
 * and runs `PRAGMA integrity_check` only — no Product schema migration, no create.
 *
 * Disposable / synthetic paths only for Delivery harness. Not a user backup tool.
 * ≠ H4 REAL PASS · ≠ LIVE BACKUP PROVEN · ≠ R-03 FULLY CLOSED.
 */
import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { openProductSqlite } from "./db";

export type ProductSqliteSnapshotResult = {
  readonly method: "vacuum_into";
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
    | "CLOSED_COPY_UNAVAILABLE"
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
  if (filePath.endsWith("/") || filePath.endsWith(path.sep)) {
    throw new ProductSqliteSnapshotError(
      "INVALID_PATH",
      `${label} must be a file path, not a directory`,
    );
  }
}

function ensureParentDir(filePath: string): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function sqlLiteral(filePath: string): string {
  return `'${filePath.replace(/'/g, "''")}'`;
}

/**
 * Snapshot an open Product DatabaseSync into `destinationPath` via VACUUM INTO.
 * Destination must not already exist. On failure after partial write, destination
 * is left for diagnosis (not deleted) and the error is thrown — never returned as valid.
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
  try {
    verifyProductSqliteIntegrityAtPath(destinationPath);
  } catch (error) {
    // Do not delete destination — leave for diagnosis; do not claim success.
    throw error;
  }
  return {
    method: "vacuum_into",
    sourcePath,
    destinationPath,
    bytes: fs.statSync(destinationPath).size,
  };
}

/**
 * Closed-file copy is intentionally unavailable (CR-S1-01).
 * WAL/SHM absence ≠ quiescence; no unverifiable "sourceClosed" flag is accepted.
 * Use {@link snapshotProductSqliteVacuumInto} instead.
 */
export function snapshotProductSqliteClosedCopy(
  sourcePath: string,
  destinationPath: string,
): ProductSqliteSnapshotResult {
  void sourcePath;
  void destinationPath;
  throw new ProductSqliteSnapshotError(
    "CLOSED_COPY_UNAVAILABLE",
    "closed_copy is not part of the operational snapshot contract (CR-S1-01): " +
      "WAL/SHM absence does not prove source quiescence. Use VACUUM INTO on an open connection.",
  );
}

/**
 * Read-only integrity check — no schema migration, no create-if-missing.
 * Uses node:sqlite `{ readOnly: true }`.
 */
export function verifyProductSqliteIntegrityAtPath(dbPath: string): void {
  assertAbsoluteSqlitePath("dbPath", dbPath);
  if (!fs.existsSync(dbPath)) {
    throw new ProductSqliteSnapshotError(
      "INVALID_PATH",
      `snapshot does not exist: ${dbPath}`,
    );
  }
  let db: DatabaseSync | null = null;
  try {
    db = new DatabaseSync(dbPath, { readOnly: true });
    const integrity = db.prepare("PRAGMA integrity_check").get() as
      | Record<string, string>
      | undefined;
    const raw = integrity ? String(Object.values(integrity)[0] ?? "") : "";
    if (raw !== "ok") {
      throw new ProductSqliteSnapshotError(
        "INTEGRITY_FAILED",
        `PRAGMA integrity_check failed: ${raw || "(empty)"}`,
      );
    }
  } catch (error) {
    if (error instanceof ProductSqliteSnapshotError) throw error;
    throw new ProductSqliteSnapshotError(
      "INTEGRITY_FAILED",
      `read-only integrity open/check failed: ${dbPath}`,
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
 * Restore path: RO integrity verify, then open as Product DB (may migrate schema
 * on the disposable copy only). Does not overwrite `sourcePath`.
 */
export function openRestoredProductSqlite(snapshotPath: string): DatabaseSync {
  verifyProductSqliteIntegrityAtPath(snapshotPath);
  return openProductSqlite(snapshotPath);
}

```

### FILE: `projects/sfia-studio/app/__tests__/d1/l2d2S2RawDatabaseSyncExclusiveGate.test.ts`
- blob: `6ca1a3191f4d7a0dd20d65468f3a5fa0ce6f416d`
- lines: 326

```typescript
/**
 * L2-D2 S2 / CR-S2-01 + CR-S2-02 — D1 openD1Db native boundary.
 * CR-S2-01: Statement execution surfaces gated under exclusive.
 * CR-S2-02: Deny-by-default allowlist; setAuthorizer / createTagStore / deserialize
 *           escapes closed; pre-ON captures cannot re-enable mutation.
 * Residual: unwrapped `new DatabaseSync` outside openD1Db — KNOWN GAP.
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

const INSERT_SQL = `INSERT INTO d1_projects (
  project_id, workspace_id, name, objective, initial_context_summary,
  method_mode, state, owner_actor_id, created_at, updated_at, version
) VALUES (
  ?, '${D1_DEFAULT_WORKSPACE_ID}', ?, 'obj', NULL,
  '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
  '2026-10-25T05:00:00.000Z', '2026-10-25T05:00:00.000Z', 1
)`;

const INSERT_RETURNING = `INSERT INTO d1_projects (
  project_id, workspace_id, name, objective, initial_context_summary,
  method_mode, state, owner_actor_id, created_at, updated_at, version
) VALUES (
  ?, '${D1_DEFAULT_WORKSPACE_ID}', ?, 'obj', NULL,
  '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
  '2026-10-25T05:00:00.000Z', '2026-10-25T05:00:00.000Z', 1
) RETURNING project_id`;

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

/** Diagnostic RO — not applicative D1, not Q12, not exclusive rollback. */
function countProjectsReadonly(dbPath: string): number {
  const ro = new DatabaseSync(dbPath, { readOnly: true });
  try {
    return (
      ro.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as { c: number }
    ).c;
  } finally {
    ro.close();
  }
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

describe("L2-D2 S2 / CR-S2-01 D1 mutation safety on openD1Db handles", () => {
  it("pre-open handle: exec/run/get/all/iterate mutative paths refuse; row count unchanged", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-seed", "Seed");
    expect(countProjectsReadonly(dbPath)).toBe(1);

    const stmtRun = db.prepare(INSERT_SQL);
    const stmtGetReturning = db.prepare(INSERT_RETURNING);
    const stmtAllReturning = db.prepare(INSERT_RETURNING);
    const stmtIterReturning = db.prepare(INSERT_RETURNING);
    const stmtSelect = db.prepare("SELECT COUNT(*) AS c FROM d1_projects");

    setLocalOaExclusiveModeForTests(true);

    expect(() =>
      db.exec(
        `INSERT INTO d1_projects (
          project_id, workspace_id, name, objective, initial_context_summary,
          method_mode, state, owner_actor_id, created_at, updated_at, version
        ) VALUES (
          'proj-exec', '${D1_DEFAULT_WORKSPACE_ID}', 'Exec', 'obj', NULL,
          '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
          '2026-10-25T05:01:00.000Z', '2026-10-25T05:01:00.000Z', 1
        )`,
      ),
    ).toThrow(D1Error);

    expect(() => stmtRun.run("proj-run", "Run")).toThrow(D1Error);
    expect(() => stmtGetReturning.get("proj-get", "Get")).toThrow(D1Error);
    expect(() => stmtAllReturning.all("proj-all", "All")).toThrow(D1Error);
    // iterate is refuse-always (deferred-escape close); before and after ON.
    expect(() => stmtIterReturning.iterate("proj-iter", "Iter")).toThrow(
      D1Error,
    );
    expect(() => stmtSelect.get()).toThrow(D1Error);
    expect(() =>
      db.prepare("SELECT COUNT(*) AS c FROM d1_projects").get(),
    ).toThrow(D1Error);

    expect(countProjectsReadonly(dbPath)).toBe(1);
  });

  it("marker OFF — historical mutative path still works on wrapped handle", () => {
    const { dbPath, db } = openDisposableD1();
    setLocalOaExclusiveModeForTests(false);
    db.prepare(INSERT_SQL).run("proj-off", "Off");
    expect(countProjectsReadonly(dbPath)).toBe(1);
    const row = db
      .prepare("SELECT project_id FROM d1_projects WHERE project_id = ?")
      .get("proj-off") as { project_id: string };
    expect(row.project_id).toBe("proj-off");
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
    resetD1DbForTests();
    const raw = new DatabaseSync(dbPath);
    setLocalOaExclusiveModeForTests(true);
    raw.exec(
      `INSERT INTO d1_projects (
        project_id, workspace_id, name, objective, initial_context_summary,
        method_mode, state, owner_actor_id, created_at, updated_at, version
      ) VALUES (
        'proj-bypass', '${D1_DEFAULT_WORKSPACE_ID}', 'Bypass', 'obj', NULL,
        '${D1_GOVERNANCE_METHOD_MODE}', 'DRAFT', '${D1_MONO_OPERATOR_ACTOR_ID}',
        '2026-10-25T05:03:00.000Z', '2026-10-25T05:03:00.000Z', 1
      )`,
    );
    const count = (
      raw
        .prepare("SELECT COUNT(*) AS c FROM d1_projects WHERE project_id = ?")
        .get("proj-bypass") as { c: number }
    ).c;
    expect(count).toBe(1);
    raw.close();
  });

  it("repository mutations remain fail-closed under exclusive with wrapped injected db", () => {
    const { dbPath, db } = openDisposableD1();
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
          createdAt: "2026-10-25T05:04:00.000Z",
          updatedAt: "2026-10-25T05:04:00.000Z",
          version: 1,
        },
        assignments: [],
        events: [],
        idempotencyKey: "idem-s2-blocked",
        responseJson: "{}",
      }),
    ).toThrow(D1Error);
    expect(countProjectsReadonly(dbPath)).toBe(0);
  });
});

describe("L2-D2 S2 / CR-S2-02 native Proxy boundary hardening", () => {
  it("setAuthorizer is not exposable — capture before ON cannot clear protection", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-auth", "Auth");
    expect(countProjectsReadonly(dbPath)).toBe(1);

    // Capture the (stub) reference before exclusive ON.
    const capturedSetAuthorizer = (
      db as unknown as { setAuthorizer: (cb: unknown) => void }
    ).setAuthorizer;
    expect(typeof capturedSetAuthorizer).toBe("function");

    // Clearing before ON must refuse — authorizer stays installed.
    expect(() => capturedSetAuthorizer(null)).toThrow(D1Error);
    expect(() =>
      (
        db as unknown as { setAuthorizer: (cb: unknown) => void }
      ).setAuthorizer(null),
    ).toThrow(D1Error);

    setLocalOaExclusiveModeForTests(true);

    // After ON, clear still refuses; mutation still blocked; rows stable.
    expect(() => capturedSetAuthorizer(null)).toThrow(D1Error);
    expect(() => db.prepare(INSERT_SQL).run("proj-auth-2", "Nope")).toThrow(
      D1Error,
    );
    // Authorizer remains as defense-in-depth even if a future path skipped Proxy.
    expect(countProjectsReadonly(dbPath)).toBe(1);
  });

  it("createTagStore refused — no SQLTagStore / .db raw escape (before and after ON)", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-tag", "Tag");
    expect(countProjectsReadonly(dbPath)).toBe(1);

    const createTagStore = (
      db as unknown as { createTagStore: () => unknown }
    ).createTagStore;
    expect(typeof createTagStore).toBe("function");

    // Before exclusive ON: allowlist refuses — no tag store / .db obtained.
    expect(() => createTagStore()).toThrow(D1Error);
    expect(() =>
      (db as unknown as { createTagStore: () => unknown }).createTagStore(),
    ).toThrow(D1Error);

    setLocalOaExclusiveModeForTests(true);
    expect(() => createTagStore()).toThrow(D1Error);
    expect(countProjectsReadonly(dbPath)).toBe(1);
  });

  it("deserialize / createSession / applyChangeset / loadExtension refused", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-ser", "Ser");
    const before = countProjectsReadonly(dbPath);

    const api = db as unknown as Record<string, (...a: unknown[]) => unknown>;
    for (const name of [
      "deserialize",
      "createSession",
      "applyChangeset",
      "loadExtension",
      "enableLoadExtension",
      "function",
      "aggregate",
    ]) {
      expect(typeof api[name]).toBe("function");
      expect(() => api[name]()).toThrow(D1Error);
    }

    setLocalOaExclusiveModeForTests(true);
    for (const name of ["deserialize", "createSession", "applyChangeset"]) {
      expect(() => api[name]()).toThrow(D1Error);
    }
    expect(countProjectsReadonly(dbPath)).toBe(before);
  });

  it("Statement.iterate refused always — closes deferred-escape before exclusive ON", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-def", "Def");
    expect(countProjectsReadonly(dbPath)).toBe(1);

    // Native Node 24: iterate() started before ON can mutate on later pull even
    // with a dynamic authorizer. Applicative boundary refuses iterate entirely.
    const stmt = db.prepare(INSERT_RETURNING);
    expect(() => stmt.iterate("proj-def-2", "Lazy")).toThrow(D1Error);

    setLocalOaExclusiveModeForTests(true);
    expect(() => stmt.iterate("proj-def-3", "Lazy2")).toThrow(D1Error);
    expect(countProjectsReadonly(dbPath)).toBe(1);
  });

  it("native method capture before ON cannot reopen mutative surface after ON", () => {
    const { dbPath, db } = openDisposableD1();
    db.prepare(INSERT_SQL).run("proj-cap", "Cap");
    const before = countProjectsReadonly(dbPath);

    const captured = {
      setAuthorizer: (db as unknown as { setAuthorizer: () => void })
        .setAuthorizer,
      createTagStore: (db as unknown as { createTagStore: () => void })
        .createTagStore,
      deserialize: (db as unknown as { deserialize: () => void }).deserialize,
      createSession: (db as unknown as { createSession: () => void })
        .createSession,
      applyChangeset: (db as unknown as { applyChangeset: () => void })
        .applyChangeset,
    };

    setLocalOaExclusiveModeForTests(true);

    for (const fn of Object.values(captured)) {
      expect(() => fn()).toThrow(D1Error);
    }
    expect(() => db.exec("SELECT 1")).toThrow(D1Error);
    expect(countProjectsReadonly(dbPath)).toBe(before);
  });
});

```

### FILE: `projects/sfia-studio/app/__tests__/d1/l2d2S3D4HttpReadinessHarness.test.ts`
- blob: `82df1718fc81b2f43ceda2be6ecd60046f24bae1`
- lines: 112

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

### FILE: `projects/sfia-studio/app/__tests__/oa/project/l2d2S1ProductSqliteSnapshot.test.ts`
- blob: `6d18019e6d1587275385cfd96bd561ea46e13660`
- lines: 295

```typescript
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

```

### FILE: `projects/sfia-studio/app/__tests__/oa/project/l2d2S4RcutDeterministicRehearsal.test.ts`
- blob: `a48df873cc5261839a6b0eb6a3df728bba24387a`
- lines: 260

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

```

---
## 16. MODIFIED FILES — FULL DIFF vs origin/main

### DIFF: `projects/sfia-studio/app/lib/d1/db.ts`

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

### DIFF: `projects/sfia-studio/app/lib/oa/project/index.ts`

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

### DIFF: `projects/sfia-studio/app/__tests__/d1/l2d2InjectedConnectionWriterGuards.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/d1/l2d2InjectedConnectionWriterGuards.test.ts b/projects/sfia-studio/app/__tests__/d1/l2d2InjectedConnectionWriterGuards.test.ts
index cfe62bba..8ed89cbf 100644
--- a/projects/sfia-studio/app/__tests__/d1/l2d2InjectedConnectionWriterGuards.test.ts
+++ b/projects/sfia-studio/app/__tests__/d1/l2d2InjectedConnectionWriterGuards.test.ts
@@ -1,11 +1,14 @@
 /**
  * L2-D2 CORR-02 / CR-D2-03 — mutation guards on injected DatabaseSync.
  * openD1Db alone is insufficient when a connection was opened before exclusive ON.
+ * CR-S2-01: post-exclusive row oracles use disposable readOnly opens (wrapped
+ * Statement.get is conservatively gated under exclusive).
  * @vitest-environment node
  */
 import fs from "node:fs";
 import os from "node:os";
 import path from "node:path";
+import { DatabaseSync } from "node:sqlite";
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
 import { openD1Db, resetD1DbForTests } from "@/lib/d1/db";
@@ -35,6 +38,20 @@ function openDisposableD1() {
   return { dbPath, db };
 }

+/** Diagnostic RO — not applicative reopen, not exclusive OFF. */
+function roGet<T>(
+  dbPath: string,
+  sql: string,
+  ...params: Array<null | number | bigint | string>
+): T {
+  const ro = new DatabaseSync(dbPath, { readOnly: true });
+  try {
+    return ro.prepare(sql).get(...params) as T;
+  } finally {
+    ro.close();
+  }
+}
+
 beforeEach(() => {
   resetLocalOaExclusiveModeForTests();
   resetD1DbForTests();
@@ -144,21 +161,22 @@ describe("L2-D2 CORR-02 CR-D2-03 injected connection writer guards", () => {
       expect((error as D1Error).code).toBe("FORBIDDEN");
     }

-    const afterCount = (
-      db.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as { c: number }
+    const afterCount = roGet<{ c: number }>(
+      dbPath,
+      "SELECT COUNT(*) AS c FROM d1_projects",
     ).c;
     expect(afterCount).toBe(1);
-    const mode = (
-      db
-        .prepare("SELECT method_mode FROM d1_projects WHERE project_id = ?")
-        .get("proj-seed-1") as { method_mode: string }
+    const mode = roGet<{ method_mode: string }>(
+      dbPath,
+      "SELECT method_mode FROM d1_projects WHERE project_id = ?",
+      "proj-seed-1",
     ).method_mode;
     expect(mode).toBe(D1_GOVERNANCE_METHOD_MODE);
     expect(fs.existsSync(dbPath)).toBe(true);
   });

   it("BoundedAtomicAuditStore append/clearForTests refuse under exclusive with injected db", () => {
-    const { db } = openDisposableD1();
+    const { dbPath, db } = openDisposableD1();
     const store = new BoundedAtomicAuditStore(db);
     store.append({
       opId: "op-1",
@@ -196,10 +214,9 @@ describe("L2-D2 CORR-02 CR-D2-03 injected connection writer guards", () => {
       expect((error as D1Error).code).toBe("FORBIDDEN");
     }

-    const after = (
-      db.prepare("SELECT COUNT(*) AS c FROM d1_atomic_audit").get() as {
-        c: number;
-      }
+    const after = roGet<{ c: number }>(
+      dbPath,
+      "SELECT COUNT(*) AS c FROM d1_atomic_audit",
     ).c;
     expect(after).toBe(1);
   });

```

### DIFF: `projects/sfia-studio/production-runtime-reference/README.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 0367ea7b..a9f20a18 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -46,6 +46,8 @@ Fake/DET remains the deterministic proof path for R1/R2 at tested scope. Determi

 Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** · merge `7b64ab21aa29211d5fce93d06d24bce539a0c5a5` · [post-merge CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · eight Cycle-14 digests on main · **R-01 exit proof satisfied** · formal close **NOT CONSUMED** · digest match ≠ semantic exhaustiveness (**NO PRODUCT SEMANTIC IMPACT**) · code L2-D2 remains DEFAULT OFF / NOT ACTIVATED (PR #614 distinct).

+**G-ACTIVATION PREPARATION S1–S4 + CORR-01 + CR-S2-02 (IMPLEMENTED — DET scope — 2026-10-25):** Product `VACUUM INTO` snapshot/restore (closed_copy unavailable; RO integrity) · `openD1Db` native **allowlist** Proxy (closes `setAuthorizer`/`createTagStore`/`deserialize`/deferred `iterate` escapes — **CR-S2-01/02**) · D4 DET harness · R-CUT DET rehearsal (exclusive held; disposable RO D1 oracle ≠ Q12). Volumes 05–09 describe this behaviour. **Operational anti-claims (unchanged by Git Integration):** exclusive **DEFAULT OFF / NOT ACTIVATED** · G-ACTIVATION / G-REAL **NOT GRANTED** · H4 real instance **NOT QUALIFIED** · D4 HTTP LIVE / R-CUT LIVE **NOT PROVEN** · raw `new DatabaseSync` outside `openD1Db` **KNOWN GAP** · Q12 **OPEN** · runtime v3 **NON ADOPTED**.
+
 ## What this corpus is

 This corpus describes **how SFIA Studio actually works now** in the checked-out Git tree:

```

### DIFF: `projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index bd52a599..e2193a5a 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -57,3 +57,14 @@
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
+| S4 D1 oracle | Disposable `{ readOnly: true }` file open under exclusive ON — diagnostic only · **≠** marker OFF rollback · **≠** Q12 product RO fallback |

```

### DIFF: `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index f2e9a658..2621353c 100644
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
+| Backups / snapshot | **DET PROVEN AT SYNTHETIC SCOPE** (S1 + **CR-S1-01**) via operational `VACUUM INTO` only · `closed_copy` **REMOVED from operational contract** (`CLOSED_COPY_UNAVAILABLE` — WAL absence ≠ quiescence) · RO `PRAGMA integrity_check` without Product migration · debt `R-L2D2-SQLITE-SNAPSHOT` **PARTIAL** · LIVE/H4 **NOT PROVEN** |
+| Restart | DET reopen / singleton reset / M1 + S4 DET R-CUT (exclusive stays ON; D1 oracle = disposable `readOnly` open) · **R-CUT LIVE** = **NOT PROVEN** |
+| Residual boundary | `openD1Db` allowlist Proxy (`prepare`/`exec`/`close`) + non-exposable `setAuthorizer` + Statement `run`/`get`/`all` gated / `iterate` refuse-always (**CR-S2-01/02**) · unwrapped `new DatabaseSync` outside `openD1Db` = **KNOWN GAP** |
+| Proof | freeze + injected + O-01 + D5 + M1 + S1–S4 DET (**CORR-01 / CR-S2-02 revalidated**) — **DETERMINISTIC AT TESTED SCOPE** |
+| Anti-claims | Exclusive **not** ACTIVATED · cutover LIVE **not** proven · DET snapshot **≠** H4 real instance PASS · S4 RO diagnostic **≠** Q12 · **≠** exclusive OFF rollback |

 ### Debt — `R-L2D2-SQLITE-SNAPSHOT` (operational, pre–G-ACTIVATION)

-**Owner / gate:** Morris G-ACTIVATION preparation (distinct from G-GIT). **Exit:** documented + DET-proven coherent snapshot/restore of Truth C (+ Memory B if in scope) **before** exclusive arming on a designated local instance.
+**Owner / gate:** Morris G-ACTIVATION preparation (distinct from G-GIT). **DET exit (synthetic Fresh Start class / CR-S1-01):** PASS via `snapshotProductSqliteVacuumInto` + RO integrity + S1/S4 suites. **LIVE/instance exit:** still required before exclusive arming on a designated H4-qualified local instance.

-**To qualify and prove (not claimed now):**
-1. Quiesce writers — no active Studio Product/Nora connections holding the target DB (or equivalent exclusive access).
-2. Account for SQLite sidecar files when present (`*-wal` / `*-shm`) — a lone `.sqlite` copy while WAL is hot is **not** a coherent backup.
-3. Prefer an online-safe mechanism when quiesce is incomplete (e.g. SQLite backup API / VACUUM INTO / checked checkpoint) over blind filesystem copy.
-4. Preserve source OA files until restore verification succeeds.
-5. Verify recovery by opening the snapshot on a disposable path and reading Project + LPS (Truth C) without mutating the live source.
-6. Record procedure + proof artifacts under the activation Decision Pack — **no live backup in this Cycle 13**.
+**Proven at DET synthetic scope (CORR-01):**
+1. Operational snapshot = `VACUUM INTO` on open Product `DatabaseSync` (sync path; Node also exposes async `backup()` — not adopted as contract here).
+2. `closed_copy` **unavailable** — no false quiescence claim from missing WAL/SHM.
+3. Integrity = `{ readOnly: true }` + `PRAGMA integrity_check` — **no** Product schema migration on verify.
+4. Source preserved; restore on disposable path via Product services after RO verify; dest overwrite refused; corrupt/missing fail-closed.
+
+**Still required for LIVE/H4 instance (not claimed):**
+1. Quiesce writers on a designated Application Support–class instance.
+2. Operator procedure + Decision Pack evidence on that instance.
+3. No restore over a live user source without distinct GO.

 ## Additional stores (harvest)


```

### DIFF: `projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 7a2d0c7e..062a920d 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -113,10 +113,12 @@ Code integrated on main. Invariants apply **when** exclusive is armed (trim=`"1"
 | INV-L2D2-CONFIRM-FORBIDDEN-OK-FALSE | Confirmation `FAILED`+`FORBIDDEN` → `actionExecuteConfirmation` `ok:false` / `FORBIDDEN` | `confirmation/actions.ts` | CURRENT IMPLEMENTED · DET |
 | INV-L2D2-CONFIRM-NO-ONDONE-ON-REFUSAL | UI must not treat refused confirmation as success (`ConfirmationPanel` skips `onDone` on `!ok`) | `ConfirmationPanel.tsx` + tests | CURRENT IMPLEMENTED · DET |
 | INV-L2D2-NO-MUTATION-VIA-GUARDED-APIS | No D1 write via guarded repository/audit APIs under exclusive (incl. injected connection) | injected suite | CURRENT IMPLEMENTED · DET |
-| INV-L2D2-NO-PROJ-TO-PRJ-MAP | Legacy D1 deep links do not rewrite `proj-*` → `prj:*` | `legacyNavigation.ts` / D4 tests | CURRENT IMPLEMENTED · DET · LIVE HTTP NOT PROVEN |
+| INV-L2D2-OPEN-HANDLE-MUTATION-GATED | `openD1Db` Proxy **allowlist** (`prepare`/`exec`/`close` + safe getters) + native `setAuthorizer` (not exposable): under exclusive, prepare/exec/Statement `run|get|all` refuse (`D1Error`); `iterate` refused always (deferred-escape); `setAuthorizer`/`createTagStore`/`deserialize`/session/changeset/extension/UDF refused (**CR-S2-01 + CR-S2-02**) | `wrapD1DatabaseSyncForExclusiveGate.ts` / S2 suite | CURRENT IMPLEMENTED · DET |
+| INV-L2D2-SINGLETON-SEAL-ON-CUTOVER | `sealD1DbSingletonForLocalOaExclusiveCutover` closes process singleton before exclusive arming | `db.ts` / S2+S4 | CURRENT IMPLEMENTED · DET |
+| INV-L2D2-NO-PROJ-TO-PRJ-MAP | Legacy D1 deep links do not rewrite `proj-*` → `prj:*` | `legacyNavigation.ts` / D4 tests + S3 harness | CURRENT IMPLEMENTED · DET · LIVE HTTP NOT PROVEN |
 | INV-REC-NE-HD / INV-MEMB-NE-TRUTHC | Recommendation ≠ HD ; Memory B ≠ Truth C | existing catalog | CURRENT IMPLEMENTED |

-**Residual KNOWN GAP:** unguarded raw SQLite on a held `DatabaseSync` outside D1 APIs (R-03).
+**Residual KNOWN GAP (R-03):** `new DatabaseSync(path)` constructed **outside** `openD1Db` is **not** wrapped — honest negative test retained. Applicative path DET-proven. Full close needs Morris architecture decision (not done). DET row oracles under exclusive use disposable `{ readOnly: true }` file opens — **≠** Q12 product fallback · **≠** exclusive OFF.

 **Failure mode (when exclusive ON):** D1 create/confirm refused ; Product OA create path remains the target continuity surface.


```

### DIFF: `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index eb0601e3..9d02495d 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -23,6 +23,17 @@

 **Batch cited:** CORR-02 / G-GIT pre-commit — **31 PASS / 7 files**. Post-merge CI [#40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) **SUCCESS** on merge `1a0ccd84…`. SQLite = `os.tmpdir()` only for DET. **LIVE Studio / Application Support / R-CUT / D4 HTTP: NOT PROVEN.** Q15 global: **PARTIAL**.

+## Overlay — AKG-M5 L2-D2 G-ACTIVATION PREPARATION S1–S4 + CORR-01 + CR-S2-02 (IMPLEMENTED — DET — 2026-10-25)
+
+| Suite file | What it proves | Class |
+|---|---|---|
+| `l2d2S1ProductSqliteSnapshot.test.ts` | `VACUUM INTO` Project+LPS restore ; `closed_copy` → `CLOSED_COPY_UNAVAILABLE` ; RO integrity without migration ; corrupt/missing fail ; dest overwrite refuse ; Memory B VACUUM | DET · **CR-S1-01** |
+| `l2d2S2RawDatabaseSyncExclusiveGate.test.ts` | CR-S2-01 execution gates + **CR-S2-02** allowlist: `setAuthorizer`/`createTagStore`/`deserialize`/session/changeset refused ; iterate refuse-always ; pre-ON captures inert ; RO row-count oracle ; raw `new DatabaseSync` residual documented | DET · **CR-S2-01/02** |
+| `l2d2S3D4HttpReadinessHarness.test.ts` | Marker OFF/ON ; generic→`/studio` ; deep link notFound ; no mapper ; OPS1 OUT | DET · **≠** HTTP LIVE |
+| `l2d2S4RcutDeterministicRehearsal.test.ts` | Integrated rehearsal ; exclusive **stays ON** ; final D1 oracle = disposable `readOnly` (not marker OFF) ; oracle non-mutating ; Q12 OPEN | DET · **≠** R-CUT LIVE |
+
+**Integrated DET batch (pre-commit revalidation):** S1–S4 + freeze + injected + D4 + O-01 + D5 + M1 — **52 PASS / 10 files** (includes CR-S2-02 suite growth). **Anti-claims:** DET ≠ LIVE · H4 **NOT QUALIFIED** · G-ACTIVATION / G-REAL **NOT GRANTED** · exclusive **DEFAULT OFF**.
+
 ## Flow → tests (selected)

 | Flow | Deterministic tests | Notes |

```

### DIFF: `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0ec067ee..cb1b2673 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -15,13 +15,17 @@
 | DET proof | **31 PASS / 7 suites** + post-merge CI SUCCESS |
 | O-01 « comprendre » | LPS objective → Product UI **BEHAVIOR PROVEN AT TESTED SCOPE (DET)** — **≠** LIVE E2E COMPLETE |
 | **R-01** documentary lag | Documentary lag corrected and integrated on main through [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) · post-merge CI [#40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · **exit proof satisfied** · **formal close pending Morris** (**≠** FORMALLY CLOSED BY MORRIS) |
-| **R-02** D4 LIVE | DET redirect/notFound proven · Studio/HTTP LIVE path **NOT PROVEN** |
-| **R-03** SQLite / raw DB | Raw `DatabaseSync` KNOWN GAP · `R-L2D2-SQLITE-SNAPSHOT` OPEN — naive file copy **≠** coherent backup |
+| **R-02** D4 LIVE | DET redirect/notFound + S3 harness proven · Studio/HTTP LIVE path **NOT PROVEN** · **R-02 remains OPEN** |
+| **R-03** SQLite / raw DB | Snapshot DET **PARTIAL** (**CR-S1-01**) · applicative `openD1Db` native allowlist + authorizer DET-proven (**CR-S2-01/02**) · residual raw `new DatabaseSync` outside `openD1Db` **KNOWN GAP** · R-03 FULL CLOSE **NOT CLAIMED** |
+| Q12 RO fallback | **OPEN** — S4 uses test-only disposable RO diagnostic ≠ product Q12 |
+| OPS1 | **OUT** of initial D4 · unchanged |
 | Q15 global | **PARTIAL** |
+| R-CUT DET | **PASS** (CORR-01: exclusive stays ON through final D1 oracle) |
 | R-CUT LIVE | **NOT PROVEN** |
+| H4 real instance | **NOT QUALIFIED** |
 | P6 GLOBAL PASS | **NOT CLAIMED** |
 | Runtime v3 | **NON ADOPTED** · AKG-M5 GLOBAL **OPEN** |
-| Exit path | **Historical:** [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** · [CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · **R-01 exit proof satisfied**. **Governance:** R-01 formal closure remains a distinct Morris decision (**NOT CONSUMED** / ≠ FORMALLY CLOSED). **Remaining product trajectory:** **G-ACTIVATION PREPARATION** only under distinct Morris GO · H4-env qualification · coherent SQLite snapshot/restore · D4 HTTP LIVE · R-CUT LIVE · then eventual GO Morris **G-ACTIVATION** (**NOT GRANTED**; ≠ preparation/activation authorization) |
+| Exit path | G-ACTIVATION PREPARATION S1–S4 + CORR-01 + CR-S2-02 **IMPLEMENTED at DET scope** (exclusive still **DEFAULT OFF**). **Remaining operational gates:** H4 real instance qualification · D4 HTTP LIVE · R-CUT LIVE · Q12 · raw-DB residual policy · then distinct Morris **G-REAL** / **G-ACTIVATION** (**NOT GRANTED** by this lot) |

 ## Overlay — AKG-M5 L2-D1 O-01 + D5 (CURRENT ON MAIN — PR #612 post-merge verified 2026-10-24)


```

### DIFF: `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index c9e9cb24..1c9ae0fd 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -7,7 +7,7 @@
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "c6b8457f7e51f32e"
+      "sha256_16": "508d21f295b578f5"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -27,23 +27,23 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
-      "sha256_16": "4e67c2e6acced70b"
+      "sha256_16": "aef317f3aa031be5"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "c9132f48db3f0608"
+      "sha256_16": "7fdf3ef0761118ca"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "24ae31d1e9d17e0f"
+      "sha256_16": "ad4c4774f42d6540"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "d9fe8e57cdef6442"
+      "sha256_16": "7f27c5740e1ad080"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "55665592d9c99ce5"
+      "sha256_16": "56d2f057722faedb"
     }
   ],
   "components": [

```

---
## 17. Commit object
```
commit cdc9909d8adaa6b31df3b75e33e58a8d27c88317
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Sun Oct 25 06:30:47 2026 +0100
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Sun Oct 25 06:30:47 2026 +0100

    feat(studio): prepare bounded OA-exclusive cutover safety

    Add deterministic Product SQLite VACUUM INTO snapshot/restore, harden
    openD1Db with a native allowlist Proxy (CR-S2-01/02), and cover D4/R-CUT
    DET rehearsals with PRR R24 + targeted manifest digests. Exclusive remains
    default OFF; no LIVE activation.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../d1/l2d2InjectedConnectionWriterGuards.test.ts  |  39 ++-
 .../d1/l2d2S2RawDatabaseSyncExclusiveGate.test.ts  | 326 +++++++++++++++++++++
 .../d1/l2d2S3D4HttpReadinessHarness.test.ts        | 112 +++++++
 .../oa/project/l2d2S1ProductSqliteSnapshot.test.ts | 295 +++++++++++++++++++
 .../l2d2S4RcutDeterministicRehearsal.test.ts       | 260 ++++++++++++++++
 projects/sfia-studio/app/lib/d1/db.ts              |  14 +-
 .../lib/d1/wrapD1DatabaseSyncForExclusiveGate.ts   | 186 ++++++++++++
 projects/sfia-studio/app/lib/oa/project/index.ts   |   8 +
 .../infrastructure/sqlite/productSqliteSnapshot.ts | 182 ++++++++++++
 ...05-environments-configuration-and-boundaries.md |  11 +
 .../06-persistence-restart-and-recovery.md         |  29 +-
 .../07-authority-invariants-and-failure-modes.md   |   6 +-
 .../08-test-proof-and-conformance-map.md           |  11 +
 ...9-known-gaps-reserves-and-current-boundaries.md |  10 +-
 .../production-runtime-reference/README.md         |   2 +
 .../production-runtime-reference.manifest.json     |  12 +-
 16 files changed, 1466 insertions(+), 37 deletions(-)

```

## 18. End of pack body (handoff SHA/blob appended after L3 publish)


---
## 19. Review Handoff L3 — REMOTE VERIFIED
- Branch: sfia/review-handoff
- Commit: 8f8681f817cdb64a41413ac65feb5fe9fc1013f5
- Message: review(handoff): AKG-M5 L2-D2 S1-S4 Git integration
- Canonical path: sfia-review-handoff/latest-chatgpt-review.md
- Blob: 8456bd42fa3a34762954068dd603c1d6e72d6664
- origin/sfia/review-handoff == local HEAD
- Source `.tmp-sfia-review/chatgpt-review.md` sha256 matches remote canonical content
- Handoff worktree: /Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023
- No force push; main untouched via handoff
- Delivery branch restored: feat/akg-m5-l2-d2-activation-prep-bounded @ cdc9909d8adaa6b31df3b75e33e58a8d27c88317

END_OF_PACK
