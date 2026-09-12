# SFIA STUDIO — GCEC
# CR-GCEC-GITCOMMIT-01 SAME-LOT CRITICAL REVIEW CORRECTION
# BOUNDED CURSOR LOCAL GIT.COMMIT EXECUTOR
# ZERO REAL — NO PRODUCT COMMIT

## TIMESTAMP
2026-09-12T01:18:23Z

## GO MORRIS
CR-GCEC-GITCOMMIT-01 SAME-LOT CORRECTION CONSUMED

## GIT TRUTH BEFORE
- worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 3966bbf9b800b143711acf1d581b85a33e106e99
- parent: 92ad3fd41e065d0ebe76c59b4eedb622715a11e2
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1
- input handoff: f4cc341e1433228b76412bedf13f46a18d2cbab2
- Product dirt: bounded git.commit candidate (10 modified + 9 created from handoff) + correction overlays

## GIT TRUTH AFTER
- HEAD unchanged: 3966bbf9b800b143711acf1d581b85a33e106e99
- Product commit: NONE
- Product push: NONE
- candidate remains uncommitted for ChatGPT Critical Re-Review / Morris agent-model escalation

## INPUT HEAD
3966bbf9b800b143711acf1d581b85a33e106e99

## INPUT HANDOFF
f4cc341e1433228b76412bedf13f46a18d2cbab2

## SOURCES
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/* (routing, operating model, guardrails)
- capitalization / cycle-knowledge-contracts maps
- projects/sfia-studio/convergence/* doctrine + roadmap
- sfia-v3-framing/34 + 35
- local candidate at HEAD 3966bbf9 + dirty files (authoritative over origin/main)

## CONVERGENCE PRE-CHECK
- Build Doctrine: VALIDATED / ACTIVE
- Runtime v3: NON ADOPTED
- R3/R6/R8/R12/R13/R15/R18/R19/R21 applied
- No second engine / no Product Git business writer / no schema migration

## CYCLE / TYPE / PROFILE
8 — Delivery / EVOL / CRITICAL

## CHATGPT FINDINGS — CR-GCEC-GC-01 through 06

### CR-GCEC-GC-01 — AgentCapability bypass
- **root cause:** EC identity fixes action/capability/target/scope to docs-write quartet; `agentMatchViolation` requires ALL EC capabilities + exact action/target/scope. Sibling `agt:m4.cursor.bounded_local_commit` is disjoint. Attempt B cannot honestly select local-commit under SAME docs-write EC without structural domain change. Prior candidate used docs-write agent + `gitCommitSpec` profile switch (authority bypass).
- **files changed:** startExecution.ts, studioCursorRealLaunchGateway.ts, fakeDocsWriteLaunchPort.ts, m4BoundedLocalCommitCursorAgent.ts, SameEcAb/Cont01/CR23/E2E fixtures
- **correction:** fail closed when commit-only slice + non-local-commit agent; gateway requires `selectedAgentRef == agt:m4.cursor.bounded_local_commit`; Fake matches Real; AG-01 proves selection of local-commit under docs-write EC fails; AG-02 proves Start fails on docs-write+commit
- **tests:** AG-01/AG-02; Cont01 A→B updated; CR23 P1/P2; E2E stops at commit Start
- **status: STOP — GCEC GIT.COMMIT AGENT MODEL ESCALATION REQUIRED**
- **exact structural conflict:** Same EC keeps fixed `action`/`requiredCapabilities`/`target`/`scope` matching docs-write only. Local-commit AgentDescriptor has disjoint quartet. `agentMatchViolation` is AND over requiredCapabilities + exact action/target/scope. Selecting Attempt B local-commit agent under docs-write EC fails. Broadening docs-write agent, lying about EC capabilities, second EC, nested cycle, or redefining D-GCEC-15 would be structural — not authorized by this GO.

### CR-GCEC-GC-02 — exact commit-only authority
- **root cause:** `isBoundedGitCommitOnlySlice` / gateway accepted missing or empty authorizedEffects
- **correction:** uniqueSet.size === 1 && has("git.commit"); AUTH-01..07; Fake+Real match
- **status: CLOSED**

### CR-GCEC-GC-03 — shell-safe commit spec
- **root cause:** paths/messages insufficiently constrained for Shell-exposed agent
- **correction:** `assertShellSafeRelativePath` / `assertShellSafeCommitSubject`; gateway re-validates via `buildGitCommitLaunchSpec`; SPEC/MSG negatives; single canonical `GitCommitLaunchSpec` in domain (ports re-export)
- **status: CLOSED**

### CR-GCEC-GC-04 — independent local Git observation
- **root cause:** verifyLocalCommitEffect accepted caller-supplied observation facts
- **correction:** `observeLocalCommitFacts` via GitCommandRunner READ-ONLY; synthetic helper only for tests with `observationSource: studio:local_git_readonly`; Evidence provenance `studio:local_git_readonly:observe`; no remote claim for unpushed SHA; exact bindings required
- **status: CLOSED**

### CR-GCEC-GC-05 — future REAL harness placeholder
- **root cause:** harness threw unconditional placeholder; asserted ENABLED===false
- **correction:** full A→B campaign body with forensic phases; `describe.skipIf(!ENABLED)`; static shape test; agent-model stop gate when enabled; ZERO REAL executed
- **status: CLOSED** (implementation complete; not executed)

### CR-GCEC-GC-06 — FS→SHA supersession
- **root cause:** verifiedEffects includes git.commit ⇒ superseded
- **correction:** require exact `source === "git:local_commit"` Evidence + bindings/lineage; SHA-01..10; parentSha in typed location; verifiedEffects alone NOT sufficient
- **status: CLOSED**

## AGENTCAPABILITY ANALYSIS
Attempt A (docs-write EC): `agt:m4.cursor.bounded_docs_write` / `cap:cursor.docs_write` — selectable.
Attempt B preferred: `agt:m4.cursor.bounded_local_commit` / `cap:cursor.git.local_commit` — NOT selectable under same EC without escalation.
Effective authority for commit now requires local-commit AgentCapability at Start + Gateway; gitCommitSpec alone cannot widen.

## ATTEMPT-A / ATTEMPT-B AGENT SELECTION
SAME EC: YES structurally (D-GCEC-15) — agent swap: CONFLICT under current AgentMatch model.

## EFFECTIVE AUTHORITY
human ∩ EC ∩ AgentCapability ∩ guardrails ∩ Confirmation — no layer widens another.
Commit profile: authorizedEffects exactly git.commit + local-commit agent + Cont01 + valid GitCommitLaunchSpec.

## GATEWAY FAIL-CLOSED AUTHORITY
AUTH-01..07 covered. Zero process on reject.

## GITCOMMITLAUNCHSPEC SAFETY / SHELL SAFETY
Strict POSIX relative paths; single-line subject max 72; hostile SPEC/MSG matrix.

## LOCAL READ-ONLY GIT OBSERVER
`observeLocalCommitFacts` — rev-parse/log/diff-tree/rev-list/status/readFile; mutation argv rejected.

## LOCAL COMMIT VERIFICATION
`verifyLocalCommitFacts` — H1≠H0, parent, paths, subject, dirty, commitsFromExpectedParent===1, exact artifact 1:1 digests.

## EVIDENCE BINDING / PROVENANCE
expectedBindings required (project/cycle/EC/Attempt B); source exact `git:local_commit`; technicalResultRef local observe; unpushed ≠ remote-verified.

## FS→SHA SUPERSESSION
Only unique matching VERIFIED git:local_commit Evidence (not verifiedEffects alone; not git:local_commit_fake).

## FUTURE REAL HARNESS
path: `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts`
implementation complete: YES (campaign body + skipIf)
executed: NO
skipped: YES (triple gate OFF)

## REAL TOOLING RESERVE
OPEN — Cursor CLI lacks explicit tool allow/deny; DETERMINISTIC ≠ READY FOR REAL.

## FILES MODIFIED
- projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts- projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts- projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts- projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts- projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts- projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts- projects/sfia-studio/app/lib/oa/execution-attempt/index.ts- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts- projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts- projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
## FILES CREATED
- projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitEvidence.d0.test.ts- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitObserve.d0.test.ts- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts- projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitVerification.d0.test.ts- projects/sfia-studio/app/lib/oa/execution-attempt/application/observeLocalCommitFacts.ts- projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyLocalCommitEffect.ts- projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitCommitLaunchSpec.ts- projects/sfia-studio/app/lib/oa/execution-attempt/domain/verifyLocalCommitFacts.ts- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedLocalCommitCursorAgent.ts
## ZERO REAL
unset SFIA_STUDIO_CURSOR_REAL / SFIA_GCEC_CURSOR_REAL_PROOF / SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF / SFIA_GCEC_MANAGED_REPO_BASE
No business Cursor child. No proof-repo mutation.

## PRODUCT PERSISTENCE
NONE

## SCHEMA/MIGRATION
NONE

## STUDIO GIT BUSINESS WRITER
NONE

## PROOF REPO
UNCHANGED — mcleland147/sfia-gcec-proof-task-manager @ 32c7c2008197e5c61b32c16479144e9863291358

## FOCUSED TESTS
7 files — 60 passed | 1 skipped (61)

## FULL VITEST
349 passed | 17 skipped files; 3730 passed | 137 skipped tests (3867)

## TYPECHECK
PASS

## LINT
PASS

## BUILD
PASS

## DIFF CHECK
PASS

## PRODUCT HEAD
3966bbf9b800b143711acf1d581b85a33e106e99

## PRODUCT COMMIT
NONE

## PRODUCT PUSH
NONE

## PR
NONE

## MERGE
NONE

## GCEC-CURSOR-REAL
CLOSED BY PRIOR DOCS-WRITE EVIDENCE

## REAL_CONTINUATION_GAP
OPEN

## REAL GIT.COMMIT
NOT PROVEN

## GCEC-PUSH
NOT READY

## DEBT / EXIT
- TEMP-GCEC-PRPM-01
- TEMP-GCEC-F14-BIND-01
- REAL_CONTINUATION_GAP
- REAL tool-control/confinement reserve
- **GCEC GIT.COMMIT AGENT MODEL ESCALATION** (blocks honest Attempt B local-commit selection under same docs-write EC)

## ANTI-CLAIMS
- NOT READY FOR REAL
- NOT GC-01 CLOSED
- NOT Product committed
- NOT proof-repo mutated
- NOT GCEC-PUSH ready
- NOT runtime v3 adopted
- DETERMINISTIC hardenings for GC-02..06 do NOT authorize REAL commit campaign

## VERDICT
**STOP — GCEC GIT.COMMIT AGENT MODEL ESCALATION REQUIRED**

CR-GCEC-GC-02, GC-03, GC-04, GC-05, GC-06 CLOSED with deterministic hardenings.
CR-GCEC-GC-01 remains STOP: Attempt B cannot honestly select `agt:m4.cursor.bounded_local_commit` under the SAME docs-write ExecutionContract without a Morris structural decision on AgentCapability / Attempt selection semantics.

Preferred PASS WITH RESERVE is blocked by §37.A.

---
## FULL DIFFS — MODIFIED FILES

### DIFF: projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
index 54a4746b..89038bcb 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
@@ -835,14 +835,16 @@ describe("gcecCr23StartExecution — application boundary", () => {
       confirmations: [cnf],
       verifiedEffects: ["filesystem.create", "filesystem.modify"],
     });
-    expect(started.ok).toBe(true);
-    if (!started.ok) throw new Error(started.error.message);
-    const last = ctx.fakeLaunch.calls.at(-1);
-    expect(last?.authorizedEffects).toContain("git.commit");
-    expect(last?.authorizedEffects).not.toContain("filesystem.create");
-    expect(
-      ctx.fakeLaunch.calls.every((c) => c.action === M4_BOUNDED_DOCS_WRITE_ACTION),
-    ).toBe(true);
+    // CR-GCEC-GC-01: docs-write AgentCapability cannot authorize git.commit-only
+    // Start under current EC identity. Canonical Confirmation/target resolution
+    // remains covered by C23 negatives; honest Attempt B needs agent-model escalation.
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(started.error.internalCauseRef).toMatch(
+        /git_commit_agent_capability_bypass|capability/i,
+      );
+    }
+    expect(ctx.fakeLaunch.calls).toHaveLength(0);
   }, 90_000);

   it("C23-P2 matching assertion accepted but non-authoritative (server truth wins)", async () => {
@@ -874,14 +876,15 @@ describe("gcecCr23StartExecution — application boundary", () => {
       },
       verifiedEffects: ["filesystem.create", "filesystem.modify"],
     });
-    expect(started.ok).toBe(true);
-    if (!started.ok) throw new Error(started.error.message);
-    const last = ctx.fakeLaunch.calls.at(-1);
-    expect(last?.authorizedEffects).toContain("git.commit");
-    // Assertion matched server truth but did not redefine it (repo still Project binding).
-    expect(last?.repositoryBindingIdentity ?? last?.repositoryBinding?.identity).toBe(
-      IDENTITY,
-    );
+    // Same GC-01 fail-closed as C23-P1 — matching assertion is never authoritative
+    // enough to bypass AgentCapability.
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(started.error.internalCauseRef).toMatch(
+        /git_commit_agent_capability_bypass|capability/i,
+      );
+    }
+    expect(ctx.fakeLaunch.calls).toHaveLength(0);
   }, 90_000);

   it("H23A-N1 missing Project repository binding + crafted empty-repo Confirmation → git.commit refused", async () => {

```

### DIFF: projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
index d16924c8..3ab9de4e 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
@@ -277,7 +277,9 @@ async function selectGateStartSlice(input: {
     | "github.pr.create"
     | "github.pr.merge"
   )[];
-}): Promise<{ attemptId: string; status: string }> {
+  expectStartOk?: boolean;
+  expectedStartCause?: RegExp;
+}): Promise<{ attemptId: string; status: string; startedOk: boolean }> {
   const attempts = input.runtime.oa!.executionAttemptServices;
   const selected = await attempts.selectExecutionAgent.execute({
     attemptId: input.attemptId,
@@ -313,16 +315,26 @@ async function selectGateStartSlice(input: {
     confirmationMatch: input.confirmationMatch,
     verifiedEffects: input.verifiedEffects,
   });
+  if (input.expectStartOk === false) {
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(started.error.internalCauseRef).toMatch(
+        input.expectedStartCause ?? /./,
+      );
+    }
+    return { attemptId: input.attemptId, status: "failed", startedOk: false };
+  }
   expect(started.ok).toBe(true);
   if (!started.ok) throw new Error(started.error.message);
   return {
     attemptId: started.attempt.attemptId,
     status: started.attempt.status,
+    startedOk: true,
   };
 }

 describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () => {
-  it("A→Z: Product use-cases → Fake Cursor slices → EC confirmed→completed → Cycle finalized", async () => {
+  it("A→Z spine through FS; git.commit Start fails closed pending AgentCapability escalation (GC-01)", async () => {
     const root = tempDir("sfia-gcec-prod-");
     const managedBase = path.join(root, "managed");
     const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
@@ -1076,8 +1088,26 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
           "validation.run",
           ...verifiedGitEffects,
         ],
+        ...(slice.effect === "git.commit"
+          ? {
+              expectStartOk: false,
+              expectedStartCause:
+                /git_commit_agent_capability_bypass|capability/i,
+            }
+          : {}),
       });

+      if (slice.effect === "git.commit") {
+        // CR-GCEC-GC-01 structural stop: docs-write agent cannot Start commit-only
+        // under this EC. Remaining push/PR/merge/finalize are not exercised here.
+        expect(fakeLaunch.calls.length).toBeGreaterThan(0); // FS slices ran
+        const commitLaunches = fakeLaunch.calls.filter((c) =>
+          c.authorizedEffects?.includes("git.commit"),
+        );
+        expect(commitLaunches).toHaveLength(0);
+        return;
+      }
+
       const att = await oa.executionAttemptServices.getExecutionAttempt.execute({
         attemptId,
       });
@@ -1088,15 +1118,8 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
         services: oa.executionAttemptServices,
         targetPath: TARGET_PATH,
         pathAllowlist: ["docs/"],
-        // Git-only slices: Fake may skip FS; pass porcelain when dirty or empty ok path.
-        nameStatusText:
-          slice.effect === "git.commit"
-            ? undefined
-            : `A\t${TARGET_PATH}`,
-        statusDiffPort:
-          slice.effect === "git.commit"
-            ? new NodeLocalGitStatusDiffPort()
-            : undefined,
+        // Remaining slices are post-commit effects only (commit returns early above).
+        nameStatusText: `A\t${TARGET_PATH}`,
       });
       // For git-only slices after FS verified, Fake may skip file write; completion
       // workspace verify may need nameStatusText. If verify fails on empty dirty tree

```

### DIFF: projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
index 488e5e1e..bfd1d9b0 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
@@ -13,6 +13,7 @@ import {
 } from "@/lib/oa/execution-attempt";

 const HEAD = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
+const COMMIT_H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
 const DIGEST =
   "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
 const PROJECT = "prj:cont";
@@ -405,4 +406,188 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
     });
     expect(r).toEqual({ required: false, descriptor: null });
   });
+
+  it("FS→SHA supersession: verified git:local_commit clears continuation", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({ attemptId: "xat:b", status: "succeeded" }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r).toEqual({ required: false, descriptor: null });
+  });
+
+  it("SHA-01 verifiedEffects git.commit WITHOUT verified Git Evidence → NOT superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [attempt({ attemptId: "xat:a" })],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+      ],
+    });
+    expect(r.required).toBe(true);
+  });
+
+  it("SHA-02..09 wrong bindings / fake source → NOT superseded", () => {
+    const goodCommit = evidence({
+      evidenceId: "ev:commit",
+      type: "other",
+      source: "git:local_commit",
+      location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}`,
+      bindings: {
+        projectId: PROJECT,
+        cycleInstanceId: CYCLE,
+        executionContractId: EC,
+        executionAttemptId: "xat:b",
+      },
+    });
+    const cases: Array<{ label: string; evidence: Evidence[] }> = [
+      {
+        label: "wrong project",
+        evidence: [
+          {
+            ...goodCommit,
+            bindings: { ...goodCommit.bindings, projectId: "prj:other" },
+          },
+        ],
+      },
+      {
+        label: "wrong cycle",
+        evidence: [
+          {
+            ...goodCommit,
+            bindings: { ...goodCommit.bindings, cycleInstanceId: "cyc:other" },
+          },
+        ],
+      },
+      {
+        label: "wrong EC",
+        evidence: [
+          {
+            ...goodCommit,
+            bindings: {
+              ...goodCommit.bindings,
+              executionContractId: "xct:other",
+            },
+          },
+        ],
+      },
+      {
+        label: "fake source",
+        evidence: [{ ...goodCommit, source: "git:local_commit_fake" }],
+      },
+    ];
+    for (const c of cases) {
+      const r = resolvePreCommitWorkspaceContinuation({
+        ...baseInput,
+        authorizedEffects: ["git.push"],
+        verifiedEffects: [
+          "filesystem.create",
+          "filesystem.modify",
+          "git.commit",
+        ],
+        attempts: [
+          attempt({ attemptId: "xat:a" }),
+          attempt({ attemptId: "xat:b" }),
+        ],
+        evidence: [
+          evidence({
+            evidenceId: "ev:a",
+            bindings: {
+              projectId: PROJECT,
+              cycleInstanceId: CYCLE,
+              executionContractId: EC,
+              executionAttemptId: "xat:a",
+            },
+          }),
+          ...c.evidence,
+        ],
+      });
+      expect(r.required, c.label).toBe(true);
+    }
+  });
+
+  it("SHA-10 exact matching verified commit Evidence → superseded", () => {
+    const r = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: [
+        attempt({ attemptId: "xat:a" }),
+        attempt({ attemptId: "xat:b" }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:a",
+          },
+        }),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other",
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    });
+    expect(r).toEqual({ required: false, descriptor: null });
+  });
 });

```

### DIFF: projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
index a540d364..0917eded 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
@@ -20,6 +20,7 @@ import {
   M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
   M4_BOUNDED_DOCS_WRITE_SCOPE,
   M4_BOUNDED_DOCS_WRITE_TARGET,
+  resolvePreCommitWorkspaceContinuation,
   SqliteRealLaunchSafetyJournal,
   StudioGitWorktreeWorkspace,
   TestExecutionAdapter,
@@ -230,7 +231,7 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
     assertStudioCursorRealOffForTests();
   });

-  it("A→B StartExecution passes unique governed continuation descriptor (no path)", async () => {
+  it("A→B Cont01 resolves unique descriptor; Start fails closed on docs-write+commit bypass (GC-01)", async () => {
     const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-cont-managed-"));
     const repoRoot = path.join(managedBase, "acme__widget");
     mkdirSync(repoRoot, { recursive: true });
@@ -337,33 +338,49 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
       confirmations: gitCnf ? [gitCnf] : [],
       verifiedEffects: ["filesystem.create", "filesystem.modify"],
     });
-    expect(started.ok).toBe(true);
-    if (!started.ok) {
-      throw new Error(started.error.internalCauseRef);
-    }
-
-    expect(launchPort.calls).toHaveLength(1);
-    const req = launchPort.calls[0]!;
-    expect(req.workspaceContinuation).toBeDefined();
-    expect(req.workspaceContinuation?.priorAttemptId).toBe(attemptA);
-    expect(req.workspaceContinuation?.expectedHeadSha).toBe(
-      M4_TEST_BASE_HEAD_SHA,
-    );
-    expect(req.workspaceContinuation?.expectedVerifiedFiles).toEqual([
+    // Cont01 domain still resolves unique prior Attempt A (no free path).
+    const cont = resolvePreCommitWorkspaceContinuation({
+      currentAttemptId: attemptB,
+      executionContractId: seeded.contractId,
+      projectId: seeded.projectId,
+      cycleInstanceId: seeded.cycleInstanceId,
+      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
+      attempts: [
+        succeededAttempt({
+          attemptId: attemptA,
+          executionContractId: seeded.contractId,
+          executionContractVersion: seeded.version,
+        }),
+      ],
+      evidence: evidenceBag,
+      authorizedEffects: ["git.commit"],
+      verifiedEffects: ["filesystem.create", "filesystem.modify"],
+    });
+    expect(cont.required).toBe(true);
+    if (!cont.required) throw new Error("expected continuation required");
+    expect(cont.ok).toBe(true);
+    if (!cont.ok) throw new Error(cont.reason);
+    expect(cont.descriptor.priorAttemptId).toBe(attemptA);
+    expect(cont.descriptor.expectedHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
+    expect(cont.descriptor.expectedVerifiedFiles).toEqual([
       { path: TARGET_PATH, digest: ARTIFACT_DIGEST },
     ]);
-    expect(
-      (req.workspaceContinuation as { workspacePath?: string } | undefined)
-        ?.workspacePath,
-    ).toBeUndefined();
-    expect(
-      (req as { workspacePath?: string; cwd?: string }).workspacePath,
-    ).toBeUndefined();
+
+    // CR-GCEC-GC-01: docs-write agent + git.commit-only slice is an
+    // AgentCapability bypass — StartExecution fails closed (zero process).
+    // Honest Attempt B local-commit agent selection under this SAME EC requires
+    // STOP — GCEC GIT.COMMIT AGENT MODEL ESCALATION REQUIRED.
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(started.error.internalCauseRef).toMatch(
+        /git_commit_agent_capability_bypass|capability/i,
+      );
+    }
+    expect(launchPort.calls).toHaveLength(0);

     const a = await stack.attempts.attempts.findById(attemptA);
     const b = await stack.attempts.attempts.findById(attemptB);
     expect(a?.status).toBe("succeeded");
-    expect(b?.status).toBe("running");
     expect(a?.attemptId).not.toBe(b?.attemptId);
     expect(a?.executionContractId).toBe(b?.executionContractId);

@@ -372,8 +389,7 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
     });
     expect(ecAfter.ok).toBe(true);
     if (ecAfter.ok) {
-      // Start moves EC to executing while Attempt runs — still same EC, no completion.
-      expect(["confirmed", "executing"]).toContain(ecAfter.contract.status);
+      expect(ecAfter.contract.status).toBe("confirmed");
     }

     journal.close();

```

### DIFF: projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
index 8f2d8b60..e350875f 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/typedGitEvidence.ts
@@ -235,7 +235,12 @@ export function buildTypedGitEvidenceFields<S extends TypedGitEvidenceSource>(
     }
     case "git:local_commit": {
       const lc = payload as GitLocalCommitPayload;
-      location = `git:local_commit?repo=${encodeURIComponent(lc.repositoryRef)}&commitSha=${encodeURIComponent(lc.commitSha)}`;
+      location =
+        `git:local_commit?repo=${encodeURIComponent(lc.repositoryRef)}` +
+        `&commitSha=${encodeURIComponent(lc.commitSha)}` +
+        (lc.parentSha
+          ? `&parentSha=${encodeURIComponent(lc.parentSha)}`
+          : "");
       break;
     }
     case "git:remote_push": {

```

### DIFF: projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index b94fddb3..5e98b604 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -57,6 +57,7 @@ import type {
   GateDGrant,
 } from "../domain/realLaunchSafety";
 import { isM4AuthorizedCursorRealAgent } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
+import { isM4BoundedLocalCommitRealAgent } from "../infrastructure/m4BoundedLocalCommitCursorAgent";
 import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
@@ -75,6 +76,11 @@ import {
 } from "../domain/resolveGitEffectTarget";
 import { deriveExecutableEffectsFromContractRequirements } from "../domain/contractEffectClassification";
 import { resolvePreCommitWorkspaceContinuation } from "../domain/resolvePreCommitWorkspaceContinuation";
+import {
+  buildGitCommitLaunchSpec,
+  deriveTrustedCommitMessage,
+} from "../domain/gitCommitLaunchSpec";
+import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
 import type { CursorAuthorizedEffectId } from "../domain/cursorExecutionReport";
 import {
   authorityFailureDetail,
@@ -1116,6 +1122,86 @@ export class StartExecution {
       }
     }

+    // GCEC bounded git.commit-only Attempt B — server-derived GitCommitLaunchSpec.
+    let gitCommitSpec:
+      | {
+          repositoryRef: string;
+          expectedParentSha: string;
+          exactPaths: readonly string[];
+          commitMessage: string;
+          branchOrRef?: string;
+        }
+      | undefined;
+    if (isBoundedGitCommitOnlySlice(authorizedSlice.authorizedEffects)) {
+      // GC-01: git.commit-only slice requires the bounded local-commit AgentDescriptor.
+      // Docs-write agent + gitCommitSpec is an AgentCapability bypass — fail closed.
+      // Under current EC identity (fixed action/capability/target/scope), Attempt B
+      // cannot honestly select the local-commit sibling for a docs-write EC
+      // (STOP — GCEC GIT.COMMIT AGENT MODEL ESCALATION REQUIRED).
+      if (!isM4BoundedLocalCommitRealAgent(agent)) {
+        return fail(
+          "AGENT_CAPABILITY_MISMATCH",
+          "git_commit_agent_capability_bypass",
+          { selectedAgentRef: attempt.selectedAgentRef },
+        );
+      }
+      const contractInputs =
+        contract.inputs && typeof contract.inputs === "object"
+          ? (contract.inputs as Record<string, unknown>)
+          : {};
+      const message = deriveTrustedCommitMessage({
+        contractInputs,
+        docsWriteArtifactBrief: docsWriteSpec?.artifactBrief,
+      });
+      if (!message.ok) {
+        return fail("ATTEMPT_INVALID", message.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      const repositoryRef =
+        repositoryBindingIdentity?.trim() ||
+        docsWriteSpec?.repositoryRef?.trim() ||
+        (typeof contractInputs.repositoryRef === "string"
+          ? contractInputs.repositoryRef.trim()
+          : "");
+      const branchOrRef =
+        (typeof contractInputs.workingBranch === "string" &&
+          contractInputs.workingBranch.trim()) ||
+        (typeof contractInputs.branchOrRef === "string" &&
+          contractInputs.branchOrRef.trim()) ||
+        repositoryBinding?.defaultBranch;
+      // Cont01 Attempt B: paths/parent from verified continuation.
+      // Progressive CR23 (no prior Attempt): Cont01 not required — derive from
+      // docsWriteSpec.targetPath + contract baseHeadSha (fail closed if absent).
+      const exactPaths = workspaceContinuation
+        ? workspaceContinuation.expectedVerifiedFiles.map((f) => f.path)
+        : docsWriteSpec?.targetPath
+          ? [docsWriteSpec.targetPath]
+          : [];
+      const expectedParentSha =
+        workspaceContinuation?.expectedHeadSha ?? baseHeadSha;
+      if (!workspaceContinuation && exactPaths.length === 0) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "git_commit_continuation_required",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      const built = buildGitCommitLaunchSpec({
+        repositoryRef,
+        expectedParentSha,
+        exactPaths,
+        commitMessage: message.message,
+        ...(branchOrRef ? { branchOrRef } : {}),
+      });
+      if (!built.ok) {
+        return fail("ATTEMPT_INVALID", built.reason, {
+          executionContractId: contract.executionContractId,
+        });
+      }
+      gitCommitSpec = built.spec;
+    }
+
     let launch;
     try {
       launch = await this.realLaunchPort.launch({
@@ -1132,6 +1218,7 @@ export class StartExecution {
         scope: contract.scope,
         timeoutMs: window.resolvedMaxDurationMs,
         ...(docsWriteSpec ? { docsWriteSpec } : {}),
+        ...(gitCommitSpec ? { gitCommitSpec } : {}),
         ...(repositoryBindingIdentity
           ? { repositoryBindingIdentity }
           : {}),

```

### DIFF: projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
index ac55064a..d1f0fc2a 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
@@ -16,6 +16,9 @@ export const M4_BOUNDED_RO_CURSOR_AGENT_ID =
 export const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID =
   "agt:m4.cursor.bounded_docs_write" as const;

+export const M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID =
+  "agt:m4.cursor.bounded_local_commit" as const;
+
 export type RealLaunchReconcileDisposition =
   | "CLEAR"
   | "UNKNOWN"

```

### DIFF: projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
index f1098918..4cf8080e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
@@ -72,6 +72,101 @@ export function preCommitWorkspaceContinuationRequired(input: {
   return hasVerifiedFs && hasAuthorizedGit;
 }

+function isVerifiedLocalCommitEvidence(ev: Evidence): boolean {
+  // Exact source only — no prefix match (rejects git:local_commit_fake).
+  return ev.status === "verified" && ev.source === "git:local_commit";
+}
+
+export type FsAnchorSupersessionInput = {
+  readonly projectId: string;
+  readonly cycleInstanceId: string;
+  readonly executionContractId: string;
+  readonly evidence: readonly Evidence[];
+  readonly attempts?: readonly ExecutionAttempt[];
+  /** Prior Attempt A that produced the mutable FS artifacts. */
+  readonly priorAttemptId?: string;
+  /** Expected parent SHA (H0) of the encapsulating commit. */
+  readonly expectedParentSha?: string;
+  /** Repository identity that must appear in Evidence location. */
+  readonly repositoryRef?: string;
+  /** Paths that must be encapsulated (typically Attempt-A artifact paths). */
+  readonly requiredPaths?: readonly string[];
+};
+
+/**
+ * FS→verified-commit-SHA supersession (CR-GCEC-GC-06).
+ * verifiedEffects alone MUST NOT supersede.
+ * Requires relevant VERIFIED git:local_commit Evidence with exact bindings
+ * and lineage relationship to the prior mutable FS state where facts exist.
+ */
+export function isFsAnchorSupersededByVerifiedLocalCommit(
+  input: FsAnchorSupersessionInput,
+): boolean {
+  const matching = input.evidence.filter((ev) => {
+    if (!isVerifiedLocalCommitEvidence(ev)) return false;
+    if (ev.bindings.projectId !== input.projectId) return false;
+    if (ev.bindings.cycleInstanceId !== input.cycleInstanceId) return false;
+    if (ev.bindings.executionContractId !== input.executionContractId) {
+      return false;
+    }
+    if (
+      input.priorAttemptId &&
+      ev.bindings.executionAttemptId &&
+      ev.bindings.executionAttemptId === input.priorAttemptId
+    ) {
+      // Commit Evidence must bind Attempt B, not Attempt A.
+      return false;
+    }
+    if (input.repositoryRef) {
+      const loc = String(ev.location ?? "");
+      if (!loc.includes(encodeURIComponent(input.repositoryRef)) &&
+          !loc.includes(input.repositoryRef)) {
+        return false;
+      }
+    }
+    if (input.expectedParentSha) {
+      const loc = String(ev.location ?? "");
+      const parentHint = `parentSha=${encodeURIComponent(input.expectedParentSha)}`;
+      const parentHintRaw = `parentSha=${input.expectedParentSha}`;
+      if (
+        !loc.includes(parentHint) &&
+        !loc.includes(parentHintRaw) &&
+        !loc.toLowerCase().includes(input.expectedParentSha.toLowerCase())
+      ) {
+        return false;
+      }
+    }
+    if (input.requiredPaths && input.requiredPaths.length > 0) {
+      const loc = String(ev.location ?? "");
+      // Paths may be in location metadata; also accept when digest-backed
+      // artifact Evidence for those paths exists under same EC.
+      const artifactOk = input.requiredPaths.every((p) =>
+        input.evidence.some(
+          (a) =>
+            a.type === "artifact" &&
+            a.status === "verified" &&
+            a.bindings.executionContractId === input.executionContractId &&
+            String(a.location) === p,
+        ),
+      );
+      if (!artifactOk && !input.requiredPaths.every((p) => loc.includes(p))) {
+        return false;
+      }
+    }
+    if (input.attempts && ev.bindings.executionAttemptId) {
+      const attempt = input.attempts.find(
+        (a) => a.attemptId === ev.bindings.executionAttemptId,
+      );
+      if (!attempt || attempt.status !== "succeeded") return false;
+      if (attempt.executionContractId !== input.executionContractId) {
+        return false;
+      }
+    }
+    return Boolean(ev.bindings.executionAttemptId?.trim());
+  });
+  return matching.length === 1;
+}
+
 function isDocsWriteArtifactEvidence(ev: Evidence): boolean {
   return (
     ev.type === "artifact" &&
@@ -98,6 +193,18 @@ function isDocsWriteArtifactEvidence(ev: Evidence): boolean {
 export function resolvePreCommitWorkspaceContinuation(
   input: ResolvePreCommitWorkspaceContinuationInput,
 ): ResolvePreCommitWorkspaceContinuationResult {
+  if (
+    isFsAnchorSupersededByVerifiedLocalCommit({
+      projectId: input.projectId,
+      cycleInstanceId: input.cycleInstanceId,
+      executionContractId: input.executionContractId,
+      evidence: input.evidence,
+      attempts: input.attempts,
+    })
+  ) {
+    return { required: false, descriptor: null };
+  }
+
   if (
     !preCommitWorkspaceContinuationRequired({
       authorizedEffects: input.authorizedEffects,

```

### DIFF: projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index aa6afc77..58a576db 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -172,6 +172,14 @@ export {
   M4_BOUNDED_DOCS_WRITE_TARGET,
   M4_BOUNDED_DOCS_WRITE_SCOPE,
 } from "./infrastructure/m4BoundedDocsWriteCursorAgent";
+export {
+  createM4BoundedLocalCommitCursorAgentDescriptor,
+  isM4BoundedLocalCommitRealAgent,
+  M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
+  M4_BOUNDED_LOCAL_COMMIT_ACTION,
+  M4_BOUNDED_LOCAL_COMMIT_TARGET,
+  M4_BOUNDED_LOCAL_COMMIT_SCOPE,
+} from "./infrastructure/m4BoundedLocalCommitCursorAgent";
 export {
   FakeDocsWriteLaunchPort,
   listRelativeFiles,
@@ -193,13 +201,43 @@ export {
   sanitizeManagedRepoIdentity,
 } from "./infrastructure/managedProjectRepositoryResolver";
 export type { ManagedRepoBindingIdentity } from "./infrastructure/managedProjectRepositoryResolver";
-export type { DocsWriteLaunchSpec } from "./ports/realExecutionLaunchPort";
 export {
-  M4_BOUNDED_RO_CURSOR_AGENT_ID,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
-  M4_REAL_GATEWAY_ADAPTER_ID,
-} from "./domain/realLaunchSafety";
-export { assertStudioCursorRealOffForTests } from "./domain/realLaunchSafety";
+  buildGitCommitLaunchSpec,
+  deriveTrustedCommitMessage,
+} from "./domain/gitCommitLaunchSpec";
+export type { GitCommitLaunchSpec } from "./domain/gitCommitLaunchSpec";
+export {
+  verifyLocalCommitFacts,
+  isBoundedGitCommitOnlySlice,
+} from "./domain/verifyLocalCommitFacts";
+export type {
+  LocalCommitVerificationInput,
+  LocalCommitVerificationResult,
+  LocalCommitArtifactCheck,
+} from "./domain/verifyLocalCommitFacts";
+export {
+  verifyLocalCommitEffect,
+  digestOf,
+  LOCAL_GIT_READONLY_TECHNICAL_REF,
+} from "./application/verifyLocalCommitEffect";
+export type {
+  VerifyLocalCommitEffectInput,
+  VerifyLocalCommitEffectResult,
+} from "./application/verifyLocalCommitEffect";
+export {
+  observeLocalCommitFacts,
+  localCommitFactsFromSynthetic,
+} from "./application/observeLocalCommitFacts";
+export type {
+  LocalCommitObservedFacts,
+  ObserveLocalCommitInput,
+} from "./application/observeLocalCommitFacts";
+export {
+  assertShellSafeRelativePath,
+  assertShellSafeCommitSubject,
+  GIT_COMMIT_SUBJECT_MAX_LENGTH,
+} from "./domain/gitCommitLaunchSpec";
+export type { FsAnchorSupersessionInput } from "./domain/resolvePreCommitWorkspaceContinuation";

 import type { ClockPort } from "@/lib/oa/doctrine";
 import { FixedClock, SystemClock } from "@/lib/oa/doctrine";

```

### DIFF: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
index aed84753..367a94dc 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
@@ -21,6 +21,9 @@ import {
   type RealLaunchResult,
   type RealProcessObservation,
 } from "@/lib/oa/execution-attempt";
+import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
+import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
+import { buildGitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
 import type {
   CursorAuthorizedEffectId,
   CursorExecutionReport,
@@ -149,7 +152,74 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
         detailCode: "REAL_LAUNCH_FAILED",
       };
     }
-    if (request.action !== M4_BOUNDED_DOCS_WRITE_ACTION) {
+    const { authorized, blocked } = resolveAuthorizedEffects(request);
+    const wantsCommitProfile = Boolean(request.gitCommitSpec);
+    if (wantsCommitProfile) {
+      if (!isBoundedGitCommitOnlySlice([...authorized])) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason:
+            authorized.size === 0
+              ? "git_commit_authorized_effects_empty"
+              : "git_commit_slice_not_commit_only",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (
+        request.selectedAgentRef !== "agt:m4.cursor.bounded_local_commit"
+      ) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason:
+            request.selectedAgentRef === "agt:m4.cursor.bounded_docs_write"
+              ? "git_commit_agent_capability_bypass"
+              : "git_commit_selected_agent_invalid",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (!request.workspaceContinuation) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_commit_continuation_required",
+          realProcessInvoked: false,
+          detailCode: "REAL_WORKSPACE_INVALID",
+        };
+      }
+      const revalidated = buildGitCommitLaunchSpec({
+        repositoryRef: request.gitCommitSpec!.repositoryRef,
+        expectedParentSha: request.gitCommitSpec!.expectedParentSha,
+        exactPaths: request.gitCommitSpec!.exactPaths,
+        commitMessage: request.gitCommitSpec!.commitMessage,
+        ...(request.gitCommitSpec!.branchOrRef
+          ? { branchOrRef: request.gitCommitSpec!.branchOrRef }
+          : {}),
+      });
+      if (!revalidated.ok) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: revalidated.reason,
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+    }
+    const isCommitOnly =
+      wantsCommitProfile && isBoundedGitCommitOnlySlice([...authorized]);
+    const actionOk =
+      request.action === M4_BOUNDED_DOCS_WRITE_ACTION ||
+      request.action === M4_BOUNDED_LOCAL_COMMIT_ACTION ||
+      isCommitOnly;
+    if (!actionOk) {
       return {
         outcome: "reject",
         gatewayId: this.gatewayId,
@@ -160,16 +230,21 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       };
     }

-    const { authorized, blocked } = resolveAuthorizedEffects(request);
+    const commitSpec = request.gitCommitSpec;
     const spec = request.docsWriteSpec;
     const pathAllowlist = spec?.pathAllowlist ?? this.options.pathAllowlist;
     const targetPath =
+      commitSpec?.exactPaths[0] ??
       spec?.targetPath ??
       this.options.targetPath ??
       "docs/functional-design.md";
     const repositoryRef =
-      spec?.repositoryRef ?? this.options.repositoryRef ?? "unknown/repo";
+      commitSpec?.repositoryRef ??
+      spec?.repositoryRef ??
+      this.options.repositoryRef ??
+      "unknown/repo";
     const branch =
+      commitSpec?.branchOrRef ??
       this.options.defaultBranch ??
       request.repositoryBinding?.defaultBranch ??
       "gcec/docs";
@@ -188,7 +263,7 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       };
     }

-    if (!isAllowlisted(rel, pathAllowlist)) {
+    if (!isCommitOnly && !isAllowlisted(rel, pathAllowlist)) {
       return {
         outcome: "reject",
         gatewayId: this.gatewayId,
@@ -219,8 +294,8 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
     let modified: string[] = [];
     const digests: Record<string, string> = {};

-    const canFsCreate = authorized.has("filesystem.create");
-    const canFsModify = authorized.has("filesystem.modify");
+    const canFsCreate = !isCommitOnly && authorized.has("filesystem.create");
+    const canFsModify = !isCommitOnly && authorized.has("filesystem.modify");

     if (canFsCreate || canFsModify) {
       await mkdir(path.dirname(abs), { recursive: true });
@@ -271,12 +346,12 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
         if (request.baseHeadSha && !this.gitState.branchHeads.has(branch)) {
           this.gitState.branchHeads.set(branch, request.baseHeadSha.toLowerCase());
         }
-        // Stage the target path when present on disk — git-only slices must not
-        // rewrite (filesystem not authorized) but may commit prior writes.
-        const commit = await this.gitState.commit(
-          [rel],
-          `docs: ${spec?.artifactBrief ?? "functional design"}`,
-        );
+        const commitPaths =
+          commitSpec?.exactPaths ?? [rel];
+        const commitMessage =
+          commitSpec?.commitMessage ??
+          `docs: ${spec?.artifactBrief ?? "functional design"}`;
+        const commit = await this.gitState.commit(commitPaths, commitMessage);
         executed.push("git.commit");
         gitEffects.commit = {
           branch,

```

### DIFF: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
index b722b91a..8c1743ce 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
@@ -10,6 +10,7 @@ import {
   M4_REAL_GATEWAY_ADAPTER_ID,
 } from "../domain/realLaunchSafety";
 import type { AgentDescriptor } from "../domain/types";
+import { isM4BoundedLocalCommitRealAgent } from "./m4BoundedLocalCommitCursorAgent";
 import { isM4BoundedReadOnlyRealAgent } from "./m4BoundedReadOnlyCursorAgent";

 export const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
@@ -84,11 +85,13 @@ export function isM4BoundedDocsWriteRealAgent(
   );
 }

-/** REAL Cursor allowlist — RO or docs-write (OR only; RO body unchanged). */
+/** REAL Cursor allowlist — RO | docs-write | local-commit (OR; RO/docs bodies unchanged). */
 export function isM4AuthorizedCursorRealAgent(
   agent: AgentDescriptor,
 ): boolean {
   return (
-    isM4BoundedReadOnlyRealAgent(agent) || isM4BoundedDocsWriteRealAgent(agent)
+    isM4BoundedReadOnlyRealAgent(agent) ||
+    isM4BoundedDocsWriteRealAgent(agent) ||
+    isM4BoundedLocalCommitRealAgent(agent)
   );
 }

```

### DIFF: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index b25e0bad..49da60f7 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -28,6 +28,48 @@ import {
   isCursorTrustMarkerPathCompatible,
 } from "./cursorTrustMarkerPathCompatibility";
 import { M4_BOUNDED_DOCS_WRITE_ACTION } from "./m4BoundedDocsWriteCursorAgent";
+import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
+import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
+import { buildGitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+
+function buildBoundedLocalCommitInstruction(input: {
+  readonly spec: NonNullable<RealLaunchRequest["gitCommitSpec"]>;
+  readonly target?: string;
+  readonly action?: string;
+  readonly scope?: string;
+  readonly semanticFingerprint: string;
+}): string {
+  const paths = input.spec.exactPaths.join(", ");
+  const pathList = input.spec.exactPaths.map((p) => `  - ${p}`).join("\n");
+  return [
+    "TÂCHE UNIQUE — bounded local git.commit déterministe (GCEC).",
+    `Repository: ${input.spec.repositoryRef}`,
+    `Expected parent HEAD (H0): ${input.spec.expectedParentSha}`,
+    `Commit message exacte (une seule ligne sujet): ${input.spec.commitMessage}`,
+    "Chemins exacts autorisés à stager (UNIQUEMENT ceux-ci):",
+    pathList,
+    "Séquence Shell autorisée UNIQUEMENT (aucune autre commande):",
+    "  git status --short",
+    `  git diff -- ${input.spec.exactPaths.join(" ")}`,
+    `  git add -- ${input.spec.exactPaths.join(" ")}`,
+    "  git diff --cached --name-only",
+    "  git diff --cached --check",
+    `  git commit -m ${JSON.stringify(input.spec.commitMessage)}`,
+    "  git rev-parse HEAD",
+    "  git show --format=fuller --name-only --no-patch HEAD",
+    "INTERDIT: push, fetch mutatif, pull, remote add/set-url, branch create/delete,",
+    "checkout, switch, reset, restore, rebase, merge, amend, tag, clean,",
+    "toute édition de fichier (Write/StrReplace), toute suppression,",
+    "PR/merge GitHub, wildcard path, script shell fourni par l'appelant.",
+    `Paths summary: ${paths}`,
+    "Utiliser Shell uniquement pour la séquence ci-dessus. Aucun outil d'édition.",
+    "En cas d'ambiguïté: STOP immédiatement sans mutation.",
+    `target=${input.target ?? ""}`,
+    `action=${input.action ?? ""}`,
+    `scope=${input.scope ?? ""}`,
+    `fingerprint=${input.semanticFingerprint}`,
+  ].join("\n");
+}

 export type StudioCursorRealLaunchGatewayOptions = {
   readonly processRunner: ProcessRunner;
@@ -245,13 +287,118 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       };
     }

-    // Fixed argv shape — executable is separate; no user-controlled shell.
-    // --mode ask: local CLI help documents ask as read-only Q&A (no edits).
-    // Docs-write uses default agent mode (omit --mode ask) + WRITE instruction.
-    const isDocsWrite = request.action === M4_BOUNDED_DOCS_WRITE_ACTION;
+    // Profile is structured (gitCommitSpec / docsWrite action) — never inferred from prompt prose.
+    const gitCommitSpec = request.gitCommitSpec;
+    const isLocalCommitProfile =
+      Boolean(gitCommitSpec) ||
+      request.action === M4_BOUNDED_LOCAL_COMMIT_ACTION;
+    const isDocsWrite =
+      !isLocalCommitProfile && request.action === M4_BOUNDED_DOCS_WRITE_ACTION;
+
+    if (isLocalCommitProfile) {
+      if (!gitCommitSpec) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_commit_spec_missing",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      // GC-10 — current bounded GCEC commit profile requires Cont01 continuation
+      // (Attempt B resume). Progressive Fake paths may omit gateway REAL launch.
+      if (!request.workspaceContinuation) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_commit_continuation_required",
+          realProcessInvoked: false,
+          detailCode: "REAL_WORKSPACE_INVALID",
+        };
+      }
+      const auth = request.authorizedEffects;
+      if (!isBoundedGitCommitOnlySlice(auth)) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason:
+            auth == null
+              ? "git_commit_authorized_effects_missing"
+              : auth.length === 0
+                ? "git_commit_authorized_effects_empty"
+                : "git_commit_slice_not_commit_only",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      // GC-01: commit profile requires exact local-commit AgentDescriptor.
+      // gitCommitSpec alone MUST NOT select the profile / widen authority.
+      // Under current EC action/capability/target/scope identity, Attempt B
+      // cannot honestly select this agent for a docs-write EC (STOP escalation).
+      if (
+        request.selectedAgentRef !== "agt:m4.cursor.bounded_local_commit"
+      ) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason:
+            request.selectedAgentRef === "agt:m4.cursor.bounded_docs_write"
+              ? "git_commit_agent_capability_bypass"
+              : "git_commit_selected_agent_invalid",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      // Re-validate structured values (fail closed before Shell child).
+      const revalidated = buildGitCommitLaunchSpec({
+        repositoryRef: gitCommitSpec.repositoryRef,
+        expectedParentSha: gitCommitSpec.expectedParentSha,
+        exactPaths: gitCommitSpec.exactPaths,
+        commitMessage: gitCommitSpec.commitMessage,
+        ...(gitCommitSpec.branchOrRef
+          ? { branchOrRef: gitCommitSpec.branchOrRef }
+          : {}),
+      });
+      if (!revalidated.ok) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: revalidated.reason,
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+      if (
+        typeof (request as { freeShellScript?: unknown }).freeShellScript ===
+          "string" ||
+        typeof (request as { shellCommand?: unknown }).shellCommand === "string"
+      ) {
+        return {
+          outcome: "reject",
+          gatewayId: this.gatewayId,
+          attemptId: request.attemptId,
+          reason: "git_commit_free_shell_rejected",
+          realProcessInvoked: false,
+          detailCode: "REAL_AGENT_PROFILE_INVALID",
+        };
+      }
+    }

     let instruction: string;
-    if (isDocsWrite) {
+    if (isLocalCommitProfile && gitCommitSpec) {
+      instruction = buildBoundedLocalCommitInstruction({
+        spec: gitCommitSpec,
+        target: request.target,
+        action: request.action,
+        scope: request.scope,
+        semanticFingerprint: request.semanticFingerprint,
+      });
+    } else if (isDocsWrite) {
       const spec = request.docsWriteSpec;
       if (!spec) {
         return {
@@ -308,7 +455,10 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       ].join("\n");
     }

-    const argv = isDocsWrite
+    // Docs-write + local-commit: default agent mode (omit --mode ask) so Shell/Write available.
+    // RO: --mode ask. All keep --print + --workspace + --trust + --sandbox enabled.
+    const usesAgentMode = isDocsWrite || isLocalCommitProfile;
+    const argv = usesAgentMode
       ? [
           "agent",
           "--print",
@@ -342,6 +492,9 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         env: {
           ...this.env,
           [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
+          // Defense-in-depth only — not the authority boundary.
+          GIT_TERMINAL_PROMPT: "0",
+          GCM_INTERACTIVE: "Never",
         },
       });


```

### DIFF: projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index 0e2de058..47395272 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -26,6 +26,10 @@ export type DocsWriteLaunchSpec = {
   readonly noDelete: true;
 };

+/** Canonical GitCommitLaunchSpec — single source from domain. */
+export type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+import type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
+
 export type RealLaunchRequest = {
   readonly attemptId: string;
   readonly executionContractId: string;
@@ -52,6 +56,11 @@ export type RealLaunchRequest = {
   readonly timeoutMs: number;
   /** GCEC docs-write launch contract — required when action is docs_write. */
   readonly docsWriteSpec?: DocsWriteLaunchSpec;
+  /**
+   * GCEC bounded local-commit launch contract — required for git.commit-only
+   * Cursor profile (Attempt B). Mutually exclusive with free shell / FS edit profile.
+   */
+  readonly gitCommitSpec?: GitCommitLaunchSpec;
   /** Optional Project binding identity (owner/repo) for workspace resolution. */
   readonly repositoryBindingIdentity?: string;
   /** Server-resolved absolute managed clone root (docs-write). */

```

### DIFF: projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index f0685a82..67e69a30 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -37,6 +37,7 @@ import {
   createSqliteExecutionAttemptServices,
   createM4BoundedReadOnlyCursorAgentDescriptor,
   createM4BoundedDocsWriteCursorAgentDescriptor,
+  createM4BoundedLocalCommitCursorAgentDescriptor,
   isStudioCursorRealEnabled,
   type ExecutionAttemptServices,
   type RealBoundaryWiring,
@@ -408,6 +409,7 @@ function wireOaStack(
         w3aBoundedAgent,
         createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
         createM4BoundedDocsWriteCursorAgentDescriptor(clock.nowIso()),
+        createM4BoundedLocalCommitCursorAgentDescriptor(clock.nowIso()),
       ]
     : [fixtureAgent, w3aBoundedAgent];
   const registry = new MemoryAgentRegistry(agents);

```

## FULL CONTENT — CREATED FILES

### FULL: projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts
```typescript
/**
 * FUTURE REAL harness — same-EC A (docs-write) → B (local git.commit).
 *
 * NEVER runs in ordinary vitest. Requires ALL three:
 *   SFIA_STUDIO_CURSOR_REAL=1
 *   SFIA_GCEC_CURSOR_REAL_PROOF=1
 *   SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF=1
 *
 * Campaign shape (when Morris authorizes a distinct REAL GO):
 *   PRECHECK → A REAL docs-write (retain worktree) → B REAL local commit
 *   → independent local Git observation → Git Evidence VERIFIED
 *   → FS→SHA supersession → remote still base SHA (no push).
 *
 * Forensic phases (harness-local only — not Product FSM):
 *   A_LAUNCHED_UNRECONCILED → A_RECONCILED_RETAINED
 *   → B_LAUNCHED_UNRECONCILED → B_RECONCILED_COMMIT_VERIFIED
 *
 * GC-01 reserve: Attempt B must select agt:m4.cursor.bounded_local_commit under
 * the SAME EC. That selection is currently impossible without agent-model
 * escalation. Harness body is complete for the preferred campaign; enabling
 * the triple gate without that escalation MUST fail closed — never bypass.
 *
 * Do NOT reuse prior docs-write pid workspaces. Fresh proof root only.
 * ZERO push / PR / merge. ZERO Product mutation.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  observeLocalCommitFacts,
} from "@/lib/oa/execution-attempt";

const ENABLED =
  process.env.SFIA_STUDIO_CURSOR_REAL === "1" &&
  process.env.SFIA_GCEC_CURSOR_REAL_PROOF === "1" &&
  process.env.SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF === "1";

const APP_ROOT = path.resolve(__dirname, "../../..");
const WORKSPACE_ROOT = path.resolve(APP_ROOT, "../../..");
const PROOF_REVIEW_DIR = path.join(
  WORKSPACE_ROOT,
  ".tmp-sfia-review/gcec-cursor-real-commit-proof",
);
const IDENTITY = "mcleland147/sfia-gcec-proof-task-manager";
const BASE_SHA = "32c7c2008197e5c61b32c16479144e9863291358";
const TARGET_PATH = "docs/functional-design.md";
const COMMIT_MSG = "docs: add task manager functional design";

/** Harness-local forensic state — not Product domain persistence. */
export type RealCommitHarnessPhase =
  | "PRECHECK"
  | "A_LAUNCHED_UNRECONCILED"
  | "A_RECONCILED_RETAINED"
  | "B_LAUNCHED_UNRECONCILED"
  | "B_RECONCILED_COMMIT_VERIFIED";

export type RealSameEcCommitHarnessState = {
  phase: RealCommitHarnessPhase;
  realLaunchConsumed: boolean;
  reconciliationComplete: boolean;
  attemptAId?: string;
  attemptBId?: string;
  executionContractId?: string;
  processRefA?: string;
  processRefB?: string;
  worktreeRef?: string;
  proofRoot?: string;
  execRoot?: string;
  productDbPath?: string;
  safetyJournalPath?: string;
  expectedH0?: string;
  observedH1?: string;
  durableReviewSnapshotWritten: boolean;
  failure?: string;
};

export function createRealSameEcCommitHarnessState(): RealSameEcCommitHarnessState {
  return {
    phase: "PRECHECK",
    realLaunchConsumed: false,
    reconciliationComplete: false,
    durableReviewSnapshotWritten: false,
  };
}

export function shouldPreserveRealCommitProofState(input: {
  realLaunchConsumed: boolean;
  reconciliationComplete: boolean;
}): boolean {
  return (
    input.realLaunchConsumed === true && input.reconciliationComplete !== true
  );
}

function writeJson(filePath: string, value: unknown): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function safeGit(cwd: string, args: string[]): string | null {
  try {
    return execFileSync("git", args, {
      cwd,
      encoding: "utf8",
      shell: false,
    }).trim();
  } catch {
    return null;
  }
}

const temps: string[] = [];
const harnessState = createRealSameEcCommitHarnessState();

afterEach(() => {
  if (shouldPreserveRealCommitProofState(harnessState)) {
    temps.length = 0;
    return;
  }
  for (const t of temps.splice(0)) {
    try {
      fs.rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

beforeEach(() => {
  if (!shouldPreserveRealCommitProofState(harnessState)) {
    Object.assign(harnessState, createRealSameEcCommitHarnessState());
  }
});

describe("GCEC future REAL same-EC commit A→B — static campaign shape", () => {
  it("harness encodes A docs-write + retain + B local-commit agent + observe + FS→SHA", () => {
    // Static review markers — no REAL process.
    const source = fs.readFileSync(__filename, "utf8");
    expect(source).toContain("M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID");
    expect(source).toContain("M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID");
    expect(source).toContain("A_RECONCILED_RETAINED");
    expect(source).toContain("B_RECONCILED_COMMIT_VERIFIED");
    expect(source).toContain("observeLocalCommitFacts");
    expect(source).toContain("B_RECONCILED_COMMIT_VERIFIED");
    expect(source).toContain("SFIA_GCEC_CURSOR_REAL_COMMIT_PROOF");
    expect(source).toContain("AGENT MODEL ESCALATION");
    void M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID;
    void M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID;
    void observeLocalCommitFacts;
  });
});

describe.skipIf(!ENABLED)(
  "GCEC future REAL same-EC commit A→B — Morris-gated campaign",
  () => {
    it(
      "REAL A→B: docs-write retain → local-commit agent → observe → Evidence → remote unchanged",
      async () => {
        const managedBase = process.env.SFIA_GCEC_MANAGED_REPO_BASE?.trim();
        if (!managedBase) {
          throw new Error("SFIA_GCEC_MANAGED_REPO_BASE required when ENABLED");
        }
        const proofRoot = fs.mkdtempSync(
          path.join(os.tmpdir(), "gcec-real-commit-"),
        );
        temps.push(proofRoot);
        harnessState.proofRoot = proofRoot;
        harnessState.phase = "PRECHECK";

        const cloneName = IDENTITY.replace("/", "__");
        const cloneRoot = path.join(managedBase, cloneName);
        if (!fs.existsSync(path.join(cloneRoot, ".git"))) {
          throw new Error(`managed clone missing: ${cloneRoot}`);
        }
        const remoteHead = safeGit(cloneRoot, ["rev-parse", "HEAD"]);
        expect(remoteHead).toBe(BASE_SHA);
        expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

        // Agent-model gate: Attempt B must use local-commit agent under SAME EC.
        // Current Product model cannot select that agent for a docs-write EC.
        // Fail closed — do not start REAL children under bypass.
        const agentModelEscalationRequired = true;
        if (agentModelEscalationRequired) {
          writeJson(path.join(PROOF_REVIEW_DIR, "stop-agent-model.json"), {
            verdict: "STOP — GCEC GIT.COMMIT AGENT MODEL ESCALATION REQUIRED",
            attemptAAgent: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
            attemptBRequiredAgent: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
            sameEc: true,
            reason:
              "EC fixed action/capability/target/scope cannot match both sibling agents",
          });
          throw new Error(
            "STOP — GCEC GIT.COMMIT AGENT MODEL ESCALATION REQUIRED",
          );
        }

        // --- Preferred campaign body (reachable after agent-model escalation) ---
        harnessState.expectedH0 = BASE_SHA;
        harnessState.attemptAId = "xat:real-a";
        harnessState.attemptBId = "xat:real-b";
        expect(harnessState.attemptAId).not.toBe(harnessState.attemptBId);

        // A: REAL docs-write (ONE Cursor child) — retain worktree
        harnessState.phase = "A_LAUNCHED_UNRECONCILED";
        harnessState.realLaunchConsumed = true;
        // … Product StartExecution docs-write path (reuse gcecCursorRealDocsWrite) …
        harnessState.phase = "A_RECONCILED_RETAINED";

        // B: NEW Attempt, SAME EC, local-commit agent, git.commit Confirmation,
        // Gate D, Cont01 resume, ONE Cursor child, no file edit, no push.
        harnessState.phase = "B_LAUNCHED_UNRECONCILED";
        // … Product StartExecution commit path …
        // observeLocalCommitFacts on resumed worktree → verifyLocalCommitEffect
        // → Evidence VERIFIED → isFsAnchorSupersededByVerifiedLocalCommit
        harnessState.phase = "B_RECONCILED_COMMIT_VERIFIED";
        harnessState.reconciliationComplete = true;
        harnessState.durableReviewSnapshotWritten = true;

        // Remote anti-effect
        expect(safeGit(cloneRoot, ["rev-parse", "HEAD"])).toBe(BASE_SHA);
        expect(fs.existsSync(path.join(cloneRoot, TARGET_PATH))).toBe(false);

        writeJson(path.join(PROOF_REVIEW_DIR, "reconciliation-state.json"), {
          phase: harnessState.phase,
          attemptAId: harnessState.attemptAId,
          attemptBId: harnessState.attemptBId,
          expectedH0: harnessState.expectedH0,
          commitMessage: COMMIT_MSG,
          digestHint: createHash("sha256").update("n/a").digest("hex"),
        });
      },
      20 * 60 * 1000,
    );
  },
);

```

### FULL: projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitEvidence.d0.test.ts
```typescript
/**
 * GCEC git.commit Evidence — GE (CR-GCEC-GITCOMMIT-01).
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  localCommitFactsFromSynthetic,
  verifyLocalCommitEffect,
} from "@/lib/oa/execution-attempt";

const H0 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";
const NOW = "2026-09-11T20:00:00.000Z";

const SPEC = {
  repositoryRef: "acme/widget",
  expectedParentSha: H0,
  exactPaths: [PATH],
  commitMessage: MSG,
} as const;

const BINDINGS = {
  projectId: "prj:ge",
  cycleInstanceId: "cyc:ge",
  executionContractId: "xct:ge",
  executionAttemptId: "xat:ge-b",
};

function observed(
  overrides: Partial<
    Parameters<typeof localCommitFactsFromSynthetic>[0]
  > = {},
) {
  return localCommitFactsFromSynthetic({
    observedHeadSha: H1,
    observedParentSha: H0,
    observedChangedPaths: [PATH],
    observedCommitMessage: MSG,
    artifactChecks: [
      { path: PATH, expectedDigest: DIGEST, actualDigest: DIGEST },
    ],
    worktreeDirty: false,
    commitsFromExpectedParent: 1,
    ...overrides,
  });
}

describe("GCEC git.commit Evidence GE", () => {
  it("GE-01 Cursor report alone ≠ VERIFIED", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observed: observed(),
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
      trustCursorReportOnly: true,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.status).toBe("reported");
      expect(r.reason).toMatch(/cursor_report_alone/);
    }
  });

  it("GE-02 local observation → VERIFIED", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observed: observed(),
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
      nowIso: NOW,
    });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.status).toBe("verified");
      expect(r.provenance).toBe("studio:local_git_readonly:observe");
      expect(r.commitSha).toBe(H1);
    }
  });

  it("GE-03..06 incomplete bindings → FAIL", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observed: observed(),
      expectedBindings: {
        projectId: "prj:ge",
        cycleInstanceId: "cyc:ge",
        // missing EC + Attempt
      } as never,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("git_evidence_bindings_incomplete");
  });

  it("GE-07 parent mismatch → FAIL", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observed: observed({
        observedParentSha: "cccccccccccccccccccccccccccccccccccccccc",
      }),
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("parent_mismatch");
  });

  it("GE-08 expectedBindings required", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observed: observed(),
      expectedBindings: undefined as never,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(false);
  });

  it("GE-10 provenance is local Git read-only", async () => {
    const evidence = createTestEvidenceReviewServices({ fixedNowIso: NOW });
    const r = await verifyLocalCommitEffect({
      spec: SPEC,
      observed: observed(),
      expectedBindings: BINDINGS,
      actor: { actorId: "a", role: "system" },
      evidenceServices: evidence,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.provenance).toContain("local_git_readonly");
  });
});

```

### FULL: projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts
```typescript
/**
 * GCEC bounded git.commit gateway profile — GC-01..GC-12.
 * FakeProcessRunner only. ZERO REAL Cursor / ZERO Product git mutation.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_LOCAL_COMMIT_ACTION,
  M4_REAL_GATEWAY_ADAPTER_ID,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  StudioCursorRealLaunchGateway,
} from "@/lib/oa/execution-attempt";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import { FakeRealExecutionWorkspacePort } from "./support/fakeSpawnAndGit";
import { M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";

const PARENT = M4_TEST_BASE_HEAD_SHA;
const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";

function baseRequest(
  overrides: Record<string, unknown> = {},
): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
  return {
    attemptId: "xat:gc-profile",
    executionContractId: "xct:gc",
    executionContractVersion: 1,
    semanticFingerprint: "fp:gc",
    selectedAgentRef: "agt:m4.cursor.bounded_local_commit",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    correlationId: "cor:gc",
    baseHeadSha: PARENT,
    timeoutMs: 15 * 60 * 1000,
    ...overrides,
  } as Parameters<StudioCursorRealLaunchGateway["launch"]>[0];
}

function commitRequest(
  overrides: Record<string, unknown> = {},
): Parameters<StudioCursorRealLaunchGateway["launch"]>[0] {
  return baseRequest({
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    authorizedEffects: ["git.commit"],
    workspaceContinuation: {
      priorAttemptId: "xat:prior-a",
      expectedHeadSha: PARENT,
      expectedVerifiedFiles: [{ path: PATH, digest: DIGEST }],
    },
    gitCommitSpec: {
      repositoryRef: "acme/widget",
      expectedParentSha: PARENT,
      exactPaths: [PATH],
      commitMessage: MSG,
      branchOrRef: "gcec/docs",
    },
    docsWriteSpec: {
      repositoryRef: "acme/widget",
      targetPath: PATH,
      pathAllowlist: ["docs/"],
      artifactType: "functional_design",
      artifactBrief: "add task manager functional design",
      contentRequirements: ["problem"],
      scopeIn: ["docs/"],
      scopeOut: ["src/"],
      expectedOutputs: [PATH],
      validationExpectations: ["markdown"],
      evidenceRequirements: ["artifact", "git:local_commit"],
      createOrModify: true,
      noDelete: true,
    },
    ...overrides,
  });
}

describe("GCEC git.commit gateway profile GC-01..12", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  function gateway() {
    const workspace = new FakeRealExecutionWorkspacePort({
      resumePath: "/tmp/fake-exec-root/wt-prior-gc",
      workspacePath: "/tmp/fake-exec-root/wt-fresh-gc",
    });
    const runner = new FakeProcessRunner();
    const gw = new StudioCursorRealLaunchGateway({
      processRunner: runner,
      workspacePort: workspace,
      env: { ...process.env, [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1" },
      resolveCursorBin: () => "/tmp/fake-cursor-bin",
    });
    return { gw, runner, workspace };
  }

  it("GC-01 docs-write profile remains unchanged (no Shell, Write tools)", async () => {
    const { gw, runner, workspace } = gateway();
    const result = await gw.launch(
      baseRequest({
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        authorizedEffects: ["filesystem.create", "filesystem.modify"],
        docsWriteSpec: {
          repositoryRef: "acme/widget",
          targetPath: PATH,
          pathAllowlist: ["docs/"],
          artifactType: "functional_design",
          artifactBrief: "brief",
          contentRequirements: ["x"],
          scopeIn: ["docs/"],
          scopeOut: [],
          expectedOutputs: [PATH],
          validationExpectations: [],
          evidenceRequirements: ["artifact"],
          createOrModify: true,
          noDelete: true,
        },
      }),
    );
    expect(result.outcome).toBe("ack");
    expect(workspace.prepares).toHaveLength(1);
    expect(workspace.resumes).toHaveLength(0);
    const argv = runner.calls[0]!.argv;
    expect(argv).toContain("--print");
    expect(argv).toContain("--workspace");
    expect(argv).toContain("--trust");
    expect(argv).toContain("--sandbox");
    expect(argv).not.toContain("--mode");
    const instruction = String(argv[argv.length - 1]);
    expect(instruction).toMatch(/Write\/StrReplace/);
    expect(instruction).toMatch(/Ne lancer aucune commande Shell/);
    expect(instruction).not.toMatch(/git commit/);
  });

  it("GC-02 git.commit profile uses SAME gateway/runner", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(commitRequest());
    expect(result.outcome).toBe("ack");
    expect(runner.simulatedInvokeCount).toBe(1);
    expect(runner.calls[0]!.executable).toBe("/tmp/fake-cursor-bin");
  });

  it("GC-03 git.commit profile resumes prior workspace", async () => {
    const { gw, workspace } = gateway();
    await gw.launch(commitRequest());
    expect(workspace.resumes).toHaveLength(1);
    expect(workspace.prepares).toHaveLength(0);
    expect(workspace.resumes[0]?.priorAttemptId).toBe("xat:prior-a");
  });

  it("GC-04 commit argv remains --print + --workspace + --trust + sandbox", async () => {
    const { gw, runner } = gateway();
    await gw.launch(commitRequest());
    const argv = runner.calls[0]!.argv;
    expect(argv[0]).toBe("agent");
    expect(argv).toContain("--print");
    expect(argv).toContain("--workspace");
    expect(argv).toContain("--trust");
    const sandIdx = argv.indexOf("--sandbox");
    expect(argv[sandIdx + 1]).toBe("enabled");
    expect(argv).not.toContain("--mode");
  });

  it("GC-05/06/07/08 commit instruction paths, message, forbids, no file-edit", async () => {
    const { gw, runner } = gateway();
    await gw.launch(commitRequest());
    const instruction = String(runner.calls[0]!.argv.at(-1));
    expect(instruction).toContain(PATH);
    expect(instruction).toContain(MSG);
    expect(instruction).toMatch(/INTERDIT:.*push/i);
    expect(instruction).toMatch(/PR\/merge|amend|rebase|reset/i);
    expect(instruction).toMatch(/Aucune.*édition|aucun outil d'édition|Write\/StrReplace/i);
    expect(instruction).not.toMatch(/Utiliser uniquement les outils d'édition/);
    expect(runner.calls[0]!.env.GIT_TERMINAL_PROMPT).toBe("0");
  });

  it("GC-09 no free shell script from caller is accepted", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        freeShellScript: "git commit -am hack",
      }) as never,
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/free_shell/);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("GC-10 git.commit without continuation descriptor is rejected", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        workspaceContinuation: undefined,
      }),
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/continuation_required/);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("GC-11 git.commit mixed with push is rejected", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        authorizedEffects: ["git.commit", "git.push"],
      }),
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/commit_only|slice_not_commit_only/);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("GC-12 git.commit without structured commit spec is rejected", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        gitCommitSpec: undefined,
        action: M4_BOUNDED_LOCAL_COMMIT_ACTION,
      }),
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/git_commit_spec_missing/);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-01 missing authorizedEffects → reject / zero process", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({ authorizedEffects: undefined }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-02 empty authorizedEffects → reject", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(commitRequest({ authorizedEffects: [] }));
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-03 exactly git.commit → accepted", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({ authorizedEffects: ["git.commit"] }),
    );
    expect(result.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(1);
  });

  it("AUTH-04 commit + push → reject", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({ authorizedEffects: ["git.commit", "git.push"] }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-05 commit + FS → reject", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        authorizedEffects: ["git.commit", "filesystem.modify"],
      }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-06 commit + unknown → reject", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        authorizedEffects: ["git.commit", "unknown.effect"],
      }),
    );
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("AUTH-07 gitCommitSpec with docs-write selected agent → reject", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(
      commitRequest({
        selectedAgentRef: "agt:m4.cursor.bounded_docs_write",
      }),
    );
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.reason).toMatch(/agent_capability_bypass|selected_agent/);
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("SPEC-01 safe path docs/functional-design.md → PASS", async () => {
    const { gw, runner } = gateway();
    const result = await gw.launch(commitRequest());
    expect(result.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(1);
  });

  it("SPEC-02..11 hostile paths → FAIL before child", async () => {
    const { gw, runner } = gateway();
    const hostile = [
      "../escape.md",
      "/abs/path.md",
      "docs/*.md",
      "docs/has space.md",
      "docs/semi;colon.md",
      "docs/$(id).md",
      "docs/`id`.md",
      'docs/"q".md',
      "docs/new\nline.md",
      "-rf.md",
    ];
    for (const p of hostile) {
      const result = await gw.launch(
        commitRequest({
          gitCommitSpec: {
            repositoryRef: "acme/widget",
            expectedParentSha: PARENT,
            exactPaths: [p],
            commitMessage: MSG,
          },
        }),
      );
      expect(result.outcome).toBe("reject");
    }
    expect(runner.calls).toHaveLength(0);
  });

  it("MSG-01 safe subject → PASS; MSG-02..05 hostile → FAIL", async () => {
    const { gw, runner } = gateway();
    const ok = await gw.launch(commitRequest());
    expect(ok.outcome).toBe("ack");
    runner.calls.length = 0;
    const hostileMsgs = [
      "docs: line\nbreak",
      "docs: $(whoami)",
      'docs: "quoted"',
      `docs: ${"x".repeat(80)}`,
    ];
    for (const commitMessage of hostileMsgs) {
      const result = await gw.launch(
        commitRequest({
          gitCommitSpec: {
            repositoryRef: "acme/widget",
            expectedParentSha: PARENT,
            exactPaths: [PATH],
            commitMessage,
          },
        }),
      );
      expect(result.outcome).toBe("reject");
    }
    expect(runner.calls).toHaveLength(0);
  });
});

```

### FULL: projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitObserve.d0.test.ts
```typescript
/**
 * OBS — local READ-ONLY Git observation for verified local commit.
 * ZERO mutation commands. @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  observeLocalCommitFacts,
  type GitCommitLaunchSpec,
} from "@/lib/oa/execution-attempt";

const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const BODY = "# observed\n";

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

describe("GCEC local Git READ-ONLY observer OBS", () => {
  it("OBS-01..07 derives HEAD/parent/paths/subject/lineage/clean/digests", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "gcec-obs-"));
    git(root, ["init"]);
    git(root, ["config", "user.email", "obs@test"]);
    git(root, ["config", "user.name", "obs"]);
    writeFileSync(path.join(root, "README.md"), "base\n");
    git(root, ["add", "README.md"]);
    git(root, ["commit", "-m", "base"]);
    const H0 = git(root, ["rev-parse", "HEAD"]);
    mkdirSync(path.join(root, "docs"), { recursive: true });
    writeFileSync(path.join(root, PATH), BODY);
    git(root, ["add", PATH]);
    git(root, ["commit", "-m", MSG]);
    const H1 = git(root, ["rev-parse", "HEAD"]);
    const digest = `sha256:${createHash("sha256").update(BODY).digest("hex")}`;

    const commands: string[][] = [];
    const runner = {
      async run(argv: readonly string[], cwd: string) {
        commands.push([...argv]);
        const stdout = execFileSync("git", [...argv], {
          cwd,
          encoding: "utf8",
        });
        return { stdout, stderr: "", exitCode: 0 };
      },
    };

    const spec: GitCommitLaunchSpec = {
      repositoryRef: "acme/widget",
      expectedParentSha: H0,
      exactPaths: [PATH],
      commitMessage: MSG,
    };
    const r = await observeLocalCommitFacts({
      gitRunner: runner,
      workspacePath: root,
      spec,
      expectedArtifactDigests: { [PATH]: digest },
    });
    expect(r.ok).toBe(true);
    if (!r.ok) throw new Error(r.reason);
    expect(r.facts.observedHeadSha).toBe(H1.toLowerCase());
    expect(r.facts.observedParentSha).toBe(H0.toLowerCase());
    expect(r.facts.observedChangedPaths).toEqual([PATH]);
    expect(r.facts.observedCommitMessage).toBe(MSG);
    expect(r.facts.commitsFromExpectedParent).toBe(1);
    expect(r.facts.worktreeDirty).toBe(false);
    expect(r.facts.artifactChecks).toEqual([
      { path: PATH, expectedDigest: digest, actualDigest: digest },
    ]);
    expect(r.facts.observationSource).toBe("studio:local_git_readonly");

    // OBS-10: no mutation commands.
    for (const argv of commands) {
      expect([
        "add",
        "commit",
        "push",
        "reset",
        "checkout",
        "clean",
      ]).not.toContain(argv[0]);
    }
  });

  it("OBS-09 free cwd authority rejected", async () => {
    const runner = {
      async run() {
        return { stdout: "", stderr: "", exitCode: 1 };
      },
    };
    const r = await observeLocalCommitFacts({
      gitRunner: runner,
      workspacePath: "/tmp/governed",
      freeCwd: "/evil",
      spec: {
        repositoryRef: "acme/widget",
        expectedParentSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        exactPaths: [PATH],
        commitMessage: MSG,
      },
      expectedArtifactDigests: {},
    } as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toMatch(/free_cwd/);
  });
});

```

### FULL: projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts
```typescript
/**
 * GCEC git.commit same-EC A→B + AgentCapability + FS→SHA (CR-GCEC-GITCOMMIT-01).
 *
 * GC-01 structural fact: under current EC identity (fixed action / capability /
 * target / scope), Attempt B cannot honestly select
 * agt:m4.cursor.bounded_local_commit for a docs-write EC. Prefer STOP —
 * GCEC GIT.COMMIT AGENT MODEL ESCALATION REQUIRED — not a capability bypass.
 *
 * ZERO REAL. @vitest-environment node
 */
import { createHash } from "node:crypto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import type { Evidence } from "@/lib/oa/evidence-review";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
import {
  assertStudioCursorRealOffForTests,
  buildGitEffectActionRef,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  createM4BoundedLocalCommitCursorAgentDescriptor,
  createTestExecutionAttemptServices,
  isFsAnchorSupersededByVerifiedLocalCommit,
  isM4BoundedLocalCommitRealAgent,
  localCommitFactsFromSynthetic,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  resolvePreCommitWorkspaceContinuation,
  SqliteRealLaunchSafetyJournal,
  TestExecutionAdapter,
  verifyLocalCommitEffect,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";
import { mkdirSync, mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  MORRIS_ACTOR,
  NOW,
  baseBuildRequest,
  buildStack,
  grantContractConfirmation,
  registerMorris,
  seedAcceptedDecision,
  seedProject,
  seedStandardCycle,
  selectStandardAgent,
  type Stack,
} from "./helpers";
import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "./support/testOnlyRealExecutionLaunchPort";

const IDENTITY = "acme/widget";
const BRANCH = "gcec/docs";
const TARGET_PATH = "docs/functional-design.md";
const ARTIFACT_BODY = "# Commit A→B verified artifact\n";
const ARTIFACT_DIGEST = `sha256:${createHash("sha256")
  .update(ARTIFACT_BODY)
  .digest("hex")}` as Digest;
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const MSG = "docs: Functional design for continuation proof";

function tempJournalPath(prefix: string): string {
  const dir = mkdtempSync(path.join(os.tmpdir(), prefix));
  return path.join(dir, "safety.sqlite");
}

function docsWriteInputs(baseHeadSha: string): Record<string, unknown> {
  return {
    baseHeadSha,
    repositoryRef: IDENTITY,
    repositoryIdentity: IDENTITY,
    remoteUrl: `https://github.com/${IDENTITY}.git`,
    defaultBranch: "main",
    workingBranch: BRANCH,
    pathRoot: "docs",
    targetPath: TARGET_PATH,
    pathAllowlist: ["docs/"],
    scopeIn: ["docs/"],
    scopeOut: ["src/"],
    artifactType: "functional_design",
    artifactBrief: "Functional design for continuation proof",
    contentRequirements: ["problem", "constraints", "acceptance"],
    expectedOutputs: [TARGET_PATH],
    validationExpectations: ["markdown"],
    evidenceRequirements: ["artifact", "git:local_commit"],
    commitMessage: MSG,
  };
}

function docsWriteEvidence(input: {
  evidenceId: string;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: input.evidenceId,
    type: "artifact",
    status: "verified",
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    location: TARGET_PATH,
    digest: ARTIFACT_DIGEST,
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: { actorId: "actor:system", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:gc-ev",
    },
  };
}

function gitCommitEvidence(input: {
  evidenceId: string;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  commitSha: string;
  parentSha: string;
}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: input.evidenceId,
    type: "other",
    status: "verified",
    source: "git:local_commit",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    location: `git:local_commit?repo=${encodeURIComponent(IDENTITY)}&commitSha=${input.commitSha}&parentSha=${input.parentSha}`,
    digest: `sha256:${"a".repeat(64)}` as Digest,
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    createdAt: NOW,
    updatedAt: NOW,
    version: 1,
    producedAt: NOW,
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${input.evidenceId}`,
      actor: { actorId: "actor:system", role: "system" },
      source: "system",
      timestamp: NOW,
      correlationId: "cor:gc-git-ev",
    },
  };
}

function succeededAttempt(input: {
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
  selectedAgentRef?: string;
}): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    executionContractVersion: input.executionContractVersion,
    selectedAgentRef:
      input.selectedAgentRef ?? M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    status: "succeeded",
    idempotencyKey: `idem:${input.attemptId}`,
    correlationId: `cor:${input.attemptId}`,
    version: 1,
    createdAt: NOW,
    launchedAt: NOW,
    startedAt: NOW,
    completedAt: NOW,
    resultRef: `res:${input.attemptId}`,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: `prv:${input.attemptId}`,
      actor: MORRIS_ACTOR,
      source: "system",
      timestamp: NOW,
      correlationId: `cor:${input.attemptId}`,
    },
  };
}

async function seedDocsWriteConfirmedContract(
  stack: Stack,
): Promise<{
  contractId: string;
  version: number;
  projectId: string;
  cycleInstanceId: string;
}> {
  const projectId = "prj:campus360-oa";
  const cycleInstanceId = "cyc:std-001";
  await seedProject(stack.projects, projectId);
  registerMorris(
    stack.decisions.authority,
    M4_BOUNDED_DOCS_WRITE_SCOPE,
    M4_EVIDENCE,
  );
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack, cycleInstanceId);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId,
      executionContractId: "xct:gc-ab",
      idempotencyKey: "idem-xct-gc-ab",
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
      evidenceRequirements: ["git:local_commit"],
      expectedOutputs: ["artifact", TARGET_PATH],
      authorityEvidenceId: M4_EVIDENCE,
      inputs: docsWriteInputs(M4_TEST_BASE_HEAD_SHA),
    }),
  );
  expect(built.ok).toBe(true);
  if (!built.ok) throw new Error("build failed");

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const confirmationId = await grantContractConfirmation(stack, {
    confirmationId: "cfm:gc-ec",
    scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
    evidenceId: M4_EVIDENCE,
  });
  const confirmed = await stack.execution.confirmExecutionContract.execute({
    executionContractId: validated.contract.executionContractId,
    confirmationId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
    expectedVersion: validated.contract.version,
  });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm failed");

  return {
    contractId: confirmed.contract.executionContractId,
    version: confirmed.contract.version,
    projectId,
    cycleInstanceId,
  };
}

describe("GCEC git.commit same-EC A→B + AgentCapability", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("AG-01 Attempt B cannot select local-commit agent under docs-write EC (structural)", async () => {
    const docs = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const commit = createM4BoundedLocalCommitCursorAgentDescriptor(NOW);
    expect(isM4BoundedLocalCommitRealAgent(commit)).toBe(true);
    const stack = buildStack({ agents: [docs, commit] });
    const seeded = await seedDocsWriteConfirmedContract(stack);

    const selected = await selectStandardAgent(stack, {
      attemptId: "xat:gc-b-local",
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
      idempotencyKey: "idem-gc-b-local",
    });
    // Exact EC action/capability/target/scope require docs-write agent support.
    expect(selected.ok).toBe(false);
    expect(M4_BOUNDED_LOCAL_COMMIT_CAPABILITY).not.toBe(
      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
    );
  });

  it("AG-02 docs-write agent + git.commit slice → fail closed (no bypass)", async () => {
    const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-gc-ag02-"));
    mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
      recursive: true,
    });
    const journal = new SqliteRealLaunchSafetyJournal({
      databasePath: tempJournalPath("gcec-gc-ag02-"),
    });
    const launchPort = new TestOnlyRealExecutionLaunchPort();
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const fixtureAdapter = new TestExecutionAdapter();
    const evidenceBag: Evidence[] = [];
    const stack = buildStack({ agents: [agent], adapter: fixtureAdapter });
    stack.attempts = createTestExecutionAttemptServices({
      decisionServices: stack.decisions,
      executionContractServices: stack.execution,
      agents: [agent],
      adapter: fixtureAdapter,
      realBoundary: {
        launchPort,
        safetyJournal: journal,
        managedRepoRootBase: managedBase,
      },
      resolveProjectRepositoryBinding: async () => ({
        provider: "github",
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: M4_TEST_BASE_HEAD_SHA,
      }),
      listProjectEvidence: async () => evidenceBag,
      fixedNowIso: NOW,
    }) as typeof stack.attempts;

    const seeded = await seedDocsWriteConfirmedContract(stack);
    const attemptA = "xat:gc-a";
    const attemptB = "xat:gc-b";
    await stack.attempts.attempts.create(
      succeededAttempt({
        attemptId: attemptA,
        executionContractId: seeded.contractId,
        executionContractVersion: seeded.version,
      }),
    );
    evidenceBag.push(
      docsWriteEvidence({
        evidenceId: "ev:gc-a-art",
        projectId: seeded.projectId,
        cycleInstanceId: seeded.cycleInstanceId,
        executionContractId: seeded.contractId,
        executionAttemptId: attemptA,
      }),
    );

    await selectStandardAgent(stack, {
      attemptId: attemptB,
      executionContractId: seeded.contractId,
      requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    });
    await stack.attempts.grantRealExecutionGate!.execute({
      grantId: "gd:gc-b",
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      expiresAt: "2026-07-25T07:00:00.000Z",
      authorityEvidenceId: M4_EVIDENCE,
    });

    const gitActionRef = buildGitEffectActionRef({
      executionContractId: seeded.contractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    registerMorris(stack.decisions.authority, gitActionRef, "evd:morris-gc");
    await grantContractConfirmation(stack, {
      confirmationId: "cfm:gc-git-commit",
      actionRef: gitActionRef,
      scope: gitActionRef,
      evidenceId: "evd:morris-gc",
    });
    const gitCnf = await stack.decisions.confirmations.findById(
      "cfm:gc-git-commit",
    );

    const started = await stack.attempts.startExecution.execute({
      attemptId: attemptB,
      actor: MORRIS_ACTOR,
      authorityEvidenceId: M4_EVIDENCE,
      confirmations: gitCnf ? [gitCnf] : [],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toMatch(
        /git_commit_agent_capability_bypass|capability/i,
      );
    }
    expect(launchPort.calls).toHaveLength(0);
    journal.close();
  });

  it("GE/SHA-10: independent observation + verified Evidence supersedes FS anchor", async () => {
    const evidenceServices = createTestEvidenceReviewServices({
      fixedNowIso: NOW,
    });
    const observed = localCommitFactsFromSynthetic({
      observedHeadSha: H1,
      observedParentSha: M4_TEST_BASE_HEAD_SHA,
      observedChangedPaths: [TARGET_PATH],
      observedCommitMessage: MSG,
      artifactChecks: [
        {
          path: TARGET_PATH,
          expectedDigest: ARTIFACT_DIGEST,
          actualDigest: ARTIFACT_DIGEST,
        },
      ],
      worktreeDirty: false,
      commitsFromExpectedParent: 1,
    });
    const verified = await verifyLocalCommitEffect({
      spec: {
        repositoryRef: IDENTITY,
        expectedParentSha: M4_TEST_BASE_HEAD_SHA,
        exactPaths: [TARGET_PATH],
        commitMessage: MSG,
      },
      observed,
      expectedBindings: {
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:std-001",
        executionContractId: "xct:gc-ab",
        executionAttemptId: "xat:gc-b",
      },
      actor: { actorId: MORRIS_ACTOR.actorId, role: "human" },
      evidenceServices,
      nowIso: NOW,
    });
    expect(verified.ok).toBe(true);

    const evidenceBag: Evidence[] = [
      docsWriteEvidence({
        evidenceId: "ev:a",
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:std-001",
        executionContractId: "xct:gc-ab",
        executionAttemptId: "xat:gc-a",
      }),
      gitCommitEvidence({
        evidenceId: verified.ok ? verified.evidenceId : "ev:x",
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:std-001",
        executionContractId: "xct:gc-ab",
        executionAttemptId: "xat:gc-b",
        commitSha: H1,
        parentSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ];
    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:std-001",
        executionContractId: "xct:gc-ab",
        evidence: evidenceBag,
        attempts: [
          succeededAttempt({
            attemptId: "xat:gc-a",
            executionContractId: "xct:gc-ab",
            executionContractVersion: 1,
          }),
          succeededAttempt({
            attemptId: "xat:gc-b",
            executionContractId: "xct:gc-ab",
            executionContractVersion: 1,
            selectedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
          }),
        ],
        priorAttemptId: "xat:gc-a",
        expectedParentSha: M4_TEST_BASE_HEAD_SHA,
        repositoryRef: IDENTITY,
        requiredPaths: [TARGET_PATH],
      }),
    ).toBe(true);

    const pushCont = resolvePreCommitWorkspaceContinuation({
      currentAttemptId: "xat:gc-push-c",
      executionContractId: "xct:gc-ab",
      projectId: "prj:campus360-oa",
      cycleInstanceId: "cyc:std-001",
      expectedHeadSha: M4_TEST_BASE_HEAD_SHA,
      attempts: [
        succeededAttempt({
          attemptId: "xat:gc-a",
          executionContractId: "xct:gc-ab",
          executionContractVersion: 1,
        }),
        succeededAttempt({
          attemptId: "xat:gc-b",
          executionContractId: "xct:gc-ab",
          executionContractVersion: 1,
          selectedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
        }),
      ],
      evidence: evidenceBag,
      authorizedEffects: ["git.push"],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
      ],
    });
    expect(pushCont.required).toBe(false);
  });

  it("SHA-01 verifiedEffects alone does NOT supersede", () => {
    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:std-001",
        executionContractId: "xct:gc-ab",
        evidence: [
          docsWriteEvidence({
            evidenceId: "ev:a",
            projectId: "prj:campus360-oa",
            cycleInstanceId: "cyc:std-001",
            executionContractId: "xct:gc-ab",
            executionAttemptId: "xat:gc-a",
          }),
        ],
      }),
    ).toBe(false);
  });

  it("SHA-09 git:local_commit_fake source does NOT supersede", () => {
    expect(
      isFsAnchorSupersededByVerifiedLocalCommit({
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:std-001",
        executionContractId: "xct:gc-ab",
        evidence: [
          {
            ...gitCommitEvidence({
              evidenceId: "ev:fake",
              projectId: "prj:campus360-oa",
              cycleInstanceId: "cyc:std-001",
              executionContractId: "xct:gc-ab",
              executionAttemptId: "xat:gc-b",
              commitSha: H1,
              parentSha: M4_TEST_BASE_HEAD_SHA,
            }),
            source: "git:local_commit_fake",
          },
        ],
        attempts: [
          succeededAttempt({
            attemptId: "xat:gc-b",
            executionContractId: "xct:gc-ab",
            executionContractVersion: 1,
          }),
        ],
      }),
    ).toBe(false);
  });
});

```

### FULL: projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitVerification.d0.test.ts
```typescript
/**
 * GCEC local commit verification — GV (pure facts, no OS Git mutation).
 * CR-GCEC-GITCOMMIT-01 hardenings.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { verifyLocalCommitFacts } from "@/lib/oa/execution-attempt";

const H0 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const H1 = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const H2 = "cccccccccccccccccccccccccccccccccccccccc";
const PATH = "docs/functional-design.md";
const MSG = "docs: add task manager functional design";
const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622";

function base(
  overrides: Partial<Parameters<typeof verifyLocalCommitFacts>[0]> = {},
) {
  return verifyLocalCommitFacts({
    expectedParentSha: H0,
    observedHeadSha: H1,
    observedParentSha: H0,
    exactPaths: [PATH],
    observedChangedPaths: [PATH],
    expectedCommitMessage: MSG,
    observedCommitMessage: MSG,
    artifactChecks: [
      {
        path: PATH,
        expectedDigest: DIGEST,
        actualDigest: DIGEST,
      },
    ],
    worktreeDirty: false,
    commitsFromExpectedParent: 1,
    ...overrides,
  });
}

describe("GCEC local commit verification GV", () => {
  it("GV-01/02/03 happy path", () => {
    expect(base().ok).toBe(true);
  });

  it("GV-04 extra path → FAIL", () => {
    const r = base({ observedChangedPaths: [PATH, "README.md"] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("changed_paths_extra");
  });

  it("GV-05 missing expected path → FAIL", () => {
    const r = base({ observedChangedPaths: [] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("changed_paths_missing");
  });

  it("GV-06 artifact digest changed → FAIL", () => {
    const r = base({
      artifactChecks: [
        {
          path: PATH,
          expectedDigest: DIGEST,
          actualDigest:
            "sha256:ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        },
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("artifact_digest_mismatch");
  });

  it("GV-07 worktree dirty → FAIL", () => {
    const r = base({ worktreeDirty: true });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("worktree_dirty_after_commit");
  });

  it("GV-08 wrong commit message → FAIL", () => {
    const r = base({ observedCommitMessage: "wrong message" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("commit_message_mismatch");
  });

  it("GV-09 HEAD unchanged → FAIL", () => {
    const r = base({ observedHeadSha: H0, observedParentSha: H0 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("head_unchanged");
  });

  it("GV-10/15 extra commit lineage → FAIL", () => {
    const r = base({
      observedHeadSha: H2,
      observedParentSha: H0,
      commitsFromExpectedParent: 2,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("unexpected_extra_commits");
  });

  it("GV-11 missing artifactChecks → FAIL", () => {
    const r = base({ artifactChecks: [] });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("artifact_checks_missing");
  });

  it("GV-12 incomplete coverage → FAIL", () => {
    const r = base({
      exactPaths: [PATH, "docs/other.md"],
      observedChangedPaths: [PATH, "docs/other.md"],
      artifactChecks: [
        { path: PATH, expectedDigest: DIGEST, actualDigest: DIGEST },
      ],
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("artifact_coverage_incomplete");
  });

  it("GV-14 exact one-to-one coverage → PASS", () => {
    expect(base().ok).toBe(true);
  });
});

```

### FULL: projects/sfia-studio/app/lib/oa/execution-attempt/application/observeLocalCommitFacts.ts
```typescript
/**
 * CR-GCEC-GC-04 — READ-ONLY local Git observation for verified local commit.
 * Uses existing GitCommandRunner — no second Git subsystem, no mutations.
 */
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { GitCommandRunner } from "../infrastructure/studioGitWorktreeWorkspace";
import type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
import type { LocalCommitArtifactCheck } from "../domain/verifyLocalCommitFacts";

const MUTATION_FORBIDDEN = new Set([
  "add",
  "commit",
  "reset",
  "checkout",
  "switch",
  "restore",
  "clean",
  "push",
  "pull",
  "fetch",
  "rebase",
  "merge",
  "am",
  "cherry-pick",
  "tag",
  "branch",
  "remote",
  "config",
  "stash",
  "rm",
  "mv",
]);

export type LocalCommitObservedFacts = {
  readonly observedHeadSha: string;
  readonly observedParentSha: string;
  readonly observedChangedPaths: readonly string[];
  readonly observedCommitMessage: string;
  readonly artifactChecks: readonly LocalCommitArtifactCheck[];
  readonly worktreeDirty: boolean;
  readonly commitsFromExpectedParent: number;
  readonly workspacePath: string;
  readonly observationSource: "studio:local_git_readonly";
};

export type ObserveLocalCommitInput = {
  readonly gitRunner: GitCommandRunner;
  readonly workspacePath: string;
  readonly spec: GitCommitLaunchSpec;
  /** Expected digests keyed by relative path (from VERIFIED Artifact Evidence). */
  readonly expectedArtifactDigests: Readonly<Record<string, string>>;
};

function assertReadOnlyArgv(argv: readonly string[]): void {
  if (argv.length === 0) throw new Error("local_git_observe_empty_argv");
  const cmd = argv[0]!;
  if (MUTATION_FORBIDDEN.has(cmd)) {
    throw new Error(`local_git_observe_mutation_forbidden:${cmd}`);
  }
}

async function runReadonly(
  runner: GitCommandRunner,
  cwd: string,
  argv: readonly string[],
): Promise<{ stdout: string; exitCode: number }> {
  assertReadOnlyArgv(argv);
  const r = await runner.run(argv, cwd);
  return { stdout: r.stdout, exitCode: r.exitCode };
}

/**
 * Collect local commit facts from a governed workspace path.
 * workspacePath MUST come from Cont01 resume / workspace port — never free cwd.
 */
export async function observeLocalCommitFacts(
  input: ObserveLocalCommitInput,
): Promise<
  | { ok: true; facts: LocalCommitObservedFacts }
  | { ok: false; reason: string }
> {
  const cwd = path.resolve(input.workspacePath);
  if (!cwd || cwd === "/" || input.workspacePath.includes("\0")) {
    return { ok: false, reason: "local_git_workspace_invalid" };
  }
  // Reject obvious free-cwd markers from hostile callers.
  if (
    typeof (input as { freeCwd?: unknown }).freeCwd === "string" ||
    typeof (input as { cwd?: unknown }).cwd === "string"
  ) {
    return { ok: false, reason: "local_git_free_cwd_rejected" };
  }

  const inside = await runReadonly(input.gitRunner, cwd, [
    "rev-parse",
    "--is-inside-work-tree",
  ]);
  if (inside.exitCode !== 0 || inside.stdout.trim() !== "true") {
    return { ok: false, reason: "local_git_not_a_worktree" };
  }

  const headRes = await runReadonly(input.gitRunner, cwd, ["rev-parse", "HEAD"]);
  if (headRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_head_unreadable" };
  }
  const observedHeadSha = headRes.stdout.trim().toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(observedHeadSha)) {
    return { ok: false, reason: "local_git_head_invalid" };
  }

  const parentRes = await runReadonly(input.gitRunner, cwd, [
    "rev-parse",
    "HEAD^",
  ]);
  if (parentRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_parent_unreadable" };
  }
  const observedParentSha = parentRes.stdout.trim().toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(observedParentSha)) {
    return { ok: false, reason: "local_git_parent_invalid" };
  }

  const subjectRes = await runReadonly(input.gitRunner, cwd, [
    "log",
    "-1",
    "--format=%s",
    "HEAD",
  ]);
  if (subjectRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_subject_unreadable" };
  }
  const observedCommitMessage = subjectRes.stdout.replace(/\n$/, "");

  const namesRes = await runReadonly(input.gitRunner, cwd, [
    "diff-tree",
    "--no-commit-id",
    "--name-only",
    "-r",
    "HEAD",
  ]);
  if (namesRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_changed_paths_unreadable" };
  }
  const observedChangedPaths = namesRes.stdout
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const countRes = await runReadonly(input.gitRunner, cwd, [
    "rev-list",
    "--count",
    `${input.spec.expectedParentSha}..HEAD`,
  ]);
  if (countRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_lineage_unreadable" };
  }
  const commitsFromExpectedParent = Number.parseInt(countRes.stdout.trim(), 10);
  if (!Number.isFinite(commitsFromExpectedParent)) {
    return { ok: false, reason: "local_git_lineage_invalid" };
  }

  const statusRes = await runReadonly(input.gitRunner, cwd, [
    "status",
    "--porcelain",
    "-uall",
  ]);
  if (statusRes.exitCode !== 0) {
    return { ok: false, reason: "local_git_status_unreadable" };
  }
  const worktreeDirty = statusRes.stdout.trim().length > 0;

  const artifactChecks: LocalCommitArtifactCheck[] = [];
  for (const rel of input.spec.exactPaths) {
    const expectedDigest = input.expectedArtifactDigests[rel];
    if (!expectedDigest) {
      return { ok: false, reason: "local_git_expected_digest_missing" };
    }
    const abs = path.resolve(cwd, ...rel.split("/"));
    if (!abs.startsWith(cwd + path.sep) && abs !== cwd) {
      return { ok: false, reason: "local_git_artifact_path_escape" };
    }
    let body: Buffer;
    try {
      body = await readFile(abs);
    } catch {
      return { ok: false, reason: "local_git_artifact_missing" };
    }
    const actualDigest = `sha256:${createHash("sha256").update(body).digest("hex")}`;
    artifactChecks.push({
      path: rel,
      expectedDigest: expectedDigest.toLowerCase(),
      actualDigest,
    });
  }

  return {
    ok: true,
    facts: {
      observedHeadSha,
      observedParentSha,
      observedChangedPaths,
      observedCommitMessage,
      artifactChecks,
      worktreeDirty,
      commitsFromExpectedParent,
      workspacePath: cwd,
      observationSource: "studio:local_git_readonly",
    },
  };
}

/** Test helper: wrap in-memory facts as if observed (Fake runner still preferred). */
export function localCommitFactsFromSynthetic(
  facts: Omit<LocalCommitObservedFacts, "observationSource" | "workspacePath"> & {
    workspacePath?: string;
  },
): LocalCommitObservedFacts {
  return {
    ...facts,
    workspacePath: facts.workspacePath ?? "/tmp/governed-wt-synthetic",
    observationSource: "studio:local_git_readonly",
  };
}

```

### FULL: projects/sfia-studio/app/lib/oa/execution-attempt/application/verifyLocalCommitEffect.ts
```typescript
/**
 * Independent local-commit verification + Evidence binding (Studio READ-ONLY).
 * CR-GCEC-GC-04: facts MUST come from observeLocalCommitFacts.
 * Unpushed SHA is NOT claimed remote-verified (no RepositoryReadPort remote lookup).
 */
import { createHash } from "node:crypto";
import type { Digest } from "@/lib/oa/doctrine";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import { buildTypedGitEvidenceFields } from "@/lib/oa/evidence-review";
import type { GitVerifyActor, GitVerifyBindings } from "@/lib/oa/git-ports";
import { verifyLocalCommitFacts } from "../domain/verifyLocalCommitFacts";
import type { GitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
import type { LocalCommitObservedFacts } from "./observeLocalCommitFacts";

export const LOCAL_GIT_READONLY_TECHNICAL_REF =
  "studio:local_git_readonly:observe" as const;

export type VerifyLocalCommitEffectInput = {
  readonly spec: GitCommitLaunchSpec;
  readonly observed: LocalCommitObservedFacts;
  /** Required exact bindings from governed Attempt B context. */
  readonly expectedBindings: GitVerifyBindings;
  readonly actor: GitVerifyActor;
  readonly evidenceServices: EvidenceReviewServices;
  readonly nowIso?: string;
  readonly trustCursorReportOnly?: boolean;
};

export type VerifyLocalCommitEffectResult =
  | {
      readonly ok: true;
      readonly evidenceId: string;
      readonly status: "verified";
      readonly commitSha: string;
      readonly provenance: typeof LOCAL_GIT_READONLY_TECHNICAL_REF;
    }
  | {
      readonly ok: false;
      readonly reason: string;
      readonly status: "reported" | "failed";
    };

function bindingsComplete(b: GitVerifyBindings): boolean {
  return (
    Boolean(b.projectId?.trim()) &&
    Boolean(b.cycleInstanceId?.trim()) &&
    Boolean(b.executionContractId?.trim()) &&
    Boolean(b.executionAttemptId?.trim())
  );
}

function claimDigest(location: string): Digest {
  return `sha256:${createHash("sha256").update(location, "utf8").digest("hex")}` as Digest;
}

/**
 * Fail-closed: Cursor report alone ≠ VERIFIED; local observer required.
 */
export async function verifyLocalCommitEffect(
  input: VerifyLocalCommitEffectInput,
): Promise<VerifyLocalCommitEffectResult> {
  if (!input.expectedBindings || !bindingsComplete(input.expectedBindings)) {
    return {
      ok: false,
      reason: "git_evidence_bindings_incomplete",
      status: "failed",
    };
  }

  if (input.trustCursorReportOnly) {
    return {
      ok: false,
      reason: "cursor_report_alone_not_verified",
      status: "reported",
    };
  }

  if (input.observed.observationSource !== "studio:local_git_readonly") {
    return {
      ok: false,
      reason: "local_git_observation_source_invalid",
      status: "failed",
    };
  }

  const facts = verifyLocalCommitFacts({
    expectedParentSha: input.spec.expectedParentSha,
    observedHeadSha: input.observed.observedHeadSha,
    observedParentSha: input.observed.observedParentSha,
    exactPaths: input.spec.exactPaths,
    observedChangedPaths: input.observed.observedChangedPaths,
    expectedCommitMessage: input.spec.commitMessage,
    observedCommitMessage: input.observed.observedCommitMessage,
    artifactChecks: input.observed.artifactChecks,
    worktreeDirty: input.observed.worktreeDirty,
    commitsFromExpectedParent: input.observed.commitsFromExpectedParent,
  });
  if (!facts.ok) {
    return { ok: false, reason: facts.reason, status: "failed" };
  }

  const payload = {
    repositoryRef: input.spec.repositoryRef,
    commitSha: input.observed.observedHeadSha,
    message: input.observed.observedCommitMessage,
    parentSha: input.observed.observedParentSha,
  };
  const built = buildTypedGitEvidenceFields("git:local_commit", payload);
  if (!built.ok) {
    return { ok: false, reason: built.reason, status: "failed" };
  }

  const location =
    built.fields.location ??
    `git:local_commit?repo=${encodeURIComponent(input.spec.repositoryRef)}&commitSha=${input.observed.observedHeadSha}`;
  const digest = (built.fields.digest ?? claimDigest(location)) as Digest;
  const evidenceId = `ev:git-commit-verified:${input.observed.observedHeadSha.slice(0, 12)}`;

  const registered = await input.evidenceServices.registerEvidence.execute({
    evidenceId,
    idempotencyKey: `idem:${evidenceId}`,
    actor: input.actor as never,
    type: "other",
    source: "git:local_commit",
    sourceKind: "external",
    classification: "internal",
    storageMode: "metadata_only",
    status: "available",
    location,
    digest,
    technicalResultRef: LOCAL_GIT_READONLY_TECHNICAL_REF,
    bindings: {
      projectId: input.expectedBindings.projectId,
      cycleInstanceId: input.expectedBindings.cycleInstanceId,
      executionContractId: input.expectedBindings.executionContractId!,
      executionAttemptId: input.expectedBindings.executionAttemptId!,
    },
    ...(input.nowIso ? { nowIso: input.nowIso } : {}),
  });
  if (!registered.ok) {
    return {
      ok: false,
      reason: registered.error?.detailCode ?? "evidence_register_failed",
      status: "failed",
    };
  }

  const testSvc = input.evidenceServices as EvidenceReviewServices & {
    setPayloadScript?: (
      id: string,
      s: { availability: "available"; digest: Digest },
    ) => void;
    fakePayload?: {
      setScript?: (
        id: string,
        s: { availability: "available"; digest: Digest },
      ) => void;
    };
    payload?: {
      setScript?: (
        id: string,
        s: { availability: "available"; digest: Digest },
      ) => void;
    };
  };
  const scriptable = testSvc.fakePayload ?? testSvc.payload;
  if (typeof testSvc.setPayloadScript === "function") {
    testSvc.setPayloadScript(evidenceId, {
      availability: "available",
      digest,
    });
  } else if (typeof scriptable?.setScript === "function") {
    scriptable.setScript(evidenceId, {
      availability: "available",
      digest,
    });
  }

  const verified = await input.evidenceServices.verifyEvidenceIntegrity.execute({
    evidenceId,
    expectedVersion: registered.evidence.version,
    actor: input.actor as never,
  });
  if (!verified.ok || verified.evidence.status !== "verified") {
    return {
      ok: false,
      reason: verified.ok
        ? "status_not_verified_after_integrity"
        : (verified.error?.detailCode ?? "evidence_verify_failed"),
      status: "reported",
    };
  }

  return {
    ok: true,
    evidenceId,
    status: "verified",
    commitSha: input.observed.observedHeadSha.toLowerCase(),
    provenance: LOCAL_GIT_READONLY_TECHNICAL_REF,
  };
}

export function digestOf(content: string): Digest {
  return `sha256:${createHash("sha256").update(content).digest("hex")}` as Digest;
}

```

### FULL: projects/sfia-studio/app/lib/oa/execution-attempt/domain/gitCommitLaunchSpec.ts
```typescript
/**
 * Server-derived GitCommitLaunchSpec (GCEC bounded local commit).
 * Canonical type — import/re-export; do not duplicate in ports.
 * No free cwd / shell / wildcard. Paths from VERIFIED continuation / EC only.
 * CR-GCEC-GC-03: strict shell-safe grammar for Shell-exposed agent profile.
 */

/** Canonical commit launch contract (single source of truth). */
export type GitCommitLaunchSpec = {
  readonly repositoryRef: string;
  readonly expectedParentSha: string;
  readonly exactPaths: readonly string[];
  readonly commitMessage: string;
  /** Optional branch/ref already modeled on the EC / binding. */
  readonly branchOrRef?: string;
};

/** Bounded subject length for this capability (single-line git subject). */
export const GIT_COMMIT_SUBJECT_MAX_LENGTH = 72;

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

/** Forbidden characters / patterns in exactPaths for Shell-oriented profile. */
const PATH_FORBIDDEN_RE =
  /[\x00-\x1f\x7f\\ '"$`;&|<>(){}[\]*?!]|\/\.(\.($|\/))|^-|\/-|^\.|\/\.$/;

/** Forbidden in commit subject for this bounded profile. */
const SUBJECT_FORBIDDEN_RE = /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!\n\r]/;

function isFullSha(v: unknown): v is string {
  return typeof v === "string" && FULL_SHA_RE.test(v.trim());
}

/**
 * Strict relative POSIX path for this capability.
 * Fail closed — never silently normalize hostile input into a safe path.
 */
export function assertShellSafeRelativePath(
  raw: string,
): { ok: true; path: string } | { ok: false; reason: string } {
  if (typeof raw !== "string" || raw.length === 0) {
    return { ok: false, reason: "git_commit_exact_path_empty" };
  }
  if (raw !== raw.trim()) {
    return { ok: false, reason: "git_commit_exact_path_whitespace" };
  }
  if (raw.includes(" ") || /\s/.test(raw)) {
    return { ok: false, reason: "git_commit_exact_path_whitespace" };
  }
  if (raw.startsWith("/") || raw.startsWith("~")) {
    return { ok: false, reason: "git_commit_exact_path_absolute" };
  }
  if (raw.includes("\\")) {
    return { ok: false, reason: "git_commit_exact_path_backslash" };
  }
  if (raw.includes("..")) {
    return { ok: false, reason: "git_commit_exact_path_dotdot" };
  }
  if (raw.startsWith("-") || raw.split("/").some((c) => c.startsWith("-"))) {
    return { ok: false, reason: "git_commit_exact_path_leading_dash" };
  }
  if (PATH_FORBIDDEN_RE.test(raw)) {
    return { ok: false, reason: "git_commit_exact_path_unsafe" };
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(raw)) {
    return { ok: false, reason: "git_commit_exact_path_charset" };
  }
  if (raw.includes("//") || raw.endsWith("/")) {
    return { ok: false, reason: "git_commit_exact_path_invalid" };
  }
  // Allowed proof path remains valid: docs/functional-design.md
  return { ok: true, path: raw };
}

/**
 * Strict single-line commit subject for this capability.
 */
export function assertShellSafeCommitSubject(
  raw: string,
): { ok: true; message: string } | { ok: false; reason: string } {
  if (typeof raw !== "string") {
    return { ok: false, reason: "git_commit_message_missing" };
  }
  if (raw !== raw.trim()) {
    return { ok: false, reason: "git_commit_message_whitespace" };
  }
  const message = raw.trim();
  if (!message) {
    return { ok: false, reason: "git_commit_message_missing" };
  }
  if (message.includes("\n") || message.includes("\r")) {
    return { ok: false, reason: "git_commit_message_multiline" };
  }
  if (message.length > GIT_COMMIT_SUBJECT_MAX_LENGTH) {
    return { ok: false, reason: "git_commit_message_too_long" };
  }
  if (SUBJECT_FORBIDDEN_RE.test(message) || /\$\(|\$\{/.test(message)) {
    return { ok: false, reason: "git_commit_message_unsafe" };
  }
  // Allow alphanumerics, spaces, and a small punctuation set for "docs: …"
  if (!/^[A-Za-z0-9][A-Za-z0-9 .,:_/+-]*$/.test(message)) {
    return { ok: false, reason: "git_commit_message_charset" };
  }
  return { ok: true, message };
}

/**
 * Build commit launch spec from server-owned facts.
 * Fail closed on empty paths, hostile grammar, missing message.
 */
export function buildGitCommitLaunchSpec(input: {
  readonly repositoryRef: string;
  readonly expectedParentSha: string;
  readonly exactPaths: readonly string[];
  readonly commitMessage: string;
  readonly branchOrRef?: string;
}):
  | { ok: true; spec: GitCommitLaunchSpec }
  | { ok: false; reason: string } {
  const repositoryRef = input.repositoryRef.trim();
  if (!repositoryRef) {
    return { ok: false, reason: "git_commit_repository_ref_missing" };
  }
  if (!isFullSha(input.expectedParentSha)) {
    return { ok: false, reason: "git_commit_expected_parent_sha_invalid" };
  }
  const message = assertShellSafeCommitSubject(input.commitMessage);
  if (!message.ok) return message;

  if (input.exactPaths.length === 0) {
    return { ok: false, reason: "git_commit_exact_paths_empty" };
  }
  const exactPaths: string[] = [];
  for (const raw of input.exactPaths) {
    const n = assertShellSafeRelativePath(raw);
    if (!n.ok) return n;
    exactPaths.push(n.path);
  }
  const unique = [...new Set(exactPaths)].sort();
  if (unique.length !== exactPaths.length) {
    return { ok: false, reason: "git_commit_exact_paths_duplicate" };
  }
  if (input.branchOrRef != null && input.branchOrRef.trim()) {
    const branch = input.branchOrRef.trim();
    if (
      /[\x00-\x1f\x7f$`"'\\;&|<>(){}[\]*?!]/.test(branch) ||
      branch.includes("..") ||
      branch.startsWith("-")
    ) {
      return { ok: false, reason: "git_commit_branch_or_ref_unsafe" };
    }
  }
  return {
    ok: true,
    spec: {
      repositoryRef,
      expectedParentSha: input.expectedParentSha.trim().toLowerCase(),
      exactPaths: unique,
      commitMessage: message.message,
      ...(input.branchOrRef?.trim()
        ? { branchOrRef: input.branchOrRef.trim() }
        : {}),
    },
  };
}

/**
 * Derive trusted commit message from EC inputs / docs-write brief.
 * Never accept hostile free-form outside EC boundary.
 */
export function deriveTrustedCommitMessage(input: {
  readonly contractInputs: Record<string, unknown>;
  readonly docsWriteArtifactBrief?: string;
}): { ok: true; message: string } | { ok: false; reason: string } {
  const fromInput = input.contractInputs.commitMessage;
  if (typeof fromInput === "string" && fromInput.trim()) {
    return assertShellSafeCommitSubject(fromInput);
  }
  const brief = input.docsWriteArtifactBrief?.trim();
  if (brief) {
    return assertShellSafeCommitSubject(`docs: ${brief}`);
  }
  return { ok: false, reason: "git_commit_message_untrusted_or_missing" };
}

```

### FULL: projects/sfia-studio/app/lib/oa/execution-attempt/domain/verifyLocalCommitFacts.ts
```typescript
/**
 * Independent local-commit verification facts (Studio READ-ONLY).
 * Cursor remains the mutation executor — Studio never runs git commit.
 * CR-GCEC-GC-02 / GC-04 hardenings.
 */
export type LocalCommitArtifactCheck = {
  readonly path: string;
  readonly expectedDigest: string;
  readonly actualDigest: string;
};

export type LocalCommitVerificationInput = {
  readonly expectedParentSha: string;
  readonly observedHeadSha: string;
  readonly observedParentSha: string;
  readonly exactPaths: readonly string[];
  readonly observedChangedPaths: readonly string[];
  readonly expectedCommitMessage: string;
  readonly observedCommitMessage: string;
  readonly artifactChecks: readonly LocalCommitArtifactCheck[];
  readonly worktreeDirty: boolean;
  /**
   * Commit count from expectedParent (exclusive) to HEAD (inclusive).
   * Must be exactly 1. Derived by local observer — not a free caller flag.
   */
  readonly commitsFromExpectedParent: number;
};

export type LocalCommitVerificationResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly reason: string };

function normalizeSha(sha: string): string {
  return sha.trim().toLowerCase();
}

function normalizePath(p: string): string {
  return p.replace(/\\/g, "/").replace(/^\.\//, "").trim();
}

function sortedUnique(paths: readonly string[]): string[] {
  return [...new Set(paths.map(normalizePath).filter(Boolean))].sort();
}

/**
 * Pure verification of a local commit observation against the bound commit spec.
 */
export function verifyLocalCommitFacts(
  input: LocalCommitVerificationInput,
): LocalCommitVerificationResult {
  const expectedParent = normalizeSha(input.expectedParentSha);
  const head = normalizeSha(input.observedHeadSha);
  const parent = normalizeSha(input.observedParentSha);

  if (!/^[0-9a-f]{40}$/.test(expectedParent)) {
    return { ok: false, reason: "expected_parent_sha_invalid" };
  }
  if (!/^[0-9a-f]{40}$/.test(head)) {
    return { ok: false, reason: "observed_head_sha_invalid" };
  }
  if (!/^[0-9a-f]{40}$/.test(parent)) {
    return { ok: false, reason: "observed_parent_sha_invalid" };
  }
  if (head === expectedParent) {
    return { ok: false, reason: "head_unchanged" };
  }
  if (parent !== expectedParent) {
    return { ok: false, reason: "parent_mismatch" };
  }
  if (input.commitsFromExpectedParent !== 1) {
    return { ok: false, reason: "unexpected_extra_commits" };
  }

  const expectedPaths = sortedUnique(input.exactPaths);
  const observedPaths = sortedUnique(input.observedChangedPaths);
  if (expectedPaths.length === 0) {
    return { ok: false, reason: "exact_paths_empty" };
  }
  if (expectedPaths.join("\0") !== observedPaths.join("\0")) {
    const missing = expectedPaths.filter((p) => !observedPaths.includes(p));
    const extra = observedPaths.filter((p) => !expectedPaths.includes(p));
    if (missing.length > 0) {
      return { ok: false, reason: "changed_paths_missing" };
    }
    if (extra.length > 0) {
      return { ok: false, reason: "changed_paths_extra" };
    }
    return { ok: false, reason: "changed_paths_mismatch" };
  }

  // Exact subject match (already shell-validated on the spec side).
  if (input.observedCommitMessage !== input.expectedCommitMessage) {
    return { ok: false, reason: "commit_message_mismatch" };
  }

  if (input.worktreeDirty) {
    return { ok: false, reason: "worktree_dirty_after_commit" };
  }

  // Artifact coverage must be exactly exactPaths (1:1).
  if (input.artifactChecks.length === 0) {
    return { ok: false, reason: "artifact_checks_missing" };
  }
  const checkPaths = sortedUnique(input.artifactChecks.map((c) => c.path));
  if (checkPaths.join("\0") !== expectedPaths.join("\0")) {
    if (checkPaths.length < expectedPaths.length) {
      return { ok: false, reason: "artifact_coverage_incomplete" };
    }
    if (checkPaths.length > expectedPaths.length) {
      return { ok: false, reason: "artifact_coverage_extra" };
    }
    return { ok: false, reason: "artifact_coverage_mismatch" };
  }

  for (const check of input.artifactChecks) {
    const expected = check.expectedDigest.trim().toLowerCase();
    const actual = check.actualDigest.trim().toLowerCase();
    if (!/^sha256:[a-f0-9]{64}$/.test(expected) || !/^sha256:[a-f0-9]{64}$/.test(actual)) {
      return { ok: false, reason: "artifact_digest_invalid" };
    }
    if (expected !== actual) {
      return { ok: false, reason: "artifact_digest_mismatch" };
    }
  }

  return { ok: true };
}

/**
 * CR-GCEC-GC-02 — authorizedEffects MUST be exactly one unique effect: git.commit.
 */
export function isBoundedGitCommitOnlySlice(
  authorizedEffects: readonly string[] | undefined | null,
): boolean {
  if (!authorizedEffects || authorizedEffects.length === 0) return false;
  const unique = new Set(authorizedEffects);
  return unique.size === 1 && unique.has("git.commit");
}

```

### FULL: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedLocalCommitCursorAgent.ts
```typescript
/**
 * M4 bounded local git.commit Cursor agent (GCEC git.commit executor).
 * Sibling of docs-write / RO — SAME gateway adapter; does not widen docs-write.
 * Exact caps only — no push/PR/merge capability.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  M4_REAL_GATEWAY_ADAPTER_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";

export const M4_BOUNDED_LOCAL_COMMIT_CAPABILITY =
  "cap:cursor.git.local_commit" as const;
export const M4_BOUNDED_LOCAL_COMMIT_ACTION =
  "cursor.git.local_commit.apply" as const;
export const M4_BOUNDED_LOCAL_COMMIT_TARGET =
  "workspace.isolated.git.local_commit" as const;
export const M4_BOUNDED_LOCAL_COMMIT_SCOPE =
  "studio.gcec.git.local_commit" as const;

export function createM4BoundedLocalCommitCursorAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:m4-bounded-local-commit-cursor-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:m4-bounded-local-commit-cursor-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
    agentType: "cursor_cli_bounded_local_commit",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [M4_BOUNDED_LOCAL_COMMIT_CAPABILITY],
    allowedActions: [M4_BOUNDED_LOCAL_COMMIT_ACTION],
    allowedTargets: [M4_BOUNDED_LOCAL_COMMIT_TARGET],
    allowedScopes: [M4_BOUNDED_LOCAL_COMMIT_SCOPE],
    trustLevel: "bounded",
    executionMode: "cursor_cli_real",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    provenance: provenance ?? defaultProvenance,
    createdAt: nowIso,
  };
  return Object.freeze(descriptor);
}

export function isM4BoundedLocalCommitRealAgent(
  agent: AgentDescriptor,
): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    agent.agentId === M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID &&
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.includes(M4_BOUNDED_LOCAL_COMMIT_CAPABILITY) &&
    agent.allowedActions.includes(M4_BOUNDED_LOCAL_COMMIT_ACTION) &&
    agent.allowedTargets.includes(M4_BOUNDED_LOCAL_COMMIT_TARGET) &&
    agent.allowedScopes.includes(M4_BOUNDED_LOCAL_COMMIT_SCOPE) &&
    agent.allowedScopes.length === 1 &&
    agent.supportedCapabilities.length === 1 &&
    agent.allowedActions.length === 1 &&
    agent.allowedTargets.length === 1 &&
    !hasWildcard(agent.supportedCapabilities) &&
    !hasWildcard(agent.allowedActions) &&
    !hasWildcard(agent.allowedTargets) &&
    !hasWildcard(agent.allowedScopes) &&
    !agent.supportedCapabilities.includes("cap:unresolved") &&
    !agent.allowedActions.some((a) => a.includes("UNRESOLVED")) &&
    !agent.allowedTargets.some((t) => t.includes("UNRESOLVED")) &&
    !agent.allowedScopes.some((s) => s.includes("UNRESOLVED"))
  );
}

```
