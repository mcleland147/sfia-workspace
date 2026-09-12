# SFIA STUDIO — Review Pack — D-GCEC-CONT-02

TIMESTAMP: 2026-09-12T12:45:49Z

CYCLE: 8 — Delivery / implementation

TYPE: EVOL

PROFILE: CRITICAL

GO MORRIS: D-GCEC-CONT-02 CONSUMED

AUTHORIZATION: BOUNDED CORRECTION / ZERO REAL / NO COMMIT

---

## GIT TRUTH

LOCAL HEAD: `645ec7e0c24626799382b07bdf90de918cefb0eb`

PARENT: `6e42c4f069cbe2af7eb6ffe47e3df41d199972cc`

origin/main: `a9f6c310a0826d0e5bd6f7264603382a86564db1`

BRANCH: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`

WORKTREE: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`

INPUT HANDOFF: `edeed771c1a44f5a8943d6a800f8b7cd458fba47`

Product source was CLEAN at cycle start; only `.tmp-sfia-review/**` dirty. Correction left Product files dirty (no commit).

---

## SOURCES

Read CURRENT LOCAL method/convergence/completion/v3 framing + latest handoff @ edeed771… plus CONT-01 / AGENT-01 / workspace / startExecution / resume / REAL harness implementation under `projects/sfia-studio/app/lib/oa/execution-attempt/**` and corresponding tests.

Local repository truth wins (no GitHub main reliance for Product implementation).

---

## CONVERGENCE PRE-CHECK

- Build Doctrine: VALIDATED / ACTIVE
- Roadmap: VALIDATED / ACTIVE LIVING
- Local Roadmap truth: D-GCEC-EXEC-01 locally committed at 645ec7e0…
- Product Completion: COMPLETE / CLOSED
- C1: VALIDATED / INTEGRATED
- Runtime v3: NON ADOPTED
- Decisions ACTIVE: D-GCEC-09, D-GCEC-15, D-GCEC-CONT-01, D-GCEC-AGENT-01, D-GCEC-EXEC-01; D-GCEC-EVID-01 ACCEPTED NON-BLOCKING
- Capability target: same-EC governed technical continuation VERIFIED docs-write → local Git commit
- Observed gap: A workspace exists + Evidence VERIFIED, B rejected with `REAL_WORKSPACE_INVALID:worktree_unregistered`
- Exit proof THIS cycle: root cause + minimal correction + fail-closed preserved + deterministic resume PASS + negatives PASS + B disposition + A reuse eligibility

---

## D-GCEC-REAL-01 PRESERVED FACTS

| Field | Value |
| --- | --- |
| Project | `prj:gcec-commit-ab-1` |
| Cycle | `cyc:trj-c9806a26b5507b17a84cecaa` |
| EC | `xct:m3-res:dec:f2:8f482c8e-a2ca-415c-bc30-42854e4bb6a8` (confirmed) |
| Attempt A | `xat:gcec-commit-a:…` succeeded |
| Evidence A | `ev:docs-write:xat:gcec-commit-a:…` VERIFIED |
| Artifact | `docs/functional-design.md` · 6951 B · `sha256:d6945c5478c695ee840147b10f7631f96eeb830ca25e1703dbe6a9afa4c38a73` |
| Attempt B | `xat:gcec-commit-b:…` accepted (stuck; see secondary cause) |
| Base HEAD | `32c7c2008197e5c61b32c16479144e9863291358` |
| A worktree | `/var/folders/…/wt-3887970db3ae97ce027d390a` (still present) |
| Managed repo | `/tmp/sfia-gcec-real-01-managed.Bt0Z72/mcleland147__sfia-gcec-proof-task-manager` (still present) |

REAL docs-write A: PROVEN. A did not commit: PROVEN. Remote refs unchanged: PROVEN. REAL git.commit: NOT PROVEN.

---

## FORENSIC OBSERVATIONS (READ-ONLY)

Paths still exist. `git worktree list --porcelain` on managed repo shows A worktree registered as:

`/private/var/folders/…/wt-3887970db3ae97ce027d390a`

Derived CONT-01 path (path.resolve under TMPDIR):

`/var/folders/…/wt-3887970db3ae97ce027d390a`

Live comparison against preserved campaign:

- `OLD_RESOLVE_MATCH` = false
- `NEW_REALPATH_MATCH` = true

A HEAD still base SHA; artifact digest still matches; no mutation performed on A worktree / managed repo / Evidence / SQLite.

Secondary forensic: Attempt B remains `status=accepted` with active-contract reservation; audit logged launch_failed with `newStatus: accepted` because failRealLaunch persist failed shape validation (`REAL_LAUNCH_FAILED:` not in LAUNCH_FAIL_STOP_REASON_PATTERN). Historical B not mutated this cycle.

---

## ROOT CAUSE

ROOT_CAUSE_CLASS: PATH_CANONICALIZATION_MISMATCH (+ SECONDARY_STOPREASON_SHAPE_REJECT)

ROOT_CAUSE_COMPONENT:
1. Primary: `StudioGitWorktreeWorkspace.resumeVerifiedWorkspace` registration/toplevel compare
2. Secondary: `LAUNCH_FAIL_STOP_REASON_PATTERN` vs `failRealLaunch` stopReason `REAL_LAUNCH_FAILED:…`

ROOT_CAUSE_EXACT_MECHANISM:
- A worktree was created and registered correctly under the managed repository.
- On macOS, derived `workspacePath` keeps `/var/folders/...` while Git porcelain/toplevel report `/private/var/folders/...`.
- Resume used `path.resolve(p) === workspacePath` only → false negative `worktree_unregistered` despite true registration.
- Separately, `failRealLaunch` wrote `stopReason: REAL_LAUNCH_FAILED: …` which `validateAttemptShape` rejected → failed status not persisted → B stuck accepted/active.

WHY PRIOR TESTS MISSED IT:
- FakeGitCommandRunner previously stored/returned path.resolve paths (matching derived path), never Git-canonical realpaths.
- No symlink asymmetry fixture for `/var` vs `/private/var`.
- R2-13 inadvertently encoded the broken persist path (`LAUNCH_RECONCILIATION_REQUIRED` after failed persist).

SECURITY_INVARIANT_PRESERVED: yes

MINIMAL_FIX_LOCATION:
- `studioGitWorktreeWorkspace.ts` — realpath-equal registration/toplevel (parity with `observeLocalCommitFacts`)
- `invariants.ts` — allow `REAL_LAUNCH_FAILED` pre-launch stopReason prefix
- tests/FakeGit — reproduce + preserve fail-closed

---

## SECURITY INVARIANT

NOT weakened:

- still requires registered worktree of expected managed repo
- still rejects physical-but-unregistered directories
- still rejects wrong common-dir / wrong HEAD / wrong Evidence / wrong priorAttemptId
- no client path override
- no heuristic latest/first worktree
- no silent auto-registration of arbitrary directories

Only path *comparison* equalizes resolve vs realpath for the same inode.

---

## PROPOSED/ACTUAL WRITE FILESET

1. `studioGitWorktreeWorkspace.ts` — primary fix
2. `invariants.ts` — secondary causal persist fix
3. `index.ts` — export helper
4. `fakeSpawnAndGit.ts` — FakeGit Git-canonical paths (reproduction fidelity)
5. `gcecCont01WorkspaceResume.d0.test.ts` — CONT-02 positive + negative
6. `attemptRepository.test.ts` — stopReason shape tests
7. `m4RealOffCorrectionR2.test.ts` — R2-13 expectation aligned to successful failRealLaunch

No Roadmap / Doctrine / v3 / method / prompts / schema / CI / lockfile.

---

## FIX DESCRIPTION

1. Add `pathsEqualAllowingRealpath` and use it for porcelain registration + toplevel checks in `resumeVerifiedWorkspace`.
2. Extend `LAUNCH_FAIL_STOP_REASON_PATTERN` to include `REAL_LAUNCH_FAILED` so REAL pre-launch failures persist as `failed` and release active contract.
3. Make FakeGit register/list/toplevel via realpath (mirrors OS Git on macOS).
4. Add symlink-based deterministic regression proving registered-but-path-asymmetric resume PASS and unregistered FAIL.
5. Update R2-13: after prepare failure, Attempt is `failed` with `REAL_LAUNCH_FAILED:…`; retry → `ATTEMPT_STATE_CONFLICT` (not reconciliation-from-stuck-accepted).

WHY FIX IS NON-STRUCTURAL: comparison/parity + stopReason allowlist alignment with existing detailCode; no new persistence, schema, status, FSM, or executor.

---

## CONT-01 SEMANTICS CHECK

Preserved: one EC = complete intent; A≠B Attempts; priorAttemptId exact; Project/repo/EC exact; A succeeded + Evidence VERIFIED required; execRoot/workspace server-derived; no heuristic; ambiguity fail-closed; stale/foreign rejected; local commit SHA supersession strict; no new persistence/FSM/nested cycle/second engine.

---

## B_IDENTITY_DISPOSITION

`NEW_B_REQUIRED_UNDER_SAME_EC`

Rationale: D-GCEC-15 — a future distinct Morris REAL authorization is new authority → new Attempt identity under the SAME EC. Existing B was never Cursor-invoked and produced no Evidence B; it is not a successful resume target under new authority. Historical stuck-accepted B is a consequence of the secondary bug and is NOT mutated this cycle.

Operational note for the preserved EC: stuck active B blocks selecting a new Attempt on that EC without historical mutation → next REAL should not target that EC.

---

## A_REUSE_ELIGIBILITY

`CONDITIONAL_MORRIS_DECISION`

Workspace/Evidence/HEAD/repo for preserved A remain valid and resume under corrected comparison (forensic NEW_REALPATH_MATCH=true). Same-EC B-only on the preserved campaign is blocked by stuck active B without mutating historical state. Safe default for next REAL: fresh A→B campaign after Cont-02 Product commit GO.

---

## DETERMINISTIC REPRODUCTION

CONT-02 symlink fixture: derived path via alias execRoot ≠ Git-canonical registered path; pre-fix resolve-only compare fails; post-fix realpath compare passes. Live preserved campaign reproduces OLD_RESOLVE_MATCH=false / NEW_REALPATH_MATCH=true.

---

## POSITIVE TESTS

- T1/T2: CONT-02 canonical path resume PASS; FakeGit worktree add registers canonical path; existing RESUME-01/03 PASS under canonical FakeGit
- T3–T6: existing CONT-01 resolver / same-EC / gateway continuation suites
- T7: process/object reconstruction not required — failure was path string asymmetry, not in-memory registry loss
- T8: no schema/persistence change
- R2-13: failRealLaunch now persists failed

## NEGATIVE TESTS

- N1: CONT-02 unregistered physical dir still rejects
- N2–N10: preserved CONT-01 resume/resolver/gateway negatives (wrong repo/HEAD/Evidence/priorAttemptId/ambiguity/foreign/client path/no commit before verify)

---

## FOCUSED TEST RESULTS

Commands (REAL gates unset):

```
cd projects/sfia-studio/app
unset SFIA_STUDIO_CURSOR_REAL SFIA_GCEC_CURSOR_REAL_PROOF SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF
npx vitest run __tests__/oa/execution-attempt/gcecCont01WorkspaceResume.d0.test.ts \
  __tests__/oa/execution-attempt/attemptRepository.test.ts \
  __tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts \
  __tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts \
  __tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts \
  __tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
```

Result: Test Files 6 passed; Tests 96 passed

Full `__tests__/oa/execution-attempt/`: Test Files 26 passed; Tests 300 passed

---

## TYPECHECK

`npm run typecheck` → PASS (tsc --noEmit)

## LINT

`npm run lint` → PASS (No ESLint warnings or errors)

## BUILD

`npm run build` → PASS (Next.js 15.5.20)

## FULL VITEST

`npm test` → Test Files 352 passed | 17 skipped; Tests 3788 passed | 137 skipped (3925)

REAL GATES: OFF

GCEC REAL: ZERO

---

## PRODUCT SOURCE DIFF (FULL USEFUL)

```diff
===== projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts =====
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
index baef6075..4019255b 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
@@ -8,7 +8,7 @@
  * Resume NEVER: worktree add, checkout, reset, copy, stage, or commit.
  */
 import { createHash } from "node:crypto";
-import { existsSync, readFileSync } from "node:fs";
+import { existsSync, readFileSync, realpathSync } from "node:fs";
 import path from "node:path";
 import { spawn as nodeSpawn } from "node:child_process";
 import type {
@@ -54,6 +54,25 @@ export function isFullGitSha(value: unknown): value is string {
   return typeof value === "string" && FULL_SHA_RE.test(value);
 }

+/**
+ * Path equality for Git worktree registration/toplevel checks.
+ * macOS TMPDIR often uses `/var/folders/...` while `git worktree list --porcelain`
+ * and `rev-parse --show-toplevel` report `/private/var/folders/...`.
+ * Keep fail-closed: unequal after resolve+realpath → not equal (no path-only trust).
+ */
+export function pathsEqualAllowingRealpath(a: string, b: string): boolean {
+  const ra = path.resolve(a);
+  const rb = path.resolve(b);
+  if (ra === rb) {
+    return true;
+  }
+  try {
+    return realpathSync(ra) === realpathSync(rb);
+  } catch {
+    return false;
+  }
+}
+
 /** Physical leaf only — `wt-` + sha256(attemptId) hex prefix (24). */
 export function physicalWorktreeLeafForAttempt(attemptId: string): string {
   const digest = createHash("sha256")
@@ -218,8 +237,8 @@ export class StudioGitWorktreeWorkspace implements RealExecutionWorkspacePort {
     if (list.exitCode !== 0) {
       throw new Error("REAL_WORKSPACE_INVALID:worktree_list_failed");
     }
-    const registered = porcelainWorktreePaths(list.stdout).some(
-      (p) => path.resolve(p) === workspacePath,
+    const registered = porcelainWorktreePaths(list.stdout).some((p) =>
+      pathsEqualAllowingRealpath(p, workspacePath),
     );
     if (!registered) {
       throw new Error("REAL_WORKSPACE_INVALID:worktree_unregistered");
@@ -232,8 +251,7 @@ export class StudioGitWorktreeWorkspace implements RealExecutionWorkspacePort {
     if (toplevel.exitCode !== 0) {
       throw new Error("REAL_WORKSPACE_INVALID:toplevel_missing");
     }
-    const top = path.resolve(toplevel.stdout.trim());
-    if (top !== workspacePath) {
+    if (!pathsEqualAllowingRealpath(toplevel.stdout.trim(), workspacePath)) {
       throw new Error("REAL_WORKSPACE_INVALID:toplevel_mismatch");
     }

===== projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts =====
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
index 6ed83282..5c4d85c2 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
@@ -374,8 +374,9 @@ export function resolveSelectionStrategy(
 /* Modeled shape guard (0.2.0-oa conditionals)                                 */
 /* -------------------------------------------------------------------------- */

+/** Pre-launch fail stopReason prefixes (fixture + REAL Gate D paths). */
 const LAUNCH_FAIL_STOP_REASON_PATTERN =
-  /^(EXECUTION_LAUNCH_FAILED|EXECUTION_PERSISTENCE_FAILED)([:; ].*)?$/;
+  /^(EXECUTION_LAUNCH_FAILED|EXECUTION_PERSISTENCE_FAILED|REAL_LAUNCH_FAILED)([:; ].*)?$/;

 /**
  * MODELED GAP T-A5-M1 (documented, not silently resolved).
===== projects/sfia-studio/app/lib/oa/execution-attempt/index.ts =====
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 009cd872..f3498e63 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -146,6 +146,7 @@ export {
   StudioGitWorktreeWorkspace,
   NodeGitCommandRunner,
   isFullGitSha,
+  pathsEqualAllowingRealpath,
   workspacePathForAttempt,
   type GitCommandRunner,
   type GitCommandResult,
===== projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts =====
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts
index a5432454..a77c8dff 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts
@@ -2,7 +2,7 @@
  * TEST-ONLY spawn / git doubles — no OS process, no real git.
  */
 import { EventEmitter } from "node:events";
-import { mkdirSync } from "node:fs";
+import { mkdirSync, realpathSync } from "node:fs";
 import path from "node:path";
 import type { ChildProcess } from "node:child_process";
 import type {
@@ -11,6 +11,16 @@ import type {
   SpawnPrimitive,
 } from "@/lib/oa/execution-attempt";

+/** Mirror Git porcelain/toplevel canonicalization (macOS /var → /private/var). */
+function gitCanonicalPath(p: string): string {
+  const resolved = path.resolve(p);
+  try {
+    return realpathSync(resolved);
+  } catch {
+    return resolved;
+  }
+}
+
 export type FakeSpawnCall = {
   executable: string;
   argv: readonly string[];
@@ -182,7 +192,7 @@ export class FakeGitCommandRunner implements GitCommandRunner {
     this.remoteUrl = options.remoteUrl ?? null;
     this.failOn = options.failOn;
     for (const p of options.registeredWorktrees ?? []) {
-      this.registeredWorktrees.add(path.resolve(p));
+      this.registeredWorktrees.add(gitCanonicalPath(p));
     }
   }

@@ -191,7 +201,7 @@ export class FakeGitCommandRunner implements GitCommandRunner {
   }

   registerWorktree(workspacePath: string): void {
-    this.registeredWorktrees.add(path.resolve(workspacePath));
+    this.registeredWorktrees.add(gitCanonicalPath(workspacePath));
   }

   async run(
@@ -213,8 +223,8 @@ export class FakeGitCommandRunner implements GitCommandRunner {
     if (argv[0] === "worktree" && argv[1] === "add") {
       const wtPath = argv[3] ? path.resolve(String(argv[3])) : "";
       if (wtPath) {
-        this.registeredWorktrees.add(wtPath);
         mkdirSync(wtPath, { recursive: true });
+        this.registeredWorktrees.add(gitCanonicalPath(wtPath));
       }
       return { stdout: "", stderr: "", exitCode: 0 };
     }
@@ -232,7 +242,7 @@ export class FakeGitCommandRunner implements GitCommandRunner {
     }
     if (argv[0] === "rev-parse" && argv[1] === "--show-toplevel") {
       return {
-        stdout: `${path.resolve(cwd)}\n`,
+        stdout: `${gitCanonicalPath(cwd)}\n`,
         stderr: "",
         exitCode: 0,
       };
===== projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01WorkspaceResume.d0.test.ts =====
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01WorkspaceResume.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01WorkspaceResume.d0.test.ts
index 7f23eced..a0f6402d 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01WorkspaceResume.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01WorkspaceResume.d0.test.ts
@@ -4,7 +4,13 @@
  * @vitest-environment node
  */
 import { createHash } from "node:crypto";
-import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
+import {
+  mkdirSync,
+  mkdtempSync,
+  realpathSync,
+  symlinkSync,
+  writeFileSync,
+} from "node:fs";
 import os from "node:os";
 import path from "node:path";
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
@@ -237,6 +243,86 @@ describe("D-GCEC-CONT-01 workspace resume (REAL OFF)", () => {
     ).rejects.toThrow(/worktree_unregistered/);
   });

+  it("CONT-02: registered worktree with Git-canonical path ≠ derived path still resumes (macOS /var vs /private/var)", async () => {
+    const root = mkdtempSync(path.join(os.tmpdir(), "gcec-cont02-canon-"));
+    const realExec = path.join(root, "real-exec");
+    const aliasExec = path.join(root, "alias-exec");
+    mkdirSync(realExec);
+    symlinkSync(realExec, aliasExec);
+    const repoRoot = path.join(root, "repo");
+    mkdirSync(repoRoot);
+
+    const priorAttemptId = "xat:cont02-prior-canon";
+    const derivedPath = workspacePathForAttempt(aliasExec, priorAttemptId);
+    mkdirSync(derivedPath, { recursive: true });
+    writeVerifiedArtifact(derivedPath);
+    const gitCanonical = realpathSync(derivedPath);
+    expect(gitCanonical).not.toBe(path.resolve(derivedPath));
+
+    const git = new FakeGitCommandRunner({
+      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
+      remoteUrl: REMOTE,
+      registeredWorktrees: [gitCanonical],
+    });
+    const ws = new StudioGitWorktreeWorkspace({
+      repoRoot,
+      execRoot: aliasExec,
+      gitRunner: git,
+    });
+    const resumed = await ws.resumeVerifiedWorkspace({
+      currentAttemptId: "xat:cont02-current",
+      priorAttemptId,
+      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
+      expectedVerifiedFiles: [{ path: ARTIFACT_REL, digest: ARTIFACT_DIGEST }],
+      repositoryBinding: {
+        identity: IDENTITY,
+        remoteUrl: REMOTE,
+        defaultBranch: "main",
+      },
+    });
+    expect(resumed.workspacePath).toBe(path.resolve(derivedPath));
+    expect(resumed.verifiedHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
+  });
+
+  it("CONT-02: physical dir exists but not registered still fails closed (invariant preserved)", async () => {
+    const root = mkdtempSync(path.join(os.tmpdir(), "gcec-cont02-unreg-"));
+    const realExec = path.join(root, "real-exec");
+    const aliasExec = path.join(root, "alias-exec");
+    mkdirSync(realExec);
+    symlinkSync(realExec, aliasExec);
+    const repoRoot = path.join(root, "repo");
+    mkdirSync(repoRoot);
+    const priorAttemptId = "xat:cont02-prior-unreg";
+    const derivedPath = workspacePathForAttempt(aliasExec, priorAttemptId);
+    mkdirSync(derivedPath, { recursive: true });
+    writeVerifiedArtifact(derivedPath);
+    const git = new FakeGitCommandRunner({
+      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
+      remoteUrl: REMOTE,
+      registeredWorktrees: [],
+    });
+    const ws = new StudioGitWorktreeWorkspace({
+      repoRoot,
+      execRoot: aliasExec,
+      gitRunner: git,
+    });
+    await expect(
+      ws.resumeVerifiedWorkspace({
+        currentAttemptId: "xat:cont02-current-unreg",
+        priorAttemptId,
+        expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
+        expectedVerifiedFiles: [
+          { path: ARTIFACT_REL, digest: ARTIFACT_DIGEST },
+        ],
+        repositoryBinding: {
+          identity: IDENTITY,
+          remoteUrl: REMOTE,
+          defaultBranch: "main",
+        },
+      }),
+    ).rejects.toThrow(/worktree_unregistered/);
+  });
+
   it("RESUME-06 wrong HEAD fails closed", async () => {
     const { repoRoot, execRoot } = tempRoots("gcec-cont-r06-");
     const priorAttemptId = "xat:cont-prior-06";
===== projects/sfia-studio/app/__tests__/oa/execution-attempt/attemptRepository.test.ts =====
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/attemptRepository.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/attemptRepository.test.ts
index 89a1dd5b..323aa7c9 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/attemptRepository.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/attemptRepository.test.ts
@@ -354,6 +354,35 @@ describe("T-A5 modeled shape guard", () => {
     );
   });

+  it("CONT-02: accepts pre-launch failed with REAL_LAUNCH_FAILED stopReason", () => {
+    const violation = validateAttemptShape(
+      baseAttempt({
+        attemptId: "xat:b-real-fail",
+        status: "failed",
+        failedAt: NOW,
+        stopReason:
+          "REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:worktree_unregistered",
+        version: 2,
+      }),
+    );
+    expect(violation).toBeNull();
+  });
+
+  it("CONT-02: still requires launch/persistence stopReason prefix on pre-launch failed", () => {
+    const violation = validateAttemptShape(
+      baseAttempt({
+        attemptId: "xat:b-bad-stop",
+        status: "failed",
+        failedAt: NOW,
+        stopReason: "ARBITRARY_FAIL: nope",
+        version: 2,
+      }),
+    );
+    expect(violation?.reason).toBe(
+      "pre_launch_failed_requires_launch_or_persistence_stop_reason",
+    );
+  });
+
   it("requires a retry index and budget when retryOfAttemptId is set", () => {
     const violation = validateAttemptShape(
       baseAttempt({ attemptId: "xat:a2", retryOfAttemptId: "xat:a1" }),
===== projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts =====
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts
index 843efb09..db44bedc 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts
@@ -427,7 +427,7 @@ describe("M4 REAL-OFF correction R2", () => {
     journal.close();
   });

-  it("R2-13 workspace prepare failure after CREATED → runner 0, retry blocked", async () => {
+  it("R2-13 workspace prepare failure after CREATED → Attempt failed, runner 0, retry blocked", async () => {
     const journalPath = tempJournalPath("m4-r2-13-");
     const journal = new SqliteRealLaunchSafetyJournal({
       databasePath: journalPath,
@@ -502,6 +502,10 @@ describe("M4 REAL-OFF correction R2", () => {
     }
     expect(await journal.hasKindForAttempt("xat:r2-13", "CREATED")).toBe(true);
     expect(runner.calls).toHaveLength(0);
+    // CONT-02: REAL_LAUNCH_FAILED stopReason validates — failRealLaunch persists failed.
+    const stored = await stack.attempts.attempts.findById("xat:r2-13");
+    expect(stored?.status).toBe("failed");
+    expect(stored?.stopReason).toMatch(/^REAL_LAUNCH_FAILED:/);

     const retry = await stack.attempts.startExecution.execute({
       attemptId: "xat:r2-13",
@@ -510,7 +514,7 @@ describe("M4 REAL-OFF correction R2", () => {
     });
     expect(retry.ok).toBe(false);
     if (!retry.ok) {
-      expect(retry.error.detailCode).toBe("LAUNCH_RECONCILIATION_REQUIRED");
+      expect(retry.error.detailCode).toBe("ATTEMPT_STATE_CONFLICT");
     }
     expect(runner.calls).toHaveLength(0);
     journal.close();

```

---

## PRODUCT COMMIT: NONE

## PRODUCT PUSH: NONE

## PR: NONE

## MERGE: NONE

## PROOF REPO MUTATION: NONE

---

## PRESERVED A: REAL PROVEN / Evidence VERIFIED

## REAL git.commit: NOT PROVEN

## REAL_CONTINUATION_GAP: OPEN

## GOVERNED EXECUTOR EFFECT RESERVE: OPEN

## GCEC-PUSH: NOT READY

## RUNTIME v3: NON ADOPTED

---

## NEXT REAL TRAJECTORY

`FRESH_A2B_REQUIRED`

Do not B-only on the preserved stuck-B EC. After Morris Product commit GO for Cont-02, authorize a distinct fresh A→B REAL campaign under corrected resume + failRealLaunch persist semantics.

---

## DECISION REQUIRED FROM MORRIS

1. Critical Review of this Cont-02 candidate
2. Product commit GO (if accepted)
3. Distinct GO for next REAL (fresh A→B) — Cont-02 does NOT authorize REAL
4. Optional separate decision if Morris wants to remediate the preserved stuck-B EC (out of Cont-02 scope)

---

## ANTI-CLAIMS

Do NOT claim: REAL git.commit proven; REAL_CONTINUATION_GAP closed; effect reserve closed; B REAL authorized; fresh A→B REAL authorized; GCEC-PUSH ready; runtime v3 adopted.

---

## FINAL VERDICT

**OUTCOME A: PASS WITH RESERVE — D-GCEC-CONT-02 DETERMINISTIC CORRECTION CANDIDATE ACCEPTED FOR CRITICAL REVIEW / WORKTREE REGISTRATION GAP CORRECTED AT DETERMINISTIC SCOPE / FAIL-CLOSED PROVEN / ZERO REAL / NO PRODUCT COMMIT / NEXT REAL TRAJECTORY EXPLICIT (`FRESH_A2B_REQUIRED`).**
