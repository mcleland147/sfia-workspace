# SFIA STUDIO — GCEC CYCLE-CLOSURE — CR-GCEC-23H-A/B/C FINAL FAIL-CLOSED AUTHORITY HARDENING

## TIMESTAMP
2026-09-11T15:40:00+02:00 (local delivery write)

## GO MORRIS consumed
YES — same GCEC Cycle 8 Delivery lot. No new structural decision.
Binding remains D-GCEC-09..15. CR-GCEC-13..22 / 24 / 25 not reopened.
Scope ONLY CR-GCEC-23H-A / 23H-B / 23H-C.

## GIT TRUTH BEFORE
- worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- HEAD: `8d05732c0be7eced7a6acee71d1e1d990a1e8db0`
- parent: `e3d820adbb45e9f61d1fc6776baf003098cb2a7a`
- origin/main: `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- prior Review Handoff: `343ce3e00774e3db0afccd5bbafd38e5c6c5a3e8`
- Product tracked state: clean (`.tmp-sfia-review/**` dirt allowed)

## GIT TRUTH AFTER
- HEAD: `290eca6544f93a898fc3920f99142dc6130ba05e`
- parent: `8d05732c0be7eced7a6acee71d1e1d990a1e8db0`
- tree: `d162ac4e94cc87283b17f4104b2a9044bdb41476`
- message: `fix(sfia-studio): fail closed protected Git authority`
- Product push: NONE

## SOURCES
Read/used (authority order honored):
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- Applicable v3: 23, 30–35, 37
- Prior handoff @ 343ce3e0
- Candidate HEAD 8d05732c then local hardening → 290eca65

## CONVERGENCE PRE-CHECK
- Build Doctrine: VALIDATED / ACTIVE
- Product Completion: COMPLETE / CLOSED
- Runtime v3: NON ADOPTED
- Rules: R2, R6, R8, R12, R13, R15, R18, R19, R21 honored
- Trajectory: complete deterministic GCEC → ChatGPT Final Critical Review → ONLY IF PASS next bounded proof-repo/REAL campaign
- No REAL gate opened by this lot

## FINAL CRITICAL REVIEW INPUT
This pack is the deterministic fail-closed hardening of CR-GCEC-23 before Final Critical Review.
Three blocking micro-findings closed without architecture redesign:
1. Protected Git + unavailable canonical repo target → NEVER authorized (23H-A)
2. Merge required + no unique VERIFIED PR → merge explicitly unavailable; earlier slices may proceed (23H-B)
3. git:pull_request Evidence without exact repository identity → ineligible (23H-C)

---

## CR-GCEC-23H-A — CLOSED

### Resolver missing / binding unavailable behavior
- If remaining protected Git effects exist and `resolveProjectRepositoryBinding` is unconfigured:
  - hostile `request.confirmationMatch` → hard fail `project_repository_binding_resolver_unconfigured`
  - no assertion → ephemeral `unavailableProtectedEffects` ← remaining Git; never invent target from caller Confirmation
- If resolver returns missing/empty identity: remaining Git pushed to `unavailableProtectedEffects` (non-Git slices may continue)
- Domain `confirmationGrantsEffect` refuses incomplete canonical match (`repositoryRef=""` etc.) — defense in depth against alternate callers

### Domain defense in depth
- New `canonicalGitTargetCompleteForEffect`:
  - all protected Git: require non-empty `executionContractId` + `repositoryRef`
  - push / pr.create: require branch/ref
  - merge: require branch/ref + integer prNumber ≥ 1
  - commit: empty branch string incomplete; undefined branch allowed when EC never defined one
- Never builds authorizable actionRef from empty repositoryRef
- `unavailableProtectedEffects` force-blocks with `canonical_target_unavailable:*` even if Confirmation looks exact

### Tests
- H23A-N1 (app): missing Project binding + crafted empty-repo Confirmation + FS already verified → `no_authorized_effect`; Fake Cursor not launched
- H23A-N2 (app): missing binding → filesystem authorized; git.* blocked
- H23A-N3 (domain): `repositoryRef=""` Confirmation → git.commit NOT authorized
- H23A-P1 (domain): canonical repo+branch+exact Confirmation → authorized
- Plus domain `unavailableProtectedEffects` force-block with crafted Confirmation

---

## CR-GCEC-23H-B — CLOSED

### Merge missing / ambiguous PR behavior
- On merge resolve failure `verified_pull_request_identity_missing|ambiguous`:
  - hostile `confirmationMatch.prNumber` still hard-fails
  - otherwise `github.pr.merge` added to ephemeral `unavailableProtectedEffects`
- Merge cannot be authorized without unique VERIFIED PR identity + exact Confirmation
- Generic / guessed PR Confirmation cannot compensate
- `request.confirmationMatch.prNumber` never supplies authority

### Earlier slice progression preserved (D-GCEC-15)
- Missing/ambiguous PR does NOT abort Start for earlier non-merge authorized effects
- H23B-N3: full vertical requirements before VERIFIED PR → FS slice executes; merge blocked

### Tests
- H23B-N1: merge + no VERIFIED PR + Confirmation for #1 → not authorized (+ unavailable set)
- H23B-N2: two distinct VERIFIED PR identities → ambiguous
- H23B-N3 (app): earlier slice runs; merge blocked
- H23B-P1 (domain + app): unique VERIFIED PR #41 + exact merge Confirmation → authorized

---

## CR-GCEC-23H-C — CLOSED

### Exact PR repository binding
`resolveVerifiedPullRequestNumber` now requires:
- status verified, source git:pull_request
- project / EC / cycle bindings exact
- **repository identity PRESENT and exact** (absent ⇒ skip/ineligible)
- prNumber present, integer ≥ 1
Then: 0 → missing; >1 unique → ambiguous; 1 → trusted

### Malformed Evidence rejection
- No repo in location → reject
- Wrong repo → reject
- Missing prNumber → reject
- Malformed no-repo row does NOT make a unique valid PR ambiguous (H23C-N4)

### Tests
- H23C-N1 / N2 / N3 / N4 / P1 — all green

---

## CR23 prior server-target tests: NON-REGRESSION
C23-N1..N4, C23-P1/P2 in `gcecCr23StartExecution.d0.test.ts` PASS (hostile repo/branch/PR/actor still refused; matching assertion non-authoritative).

## CR24: NON-REGRESSION
C24 classification negatives remain in `gcecD15Negatives.d0.test.ts` — PASS within related + full suite.

## CR25: NON-REGRESSION
`gcecProductMonolithicE2e.d0.test.ts` PASS — LR → candidate → approve → prepareCycleFromValidatedTrajectory → startPreparedTrajectoryCycle; no `cycles.save` mid-path.

## D-GCEC-15: NON-REGRESSION
Progressive multi-Attempt / same EC preserved; merge unresolved does not block earlier slices.

## Principal E2E: PASS
File not modified this lot; suite green.

## Critical modified files — FULL reviewable diffs

### 1) authorizedExecutionSlice.ts
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
index 39544db7..05182fc5 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
@@ -110,10 +110,46 @@ function scopeIndicatesEffectClass(
   );
 }

+/**
+ * CR-GCEC-23H-A — canonical target must be complete before Confirmation can grant.
+ * Incomplete identity never builds an authorizable actionRef.
+ */
+export function canonicalGitTargetCompleteForEffect(
+  effect:
+    | "git.commit"
+    | "git.push"
+    | "github.pr.create"
+    | "github.pr.merge",
+  match: GitEffectConfirmationMatch,
+): boolean {
+  if (!match.executionContractId?.trim()) return false;
+  if (!match.repositoryRef?.trim()) return false;
+  switch (effect) {
+    case "git.commit":
+      // Empty/whitespace branch is incomplete when supplied; undefined is allowed
+      // when the EC never defined a working branch.
+      if (match.branchOrRef !== undefined && !match.branchOrRef.trim()) {
+        return false;
+      }
+      return true;
+    case "git.push":
+    case "github.pr.create":
+      return Boolean(match.branchOrRef?.trim());
+    case "github.pr.merge":
+      return (
+        Boolean(match.branchOrRef?.trim()) &&
+        match.prNumber != null &&
+        Number.isInteger(match.prNumber) &&
+        match.prNumber >= 1
+      );
+  }
+}
+
 /**
  * CR-GCEC-19 — exact target binding. No startsWith / includes fallback on
  * actionRef. Generic actionRef or generic scope alone never authorizes a
  * concrete repo/branch/PR effect.
+ * CR-GCEC-23H-A — incomplete canonical match ⇒ never authorize.
  */
 export function confirmationGrantsEffect(
   confirmations: readonly Confirmation[],
@@ -125,11 +161,14 @@ export function confirmationGrantsEffect(
   nowIso: string,
   match: GitEffectConfirmationMatch,
 ): boolean {
+  if (!canonicalGitTargetCompleteForEffect(effect, match)) {
+    return false;
+  }
   const scopeNeedle = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
   const expected = buildGitEffectActionRef({
     executionContractId: match.executionContractId,
     effect,
-    repositoryRef: match.repositoryRef ?? "",
+    repositoryRef: match.repositoryRef!,
     branchOrRef: match.branchOrRef,
     prNumber: match.prNumber,
   });
@@ -181,11 +220,18 @@ export function deriveAuthorizedExecutionSlice(input: {
     prNumber?: number;
     actorId?: string;
   };
+  /**
+   * CR-GCEC-23H-A/B — protected Git effects whose canonical server target is
+   * unavailable (missing binding resolver, missing/ambiguous VERIFIED PR, etc.).
+   * These MUST NOT be authorized even if Confirmation appears to match.
+   */
+  unavailableProtectedEffects?: readonly CursorAuthorizedEffectId[];
 }): AuthorizedExecutionSlice {
   const nowIso = input.nowIso ?? new Date().toISOString();
   const confirmations = input.confirmations ?? [];
   const verified = new Set(input.verifiedEffects ?? []);
   const waiting = new Set(input.waitingVerificationEffects ?? []);
+  const unavailable = new Set(input.unavailableProtectedEffects ?? []);
   const authorized: CursorAuthorizedEffectId[] = [];
   const blocked: CursorAuthorizedEffectId[] = [];
   const reasons: string[] = [];
@@ -213,6 +259,11 @@ export function deriveAuthorizedExecutionSlice(input: {
       effect === "github.pr.create" ||
       effect === "github.pr.merge";
     if (isGit) {
+      if (unavailable.has(effect)) {
+        blocked.push(effect);
+        reasons.push(`canonical_target_unavailable:${effect}`);
+        continue;
+      }
       if (
         confirmationGrantsEffect(confirmations, effect, nowIso, {
           executionContractId: input.executionContractId,

### 2) resolveGitEffectTarget.ts
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
index 1e66278c..274aa5a1 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
@@ -64,6 +64,7 @@ function branchFromContractInputs(
  * Extract a single trustworthy PR number from VERIFIED git:pull_request Evidence
  * bound to the same project / cycle / EC / repository.
  * Fail closed when zero or ambiguous.
+ * CR-GCEC-23H-C — repository identity MUST be present and exact (no repo → reject).
  */
 export function resolveVerifiedPullRequestNumber(input: {
   evidence: readonly Evidence[];
@@ -92,10 +93,10 @@ export function resolveVerifiedPullRequestNumber(input: {
     }
     const loc = typeof e.location === "string" ? e.location : "";
     const repoMatch = loc.match(/[?&]repo=([^&]+)/);
-    if (repoMatch) {
-      const repo = decodeURIComponent(repoMatch[1]!);
-      if (repo !== input.repositoryRef) continue;
-    }
+    // CR-GCEC-23H-C — repository identity is mandatory; absent ⇒ ineligible.
+    if (!repoMatch) continue;
+    const repo = decodeURIComponent(repoMatch[1]!);
+    if (!repo.trim() || repo !== input.repositoryRef) continue;
     const prMatch = loc.match(/[?&]prNumber=([^&]+)/);
     if (!prMatch) continue;
     const n = Number(decodeURIComponent(prMatch[1]!));

### 3) startExecution.ts
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index e07ba833..b72c0dae 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -935,18 +935,23 @@ export class StartExecution {
           actorId?: string;
         }
       | undefined;
+    /** CR-GCEC-23H-A/B — ephemeral; never persisted. */
+    const unavailableProtectedEffects: Array<
+      "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
+    > = [];

-    if (gitExecutable.length > 0 && this.resolveProjectRepositoryBinding) {
+    const remainingGit = gitExecutable.filter(
+      (e) => !(request.verifiedEffects ?? []).includes(e),
+    );
+
+    if (remainingGit.length > 0 && this.resolveProjectRepositoryBinding) {
       const binding = await this.resolveProjectRepositoryBinding(
         contract.projectId,
       );
       if (!binding?.identity?.trim()) {
-        return fail(
-          "ATTEMPT_INVALID",
-          "project_repository_binding_missing",
-          { executionContractId: contract.executionContractId },
-        );
-      }
+        // Canonical repository unavailable — all remaining protected Git blocked.
+        unavailableProtectedEffects.push(...remainingGit);
+      } else {
       // Prefer Project binding identity for workspace resolution.
       const contractInputs =
         contract.inputs && typeof contract.inputs === "object"
@@ -982,10 +987,7 @@ export class StartExecution {
       // Resolve per remaining executable git effect from durable Product truth.
       // Progressive D-GCEC-15: missing VERIFIED PR must NOT fail Start when merge
       // is not yet runnable — merge stays blocked until trusted PR identity exists.
-      for (const effect of gitExecutable) {
-        if ((request.verifiedEffects ?? []).includes(effect)) {
-          continue;
-        }
+      for (const effect of remainingGit) {
         const resolved = resolveGitEffectTarget({
           effect,
           contract,
@@ -1007,11 +1009,13 @@ export class StartExecution {
                 { executionContractId: contract.executionContractId },
               );
             }
+            // CR-GCEC-23H-B — merge explicitly unavailable; earlier slices continue.
+            unavailableProtectedEffects.push("github.pr.merge");
             continue;
           }
-          return fail("ATTEMPT_INVALID", resolved.reason, {
-            executionContractId: contract.executionContractId,
-          });
+          // Other resolution failures: effect unavailable; do not invent a target.
+          unavailableProtectedEffects.push(effect);
+          continue;
         }
         const assertOk = assertConfirmationMatchAgreesWithServerTarget({
           assertion: request.confirmationMatch,
@@ -1026,19 +1030,18 @@ export class StartExecution {
           resolved.target,
         );
       }
-    } else if (
-      gitExecutable.length > 0 &&
-      !this.resolveProjectRepositoryBinding &&
-      request.confirmationMatch
-    ) {
-      // Hostile assertion present without server resolver → refuse (cannot
-      // validate against Product truth). Unconfigured harnesses without
-      // assertion leave git blocked via empty confirmationMatch.
-      return fail(
-        "ATTEMPT_INVALID",
-        "project_repository_binding_resolver_unconfigured",
-        { executionContractId: contract.executionContractId },
-      );
+      }
+    } else if (remainingGit.length > 0 && !this.resolveProjectRepositoryBinding) {
+      // CR-GCEC-23H-A — resolver absent: never derive Git authority from caller.
+      // Non-Git slices may still proceed; all remaining protected Git stay blocked.
+      if (request.confirmationMatch) {
+        return fail(
+          "ATTEMPT_INVALID",
+          "project_repository_binding_resolver_unconfigured",
+          { executionContractId: contract.executionContractId },
+        );
+      }
+      unavailableProtectedEffects.push(...remainingGit);
     }

     const authorizedSlice = deriveAuthorizedExecutionSlice({
@@ -1053,6 +1056,7 @@ export class StartExecution {
       confirmations: request.confirmations ?? [],
       verifiedEffects: request.verifiedEffects,
       confirmationMatch: serverConfirmationMatch,
+      unavailableProtectedEffects,
     });
     // Fail only when the contract requires Cursor-executable effects but none
     // are currently authorized (e.g. git Confirmation missing). Read-only /

### 4) gcecD15Negatives.d0.test.ts (H23A/B/C domain proofs)
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
index 5b1b2700..64a95587 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
@@ -1623,4 +1623,350 @@ describe("gcecD15Negatives — N1–N28", () => {
       }).ok,
     ).toBe(true);
   });
+
+  it("H23A-P1 canonical repo + branch + exact Confirmation → git.commit authorized", () => {
+    const actionRef = buildGitEffectActionRef({
+      executionContractId: "xct:h23a-p1",
+      effect: "git.commit",
+      repositoryRef: REPO,
+      branchOrRef: "main",
+    });
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:h23a-p1",
+      evidenceRequirements: ["git:local_commit"],
+      confirmations: [
+        grantedCnf({
+          confirmationId: "cnf:h23a-p1",
+          actionRef,
+          scope: actionRef,
+          requestedTo: { actorId: "actor:pilote", role: "pilote" },
+        }),
+      ],
+      confirmationMatch: {
+        repositoryRef: REPO,
+        branchOrRef: "main",
+        actorId: "actor:pilote",
+      },
+    });
+    expect(slice.authorizedEffects).toContain("git.commit");
+  });
+
+  it("H23A-N3 empty repositoryRef Confirmation cannot authorize git.commit", () => {
+    const emptyRef = buildGitEffectActionRef({
+      executionContractId: "xct:h23a-n3",
+      effect: "git.commit",
+      repositoryRef: "",
+      branchOrRef: "main",
+    });
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:h23a-n3",
+      evidenceRequirements: ["git:local_commit"],
+      confirmations: [
+        grantedCnf({
+          confirmationId: "cnf:h23a-n3",
+          actionRef: emptyRef,
+          scope: emptyRef,
+        }),
+      ],
+      confirmationMatch: {
+        repositoryRef: "",
+        branchOrRef: "main",
+      },
+    });
+    expect(slice.authorizedEffects).not.toContain("git.commit");
+    expect(slice.blockedEffects).toContain("git.commit");
+  });
+
+  it("H23A unavailableProtectedEffects blocks git even with crafted Confirmation", () => {
+    const actionRef = buildGitEffectActionRef({
+      executionContractId: "xct:h23a-u",
+      effect: "git.commit",
+      repositoryRef: REPO,
+      branchOrRef: "main",
+    });
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:h23a-u",
+      evidenceRequirements: ["artifact", "git:local_commit"],
+      requiredCapabilities: ["cap:cursor.docs_write"],
+      confirmations: [
+        grantedCnf({
+          confirmationId: "cnf:h23a-u",
+          actionRef,
+          scope: actionRef,
+        }),
+      ],
+      confirmationMatch: {
+        repositoryRef: REPO,
+        branchOrRef: "main",
+        actorId: "a",
+      },
+      unavailableProtectedEffects: ["git.commit"],
+    });
+    expect(slice.authorizedEffects).toContain("filesystem.create");
+    expect(slice.authorizedEffects).not.toContain("git.commit");
+    expect(slice.reasons.some((r) => r.includes("canonical_target_unavailable"))).toBe(
+      true,
+    );
+  });
+
+  it("H23B-N1 merge without VERIFIED PR + crafted Confirmation → not authorized", async () => {
+    const { resolveGitEffectTarget } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const resolved = resolveGitEffectTarget({
+      effect: "github.pr.merge",
+      contract: {
+        executionContractId: "xct:h23b-n1",
+        projectId: "prj:gcec",
+        cycleInstanceId: CYCLE,
+        inputs: {},
+      },
+      projectRepositoryBinding: {
+        provider: "github",
+        identity: REPO,
+        remoteUrl: `https://github.com/${REPO}.git`,
+        defaultBranch: "main",
+      },
+      actorId: "actor:pilote",
+      verifiedEvidence: [],
+    });
+    expect(resolved.ok).toBe(false);
+    const actionRef = buildGitEffectActionRef({
+      executionContractId: "xct:h23b-n1",
+      effect: "github.pr.merge",
+      repositoryRef: REPO,
+      branchOrRef: "main",
+      prNumber: 1,
+    });
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:h23b-n1",
+      evidenceRequirements: ["git:merge"],
+      confirmations: [
+        grantedCnf({
+          confirmationId: "cnf:h23b-n1",
+          actionRef,
+          scope: actionRef,
+        }),
+      ],
+      confirmationMatch: {
+        repositoryRef: REPO,
+        branchOrRef: "main",
+        // no prNumber — incomplete canonical target
+      },
+      unavailableProtectedEffects: ["github.pr.merge"],
+    });
+    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
+  });
+
+  it("H23B-N2 ambiguous VERIFIED PR identities → resolve fails", async () => {
+    const { resolveVerifiedPullRequestNumber } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const evidence = [
+      baseEvidence({
+        evidenceId: "ev:pr41",
+        status: "verified",
+        source: "git:pull_request",
+        location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41`,
+        bindings: {
+          projectId: "prj:gcec",
+          cycleInstanceId: CYCLE,
+          executionContractId: "xct:h23b-n2",
+        },
+      }),
+      baseEvidence({
+        evidenceId: "ev:pr42",
+        status: "verified",
+        source: "git:pull_request",
+        location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=42`,
+        bindings: {
+          projectId: "prj:gcec",
+          cycleInstanceId: CYCLE,
+          executionContractId: "xct:h23b-n2",
+        },
+      }),
+    ];
+    const r = resolveVerifiedPullRequestNumber({
+      evidence,
+      projectId: "prj:gcec",
+      cycleInstanceId: CYCLE,
+      executionContractId: "xct:h23b-n2",
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("verified_pull_request_identity_ambiguous");
+  });
+
+  it("H23B-P1 unique VERIFIED PR + exact merge Confirmation → authorized", () => {
+    const actionRef = buildGitEffectActionRef({
+      executionContractId: "xct:h23b-p1",
+      effect: "github.pr.merge",
+      repositoryRef: REPO,
+      branchOrRef: "main",
+      prNumber: 41,
+    });
+    const slice = deriveAuthorizedExecutionSlice({
+      executionContractId: "xct:h23b-p1",
+      evidenceRequirements: ["git:merge"],
+      confirmations: [
+        grantedCnf({
+          confirmationId: "cnf:h23b-p1",
+          actionRef,
+          scope: actionRef,
+          requestedTo: { actorId: "actor:pilote", role: "pilote" },
+        }),
+      ],
+      confirmationMatch: {
+        repositoryRef: REPO,
+        branchOrRef: "main",
+        prNumber: 41,
+        actorId: "actor:pilote",
+      },
+    });
+    expect(slice.authorizedEffects).toContain("github.pr.merge");
+  });
+
+  it("H23C-N1 VERIFIED PR without repository identity → ineligible", async () => {
+    const { resolveVerifiedPullRequestNumber } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const r = resolveVerifiedPullRequestNumber({
+      evidence: [
+        baseEvidence({
+          evidenceId: "ev:pr-norepo",
+          status: "verified",
+          source: "git:pull_request",
+          location: "git:pull_request?prNumber=41",
+          bindings: {
+            projectId: "prj:gcec",
+            cycleInstanceId: CYCLE,
+            executionContractId: "xct:h23c-n1",
+          },
+        }),
+      ],
+      projectId: "prj:gcec",
+      cycleInstanceId: CYCLE,
+      executionContractId: "xct:h23c-n1",
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) expect(r.reason).toBe("verified_pull_request_identity_missing");
+  });
+
+  it("H23C-N2 VERIFIED PR wrong repository → ineligible", async () => {
+    const { resolveVerifiedPullRequestNumber } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const r = resolveVerifiedPullRequestNumber({
+      evidence: [
+        baseEvidence({
+          evidenceId: "ev:pr-wrong",
+          status: "verified",
+          source: "git:pull_request",
+          location: "git:pull_request?repo=other%2Frepo&prNumber=41",
+          bindings: {
+            projectId: "prj:gcec",
+            cycleInstanceId: CYCLE,
+            executionContractId: "xct:h23c-n2",
+          },
+        }),
+      ],
+      projectId: "prj:gcec",
+      cycleInstanceId: CYCLE,
+      executionContractId: "xct:h23c-n2",
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(false);
+  });
+
+  it("H23C-N3 VERIFIED PR missing prNumber → ineligible", async () => {
+    const { resolveVerifiedPullRequestNumber } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const r = resolveVerifiedPullRequestNumber({
+      evidence: [
+        baseEvidence({
+          evidenceId: "ev:pr-nopr",
+          status: "verified",
+          source: "git:pull_request",
+          location: `git:pull_request?repo=${encodeURIComponent(REPO)}`,
+          bindings: {
+            projectId: "prj:gcec",
+            cycleInstanceId: CYCLE,
+            executionContractId: "xct:h23c-n3",
+          },
+        }),
+      ],
+      projectId: "prj:gcec",
+      cycleInstanceId: CYCLE,
+      executionContractId: "xct:h23c-n3",
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(false);
+  });
+
+  it("H23C-P1 exact project/cycle/EC/repo/pr → trusted #41", async () => {
+    const { resolveVerifiedPullRequestNumber } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const r = resolveVerifiedPullRequestNumber({
+      evidence: [
+        baseEvidence({
+          evidenceId: "ev:pr-ok",
+          status: "verified",
+          source: "git:pull_request",
+          location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41`,
+          bindings: {
+            projectId: "prj:gcec",
+            cycleInstanceId: CYCLE,
+            executionContractId: "xct:h23c-p1",
+          },
+        }),
+      ],
+      projectId: "prj:gcec",
+      cycleInstanceId: CYCLE,
+      executionContractId: "xct:h23c-p1",
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(true);
+    if (r.ok) expect(r.prNumber).toBe(41);
+  });
+
+  it("H23C-N4 malformed no-repo row does not make unique #41 ambiguous", async () => {
+    const { resolveVerifiedPullRequestNumber } = await import(
+      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
+    );
+    const r = resolveVerifiedPullRequestNumber({
+      evidence: [
+        baseEvidence({
+          evidenceId: "ev:pr-ok41",
+          status: "verified",
+          source: "git:pull_request",
+          location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41`,
+          bindings: {
+            projectId: "prj:gcec",
+            cycleInstanceId: CYCLE,
+            executionContractId: "xct:h23c-n4",
+          },
+        }),
+        baseEvidence({
+          evidenceId: "ev:pr-malformed42",
+          status: "verified",
+          source: "git:pull_request",
+          location: "git:pull_request?prNumber=42",
+          bindings: {
+            projectId: "prj:gcec",
+            cycleInstanceId: CYCLE,
+            executionContractId: "xct:h23c-n4",
+          },
+        }),
+      ],
+      projectId: "prj:gcec",
+      cycleInstanceId: CYCLE,
+      executionContractId: "xct:h23c-n4",
+      repositoryRef: REPO,
+    });
+    expect(r.ok).toBe(true);
+    if (r.ok) expect(r.prNumber).toBe(41);
+  });
 });

### 5) gcecCr23StartExecution.d0.test.ts (H23A/B application proofs)
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
index 5e0bede8..54a4746b 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
@@ -222,7 +222,11 @@ async function grantCnf(input: {
  * Product path through confirmed docs-write EC (git:local_commit present).
  * Returns before any StartExecution.
  */
-async function bootToConfirmedEc(suffix: string) {
+async function bootToConfirmedEc(
+  suffix: string,
+  options: { withRepositoryBinding?: boolean } = {},
+) {
+  const withRepositoryBinding = options.withRepositoryBinding !== false;
   const root = tempDir(`sfia-c23-${suffix}-`);
   const managedBase = path.join(root, "managed");
   const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
@@ -267,19 +271,21 @@ async function bootToConfirmedEc(suffix: string) {
   if (!created.ok) throw new Error("createProject failed");
   const projectId = created.project.projectId;

-  const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
-    projectId,
-    actor: PILOTE,
-    binding: {
-      provider: "github",
-      identity: IDENTITY,
-      remoteUrl: `https://github.com/${IDENTITY}.git`,
-      defaultBranch: "main",
-      pathRoot: "docs",
-      baseSha: baseHeadSha,
-    },
-  });
-  expect(bound.ok).toBe(true);
+  if (withRepositoryBinding) {
+    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
+      projectId,
+      actor: PILOTE,
+      binding: {
+        provider: "github",
+        identity: IDENTITY,
+        remoteUrl: `https://github.com/${IDENTITY}.git`,
+        defaultBranch: "main",
+        pathRoot: "docs",
+        baseSha: baseHeadSha,
+      },
+    });
+    expect(bound.ok).toBe(true);
+  }

   const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
   const decisions0 = await oa.decisionServices.decisions.listByProject(
@@ -877,4 +883,189 @@ describe("gcecCr23StartExecution — application boundary", () => {
       IDENTITY,
     );
   }, 90_000);
+
+  it("H23A-N1 missing Project repository binding + crafted empty-repo Confirmation → git.commit refused", async () => {
+    const ctx = await bootToConfirmedEc("h23a-n1", {
+      withRepositoryBinding: false,
+    });
+    const emptyRef = buildGitEffectActionRef({
+      executionContractId: ctx.contract.executionContractId,
+      effect: "git.commit",
+      repositoryRef: "",
+      branchOrRef: BRANCH,
+    });
+    const cnf = await grantCnf({
+      runtime: ctx.runtime,
+      confirmationId: `cfm:h23a-n1:${ctx.contract.executionContractId}`.slice(
+        0,
+        128,
+      ),
+      actionRef: emptyRef,
+      decisionRef: ctx.decisionId,
+    });
+    const callsBefore = ctx.fakeLaunch.calls.length;
+    const started = await selectGate({
+      runtime: ctx.runtime,
+      attemptId: `xat:h23a-n1:${ctx.contract.executionContractId}`.slice(0, 128),
+      executionContractId: ctx.contract.executionContractId,
+      contractVersion: ctx.contract.version,
+      grantId: "gd:h23a-n1",
+      authorityEvidenceId: ctx.execAuthEvidenceId,
+      confirmations: [cnf],
+      // no confirmationMatch — incomplete target must still fail closed
+      verifiedEffects: ["filesystem.create", "filesystem.modify"],
+    });
+    expect(started.ok).toBe(false);
+    if (!started.ok) {
+      expect(started.error.internalCauseRef).toBe("no_authorized_effect");
+    }
+    expect(ctx.fakeLaunch.calls.length).toBe(callsBefore);
+  }, 90_000);
+
+  it("H23A-N2 missing binding: filesystem may authorize; git.commit blocked", async () => {
+    const ctx = await bootToConfirmedEc("h23a-n2", {
+      withRepositoryBinding: false,
+    });
+    const emptyRef = buildGitEffectActionRef({
+      executionContractId: ctx.contract.executionContractId,
+      effect: "git.commit",
+      repositoryRef: "",
+      branchOrRef: BRANCH,
+    });
+    const cnf = await grantCnf({
+      runtime: ctx.runtime,
+      confirmationId: `cfm:h23a-n2:${ctx.contract.executionContractId}`.slice(
+        0,
+        128,
+      ),
+      actionRef: emptyRef,
+      decisionRef: ctx.decisionId,
+    });
+    const started = await selectGate({
+      runtime: ctx.runtime,
+      attemptId: `xat:h23a-n2:${ctx.contract.executionContractId}`.slice(0, 128),
+      executionContractId: ctx.contract.executionContractId,
+      contractVersion: ctx.contract.version,
+      grantId: "gd:h23a-n2",
+      authorityEvidenceId: ctx.execAuthEvidenceId,
+      confirmations: [cnf],
+    });
+    expect(started.ok).toBe(true);
+    if (!started.ok) throw new Error(started.error.message);
+    const last = ctx.fakeLaunch.calls.at(-1);
+    expect(last?.authorizedEffects).toEqual(
+      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
+    );
+    expect(last?.authorizedEffects).not.toContain("git.commit");
+    expect(last?.authorizedEffects).not.toContain("git.push");
+    expect(last?.authorizedEffects).not.toContain("github.pr.create");
+    expect(last?.authorizedEffects).not.toContain("github.pr.merge");
+  }, 90_000);
+
+  it("H23B-N3 full vertical before VERIFIED PR: earlier slice runs; merge blocked", async () => {
+    const ctx = await bootToConfirmedEc("h23b-n3");
+    const mergeRef = buildGitEffectActionRef({
+      executionContractId: ctx.contract.executionContractId,
+      effect: "github.pr.merge",
+      repositoryRef: IDENTITY,
+      branchOrRef: "main",
+      prNumber: 1,
+    });
+    const cnf = await grantCnf({
+      runtime: ctx.runtime,
+      confirmationId: `cfm:h23b-n3:${ctx.contract.executionContractId}`.slice(
+        0,
+        128,
+      ),
+      actionRef: mergeRef,
+      decisionRef: ctx.decisionId,
+    });
+    const started = await selectGate({
+      runtime: ctx.runtime,
+      attemptId: `xat:h23b-n3:${ctx.contract.executionContractId}`.slice(0, 128),
+      executionContractId: ctx.contract.executionContractId,
+      contractVersion: ctx.contract.version,
+      grantId: "gd:h23b-n3",
+      authorityEvidenceId: ctx.execAuthEvidenceId,
+      confirmations: [cnf],
+    });
+    expect(started.ok).toBe(true);
+    if (!started.ok) throw new Error(started.error.message);
+    const last = ctx.fakeLaunch.calls.at(-1);
+    expect(last?.authorizedEffects).toEqual(
+      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
+    );
+    expect(last?.authorizedEffects).not.toContain("github.pr.merge");
+  }, 90_000);
+
+  it("H23B-P1 unique VERIFIED PR + exact merge Confirmation → merge authorized", async () => {
+    const ctx = await bootToConfirmedEc("h23b-p1");
+    ctx.gitState.currentBranch = "feature";
+    ctx.gitState.branchHeads.set(
+      "feature",
+      "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
+    );
+    ctx.gitState.prs.clear();
+    ctx.gitState.prs.set(41, {
+      number: 41,
+      headSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
+      base: "main",
+      state: "open",
+      headBranch: "feature",
+    });
+    const repoRead = new FakeRepositoryReadPorts({ gitState: ctx.gitState });
+    const v = await verifyPullRequestClaim({
+      repositoryRead: repoRead,
+      evidenceServices: ctx.oa.evidenceReviewServices,
+      repositoryRef: IDENTITY,
+      claimedPrNumber: 41,
+      claimedHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
+      bindings: {
+        projectId: ctx.projectId,
+        cycleInstanceId: ctx.cycleInstanceId,
+        executionContractId: ctx.contract.executionContractId,
+      },
+      actor: PILOTE,
+      nowIso: NOW,
+    });
+    expect(v.ok).toBe(true);
+    if (!v.ok) throw new Error(v.reason);
+
+    const mergeRef = buildGitEffectActionRef({
+      executionContractId: ctx.contract.executionContractId,
+      effect: "github.pr.merge",
+      repositoryRef: IDENTITY,
+      branchOrRef: "main",
+      prNumber: 41,
+    });
+    const cnf = await grantCnf({
+      runtime: ctx.runtime,
+      confirmationId: `cfm:h23b-p1:${ctx.contract.executionContractId}`.slice(
+        0,
+        128,
+      ),
+      actionRef: mergeRef,
+      decisionRef: ctx.decisionId,
+    });
+    const started = await selectGate({
+      runtime: ctx.runtime,
+      attemptId: `xat:h23b-p1:${ctx.contract.executionContractId}`.slice(0, 128),
+      executionContractId: ctx.contract.executionContractId,
+      contractVersion: ctx.contract.version,
+      grantId: "gd:h23b-p1",
+      authorityEvidenceId: ctx.execAuthEvidenceId,
+      confirmations: [cnf],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+        "git.push",
+        "github.pr.create",
+      ],
+    });
+    expect(started.ok).toBe(true);
+    if (!started.ok) throw new Error(started.error.message);
+    const last = ctx.fakeLaunch.calls.at(-1);
+    expect(last?.authorizedEffects).toContain("github.pr.merge");
+  }, 90_000);
 });

Full post-commit file copies also under:
`.tmp-sfia-review/gcec-cr23h-reviewable/full_*`

---

## Persistence
- NO TABLE
- NO MIGRATION
- NO STORE
- NO persistent unresolved-effects record
- `unavailableProtectedEffects` is ephemeral/derived only

## Fake/Real
- ZERO REAL
- Fake Cursor / FakeDocsWriteLaunchPort only
- Disposable local Git allowed
- Review Handoff publication authorized (only remote mutation)

## FILES CREATED
- none in Product tree (tests/code only modified)

## FILES MODIFIED
1. `projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts`
2. `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts`
3. `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`
4. `projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts`
5. `projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts`

## FILES DELETED
- none

## TEST COMMANDS / EXACT COUNTS
Focused (Cr23 + D15 + E2E + ownership):
- `npx vitest run __tests__/oa/cycle/gcecD15Negatives.d0.test.ts __tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts __tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts __tests__/oa/cycle/gcecOwnershipNegatives.d0.test.ts`
- **94 passed**

Related (all gcec cycle + execution-attempt):
- `npx vitest run __tests__/oa/cycle/gcec*.d0.test.ts __tests__/oa/execution-attempt/`
- **295 passed** (23 files)

Full:
- `npx vitest run`
- **3652 passed | 135 skipped** (339 files passed | 17 skipped)

Quality gates:
- `npm run typecheck` — PASS
- `npm run lint` — PASS (No ESLint warnings or errors)
- `npm run build` — PASS
- `git diff --check` (Product paths) — PASS

## LOCAL COMMIT
- SHA: `290eca6544f93a898fc3920f99142dc6130ba05e`
- parent: `8d05732c0be7eced7a6acee71d1e1d990a1e8db0`
- tree: `d162ac4e94cc87283b17f4104b2a9044bdb41476`
- message: `fix(sfia-studio): fail closed protected Git authority`

## PRODUCT PUSH
NONE

## PROOF REPO
NOT CREATED

## OPEN GATES (remain CLOSED)
- GCEC-REPO-CREATE
- GCEC-CURSOR-REAL
- GCEC-PUSH
- GCEC-PR
- GCEC-MERGE
- GCEC-RUNTIME-V3

## DEBT
- TEMP-GCEC-PRPM-01
- TEMP-GCEC-F14-BIND-01

## ANTI-CLAIMS
- deterministic ≠ REAL
- local commit ≠ PR readiness
- Review Handoff ≠ Product Git proof
- proof repo NOT CREATED
- Product Completion CLOSED
- runtime v3 NON ADOPTED

## VERDICT
**PASS — GCEC DETERMINISTIC CYCLE-CLOSURE ARC COMPLETE / READY FOR FINAL CHATGPT CLOSURE REVIEW**

Success conditions 1–20 all met:
1–3 fail-closed protected Git without canonical target; non-Git slices may proceed
4–6 merge blocked without unique VERIFIED PR / ambiguous blocked
7–9 PR Evidence strict repo binding
10 hostile overrides refused
11–13 CR24/25/D15 non-regression
14–18 principal E2E / ownership / evidence / finalize / no implicit next
19 GCEC-PERSIST closed
20 ZERO REAL

## FULL FILE EMBEDS (critical Product sources @ 290eca65)

### FULL: `projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts`
```typescript
/**
 * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13/15).
 * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
 * Future gated effects are NOT granted in advance.
 * CR-GCEC-15: cap:cursor.docs_write does NOT imply Git effects.
 * CR-GCEC-19: protected Git effects require effect-target-bound Confirmation
 * (EC + effect + repo + branch/PR when applicable) — generic scope ≠ target identity.
 * CR-GCEC-24: Cursor executable effects ≠ Studio verification obligations.
 */
import { createHash } from "node:crypto";
import type { Confirmation } from "@/lib/oa/decision";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import { deriveExecutableEffectsFromContractRequirements } from "./contractEffectClassification";

export type AuthorizedExecutionSlice = {
  executionContractId: string;
  attemptLineageKey: string;
  authorizedEffects: CursorAuthorizedEffectId[];
  blockedEffects: CursorAuthorizedEffectId[];
  reasons: string[];
};

/** OA identifier max length — actionRef must stay within bound. */
export const OA_ACTION_REF_MAX_LENGTH = 128;

const GIT_EFFECT_CONFIRMATION_SCOPE: Record<
  Extract<
    CursorAuthorizedEffectId,
    "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
  >,
  string
> = {
  "git.commit": "git:local_commit",
  "git.push": "git:remote_push",
  "github.pr.create": "git:pull_request",
  "github.pr.merge": "git:merge",
};

function sanitizeIdPart(value: string): string {
  return value.replace(/[^a-zA-Z0-9:._-]+/g, "");
}

function sanitizeRepoPart(value: string): string {
  return value.replace(/[^a-zA-Z0-9._-]+/g, "__");
}

/**
 * Canonical Confirmation actionRef for a protected Git effect.
 * Collision-safe under OA_ACTION_REF_MAX_LENGTH: when the plain form exceeds
 * the bound, use stable effect prefix + bounded EC + digest of the full
 * canonical target tuple (never truncate the distinguishing suffix alone).
 */
export function buildGitEffectActionRef(input: {
  executionContractId: string;
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge";
  repositoryRef: string;
  branchOrRef?: string;
  prNumber?: number;
}): string {
  const scope = GIT_EFFECT_CONFIRMATION_SCOPE[input.effect];
  const scopeToken = scope.replace(/:/g, "-");
  const safeContract = sanitizeIdPart(input.executionContractId);
  const safeRepo = sanitizeRepoPart(input.repositoryRef);
  const parts = ["act", scopeToken, safeContract, safeRepo];
  if (input.branchOrRef) {
    parts.push(`ref:${sanitizeRepoPart(input.branchOrRef)}`);
  }
  if (input.prNumber != null) parts.push(`pr:${input.prNumber}`);
  const plain = parts.join(":");
  if (plain.length <= OA_ACTION_REF_MAX_LENGTH) return plain;

  const tuple = [
    input.executionContractId,
    input.effect,
    input.repositoryRef,
    input.branchOrRef ?? "",
    input.prNumber != null ? String(input.prNumber) : "",
  ].join("|");
  const digest = createHash("sha256").update(tuple).digest("hex").slice(0, 24);
  const ecBound =
    safeContract.length <= 48 ? safeContract : safeContract.slice(0, 48);
  const compact = `act:${scopeToken}:${ecBound}:${digest}`;
  return compact.length <= OA_ACTION_REF_MAX_LENGTH
    ? compact
    : compact.slice(0, OA_ACTION_REF_MAX_LENGTH);
}

export type GitEffectConfirmationMatch = {
  executionContractId: string;
  repositoryRef?: string;
  branchOrRef?: string;
  prNumber?: number;
  actorId?: string;
};

function scopeIndicatesEffectClass(
  scope: string,
  scopeNeedle: string,
  expectedActionRef: string,
): boolean {
  const hyphen = scopeNeedle.replace(/:/g, "-");
  return (
    scope.includes(scopeNeedle) ||
    scope.includes(hyphen) ||
    scope === expectedActionRef
  );
}

/**
 * CR-GCEC-23H-A — canonical target must be complete before Confirmation can grant.
 * Incomplete identity never builds an authorizable actionRef.
 */
export function canonicalGitTargetCompleteForEffect(
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge",
  match: GitEffectConfirmationMatch,
): boolean {
  if (!match.executionContractId?.trim()) return false;
  if (!match.repositoryRef?.trim()) return false;
  switch (effect) {
    case "git.commit":
      // Empty/whitespace branch is incomplete when supplied; undefined is allowed
      // when the EC never defined a working branch.
      if (match.branchOrRef !== undefined && !match.branchOrRef.trim()) {
        return false;
      }
      return true;
    case "git.push":
    case "github.pr.create":
      return Boolean(match.branchOrRef?.trim());
    case "github.pr.merge":
      return (
        Boolean(match.branchOrRef?.trim()) &&
        match.prNumber != null &&
        Number.isInteger(match.prNumber) &&
        match.prNumber >= 1
      );
  }
}

/**
 * CR-GCEC-19 — exact target binding. No startsWith / includes fallback on
 * actionRef. Generic actionRef or generic scope alone never authorizes a
 * concrete repo/branch/PR effect.
 * CR-GCEC-23H-A — incomplete canonical match ⇒ never authorize.
 */
export function confirmationGrantsEffect(
  confirmations: readonly Confirmation[],
  effect:
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge",
  nowIso: string,
  match: GitEffectConfirmationMatch,
): boolean {
  if (!canonicalGitTargetCompleteForEffect(effect, match)) {
    return false;
  }
  const scopeNeedle = GIT_EFFECT_CONFIRMATION_SCOPE[effect];
  const expected = buildGitEffectActionRef({
    executionContractId: match.executionContractId,
    effect,
    repositoryRef: match.repositoryRef!,
    branchOrRef: match.branchOrRef,
    prNumber: match.prNumber,
  });

  return confirmations.some((c) => {
    if (c.status !== "granted") return false;
    if (c.expiresAt && c.expiresAt < nowIso) return false;
    if (
      match.actorId &&
      c.requestedTo &&
      c.requestedTo.actorId !== match.actorId
    ) {
      return false;
    }
    if (c.actionRef === scopeNeedle) return false;
    if (!scopeIndicatesEffectClass(c.scope, scopeNeedle, expected)) {
      return false;
    }
    return c.actionRef === expected;
  });
}

/**
 * Derive the current authorized effect slice.
 * CR-GCEC-24: only Cursor-executable effects from the classification helper.
 * Git effects require Confirmation against server-derived confirmationMatch.
 */
export function deriveAuthorizedExecutionSlice(input: {
  executionContractId: string;
  attemptLineageKey?: string;
  requiredCapabilities?: readonly string[];
  evidenceRequirements?: readonly string[];
  expectedOutputs?: readonly string[];
  confirmations?: readonly Confirmation[];
  nowIso?: string;
  allowDelete?: boolean;
  /** Effects already VERIFIED — excluded from authorized re-execution. */
  verifiedEffects?: readonly CursorAuthorizedEffectId[];
  /** Effects reported but awaiting verification — not re-authorized. */
  waitingVerificationEffects?: readonly CursorAuthorizedEffectId[];
  /**
   * CR-GCEC-23 — MUST be server-derived target identity.
   * Domain helper still accepts the shape; StartExecution must not pass
   * caller confirmationMatch as authority.
   */
  confirmationMatch?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
  /**
   * CR-GCEC-23H-A/B — protected Git effects whose canonical server target is
   * unavailable (missing binding resolver, missing/ambiguous VERIFIED PR, etc.).
   * These MUST NOT be authorized even if Confirmation appears to match.
   */
  unavailableProtectedEffects?: readonly CursorAuthorizedEffectId[];
}): AuthorizedExecutionSlice {
  const nowIso = input.nowIso ?? new Date().toISOString();
  const confirmations = input.confirmations ?? [];
  const verified = new Set(input.verifiedEffects ?? []);
  const waiting = new Set(input.waitingVerificationEffects ?? []);
  const unavailable = new Set(input.unavailableProtectedEffects ?? []);
  const authorized: CursorAuthorizedEffectId[] = [];
  const blocked: CursorAuthorizedEffectId[] = [];
  const reasons: string[] = [];

  const classified = deriveExecutableEffectsFromContractRequirements({
    evidenceRequirements: input.evidenceRequirements ?? [],
    expectedOutputs: input.expectedOutputs,
    requiredCapabilities: input.requiredCapabilities,
    allowFilesystemCreateOrModify: true,
  });

  for (const effect of classified.executableEffects) {
    if (verified.has(effect) || waiting.has(effect)) {
      blocked.push(effect);
      reasons.push(
        waiting.has(effect)
          ? `waiting_verification:${effect}`
          : `already_verified:${effect}`,
      );
      continue;
    }
    const isGit =
      effect === "git.commit" ||
      effect === "git.push" ||
      effect === "github.pr.create" ||
      effect === "github.pr.merge";
    if (isGit) {
      if (unavailable.has(effect)) {
        blocked.push(effect);
        reasons.push(`canonical_target_unavailable:${effect}`);
        continue;
      }
      if (
        confirmationGrantsEffect(confirmations, effect, nowIso, {
          executionContractId: input.executionContractId,
          ...input.confirmationMatch,
        })
      ) {
        authorized.push(effect);
      } else {
        blocked.push(effect);
        reasons.push(
          `confirmation_required:${GIT_EFFECT_CONFIRMATION_SCOPE[effect]}`,
        );
      }
      continue;
    }
    authorized.push(effect);
  }

  // Non-executable Git candidates remain blocked (never inferred).
  for (const effect of [
    "git.commit",
    "git.push",
    "github.pr.create",
    "github.pr.merge",
  ] as const) {
    if (
      !classified.executableEffects.includes(effect) &&
      !blocked.includes(effect) &&
      !authorized.includes(effect)
    ) {
      blocked.push(effect);
    }
  }

  if (input.allowDelete) {
    if (!verified.has("filesystem.delete") && !waiting.has("filesystem.delete")) {
      authorized.push("filesystem.delete");
    }
  } else if (!blocked.includes("filesystem.delete")) {
    blocked.push("filesystem.delete");
    reasons.push("no_delete_policy");
  }

  // CR-GCEC-24 — validation.run must NOT appear when not executable.
  if (
    !classified.executableEffects.includes("validation.run") &&
    !blocked.includes("validation.run")
  ) {
    blocked.push("validation.run");
    reasons.push("validation_not_required");
  }

  if (
    authorized.includes("github.pr.create") &&
    !authorized.includes("github.pr.update")
  ) {
    if (!blocked.includes("github.pr.update")) {
      blocked.push("github.pr.update");
    }
  }

  return {
    executionContractId: input.executionContractId,
    attemptLineageKey:
      input.attemptLineageKey ?? input.executionContractId,
    authorizedEffects: authorized,
    blockedEffects: blocked,
    reasons,
  };
}

export function sliceAllows(
  slice: AuthorizedExecutionSlice,
  effect: CursorAuthorizedEffectId,
): boolean {
  return slice.authorizedEffects.includes(effect);
}
```

### FULL: `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts`
```typescript
/**
 * CR-GCEC-23 — server-derived Confirmation target for protected Git effects.
 * Caller/request confirmationMatch MUST NOT define canonical resource identity.
 * Pure application/domain projection — no persistence.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ProjectRepositoryBinding } from "@/lib/oa/project";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
import type { GitEffectConfirmationMatch } from "./authorizedExecutionSlice";

export type ResolvedGitEffectTarget = {
  executionContractId: string;
  projectId: string;
  cycleInstanceId?: string;
  repositoryRef: string;
  branchOrRef?: string;
  prNumber?: number;
  actorId: string;
  effect: Extract<
    CursorAuthorizedEffectId,
    "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
  >;
};

export type ResolveGitEffectTargetInput = {
  effect: ResolvedGitEffectTarget["effect"];
  contract: Pick<
    ExecutionContract,
    "executionContractId" | "projectId" | "cycleInstanceId" | "inputs"
  >;
  /** Canonical Project.repositoryBinding — required for protected Git. */
  projectRepositoryBinding: ProjectRepositoryBinding;
  /**
   * Projected docs-write / EC repositoryRef when present.
   * MUST match Project.repositoryBinding.identity or resolution fails.
   */
  projectedRepositoryRef?: string;
  actorId: string;
  /** VERIFIED Evidence for this project (PR identity source). */
  verifiedEvidence?: readonly Evidence[];
};

export type ResolveGitEffectTargetResult =
  | { ok: true; target: ResolvedGitEffectTarget }
  | { ok: false; reason: string };

function asNonEmptyString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function branchFromContractInputs(
  inputs: Record<string, unknown> | undefined,
): string | undefined {
  if (!inputs) return undefined;
  return (
    asNonEmptyString(inputs.workingBranch) ??
    asNonEmptyString(inputs.branchName) ??
    asNonEmptyString(inputs.headRef)
  );
}

/**
 * Extract a single trustworthy PR number from VERIFIED git:pull_request Evidence
 * bound to the same project / cycle / EC / repository.
 * Fail closed when zero or ambiguous.
 * CR-GCEC-23H-C — repository identity MUST be present and exact (no repo → reject).
 */
export function resolveVerifiedPullRequestNumber(input: {
  evidence: readonly Evidence[];
  projectId: string;
  cycleInstanceId?: string;
  executionContractId: string;
  repositoryRef: string;
}): { ok: true; prNumber: number } | { ok: false; reason: string } {
  const matches: number[] = [];
  for (const e of input.evidence) {
    if (e.status !== "verified") continue;
    if (e.source !== "git:pull_request") continue;
    const b = e.bindings;
    if (!b?.projectId || b.projectId !== input.projectId) continue;
    if (
      !b.executionContractId ||
      b.executionContractId !== input.executionContractId
    ) {
      continue;
    }
    if (
      input.cycleInstanceId &&
      (!b.cycleInstanceId || b.cycleInstanceId !== input.cycleInstanceId)
    ) {
      continue;
    }
    const loc = typeof e.location === "string" ? e.location : "";
    const repoMatch = loc.match(/[?&]repo=([^&]+)/);
    // CR-GCEC-23H-C — repository identity is mandatory; absent ⇒ ineligible.
    if (!repoMatch) continue;
    const repo = decodeURIComponent(repoMatch[1]!);
    if (!repo.trim() || repo !== input.repositoryRef) continue;
    const prMatch = loc.match(/[?&]prNumber=([^&]+)/);
    if (!prMatch) continue;
    const n = Number(decodeURIComponent(prMatch[1]!));
    if (!Number.isInteger(n) || n < 1) continue;
    matches.push(n);
  }
  const unique = [...new Set(matches)];
  if (unique.length === 0) {
    return { ok: false, reason: "verified_pull_request_identity_missing" };
  }
  if (unique.length > 1) {
    return { ok: false, reason: "verified_pull_request_identity_ambiguous" };
  }
  return { ok: true, prNumber: unique[0]! };
}

/**
 * Resolve canonical Git Confirmation target from durable Product truth only.
 */
export function resolveGitEffectTarget(
  input: ResolveGitEffectTargetInput,
): ResolveGitEffectTargetResult {
  const bindingIdentity = input.projectRepositoryBinding.identity?.trim();
  if (!bindingIdentity) {
    return { ok: false, reason: "project_repository_binding_missing" };
  }

  if (
    input.projectedRepositoryRef &&
    input.projectedRepositoryRef.trim() &&
    input.projectedRepositoryRef.trim() !== bindingIdentity
  ) {
    return {
      ok: false,
      reason: "projected_repository_ref_mismatch_project_binding",
    };
  }

  const inputs =
    input.contract.inputs && typeof input.contract.inputs === "object"
      ? (input.contract.inputs as Record<string, unknown>)
      : undefined;

  const workingBranch = branchFromContractInputs(inputs);
  const defaultBranch =
    input.projectRepositoryBinding.defaultBranch?.trim() || "main";

  let branchOrRef: string | undefined;
  let prNumber: number | undefined;

  switch (input.effect) {
    case "git.commit":
    case "git.push":
    case "github.pr.create":
      branchOrRef = workingBranch;
      break;
    case "github.pr.merge": {
      branchOrRef = defaultBranch;
      const pr = resolveVerifiedPullRequestNumber({
        evidence: input.verifiedEvidence ?? [],
        projectId: input.contract.projectId,
        cycleInstanceId: input.contract.cycleInstanceId,
        executionContractId: input.contract.executionContractId,
        repositoryRef: bindingIdentity,
      });
      if (!pr.ok) {
        return { ok: false, reason: pr.reason };
      }
      prNumber = pr.prNumber;
      break;
    }
  }

  return {
    ok: true,
    target: {
      executionContractId: input.contract.executionContractId,
      projectId: input.contract.projectId,
      cycleInstanceId: input.contract.cycleInstanceId,
      repositoryRef: bindingIdentity,
      branchOrRef,
      prNumber,
      actorId: input.actorId,
      effect: input.effect,
    },
  };
}

export function resolvedTargetToConfirmationMatch(
  target: ResolvedGitEffectTarget,
): GitEffectConfirmationMatch {
  return {
    executionContractId: target.executionContractId,
    repositoryRef: target.repositoryRef,
    branchOrRef: target.branchOrRef,
    prNumber: target.prNumber,
    actorId: target.actorId,
  };
}

/**
 * Hostile request assertion — compare to server truth. Never builds the target.
 * Missing fields on assertion are ignored; present mismatches refuse.
 */
export function assertConfirmationMatchAgreesWithServerTarget(input: {
  assertion?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
  server: ResolvedGitEffectTarget;
}): { ok: true } | { ok: false; reason: string } {
  const a = input.assertion;
  if (!a) return { ok: true };
  if (
    a.repositoryRef != null &&
    a.repositoryRef.trim() &&
    a.repositoryRef.trim() !== input.server.repositoryRef
  ) {
    return { ok: false, reason: "hostile_confirmation_match_repository_mismatch" };
  }
  if (
    a.branchOrRef != null &&
    a.branchOrRef.trim() &&
    a.branchOrRef.trim() !== (input.server.branchOrRef ?? "")
  ) {
    return { ok: false, reason: "hostile_confirmation_match_branch_mismatch" };
  }
  if (
    a.prNumber != null &&
    a.prNumber !== input.server.prNumber
  ) {
    return { ok: false, reason: "hostile_confirmation_match_pr_mismatch" };
  }
  if (
    a.actorId != null &&
    a.actorId.trim() &&
    a.actorId.trim() !== input.server.actorId
  ) {
    return { ok: false, reason: "hostile_confirmation_match_actor_mismatch" };
  }
  return { ok: true };
}
```

### FULL: `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`
```typescript
/**
 * StartExecution — normative RTA5-09 sequence.
 *
 *  1. Preconditions: authorization, TTL, agent_selection Confirmation when the
 *     strategy is human_confirmed_proposal, registry revalidation, active
 *     index, OCC.
 *  2. The Attempt is ALREADY persisted `accepted` (Select did it). Start never
 *     launches before an `accepted` Attempt exists (anti launch-then-persist).
 *  3. The contract stays `confirmed` while the Attempt is `accepted`.
 *  4. Fixture path: only the injected fake adapter `launch(attemptId)` is
 *     called; it is idempotent. REAL path (`cursor_cli_real`) NEVER calls the
 *     fixture adapter — it uses RealExecutionLaunchPort + safety journal.
 *  5. Launch reject/failure → Attempt `failed`, never `executing`.
 *  6. LaunchAck → Attempt `running` persisted FIRST, then contract
 *     `executing`, then the agent_selection Confirmation is consumed.
 *  7. Contract update failure after `running` → fail-closed compensation of
 *     the Attempt, audited, with no second adapter call and no business
 *     rollback.
 *
 * Contract failure mapping by cause (RTA5-09 "selon cause" ∩ modeled matrix):
 * - launch REJECT (deterministic refusal, nothing started) → contract stays
 *   `confirmed`, so an authorized Retry remains possible;
 * - launch FAIL (indeterminate adapter error) → contract `failed`.
 *
 * M4 REAL path (D-M4-01…05): Gate D consume+CREATED is atomic and precedes
 * realLaunchPort.launch; LAUNCHED is journaled before Attempt `running`.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import type { DecisionServices } from "@/lib/oa/decision";
import type {
  CheckExecutionAuthorization,
  ExecutionContract,
  ExecutionContractRepositoryPort,
} from "@/lib/oa/execution-contract";
import {
  computeExecutionContractSemanticFingerprint,
  DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
  resolveExecutionWindowForStart,
  type ResolvedExecutionWindow,
} from "@/lib/oa/execution-contract";
import type { AuthorityResolverPort } from "@/lib/oa/decision";
import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
import {
  AGENT_SELECTION_SCOPE,
  agentMatchViolation,
  assertAgentSelectionConfirmation,
} from "../domain/invariants";
import type {
  ActorReference,
  AttemptDetailCode,
  ExecutionAttempt,
  ExecutionAttemptResult,
  StartExecutionRequest,
} from "../domain/types";
import type {
  ContractSafetyIdentity,
  GateDGrant,
} from "../domain/realLaunchSafety";
import { isM4AuthorizedCursorRealAgent } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
import type { AgentRegistryPort } from "../ports/agentRegistry";
import type { ExecutionAdapterPort } from "../ports/executionAdapter";
import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
import type { RealExecutionLaunchPort } from "../ports/realExecutionLaunchPort";
import type { DocsWriteLaunchSpec } from "../ports/realExecutionLaunchPort";
import { M4_BOUNDED_DOCS_WRITE_ACTION } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
import { ManagedProjectRepositoryResolver } from "../infrastructure/managedProjectRepositoryResolver";
import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
import { deriveAuthorizedExecutionSlice } from "../domain/authorizedExecutionSlice";
import {
  assertConfirmationMatchAgreesWithServerTarget,
  resolveGitEffectTarget,
  resolvedTargetToConfirmationMatch,
} from "../domain/resolveGitEffectTarget";
import { deriveExecutableEffectsFromContractRequirements } from "../domain/contractEffectClassification";
import {
  authorityFailureDetail,
  contractGateDetail,
  newCorrelationId,
  verifyAttemptAuthority,
} from "./attemptSupport";
import type { ExecutionContractStatusWriter } from "./executionContractStatusWriter";
import { mapContractAuthorizationDetail } from "./selectExecutionAgent";

function isRealExecutionAgent(
  agent: Parameters<typeof isM4AuthorizedCursorRealAgent>[0],
): boolean {
  return (
    agent.executionMode === "cursor_cli_real" ||
    isM4AuthorizedCursorRealAgent(agent)
  );
}

const FULL_GIT_SHA_RE = /^[0-9a-f]{40}$/i;

/** Contract-bound baseHeadSha from ExecutionContract.inputs (T-A4 inputs already exist). */
export function extractContractBaseHeadSha(
  contract: ExecutionContract,
): string | null {
  const inputs = contract.inputs;
  if (!inputs || typeof inputs !== "object") return null;
  const raw = (inputs as Record<string, unknown>).baseHeadSha;
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!FULL_GIT_SHA_RE.test(trimmed)) return null;
  return trimmed.toLowerCase();
}

function asStringList(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const out: string[] = [];
  for (const item of value) {
    if (typeof item !== "string") return null;
    const t = item.trim();
    if (t) out.push(t);
  }
  return out;
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t || null;
}

/**
 * Extract DocsWriteLaunchSpec from contract.inputs (CR-GCEC-02).
 * Fail-closed: returns { ok:false, reason } when required fields missing.
 */
export function extractDocsWriteLaunchSpec(
  contract: ExecutionContract,
):
  | { ok: true; spec: DocsWriteLaunchSpec; repositoryBindingIdentity?: string }
  | { ok: false; reason: string } {
  const inputs =
    contract.inputs && typeof contract.inputs === "object"
      ? (contract.inputs as Record<string, unknown>)
      : {};
  const repositoryRef =
    asNonEmptyString(inputs.repositoryRef) ??
    asNonEmptyString(inputs.targetRepositoryRef);
  const targetPath = asNonEmptyString(inputs.targetPath);
  const pathAllowlist =
    asStringList(inputs.pathAllowlist) ?? asStringList(inputs.scopeIn) ?? [];
  const artifactType =
    asNonEmptyString(inputs.artifactType) ?? "functional_design";
  const artifactBrief = asNonEmptyString(inputs.artifactBrief);
  const contentRequirements = asStringList(inputs.contentRequirements) ?? [];
  const scopeIn = asStringList(inputs.scopeIn) ?? pathAllowlist;
  const scopeOut = asStringList(inputs.scopeOut) ?? [];
  const expectedOutputs =
    asStringList(inputs.expectedOutputs) ??
    (Array.isArray(contract.expectedOutputs)
      ? asStringList(contract.expectedOutputs)
      : null) ??
    (targetPath ? [targetPath] : []);
  const validationExpectations =
    asStringList(inputs.validationExpectations) ?? [];
  const evidenceRequirements =
    asStringList(inputs.evidenceRequirements) ??
    (Array.isArray(contract.evidenceRequirements)
      ? asStringList(contract.evidenceRequirements)
      : null) ??
    [];

  if (!repositoryRef) {
    return { ok: false, reason: "docs_write_repository_ref_missing" };
  }
  if (!targetPath) {
    return { ok: false, reason: "docs_write_target_path_missing" };
  }
  if (pathAllowlist.length === 0) {
    return { ok: false, reason: "docs_write_path_allowlist_missing" };
  }
  if (!artifactBrief) {
    return { ok: false, reason: "docs_write_artifact_brief_missing" };
  }
  if (contentRequirements.length === 0) {
    return { ok: false, reason: "docs_write_content_requirements_missing" };
  }

  const bindingIdentity =
    asNonEmptyString(inputs.repositoryBindingIdentity) ??
    asNonEmptyString(inputs.repositoryIdentity) ??
    repositoryRef;

  return {
    ok: true,
    spec: {
      repositoryRef,
      targetPath,
      pathAllowlist,
      artifactType,
      artifactBrief,
      contentRequirements,
      scopeIn,
      scopeOut,
      expectedOutputs: expectedOutputs ?? [],
      validationExpectations,
      evidenceRequirements: evidenceRequirements ?? [],
      createOrModify: true,
      noDelete: true,
    },
    repositoryBindingIdentity: bindingIdentity ?? undefined,
  };
}

function mapRealLaunchRejectDetail(
  reason: string,
  detailCode?: string,
): AttemptDetailCode {
  if (
    detailCode === "REAL_BOUNDARY_DISABLED" ||
    detailCode === "CURSOR_UNAVAILABLE" ||
    detailCode === "REAL_WORKSPACE_INVALID" ||
    detailCode === "REAL_LAUNCH_FAILED" ||
    detailCode === "REAL_AGENT_PROFILE_INVALID"
  ) {
    return detailCode;
  }
  if (
    reason === "studio_cursor_real_disabled" ||
    reason.includes("real_disabled")
  ) {
    return "REAL_BOUNDARY_DISABLED";
  }
  if (reason === "cursor_unavailable") return "CURSOR_UNAVAILABLE";
  if (
    reason === "workspace_invalid" ||
    reason === "workspace_outside_exec_root" ||
    reason.includes("REAL_WORKSPACE_INVALID") ||
    reason.includes("base_head_sha") ||
    reason.includes("workspace_prepare")
  ) {
    return "REAL_WORKSPACE_INVALID";
  }
  if (reason === "unresolved_contract_refused") {
    return "REAL_AGENT_PROFILE_INVALID";
  }
  return "REAL_LAUNCH_FAILED";
}

export class StartExecution {
  constructor(
    private readonly attempts: ExecutionAttemptRepositoryPort,
    private readonly contracts: ExecutionContractRepositoryPort,
    private readonly contractStatusWriter: ExecutionContractStatusWriter,
    private readonly checkExecutionAuthorization: CheckExecutionAuthorization,
    private readonly decisionServices: DecisionServices,
    private readonly authority: AuthorityResolverPort,
    private readonly registry: AgentRegistryPort,
    private readonly adapter: ExecutionAdapterPort,
    private readonly clock: ClockPort,
    private readonly audit: ExecutionAttemptAuditPort,
    private readonly store?: ExecutionAttemptTechnicalStorePort,
    private readonly realLaunchPort?: RealExecutionLaunchPort,
    private readonly safetyJournal?: RealLaunchSafetyJournalPort,
    /**
     * D-GCEC-09/13 — server-only managed repository root base.
     * Resolves Project.repositoryBinding.identity → local clone.
     * MUST NOT come from ExecutionContract / client.
     */
    private readonly managedRepoRootBase?: string,
    /**
     * CR-GCEC-23 — resolve Project.repositoryBinding from durable Project.
     */
    private readonly resolveProjectRepositoryBinding?: (
      projectId: string,
    ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>,
    /**
     * CR-GCEC-23 — list Evidence for verified PR identity (late-bound OK).
     */
    private readonly listProjectEvidence?: (
      projectId: string,
    ) => Promise<readonly import("@/lib/oa/evidence-review").Evidence[]>,
  ) {}

  async execute(
    request: StartExecutionRequest,
  ): Promise<ExecutionAttemptResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId = request.correlationId ?? newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createAttemptError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ): ExecutionAttemptResult => {
      const { attempt, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const error = createAttemptError({
        detailCode,
        timestamp,
        correlationId,
        attemptId: request.attemptId,
        internalCauseRef,
        ...errorExtra,
      });
      this.audit.append({
        event: "oa.execution_attempt.started",
        ts: timestamp,
        correlationId,
        attemptId: request.attemptId,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, attempt, durationMs };
    };

    try {
      if (!request.actor?.actorId) {
        return fail("ATTEMPT_INVALID", "actor_required");
      }

      const attempt = await this.attempts.findById(request.attemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }

      // Crash-window replay: the Attempt is already running — return the same
      // state without calling the adapter a second time.
      if (attempt.status === "running") {
        const contract = await this.contracts.findById(
          attempt.executionContractId,
        );
        const durationMs = Date.now() - started;
        this.audit.append({
          event: "oa.execution_attempt.started",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: attempt.executionContractId,
          newStatus: "running",
          contractStatus: contract?.status,
          result: "ok",
          durationMs,
        });
        return {
          ok: true,
          attempt,
          contractStatus: contract?.status,
          contractVersion: contract?.version,
          replayed: true,
          durationMs,
        };
      }
      if (attempt.status !== "accepted") {
        return fail("ATTEMPT_STATE_CONFLICT", `attempt_status_${attempt.status}`, {
          executionContractId: attempt.executionContractId,
        });
      }
      if (
        request.expectedAttemptVersion !== undefined &&
        request.expectedAttemptVersion !== attempt.version
      ) {
        return fail("VERSION_CONFLICT", "attempt_occ_mismatch", {
          expectedVersion: request.expectedAttemptVersion,
          currentVersion: attempt.version,
        });
      }
      if (
        !attempt.selectionExpiresAt ||
        Date.parse(attempt.selectionExpiresAt) <= Date.parse(timestamp)
      ) {
        // Detection only: no auto-cancel (RTA5-08). A human Cancel disposes
        // of the expired Attempt and releases the active invariant.
        return fail("AGENT_SELECTION_EXPIRED", "selection_ttl_expired", {
          executionContractId: attempt.executionContractId,
        });
      }

      const contract = await this.contracts.findById(
        attempt.executionContractId,
      );
      if (!contract) {
        return fail("EXECUTION_CONTRACT_NOT_FOUND", "missing_contract");
      }
      const gate = contractGateDetail(contract);
      if (gate) {
        this.audit.append({
          event: "oa.execution_attempt.stale_context_detected",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          contractStatus: contract.status,
          result: "error",
          detailCode: gate,
          durationMs: Date.now() - started,
        });
        return fail(gate, `contract_status_${contract.status}`, {
          executionContractId: contract.executionContractId,
        });
      }
      if (contract.version !== attempt.executionContractVersion) {
        this.audit.append({
          event: "oa.execution_attempt.stale_context_detected",
          ts: timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          contractStatus: contract.status,
          result: "error",
          detailCode: "EXECUTION_CONTRACT_STALE",
          durationMs: Date.now() - started,
        });
        return fail("EXECUTION_CONTRACT_STALE", "contract_version_changed", {
          executionContractId: contract.executionContractId,
          expectedVersion: attempt.executionContractVersion,
          currentVersion: contract.version,
        });
      }
      if (
        request.expectedContractVersion !== undefined &&
        request.expectedContractVersion !== contract.version
      ) {
        return fail("EXECUTION_CONTRACT_STALE", "contract_occ_mismatch", {
          executionContractId: contract.executionContractId,
          expectedVersion: request.expectedContractVersion,
          currentVersion: contract.version,
        });
      }

      const authorization = await this.checkExecutionAuthorization.execute({
        executionContractId: contract.executionContractId,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        actor: request.actor,
        authorityEvidenceId: request.authorityEvidenceId,
        correlationId,
        claimedAuthorityLevel: request.claimedAuthorityLevel,
      });
      if (!authorization.ok) {
        return fail(
          mapContractAuthorizationDetail(authorization.error.detailCode),
          `check_authorization_${authorization.error.detailCode}`,
          { executionContractId: contract.executionContractId },
        );
      }

      const agent = this.registry.getAgent(attempt.selectedAgentRef);
      if (!agent) {
        return fail("AGENT_NOT_FOUND", "selected_agent_not_registered", {
          selectedAgentRef: attempt.selectedAgentRef,
        });
      }
      const agentViolation = agentMatchViolation(agent, {
        requiredCapabilities: [...contract.requiredCapabilities],
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
      });
      if (agentViolation) {
        return fail(agentViolation.detailCode, agentViolation.reason, {
          selectedAgentRef: attempt.selectedAgentRef,
        });
      }

      let consumeConfirmationId: string | undefined;
      if (attempt.selectionStrategy === "human_confirmed_proposal") {
        if (!attempt.agentConfirmationRef) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_ref_missing",
          );
        }
        const confirmation = await this.decisionServices.confirmations.findById(
          attempt.agentConfirmationRef,
        );
        if (!confirmation) {
          return fail(
            "AGENT_CONFIRMATION_REQUIRED",
            "agent_confirmation_not_found",
            { confirmationId: attempt.agentConfirmationRef },
          );
        }
        const violation = assertAgentSelectionConfirmation({
          confirmationScope: confirmation.scope,
          confirmationLevel: confirmation.level,
          confirmationStatus: confirmation.status,
          confirmationActionRef: confirmation.actionRef,
          confirmationExpiresAt: confirmation.expiresAt,
          expectedBinding: {
            executionContractId: contract.executionContractId,
            executionContractVersion: contract.version,
            selectedAgentRef: attempt.selectedAgentRef,
          },
          requiredAuthority: contract.requiredAuthority,
          selectionExpiresAt: attempt.selectionExpiresAt,
          nowIso: timestamp,
        });
        if (violation) {
          return fail(violation.detailCode, violation.reason, {
            confirmationId: attempt.agentConfirmationRef,
          });
        }
        const confirmerVerification = verifyAttemptAuthority(this.authority, {
          requiredAuthority: contract.requiredAuthority,
          actorId: confirmation.requestedTo.actorId,
          scope: AGENT_SELECTION_SCOPE,
        });
        if (!confirmerVerification.ok) {
          return fail(
            authorityFailureDetail(confirmerVerification.reason),
            `confirmer_${confirmerVerification.reason}`,
            { confirmationId: attempt.agentConfirmationRef },
          );
        }
        consumeConfirmationId = attempt.agentConfirmationRef;
      }

      try {
        await this.attempts.assertActiveIndexConsistent();
      } catch (err) {
        if (isExecutionAttemptDomainError(err)) {
          return fail(err.detailCode, err.message, {
            executionContractId: contract.executionContractId,
          });
        }
        return fail("ACTIVE_INDEX_DRIFT", "active_index_check_failed");
      }
      const active = await this.attempts.findActiveByContract(
        contract.executionContractId,
      );
      if (!active || active.attemptId !== attempt.attemptId) {
        return fail("EXECUTION_ALREADY_ACTIVE", "another_attempt_is_active", {
          executionContractId: contract.executionContractId,
        });
      }

      // M4 REAL path — never touch the fixture adapter.
      if (isRealExecutionAgent(agent)) {
        return this.executeRealLaunch({
          request,
          attempt,
          contract,
          agent,
          consumeConfirmationId,
          timestamp,
          correlationId,
          started,
          fail,
        });
      }

      // Step 4 — fixture adapter ONLY (non-REAL agents).
      let launch;
      try {
        launch = await this.adapter.launch({
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          executionContractVersion: contract.version,
          selectedAgentRef: attempt.selectedAgentRef,
          adapterRef: agent.adapterRef,
          correlationId,
        });
      } catch {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_threw",
          timestamp,
          correlationId,
          started,
        });
      }

      if (launch.outcome !== "ack") {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: launch.outcome,
          reason: launch.reason,
          timestamp,
          correlationId,
          started,
        });
      }
      if (launch.attemptId !== attempt.attemptId) {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_attempt_binding_mismatch",
          timestamp,
          correlationId,
          started,
        });
      }
      if (launch.adapterId !== this.adapter.adapterId) {
        return this.failLaunch({
          attempt,
          contractVersion: contract.version,
          cause: "fail",
          reason: "adapter_identity_binding_mismatch",
          timestamp,
          correlationId,
          started,
        });
      }

      return this.persistRunningAfterAck({
        attempt,
        contract,
        actor: request.actor,
        consumeConfirmationId,
        timestamp,
        correlationId,
        started,
        adapterIdForAudit: this.adapter.adapterId,
        fail,
      });
    } catch {
      return fail("EXECUTION_PERSISTENCE_FAILED", "unexpected_exception");
    }
  }

  private async executeRealLaunch(input: {
    request: StartExecutionRequest;
    attempt: ExecutionAttempt;
    contract: ExecutionContract;
    agent: NonNullable<ReturnType<AgentRegistryPort["getAgent"]>>;
    consumeConfirmationId: string | undefined;
    timestamp: string;
    correlationId: string;
    started: number;
    fail: (
      detailCode: AttemptDetailCode,
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ) => ExecutionAttemptResult;
  }): Promise<ExecutionAttemptResult> {
    const {
      request,
      attempt,
      contract,
      agent,
      consumeConfirmationId,
      timestamp,
      correlationId,
      started,
      fail,
    } = input;

    if (!this.safetyJournal) {
      return fail("LAUNCH_JOURNAL_UNAVAILABLE", "safety_journal_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    if (!this.realLaunchPort) {
      return fail("REAL_BOUNDARY_DISABLED", "real_launch_port_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    if (!isM4AuthorizedCursorRealAgent(agent)) {
      return fail("REAL_AGENT_PROFILE_INVALID", "not_m4_authorized_cursor_real", {
        selectedAgentRef: attempt.selectedAgentRef,
      });
    }

    // Contract-bound baseHeadSha BEFORE Gate D consume / CREATED (R2).
    const baseHeadSha = extractContractBaseHeadSha(contract);
    if (!baseHeadSha) {
      const raw =
        contract.inputs &&
        typeof contract.inputs === "object" &&
        "baseHeadSha" in (contract.inputs as Record<string, unknown>)
          ? (contract.inputs as Record<string, unknown>).baseHeadSha
          : undefined;
      return fail(
        raw === undefined || raw === null || raw === ""
          ? "REAL_WORKSPACE_INVALID"
          : "REAL_WORKSPACE_INVALID",
        raw === undefined || raw === null || raw === ""
          ? "contract_base_head_sha_missing"
          : "contract_base_head_sha_invalid",
        { executionContractId: contract.executionContractId },
      );
    }

    // CR-GCEC-02 — docsWriteSpec BEFORE Gate D consume (fail-closed).
    let docsWriteSpec: DocsWriteLaunchSpec | undefined;
    let repositoryBindingIdentity: string | undefined;
    let managedRepoRoot: string | undefined;
    let repositoryBinding:
      | {
          identity: string;
          remoteUrl: string;
          defaultBranch: string;
          pathRoot?: string;
        }
      | undefined;
    if (contract.action === M4_BOUNDED_DOCS_WRITE_ACTION) {
      const extracted = extractDocsWriteLaunchSpec(contract);
      if (!extracted.ok) {
        return fail("REAL_AGENT_PROFILE_INVALID", extracted.reason, {
          executionContractId: contract.executionContractId,
        });
      }
      docsWriteSpec = extracted.spec;
      repositoryBindingIdentity = extracted.repositoryBindingIdentity;

      const inputs =
        contract.inputs && typeof contract.inputs === "object"
          ? (contract.inputs as Record<string, unknown>)
          : {};
      // D-GCEC-09 — reject client/EC-supplied absolute managed roots.
      if (
        typeof inputs.managedRepoRoot === "string" &&
        inputs.managedRepoRoot.trim()
      ) {
        return fail(
          "REAL_WORKSPACE_INVALID",
          "docs_write_managed_repo_root_not_ec_controlled",
          { executionContractId: contract.executionContractId },
        );
      }

      const identity =
        (typeof inputs.repositoryIdentity === "string" &&
          inputs.repositoryIdentity.trim()) ||
        (typeof inputs.repositoryBindingIdentity === "string" &&
          inputs.repositoryBindingIdentity.trim()) ||
        docsWriteSpec.repositoryRef;
      const remoteUrl =
        (typeof inputs.remoteUrl === "string" && inputs.remoteUrl.trim()) ||
        `https://github.com/${identity}.git`;
      const defaultBranch =
        (typeof inputs.defaultBranch === "string" &&
          inputs.defaultBranch.trim()) ||
        "main";
      const pathRoot =
        typeof inputs.pathRoot === "string" && inputs.pathRoot.trim()
          ? inputs.pathRoot.trim()
          : undefined;
      if (!identity) {
        return fail(
          "REAL_WORKSPACE_INVALID",
          "docs_write_repository_binding_missing",
          { executionContractId: contract.executionContractId },
        );
      }
      repositoryBinding = {
        identity,
        remoteUrl,
        defaultBranch,
        ...(pathRoot ? { pathRoot } : {}),
      };

      // Server-side resolution only (D-GCEC-09/13).
      if (!this.managedRepoRootBase?.trim()) {
        return fail(
          "REAL_WORKSPACE_INVALID",
          "docs_write_managed_repo_root_base_unconfigured",
          { executionContractId: contract.executionContractId },
        );
      }
      const resolver = new ManagedProjectRepositoryResolver();
      const resolved = resolver.resolveLocalRepoRoot(
        { identity },
        this.managedRepoRootBase,
      );
      if (!resolved) {
        return fail(
          "REAL_WORKSPACE_INVALID",
          "docs_write_managed_repo_unresolved",
          { executionContractId: contract.executionContractId },
        );
      }
      managedRepoRoot = resolved;
    }

    const fingerprint =
      contract.semanticFingerprint ??
      computeExecutionContractSemanticFingerprint(contract);
    if (!fingerprint) {
      return fail("ATTEMPT_INVALID", "semantic_fingerprint_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    const identity: ContractSafetyIdentity = {
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      semanticFingerprint: fingerprint,
    };

    if (await this.safetyJournal.hasAmbiguousFrontier(identity)) {
      return fail(
        "LAUNCH_RECONCILIATION_REQUIRED",
        "ambiguous_frontier_blocks_real_start",
        { executionContractId: contract.executionContractId },
      );
    }
    const disposition =
      await this.safetyJournal.reconcileDispositionForIdentity(identity);
    if (disposition !== "CLEAR") {
      return fail(
        "LAUNCH_RECONCILIATION_REQUIRED",
        `frontier_disposition_${disposition}`,
        { executionContractId: contract.executionContractId },
      );
    }
    if (
      (await this.safetyJournal.hasKindForAttempt(
        attempt.attemptId,
        "CREATED",
      )) ||
      (await this.safetyJournal.hasKindForAttempt(
        attempt.attemptId,
        "LAUNCHED",
      ))
    ) {
      return fail(
        "LAUNCH_RECONCILIATION_REQUIRED",
        "attempt_frontier_already_present",
        { executionContractId: contract.executionContractId },
      );
    }

    const grant = await this.safetyJournal.findActiveGateDGrantForAttempt(
      attempt.attemptId,
    );
    if (!grant) {
      return fail("GATE_D_REQUIRED", "active_gate_d_grant_missing", {
        executionContractId: contract.executionContractId,
      });
    }
    const bindingError = this.validateGateDGrantBinding({
      grant,
      attempt,
      identity,
      actorId: request.actor.actorId,
      nowIso: timestamp,
    });
    if (bindingError) {
      return fail(bindingError.detailCode, bindingError.reason, {
        executionContractId: contract.executionContractId,
      });
    }

    let consumedGrant: GateDGrant;
    try {
      const consumed = await this.safetyJournal.consumeGateDAndAppendCreated({
        grantId: grant.grantId,
        attemptId: attempt.attemptId,
        occurredAt: timestamp,
        identity,
        selectedAgentRef: attempt.selectedAgentRef,
        actorId: request.actor.actorId,
        correlationId,
      });
      consumedGrant = consumed.grant;
    } catch (err) {
      const message = err instanceof Error ? err.message : "consume_failed";
      if (message.includes("expired")) {
        return fail("GATE_D_EXPIRED", message, {
          executionContractId: contract.executionContractId,
        });
      }
      if (message.includes("mismatch")) {
        return fail("GATE_D_BINDING_MISMATCH", message, {
          executionContractId: contract.executionContractId,
        });
      }
      if (message.includes("ambiguous") || message.includes("frontier")) {
        return fail("LAUNCH_RECONCILIATION_REQUIRED", message, {
          executionContractId: contract.executionContractId,
        });
      }
      if (message.includes("consumed") || message.includes("not_granted")) {
        return fail("GATE_D_ALREADY_CONSUMED", message, {
          executionContractId: contract.executionContractId,
        });
      }
      return fail("GATE_D_INVALID", message, {
        executionContractId: contract.executionContractId,
      });
    }

    const window = resolveExecutionWindowForStart({
      executionWindowClass: contract.executionWindowClass,
      defaultClassIfMissing:
        DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
    });
    if (!window.ok) {
      return fail("ATTEMPT_INVALID", window.reason, {
        executionContractId: contract.executionContractId,
      });
    }

    // D-GCEC-15 / CR-GCEC-23/24 — AuthorizedExecutionSlice from server-derived targets.
    const evidenceRequirements =
      docsWriteSpec?.evidenceRequirements ??
      (Array.isArray(contract.evidenceRequirements)
        ? contract.evidenceRequirements.map(String)
        : []);
    const classified = deriveExecutableEffectsFromContractRequirements({
      evidenceRequirements,
      expectedOutputs: Array.isArray(contract.expectedOutputs)
        ? contract.expectedOutputs.map(String)
        : undefined,
      requiredCapabilities: Array.isArray(contract.requiredCapabilities)
        ? contract.requiredCapabilities.map(String)
        : undefined,
      allowFilesystemCreateOrModify: true,
    });
    const gitExecutable = classified.executableEffects.filter(
      (
        e,
      ): e is
        | "git.commit"
        | "git.push"
        | "github.pr.create"
        | "github.pr.merge" =>
        e === "git.commit" ||
        e === "git.push" ||
        e === "github.pr.create" ||
        e === "github.pr.merge",
    );

    let serverConfirmationMatch:
      | {
          repositoryRef?: string;
          branchOrRef?: string;
          prNumber?: number;
          actorId?: string;
        }
      | undefined;
    /** CR-GCEC-23H-A/B — ephemeral; never persisted. */
    const unavailableProtectedEffects: Array<
      "git.commit" | "git.push" | "github.pr.create" | "github.pr.merge"
    > = [];

    const remainingGit = gitExecutable.filter(
      (e) => !(request.verifiedEffects ?? []).includes(e),
    );

    if (remainingGit.length > 0 && this.resolveProjectRepositoryBinding) {
      const binding = await this.resolveProjectRepositoryBinding(
        contract.projectId,
      );
      if (!binding?.identity?.trim()) {
        // Canonical repository unavailable — all remaining protected Git blocked.
        unavailableProtectedEffects.push(...remainingGit);
      } else {
      // Prefer Project binding identity for workspace resolution.
      const contractInputs =
        contract.inputs && typeof contract.inputs === "object"
          ? (contract.inputs as Record<string, unknown>)
          : {};
      const projectedRepo =
        docsWriteSpec?.repositoryRef?.trim() ||
        (typeof contractInputs.repositoryRef === "string"
          ? contractInputs.repositoryRef.trim()
          : undefined);
      if (projectedRepo && projectedRepo !== binding.identity.trim()) {
        return fail(
          "ATTEMPT_INVALID",
          "projected_repository_ref_mismatch_project_binding",
          { executionContractId: contract.executionContractId },
        );
      }
      repositoryBinding = {
        identity: binding.identity,
        remoteUrl: binding.remoteUrl,
        defaultBranch: binding.defaultBranch,
        ...(binding.pathRoot ? { pathRoot: binding.pathRoot } : {}),
      };
      repositoryBindingIdentity = binding.identity;

      const evidenceList = this.listProjectEvidence
        ? await this.listProjectEvidence(contract.projectId)
        : [];
      const verifiedEvidence = evidenceList.filter(
        (e) => e.status === "verified",
      );

      // Resolve per remaining executable git effect from durable Product truth.
      // Progressive D-GCEC-15: missing VERIFIED PR must NOT fail Start when merge
      // is not yet runnable — merge stays blocked until trusted PR identity exists.
      for (const effect of remainingGit) {
        const resolved = resolveGitEffectTarget({
          effect,
          contract,
          projectRepositoryBinding: binding,
          projectedRepositoryRef: projectedRepo,
          actorId: request.actor.actorId,
          verifiedEvidence,
        });
        if (!resolved.ok) {
          const mergePrNotReady =
            effect === "github.pr.merge" &&
            (resolved.reason === "verified_pull_request_identity_missing" ||
              resolved.reason === "verified_pull_request_identity_ambiguous");
          if (mergePrNotReady) {
            if (request.confirmationMatch?.prNumber != null) {
              return fail(
                "ATTEMPT_INVALID",
                "hostile_confirmation_match_pr_without_server_target",
                { executionContractId: contract.executionContractId },
              );
            }
            // CR-GCEC-23H-B — merge explicitly unavailable; earlier slices continue.
            unavailableProtectedEffects.push("github.pr.merge");
            continue;
          }
          // Other resolution failures: effect unavailable; do not invent a target.
          unavailableProtectedEffects.push(effect);
          continue;
        }
        const assertOk = assertConfirmationMatchAgreesWithServerTarget({
          assertion: request.confirmationMatch,
          server: resolved.target,
        });
        if (!assertOk.ok) {
          return fail("ATTEMPT_INVALID", assertOk.reason, {
            executionContractId: contract.executionContractId,
          });
        }
        serverConfirmationMatch = resolvedTargetToConfirmationMatch(
          resolved.target,
        );
      }
      }
    } else if (remainingGit.length > 0 && !this.resolveProjectRepositoryBinding) {
      // CR-GCEC-23H-A — resolver absent: never derive Git authority from caller.
      // Non-Git slices may still proceed; all remaining protected Git stay blocked.
      if (request.confirmationMatch) {
        return fail(
          "ATTEMPT_INVALID",
          "project_repository_binding_resolver_unconfigured",
          { executionContractId: contract.executionContractId },
        );
      }
      unavailableProtectedEffects.push(...remainingGit);
    }

    const authorizedSlice = deriveAuthorizedExecutionSlice({
      executionContractId: contract.executionContractId,
      evidenceRequirements,
      expectedOutputs: Array.isArray(contract.expectedOutputs)
        ? contract.expectedOutputs.map(String)
        : undefined,
      requiredCapabilities: Array.isArray(contract.requiredCapabilities)
        ? contract.requiredCapabilities.map(String)
        : undefined,
      confirmations: request.confirmations ?? [],
      verifiedEffects: request.verifiedEffects,
      confirmationMatch: serverConfirmationMatch,
      unavailableProtectedEffects,
    });
    // Fail only when the contract requires Cursor-executable effects but none
    // are currently authorized (e.g. git Confirmation missing). Read-only /
    // empty-requirement contracts may start with an empty authorized set.
    if (
      classified.executableEffects.length > 0 &&
      authorizedSlice.authorizedEffects.length === 0
    ) {
      return fail("ATTEMPT_INVALID", "no_authorized_effect", {
        executionContractId: contract.executionContractId,
      });
    }

    let launch;
    try {
      launch = await this.realLaunchPort.launch({
        attemptId: attempt.attemptId,
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        semanticFingerprint: fingerprint,
        selectedAgentRef: attempt.selectedAgentRef,
        adapterRef: agent.adapterRef,
        correlationId,
        baseHeadSha,
        action: contract.action,
        target: contract.target,
        scope: contract.scope,
        timeoutMs: window.resolvedMaxDurationMs,
        ...(docsWriteSpec ? { docsWriteSpec } : {}),
        ...(repositoryBindingIdentity
          ? { repositoryBindingIdentity }
          : {}),
        ...(managedRepoRoot ? { managedRepoRoot } : {}),
        ...(repositoryBinding ? { repositoryBinding } : {}),
        authorizedEffects: authorizedSlice.authorizedEffects,
        authorizedExecutionSlice: {
          authorizedEffects: authorizedSlice.authorizedEffects,
          blockedEffects: authorizedSlice.blockedEffects,
          reasons: authorizedSlice.reasons,
        },
      });
    } catch {
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode: "REAL_LAUNCH_FAILED",
        reason: "real_launch_threw",
        timestamp,
        correlationId,
        started,
        realProcessInvoked: false,
      });
    }

    if (launch.outcome !== "ack" || launch.realProcessInvoked !== true) {
      const reason =
        launch.outcome === "ack" ? "real_process_not_invoked" : launch.reason;
      const detailCode = mapRealLaunchRejectDetail(
        reason,
        launch.outcome === "ack"
          ? undefined
          : "detailCode" in launch
            ? launch.detailCode
            : undefined,
      );
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode,
        reason,
        timestamp,
        correlationId,
        started,
        realProcessInvoked: Boolean(launch.realProcessInvoked),
      });
    }
    if (launch.attemptId !== attempt.attemptId) {
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode: "REAL_LAUNCH_FAILED",
        reason: "real_launch_attempt_binding_mismatch",
        timestamp,
        correlationId,
        started,
        realProcessInvoked: true,
      });
    }
    if (launch.gatewayId !== this.realLaunchPort.gatewayId) {
      return this.failRealLaunch({
        attempt,
        contractVersion: contract.version,
        detailCode: "REAL_LAUNCH_FAILED",
        reason: "real_launch_gateway_binding_mismatch",
        timestamp,
        correlationId,
        started,
        realProcessInvoked: true,
      });
    }

    try {
      await this.safetyJournal.appendLaunched({
        attemptId: attempt.attemptId,
        occurredAt: timestamp,
        identity,
        selectedAgentRef: attempt.selectedAgentRef,
        actorId: request.actor.actorId,
        grantId: consumedGrant.grantId,
        correlationId,
        processRef: launch.processRef,
        payload: { gatewayId: launch.gatewayId },
      });
    } catch (err) {
      // Process invoked; LAUNCHED missing → CREATED-only UNKNOWN; no second launch.
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.execution_attempt.launch_failed",
        ts: timestamp,
        correlationId,
        attemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
        selectedAgentRef: attempt.selectedAgentRef,
        adapterId: this.realLaunchPort.gatewayId,
        previousStatus: "accepted",
        newStatus: "accepted",
        result: "error",
        detailCode: "LAUNCH_RECONCILIATION_REQUIRED",
        durationMs,
      });
      return {
        ok: false,
        error: createAttemptError({
          detailCode: "LAUNCH_RECONCILIATION_REQUIRED",
          timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          internalCauseRef:
            err instanceof Error
              ? `launched_persist_failed_after_invoke:${err.message}`
              : "launched_persist_failed_after_invoke",
        }),
        attempt,
        durationMs,
      };
    }

    return this.persistRunningAfterAck({
      attempt,
      contract,
      actor: request.actor,
      consumeConfirmationId,
      timestamp,
      correlationId,
      started,
      adapterIdForAudit: this.realLaunchPort.gatewayId,
      window,
      fail,
    });
  }

  private validateGateDGrantBinding(input: {
    grant: GateDGrant;
    attempt: ExecutionAttempt;
    identity: ContractSafetyIdentity;
    actorId: string;
    nowIso: string;
  }): { detailCode: AttemptDetailCode; reason: string } | null {
    const { grant, attempt, identity, actorId, nowIso } = input;
    if (grant.status === "consumed") {
      return { detailCode: "GATE_D_ALREADY_CONSUMED", reason: "grant_consumed" };
    }
    if (grant.status !== "granted") {
      return {
        detailCode: "GATE_D_INVALID",
        reason: `grant_status_${grant.status}`,
      };
    }
    if (Date.parse(grant.expiresAt) <= Date.parse(nowIso)) {
      return { detailCode: "GATE_D_EXPIRED", reason: "grant_expired" };
    }
    if (
      grant.attemptId !== attempt.attemptId ||
      grant.executionContractId !== identity.executionContractId ||
      grant.executionContractVersion !== identity.executionContractVersion ||
      grant.semanticFingerprint !== identity.semanticFingerprint ||
      grant.selectedAgentRef !== attempt.selectedAgentRef ||
      grant.actorId !== actorId
    ) {
      return {
        detailCode: "GATE_D_BINDING_MISMATCH",
        reason: "grant_binding_mismatch",
      };
    }
    return null;
  }

  private async persistRunningAfterAck(input: {
    attempt: ExecutionAttempt;
    contract: ExecutionContract;
    actor: ActorReference;
    consumeConfirmationId: string | undefined;
    timestamp: string;
    correlationId: string;
    started: number;
    adapterIdForAudit: string;
    window?: ResolvedExecutionWindow;
    fail: (
      detailCode: AttemptDetailCode,
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createAttemptError>[0]> & {
        attempt?: ExecutionAttempt;
      },
    ) => ExecutionAttemptResult;
  }): Promise<ExecutionAttemptResult> {
    const {
      attempt,
      contract,
      actor,
      consumeConfirmationId,
      timestamp,
      correlationId,
      started,
      adapterIdForAudit,
      window,
      fail,
    } = input;

    // Step 6a — Attempt running FIRST.
    const runningAttempt: ExecutionAttempt = {
      ...attempt,
      status: "running",
      launchedAt: timestamp,
      startedAt: timestamp,
      updatedAt: timestamp,
      version: attempt.version + 1,
      ...(window
        ? {
            executionWindowClass: window.executionWindowClass,
            resolvedMaxDurationMs: window.resolvedMaxDurationMs,
          }
        : {}),
    };
    try {
      const persist = async () => {
        await this.attempts.update(runningAttempt, attempt.version);
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
    } catch (err) {
      // Fixture path: nothing real ran. REAL path after LAUNCHED: leave
      // attempt accepted; journal already has CREATED+LAUNCHED (reconcile).
      if (isExecutionAttemptDomainError(err)) {
        return fail(err.detailCode, `running_persist_${err.message}`, {
          executionContractId: contract.executionContractId,
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("EXECUTION_PERSISTENCE_FAILED", "running_persist_failed", {
        executionContractId: contract.executionContractId,
      });
    }

    // Step 6b — contract executing AFTER the Attempt is running.
    const contractWrite = await this.contractStatusWriter.write({
      executionContractId: contract.executionContractId,
      expectedVersion: contract.version,
      nextStatus: "executing",
      selectedAgentRef: attempt.selectedAgentRef,
      runningAttempt: {
        attemptId: runningAttempt.attemptId,
        status: runningAttempt.status,
      },
    });
    if (!contractWrite.ok) {
      const compensated = await this.compensateAfterRunning({
        attempt: runningAttempt,
        timestamp,
        correlationId,
        started,
      });
      return {
        ok: false,
        error: createAttemptError({
          detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
          timestamp,
          correlationId,
          attemptId: attempt.attemptId,
          executionContractId: contract.executionContractId,
          internalCauseRef: contractWrite.internalCauseRef,
          currentVersion: contractWrite.currentVersion,
        }),
        attempt: compensated,
        durationMs: Date.now() - started,
      };
    }

    // Step 6c — consume the agent_selection Confirmation on success only.
    if (consumeConfirmationId) {
      const consumed = await this.decisionServices.consumeConfirmation.execute({
        confirmationId: consumeConfirmationId,
        actor,
        correlationId,
        nowIso: timestamp,
      });
      if (!consumed.ok) {
        const alreadyConsumed =
          consumed.error.detailCode === "CONFIRMATION_ALREADY_CONSUMED";
        if (!alreadyConsumed) {
          // Residual R-T-A3-2: the Attempt is running and the contract is
          // executing; cross-store consumption cannot be rolled back.
          this.audit.append({
            event: "oa.execution_attempt.started",
            ts: timestamp,
            correlationId,
            attemptId: attempt.attemptId,
            executionContractId: contract.executionContractId,
            confirmationRef: consumeConfirmationId,
            newStatus: "running",
            contractStatus: contractWrite.contract.status,
            result: "error",
            detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
            durationMs: Date.now() - started,
          });
          return {
            ok: false,
            error: createAttemptError({
              detailCode: "AGENT_CONFIRMATION_CONSUME_FAILED",
              timestamp,
              correlationId,
              attemptId: attempt.attemptId,
              executionContractId: contract.executionContractId,
              confirmationId: consumeConfirmationId,
              internalCauseRef: `consume_${consumed.error.detailCode}`,
            }),
            attempt: runningAttempt,
            durationMs: Date.now() - started,
          };
        }
      }
    }

    const durationMs = Date.now() - started;
    this.audit.append({
      event: "oa.execution_attempt.started",
      ts: timestamp,
      correlationId,
      attemptId: runningAttempt.attemptId,
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      selectedAgentRef: runningAttempt.selectedAgentRef,
      adapterId: adapterIdForAudit,
      confirmationRef: consumeConfirmationId,
      previousStatus: "accepted",
      newStatus: "running",
      contractStatus: contractWrite.contract.status,
      result: "ok",
      durationMs,
    });
    this.audit.append({
      event: "oa.execution_contract.status_written",
      ts: timestamp,
      correlationId,
      attemptId: runningAttempt.attemptId,
      executionContractId: contract.executionContractId,
      contractStatus: contractWrite.contract.status,
      result: "ok",
      durationMs,
    });

    return {
      ok: true,
      attempt: structuredClone(runningAttempt),
      contractStatus: contractWrite.contract.status,
      contractVersion: contractWrite.contract.version,
      durationMs,
    };
  }

  /** Launch reject/failure → Attempt failed, never executing. */
  private async failLaunch(input: {
    attempt: ExecutionAttempt;
    contractVersion: number;
    cause: "reject" | "fail";
    reason: string;
    timestamp: string;
    correlationId: string;
    started: number;
  }): Promise<ExecutionAttemptResult> {
    const detailCode =
      input.cause === "reject"
        ? ("EXECUTION_LAUNCH_REJECTED" as const)
        : ("EXECUTION_LAUNCH_FAILED" as const);
    const failedAttempt: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason: `EXECUTION_LAUNCH_FAILED: ${input.cause}:${input.reason}`,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };

    let persistedAttempt: ExecutionAttempt | undefined;
    try {
      const persist = async () => {
        await this.attempts.update(failedAttempt, input.attempt.version);
        await this.attempts.releaseActiveContract(
          failedAttempt.executionContractId,
          failedAttempt.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
      persistedAttempt = failedAttempt;
    } catch {
      persistedAttempt = undefined;
    }

    // Indeterminate adapter failure fails the contract; a deterministic
    // rejection leaves it `confirmed` so a Retry stays possible.
    let contractStatus: string | undefined;
    let contractWrite:
      | Awaited<ReturnType<ExecutionContractStatusWriter["write"]>>
      | undefined;
    if (input.cause === "fail") {
      contractWrite = await this.contractStatusWriter.write({
        executionContractId: input.attempt.executionContractId,
        expectedVersion: input.contractVersion,
        nextStatus: "failed",
        reason: "Launch failed before execution started",
      });
      contractStatus = contractWrite.ok ? contractWrite.contract.status : undefined;
    }

    const durationMs = Date.now() - input.started;
    this.audit.append({
      event: "oa.execution_attempt.launch_failed",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: this.adapter.adapterId,
      previousStatus: "accepted",
      newStatus: persistedAttempt ? "failed" : "accepted",
      contractStatus,
      stopReason: failedAttempt.stopReason,
      result: "error",
      detailCode,
      durationMs,
    });

    return {
      ok: false,
      error: createAttemptError({
        detailCode,
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: input.reason,
      }),
      attempt: persistedAttempt,
      durationMs,
    };
  }

  /**
   * REAL launch failed after CREATED (or without invoke). Marks Attempt failed.
   * Journal CREATED is left in place for reconciliation (no second launch).
   */
  private async failRealLaunch(input: {
    attempt: ExecutionAttempt;
    contractVersion: number;
    detailCode: AttemptDetailCode;
    reason: string;
    timestamp: string;
    correlationId: string;
    started: number;
    realProcessInvoked: boolean;
  }): Promise<ExecutionAttemptResult> {
    const failedAttempt: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason: `REAL_LAUNCH_FAILED: ${input.reason}`,
      irreversibleEffectsPossible: input.realProcessInvoked,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };

    let persistedAttempt: ExecutionAttempt | undefined;
    try {
      const persist = async () => {
        await this.attempts.update(failedAttempt, input.attempt.version);
        await this.attempts.releaseActiveContract(
          failedAttempt.executionContractId,
          failedAttempt.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
      persistedAttempt = failedAttempt;
    } catch {
      persistedAttempt = undefined;
    }

    let contractStatus: string | undefined;
    const indeterminate =
      input.detailCode === "REAL_LAUNCH_FAILED" ||
      input.detailCode === "CURSOR_UNAVAILABLE";
    if (indeterminate) {
      const write = await this.contractStatusWriter.write({
        executionContractId: input.attempt.executionContractId,
        expectedVersion: input.contractVersion,
        nextStatus: "failed",
        reason: "REAL launch failed before acknowledgement",
      });
      contractStatus = write.ok ? write.contract.status : undefined;
    }

    const durationMs = Date.now() - input.started;
    this.audit.append({
      event: "oa.execution_attempt.launch_failed",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: this.realLaunchPort?.gatewayId,
      previousStatus: "accepted",
      newStatus: persistedAttempt ? "failed" : "accepted",
      contractStatus,
      stopReason: failedAttempt.stopReason,
      result: "error",
      detailCode: input.detailCode,
      durationMs,
    });

    return {
      ok: false,
      error: createAttemptError({
        detailCode: input.detailCode,
        timestamp: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        internalCauseRef: input.reason,
      }),
      attempt: persistedAttempt,
      durationMs,
    };
  }

  /**
   * Contract update failed AFTER the Attempt became running: compensate
   * fail-closed. No second adapter call, no business rollback.
   */
  private async compensateAfterRunning(input: {
    attempt: ExecutionAttempt;
    timestamp: string;
    correlationId: string;
    started: number;
  }): Promise<ExecutionAttempt | undefined> {
    const compensated: ExecutionAttempt = {
      ...input.attempt,
      status: "failed",
      failedAt: input.timestamp,
      stopReason:
        "EXECUTION_PERSISTENCE_FAILED: contract_executing_update_failed",
      irreversibleEffectsPossible: true,
      updatedAt: input.timestamp,
      version: input.attempt.version + 1,
    };
    try {
      const persist = async () => {
        await this.attempts.update(compensated, input.attempt.version);
        await this.attempts.releaseActiveContract(
          compensated.executionContractId,
          compensated.attemptId,
        );
      };
      if (this.store) {
        await this.store.runInTransaction(persist);
      } else {
        await persist();
      }
    } catch {
      this.audit.append({
        event: "oa.execution_attempt.compensated",
        ts: input.timestamp,
        correlationId: input.correlationId,
        attemptId: input.attempt.attemptId,
        executionContractId: input.attempt.executionContractId,
        newStatus: "running",
        result: "error",
        detailCode: "EXECUTION_PERSISTENCE_FAILED",
        durationMs: Date.now() - input.started,
      });
      return undefined;
    }

    this.audit.append({
      event: "oa.execution_attempt.compensated",
      ts: input.timestamp,
      correlationId: input.correlationId,
      attemptId: compensated.attemptId,
      executionContractId: compensated.executionContractId,
      previousStatus: "running",
      newStatus: "failed",
      stopReason: compensated.stopReason,
      result: "ok",
      detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
      durationMs: Date.now() - input.started,
    });
    return compensated;
  }
}
```

### Note: test files FULL available under `.tmp-sfia-review/gcec-cr23h-reviewable/full_*` and complete diffs above.

## FULL FILE EMBEDS (modified tests @ 290eca65)
### FULL: `projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts`
```typescript
/**
 * D-GCEC-15 Option B negatives — N1–N28 (unit/integration focused).
 * CR-GCEC-17: technicalResultRef is never a trust marker; only Evidence.status=verified.
 * Empty git families do not expand to full GCEC chain.
 * ZERO OpenAI. ZERO REAL Cursor.
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import type { Digest } from "@/lib/oa/doctrine";
import {
  deriveCycleExitState,
  GCEC_GIT_COMPLETION_PROOF_FAMILIES,
  gitProofFamiliesFromRequirements,
  qualifyGitCompletionProofSet,
} from "@/lib/oa/cycle";
import {
  buildTypedGitEvidenceFields,
  createTestEvidenceReviewServices,
  type Evidence,
  type TypedGitEvidenceSource,
} from "@/lib/oa/evidence-review";
import {
  buildGitEffectActionRef,
  deriveAuthorizedExecutionSlice,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  qualifyExecutionContractCompletion,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";
import {
  FakeRepositoryReadPorts,
  verifyCommitClaim,
  verifyPullRequestClaim,
} from "@/lib/oa/git-ports";
import { CONTROL_TOWER_TOOL_DEFINITIONS } from "@/lib/platform/tools";

const DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const OTHER = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const CYCLE = "cycinst:gcec-n";
const REPO = "acme/widget";
const PATH = "docs/functional-design.md";

function baseEvidence(
  partial: Partial<Evidence> & { evidenceId: string },
): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: partial.evidenceId,
    type: partial.type ?? "other",
    status: partial.status ?? "available",
    source: partial.source ?? "test",
    sourceKind: partial.sourceKind ?? "external",
    classification: partial.classification ?? "internal",
    storageMode: partial.storageMode ?? "metadata_only",
    bindings: partial.bindings ?? {
      cycleInstanceId: CYCLE,
      projectId: "prj:gcec",
      executionContractId: "xct:gcec",
    },
    createdAt: partial.createdAt ?? "2026-09-11T10:00:00.000Z",
    updatedAt: partial.updatedAt ?? "2026-09-11T10:00:00.000Z",
    version: partial.version ?? 1,
    location: partial.location,
    digest: partial.digest,
    technicalResultRef: partial.technicalResultRef,
    producedAt: "2026-09-11T10:00:00.000Z",
    availability: "available",
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:test",
      actor: { actorId: "actor:test", role: "system" },
      source: "system",
      timestamp: "2026-09-11T10:00:00.000Z",
      correlationId: "cor:test",
    },
  } as unknown as Evidence;
}

function typed(
  source: TypedGitEvidenceSource,
  payload: Record<string, unknown>,
  evidenceId: string,
  status: Evidence["status"] = "verified",
): Evidence {
  const fields = buildTypedGitEvidenceFields(source, payload as never);
  if (!fields.ok) throw new Error(fields.reason);
  return baseEvidence({
    evidenceId,
    source: fields.fields.source,
    location: fields.fields.location,
    digest: fields.fields.digest ?? DIGEST,
    status,
    // CR-17 — forgeable marker must not grant trust by itself
    technicalResultRef: `studio:repository_read_verified:${source}`,
    bindings: {
      cycleInstanceId: CYCLE,
      projectId: "prj:gcec",
      executionContractId: "xct:gcec",
    },
  });
}

const expected = {
  repositoryRef: REPO,
  targetPath: PATH,
  artifactDigest: DIGEST,
  cycleInstanceId: CYCLE,
  executionContractId: "xct:gcec",
  projectId: "prj:gcec",
};

function fullVerifiedSet(): Evidence[] {
  return [
    typed(
      "git:local_commit",
      { repositoryRef: REPO, commitSha: SHA, message: "docs" },
      "ev:commit",
    ),
    typed(
      "git:remote_push",
      {
        repositoryRef: REPO,
        remote: "origin",
        refName: "gcec/docs",
        commitSha: SHA,
      },
      "ev:push",
    ),
    typed(
      "git:pull_request",
      {
        repositoryRef: REPO,
        prNumber: 1,
        headSha: SHA,
        state: "open",
      },
      "ev:pr",
    ),
    typed(
      "git:ci_status",
      {
        repositoryRef: REPO,
        commitSha: SHA,
        conclusion: "success",
      },
      "ev:ci",
    ),
    typed(
      "git:review_status",
      {
        repositoryRef: REPO,
        prNumber: 1,
        state: "approved",
      },
      "ev:review",
    ),
    typed(
      "git:merge",
      {
        repositoryRef: REPO,
        mergeCommitSha: SHA,
        baseRef: "main",
        prNumber: 1,
      },
      "ev:merge",
    ),
    typed(
      "git:post_merge_verification",
      {
        repositoryRef: REPO,
        targetBranch: "main",
        targetSha: SHA,
        artifactPath: PATH,
        artifactDigest: DIGEST,
      },
      "ev:post",
    ),
  ];
}

describe("gcecD15Negatives — N1–N28", () => {
  it("N1 attempt success with remaining git reqs → nextStatus confirmed not completed", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("confirmed");
    expect(q.remainingRequiredEffects.length).toBeGreaterThan(0);
  });

  it("N2 empty evidenceRequirements + no docs_write capability → no git candidates", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n2",
      evidenceRequirements: [],
      requiredCapabilities: [],
      confirmations: [],
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.commit");
  });

  it("N3 empty git families in qualifyGitCompletionProofSet with requirements:[] → BLOCKING unresolved", () => {
    expect(gitProofFamiliesFromRequirements([])).toEqual([]);
    const r = qualifyGitCompletionProofSet({
      evidence: [],
      requirements: [],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("git_requirements_unresolved");
    }
  });

  it("N4 CR-17 technicalResultRef alone with available status → BLOCKING", () => {
    const forged = fullVerifiedSet().map((e) => ({
      ...e,
      status: "available" as const,
      technicalResultRef: `studio:repository_read_verified:${e.source}`,
    }));
    const r = qualifyGitCompletionProofSet({ evidence: forged, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.reason).toBe("status_not_verified");
    }
  });

  it("N5 verified full set → SATISFIED", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected,
    });
    expect(r.status).toBe("SATISFIED");
  });

  it("N6 slice blocks git without Confirmation; git-only does not authorize FS", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n6",
      evidenceRequirements: ["git:local_commit", "git:merge"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("github.pr.merge");
    expect(slice.authorizedEffects).not.toContain("filesystem.create");
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("N7 confirmation grants git.commit only when actionRef matches", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:n7",
      effect: "git.commit",
      repositoryRef: REPO,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n7",
      evidenceRequirements: ["git:local_commit", "git:remote_push"],
      confirmations: [
        {
          confirmationId: "cnf:n7",
          status: "granted",
          actionRef,
          scope: "git:local_commit",
          level: "N3",
          requestedBy: { actorId: "a", role: "system" },
          requestedTo: { actorId: "a", role: "system" },
          version: 1,
          createdAt: "2026-09-11T10:00:00.000Z",
          updatedAt: "2026-09-11T10:00:00.000Z",
        } as never,
      ],
      confirmationMatch: { repositoryRef: REPO },
    });
    expect(slice.authorizedEffects).toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.push");
  });

  it("N8 cap:cursor.docs_write does NOT imply Git effects (CR-GCEC-15)", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n8",
      evidenceRequirements: [],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toContain("filesystem.create");
    expect(slice.authorizedEffects).not.toContain("validation.run");
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.commit");
  });

  it("N9 FakeDocsWrite skips filesystem when not authorized (git-only)", async () => {
    const root = fs.mkdtempSync(path.join(require("node:os").tmpdir(), "gcec-n9-"));
    try {
      const port = new FakeDocsWriteLaunchPort({
        worktreeRoot: root,
        pathAllowlist: ["docs/"],
        targetPath: PATH,
      });
      const launch = await port.launch({
        attemptId: "xat:n9",
        executionContractId: "xct:n9",
        executionContractVersion: 1,
        semanticFingerprint: "fp:n9",
        selectedAgentRef: "agt:m4",
        adapterRef: "adp:m4",
        correlationId: "cor:n9",
        baseHeadSha: SHA,
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: "workspace.isolated.docs_write",
        scope: "docs",
        timeoutMs: 1000,
        authorizedEffects: ["git.commit"],
        authorizedExecutionSlice: {
          authorizedEffects: ["git.commit"],
          blockedEffects: ["filesystem.create", "filesystem.modify"],
          reasons: [],
        },
        docsWriteSpec: {
          repositoryRef: REPO,
          targetPath: PATH,
          pathAllowlist: ["docs/"],
          artifactType: "functional_design",
          artifactBrief: "fd",
          contentRequirements: [],
          scopeIn: ["docs/"],
          scopeOut: [],
          expectedOutputs: [PATH],
          validationExpectations: [],
          evidenceRequirements: ["git:local_commit"],
          createOrModify: true,
          noDelete: true,
        },
      });
      expect(launch.outcome).toBe("ack");
      expect(port.lastReport?.stoppedBeforeEffects).toEqual(
        expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
      );
      expect(fs.existsSync(path.join(root, PATH))).toBe(false);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  it("N10 commit claim without repository SHA → reported not verified", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    const r = await verifyCommitClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: REPO,
      claimedCommitSha: SHA,
      bindings: {
        projectId: "prj:n",
        cycleInstanceId: "cyc:n",
        executionContractId: "xct:n",
      },
      actor: { actorId: "a", role: "system" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe("reported");
  });

  it("N11 PR claim head mismatch → failed", async () => {
    const evidence = createTestEvidenceReviewServices({
      fixedNowIso: "2026-09-11T12:00:00.000Z",
    });
    const read = new FakeRepositoryReadPorts();
    read.seedPullRequest({
      number: 42,
      title: "x",
      state: "open",
      headSha: OTHER,
      baseBranch: "main",
      url: "https://github.com/acme/widget/pull/42",
    });
    const r = await verifyPullRequestClaim({
      repositoryRead: read,
      evidenceServices: evidence,
      repositoryRef: REPO,
      claimedPrNumber: 42,
      claimedHeadSha: SHA,
      bindings: { projectId: "prj:n", cycleInstanceId: "cyc:n" },
      actor: { actorId: "a", role: "system" },
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("pr_head_mismatch");
  });

  it("N12 out-of-scope workspace write → verify fails", async () => {
    const r = await verifyWorkspaceFileEffects({
      worktreePath: "/tmp",
      pathAllowlist: ["docs/"],
      targetPath: "docs/fd.md",
      nameStatusText: "A\tsrc/evil.ts\nA\tdocs/fd.md",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("unexpected_files_outside_allowlist");
  });

  it("N13 Studio git-ports barrel exports no mutation methods", () => {
    const barrel = fs.readFileSync(
      path.resolve(__dirname, "../../../lib/oa/git-ports/index.ts"),
      "utf8",
    );
    expect(barrel).not.toMatch(/LocalGitCommitPort/);
    expect(barrel).not.toMatch(/NodeLocalGitCommitPort/);
    expect(barrel).not.toMatch(/commitArtifactEvidence/);
  });

  it("N14 Nora tools have no Git mutation tools", () => {
    const names = CONTROL_TOWER_TOOL_DEFINITIONS.map((t) => t.name);
    const mutationLike = names.filter((n) =>
      /(?:^|_)(push|merge|create_pr|pr_create|pr_merge|git_commit)(?:_|$)/i.test(
        n,
      ),
    );
    expect(mutationLike).toEqual([]);
  });

  it("N15 cycle without Git requirement → absence does not block", () => {
    const state = deriveCycleExitState({
      projectId: "prj:n",
      cycleInstanceId: "cyc:n",
      cycleTypeId: "cyc:framing",
      repositoryBinding: null,
      executionContracts: [
        {
          contractId: "xct:n",
          status: "completed",
          expectedOutputs: ["artifact"],
          evidenceRequirements: [],
        },
      ],
      evidence: [
        baseEvidence({
          evidenceId: "ev:art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: "docs/note.md",
        }),
      ],
    });
    expect(state.requirements.find((r) => r.kind === "commit")?.status).toBe(
      "NOT_APPLICABLE",
    );
  });

  it("N16 cursor report claim alone does not satisfy git SET", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: [
        baseEvidence({
          evidenceId: "ev:claim",
          status: "available",
          source: "git:local_commit",
          location: `git:local_commit?repo=acme%2Fwidget&commitSha=${SHA}`,
          technicalResultRef: "studio:cursor_report_claim:git:local_commit",
        }),
      ],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N17 ci failure → BLOCKING", () => {
    const set = fullVerifiedSet().map((e) =>
      e.source === "git:ci_status"
        ? typed(
            "git:ci_status",
            {
              repositoryRef: REPO,
              commitSha: SHA,
              conclusion: "failure",
            },
            "ev:ci-fail",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") expect(r.reason).toBe("ci_not_success");
  });

  it("N18 review pending → BLOCKING", () => {
    const set = fullVerifiedSet().map((e) =>
      e.source === "git:review_status"
        ? typed(
            "git:review_status",
            { repositoryRef: REPO, prNumber: 1, state: "pending" },
            "ev:review-pending",
          )
        : e,
    );
    const r = qualifyGitCompletionProofSet({ evidence: set, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") expect(r.reason).toBe("review_not_approved");
  });

  it("N19 digest mismatch on post_merge → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, artifactDigest: ("sha256:" + "0".repeat(64)) as Digest },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N20 CR-GCEC-20 foreign-EC verified Evidence must NOT complete xct:n20", () => {
    const evidence = [
      baseEvidence({
        evidenceId: "ev:art",
        type: "artifact",
        status: "verified",
        digest: DIGEST,
        location: PATH,
        source: "execution_attempt:docs_write",
        bindings: {
          cycleInstanceId: CYCLE,
          projectId: "prj:gcec",
          executionContractId: "xct:gcec",
        },
      }),
      ...fullVerifiedSet(),
    ];
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:n20",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("confirmed");
  });

  it("N21 verifiedEffects exclude FS from re-authorization", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n21",
      evidenceRequirements: ["artifact", "git:local_commit"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      verifiedEffects: ["filesystem.create", "filesystem.modify", "validation.run"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toEqual(
      expect.arrayContaining([
        "filesystem.create",
        "filesystem.modify",
      ]),
    );
    expect(slice.authorizedEffects).not.toContain("filesystem.create");
    // CR-GCEC-24 — validation not required → not re-authorized
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("N22 git:commit alias authorizes same as git:local_commit", () => {
    const a = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n22a",
      evidenceRequirements: ["git:commit"],
      confirmations: [],
    });
    const b = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:n22b",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [],
    });
    expect(a.blockedEffects).toContain("git.commit");
    expect(b.blockedEffects).toContain("git.commit");
  });

  it("N23 requireVerified default rejects available rows even with forge marker", () => {
    const available = typed(
      "git:local_commit",
      { repositoryRef: REPO, commitSha: SHA, message: "docs" },
      "ev:avail",
      "available",
    );
    const r = qualifyGitCompletionProofSet({
      evidence: [available],
      requirements: ["git:local_commit"],
      expected,
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N24 buildGitEffectActionRef embeds executionContractId + repo", () => {
    const ref = buildGitEffectActionRef({
      executionContractId: "xct:n24",
      effect: "git.push",
      repositoryRef: "acme/widget",
      branchOrRef: "gcec/docs",
    });
    expect(ref).toContain("xct:n24");
    expect(ref).toContain("acme__widget");
    expect(ref).toContain("git-remote_push");
  });

  it("N25 incomplete set missing merge → BLOCKING incomplete_git_proof_set", () => {
    const partial = fullVerifiedSet().filter((e) => e.source !== "git:merge");
    const r = qualifyGitCompletionProofSet({ evidence: partial, expected });
    expect(r.status).toBe("BLOCKING");
    if (r.status === "BLOCKING") {
      expect(r.missing).toContain("git:merge");
    }
  });

  it("N26 repo mismatch → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, repositoryRef: "other/repo" },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N27 cycleInstance mismatch → BLOCKING", () => {
    const r = qualifyGitCompletionProofSet({
      evidence: fullVerifiedSet(),
      expected: { ...expected, cycleInstanceId: "cyc:other" },
    });
    expect(r.status).toBe("BLOCKING");
  });

  it("N28 StartExecutionRequest type surface includes confirmations (compile/runtime shape)", () => {
    // Structural guard — confirmations must be passable for Option B continuation.
    const req: { confirmations?: readonly unknown[] } = {
      confirmations: [],
    };
    expect(Array.isArray(req.confirmations)).toBe(true);
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/execution-attempt/application/startExecution.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/confirmations:\s*request\.confirmations\s*\?\?\s*\[\]/);
  });

  function grantedCnf(partial: {
    confirmationId: string;
    actionRef: string;
    scope: string;
    requestedTo?: { actorId: string; role: string };
    expiresAt?: string;
  }) {
    return {
      confirmationId: partial.confirmationId,
      status: "granted" as const,
      actionRef: partial.actionRef,
      scope: partial.scope,
      level: "N3" as const,
      requestedBy: { actorId: "a", role: "system" },
      requestedTo: partial.requestedTo ?? { actorId: "a", role: "system" },
      version: 1,
      createdAt: "2026-09-11T10:00:00.000Z",
      updatedAt: "2026-09-11T10:00:00.000Z",
      expiresAt: partial.expiresAt,
    } as never;
  }

  it("C19-N1 generic actionRef git:merge + correct scope + concrete match → REFUSED", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n1",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n1",
          actionRef: "git:merge",
          scope: "git:merge",
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        prNumber: 7,
        branchOrRef: "main",
      },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
    expect(slice.blockedEffects).toContain("github.pr.merge");
  });

  it("C19-N2 correct effect wrong executionContractId → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:other",
      effect: "git.push",
      repositoryRef: REPO,
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n2",
      evidenceRequirements: ["git:remote_push"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n2",
          actionRef,
          scope: "git:remote_push",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.push");
  });

  it("C19-N3 correct EC wrong repository → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n3",
      effect: "git.commit",
      repositoryRef: "other/repo",
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n3",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n3",
          actionRef,
          scope: "git:local_commit",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C19-N4 correct repo wrong branch for push → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n4",
      effect: "git.push",
      repositoryRef: REPO,
      branchOrRef: "wrong/branch",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n4",
      evidenceRequirements: ["git:remote_push"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n4",
          actionRef,
          scope: "git:remote_push",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.push");
  });

  it("C19-N5 correct repo wrong PR number for merge → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n5",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 99,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n5",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n5",
          actionRef,
          scope: "git:merge",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, prNumber: 1 },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("C19-N6 correct target wrong requestedTo actor → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n6",
      effect: "git.commit",
      repositoryRef: REPO,
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n6",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n6",
          actionRef,
          scope: "git:local_commit",
          requestedTo: { actorId: "actor:other", role: "human" },
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "gcec/docs",
        actorId: "actor:pilote",
      },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C19-N7 expired Confirmation → REFUSED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n7",
      effect: "git.commit",
      repositoryRef: REPO,
      branchOrRef: "gcec/docs",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n7",
      evidenceRequirements: ["git:local_commit"],
      nowIso: "2026-09-11T12:00:00.000Z",
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n7",
          actionRef,
          scope: "git:local_commit",
          expiresAt: "2026-09-11T11:00:00.000Z",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, branchOrRef: "gcec/docs" },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C19-N8 exact canonical actionRef + correct scope/actor → AUTHORIZED", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c19n8",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 1,
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c19n8",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c19n8",
          actionRef,
          scope: "git:merge",
          requestedTo: { actorId: "actor:pilote", role: "human" },
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        prNumber: 1,
        branchOrRef: "main",
        actorId: "actor:pilote",
      },
    });
    expect(slice.authorizedEffects).toContain("github.pr.merge");
  });

  it("C19 collision-safe actionRef: different PR → different refs under length bound", () => {
    const longEc = `xct:${"n".repeat(80)}`;
    const a = buildGitEffectActionRef({
      executionContractId: longEc,
      effect: "github.pr.merge",
      repositoryRef: "org/very-long-repository-name-for-collision-test",
      branchOrRef: "feature/very-long-branch-name-aaaaaaaa",
      prNumber: 1,
    });
    const b = buildGitEffectActionRef({
      executionContractId: longEc,
      effect: "github.pr.merge",
      repositoryRef: "org/very-long-repository-name-for-collision-test",
      branchOrRef: "feature/very-long-branch-name-aaaaaaaa",
      prNumber: 2,
    });
    expect(a.length).toBeLessThanOrEqual(128);
    expect(b.length).toBeLessThanOrEqual(128);
    expect(a).not.toBe(b);
  });

  function evidenceForContract(
    executionContractId: string,
    extras?: Partial<Evidence>,
  ): Evidence[] {
    const art = baseEvidence({
      evidenceId: `ev:art:${executionContractId}`,
      type: "artifact",
      status: "verified",
      digest: DIGEST,
      location: PATH,
      source: "execution_attempt:docs_write",
      bindings: {
        cycleInstanceId: CYCLE,
        projectId: "prj:gcec",
        executionContractId,
      },
      ...extras,
    });
    const git = fullVerifiedSet().map((e) => ({
      ...e,
      evidenceId: `${e.evidenceId}:${executionContractId}`,
      bindings: {
        cycleInstanceId: CYCLE,
        projectId: "prj:gcec",
        executionContractId,
      },
    }));
    return [art, ...git];
  }

  it("C20-N1 all Evidence verified but foreign EC → complete=false", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: evidenceForContract("xct:foreign"),
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-N2 all Evidence verified but foreign project → complete=false", () => {
    const evidence = evidenceForContract("xct:c20n2").map((e) => ({
      ...e,
      bindings: {
        ...e.bindings!,
        projectId: "prj:foreign",
        executionContractId: "xct:c20n2",
      },
    }));
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n2",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-N3 all Evidence verified but foreign cycle → complete=false", () => {
    const evidence = evidenceForContract("xct:c20n3").map((e) => ({
      ...e,
      bindings: {
        ...e.bindings!,
        cycleInstanceId: "cyc:foreign",
        executionContractId: "xct:c20n3",
      },
    }));
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n3",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-N4 binding absent → complete=false", () => {
    const evidence = evidenceForContract("xct:c20n4").map((e) => {
      const { bindings: _b, ...rest } = e;
      return rest as Evidence;
    });
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20n4",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence,
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
  });

  it("C20-P1 exact project/cycle/EC bindings → complete=true", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c20p1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: [...GCEC_GIT_COMPLETION_PROOF_FAMILIES],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: evidenceForContract("xct:c20p1"),
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(true);
    expect(q.nextStatusAfterSuccessfulAttempt).toBe("completed");
  });

  it("C21-N1 VERIFIED Artifact only + explicit validation → NOT complete", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n1-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n1",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("validation.run");
  });

  it("C21-N2 VERIFIED Artifact only + no validation requirement → validation does not block", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n2",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n2-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n2",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(true);
    expect(q.remainingRequiredEffects).not.toContain("validation.run");
  });

  it("C21-N3 VERIFIED validation + missing Artifact when required → NOT complete", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n3",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n3-val",
          type: "other",
          status: "verified",
          source: "validation.run",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n3",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("filesystem.create");
  });

  it("C21-P1 Artifact + validation verified → complete", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21p1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21p1-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21p1",
          },
        }),
        baseEvidence({
          evidenceId: "ev:c21p1-val",
          type: "other",
          status: "verified",
          source: "validation.run",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21p1",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(true);
  });

  it("C21-N4 Artifact source cannot be interpreted as validation/tests", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n4",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["validation"],
        requiredCapabilities: [],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n4-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "artifact",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n4",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("validation.run");
  });

  it("C21-N5 validation Evidence from foreign EC → cannot satisfy", () => {
    const q = qualifyExecutionContractCompletion({
      contract: {
        executionContractId: "xct:c21n5",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        evidenceRequirements: ["artifact", "validation"],
        expectedOutputs: ["artifact"],
        requiredCapabilities: ["cap:cursor.docs_write"],
      },
      evidence: [
        baseEvidence({
          evidenceId: "ev:c21n5-art",
          type: "artifact",
          status: "verified",
          digest: DIGEST,
          location: PATH,
          source: "execution_attempt:docs_write",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:c21n5",
          },
        }),
        baseEvidence({
          evidenceId: "ev:c21n5-val",
          type: "other",
          status: "verified",
          source: "validation.run",
          bindings: {
            cycleInstanceId: CYCLE,
            projectId: "prj:gcec",
            executionContractId: "xct:foreign",
          },
        }),
      ],
      cycleInstanceId: CYCLE,
    });
    expect(q.complete).toBe(false);
    expect(q.remainingRequiredEffects).toContain("validation.run");
  });

  it("C24-N1 artifact-only → filesystem eligible; validation.run NOT authorized", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n1",
      evidenceRequirements: ["artifact"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toEqual(
      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
    );
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("C24-P1 artifact + explicit validation → validation.run authorized", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24p1",
      evidenceRequirements: ["artifact", "validation"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toContain("validation.run");
  });

  it("C24-N2 post_merge_verification only → github.pr.merge NOT authorized", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c24n2",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 1,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n2",
      evidenceRequirements: ["git:post_merge_verification"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c24n2",
          actionRef,
          scope: "git:merge",
        }),
      ],
      confirmationMatch: { repositoryRef: REPO, prNumber: 1 },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
    expect(slice.blockedEffects).toContain("github.pr.merge");
  });

  it("C24-P2 git:merge explicit → merge candidate Confirmation-gated", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24p2",
      evidenceRequirements: ["git:merge"],
      confirmations: [],
    });
    expect(slice.blockedEffects).toContain("github.pr.merge");
    expect(slice.reasons.some((r) => r.includes("confirmation_required"))).toBe(
      true,
    );
  });

  it("C24-N3 ci_status only → no Cursor Git mutation", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n3",
      evidenceRequirements: ["git:ci_status"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("C24-N4 review_status only → no Cursor Git mutation", () => {
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n4",
      evidenceRequirements: ["git:review_status"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).not.toContain("git.push");
    expect(slice.authorizedEffects).not.toContain("github.pr.create");
  });

  it("C24-N5 postmerge + no merge + exact merge Confirmation → still NO merge", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c24n5",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      prNumber: 7,
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24n5",
      evidenceRequirements: ["git:post_merge_verification"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c24n5",
          actionRef,
          scope: actionRef,
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        prNumber: 7,
        branchOrRef: "main",
      },
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("C24-P3 full vertical → Cursor gets commit/push/PR/merge only", () => {
    const classified = {
      reqs: [
        "artifact",
        "git:local_commit",
        "git:remote_push",
        "git:pull_request",
        "git:ci_status",
        "git:review_status",
        "git:merge",
        "git:post_merge_verification",
      ],
    };
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c24p3",
      evidenceRequirements: classified.reqs,
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [],
    });
    expect(slice.authorizedEffects).toEqual(
      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
    );
    expect(slice.blockedEffects).toEqual(
      expect.arrayContaining([
        "git.commit",
        "git.push",
        "github.pr.create",
        "github.pr.merge",
      ]),
    );
    expect(slice.authorizedEffects).not.toContain("validation.run");
  });

  it("C23 resolveGitEffectTarget refuses projected repo mismatch", async () => {
    const { resolveGitEffectTarget } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23",
        projectId: "prj:gcec",
        inputs: { workingBranch: "gcec/docs" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: "acme/widget",
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: "main",
      },
      projectedRepositoryRef: "other/repo",
      actorId: "actor:pilote",
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toContain("mismatch");
  });

  it("C23-N1 caller repo override refused vs Project binding", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
      resolvedTargetToConfirmationMatch,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23n1",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: "acme/widget",
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.repositoryRef).toBe("acme/widget");
    const hostile = assertConfirmationMatchAgreesWithServerTarget({
      assertion: { repositoryRef: "other/repo" },
      server: resolved.target,
    });
    expect(hostile.ok).toBe(false);
    const serverMatch = resolvedTargetToConfirmationMatch(resolved.target);
    const actionRefHostile = buildGitEffectActionRef({
      executionContractId: "xct:c23n1",
      effect: "git.commit",
      repositoryRef: "other/repo",
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c23n1",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c23n1",
          actionRef: actionRefHostile,
          scope: actionRefHostile,
        }),
      ],
      confirmationMatch: serverMatch,
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
  });

  it("C23-N2 caller branch override refused vs EC durable branch", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.push",
      contract: {
        executionContractId: "xct:c23n2",
        projectId: "prj:gcec",
        inputs: { workingBranch: "branch-a" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.branchOrRef).toBe("branch-a");
    expect(
      assertConfirmationMatchAgreesWithServerTarget({
        assertion: { branchOrRef: "branch-b" },
        server: resolved.target,
      }).ok,
    ).toBe(false);
  });

  it("C23-N3 verified PR #41; caller assertion #42 refused by assert helper", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const evidence = [
      baseEvidence({
        evidenceId: "ev:pr41",
        status: "verified",
        source: "git:pull_request",
        location: "git:pull_request?repo=acme%2Fwidget&prNumber=41",
        bindings: {
          projectId: "prj:gcec",
          cycleInstanceId: CYCLE,
          executionContractId: "xct:c23n3",
        },
      }),
    ];
    const resolved = resolveGitEffectTarget({
      effect: "github.pr.merge",
      contract: {
        executionContractId: "xct:c23n3",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        inputs: {},
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: "acme/widget",
        remoteUrl: "https://github.com/acme/widget.git",
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
      verifiedEvidence: evidence,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.prNumber).toBe(41);
    const assertOk = assertConfirmationMatchAgreesWithServerTarget({
      assertion: { prNumber: 42 },
      server: resolved.target,
    });
    expect(assertOk.ok).toBe(false);
  });

  it("C23-N4 hostile actorId cannot authorize — server actor from request wins", async () => {
    const { resolveGitEffectTarget } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23n4",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.target.actorId).toBe("actor:pilote");
    expect(resolved.target.actorId).not.toBe("actor:hostile");
  });

  it("C23-P1 canonical server-derived target + exact Confirmation → authorized", async () => {
    const {
      resolveGitEffectTarget,
      resolvedTargetToConfirmationMatch,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23p1",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    const match = resolvedTargetToConfirmationMatch(resolved.target);
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:c23p1",
      effect: "git.commit",
      repositoryRef: match.repositoryRef!,
      branchOrRef: match.branchOrRef,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:c23p1",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:c23p1",
          actionRef,
          scope: actionRef,
          requestedTo: { actorId: "actor:pilote", role: "pilote" },
        }),
      ],
      confirmationMatch: match,
    });
    expect(slice.authorizedEffects).toContain("git.commit");
  });

  it("C23-P2 matching assertion allowed but non-authoritative", async () => {
    const {
      resolveGitEffectTarget,
      assertConfirmationMatchAgreesWithServerTarget,
    } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "git.commit",
      contract: {
        executionContractId: "xct:c23p2",
        projectId: "prj:gcec",
        inputs: { workingBranch: "main" },
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(
      assertConfirmationMatchAgreesWithServerTarget({
        assertion: {
          repositoryRef: REPO,
          branchOrRef: "main",
          actorId: "actor:pilote",
        },
        server: resolved.target,
      }).ok,
    ).toBe(true);
  });

  it("H23A-P1 canonical repo + branch + exact Confirmation → git.commit authorized", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:h23a-p1",
      effect: "git.commit",
      repositoryRef: REPO,
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:h23a-p1",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:h23a-p1",
          actionRef,
          scope: actionRef,
          requestedTo: { actorId: "actor:pilote", role: "pilote" },
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "main",
        actorId: "actor:pilote",
      },
    });
    expect(slice.authorizedEffects).toContain("git.commit");
  });

  it("H23A-N3 empty repositoryRef Confirmation cannot authorize git.commit", () => {
    const emptyRef = buildGitEffectActionRef({
      executionContractId: "xct:h23a-n3",
      effect: "git.commit",
      repositoryRef: "",
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:h23a-n3",
      evidenceRequirements: ["git:local_commit"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:h23a-n3",
          actionRef: emptyRef,
          scope: emptyRef,
        }),
      ],
      confirmationMatch: {
        repositoryRef: "",
        branchOrRef: "main",
      },
    });
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.blockedEffects).toContain("git.commit");
  });

  it("H23A unavailableProtectedEffects blocks git even with crafted Confirmation", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:h23a-u",
      effect: "git.commit",
      repositoryRef: REPO,
      branchOrRef: "main",
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:h23a-u",
      evidenceRequirements: ["artifact", "git:local_commit"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:h23a-u",
          actionRef,
          scope: actionRef,
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "main",
        actorId: "a",
      },
      unavailableProtectedEffects: ["git.commit"],
    });
    expect(slice.authorizedEffects).toContain("filesystem.create");
    expect(slice.authorizedEffects).not.toContain("git.commit");
    expect(slice.reasons.some((r) => r.includes("canonical_target_unavailable"))).toBe(
      true,
    );
  });

  it("H23B-N1 merge without VERIFIED PR + crafted Confirmation → not authorized", async () => {
    const { resolveGitEffectTarget } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const resolved = resolveGitEffectTarget({
      effect: "github.pr.merge",
      contract: {
        executionContractId: "xct:h23b-n1",
        projectId: "prj:gcec",
        cycleInstanceId: CYCLE,
        inputs: {},
      },
      projectRepositoryBinding: {
        provider: "github",
        identity: REPO,
        remoteUrl: `https://github.com/${REPO}.git`,
        defaultBranch: "main",
      },
      actorId: "actor:pilote",
      verifiedEvidence: [],
    });
    expect(resolved.ok).toBe(false);
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:h23b-n1",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      branchOrRef: "main",
      prNumber: 1,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:h23b-n1",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:h23b-n1",
          actionRef,
          scope: actionRef,
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "main",
        // no prNumber — incomplete canonical target
      },
      unavailableProtectedEffects: ["github.pr.merge"],
    });
    expect(slice.authorizedEffects).not.toContain("github.pr.merge");
  });

  it("H23B-N2 ambiguous VERIFIED PR identities → resolve fails", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const evidence = [
      baseEvidence({
        evidenceId: "ev:pr41",
        status: "verified",
        source: "git:pull_request",
        location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41`,
        bindings: {
          projectId: "prj:gcec",
          cycleInstanceId: CYCLE,
          executionContractId: "xct:h23b-n2",
        },
      }),
      baseEvidence({
        evidenceId: "ev:pr42",
        status: "verified",
        source: "git:pull_request",
        location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=42`,
        bindings: {
          projectId: "prj:gcec",
          cycleInstanceId: CYCLE,
          executionContractId: "xct:h23b-n2",
        },
      }),
    ];
    const r = resolveVerifiedPullRequestNumber({
      evidence,
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23b-n2",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("verified_pull_request_identity_ambiguous");
  });

  it("H23B-P1 unique VERIFIED PR + exact merge Confirmation → authorized", () => {
    const actionRef = buildGitEffectActionRef({
      executionContractId: "xct:h23b-p1",
      effect: "github.pr.merge",
      repositoryRef: REPO,
      branchOrRef: "main",
      prNumber: 41,
    });
    const slice = deriveAuthorizedExecutionSlice({
      executionContractId: "xct:h23b-p1",
      evidenceRequirements: ["git:merge"],
      confirmations: [
        grantedCnf({
          confirmationId: "cnf:h23b-p1",
          actionRef,
          scope: actionRef,
          requestedTo: { actorId: "actor:pilote", role: "pilote" },
        }),
      ],
      confirmationMatch: {
        repositoryRef: REPO,
        branchOrRef: "main",
        prNumber: 41,
        actorId: "actor:pilote",
      },
    });
    expect(slice.authorizedEffects).toContain("github.pr.merge");
  });

  it("H23C-N1 VERIFIED PR without repository identity → ineligible", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveVerifiedPullRequestNumber({
      evidence: [
        baseEvidence({
          evidenceId: "ev:pr-norepo",
          status: "verified",
          source: "git:pull_request",
          location: "git:pull_request?prNumber=41",
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-n1",
          },
        }),
      ],
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23c-n1",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe("verified_pull_request_identity_missing");
  });

  it("H23C-N2 VERIFIED PR wrong repository → ineligible", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveVerifiedPullRequestNumber({
      evidence: [
        baseEvidence({
          evidenceId: "ev:pr-wrong",
          status: "verified",
          source: "git:pull_request",
          location: "git:pull_request?repo=other%2Frepo&prNumber=41",
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-n2",
          },
        }),
      ],
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23c-n2",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
  });

  it("H23C-N3 VERIFIED PR missing prNumber → ineligible", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveVerifiedPullRequestNumber({
      evidence: [
        baseEvidence({
          evidenceId: "ev:pr-nopr",
          status: "verified",
          source: "git:pull_request",
          location: `git:pull_request?repo=${encodeURIComponent(REPO)}`,
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-n3",
          },
        }),
      ],
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23c-n3",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(false);
  });

  it("H23C-P1 exact project/cycle/EC/repo/pr → trusted #41", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveVerifiedPullRequestNumber({
      evidence: [
        baseEvidence({
          evidenceId: "ev:pr-ok",
          status: "verified",
          source: "git:pull_request",
          location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41`,
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-p1",
          },
        }),
      ],
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23c-p1",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.prNumber).toBe(41);
  });

  it("H23C-N4 malformed no-repo row does not make unique #41 ambiguous", async () => {
    const { resolveVerifiedPullRequestNumber } = await import(
      "@/lib/oa/execution-attempt/domain/resolveGitEffectTarget"
    );
    const r = resolveVerifiedPullRequestNumber({
      evidence: [
        baseEvidence({
          evidenceId: "ev:pr-ok41",
          status: "verified",
          source: "git:pull_request",
          location: `git:pull_request?repo=${encodeURIComponent(REPO)}&prNumber=41`,
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-n4",
          },
        }),
        baseEvidence({
          evidenceId: "ev:pr-malformed42",
          status: "verified",
          source: "git:pull_request",
          location: "git:pull_request?prNumber=42",
          bindings: {
            projectId: "prj:gcec",
            cycleInstanceId: CYCLE,
            executionContractId: "xct:h23c-n4",
          },
        }),
      ],
      projectId: "prj:gcec",
      cycleInstanceId: CYCLE,
      executionContractId: "xct:h23c-n4",
      repositoryRef: REPO,
    });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.prNumber).toBe(41);
  });
});
```

### FULL: `projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts`
```typescript
/**
 * CR-GCEC-23 — StartExecution application-boundary authority tests.
 * Server-derived Confirmation target; hostile confirmationMatch cannot authorize.
 * ZERO REAL — FakeDocsWriteLaunchPort only.
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Confirmation } from "@/lib/oa/decision";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  buildGitEffectActionRef,
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  ManagedProjectRepositoryResolver,
  MemoryLaunchSafetyJournal,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt";
import {
  FakeRepositoryReadPorts,
  verifyPullRequestClaim,
} from "@/lib/oa/git-ports";
import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import { FakeConversationProvider } from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import {
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  startPreparedTrajectoryCycle,
  materializeLifecycleRecommendationFromStructuredOutput,
  resolveTrajectoryBootstrapPresence,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";

const APP_ROOT = path.resolve(__dirname, "../../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "acme/widget";
const HOSTILE_REPO = "other/hostile";
const BRANCH = "main";
const NOW = "2026-09-11T15:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
const HOSTILE_ACTOR = {
  actorId: "actor:hostile",
  role: "intruder",
  displayName: "Hostile",
  authorityLevel: "N3" as const,
};

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const temps: string[] = [];

afterEach(() => {
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  for (const t of temps.splice(0)) {
    try {
      fs.rmSync(t, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
});

beforeEach(() => {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

function tempDir(prefix: string): string {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(d);
  return d;
}

function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    shell: false,
  }).trim();
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:c23-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:c23-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:c23-${this.prefix}-${this.n}`;
  }
}

function initManagedRepo(managedBase: string, identity: string): {
  repoRoot: string;
  baseHeadSha: string;
} {
  const sanitized = sanitizeManagedRepoIdentity(identity);
  const repoRoot = path.join(managedBase, sanitized);
  fs.mkdirSync(repoRoot, { recursive: true });
  git(repoRoot, ["init"]);
  git(repoRoot, ["config", "user.email", "c23@test.local"]);
  git(repoRoot, ["config", "user.name", "C23"]);
  git(repoRoot, ["checkout", "-b", "main"]);
  git(repoRoot, [
    "remote",
    "add",
    "origin",
    `https://github.com/${identity}.git`,
  ]);
  fs.writeFileSync(path.join(repoRoot, "README.md"), "# widget\n");
  fs.mkdirSync(path.join(repoRoot, "docs"), { recursive: true });
  git(repoRoot, ["add", "README.md"]);
  git(repoRoot, ["commit", "-m", "init"]);
  const baseHeadSha = git(repoRoot, ["rev-parse", "HEAD"]);
  expect(
    new ManagedProjectRepositoryResolver().resolveLocalRepoRoot(
      { identity },
      managedBase,
    ),
  ).toBe(repoRoot);
  return { repoRoot, baseHeadSha };
}

function requireAuth(
  auth: ReturnType<typeof registerLocalPiloteAuthority>,
): string {
  if (!auth.ok) throw new Error(`auth: ${auth.code}`);
  return auth.evidenceId;
}

async function grantCnf(input: {
  runtime: RuntimeApplicationService;
  confirmationId: string;
  actionRef: string;
  decisionRef: string;
  requestedTo?: typeof PILOTE;
}): Promise<Confirmation> {
  const requestedTo = input.requestedTo ?? PILOTE;
  const auth = requireAuth(
    registerLocalPiloteAuthority({
      authorityResolver: input.runtime.oa!.authorityResolver,
      scope: input.actionRef,
      issuedAt: NOW,
      evidenceId: `evd:auth:${input.confirmationId}`,
      forceEnable: true,
    }),
  );
  const requested =
    await input.runtime.oa!.decisionServices.requestConfirmation.execute({
      confirmationId: input.confirmationId,
      level: "N3",
      actionRef: input.actionRef,
      requestedBy: PILOTE,
      requestedTo,
      scope: input.actionRef,
      idempotencyKey: `idem:${input.confirmationId}`,
      decisionRef: input.decisionRef,
    });
  if (!requested.ok) {
    throw new Error(`requestCnf: ${requested.error.detailCode}`);
  }
  const granted =
    await input.runtime.oa!.decisionServices.grantConfirmation.execute({
      confirmationId: input.confirmationId,
      actor: requestedTo,
      authorityEvidenceId: auth,
    });
  if (!granted.ok) {
    throw new Error(`grantCnf: ${granted.error.detailCode}`);
  }
  return granted.confirmation;
}

/**
 * Product path through confirmed docs-write EC (git:local_commit present).
 * Returns before any StartExecution.
 */
async function bootToConfirmedEc(
  suffix: string,
  options: { withRepositoryBinding?: boolean } = {},
) {
  const withRepositoryBinding = options.withRepositoryBinding !== false;
  const root = tempDir(`sfia-c23-${suffix}-`);
  const managedBase = path.join(root, "managed");
  const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
  const gitState = new FakeCursorGitExternalState({
    worktreeRoot: repoRoot,
    initialBranch: "main",
    initialSha: baseHeadSha,
  });
  const fakeLaunch = new FakeDocsWriteLaunchPort({
    worktreeRoot: repoRoot,
    pathAllowlist: ["docs/"],
    defaultBranch: BRANCH,
    repositoryRef: IDENTITY,
    gitState,
  });
  const safetyJournal = new MemoryLaunchSafetyJournal();
  const runtime = getRuntimeApplicationService({
    registryRoot: REGISTRY_ROOT,
    schemasRoot: SCHEMAS_ROOT,
    nowIso: NOW,
    idSource: new FixedIdSource(suffix),
    auditMode: "noop",
    productDbPath: path.join(root, "oa.sqlite"),
    realBoundary: {
      launchPort: fakeLaunch,
      safetyJournal,
      managedRepoRootBase: managedBase,
    },
  });
  const oa = runtime.oa!;

  const created = await runtime.createProject({
    name: `C23 ${suffix}`,
    objective: "CR-GCEC-23 StartExecution boundary",
    context: "application-boundary",
    criticality: "STANDARD",
    constraints: ["ZERO LIVE"],
    shortReference: `C23${suffix}`.slice(0, 8),
    idempotencyKey: `idem:c23-${suffix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("createProject failed");
  const projectId = created.project.projectId;

  if (withRepositoryBinding) {
    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
      projectId,
      actor: PILOTE,
      binding: {
        provider: "github",
        identity: IDENTITY,
        remoteUrl: `https://github.com/${IDENTITY}.git`,
        defaultBranch: "main",
        pathRoot: "docs",
        baseSha: baseHeadSha,
      },
    });
    expect(bound.ok).toBe(true);
  }

  const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions0 = await oa.decisionServices.decisions.listByProject(
    projectId,
  );
  const lpsBoot =
    await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  if (!lpsBoot.ok) throw new Error("lps");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const projectBoot = await oa.projectServices.getProject.execute({ projectId });
  if (!projectBoot.ok || !projectBoot.project.doctrinePackageRef) {
    throw new Error("doctrine pin missing");
  }
  const pin = projectBoot.project.doctrinePackageRef;

  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "C23 Next cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Design fonctionnel.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:functional-design",
        rationale: "C23",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: { ...SIGNALS_LIGHT },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles: cycles0,
      lpsActiveCycleInstanceId: lpsBoot.livingProjectState.activeCycleInstanceId,
      lpsVersion: lpsBoot.livingProjectState.version,
      doctrinePackageId: pin.doctrinePackageId,
      doctrinePackageVersion: pin.version,
      doctrinePackageDigest: pin.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions: decisions0,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: NOW,
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);

  const bridgeDeps = {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
    listEpistemicByProject: (pid: string) =>
      oa.cycleServices.epistemic.listByProject(pid),
    listCyclesByProject: (pid: string) =>
      oa.cycleServices.cycles.listByProject(pid),
    listDecisionsByProject: (pid: string) =>
      oa.decisionServices.decisions.listByProject(pid),
    listEvidenceByProject: (pid: string) =>
      oa.evidenceReviewServices.repository.listByProject(pid),
    getCurrentLps: (pid: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: pid,
      }),
    getProjectDoctrinePin: async (pid: string) => {
      const p = await oa.projectServices.getProject.execute({ projectId: pid });
      if (!p.ok) return null;
      const d = p.project.doctrinePackageRef;
      return d
        ? {
            doctrinePackageId: d.doctrinePackageId,
            version: d.version,
            digest: d.digest,
          }
        : null;
    },
    newTrajectoryId: () => `trj:c23-${suffix}`,
    newStepId: () => `stp:c23-${suffix}`,
    newProvenanceObservationId: () => `epi:c23-${suffix}`,
    correlationId: `cor:c23-bridge-${suffix}`,
  };

  const candidate =
    await prepareCandidateTrajectoryFromCurrentRecommendation({
      projectId,
      deps: bridgeDeps,
    });
  expect(candidate.ok).toBe(true);
  const presentation = await buildPreCycleCandidateApprovalPresentation({
    oa,
    projectId,
  });
  expect(presentation.ok && presentation.presentation).toBeTruthy();
  if (!presentation.ok || !presentation.presentation) {
    throw new Error("presentation");
  }
  const approved = await approveCandidateTrajectory({
    oa,
    projectId,
    presentationDigest: presentation.presentation.presentationDigest,
    forceLocalAuthority: true,
  });
  expect(approved.ok).toBe(true);
  const prep = await prepareCycleFromValidatedTrajectory({ oa, projectId });
  expect(prep.ok).toBe(true);
  if (!prep.ok) throw new Error(prep.code);
  const startedCycle = await startPreparedTrajectoryCycle({
    oa,
    projectId,
    cycleInstanceId: prep.cycle.cycleInstanceId,
    forceLocalAuthority: true,
  });
  expect(startedCycle.ok).toBe(true);
  if (!startedCycle.ok) throw new Error(startedCycle.code);
  const cycleInstanceId = startedCycle.cycle.cycleInstanceId;

  const overview = await runtime.getProject(projectId);
  expect(overview.ok).toBe(true);
  if (!overview.ok) throw new Error("overview");
  const provider = new FakeConversationProvider();
  const analyzed = await analyzeIntent({
    userContent: "__F2_DOCS_WRITE_GCEC__ produce functional design",
    projectSummary: overview.project.name ?? "C23",
    provider,
  });
  const snapshot = {
    projectId,
    lpsId: overview.livingState.id,
    lpsVersion: overview.livingState.version,
    doctrineDigest: overview.doctrine.digest,
    activeCycleInstanceId: cycleInstanceId,
    ckcResolutionRef: null as string | null,
  };
  const proposal = saveProposal({
    proposalId: createProposalId(),
    status: "DECISION_REQUIRED",
    rephrasedRequest: analyzed.analysis.rephrasedRequest ?? "docs write",
    objective: analyzed.analysis.objective ?? "FD",
    cycleTypeId:
      analyzed.analysis.candidateCycleTypeId ?? "cyc:functional-design",
    recommendedProfile: "Standard",
    rationale: "C23",
    scope: analyzed.analysis.scope ?? "docs/",
    outOfScope: analyzed.analysis.outOfScope,
    activatedBlocks: analyzed.analysis.activatedBlocks,
    expectedOutcome: analyzed.analysis.expectedOutcome ?? "artifact",
    sources: [],
    risks: analyzed.analysis.risks,
    reservations: analyzed.analysis.reservations,
    stopConditions: analyzed.analysis.stopConditions,
    morrisGateRequired: true,
    nextPossibleStep: "F3 PREPARE",
    contextSnapshot: snapshot,
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: analyzed.analysis.requestedOperation,
    executionIntent: analyzed.analysis.executionIntent,
  });
  const go = await recordF2Decision({
    proposalId: proposal.proposalId,
    projectId,
    decisionKind: "GO",
    currentContext: snapshot,
    decisionServices: oa.decisionServices,
    authorityResolver: oa.authorityResolver,
    nowIso: () => oa.clock.nowIso(),
    forceM3Authority: true,
  });
  expect(go.ok).toBe(true);
  if (!go.ok) throw new Error("go");
  const decisionId = go.decision.decisionId;

  const overviewAfter = await runtime.getProject(projectId);
  if (!overviewAfter.ok) throw new Error("overviewAfter");
  const prepared = await prepareAndResolveM3ProductPath({
    projectId,
    decisionId,
    currentContext: {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    },
    deps: {
      decisionServices: oa.decisionServices,
      authorityResolver: oa.authorityResolver,
      executionContractServices: oa.executionContractServices,
      nowIso: () => oa.clock.nowIso(),
      forceM3Authority: true,
      preferBoundedDocsWriteProfile: true,
      boundedDocsWriteBaseHeadSha: baseHeadSha,
    },
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error("prepareM3");
  const durableEc =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: prepared.payload.successor.executionContractId,
    });
  expect(durableEc.ok).toBe(true);
  if (!durableEc.ok) throw new Error("ec missing");
  let contract = durableEc.contract;

  const execAuth = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: contract.scope,
    issuedAt: NOW,
    evidenceId: `evd:c23-exec:${contract.executionContractId}`,
    forceEnable: true,
  });
  const gateConfirmId = `cfm:gate:${contract.executionContractId}`;
  const requested = await oa.decisionServices.requestConfirmation.execute({
    confirmationId: gateConfirmId,
    level: "N3",
    actionRef: F3_CONFIRM_ACTION_REF,
    requestedBy: PILOTE,
    requestedTo: PILOTE,
    scope: contract.scope,
    idempotencyKey: `idem:${gateConfirmId}`,
    decisionRef: decisionId,
  });
  expect(requested.ok).toBe(true);
  const grantedGate = await oa.decisionServices.grantConfirmation.execute({
    confirmationId: gateConfirmId,
    actor: PILOTE,
    authorityEvidenceId: requireAuth(execAuth),
  });
  expect(grantedGate.ok).toBe(true);
  const confirmed =
    await oa.executionContractServices.confirmExecutionContract.execute({
      executionContractId: contract.executionContractId,
      confirmationId: gateConfirmId,
      actor: PILOTE,
      authorityEvidenceId: requireAuth(execAuth),
      expectedVersion: contract.version,
    });
  expect(confirmed.ok).toBe(true);
  if (!confirmed.ok) throw new Error("confirm");
  contract = confirmed.contract;

  return {
    runtime,
    oa,
    projectId,
    cycleInstanceId,
    decisionId,
    contract,
    execAuthEvidenceId: requireAuth(execAuth),
    fakeLaunch,
    gitState,
  };
}

async function selectGate(input: {
  runtime: RuntimeApplicationService;
  attemptId: string;
  executionContractId: string;
  contractVersion: number;
  grantId: string;
  authorityEvidenceId: string;
  confirmations?: readonly Confirmation[];
  confirmationMatch?: {
    repositoryRef?: string;
    branchOrRef?: string;
    prNumber?: number;
    actorId?: string;
  };
  verifiedEffects?: readonly (
    | "filesystem.create"
    | "filesystem.modify"
    | "validation.run"
    | "git.commit"
    | "git.push"
    | "github.pr.create"
    | "github.pr.merge"
  )[];
}) {
  const attempts = input.runtime.oa!.executionAttemptServices;
  const selected = await attempts.selectExecutionAgent.execute({
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    idempotencyKey: `idem:sel:${input.attemptId}`,
    actor: PILOTE,
    authorityEvidenceId: input.authorityEvidenceId,
    expectedContractVersion: input.contractVersion,
    selectionProfile: "standard",
    selectionStrategy: "capabilities_deterministic",
    requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    systemInitiated: true,
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error(selected.error.message);
  const expiresAt = new Date(Date.parse(NOW) + 60 * 60 * 1000).toISOString();
  const gate = await attempts.grantRealExecutionGate!.execute({
    grantId: input.grantId,
    attemptId: input.attemptId,
    actor: PILOTE,
    expiresAt,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  expect(gate.ok).toBe(true);
  if (!gate.ok) throw new Error(gate.error.message);
  return attempts.startExecution.execute({
    attemptId: input.attemptId,
    actor: PILOTE,
    authorityEvidenceId: input.authorityEvidenceId,
    confirmations: input.confirmations ?? [],
    confirmationMatch: input.confirmationMatch,
    verifiedEffects: input.verifiedEffects,
  });
}

describe("gcecCr23StartExecution — application boundary", () => {
  it("C23-N1 StartExecution refuses caller repo override vs Project binding", async () => {
    const ctx = await bootToConfirmedEc("n1");
    const hostileRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: HOSTILE_REPO,
      branchOrRef: BRANCH,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:n1:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: hostileRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-n1:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-n1",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      confirmationMatch: {
        repositoryRef: HOSTILE_REPO,
        branchOrRef: BRANCH,
        actorId: PILOTE.actorId,
      },
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toMatch(
        /hostile_confirmation_match_repository_mismatch|projected_repository/,
      );
    }
  }, 90_000);

  it("C23-N2 StartExecution refuses caller branch override vs EC workingBranch", async () => {
    const ctx = await bootToConfirmedEc("n2");
    const inputs = (ctx.contract.inputs ?? {}) as Record<string, unknown>;
    expect(inputs.workingBranch ?? inputs.defaultBranch).toBeTruthy();
    const durableBranch = String(
      inputs.workingBranch ?? inputs.defaultBranch ?? BRANCH,
    );
    const hostileBranch = "branch-hostile";
    expect(hostileBranch).not.toBe(durableBranch);
    const hostileRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: hostileBranch,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:n2:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: hostileRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-n2:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-n2",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      confirmationMatch: {
        repositoryRef: IDENTITY,
        branchOrRef: hostileBranch,
        actorId: PILOTE.actorId,
      },
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toBe(
        "hostile_confirmation_match_branch_mismatch",
      );
    }
  }, 90_000);

  it("C23-N3 StartExecution refuses caller PR override vs verified Evidence", async () => {
    const ctx = await bootToConfirmedEc("n3");
    ctx.gitState.currentBranch = "feature";
    ctx.gitState.branchHeads.set(
      "feature",
      "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    );
    ctx.gitState.prs.clear();
    ctx.gitState.prs.set(41, {
      number: 41,
      headSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      base: "main",
      state: "open",
      headBranch: "feature",
    });
    const repoRead = new FakeRepositoryReadPorts({ gitState: ctx.gitState });
    const v = await verifyPullRequestClaim({
      repositoryRead: repoRead,
      evidenceServices: ctx.oa.evidenceReviewServices,
      repositoryRef: IDENTITY,
      claimedPrNumber: 41,
      claimedHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      bindings: {
        projectId: ctx.projectId,
        cycleInstanceId: ctx.cycleInstanceId,
        executionContractId: ctx.contract.executionContractId,
      },
      actor: PILOTE,
      nowIso: NOW,
    });
    expect(v.ok).toBe(true);
    if (!v.ok) throw new Error(v.reason);

    const hostileRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "github.pr.merge",
      repositoryRef: IDENTITY,
      branchOrRef: "main",
      prNumber: 42,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:n3:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: hostileRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-n3:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-n3",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      confirmationMatch: {
        repositoryRef: IDENTITY,
        branchOrRef: "main",
        prNumber: 42,
        actorId: PILOTE.actorId,
      },
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
        "git.push",
        "github.pr.create",
      ],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toBe(
        "hostile_confirmation_match_pr_mismatch",
      );
    }
  }, 90_000);

  it("C23-N4 StartExecution: hostile actor assertion cannot authorize", async () => {
    const ctx = await bootToConfirmedEc("n4");
    const canonicalRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    // Confirmation granted to Pilot (request.actor). Hostile assertion actorId=B.
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:n4:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: canonicalRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-n4:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-n4",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      confirmationMatch: {
        repositoryRef: IDENTITY,
        branchOrRef: BRANCH,
        actorId: HOSTILE_ACTOR.actorId,
      },
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toBe(
        "hostile_confirmation_match_actor_mismatch",
      );
    }
  }, 90_000);

  it("C23-P1 StartExecution authorizes canonical server target + exact Confirmation", async () => {
    const ctx = await bootToConfirmedEc("p1");
    const canonicalRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:p1:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: canonicalRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-p1:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-p1",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.message);
    const last = ctx.fakeLaunch.calls.at(-1);
    expect(last?.authorizedEffects).toContain("git.commit");
    expect(last?.authorizedEffects).not.toContain("filesystem.create");
    expect(
      ctx.fakeLaunch.calls.every((c) => c.action === M4_BOUNDED_DOCS_WRITE_ACTION),
    ).toBe(true);
  }, 90_000);

  it("C23-P2 matching assertion accepted but non-authoritative (server truth wins)", async () => {
    const ctx = await bootToConfirmedEc("p2");
    const canonicalRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: IDENTITY,
      branchOrRef: BRANCH,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:p2:${ctx.contract.executionContractId}`.slice(0, 128),
      actionRef: canonicalRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:c23-p2:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:c23-p2",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      confirmationMatch: {
        repositoryRef: IDENTITY,
        branchOrRef: BRANCH,
        actorId: PILOTE.actorId,
      },
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.message);
    const last = ctx.fakeLaunch.calls.at(-1);
    expect(last?.authorizedEffects).toContain("git.commit");
    // Assertion matched server truth but did not redefine it (repo still Project binding).
    expect(last?.repositoryBindingIdentity ?? last?.repositoryBinding?.identity).toBe(
      IDENTITY,
    );
  }, 90_000);

  it("H23A-N1 missing Project repository binding + crafted empty-repo Confirmation → git.commit refused", async () => {
    const ctx = await bootToConfirmedEc("h23a-n1", {
      withRepositoryBinding: false,
    });
    const emptyRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: "",
      branchOrRef: BRANCH,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:h23a-n1:${ctx.contract.executionContractId}`.slice(
        0,
        128,
      ),
      actionRef: emptyRef,
      decisionRef: ctx.decisionId,
    });
    const callsBefore = ctx.fakeLaunch.calls.length;
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:h23a-n1:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:h23a-n1",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      // no confirmationMatch — incomplete target must still fail closed
      verifiedEffects: ["filesystem.create", "filesystem.modify"],
    });
    expect(started.ok).toBe(false);
    if (!started.ok) {
      expect(started.error.internalCauseRef).toBe("no_authorized_effect");
    }
    expect(ctx.fakeLaunch.calls.length).toBe(callsBefore);
  }, 90_000);

  it("H23A-N2 missing binding: filesystem may authorize; git.commit blocked", async () => {
    const ctx = await bootToConfirmedEc("h23a-n2", {
      withRepositoryBinding: false,
    });
    const emptyRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "git.commit",
      repositoryRef: "",
      branchOrRef: BRANCH,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:h23a-n2:${ctx.contract.executionContractId}`.slice(
        0,
        128,
      ),
      actionRef: emptyRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:h23a-n2:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:h23a-n2",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.message);
    const last = ctx.fakeLaunch.calls.at(-1);
    expect(last?.authorizedEffects).toEqual(
      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
    );
    expect(last?.authorizedEffects).not.toContain("git.commit");
    expect(last?.authorizedEffects).not.toContain("git.push");
    expect(last?.authorizedEffects).not.toContain("github.pr.create");
    expect(last?.authorizedEffects).not.toContain("github.pr.merge");
  }, 90_000);

  it("H23B-N3 full vertical before VERIFIED PR: earlier slice runs; merge blocked", async () => {
    const ctx = await bootToConfirmedEc("h23b-n3");
    const mergeRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "github.pr.merge",
      repositoryRef: IDENTITY,
      branchOrRef: "main",
      prNumber: 1,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:h23b-n3:${ctx.contract.executionContractId}`.slice(
        0,
        128,
      ),
      actionRef: mergeRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:h23b-n3:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:h23b-n3",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.message);
    const last = ctx.fakeLaunch.calls.at(-1);
    expect(last?.authorizedEffects).toEqual(
      expect.arrayContaining(["filesystem.create", "filesystem.modify"]),
    );
    expect(last?.authorizedEffects).not.toContain("github.pr.merge");
  }, 90_000);

  it("H23B-P1 unique VERIFIED PR + exact merge Confirmation → merge authorized", async () => {
    const ctx = await bootToConfirmedEc("h23b-p1");
    ctx.gitState.currentBranch = "feature";
    ctx.gitState.branchHeads.set(
      "feature",
      "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    );
    ctx.gitState.prs.clear();
    ctx.gitState.prs.set(41, {
      number: 41,
      headSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      base: "main",
      state: "open",
      headBranch: "feature",
    });
    const repoRead = new FakeRepositoryReadPorts({ gitState: ctx.gitState });
    const v = await verifyPullRequestClaim({
      repositoryRead: repoRead,
      evidenceServices: ctx.oa.evidenceReviewServices,
      repositoryRef: IDENTITY,
      claimedPrNumber: 41,
      claimedHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      bindings: {
        projectId: ctx.projectId,
        cycleInstanceId: ctx.cycleInstanceId,
        executionContractId: ctx.contract.executionContractId,
      },
      actor: PILOTE,
      nowIso: NOW,
    });
    expect(v.ok).toBe(true);
    if (!v.ok) throw new Error(v.reason);

    const mergeRef = buildGitEffectActionRef({
      executionContractId: ctx.contract.executionContractId,
      effect: "github.pr.merge",
      repositoryRef: IDENTITY,
      branchOrRef: "main",
      prNumber: 41,
    });
    const cnf = await grantCnf({
      runtime: ctx.runtime,
      confirmationId: `cfm:h23b-p1:${ctx.contract.executionContractId}`.slice(
        0,
        128,
      ),
      actionRef: mergeRef,
      decisionRef: ctx.decisionId,
    });
    const started = await selectGate({
      runtime: ctx.runtime,
      attemptId: `xat:h23b-p1:${ctx.contract.executionContractId}`.slice(0, 128),
      executionContractId: ctx.contract.executionContractId,
      contractVersion: ctx.contract.version,
      grantId: "gd:h23b-p1",
      authorityEvidenceId: ctx.execAuthEvidenceId,
      confirmations: [cnf],
      verifiedEffects: [
        "filesystem.create",
        "filesystem.modify",
        "git.commit",
        "git.push",
        "github.pr.create",
      ],
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(started.error.message);
    const last = ctx.fakeLaunch.calls.at(-1);
    expect(last?.authorizedEffects).toContain("github.pr.merge");
  }, 90_000);
});
```
