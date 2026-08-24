# SFIA Studio — W3-A R16 Reserved Confirmation + R09 Visual Lifecycle — FULL Review Pack

## Identity
- timestamp Europe/Paris: 2026-08-24T08:45:14+0200
- timestamp UTC: 2026-08-24T06:45:14Z
- repo: /Users/morris/Projects/sfia-workspace
- branch: delivery/sfia-studio-product-completion-w3-a-governed-execute
- HEAD: 3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed
- origin/main: 3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed
- merge-base: 3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed

## Input handoff
- commit: 71cc05f064cf62138ab070c8b28d3ce029ae6ad3
- expected blob: 449d217fff6e5812302373a61b08f6544520df1c
- MATCH: 449d217fff6e5812302373a61b08f6544520df1c

## Morris decisions consumed
- GO MORRIS — W3-A TARGETED CORRECTION — CLOSE REMAINING CHATGPT BLOCKERS R16 + R09
- Prior W3 delivery / R01 / B2-B3 / R13-R16+R09-R decisions (not reopened)

## W3/W4 Boundary Check
- US-P1-10 Product Experience global: NOT TOUCHED
- US-P1-13 Accessibility baseline: NOT TOUCHED
- S1→S12 global closure: NOT TOUCHED
- Global UAT: NOT STARTED
- Design/Figma/Penpot: NOT TOUCHED
- Responsive/polish sweep: NOT PERFORMED
- UI product change: Playwright harness only (no TrajectorySurface semantic change this cycle)

## Files modified
M	projects/sfia-studio/app/__tests__/oa/execution-contract/executionContractGovernance.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/w2/actions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
M	projects/sfia-studio/app/features/project-assistant/w2/types.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/attemptSupport.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md

## Diff stat
 .../executionContractGovernance.test.ts            | 134 +++++++++
 .../trajectorySurface.ui.test.tsx                  |  82 ++++--
 .../preM6.realProductWiringAmend.test.ts           |   6 +-
 .../app/__tests__/project-assistant/w2Harness.ts   |   4 +-
 .../importBoundaries.test.ts                       |   3 +
 .../surfaces/TrajectorySurface.module.css          |  11 +
 .../surfaces/TrajectorySurface.tsx                 | 325 +++++++++++++++++++--
 .../app/features/project-assistant/w2/actions.ts   | 187 +++++++++++-
 .../project-assistant/w2/amendExecutionContract.ts |  23 +-
 .../w2/authorizeExecutionContract.ts               |  44 ++-
 .../w2/confirmForAuthorization.ts                  |  45 +--
 .../app/features/project-assistant/w2/types.ts     |  94 ++++++
 .../application/attemptSupport.ts                  |  10 +-
 .../application/executionContractStatusWriter.ts   |  22 +-
 .../app/lib/oa/execution-attempt/index.ts          |   2 +-
 .../sqlite/createSqliteExecutionAttemptServices.ts |   2 +-
 .../application/checkExecutionAuthorization.ts     |  22 +-
 .../application/confirmExecutionContract.ts        |  13 +-
 .../application/validateExecutionContract.ts       |  28 +-
 .../lib/oa/execution-contract/domain/invariants.ts | 125 +++++++-
 .../app/lib/vertical-slice-runtime/service.ts      |  12 +-
 .../convergence/sfia-studio-convergence-roadmap.md |  27 +-
 22 files changed, 1074 insertions(+), 147 deletions(-)

## R16-A — isExecutionReadyStatus order
1. hasConfirmationConstraintContradiction => false
2. confirmed (coherent) => true
3. validated+N1+NOT_REQUIRED marker => true
4. else false

## R16-B — reserved namespaces
- EXECUTION_CONFIRMATION_EVALUATED:*
- EFFECT_CONFIRMATION_REQUIRED*
- Guard at amendExecutionContractWithConstraint via assertUserAmendableExecutionConstraint

## R09 harness
- Playwright route latch on Next-Action POSTs after Execute
- POST #1 Select passes; POST #2 Start held until accepted screenshot; POST #3 Complete held until running screenshot
- No product setTimeout/sleep; no forged DOM/state

## R09 manifest
{"id":"01-studio-home","file":"01-studio-home.png","screen":"TrajectorySurface","state":"after_w2_decision","route":"http://127.0.0.1:3020/studio/projects/prj%3A4dfaa774-9f57-4038-842f-887be7f3b7cb","timestamp":"2026-08-24T06:44:19.208Z","sha256":"d8a2efd7639000942ebb01f30f5abe5a789ebf186c046fbc85c79ecaec45aca5","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF"}
{"id":"02-actual-work-qualified","file":"02-actual-work-qualified.png","screen":"TrajectorySurface","state":"actual_work_temp_artifact","route":"http://127.0.0.1:3020/studio/projects/prj%3A4dfaa774-9f57-4038-842f-887be7f3b7cb","timestamp":"2026-08-24T06:44:19.336Z","sha256":"023c536459ce4784682aadd0a97e0464cfdbc9acc61e4ef30f3a3f5ecff35608","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF"}
{"id":"03-execution-contract-n1-confirm-required","file":"03-execution-contract-n1-confirm-required.png","screen":"TrajectorySurface","state":"ec_prepared_temp_artifact_n1_confirmation_required","route":"http://127.0.0.1:3020/studio/projects/prj%3A4dfaa774-9f57-4038-842f-887be7f3b7cb","timestamp":"2026-08-24T06:44:19.556Z","sha256":"2e2a80565b47c69c449cbeb118068be0714243a2580c42583da43a58b0396f58","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF"}
{"id":"04-inspected","file":"04-inspected.png","screen":"TrajectorySurface","state":"inspected_confirmation_required","route":"http://127.0.0.1:3020/studio/projects/prj%3A4dfaa774-9f57-4038-842f-887be7f3b7cb","timestamp":"2026-08-24T06:44:19.755Z","sha256":"c893fc22efef4d341097ed4e101dcc3e2457d2e4ab83efb863c311309256d240","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF"}
{"id":"05-confirmed","file":"05-confirmed.png","screen":"TrajectorySurface","state":"effect_confirmation_n1_granted","route":"http://127.0.0.1:3020/studio/projects/prj%3A4dfaa774-9f57-4038-842f-887be7f3b7cb","timestamp":"2026-08-24T06:44:19.954Z","sha256":"62fe823a48b0209638d80150ae5320bd1ce1270715a3d87b9d321e366dce3a24","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF"}
{"id":"06-authorized","file":"06-authorized.png","screen":"TrajectorySurface","state":"authorized_stop_before_execute","route":"http://127.0.0.1:3020/studio/projects/prj%3A4dfaa774-9f57-4038-842f-887be7f3b7cb","timestamp":"2026-08-24T06:44:20.157Z","sha256":"b912b15dc7aae6d7ae9949e501ce32f83030a9fda007279effae9f552734b7f9","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF"}
{"id":"07-attempt-accepted","file":"07-attempt-accepted.png","screen":"TrajectorySurface","state":"accepted","phaseHistory":"accepted","lifecycleAtCapture":"accepted","route":"http://127.0.0.1:3020/studio/projects/prj%3A4dfaa774-9f57-4038-842f-887be7f3b7cb","timestamp":"2026-08-24T06:44:20.395Z","sha256":"9a0d381faf4da33516c87e4a465c8096cd0284801096b09e8dc60738ee3be300","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF"}
{"id":"08-attempt-running","file":"08-attempt-running.png","screen":"TrajectorySurface","state":"running","phaseHistory":"accepted|running","lifecycleAtCapture":"running","route":"http://127.0.0.1:3020/studio/projects/prj%3A4dfaa774-9f57-4038-842f-887be7f3b7cb","timestamp":"2026-08-24T06:44:20.562Z","sha256":"fd48a3be06075220ab860a4493a6faa1f52851963c14a6b0fc5f961cf43a2e01","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF"}
{"id":"09-attempt-terminal","file":"09-attempt-terminal.png","screen":"TrajectorySurface","state":"terminal","phaseHistory":"accepted|running|terminal","lifecycleAtCapture":"terminal","route":"http://127.0.0.1:3020/studio/projects/prj%3A4dfaa774-9f57-4038-842f-887be7f3b7cb","timestamp":"2026-08-24T06:44:20.748Z","sha256":"ad74c479f8c1f60f6cbf24376cab9265a53d44d3f7788c8214c48ee0f36aee80","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF"}
{"id":"10-blocked-no-actual-work","file":"10-blocked-no-actual-work.png","screen":"TrajectorySurface","state":"blocked_no_actual_work_no_execute","route":"http://127.0.0.1:3020/studio/projects/prj%3Abd193a5a-2d8c-4cab-8918-7292ddd48500","timestamp":"2026-08-24T06:44:21.919Z","sha256":"27874093cf2f25475bc8bf3c0d3fe42c245c6d2e838f50468e7cf4978b5198c5","provenance":"CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF"}

## R09 visual descriptions
- 07 accepted: lifecycle=accepted, phaseHistory=accepted, bar ACCEPTÉE active
- 08 running: lifecycle=running, phaseHistory=accepted|running, bar EN COURS active
- 09 terminal: lifecycle=terminal, phaseHistory=accepted|running|terminal, bar TERMINÉE active

## Validations
- tsc: PASS
- lint: PASS
- build: PASS
- vitest: 2026 passed / 131 skipped (225 files)
- w3aGovernedExecute: 24 passed
- Playwright W3-A: 2/2 passed

## Fake/Real
- TestExecutionAdapter only fake boundary
- DETERMINISTIC PRODUCT-NATIVE PROVEN CANDIDATE
- REAL OUT

## Verdict
W3-A R16/R09 CORRECTION CANDIDATE — READY FOR CHATGPT RE-REVIEW

## Unified diffs
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-contract/executionContractGovernance.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-contract/executionContractGovernance.test.ts
index e1c2abca..88fb442f 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-contract/executionContractGovernance.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-contract/executionContractGovernance.test.ts
@@ -3,6 +3,11 @@
  * @vitest-environment node
  */
 import { describe, expect, it } from "vitest";
+import {
+  EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
+  hasConfirmationConstraintContradiction,
+  isExecutionReadyStatus,
+} from "@/lib/oa/execution-contract";
 import {
   baseBuildRequest,
   buildStack,
@@ -387,6 +392,135 @@ describe("T-A4 ConfirmExecutionContract", () => {
   });
 });

+describe("T-A4 R16 reserved Confirmation semantics", () => {
+  it("isExecutionReadyStatus rejects confirmed when contradictory markers present", () => {
+    expect(
+      isExecutionReadyStatus({
+        status: "confirmed",
+        requiredAuthority: "N1",
+        constraints: [
+          EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
+          "EFFECT_CONFIRMATION_REQUIRED:N1",
+        ],
+      }),
+    ).toBe(false);
+    expect(
+      hasConfirmationConstraintContradiction([
+        EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
+        "EFFECT_CONFIRMATION_REQUIRED:N1",
+      ]),
+    ).toBe(true);
+  });
+
+  it("ValidateExecutionContract rejects contradictory Confirmation constraints", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    registerN1(stack.decisions.authority);
+    await seedAcceptedDecision(stack);
+
+    const built = await stack.execution.buildExecutionContract.execute(
+      baseBuildRequest({
+        requiredAuthority: "N1",
+        actor: N1_ACTOR,
+        authorityEvidenceId: "evd:n1",
+        constraints: ["test-only-contradiction-setup"],
+      }),
+    );
+    expect(built.ok).toBe(true);
+    if (!built.ok) return;
+    await stack.execution.contracts.save({
+      ...built.contract,
+      constraints: [
+        EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
+        "EFFECT_CONFIRMATION_REQUIRED:N1",
+      ],
+    });
+
+    const validated = await stack.execution.validateExecutionContract.execute({
+      executionContractId: built.contract.executionContractId,
+      expectedVersion: built.contract.version,
+      actor: N1_ACTOR,
+    });
+    expect(validated.ok).toBe(false);
+    if (validated.ok) return;
+    expect(validated.error.detailCode).toBe("CONTRACT_INVALID");
+  });
+
+  it("ConfirmExecutionContract rejects contradictory Confirmation constraints", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    registerMorris(stack.decisions.authority);
+    await seedAcceptedDecision(stack);
+    await seedStandardCycle(stack);
+
+    const built = await stack.execution.buildExecutionContract.execute(
+      baseBuildRequest({
+        constraints: ["test-only-contradiction-setup"],
+      }),
+    );
+    expect(built.ok).toBe(true);
+    if (!built.ok) return;
+    await stack.execution.contracts.save({
+      ...built.contract,
+      status: "confirmation_required",
+      constraints: [
+        EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
+        "EFFECT_CONFIRMATION_REQUIRED:N3",
+      ],
+    });
+
+    const cfmId = await grantConfirmation(stack);
+    const confirmed = await stack.execution.confirmExecutionContract.execute({
+      executionContractId: built.contract.executionContractId,
+      confirmationId: cfmId,
+      expectedVersion: built.contract.version,
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: "evd:morris-n3",
+    });
+    expect(confirmed.ok).toBe(false);
+    if (confirmed.ok) return;
+    expect(confirmed.error.detailCode).toBe("CONTRACT_INVALID");
+  });
+
+  it("CheckExecutionAuthorization blocks contradictory Confirmation constraints", async () => {
+    const stack = buildStack();
+    await seedProject(stack.projects);
+    registerMorris(stack.decisions.authority);
+    await seedAcceptedDecision(stack);
+    await seedStandardCycle(stack);
+
+    const built = await stack.execution.buildExecutionContract.execute(
+      baseBuildRequest({
+        constraints: ["test-only-contradiction-setup"],
+      }),
+    );
+    expect(built.ok).toBe(true);
+    if (!built.ok) return;
+    await stack.execution.contracts.save({
+      ...built.contract,
+      status: "confirmed",
+      version: built.contract.version + 1,
+      constraints: [
+        EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
+        "EFFECT_CONFIRMATION_REQUIRED:N3",
+      ],
+    });
+
+    const authz = await stack.execution.checkExecutionAuthorization.execute({
+      executionContractId: built.contract.executionContractId,
+      action: built.contract.action,
+      target: built.contract.target,
+      scope: built.contract.scope,
+      actor: MORRIS_ACTOR,
+      authorityEvidenceId: "evd:morris-n3",
+    });
+    expect(authz.ok).toBe(false);
+    if (authz.ok) return;
+    expect(authz.authorized).toBe(false);
+    expect(authz.error.detailCode).toBe("CONTRACT_INVALID");
+  });
+});
+
 describe("T-A4 Get / List", () => {
   it("gets and lists history including superseded lineage", async () => {
     const stack = buildStack();
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
index 681c6621..77fac3c7 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
@@ -9,12 +9,20 @@ const {
   inspectMock,
   authorizeMock,
   amendMock,
+  prepareContractMock,
+  executeSelectMock,
+  executeStartMock,
+  executeCompleteMock,
 } = vi.hoisted(() => ({
   proposeMock: vi.fn(),
   decideMock: vi.fn(),
   inspectMock: vi.fn(),
   authorizeMock: vi.fn(),
   amendMock: vi.fn(),
+  prepareContractMock: vi.fn(),
+  executeSelectMock: vi.fn(),
+  executeStartMock: vi.fn(),
+  executeCompleteMock: vi.fn(),
 }));

 vi.mock("@/features/project-assistant/w2/actions", () => ({
@@ -25,6 +33,14 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   w2AuthorizeExecutionContractAction: (...args: unknown[]) =>
     authorizeMock(...args),
   w2AmendExecutionContractAction: (...args: unknown[]) => amendMock(...args),
+  w2PrepareExecutionContractAction: (...args: unknown[]) =>
+    prepareContractMock(...args),
+  w2GovernedExecuteSelectAction: (...args: unknown[]) =>
+    executeSelectMock(...args),
+  w2GovernedExecuteStartAction: (...args: unknown[]) =>
+    executeStartMock(...args),
+  w2GovernedExecuteCompleteAction: (...args: unknown[]) =>
+    executeCompleteMock(...args),
   w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
     ok: false,
     code: "UNUSED",
@@ -32,10 +48,6 @@ vi.mock("@/features/project-assistant/w2/actions", () => ({
   }),
 }));

-vi.mock("@/features/project-assistant/actions", () => ({
-  projectAssistantPrepareM3Action: vi.fn(),
-}));
-
 afterEach(() => {
   cleanup();
 });
@@ -46,6 +58,10 @@ beforeEach(() => {
   inspectMock.mockReset();
   authorizeMock.mockReset();
   amendMock.mockReset();
+  prepareContractMock.mockReset();
+  executeSelectMock.mockReset();
+  executeStartMock.mockReset();
+  executeCompleteMock.mockReset();
 });

 describe("W2 TrajectorySurface", () => {
@@ -192,36 +208,48 @@ describe("W2 TrajectorySurface", () => {
       }),
     );

-    const { projectAssistantPrepareM3Action } = await import(
-      "@/features/project-assistant/actions"
-    );
-    vi.mocked(projectAssistantPrepareM3Action).mockResolvedValue({
+    prepareContractMock.mockResolvedValue({
       ok: true,
-      f3: {
-        contract: {
-          executionContractId: "xct:w2-ui",
-          version: 1,
-          status: "confirmation_required",
-          action: "w2:inspect-only",
-          target: "studio",
-          scope: "w2-ui",
-          requiredAuthority: "MORRIS",
-          constraints: ["AUCUNE EXÉCUTION"],
-          stopConditions: ["STOP AVANT EXECUTE"],
-          requiredCapabilities: ["cap:f3-fixture-docs"],
-          reversibility: "reversible",
-          semanticFingerprint: "abc123def456",
-        },
+      decisionId: "dec:w2-ui",
+      f3SemanticOverwrite: false,
+      executionPerformed: false,
+      attemptCreated: false,
+      contract: {
+        executionContractId: "xct:w2-ui",
+        version: 1,
+        status: "confirmation_required",
+        action: "product:generate-temporary-artifact",
+        target: "product:project-workspace",
+        scope: "product:temporary-local-artifact",
+        requiredAuthority: "N1",
+        constraints: [
+          "PRODUCT_GOVERNED",
+          "EFFECT_CLASS:generate-temporary-artifact",
+          "EFFECT_CONFIRMATION_REQUIRED:N1",
+        ],
+        stopConditions: ["EFFECTS_UNRESOLVED"],
+        requiredCapabilities: ["cap:product-temp-artifact"],
+        reversibility: "reversible",
+        semanticFingerprint: "abc123def456",
+        effectClass: "generate-temporary-artifact",
+        effectConfirmationRequired: true,
+        effectConfirmationLevel: "N1",
       },
-    } as never);
+    });

+    fireEvent.change(screen.getByTestId("w3a-operation-kind"), {
+      target: { value: "generate-temporary-artifact" },
+    });
     fireEvent.click(screen.getByTestId("w2-prepare-contract"));
     expect(await screen.findByTestId("w2-contract")).toBeVisible();
     expect(screen.getByTestId("w2-contract-action")).toHaveTextContent(
-      "w2:inspect-only",
+      "product:generate-temporary-artifact",
+    );
+    expect(screen.getByTestId("w2-contract-scope")).toHaveTextContent(
+      "product:temporary-local-artifact",
     );
     expect(screen.getByTestId("w2-contract-capabilities")).toHaveTextContent(
-      "cap:f3-fixture-docs",
+      "cap:product-temp-artifact",
     );
     // E3 — Confirmation affordance requires sufficient inspection, not mere presence.
     expect(screen.getByTestId("w2-confirm-contract")).toBeDisabled();
@@ -456,5 +484,7 @@ describe("W2 TrajectorySurface", () => {
     expect(screen.getByTestId("w2-confirmation-state")).toHaveTextContent(
       "CONFIRMATION REQUISE — MANQUANTE",
     );
+    // W3-A: BLOCKED must not expose Execute CTA.
+    expect(screen.queryByTestId("w3a-governed-execute")).toBeNull();
   });
 });
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
index 378f617a..ea3d6a3c 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
@@ -252,9 +252,9 @@ describe("Cycle 8 — Pre-M6 REAL product wiring amend", () => {
       runtime.oa!.executionAttemptServices.grantRealExecutionGate,
     ).toBeUndefined();
     const agents = runtime.oa!.executionAttemptServices.registry.listAgents();
-    expect(
-      agents.map((a) => a.agentId),
-    ).toEqual(["agt:f3-fixture"]);
+    expect(agents.map((a) => a.agentId).sort()).toEqual(
+      ["agt:f3-fixture", "agt:w3a-bounded-fixture"].sort(),
+    );
     expect(runtime.oa!.fixtureAdapter.adapterId).toBe(F3_ADAPTER_ID);

     const seeded = await seedGo(runtime, "t1");
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
index cfbb6b1e..dd214a87 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
@@ -209,7 +209,7 @@ export async function proposeW2OptionsForProject(
   });
 }

-/** F2 context snapshot expected by the F3 prepare/resolve product path. */
+/** F2 context snapshot expected by the W3-A FC-08 prepare path. */
 export async function currentF2Context(
   runtime: RuntimeApplicationService,
   projectId: string,
@@ -219,6 +219,7 @@ export async function currentF2Context(
   lpsVersion: number;
   doctrineDigest: string;
   activeCycleInstanceId: string | null;
+  ckcResolutionRef?: string;
 }> {
   const overview = await runtime.getProject(projectId);
   if (!overview.ok) throw new Error("context: getProject failed");
@@ -228,5 +229,6 @@ export async function currentF2Context(
     lpsVersion: overview.livingState.version,
     doctrineDigest: overview.doctrine.digest,
     activeCycleInstanceId: overview.livingState.activeCycleInstanceId ?? null,
+    ckcResolutionRef: "ckcres:w2-harness",
   };
 }
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 5363c98a..6d462a38 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -85,11 +85,14 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/f3/e2eOptionATerminalAttempt.ts:@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl",
       "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/actions.ts:@/lib/vertical-slice-runtime/liveProjectContext",
       "features/project-assistant/w2/amendExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/authorizeExecutionContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/confirmForAuthorization.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/decideTrajectory.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/governedExecuteAuthorizedContract.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/inspectExecutionContract.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/presentedOptionSet.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/projectHistory.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/proposeTrajectoryOptions.ts:@/lib/vertical-slice-runtime",
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
index 2c6e756f..6b063a75 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
@@ -270,6 +270,17 @@
   background: var(--pm6-warn-tint);
 }

+.attempt {
+  border-color: var(--pm6-border-soft);
+  background: var(--pm6-surface);
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  padding: var(--pm6-space-4);
+  border: 1px solid var(--pm6-border-soft);
+  border-radius: var(--pm6-radius-md, 8px);
+}
+
 .stopNotice {
   margin: 0;
   font-size: 0.78rem;
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 6408b737..9cdc3fd3 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -1,24 +1,26 @@
 "use client";

 /**
- * W2 product surface — Options, Recommendation, HumanDecision, decided
- * trajectory, contract inspection and effective authority.
+ * W2 / W3-A product surface — Options, Recommendation, HumanDecision, decided
+ * trajectory, contract inspection, effective authority, and (W3-A) fixture
+ * governed Execute after AUTHORIZED.
  *
  * The surface never derives truth: every state shown here comes from a server
- * action over the product application path. Distinctions the Pilote must see
- * are carried by explicit labels — an Option is labelled OPTION, a
- * Recommendation states it is not a decision, and the authority verdict states
- * that nothing is executed.
+ * action over the product application path.
  */

 import { useCallback, useState } from "react";
-import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
+import { flushSync } from "react-dom";
 import {
   w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
   w2ConfirmExecutionContractAction,
   w2DecideTrajectoryAction,
+  w2GovernedExecuteCompleteAction,
+  w2GovernedExecuteSelectAction,
+  w2GovernedExecuteStartAction,
   w2InspectExecutionContractAction,
+  w2PrepareExecutionContractAction,
   w2ProposeTrajectoryOptionsAction,
 } from "@/features/project-assistant/w2/actions";
 import type {
@@ -26,11 +28,16 @@ import type {
   ContractInspectionStateDto,
   DecidedTrajectoryDto,
   ExecutionAuthorizationOutcomeDto,
+  GovernedExecuteAttemptProjection,
+  GovernedExecutePhaseSuccess,
   TrajectoryDecisionRecordDto,
   TrajectoryOptionSetDto,
 } from "@/features/project-assistant/w2/types";
 import styles from "./TrajectorySurface.module.css";

+/** Explicit Pilot-qualified operation — never inferred from W2 trajectory alone. */
+type QualifiedOperationKind = "generate-temporary-artifact" | "simulate" | "read";
+
 type PreparedContract = {
   readonly executionContractId: string;
   readonly version: number;
@@ -44,6 +51,8 @@ type PreparedContract = {
   readonly requiredCapabilities: readonly string[];
   readonly reversibility: string;
   readonly semanticFingerprint: string;
+  readonly effectConfirmationRequired?: boolean;
+  readonly effectConfirmationLevel?: string | null;
 };

 type AmendmentNotice = {
@@ -57,11 +66,27 @@ type Busy =
   | null
   | "options"
   | "decision"
+  | "qualify"
   | "contract"
   | "inspection"
   | "confirmation"
   | "authorization"
-  | "amendment";
+  | "amendment"
+  | "execute";
+
+/**
+ * Yield so React can commit and the browser can paint each Attempt phase.
+ * Double rAF only — no fixed-duration sleep / business latency (R09-R).
+ */
+function yieldBrowserPaint(): Promise<void> {
+  return new Promise((resolve) => {
+    requestAnimationFrame(() => {
+      requestAnimationFrame(() => {
+        resolve();
+      });
+    });
+  });
+}

 export function TrajectorySurface({
   projectId,
@@ -87,6 +112,33 @@ export function TrajectorySurface({
   const [amendmentDraft, setAmendmentDraft] = useState("");
   const [amendmentNotice, setAmendmentNotice] =
     useState<AmendmentNotice | null>(null);
+  const [attempt, setAttempt] =
+    useState<GovernedExecuteAttemptProjection | null>(null);
+  const [attemptPhase, setAttemptPhase] = useState<
+    GovernedExecutePhaseSuccess["phase"] | null
+  >(null);
+  /** Append-only paint trail — proves R09 sequence even with a sync adapter. */
+  const [attemptPhaseHistory, setAttemptPhaseHistory] = useState<string[]>([]);
+  const [attemptStatusLabel, setAttemptStatusLabel] = useState<string | null>(
+    null,
+  );
+  const [qualifiedOperationKind, setQualifiedOperationKind] =
+    useState<QualifiedOperationKind | null>(null);
+
+  function paintAttemptPhase(
+    phase: GovernedExecutePhaseSuccess["phase"],
+    nextAttempt: GovernedExecuteAttemptProjection | null,
+    statusLabel: string | null,
+  ): void {
+    flushSync(() => {
+      if (nextAttempt) setAttempt(nextAttempt);
+      setAttemptPhase(phase);
+      if (statusLabel !== null) setAttemptStatusLabel(statusLabel);
+      setAttemptPhaseHistory((prev) =>
+        prev[prev.length - 1] === phase ? prev : [...prev, phase],
+      );
+    });
+  }

   const proposeOptions = useCallback(async () => {
     setBusy("options");
@@ -106,6 +158,9 @@ export function TrajectorySurface({
     setAuthorization(null);
     setAmendmentDraft("");
     setAmendmentNotice(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
   }, [projectId, onDurableFactsChanged]);

@@ -134,40 +189,45 @@ export function TrajectorySurface({
   );

   const prepareContract = useCallback(async () => {
-    if (!decision) return;
+    if (!decision || !qualifiedOperationKind) return;
     setBusy("contract");
     setError(null);
-    const result = await projectAssistantPrepareM3Action({
+    const result = await w2PrepareExecutionContractAction({
       projectId,
       decisionId: decision.decisionId,
+      qualifiedOperationKind,
     });
     setBusy(null);
     if (!result.ok) {
       setError(result.message);
       return;
     }
+    const prepared = result.contract;
     setContract({
-      executionContractId: result.f3.contract.executionContractId,
-      version: result.f3.contract.version,
-      status: result.f3.contract.status,
-      action: result.f3.contract.action,
-      target: result.f3.contract.target,
-      scope: result.f3.contract.scope,
-      requiredAuthority: result.f3.contract.requiredAuthority,
-      constraints: [...(result.f3.contract.constraints ?? [])],
-      stopConditions: [...(result.f3.contract.stopConditions ?? [])],
-      requiredCapabilities: [
-        ...(result.f3.contract.requiredCapabilities ?? []),
-      ],
-      reversibility: result.f3.contract.reversibility ?? "non précisée",
-      semanticFingerprint: result.f3.contract.semanticFingerprint,
+      executionContractId: prepared.executionContractId,
+      version: prepared.version,
+      status: prepared.status,
+      action: prepared.action,
+      target: prepared.target,
+      scope: prepared.scope,
+      requiredAuthority: prepared.requiredAuthority,
+      constraints: [...prepared.constraints],
+      stopConditions: [...prepared.stopConditions],
+      requiredCapabilities: [...prepared.requiredCapabilities],
+      reversibility: prepared.reversibility,
+      semanticFingerprint: prepared.semanticFingerprint,
+      effectConfirmationRequired: prepared.effectConfirmationRequired,
+      effectConfirmationLevel: prepared.effectConfirmationLevel ?? null,
     });
     setInspection(null);
     setAuthorization(null);
     setAmendmentDraft("");
     setAmendmentNotice(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
     onDurableFactsChanged?.();
-  }, [decision, projectId, onDurableFactsChanged]);
+  }, [decision, projectId, qualifiedOperationKind, onDurableFactsChanged]);

   const inspect = useCallback(async () => {
     if (!contract) return;
@@ -229,6 +289,9 @@ export function TrajectorySurface({
     });
     setInspection(amended.successorInspection);
     setAuthorization(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptStatusLabel(null);
     setAmendmentDraft("");
     setAmendmentNotice({
       priorExecutionContractId: amended.priorExecutionContractId,
@@ -266,6 +329,10 @@ export function TrajectorySurface({
     if (!contract) return;
     setBusy("authorization");
     setError(null);
+    setAttempt(null);
+    setAttemptPhase(null);
+    setAttemptPhaseHistory([]);
+    setAttemptStatusLabel(null);
     const result = await w2AuthorizeExecutionContractAction({
       projectId,
       executionContractId: contract.executionContractId,
@@ -280,6 +347,77 @@ export function TrajectorySurface({
     setInspection(outcome.inspection);
   }, [contract, projectId]);

+  const governedExecute = useCallback(async () => {
+    if (!contract || authorization?.outcome !== "AUTHORIZED") return;
+    setBusy("execute");
+    setError(null);
+    flushSync(() => {
+      setAttempt(null);
+      setAttemptPhase(null);
+      setAttemptPhaseHistory([]);
+      setAttemptStatusLabel(null);
+    });
+
+    const selected = await w2GovernedExecuteSelectAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+    });
+    if (!selected.ok) {
+      setBusy(null);
+      setError(selected.message);
+      if (selected.attempt) {
+        paintAttemptPhase("accepted", selected.attempt, null);
+      }
+      return;
+    }
+    // Paint accepted before start (R09 observability — yield to browser).
+    paintAttemptPhase(selected.phase, selected.attempt, selected.statusLabel);
+    await yieldBrowserPaint();
+
+    if (selected.phase === "terminal") {
+      setBusy(null);
+      paintAttemptPhase("terminal", selected.attempt, selected.statusLabel);
+      onDurableFactsChanged?.();
+      return;
+    }
+
+    const started = await w2GovernedExecuteStartAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: selected.attemptId,
+    });
+    if (!started.ok) {
+      setBusy(null);
+      setError(started.message);
+      if (started.attempt) {
+        flushSync(() => {
+          setAttempt(started.attempt!);
+        });
+      }
+      return;
+    }
+    paintAttemptPhase(started.phase, started.attempt, started.statusLabel);
+    await yieldBrowserPaint();
+
+    const completed = await w2GovernedExecuteCompleteAction({
+      projectId,
+      executionContractId: contract.executionContractId,
+      attemptId: started.attemptId,
+    });
+    setBusy(null);
+    if (!completed.ok) {
+      setError(completed.message);
+      if (completed.attempt) {
+        flushSync(() => {
+          setAttempt(completed.attempt!);
+        });
+      }
+      return;
+    }
+    paintAttemptPhase(completed.phase, completed.attempt, completed.statusLabel);
+    onDurableFactsChanged?.();
+  }, [contract, authorization, projectId, onDurableFactsChanged]);
+
   return (
     <section
       className={styles.root}
@@ -294,7 +432,8 @@ export function TrajectorySurface({
         <p className={styles.note}>
           Nora instruit des options et recommande. La décision vous appartient :
           une recommandation ne décide jamais et ne rend jamais une trajectoire
-          courante. Rien n&apos;est exécuté ici.
+          courante. L&apos;exécution (W3-A) n&apos;est possible qu&apos;après un
+          verdict AUTHORIZED, via une action Exécuter explicite (fixture).
         </p>
       </header>

@@ -431,13 +570,59 @@ export function TrajectorySurface({
               </dd>
             </div>
           </dl>
-          <div className={styles.actions}>
+          <div
+            className={styles.actions}
+            data-testid="w3a-qualify-execution-work"
+          >
+            <p className={styles.blockNote}>
+              Qualifier le travail d&apos;exécution réel (indépendant de
+              l&apos;option de trajectoire W2).
+            </p>
+            <label className={styles.amendmentLabel} htmlFor="w3a-operation-kind">
+              Opération d&apos;exécution
+            </label>
+            <select
+              id="w3a-operation-kind"
+              className={styles.amendmentInput}
+              data-testid="w3a-operation-kind"
+              value={qualifiedOperationKind ?? ""}
+              disabled={busy !== null}
+              onChange={(event) => {
+                const value = event.target.value;
+                if (
+                  value === "generate-temporary-artifact" ||
+                  value === "simulate" ||
+                  value === "read"
+                ) {
+                  setQualifiedOperationKind(value);
+                  setContract(null);
+                  setInspection(null);
+                  setAuthorization(null);
+                  setAttempt(null);
+                  setAttemptPhase(null);
+                } else {
+                  setQualifiedOperationKind(null);
+                }
+              }}
+            >
+              <option value="">— Choisir —</option>
+              <option value="generate-temporary-artifact">
+                Générer un artefact temporaire local (réversible)
+              </option>
+              <option value="simulate">Simuler (sandbox)</option>
+              <option value="read">Lecture seule</option>
+            </select>
             <button
               type="button"
               className={styles.primaryAction}
               data-testid="w2-prepare-contract"
               onClick={() => void prepareContract()}
-              disabled={busy !== null}
+              disabled={busy !== null || qualifiedOperationKind === null}
+              title={
+                qualifiedOperationKind === null
+                  ? "Qualifier d'abord le travail d'exécution"
+                  : undefined
+              }
             >
               {contract
                 ? "Repréparer le contrat d'exécution"
@@ -479,7 +664,9 @@ export function TrajectorySurface({
             </div>
             <div>
               <dt>Autorité requise</dt>
-              <dd>{contract.requiredAuthority}</dd>
+              <dd data-testid="w2-contract-authority">
+                {contract.requiredAuthority}
+              </dd>
             </div>
             <div>
               <dt>Capacités</dt>
@@ -597,7 +784,7 @@ export function TrajectorySurface({
                     : undefined
                 }
               >
-                Confirmer (autorité requise)
+                Confirmer (effets / autorité)
               </button>
             ) : null}
             <button
@@ -673,8 +860,82 @@ export function TrajectorySurface({
               </dd>
             </div>
           </dl>
-          <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
-            Aucune exécution n&apos;a été lancée : arrêt avant exécution.
+          {authorization.outcome === "AUTHORIZED" && !attempt ? (
+            <>
+              <p
+                className={styles.stopNotice}
+                data-testid="w2-stop-before-execute"
+              >
+                Autorisation évaluée — aucune tentative lancée tant que vous
+                n&apos;exécutez pas explicitement (W3-A fixture).
+              </p>
+              <button
+                type="button"
+                className={styles.primaryAction}
+                data-testid="w3a-governed-execute"
+                onClick={() => void governedExecute()}
+                disabled={busy !== null}
+              >
+                Exécuter (fixture gouvernée)
+              </button>
+            </>
+          ) : null}
+          {authorization.outcome === "BLOCKED" ? (
+            <p className={styles.stopNotice} data-testid="w2-stop-before-execute">
+              Aucune exécution n&apos;a été lancée : arrêt avant exécution.
+            </p>
+          ) : null}
+        </section>
+      ) : null}
+
+      {attempt || attemptPhaseHistory.length > 0 ? (
+        <section
+          className={styles.attempt}
+          aria-labelledby="w3a-attempt-title"
+          data-testid="w3a-attempt"
+          role="status"
+        >
+          <h3 id="w3a-attempt-title" className={styles.blockTitle}>
+            Tentative d&apos;exécution (W3-A)
+          </h3>
+          <p className={styles.blockBody} data-testid="w3a-attempt-status">
+            {attemptStatusLabel ?? "Tentative en cours"} · phase{" "}
+            <span data-testid="w3a-attempt-lifecycle">
+              {attemptPhase ?? "—"}
+            </span>{" "}
+            · historique{" "}
+            <code data-testid="w3a-attempt-phase-history">
+              {attemptPhaseHistory.join("|")}
+            </code>{" "}
+            · statut technique{" "}
+            <span data-testid="w3a-attempt-technical-status">
+              {attempt?.attemptStatus ?? "—"}
+            </span>
+          </p>
+          <dl className={styles.facts}>
+            <div>
+              <dt>Attempt</dt>
+              <dd className={styles.code} data-testid="w3a-attempt-id">
+                {attempt?.attemptId ?? "—"}
+              </dd>
+            </div>
+            <div>
+              <dt>Adapter</dt>
+              <dd data-testid="w3a-attempt-adapter">
+                {attempt?.adapterId ?? "—"}
+              </dd>
+            </div>
+            <div>
+              <dt>REAL</dt>
+              <dd data-testid="w3a-attempt-real">non — fixture boundary</dd>
+            </div>
+            <div>
+              <dt>Cycle auto-fermé</dt>
+              <dd data-testid="w3a-cycle-closed">non</dd>
+            </div>
+          </dl>
+          <p className={styles.blockNote} data-testid="w3a-terminal-honesty">
+            Terminal technique — résultat produit non encore qualifié (W3-B).
           </p>
         </section>
       ) : null}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 41f57980..56704d01 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -1,7 +1,7 @@
 "use server";

 /**
- * W2 server actions — thin transport over the product application path.
+ * W2 / W3-A server actions — thin transport over the product application path.
  *
  * The client may only send a projectId, an opaque option-set reference, the
  * trajectory version it was shown and the option it selects. Options,
@@ -9,16 +9,25 @@
  * server-side from durable truth: no client payload can decide, widen
  * authority, or claim an inspection.
  *
- * No action here reaches an execution path.
+ * W2 authorize stops before Execute. W3-A `w2GovernedExecuteAction` may create
+ * a fixture Attempt only after a fresh AUTHORIZED evaluation (Pilote actor).
  */

 import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import { readLiveProjectContext } from "@/lib/vertical-slice-runtime/liveProjectContext";
 import { amendExecutionContractWithConstraint } from "./amendExecutionContract";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import { confirmExecutionContractForAuthorization } from "./confirmForAuthorization";
 import { decideTrajectory } from "./decideTrajectory";
+import {
+  governedExecuteAuthorizedContract,
+  governedExecuteRecordResult,
+  governedExecuteSelectAgent,
+  governedExecuteStart,
+} from "./governedExecuteAuthorizedContract";
 import { inspectExecutionContract } from "./inspectExecutionContract";
 import { loadPresentedOptionSet } from "./presentedOptionSet";
+import { prepareExecutionContractFromW2Decision } from "./prepareExecutionContractFromW2Decision";
 import { proposeTrajectoryOptions } from "./proposeTrajectoryOptions";
 import { readW2ProjectHistory } from "./projectHistory";
 import { resolveW2QualificationInputs } from "./qualificationInputs";
@@ -27,7 +36,10 @@ import type {
   ConfirmForAuthorizationResult,
   DecideTrajectoryResult,
   EvaluateExecutionAuthorizationResult,
+  GovernedExecuteAuthorizedContractResult,
+  GovernedExecutePhaseResult,
   InspectExecutionContractResult,
+  PreparedExecutionContractResult,
   ProposeTrajectoryOptionsResult,
 } from "./types";
 import type { ReadW2ProjectHistoryResult } from "./projectHistory";
@@ -185,6 +197,177 @@ export async function w2AmendExecutionContractAction(input: {
   });
 }

+async function loadF2ContextForProject(
+  oa: NonNullable<ReturnType<typeof getRuntimeApplicationService>["oa"]>,
+  projectId: string,
+) {
+  const live = await readLiveProjectContext(oa, projectId);
+  if (!live.ok) return null;
+  return {
+    projectId,
+    lpsId: live.context.lpsId,
+    lpsVersion: live.context.lpsVersion,
+    doctrineDigest: live.context.doctrineDigest,
+    activeCycleInstanceId: live.context.activeCycleInstanceId,
+    ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
+  };
+}
+
+/**
+ * W3-A / FC-08 — native ExecutionContract preparation from W2 HumanDecision.
+ * NO F3 fixture semantic overwrite on the canonical /studio path.
+ */
+export async function w2PrepareExecutionContractAction(input: {
+  projectId: string;
+  decisionId: string;
+  /**
+   * Explicit Pilot/Nora operation kind. Required — W2 trajectory alone
+   * never selects the execution action. Allowlisted server-side.
+   */
+  qualifiedOperationKind?: unknown;
+  /** Hostile — ignored. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<PreparedExecutionContractResult> {
+  void input.canActAsMorris;
+  void input.claimedAuthorityLevel;
+
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  const context = await loadF2ContextForProject(runtime.oa, input.projectId);
+  if (!context) {
+    return {
+      ok: false,
+      code: "PROJECT_NOT_FOUND",
+      message: "Projet ou LPS introuvable pour la préparation EC.",
+    };
+  }
+
+  const prepared = await prepareExecutionContractFromW2Decision({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    decisionId: input.decisionId,
+    currentContext: context,
+    qualifiedOperationKind: input.qualifiedOperationKind,
+  });
+
+  if (!prepared.ok) {
+    return prepared;
+  }
+
+  return {
+    ok: true,
+    contract: prepared.contract,
+    decisionId: prepared.decisionId,
+    f3SemanticOverwrite: false,
+    executionPerformed: false,
+    attemptCreated: false,
+  };
+}
+
+/**
+ * W3-A phase 1 — SelectExecutionAgent → accepted.
+ */
+export async function w2GovernedExecuteSelectAction(input: {
+  projectId: string;
+  executionContractId: string;
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+  authorityReceiptRef?: unknown;
+  real?: unknown;
+}): Promise<GovernedExecutePhaseResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+  return governedExecuteSelectAgent({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    canActAsMorris: input.canActAsMorris,
+    claimedAuthorityLevel: input.claimedAuthorityLevel,
+    authorityReceiptRef: input.authorityReceiptRef,
+    real: input.real,
+  });
+}
+
+/**
+ * W3-A phase 2 — StartExecution → running.
+ */
+export async function w2GovernedExecuteStartAction(input: {
+  projectId: string;
+  executionContractId: string;
+  attemptId: string;
+  canActAsMorris?: unknown;
+  authorityReceiptRef?: unknown;
+  real?: unknown;
+}): Promise<GovernedExecutePhaseResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+  return governedExecuteStart({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    attemptId: input.attemptId,
+    canActAsMorris: input.canActAsMorris,
+    authorityReceiptRef: input.authorityReceiptRef,
+    real: input.real,
+  });
+}
+
+/**
+ * W3-A phase 3 — RecordExecutionResult → technical terminal.
+ */
+export async function w2GovernedExecuteCompleteAction(input: {
+  projectId: string;
+  executionContractId: string;
+  attemptId: string;
+  canActAsMorris?: unknown;
+  authorityReceiptRef?: unknown;
+  real?: unknown;
+}): Promise<GovernedExecuteAuthorizedContractResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+  return governedExecuteRecordResult({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    attemptId: input.attemptId,
+    canActAsMorris: input.canActAsMorris,
+    authorityReceiptRef: input.authorityReceiptRef,
+    real: input.real,
+  });
+}
+
+/**
+ * W3-A — Governed Execute after W2 AUTHORIZED.
+ * Fresh authority evaluation; Pilote actor; fixture Attempt only; no REAL.
+ * Hostile client fields (receipt-as-permission, Morris claims, real flags) ignored.
+ */
+export async function w2GovernedExecuteAction(input: {
+  projectId: string;
+  executionContractId: string;
+  /** Hostile — ignored. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+  authorityReceiptRef?: unknown;
+  real?: unknown;
+  adapterRef?: unknown;
+}): Promise<GovernedExecuteAuthorizedContractResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) return OA_UNAVAILABLE;
+
+  return governedExecuteAuthorizedContract({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    executionContractId: input.executionContractId,
+    canActAsMorris: input.canActAsMorris,
+    claimedAuthorityLevel: input.claimedAuthorityLevel,
+    authorityReceiptRef: input.authorityReceiptRef,
+    real: input.real,
+    adapterRef: input.adapterRef,
+  });
+}
+
 export async function w2ReadProjectHistoryAction(input: {
   projectId: string;
 }): Promise<ReadW2ProjectHistoryResult> {
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts
index d61360f6..7feb2269 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts
@@ -18,7 +18,10 @@ import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
 } from "@/lib/oa/decision";
-import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import {
+  assertUserAmendableExecutionConstraint,
+  type ExecutionContract,
+} from "@/lib/oa/execution-contract";
 import { readContractInspectionState } from "./inspectExecutionContract";
 import type {
   AmendExecutionContractResult,
@@ -43,9 +46,8 @@ function fail(code: string, message: string): W2Failure {
 }

 function normalizeConstraint(raw: string): string | null {
-  const trimmed = raw.replace(/\u0000/g, "").trim();
-  if (!trimmed) return null;
-  return trimmed.replace(/\s+/g, " ");
+  const checked = assertUserAmendableExecutionConstraint(raw);
+  return checked.ok ? checked.normalized : null;
 }

 function amendmentDigest(
@@ -439,13 +441,18 @@ async function recoverExistingSuccessor(input: {
 export async function amendExecutionContractWithConstraint(
   input: AmendExecutionContractInput,
 ): Promise<AmendExecutionContractResult> {
-  const normalized = normalizeConstraint(input.additionalConstraint);
-  if (!normalized) {
+  const amendable = assertUserAmendableExecutionConstraint(
+    input.additionalConstraint,
+  );
+  if (!amendable.ok) {
     return fail(
-      "CONSTRAINT_EMPTY",
-      "La contrainte d'exécution supplémentaire est vide — amendement refusé.",
+      amendable.message.includes("réservé")
+        ? "CONSTRAINT_SYSTEM_RESERVED"
+        : "CONSTRAINT_EMPTY",
+      amendable.message,
     );
   }
+  const normalized = amendable.normalized;

   const priorLoad = await loadContract(input.oa, input.executionContractId);
   if (!priorLoad.ok) return fail(priorLoad.code, priorLoad.message);
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
index 1ab24855..6e24c796 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
@@ -42,10 +42,12 @@ import type {
 /**
  * Confirmation requirement from the canonical ExecutionContract lifecycle.
  *
- * PASS_WITH_KNOWN_SIMPLIFICATION — full C2 multi-factor formula not claimed;
- * lifecycle owner is ValidateExecutionContract (N1 → validated without confirm;
- * N2|N3|MORRIS → confirmation_required). Status is the primary owner here;
- * `requiredAuthority !== "N1"` is intentionally not the primary rule.
+ * Status is the primary owner (ValidateExecutionContract):
+ * - validated ⇒ Confirmation not required (effect projection said so)
+ * - confirmation_required ⇒ Confirmation required (authority class OR effects)
+ * - confirmed ⇒ Confirmation obtained
+ *
+ * requiredAuthority alone does NOT decide Confirmation (C2 §10).
  */
 export function resolveConfirmationRequirement(
   contract: Pick<ExecutionContract, "requiredAuthority" | "confirmationRef" | "status">,
@@ -54,7 +56,7 @@ export function resolveConfirmationRequirement(

   switch (contract.status) {
     case "validated":
-      // ValidateExecutionContract wrote validated ⇒ confirmation not required (N1).
+      // Validate wrote validated ⇒ effect Confirmation not required.
       return {
         required: false,
         satisfied: true,
@@ -116,8 +118,30 @@ export function evaluateAgentCapability(
     "requiredCapabilities" | "action" | "target" | "scope"
   >,
 ): AgentCapabilitySufficiency {
+  const criteria = {
+    requiredCapabilities: [...contract.requiredCapabilities],
+    action: contract.action,
+    target: contract.target,
+    scope: contract.scope,
+  };
+  // Prefer findCandidates (deny-by-default port API) so contract-shaped
+  // fixture composition can adapt AFTER EC preparation (B4).
+  const candidates = registry.findCandidates(criteria);
+  const evaluatedAgentRefs = [
+    ...new Set([
+      ...registry.listAgents().map((agent) => agent.agentId),
+      ...candidates.map((c) => c.agentId),
+    ]),
+  ];
+  if (candidates.length > 0) {
+    return {
+      evaluatedAgentRefs,
+      sufficientAgentRef: candidates[0].agentId,
+      sufficient: true,
+      reason: "sufficient",
+    };
+  }
   const agents = registry.listAgents();
-  const evaluatedAgentRefs = agents.map((agent) => agent.agentId);
   if (agents.length === 0) {
     return {
       evaluatedAgentRefs,
@@ -125,15 +149,9 @@ export function evaluateAgentCapability(
       reason: "no_agent_registered",
     };
   }
-
   let firstViolation: AgentCapabilitySufficiency["reason"] = "scope_not_allowed";
   for (const agent of agents) {
-    const violation = agentMatchViolation(agent, {
-      requiredCapabilities: [...contract.requiredCapabilities],
-      action: contract.action,
-      target: contract.target,
-      scope: contract.scope,
-    });
+    const violation = agentMatchViolation(agent, criteria);
     if (!violation) {
       return {
         evaluatedAgentRefs,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
index dbcc1371..3bfa7eea 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
@@ -1,13 +1,14 @@
 /**
- * W2 Track C — scoped Confirmation captured for authorization, never for
+ * W2 Track C / W3-A — scoped Confirmation captured for authorization, never for
  * execution.
  *
- * Product order enforced: a Confirmation can only be captured after a
- * sufficient inspection of the exact contract version, and only when the
- * contract's required authority actually demands one. A contract whose lifecycle status is `validated` (N1 path) is
- * refused here rather than being made to carry a gratuitous Confirmation.
- * Status is the primary owner; `requiredAuthority === "N1"` remains a
- * secondary fail-closed check.
+ * Product order: Confirmation only after sufficient inspection of the exact
+ * contract version, and only when Validate left status `confirmation_required`
+ * (authority class OR effect-driven Confirmation via EFFECT_CONFIRMATION_REQUIRED).
+ *
+ * Status is the primary owner. `validated` refuses Confirmation (nothing to
+ * confirm). N1 + confirmation_required is allowed when effects require N1
+ * Confirmation independently of requiredAuthority.
  *
  * Nothing in this module executes: it stops at contract status `confirmed`.
  */
@@ -58,7 +59,7 @@ export async function confirmExecutionContractForAuthorization(
     };
   }

-  // Status-first: validated is the N1 path — refuse gratuitous confirmation.
+  // Status-first: validated means Validate established Confirmation not required.
   if (contract.status === "validated") {
     return {
       ok: false,
@@ -67,15 +68,6 @@ export async function confirmExecutionContractForAuthorization(
         "Aucune confirmation n'est requise pour ce contrat — rien à confirmer.",
     };
   }
-  // Secondary fail-closed when status is available but authority class is N1.
-  if (contract.requiredAuthority === "N1") {
-    return {
-      ok: false,
-      code: "CONFIRMATION_NOT_REQUIRED",
-      message:
-        "Aucune confirmation n'est requise pour ce contrat — rien à confirmer.",
-    };
-  }
   if (contract.status === "confirmed") {
     return {
       ok: true,
@@ -88,6 +80,7 @@ export async function confirmExecutionContractForAuthorization(
     };
   }
   // Allow confirm only from confirmation_required (ValidateExecutionContract owner).
+  // Includes N1 + effect-driven Confirmation (C2 §10).
   if (contract.status !== "confirmation_required") {
     return {
       ok: false,
@@ -138,11 +131,25 @@ export async function confirmExecutionContractForAuthorization(
   }

   const confirmationId = `cfm:w2:${contract.executionContractId}:v${contract.version}`;
-  const level = contract.requiredAuthority === "N2" ? "N2" : "N3";
+  const level =
+    contract.requiredAuthority === "N1"
+      ? "N1"
+      : contract.requiredAuthority === "N2"
+        ? "N2"
+        : "N3";
+  // Effect-driven Confirmation may request N1 while requiredAuthority is also N1.
+  const effectLevelConstraint = contract.constraints.find((c) =>
+    c.startsWith("EFFECT_CONFIRMATION_REQUIRED:"),
+  );
+  const effectLevel = effectLevelConstraint?.split(":")[1];
+  const confirmationLevel =
+    effectLevel === "N1" || effectLevel === "N2" || effectLevel === "N3"
+      ? effectLevel
+      : level;

   const requested = await oa.decisionServices.requestConfirmation.execute({
     confirmationId,
-    level,
+    level: confirmationLevel,
     actionRef: w2ConfirmationActionRef({
       executionContractId: contract.executionContractId,
       contractVersion: contract.version,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/types.ts b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
index baf0653b..a4aad88d 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/types.ts
@@ -261,3 +261,97 @@ export type AmendExecutionContractSuccess = {
 export type AmendExecutionContractResult =
   | AmendExecutionContractSuccess
   | W2Failure;
+
+/* -------------------------------------------------------------------------- */
+/* W3-A — FC-08 native prepare + Governed Execute (after W2 AUTHORIZED)      */
+/* -------------------------------------------------------------------------- */
+
+export type PreparedExecutionContractResult =
+  | {
+      readonly ok: true;
+      readonly contract: {
+        readonly executionContractId: string;
+        readonly version: number;
+        readonly status: string;
+        readonly action: string;
+        readonly target: string;
+        readonly scope: string;
+        readonly requiredAuthority: string;
+        readonly constraints: readonly string[];
+        readonly stopConditions: readonly string[];
+        readonly requiredCapabilities: readonly string[];
+        readonly reversibility: string;
+        readonly semanticFingerprint: string;
+        readonly effectClass?: string;
+        readonly effectConfirmationRequired?: boolean;
+        readonly effectConfirmationLevel?: string | null;
+      };
+      readonly decisionId: string;
+      readonly f3SemanticOverwrite: false;
+      readonly executionPerformed: false;
+      readonly attemptCreated: false;
+    }
+  | W2Failure;
+
+export type GovernedExecuteAttemptProjection = {
+  readonly attemptId: string;
+  readonly attemptStatus: string;
+  readonly selectedAgentRef: string;
+  readonly adapterId: string;
+};
+
+export type GovernedExecutePhase =
+  | "accepted"
+  | "running"
+  | "terminal";
+
+export type GovernedExecutePhaseSuccess = {
+  readonly ok: true;
+  readonly phase: GovernedExecutePhase;
+  readonly executionContractId: string;
+  readonly contractVersion: number;
+  readonly attemptId: string;
+  readonly attemptStatus: string;
+  readonly selectedAgentRef: string;
+  readonly adapterId: string;
+  readonly selectionProfile: string;
+  readonly realExecution: false;
+  readonly externalEffects: false;
+  readonly authorityReceiptUsedAsPermission: false;
+  readonly statusLabel: string;
+  readonly technicalTerminal: boolean;
+  readonly productSuccessSemantics: false;
+  readonly attempt: GovernedExecuteAttemptProjection;
+  readonly reusedExistingAttempt?: boolean;
+  readonly launchCount?: number;
+  readonly launchDelta?: number;
+  readonly executionPerformed?: true;
+  readonly attemptCreated?: boolean;
+  readonly gitWritePerformed?: false;
+  readonly cycleInstanceClosed?: boolean;
+  readonly projectArchived?: boolean;
+};
+
+export type GovernedExecutePhaseFailure = W2Failure & {
+  readonly attempt?: GovernedExecuteAttemptProjection;
+};
+
+export type GovernedExecutePhaseResult =
+  | GovernedExecutePhaseSuccess
+  | GovernedExecutePhaseFailure;
+
+export type GovernedExecuteAuthorizedContractSuccess = GovernedExecutePhaseSuccess & {
+  readonly phase: "terminal";
+  readonly reusedExistingAttempt: boolean;
+  readonly launchCount: number;
+  readonly launchDelta: number;
+  readonly executionPerformed: true;
+  readonly attemptCreated: boolean;
+  readonly gitWritePerformed: false;
+  readonly cycleInstanceClosed: false | boolean;
+  readonly projectArchived: false | boolean;
+};
+
+export type GovernedExecuteAuthorizedContractResult =
+  | GovernedExecuteAuthorizedContractSuccess
+  | GovernedExecutePhaseFailure;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/attemptSupport.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/attemptSupport.ts
index 6aef93ac..a73fa13e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/attemptSupport.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/attemptSupport.ts
@@ -11,7 +11,10 @@ import type {
   AuthorityResolverPort,
   VerifyAuthorityResult,
 } from "@/lib/oa/decision";
-import type { ExecutionContract } from "@/lib/oa/execution-contract";
+import {
+  isExecutionReadyStatus,
+  type ExecutionContract,
+} from "@/lib/oa/execution-contract";
 import type { ActorReference, AuthorityClass, ProvenanceRecord } from "../domain/types";

 export function newCorrelationId(): string {
@@ -91,6 +94,9 @@ export function contractGateDetail(
   | null {
   if (contract.status === "cancelled") return "EXECUTION_CONTRACT_CANCELLED";
   if (contract.status === "superseded") return "EXECUTION_CONTRACT_SUPERSEDED";
-  if (contract.status !== "confirmed") return "EXECUTION_CONTRACT_NOT_CONFIRMED";
+  // N1 validated is Execute-ready only with CONFIRMATION_EVALUATED:NOT_REQUIRED (R16).
+  if (!isExecutionReadyStatus(contract)) {
+    return "EXECUTION_CONTRACT_NOT_CONFIRMED";
+  }
   return null;
 }
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts
index ad155eb4..397d211e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts
@@ -9,10 +9,11 @@
  *   ExecutionContract.executing ⇒ a matching Attempt is ALREADY running
  *   in the Attempt repository — caller-claimed status alone is NOT trusted.
  */
-import type {
-  ExecutionContract,
-  ExecutionContractRepositoryPort,
-  ExecutionContractPersistenceUnitOfWorkPort,
+import {
+  isExecutionReadyStatus,
+  type ExecutionContract,
+  type ExecutionContractRepositoryPort,
+  type ExecutionContractPersistenceUnitOfWorkPort,
 } from "@/lib/oa/execution-contract";
 import type { AttemptDetailCode, ExecutionAttemptStatus } from "../domain/types";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
@@ -24,10 +25,11 @@ export type Ta5ContractStatus =
   | "cancelled";

 const ALLOWED_SOURCES: Record<Ta5ContractStatus, readonly string[]> = {
-  executing: ["confirmed"],
+  // validated is Execute-ready only via isExecutionReadyStatus (R16 marker).
+  executing: ["confirmed", "validated"],
   completed: ["executing"],
-  failed: ["confirmed", "executing"],
-  cancelled: ["confirmed", "executing"],
+  failed: ["confirmed", "validated", "executing"],
+  cancelled: ["confirmed", "validated", "executing"],
 };

 export type ContractStatusWriteRequest = {
@@ -119,7 +121,11 @@ export class ExecutionContractStatusWriter {
         };
         throw new Error("contract_occ_mismatch");
       }
-      if (!ALLOWED_SOURCES[request.nextStatus].includes(current.status)) {
+      const allowed = ALLOWED_SOURCES[request.nextStatus];
+      const sourceAllowed =
+        allowed.includes(current.status) &&
+        (current.status !== "validated" || isExecutionReadyStatus(current));
+      if (!sourceAllowed) {
         failure = {
           ok: false,
           detailCode: "EXECUTION_CONTRACT_UPDATE_FAILED",
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 8d530d4f..0d3aaa22 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -247,7 +247,7 @@ export type CreateInMemoryExecutionAttemptServicesOptions = {
   executionContractServices: ExecutionContractServices;
   /** Closed descriptor set, or a pre-built immutable registry. */
   agents?: readonly AgentDescriptor[];
-  registry?: MemoryAgentRegistry;
+  registry?: AgentRegistryPort;
   /** Only TestExecutionAdapter | NoOpExecutionAdapter. */
   adapter?: InjectableExecutionAdapter;
   clock?: ClockPort;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
index 703af5aa..fc8767b4 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
@@ -55,7 +55,7 @@ export type CreateSqliteExecutionAttemptServicesOptions = {
   executionContractServices: ExecutionContractServices;
   productStore: ProductSqliteHandle;
   agents?: readonly AgentDescriptor[];
-  registry?: MemoryAgentRegistry;
+  registry?: AgentRegistryPort;
   adapter?: InjectableExecutionAdapter;
   clock?: ClockPort;
   audit?: ExecutionAttemptAuditPort;
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts
index 98cf3745..4782ff13 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts
@@ -6,7 +6,12 @@ import type {
   DecisionServices,
 } from "@/lib/oa/decision";
 import { createExecutionError } from "../domain/errors";
-import { denyByDefaultMatch, isTa5Status } from "../domain/invariants";
+import {
+  denyByDefaultMatch,
+  hasConfirmationConstraintContradiction,
+  isExecutionReadyStatus,
+  isTa5Status,
+} from "../domain/invariants";
 import type {
   ActorReference,
   CheckAuthorizationResult,
@@ -34,8 +39,10 @@ type CheckSnapshot = {
  * CheckExecutionAuthorization — gate for T-A5 StartExecution.
  * NEVER mutates. NEVER executes. Deny-by-default on action/target/scope.
  *
- * Requires: status=confirmed, not cancelled/superseded, not T-A5 status,
- * decisions still accepted+current, Critical ack if applicable, authority OK.
+ * Requires: execute-ready status (confirmed, or validated+N1 with
+ * EXECUTION_CONFIRMATION_EVALUATED:NOT_REQUIRED and no EFFECT_CONFIRMATION_REQUIRED),
+ * not cancelled/superseded, not T-A5 status, decisions still accepted+current,
+ * Critical ack if applicable, authority OK.
  */
 export class CheckExecutionAuthorization {
   constructor(
@@ -112,7 +119,14 @@ export class CheckExecutionAuthorization {
           projectId: contract.projectId,
         });
       }
-      if (contract.status !== "confirmed") {
+      if (hasConfirmationConstraintContradiction(contract.constraints)) {
+        return fail(
+          "CONTRACT_INVALID",
+          "confirmation_constraint_contradiction",
+          { projectId: contract.projectId },
+        );
+      }
+      if (!isExecutionReadyStatus(contract)) {
         return fail("STATE_CONFLICT", `not_confirmed_${contract.status}`, {
           projectId: contract.projectId,
         });
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
index 7acd0828..a0fbf520 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
@@ -8,6 +8,7 @@ import type {
 import { createExecutionError } from "../domain/errors";
 import {
   assertConfirmationBinding,
+  hasConfirmationConstraintContradiction,
   isTa5Status,
 } from "../domain/invariants";
 import type {
@@ -142,6 +143,13 @@ export class ConfirmExecutionContract {
           currentVersion: existing.version,
         });
       }
+      if (hasConfirmationConstraintContradiction(existing.constraints)) {
+        return fail(
+          "CONTRACT_INVALID",
+          "confirmation_constraint_contradiction",
+          { projectId: existing.projectId },
+        );
+      }

       // Critical fail-closed — R-T-A3-1: no public ack API on Cycle.
       if (existing.cycleInstanceId) {
@@ -175,11 +183,6 @@ export class ConfirmExecutionContract {

       // Decision freshness: accepted + same project + not superseded.
       const decisionRefs = existing.decisionRefs ?? [];
-      if (decisionRefs.length < 1) {
-        return fail("DECISION_REQUIRED", "decision_refs_required", {
-          projectId: existing.projectId,
-        });
-      }
       for (const decisionId of decisionRefs) {
         const decisionResult =
           await this.decisionServices.getHumanDecision.execute({
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts b/projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts
index 4956ecbb..ff9bea87 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts
@@ -2,7 +2,10 @@ import { randomBytes } from "node:crypto";
 import type { ClockPort } from "@/lib/oa/doctrine";
 import type { AuthorityResolverPort } from "@/lib/oa/decision";
 import { createExecutionError } from "../domain/errors";
-import { isTa5Status } from "../domain/invariants";
+import {
+  hasConfirmationConstraintContradiction,
+  isTa5Status,
+} from "../domain/invariants";
 import type {
   ActorReference,
   ExecutionContract,
@@ -31,7 +34,11 @@ type ValidateSnapshot = {
  * Does NOT consume Confirmation.
  * Does NOT produce confirmed or T-A5 statuses.
  *
- * N1 → validated; N2|N3|MORRIS → confirmation_required.
+ * Status derivation:
+ * - EFFECT_CONFIRMATION_REQUIRED constraint → confirmation_required
+ *   (effect-driven Confirmation, independent of requiredAuthority)
+ * - else N1 → validated
+ * - else N2|N3|MORRIS → confirmation_required
  */
 export class ValidateExecutionContract {
   constructor(
@@ -117,6 +124,13 @@ export class ValidateExecutionContract {
           currentVersion: existing.version,
         });
       }
+      if (hasConfirmationConstraintContradiction(existing.constraints)) {
+        return fail(
+          "CONTRACT_INVALID",
+          "confirmation_constraint_contradiction",
+          { projectId: existing.projectId },
+        );
+      }

       const verification = verifyRequiredAuthority(this.authority, {
         requiredAuthority: existing.requiredAuthority,
@@ -153,9 +167,13 @@ export class ValidateExecutionContract {
       }

       const nextStatus =
-        existing.requiredAuthority === "N1"
-          ? "validated"
-          : "confirmation_required";
+        existing.constraints.some((c) =>
+          c.startsWith("EFFECT_CONFIRMATION_REQUIRED"),
+        )
+          ? "confirmation_required"
+          : existing.requiredAuthority === "N1"
+            ? "validated"
+            : "confirmation_required";

       let contract: ExecutionContract | undefined;

diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
index 53b01f1a..904e8dab 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
@@ -98,6 +98,127 @@ export function assertPrefixedId(
   return null;
 }

+/**
+ * Durable constraint: FC-08 evaluated Confirmation and concluded NOT REQUIRED.
+ * Generic EC-domain token — not a W3-A feature import. Reconstructible from
+ * persisted constraints (R16). Legacy validated/N1 without this marker is
+ * NOT Execute-ready.
+ */
+export const EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED =
+  "EXECUTION_CONFIRMATION_EVALUATED:NOT_REQUIRED" as const;
+
+/** Prefix for effect-driven Confirmation requirement constraints. */
+export const EFFECT_CONFIRMATION_REQUIRED_PREFIX =
+  "EFFECT_CONFIRMATION_REQUIRED" as const;
+
+/** Prefix for FC-08 system-owned Confirmation evaluation markers. */
+export const EXECUTION_CONFIRMATION_EVALUATED_PREFIX =
+  "EXECUTION_CONFIRMATION_EVALUATED" as const;
+
+/** Normalize constraint text the same way as W2 amendment ingress. */
+export function normalizeExecutionConstraintText(raw: string): string | null {
+  const trimmed = raw.replace(/\u0000/g, "").trim();
+  if (!trimmed) return null;
+  return trimmed.replace(/\s+/g, " ");
+}
+
+export function contractHasEffectConfirmationRequired(
+  constraints: readonly string[] | null | undefined,
+): boolean {
+  if (!constraints) return false;
+  return constraints.some(
+    (c) =>
+      c === EFFECT_CONFIRMATION_REQUIRED_PREFIX ||
+      c.startsWith(`${EFFECT_CONFIRMATION_REQUIRED_PREFIX}:`),
+  );
+}
+
+export function contractHasConfirmationEvaluatedNotRequired(
+  constraints: readonly string[] | null | undefined,
+): boolean {
+  if (!constraints) return false;
+  return constraints.includes(EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED);
+}
+
+/** Both REQUIRED and NOT_REQUIRED markers present — always fail-closed. */
+export function hasConfirmationConstraintContradiction(
+  constraints: readonly string[] | null | undefined,
+): boolean {
+  return (
+    contractHasEffectConfirmationRequired(constraints) &&
+    contractHasConfirmationEvaluatedNotRequired(constraints)
+  );
+}
+
+/**
+ * System-owned Confirmation constraint namespaces — not user/Pilote amendable.
+ * Uses the same normalization as amendment ingress.
+ */
+export function isSystemOwnedExecutionConstraint(raw: string): boolean {
+  const normalized = normalizeExecutionConstraintText(raw);
+  if (!normalized) return false;
+  if (normalized === EFFECT_CONFIRMATION_REQUIRED_PREFIX) return true;
+  if (normalized.startsWith(`${EFFECT_CONFIRMATION_REQUIRED_PREFIX}:`)) {
+    return true;
+  }
+  if (normalized === EXECUTION_CONFIRMATION_EVALUATED_PREFIX) return true;
+  if (normalized.startsWith(`${EXECUTION_CONFIRMATION_EVALUATED_PREFIX}:`)) {
+    return true;
+  }
+  return false;
+}
+
+export function assertUserAmendableExecutionConstraint(
+  raw: string,
+): { ok: true; normalized: string } | { ok: false; message: string } {
+  const normalized = normalizeExecutionConstraintText(raw);
+  if (!normalized) {
+    return {
+      ok: false,
+      message:
+        "La contrainte d'exécution supplémentaire est vide — amendement refusé.",
+    };
+  }
+  if (isSystemOwnedExecutionConstraint(normalized)) {
+    return {
+      ok: false,
+      message:
+        "Marqueur système réservé (EXECUTION_CONFIRMATION_EVALUATED / EFFECT_CONFIRMATION_REQUIRED) — amendement Pilote refusé.",
+    };
+  }
+  return { ok: true, normalized };
+}
+
+/**
+ * Execute-ready lifecycle status for FC-09 / FC-10 gates.
+ *
+ * Order: contradiction check FIRST (including confirmed).
+ * - contradictory REQUIRED + NOT_REQUIRED → NOT ready (any status)
+ * - `confirmed` → ready
+ * - `validated` + N1 + CONFIRMATION_EVALUATED:NOT_REQUIRED
+ *   + no EFFECT_CONFIRMATION_REQUIRED* → ready
+ * - `validated` + N1 without explicit evaluation marker → NOT ready (legacy)
+ * - N2/N3/MORRIS validated → NOT ready
+ * - `confirmation_required` → NOT ready
+ *
+ * Never a universal validated+N1 bypass.
+ */
+export function isExecutionReadyStatus(contract: {
+  status: ExecutionContractStatus | string;
+  requiredAuthority: AuthorityClass | string;
+  constraints?: readonly string[] | null;
+}): boolean {
+  const constraints = contract.constraints ?? [];
+  if (hasConfirmationConstraintContradiction(constraints)) return false;
+  if (contract.status === "confirmed") return true;
+  if (contract.status !== "validated") return false;
+  if (contract.requiredAuthority !== "N1") return false;
+  const required = contractHasEffectConfirmationRequired(constraints);
+  const notRequired = contractHasConfirmationEvaluatedNotRequired(constraints);
+  if (required) return false;
+  return notRequired;
+}
+
 export function isTa5Status(status: ExecutionContractStatus): boolean {
   return TA5_STATUSES.has(status as Ta5ExecutionContractStatus);
 }
@@ -363,8 +484,8 @@ export function validateBuildFields(input: {
   if (input.status !== "draft" && input.status !== "proposed") {
     return { detailCode: "CONTRACT_INVALID", reason: "build_status_invalid" };
   }
-  if (!Array.isArray(input.decisionRefs) || input.decisionRefs.length < 1) {
-    return { detailCode: "DECISION_REQUIRED", reason: "decision_refs_required" };
+  if (!Array.isArray(input.decisionRefs)) {
+    return { detailCode: "CONTRACT_INVALID", reason: "decision_refs_invalid" };
   }
   for (const d of input.decisionRefs) {
     if (!isOaIdentifier(d) || !d.startsWith("dec:")) {
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index cf70f5e8..024c52e9 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -57,6 +57,8 @@ import {
   createF3FixtureAgentDescriptor,
   createF3TestExecutionAdapter,
 } from "./f3FixtureWiring";
+import { createW3ABoundedFixtureAgentDescriptor } from "./w3aProductFixtureWiring";
+import { MemoryAgentRegistry } from "@/lib/oa/execution-attempt";
 import {
   toCreateLocalProjectCommand,
   toCreateProjectRuntimeFailure,
@@ -219,21 +221,25 @@ function wireOaStack(
   // This composition does not instantiate StudioCursorRealLaunchGateway.
   const fixtureAdapter = createF3TestExecutionAdapter();
   const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
+  const w3aBoundedAgent = createW3ABoundedFixtureAgentDescriptor(clock.nowIso());
   const realBoundary = options?.realBoundary;
   const registerM4 =
     realBoundary !== undefined || isStudioCursorRealEnabled();
+  // Bounded W3-A fixture: explicit supported actions/caps ONLY (no universal synthesis).
   const agents = registerM4
     ? [
         fixtureAgent,
+        w3aBoundedAgent,
         createM4BoundedReadOnlyCursorAgentDescriptor(clock.nowIso()),
       ]
-    : [fixtureAgent];
+    : [fixtureAgent, w3aBoundedAgent];
+  const registry = new MemoryAgentRegistry(agents);
   const executionAttemptServices = productSqlite
     ? createSqliteExecutionAttemptServices({
         decisionServices,
         executionContractServices,
         productStore: productSqlite,
-        agents,
+        registry,
         adapter: fixtureAdapter,
         clock,
         authorityResolver,
@@ -243,7 +249,7 @@ function wireOaStack(
     : createInMemoryExecutionAttemptServices({
         decisionServices,
         executionContractServices,
-        agents,
+        registry,
         adapter: fixtureAdapter,
         clock,
         authorityResolver,
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 39f8cda8..46971bda 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -6,8 +6,9 @@
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git courant** | **RESOLVE FROM REPOSITORY** *(Git SoT ; ce document **≠** embed permanent `origin/main` HEAD)* · **Référence de maintenance / entrée W2 POST-CLOSURE TRUTH SYNC** = `origin/main` @ `1e4b0dbb8de291f1a02e084f03231d62d04dfb0b` (merge PR **#405** Product Correction) · reviewed head `330b36258f5a5fcb117fb562b12ff173b3675d94` · candidate→merge content delta **0 files** · push/main CI **`32654262020` SUCCESS / Required Gate PASS** · W2 Final Closure Requalification **ACCEPTED BY MORRIS** · **W2 CLOSED BY MORRIS** · W2-CL-R01…R03 **CLOSED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · PR **#403** Phase B · PR **#400** W2-G3 · PR **#398** W2 readiness · PR **#395** W1 · **NEXT CAPACITY** = **NEXT-CAPABILITY REQUALIFICATION** *(distinct · NOT STARTED · **≠** W3)* · W3 **NOT STARTED / NOT AUTHORIZED** · FinOps/T7 **FREEZE** · C6 **CLOSED** · Execute **OUT** · REAL **OUT / NOT CONSUMED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE / NON TERMINÉE** · **≠** W3 authorized · **≠** REAL BOUNDARY PROVEN · **≠** FinOps PASS · **≠** runtime v3 ADOPTED |
-| **Timestamp maintenance courant** | 2026-08-23 20:37:16 CEST (+0200) — **W2 POST-CLOSURE TRUTH SYNC** — `origin/main` @ `1e4b0dbb8de291f1a02e084f03231d62d04dfb0b` · PR **#405 MERGED** · W2 Final Closure Requalification **ACCEPTED BY MORRIS** · **W2 CLOSED BY MORRIS** · doc10 final requalification **INTEGRATION CANDIDATE** · disclosures `w2Cognition=CLOSED_BY_MORRIS` · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · **NEXT CAPACITY** = **NEXT-CAPABILITY REQUALIFICATION** *(distinct · NOT STARTED)* · W3 **NOT STARTED / NOT AUTHORIZED** · FinOps/T7 **FREEZE** · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 GO · **≠** REAL · **≠** FinOps PASS |
+| **Snapshot Git courant** | **RESOLVE FROM REPOSITORY** *(Git SoT ; ce document **≠** embed permanent `origin/main` HEAD)* · **Référence de maintenance / entrée W3 DELIVERY** = `origin/main` @ `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed` (merge PR **#406** W2 post-closure truth sync) · prior Product Correction merge `1e4b0dbb…` (PR **#405**) · **W2 CLOSED BY MORRIS** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · **NEXT-CAPABILITY REQUALIFICATION** = **SATISFIED / CONSUMED** by W3 qualification · **W3 DELIVERY** = **AUTHORIZED BY MORRIS / IN PROGRESS** · **current delivery slice** = **W3-A Governed Execute** (US-P1-04 / FC-10) · W3 **NOT CLOSED** · FinOps/T7 **FREEZE** · C6 **CLOSED** · REAL **OUT / NOT CONSUMED** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE / NON TERMINÉE** · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** REAL BOUNDARY PROVEN · **≠** FinOps PASS · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance courant** | 2026-08-24 08:44 CEST (+0200) — **W3-A R16 reserved Confirmation + R09 visual lifecycle** — contradiction fail-closed · system-owned constraint namespaces · legacy exploit blocked · R09 PNG 07/08/09 honest · Playwright Server Action latch (test-only) · W4 **NOT TOUCHED** · awaiting ChatGPT re-review · W3 **NOT CLOSED** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** |
+| **Timestamp maintenance historique W2 POST-CLOSURE TRUTH SYNC** | 2026-08-23 20:37:16 CEST (+0200) — **W2 POST-CLOSURE TRUTH SYNC** — *(historique · superseded by W3 DELIVERY START)* — `origin/main` @ `1e4b0dbb…` then PR **#406** → `3a3b1cf…` · **W2 CLOSED BY MORRIS** · **NEXT CAPACITY** was **NEXT-CAPABILITY REQUALIFICATION** *(later SATISFIED / CONSUMED)* · W3 was **NOT STARTED / NOT AUTHORIZED** *(true then · later AUTHORIZED)* · FinOps/T7 **FREEZE** · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** |
 | **Timestamp maintenance historique W2 Phase B post-merge truth sync** | 2026-08-23 16:48 CEST (+0200) — **W2 TRACK D / BOUNDED CKC PHASE B POST-MERGE TRUTH SYNC** — `origin/main` HEAD **RESOLVE FROM REPOSITORY** · PR **#403 MERGED** · Phase B head `1cdf4b41270cffe31be28e02e3effe17a1b15477` · merge `e4a93fea77c7edd01c4e6fc2d47455db14e102e8` · PR-head CI **`32645232920` SUCCESS / Required Gate PASS** · head→merge **0-file content delta** · push/main CI **`32646038871` SUCCESS / Required Gate PASS** · **bounded Phase B INTEGRATED ON MAIN** · **DETERMINISTIC PROVEN** · Phase B GO / R1 GO / Git integration GO **CONSUMED historically** · W2 **NOT FINALLY CLOSED** · **NEXT CAPACITY** = **W2 FINAL CLOSURE QUALIFICATION** *(distinct cycle · NOT STARTED)* · W3 **NOT STARTED / NOT AUTHORIZED** · full CKC track **DOWNSTREAM W3** · PB-RES-REAL-01 **OPEN** · FinOps/T7 **FREEZE** · T7-C04 **DEFERRED** · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **NON TERMINÉE** · **≠** W2 closed · **≠** W3 GO · **≠** REAL · **≠** FinOps PASS  *(historique · superseded by W2 POST-CLOSURE TRUTH SYNC / Morris W2 CLOSED)* |
 | **Timestamp maintenance historique W2-G3 post-merge truth sync** | 2026-08-23 12:25 CEST (+0200) — **W2-G3 POST-MERGE TRUTH SYNC** — *(historique · superseded by Phase B post-merge truth sync)* — `origin/main` HEAD **RESOLVE FROM REPOSITORY** · PR **#400 MERGED** · delivery head `a276f170…` · merge `dd852243…` · PR-head CI **`32632461315` SUCCESS** · push/main CI **`32633308148` SUCCESS** · **W2-G3 E+A+B+C INTEGRATED ON MAIN** · governed H→N trajectory through authority boundary · **STOP BEFORE EXECUTE** · D-W2-CI-FINOPS-FREEZE-01 **ADOPTED** · FinOps/T7 **FREEZE** · T7-C04 **DEFERRED** · W2 **NOT FINALLY CLOSED** · **NEXT CAPACITY** *(true at that timestamp)* = Track D / bounded CKC Phase B qualification · **NEXT DECISION GATE** *(true at that timestamp)* = distinct Morris GO Phase B · GO Phase B **NOT CONSUMED** *(true at that timestamp · later CONSUMED · Phase B INTEGRATED via PR #403)* · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · **≠** FinOps fixed/PASS · **≠** Phase B started *(true then)* · **≠** W2 closed · **≠** Product Completion terminée |
 | **Timestamp maintenance historique W2-G2 decision truth sync** | 2026-08-23 02:36 CEST (+0200) — **W2-G2 DECISION TRUTH SYNC** — *(historique · superseded by W2-G3 post-merge then Phase B post-merge truth sync)* — `origin/main` HEAD **RESOLVE FROM REPOSITORY** · W2-G1 **INTEGRATED ON MAIN** · PR **#398 MERGED** · merge `8df647c5e7db8a82c9c3b578ee1603e0851cc579` · push/main CI **`32607589306` SUCCESS** · W2-G2 **DECIDED BY MORRIS** · D-W2-01…04 **ADOPTED** · W2-G2 truth sync Git integration evidence = **RESOLVE FROM REPOSITORY** · W2-G3 **NOT AUTHORIZED** *(true at that timestamp · later satisfied by PR #400)* · GO Phase B distinct **NOT CONSUMED** *(true at that timestamp)* · W2 Delivery **NOT AUTHORIZED** *(true at that timestamp)* · REAL **ZERO** · runtime v3 **NON ADOPTED** · **≠** Phase B started · **≠** W2 implemented · **≠** post-merge candidate SHA/CI embed loop |
@@ -49,10 +50,12 @@
 | **Product Completion Functional Architecture (Cycle 3)** | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · path : `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md` · PR **#378 MERGED** · head `1018aa79d1d8ebb8783d11ce25ff08036764e87e` · merge `18b89ec9d6f1a91f8ff49df9c895299b6676b572` · PR CI **#240 SUCCESS** · post-merge CI **#241 SUCCESS** · post-merge sync PR **#379 MERGED** · sync head `0aa644d935b5df1ba7f4c2278fd63320555b9f6a` · sync merge `134f4105fea09543a100749e74ca5e3be32bfda2` · PR CI **#242 SUCCESS** · post-merge CI **#243 SUCCESS** · final closure PR **#380 MERGED** · head `53aeceea…` · merge `14329c60…` · post-merge CI **#245 SUCCESS** · **POST-MERGE COHERENCE COMPLETE** · PM-R01 **CLOSED** · PM-R02 **CLOSED** · FC-01…FC-15 **APPROVED** · OA-aligned Option A + thin orchestration C **APPROVED** · no parallel architecture · targeted durability technical delta **QUALIFIED** then **partially realized via W1** · FA-R01…FA-R12 **CLOSED** · C1 §H/J.1 + C2 A→W preserved · H-01…H-04 **CARRY** · Confirmation **runtime** durability **IMPLEMENTED AT W1 SCOPE** (requested ephemeral / granted+ durable · PR #395) · ProjectTrajectory durability **IMPLEMENTED AT W1 SCOPE** (PR #395) · **downstream gaps remain** (HD/replan liaison complète · Recovery E2E · taxonomie épistémique complète → W2/W3) · UAT **OPEN** · SC-02 **NON-BLOCKING** · **RESERVE-GOV-EC-ORDER CLOSED** · Pre-M6 debt **CARRY** · source branch cleanup **NOT PERFORMED** · **≠** Architecture technique fully exhausted · **≠** Product Completion terminée · **≠** REAL |
 | **RESERVE-GOV-EC-ORDER** | **CLOSED ON MAIN** via PR **#381** — Build Doctrine execution order aligned with validated C2 / Functional Architecture : HumanDecision → EC Prepare → EC Inspect → Confirmation if required → effective authority → Execute · Confirmation **runtime** durability **IMPLEMENTED AT W1 SCOPE** (PR #395) · remaining continuity/authority gaps stay **DOWNSTREAM** · ≠ reserve reopen |
 | **Morris trajectory decision (post-FA requalification)** | **HISTORICAL** — Governance EC Order Sync → C6 → Next-Cycle Requalification *(superseded for forward path by CKC-first)* |
-| **Morris trajectory decision (post-C6 / CKC)** | **SUPERSEDED FOR FORWARD PATH** — CKC-first + G2 + W1 + W2 delivery path completed · **NOW:** W1 **INTEGRATED** (PR **#395**) · W2 readiness **INTEGRATED** (PR **#398**) · **W2-G1…G3 INTEGRATED** (PR **#400**) · **Track D / Phase B INTEGRATED** (PR **#403**) · **Product Correction R1 INTEGRATED** (PR **#405** / merge `1e4b0dbb…`) · W2 Final Closure Requalification **ACCEPTED BY MORRIS** · **W2 CLOSED BY MORRIS** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · **NEXT CAPACITY** = **NEXT-CAPABILITY REQUALIFICATION** *(distinct · NOT W3)* · full CKC track **DOWNSTREAM W3** · W3 **NOT STARTED / NOT AUTHORIZED** · **≠** Product Completion terminée · **≠** REAL · runtime v3 **NON ADOPTED** |
+| **Morris trajectory decision (post-C6 / CKC)** | **SUPERSEDED FOR FORWARD PATH** — CKC-first + G2 + W1 + W2 completed · **NOW:** **W2 CLOSED BY MORRIS** · PR **#406** truth sync on main (`3a3b1cf…`) · **NEXT-CAPABILITY REQUALIFICATION SATISFIED / CONSUMED** · **GO MORRIS W3 DELIVERY CONSUMED** · **W3 DELIVERY AUTHORIZED BY MORRIS / IN PROGRESS** · **current delivery slice = W3-A Governed Execute** · W3 **NOT CLOSED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · C6 **CLOSED** · REAL **OUT** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED · **≠** REAL · **≠** FinOps PASS |
 | **Product Completion W2 Track D / bounded CKC Phase B** | **INTEGRATED ON MAIN** · PR **#403 MERGED** · head `1cdf4b41270cffe31be28e02e3effe17a1b15477` · merge `e4a93fea77c7edd01c4e6fc2d47455db14e102e8` · PR-head CI **`32645232920` SUCCESS / Required Gate PASS** · head→merge **0-file content delta** · push/main CI **`32646038871` SUCCESS / Required Gate PASS** · D-W2-02 / US-P1-14 / REQ-24 · product-native CKC cognition before Options/Recommendation · delivery + security via **same generic product path** · Recommendation remains Recommendation · no automatic HumanDecision · no authority from CKC · **STOP BEFORE EXECUTE** · legacy OptionSet cutover fail-closed · business-first Pilote output · structured provenance retained · proof **DETERMINISTIC PROVEN** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · W2 later **CLOSED BY MORRIS** *(post-requalification)* · full CKC track **DOWNSTREAM W3** · C6 **CLOSED** · FinOps/T7 **FREEZE** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · **≠** W2 incomplete at Phase B timestamp · **≠** full CKC completion · **≠** REAL BOUNDARY PROVEN · **≠** W3 authorized |
 | **Product Completion W2 Final Closure Requalification** | **ACCEPTED BY MORRIS** · Cycle 9 QA · typology DOC · evidence on `main@1e4b0dbb…` · X01…X08 **PROVEN** · H→N 18-step **PROVEN** · PASS WITH NON-BLOCKING RESERVES · W2-CL-R01…R03 **CLOSED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · proof ceiling **DETERMINISTIC PRODUCT E2E PROVEN** · path `projects/sfia-studio/product-completion/10-product-completion-wave-2-final-closure-qualification.md` · **≠** W3 authorized · **≠** REAL · runtime v3 **NON ADOPTED** |
-| **Product Completion W2 Closure Decision** | **W2 CLOSED BY MORRIS** · exit contracts X01…X08 + integrated H→N path **ACCEPTED AS SUFFICIENT W2 EXIT PROOF** · residuals retained · Product Completion **INCOMPLETE** · **≠** W3 authorized · **≠** Execute · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
+| **Product Completion W2 Closure Decision** | **W2 CLOSED BY MORRIS** · exit contracts X01…X08 + integrated H→N path **ACCEPTED AS SUFFICIENT W2 EXIT PROOF** · residuals retained · Product Completion **INCOMPLETE** · W3 later **AUTHORIZED** under distinct GO · **≠** W3 CLOSED · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
+| **Product Completion W3 Delivery Readiness** | **QUALIFIED** · path `projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md` · GO Morris W3 Delivery **CONSUMED** · W3 scope = backlog existant · C6 **CLOSED** / implement-only · REAL **OUT** · FinOps **FREEZE** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED |
+| **Product Completion W3 Delivery** | **AUTHORIZED BY MORRIS / IN PROGRESS** · current slice **W3-A Governed Execute** (US-P1-04 / FC-10) · canonical `/studio` · deterministic fixture · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** Evidence loop complete |
 | **Product Completion W2 Final Closure Product Correction** | **INTEGRATED ON MAIN** · PR **#405 MERGED** · head `330b36258f5a5fcb117fb562b12ff173b3675d94` · merge `1e4b0dbb8de291f1a02e084f03231d62d04dfb0b` · PR-head CI SUCCESS · push/main CI **`32654262020` SUCCESS** · R01 Phase B Product E2E cognition · R02 material EC amend/reinspect + R1 recovery-safe · C6 **CLOSED** · no `lib/oa` mutation · **≠** W3 · **≠** REAL · runtime v3 **NON ADOPTED** |
 | **Product Completion W2-G3 Delivery** | **INTEGRATED ON MAIN** · PR **#400 MERGED** · delivery head `a276f170faece84a2121f5fe5796c24ae443674d` · merge `dd852243a652e85cce455a68fae5ac7aa13d2bea` · PR-head CI **`32632461315` SUCCESS / Required Gate PASS** · push/main CI **`32633308148` SUCCESS** · E+A+B+C governed trajectory: Options / Recommendation / HumanDecision / EC inspect / conditional Confirmation / authority+executor sufficiency · **STOP BEFORE EXECUTE** · ProjectTrajectory SoT **KEEP** · C6 **CLOSED** · D-W2-CI-FINOPS-FREEZE-01 **ADOPTED** · FinOps/T7 **FREEZE** · T7-C04 **DEFERRED** · Phase B later **INTEGRATED** via PR **#403** · **≠** W2 finally closed · **≠** Execute · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
 | **Product Completion Backlog (Cycle 5)** | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · PR **#393 MERGED** · merge `7750b2a4017338c1a236433c4db8f5cc97dc2feb` · path `projects/sfia-studio/product-completion/05-product-completion-backlog-user-stories.md` · 5 Epics · 4 Waves · P0/P1 cut-line · réserve R5 non bloquante · **≠** Delivery authorized by validation alone · W1 Delivery later **CONSUMED via distinct G3/Morris GOs** |
@@ -67,7 +70,7 @@
 | **ROADMAP-POST-MERGE-CKC-388** | **CLOSED ON MAIN** via PR **#389** / merge `c4dc1c9ce78290f00354e58dde451dd09616f49e` · post-merge CI **`32527209975` SUCCESS** · Roadmap sync integrated on main · **≠** DoctrinePackage runtime binding · **≠** Nora proven |
 | **DoctrinePackage / runtime CKC architecture qualification** | **ARCHITECTURE DIRECTION ADOPTED BY MORRIS — INTEGRATED ON MAIN** via PR **#390 + PR #391** · **G2 materialization DECIDED + GIT-INTEGRATED** via PR **#394** (`b3e978fe…`) · **W1 runtime materialization INTEGRATED** via PR **#395** (`ddd39181…`) · `pkg:sfia-studio-doctrine-v3@1.0.0` · OPTION A root `projects/sfia-studio/app/lib/oa/doctrine/product/` · resolver/repository **KEEP** · D02 Option B **KEEP** · fallback **NONE** · fixture quarantine/test-only → retire later · Product pin **fail-closed** · Phase A package-bound **INTEGRATED** · Phase A **≠** Phase B complete · bounded CKC→Nora seam **PROVEN (W1)** · bounded Phase B / generic multi-cycle cognition **INTEGRATED** (PR **#403**) · full CKC catalog evolvability **DOWNSTREAM W3** · runtime v3 **NON ADOPTED** |
 | **SFIA Studio product design tooling** | **MORRIS DECISION — PENPOT IS THE REFERENCE DESIGN WORKSPACE FOR SFIA STUDIO PRODUCT DESIGN** · Studio product design only · Git remains SoT for governance/contracts/decisions · R-04 EA historical recommendation **SUPERSEDED FOR FUTURE SFIA STUDIO PRODUCT DESIGN** · **≠** global SFIA methodological baseline · **≠** v3 doctrine change · **≠** runtime v3 adoption · EA document **not** retroactively rewritten |
-| **Gates courants** | C1…C6 **INTEGRATED / C6 CLOSED** · CKC 15/15 **ON MAIN** · Backlog Cycle 5 **INTEGRATED** · W1 **INTEGRATED** · W2 readiness / G1–G3 / Phase B / Product Correction **INTEGRATED** · W2 Final Closure Requalification **ACCEPTED BY MORRIS** · **W2 CLOSED BY MORRIS** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · **NEXT GATES** = complete **W2 POST-CLOSURE TRUTH SYNC** integration/post-merge proof → **NEXT-CAPABILITY REQUALIFICATION** *(distinct)* · W3 **NOT STARTED / NOT AUTHORIZED** · Execute **OUT** · REAL **NOT CONSUMED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **NO EXECUTION WITHOUT MORRIS GO** |
+| **Gates courants** | C1…C6 **INTEGRATED / C6 CLOSED** · W1 **CLOSED** · **W2 CLOSED BY MORRIS** · PR **#406** on main · **NEXT-CAPABILITY REQUALIFICATION SATISFIED / CONSUMED** · **GO MORRIS W3 DELIVERY CONSUMED** · **W3 DELIVERY IN PROGRESS** · slice **W3-A** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · REAL **NOT CONSUMED** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · W3 **NOT CLOSED** · **NO REAL WITHOUT DISTINCT MORRIS GO** |
 | **Intégration Git** | **C2 :** PR #369 / head `3c78c6763d0d090bdc38f3866ecd71ed6be219d0` / merge `2406ccda211842fc7f8da3699bb186a30f7dc105` · **Post-merge sync :** PR #370 (integration vehicle · Git evidence authoritative) · CI SFIA Studio **#222** SUCCESS (PR head) · post-merge CI **#223** SUCCESS · source branch `docs/sfia-studio-product-completion-c2-integration-clean` **PRESERVED** · historical unauthorized branch `docs/sfia-studio-product-completion-c2-functional-design` @ `780ab4c5` **PRESERVED FOR AUDIT** · Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · **M4 closure Roadmap :** PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · **M5 Entry Qualification** handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · **M5 Delivery (Option B + W1) :** PR #350 / head `17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11` / merge `8f753218e4fff7d68d78c1d57e9c3e8fb7e60943` · CI SFIA Studio **#184** SUCCESS · post-merge CI **#185** SUCCESS · **M5 UI/Nora durable rehydrate :** PR #351 / head `ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7` / merge `d8961f1d85a98b5d4185f007f16ddac209e2e557` · CI SFIA Studio **#186** SUCCESS · post-merge CI **#187** SUCCESS · M5 exit re-evaluation handoff `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · blob `131c85172bbd6370a3edcd71347a64932c9303ab` · M5 EXIT PROOF **SATISFIED ON MAIN** · **M5 capitalization / Roadmap sync :** PR #352 / head `c26824c602ec041cb1d40e9078191c0f1cde4e95` / merge `3467ecdf74ac2010c45f34545fb8684563dea547` · CI SFIA Studio PR run **#31875337665** SUCCESS · post-merge CI run **#31875621317** SUCCESS · post-merge handoff `0121e184c936f8dc73ffe80e20d43027fec495d7` · blob `4c293ae07a0d516b16d6dd2d4087d3e25858e275` · GO Morris **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · User wording **« ok go pour la modification »** · governed interpretation **ALIGN M5 CLOSURE ROADMAP WITH PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY — KEEP M5 CLOSED — KEEP M5-C — NO UX DESIGN EXECUTION YET — NO FIGMA ACTION YET — NO UI DELIVERY — NO M6 — ZERO REAL — NO PROJECT GIT WRITE** · **M5 closure / Pre-M6 sequencing Roadmap :** PR #353 / title `docs(sfia-studio): close M5 and sequence Pre-M6 UX baseline` / base `3467ecdf74ac2010c45f34545fb8684563dea547` / head `7a744c8cec889be547eebe231279620189819dd0` / merge `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` — records M5 closure + inserts Pre-M6 before M6 · **≠** Slice A candidate (Slice A is later local work) · PRE-M6 USER JOURNEY / UX BASELINE = **FUNCTIONAL BASELINE + GAP READINESS COMPLETE · G-UX-15 EXIT PROOF ACCEPTED / TECHNICAL BLOCKER CLOSED · LOCAL CANDIDATE NOT YET ON MAIN · FIGMA/UI DELIVERY NOT AUTHORIZED** · **G-UX-15 Slice A controlled integration :** PR #354 / title `feat(sfia-studio): close Pre-M6 G-UX-15 execution wiring gap` / base `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` / head `22ae8e5e4bddb0f997384a5e8ba87c9b35245693` / merge `a6df83a640afeb0911cb572d118d27a03c9923a7` · CI SFIA Studio **#192** SUCCESS · post-merge main CI **#193** SUCCESS · post-merge truth **PASS** (exact 5-file SHAs on main) · feature branch **PRESERVED** (no delete) · **Cycle 14 docs sync :** PR #355 / title `docs(sfia-studio): sync Pre-M6 G-UX-15 post-merge current state` / merge `dd284e9f20de89b2c8fc7782e4177d0d125c24d2` — **MERGED ON MAIN** · **historique :** OPEN / DRAFT avant merge · **Cycle 15 visual adoption docs integration :** PR #356 / title `docs(sfia-studio): record Pre-M6 visual contract adoption` / head `3a93d0e5cfd86e46bb795ce22c0f7dd79078ef2a` / merge `50f31994b0d9b5a3a3514e2fa9a063d688071c50` — **MERGED ON MAIN** · CI SFIA Studio **#198** SUCCESS on final PR head · post-merge main CI **#199** SUCCESS · post-merge truth **PASS** · source branch **PRESERVED** (NO BRANCH DELETE) · **historique :** OPEN / DRAFT avant merge · **D-PRE-M6-UX-05 :** ADOPTED AS PRE-M6 VISUAL REFERENCE ON MAIN (Freeze `uUdLBElF2B4dOefaAYt4QY`) — UI Delivery still **NOT AUTHORIZED** · **Cycle 14 PR #356 post-merge current-state sync :** PR #357 / title `docs(sfia-studio): sync PR 356 post-merge current state` / head `70643624c494f16fb91e3bede772a80f4eece783` / merge `b834fdd40d3e7028e80cf7b388b93df2f31e18e4` — **MERGED ON MAIN** · CI SFIA Studio **#200** SUCCESS on PR head · post-merge CI **#201** SUCCESS · source branch **PRESERVED** · **historique :** OPEN / DRAFT avant merge · **PRE-M6 UI DELIVERY GATE / SCOPE QUALIFICATION :** **COMPLETE** — Review Handoff `2577776360c8a5a3492806b447d4bf88f0239898` / blob `9084a97b368472aaaa7ab61f85baf2efcb819e51` — verdict READY FOR MORRIS DELIVERY DECISION (**≠** UI Delivery authorized) — OPTION A = RECOMMENDATION AWAITING MORRIS DECISION *(historique qualification)* · **Cycle 15 Pre-M6 UI gap + CKC trajectory Roadmap :** PR #358 / title `docs(sfia-studio): record Pre-M6 UI gap and CKC trajectory` / head `c91ce1afd498ef9a5275e3b90509e7a045f240a0` / merge `0a80b92cb2c05f5b3f001438988b52c07c3bf0b6` — **MERGED ON MAIN** · CI SFIA Studio **#202** SUCCESS on PR head · post-merge CI **#203** SUCCESS · source branch **PRESERVED** · **historique :** OPEN / DRAFT avant merge · GO Morris **ADOPT PRE-M6 UI DELIVERY SCOPE OPTION A** (user « bon ok go option A ») — OPTION A = **ADOPTED BY MORRIS AS PRE-M6 UI DELIVERY SCOPE** · OPTION A SCOPE ADOPTED **≠** UI DELIVERY EXECUTION AUTHORIZED · NEXT PRODUCT GATE *(historique jusqu’à PR #361)* = **MORRIS PRE-M6 UI DELIVERY EXECUTION AUTHORIZATION — OPTION A** · **PR #359** Option A adoption sync **MERGED** (`0d33478…`) · **PR #360** fake-real progressive proof **MERGED** (`a3ac418…`) · **PRE-M6 PRODUCT VERTICAL SLICE :** PR #361 / title `feat(sfia-studio): consolidate Pre-M6 product vertical slice` / head `3c4c478d7664c6111f38e6c4f49e98042e3a8473` / merge `a53c323e47e5fae1d35671f3ae232609a59b0f3f` — **MERGED ON MAIN** · post-merge CI run **`32122892559` SUCCESS** · source branch `delivery/sfia-studio-pre-m6-ui-option-a` **PRESERVED** · GO Morris **PR #361 READY + MERGE — PRESERVE SOURCE BRANCH — THEN POST-MERGE VALIDATION** · **MORRIS DECISION — CURRENT SFIA STUDIO VERTICAL SLICE ON MAIN IS THE FUNCTIONAL MVP BASELINE FOR THE PRODUCT COMPLETION TRAJECTORY — REUSE EXISTING BACKBONE — DO NOT RESTART FROM ZERO — RUNTIME V3 REMAINS NON ADOPTED** · **MORRIS DECISION — ACCEPT PRE-M6 EXIT FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT — CURRENT MAIN VERTICAL SLICE IS THE SFIA STUDIO FUNCTIONAL MVP BASELINE FOR PRODUCT COMPLETION — CARRY UAT-UX-06 / UAT-RECOVERY-03 / V3-F10 / PROCESS-LOCAL DURABILITY / N7 AS GOVERNED DEBT — RUNTIME V3 REMAINS NON ADOPTED** · PRE-M6 EXIT = **ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT** · PRE-M6 **≠ COMPLETE WITHOUT RESERVES** · NEXT PRODUCT GATE = **GO MORRIS — CYCLE 1 CADRAGE — SFIA STUDIO PRODUCT COMPLETION FROM MVP** (consumable only after this documentation is integrated on main · **NOT AUTHORIZED now**) · NEXT REPOSITORY GATE = **MORRIS REVIEW — PRODUCT COMPLETION REBASELINE DRAFT PR — NO MERGE UNTIL EXPLICIT GO** |
 | **Sources** | Git `main` @ `a53c323e47e5fae1d35671f3ae232609a59b0f3f` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347/#348/#349/#350/#351/#352/#353/#354/#355/#356/#357/#358/#359/#360/#361 · CI #158/#162/#166/#172/#176/#178/#184/#185/#186/#187/#192/#193/#197/#198/#199/#200/#201/#202/#203 · Pre-M6 UI Delivery qualification handoff `2577776360c8a5a3492806b447d4bf88f0239898` / blob `9084a97b368472aaaa7ab61f85baf2efcb819e51` · GO Morris **ADOPT PRE-M6 UI DELIVERY SCOPE OPTION A** · PR #352 CI run #31875337665 / post-merge #31875621317 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · D-PRE-M6-UX-05 visual review handoff `69106c82024158889f77e9d31508a222ea5f3a0f` / blob `3593ddbdc286cd244790f0ca1d2c421128202c5c` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · M5 Entry Qualification handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · GO Morris **VALIDATE D-PRE-M6-UX-05 FIGMA VISUAL CONTRACT — ADOPT AS PRE-M6 VISUAL REFERENCE** · M4 Product path on main `projects/sfia-studio/app/**` |
 | **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M5 Entry Qualification **COMPLETE** · M5 architecture trajectory **ADOPTED BY MORRIS** · M5 Delivery **IMPLEMENTED ON MAIN** (PR #350) · M5 UI rehydrate **IMPLEMENTED ON MAIN** (PR #351) · M5 technical/functional exit proof **SATISFIED ON MAIN** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · M5 CLOSED **≠** M6 AUTHORIZED · M5 CLOSED **≠** M6 STARTED · M5 CLOSED **≠** runtime v3 ADOPTED · M5 CLOSED **≠** global v3 baseline promoted · M5 CLOSED **≠** M5-C retired · M5 exit accepted **≠** global Cursor REAL authorization · M5 CLOSED future **≠** M6 automatically authorized · Pre-M6 trajectory decided **≠** Pre-M6 UX qualification executed · **D-PRE-M6-UX-05 ADOPTED AS PRE-M6 VISUAL REFERENCE ≠ UI Delivery authorized ≠ runtime implemented ≠ browser/product E2E proven ≠ Figma/runtime aligned ≠ WCAG compliant ≠ Pre-M6 complete ≠ historical UI retired** · Accepted M-03/M-04/provenance reserves ≠ reserves closed · new UX baseline **≠** runtime rewrite · existing UI not canonical **≠** existing UI automatically deleted · UI asset audit **COMPLETE/CLASSIFIED** **≠** individual dispositions ADOPTED · existing UI audit **≠** REPLACE/retirement authorized · M1→M5 runtime KEEP **≠** all runtime complete · Pre-M6 user proof **≠** runtime v3 ADOPTED · M6 after Pre-M6 **≠** M6 automatically authorized · Validated UX decisions in framing **30/37** (CC-D01) prevail over older candidate wording in framing **11** · M5-A OPTION B **IMPLEMENTED ON MAIN** · M5-B W1 **IMPLEMENTED ON MAIN** · M5-B W1 factual write-back **≠** Recommendation becomes Decision · Recommendation **≠** HumanDecision · Recommendation **≠** gate consumed · Recommendation **≠** ExecutionAuthority · LPS factual evidence link **≠** structural trajectory validation · readback **≠** execution · remount UI visibility **≠** automatic next-cycle launch · M5-C KEEP TEMPORARY WITH EXIT **≠** technical journal retired · durable Product Attempt **≠** technical M4 journal automatically obsolete · M5 implementation **≠** runtime v3 ADOPTED · M5 implementation **≠** global v3 baseline promoted · M5 ZERO REAL **≠** global Cursor REAL authorization · M5 architecture ADOPTED **≠** M6 started · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **unchanged by M5 architecture decision** **≠** M4/M5 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · runtime v3 **NON ADOPTED** · ≠ full OA durable · G-UX-15 technical blocker **CLOSED BY MORRIS** ≠ Pre-M6 complete · G-UX-15 exit proof accepted ≠ browser/product E2E proven · fixture-safe proof accepted ≠ REAL proof · G-UX-15 Slice A **MERGED ON MAIN** (PR #354) ≠ Pre-M6 complete · merged on main ≠ product/browser E2E proven · merged on main ≠ UI Delivery/M6 authorized · Pre-M6 progress ≠ M6 authorized · Confirmation process-local = KEEP RESERVE *(HISTORICAL Pre-M6 / G-UX-15)* · **SUPERSEDED for Confirmation by W1 selective durability** · **≠** restart-safe Confirmation as full envelope · **PR #356 MERGED ≠ UI Delivery authorized** · CI #197/#198/#199 SUCCESS ≠ Pre-M6 complete ≠ UI Delivery authorized · post-merge truth PASS ≠ UI Delivery gate consumed · UI Delivery qualification COMPLETE ≠ UI Delivery authorized · **Option A SCOPE ADOPTED BY MORRIS ≠ UI Delivery execution authorized** · gap treatment adopted as scope ≠ gap closed · G-UX-08 deferred ≠ G-UX-08 closed · G-UX-09 accepted ≠ Conversation durable · Confirmation KEEP *(historical Pre-M6)* ≠ restart-safe · G-UX-11 planned ≠ browser E2E proven · M7 CKC 15/15 future ≠ CKC complete now ≠ CKC Delivery authorized · 4 pilots + 11 fallback ≠ CKC system complete · CKC→v2.6 capitalization option ≠ v2.6 modification decided · CKC validation future ≠ runtime v3 ADOPTED · PR #357 MERGED ≠ UI Delivery authorized · CI #201 SUCCESS ≠ Pre-M6 complete · PR #358 MERGED ≠ UI Delivery authorized · CI #202/#203 SUCCESS ≠ Pre-M6 complete ≠ Delivery authorized · Option A scope adopted ≠ Delivery GO consumed · Execution Authorization IS the Delivery GO ≠ second Delivery GO required · G-UX-11 E2E exit proof ≠ Delivery entry prerequisite · global v3 baseline **NOT PROMOTED** · **PR #361 MERGED ≠ PRE-M6 COMPLETE ≠ PRE-M6 EXIT ACCEPTED ≠ runtime v3 ADOPTED ≠ M6 AUTHORIZED ≠ M7 AUTHORIZED ≠ CKC 15/15 COMPLETE ≠ generic Cursor write/dev/commit/push/PR proven** · **MVP FUNCTIONAL BASELINE ≠ produit final ≠ UX finale ≠ production-ready ≠ generic ExecutionContract complete** · Product Completion trajectory recorded **≠** Cycle 1 Cadrage authorized **≠** Delivery authorized · PRE-M6 requalification **≠** PRE-M6 CLOSED · **PRE-M6 EXIT ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT ≠ PRE-M6 COMPLETE ≠ PRE-M6 all gaps closed ≠ runtime v3 ADOPTED ≠ M6 STARTED ≠ M6 AUTHORIZED ≠ Product Completion Delivery authorized ≠ Cycle 1 Cadrage authorized** |
@@ -128,9 +131,9 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | Product Completion Product Screens & Visual State Contract | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · `projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md` · PR #376 / head `6e2cd066…` / merge `7d2f9a61…` · PR CI **#236 SUCCESS** · post-merge CI **#237 SUCCESS** · Penpot `63bdc57a…` page 03 · 17 screens · page 04 = 0 · Components 0 · C1 alignment PASS · PASS 3 PASS WITH ONE NON-BLOCKING EVIDENCE-FRAMING RESERVE · UX-BLK-01/02/03 CLOSED · H-01…H-04 **CARRY** · source branch cleanup **COMPLETED** · **≠** Components · **≠** Delivery |
 | Product Completion Functional Architecture (Cycle 3) | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md` · PR #378 / head `1018aa79…` / merge `18b89ec9…` · PR CI **#240 SUCCESS** · post-merge CI **#241 SUCCESS** · post-merge sync PR **#379** / head `0aa644d…` / merge `134f4105…` · PR CI **#242 SUCCESS** · post-merge CI **#243 SUCCESS** · final closure PR **#380** / head `53aeceea…` / merge `14329c60…` · post-merge CI **#245 SUCCESS** · **POST-MERGE COHERENCE COMPLETE** · PM-R01/PM-R02 **CLOSED** · FC-01…FC-15 APPROVED · OA Option A + thin C APPROVED · targeted durability delta QUALIFIED then **W1-realized for Confirmation + ProjectTrajectory** · FA-R01…FA-R12 CLOSED · **RESERVE-GOV-EC-ORDER CLOSED** · downstream HD/replan / Phase B / Recovery E2E remain · **≠** Product Completion terminée · **≠** Delivery W2+ |
 | COMPLETED / INTEGRATED | **C1 CADRAGE** · **C2 FUNCTIONAL DESIGN** · **UX EXPERIENCE ARCHITECTURE** · **E2E WIREFRAMES & INTERACTION MODEL** · **PRODUCT SCREENS & VISUAL STATE CONTRACT** · **FUNCTIONAL ARCHITECTURE (Cycle 3)** · post-merge sync PR **#379** · final closure PR **#380** · PR #369 / `2406ccda…` · PR #370 post-merge sync **HISTORICAL / MERGED** · PR #372 / `fb311f2f…` · PR #373 / `6b67ada7…` · PR #374 / `404d2d3e…` · PR #375 post-merge sync · PR #376 / `7d2f9a61…` · PR #378 / `18b89ec9…` · PR #379 / `134f4105…` · PR #380 / `14329c60…` |
-| CURRENT REPOSITORY TRANSITION | W2 Product Correction **INTEGRATED** (PR **#405** / merge `1e4b0dbb…` / push CI **`32654262020` SUCCESS**) · W2 Final Closure Requalification **ACCEPTED BY MORRIS** · **W2 CLOSED BY MORRIS** · W2 Post-Closure Truth Sync **IN PROGRESS / INTEGRATION CANDIDATE** · FinOps/T7 **FREEZE** · W3 **NOT STARTED / NOT AUTHORIZED** · REAL **OUT** · Product Completion **INCOMPLETE** · **≠** W3 GO · **≠** FinOps PASS |
-| NEXT ORDERED STEP | Complete **W2 POST-CLOSURE TRUTH SYNC** (doc10 + Roadmap + disclosures) Git integration + post-merge proof → **NEXT-CAPABILITY REQUALIFICATION** *(distinct cycle · NOT STARTED)* · **≠** W3 GO · **≠** REAL GO |
-| NEXT PRODUCT CAPABILITY | **NEXT-CAPABILITY REQUALIFICATION** — after truth-sync post-merge proof · re-evaluate next Product Completion capacity under distinct Morris GO · **≠** silent W3 open · W3 **NOT AUTHORIZED** · REAL **OUTSIDE** · runtime v3 **NON ADOPTED** |
+| CURRENT REPOSITORY TRANSITION | W3-A R13–R16 + R09-R targeted correction **LOCAL CANDIDATE** (dirty · **no project commit/push/PR**) · awaiting ChatGPT re-review · FinOps/T7 **FREEZE** · REAL **OUT** · W4 **NOT STARTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED · **≠** on main |
+| NEXT ORDERED STEP | ChatGPT re-review of FULL Review Pack → Morris Git integration GO (if PASS) · **≠** W3 closure · **≠** REAL GO · **W3-B DO NOT START** |
+| NEXT PRODUCT CAPABILITY | **W3-A Governed Execute** — local R13–R16/R09-R candidate · ChatGPT re-review gate · W3-B **DO NOT START** · W3 macro **NOT CLOSED** · REAL **OUT** · runtime v3 **NON ADOPTED** |
 | M6 / M7 | **HISTORICAL MILESTONES — SUPERSEDED / ABSORBED BY PRODUCT COMPLETION** · traces conservées · hors forward critical path |

 ### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`) — historique / harvest
@@ -498,9 +501,9 @@ GO : **ADOPT W2-G2 DECISION PACK** — D-W2-01…04 · TD-C6-03 included W2 by a
 | **Intégration** | PR #350 merge `8f753218…` · PR #351 merge `d8961f1d…` · capitalization PR #352 merge `3467ecd…` · exit handoff `54b0f5b4…` · post-merge handoff `0121e184…` |
 | **Dépendances** | M4 — **SATISFIED / CLOSED** · Architecture — **CONSUMED** · Delivery — **CONSUMED / MERGED** · UI rehydrate — **CONSUMED / MERGED** · Capitalization Roadmap — **CONSUMED / MERGED** · Closure gate — **CONSUMED** |
 | **Statut** | **M5 EXIT PROOF ACCEPTED BY MORRIS — CLOSED** |
-| **Next convergence capability (current)** | **NEXT-CAPABILITY REQUALIFICATION** — **W2 CLOSED BY MORRIS** · Requalification **ACCEPTED** · Product Correction PR **#405** · Phase B PR **#403** · W2-G3 PR **#400** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · W3 **NOT STARTED / NOT AUTHORIZED** · runtime v3 **NON ADOPTED** |
+| **Next convergence capability (current)** | **W3-A Governed Execute** — **W3 DELIVERY AUTHORIZED BY MORRIS / IN PROGRESS** · **NEXT-CAPABILITY REQUALIFICATION SATISFIED / CONSUMED** · **W2 CLOSED BY MORRIS** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · W3 **NOT CLOSED** · REAL **OUT** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** |
 | **Next immediate gate (repo)** | Roadmap Phase B post-merge truth-sync Git integration = **DISTINCT MORRIS GO AFTER CHATGPT REVIEW** · aucun autre write projet automatique · **NO AUTOMATIC PROJECT WRITE** |
-| **Next product gate** | **NEXT-CAPABILITY REQUALIFICATION** → distinct cycle · **≠** W3 authorized · **≠** REAL |
+| **Next product gate** | W3-A ChatGPT re-review → Morris Git integration GO (if PASS) · W3-B **DO NOT START** · **≠** W3 CLOSED · **≠** REAL |
 | **M6 / M7 disposition** | Historical milestones **SUPERSEDED / ABSORBED BY PRODUCT COMPLETION** |


@@ -592,12 +595,12 @@ UAT-RECOVERY-03 Git test: prepared confirmation gate is process-local React stat
 | Champ | Contenu |
 | --- | --- |
 | **ID** | PRODUCT-COMPLETION |
-| **Statut** | trajectory **ACTIVE** · C1…C6 / UX / backlog / W1 / W2 readiness **INTEGRATED** selon états existants · **W1 Delivery INTEGRATED ON MAIN** (PR #395 · **8/8 PASS**) · **W2-G1…G3 E+A+B+C INTEGRATED ON MAIN** (PR **#400**) · **Track D / bounded CKC Phase B INTEGRATED ON MAIN** (PR **#403**) · FinOps/T7 **FREEZE** · Product Completion globale **INCOMPLETE / NON TERMINÉE** · **W2 CLOSED BY MORRIS** · next = **NEXT-CAPABILITY REQUALIFICATION** · W3 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** |
+| **Statut** | trajectory **ACTIVE** · C1…C6 / UX / backlog / W1 / W2 **INTEGRATED** · **W2 CLOSED BY MORRIS** · **W3 DELIVERY AUTHORIZED BY MORRIS / IN PROGRESS** · current slice **W3-A** · FinOps/T7 **FREEZE** · Product Completion globale **INCOMPLETE / NON TERMINÉE** · W3 **NOT CLOSED** · REAL **OUT** · W4 **NOT STARTED** · runtime v3 **NON ADOPTED** |
 | **Principe** | Do **not** restart M1→M5. Reuse the current main MVP as backbone. Relaunch a complete project lifecycle to build the target SFIA Studio product. |
 | **Morris MVP wording** | **CURRENT SFIA STUDIO VERTICAL SLICE ON MAIN IS THE FUNCTIONAL MVP BASELINE FOR THE PRODUCT COMPLETION TRAJECTORY — REUSE EXISTING BACKBONE — DO NOT RESTART FROM ZERO — RUNTIME V3 REMAINS NON ADOPTED** |
 | **MVP means** | exploitable proof of the fundamental product loop · technical/functional base to reuse · starting point of the new product lifecycle |
 | **MVP does not mean** | PRE-M6 automatically closed · final product · runtime v3 ADOPTED · generic Cursor execution complete · CKC complete · final UX · production-ready |
-| **Next cycle** | **NEXT-CAPABILITY REQUALIFICATION** — **W2 CLOSED BY MORRIS** · truth sync integration candidate · W3 **NOT AUTHORIZED** · **NO EXECUTION WITHOUT MORRIS GO** |
+| **Next cycle** | **W3-A Governed Execute** (in progress under GO W3 Delivery) · W3 **NOT CLOSED** · **NO REAL WITHOUT DISTINCT MORRIS GO** |
 | **Cycle 2 objective** | Conception fonctionnelle **VALIDATED + INTEGRATED** · **next-capability execution NOT AUTHORIZED** until distinct Morris GO |

 #### Product Completion target domains (D-PC-01 adopted)
