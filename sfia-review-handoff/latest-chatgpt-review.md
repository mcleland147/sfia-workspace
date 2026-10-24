# SFIA Studio — AKG-M5 / L2-D2 Cycle 9 — CORR-REVIEW-01 REVIEW PACK EVIDENCE COMPLETION

**Profile:** CRITICAL
**Typologie:** DOC / EVIDENCE CORRECTION
**Date/heure locale:** 2026-10-24 18:02 CEST
**Auteur rapport:** Cursor (Composer)
**GO / Autorité:** Consomme le GO Delivery L2-D2 précédent **uniquement** pour régulariser ses preuves. **Aucune nouvelle mutation Product.** Aucun G-ACTIVATION / G-GIT projet.

---

## 0. Verdict Cursor

**REVIEW PACK EVIDENCE COMPLETE**
— MODIFIED CONTENT INCLUDED
— PRODUCT CODE UNCHANGED
— CRITICAL REVIEW REQUIRED
— ACTIVATION NOT AUTHORIZED

Instruction ChatGPT : Critical Review désormais possible sur le contenu intégral ci-dessous (diffs tracked + fichiers new complets + preuves tests). Ne pas traiter ce cycle comme une nouvelle Delivery.

---

## 1. Objectif CORR-REVIEW-01

Le handoff Delivery `fd416a75` / blob `982a2b02` était trop synthétique pour une Critical Review du freeze, des routes et des tests. Ce cycle publie le **contenu substantiel** des modifications **sans** retoucher le code Product.

---

## 2. Git Truth

| Check | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover` |
| Branch | `feat/akg-m5-l2-d2-local-oa-cutover` |
| HEAD | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| origin/main | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| Staged | **vide** |
| Handoff tip entrée | `fd416a75d457d0e340dfbb22d269e0f996402fba` |
| P6 dirty | ~11 — non altéré |
| WT collision note | `…-akg-m5-l2-d2-local-oa-cutover` = L2-D1 WT distinct (d98b3930) ; Delivery = path `feat-…` |

Git Truth : PASS. Aucun reset/stash/clean.

---

## 3. Sources / Convergence

Sources v2.6 + Doctrine/PRR/M5/L2-D0 + handoff Delivery lus en contexte. Capacité O-01. L2-D2 implémenté localement (dirty). G-ACTIVATION/G-GIT OPEN. Runtime v3 NON ADOPTED.

**Ce cycle :** PRODUCT CODE UNCHANGED (aucune écriture sous `app/lib`, `app/app`, tests Product). Seul artefact : Review Pack + handoff L3.

---

## 4. Inventaire exact des fichiers Delivery (état working tree)

### 4.1 Tracked modified (Product / config doc)

| Path | Status |
|---|---|
| `projects/sfia-studio/app/.env.example` | M |
| `projects/sfia-studio/app/app/nouvelle-demande/page.tsx` | M |
| `projects/sfia-studio/app/app/projects/[id]/page.tsx` | M |
| `projects/sfia-studio/app/app/projects/new/page.tsx` | M |
| `projects/sfia-studio/app/app/workspace/page.tsx` | M |
| `projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts` | M |
| `projects/sfia-studio/app/lib/d1/commands.ts` | M |
| `projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts` | M |
| `projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts` | M |
| `projects/sfia-studio/app/lib/d1/db.ts` | M |
| `projects/sfia-studio/app/lib/d1/errors.ts` | M |
| `projects/sfia-studio/app/lib/d1/index.ts` | M |
| `projects/sfia-studio/app/lib/d1/repository.ts` | M |

### 4.2 Untracked (créés Delivery)

| Path | Status |
|---|---|
| `projects/sfia-studio/app/lib/d1/localOaExclusiveMode.ts` | ?? |
| `projects/sfia-studio/app/lib/d1/localOaExclusiveMode.store.ts` | ?? |
| `projects/sfia-studio/app/lib/d1/localOaExclusiveMode.test-only.ts` | ?? |
| `projects/sfia-studio/app/lib/d1/legacyNavigation.ts` | ?? |
| `projects/sfia-studio/app/__tests__/d1/l2d2LocalOaExclusiveFreeze.test.ts` | ?? |
| `projects/sfia-studio/app/__tests__/d1/l2d2D4LegacyNavigation.test.ts` | ?? |
| `projects/sfia-studio/app/__tests__/oa/project/l2d2O01ProductUiIntegrated.test.tsx` | ?? |

### 4.3 Artefact local (pack)

| Path | Status |
|---|---|
| `.tmp-sfia-review/chatgpt-review.md` | M (ce cycle) |

Staged : aucun.

---

## 5. R23 — Composants / invariants / preuves

| Composant | Classification | Invariant | Preuve |
|---|---|---|---|
| `localOaExclusiveMode` + `openD1Db` | FREEZE gated | Exclusive=1 ⇒ aucun open D1 avant resolve/DDL | Q8 BEHAVIOR PROVEN AT TESTED SCOPE |
| Lazy repo/commands/confirm/audit | ADAPT | Pas d'open via default-arg pré-corps | COVERAGE VERIFIED + Q8 |
| `legacyNavigation` + pages | ADAPT D4 | Generics redirect ; deep-link notFound ; no map IDs | Q7/Q10 BEHAVIOR PROVEN |
| OA Product path | KEEP | Marqueur default OFF ; OA inchangé hors tests jetables | O-01 BEHAVIOR PROVEN DET |
| MethodModeHold | KEEP | ≠ freeze create (CR-D2-01) | DOCUMENTED |
| Confirmation `ok:true`+FAILED | KNOWN GAP / dette | Freeze effectif via `result.errorCode=FORBIDDEN` ; shape historique | DOCUMENTED réserve |
| O-01 « comprendre » live Studio | KNOWN GAP activation | DET UI intégré ≠ G-ACTIVATION | PARTIAL vs live |
| Q15 conversational large | PARTIAL | Non expansé | DOCUMENTED |

---

## 6. Ordre des guards D1 (fail-closed)

1. Appel writer/reader D1 (`createProject` / `selectMethodMode` / `executeConfirmedMutation` / `new D1ProjectRepository()` / `new BoundedAtomicAuditStore()` / `openD1Db`).
2. Corps résout repo **lazy** (`repoArg ?? new D1ProjectRepository()`).
3. Constructeur repo → `openD1Db()`.
4. **`assertD1AccessAllowedWhenLocalOaExclusive()`** — si mode actif → `D1Error FORBIDDEN` **avant** `resolveD1SqlitePath` / `DatabaseSync` / DDL.
5. Sinon resolve path + open + migrate.

Pages D4 : helpers **avant** tout `listWorkspaceProjects` / `getProject`.

Server actions : `actionCreateProject` / `actionSelectMethodMode` catch → `{ok:false, code:FORBIDDEN}`.
`actionExecuteConfirmation` : catch seulement si throw ; `executeConfirmedMutation` **retourne** FAILED sans rethrow → `ok:true` + `result.status=FAILED` + `errorCode=FORBIDDEN` (**réserve documentée**).

---

## 7. Preuves tests (Delivery — non re-exécutés ce cycle CORR)

Commandes historiques Delivery (cwd `projects/sfia-studio/app`) :

```
./node_modules/.bin/vitest run \
  __tests__/d1/l2d2LocalOaExclusiveFreeze.test.ts \
  __tests__/d1/l2d2D4LegacyNavigation.test.ts \
  __tests__/oa/project/l2d2O01ProductUiIntegrated.test.tsx \
  __tests__/oa/project/l2d1D5CreateAuditAtomicity.test.ts \
  __tests__/oa/project/m1ProductSqliteDurability.test.ts
```

Résultat rapporté Delivery : **Test Files 5 passed / Tests 27 passed**.

```
npm run typecheck   # tsc --noEmit — PASS
git diff --check    # PASS
```

**Ce cycle CORR :** aucun nouveau test exécuté ; aucun PASS inventé au-delà de ces preuves Delivery déjà établies.

### Setup / mocks / SQLite (résumé + contenu full §9)

- **Freeze/Q8 :** `mkdtemp` + `D1_SQLITE_PATH` jetable ; `setLocalOaExclusiveModeForTests(true)` ; assert `fs.existsSync(probe)===false` après refus.
- **D4/Q7/Q10 :** `vi.mock("next/navigation")` redirect/notFound ; inactive = no-op.
- **O-01 :** temp `oa-product.sqlite` via `productDbPath` ; `serverGuard` stub jsdom only ; UI `ProjectsPage` / `ProjectWorkspacePage` actions réelles ; probe D1 absent ; exclusive ON pendant scénario.

---

## 8. Q15 PARTIAL et réserve ok:true + FAILED

**Q15 :** non-régression conversationnelle large non étendue ; O-01 prouve titre/état UI depuis OA DET seulement → **PARTIAL**.

**Réserve confirmation :** sous exclusive, `executeConfirmedMutation` retourne `{status:"FAILED", errorCode:"FORBIDDEN"}` sans throw ; `actionExecuteConfirmation` renvoie donc `{ok:true, result:…FAILED}`. Effet freeze OK (pas d'écriture / pas de fichier) ; **amélioration future possible** : fail-closed shape `{ok:false}` — **gap code ultérieur**, hors CORR-REVIEW-01.

### Gaps correction code ultérieure (hors ce GO)

1. Harmoniser `actionExecuteConfirmation` pour propager FORBIDDEN en `ok:false`.
2. Q15 conversational NR ciblé post-activation.
3. G-ACTIVATION live proofs (App Support paths, Studio start).
4. Sync PRR (G-PRR).

---

## 9. Contenu complet — fichiers NEW (untracked)

### NEW `projects/sfia-studio/app/lib/d1/localOaExclusiveMode.ts`

```ts
/**
 * Local OA-exclusive cutover marker (L2-D2 Delivery).
 *
 * Env: SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=1
 * Default: inactive (historical D1 runtime unchanged).
 *
 * When active (future G-ACTIVATION only):
 * - all D1 SQLite opens fail closed before resolve/open/DDL
 * - legacy navigation uses deny/redirect (D4 Option A)
 *
 * Server-only intent. Not a parallel policy engine.
 * Test override: localOaExclusiveMode.test-only.ts (never barrel-exported).
 */

import { D1Error } from "./errors";
import { localOaExclusiveModeOverrideSlot } from "./localOaExclusiveMode.store";

export const LOCAL_OA_EXCLUSIVE_ENV_KEY =
  "SFIA_STUDIO_LOCAL_OA_EXCLUSIVE" as const;

export function isLocalOaExclusiveMode(): boolean {
  const override = localOaExclusiveModeOverrideSlot.current;
  if (override !== null) return override;
  return process.env[LOCAL_OA_EXCLUSIVE_ENV_KEY]?.trim() === "1";
}

/**
 * Fail-closed gate for any D1 persistence open/write path.
 * Must run before resolveD1SqlitePath / DatabaseSync / DDL.
 */
export function assertD1AccessAllowedWhenLocalOaExclusive(): void {
  if (!isLocalOaExclusiveMode()) return;
  throw new D1Error(
    "FORBIDDEN",
    "D1 access blocked: SFIA_STUDIO_LOCAL_OA_EXCLUSIVE is active (OA Product Truth C only).",
  );
}
```

### NEW `projects/sfia-studio/app/lib/d1/localOaExclusiveMode.store.ts`

```ts
/**
 * Process-local override slot for tests only.
 * Not durable. Production always reads env via isLocalOaExclusiveMode().
 */
export const localOaExclusiveModeOverrideSlot: {
  current: boolean | null;
} = {
  current: null,
};
```

### NEW `projects/sfia-studio/app/lib/d1/localOaExclusiveMode.test-only.ts`

```ts
import { localOaExclusiveModeOverrideSlot } from "./localOaExclusiveMode.store";

/** Test-only. Never import from production barrels. */
export function resetLocalOaExclusiveModeForTests(): void {
  localOaExclusiveModeOverrideSlot.current = null;
}

/** Test-only. Pass null to clear override (env wins). */
export function setLocalOaExclusiveModeForTests(active: boolean | null): void {
  localOaExclusiveModeOverrideSlot.current = active;
}
```

### NEW `projects/sfia-studio/app/lib/d1/legacyNavigation.ts`

```ts
/**
 * D4 Option A — legacy Project navigation under local OA-exclusive mode.
 * Inactive when isLocalOaExclusiveMode() is false.
 */

import { notFound, redirect } from "next/navigation";
import { isLocalOaExclusiveMode } from "./localOaExclusiveMode";

/** Generic legacy entry → Product Studio home. */
export function redirectLegacyGenericEntryToStudioIfExclusive(): void {
  if (!isLocalOaExclusiveMode()) return;
  redirect("/studio");
}

/**
 * Historical project deep link (proj-* or any D1 id): explicit absence.
 * Never maps to prj:* / never fabricates an OA project.
 */
export function denyLegacyProjectDeepLinkIfExclusive(): void {
  if (!isLocalOaExclusiveMode()) return;
  notFound();
}
```

### NEW `projects/sfia-studio/app/__tests__/d1/l2d2LocalOaExclusiveFreeze.test.ts`

```ts
/**
 * L2-D2 — Local OA-exclusive D1 freeze (Q8).
 * Fail-closed BEFORE openD1Db resolve/DDL. Disposable paths only.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { actionCreateProject, actionSelectMethodMode } from "@/lib/d1/actions";
import { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import {
  createProject,
  selectMethodMode,
  resetD1DbForTests,
} from "@/lib/d1/commands";
import { actionExecuteConfirmation } from "@/lib/d1/confirmation/actions";
import { executeConfirmedMutation } from "@/lib/d1/confirmation/executeConfirmation";
import { openD1Db } from "@/lib/d1/db";
import { D1Error } from "@/lib/d1/errors";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";
import { D1_GOVERNANCE_METHOD_MODE } from "@/lib/d1/types";

const tempDirs: string[] = [];

function tempPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-l2d2-freeze-"));
  tempDirs.push(dir);
  return path.join(dir, name);
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

describe("L2-D2 local OA-exclusive D1 freeze (Q8)", () => {
  it("default inactive — createProject still works on disposable D1", () => {
    const dbPath = tempPath("d1-ok.sqlite");
    process.env.D1_SQLITE_PATH = dbPath;
    const result = createProject({
      name: "Legacy OK",
      objective: "Hors cutover",
      methodMode: D1_GOVERNANCE_METHOD_MODE,
      activate: true,
      idempotencyKey: "idem-ok-1",
    });
    expect(result.project.projectId.startsWith("proj-")).toBe(true);
    expect(fs.existsSync(dbPath)).toBe(true);
  });

  it("exclusive — openD1Db fails before creating the SQLite file", () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("must-not-exist.sqlite");
    expect(fs.existsSync(probe)).toBe(false);
    expect(() => openD1Db(probe)).toThrow(D1Error);
    try {
      openD1Db(probe);
    } catch (error) {
      expect(error).toBeInstanceOf(D1Error);
      expect((error as D1Error).code).toBe("FORBIDDEN");
    }
    expect(fs.existsSync(probe)).toBe(false);
  });

  it("exclusive — createProject refused (CR-D2-01 path, not hold-only)", () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("create-blocked.sqlite");
    process.env.D1_SQLITE_PATH = probe;
    expect(() =>
      createProject({
        name: "Blocked",
        objective: "Must fail",
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        activate: true,
        idempotencyKey: "idem-blocked-create",
      }),
    ).toThrow(D1Error);
    expect(fs.existsSync(probe)).toBe(false);
  });

  it("exclusive — actionCreateProject returns FORBIDDEN without D1 file", async () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("action-create-blocked.sqlite");
    process.env.D1_SQLITE_PATH = probe;
    const result = await actionCreateProject({
      name: "Blocked action",
      objective: "Must fail",
      methodMode: D1_GOVERNANCE_METHOD_MODE,
      activate: true,
      idempotencyKey: "idem-action-create",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.code).toBe("FORBIDDEN");
    expect(fs.existsSync(probe)).toBe(false);
  });

  it("exclusive — selectMethodMode and actionSelectMethodMode refused", async () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("select-blocked.sqlite");
    process.env.D1_SQLITE_PATH = probe;
    expect(() =>
      selectMethodMode({
        projectId: "proj-does-not-matter",
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        expectedVersion: 1,
      }),
    ).toThrow(D1Error);
    const action = await actionSelectMethodMode({
      projectId: "proj-does-not-matter",
      methodMode: D1_GOVERNANCE_METHOD_MODE,
      expectedVersion: 1,
    });
    expect(action.ok).toBe(false);
    if (!action.ok) expect(action.code).toBe("FORBIDDEN");
    expect(fs.existsSync(probe)).toBe(false);
  });

  it("exclusive — confirmation CREATE_PROJECT refused", async () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("confirm-blocked.sqlite");
    process.env.D1_SQLITE_PATH = probe;
    const input = {
      actionType: "CREATE_PROJECT" as const,
      sessionLocalId: "sess-1",
      proposalId: "prop-1",
      matchId: null,
      targetProjectId: null,
      confirmationId: "conf-1",
      idempotencyKey: "idem-confirm-create",
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      explicitConfirmation: true,
      projectDraft: {
        name: "Intake create",
        objective: "Must fail under exclusive",
        initialContextSummary: "",
        activate: true,
      },
    };
    // executeConfirmedMutation catches D1Error and returns FAILED (does not rethrow).
    const mutation = executeConfirmedMutation(input);
    expect(mutation.status).toBe("FAILED");
    expect(mutation.errorCode).toBe("FORBIDDEN");
    // Server action wraps caught FAILED mutation as ok:true + result (historical shape).
    const action = await actionExecuteConfirmation(input);
    expect(action.ok).toBe(true);
    if (action.ok) {
      expect(action.result.status).toBe("FAILED");
      expect(action.result.errorCode).toBe("FORBIDDEN");
    }
    expect(fs.existsSync(probe)).toBe(false);
  });

  it("exclusive — BoundedAtomicAuditStore construction refuses before DDL", () => {
    setLocalOaExclusiveModeForTests(true);
    const probe = tempPath("audit-blocked.sqlite");
    process.env.D1_SQLITE_PATH = probe;
    expect(() => new BoundedAtomicAuditStore()).toThrow(D1Error);
    expect(fs.existsSync(probe)).toBe(false);
  });
});
```

### NEW `projects/sfia-studio/app/__tests__/d1/l2d2D4LegacyNavigation.test.ts`

```ts
/**
 * L2-D2 — D4 Option A legacy navigation (Q7 / Q10).
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";

const redirectMock = vi.fn();
const notFoundMock = vi.fn(() => {
  throw new Error("NEXT_NOT_FOUND");
});

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
  notFound: () => notFoundMock(),
}));

describe("L2-D2 D4 legacy navigation (Q7/Q10)", () => {
  beforeEach(() => {
    resetLocalOaExclusiveModeForTests();
    redirectMock.mockReset();
    notFoundMock.mockClear();
  });

  afterEach(() => {
    resetLocalOaExclusiveModeForTests();
  });

  it("inactive — helpers are no-ops (historical UX preserved)", async () => {
    const {
      redirectLegacyGenericEntryToStudioIfExclusive,
      denyLegacyProjectDeepLinkIfExclusive,
    } = await import("@/lib/d1/legacyNavigation");
    redirectLegacyGenericEntryToStudioIfExclusive();
    denyLegacyProjectDeepLinkIfExclusive();
    expect(redirectMock).not.toHaveBeenCalled();
    expect(notFoundMock).not.toHaveBeenCalled();
  });

  it("exclusive — generic entries redirect to /studio", async () => {
    setLocalOaExclusiveModeForTests(true);
    const { redirectLegacyGenericEntryToStudioIfExclusive } = await import(
      "@/lib/d1/legacyNavigation"
    );
    redirectLegacyGenericEntryToStudioIfExclusive();
    expect(redirectMock).toHaveBeenCalledWith("/studio");
  });

  it("exclusive — project deep link denies without OA mapping", async () => {
    setLocalOaExclusiveModeForTests(true);
    const { denyLegacyProjectDeepLinkIfExclusive } = await import(
      "@/lib/d1/legacyNavigation"
    );
    expect(() => denyLegacyProjectDeepLinkIfExclusive()).toThrow(
      /NEXT_NOT_FOUND/,
    );
    expect(notFoundMock).toHaveBeenCalledTimes(1);
    expect(redirectMock).not.toHaveBeenCalled();
  });

  it("Q10 — ID namespaces remain disjoint (no mapper module)", async () => {
    const ids = await import("@/lib/d1/ids");
    const d1Id = ids.createProjectId();
    expect(d1Id.startsWith("proj-")).toBe(true);
    expect(d1Id.startsWith("prj:")).toBe(false);
    // OA generator lives in local composition — sample format only
    expect("prj:example".startsWith("prj:")).toBe(true);
    expect("prj:example".startsWith("proj-")).toBe(false);
  });
});
```

### NEW `projects/sfia-studio/app/__tests__/oa/project/l2d2O01ProductUiIntegrated.test.tsx`

```tsx
/**
 * L2-D2 — O-01 Product→UI integrated oracle (deterministic, disposable SQLite).
 * Real RuntimeApplicationService + Product UI surfaces.
 * serverGuard is stubbed only to allow jsdom import of server actions —
 * persistence remains the live SqliteProductStore (not mocked).
 * Does NOT start Studio user runtime / Application Support DBs.
 * @vitest-environment jsdom
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  cleanup,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/vertical-slice-runtime/serverGuard", () => ({
  assertServerOnly: () => undefined,
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import { ProjectsPage } from "@/features/pre-m6-product-ui/ProjectsPage";
import { ProjectWorkspacePage } from "@/features/pre-m6-product-ui/ProjectWorkspacePage";
import { createProject, resetD1DbForTests } from "@/lib/d1/commands";
import { D1Error } from "@/lib/d1/errors";
import {
  resetLocalOaExclusiveModeForTests,
  setLocalOaExclusiveModeForTests,
} from "@/lib/d1/localOaExclusiveMode.test-only";
import { D1_GOVERNANCE_METHOD_MODE } from "@/lib/d1/types";
import { openProductSqlite } from "@/lib/oa/project/infrastructure/sqlite/db";
import {
  createProjectRuntimeAction,
  getProjectRuntimeAction,
  listProjectsRuntimeAction,
} from "@/lib/vertical-slice-runtime/actions";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime/singleton";

const tempDirs: string[] = [];
let productDbPath = "";
let d1ProbePath = "";

beforeEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  resetRuntimeApplicationServiceForTests();

  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-l2d2-o01-"));
  tempDirs.push(dir);
  productDbPath = path.join(dir, "oa-product.sqlite");
  d1ProbePath = path.join(dir, "d1-must-stay-absent.sqlite");
  process.env.SFIA_STUDIO_PRODUCT_DB_PATH = productDbPath;
  process.env.D1_SQLITE_PATH = d1ProbePath;

  getRuntimeApplicationService({
    productDbPath,
    auditMode: "noop",
    nowIso: "2026-10-24T16:00:00.000Z",
  });
});

afterEach(() => {
  cleanup();
  resetLocalOaExclusiveModeForTests();
  resetD1DbForTests();
  resetRuntimeApplicationServiceForTests();
  delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
  delete process.env.D1_SQLITE_PATH;
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("L2-D2 O-01 Product→UI integrated (Q-O01 / Q9)", () => {
  it("create → SQLite durable → list UI → workspace UI → reopen + no D1 write", async () => {
    setLocalOaExclusiveModeForTests(true);

    const created = await createProjectRuntimeAction({
      name: "O-01 Fresh Project",
      objective: "Prouver comprendre depuis OA durable",
      context: "L2-D2 integrated oracle",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "OA exclusive"],
      shortReference: "O01FS",
      idempotencyKey: `idem:l2d2-o01-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    expect(created.projectId.startsWith("prj:")).toBe(true);

    const db = openProductSqlite(productDbPath);
    const projectRow = db
      .prepare(
        "SELECT project_id, payload_json FROM oa_projects WHERE project_id = ?",
      )
      .get(created.projectId) as
      | { project_id: string; payload_json: string }
      | undefined;
    expect(projectRow?.project_id).toBe(created.projectId);
    const payload = JSON.parse(projectRow!.payload_json) as { title?: string };
    expect(payload.title).toBe("O-01 Fresh Project");
    const lpsCount = (
      db
        .prepare("SELECT COUNT(*) AS c FROM oa_lps WHERE project_id = ?")
        .get(created.projectId) as { c: number }
    ).c;
    expect(lpsCount).toBeGreaterThan(0);
    db.close();

    const listed = await listProjectsRuntimeAction();
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list failed");
    const listedRow = listed.projects.find(
      (p) => p.projectId === created.projectId,
    );
    expect(listedRow?.title).toBe("O-01 Fresh Project");

    render(<ProjectsPage />);
    await waitFor(() => {
      expect(screen.getByTestId("studio-projects-open").textContent).toContain(
        "O-01 Fresh Project",
      );
    });

    cleanup();
    render(<ProjectWorkspacePage projectId={created.projectId} />);
    await waitFor(() => {
      expect(screen.getByTestId("project-title").textContent).toContain(
        "O-01 Fresh Project",
      );
    });

    cleanup();
    resetRuntimeApplicationServiceForTests();
    getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
      nowIso: "2026-10-24T16:05:00.000Z",
    });
    const reread = await getProjectRuntimeAction(created.projectId);
    expect(reread.ok).toBe(true);
    if (!reread.ok) throw new Error("get after reopen failed");
    expect(reread.project.name).toBe("O-01 Fresh Project");
    expect(reread.livingState.id.startsWith("lps:")).toBe(true);

    render(<ProjectWorkspacePage projectId={created.projectId} />);
    await waitFor(() => {
      expect(screen.getByTestId("project-title").textContent).toContain(
        "O-01 Fresh Project",
      );
    });

    expect(() =>
      createProject({
        name: "Should not land in D1",
        objective: "dual-write probe",
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        activate: true,
        idempotencyKey: "idem-o01-d1-probe",
      }),
    ).toThrow(D1Error);
    expect(fs.existsSync(d1ProbePath)).toBe(false);
  });
});
```

---

## 10. Diffs complets — fichiers TRACKED modifiés

Chaque bloc = `git diff` unstaged (aucun staged).

### DIFF `projects/sfia-studio/app/.env.example`

```diff
diff --git a/projects/sfia-studio/app/.env.example b/projects/sfia-studio/app/.env.example
index eed33436..4ee52ab1 100644
--- a/projects/sfia-studio/app/.env.example
+++ b/projects/sfia-studio/app/.env.example
@@ -112,3 +112,21 @@ SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH=main
 # Role: test double for external Cursor boundary. Required: no for Product local.
 # Secret: no. Server-only. Must remain unset/0 when CURSOR_REAL=1.
 # SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=0
+
+# ---------------------------------------------------------------------------
+# L2-D2 local OA-exclusive cutover marker (INACTIVE by default)
+# ---------------------------------------------------------------------------
+# When set to exactly "1" on an explicitly designated local Studio instance:
+# - all D1 SQLite opens fail closed before path resolve / DDL
+# - legacy Project routes deny/redirect (D4 Option A)
+# Default unset/0 preserves historical D1 behavior.
+# Do NOT set globally for all worktrees. Activation requires a separate Morris
+# G-ACTIVATION GO — this Delivery only ships the code path.
+#
+# Role: local cutover marker. Required: no (default OFF). Secret: no. Server-only.
+# SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=0
+#
+# Future absolute Product / Nora paths (Option A) are bound per-instance via:
+# SFIA_STUDIO_PRODUCT_DB_PATH=/absolute/path/to/oa-product.sqlite
+# SFIA_STUDIO_NORA_SESSION_DB_PATH=/absolute/path/to/nora-session.sqlite
+# Do not create those durable files or set active values in this Delivery cycle.
```

### DIFF `projects/sfia-studio/app/app/nouvelle-demande/page.tsx`

```diff
diff --git a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
index feab120f..b8fd10a7 100644
--- a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
+++ b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
@@ -1,11 +1,13 @@
 import { listWorkspaceProjects } from "@/lib/d1/commands";
 import { D1Error } from "@/lib/d1/errors";
+import { redirectLegacyGenericEntryToStudioIfExclusive } from "@/lib/d1/legacyNavigation";
 import { IntakeView } from "@/features/d1/intake/IntakeView";

 export const dynamic = "force-dynamic";

 /** D1-C1: conversational intake is the primary Nouvelle demande surface. */
 export default function NouvelleDemandePage() {
+  redirectLegacyGenericEntryToStudioIfExclusive();
   try {
     const projects = listWorkspaceProjects();
     return <IntakeView projects={projects} />;
```

### DIFF `projects/sfia-studio/app/app/projects/[id]/page.tsx`

```diff
diff --git a/projects/sfia-studio/app/app/projects/[id]/page.tsx b/projects/sfia-studio/app/app/projects/[id]/page.tsx
index 70001c1e..a181e309 100644
--- a/projects/sfia-studio/app/app/projects/[id]/page.tsx
+++ b/projects/sfia-studio/app/app/projects/[id]/page.tsx
@@ -1,6 +1,7 @@
 import { notFound } from "next/navigation";
 import { getProject, listProjectAudit } from "@/lib/d1/commands";
 import { D1Error } from "@/lib/d1/errors";
+import { denyLegacyProjectDeepLinkIfExclusive } from "@/lib/d1/legacyNavigation";
 import { ProjectCockpitView } from "@/features/d1/ProjectCockpitView";

 export const dynamic = "force-dynamic";
@@ -10,6 +11,10 @@ export default async function ProjectPage({
 }: {
   params: Promise<{ id: string }>;
 }) {
+  // D4 Option A: historical deep links are unavailable under OA-exclusive —
+  // never map proj-* → prj:* and never open D1 to "find" a substitute.
+  denyLegacyProjectDeepLinkIfExclusive();
+
   const { id } = await params;
   try {
     const project = getProject(id);
```

### DIFF `projects/sfia-studio/app/app/projects/new/page.tsx`

```diff
diff --git a/projects/sfia-studio/app/app/projects/new/page.tsx b/projects/sfia-studio/app/app/projects/new/page.tsx
index c42faa83..83856f9b 100644
--- a/projects/sfia-studio/app/app/projects/new/page.tsx
+++ b/projects/sfia-studio/app/app/projects/new/page.tsx
@@ -1,5 +1,7 @@
+import { redirectLegacyGenericEntryToStudioIfExclusive } from "@/lib/d1/legacyNavigation";
 import { NewProjectForm } from "@/features/d1/NewProjectForm";

 export default function NewProjectPage() {
+  redirectLegacyGenericEntryToStudioIfExclusive();
   return <NewProjectForm />;
 }
```

### DIFF `projects/sfia-studio/app/app/workspace/page.tsx`

```diff
diff --git a/projects/sfia-studio/app/app/workspace/page.tsx b/projects/sfia-studio/app/app/workspace/page.tsx
index 4013cfe3..3b5969e1 100644
--- a/projects/sfia-studio/app/app/workspace/page.tsx
+++ b/projects/sfia-studio/app/app/workspace/page.tsx
@@ -1,10 +1,12 @@
 import { listWorkspaceProjects } from "@/lib/d1/commands";
 import { D1Error } from "@/lib/d1/errors";
+import { redirectLegacyGenericEntryToStudioIfExclusive } from "@/lib/d1/legacyNavigation";
 import { WorkspaceHomeView } from "@/features/d1/WorkspaceHomeView";

 export const dynamic = "force-dynamic";

 export default function WorkspacePage() {
+  redirectLegacyGenericEntryToStudioIfExclusive();
   try {
     const projects = listWorkspaceProjects();
     return <WorkspaceHomeView projects={projects} />;
```

### DIFF `projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts b/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
index a8e9d1b1..fd542f65 100644
--- a/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
+++ b/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
@@ -51,7 +51,12 @@ export interface AppendAtomicAuditInput {
 }

 export class BoundedAtomicAuditStore implements ProjectCycleAuditPort {
-  constructor(private readonly db: DatabaseSync = openD1Db()) {}
+  private readonly db: DatabaseSync;
+
+  /** Lazy open — respects local OA-exclusive fail-closed before D1 DDL. */
+  constructor(db?: DatabaseSync) {
+    this.db = db ?? openD1Db();
+  }

   append(input: AppendAtomicAuditInput): BoundedAtomicAuditRecord {
     const createdAt = nowIso();
```

### DIFF `projects/sfia-studio/app/lib/d1/commands.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/d1/commands.ts b/projects/sfia-studio/app/lib/d1/commands.ts
index 6a82de66..04988e69 100644
--- a/projects/sfia-studio/app/lib/d1/commands.ts
+++ b/projects/sfia-studio/app/lib/d1/commands.ts
@@ -1,5 +1,5 @@
 import { D1ProjectRepository } from "./repository";
-import { openD1Db, nowIso, resetD1DbForTests } from "./db";
+import { nowIso, resetD1DbForTests } from "./db";
 import { createAuditEventId, createCorrelationId, createProjectId } from "./ids";
 import { validateCreateProjectInput, assertMethodMode } from "./domain";
 import { requireMonoOperator } from "./authz";
@@ -23,10 +23,12 @@ export interface CreateProjectResult {

 export function createProject(
   input: CreateProjectInput,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ): CreateProjectResult {
   const started = Date.now();
   try {
+    // Resolve repo inside body so OA-exclusive guard runs before openD1Db/DDL.
+    const repo = repoArg ?? new D1ProjectRepository();
     validateCreateProjectInput(input);
     const actorId = requireMonoOperator();

@@ -146,10 +148,11 @@ export function createProject(

 export function selectMethodMode(
   input: SelectMethodModeInput,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ): D1Project {
   const started = Date.now();
   try {
+    const repo = repoArg ?? new D1ProjectRepository();
     const actorId = requireMonoOperator();
     assertMethodMode(input.methodMode);
     assertMethodModeTransitionAllowed();
@@ -199,17 +202,19 @@ export function selectMethodMode(

 export function listWorkspaceProjects(
   workspaceId = D1_DEFAULT_WORKSPACE_ID,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ): D1Project[] {
   requireMonoOperator();
+  const repo = repoArg ?? new D1ProjectRepository();
   return repo.listProjects(workspaceId);
 }

 export function getProject(
   projectId: string,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ): D1Project {
   requireMonoOperator();
+  const repo = repoArg ?? new D1ProjectRepository();
   const project = repo.getProject(projectId);
   if (!project) {
     throw new D1Error("NOT_FOUND", "Projet introuvable.");
@@ -219,9 +224,10 @@ export function getProject(

 export function listProjectAudit(
   projectId: string,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ) {
   requireMonoOperator();
+  const repo = repoArg ?? new D1ProjectRepository();
   return repo.listAuditEvents(projectId);
 }
```

### DIFF `projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts b/projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts
index c5230c18..ef5e3908 100644
--- a/projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts
+++ b/projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts
@@ -1,7 +1,6 @@
 import { randomUUID } from "node:crypto";
 import { createProject, getProject } from "../commands";
 import { D1ProjectRepository } from "../repository";
-import { openD1Db } from "../db";
 import { D1Error } from "../errors";
 import {
   D1_GOVERNANCE_METHOD_MODE,
@@ -85,11 +84,13 @@ function asActionTypeSafe(
  */
 export function executeConfirmedMutation(
   input: ExecuteConfirmationInput,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ): BoundedMutationResult {
   const started = Date.now();

   try {
+    // Lazy repo: OA-exclusive mode must block before openD1Db/DDL.
+    const repo = repoArg ?? new D1ProjectRepository();
     const intent = buildConfirmationIntent(input);

     logIntakeEvent("intake_confirmation_presented", {
```

### DIFF `projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts b/projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts
index e02bd34f..6d161ef0 100644
--- a/projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts
+++ b/projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts
@@ -1,6 +1,5 @@
 import { randomUUID } from "node:crypto";
 import { D1ProjectRepository } from "../repository";
-import { openD1Db } from "../db";
 import { D1_DEFAULT_WORKSPACE_ID } from "../types";
 import { D1Error } from "../errors";
 import {
@@ -48,7 +47,7 @@ export function buildExistingContextSnapshot(
   }

   try {
-    const repo = options.repo ?? new D1ProjectRepository(openD1Db());
+    const repo = options.repo ?? new D1ProjectRepository();
     const workspaceId = options.workspaceId ?? D1_DEFAULT_WORKSPACE_ID;
     const all = repo.listProjects(workspaceId);
     const max = CONTEXT_MATCH_LIMITS.maxProjectsEvaluated;
```

### DIFF `projects/sfia-studio/app/lib/d1/db.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/d1/db.ts b/projects/sfia-studio/app/lib/d1/db.ts
index 90e64b08..962e9c29 100644
--- a/projects/sfia-studio/app/lib/d1/db.ts
+++ b/projects/sfia-studio/app/lib/d1/db.ts
@@ -1,6 +1,7 @@
 import { DatabaseSync } from "node:sqlite";
 import { resolveD1SqlitePath } from "./paths";
 import { D1Error } from "./errors";
+import { assertD1AccessAllowedWhenLocalOaExclusive } from "./localOaExclusiveMode";

 const SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -104,8 +105,14 @@ function migrate(db: DatabaseSync): void {
   }
 }

-export function openD1Db(dbPath = resolveD1SqlitePath()): DatabaseSync {
-  if (singleton && singletonPath === dbPath) {
+/**
+ * Open D1 SQLite. When local OA-exclusive mode is active, fails closed
+ * BEFORE path resolve / file open / schema DDL (L2-D2 freeze).
+ */
+export function openD1Db(dbPath?: string): DatabaseSync {
+  assertD1AccessAllowedWhenLocalOaExclusive();
+  const resolved = dbPath ?? resolveD1SqlitePath();
+  if (singleton && singletonPath === resolved) {
     return singleton;
   }
   if (singleton) {
@@ -118,10 +125,10 @@ export function openD1Db(dbPath = resolveD1SqlitePath()): DatabaseSync {
     singletonPath = null;
   }
   try {
-    const db = new DatabaseSync(dbPath);
+    const db = new DatabaseSync(resolved);
     migrate(db);
     singleton = db;
-    singletonPath = dbPath;
+    singletonPath = resolved;
     return db;
   } catch (error) {
     if (error instanceof D1Error) throw error;
```

### DIFF `projects/sfia-studio/app/lib/d1/errors.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/d1/errors.ts b/projects/sfia-studio/app/lib/d1/errors.ts
index 8ef7e99f..7d996ceb 100644
--- a/projects/sfia-studio/app/lib/d1/errors.ts
+++ b/projects/sfia-studio/app/lib/d1/errors.ts
@@ -3,6 +3,7 @@ export type D1ErrorCode =
   | "NOT_FOUND"
   | "CONFLICT"
   | "UNAUTHORIZED"
+  | "FORBIDDEN"
   | "IDEMPOTENCY"
   | "PERSISTENCE"
   | "CLAIM_FORBIDDEN"
```

### DIFF `projects/sfia-studio/app/lib/d1/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/d1/index.ts b/projects/sfia-studio/app/lib/d1/index.ts
index 8ac869aa..9f90bf45 100644
--- a/projects/sfia-studio/app/lib/d1/index.ts
+++ b/projects/sfia-studio/app/lib/d1/index.ts
@@ -29,6 +29,11 @@ export type {
   OperationalReadinessAccessSurface,
 } from "./operationalReadiness";
 export { resetD1DbForTests } from "./db";
+export {
+  LOCAL_OA_EXCLUSIVE_ENV_KEY,
+  isLocalOaExclusiveMode,
+  assertD1AccessAllowedWhenLocalOaExclusive,
+} from "./localOaExclusiveMode";
 export {
   BoundedAtomicAuditStore,
   BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION,
```

### DIFF `projects/sfia-studio/app/lib/d1/repository.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/d1/repository.ts b/projects/sfia-studio/app/lib/d1/repository.ts
index 44d09652..e9918861 100644
--- a/projects/sfia-studio/app/lib/d1/repository.ts
+++ b/projects/sfia-studio/app/lib/d1/repository.ts
@@ -29,7 +29,12 @@ function mapProject(row: Record<string, unknown>): D1Project {
 }

 export class D1ProjectRepository {
-  constructor(private readonly db: DatabaseSync = openD1Db()) {}
+  private readonly db: DatabaseSync;
+
+  /** Lazy open — avoids default-arg openD1Db() before caller guards. */
+  constructor(db?: DatabaseSync) {
+    this.db = db ?? openD1Db();
+  }

   listProjects(workspaceId: string): D1Project[] {
     const rows = this.db
```

---

## 11. Diff agrégé app/ (référence)

```diff
diff --git a/projects/sfia-studio/app/.env.example b/projects/sfia-studio/app/.env.example
index eed33436..4ee52ab1 100644
--- a/projects/sfia-studio/app/.env.example
+++ b/projects/sfia-studio/app/.env.example
@@ -112,3 +112,21 @@ SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH=main
 # Role: test double for external Cursor boundary. Required: no for Product local.
 # Secret: no. Server-only. Must remain unset/0 when CURSOR_REAL=1.
 # SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY=0
+
+# ---------------------------------------------------------------------------
+# L2-D2 local OA-exclusive cutover marker (INACTIVE by default)
+# ---------------------------------------------------------------------------
+# When set to exactly "1" on an explicitly designated local Studio instance:
+# - all D1 SQLite opens fail closed before path resolve / DDL
+# - legacy Project routes deny/redirect (D4 Option A)
+# Default unset/0 preserves historical D1 behavior.
+# Do NOT set globally for all worktrees. Activation requires a separate Morris
+# G-ACTIVATION GO — this Delivery only ships the code path.
+#
+# Role: local cutover marker. Required: no (default OFF). Secret: no. Server-only.
+# SFIA_STUDIO_LOCAL_OA_EXCLUSIVE=0
+#
+# Future absolute Product / Nora paths (Option A) are bound per-instance via:
+# SFIA_STUDIO_PRODUCT_DB_PATH=/absolute/path/to/oa-product.sqlite
+# SFIA_STUDIO_NORA_SESSION_DB_PATH=/absolute/path/to/nora-session.sqlite
+# Do not create those durable files or set active values in this Delivery cycle.
diff --git a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
index feab120f..b8fd10a7 100644
--- a/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
+++ b/projects/sfia-studio/app/app/nouvelle-demande/page.tsx
@@ -1,11 +1,13 @@
 import { listWorkspaceProjects } from "@/lib/d1/commands";
 import { D1Error } from "@/lib/d1/errors";
+import { redirectLegacyGenericEntryToStudioIfExclusive } from "@/lib/d1/legacyNavigation";
 import { IntakeView } from "@/features/d1/intake/IntakeView";

 export const dynamic = "force-dynamic";

 /** D1-C1: conversational intake is the primary Nouvelle demande surface. */
 export default function NouvelleDemandePage() {
+  redirectLegacyGenericEntryToStudioIfExclusive();
   try {
     const projects = listWorkspaceProjects();
     return <IntakeView projects={projects} />;
diff --git a/projects/sfia-studio/app/app/projects/[id]/page.tsx b/projects/sfia-studio/app/app/projects/[id]/page.tsx
index 70001c1e..a181e309 100644
--- a/projects/sfia-studio/app/app/projects/[id]/page.tsx
+++ b/projects/sfia-studio/app/app/projects/[id]/page.tsx
@@ -1,6 +1,7 @@
 import { notFound } from "next/navigation";
 import { getProject, listProjectAudit } from "@/lib/d1/commands";
 import { D1Error } from "@/lib/d1/errors";
+import { denyLegacyProjectDeepLinkIfExclusive } from "@/lib/d1/legacyNavigation";
 import { ProjectCockpitView } from "@/features/d1/ProjectCockpitView";

 export const dynamic = "force-dynamic";
@@ -10,6 +11,10 @@ export default async function ProjectPage({
 }: {
   params: Promise<{ id: string }>;
 }) {
+  // D4 Option A: historical deep links are unavailable under OA-exclusive —
+  // never map proj-* → prj:* and never open D1 to "find" a substitute.
+  denyLegacyProjectDeepLinkIfExclusive();
+
   const { id } = await params;
   try {
     const project = getProject(id);
diff --git a/projects/sfia-studio/app/app/projects/new/page.tsx b/projects/sfia-studio/app/app/projects/new/page.tsx
index c42faa83..83856f9b 100644
--- a/projects/sfia-studio/app/app/projects/new/page.tsx
+++ b/projects/sfia-studio/app/app/projects/new/page.tsx
@@ -1,5 +1,7 @@
+import { redirectLegacyGenericEntryToStudioIfExclusive } from "@/lib/d1/legacyNavigation";
 import { NewProjectForm } from "@/features/d1/NewProjectForm";

 export default function NewProjectPage() {
+  redirectLegacyGenericEntryToStudioIfExclusive();
   return <NewProjectForm />;
 }
diff --git a/projects/sfia-studio/app/app/workspace/page.tsx b/projects/sfia-studio/app/app/workspace/page.tsx
index 4013cfe3..3b5969e1 100644
--- a/projects/sfia-studio/app/app/workspace/page.tsx
+++ b/projects/sfia-studio/app/app/workspace/page.tsx
@@ -1,10 +1,12 @@
 import { listWorkspaceProjects } from "@/lib/d1/commands";
 import { D1Error } from "@/lib/d1/errors";
+import { redirectLegacyGenericEntryToStudioIfExclusive } from "@/lib/d1/legacyNavigation";
 import { WorkspaceHomeView } from "@/features/d1/WorkspaceHomeView";

 export const dynamic = "force-dynamic";

 export default function WorkspacePage() {
+  redirectLegacyGenericEntryToStudioIfExclusive();
   try {
     const projects = listWorkspaceProjects();
     return <WorkspaceHomeView projects={projects} />;
diff --git a/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts b/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
index a8e9d1b1..fd542f65 100644
--- a/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
+++ b/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
@@ -51,7 +51,12 @@ export interface AppendAtomicAuditInput {
 }

 export class BoundedAtomicAuditStore implements ProjectCycleAuditPort {
-  constructor(private readonly db: DatabaseSync = openD1Db()) {}
+  private readonly db: DatabaseSync;
+
+  /** Lazy open — respects local OA-exclusive fail-closed before D1 DDL. */
+  constructor(db?: DatabaseSync) {
+    this.db = db ?? openD1Db();
+  }

   append(input: AppendAtomicAuditInput): BoundedAtomicAuditRecord {
     const createdAt = nowIso();
diff --git a/projects/sfia-studio/app/lib/d1/commands.ts b/projects/sfia-studio/app/lib/d1/commands.ts
index 6a82de66..04988e69 100644
--- a/projects/sfia-studio/app/lib/d1/commands.ts
+++ b/projects/sfia-studio/app/lib/d1/commands.ts
@@ -1,5 +1,5 @@
 import { D1ProjectRepository } from "./repository";
-import { openD1Db, nowIso, resetD1DbForTests } from "./db";
+import { nowIso, resetD1DbForTests } from "./db";
 import { createAuditEventId, createCorrelationId, createProjectId } from "./ids";
 import { validateCreateProjectInput, assertMethodMode } from "./domain";
 import { requireMonoOperator } from "./authz";
@@ -23,10 +23,12 @@ export interface CreateProjectResult {

 export function createProject(
   input: CreateProjectInput,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ): CreateProjectResult {
   const started = Date.now();
   try {
+    // Resolve repo inside body so OA-exclusive guard runs before openD1Db/DDL.
+    const repo = repoArg ?? new D1ProjectRepository();
     validateCreateProjectInput(input);
     const actorId = requireMonoOperator();

@@ -146,10 +148,11 @@ export function createProject(

 export function selectMethodMode(
   input: SelectMethodModeInput,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ): D1Project {
   const started = Date.now();
   try {
+    const repo = repoArg ?? new D1ProjectRepository();
     const actorId = requireMonoOperator();
     assertMethodMode(input.methodMode);
     assertMethodModeTransitionAllowed();
@@ -199,17 +202,19 @@ export function selectMethodMode(

 export function listWorkspaceProjects(
   workspaceId = D1_DEFAULT_WORKSPACE_ID,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ): D1Project[] {
   requireMonoOperator();
+  const repo = repoArg ?? new D1ProjectRepository();
   return repo.listProjects(workspaceId);
 }

 export function getProject(
   projectId: string,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ): D1Project {
   requireMonoOperator();
+  const repo = repoArg ?? new D1ProjectRepository();
   const project = repo.getProject(projectId);
   if (!project) {
     throw new D1Error("NOT_FOUND", "Projet introuvable.");
@@ -219,9 +224,10 @@ export function getProject(

 export function listProjectAudit(
   projectId: string,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ) {
   requireMonoOperator();
+  const repo = repoArg ?? new D1ProjectRepository();
   return repo.listAuditEvents(projectId);
 }

diff --git a/projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts b/projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts
index c5230c18..ef5e3908 100644
--- a/projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts
+++ b/projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts
@@ -1,7 +1,6 @@
 import { randomUUID } from "node:crypto";
 import { createProject, getProject } from "../commands";
 import { D1ProjectRepository } from "../repository";
-import { openD1Db } from "../db";
 import { D1Error } from "../errors";
 import {
   D1_GOVERNANCE_METHOD_MODE,
@@ -85,11 +84,13 @@ function asActionTypeSafe(
  */
 export function executeConfirmedMutation(
   input: ExecuteConfirmationInput,
-  repo = new D1ProjectRepository(openD1Db()),
+  repoArg?: D1ProjectRepository,
 ): BoundedMutationResult {
   const started = Date.now();

   try {
+    // Lazy repo: OA-exclusive mode must block before openD1Db/DDL.
+    const repo = repoArg ?? new D1ProjectRepository();
     const intent = buildConfirmationIntent(input);

     logIntakeEvent("intake_confirmation_presented", {
diff --git a/projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts b/projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts
index e02bd34f..6d161ef0 100644
--- a/projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts
+++ b/projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts
@@ -1,6 +1,5 @@
 import { randomUUID } from "node:crypto";
 import { D1ProjectRepository } from "../repository";
-import { openD1Db } from "../db";
 import { D1_DEFAULT_WORKSPACE_ID } from "../types";
 import { D1Error } from "../errors";
 import {
@@ -48,7 +47,7 @@ export function buildExistingContextSnapshot(
   }

   try {
-    const repo = options.repo ?? new D1ProjectRepository(openD1Db());
+    const repo = options.repo ?? new D1ProjectRepository();
     const workspaceId = options.workspaceId ?? D1_DEFAULT_WORKSPACE_ID;
     const all = repo.listProjects(workspaceId);
     const max = CONTEXT_MATCH_LIMITS.maxProjectsEvaluated;
diff --git a/projects/sfia-studio/app/lib/d1/db.ts b/projects/sfia-studio/app/lib/d1/db.ts
index 90e64b08..962e9c29 100644
--- a/projects/sfia-studio/app/lib/d1/db.ts
+++ b/projects/sfia-studio/app/lib/d1/db.ts
@@ -1,6 +1,7 @@
 import { DatabaseSync } from "node:sqlite";
 import { resolveD1SqlitePath } from "./paths";
 import { D1Error } from "./errors";
+import { assertD1AccessAllowedWhenLocalOaExclusive } from "./localOaExclusiveMode";

 const SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -104,8 +105,14 @@ function migrate(db: DatabaseSync): void {
   }
 }

-export function openD1Db(dbPath = resolveD1SqlitePath()): DatabaseSync {
-  if (singleton && singletonPath === dbPath) {
+/**
+ * Open D1 SQLite. When local OA-exclusive mode is active, fails closed
+ * BEFORE path resolve / file open / schema DDL (L2-D2 freeze).
+ */
+export function openD1Db(dbPath?: string): DatabaseSync {
+  assertD1AccessAllowedWhenLocalOaExclusive();
+  const resolved = dbPath ?? resolveD1SqlitePath();
+  if (singleton && singletonPath === resolved) {
     return singleton;
   }
   if (singleton) {
@@ -118,10 +125,10 @@ export function openD1Db(dbPath = resolveD1SqlitePath()): DatabaseSync {
     singletonPath = null;
   }
   try {
-    const db = new DatabaseSync(dbPath);
+    const db = new DatabaseSync(resolved);
     migrate(db);
     singleton = db;
-    singletonPath = dbPath;
+    singletonPath = resolved;
     return db;
   } catch (error) {
     if (error instanceof D1Error) throw error;
diff --git a/projects/sfia-studio/app/lib/d1/errors.ts b/projects/sfia-studio/app/lib/d1/errors.ts
index 8ef7e99f..7d996ceb 100644
--- a/projects/sfia-studio/app/lib/d1/errors.ts
+++ b/projects/sfia-studio/app/lib/d1/errors.ts
@@ -3,6 +3,7 @@ export type D1ErrorCode =
   | "NOT_FOUND"
   | "CONFLICT"
   | "UNAUTHORIZED"
+  | "FORBIDDEN"
   | "IDEMPOTENCY"
   | "PERSISTENCE"
   | "CLAIM_FORBIDDEN"
diff --git a/projects/sfia-studio/app/lib/d1/index.ts b/projects/sfia-studio/app/lib/d1/index.ts
index 8ac869aa..9f90bf45 100644
--- a/projects/sfia-studio/app/lib/d1/index.ts
+++ b/projects/sfia-studio/app/lib/d1/index.ts
@@ -29,6 +29,11 @@ export type {
   OperationalReadinessAccessSurface,
 } from "./operationalReadiness";
 export { resetD1DbForTests } from "./db";
+export {
+  LOCAL_OA_EXCLUSIVE_ENV_KEY,
+  isLocalOaExclusiveMode,
+  assertD1AccessAllowedWhenLocalOaExclusive,
+} from "./localOaExclusiveMode";
 export {
   BoundedAtomicAuditStore,
   BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION,
diff --git a/projects/sfia-studio/app/lib/d1/repository.ts b/projects/sfia-studio/app/lib/d1/repository.ts
index 44d09652..e9918861 100644
--- a/projects/sfia-studio/app/lib/d1/repository.ts
+++ b/projects/sfia-studio/app/lib/d1/repository.ts
@@ -29,7 +29,12 @@ function mapProject(row: Record<string, unknown>): D1Project {
 }

 export class D1ProjectRepository {
-  constructor(private readonly db: DatabaseSync = openD1Db()) {}
+  private readonly db: DatabaseSync;
+
+  /** Lazy open — avoids default-arg openD1Db() before caller guards. */
+  constructor(db?: DatabaseSync) {
+    this.db = db ?? openD1Db();
+  }

   listProjects(workspaceId: string): D1Project[] {
     const rows = this.db
```

---

## 12. R24

Impact sémantique Product : **OUI** (mode gated Delivery).
PRR non synchronisée : **G-PRR OPEN**.
Ce cycle : **aucune** modification PRR / Doctrine / Roadmap.
Digests non rafraîchis.

---

## 13. Isolation / non-mutation ce cycle

- Aucun fichier Product/test modifié par CORR-REVIEW-01
- Aucune DB historique ouverte
- P6 non altéré
- Studio non démarré
- App Support non créé

---

## 14. Stops non déclenchés

Git Truth OK ; contenu modifié inclus ; code Product inchangé ce cycle ; handoff L3 à publier.

---

## 15. Instruction ChatGPT

1. Review intégrale des diffs + NEW files ci-dessus.
2. Valider ordre fail-closed avant openD1Db.
3. Challenger réserve `ok:true`+FAILED.
4. Juger O-01 DET vs besoin G-ACTIVATION.
5. Ne pas accorder activation / merge.

---

**FIN — REVIEW PACK EVIDENCE COMPLETE / PRODUCT CODE UNCHANGED**
