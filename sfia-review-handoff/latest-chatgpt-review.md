# SFIA Studio — W4-BR Review Pack FULL — Complete Diff Supplement (Handoff Correction)

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-08-26 13:47:18 CEST |
| **Cycle** | W4-BR — RECONCILED PRESENTATION ADAPTATION (handoff completeness correction) |
| **Type** | 8 — Delivery / implementation |
| **Nature of this publication** | Review Pack / Handoff correction ONLY — **no product file mutation** |
| **Product files modified this pass** | **NONE** |
| **Prior delivery verdict (unchanged)** | W4-BR DELIVERY PASS WITH NON-BLOCKING CARRIES — READY FOR CHATGPT REVIEW / MORRIS GIT INTEGRATION GATE |

---

## 0. Purpose of this handoff correction

Previous W4-BR handoff (`88ef1115`) summarized diffs but did not embed the **complete exploitable tracked diff** nor the **full untracked E2E source**.

This republication adds those artifacts so ChatGPT can perform a real diff review.

**No reset / stash / checkout / product edit** in this pass.

---

## 1. Local Git Truth (re-read, current working tree)

- `pwd`: `/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync`
- toplevel: same
- branch: `delivery/sfia-studio-w4-b-single-authority-path`
- HEAD: `1e17367d01cab95a4853a8857ed39867ea396ed3`
- `origin/main`: `1e17367d01cab95a4853a8857ed39867ea396ed3`
- staged: **empty**

### 1.1 `git status --short`

```
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
 M projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
 M projects/sfia-studio/app/e2e/studio-option-a.spec.ts
 M projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
?? .tmp-sfia-review/
?? projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
```

### 1.2 `git diff --stat`

```
 .../runningAttemptRefresh.ui.test.tsx              |   8 +-
 .../trajectorySurface.ui.test.tsx                  |   2 +-
 .../uatUxSemanticReserves.ui.test.tsx              |   6 +-
 .../studio-option-a-clean-slate-captures.spec.ts   |   5 +
 ...-option-a-deterministic-cursor-boundary.spec.ts |   5 +
 .../e2e/studio-option-a-negative-states.spec.ts    |   5 +
 .../studio-option-a-new-design-captures.spec.ts    |   5 +
 .../studio-option-a-uat-semantic-reserves.spec.ts  |   5 +
 .../sfia-studio/app/e2e/studio-option-a.spec.ts    |   5 +
 .../e2e/studio-w2-g3-correction-runtime.spec.ts    |  10 +-
 .../studio-w3a-governed-execute-runtime.spec.ts    |   8 +-
 .../studio-w3b-terminal-evidence-runtime.spec.ts   |   8 +-
 ...studio-w3c-post-evidence-replan-runtime.spec.ts |   8 +-
 .../pre-m6-product-ui/NewProjectIntentionPage.tsx  |  22 ++-
 .../ProjectWorkspacePage.module.css                |  76 +++++++--
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  51 ++++--
 .../features/pre-m6-product-ui/product-tokens.css  |   4 +-
 .../surfaces/ConversationSurface.tsx               |  54 ++++--
 .../pre-m6-product-ui/surfaces/LpsSurface.tsx      |  11 +-
 .../surfaces/TrajectorySurface.module.css          |  20 +++
 .../surfaces/TrajectorySurface.tsx                 | 182 ++++++++++++++-------
 21 files changed, 378 insertions(+), 122 deletions(-)
```

### 1.3 `git diff --name-status`

```
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
M	projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
M	projects/sfia-studio/app/e2e/studio-option-a.spec.ts
M	projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
M	projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
M	projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
M	projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
```

### 1.4 Hashes

| Item | SHA-256 |
| --- | --- |
| `git diff --binary` (all tracked dirty) | `a8d1408777e53f3619475ad69ca45453d9f8a3526dcd5d6f20f39b827cc66d02` |
| Untracked E2E `studio-w4b-single-authority-path.spec.ts` | `342845bbd43549b1239720f52ed39e3590310999bf5917ecabc1c3928c5875ac` |

Note: `a8d1408777e53f3619475ad69ca45453d9f8a3526dcd5d6f20f39b827cc66d02` differs from pre-W4-BR baseline `c280d9f9…` because W4-BR presentation mutations were applied on top of W4-B. That is expected for the consolidated candidate.

### 1.5 Per-file SHA-256 of tracked modified working-tree files

```
c699c0b68bc30f517d95e231f11e28c26474a74addc49a7f5f0fd5eee8122bf9  projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
d047d45366afd58d7251145e0db4caf0d8929883ce9b74606fbcc40970cad4a6  projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
c7ad038be782fc97704bac09f8084d050133675847bd26dd284ee052a007e3ed  projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
8819f32f6d5f828125b79967e27d75db048a5f93fe295c005d5f25ae1df0c680  projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
1ea713414ab98ea9cba1f2c56927e2313b4332cd1dad054b2c71494a833d1573  projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
62832ae05ce6707fb251909e469b2e32c3132b9fc68430bb5df665237e03233f  projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
5d83fd9895df40fa03657b74fd5cc5e5b638df69a08f2dbd7112d0bae8f41312  projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
08e32535ee9652a73d3edea8ed8a6e64e07471f702c4fc56db48e59e0cfe2b7e  projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
1150c277c489c9bbde1d3e99a8e5780c9d56275df3bc0ce202dac6ac8f7df57d  projects/sfia-studio/app/e2e/studio-option-a.spec.ts
762e5f568c627ce371cf683c0c204cbd3761ece5aa4b0e180b0c4207b0c49142  projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
844c74e566b95d0bbd9b9e44061f2592e1072fe19e4a846bd77c6382fbbaf708  projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
e16ec39b046607f9d80caaaf4b7406792526d5dc2ec203a7cd8800cfda611790  projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
0e56e59c3e5f10c023fd935677cdbe5f6bd26295b11aa5337d10bcaa3c4a0ed4  projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
4b1cbdc29ec61730a9c7a5fae78d2be85c249ea3d6c3585227005e2d856c0785  projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
107958d9ab81263feac47e6e60415f77b91efb636e8a0f6dc34756ab5a411c80  projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
44023ef285796490649015bd66f99ada3036f88fff858d252860cc76627a012e  projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
45926f42d92db838b0b6b967d5e93d6d26c6d304ddd0047488e92545169404b7  projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
9e3b33c679d076f48974b00544255e762065f0c7fb50b1babfa1c0d221fd0e8a  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
bc1f2b96df7bd3e0f43842c1032f7ce9c4aae43aa4d62e12e4f51d807ab03950  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
0559c731c147d4b751b228a95ae4f0508f2965d38d23fba59803da7d50fcf53c  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
3a5e4b49952a7fe1c59a625772c0b3665a814826264414b98f060795a43826e6  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
```

---

## 2. Delivery summary (unchanged — context for diff readers)

- H-01 Option A: Trajectory embedded in LPS piloting region (`project-state-trajectory-region` / `data-composition=lps-embedded`)
- LPS ≠ ProjectTrajectory domain objects (presentation composition only)
- W4-B single authority path preserved (F2/F3 not product-visible)
- S2 labels + Annuler; EC progressive disclosure; business-first authority labels
- H-02/H-03/H-04 remain **CARRY**
- W4-C NOT STARTED; REAL OUT; no project commit/push/PR/merge
- Tests previously reported: unit 15/15; W4-B/BR E2E 2/2; W2/W3 11/11 PASS

---

## 3. File inventory — tracked modified (21)

### W4-B candidate (authority path / harness) — primarily earlier dirty

- `ConversationSurface.tsx`
- unit UI tests (`runningAttemptRefresh`, `trajectorySurface`, `uatUxSemanticReserves`)
- Option A e2e skips (`studio-option-a*.spec.ts`)
- W2/W3 e2e adaptations (`studio-w2-g3`, `studio-w3a`, `studio-w3b`, `studio-w3c`)

### W4-BR presentation delta — added on top

- `ProjectWorkspacePage.tsx` / `.module.css`
- `product-tokens.css`
- `LpsSurface.tsx`
- `TrajectorySurface.tsx` / `.module.css`
- `NewProjectIntentionPage.tsx`

### Untracked (must be reviewed as full source)

- `projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts`

---

## 4. COMPLETE tracked unified diff (`git diff`)

The following is the full `git diff` of all 21 tracked modified files (unified patch). This is the primary ChatGPT review artifact for code.

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
index 9b8af16b..5aa747b0 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx
@@ -327,7 +327,7 @@ const RESOLVED_M3 = {

 function Harness() {
   const controller = useProductConversation({ projectId: PROJECT_ID });
-  return <ConversationSurface controller={controller} />;
+  return <ConversationSurface exposeLegacyAuthorityPath controller={controller} />;
 }

 /** findByTestId is presence-only; GO/confirm stay disabled while startTransition keeps busy. */
@@ -368,6 +368,7 @@ describe("Option A running Attempt refresh UI", () => {
     const onRefresh = vi.fn();
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: runningExecute(),
@@ -399,6 +400,7 @@ describe("Option A running Attempt refresh UI", () => {
   it("keeps the refresh control when continuation stays running", () => {
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: runningExecute({ reusedExistingAttempt: true }),
@@ -414,6 +416,7 @@ describe("Option A running Attempt refresh UI", () => {
   it("shows Evidence/ReviewBundle and hides refresh after a terminal payload", () => {
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: succeededExecute(),
@@ -433,6 +436,7 @@ describe("Option A running Attempt refresh UI", () => {
   it("does not offer refresh on fixture terminal or before Confirmation", () => {
     const { rerender } = render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3Execute: fixtureExecute(),
         })}
@@ -443,6 +447,7 @@ describe("Option A running Attempt refresh UI", () => {

     rerender(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           canConfirmResolvedM3: true,
@@ -457,6 +462,7 @@ describe("Option A running Attempt refresh UI", () => {
     const onRefresh = vi.fn();
     render(
       <ConversationSurface
+        exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED_M3,
           f3Execute: runningExecute(),
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 77fac3c7..a0651205 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -476,7 +476,7 @@ describe("W2 TrajectorySurface", () => {
     fireEvent.click(screen.getByTestId("w2-authorize-contract"));
     expect(await screen.findByTestId("w2-authorization")).toBeVisible();
     expect(screen.getByTestId("w2-authorization-outcome")).toHaveTextContent(
-      "BLOQUÉ — ACTION REQUISE",
+      "Exécution bloquée",
     );
     expect(screen.getByTestId("w2-stop-before-execute")).toHaveTextContent(
       "arrêt avant exécution",
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
index 7856093b..5bb947a6 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
@@ -244,6 +244,7 @@ describe("UAT-UX-03 confirmation surface", () => {
   it("shows authoritative user summary and keeps IDs under technical details", () => {
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({
           f3M3Resolved: RESOLVED,
           canConfirmResolvedM3: true,
@@ -285,6 +286,7 @@ describe("UAT-UX-04/07 REAL result surface", () => {
   it("T3/T10/T11/T12 — REAL success is not fixture and recommendation stays non-authority", () => {
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({ f3Execute: succeededReal() })}
       />,
     );
@@ -312,7 +314,7 @@ describe("UAT-UX-04/07 REAL result surface", () => {
     const failed = succeededReal();
     failed.attempt.status = "failed";
     render(
-      <ConversationSurface controller={baseController({ f3Execute: failed })} />,
+      <ConversationSurface exposeLegacyAuthorityPath controller={baseController({ f3Execute: failed })} />,
     );
     expect(screen.getByTestId("f3-result-user-summary")).toHaveTextContent(/échec/);
     expect(screen.getByTestId("f3-result-user-summary")).not.toHaveTextContent(
@@ -326,6 +328,7 @@ describe("UAT-UX-04/07 REAL result surface", () => {
     running.contract.status = "executing";
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({
           f3Execute: running,
           canRefreshResolvedM3Running: true,
@@ -344,6 +347,7 @@ describe("UAT-UX-08 durable rehydrate", () => {
     const confirm = vi.fn();
     render(
       <ConversationSurface
+      exposeLegacyAuthorityPath
         controller={baseController({
           durableEvidenceOutcome: DURABLE_REAL,
           confirmAndExecuteResolvedM3: confirm,
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
index fa0e23c4..7c2cb33e 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
@@ -94,6 +94,11 @@ async function toContract(page: Page) {
 }

 test.describe("Pre-M6 clean-slate captures", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 360_000 });

   test.beforeEach(async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
index 6ac44381..22f1d132 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
@@ -88,6 +88,11 @@ async function sendGatedStandard(page: Page) {
 }

 test.describe("deterministic Cursor boundary browser tooling", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test("B1–B4 running → pending refresh → terminal → reload", async ({
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
index 7eab4563..333361d8 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
@@ -73,6 +73,11 @@ async function goToResolvedContract(page: Page, suffix: string) {
 }

 test.describe("QA-PRE-M6-TEST-01 negative-state harness", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test.beforeEach(async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
index 8229f574..86fc2fbc 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
@@ -79,6 +79,11 @@ async function toContract(page: Page) {
 }

 test.describe("Pre-M6 new-design captures", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 300_000 });

   test.beforeEach(async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
index b94d4aaa..b379f1a3 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts
@@ -46,6 +46,11 @@ async function capture(page: Page, id: string): Promise<string> {
 }

 test.describe("PRE-M6 UAT semantic reserves — deterministic browser", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test("A–D confirmation → running → succeeded → reload", async ({ page }) => {
diff --git a/projects/sfia-studio/app/e2e/studio-option-a.spec.ts b/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
index ea63a1a2..7cce2e7d 100644
--- a/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-option-a.spec.ts
@@ -104,6 +104,11 @@ async function sendGatedStandard(page: Page) {
 }

 test.describe("Cycle 9 — F1→F11 durable post-GO happy path", () => {
+
+// W4-B: F3 confirm+execute / F2 decide are no longer product-visible on /studio.
+// Historical Option A F3 proofs are RETIRE LATER (harness/unit with exposeLegacyAuthorityPath).
+test.skip(true, "W4-B product path: F2/F3 authority affordances removed — RETIRE LATER");
+
   test.describe.configure({ timeout: 240_000 });

   test("F1→F11 happy path + History/Recovery + responsive captures", async ({
diff --git a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
index 378de28d..4b4a524b 100644
--- a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
@@ -94,12 +94,14 @@ test.describe("W2 final-closure /studio product correction proof", () => {
     await expect(input).toBeEnabled({ timeout: 15_000 });
     await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
     await page.getByTestId("project-assistant-send").click();
-    await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
       timeout: 60_000,
     });
+    await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+    await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
     await capture(page, "02b-qualified-gate", {
       screen: "ConversationSurface",
-      state: "f2_gate_qualified",
+      state: "qualified_no_f2_decision_gate",
     });

     const trajectory = page.getByTestId("w2-trajectory-panel");
@@ -232,7 +234,7 @@ test.describe("W2 final-closure /studio product correction proof", () => {
       timeout: 30_000,
     });
     await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-      "BLOQUÉ",
+      "Exécution bloquée",
     );
     const blockedReason =
       (await page.getByTestId("w2-authorization-reason").textContent()) ?? "";
@@ -272,7 +274,7 @@ test.describe("W2 final-closure /studio product correction proof", () => {
     const outcome = page.getByTestId("w2-authorization-outcome");
     await expect(outcome).toBeVisible();
     const outcomeText = (await outcome.textContent()) ?? "";
-    expect(outcomeText.includes("AUTORISÉ")).toBe(true);
+    expect(outcomeText.includes("Autorisation vérifiée")).toBe(true);
     await expect(page.getByTestId("w2-authorization-reason")).not.toBeEmpty();
     await expect(page.getByTestId("w2-authorization-next")).not.toBeEmpty();

diff --git a/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
index 679c6b8e..fa5db061 100644
--- a/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
@@ -168,9 +168,13 @@ async function openQualifiedStudioProject(page: Page, name: string) {
   await expect(input).toBeEnabled({ timeout: 15_000 });
   await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
   await page.getByTestId("project-assistant-send").click();
-  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
     timeout: 60_000,
   });
+  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
+  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(0);

   const trajectory = page.getByTestId("w2-trajectory-panel");
   await expect(trajectory).toBeVisible({ timeout: 15_000 });
@@ -272,7 +276,7 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {
       timeout: 30_000,
     });
     await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-      "AUTORISÉ",
+      "Autorisation vérifiée",
     );
     await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
     await capture(page, "06-authorized", {
diff --git a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
index 16adf051..2dcf7e29 100644
--- a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
@@ -125,9 +125,13 @@ async function openThroughAuthorized(page: Page, name: string) {
   await expect(input).toBeEnabled({ timeout: 15_000 });
   await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
   await page.getByTestId("project-assistant-send").click();
-  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
     timeout: 60_000,
   });
+  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
+  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(0);

   const trajectory = page.getByTestId("w2-trajectory-panel");
   await expect(trajectory).toBeVisible({ timeout: 15_000 });
@@ -158,7 +162,7 @@ async function openThroughAuthorized(page: Page, name: string) {
   });
   await page.getByTestId("w2-authorize-contract").click();
   await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-    "AUTORISÉ",
+    "Autorisation vérifiée",
     { timeout: 30_000 },
   );

diff --git a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
index b4b8bc47..f36d4d7f 100644
--- a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
@@ -72,9 +72,13 @@ async function openThroughAuthorized(page: Page, name: string) {
   await expect(input).toBeEnabled({ timeout: 15_000 });
   await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
   await page.getByTestId("project-assistant-send").click();
-  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
+  await expect(page.getByTestId("project-assistant-qualification")).toBeVisible({
     timeout: 60_000,
   });
+  await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
+  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
+  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
+  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(0);

   const trajectory = page.getByTestId("w2-trajectory-panel");
   await expect(trajectory).toBeVisible({ timeout: 15_000 });
@@ -105,7 +109,7 @@ async function openThroughAuthorized(page: Page, name: string) {
   });
   await page.getByTestId("w2-authorize-contract").click();
   await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
-    "AUTORISÉ",
+    "Autorisation vérifiée",
     { timeout: 30_000 },
   );
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
index 1a065d28..9f14c585 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx
@@ -19,9 +19,8 @@ function createIdempotencyKey(): string {
 }

 /**
- * PROVISIONAL intention sheet — no dedicated Figma frame exists for creation.
- * See README.md in this folder. Two product fields drive the runtime input:
- * intention becomes the objective, precisions the bounded context.
+ * PROVISIONAL intention sheet — W4-BR aligns labels to UXR-01 (Nom / Intention /
+ * contexte optionnel / Créer + Annuler). Behavior Create/Resume unchanged.
  */
 export function NewProjectIntentionPage() {
   const [name, setName] = useState("");
@@ -231,7 +230,7 @@ export function NewProjectIntentionPage() {

         <div className={styles.field}>
           <label className={styles.label} htmlFor="project-objective">
-            Votre intention
+            Intention du projet
           </label>
           <textarea
             ref={intentionRef}
@@ -265,7 +264,7 @@ export function NewProjectIntentionPage() {

         <div className={styles.field}>
           <label className={styles.label} htmlFor="project-context">
-            Précisions utiles <span className={styles.optional}>(optionnel)</span>
+            Contexte optionnel
           </label>
           <textarea
             id="project-context"
@@ -273,12 +272,14 @@ export function NewProjectIntentionPage() {
             className={styles.textarea}
             rows={3}
             value={precisions}
-            placeholder="Contexte, contraintes connues, ce qu'il faut éviter…"
+            placeholder="Notes libres utiles au pilotage — pas un questionnaire méthode."
             aria-describedby="project-context-help"
             onChange={(event) => setPrecisions(event.target.value)}
           />
           <p className={styles.help} id="project-context-help">
-            Sans précision, votre intention sert aussi de contexte.
+            Sans contexte, votre intention sert aussi de contexte. Créer ouvre le
+            projet : cela ne qualifie pas automatiquement le cycle et ne crée
+            pas de décision humaine.
           </p>
         </div>

@@ -299,6 +300,13 @@ export function NewProjectIntentionPage() {
           >
             {pending ? "Création…" : "Créer le projet"}
           </button>
+          <Link
+            href="/studio"
+            className={styles.quietButton}
+            data-testid="create-project-cancel"
+          >
+            Annuler
+          </Link>
           <span className={styles.status} role="status" aria-live="polite">
             {pending ? "Création en cours…" : ""}
           </span>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index 1f184474..0b74af4b 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -109,6 +109,51 @@
   overflow-y: auto;
 }

+/* H-01 Option A — unified piloting region (LPS + Trajectory presentation) */
+.stateTrajectoryRegion {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-4);
+  min-width: 0;
+}
+
+.stateTrajectoryHead {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-1);
+  padding: 0 var(--pm6-space-1);
+}
+
+.stateTrajectoryEyebrow {
+  margin: 0;
+  font-size: 0.7rem;
+  font-weight: 700;
+  letter-spacing: 0.1em;
+  text-transform: uppercase;
+  color: var(--pm6-forest);
+}
+
+.stateTrajectoryTitle {
+  margin: 0;
+  font-size: 1.05rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
+}
+
+.stateTrajectoryNote {
+  margin: 0;
+  font-size: 0.8rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.stateTrajectoryStack {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-4);
+  min-width: 0;
+}
+
 .lpsClose {
   display: none;
   align-self: flex-end;
@@ -128,7 +173,7 @@
   }
 }

-/* ---------- <=1024: project state becomes a drawer ---------- */
+/* ---------- <=1024: stack conversation then État/Trajectoire (H-01) ---------- */

 @media (max-width: 1024px) {
   .layout {
@@ -136,29 +181,28 @@
   }

   .lpsToggle {
-    display: inline-flex;
+    display: none;
   }

   .lpsClose {
-    display: inline-flex;
+    display: none;
   }

   .lpsColumn {
-    position: fixed;
-    top: 0;
-    right: 0;
-    bottom: 0;
-    width: min(420px, 92vw);
-    z-index: 60;
-    background: var(--pm6-canvas-raised);
-    border-left: 1px solid var(--pm6-border);
-    box-shadow: var(--pm6-shadow-raised);
-    padding: var(--pm6-space-4);
-    overflow-y: auto;
+    position: static;
+    top: auto;
+    width: auto;
+    z-index: auto;
+    background: transparent;
+    border-left: none;
+    box-shadow: none;
+    padding: 0;
+    overflow: visible;
   }

-  .lpsClosed {
-    display: none;
+  .lpsClosed,
+  .lpsOpen {
+    display: block;
   }

   .lpsSheet {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 86565b47..4c4f8267 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -14,7 +14,11 @@ import { TrajectorySurface } from "./surfaces/TrajectorySurface";
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

-/** F2/F3 product workspace: conversation dominant, project state alongside. */
+/**
+ * Product workspace: conversation-first, not conversation-only.
+ * H-01 Option A — LPS + ProjectTrajectory share one visual piloting region
+ * (presentation composition only; domain objects remain distinct).
+ */
 export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   const [result, setResult] = useState<GetProjectResult | null>(null);
   const [durableOutcome, setDurableOutcome] =
@@ -122,7 +126,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           aria-expanded={lpsOpen}
           onClick={() => setLpsOpen((open) => !open)}
         >
-          {lpsOpen ? "Masquer l'état du projet" : "État du projet"}
+          {lpsOpen
+            ? "Masquer l'état et la trajectoire"
+            : "État du projet / Trajectoire"}
         </button>
       </header>

@@ -147,13 +153,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
           <div className={styles.conversation} data-testid="project-conversation-main">
             <ConversationSurface controller={controller} />
           </div>
-          <TrajectorySurface
-            projectId={projectId}
-            recoveryProposeSignal={recoveryProposeSignal}
-            onDurableFactsChanged={() => {
-              void loadProject();
-            }}
-          />
           <HistorySurface result={success} durableOutcome={durableOutcome} />
         </div>

@@ -172,7 +171,39 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
             >
               Fermer
             </button>
-            <LpsSurface result={success} />
+            <section
+              className={styles.stateTrajectoryRegion}
+              data-testid="project-state-trajectory-region"
+              aria-label="État du projet et trajectoire"
+            >
+              <header className={styles.stateTrajectoryHead}>
+                <p className={styles.stateTrajectoryEyebrow}>
+                  Pilotage du projet
+                </p>
+                <h2 className={styles.stateTrajectoryTitle}>
+                  État actuel et trajectoire
+                </h2>
+                <p className={styles.stateTrajectoryNote}>
+                  L&apos;état enregistré et la trajectoire restent distincts :
+                  une même région de lecture pour décider, sans second chemin
+                  d&apos;autorité.
+                </p>
+              </header>
+              <div
+                className={styles.stateTrajectoryStack}
+                data-testid="h01-lps-trajectory-composition"
+              >
+                <LpsSurface result={success} />
+                <TrajectorySurface
+                  projectId={projectId}
+                  composition="lps-embedded"
+                  recoveryProposeSignal={recoveryProposeSignal}
+                  onDurableFactsChanged={() => {
+                    void loadProject();
+                  }}
+                />
+              </div>
+            </section>
           </div>
         </div>
       </div>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
index 0242e1c0..c7983040 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
@@ -56,7 +56,7 @@
   --pm6-space-6: 32px;
   --pm6-space-7: 48px;

-  --pm6-lps-width: 320px;
-  --pm6-lps-width-wide: 380px;
+  --pm6-lps-width: 420px;
+  --pm6-lps-width-wide: 480px;
   --pm6-content-max: 1180px;
 }
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 2907fbf2..b382c576 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -48,14 +48,24 @@ function sourceStatusLabel(status: AssistantToolEventDto["status"]): string {

 export type ConversationSurfaceProps = {
   controller: ProductConversationController;
+  /**
+   * TEST / HARVEST harness only. When true, restores historical F2 gate + F3
+   * prepare/confirm-execute affordances. Product `/studio` path must leave this
+   * unset/false so TrajectorySurface remains the sole authority/execute chain.
+   */
+  exposeLegacyAuthorityPath?: boolean;
 };

 /**
- * F2–F8 product conversation surface.
- * Recommendation, HumanDecision and Confirmation stay visually distinct;
- * nothing here grants execution authority or claims durability.
+ * Nora conversation + qualification surface.
+ * Product authority path (HumanDecision / EC / Confirmation / Execute) lives on
+ * TrajectorySurface (W2/W3). Legacy F2/F3 affordances stay behind
+ * `exposeLegacyAuthorityPath` for harvest / RETIRE LATER proofs only.
  */
-export function ConversationSurface({ controller }: ConversationSurfaceProps) {
+export function ConversationSurface({
+  controller,
+  exposeLegacyAuthorityPath = false,
+}: ConversationSurfaceProps) {
   const fieldId = useId();
   const liveRegionId = useId();
   const {
@@ -426,7 +436,30 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {gateOpen ? (
+      {gateOpen && !exposeLegacyAuthorityPath ? (
+        <section
+          className={styles.card}
+          data-testid="product-authority-path-guidance"
+          aria-labelledby={`${fieldId}-authority-guidance`}
+        >
+          <header className={styles.cardHead}>
+            <p className={styles.cardEyebrow}>Suite du parcours</p>
+            <h3
+              id={`${fieldId}-authority-guidance`}
+              className={styles.cardTitle}
+            >
+              Décidez la trajectoire ci-dessous
+            </h3>
+            <p className={styles.cardNote}>
+              La qualification est enregistrée. La décision de trajectoire, le
+              contrat, la confirmation et l&apos;exécution se font dans la
+              section « Trajectoire et décision » — un seul chemin d&apos;autorité.
+            </p>
+          </header>
+        </section>
+      ) : null}
+
+      {gateOpen && exposeLegacyAuthorityPath ? (
         <section
           className={styles.decisionCard}
           data-testid="project-assistant-gate"
@@ -475,7 +508,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f2?.decision ? (
+      {exposeLegacyAuthorityPath && f2?.decision ? (
         <section
           className={styles.cardOk}
           data-testid="project-assistant-decision"
@@ -525,7 +558,8 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {canPrepareResolvedM3 || canPrepareLegacyFixture ? (
+      {exposeLegacyAuthorityPath &&
+      (canPrepareResolvedM3 || canPrepareLegacyFixture) ? (
         <section className={styles.card} data-testid="project-assistant-f3-prepare">
           <header className={styles.cardHead}>
             <p className={styles.cardEyebrow}>Étape suivante</p>
@@ -569,7 +603,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f3M3Resolved && !f3Execute ? (
+      {exposeLegacyAuthorityPath && f3M3Resolved && !f3Execute ? (
         <section
           className={styles.contractCard}
           data-testid="project-assistant-f3-contract"
@@ -726,7 +760,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f3Prepare && !f3Execute ? (
+      {exposeLegacyAuthorityPath && f3Prepare && !f3Execute ? (
         <section
           className={styles.card}
           data-testid="project-assistant-f3-legacy-contract"
@@ -784,7 +818,7 @@ export function ConversationSurface({ controller }: ConversationSurfaceProps) {
         </section>
       ) : null}

-      {f3Execute && attemptLabel ? (
+      {exposeLegacyAuthorityPath && f3Execute && attemptLabel ? (
         <section
           className={styles.card}
           data-testid="project-assistant-f3-execute"
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
index 0e12f557..a931ef3c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx
@@ -20,7 +20,7 @@ export function LpsSurface({ result }: { result: GetProjectSuccess }) {
   const nextAction =
     readiness.status === "NOT_READY"
       ? "Poursuivre la qualification avec Nora, puis décider."
-      : `Préparation ${readiness.status} — poursuivre avec Nora.`;
+      : "Poursuivre avec Nora — la préparation enregistrée reste à décider.";

   return (
     <aside
@@ -62,7 +62,6 @@ export function LpsSurface({ result }: { result: GetProjectSuccess }) {
         <section className={styles.block}>
           <h3 className={styles.blockTitle}>Cycle</h3>
           <p className={styles.blockBody}>Cycle rattaché au projet</p>
-          <p className={styles.blockCode}>{livingState.activeCycleInstanceId}</p>
         </section>
       ) : null}

@@ -80,6 +79,14 @@ export function LpsSurface({ result }: { result: GetProjectSuccess }) {
       <details className={styles.diagnostics} data-testid="lps-diagnostics">
         <summary>Détails techniques</summary>
         <dl className={styles.facts}>
+          {livingState.activeCycleInstanceId ? (
+            <div>
+              <dt>Identifiant de cycle</dt>
+              <dd className={styles.blockCode}>
+                {livingState.activeCycleInstanceId}
+              </dd>
+            </div>
+          ) : null}
           <div>
             <dt>Criticité perçue</dt>
             <dd>{project.criticality}</dd>
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
index 99fbcb4c..cf8a4615 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
@@ -9,6 +9,11 @@
   padding: var(--pm6-space-5);
 }

+.embedded {
+  box-shadow: none;
+  border-color: var(--pm6-border);
+}
+
 .head {
   display: flex;
   flex-direction: column;
@@ -326,6 +331,21 @@
   font-weight: 600;
 }

+.contractLevel2 {
+  margin: 0;
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid var(--pm6-border-soft);
+  background: var(--pm6-canvas-raised);
+  padding: var(--pm6-space-3);
+  font-size: 0.82rem;
+  color: var(--pm6-muted-strong);
+}
+
+.contractLevel2 summary {
+  cursor: pointer;
+  font-weight: 600;
+}
+
 @media (max-width: 767px) {
   .root {
     padding: var(--pm6-space-4);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 96c54184..95d966d7 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -98,11 +98,17 @@ export function TrajectorySurface({
   projectId,
   onDurableFactsChanged,
   recoveryProposeSignal = 0,
+  composition = "standalone",
 }: {
   projectId: string;
   onDurableFactsChanged?: () => void;
   /** B1 — increment from RecoverySurface requalify to reuse proposeOptions(). */
   recoveryProposeSignal?: number;
+  /**
+   * H-01 Option A: embed visually in the LPS piloting region.
+   * Presentation-only — does not change ProjectTrajectory domain identity.
+   */
+  composition?: "standalone" | "lps-embedded";
 }) {
   const [busy, setBusy] = useState<Busy>(null);
   const [error, setError] = useState<string | null>(null);
@@ -555,20 +561,26 @@ export function TrajectorySurface({

   return (
     <section
-      className={styles.root}
+      className={[
+        styles.root,
+        composition === "lps-embedded" ? styles.embedded : "",
+      ]
+        .filter(Boolean)
+        .join(" ")}
       data-testid="w2-trajectory-panel"
+      data-composition={composition}
       aria-labelledby="w2-trajectory-title"
     >
       <header className={styles.head}>
-        <p className={styles.eyebrow}>Trajectoire et décision</p>
+        <p className={styles.eyebrow}>Trajectoire du projet</p>
         <h2 id="w2-trajectory-title" className={styles.title}>
           Options, recommandation, puis votre décision
         </h2>
         <p className={styles.note}>
           Nora instruit des options et recommande. La décision vous appartient :
           une recommandation ne décide jamais et ne rend jamais une trajectoire
-          courante. L&apos;exécution (W3-A) n&apos;est possible qu&apos;après un
-          verdict AUTHORIZED, via une action Exécuter explicite (fixture).
+          courante. L&apos;exécution n&apos;est possible qu&apos;après une
+          autorisation vérifiée, via une action Exécuter explicite et distincte.
         </p>
       </header>

@@ -711,7 +723,7 @@ export function TrajectorySurface({
           >
             <p className={styles.blockNote}>
               Qualifier le travail d&apos;exécution réel (indépendant de
-              l&apos;option de trajectoire W2).
+              l&apos;option de trajectoire déjà décidée).
             </p>
             <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
               Opération d&apos;exécution
@@ -774,23 +786,19 @@ export function TrajectorySurface({
           data-testid="w2-contract"
         >
           <h3 id="w2-contract-title" className={styles.blockTitle}>
-            Contrat d&apos;exécution préparé
+            Contrat d&apos;exécution — résumé
           </h3>
+          <p className={styles.blockNote}>
+            Relisez d&apos;abord ce qui sera tenté. Inspectez le détail avant
+            toute confirmation. Confirmer n&apos;exécute pas.
+          </p>
           <dl className={styles.facts} data-testid="w2-contract-facts">
             <div>
-              <dt>Version</dt>
-              <dd data-testid="w2-contract-version">v{contract.version}</dd>
-            </div>
-            <div>
-              <dt>Statut</dt>
-              <dd data-testid="w2-contract-status">{contract.status}</dd>
-            </div>
-            <div>
-              <dt>Action</dt>
+              <dt>Ce qui sera fait</dt>
               <dd data-testid="w2-contract-action">{contract.action}</dd>
             </div>
             <div>
-              <dt>Cible</dt>
+              <dt>Résultat / cible</dt>
               <dd data-testid="w2-contract-target">{contract.target}</dd>
             </div>
             <div>
@@ -798,48 +806,82 @@ export function TrajectorySurface({
               <dd data-testid="w2-contract-scope">{contract.scope}</dd>
             </div>
             <div>
-              <dt>Autorité requise</dt>
-              <dd data-testid="w2-contract-authority">
-                {contract.requiredAuthority}
-              </dd>
-            </div>
-            <div>
-              <dt>Capacités</dt>
-              <dd data-testid="w2-contract-capabilities">
-                {contract.requiredCapabilities.length
-                  ? contract.requiredCapabilities.join(", ")
-                  : "Aucune"}
-              </dd>
-            </div>
-            <div>
-              <dt>Réversibilité</dt>
-              <dd data-testid="w2-contract-reversibility">
-                {contract.reversibility}
-              </dd>
-            </div>
-            <div>
-              <dt>Contraintes</dt>
-              <dd data-testid="w2-contract-constraints">
-                {contract.constraints.length
-                  ? contract.constraints.join(" · ")
-                  : "Aucune"}
-              </dd>
-            </div>
-            <div>
-              <dt>Conditions d&apos;arrêt</dt>
-              <dd data-testid="w2-contract-stops">
-                {contract.stopConditions.length
-                  ? contract.stopConditions.join(" · ")
-                  : "Aucune"}
-              </dd>
+              <dt>État du contrat</dt>
+              <dd data-testid="w2-contract-status">{contract.status}</dd>
             </div>
             <div>
-              <dt>Empreinte sémantique</dt>
-              <dd className={styles.code}>
-                {contract.semanticFingerprint.slice(0, 12)}…
+              <dt>Prochaine action utile</dt>
+              <dd>
+                {inspection?.inspectionSufficient
+                  ? contract.status === "confirmation_required"
+                    ? "Confirmer si requis, puis statuer sur l'autorisation"
+                    : "Statuer sur l'autorisation"
+                  : "Inspecter le détail du contrat"}
               </dd>
             </div>
           </dl>
+          <details className={styles.contractLevel2}>
+            <summary>Détails métier du contrat</summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Version</dt>
+                <dd data-testid="w2-contract-version">v{contract.version}</dd>
+              </div>
+              <div>
+                <dt>Autorité requise</dt>
+                <dd data-testid="w2-contract-authority">
+                  {contract.requiredAuthority}
+                </dd>
+              </div>
+              <div>
+                <dt>Capacités</dt>
+                <dd data-testid="w2-contract-capabilities">
+                  {contract.requiredCapabilities.length
+                    ? contract.requiredCapabilities.join(", ")
+                    : "Aucune"}
+                </dd>
+              </div>
+              <div>
+                <dt>Réversibilité</dt>
+                <dd data-testid="w2-contract-reversibility">
+                  {contract.reversibility}
+                </dd>
+              </div>
+              <div>
+                <dt>Contraintes</dt>
+                <dd data-testid="w2-contract-constraints">
+                  {contract.constraints.length
+                    ? contract.constraints.join(" · ")
+                    : "Aucune"}
+                </dd>
+              </div>
+              <div>
+                <dt>Conditions d&apos;arrêt</dt>
+                <dd data-testid="w2-contract-stops">
+                  {contract.stopConditions.length
+                    ? contract.stopConditions.join(" · ")
+                    : "Aucune"}
+                </dd>
+              </div>
+            </dl>
+          </details>
+          <details className={styles.technicalDetails}>
+            <summary>Détails techniques du contrat</summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Empreinte sémantique</dt>
+                <dd className={styles.code} data-testid="w2-contract-fingerprint">
+                  {contract.semanticFingerprint.slice(0, 12)}…
+                </dd>
+              </div>
+              <div>
+                <dt>Identifiant contrat</dt>
+                <dd className={styles.code} data-testid="w2-contract-id-tech">
+                  {contract.executionContractId}
+                </dd>
+              </div>
+            </dl>
+          </details>

           {amendmentNotice ? (
             <div
@@ -919,7 +961,7 @@ export function TrajectorySurface({
                     : undefined
                 }
               >
-                Confirmer (effets / autorité)
+                Confirmer mon consentement
               </button>
             ) : null}
             <button
@@ -961,8 +1003,13 @@ export function TrajectorySurface({
           role="status"
         >
           <h3 id="w2-authorization-title" className={styles.blockTitle}>
-            <span data-testid="w2-authorization-outcome">
-              {authorization.outcomeLabel}
+            <span
+              data-testid="w2-authorization-outcome"
+              data-outcome={authorization.outcome}
+            >
+              {authorization.outcome === "AUTHORIZED"
+                ? "Autorisation vérifiée — l'exécution peut être lancée"
+                : "Exécution bloquée"}
             </span>
           </h3>
           <p className={styles.blockBody} data-testid="w2-authorization-reason">
@@ -988,13 +1035,24 @@ export function TrajectorySurface({
               <dt>Inspection</dt>
               <dd>{authorization.inspection.statusLabel}</dd>
             </div>
-            <div>
-              <dt>Trace d&apos;autorité</dt>
-              <dd className={styles.code}>
-                {authorization.authorityReceiptRef}
-              </dd>
-            </div>
           </dl>
+          <details className={styles.technicalDetails}>
+            <summary>Détails techniques d&apos;autorité</summary>
+            <dl className={styles.facts}>
+              <div>
+                <dt>Verdict technique</dt>
+                <dd data-testid="w2-authorization-outcome-tech">
+                  {authorization.outcomeLabel}
+                </dd>
+              </div>
+              <div>
+                <dt>Trace d&apos;autorité</dt>
+                <dd className={styles.code} data-testid="w2-authority-receipt">
+                  {authorization.authorityReceiptRef}
+                </dd>
+              </div>
+            </dl>
+          </details>
           {authorization.outcome === "AUTHORIZED" && !attempt ? (
             <>
               <p
```

---

## 5. COMPLETE untracked E2E source

Path: `projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts`
SHA-256: `342845bbd43549b1239720f52ed39e3590310999bf5917ecabc1c3928c5875ac`

```typescript
/**
 * W4-B — Single authority path on canonical `/studio`.
 * Proves F2/F3 authority/execute affordances are not product-visible;
 * W2/W3 remains the sole decision → EC → confirm → authorize → execute chain.
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w4-br",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.md");
const MANIFEST_JSONL = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: {
    sc: string;
    state: string;
    viewport: { width: number; height: number };
    observation: string;
  },
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  const timestamp = new Date().toISOString();
  const row = {
    id,
    file: path.basename(file),
    timestamp,
    sha256,
    route: page.url(),
    ...meta,
    provenance:
      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-B + W4-BR RECONCILED PRESENTATION",
  };
  fs.appendFileSync(MANIFEST_JSONL, `${JSON.stringify(row)}\n`);
  fs.appendFileSync(
    MANIFEST,
    `| ${row.file} | ${timestamp} | ${meta.viewport.width}×${meta.viewport.height} | ${page.url()} | ${meta.sc} | ${meta.state} | ${meta.observation} |\n`,
  );
}

async function assertNoSecondAuthorityPath(page: Page) {
  await expect(page.getByTestId("f2-decide-GO")).toHaveCount(0);
  await expect(page.getByTestId("f2-decide-NO_GO")).toHaveCount(0);
  await expect(page.getByTestId("f3-prepare-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
  await expect(page.getByTestId("f3-legacy-confirm-execute-button")).toHaveCount(
    0,
  );
  await expect(page.getByTestId("f3-legacy-fixture-prepare-button")).toHaveCount(
    0,
  );
  await expect(page.getByTestId("project-assistant-gate")).toHaveCount(0);
}

test.describe("W4-B single authority path /studio", () => {
  test.describe.configure({ timeout: 360_000 });

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      (
        window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean }
      ).__SFIA_E2E_QA_CONTROL__ = true;
    });
  });

  test("qualify → single W2 HD → EC → confirm → authorize → execute; no F3 path", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST_JSONL, "");
    fs.writeFileSync(
      MANIFEST,
      [
        "# W4-BR runtime captures (extended W4-B single authority + H-01 composition)",
        "",
        "| file | timestamp | viewport | route | SC | state | observation |",
        "| --- | --- | --- | --- | --- | --- | --- |",
        "",
      ].join("\n"),
    );

    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-B SPA ${Date.now()}`;
    await page.goto("/studio/projects/new");
    await expect(page.getByTestId("create-project-form")).toBeVisible();
    await expect(page.getByLabel("Intention du projet")).toBeVisible();
    await expect(page.getByLabel("Contexte optionnel")).toBeVisible();
    await expect(page.getByTestId("create-project-cancel")).toBeVisible();
    await page.locator("#project-name").fill(name);
    await page
      .locator("#project-objective")
      .fill("W4-B single authority path deterministic");
    await page.locator("#project-context").fill("REAL=0");
    await page.getByTestId("create-project-submit").click();
    await expect(page.getByTestId("open-project-workspace")).toBeVisible({
      timeout: 30_000,
    });
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("project-state-trajectory-region")).toBeVisible();
    await expect(page.getByTestId("h01-lps-trajectory-composition")).toBeVisible();
    await expect(page.getByTestId("living-project-state-panel")).toBeVisible();
    await expect(page.getByTestId("w2-trajectory-panel")).toHaveAttribute(
      "data-composition",
      "lps-embedded",
    );
    await expect(
      page.getByTestId("project-lps-column").getByTestId("w2-trajectory-panel"),
    ).toBeVisible();

    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("product-authority-path-guidance")).toBeVisible();
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-03-qualified-single-path-1440", {
      sc: "SC-03",
      state: "qualified; guidance to trajectory; no F2/F3 authority",
      viewport: { width: 1440, height: 900 },
      observation: "Nora qualify kept; H-01 LPS+Trajectory region; second authority path absent",
    });

    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
    await expect(page.getByTestId("w2-recommendation")).toBeVisible();
    await capture(page, "SC-04-options-recommendation-1440", {
      sc: "SC-04",
      state: "options + recommendation",
      viewport: { width: 1440, height: 900 },
      observation: "Single W2 options path",
    });

    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
    // Only one structural decide family: w2-decide-*, no f2-decide-*
    await expect(page.locator("[data-testid^='f2-decide-']")).toHaveCount(0);
    await capture(page, "SC-04-humandecision-1440", {
      sc: "SC-04",
      state: "W2 HumanDecision recorded",
      viewport: { width: 1440, height: 900 },
      observation: "Single structural HumanDecision",
    });

    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
    await capture(page, "SC-05-ec-summary-1440", {
      sc: "SC-05",
      state: "EC prepared",
      viewport: { width: 1440, height: 900 },
      observation: "EC summary on TrajectorySurface only",
    });

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toBeVisible({
      timeout: 30_000,
    });
    await capture(page, "SC-06-ec-inspection-1440", {
      sc: "SC-06",
      state: "EC inspected",
      viewport: { width: 1440, height: 900 },
      observation: "Inspection before Confirmation",
    });

    const confirm = page.getByTestId("w2-confirm-contract");
    if (await confirm.isVisible()) {
      await expect(confirm).toBeEnabled();
      await confirm.click();
      await expect(page.getByTestId("w2-contract-status")).toHaveText(
        /confirmed/i,
        { timeout: 30_000 },
      );
      await capture(page, "SC-06-confirmation-1440", {
        sc: "SC-06",
        state: "Confirmation separate from Execute",
        viewport: { width: 1440, height: 900 },
        observation: "A11Y-PC-05: confirm ≠ execute",
      });
    }

    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Autorisation vérifiée",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
    await expect(page.getByTestId("w3a-governed-execute")).toHaveText("Exécuter");
    await expect(page.getByTestId("f3-confirm-execute-button")).toHaveCount(0);
    await capture(page, "SC-07-authorized-1440", {
      sc: "SC-07",
      state: "AUTHORIZED business label",
      viewport: { width: 1440, height: 900 },
      observation: "Business-first authorization; Execute separate",
    });

    for (const w of [1024, 390] as const) {
      await page.setViewportSize({ width: w, height: 900 });
      await capture(page, `SC-07-authorized-${w}`, {
        sc: "SC-07 / H-02",
        state: `authorized responsive ${w}`,
        viewport: { width: w, height: 900 },
        observation: "Responsive authority region",
      });
    }

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3a-attempt")).toBeVisible({ timeout: 90_000 });
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-08-09-attempt-terminal-1440", {
      sc: "SC-08/SC-09",
      state: "attempt / terminal after governed execute",
      viewport: { width: 1440, height: 900 },
      observation: "Single execute path; no F3 confirm+execute",
    });

    await page.setViewportSize({ width: 1024, height: 900 });
    await capture(page, "SC-04-or-05-responsive-1024", {
      sc: "SC-04/05 / H-02",
      state: "post-execute workspace 1024",
      viewport: { width: 1024, height: 900 },
      observation: "Responsive workspace after single path",
    });
    await page.setViewportSize({ width: 390, height: 900 });
    await capture(page, "SC-04-or-05-responsive-390", {
      sc: "SC-04/05 / H-02",
      state: "post-execute workspace 390",
      viewport: { width: 390, height: 900 },
      observation: "Responsive workspace after single path",
    });
  });

  test("negative: blocked authorization shows business label and no Attempt", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-B BLOCK ${Date.now()}`;
    await page.goto("/studio/projects/new");
    await page.locator("#project-name").fill(name);
    await page.locator("#project-objective").fill("W4-B blocked auth path");
    await page.locator("#project-context").fill("REAL=0");
    await page.getByTestId("create-project-submit").click();
    await page.getByTestId("open-project-workspace").click();
    await expect(page.getByTestId("project-principal")).toBeVisible({
      timeout: 30_000,
    });
    const input = page.getByTestId("project-assistant-input");
    await expect(input).toBeEnabled({ timeout: 15_000 });
    await input.fill("Préparer une livraison gated __F2_GATED_STANDARD__");
    await page.getByTestId("project-assistant-send").click();
    await expect(page.getByTestId("project-assistant-qualification")).toBeVisible(
      { timeout: 60_000 },
    );
    await page.getByTestId("w2-propose-options").click();
    await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
    await page.locator("[data-testid^='w2-decide-']").first().click();
    await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
    // Authorize WITHOUT inspect → blocked
    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "Exécution bloquée",
      { timeout: 60_000 },
    );
    await expect(page.getByTestId("w3a-governed-execute")).toHaveCount(0);
    await expect(page.getByTestId("w3a-attempt")).toHaveCount(0);
    await assertNoSecondAuthorityPath(page);
    await capture(page, "SC-07-blocked-1440", {
      sc: "SC-07",
      state: "authorization blocked; no attempt",
      viewport: { width: 1440, height: 900 },
      observation: "Blocked is textual; Execute absent",
    });
  });
});
```

---

## 6. Artifact index (local, non-versioned)

| Artifact | Path |
| --- | --- |
| Full tracked patch | `.tmp-sfia-review/w4-br-handoff-complete/diff-tracked-full.patch` |
| Binary diff + SHA | `.tmp-sfia-review/w4-br-handoff-complete/diff-binary.bin` / `.sha256` |
| E2E copy | `.tmp-sfia-review/w4-br-handoff-complete/studio-w4b-single-authority-path.spec.ts` |
| This Review Pack | `.tmp-sfia-review/chatgpt-review.md` |

---

## 7. Claims / anti-claims for this correction pass

### Claims
- Review Pack now contains complete exploitable tracked diff + full untracked E2E
- Product working tree not mutated by this handoff-correction pass
- Handoff republication only on `sfia/review-handoff`

### Anti-claims
- Does not re-prove tests
- Does not close W4-BR by Morris
- Does not authorize project commit/push/PR/merge
- Does not start W4-C / REAL / runtime v3

## 8. Verdict (delivery status unchanged)

**W4-BR DELIVERY PASS WITH NON-BLOCKING CARRIES — CORE RECONCILIATION PROVEN — H-02/H-03/H-04 REMAIN CARRY — READY FOR CHATGPT REVIEW / MORRIS GIT INTEGRATION GATE**

Plus: **HANDOFF DIFF COMPLETENESS CORRECTED — READY FOR REAL DIFF REVIEW**
