# PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01
# PATHROOT READINESS SEMANTICS CORRECTION
# ZERO PRODUCT EXECUTE
# HANDOFF REPUBLISH — COMMIT EVIDENCE FOR LINE-BY-LINE REVIEW

## 0. Republish notice
- Timestamp republish: 2026-09-23T14:40:05+0200
- Purpose: add exact `git show` / full diff / final file bodies for unambiguous ChatGPT Critical Review
- Project commit unchanged: `128f3b7eb49cbba05d7735d5edc41a27822b0dee`
- Base `origin/main`: `2543a5bb9f62a23863ec4e74928ac6fc1a6b542a`
- Project push / PR / merge: **NONE**
- Scope: L3 handoff-only republish (already authorized)

---


## 1. Timestamp
2026-09-23T14:35:15+02:00 (Europe/Paris)
UTC: 2026-09-23T12:35:15Z

## 2. Git Truth
- Repo: `mcleland147/sfia-workspace`
- Workspace: `/Users/morris/Projects/sfia-workspace`
- Branch: `fix/sfia-studio-product-real-readiness-pathroot-semantics`
- Branched FROM exact `origin/main` (not PR #512 source head)
- `origin/main` (pre-correction / base): `2543a5bb9f62a23863ec4e74928ac6fc1a6b542a` — **MATCH** (PR #512 MERGED / POST-MERGE VERIFIED; CI `35855766415` SUCCESS)
- Local project commit: see §36
- Project push: **NONE**
- Project PR: **NONE**
- `SFIA_STUDIO_CURSOR_REAL`: **unset**

## 3. Morris GO
GO Morris correct Product REAL readiness pathRoot semantics —
same PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01 —
ZERO PRODUCT EXECUTE
— **CONSUMED**

Authorized: local pathRoot semantics correction; tests; targeted+full validation; Batch Cookinb RO requal; local project commit; L3 Review Handoff.
NOT authorized: Product Execute; ExecutionAttempt; successor EC; DB mutation; Cursor REAL; auth/provider probe; project push/PR/merge; doctrine/Roadmap/C1; new readiness engine; D-PC-09 change; runtime v3 promotion.

## 4. SAME MACRO / NO MICRO-CYCLE
- Macro: `PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01`
- Pass: PATHROOT READINESS SEMANTICS CORRECTION
- Same macro: **YES**
- Micro-cycle: **NO**
- Type: 8 — Delivery / implémentation corrective
- Typologie: EVOL / CRITICAL
- Product Journey: **PAUSED**
- Runtime v3: **NON ADOPTED**

## 5. Sources
Process / convergence:
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`
- `projects/sfia-studio/sfia-v3-framing/36-sfia-v2.6-inheritance-and-adaptation-matrix.md`

Corrective code:
- `projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts`

Runtime parity:
- `resolveTrustedProductLaunchContext.ts` — pathRoot carried as binding input; physical existence NOT required
- `managedProjectRepositoryResolver.ts`
- `studioGitWorktreeWorkspace.ts` — pathRoot is write-layer information
- `studioCursorRealLaunchGateway.ts`

D-PC-09:
- `createProject.ts` / `projectWorkspaceKey.ts` / `artifactTargetRouting.ts`
- new Projects receive `projects/<projectWorkspaceKey>` which may be unmaterialized until first artifact CREATE

## 6. Environment-preflight input evidence
Latest environment-preflight handoff:
- commit: `2f73bd45aa4c3cdfe8400413dea55cf06f63c75b`
- blob: `bd99d5a2fc4647a21a729021e1db0ef74ce80ebc`
- STOP reason at that time: `PROJECT_PATH_ROOT_ABSENT` treated as universal REAL readiness blocker for valid contained `projects/batch-cookinb` absent on qualified main
- Cursor binary/auth metadata had PASS externally; auth remains EXTERNAL_PREFLIGHT_REQUIRED in deterministic evaluator (not re-probed this cycle)

## 7. False blocker root cause
When pathRoot was valid but physically absent:
- `pathRootExists = false`
- `blockers += PROJECT_PATH_ROOT_ABSENT`
- `launchContextResolvable` required `pathRoot == null || pathRootExists === true`
- `readyForDeterministicPreReal` required the same

→ VALID + CONTAINED + ABSENT became a universal REAL readiness blocker, conflicting with runtime launch semantics and D-PC-09 workspace lifecycle.

## 8. Runtime launch semantic comparison
`resolveTrustedProductLaunchContext`:
- requires repository binding + managed repo + trusted HEAD
- carries `pathRoot` as contract input
- does **NOT** require physical pathRoot existence

`StudioGitWorktreeWorkspace`:
- prepares worktree from managed repository + base SHA
- does **NOT** require pathRoot existence for generic workspace validity
- treats pathRoot as write-layer information

## 9. D-PC-09 workspace lifecycle comparison
CreateProject assigns `projects/<projectWorkspaceKey>` at Project creation.
That path may legitimately not exist before first artifact materialization.
Write-layer rules (`resolveArtifactTargetUnderCycleWorkspace`, CREATE/UPDATE/ASK, TOCTOU, docsWrite pathAllowlist) remain authoritative for writes — **unchanged** this cycle.

## 10. Old pathRoot readiness condition
```
identity AND trustedBaseHeadSha AND managedConfigured AND repoExists
AND (pathRoot == null OR pathRootExists)
```
and
```
readyForDeterministicPreReal includes (pathRoot == null || pathRootExists === true)
```
with `PROJECT_PATH_ROOT_ABSENT` pushed into blockers on missing directory.

## 11. New containment / materialization distinction
Three facts separated:

| Fact | Field | Role |
|------|-------|------|
| A — presence in durable binding | `pathRoot: string \| null` | binding input |
| B — validity / containment | `pathRootContainmentValid: boolean \| null` | **controls** generic readiness safety |
| C — physical materialization | `pathRootExists: boolean \| null` | **observational only** |

Rules:
- `pathRoot === null` → `pathRootContainmentValid = null` → no pathRoot blocker
- valid + managed repo available → `pathRootContainmentValid = true`; `pathRootExists = fs.existsSync(...)`; absence informational
- traversal / absolute / escape → `pathRootContainmentValid = false` + existing `PROJECT_PATH_ROOT_*` blocker → NOT READY
- **No silent normalize/repair** of malformed pathRoot
- **No** `PROJECT_PATH_ROOT_ABSENT` blocker for valid unmaterialized pathRoot

## 12. Result type delta
Additive field on `managedRepository`:
```ts
pathRootContainmentValid: boolean | null
```
No DB migration. No persistence. No new engine.

## 13. C5 replacement
Was: `pathRoot absent → NOT READY` (false invariant).

Now: **C5 — valid contained pathRoot absent → READY when every other required dimension passes**
Assertions:
- `pathRootExists === false`
- no `PROJECT_PATH_ROOT_ABSENT` blocker
- `pathRootContainmentValid === true`
- `contractReadiness.launchContextResolvable === true`
- `readyForDeterministicPreReal === true`
- filesystem path remains absent (no silent create)
- `readyForProductRealExecute === false` (auth never inferred)

## 14. Traversal tests
Preserved / strengthened:
- `../../outside` → `PROJECT_PATH_ROOT_TRAVERSAL` / fail-closed
- `pathRootContainmentValid === false`
- `launchContextResolvable === false`
- `readyForDeterministicPreReal === false`

## 15. Absolute path test
- `/abs/path` → `PROJECT_PATH_ROOT_ABSOLUTE` / fail-closed
- `pathRootContainmentValid === false`

## 16. Managed repo negatives
Preserved:
- C3 managed base absent → `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` / NOT READY
- C4 managed repo absent → `MANAGED_REPO_ABSENT` / NOT READY
- identity traversal → `MANAGED_REPO_ABSENT` and/or `REPOSITORY_BINDING_IDENTITY_INVALID`

## 17. Trusted HEAD negatives
Preserved:
- C6 trusted HEAD unresolved/invalid → `TRUSTED_BASE_HEAD_*` / NOT READY
- full SHA requirement retained

## 18. DB negatives
Preserved:
- C2 wrong DB / project not found → `PRODUCT_DB_PROJECT_NOT_FOUND` / NOT READY
- Product DB missing → `PRODUCT_DB_MISSING`

## 19. Cursor binary negative
Preserved:
- C9 no binary → `CURSOR_BINARY_UNAVAILABLE` / NOT READY

## 20. Generic read parity test
Added focused regression:
- valid Product DB + expected Project + managed repo + full HEAD + executable bin
- durable pathRoot `projects/batch-cookinb`
- physical path ABSENT
Expected:
- `pathRootExists=false`
- `pathRootContainmentValid=true`
- `launchContextResolvable=true`
- `readyForDeterministicPreReal=true`
- `readyForProductRealExecute=false` (auth external)
- no filesystem creation; no Cursor call
- managed repo path + trusted HEAD + pathRoot align with launch-context inputs

## 21. D-PC-09 non-regression
- `projectWorkspaceArtifactRouting.d0.test.ts`: PASS
- `productWorkspaceArtifactRouting.applicationPath.d0.test.ts`: PASS under clean env (campaign `SFIA_STUDIO_PRODUCT_DB_PATH` pollution causes false local flake when set; confirmed identical failure on clean main with polluted env — **not caused by this correction**)
- Write-layer sources **not modified**

## 22. B1 non-regression
- `productMissionEvidenceChain.e2e.d0.test.ts`: **7/7 PASS**

## 23. B2 non-regression
- Mission Evidence / ContractResult / generic Cursor completion surfaces **not modified**
- `productGenericCursorCompletion.d0.test.ts`: PASS (included in B1/B2 targeted batch)

## 24. B4 non-regression
- Auth freeze preserved: `EXTERNAL_PREFLIGHT_REQUIRED` / `proven=false` / `readyForProductRealExecute=false`
- C10 still asserts never inferred auth
- No Cursor provider/auth call this cycle

## 25. Targeted tests
- `evaluateProductRealReadiness.d0.test.ts`: **12/12 PASS** (was 11; +1 parity)
- Related routing / B1 / B2 suites: PASS (clean env)

## 26. Full npm test
From `projects/sfia-studio/app` with clean env (`SFIA_STUDIO_PRODUCT_DB_PATH` unset for suite isolation):
```
Test Files  401 passed | 17 skipped (418)
Tests       4481 passed | 137 skipped (4618)
```
Reference main before correction: 401 files / 4480 passed / 137 skipped
Delta: **+1 passed** (parity test)

## 27. Typecheck
`npm run typecheck` → **PASS**

## 28. Lint
`npm run lint` → **PASS** (No ESLint warnings or errors)

## 29. Build
`npm run build` → **PASS**

## 30. diff-check
`git diff --check` → **PASS** (no whitespace errors)

## 31. ZERO PRODUCT EXECUTE
Confirmed:
- `SFIA_STUDIO_CURSOR_REAL` unset
- Product Execute count = **0**
- Product Attempt created = **0**
- Product mission spawn = **0**
- Cursor provider/auth call this corrective = **0**
- No successor EC
- No DB mutation
- No Batch Cookinb path creation

## 32. Cursor / provider calls = 0
No `--list-models`, no agent spawn, no auth probe. Prior external preflight evidence referenced only.

## 33. Batch Cookinb RO requalification
Campaign DB (READ ONLY):
`projects/sfia-studio/.sfia-exec/pwr-dpc09-real-reproof-01/product/oa-product.sqlite`

Facts confirmed:
- Project: `prj:21e87219-9d46-483a-8206-722e25f2fb24` (Batch Cookinb)
- `repositoryBinding.identity`: `mcleland147/sfia-workspace`
- `pathRoot`: `projects/batch-cookinb`
- Legacy EC: `xct:w3a:dec:w2-trj:62b92385-7602-4d4f-b892-df9e2013c4a8`
- `semantic_fingerprint`: `ca296bb5609fb21edc19b75b64013a9020fef3097a81ee116a149c7ede20ccac`
- attempts: **0** (unchanged post-requal)

Evaluator result (managed base deliberately unconfigured — campaign mirror):
```json
{
  "pathRoot": "projects/batch-cookinb",
  "pathRootExists": false,
  "pathRootContainmentValid": null,
  "managedConfigured": false,
  "blockers": ["MANAGED_REPO_ROOT_BASE_UNCONFIGURED"],
  "launchContextResolvable": false,
  "readyForDeterministicPreReal": false,
  "readyForProductRealExecute": false,
  "absentBlocker": false
}
```

## 34. Legacy fingerprint
`ca296bb5609fb21edc19b75b64013a9020fef3097a81ee116a149c7ede20ccac` — **MATCH** (`semantic_fingerprint`)

## 35. Legacy attempts
**0** — unchanged (READ ONLY; no Attempt created)

## 36. Remaining actual environment blocker
`MANAGED_REPO_ROOT_BASE_UNCONFIGURED`

NOT READY until managed clone + trusted HEAD are actually present.
Do **not** claim READY for campaign environment yet.
`PROJECT_PATH_ROOT_ABSENT` is **no longer** a false blocker for unmaterialized pathRoot.

## 37. Local project commit
- SHA: `128f3b7eb49cbba05d7735d5edc41a27822b0dee`
- Message: `fix(studio): align Product REAL readiness pathRoot semantics`
- Files only:
  - `projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts`
  - `projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts`
- Base: `2543a5bb9f62a23863ec4e74928ac6fc1a6b542a`

## 38. Project push = NONE
No `git push` of project branch.

## 39. PR = NONE
No project PR created.

## 40. REAL budget
**1 spawn / 0 retry — UNUSED**

## 41. Review Pack
This document — FULL pack (not synthesis-only).

## 42. Handoff
Mode: `publish-in-cycle`
Branch: `sfia/review-handoff`
Canonical: `sfia-review-handoff/latest-chatgpt-review.md`
Source: `.tmp-sfia-review/chatgpt-review.md`
Push: YES — L3 bounded
Recommended commit: `docs(review-handoff): publish Product readiness pathRoot correction review`

## 43. REAL budget (repeat)
1 / 0 UNUSED

## 44. Product Journey
**PAUSED**

## 45. Runtime v3
**NON ADOPTED**

## 46. Verdict
PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01
PATHROOT READINESS SEMANTICS CORRECTION COMPLETE —
VALID UNMATERIALIZED PATHROOT NO LONGER FALSE-BLOCKS GENERIC READ READINESS —
FAIL-CLOSED CONTAINMENT PRESERVED —
LOCAL CANDIDATE READY FOR CHATGPT CRITICAL REVIEW —
ZERO PRODUCT EXECUTE —
PROJECT GIT INTEGRATION NOT AUTHORIZED

---

# APPENDIX A — git show --stat 128f3b7e…

```text
commit 128f3b7eb49cbba05d7735d5edc41a27822b0dee
Author: Morris Cleland <morris@macbook-air.home>
Date:   Wed Sep 23 14:36:19 2026 +0200

    fix(studio): align Product REAL readiness pathRoot semantics

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../evaluateProductRealReadiness.d0.test.ts        | 68 +++++++++++++++++++---
 .../w2/evaluateProductRealReadiness.ts             | 27 ++++++++-
 2 files changed, 84 insertions(+), 11 deletions(-)
```

---

# APPENDIX B — git show --format=fuller --no-ext-diff (two files)

```text
commit 128f3b7eb49cbba05d7735d5edc41a27822b0dee
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Wed Sep 23 14:36:19 2026 +0200
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Wed Sep 23 14:36:19 2026 +0200

    fix(studio): align Product REAL readiness pathRoot semantics

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts
index 8190562c..e440246f 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts
@@ -128,6 +128,7 @@ describe("B3+B4 evaluateProductRealReadiness", () => {
     expect(result.productDb.expectedProjectFound).toBe(true);
     expect(result.managedRepository.repoExists).toBe(true);
     expect(result.managedRepository.pathRootExists).toBe(true);
+    expect(result.managedRepository.pathRootContainmentValid).toBe(true);
     expect(result.managedRepository.trustedBaseHeadSha).toBe(sha);
     expect(result.cursorBinary.configuredOverride).toBe(true);
     expect(result.cursorBinary.executable).toBe(true);
@@ -215,13 +216,19 @@ describe("B3+B4 evaluateProductRealReadiness", () => {
     expect(r.readyForDeterministicPreReal).toBe(false);
   });

-  it("C5 — pathRoot absent → NOT READY (no silent create)", () => {
+  it("C5 — valid contained pathRoot absent → READY (no silent create)", () => {
     const root = tempDir("sfia-nopath-");
     const dbPath = path.join(root, "p.sqlite");
     makeSqliteWithProject(dbPath, "prj:x");
     const managedBase = path.join(root, "managed");
     const identity = "acme/y";
     makeGitRepo(path.join(managedBase, "acme__y"));
+    const pathRootAbs = path.join(
+      managedBase,
+      "acme__y",
+      "projects/batch-cookinb",
+    );
+    expect(fs.existsSync(pathRootAbs)).toBe(false);
     const r = evaluateProductRealReadiness({
       env: {
         SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
@@ -235,13 +242,13 @@ describe("B3+B4 evaluateProductRealReadiness", () => {
       resolveBaseHeadSha: () => ({ ok: true, sha: "b".repeat(40) }),
     });
     expect(r.managedRepository.pathRootExists).toBe(false);
-    expect(r.blockers).toContain("PROJECT_PATH_ROOT_ABSENT");
-    expect(
-      fs.existsSync(
-        path.join(managedBase, "acme__y", "projects/batch-cookinb"),
-      ),
-    ).toBe(false);
-    expect(r.readyForDeterministicPreReal).toBe(false);
+    expect(r.managedRepository.pathRootContainmentValid).toBe(true);
+    expect(r.blockers).not.toContain("PROJECT_PATH_ROOT_ABSENT");
+    expect(r.contractReadiness.launchContextResolvable).toBe(true);
+    expect(r.readyForDeterministicPreReal).toBe(true);
+    expect(r.readyForProductRealExecute).toBe(false);
+    // Proves no silent materialization of the Product workspace.
+    expect(fs.existsSync(pathRootAbs)).toBe(false);
   });

   it("C6 — trusted HEAD invalid → NOT READY", () => {
@@ -381,6 +388,8 @@ describe("B3+B4 evaluateProductRealReadiness", () => {
         resolveCursorBin: () => "/x",
         resolveBaseHeadSha: () => ({ ok: true, sha: "f".repeat(40) }),
       });
+      expect(r.managedRepository.pathRootContainmentValid).toBe(false);
+      expect(r.contractReadiness.launchContextResolvable).toBe(false);
       expect(r.readyForDeterministicPreReal).toBe(false);
       expect(
         r.blockers.some(
@@ -392,4 +401,47 @@ describe("B3+B4 evaluateProductRealReadiness", () => {
       ).toBe(true);
     }
   });
+
+  it("parity — valid unmaterialized pathRoot aligns with launch readiness (no Cursor)", () => {
+    const root = tempDir("sfia-parity-");
+    const dbPath = path.join(root, "p.sqlite");
+    const projectId = "prj:parity-batch";
+    makeSqliteWithProject(dbPath, projectId);
+    const managedBase = path.join(root, "managed");
+    const identity = "mcleland147/sfia-workspace";
+    const repoPath = path.join(managedBase, "mcleland147__sfia-workspace");
+    const sha = makeGitRepo(repoPath); // no projects/batch-cookinb
+    const fakeBin = path.join(root, "fake-cursor");
+    fs.writeFileSync(fakeBin, "#!/bin/sh\necho ok\n", { mode: 0o755 });
+    const pathRootAbs = path.join(repoPath, "projects/batch-cookinb");
+    expect(fs.existsSync(pathRootAbs)).toBe(false);
+
+    const r = evaluateProductRealReadiness({
+      env: {
+        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
+        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
+        SFIA_CURSOR_BIN: fakeBin,
+      },
+      expectedProjectId: projectId,
+      repositoryBindingIdentity: identity,
+      pathRoot: "projects/batch-cookinb",
+      defaultBranch: "main",
+      resolveBaseHeadSha: () => ({ ok: true, sha }),
+    });
+
+    expect(r.managedRepository.pathRootExists).toBe(false);
+    expect(r.managedRepository.pathRootContainmentValid).toBe(true);
+    expect(r.blockers).not.toContain("PROJECT_PATH_ROOT_ABSENT");
+    expect(r.contractReadiness.launchContextResolvable).toBe(true);
+    expect(r.readyForDeterministicPreReal).toBe(true);
+    expect(r.readyForProductRealExecute).toBe(false);
+    expect(r.auth.proven).toBe(false);
+    expect(fs.existsSync(pathRootAbs)).toBe(false);
+
+    // Lightweight parity with resolveTrustedProductLaunchContext inputs:
+    // managed repo + full HEAD + contained pathRoot — no physical pathRoot required.
+    expect(r.managedRepository.resolvedManagedRepoPath).toBe(repoPath);
+    expect(r.managedRepository.trustedBaseHeadSha).toBe(sha);
+    expect(r.managedRepository.pathRoot).toBe("projects/batch-cookinb");
+  });
 });
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts b/projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts
index 08299898..39d51437 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts
@@ -70,7 +70,16 @@ export type ProductRealReadinessResult = {
     readonly resolvedManagedRepoPath: string | null;
     readonly repoExists: boolean;
     readonly pathRoot: string | null;
+    /**
+     * Physical materialization of pathRoot under managed repo (observational).
+     * Absence alone does NOT fail-close generic launch readiness.
+     */
     readonly pathRootExists: boolean | null;
+    /**
+     * Containment/validity of pathRoot (relative, no traversal/escape).
+     * null when pathRoot is absent from durable binding.
+     */
+    readonly pathRootContainmentValid: boolean | null;
     readonly defaultBranch: string | null;
     readonly trustedBaseHeadSha: string | null;
   };
@@ -244,20 +253,28 @@ export function evaluateProductRealReadiness(

   const pathRoot = input.pathRoot?.trim() || null;
   let pathRootExists: boolean | null = null;
+  let pathRootContainmentValid: boolean | null = null;
   if (pathRoot && resolvedManagedRepoPath && repoExists) {
     const contained = resolveContainedPathRoot({
       repoRoot: resolvedManagedRepoPath,
       pathRoot,
     });
     if (!contained.ok) {
+      pathRootContainmentValid = false;
       pathRootExists = false;
       blockers.push(contained.code);
     } else {
+      // Valid containment — physical absence is informational only
+      // (D-PC-09 workspace may materialize later; generic read does not require it).
+      pathRootContainmentValid = true;
       pathRootExists = fs.existsSync(contained.absolutePath);
-      if (!pathRootExists) blockers.push("PROJECT_PATH_ROOT_ABSENT");
     }
   } else if (pathRoot && (!resolvedManagedRepoPath || !repoExists)) {
+    // Cannot evaluate containment without a resolved managed repo.
     pathRootExists = false;
+    pathRootContainmentValid = null;
+  } else if (!pathRoot) {
+    pathRootContainmentValid = null;
   }

   let trustedBaseHeadSha: string | null = null;
@@ -290,13 +307,16 @@ export function evaluateProductRealReadiness(
     }
   }

+  // Launch context mirrors resolveTrustedProductLaunchContext:
+  // pathRoot is carried as binding input; physical existence is NOT required.
+  // Invalid containment still fail-closes.
   const launchContextResolvable = Boolean(
     identity &&
       trustedBaseHeadSha &&
       baseHeadShaFullSha &&
       managedConfigured &&
       repoExists &&
-      (pathRoot == null || pathRootExists === true),
+      (pathRoot == null || pathRootContainmentValid === true),
   );
   if (!launchContextResolvable && !blockers.includes("MANAGED_REPO_ROOT_BASE_UNCONFIGURED")) {
     if (!blockers.some((b) => b.startsWith("TRUSTED_BASE_HEAD") || b.includes("MANAGED") || b.includes("PATH_ROOT") || b.includes("BINDING"))) {
@@ -321,7 +341,7 @@ export function evaluateProductRealReadiness(
     (expectedProjectFound === null || expectedProjectFound === true) &&
     managedConfigured &&
     repoExists &&
-    (pathRoot == null || pathRootExists === true) &&
+    (pathRoot == null || pathRootContainmentValid === true) &&
     baseHeadShaFullSha &&
     executable;

@@ -347,6 +367,7 @@ export function evaluateProductRealReadiness(
       repoExists,
       pathRoot,
       pathRootExists,
+      pathRootContainmentValid,
       defaultBranch: input.defaultBranch?.trim() || null,
       trustedBaseHeadSha,
     },
```

---

# APPENDIX C — complete exact diff of commit 128f3b7e…

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts
index 8190562c..e440246f 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts
@@ -128,6 +128,7 @@ describe("B3+B4 evaluateProductRealReadiness", () => {
     expect(result.productDb.expectedProjectFound).toBe(true);
     expect(result.managedRepository.repoExists).toBe(true);
     expect(result.managedRepository.pathRootExists).toBe(true);
+    expect(result.managedRepository.pathRootContainmentValid).toBe(true);
     expect(result.managedRepository.trustedBaseHeadSha).toBe(sha);
     expect(result.cursorBinary.configuredOverride).toBe(true);
     expect(result.cursorBinary.executable).toBe(true);
@@ -215,13 +216,19 @@ describe("B3+B4 evaluateProductRealReadiness", () => {
     expect(r.readyForDeterministicPreReal).toBe(false);
   });

-  it("C5 — pathRoot absent → NOT READY (no silent create)", () => {
+  it("C5 — valid contained pathRoot absent → READY (no silent create)", () => {
     const root = tempDir("sfia-nopath-");
     const dbPath = path.join(root, "p.sqlite");
     makeSqliteWithProject(dbPath, "prj:x");
     const managedBase = path.join(root, "managed");
     const identity = "acme/y";
     makeGitRepo(path.join(managedBase, "acme__y"));
+    const pathRootAbs = path.join(
+      managedBase,
+      "acme__y",
+      "projects/batch-cookinb",
+    );
+    expect(fs.existsSync(pathRootAbs)).toBe(false);
     const r = evaluateProductRealReadiness({
       env: {
         SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
@@ -235,13 +242,13 @@ describe("B3+B4 evaluateProductRealReadiness", () => {
       resolveBaseHeadSha: () => ({ ok: true, sha: "b".repeat(40) }),
     });
     expect(r.managedRepository.pathRootExists).toBe(false);
-    expect(r.blockers).toContain("PROJECT_PATH_ROOT_ABSENT");
-    expect(
-      fs.existsSync(
-        path.join(managedBase, "acme__y", "projects/batch-cookinb"),
-      ),
-    ).toBe(false);
-    expect(r.readyForDeterministicPreReal).toBe(false);
+    expect(r.managedRepository.pathRootContainmentValid).toBe(true);
+    expect(r.blockers).not.toContain("PROJECT_PATH_ROOT_ABSENT");
+    expect(r.contractReadiness.launchContextResolvable).toBe(true);
+    expect(r.readyForDeterministicPreReal).toBe(true);
+    expect(r.readyForProductRealExecute).toBe(false);
+    // Proves no silent materialization of the Product workspace.
+    expect(fs.existsSync(pathRootAbs)).toBe(false);
   });

   it("C6 — trusted HEAD invalid → NOT READY", () => {
@@ -381,6 +388,8 @@ describe("B3+B4 evaluateProductRealReadiness", () => {
         resolveCursorBin: () => "/x",
         resolveBaseHeadSha: () => ({ ok: true, sha: "f".repeat(40) }),
       });
+      expect(r.managedRepository.pathRootContainmentValid).toBe(false);
+      expect(r.contractReadiness.launchContextResolvable).toBe(false);
       expect(r.readyForDeterministicPreReal).toBe(false);
       expect(
         r.blockers.some(
@@ -392,4 +401,47 @@ describe("B3+B4 evaluateProductRealReadiness", () => {
       ).toBe(true);
     }
   });
+
+  it("parity — valid unmaterialized pathRoot aligns with launch readiness (no Cursor)", () => {
+    const root = tempDir("sfia-parity-");
+    const dbPath = path.join(root, "p.sqlite");
+    const projectId = "prj:parity-batch";
+    makeSqliteWithProject(dbPath, projectId);
+    const managedBase = path.join(root, "managed");
+    const identity = "mcleland147/sfia-workspace";
+    const repoPath = path.join(managedBase, "mcleland147__sfia-workspace");
+    const sha = makeGitRepo(repoPath); // no projects/batch-cookinb
+    const fakeBin = path.join(root, "fake-cursor");
+    fs.writeFileSync(fakeBin, "#!/bin/sh\necho ok\n", { mode: 0o755 });
+    const pathRootAbs = path.join(repoPath, "projects/batch-cookinb");
+    expect(fs.existsSync(pathRootAbs)).toBe(false);
+
+    const r = evaluateProductRealReadiness({
+      env: {
+        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
+        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
+        SFIA_CURSOR_BIN: fakeBin,
+      },
+      expectedProjectId: projectId,
+      repositoryBindingIdentity: identity,
+      pathRoot: "projects/batch-cookinb",
+      defaultBranch: "main",
+      resolveBaseHeadSha: () => ({ ok: true, sha }),
+    });
+
+    expect(r.managedRepository.pathRootExists).toBe(false);
+    expect(r.managedRepository.pathRootContainmentValid).toBe(true);
+    expect(r.blockers).not.toContain("PROJECT_PATH_ROOT_ABSENT");
+    expect(r.contractReadiness.launchContextResolvable).toBe(true);
+    expect(r.readyForDeterministicPreReal).toBe(true);
+    expect(r.readyForProductRealExecute).toBe(false);
+    expect(r.auth.proven).toBe(false);
+    expect(fs.existsSync(pathRootAbs)).toBe(false);
+
+    // Lightweight parity with resolveTrustedProductLaunchContext inputs:
+    // managed repo + full HEAD + contained pathRoot — no physical pathRoot required.
+    expect(r.managedRepository.resolvedManagedRepoPath).toBe(repoPath);
+    expect(r.managedRepository.trustedBaseHeadSha).toBe(sha);
+    expect(r.managedRepository.pathRoot).toBe("projects/batch-cookinb");
+  });
 });
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts b/projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts
index 08299898..39d51437 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts
@@ -70,7 +70,16 @@ export type ProductRealReadinessResult = {
     readonly resolvedManagedRepoPath: string | null;
     readonly repoExists: boolean;
     readonly pathRoot: string | null;
+    /**
+     * Physical materialization of pathRoot under managed repo (observational).
+     * Absence alone does NOT fail-close generic launch readiness.
+     */
     readonly pathRootExists: boolean | null;
+    /**
+     * Containment/validity of pathRoot (relative, no traversal/escape).
+     * null when pathRoot is absent from durable binding.
+     */
+    readonly pathRootContainmentValid: boolean | null;
     readonly defaultBranch: string | null;
     readonly trustedBaseHeadSha: string | null;
   };
@@ -244,20 +253,28 @@ export function evaluateProductRealReadiness(

   const pathRoot = input.pathRoot?.trim() || null;
   let pathRootExists: boolean | null = null;
+  let pathRootContainmentValid: boolean | null = null;
   if (pathRoot && resolvedManagedRepoPath && repoExists) {
     const contained = resolveContainedPathRoot({
       repoRoot: resolvedManagedRepoPath,
       pathRoot,
     });
     if (!contained.ok) {
+      pathRootContainmentValid = false;
       pathRootExists = false;
       blockers.push(contained.code);
     } else {
+      // Valid containment — physical absence is informational only
+      // (D-PC-09 workspace may materialize later; generic read does not require it).
+      pathRootContainmentValid = true;
       pathRootExists = fs.existsSync(contained.absolutePath);
-      if (!pathRootExists) blockers.push("PROJECT_PATH_ROOT_ABSENT");
     }
   } else if (pathRoot && (!resolvedManagedRepoPath || !repoExists)) {
+    // Cannot evaluate containment without a resolved managed repo.
     pathRootExists = false;
+    pathRootContainmentValid = null;
+  } else if (!pathRoot) {
+    pathRootContainmentValid = null;
   }

   let trustedBaseHeadSha: string | null = null;
@@ -290,13 +307,16 @@ export function evaluateProductRealReadiness(
     }
   }

+  // Launch context mirrors resolveTrustedProductLaunchContext:
+  // pathRoot is carried as binding input; physical existence is NOT required.
+  // Invalid containment still fail-closes.
   const launchContextResolvable = Boolean(
     identity &&
       trustedBaseHeadSha &&
       baseHeadShaFullSha &&
       managedConfigured &&
       repoExists &&
-      (pathRoot == null || pathRootExists === true),
+      (pathRoot == null || pathRootContainmentValid === true),
   );
   if (!launchContextResolvable && !blockers.includes("MANAGED_REPO_ROOT_BASE_UNCONFIGURED")) {
     if (!blockers.some((b) => b.startsWith("TRUSTED_BASE_HEAD") || b.includes("MANAGED") || b.includes("PATH_ROOT") || b.includes("BINDING"))) {
@@ -321,7 +341,7 @@ export function evaluateProductRealReadiness(
     (expectedProjectFound === null || expectedProjectFound === true) &&
     managedConfigured &&
     repoExists &&
-    (pathRoot == null || pathRootExists === true) &&
+    (pathRoot == null || pathRootContainmentValid === true) &&
     baseHeadShaFullSha &&
     executable;

@@ -347,6 +367,7 @@ export function evaluateProductRealReadiness(
       repoExists,
       pathRoot,
       pathRootExists,
+      pathRootContainmentValid,
       defaultBranch: input.defaultBranch?.trim() || null,
       trustedBaseHeadSha,
     },
```

---

# APPENDIX D — final file body: evaluateProductRealReadiness.ts

Path: `projects/sfia-studio/app/features/project-assistant/w2/evaluateProductRealReadiness.ts`
Blob at commit:

```text
39d514378c5690517b7bea83e9ec5d93461d4f0b
```

```ts
/**
 * Product Journey REAL readiness preflight (B3+B4) — DETERMINISTIC / ZERO REAL.
 * Read-only checks. Never enables SFIA_STUDIO_CURSOR_REAL. Never spawns Cursor.
 * Never authenticates against Cursor provider.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { resolveProductSqlitePath } from "@/lib/oa/project/infrastructure/sqlite/paths";
import {
  resolveManagedRepoRootBaseFromEnv,
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
} from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  ManagedProjectRepositoryResolver,
  resolveStudioCursorBinPath,
} from "@/lib/oa/execution-attempt";

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

/**
 * Fail-closed Project pathRoot containment under managed repo root.
 * Relative only; no `..`; resolved path must be repo or child of repo.
 */
export function resolveContainedPathRoot(input: {
  readonly repoRoot: string;
  readonly pathRoot: string;
}):
  | { ok: true; absolutePath: string }
  | { ok: false; code: string } {
  const raw = input.pathRoot.trim();
  if (!raw) return { ok: false, code: "PROJECT_PATH_ROOT_EMPTY" };
  if (path.isAbsolute(raw)) {
    return { ok: false, code: "PROJECT_PATH_ROOT_ABSOLUTE" };
  }
  if (raw.includes("\0")) {
    return { ok: false, code: "PROJECT_PATH_ROOT_INVALID" };
  }
  const segments = raw.split(/[\\/]+/).filter((s) => s.length > 0);
  if (segments.some((s) => s === "..")) {
    return { ok: false, code: "PROJECT_PATH_ROOT_TRAVERSAL" };
  }
  const repo = path.resolve(input.repoRoot);
  const candidate = path.resolve(repo, raw);
  if (candidate !== repo && !candidate.startsWith(repo + path.sep)) {
    return { ok: false, code: "PROJECT_PATH_ROOT_ESCAPE" };
  }
  return { ok: true, absolutePath: candidate };
}

export type ProductRealAuthReadiness =
  | "UNKNOWN"
  | "EXTERNAL_PREFLIGHT_REQUIRED";

export type ProductRealReadinessResult = {
  readonly readyForDeterministicPreReal: boolean;
  readonly readyForProductRealExecute: boolean;
  readonly productDb: {
    readonly explicitConfigPresent: boolean;
    readonly resolvedPath: string;
    readonly exists: boolean;
    readonly accessible: boolean;
    readonly expectedProjectFound: boolean | null;
    readonly isDefaultPath: boolean;
  };
  readonly managedRepository: {
    readonly managedRepoRootBaseConfigured: boolean;
    readonly managedRepoRootBase: string | null;
    readonly projectBindingIdentity: string | null;
    readonly resolvedManagedRepoPath: string | null;
    readonly repoExists: boolean;
    readonly pathRoot: string | null;
    /**
     * Physical materialization of pathRoot under managed repo (observational).
     * Absence alone does NOT fail-close generic launch readiness.
     */
    readonly pathRootExists: boolean | null;
    /**
     * Containment/validity of pathRoot (relative, no traversal/escape).
     * null when pathRoot is absent from durable binding.
     */
    readonly pathRootContainmentValid: boolean | null;
    readonly defaultBranch: string | null;
    readonly trustedBaseHeadSha: string | null;
  };
  readonly contractReadiness: {
    readonly launchContextResolvable: boolean;
    readonly noProcessCwdFallback: true;
    readonly baseHeadShaFullSha: boolean;
  };
  readonly cursorBinary: {
    readonly configuredOverride: boolean;
    readonly resolvedExecutablePathPresent: boolean;
    /** Server-safe presence only — path may be omitted from UI surfaces. */
    readonly executable: boolean;
    readonly resolvedPath: string | null;
  };
  readonly auth: {
    readonly state: ProductRealAuthReadiness;
    readonly proven: false;
  };
  readonly blockers: readonly string[];
};

function projectExistsInSqlite(dbPath: string, projectId: string): boolean {
  // Prefer sqlite3 CLI (no native bundling) — better-sqlite3 is optional.
  try {
    const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
    const out = execFileSync(
      "sqlite3",
      [
        dbPath,
        `SELECT COUNT(*) FROM oa_projects WHERE project_id='${projectId.replace(/'/g, "''")}';`,
      ],
      { encoding: "utf8" },
    ).trim();
    return Number(out) > 0;
  } catch {
    try {
      // Optional native path — may be absent in some studio installs.
      // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
      const Database = require("better-sqlite3") as new (
        path: string,
        opts?: { readonly?: boolean },
      ) => {
        prepare: (sql: string) => { get: (...args: unknown[]) => unknown };
        close: () => void;
      };
      const db = new Database(dbPath, { readonly: true });
      try {
        const row = db
          .prepare("SELECT 1 AS ok FROM oa_projects WHERE project_id = ?")
          .get(projectId) as { ok?: number } | undefined;
        return Boolean(row?.ok);
      } finally {
        db.close();
      }
    } catch {
      return false;
    }
  }
}

export type EvaluateProductRealReadinessInput = {
  readonly env?: NodeJS.ProcessEnv | Record<string, string | undefined>;
  /** When set, verifies project exists in the resolved Product DB. */
  readonly expectedProjectId?: string | null;
  readonly repositoryBindingIdentity?: string | null;
  readonly pathRoot?: string | null;
  readonly defaultBranch?: string | null;
  /** Optional injectable bin resolver (tests). */
  readonly resolveCursorBin?: (
    env: NodeJS.ProcessEnv | Record<string, string | undefined>,
  ) => string | null;
  /** Optional injectable HEAD resolver (tests). */
  readonly resolveBaseHeadSha?: (repoPath: string) =>
    | { ok: true; sha: string }
    | { ok: false; code: string };
};

/**
 * Server-owned Product REAL readiness. Binary readiness ≠ auth ≠ authorization.
 */
export function evaluateProductRealReadiness(
  input: EvaluateProductRealReadinessInput = {},
): ProductRealReadinessResult {
  const env = (input.env ?? process.env) as NodeJS.ProcessEnv;
  const blockers: string[] = [];

  const explicitDb = Boolean(env.SFIA_STUDIO_PRODUCT_DB_PATH?.trim());
  let resolvedPath = "";
  let exists = false;
  let accessible = false;
  try {
    resolvedPath = resolveProductSqlitePath(
      env.SFIA_STUDIO_PRODUCT_DB_PATH?.trim() || undefined,
    );
    exists = fs.existsSync(resolvedPath);
    accessible = exists
      ? (() => {
          try {
            fs.accessSync(resolvedPath, fs.constants.R_OK);
            return true;
          } catch {
            return false;
          }
        })()
      : false;
  } catch (err) {
    blockers.push(
      `PRODUCT_DB_PATH_INVALID:${err instanceof Error ? err.message : String(err)}`,
    );
  }

  const studioDefault = path.resolve(
    path.resolve(process.cwd(), ".."),
    ".sfia-exec",
    "product",
    "oa-product.sqlite",
  );
  const isDefaultPath =
    resolvedPath !== "" &&
    path.resolve(resolvedPath) === path.resolve(studioDefault);

  let expectedProjectFound: boolean | null = null;
  if (input.expectedProjectId && accessible && resolvedPath) {
    expectedProjectFound = projectExistsInSqlite(
      resolvedPath,
      input.expectedProjectId,
    );
    if (!expectedProjectFound) {
      blockers.push(
        explicitDb
          ? "PRODUCT_DB_PROJECT_NOT_FOUND"
          : "PRODUCT_DB_DEFAULT_PROJECT_NOT_FOUND",
      );
    }
  }

  if (!exists) blockers.push("PRODUCT_DB_MISSING");
  else if (!accessible) blockers.push("PRODUCT_DB_INACCESSIBLE");

  const managedBase = resolveManagedRepoRootBaseFromEnv(env) ?? null;
  const managedConfigured = Boolean(managedBase);
  if (!managedConfigured) blockers.push("MANAGED_REPO_ROOT_BASE_UNCONFIGURED");

  const identity = input.repositoryBindingIdentity?.trim() || null;
  let resolvedManagedRepoPath: string | null = null;
  let repoExists = false;
  if (managedBase && identity) {
    const resolver = new ManagedProjectRepositoryResolver();
    const resolved = resolver.resolveLocalRepoRoot(
      { identity },
      managedBase,
    );
    if (!resolved) {
      blockers.push("MANAGED_REPO_ABSENT");
      // Distinguish invalid/traversal identity from mere absence when possible.
      if (
        identity.includes("..") ||
        identity.startsWith("/") ||
        identity.trim() === ".."
      ) {
        blockers.push("REPOSITORY_BINDING_IDENTITY_INVALID");
      }
    } else {
      resolvedManagedRepoPath = resolved;
      repoExists = true;
    }
  } else if (managedConfigured && !identity) {
    blockers.push("REPOSITORY_BINDING_IDENTITY_REQUIRED");
  }

  const pathRoot = input.pathRoot?.trim() || null;
  let pathRootExists: boolean | null = null;
  let pathRootContainmentValid: boolean | null = null;
  if (pathRoot && resolvedManagedRepoPath && repoExists) {
    const contained = resolveContainedPathRoot({
      repoRoot: resolvedManagedRepoPath,
      pathRoot,
    });
    if (!contained.ok) {
      pathRootContainmentValid = false;
      pathRootExists = false;
      blockers.push(contained.code);
    } else {
      // Valid containment — physical absence is informational only
      // (D-PC-09 workspace may materialize later; generic read does not require it).
      pathRootContainmentValid = true;
      pathRootExists = fs.existsSync(contained.absolutePath);
    }
  } else if (pathRoot && (!resolvedManagedRepoPath || !repoExists)) {
    // Cannot evaluate containment without a resolved managed repo.
    pathRootExists = false;
    pathRootContainmentValid = null;
  } else if (!pathRoot) {
    pathRootContainmentValid = null;
  }

  let trustedBaseHeadSha: string | null = null;
  let baseHeadShaFullSha = false;
  if (resolvedManagedRepoPath && repoExists) {
    const resolve =
      input.resolveBaseHeadSha ??
      ((repoPath: string) => {
        try {
          const sha = execFileSync("git", ["rev-parse", "HEAD"], {
            cwd: repoPath,
            encoding: "utf8",
          }).trim();
          if (!FULL_SHA_RE.test(sha)) {
            return { ok: false as const, code: "BASE_HEAD_SHA_INVALID" };
          }
          return { ok: true as const, sha };
        } catch {
          return { ok: false as const, code: "BASE_HEAD_SHA_UNRESOLVED" };
        }
      });
    const head = resolve(resolvedManagedRepoPath);
    if (head.ok && FULL_SHA_RE.test(head.sha)) {
      trustedBaseHeadSha = head.sha;
      baseHeadShaFullSha = true;
    } else {
      blockers.push(
        head.ok ? "TRUSTED_BASE_HEAD_SHA_INVALID" : `TRUSTED_BASE_HEAD_SHA:${head.code}`,
      );
    }
  }

  // Launch context mirrors resolveTrustedProductLaunchContext:
  // pathRoot is carried as binding input; physical existence is NOT required.
  // Invalid containment still fail-closes.
  const launchContextResolvable = Boolean(
    identity &&
      trustedBaseHeadSha &&
      baseHeadShaFullSha &&
      managedConfigured &&
      repoExists &&
      (pathRoot == null || pathRootContainmentValid === true),
  );
  if (!launchContextResolvable && !blockers.includes("MANAGED_REPO_ROOT_BASE_UNCONFIGURED")) {
    if (!blockers.some((b) => b.startsWith("TRUSTED_BASE_HEAD") || b.includes("MANAGED") || b.includes("PATH_ROOT") || b.includes("BINDING"))) {
      blockers.push("LAUNCH_CONTEXT_NOT_RESOLVABLE");
    }
  }

  const configuredOverride = Boolean(env.SFIA_CURSOR_BIN?.trim());
  const resolveBin =
    input.resolveCursorBin ??
    ((e: NodeJS.ProcessEnv | Record<string, string | undefined>) =>
      resolveStudioCursorBinPath(e as NodeJS.ProcessEnv));
  const binPath = resolveBin(env);
  const executable = Boolean(binPath);
  if (!executable) blockers.push("CURSOR_BINARY_UNAVAILABLE");

  const authState: ProductRealAuthReadiness = "EXTERNAL_PREFLIGHT_REQUIRED";

  const readyForDeterministicPreReal =
    exists &&
    accessible &&
    (expectedProjectFound === null || expectedProjectFound === true) &&
    managedConfigured &&
    repoExists &&
    (pathRoot == null || pathRootContainmentValid === true) &&
    baseHeadShaFullSha &&
    executable;

  // Product REAL execute also requires auth external preflight — never claimed here.
  const readyForProductRealExecute = false;

  return {
    readyForDeterministicPreReal,
    readyForProductRealExecute,
    productDb: {
      explicitConfigPresent: explicitDb,
      resolvedPath,
      exists,
      accessible,
      expectedProjectFound,
      isDefaultPath,
    },
    managedRepository: {
      managedRepoRootBaseConfigured: managedConfigured,
      managedRepoRootBase: managedBase,
      projectBindingIdentity: identity,
      resolvedManagedRepoPath,
      repoExists,
      pathRoot,
      pathRootExists,
      pathRootContainmentValid,
      defaultBranch: input.defaultBranch?.trim() || null,
      trustedBaseHeadSha,
    },
    contractReadiness: {
      launchContextResolvable,
      noProcessCwdFallback: true,
      baseHeadShaFullSha,
    },
    cursorBinary: {
      configuredOverride,
      resolvedExecutablePathPresent: executable,
      executable,
      resolvedPath: binPath,
    },
    auth: {
      state: authState,
      proven: false,
    },
    blockers,
  };
}

export { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV };
```

---

# APPENDIX E — final file body: evaluateProductRealReadiness.d0.test.ts

Path: `projects/sfia-studio/app/__tests__/project-assistant/evaluateProductRealReadiness.d0.test.ts`
Blob at commit:

```text
e440246f883e88b09b5641f6d02ae36b6058e6e0
```

```ts
/**
 * B3+B4 — Product REAL readiness preflight (ZERO REAL / no Cursor spawn / no auth call).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { afterEach, describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import {
  evaluateProductRealReadiness,
  SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
} from "@/features/project-assistant/w2/evaluateProductRealReadiness";

const require = createRequire(import.meta.url);

function openSqlite(dbPath: string): {
  exec: (sql: string) => void;
  prepare: (sql: string) => { run: (...args: unknown[]) => void };
  close: () => void;
} {
  try {
    const Database = require("better-sqlite3") as new (path: string) => {
      exec: (sql: string) => void;
      prepare: (sql: string) => { run: (...args: unknown[]) => void };
      close: () => void;
    };
    return new Database(dbPath);
  } catch {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
    execFileSync("sqlite3", [
      dbPath,
      "CREATE TABLE IF NOT EXISTS oa_projects (project_id TEXT PRIMARY KEY);",
    ]);
    return {
      exec: (sql: string) => {
        execFileSync("sqlite3", [dbPath, sql]);
      },
      prepare: (sql: string) => ({
        run: (...args: unknown[]) => {
          const projectId = String(args[0] ?? "").replace(/'/g, "''");
          const bound = sql.includes("?")
            ? sql.replace("?", `'${projectId}'`)
            : sql;
          execFileSync("sqlite3", [dbPath, bound]);
        },
      }),
      close: () => undefined,
    };
  }
}

const temps: string[] = [];

afterEach(() => {
  while (temps.length) {
    const d = temps.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

function makeSqliteWithProject(dbPath: string, projectId: string): void {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  const db = openSqlite(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS oa_projects (
      project_id TEXT PRIMARY KEY
    );
  `);
  db.prepare("INSERT INTO oa_projects (project_id) VALUES (?)").run(projectId);
  db.close();
}

function makeGitRepo(repoPath: string, withPathRoot?: string): string {
  fs.mkdirSync(repoPath, { recursive: true });
  execFileSync("git", ["init"], { cwd: repoPath });
  execFileSync("git", ["config", "user.email", "t@test"], { cwd: repoPath });
  execFileSync("git", ["config", "user.name", "t"], { cwd: repoPath });
  fs.writeFileSync(path.join(repoPath, "README.md"), "x\n");
  if (withPathRoot) {
    fs.mkdirSync(path.join(repoPath, withPathRoot), { recursive: true });
    fs.writeFileSync(path.join(repoPath, withPathRoot, "keep.txt"), "y\n");
  }
  execFileSync("git", ["add", "."], { cwd: repoPath });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoPath });
  return execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoPath,
    encoding: "utf8",
  }).trim();
}

describe("B3+B4 evaluateProductRealReadiness", () => {
  it("C1/C7 — explicit Product DB + SFIA_CURSOR_BIN → binary ready", () => {
    const root = tempDir("sfia-ready-");
    const dbPath = path.join(root, "product-b.sqlite");
    const projectId = "prj:ready-1";
    makeSqliteWithProject(dbPath, projectId);
    const managedBase = path.join(root, "managed");
    const identity = "acme/ready-repo";
    const repoPath = path.join(managedBase, "acme__ready-repo");
    const sha = makeGitRepo(repoPath, "projects/batch-cookinb");
    const fakeBin = path.join(root, "fake-cursor");
    fs.writeFileSync(fakeBin, "#!/bin/sh\necho ok\n", { mode: 0o755 });

    const result = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: fakeBin,
      },
      expectedProjectId: projectId,
      repositoryBindingIdentity: identity,
      pathRoot: "projects/batch-cookinb",
      defaultBranch: "main",
      resolveBaseHeadSha: () => ({ ok: true, sha }),
    });

    expect(result.productDb.explicitConfigPresent).toBe(true);
    expect(result.productDb.resolvedPath).toBe(path.resolve(dbPath));
    expect(result.productDb.exists).toBe(true);
    expect(result.productDb.expectedProjectFound).toBe(true);
    expect(result.managedRepository.repoExists).toBe(true);
    expect(result.managedRepository.pathRootExists).toBe(true);
    expect(result.managedRepository.pathRootContainmentValid).toBe(true);
    expect(result.managedRepository.trustedBaseHeadSha).toBe(sha);
    expect(result.cursorBinary.configuredOverride).toBe(true);
    expect(result.cursorBinary.executable).toBe(true);
    expect(result.auth.proven).toBe(false);
    expect(result.auth.state).toBe("EXTERNAL_PREFLIGHT_REQUIRED");
    expect(result.readyForDeterministicPreReal).toBe(true);
    expect(result.readyForProductRealExecute).toBe(false);
  });

  it("C2 — wrong DB without target project → NOT READY", () => {
    const root = tempDir("sfia-wrongdb-");
    const dbA = path.join(root, "db-a.sqlite");
    const dbB = path.join(root, "db-b.sqlite");
    makeSqliteWithProject(dbA, "prj:other");
    makeSqliteWithProject(dbB, "prj:target");
    const managedBase = path.join(root, "managed");
    const identity = "acme/x";
    makeGitRepo(path.join(managedBase, "acme__x"));

    const withB = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbB,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: path.join(root, "bin"),
      },
      expectedProjectId: "prj:target",
      repositoryBindingIdentity: identity,
      resolveCursorBin: () => path.join(root, "bin"),
      resolveBaseHeadSha: () => ({ ok: true, sha: "a".repeat(40) }),
    });
    expect(withB.productDb.expectedProjectFound).toBe(true);

    const withA = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbA,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: path.join(root, "bin"),
      },
      expectedProjectId: "prj:target",
      repositoryBindingIdentity: identity,
      resolveCursorBin: () => path.join(root, "bin"),
      resolveBaseHeadSha: () => ({ ok: true, sha: "a".repeat(40) }),
    });
    expect(withA.productDb.expectedProjectFound).toBe(false);
    expect(withA.blockers).toContain("PRODUCT_DB_PROJECT_NOT_FOUND");
    expect(withA.readyForDeterministicPreReal).toBe(false);
  });

  it("C3 — managed base absent → NOT READY", () => {
    const root = tempDir("sfia-nomanaged-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        SFIA_CURSOR_BIN: "/x",
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/x",
      resolveCursorBin: () => "/x",
    });
    expect(r.managedRepository.managedRepoRootBaseConfigured).toBe(false);
    expect(r.blockers).toContain("MANAGED_REPO_ROOT_BASE_UNCONFIGURED");
    expect(r.readyForDeterministicPreReal).toBe(false);
  });

  it("C4 — managed repo absent → NOT READY", () => {
    const root = tempDir("sfia-norepo-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    fs.mkdirSync(managedBase, { recursive: true });
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: "/x",
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/missing",
      resolveCursorBin: () => "/x",
    });
    expect(r.managedRepository.repoExists).toBe(false);
    expect(r.blockers).toContain("MANAGED_REPO_ABSENT");
    expect(r.readyForDeterministicPreReal).toBe(false);
  });

  it("C5 — valid contained pathRoot absent → READY (no silent create)", () => {
    const root = tempDir("sfia-nopath-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    const identity = "acme/y";
    makeGitRepo(path.join(managedBase, "acme__y"));
    const pathRootAbs = path.join(
      managedBase,
      "acme__y",
      "projects/batch-cookinb",
    );
    expect(fs.existsSync(pathRootAbs)).toBe(false);
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: "/x",
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: identity,
      pathRoot: "projects/batch-cookinb",
      resolveCursorBin: () => "/x",
      resolveBaseHeadSha: () => ({ ok: true, sha: "b".repeat(40) }),
    });
    expect(r.managedRepository.pathRootExists).toBe(false);
    expect(r.managedRepository.pathRootContainmentValid).toBe(true);
    expect(r.blockers).not.toContain("PROJECT_PATH_ROOT_ABSENT");
    expect(r.contractReadiness.launchContextResolvable).toBe(true);
    expect(r.readyForDeterministicPreReal).toBe(true);
    expect(r.readyForProductRealExecute).toBe(false);
    // Proves no silent materialization of the Product workspace.
    expect(fs.existsSync(pathRootAbs)).toBe(false);
  });

  it("C6 — trusted HEAD invalid → NOT READY", () => {
    const root = tempDir("sfia-badhead-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    makeGitRepo(path.join(managedBase, "acme__z"));
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: "/x",
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/z",
      resolveCursorBin: () => "/x",
      resolveBaseHeadSha: () => ({ ok: false, code: "BASE_HEAD_SHA_UNRESOLVED" }),
    });
    expect(r.contractReadiness.baseHeadShaFullSha).toBe(false);
    expect(r.blockers.some((b) => b.includes("TRUSTED_BASE_HEAD"))).toBe(true);
    expect(r.readyForDeterministicPreReal).toBe(false);
  });

  it("C8 — injectable Cursor app path resolver → READY binary", () => {
    const root = tempDir("sfia-appbin-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    makeGitRepo(path.join(managedBase, "acme__a"));
    const appBin =
      "/Applications/Cursor.app/Contents/Resources/app/bin/cursor";
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/a",
      resolveCursorBin: () => appBin,
      resolveBaseHeadSha: () => ({ ok: true, sha: "c".repeat(40) }),
    });
    expect(r.cursorBinary.configuredOverride).toBe(false);
    expect(r.cursorBinary.executable).toBe(true);
    expect(r.cursorBinary.resolvedPath).toBe(appBin);
  });

  it("C9 — no binary → NOT READY + CURSOR_BINARY_UNAVAILABLE", () => {
    const root = tempDir("sfia-nobin-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    makeGitRepo(path.join(managedBase, "acme__b"));
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/b",
      resolveCursorBin: () => null,
      resolveBaseHeadSha: () => ({ ok: true, sha: "d".repeat(40) }),
    });
    expect(r.cursorBinary.executable).toBe(false);
    expect(r.blockers).toContain("CURSOR_BINARY_UNAVAILABLE");
    expect(r.readyForDeterministicPreReal).toBe(false);
  });

  it("C10 — auth state never true by inference", () => {
    const root = tempDir("sfia-auth-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    makeGitRepo(path.join(managedBase, "acme__c"), "projects/x");
    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: "/x",
      },
      expectedProjectId: "prj:x",
      repositoryBindingIdentity: "acme/c",
      pathRoot: "projects/x",
      resolveCursorBin: () => "/x",
      resolveBaseHeadSha: () => ({ ok: true, sha: "e".repeat(40) }),
    });
    expect(r.auth.proven).toBe(false);
    expect(r.auth.state).toBe("EXTERNAL_PREFLIGHT_REQUIRED");
    expect(r.readyForProductRealExecute).toBe(false);
    expect(r.readyForDeterministicPreReal).toBe(true);
  });

  it("identity traversal / invalid → NOT READY", () => {
    const root = tempDir("sfia-idtrav-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    fs.mkdirSync(managedBase, { recursive: true });
    for (const identity of ["..", "../../other", "/abs/repo"]) {
      const r = evaluateProductRealReadiness({
        env: {
          SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
          [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
          SFIA_CURSOR_BIN: "/x",
        },
        expectedProjectId: "prj:x",
        repositoryBindingIdentity: identity,
        resolveCursorBin: () => "/x",
      });
      expect(r.readyForDeterministicPreReal).toBe(false);
      expect(
        r.blockers.some(
          (b) =>
            b === "MANAGED_REPO_ABSENT" ||
            b === "REPOSITORY_BINDING_IDENTITY_INVALID",
        ),
      ).toBe(true);
    }
  });

  it("pathRoot traversal / absolute → NOT READY", () => {
    const root = tempDir("sfia-pathtrav-");
    const dbPath = path.join(root, "p.sqlite");
    makeSqliteWithProject(dbPath, "prj:x");
    const managedBase = path.join(root, "managed");
    makeGitRepo(path.join(managedBase, "acme__safe"));
    for (const pathRoot of ["../../outside", "/abs/path"]) {
      const r = evaluateProductRealReadiness({
        env: {
          SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
          [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
          SFIA_CURSOR_BIN: "/x",
        },
        expectedProjectId: "prj:x",
        repositoryBindingIdentity: "acme/safe",
        pathRoot,
        resolveCursorBin: () => "/x",
        resolveBaseHeadSha: () => ({ ok: true, sha: "f".repeat(40) }),
      });
      expect(r.managedRepository.pathRootContainmentValid).toBe(false);
      expect(r.contractReadiness.launchContextResolvable).toBe(false);
      expect(r.readyForDeterministicPreReal).toBe(false);
      expect(
        r.blockers.some(
          (b) =>
            b === "PROJECT_PATH_ROOT_TRAVERSAL" ||
            b === "PROJECT_PATH_ROOT_ABSOLUTE" ||
            b === "PROJECT_PATH_ROOT_ESCAPE",
        ),
      ).toBe(true);
    }
  });

  it("parity — valid unmaterialized pathRoot aligns with launch readiness (no Cursor)", () => {
    const root = tempDir("sfia-parity-");
    const dbPath = path.join(root, "p.sqlite");
    const projectId = "prj:parity-batch";
    makeSqliteWithProject(dbPath, projectId);
    const managedBase = path.join(root, "managed");
    const identity = "mcleland147/sfia-workspace";
    const repoPath = path.join(managedBase, "mcleland147__sfia-workspace");
    const sha = makeGitRepo(repoPath); // no projects/batch-cookinb
    const fakeBin = path.join(root, "fake-cursor");
    fs.writeFileSync(fakeBin, "#!/bin/sh\necho ok\n", { mode: 0o755 });
    const pathRootAbs = path.join(repoPath, "projects/batch-cookinb");
    expect(fs.existsSync(pathRootAbs)).toBe(false);

    const r = evaluateProductRealReadiness({
      env: {
        SFIA_STUDIO_PRODUCT_DB_PATH: dbPath,
        [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase,
        SFIA_CURSOR_BIN: fakeBin,
      },
      expectedProjectId: projectId,
      repositoryBindingIdentity: identity,
      pathRoot: "projects/batch-cookinb",
      defaultBranch: "main",
      resolveBaseHeadSha: () => ({ ok: true, sha }),
    });

    expect(r.managedRepository.pathRootExists).toBe(false);
    expect(r.managedRepository.pathRootContainmentValid).toBe(true);
    expect(r.blockers).not.toContain("PROJECT_PATH_ROOT_ABSENT");
    expect(r.contractReadiness.launchContextResolvable).toBe(true);
    expect(r.readyForDeterministicPreReal).toBe(true);
    expect(r.readyForProductRealExecute).toBe(false);
    expect(r.auth.proven).toBe(false);
    expect(fs.existsSync(pathRootAbs)).toBe(false);

    // Lightweight parity with resolveTrustedProductLaunchContext inputs:
    // managed repo + full HEAD + contained pathRoot — no physical pathRoot required.
    expect(r.managedRepository.resolvedManagedRepoPath).toBe(repoPath);
    expect(r.managedRepository.trustedBaseHeadSha).toBe(sha);
    expect(r.managedRepository.pathRoot).toBe("projects/batch-cookinb");
  });
});
```

---

# APPENDIX F — identity anchors (unchanged)

- Local project commit SHA: `128f3b7eb49cbba05d7735d5edc41a27822b0dee`
- Base origin/main: `2543a5bb9f62a23863ec4e74928ac6fc1a6b542a`
- Full npm test: 401 files / 4481 passed / 137 skipped
- typecheck / lint / build / diff-check: PASS
- ZERO PRODUCT EXECUTE
- REAL budget 1/0 UNUSED
- Verdict: PATHROOT READINESS SEMANTICS CORRECTION COMPLETE — LOCAL CANDIDATE READY FOR CHATGPT CRITICAL REVIEW — PROJECT GIT INTEGRATION NOT AUTHORIZED
