# SFIA Studio — AKG-M5 / L2-D2 Cycle 8 — CORR-02 TARGETED DELIVERY CORRECTION

**Profile:** CRITICAL
**Typologie:** EVOL / TARGETED CORRECTION
**Date/heure locale:** 2026-10-24 18:30 CEST
**Auteur rapport:** Cursor (Composer)
**GO / Autorité:** **G-CORR02 GRANTED** (Morris 2026-10-24). Autorise uniquement : CR-D2-02/03/04 + tests ciblés + Review Pack FULL + L3 handoff. **G-ACTIVATION / G-GIT PROJET / G-PRR OPEN.**

---

## 0. Verdict Cursor

**AKG-M5 L2-D2 CORR-02**
— TARGETED CORRECTIONS IMPLEMENTED
— EVIDENCE COMPLETE
— CRITICAL REVIEW REQUIRED
— ACTIVATION NOT AUTHORIZED
— G-PRR / G-GIT OPEN

Instruction ChatGPT : Critical Review du **delta CORR-02** puis cumul Delivery L2-D2. Ne pas traiter CORR-02 comme création du Delivery initial. Ne pas accorder G-ACTIVATION / G-GIT / G-PRR implicitement.

---

## 01. GO Morris CORR-02

GO explicite reçu 2026-10-24 :

- Corriger retour FORBIDDEN confirmation D1 (CR-D2-02).
- Fermer writers D1 via connexions injectées (CR-D2-03).
- Renforcer preuve O-01 Product→UI « comprendre » (CR-D2-04).
- Tests ciblés + Review Pack FULL + Handoff L3 distant vérifié.

**Non autorisé :** activation Studio ; config active ; DB OA/Nora définitives ; DB P6 réelles ; cutover ; migration/suppression historique ; push projet / PR / merge ; édition PRR ; promotion runtime v3.

---

## 02. Git Truth / état worktree

| Check | Résultat |
|---|---|
| `pwd -P` | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover` |
| Remote | `https://github.com/mcleland147/sfia-workspace.git` |
| Branch | `feat/akg-m5-l2-d2-local-oa-cutover` |
| HEAD | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| `origin/main` (local + `ls-remote`) | `1a380f22c2ee9c63c525213e01de4bca14dff9ca` |
| Staged | **vide** |
| Delivery dirty | **préservé** (Delivery L2-D2 + delta CORR-02) — non committé / non poussé |
| Handoff tip entrée | `828e9197111f1f5485f5f3d00995b9b75b64a238` (CORR-REVIEW-01) / blob `0f8d825551261040cb7b0efb80d1b876ea27ddda` |
| P6 WT | `/Users/morris/Projects/sfia-workspace` — dirty ~11 — **non altéré** |
| Fresh Start candidate | intacte (non touchée) |
| WT collision note | path `…-akg-m5-l2-d2-local-oa-cutover` = L2-D1 distinct ; Delivery = `feat-…` |

Git Truth : **PASS**. Aucun reset/stash/clean/checkout destructif.

---

## 03. Base et HEAD

- Base historique Delivery = `main` @ `1a380f22c2ee9c63c525213e01de4bca14dff9ca` (= ChatGPT remote main attendu).
- Aucun commit Product sur la branche Delivery.
- Cumul dirty = Delivery L2-D2 (déjà publié CORR-REVIEW-01) **+** delta CORR-02 ci-dessous.

---

## 04. Sources v2.6 / Convergence

Consultées (guidance) : template cycle ; routing ; guardrails ; operating model ; CKC 08 ; Convergence Build Doctrine / Roadmap ; Product Completion 01 ; M4 to-be ; M5 blueprint + L2-D0 readiness ; Framings 30/32/34/37 ; PRR README + volumes 03–09 (lecture seule) ; handoff CORR-REVIEW-01 @ `828e9197`.

Capacité : **O-01**. Fondations : V3-F02 / V3-F06 / V3-F12. Milestone AKG-M5. Runtime v3 **NON ADOPTED**.

---

## 05. R23 / composants / invariants

| Correction | Composants | Flux | Invariants | Entrée | Consumers | Dépendances | Risques | Couverture | Exit proof |
|---|---|---|---|---|---|---|---|---|---|
| CR-D2-02 | `confirmation/actions.ts` ; `ConfirmationPanel` (inchangé) | Confirm CREATE sous exclusive | FAILED+FORBIDDEN → `ok:false` ; pas de fausse réussite UI | `actionExecuteConfirmation` | Intake / ConfirmationPanel | `executeConfirmedMutation` + freeze | Régression autres status | freeze A1–A6 + UI unit | **BEHAVIOR PROVEN AT TESTED SCOPE** |
| CR-D2-03 | `repository.ts` ; `boundedAtomicAudit.ts` ; guard existant | Mutation via DB injectée | Aucune écriture D1 applicative si exclusive ON | `createProjectAtomic` / `selectMethodModeAtomic` / `append` / `clearForTests` | commands / audit port | `assertD1AccessAllowedWhenLocalOaExclusive` | Connexion brute hors API | injected suite B1–B9 | **BEHAVIOR PROVEN AT TESTED SCOPE** (frontière résiduelle déclarée) |
| CR-D2-04 | O-01 test ; UI existante `ProjectsPage` / `ProjectWorkspacePage` | Create OA → list → workspace → reopen | Objective LPS Truth C visible | objective create input | Product UI | SqliteProductStore + runtime | Mock-only UI | O-01 assertions objective | **BEHAVIOR PROVEN AT TESTED SCOPE** (DET) |

Niveaux : pas de promotion DET → LIVE. **LIVE E2E / CUTOVER / Studio actif : NOT PROVEN / NOT AUTHORIZED.**

**Frontière résiduelle CR-D2-03 (déclarée) :** une `DatabaseSync` brute hors APIs D1 applicatives (`exec`/`prepare` directs) n'est **pas** contrôlée. Couverture = writers exposés (`D1ProjectRepository` mutatifs + `BoundedAtomicAuditStore` mutatifs) + `openD1Db`.

---

## 06. Liste complète des fichiers dirty

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/.env.example
 M projects/sfia-studio/app/app/nouvelle-demande/page.tsx
 M projects/sfia-studio/app/app/projects/[id]/page.tsx
 M projects/sfia-studio/app/app/projects/new/page.tsx
 M projects/sfia-studio/app/app/workspace/page.tsx
 M projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
 M projects/sfia-studio/app/lib/d1/commands.ts
 M projects/sfia-studio/app/lib/d1/confirmation/actions.ts
 M projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts
 M projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts
 M projects/sfia-studio/app/lib/d1/db.ts
 M projects/sfia-studio/app/lib/d1/errors.ts
 M projects/sfia-studio/app/lib/d1/index.ts
 M projects/sfia-studio/app/lib/d1/repository.ts
?? projects/sfia-studio/app/__tests__/d1/l2d2ConfirmationForbiddenUi.test.tsx
?? projects/sfia-studio/app/__tests__/d1/l2d2D4LegacyNavigation.test.ts
?? projects/sfia-studio/app/__tests__/d1/l2d2InjectedConnectionWriterGuards.test.ts
?? projects/sfia-studio/app/__tests__/d1/l2d2LocalOaExclusiveFreeze.test.ts
?? projects/sfia-studio/app/__tests__/oa/project/l2d2O01ProductUiIntegrated.test.tsx
?? projects/sfia-studio/app/lib/d1/legacyNavigation.ts
?? projects/sfia-studio/app/lib/d1/localOaExclusiveMode.store.ts
?? projects/sfia-studio/app/lib/d1/localOaExclusiveMode.test-only.ts
?? projects/sfia-studio/app/lib/d1/localOaExclusiveMode.ts
```

**Légende :**
- Fichiers Delivery L2-D2 déjà inventoriés CORR-REVIEW-01 (freeze/D4/mode/routes/env/tests freeze·D4·O01) : **conservés**.
- **Delta CORR-02 Product code :** `confirmation/actions.ts` ; `repository.ts` (asserts mutation) ; `boundedAtomicAudit.ts` (asserts mutation).
- **Delta CORR-02 tests new :** `l2d2InjectedConnectionWriterGuards.test.ts` ; `l2d2ConfirmationForbiddenUi.test.tsx`.
- **Delta CORR-02 tests modified :** `l2d2LocalOaExclusiveFreeze.test.ts` (ok:false) ; `l2d2O01ProductUiIntegrated.test.tsx` (objective UI/LPS).

---

## 07. Delta exact CORR-02 (vs Delivery déjà dirty)

### A — CR-D2-02 Confirmation FORBIDDEN

`actionExecuteConfirmation` : si `result.status === "FAILED" && result.errorCode === "FORBIDDEN"` → `{ ok:false, code:"FORBIDDEN", message:… }` au lieu de `{ ok:true, result }`.

Autres status inchangés (SUCCEEDED / ALREADY_APPLIED / NO_MUTATION / CANCELLED / autres erreurs via catch).

UI non modifiée : `ConfirmationPanel` baille déjà sur `!res.ok` (pas d'`onDone` → Intake ne passe pas en confirmed).

### B — CR-D2-03 Injected writers

Réutilise `assertD1AccessAllowedWhenLocalOaExclusive()` **avant** `BEGIN IMMEDIATE` / INSERT / UPDATE / DELETE dans :
- `D1ProjectRepository.createProjectAtomic`
- `D1ProjectRepository.selectMethodModeAtomic`
- `BoundedAtomicAuditStore.append`
- `BoundedAtomicAuditStore.clearForTests`

Pas de moteur de policy parallèle.

### C — CR-D2-04 O-01 comprendre

Donnée métier : **objective LPS** (Truth C), déjà projetée :
- persistée `oa_lps.payload_json.objective`
- runtime list enrichit `project.objective`
- UI list `data-testid="studio-projects-current"`
- UI workspace `data-testid="project-subtitle"` ← `success.project.objective`

Aucun nouvel attribut / aucune refonte UI.

---

## 08. Diffs substantiels CORR-02 (Product)

```diff
diff --git a/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts b/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
index a8e9d1b1..8e422679 100644
--- a/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
+++ b/projects/sfia-studio/app/lib/d1/boundedAtomicAudit.ts
@@ -6,6 +6,7 @@

 import type { DatabaseSync } from "node:sqlite";
 import { openD1Db, nowIso } from "@/lib/d1/db";
+import { assertD1AccessAllowedWhenLocalOaExclusive } from "@/lib/d1/localOaExclusiveMode";
 import type { ProjectCycleAuditPort } from "@/lib/platform/t-a7/projectCycleAtomicCoordinator";

 export const BOUNDED_ATOMIC_AUDIT_SCHEMA_VERSION =
@@ -51,9 +52,16 @@ export interface AppendAtomicAuditInput {
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
+    // CR-D2-03: mutation guard for injected connections (openD1Db alone is insufficient).
+    assertD1AccessAllowedWhenLocalOaExclusive();
     const createdAt = nowIso();
     const record: BoundedAtomicAuditRecord = {
       opId: input.opId,
@@ -124,6 +132,8 @@ export class BoundedAtomicAuditStore implements ProjectCycleAuditPort {
   }

   clearForTests(): void {
+    // CR-D2-03: DELETE is a mutation — block under OA-exclusive.
+    assertD1AccessAllowedWhenLocalOaExclusive();
     this.db.exec("DELETE FROM d1_atomic_audit");
   }
 }
diff --git a/projects/sfia-studio/app/lib/d1/confirmation/actions.ts b/projects/sfia-studio/app/lib/d1/confirmation/actions.ts
index d647a3ec..4f86a547 100644
--- a/projects/sfia-studio/app/lib/d1/confirmation/actions.ts
+++ b/projects/sfia-studio/app/lib/d1/confirmation/actions.ts
@@ -36,6 +36,16 @@ export async function actionExecuteConfirmation(
 ): Promise<ConfirmActionResult> {
   try {
     const result = executeConfirmedMutation(input);
+    // CR-D2-02: OA-exclusive freeze returns FAILED+FORBIDDEN without throw —
+    // surface as ok:false so UI does not treat confirmation as success.
+    if (result.status === "FAILED" && result.errorCode === "FORBIDDEN") {
+      return {
+        ok: false,
+        code: "FORBIDDEN",
+        message:
+          "Confirmation refusée : écriture D1 bloquée (mode OA exclusif local).",
+      };
+    }
     return { ok: true, result };
   } catch (error) {
     return serializeError(error);
diff --git a/projects/sfia-studio/app/lib/d1/repository.ts b/projects/sfia-studio/app/lib/d1/repository.ts
index 44d09652..6167b750 100644
--- a/projects/sfia-studio/app/lib/d1/repository.ts
+++ b/projects/sfia-studio/app/lib/d1/repository.ts
@@ -1,6 +1,7 @@
 import type { DatabaseSync } from "node:sqlite";
 import { openD1Db, nowIso } from "./db";
 import { D1Error } from "./errors";
+import { assertD1AccessAllowedWhenLocalOaExclusive } from "./localOaExclusiveMode";
 import type {
   D1Assignment,
   D1AuditEvent,
@@ -29,7 +30,12 @@ function mapProject(row: Record<string, unknown>): D1Project {
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
@@ -94,6 +100,8 @@ export class D1ProjectRepository {
     idempotencyKey: string;
     responseJson: string;
   }): { kind: "created" } | { kind: "idempotent"; responseJson: string } {
+    // CR-D2-03: injected DatabaseSync must not bypass OA-exclusive freeze.
+    assertD1AccessAllowedWhenLocalOaExclusive();
     this.db.exec("BEGIN IMMEDIATE");
     try {
       const existing = this.getIdempotentResponse(args.idempotencyKey);
@@ -177,6 +185,8 @@ export class D1ProjectRepository {
     correlationId: string;
     eventIds: { mode: string; activated?: string };
   }): D1Project {
+    // CR-D2-03: injected DatabaseSync must not bypass OA-exclusive freeze.
+    assertD1AccessAllowedWhenLocalOaExclusive();
     this.db.exec("BEGIN IMMEDIATE");
     try {
       const current = this.getProject(args.projectId);

```

### `actions.ts` complet (post CORR-02)

```typescript
"use server";

import { executeConfirmedMutation } from "./executeConfirmation";
import { buildConfirmationSummary } from "./summary";
import { getProject } from "../commands";
import { D1Error } from "../errors";
import type {
  BoundedMutationResult,
  ConfirmationSummary,
  ExecuteConfirmationInput,
  ProjectDraftFields,
} from "./types";
import { logIntakeEvent } from "../intakeObservability";

function serializeError(error: unknown): {
  ok: false;
  code: string;
  message: string;
} {
  if (error instanceof D1Error) {
    return { ok: false, code: error.code, message: error.message };
  }
  return {
    ok: false,
    code: "UNKNOWN",
    message: "Échec de confirmation. Réessayez.",
  };
}

export type ConfirmActionResult =
  | { ok: true; result: BoundedMutationResult }
  | { ok: false; code: string; message: string };

export async function actionExecuteConfirmation(
  input: ExecuteConfirmationInput,
): Promise<ConfirmActionResult> {
  try {
    const result = executeConfirmedMutation(input);
    // CR-D2-02: OA-exclusive freeze returns FAILED+FORBIDDEN without throw —
    // surface as ok:false so UI does not treat confirmation as success.
    if (result.status === "FAILED" && result.errorCode === "FORBIDDEN") {
      return {
        ok: false,
        code: "FORBIDDEN",
        message:
          "Confirmation refusée : écriture D1 bloquée (mode OA exclusif local).",
      };
    }
    return { ok: true, result };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionPrepareExistingProjectSummary(input: {
  projectId: string;
}): Promise<
  | {
      ok: true;
      project: {
        projectId: string;
        name: string;
        objective: string;
        state: string;
        version: number;
        updatedAt: string;
      };
      summary: ConfirmationSummary;
    }
  | { ok: false; code: string; message: string }
> {
  try {
    const project = getProject(input.projectId);
    const summary = buildConfirmationSummary({
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      project,
    });
    logIntakeEvent("intake_confirmation_presented", {
      sessionLocalId: "prepare",
      status: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      projectId: project.projectId,
    });
    return {
      ok: true,
      project: {
        projectId: project.projectId,
        name: project.name,
        objective: project.objective,
        state: project.state,
        version: project.version,
        updatedAt: project.updatedAt,
      },
      summary,
    };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionPrepareCreateSummary(input: {
  draft: ProjectDraftFields;
}): Promise<{ ok: true; summary: ConfirmationSummary }> {
  const summary = buildConfirmationSummary({
    actionType: "CREATE_PROJECT",
    draft: input.draft,
  });
  return { ok: true, summary };
}

```

---

## 09. Contenu exact des nouveaux / tests CORR-02

### NEW — `l2d2InjectedConnectionWriterGuards.test.ts`

```typescript
/**
 * L2-D2 CORR-02 / CR-D2-03 — mutation guards on injected DatabaseSync.
 * openD1Db alone is insufficient when a connection was opened before exclusive ON.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
import { openD1Db, resetD1DbForTests } from "@/lib/d1/db";
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
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-l2d2-inj-"));
  tempDirs.push(dir);
  const dbPath = path.join(dir, "d1.sqlite");
  // Open while exclusive OFF so schema can initialize.
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

describe("L2-D2 CORR-02 CR-D2-03 injected connection writer guards", () => {
  it("createProjectAtomic / selectMethodModeAtomic refuse after exclusive ON (injected db)", () => {
    const { dbPath, db } = openDisposableD1();
    const repo = new D1ProjectRepository(db);

    // Seed one project while exclusive OFF.
    const seeded = repo.createProjectAtomic({
      project: {
        projectId: "proj-seed-1",
        workspaceId: D1_DEFAULT_WORKSPACE_ID,
        name: "Seed",
        objective: "baseline",
        initialContextSummary: null,
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        state: "ACTIVE",
        ownerActorId: D1_MONO_OPERATOR_ACTOR_ID,
        createdAt: "2026-10-24T16:00:00.000Z",
        updatedAt: "2026-10-24T16:00:00.000Z",
        version: 1,
      },
      assignments: [
        {
          principalId: D1_MONO_OPERATOR_ACTOR_ID,
          projectId: "proj-seed-1",
          role: "project_owner",
          createdAt: "2026-10-24T16:00:00.000Z",
        },
      ],
      events: [
        {
          eventId: "d1-evt-seed",
          eventType: "PROJECT_CREATED",
          actorId: D1_MONO_OPERATOR_ACTOR_ID,
          correlationId: "corr-seed",
          payload: {},
        },
      ],
      idempotencyKey: "idem-seed",
      responseJson: "{}",
    });
    expect(seeded.kind).toBe("created");
    const beforeCount = (
      db.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as { c: number }
    ).c;
    expect(beforeCount).toBe(1);

    setLocalOaExclusiveModeForTests(true);

    try {
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
          createdAt: "2026-10-24T16:01:00.000Z",
          updatedAt: "2026-10-24T16:01:00.000Z",
          version: 1,
        },
        assignments: [],
        events: [],
        idempotencyKey: "idem-blocked",
        responseJson: "{}",
      });
      expect.unreachable("createProjectAtomic should refuse");
    } catch (error) {
      expect(error).toBeInstanceOf(D1Error);
      expect((error as D1Error).code).toBe("FORBIDDEN");
    }

    try {
      repo.selectMethodModeAtomic({
        projectId: "proj-seed-1",
        methodMode: "SFIA_V2_6",
        expectedVersion: 1,
        nextState: "ACTIVE",
        actorId: D1_MONO_OPERATOR_ACTOR_ID,
        correlationId: "corr-blocked",
        eventIds: { mode: "d1-evt-mode" },
      });
      expect.unreachable("selectMethodModeAtomic should refuse");
    } catch (error) {
      expect(error).toBeInstanceOf(D1Error);
      expect((error as D1Error).code).toBe("FORBIDDEN");
    }

    const afterCount = (
      db.prepare("SELECT COUNT(*) AS c FROM d1_projects").get() as { c: number }
    ).c;
    expect(afterCount).toBe(1);
    const mode = (
      db
        .prepare("SELECT method_mode FROM d1_projects WHERE project_id = ?")
        .get("proj-seed-1") as { method_mode: string }
    ).method_mode;
    expect(mode).toBe(D1_GOVERNANCE_METHOD_MODE);
    expect(fs.existsSync(dbPath)).toBe(true);
  });

  it("BoundedAtomicAuditStore append/clearForTests refuse under exclusive with injected db", () => {
    const { db } = openDisposableD1();
    const store = new BoundedAtomicAuditStore(db);
    store.append({
      opId: "op-1",
      idempotencyKey: "idem-audit-1",
      phase: "prepare",
      outcome: "IN_PROGRESS",
      correlationId: "corr-1",
    });
    const before = (
      db.prepare("SELECT COUNT(*) AS c FROM d1_atomic_audit").get() as {
        c: number;
      }
    ).c;
    expect(before).toBe(1);

    setLocalOaExclusiveModeForTests(true);
    try {
      store.append({
        opId: "op-2",
        idempotencyKey: "idem-audit-2",
        phase: "commit",
        outcome: "COMMITTED",
        correlationId: "corr-2",
      });
      expect.unreachable("append should refuse");
    } catch (error) {
      expect(error).toBeInstanceOf(D1Error);
      expect((error as D1Error).code).toBe("FORBIDDEN");
    }
    try {
      store.clearForTests();
      expect.unreachable("clearForTests should refuse");
    } catch (error) {
      expect(error).toBeInstanceOf(D1Error);
      expect((error as D1Error).code).toBe("FORBIDDEN");
    }

    const after = (
      db.prepare("SELECT COUNT(*) AS c FROM d1_atomic_audit").get() as {
        c: number;
      }
    ).c;
    expect(after).toBe(1);
  });

  it("exclusive OFF — injected repository mutations still work", () => {
    const { db } = openDisposableD1();
    setLocalOaExclusiveModeForTests(false);
    const repo = new D1ProjectRepository(db);
    const outcome = repo.createProjectAtomic({
      project: {
        projectId: "proj-ok",
        workspaceId: D1_DEFAULT_WORKSPACE_ID,
        name: "OK",
        objective: "off mode",
        initialContextSummary: null,
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        state: "DRAFT",
        ownerActorId: D1_MONO_OPERATOR_ACTOR_ID,
        createdAt: "2026-10-24T16:02:00.000Z",
        updatedAt: "2026-10-24T16:02:00.000Z",
        version: 1,
      },
      assignments: [],
      events: [
        {
          eventId: "d1-evt-ok",
          eventType: "PROJECT_CREATED",
          actorId: D1_MONO_OPERATOR_ACTOR_ID,
          correlationId: "corr-ok",
          payload: {},
        },
      ],
      idempotencyKey: "idem-ok-off",
      responseJson: "{}",
    });
    expect(outcome.kind).toBe("created");
  });
});

```

### NEW — `l2d2ConfirmationForbiddenUi.test.tsx`

```typescript
/**
 * L2-D2 CORR-02 / CR-D2-02 — ConfirmationPanel must not call onDone on FORBIDDEN.
 * @vitest-environment jsdom
 */
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const actionExecuteConfirmationMock = vi.fn();

vi.mock("@/lib/d1/confirmation/actions", () => ({
  actionExecuteConfirmation: (...args: unknown[]) =>
    actionExecuteConfirmationMock(...args),
}));

import { ConfirmationPanel } from "@/features/d1/confirmation/ConfirmationPanel";

afterEach(() => {
  cleanup();
  actionExecuteConfirmationMock.mockReset();
});

describe("L2-D2 CORR-02 confirmation FORBIDDEN UI (Q15 targeted)", () => {
  it("does not invoke onDone when action returns ok:false FORBIDDEN", async () => {
    actionExecuteConfirmationMock.mockResolvedValue({
      ok: false,
      code: "FORBIDDEN",
      message: "Confirmation refusée : écriture D1 bloquée.",
    });
    const onDone = vi.fn();
    const onCancel = vi.fn();

    render(
      <ConfirmationPanel
        sessionLocalId="sess-ui"
        proposalId="prop-ui"
        matchId={null}
        actionType="CREATE_PROJECT"
        targetProjectId={null}
        initialDraft={{
          name: "X",
          objective: "Y",
          initialContextSummary: "",
          activate: true,
        }}
        expectedProjectVersion={null}
        expectedUpdatedAt={null}
        idempotencyKey="idem-ui-forbidden"
        summary={{
          actionLabel: "Créer le projet",
          targetLabel: "Nouveau projet",
          consequences: ["Création D1"],
          dataToPersist: [],
          warnings: [],
          irreversibleEffects: [],
          confirmationRequired: true,
        }}
        onDone={onDone}
        onCancel={onCancel}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /Créer ce projet/i }));
    await waitFor(() => {
      expect(actionExecuteConfirmationMock).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(screen.getByText(/Confirmation refusée/i)).toBeTruthy();
    });
    expect(onDone).not.toHaveBeenCalled();
  });
});

```

### MODIFIED — O-01 `l2d2O01ProductUiIntegrated.test.tsx` (complet)

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

    const OBJECTIVE =
      "Prouver comprendre l'état métier LPS depuis OA durable";
    const created = await createProjectRuntimeAction({
      name: "O-01 Fresh Project",
      objective: OBJECTIVE,
      context: "L2-D2 integrated oracle",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "OA exclusive"],
      shortReference: "O01FS",
      idempotencyKey: `idem:l2d2-o01-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    expect(created.projectId.startsWith("prj:")).toBe(true);
    // Runtime create projection carries LPS-backed objective (Truth C).
    expect(created.project.objective).toBe(OBJECTIVE);

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
    const lpsRow = db
      .prepare(
        "SELECT payload_json FROM oa_lps WHERE project_id = ? ORDER BY version ASC LIMIT 1",
      )
      .get(created.projectId) as { payload_json: string } | undefined;
    expect(lpsRow).toBeTruthy();
    const lpsPayload = JSON.parse(lpsRow!.payload_json) as {
      objective?: string;
    };
    expect(lpsPayload.objective).toBe(OBJECTIVE);
    db.close();

    const listed = await listProjectsRuntimeAction();
    expect(listed.ok).toBe(true);
    if (!listed.ok) throw new Error("list failed");
    const listedRow = listed.projects.find(
      (p) => p.projectId === created.projectId,
    );
    expect(listedRow?.title).toBe("O-01 Fresh Project");
    // List enriches rows from current LPS objective (Product Truth C).
    expect(listedRow?.objective).toBe(OBJECTIVE);

    render(<ProjectsPage />);
    await waitFor(() => {
      expect(screen.getByTestId("studio-projects-open").textContent).toContain(
        "O-01 Fresh Project",
      );
    });
    // CR-D2-04: « En cours » column renders LPS objective (not a static mock).
    await waitFor(() => {
      expect(
        screen.getByTestId("studio-projects-current").textContent,
      ).toContain(OBJECTIVE);
    });

    cleanup();
    render(<ProjectWorkspacePage projectId={created.projectId} />);
    await waitFor(() => {
      expect(screen.getByTestId("project-title").textContent).toContain(
        "O-01 Fresh Project",
      );
    });
    // Workspace subtitle is success.project.objective from getProjectRuntimeAction.
    await waitFor(() => {
      expect(screen.getByTestId("project-subtitle").textContent).toContain(
        OBJECTIVE,
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
    expect(reread.project.objective).toBe(OBJECTIVE);
    expect(reread.livingState.id.startsWith("lps:")).toBe(true);
    expect(reread.livingState.version).toBe(1);

    render(<ProjectWorkspacePage projectId={created.projectId} />);
    await waitFor(() => {
      expect(screen.getByTestId("project-title").textContent).toContain(
        "O-01 Fresh Project",
      );
    });
    await waitFor(() => {
      expect(screen.getByTestId("project-subtitle").textContent).toContain(
        OBJECTIVE,
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

### MODIFIED — freeze confirmation assert (extrait)

```typescript
    const mutation = executeConfirmedMutation(input);
    expect(mutation.status).toBe("FAILED");
    expect(mutation.errorCode).toBe("FORBIDDEN");
    // CR-D2-02: FORBIDDEN must surface as ok:false (not ok:true + FAILED).
    const action = await actionExecuteConfirmation(input);
    expect(action.ok).toBe(false);
    if (!action.ok) {
      expect(action.code).toBe("FORBIDDEN");
      expect(action.message.length).toBeGreaterThan(0);
    }
    expect(fs.existsSync(probe)).toBe(false);
```

---

## 10. CR-D2-02 avant / après

| | Avant (CORR-REVIEW-01) | Après CORR-02 |
|---|---|---|
| `executeConfirmedMutation` exclusive | `status=FAILED` `errorCode=FORBIDDEN` | inchangé |
| `actionExecuteConfirmation` | `ok:true` + `result.status=FAILED` | **`ok:false` `code=FORBIDDEN`** |
| ConfirmationPanel | `onDone` appelé si ok:true | **pas d'`onDone`** (chemin `!res.ok`) |
| Fichier D1 | non créé | non créé (A2) |
| Exclusive OFF | create OK | préservé (A6) |

---

## 11. CR-D2-03 injected DB tests

Suite jetable : open OFF → inject repo/store → exclusive ON → mutations FORBIDDEN + counts inchangés → OFF fonctionne. Guard `openD1Db` précoce **conservé** (freeze suite).

---

## 12. CR-D2-04 UI state proof

Chaîne prouvée DET :
1. Create runtime avec OBJECTIVE constant.
2. SQLite `oa_lps.payload_json.objective === OBJECTIVE`.
3. `listProjectsRuntimeAction` row.objective === OBJECTIVE.
4. UI list `studio-projects-current` contient OBJECTIVE.
5. UI workspace `project-subtitle` contient OBJECTIVE.
6. Reset singleton + reopen service → getProject.objective + subtitle cohérents.
7. Probe `createProject` D1 → FORBIDDEN ; fichier D1 absent.

**Restart qualifié :** remount React + reset singleton + reopen SQLite path. **Pas** redémarrage processus Studio actif (interdit). Process A/B M1 déjà couvert par `m1ProductSqliteDurability` (PASS). **LIVE E2E NOT CLAIMED.**

---

## 13. D4 / Q15 impacts

**D4 :** tests `l2d2D4LegacyNavigation` — 4 PASS ; comportement générique→`/studio` et deep links→`notFound` conservé. Mode OFF no-op.

**Q15 (ciblé CORR-02 seulement) :**
- confirmation refusée explicite ;
- absence fausse réussite (`onDone` non appelé) ;
- flux OFF préservés ;
- continuité Product O-01 objective.

Q15 global P6 : **reste PARTIAL** (pas de campagne globale).

---

## 14. Résultats tests réels

cwd : `projects/sfia-studio/app`

```
npx vitest run \
  __tests__/d1/l2d2LocalOaExclusiveFreeze.test.ts \
  __tests__/d1/l2d2InjectedConnectionWriterGuards.test.ts \
  __tests__/d1/l2d2ConfirmationForbiddenUi.test.tsx \
  __tests__/d1/l2d2D4LegacyNavigation.test.ts \
  __tests__/oa/project/l2d2O01ProductUiIntegrated.test.tsx \
  __tests__/oa/project/l2d1D5CreateAuditAtomicity.test.ts \
  __tests__/oa/project/m1ProductSqliteDurability.test.ts
```

**Résultat CORR-02 :** Test Files **7 passed** / Tests **31 passed** / 0 failed / 0 skipped.

Comparatif Delivery historique : 27 PASS (5 files, sans injected/UI confirmation). Après CORR-02 : **31 PASS** (+ injected 3 + UI confirm 1 ; freeze/O-01 assertions renforcées).

```
git diff --check   # PASS
npm run typecheck  # tsc --noEmit — PASS
```

SQLite : uniquement `mkdtemp` / `os.tmpdir()` jetables. **Aucune** DB Application Support créée. **Aucune** mutation P6. Studio serveur **non lancé**. `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` utilisateur **non activé** (overrides test-only).

Limites : **DET** only. LIVE / cutover / REAL BOUNDARY **NOT PROVEN**.

---

## 15. R24 / PRR delta proposé (G-PRR OPEN — aucune édition)

Proposition documentaire **sans** modifier les chemins protégés :

| Volume | Delta proposé |
|---|---|
| **03** flows | Confirmation D1 sous OA-exclusive : action surface `ok:false/FORBIDDEN` ; UI ne traite pas comme succès. |
| **04** deps | Writers D1 mutatifs dépendent du guard exclusif **à l'ouverture et à la mutation** (injected connection). |
| **05** objects | `assertD1AccessAllowedWhenLocalOaExclusive` points d'appel : `openD1Db` + repo atomic writers + BoundedAtomicAudit mutatifs. |
| **06** persistence | Mode exclusive : zéro écriture D1 via APIs applicatives testées ; frontière brute SQLite déclarée. |
| **07** invariants | INV candidate : FAILED+FORBIDDEN confirmation → ok:false ; INV candidate : injected DatabaseSync cannot mutate via D1 repos when exclusive. |
| **08** proof map | Pointer suites `l2d2LocalOaExclusiveFreeze` / `l2d2InjectedConnectionWriterGuards` / `l2d2ConfirmationForbiddenUi` / O-01 objective UI ; niveau DET. |
| **09** gaps | Residual : raw `DatabaseSync` hors API ; Q15 global PARTIAL ; activation / cutover non prouvés ; G-PRR sync PENDING jusqu'à GO. |

Pas de référentiel parallèle créé.

---

## 16. Fake / Real qualification

| Preuve | Classe |
|---|---|
| Freeze / confirmation / injected writers | **DETERMINISTIC VERIFIED AT TESTED SCOPE** |
| O-01 Product→UI objective | **DETERMINISTIC VERIFIED AT TESTED SCOPE** (jsdom + SQLite jetable + UI réelle) |
| Studio live / Application Support / cutover | **NOT PROVEN / NOT AUTHORIZED** |
| P6 GLOBAL / REAL BOUNDARY / runtime v3 | **NOT CLAIMED** |

---

## 17. Dette / risques / exit

- G-PRR sync requis avant verdict d'intégration documentaire CURRENT.
- G-GIT projet OPEN — dirty Delivery non intégré.
- G-ACTIVATION OPEN — cutover local non autorisé.
- Residual writer : SQLite brut hors API.
- Q15 global PARTIAL.

**Exit CORR-02 :** corrections CR-D2-02/03/04 + preuves DET + pack FULL + handoff L3. **≠** exit activation.

---

## 18. Réserves et stops

Aucun STOP déclenché. Réserves :
- Activation / cutover / P6 / App Support inchangés (interdits).
- PRR non édité.
- Frontière SQLite brute déclarée (pas STOP — hors APIs D1, explicitement hors promesse).

---

## 19. Gates encore ouverts

| Gate | État |
|---|---|
| G-CORR02 | **CONSUMED** (ce cycle) |
| G-ACTIVATION | OPEN |
| G-GIT PROJET | OPEN |
| G-PRR PROTECTED EDIT | OPEN |
| Runtime v3 adoption | NON ADOPTED |
| Cutover local prouvé | NOT AUTHORIZED |

---

## 20. Verdict et instruction ChatGPT

**AKG-M5 L2-D2 CORR-02 — TARGETED CORRECTIONS IMPLEMENTED — EVIDENCE COMPLETE — CRITICAL REVIEW REQUIRED — ACTIVATION NOT AUTHORIZED — G-PRR / G-GIT OPEN.**

ChatGPT doit :
1. Critical Review du **delta CORR-02** (pas relire Delivery comme nouveau).
2. Vérifier cumul Delivery L2-D2 + CORR-02.
3. Qualifier retour FORBIDDEN (`ok:false`).
4. Contrôler injected writers + frontière résiduelle.
5. Évaluer preuve O-01 « comprendre » (objective LPS→UI).
6. Statuer Q15 ciblé vs global PARTIAL.
7. Qualifier R24 / nécessité G-PRR.
8. Confirmer gates restants.
9. Déterminer ordre sûr Git Integration vs activation locale.
10. Préparer prochaine recommandation **sans GO implicite**.

Ne pas déclarer : CUTOVER PROVEN ; STUDIO LIVE VALIDATED ; P6 GLOBAL PASS ; REAL BOUNDARY PROVEN ; PRODUCT COMPLETION COMPLETE ; STUDIO V3 RUNTIME ADOPTED.

---

## Annexe — Cumul Delivery L2-D2 déjà publié

Contenu Delivery (freeze `openD1Db` + lazy repos + D4 navigation + O-01 base + env example + pages redirects) : handoff **CORR-REVIEW-01** `828e9197` / blob `0f8d8255`. CORR-02 **n'a pas** créé ces fichiers ; il les corrige / complète.

FIN DU PACK CORR-02.
