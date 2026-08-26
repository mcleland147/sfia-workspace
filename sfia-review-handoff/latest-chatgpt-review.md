# SFIA Studio — W4-B Review Pack FULL — Single Authority Path & Business-First Labels

| Field | Value |
| --- | --- |
| **Timestamp** | 2026-08-26 12:11:11 CEST |
| **Cycle** | W4-B — SINGLE AUTHORITY PATH & BUSINESS-FIRST LABELS |
| **Type** | 8 — Delivery / implémentation |
| **Profile** | CRITICAL |
| **Branch** | `delivery/sfia-studio-w4-b-single-authority-path` |
| **HEAD (base)** | `1e17367d01cab95a4853a8857ed39867ea396ed3` |
| **origin/main** | `1e17367d01cab95a4853a8857ed39867ea396ed3` |
| **Product commit** | **NONE** |
| **Verdict** | W4-B DELIVERY PASS — SINGLE AUTHORITY PATH PROVEN — READY FOR CHATGPT REVIEW |

## 1. Timestamp
- `2026-08-26 12:11:11 CEST`

## 2–3. Repo / branch / HEAD / origin/main
- Repo: `mcleland147/sfia-workspace`
- Branch: `delivery/sfia-studio-w4-b-single-authority-path` (local only — **no project push**)
- Initial HEAD = origin/main = `1e17367d01cab95a4853a8857ed39867ea396ed3` (expected `1e17367d…`)
- Git status initial: only `?? .tmp-sfia-review/` before mutations

## 4. Git status initial
Clean of versioned changes; `.tmp-sfia-review/` untracked preserved.

## 5. W4 GO consumed
GO MORRIS — W4 DELIVERY — PRODUCT EXPERIENCE CLOSURE — … FIRST BLOCK W4-A done — W4-B locked by ChatGPT.

## 6. Verdict W4-A consumed
`W4-A BASELINE ACCEPTED AS PARTIAL EVIDENCE — W4-B DELIVERY SLICE SUFFICIENTLY LOCKED.`
Handoff SHA consumed: `669431c5d632d2ae2e190c71f6fe7dd5a97cc7b1`

## 7. Sources read
Process v2.6 templates/routing/OM/rules; Build Doctrine + Roadmap (RO); PC 01/02/03/05/06/11; UX 01–03; framings 30/32–35/37; W4-A handoff; ConversationSurface/TrajectorySurface/useProductConversation/presentationLabels/w2 actions (RO); tests/e2e concerned.

## 8. Convergence pre-check
Capability: Product Experience Closure · Milestone W4 · Slice W4-B · US-P1-10 primary + US-P1-13 partial · UF-03/04/05 presentation · Surfaces S4/S6/S10/S11/S12 · SC-04…08 (+ labels SC-09/10/11) · NOT absorbing W4-C/H-01/S2/legacy routes · C6 CLOSED RO · REAL OUT.

## 9. Precondition F2→W2 (COMPLETE)

# W4-B PRECONDITION PROOF

timestamp: 2026-08-26T10:04:05.680Z
project: W4B-PRE-1787738643300
url: http://127.0.0.1:3020/studio/projects/prj%3A42185172-1764-4c3c-935d-5316811ab964

## QUESTION A
After F2 qualification WITHOUT F2 HumanDecision, can W2 produce options?

RESULT: YES — PASS
w2-options: true
w2-error: (none)
f2-decide-GO was visible (not clicked): true
project-assistant-decision count: 0
cycle instance (from qualification UI): cyc:f2-fd39c494288a9e7a · acknowledged

## QUESTION B
Code: CycleInstance is created in orchestrateAssistantSend (F2 qualify), not in
recordDecision (F2 HumanDecision). resolveW2QualificationInputs only requires
activeCycleInstanceId. F2 decide is the legacy product gate for Proposal GO —
not a W2 domain prerequisite.

F2 HumanDecision object: Proposal gate (GO / reserves / amend / no-go) — process-local
proposal advancement toward F3 prepare.
W2 HumanDecision object: ProjectTrajectory option selection — durable trajectory decide.

They are NOT the same decision object. For PE single authority path, structural
trajectory decision is W2; F2 gate is product-legacy doublon for authority chain.

CONCLUSION: PRECONDITION PASS — presentation-layer convergence authorized


### Conclusion F2 HumanDecision vs W2 HumanDecision
- **F2 HumanDecision**: Proposal gate (GO/reserves/amend/no-go) — advances legacy F3 prepare path; **not** required for `activeCycleInstanceId` / `resolveW2QualificationInputs`.
- **W2 HumanDecision**: ProjectTrajectory option selection — durable structural trajectory decide.
- **Classification**: F2 gate = **legacy product doublon** for authority chain · W2 = **canonical structural HD**.
- **Precondition**: **PASS** — presentation-layer convergence authorized (no domain/C6/persistence change).

## 10. Files modified

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
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
?? .tmp-sfia-review/
?? projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
```

## 11–12. UNIFIED DIFF COMPLETE + change justification

### Diff stat
```
.../runningAttemptRefresh.ui.test.tsx              |  8 ++-
 .../trajectorySurface.ui.test.tsx                  |  2 +-
 .../uatUxSemanticReserves.ui.test.tsx              |  6 ++-
 .../studio-option-a-clean-slate-captures.spec.ts   |  5 ++
 ...-option-a-deterministic-cursor-boundary.spec.ts |  5 ++
 .../e2e/studio-option-a-negative-states.spec.ts    |  5 ++
 .../studio-option-a-new-design-captures.spec.ts    |  5 ++
 .../studio-option-a-uat-semantic-reserves.spec.ts  |  5 ++
 .../sfia-studio/app/e2e/studio-option-a.spec.ts    |  5 ++
 .../e2e/studio-w2-g3-correction-runtime.spec.ts    | 10 ++--
 .../studio-w3a-governed-execute-runtime.spec.ts    |  8 ++-
 .../studio-w3b-terminal-evidence-runtime.spec.ts   |  8 ++-
 ...studio-w3c-post-evidence-replan-runtime.spec.ts |  8 ++-
 .../surfaces/ConversationSurface.tsx               | 54 +++++++++++++++----
 .../surfaces/TrajectorySurface.tsx                 | 61 ++++++++++++++++------
 15 files changed, 155 insertions(+), 40 deletions(-)
```

### Full unified diff (tracked files)
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
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 96c54184..9a3a5e61 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -567,8 +567,8 @@ export function TrajectorySurface({
         <p className={styles.note}>
           Nora instruit des options et recommande. La décision vous appartient :
           une recommandation ne décide jamais et ne rend jamais une trajectoire
-          courante. L&apos;exécution (W3-A) n&apos;est possible qu&apos;après un
-          verdict AUTHORIZED, via une action Exécuter explicite (fixture).
+          courante. L&apos;exécution n&apos;est possible qu&apos;après une
+          autorisation vérifiée, via une action Exécuter explicite et distincte.
         </p>
       </header>

@@ -711,7 +711,7 @@ export function TrajectorySurface({
           >
             <p className={styles.blockNote}>
               Qualifier le travail d&apos;exécution réel (indépendant de
-              l&apos;option de trajectoire W2).
+              l&apos;option de trajectoire déjà décidée).
             </p>
             <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
               Opération d&apos;exécution
@@ -833,13 +833,24 @@ export function TrajectorySurface({
                   : "Aucune"}
               </dd>
             </div>
-            <div>
-              <dt>Empreinte sémantique</dt>
-              <dd className={styles.code}>
-                {contract.semanticFingerprint.slice(0, 12)}…
-              </dd>
-            </div>
           </dl>
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
@@ -961,8 +972,13 @@ export function TrajectorySurface({
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
@@ -988,13 +1004,24 @@ export function TrajectorySurface({
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

### New file: `e2e/studio-w4b-single-authority-path.spec.ts` (untracked until future commit)
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
  "../../../.tmp-sfia-review/runtime-captures/w4-b",
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
      "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W4-B SINGLE AUTHORITY PATH",
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
        "# W4-B runtime captures",
        "",
        "| file | timestamp | viewport | route | SC | state | observation |",
        "| --- | --- | --- | --- | --- | --- | --- |",
        "",
      ].join("\n"),
    );

    await page.setViewportSize({ width: 1440, height: 900 });
    const name = `W4-B SPA ${Date.now()}`;
    await page.goto("/studio/projects/new");
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
      observation: "Nora qualify kept; second authority path absent",
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

### Justification summary
| File | Why |
| --- | --- |
| ConversationSurface.tsx | Hide F2 decide + F3 prepare/confirm+execute on product path; guidance to Trajectory; legacy via `exposeLegacyAuthorityPath` |
| TrajectorySurface.tsx | Business-first labels; fingerprint/receipt → technical details; AUTHORIZED/BLOCKED user wording |
| W2/W3 e2e | Wait qualification+guidance; assert no F2/F3; new outcome strings |
| Option A e2e | `test.skip` — F3 product path RETIRE LATER |
| Unit UI tests | `exposeLegacyAuthorityPath` for F3 harness proofs; blocked label update |
| studio-w4b-*.spec.ts | Single-path + negative blocked + captures |

## 13. Invariants W1/W2/W3 preserved
- No edits to `w2/**`, `f2/**`, `f3/**`, OA, persistence, C6
- W2 propose/decide/EC/confirm/authorize/execute semantics unchanged (UI labels only)
- W3-A/B/C e2e PASS after path adaptation

## 14. Single-path map before/after

| Step | BEFORE (W4-A) | AFTER (W4-B) |
| --- | --- | --- |
| Qualify | ConversationSurface | ConversationSurface KEEP |
| Structural HD | F2 decide **and** W2 decide | **W2 only** (F2 decide hidden) |
| EC | F3 prepare **and** W2 prepare | **W2 only** |
| Confirmation | F3 confirm+execute bundle **and** W2 confirm | **W2 confirm only** |
| Authority | W2 authorize (+ F3 implicit) | **W2 authorize only** |
| Execute | F3 confirm+execute **and** W3 execute | **W3a governed execute only** |

## 15. Business-label map before/after
| Before | After |
| --- | --- |
| exécution (W3-A) … AUTHORIZED … (fixture) | exécution … autorisation vérifiée … Exécuter explicite |
| AUTORISÉ — STOP AVANT EXECUTE (primary) | Autorisation vérifiée — l'exécution peut être lancée |
| BLOQUÉ — ACTION REQUISE (primary) | Exécution bloquée |
| Empreinte sémantique primary | under Détails techniques |
| Trace d'autorité / receipt primary | under Détails techniques |
| option … trajectoire W2 | option … trajectoire déjà décidée |
| Technical verdict strings | kept under details as `w2-authorization-outcome-tech` |

## 16. Confirmation before/after
- Before: F3 `f3-confirm-execute-button` = confirm+execute product path
- After: absent on product path; W2 `w2-confirm-contract` then separate `w3a-governed-execute`
- A11Y-PC-05 W4-B slice: **SATISFIED** on product path

## 17. F3 disposition
**HARVEST / RETIRE LATER** — code + actions remain; product-visible path disabled; unit harness via `exposeLegacyAuthorityPath`; Option A e2e skipped pending harvest exit.
Owner: W4 PE Closure. Exit: after W4-B/C proofs + tests no longer need second user path.

## 18. Tests added/modified
- Added: `e2e/studio-w4b-single-authority-path.spec.ts` (positive + blocked negative + captures)
- Modified: W2/W3 e2e helpers; Option A skip; unit UI legacy prop / labels

## 19. Test results
| Suite | Result |
| --- | --- |
| vitest trajectory + runningAttempt + uatUx | **15/15 PASS** |
| e2e W4-B single path | **2/2 PASS** |
| e2e W3-A | **2/2 PASS** |
| e2e W2-G3 | **1/1 PASS** |
| e2e W3-B | **3/3 PASS** |
| e2e W3-C | **5/5 PASS** |
| Precondition F2→W2 | **PASS** |

## 20–21. Captures + manifest
- Dir: `.tmp-sfia-review/runtime-captures/w4-b/` · count **13**
- Penpot direct: UNAVAILABLE (no pixel claim)

# W4-B runtime captures

| file | timestamp | viewport | route | SC | state | observation |
| --- | --- | --- | --- | --- | --- | --- |
| SC-03-qualified-single-path-1440.png | 2026-08-26T10:10:08.292Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-03 | qualified; guidance to trajectory; no F2/F3 authority | Nora qualify kept; second authority path absent |
| SC-04-options-recommendation-1440.png | 2026-08-26T10:10:08.477Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-04 | options + recommendation | Single W2 options path |
| SC-04-humandecision-1440.png | 2026-08-26T10:10:08.666Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-04 | W2 HumanDecision recorded | Single structural HumanDecision |
| SC-05-ec-summary-1440.png | 2026-08-26T10:10:08.897Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-05 | EC prepared | EC summary on TrajectorySurface only |
| SC-06-ec-inspection-1440.png | 2026-08-26T10:10:09.104Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-06 | EC inspected | Inspection before Confirmation |
| SC-06-confirmation-1440.png | 2026-08-26T10:10:09.320Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-06 | Confirmation separate from Execute | A11Y-PC-05: confirm ≠ execute |
| SC-07-authorized-1440.png | 2026-08-26T10:10:09.540Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-07 | AUTHORIZED business label | Business-first authorization; Execute separate |
| SC-07-authorized-1024.png | 2026-08-26T10:10:09.669Z | 1024×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-07 / H-02 | authorized responsive 1024 | Responsive authority region |
| SC-07-authorized-390.png | 2026-08-26T10:10:09.773Z | 390×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-07 / H-02 | authorized responsive 390 | Responsive authority region |
| SC-08-09-attempt-terminal-1440.png | 2026-08-26T10:10:10.028Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-08/SC-09 | attempt / terminal after governed execute | Single execute path; no F3 confirm+execute |
| SC-04-or-05-responsive-1024.png | 2026-08-26T10:10:10.171Z | 1024×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-04/05 / H-02 | post-execute workspace 1024 | Responsive workspace after single path |
| SC-04-or-05-responsive-390.png | 2026-08-26T10:10:10.294Z | 390×900 | http://127.0.0.1:3020/studio/projects/prj%3A95b675a2-835e-4bec-88fd-eae589706901 | SC-04/05 / H-02 | post-execute workspace 390 | Responsive workspace after single path |
| SC-07-blocked-1440.png | 2026-08-26T10:10:11.499Z | 1440×900 | http://127.0.0.1:3020/studio/projects/prj%3Adcb7a462-0e7f-4e4b-938e-3435ec331f10 | SC-07 | authorization blocked; no attempt | Blocked is textual; Execute absent |


## 22. A11Y smoke
- Confirmation and Execute are separate labeled controls
- Authorized / blocked textual (not color-only)
- Guidance card announces next path
- Claim: A11Y-PC-05 W4-B slice satisfied · **not** WCAG certified

## 23. Fake/Real
DETERMINISTIC PRODUCT-NATIVE W4-B PROOF · REAL OUT · no new fakes

## 24. Réserves
- H-01 CARRY (no structural layout change)
- F3 code still present (RETIRE LATER)
- Option A e2e skipped (debt)
- Evidence/Recovery/Replan PE fidelity deferred to W4-C
- S2 / SC-12–14 / legacy routes out of scope
- Penpot visual fidelity not proven

## 25. Dette + exit
| Debt | Exit |
| --- | --- |
| F3 ConversationSurface affordances behind harness flag | Delete after harvest + test migration |
| Option A e2e skip | Rewrite to W2/W3 or delete when retired |
| presentationLabels residual jargon in other surfaces | W4-C if needed |

## 26–28. Git final
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
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
?? .tmp-sfia-review/
?? projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
```
Diff stat:
```
.../runningAttemptRefresh.ui.test.tsx              |  8 ++-
 .../trajectorySurface.ui.test.tsx                  |  2 +-
 .../uatUxSemanticReserves.ui.test.tsx              |  6 ++-
 .../studio-option-a-clean-slate-captures.spec.ts   |  5 ++
 ...-option-a-deterministic-cursor-boundary.spec.ts |  5 ++
 .../e2e/studio-option-a-negative-states.spec.ts    |  5 ++
 .../studio-option-a-new-design-captures.spec.ts    |  5 ++
 .../studio-option-a-uat-semantic-reserves.spec.ts  |  5 ++
 .../sfia-studio/app/e2e/studio-option-a.spec.ts    |  5 ++
 .../e2e/studio-w2-g3-correction-runtime.spec.ts    | 10 ++--
 .../studio-w3a-governed-execute-runtime.spec.ts    |  8 ++-
 .../studio-w3b-terminal-evidence-runtime.spec.ts   |  8 ++-
 ...studio-w3c-post-evidence-replan-runtime.spec.ts |  8 ++-
 .../surfaces/ConversationSurface.tsx               | 54 +++++++++++++++----
 .../surfaces/TrajectorySurface.tsx                 | 61 ++++++++++++++++------
 15 files changed, 155 insertions(+), 40 deletions(-)
```
Staged:
```
(empty)
```
**No project commit. No project push. No staged files.**

## 29. X-W4B-01→15
| ID | Result |
| --- | --- |
| X-W4B-01 | **PASS** |
| X-W4B-02 | **PASS** |
| X-W4B-03 | **PASS** |
| X-W4B-04 | **PASS** |
| X-W4B-05 | **PASS** |
| X-W4B-06 | **PASS** |
| X-W4B-07 | **PASS** |
| X-W4B-08 | **PASS** |
| X-W4B-09 | **PASS** |
| X-W4B-10 | **PASS** |
| X-W4B-11 | **PASS** |
| X-W4B-12 | **PASS** |
| X-W4B-13 | **PASS** |
| X-W4B-14 | **PASS** |
| X-W4B-15 | **PASS** |

## 30. Claims
### Authorized
- W4-B implementation candidate executed
- Single authority path deterministic proof
- F3 product-visible path disabled
- Business-first primary labels improved
- A11Y-PC-05 W4-B slice satisfied
- deterministic product-native proof

### Forbidden (not claimed)
- W4 CLOSED · PC COMPLETE · US-P1-10/13 globally SATISFIED · WCAG · F3 fully retired · H-01 decided · W4-C authorized · READY FOR REAL · runtime v3 · project integrated/PR/merge

## 31. Verdict
**W4-B DELIVERY PASS — SINGLE AUTHORITY PATH PROVEN — READY FOR CHATGPT REVIEW**

## Instruction ChatGPT
Lire handoff distant `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
Vérifier branche W4-B, base main, diff, precondition, second path removed, Nora qualify kept, W2/W3 kept, Confirmation séparée, labels, tests, X-W4B, captures, A11Y, Fake/Real, dette F3, no C6/domain, no project commit/push, SHA.
Décider: corrections W4-B / closure eligibility / next W4-C qualification.
**Cursor ne démarre aucune suite.**
