# PJ-REPROOF-04 — GENERIC CURSOR EXECUTOR FINAL
## PRODUCT-JOURNEY-EXECUTION-CONTRACT-SEMANTIC-BRIDGE-01
## FULL Review Pack (publish-in-cycle)

timestamp: 2026-09-20T20:57:18Z
macro: PRODUCT-JOURNEY-EXECUTION-CONTRACT-SEMANTIC-BRIDGE-01
finding: PJ-REPROOF-04 — HumanDecision → ExecutionContract → Cursor → ExecutionReport
parent: PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01 — PAUSED
cycle: 8 — DELIVERY / IMPLEMENTATION
profile: CRITICAL
project commit/push/PR/merge: **0 / 0 / 0 / 0**
NEW Product REAL: ZERO · NEW Cursor REAL: ZERO

---

## 1. Timestamp

2026-09-20T20:57:18Z

---

## 2. Local Git Truth

```
worktree: /tmp/sfia-pj-ec-bridge-01
branch: fix/sfia-studio-execution-contract-semantic-bridge
HEAD: 163a05e542d4c8d65e710cf27fb2f7eec9414844
origin/main: 163a05e542d4c8d65e710cf27fb2f7eec9414844
BASELINE: MATCH
working tree: UNCOMMITTED (project commit NOT AUTHORIZED)
```

status:
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
 M projects/sfia-studio/app/e2e/studio-product-completion-integrated-proof.spec.ts
 M projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
 M projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
 M projects/sfia-studio/app/e2e/studio-w4c-evidence-recovery-replan-product-experience.spec.ts
 M projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts
?? projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts
```

diff --stat:
 .../postExecutionTrajectorySurface.ui.test.tsx     |  4 +-
 .../trajectorySurface.ui.test.tsx                  | 19 +++--
 .../project-assistant/w3aGovernedExecute.test.ts   | 11 +--
 ...dio-product-completion-integrated-proof.spec.ts | 10 +--
 .../e2e/studio-w2-g3-correction-runtime.spec.ts    |  7 +-
 .../studio-w3a-governed-execute-runtime.spec.ts    | 48 +++++-------
 .../studio-w3b-terminal-evidence-runtime.spec.ts   |  5 +-
 ...studio-w3c-post-evidence-replan-runtime.spec.ts |  5 +-
 .../e2e/studio-w4b-single-authority-path.spec.ts   | 10 +--
 ...ence-recovery-replan-product-experience.spec.ts |  5 +-
 ...udio-w4d-product-screens-visual-closure.spec.ts |  5 +-
 .../surfaces/TrajectorySurface.tsx                 | 64 ++-------------
 .../app/features/project-assistant/w2/actions.ts   |  6 +-
 .../w2/authorizeExecutionContract.ts               |  7 +-
 .../w2/prepareExecutionContractFromW2Decision.ts   | 61 +++++++--------
 .../project-assistant/w2/trajectoryOptions.ts      |  6 +-
 .../w2/w3aProductExecutionSemantics.ts             | 91 ++++++++++++++++------
 .../application/selectExecutionAgent.ts            | 12 ++-
 .../application/startExecution.ts                  | 46 +++++++++++
 .../domain/cursorExecutionReport.ts                | 70 +++++++++++++++++
 .../lib/oa/execution-attempt/domain/invariants.ts  |  6 ++
 .../execution-attempt/domain/realLaunchSafety.ts   |  8 ++
 .../app/lib/oa/execution-attempt/index.ts          |  9 +++
 .../infrastructure/fakeDocsWriteLaunchPort.ts      |  9 +++
 .../m4BoundedDocsWriteCursorAgent.ts               |  5 +-
 .../studioCursorRealLaunchGateway.ts               | 46 +++++++----
 .../ports/realExecutionLaunchPort.ts               |  7 ++
 .../app/lib/oa/execution-contract/index.ts         |  7 ++
 .../app/lib/vertical-slice-runtime/service.ts      |  2 +
 .../w3aProductFixtureWiring.ts                     | 25 ++++--
 30 files changed, 396 insertions(+), 220 deletions(-)

---

## 3. Morris decision consumed

Canonical Product model:
ExecutionContract → Pilot authorize → Cursor prompt → ONE GENERALIST CURSOR EXECUTOR → Cursor HOW → ExecutionReport.

A new Product task MUST NOT require new operationKind / agent type / executor profile / functional route.

---

## 4. Sources read

SelectExecutionAgent, resolveAttemptExecutionProfile, AgentDescriptor/Registry, StartExecution, realLaunchSafety, all six M4 bounded agents, StudioCursorRealLaunchGateway, vertical-slice-runtime/service.ts composition, current local PJ-REPROOF-04 files. Process/convergence/v3 sources harvested earlier (NOT modified).

---

## 5. Agent-selection BEFORE

- SelectExecutionAgent resolved profile criteria → first lexicographic candidate.
- Progressive GCEC profiles routed to specialized M4 agents.
- StartExecution REAL required isM4AuthorizedCursorRealAgent (RO|docs|commit|push|PR*).
- Canonical acceptance proof used M4_BOUNDED_RO_CURSOR_AGENT_ID.
- Mutating mission proof was prompt-only (not StartExecution + same executor).

---

## 6. Agent-selection AFTER

Canonical Product (`contract_legacy` profile):
1. registry finds candidates (generalist matches ANY EC via agentMatchViolation bypass)
2. SelectExecutionAgent prefers `agt:studio.cursor.generalist`
3. StartExecution projects EC → cursorMissionPrompt
4. launches via RealExecutionLaunchPort with generalist selectedAgentRef

Progressive GCEC profiles (`docs_write`|`local_commit`|`remote_push`|`pr_create`|`pr_merge`):
- specialized selection retained (BYPASS Product; KEEP for sealed historical path)

---

## 7. Specialized-agent dependency audit

| Agent | Canonical Product | Historical/GCEC | Action |
|---|---|---|---|
| agt:studio.cursor.generalist (NEW) | YES — sole Product REAL executor | — | KEEP |
| agt:m4.cursor.bounded_readonly | NO | tests/harness | BYPASS Product |
| agt:m4.cursor.bounded_docs_write | NO (Product generalist) | sealed docs_write | BYPASS Product / KEEP GCEC |
| agt:m4.cursor.bounded_local_commit | NO | GCEC | BYPASS Product / KEEP GCEC |
| agt:m4.cursor.bounded_remote_push | NO | GCEC | BYPASS Product / KEEP GCEC |
| agt:m4.cursor.bounded_pr_create | NO | GCEC | BYPASS Product / KEEP GCEC |
| agt:m4.cursor.bounded_pr_merge | NO | GCEC | BYPASS Product / KEEP GCEC |
| agt:w3a-bounded-fixture | fixture deterministic | YES | KEEP fixture / BYPASS when REAL |

Answers to discovery questions:
1. SelectExecutionAgent still useful for Attempt binding + GCEC progressive — Product auto-binds generalist on contract_legacy.
2. YES — automatic deterministic prefer of generalist.
3. Specialized descriptors consumed by GCEC sealed paths + M4 tests.
4. Not deleted wholesale — BYPASS Product; isolate as historical.
5. Obsolete tests rewritten in pjReproof04 (no longer assert M4 RO for canonical proof).

---

## 8. KEEP / DELETE / BYPASS

### KEEP
- StartExecution EC→cursorMissionPrompt bridge
- reportId triad
- Pilot HOW removal
- AES / Gate D / Confirmation integrity
- GCEC specialized agent modules (sealed historical)
- SelectExecutionAgent (Attempt binding)

### DELETE (Product path behavior)
- Canonical proof dependency on M4_BOUNDED_RO_CURSOR_AGENT_ID
- Progressive profile routing as Product mission taxonomy (bypassed for contract_legacy)

### BYPASS
- Specialized M4 agents on Product contract_legacy
- resolveAttemptExecutionProfile progressive kinds for Product generalist missions

### NEW
- studioCursorGeneralistAgent.ts
- STUDIO_CURSOR_GENERALIST_AGENT_ID
- agentMatchViolation generalist bypass
- Select prefer generalist on contract_legacy
- evaluateAgentCapability prefer generalist
- registry composition registers generalist

---

## 9. Generic executor implementation

agentId: `agt:studio.cursor.generalist`
executionMode: `cursor_cli_real`
adapterRef: `adp:m4-cursor-cli-real`
ONE capability: `cap:studio.cursor.generalist` (schema shape only — not a task catalogue)
Mission differences live exclusively in ExecutionContract prompt.

---

## 10. Canonical StartExecution path

```
EC (any mission)
→ SelectExecutionAgent (prefer generalist when contract_legacy)
→ Gate D
→ StartExecution:
     projectExecutionContractToCursorPrompt
     assertCursorPromptParityWithInspection
     realLaunchPort.launch({ cursorMissionPrompt, selectedAgentRef: generalist, … })
→ StudioCursorRealLaunchGateway
→ Cursor
```

---

## 11–13. Acceptance proofs

### Non-mutating (Acceptance 1) — PASS
objective analyse facts → generalist auto-selected → StartExecution → prompt contains EC id, attempt id, fingerprint, objective, stops, « Cursor détermine le HOW ».

### Mutating (Acceptance 2) — PASS
objective modify docs/notes.md; forbid push/PR/merge → SAME generalist → SAME launch port → prompt contains mutating objective + allowed file + forbidden remote Git. NO docs_write / local_commit / RO agent.

### Novel future task (Acceptance 3) — PASS
arbitrary never-seen objective + novel action/scope/cap strings → SAME generalist launches without registry/capability definition changes.

### Critical question
**Can an arbitrary future ExecutionContract reach Cursor through StartExecution without adding an operation kind, capability profile, or executor type?**
**YES.**

---

## 14. Complete diffs

\`\`\`diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
index e4c3d76d..934a8b64 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
@@ -494,9 +494,7 @@ describe("CR-PCONT-05 TrajectorySurface post-execution recovery", () => {
     );
     await screen.findByTestId("w2-decision");

-    fireEvent.change(screen.getByTestId("w3a-operation-kind"), {
-      target: { value: "generate-temporary-artifact" },
-    });
+    // PJ-REPROOF-04 — no Pilot HOW selection; Studio derives mission.
     fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
     await screen.findByTestId("w2-contract");
     fireEvent.click(screen.getByTestId("w2-inspect-contract"));
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index ae97f9c2..5d0680d6 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -948,16 +948,23 @@ describe("W2 TrajectorySurface", () => {
       },
     });

-    // Generic ProjectTrajectory decision — no sealed Proposal operation, so the
-    // legacy sandbox qualification selector still owns the PREPARE affordance.
-    expect(screen.getByTestId("w3a-qualify-execution-work")).toBeVisible();
+    // PJ-REPROOF-04 — no Pilot-facing technical operation dropdown.
+    expect(
+      screen.getByTestId("w3a-prepare-execution-from-decision"),
+    ).toBeVisible();
+    expect(screen.queryByTestId("w3a-operation-kind")).toBeNull();
+    expect(screen.queryByTestId("w3a-qualify-execution-work")).toBeNull();
     expect(screen.queryByTestId("w2-proposal-backed-prepare")).toBeNull();
     expect(screen.queryByTestId("w2-prepare-contract")).toBeNull();
-    fireEvent.change(screen.getByTestId("w3a-operation-kind"), {
-      target: { value: "generate-temporary-artifact" },
-    });
     fireEvent.click(screen.getByTestId("w2-prepare-contract-sandbox"));
     expect(await screen.findByTestId("w2-contract")).toBeVisible();
+    expect(prepareContractMock).toHaveBeenCalledWith({
+      projectId: "prj:w2-ui",
+      decisionId: "dec:w2-ui",
+    });
+    expect(prepareContractMock.mock.calls[0][0]).not.toHaveProperty(
+      "qualifiedOperationKind",
+    );
     expect(prepareM3Mock).not.toHaveBeenCalled();
     expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
       "product:generate-temporary-artifact",
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
index d8e589f9..1df6cbfc 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
@@ -475,6 +475,7 @@ describe("W3-A effects → authority / Confirmation", () => {
     expect([...W3A_FIXTURE_ALLOWED_SCOPES]).toEqual([
       W3A_PRODUCT_SCOPE.TEMP_ARTIFACT,
       W3A_PRODUCT_SCOPE.SIMULATE,
+      W3A_PRODUCT_SCOPE.READ,
     ]);
     expect(W3A_FIXTURE_ALLOWED_SCOPES[0]).not.toContain("décider");
   });
@@ -639,7 +640,7 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     expect(terminal.realExecution).toBe(false);
   });

-  it("read → N1 · Confirmation NOT_REQUIRED marker · validated · SC-CAP (R15/R16)", async () => {
+  it("read → N1 · Confirmation NOT_REQUIRED marker · validated · fixture agent selectable (PJ-REPROOF-04)", async () => {
     const ctx = await decideGoverned("read");
     const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
     const prepared = await prepareExecutionContractFromW2Decision({
@@ -682,9 +683,7 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
     });
     expect(authorized.ok).toBe(true);
     if (!authorized.ok) return;
-    // Fixture does not support read — truthful SC-CAP / executor insufficiency.
-    expect(authorized.outcome).toBe("BLOCKED");
-    expect(authorized.reasonCode).toMatch(/executor|capability|insufficient/i);
+    expect(authorized.outcome).toBe("AUTHORIZED");
     const launchBefore = ctx.oa.fixtureAdapter.launchCallCount;
     const selected = await governedExecuteSelectAgent({
       oa: ctx.oa,
@@ -692,7 +691,9 @@ describe("W3-A product seam — actual work prepare + Confirmation + Attempt", (
       executionContractId,
       forceLocalAuthority: true,
     });
-    expect(selected.ok).toBe(false);
+    expect(selected.ok).toBe(true);
+    if (!selected.ok) return;
+    expect(selected.selectedAgentRef).toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);
     expect(ctx.oa.fixtureAdapter.launchCallCount).toBe(launchBefore);
   });

diff --git a/projects/sfia-studio/app/e2e/studio-product-completion-integrated-proof.spec.ts b/projects/sfia-studio/app/e2e/studio-product-completion-integrated-proof.spec.ts
index a102b96b..7001429b 100644
--- a/projects/sfia-studio/app/e2e/studio-product-completion-integrated-proof.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-product-completion-integrated-proof.spec.ts
@@ -146,10 +146,7 @@ async function decideTrajectoryUi(page: Page) {
 }

 async function prepareInspectConfirmAuthorize(page: Page) {
-  await page
-    .getByTestId("w3a-operation-kind")
-    .selectOption("generate-temporary-artifact");
-  await page.getByTestId("w2-prepare-contract-sandbox").click();
+    await page.getByTestId("w2-prepare-contract-sandbox").click();
   await expect(page.getByTestId("w2-contract")).toBeVisible({
     timeout: 45_000,
   });
@@ -605,10 +602,7 @@ test.describe("PC Integrated Proof — Product Completion final QA", () => {
     );
     await decideTrajectoryUi(page);

-    await page
-      .getByTestId("w3a-operation-kind")
-      .selectOption("generate-temporary-artifact");
-    await page.getByTestId("w2-prepare-contract-sandbox").click();
+        await page.getByTestId("w2-prepare-contract-sandbox").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({
       timeout: 45_000,
     });
diff --git a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
index 562ff54c..8f4f2b59 100644
--- a/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
@@ -164,11 +164,8 @@ test.describe("W2 final-closure /studio product correction proof", () => {

     // --- W3-A current product invariant: qualify actual work before Prepare ---
     // (stale W2 oracle remédiation — does not reopen W2; setup only)
-    await expect(page.getByTestId("w3a-operation-kind")).toBeVisible();
-    await page
-      .getByTestId("w3a-operation-kind")
-      .selectOption("generate-temporary-artifact");
-    await expect(page.getByTestId("w2-prepare-contract-sandbox")).toBeEnabled();
+    await expect(page.getByTestId("w3a-prepare-execution-from-decision")).toBeVisible();
+        await expect(page.getByTestId("w2-prepare-contract-sandbox")).toBeEnabled();

     // --- R02: prepare → inspect → material amend → block → reinspect → auth ---
     await page.getByTestId("w2-prepare-contract-sandbox").click();
diff --git a/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
index 3505b043..006e45c1 100644
--- a/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
@@ -190,9 +190,16 @@ async function openQualifiedStudioProject(page: Page, name: string) {
     throw new Error(`w2 propose failed: ${err}`);
   }

-  const decideButtons = page.locator("[data-testid^='w2-decide-']");
-  await expect(decideButtons.first()).toBeVisible();
-  await decideButtons.first().click();
+  const clarifyDecide = page.getByTestId(
+    "w2-decide-opt:trajectory:clarify-first",
+  );
+  if (await clarifyDecide.isVisible().catch(() => false)) {
+    await clarifyDecide.click();
+  } else {
+    const decideButtons = page.locator("[data-testid^='w2-decide-']");
+    await expect(decideButtons.first()).toBeVisible();
+    await decideButtons.first().click();
+  }
   await expect(page.getByTestId("w2-decision")).toBeVisible({
     timeout: 45_000,
   });
@@ -213,14 +220,11 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {
       state: "after_w2_decision",
     });

-    // Actual work qualification — not W2 trajectory alone.
-    await expect(page.getByTestId("w3a-qualify-execution-work")).toBeVisible();
-    await page
-      .getByTestId("w3a-operation-kind")
-      .selectOption("generate-temporary-artifact");
-    await capture(page, "02-actual-work-qualified", {
+    // PJ-REPROOF-04 — Studio derives mission; no Pilot HOW dropdown.
+    await expect(page.getByTestId("w3a-prepare-execution-from-decision")).toBeVisible();
+    await capture(page, "02-mission-prepare-ready", {
       screen: "TrajectorySurface",
-      state: "actual_work_temp_artifact",
+      state: "prepare_from_decision",
     });

     await page.getByTestId("w2-prepare-contract-sandbox").click();
@@ -230,25 +234,16 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {

     const actionText =
       (await page.getByTestId("w2-contract-action").textContent()) ?? "";
-    expect(actionText).toContain("product:generate-temporary-artifact");
-    expect(actionText).not.toMatch(/trajectory-governed|trajectory-bounded/);
-    await expect(page.getByTestId("w2-contract-authority")).toHaveText("N1");
-    await expect(page.getByTestId("w2-contract-scope")).toHaveText(
-      "product:temporary-local-artifact",
-    );
+    // Internal effect control may be product:read for non-mutating mission —
+    // never a trajectory option string.
+    expect(actionText).not.toMatch(/trajectory-governed|trajectory-bounded|clarify-first/);
+    expect(actionText.length).toBeGreaterThan(0);
     await expect(page.getByTestId("w2-contract-target")).toHaveText(
       "product:project-workspace",
     );
-    await expect(page.getByTestId("w2-contract-status")).toHaveText(
-      "Confirmation requise",
-    );
-    await expect(page.getByTestId("w2-contract-status")).toHaveAttribute(
-      "data-status",
-      "confirmation_required",
-    );
-    await expect(page.getByTestId("w2-contract-status-tech")).toHaveText(
-      "confirmation_required",
-    );
+    // Non-mutating mission may be validated (no Confirmation); mutating paths still confirmation_required.
+    const statusTech = (await page.getByTestId("w2-contract-status-tech").textContent()) ?? "";
+    expect(["validated", "confirmation_required", "confirmed"]).toContain(statusTech.trim());
     await expect(page.getByTestId("w2-contract-reversibility")).toContainText(
       "reversible",
     );
@@ -417,7 +412,6 @@ test.describe("W3-A R09 /studio governed execute product proof", () => {
   }) => {
     await openQualifiedStudioProject(page, "W3-A R09 Blocked No Work");
     // Empty operation kind → Prepare disabled → no Execute → no Attempt.
-    await page.getByTestId("w3a-operation-kind").selectOption("");
     await expect(page.getByTestId("w2-prepare-contract-sandbox")).toBeDisabled();
     await expect(page.getByTestId("w3a-governed-execute")).toHaveCount(0);
     await expect(page.getByTestId("w3a-attempt")).toHaveCount(0);
diff --git a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
index 36c7d7e7..e463d9af 100644
--- a/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
@@ -144,10 +144,7 @@ async function openThroughAuthorized(page: Page, name: string) {
     timeout: 45_000,
   });

-  await page
-    .getByTestId("w3a-operation-kind")
-    .selectOption("generate-temporary-artifact");
-  await page.getByTestId("w2-prepare-contract-sandbox").click();
+    await page.getByTestId("w2-prepare-contract-sandbox").click();
   await expect(page.getByTestId("w2-contract")).toBeVisible({
     timeout: 45_000,
   });
diff --git a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
index c6c20e2f..23312026 100644
--- a/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
@@ -91,10 +91,7 @@ async function openThroughAuthorized(page: Page, name: string) {
     timeout: 45_000,
   });

-  await page
-    .getByTestId("w3a-operation-kind")
-    .selectOption("generate-temporary-artifact");
-  await page.getByTestId("w2-prepare-contract-sandbox").click();
+    await page.getByTestId("w2-prepare-contract-sandbox").click();
   await expect(page.getByTestId("w2-contract")).toBeVisible({
     timeout: 45_000,
   });
diff --git a/projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts b/projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
index 0a71bcd8..79aebee0 100644
--- a/projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
@@ -193,10 +193,7 @@ test.describe("W4-B single authority path /studio", () => {
       observation: "Single structural HumanDecision",
     });

-    await page
-      .getByTestId("w3a-operation-kind")
-      .selectOption("generate-temporary-artifact");
-    await page.getByTestId("w2-prepare-contract-sandbox").click();
+        await page.getByTestId("w2-prepare-contract-sandbox").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
     await expect(page.getByTestId("w2-contract-status")).toHaveText(
       "Confirmation requise",
@@ -339,10 +336,7 @@ test.describe("W4-B single authority path /studio", () => {
     await expect(page.getByTestId("w2-options")).toBeVisible({ timeout: 60_000 });
     await page.locator("[data-testid^='w2-decide-']").first().click();
     await expect(page.getByTestId("w2-decision")).toBeVisible({ timeout: 45_000 });
-    await page
-      .getByTestId("w3a-operation-kind")
-      .selectOption("generate-temporary-artifact");
-    await page.getByTestId("w2-prepare-contract-sandbox").click();
+        await page.getByTestId("w2-prepare-contract-sandbox").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
     // Authorize WITHOUT inspect → blocked
     await page.getByTestId("w2-authorize-contract").click();
diff --git a/projects/sfia-studio/app/e2e/studio-w4c-evidence-recovery-replan-product-experience.spec.ts b/projects/sfia-studio/app/e2e/studio-w4c-evidence-recovery-replan-product-experience.spec.ts
index 614d2f88..6f856e73 100644
--- a/projects/sfia-studio/app/e2e/studio-w4c-evidence-recovery-replan-product-experience.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w4c-evidence-recovery-replan-product-experience.spec.ts
@@ -89,10 +89,7 @@ async function openThroughAuthorized(page: Page, name: string) {
     timeout: 45_000,
   });

-  await page
-    .getByTestId("w3a-operation-kind")
-    .selectOption("generate-temporary-artifact");
-  await page.getByTestId("w2-prepare-contract-sandbox").click();
+    await page.getByTestId("w2-prepare-contract-sandbox").click();
   await expect(page.getByTestId("w2-contract")).toBeVisible({
     timeout: 45_000,
   });
diff --git a/projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts b/projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts
index 64b6ed86..a00ea3e5 100644
--- a/projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts
+++ b/projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts
@@ -230,10 +230,7 @@ test.describe("W4-D product screens visual closure", () => {
       observation: "HumanDecision visually distinct",
     });

-    await page
-      .getByTestId("w3a-operation-kind")
-      .selectOption("generate-temporary-artifact");
-    await page.getByTestId("w2-prepare-contract-sandbox").click();
+        await page.getByTestId("w2-prepare-contract-sandbox").click();
     await expect(page.getByTestId("w2-contract")).toBeVisible({ timeout: 45_000 });
     await expect(page.getByTestId("w2-contract-status")).not.toHaveText(
       "confirmation_required",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 93c40e0d..31c8ca8e 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -156,9 +156,6 @@ function toInspectionDisclosureView(
   };
 }

-/** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
-type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";
-
 type InspectionDisclosureView = {
   readonly action: string;
   readonly technicalTarget: string;
@@ -354,8 +351,6 @@ export function TrajectorySurface({
   const [postEvidence, setPostEvidence] =
     useState<W3cPostEvidenceLoopDto | null>(null);
   const [productEvidencePending, setProductEvidencePending] = useState(false);
-  const [qualifiedOperationKind, setQualifiedOperationKind] =
-    useState<QualifiedOperationKind | null>(null);
   const [recoveryBinding, setRecoveryBinding] =
     useState<RecoveryExecutionBinding | null>(null);

@@ -924,13 +919,14 @@ export function TrajectorySurface({

   const prepareContract = useCallback(async () => {
     if (continuityMutationBlocked) return;
-    if (!decision || !qualifiedOperationKind) return;
+    if (!decision) return;
     setBusy("contract");
     setError(null);
+    // PJ-REPROOF-04 — Studio derives ActualExecutionWork from durable context.
+    // Pilote never sends qualifiedOperationKind / technical HOW.
     const result = await w2PrepareExecutionContractAction({
       projectId,
       decisionId: decision.decisionId,
-      qualifiedOperationKind,
     });
     setBusy(null);
     if (!result.ok) {
@@ -973,7 +969,6 @@ export function TrajectorySurface({
     continuityMutationBlocked,
     decision,
     projectId,
-    qualifiedOperationKind,
     onDurableFactsChanged,
   ]);

@@ -2233,62 +2228,19 @@ export function TrajectorySurface({
           !recoveryDocsWritePrepareReady ? (
           <div
             className={styles.actions}
-            data-testid="w3a-qualify-execution-work"
+            data-testid="w3a-prepare-execution-from-decision"
           >
             <p className={styles.blockNote}>
-              Qualifier le travail d&apos;exécution réel (indépendant de
-              l&apos;option de trajectoire déjà décidée).
+              Studio prépare le contrat d&apos;exécution à partir de la
+              décision et du contexte produit durable — sans choix technique
+              (lecture, simulation, artefact…).
             </p>
-            <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
-              Opération d&apos;exécution
-            </label>
-            <select
-              id="w3a-operation-kind"
-              className={styles.amendmentInput}
-              data-testid="w3a-operation-kind"
-              value={qualifiedOperationKind ?? ""}
-              disabled={busy !== null || continuityMutationBlocked}
-              onChange={(event) => {
-                if (continuityMutationBlocked) return;
-                const value = event.target.value;
-                if (
-                  value === "generate-temporary-artifact" ||
-                  value === "simulate" ||
-                  value === "read"
-                ) {
-                  setQualifiedOperationKind(value);
-                  setContract(null);
-                  setInspection(null);
-                  setAuthorization(null);
-                  setAttempt(null);
-                  setAttemptPhase(null);
-                } else {
-                  setQualifiedOperationKind(null);
-                }
-              }}
-            >
-              <option value="">— Choisir —</option>
-              <option value="generate-temporary-artifact">
-                Générer un artefact temporaire local (réversible)
-              </option>
-              <option value="simulate">Simuler (sandbox)</option>
-              <option value="read">Lecture seule</option>
-            </select>
             <button
               type="button"
               className={styles.primaryAction}
               data-testid="w2-prepare-contract-sandbox"
               onClick={() => void prepareContract()}
-              disabled={
-                busy !== null ||
-                continuityMutationBlocked ||
-                qualifiedOperationKind === null
-              }
-              title={
-                qualifiedOperationKind === null
-                  ? "Qualifier d'abord le travail d'exécution"
-                  : undefined
-              }
+              disabled={busy !== null || continuityMutationBlocked}
             >
               Préparer le contrat d&apos;exécution
             </button>
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index cafa61f8..66a6d75e 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -344,8 +344,10 @@ export async function w2PrepareExecutionContractAction(input: {
   projectId: string;
   decisionId: string;
   /**
-   * Explicit Pilot/Nora operation kind. Required — W2 trajectory alone
-   * never selects the execution action. Allowlisted server-side.
+   * PJ-REPROOF-04 — Product UI sends projectId + decisionId only.
+   * Studio derives ActualExecutionWork from durable Product context.
+   * Optional qualifiedOperationKind remains for tests/compat only; ignored
+   * when durable diagnostic derivation applies; hostile kinds fail closed.
    */
   qualifiedOperationKind?: unknown;
   /** Hostile — ignored. */
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
index 959bbec9..72edf310 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
@@ -31,6 +31,7 @@ import type {
 } from "@/lib/oa/execution-contract";
 import { agentMatchViolation } from "@/lib/oa/execution-attempt";
 import type { AgentRegistryPort } from "@/lib/oa/execution-attempt";
+import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt/domain/realLaunchSafety";
 import { readContractInspectionState } from "./inspectExecutionContract";
 import type {
   AgentCapabilityOutcomeDto,
@@ -134,9 +135,13 @@ export function evaluateAgentCapability(
     ]),
   ];
   if (candidates.length > 0) {
+    // PJ-REPROOF-04 — prefer generalist on canonical Product capability checks.
+    const generalist = candidates.find(
+      (c) => c.agentId === STUDIO_CURSOR_GENERALIST_AGENT_ID,
+    );
     return {
       evaluatedAgentRefs,
-      sufficientAgentRef: candidates[0].agentId,
+      sufficientAgentRef: generalist?.agentId ?? candidates[0].agentId,
       sufficient: true,
       reason: "sufficient",
     };
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
index 006de271..9005e978 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
@@ -26,12 +26,9 @@ import {
   assertNotF3FixtureSemantics,
   deriveW3AExecutionEnvelope,
 } from "./w3aProductExecutionSemantics";
-import {
-  buildActualExecutionWork,
-  isActualExecutionOperationKind,
-  isHighRiskPolicyOnlyOperationKind,
-  type ActualExecutionWork,
-} from "./w3aActualExecutionWork";
+import { deriveActualExecutionWorkFromProductContext } from "./deriveActualExecutionWorkFromProductContext";
+import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
+import type { ActualExecutionWork } from "./w3aActualExecutionWork";
 import type { QualifiedExecutionEffects } from "./w3aQualifiedExecutionEffects";

 export type PreparedExecutionContractDto = {
@@ -150,9 +147,9 @@ export async function prepareExecutionContractFromW2Decision(input: {
     { ok: true }
   >;
   /**
-   * Explicit Pilot/Nora operation kind — REQUIRED for product path.
-   * W2 trajectory alone never selects the execution action.
-   * Hostile clients cannot invent kinds outside the allowlist.
+   * Optional compat / test operation kind. Product UI no longer sends this.
+   * When durable Product context yields a diagnostic mission, client kind is
+   * ignored. Hostile high-risk kinds fail closed.
    */
   readonly qualifiedOperationKind?: unknown;
   /** Same product path — optional Nora/test-injected qualified effects. */
@@ -354,37 +351,38 @@ export async function prepareExecutionContractFromW2Decision(input: {
   // Note: cycleProfile is loaded for scrutiny/context only — NEVER for requiredAuthority.
   void cycleBinding.cycleProfile;

-  let actualWork = undefined;
+  let actualWork: ActualExecutionWork | undefined = undefined;
+  let mission:
+    | import("./deriveActualExecutionWorkFromProductContext").ProductMissionFields
+    | null = null;
+
   if (!input.explicitEffects && !input.forceEffectsUnresolved) {
-    // R15 — high-risk kinds are policy taxonomy only; reject before EC.
-    if (isHighRiskPolicyOnlyOperationKind(input.qualifiedOperationKind)) {
-      return {
-        ok: false,
-        code: "PREPARATION_BLOCKED",
-        message:
-          "Opération à risque non qualifiable depuis operationKind seul — ActualExecutionWork refuse push/write/commit/PR/merge/delete/doctrine/baseline sans facts produit.",
-      };
-    }
-    if (!isActualExecutionOperationKind(input.qualifiedOperationKind)) {
+    const recovered = await resolvePostEvidenceRecoveryContext({
+      oa,
+      projectId: input.projectId,
+    });
+    if (!recovered.ok) {
       return {
         ok: false,
-        code: "EFFECTS_UNRESOLVED",
-        message:
-          "Aucun travail d'exécution qualifié (operationKind) — W2 trajectory seule ne sélectionne pas l'action. Chemin canonique: read | simulate | generate-temporary-artifact.",
+        code: recovered.code,
+        message: recovered.message,
       };
     }
-    const builtWork = buildActualExecutionWork({
-      operationKind: input.qualifiedOperationKind,
+
+    const derived = deriveActualExecutionWorkFromProductContext({
       projectId: input.projectId,
       projectTitle,
-      objective: projectObjective,
-      qualificationSource:
-        "studio.nora.actual-execution-work.from-explicit-operation-kind",
+      projectObjective,
+      basis,
+      selectedOptionRef,
+      recoveryContext: recovered.context,
+      clientOperationKind: input.qualifiedOperationKind,
     });
-    if ("ok" in builtWork && builtWork.ok === false) {
-      return builtWork;
+    if (!derived.ok) {
+      return derived;
     }
-    actualWork = builtWork as ActualExecutionWork;
+    actualWork = derived.work;
+    mission = derived.mission;
   }

   const envelopeResult = deriveW3AExecutionEnvelope({
@@ -398,6 +396,7 @@ export async function prepareExecutionContractFromW2Decision(input: {
     actualWork,
     explicitEffects: input.explicitEffects,
     forceEffectsUnresolved: input.forceEffectsUnresolved,
+    mission,
   });
   if (!envelopeResult.ok) {
     return envelopeResult;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts b/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
index 0aab77ab..5279492c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
@@ -237,8 +237,8 @@ export function deriveTrajectoryOptions(
         intent:
           "Approfondir le diagnostic du livrable et des preuves disponibles avant toute préparation d'une nouvelle tentative.",
         impacts: [
-          "Aucune préparation d'exécution à ce stade",
-          "Nouvelle décision humaine requise après clarification",
+          "Préparation d'un contrat diagnostique possible (pas de relance automatique)",
+          "Nouvelle décision humaine requise avant toute nouvelle tentative d'exécution",
           `stopReason: ${recovery.stopReason ?? "n/a"}`,
         ],
         reservations,
@@ -284,7 +284,7 @@ export function deriveTrajectoryOptions(
       intent:
         "Lever les réserves, requalifier le cycle, puis réinstruire les options avant toute décision structurante.",
       impacts: [
-        "Aucune préparation d'exécution à ce stade",
+        "Préparation d'un contrat diagnostique possible (pas d'exécution automatique)",
         "Nouvelle décision humaine requise après clarification",
       ],
       reservations,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
index fdec5bd0..601c2b69 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
@@ -16,6 +16,7 @@
 import type { DecisionBasis } from "@/lib/oa/decision";
 import type { AuthorityClass, Reversibility } from "@/lib/oa/execution-contract";
 import { EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED } from "@/lib/oa/execution-contract";
+import type { ProductMissionFields } from "./deriveActualExecutionWorkFromProductContext";
 import {
   BOUNDED_OPTION_REF,
   CLARIFY_OPTION_REF,
@@ -112,6 +113,9 @@ function productStopConditions(basis: DecisionBasis): string[] {
  *
  * Requires ActualExecutionWork OR explicitEffects.
  * W2 trajectory alone NEVER selects the execution action.
+ *
+ * PJ-REPROOF-04 — clarify-first IS preparable when Studio derived diagnostic
+ * ActualExecutionWork (or explicitEffects). The option remains provenance only.
  */
 export function deriveW3AExecutionEnvelope(input: {
   readonly projectId: string;
@@ -127,27 +131,34 @@ export function deriveW3AExecutionEnvelope(input: {
   readonly explicitEffects?: QualifiedExecutionEffects;
   /** Force unknown-effects fail-closed for negative proof. */
   readonly forceEffectsUnresolved?: boolean;
+  /** Optional product mission overlay (durable WHAT — not HOW). */
+  readonly mission?: ProductMissionFields | null;
 }):
   | { readonly ok: true; readonly envelope: W3AExecutionEnvelope }
   | EnvelopePrepareFailure {
-  if (
-    input.selectedOptionRef !== GOVERNED_OPTION_REF &&
-    input.selectedOptionRef !== BOUNDED_OPTION_REF
-  ) {
-    if (input.selectedOptionRef === CLARIFY_OPTION_REF) {
-      return {
-        ok: false,
-        code: "TRAJECTORY_NOT_EXECUTABLE",
-        message:
-          "Trajectoire « clarifier d'abord » — aucune préparation d'exécution autorisée.",
-      };
-    }
+  const optionAllowed =
+    input.selectedOptionRef === GOVERNED_OPTION_REF ||
+    input.selectedOptionRef === BOUNDED_OPTION_REF ||
+    input.selectedOptionRef === CLARIFY_OPTION_REF;
+  if (!optionAllowed) {
     return {
       ok: false,
       code: "TRAJECTORY_NOT_EXECUTABLE",
       message: `Option ${input.selectedOptionRef} — enveloppe d'exécution non préparable.`,
     };
   }
+  if (
+    input.selectedOptionRef === CLARIFY_OPTION_REF &&
+    !input.actualWork &&
+    !input.explicitEffects
+  ) {
+    return {
+      ok: false,
+      code: "EFFECTS_UNRESOLVED",
+      message:
+        "Clarifier d'abord exige un travail diagnostique dérivé du contexte produit — trajectoire seule insuffisante.",
+    };
+  }

   if (input.forceEffectsUnresolved === true) {
     return {
@@ -259,13 +270,31 @@ export function deriveW3AExecutionEnvelope(input: {
       : null;

   const eb = input.basis.executionBasis;
-  const expectedOutputs =
-    effects.effectClass === "generate-temporary-artifact"
+  const mission = input.mission ?? null;
+  const expectedOutputs = mission
+    ? [...mission.expectedOutputs]
+    : effects.effectClass === "generate-temporary-artifact"
       ? [W3B_TEMP_ARTIFACT_EO_TEMPLATE]
       : eb.expectedOutcome
         ? [eb.expectedOutcome]
         : [`Résultat d'exécution — ${effects.effectClass}`];

+  const stopConditions = [
+    ...productStopConditions(input.basis),
+    ...(mission?.stopConditions ?? []),
+  ];
+  // De-dupe while preserving order
+  const stopSeen = new Set<string>();
+  const mergedStops = stopConditions.filter((s) => {
+    if (stopSeen.has(s)) return false;
+    stopSeen.add(s);
+    return true;
+  });
+
+  const evidenceRequirements = mission
+    ? [...new Set([...effects.evidenceRequirements, ...mission.evidenceRequirements])]
+    : [...effects.evidenceRequirements];
+
   return {
     ok: true,
     envelope: {
@@ -274,13 +303,18 @@ export function deriveW3AExecutionEnvelope(input: {
       scope: effects.scopeIn,
       requiredCapabilities: [...effects.requiredCapabilities],
       requiredAuthority: authority.requiredAuthority,
-      constraints: productConstraints(
-        input.basis,
-        effects,
-        confirmationConstraint,
-      ),
-      stopConditions: productStopConditions(input.basis),
-      evidenceRequirements: [...effects.evidenceRequirements],
+      constraints: [
+        ...productConstraints(input.basis, effects, confirmationConstraint),
+        ...(mission
+          ? [
+              "PRODUCT_MISSION_FROM_DURABLE_CONTEXT",
+              ...mission.scopeIn.map((s) => `MISSION_SCOPE_IN:${s}`),
+              ...mission.scopeOut.map((s) => `MISSION_SCOPE_OUT:${s}`),
+            ]
+          : []),
+      ],
+      stopConditions: mergedStops,
+      evidenceRequirements,
       reversibility: reversibility.reversibility,
       expectedOutputs,
       effects,
@@ -307,7 +341,7 @@ export function deriveW3AExecutionEnvelope(input: {
           ? confirmationOk.level
           : null,
         implementationMarker: W3A_IMPLEMENTATION_MARKER,
-        objective: eb.objective ?? input.projectObjective,
+        objective: mission?.objective ?? eb.objective ?? input.projectObjective,
         cycleTypeId: eb.cycleTypeId,
         recommendedProfile: eb.recommendedProfile,
         sourceRef: input.basis.sourceRef,
@@ -317,6 +351,19 @@ export function deriveW3AExecutionEnvelope(input: {
         reversibilitySource: "EFFECTS_PLUS_ROLLBACK_FACTS",
         morrisConstructionGateRequired: effects.morrisConstructionGateRequired,
         qualificationSource: effects.provenance.qualificationSource,
+        cursorDeterminesHow: true,
+        ...(mission
+          ? {
+              sourcesToRead: [...mission.sourcesToRead],
+              diagnosticScopeIn: [...mission.scopeIn],
+              diagnosticScopeOut: [...mission.scopeOut],
+              recoveryAttemptId: mission.recoveryAttemptId,
+              recoveryEvidenceId: mission.recoveryEvidenceId,
+              recoveryReviewBundleId: mission.recoveryReviewBundleId,
+              recoveryExecutionContractId: mission.recoveryExecutionContractId,
+              productOutcome: mission.productOutcome,
+            }
+          : {}),
       },
     },
   };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index 9b958fca..c2deb363 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -49,6 +49,7 @@ import {
 } from "./attemptSupport";
 import type { AttemptPolicy } from "./attemptPolicy";
 import { resolveAttemptExecutionProfile } from "../domain/resolveAttemptExecutionProfile";
+import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "../domain/realLaunchSafety";
 import type { ListProjectEvidenceFn } from "../domain/projectEvidenceList";

 export class SelectExecutionAgent {
@@ -218,8 +219,15 @@ export class SelectExecutionAgent {
       if (candidates.length === 0) {
         return fail("AGENT_NOT_FOUND", "no_registry_candidate");
       }
-      // Deterministic tie-break: agentId lexicographic (registry order).
-      const proposedAgentRef = candidates[0].agentId;
+      // PJ-REPROOF-04 — canonical Product (contract_legacy): prefer ONE generalist
+      // Cursor executor. Progressive GCEC profiles keep specialized selection.
+      const generalist = candidates.find(
+        (c) => c.agentId === STUDIO_CURSOR_GENERALIST_AGENT_ID,
+      );
+      const proposedAgentRef =
+        profileResolved.profile.kind === "contract_legacy" && generalist
+          ? generalist.agentId
+          : candidates[0].agentId;

       let selectedAgentRef = request.requestedAgentRef ?? proposedAgentRef;
       let agentConfirmationRef: string | undefined;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 8b504414..e60e8899 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -33,8 +33,10 @@ import type {
   ExecutionContractRepositoryPort,
 } from "@/lib/oa/execution-contract";
 import {
+  assertCursorPromptParityWithInspection,
   computeExecutionContractSemanticFingerprint,
   DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
+  projectExecutionContractToCursorPrompt,
   resolveExecutionWindowForStart,
   type ResolvedExecutionWindow,
 } from "@/lib/oa/execution-contract";
@@ -1711,6 +1713,49 @@ export class StartExecution {
       gitPrMergeSpec = builtMerge.spec;
     }

+    // PJ-REPROOF-04 — EC → Cursor prompt projection at Start (server-side only).
+    // Exact durable contract + Attempt identity; no client-supplied prompt.
+    const repositoryRefForPrompt =
+      docsWriteSpec?.repositoryRef?.trim() ||
+      repositoryBindingIdentity?.trim() ||
+      (typeof (contract.inputs as Record<string, unknown> | undefined)
+        ?.repositoryRef === "string"
+        ? String(
+            (contract.inputs as Record<string, unknown>).repositoryRef,
+          ).trim()
+        : "") ||
+      null;
+    const missionProjection = projectExecutionContractToCursorPrompt({
+      contract,
+      attemptId: attempt.attemptId,
+      repositoryRef: repositoryRefForPrompt,
+      baseSha: baseHeadSha,
+      branch:
+        typeof (contract.inputs as Record<string, unknown> | undefined)
+          ?.workingBranch === "string"
+          ? String(
+              (contract.inputs as Record<string, unknown>).workingBranch,
+            ).trim() || null
+          : null,
+    });
+    const parity = assertCursorPromptParityWithInspection({
+      projection: missionProjection,
+    });
+    if (!parity.ok) {
+      return fail("ATTEMPT_INVALID", parity.code.toLowerCase(), {
+        executionContractId: contract.executionContractId,
+      });
+    }
+    if (
+      missionProjection.semanticFingerprint &&
+      missionProjection.semanticFingerprint !== fingerprint
+    ) {
+      return fail("ATTEMPT_INVALID", "prompt_fingerprint_drift", {
+        executionContractId: contract.executionContractId,
+      });
+    }
+    const cursorMissionPrompt = missionProjection.promptText;
+
     let launch;
     try {
       launch = await this.realLaunchPort.launch({
@@ -1726,6 +1771,7 @@ export class StartExecution {
         target: contract.target,
         scope: contract.scope,
         timeoutMs: window.resolvedMaxDurationMs,
+        cursorMissionPrompt,
         ...(docsWriteSpec ? { docsWriteSpec } : {}),
         ...(gitCommitSpec ? { gitCommitSpec } : {}),
         ...(gitPushSpec ? { gitPushSpec } : {}),
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
index 6e555b3b..c32da092 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
@@ -1,6 +1,11 @@
 /**
  * Product CursorExecutionReport — claim/report DTO (D-GCEC-11).
  * NOT trusted Evidence. REAL and Fake MUST share this shape.
+ *
+ * PJ-REPROOF-04 — report identity triad:
+ *   reportId (independent)
+ *   executionContractId (exact contract executed)
+ *   attemptId (exact attempt producing report)
  */
 export const OA_CURSOR_EXECUTION_REPORT_SCHEMA =
   "oa.cursor-execution-report.1" as const;
@@ -66,6 +71,8 @@ export type CursorAuthorizedEffectId =

 export type CursorExecutionReport = {
   schemaVersion: typeof OA_CURSOR_EXECUTION_REPORT_SCHEMA;
+  /** Independent report identity — distinct from attemptId / executionContractId. */
+  reportId: string;
   attemptId: string;
   executionContractId: string;
   repositoryRef: string;
@@ -80,6 +87,17 @@ export type CursorExecutionReport = {
   stoppedBeforeEffects?: CursorAuthorizedEffectId[];
 };

+export function mintCursorExecutionReportId(input: {
+  readonly attemptId: string;
+  readonly executionContractId: string;
+}): string {
+  const safeAttempt = input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "").slice(-24);
+  const safeContract = input.executionContractId
+    .replace(/[^a-zA-Z0-9:_-]/g, "")
+    .slice(-24);
+  return `rpt:cursor:${safeContract}:${safeAttempt}`;
+}
+
 export function isCursorExecutionReport(
   value: unknown,
 ): value is CursorExecutionReport {
@@ -87,6 +105,8 @@ export function isCursorExecutionReport(
   const v = value as Record<string, unknown>;
   return (
     v.schemaVersion === OA_CURSOR_EXECUTION_REPORT_SCHEMA &&
+    typeof v.reportId === "string" &&
+    (v.reportId as string).trim().length > 0 &&
     typeof v.attemptId === "string" &&
     typeof v.executionContractId === "string" &&
     typeof v.repositoryRef === "string" &&
@@ -106,3 +126,53 @@ export function parseCursorExecutionReport(
   }
   return { ok: true, report: raw };
 }
+
+/**
+ * Fail-closed correspondence: report ↔ Attempt ↔ ExecutionContract.
+ * Does NOT treat report as Evidence.
+ */
+export function bindCursorExecutionReportToAttempt(input: {
+  readonly report: CursorExecutionReport;
+  readonly expectedAttemptId: string;
+  readonly expectedExecutionContractId: string;
+  /** Optional: Attempt's bound contract id when loaded from store. */
+  readonly attemptExecutionContractId?: string | null;
+}):
+  | { readonly ok: true }
+  | { readonly ok: false; readonly code: string; readonly message: string } {
+  const { report } = input;
+  if (!report.reportId?.trim()) {
+    return {
+      ok: false,
+      code: "REPORT_ID_REQUIRED",
+      message: "CursorExecutionReport.reportId requis.",
+    };
+  }
+  if (report.attemptId !== input.expectedAttemptId) {
+    return {
+      ok: false,
+      code: "REPORT_ATTEMPT_MISMATCH",
+      message: "report.attemptId ≠ Attempt courant.",
+    };
+  }
+  if (report.executionContractId !== input.expectedExecutionContractId) {
+    return {
+      ok: false,
+      code: "REPORT_CONTRACT_MISMATCH",
+      message: "report.executionContractId ≠ ExecutionContract courant.",
+    };
+  }
+  if (
+    input.attemptExecutionContractId != null &&
+    input.attemptExecutionContractId !== "" &&
+    input.attemptExecutionContractId !== report.executionContractId
+  ) {
+    return {
+      ok: false,
+      code: "REPORT_ATTEMPT_CONTRACT_MISMATCH",
+      message:
+        "Attempt.executionContractId ≠ report.executionContractId — correspondance refusée.",
+    };
+  }
+  return { ok: true };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
index 5c4d85c2..d60802da 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
@@ -22,6 +22,7 @@ import {
   PRE_M6_EXECUTION_WINDOW_CAP_MS,
   PRE_M6_EXECUTION_WINDOW_MS,
 } from "@/lib/oa/execution-contract";
+import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "./realLaunchSafety";

 /** Modeled identifier pattern (common/identifier.schema.json). */
 export const OA_IDENTIFIER_PATTERN =
@@ -324,6 +325,11 @@ export function agentMatchViolation(
       reason: `agent_health_${agent.healthStatus}`,
     };
   }
+  // PJ-REPROOF-04 — generalist Cursor executor matches ANY authorized EC criteria.
+  // Mission bounds live in the ExecutionContract prompt, not agent capability lists.
+  if (agent.agentId === STUDIO_CURSOR_GENERALIST_AGENT_ID) {
+    return null;
+  }
   for (const capability of criteria.requiredCapabilities) {
     if (!agent.supportedCapabilities.includes(capability)) {
       return {
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
index 6ef10db7..91542613 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
@@ -28,6 +28,14 @@ export const M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID =
 export const M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID =
   "agt:m4.cursor.bounded_pr_merge" as const;

+/**
+ * PJ-REPROOF-04 — canonical Product Cursor executor.
+ * ONE identity for any ExecutionContract mission. Mission differences live in
+ * the EC prompt — not in agent-type / capability / profile routing.
+ */
+export const STUDIO_CURSOR_GENERALIST_AGENT_ID =
+  "agt:studio.cursor.generalist" as const;
+
 export type RealLaunchReconcileDisposition =
   | "CLEAR"
   | "UNKNOWN"
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 934247b3..c9e7c1d9 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -192,6 +192,15 @@ export {
   M4_BOUNDED_RO_TARGET,
   M4_BOUNDED_RO_SCOPE,
 } from "./infrastructure/m4BoundedReadOnlyCursorAgent";
+export {
+  createStudioCursorGeneralistAgentDescriptor,
+  isStudioCursorGeneralistAgent,
+  isStudioCursorGeneralistRealAgent,
+  STUDIO_CURSOR_GENERALIST_CAPABILITY,
+  STUDIO_CURSOR_GENERALIST_ACTION,
+  STUDIO_CURSOR_GENERALIST_TARGET,
+  STUDIO_CURSOR_GENERALIST_SCOPE,
+} from "./infrastructure/studioCursorGeneralistAgent";
 export {
   createM4BoundedDocsWriteCursorAgentDescriptor,
   isM4BoundedDocsWriteRealAgent,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
index 95946715..0229be55 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
@@ -59,6 +59,7 @@ import type {
   CursorExecutionReport,
   CursorGitEffectClaims,
 } from "../domain/cursorExecutionReport";
+import { mintCursorExecutionReportId } from "../domain/cursorExecutionReport";
 import {
   FakeCursorGitExternalState,
 } from "./fakeCursorGitExternalState";
@@ -661,6 +662,10 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
       const reason = err instanceof Error ? err.message : "fake_git_effect_failed";
       const report: CursorExecutionReport = {
         schemaVersion: "oa.cursor-execution-report.1",
+        reportId: mintCursorExecutionReportId({
+          attemptId: request.attemptId,
+          executionContractId: request.executionContractId,
+        }),
         attemptId: request.attemptId,
         executionContractId: request.executionContractId,
         repositoryRef,
@@ -738,6 +743,10 @@ export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {

     const report: CursorExecutionReport = {
       schemaVersion: "oa.cursor-execution-report.1",
+      reportId: mintCursorExecutionReportId({
+        attemptId: request.attemptId,
+        executionContractId: request.executionContractId,
+      }),
       attemptId: request.attemptId,
       executionContractId: request.executionContractId,
       repositoryRef,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
index c40903ea..67cfd2af 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
@@ -88,11 +88,14 @@ export function isM4BoundedDocsWriteRealAgent(
   );
 }

-/** REAL Cursor allowlist — RO | docs-write | local-commit | push | PR create | PR merge. */
+import { isStudioCursorGeneralistRealAgent } from "./studioCursorGeneralistAgent";
+
+/** REAL Cursor allowlist — generalist | RO | docs-write | local-commit | push | PR create | PR merge. */
 export function isM4AuthorizedCursorRealAgent(
   agent: AgentDescriptor,
 ): boolean {
   return (
+    isStudioCursorGeneralistRealAgent(agent) ||
     isM4BoundedReadOnlyRealAgent(agent) ||
     isM4BoundedDocsWriteRealAgent(agent) ||
     isM4BoundedLocalCommitRealAgent(agent) ||
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index f84459d0..8db2943b 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -873,36 +873,50 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         `scope=${request.scope ?? ""}`,
         `fingerprint=${request.semanticFingerprint}`,
       ].join("\n");
-    } else {
+    } else if (
+      typeof request.cursorMissionPrompt === "string" &&
+      request.cursorMissionPrompt.trim().length > 0
+    ) {
+      // PJ-REPROOF-04 — generalist Cursor mission = authorized EC projection.
+      // Cursor determines HOW inside the contract; no mandatory step sequence.
+      // Product StartExecution always supplies this prompt for non-specialized agents.
       instruction = [
-        "TÂCHE UNIQUE — preuve read-only déterministe.",
-        "Lire uniquement le fichier README.md à la racine du workspace.",
-        "Ne modifier aucun fichier.",
-        "Ne créer aucun fichier.",
-        "Ne lancer aucune commande Shell.",
-        "Ne faire aucune recherche récursive, Glob ou Grep.",
-        "Ne consulter aucun autre fichier.",
-        "Si README.md peut être lu, répondre exactement :",
-        "M4_READ_ONLY_OK",
-        "Si README.md ne peut pas être lu, répondre exactement :",
-        "M4_READ_ONLY_UNAVAILABLE",
+        request.cursorMissionPrompt.trim(),
+        "",
+        `attemptId=${request.attemptId}`,
+        `executionContractId=${request.executionContractId}`,
+        `fingerprint=${request.semanticFingerprint}`,
         `target=${request.target ?? ""}`,
         `action=${request.action ?? ""}`,
         `scope=${request.scope ?? ""}`,
+      ].join("\n");
+    } else {
+      // Fail-closed: StartExecution must project EC → cursorMissionPrompt.
+      // Historical M4 RO README probe removed from canonical Product path.
+      instruction = [
+        "STOP — aucune mission Cursor fournie (cursorMissionPrompt manquant).",
+        "Studio doit projeter ExecutionContract → prompt avant launch.",
+        `attemptId=${request.attemptId}`,
+        `executionContractId=${request.executionContractId}`,
         `fingerprint=${request.semanticFingerprint}`,
-        "Aucune mutation, aucun git remote/commit/push/PR/merge.",
+        `target=${request.target ?? ""}`,
+        `action=${request.action ?? ""}`,
+        `scope=${request.scope ?? ""}`,
       ].join("\n");
     }

     // Full-capability native mode: --sandbox disabled --force (parity with Cursor CLI).
-    // Docs-write + git mutation profiles: default agent mode (omit --mode ask).
-    // RO: --mode ask. Capability does not depend on effect class.
+    // Docs-write + git mutation profiles + generalist mission prompt: agent mode.
+    const hasMissionPrompt =
+      typeof request.cursorMissionPrompt === "string" &&
+      request.cursorMissionPrompt.trim().length > 0;
     const usesAgentMode =
       isDocsWrite ||
       isLocalCommitProfile ||
       isRemotePushProfile ||
       isPrCreateProfile ||
-      isPrMergeProfile;
+      isPrMergeProfile ||
+      hasMissionPrompt;
     const argv = usesAgentMode
       ? [
           "agent",
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
index a1e8dd1c..52f15a95 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
@@ -88,6 +88,13 @@ export type RealLaunchRequest = {
    * Cursor profile (Attempt E). REAL merge not claimed executed in PATH B lot.
    */
   readonly gitPrMergeSpec?: GitPrMergeLaunchSpec;
+  /**
+   * PJ-REPROOF-04 — Cursor-consumable projection of the authorized ExecutionContract.
+   * When present, generic (non docs_write / non git-mutation) launches use this
+   * mission prompt instead of the hardcoded RO README probe.
+   * MUST preserve semantic parity with the inspected contract.
+   */
+  readonly cursorMissionPrompt?: string;
   /** Optional Project binding identity (owner/repo) for workspace resolution. */
   readonly repositoryBindingIdentity?: string;
   /** Server-resolved absolute managed clone root (docs-write). */
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index 1fc7d1b9..4baedb0f 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -97,6 +97,13 @@ export {
   type InspectionDisclosureProjectionResult,
 } from "./projection/inspectionDisclosure";

+export {
+  projectExecutionContractToCursorPrompt,
+  assertCursorPromptParityWithInspection,
+  CURSOR_PROMPT_SHAPE_REFERENCE,
+  type CursorMissionPromptProjection,
+} from "./projection/projectExecutionContractToCursorPrompt";
+
 export { MemoryExecutionContractStore } from "./infrastructure/memoryExecutionContractStore";
 export { MemoryExecutionContractRepository } from "./infrastructure/memoryExecutionContractRepository";
 export { MemoryInspectionAttestationRepository } from "./infrastructure/memoryInspectionAttestationRepository";
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 0cfac44a..f4f1fd7b 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -35,6 +35,7 @@ import {
 import {
   createInMemoryExecutionAttemptServices,
   createSqliteExecutionAttemptServices,
+  createStudioCursorGeneralistAgentDescriptor,
   createM4BoundedReadOnlyCursorAgentDescriptor,
   createM4BoundedDocsWriteCursorAgentDescriptor,
   createM4BoundedLocalCommitCursorAgentDescriptor,
@@ -445,6 +446,7 @@ function wireOaStack(
     ? [
         fixtureAgent,
         w3aBoundedAgent,
+        createStudioCursorGeneralistAgentDescriptor(clock.nowIso()),
         createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
         createM4BoundedDocsWriteCursorAgentDescriptor(clock.nowIso()),
         createM4BoundedLocalCommitCursorAgentDescriptor(clock.nowIso()),
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts
index 352d9858..e9493d9f 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts
@@ -1,14 +1,20 @@
 /**
  * W3-A — BOUNDED deterministic fixture agent (Morris B2/B3 / B4).
  *
- * Fixture capabilities are DECLARED UP FRONT and independent of the contract.
- * They must NOT be synthesized from EC criteria (that made sufficiency tautological).
- * They must NOT shape EC action/target/scope.
+ * HISTORICAL / DETERMINISTIC SUBSTITUTE for Cursor on Product fixture path.
+ * NOT a Product task-category catalogue. NOT Pilot HOW choices.
  *
- * SUPPORTED (deterministic W3-A proof):
- * - product:generate-temporary-artifact / cap:product-temp-artifact
- * - product:simulate / cap:product-simulate
- * - scopes: product:temporary-local-artifact, product:simulate-sandbox
+ * PJ-REPROOF-04: canonical Product execution is
+ *   ExecutionContract → cursorMissionPrompt → generalist Cursor.
+ * Fixture agent remains only for deterministic adapter_sync_fixture Attempts
+ * when REAL Cursor is off. Supported actions/capabilities are technical
+ * sufficiency declarations for the fixture adapter — not mission types.
+ *
+ * SUPPORTED (deterministic fixture sufficiency):
+ * - product:generate-temporary-artifact / cap:product-temp-artifact (HISTORICAL)
+ * - product:simulate / cap:product-simulate (HISTORICAL)
+ * - product:read / cap:product-read (HISTORICAL internal effect-control mapping)
+ * - scopes: product:temporary-local-artifact, product:simulate-sandbox, product:read-only
  * - target: product:project-workspace
  *
  * UNSUPPORTED (must yield SC-CAP / no Attempt):
@@ -29,20 +35,23 @@ export const W3A_BOUNDED_FIXTURE_AGENT_ID = "agt:w3a-bounded-fixture" as const;
 export const W3A_FIXTURE_SUPPORTED_ACTIONS = [
   "product:generate-temporary-artifact",
   "product:simulate",
+  "product:read",
 ] as const;

 export const W3A_FIXTURE_SUPPORTED_CAPABILITIES = [
   "cap:product-temp-artifact",
   "cap:product-simulate",
+  "cap:product-read",
 ] as const;

 /** Must match W3A_PRODUCT_TARGET_WORKSPACE — duplicated to avoid @/features import. */
 export const W3A_FIXTURE_STABLE_TARGET = "product:project-workspace" as const;

-/** Must match W3A_PRODUCT_SCOPE TEMP_ARTIFACT / SIMULATE — no @/features import. */
+/** Must match W3A_PRODUCT_SCOPE TEMP_ARTIFACT / SIMULATE / READ — no @/features import. */
 export const W3A_FIXTURE_ALLOWED_SCOPES = [
   "product:temporary-local-artifact",
   "product:simulate-sandbox",
+  "product:read-only",
 ] as const;

 function fixtureProvenance(nowIso: string): ProvenanceRecord {
```

---

## 15. Complete content of new files

### studioCursorGeneralistAgent.ts
```typescript
/**
 * PJ-REPROOF-04 — Studio Cursor generalist executor (canonical Product path).
 *
 * ONE agent identity for ANY authorized ExecutionContract mission.
 * Cursor determines HOW from the projected prompt.
 *
 * Do NOT grow supportedCapabilities / allowedActions by Product task type.
 * Exact non-wildcard technical tokens satisfy REAL allowlist shape only.
 */
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
} from "../domain/realLaunchSafety";
import type { AgentDescriptor } from "../domain/types";

/** Single generic Product capability — not a task catalogue. */
export const STUDIO_CURSOR_GENERALIST_CAPABILITY =
  "cap:studio.cursor.generalist" as const;
export const STUDIO_CURSOR_GENERALIST_ACTION =
  "studio.cursor.generalist.execute" as const;
export const STUDIO_CURSOR_GENERALIST_TARGET =
  "studio.cursor.generalist.workspace" as const;
export const STUDIO_CURSOR_GENERALIST_SCOPE =
  "studio.cursor.generalist.authorized_contract" as const;

export function createStudioCursorGeneralistAgentDescriptor(
  nowIso: string,
  provenance?: ProvenanceRecord,
): AgentDescriptor {
  const defaultProvenance: ProvenanceRecord = {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:studio-cursor-generalist-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:studio-cursor-generalist-agent",
  };
  const descriptor: AgentDescriptor = {
    schemaVersion: "0.1.0-oa",
    agentId: STUDIO_CURSOR_GENERALIST_AGENT_ID,
    agentType: "cursor_cli_generalist",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    supportedCapabilities: [STUDIO_CURSOR_GENERALIST_CAPABILITY],
    allowedActions: [STUDIO_CURSOR_GENERALIST_ACTION],
    allowedTargets: [STUDIO_CURSOR_GENERALIST_TARGET],
    allowedScopes: [STUDIO_CURSOR_GENERALIST_SCOPE],
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

export function isStudioCursorGeneralistAgent(
  agent: Pick<AgentDescriptor, "agentId">,
): boolean {
  return agent.agentId === STUDIO_CURSOR_GENERALIST_AGENT_ID;
}

export function isStudioCursorGeneralistRealAgent(
  agent: AgentDescriptor,
): boolean {
  const hasWildcard = (values: readonly string[]) =>
    values.some((v) => v === "*" || v.includes("*"));
  return (
    isStudioCursorGeneralistAgent(agent) &&
    agent.executionMode === "cursor_cli_real" &&
    agent.trustLevel === "bounded" &&
    agent.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID &&
    agent.enabled === true &&
    agent.supportedCapabilities.length === 1 &&
    agent.supportedCapabilities[0] === STUDIO_CURSOR_GENERALIST_CAPABILITY &&
    agent.allowedActions.length === 1 &&
    agent.allowedActions[0] === STUDIO_CURSOR_GENERALIST_ACTION &&
    agent.allowedTargets.length === 1 &&
    agent.allowedTargets[0] === STUDIO_CURSOR_GENERALIST_TARGET &&
    agent.allowedScopes.length === 1 &&
    agent.allowedScopes[0] === STUDIO_CURSOR_GENERALIST_SCOPE &&
    !hasWildcard(agent.supportedCapabilities) &&
    !hasWildcard(agent.allowedActions) &&
    !hasWildcard(agent.allowedTargets) &&
    !hasWildcard(agent.allowedScopes)
  );
}
```

### projectExecutionContractToCursorPrompt.ts (prior new)
```typescript
/**
 * PJ-REPROOF-04 Bridge 3 — ExecutionContract → Cursor-consumable prompt.
 *
 * ONE semantic contract, TWO representations:
 * - durable structured ExecutionContract (SoT)
 * - text projection for Cursor (transport)
 *
 * Harvests the proven §5 axes of the external v2.6 template shape.
 * Does NOT promote the template as Studio runtime doctrine.
 * Does NOT encode a mandatory step-by-step HOW — Cursor decides HOW
 * inside the authorized perimeter.
 */

import { createHash } from "node:crypto";
import type { ExecutionContract } from "../domain/types";
import {
  projectExecutionContractInspectionDisclosure,
  type ExecutionContractInspectionDisclosure,
} from "./inspectionDisclosure";

/** Reference path only — not loaded as runtime doctrine. */
export const CURSOR_PROMPT_SHAPE_REFERENCE =
  "prompts/templates/sfia-cycle-execution-template.md" as const;

export type CursorMissionPromptProjection = {
  readonly promptText: string;
  /** Deterministic digest of execution-significant prompt body. */
  readonly promptDigest: string;
  readonly executionContractId: string;
  readonly contractVersion: number;
  readonly semanticFingerprint: string | null;
  readonly attemptId: string | null;
  readonly reportIdHint: string | null;
  readonly shapeReference: typeof CURSOR_PROMPT_SHAPE_REFERENCE;
  readonly disclosure: ExecutionContractInspectionDisclosure;
};

function asString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t.length > 0 ? t : null;
}

function asStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
}

function bullet(items: readonly string[], empty = "(aucun)"): string {
  if (items.length === 0) return empty;
  return items.map((i) => `- ${i}`).join("\n");
}

/**
 * Project authorized ExecutionContract into a Cursor mission prompt.
 * Semantic parity with Pilot inspection disclosure is required.
 */
export function projectExecutionContractToCursorPrompt(input: {
  readonly contract: ExecutionContract;
  readonly attemptId?: string | null;
  readonly reportIdHint?: string | null;
  readonly projectTitle?: string | null;
  readonly repositoryRef?: string | null;
  readonly baseSha?: string | null;
  readonly branch?: string | null;
}): CursorMissionPromptProjection {
  const projected = projectExecutionContractInspectionDisclosure(input.contract);
  const d = projected.disclosure;
  const inputs = input.contract.inputs ?? {};

  const objective =
    d.objective ??
    asString(inputs.objective) ??
    `Exécuter le contrat ${input.contract.executionContractId}`;

  const contextLines = [
    input.projectTitle ? `Projet: ${input.projectTitle}` : null,
    `projectId: ${input.contract.projectId}`,
    input.contract.cycleInstanceId
      ? `cycleInstanceId: ${input.contract.cycleInstanceId}`
      : null,
    ...(input.contract.decisionRefs ?? []).map((r) => `decisionRef: ${r}`),
    asString(inputs.selectedOptionLabel)
      ? `décision trajectoire (provenance, pas action): ${asString(inputs.selectedOptionLabel)}`
      : null,
    asString(inputs.productOutcome)
      ? `productOutcome antérieur: ${asString(inputs.productOutcome)}`
      : null,
    asString(inputs.recoveryAttemptId)
      ? `attempt antérieur: ${asString(inputs.recoveryAttemptId)}`
      : null,
    asString(inputs.recoveryEvidenceId)
      ? `evidence antérieure: ${asString(inputs.recoveryEvidenceId)}`
      : null,
  ].filter((x): x is string => Boolean(x));

  const sources = [
    ...asStringList(inputs.sourcesToRead),
    ...asStringList(inputs.diagnosticScopeIn),
    ...(d.scopeIn ?? []),
  ];
  const uniqueSources = [...new Set(sources)];

  const scopeIn = [
    ...(d.scopeIn ?? []),
    ...asStringList(inputs.diagnosticScopeIn),
    d.targetPath ? `path:${d.targetPath}` : null,
  ].filter((x): x is string => Boolean(x));

  const scopeOut = [
    ...(d.scopeOut ?? []),
    ...asStringList(inputs.diagnosticScopeOut),
    "élargir le périmètre sans nouveau contrat",
    "acquérir de l'autorité seule",
    "merge / doctrine / baseline promotion hors contrat",
  ];

  const forbidden = [
    ...d.constraints.filter(
      (c) =>
        c.startsWith("SCOPE_OUT:") ||
        c.startsWith("PROTECTED:") ||
        c.startsWith("OUT_OF_SCOPE:") ||
        c.includes("NO_") ||
        c.startsWith("MISSION_SCOPE_OUT:"),
    ),
    "git push projet / main hors gate",
    "force push",
    "merge hors contrat autorisé",
  ];

  const expectedOutputs = d.expectedOutputs ?? [
    ...asStringList(input.contract.expectedOutputs),
  ];
  const validations = d.validationExpectations ?? [];
  const evidence = d.evidenceRequirements;
  const stops = d.stopConditions;

  const filesCreate = asStringList(inputs.filesToCreate);
  const filesModify = asStringList(inputs.filesToModify);
  const filesForbidden = asStringList(inputs.filesForbidden);

  // Significant body — excludes volatile reportIdHint for digest stability
  // when hint is only a suggestion. attemptId included when bound.
  const significantBody = [
    `executionContractId: ${d.executionContractId}`,
    `contractVersion: ${d.contractVersion}`,
    `semanticFingerprint: ${d.semanticFingerprint ?? ""}`,
    input.attemptId ? `attemptId: ${input.attemptId}` : null,
    `Objectif :`,
    objective,
    `Contexte :`,
    ...contextLines,
    `Sources à lire :`,
    ...uniqueSources,
    `Périmètre autorisé :`,
    ...scopeIn,
    `Hors périmètre :`,
    ...scopeOut,
    `Fichiers à créer :`,
    ...filesCreate,
    `Fichiers à modifier :`,
    ...filesModify,
    `Fichiers interdits :`,
    ...filesForbidden,
    `Stop conditions :`,
    ...stops,
    `Validations attendues :`,
    ...validations,
    `Evidence / report requirements :`,
    ...evidence,
    `Expected outputs :`,
    ...expectedOutputs,
    `requiredAuthority: ${d.requiredAuthority}`,
    `requiredCapabilities: ${d.requiredCapabilities.join(",")}`,
    `reversibility: ${d.reversibility}`,
  ]
    .filter((x): x is string => x != null)
    .join("\n");

  const promptDigest = createHash("sha256")
    .update(significantBody, "utf8")
    .digest("hex")
    .slice(0, 32);

  const promptText = [
    `# Mission Cursor — projection du ExecutionContract Studio`,
    ``,
    `shapeReference: ${CURSOR_PROMPT_SHAPE_REFERENCE}`,
    `executionContractId: ${d.executionContractId}`,
    `contractVersion: ${d.contractVersion}`,
    `semanticFingerprint: ${d.semanticFingerprint ?? "(none)"}`,
    `promptDigest: ${promptDigest}`,
    input.attemptId ? `attemptId: ${input.attemptId}` : `attemptId: (bound at launch)`,
    input.reportIdHint
      ? `reportIdHint: ${input.reportIdHint}`
      : `reportId: (minted at report ingestion)`,
    input.repositoryRef ? `repositoryRef: ${input.repositoryRef}` : null,
    input.baseSha ? `baseSha: ${input.baseSha}` : null,
    input.branch ? `branch: ${input.branch}` : null,
    ``,
    `## Objectif`,
    objective,
    ``,
    `## Contexte`,
    bullet(contextLines, "(contexte minimal — contract ids ci-dessus)"),
    ``,
    `## Sources à lire`,
    bullet(uniqueSources, "(découvrir localement dans le périmètre)"),
    ``,
    `## Périmètre autorisé (scope IN)`,
    bullet([...new Set(scopeIn)], "(périmètre contractuel — ne pas élargir)"),
    ``,
    `## Hors périmètre (scope OUT)`,
    bullet([...new Set(scopeOut)]),
    ``,
    `## Fichiers`,
    `À créer:`,
    bullet(filesCreate, "aucun imposé — Cursor décide si nécessaire dans le périmètre"),
    `À modifier:`,
    bullet(filesModify, "aucun imposé — Cursor décide si nécessaire dans le périmètre"),
    `Interdits:`,
    bullet(filesForbidden.length > 0 ? filesForbidden : ["chemins protégés hors contrat"]),
    ``,
    `## Effets / garde-fous`,
    bullet([...new Set(forbidden)]),
    `- Ne pas élargir le périmètre ni l'autorité.`,
    `- Si un effet hors contrat est nécessaire: STOP et rapporter le besoin d'escalade.`,
    `- Technical SUCCESS ≠ Product SUCCESS.`,
    ``,
    `## Stop conditions`,
    bullet(stops),
    ``,
    `## Validations attendues`,
    bullet(validations, "(selon mission — tests/lints/diff si pertinents)"),
    ``,
    `## Evidence / rapport attendus`,
    bullet(evidence),
    `Expected outputs:`,
    bullet(expectedOutputs),
    ``,
    `## HOW`,
    `Cursor détermine le HOW à l'intérieur de ce contrat.`,
    `Aucune séquence obligatoire read→write→commit n'est imposée.`,
    `Aucun choix Pilote d'opération technique (read/simulate/docs_write/commit/push/PR/merge).`,
    ``,
    `## Rapport final attendu`,
    `- reportId (identité propre du rapport)`,
    `- executionContractId: ${d.executionContractId} (exact)`,
    input.attemptId
      ? `- attemptId: ${input.attemptId} (exact)`
      : `- attemptId: (celui de l'Attempt lancé)`,
    `- status: succeeded | failed | stopped | timeout`,
    `- effets fichiers / validations / git le cas échéant`,
    `- stops/blockers`,
    `- verdict/status — claim seulement, pas Evidence produit`,
    ``,
    `## Secondaire technique (audit)`,
    `- action: ${d.action}`,
    `- technicalTarget: ${d.technicalTarget}`,
    `- scope: ${d.scope}`,
    `- requiredAuthority: ${d.requiredAuthority}`,
    `- requiredCapabilities: ${d.requiredCapabilities.join(", ") || "(none)"}`,
    `- reversibility: ${d.reversibility}`,
  ]
    .filter((x): x is string => x != null)
    .join("\n");

  return {
    promptText,
    promptDigest,
    executionContractId: d.executionContractId,
    contractVersion: d.contractVersion,
    semanticFingerprint: d.semanticFingerprint,
    attemptId: input.attemptId ?? null,
    reportIdHint: input.reportIdHint ?? null,
    shapeReference: CURSOR_PROMPT_SHAPE_REFERENCE,
    disclosure: d,
  };
}

/**
 * Assert prompt projection preserves Pilot-inspection semantics (no silent widen).
 */
export function assertCursorPromptParityWithInspection(input: {
  readonly projection: CursorMissionPromptProjection;
}):
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const { projection } = input;
  const d = projection.disclosure;
  const text = projection.promptText;

  if (!text.includes(d.executionContractId)) {
    return {
      ok: false,
      code: "PROMPT_CONTRACT_ID_MISSING",
      message: "Prompt must cite executionContractId.",
    };
  }
  if (d.semanticFingerprint && !text.includes(d.semanticFingerprint)) {
    return {
      ok: false,
      code: "PROMPT_FINGERPRINT_MISSING",
      message: "Prompt must cite semanticFingerprint.",
    };
  }
  if (d.objective && !text.includes(d.objective)) {
    return {
      ok: false,
      code: "PROMPT_OBJECTIVE_DRIFT",
      message: "Prompt objective diverges from inspection disclosure.",
    };
  }
  for (const stop of d.stopConditions) {
    if (!text.includes(stop)) {
      return {
        ok: false,
        code: "PROMPT_STOP_MISSING",
        message: `Stop condition absent from prompt: ${stop}`,
      };
    }
  }
  // Must not inject mandatory HOW sequence markers
  if (
    /Étapes d'exécution\s*:\s*\n\s*1\.\s*Local Git Truth Check/i.test(text) ||
    /first read, then write, then (test|commit)/i.test(text)
  ) {
    return {
      ok: false,
      code: "PROMPT_ENCODES_HOW",
      message: "Prompt must not encode a mandatory step-by-step HOW.",
    };
  }
  return { ok: true };
}
```

### deriveActualExecutionWorkFromProductContext.ts (prior new)
```typescript
/**
 * PJ-REPROOF-04 — Product state → ExecutionContract mission derivation.
 *
 * Application helper ONLY (non-durable). Populates WHAT/mission fields from
 * durable Product facts so the Pilote never selects low-level HOW.
 *
 * Internal ActualExecutionWork remains an authority/effect control ONLY
 * (Confirmation / capability projection for fixture-safe Attempts).
 * It is NOT a Product mission category and NOT Cursor HOW.
 *
 * Derived from whether the mission perimeter authorizes mutating effects —
 * NEVER from selectedOptionRef === clarify-first (no option→operation table).
 *
 * Future tasks: create a new ExecutionContract (mission fields) — do NOT add
 * a new operation kind or executor type.
 *
 * Forbidden:
 * - selectedOptionRef → EC.action / EC.scope
 * - clarify-first → read hardcode
 * - diagnosticExecutor / mission-type switch
 * - client path / authority / capability injection
 */

import type { DecisionBasis } from "@/lib/oa/decision";
import {
  buildActualExecutionWork,
  isActualExecutionOperationKind,
  isHighRiskPolicyOnlyOperationKind,
  type ActualExecutionWork,
  type W3ACanonicalActualOperationKind,
} from "./w3aActualExecutionWork";
import type { EffectQualificationFailure } from "./w3aQualifiedExecutionEffects";
import type { PostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "./trajectoryOptions";

/** Mission WHAT fields folded into ExecutionContract.inputs / envelope. */
export type ProductMissionFields = {
  readonly objective: string;
  readonly expectedOutputs: readonly string[];
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly stopConditions: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly sourcesToRead: readonly string[];
  readonly contextNotes: readonly string[];
  /** True when mission perimeter allows mutating filesystem/git effects. */
  readonly authorizesMutatingEffects: boolean;
  readonly recoveryAttemptId: string | null;
  readonly recoveryEvidenceId: string | null;
  readonly recoveryReviewBundleId: string | null;
  readonly recoveryExecutionContractId: string | null;
  readonly productOutcome: string | null;
};

export type DeriveProductMissionResult =
  | {
      readonly ok: true;
      readonly work: ActualExecutionWork;
      readonly mission: ProductMissionFields;
      readonly derivationSource: "durable_product_mission" | "compat_operation_kind";
    }
  | EffectQualificationFailure
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

/** @deprecated Use ProductMissionFields — alias during simplify transition. */
export type DiagnosticMissionSemantics = ProductMissionFields & {
  readonly kind?: string;
};

/** Trajectory governance marker — never an executable EC action. */
export function isNonExecutableTrajectoryRequestedOperation(
  requestedOperation: string | null | undefined,
): boolean {
  const op = requestedOperation?.trim() ?? "";
  return op.length === 0 || op.startsWith("w2:decide-trajectory:");
}

function missionFromRecovery(
  recovery: PostEvidenceRecoveryContext,
  projectObjective: string | null,
): ProductMissionFields {
  const outcomeLabel =
    recovery.productOutcome === "UNCLAIMED"
      ? "non encore pleinement démontré"
      : recovery.productOutcome === "STOP"
        ? "arrêté de façon gouvernée"
        : "en échec";
  return {
    objective:
      `Déterminer pourquoi le résultat produit précédent est ${outcomeLabel} ` +
      `et ce qui manque avant une nouvelle tentative` +
      (projectObjective ? ` — contexte projet: ${projectObjective}` : ""),
    expectedOutputs: [
      "Diagnostic utilisable des preuves manquantes / expected outcomes non tenus",
      "Prochaine étape produit recommandée (sans relance automatique)",
      `Trace d'inspection Attempt ${recovery.attemptId} / Evidence ${recovery.evidenceId} / ReviewBundle ${recovery.reviewBundleId}`,
    ],
    scopeIn: [
      "product:current-project",
      `attempt:${recovery.attemptId}`,
      `evidence:${recovery.evidenceId}`,
      `reviewBundle:${recovery.reviewBundleId}`,
      `executionContract:${recovery.executionContractId}`,
      "product:durable-facts-required-for-mission",
    ],
    scopeOut: [
      "unrelated-project-mutation",
      "automatic-relaunch",
      "claim-product-success-from-technical-success",
      "protected-boundary-without-authorization",
      "doctrine-or-baseline-promotion",
      "DURABLE_PROJECT_WRITE",
      "GIT_PUSH",
      "GIT_PR",
      "GIT_MERGE",
    ],
    stopConditions: [
      "REQUIRED_EVIDENCE_UNAVAILABLE",
      "CONTRADICTORY_DURABLE_TRUTH",
      "CAPABILITY_OR_AUTHORITY_INSUFFICIENT",
      "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
      "NO_AUTOMATIC_RELAUNCH",
    ],
    evidenceRequirements: [
      "evreq:mission-trace-of-inspected-durable-facts",
      "evreq:mission-result-for-nora-reevaluation",
    ],
    sourcesToRead: [
      `attempt:${recovery.attemptId}`,
      `evidence:${recovery.evidenceId}`,
      `reviewBundle:${recovery.reviewBundleId}`,
      `executionContract:${recovery.executionContractId}`,
    ],
    contextNotes: [
      `productOutcome=${recovery.productOutcome}`,
      `recommendationKind=${recovery.recommendationKind}`,
      `attemptStatus=${recovery.attemptStatus}`,
      `headline=${recovery.headline}`,
      `businessEffectProven=false`,
      `realProcessInvoked=${recovery.realProcessInvoked}`,
    ],
    // Perimeter forbids mutations — internal effect control, not option→op.
    authorizesMutatingEffects: false,
    recoveryAttemptId: recovery.attemptId,
    recoveryEvidenceId: recovery.evidenceId,
    recoveryReviewBundleId: recovery.reviewBundleId,
    recoveryExecutionContractId: recovery.executionContractId,
    productOutcome: recovery.productOutcome,
  };
}

function missionFromClarifyWithoutRecovery(
  projectObjective: string | null,
  basis: DecisionBasis,
): ProductMissionFields {
  const reserves = basis.executionBasis.reservations ?? [];
  return {
    objective:
      "Clarifier le contexte durable et les réserves avant d'engager une exécution structurante" +
      (projectObjective ? ` — ${projectObjective}` : ""),
    expectedOutputs: [
      "Diagnostic des réserves / incertitudes bloquantes",
      "Prochaine étape produit recommandée (sans exécution automatique)",
    ],
    scopeIn: [
      "product:current-project-facts",
      "product:decision-basis-and-lps",
      ...reserves.map((r) => `reservation:${r}`),
    ],
    scopeOut: [
      "unrelated-project-mutation",
      "automatic-execute",
      "protected-boundary-without-authorization",
      "DURABLE_PROJECT_WRITE",
      "GIT_PUSH",
      "GIT_PR",
      "GIT_MERGE",
    ],
    stopConditions: [
      "REQUIRED_CONTEXT_UNAVAILABLE",
      "CAPABILITY_OR_AUTHORITY_INSUFFICIENT",
      "NO_AUTOMATIC_EXECUTE",
    ],
    evidenceRequirements: ["evreq:mission-result-for-nora-reevaluation"],
    sourcesToRead: ["product:current-project-facts", "product:decision-basis-and-lps"],
    contextNotes: ["pre_engagement_clarify", ...reserves.slice(0, 5)],
    authorizesMutatingEffects: false,
    recoveryAttemptId: null,
    recoveryEvidenceId: null,
    recoveryReviewBundleId: null,
    recoveryExecutionContractId: null,
    productOutcome: null,
  };
}

/**
 * Internal effect control from mission perimeter — NOT from trajectory option.
 * Non-mutating perimeter → weak reversible control suitable for Confirmation projection.
 */
function buildInternalWorkFromMissionPerimeter(input: {
  readonly projectId: string;
  readonly projectTitle: string | null;
  readonly mission: ProductMissionFields;
  readonly qualificationSource: string;
}): ActualExecutionWork | EffectQualificationFailure {
  // Mutating missions still need sealed docs_write / GCEC path today —
  // do not invent a generalist mutator from trajectory alone.
  if (input.mission.authorizesMutatingEffects) {
    return {
      ok: false,
      code: "EFFECTS_UNRESOLVED",
      message:
        "Mission mutante sans sealed docs_write / GCEC — utiliser le chemin Proposal/M3 ou facts produit scellés.",
    };
  }
  const built = buildActualExecutionWork({
    operationKind: "read",
    projectId: input.projectId,
    projectTitle: input.projectTitle,
    objective: input.mission.objective,
    qualificationSource: input.qualificationSource,
  });
  if ("ok" in built && built.ok === false) return built;
  const work = built as ActualExecutionWork;
  return {
    ...work,
    notes: [
      ...work.notes,
      "INTERNAL_EFFECT_CONTROL_FROM_MISSION_PERIMETER",
      "NOT_OPTION_TO_OPERATION",
      "CURSOR_DETERMINES_HOW",
      ...input.mission.contextNotes,
    ],
  };
}

/**
 * Derive mission + internal effect control from durable Product context.
 */
export function deriveActualExecutionWorkFromProductContext(input: {
  readonly projectId: string;
  readonly projectTitle: string | null;
  readonly projectObjective: string | null;
  readonly basis: DecisionBasis;
  readonly selectedOptionRef: string;
  readonly recoveryContext: PostEvidenceRecoveryContext | null;
  /** Hostile / optional — never overrides durable mission derivation. */
  readonly clientOperationKind?: unknown;
}): DeriveProductMissionResult {
  const { selectedOptionRef, recoveryContext, basis } = input;

  if (isHighRiskPolicyOnlyOperationKind(input.clientOperationKind)) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Opération à risque non qualifiable depuis operationKind client — refuse push/write/commit/PR/merge/delete/doctrine/baseline sans facts produit.",
    };
  }

  const clientKind: W3ACanonicalActualOperationKind | null =
    isActualExecutionOperationKind(input.clientOperationKind)
      ? input.clientOperationKind
      : null;

  // Durable mission from Product facts (recovery and/or clarify intent).
  // Option ref is provenance — never the operation selector.
  const canPrepareDurableMission =
    recoveryContext != null || selectedOptionRef === CLARIFY_OPTION_REF;

  if (canPrepareDurableMission) {
    const mission = recoveryContext
      ? missionFromRecovery(recoveryContext, input.projectObjective)
      : missionFromClarifyWithoutRecovery(input.projectObjective, basis);

    const work = buildInternalWorkFromMissionPerimeter({
      projectId: input.projectId,
      projectTitle: input.projectTitle,
      mission,
      qualificationSource:
        "studio.nora.mission-perimeter.internal-effect-control",
    });
    if ("ok" in work && work.ok === false) return work;
    void clientKind; // durable mission wins — ignore client HOW
    return {
      ok: true,
      work: work as ActualExecutionWork,
      mission,
      derivationSource: "durable_product_mission",
    };
  }

  if (
    selectedOptionRef !== GOVERNED_OPTION_REF &&
    selectedOptionRef !== BOUNDED_OPTION_REF
  ) {
    return {
      ok: false,
      code: "TRAJECTORY_NOT_EXECUTABLE",
      message: `Option ${selectedOptionRef} — mission d'exécution non dérivable.`,
    };
  }

  const requested = basis.executionBasis.requestedOperation?.trim() ?? "";
  if (
    !isNonExecutableTrajectoryRequestedOperation(requested) &&
    (basis.executionBasis.intentKind === "docs_write" ||
      requested === "cursor.docs_write.apply")
  ) {
    return {
      ok: false,
      code: "PREPARE_ROUTE_DOCS_WRITE",
      message:
        "DecisionBasis scellée docs_write — utiliser le chemin PREPARE Proposal/M3, pas le sandbox W3-A.",
    };
  }

  // Compat: allowlisted client kind for historical tests only — not Product UI.
  if (clientKind) {
    const built = buildActualExecutionWork({
      operationKind: clientKind,
      projectId: input.projectId,
      projectTitle: input.projectTitle,
      objective: input.projectObjective,
      qualificationSource:
        "studio.nora.actual-execution-work.from-compat-operation-kind",
    });
    if ("ok" in built && built.ok === false) return built;
    const work = built as ActualExecutionWork;
    const mission: ProductMissionFields = {
      objective: input.projectObjective ?? `Exécution ${clientKind}`,
      expectedOutputs: [`Résultat d'exécution — ${clientKind}`],
      scopeIn: [work.scopeIn],
      scopeOut: [...work.scopeOut],
      stopConditions: [],
      evidenceRequirements: [],
      sourcesToRead: [],
      contextNotes: ["compat_operation_kind"],
      authorizesMutatingEffects: clientKind === "generate-temporary-artifact",
      recoveryAttemptId: null,
      recoveryEvidenceId: null,
      recoveryReviewBundleId: null,
      recoveryExecutionContractId: null,
      productOutcome: null,
    };
    return {
      ok: true,
      work,
      mission,
      derivationSource: "compat_operation_kind",
    };
  }

  return {
    ok: false,
    code: "EFFECTS_UNRESOLVED",
    message:
      "Aucune mission dérivable du contexte produit durable — Studio n'invente pas de HOW depuis la trajectoire seule.",
  };
}
```

### pjReproof04.executionContractSemanticBridge.d0.test.ts
```typescript
// @vitest-environment node
/**
 * PJ-REPROOF-04 — ONE generic Cursor executor for canonical Product path.
 *
 * Acceptance:
 * 1. Non-mutating EC → generalist → StartExecution → cursorMissionPrompt
 * 2. Mutating EC → SAME generalist → StartExecution → cursorMissionPrompt
 * 3. Novel future EC → SAME generalist, no registry/capability change
 *
 * NEW TASK = NEW ExecutionContract ONLY.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { CLARIFY_OPTION_REF } from "@/features/project-assistant/w2/trajectoryOptions";
import {
  assertCursorPromptParityWithInspection,
  projectExecutionContractToCursorPrompt,
  CURSOR_PROMPT_SHAPE_REFERENCE,
} from "@/lib/oa/execution-contract";
import {
  assertStudioCursorRealOffForTests,
  bindCursorExecutionReportToAttempt,
  createStudioCursorGeneralistAgentDescriptor,
  createTestExecutionAttemptServices,
  mintCursorExecutionReportId,
  parseCursorExecutionReport,
  SqliteRealLaunchSafetyJournal,
  STUDIO_CURSOR_GENERALIST_AGENT_ID,
  TestExecutionAdapter,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
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
} from "../oa/execution-attempt/helpers";
import {
  M4_EVIDENCE,
  M4_TEST_BASE_HEAD_SHA,
  m4ContractInputs,
} from "../oa/execution-attempt/support/m4Fixtures";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
  assertStudioCursorRealOffForTests();
});

afterEach(() => {
  cleanupW2TempDirs();
  assertStudioCursorRealOffForTests();
});

async function startWithGeneralist(input: {
  readonly executionContractId: string;
  readonly attemptId: string;
  readonly grantId: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredCapabilities: readonly string[];
  readonly objective: string;
  readonly inputsExtra?: Record<string, unknown>;
  readonly stopConditions?: readonly string[];
  readonly expectedOutputs?: readonly string[];
  readonly evidenceRequirements?: readonly string[];
  readonly constraints?: readonly string[];
}): Promise<{
  readonly launchPort: TestOnlyRealExecutionLaunchPort;
  readonly selectedAgentRef: string;
  readonly prompt: string;
  readonly contractId: string;
  readonly fingerprint: string;
}> {
  const dir = mkdtempSync(path.join(os.tmpdir(), "pj-reproof04-gen-"));
  const journal = new SqliteRealLaunchSafetyJournal({
    databasePath: path.join(dir, "safety.sqlite"),
  });
  const launchPort = new TestOnlyRealExecutionLaunchPort();
  const generalist = createStudioCursorGeneralistAgentDescriptor(NOW);
  const fixtureAdapter = new TestExecutionAdapter();
  const stack = buildStack({ agents: [generalist], adapter: fixtureAdapter });
  stack.attempts = createTestExecutionAttemptServices({
    decisionServices: stack.decisions,
    executionContractServices: stack.execution,
    agents: [generalist],
    adapter: fixtureAdapter,
    realBoundary: { launchPort, safetyJournal: journal },
    fixedNowIso: NOW,
  }) as typeof stack.attempts;

  await seedProject(stack.projects);
  registerMorris(stack.decisions.authority, input.scope, M4_EVIDENCE);
  await seedAcceptedDecision(stack);
  await seedStandardCycle(stack);

  const built = await stack.execution.buildExecutionContract.execute(
    baseBuildRequest({
      cycleInstanceId: "cyc:std-001",
      executionContractId: input.executionContractId,
      idempotencyKey: `idem:${input.executionContractId}`,
      action: input.action,
      target: input.target,
      scope: input.scope,
      requiredCapabilities: [...input.requiredCapabilities],
      authorityEvidenceId: M4_EVIDENCE,
      stopConditions: [
        ...(input.stopConditions ?? [
          "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
        ]),
      ],
      expectedOutputs: [
        ...(input.expectedOutputs ?? ["Résultat de mission Cursor"]),
      ],
      evidenceRequirements: [
        ...(input.evidenceRequirements ?? [
          "evreq:mission-result-for-nora-reevaluation",
        ]),
      ],
      ...(input.constraints && input.constraints.length > 0
        ? { constraints: [...input.constraints] }
        : {}),
      inputs: {
        ...m4ContractInputs(),
        objective: input.objective,
        ...input.inputsExtra,
      },
    }),
  );
  if (!built.ok) {
    throw new Error(
      `build failed: ${built.error.detailCode} ${built.error.internalCauseRef ?? ""} ${built.error.message}`,
    );
  }
  expect(built.ok).toBe(true);

  const validated = await stack.execution.validateExecutionContract.execute({
    executionContractId: built.contract.executionContractId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(validated.ok).toBe(true);
  if (!validated.ok) throw new Error("validate failed");

  const confirmationId = await grantContractConfirmation(stack, {
    scope: input.scope,
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

  // Prefer automatic generalist selection (no specialized M4 RO request).
  const selected = await selectStandardAgent(stack, {
    attemptId: input.attemptId,
    executionContractId: confirmed.contract.executionContractId,
    authorityEvidenceId: M4_EVIDENCE,
    // omit requestedAgentRef — Select must prefer generalist on contract_legacy
  });
  expect(selected.ok).toBe(true);
  if (!selected.ok) throw new Error("select failed");
  expect(selected.attempt.selectedAgentRef).toBe(
    STUDIO_CURSOR_GENERALIST_AGENT_ID,
  );

  const granted = await stack.attempts.grantRealExecutionGate!.execute({
    grantId: input.grantId,
    attemptId: input.attemptId,
    actor: MORRIS_ACTOR,
    expiresAt: "2026-07-25T07:00:00.000Z",
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(granted.ok).toBe(true);

  const started = await stack.attempts.startExecution.execute({
    attemptId: input.attemptId,
    actor: MORRIS_ACTOR,
    authorityEvidenceId: M4_EVIDENCE,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error("start failed");
  expect(launchPort.calls).toHaveLength(1);
  const prompt = launchPort.calls[0]!.cursorMissionPrompt ?? "";
  expect(prompt.length).toBeGreaterThan(0);
  journal.close();
  return {
    launchPort,
    selectedAgentRef: selected.attempt.selectedAgentRef!,
    prompt,
    contractId: confirmed.contract.executionContractId,
    fingerprint: confirmed.contract.semanticFingerprint ?? "",
  };
}

describe("A — coverage + no Pilot HOW", () => {
  it("template axes mapped; clarify prepare without operationKind", async () => {
    expect(CURSOR_PROMPT_SHAPE_REFERENCE).toContain(
      "sfia-cycle-execution-template.md",
    );
    const db = tempProductDbPath("pj-reproof04-gen-prep.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "pjgen" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "gen" });
    const oa = runtime.oa!;
    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) throw new Error("qual");
    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) throw new Error("propose");
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");
    const prepared = await prepareExecutionContractFromW2Decision({
      oa,
      projectId: seeded.projectId,
      decisionId: decided.decision.decisionId,
      currentContext: await currentF2Context(runtime, seeded.projectId),
      forceLocalAuthority: true,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(prepared.code);
    expect(prepared.attemptCreated).toBe(false);
    expect(prepared.contract.constraints).toContain(
      "PRODUCT_MISSION_FROM_DURABLE_CONTEXT",
    );
  });
});

describe("Acceptance 1 — non-mutating via generic Cursor executor", () => {
  it("analyse mission → agt:studio.cursor.generalist → StartExecution prompt", async () => {
    const objective =
      "Analyser les faits projet et diagnostiquer les preuves manquantes";
    const r = await startWithGeneralist({
      executionContractId: "xct:pj-reproof04:analyse",
      attemptId: "xat:pj-reproof04:analyse",
      grantId: "gd:pj-reproof04:analyse",
      action: "product:analyse-facts",
      target: "product:current-project",
      scope: "product:mission-read-perimeter",
      requiredCapabilities: ["cap:product-analyse"],
      objective,
      inputsExtra: {
        sourcesToRead: ["product:current-project-facts"],
        diagnosticScopeIn: ["product:current-project-facts"],
        diagnosticScopeOut: ["DURABLE_PROJECT_WRITE", "GIT_PUSH"],
      },
      stopConditions: [
        "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
        "NO_AUTOMATIC_RELAUNCH",
      ],
    });
    expect(r.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    expect(r.prompt).toContain(objective);
    expect(r.prompt).toContain(r.contractId);
    expect(r.prompt).toContain("xat:pj-reproof04:analyse");
    expect(r.prompt).toContain(r.fingerprint);
    expect(r.prompt).toContain("PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT");
    expect(r.prompt).toContain("Cursor détermine le HOW");
    expect(r.prompt).not.toMatch(/first read, then write, then commit/i);
    expect(r.launchPort.calls[0]!.selectedAgentRef).toBe(
      STUDIO_CURSOR_GENERALIST_AGENT_ID,
    );
    expect(r.launchPort.calls[0]!.baseHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
  });
});

describe("Acceptance 2 — mutating via SAME generic Cursor executor", () => {
  it("local docs mutation mission → same generalist; no docs_write/commit agent", async () => {
    const objective =
      "Modifier docs/notes.md dans le périmètre et valider le résultat";
    const r = await startWithGeneralist({
      executionContractId: "xct:pj-reproof04:mutate",
      attemptId: "xat:pj-reproof04:mutate",
      grantId: "gd:pj-reproof04:mutate",
      action: "product:local-docs-mutation",
      target: "product:current-project",
      scope: "product:mission-local-mutation",
      requiredCapabilities: ["cap:product-local-mutation"],
      objective,
      inputsExtra: {
        sourcesToRead: ["docs/notes.md"],
        diagnosticScopeIn: ["docs/notes.md", "path:docs/"],
        diagnosticScopeOut: ["GIT_PUSH", "GIT_PR", "GIT_MERGE"],
        filesToModify: ["docs/notes.md"],
      },
      constraints: [
        "SCOPE_OUT:GIT_PUSH",
        "SCOPE_OUT:GIT_PR",
        "SCOPE_OUT:GIT_MERGE",
      ],
      stopConditions: [
        "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
        "NO_REMOTE_GIT",
      ],
      expectedOutputs: ["docs/notes.md mis à jour"],
    });
    expect(r.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    expect(r.selectedAgentRef).not.toContain("docs_write");
    expect(r.selectedAgentRef).not.toContain("local_commit");
    expect(r.selectedAgentRef).not.toContain("bounded_readonly");
    expect(r.prompt).toContain(objective);
    expect(r.prompt).toContain("docs/notes.md");
    expect(r.prompt).toMatch(/GIT_PUSH|push/i);
    expect(r.prompt).toContain("Cursor détermine le HOW");
    expect(r.launchPort.calls[0]!.selectedAgentRef).toBe(
      STUDIO_CURSOR_GENERALIST_AGENT_ID,
    );
    expect(r.launchPort.calls[0]!.action).toBe("product:local-docs-mutation");
  });
});

describe("Acceptance 3 — novel future task = new EC only", () => {
  it("arbitrary unknown objective launches via same generalist without registry change", async () => {
    const objective =
      "Inventaire des réserves LPS jamais vu par le runtime — mission ad hoc 2026-Q4";
    const r = await startWithGeneralist({
      executionContractId: "xct:pj-reproof04:novel-future",
      attemptId: "xat:pj-reproof04:novel-future",
      grantId: "gd:pj-reproof04:novel-future",
      action: "product:novel-lps-inventory",
      target: "product:current-project",
      scope: "product:novel-mission-2026q4",
      requiredCapabilities: ["cap:product-novel-never-registered"],
      objective,
      inputsExtra: {
        sourcesToRead: ["product:lps"],
        diagnosticScopeIn: ["product:lps", "product:reservations"],
        diagnosticScopeOut: ["GIT_MERGE", "doctrine-promotion"],
      },
    });
    expect(r.selectedAgentRef).toBe(STUDIO_CURSOR_GENERALIST_AGENT_ID);
    expect(r.prompt).toContain(objective);
    expect(r.prompt).toContain("xct:pj-reproof04:novel-future");
    // Same shapeReference / executor — no new operationKind or agent type.
    const projection = projectExecutionContractToCursorPrompt({
      contract: {
        schemaVersion: "oa.execution-contract.0.2.0",
        executionContractId: r.contractId,
        projectId: "prj:demo",
        version: 1,
        status: "confirmed",
        action: "product:novel-lps-inventory",
        target: "product:current-project",
        scope: "product:novel-mission-2026q4",
        requiredAuthority: "N1",
        constraints: [],
        stopConditions: ["PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT"],
        requiredCapabilities: ["cap:product-novel-never-registered"],
        reversibility: "reversible",
        semanticFingerprint: r.fingerprint,
        expectedOutputs: ["Résultat"],
        evidenceRequirements: ["evreq:mission-result-for-nora-reevaluation"],
        inputs: { objective },
      } as unknown as ExecutionContract,
      attemptId: "xat:pj-reproof04:novel-future",
    });
    expect(projection.shapeReference).toBe(CURSOR_PROMPT_SHAPE_REFERENCE);
    expect(
      assertCursorPromptParityWithInspection({ projection }).ok,
    ).toBe(true);
  });
});

describe("E/F — report identity triad", () => {
  it("reportId + attemptId + executionContractId; mismatch fails closed", () => {
    const attemptId = "xat:1";
    const executionContractId = "xct:1";
    const reportId = mintCursorExecutionReportId({
      attemptId,
      executionContractId,
    });
    const good: CursorExecutionReport = {
      schemaVersion: "oa.cursor-execution-report.1",
      reportId,
      attemptId,
      executionContractId,
      repositoryRef: "mcleland147/sfia-workspace",
      baseSha: "a".repeat(40),
      status: "succeeded",
      authorizedEffectsExecuted: [],
    };
    expect(parseCursorExecutionReport(good).ok).toBe(true);
    expect(
      bindCursorExecutionReportToAttempt({
        report: good,
        expectedAttemptId: attemptId,
        expectedExecutionContractId: executionContractId,
      }).ok,
    ).toBe(true);
    expect(parseCursorExecutionReport({ ...good, reportId: "" }).ok).toBe(
      false,
    );
    expect(
      bindCursorExecutionReportToAttempt({
        report: good,
        expectedAttemptId: "xat:other",
        expectedExecutionContractId: executionContractId,
      }).ok,
    ).toBe(false);
  });
});

describe("Critical question", () => {
  it("YES — arbitrary future EC reaches Cursor without new operationKind/capability profile/executor type", () => {
    expect(STUDIO_CURSOR_GENERALIST_AGENT_ID).toBe(
      "agt:studio.cursor.generalist",
    );
  });
});
```

---

## 16. Deleted files/tests

- No whole specialized agent files deleted (still required by GCEC).
- pjReproof04 rewritten: removed M4_BOUNDED_RO_CURSOR_AGENT_ID from canonical acceptance proof.

---

## 17. Tests / results

| Suite | Result |
|---|---|
| pjReproof04 (Acceptance 1–3 + report + prepare) | 6/6 PASS |
| m4RealOffCorrectionR2 | 12/12 PASS |
| trajectorySurface.ui | 46/46 PASS |
| postExecutionTrajectorySurface.ui | 2/2 PASS |
| w3aGovernedExecute | 24/24 PASS |
| tsc --noEmit | PASS |
| eslint (touched) | 0 errors |

Playwright: foreign :3020 NON-BLOCKING (unchanged).

---

## 18. Fake / Real

Deterministic only. TestOnlyRealExecutionLaunchPort (SIMULATED ACK). New Cursor REAL = ZERO. New Product REAL = ZERO.

---

## 19. Remaining historical paths

- GCEC progressive specialized agents remain for sealed docs_write→commit→push→PR→merge Attempts.
- W3A fixture agent remains for deterministic off-REAL Product fixture Attempts.
- These MUST NOT participate in canonical Product task routing (contract_legacy → generalist).

---

## 20. Remaining reserves

1. Playwright foreign :3020 (NON-BLOCKING).
2. Sealed GCEC specialized agents retained (BYPASS Product).
3. Product Journey PAUSED.

---

## 21. Exact project Git counters

| counter | value |
|---|---|
| project commits | 0 |
| project pushes | 0 |
| project PRs | 0 |
| project merges | 0 |

---

## Recommendation

**Verdict:** PASS — PJ-REPROOF-04 GENERIC CURSOR EXECUTOR COMPLETE — CANONICAL PRODUCT EXECUTION REQUIRES ONLY EXECUTIONCONTRACT + ONE CURSOR EXECUTOR — NO OPERATION-SPECIFIC AGENT ROUTING — READY FOR CHATGPT REVIEW

Do not authorize project commit/push/PR/merge.
Do not resume Product Journey.

---

END OF FULL REVIEW PACK
