# W2-G3 E+A+B+C — PR #400 CI CORRECTION — FULL REVIEW PACK

## FINAL VERDICT

**CI STILL FAILED — RETURN TO CHATGPT REQUALIFICATION — NO SECOND FIX**

- Correction commit `53ea8c74…` closed all **six** original Vitest contract failures (Unit tests PASS: 1963 passed).
- Overall PR CI remains red due to an **out-of-scope** FinOps T7 Postgres integration failure (`t7.shadow-option-a.wiring.integration.test.ts` T7-C04).
- No second project fix performed in this cycle.
- Merge NOT AUTHORIZED.

---

## A. Metadata

| Field | Value |
|---|---|
| Timestamp (UTC) | 2026-08-23T08:51:06Z |
| Repo | mcleland147/sfia-workspace |
| Branch | delivery/sfia-studio-w2-g3-umbrella-a |
| Pre-cycle HEAD | 0ab627737950203cb1928dcb3d30f46608c57703 |
| origin/main | 3a86f8190deb34e37bede868a6e765b0440fc839 |
| PR | #400 (Draft OPEN, base=main, head=delivery/sfia-studio-w2-g3-umbrella-a) |
| Prior CI run | 32628550080 = FAILED (6 failed / 1956 passed) |
| Morris correction GO | CONSUMED |
| Merge | NOT AUTHORIZED |
| Typologie | RUN — correction ciblée |
| Profil | CRITICAL |
| C6 | CLOSED — not reopened |
| Runtime v3 | NON ADOPTED |
| Track D / Phase B / Execute / REAL | OUT |

## B. Local Git Truth (pre-commit)

```
branch: delivery/sfia-studio-w2-g3-umbrella-a
HEAD:   0ab627737950203cb1928dcb3d30f46608c57703
origin/delivery/sfia-studio-w2-g3-umbrella-a: 0ab627737950203cb1928dcb3d30f46608c57703
origin/main: 3a86f8190deb34e37bede868a6e765b0440fc839
staged: none (pre-commit)
untracked preserved: .tmp-sfia-review/**, projects/eventops-poc/**, projects/flex-office-demo/**
```

## C. Failure requalification

### 1. UAT `/Morris/` on `f3-contract-authority-user`
- **Original:** `uatUxSemanticReserves.ui.test.tsx` expected `/Morris/` on authority surface.
- **Classification:** stale UAT semantic contract (test drift vs generic Pilote role).
- **Correction:** expect `/autorité structurante/i`; assert NOT `/Morris/i`.
- **Evidence:** `requiredAuthorityUserLabel("MORRIS")` → `"Votre confirmation est requise maintenant (autorité structurante)."`; ConversationSurface renders `contractFacts.authority` unchanged.

### 2. Import-boundary allowlist (9 missing W2 edges)
- **Original:** `importBoundaries.test.ts` Set{22} vs actual Set{31}.
- **Classification:** exact allowlist lag behind legitimate public-seam imports.
- **Correction:** add 9 exact `file:@/lib/vertical-slice-runtime` entries (public root only).
- **Evidence:** Stage 1 inventory + pre-mutation vitest delta; no internal `/vertical-slice-runtime/...` paths.

### 3–6. Schema migration latest-version stale (`m6` vs `m7`)
- **Original:** m3/m5/m6 migration tests asserted `PRODUCT_SCHEMA_VERSION === m6-0.1.0`.
- **Classification:** stale latest-version expectations vs additive M7 already in Product SQLite.
- **Correction:** historical constants retained; latest = `m7-0.1.0`; explicit M6→M7 additive + idempotent proof in `m6ProductSchemaMigration.test.ts`.
- **Evidence:** `db.ts` `PRODUCT_SCHEMA_VERSION = PRODUCT_SCHEMA_VERSION_M7`; ladder includes M6→`applyM7`; tables `oa_ec_inspection_attestations`, `oa_authority_verification_receipts`.

## D. Stage 1 read-only discovery

### UAT semantic
- Runtime authority label is generic « autorité structurante » for MORRIS requiredAuthority.
- Morris is Studio construction authority, not a runtime persona.
- No runtime mutation required or performed.

### Import-edge inventory (exact)
Actual new W2 edges = **9** (matches CI handoff expectation):

1. `features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime`
2. `features/project-assistant/w2/authorizeExecutionContract.ts:@/lib/vertical-slice-runtime`
3. `features/project-assistant/w2/confirmForAuthorization.ts:@/lib/vertical-slice-runtime`
4. `features/project-assistant/w2/decideTrajectory.ts:@/lib/vertical-slice-runtime`
5. `features/project-assistant/w2/inspectExecutionContract.ts:@/lib/vertical-slice-runtime`
6. `features/project-assistant/w2/presentedOptionSet.ts:@/lib/vertical-slice-runtime`
7. `features/project-assistant/w2/projectHistory.ts:@/lib/vertical-slice-runtime`
8. `features/project-assistant/w2/proposeTrajectoryOptions.ts:@/lib/vertical-slice-runtime`
9. `features/project-assistant/w2/qualificationInputs.ts:@/lib/vertical-slice-runtime`

All target existing public root seam `@/lib/vertical-slice-runtime` (F2/F3 precedent). No internals. No reverse dependency. No new architecture layer.

### Product SQLite migration ladder
- `PRODUCT_SCHEMA_VERSION_M6 = m6-0.1.0` (historical)
- `PRODUCT_SCHEMA_VERSION_M7 = m7-0.1.0` (current)
- `PRODUCT_SCHEMA_VERSION = M7`
- Additive M7 creates inspection attestations + authority verification receipts
- `openProductSqlite` applies M6→M7 when version is M6; older ladders also end at M7

## E. Exact modified files (authorized five only)

1. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx`
2. `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`
3. `projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts`
4. `projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts`
5. `projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts`

No production path under `features/**`, `lib/**`, `e2e/**`, or `.github/**` differs from `0ab62773…`.

## F. Exploitable unified diff vs 0ab627737950203cb1928dcb3d30f46608c57703

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
index aff6a5eb..d1153f91 100644
--- a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
@@ -131,7 +131,7 @@ describe("M3 Product SQLite schema migration", () => {
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
     expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m6-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");

     const decisions = svc.store.db
       .prepare(
diff --git a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
index 91f28769..b2b75243 100644
--- a/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
@@ -147,7 +147,7 @@ describe("M5 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m6-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
     expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");

     expect(tableExists(svc.store.db, "oa_human_decisions")).toBe(true);
@@ -196,7 +196,8 @@ describe("M5 Product SQLite schema migration", () => {
     const version = svc.store.db
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
-    expect(version.value).toBe("m6-0.1.0");
+    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
     expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
   });

diff --git a/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
index 8c8e5b2b..424bb481 100644
--- a/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
@@ -14,6 +14,7 @@ import {
 import {
   PRODUCT_SCHEMA_VERSION,
   PRODUCT_SCHEMA_VERSION_M5,
+  PRODUCT_SCHEMA_VERSION_M6,
   createTestSqliteProductProjectServices,
   type SqliteProductProjectServices,
 } from "@/lib/oa/project";
@@ -70,7 +71,7 @@ afterEach(() => {
 });

 describe("M6 Product SQLite schema migration", () => {
-  it("migrates M5 DB additively to m6", async () => {
+  it("migrates M5 DB additively through M6 to current m7", async () => {
     const dbPath = tempDbPath("m5-legacy.sqlite");
     {
       const bootstrap = buildProjectServices(dbPath);
@@ -111,7 +112,8 @@ describe("M6 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m6-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION_M6).toBe("m6-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
     expect(tableExists(svc.store.db, "oa_project_trajectories")).toBe(true);
     expect(tableExists(svc.store.db, "oa_project_trajectory_current")).toBe(
       true,
@@ -123,6 +125,83 @@ describe("M6 Product SQLite schema migration", () => {
     expect(project.ok).toBe(true);
   });

+  it("migrates M6 DB additively to m7 and remains idempotent on reopen", async () => {
+    const dbPath = tempDbPath("m6-legacy.sqlite");
+    {
+      const bootstrap = buildProjectServices(dbPath);
+      await bootstrap.createProject.execute({
+        projectId: "prj:m6-to-m7",
+        title: "M6 legacy",
+        objective: "preserve-m6",
+        context: "ctx-m6",
+        scope: "scope-m6",
+        doctrinePackagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
+        createdBy: {
+          actorId: "actor:morris",
+          role: "project_owner",
+          displayName: "Morris",
+          authorityLevel: "N3",
+        },
+        lpsVersionId: "lps:m6-to-m7-v1",
+        idempotencyKey: "idem:m6-to-m7",
+      });
+      bootstrap.dispose();
+      openServices.pop();
+    }
+
+    {
+      const db = new DatabaseSync(dbPath);
+      db.exec("DROP TABLE IF EXISTS oa_ec_inspection_attestations");
+      db.exec("DROP TABLE IF EXISTS oa_authority_verification_receipts");
+      db.prepare(
+        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
+      ).run(PRODUCT_SCHEMA_VERSION_M6);
+      db.close();
+    }
+
+    const svc = buildProjectServices(dbPath);
+    const version = svc.store.db
+      .prepare("SELECT value FROM schema_meta WHERE key = ?")
+      .get("schema_version") as { value: string };
+    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m7-0.1.0");
+    expect(tableExists(svc.store.db, "oa_ec_inspection_attestations")).toBe(
+      true,
+    );
+    expect(
+      tableExists(svc.store.db, "oa_authority_verification_receipts"),
+    ).toBe(true);
+    expect(tableExists(svc.store.db, "oa_project_trajectories")).toBe(true);
+
+    const project = await svc.getProject.execute({ projectId: "prj:m6-to-m7" });
+    expect(project.ok).toBe(true);
+    if (project.ok) {
+      expect(project.project.title).toBe("M6 legacy");
+    }
+
+    svc.dispose();
+    openServices.pop();
+
+    const reopened = buildProjectServices(dbPath);
+    const reopenedVersion = reopened.store.db
+      .prepare("SELECT value FROM schema_meta WHERE key = ?")
+      .get("schema_version") as { value: string };
+    expect(reopenedVersion.value).toBe("m7-0.1.0");
+    expect(
+      tableExists(reopened.store.db, "oa_ec_inspection_attestations"),
+    ).toBe(true);
+    expect(
+      tableExists(reopened.store.db, "oa_authority_verification_receipts"),
+    ).toBe(true);
+    const preserved = await reopened.getProject.execute({
+      projectId: "prj:m6-to-m7",
+    });
+    expect(preserved.ok).toBe(true);
+    if (preserved.ok) {
+      expect(preserved.project.title).toBe("M6 legacy");
+    }
+  });
+
   it("fails closed on unknown schema version", () => {
     const dbPath = tempDbPath("unknown.sqlite");
     const db = new DatabaseSync(dbPath);
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
index 1ed2b066..7856093b 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
@@ -260,7 +260,10 @@ describe("UAT-UX-03 confirmation surface", () => {
       "CURSOR CLI REAL PROFILE",
     );
     expect(screen.getByTestId("f3-contract-authority-user")).toHaveTextContent(
-      /Morris/,
+      /autorité structurante/i,
+    );
+    expect(screen.getByTestId("f3-contract-authority-user")).not.toHaveTextContent(
+      /Morris/i,
     );
     expect(screen.getByTestId("f3-contract-semantic-chip")).toHaveTextContent(
       /contrôlée/,
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 00dd3f49..0305f5ed 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -84,6 +84,15 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f3/selectProductM3ResolutionProfile.ts:@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
+      "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/authorizeExecutionContract.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/confirmForAuthorization.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/decideTrajectory.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/inspectExecutionContract.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/presentedOptionSet.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/projectHistory.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/proposeTrajectoryOptions.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/qualificationInputs.ts:@/lib/vertical-slice-runtime",
       "features/pre-m6-product-ui/NewProjectIntentionPage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectWorkspacePage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectsPage.tsx:@/lib/vertical-slice-runtime/actions",
```

## G. UAT proof

- Authority surface asserts generic « autorité structurante ».
- Authority surface explicitly rejects Morris as runtime persona.
- Production UI / labels / ConversationSurface unchanged in this commit.

## H. Import boundary proof

Exact added allowlist entries (9): see section D inventory.
- Destination = existing public root `@/lib/vertical-slice-runtime` only.
- No wildcards; no forbidden-regex weakening; no existing entries removed.
- Architecture boundary unchanged (allowlist lag only).

## I. Migration proof

- Historical: `PRODUCT_SCHEMA_VERSION_M3 = m3-0.1.0`; `PRODUCT_SCHEMA_VERSION_M6 = m6-0.1.0` retained.
- Current: `PRODUCT_SCHEMA_VERSION = m7-0.1.0` asserted explicitly.
- New case: M6 DB fixture → reopen → m7 + M7 tables + project data preserved → dispose/reopen idempotent.
- No fabrication of W2 authority rows; proof is additive migration + preservation.

## J. Local QA (exact)

| Gate | Result |
|---|---|
| Targeted 5 suites | 5 files passed / **20** tests passed |
| w2EabcDelivery | 1 file / **28** tests passed |
| Full Vitest `npm test` | **210** passed \| 13 skipped files; **1963** passed \| 131 skipped tests |
| typecheck | PASS (after `npm ci`; pg restored) |
| lint | PASS (No ESLint warnings or errors) |
| build | PASS (Next.js 15.5.20 compiled) |
| Playwright `e2e/studio-w2-g3-correction-runtime.spec.ts` | **1 passed** (4.4s) |
| `git diff --check` | PASS |

Do **not** claim CI green from local tests alone — see section N after push.

## K. Architecture anti-claims

- Production runtime unchanged (diff = 5 test files only).
- C6 CLOSED — not reopened.
- Product SQLite KEEP — no second store/schema mechanism.
- No parallel architecture.
- No Phase B / Track D.
- No Execute / ExecutionAttempt introduced by this correction.
- No REAL.
- Runtime v3 NON ADOPTED.
- Merge NOT AUTHORIZED.

## L. Git integration authority

- Correction project commit + normal push to existing W2 branch: AUTHORIZED (Morris GO consumed).
- Merge: NOT AUTHORIZED.
- No amend of Delivery commit `0ab62773…`.
- No force-push.
- No new PR; Draft PR #400 retained.

## M. Project commit / push

| Field | Value |
|---|---|
| Correction commit | `53ea8c742f40607b6c8fb37a95b7dedb51059b7d` |
| Message | `test(sfia-studio): align W2-G3 CI contracts` |
| Files in commit | exactly the five authorized test paths |
| Pre-push origin/main | `3a86f8190deb34e37bede868a6e765b0440fc839` (unchanged) |
| Pre-push remote branch | `0ab627737950203cb1928dcb3d30f46608c57703` |
| Push | normal `git push origin delivery/sfia-studio-w2-g3-umbrella-a` (no force) |
| Post-push local = remote | `53ea8c742f40607b6c8fb37a95b7dedb51059b7d` |
| PR #400 | Draft OPEN; base=main; head=`delivery/sfia-studio-w2-g3-umbrella-a`; headOid=`53ea8c74…` |
| Amend | NOT used |
| New PR | NOT created |
| Merge | NOT performed |

## N. PR #400 CI observation

| Field | Value |
|---|---|
| New CI run | [32629430609](https://github.com/mcleland147/sfia-workspace/actions/runs/32629430609) |
| headSha | `53ea8c742f40607b6c8fb37a95b7dedb51059b7d` |
| Overall conclusion | **failure** |

### Jobs

| Job | Conclusion |
|---|---|
| Detect SFIA Studio changes | **PASS** |
| Build and validate SFIA Studio | **FAIL** |
| SFIA Studio Required Gate | **FAIL** (aggregate) |

### Build and validate steps (material)

| Step | Conclusion |
|---|---|
| Typecheck | PASS |
| Lint | PASS |
| Build | PASS |
| Unit tests (Vitest) | **PASS** |
| FinOps T1 migrate up (CI-A) | PASS |
| FinOps T1 PostgreSQL integration tests (CI-A) | **FAIL** |

### Original six W2-G3 contract failures — CLOSED

Unit tests (Vitest) passed on run 32629430609. None of the prior six failures reappear:
1. `uatUxSemanticReserves.ui.test.tsx` `/Morris/` — closed
2. `importBoundaries.test.ts` 9 W2 edges — closed
3–6. m3/m5/m6 schema latest-version assertions — closed

### New failure (OUT OF authorized five-file correction scope)

```
FAIL __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
  > T7 SHADOW Option A — wiring integration
  > T7-C04 SHADOW → OFF mid-provider · PRE eligible · POST disables capture

AssertionError: expected false to be true // Object.is equality
 ❯ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts:664:23
    expect(result.ok).toBe(true);
```

Suite counts on FinOps DB step: 1 failed | 130 passed (131); 1 failed | 12 passed files (13).

**Classification for ChatGPT:** this FinOps T7 PostgreSQL integration failure is **outside** the W2-G3 CI-correction mutation scope (not one of the five authorized test files; not production W2; not one of the six original Vitest contract failures). Per execution contract: **no second project fix/commit in this cycle**.

### Cycle stop rule applied

**CI STILL FAILED — RETURN TO CHATGPT REQUALIFICATION — NO SECOND FIX**

## O. Instruction ChatGPT

Inspect the latest canonical review handoff, PR #400 at its new head (`53ea8c74…`), and CI run **32629430609**. Verify that the correction contains only the five authorized test files and that the six original Vitest contract failures are closed without runtime/architecture weakening. Note the remaining CI red is a **distinct FinOps T7-C04 Postgres integration failure** outside this correction’s authorized scope. Determine whether that residual requires a separate requalified cycle. Merge remains subject to a distinct Morris GO.
