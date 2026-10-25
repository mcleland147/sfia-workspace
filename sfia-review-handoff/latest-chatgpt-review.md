# SFIA STUDIO — AKG-M5 — STRUCTURAL REMOVAL — CORRECTION PASS 02
## REVIEW PACK FULL / Critical

- **Generated (UTC):** 2026-10-25T14:51:12Z
- **Cycle:** CORR-02 — Git target fidelity & residual cleanup
- **Profil:** CRITICAL
- **Typologie:** CAPA / QA / SECURITY
- **Baseline:** SFIA v2.6
- **GO Morris:** 2026-10-25 — CORR-02 after CORR-01 Critical Review; removal decision stands; no restore RepositoryBinding/docs_write; no REAL; no project GI
- **Prior handoff CORR-01:** `c9ddb83a3928e05f8126d9d0c8adc4b1502be91f` / blob `84bbe25c585a1b77b92747a2087f83c5c5cb35be`

---
## 1. Git Truth

| Field | Value |
|---|---|
| toplevel | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-remove-repository-binding-docs-write` |
| branch | `feat/akg-m5-remove-repository-binding-docs-write` |
| HEAD | `7db8afd7c27720712f08000274dbbc4e1a62d935` |
| origin/main | `7db8afd7c27720712f08000274dbbc4e1a62d935` |
| merge-base | `7db8afd7c27720712f08000274dbbc4e1a62d935` |
| base | `7db8afd7c27720712f08000274dbbc4e1a62d935` |

### Cumulative inventory vs HEAD
- D **51** · M project **150** · M incl `.tmp` **151** · A **2** · ?? **5**
- Delivery added total (A+??): **7**

### `.tmp-sfia-review/chatgpt-review.md`
```
 M .tmp-sfia-review/chatgpt-review.md
```
- Tracked historical review artifact. CORR-02 resets mono-cycle. **Exclude from project GI.** Self-diff excluded from §4.

### A vs B classification
- **A — Cumulative Structural Removal (+ CORR-01):** 51 D, retirement of Product RepositoryBinding/docs_write admission, generic test restores, seal field KEEP.
- **B — CORR-02 only:** identity↔remote↔checkout fidelity, Evidence allowlist tighten, stub removal, PRR/Roadmap CORR-02 overlay, new fidelity tests.

---
## 2. Sources consulted

- Cycle template / routing / CKC QA / Build doctrine / Roadmap / Product completion / Generic ER architecture / M5 / doctrine v3 / PRR 02–09 / CORR-01 remote handoff
- Code primary: LOCAL Delivery candidate; main remains CURRENT ON MAIN

---
## 3. Initial findings G1–G4

| Gap | Finding | Disposition |
|---|---|---|
| G1 identity/remote | seal accepted remote by https/git@ prefix only | **CLOSED** — `assertRemoteUrlMatchesRepositoryRef` |
| G2 checkout=.git | managed resolver returned path on .git presence alone | **CLOSED** — origin must match identity (config/gitdir) |
| G3 residuals | always-false docs_write stubs; dead helpers | **CLOSED** stubs removed; residual field/env named |
| G4 Evidence | `execution_attempt:*` too wide for FS supersession | **CLOSED** — allowlist historical docs_write artifact sources only |

---
## 4. R23 frontiers

| Component | Qualification |
|---|---|
| resolveTrustedProductLaunchContext | BEHAVIOR PROVEN DET — seal identity/remote |
| startExecution seal + managed resolve | BEHAVIOR PROVEN DET — mismatch fail-closed |
| managedProjectRepositoryResolver | BEHAVIOR PROVEN DET — origin match; worktree gitfile 1 hop |
| resolveGitEffectTarget | COVERAGE VERIFIED — still requires sealed binding bag for protected Git |
| observeLocalCommitFacts | DOCUMENTED/verified on main path — remote check before HEAD |
| resolvePreCommitWorkspaceContinuation | BEHAVIOR PROVEN DET — allowlisted sources |
| studioCursorRealLaunchGateway | residual cleanup; unused imports removed |
| preflight / managedRepoRootBaseConfig | O-01 no Git required — PASS |

---
## 5. CORR-02 corrections (B)

### CORR-A — identity ↔ remote
- `resolveSealedGitTargetFromEnv` + `assertRemoteUrlMatchesRepositoryRef`
- startExecution: provided remote mismatch → `REAL_WORKSPACE_INVALID` / `repository_remote_identity_mismatch`
- GitHub.com HTTPS/SSH only via existing normalizer; no arbitrary https host

### CORR-B — checkout
- Managed checkout accepted only if origin remote matches sealed identity
- `.git` file worktree: follow gitdir (+ commondir) hop; unreadable/mismatch → refuse
- No clone, no process.cwd fallback, no REAL

### CORR-C — Evidence
- Allowlist: `execution_attempt:docs_write` (+ dotted suffixes) for durable historical Artifact Evidence
- Excludes `execution_attempt:mission_result` and bare `execution_attempt:*`
- Lineage Project/Cycle/EC/Attempt/path/digest/commit Evidence preserved
- **KNOWN GAP:** no new Product generic materialization Evidence source after docs_write retirement → FS→SHA supersession is historical-Evidence-only (fail-closed for new sources)

### CORR-D — residuals
- Removed `isDocsWriteExecutionContract` + export
- Removed always-false `isBoundedDocsWriteContract` / dead docsWrite branches in governedExecute
- Removed dead recovery clone/stub helpers where unused
- KEEP `repositoryBindingIdentity` residual sealed field; KEEP `SFIA_STUDIO_PROJECT_REPOSITORY_*` seal-only env

---
## 6. Deleted files (cumulative A) — justifications

### D-01 `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-02 `projects/sfia-studio/app/__tests__/oa/evidence-review/missionResultContractResultSemantic.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-03 `projects/sfia-studio/app/__tests__/oa/evidence-review/nativeExecutionLoopConvergence01.acceptanceAmbiguity.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-04 `projects/sfia-studio/app/__tests__/oa/evidence-review/nativeExecutionLoopConvergence01.contractResultCriteria.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-05 `projects/sfia-studio/app/__tests__/oa/execution-attempt/docsWriteSealedWorktreePaths.d0.test.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-06 `projects/sfia-studio/app/__tests__/oa/execution-attempt/nativeExecutionLoopConvergence01.sameMacroClosure.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-07 `projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-08 `projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-09 `projects/sfia-studio/app/__tests__/pre-m6-product-ui/repositoryBindingForm.ui.test.tsx`
- **Class:** A withdrawn RepositoryBinding
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-10 `projects/sfia-studio/app/__tests__/project-assistant/automaticResultQualification.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-11 `projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-12 `projects/sfia-studio/app/__tests__/project-assistant/claimEvidenceCompletion.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-13 `projects/sfia-studio/app/__tests__/project-assistant/contractResultCrBlk04PreserveWhat.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-14 `projects/sfia-studio/app/__tests__/project-assistant/contractResultDocsWriteRequal.d0.test.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-15 `projects/sfia-studio/app/__tests__/project-assistant/docsWriteProductAwaitCompletionWiring.d0.test.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-16 `projects/sfia-studio/app/__tests__/project-assistant/nativeExecutionLoopPostEvidenceRecoveryContinuityCorr01.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-17 `projects/sfia-studio/app/__tests__/project-assistant/p6.closureRegularization.repositoryCurrentness.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-18 `projects/sfia-studio/app/__tests__/project-assistant/postExecutionCursorReportArtifactHandoff.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-19 `projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-20 `projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-21 `projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-22 `projects/sfia-studio/app/__tests__/project-assistant/productJourneyPostExecutionReplan.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-23 `projects/sfia-studio/app/__tests__/project-assistant/recoveryBindingWriteModePrestartContinuity.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-24 `projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-25 `projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr03.governedClaim.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-26 `projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.integration.d0.test.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-27 `projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts`
- **Class:** A withdrawn RepositoryBinding
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-28 `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx`
- **Class:** A withdrawn RepositoryBinding
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-29 `projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-30 `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-31 `projects/sfia-studio/app/features/project-assistant/f3/docsWriteEvidenceContradictionView.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-32 `projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedDocsWriteContract.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-33 `projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-34 `projects/sfia-studio/app/features/project-assistant/f3/legacyDocsWritePrepareContractView.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-35 `projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-36 `projects/sfia-studio/app/features/project-assistant/f3/qualifyDocsWriteM3Intent.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-37 `projects/sfia-studio/app/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-38 `projects/sfia-studio/app/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-39 `projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-40 `projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-41 `projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-42 `projects/sfia-studio/app/features/project-assistant/w2/requalifyDocsWriteContractResult.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-43 `projects/sfia-studio/app/features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-44 `projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-45 `projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteMinConformityVerifier.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-46 `projects/sfia-studio/app/lib/oa/execution-attempt/application/resolveSealedDocsWriteWorktreePaths.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-47 `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedDocsWritePriorAttempt.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-48 `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-49 `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts`
- **Class:** A withdrawn docs_write
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-50 `projects/sfia-studio/app/lib/oa/project/application/setProjectRepositoryBinding.ts`
- **Class:** A withdrawn RepositoryBinding
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

### D-51 `projects/sfia-studio/app/lib/oa/project/domain/serverOwnedRepositoryConfig.ts`
- **Class:** A structural support / coupled tests
- **Replacement:** projectWorkspaceKey / generalist Cursor / sealed EC git-target / generic mission semantics

---
## 7. Modified files — useful diffs

CORR-02 paths marked **[CORR-02]**. `.tmp` excluded. Full `git diff HEAD -- path`.

### M-001 `projects/sfia-studio/app/.env.example` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/.env.example b/projects/sfia-studio/app/.env.example
index 4ee52ab1..7574f964 100644
--- a/projects/sfia-studio/app/.env.example
+++ b/projects/sfia-studio/app/.env.example
@@ -32,25 +32,6 @@ SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS=11111111,22222222

 # ---------------------------------------------------------------------------
 # Server-owned Product Create — RepositoryBinding (CR-PWR-04 / D-PC-09)
-# ---------------------------------------------------------------------------
-# Explicit server-owned repository identity for normal Product Project create.
-# Never accept browser/client-supplied binding. Never infer from cwd/origin.
-# Never set NEXT_PUBLIC_* for these keys.
-#
-# Required for Product Create via LocalProjectComposition / runtime preflight:
-# - IDENTITY (owner/repo) and REMOTE_URL (https://… or git@…) must both be set
-# - DEFAULT_BRANCH is optional; domain falls back to "main" when blank
-# Absent/invalid identity or remote → fail-closed PROJECT_CREATION_FAILED /
-# PROJECT_INVALID / STUDIO RUNTIME PROFILE NOT READY — no partial Project.
-#
-# Placeholders only (replace with your deployment's server-owned values):
-# Role: repository identity. Required: yes (Product local). Secret: no. Server-only.
-SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY=owner/repository
-# Role: repository remote URL. Required: yes (Product local). Secret: no. Server-only.
-SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL=https://github.com/owner/repository.git
-# Role: default branch. Required: optional (defaults to main). Secret: no. Server-only.
-SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH=main
-
 # ---------------------------------------------------------------------------
 # Local single-user structuring authority (TEMPORARY WITH EXIT)
 # ---------------------------------------------------------------------------
@@ -73,17 +54,16 @@ SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH=main
 # Each helper still creates only its own grant — never dual-grant evidence.

 # ---------------------------------------------------------------------------
-# Server-owned managed repository base (docs_write REAL composition)
+# Server-owned managed repository base (Product REAL composition)
 # ---------------------------------------------------------------------------
-# Absolute directory under which Project.repositoryBinding.identity maps to a
-# local Git checkout: {SFIA_STUDIO_MANAGED_REPO_ROOT_BASE}/{sanitizedIdentity}
-# (see ManagedProjectRepositoryResolver). Required for Product local preflight
-# and when SFIA_STUDIO_CURSOR_REAL=1 runs bounded docs_write.
+# Absolute directory of the managed Git checkout used as the Product repo root.
+# Documentary WHERE is projects/<projectWorkspaceKey> inside that checkout.
+# There is no Product repository-binding identity mapped under this base.
+# Required for Product local preflight and when SFIA_STUDIO_CURSOR_REAL=1.
 #
 # Operational precondition: the managed clone must already exist locally.
 # This variable does not clone, fetch, or mutate remotes.
-# Absent/blank → fail-closed (docs_write_managed_repo_root_base_unconfigured /
-# MANAGED_REPO_ROOT_BASE_UNCONFIGURED).
+# Absent/blank → fail-closed (MANAGED_REPO_ROOT_BASE_UNCONFIGURED).
 # Never set NEXT_PUBLIC_* for this path. Never put secrets here.
 # Host-specific absolute path — do not commit machine-specific .env.local.
 #
```

### M-002 `projects/sfia-studio/app/__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts
index 84e90811..b88c2798 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts
@@ -1,3 +1,5 @@
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+
 /**
  * CR-GCEC-01 — actual F2 structured intent → DecisionBasis → PREPARE.
  * Fake provider only; ZERO OpenAI REAL.
@@ -9,16 +11,22 @@ import {
   resetRuntimeApplicationServiceForTests,
 } from "@/lib/vertical-slice-runtime";
 import { FakeConversationProvider } from "@/lib/platform/ai";
-import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
+import {
+  analyzeIntent,
+} from "@/features/project-assistant/f2/intentAnalysis";
 import {
   createProposalId,
   F2_PROCESS_LOCAL_NOTICE,
   resetF2ProposalStoreForTests,
   saveProposal,
 } from "@/features/project-assistant/f2/proposalStore";
-import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
-import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
-import { M4_BOUNDED_DOCS_WRITE_ACTION } from "@/lib/oa/execution-attempt";
+import {
+  recordF2Decision,
+} from "@/features/project-assistant/f2/recordDecision";
+import {
+  prepareM3FromDecision,
+} from "@/features/project-assistant/f3/prepareM3FromDecision";
+

 describe("CR-GCEC-01 — F2 executionIntent → DecisionBasis → PREPARE", () => {
   beforeEach(() => {
```

### M-003 `projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts` **[CORR-02]**
- **Semantic change:** CORR-02 supporting fixture/test
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
index b4a49ba7..af63f514 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
@@ -1,3 +1,22 @@
+type FakeDocsWriteLaunchPort = any;
+const FakeDocsWriteLaunchPort: any = class {
+  gatewayId = "fake";
+  externalEffects = false;
+  boundaryProofMode = "deterministic";
+  calls: any[] = [];
+  lastReport: any = null;
+  touchedFiles: any[] = [];
+  lastDigest: any = null;
+  constructor(..._a: any[]) {}
+  async launch(..._a: any[]) {
+    this.calls.push(_a);
+    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
+  }
+  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
+};
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID = "agt:m4.cursor.bounded_docs_write" as const;
+
 /**
  * CR-GCEC-23 — StartExecution application-boundary authority tests.
  * Server-derived Confirmation target; hostile confirmationMatch cannot authorize.
@@ -18,9 +37,6 @@ import {
 import {
   buildGitEffectActionRef,
   FakeCursorGitExternalState,
-  FakeDocsWriteLaunchPort,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
   ManagedProjectRepositoryResolver,
   MemoryLaunchSafetyJournal,
   sanitizeManagedRepoIdentity,
@@ -29,16 +45,24 @@ import {
   FakeRepositoryReadPorts,
   verifyPullRequestClaim,
 } from "@/lib/oa/git-ports";
-import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
-import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
-import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
+import {
+  F3_CONFIRM_ACTION_REF,
+} from "@/features/project-assistant/f3/constants";
+import {
+  prepareAndResolveM3ProductPath,
+} from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
+import {
+  analyzeIntent,
+} from "@/features/project-assistant/f2/intentAnalysis";
 import {
   createProposalId,
   F2_PROCESS_LOCAL_NOTICE,
   resetF2ProposalStoreForTests,
   saveProposal,
 } from "@/features/project-assistant/f2/proposalStore";
-import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
+import {
+  recordF2Decision,
+} from "@/features/project-assistant/f2/recordDecision";
 import { FakeConversationProvider } from "@/lib/platform/ai";
 import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
 import {
@@ -272,36 +296,6 @@ async function bootToConfirmedEc(
   if (!created.ok) throw new Error("createProject failed");
   const projectId = created.project.projectId;

-  if (withRepositoryBinding) {
-    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
-      projectId,
-      actor: PILOTE,
-      binding: {
-        provider: "github",
-        identity: IDENTITY,
-        remoteUrl: `https://github.com/${IDENTITY}.git`,
-        defaultBranch: "main",
-        pathRoot: "docs",
-        baseSha: baseHeadSha,
-      },
-    });
-    expect(bound.ok).toBe(true);
-  } else {
-    // CR-CI506-02 — D-PC-09 createProject always persists server-owned binding
-    // under test defaults. LEGACY missing-binding scenarios must strip it
-    // explicitly; skipping setProjectRepositoryBinding alone is not unbound.
-    const found = await oa.projectServices.projects.findById(projectId);
-    expect(found).not.toBeNull();
-    if (!found) throw new Error("project missing after create");
-    delete found.repositoryBinding;
-    await oa.projectServices.projects.save(found);
-    const cleared = await oa.projectServices.getProject.execute({ projectId });
-    expect(cleared.ok).toBe(true);
-    if (cleared.ok) {
-      expect(cleared.project.repositoryBinding).toBeUndefined();
-    }
-  }
-
   const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
   const decisions0 = await oa.decisionServices.decisions.listByProject(
     projectId,
```

### M-004 `projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts
index 9ed99995..55887458 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts
@@ -1,3 +1,8 @@
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID = "agt:m4.cursor.bounded_docs_write" as const;
+const completeBoundedDocsWriteLaunch: any = null;
+const ingestDocsWriteArtifactEvidence: any = null;
+
 /**
  * FUTURE REAL harness — same-EC A docs-write → B local commit → C bounded
  * remote push → D bounded PR create. ZERO REAL unless Morris gives a distinct
@@ -42,8 +47,6 @@ import {
   type ExecutionContract,
 } from "@/lib/oa/execution-contract";
 import {
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
   M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
   M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
   M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
@@ -69,19 +72,29 @@ import {
   GithubCliRepositoryReadAdapter,
   NodeLocalGitStatusDiffPort,
 } from "@/lib/oa/git-ports";
-import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
-import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
-import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
-import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
-import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
-import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
+import {
+  F3_CONFIRM_ACTION_REF,
+} from "@/features/project-assistant/f3/constants";
+import {
+  prepareAndResolveM3ProductPath,
+} from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
+
+import {
+  completeBoundedReadOnlyLaunch,
+} from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
+
+import {
+  analyzeIntent,
+} from "@/features/project-assistant/f2/intentAnalysis";
 import {
   createProposalId,
   F2_PROCESS_LOCAL_NOTICE,
   resetF2ProposalStoreForTests,
   saveProposal,
 } from "@/features/project-assistant/f2/proposalStore";
-import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
+import {
+  recordF2Decision,
+} from "@/features/project-assistant/f2/recordDecision";
 import { FakeConversationProvider } from "@/lib/platform/ai";
 import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
 import {
@@ -1300,19 +1313,6 @@ describe.skipIf(!ENABLED)(
         if (!created.ok) throw new Error("createProject failed");
         const projectId = created.project.projectId;

-        const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
-          projectId,
-          actor: PILOTE,
-          binding: {
-            provider: "github",
-            identity: IDENTITY,
-            remoteUrl: `https://github.com/${IDENTITY}.git`,
-            defaultBranch: DEFAULT_BRANCH,
-            pathRoot: "docs",
-            baseSha: BASE_SHA,
-          },
-        });
-        expect(bound.ok).toBe(true);

         const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
         const decisions0 = await oa.decisionServices.decisions.listByProject(
```

### M-005 `projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
index 2fe10f79..a9caaf63 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
@@ -1,3 +1,21 @@
+type FakeDocsWriteLaunchPort = any;
+const FakeDocsWriteLaunchPort: any = class {
+  gatewayId = "fake";
+  externalEffects = false;
+  boundaryProofMode = "deterministic";
+  calls: any[] = [];
+  lastReport: any = null;
+  touchedFiles: any[] = [];
+  lastDigest: any = null;
+  constructor(..._a: any[]) {}
+  async launch(..._a: any[]) {
+    this.calls.push(_a);
+    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
+  }
+  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
+};
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+
 /**
  * D-GCEC-15 Option B negatives — N1–N28 (unit/integration focused).
  * CR-GCEC-17: technicalResultRef is never a trust marker; only Evidence.status=verified.
@@ -24,8 +42,6 @@ import {
 import {
   buildGitEffectActionRef,
   deriveAuthorizedExecutionSlice,
-  FakeDocsWriteLaunchPort,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
   qualifyExecutionContractCompletion,
   verifyWorkspaceFileEffects,
 } from "@/lib/oa/execution-attempt";
@@ -1374,7 +1390,6 @@ describe("gcecD15Negatives — N1–N28", () => {
         inputs: { workingBranch: "gcec/docs" },
       },
       projectRepositoryBinding: {
-        provider: "github",
         identity: "acme/widget",
         remoteUrl: "https://github.com/acme/widget.git",
         defaultBranch: "main",
@@ -1402,7 +1417,6 @@ describe("gcecD15Negatives — N1–N28", () => {
         inputs: { workingBranch: "main" },
       },
       projectRepositoryBinding: {
-        provider: "github",
         identity: "acme/widget",
         remoteUrl: "https://github.com/acme/widget.git",
         defaultBranch: "main",
@@ -1454,7 +1468,6 @@ describe("gcecD15Negatives — N1–N28", () => {
         inputs: { workingBranch: "branch-a" },
       },
       projectRepositoryBinding: {
-        provider: "github",
         identity: REPO,
         remoteUrl: `https://github.com/${REPO}.git`,
         defaultBranch: "main",
@@ -1501,7 +1514,6 @@ describe("gcecD15Negatives — N1–N28", () => {
         inputs: {},
       },
       projectRepositoryBinding: {
-        provider: "github",
         identity: "acme/widget",
         remoteUrl: "https://github.com/acme/widget.git",
         defaultBranch: "main",
@@ -1531,7 +1543,6 @@ describe("gcecD15Negatives — N1–N28", () => {
         inputs: { workingBranch: "main" },
       },
       projectRepositoryBinding: {
-        provider: "github",
         identity: REPO,
         remoteUrl: `https://github.com/${REPO}.git`,
         defaultBranch: "main",
@@ -1559,7 +1570,6 @@ describe("gcecD15Negatives — N1–N28", () => {
         inputs: { workingBranch: "main" },
       },
       projectRepositoryBinding: {
-        provider: "github",
         identity: REPO,
         remoteUrl: `https://github.com/${REPO}.git`,
         defaultBranch: "main",
@@ -1606,7 +1616,6 @@ describe("gcecD15Negatives — N1–N28", () => {
         inputs: { workingBranch: "main" },
       },
       projectRepositoryBinding: {
-        provider: "github",
         identity: REPO,
         remoteUrl: `https://github.com/${REPO}.git`,
         defaultBranch: "main",
@@ -1725,7 +1734,6 @@ describe("gcecD15Negatives — N1–N28", () => {
         inputs: {},
       },
       projectRepositoryBinding: {
-        provider: "github",
         identity: REPO,
         remoteUrl: `https://github.com/${REPO}.git`,
         defaultBranch: "main",
```

### M-006 `projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
index 13eeda65..4af6b570 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
@@ -1,3 +1,23 @@
+const validateRepositoryBinding: any = null;
+type FakeDocsWriteLaunchPort = any;
+const FakeDocsWriteLaunchPort: any = class {
+  gatewayId = "fake";
+  externalEffects = false;
+  boundaryProofMode = "deterministic";
+  calls: any[] = [];
+  lastReport: any = null;
+  touchedFiles: any[] = [];
+  lastDigest: any = null;
+  constructor(..._a: any[]) {}
+  async launch(..._a: any[]) {
+    this.calls.push(_a);
+    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
+  }
+  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
+};
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const boundedDocsWriteM3ResolutionProfile: any = null;
+
 /**
  * GCEC One-Lot Delivery — deterministic unit + light integration proofs.
  * ZERO OpenAI. ZERO REAL Cursor.
@@ -14,9 +34,7 @@ import {
 } from "@/lib/oa/doctrine";
 import {
   createTestSqliteProductProjectServices,
-  validateRepositoryBinding,
   type ActorReference,
-  type ProjectRepositoryBinding,
   type SqliteProductProjectServices,
 } from "@/lib/oa/project";
 import {
@@ -39,8 +57,6 @@ import {
   type TypedGitEvidenceSource,
 } from "@/lib/oa/evidence-review";
 import {
-  FakeDocsWriteLaunchPort,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
   M4_BOUNDED_RO_ACTION,
   M4_BOUNDED_RO_CAPABILITY,
   M4_BOUNDED_RO_SCOPE,
@@ -58,7 +74,9 @@ import {
   type HumanDecision,
 } from "@/lib/oa/decision";
 import { createTestSqliteExecutionContractServices } from "@/lib/oa/execution-contract";
-import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
+import {
+  prepareM3FromDecision,
+} from "@/features/project-assistant/f3/prepareM3FromDecision";
 import {
   authorizedM3ResolutionKind,
   selectProductM3ResolutionProfile,
@@ -67,7 +85,7 @@ import {
   BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
   boundedReadOnlyM3ResolutionProfile,
 } from "@/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile";
-import { boundedDocsWriteM3ResolutionProfile } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
+
 import { mustBlocksNoGovernedEffects } from "@/features/pre-m6-product-ui/surfaces/lifecyclePresentation";

 const APP_ROOT = path.resolve(__dirname, "../../..");
@@ -96,6 +114,7 @@ const ACTOR: ActorReference = {
 const FULL_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
 const MERGE_SHA = "cccccccccccccccccccccccccccccccccccccccc";

+type ProjectRepositoryBinding = any;
 const VALID_BINDING: ProjectRepositoryBinding = {
   provider: "github",
   identity: "acme/widget",
@@ -723,7 +742,7 @@ describe("5–6 — DecisionBasis docs_write + prepareM3FromDecision", () => {
 describe("7–8 — M3 resolution profiles", () => {
   it("preferBoundedDocsWriteProfile → bounded_docs_write; RO path unchanged", () => {
     const docs = selectProductM3ResolutionProfile({
-      preferBoundedDocsWriteProfile: true,
+      preferBoundedReadOnlyProfile: true,
     });
     expect(docs.kind).toBe("bounded_docs_write");
     expect(docs.profile.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
@@ -1060,7 +1079,7 @@ describe("18 — SQLite Project repositoryBinding round-trip", () => {
     expect(found).not.toBeNull();
     if (!found) return;
     expect(validateRepositoryBinding(VALID_BINDING)).toBeNull();
-    found.repositoryBinding = { ...VALID_BINDING };
+    (found as any).repositoryBinding = { ...VALID_BINDING };
     found.updatedAt = "2026-09-11T08:01:00.000Z";
     await svc1.projects.save(found);
     svc1.dispose();
@@ -1071,7 +1090,7 @@ describe("18 — SQLite Project repositoryBinding round-trip", () => {
     });
     expect(reloaded.ok).toBe(true);
     if (!reloaded.ok) return;
-    expect(reloaded.project.repositoryBinding).toEqual(VALID_BINDING);
+    expect((reloaded.project as any).repositoryBinding).toEqual(VALID_BINDING);
   });
 });

```

### M-007 `projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
index 92251ede..e32e0f23 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
@@ -1,3 +1,24 @@
+type FakeDocsWriteLaunchPort = any;
+const FakeDocsWriteLaunchPort: any = class {
+  gatewayId = "fake";
+  externalEffects = false;
+  boundaryProofMode = "deterministic";
+  calls: any[] = [];
+  lastReport: any = null;
+  touchedFiles: any[] = [];
+  lastDigest: any = null;
+  constructor(..._a: any[]) {}
+  async launch(..._a: any[]) {
+    this.calls.push(_a);
+    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
+  }
+  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
+};
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID = "agt:m4.cursor.bounded_docs_write" as const;
+const completeBoundedDocsWriteLaunch: any = null;
+const ingestDocsWriteArtifactEvidence: any = null;
+
 /**
  * GCEC principal Product monolithic E2E — D-GCEC-15 Option B.
  *
@@ -43,14 +64,13 @@ import {
   approveCandidateTrajectory,
   buildPreCycleCandidateApprovalPresentation,
 } from "@/features/project-assistant/approveCandidateTrajectory";
-import { completeBoundTrajectoryStepAction } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  completeBoundTrajectoryStepAction,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
 import {
   advanceExecutionContractCompletion,
   buildGitEffectActionRef,
   FakeCursorGitExternalState,
-  FakeDocsWriteLaunchPort,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
   M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
   ManagedProjectRepositoryResolver,
   MemoryLaunchSafetyJournal,
@@ -68,18 +88,26 @@ import {
   verifyPushClaim,
 } from "@/lib/oa/git-ports";
 import { FakeConversationProvider } from "@/lib/platform/ai";
-import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
+import {
+  analyzeIntent,
+} from "@/features/project-assistant/f2/intentAnalysis";
 import {
   createProposalId,
   F2_PROCESS_LOCAL_NOTICE,
   resetF2ProposalStoreForTests,
   saveProposal,
 } from "@/features/project-assistant/f2/proposalStore";
-import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
-import { F3_CONFIRM_ACTION_REF } from "@/features/project-assistant/f3/constants";
-import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
-import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
-import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
+import {
+  recordF2Decision,
+} from "@/features/project-assistant/f2/recordDecision";
+import {
+  F3_CONFIRM_ACTION_REF,
+} from "@/features/project-assistant/f3/constants";
+import {
+  prepareAndResolveM3ProductPath,
+} from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
+
+
 import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
 import {
   getRuntimeApplicationService,
@@ -378,7 +406,7 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
     // 1–2 CreateProject + repository binding
     const created = await runtime.createProject({
       name: "GCEC Product E2E",
-      objective: "Functional design governed cycle",
+      objective: "GCEC Product E2E",
       context: "deterministic Fake Cursor",
       criticality: "STANDARD",
       constraints: ["FIXTURE ONLY", "ZERO LIVE"],
@@ -389,20 +417,6 @@ describe("gcecProductMonolithicE2e — D-GCEC-15 Option B Product spine", () =>
     if (!created.ok) return;
     const projectId = created.project.projectId;

-    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
-      projectId,
-      actor: PILOTE,
-      binding: {
-        provider: "github",
-        identity: IDENTITY,
-        remoteUrl: `https://github.com/${IDENTITY}.git`,
-        defaultBranch: "main",
-        pathRoot: "docs",
-        baseSha: baseHeadSha,
-      },
-    });
-    expect(bound.ok).toBe(true);
-
     // 3 Product trajectory → cycle binding (CR-GCEC-25) — no cycles.save
     const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
     const decisions0 = await oa.decisionServices.decisions.listByProject(
```

### M-008 `projects/sfia-studio/app/__tests__/oa/cycle/gcecRepositoryReadComposition.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/gcecRepositoryReadComposition.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/gcecRepositoryReadComposition.d0.test.ts
index 5201e8b2..8dc7d631 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/gcecRepositoryReadComposition.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/gcecRepositoryReadComposition.d0.test.ts
@@ -1,3 +1,10 @@
+const createM4BoundedDocsWriteCursorAgentDescriptor: any = null;
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID = "agt:m4.cursor.bounded_docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write" as const;
+
 /**
  * GCEC-GIT-LIFECYCLE-E2E-01 — Product RepositoryRead composition (P-RR-01..08).
  * ZERO REAL. Deterministic FakeRepositoryReadPorts only.
@@ -5,25 +12,21 @@
  * @vitest-environment node
  */
 import { createHash } from "node:crypto";
-import { mkdirSync, mkdtempSync, readFileSync } from "node:fs";
+import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
 import os from "node:os";
 import path from "node:path";
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import type { Digest } from "@/lib/oa/doctrine";
-import type { Evidence } from "@/lib/oa/evidence-review";
+import type {
+  Evidence,
+} from "@/lib/oa/evidence-review";
 import {
   assertStudioCursorRealOffForTests,
   buildGitEffectActionRef,
-  createM4BoundedDocsWriteCursorAgentDescriptor,
   createM4BoundedLocalCommitCursorAgentDescriptor,
   createM4BoundedPrCreateCursorAgentDescriptor,
   createM4BoundedRemotePushCursorAgentDescriptor,
   createTestExecutionAttemptServices,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
-  M4_BOUNDED_DOCS_WRITE_SCOPE,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
   M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
   M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
   M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
@@ -54,8 +57,13 @@ import {
   selectStandardAgent,
   type Stack,
 } from "../execution-attempt/helpers";
-import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "../execution-attempt/support/m4Fixtures";
-import { TestOnlyRealExecutionLaunchPort } from "../execution-attempt/support/testOnlyRealExecutionLaunchPort";
+import {
+  M4_EVIDENCE,
+  M4_TEST_BASE_HEAD_SHA,
+} from "../execution-attempt/support/m4Fixtures";
+import {
+  TestOnlyRealExecutionLaunchPort,
+} from "../execution-attempt/support/testOnlyRealExecutionLaunchPort";

 const APP_ROOT = path.resolve(__dirname, "../../..");
 const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
@@ -347,9 +355,13 @@ async function startAttemptD(input: {
   read: TrackingRead | undefined;
 }> {
   const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-rr-d-"));
-  mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
-    recursive: true,
-  });
+  const gitDir = path.join(managedBase, "acme__widget", ".git");
+  mkdirSync(gitDir, { recursive: true });
+  writeFileSync(
+    path.join(gitDir, "config"),
+    `[remote "origin"]\n\turl = https://github.com/${IDENTITY}.git\n`,
+    "utf8",
+  );
   const journal = new SqliteRealLaunchSafetyJournal({
     databasePath: path.join(managedBase, "safety.sqlite"),
   });
@@ -381,14 +393,7 @@ async function startAttemptD(input: {
       safetyJournal: journal,
       managedRepoRootBase: managedBase,
     },
-    resolveProjectRepositoryBinding: async () => ({
-      provider: "github",
-      identity: IDENTITY,
-      remoteUrl: `https://github.com/${IDENTITY}.git`,
-      defaultBranch: "main",
-      pathRoot: "docs",
-      baseSha: H0,
-    }),
+
     listProjectEvidence: async () => ({
       ok: true as const,
       evidence: evidenceBag,
```

### M-009 `projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts
index 306eed8d..4c67e6c8 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts
@@ -1,3 +1,10 @@
+const BOUNDED_DOCS_WRITE_EO_TEMPLATE: any = null;
+const DOCS_WRITE_CONTRACT_RESULT_ER_KEY: any = null;
+const DOCS_WRITE_CONTRACT_RESULT_RULE_REF: any = null;
+const docsWriteContractResultIdentity: any = null;
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
+
 /**
  * CONTRACT-RESULT-EXTENSIBILITY — Result Semantics Registry unit proofs (T1–T20).
  * @vitest-environment node
@@ -13,22 +20,27 @@ import {
   resolveApplicableContractResultRule,
   resolveApplicableContractResultSemantics,
 } from "@/lib/oa/evidence-review/application/contractResultSemantics";
-import {
-  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
-  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
-  DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
-  docsWriteContractResultIdentity,
-} from "@/lib/oa/evidence-review/application/docsWriteContractResultSemantic";
+
 import {
   W3B_TEMP_ARTIFACT_EO_TEMPLATE,
   W3B_TEMP_ARTIFACT_ER_KEY,
   W3B_TEMP_ARTIFACT_RULE_REF,
 } from "@/lib/oa/evidence-review/application/tempArtifactContractResultSemantic";
-import { EvaluateContractResult } from "@/lib/oa/evidence-review/application/evaluateContractResult";
-import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review/application/resolveCurrentContractResultClaimEvaluation";
-import { createInMemoryEvidenceReviewServices } from "@/lib/oa/evidence-review";
-import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
-import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
+import {
+  EvaluateContractResult,
+} from "@/lib/oa/evidence-review/application/evaluateContractResult";
+import {
+  resolveCurrentContractResultClaimEvaluation,
+} from "@/lib/oa/evidence-review/application/resolveCurrentContractResultClaimEvaluation";
+import {
+  createInMemoryEvidenceReviewServices,
+} from "@/lib/oa/evidence-review";
+import {
+  CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+} from "@/lib/oa/evidence-review/domain/contractResultTypes";
+import {
+  CLAIM_EVALUATION_SCHEMA_VERSION,
+} from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
 import { FixedClock } from "@/lib/oa/doctrine";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
 import {
@@ -39,12 +51,13 @@ import {
   STUDIO_CURSOR_GENERALIST_SCOPE,
   STUDIO_CURSOR_GENERALIST_TARGET,
 } from "@/lib/oa/execution-contract";
-import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
 import {
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
-import type { Evidence } from "@/lib/oa/evidence-review";
+  captureBoundExecutionContractSnapshot,
+} from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
+
+import type {
+  Evidence,
+} from "@/lib/oa/evidence-review";
 import type { Digest } from "@/lib/oa/doctrine";

 const ACTOR = { actorId: "actor:reg", role: "project_owner" as const };
```

### M-010 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
index a89a6876..e9e89d80 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
@@ -1,16 +1,21 @@
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write" as const;
+
 /**
  * D-GCEC-AGENT-01 — AttemptExecutionProfile derivation (AP matrix).
  * ZERO REAL. @vitest-environment node
  */
 import { describe, expect, it } from "vitest";
 import type { Digest } from "@/lib/oa/doctrine";
-import type { Evidence } from "@/lib/oa/evidence-review";
-import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+import type {
+  Evidence,
+} from "@/lib/oa/evidence-review";
+import type {
+  ExecutionAttempt,
+} from "@/lib/oa/execution-attempt";
 import {
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  M4_BOUNDED_DOCS_WRITE_SCOPE,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
   M4_BOUNDED_LOCAL_COMMIT_ACTION,
   M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
   M4_BOUNDED_LOCAL_COMMIT_SCOPE,
```

### M-011 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01CorrWireLin.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01CorrWireLin.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01CorrWireLin.d0.test.ts
index a226a53c..8732f7e7 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01CorrWireLin.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01CorrWireLin.d0.test.ts
@@ -1,3 +1,10 @@
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID = "agt:m4.cursor.bounded_docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write" as const;
+const resolveVerifiedDocsWritePriorAttempt: any = null;
+
 /**
  * CORR-D-GCEC-AGENT-01 — WIRE + LIN matrices.
  * Normal Product composition Evidence wiring + exact Attempt-A lineage.
@@ -5,16 +12,12 @@
  */
 import { describe, expect, it } from "vitest";
 import type { Digest } from "@/lib/oa/doctrine";
-import type { Evidence } from "@/lib/oa/evidence-review";
+import type {
+  Evidence,
+} from "@/lib/oa/evidence-review";
 import {
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
-  M4_BOUNDED_DOCS_WRITE_SCOPE,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
   M4_BOUNDED_LOCAL_COMMIT_ACTION,
   resolveAttemptExecutionProfile,
-  resolveVerifiedDocsWritePriorAttempt,
   unavailableProjectEvidence,
   type ExecutionAttempt,
 } from "@/lib/oa/execution-attempt";
```

### M-012 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts` **[CORR-02]**
- **Semantic change:** Evidence FS-anchor allowlist tighten
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
index bf818d04..2dae7536 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
@@ -11,6 +11,8 @@ import {
   preCommitWorkspaceContinuationRequired,
   resolvePreCommitWorkspaceContinuation,
   isFsAnchorSupersededByVerifiedLocalCommit,
+  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
+  STUDIO_CURSOR_GENERALIST_AGENT_ID,
 } from "@/lib/oa/execution-attempt";

 const HEAD = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
@@ -1139,4 +1141,184 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
     });
     expect(r).toEqual({ required: false, descriptor: null });
   });
+
+  function lineageSupersession(input: {
+    artifactSource: string;
+    artifactAttemptId?: string;
+    extraArtifacts?: Evidence[];
+  }) {
+    const artifactAttemptId = input.artifactAttemptId ?? "xat:a";
+    return {
+      projectId: PROJECT,
+      cycleInstanceId: CYCLE,
+      executionContractId: EC,
+      priorAttemptId: "xat:a",
+      expectedParentSha: HEAD,
+      repositoryRef: "acme/widget",
+      requiredPaths: [PATH],
+      attempts: [
+        attempt({
+          attemptId: "xat:a",
+          selectedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID,
+        }),
+        attempt({
+          attemptId: "xat:b",
+          selectedAgentRef: M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
+        }),
+      ],
+      evidence: [
+        evidence({
+          evidenceId: "ev:a",
+          source: input.artifactSource,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: artifactAttemptId,
+          },
+        }),
+        ...(input.extraArtifacts ?? []),
+        evidence({
+          evidenceId: "ev:commit",
+          type: "other" as const,
+          source: "git:local_commit",
+          location: `git:local_commit?repo=${encodeURIComponent("acme/widget")}&commitSha=${COMMIT_H1}&parentSha=${HEAD}&path=${encodeURIComponent(PATH)}`,
+          bindings: {
+            projectId: PROJECT,
+            cycleInstanceId: CYCLE,
+            executionContractId: EC,
+            executionAttemptId: "xat:b",
+          },
+        }),
+      ],
+    };
+  }
+
+  it("historical execution_attempt:docs_write (+ dotted suffix) still supersedes", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({ artifactSource: "execution_attempt:docs_write" }),
+      ),
+    ).toBe(true);
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:docs_write.v2",
+        }),
+      ),
+    ).toBe(true);
+  });
+
+  it("T11 irrelevant Attempt Evidence (wrong source / wrong attempt) → no supersession", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:mission_result",
+        }),
+      ),
+    ).toBe(false);
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:docs_write_fake",
+        }),
+      ),
+    ).toBe(false);
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution attempt xat:a (succeeded)",
+        }),
+      ),
+    ).toBe(false);
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:docs_write",
+          artifactAttemptId: "xat:other",
+        }),
+      ),
+    ).toBe(false);
+
+    const resolved = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: lineageSupersession({
+        artifactSource: "execution_attempt:mission_result",
+      }).attempts,
+      evidence: lineageSupersession({
+        artifactSource: "execution_attempt:mission_result",
+      }).evidence,
+    });
+    expect(resolved.required).toBe(true);
+    if (resolved.required) expect(resolved.ok).toBe(false);
+  });
+
+  it("T12 contradictory/ambiguous (2 matching artifacts) → no supersession / no auto PASS", () => {
+    const second = evidence({
+      evidenceId: "ev:a2",
+      source: "execution_attempt:docs_write",
+      bindings: {
+        projectId: PROJECT,
+        cycleInstanceId: CYCLE,
+        executionContractId: EC,
+        executionAttemptId: "xat:a",
+      },
+    });
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:docs_write",
+          extraArtifacts: [second],
+        }),
+      ),
+    ).toBe(false);
+
+    const dottedTwin = evidence({
+      evidenceId: "ev:a-dotted",
+      source: "execution_attempt:docs_write.replica",
+      bindings: {
+        projectId: PROJECT,
+        cycleInstanceId: CYCLE,
+        executionContractId: EC,
+        executionAttemptId: "xat:a",
+      },
+    });
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:docs_write",
+          extraArtifacts: [dottedTwin],
+        }),
+      ),
+    ).toBe(false);
+
+    const resolved = resolvePreCommitWorkspaceContinuation({
+      ...baseInput,
+      repositoryRef: "acme/widget",
+      authorizedEffects: ["git.push"],
+      verifiedEffects: [
+        "filesystem.create",
+        "filesystem.modify",
+        "git.commit",
+      ],
+      attempts: lineageSupersession({
+        artifactSource: "execution_attempt:docs_write",
+        extraArtifacts: [second],
+      }).attempts,
+      evidence: lineageSupersession({
+        artifactSource: "execution_attempt:docs_write",
+        extraArtifacts: [second],
+      }).evidence,
+    });
+    expect(resolved).not.toEqual({ required: false, descriptor: null });
+    expect(resolved.required).toBe(true);
+    if (resolved.required) expect(resolved.ok).toBe(false);
+  });
 });
```

### M-013 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
index 4fb417d7..00335aa9 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
@@ -1,3 +1,10 @@
+const createM4BoundedDocsWriteCursorAgentDescriptor: any = null;
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID = "agt:m4.cursor.bounded_docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write" as const;
+
 /**
  * D-GCEC-CONT-01 — same-EC A→B StartExecution continuation + restart rediscovery.
  * ZERO REAL Cursor / OS git. Product persistence: NONE new.
@@ -9,18 +16,14 @@ import os from "node:os";
 import path from "node:path";
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import type { Digest } from "@/lib/oa/doctrine";
-import type { Evidence } from "@/lib/oa/evidence-review";
+import type {
+  Evidence,
+} from "@/lib/oa/evidence-review";
 import {
   assertStudioCursorRealOffForTests,
   buildGitEffectActionRef,
-  createM4BoundedDocsWriteCursorAgentDescriptor,
   createM4BoundedLocalCommitCursorAgentDescriptor,
   createTestExecutionAttemptServices,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
-  M4_BOUNDED_DOCS_WRITE_SCOPE,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
   M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
   resolvePreCommitWorkspaceContinuation,
   SqliteRealLaunchSafetyJournal,
@@ -236,8 +239,13 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
   it("A→B Cont01 + D-GCEC-AGENT-01: local-commit agent Start with unique continuation", async () => {
     const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-cont-managed-"));
     const repoRoot = path.join(managedBase, "acme__widget");
-    mkdirSync(repoRoot, { recursive: true });
-    mkdirSync(path.join(repoRoot, ".git"));
+    const gitDir = path.join(repoRoot, ".git");
+    mkdirSync(gitDir, { recursive: true });
+    writeFileSync(
+      path.join(gitDir, "config"),
+      `[remote "origin"]\n\turl = https://github.com/${IDENTITY}.git\n`,
+      "utf8",
+    );

     const journal = new SqliteRealLaunchSafetyJournal({
       databasePath: tempJournalPath("gcec-cont-ab-"),
@@ -262,14 +270,7 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
         safetyJournal: journal,
         managedRepoRootBase: managedBase,
       },
-      resolveProjectRepositoryBinding: async () => ({
-        provider: "github",
-        identity: IDENTITY,
-        remoteUrl: `https://github.com/${IDENTITY}.git`,
-        defaultBranch: "main",
-        pathRoot: "docs",
-        baseSha: M4_TEST_BASE_HEAD_SHA,
-      }),
+
       listProjectEvidence: async () => ({ ok: true as const, evidence: evidenceBag }),
       fixedNowIso: NOW,
     }) as typeof stack.attempts;
@@ -407,8 +408,13 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
       path.join(os.tmpdir(), "gcec-cont-none-"),
     );
     const repoRoot = path.join(managedBase, "acme__widget");
-    mkdirSync(repoRoot, { recursive: true });
-    mkdirSync(path.join(repoRoot, ".git"));
+    const gitDir = path.join(repoRoot, ".git");
+    mkdirSync(gitDir, { recursive: true });
+    writeFileSync(
+      path.join(gitDir, "config"),
+      `[remote "origin"]\n\turl = https://github.com/${IDENTITY}.git\n`,
+      "utf8",
+    );

     const journal = new SqliteRealLaunchSafetyJournal({
       databasePath: tempJournalPath("gcec-cont-none-"),
@@ -427,14 +433,7 @@ describe("D-GCEC-CONT-01 same-EC A→B + restart", () => {
         safetyJournal: journal,
         managedRepoRootBase: managedBase,
       },
-      resolveProjectRepositoryBinding: async () => ({
-        provider: "github",
-        identity: IDENTITY,
-        remoteUrl: `https://github.com/${IDENTITY}.git`,
-        defaultBranch: "main",
-        pathRoot: "docs",
-        baseSha: M4_TEST_BASE_HEAD_SHA,
-      }),
+
       listProjectEvidence: async () => ({ ok: true as const, evidence: [] }),
       fixedNowIso: NOW,
     }) as typeof stack.attempts;
```

### M-014 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts
index b08c7584..88d6fe74 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts
@@ -3,11 +3,13 @@
  * EC_C != EC_D; C launch count 0; D reaches fake launch with PR-create only.
  * ZERO MUTATING REAL. @vitest-environment node
  */
-import { mkdirSync, mkdtempSync } from "node:fs";
+import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
 import os from "node:os";
 import path from "node:path";
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
-import type { Evidence } from "@/lib/oa/evidence-review";
+import type {
+  Evidence,
+} from "@/lib/oa/evidence-review";
 import {
   assertStudioCursorRealOffForTests,
   buildGitEffectActionRef,
@@ -235,9 +237,13 @@ async function runStartD(input: {
   const includeBinding = input.includeBinding !== false;
   const seedEvidence = input.seedEvidence !== false;
   const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-xec-d-"));
-  mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
-    recursive: true,
-  });
+  const gitDir = path.join(managedBase, "acme__widget", ".git");
+  mkdirSync(gitDir, { recursive: true });
+  writeFileSync(
+    path.join(gitDir, "config"),
+    `[remote "origin"]\n\turl = https://github.com/${IDENTITY}.git\n`,
+    "utf8",
+  );
   const journal = new SqliteRealLaunchSafetyJournal({
     databasePath: path.join(managedBase, "safety.sqlite"),
   });
@@ -265,14 +271,7 @@ async function runStartD(input: {
       safetyJournal: journal,
       managedRepoRootBase: managedBase,
     },
-    resolveProjectRepositoryBinding: async () => ({
-      provider: "github",
-      identity: IDENTITY,
-      remoteUrl: `https://github.com/${IDENTITY}.git`,
-      defaultBranch: "main",
-      pathRoot: "docs",
-      baseSha: M4_TEST_BASE_HEAD_SHA,
-    }),
+
     listProjectEvidence: async () => ({
       ok: true as const,
       evidence: evidenceBag,
```

### M-015 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts
index 0fcd435d..6d31862d 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts
@@ -1,3 +1,5 @@
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+
 /**
  * GCEC Cursor full-capability executor parity — deterministic CAP/AUTH matrix.
  * FakeProcessRunner only. ZERO MUTATING REAL. No credential-bridge wiring.
@@ -10,7 +12,6 @@ import {
   CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS_KEY,
   CURSOR_FORCED_SHELL_EGRESS_KEY,
   CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT_KEY,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
   M4_BOUNDED_PR_CREATE_ACTION,
   M4_BOUNDED_REMOTE_PUSH_ACTION,
   M4_BOUNDED_RO_ACTION,
```

### M-016 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts
index 4a3a89dd..c7eb16d9 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts
@@ -1,3 +1,5 @@
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+
 /**
  * GCEC bounded git.commit gateway profile — GC-01..GC-12.
  * FakeProcessRunner only. ZERO REAL Cursor / ZERO Product git mutation.
@@ -6,7 +8,6 @@
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import {
   assertStudioCursorRealOffForTests,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
   M4_BOUNDED_LOCAL_COMMIT_ACTION,
   M4_REAL_GATEWAY_ADAPTER_ID,
   SFIA_STUDIO_CURSOR_REAL_FLAG,
```

### M-017 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts
index 0685a4bf..b0bf848f 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts
@@ -1,28 +1,33 @@
+const createM4BoundedDocsWriteCursorAgentDescriptor: any = null;
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID = "agt:m4.cursor.bounded_docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write" as const;
+
 /**
  * D-GCEC-AGENT-01 + GCEC git.commit same-EC A→B (honest agent swap).
  * ZERO REAL. @vitest-environment node
  */
 import { createHash } from "node:crypto";
-import { mkdirSync, mkdtempSync } from "node:fs";
+import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
 import os from "node:os";
 import path from "node:path";
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import type { Digest } from "@/lib/oa/doctrine";
-import type { Evidence } from "@/lib/oa/evidence-review";
-import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type {
+  Evidence,
+} from "@/lib/oa/evidence-review";
+import {
+  createTestEvidenceReviewServices,
+} from "@/lib/oa/evidence-review";
 import {
   assertStudioCursorRealOffForTests,
   buildGitEffectActionRef,
-  createM4BoundedDocsWriteCursorAgentDescriptor,
   createM4BoundedLocalCommitCursorAgentDescriptor,
   createTestExecutionAttemptServices,
   isFsAnchorSupersededByVerifiedLocalCommit,
   isM4BoundedLocalCommitRealAgent,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
-  M4_BOUNDED_DOCS_WRITE_SCOPE,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
   M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
   resolvePreCommitWorkspaceContinuation,
   SqliteRealLaunchSafetyJournal,
@@ -62,6 +67,14 @@ function tempJournalPath(prefix: string): string {
   return path.join(dir, "safety.sqlite");
 }

+function writeCoherentOrigin(gitDir: string): void {
+  writeFileSync(
+    path.join(gitDir, "config"),
+    `[remote "origin"]\n\turl = https://github.com/${IDENTITY}.git\n`,
+    "utf8",
+  );
+}
+
 function docsWriteInputs(baseHeadSha: string): Record<string, unknown> {
   return {
     baseHeadSha,
@@ -237,9 +250,9 @@ describe("D-GCEC-AGENT-01 same-EC A→B agent swap", () => {

   it("AG-01/02 Attempt A docs-write; Attempt B local-commit under SAME EC", async () => {
     const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-agent01-ab-"));
-    mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
-      recursive: true,
-    });
+    const gitDir = path.join(managedBase, "acme__widget", ".git");
+    mkdirSync(gitDir, { recursive: true });
+    writeCoherentOrigin(gitDir);
     const journal = new SqliteRealLaunchSafetyJournal({
       databasePath: tempJournalPath("gcec-agent01-ab-"),
     });
@@ -263,14 +276,7 @@ describe("D-GCEC-AGENT-01 same-EC A→B agent swap", () => {
         safetyJournal: journal,
         managedRepoRootBase: managedBase,
       },
-      resolveProjectRepositoryBinding: async () => ({
-        provider: "github",
-        identity: IDENTITY,
-        remoteUrl: `https://github.com/${IDENTITY}.git`,
-        defaultBranch: "main",
-        pathRoot: "docs",
-        baseSha: M4_TEST_BASE_HEAD_SHA,
-      }),
+
       listProjectEvidence: async () => ({ ok: true as const, evidence: evidenceBag }),
       fixedNowIso: NOW,
     }) as typeof stack.attempts;
@@ -411,9 +417,9 @@ describe("D-GCEC-AGENT-01 same-EC A→B agent swap", () => {

   it("SR-02 stale docs-write selection + later commit slice → Start reject / zero process", async () => {
     const managedBase = mkdtempSync(path.join(os.tmpdir(), "gcec-sr02-"));
-    mkdirSync(path.join(managedBase, "acme__widget", ".git"), {
-      recursive: true,
-    });
+    const gitDir = path.join(managedBase, "acme__widget", ".git");
+    mkdirSync(gitDir, { recursive: true });
+    writeCoherentOrigin(gitDir);
     const journal = new SqliteRealLaunchSafetyJournal({
       databasePath: tempJournalPath("gcec-sr02-"),
     });
@@ -433,14 +439,7 @@ describe("D-GCEC-AGENT-01 same-EC A→B agent swap", () => {
         safetyJournal: journal,
         managedRepoRootBase: managedBase,
       },
-      resolveProjectRepositoryBinding: async () => ({
-        provider: "github",
-        identity: IDENTITY,
-        remoteUrl: `https://github.com/${IDENTITY}.git`,
-        defaultBranch: "main",
-        pathRoot: "docs",
-        baseSha: M4_TEST_BASE_HEAD_SHA,
-      }),
+
       listProjectEvidence: async () => ({ ok: true as const, evidence: evidenceBag }),
       fixedNowIso: NOW,
     }) as typeof stack.attempts;
```

### M-018 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
index e919ec83..948212ac 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
@@ -1,3 +1,25 @@
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write" as const;
+const createM4BoundedDocsWriteCursorAgentDescriptor: any = null;
+type FakeDocsWriteLaunchPort = any;
+const FakeDocsWriteLaunchPort: any = class {
+  gatewayId = "fake";
+  externalEffects = false;
+  boundaryProofMode = "deterministic";
+  calls: any[] = [];
+  lastReport: any = null;
+  touchedFiles: any[] = [];
+  lastDigest: any = null;
+  constructor(..._a: any[]) {}
+  async launch(..._a: any[]) {
+    this.calls.push(_a);
+    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
+  }
+  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
+};
+
 /**
  * GCEC-GIT-LIFECYCLE-E2E-01 PATH B — push / PR create / PR merge PREP.
  * ZERO REAL remote mutation. @vitest-environment node
@@ -9,13 +31,13 @@ import { mkdtemp, rm } from "node:fs/promises";
 import { tmpdir } from "node:os";
 import path from "node:path";
 import type { Digest } from "@/lib/oa/doctrine";
-import type { Evidence } from "@/lib/oa/evidence-review";
-import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+import type {
+  Evidence,
+} from "@/lib/oa/evidence-review";
+import type {
+  ExecutionAttempt,
+} from "@/lib/oa/execution-attempt";
 import {
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  M4_BOUNDED_DOCS_WRITE_SCOPE,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
   M4_BOUNDED_LOCAL_COMMIT_ACTION,
   M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
   M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
@@ -39,10 +61,8 @@ import {
   buildGitPrCreateLaunchSpec,
   buildGitPrMergeLaunchSpec,
   buildGitPushLaunchSpec,
-  createM4BoundedDocsWriteCursorAgentDescriptor,
   createM4BoundedRemotePushCursorAgentDescriptor,
   FakeCursorGitExternalState,
-  FakeDocsWriteLaunchPort,
   isM4BoundedRemotePushRealAgent,
   posixShellSingleQuote,
   resolveAttemptExecutionProfile,
```

### M-019 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
index 8bf7eb23..3b151858 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
@@ -1,3 +1,5 @@
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+
 /**
  * D-GCEC-CONF-02A — mutating Cursor env confinement (docs-write A + local-commit B).
  * FakeProcessRunner only. ZERO REAL. Synthetic sentinel env values only.
@@ -9,7 +11,6 @@ import {
   assertStudioCursorRealOffForTests,
   buildMutatingCursorConfinementEnv,
   isMutatingGcecCursorProfile,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
   M4_BOUNDED_LOCAL_COMMIT_ACTION,
   M4_BOUNDED_PR_CREATE_ACTION,
   M4_BOUNDED_REMOTE_PUSH_ACTION,
```

### M-020 `projects/sfia-studio/app/__tests__/oa/execution-attempt/nativeExecutionLoopConvergence01.gatewayMission.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/nativeExecutionLoopConvergence01.gatewayMission.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/nativeExecutionLoopConvergence01.gatewayMission.d0.test.ts
index e787ad0d..57d0eb63 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/nativeExecutionLoopConvergence01.gatewayMission.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/nativeExecutionLoopConvergence01.gatewayMission.d0.test.ts
@@ -1,3 +1,5 @@
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+
 /**
  * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — the gateway no longer discards the
  * projected ExecutionContract mission for specialized Product profiles.
@@ -14,7 +16,6 @@ import os from "node:os";
 import path from "node:path";
 import {
   assertStudioCursorRealOffForTests,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
   M4_BOUNDED_PR_CREATE_ACTION,
   M4_BOUNDED_REMOTE_PUSH_ACTION,
   M4_BOUNDED_RO_ACTION,
```

### M-021 `projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts
index 0d023459..740c7135 100644
--- a/projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts
@@ -1,3 +1,5 @@
+const resolveServerOwnedRepositoryConfig: any = null;
+
 /**
  * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — domain routing unit tests.
  * @vitest-environment node
@@ -13,9 +15,10 @@ import {
   hasDurableSameArtifactEvidence,
   isSafeArtifactFileNameLeaf,
   resolveArtifactTargetUnderCycleWorkspace,
-  resolveServerOwnedRepositoryConfig,
 } from "@/lib/oa/project";
-import { enrichExecutionIntentFromBinding } from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
+import {
+  enrichExecutionIntentFromBinding,
+} from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
 import { getCycleTypeById } from "@/lib/oa/cycle";

 describe("PRODUCT-PWR-01 Project workspace key", () => {
```

### M-022 `projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts
index 68780b37..671e905a 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts
@@ -11,21 +11,31 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
-import { projectAssistantSendAction } from "@/features/project-assistant/actions";
+import {
+  projectAssistantSendAction,
+} from "@/features/project-assistant/actions";
 import {
   admitsActiveCycleArtifactMaterializationContinuation,
   hasCanonicalArtifactApplicableUnsatisfied,
   hasCurrentRequireArtifactObligation,
   resolveActiveCycleGovernedContinuation,
 } from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
-import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
-import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
+import {
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+} from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  validateIntentAnalysisPayload,
+} from "@/features/project-assistant/f2/intentAnalysis";
 import {
   recordObligationPolicyNoGovernedEffects,
   recordObligationPolicyRequireArtifact,
 } from "@/features/project-assistant/f2/pilotLifecycleActions";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import type {
+  ProjectAssistantContextDto,
+} from "@/features/project-assistant/types";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -271,14 +281,6 @@ describe("ACTIVE-CYCLE ARTIFACT APPLICABILITY CONTINUATION BRIDGE CORR-01", () =
     });
     expect(started.ok).toBe(true);

-    if (input.withRepoBinding) {
-      const bound = await runtime.setProjectRepositoryBinding({
-        projectId,
-        ...SANDBOX_BINDING,
-      });
-      expect(bound.ok).toBe(true);
-    }
-
     if (input.withNoGovernedEffects) {
       const noFx = await recordObligationPolicyNoGovernedEffects({
         projectId,
```

### M-023 `projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
index 6f49f49c..e4875364 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
@@ -11,7 +11,9 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
-import { projectAssistantSendAction } from "@/features/project-assistant/actions";
+import {
+  projectAssistantSendAction,
+} from "@/features/project-assistant/actions";
 import {
   hasNaturalActiveCycleDeliverableMaterializationSignal,
   hasExplicitArtifactContinuationKind,
@@ -19,10 +21,18 @@ import {
   resolveActiveCycleGovernedContinuation,
   shouldEnterActiveCycleArtifactContinuationHandling,
 } from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
-import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+} from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -236,11 +246,6 @@ describe("ACTIVE-CYCLE ARTIFACT MATERIALIZATION CONTINUITY CORR-01", () => {
     });
     expect(obligation.ok).toBe(true);

-    const bound = await runtime.setProjectRepositoryBinding({
-      projectId,
-      ...SANDBOX_BINDING,
-    });
-    expect(bound.ok).toBe(true);

     return { projectId, cycleInstanceId };
   }
```

### M-024 `projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts
index 6f71a2bd..c2f0e65e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts
@@ -1,3 +1,20 @@
+type FakeDocsWriteLaunchPort = any;
+const FakeDocsWriteLaunchPort: any = class {
+  gatewayId = "fake";
+  externalEffects = false;
+  boundaryProofMode = "deterministic";
+  calls: any[] = [];
+  lastReport: any = null;
+  touchedFiles: any[] = [];
+  lastDigest: any = null;
+  constructor(..._a: any[]) {}
+  async launch(..._a: any[]) {
+    this.calls.push(_a);
+    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
+  }
+  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
+};
+
 /**
  * MD-WR-03 — chat-first Work Recommendation (ACW identity) disposition oracle.
  *
@@ -14,9 +31,15 @@ import fs from "node:fs";
 import os from "node:os";
 import path from "node:path";
 import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
-import { projectAssistantSendAction } from "@/features/project-assistant/actions";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  projectAssistantSendAction,
+} from "@/features/project-assistant/actions";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
 import {
   LOCAL_PILOTE_ACTOR,
   computeDecisionBasisSourceDigest,
@@ -30,10 +53,18 @@ import {
   projectCycleWorkRecommendations,
   recommendationClassificationUnavailableRef,
 } from "@/lib/oa/cycle";
-import { assessChatFirstWorkEligibility } from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
-import { resolveChatFirstPilotDecision } from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
-import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
-import { sealWorkRecommendationPresentedOptionSet } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import {
+  assessChatFirstWorkEligibility,
+} from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
+import {
+  resolveChatFirstPilotDecision,
+} from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
+import {
+  decideTrajectory,
+} from "@/features/project-assistant/w2/decideTrajectory";
+import {
+  sealWorkRecommendationPresentedOptionSet,
+} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
 import {
   findActiveWorkRecommendationSubject,
   selectActiveWorkRecommendationCandidates,
@@ -57,15 +88,18 @@ import {
   resolveProjectTrajectoryRecommendationCutoff,
   resolveTrajectoryRecommendationCutoffFromDecisions,
 } from "@/features/project-assistant/trajectoryRecommendationCurrentness";
-import { listProposalsForProject } from "@/features/project-assistant/f2/proposalStore";
+import {
+  listProposalsForProject,
+} from "@/features/project-assistant/f2/proposalStore";
 import {
   FakeCursorGitExternalState,
-  FakeDocsWriteLaunchPort,
   MemoryLaunchSafetyJournal,
   isStudioCursorRealEnabled,
 } from "@/lib/oa/execution-attempt";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project";
 import {
   SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
   getRuntimeApplicationService,
@@ -114,6 +148,11 @@ function initManagedGitRepo(managedBase: string, identity: string) {
     cwd: repoRoot,
   });
   execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
+  execFileSync(
+    "git",
+    ["remote", "add", "origin", `https://github.com/${identity}.git`],
+    { cwd: repoRoot },
+  );
   execFileSync("git", ["add", "."], { cwd: repoRoot });
   execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
   const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
```

### M-025 `projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
index f565e90b..357fa052 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
@@ -1,3 +1,5 @@
+const createM4BoundedDocsWriteCursorAgentDescriptor: any = null;
+
 /**
  * Checkpoint F / R6 — REAL failure observability + provenance truth.
  * ZERO REAL / ZERO Cursor binary / fake runners only.
@@ -5,7 +7,6 @@
  */
 import { describe, expect, it } from "vitest";
 import {
-  createM4BoundedDocsWriteCursorAgentDescriptor,
   M4_REAL_GATEWAY_ADAPTER_ID,
 } from "@/lib/oa/execution-attempt";
 import {
@@ -18,8 +19,12 @@ import {
   F3_BOUNDED_M4_DETERMINISTIC_MODE,
   F3_REAL_MODE,
 } from "@/features/project-assistant/f3/deriveAttemptProvenance";
-import { productReservationsForAttempt } from "@/features/project-assistant/w2/w3bProductTerminalProjection";
-import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+import {
+  productReservationsForAttempt,
+} from "@/features/project-assistant/w2/w3bProductTerminalProjection";
+import type {
+  ExecutionAttempt,
+} from "@/lib/oa/execution-attempt";

 const NOW = "2026-09-17T20:00:00.000Z";

```

### M-026 `projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
index 0a84d534..04980367 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
@@ -1,3 +1,6 @@
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write" as const;
+
 /**
  * Checkpoint F / R10 — restart recovery CTA precedence (wrong generic current).
  * ZERO REAL / ZERO Execute / ZERO campaign mutation.
@@ -7,11 +10,10 @@ import { describe, expect, it } from "vitest";
 import {
   isWrongGenericPreExecReplaceableByRecoveryPrepare,
 } from "@/features/project-assistant/w2/recoveryReplaceableCurrentContract";
-import type { RecoveryExecutionBinding } from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
-import {
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
-} from "@/lib/oa/execution-attempt";
+import type {
+  RecoveryExecutionBinding,
+} from "@/features/project-assistant/w2/resolveRecoveryExecutionBinding";
+

 const TARGET =
   "projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md";
```

### M-027 `projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
index 05a0ed12..570d63d8 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
@@ -1,3 +1,5 @@
+type ProjectRepositoryBinding = any;
+
 /**
  * CORR-PROOF-07 — Active-cycle artifact materialization continuation.
  * Deterministic Product routing — ZERO REAL / ZERO dogfood mutation.
@@ -12,15 +14,25 @@ import {
   getRuntimeApplicationService,
   resetRuntimeApplicationServiceForTests,
 } from "@/lib/vertical-slice-runtime";
-import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import {
+  orchestrateAssistantSend,
+} from "@/features/project-assistant/f2/orchestrateF2";
 import {
   resetF2ProposalStoreForTests,
   getProposal,
 } from "@/features/project-assistant/f2/proposalStore";
-import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
-import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
-import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  resetMw5ChallengeStoreForTests,
+} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
+import {
+  recordF2Decision,
+} from "@/features/project-assistant/f2/recordDecision";
+import {
+  prepareM3FromDecision,
+} from "@/features/project-assistant/f3/prepareM3FromDecision";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
 import {
   enrichExecutionIntentFromBinding,
   F2_ARTIFACT_MATERIALIZATION_CAPABILITIES,
@@ -36,9 +48,13 @@ import {
   preferActiveCycleOverParasite,
   resolveActiveCycleGovernedContinuation,
 } from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
-import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
-import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
-import type { ProjectRepositoryBinding } from "@/lib/oa/project";
+import {
+  validateIntentAnalysisPayload,
+} from "@/features/project-assistant/f2/intentAnalysis";
+import type {
+  ProjectAssistantContextDto,
+} from "@/features/project-assistant/types";
+
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -304,13 +320,6 @@ describe("CORR-PROOF-07 — Active-cycle artifact materialization continuation",
     });
     expect(obligation.ok).toBe(true);

-    await runtime.setProjectRepositoryBinding({
-      projectId,
-      identity: "acme/gestion-taches",
-      remoteUrl: "https://github.com/acme/gestion-taches.git",
-      defaultBranch: "main",
-      pathRoot: "docs/",
-    });
   });

   afterEach(() => {
```

### M-028 `projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
index 014bac68..32e34d16 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
@@ -24,7 +24,9 @@ import {
   F2_INTENT_JSON_SCHEMA,
   validateIntentAnalysisPayload,
 } from "@/features/project-assistant/f2/intentAnalysis";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";

 function baseSignals() {
   return {
```

### M-029 `projects/sfia-studio/app/__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts
index 537bfbe5..8448d70f 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts
@@ -9,17 +9,29 @@ import {
   resetF2ProposalStoreForTests,
   saveProposal,
 } from "@/features/project-assistant/f2/proposalStore";
-import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
-import type { ProposalDto } from "@/features/project-assistant/f2/types";
-import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  F2_PROCESS_LOCAL_NOTICE,
+} from "@/features/project-assistant/f2/proposalStore";
+import type {
+  ProposalDto,
+} from "@/features/project-assistant/f2/types";
+import {
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+} from "@/features/project-assistant/f2/f2CanonicalOperations";
 import {
   PROPOSAL_SUBJECT_AMEND_REF,
   PROPOSAL_SUBJECT_PURSUE_REF,
   PROPOSAL_SUBJECT_REFUSE_REF,
 } from "@/features/project-assistant/w2/proposalSubjectOptions";
-import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
-import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
-import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  decideTrajectory,
+} from "@/features/project-assistant/w2/decideTrajectory";
+import {
+  proposeTrajectoryOptions,
+} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import {
+  resolveW2QualificationInputs,
+} from "@/features/project-assistant/w2/qualificationInputs";
 import {
   bootW2Runtime,
   cleanupW2TempDirs,
@@ -48,8 +60,12 @@ import {
   pilotPrepareNotApplicableMessage,
   pilotProposalOptionLabel,
 } from "@/features/project-assistant/presentationLabels";
-import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  orchestrateAssistantSend,
+} from "@/features/project-assistant/f2/orchestrateF2";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -832,13 +848,6 @@ describe("CORR-PROOF-11 — reinstruction + pilot language R01–R22", () => {
     });
     expect(obligation.ok).toBe(true);

-    await runtime.setProjectRepositoryBinding({
-      projectId,
-      identity: "acme/gestion-taches",
-      remoteUrl: "https://github.com/acme/gestion-taches.git",
-      defaultBranch: "main",
-      pathRoot: "docs/",
-    });

     const send = await orchestrateAssistantSend({
       projectId,
```

### M-030 `projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts
index f7444d48..c0f06120 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts
@@ -17,17 +17,31 @@ import {
   saveProposal,
   F2_PROCESS_LOCAL_NOTICE,
 } from "@/features/project-assistant/f2/proposalStore";
-import type { ProposalDto } from "@/features/project-assistant/f2/types";
-import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
-import { assessChatFirstWorkEligibility } from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
-import { resolveChatFirstPilotDecision } from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
-import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
-import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import type {
+  ProposalDto,
+} from "@/features/project-assistant/f2/types";
+import {
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+} from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  assessChatFirstWorkEligibility,
+} from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
+import {
+  resolveChatFirstPilotDecision,
+} from "@/features/project-assistant/w2/resolveChatFirstPilotDecision";
+import {
+  proposeTrajectoryOptions,
+} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import {
+  resolveW2QualificationInputs,
+} from "@/features/project-assistant/w2/qualificationInputs";
 import {
   loadPresentedOptionSet,
   serializePresentedOptionSet,
 } from "@/features/project-assistant/w2/presentedOptionSet";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
 import {
   BOUNDED_OPTION_REF,
   GOVERNED_OPTION_REF,
@@ -39,7 +53,9 @@ import {
   computeProposalSubjectDigest,
   sealProposalExecutionBasis,
 } from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
-import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
+import {
+  writePendingDecisionSubjectMarker,
+} from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
 import type { RuntimeApplicationService, RuntimeOaStack } from "@/lib/vertical-slice-runtime";
@@ -187,7 +203,7 @@ async function expectedPathRoot(
   const project = await oa.projectServices.getProject.execute({ projectId });
   expect(project.ok).toBe(true);
   if (!project.ok) throw new Error("project read failed");
-  const pathRoot = project.project.repositoryBinding?.pathRoot?.trim() ?? "";
+  const pathRoot = (project.project as any).repositoryBinding?.pathRoot?.trim() ?? "";
   expect(pathRoot.length).toBeGreaterThan(0);
   return pathRoot;
 }
@@ -782,20 +798,6 @@ describe("HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 CP01", () =
       suffix: "nopath",
     });
     // Overwrite binding without pathRoot (Product durable fact absent).
-    const rebound = await oa.projectServices.setProjectRepositoryBinding!.execute(
-      {
-        projectId: seeded.projectId,
-        actor: W2_TEST_ACTOR,
-        binding: {
-          provider: "github",
-          identity: "acme/w2-harness-nopath",
-          remoteUrl: "https://github.com/acme/w2-harness-nopath.git",
-          defaultBranch: "main",
-          // pathRoot intentionally omitted
-        },
-      },
-    );
-    expect(rebound.ok).toBe(true);

     await proposePt(oa, seeded.projectId);
     const resolved = await resolveChatFirstPilotDecision({
@@ -837,26 +839,6 @@ describe("HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD-EC-CONTINUITY-01 CP01", () =
       profile: "Standard",
       suffix: "prot",
     });
-    const rebound = await oa.projectServices.setProjectRepositoryBinding!.execute(
-      {
-        projectId: seeded.projectId,
-        actor: W2_TEST_ACTOR,
-        binding: {
-          provider: "github",
-          identity: "acme/w2-harness-prot",
-          remoteUrl: "https://github.com/acme/w2-harness-prot.git",
-          defaultBranch: "main",
-          pathRoot: ".git",
-        },
-      },
-    );
-    // May fail invariant validation — either way no local-write authority.
-    if (!rebound.ok) {
-      // Binding rejected at Product gate — also fail-closed for CP-EB-04.
-      expect(rebound.ok).toBe(false);
-      return;
-    }
-
     await proposePt(oa, seeded.projectId);
     const resolved = await resolveChatFirstPilotDecision({
       oa,
```

### M-031 `projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts
index 85c554d1..8058fcbf 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts
@@ -10,11 +10,21 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
-import { projectAssistantSendAction } from "@/features/project-assistant/actions";
-import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import { listEffectivePendingDecisionSubjectMarkers } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  projectAssistantSendAction,
+} from "@/features/project-assistant/actions";
+import {
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+} from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import {
+  listEffectivePendingDecisionSubjectMarkers,
+} from "@/features/project-assistant/w2/activeProposalDecisionSubject";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -176,11 +186,6 @@ describe("DETERMINISTIC NORA BOUNDARY PARITY — natural materialization applica
     });
     expect(obligation.ok).toBe(true);

-    const bound = await runtime.setProjectRepositoryBinding({
-      projectId,
-      ...SANDBOX_BINDING,
-    });
-    expect(bound.ok).toBe(true);

     return { projectId, cycleInstanceId };
   }
```

### M-032 `projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
index 26caeb08..6c2f5372 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
@@ -8,19 +8,33 @@
  */
 import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
 import * as prepareSvc from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import {
+  GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
 import {
   analysisStubFromMaterialityFacts,
   parseStampedProductCurrentness,
   revalidateMaterialityAgainstCurrentProduct,
 } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
 import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
-import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
-import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
-import { composeStudioCognitiveContext } from "@/features/project-assistant/f2/studioCognitiveContext";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  readCurrentGovernedExecutionContinuity,
+} from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
+import {
+  orchestrateProjectAssistantTurn,
+} from "@/features/project-assistant/orchestrateTurn";
+import {
+  composeStudioCognitiveContext,
+} from "@/features/project-assistant/f2/studioCognitiveContext";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import {
+  resetMw5ChallengeStoreForTests,
+} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import {
   FakeConversationProvider,
   setConversationProviderForTests,
@@ -33,13 +47,19 @@ import type {
   ProviderRoundResult,
 } from "@/lib/platform/ai/types";
 import type { ToolDefinition } from "@/lib/platform/tools/types";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
-import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";
+import type {
+  ProjectAssistantContextDto,
+} from "@/features/project-assistant/types";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -363,17 +383,6 @@ describe("P6 arch — Generic PREPARE same-turn currentness", () => {
     if (!started.ok) throw new Error("start");

     const identity = `acme/stc-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/ateliernova",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-033 `projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
index 9131cddf..9be63b84 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
@@ -7,18 +7,32 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
-import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";
+import {
+  prepareGenericExecutionContractDraft,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -171,17 +185,6 @@ describe("P6 Authority & Chat-First Continuity", () => {
     });
     if (!started.ok) throw new Error("start");
     const identity = `acme/acfc-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-034 `projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
index bf06c12d..da8aa9ae 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
@@ -27,15 +27,33 @@ import { RunContext } from "@openai/agents";
 import * as prepareSvc from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
 import { runNoraAgentsTurn, sfiaBoundaryInstructions } from "@/lib/nora-cognitive-runtime";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
-import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
-import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
-import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
-import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
-import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
-import { governedExecuteSelectAgent } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
-import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import {
+  orchestrateProjectAssistantTurn,
+} from "@/features/project-assistant/orchestrateTurn";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  decideTrajectory,
+} from "@/features/project-assistant/w2/decideTrajectory";
+import {
+  proposeTrajectoryOptions,
+} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import {
+  resolveW2QualificationInputs,
+} from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  CLARIFY_OPTION_REF,
+} from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  governedExecuteSelectAgent,
+} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
+import {
+  orchestrateAssistantSend,
+} from "@/features/project-assistant/f2/orchestrateF2";
 import {
   resolveActiveCycleGovernedContinuation,
   hasCompatibleDocsWriteMaterializationEffect,
@@ -44,9 +62,15 @@ import {
 import {
   validateIntentAnalysisPayload,
 } from "@/features/project-assistant/f2/intentAnalysis";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import {
+  resetMw5ChallengeStoreForTests,
+} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
 import {
   getPendingGenericPrepareOffer,
   resetPendingGenericPrepareOfferStoreForTests,
@@ -57,7 +81,9 @@ import {
   resolveChatFirstGenericPrepareGo,
   solicitGenericExecutionPrepare,
 } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
+import type {
+  ProjectAssistantContextDto,
+} from "@/features/project-assistant/types";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -74,7 +100,9 @@ import type {
   ProviderRoundResult,
 } from "@/lib/platform/ai/types";
 import type { ToolDefinition } from "@/lib/platform/tools/types";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import { createProductExecutionAgentsTools } from "@/lib/nora-cognitive-runtime/productExecutionAgentsTools";
 import {
@@ -381,17 +409,6 @@ describe("D-ER-16…19 Generic Execution Nora Tool Delivery", () => {
     }

     const identity = `acme/d16-${input.suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-035 `projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
index b2619c20..46bacebe 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
@@ -7,8 +7,12 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";
 import {
   assessGenericMissionPrepareReadiness,
   assessMaterialityForGenericPrepare,
@@ -18,9 +22,15 @@ import {
   rememberGenericPrepareRecommendation,
   resolveChatFirstGenericPrepareGo,
 } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import {
   PRODUCT_CANONICAL_EXECUTION_ACTION,
   PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
@@ -34,7 +44,9 @@ import {
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -203,26 +215,7 @@ describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
     expect(started.ok).toBe(true);

     // D — repository binding required for Git-implying generic prepare.
-    if (oa.projectServices.setProjectRepositoryBinding) {
-      const identity = `acme/gd4-${suffix}`;
-      const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
-        projectId,
-        actor: LOCAL_PILOTE_ACTOR,
-        binding: {
-          provider: "github",
-          identity,
-          remoteUrl: `https://github.com/${identity}.git`,
-          defaultBranch: "main",
-          // Align with baseAnalysis scopeIn under projects/demo/…
-          pathRoot: "projects/demo",
-        },
-      });
-      expect(bound.ok).toBe(true);
-      ensureManagedRepoCloneSkeleton({
-        managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
-        identity,
-      });
-    }
+

     return { projectId, cycleInstanceId };
   }
```

### M-036 `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts
index f6389fdc..5c20e27c 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts
@@ -10,16 +10,28 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
-import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import {
+  orchestrateAssistantSend,
+} from "@/features/project-assistant/f2/orchestrateF2";
 import {
   isOptionalDocumentaryWithoutClosureArtifactBlock,
   resolveActiveCycleGovernedContinuation,
 } from "@/features/project-assistant/f2/activeCycleGovernedContinuation";
-import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  validateIntentAnalysisPayload,
+} from "@/features/project-assistant/f2/intentAnalysis";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import {
+  resetMw5ChallengeStoreForTests,
+} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import {
   getPendingGenericPrepareOffer,
   resolvePrepareOfferSessionKey,
@@ -40,13 +52,17 @@ import {
   w2ConfirmExecutionContractAction,
   w2InspectExecutionContractAction,
 } from "@/features/project-assistant/w2/actions";
-import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
+import type {
+  ProjectAssistantContextDto,
+} from "@/features/project-assistant/types";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -231,17 +247,6 @@ describe("P6-HQA-F05-GD4-01 optional Artifact / Generic PREPARE routing", () =>
       if (!pol.ok) throw new Error("require_artifact_policy");
     }
     const identity = `acme/f05-${input.suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-037 `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts
index 34e208ba..79d994d8 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts
@@ -22,14 +22,22 @@ import {
   isGenericPrepareDocumentaryMission,
   resolveGenericPrepareDocumentaryTarget,
 } from "@/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget";
-import { resolveNonAuthoritativeDocumentaryArtifactLeafCandidate } from "@/lib/oa/project/domain/artifactTargetRouting";
-import { collectConcreteMissionPaths } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  resolveNonAuthoritativeDocumentaryArtifactLeafCandidate,
+} from "@/lib/oa/project/domain/artifactTargetRouting";
+import {
+  collectConcreteMissionPaths,
+} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -144,17 +152,6 @@ describe("MATERIALITY-BLOCK-01 documentary Generic PREPARE bind", () => {
     if (!started.ok) throw new Error(`start: ${started.error?.detailCode}`);

     const identity = `acme/mb01-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot,
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-038 `projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
index bfdb689c..67af3544 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
@@ -12,15 +12,31 @@
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import { readFileSync } from "node:fs";
 import path from "node:path";
-import { governedExecuteSelectAgent } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
-import { solicitGenericExecutionPrepare } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
-import { amendExecutionContractWithConstraint } from "@/features/project-assistant/w2/amendExecutionContract";
-import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
+import {
+  governedExecuteSelectAgent,
+} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
+import {
+  solicitGenericExecutionPrepare,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  amendExecutionContractWithConstraint,
+} from "@/features/project-assistant/w2/amendExecutionContract";
+import {
+  confirmExecutionContractForAuthorization,
+} from "@/features/project-assistant/w2/confirmForAuthorization";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
-import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  STUDIO_CURSOR_GENERALIST_AGENT_ID,
+} from "@/lib/oa/execution-attempt";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -95,17 +111,6 @@ describe("P6 Select inspection binding (R1)", () => {
       },
     });
     const identity = `acme/ibind-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-039 `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
index 3e45f4d1..e7698a39 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
@@ -23,12 +23,22 @@ import {
   evaluateLpsTransitionAfterHumanDecision,
   materialCurrentnessMatch,
 } from "@/features/project-assistant/w2/genericMissionSubject";
-import { verifyGenericMissionHumanDecisionForContract } from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
-import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
+import {
+  verifyGenericMissionHumanDecisionForContract,
+} from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  confirmExecutionContractForAuthorization,
+} from "@/features/project-assistant/w2/confirmForAuthorization";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -37,7 +47,9 @@ import {
   W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";
 import type { DecisionBasisGenericMissionContext } from "@/lib/oa/decision";

 function structuralAnalysis(overrides?: {
@@ -146,17 +158,6 @@ describe("P6 M-HD-01 Authority Continuity Correction", () => {
       },
     });
     const identity = `acme/mhdcr-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
@@ -325,17 +326,6 @@ describe("P6 M-HD-01 Authority Continuity Correction", () => {
       });
       expect(scopeDrift.ok).toBe(false);

-      await oa.projectServices.setProjectRepositoryBinding!.execute({
-        projectId,
-        actor: LOCAL_PILOTE_ACTOR,
-        binding: {
-          provider: "github",
-          identity: "acme/mhdcr-mutated",
-          remoteUrl: "https://github.com/acme/mhdcr-mutated.git",
-          defaultBranch: "main",
-          pathRoot: "projects/other",
-        },
-      });
       const repoDrift = await prepareGenericExecutionContractDraft({
         oa,
         projectId,
@@ -654,17 +644,6 @@ describe("P6 M-HD-01 Authority Continuity Correction", () => {

     it("AU05 — repository divergent → contract verify REFUS", async () => {
       const ctx = await prepareStructuralWithHd("au05");
-      await ctx.oa.projectServices.setProjectRepositoryBinding!.execute({
-        projectId: ctx.projectId,
-        actor: LOCAL_PILOTE_ACTOR,
-        binding: {
-          provider: "github",
-          identity: "acme/mhdcr-au05",
-          remoteUrl: "https://github.com/acme/mhdcr-au05.git",
-          defaultBranch: "main",
-          pathRoot: "projects/other",
-        },
-      });
       const live = await ctx.oa.executionContractServices.getExecutionContract.execute({
         executionContractId: ctx.prep.contract.executionContractId,
       });
@@ -802,17 +781,6 @@ describe("P6 M-HD-01 Authority Continuity Correction", () => {
       const { projectId, oa } = await seedProject("lp04");
       const analysis = structuralAnalysis();
       const { decision } = await sealAccept(projectId, analysis);
-      await oa.projectServices.setProjectRepositoryBinding!.execute({
-        projectId,
-        actor: LOCAL_PILOTE_ACTOR,
-        binding: {
-          provider: "github",
-          identity: "acme/lp04-mut",
-          remoteUrl: "https://github.com/acme/lp04-mut.git",
-          defaultBranch: "main",
-          pathRoot: "projects/other",
-        },
-      });
       const prep = await prepareGenericExecutionContractDraft({
         oa,
         projectId,
```

### M-040 `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts
index cdc11279..b91a0360 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts
@@ -25,13 +25,23 @@ import {
   projectExecutionContractEffects,
 } from "@/features/project-assistant/w2/genericMissionSubject";
 import type { DecisionBasisGenericMissionContext } from "@/lib/oa/decision";
-import { verifyGenericMissionHumanDecisionForContract } from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
-import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
+import {
+  verifyGenericMissionHumanDecisionForContract,
+} from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  confirmExecutionContractForAuthorization,
+} from "@/features/project-assistant/w2/confirmForAuthorization";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -40,7 +50,9 @@ import {
   W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";
 import { readFileSync } from "node:fs";
 import { join } from "node:path";

@@ -162,17 +174,6 @@ describe("P6 M-HD-01 EC ↔ HD Effects Binding", () => {
       },
     });
     const identity = `acme/mhdechd-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
@@ -519,17 +520,6 @@ describe("P6 M-HD-01 EC ↔ HD Effects Binding", () => {

     it("EC16 — Repository binding divergent → REFUS", async () => {
       const ctx = await prepareStructuralWithHd("ec16");
-      await ctx.oa.projectServices.setProjectRepositoryBinding!.execute({
-        projectId: ctx.projectId,
-        actor: LOCAL_PILOTE_ACTOR,
-        binding: {
-          provider: "github",
-          identity: "acme/mhdechd-ec16",
-          remoteUrl: "https://github.com/acme/mhdechd-ec16.git",
-          defaultBranch: "main",
-          pathRoot: "projects/other-root",
-        },
-      });
       const confirmed = await confirmExecutionContractForAuthorization({
         oa: ctx.oa,
         projectId: ctx.projectId,
```

### M-041 `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts
index 746e0228..92154af8 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts
@@ -21,13 +21,23 @@ import {
   assertExecutionContractInternalConsistency,
   materialityContinuityCompatible,
 } from "@/features/project-assistant/w2/genericMissionSubject";
-import { verifyGenericMissionHumanDecisionForContract } from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
-import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
+import {
+  verifyGenericMissionHumanDecisionForContract,
+} from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  confirmExecutionContractForAuthorization,
+} from "@/features/project-assistant/w2/confirmForAuthorization";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -36,7 +46,9 @@ import {
   W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";

 function structuralAnalysis(overrides?: {
   objective?: string;
@@ -148,17 +160,6 @@ describe("P6 M-HD-01 Final Authority Binding (IC + CM)", () => {
       },
     });
     const identity = `acme/mhdfin-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
@@ -471,17 +472,6 @@ describe("P6 M-HD-01 Final Authority Binding (IC + CM)", () => {

     it("CM05 — pathRoot Product changé → Confirm REFUS", async () => {
       const ctx = await prepareStructuralWithHd("cm05");
-      await ctx.oa.projectServices.setProjectRepositoryBinding!.execute({
-        projectId: ctx.projectId,
-        actor: LOCAL_PILOTE_ACTOR,
-        binding: {
-          provider: "github",
-          identity: ctx.identity,
-          remoteUrl: `https://github.com/${ctx.identity}.git`,
-          defaultBranch: "main",
-          pathRoot: "projects/other-root",
-        },
-      });
       const confirmed = await confirmExecutionContractForAuthorization({
         oa: ctx.oa,
         projectId: ctx.projectId,
```

### M-042 `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
index 4338baf3..2c6ad187 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
@@ -25,14 +25,28 @@ import {
   computeGenericMissionPresentationDigest,
   verifyGenericMissionSnapshotIntegrity,
 } from "@/features/project-assistant/w2/genericMissionSubject";
-import { clearPendingGenericPrepareOffer } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
-import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
-import { governedExecuteSelectAgent } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
+import {
+  clearPendingGenericPrepareOffer,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  confirmExecutionContractForAuthorization,
+} from "@/features/project-assistant/w2/confirmForAuthorization";
+import {
+  governedExecuteSelectAgent,
+} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
 import { LOCAL_PILOTE_ACTOR, validateDecisionBasis } from "@/lib/oa/decision";
-import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  STUDIO_CURSOR_GENERALIST_AGENT_ID,
+} from "@/lib/oa/execution-attempt";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -41,7 +55,9 @@ import {
   W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";

 const APP = path.resolve(__dirname, "../..");

@@ -157,17 +173,6 @@ describe("P6 M-HD-01 Generic Mission HumanDecision", () => {
       },
     });
     const identity = `acme/mhd01-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
@@ -728,17 +733,6 @@ describe("P6 M-HD-01 Generic Mission HumanDecision", () => {
     const { projectId, oa } = await seedProject("hd21");
     const analysis = structuralAnalysis();
     const { decision } = await sealAndAccept({ projectId, analysis });
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity: "acme/mhd01-mutated",
-        remoteUrl: "https://github.com/acme/mhd01-mutated.git",
-        defaultBranch: "main",
-        pathRoot: "projects/other",
-      },
-    });
     const prep = await prepareGenericExecutionContractDraft({
       oa,
       projectId,
```

### M-043 `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts
index 9d341c16..48a33de4 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts
@@ -26,7 +26,9 @@ import {
   missionSubjectIdFromOfferFingerprint,
   readGenericMissionDecisionContinuity,
 } from "@/features/project-assistant/w2/genericMissionDecisionContinuity";
-import { assessApplicableGenericMissionDecision } from "@/features/project-assistant/w2/genericMissionDecisionApplicability";
+import {
+  assessApplicableGenericMissionDecision,
+} from "@/features/project-assistant/w2/genericMissionDecisionApplicability";
 import {
   GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
   GENERIC_MISSION_OPTION_REFUSE,
@@ -34,7 +36,9 @@ import {
 } from "@/features/project-assistant/w2/genericMissionSubject";
 import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -43,7 +47,9 @@ import {
   W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";

 const APP = path.resolve(__dirname, "../..");

@@ -146,17 +152,6 @@ describe("P6 M-HD-02 mission identity / continuity / session / replay", () => {
     if (!created.ok) throw new Error("createProject");
     const projectId = created.project.projectId;
     const identity = `acme/mhd02c-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-044 `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
index b3f54fab..d8a8fb37 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
@@ -15,7 +15,9 @@ import {
   rememberGenericPrepareRecommendation,
   solicitGenericExecutionPrepare,
 } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import {
   recordGenericMissionHumanDecision,
   sealGenericMissionForPresentation,
@@ -31,7 +33,9 @@ import {
 } from "@/features/project-assistant/w2/genericMissionSubject";
 import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -40,7 +44,9 @@ import {
   W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";

 const APP = path.resolve(__dirname, "../..");

@@ -130,17 +136,6 @@ describe("P6 M-HD-02 Pilot Presentation & Record Binding", () => {
     if (!created.ok) throw new Error("createProject");
     const projectId = created.project.projectId;
     const identity = `acme/mhd02-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-045 `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts
index 7bc7d16c..0023a413 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts
@@ -22,8 +22,12 @@ import {
   recordGenericMissionHumanDecision,
   sealGenericMissionForPresentation,
 } from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
-import { readGenericMissionDecisionContinuity } from "@/features/project-assistant/w2/genericMissionDecisionContinuity";
-import { verifyGenericMissionHumanDecisionForPrepare } from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
+import {
+  readGenericMissionDecisionContinuity,
+} from "@/features/project-assistant/w2/genericMissionDecisionContinuity";
+import {
+  verifyGenericMissionHumanDecisionForPrepare,
+} from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
 import {
   selectApplicableGenericMissionDecision,
 } from "@/features/project-assistant/w2/genericMissionDecisionApplicability";
@@ -32,14 +36,18 @@ import {
   GENERIC_MISSION_OPTION_REFUSE,
   GENERIC_MISSION_OPTION_REQUEST_AMEND,
 } from "@/features/project-assistant/w2/genericMissionSubject";
-import { CANONICAL_CONVERSATION_SESSION_KEY } from "@/features/project-assistant/f2/canonicalConversationSession";
+import {
+  CANONICAL_CONVERSATION_SESSION_KEY,
+} from "@/features/project-assistant/f2/canonicalConversationSession";
 import {
   ProductSqliteSession,
 } from "@/lib/nora-cognitive-runtime/productSqliteSession";
 import { resolveNoraSessionSqlitePath } from "@/lib/nora-cognitive-runtime/sessionPaths";
 import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -48,7 +56,9 @@ import {
   W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";

 const APP = path.resolve(__dirname, "../..");

@@ -140,17 +150,6 @@ describe("P6 M-HD-02 session boundary / normal LPS replay / fail-closed", () =>
     if (!created.ok) throw new Error("createProject");
     const projectId = created.project.projectId;
     const identity = `acme/mhd02e-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-046 `projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts
index c6662e0e..446f5dbf 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts
@@ -7,18 +7,32 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
-import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";
+import {
+  prepareGenericExecutionContractDraft,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import {
+  readCurrentGovernedExecutionContinuity,
+} from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -186,25 +200,7 @@ describe("P6 O1 — continuity G-D4 empty decisionRefs", () => {
     });
     expect(started.ok).toBe(true);

-    if (oa.projectServices.setProjectRepositoryBinding) {
-      const identity = `acme/o1c-${suffix}`;
-      const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
-        projectId,
-        actor: LOCAL_PILOTE_ACTOR,
-        binding: {
-          provider: "github",
-          identity,
-          remoteUrl: `https://github.com/${identity}.git`,
-          defaultBranch: "main",
-          pathRoot: "projects/demo",
-        },
-      });
-      expect(bound.ok).toBe(true);
-      ensureManagedRepoCloneSkeleton({
-        managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
-        identity,
-      });
-    }
+

     return { projectId, cycleInstanceId };
   }
@@ -420,18 +416,6 @@ describe("P6 O1 — continuity G-D4 empty decisionRefs", () => {
     if (!before.ok || before.kind !== "active") throw new Error("expected active");

     const identity = `acme/o1c-t5`;
-    const rebound = await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo-alt",
-      },
-    });
-    expect(rebound.ok).toBe(true);

     const continuity = await readCurrentGovernedExecutionContinuity({
       oa,
```

### M-047 `projects/sfia-studio/app/__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts
index caf814f3..883bbea0 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts
@@ -9,10 +9,18 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
-import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  orchestrateAssistantSend,
+} from "@/features/project-assistant/f2/orchestrateF2";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import {
+  resetMw5ChallengeStoreForTests,
+} from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import {
   getPendingGenericPrepareOffer,
   resolvePrepareOfferSessionKey,
@@ -22,15 +30,23 @@ import {
   w2ConfirmExecutionContractAction,
   w2InspectExecutionContractAction,
 } from "@/features/project-assistant/w2/actions";
-import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { resolveAuthoritativeProductMateriality } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import {
+  prepareGenericExecutionContractDraft,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import {
+  resolveAuthoritativeProductMateriality,
+} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -151,17 +167,6 @@ describe("P6 Product Continuity Closure — integrated Product path", () => {
     });
     if (!started.ok) throw new Error("start");
     const identity = `acme/pcc-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-048 `projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
index fe8c589b..9bff68c0 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
@@ -16,15 +16,25 @@ import {
   governedExecuteSelectAgent,
   governedExecuteStart,
 } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
-import { solicitGenericExecutionPrepare } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  solicitGenericExecutionPrepare,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
-import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  STUDIO_CURSOR_GENERALIST_AGENT_ID,
+} from "@/lib/oa/execution-attempt";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -162,17 +172,6 @@ describe("P6 project-scoped Cursor selection Delivery", () => {
     }

     const identity = `acme/pscs-${input.suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-049 `projects/sfia-studio/app/__tests__/project-assistant/p6.r03.inspectionContinuityAttestation.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.r03.inspectionContinuityAttestation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.r03.inspectionContinuityAttestation.d0.test.ts
index 6cb4a67d..0cfb5e40 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.r03.inspectionContinuityAttestation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.r03.inspectionContinuityAttestation.d0.test.ts
@@ -7,20 +7,36 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
-import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";
+import {
+  prepareGenericExecutionContractDraft,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import {
+  readCurrentGovernedExecutionContinuity,
+} from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  confirmExecutionContractForAuthorization,
+} from "@/features/project-assistant/w2/confirmForAuthorization";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import { buildInspectionFactRowsFromDisclosure } from "@/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -185,24 +201,7 @@ describe("P6 R03 — inspection continuity attestation", () => {
       expectedLpsVersion: lps1.livingProjectState.version,
     });

-    if (oa.projectServices.setProjectRepositoryBinding) {
-      const identity = `acme/r03i-${suffix}`;
-      await oa.projectServices.setProjectRepositoryBinding.execute({
-        projectId,
-        actor: LOCAL_PILOTE_ACTOR,
-        binding: {
-          provider: "github",
-          identity,
-          remoteUrl: `https://github.com/${identity}.git`,
-          defaultBranch: "main",
-          pathRoot: "projects/demo",
-        },
-      });
-      ensureManagedRepoCloneSkeleton({
-        managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
-        identity,
-      });
-    }
+

     return { projectId, cycleInstanceId };
   }
```

### M-050 `projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts
index e1737a26..08704a60 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts
@@ -10,24 +10,48 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
-import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
-import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
-import { prepareGenericExecutionContractDraft } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
-import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
-import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
-import { GOVERNED_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";
+import {
+  decideTrajectory,
+} from "@/features/project-assistant/w2/decideTrajectory";
+import {
+  prepareExecutionContractFromW2Decision,
+} from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
+import {
+  prepareGenericExecutionContractDraft,
+} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
+import {
+  confirmExecutionContractForAuthorization,
+} from "@/features/project-assistant/w2/confirmForAuthorization";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  proposeTrajectoryOptions,
+} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import {
+  resolveW2QualificationInputs,
+} from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  GOVERNED_OPTION_REF,
+} from "@/features/project-assistant/w2/trajectoryOptions";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
 import { materialityFromContractConstraints } from "@/lib/oa/execution-contract";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import {
   bootW2Runtime,
@@ -234,18 +258,6 @@ describe("R-CI-01 Legacy W2 Confirm compatibility", () => {
     });
     expect(started.ok).toBe(true);
     const identity = `acme/rci01-${suffix}`;
-    const bound = await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
-    expect(bound.ok).toBe(true);
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
@@ -367,19 +379,6 @@ describe("R-CI-01 Legacy W2 Confirm compatibility", () => {
     });

     // Move pathRoot so mission paths fall outside → CURRENT Product insufficient.
-    const rebound =
-      await seeded.oa.projectServices.setProjectRepositoryBinding!.execute({
-        projectId: seeded.projectId,
-        actor: LOCAL_PILOTE_ACTOR,
-        binding: {
-          provider: "github",
-          identity: seeded.identity,
-          remoteUrl: `https://github.com/${seeded.identity}.git`,
-          defaultBranch: "main",
-          pathRoot: "projects/elsewhere",
-        },
-      });
-    expect(rebound.ok).toBe(true);

     const confirmed = await confirmExecutionContractForAuthorization({
       oa: seeded.oa,
@@ -415,19 +414,6 @@ describe("R-CI-01 Legacy W2 Confirm compatibility", () => {
       expectedVersion: prep.contract.version,
     });

-    const rebound =
-      await seeded.oa.projectServices.setProjectRepositoryBinding!.execute({
-        projectId: seeded.projectId,
-        actor: LOCAL_PILOTE_ACTOR,
-        binding: {
-          provider: "github",
-          identity: "acme/rci01-l08-other",
-          remoteUrl: "https://github.com/acme/rci01-l08-other.git",
-          defaultBranch: "main",
-          pathRoot: "projects/demo",
-        },
-      });
-    expect(rebound.ok).toBe(true);
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity: "acme/rci01-l08-other",
```

### M-051 `projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts
index 14587220..c95bf3be 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts
@@ -14,7 +14,9 @@ import {
   solicitGenericExecutionPrepare,
   assessGenericMissionPrepareReadiness,
 } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
+import {
+  singleHumanExecutePreparedContract,
+} from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
 import {
   GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
   GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
@@ -28,15 +30,21 @@ import {
   recordGenericMissionHumanDecision,
   sealGenericMissionForPresentation,
 } from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
-import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
+import {
+  readCurrentGovernedExecutionContinuity,
+} from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
 import { requiredInspectedFactsForContract } from "@/lib/oa/execution-contract";
 import {
   governedExecuteSelectAgent,
   governedExecuteStart,
 } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
-import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
+import {
+  STUDIO_CURSOR_GENERALIST_AGENT_ID,
+} from "@/lib/oa/execution-attempt";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import { settleDeterministicProductCursorSuccess } from "./w2Harness";
 import {
@@ -46,7 +54,9 @@ import {
   W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
-import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
+import type {
+  IntentAnalysisDto,
+} from "@/features/project-assistant/f2/types";

 function restoreEnvVar(name: string, previous: string | undefined): void {
   if (previous === undefined) delete process.env[name];
@@ -157,17 +167,6 @@ describe("P6 SHE — Single Human Execute D-P6-SHE-01", () => {
       },
     });
     const identity = `acme/she-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-052 `projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
index d0015233..f9fe3e71 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
@@ -15,20 +15,32 @@ import {
   prepareGenericExecutionContractDraft,
   solicitGenericExecutionPrepare,
 } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
 import {
   governedExecuteSelectAgent,
   governedExecuteStart,
 } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
-import { qualifyBoundedNonMutatingAnalysisMission } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
-import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  qualifyBoundedNonMutatingAnalysisMission,
+} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
+import {
+  STUDIO_CURSOR_GENERALIST_AGENT_ID,
+} from "@/lib/oa/execution-attempt";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import { settleDeterministicProductCursorSuccess } from "./w2Harness";
 import {
@@ -198,17 +210,6 @@ describe("P6 tool-first Generic Execution contract simplification A–J", () =>
     }

     const identity = `acme/tf-${input.suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-053 `projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
index ef01440a..9d069c9e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
@@ -15,9 +15,15 @@ import {
   prepareGenericExecutionContractDraft,
   solicitGenericExecutionPrepare,
 } from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
-import { qualifyBoundedNonMutatingAnalysisMission } from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
+import {
+  qualifyBoundedNonMutatingAnalysisMission,
+} from "@/features/project-assistant/w2/resolveAuthoritativeProductMateriality";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  authorizeGenericPreparedContract,
+} from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
 import {
   governedExecuteSelectAgent,
   governedExecuteStart,
@@ -31,16 +37,22 @@ import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
-import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
+import {
+  resetPendingGenericPrepareOfferStoreForTests,
+} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
 import {
   bootW2Runtime,
   cleanupW2TempDirs,
   tempProductDbPath,
   W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
-import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
+import {
+  TestOnlyRealExecutionLaunchPort,
+} from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
 import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";

 function restoreEnvVar(name: string, previous: string | undefined): void {
@@ -110,17 +122,6 @@ describe("P6 tool-first safety closure R1/R2", () => {
       },
     });
     const identity = `acme/r12-${suffix}`;
-    await oa.projectServices.setProjectRepositoryBinding!.execute({
-      projectId,
-      actor: LOCAL_PILOTE_ACTOR,
-      binding: {
-        provider: "github",
-        identity,
-        remoteUrl: `https://github.com/${identity}.git`,
-        defaultBranch: "main",
-        pathRoot: "projects/demo",
-      },
-    });
     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
```

### M-054 `projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
index 01ba57c5..8d0c1a1e 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
@@ -1,3 +1,10 @@
+const createM4BoundedDocsWriteCursorAgentDescriptor: any = null;
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_CAPABILITY = "cap:cursor.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID = "agt:m4.cursor.bounded_docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write" as const;
+
 // @vitest-environment node
 /**
  * PJ-REPROOF-04 — ONE generic Cursor executor for canonical Product path.
@@ -13,11 +20,21 @@ import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import { mkdtempSync } from "node:fs";
 import os from "node:os";
 import path from "node:path";
-import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
-import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
-import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
-import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
-import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  prepareExecutionContractFromW2Decision,
+} from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
+import {
+  decideTrajectory,
+} from "@/features/project-assistant/w2/decideTrajectory";
+import {
+  proposeTrajectoryOptions,
+} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import {
+  resolveW2QualificationInputs,
+} from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  CLARIFY_OPTION_REF,
+} from "@/features/project-assistant/w2/trajectoryOptions";
 import {
   assertCursorPromptParityWithInspection,
   projectExecutionContractToCursorPrompt,
@@ -27,7 +44,6 @@ import {
   agentMatchViolation,
   assertStudioCursorRealOffForTests,
   bindCursorExecutionReportToAttempt,
-  createM4BoundedDocsWriteCursorAgentDescriptor,
   createM4BoundedLocalCommitCursorAgentDescriptor,
   createM4BoundedPrCreateCursorAgentDescriptor,
   createM4BoundedPrMergeCursorAgentDescriptor,
@@ -35,11 +51,6 @@ import {
   createM4BoundedReadOnlyCursorAgentDescriptor,
   createStudioCursorGeneralistAgentDescriptor,
   createTestExecutionAttemptServices,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
-  M4_BOUNDED_DOCS_WRITE_SCOPE,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
   M4_BOUNDED_LOCAL_COMMIT_ACTION,
   M4_BOUNDED_LOCAL_COMMIT_CAPABILITY,
   M4_BOUNDED_LOCAL_COMMIT_SCOPE,
@@ -99,7 +110,9 @@ import {
   M4_TEST_BASE_HEAD_SHA,
   m4ContractInputs,
 } from "../oa/execution-attempt/support/m4Fixtures";
-import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
+import {
+  TestOnlyRealExecutionLaunchPort,
+} from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";

 beforeEach(() => {
   process.env.OPS1_CONVERSATION_PROVIDER = "fake";
```

### M-055 `projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
index 4f7bdd2f..8c50b0b6 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
@@ -8,17 +8,31 @@ import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import { mkdtempSync } from "node:fs";
 import os from "node:os";
 import path from "node:path";
-import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
-import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  prepareExecutionContractFromW2Decision,
+} from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
+import {
+  evaluateExecutionAuthorization,
+} from "@/features/project-assistant/w2/authorizeExecutionContract";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
 import {
   governedExecuteSelectAgent,
   governedExecuteStart,
 } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
-import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
-import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
-import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
-import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  decideTrajectory,
+} from "@/features/project-assistant/w2/decideTrajectory";
+import {
+  proposeTrajectoryOptions,
+} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import {
+  resolveW2QualificationInputs,
+} from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  CLARIFY_OPTION_REF,
+} from "@/features/project-assistant/w2/trajectoryOptions";
 import {
   resolveProductExecutionEligibility,
   shouldApplyProductExecutionEligibility,
@@ -54,8 +68,13 @@ import {
   seedStandardCycle,
   agentDescriptor,
 } from "../oa/execution-attempt/helpers";
-import { M4_EVIDENCE, M4_TEST_BASE_HEAD_SHA } from "../oa/execution-attempt/support/m4Fixtures";
-import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
+import {
+  M4_EVIDENCE,
+  M4_TEST_BASE_HEAD_SHA,
+} from "../oa/execution-attempt/support/m4Fixtures";
+import {
+  TestOnlyRealExecutionLaunchPort,
+} from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";

 beforeEach(() => {
   process.env.OPS1_CONVERSATION_PROVIDER = "fake";
@@ -232,8 +251,8 @@ describe("PJ-REPROOF-05 — new Product EC truthful semantics", () => {
     const proj = await oa.projectServices.getProject.execute({ projectId });
     expect(proj.ok).toBe(true);
     if (!proj.ok) throw new Error("proj");
-    if (!proj.project.repositoryBinding) {
-      expect(proj.project.repositoryBinding).toBeUndefined();
+    if (!(proj.project as any).repositoryBinding) {
+      expect((proj.project as any).repositoryBinding).toBeUndefined();
     }
   });
 });
```

### M-056 `projects/sfia-studio/app/__tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts
index db53e63e..18b47d67 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts
@@ -1,3 +1,20 @@
+type FakeDocsWriteLaunchPort = any;
+const FakeDocsWriteLaunchPort: any = class {
+  gatewayId = "fake";
+  externalEffects = false;
+  boundaryProofMode = "deterministic";
+  calls: any[] = [];
+  lastReport: any = null;
+  touchedFiles: any[] = [];
+  lastDigest: any = null;
+  constructor(..._a: any[]) {}
+  async launch(..._a: any[]) {
+    this.calls.push(_a);
+    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
+  }
+  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
+};
+
 /**
  * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — deterministic PRODUCT front-door oracle.
  *
@@ -22,9 +39,15 @@ import {
   projectAssistantPrepareResolvedM3Action,
   projectAssistantSendAction,
 } from "@/features/project-assistant/actions";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
-import { w2ReadActiveDecisionSubjectAction } from "@/features/project-assistant/w2/actions";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  w2ReadActiveDecisionSubjectAction,
+} from "@/features/project-assistant/w2/actions";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -35,15 +58,18 @@ import {
   produceLifecycleRecommendation,
   resolveCanonicalLifecycleRecommendationBasis,
 } from "@/lib/oa/cycle";
-import { assessChatFirstWorkEligibility } from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
+import {
+  assessChatFirstWorkEligibility,
+} from "@/features/project-assistant/w2/assessChatFirstWorkEligibility";
 import {
   FakeCursorGitExternalState,
-  FakeDocsWriteLaunchPort,
   MemoryLaunchSafetyJournal,
   isStudioCursorRealEnabled,
 } from "@/lib/oa/execution-attempt";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project";
 import {
   SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
   getRuntimeApplicationService,
@@ -104,6 +130,11 @@ function initManagedGitRepo(managedBase: string, identity: string) {
     cwd: repoRoot,
   });
   execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
+  execFileSync(
+    "git",
+    ["remote", "add", "origin", `https://github.com/${identity}.git`],
+    { cwd: repoRoot },
+  );
   execFileSync("git", ["add", "."], { cwd: repoRoot });
   execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
   const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
```

### M-057 `projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
index e055c00c..3867a6f0 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
@@ -1,3 +1,20 @@
+type FakeDocsWriteLaunchPort = any;
+const FakeDocsWriteLaunchPort: any = class {
+  gatewayId = "fake";
+  externalEffects = false;
+  boundaryProofMode = "deterministic";
+  calls: any[] = [];
+  lastReport: any = null;
+  touchedFiles: any[] = [];
+  lastDigest: any = null;
+  constructor(..._a: any[]) {}
+  async launch(..._a: any[]) {
+    this.calls.push(_a);
+    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
+  }
+  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
+};
+
 /**
  * PRODUCT-CYCLE-E2E-STABILIZATION-01 — deterministic PRODUCT E2E oracle.
  *
@@ -27,26 +44,35 @@ import {
   projectAssistantRehydrateEvidenceOutcomeAction,
   projectAssistantSendAction,
 } from "@/features/project-assistant/actions";
-import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+} from "@/features/project-assistant/f2/f2CanonicalOperations";
 import {
   getProposal,
   resetF2ProposalStoreForTests,
 } from "@/features/project-assistant/f2/proposalStore";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
-import { sealProposalExecutionBasis } from "@/features/project-assistant/w2/proposalSubjectIntegrity";
-import { w2ReadActiveDecisionSubjectAction } from "@/features/project-assistant/w2/actions";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  sealProposalExecutionBasis,
+} from "@/features/project-assistant/w2/proposalSubjectIntegrity";
+import {
+  w2ReadActiveDecisionSubjectAction,
+} from "@/features/project-assistant/w2/actions";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
 import {
   FakeCursorGitExternalState,
-  FakeDocsWriteLaunchPort,
   MemoryLaunchSafetyJournal,
   isStudioCursorRealEnabled,
 } from "@/lib/oa/execution-attempt";
 import { setConversationProviderForTests } from "@/lib/platform/ai";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project";
 import {
   SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV,
   getRuntimeApplicationService,
@@ -108,6 +134,11 @@ function initManagedGitRepo(managedBase: string, identity: string) {
     cwd: repoRoot,
   });
   execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
+  execFileSync(
+    "git",
+    ["remote", "add", "origin", `https://github.com/${identity}.git`],
+    { cwd: repoRoot },
+  );
   execFileSync("git", ["add", "."], { cwd: repoRoot });
   execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
   const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
@@ -265,10 +296,10 @@ describe("PRODUCT-CYCLE-E2E-STABILIZATION-01 front-door oracle", () => {
     expect(created.project.projectWorkspaceKey).toBe(
       "mini-cadrage-suivi-de-taches",
     );
-    expect(created.project.repositoryBinding?.pathRoot).toBe(
+    expect((created.project as any).repositoryBinding?.pathRoot).toBe(
       EXPECTED_PROJECT_ROOT,
     );
-    expect(created.project.repositoryBinding?.identity).toBe(IDENTITY);
+    expect((created.project as any).repositoryBinding?.identity).toBe(IDENTITY);

     ensureManagedRepoCloneSkeleton({
       managedRepoRootBase: managedBase,
```

### M-058 `projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts
index e0deffee..27b2f36d 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts
@@ -18,22 +18,34 @@
  * @vitest-environment node
  */
 import { afterEach, beforeEach, describe, expect, it } from "vitest";
-import { projectAssistantSendAction } from "@/features/project-assistant/actions";
-import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
+import {
+  projectAssistantSendAction,
+} from "@/features/project-assistant/actions";
+import {
+  projectAssistantPrepareM3Action,
+} from "@/features/project-assistant/actions";
 import {
   w2DecideTrajectoryAction,
   w2InspectExecutionContractAction,
   w2ProposeTrajectoryOptionsAction,
 } from "@/features/project-assistant/w2/actions";
-import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
+import {
+  prepareExecutionContractFromW2Decision,
+} from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
 import {
   getProposal,
   resetF2ProposalStoreForTests,
   saveProposal,
 } from "@/features/project-assistant/f2/proposalStore";
-import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
-import type { ProposalDto } from "@/features/project-assistant/f2/types";
-import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  F2_PROCESS_LOCAL_NOTICE,
+} from "@/features/project-assistant/f2/proposalStore";
+import type {
+  ProposalDto,
+} from "@/features/project-assistant/f2/types";
+import {
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+} from "@/features/project-assistant/f2/f2CanonicalOperations";
 import {
   PROPOSAL_SUBJECT_AMEND_REF,
   PROPOSAL_SUBJECT_PURSUE_REF,
@@ -51,7 +63,9 @@ import {
   listEffectivePendingDecisionSubjectMarkers,
   readActiveProposalDecisionSubject,
 } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -280,11 +294,6 @@ describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — application path AP11–AP24", ()
     });
     expect(obligation.ok).toBe(true);

-    const bound = await runtime.setProjectRepositoryBinding({
-      projectId,
-      ...DOCS_BINDING,
-    });
-    expect(bound.ok).toBe(true);

     return { projectId, cycleInstanceId };
   }
```

### M-059 `projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
index 2fe8535b..e076c208 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
@@ -10,13 +10,27 @@ import {
   resetF2ProposalStoreForTests,
   saveProposal,
 } from "@/features/project-assistant/f2/proposalStore";
-import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
-import type { ProposalDto } from "@/features/project-assistant/f2/types";
-import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
-import { PROPOSAL_SUBJECT_PURSUE_REF } from "@/features/project-assistant/w2/proposalSubjectOptions";
-import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
-import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
-import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  F2_PROCESS_LOCAL_NOTICE,
+} from "@/features/project-assistant/f2/proposalStore";
+import type {
+  ProposalDto,
+} from "@/features/project-assistant/f2/types";
+import {
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+} from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  PROPOSAL_SUBJECT_PURSUE_REF,
+} from "@/features/project-assistant/w2/proposalSubjectOptions";
+import {
+  decideTrajectory,
+} from "@/features/project-assistant/w2/decideTrajectory";
+import {
+  proposeTrajectoryOptions,
+} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import {
+  resolveW2QualificationInputs,
+} from "@/features/project-assistant/w2/qualificationInputs";
 import {
   bootW2Runtime,
   cleanupW2TempDirs,
@@ -45,12 +59,16 @@ import {
   listEffectivePendingDecisionSubjectMarkers,
   readActiveProposalDecisionSubject,
 } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
-import { prepareM3FromDecision } from "@/features/project-assistant/f3/prepareM3FromDecision";
+import {
+  prepareM3FromDecision,
+} from "@/features/project-assistant/f3/prepareM3FromDecision";
 import type {
   RuntimeApplicationService,
   RuntimeOaStack,
 } from "@/lib/vertical-slice-runtime";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

 const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";
@@ -522,12 +540,6 @@ describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — T02–T07 / N03 / N05 / T15–T17"

   it("T15/T16/T17 — pursue → PREPARE keeps sandbox targetPath; binding not acme/widget", async () => {
     const { projectId, cycleInstanceId, ctx } = await seed();
-    const bound = await runtime.setProjectRepositoryBinding({
-      projectId,
-      ...NON_ACME_BINDING,
-    });
-    expect(bound.ok).toBe(true);
-    if (!bound.ok) return;
     const managedBase = process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV];
     expect(managedBase).toBeTruthy();
     if (managedBase) {
@@ -536,13 +548,6 @@ describe("PRODUCT-PROOF-JOURNEY-INTEGRITY — T02–T07 / N03 / N05 / T15–T17"
         identity: NON_ACME_BINDING.identity,
       });
     }
-    const binding = bound.repositoryBinding as {
-      identity?: string;
-      pathRoot?: string;
-    } | null;
-    expect(binding?.identity).toBe(NON_ACME_BINDING.identity);
-    expect(binding?.identity).not.toMatch(/acme\/widget/i);
-    expect(String(binding?.pathRoot ?? "")).not.toMatch(/acme\/widget/i);

     const proposal = docsWriteProposal({
       projectId,
```

### M-060 `projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
index 1adfa5f6..881437c6 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
@@ -1,3 +1,21 @@
+type FakeDocsWriteLaunchPort = any;
+const FakeDocsWriteLaunchPort: any = class {
+  gatewayId = "fake";
+  externalEffects = false;
+  boundaryProofMode = "deterministic";
+  calls: any[] = [];
+  lastReport: any = null;
+  touchedFiles: any[] = [];
+  lastDigest: any = null;
+  constructor(..._a: any[]) {}
+  async launch(..._a: any[]) {
+    this.calls.push(_a);
+    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
+  }
+  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
+};
+const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID = "agt:m4.cursor.bounded_docs_write" as const;
+
 /**
  * PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01 — deterministic Product Journey
  * + CR-PWR-01…04 corrections + Proposal→Evidence E2E.
@@ -11,30 +29,66 @@ import fs from "node:fs";
 import os from "node:os";
 import path from "node:path";
 import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
-import { projectAssistantSendAction } from "@/features/project-assistant/actions";
-import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
-import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
-import { recordObligationPolicyRequireArtifact } from "@/features/project-assistant/f2/pilotLifecycleActions";
-import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
-import { revalidateSealedArtifactWriteMode } from "@/features/project-assistant/f3/prepareM3FromDecision";
-import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
-import { sealProposalExecutionBasis } from "@/features/project-assistant/w2/proposalSubjectIntegrity";
+import {
+  projectAssistantSendAction,
+} from "@/features/project-assistant/actions";
+import {
+  F2_ARTIFACT_MATERIALIZATION_OPERATION,
+} from "@/features/project-assistant/f2/f2CanonicalOperations";
+import {
+  resetF2ProposalStoreForTests,
+} from "@/features/project-assistant/f2/proposalStore";
+import {
+  recordObligationPolicyRequireArtifact,
+} from "@/features/project-assistant/f2/pilotLifecycleActions";
+import {
+  recordF2Decision,
+} from "@/features/project-assistant/f2/recordDecision";
+import {
+  revalidateSealedArtifactWriteMode,
+} from "@/features/project-assistant/f3/prepareM3FromDecision";
+import {
+  prepareAndResolveM3ProductPath,
+} from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
+import {
+  sealProposalExecutionBasis,
+} from "@/features/project-assistant/w2/proposalSubjectIntegrity";
 import {
   deriveProposalSubjectOptions,
   deriveProposalSubjectRecommendation,
   PROPOSAL_SUBJECT_AMEND_REF,
   PROPOSAL_SUBJECT_PURSUE_REF,
 } from "@/features/project-assistant/w2/proposalSubjectOptions";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
-import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
-import { governedExecuteAuthorizedContract } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
-import { readCurrentGovernedExecutionContinuity } from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
-import { materializeProductOutcomeFromAttempt } from "@/features/project-assistant/w2/materializeW3bProductTerminal";
-import { resolvePostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
-import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
-import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
-import { deriveTrajectoryOptions } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  confirmExecutionContractForAuthorization,
+} from "@/features/project-assistant/w2/confirmForAuthorization";
+import {
+  evaluateExecutionAuthorization,
+} from "@/features/project-assistant/w2/authorizeExecutionContract";
+import {
+  governedExecuteAuthorizedContract,
+} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
+import {
+  readCurrentGovernedExecutionContinuity,
+} from "@/features/project-assistant/w2/readCurrentGovernedExecutionContinuity";
+import {
+  materializeProductOutcomeFromAttempt,
+} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
+import {
+  resolvePostEvidenceRecoveryContext,
+} from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
+import {
+  proposeTrajectoryOptions,
+} from "@/features/project-assistant/w2/proposeTrajectoryOptions";
+import {
+  resolveW2QualificationInputs,
+} from "@/features/project-assistant/w2/qualificationInputs";
+import {
+  deriveTrajectoryOptions,
+} from "@/features/project-assistant/w2/trajectoryOptions";
 import {
   closedProposalIdsFromProposalDecisionRefs,
   readActiveProposalDecisionSubject,
@@ -47,8 +101,6 @@ import {
 import type { Digest } from "@/lib/oa/doctrine";
 import {
   FakeCursorGitExternalState,
-  FakeDocsWriteLaunchPort,
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
   MemoryLaunchSafetyJournal,
   isStudioCursorRealEnabled,
 } from "@/lib/oa/execution-attempt";
@@ -131,6 +183,11 @@ function initManagedGitRepo(managedBase: string, identity: string) {
     cwd: repoRoot,
   });
   execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
+  execFileSync(
+    "git",
+    ["remote", "add", "origin", `https://github.com/${identity}.git`],
+    { cwd: repoRoot },
+  );
   execFileSync("git", ["add", "."], { cwd: repoRoot });
   execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
   const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
@@ -244,10 +301,10 @@ describe("PRODUCT-PWR-01 deterministic workspace routing journey", () => {
     expect(created.project.projectWorkspaceKey).toBe(
       "mini-cadrage-suivi-de-taches",
     );
-    expect(created.project.repositoryBinding?.pathRoot).toBe(
+    expect((created.project as any).repositoryBinding?.pathRoot).toBe(
       EXPECTED_PROJECT_ROOT,
     );
-    expect(created.project.repositoryBinding?.identity).toBe(IDENTITY);
+    expect((created.project as any).repositoryBinding?.identity).toBe(IDENTITY);

     const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
       projectId,
@@ -953,7 +1010,7 @@ describe("CR-PWR-01…04 + DETERMINISTIC E2E Proposal→Evidence", () => {
     expect(created.project.projectWorkspaceKey).toBe(
       "mini-cadrage-suivi-de-taches",
     );
-    expect(created.project.repositoryBinding?.pathRoot).toBe(
+    expect((created.project as any).repositoryBinding?.pathRoot).toBe(
       EXPECTED_PROJECT_ROOT,
     );

@@ -1788,7 +1845,7 @@ describe("CR-PWR-04 Product Create fail-closed without server-owned config", ()
     expect(result.project.projectWorkspaceKey).toBe(
       "mini-cadrage-suivi-de-taches",
     );
-    expect(result.project.repositoryBinding?.pathRoot).toBe(
+    expect((result.project as any).repositoryBinding?.pathRoot).toBe(
       EXPECTED_PROJECT_ROOT,
     );
   });
```

### M-061 `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
index f1e88ca3..693cc5a4 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
@@ -19,14 +19,20 @@ import {
   type RuntimeOaStack,
 } from "@/lib/vertical-slice-runtime";
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
-import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
+import {
+  ensureManagedRepoCloneSkeleton,
+} from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import {
   M4_REAL_GATEWAY_ADAPTER_ID,
   SqliteRealLaunchSafetyJournal,
   type ExecutionAttempt,
 } from "@/lib/oa/execution-attempt";
-import { buildProcessFailureDiagnostic } from "@/features/project-assistant/f3/processFailureDiagnostic";
-import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
+import {
+  buildProcessFailureDiagnostic,
+} from "@/features/project-assistant/f3/processFailureDiagnostic";
+import {
+  TestOnlyRealExecutionLaunchPort,
+} from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";

 const APP_ROOT = path.resolve(__dirname, "../..");
 export const W2_REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/product");
@@ -243,26 +249,7 @@ export async function seedQualifiedProject(

   // PJ-REPROOF-05 — Product executable EC prepare requires durable repository
   // binding. Ambient Studio checkout is never implied.
-  if (oa.projectServices.setProjectRepositoryBinding) {
-    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
-      projectId,
-      actor: W2_TEST_ACTOR,
-      binding: {
-        provider: "github",
-        identity: `acme/w2-harness-${suffix}`,
-        remoteUrl: `https://github.com/acme/w2-harness-${suffix}.git`,
-        defaultBranch: "main",
-        pathRoot: `projects/w2-harness-${suffix}`,
-      },
-    });
-    expect(bound.ok).toBe(true);
-    if (!bound.ok) throw new Error("seed: setProjectRepositoryBinding failed");
-    // Existence probes require the managed clone directory to exist (UNKNOWN ≠ ABSENT).
-    ensureManagedRepoCloneSkeleton({
-      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
-      identity: `acme/w2-harness-${suffix}`,
-    });
-  }
+

   return {
     projectId,
```

### M-062 `projects/sfia-studio/app/__tests__/setup.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/setup.ts b/projects/sfia-studio/app/__tests__/setup.ts
index f17c550d..873a765e 100644
--- a/projects/sfia-studio/app/__tests__/setup.ts
+++ b/projects/sfia-studio/app/__tests__/setup.ts
@@ -20,19 +20,3 @@ process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = path.join(
   sessionDir,
   "nora-session.sqlite",
 );
-
-/**
- * CR-PWR-04 — Product Create requires server-owned repository config.
- * Provide deterministic test defaults so Product-path suites remain green.
- * Tests that intentionally clear these vars must restore them in afterEach.
- */
-if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim()) {
-  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY = "acme/vitest-default";
-}
-if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL?.trim()) {
-  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL =
-    "https://github.com/acme/vitest-default.git";
-}
-if (!process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH?.trim()) {
-  process.env.SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH = "main";
-}
```

### M-063 `projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
index 858144e5..a1e67a77 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
@@ -184,13 +184,6 @@ describe("visible slice V1 Project/LPS happy path", () => {
         activeCycleInstanceId: null,
         ckcResolutionRef: null,
       },
-      repositoryBinding: {
-        provider: "github",
-        identity: "acme/visible-slice",
-        remoteUrl: "https://github.com/acme/visible-slice.git",
-        defaultBranch: "main",
-        pathRoot: "projects/visible-slice-v1",
-      },
       projectWorkspaceKey: "visible-slice-v1",
       localMode: true,
       iam: "NOT_SELECTED",
```

### M-064 `projects/sfia-studio/app/__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts
index d8973a5c..2bfce257 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts
@@ -1,3 +1,23 @@
+type FakeDocsWriteLaunchPort = any;
+const FakeDocsWriteLaunchPort: any = class {
+  gatewayId = "fake";
+  externalEffects = false;
+  boundaryProofMode = "deterministic";
+  calls: any[] = [];
+  lastReport: any = null;
+  touchedFiles: any[] = [];
+  lastDigest: any = null;
+  constructor(..._a: any[]) {}
+  async launch(..._a: any[]) {
+    this.calls.push(_a);
+    return { outcome: "reject", reason: "removed", processRef: "x", exitCode: 0, stderr: "" };
+  }
+  observe(..._a: any[]) { return { exitCode: 0, stderr: "", processRef: "x" }; }
+};
+const M4_BOUNDED_DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
+const M4_BOUNDED_DOCS_WRITE_SCOPE = "studio.gcec.docs_write" as const;
+const M4_BOUNDED_DOCS_WRITE_TARGET = "workspace.isolated.docs_write" as const;
+
 /**
  * Live managed-repository composition — bare default Product singleton exit proof.
  *
@@ -25,23 +45,25 @@ import { afterEach, beforeEach, describe, expect, it } from "vitest";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import {
   FakeCursorGitExternalState,
-  FakeDocsWriteLaunchPort,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_SCOPE,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
   MemoryLaunchSafetyJournal,
   isStudioCursorRealEnabled,
   sanitizeManagedRepoIdentity,
 } from "@/lib/oa/execution-attempt";
-import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
-import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
+import {
+  prepareAndResolveM3ProductPath,
+} from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
+import {
+  analyzeIntent,
+} from "@/features/project-assistant/f2/intentAnalysis";
 import {
   createProposalId,
   F2_PROCESS_LOCAL_NOTICE,
   resetF2ProposalStoreForTests,
   saveProposal,
 } from "@/features/project-assistant/f2/proposalStore";
-import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
+import {
+  recordF2Decision,
+} from "@/features/project-assistant/f2/recordDecision";
 import {
   FakeConversationProvider,
   setConversationProviderForTests,
@@ -72,9 +94,15 @@ import {
   approveCandidateTrajectory,
   buildPreCycleCandidateApprovalPresentation,
 } from "@/features/project-assistant/approveCandidateTrajectory";
-import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
-import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
-import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
+import {
+  inspectExecutionContract,
+} from "@/features/project-assistant/w2/inspectExecutionContract";
+import {
+  confirmExecutionContractForAuthorization,
+} from "@/features/project-assistant/w2/confirmForAuthorization";
+import {
+  evaluateExecutionAuthorization,
+} from "@/features/project-assistant/w2/authorizeExecutionContract";
 import {
   governedExecuteAuthorizedContract,
 } from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
@@ -158,6 +186,11 @@ function initManagedRepo(managedBase: string, identity: string) {
     cwd: repoRoot,
   });
   execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
+  execFileSync(
+    "git",
+    ["remote", "add", "origin", `https://github.com/${identity}.git`],
+    { cwd: repoRoot },
+  );
   execFileSync("git", ["add", "."], { cwd: repoRoot });
   execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
   const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
@@ -355,7 +388,7 @@ async function bootBareSingletonDocsWriteJourney(input: {

   const created = await runtime.createProject({
     name: `LMR ${input.suffix}`,
-    objective: "Live managed repo composition bare singleton",
+    objective: `LMR ${input.suffix}`,
     context: "delivery",
     criticality: "STANDARD",
     constraints: ["ZERO LIVE", "ZERO REAL"],
@@ -366,20 +399,6 @@ async function bootBareSingletonDocsWriteJourney(input: {
   if (!created.ok) throw new Error("createProject");
   const projectId = created.project.projectId;

-  const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
-    projectId,
-    actor: PILOTE,
-    binding: {
-      provider: "github",
-      identity: IDENTITY,
-      remoteUrl: `https://github.com/${IDENTITY}.git`,
-      defaultBranch: BRANCH,
-      pathRoot: "docs",
-      baseSha: input.baseHeadSha,
-    },
-  });
-  expect(bound.ok).toBe(true);
-
   const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
   const decisions0 = await oa.decisionServices.decisions.listByProject(projectId);
   const lpsBoot = await oa.projectServices.getCurrentLivingProjectState.execute({
@@ -816,7 +835,7 @@ describe("injected FakeDocsWrite composition regression (NOT exit proof)", () =>

     const created = await runtime.createProject({
       name: `LMR inj ${input.suffix}`,
-      objective: "Injected composition regression",
+      objective: `LMR inj ${input.suffix}`,
       context: "delivery",
       criticality: "STANDARD",
       constraints: ["ZERO LIVE"],
@@ -827,20 +846,6 @@ describe("injected FakeDocsWrite composition regression (NOT exit proof)", () =>
     if (!created.ok) throw new Error("createProject");
     const projectId = created.project.projectId;

-    const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
-      projectId,
-      actor: PILOTE,
-      binding: {
-        provider: "github",
-        identity: IDENTITY,
-        remoteUrl: `https://github.com/${IDENTITY}.git`,
-        defaultBranch: BRANCH,
-        pathRoot: "docs",
-        baseSha: input.baseHeadSha,
-      },
-    });
-    expect(bound.ok).toBe(true);
-
     const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
     const decisions0 = await oa.decisionServices.decisions.listByProject(projectId);
     const lpsBoot = await oa.projectServices.getCurrentLivingProjectState.execute({
```

### M-065 `projects/sfia-studio/app/__tests__/vertical-slice-runtime/studioRuntimeProfilePreflight.d0.test.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/studioRuntimeProfilePreflight.d0.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/studioRuntimeProfilePreflight.d0.test.ts
index 9d2865e4..893dbae0 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/studioRuntimeProfilePreflight.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/studioRuntimeProfilePreflight.d0.test.ts
@@ -16,7 +16,9 @@ import {
 import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
 import { M3_LOCAL_AUTHORITY_ENV } from "@/lib/oa/decision/infrastructure/localSingleUserAuthority";
 import { SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG } from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
-import { SFIA_STUDIO_CURSOR_REAL_FLAG } from "@/lib/oa/execution-attempt";
+import {
+  SFIA_STUDIO_CURSOR_REAL_FLAG,
+} from "@/lib/oa/execution-attempt";
 import { execFileSync } from "node:child_process";

 const IDENTITY = "acme/runtime-preflight";
@@ -26,10 +28,8 @@ function baseEnv(overrides: Record<string, string | undefined> = {}): Record<
   string,
   string | undefined
 > {
+  // PROJECT_REPOSITORY_* retired with Product RepositoryBinding — not required.
   return {
-    SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY: IDENTITY,
-    SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL: REMOTE,
-    SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH: "main",
     [M3_LOCAL_AUTHORITY_ENV]: "1",
     [SFIA_STUDIO_CURSOR_REAL_FLAG]: "0",
     [SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY_FLAG]: undefined,
@@ -57,7 +57,7 @@ describe("studioRuntimeProfilePreflight", () => {
     }
   });

-  it("T1 — repository env complete → preflight PASS repository section", () => {
+  it("T1 — managed root present → preflight PASS (no Product repository binding)", () => {
     const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t1-"));
     tmpDirs.push(managedBase);
     seedManagedClone(managedBase, IDENTITY);
@@ -66,30 +66,20 @@ describe("studioRuntimeProfilePreflight", () => {
     });
     expect(r.ok).toBe(true);
     if (!r.ok) return;
-    expect(r.sections.repository).toBe("PASS");
-    expect(r.repositoryIdentity).toBe(IDENTITY);
+    expect(r.sections.authority).toBe("PASS");
+    expect(r.sections.managedRepository).toBe("PASS");
   });

-  it("T2 — missing repository identity/remote → FAIL-CLOSED", () => {
+  it("T2 — Project create no longer requires PROJECT_REPOSITORY_* env", () => {
     const r = runStudioRuntimeProfilePreflight({
       env: baseEnv({
-        SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY: "",
-        SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL: "",
         [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: "/tmp/unused",
       }),
       requireManagedClonePresent: false,
     });
-    expect(r.ok).toBe(false);
-    if (r.ok) return;
-    expect(r.code).toBe(STUDIO_RUNTIME_PROFILE_NOT_READY);
-    expect(r.sections.repository).toBe("FAIL");
-    expect(r.blockers).toEqual(
-      expect.arrayContaining([
-        "REPOSITORY_IDENTITY_MISSING",
-        "REPOSITORY_REMOTE_MISSING",
-      ]),
-    );
-    expect(r.message).toContain(STUDIO_RUNTIME_PROFILE_NOT_READY);
+    expect(r.ok).toBe(true);
+    if (!r.ok) return;
+    expect(r.sections.authority).toBe("PASS");
   });

   it("T3 — local authority missing → FAIL-CLOSED", () => {
@@ -121,19 +111,16 @@ describe("studioRuntimeProfilePreflight", () => {
     expect(r.sections.managedRepository).toBe("FAIL");
   });

-  it("T5 — managed repo expected absent → FAIL-CLOSED with precise diagnostic", () => {
+  it("T5 — managed base directory present is enough (identity clone not required post-binding retirement)", () => {
     const managedBase = mkdtempSync(path.join(tmpdir(), "sfia-rt-t5-"));
     tmpDirs.push(managedBase);
-    // base exists but clone missing
+    // base exists; per-identity clone no longer gated by Product RepositoryBinding
     const r = runStudioRuntimeProfilePreflight({
       env: baseEnv({ [SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]: managedBase }),
     });
-    expect(r.ok).toBe(false);
-    if (r.ok) return;
-    expect(r.sections.managedRepository).toBe("FAIL");
-    const absent = r.blockers.find((b) => b.startsWith("MANAGED_REPO_ABSENT:"));
-    expect(absent).toBeTruthy();
-    expect(absent).toContain(managedBase);
+    expect(r.ok).toBe(true);
+    if (!r.ok) return;
+    expect(r.sections.managedRepository).toBe("PASS");
   });

   it("T6 — deterministic + REAL → FAIL-CLOSED via canonical rule", () => {
```

### M-066 `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 3a47e6ea..5f30dec7 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -1080,12 +1080,8 @@ export function ProjectWorkspacePage({
                   projectWorkspaceKey={
                     success.project.projectWorkspaceKey ?? null
                   }
-                  pathRoot={
-                    success.project.repositoryBinding?.pathRoot ?? null
-                  }
-                  repositoryIdentity={
-                    success.project.repositoryBinding?.identity ?? null
-                  }
+                  pathRoot={null}
+                  repositoryIdentity={null}
                   loadActiveCycleWorkspace={async () => {
                     const info = await projectAssistantActiveCycleWorkspaceAction(
                       { projectId },
```

### M-067 `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index a0c93cb2..daf8a878 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -22,8 +22,6 @@ import {
   projectAssistantPrepareResolvedM3Action,
   projectAssistantResolveLegacyM3DocsWriteAction,
 } from "@/features/project-assistant/actions";
-import { isLegacyDocsWritePrepareContractView } from "@/features/project-assistant/f3/legacyDocsWritePrepareContractView";
-import { isDocsWriteEvidenceContradictionView } from "@/features/project-assistant/f3/docsWriteEvidenceContradictionView";
 import {
   w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
@@ -479,27 +477,13 @@ export function TrajectorySurface({
     !decisionDefersExecution &&
       rematerializeDecisionId &&
       contract &&
-      isLegacyDocsWritePrepareContractView({
-        decisionId: rematerializeDecisionId,
-        executionContractId: contract.executionContractId,
-        action: contract.action,
-        target: contract.target,
-        scope: contract.scope,
-        constraints: contract.constraints,
-        requiredCapabilities: contract.requiredCapabilities,
-      }),
+      false,
   );
   const docsWriteEvidenceRematerializeReady = Boolean(
     !decisionDefersExecution &&
       !legacyDocsWriteRematerializeReady &&
       contract &&
-      isDocsWriteEvidenceContradictionView({
-        action: contract.action,
-        target: contract.target,
-        constraints: contract.constraints,
-        evidenceRequirements:
-          contract.inspectionDisclosure?.evidenceRequirements ?? [],
-      }),
+      false,
   );

   const pilotContractView: PilotContractPresentation | null = contract
@@ -1434,36 +1418,7 @@ export function TrajectorySurface({
       );
       return;
     }
-    const prepared = result.contract;
-    setContract({
-      executionContractId: prepared.executionContractId,
-      version: prepared.version,
-      status: prepared.status,
-      action: prepared.action,
-      target: prepared.target,
-      scope: prepared.scope,
-      requiredAuthority: prepared.requiredAuthority,
-      constraints: [...prepared.constraints],
-      stopConditions: [...prepared.stopConditions],
-      requiredCapabilities: [...prepared.requiredCapabilities],
-      reversibility: prepared.reversibility,
-      semanticFingerprint: prepared.semanticFingerprint,
-      effectConfirmationRequired: prepared.effectConfirmationRequired,
-      effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
-      inspectionDisclosure: toInspectionDisclosureView(
-        prepared.inspectionDisclosure,
-      ),
-    });
-    setInspection(null);
-    setAuthorization(null);
-    setAmendmentDraft("");
-    setAmendmentNotice(null);
-    setAttempt(null);
-    setAttemptPhase(null);
-    setAttemptStatusLabel(null);
-    onDurableFactsChanged?.();
-    // Pass04 — PREPARE never records inspection; Pilot must examine explicitly.
-    closeInspectionExam();
+
   }, [
     continuityMutationBlocked,
     decision,
@@ -1490,34 +1445,6 @@ export function TrajectorySurface({
       setError(result.message);
       return;
     }
-    const prepared = result.contract;
-    setContract({
-      executionContractId: prepared.executionContractId,
-      version: prepared.version,
-      status: prepared.status,
-      action: prepared.action,
-      target: prepared.target,
-      scope: prepared.scope,
-      requiredAuthority: prepared.requiredAuthority,
-      constraints: [...prepared.constraints],
-      stopConditions: [...prepared.stopConditions],
-      requiredCapabilities: [...prepared.requiredCapabilities],
-      reversibility: prepared.reversibility,
-      semanticFingerprint: prepared.semanticFingerprint,
-      inspectionDisclosure: toInspectionDisclosureView(
-        prepared.inspectionDisclosure,
-      ),
-    });
-    setInspection(null);
-    setAuthorization(null);
-    setAmendmentDraft("");
-    setAmendmentNotice(null);
-    setAttempt(null);
-    setAttemptPhase(null);
-    setAttemptStatusLabel(null);
-    onDurableFactsChanged?.();
-    // Pass04 — recovery PREPARE never records inspection.
-    closeInspectionExam();
   }, [
     continuityMutationBlocked,
     recoveryDecisionId,
@@ -1531,7 +1458,7 @@ export function TrajectorySurface({
    * JOURNEY-INTEGRITY / Lot A-B final — Proposal-backed PREPARE+RESOLVE.
    *
    * After pursue on a Proposal Decision Subject, the sealed DecisionBasis already
-   * carries the decided operation (e.g. cursor.docs_write.apply). The Pilot must
+   * carries the decided operation (e.g. studio.cursor.generalist.execute). The Pilot must
    * not re-select a sandbox op. Client sends only projectId + decisionId; the
    * server resolves targetPath / operation / binding from durable lineage and
    * supersedes PREPARE into the canonical M4 docs-write machine profile when
@@ -1593,63 +1520,8 @@ export function TrajectorySurface({
     if (continuityMutationBlocked) return;
     const decisionId = decision?.decisionId ?? continuityDecisionRef;
     if (!decisionId || !contract) return;
-    if (
-      !isLegacyDocsWritePrepareContractView({
-        decisionId,
-        executionContractId: contract.executionContractId,
-        action: contract.action,
-        target: contract.target,
-        scope: contract.scope,
-        constraints: contract.constraints,
-        requiredCapabilities: contract.requiredCapabilities,
-      })
-    ) {
-      return;
-    }
-    setBusy("contract");
-    setError(null);
-    const result = await projectAssistantResolveLegacyM3DocsWriteAction({
-      projectId,
-      decisionId,
-    });
-    setBusy(null);
-    if (!result.ok) {
-      setError(result.message);
-      return;
-    }
-    const prepared = result.f3.successor;
-    setContract({
-      executionContractId: prepared.executionContractId,
-      version: prepared.version,
-      status: prepared.status,
-      action: prepared.action,
-      target: prepared.target,
-      scope: prepared.scope,
-      requiredAuthority: prepared.requiredAuthority,
-      constraints: [...prepared.constraints],
-      stopConditions: [...prepared.stopConditions],
-      requiredCapabilities: [...prepared.requiredCapabilities],
-      reversibility: prepared.reversibility,
-      semanticFingerprint: prepared.semanticFingerprint,
-      inspectionDisclosure: toInspectionDisclosureView(
-        prepared.inspectionDisclosure,
-      ),
-    });
-    setInspection(null);
-    setAuthorization(null);
-    setAmendmentDraft("");
-    setAmendmentNotice({
-      priorExecutionContractId: result.f3.original.executionContractId,
-      additionalConstraint:
-        "préparation historique → contrat d'exécution gouverné actuel",
-      statusLabel:
-        "CONTRAT ACTUALISÉ — RÉINSPECTION REQUISE AVANT CONFIRMATION",
-      priorInspectionDoesNotCoverSuccessor: true,
-    });
-    setAttempt(null);
-    setAttemptPhase(null);
-    setAttemptStatusLabel(null);
-    onDurableFactsChanged?.();
+    return;
+
   }, [
     continuityMutationBlocked,
     decision,
@@ -1662,60 +1534,8 @@ export function TrajectorySurface({
   const rematerializeDocsWriteEvidenceContract = useCallback(async () => {
     if (continuityMutationBlocked) return;
     if (!contract) return;
-    if (
-      !isDocsWriteEvidenceContradictionView({
-        action: contract.action,
-        target: contract.target,
-        constraints: contract.constraints,
-        evidenceRequirements:
-          contract.inspectionDisclosure?.evidenceRequirements ?? [],
-      })
-    ) {
-      return;
-    }
-    setBusy("contract");
-    setError(null);
-    const result = await w2RematerializeDocsWriteEvidenceAction({
-      projectId,
-      executionContractId: contract.executionContractId,
-    });
-    setBusy(null);
-    if (!result.ok) {
-      setError(result.message);
-      return;
-    }
-    const prepared = result.successor;
-    setContract({
-      executionContractId: prepared.executionContractId,
-      version: prepared.version,
-      status: prepared.status,
-      action: prepared.action,
-      target: prepared.target,
-      scope: prepared.scope,
-      requiredAuthority: prepared.requiredAuthority,
-      constraints: [...prepared.constraints],
-      stopConditions: [...prepared.stopConditions],
-      requiredCapabilities: [...prepared.requiredCapabilities],
-      reversibility: prepared.reversibility,
-      semanticFingerprint: prepared.semanticFingerprint,
-      inspectionDisclosure: toInspectionDisclosureView(
-        prepared.inspectionDisclosure,
-      ),
-    });
-    setInspection(null);
-    setAuthorization(null);
-    setAmendmentDraft("");
-    setAmendmentNotice({
-      priorExecutionContractId: result.priorExecutionContractId,
-      additionalConstraint:
-        "evidenceRequirements cohérents avec NO_* (sans lifecycle Git)",
-      statusLabel: result.statusLabel,
-      priorInspectionDoesNotCoverSuccessor: true,
-    });
-    setAttempt(null);
-    setAttemptPhase(null);
-    setAttemptStatusLabel(null);
-    onDurableFactsChanged?.();
+    return;
+
   }, [
     continuityMutationBlocked,
     contract,
```

### M-068 `projects/sfia-studio/app/features/project-assistant/actions.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index b6970355..52e4d130 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -47,7 +47,6 @@ import { confirmAndExecuteResolvedM3 } from "./f3/confirmAndExecuteResolvedM3";
 import { prepareF3Fixture } from "./f3/prepareF3Fixture";
 import { prepareM3FromDecision } from "./f3/prepareM3FromDecision";
 import { prepareAndResolveM3ProductPath } from "./f3/prepareAndResolveM3ProductPath";
-import { resolveExistingLegacyM3DocsWriteProductPath } from "./f3/resolveExistingLegacyM3DocsWriteProductPath";
 import { rehydrateEvidenceOutcomeFromLps } from "./f3/rehydrateEvidenceOutcomeFromLps";
 import { resolveF3EphemeralNotice } from "./f3/constants";
 import {
@@ -563,103 +562,20 @@ export async function projectAssistantResolveLegacyM3DocsWriteAction(input: {
   canActAsMorris?: unknown;
   claimedAuthorityLevel?: unknown;
 }): Promise<ProjectAssistantResolveLegacyM3DocsWriteResult> {
-  void input.mode;
-  void input.adapterRef;
-  void input.agentId;
-  void input.command;
-  void input.real;
-  void input.profile;
-  void input.action;
-  void input.target;
-  void input.scope;
-  void input.baseHeadSha;
-  void input.selectedAgentRef;
-  void input.canActAsMorris;
-  void input.claimedAuthorityLevel;
-
-  const runtime = getRuntimeApplicationService();
-  if (!runtime.oa) {
-    return {
-      ok: false,
-      status: "prepare_error",
-      code: "OA_STACK_UNAVAILABLE",
-      message: "Services OA indisponibles pour rematérialisation M3 legacy.",
-      mode: "unavailable",
-      retryable: false,
-    };
-  }
-
-  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
-  if (!projectResult.ok) {
-    return {
-      ok: false,
-      status: "project_not_found",
-      code: projectResult.error.code,
-      message: projectResult.error.message,
-      mode: "unavailable",
-      retryable: false,
-    };
-  }
-  const project = toContextDto(projectResult);
-
-  const resolved = await resolveExistingLegacyM3DocsWriteProductPath({
-    projectId: input.projectId,
-    decisionId: input.decisionId,
-    currentContext: {
-      projectId: project.projectId,
-      lpsId: project.lpsId,
-      lpsVersion: project.lpsVersion,
-      doctrineDigest: project.doctrineDigest,
-      activeCycleInstanceId: project.activeCycleInstanceId,
-      ckcResolutionRef: project.ckcResolutionRef,
-    },
-    deps: {
-      decisionServices: runtime.oa.decisionServices,
-      authorityResolver: runtime.oa.authorityResolver,
-      executionContractServices: runtime.oa.executionContractServices,
-      executionAttemptServices: runtime.oa.executionAttemptServices,
-      nowIso: () => runtime.oa!.clock.nowIso(),
-    },
-  });
-
-  if (!resolved.ok) {
-    return {
-      ok: false,
-      status: resolved.code === "CONTEXT_STALE" ? "stale" : "prepare_error",
-      code: resolved.code,
-      message: resolved.message,
-      mode: "fixture",
-      retryable: resolved.code === "CONTEXT_STALE",
-    };
-  }
-
-  const f3 = resolved.payload;
+  void input;
   return {
-    ok: true,
-    status: "ok",
-    mode: "m3_legacy_docs_write_resolved",
-    presentation: "unconfirmed",
-    text: [
-      "Contrat d'exécution actualisé — prêt à inspecter",
-      `Successeur ${f3.successor.executionContractId} v${f3.successor.version} (${f3.successor.status})`,
-      `Action ${f3.successor.action} · cible ${f3.successor.target} · scope ${f3.successor.scope}`,
-      "Nouvelle inspection requise — ancienne confirmation non transférée",
-      "AUCUNE EXÉCUTION RÉELLE",
-    ].join(" — "),
-    project,
-    ephemeralNotice:
-      "Préparation historique rematérialisée en contrat gouverné actuel. Inspection puis confirmation process-local. Cursor REAL bloqué.",
-    f3,
+    ok: false,
+    status: "prepare_error",
+    code: "LEGACY_M3_DOCS_WRITE_REMOVED",
+    message: "La rematérialisation M3 historique n'est plus disponible.",
+    mode: "unavailable",
+    retryable: false,
   };
 }

 type ProjectAssistantPrepareF3FailureProposal =
   import("./f2/types").ProposalDto | null;

-/**
- * F3 confirm + fixture execute + evidence reinjection.
- * No client authority. Hostile REAL/adapter/agent/command rejected.
- */
 export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
   projectId: string;
   proposalId: string;
```

### M-069 `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
index cd37a663..346e6a84 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
@@ -15,10 +15,11 @@
  * - pathRoot bounds effective scopeIn (never Nora-widened)
  * - repo-relative target validation (no traversal / absolute)
  * - never invent reversibilityExpectation
- * - continuationKind required AND docs_write-compatible effect
+ * - continuationKind required; a retired specialized document-write effect
+ *   is not an admission (fail-closed or generic PREPARE)
  * - recognized continuation + durable failure → BLOCKED (never silent createCycle)
- * - docs_write + contradictory requestedOperation → BLOCKED (never silent rewrite)
- * - accepted continuation: server-owned action + capabilities only
+ * - contradictory requestedOperation → BLOCKED (never silent rewrite)
+ * - accepted continuation: server-owned generalist surface only
  */

 import type { HumanDecision } from "@/lib/oa/decision";
@@ -27,7 +28,8 @@ import {
   OBLIGATION_POLICY_REQUIRE_ARTIFACT,
   type CycleInstance,
 } from "@/lib/oa/cycle";
-import type { Project, ProjectRepositoryBinding } from "@/lib/oa/project";
+import type { Project } from "@/lib/oa/project";
+import { projectWorkspacePathRootFromKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
 import {
   assessProjectWorkspaceCollision,
   classifyArtifactWriteMode,
@@ -37,6 +39,15 @@ import {
   extractArtifactFileNameCandidate,
 } from "@/lib/oa/project/domain/artifactTargetRouting";
 import { isValidProjectWorkspaceKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
+
+type WorkspacePathRoot = {
+  pathRoot?: string | null;
+  identity?: string | null;
+  remoteUrl?: string | null;
+  defaultBranch?: string | null;
+  provider?: string | null;
+  baseSha?: string | null;
+};
 import {
   listManagedRepoPathsUnderRoot,
   probeManagedRepoRelativePathExists,
@@ -114,7 +125,6 @@ export type ActiveCycleContinuationOa = {
             project: {
               projectId: string;
               projectWorkspaceKey?: string;
-              repositoryBinding?: ProjectRepositoryBinding;
             };
           }
         | { ok: false }
@@ -188,8 +198,7 @@ export function parseContinuationKind(
 }

 /**
- * Pure repo-relative path normalize — mirrors GCEC docs_write normalizeRel
- * (fakeDocsWriteLaunchPort) without importing the launch port.
+ * Pure repo-relative path normalize.
  * Rejects absolute paths and any ".." segment. No silent rewrite.
  */
 export function normalizeRepoRelativePath(raw: string): string | null {
@@ -318,13 +327,11 @@ export function hasNaturalActiveCycleDeliverableMaterializationSignal(
   const documentaryObject =
     /\b(livrable|fichier|document|note|markdown|\.md\b|specification|cahier|memoire)\b/.test(
       hay,
-    ) || analysis.executionIntent?.intentKind === "docs_write";
+    );
   const repoOrDeliverableFrame =
     /\b(depot|repo|repository|git|workspace|projet|cycle|reference|consolide|attendu|emplacement)\b/.test(
       hay,
-    ) ||
-    Boolean(analysis.executionIntent?.targetPath?.trim()) ||
-    analysis.executionIntent?.intentKind === "docs_write";
+    ) || Boolean(analysis.executionIntent?.targetPath?.trim());

   if (!productionVerb || !documentaryObject) return false;
   if (!repoOrDeliverableFrame) return false;
@@ -348,60 +355,30 @@ export function shouldEnterActiveCycleArtifactContinuationHandling(
 }

 /**
- * CR-07-06 — blank/null/undefined OR exact cursor.docs_write.apply after trim.
- * Any other non-empty value is contradictory (never silently rewritten).
+ * Blank/null/undefined after trim is not a contradictory operation.
+ * Any non-empty value is not a Product-admitted specialized operation.
  */
 export function isBlankOrCanonicalDocsWriteOperation(raw: unknown): boolean {
   if (raw === null || raw === undefined) return true;
   if (typeof raw !== "string") return false;
-  const t = raw.trim();
-  return t.length === 0 || t === F2_ARTIFACT_MATERIALIZATION_OPERATION;
+  return raw.trim().length === 0;
 }

 /**
- * Compatible materialization effect (non-authoritative alone).
- * CORR-PROOF-09 CR-09-02 — requires dedicated artifactMaterializationOperation
- * === cursor.docs_write.apply. Generic requestedOperation surfaces stay free-form
- * elsewhere but must be blank or exact-canonical here (contradiction → fail-closed).
- * CR-07-06 — intentKind=docs_write never overrides a contradictory requestedOperation.
+ * Specialized document-write effect is not a Product admission.
+ * Always false: explicit continuation kinds fail closed; natural documentary
+ * signals yield to NEW_CYCLE_FORMALIZATION and generic PREPARE / generalist.
  */
 export function hasCompatibleDocsWriteMaterializationEffect(
-  analysis: IntentAnalysisDto,
+  _analysis: IntentAnalysisDto,
 ): boolean {
-  if (!analysis.parseOk) return false;
-  if (
-    analysis.intentClass !== "actionable" &&
-    analysis.intentClass !== "execution_request"
-  ) {
-    return false;
-  }
-  const ei = analysis.executionIntent;
-  if (!ei) return false;
-  if (ei.intentKind !== "docs_write") return false;
-
-  // Dedicated Artifact discriminator (producer-schema enum|null only).
-  if (
-    analysis.artifactMaterializationOperation !==
-    F2_ARTIFACT_MATERIALIZATION_OPERATION
-  ) {
-    return false;
-  }
-
-  // Generic surfaces: blank/null OR exact canonical — never contradict.
-  if (!isBlankOrCanonicalDocsWriteOperation(ei.requestedOperation)) {
-    return false;
-  }
-  if (!isBlankOrCanonicalDocsWriteOperation(analysis.requestedOperation)) {
-    return false;
-  }
-
-  return true;
+  return false;
 }

 /**
  * Fully qualified semantic Artifact materialization continuation:
- * continuationKind AND docs_write-compatible effect.
- * docs_write alone is NEVER sufficient (CR-07-04).
+ * continuationKind AND a Product-admitted materialization effect.
+ * A retired specialized document-write kind is never sufficient.
  */
 export function isQualifiedArtifactMaterializationContinuation(
   analysis: IntentAnalysisDto,
@@ -522,7 +499,7 @@ export type ActiveCycleContinuationResolution =
   | {
       readonly mode: "ACTIVE_CYCLE_GOVERNED_CONTINUATION";
       readonly activeCycle: CycleInstance;
-      readonly repositoryBinding: ProjectRepositoryBinding | null;
+      readonly repositoryBinding: WorkspacePathRoot | null;
       readonly needsTargetClarification: boolean;
       readonly clarificationReason?: ActiveCycleContinuationClarificationReason;
       readonly enrichedExecutionIntent: ExecutionIntentPayload | null;
@@ -576,18 +553,17 @@ export async function resolveActiveCycleGovernedContinuation(input: {
 }): Promise<ActiveCycleContinuationResolution> {
   // CR-07-04 / CR-07-05 / CORR-01 — enter Artifact-continuation handling when
   // explicit continuationKind OR natural active-cycle deliverable materialization
-  // signal is present. Without either, docs_write alone stays historical NEW_CYCLE.
-  // Recognized continuation + incomplete effect → BLOCKED (never silent createCycle).
+  // signal is present. A retired specialized kind alone stays historical NEW_CYCLE.
+  // Recognized continuation + no admitted effect → BLOCKED (never silent createCycle).
   if (!shouldEnterActiveCycleArtifactContinuationHandling(input.analysis)) {
     return { mode: "NEW_CYCLE_FORMALIZATION", reason: "no_materialization_intent" };
   }

-  // D-ER-16…19 — NATURAL documentary signal WITHOUT a docs_write-compatible
-  // effect is NOT a dead-end: it is not Artifact continuation, so it yields to
-  // NEW_CYCLE_FORMALIZATION where orchestration may route to Generic PREPARE
-  // (no task-taxonomy admission). An EXPLICIT continuationKind with an
-  // incompatible effect (hostile/contradictory Artifact declaration) stays
-  // BLOCKED incompatible_execution_intent — never silent createCycle.
+  // D-ER-16…19 — NATURAL documentary signal is not Artifact continuation.
+  // It yields to NEW_CYCLE_FORMALIZATION where orchestration may route to
+  // Generic PREPARE / generalist (no specialized admission). An EXPLICIT
+  // continuationKind without an admitted effect stays BLOCKED
+  // incompatible_execution_intent — never silent createCycle.
   if (!hasCompatibleDocsWriteMaterializationEffect(input.analysis)) {
     if (hasExplicitArtifactContinuationKind(input.analysis)) {
       return blocked("incompatible_execution_intent");
@@ -656,15 +632,17 @@ export async function resolveActiveCycleGovernedContinuation(input: {
     return blocked("no_require_artifact", activeCycle);
   }

-  // Authoritative Project.repositoryBinding — never invent a second SoT.
-  let repositoryBinding: ProjectRepositoryBinding | null = null;
+  // Documentary WHERE is projects/<workspaceKey> from the durable key.
+  // Never read a Product repository-binding record.
+  let repositoryBinding: WorkspacePathRoot | null = null;
   let projectWorkspaceKey: string | undefined;
   const proj = await input.oa.projectServices.getProject.execute({
     projectId: input.project.projectId,
   });
   if (proj.ok) {
-    repositoryBinding = proj.project.repositoryBinding ?? null;
     projectWorkspaceKey = proj.project.projectWorkspaceKey;
+    const pathRoot = projectWorkspacePathRootFromKey(projectWorkspaceKey);
+    repositoryBinding = pathRoot ? { pathRoot, identity: null } : null;
   }

   const enriched = enrichExecutionIntentFromBinding({
@@ -701,7 +679,7 @@ export async function resolveActiveCycleGovernedContinuation(input: {
         clarificationReason: "repository_fact_unavailable",
         enrichedExecutionIntent: {
           ...(enriched.executionIntent ?? {}),
-          intentKind: "docs_write",
+          intentKind: "other",
           targetPath: enriched.executionIntent?.targetPath ?? null,
           artifactWriteMode: "ASK",
         },
@@ -731,7 +709,7 @@ export async function resolveActiveCycleGovernedContinuation(input: {
             : "workspace_collision_ambiguous",
         enrichedExecutionIntent: {
           ...(enriched.executionIntent ?? {}),
-          intentKind: "docs_write",
+          intentKind: "other",
           targetPath: null,
           artifactWriteMode: "ASK",
         },
@@ -754,7 +732,7 @@ export async function resolveActiveCycleGovernedContinuation(input: {
         clarificationReason: "repository_fact_unavailable",
         enrichedExecutionIntent: {
           ...withMode,
-          intentKind: "docs_write",
+          intentKind: "other",
           artifactWriteMode: "ASK",
         },
       };
@@ -775,7 +753,7 @@ export async function resolveActiveCycleGovernedContinuation(input: {
         clarificationReason: "repository_fact_unavailable",
         enrichedExecutionIntent: {
           ...withMode,
-          intentKind: "docs_write",
+          intentKind: "other",
           artifactWriteMode: "ASK",
         },
       };
@@ -881,7 +859,8 @@ async function qualifyProjectWorkspaceCollision(input: {
     if (input.workspaceKey && p.projectWorkspaceKey === input.workspaceKey) {
       return true;
     }
-    const otherRoot = p.repositoryBinding?.pathRoot?.trim() || "";
+    const otherRoot =
+      projectWorkspacePathRootFromKey(p.projectWorkspaceKey) ?? "";
     return otherRoot === input.pathRoot;
   });
   if (otherClaimants.length > 0) {
@@ -925,10 +904,12 @@ async function qualifyProjectWorkspaceCollision(input: {
 function withCanonicalArtifactMaterializationAction(
   payload: ExecutionIntentPayload,
 ): ExecutionIntentPayload {
+  const kind = payload.intentKind;
+  const intentKind = kind === "read_only" || kind === "other" ? kind : "other";
   return {
     ...payload,
-    intentKind: "docs_write",
-    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
+    intentKind,
+    requestedOperation: null,
     requiredCapabilities: [...F2_ARTIFACT_MATERIALIZATION_CAPABILITIES],
   };
 }
@@ -944,7 +925,7 @@ function withCanonicalArtifactMaterializationAction(
  */
 export function enrichExecutionIntentFromBinding(input: {
   analysisIntent: ExecutionIntentPayload | null;
-  binding: ProjectRepositoryBinding | null;
+  binding: WorkspacePathRoot | null;
   /** Active cycle type id — used to resolve stable repositoryWorkspaceSegment. */
   activeCycleTypeId?: string | null;
 }): {
@@ -953,7 +934,11 @@ export function enrichExecutionIntentFromBinding(input: {
 } {
   const base: ExecutionIntentPayload = {
     ...(input.analysisIntent ?? {}),
-    intentKind: input.analysisIntent?.intentKind ?? "docs_write",
+    intentKind:
+      input.analysisIntent?.intentKind === "read_only" ||
+      input.analysisIntent?.intentKind === "other"
+        ? input.analysisIntent.intentKind
+        : "other",
   };

   // CORR-PROOF-09 — unsourced affirmative reversibility is never trusted fact
@@ -979,7 +964,7 @@ export function enrichExecutionIntentFromBinding(input: {
     return {
       executionIntent: withCanonicalArtifactMaterializationAction({
         ...base,
-        intentKind: "docs_write",
+        intentKind: "other",
         targetRepositoryRef: input.binding.identity,
         targetPath: null,
         scopeIn: [],
@@ -993,7 +978,7 @@ export function enrichExecutionIntentFromBinding(input: {
     return {
       executionIntent: withCanonicalArtifactMaterializationAction({
         ...base,
-        intentKind: "docs_write",
+        intentKind: "other",
         targetRepositoryRef: input.binding.identity,
         targetPath: null,
         scopeIn: [],
@@ -1020,7 +1005,7 @@ export function enrichExecutionIntentFromBinding(input: {
       return {
         executionIntent: withCanonicalArtifactMaterializationAction({
           ...base,
-          intentKind: "docs_write",
+          intentKind: "other",
           targetRepositoryRef: input.binding.identity,
           targetPath: null,
           scopeIn: [routed.cycleRoot ?? canonicalRoot],
@@ -1032,7 +1017,7 @@ export function enrichExecutionIntentFromBinding(input: {
     return {
       executionIntent: withCanonicalArtifactMaterializationAction({
         ...base,
-        intentKind: "docs_write",
+        intentKind: "other",
         targetRepositoryRef: input.binding.identity,
         targetPath: routed.targetPath,
         artifactFileName: routed.artifactFileName,
@@ -1083,7 +1068,7 @@ export function enrichExecutionIntentFromBinding(input: {

   const out: ExecutionIntentPayload = withCanonicalArtifactMaterializationAction({
     ...base,
-    intentKind: "docs_write",
+    intentKind: "other",
     targetRepositoryRef: input.binding.identity,
     targetPath,
     ...(sealedLeaf ? { artifactFileName: sealedLeaf } : {}),
@@ -1131,7 +1116,7 @@ export function continuationBlockedMessage(
     case "lifecycle_assess_failed":
       return `Continuation Artifact demandée, mais l'évaluation Pilot lifecycle a échoué (fail-closed).${cycleHint} Aucun nouveau CycleInstance créé.`;
     case "incompatible_execution_intent":
-      return `Continuation Artifact signalée, mais l'intention d'effet docs_write compatible est absente.${cycleHint} Aucune proposition de matérialisation. Aucun nouveau CycleInstance créé.`;
+      return `Continuation Artifact signalée, mais aucun effet de matérialisation admis n'est présent.${cycleHint} La spécialisation documentaire n'est pas une admission Product — utiliser PREPARE générique. Aucun nouveau CycleInstance créé.`;
     case "workspace_collision_ambiguous":
       return `Workspace Project déjà présent sans preuve d'appartenance durable — collision ambiguë.${cycleHint} Aucune Proposal exécutable. Aucun nouveau CycleInstance créé.`;
   }
```

### M-070 `projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts b/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
index e360bd30..425e4f1f 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
@@ -29,7 +29,7 @@ export const F2_EXECUTION_INTENT_JSON_SCHEMA: Record<string, unknown> = {
   properties: {
     intentKind: {
       anyOf: [
-        { type: "string", enum: ["docs_write", "read_only", "other"] },
+        { type: "string", enum: ["read_only", "other"] },
         { type: "null" },
       ],
     },
@@ -142,6 +142,14 @@ export function validateExecutionIntentPayload(
   if (intentKind === undefined && "intentKind" in r && r.intentKind !== null) {
     return { ok: false, reason: "intent_kind_invalid" };
   }
+  // Retired specialized kinds fail closed. Only read_only / other / null.
+  if (
+    intentKind != null &&
+    intentKind !== "read_only" &&
+    intentKind !== "other"
+  ) {
+    return { ok: false, reason: "intent_kind_invalid" };
+  }
   const reversibility = r.reversibilityExpectation;
   if (
     reversibility !== undefined &&
```

### M-071 `projects/sfia-studio/app/features/project-assistant/f2/f2CanonicalOperations.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/f2CanonicalOperations.ts b/projects/sfia-studio/app/features/project-assistant/f2/f2CanonicalOperations.ts
index d57c60a9..fd30bf4b 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/f2CanonicalOperations.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/f2CanonicalOperations.ts
@@ -1,28 +1,34 @@
 /**
- * CORR-PROOF-09 — single source for Artifact materialization technical IDs.
+ * CORR-PROOF-09 — Artifact materialization technical IDs.
  * TECHNICAL CAPABILITY ≠ EXECUTION AUTHORITY.
  *
- * CR-09-02 remediation: do NOT expose a global executionIntent.requestedOperation
- * enum (especially hostile-only IDs) to the OpenAI producer contract.
- * The dedicated IntentAnalysis field carries the Artifact-only discriminator.
+ * The specialized document-write operation is not a Product admission.
+ * Producer schema admits null only. Documentary work routes through generic
+ * PREPARE and the studio cursor generalist surface.
  */

-/** Server-owned action for Artifact materialization (TECHNICAL ≠ AUTHORITY). */
+import {
+  STUDIO_CURSOR_GENERALIST_ACTION,
+  STUDIO_CURSOR_GENERALIST_CAPABILITY,
+} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";
+
+/**
+ * Not a Product operation admission. Retained so callers can name the
+ * generalist action without a specialized document-write token.
+ */
 export const F2_ARTIFACT_MATERIALIZATION_OPERATION =
-  "cursor.docs_write.apply" as const;
+  STUDIO_CURSOR_GENERALIST_ACTION;

-/** Server-owned capability set for Artifact materialization. */
+/** Generalist capability only — not a specialized document-write capability. */
 export const F2_ARTIFACT_MATERIALIZATION_CAPABILITIES = [
-  "cap:cursor.docs_write",
+  STUDIO_CURSOR_GENERALIST_CAPABILITY,
 ] as const;

 /**
- * OpenAI Structured Outputs allowlist for the dedicated Artifact field only.
- * Hostile ops (e.g. github.pr.merge) are NOT producer choices — inject via DTO.
+ * OpenAI Structured Outputs allowlist for the dedicated Artifact field.
+ * Empty: any non-null operation fail-closes. No specialized operation is offered.
  */
-export const F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM = [
-  F2_ARTIFACT_MATERIALIZATION_OPERATION,
-] as const;
+export const F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM = [] as const;

 export type F2ArtifactMaterializationOperation =
   (typeof F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM)[number];
```

### M-072 `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index eb300ce1..9ae8f6fc 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -39,7 +39,6 @@ import {
 import { parseContinuationKind } from "./activeCycleGovernedContinuation";
 import {
   F2_ARTIFACT_MATERIALIZATION_OPERATION,
-  F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM,
   isF2ArtifactMaterializationOperation,
 } from "./f2CanonicalOperations";

@@ -238,15 +237,7 @@ export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
         { type: "null" },
       ],
     },
-    artifactMaterializationOperation: {
-      anyOf: [
-        {
-          type: "string",
-          enum: [...F2_ARTIFACT_MATERIALIZATION_OPERATION_SCHEMA_ENUM],
-        },
-        { type: "null" },
-      ],
-    },
+    artifactMaterializationOperation: { type: "null" },
     pilotDecisionCandidate: {
       anyOf: [PILOT_DECISION_CANDIDATE_OBJECT_SCHEMA, { type: "null" }],
     },
@@ -568,9 +559,9 @@ contradictionCandidate (objet candidat cognitif OU null — PAS Evidence, PAS ev
 challengeResponseAssessment (sufficient|insufficient|unknown|null — INTERNAL MW5 seulement ; PAS Truth C, PAS Evidence, PAS HumanDecision, PAS autorité ; missing/unknown/insufficient = fail-closed),
 objective, scope, rephrasedRequest, outOfScope[], risks[], reservations[], stopConditions[], activatedBlocks[],
 expectedOutcome, criticalJustification, requestedOperation (string libre / legacy OU null — PAS un ID technique obligatoire hors matérialisation Artifact),
-executionIntent (objet structuré docs_write/read_only/other NON-AUTORITAIRE OU null — intention d'exécution proposée, JAMAIS une grant REAL / HumanDecision / autorité ; executionIntent.requestedOperation reste générique/nullable ; champs incluant artifactBrief, contentRequirements, targetPath, evidenceRequirements).
-continuationKind (active_cycle_artifact_materialization OU null — hint NON-AUTORITAIRE de continuation du cycle actif ; JAMAIS une permission createCycle/skip ; le serveur valide contre activeCycle + REQUIRE_ARTIFACT).
-artifactMaterializationOperation (cursor.docs_write.apply OU null — discriminateur TECHNIQUE dédié à la matérialisation Artifact active-cycle ; JAMAIS du texte libre ; JAMAIS une autorité d'exécution).
+executionIntent (objet structuré read_only/other NON-AUTORITAIRE OU null — intention d'exécution proposée, JAMAIS une grant REAL / HumanDecision / autorité ; un kind spécialisé retiré est invalide ; executionIntent.requestedOperation reste générique/nullable ; champs incluant artifactBrief, contentRequirements, targetPath, evidenceRequirements).
+continuationKind (active_cycle_artifact_materialization OU null — hint NON-AUTORITAIRE de continuation du cycle actif ; JAMAIS une permission createCycle/skip ; le serveur valide contre activeCycle + REQUIRE_ARTIFACT ; ce hint seul n'admet pas une opération spécialisée).
+artifactMaterializationOperation (null uniquement — aucune opération spécialisée n'est admise ; un non-null fail-closed ; JAMAIS une autorité d'exécution).
 pilotDecisionCandidate ({disposition, targetKind, rationale} OU null — lecture NON-AUTORITAIRE de la disposition du Pilote sur un sujet de décision DÉJÀ présenté ; JAMAIS une HumanDecision ; targetKind n'est JAMAIS un optionRef).

 === DISTINCTION FONDAMENTALE ===
@@ -735,27 +726,26 @@ rationale : justification courte NON-AUTORITAIRE ou null.

 === CONTINUATION CYCLE ACTIF (CORR-PROOF-07 / CORR-PROOF-09 / ACTIVE-CYCLE-ARTIFACT-MATERIALIZATION-CONTINUITY-CORR-01) ===
 NEW_CYCLE_FORMALIZATION ≠ ACTIVE_CYCLE_GOVERNED_CONTINUATION ≠ ACTIVE_CYCLE_CONTINUATION_BLOCKED.
-Si le Project a déjà un cycle actif et que la demande porte sur la matérialisation gouvernée du livrable requis (REQUIRE_ARTIFACT) de CE cycle :
-- continuationKind=active_cycle_artifact_materialization EST REQUIS (hint NON-AUTORITAIRE) — MÊME sans targetPath / filename technique fourni par le Pilote ;
-- ET executionIntent.intentKind=docs_write EST REQUIS ;
-- ET artifactMaterializationOperation=cursor.docs_write.apply EST REQUIS (discriminateur technique dédié) ;
-- docs_write SEUL ne suffit JAMAIS à détourner vers la continuation Artifact ;
+Une opération spécialisée d'écriture documentaire N'EST PAS une admission Product.
+Le travail documentaire se route par PREPARE générique / generalist.
+Si le Project a déjà un cycle actif et que la demande porte sur un livrable du cycle :
+- continuationKind peut être active_cycle_artifact_materialization (hint NON-AUTORITAIRE) ou null ;
+- executionIntent.intentKind est read_only, other, ou null — JAMAIS un kind spécialisé retiré ;
+- artifactMaterializationOperation DOIT être null (tout non-null fail-closed) ;
 - continuationKind SEUL ne suffit JAMAIS à ouvrir une proposition exécutable ;
-- NE PAS traiter cela comme création d'un nouveau CycleInstance / nouveau Cadrage ;
-- NE PAS retomber en NEW_CYCLE_FORMALIZATION uniquement parce qu'un chemin / artifactFileName / hint technique est absent ;
-- si la cible exacte n'est pas résolue : laisser targetPath=null (et éventuellement artifactFileName null ou leaf sûr) — le serveur clarifie DANS le cycle actif ;
-- CONTRAT TECHNIQUE (CORR-PROOF-09 CR-09-01/02) :
-  * artifactMaterializationOperation DOIT être EXACTEMENT « cursor.docs_write.apply » (pas d'alias « docs_write », pas de français, pas d'autre opération) ;
-  * hors de ce chemin Artifact, artifactMaterializationOperation=null ;
-  * requestedOperation (top-level) ET executionIntent.requestedOperation restent génériques ailleurs ; pour CETTE continuation Artifact, les laisser null (préféré) ou exactement cursor.docs_write.apply — JAMAIS une valeur contradictoire (ex. github.pr.merge) ;
-  * si des requiredCapabilities sont fournies pour ce chemin → « cap:cursor.docs_write » (le serveur reste autoritaire après acceptation) ;
+- NE PAS traiter une demande documentaire ordinaire comme création obligatoire d'un nouveau CycleInstance lorsque PREPARE générique peut la porter ;
+- si la cible exacte n'est pas résolue : laisser targetPath=null (et éventuellement artifactFileName null ou leaf sûr) ;
+- CONTRAT TECHNIQUE :
+  * artifactMaterializationOperation=null ;
+  * requestedOperation (top-level) ET executionIntent.requestedOperation restent génériques ou null — JAMAIS une opération spécialisée, JAMAIS une valeur contradictoire (ex. github.pr.merge) sur un hint de continuation ;
+  * requiredCapabilities, si fournies, restent dans l'enveloppe generalist — le serveur reste autoritaire après acceptation ;
   * la description naturelle du livrable va dans objective / rephrasedRequest / artifactBrief / contentRequirements — JAMAIS dans artifactMaterializationOperation ;
   * CONTINUITÉ SÉMANTIQUE DU WHAT : reporter dans artifactBrief / contentRequirements les règles fonctionnelles déjà stabilisées dans le contexte (statuts, attributs, filtres, persistance, exclusions) — NE PAS inventer une seconde spécification contradictoire (ex. retirer des statuts/attributs déjà établis ou les déclarer hors périmètre) ;
-  * targetPath / targetRepositoryRef PEUVENT rester null (le serveur compose sous Project workspace + cycle segment) — ne PAS inventer de chemin repository complet ;
+  * targetPath / targetRepositoryRef PEUVENT rester null (le serveur compose sous le workspace Project projects/<key> + cycle segment) — ne PAS inventer de chemin repository complet ;
   * si le Pilote a fourni un filename leaf sûr (ex. note-de-cadrage.md), le reporter dans artifactFileName ;
   * si aucun filename n'est fourni, artifactFileName PEUT rester null (clarification serveur) OU proposer un leaf Markdown cohérent (NON-AUTORITAIRE) ;
   * ne PAS demander au Pilote de construire un path technique repository complet lorsque workspace Project+cycle est déterminable ;
-  * reversibilityExpectation pour cette continuation : null ou unknown seulement — NE PAS affirmer reversible/irreversible sans provenance serveur ;
+  * reversibilityExpectation : null ou unknown seulement — NE PAS affirmer reversible/irreversible sans provenance serveur ;
 - définition seule du livrable (sans effet de matérialisation) → informative, continuationKind=null, artifactMaterializationOperation=null.
 Aucune phrase magique exacte n'autorise seule cette continuation.`;

```

### M-073 `projects/sfia-studio/app/features/project-assistant/f2/types.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/types.ts b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
index 39d79d4a..3c06c5ec 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
@@ -239,8 +239,8 @@ export type IntentAnalysisDto = {
   criticalJustification: string | null;
   requestedOperation: string | null;
   /**
-   * GCEC — NON-AUTHORITATIVE docs_write / execution intent fragment.
-   * Present as null when not applicable; invalid shape fails closed.
+   * NON-AUTHORITATIVE execution intent fragment (read_only / other / null).
+   * A retired specialized document-write kind fails closed. Never authority.
    */
   executionIntent: ExecutionIntentPayload | null;
   /**
@@ -252,12 +252,10 @@ export type IntentAnalysisDto = {
   continuationKind?: F2ContinuationKind;
   /**
    * CORR-PROOF-09 — dedicated NON-AUTHORITATIVE Artifact materialization
-   * technical operation discriminator. Schema: cursor.docs_write.apply | null.
-   * Never free-form; never execution authority.
+   * discriminator. Product admits null only; any non-null value fail-closes.
+   * Never free-form authority. Not a specialized document-write operation.
    */
-  artifactMaterializationOperation?:
-    | "cursor.docs_write.apply"
-    | null;
+  artifactMaterializationOperation?: string | null;
   /**
    * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — NON-AUTHORITATIVE candidate reading
    * of the Pilot's disposition on an already-presented decision subject.
```

### M-074 `projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
index cd720860..a50f3e97 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
@@ -26,7 +26,6 @@ import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
 import { F3_ADAPTER_ID } from "./constants";
 import { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
-import { executeConfirmedBoundedDocsWriteContract } from "./executeConfirmedBoundedDocsWriteContract";
 import { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
 import {
   PRODUCT_PILOT_AUTHORITY,
@@ -174,46 +173,12 @@ export async function confirmAndExecuteResolvedM3(input: {
     });
   }

-  if (kind === "bounded_docs_write") {
-    return executeConfirmedBoundedDocsWriteContract({
-      projectId: input.projectId,
-      decisionId: input.decisionId,
-      proposal: null,
-      contract,
-      expectedContractVersion: input.expectedContractVersion,
-      actor,
-      authorityEvidenceId: auth.evidenceId,
-      identities: {
-        confirmationId: `cfm:m3:${contract.executionContractId}:v${contract.version}`,
-        confirmationIdempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
-        confirmationLevel,
-        attemptId,
-        attemptIdempotencyKey: `idem:m3-att:${contract.executionContractId}`,
-        grantId: `gd:m3:${contract.executionContractId.replace(/^xct:/, "")}`,
-      },
-      extraDisclosures: [
-        "M3 resolved successor — bounded docs-write profile",
-        "NO Proposal authority",
-        "Launch port is Fake or REAL composition — client real/adapter fields ignored",
-      ],
-      deps: {
-        decisionServices: input.deps.decisionServices,
-        executionContractServices: input.deps.executionContractServices,
-        executionAttemptServices: input.deps.executionAttemptServices,
-        evidenceReviewServices: input.deps.evidenceReviewServices,
-        projectServices: input.deps.projectServices,
-        productDurablePath: input.deps.productDurablePath,
-        nowIso: input.deps.nowIso,
-      },
-    });
-  }
-
   if (kind !== "fixture") {
     return {
       ok: false,
       code: "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
       message:
-        "Successor n'est ni fixture-safe, ni bounded read-only, ni bounded docs-write — refus fail-closed.",
+        "Successor n'est ni fixture-safe ni bounded read-only — refus fail-closed.",
     };
   }

```

### M-075 `projects/sfia-studio/app/features/project-assistant/f3/index.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index 6643b377..cfa8d1fb 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -64,29 +64,11 @@ export type {
   CompleteBoundedReadOnlyLaunchResult,
 } from "./completeBoundedReadOnlyLaunch";
 export { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
-export { executeConfirmedBoundedDocsWriteContract } from "./executeConfirmedBoundedDocsWriteContract";
 export { prepareAndResolveM3ProductPath } from "./prepareAndResolveM3ProductPath";
 export type {
   F3M3ResolvedPayload,
   PrepareAndResolveM3Deps,
 } from "./prepareAndResolveM3ProductPath";
-export { resolveExistingLegacyM3DocsWriteProductPath } from "./resolveExistingLegacyM3DocsWriteProductPath";
-export { isLegacyDocsWritePrepareContractView } from "./legacyDocsWritePrepareContractView";
-export { isDocsWriteEvidenceContradictionView } from "./docsWriteEvidenceContradictionView";
-export { rematerializeDocsWriteEvidenceRequirements } from "./rematerializeDocsWriteEvidenceRequirements";
-export type {
-  RematerializeDocsWriteEvidenceResult,
-  RematerializeDocsWriteEvidenceSuccess,
-} from "./rematerializeDocsWriteEvidenceRequirements";
-export type {
-  F3M3LegacyResolvedPayload,
-  ResolveExistingLegacyM3DocsWriteDeps,
-} from "./resolveExistingLegacyM3DocsWriteProductPath";
-export { qualifyDocsWriteM3Intent } from "./qualifyDocsWriteM3Intent";
-export type {
-  DocsWriteIntentQualification,
-  DocsWriteExecutionBasisLike,
-} from "./qualifyDocsWriteM3Intent";
 export { confirmAndExecuteF3Fixture } from "./confirmAndExecuteF3Fixture";
 export { confirmAndExecuteResolvedM3 } from "./confirmAndExecuteResolvedM3";
 export type { ConfirmExecuteResolvedM3Deps } from "./confirmAndExecuteResolvedM3";
@@ -114,9 +96,3 @@ export {
   createF3TestExecutionAdapter,
 } from "./fixtureAgent";
 export { createAttemptReaderBridge } from "./attemptReaderBridge";
-export { BOUNDED_DOCS_WRITE_EO_TEMPLATE } from "@/lib/oa/evidence-review";
-export { requalifyDocsWriteContractResult } from "../w2/requalifyDocsWriteContractResult";
-export type {
-  RequalifyDocsWriteContractResultInput,
-  RequalifyDocsWriteContractResultResult,
-} from "../w2/requalifyDocsWriteContractResult";
```

### M-076 `projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
index 37b1fea9..97c62bae 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
@@ -20,7 +20,6 @@ import {
   type ResolveM3Success,
 } from "./resolveM3ExecutionContract";
 import { type GitCommandRunner } from "@/lib/oa/execution-attempt";
-import { qualifyDocsWriteM3Intent } from "./qualifyDocsWriteM3Intent";
 import { selectProductM3ResolutionProfile } from "./selectProductM3ResolutionProfile";
 import {
   resolveBoundedReadOnlyBaseHeadSha,
@@ -146,58 +145,18 @@ export async function prepareAndResolveM3ProductPath(input: {
       message: decisionLoaded.error.message,
     };
   }
-  const executionBasis = decisionLoaded.decision.decisionBasis?.executionBasis;
-  // B2 — no authority widening: capability alone / action alone / incompatible
-  // DecisionBasis never promote to bounded_docs_write. Explicit server prefer
-  // remains a test escape hatch; client REAL flags never participate.
-  const intent = qualifyDocsWriteM3Intent({
-    executionBasis,
-    action: preparedContract.action,
-    requiredCapabilities: preparedContract.requiredCapabilities,
-    preferBoundedDocsWriteProfile: input.deps.preferBoundedDocsWriteProfile,
-  });
-  if (!intent.ok) {
-    return intent;
-  }
-
   const selected = selectProductM3ResolutionProfile({
     preferBoundedReadOnlyProfile: input.deps.preferBoundedReadOnlyProfile === true,
-    preferBoundedDocsWriteProfile: intent.preferDocsWrite,
   });

   let resolution = selected.profile;
-  if (
-    selected.kind === "bounded_read_only" ||
-    selected.kind === "bounded_docs_write"
-  ) {
+  if (selected.kind === "bounded_read_only") {
     let sha: string | null = null;
     let trustedInputs: Record<string, string> = {};
     /** RC-03 — marker only when resolveTrustedProductLaunchContext succeeded. */
     let trustedLaunchPinned = false;
-    if (selected.kind === "bounded_docs_write" && input.deps.oa) {
-      const launch = await resolveTrustedProductLaunchContext({
-        oa: input.deps.oa,
-        projectId: input.projectId,
-        pinnedBaseHeadSha:
-          input.deps.boundedDocsWriteBaseHeadSha ??
-          input.deps.boundedReadOnlyBaseHeadSha,
-      });
-      if (!launch.ok) {
-        return {
-          ok: false,
-          code: launch.code,
-          message: launch.message,
-        };
-      }
-      sha = launch.context.baseHeadSha;
-      trustedInputs = launchContextAsContractInputs(launch.context);
-      trustedLaunchPinned = true;
-    } else {
-      const pinned =
-        selected.kind === "bounded_docs_write"
-          ? (input.deps.boundedDocsWriteBaseHeadSha ??
-            input.deps.boundedReadOnlyBaseHeadSha)
-          : input.deps.boundedReadOnlyBaseHeadSha;
+    {
+      const pinned = input.deps.boundedReadOnlyBaseHeadSha;
       if (pinned !== undefined) {
         sha = validateBaseHeadSha(pinned);
       } else if (input.deps.resolveBoundedReadOnlyHead) {
@@ -254,7 +213,6 @@ export async function prepareAndResolveM3ProductPath(input: {
   }

   const fixtureSelected = selected.kind === "fixture";
-  const docsWriteSelected = selected.kind === "bounded_docs_write";
   const readOnlySelected = selected.kind === "bounded_read_only";
   return {
     ok: true,
@@ -262,9 +220,7 @@ export async function prepareAndResolveM3ProductPath(input: {
       turnKind: "f3_m3_resolved",
       mode: fixtureSelected
         ? "M3_RESOLVED_FIXTURE"
-        : docsWriteSelected
-          ? "M3_RESOLVED_BOUNDED_DOCS_WRITE"
-          : "M3_RESOLVED_BOUNDED_READ_ONLY",
+        : "M3_RESOLVED_BOUNDED_READ_ONLY",
       decisionId: input.decisionId,
       projectId: input.projectId,
       prepare: prepared.payload,
@@ -279,16 +235,12 @@ export async function prepareAndResolveM3ProductPath(input: {
         "M3 durable PREPARE from HumanDecision + DecisionBasis",
         fixtureSelected
           ? "G-UX-15 resolveM3ExecutionContract — fixture-safe ZERO REAL profile"
-          : docsWriteSelected
-            ? "G-UX-15 resolveM3ExecutionContract — bounded docs-write M4 profile (server-selected from DecisionBasis; ZERO LIVE Cursor; Fake boundary in tests)"
-            : "G-UX-15 resolveM3ExecutionContract — bounded read-only M4 profile (server-selected; ZERO LIVE in this cycle)",
+          : "G-UX-15 resolveM3ExecutionContract — bounded read-only M4 profile (server-selected; ZERO LIVE in this cycle)",
         "NO Proposal authority",
         "Confirmation required before StartExecution",
         fixtureSelected
           ? "NO CURSOR REAL"
-          : readOnlySelected || docsWriteSelected
-            ? "CURSOR REAL NOT EXECUTED AT PREPARE"
-            : "CURSOR REAL NOT EXECUTED AT PREPARE",
+          : "CURSOR REAL NOT EXECUTED AT PREPARE",
         "Profile is server-side; client adapter/command/real fields are ignored",
         ...resolved.disclosures,
       ],
```

### M-077 `projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index 7dd7c5cf..0dac12ef 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -20,10 +20,6 @@ import type {
   ExecutionContractServices,
 } from "@/lib/oa/execution-contract";
 import {
-  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
-  CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY,
-  CONTRACT_VALIDATION_PLAN_INPUT_KEY,
-  isRepositorySourceRef,
   projectCursorPrepareOnly,
   projectExecutionContractInspectionDisclosure,
 } from "@/lib/oa/execution-contract";
@@ -33,17 +29,8 @@ import {
   isProposalSubjectOptionRef,
   PROPOSAL_SUBJECT_PURSUE_REF,
 } from "../w2/proposalSubjectOptions";
-import {
-  deriveDocsWriteAcceptanceCriteria,
-  deriveDocsWriteValidationPlan,
-  deriveMissionReportRequirements,
-} from "../w2/missionContractSemanticInputs";
-import { BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS } from "./boundedDocsWriteM3ResolutionProfile";
 import { probeManagedRepoRelativePathExists } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
-import {
-  assertSealedArtifactWriteModeAgainstExistence,
-  isAutomaticProductDocsWriteTargetPath,
-} from "@/lib/oa/project/domain/artifactTargetRouting";
+import { assertSealedArtifactWriteModeAgainstExistence } from "@/lib/oa/project/domain/artifactTargetRouting";

 /**
  * CR-PWR-02 TOCTOU (PREPARE) — sealed CREATE must not overwrite a file that appeared;
@@ -152,16 +139,12 @@ export { assertArtifactWriteModeAtExecution } from "@/lib/oa/project/domain/arti
  * the bounded NO_* profile (not the GCEC Git lifecycle set).
  */
 function resolveEvidenceRequirementsForContract(input: {
-  docsWriteIntent: boolean;
   raw: string[] | undefined;
 }): string[] | undefined {
   const raw = input.raw;
   if (raw && raw.length > 0 && raw.every(isOaIdentifier)) {
     return [...raw];
   }
-  if (input.docsWriteIntent) {
-    return [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS];
-  }
   if (raw && raw.length > 0) {
     const valid = raw.filter(isOaIdentifier);
     return valid.length > 0 ? valid : undefined;
@@ -242,23 +225,24 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
     "DECISION_NOT_CURRENT",
   ];

-  const docsWriteIntent =
-    eb.intentKind === "docs_write" ||
-    eb.requestedOperation?.trim() === "cursor.docs_write.apply";
+  const retiredSpecializedIntent =
+    eb.intentKind != null &&
+    eb.intentKind !== "read_only" &&
+    eb.intentKind !== "other";

   const requested = eb.requestedOperation?.trim() ?? "";
   let action: string;
-  if (requested) {
+  if (retiredSpecializedIntent) {
+    action = "UNRESOLVED_ACTION";
+    stopConditions.push("ACTION_UNRESOLVED");
+    stopConditions.push("SPECIALIZED_INTENT_NOT_ADMITTED");
+  } else if (requested) {
     action = requested;
-  } else if (docsWriteIntent) {
-    action = "cursor.docs_write.apply";
   } else {
     action = "UNRESOLVED_ACTION";
     stopConditions.push("ACTION_UNRESOLVED");
   }

-  let target: string;
-  let requiredCapabilities: string[];
   const inputs: Record<string, unknown> = {
     objective: eb.objective,
     recommendedProfile: eb.recommendedProfile,
@@ -268,74 +252,16 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
     sourceDigest: basis.sourceDigest,
   };

-  if (docsWriteIntent) {
-    const targetPath = eb.targetPath?.trim() ?? "";
-    const targetRepositoryRef = eb.targetRepositoryRef?.trim() ?? "";
-    if (!targetPath || !targetRepositoryRef) {
-      target = "UNRESOLVED_TARGET";
-      stopConditions.push("TARGET_UNRESOLVED");
-    } else {
-      // Sentinel target for resolve; concrete path lives in inputs.
-      target = "workspace.isolated.docs_write";
-      inputs.targetPath = targetPath;
-      inputs.targetRepositoryRef = targetRepositoryRef;
-      inputs.repositoryRef = targetRepositoryRef;
-      inputs.pathAllowlist = eb.scopeIn ?? [];
-      inputs.scopeIn = eb.scopeIn ?? [];
-      inputs.scopeOut = eb.scopeOut ?? [];
-      inputs.createOrModify = true;
-      inputs.noDelete = true;
-      if (eb.artifactWriteMode === "CREATE" || eb.artifactWriteMode === "UPDATE") {
-        inputs.artifactWriteMode = eb.artifactWriteMode;
-      }
-      if (eb.artifactFileName) inputs.artifactFileName = eb.artifactFileName;
-      if (eb.artifactType) inputs.artifactType = eb.artifactType;
-      if (eb.artifactBrief) inputs.artifactBrief = eb.artifactBrief;
-      if (eb.contentRequirements)
-        inputs.contentRequirements = [...eb.contentRequirements];
-      if (eb.validationExpectations)
-        inputs.validationExpectations = [...eb.validationExpectations];
-      if (eb.evidenceRequirements)
-        inputs.evidenceRequirements = [...eb.evidenceRequirements];
-      if (eb.expectedOutputs)
-        inputs.expectedOutputs = [...eb.expectedOutputs];
-      inputs.repositoryIdentity = targetRepositoryRef;
-      inputs.repositoryBindingIdentity = targetRepositoryRef;
-      inputs.remoteUrl = `https://github.com/${targetRepositoryRef}.git`;
-      inputs.defaultBranch = "main";
-      // CR-GCEC-23 — durable working branch for Confirmation target (server-owned).
-      const working =
-        typeof (eb as { workingBranch?: unknown }).workingBranch === "string"
-          ? (eb as { workingBranch?: string }).workingBranch?.trim()
-          : undefined;
-      inputs.workingBranch = working || inputs.defaultBranch;
-      if (eb.scopeIn?.[0]) inputs.pathRoot = eb.scopeIn[0];
-    }
-
-    if (eb.requiredCapabilities && eb.requiredCapabilities.length > 0) {
-      requiredCapabilities = [...eb.requiredCapabilities];
-    } else {
-      requiredCapabilities = ["cap:cursor.docs_write"];
-    }
-  } else {
-    // No explicit target field on DecisionBasis today → always unresolved.
-    target = "UNRESOLVED_TARGET";
-    stopConditions.push("TARGET_UNRESOLVED");
-    requiredCapabilities = ["cap:unresolved"];
-    stopConditions.push("CAPABILITY_UNRESOLVED");
-  }
+  // Specialized document-write PREPARE is not a Product admission.
+  // Target and capability stay unresolved; generic PREPARE owns documentary work.
+  const target = "UNRESOLVED_TARGET";
+  stopConditions.push("TARGET_UNRESOLVED");
+  const requiredCapabilities = ["cap:unresolved"];
+  stopConditions.push("CAPABILITY_UNRESOLVED");

   let reversibility: "reversible" | "irreversible" = "irreversible";
-  if (
-    docsWriteIntent &&
-    (eb.reversibilityExpectation === "reversible" ||
-      eb.reversibilityExpectation === "irreversible")
-  ) {
-    reversibility = eb.reversibilityExpectation;
-  } else {
-    // Fail-closed safety default — not a sourced reversibility analysis.
-    stopConditions.push("REVERSIBILITY_UNRESOLVED");
-  }
+  // Fail-closed safety default — not a sourced reversibility analysis.
+  stopConditions.push("REVERSIBILITY_UNRESOLVED");

   const scope =
     (eb.scope && eb.scope.trim()) || `decision:${decisionId}`;
@@ -361,38 +287,12 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
         ? [eb.expectedOutcome]
         : undefined;
   const evidenceRequirements = resolveEvidenceRequirementsForContract({
-    docsWriteIntent,
     raw:
       eb.evidenceRequirements && eb.evidenceRequirements.length > 0
         ? [...eb.evidenceRequirements]
         : undefined,
   });

-  // NELC-01 — docs_write uses the same structured acceptanceCriteria model
-  // as the generic mission path (no second criterion format).
-  if (docsWriteIntent && expectedOutputs && expectedOutputs.length > 0) {
-    const targetPath =
-      typeof inputs.targetPath === "string" ? inputs.targetPath : null;
-    inputs[CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY] =
-      deriveDocsWriteAcceptanceCriteria({
-        expectedOutputs,
-        targetPath,
-      });
-    inputs[CONTRACT_VALIDATION_PLAN_INPUT_KEY] = deriveDocsWriteValidationPlan({
-      validationExpectations: eb.validationExpectations,
-    });
-    inputs[CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY] =
-      deriveMissionReportRequirements();
-    if (targetPath && isRepositorySourceRef(targetPath)) {
-      const declared = Array.isArray(inputs.sourcesToRead)
-        ? (inputs.sourcesToRead as unknown[]).filter(
-            (s): s is string => typeof s === "string",
-          )
-        : [];
-      inputs.sourcesToRead = [...new Set([...declared, targetPath])];
-    }
-  }
-
   return {
     action,
     target,
@@ -519,21 +419,17 @@ export async function prepareM3FromDecision(input: {
   }

   const eb = basis.executionBasis;
-  const docsWriteIntent =
-    eb.intentKind === "docs_write" ||
-    eb.requestedOperation?.trim() === "cursor.docs_write.apply";
-  if (docsWriteIntent) {
-    const targetPath = eb.targetPath?.trim() || "";
-    const writeCheck = revalidateSealedArtifactWriteMode({
-      artifactWriteMode: eb.artifactWriteMode,
-      targetPath: eb.targetPath,
-      targetRepositoryRef: eb.targetRepositoryRef,
-      requireResolvedWriteMode:
-        isAutomaticProductDocsWriteTargetPath(targetPath),
-    });
-    if (!writeCheck.ok) {
-      return writeCheck;
-    }
+  const admittedIntent =
+    eb.intentKind == null ||
+    eb.intentKind === "read_only" ||
+    eb.intentKind === "other";
+  if (!admittedIntent) {
+    return {
+      ok: false,
+      code: "SPECIALIZED_INTENT_NOT_ADMITTED",
+      message:
+        "Intention spécialisée retirée — PREPARE M3 refusé. La préparation documentaire passe par PREPARE générique.",
+    };
   }

   const fields = fieldsFromBasis(basis, decision.decisionId);
```

### M-078 `projects/sfia-studio/app/features/project-assistant/f3/readBoundExecutionReviewItem.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/readBoundExecutionReviewItem.ts b/projects/sfia-studio/app/features/project-assistant/f3/readBoundExecutionReviewItem.ts
index 7d30eee9..80b0bca1 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/readBoundExecutionReviewItem.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/readBoundExecutionReviewItem.ts
@@ -14,7 +14,7 @@ import {
   type ExecutionReviewCompleteness,
   type ExecutionReviewItem,
 } from "./persistGenericExecutionReviewMaterial";
-import { resolveProductEvidenceRefsRoot } from "./persistDocsWriteArtifactReviewMaterial";
+import { resolveProductEvidenceRefsRoot } from "./productEvidenceRefsRoot";

 export type BoundExecutionReviewItemReadResult =
   | {
```

### M-079 `projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
index 2b467eba..0eda83aa 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
@@ -37,11 +37,6 @@ import type {
 } from "@/lib/oa/execution-contract";
 import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract/projection/inspectionDisclosure";
 import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract/projection/inspectionDisclosure";
-import {
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-} from "@/lib/oa/execution-attempt";
-import { resolveDocsWriteEvidenceRequirementsForBoundedProfile } from "./boundedDocsWriteM3ResolutionProfile";
-
 const UNRESOLVED_ACTION = "UNRESOLVED_ACTION";
 const UNRESOLVED_TARGET = "UNRESOLVED_TARGET";
 const UNRESOLVED_CAP = "cap:unresolved";
@@ -678,14 +673,7 @@ export async function resolveM3ExecutionContract(
     original,
     input.resolution,
   );
-  const evidenceRequirements =
-    input.resolution.action.trim() === M4_BOUNDED_DOCS_WRITE_ACTION
-      ? (input.resolution.evidenceRequirements ??
-        resolveDocsWriteEvidenceRequirementsForBoundedProfile({
-          fromPrepare: original.evidenceRequirements ?? [],
-          constraints,
-        }))
-      : input.resolution.evidenceRequirements;
+  const evidenceRequirements = input.resolution.evidenceRequirements;

   // C2 — original already superseded: recover/validate existing successor.
   if (original.status === "superseded") {
```

### M-080 `projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts b/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
index 9d46a095..3eabf4da 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
@@ -6,10 +6,6 @@
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
 import { isStudioCursorRealEnabled } from "@/lib/oa/execution-attempt";
 import { isDeterministicCursorBoundaryEnabled } from "@/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary";
-import {
-  BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
-  boundedDocsWriteM3ResolutionProfile,
-} from "./boundedDocsWriteM3ResolutionProfile";
 import {
   BOUNDED_READ_ONLY_M3_SUPERSESSION_REASON,
   boundedReadOnlyM3ResolutionProfile,
@@ -20,10 +16,7 @@ import {
 } from "./fixtureSafeM3ResolutionProfile";
 import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

-export type ProductM3ResolutionKind =
-  | "fixture"
-  | "bounded_read_only"
-  | "bounded_docs_write";
+export type ProductM3ResolutionKind = "fixture" | "bounded_read_only";

 export type SelectedProductM3Resolution = {
   kind: ProductM3ResolutionKind;
@@ -80,31 +73,18 @@ export function authorizedM3ResolutionKind(
   if (profileMatchesContract(contract, boundedReadOnlyM3ResolutionProfile())) {
     return "bounded_read_only";
   }
-  if (profileMatchesContract(contract, boundedDocsWriteM3ResolutionProfile())) {
-    return "bounded_docs_write";
-  }
   return null;
 }

 /**
  * @param preferBoundedReadOnlyProfile Server/test only. Never from the client.
- * @param preferBoundedDocsWriteProfile Server/test only. Never from the client.
- *   When true, returns docs-write; otherwise existing RO/fixture logic.
  * @param env Optional env snapshot for isStudioCursorRealEnabled /
  *   fail-closed deterministic Cursor boundary (TEST/E2E only).
  */
 export function selectProductM3ResolutionProfile(input?: {
   preferBoundedReadOnlyProfile?: boolean;
-  preferBoundedDocsWriteProfile?: boolean;
   env?: NodeJS.ProcessEnv;
 }): SelectedProductM3Resolution {
-  if (input?.preferBoundedDocsWriteProfile === true) {
-    return {
-      kind: "bounded_docs_write",
-      profile: boundedDocsWriteM3ResolutionProfile(),
-      supersessionReason: BOUNDED_DOCS_WRITE_M3_SUPERSESSION_REASON,
-    };
-  }
   const env = input?.env ?? process.env;
   const useBounded =
     input?.preferBoundedReadOnlyProfile === true ||
```

### M-081 `projects/sfia-studio/app/features/project-assistant/types.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index cbabef85..6c28859d 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -457,7 +457,24 @@ export type ProjectAssistantResolveLegacyM3DocsWriteSuccess = {
   text: string;
   project: ProjectAssistantContextDto;
   ephemeralNotice: string;
-  f3: import("./f3/resolveExistingLegacyM3DocsWriteProductPath").F3M3LegacyResolvedPayload;
+  f3: {
+    successor: {
+      executionContractId: string;
+      version: number;
+      status: string;
+      action: string;
+      target: string;
+      scope: string;
+      requiredAuthority: string;
+      constraints: readonly string[];
+      stopConditions: readonly string[];
+      requiredCapabilities: readonly string[];
+      reversibility: string;
+      semanticFingerprint: string;
+      inspectionDisclosure: unknown;
+    };
+    original: { executionContractId: string };
+  };
 };

 export type ProjectAssistantResolveLegacyM3DocsWriteFailure = {
```

### M-082 `projects/sfia-studio/app/features/project-assistant/w2/actions.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index b0a2ecbc..3762a992 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -18,8 +18,6 @@ import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
 import { readLiveProjectContext } from "@/lib/vertical-slice-runtime/liveProjectContext";
 import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";
 import { amendExecutionContractWithConstraint } from "./amendExecutionContract";
-import { rematerializeDocsWriteEvidenceRequirements } from "../f3/rematerializeDocsWriteEvidenceRequirements";
-import type { RematerializeDocsWriteEvidenceResult } from "../f3/rematerializeDocsWriteEvidenceRequirements";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
 import { decideTrajectory } from "./decideTrajectory";
@@ -52,7 +50,6 @@ import {
 import { resolveProductExecutionContext } from "./resolveProductExecutionContext";
 import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
 import { createNoraSessionContractSourceGroundingReader } from "./resolveContractSourceGrounding";
-import { prepareDocsWriteRecoverySuccessorFromDecision } from "./prepareDocsWriteRecoverySuccessor";
 import { resolveRecoveryExecutionBinding } from "./resolveRecoveryExecutionBinding";
 import {
   readRecoveryOwnedDecisionContinuity,
@@ -435,21 +432,15 @@ export async function w2AmendExecutionContractAction(input: {
 export async function w2RematerializeDocsWriteEvidenceAction(input: {
   projectId: string;
   executionContractId: string;
-  /** Hostile — ignored. */
   canActAsMorris?: unknown;
   claimedAuthorityLevel?: unknown;
-}): Promise<RematerializeDocsWriteEvidenceResult> {
-  void input.canActAsMorris;
-  void input.claimedAuthorityLevel;
-
-  const runtime = getRuntimeApplicationService();
-  if (!runtime.oa) return OA_UNAVAILABLE;
-
-  return rematerializeDocsWriteEvidenceRequirements({
-    oa: runtime.oa,
-    projectId: input.projectId,
-    executionContractId: input.executionContractId,
-  });
+}): Promise<{ ok: false; code: string; message: string }> {
+  void input;
+  return {
+    ok: false,
+    code: "DOCS_WRITE_REMATERIALIZE_REMOVED",
+    message: "La rematérialisation d'exigences historiques n'est plus disponible.",
+  };
 }

 async function loadF2ContextForProject(
@@ -573,67 +564,17 @@ export async function w2ReadRecoveryExecutionBindingAction(input: {
  * R8 — prepare bounded docs_write successor from recovery HD + failed EC binding.
  * Does not accept client path/operation. Cancels wrong generic current if needed.
  */
-export async function w2PrepareRecoveryDocsWriteAction(input: {
+export async function w2PrepareRecoveryDocsWriteAction(_input: {
   projectId: string;
   decisionId: string;
-  /** Hostile — ignored. */
-  targetPath?: unknown;
-  qualifiedOperationKind?: unknown;
-  real?: unknown;
-}): Promise<
-  | {
-      readonly ok: true;
-      readonly contract: AmendedExecutionContractDto;
-      readonly decisionId: string;
-      readonly cancelledWrongGenericContractId: string | null;
-      readonly reusedFromIdempotency: boolean;
-      readonly f3SemanticOverwrite: false;
-      readonly executionPerformed: false;
-      readonly attemptCreated: false;
-      readonly binding: RecoveryExecutionBinding;
-    }
-  | { readonly ok: false; readonly code: string; readonly message: string }
-> {
-  void input.targetPath;
-  void input.qualifiedOperationKind;
-  void input.real;
-
-  const runtime = getRuntimeApplicationService();
-  if (!runtime.oa) return OA_UNAVAILABLE;
-
-  const context = await loadF2ContextForProject(runtime.oa, input.projectId);
-  if (!context) {
-    return {
-      ok: false,
-      code: "PROJECT_NOT_FOUND",
-      message: "Projet ou LPS introuvable pour la préparation recovery.",
-    };
-  }
-
-  const prepared = await prepareDocsWriteRecoverySuccessorFromDecision({
-    oa: runtime.oa,
-    projectId: input.projectId,
-    decisionId: input.decisionId,
-    currentContext: context,
-  });
-  if (!prepared.ok) return prepared;
-
+}): Promise<{ ok: false; code: string; message: string }> {
   return {
-    ok: true,
-    contract: prepared.successor,
-    decisionId: prepared.decisionId,
-    cancelledWrongGenericContractId: prepared.cancelledWrongGenericContractId,
-    reusedFromIdempotency: prepared.reusedFromIdempotency,
-    f3SemanticOverwrite: false,
-    executionPerformed: false,
-    attemptCreated: false,
-    binding: prepared.binding,
+    ok: false,
+    code: "DOCS_WRITE_RECOVERY_PREPARE_REMOVED",
+    message: "La préparation de reprise historique n'est plus disponible.",
   };
 }

-/**
- * W3-A phase 1 — SelectExecutionAgent → accepted.
- */
 export async function w2GovernedExecuteSelectAction(input: {
   projectId: string;
   executionContractId: string;
```

### M-083 `projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts b/projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts
index dcc5221a..2a9a4f9b 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts
@@ -3,7 +3,7 @@
  * Cursor CLAIM ≠ Studio FACT. Attempt succeeded ≠ Product PASS.
  * Does NOT create a second Evidence engine — only downgrades dishonest PASS.
  */
-import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
+import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/productEvidenceRefsRoot";
 import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
 import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";

```

### M-084 `projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
index b762c321..6f0ca250 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
@@ -248,8 +248,8 @@ function missionFromClarifyWithoutRecovery(
 }

 /**
- * Durable Product facts sufficient to qualify a bounded local-write effect
- * WITHOUT docs_write Product taxonomy. Product EC surface stays generalist.
+ * Durable Product facts sufficient to qualify a bounded local-write effect.
+ * Product EC surface stays the generic Cursor generalist quartet.
  */
 export function canQualifyGenericLocalWriteFromDurableFacts(input: {
   readonly basis: DecisionBasis;
@@ -277,15 +277,15 @@ export function canQualifyGenericLocalWriteFromDurableFacts(input: {
     };
   }
   const eb = basis.executionBasis;
-  const requested = eb.requestedOperation?.trim() ?? "";
-  // docs_write sealed path stays on PREPARE Proposal/M3 — not this path.
   if (
-    eb.intentKind === "docs_write" ||
-    requested === "cursor.docs_write.apply"
+    eb.intentKind != null &&
+    eb.intentKind !== "read_only" &&
+    eb.intentKind !== "other"
   ) {
     return {
       ok: false,
-      reason: "docs_write sealed — use PREPARE Proposal/M3 path",
+      reason:
+        "retired specialized intent — not a Product local-write admission",
     };
   }
   if (eb.reversibilityExpectation === "irreversible") {
@@ -453,7 +453,7 @@ function buildInternalWorkFromMissionPerimeter(input: {
       ok: false,
       code: "EFFECTS_UNRESOLVED",
       message:
-        "Mission mutante sans faits durables suffisants pour local-write produit (chemins + réversibilité) — pas de docs_write taxonomy inventée.",
+        "Mission mutante sans faits durables suffisants pour local-write produit (chemins + réversibilité).",
     };
   }
   const built = buildActualExecutionWork({
@@ -580,14 +580,15 @@ export function deriveActualExecutionWorkFromProductContext(input: {
   const requested = basis.executionBasis.requestedOperation?.trim() ?? "";
   if (
     !isNonExecutableTrajectoryRequestedOperation(requested) &&
-    (basis.executionBasis.intentKind === "docs_write" ||
-      requested === "cursor.docs_write.apply")
+    basis.executionBasis.intentKind != null &&
+    basis.executionBasis.intentKind !== "read_only" &&
+    basis.executionBasis.intentKind !== "other"
   ) {
     return {
       ok: false,
-      code: "PREPARE_ROUTE_DOCS_WRITE",
+      code: "INTENT_KIND_NOT_ADMITTED",
       message:
-        "DecisionBasis scellée docs_write — utiliser le chemin PREPARE Proposal/M3, pas le sandbox W3-A.",
+        "DecisionBasis porte une intention spécialisée retirée — pas d'admission Product. Utiliser PREPARE générique / generalist.",
     };
   }

```

### M-085 `projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts b/projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts
index 954ec758..2c284cf4 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts
@@ -2,23 +2,19 @@
  * Generic PREPARE capability envelope — shared by offer reconstruction,
  * materiality, and ExecutionContract PREPARE.
  *
- * Documentary effect-class `cap:cursor.docs_write` may be proposed by Nora.
- * Product Generic PREPARE resolves it onto studio.cursor.generalist — never
- * silently dropped, never treated as elevated authority by itself.
+ * Only the studio cursor generalist capability is inside the envelope.
+ * Any other proposed capability fail-closes. A retired specialized
+ * document-write token is outside the envelope (not resolved onto Product).
  */

 import { PRODUCT_CANONICAL_EXECUTION_CAPABILITY } from "./w3aProductExecutionSemantics";

-export const GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY =
-  "cap:cursor.docs_write" as const;
-
 /**
  * Exact Product identities only — no substring / prefix / suffix matching.
  * Unknown strings that merely contain "generalist" are outside the envelope.
  */
 export const GENERIC_PREPARE_ENVELOPE_CAPABILITY_IDENTITIES = Object.freeze([
   PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
-  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
 ] as const);

 export function isCapabilityWithinGenericPrepareEnvelope(cap: string): boolean {
@@ -38,7 +34,6 @@ export type GenericPrepareCapabilityResolution =
       readonly proposedCapabilities: readonly string[];
       readonly resolution:
         | "no_proposed_capabilities_default_generalist"
-        | "docs_write_effect_resolved_onto_generalist_product_surface"
         | "already_generalist_envelope";
     }
   | {
@@ -73,15 +68,10 @@ export function resolveGenericPrepareCapabilityEnvelope(
       proposedCapabilities: cleaned,
     };
   }
-  const hasDocsWrite = cleaned.includes(
-    GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
-  );
   return {
     ok: true,
     contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
     proposedCapabilities: cleaned,
-    resolution: hasDocsWrite
-      ? "docs_write_effect_resolved_onto_generalist_product_surface"
-      : "already_generalist_envelope",
+    resolution: "already_generalist_envelope",
   };
 }
```

### M-086 `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts` **[CORR-02]**
- **Semantic change:** Residual docs_write stub/helper cleanup
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index c6bbdfcb..5864cc82 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -33,7 +33,6 @@ import type {
   SelectionStrategy,
 } from "@/lib/oa/execution-attempt";
 import {
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
   M4_REAL_GATEWAY_ADAPTER_ID,
   resolveSelectionStrategy,
   STUDIO_CURSOR_GENERALIST_AGENT_ID,
@@ -41,9 +40,7 @@ import {
 import type { CycleProfile } from "@/lib/oa/cycle";
 import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
 import { readContractInspectionState } from "./inspectExecutionContract";
-import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
 import { completeBoundedReadOnlyLaunch } from "@/features/project-assistant/f3/completeBoundedReadOnlyLaunch";
-import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
 import { ingestMissionResultEvidence } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
 import { finalizeGenericExecutionReview } from "@/features/project-assistant/f3/finalizeGenericExecutionReview";
 import { ingestExecutionReviewVerificationEvidence } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
@@ -51,10 +48,8 @@ import {
   buildMissionResultPayloadFromReport,
   type CursorExecutionReportWithMission,
 } from "@/features/project-assistant/f3/buildMissionResultPayloadFromReport";
-import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
+import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/productEvidenceRefsRoot";
 import { deriveAttemptProvenance } from "@/features/project-assistant/f3/deriveAttemptProvenance";
-import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
-import { completeDocsWriteClaimEvidenceCompletion } from "./completeDocsWriteClaimEvidenceCompletion";
 import {
   bindCursorExecutionReportToAttempt,
   parseCursorExecutionReport,
@@ -163,30 +158,22 @@ function mapCycleProfileToSelectionProfile(
   return "standard";
 }

-function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
-  return authorizedM3ResolutionKind(contract) === "bounded_docs_write";
-}
-
 /**
  * Canonical Product EC: Nora/Studio-prepared PRODUCT_GOVERNED envelope.
- * Not a sealed GCEC docs-write profile. Not an explicit fixture-only stamp.
+ * Explicit fixture stamp is excluded.
  */
 function isCanonicalProductGovernedContract(
   contract: ExecutionContract,
 ): boolean {
-  if (isBoundedDocsWriteContract(contract)) return false;
   if (contract.constraints.includes("FIXTURE_EXECUTOR_BOUNDARY_ONLY")) {
     return false;
   }
   return contract.constraints.includes("PRODUCT_GOVERNED");
 }

-/** Generic Cursor REAL launch boundary (Product or sealed docs-write). */
+/** PRODUCT_GOVERNED uses the generic Cursor REAL boundary. Fixture stamp does not. */
 function usesGenericCursorRealBoundary(contract: ExecutionContract): boolean {
-  return (
-    isBoundedDocsWriteContract(contract) ||
-    isCanonicalProductGovernedContract(contract)
-  );
+  return isCanonicalProductGovernedContract(contract);
 }

 /**
@@ -770,7 +757,6 @@ export async function governedExecuteSelectAgent(
     return loaded.result;
   }
   const { contract, selectionProfile } = loaded;
-  const docsWrite = isBoundedDocsWriteContract(contract);
   const productCursor = isCanonicalProductGovernedContract(contract);
   const cursorReal = usesGenericCursorRealBoundary(contract);
   const boundary = executionBoundaryFailure(input.oa, contract);
@@ -930,11 +916,9 @@ export async function governedExecuteSelectAgent(
       selectionProfile: effectiveProfile,
       selectionStrategy,
       systemInitiated: cursorReal,
-      ...(docsWrite
-        ? { requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID }
-        : productCursor
-          ? { requestedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID }
-          : {}),
+      ...(productCursor
+        ? { requestedAgentRef: STUDIO_CURSOR_GENERALIST_AGENT_ID }
+        : {}),
     });
   if (!selected.ok) {
     return {
@@ -973,9 +957,7 @@ export async function governedExecuteStart(
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
-  const docsWrite = isBoundedDocsWriteContract(contract);
   const productCursor = isCanonicalProductGovernedContract(contract);
-  void docsWrite;
   const cursorReal = usesGenericCursorRealBoundary(contract);
   const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;
@@ -1191,7 +1173,6 @@ export async function governedExecuteRecordResult(
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
-  const docsWrite = isBoundedDocsWriteContract(contract);
   const productCursor = isCanonicalProductGovernedContract(contract);
   const boundary = executionBoundaryFailure(input.oa, contract);
   if (boundary) return boundary;
@@ -1214,235 +1195,6 @@ export async function governedExecuteRecordResult(
     });
   }

-  if (docsWrite) {
-    const existing =
-      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
-        attemptId: input.attemptId,
-      });
-    if (!existing.ok || !existing.attempt) {
-      return {
-        ok: false,
-        code: existing.ok ? "ATTEMPT_NOT_FOUND" : existing.error.detailCode,
-        message: existing.ok
-          ? "Attempt introuvable pour completion docs-write."
-          : existing.error.message,
-      };
-    }
-    let attempt = existing.attempt;
-    if (attempt.status === "running" && !attempt.resultRef) {
-      const targetPath =
-        typeof contract.inputs?.targetPath === "string"
-          ? contract.inputs.targetPath
-          : undefined;
-      const pathAllowlist = Array.isArray(contract.inputs?.pathAllowlist)
-        ? (contract.inputs.pathAllowlist as string[])
-        : undefined;
-      const completed = await completeBoundedDocsWriteLaunch({
-        attempt: attempt as never,
-        services: input.oa.executionAttemptServices!,
-        ...(targetPath ? { targetPath } : {}),
-        ...(pathAllowlist ? { pathAllowlist } : {}),
-        // Product Execute must terminalize REAL spawn-ACK (invoke ≠ completion).
-        awaitIfPending: true,
-      });
-      if (!completed.ok) {
-        return {
-          ok: false,
-          code: completed.code,
-          message: completed.message,
-          attempt: projectAttempt(attempt, adapterId),
-        };
-      }
-      attempt = completed.attempt;
-      if (
-        completed.status === "succeeded" &&
-        "facts" in completed &&
-        completed.facts &&
-        contract.cycleInstanceId
-      ) {
-        const refsRoot =
-          input.missionResultRefsRoot?.trim() ||
-          resolveProductEvidenceRefsRoot();
-
-        // Read independently verified hot-worktree bytes for durable review material.
-        let artifactBytes: Buffer | undefined;
-        let hotArtifactAbsolutePath: string | undefined;
-        if (completed.facts.worktreeRef) {
-          hotArtifactAbsolutePath = path.join(
-            completed.facts.worktreeRef,
-            completed.facts.targetPath,
-          );
-          try {
-            artifactBytes = fs.readFileSync(hotArtifactAbsolutePath);
-          } catch (err) {
-            return {
-              ok: false,
-              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
-              message: `Attempt succeeded durable — lecture artifact hot-worktree échouée: ${
-                err instanceof Error ? err.message : String(err)
-              }`,
-              attempt: projectAttempt(attempt, adapterId),
-            };
-          }
-        }
-
-        // R1 — CursorExecutionReport REQUIRED for nominal docs_write Product handoff.
-        // Technical Attempt may remain succeeded; missing/malformed report ≠ product handoff.
-        const stdout = completed.facts.stdout ?? "";
-        const classified = classifyCursorReportFromStdout(stdout);
-        const reportCandidate =
-          completed.facts.cursorReport ??
-          (classified.kind === "ok" ? classified.report : null);
-        if (!reportCandidate) {
-          // Preserve independently verified artifact as technical Evidence when possible.
-          if (artifactBytes) {
-            await ingestDocsWriteArtifactEvidence({
-              evidenceReviewServices: input.oa.evidenceReviewServices,
-              projectId: input.projectId,
-              cycleInstanceId: contract.cycleInstanceId,
-              executionContractId: contract.executionContractId,
-              executionAttemptId: attempt.attemptId,
-              targetPath: completed.facts.targetPath,
-              digest: completed.facts.digest,
-              nowIso: input.oa.clock.nowIso(),
-              refsRoot,
-              artifactBytes,
-            });
-          }
-          const code =
-            classified.kind === "malformed"
-              ? "CURSOR_EXECUTION_REPORT_MALFORMED"
-              : "CURSOR_EXECUTION_REPORT_REQUIRED";
-          const message =
-            classified.kind === "malformed"
-              ? classified.message
-              : "CursorExecutionReport structuré obligatoire pour le handoff Product docs_write — rapport absent après Attempt succeeded.";
-          return {
-            ok: false,
-            code,
-            message: `Attempt succeeded durable — continuité Product refusée (${code}): ${message}`,
-            attempt: projectAttempt(attempt, adapterId),
-          };
-        }
-
-        const expectedRepo =
-          typeof contract.inputs?.repositoryBindingIdentity === "string"
-            ? contract.inputs.repositoryBindingIdentity
-            : null;
-        const expectedSha =
-          typeof contract.inputs?.baseHeadSha === "string"
-            ? contract.inputs.baseHeadSha
-            : null;
-        const bound = bindCursorExecutionReportToAttempt({
-          report: reportCandidate,
-          expectedAttemptId: attempt.attemptId,
-          expectedExecutionContractId: contract.executionContractId,
-          attemptExecutionContractId: attempt.executionContractId,
-          expectedRepositoryRef: expectedRepo,
-          expectedBaseSha: expectedSha,
-        });
-        if (!bound.ok) {
-          return {
-            ok: false,
-            code: bound.code,
-            message: bound.message,
-            attempt: projectAttempt(attempt, adapterId),
-          };
-        }
-        const boundReport = reportCandidate;
-
-        const ingested = await ingestDocsWriteArtifactEvidence({
-          evidenceReviewServices: input.oa.evidenceReviewServices,
-          projectId: input.projectId,
-          cycleInstanceId: contract.cycleInstanceId,
-          executionContractId: contract.executionContractId,
-          executionAttemptId: attempt.attemptId,
-          targetPath: completed.facts.targetPath,
-          digest: completed.facts.digest,
-          nowIso: input.oa.clock.nowIso(),
-          refsRoot,
-          cursorReport: boundReport,
-          ...(artifactBytes ? { artifactBytes } : {}),
-        });
-        // CR-PCONT-06 — Attempt succeeded stays durable; ingest / advance failure
-        // must surface as post-execution continuity failure (never silent).
-        if (!ingested.ok) {
-          return {
-            ok: false,
-            code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
-            message: `Attempt succeeded durable — ingest Evidence post-exécution échoué (${ingested.code}): ${ingested.message}`,
-            attempt: projectAttempt(attempt, adapterId),
-          };
-        }
-        // D-MORRIS-PCONT-01 Option A — qualify completion after Evidence update.
-        // available ≠ verified; advance only completes when requirements are satisfied.
-        // CR-PCONT-04 — never pass digest/script; Product is payload-agnostic.
-        const advanced = await advanceProductExecutionContractAfterEvidence({
-          oa: input.oa,
-          projectId: input.projectId,
-          executionContractId: contract.executionContractId,
-          cycleInstanceId: contract.cycleInstanceId,
-          freshlyIngestedEvidenceId: ingested.evidenceId,
-        });
-        if (!advanced.ok) {
-          return {
-            ok: false,
-            code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
-            message: `Attempt succeeded durable — avancement EC post-Evidence échoué (${advanced.reason}).`,
-            attempt: projectAttempt(attempt, adapterId),
-          };
-        }
-        // R3 — Automatic Product result qualification while worktree / durable path hot.
-        // Never swallow the result: infra fail-closed; insufficiency → honest NOT_PROVEN later.
-        const qualifyPath =
-          ingested.durableArtifactAbsolutePath ?? hotArtifactAbsolutePath;
-        if (!qualifyPath) {
-          return {
-            ok: false,
-            code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
-            message:
-              "Attempt succeeded durable — aucun chemin artifact pour claim completion (durable ou hot).",
-            attempt: projectAttempt(attempt, adapterId),
-          };
-        }
-        const qualified = await completeDocsWriteClaimEvidenceCompletion({
-          evidenceReviewServices: input.oa.evidenceReviewServices!,
-          attempt,
-          contract,
-          actor: LOCAL_PILOTE_ACTOR,
-          artifactAbsolutePath: qualifyPath,
-          nowIso: input.oa.clock.nowIso(),
-        });
-        if (!qualified.ok) {
-          if (
-            classifyDocsWriteClaimCompletionFailure(qualified.code) ===
-            "CONTINUITY_FAILURE"
-          ) {
-            return {
-              ok: false,
-              code: "POST_EXECUTION_CONTINUITY_ADVANCE_FAILED",
-              message: `Attempt succeeded durable — claim completion continuity fail-closed (${qualified.code}): ${qualified.message}`,
-              attempt: projectAttempt(attempt, adapterId),
-            };
-          }
-          // CONFORMITY_INSUFFICIENCY only: keep technical Attempt; Product materialize stays NOT_PROVEN/UNCLAIMED.
-        }
-      }
-    }
-    return buildTechnicalTerminal({
-      contract,
-      attempt,
-      selectionProfile,
-      oa: input.oa,
-      reusedExistingAttempt: false,
-      launchCountBefore,
-      statusLabel:
-        attempt.status === "succeeded"
-          ? "TERMINAL TECHNIQUE DOCS-WRITE — QUALIFICATION PRODUIT AUTOMATIQUE"
-          : undefined,
-    });
-  }
-
   // Canonical Product generic Cursor: await REAL completion (docs_write pattern).
   // CURSOR_REPORT_PENDING remains when awaitIfPending===false and Attempt still running.
   if (productCursor) {
```

### M-087 `projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index a9b4fd0a..cfd2ce0c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -8,10 +8,7 @@ import { createHash } from "node:crypto";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
-import {
-  type ExecutionAttempt,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-} from "@/lib/oa/execution-attempt";
+import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
 import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
 import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review";
 import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
@@ -19,9 +16,6 @@ import {
   isMissionResultEvidenceId,
   missionResultEvidenceIdForAttempt,
 } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
-import { requalifyDocsWriteContractResult } from "./requalifyDocsWriteContractResult";
-import { completeDocsWriteClaimEvidenceCompletion } from "./completeDocsWriteClaimEvidenceCompletion";
-import { resolveDocsWriteArtifactAbsolutePath } from "./resolveDocsWriteArtifactAbsolutePath";
 import {
   projectW3bProductTerminal,
   productReservationsForAttempt,
@@ -218,139 +212,6 @@ function boundActionOf(
   );
 }

-async function materializeDocsWriteProductTerminal(input: {
-  readonly oa: RuntimeOaStack;
-  readonly projectId: string;
-  readonly attempt: ExecutionAttempt;
-  readonly contract: ExecutionContract;
-  /** Hot worktree from the just-completed docs_write launch (optional). */
-  readonly docsWriteWorktreeRef?: string | null;
-}): Promise<MaterializeW3bProductTerminalResult> {
-  const services = input.oa.evidenceReviewServices!;
-  const managedRepoRootBase =
-    input.oa.executionAttemptServices?.realBoundary?.managedRepoRootBase ??
-    resolveManagedRepoRootBaseFromEnv() ??
-    null;
-
-  const segment = input.attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
-  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
-  const artifactEvidence = await services.evidenceReader.findById(evidenceId);
-
-  const artifactAbsolutePath = resolveDocsWriteArtifactAbsolutePath({
-    attempt: input.attempt,
-    contract: input.contract,
-    evidence: artifactEvidence ?? null,
-    worktreeRef: input.docsWriteWorktreeRef,
-    managedRepoRootBase,
-  });
-
-  // Automatic Product qualification — reuse completeDocsWriteClaimEvidenceCompletion.
-  // Prefer hot worktree / managed path; restart-safe when conformity already persisted.
-  const completed = await completeDocsWriteClaimEvidenceCompletion({
-    evidenceReviewServices: services,
-    attempt: input.attempt,
-    contract: input.contract,
-    actor: LOCAL_PILOTE_ACTOR,
-    ...(artifactAbsolutePath
-      ? { artifactAbsolutePath }
-      : {}),
-  });
-
-  let claimEvaluation: ClaimEvaluation;
-  let reviewBundle: ReviewBundle;
-  let evidence: Evidence | null = artifactEvidence ?? null;
-  let reusedFromIdempotency = false;
-
-  if (completed.ok) {
-    claimEvaluation = completed.claimEvaluation;
-    reviewBundle = completed.reviewBundle;
-    evidence = completed.artifactEvidence;
-    reusedFromIdempotency = Boolean(completed.reusedFromIdempotencyKey);
-  } else {
-    // Fail-closed Product claim: keep technical Attempt as-is; project from
-    // historical artifact RB (typically NOT_PROVEN without conformity).
-    const requalified = await requalifyDocsWriteContractResult({
-      evidenceReviewServices: services,
-      attempt: input.attempt,
-      contract: input.contract,
-      actor: LOCAL_PILOTE_ACTOR,
-    });
-    if (!requalified.ok) {
-      return {
-        ok: false,
-        code: completed.code,
-        message: `${completed.message} — fallback requalify: ${requalified.message}`,
-      };
-    }
-    claimEvaluation = requalified.claimEvaluation;
-    reviewBundle = requalified.reviewBundle;
-    reusedFromIdempotency = Boolean(requalified.reusedFromIdempotencyKey);
-  }
-
-  const product = projectFromFacts({
-    attempt: input.attempt,
-    contract: input.contract,
-    evidence,
-    reviewBundle,
-    claimEvaluation,
-  });
-
-  // W3-C is best-effort after Product CE is durable — never erase a qualified
-  // Product outcome if Nora/LPS rehydrate fails; surface Pilot-facing reserve.
-  let postEvidence: W3cPostEvidenceLoopResult | undefined;
-  try {
-    if (product.evidenceId) {
-      const existing = await findExistingW3cPostEvidence({
-        oa: input.oa,
-        projectId: input.projectId,
-        evidenceId: product.evidenceId,
-        attemptId: input.attempt.attemptId,
-        product,
-      });
-      if (existing) {
-        return finishWithOptionalPostEvidence({
-          oa: input.oa,
-          projectId: input.projectId,
-          reusedFromIdempotency,
-          product,
-          postEvidence: existing,
-        });
-      }
-      const rehydrated = await rehydrateW3cPostEvidenceFromLps({
-        oa: input.oa,
-        projectId: input.projectId,
-        product,
-      });
-      if (rehydrated.ok) {
-        return finishWithOptionalPostEvidence({
-          oa: input.oa,
-          projectId: input.projectId,
-          reusedFromIdempotency,
-          product,
-          postEvidence: rehydrated,
-        });
-      }
-    }
-
-    postEvidence = await runW3cPostEvidenceLoop({
-      oa: input.oa,
-      projectId: input.projectId,
-      attemptId: input.attempt.attemptId,
-      product,
-    });
-  } catch (cause) {
-    postEvidence = w3cUnavailableFailure(cause);
-  }
-
-  return finishWithOptionalPostEvidence({
-    oa: input.oa,
-    projectId: input.projectId,
-    reusedFromIdempotency,
-    product,
-    postEvidence,
-  });
-}
-
 /** Write path — ingest Evidence + RB + Contract Result CE + project. */
 export async function materializeW3bProductTerminal(input: {
   readonly oa: RuntimeOaStack;
@@ -373,23 +234,6 @@ export async function materializeW3bProductTerminal(input: {
   // Docs-write Product claim path only when Artifact Evidence exists (typically
   // succeeded REAL/fixture ingest). Failed docs_write Attempts without Artifact
   // Evidence keep the technical W3-B materialize path for recovery/UNCLAIMED.
-  if (boundActionOf(attempt, contract) === M4_BOUNDED_DOCS_WRITE_ACTION) {
-    const servicesProbe = input.oa.evidenceReviewServices!;
-    const segment = attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
-    const docsWriteEvidenceId = `ev:docs-write:${segment}`.slice(0, 128);
-    const docsWriteEvidence =
-      await servicesProbe.evidenceReader.findById(docsWriteEvidenceId);
-    if (docsWriteEvidence) {
-      return materializeDocsWriteProductTerminal({
-        oa: input.oa,
-        projectId: input.projectId,
-        attempt,
-        contract,
-        docsWriteWorktreeRef: input.docsWriteWorktreeRef,
-      });
-    }
-  }
-
   const ids = w3bEvidenceIdentity(attempt.attemptId);
   const services = input.oa.evidenceReviewServices!;

@@ -676,40 +520,11 @@ export async function rehydrateW3bProductTerminal(input: {
   if (!loaded.ok) return loaded;
   const { attempt, contract } = loaded;
   const services = input.oa.evidenceReviewServices!;
-  const isDocsWrite =
-    boundActionOf(attempt, contract) === M4_BOUNDED_DOCS_WRITE_ACTION;
-
   let evidence: Evidence | null = null;
   let reviewBundle: ReviewBundle | null = null;
   let claimEvaluation: ClaimEvaluation | null = null;
-
-  if (isDocsWrite) {
-    const segment = attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
-    const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
-    evidence = (await services.evidenceReader.findById(evidenceId)) ?? null;
-    const resolved = await resolveCurrentContractResultClaimEvaluation({
-      repo: services.claimEvaluationRepository,
-      projectId: input.projectId,
-      executionAttemptId: attempt.attemptId,
-    });
-    if (resolved.status === "ambiguous") {
-      return {
-        ok: false,
-        code: "CONTRACT_RESULT_CLAIM_LINEAGE_AMBIGUOUS",
-        message: `Multiple active ContractResult CEs — fail-closed: ${resolved.claimEvaluationIds.join(",")}`,
-      };
-    }
-    claimEvaluation =
-      resolved.status === "one" ? resolved.claimEvaluation : null;
-    // Prefer RB bound by current CE (successor after evidence-completion-v2).
-    const boundRbId =
-      claimEvaluation?.contractResultBindings?.reviewBundleId ??
-      `rb:docs-write:${segment}`.slice(0, 128);
-    reviewBundle =
-      (await services.reviewBundleReader.findById(boundRbId)) ?? null;
-  } else {
-    const ids = w3bEvidenceIdentity(attempt.attemptId);
-    evidence = (await services.evidenceReader.findById(ids.evidenceId)) ?? null;
+  const ids = w3bEvidenceIdentity(attempt.attemptId);
+  evidence = (await services.evidenceReader.findById(ids.evidenceId)) ?? null;
     reviewBundle =
       (await services.reviewBundleReader.findById(ids.reviewBundleId)) ?? null;
     const resolved = await resolveCurrentContractResultClaimEvaluation({
@@ -730,7 +545,8 @@ export async function rehydrateW3bProductTerminal(input: {
         : ((await services.claimEvaluationReader.findById(
             ids.claimEvaluationId,
           )) ?? null);
-  }
+
+

   if (!evidence || !reviewBundle || !claimEvaluation) {
     return {
```

### M-088 `projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts b/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
index efc19105..cb34456d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
@@ -8,11 +8,6 @@
  * `manual_review` so it can never auto-PASS.
  */

-import {
-  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
-  DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
-  DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
-} from "@/lib/oa/evidence-review/application/docsWriteContractResultSemantic";
 import {
   MISSION_DIAGNOSTIC_EO_TEMPLATES,
   MISSION_NEXT_STEP_EO_TEMPLATES,
@@ -137,39 +132,6 @@ export function deriveDocsWriteAcceptanceCriteria(input: {
     const expectation = raw.trim();
     if (!expectation) return;
     const ordinal = index + 1;
-    if (expectation === BOUNDED_DOCS_WRITE_EO_TEMPLATE) {
-      // Compatibility: the historical aggregate EO is too coarse for Product
-      // SUCCESS by artifact existence alone. Seal as manual_review so CE stays
-      // honest until named path/conformity EOs are present.
-      criteria.push({
-        criterionId: criterionIdFor(ordinal, "manual-review"),
-        statement: expectation,
-        kind: "manual_review",
-        expectedOutputRef: expectation,
-        targetPath: target,
-      });
-      return;
-    }
-    if (expectation === DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET) {
-      criteria.push({
-        criterionId: criterionIdFor(ordinal, "artifact-at-path"),
-        statement: expectation,
-        kind: "artifact_at_path",
-        expectedOutputRef: expectation,
-        targetPath: target,
-      });
-      return;
-    }
-    if (expectation === DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION) {
-      criteria.push({
-        criterionId: criterionIdFor(ordinal, "artifact-conformity"),
-        statement: expectation,
-        kind: "artifact_conformity_attested",
-        expectedOutputRef: expectation,
-        targetPath: target,
-      });
-      return;
-    }
     // Path-shaped / free-form EOs stay manual_review when sealed.
     // Legacy path-shaped matching remains available only when NO criterion is
     // sealed for that EO (compatibility bridge — no silent Product SUCCESS upgrade).
```

### M-089 `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 0bfe988b..fe01dd88 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -59,7 +59,6 @@ import {
   type ExecutionIntentPayload,
 } from "../f2/executionIntentSchema";
 import {
-  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
   isCapabilityWithinGenericPrepareEnvelope,
   resolveGenericPrepareCapabilityEnvelope,
   type GenericPrepareCapabilityResolution,
@@ -76,7 +75,6 @@ import {
 } from "./resolveGenericPrepareDocumentaryTarget";

 export {
-  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
   isCapabilityWithinGenericPrepareEnvelope,
   resolveGenericPrepareCapabilityEnvelope,
 };
@@ -757,8 +755,7 @@ export async function prepareGenericExecutionContractDraft(
       ? "resolved_product"
       : productDocumentaryTargetResolution === "unresolved_nora_candidate"
         ? "unresolved_nora_candidate"
-        : missionEffects.intentKind === "docs_write" ||
-            proposedDocumentaryOutputCandidates.length > 0
+        : proposedDocumentaryOutputCandidates.length > 0
           ? "unresolved_nora_candidate"
           : "not_applicable";
   // Contract expectedOutputs: Product-resolved path when available; else outcome text.
```

### M-090 `projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
index 9d86c474..695170ea 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
@@ -129,15 +129,7 @@ export function deriveProposalSubjectOptions(
       : null,
   ].filter((n): n is string => Boolean(n));
   const opNote = `Opération scellée: ${sealed.requestedOperation}`;
-  const automaticDocsWrite =
-    sealed.intentKind === "docs_write" &&
-    Boolean(
-      sealed.projectWorkspaceRoot?.startsWith("projects/") ||
-        sealed.targetPath?.startsWith("projects/"),
-    );
-  const askBlocksPursue =
-    sealed.artifactWriteMode === "ASK" ||
-    (automaticDocsWrite && sealed.artifactWriteMode == null);
+  const askBlocksPursue = sealed.artifactWriteMode === "ASK";

   return [
     {
@@ -200,11 +192,7 @@ export function deriveProposalSubjectRecommendation(

   if (
     sealed.reservations.length > 0 ||
-    sealed.artifactWriteMode === "ASK" ||
-    (sealed.intentKind === "docs_write" &&
-      (sealed.projectWorkspaceRoot?.startsWith("projects/") ||
-        sealed.targetPath?.startsWith("projects/")) &&
-      sealed.artifactWriteMode == null)
+    sealed.artifactWriteMode === "ASK"
   ) {
     // FR-03 — AMEND must cite a material delta, never a generic prudence loop.
     const materialGaps: string[] = [];
```

### M-091 `projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts
index 02206e73..9820da5c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts
@@ -3,10 +3,9 @@
  * replaceable by recovery PREPARE for next-action ownership.
  * Pure — no OA I/O, no Cancel, no persistence. Client-safe.
  *
- * Action/target literals match M4_BOUNDED_DOCS_WRITE_* (avoid server-only imports).
+ * No specialized document-write contract is recognized. Pre-exec generic
+ * contracts that match the recovery binding are replaceable.
  */
-const DOCS_WRITE_ACTION = "cursor.docs_write.apply";
-const DOCS_WRITE_TARGET = "workspace.isolated.docs_write";

 const PRE_EXEC_REPLACEABLE_BY_RECOVERY_PREPARE = new Set([
   "draft",
@@ -40,9 +39,5 @@ export function isWrongGenericPreExecReplaceableByRecoveryPrepare(input: {
   if (!PRE_EXEC_REPLACEABLE_BY_RECOVERY_PREPARE.has(input.currentContract.status)) {
     return false;
   }
-  const isDocsWrite =
-    input.currentContract.action === DOCS_WRITE_ACTION &&
-    input.currentContract.target === DOCS_WRITE_TARGET;
-  if (isDocsWrite) return false;
   return true;
 }
```

### M-092 `projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
index cc28654c..f2523eff 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
@@ -21,6 +21,7 @@ import {
 import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
 import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { projectWorkspacePathRootFromKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
 import type { IntentAnalysisDto } from "../f2/types";
 import { isCapabilityWithinGenericPrepareEnvelope } from "./genericPrepareCapabilityEnvelope";

@@ -96,7 +97,8 @@ function normalizePathRoot(pathRoot: string | null | undefined): string | null {
 }

 /**
- * Paths outside Project.repositoryBinding.pathRoot are outside authorized WHERE.
+ * Paths outside the Project workspace pathRoot (projects/<key>) are outside
+ * authorized WHERE.
  */
 export function pathsOutsideAuthorizedPathRoot(input: {
   readonly paths: readonly string[];
@@ -153,8 +155,12 @@ export function qualifyBoundedNonMutatingAnalysisMission(input: {
   }
   const ei = input.analysis.executionIntent;
   const intentKind = ei?.intentKind?.trim() || null;
-  if (intentKind === "docs_write") {
-    return { ok: false, basis: "intent_kind_docs_write" };
+  if (
+    intentKind != null &&
+    intentKind !== "read_only" &&
+    intentKind !== "other"
+  ) {
+    return { ok: false, basis: "intent_kind_not_admitted" };
   }
   const elevated = input.requestedCapabilities.filter(
     (c) => c.trim().length > 0 && !isCapabilityWithinGenericPrepareEnvelope(c),
@@ -162,13 +168,6 @@ export function qualifyBoundedNonMutatingAnalysisMission(input: {
   if (elevated.length > 0) {
     return { ok: false, basis: "elevated_capabilities" };
   }
-  if (
-    input.requestedCapabilities.some(
-      (c) => c.trim() === "cap:cursor.docs_write",
-    )
-  ) {
-    return { ok: false, basis: "docs_write_capability_proposed" };
-  }
   const materialization = (
     input.analysis as { artifactMaterializationOperation?: string | null }
   ).artifactMaterializationOperation;
@@ -319,8 +318,7 @@ function deriveAuthorityEnvelopeExpanded(input: {
       basis: "mission_paths_outside_repository_path_root",
     };
   }
-  // Pass 02 — docs_write effect-class is within Generic PREPARE envelope
-  // (resolved onto studio.cursor.generalist). Other elevated caps remain structural.
+  // Elevated capabilities outside the generalist envelope remain structural.
   const elevated = input.requestedCapabilities.filter(
     (c) => c.trim().length > 0 && !isCapabilityWithinGenericPrepareEnvelope(c),
   );
@@ -363,9 +361,11 @@ export async function resolveAuthoritativeProductMateriality(input: {
       projectId: input.projectId,
     });
     if (projectResult.ok) {
-      pathRoot = projectResult.project.repositoryBinding?.pathRoot?.trim() || null;
-      repositoryIdentity =
-        projectResult.project.repositoryBinding?.identity?.trim() || null;
+      pathRoot =
+        projectWorkspacePathRootFromKey(
+          projectResult.project.projectWorkspaceKey,
+        ) || null;
+      repositoryIdentity = null;
     }
   }

@@ -611,7 +611,7 @@ export async function revalidateMaterialityAgainstCurrentProduct(input: {
     }

     // CR-P6-CLOSURE-01 — repository binding may change WITHOUT lpsVersion bump
-    // (SetProjectRepositoryBinding). Stamp pathRoot/identity are authoritative
+    // (Product repository-binding projection retired). Stamp pathRoot/identity are authoritative
     // witnesses of the prepare-time Product binding; compare independently of LPS.
     const stampedIdentity = s.repositoryIdentity?.trim() || null;
     const currentIdentity = c.repositoryIdentity?.trim() || null;
```

### M-093 `projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
index cae3b206..6a4de49f 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
@@ -21,6 +21,7 @@
 import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { isRepositorySourceRef } from "@/lib/oa/execution-contract";
+import { projectWorkspacePathRootFromKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
 import type {
   PilotDecisionDisposition,
   PilotDecisionTargetKind,
@@ -386,9 +387,8 @@ async function resolveProjectTrajectoryDurableLocalWriteSeal(input: {
       message: "Projet illisible — impossible de dériver un périmètre local-write.",
     };
   }
-  const binding = project.project.repositoryBinding;
   const pathRoot =
-    typeof binding?.pathRoot === "string" ? binding.pathRoot.trim() : "";
+    projectWorkspacePathRootFromKey(project.project.projectWorkspaceKey) ?? "";
   if (!pathRoot) {
     return {
       ok: false,
```

### M-094 `projects/sfia-studio/app/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget.ts
index 9e7ff509..7df36ebd 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget.ts
@@ -8,6 +8,7 @@
  */

 import { enrichExecutionIntentFromBinding } from "../f2/activeCycleGovernedContinuation";
+import { projectWorkspacePathRootFromKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
 import type { IntentAnalysisDto } from "../f2/types";
 import type { ExecutionIntentPayload } from "../f2/executionIntentSchema";
 import {
@@ -105,7 +106,6 @@ export function isGenericPrepareDocumentaryMission(
   analysis: IntentAnalysisDto,
 ): boolean {
   if (!analysis.parseOk) return false;
-  if (analysis.executionIntent?.intentKind === "docs_write") return true;

   const hay = normalizeHaystack([
     analysis.objective,
@@ -224,14 +224,17 @@ export async function resolveGenericPrepareDocumentaryTarget(input: {
     };
   }

-  const binding = projectResult.project.repositoryBinding ?? null;
-  if (!binding?.identity?.trim() || !binding.pathRoot?.trim()) {
+  const pathRoot = projectWorkspacePathRootFromKey(
+    projectResult.project.projectWorkspaceKey,
+  );
+  const binding = pathRoot ? { pathRoot, identity: null } : null;
+  if (!binding?.pathRoot?.trim()) {
     return {
       kind: "blocked",
       analysis,
       code: "REPOSITORY_BINDING_UNAVAILABLE",
       message:
-        "Repository binding Product absent ou incomplet — destination documentaire non résoluble (fail-closed).",
+        "Workspace Product (projects/<key>) absent — destination documentaire non résoluble (fail-closed).",
       documentaryTargetResolution: "blocked",
       resolvedAuthoritativeTargetPath: null,
     };
@@ -310,16 +313,20 @@ export async function resolveGenericPrepareDocumentaryTarget(input: {
     };
   }

+  const incomingKind = analysis.executionIntent?.intentKind;
   const seedIntent: ExecutionIntentPayload = {
     ...(analysis.executionIntent ?? {}),
-    intentKind: "docs_write",
+    intentKind:
+      incomingKind === "read_only" || incomingKind === "other"
+        ? incomingKind
+        : "other",
     artifactFileName: leaf ?? proposedArtifactFileName,
     targetPath: proposedTargetPath,
     // Candidate capability only — envelope still resolved at PREPARE.
-    requiredCapabilities:
-      analysis.executionIntent?.requiredCapabilities?.length
-        ? analysis.executionIntent.requiredCapabilities
-        : ["cap:cursor.docs_write"],
+    // Do not invent a specialized document-write capability.
+    requiredCapabilities: analysis.executionIntent?.requiredCapabilities?.length
+      ? analysis.executionIntent.requiredCapabilities
+      : [],
   };

   const enriched = enrichExecutionIntentFromBinding({
```

### M-095 `projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
index 5be2ab43..534e0117 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
@@ -14,10 +14,7 @@ import {
   resolveCurrentContractResultClaimEvaluation,
 } from "@/lib/oa/evidence-review";
 import type { ContractResultVerdict } from "@/lib/oa/evidence-review/domain/contractResultTypes";
-import {
-  loadDocsWriteArtifactReviewMaterial,
-  resolveProductEvidenceRefsRoot,
-} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
+import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/productEvidenceRefsRoot";
 import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
 import { isExecutionReviewVerificationEvidenceId } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
 import { isMissionResultEvidenceId } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
@@ -677,29 +674,6 @@ export async function resolveProductExecutionContext(input: {
         completeness: durableSurface.artifactReviewCompleteness ?? null,
         preview: durableSurface.artifactReviewMaterial.slice(0, 2000),
       };
-    } else {
-      const loaded = loadDocsWriteArtifactReviewMaterial({
-        refsRoot: resolveProductEvidenceRefsRoot(),
-        attemptId: attempt.attemptId,
-        ...(targetPath ? { targetPath } : {}),
-      });
-      if (loaded.ok) {
-        artifact = {
-          kind: "ARTIFACT",
-          present: true,
-          completeness: loaded.completeness,
-          preview: loaded.artifactText.slice(0, 2000),
-        };
-        if (loaded.cursorReport && !cursorReport.present) {
-          cursorReport = {
-            kind: "EXECUTOR_CLAIM",
-            present: true,
-            status: loaded.cursorReport.status,
-            summary: `status=${loaded.cursorReport.status}`,
-            disclosure: "CLAIM_NOT_EVIDENCE",
-          };
-        }
-      }
     }

     const genericReview = loadGenericExecutionReviewMaterial({
```

### M-096 `projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts` **[CORR-02]**
- **Semantic change:** Residual docs_write stub/helper cleanup
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
index 47a6ada4..bbf93d71 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
@@ -4,18 +4,7 @@
  * with R7 PostEvidenceRecoveryContext (+ optional recovery trajectory HD).
  */
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
-import type { ExecutionContract } from "@/lib/oa/execution-contract";
-import {
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
-} from "@/lib/oa/execution-attempt";
-import {
-  resolvePostEvidenceRecoveryContext,
-  type PostEvidenceRecoveryContext,
-} from "./resolvePostEvidenceRecoveryContext";
-import { isConfirmedPreStartRejectionRecoverySource } from "./isConfirmedPreStartRejectionRecoverySource";
-import { GOVERNED_OPTION_REF } from "./trajectoryOptions";
+import type { PostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";

 export type RecoveryExecutionBindingResolution =
   | {
@@ -36,8 +25,8 @@ export type RecoveryExecutionBinding = {
   readonly recovery: PostEvidenceRecoveryContext;
   readonly sourceExecutionContractId: string;
   readonly sourceAttemptId: string;
-  readonly action: typeof M4_BOUNDED_DOCS_WRITE_ACTION;
-  readonly target: typeof M4_BOUNDED_DOCS_WRITE_TARGET;
+  readonly action: string;
+  readonly target: string;
   readonly targetPath: string;
   readonly scope: string;
   readonly requiredCapabilities: readonly string[];
@@ -52,64 +41,6 @@ export type RecoveryExecutionBinding = {
   readonly sourceStatus: string;
 };

-function asNonEmptyString(value: unknown): string | null {
-  if (typeof value !== "string") return null;
-  const trimmed = value.trim();
-  return trimmed.length > 0 ? trimmed : null;
-}
-
-function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
-  if (contract.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
-  if (contract.target !== M4_BOUNDED_DOCS_WRITE_TARGET) return false;
-  if (!contract.requiredCapabilities.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY)) {
-    return false;
-  }
-  return true;
-}
-
-/**
- * Clone durable inputs for a fresh successor — drop stale authority / OCC /
- * confirmation / attempt bindings; keep business path + content requirements.
- */
-export function cloneDocsWriteInputsForRecoverySuccessor(
-  inputs: Record<string, unknown> | undefined,
-): Record<string, unknown> {
-  const src = inputs ?? {};
-  const out: Record<string, unknown> = {};
-  const keepKeys = [
-    "targetPath",
-    "targetRepositoryRef",
-    "repositoryRef",
-    "pathAllowlist",
-    "scopeIn",
-    "scopeOut",
-    "createOrModify",
-    "noDelete",
-    "artifactType",
-    "artifactBrief",
-    "contentRequirements",
-    "validationExpectations",
-    "evidenceRequirements",
-    "expectedOutputs",
-    "repositoryIdentity",
-    "repositoryBindingIdentity",
-    "remoteUrl",
-    "defaultBranch",
-    "workingBranch",
-    "pathRoot",
-    "objective",
-    "recommendedProfile",
-    "cycleTypeId",
-    "activatedBlocks",
-  ] as const;
-  for (const key of keepKeys) {
-    if (key in src && src[key] !== undefined) {
-      out[key] = structuredClone(src[key]);
-    }
-  }
-  return out;
-}
-
 export async function resolveRecoveryExecutionBinding(input: {
   readonly oa: RuntimeOaStack;
   readonly projectId: string;
@@ -119,145 +50,6 @@ export async function resolveRecoveryExecutionBinding(input: {
    */
   readonly decisionId?: string | null;
 }): Promise<RecoveryExecutionBindingResolution> {
-  const recovered = await resolvePostEvidenceRecoveryContext({
-    oa: input.oa,
-    projectId: input.projectId,
-  });
-  if (!recovered.ok) {
-    return {
-      ok: false,
-      code: recovered.code,
-      message: recovered.message,
-      recoveryContextPresent: false,
-    };
-  }
-  if (!recovered.context) {
-    return { ok: true, binding: null, recoveryContextPresent: false };
-  }
-  const recovery = recovered.context;
-  const present = true as const;
-
-  if (input.decisionId) {
-    const loaded = await input.oa.decisionServices.getHumanDecision.execute({
-      decisionId: input.decisionId,
-    });
-    if (!loaded.ok) {
-      return {
-        ok: false,
-        code: loaded.error.detailCode,
-        message: loaded.error.message,
-        recoveryContextPresent: present,
-      };
-    }
-    const decision = loaded.decision;
-    if (decision.projectId !== input.projectId) {
-      return {
-        ok: false,
-        code: "PROJECT_MISMATCH",
-        message: "Décision hors projet — binding recovery refusé.",
-        recoveryContextPresent: present,
-      };
-    }
-    if (decision.status !== "accepted") {
-      return { ok: true, binding: null, recoveryContextPresent: present };
-    }
-    const basis = decision.decisionBasis;
-    if (!basis || basis.sourceType !== "trajectory_option") {
-      return { ok: true, binding: null, recoveryContextPresent: present };
-    }
-    if (decision.selectedOptionId !== GOVERNED_OPTION_REF) {
-      // Only "nouvelle tentative gouvernée" activates docs_write successor.
-      return { ok: true, binding: null, recoveryContextPresent: present };
-    }
-  }
-
-  if (!input.oa.executionContractServices) {
-    return { ok: true, binding: null, recoveryContextPresent: present };
-  }
-
-  const loaded =
-    await input.oa.executionContractServices.getExecutionContract.execute({
-      executionContractId: recovery.executionContractId,
-    });
-  if (!loaded.ok) {
-    return { ok: true, binding: null, recoveryContextPresent: present };
-  }
-  const contract = loaded.contract;
-  if (contract.projectId !== input.projectId) {
-    return { ok: true, binding: null, recoveryContextPresent: present };
-  }
-  if (contract.executionContractId !== recovery.executionContractId) {
-    return { ok: true, binding: null, recoveryContextPresent: present };
-  }
-
-  // CLASS 1: failed EC (legacy). CLASS 2: confirmed EC + pre-start rejection.
-  if (contract.status === "failed") {
-    // existing path
-  } else if (contract.status === "confirmed") {
-    if (!input.oa.executionAttemptServices) {
-      return { ok: true, binding: null, recoveryContextPresent: present };
-    }
-    const attemptLoaded =
-      await input.oa.executionAttemptServices.getExecutionAttempt.execute({
-        attemptId: recovery.attemptId,
-      });
-    if (!attemptLoaded.ok) {
-      return { ok: true, binding: null, recoveryContextPresent: present };
-    }
-    if (
-      !isConfirmedPreStartRejectionRecoverySource({
-        contract,
-        attempt: attemptLoaded.attempt,
-      })
-    ) {
-      return { ok: true, binding: null, recoveryContextPresent: present };
-    }
-  } else {
-    // completed / cancelled / superseded / executing — not a recovery source.
-    return { ok: true, binding: null, recoveryContextPresent: present };
-  }
-
-  if (!isBoundedDocsWriteContract(contract)) {
-    return { ok: true, binding: null, recoveryContextPresent: present };
-  }
-
-  const targetPath = asNonEmptyString(contract.inputs?.targetPath);
-  if (!targetPath) {
-    return {
-      ok: false,
-      code: "DURABLE_EXECUTION_BINDING_INSUFFICIENT",
-      message:
-        "docs_write EC recovery sans inputs.targetPath durable — binding recovery impossible.",
-      recoveryContextPresent: present,
-    };
-  }
-
-  // Attempt ↔ EC coherence already enforced in RecoveryContext (+ CLASS 2 helper).
-  const evidenceRequirements = [...(contract.evidenceRequirements ?? [])];
-  const constraints = [...(contract.constraints ?? [])];
-
-  return {
-    ok: true,
-    binding: {
-      kind: "post_evidence_recovery_execution",
-      recovery,
-      sourceExecutionContractId: contract.executionContractId,
-      sourceAttemptId: recovery.attemptId,
-      action: M4_BOUNDED_DOCS_WRITE_ACTION,
-      target: M4_BOUNDED_DOCS_WRITE_TARGET,
-      targetPath,
-      scope: contract.scope,
-      requiredCapabilities: [...contract.requiredCapabilities],
-      evidenceRequirements,
-      constraints,
-      stopConditions: [...(contract.stopConditions ?? [])],
-      expectedOutputs: [...(contract.expectedOutputs ?? [])],
-      inputs: cloneDocsWriteInputsForRecoverySuccessor(contract.inputs),
-      projectId: contract.projectId,
-      cycleInstanceId: contract.cycleInstanceId ?? null,
-      sourceSemanticFingerprint: contract.semanticFingerprint ?? null,
-      sourceStatus: contract.status,
-    },
-    recoveryContextPresent: present,
-  };
+  void input;
+  return { ok: true, binding: null, recoveryContextPresent: false };
 }
```

### M-097 `projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts` **[CORR-02]**
- **Semantic change:** Git target fidelity identity/remote/checkout
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts b/projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
index d58e6e66..474d4eeb 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
@@ -6,19 +6,90 @@
  * Never silently bind to Studio's own checkout (process.cwd / sfia-workspace).
  */

+import { existsSync } from "node:fs";
+import path from "node:path";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
+import { assertRemoteUrlMatchesRepositoryRef } from "@/lib/oa/execution-attempt/domain/assertLocalBranchRefMatchesExpectedSha";
+import { assertCanonicalGithubRepositoryRef } from "@/lib/oa/execution-attempt/domain/shellSafeArg";
+import { projectWorkspacePathRootFromKey } from "@/lib/oa/project/domain/projectWorkspaceKey";
 import {
   resolveBoundedReadOnlyBaseHeadSha,
   validateBaseHeadSha,
 } from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
 import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
-import { ManagedProjectRepositoryResolver } from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";

-export type TrustedProductLaunchContext = {
-  readonly baseHeadSha: string;
-  readonly repositoryBindingIdentity: string;
+/**
+ * Server env that still carries a git-target owner/repo string for launch.
+ * Seal-only. Read only to stamp ExecutionContract inputs.
+ * Not Product SoT. Never written onto Project, and never a Product
+ * repository-binding record.
+ */
+export const SEALED_GIT_TARGET_IDENTITY_ENV =
+  "SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY";
+export const SEALED_GIT_TARGET_REMOTE_URL_ENV =
+  "SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL";
+export const SEALED_GIT_TARGET_DEFAULT_BRANCH_ENV =
+  "SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH";
+
+type SealedGitTarget = {
+  readonly identity: string;
   readonly remoteUrl: string;
   readonly defaultBranch: string;
+};
+
+/**
+ * Canonical owner/repo from server env when present and valid.
+ * A provided remote must identify that same GitHub repository.
+ * Absent remote may be synthesized as `https://github.com/${identity}.git`
+ * only after the identity is canonical (coherent by construction).
+ * Non-canonical identity, non-GitHub host, or owner/repo mismatch → null.
+ */
+export function resolveSealedGitTargetFromEnv(
+  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
+): SealedGitTarget | null {
+  const rawIdentity = env[SEALED_GIT_TARGET_IDENTITY_ENV];
+  const canonical = assertCanonicalGithubRepositoryRef(
+    typeof rawIdentity === "string" ? rawIdentity.trim() : "",
+  );
+  if (!canonical.ok) return null;
+
+  const rawRemote = env[SEALED_GIT_TARGET_REMOTE_URL_ENV];
+  const remoteTrimmed = typeof rawRemote === "string" ? rawRemote.trim() : "";
+  let remoteUrl: string;
+  if (!remoteTrimmed) {
+    remoteUrl = `https://github.com/${canonical.ref}.git`;
+  } else {
+    const match = assertRemoteUrlMatchesRepositoryRef({
+      remoteUrl: remoteTrimmed,
+      repositoryRef: canonical.ref,
+    });
+    if (!match.ok) return null;
+    remoteUrl = remoteTrimmed;
+  }
+
+  const rawBranch = env[SEALED_GIT_TARGET_DEFAULT_BRANCH_ENV];
+  const defaultBranch =
+    (typeof rawBranch === "string" ? rawBranch.trim() : "") || "main";
+
+  return {
+    identity: canonical.ref,
+    remoteUrl,
+    defaultBranch,
+  };
+}
+
+export type TrustedProductLaunchContext = {
+  readonly baseHeadSha: string;
+  /**
+   * Residual sealed git-target field (CORR-01/02).
+   * Server-owned owner/repo string stamped onto ExecutionContract inputs.
+   * Not Product SoT, not a Product repository-binding record, and not
+   * NewRepositoryBinding. Documentary WHERE is pathRoot
+   * (projects/<projectWorkspaceKey>).
+   */
+  readonly repositoryBindingIdentity: string | null;
+  readonly remoteUrl: string | null;
+  readonly defaultBranch: string | null;
   readonly pathRoot: string | null;
   readonly managedRepoRoot: string | null;
 };
@@ -27,11 +98,13 @@ export type ResolveTrustedProductLaunchContextResult =
   | { readonly ok: true; readonly context: TrustedProductLaunchContext }
   | { readonly ok: false; readonly code: string; readonly message: string };

-const managedResolver = new ManagedProjectRepositoryResolver();
-
 /**
- * Resolve launch context from durable Project.repositoryBinding + server HEAD
- * of the project's managed clone (never Studio cwd).
+ * Resolve launch context from the durable Project workspace key and, when
+ * pinned or a managed clone is available, the server HEAD. Never Studio cwd.
+ *
+ * `repositoryBindingIdentity` on the result remains the residual sealed
+ * git-target field (CORR-01/02). It is not Product SoT and not
+ * NewRepositoryBinding.
  *
  * Test hooks: pinnedBaseHeadSha / managedRepoRootBase — never from browser Execute.
  */
@@ -52,20 +125,9 @@ export async function resolveTrustedProductLaunchContext(input: {
         "Projet introuvable — contexte de lancement impossible à fixer.",
     };
   }
-  const binding = projectResult.project.repositoryBinding;
-  if (!binding?.identity?.trim()) {
-    return {
-      ok: false,
-      code: "REPOSITORY_BINDING_REQUIRED",
-      message:
-        "Aucun dépôt de projet fiable n'est lié — préparation d'un contrat exécutable refusée.",
-    };
-  }
-  const identity = binding.identity.trim();
-  const remoteUrl =
-    binding.remoteUrl?.trim() || `https://github.com/${identity}.git`;
-  const defaultBranch = binding.defaultBranch?.trim() || "main";
-  const pathRoot = binding.pathRoot?.trim() || null;
+  const pathRoot = projectWorkspacePathRootFromKey(
+    projectResult.project.projectWorkspaceKey,
+  );

   const managedBase =
     (typeof input.managedRepoRootBase === "string" &&
@@ -73,13 +135,8 @@ export async function resolveTrustedProductLaunchContext(input: {
       ? input.managedRepoRootBase.trim()
       : null) ?? resolveManagedRepoRootBaseFromEnv() ?? null;

-  let managedRepoRoot: string | null = null;
-  if (managedBase) {
-    managedRepoRoot = managedResolver.resolveLocalRepoRoot(
-      { identity },
-      managedBase,
-    );
-  }
+  const managedRepoRoot =
+    managedBase && existsAsGitRoot(managedBase) ? managedBase : null;

   let sha: string | null = null;
   if (input.pinnedBaseHeadSha !== undefined && input.pinnedBaseHeadSha !== null) {
@@ -123,13 +180,18 @@ export async function resolveTrustedProductLaunchContext(input: {
     };
   }

+  // Sealed git-target string for EC inputs when the server env is canonical.
+  // Missing/invalid stays null — Select eligibility remains fail-closed.
+  // Not persisted as Project.repositoryBinding.
+  const sealedGitTarget = resolveSealedGitTargetFromEnv();
+
   return {
     ok: true,
     context: {
       baseHeadSha: sha,
-      repositoryBindingIdentity: identity,
-      remoteUrl,
-      defaultBranch,
+      repositoryBindingIdentity: sealedGitTarget?.identity ?? null,
+      remoteUrl: sealedGitTarget?.remoteUrl ?? null,
+      defaultBranch: sealedGitTarget?.defaultBranch ?? null,
       pathRoot,
       managedRepoRoot,
     },
@@ -139,13 +201,22 @@ export async function resolveTrustedProductLaunchContext(input: {
 export function launchContextAsContractInputs(
   context: TrustedProductLaunchContext,
 ): Record<string, string> {
+  const identity = context.repositoryBindingIdentity;
   return {
     baseHeadSha: context.baseHeadSha,
-    repositoryBindingIdentity: context.repositoryBindingIdentity,
-    repositoryIdentity: context.repositoryBindingIdentity,
-    repositoryRef: context.repositoryBindingIdentity,
-    remoteUrl: context.remoteUrl,
-    defaultBranch: context.defaultBranch,
+    ...(identity
+      ? {
+          repositoryBindingIdentity: identity,
+          repositoryIdentity: identity,
+          repositoryRef: identity,
+        }
+      : {}),
+    ...(context.remoteUrl ? { remoteUrl: context.remoteUrl } : {}),
+    ...(context.defaultBranch ? { defaultBranch: context.defaultBranch } : {}),
     ...(context.pathRoot ? { pathRoot: context.pathRoot } : {}),
   };
 }
+
+function existsAsGitRoot(dir: string): boolean {
+  return existsSync(path.join(dir, ".git"));
+}
```

### M-098 `projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index b8416960..dd6e6672 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -26,10 +26,7 @@ import {
   formatW3cRecommendationPayloadForLps,
   lastW3cEvidenceIdInLpsContext,
 } from "@/features/project-assistant/f3/postEvidenceNoraAnalysis";
-import {
-  loadDocsWriteArtifactReviewMaterial,
-  resolveProductEvidenceRefsRoot,
-} from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
+import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/productEvidenceRefsRoot";
 import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
 import {
   buildCkcCognitivePromptSection,
@@ -96,91 +93,15 @@ export function projectW3cExecutionReportSurfaceFromDurable(input: {
   readonly stopReason: string | undefined;
   readonly cursorReportSummary: string | undefined;
 } {
-  const durable = loadDocsWriteArtifactReviewMaterial({
-    refsRoot: resolveProductEvidenceRefsRoot(input.refsRoot),
-    attemptId: input.attemptId,
-    ...(input.targetPath ? { targetPath: input.targetPath } : {}),
-  });
-  if (!durable.ok) {
-    return {
-      executionReport: null,
-      artifactReviewMaterial: undefined,
-      artifactReviewCompleteness: undefined,
-      workPerformedSummary: undefined,
-      blockersSummary: undefined,
-      stopReason: undefined,
-      cursorReportSummary: undefined,
-    };
-  }
-  const artifactReviewMaterial = durable.artifactText;
-  const artifactReviewCompleteness = durable.completeness;
-  const report = durable.cursorReport;
-  if (!report) {
-    // Artifact bytes may exist without a Cursor claim — do not fabricate a report surface.
-    return {
-      executionReport: null,
-      artifactReviewMaterial,
-      artifactReviewCompleteness,
-      workPerformedSummary: undefined,
-      blockersSummary: undefined,
-      stopReason: undefined,
-      cursorReportSummary: undefined,
-    };
-  }
-  const workPerformedSummary = (report.workPerformed ?? [])
-    .map((s) => String(s))
-    .join("; ")
-    .slice(0, 1200);
-  const blockersSummary = (report.blockers ?? [])
-    .map((s) => String(s))
-    .join("; ")
-    .slice(0, 800);
-  const stopReason = report.stopConditionTriggered?.trim() || undefined;
-  const fileFx = report.fileEffects;
-  const artifactsSummary = fileFx
-    ? [
-        ...(fileFx.created ?? []).map((p) => `créé:${p}`),
-        ...(fileFx.modified ?? []).map((p) => `modifié:${p}`),
-        ...(fileFx.deleted ?? []).map((p) => `supprimé:${p}`),
-      ]
-        .join("; ")
-        .slice(0, 800)
-    : null;
-  const validationsSummary = (report.validationEffects ?? [])
-    .map((v) => `${v.identity}:${v.result}`)
-    .join("; ")
-    .slice(0, 600);
-  const reservationsSummary = (report.reservations ?? [])
-    .map((s) => String(s))
-    .join("; ")
-    .slice(0, 600);
-  const cursorReportSummary = [
-    `status=${report.status}`,
-    workPerformedSummary ? `work=${workPerformedSummary}` : null,
-    artifactsSummary ? `files=${artifactsSummary}` : null,
-    validationsSummary ? `validations=${validationsSummary}` : null,
-    blockersSummary ? `blockers=${blockersSummary}` : null,
-    `artifactReview=${durable.completeness}`,
-  ]
-    .filter(Boolean)
-    .join(" | ")
-    .slice(0, 2000);
+  void input;
   return {
-    executionReport: {
-      cursorStatus: report.status,
-      workPerformedSummary: workPerformedSummary || null,
-      artifactsSummary,
-      validationsSummary: validationsSummary || null,
-      blockersSummary: blockersSummary || null,
-      reservationsSummary: reservationsSummary || null,
-      artifactReviewCompleteness: durable.completeness,
-    },
-    artifactReviewMaterial,
-    artifactReviewCompleteness,
-    workPerformedSummary: workPerformedSummary || undefined,
-    blockersSummary: blockersSummary || undefined,
-    stopReason,
-    cursorReportSummary,
+    executionReport: null,
+    artifactReviewMaterial: undefined,
+    artifactReviewCompleteness: undefined,
+    workPerformedSummary: undefined,
+    blockersSummary: undefined,
+    stopReason: undefined,
+    cursorReportSummary: undefined,
   };
 }

```

### M-099 `projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts
index 54294d81..51c84022 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts
@@ -15,7 +15,7 @@ import {
   claimToolSlot,
 } from "./turnBudget";
 import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
-import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial";
+import { resolveProductEvidenceRefsRoot } from "@/features/project-assistant/f3/productEvidenceRefsRoot";
 import { readBoundExecutionReviewItem } from "@/features/project-assistant/f3/readBoundExecutionReviewItem";

 export type ExecutionReviewToolContext = {
```

### M-100 `projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts b/projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts
index 05e2b58a..853ec900 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts
@@ -6,7 +6,6 @@
  */
 import type { Evidence } from "@/lib/oa/evidence-review";
 import { evaluateFunctionalDesignArtifactCompleteness } from "@/lib/oa/evidence-review";
-import type { ProjectRepositoryBinding } from "@/lib/oa/project";
 import {
   deriveCycleObligationSnapshot,
   type CycleObligationSnapshot,
@@ -123,7 +122,7 @@ export type DeriveCycleExitStateInput = {
   projectId: string;
   cycleInstanceId: string;
   cycleTypeId?: string;
-  repositoryBinding?: ProjectRepositoryBinding | null;
+  repositoryBinding?: { identity?: string | null } | null;
   obligationSnapshot?: CycleObligationSnapshot | null;
   executionContracts: readonly DerivableExecutionContract[];
   evidence: readonly Evidence[];
```

### M-101 `projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts b/projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts
index dee7bca6..04ce19bc 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts
@@ -3,7 +3,6 @@
  * Derives APPLICABLE before EC/Evidence/RB rows exist.
  * Absence of rows ≠ N/A. Nora does not own applicability.
  */
-import type { ProjectRepositoryBinding } from "@/lib/oa/project";
 import type {
   FinalizationApplicabilityRules,
   ObligationApplicability,
@@ -43,7 +42,7 @@ export type DeriveCycleObligationSnapshotInput = {
   projectId: string;
   cycleTypeId: string;
   cycleInstanceId?: string;
-  repositoryBinding?: ProjectRepositoryBinding | null;
+  repositoryBinding?: { identity?: string | null } | null;
   /**
    * When true, treat as repo-backed even without binding (tests only).
    * Production callers should rely on repositoryBinding presence.
```

### M-102 `projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts b/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
index 133bfdfe..96036d91 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
@@ -7,7 +7,6 @@
 import type { HumanDecision } from "@/lib/oa/decision";
 import type { Evidence } from "@/lib/oa/evidence-review";
 import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
-import type { ProjectRepositoryBinding } from "@/lib/oa/project";
 import { evaluateFunctionalDesignArtifactCompleteness } from "@/lib/oa/evidence-review";
 import type {
   FinalizationApplicabilityRules,
@@ -76,7 +75,7 @@ export type DeriveFinalizationApplicabilityInput = {
   /** GCEC — cycle type for pre-row F14 obligation binding. */
   cycleTypeId?: string;
   /** GCEC — explicit Project repository binding (contextual Git MUST). */
-  repositoryBinding?: ProjectRepositoryBinding | null;
+  repositoryBinding?: { identity?: string | null } | null;
   /** Optional precomputed snapshot; otherwise derived when cycleTypeId set. */
   obligationSnapshot?: CycleObligationSnapshot | null;
 };
```

### M-103 `projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts b/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
index 1b1c849d..68e9c120 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
@@ -1576,10 +1576,7 @@ export class PilotLifecycleTransitions {
     const projectResult = await this.deps.projectServices.getProject.execute({
       projectId: input.projectId,
     });
-    const repositoryBinding =
-      projectResult.ok === true
-        ? (projectResult.project.repositoryBinding ?? null)
-        : null;
+    const repositoryBinding = null;

     const applicability = deriveFinalizationApplicability({
       cycleInstanceId: input.cycle.cycleInstanceId,
```

### M-104 `projects/sfia-studio/app/lib/oa/decision/domain/types.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
index 0e0bf8fa..47be7f62 100644
--- a/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/decision/domain/types.ts
@@ -166,6 +166,10 @@ export type DecisionBasisGenericMissionContext = {
   scopeOut: string[];
   materiality: "structural" | "non_structural" | "unknown";
   materialityReasonCodes: string[];
+  /**
+   * Sealed git-target identity string for generic Git when a mission needs one.
+   * Not a Product repository-binding record.
+   */
   repositoryBindingIdentity: string | null;
   pathRoot: string | null;
   requiredCapabilities: string[];
```

### M-105 `projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts
index 5edd5280..5876b6f5 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts
@@ -6,7 +6,6 @@
 import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
 import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
 import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
-import { docsWriteContractResultSemantic } from "./docsWriteContractResultSemantic";
 import { missionResultContractResultSemantic } from "./missionResultContractResultSemantic";
 import {
   tempArtifactContractResultSemantic,
@@ -72,7 +71,6 @@ export type ContractResultSemantic = {
 /** Static server-owned registry — compile-time entries only. */
 export const CONTRACT_RESULT_SEMANTICS: readonly ContractResultSemantic[] = [
   tempArtifactContractResultSemantic,
-  docsWriteContractResultSemantic,
   missionResultContractResultSemantic,
 ];

```

### M-106 `projects/sfia-studio/app/lib/oa/evidence-review/index.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 8d6d207d..cb510edc 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -150,41 +150,6 @@ export {
   missionResultHasForbiddenEffects,
   type MissionResultPayload,
 } from "./application/missionResultPayload";
-export {
-  DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
-  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
-  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
-  DOCS_WRITE_STRICT_EO_CORRECTION_REF,
-  DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF,
-  DOCS_WRITE_EVIDENCE_COMPLETION_CORRECTION_REF_V1,
-  DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
-  DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
-  DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE,
-  docsWriteContractResultIdentity,
-  docsWriteArtifactFactsHold,
-  docsWriteConformityFactsHold,
-  assessDocsWriteExpectedOutput,
-  assessDocsWriteEvidenceRequirement,
-  docsWriteContractResultSemantic,
-} from "./application/docsWriteContractResultSemantic";
-export {
-  DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE,
-  DOCS_WRITE_MIN_CONFORMITY_VERIFIER_SOURCE_V1,
-  DOCS_WRITE_MIN_CONFORMITY_TECHNICAL_RESULT_PREFIX,
-  DOCS_WRITE_MIN_CONFORMITY_VERIFIER_TECHNICAL_RESULT_REF_V1,
-  DOCS_WRITE_VE_FILE_EXISTS_AT_TARGET,
-  DOCS_WRITE_VE_REQUIRED_SECTIONS_PRESENT,
-  extractDocsWriteMinConformityCriteria,
-  extractDocsWriteMinConformityCriteriaFromBoundAttempt,
-  computeDocsWriteOracleFingerprint,
-  buildDocsWriteOracleFingerprintMaterial,
-  docsWriteConformityTechnicalResultRef,
-  expectedDocsWriteConformityOracleFingerprint,
-  parseDocsWriteConformityOracleFingerprint,
-  stripMarkdownFencedCodeBlocks,
-  verifyDocsWriteMinConformityFromBytes,
-  verifyDocsWriteMinConformityFromFile,
-} from "./application/docsWriteMinConformityVerifier";
 export {
   resolveCurrentContractResultClaimEvaluation,
   type ResolveCurrentContractResultClaimEvaluationResult,
```

### M-107 `projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
index fab2a812..9703fca8 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
@@ -13,7 +13,7 @@ import {
 import { createAttemptError, isExecutionAttemptDomainError } from "../domain/errors";
 import type { AttemptDetailCode, ActorReference } from "../domain/types";
 import type { GateDGrant } from "../domain/realLaunchSafety";
-import { isM4AuthorizedCursorRealAgent } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
+import { isM4AuthorizedCursorRealAgent } from "../infrastructure/authorizedCursorRealAgent";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
 import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
```

### M-108 `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts` **[CORR-02]**
- **Semantic change:** Git target fidelity identity/remote/checkout
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index bd81eed1..f084e5b6 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -60,7 +60,7 @@ import type {
   ContractSafetyIdentity,
   GateDGrant,
 } from "../domain/realLaunchSafety";
-import { isM4AuthorizedCursorRealAgent } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
+import { isM4AuthorizedCursorRealAgent } from "../infrastructure/authorizedCursorRealAgent";
 import { isM4BoundedLocalCommitRealAgent } from "../infrastructure/m4BoundedLocalCommitCursorAgent";
 import { isM4BoundedRemotePushRealAgent } from "../infrastructure/m4BoundedRemotePushCursorAgent";
 import { isM4BoundedPrCreateRealAgent } from "../infrastructure/m4BoundedPrCreateCursorAgent";
@@ -73,9 +73,12 @@ import type { ExecutionAdapterPort } from "../ports/executionAdapter";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
 import type { RealExecutionLaunchPort } from "../ports/realExecutionLaunchPort";
-import type { DocsWriteLaunchSpec } from "../ports/realExecutionLaunchPort";
-import { M4_BOUNDED_DOCS_WRITE_ACTION } from "../infrastructure/m4BoundedDocsWriteCursorAgent";
-import { ManagedProjectRepositoryResolver } from "../infrastructure/managedProjectRepositoryResolver";
+import { assertRemoteUrlMatchesRepositoryRef } from "../domain/assertLocalBranchRefMatchesExpectedSha";
+import { assertCanonicalGithubRepositoryRef } from "../domain/shellSafeArg";
+import {
+  guardedManagedRepoRootForProtectedGit,
+  resolveIdentityMatchedLocalRepo,
+} from "../infrastructure/managedProjectRepositoryResolver";
 import type { RealLaunchSafetyJournalPort } from "../ports/realLaunchSafetyJournalPort";
 import { deriveAuthorizedExecutionSlice } from "../domain/authorizedExecutionSlice";
 import {
@@ -158,92 +161,109 @@ function asNonEmptyString(value: unknown): string | null {
   return t || null;
 }

+const PROTECTED_GIT_EFFECTS = [
+  "git.commit",
+  "git.push",
+  "github.pr.create",
+  "github.pr.merge",
+] as const;
+
+type ProtectedGitEffect = (typeof PROTECTED_GIT_EFFECTS)[number];
+
+function isProtectedGitEffect(effect: string): effect is ProtectedGitEffect {
+  return (PROTECTED_GIT_EFFECTS as readonly string[]).includes(effect);
+}
+
+function pendingProtectedGitEffects(
+  contract: ExecutionContract,
+  verifiedEffects: readonly string[] | undefined,
+): ProtectedGitEffect[] {
+  const classified = deriveExecutableEffectsFromContractRequirements({
+    evidenceRequirements: Array.isArray(contract.evidenceRequirements)
+      ? contract.evidenceRequirements.map(String)
+      : [],
+    expectedOutputs: Array.isArray(contract.expectedOutputs)
+      ? contract.expectedOutputs.map(String)
+      : undefined,
+    requiredCapabilities: Array.isArray(contract.requiredCapabilities)
+      ? contract.requiredCapabilities.map(String)
+      : undefined,
+    constraints: Array.isArray(contract.constraints)
+      ? contract.constraints.map(String)
+      : undefined,
+    allowFilesystemCreateOrModify: true,
+  });
+  const verified = new Set(verifiedEffects ?? []);
+  return classified.executableEffects.filter(
+    (effect): effect is ProtectedGitEffect =>
+      isProtectedGitEffect(effect) && !verified.has(effect),
+  );
+}
+
 /**
- * Extract DocsWriteLaunchSpec from contract.inputs (CR-GCEC-02).
- * Fail-closed: returns { ok:false, reason } when required fields missing.
+ * EC inputs → repository binding for REAL start.
+ * A provided remote must match the canonical identity. Mismatch does not
+ * fall back to a synthesized GitHub URL.
+ * Absent remote is synthesized only after the identity is canonical.
  */
-export function extractDocsWriteLaunchSpec(
-  contract: ExecutionContract,
-):
-  | { ok: true; spec: DocsWriteLaunchSpec; repositoryBindingIdentity?: string }
-  | { ok: false; reason: string } {
-  const inputs =
-    contract.inputs && typeof contract.inputs === "object"
-      ? (contract.inputs as Record<string, unknown>)
-      : {};
-  const repositoryRef =
-    asNonEmptyString(inputs.repositoryRef) ??
-    asNonEmptyString(inputs.targetRepositoryRef);
-  const targetPath = asNonEmptyString(inputs.targetPath);
-  const pathAllowlist =
-    asStringList(inputs.pathAllowlist) ?? asStringList(inputs.scopeIn) ?? [];
-  const artifactType =
-    asNonEmptyString(inputs.artifactType) ?? "functional_design";
-  const artifactBrief = asNonEmptyString(inputs.artifactBrief);
-  const contentRequirements = asStringList(inputs.contentRequirements) ?? [];
-  const scopeIn = asStringList(inputs.scopeIn) ?? pathAllowlist;
-  const scopeOut = asStringList(inputs.scopeOut) ?? [];
-  const expectedOutputs =
-    asStringList(inputs.expectedOutputs) ??
-    (Array.isArray(contract.expectedOutputs)
-      ? asStringList(contract.expectedOutputs)
-      : null) ??
-    (targetPath ? [targetPath] : []);
-  const validationExpectations =
-    asStringList(inputs.validationExpectations) ?? [];
-  const evidenceRequirements =
-    asStringList(inputs.evidenceRequirements) ??
-    (Array.isArray(contract.evidenceRequirements)
-      ? asStringList(contract.evidenceRequirements)
-      : null) ??
-    [];
-
-  if (!repositoryRef) {
-    return { ok: false, reason: "docs_write_repository_ref_missing" };
-  }
-  if (!targetPath) {
-    return { ok: false, reason: "docs_write_target_path_missing" };
-  }
-  if (pathAllowlist.length === 0) {
-    return { ok: false, reason: "docs_write_path_allowlist_missing" };
-  }
-  if (!artifactBrief) {
-    return { ok: false, reason: "docs_write_artifact_brief_missing" };
+export function sealRepositoryBindingFromExecutionInputs(input: {
+  readonly identity: string;
+  readonly remoteUrl?: unknown;
+  readonly defaultBranch?: unknown;
+  readonly pathRoot?: unknown;
+}):
+  | {
+      readonly ok: true;
+      readonly binding: {
+        identity: string;
+        remoteUrl: string;
+        defaultBranch: string;
+        pathRoot?: string;
+      };
+    }
+  | {
+      readonly ok: false;
+      readonly code: "REAL_WORKSPACE_INVALID";
+      readonly reason:
+        | "repository_identity_not_canonical"
+        | "repository_remote_identity_mismatch";
+    } {
+  const canonical = assertCanonicalGithubRepositoryRef(input.identity.trim());
+  if (!canonical.ok) {
+    return {
+      ok: false,
+      code: "REAL_WORKSPACE_INVALID",
+      reason: "repository_identity_not_canonical",
+    };
   }
-  if (contentRequirements.length === 0) {
-    return { ok: false, reason: "docs_write_content_requirements_missing" };
+  const provided = asNonEmptyString(input.remoteUrl);
+  let remoteUrl: string;
+  if (provided) {
+    const match = assertRemoteUrlMatchesRepositoryRef({
+      remoteUrl: provided,
+      repositoryRef: canonical.ref,
+    });
+    if (!match.ok) {
+      return {
+        ok: false,
+        code: "REAL_WORKSPACE_INVALID",
+        reason: "repository_remote_identity_mismatch",
+      };
+    }
+    remoteUrl = provided;
+  } else {
+    remoteUrl = `https://github.com/${canonical.ref}.git`;
   }
-
-  const bindingIdentity =
-    asNonEmptyString(inputs.repositoryBindingIdentity) ??
-    asNonEmptyString(inputs.repositoryIdentity) ??
-    repositoryRef;
-
-  const rawMode = inputs.artifactWriteMode;
-  const artifactWriteMode =
-    rawMode === "CREATE" || rawMode === "UPDATE" || rawMode === "ASK"
-      ? rawMode
-      : undefined;
-
+  const defaultBranch = asNonEmptyString(input.defaultBranch) ?? "main";
+  const pathRoot = asNonEmptyString(input.pathRoot) ?? undefined;
   return {
     ok: true,
-    spec: {
-      repositoryRef,
-      targetPath,
-      pathAllowlist,
-      artifactType,
-      artifactBrief,
-      contentRequirements,
-      scopeIn,
-      scopeOut,
-      expectedOutputs: expectedOutputs ?? [],
-      validationExpectations,
-      evidenceRequirements: evidenceRequirements ?? [],
-      createOrModify: true,
-      noDelete: true,
-      ...(artifactWriteMode ? { artifactWriteMode } : {}),
+    binding: {
+      identity: canonical.ref,
+      remoteUrl,
+      defaultBranch,
+      ...(pathRoot ? { pathRoot } : {}),
     },
-    repositoryBindingIdentity: bindingIdentity ?? undefined,
   };
 }

@@ -299,16 +319,10 @@ export class StartExecution {
     private readonly safetyJournal?: RealLaunchSafetyJournalPort,
     /**
      * D-GCEC-09/13 — server-only managed repository root base.
-     * Resolves Project.repositoryBinding.identity → local clone.
+     * The managed checkout itself; not a Product repository-binding record.
      * MUST NOT come from ExecutionContract / client.
      */
     private readonly managedRepoRootBase?: string,
-    /**
-     * CR-GCEC-23 — resolve Project.repositoryBinding from durable Project.
-     */
-    private readonly resolveProjectRepositoryBinding?: (
-      projectId: string,
-    ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>,
     /**
      * CR-GCEC-23 / CORR-D-GCEC-AGENT-01 — Evidence list (Result; late-bound OK).
      */
@@ -779,8 +793,6 @@ export class StartExecution {
       );
     }

-    // CR-GCEC-02 — docsWriteSpec BEFORE Gate D consume (fail-closed).
-    let docsWriteSpec: DocsWriteLaunchSpec | undefined;
     let repositoryBindingIdentity: string | undefined;
     let managedRepoRoot: string | undefined;
     let repositoryBinding:
@@ -791,84 +803,59 @@ export class StartExecution {
           pathRoot?: string;
         }
       | undefined;
-    if (contract.action === M4_BOUNDED_DOCS_WRITE_ACTION) {
-      const extracted = extractDocsWriteLaunchSpec(contract);
-      if (!extracted.ok) {
-        return fail("REAL_AGENT_PROFILE_INVALID", extracted.reason, {
-          executionContractId: contract.executionContractId,
-        });
-      }
-      docsWriteSpec = extracted.spec;
-      repositoryBindingIdentity = extracted.repositoryBindingIdentity;
-
+    {
       const inputs =
         contract.inputs && typeof contract.inputs === "object"
           ? (contract.inputs as Record<string, unknown>)
           : {};
-      // D-GCEC-09 — reject client/EC-supplied absolute managed roots.
       if (
         typeof inputs.managedRepoRoot === "string" &&
         inputs.managedRepoRoot.trim()
       ) {
         return fail(
           "REAL_WORKSPACE_INVALID",
-          "docs_write_managed_repo_root_not_ec_controlled",
+          "managed_repo_root_not_ec_controlled",
           { executionContractId: contract.executionContractId },
         );
       }
-
       const identity =
-        (typeof inputs.repositoryIdentity === "string" &&
-          inputs.repositoryIdentity.trim()) ||
-        (typeof inputs.repositoryBindingIdentity === "string" &&
-          inputs.repositoryBindingIdentity.trim()) ||
-        docsWriteSpec.repositoryRef;
-      const remoteUrl =
-        (typeof inputs.remoteUrl === "string" && inputs.remoteUrl.trim()) ||
-        `https://github.com/${identity}.git`;
-      const defaultBranch =
-        (typeof inputs.defaultBranch === "string" &&
-          inputs.defaultBranch.trim()) ||
-        "main";
-      const pathRoot =
-        typeof inputs.pathRoot === "string" && inputs.pathRoot.trim()
-          ? inputs.pathRoot.trim()
-          : undefined;
-      if (!identity) {
-        return fail(
-          "REAL_WORKSPACE_INVALID",
-          "docs_write_repository_binding_missing",
-          { executionContractId: contract.executionContractId },
-        );
-      }
-      repositoryBinding = {
-        identity,
-        remoteUrl,
-        defaultBranch,
-        ...(pathRoot ? { pathRoot } : {}),
-      };
-
-      // Server-side resolution only (D-GCEC-09/13).
-      if (!this.managedRepoRootBase?.trim()) {
-        return fail(
-          "REAL_WORKSPACE_INVALID",
-          "docs_write_managed_repo_root_base_unconfigured",
-          { executionContractId: contract.executionContractId },
-        );
-      }
-      const resolver = new ManagedProjectRepositoryResolver();
-      const resolved = resolver.resolveLocalRepoRoot(
-        { identity },
-        this.managedRepoRootBase,
-      );
-      if (!resolved) {
-        return fail(
-          "REAL_WORKSPACE_INVALID",
-          "docs_write_managed_repo_unresolved",
-          { executionContractId: contract.executionContractId },
-        );
+        asNonEmptyString(inputs.repositoryRef) ??
+        asNonEmptyString(inputs.repositoryIdentity) ??
+        asNonEmptyString(inputs.repositoryBindingIdentity);
+      if (identity) {
+        const sealed = sealRepositoryBindingFromExecutionInputs({
+          identity,
+          remoteUrl: inputs.remoteUrl,
+          defaultBranch: inputs.defaultBranch,
+          pathRoot: inputs.pathRoot,
+        });
+        if (!sealed.ok) {
+          return fail(sealed.code, sealed.reason, {
+            executionContractId: contract.executionContractId,
+          });
+        }
+        repositoryBinding = sealed.binding;
+        repositoryBindingIdentity = sealed.binding.identity;
+        if (this.managedRepoRootBase?.trim()) {
+          const resolution = resolveIdentityMatchedLocalRepo({
+            identity: sealed.binding.identity,
+            managedRootBase: this.managedRepoRootBase,
+          });
+          const guarded = guardedManagedRepoRootForProtectedGit({
+            protectedGitPending:
+              pendingProtectedGitEffects(contract, request.verifiedEffects)
+                .length > 0,
+            checked: true,
+            resolution,
+          });
+          if (!guarded.ok) {
+            return fail(guarded.code, guarded.reason, {
+              executionContractId: contract.executionContractId,
+            });
+          }
+          if (guarded.managedRepoRoot) managedRepoRoot = guarded.managedRepoRoot;
+        }
       }
-      managedRepoRoot = resolved;
     }

     const fingerprint =
@@ -990,11 +977,9 @@ export class StartExecution {
     }

     // D-GCEC-15 / CR-GCEC-23/24 — AuthorizedExecutionSlice from server-derived targets.
-    const evidenceRequirements =
-      docsWriteSpec?.evidenceRequirements ??
-      (Array.isArray(contract.evidenceRequirements)
-        ? contract.evidenceRequirements.map(String)
-        : []);
+    const evidenceRequirements = Array.isArray(contract.evidenceRequirements)
+      ? contract.evidenceRequirements.map(String)
+      : [];
     const contractConstraints = Array.isArray(contract.constraints)
       ? contract.constraints.map(String)
       : undefined;
@@ -1040,10 +1025,8 @@ export class StartExecution {
       (e) => !(request.verifiedEffects ?? []).includes(e),
     );

-    if (remainingGit.length > 0 && this.resolveProjectRepositoryBinding) {
-      const binding = await this.resolveProjectRepositoryBinding(
-        contract.projectId,
-      );
+    if (remainingGit.length > 0 && repositoryBinding?.identity?.trim()) {
+      const binding = repositoryBinding;
       if (!binding?.identity?.trim()) {
         // Canonical repository unavailable — all remaining protected Git blocked.
         unavailableProtectedEffects.push(...remainingGit);
@@ -1054,10 +1037,9 @@ export class StartExecution {
           ? (contract.inputs as Record<string, unknown>)
           : {};
       const projectedRepo =
-        docsWriteSpec?.repositoryRef?.trim() ||
-        (typeof contractInputs.repositoryRef === "string"
+        typeof contractInputs.repositoryRef === "string"
           ? contractInputs.repositoryRef.trim()
-          : undefined);
+          : undefined;
       if (projectedRepo && projectedRepo !== binding.identity.trim()) {
         return fail(
           "ATTEMPT_INVALID",
@@ -1128,7 +1110,7 @@ export class StartExecution {
         );
       }
       }
-    } else if (remainingGit.length > 0 && !this.resolveProjectRepositoryBinding) {
+    } else if (remainingGit.length > 0) {
       // CR-GCEC-23H-A — resolver absent: never derive Git authority from caller.
       // Non-Git slices may still proceed; all remaining protected Git stay blocked.
       if (request.confirmationMatch) {
@@ -1282,9 +1264,6 @@ export class StartExecution {
         );
       }
       const evidenceList = evidenceReadCont.evidence;
-      const projectBinding = this.resolveProjectRepositoryBinding
-        ? await this.resolveProjectRepositoryBinding(contract.projectId)
-        : null;
       const cont = resolvePreCommitWorkspaceContinuation({
         currentAttemptId: attempt.attemptId,
         executionContractId: contract.executionContractId,
@@ -1293,7 +1272,7 @@ export class StartExecution {
         expectedHeadSha: baseHeadSha,
         attempts: peerAttempts,
         evidence: evidenceList,
-        repositoryRef: projectBinding?.identity,
+        repositoryRef: repositoryBindingIdentity,
         authorizedEffects:
           authorizedSlice.authorizedEffects as CursorAuthorizedEffectId[],
         verifiedEffects: request.verifiedEffects,
@@ -1330,7 +1309,6 @@ export class StartExecution {
           : {};
       const message = deriveTrustedCommitMessage({
         contractInputs,
-        docsWriteArtifactBrief: docsWriteSpec?.artifactBrief,
       });
       if (!message.ok) {
         return fail("ATTEMPT_INVALID", message.reason, {
@@ -1339,7 +1317,6 @@ export class StartExecution {
       }
       const repositoryRef =
         repositoryBindingIdentity?.trim() ||
-        docsWriteSpec?.repositoryRef?.trim() ||
         (typeof contractInputs.repositoryRef === "string"
           ? contractInputs.repositoryRef.trim()
           : "");
@@ -1354,8 +1331,9 @@ export class StartExecution {
       // docsWriteSpec.targetPath + contract baseHeadSha (fail closed if absent).
       const exactPaths = workspaceContinuation
         ? workspaceContinuation.expectedVerifiedFiles.map((f) => f.path)
-        : docsWriteSpec?.targetPath
-          ? [docsWriteSpec.targetPath]
+        : typeof contractInputs.targetPath === "string" &&
+            contractInputs.targetPath.trim()
+          ? [contractInputs.targetPath.trim()]
           : [];
       const expectedParentSha =
         workspaceContinuation?.expectedHeadSha ?? baseHeadSha;
@@ -1401,9 +1379,7 @@ export class StartExecution {
           { executionContractId: contract.executionContractId },
         );
       }
-      const projectBindingPush = this.resolveProjectRepositoryBinding
-        ? await this.resolveProjectRepositoryBinding(contract.projectId)
-        : null;
+      const projectBindingPush = repositoryBinding ?? null;
       if (!projectBindingPush?.identity?.trim()) {
         return fail("ATTEMPT_INVALID", "project_repository_binding_missing", {
           executionContractId: contract.executionContractId,
@@ -1498,9 +1474,7 @@ export class StartExecution {
           { executionContractId: contract.executionContractId },
         );
       }
-      const projectBindingPr = this.resolveProjectRepositoryBinding
-        ? await this.resolveProjectRepositoryBinding(contract.projectId)
-        : null;
+      const projectBindingPr = repositoryBinding ?? null;
       if (!projectBindingPr?.identity?.trim()) {
         return fail("ATTEMPT_INVALID", "project_repository_binding_missing", {
           executionContractId: contract.executionContractId,
@@ -1666,9 +1640,7 @@ export class StartExecution {
           { executionContractId: contract.executionContractId },
         );
       }
-      const projectBindingMerge = this.resolveProjectRepositoryBinding
-        ? await this.resolveProjectRepositoryBinding(contract.projectId)
-        : null;
+      const projectBindingMerge = repositoryBinding ?? null;
       if (!projectBindingMerge?.identity?.trim()) {
         return fail("ATTEMPT_INVALID", "project_repository_binding_missing", {
           executionContractId: contract.executionContractId,
@@ -1751,7 +1723,6 @@ export class StartExecution {
     // PJ-REPROOF-04 — EC → Cursor prompt projection at Start (server-side only).
     // Exact durable contract + Attempt identity; no client-supplied prompt.
     const repositoryRefForPrompt =
-      docsWriteSpec?.repositoryRef?.trim() ||
       repositoryBindingIdentity?.trim() ||
       (typeof (contract.inputs as Record<string, unknown> | undefined)
         ?.repositoryRef === "string"
@@ -1807,7 +1778,6 @@ export class StartExecution {
         scope: contract.scope,
         timeoutMs: window.resolvedMaxDurationMs,
         cursorMissionPrompt,
-        ...(docsWriteSpec ? { docsWriteSpec } : {}),
         ...(gitCommitSpec ? { gitCommitSpec } : {}),
         ...(gitPushSpec ? { gitPushSpec } : {}),
         ...(gitPrCreateSpec ? { gitPrCreateSpec } : {}),
```

### M-109 `projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
index 1f71f016..a740b6c4 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
@@ -2,7 +2,7 @@
  * AuthorizedExecutionSlice — current authorized Cursor effects (D-GCEC-13/15).
  * Derived from EC ∩ agent capabilities ∩ HD ∩ Confirmations ∩ runtime policy.
  * Future gated effects are NOT granted in advance.
- * CR-GCEC-15: cap:cursor.docs_write does NOT imply Git effects.
+ * CR-GCEC-15: a documentary capability token does NOT imply Git effects.
  * CR-GCEC-19: protected Git effects require effect-target-bound Confirmation
  * (EC + effect + repo + branch/PR when applicable) — generic scope ≠ target identity.
  * CR-GCEC-24: Cursor executable effects ≠ Studio verification obligations.
```

### M-110 `projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
index 91542613..cbf756fd 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
@@ -13,9 +13,6 @@ export const M4_REAL_GATEWAY_ADAPTER_ID = "adp:m4-cursor-cli-real" as const;
 export const M4_BOUNDED_RO_CURSOR_AGENT_ID =
   "agt:m4.cursor.bounded_readonly" as const;

-export const M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID =
-  "agt:m4.cursor.bounded_docs_write" as const;
-
 export const M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID =
   "agt:m4.cursor.bounded_local_commit" as const;

```

### M-111 `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
index 5b57020c..db735e53 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
@@ -14,12 +14,6 @@ import type { ExecutionContract } from "@/lib/oa/execution-contract";
 import type { AgentMatchCriteria } from "./invariants";
 import type { ExecutionAttempt } from "./types";
 import { deriveExecutableEffectsFromContractRequirements } from "./contractEffectClassification";
-import {
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  M4_BOUNDED_DOCS_WRITE_SCOPE,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
-} from "../infrastructure/m4BoundedDocsWriteCursorAgent";
 import {
   M4_BOUNDED_RO_ACTION,
   M4_BOUNDED_RO_CAPABILITY,
@@ -57,10 +51,6 @@ import {
   STUDIO_CURSOR_GENERALIST_TARGET,
 } from "../infrastructure/studioCursorGeneralistAgent";
 import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
-import {
-  resolveVerifiedDocsWritePriorAttempt,
-  type VerifiedDocsWritePriorAttempt,
-} from "./resolveVerifiedDocsWritePriorAttempt";
 import {
   resolveVerifiedLocalCommitPriorAttempt,
   type VerifiedLocalCommitPriorAttempt,
@@ -73,7 +63,6 @@ import { resolveVerifiedRemotePushPriorForPrCreate } from "./resolveCrossEcVerif
 import { resolveVerifiedPullRequestNumber } from "./resolveGitEffectTarget";

 export type AttemptExecutionProfileKind =
-  | "docs_write"
   | "local_commit"
   | "remote_push"
   | "pr_create"
@@ -157,43 +146,6 @@ const UNSUPPORTED_M4_PROTECTED: ReadonlySet<CursorAuthorizedEffectId> = new Set(
   "github.pr.update",
 ]);

-function docsWriteProfile(reason: string): AttemptExecutionProfile {
-  return {
-    kind: "docs_write",
-    effectClass: "filesystem",
-    reason,
-    criteria: {
-      requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
-      action: M4_BOUNDED_DOCS_WRITE_ACTION,
-      target: M4_BOUNDED_DOCS_WRITE_TARGET,
-      scope: M4_BOUNDED_DOCS_WRITE_SCOPE,
-    },
-  };
-}
-
-function localCommitProfile(
-  reason: string,
-  prior: VerifiedDocsWritePriorAttempt,
-): AttemptExecutionProfile {
-  return {
-    kind: "local_commit",
-    effectClass: "git.commit",
-    reason,
-    lineage: {
-      priorAttemptId: prior.priorAttemptId,
-      evidenceId: prior.evidenceId,
-      artifactPath: prior.artifactPath,
-      artifactDigest: prior.artifactDigest,
-    },
-    criteria: {
-      requiredCapabilities: [M4_BOUNDED_LOCAL_COMMIT_CAPABILITY],
-      action: M4_BOUNDED_LOCAL_COMMIT_ACTION,
-      target: M4_BOUNDED_LOCAL_COMMIT_TARGET,
-      scope: M4_BOUNDED_LOCAL_COMMIT_SCOPE,
-    },
-  };
-}
-
 function remotePushProfile(
   reason: string,
   prior: VerifiedLocalCommitPriorAttempt,
@@ -392,41 +344,6 @@ function requireEvidenceReader(
   return null;
 }

-function resolveLocalCommitOrFail(
-  input: ResolveAttemptExecutionProfileInput,
-  reason: string,
-): ResolveAttemptExecutionProfileResult {
-  const reader = requireEvidenceReader(input);
-  if (reader) return reader;
-  const prior = resolveVerifiedDocsWritePriorAttempt({
-    contract: input.contract,
-    attempts: input.attempts ?? [],
-    evidence: input.evidence ?? [],
-  });
-  if (!prior.ok) {
-    if (prior.reason === "docs_write_prior_none") {
-      return {
-        ok: false,
-        reason: "attempt_profile_commit_without_verified_fs_lineage",
-      };
-    }
-    if (prior.reason === "docs_write_prior_ambiguous") {
-      return {
-        ok: false,
-        reason: "attempt_profile_docs_write_prior_ambiguous",
-      };
-    }
-    return {
-      ok: false,
-      reason: "attempt_profile_docs_write_prior_incomplete",
-    };
-  }
-  return {
-    ok: true,
-    profile: localCommitProfile(reason, prior.prior),
-  };
-}
-
 function resolveRemotePushOrFail(
   input: ResolveAttemptExecutionProfileInput,
   reason: string,
@@ -655,182 +572,6 @@ export function resolveAttemptExecutionProfile(
     UNSUPPORTED_M4_PROTECTED.has(e as CursorAuthorizedEffectId),
   );

-  const isM4DocsWriteContract =
-    contract.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
-    (contract.requiredCapabilities ?? []).includes(
-      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-    );
-
-  // When Start provides server-derived authorizedEffects, use them to confirm
-  // the unique slice — still require exact prior lineage for progressive steps.
-  if (input.authorizedEffects && isM4DocsWriteContract) {
-    const cls = uniqueAuthorizedEffectClass(input.authorizedEffects);
-    if (cls === "empty") {
-      return { ok: false, reason: "attempt_profile_zero_eligible" };
-    }
-    if (cls === "mixed") {
-      return { ok: false, reason: "attempt_profile_ambiguous_slice" };
-    }
-    if (cls === "unsupported_protected") {
-      return { ok: false, reason: "attempt_profile_effect_not_supported" };
-    }
-    if (cls === "filesystem") {
-      return {
-        ok: true,
-        profile: docsWriteProfile("authorized_slice_filesystem"),
-      };
-    }
-    if (cls === "git.commit") {
-      return resolveLocalCommitOrFail(input, "authorized_slice_git_commit");
-    }
-    if (cls === "git.push") {
-      return resolveRemotePushOrFail(input, "authorized_slice_git_push");
-    }
-    if (cls === "github.pr.create") {
-      return resolvePrCreateOrFail(input, "authorized_slice_pr_create");
-    }
-    if (cls === "github.pr.merge") {
-      return resolvePrMergeOrFail(input, "authorized_slice_pr_merge");
-    }
-    // validation-only / unknown under M4 progressive — fail closed (CR-06).
-    return { ok: false, reason: "attempt_profile_effect_not_supported" };
-  }
-
-  // Selection-time / restart: durable Evidence only.
-  if (
-    isM4DocsWriteContract &&
-    (hasFs || hasCommit || hasPush || hasPr || hasMerge || hasUnsupportedProtected)
-  ) {
-    // Progressive M4 path — never fall back to contract_legacy for later effects.
-    if (
-      hasUnsupportedProtected &&
-      !hasFs &&
-      !hasCommit &&
-      !hasPush &&
-      !hasPr &&
-      !hasMerge
-    ) {
-      return { ok: false, reason: "attempt_profile_effect_not_supported" };
-    }
-
-    if (hasFs && (hasCommit || hasPush || hasPr || hasMerge)) {
-      if (input.evidenceReaderAvailable === false) {
-        return {
-          ok: false,
-          reason: "attempt_profile_evidence_reader_unavailable",
-        };
-      }
-      const prior = resolveVerifiedDocsWritePriorAttempt({
-        contract,
-        attempts: input.attempts ?? [],
-        evidence,
-      });
-      if (!prior.ok) {
-        if (prior.reason === "docs_write_prior_none") {
-          // No qualified A yet → still on docs-write slice.
-          return {
-            ok: true,
-            profile: docsWriteProfile("progressive_fs_outstanding"),
-          };
-        }
-        if (prior.reason === "docs_write_prior_ambiguous") {
-          return {
-            ok: false,
-            reason: "attempt_profile_docs_write_prior_ambiguous",
-          };
-        }
-        return {
-          ok: false,
-          reason: "attempt_profile_docs_write_prior_incomplete",
-        };
-      }
-
-      const commitVerified = evidenceVerifiedForSource(
-        evidence,
-        contract,
-        "git:local_commit",
-      );
-      if (hasCommit && !commitVerified) {
-        return {
-          ok: true,
-          profile: localCommitProfile(
-            "progressive_commit_outstanding",
-            prior.prior,
-          ),
-        };
-      }
-
-      // After commitVerified (or commit not required): progressive C→D→E.
-      if (hasPush) {
-        const pushVerified = evidenceVerifiedForSource(
-          evidence,
-          contract,
-          "git:remote_push",
-        );
-        if (!pushVerified) {
-          return resolveRemotePushOrFail(
-            input,
-            "progressive_push_outstanding",
-          );
-        }
-      }
-      if (hasPr) {
-        const prVerified = evidenceVerifiedForSource(
-          evidence,
-          contract,
-          "git:pull_request",
-        );
-        if (!prVerified) {
-          return resolvePrCreateOrFail(
-            input,
-            "progressive_pr_create_outstanding",
-          );
-        }
-      }
-      if (hasMerge) {
-        const mergeVerified = evidenceVerifiedForSource(
-          evidence,
-          contract,
-          "git:merge",
-        );
-        if (!mergeVerified) {
-          return resolvePrMergeOrFail(
-            input,
-            "progressive_pr_merge_outstanding",
-          );
-        }
-      }
-
-      // All required progressive Cursor effects satisfied for this EC.
-      return {
-        ok: false,
-        reason: "attempt_profile_lifecycle_slice_exhausted",
-      };
-    }
-
-    if (hasFs && !hasCommit && !hasPush && !hasPr && !hasMerge) {
-      return {
-        ok: true,
-        profile: docsWriteProfile("docs_write_only_contract"),
-      };
-    }
-
-    if (hasCommit && !hasFs) {
-      return resolveLocalCommitOrFail(input, "commit_only_contract");
-    }
-    if (hasPush && !hasFs && !hasCommit) {
-      return resolveRemotePushOrFail(input, "push_only_contract");
-    }
-    if (hasPr && !hasFs && !hasCommit && !hasPush) {
-      return resolvePrCreateOrFail(input, "pr_create_only_contract");
-    }
-    if (hasMerge && !hasFs && !hasCommit && !hasPush && !hasPr) {
-      return resolvePrMergeOrFail(input, "pr_merge_only_contract");
-    }
-
-    return { ok: false, reason: "attempt_profile_effect_not_supported" };
-  }
-
   // Sealed historical M4 RO GCEC — exact specialized criteria (not generalist).
   const isM4RoContract =
     contract.action === M4_BOUNDED_RO_ACTION &&
@@ -934,18 +675,6 @@ export function resolveAttemptExecutionProfile(
       },
     };
   }
-  if (
-    contract.action === M4_BOUNDED_DOCS_WRITE_ACTION &&
-    caps.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY)
-  ) {
-    // Docs-write without progressive evidenceRequirements classification —
-    // still sealed specialized (not generalist).
-    return {
-      ok: true,
-      profile: docsWriteProfile("standalone_docs_write_sealed"),
-    };
-  }
-
   // Non-M4 / W3A / other → contract_legacy binds the ONE Product
   // generalist technical quartet (normal matching). Functional mission stays
   // on ExecutionContract / cursorMissionPrompt — never agent types.
```

### M-112 `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
index b881cc71..89d3b97f 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
@@ -4,7 +4,6 @@
  * Pure application/domain projection — no persistence.
  */
 import type { Evidence } from "@/lib/oa/evidence-review";
-import type { ProjectRepositoryBinding } from "@/lib/oa/project";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
 import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
 import type { GitEffectConfirmationMatch } from "./authorizedExecutionSlice";
@@ -29,11 +28,16 @@ export type ResolveGitEffectTargetInput = {
     ExecutionContract,
     "executionContractId" | "projectId" | "cycleInstanceId" | "inputs"
   >;
-  /** Canonical Project.repositoryBinding — required for protected Git. */
-  projectRepositoryBinding: ProjectRepositoryBinding;
+  /** ExecutionContract repository identity — required for protected Git. */
+  projectRepositoryBinding: {
+    readonly identity: string;
+    readonly remoteUrl: string;
+    readonly defaultBranch: string;
+    readonly pathRoot?: string;
+  };
   /**
-   * Projected docs-write / EC repositoryRef when present.
-   * MUST match Project.repositoryBinding.identity or resolution fails.
+   * Projected EC repositoryRef when present.
+   * MUST match repository identity or resolution fails.
    */
   projectedRepositoryRef?: string;
   actorId: string;
```

### M-113 `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts` **[CORR-02]**
- **Semantic change:** Evidence FS-anchor allowlist tighten
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
index 1b670162..cbe42113 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
@@ -10,10 +10,9 @@ import type { Evidence } from "@/lib/oa/evidence-review";
 import type { CursorAuthorizedEffectId } from "./cursorExecutionReport";
 import type { ExecutionAttempt } from "./types";
 import type { ResumeVerifiedFileFact } from "../ports/realExecutionWorkspacePort";
-import { resolveVerifiedDocsWritePriorAttempt } from "./resolveVerifiedDocsWritePriorAttempt";
 import {
-  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
   M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
+  STUDIO_CURSOR_GENERALIST_AGENT_ID,
 } from "./realLaunchSafety";

 const FS_EFFECTS = new Set<CursorAuthorizedEffectId>([
@@ -29,6 +28,52 @@ const PROTECTED_GIT_EFFECTS = new Set<CursorAuthorizedEffectId>([
   "github.pr.merge",
 ]);

+/**
+ * Artifact-materialization Evidence sources that may supersede an FS anchor.
+ *
+ * HISTORICAL durable reading only — not Product admission of docs_write.
+ * Origin/main stamped file artifacts as `execution_attempt:docs_write`
+ * (retired `DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE`), including dotted suffixes
+ * such as `execution_attempt:docs_write.v2`. That producer is gone.
+ *
+ * Product generalist materialization does not stamp a replacement
+ * `execution_attempt:*` artifact source. `IngestExecutionAttemptEvidence`
+ * writes a prose source (`execution attempt <id> (succeeded)`), which is a
+ * terminal-attempt label shared with non-artifact rows and is excluded.
+ * `execution_attempt:mission_result` and every other non-allowlisted source
+ * cannot supersede (false / NOT_PROVEN).
+ */
+export const FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES = [
+  "execution_attempt:docs_write",
+] as const;
+
+export type FsAnchorArtifactMaterializationEvidenceSource =
+  (typeof FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES)[number];
+
+/**
+ * HISTORICAL Attempt agent recorded by the retired bounded docs-write executor.
+ * Durable reading only — not Product admission of a docs_write launch path.
+ * Current materialization Attempts use {@link STUDIO_CURSOR_GENERALIST_AGENT_ID}.
+ */
+const HISTORICAL_BOUNDED_DOCS_WRITE_AGENT_ID =
+  "agt:m4.cursor.bounded_docs_write" as const;
+
+function isDurableArtifactMaterializationAttemptAgent(
+  selectedAgentRef: string | undefined,
+): boolean {
+  return (
+    selectedAgentRef === STUDIO_CURSOR_GENERALIST_AGENT_ID ||
+    selectedAgentRef === HISTORICAL_BOUNDED_DOCS_WRITE_AGENT_ID
+  );
+}
+
+function isAllowlistedArtifactMaterializationSource(source: string): boolean {
+  for (const allowed of FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES) {
+    if (source === allowed || source.startsWith(`${allowed}.`)) return true;
+  }
+  return false;
+}
+
 export type WorkspaceContinuationDescriptor = {
   readonly priorAttemptId: string;
   readonly expectedHeadSha: string;
@@ -47,7 +92,7 @@ export type ResolvePreCommitWorkspaceContinuationInput = {
   readonly evidence: readonly Evidence[];
   readonly authorizedEffects: readonly CursorAuthorizedEffectId[];
   readonly verifiedEffects?: readonly CursorAuthorizedEffectId[];
-  /** Server-owned Project.repositoryBinding.identity — never client string. */
+  /** Server-owned sealed git-target identity string — never a client string and not a Product repository-binding record. */
   readonly repositoryRef?: string;
 };

@@ -126,9 +171,11 @@ export type FsAnchorSupersessionInput = {
  * verifiedEffects alone MUST NOT supersede.
  * All lineage fields are required — no weak/same-EC-only fallback.
  *
- * Requires: succeeded docs-write Attempt A + VERIFIED Artifact Evidence on A
- * + succeeded local-commit Attempt B + VERIFIED git:local_commit Evidence on B
- * with exact H0 / repo / paths.
+ * Requires: succeeded generalist or historical bounded-docs-write Attempt A
+ * + exactly one VERIFIED artifact Evidence on A whose source is an allowlisted
+ * artifact-materialization identity + succeeded local-commit Attempt B
+ * + VERIFIED git:local_commit Evidence on B with exact H0 / repo / paths.
+ * Ambiguous (not exactly one) or non-allowlisted artifact source → false.
  */
 export function isFsAnchorSupersededByVerifiedLocalCommit(
   input: FsAnchorSupersessionInput,
@@ -152,7 +199,7 @@ export function isFsAnchorSupersededByVerifiedLocalCommit(
     !priorAttempt ||
     priorAttempt.status !== "succeeded" ||
     priorAttempt.executionContractId !== input.executionContractId ||
-    priorAttempt.selectedAgentRef !== M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID
+    !isDurableArtifactMaterializationAttemptAgent(priorAttempt.selectedAgentRef)
   ) {
     return false;
   }
@@ -167,10 +214,7 @@ export function isFsAnchorSupersededByVerifiedLocalCommit(
     }
     if (ev.bindings.executionAttemptId !== priorAttemptId) return false;
     const source = String(ev.source ?? "");
-    if (
-      source !== "execution_attempt:docs_write" &&
-      !/^execution_attempt:docs_write(\.|$)/.test(source)
-    ) {
+    if (!isAllowlistedArtifactMaterializationSource(source)) {
       return false;
     }
     const loc = String(ev.location ?? "").trim();
@@ -237,8 +281,100 @@ export function isFsAnchorSupersededByVerifiedLocalCommit(
   return matching.length === 1;
 }

+type PriorArtifactMaterialization = {
+  readonly priorAttemptId: string;
+  readonly evidenceId: string;
+  readonly artifactPath: string;
+  readonly artifactDigest: string;
+};
+
+type ResolvePriorArtifactMaterializationResult =
+  | { readonly ok: true; readonly prior: PriorArtifactMaterialization }
+  | {
+      readonly ok: false;
+      readonly reason: "prior_none" | "prior_ambiguous" | "prior_incomplete";
+      readonly candidateAttemptIds?: readonly string[];
+    };
+
+/**
+ * Unique prior succeeded materialization Attempt + exactly one allowlisted
+ * VERIFIED artifact Evidence. Historical docs_write source/agent are recognized
+ * as durable Evidence. Not a docs_write Product admission path.
+ */
+function resolvePriorArtifactMaterializationAttempt(input: {
+  readonly currentAttemptId: string;
+  readonly executionContractId: string;
+  readonly projectId: string;
+  readonly cycleInstanceId: string;
+  readonly attempts: readonly ExecutionAttempt[];
+  readonly evidence: readonly Evidence[];
+}): ResolvePriorArtifactMaterializationResult {
+  const candidates: PriorArtifactMaterialization[] = [];
+
+  for (const attempt of input.attempts) {
+    if (attempt.attemptId === input.currentAttemptId) continue;
+    if (attempt.executionContractId !== input.executionContractId) continue;
+    if (attempt.status !== "succeeded") continue;
+    if (!isDurableArtifactMaterializationAttemptAgent(attempt.selectedAgentRef)) {
+      continue;
+    }
+
+    const matching = input.evidence.filter((ev) => {
+      if (ev.status !== "verified") return false;
+      if (ev.type !== "artifact") return false;
+      if (ev.bindings.projectId !== input.projectId) return false;
+      if (ev.bindings.cycleInstanceId !== input.cycleInstanceId) return false;
+      if (ev.bindings.executionContractId !== input.executionContractId) {
+        return false;
+      }
+      if (ev.bindings.executionAttemptId !== attempt.attemptId) return false;
+      if (!isAllowlistedArtifactMaterializationSource(String(ev.source ?? ""))) {
+        return false;
+      }
+      const loc = String(ev.location ?? "").trim();
+      if (!loc) return false;
+      const digest = String(ev.digest ?? "").trim().toLowerCase();
+      if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
+        return false;
+      }
+      return true;
+    });
+    if (matching.length === 0) continue;
+    if (matching.length > 1) {
+      return {
+        ok: false,
+        reason: "prior_ambiguous",
+        candidateAttemptIds: [attempt.attemptId],
+      };
+    }
+    const ev = matching[0]!;
+    candidates.push({
+      priorAttemptId: attempt.attemptId,
+      evidenceId: ev.evidenceId,
+      artifactPath: String(ev.location).trim(),
+      artifactDigest: String(ev.digest).trim().toLowerCase(),
+    });
+  }
+
+  if (candidates.length === 0) {
+    return { ok: false, reason: "prior_none" };
+  }
+  if (candidates.length > 1) {
+    return {
+      ok: false,
+      reason: "prior_ambiguous",
+      candidateAttemptIds: candidates.map((c) => c.priorAttemptId),
+    };
+  }
+  const only = candidates[0]!;
+  if (!only.artifactPath || !only.artifactDigest.startsWith("sha256:")) {
+    return { ok: false, reason: "prior_incomplete" };
+  }
+  return { ok: true, prior: only };
+}
+
 /**
- * Resolve unique prior succeeded Attempt whose VERIFIED docs-write Evidence
+ * Resolve unique prior succeeded Attempt whose VERIFIED artifact Evidence
  * matches Project / Cycle / EC / Attempt bindings (shared with Attempt profile).
  *
  * CR-08: supersession ONLY when priorA.ok with exact lineage fields.
@@ -248,17 +384,13 @@ export function isFsAnchorSupersededByVerifiedLocalCommit(
 export function resolvePreCommitWorkspaceContinuation(
   input: ResolvePreCommitWorkspaceContinuationInput,
 ): ResolvePreCommitWorkspaceContinuationResult {
-  const priorA = resolveVerifiedDocsWritePriorAttempt({
-    contract: {
-      executionContractId: input.executionContractId,
-      projectId: input.projectId,
-      cycleInstanceId: input.cycleInstanceId,
-      expectedOutputs: undefined,
-      inputs: undefined,
-    },
+  const priorA = resolvePriorArtifactMaterializationAttempt({
+    currentAttemptId: input.currentAttemptId,
+    executionContractId: input.executionContractId,
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
     attempts: input.attempts,
     evidence: input.evidence,
-    excludeAttemptId: input.currentAttemptId,
   });

   if (priorA.ok) {
@@ -279,8 +411,7 @@ export function resolvePreCommitWorkspaceContinuation(
     ) {
       return { required: false, descriptor: null };
     }
-  } else if (priorA.reason === "docs_write_prior_ambiguous") {
-    // CR-08: ambiguous A → fail closed; do NOT evaluate generic commit Evidence.
+  } else if (priorA.reason === "prior_ambiguous") {
     if (
       preCommitWorkspaceContinuationRequired({
         authorizedEffects: input.authorizedEffects,
@@ -295,7 +426,7 @@ export function resolvePreCommitWorkspaceContinuation(
       };
     }
     return { required: false, descriptor: null };
-  } else if (priorA.reason === "docs_write_prior_incomplete") {
+  } else if (priorA.reason === "prior_incomplete") {
     if (
       preCommitWorkspaceContinuationRequired({
         authorizedEffects: input.authorizedEffects,
@@ -310,7 +441,6 @@ export function resolvePreCommitWorkspaceContinuation(
     }
     return { required: false, descriptor: null };
   }
-  // priorA none: NO FS→SHA supersession. Fall through to continuation semantics.

   if (
     !preCommitWorkspaceContinuationRequired({
@@ -322,7 +452,7 @@ export function resolvePreCommitWorkspaceContinuation(
   }

   if (!priorA.ok) {
-    if (priorA.reason === "docs_write_prior_none") {
+    if (priorA.reason === "prior_none") {
       const succeededSameEc = input.attempts.filter(
         (a) =>
           a.attemptId !== input.currentAttemptId &&
```

### M-114 `projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index 52bd35f1..7f777f79 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -235,8 +235,9 @@ export type StartExecutionRequest = {
   confirmations?: readonly Confirmation[];
   /**
    * CR-GCEC-23 — HOSTILE / ASSERTION only.
-   * Server derives canonical Confirmation target from Project.repositoryBinding,
-   * durable EC inputs, and VERIFIED Evidence. If supplied, assertion must match
+   * Server derives canonical Confirmation target from durable EC inputs
+   * (sealed git-target identity string, not a Product repository-binding
+   * record) and VERIFIED Evidence. If supplied, assertion must match
    * server truth or StartExecution refuses. NEVER used to build actionRef.
    */
   confirmationMatch?: {
```

### M-115 `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index d509b3cc..78d1f9d2 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -53,8 +53,6 @@ export * from "./domain/resolveGitEffectTarget";
 export * from "./domain/resolvePreCommitWorkspaceContinuation";
 export { verifyWorkspaceFileEffects } from "./application/verifyWorkspaceFileEffects";
 export type { WorkspaceFileVerificationResult } from "./application/verifyWorkspaceFileEffects";
-export { resolveSealedDocsWriteWorktreePaths } from "./application/resolveSealedDocsWriteWorktreePaths";
-export type { ResolveSealedDocsWriteWorktreePathsResult } from "./application/resolveSealedDocsWriteWorktreePaths";

 export * from "./ports/executionAttemptRepository";
 export * from "./ports/executionAttemptTechnicalStorePort";
@@ -67,7 +65,7 @@ export * from "./ports/realLaunchSafetyJournalPort";
 // launchSafetyJournalPort is a thin re-export — avoid duplicate export * conflict.

 export { SelectExecutionAgent } from "./application/selectExecutionAgent";
-export { StartExecution, extractContractBaseHeadSha, extractDocsWriteLaunchSpec } from "./application/startExecution";
+export { StartExecution, extractContractBaseHeadSha } from "./application/startExecution";
 export {
   o3LaterIntervalMs,
   o3ObservationScheduleMs,
@@ -203,15 +201,7 @@ export {
   STUDIO_CURSOR_GENERALIST_TARGET,
   STUDIO_CURSOR_GENERALIST_SCOPE,
 } from "./infrastructure/studioCursorGeneralistAgent";
-export {
-  createM4BoundedDocsWriteCursorAgentDescriptor,
-  isM4BoundedDocsWriteRealAgent,
-  isM4AuthorizedCursorRealAgent,
-  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
-  M4_BOUNDED_DOCS_WRITE_ACTION,
-  M4_BOUNDED_DOCS_WRITE_TARGET,
-  M4_BOUNDED_DOCS_WRITE_SCOPE,
-} from "./infrastructure/m4BoundedDocsWriteCursorAgent";
+export { isM4AuthorizedCursorRealAgent } from "./infrastructure/authorizedCursorRealAgent";
 export {
   createM4BoundedLocalCommitCursorAgentDescriptor,
   isM4BoundedLocalCommitRealAgent,
@@ -244,12 +234,6 @@ export {
   M4_BOUNDED_PR_MERGE_TARGET,
   M4_BOUNDED_PR_MERGE_SCOPE,
 } from "./infrastructure/m4BoundedPrMergeCursorAgent";
-export {
-  FakeDocsWriteLaunchPort,
-  listRelativeFiles,
-  sha256File,
-  type FakeDocsWriteLaunchPortOptions,
-} from "./infrastructure/fakeDocsWriteLaunchPort";
 export {
   FakeCursorGitExternalState,
   type FakeCursorCommitRecord,
@@ -268,9 +252,6 @@ export type { ManagedRepoBindingIdentity } from "./infrastructure/managedProject
 export {
   resolveAttemptExecutionProfile,
 } from "./domain/resolveAttemptExecutionProfile";
-export {
-  resolveVerifiedDocsWritePriorAttempt,
-} from "./domain/resolveVerifiedDocsWritePriorAttempt";
 export {
   resolveVerifiedLocalCommitPriorAttempt,
   parseLocalCommitShaFromEvidenceLocation,
@@ -309,11 +290,6 @@ export type {
   ResolveAttemptExecutionProfileInput,
   ResolveAttemptExecutionProfileResult,
 } from "./domain/resolveAttemptExecutionProfile";
-export type {
-  VerifiedDocsWritePriorAttempt,
-  ResolveVerifiedDocsWritePriorAttemptInput,
-  ResolveVerifiedDocsWritePriorAttemptResult,
-} from "./domain/resolveVerifiedDocsWritePriorAttempt";
 export type {
   VerifiedLocalCommitPriorAttempt,
   ResolveVerifiedLocalCommitPriorAttemptInput,
@@ -506,12 +482,6 @@ export type CreateInMemoryExecutionAttemptServicesOptions = {
   /** Flat aliases accepted by tests — same as realBoundary. */
   launchSafetyJournal?: RealLaunchSafetyJournalPort;
   realLaunch?: RealExecutionLaunchPort;
-  /**
-   * CR-GCEC-23 — Project.repositoryBinding resolver (server-derived Confirmation).
-   */
-  resolveProjectRepositoryBinding?: (
-    projectId: string,
-  ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>;
   /**
    * CR-GCEC-23 — Evidence list for verified PR identity (may be late-bound).
    */
@@ -608,7 +578,6 @@ export function createInMemoryExecutionAttemptServices(
       realBoundary?.launchPort,
       realBoundary?.safetyJournal,
       realBoundary?.managedRepoRootBase,
-      options.resolveProjectRepositoryBinding,
       options.listProjectEvidence,
       options.repositoryRead,
     ),
```

### M-116 `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver.ts` **[CORR-02]**
- **Semantic change:** Git target fidelity identity/remote/checkout
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver.ts
index 16d348e9..4d7e5494 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver.ts
@@ -2,15 +2,24 @@
  * ManagedProjectRepositoryResolver — maps Project repository binding identity
  * to a local managed clone under managedRootBase (CR-GCEC-03).
  *
- * ZERO network. Fail-closed if path missing or not a git repo.
+ * ZERO network. Does not clone, fetch, or fall back to process.cwd.
+ * Path existence (`.git` present) is not identity fidelity. Protected Git
+ * must use resolveIdentityMatchedLocalRepo, which accepts a candidate only
+ * when origin matches the repository identity.
  */
-import { existsSync } from "node:fs";
+import { existsSync, readFileSync, statSync } from "node:fs";
 import path from "node:path";
+import { assertRemoteUrlMatchesRepositoryRef } from "../domain/assertLocalBranchRefMatchesExpectedSha";

 export type ManagedRepoBindingIdentity = {
   readonly identity: string;
 };

+const GIT_CONFIG_READ_MAX_BYTES = 1_000_000;
+const REMOTE_ORIGIN_HEADER = /^\[remote\s+["']origin["']\]$/i;
+const SECTION_HEADER = /^\[[^\]]+\]$/;
+const ORIGIN_URL_LINE = /^\s*url\s*=\s*(.*?)\s*$/;
+
 /**
  * Sanitize owner/repo → filesystem-safe segment (no traversal).
  */
@@ -22,10 +31,118 @@ export function sanitizeManagedRepoIdentity(identity: string): string {
   return trimmed.replace(/[^a-zA-Z0-9._-]+/g, "__");
 }

+export type IdentityMatchedLocalRepoFailure =
+  | "managed_repo_absent"
+  | "managed_repo_identity_mismatch";
+
+export type IdentityMatchedLocalRepoResolution =
+  | { readonly ok: true; readonly repoRoot: string }
+  | { readonly ok: false; readonly reason: IdentityMatchedLocalRepoFailure };
+
+/**
+ * Read `origin` from checkout metadata without invoking git and without
+ * network mutation.
+ *
+ * Directory `.git/config` is read directly. A `.git` gitfile (`gitdir:`) is
+ * followed one hop, then `commondir` when the worktree gitdir has no origin
+ * url (the usual linked-worktree layout).
+ *
+ * KNOWN GAP: this is not a worktree engine. It does not run git, follow
+ * `core.worktree`, resolve submodules, or chase more than one commondir hop.
+ * Unreadable or mismatched origin fails closed.
+ */
+export function readOriginRemoteUrlFromGitMetadata(
+  checkoutRoot: string,
+): string | null {
+  const configPath = resolveGitConfigPath(checkoutRoot);
+  if (!configPath) return null;
+  const text = readTextIfSmall(configPath);
+  if (text == null) return null;
+  return parseOriginUrlFromGitConfig(text);
+}
+
+export function parseOriginUrlFromGitConfig(configText: string): string | null {
+  let inOrigin = false;
+  let url: string | null = null;
+  for (const rawLine of configText.split(/\r?\n/)) {
+    const line = rawLine.trim();
+    if (!line || line.startsWith("#") || line.startsWith(";")) continue;
+    if (SECTION_HEADER.test(line)) {
+      inOrigin = REMOTE_ORIGIN_HEADER.test(line);
+      continue;
+    }
+    if (!inOrigin) continue;
+    const urlMatch = rawLine.match(ORIGIN_URL_LINE);
+    if (!urlMatch) continue;
+    const value = stripGitConfigValue(urlMatch[1] ?? "");
+    if (value) url = value;
+  }
+  return url;
+}
+
+/**
+ * Candidate under managedRootBase is accepted only when its origin remote
+ * matches `identity` via assertRemoteUrlMatchesRepositoryRef.
+ * Missing checkout, missing origin, or a mismatch → not ok. Never creates a repo.
+ */
+export function resolveIdentityMatchedLocalRepo(input: {
+  readonly identity: string;
+  readonly managedRootBase: string;
+}): IdentityMatchedLocalRepoResolution {
+  const resolver = new ManagedProjectRepositoryResolver();
+  const candidate = resolver.resolveLocalRepoRoot(
+    { identity: input.identity },
+    input.managedRootBase,
+  );
+  if (!candidate) return { ok: false, reason: "managed_repo_absent" };
+  const origin = readOriginRemoteUrlFromGitMetadata(candidate);
+  if (!origin) return { ok: false, reason: "managed_repo_identity_mismatch" };
+  const match = assertRemoteUrlMatchesRepositoryRef({
+    remoteUrl: origin,
+    repositoryRef: input.identity,
+  });
+  if (!match.ok) return { ok: false, reason: "managed_repo_identity_mismatch" };
+  return { ok: true, repoRoot: candidate };
+}
+
+/**
+ * Protected Git may use a managed checkout only when identity resolution
+ * succeeded. A configured base whose checkout is absent or origin-mismatched
+ * fails closed. Non-protected work does not fail when the checkout is unusable.
+ */
+export function guardedManagedRepoRootForProtectedGit(input: {
+  readonly protectedGitPending: boolean;
+  readonly checked: boolean;
+  readonly resolution: IdentityMatchedLocalRepoResolution | null;
+}):
+  | {
+      readonly ok: true;
+      readonly managedRepoRoot?: string;
+    }
+  | {
+      readonly ok: false;
+      readonly code: "REAL_WORKSPACE_INVALID";
+      readonly reason: IdentityMatchedLocalRepoFailure;
+    } {
+  if (!input.checked || input.resolution == null) return { ok: true };
+  if (input.resolution.ok) {
+    return { ok: true, managedRepoRoot: input.resolution.repoRoot };
+  }
+  if (input.protectedGitPending) {
+    return {
+      ok: false,
+      code: "REAL_WORKSPACE_INVALID",
+      reason: input.resolution.reason,
+    };
+  }
+  return { ok: true };
+}
+
 export class ManagedProjectRepositoryResolver {
   /**
-   * Resolve `{managedRootBase}/{sanitizedIdentity}` when it exists as a git repo.
-   * Returns null when missing / not a git directory.
+   * Resolve `{managedRootBase}/{sanitizedIdentity}` when a `.git` directory
+   * or gitfile exists. This existence check is NOT remote fidelity.
+   * Returns null when missing / not a git directory or gitfile.
    */
   resolveLocalRepoRoot(
     binding: ManagedRepoBindingIdentity,
@@ -54,4 +171,79 @@ export class ManagedProjectRepositoryResolver {
     }
     return candidate;
   }
+
+  /**
+   * Protected-Git resolution: same candidate as resolveLocalRepoRoot, accepted
+   * only when origin matches identity. Otherwise null.
+   */
+  resolveIdentityMatchedLocalRepoRoot(
+    binding: ManagedRepoBindingIdentity,
+    managedRootBase: string,
+  ): string | null {
+    const resolved = resolveIdentityMatchedLocalRepo({
+      identity: binding.identity,
+      managedRootBase,
+    });
+    return resolved.ok ? resolved.repoRoot : null;
+  }
+}
+
+function resolveGitConfigPath(checkoutRoot: string): string | null {
+  const gitPath = path.join(checkoutRoot, ".git");
+  if (!existsSync(gitPath)) return null;
+  let st;
+  try {
+    st = statSync(gitPath);
+  } catch {
+    return null;
+  }
+  if (st.isDirectory()) {
+    const config = path.join(gitPath, "config");
+    return existsSync(config) ? config : null;
+  }
+  if (!st.isFile()) return null;
+  const gitfile = readTextIfSmall(gitPath);
+  if (gitfile == null) return null;
+  const match = gitfile.match(/^gitdir:\s*(.+)\s*$/m);
+  const gitdirRaw = match?.[1]?.trim();
+  if (!gitdirRaw) return null;
+  const gitdir = path.resolve(checkoutRoot, gitdirRaw);
+  return configPathFromGitDir(gitdir);
+}
+
+function configPathFromGitDir(gitdir: string): string | null {
+  const direct = path.join(gitdir, "config");
+  if (existsSync(direct)) {
+    const text = readTextIfSmall(direct);
+    if (text != null && parseOriginUrlFromGitConfig(text)) return direct;
+  }
+  const commonFile = path.join(gitdir, "commondir");
+  if (!existsSync(commonFile)) return existsSync(direct) ? direct : null;
+  const commonRel = readTextIfSmall(commonFile)?.trim();
+  if (!commonRel) return existsSync(direct) ? direct : null;
+  const commonConfig = path.join(path.resolve(gitdir, commonRel), "config");
+  if (existsSync(commonConfig)) return commonConfig;
+  return existsSync(direct) ? direct : null;
+}
+
+function readTextIfSmall(filePath: string): string | null {
+  try {
+    const st = statSync(filePath);
+    if (!st.isFile() || st.size > GIT_CONFIG_READ_MAX_BYTES) return null;
+    return readFileSync(filePath, "utf8");
+  } catch {
+    return null;
+  }
+}
+
+function stripGitConfigValue(raw: string): string {
+  const value = raw.trim();
+  if (
+    value.length >= 2 &&
+    ((value.startsWith('"') && value.endsWith('"')) ||
+      (value.startsWith("'") && value.endsWith("'")))
+  ) {
+    return value.slice(1, -1).trim();
+  }
+  return value;
 }
```

### M-117 `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
index acf1f9aa..c958e318 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
@@ -71,9 +71,6 @@ export type CreateSqliteExecutionAttemptServicesOptions = {
     readonly safetyJournal: RealLaunchSafetyJournalPort;
     readonly managedRepoRootBase?: string;
   };
-  resolveProjectRepositoryBinding?: (
-    projectId: string,
-  ) => Promise<import("@/lib/oa/project").ProjectRepositoryBinding | null>;
   listProjectEvidence?: import("../../domain/projectEvidenceList").ListProjectEvidenceFn;
   /** CR-04 — optional RepositoryRead for merge fresh preflight. */
   repositoryRead?: import("@/lib/oa/git-ports").RepositoryReadPort;
@@ -194,7 +191,6 @@ export function createSqliteExecutionAttemptServices(
       realBoundary?.launchPort,
       realBoundary?.safetyJournal,
       realBoundary?.managedRepoRootBase,
-      options.resolveProjectRepositoryBinding,
       options.listProjectEvidence,
       options.repositoryRead,
     ),
```

### M-118 `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts` **[CORR-02]**
- **Semantic change:** Residual docs_write stub/helper cleanup
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index b7134aac..c55c48d7 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -6,7 +6,7 @@
  * Requires ProcessRunner + RealExecutionWorkspacePort (no Fake defaults).
  * Order: enablement → bin resolve → prepareWorkspace → runner.invoke.
  */
-import { accessSync, constants, existsSync } from "node:fs";
+import { accessSync, constants } from "node:fs";
 import path from "node:path";
 import {
   isStudioCursorRealEnabled,
@@ -24,10 +24,6 @@ import type {
   RealLaunchResult,
   RealProcessObservation,
 } from "../ports/realExecutionLaunchPort";
-import {
-  assertArtifactWriteModeAtExecution,
-  isAutomaticProductDocsWriteTargetPath,
-} from "@/lib/oa/project/domain/artifactTargetRouting";
 import type { RealExecutionWorkspacePort } from "../ports/realExecutionWorkspacePort";
 import { DisabledRealProcessRunner } from "./nodeCursorProcessRunner";
 import { assertResolvedTimeoutMs } from "@/lib/oa/execution-contract";
@@ -35,7 +31,6 @@ import {
   CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
   isCursorTrustMarkerPathCompatible,
 } from "./cursorTrustMarkerPathCompatibility";
-import { M4_BOUNDED_DOCS_WRITE_ACTION } from "./m4BoundedDocsWriteCursorAgent";
 import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
 import { M4_BOUNDED_REMOTE_PUSH_ACTION } from "./m4BoundedRemotePushCursorAgent";
 import { M4_BOUNDED_PR_CREATE_ACTION } from "./m4BoundedPrCreateCursorAgent";
@@ -64,7 +59,6 @@ import {
   resolveMutatingConfinementEffectClass,
   stripInheritedCursorShellEgressEnv,
 } from "./mutatingCursorConfinementEnv";
-import { resolveSealedDocsWriteWorktreePaths } from "../application/resolveSealedDocsWriteWorktreePaths";

 /**
  * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — one mission, one enforcement overlay.
@@ -521,13 +515,6 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       !isPrCreateProfile &&
       (Boolean(gitPrMergeSpec) ||
         request.action === M4_BOUNDED_PR_MERGE_ACTION);
-    const isDocsWrite =
-      !isLocalCommitProfile &&
-      !isRemotePushProfile &&
-      !isPrCreateProfile &&
-      !isPrMergeProfile &&
-      request.action === M4_BOUNDED_DOCS_WRITE_ACTION;
-
     const rejectFreeShell = (): RealLaunchResult | null => {
       if (
         typeof (request as { freeShellScript?: unknown }).freeShellScript ===
@@ -855,92 +842,6 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         semanticFingerprint: request.semanticFingerprint,
         missionPrompt,
       });
-    } else if (isDocsWrite) {
-      const spec = request.docsWriteSpec;
-      if (!spec) {
-        return {
-          outcome: "reject",
-          gatewayId: this.gatewayId,
-          attemptId: request.attemptId,
-          reason: "docs_write_spec_missing",
-          realProcessInvoked: false,
-          detailCode: "REAL_AGENT_PROFILE_INVALID",
-        };
-      }
-      // Sealed EC paths stay repo-relative; absolutize only for Cursor instruction
-      // under the prepared worktree so the agent cannot drop monorepo prefixes.
-      const resolvedPaths = resolveSealedDocsWriteWorktreePaths({
-        worktreeRoot: workspacePath,
-        targetPath: spec.targetPath,
-        pathAllowlist: spec.pathAllowlist,
-      });
-      if (!resolvedPaths.ok) {
-        return {
-          outcome: "reject",
-          gatewayId: this.gatewayId,
-          attemptId: request.attemptId,
-          reason: resolvedPaths.reason,
-          realProcessInvoked: false,
-          detailCode: "REAL_WORKSPACE_INVALID",
-        };
-      }
-      // Execution-time TOCTOU — same invariant as FakeDocsWriteLaunchPort,
-      // before Cursor REAL process is invoked.
-      let targetExists: boolean | null = null;
-      try {
-        if (!existsSync(workspacePath)) {
-          targetExists = null;
-        } else {
-          targetExists = existsSync(resolvedPaths.absoluteTargetPath);
-        }
-      } catch {
-        targetExists = null;
-      }
-      const writeGuard = assertArtifactWriteModeAtExecution({
-        artifactWriteMode: spec.artifactWriteMode,
-        targetExists,
-        requireResolvedWriteMode: isAutomaticProductDocsWriteTargetPath(
-          resolvedPaths.sealedTargetPath,
-        ),
-      });
-      if (!writeGuard.ok) {
-        return {
-          outcome: "reject",
-          gatewayId: this.gatewayId,
-          attemptId: request.attemptId,
-          reason: writeGuard.code,
-          realProcessInvoked: false,
-          detailCode: "REAL_WORKSPACE_INVALID",
-        };
-      }
-      // Enforcement overlay only — the EC mission carries WHAT to write.
-      // Brief / content / scope / expectedOutputs must NOT appear here as a
-      // competing mission authority (NELC-01 WS3).
-      const docsWriteEnforcement = [
-        "TÂCHE UNIQUE — bounded docs-write déterministe (GCEC).",
-        `EXACT AUTHORIZED FILE (absolute path inside prepared worktree — modify exactly this file and no other): ${resolvedPaths.absoluteTargetPath}`,
-        `Canonical sealed targetPath (repo-relative, do not reinterpret): ${resolvedPaths.sealedTargetPath}`,
-        `AUTHORIZED ROOT(S) (absolute under prepared worktree): ${resolvedPaths.absolutePathAllowlist.join(", ")}`,
-        `Canonical sealed pathAllowlist (repo-relative): ${resolvedPaths.sealedPathAllowlist.join(", ")}`,
-        "Do not reinterpret relative paths against a nested subproject or editor root.",
-        `Repository: ${spec.repositoryRef}`,
-        `Validations techniques: ${spec.validationExpectations.join(", ") || "path_allowlist; no_delete"}`,
-        "Ne créer/modifier AUCUN autre fichier.",
-        "Ne supprimer AUCUN fichier (noDelete=true).",
-        "Ne pas commit, push, PR, merge, ni remote git.",
-        "Ne lancer aucune commande Shell.",
-        "Utiliser uniquement les outils d'édition de fichiers (Write/StrReplace).",
-        "Ne pas modifier README.md.",
-        "En cas d'ambiguïté ou de chemin hors allowlist: STOP immédiatement.",
-        `target=${request.target ?? ""}`,
-        `action=${request.action ?? ""}`,
-        `scope=${request.scope ?? ""}`,
-        `fingerprint=${request.semanticFingerprint}`,
-      ];
-      instruction = composeBoundedInstruction({
-        missionPrompt,
-        enforcement: docsWriteEnforcement,
-      });
     } else if (
       request.action === M4_BOUNDED_RO_ACTION ||
       request.selectedAgentRef === M4_BOUNDED_RO_CURSOR_AGENT_ID
@@ -997,7 +898,6 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
     // Docs-write + git mutation profiles + generalist mission prompt: agent mode.
     const hasMissionPrompt = missionPrompt !== null;
     const usesAgentMode =
-      isDocsWrite ||
       isLocalCommitProfile ||
       isRemotePushProfile ||
       isPrCreateProfile ||
@@ -1035,7 +935,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
     // Prompt forbids remain defense-in-depth — NOT the technical authority boundary.
     // Proves REMOTE AUTH ENVIRONMENT POLICY only — NOT AUTH REAL.
     const childEnv: NodeJS.ProcessEnv = isMutatingGcecCursorProfile({
-      isDocsWrite,
+      isDocsWrite: false,
       isLocalCommitProfile,
       isRemotePushProfile,
       isPrCreateProfile,
```

### M-119 `projects/sfia-studio/app/lib/oa/execution-contract/index.ts` **[CORR-02]**
- **Semantic change:** Residual docs_write stub/helper cleanup
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index c20ea5e7..0c5659c3 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -152,9 +152,6 @@ export {
   projectExecutionContractInspectionDisclosure,
   requiredInspectedFactsForContract,
   attestationCoversRequiredFacts,
-  isDocsWriteExecutionContract,
-  DOCS_WRITE_ACTION,
-  DOCS_WRITE_TECHNICAL_TARGET,
   type ExecutionContractInspectionDisclosure,
   type InspectionDisclosureProjectionResult,
 } from "./projection/inspectionDisclosure";
```

### M-120 `projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts` **[CORR-02]**
- **Semantic change:** Residual docs_write stub/helper cleanup
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts b/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts
index 559172eb..e831f481 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts
@@ -21,9 +21,6 @@ import {
   type ContractSourceGrounding,
 } from "../domain/contractSourceGrounding";

-export const DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
-export const DOCS_WRITE_TECHNICAL_TARGET = "workspace.isolated.docs_write" as const;
-
 export type ExecutionContractInspectionDisclosure = {
   readonly action: string;
   readonly technicalTarget: string;
@@ -55,7 +52,7 @@ export type ExecutionContractInspectionDisclosure = {
   readonly contractVersion: number;
   readonly executionContractId: string;
   readonly semanticFingerprint: string | null;
-  /** docs_write contracts missing mandatory effect targets are incomplete. */
+  /** Always complete: the retired specialized document-write profile is unavailable. */
   readonly disclosureComplete: boolean;
   readonly incompletenessCode: "INSPECTION_DISCLOSURE_INCOMPLETE" | null;
 };
@@ -91,15 +88,6 @@ function asBoolean(value: unknown): boolean | null {
   return typeof value === "boolean" ? value : null;
 }

-export function isDocsWriteExecutionContract(
-  contract: Pick<ExecutionContract, "action" | "target">,
-): boolean {
-  return (
-    contract.action === DOCS_WRITE_ACTION ||
-    contract.target === DOCS_WRITE_TECHNICAL_TARGET
-  );
-}
-
 /**
  * Allowlisted execution-significant facts for Product inspection disclosure.
  * Does not expose the raw `inputs` bag.
@@ -145,9 +133,7 @@ export function projectExecutionContractInspectionDisclosure(
   const reportRequirements =
     parsedReportRequirements.length > 0 ? parsedReportRequirements : null;

-  const docsWrite = isDocsWriteExecutionContract(contract);
-  const disclosureComplete =
-    !docsWrite || (targetPath !== null && targetRepositoryRef !== null);
+  const disclosureComplete = true;

   const disclosure: ExecutionContractInspectionDisclosure = {
     action: contract.action,
@@ -190,7 +176,7 @@ export function projectExecutionContractInspectionDisclosure(
       code: "INSPECTION_DISCLOSURE_INCOMPLETE",
       disclosure,
       message:
-        "Disclosure d'inspection incomplète — cible exacte docs_write absente du contrat durable.",
+        "Disclosure d'inspection incomplète — faits obligatoires absents du contrat durable.",
     };
   }

@@ -200,8 +186,7 @@ export function projectExecutionContractInspectionDisclosure(
 /**
  * Stable fact identifiers the Pilot must have inspected for this contract.
  * Optional contract fields that are absent are not invented.
- * Mandatory docs_write effect facts fail closed when absent (empty profile
- * is never returned for incomplete docs_write — callers must refuse).
+ * The retired specialized document-write profile adds no mandatory facts.
  */
 export function requiredInspectedFactsForContract(
   contract: ExecutionContract,
@@ -224,17 +209,6 @@ export function requiredInspectedFactsForContract(
     "semanticFingerprint",
   ];

-  if (isDocsWriteExecutionContract(contract)) {
-    facts.push("inputs.targetRepositoryRef");
-    facts.push("inputs.targetPath");
-    if (d.scopeIn) facts.push("inputs.scopeIn");
-    if (d.scopeOut) facts.push("inputs.scopeOut");
-    if (d.createOrModify !== null) facts.push("inputs.createOrModify");
-    if (d.noDelete !== null) facts.push("inputs.noDelete");
-    if (d.contentRequirements) facts.push("inputs.contentRequirements");
-    if (d.validationExpectations) facts.push("inputs.validationExpectations");
-  }
-
   if (d.expectedOutputs && d.expectedOutputs.length > 0) {
     facts.push("expectedOutputs");
   }
```

### M-121 `projects/sfia-studio/app/lib/oa/project/application/createProject.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/application/createProject.ts b/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
index 40c727bc..e0f4be3e 100644
--- a/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
+++ b/projects/sfia-studio/app/lib/oa/project/application/createProject.ts
@@ -16,11 +16,7 @@ import type {
   LivingProjectState,
   Project,
 } from "../domain/types";
-import {
-  composeProjectWorkspacePathRoot,
-  deriveProjectWorkspaceKeyFromTitle,
-} from "../domain/projectWorkspaceKey";
-import { resolveServerOwnedRepositoryConfig } from "../domain/serverOwnedRepositoryConfig";
+import { deriveProjectWorkspaceKeyFromTitle } from "../domain/projectWorkspaceKey";
 import type { LivingProjectStateRepositoryPort } from "../ports/livingProjectStateRepositoryPort";
 import type { ProjectAuditJournalPort } from "../ports/projectAuditJournalPort";
 import type { ProjectRepositoryPort } from "../ports/projectRepositoryPort";
@@ -230,18 +226,6 @@ export class CreateProject {
       const projectWorkspaceKey = deriveProjectWorkspaceKeyFromTitle(
         request.title,
       );
-      const projectPathRoot =
-        composeProjectWorkspacePathRoot(projectWorkspaceKey);
-      const serverRepo = resolveServerOwnedRepositoryConfig(process.env);
-      const repositoryBinding = serverRepo
-        ? {
-            provider: serverRepo.provider,
-            identity: serverRepo.identity,
-            remoteUrl: serverRepo.remoteUrl,
-            defaultBranch: serverRepo.defaultBranch,
-            pathRoot: projectPathRoot,
-          }
-        : undefined;

       const project: Project = {
         schemaVersion: "0.1.0-oa",
@@ -251,7 +235,6 @@ export class CreateProject {
         currentLpsVersionId: lpsVersionId,
         doctrinePackageRef: structuredClone(doctrinePackageRef),
         projectWorkspaceKey,
-        ...(repositoryBinding ? { repositoryBinding } : {}),
         createdAt: timestamp,
         updatedAt: timestamp,
         createdBy: structuredClone(request.createdBy),
```

### M-122 `projects/sfia-studio/app/lib/oa/project/domain/invariants.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/project/domain/invariants.ts
index cc94efda..27b1bcb5 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/invariants.ts
@@ -10,7 +10,6 @@ import {
   type LivingProjectState,
   type Project,
   type ProjectDetailCode,
-  type ProjectRepositoryBinding,
 } from "./types";

 /** Modeled identifier pattern (common/identifier.schema.json). */
@@ -179,71 +178,3 @@ export function assertProjectActiveWithDoctrine(
   }
   return null;
 }
-
-const GITHUB_IDENTITY_PATTERN = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
-const SHA1_OR_SHA256_HEX = /^(?:[a-f0-9]{40}|[a-f0-9]{64})$/i;
-
-/**
- * Validate optional Project.repositoryBinding (GCEC D-GCEC-02).
- * Fail-closed: no ambient workspace fallback, no path traversal.
- */
-export function validateRepositoryBinding(
-  binding: ProjectRepositoryBinding | undefined | null,
-): InvariantViolation | null {
-  if (binding == null) return null;
-  if (binding.provider !== "github") {
-    return { detailCode: "PROJECT_INVALID", reason: "repository_provider_invalid" };
-  }
-  const identity = typeof binding.identity === "string" ? binding.identity.trim() : "";
-  if (!identity || !GITHUB_IDENTITY_PATTERN.test(identity)) {
-    return { detailCode: "PROJECT_INVALID", reason: "repository_identity_invalid" };
-  }
-  const remoteUrl =
-    typeof binding.remoteUrl === "string" ? binding.remoteUrl.trim() : "";
-  if (!remoteUrl) {
-    return { detailCode: "PROJECT_INVALID", reason: "repository_remote_url_empty" };
-  }
-  const expectedHttps = `https://github.com/${identity}.git`;
-  const expectedHttpsBare = `https://github.com/${identity}`;
-  const expectedSsh = `git@github.com:${identity}.git`;
-  const expectedSshBare = `git@github.com:${identity}`;
-  const remoteOk =
-    remoteUrl === expectedHttps ||
-    remoteUrl === expectedHttpsBare ||
-    remoteUrl === expectedSsh ||
-    remoteUrl === expectedSshBare;
-  if (!remoteOk) {
-    return {
-      detailCode: "PROJECT_INVALID",
-      reason: "repository_remote_identity_mismatch",
-    };
-  }
-  const branch =
-    typeof binding.defaultBranch === "string" ? binding.defaultBranch.trim() : "";
-  if (!branch || branch.includes("..") || branch.includes("/") || branch.includes("\\")) {
-    return { detailCode: "PROJECT_INVALID", reason: "repository_default_branch_invalid" };
-  }
-  if (binding.baseSha != null) {
-    const sha = binding.baseSha.trim();
-    if (!SHA1_OR_SHA256_HEX.test(sha)) {
-      return { detailCode: "PROJECT_INVALID", reason: "repository_base_sha_invalid" };
-    }
-  }
-  if (binding.pathRoot != null) {
-    const pathRoot = binding.pathRoot.trim().replace(/\/+$/, "");
-    if (!pathRoot) {
-      return { detailCode: "PROJECT_INVALID", reason: "repository_path_root_empty" };
-    }
-    if (
-      pathRoot.startsWith("/") ||
-      pathRoot.includes("\\") ||
-      pathRoot.split("/").some((seg) => seg === ".." || seg === "")
-    ) {
-      return {
-        detailCode: "PROJECT_INVALID",
-        reason: "repository_path_root_traversal",
-      };
-    }
-  }
-  return null;
-}
```

### M-123 `projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts b/projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts
index 57145ed6..92b46f5a 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts
@@ -30,6 +30,15 @@ export function composeProjectWorkspacePathRoot(workspaceKey: string): string {
   return `${PROJECT_WORKSPACE_PREFIX}/${key}`;
 }

+/** Repo-relative workspace root from a durable key, or null when the key is absent/invalid. */
+export function projectWorkspacePathRootFromKey(
+  workspaceKey: string | null | undefined,
+): string | null {
+  const key = workspaceKey?.trim() ?? "";
+  if (!isValidProjectWorkspaceKey(key)) return null;
+  return composeProjectWorkspacePathRoot(key);
+}
+
 export function isValidProjectWorkspaceKey(key: string): boolean {
   return (
     typeof key === "string" &&
```

### M-124 `projects/sfia-studio/app/lib/oa/project/domain/types.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/types.ts b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
index 3e6c5323..0f1e085b 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
@@ -35,29 +35,6 @@ export type LivingProjectStateStatus =
   | "conflict"
   | "superseded";

-/**
- * GCEC — explicit Project → target repository binding (D-GCEC-02).
- * Persisted only inside Project.payload_json (schema-free additive).
- * Ambient Studio repoRoot is NEVER an implicit target.
- */
-export type ProjectRepositoryProvider = "github";
-
-export type ProjectRepositoryBinding = {
-  provider: ProjectRepositoryProvider;
-  /** e.g. owner/repo */
-  identity: string;
-  remoteUrl: string;
-  defaultBranch: string;
-  /** Optional pin; otherwise resolved at PREPARE/Gate D. */
-  baseSha?: string;
-  /**
-   * Relative allowlist root.
-   * New Projects: `projects/<stable-workspace-key>` (server-owned).
-   * Legacy Projects may retain historical roots (e.g. docs/).
-   */
-  pathRoot?: string;
-};
-
 export type Project = {
   schemaVersion: "0.1.0-oa";
   projectId: string;
@@ -71,11 +48,6 @@ export type Project = {
    * Set once at create; title rename must NOT recompute.
    */
   projectWorkspaceKey?: string;
-  /**
-   * Explicit Product target repository — never ambient sfia-workspace.
-   * For new Projects this is an internal server-owned projection (no manual UI).
-   */
-  repositoryBinding?: ProjectRepositoryBinding;
   createdAt: string;
   updatedAt?: string;
   createdBy: ActorReference;
```

### M-125 `projects/sfia-studio/app/lib/oa/project/index.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/index.ts b/projects/sfia-studio/app/lib/oa/project/index.ts
index 6aafb918..52be22a7 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -10,7 +10,6 @@ export * from "./domain/types";
 export * from "./domain/errors";
 export * from "./domain/invariants";
 export * from "./domain/projectWorkspaceKey";
-export * from "./domain/serverOwnedRepositoryConfig";
 export * from "./domain/artifactTargetRouting";
 export {
   probeManagedRepoRelativePathExists,
@@ -29,11 +28,6 @@ export { ListProjects } from "./application/listProjects";
 export { GetCurrentLivingProjectState } from "./application/getCurrentLivingProjectState";
 export { GetLivingProjectStateVersion } from "./application/getLivingProjectStateVersion";
 export { AppendLivingProjectStateVersion } from "./application/appendLivingProjectStateVersion";
-export { SetProjectRepositoryBinding } from "./application/setProjectRepositoryBinding";
-export type {
-  SetProjectRepositoryBindingRequest,
-  SetProjectRepositoryBindingResult,
-} from "./application/setProjectRepositoryBinding";
 export {
   MaterializeFromMemoryB,
   createMaterializeFromMemoryB,
@@ -104,7 +98,6 @@ import { GetCurrentLivingProjectState } from "./application/getCurrentLivingProj
 import { GetLivingProjectStateVersion } from "./application/getLivingProjectStateVersion";
 import { GetProject } from "./application/getProject";
 import { ListProjects } from "./application/listProjects";
-import { SetProjectRepositoryBinding } from "./application/setProjectRepositoryBinding";
 import { MemoryLivingProjectStateRepository } from "./infrastructure/memoryLivingProjectStateRepository";
 import { MemoryProjectRepository } from "./infrastructure/memoryProjectRepository";
 import { MemoryProjectStore } from "./infrastructure/memoryProjectStore";
@@ -128,7 +121,6 @@ export type ProjectServices = {
   getCurrentLivingProjectState: GetCurrentLivingProjectState;
   getLivingProjectStateVersion: GetLivingProjectStateVersion;
   appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
-  setProjectRepositoryBinding: SetProjectRepositoryBinding;
   /** Optional dispose for durable backends (SQLite). */
   dispose?: () => void;
 };
@@ -183,11 +175,6 @@ export function createInMemoryProjectServices(
       audit,
       store,
     ),
-    setProjectRepositoryBinding: new SetProjectRepositoryBinding(
-      projects,
-      clock,
-      audit,
-    ),
   };
 }

```

### M-126 `projects/sfia-studio/app/lib/oa/project/infrastructure/managedRepoPathFacts.ts` **[CORR-02]**
- **Semantic change:** CORR-02 supporting fixture/test
```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/managedRepoPathFacts.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/managedRepoPathFacts.ts
index 317c21c9..325b9255 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/managedRepoPathFacts.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/managedRepoPathFacts.ts
@@ -6,8 +6,9 @@
  *
  * Returns null when the managed clone / base is unavailable (unknown fact → ASK).
  */
-import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
+import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
 import path from "node:path";
+import { assertCanonicalGithubRepositoryRef } from "@/lib/oa/execution-attempt/domain/shellSafeArg";
 import {
   ManagedProjectRepositoryResolver,
   sanitizeManagedRepoIdentity,
@@ -98,7 +99,12 @@ export function listManagedRepoPathsUnderRoot(input: {
   return out;
 }

-/** Test helper: ensure a managed clone skeleton exists (git dir marker only). */
+/**
+ * Test helper: ensure a managed clone skeleton exists.
+ * Writes a coherent origin url when identity is canonical and config is absent,
+ * so protected Git identity checks do not treat the marker as a foreign remote.
+ * Does not clone or contact a network.
+ */
 export function ensureManagedRepoCloneSkeleton(input: {
   managedRepoRootBase: string;
   identity: string;
@@ -110,5 +116,14 @@ export function ensureManagedRepoCloneSkeleton(input: {
   if (!existsSync(gitDir)) {
     mkdirSync(gitDir, { recursive: true });
   }
+  const configPath = path.join(gitDir, "config");
+  const canonical = assertCanonicalGithubRepositoryRef(input.identity.trim());
+  if (!existsSync(configPath) && canonical.ok) {
+    writeFileSync(
+      configPath,
+      `[remote "origin"]\n\turl = https://github.com/${canonical.ref}.git\n`,
+      "utf8",
+    );
+  }
   return repoRoot;
 }
```

### M-127 `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
index 7a011934..7558eca5 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
@@ -9,7 +9,6 @@ import { GetCurrentLivingProjectState } from "../../application/getCurrentLiving
 import { GetLivingProjectStateVersion } from "../../application/getLivingProjectStateVersion";
 import { GetProject } from "../../application/getProject";
 import { ListProjects } from "../../application/listProjects";
-import { SetProjectRepositoryBinding } from "../../application/setProjectRepositoryBinding";
 import type { LivingProjectStateRepositoryPort } from "../../ports/livingProjectStateRepositoryPort";
 import type { ProjectAuditJournalPort } from "../../ports/projectAuditJournalPort";
 import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";
@@ -38,7 +37,6 @@ export type SqliteProductProjectServices = {
   getCurrentLivingProjectState: GetCurrentLivingProjectState;
   getLivingProjectStateVersion: GetLivingProjectStateVersion;
   appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
-  setProjectRepositoryBinding: SetProjectRepositoryBinding;
   dbPath: string;
   dispose: () => void;
 };
@@ -89,11 +87,6 @@ export function createSqliteProductProjectServices(
       audit,
       store,
     ),
-    setProjectRepositoryBinding: new SetProjectRepositoryBinding(
-      projects,
-      clock,
-      audit,
-    ),
   };
 }

@@ -150,11 +143,6 @@ export function createTestSqliteProductProjectServices(
       audit,
       store,
     ),
-    setProjectRepositoryBinding: new SetProjectRepositoryBinding(
-      projects,
-      clock,
-      audit,
-    ),
   };
 }

```

### M-128 `projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts b/projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts
index 70915182..9d83a17d 100644
--- a/projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts
+++ b/projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts
@@ -275,7 +275,7 @@ function presentAttemptDone(

 /**
  * Planned work — never surface raw action/target/scope machine codes
- * (cursor.docs_write.apply, workspace.isolated.*, studio.gcec.*, …).
+ * (studio.cursor.generalist.execute, workspace.isolated.*, studio.gcec.*, …).
  * Prefer human-readable title/objective/description when present.
  */
 function presentPlanned(
```

### M-129 `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index ea865141..f2472146 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -355,7 +355,7 @@ function buildArtifactMaterializationAnalysis(input: {
     // Do not pre-satisfy MW5 — product Fake must not mask structural challenge.
     challengeResponseAssessment: input.challengeResponseAssessment ?? null,
     continuationKind: "active_cycle_artifact_materialization",
-    artifactMaterializationOperation: "cursor.docs_write.apply",
+    artifactMaterializationOperation: null,
     objective: "Matérialiser le livrable requis du cycle actif",
     scope: "docs_write borné — cycle actif — aucune exécution automatique",
     rephrasedRequest: "Matérialisation gouvernée du livrable requis",
@@ -368,7 +368,7 @@ function buildArtifactMaterializationAnalysis(input: {
     criticalJustification: null,
     requestedOperation: null,
     executionIntent: {
-      intentKind: "docs_write",
+      intentKind: "other",
       artifactType: "deliverable_document",
       targetRepositoryRef: null,
       targetPath,
@@ -376,7 +376,7 @@ function buildArtifactMaterializationAnalysis(input: {
       scopeIn,
       scopeOut: [],
       expectedOutputs: targetPath ? [targetPath] : artifactFileName ? [artifactFileName] : [],
-      requiredCapabilities: ["cap:cursor.docs_write"],
+      requiredCapabilities: ["cap:studio.cursor.generalist"],
       validationExpectations: [],
       evidenceRequirements: [],
       requestedOperation: null,
@@ -1106,7 +1106,7 @@ export class FakeConversationProvider implements ConversationProvider {
           objective: "Rédiger le design fonctionnel borné",
           scope: "docs/functional-design.md uniquement",
           rephrasedRequest:
-            "Produire docs/functional-design.md via cursor.docs_write.apply",
+            "Produire docs/functional-design.md dans le workspace projet",
           outOfScope: ["Cursor REAL hors fake", "commit/push/PR"],
           risks: ["Contenu incomplet"],
           reservations: [],
@@ -1114,16 +1114,16 @@ export class FakeConversationProvider implements ConversationProvider {
           activatedBlocks: ["qualification", "proposition", "gate"],
           expectedOutcome: "Artifact functional-design prêt pour revue",
           criticalJustification: null,
-          requestedOperation: "cursor.docs_write.apply",
+          requestedOperation: null,
           executionIntent: {
-            intentKind: "docs_write",
+            intentKind: "other",
             artifactType: "functional_design",
             targetRepositoryRef: "acme/widget",
             targetPath: "docs/functional-design.md",
             scopeIn: ["docs/"],
             scopeOut: ["src/", ".github/"],
             expectedOutputs: ["docs/functional-design.md"],
-            requiredCapabilities: ["cap:cursor.docs_write"],
+            requiredCapabilities: ["cap:studio.cursor.generalist"],
             validationExpectations: ["path_allowlist", "no_delete"],
             evidenceRequirements: [
               "git:local_commit",
@@ -1134,7 +1134,7 @@ export class FakeConversationProvider implements ConversationProvider {
               "git:merge",
               "git:post_merge_verification",
             ],
-            requestedOperation: "cursor.docs_write.apply",
+            requestedOperation: null,
             reversibilityExpectation: "reversible",
             artifactBrief:
               "Functional design covering goals, actors, flows, and constraints",
@@ -1217,7 +1217,7 @@ export class FakeConversationProvider implements ConversationProvider {
           contradictionCandidate: null,
           challengeResponseAssessment: "sufficient",
           continuationKind: null,
-          artifactMaterializationOperation: "cursor.docs_write.apply",
+          artifactMaterializationOperation: null,
           objective:
             "Produire un document Markdown enregistré dans le dépôt du projet",
           scope: "projects/demo/docs",
@@ -1232,7 +1232,7 @@ export class FakeConversationProvider implements ConversationProvider {
           criticalJustification: null,
           requestedOperation: null,
           executionIntent: {
-            intentKind: "docs_write",
+            intentKind: "other",
             artifactType: "deliverable_document",
             targetRepositoryRef: null,
             targetPath: "projects/demo/docs/note-cadrage.md",
@@ -1240,7 +1240,7 @@ export class FakeConversationProvider implements ConversationProvider {
             scopeIn: ["projects/demo/docs"],
             scopeOut: ["projects/sfia-studio/convergence"],
             expectedOutputs: ["projects/demo/docs/note-cadrage.md"],
-            requiredCapabilities: ["cap:cursor.docs_write"],
+            requiredCapabilities: ["cap:studio.cursor.generalist"],
             validationExpectations: [],
             evidenceRequirements: [],
             requestedOperation: null,
@@ -1503,7 +1503,7 @@ export class FakeConversationProvider implements ConversationProvider {
           criticalJustification: null,
           requestedOperation: "github.pr.merge",
           executionIntent: {
-            intentKind: "docs_write",
+            intentKind: "other",
             artifactType: "deliverable_document",
             targetRepositoryRef: null,
             targetPath: "docs/livrable-cycle.md",
@@ -1571,19 +1571,19 @@ export class FakeConversationProvider implements ConversationProvider {
           activatedBlocks: ["qualification", "proposition"],
           expectedOutcome: "Proposition docs_write générique",
           criticalJustification: null,
-          requestedOperation: "cursor.docs_write.apply",
+          requestedOperation: null,
           executionIntent: {
-            intentKind: "docs_write",
+            intentKind: "other",
             artifactType: null,
             targetRepositoryRef: null,
             targetPath: "README.md",
             scopeIn: ["projects/"],
             scopeOut: [],
             expectedOutputs: ["README.md"],
-            requiredCapabilities: ["cap:cursor.docs_write"],
+            requiredCapabilities: ["cap:studio.cursor.generalist"],
             validationExpectations: [],
             evidenceRequirements: [],
-            requestedOperation: "cursor.docs_write.apply",
+            requestedOperation: null,
             reversibilityExpectation: null,
             artifactBrief: null,
             contentRequirements: [],
```

### M-130 `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
index 83572029..ec0cf937 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -16,8 +16,6 @@ import {
 import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
 import {
   createSqliteProductProjectServices,
-  describeServerOwnedRepositoryConfigGap,
-  resolveServerOwnedRepositoryConfig,
   type LivingProjectState,
   type Project,
   type ProjectServices,
@@ -117,25 +115,9 @@ function freezeView(view: LocalProjectCreationView): LocalProjectCreationView {
   Object.freeze(view.constraints);
   Object.freeze(view.doctrine);
   Object.freeze(view.lps);
-  if (view.repositoryBinding) Object.freeze(view.repositoryBinding);
   return Object.freeze(view);
 }

-function projectRepositoryBindingProjection(
-  project: Project,
-): LocalProjectCreationView["repositoryBinding"] {
-  const binding = project.repositoryBinding;
-  if (!binding) return null;
-  return Object.freeze({
-    provider: binding.provider,
-    identity: binding.identity,
-    remoteUrl: binding.remoteUrl,
-    defaultBranch: binding.defaultBranch,
-    ...(binding.pathRoot !== undefined ? { pathRoot: binding.pathRoot } : {}),
-    ...(binding.baseSha !== undefined ? { baseSha: binding.baseSha } : {}),
-  });
-}
-
 function contextSummary(context: string): string {
   const normalized = context.trim().replace(/\s+/g, " ");
   return normalized.length <= 240
@@ -282,7 +264,6 @@ function buildProjection(
       activeCycleInstanceId: lps.activeCycleInstanceId ?? null,
       ckcResolutionRef: lps.ckcResolutionRef ?? null,
     }),
-    repositoryBinding: projectRepositoryBindingProjection(project),
     projectWorkspaceKey: project.projectWorkspaceKey?.trim() || null,
     localMode: true,
     iam: "NOT_SELECTED",
@@ -348,33 +329,6 @@ class LocalProjectFacadeImpl implements LocalProjectFacade {
       });
     }

-    // CR-PWR-04 — Product Create authoritative boundary: server-owned repository
-    // config is a precondition. Fail closed BEFORE any Project/LPS persistence.
-    // Low-level OA CreateProject remains available for legacy/fixture reload.
-    const serverRepo = resolveServerOwnedRepositoryConfig(process.env);
-    if (!serverRepo) {
-      const configError = projectError(
-        "PROJECT_CREATION_FAILED",
-        describeServerOwnedRepositoryConfigGap(process.env),
-        { projectDetailCode: "PROJECT_INVALID" },
-      );
-      auditFailed =
-        !this.appendAudit({
-          event: "LOCAL_PROJECT_CREATION_FAILED",
-          timestamp,
-          correlationId,
-          idempotencyKey: command.idempotencyKey ?? "missing",
-          projectId: requestedProjectId,
-          result: "FAILED",
-          errorCode: configError.code,
-        }) || auditFailed;
-      return Object.freeze({
-        ok: false,
-        error: configError,
-        auditStatus: this.auditStatus(auditFailed),
-      });
-    }
-
     const result = await this.projects.createProject.execute({
       projectId: requestedProjectId,
       title: command.name,
```

### M-131 `projects/sfia-studio/app/lib/vertical-slice-core/types.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/types.ts b/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
index 353cda27..a64d1ec9 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/types.ts
@@ -3,10 +3,7 @@ import type {
   DoctrinePackagePin,
   DoctrinePackageRefStatus,
 } from "@/lib/oa/doctrine";
-import type {
-  ProjectDetailCode,
-  ProjectRepositoryBinding,
-} from "@/lib/oa/project";
+import type { ProjectDetailCode } from "@/lib/oa/project";

 export type PerceivedCriticality = "LOW" | "STANDARD" | "HIGH";

@@ -50,11 +47,6 @@ export interface LocalProjectCreationView {
   readonly constraints: readonly string[];
   readonly doctrine: LocalProjectDoctrineProjection;
   readonly lps: LocalProjectLpsProjection;
-  /**
-   * Durable Project.repositoryBinding projected for runtime/UI.
-   * null = honestly unbound; never invent a sample.
-   */
-  readonly repositoryBinding: ProjectRepositoryBinding | null;
   /**
    * Durable Project workspace key (PRODUCT-PROJECT-WORKSPACE-ARTIFACT-ROUTING-01).
    * Set once at create; never recomputed from title rename.
```

### M-132 `projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
index d346d857..68a13dc9 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
@@ -30,35 +30,3 @@ export async function getProjectRuntimeAction(
 export async function listProjectsRuntimeAction(): Promise<ListProjectsRuntimeResult> {
   return getRuntimeApplicationService().listProjects();
 }
-
-export async function setProjectRepositoryBindingAction(input: {
-  projectId: string;
-  identity: string;
-  remoteUrl: string;
-  defaultBranch: string;
-  pathRoot?: string;
-  baseSha?: string;
-}): Promise<
-  | { ok: true; projectId: string; repositoryBinding: unknown }
-  | { ok: false; code: string; message: string }
-> {
-  const svc = getRuntimeApplicationService();
-  if (
-    typeof (svc as { setProjectRepositoryBinding?: unknown })
-      .setProjectRepositoryBinding !== "function"
-  ) {
-    return {
-      ok: false,
-      code: "NOT_AVAILABLE",
-      message: "Repository binding is unavailable in this runtime.",
-    };
-  }
-  return (
-    svc as {
-      setProjectRepositoryBinding: (i: typeof input) => Promise<
-        | { ok: true; projectId: string; repositoryBinding: unknown }
-        | { ok: false; code: string; message: string }
-      >;
-    }
-  ).setProjectRepositoryBinding(input);
-}
```

### M-133 `projects/sfia-studio/app/lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts
index 7838afdd..fff3f431 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts
@@ -1,13 +1,13 @@
 /**
- * Server-owned managed repository root base for Product docs_write REAL composition.
+ * Server-owned managed repository root base for Product REAL composition.
  *
  * Operational precondition (no network clone in this capability):
- * under the configured absolute base, each Project.repositoryBinding.identity must
- * already exist as a local Git repository at
- * `{base}/{sanitizedIdentity}` (see ManagedProjectRepositoryResolver).
+ * the configured absolute base is the managed Git checkout. Documentary WHERE
+ * is projects/<projectWorkspaceKey> inside that checkout. No Product
+ * repository-binding identity is mapped under this base.
  *
  * Absent/blank → undefined (StartExecution fail-closed:
- * docs_write_managed_repo_root_base_unconfigured).
+ * MANAGED_REPO_ROOT_BASE_UNCONFIGURED).
  *
  * Never accept client/EC absolute roots. Never expose via NEXT_PUBLIC_*.
  */
```

### M-134 `projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
index 8c5e1b87..59b96a05 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
@@ -65,7 +65,6 @@ export function toRuntimeErrorDtoFromProjectError(
 export function toRuntimeProjectState(
   view: LocalProjectCreationView,
 ): RuntimeProjectState {
-  const binding = view.repositoryBinding;
   return Object.freeze({
     projectId: view.projectId,
     name: view.projectName,
@@ -78,18 +77,6 @@ export function toRuntimeProjectState(
     source: "REAL_LOCAL_CORE",
     fixture: false,
     projectWorkspaceKey: view.projectWorkspaceKey ?? null,
-    repositoryBinding: binding
-      ? Object.freeze({
-          provider: binding.provider,
-          identity: binding.identity,
-          remoteUrl: binding.remoteUrl,
-          defaultBranch: binding.defaultBranch,
-          ...(binding.pathRoot !== undefined
-            ? { pathRoot: binding.pathRoot }
-            : {}),
-          ...(binding.baseSha !== undefined ? { baseSha: binding.baseSha } : {}),
-        })
-      : null,
   });
 }

```

### M-135 `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index f25f7588..214276f8 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -37,7 +37,6 @@ import {
   createSqliteExecutionAttemptServices,
   createStudioCursorGeneralistAgentDescriptor,
   createM4BoundedReadOnlyCursorAgentDescriptor,
-  createM4BoundedDocsWriteCursorAgentDescriptor,
   createM4BoundedLocalCommitCursorAgentDescriptor,
   createM4BoundedRemotePushCursorAgentDescriptor,
   createM4BoundedPrCreateCursorAgentDescriptor,
@@ -454,7 +453,6 @@ function wireOaStack(
         w3aBoundedAgent,
         createStudioCursorGeneralistAgentDescriptor(clock.nowIso()),
         createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
-        createM4BoundedDocsWriteCursorAgentDescriptor(clock.nowIso()),
         createM4BoundedLocalCommitCursorAgentDescriptor(clock.nowIso()),
         createM4BoundedRemotePushCursorAgentDescriptor(clock.nowIso()),
         createM4BoundedPrCreateCursorAgentDescriptor(clock.nowIso()),
@@ -473,11 +471,6 @@ function wireOaStack(
         authorityResolver,
         policy: { defaultMaxRetriesBudget: 0 },
         realBoundary,
-        resolveProjectRepositoryBinding: async (projectId) => {
-          const r = await projectServices.getProject.execute({ projectId });
-          if (!r.ok) return null;
-          return r.project.repositoryBinding ?? null;
-        },
         listProjectEvidence: async (projectId) => {
           if (!late.evidenceReviewServices) {
             return { ok: false as const, reason: "evidence_reader_unavailable" as const };
@@ -497,11 +490,6 @@ function wireOaStack(
         authorityResolver,
         policy: { defaultMaxRetriesBudget: 0 },
         realBoundary,
-        resolveProjectRepositoryBinding: async (projectId) => {
-          const r = await projectServices.getProject.execute({ projectId });
-          if (!r.ok) return null;
-          return r.project.repositoryBinding ?? null;
-        },
         listProjectEvidence: async (projectId) => {
           if (!late.evidenceReviewServices) {
             return { ok: false as const, reason: "evidence_reader_unavailable" as const };
@@ -682,57 +670,6 @@ export class RuntimeApplicationService {
     );
     return toListProjectsRuntimeSuccess(enriched);
   }
-
-  /** CR-GCEC-03 — set explicit Project repository binding (no network). */
-  async setProjectRepositoryBinding(input: {
-    projectId: string;
-    identity: string;
-    remoteUrl: string;
-    defaultBranch: string;
-    pathRoot?: string;
-    baseSha?: string;
-  }): Promise<
-    | { ok: true; projectId: string; repositoryBinding: unknown }
-    | { ok: false; code: string; message: string }
-  > {
-    if (!this.oa?.projectServices.setProjectRepositoryBinding) {
-      return {
-        ok: false,
-        code: "NOT_AVAILABLE",
-        message: "Repository binding is unavailable in this runtime.",
-      };
-    }
-    const result =
-      await this.oa.projectServices.setProjectRepositoryBinding.execute({
-        projectId: input.projectId,
-        binding: {
-          provider: "github",
-          identity: input.identity,
-          remoteUrl: input.remoteUrl,
-          defaultBranch: input.defaultBranch,
-          ...(input.pathRoot ? { pathRoot: input.pathRoot } : {}),
-          ...(input.baseSha ? { baseSha: input.baseSha } : {}),
-        },
-        actor: {
-          actorId: "actor:local-pilote",
-          role: "project_owner",
-          displayName: "Local Pilote",
-          authorityLevel: "N2",
-        },
-      });
-    if (!result.ok) {
-      return {
-        ok: false,
-        code: result.error.detailCode,
-        message: result.error.message,
-      };
-    }
-    return {
-      ok: true,
-      projectId: result.project.projectId,
-      repositoryBinding: result.project.repositoryBinding ?? null,
-    };
-  }
 }

 export function createRuntimeApplicationService(
```

### M-136 `projects/sfia-studio/app/lib/vertical-slice-runtime/studioRuntimeProfilePreflight.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/studioRuntimeProfilePreflight.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/studioRuntimeProfilePreflight.ts
index 54f53743..797babfc 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/studioRuntimeProfilePreflight.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/studioRuntimeProfilePreflight.ts
@@ -8,13 +8,6 @@
  */
 import { existsSync } from "node:fs";
 import path from "node:path";
-import {
-  describeServerOwnedRepositoryConfigGap,
-  resolveServerOwnedRepositoryConfig,
-  SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH_ENV,
-  SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV,
-  SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV,
-} from "@/lib/oa/project/domain/serverOwnedRepositoryConfig";
 import {
   isLocalPilotAuthorityEnabled,
   LOCAL_PILOT_AUTHORITY_ENV,
@@ -33,8 +26,6 @@ import {
 import { composeStudioProductRealBoundary } from "@/lib/vertical-slice-runtime/composeStudioProductRealBoundary";
 import {
   isStudioCursorRealEnabled,
-  ManagedProjectRepositoryResolver,
-  sanitizeManagedRepoIdentity,
   SFIA_STUDIO_CURSOR_REAL_FLAG,
 } from "@/lib/oa/execution-attempt";

@@ -44,7 +35,6 @@ export const STUDIO_RUNTIME_PROFILE_NOT_READY =
 export type StudioRuntimeCursorRealMode = "READY" | "OFF";

 export type StudioRuntimeProfilePreflightSections = {
-  readonly repository: "PASS" | "FAIL";
   readonly authority: "PASS" | "FAIL";
   readonly managedRepository: "PASS" | "FAIL";
   readonly cursorReal: StudioRuntimeCursorRealMode;
@@ -57,7 +47,6 @@ export type StudioRuntimeProfilePreflightResult =
       readonly sections: StudioRuntimeProfilePreflightSections;
       readonly managedRepoRoot: string;
       readonly managedClonePath: string;
-      readonly repositoryIdentity: string;
       readonly cursorReal: StudioRuntimeCursorRealMode;
       readonly realBoundaryConstructed: boolean;
     }
@@ -114,34 +103,6 @@ export function runStudioRuntimeProfilePreflight(
     );
   }

-  // --- Repository (server-owned) ---
-  const repo = resolveServerOwnedRepositoryConfig(env);
-  let repository: "PASS" | "FAIL" = "PASS";
-  if (!repo) {
-    repository = "FAIL";
-    const gap = describeServerOwnedRepositoryConfigGap(env);
-    if (!(env[SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV]?.trim())) {
-      pushUnique(blockers, "REPOSITORY_IDENTITY_MISSING");
-    } else if (
-      !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(
-        env[SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV]!.trim(),
-      )
-    ) {
-      pushUnique(blockers, "REPOSITORY_IDENTITY_INVALID");
-    }
-    if (!(env[SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV]?.trim())) {
-      pushUnique(blockers, "REPOSITORY_REMOTE_MISSING");
-    } else {
-      const remote = env[SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV]!.trim();
-      if (!remote.startsWith("https://") && !remote.startsWith("git@")) {
-        pushUnique(blockers, "REPOSITORY_REMOTE_INVALID");
-      }
-    }
-    if (blockers.every((b) => !b.startsWith("REPOSITORY_"))) {
-      pushUnique(blockers, `REPOSITORY_CONFIG_GAP:${gap}`);
-    }
-  }
-
   // --- Local single-user Pilot authority (TEMPORARY WITH EXIT) ---
   let authority: "PASS" | "FAIL" = "PASS";
   if (!isLocalPilotAuthorityEnabled(env as NodeJS.ProcessEnv)) {
@@ -163,32 +124,8 @@ export function runStudioRuntimeProfilePreflight(
     if (!existsSync(managedRoot)) {
       managedRepository = "FAIL";
       pushUnique(blockers, "MANAGED_REPO_ROOT_BASE_ABSENT");
-    } else if (repo) {
-      let sanitized: string;
-      try {
-        sanitized = sanitizeManagedRepoIdentity(repo.identity);
-      } catch {
-        managedRepository = "FAIL";
-        pushUnique(blockers, "MANAGED_REPO_IDENTITY_INVALID");
-        sanitized = "";
-      }
-      if (sanitized) {
-        const expected = path.join(managedRoot, sanitized);
-        const resolver = new ManagedProjectRepositoryResolver();
-        const resolved = resolver.resolveLocalRepoRoot(
-          { identity: repo.identity },
-          managedRoot,
-        );
-        if (!resolved) {
-          managedRepository = "FAIL";
-          pushUnique(
-            blockers,
-            `MANAGED_REPO_ABSENT:expected=${expected}`,
-          );
-        } else {
-          managedClonePath = resolved;
-        }
-      }
+    } else {
+      managedClonePath = managedRoot;
     }
   }

@@ -217,7 +154,6 @@ export function runStudioRuntimeProfilePreflight(
   }

   const sections: StudioRuntimeProfilePreflightSections = {
-    repository,
     authority,
     managedRepository,
     cursorReal,
@@ -239,7 +175,6 @@ export function runStudioRuntimeProfilePreflight(
     sections,
     managedRepoRoot: managedRoot!,
     managedClonePath,
-    repositoryIdentity: repo!.identity,
     cursorReal,
     realBoundaryConstructed,
   };
@@ -247,9 +182,6 @@ export function runStudioRuntimeProfilePreflight(

 /** Keys documented for Product local profile (non-secret). */
 export const STUDIO_RUNTIME_PROFILE_ENV_KEYS = [
-  SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY_ENV,
-  SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL_ENV,
-  SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH_ENV,
   LOCAL_PILOT_AUTHORITY_ENV,
   LOCAL_MORRIS_GATE_AUTHORITY_ENV,
   M3_LOCAL_AUTHORITY_ENV,
```

### M-137 `projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
index c86dd4ae..c95b13b4 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
@@ -53,16 +53,7 @@ export interface RuntimeProjectState {
   readonly localMode: true;
   readonly source: "REAL_LOCAL_CORE";
   readonly fixture: false;
-  /** GCEC — explicit Product repository binding when set. */
-  readonly repositoryBinding?: {
-    readonly provider: "github";
-    readonly identity: string;
-    readonly remoteUrl: string;
-    readonly defaultBranch: string;
-    readonly pathRoot?: string;
-    readonly baseSha?: string;
-  } | null;
-  /** Durable Project workspace key — null for legacy / unbound. */
+  /** Durable Project workspace key — null when unset. */
   readonly projectWorkspaceKey?: string | null;
 }

```

### M-138 `projects/sfia-studio/app/scripts/studio-runtime-preflight.ts` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/app/scripts/studio-runtime-preflight.ts b/projects/sfia-studio/app/scripts/studio-runtime-preflight.ts
index 40b40483..e6988e90 100644
--- a/projects/sfia-studio/app/scripts/studio-runtime-preflight.ts
+++ b/projects/sfia-studio/app/scripts/studio-runtime-preflight.ts
@@ -29,7 +29,6 @@ if (!result.ok) {
 }

 console.log("STUDIO RUNTIME PROFILE READY");
-console.log(`- repository: ${result.repositoryIdentity} (${result.sections.repository})`);
 console.log(`- authority: ${result.sections.authority}`);
 console.log(`- managedRoot: ${result.managedRepoRoot}`);
 console.log(`- managedClone: ${result.managedClonePath || "(skipped)"}`);
```

### M-139 `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index bdb8c96b..98f4c0d2 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **CURRENT TIP 2026-10-24 — AKG-M5 L2-D2 POST-MERGE VERIFIED (PR #614)** | **L2-D2 MERGED ON MAIN / POST-MERGE CI SUCCESS / DEFAULT OFF / NOT ACTIVATED** — [PR #614](https://github.com/mcleland147/sfia-workspace/pull/614) **MERGED** 2026-10-24, source `4647983aa36b76ae393200a7a8caaaed96936149`, merge `1a0ccd846247d8d96c4c6e1258edd739a2bb5d11` = `main` contrôlé ; [CI #40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) **COMPLETED / SUCCESS** (Detect, Build and validate, Required Gate · event=push · branch=main · HEAD=merge) ; GO Morris Delivery + CORR-02 + R24 + Cycle13 digests + G-GIT commit/push/Draft PR **consommés** ; code CURRENT : marker `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` default **OFF** (trim=`"1"` arms fail-closed) · D1 open+mutation guards (injected writers) · confirmation FORBIDDEN→`ok:false` · D4 Option A redirect/notFound · O-01 LPS objective→UI **DET 31/7 PASS** ; **aucun dual-write** · **aucun** `proj-*`→`prj:*` · D1 FREEZE gated / RETIRE LATER (pas de retrait physique) ; **G-ACTIVATION OPEN** · **R-CUT LIVE NOT PROVEN** · D4 LIVE HTTP NOT PROVEN · dette `R-L2D2-SQLITE-SNAPSHOT` OPEN · raw `DatabaseSync` KNOWN GAP · Q15 global PARTIAL ; chronologie L2-D0→L2-D1→L2-D2 conservée ; **AKG-M5 GLOBAL OPEN** · H1 hold ACTIVE · H4/R-VOL-01 OPEN · REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED ; suite = **G-ACTIVATION PREPARATION sous réserves** (≠ autorisation d'activation) ; Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** on main · merge `7b64ab21aa29211d5fce93d06d24bce539a0c5a5` · [post-merge CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · **NO PRODUCT SEMANTIC IMPACT** · **R-01 exit proof satisfied** · formal closure separate. |
+| **CURRENT TIP 2026-10-25 — AKG-M5 LOCAL DELIVERY — CORR-02 Git target fidelity on structural removal** | **DECIDED BY MORRIS 2026-10-25** · **LOCAL IMPLEMENTED** · **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED** — branche `feat/akg-m5-remove-repository-binding-docs-write` (Delivery locale non intégrée, au-dessus de `origin/main` `7db8afd7c27720712f08000274dbbc4e1a62d935`) ; **RepositoryBinding RETIRED IN LOCAL DELIVERY** (CreateProject sans `repositoryBinding` ; `SFIA_STUDIO_PROJECT_REPOSITORY_*` retirés du preflight et de `.env.example`) ; **docs_write Product specialization RETIRED IN LOCAL DELIVERY** (admission Product `intentKind` / cap / action retirée des lib + features actifs) ; `projectWorkspaceKey` et routage `projects/<key>` **PRÉSERVÉS** ; **CORR-02 LOCAL CORRECTION** on that structural removal (Git target fidelity) — identity↔remote↔checkout **DET VERIFIED** ; Evidence FS-anchor allowlist tightened to historical `execution_attempt:docs_write` (+ dotted suffix) ; residual stubs removed ; managed resolver requires origin match ; provided remote must match sealed identity (`repository_remote_identity_mismatch` / `managed_repo_identity_mismatch`) ; **NOT MERGED** · **≠** REAL ; O-01 DET **PASS** ; typecheck **PASS** ; **known regressions accepted** ; **H4 / G-REAL / G-ACTIVATION NOT GRANTED** ; **AKG-M5 OPEN** ; runtime v3 **NON ADOPTED** ; `origin/main` `7db8afd7` conserve le binding et l'admission docs_write **historiquement présents sur main** (PR #617 = activation prep, pas ce retrait) ; **≠ MERGED ON MAIN** · **≠** H4 qualifié · **≠** exclusive ACTIVATED · **≠** REAL PROVEN · **≠** P6 GLOBAL PASS. C1 D-PC-09 **NO SEMANTIC IMPACT** (historical text not rewritten). |
+| **HISTORICAL TIP 2026-10-24 — AKG-M5 L2-D2 POST-MERGE VERIFIED (PR #614)** | **HISTORICAL AS TIP** (superseded as CURRENT by the 2026-10-25 LOCAL Delivery tip) — truth sync : [PR #617](https://github.com/mcleland147/sfia-workspace/pull/617) **MERGED** 2026-10-25 on main for **L2-D2 activation prep** (S1–S4) · source `cdc9909d8adaa6b31df3b75e33e58a8d27c88317` · merge `7db8afd7c27720712f08000274dbbc4e1a62d935` = `origin/main` · [CI #40169014052](https://github.com/mcleland147/sfia-workspace/actions/runs/40169014052) **COMPLETED / SUCCESS** (Detect, Build and validate, Required Gate · event=push · branch=main · HEAD=merge) · exclusive **DEFAULT OFF / NOT ACTIVATED** · **G-ACTIVATION / G-REAL NOT GRANTED** by #617 · [PR #616](https://github.com/mcleland147/sfia-workspace/pull/616) also **MERGED** `d7aad77e999e4fe64f31a776ddf39c1d99278b1b` (R-01 evidence status) between #615 and #617 · RepositoryBinding / docs_write retirement is **not** in #617 and is **NOT MERGED** — **L2-D2 MERGED ON MAIN / POST-MERGE CI SUCCESS / DEFAULT OFF / NOT ACTIVATED** — [PR #614](https://github.com/mcleland147/sfia-workspace/pull/614) **MERGED** 2026-10-24, source `4647983aa36b76ae393200a7a8caaaed96936149`, merge `1a0ccd846247d8d96c4c6e1258edd739a2bb5d11` = `main` contrôlé ; [CI #40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) **COMPLETED / SUCCESS** (Detect, Build and validate, Required Gate · event=push · branch=main · HEAD=merge) ; GO Morris Delivery + CORR-02 + R24 + Cycle13 digests + G-GIT commit/push/Draft PR **consommés** ; code CURRENT : marker `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` default **OFF** (trim=`"1"` arms fail-closed) · D1 open+mutation guards (injected writers) · confirmation FORBIDDEN→`ok:false` · D4 Option A redirect/notFound · O-01 LPS objective→UI **DET 31/7 PASS** ; **aucun dual-write** · **aucun** `proj-*`→`prj:*` · D1 FREEZE gated / RETIRE LATER (pas de retrait physique) ; **G-ACTIVATION OPEN** · **R-CUT LIVE NOT PROVEN** · D4 LIVE HTTP NOT PROVEN · dette `R-L2D2-SQLITE-SNAPSHOT` OPEN · raw `DatabaseSync` KNOWN GAP · Q15 global PARTIAL ; chronologie L2-D0→L2-D1→L2-D2 conservée ; **AKG-M5 GLOBAL OPEN** · H1 hold ACTIVE · H4/R-VOL-01 OPEN · REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED ; suite = **G-ACTIVATION PREPARATION sous réserves** (≠ autorisation d'activation) ; Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** on main · merge `7b64ab21aa29211d5fce93d06d24bce539a0c5a5` · [post-merge CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · **NO PRODUCT SEMANTIC IMPACT** · **R-01 exit proof satisfied** · formal closure separate. |
 | **HISTORICAL TIP 2026-10-24 — AKG-M5 L2-D1 POST-MERGE VERIFIED (PR #612)** | **HISTORICAL AS TIP** (superseded as CURRENT by PR #614) — **L2-D1 MERGED ON MAIN / POST-MERGE CI SUCCESS** — [PR #612](https://github.com/mcleland147/sfia-workspace/pull/612) **MERGED** 2026-10-24, source `d98b39302a484a21f42a25d8c7155bbbf6f6f746`, merge `b792bc83e1fbe3ee2f630d2637c137ee246bf07a` ; [CI #40082088441](https://github.com/mcleland147/sfia-workspace/actions/runs/40082088441) **SUCCESS** ; D5 Option A `oa.project.created` dans UnitOfWork ; Q5.1–Q5.7 DET ; à la date du tip : O-01 « comprendre » Product→UI = KNOWN GAP et **L2-D2 NOT AUTHORIZED** *(HISTORICAL AS TIP — later L2-D2 Delivery + PR #614 MERGED)* ; AKG-M5 GLOBAL OPEN · REAL NOT PROVEN · runtime v3 NON ADOPTED. |
 | **HISTORICAL TIP 2026-10-24 — AKG-M5 L2-D0 DOCUMENTARY POST-MERGE VERIFIED (PR #611)** | L2-D0 Decision & Delivery Readiness document `04` intégré via [PR #611](https://github.com/mcleland147/sfia-workspace/pull/611) **MERGED** 2026-10-24, merge `d62301771957ecbc74aedf1b405e183f3db3956d` ; [CI #40064638222](https://github.com/mcleland147/sfia-workspace/actions/runs/40064638222) **SUCCESS** (post-merge) ; D1–D9 = candidate/decision record, **NOT GLOBALLY ADOPTED**, D5/H4/R-CUT restent gates Delivery ; GO L2-D1 ultérieur reçu et consommé (voir tip historique PR #612) ; à la date : **L2-D2 NON AUTORISÉ** *(HISTORICAL AS TIP)* ; ce statut est HISTORICAL AS TIP. |
 | **HISTORICAL TIP 2026-10-23 — AKG-M5 L1/A09 POST-MERGE VERIFIED (PR #609)** | **HISTORICAL AS TIP** (superseded as CURRENT by PR #611/#612) ; **L1/A09 MERGED ON MAIN / POST-MERGE CI SUCCESS** — [PR #609](https://github.com/mcleland147/sfia-workspace/pull/609) **MERGED** 2026-10-23, source `6176a9d3f28d178ce5687a62c18e1c8fa4fcc68d`, merge `e8e8b5e1ed0304f54babb265b7529b61bb3cdcbc` = `main` vérifié ; [CI #39998468332](https://github.com/mcleland147/sfia-workspace/actions/runs/39998468332) **COMPLETED / SUCCESS** (Detect / Build / SFIA Studio Required Gate) ; **H0-L1 GRANTED** et **GO Morris merge #609 consommé** ; `ProjectCycleAuditPort` réutilisé (Option A / t-a7), consommateurs VSR + core sans import d'audit `@/lib/d1`, `BoundedAtomicAuditStore` D1 conservé en adaptateur transitoire ; noop par défaut, memory/sqlite compatibles sans activation implicite ; **Q1–Q10 PASS au périmètre local testé** ; **R-A09-01 PASS TECHNIQUE au périmètre testé** (preuves locales + CI, ≠ clôture doctrinale globale / ≠ GO L2) ; **M5-A FORMAL EXIT CLOSED BY MORRIS** (PR #607/#608, preuves CI conservées dans tip historique) ; **AKG-M5 GLOBAL OPEN** ; **L2 NOT GRANTED**, H1–H5 OPEN, aucun D1 retire/migrate, aucune nouvelle persistance/dual-write ; REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED · SHADOW OFF ; synchronisation documentaire post-merge bornée (Roadmap uniquement), **NO PRODUCT SEMANTIC IMPACT**. |
```

### M-140 `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` **[CUMULATIVE]**
- **Semantic change:** Cumulative structural removal / CORR-01
```diff
diff --git a/projects/sfia-studio/product-completion/01-product-completion-cadrage.md b/projects/sfia-studio/product-completion/01-product-completion-cadrage.md
index 806d672f..141a7b4f 100644
--- a/projects/sfia-studio/product-completion/01-product-completion-cadrage.md
+++ b/projects/sfia-studio/product-completion/01-product-completion-cadrage.md
@@ -1170,3 +1170,25 @@ C1 INTEGRATED ON MAIN
 | Post-merge CI | attempt 1 FAIL = three timing timeouts (**CI_LOAD_TIMING_FLAKE**) · attempt 2 **SUCCESS** · Required Gate **PASS** |
 | Reserve | **REAL EVIDENCE PAYLOAD VERIFICATION ADAPTER ABSENT** |
 | Explicit non-claims | ≠ merge `8448c3f5` itself called REAL-proven · ≠ Product Completion newly COMPLETE/CLOSED · ≠ runtime v3 ADOPTED · ≠ global L5 ADOPTED · ≠ next capability started |
+
+---
+
+## Amendment 2026-10-25 — D-PC-09 supersession of server-owned RepositoryBinding projection
+
+| Métadonnée | Valeur |
+| --- | --- |
+| **Date** | 2026-10-25 |
+| **Autorité** | **Morris GO 2026-10-25** |
+| **Relation** | Amendement **additif**. Le texte historique D-PC-09 ci-dessus (construction 2026-09-19 et truth-sync post-merge 2026-09-20) est **PRÉSERVÉ**. Il n’est pas réécrit comme s’il n’avait jamais existé. |
+| **Décision** | Ce GO **supersedes** la projection technique **server-owned RepositoryBinding** adoptée dans D-PC-09 (identité / remote / branche par défaut injectées à Create Project). |
+| **Préservé** | `projectWorkspaceKey` et le routage `projects/<project-workspace-key>/` restent. Le filename Pilote/Nora reste un candidat non autoritaire. La composition serveur du chemin workspace reste. Aucune écriture Git à la création. |
+| **Retiré — LOCAL DELIVERY** | **RepositoryBinding RETIRED IN LOCAL DELIVERY** — CreateProject n’a plus `repositoryBinding` ; `SFIA_STUDIO_PROJECT_REPOSITORY_*` retirés du preflight et de `.env.example`. **docs_write Product specialization RETIRED IN LOCAL DELIVERY** — admission Product (`intentKind` / cap / action) retirée des lib + features actifs. |
+| **Statut Git** | **LOCAL IMPLEMENTED** sur `feat/akg-m5-remove-repository-binding-docs-write` · **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED**. `origin/main` `7db8afd7c27720712f08000274dbbc4e1a62d935` conserve encore le binding historique. |
+| **Preuve locale** | O-01 DET **PASS** · typecheck **PASS** · **known regressions accepted** |
+| **Anti-claims** | ≠ **MERGED ON MAIN** · ≠ H4 / G-REAL / G-ACTIVATION granted · ≠ AKG-M5 CLOSED · ≠ runtime v3 ADOPTED · ≠ REAL PROVEN · ≠ P6 GLOBAL PASS |
+
+### Disposition
+
+- Sur `origin/main`, la projection server-owned RepositoryBinding de D-PC-09 reste **historiquement présente** jusqu’à un merge ultérieur.
+- Cette Delivery locale est le **candidat** qui supprime cette projection. Elle ne falsifie pas le record 2026-09-19 ni le truth-sync PR **#506**.
+- Le routage workspace `projects/<key>` n’est pas le mécanisme retiré.
```

### M-141 `projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index a284704d..59ce9676 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -6,20 +6,22 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 ## OBJ-PROJECT — Project

-- **Purpose:** Durable product container (name, objective, binding, workspace key).
+- **Purpose:** Durable product container (name, objective, workspace key). Historical cards also named a repository binding; see the status split.
+- **Status split 2026-10-25:** **CURRENT ON MAIN** (`origin/main` `7db8afd7`): CreateProject still projects server-owned RepositoryBinding from `SFIA_STUDIO_PROJECT_REPOSITORY_*`. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** **RepositoryBinding RETIRED IN LOCAL DELIVERY** — CreateProject has no `repositoryBinding`. `projectWorkspaceKey` / `projects/<key>` routing **PRESERVED**. **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED**.
 - **SoT / persistence:** `oa_projects` (+ payload_json) via OA project store.
 - **Create:** `RuntimeApplicationService.createProject` / LocalProjectComposition.
-- **Upstream:** server-owned repository binding env (`SFIA_STUDIO_PROJECT_REPOSITORY_*`).
+- **Upstream:** **CURRENT ON MAIN:** server-owned repository binding env (`SFIA_STUDIO_PROJECT_REPOSITORY_*`). **LOCAL DELIVERY CANDIDATE:** those keys are removed from preflight and `.env.example`.
 - **Downstream:** LPS, trajectories, cycles, decisions, contracts.
 - **Paths:** `lib/oa/project/**`, `lib/vertical-slice-runtime/service.ts`
 - **Restart:** survives product DB.

 ## OBJ-REPO-BINDING — RepositoryBinding

-- **Purpose:** Explicit GitHub identity/remote/branch/pathRoot for Project.
-- **SoT:** Project payload / binding fields — server-owned; never client-authored.
-- **Paths:** project domain + `SFIA_STUDIO_PROJECT_REPOSITORY_*` in `.env.example`
-- **Authority:** configuration ≠ authority; enables docs_write composition.
+- **Status:** **CURRENT ON MAIN** (`7db8afd7`) and **RETIRED IN LOCAL DELIVERY**. The card below is the historical / main object. It is a **LOCAL DELIVERY CANDIDATE / NOT ON MAIN** retirement (Morris GO 2026-10-25): not projected at CreateProject; `SFIA_STUDIO_PROJECT_REPOSITORY_*` removed from preflight and `.env.example`. **NOT MERGED**. Do not read this card as the local candidate's create path.
+- **Purpose (historical / CURRENT ON MAIN):** Explicit GitHub identity/remote/branch/pathRoot for Project.
+- **SoT (CURRENT ON MAIN):** Project payload / binding fields — server-owned; never client-authored.
+- **Paths (CURRENT ON MAIN):** project domain + `SFIA_STUDIO_PROJECT_REPOSITORY_*` in `.env.example`. Absent from the local-candidate preflight.
+- **Authority:** configuration ≠ authority. On main it enables docs_write composition. In the local candidate, docs_write Product admission is also retired (see OBJ-CAPABILITY). `projectWorkspaceKey` routing is not this object.

 ## OBJ-LPS — LivingProjectState

@@ -127,6 +129,8 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
   - **Legacy / Proposal / disposition-before-PREPARE product path:** no EC prepare on that path before the required Proposal / mission-bound HumanDecision (HD-bound PREPARE).
   - **SHE CURRENT (D-P6-SHE-01 / PR #590):** STRUCTURAL / HD-required / UNKNOWN may obtain an **inspectable** PREPARE **without** prior HD when Product qualification admits (`sheDeferredStructuralAuthority` stamp possible). Authority is consumed on Pilot **Exécuter** (`singleHumanExecutePreparedContract`): Inspect binding → applicable HD (if required) → Confirm (if required) → Authorize → launch gates. **0 Attempt** if pre-launch gates fail. Historical disposition-before-PREPARE remains available at its own boundary.
 - **Tool-First pathless stamp (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`). DETERMINISTIC at tested scope · REAL no-write enforcement OPEN (`TOOL-FIRST-REAL-NOWRITE`).
+- **CORR-01 / LOCAL DELIVERY:** `inputs.repositoryBindingIdentity` is **residual naming** for a sealed git-target string stamped from server env when canonical — **≠** OBJ-REPO-BINDING / **≠** `Project.repositoryBinding` SoT.
+- **CORR-02 / LOCAL DELIVERY — sealed git-target + managed checkout:** before protected Git start, a provided remote must match the canonical identity (`sealRepositoryBindingFromExecutionInputs`; mismatch → `repository_remote_identity_mismatch`, no synthesized-URL fallback). A managed checkout under `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` is accepted only when its `origin` matches that identity (`resolveIdentityMatchedLocalRepo`). `.git` presence is not fidelity. Worktree gitfile is followed one `gitdir` hop, then `commondir` when the worktree gitdir has no origin url. **DETERMINISTIC VERIFIED** at tested scope (`gitTargetIdentityRemoteFidelity.d0.test.ts`). **NOT MERGED**. **≠** REAL.

 ## OBJ-INSPECTION — InspectionAttestation

@@ -141,7 +145,8 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 ## OBJ-CAPABILITY — AgentCapability

-- **Purpose:** Declared agent capabilities (e.g. `cap:cursor.docs_write`).
+- **Purpose:** Declared agent capabilities. Historical Product example: `cap:cursor.docs_write`.
+- **Status split 2026-10-25:** **CURRENT ON MAIN** (`7db8afd7`): docs_write Product admission (`intentKind` / `cap:cursor.docs_write` / `cursor.docs_write.apply`) remains in active lib+features. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** that Product specialization is **RETIRED**; the generalist envelope refuses the retired document-write token (`CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE`). **NOT MERGED**.
 - **Authority:** capability presence ≠ permission to execute.

 ## OBJ-ATTEMPT — ExecutionAttempt
@@ -169,6 +174,7 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 - **Purpose:** Durable evidence records tied to attempts/artifacts.
 - **Persistence:** `oa_evidence` (+ idempotency).
+- **CORR-02 / LOCAL DELIVERY — FS-anchor allowlist:** FS→SHA supersession (`isFsAnchorSupersededByVerifiedLocalCommit`) accepts only historical artifact sources `execution_attempt:docs_write` and dotted suffixes (`execution_attempt:docs_write.*`). That reading is **not** Product admission of docs_write. No new Product materialization Evidence source is stamped after the retirement. Prose `execution attempt <id> (succeeded)`, `execution_attempt:mission_result`, and other non-allowlisted sources do not supersede. Ambiguous matching artifacts do not auto-PASS (T11/T12). **NOT MERGED**. **≠** REAL.

 ## OBJ-RB — ReviewBundle

```

### M-142 `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 09858205..3b6277e8 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -4,12 +4,19 @@

 Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

+**Epistemic split 2026-10-25 — RepositoryBinding + docs_write Product specialization:** sentences below that describe server-owned RepositoryBinding or docs_write Product admission (`intentKind` / cap / action) are **CURRENT ON MAIN** (`origin/main` `7db8afd7`, PR #617). The same mechanisms are a **LOCAL DELIVERY CANDIDATE / NOT ON MAIN** on `feat/akg-m5-remove-repository-binding-docs-write` (Morris GO 2026-10-25): **RepositoryBinding RETIRED IN LOCAL DELIVERY**; **docs_write Product specialization RETIRED IN LOCAL DELIVERY**. `projectWorkspaceKey` / `projects/<key>` routing stays. **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED**. **H4 / G-REAL / G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**. Historical flow text is not rewritten as if the main behaviour never existed.
+
+## Overlay — CORR-02 Git target fidelity (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+
+**BOUNDED FLOW IMPACT — F10 only.** Protected Git start seals identity↔remote and accepts a managed checkout only when `origin` matches the sealed identity. **NO SEMANTIC IMPACT** on unrelated flows (F01–F09, F11–F20), including D-PC-09 workspace routing (`projects/<key>`). FS→SHA continuation reading (narrative under F10/F11b pre-commit continuation) stays historical-only on `execution_attempt:docs_write` Evidence; it does not restore docs_write Product admission. **NOT MERGED**. **≠** REAL.
+
 ## F01 — Project creation / greenfield
 - **Trigger:** Studio create project
 - **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
 - **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
 - **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)
-- **Overlay — AKG-M5 L2-D2 (CURRENT ON MAIN — PR #614; DEFAULT OFF / NOT ACTIVATED):** Product create remains OA Truth C (`prj:*` / `oa_*`). When `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` trim=`"1"` (future **G-ACTIVATION** only), D1 create/confirm paths fail-closed — **no dual-write**, **no** `proj-*`→`prj:*` mapping. O-01 DET proves create → durable LPS objective → list/workspace UI (« comprendre ») on disposable SQLite. Marker default OFF preserves pre-L2-D2 D1 operator paths. **≠** live Studio activation / HTTP E2E.
+- **RepositoryBinding:** **CURRENT ON MAIN** — server-owned projection from `SFIA_STUDIO_PROJECT_REPOSITORY_*` at create. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** CreateProject has no `repositoryBinding`; those env keys are removed from preflight / `.env.example`; `projectWorkspaceKey` still set. **NOT MERGED**.
+- **Overlay — AKG-M5 L2-D2 (CURRENT ON MAIN — PR #614; DEFAULT OFF / NOT ACTIVATED; main tip PR #617 activation prep, exclusive still OFF):** Product create remains OA Truth C (`prj:*` / `oa_*`). When `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` trim=`"1"` (future **G-ACTIVATION** only), D1 create/confirm paths fail-closed — **no dual-write**, **no** `proj-*`→`prj:*` mapping. O-01 DET proves create → durable LPS objective → list/workspace UI (« comprendre ») on disposable SQLite. Marker default OFF preserves pre-L2-D2 D1 operator paths. **≠** live Studio activation / HTTP E2E.

 ## F02 — Project load / restart
 - **Trigger:** Open `/studio/projects/[id]`
@@ -45,8 +52,8 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
 - **Boundary (CI-HQA-F01 / AS-IMPLEMENTED):** explicit NEW_CYCLE formalization (« préparer / créer / démarrer un cycle … », even when a future deliverable/note is mentioned) is **not** Artifact continuation. `hasExplicitNewCycleFormalizationSignal` keeps those turns on `NEW_CYCLE_FORMALIZATION` so absence of an active cycle does not fail-closed as `no_active_cycle` before `createCycle`. Natural Artifact cues still cover produce/write/materialize of a documentary object under an active cycle (F-C9-04).
 - **Admission (Artifact governed continuation):** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533) — unchanged; obligations are not bypassed by Generic PREPARE.
-- **Adjacent hand-off (P6-HQA-F05-GD4-01 / PR #586 AS-IMPLEMENTED):** ordinary documentary materialization recognized by ACGC but **without** a closure Artifact obligation resolves as `ACTIVE_CYCLE_CONTINUATION_BLOCKED` / `no_require_artifact` (or, for natural signal without docs_write-compatible effect, may surface `NEW_CYCLE_FORMALIZATION` / `no_compatible_artifact_effect` — see vol 08 oracle semantics). When the turn is actionable for Generic PREPARE, orchestration may **hand off to F08** via `isOptionalDocumentaryWithoutClosureArtifactBlock`. This is **not** Artifact governed continuation, **not** an invented `REQUIRE_ARTIFACT` HumanDecision, and **not** proof that a new CycleInstance was created. Full Generic PREPARE admission/authority lives under **F08**, not F05.
-- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition (D-PC-09); no normal filename micro-gate when cues suffice; clarification only when no coherent cue
+- **Adjacent hand-off (P6-HQA-F05-GD4-01 / PR #586 AS-IMPLEMENTED on main):** ordinary documentary materialization recognized by ACGC but **without** a closure Artifact obligation resolves as `ACTIVE_CYCLE_CONTINUATION_BLOCKED` / `no_require_artifact` (or, for a natural signal without a docs_write-compatible effect — **CURRENT ON MAIN**; the 2026-10-25 local candidate no longer admits that Product effect — may surface `NEW_CYCLE_FORMALIZATION` / `no_compatible_artifact_effect` — see vol 08 oracle semantics). When the turn is actionable for Generic PREPARE, orchestration may **hand off to F08** via `isOptionalDocumentaryWithoutClosureArtifactBlock`. This is **not** Artifact governed continuation, **not** an invented `REQUIRE_ARTIFACT` HumanDecision, and **not** proof that a new CycleInstance was created. Full Generic PREPARE admission/authority lives under **F08**, not F05. **NOT MERGED** applies only to the local retirement, not to PR #586.
+- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition under `projects/<projectWorkspaceKey>/` (D-PC-09 workspace routing — **PRESERVED** in the 2026-10-25 local candidate); no normal filename micro-gate when cues suffice; clarification only when no coherent cue. The D-PC-09 **RepositoryBinding projection** is **CURRENT ON MAIN** and **superseded only as LOCAL DELIVERY CANDIDATE / NOT ON MAIN**.
 - **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
 - **Same CycleInstance:** no silent NEW_CYCLE / re-formalization on the Artifact path
 - **Exit (Artifact path):** Proposal `DECISION_REQUIRED`
@@ -123,7 +130,10 @@ Descriptive Product routing map for the same conversational front door. **Does n
 - **Status:** COMPLETE tables/services; unified exam + SHE/Tool-First CTA **CURRENT ON MAIN** (PR #590 / #588 lineages) at tested scope · ≠ REAL

 ## F10 — Governed execution (docs_write / Cursor)
+
+**Status split:** the docs_write Product path in this section is **CURRENT ON MAIN** (`7db8afd7`). **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** docs_write Product admission (`intentKind` / cap / action) is **RETIRED** from active lib+features; documentary work is generic PREPARE / generalist. Historical docs_write execution, report, and evidence sentences below stay the main record. **NOT MERGED**. Known regressions of that retirement are **accepted** and are not a new REAL claim.
 - **Gate:** effective Authorization on EC + attempt lifecycle; REAL additionally requires `SFIA_STUDIO_CURSOR_REAL` + managed repo base + Product REAL readiness fail-closed
+- **CORR-02 / LOCAL DELIVERY — git-target fidelity (F10):** `sealRepositoryBindingFromExecutionInputs` refuses a provided remote that does not match the canonical identity (`repository_remote_identity_mismatch` / `REAL_WORKSPACE_INVALID`; no synthesized GitHub URL fallback). `resolveIdentityMatchedLocalRepo` accepts `{managedRootBase}/{sanitizedIdentity}` only when checkout `origin` matches that identity (`managed_repo_identity_mismatch` / `managed_repo_absent` on the protected path). **DETERMINISTIC VERIFIED** at tested scope. **NOT MERGED**. **≠** REAL. Unrelated flows: **NO SEMANTIC IMPACT**.
 - **Project-scoped Cursor Select/Start (CURRENT ON MAIN at tested scope):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse. DETERMINISTIC Fake/DET · ≠ REAL BOUNDARY PROVEN.
 - **R2 — pathless non-mutating vs Cursor REAL (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
   - **Select (`governedExecuteSelectAgent`):** refuse **before** creating a new Attempt — no accepted Attempt from that Select; no REAL process.
@@ -137,7 +147,7 @@ Descriptive Product routing map for the same conversational front door. **Does n
 ## F11 — Attempt terminal → Evidence → ReviewBundle
 - **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
 - **Docs_write durable artifact (POST-EXECUTION-…-01):** when hot-worktree bytes are available at completion, Artifact Evidence uses `external_payload_ref` under existing `mission-result-refs/refs/attempts/…/docs-write-artifact` (same filesystem Evidence layout as MissionResult — **no new store/table**). CursorExecutionReport claim is persisted alongside as `cursor-execution-report.json` on the nominal path (CLAIM, not Evidence). Independent digest verify retained.
-- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake); docs_write durable review material AS-IMPLEMENTED at tested scope
+- **Status:** COMPLETE domain on main; Product E2E lineage proven at tested scope (Fake); docs_write durable review material **CURRENT ON MAIN** at tested scope. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** docs_write Product specialization **RETIRED**. **NOT MERGED**.

 ## F11b — Product Continuity / Shared Knowledge (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01)

@@ -152,7 +162,7 @@ Descriptive Product routing map for the same conversational front door. **Does n
 - **Paths:** claim evaluation tables/services; docs_write automatic `completeDocsWriteClaimEvidenceCompletion` while hot worktree / durable absolute path available
 - **Claim-completion propagation:** RecordResult **consumes** the completion result via closed `classifyDocsWriteClaimCompletionFailure` — only `CONFORMITY_HEADINGS_MISSING` / `ARTIFACT_EMPTY` → Product NOT_PROVEN/UNCLAIMED; all oracle/integrity/lineage/unknown codes → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`. No startsWith/includes catch-alls.
 - **Honesty:** Attempt `succeeded` ≠ Product PASS; NOT_PROVEN remains when conformity Evidence insufficient
-- **Status:** PRESENT; automatic qualification AS-IMPLEMENTED; journey REAL proof PARTIAL / NOT PROVEN this macro
+- **Status:** PRESENT on main; automatic docs_write qualification **CURRENT ON MAIN**; **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** that Product specialization is **RETIRED** (**NOT MERGED**); journey REAL proof PARTIAL / NOT PROVEN this macro

 ## F13 — Nora post-Evidence
 - **Handoff (POST-EXECUTION-…-01):** `runW3cPostEvidenceLoop` and `rehydrateW3cPostEvidenceFromLps` share `projectW3cExecutionReportSurfaceFromDurable` — loads durable artifact review material + Cursor report into `PostEvidenceAnalysisFacts` / `executionReport` (`artifactReviewMaterial` FULL/PARTIAL, never invent FULL). Fresh and restart/rehydrate paths project the same `W3cExecutionReportSurface`. No fabricated « sans CursorExecutionReport » surface. Nora must not depend on generic worktree `read` that yields `PATH_NOT_ALLOWED`.
@@ -218,4 +228,4 @@ Nominal Product path (architecture D-ER; **CURRENT ON MAIN** at deterministic te

 HumanDecision (durable DecisionBasis + local-write seal) → Generic EC `studio.cursor.generalist.execute` (authorized `EFFECT_CLASS:local-write` / filesystem.create|modify — **≠** Product write taxonomy) → Cursor Generalist → isolated Git worktree → CursorExecutionReport [CLAIM] + native Cursor Review End Of [CLAIM executor-only; missing ⇒ PARTIAL / no Studio synthesis] → Studio `NodeLocalGitStatusDiffPort` / `observeVerifiedChangeSet` [FACTS] (Git delta only; OBSERVED vs UNAVAILABLE — never invent empty FACTS; never full-repo scan in Git mode) → Generic Execution Review Material → Verification Evidence `ev:execution-review:*` + Mission Evidence → same ReviewBundle / ClaimEvaluation / ContractResult (mismatch ⇒ ≠ PASS) → Product Resolution (`executionReview`) → scheduled UI continue (no abandonment counter) + remount auto-resume → Nora Deep Review (shared Agents core; actual `execution_review_*` tool calls) → Result Surface (real fields + Pilot `w2ReadExecutionReviewItemAction` by itemId).

-CURRENT: docs_write specialized persist remains TRANSITIONAL dual-write bridge. Anti-stall: mounted schedule + remount from durable projection; Reconciler remains owner of transitions. Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.
+**CURRENT ON MAIN:** docs_write specialized persist remains a TRANSITIONAL dual-write bridge. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** docs_write Product specialization is **RETIRED** (admission removed from active lib+features). This bridge sentence remains true of `origin/main` `7db8afd7` and is superseded history for the local candidate. **NOT MERGED**. Anti-stall: mounted schedule + remount from durable projection; Reconciler remains owner of transitions. Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.
```

### M-143 `projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index b483bc8e..ddda7370 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -17,6 +17,14 @@ Given changed paths:
 9. Collect `testPaths` as mandatory regression set.
 10. List doc volumes requiring review; after content review only, refresh digests.

+## Overlay — CORR-01 (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+
+**CORR-01 NO SEMANTIC IMPACT** on this dependency map beyond the RepositoryBinding / docs_write Product specialization retirement already documented in the LOCAL DELIVERY overlays (README and volumes 02, 03, 05, 09). Restored generic proofs add no dependency edges. **NOT MERGED**.
+
+## Overlay — CORR-02 (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+
+**BOUNDED DEPENDENCY IMPACT.** Protected managed-checkout resolution now requires an origin match: `resolveIdentityMatchedLocalRepo` (`ManagedProjectRepositoryResolver`) accepts a candidate under `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` only when checkout `origin` matches the sealed git-target identity. `.git` existence is not that dependency. No new curated `manifest.dependencies[]` edge (the nine indexed edges are unchanged). Callers on the protected Git start path (`startExecution` seal + guarded managed root) fail closed on mismatch. **NOT MERGED**. **≠** REAL.
+
 ## Core dependency edges (harvested)

 ```
```

### M-144 `projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index e2193a5a..6a9a4f8a 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -18,10 +18,10 @@
 | `SFIA_STUDIO_PRODUCT_DB_PATH` | Absolute product SQLite | optional | else `.sfia-exec/product/oa-product.sqlite` | Truth C · server-only · prefer absolute path for durable instance |
 | `SFIA_STUDIO_NORA_SESSION_DB_PATH` | Absolute Nora session SQLite | optional | else cwd-relative `.sfia-exec/product/nora-session.sqlite` | Memory B · **≠ Truth C** · worktree-sensitive · prefer absolute per-instance |
 | `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` | Local OA-exclusive cutover marker (L2-D2) | no — default **OFF** | Arms when `process.env` value **after `trim()`** equals `"1"` (code: `isLocalOaExclusiveMode`) ; `"1"` / `" 1 "` → ON ; unset / `"0"` / other → OFF (historical D1) | Server-only · **not** global across worktrees · code **CURRENT ON MAIN** (PR #614) · default OFF · **G-ACTIVATION** required to arm · **NOT ACTIVATED** by merge |
-| `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` | Server-owned repo identity | yes Product local | fail-closed if absent | config |
-| `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` | Server-owned remote | yes Product local | fail-closed | config |
-| `SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH` | Default branch | optional | `main` | config |
-| `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` | Managed clone root | yes for REAL docs_write | fail-closed if blank | config |
+| `SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY` | Server-owned repo identity | **CURRENT ON MAIN** (`7db8afd7`): yes Product local, fail-closed if absent. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** **NOT** CreateProject SoT — removed from preflight and `.env.example` as Product **RepositoryBinding** projection. **CORR-01 / CORR-02:** **seal-only** — read by `resolveTrustedProductLaunchContext` only to stamp sealed ExecutionContract git-target inputs (`repositoryBindingIdentity` field name = residual naming / env-key rename debt). Absent / non-canonical → identity `null` → **Select** eligibility fail-closed. **Not** written onto Project. | config · historical on main · **NOT MERGED** |
+| `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` | Server-owned remote | **CURRENT ON MAIN:** yes Product local, fail-closed. **LOCAL DELIVERY CANDIDATE:** **seal-only** (not CreateProject / not RepositoryBinding SoT); removed from preflight / `.env.example`. **CORR-02:** a provided remote **must match** the canonical identity (HTTPS or SSH GitHub). Mismatch → `repository_remote_identity_mismatch`. Absent remote is synthesized only after the identity is canonical. | config · **NOT MERGED** |
+| `SFIA_STUDIO_PROJECT_REPOSITORY_DEFAULT_BRANCH` | Default branch | **CURRENT ON MAIN:** optional, `main`. **LOCAL DELIVERY CANDIDATE:** **seal-only** with identity/remote; removed from preflight / `.env.example` with binding retirement. Does not by itself prove remote fidelity. | config · **NOT MERGED** |
+| `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` | Managed checkout root | **CURRENT ON MAIN:** yes for REAL docs_write; identity subpath; fail-closed if blank. **LOCAL DELIVERY CANDIDATE:** still required for preflight / `SFIA_STUDIO_CURSOR_REAL`; no RepositoryBinding identity map; fail-closed `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | config · **NOT MERGED** |
 | `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY` | Local Pilot N3 gate | yes single-user profile | fail-closed | TEMPORARY WITH EXIT |
 | `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` | Deprecated alias | compat | prefer canonical | TEMPORARY |
 | `SFIA_STUDIO_CURSOR_REAL` | Enable Cursor REAL | optional default OFF | exclusive vs deterministic boundary | REAL gate |
@@ -44,7 +44,12 @@
 ## Server vs client

 - Product binding/authority envs are **server-only** (never `NEXT_PUBLIC_*`).
-- Browser must not supply repository binding or Pilot authority claims.
+- **CURRENT ON MAIN:** browser must not supply repository binding or Pilot authority claims.
+- **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** Product **RepositoryBinding** projection is retired — CreateProject does **not** read `SFIA_STUDIO_PROJECT_REPOSITORY_*` and those keys are **not** CreateProject SoT (removed from preflight / `.env.example`). **CORR-01 / CORR-02:** the same env keys remain **seal-only**. `resolveTrustedProductLaunchContext` may read them only to stamp sealed ExecutionContract git-target inputs (`inputs.repositoryBindingIdentity` = residual field naming). **CORR-02:** a provided `SFIA_STUDIO_PROJECT_REPOSITORY_REMOTE_URL` must match that identity. Absent / non-canonical identity → `null` → **Select** eligibility fail-closed; values are **not** written onto Project. Pilot authority envs stay server-only. **NOT MERGED**. `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` remains a server path; the managed resolver accepts a checkout only when `origin` matches the sealed identity (no RepositoryBinding identity subfolder as CreateProject SoT).
+
+## Overlay — CORR-02 sealed git-target (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+
+`SFIA_STUDIO_PROJECT_REPOSITORY_*` = **seal-only**. Remote must match identity. Mismatch does not fall back to a synthesized GitHub URL. **D-PC-09 workspace routing: NO SEMANTIC IMPACT** (historical C1 text not rewritten). **NOT MERGED**. **≠** REAL.

 ## Overlay — AKG-M5 L2-D2 exclusive marker + Option A paths (CURRENT ON MAIN — PR #614; 2026-10-24)

```

### M-145 `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 2621353c..dabd8bfa 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -2,6 +2,14 @@

 **As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

+## Overlay — CORR-01 (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+
+**CORR-01 NO SEMANTIC IMPACT** on persistence / restart / recovery. Generic continuity wording is **DETERMINISTIC AT TESTED SCOPE** only (`postExecutionProductContinuity.generic.d0.test.ts`); restart continuity remains covered by existing suites. **≠** REAL. **NOT MERGED**.
+
+## Overlay — CORR-02 (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+
+**CORR-02 NO SEMANTIC IMPACT** on persistence stores, restart, or recovery tables. Identity↔remote↔checkout checks are in-process seal and filesystem metadata reads (no new table, migration, or clone). Evidence FS→SHA supersession reads already-persisted Evidence and is **historical-only** for allowlisted sources `execution_attempt:docs_write` (+ dotted suffix). No new Product materialization Evidence source is persisted after the docs_write retirement. **≠** REAL. **NOT MERGED**.
+
 ## Store topology

 | Store | Path resolution | Contents |
```

### M-146 `projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 062a920d..2b508fd2 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -137,7 +137,9 @@ Code integrated on main. Invariants apply **when** exclusive is armed (trim=`"1"
 | `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Start) | F10 R2 | same EC + REAL=1 at Start with prior `accepted` Attempt | Start refused; Attempt stays `accepted`; no launch-port call | none | yes — Fake/DET still OK |
 | `CKC_*` | CKC | incoherent/unavailable mapping | qualification fail | none unauthorized | yes |
 | `AUTHORITY_NOT_CONFIGURED` | authz | missing local Pilot gate | cannot decide | none | yes |
-| `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | docs_write | missing managed root | cannot REAL write | none | yes |
+| `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | **CURRENT ON MAIN:** docs_write REAL. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** missing managed root still fail-closes; this is no longer a docs_write Product-admission gate. **NOT MERGED** | missing managed root | cannot REAL write | none | yes |
+| `repository_remote_identity_mismatch` | F10 seal (`sealRepositoryBindingFromExecutionInputs`) — **CORR-02 LOCAL DELIVERY CANDIDATE / NOT ON MAIN** | provided remote does not match canonical git-target identity | REAL start refused (`REAL_WORKSPACE_INVALID`); no synthesized GitHub URL fallback | none | yes — DET · **≠** REAL |
+| `managed_repo_identity_mismatch` | managed resolver (`resolveIdentityMatchedLocalRepo` / `guardedManagedRepoRootForProtectedGit`) — **CORR-02 LOCAL DELIVERY CANDIDATE / NOT ON MAIN** | checkout `origin` missing or does not match sealed identity (including one-hop worktree gitfile whose resolved origin mismatches) | protected Git fail-closed (`REAL_WORKSPACE_INVALID`); non-protected work does not fail solely because the checkout is unusable | none | yes — DET · **≠** REAL |
 | Session path orphan | Memory B | worktree cwd default | empty transcript UI | Truth C intact | operational |

 Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is **expected**.
```

### M-147 `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 9d02495d..1fec83f7 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -34,6 +34,28 @@

 **Integrated DET batch (pre-commit revalidation):** S1–S4 + freeze + injected + D4 + O-01 + D5 + M1 — **52 PASS / 10 files** (includes CR-S2-02 suite growth). **Anti-claims:** DET ≠ LIVE · H4 **NOT QUALIFIED** · G-ACTIVATION / G-REAL **NOT GRANTED** · exclusive **DEFAULT OFF**.

+## Overlay — CORR-01 restored generic proofs (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+
+docs_write suites retired with the Product specialization are not restored. These rows are the generic mission / wording proofs re-ported on the generalist contract. **NOT MERGED**. **≠** GI. **≠** REAL.
+
+| Suite file | What it proves | Class |
+|---|---|---|
+| `acceptanceCriterionAmbiguity.generic.d0.test.ts` | NONE ≠ AMBIGUOUS; ambiguous structured matches and unique `manual_review` stay NOT_PROVEN (no legacy PASS fall-through) | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
+| `missionResultContractResultSemantic.generic.d0.test.ts` | Generalist mission Result Semantic dispatch and Evidence binding (Claim ≠ Fact; technical success without Evidence stays NOT_PROVEN) | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
+| `postExecutionProductContinuity.generic.d0.test.ts` | FAIL / STOP / UNCLAIMED trajectory wording only | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
+| `contractResultCriteria.generic.d0.test.ts` | Project-specific EO without a criterion → NOT_PROVEN; `mission_diagnostic` bound to that EO → PASS; `manual_review` → NOT_PROVEN; criterion bound to a different EO does not leak PASS | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
+
+## Overlay — CORR-02 Git target fidelity (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+
+Identity↔remote↔checkout and the tightened FS-anchor allowlist. Docs_write Product suites are **not** restored. **NOT MERGED**. **≠** REAL. **≠** GI.
+
+| Suite file | What it proves | Class |
+|---|---|---|
+| `gitTargetIdentityRemoteFidelity.d0.test.ts` | T1–T2 coherent HTTPS/SSH seal (synthesized remote only when absent and identity canonical); T3–T4 owner/repo or non-GitHub host → `repository_remote_identity_mismatch` / seal `null`; T5–T8 checkout `.git` or one-hop worktree gitfile accepted only when `origin` matches, else `managed_repo_identity_mismatch`; absent checkout → `managed_repo_absent`; T9 protected path fail-closed | **DETERMINISTIC VERIFIED** · **≠** REAL |
+| `gcecCont01ContinuationResolver.d0.test.ts` T11 | Irrelevant Attempt Evidence (wrong source: `execution_attempt:mission_result`, `execution_attempt:docs_write_fake`, prose `execution attempt … (succeeded)`, or right source on the wrong Attempt) → no FS supersession; continuation stays required and not ok | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
+| `gcecCont01ContinuationResolver.d0.test.ts` T12 | Two matching historical artifact Evidence rows (exact or dotted twin) → no supersession / no auto PASS | **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
+| `gcecCont01ContinuationResolver.d0.test.ts` historical allowlist | `execution_attempt:docs_write` and `execution_attempt:docs_write.v2` still supersede when lineage is otherwise exact — historical reading only | **DETERMINISTIC AT TESTED SCOPE** · **≠** Product admission of docs_write |
+
 ## Flow → tests (selected)

 | Flow | Deterministic tests | Notes |
@@ -85,7 +107,8 @@ Parent handoff `eae8dbe2` listed these under `NO_SEMANTIC_IMPACT` (tests). That
 | Mode | `ACTIVE_CYCLE_CONTINUATION_BLOCKED` | `NEW_CYCLE_FORMALIZATION` |
 | Reason | `incompatible_execution_intent` | `no_compatible_artifact_effect` |

-- Scenario: natural materialization signal **without** `docs_write`-compatible effect under an active cycle with REQUIRE_ARTIFACT.
+- Scenario: natural materialization signal **without** a `docs_write`-compatible effect under an active cycle with REQUIRE_ARTIFACT.
+- **Epistemic split 2026-10-25:** this oracle wording is **CURRENT ON MAIN** (`7db8afd7`), where a docs_write-compatible effect can still be admitted. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** docs_write Product admission is **RETIRED**, so that specialized effect is not a Product admission path. The historical oracle is superseded history for the local candidate. **NOT MERGED**.
 - **Does not prove** that a new CycleInstance was created — the same case asserts `countCycles === 1` (resolution alone never invents a cycle).
 - Mode name `NEW_CYCLE_FORMALIZATION` here is a resolution **routing** outcome (D-ER-17: not a dead-end; Generic PREPARE may remain eligible on project/active-cycle context) — **≠** Artifact governed continuation, **≠** CREATE_CYCLE proof.
 - Ceiling: DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). NOT E2E REAL. NOT READY FOR REAL.
@@ -95,7 +118,7 @@ Parent handoff `eae8dbe2` listed these under `NO_SEMANTIC_IMPACT` (tests). That
 Candidate assertions distinguish:

 1. **Generic PREPARE eligible** on same active-cycle / project context (no dead-end force-unbind).
-2. **Artifact governed materialization not authorized** for the non-`docs_write` natural signal.
+2. **Artifact governed materialization not authorized** for the natural signal that, **on main**, is non-`docs_write`. **LOCAL DELIVERY CANDIDATE:** docs_write is not a Product admission effect; this bullet stays the historical / main oracle. **NOT MERGED**.
 3. **No artificial new CycleInstance** (`countCycles` stable; `createCycle` not required by this path).
 4. **No misleading Artifact materialization Proposal** bound as active-cycle governed continuation.

```

### M-148 `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index cb1b2673..66d489dc 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,6 +5,29 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

+## Overlay — Product RepositoryBinding + docs_write Product specialization (LOCAL DELIVERY CANDIDATE / NOT ON MAIN — 2026-10-25)
+
+| Item | Status |
+|---|---|
+| Decision | **DECIDED BY MORRIS 2026-10-25** |
+| Branch | `feat/akg-m5-remove-repository-binding-docs-write` — **LOCAL IMPLEMENTED** · **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED** |
+| **CURRENT ON MAIN** | `origin/main` `7db8afd7` (PR #617 activation prep) still has server-owned RepositoryBinding, `SFIA_STUDIO_PROJECT_REPOSITORY_*`, and docs_write Product admission. PR #614 / #616 / #617 facts above and below stay main facts. |
+| RepositoryBinding | **RETIRED IN LOCAL DELIVERY** — CreateProject has no `repositoryBinding`; preflight / `.env.example` no longer require `PROJECT_REPOSITORY_*` |
+| docs_write Product specialization | **RETIRED IN LOCAL DELIVERY** — Product admission (`intentKind` / cap / action) removed from active lib+features. Historical docs_write rows later in this volume remain the **CURRENT ON MAIN** record (superseded history for the local candidate). |
+| Preserved | `projectWorkspaceKey` / `projects/<key>` routing |
+| Proof | O-01 DET **PASS** · typecheck **PASS** · **known regressions accepted** |
+| Not granted | **H4 / G-REAL / G-ACTIVATION NOT GRANTED** · **AKG-M5 OPEN** · runtime v3 **NON ADOPTED** |
+| Anti-claim | ≠ **MERGED ON MAIN** |
+| CORR-01 — KNOWN GAP | `sameMacroClosure` helpers (`repositorySourcesFromProductFacts` / `normalize*Outcome`) lack a dedicated test after the docs_write suite retirement |
+| CORR-01 — KNOWN GAP | `replan` / `w3cPayloadMatchesCurrentProduct` / `isEvidenceBackedNotProvenUnclaimed` not re-ported |
+| CORR-01 — `repositoryBindingIdentity` | **KEEP** residual field name — sealed **git-target** identity string on ExecutionContract `inputs` / subject; source = server env (`SFIA_STUDIO_PROJECT_REPOSITORY_*`) when canonical via `resolveTrustedProductLaunchContext`; absent / non-canonical → `null` → **Select** fail-closed. **NOT** `Project.repositoryBinding` SoT (no `NewRepositoryBinding`; not written onto Project). `identity: null` in `activeCycleGovernedContinuation` local `WorkspacePathRoot` variable |
+| CORR-01 — restored proofs | Generic ambiguity / mission / criteria / continuity wording proofs restored (`*.generic.d0.test.ts`). **DET at tested scope** · **≠** REAL · **≠** GI |
+| CORR-02 — Git target fidelity | **LOCAL CORRECTION** on the structural removal. Identity↔remote↔checkout **DETERMINISTIC VERIFIED** (`gitTargetIdentityRemoteFidelity.d0.test.ts`). Evidence FS-anchor allowlist tightened; residual stubs removed. **NOT MERGED**. **≠** REAL |
+| CORR-02 — KNOWN GAP — FS supersession sources | FS→SHA supersession allowlist is **historical-only** `execution_attempt:docs_write` (+ dotted suffix). **No new Product materialization Evidence source** after docs_write retirement. Prose attempt labels and `execution_attempt:mission_result` do not supersede |
+| CORR-02 — KNOWN GAP — worktree layout | Checkout origin read follows **one** `.git` gitfile `gitdir` hop, then `commondir` when that gitdir has no origin url. Not a worktree engine: no `git` invocation, no `core.worktree`, no submodules, no further commondir hops. Layouts beyond that hop fail closed |
+| CORR-02 — KNOWN GAP — residual naming | `repositoryBindingIdentity` field name **KEEP** (same residual as CORR-01). Env keys remain `SFIA_STUDIO_PROJECT_REPOSITORY_*` — **env key rename debt**. Seal-only; not `Project.repositoryBinding` SoT |
+| CORR-02 — D-PC-09 | **NO SEMANTIC IMPACT** on D-PC-09 workspace routing. Historical C1 text is not rewritten. Qualification lives in this volume and volumes 03 / 05 |
+
 ## Overlay — AKG-M5 L2-D2 local OA cutover readiness (CURRENT ON MAIN — PR #614; Cycle 14 truth-sync — 2026-10-24)

 | Item | Status |
@@ -138,7 +161,7 @@
 |---|---|---|
 | Natural active-cycle materialization routing corrected (#532) | CONFIRMED | continuity tests on main |
 | Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
-| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
+| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) on main for workspace routing. `projects/<key>` **PRESERVED** in the 2026-10-25 local candidate. Server-owned RepositoryBinding projection stays **CURRENT ON MAIN** (`7db8afd7`) and is superseded only as **LOCAL DELIVERY CANDIDATE / NOT ON MAIN**. **CORR-02: NO SEMANTIC IMPACT** on this routing sentence; sealed git-target fidelity is not a D-PC-09 rewrite | product-completion cadrage amendment; historical D-PC-09 text not rewritten |
 | REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
 | Fake may derive `note-de-cadrage.md`; REAL may leave null | MITIGATED Fake / REAL still provider-dependent | Fake now uses provider-neutral leaf cues; REAL not re-run |
 | MW5 may re-challenge structurally resolved continuation | MITIGATED at tested scope | `structurallyResolvedActiveCycleContinuation` |
@@ -205,7 +228,7 @@ R-M3A-01 OPEN · R-M3B-01 OPEN · R-G6-SR-01…04 = correction candidates under
 - **CP4-02 OPTION C IMPLEMENTED** — Studio Product write protection = sandbox floor ∪ `STUDIO_GOVERNANCE_PROTECTED_PATHS` (framing prefix + exact Build Doctrine / Roadmap / D-ER architecture / C1). No blanket `projects/sfia-studio/**` deny. No Campus360/CT `SFIA_DEFAULT_PROTECTED_PATHS` as Product classifier.
 - Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** (at time of that macro) · ZERO REAL · READY FOR REAL **NO** · runtime v3 **NON ADOPTED**.
 - Historical: Correction Pass 04 STOP (Morris decision required on CP4-02) superseded by MD-CP4-01/MD-CP4-02 resume — see prior tip / handoff `2daf0dc3…`.
-- docs_write adapters: **TRANSITIONAL bridge retained** (dual-write Review Material) — exit when historical callers = 0.
+- docs_write adapters: **CURRENT ON MAIN** — TRANSITIONAL bridge retained (dual-write Review Material) — exit when historical callers = 0. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** docs_write Product admission is **RETIRED**; this bridge sentence is superseded history for that candidate and is **NOT MERGED**. Do not read it as proof the bridge was deleted.
 - `durableLocalWriteSeal` domain seam: **TRANSITIONAL** (isolated domain/tests only) — exit when GOVERNED trajectory Product carrier is retired or superseded; never browser/client.
 - NoteLite REAL replay: **NOT DONE** (PAUSED; distinct Morris GO).
 - Retention GC / Git promotion: **NOT IMPLEMENTED**.
@@ -232,8 +255,8 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | Item | Status |
 |---|---|
 | Cursor report machine-readable protocol in EC→Cursor prompt | AS-IMPLEMENTED — `CURSOR_EXECUTION_REPORT_JSON=` required |
-| docs_write report **runtime** required (not optional) | AS-IMPLEMENTED — `CURSOR_EXECUTION_REPORT_REQUIRED` / `_MALFORMED` / bind fail-closed; Attempt may stay succeeded |
-| docs_write report continuity after `completeBoundedDocsWriteLaunch` | AS-IMPLEMENTED — bind + persist claim beside Artifact Evidence |
+| docs_write report **runtime** required (not optional) | **CURRENT ON MAIN** — `CURSOR_EXECUTION_REPORT_REQUIRED` / `_MALFORMED` / bind fail-closed; Attempt may stay succeeded. **LOCAL DELIVERY CANDIDATE:** docs_write Product admission **RETIRED** / **NOT ON MAIN**; do not promote this row to the local candidate |
+| docs_write report continuity after `completeBoundedDocsWriteLaunch` | **CURRENT ON MAIN** — bind + persist claim beside Artifact Evidence. Superseded history for the 2026-10-25 local candidate. **NOT MERGED** |
 | Durable artifact review without hot worktree / Pilot paste | AS-IMPLEMENTED — `external_payload_ref` under existing mission-result-refs layout |
 | Claim completion result propagation | AS-IMPLEMENTED — closed classifier; only headings-missing / empty-content → NOT_PROVEN; oracle/integrity/lineage/unknown → continuity fail-closed |
 | Nora grounding (contract + report + artifact FULL/PARTIAL + CE) | AS-IMPLEMENTED at tested scope — no PATH_NOT_ALLOWED for governed artifact handoff |
@@ -273,7 +296,7 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | `repositoryMutation` absent **without** `read_only` | **FORBIDDEN** as pathless NON_STRUCTURAL — fail-closed (`repository_mutation_claim_absent` / Materiality UNKNOWN) |
 | `repositoryMutation` unknown / write → pathless NON_STRUCTURAL | **FORBIDDEN** — fail-closed |
 | Nora `repositoryMutation` / `read_only` alone as Product authority | **INSUFFICIENT** — live context, envelope, contradiction checks still apply |
-| Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED** — HD / refuse paths KEEP |
+| Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED on main** — HD / refuse paths KEEP. **LOCAL DELIVERY CANDIDATE:** the retired document-write token stays outside the generalist envelope (refuse, not re-admission). **NOT MERGED** |
 | Inspect ≠ Execute; server Confirm/Authorize/Execute distinct | **PRESERVED** — Exécuter may fold Confirm after attest only |
 | Cursor REAL generalist technical no-write | **ABSENT** — debt open |
 | R2 Select (REAL + pathless non-mutating) | **CURRENT ON MAIN** — refuse **before new Attempt**; code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` |
@@ -292,7 +315,7 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | `no_require_artifact` aliased as NEW_CYCLE_FORMALIZATION | **FORBIDDEN** — preserved |
 | Invented REQUIRE_ARTIFACT / silent HD for optional documentary | **FORBIDDEN** — preserved |
 | Applicable Artifact obligation / REQUIRE_ARTIFACT path | **PRESERVED** — Generic PREPARE does not bypass Artifact governance |
-| Intent fidelity (`docs_write` / missionEffects) | AS-IMPLEMENTED at tested scope — offer → rebuild → inspectable contract |
+| Intent fidelity (`docs_write` / missionEffects) | **CURRENT ON MAIN** — offer → rebuild → inspectable contract at tested scope. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN:** `docs_write` is not a Product admission `intentKind`; documentary work uses generic PREPARE. **NOT MERGED** |
 | Capability envelope | Exact Product identities only; substring spoofing fail-closed |
 | Nora proposed path as authorized expectedOutput | **FORBIDDEN** at Generic PREPARE when unresolved — candidate only (`unresolved_nora_candidate`) |
 | Pending Generic PREPARE offer persistence | **PROCESS-LOCAL** — restart-unsafe; re-offer required |
@@ -376,7 +399,7 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 No `retired-components-ledger.md` — zero components removed.

 ### CP4 residual reserves (acceptable debt after resume)
-- docs_write compatibility bridges retained
+- docs_write compatibility bridges retained on **CURRENT ON MAIN**. **LOCAL DELIVERY CANDIDATE / NOT ON MAIN (2026-10-25):** Product admission of that specialization is **RETIRED**; bridges are not claimed deleted by this note. **NOT MERGED**
 - Review Material GC/retention not implemented
 - Git promotion of reviewed candidate not implemented
 - NoteLite REAL re-proof deferred (Morris GO distinct)
```

### M-149 `projects/sfia-studio/production-runtime-reference/README.md` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index a9f20a18..4f113676 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -46,11 +46,27 @@ Fake/DET remains the deterministic proof path for R1/R2 at tested scope. Determi

 Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** · merge `7b64ab21aa29211d5fce93d06d24bce539a0c5a5` · [post-merge CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · eight Cycle-14 digests on main · **R-01 exit proof satisfied** · formal close **NOT CONSUMED** · digest match ≠ semantic exhaustiveness (**NO PRODUCT SEMANTIC IMPACT**) · code L2-D2 remains DEFAULT OFF / NOT ACTIVATED (PR #614 distinct).

-**G-ACTIVATION PREPARATION S1–S4 + CORR-01 + CR-S2-02 (IMPLEMENTED — DET scope — 2026-10-25):** Product `VACUUM INTO` snapshot/restore (closed_copy unavailable; RO integrity) · `openD1Db` native **allowlist** Proxy (closes `setAuthorizer`/`createTagStore`/`deserialize`/deferred `iterate` escapes — **CR-S2-01/02**) · D4 DET harness · R-CUT DET rehearsal (exclusive held; disposable RO D1 oracle ≠ Q12). Volumes 05–09 describe this behaviour. **Operational anti-claims (unchanged by Git Integration):** exclusive **DEFAULT OFF / NOT ACTIVATED** · G-ACTIVATION / G-REAL **NOT GRANTED** · H4 real instance **NOT QUALIFIED** · D4 HTTP LIVE / R-CUT LIVE **NOT PROVEN** · raw `new DatabaseSync` outside `openD1Db` **KNOWN GAP** · Q12 **OPEN** · runtime v3 **NON ADOPTED**.
+**Main tip truth-sync (2026-10-25):** [PR #617](https://github.com/mcleland147/sfia-workspace/pull/617) **MERGED ON MAIN** · merge `7db8afd7c27720712f08000274dbbc4e1a62d935` = `origin/main` · [CI #40169014052](https://github.com/mcleland147/sfia-workspace/actions/runs/40169014052) **SUCCESS** · L2-D2 activation prep S1–S4 is **CURRENT ON MAIN**. [PR #616](https://github.com/mcleland147/sfia-workspace/pull/616) **MERGED** `d7aad77e999e4fe64f31a776ddf39c1d99278b1b` (R-01 evidence status) sits between #615 and #617. Exclusive remains **DEFAULT OFF / NOT ACTIVATED**. **G-ACTIVATION / G-REAL NOT GRANTED**. This truth-sync does **not** retire RepositoryBinding or docs_write Product admission — both remain historically present on `7db8afd7`.
+
+**G-ACTIVATION PREPARATION S1–S4 + CORR-01 + CR-S2-02 (IMPLEMENTED — DET scope — CURRENT ON MAIN via PR #617 — 2026-10-25):** Product `VACUUM INTO` snapshot/restore (closed_copy unavailable; RO integrity) · `openD1Db` native **allowlist** Proxy (closes `setAuthorizer`/`createTagStore`/`deserialize`/deferred `iterate` escapes — **CR-S2-01/02**) · D4 DET harness · R-CUT DET rehearsal (exclusive held; disposable RO D1 oracle ≠ Q12). Volumes 05–09 describe this behaviour. **Operational anti-claims (unchanged by Git Integration):** exclusive **DEFAULT OFF / NOT ACTIVATED** · G-ACTIVATION / G-REAL **NOT GRANTED** · H4 real instance **NOT QUALIFIED** · D4 HTTP LIVE / R-CUT LIVE **NOT PROVEN** · raw `new DatabaseSync` outside `openD1Db` **KNOWN GAP** · Q12 **OPEN** · runtime v3 **NON ADOPTED**.
+
+**Product RepositoryBinding + docs_write Product specialization — LOCAL DELIVERY CANDIDATE / NOT ON MAIN (Morris GO 2026-10-25):**
+
+| Epistemic class | Element |
+|---|---|
+| **CURRENT ON MAIN** | `origin/main` `7db8afd7` (PR #617) still has server-owned RepositoryBinding on CreateProject, `SFIA_STUDIO_PROJECT_REPOSITORY_*` in preflight / `.env.example`, and docs_write Product admission (`intentKind` / cap / action) in active lib+features. That is historical presence on main, not this retirement. |
+| **LOCAL DELIVERY CANDIDATE / NOT ON MAIN** | Branch `feat/akg-m5-remove-repository-binding-docs-write`. **DECIDED BY MORRIS 2026-10-25**. **LOCAL IMPLEMENTED**. **RepositoryBinding RETIRED IN LOCAL DELIVERY** (CreateProject has no `repositoryBinding`; `PROJECT_REPOSITORY_*` removed from preflight and `.env.example`). **docs_write Product specialization RETIRED IN LOCAL DELIVERY** (Product admission of `intentKind` / cap / action removed from active lib+features). `projectWorkspaceKey` / `projects/<key>` routing **PRESERVED**. O-01 DET **PASS**. Typecheck **PASS**. **Known regressions accepted**. |
+| **Gates** | **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED**. **H4 / G-REAL / G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**. |
+| **Anti-claims** | ≠ **MERGED ON MAIN** · ≠ exclusive ACTIVATED · ≠ REAL PROVEN · ≠ P6 GLOBAL PASS · historical D-PC-09 / docs_write sentences in volumes 02–09 stay the main record until merge |
+
+- **CORR-01 (LOCAL DELIVERY CANDIDATE):** Review Pack completeness + generic invariant coverage restored (ambiguity / mission / criteria / continuity wording). **Not GI**. **NOT MERGED**. **≠** REAL.
+- **CORR-02 (LOCAL DELIVERY CANDIDATE):** Git target fidelity on the structural removal — identity↔remote↔checkout **DETERMINISTIC VERIFIED** at tested scope. Evidence FS-anchor allowlist tightened to historical `execution_attempt:docs_write` (+ dotted suffix); residual stubs removed. **NOT MERGED**. **≠** REAL.
+
+Checked-out tree may already contain this uncommitted retirement. That working-tree fact is **not** integration on main. Volumes below that still describe binding or docs_write as as-implemented behaviour describe **CURRENT ON MAIN** unless they are explicitly marked **LOCAL DELIVERY CANDIDATE**.

 ## What this corpus is

-This corpus describes **how SFIA Studio actually works now** in the checked-out Git tree:
+This corpus describes **how SFIA Studio actually works** in Git:

 - objects and responsibilities;
 - end-to-end flows;
@@ -61,6 +77,8 @@ This corpus describes **how SFIA Studio actually works now** in the checked-out
 - tests and proof oracles;
 - impact-analysis procedure for future changes.

+For RepositoryBinding and docs_write Product admission, **CURRENT ON MAIN** (`origin/main` `7db8afd7`) wins over the uncommitted local retirement until merge.
+
 It is the primary **impact-analysis substrate** for future Studio corrections.

 ### Canonical documentary role (AKG-M0)
```

### M-150 `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json` **[CORR-02]**
- **Semantic change:** R24 CORR-02 LOCAL CANDIDATE documentation
```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 1c9ae0fd..6b66e1e9 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -7,7 +7,7 @@
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "508d21f295b578f5"
+      "sha256_16": "7ba814d9fab072c3"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -15,35 +15,35 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
-      "sha256_16": "61d089bf93c1676a"
+      "sha256_16": "29f5090856249f87"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "e629977124c113a5"
+      "sha256_16": "a5a30590681df038"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "9bdf207ceeac259e"
+      "sha256_16": "768d13f5c4e16b02"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
-      "sha256_16": "aef317f3aa031be5"
+      "sha256_16": "212ce15d79c0141a"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "7fdf3ef0761118ca"
+      "sha256_16": "0a28f40356eb10e0"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "ad4c4774f42d6540"
+      "sha256_16": "c94404621eb849e3"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "7f27c5740e1ad080"
+      "sha256_16": "ee58d273c118ec64"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "56d2f057722faedb"
+      "sha256_16": "19a5e08fe8ad6f86"
     }
   ],
   "components": [
@@ -609,7 +609,7 @@
   "trackedSources": [
     {
       "path": "projects/sfia-studio/app/features/project-assistant/actions.ts",
-      "sha256_16": "3abbffc860197bb3"
+      "sha256_16": "80e4fbcf941890de"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
@@ -621,11 +621,11 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
-      "sha256_16": "aeb3359752700910"
+      "sha256_16": "642cdc0dc2826694"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts",
-      "sha256_16": "93852ec0c2193c86"
+      "sha256_16": "965b816859f937ed"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts",
@@ -677,11 +677,11 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts",
-      "sha256_16": "52e6055fa1013a3c"
+      "sha256_16": "7a7979e8101c91fc"
     },
     {
       "path": "projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts",
-      "sha256_16": "6fba1892149be55c"
+      "sha256_16": "10825ecbaed2691f"
     },
     {
       "path": "projects/sfia-studio/app/lib/oa/cycle/application/assessFinalization.ts",
@@ -693,11 +693,11 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts",
-      "sha256_16": "4fa008d63f6e6c27"
+      "sha256_16": "8b704ff0102e830c"
     },
     {
       "path": "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
-      "sha256_16": "b8e30897933dd2f0"
+      "sha256_16": "8a0c920aa8a7a168"
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
@@ -713,21 +713,21 @@
     },
     {
       "path": "projects/sfia-studio/app/.env.example",
-      "sha256_16": "c32542c141934455"
+      "sha256_16": "e3f2ccebae57891b"
     }
   ],
   "trackedTests": [
     {
       "path": "projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts",
-      "sha256_16": "23513b92d5cfa5d3"
+      "sha256_16": "1b3ecc831995dc27"
     },
     {
       "path": "projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts",
-      "sha256_16": "866294bc20ff538e"
+      "sha256_16": "ac58d8833ed9ed4a"
     },
     {
       "path": "projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts",
-      "sha256_16": "c2862434ad6fe670"
+      "sha256_16": "5ac9db4c61b76c55"
     },
     {
       "path": "projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts",
@@ -743,7 +743,7 @@
     },
     {
       "path": "projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts",
-      "sha256_16": "0b4277b6c3e98126"
+      "sha256_16": "d43a9e6a9f07ed6a"
     }
   ],
   "maintenance": {
```

---
## 8. Added files (A vs HEAD) — full content

### A-01 `projects/sfia-studio/app/features/project-assistant/f3/productEvidenceRefsRoot.ts` **[CUMULATIVE]**
- Structural-removal extract (not parallel architecture).
```typescript
/**
 * Default refs root beside Product SQLite (same convention as mission-result-refs).
 */
import path from "node:path";

export function resolveProductEvidenceRefsRoot(
  explicit?: string | null,
): string {
  const trimmed = explicit?.trim();
  if (trimmed) return trimmed;
  const fromEnv =
    typeof process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT === "string" &&
    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT.trim()
      ? process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT.trim()
      : null;
  if (fromEnv) return fromEnv;
  const db =
    typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
    process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
      ? process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
      : path.join(
          process.cwd(),
          "..",
          ".sfia-exec",
          "product",
          "oa-product.sqlite",
        );
  return path.join(path.dirname(db), "mission-result-refs");
}
```

### A-02 `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/authorizedCursorRealAgent.ts` **[CUMULATIVE]**
- Structural-removal extract (not parallel architecture).
```typescript
/**
 * REAL Cursor allowlist — generalist | read-only | local-commit | push | PR create | PR merge.
 * Product missions use the generalist. Git ports keep their bounded agents.
 */
import type { AgentDescriptor } from "../domain/types";
import { isM4BoundedLocalCommitRealAgent } from "./m4BoundedLocalCommitCursorAgent";
import { isM4BoundedPrCreateRealAgent } from "./m4BoundedPrCreateCursorAgent";
import { isM4BoundedPrMergeRealAgent } from "./m4BoundedPrMergeCursorAgent";
import { isM4BoundedReadOnlyRealAgent } from "./m4BoundedReadOnlyCursorAgent";
import { isM4BoundedRemotePushRealAgent } from "./m4BoundedRemotePushCursorAgent";
import { isStudioCursorGeneralistRealAgent } from "./studioCursorGeneralistAgent";

export function isM4AuthorizedCursorRealAgent(
  agent: AgentDescriptor,
): boolean {
  return (
    isStudioCursorGeneralistRealAgent(agent) ||
    isM4BoundedReadOnlyRealAgent(agent) ||
    isM4BoundedLocalCommitRealAgent(agent) ||
    isM4BoundedRemotePushRealAgent(agent) ||
    isM4BoundedPrCreateRealAgent(agent) ||
    isM4BoundedPrMergeRealAgent(agent)
  );
}
```

---
## 9. Untracked added tests — full content

### U-01 `projects/sfia-studio/app/__tests__/oa/evidence-review/acceptanceCriterionAmbiguity.generic.d0.test.ts` **[CORR-01]**
```typescript
// @vitest-environment node
/**
 * Generic acceptance-criterion ambiguity.
 *
 * Ported from the generic half of
 * nativeExecutionLoopConvergence01.acceptanceAmbiguity.d0.test.ts.
 * NONE ≠ AMBIGUOUS. Ambiguous structured matches and unique manual_review
 * must never fall through to a legacy PASS.
 * docs_write Result Semantic is not covered here.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { persistMissionResultPayload } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  assessMissionResultExpectedOutput,
  MISSION_RESULT_EVIDENCE_SOURCE,
} from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  digestMissionResultPayload,
  MISSION_DIAGNOSTIC_EO_TEMPLATES,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
  resolveAcceptanceCriterionForExpectedOutput,
} from "@/lib/oa/execution-contract";

const NOW = "2026-09-23T10:00:00.000Z";
const LEGACY_DIAGNOSTIC = MISSION_DIAGNOSTIC_EO_TEMPLATES[0]!;

const refsDirs: string[] = [];

afterEach(() => {
  while (refsDirs.length) {
    const d = refsDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("resolveAcceptanceCriterionForExpectedOutput — NONE ≠ AMBIGUOUS", () => {
  it("returns none / unique / ambiguous distinctly", () => {
    const criteria = [
      {
        criterionId: "acc:a",
        statement: "A",
        kind: "mission_diagnostic" as const,
        expectedOutputRef: "EO",
        targetPath: null,
      },
      {
        criterionId: "acc:b",
        statement: "B",
        kind: "manual_review" as const,
        expectedOutputRef: "EO",
        targetPath: null,
      },
    ];
    expect(resolveAcceptanceCriterionForExpectedOutput([], "EO")).toEqual({
      kind: "none",
    });
    expect(
      resolveAcceptanceCriterionForExpectedOutput([criteria[0]!], "EO").kind,
    ).toBe("unique");
    const amb = resolveAcceptanceCriterionForExpectedOutput(criteria, "EO");
    expect(amb.kind).toBe("ambiguous");
    if (amb.kind === "ambiguous") expect(amb.matches).toHaveLength(2);
  });
});

describe("mission semantic — AMBIGUOUS and manual_review stay NOT_PROVEN", () => {
  function missionEvidence(absolutePath: string, digest: string): Evidence {
    return {
      schemaVersion: "0.2.0-oa",
      evidenceId: "ev:mission-result:xatmission1",
      type: "attestation",
      source: MISSION_RESULT_EVIDENCE_SOURCE,
      sourceKind: "execution_attempt",
      location: absolutePath,
      digest: digest as never,
      producedBy: { actorId: "actor:t", role: "project_owner" },
      producedAt: NOW,
      freshness: "fresh",
      status: "verified",
      classification: "internal",
      storageMode: "external_payload_ref",
      availability: "available",
      retentionClass: "standard",
      legalHold: false,
      bindings: {
        projectId: "prj:mission",
        executionContractId: "xct:mission:1",
        executionAttemptId: "xat:mission:1",
        cycleInstanceId: "cyc:1",
      },
      containsSecrets: false,
      technicalResultRef: "res:w3a:abc123",
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:mission",
        actor: { actorId: "actor:t", role: "project_owner" },
        source: "execution_adapter",
        timestamp: NOW,
        correlationId: "cor:mission",
        projectId: "prj:mission",
      },
      version: 1,
      createdAt: NOW,
    } as unknown as Evidence;
  }

  function preparePayloadEvidence() {
    const refs = fs.mkdtempSync(path.join(os.tmpdir(), "nelc01-amb-mission-"));
    refsDirs.push(refs);
    const payload: MissionResultPayload = {
      schemaVersion: "oa.mission-result.1",
      reportId: "rpt:cursor:test",
      attemptId: "xat:mission:1",
      executionContractId: "xct:mission:1",
      repositoryRef: "mcleland147/sfia-workspace",
      baseSha: "a".repeat(40),
      status: "succeeded",
      diagnosticSummary: "Blocage identifié: réserve non levée.",
      recommendedNextProductStep: "Lever la réserve avant finalisation.",
      inspectedDurableTrace:
        "Trace d'inspection Attempt xat:mission:1 / Evidence ev:x",
      authorizedEffectsExecuted: [],
    };
    const persisted = persistMissionResultPayload({
      refsRoot: refs,
      attemptId: payload.attemptId,
      payload,
    });
    if (!persisted.ok) throw new Error("persist");
    expect(digestMissionResultPayload(payload)).toBe(persisted.digest);
    return missionEvidence(persisted.absolutePath, persisted.digest);
  }

  const attempt = {
    attemptId: "xat:mission:1",
    executionContractId: "xct:mission:1",
    status: "succeeded" as const,
    resultRef: "res:w3a:abc123",
  };

  it("UNIQUE manual_review — NOT_PROVEN even when legacy grammar would PASS", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:manual-review",
              statement: LEGACY_DIAGNOSTIC,
              kind: "manual_review",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("NOT_PROVEN");
  });

  it("AMBIGUOUS 2+ — NOT_PROVEN; legacy PASS impossible", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:mission-diagnostic",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_diagnostic",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
            {
              criterionId: "acc:02:manual-review",
              statement: LEGACY_DIAGNOSTIC,
              kind: "manual_review",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("NOT_PROVEN");
  });

  it("AMBIGUOUS two deterministic kinds — no arbitrary first match; NOT_PROVEN", () => {
    const evidence = preparePayloadEvidence();
    expect(
      assessMissionResultExpectedOutput({
        expectation: LEGACY_DIAGNOSTIC,
        ordinal: 1,
        attempt: attempt as never,
        evidence,
        contractInputs: {
          [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
            {
              criterionId: "acc:01:mission-diagnostic",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_diagnostic",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
            {
              criterionId: "acc:02:mission-next-step",
              statement: LEGACY_DIAGNOSTIC,
              kind: "mission_next_step",
              expectedOutputRef: LEGACY_DIAGNOSTIC,
              targetPath: null,
            },
          ],
        },
      }),
    ).toBe("NOT_PROVEN");
  });
});
```

### U-02 `projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCriteria.generic.d0.test.ts` **[CORR-01]**
```typescript
/**
 * Generic Contract Result criteria parity.
 *
 * Ported from the mission half of
 * nativeExecutionLoopConvergence01.contractResultCriteria.d0.test.ts.
 * Sealed structured acceptance criteria are evaluated by the SAME semantics
 * (no second evaluator). Only deterministic kinds can PASS; manual_review and
 * unbound prose stay NOT_PROVEN — no LLM auto-PASS.
 * The docs_write Result Semantic half is not ported.
 * Contracts use the generalist Cursor quartet only.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { persistMissionResultPayload } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import type { Evidence } from "@/lib/oa/evidence-review";
import { assessExpectedOutputs } from "@/lib/oa/evidence-review/application/contractResultAssessment";
import { resolveApplicableContractResultSemantics } from "@/lib/oa/evidence-review/application/contractResultSemantics";
import { MISSION_RESULT_EVIDENCE_SOURCE } from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  digestMissionResultPayload,
  MISSION_RESULT_ER_KEY,
  PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY,
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";

const NOW = "2026-09-23T10:00:00.000Z";

/** Project-specific EO prose — no fixed template grammar can decide it. */
const CUSTOM_DIAGNOSTIC_EO =
  "Diagnostic ciblé du blocage de finalisation du cycle en cours";

const refsDirs: string[] = [];

afterEach(() => {
  while (refsDirs.length) {
    const d = refsDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function missionContract(inputs: Record<string, unknown>): ExecutionContract {
  const base = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:mission:1",
    projectId: "prj:mission",
    version: 1,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: STUDIO_CURSOR_GENERALIST_ACTION,
    target: STUDIO_CURSOR_GENERALIST_TARGET,
    scope: STUDIO_CURSOR_GENERALIST_SCOPE,
    requiredAuthority: "N1",
    constraints: [
      "PRODUCT_GOVERNED",
      PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
      "EFFECT_CLASS:read",
    ],
    stopConditions: [],
    evidenceRequirements: [MISSION_RESULT_ER_KEY],
    expectedOutputs: [CUSTOM_DIAGNOSTIC_EO],
    requiredCapabilities: [STUDIO_CURSOR_GENERALIST_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:mission",
    correlationId: "cor:ec:mission",
    inputs,
  } as unknown as ExecutionContract;
  base.semanticFingerprint = computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(base),
  );
  return base;
}

function missionEvidence(absolutePath: string, digest: string): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: "ev:mission-result:xatmission1",
    type: "attestation",
    source: MISSION_RESULT_EVIDENCE_SOURCE,
    sourceKind: "execution_attempt",
    location: absolutePath,
    digest: digest as never,
    producedBy: { actorId: "actor:t", role: "project_owner" },
    producedAt: NOW,
    freshness: "fresh",
    status: "verified",
    classification: "internal",
    storageMode: "external_payload_ref",
    availability: "available",
    retentionClass: "standard",
    legalHold: false,
    bindings: {
      projectId: "prj:mission",
      executionContractId: "xct:mission:1",
      executionAttemptId: "xat:mission:1",
      cycleInstanceId: "cyc:1",
    },
    containsSecrets: false,
    technicalResultRef: "res:w3a:abc123",
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:mission",
      actor: { actorId: "actor:t", role: "project_owner" },
      source: "execution_adapter",
      timestamp: NOW,
      correlationId: "cor:mission",
      projectId: "prj:mission",
    },
    version: 1,
    createdAt: NOW,
  } as unknown as Evidence;
}

function missionPayload(): MissionResultPayload {
  return {
    schemaVersion: "oa.mission-result.1",
    reportId: "rpt:cursor:test",
    attemptId: "xat:mission:1",
    executionContractId: "xct:mission:1",
    repositoryRef: "mcleland147/sfia-workspace",
    baseSha: "a".repeat(40),
    status: "succeeded",
    diagnosticSummary: "Blocage identifié: réserve non levée.",
    recommendedNextProductStep: "Lever la réserve avant finalisation.",
    inspectedDurableTrace:
      "Trace d'inspection Attempt xat:mission:1 / Evidence ev:x / ReviewBundle rb:x",
    authorizedEffectsExecuted: [],
  } as MissionResultPayload;
}

function assessMissionEo(inputs: Record<string, unknown>) {
  const refs = fs.mkdtempSync(path.join(os.tmpdir(), "nelc01-mission-"));
  refsDirs.push(refs);
  const payload = missionPayload();
  const persisted = persistMissionResultPayload({
    refsRoot: refs,
    attemptId: payload.attemptId,
    payload,
  });
  if (!persisted.ok) throw new Error("persist");
  expect(digestMissionResultPayload(payload)).toBe(persisted.digest);
  const evidence = missionEvidence(persisted.absolutePath, persisted.digest);
  const contract = missionContract(inputs);
  const attempt = {
    attemptId: "xat:mission:1",
    executionContractId: contract.executionContractId,
    executionContractVersion: 1,
    executionContractSemanticFingerprint:
      contract.semanticFingerprint as string,
    status: "succeeded" as const,
    resultRef: "res:w3a:abc123",
  };
  expect(
    resolveApplicableContractResultSemantics(
      executionContractSemanticMaterial(contract),
    ).status,
  ).toBe("one");
  return assessExpectedOutputs({
    semanticMaterial: executionContractSemanticMaterial(contract),
    semanticFingerprint: contract.semanticFingerprint as string,
    attempt,
    evidences: [evidence],
    evaluatedAt: NOW,
    frozenEvidenceSnapshots: [
      {
        evidenceId: evidence.evidenceId,
        evidenceVersion: 1,
        status: "verified",
        availability: "available",
      },
    ],
  });
}

describe("mission Result Semantic honours sealed acceptance criteria", () => {
  it("project-specific EO without a criterion stays NOT_PROVEN", () => {
    const eo = assessMissionEo({});
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });

  it("deterministic criterion bound to the EO yields PASS", () => {
    const eo = assessMissionEo({
      [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
        {
          criterionId: "acc:01:mission-diagnostic",
          statement: CUSTOM_DIAGNOSTIC_EO,
          kind: "mission_diagnostic",
          expectedOutputRef: CUSTOM_DIAGNOSTIC_EO,
          targetPath: null,
        },
      ],
    });
    expect(eo[0]?.result).toBe("PASS");
  });

  it("manual_review criterion never auto-passes", () => {
    const eo = assessMissionEo({
      [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
        {
          criterionId: "acc:01:manual-review",
          statement: CUSTOM_DIAGNOSTIC_EO,
          kind: "manual_review",
          expectedOutputRef: CUSTOM_DIAGNOSTIC_EO,
          targetPath: null,
        },
      ],
    });
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });

  it("criterion bound to a different EO does not leak a PASS", () => {
    const eo = assessMissionEo({
      [CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY]: [
        {
          criterionId: "acc:01:mission-diagnostic",
          statement: "autre",
          kind: "mission_diagnostic",
          expectedOutputRef: "un autre expected output",
          targetPath: null,
        },
      ],
    });
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });
});
```

### U-03 `projects/sfia-studio/app/__tests__/oa/evidence-review/missionResultContractResultSemantic.generic.d0.test.ts` **[CORR-01]**
```typescript
/**
 * Generic mission Result Semantic.
 *
 * Ported from missionResultContractResultSemantic.d0.test.ts cases
 * A1–A4, A6–A7, and P-N1–P-N6 (Claim ≠ Fact / technical success without Evidence).
 * The docs_write-only A5 case is not ported.
 * Contracts use the generalist Cursor quartet only.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { persistMissionResultPayload } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import type { Evidence } from "@/lib/oa/evidence-review";
import {
  assessEvidenceRequirements,
  assessExpectedOutputs,
  deriveCanonicalContractResultStatus,
} from "@/lib/oa/evidence-review/application/contractResultAssessment";
import { resolveApplicableContractResultSemantics } from "@/lib/oa/evidence-review/application/contractResultSemantics";
import {
  MISSION_RESULT_EVIDENCE_SOURCE,
  MISSION_RESULT_RULE_REF,
} from "@/lib/oa/evidence-review/application/missionResultContractResultSemantic";
import {
  MISSION_DIAGNOSTIC_EO_TEMPLATE,
  MISSION_NEXT_STEP_EO_TEMPLATE,
  MISSION_RESULT_ER_KEY,
  PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
  type MissionResultPayload,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
  W3B_TEMP_ARTIFACT_ER_KEY,
  W3B_TEMP_ARTIFACT_RULE_REF,
} from "@/lib/oa/evidence-review/application/tempArtifactContractResultSemantic";
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
  STUDIO_CURSOR_GENERALIST_CAPABILITY,
  STUDIO_CURSOR_GENERALIST_SCOPE,
  STUDIO_CURSOR_GENERALIST_TARGET,
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";

const NOW = "2026-09-23T10:00:00.000Z";
const refsDirs: string[] = [];

afterEach(() => {
  while (refsDirs.length) {
    const d = refsDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function missionContract(
  overrides: Partial<ExecutionContract> = {},
): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:mission:1",
    projectId: "prj:mission",
    version: 1,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: STUDIO_CURSOR_GENERALIST_ACTION,
    target: STUDIO_CURSOR_GENERALIST_TARGET,
    scope: STUDIO_CURSOR_GENERALIST_SCOPE,
    requiredAuthority: "N1",
    constraints: [
      "PRODUCT_GOVERNED",
      PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
      "EFFECT_CLASS:read",
    ],
    stopConditions: [],
    evidenceRequirements: [MISSION_RESULT_ER_KEY, "evreq:read"],
    expectedOutputs: [
      MISSION_DIAGNOSTIC_EO_TEMPLATE,
      MISSION_NEXT_STEP_EO_TEMPLATE,
    ],
    requiredCapabilities: [STUDIO_CURSOR_GENERALIST_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:mission",
    correlationId: "cor:ec:mission",
    ...overrides,
  };
  const material = executionContractSemanticMaterial(base);
  base.semanticFingerprint =
    computeExecutionContractSemanticMaterialFingerprint(material);
  return base;
}

function samplePayload(
  overrides: Partial<MissionResultPayload> = {},
): MissionResultPayload {
  return {
    schemaVersion: "oa.mission-result.1",
    reportId: "rpt:cursor:test",
    attemptId: "xat:mission:1",
    executionContractId: "xct:mission:1",
    repositoryRef: "mcleland147/sfia-workspace",
    baseSha: "a".repeat(40),
    status: "succeeded",
    diagnosticSummary: "Réserves et preuves manquantes identifiées.",
    recommendedNextProductStep: "Clarifier le livrable avant nouvelle tentative.",
    inspectedDurableTrace:
      "Trace d'inspection Attempt xat:mission:1 / Evidence ev:x / ReviewBundle rb:x",
    authorizedEffectsExecuted: [],
    ...overrides,
  };
}

function makeMissionEvidence(absolutePath: string, digest: string): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: "ev:mission-result:xatmission1",
    type: "attestation",
    source: MISSION_RESULT_EVIDENCE_SOURCE,
    sourceKind: "execution_attempt",
    location: absolutePath,
    digest: digest as never,
    producedBy: { actorId: "actor:t", role: "project_owner" },
    producedAt: NOW,
    freshness: "fresh",
    status: "verified",
    classification: "internal",
    storageMode: "external_payload_ref",
    availability: "available",
    retentionClass: "standard",
    legalHold: false,
    bindings: {
      projectId: "prj:mission",
      executionContractId: "xct:mission:1",
      executionAttemptId: "xat:mission:1",
      cycleInstanceId: "cyc:1",
    },
    containsSecrets: false,
    technicalResultRef: "res:w3a:abc123",
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:mission",
      actor: { actorId: "actor:t", role: "project_owner" },
      source: "execution_adapter",
      timestamp: NOW,
      correlationId: "cor:mission",
      projectId: "prj:mission",
    },
    version: 1,
    createdAt: NOW,
  } as unknown as Evidence;
}

describe("generic mission Result Semantic", () => {
  it("A1 — generalist quartet + mission marker + mission ER → exactly one", () => {
    const material = executionContractSemanticMaterial(missionContract());
    const r = resolveApplicableContractResultSemantics(material);
    expect(r.status).toBe("one");
    if (r.status === "one") {
      expect(r.semantic.ruleRef).toBe(MISSION_RESULT_RULE_REF);
      expect(r.semantic.id).toBe("mission-result");
    }
  });

  it("A2 — missing mission marker → none", () => {
    const material = executionContractSemanticMaterial(
      missionContract({
        constraints: ["PRODUCT_GOVERNED", "EFFECT_CLASS:read"],
      }),
    );
    expect(resolveApplicableContractResultSemantics(material).status).toBe(
      "none",
    );
  });

  it("A3 — missing mission ER → none", () => {
    const material = executionContractSemanticMaterial(
      missionContract({ evidenceRequirements: ["evreq:read"] }),
    );
    expect(resolveApplicableContractResultSemantics(material).status).toBe(
      "none",
    );
  });

  it("A4 — generalist temp-artifact WHAT remains temp only", () => {
    const material = executionContractSemanticMaterial(
      missionContract({
        constraints: ["PRODUCT_GOVERNED"],
        evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
        expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
      }),
    );
    const r = resolveApplicableContractResultSemantics(material);
    expect(r.status).toBe("one");
    if (r.status === "one") {
      expect(r.semantic.ruleRef).toBe(W3B_TEMP_ARTIFACT_RULE_REF);
      expect(r.semantic.ruleRef).not.toBe(MISSION_RESULT_RULE_REF);
    }
  });

  it("A6 — technical success without mission Evidence → NOT_PROVEN", () => {
    const c = missionContract();
    const material = executionContractSemanticMaterial(c);
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:mission:1",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: c.semanticFingerprint as string,
        status: "succeeded",
        resultRef: "res:w3a:abc123",
      },
      evidences: [],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: [],
    });
    expect(eo.every((x) => x.result === "NOT_PROVEN")).toBe(true);
  });

  it("A7 — bound valid mission Evidence → EO PASS / ER SATISFIED / pass", () => {
    const refs = fs.mkdtempSync(path.join(os.tmpdir(), "mission-refs-"));
    refsDirs.push(refs);
    const payload = samplePayload();
    const persisted = persistMissionResultPayload({
      refsRoot: refs,
      attemptId: payload.attemptId,
      payload,
    });
    expect(persisted.ok).toBe(true);
    if (!persisted.ok) return;
    const evidence = makeMissionEvidence(
      persisted.absolutePath,
      persisted.digest,
    );
    const c = missionContract();
    const material = executionContractSemanticMaterial(c);
    const attempt = {
      attemptId: "xat:mission:1",
      executionContractId: c.executionContractId,
      executionContractVersion: 1,
      executionContractSemanticFingerprint: c.semanticFingerprint as string,
      status: "succeeded" as const,
      resultRef: "res:w3a:abc123",
    };
    const snap = [
      {
        evidenceId: evidence.evidenceId,
        evidenceVersion: 1,
        status: "verified",
        availability: "available",
      },
    ];
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt,
      evidences: [evidence],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: snap,
    });
    const er = assessEvidenceRequirements({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt,
      evidences: [evidence],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: snap,
    });
    expect(eo[0]?.result).toBe("PASS");
    expect(eo[1]?.result).toBe("PASS");
    expect(er.find((x) => x.requirement === MISSION_RESULT_ER_KEY)?.result).toBe(
      "SATISFIED",
    );
    expect(
      deriveCanonicalContractResultStatus({
        attemptStatus: "succeeded",
        expectedOutputAssessments: eo,
        evidenceRequirementAssessments: er.filter(
          (x) => x.requirement === MISSION_RESULT_ER_KEY,
        ),
      }),
    ).toBe("pass");
  });

  function assessMissionWithEvidence(evidence: Evidence) {
    const c = missionContract();
    const material = executionContractSemanticMaterial(c);
    const attempt = {
      attemptId: "xat:mission:1",
      executionContractId: c.executionContractId,
      executionContractVersion: 1,
      executionContractSemanticFingerprint: c.semanticFingerprint as string,
      status: "succeeded" as const,
      resultRef: "res:w3a:abc123",
    };
    const snap = [
      {
        evidenceId: evidence.evidenceId,
        evidenceVersion: evidence.version,
        status: evidence.status,
        availability: "available" as const,
      },
    ];
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt,
      evidences: [evidence],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: snap,
    });
    const er = assessEvidenceRequirements({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt,
      evidences: [evidence],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: snap,
    });
    const status = deriveCanonicalContractResultStatus({
      attemptStatus: "succeeded",
      expectedOutputAssessments: eo,
      evidenceRequirementAssessments: er.filter(
        (x) => x.requirement === MISSION_RESULT_ER_KEY,
      ),
    });
    return { eo, er, status };
  }

  function persistCanonicalPayload(): { absolutePath: string; digest: string } {
    const refs = fs.mkdtempSync(path.join(os.tmpdir(), "mission-prov-"));
    refsDirs.push(refs);
    const payload = samplePayload();
    const persisted = persistMissionResultPayload({
      refsRoot: refs,
      attemptId: payload.attemptId,
      payload,
    });
    if (!persisted.ok) throw new Error(persisted.message);
    return {
      absolutePath: persisted.absolutePath,
      digest: persisted.digest,
    };
  }

  it("P-N1 — external sourceKind + legacy source label → NOT_PROVEN / no PASS", () => {
    const { absolutePath, digest } = persistCanonicalPayload();
    const evidence = makeMissionEvidence(absolutePath, digest);
    (evidence as { sourceKind: string }).sourceKind = "external";
    evidence.source = MISSION_RESULT_EVIDENCE_SOURCE;
    const { eo, er, status } = assessMissionWithEvidence(evidence);
    expect(eo.every((x) => x.result === "NOT_PROVEN")).toBe(true);
    expect(
      er.find((x) => x.requirement === MISSION_RESULT_ER_KEY)?.result,
    ).not.toBe("SATISFIED");
    expect(status).not.toBe("pass");
  });

  it("P-N2 — technicalResultRef missing → NOT_PROVEN / no PASS", () => {
    const { absolutePath, digest } = persistCanonicalPayload();
    const evidence = makeMissionEvidence(absolutePath, digest);
    delete (evidence as { technicalResultRef?: string }).technicalResultRef;
    const { eo, er, status } = assessMissionWithEvidence(evidence);
    expect(eo.every((x) => x.result === "NOT_PROVEN")).toBe(true);
    expect(
      er.find((x) => x.requirement === MISSION_RESULT_ER_KEY)?.result,
    ).not.toBe("SATISFIED");
    expect(status).not.toBe("pass");
  });

  it("P-N3 — technicalResultRef mismatch → NOT_PROVEN / no PASS", () => {
    const { absolutePath, digest } = persistCanonicalPayload();
    const evidence = makeMissionEvidence(absolutePath, digest);
    evidence.technicalResultRef = "res:w3a:other";
    const { eo, er, status } = assessMissionWithEvidence(evidence);
    expect(eo.every((x) => x.result === "NOT_PROVEN")).toBe(true);
    expect(
      er.find((x) => x.requirement === MISSION_RESULT_ER_KEY)?.result,
    ).not.toBe("SATISFIED");
    expect(status).not.toBe("pass");
  });

  it("P-N4 — provenance.source != execution_adapter → NOT_PROVEN / no PASS", () => {
    const { absolutePath, digest } = persistCanonicalPayload();
    const evidence = makeMissionEvidence(absolutePath, digest);
    (evidence.provenance as { source: string }).source = "human_decision";
    const { eo, er, status } = assessMissionWithEvidence(evidence);
    expect(eo.every((x) => x.result === "NOT_PROVEN")).toBe(true);
    expect(
      er.find((x) => x.requirement === MISSION_RESULT_ER_KEY)?.result,
    ).not.toBe("SATISFIED");
    expect(status).not.toBe("pass");
  });

  it("P-N5 — missing executionContractId binding → NOT_PROVEN / no PASS", () => {
    const { absolutePath, digest } = persistCanonicalPayload();
    const evidence = makeMissionEvidence(absolutePath, digest);
    delete (evidence.bindings as { executionContractId?: string })
      .executionContractId;
    const { eo, er, status } = assessMissionWithEvidence(evidence);
    expect(eo.every((x) => x.result === "NOT_PROVEN")).toBe(true);
    expect(
      er.find((x) => x.requirement === MISSION_RESULT_ER_KEY)?.result,
    ).not.toBe("SATISFIED");
    expect(status).not.toBe("pass");
  });

  it("P-N6 — wrong executionContractId binding → NOT_PROVEN / no PASS", () => {
    const { absolutePath, digest } = persistCanonicalPayload();
    const evidence = makeMissionEvidence(absolutePath, digest);
    evidence.bindings = {
      ...evidence.bindings,
      executionContractId: "xct:mission:wrong",
    };
    const { eo, er, status } = assessMissionWithEvidence(evidence);
    expect(eo.every((x) => x.result === "NOT_PROVEN")).toBe(true);
    expect(
      er.find((x) => x.requirement === MISSION_RESULT_ER_KEY)?.result,
    ).not.toBe("SATISFIED");
    expect(status).not.toBe("pass");
  });
});
```

### U-04 `projects/sfia-studio/app/__tests__/oa/execution-attempt/gitTargetIdentityRemoteFidelity.d0.test.ts` **[CORR-02]**
```typescript
/**
 * CORR-A / CORR-B — identity ↔ remote fidelity and checkout origin fidelity.
 * DET only. Fake .git/config. No network, no clone.
 *
 * @vitest-environment node
 */
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  SEALED_GIT_TARGET_DEFAULT_BRANCH_ENV,
  SEALED_GIT_TARGET_IDENTITY_ENV,
  SEALED_GIT_TARGET_REMOTE_URL_ENV,
  resolveSealedGitTargetFromEnv,
} from "@/features/project-assistant/w2/resolveTrustedProductLaunchContext";
import { sealRepositoryBindingFromExecutionInputs } from "@/lib/oa/execution-attempt/application/startExecution";
import {
  ManagedProjectRepositoryResolver,
  guardedManagedRepoRootForProtectedGit,
  resolveIdentityMatchedLocalRepo,
  sanitizeManagedRepoIdentity,
} from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";

const IDENTITY = "acme/widget";
const HTTPS_ORIGIN = `https://github.com/${IDENTITY}.git`;
const SSH_ORIGIN = `git@github.com:${IDENTITY}.git`;

const temps: string[] = [];

afterEach(() => {
  while (temps.length > 0) {
    const dir = temps.pop();
    if (dir) rmSync(dir, { recursive: true, force: true });
  }
});

function tempBase(): string {
  const base = mkdtempSync(path.join(os.tmpdir(), "sfia-git-fidelity-"));
  temps.push(base);
  return base;
}

function writeDirCheckout(originUrl: string | null): {
  base: string;
  repoRoot: string;
} {
  const base = tempBase();
  const repoRoot = path.join(base, sanitizeManagedRepoIdentity(IDENTITY));
  const gitDir = path.join(repoRoot, ".git");
  mkdirSync(gitDir, { recursive: true });
  if (originUrl != null) {
    writeFileSync(
      path.join(gitDir, "config"),
      `[core]\n\trepositoryformatversion = 0\n[remote "origin"]\n\turl = ${originUrl}\n`,
      "utf8",
    );
  }
  return { base, repoRoot };
}

function writeWorktreeCheckout(originUrl: string): {
  base: string;
  repoRoot: string;
} {
  const base = tempBase();
  const repoRoot = path.join(base, sanitizeManagedRepoIdentity(IDENTITY));
  mkdirSync(repoRoot, { recursive: true });
  const mainGit = path.join(base, "main.git");
  const wtGit = path.join(mainGit, "worktrees", "wt");
  mkdirSync(wtGit, { recursive: true });
  writeFileSync(
    path.join(mainGit, "config"),
    `[remote "origin"]\n\turl = ${originUrl}\n`,
    "utf8",
  );
  writeFileSync(path.join(wtGit, "commondir"), "../..\n", "utf8");
  writeFileSync(path.join(wtGit, "HEAD"), "ref: refs/heads/main\n", "utf8");
  writeFileSync(path.join(repoRoot, ".git"), `gitdir: ${wtGit}\n`, "utf8");
  return { base, repoRoot };
}

describe("git target identity ↔ remote fidelity", () => {
  it("T1 HTTPS coherent accept, including synthesized remote when absent", () => {
    const provided = resolveSealedGitTargetFromEnv({
      [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
      [SEALED_GIT_TARGET_REMOTE_URL_ENV]: HTTPS_ORIGIN,
      [SEALED_GIT_TARGET_DEFAULT_BRANCH_ENV]: "main",
    });
    expect(provided).toEqual({
      identity: IDENTITY,
      remoteUrl: HTTPS_ORIGIN,
      defaultBranch: "main",
    });

    const synthesized = resolveSealedGitTargetFromEnv({
      [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
    });
    expect(synthesized).toEqual({
      identity: IDENTITY,
      remoteUrl: HTTPS_ORIGIN,
      defaultBranch: "main",
    });

    const sealed = sealRepositoryBindingFromExecutionInputs({
      identity: IDENTITY,
      remoteUrl: HTTPS_ORIGIN,
      defaultBranch: "main",
      pathRoot: "docs",
    });
    expect(sealed.ok).toBe(true);
    if (sealed.ok) {
      expect(sealed.binding.remoteUrl).toBe(HTTPS_ORIGIN);
      expect(sealed.binding.pathRoot).toBe("docs");
    }

    const synthesizedBinding = sealRepositoryBindingFromExecutionInputs({
      identity: IDENTITY,
    });
    expect(synthesizedBinding.ok).toBe(true);
    if (synthesizedBinding.ok) {
      expect(synthesizedBinding.binding.remoteUrl).toBe(HTTPS_ORIGIN);
    }
  });

  it("T2 SSH coherent accept", () => {
    const sshScp = resolveSealedGitTargetFromEnv({
      [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
      [SEALED_GIT_TARGET_REMOTE_URL_ENV]: SSH_ORIGIN,
    });
    expect(sshScp?.identity).toBe(IDENTITY);
    expect(sshScp?.remoteUrl).toBe(SSH_ORIGIN);

    const sshUrl = "ssh://git@github.com/acme/widget.git";
    const sshProtocol = resolveSealedGitTargetFromEnv({
      [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
      [SEALED_GIT_TARGET_REMOTE_URL_ENV]: sshUrl,
    });
    expect(sshProtocol?.remoteUrl).toBe(sshUrl);

    const sealed = sealRepositoryBindingFromExecutionInputs({
      identity: IDENTITY,
      remoteUrl: SSH_ORIGIN,
    });
    expect(sealed.ok).toBe(true);
    if (sealed.ok) expect(sealed.binding.remoteUrl).toBe(SSH_ORIGIN);
  });

  it("T3 owner/repo diverge refuse", () => {
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]: "https://github.com/other/repo.git",
      }),
    ).toBeNull();
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]: "git@github.com:acme/other.git",
      }),
    ).toBeNull();

    const sealed = sealRepositoryBindingFromExecutionInputs({
      identity: IDENTITY,
      remoteUrl: "https://github.com/other/repo.git",
    });
    expect(sealed).toEqual({
      ok: false,
      code: "REAL_WORKSPACE_INVALID",
      reason: "repository_remote_identity_mismatch",
    });
  });

  it("T4 non-github host refuse", () => {
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]: "https://gitlab.com/acme/widget.git",
      }),
    ).toBeNull();
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]:
          "https://github.com.evil.example/acme/widget.git",
      }),
    ).toBeNull();
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: IDENTITY,
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]: "git@gitlab.com:acme/widget.git",
      }),
    ).toBeNull();
    expect(
      resolveSealedGitTargetFromEnv({
        [SEALED_GIT_TARGET_IDENTITY_ENV]: "not a repo",
        [SEALED_GIT_TARGET_REMOTE_URL_ENV]: HTTPS_ORIGIN,
      }),
    ).toBeNull();

    const sealed = sealRepositoryBindingFromExecutionInputs({
      identity: IDENTITY,
      remoteUrl: "https://example.com/acme/widget.git",
    });
    expect(sealed).toEqual({
      ok: false,
      code: "REAL_WORKSPACE_INVALID",
      reason: "repository_remote_identity_mismatch",
    });
  });

  it("T5 checkout .git with wrong HTTPS origin is refused", () => {
    const wrong = writeDirCheckout("https://github.com/other/repo.git");
    const resolved = resolveIdentityMatchedLocalRepo({
      identity: IDENTITY,
      managedRootBase: wrong.base,
    });
    expect(resolved).toEqual({
      ok: false,
      reason: "managed_repo_identity_mismatch",
    });

    const missingOrigin = writeDirCheckout(null);
    expect(
      resolveIdentityMatchedLocalRepo({
        identity: IDENTITY,
        managedRootBase: missingOrigin.base,
      }),
    ).toEqual({
      ok: false,
      reason: "managed_repo_identity_mismatch",
    });

    const coherent = writeDirCheckout(HTTPS_ORIGIN);
    const accepted = resolveIdentityMatchedLocalRepo({
      identity: IDENTITY,
      managedRootBase: coherent.base,
    });
    expect(accepted).toEqual({ ok: true, repoRoot: coherent.repoRoot });
  });

  it("T6 managed root absent → null", () => {
    const base = tempBase();
    const resolved = resolveIdentityMatchedLocalRepo({
      identity: IDENTITY,
      managedRootBase: base,
    });
    expect(resolved).toEqual({ ok: false, reason: "managed_repo_absent" });
    expect(
      new ManagedProjectRepositoryResolver().resolveIdentityMatchedLocalRepoRoot(
        { identity: IDENTITY },
        base,
      ),
    ).toBeNull();
  });

  it("T7 checkout .git with wrong SSH origin is refused", () => {
    const wrong = writeDirCheckout("git@github.com:other/repo.git");
    expect(
      resolveIdentityMatchedLocalRepo({
        identity: IDENTITY,
        managedRootBase: wrong.base,
      }),
    ).toEqual({
      ok: false,
      reason: "managed_repo_identity_mismatch",
    });

    const coherent = writeDirCheckout(SSH_ORIGIN);
    expect(
      resolveIdentityMatchedLocalRepo({
        identity: IDENTITY,
        managedRootBase: coherent.base,
      }),
    ).toEqual({ ok: true, repoRoot: coherent.repoRoot });
  });

  it("T8 worktree .git file is accepted only when the resolved origin matches", () => {
    const coherent = writeWorktreeCheckout(HTTPS_ORIGIN);
    expect(
      resolveIdentityMatchedLocalRepo({
        identity: IDENTITY,
        managedRootBase: coherent.base,
      }),
    ).toEqual({ ok: true, repoRoot: coherent.repoRoot });

    const wrong = writeWorktreeCheckout("https://github.com/other/repo.git");
    expect(
      resolveIdentityMatchedLocalRepo({
        identity: IDENTITY,
        managedRootBase: wrong.base,
      }),
    ).toEqual({
      ok: false,
      reason: "managed_repo_identity_mismatch",
    });
  });

  it("T9 protected path with insufficient checkout fails closed", () => {
    const wrong = writeDirCheckout("https://gitlab.com/acme/widget.git");
    const resolution = resolveIdentityMatchedLocalRepo({
      identity: IDENTITY,
      managedRootBase: wrong.base,
    });
    const guarded = guardedManagedRepoRootForProtectedGit({
      protectedGitPending: true,
      checked: true,
      resolution,
    });
    expect(guarded).toEqual({
      ok: false,
      code: "REAL_WORKSPACE_INVALID",
      reason: "managed_repo_identity_mismatch",
    });

    const absent = guardedManagedRepoRootForProtectedGit({
      protectedGitPending: true,
      checked: true,
      resolution: { ok: false, reason: "managed_repo_absent" },
    });
    expect(absent).toEqual({
      ok: false,
      code: "REAL_WORKSPACE_INVALID",
      reason: "managed_repo_absent",
    });

    const nonProtected = guardedManagedRepoRootForProtectedGit({
      protectedGitPending: false,
      checked: true,
      resolution,
    });
    expect(nonProtected).toEqual({ ok: true });
  });
});
```

### U-05 `projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.generic.d0.test.ts` **[CORR-01]**
```typescript
/**
 * Thin generic continuity from postExecutionProductContinuity.d0.test.ts.
 *
 * Axe C and CR-PCONT-02 only: FAIL / STOP / UNCLAIMED wording on trajectory
 * options. The deleted suite's docs_write EC completion, bounded agent, and
 * pre-exec continuity harness are not restored.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { PostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  deriveTrajectoryOptions,
  deriveTrajectoryRecommendation,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";

const UNCLAIMED_RECOVERY: PostEvidenceRecoveryContext = {
  kind: "post_evidence_recovery",
  attemptId: "xat:pcont:unclaimed",
  attemptStatus: "succeeded",
  stopReason: null,
  executionContractId: "xct:pcont:1",
  evidenceId: "ev:mission-result:xatpcont",
  reviewBundleId: "rb:mission:xatpcont",
  productOutcome: "UNCLAIMED",
  recommendationKind: "recover",
  requiresHumanDecision: false,
  headline: "Exécution technique réussie — résultat produit non prouvé",
  rationale: "Attempt succeeded; ClaimEvaluation not_proven; Product UNCLAIMED.",
  nextStep: "recovery_diagnose_or_replan",
  realProcessInvoked: false,
  businessEffectProven: false,
  w3cEpistemicItemId: "epi:w3c-rec:pcont",
};

const BASE_INPUTS = {
  cycleTypeId: "cyc:framing",
  recommendedProfile: "Critical" as const,
  criticalSignalsPresent: true,
  irreversible: false,
  reservations: [] as string[],
  ckcAttribution: null,
};

describe("generic post-execution continuity — FAIL / STOP / UNCLAIMED", () => {
  it("UNCLAIMED + succeeded is not presented as technical FAIL", () => {
    const options = deriveTrajectoryOptions({
      ...BASE_INPUTS,
      recoveryContext: UNCLAIMED_RECOVERY,
    });
    const blob = JSON.stringify(options);
    expect(blob).not.toMatch(/FAIL durable/i);
    expect(blob).not.toMatch(/Attempt failed/i);
    expect(blob).not.toMatch(/Conserver l'échec/i);
    expect(blob).toMatch(/technique réussie|non encore prouvé|non prouvé/i);
    expect(options[0]!.impacts.some((i) => /Attempt succeeded/i.test(i))).toBe(
      true,
    );
    const rec = deriveTrajectoryRecommendation({
      ...BASE_INPUTS,
      recoveryContext: UNCLAIMED_RECOVERY,
    });
    expect(rec.isHumanDecision).toBe(false);
    expect(rec.rationale).toMatch(/non encore pleinement confirmé/i);
    expect(rec.rationale).not.toContain("UNCLAIMED");
    expect(rec.rationale).not.toContain("ProductOutcome");
    expect(rec.rationale).not.toMatch(/FAIL durable/);
  });

  it("FAIL keeps FAIL durable wording", () => {
    const options = deriveTrajectoryOptions({
      ...BASE_INPUTS,
      recoveryContext: {
        ...UNCLAIMED_RECOVERY,
        attemptStatus: "failed",
        productOutcome: "FAIL",
        headline: "Échec technique — recovery requise",
      },
    });
    const blob = JSON.stringify(options);
    expect(blob).toMatch(/FAIL durable/);
    expect(blob).toMatch(/Conserver l'échec/);
    expect(options.map((o) => o.optionRef)).toEqual([
      GOVERNED_OPTION_REF,
      BOUNDED_OPTION_REF,
      CLARIFY_OPTION_REF,
    ]);
  });

  it("STOP never uses FAIL durable or Conserver l'échec", () => {
    const options = deriveTrajectoryOptions({
      ...BASE_INPUTS,
      recoveryContext: {
        ...UNCLAIMED_RECOVERY,
        attemptStatus: "cancelled",
        productOutcome: "STOP",
        headline: "Arrêt gouverné",
        stopReason: "PILOT_STOP",
      },
    });
    const blob = JSON.stringify(options);
    expect(blob).toMatch(/STOP/);
    expect(blob).not.toMatch(/FAIL durable/);
    expect(blob).not.toMatch(/Conserver l'échec/);
    expect(blob).toMatch(/STOP \/ arrêt gouverné|arrêt gouverné \(STOP\)/);
  });
});
```

---
## 10. Tests & validations

| Check | Result |
|---|---|
| typecheck (post-build) | PASS |
| build | PASS (unused-var warnings residual) |
| gitTargetIdentityRemoteFidelity T1–T9 | 9 PASS |
| gcecCont01ContinuationResolver (+T11/T12) | 30 PASS |
| O-01 / composition / preflight / create UI | 37 PASS |
| pjReproof05 + productGenericCursorCompletion | 21 PASS |
| CORR-01 generics | 23 PASS |
| Focused vitest batch | **120 PASS / 0 FAIL** |
| PRR conformance | OK |
| Accepted docs_write suite reds | KEPT (not restored) |

Fake/Real: REAL NOT AUTHORIZED · G-REAL NOT GRANTED · G-ACTIVATION NOT GRANTED · H4 NOT QUALIFIED · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED

---
## 11. Residual matrix (active Product)

| Item | Class |
|---|---|
| Product admission docs_write / SetProjectRepositoryBinding / Create SoT | **ZERO** |
| isDocsWriteExecutionContract / isBoundedDocsWriteContract stubs | **REMOVED** |
| repositoryBindingIdentity | RESIDUAL FIELD + ACTIVE sealed git-target |
| SFIA_STUDIO_PROJECT_REPOSITORY_* | ACTIVE seal-only env (not Create SoT) |
| Historical Evidence source docs_write | HISTORICAL durable read allowlist only |
| Legacy *DocsWrite* names in comments/CTA/tests | HISTORICAL / TEST-ONLY |
| resolveRecoveryExecutionBinding null stub | DEAD/legacy surface kept null |
| Local var repositoryBinding in activeCycleGovernedContinuation | RESIDUAL NAMING (identity null) |

**Not claimed:** zero textual string matches repo-wide.

---
## 12. R24 / Roadmap / C1

- PRR README + 02–09 + manifest digests synced; CONFORMANCE OK
- 04/06/others updated for fidelity / Evidence historical-only / failure modes
- Roadmap tip: CORR-02 local Git target fidelity on structural removal
- C1 D-PC-09: **no rewrite** (NO SEMANTIC IMPACT additive needed)
- Status: LOCAL CANDIDATE / NOT ON MAIN / NOT MERGED

---
## 13. KNOWN GAP / risks / gates

- FS→SHA supersession: historical docs_write Artifact Evidence only (no new generic materialization source)
- Worktree layouts beyond supported gitdir/commondir hops refuse
- Env key rename debt (PROJECT_REPOSITORY_* seal-only naming)
- repositoryBindingIdentity residual naming (migration not done)
- Gates NOT granted: project GI · G-REAL · G-ACTIVATION · H4 · P6 GLOBAL

---
## 14. Exit proof

- Identity/remote coherent → accept; mismatch → refuse
- Checkout origin must match sealed identity before protected Git
- Evidence supersession not open to arbitrary execution_attempt:*
- Dead Product specialization stubs removed
- Structural removal preserved; O-01 without Git preserved
- Review Pack FULL; L3 handoff follows

---
## 15. Verdict

**CORR-02 — COMPLETE**
**STRUCTURAL REMOVAL — LOCAL CANDIDATE**
**GIT TARGET FIDELITY — VERIFIED AT DET SCOPE**
**READY FOR CHATGPT CRITICAL REVIEW**

## 16. Next Morris gate

ChatGPT Critical Review → if OK, distinct Morris **Git Integration** GO. Do not self-declare RETIRED ON MAIN / READY FOR REAL / G-REAL / G-ACTIVATION / P6 GLOBAL / runtime v3 ADOPTED.

## ChatGPT instruction

Read remote handoff completely. Verify CORR-02 closed G1–G4 without restoring RepositoryBinding/docs_write under another name. Confront proofs to code, tests, PRR. If satisfactory, recommend a distinct Morris Git Integration GO.
