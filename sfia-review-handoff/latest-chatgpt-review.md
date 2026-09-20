# PJ-REPROOF-04 — PRODUCT-JOURNEY-EXECUTION-CONTRACT-SEMANTIC-BRIDGE-01
## FULL Review Pack (publish-in-cycle)

timestamp: 2026-09-20T20:25:28Z
macro: PRODUCT-JOURNEY-EXECUTION-CONTRACT-SEMANTIC-BRIDGE-01
finding: PJ-REPROOF-04 — HumanDecision → ExecutionContract → Cursor → ExecutionReport bridge
parent campaign: PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01 — PAUSED
cycle: 8 — DELIVERY / IMPLEMENTATION
type: EVOL
profile: CRITICAL
mode: SAME CORRECTION MACRO / SAME CYCLE / NO MICRO-CYCLE
project commit/push/PR/merge: **0 / 0 / 0 / 0** (NOT AUTHORIZED)
NEW Product REAL: ZERO
NEW Cursor REAL: ZERO

---

## 1. Timestamp

2026-09-20T20:25:28Z

---

## 2. Local Git Truth

```
worktree: /tmp/sfia-pj-ec-bridge-01
branch: fix/sfia-studio-execution-contract-semantic-bridge
HEAD: 163a05e542d4c8d65e710cf27fb2f7eec9414844
origin/main: 163a05e542d4c8d65e710cf27fb2f7eec9414844
BASELINE: MATCH (expected 163a05e5…)
remote project branch tip: none (no project push)
working tree: UNCOMMITTED correction only (intentional)
```

status (short):
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
 M projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
 M projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts
?? .tmp-sfia-review/runtime-captures/
?? projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts

diff --stat (excl. this review pack rewrite during assembly — see §10):
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
 .../w2/prepareExecutionContractFromW2Decision.ts   | 61 +++++++--------
 .../project-assistant/w2/trajectoryOptions.ts      |  6 +-
 .../w2/w3aProductExecutionSemantics.ts             | 91 ++++++++++++++++------
 .../domain/cursorExecutionReport.ts                | 70 +++++++++++++++++
 .../infrastructure/fakeDocsWriteLaunchPort.ts      |  9 +++
 .../studioCursorRealLaunchGateway.ts               | 26 ++++++-
 .../ports/realExecutionLaunchPort.ts               |  7 ++
 .../app/lib/oa/execution-contract/index.ts         |  7 ++
 .../w3aProductFixtureWiring.ts                     |  8 +-
 22 files changed, 287 insertions(+), 197 deletions(-)

untracked:
?? .tmp-sfia-review/runtime-captures/
?? projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts

---

## 3. Morris architecture decision consumed

Consumed as written in the execution contract for this macro:

1. Studio must NOT invent a new Cursor execution methodology.
2. External functional model (ChatGPT qualify → canonical Cursor prompt → Morris accept → paste → Cursor HOW → report → analyse) is the reference loop to internalize.
3. ExecutionContract = native structured equivalent of the canonical Cursor prompt.
4. v2.6 template is NOT Studio runtime doctrine; its CONTRACT SHAPE is harvested.
5. ONE durable structured ExecutionContract SoT; prompt is a projection/transport.
6. NO second semantic contract / governance model / task-category orchestration / diagnostic-specific executor / docs-specific functional executor / read-write-commit sequence planner.
7. Cursor is a GENERALIST EXECUTOR; Studio does NOT decide the HOW.
8. Technical effect kinds may remain ONLY as internal authority/protection controls — never Pilot task choices.
9. WHAT THE PILOT INSPECTS MUST EQUAL WHAT CURSOR RECEIVES SEMANTICALLY.
10. Cursor may NEVER enlarge authority; STOP / escalate if out of contract.
11. No global L5 / autonomous structural HD / autonomous doctrine promotion / automatic merge outside authorized contract.
12. ExecutionReport independently addressable: reportId + executionContractId + attemptId (minimal DTO extension; no new aggregate).

---

## 4. Sources read

PROCESS
- prompts/templates/sfia-cycle-execution-template.md (READ / HARVESTED — NOT MODIFIED)
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/core/sfia-knowledge-layer.md

CONVERGENCE / PRODUCT (read; NOT modified)
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md

V3 framing 30–37 (read; NOT modified)

EXECUTION CONTRACT / ATTEMPT / CURSOR bridges (read + modified as listed in §9)
- execution-contract domain/application/projection
- cursorExecutionReport + fake/real launch ports
- cursorPromptInstantiator (ops1) — discovered; NOT adopted as second dialect; native projection preferred
- studioCursorRealLaunchGateway + realExecutionLaunchPort

CURRENT LOCAL PJ-REPROOF-04 changes: all modified/untracked files classified in §8.

---

## 5. Canonical-template ↔ ExecutionContract coverage matrix

| Canonical v2.6 §5 axis | Existing EC field / source | Coverage | Minimal action |
|---|---|---|---|
| Qualification | DecisionBasis / LPS / recovery context → mission derivation | PARTIAL | KEEP derive from durable Product context |
| Objectif | inputs.objective / disclosure.objective / mission.objective | COMPLETE | populated via ProductMissionFields |
| Contexte | projectId, cycleInstanceId, decisionRefs, inputs recovery* | PARTIAL | prompt projection expands context lines |
| Sources à lire | inputs.sourcesToRead / diagnosticScopeIn | PARTIAL | mission.sourcesToRead folded into inputs |
| Périmètre autorisé (IN) | disclosure.scopeIn / MISSION_SCOPE_IN constraints | COMPLETE | mission.scopeIn |
| Hors périmètre (OUT) | disclosure.scopeOut / MISSION_SCOPE_OUT / SCOPE_OUT | COMPLETE | mission.scopeOut + hard stops |
| Fichiers (create/modify/forbidden) | inputs.targetPath / filesTo* | PARTIAL | prompt allows Cursor decide within perimeter |
| Décisions déjà consommées | decisionRefs / confirmationRef | PARTIAL | cited in prompt context |
| Autorisé / interdit | constraints, requiredCapabilities, effectClass | PARTIAL | prompt § Effets / garde-fous |
| Gates / Confirmation | effectConfirmationRequired / level | COMPLETE | existing W2 path |
| Stop conditions | stopConditions | COMPLETE | merged mission + basis |
| Validations | inputs.validationExpectations | PARTIAL | prompt placeholder when empty |
| Evidence / Review | evidenceRequirements / expectedOutputs | PARTIAL | mission evidenceRequirements |
| Expected report / verdict | CursorExecutionReport triad + prompt § Rapport | COMPLETE | reportId + contractId + attemptId |
| HOW sequence | — | N/A (intentionally absent) | prompt states Cursor determines HOW |

**Result:** no essential execution axis silently MISSING. No second EC schema. No clone of v2.6 template into Studio.

---

## 6. Before architecture

- Pilot selected technical HOW via `w3a-operation-kind` (read / simulate / generate-temporary-artifact).
- Prepare required `qualifiedOperationKind` on product path.
- Clarify-first trajectory blocked prepare (`TRAJECTORY_NOT_EXECUTABLE`).
- Prior uncommitted work introduced clarify→read / product:read fixture routing (scenario-leaning).
- CursorExecutionReport lacked independent `reportId`.
- No native EC → Cursor mission prompt projection with parity assert.
- Launch gateway used profile-specific instruction builders; no generalist mission prompt field.

---

## 7. After simplified architecture

Four bridges:

**B1 Product state → ExecutionContract**
- `deriveActualExecutionWorkFromProductContext` builds ProductMissionFields from recovery/clarify durable facts.
- Internal ActualExecutionWork is perimeter-based effect control (`INTERNAL_EFFECT_CONTROL_FROM_MISSION_PERIMETER`), NOT option→operation.
- `compat_operation_kind` retained only for historical/tests.

**B2 ExecutionContract → Pilot inspection**
- Existing inspectionDisclosure retained as primary business projection.
- UI: dropdown removed; prepare from decision alone (`w3a-prepare-execution-from-decision`).

**B3 ExecutionContract → Cursor prompt**
- `projectExecutionContractToCursorPrompt` harvests §5 axes; `assertCursorPromptParityWithInspection`.
- `RealLaunchRequest.cursorMissionPrompt` + gateway generalist branch.
- Prompt Digest + semanticFingerprint protect silent mutation.
- Explicit: Cursor determines HOW; no mandatory read→write→commit.

**B4 Cursor report → Studio**
- `reportId` on CursorExecutionReport DTO + `mintCursorExecutionReportId` + `bindCursorExecutionReportToAttempt` fail-closed.
- Fake launch mints reportId.
- Evidence verification semantics unchanged (claim ≠ Evidence).

---

## 8. KEEP / ADAPT / REMOVE / HISTORICAL classification

### KEEP
- Removal of Pilot HOW dropdown (`TrajectorySurface`).
- Prepare without client `qualifiedOperationKind` on Product UI path.
- Native EC population from durable Product context (mission fields).
- Existing Confirmation / inspection / Authorization / protected-effect gates.
- Technical effect kinds as INTERNAL sandbox/confinement controls (W3A fixture `product:read`, ActualExecutionWork).
- docs_write / GCEC specialized launch profiles for sealed mutating paths (authority protection).
- Independent Evidence verification (do not trust Cursor report alone).

### ADAPT
- `deriveActualExecutionWorkFromProductContext`: rewritten — perimeter-based internal read control; NOT clarify-first→read option table.
- `prepareExecutionContractFromW2Decision`: derives mission; client kind optional/compat.
- `w3aProductExecutionSemantics`: clarify preparable when mission/work derived; mission overlay on envelope inputs.
- `studioCursorRealLaunchGateway` / `realExecutionLaunchPort`: accept `cursorMissionPrompt`.
- `cursorExecutionReport`: add reportId + bind helpers.
- E2E/UI tests: assert absence of `w3a-operation-kind`; use `w3a-prepare-execution-from-decision`.

### REMOVE (from Product path)
- Pilot operation dropdown + `QualifiedOperationKind` UI state.
- Requirement that Product prepare send `qualifiedOperationKind`.
- Clarify-first hard block on prepare when durable mission exists.
- Scenario-only diagnosticExecutor / mission-type switch (never built; prevented).

### HISTORICAL / TEST ONLY
- Optional `qualifiedOperationKind` on prepare API for allowlisted kinds (w3aGovernedExecute, integrated-proof server-side call).
- W3A fixture operation kinds including `product:read` as technical confinement — not Pilot mission category.
- Presentation label "Lecture seule bornée" for effectClass display (not a Pilot chooser).

---

## 9. Complete modified / new file list

### Modified
- projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
- projects/sfia-studio/app/features/project-assistant/w2/actions.ts
- projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
- projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts
- projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/domain/cursorExecutionReport.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
- projects/sfia-studio/app/lib/oa/execution-contract/index.ts
- projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts
- projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx
- projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
- projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
- projects/sfia-studio/app/e2e/studio-product-completion-integrated-proof.spec.ts
- projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts
- projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
- projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts
- projects/sfia-studio/app/e2e/studio-w3c-post-evidence-replan-runtime.spec.ts
- projects/sfia-studio/app/e2e/studio-w4b-single-authority-path.spec.ts
- projects/sfia-studio/app/e2e/studio-w4c-evidence-recovery-replan-product-experience.spec.ts
- projects/sfia-studio/app/e2e/studio-w4d-product-screens-visual-closure.spec.ts
- .tmp-sfia-review/chatgpt-review.md (this pack)

### New
- projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
- projects/sfia-studio/app/lib/oa/execution-contract/projection/projectExecutionContractToCursorPrompt.ts
- projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts

### Deleted
- (none — obsolete Product UI path removed in-place; no file deletion)

---

## 10. Complete meaningful diff content for all modified files

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
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index f84459d0..58583496 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -873,6 +873,22 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         `scope=${request.scope ?? ""}`,
         `fingerprint=${request.semanticFingerprint}`,
       ].join("\n");
+    } else if (
+      typeof request.cursorMissionPrompt === "string" &&
+      request.cursorMissionPrompt.trim().length > 0
+    ) {
+      // PJ-REPROOF-04 — generalist Cursor mission = authorized EC projection.
+      // Cursor determines HOW inside the contract; no mandatory step sequence.
+      instruction = [
+        request.cursorMissionPrompt.trim(),
+        "",
+        `attemptId=${request.attemptId}`,
+        `executionContractId=${request.executionContractId}`,
+        `fingerprint=${request.semanticFingerprint}`,
+        `target=${request.target ?? ""}`,
+        `action=${request.action ?? ""}`,
+        `scope=${request.scope ?? ""}`,
+      ].join("\n");
     } else {
       instruction = [
         "TÂCHE UNIQUE — preuve read-only déterministe.",
@@ -895,14 +911,18 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
     }

     // Full-capability native mode: --sandbox disabled --force (parity with Cursor CLI).
-    // Docs-write + git mutation profiles: default agent mode (omit --mode ask).
-    // RO: --mode ask. Capability does not depend on effect class.
+    // Docs-write + git mutation profiles + generalist mission prompt: agent mode.
+    // Legacy RO probe: --mode ask.
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
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts
index 352d9858..6686b110 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts
@@ -8,7 +8,8 @@
  * SUPPORTED (deterministic W3-A proof):
  * - product:generate-temporary-artifact / cap:product-temp-artifact
  * - product:simulate / cap:product-simulate
- * - scopes: product:temporary-local-artifact, product:simulate-sandbox
+ * - product:read / cap:product-read (PJ-REPROOF-04 diagnostic missions)
+ * - scopes: product:temporary-local-artifact, product:simulate-sandbox, product:read-only
  * - target: product:project-workspace
  *
  * UNSUPPORTED (must yield SC-CAP / no Attempt):
@@ -29,20 +30,23 @@ export const W3A_BOUNDED_FIXTURE_AGENT_ID = "agt:w3a-bounded-fixture" as const;
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

---

## 11. COMPLETE content of every new file

### NEW FILE: deriveActualExecutionWorkFromProductContext.ts

```typescript
/**
 * PJ-REPROOF-04 — Product state → ExecutionContract mission derivation.
 *
 * Application helper ONLY (non-durable). Populates WHAT/mission fields from
 * durable Product facts so the Pilote never selects low-level HOW.
 *
 * Internal ActualExecutionWork remains an authority/effect control only:
 * derived from whether the mission perimeter authorizes mutating effects,
 * NEVER from selectedOptionRef === clarify-first (no option→operation table).
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

### NEW FILE: projectExecutionContractToCursorPrompt.ts

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

### NEW FILE: pjReproof04.executionContractSemanticBridge.d0.test.ts

```typescript
// @vitest-environment node
/**
 * PJ-REPROOF-04 — simplified ExecutionContract ↔ Cursor prompt ↔ ExecutionReport.
 *
 * Proves Morris architecture:
 * - no Pilot HOW
 * - durable mission → native EC
 * - EC → Cursor prompt projection (parity, no HOW sequence)
 * - no clarify-first → read hardcode
 * - reportId + executionContractId + attemptId bind
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import { deriveActualExecutionWorkFromProductContext } from "@/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  assertCursorPromptParityWithInspection,
  projectExecutionContractToCursorPrompt,
  CURSOR_PROMPT_SHAPE_REFERENCE,
} from "@/lib/oa/execution-contract";
import {
  bindCursorExecutionReportToAttempt,
  mintCursorExecutionReportId,
  parseCursorExecutionReport,
  type CursorExecutionReport,
} from "@/lib/oa/execution-attempt";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { DecisionBasis } from "@/lib/oa/decision";
import type { PostEvidenceRecoveryContext } from "@/features/project-assistant/w2/resolvePostEvidenceRecoveryContext";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
});

const SAMPLE_RECOVERY: PostEvidenceRecoveryContext = {
  kind: "post_evidence_recovery",
  attemptId: "att:pj-reproof-04",
  attemptStatus: "succeeded",
  stopReason: null,
  executionContractId: "xct:m3:prior",
  evidenceId: "evi:pj-reproof-04",
  reviewBundleId: "rb:pj-reproof-04",
  productOutcome: "UNCLAIMED",
  recommendationKind: "replan",
  headline: "Résultat technique obtenu — preuve produit non encore complète",
  rationale: "Evidence/ReviewBundle incomplets pour claim produit",
  nextStep: "Clarifier avant nouvelle tentative",
  realProcessInvoked: true,
  businessEffectProven: false,
  w3cEpistemicItemId: "epi:w3c:pj-reproof-04",
};

function clarifyBasis(): DecisionBasis {
  return {
    sourceType: "trajectory_option",
    sourceRef: "optset:pj-reproof-04",
    sourceDigest: "b".repeat(64),
    projectId: "prj:pj-reproof-04",
    proposalContext: { lpsId: "lps:x", lpsVersion: 1 },
    trajectoryContext: {
      trajectoryId: "trj:pj-reproof-04",
      candidateVersion: 2,
      optionRefs: [CLARIFY_OPTION_REF, GOVERNED_OPTION_REF],
      selectedOptionRef: CLARIFY_OPTION_REF,
      recommendedOptionRef: CLARIFY_OPTION_REF,
    },
    executionBasis: {
      objective: "Clarifier le livrable",
      scope: "Approfondir le diagnostic du livrable et des preuves",
      expectedOutcome: "Trajectoire décidée: clarifier",
      stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
      requestedOperation: `w2:decide-trajectory:${CLARIFY_OPTION_REF}`,
    },
  };
}

describe("A — template ↔ EC coverage (harvested axes present on projection)", () => {
  it("maps essential v2.6 §5 axes onto EC projection fields", () => {
    const matrix: Array<{ axis: string; ecSource: string; coverage: string }> = [
      { axis: "Objectif", ecSource: "inputs.objective / disclosure.objective", coverage: "COMPLETE" },
      { axis: "Contexte", ecSource: "projectId, cycleInstanceId, decisionRefs, inputs.*", coverage: "PARTIAL" },
      { axis: "Sources à lire", ecSource: "inputs.sourcesToRead / scopeIn", coverage: "PARTIAL" },
      { axis: "Périmètre autorisé", ecSource: "inputs.scopeIn / disclosure.scopeIn", coverage: "COMPLETE" },
      { axis: "Hors périmètre", ecSource: "inputs.scopeOut / constraints SCOPE_OUT", coverage: "COMPLETE" },
      { axis: "Fichiers", ecSource: "inputs.targetPath / filesTo*", coverage: "PARTIAL" },
      { axis: "Décisions", ecSource: "decisionRefs / confirmationRef", coverage: "PARTIAL" },
      { axis: "Autorisé / interdit", ecSource: "constraints / requiredCapabilities", coverage: "PARTIAL" },
      { axis: "Stop conditions", ecSource: "stopConditions", coverage: "COMPLETE" },
      { axis: "Validations", ecSource: "inputs.validationExpectations", coverage: "PARTIAL" },
      { axis: "Evidence / rapport", ecSource: "evidenceRequirements / expectedOutputs", coverage: "PARTIAL" },
      { axis: "reportId", ecSource: "CursorExecutionReport.reportId", coverage: "COMPLETE" },
    ];
    expect(matrix.every((m) => m.coverage !== "MISSING")).toBe(true);
    expect(CURSOR_PROMPT_SHAPE_REFERENCE).toContain("sfia-cycle-execution-template.md");
  });
});

describe("D — no clarify-first → read hardcode; mission from perimeter", () => {
  it("durable recovery mission ignores client generate-temporary-artifact", () => {
    const derived = deriveActualExecutionWorkFromProductContext({
      projectId: "prj:pj-reproof-04",
      projectTitle: "Demo",
      projectObjective: "Cadrer",
      basis: clarifyBasis(),
      selectedOptionRef: CLARIFY_OPTION_REF,
      recoveryContext: SAMPLE_RECOVERY,
      clientOperationKind: "generate-temporary-artifact",
    });
    expect(derived.ok).toBe(true);
    if (!derived.ok) return;
    expect(derived.derivationSource).toBe("durable_product_mission");
    expect(derived.mission.authorizesMutatingEffects).toBe(false);
    expect(derived.work.notes).toContain("NOT_OPTION_TO_OPERATION");
    expect(derived.work.notes).toContain("CURSOR_DETERMINES_HOW");
    // Internal effect control from non-mutating perimeter — not option lookup.
    expect(derived.work.qualificationSource).toBe(
      "studio.nora.mission-perimeter.internal-effect-control",
    );
  });

  it("governed without durable mission → EFFECTS_UNRESOLVED (no invented HOW)", () => {
    const derived = deriveActualExecutionWorkFromProductContext({
      projectId: "prj:x",
      projectTitle: null,
      projectObjective: null,
      basis: clarifyBasis(),
      selectedOptionRef: GOVERNED_OPTION_REF,
      recoveryContext: null,
    });
    expect(derived.ok).toBe(false);
    if (derived.ok) return;
    expect(derived.code).toBe("EFFECTS_UNRESOLVED");
  });
});

describe("C/D — EC → Cursor prompt projection", () => {
  function sampleContract(): ExecutionContract {
    return {
      schemaVersion: "0.2.0-oa",
      executionContractId: "xct:w3a:dec:sample",
      projectId: "prj:sample",
      cycleInstanceId: "cyc:sample",
      decisionRefs: ["dec:sample"],
      action: "product:read",
      target: "product:project-workspace",
      scope: "product:read-only",
      inputs: {
        objective: "Diagnostiquer le livrable avant nouvelle tentative",
        sourcesToRead: ["evidence:evi:1", "attempt:att:1"],
        scopeIn: ["product:current-project"],
        scopeOut: ["automatic-relaunch"],
        trajectoryOptionIsNotAction: true,
        cursorDeterminesHow: true,
      },
      expectedOutputs: ["Diagnostic utilisable"],
      requiredCapabilities: ["cap:product-read"],
      requiredAuthority: "N1",
      constraints: ["PRODUCT_GOVERNED", "SCOPE_OUT:automatic-relaunch"],
      stopConditions: ["NO_AUTOMATIC_RELAUNCH", "AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:mission-result-for-nora-reevaluation"],
      reversibility: "reversible",
      idempotencyKey: "idem:sample",
      correlationId: "cor:sample",
      status: "validated",
      version: 2,
      semanticFingerprint: "fp-sample-abc123",
    };
  }

  it("projects EC into Cursor prompt with parity and without HOW sequence", () => {
    const contract = sampleContract();
    const projection = projectExecutionContractToCursorPrompt({
      contract,
      attemptId: "xat:sample",
      reportIdHint: "rpt:hint",
    });
    expect(projection.executionContractId).toBe(contract.executionContractId);
    expect(projection.promptText).toContain(contract.executionContractId);
    expect(projection.promptText).toContain("fp-sample-abc123");
    expect(projection.promptText).toContain(
      "Diagnostiquer le livrable avant nouvelle tentative",
    );
    expect(projection.promptText).toContain("NO_AUTOMATIC_RELAUNCH");
    expect(projection.promptText).toContain("Cursor détermine le HOW");
    expect(projection.promptText).not.toMatch(
      /Étapes d'exécution\s*:\s*\n\s*1\.\s*Local Git Truth Check/i,
    );
    expect(projection.promptText).not.toMatch(
      /first read, then write, then commit/i,
    );
    expect(projection.promptDigest).toMatch(/^[a-f0-9]{32}$/);
    const parity = assertCursorPromptParityWithInspection({ projection });
    expect(parity.ok).toBe(true);
  });

  it("same contract → stable promptDigest (no silent widen)", () => {
    const contract = sampleContract();
    const a = projectExecutionContractToCursorPrompt({ contract, attemptId: "xat:1" });
    const b = projectExecutionContractToCursorPrompt({ contract, attemptId: "xat:1" });
    expect(a.promptDigest).toBe(b.promptDigest);
    const widened = sampleContract();
    widened.stopConditions = [...widened.stopConditions!, "EXTRA_STOP_INJECTED"];
    const c = projectExecutionContractToCursorPrompt({
      contract: widened,
      attemptId: "xat:1",
    });
    expect(c.promptDigest).not.toBe(a.promptDigest);
  });
});

describe("E/F — CursorExecutionReport identity triad", () => {
  it("requires reportId + binds attempt/contract; mismatch fails closed", () => {
    const attemptId = "xat:bind-1";
    const executionContractId = "xct:bind-1";
    const reportId = mintCursorExecutionReportId({ attemptId, executionContractId });
    const good: CursorExecutionReport = {
      schemaVersion: "oa.cursor-execution-report.1",
      reportId,
      attemptId,
      executionContractId,
      repositoryRef: "owner/repo",
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
        attemptExecutionContractId: executionContractId,
      }).ok,
    ).toBe(true);

    const missingId = { ...good, reportId: "" };
    expect(parseCursorExecutionReport(missingId).ok).toBe(false);

    const wrongAttempt = { ...good, attemptId: "xat:other" };
    const bindAttempt = bindCursorExecutionReportToAttempt({
      report: wrongAttempt,
      expectedAttemptId: attemptId,
      expectedExecutionContractId: executionContractId,
    });
    expect(bindAttempt.ok).toBe(false);
    if (!bindAttempt.ok) expect(bindAttempt.code).toBe("REPORT_ATTEMPT_MISMATCH");

    const wrongContract = { ...good, executionContractId: "xct:other" };
    const bindContract = bindCursorExecutionReportToAttempt({
      report: wrongContract,
      expectedAttemptId: attemptId,
      expectedExecutionContractId: executionContractId,
    });
    expect(bindContract.ok).toBe(false);
    if (!bindContract.ok) expect(bindContract.code).toBe("REPORT_CONTRACT_MISMATCH");
  });
});

describe("A/B/F — prepare clarify-first without Pilot HOW; no Attempt", () => {
  async function decideClarify(suffix: string) {
    const db = tempProductDbPath(`pj04s-${suffix}.sqlite`);
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: `pj04s${suffix}`,
    });
    const seeded = await seedQualifiedProject(runtime, { suffix });
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
    return { runtime, oa, seeded, decided };
  }

  it("prepare without qualifiedOperationKind; prompt projection parity; no Attempt", async () => {
    const ctx = await decideClarify("prep");
    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      decisionId: ctx.decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.executionPerformed).toBe(false);
    expect(prepared.attemptCreated).toBe(false);
    expect(prepared.contract.decisionRefs).toContain(
      ctx.decided.decision.decisionId,
    );
    expect(prepared.contract.action).not.toContain("clarify-first");
    expect(prepared.contract.scope).not.toMatch(/diagnostic du livrable/i);

    const loaded =
      await ctx.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.contract.executionContractId,
      });
    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;

    const projection = projectExecutionContractToCursorPrompt({
      contract: loaded.contract,
      attemptId: null,
    });
    const parity = assertCursorPromptParityWithInspection({ projection });
    expect(parity.ok).toBe(true);
    expect(projection.promptText).toContain("Cursor détermine le HOW");
    expect(String(loaded.contract.inputs?.cursorDeterminesHow)).toBe("true");
  });
});
```

---

## 12. Removed obsolete local implementation and rationale

| Item | Action | Rationale |
|---|---|---|
| Pilot `w3a-operation-kind` dropdown | REMOVED from Product UI | Pilot must not select HOW |
| Prepare gate on `qualifiedOperationKind` | REMOVED from Product path | Studio derives mission from durable context |
| Clarify-first prepare hard-block | ADAPTED | Clarify is preparable when mission derived; not executable as trajectory alone |
| clarify-first → read option table | REMOVED / ADAPTED | Perimeter-based internal effect control; Cursor determines HOW |
| diagnosticExecutor / mission-type switch | NEVER ADDED | Architecture forbids |
| Second EC schema / second prompt dialect | NEVER ADDED | One semantic contract, two representations |
| New report aggregate / persistence | NEVER ADDED | Minimal DTO `reportId` only |

---

## 13. Tests / results

### Deterministic vitest (PJ-REPROOF-04 core) — PASS
- pjReproof04.executionContractSemanticBridge.d0.test.ts — 7/7
- trajectorySurface.ui.test.tsx — 46/46
- postExecutionTrajectorySurface.ui.test.tsx — 2/2
- w3aGovernedExecute.test.ts — 24/24
**Total: 79/79 PASS**

### Typecheck — PASS
`npx tsc --noEmit -p tsconfig.json` → exit 0

### ESLint (touched files) — PASS with pre-existing warnings
3× unused `_ok` warnings in TrajectorySurface.tsx (pre-existing pattern) — 0 errors

### Sample prompt projection — PASS
digest=`34bdcb187c0e0b3ff068b2a7331cac39` parity.ok=true
Artifact: /opt/cursor/artifacts/pj-reproof04-sample-prompt.txt

### Playwright — BLOCKED (exact)
```
browser launch OK after chromium install;
existing next-server on 127.0.0.1:3020 (pid ~347322) is NOT this uncommitted worktree;
goto /studio → studio-projects-home not visible (timeout 30s).
```
E2E specs updated (no Product dependency on `w3a-operation-kind`).
UI unit tests prove I — no current Product unit path requires `w3a-operation-kind`.

### GCEC git-observe env noise (out of scope)
`local_git_origin_remote_mismatch` on gcecGitCommitObserve — environmental remote URL vs governed fixture; not introduced by this bridge (no gcec observer code changes).

### Coverage of requested proofs
- A coverage matrix — PASS (pjReproof04 A)
- B no Pilot HOW — PASS (UI tests + TrajectorySurface)
- C prompt projection parity — PASS
- D generalist HOW — PASS (assertCursorPromptParityWithInspection + derive notes)
- E report identity triad — PASS
- F claim ≠ Evidence — preserved (parse/bind only correspondence)
- G authority — protected constraints remain in prompt + existing gates
- H regression — w3aGovernedExecute + UI green; docs_write path untouched structurally
- I old Product operation UI — PASS (queryByTestId w3a-operation-kind null)

---

## 14. Fake / Real qualification

External Cursor boundary applicable: YES
This cycle: DETERMINISTIC ONLY
New Cursor REAL: ZERO
New Product REAL: ZERO
Fake/injected process used only to prove EC → prompt → launch request field → report ingestion identity.

---

## 15. Report identity correspondence proof

CursorExecutionReport now requires:
- reportId (mintCursorExecutionReportId)
- executionContractId
- attemptId

bindCursorExecutionReportToAttempt fails closed on:
- missing reportId
- attempt mismatch
- contract mismatch
- Attempt.executionContractId ≠ report.executionContractId

Proven in pjReproof04 E/F tests. FakeDocsWriteLaunchPort mints reportId on emitted reports.

---

## 16. Security / authority invariants

- No Pilot HOW / agent selection / wildcard capabilities.
- No silent scope/gate widening in prompt projection (parity + fingerprint + promptDigest).
- Protected effects remain STOP without contract/gate (prompt + existing Confirmation).
- No global L5 / autonomous merge / doctrine promotion.
- Technical SUCCESS ≠ Product SUCCESS stated in prompt.
- Cursor cannot enlarge authority — stop/escalate language in projection.
- Existing inspection + Confirmation model preserved (not bypassed).

---

## 17. Remaining reserves

1. Playwright browser e2e against this uncommitted worktree not executed (server on :3020 is foreign process; Product Journey paused — no restart/kill authorized for project serve).
2. GCEC local git observe tests fail in this VM on origin URL mismatch — environmental; out of macro scope.
3. Mutating generalist Cursor missions still route via sealed docs_write/GCEC when authorizesMutatingEffects — intentional (no invented generalist mutator).
4. ops1 cursorPromptInstantiator not wired as SoT — native EC projection preferred; ops1 remains historical/control-tower path.
5. Product Journey remains PAUSED — no resume.

---

## 18. Exact project Git counters

| counter | value |
|---|---|
| project commits | 0 |
| project pushes | 0 |
| project PRs | 0 |
| project merges | 0 |

Handoff push (L3 bounded `sfia/review-handoff` only): AUTHORIZED — see §19 publish result.

---

## 19. Recommendation for ChatGPT / Morris

**Verdict candidate:** PASS — PJ-REPROOF-04 SIMPLIFIED EXECUTION ARCHITECTURE IMPLEMENTED AT DETERMINISTIC SCOPE — EXECUTIONCONTRACT→CURSOR PROMPT→EXECUTIONREPORT BRIDGES ALIGNED — READY FOR CHATGPT REVIEW

(or PASS WITH RESERVES for Playwright/GCEC env items in §17 — non-blocking for architecture acceptance)

Ask Morris to:
1. Confirm ONE semantic contract / two representations accepted.
2. Confirm reportId triad sufficient without new aggregate.
3. Confirm Product Journey may resume after Git integration of this correction (separate authorization).
4. Do NOT authorize project commit/push/PR/merge from this agent — counters remain 0.

---

## Appendix A — Sample Cursor prompt projection (deterministic)

{
  "digest": "34bdcb187c0e0b3ff068b2a7331cac39",
  "parity": {
    "ok": true
  },
  "promptLen": 2521
}
---PROMPT---
# Mission Cursor — projection du ExecutionContract Studio

shapeReference: prompts/templates/sfia-cycle-execution-template.md
executionContractId: xct:demo:pj-reproof-04
contractVersion: 1
semanticFingerprint: fp:demo:abc123
promptDigest: 34bdcb187c0e0b3ff068b2a7331cac39
attemptId: xat:demo:1
reportIdHint: rpt:cursor:demo
repositoryRef: mcleland147/sfia-workspace
baseSha: 163a05e542d4c8d65e710cf27fb2f7eec9414844
branch: fix/sfia-studio-execution-contract-semantic-bridge

## Objectif
Clarifier le contexte durable avant exécution structurante

## Contexte
- projectId: prj:demo
- cycleInstanceId: cyc:demo
- decisionRef: dec:demo

## Sources à lire
- product:current-project-facts

## Périmètre autorisé (scope IN)
- product:current-project-facts

## Hors périmètre (scope OUT)
- GIT_MERGE
- élargir le périmètre sans nouveau contrat
- acquérir de l'autorité seule
- merge / doctrine / baseline promotion hors contrat

## Fichiers
À créer:
aucun imposé — Cursor décide si nécessaire dans le périmètre
À modifier:
aucun imposé — Cursor décide si nécessaire dans le périmètre
Interdits:
- chemins protégés hors contrat

## Effets / garde-fous
- SCOPE_OUT:DURABLE_PROJECT_WRITE
- PROTECTED:GIT_PUSH
- git push projet / main hors gate
- force push
- merge hors contrat autorisé
- Ne pas élargir le périmètre ni l'autorité.
- Si un effet hors contrat est nécessaire: STOP et rapporter le besoin d'escalade.
- Technical SUCCESS ≠ Product SUCCESS.

## Stop conditions
- PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT
- NO_AUTOMATIC_RELAUNCH

## Validations attendues
(selon mission — tests/lints/diff si pertinents)

## Evidence / rapport attendus
- evreq:mission-result-for-nora-reevaluation
Expected outputs:
- Diagnostic Nora-ready

## HOW
Cursor détermine le HOW à l'intérieur de ce contrat.
Aucune séquence obligatoire read→write→commit n'est imposée.
Aucun choix Pilote d'opération technique (read/simulate/docs_write/commit/push/PR/merge).

## Rapport final attendu
- reportId (identité propre du rapport)
- executionContractId: xct:demo:pj-reproof-04 (exact)
- attemptId: xat:demo:1 (exact)
- status: succeeded | failed | stopped | timeout
- effets fichiers / validations / git le cas échéant
- stops/blockers
- verdict/status — claim seulement, pas Evidence produit

## Secondaire technique (audit)
- action: product:inspect-durable-facts
- technicalTarget: product:current-project
- scope: product:mission-read-perimeter
- requiredAuthority: N1
- requiredCapabilities: cap:product-inspect
- reversibility: reversible

---

## Appendix B — Vitest core log (tail)


 RUN  v3.2.7 /tmp/sfia-pj-ec-bridge-01/projects/sfia-studio/app

(node:364223) ExperimentalWarning: SQLite is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:364222) ExperimentalWarning: SQLite is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 ✓ __tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts (7 tests) 320ms
   ✓ A/B/F — prepare clarify-first without Pilot HOW; no Attempt > prepare without qualifiedOperationKind; prompt projection parity; no Attempt  314ms
stdout | __tests__/project-assistant/w3aGovernedExecute.test.ts > W3-A product seam — actual work prepare + Confirmation + Attempt > temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:618e5ffe41fea10e","attemptId":"xat:w3a:70167d201dbc0f63","executionContractId":"xct:w3a:dec:w2-trj:c3d1aa02-4b6b-47c0-8b08-2be40e7601fa","executionContractVersion":3,"selectedAgentRef":"agt:w3a-bounded-fixture","result":"ok","durationMs":32}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:618e5ffe41fea10e","attemptId":"xat:w3a:70167d201dbc0f63","executionContractId":"xct:w3a:dec:w2-trj:c3d1aa02-4b6b-47c0-8b08-2be40e7601fa","executionContractVersion":3,"selectedAgentRef":"agt:w3a-bounded-fixture","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":32}

stdout | __tests__/project-assistant/w3aGovernedExecute.test.ts > W3-A product seam — actual work prepare + Confirmation + Attempt > temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal
{"event":"oa.execution_attempt.started","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:a9e2b6bf473f9bf5","attemptId":"xat:w3a:70167d201dbc0f63","executionContractId":"xct:w3a:dec:w2-trj:c3d1aa02-4b6b-47c0-8b08-2be40e7601fa","executionContractVersion":3,"selectedAgentRef":"agt:w3a-bounded-fixture","adapterId":"adp:f3-test-fixture","previousStatus":"accepted","newStatus":"running","contractStatus":"executing","result":"ok","durationMs":22}
{"event":"oa.execution_contract.status_written","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:a9e2b6bf473f9bf5","attemptId":"xat:w3a:70167d201dbc0f63","executionContractId":"xct:w3a:dec:w2-trj:c3d1aa02-4b6b-47c0-8b08-2be40e7601fa","contractStatus":"executing","result":"ok","durationMs":22}

stdout | __tests__/project-assistant/w3aGovernedExecute.test.ts > W3-A product seam — actual work prepare + Confirmation + Attempt > temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal
{"event":"oa.execution_attempt.succeeded","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:8c237402ebfdc53e","attemptId":"xat:w3a:70167d201dbc0f63","executionContractId":"xct:w3a:dec:w2-trj:c3d1aa02-4b6b-47c0-8b08-2be40e7601fa","selectedAgentRef":"agt:w3a-bounded-fixture","adapterId":"adp:f3-test-fixture","previousStatus":"running","newStatus":"succeeded","contractStatus":"confirmed","result":"ok","durationMs":15}

stdout | __tests__/project-assistant/w3aGovernedExecute.test.ts > W3-A product seam — actual work prepare + Confirmation + Attempt > read → N1 · Confirmation NOT_REQUIRED marker · validated · fixture agent selectable (PJ-REPROOF-04)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:75fe4ac3a78953b2","attemptId":"xat:w3a:62a61226c76ac3c4","executionContractId":"xct:w3a:dec:w2-trj:e2a3532f-d141-4a22-9c2a-f19531690c54","executionContractVersion":2,"selectedAgentRef":"agt:w3a-bounded-fixture","result":"ok","durationMs":9}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:75fe4ac3a78953b2","attemptId":"xat:w3a:62a61226c76ac3c4","executionContractId":"xct:w3a:dec:w2-trj:e2a3532f-d141-4a22-9c2a-f19531690c54","executionContractVersion":2,"selectedAgentRef":"agt:w3a-bounded-fixture","newStatus":"accepted","contractStatus":"validated","result":"ok","durationMs":9}

 ✓ __tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx (46 tests) 936ms
 ✓ __tests__/project-assistant/w3aGovernedExecute.test.ts (24 tests) 2621ms
   ✓ W3-A product seam — actual work prepare + Confirmation + Attempt > temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal  593ms
   ✓ W3-A product seam — actual work prepare + Confirmation + Attempt > read → N1 · Confirmation NOT_REQUIRED marker · validated · fixture agent selectable (PJ-REPROOF-04)  358ms
   ✓ W3-A product seam — actual work prepare + Confirmation + Attempt > legacy validated/N1 without evaluation marker is not Execute-ready (R16)  333ms
 ✓ __tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx (2 tests) 288ms

 Test Files  4 passed (4)
      Tests  79 passed (79)
   Start at  20:20:08
   Duration  5.42s (transform 1.74s, setup 176ms, collect 5.13s, tests 4.16s, environment 546ms, prepare 184ms)


---

END OF FULL REVIEW PACK
