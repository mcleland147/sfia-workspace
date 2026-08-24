# SFIA Studio — W3-A R16 Reserved Confirmation + R09 Visual Lifecycle — FULL Review Pack

## Regularization note
This pack supersedes handoff `42ed7be078c8f59f787528fe1870262182feebe1` / blob `237d5c370db67281b4e0f4ee76aadb0f0e7b3df4`.
Reason: previous pack omitted COMPLETE SOURCE of untracked W3-A files (Playwright spec, w3aGovernedExecute.test.ts, doc11, and remaining W3-A untracked sources).
No product-code change in this regularization pass. Untracked sources below are the current working-tree files.

## 1. Identity / Git
- timestamp Europe/Paris: 2026-08-24T08:58:48+0200
- timestamp UTC: 2026-08-24T06:58:48Z
- repo / workspace: /Users/morris/Projects/sfia-workspace
- branch: `delivery/sfia-studio-product-completion-w3-a-governed-execute`
- HEAD: `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed`
- origin/main: `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed`
- merge-base: `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed`
- staged: empty
- project commit/push/PR: none

### git status --short
```
 M projects/sfia-studio/app/__tests__/oa/execution-contract/executionContractGovernance.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/amendExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/attemptSupport.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/executionContractStatusWriter.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/checkExecutionAuthorization.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/validateExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? .tmp-sfia-review/
?? projects/eventops-poc/
?? projects/flex-office-demo/
?? projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts
?? projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts
?? projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts
?? projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts
?? projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
?? projects/sfia-studio/app/features/project-assistant/w2/w3aQualifiedExecutionEffects.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts
?? projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md
```

### git diff --cached --name-status
```
(empty)
```

### git diff --name-status
```
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
```

### git diff --stat
```
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
```

## 2. Input handoff (prior published pack that ChatGPT marked INCOMPLETE)
- commit: `42ed7be078c8f59f787528fe1870262182feebe1`
- blob: `237d5c370db67281b4e0f4ee76aadb0f0e7b3df4`
- MATCH: YES
- SHA recopy error in prior Cursor report (`42ed7be064cf…`) is acknowledged and corrected here.

## 3. Morris decisions consumed
1. GO MORRIS — W3-A TARGETED CORRECTION — CLOSE REMAINING CHATGPT BLOCKERS R16 RESERVED CONFIRMATION SEMANTICS + R09 ACCEPTED/RUNNING VISUAL PROOF
2. Prior: GO W3 DELIVERY; W3-A R01; W3-A B2/B3; R13/R14/R15/R16/R09-R
This regularization does not consume a new construction GO.

## 4. Convergence / W3-W4
| Item | Value |
|---|---|
| Capability | V3-F05 + V3-F11 + V3-F12 / US-P1-04 |
| Milestone | W3-A Governed Execute |
| W1/W2/C6 | CLOSED |
| W3 | IN PROGRESS · candidate awaiting re-review |
| W3-B | DO NOT START |
| W4 | OUT / NOT TOUCHED |
| REAL | OUT |
| runtime v3 | NON ADOPTED |

### W4 Boundary Check
- US-P1-10 / Product Experience global: NOT TOUCHED
- US-P1-13 / Accessibility baseline: NOT TOUCHED
- S1→S12 global closure: NOT TOUCHED
- Global UAT: NOT STARTED
- Design/Figma/Penpot: NOT TOUCHED
- Responsive/polish sweep: NOT PERFORMED
- Product UI semantic change this regularization: NONE

## 5. Files created/modified
### Tracked (22) — unified diffs in section 7
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

### Untracked W3-A candidate files — COMPLETE SOURCE in section 8
- `projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts` (965 lines)
- `projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts` (413 lines)
- `projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md` (181 lines)
- `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts` (597 lines)
- `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts` (427 lines)
- `projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts` (474 lines)
- `projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts` (370 lines)
- `projects/sfia-studio/app/features/project-assistant/w2/w3aQualifiedExecutionEffects.ts` (394 lines)
- `projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts` (86 lines)

## 6. R16 / R09 factual matrix (unchanged vs prior correction; this pack only transports missing sources)
| ID | Status |
|---|---|
| R16-A contradiction fail-closed including confirmed | CORRECTED in candidate |
| R16-B system-owned namespaces at amendment boundary | CORRECTED in candidate |
| R16 exploit regression (legacy validated/N1 forge NOT_REQUIRED) | present in w3aGovernedExecute.test.ts COMPLETE SOURCE below |
| R09 visual accepted/running/terminal | PNG 07/08/09 + manifest |
| R09 harness retain/release Server Actions | COMPLETE SOURCE of Playwright spec below |

### isExecutionReadyStatus order
1. analyze constraints
2. if contradiction REQUIRED && NOT_REQUIRED => false
3. confirmed (coherent) => true
4. validated + N1 + NOT_REQUIRED marker + no REQUIRED => true
5. else false

### R09 harness (from current spec, transported below)
- Playwright `page.route('**/*')` TEST-ONLY
- Continues non-POST and POSTs without `next-action`
- Execute Next-Action POST #1 (Select) continues immediately
- POST #2 (Start) waits until UI shows accepted/accepted, then awaits explicit `releaseStartForCapture` after screenshot 07
- POST #3 (Complete) waits until UI shows accepted|running / running, then awaits `releaseCompleteForCapture` after screenshot 08
- Does not rewrite payloads, substitute responses, mutate DOM, or call Start/Complete outside the product Execute path
- No product setTimeout / sleep

## R09 manifest
```
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
```

## 7. Unified diffs of tracked files
```diff
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
```

## 8. COMPLETE SOURCE — untracked W3-A files
These files are untracked in the dirty candidate (not in origin/main). Source below is the current working-tree content.

### COMPLETE SOURCE: `projects/sfia-studio/app/__tests__/project-assistant/w3aGovernedExecute.test.ts`
```ts
// @vitest-environment node
/**
 * W3-A targeted correction — actual work / scope / Confirmation / lifecycle.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { prepareExecutionContractFromW2Decision } from "@/features/project-assistant/w2/prepareExecutionContractFromW2Decision";
import {
  assertNotF3FixtureSemantics,
  deriveW3AExecutionEnvelope,
} from "@/features/project-assistant/w2/w3aProductExecutionSemantics";
import {
  buildActualExecutionWork,
  isHighRiskPolicyOnlyOperationKind,
  projectConfirmationRequirementFromEffects,
  W3A_PRODUCT_SCOPE,
  W3A_PRODUCT_TARGET_WORKSPACE,
} from "@/features/project-assistant/w2/w3aActualExecutionWork";
import {
  buildQualifiedExecutionEffects,
  deriveReversibilityFromEffects,
  projectRequiredAuthorityFromEffects,
  qualifyDefaultW3ATemporaryArtifactEffects,
} from "@/features/project-assistant/w2/w3aQualifiedExecutionEffects";
import {
  EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
  assertUserAmendableExecutionConstraint,
  hasConfirmationConstraintContradiction,
  isExecutionReadyStatus,
  isSystemOwnedExecutionConstraint,
} from "@/lib/oa/execution-contract";
import { amendExecutionContractWithConstraint } from "@/features/project-assistant/w2/amendExecutionContract";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type DecisionBasis,
} from "@/lib/oa/decision";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import {
  BOUNDED_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  W3A_BOUNDED_FIXTURE_AGENT_ID,
  W3A_FIXTURE_ALLOWED_SCOPES,
} from "@/lib/vertical-slice-runtime/w3aProductFixtureWiring";
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

function asWork(
  value: ReturnType<typeof buildActualExecutionWork>,
): import("@/features/project-assistant/w2/w3aActualExecutionWork").ActualExecutionWork {
  if ("ok" in value && value.ok === false) {
    throw new Error(value.message);
  }
  return value as import("@/features/project-assistant/w2/w3aActualExecutionWork").ActualExecutionWork;
}

function sampleBasis(scope?: string): DecisionBasis {
  return {
    sourceType: "trajectory_option",
    sourceRef: "optset:test",
    sourceDigest: "a".repeat(64),
    projectId: "prj:test",
    proposalContext: { lpsId: "lps:test", lpsVersion: 1 },
    trajectoryContext: {
      trajectoryId: "trj:test",
      candidateVersion: 1,
      optionRefs: [GOVERNED_OPTION_REF],
      selectedOptionRef: GOVERNED_OPTION_REF,
      recommendedOptionRef: GOVERNED_OPTION_REF,
    },
    executionBasis: {
      objective: "obj",
      scope,
      expectedOutcome: "outcome",
      stopConditions: ["STOP"],
    },
  };
}

describe("W3-A actual work provenance", () => {
  it("W2 GOVERNED alone does not select temp-artifact", () => {
    const env = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      ),
      selectedOptionRef: GOVERNED_OPTION_REF,
      selectedOptionIntent:
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      selectedOptionLabel: "Governed",
      projectObjective: "obj",
    });
    expect(env.ok).toBe(false);
    if (env.ok) return;
    expect(env.code).toBe("EFFECTS_UNRESOLVED");
  });

  it("W2 BOUNDED alone does not select temp-artifact", () => {
    const env = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(
        "Cadrer un périmètre réversible et resserré, décider, préparer puis inspecter avant de statuer.",
      ),
      selectedOptionRef: BOUNDED_OPTION_REF,
      selectedOptionIntent:
        "Cadrer un périmètre réversible et resserré, décider, préparer puis inspecter avant de statuer.",
      selectedOptionLabel: "Bounded",
      projectObjective: "obj",
    });
    expect(env.ok).toBe(false);
    if (env.ok) return;
    expect(env.code).toBe("EFFECTS_UNRESOLVED");
  });

  it("qualifyDefaultW3ATemporaryArtifactEffects is fail-closed (no W2 fallback)", () => {
    const q = qualifyDefaultW3ATemporaryArtifactEffects({
      projectId: "prj:x",
      scopeIn: "anything",
      trajectoryOptionRef: GOVERNED_OPTION_REF,
    });
    expect(q.ok).toBe(false);
    if (q.ok) return;
    expect(q.code).toBe("EFFECTS_UNRESOLVED");
  });

  it("actual TEMP_ARTIFACT work → product:generate-temporary-artifact + coherent scope IN/OUT", () => {
    const work = buildActualExecutionWork({
      operationKind: "generate-temporary-artifact",
      projectId: "prj:x",
      projectTitle: "Demo",
      objective: "obj",
      qualificationSource: "test",
    });
    const actual = asWork(work);
    expect(actual.scopeIn).toBe(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
    expect(actual.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
    expect(actual.scopeOut).toContain("DURABLE_PROJECT_WRITE");
    expect(actual.scopeOut).toContain("GIT_PUSH");
    expect(actual.scopeOut).toContain("REAL");
    // R13 — scopeOut must not forbid the current action/scopeIn effect.
    expect(actual.scopeOut).not.toContain("TEMPORARY_ARTIFACT");
    expect(actual.scopeOut).not.toContain(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
    const env = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      ),
      selectedOptionRef: GOVERNED_OPTION_REF,
      selectedOptionIntent:
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      selectedOptionLabel: "Governed",
      projectObjective: "obj",
      actualWork: actual,
    });
    expect(env.ok).toBe(true);
    if (!env.ok) return;
    expect(env.envelope.action).toBe("product:generate-temporary-artifact");
    expect(env.envelope.scope).toBe(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
    expect(env.envelope.scope).not.toContain("décider");
    expect(env.envelope.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
    expect(env.envelope.requiredAuthority).toBe("N1");
    expect(env.envelope.effectConfirmationRequired).toBe(true);
    expect(env.envelope.effectConfirmationLevel).toBe("N1");
    expect(env.envelope.constraints).toContain(
      "EFFECT_CONFIRMATION_REQUIRED:N1",
    );
    expect(env.envelope.constraints).not.toContain(
      EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
    );
  });

  it("read scopeOut forbids mutations; never forbids read itself (R13)", () => {
    const read = asWork(
      buildActualExecutionWork({
        operationKind: "read",
        projectId: "prj:x",
        qualificationSource: "test",
      }),
    );
    expect(read.scopeIn).toBe(W3A_PRODUCT_SCOPE.READ);
    expect(read.scopeOut).toContain("GIT_PUSH");
    expect(read.scopeOut).toContain("DURABLE_PROJECT_WRITE");
    expect(read.scopeOut).not.toContain("READ");
    expect(read.scopeOut).not.toContain(W3A_PRODUCT_SCOPE.READ);
  });

  it("high-risk operationKind is policy-only — not ActualExecutionWork (R15)", () => {
    expect(isHighRiskPolicyOnlyOperationKind("push")).toBe(true);
    expect(isHighRiskPolicyOnlyOperationKind("read")).toBe(false);
  });

  it("distinct actual operations change action/scope without changing W2 option", () => {
    const intent =
      "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.";
    const sim = buildActualExecutionWork({
      operationKind: "simulate",
      projectId: "prj:x",
      qualificationSource: "test",
    });
    const read = buildActualExecutionWork({
      operationKind: "read",
      projectId: "prj:x",
      qualificationSource: "test",
    });
    const simWork = asWork(sim);
    const readWork = asWork(read);
    const envSim = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(intent),
      selectedOptionRef: GOVERNED_OPTION_REF,
      selectedOptionIntent: intent,
      selectedOptionLabel: "Governed",
      projectObjective: "obj",
      actualWork: simWork,
    });
    const envRead = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(intent),
      selectedOptionRef: GOVERNED_OPTION_REF,
      selectedOptionIntent: intent,
      selectedOptionLabel: "Governed",
      projectObjective: "obj",
      actualWork: readWork,
    });
    expect(envSim.ok && envRead.ok).toBe(true);
    if (!envSim.ok || !envRead.ok) return;
    expect(envSim.envelope.action).toBe("product:simulate");
    expect(envRead.envelope.action).toBe("product:read");
    expect(envSim.envelope.scope).toBe(W3A_PRODUCT_SCOPE.SIMULATE);
    expect(envRead.envelope.scope).toBe(W3A_PRODUCT_SCOPE.READ);
    expect(envSim.envelope.scope).not.toBe(envRead.envelope.scope);
  });
});

describe("W3-A effects → authority / Confirmation", () => {
  it("READ/SIMULATE/TEMP → N1; WRITE/COMMIT → N2; PUSH → N3", () => {
    expect(
      projectRequiredAuthorityFromEffects({
        effectClass: "read",
        rollbackAvailable: true,
        protectedBoundaries: [],
      }),
    ).toMatchObject({ ok: true, requiredAuthority: "N1" });
    expect(
      projectRequiredAuthorityFromEffects({
        effectClass: "generate-temporary-artifact",
        rollbackAvailable: true,
        protectedBoundaries: [],
      }),
    ).toMatchObject({ ok: true, requiredAuthority: "N1" });
    expect(
      projectRequiredAuthorityFromEffects({
        effectClass: "local-write",
        rollbackAvailable: true,
        protectedBoundaries: [],
      }),
    ).toMatchObject({ ok: true, requiredAuthority: "N2" });
    expect(
      projectRequiredAuthorityFromEffects({
        effectClass: "push",
        rollbackAvailable: false,
        protectedBoundaries: [],
      }),
    ).toMatchObject({ ok: true, requiredAuthority: "N3" });
  });

  it("read → no Confirmation; temp weak → N1 Confirmation; commit → N2 Confirmation", () => {
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "read",
        protectedBoundaries: [],
        rollbackAvailable: true,
        weakBoundary: true,
      }),
    ).toMatchObject({ required: false });
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "generate-temporary-artifact",
        protectedBoundaries: [],
        rollbackAvailable: true,
        weakBoundary: true,
      }),
    ).toMatchObject({ required: true, level: "N1" });
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "commit",
        protectedBoundaries: [],
        rollbackAvailable: true,
        weakBoundary: false,
      }),
    ).toMatchObject({ required: true, level: "N2" });
  });

  it("R14: protected floor never downgrades N3; protected raises to min N2", () => {
    for (const effectClass of [
      "push",
      "pull-request",
      "merge",
      "critical-delete",
      "doctrine-change",
      "baseline-promotion",
    ] as const) {
      expect(
        projectConfirmationRequirementFromEffects({
          effectClass,
          protectedBoundaries: ["protected:path"],
          rollbackAvailable: false,
          weakBoundary: false,
        }),
      ).toMatchObject({ required: true, level: "N3" });
    }
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "local-write",
        protectedBoundaries: ["protected:path"],
        rollbackAvailable: true,
        weakBoundary: false,
      }),
    ).toMatchObject({ required: true, level: "N2" });
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "generate-temporary-artifact",
        protectedBoundaries: ["protected:path"],
        rollbackAvailable: true,
        weakBoundary: true,
      }),
    ).toMatchObject({ required: true, level: "N2" });
    expect(
      projectConfirmationRequirementFromEffects({
        effectClass: "read",
        protectedBoundaries: ["protected:path"],
        rollbackAvailable: true,
        weakBoundary: true,
      }),
    ).toMatchObject({ required: true, level: "N2" });
  });

  it("R16 readiness: confirmed true; marked validated/N1 true; legacy unmarked false", () => {
    expect(
      isExecutionReadyStatus({
        status: "confirmed",
        requiredAuthority: "N1",
        constraints: [],
      }),
    ).toBe(true);
    expect(
      isExecutionReadyStatus({
        status: "validated",
        requiredAuthority: "N1",
        constraints: [EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED],
      }),
    ).toBe(true);
    expect(
      isExecutionReadyStatus({
        status: "validated",
        requiredAuthority: "N1",
        constraints: [],
      }),
    ).toBe(false);
    expect(
      isExecutionReadyStatus({
        status: "validated",
        requiredAuthority: "N2",
        constraints: [EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED],
      }),
    ).toBe(false);
    expect(
      isExecutionReadyStatus({
        status: "validated",
        requiredAuthority: "N1",
        constraints: [
          EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
          "EFFECT_CONFIRMATION_REQUIRED:N1",
        ],
      }),
    ).toBe(false);
    expect(
      isExecutionReadyStatus({
        status: "confirmation_required",
        requiredAuthority: "N1",
        constraints: ["EFFECT_CONFIRMATION_REQUIRED:N1"],
      }),
    ).toBe(false);
    expect(
      isExecutionReadyStatus({
        status: "confirmed",
        requiredAuthority: "N1",
        constraints: [
          EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
          "EFFECT_CONFIRMATION_REQUIRED:N1",
        ],
      }),
    ).toBe(false);
    expect(
      hasConfirmationConstraintContradiction([
        EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
        "EFFECT_CONFIRMATION_REQUIRED:N1",
      ]),
    ).toBe(true);
  });

  it("R16 reserved namespaces reject user amendment forgery", () => {
    expect(
      isSystemOwnedExecutionConstraint(EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED),
    ).toBe(true);
    expect(
      isSystemOwnedExecutionConstraint("EXECUTION_CONFIRMATION_EVALUATED:FORGED"),
    ).toBe(true);
    expect(isSystemOwnedExecutionConstraint("EFFECT_CONFIRMATION_REQUIRED")).toBe(
      true,
    );
    expect(isSystemOwnedExecutionConstraint("EFFECT_CONFIRMATION_REQUIRED:N1")).toBe(
      true,
    );
    expect(
      assertUserAmendableExecutionConstraint(
        "  EXECUTION_CONFIRMATION_EVALUATED:NOT_REQUIRED  ",
      ).ok,
    ).toBe(false);
    expect(
      assertUserAmendableExecutionConstraint("EFFECT_CONFIRMATION_REQUIRED:N2").ok,
    ).toBe(false);
    expect(
      assertUserAmendableExecutionConstraint("BORN_STRICTLY_TO_SELECTED_SLICE").ok,
    ).toBe(true);
  });

  it("HumanDecision.reversible is not an input to execution reversibility", () => {
    expect(
      deriveReversibilityFromEffects({
        effectClass: "generate-temporary-artifact",
        rollbackAvailable: true,
      }),
    ).toMatchObject({ ok: true, reversibility: "reversible" });
    expect(
      deriveReversibilityFromEffects({
        effectClass: "generate-temporary-artifact",
        rollbackAvailable: false,
      }),
    ).toMatchObject({ ok: false, code: "REVERSIBILITY_UNRESOLVED" });
  });

  it("fixture allowed scopes are product scopes, not W2 intents", () => {
    expect([...W3A_FIXTURE_ALLOWED_SCOPES]).toEqual([
      W3A_PRODUCT_SCOPE.TEMP_ARTIFACT,
      W3A_PRODUCT_SCOPE.SIMULATE,
    ]);
    expect(W3A_FIXTURE_ALLOWED_SCOPES[0]).not.toContain("décider");
  });
});

describe("W3-A product seam — actual work prepare + Confirmation + Attempt", () => {
  async function decideGoverned(suffix: string) {
    const db = tempProductDbPath(`w3a-fx-${suffix}.sqlite`);
    const runtime = bootW2Runtime({
      productDbPath: db,
      idPrefix: `w3afx${suffix}`,
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
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory.trajectoryId,
      candidateVersion: proposed.proposedTrajectory.version,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) throw new Error("decide");
    return { runtime, oa, seeded, decided };
  }

  it("prepare without operationKind → EFFECTS_UNRESOLVED · no EC", async () => {
    const ctx = await decideGoverned("nowork");
    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      decisionId: ctx.decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("EFFECTS_UNRESOLVED");
  });

  it("temp artifact N1 + Confirmation N1 → AUTHORIZED → accepted→running→terminal", async () => {
    const ctx = await decideGoverned("pos");
    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      decisionId: ctx.decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      qualifiedOperationKind: "generate-temporary-artifact",
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) throw new Error(`prepare ${prepared.code}`);
    expect(prepared.contract.action).toBe("product:generate-temporary-artifact");
    expect(prepared.contract.action).not.toContain("trajectory");
    expect(prepared.contract.scope).toBe(W3A_PRODUCT_SCOPE.TEMP_ARTIFACT);
    expect(prepared.contract.scope).not.toContain("décider");
    expect(prepared.contract.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
    expect(prepared.contract.requiredAuthority).toBe("N1");
    expect(prepared.contract.status).toBe("confirmation_required");
    expect(prepared.contract.effectConfirmationRequired).toBe(true);
    expect(prepared.contract.effectConfirmationLevel).toBe("N1");
    expect(prepared.contract.constraints.some((c) =>
      c.startsWith("EFFECT_CONFIRMATION_REQUIRED"),
    )).toBe(true);

    const executionContractId = prepared.contract.executionContractId;
    const inspected = await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);

    const blockedWithoutCfm = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(blockedWithoutCfm.ok).toBe(true);
    if (!blockedWithoutCfm.ok) return;
    expect(blockedWithoutCfm.outcome).toBe("BLOCKED");
    expect(blockedWithoutCfm.reasonCode).toBe("confirmation_required");

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) throw new Error(`confirm ${confirmed.code}`);

    const authorized = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) throw new Error("auth");
    expect(authorized.outcome).toBe("AUTHORIZED");
    expect(ctx.oa.executionAttemptServices.registry.getAgent(W3A_BOUNDED_FIXTURE_AGENT_ID)).toBeTruthy();

    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) return;
    expect(selected.phase).toBe("accepted");
    expect(selected.selectedAgentRef).toBe(W3A_BOUNDED_FIXTURE_AGENT_ID);

    const started = await governedExecuteStart({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      attemptId: selected.attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.phase).toBe("running");
    expect(started.attemptId).toBe(selected.attemptId);

    const terminal = await governedExecuteRecordResult({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      attemptId: started.attemptId,
      forceLocalAuthority: true,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) return;
    expect(terminal.phase).toBe("terminal");
    expect(terminal.attemptId).toBe(selected.attemptId);
    expect(terminal.cycleInstanceClosed).toBe(false);
    expect(terminal.realExecution).toBe(false);
  });

  it("read → N1 · Confirmation NOT_REQUIRED marker · validated · SC-CAP (R15/R16)", async () => {
    const ctx = await decideGoverned("read");
    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      decisionId: ctx.decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      qualifiedOperationKind: "read",
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.contract.requiredAuthority).toBe("N1");
    expect(prepared.contract.status).toBe("validated");
    expect(prepared.contract.effectConfirmationRequired).toBe(false);
    expect(prepared.contract.constraints).toContain(
      EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
    );
    expect(
      isExecutionReadyStatus({
        status: prepared.contract.status,
        requiredAuthority: prepared.contract.requiredAuthority,
        constraints: prepared.contract.constraints,
      }),
    ).toBe(true);
    expect(prepared.contract.action).toBe("product:read");
    expect(prepared.contract.scope).toBe(W3A_PRODUCT_SCOPE.READ);

    const executionContractId = prepared.contract.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
    });
    const authorized = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) return;
    // Fixture does not support read — truthful SC-CAP / executor insufficiency.
    expect(authorized.outcome).toBe("BLOCKED");
    expect(authorized.reasonCode).toMatch(/executor|capability|insufficient/i);
    const launchBefore = ctx.oa.fixtureAdapter.launchCallCount;
    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    expect(ctx.oa.fixtureAdapter.launchCallCount).toBe(launchBefore);
  });

  it("high-risk push operationKind rejected before EC (R15)", async () => {
    const ctx = await decideGoverned("push-reject");
    const context = await currentF2Context(ctx.runtime, ctx.seeded.projectId);
    const prepared = await prepareExecutionContractFromW2Decision({
      oa: ctx.oa,
      projectId: ctx.seeded.projectId,
      decisionId: ctx.decided.decision.decisionId,
      currentContext: context,
      forceLocalAuthority: true,
      qualifiedOperationKind: "push" as never,
    });
    expect(prepared.ok).toBe(false);
    if (prepared.ok) return;
    expect(prepared.code).toBe("PREPARATION_BLOCKED");
  });

  it("legacy validated/N1 without evaluation marker is not Execute-ready (R16)", async () => {
    const ctx = await decideGoverned("legacy");
    const oa = ctx.oa;
    const scope = W3A_PRODUCT_SCOPE.READ;
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId: "xct:w3a:legacy-n1",
      projectId: ctx.seeded.projectId,
      cycleInstanceId: ctx.seeded.cycleInstanceId,
      decisionRefs: [],
      action: "product:read",
      target: W3A_PRODUCT_TARGET_WORKSPACE,
      scope,
      requiredCapabilities: ["cap:product-read"],
      requiredAuthority: "N1",
      constraints: ["LEGACY_NO_EVAL_MARKER"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:read"],
      reversibility: "reversible",
      idempotencyKey: "idem:w3a:legacy-n1",
      correlationId: "cor:w3a:legacy-n1",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        expectedVersion: built.contract.version,
        actor: LOCAL_PILOTE_ACTOR,
      });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(validated.contract.status).toBe("validated");
    expect(
      isExecutionReadyStatus({
        status: validated.contract.status,
        requiredAuthority: validated.contract.requiredAuthority,
        constraints: validated.contract.constraints,
      }),
    ).toBe(false);
  });

  it("legacy validated/N1 cannot become Execute-ready via forged NOT_REQUIRED amendment (R16-B)", async () => {
    const ctx = await decideGoverned("legacy-forge");
    const oa = ctx.oa;
    const scope = W3A_PRODUCT_SCOPE.READ;
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId: "xct:w3a:legacy-forge",
      projectId: ctx.seeded.projectId,
      cycleInstanceId: ctx.seeded.cycleInstanceId,
      decisionRefs: [],
      action: "product:read",
      target: W3A_PRODUCT_TARGET_WORKSPACE,
      scope,
      requiredCapabilities: ["cap:product-read"],
      requiredAuthority: "N1",
      constraints: ["LEGACY_NO_EVAL_MARKER"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:read"],
      reversibility: "reversible",
      idempotencyKey: "idem:w3a:legacy-forge",
      correlationId: "cor:w3a:legacy-forge",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        expectedVersion: built.contract.version,
        actor: LOCAL_PILOTE_ACTOR,
      });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    await inspectExecutionContract({
      oa,
      projectId: ctx.seeded.projectId,
      executionContractId: validated.contract.executionContractId,
    });
    const forged = await amendExecutionContractWithConstraint({
      oa,
      projectId: ctx.seeded.projectId,
      executionContractId: validated.contract.executionContractId,
      additionalConstraint: EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
      forceLocalAuthority: true,
    });
    expect(forged.ok).toBe(false);
    if (forged.ok) return;
    expect(forged.code).toBe("CONSTRAINT_SYSTEM_RESERVED");
    expect(
      isExecutionReadyStatus({
        status: validated.contract.status,
        requiredAuthority: validated.contract.requiredAuthority,
        constraints: validated.contract.constraints,
      }),
    ).toBe(false);
  });

  it("Validate/Confirm/Authorization fail-closed on contradictory Confirmation markers (R16-A)", async () => {
    const ctx = await decideGoverned("contradiction");
    const oa = ctx.oa;
    const scope = W3A_PRODUCT_SCOPE.TEMP_ARTIFACT;
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId: "xct:w3a:contradiction",
      projectId: ctx.seeded.projectId,
      cycleInstanceId: ctx.seeded.cycleInstanceId,
      decisionRefs: [],
      action: "product:generate-temporary-artifact",
      target: W3A_PRODUCT_TARGET_WORKSPACE,
      scope,
      requiredCapabilities: ["cap:product-temp-artifact"],
      requiredAuthority: "N1",
      constraints: ["test-only-contradiction-setup"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:temp"],
      reversibility: "reversible",
      idempotencyKey: "idem:w3a:contradiction",
      correlationId: "cor:w3a:contradiction",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    await oa.executionContractServices.contracts.save({
      ...built.contract,
      constraints: [
        EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
        "EFFECT_CONFIRMATION_REQUIRED:N1",
      ],
    });
    const validated =
      await oa.executionContractServices.validateExecutionContract.execute({
        executionContractId: built.contract.executionContractId,
        expectedVersion: built.contract.version,
        actor: LOCAL_PILOTE_ACTOR,
      });
    expect(validated.ok).toBe(false);
    if (validated.ok) return;
    expect(validated.error.detailCode).toBe("CONTRACT_INVALID");
  });

  it("envelope rejects trajectory-as-action leakage", () => {
    const work = buildActualExecutionWork({
      operationKind: "generate-temporary-artifact",
      projectId: "prj:x",
      qualificationSource: "test",
    });
    const env = deriveW3AExecutionEnvelope({
      projectId: "prj:x",
      decisionId: "dec:x",
      basis: sampleBasis(
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      ),
      selectedOptionRef: GOVERNED_OPTION_REF,
      selectedOptionIntent:
        "Instruire, décider explicitement, préparer, inspecter puis statuer, avec un gate à chaque frontière d'autorité.",
      selectedOptionLabel: "Governed",
      projectObjective: "obj",
      actualWork: asWork(work),
    });
    expect(env.ok).toBe(true);
    if (!env.ok) return;
    expect(
      assertNotF3FixtureSemantics({
        action: env.envelope.action,
        target: env.envelope.target,
        scope: env.envelope.scope,
        requiredCapabilities: env.envelope.requiredCapabilities,
      }),
    ).toBeNull();
  });

  it("decisionRefs 0..n still valid", async () => {
    const db = tempProductDbPath("w3a-zeroref4.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "w3az4" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "z4" });
    const oa = runtime.oa!;
    const scope = W3A_PRODUCT_SCOPE.TEMP_ARTIFACT;
    const auth2 = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: oa.clock.nowIso(),
      forceEnable: true,
    });
    expect(auth2.ok).toBe(true);
    if (!auth2.ok) return;
    const built = await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId: "xct:w3a:zero-ref-4",
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      decisionRefs: [],
      action: "product:generate-temporary-artifact",
      target: W3A_PRODUCT_TARGET_WORKSPACE,
      scope,
      requiredCapabilities: ["cap:product-temp-artifact"],
      requiredAuthority: "N1",
      constraints: ["NO_HD"],
      stopConditions: ["AUTHORITY_DENIED"],
      evidenceRequirements: ["evreq:generate-temporary-artifact"],
      reversibility: "reversible",
      idempotencyKey: "idem:w3a:zero-ref-4",
      correlationId: "cor:w3a:zero-ref-4",
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth2.evidenceId,
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    expect(built.contract.decisionRefs).toEqual([]);
  });

  it("explicitEffects with wrong target/scope still contract-first", async () => {
    const effects = buildQualifiedExecutionEffects({
      effectClass: "generate-temporary-artifact",
      projectId: "prj:x",
      scopeIn: W3A_PRODUCT_SCOPE.TEMP_ARTIFACT,
      rollbackAvailable: true,
      rollbackDescription: "cleanup",
      qualificationSource: "test",
      target: W3A_PRODUCT_TARGET_WORKSPACE,
    });
    expect(effects.ok).toBe(true);
    if (!effects.ok) return;
    expect(effects.effects.target).toBe(W3A_PRODUCT_TARGET_WORKSPACE);
  });
});
```

### COMPLETE SOURCE: `projects/sfia-studio/app/e2e/studio-w3a-governed-execute-runtime.spec.ts`
```ts
/**
 * W3-A R09 — canonical /studio Governed Execute product proof (deterministic).
 *
 * Positive: actual work qualified → EC (temp artifact, real target/scope) →
 * inspect → Confirmation N1 → AUTHORIZED → Execute →
 * accepted visible → running visible → terminal visible.
 *
 * Blocked: missing actual work — no Prepare / no Execute / no Attempt.
 *
 * R09 harness: Playwright retains then releases real Server Action transports
 * (Select → Start → Complete) to capture honest visual lifecycle states.
 * No product sleep · no forged DOM · no fake responses.
 */
import { test, expect, type Page, type Route } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const CAPTURE_ROOT = path.resolve(
  process.cwd(),
  "../../../.tmp-sfia-review/runtime-captures/w3a-governed-execute-r09",
);
const MANIFEST = path.join(CAPTURE_ROOT, "manifest.jsonl");

async function capture(
  page: Page,
  id: string,
  meta: { screen: string; state: string },
) {
  fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
  const file = path.join(CAPTURE_ROOT, `${id}.png`);
  await page.screenshot({ path: file, fullPage: true });
  const sha256 = crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
  fs.appendFileSync(
    MANIFEST,
    `${JSON.stringify({
      id,
      file: path.basename(file),
      ...meta,
      route: page.url(),
      timestamp: new Date().toISOString(),
      sha256,
      provenance:
        "CURSOR-PRODUCED LOCAL RUNTIME SCREENSHOT — W3-A R09 /STUDIO GOVERNED EXECUTE PROOF",
    })}\n`,
    "utf8",
  );
}

/** TEST-ONLY latch: retain Start/Complete Server Actions until screenshots taken. */
function installExecuteVisualCaptureLatch(page: Page) {
  let active = false;
  let executePostIndex = 0;
  let releaseStart: (() => void) | null = null;
  let releaseComplete: (() => void) | null = null;
  let startHeld: Promise<void> | null = null;
  let completeHeld: Promise<void> | null = null;

  const handler = async (route: Route) => {
    const request = route.request();
    if (!active || request.method() !== "POST") {
      await route.continue();
      return;
    }
    if (!request.headers()["next-action"]) {
      await route.continue();
      return;
    }

    executePostIndex += 1;
    if (executePostIndex === 1) {
      await route.continue();
      return;
    }
    if (executePostIndex === 2) {
      await page.waitForFunction(
        () => {
          const history =
            document.querySelector('[data-testid="w3a-attempt-phase-history"]')
              ?.textContent ?? "";
          const lifecycle =
            document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
              ?.textContent ?? "";
          return history === "accepted" && lifecycle === "accepted";
        },
        undefined,
        { timeout: 30_000, polling: "raf" },
      );
      if (startHeld) await startHeld;
      await route.continue();
      return;
    }
    if (executePostIndex === 3) {
      await page.waitForFunction(
        () => {
          const history =
            document.querySelector('[data-testid="w3a-attempt-phase-history"]')
              ?.textContent ?? "";
          const lifecycle =
            document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
              ?.textContent ?? "";
          return history === "accepted|running" && lifecycle === "running";
        },
        undefined,
        { timeout: 30_000, polling: "raf" },
      );
      if (completeHeld) await completeHeld;
      await route.continue();
      return;
    }
    await route.continue();
  };

  return {
    async arm() {
      executePostIndex = 0;
      active = true;
      startHeld = new Promise<void>((resolve) => {
        releaseStart = resolve;
      });
      completeHeld = new Promise<void>((resolve) => {
        releaseComplete = resolve;
      });
      await page.route("**/*", handler);
    },
    releaseStartForCapture() {
      releaseStart?.();
    },
    releaseCompleteForCapture() {
      releaseComplete?.();
    },
    async disarm() {
      active = false;
      releaseStart?.();
      releaseComplete?.();
      await page.unroute("**/*", handler);
    },
  };
}

async function openQualifiedStudioProject(page: Page, name: string) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/studio");
  await expect(page.getByTestId("studio-projects-home")).toBeVisible({
    timeout: 30_000,
  });
  await page.goto("/studio/projects/new");
  await expect(page.getByTestId("create-project-form")).toBeVisible();
  await page.locator("#project-name").fill(name);
  await page
    .locator("#project-objective")
    .fill(
      "Prouver actual work → EC → Confirmation → Attempt accepted/running/terminal.",
    );
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
  await expect(page.getByTestId("project-assistant-gate")).toBeVisible({
    timeout: 60_000,
  });

  const trajectory = page.getByTestId("w2-trajectory-panel");
  await expect(trajectory).toBeVisible({ timeout: 15_000 });
  await trajectory.scrollIntoViewIfNeeded();

  await page.getByTestId("w2-propose-options").click();
  const optionsOrError = page
    .getByTestId("w2-options")
    .or(page.getByTestId("w2-error"));
  await expect(optionsOrError).toBeVisible({ timeout: 60_000 });
  if (await page.getByTestId("w2-error").isVisible()) {
    const err = await page.getByTestId("w2-error").textContent();
    throw new Error(`w2 propose failed: ${err}`);
  }

  const decideButtons = page.locator("[data-testid^='w2-decide-']");
  await expect(decideButtons.first()).toBeVisible();
  await decideButtons.first().click();
  await expect(page.getByTestId("w2-decision")).toBeVisible({
    timeout: 45_000,
  });
}

test.describe("W3-A R09 /studio governed execute product proof", () => {
  test.describe.configure({ timeout: 300_000 });

  test("positive: accepted → running → terminal with actual work + N1 Confirmation", async ({
    page,
  }) => {
    fs.mkdirSync(CAPTURE_ROOT, { recursive: true });
    fs.writeFileSync(MANIFEST, "");

    await openQualifiedStudioProject(page, "W3-A R09 Positive Actual Work");
    await capture(page, "01-studio-home", {
      screen: "TrajectorySurface",
      state: "after_w2_decision",
    });

    // Actual work qualification — not W2 trajectory alone.
    await expect(page.getByTestId("w3a-qualify-execution-work")).toBeVisible();
    await page
      .getByTestId("w3a-operation-kind")
      .selectOption("generate-temporary-artifact");
    await capture(page, "02-actual-work-qualified", {
      screen: "TrajectorySurface",
      state: "actual_work_temp_artifact",
    });

    await page.getByTestId("w2-prepare-contract").click();
    await expect(page.getByTestId("w2-contract")).toBeVisible({
      timeout: 45_000,
    });

    const actionText =
      (await page.getByTestId("w2-contract-action").textContent()) ?? "";
    expect(actionText).toContain("product:generate-temporary-artifact");
    expect(actionText).not.toMatch(/trajectory-governed|trajectory-bounded/);
    await expect(page.getByTestId("w2-contract-authority")).toHaveText("N1");
    await expect(page.getByTestId("w2-contract-scope")).toHaveText(
      "product:temporary-local-artifact",
    );
    await expect(page.getByTestId("w2-contract-target")).toHaveText(
      "product:project-workspace",
    );
    await expect(page.getByTestId("w2-contract-status")).toHaveText(
      "confirmation_required",
    );
    await expect(page.getByTestId("w2-contract-reversibility")).toContainText(
      "reversible",
    );
    await capture(page, "03-execution-contract-n1-confirm-required", {
      screen: "TrajectorySurface",
      state: "ec_prepared_temp_artifact_n1_confirmation_required",
    });

    await page.getByTestId("w2-inspect-contract").click();
    await expect(page.getByTestId("w2-inspection-state")).toContainText(
      "INSPECTÉ",
      { timeout: 30_000 },
    );
    await expect(page.getByTestId("w2-confirm-contract")).toBeEnabled();
    await capture(page, "04-inspected", {
      screen: "TrajectorySurface",
      state: "inspected_confirmation_required",
    });

    await page.getByTestId("w2-confirm-contract").click();
    await expect(page.getByTestId("w2-contract-status")).toHaveText(
      "confirmed",
      { timeout: 30_000 },
    );
    await capture(page, "05-confirmed", {
      screen: "TrajectorySurface",
      state: "effect_confirmation_n1_granted",
    });

    await page.getByTestId("w2-authorize-contract").click();
    await expect(page.getByTestId("w2-authorization")).toBeVisible({
      timeout: 30_000,
    });
    await expect(page.getByTestId("w2-authorization-outcome")).toContainText(
      "AUTORISÉ",
    );
    await expect(page.getByTestId("w3a-governed-execute")).toBeVisible();
    await capture(page, "06-authorized", {
      screen: "TrajectorySurface",
      state: "authorized_stop_before_execute",
    });

    const latch = installExecuteVisualCaptureLatch(page);
    await latch.arm();

    const executeClick = page.getByTestId("w3a-governed-execute").click();
    await expect(page.getByTestId("w3a-attempt")).toBeVisible({
      timeout: 60_000,
    });

    await page.waitForFunction(
      () => {
        const history =
          document.querySelector('[data-testid="w3a-attempt-phase-history"]')
            ?.textContent ?? "";
        const lifecycle =
          document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
            ?.textContent ?? "";
        return history === "accepted" && lifecycle === "accepted";
      },
      undefined,
      { timeout: 30_000, polling: "raf" },
    );
    await expect(page.getByTestId("w3a-attempt-lifecycle")).toHaveText("accepted");
    await expect(page.getByTestId("w3a-attempt-phase-history")).toHaveText(
      "accepted",
    );
    await capture(page, "07-attempt-accepted", {
      screen: "TrajectorySurface",
      state: "accepted",
      phaseHistory: "accepted",
      lifecycleAtCapture: "accepted",
    });
    latch.releaseStartForCapture();

    const attemptIdAccepted =
      (await page.getByTestId("w3a-attempt-id").textContent()) ?? "";
    expect(attemptIdAccepted.length).toBeGreaterThan(0);

    await page.waitForFunction(
      () => {
        const history =
          document.querySelector('[data-testid="w3a-attempt-phase-history"]')
            ?.textContent ?? "";
        const lifecycle =
          document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
            ?.textContent ?? "";
        return history === "accepted|running" && lifecycle === "running";
      },
      undefined,
      { timeout: 30_000, polling: "raf" },
    );
    await expect(page.getByTestId("w3a-attempt-lifecycle")).toHaveText("running");
    await expect(page.getByTestId("w3a-attempt-phase-history")).toHaveText(
      "accepted|running",
    );
    await capture(page, "08-attempt-running", {
      screen: "TrajectorySurface",
      state: "running",
      phaseHistory: "accepted|running",
      lifecycleAtCapture: "running",
    });
    latch.releaseCompleteForCapture();
    expect(await page.getByTestId("w3a-attempt-id").textContent()).toBe(
      attemptIdAccepted,
    );

    await page.waitForFunction(
      () =>
        (document.querySelector('[data-testid="w3a-attempt-phase-history"]')
          ?.textContent ?? "") === "accepted|running|terminal" &&
        (document.querySelector('[data-testid="w3a-attempt-lifecycle"]')
          ?.textContent ?? "") === "terminal",
      undefined,
      { timeout: 60_000, polling: "raf" },
    );
    await executeClick;
    await latch.disarm();

    await expect(page.getByTestId("w3a-attempt-lifecycle")).toHaveText(
      "terminal",
    );
    await expect(page.getByTestId("w3a-attempt-phase-history")).toHaveText(
      "accepted|running|terminal",
    );
    await expect(page.getByTestId("w3a-attempt-technical-status")).toHaveText(
      "succeeded",
    );
    await expect(page.getByTestId("w3a-attempt-real")).toContainText("non");
    await expect(page.getByTestId("w3a-cycle-closed")).toHaveText("non");
    await expect(page.getByTestId("w3a-terminal-honesty")).toContainText(
      "W3-B",
    );
    expect(await page.getByTestId("w3a-attempt-id").textContent()).toBe(
      attemptIdAccepted,
    );
    await capture(page, "09-attempt-terminal", {
      screen: "TrajectorySurface",
      state: "terminal",
      phaseHistory: "accepted|running|terminal",
      lifecycleAtCapture: "terminal",
    });

    const body = (await page.locator("body").textContent()) ?? "";
    expect(body.toLowerCase()).not.toMatch(/runtime v3 adopted/);
    expect(body.toLowerCase()).not.toMatch(/ready for real/);

    expect(
      fs.existsSync(path.join(CAPTURE_ROOT, "07-attempt-accepted.png")),
    ).toBe(true);
    expect(
      fs.existsSync(path.join(CAPTURE_ROOT, "08-attempt-running.png")),
    ).toBe(true);
    expect(
      fs.existsSync(path.join(CAPTURE_ROOT, "09-attempt-terminal.png")),
    ).toBe(true);
  });

  test("blocked: missing actual work — no Prepare / no Execute / no Attempt", async ({
    page,
  }) => {
    await openQualifiedStudioProject(page, "W3-A R09 Blocked No Work");
    // Empty operation kind → Prepare disabled → no Execute → no Attempt.
    await page.getByTestId("w3a-operation-kind").selectOption("");
    await expect(page.getByTestId("w2-prepare-contract")).toBeDisabled();
    await expect(page.getByTestId("w3a-governed-execute")).toHaveCount(0);
    await expect(page.getByTestId("w3a-attempt")).toHaveCount(0);
    await capture(page, "10-blocked-no-actual-work", {
      screen: "TrajectorySurface",
      state: "blocked_no_actual_work_no_execute",
    });
  });
});
```

### COMPLETE SOURCE: `projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md`
```markdown
# SFIA Studio — Product Completion — Wave 3 — Delivery Readiness

| Champ | Valeur |
|---|---|
| **Projet** | SFIA Studio — Product Completion |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil SFIA** | CRITICAL |
| **Typologie** | INC — incrément fonctionnel borné dans W3 |
| **Vague** | **W3 — Exécution gouvernée + Evidence loop (backlog existant)** |
| **Slice courant** | **W3-A — Governed Execute** (premier slice dépendant · **≠** capacité roadmap indépendante) |
| **Capacité servie** | **US-P1-04** — Exécution générique sous contrat · **FC-10** Governed Execution |
| **Base Git (entrée W3)** | `origin/main` @ `3a3b1cf87ac5f6cfa17a1330bc6558559a9628ed` — Merge PR **#406** — docs(sfia-studio): sync W2 post-closure repository truth |
| **Branche projet** | `delivery/sfia-studio-product-completion-w3-a-governed-execute` |
| **Statut readiness W3** | **QUALIFIED** — GO Morris W3 Delivery **CONSUMED** · Delivery **IN PROGRESS** · W3 **NOT CLOSED** |
| **W1** | **CLOSED** |
| **W2** | **CLOSED BY MORRIS** |
| **C6** | **CLOSED** / implement-only · **DO NOT REOPEN** |
| **REAL** | **OUT / NOT CONSUMED** |
| **FinOps/T7** | **FREEZE** |
| **W4** | **OUT / NOT STARTED** |
| **runtime v3** | **NON ADOPTED** |
| **Product Completion** | **INCOMPLETE** |
| **Chemin produit** | Canonique **`/studio`** |

## Anti-affirmations

- W3 readiness / GO Delivery **≠** W3 CLOSED.
- W3-A **≠** W3 fully implemented · **≠** US-P1-05/06/07 closed.
- AUTHORIZED (W2) **≠** Execute · Execute W3-A **≠** Product SUCCESS semantics.
- Attempt terminal **≠** CycleInstance closed · **≠** Project archived.
- AuthorityVerificationReceipt **≠** reusable permission.
- DETERMINISTIC PRODUCT-NATIVE PROVEN **≠** READY FOR REAL · **≠** REAL BOUNDARY PROVEN.
- C6 CLOSED — ne pas rouvrir l’architecture.
- REAL OUT · FinOps FREEZE · W4 OUT · runtime v3 NON ADOPTED.
- Product Completion **INCOMPLETE**.
- Ce document **≠** Build Doctrine mutation · **≠** backlog rewrite.

---

## 1. Décision Morris W3 consommée (texte exact)

> **GO MORRIS — W3 DELIVERY — EXÉCUTER, PROUVER ET REPLANIFIER — SCOPE BACKLOG W3 ONLY — CONSUME W1/W2 CLOSED CAPABILITIES — C6 IMPLEMENT-ONLY / DO NOT REOPEN — HARVEST EXISTING OA/F3/EVIDENCE SUBSTRATE — CANONICAL `/studio` PRODUCT PATH — DETERMINISTIC PRODUCT-NATIVE PROOF — FULL CKC TRACK + CATALOG EVOLVABILITY WITHIN W3 — REAL OUT — FINOPS FREEZE — W4 OUT — RUNTIME V3 NON ADOPTED.**

### Ce que ce GO autorise

- Construction W3 dans le **scope backlog W3 existant**.
- Consommation des capacités **W1/W2 CLOSED**.
- Harvest OA / F3 / Evidence substrate **existants**.
- Preuve **deterministic product-native** sur le chemin **`/studio`**.
- Première tranche d’implémentation **W3-A Governed Execute** (US-P1-04 / FC-10).

### Ce que ce GO n’autorise pas

- Fermeture W3 dans ce cycle.
- GO REAL / Gate D / Cursor REAL.
- Défreeze FinOps/T7.
- W4 Product Experience Closure.
- runtime v3 ADOPTED.
- Réouverture C6 / C1 / C2 / FA / Backlog.
- Push branche projet / PR / merge (hors handoff review L3 borné).

---

## 1bis. Morris Option 4 — R01 FC-08 Native EC Preparation (adoptée)

> **MORRIS DECISION — W3-A R01 — ADOPT FC-08 NATIVE EXECUTIONCONTRACT PREPARATION COMPLETION — NORA/STUDIO PREPARES THE EXECUTION ENVELOPE FROM QUALIFIED PRODUCT CONTEXT — FC-08 REMAINS THE SINGLE OWNER — HUMANDECISION / DECISIONBASIS CONSUMED WHEN APPLICABLE — EXECUTIONCONTRACT IS THE FIRST DURABLE SoT FOR THE ENVELOPE — NO F3 SEMANTIC OVERWRITE ON CANONICAL `/studio` — TESTEXECUTIONADAPTER REMAINS THE DETERMINISTIC EXTERNAL-EXECUTOR FAKE — NO EXECUTIONINTENT / NEW AGGREGATE / NEW STORE / NEW ENGINE — C6 REMAINS CLOSED.**

### Correction ciblée post-revue ChatGPT (handoff `c083147a…` / R13–R16 + R09-R)

| Élément | État |
|---|---|
| R13 Scope IN/OUT | **CORRECTED** — scopeOut cohérent par opération canonique · jamais interdit l’effet scopeIn courant |
| R14 Confirmation floor | **CORRECTED** — `max(intrinsic, protectedFloor N2)` · protected push/PR/merge/… restent **N3** · jamais downgrade |
| R15 Actual work borné | **CORRECTED** — chemin produit allowlist `read \| simulate \| generate-temporary-artifact` · high-risk operationKind → PREPARATION_BLOCKED avant EC · SC-CAP via **read** |
| R16 Legacy validated/N1 | **CORRECTED** — marqueur durable `EXECUTION_CONFIRMATION_EVALUATED:NOT_REQUIRED` · readiness fail-closed sans marqueur · contradiction REQUIRED+NOT_REQUIRED fail-closed (y compris `confirmed`) · amendement Pilote ne peut pas forger les namespaces réservés |
| R09-R fixed sleep | **CORRECTED** — aucun `setTimeout` produit · double rAF only |
| R09 visual lifecycle | **CORRECTED** — captures 07/08/09 montrent visuellement accepted / running / terminal · même AttemptId · harness Playwright test-only (retain/release Server Actions) |
| W3-A | **TARGETED CORRECTION CANDIDATE — READY FOR CHATGPT RE-REVIEW** · **≠** W3-A CLOSED · **≠** W3 CLOSED · **W4 untouched** |
| REAL | **OUT** |

### Provenance Actual Work (canonical)

```
Pilot/Nora UI: qualifiedOperationKind ∈ {read, simulate, generate-temporary-artifact}
  → prepareExecutionContractFromW2Decision (reject high-risk kinds)
  → buildActualExecutionWork (non-durable)
  → QualifiedExecutionEffects
  → FC-08 ExecutionContract (+ CONFIRMATION_EVALUATED:NOT_REQUIRED | EFFECT_CONFIRMATION_REQUIRED:*)
```


## 1ter. Morris B2/B3 — Execution Effect Governance (consommée)

> **MORRIS DECISION — W3-A B2/B3 EXECUTION EFFECT GOVERNANCE — ADOPT BOUNDED PRODUCT COMPLETION EFFECT QUALIFICATION AND C2 AUTHORITY PROJECTION — NORA/STUDIO MUST IDENTIFY THE ACTUAL QUALIFIED EXECUTION ACTION AND EFFECTS BEFORE FC-08 MATERIALIZATION — W2 TRAJECTORY OPTION GOVERNED/BOUNDED IS GOVERNANCE CONTEXT, NOT THE EXECUTION ACTION OR AUTHORITY SOURCE — … — FIXTURE EXECUTOR SUPPORT MUST BE EXPLICITLY BOUNDED AND MUST NOT SYNTHESIZE UNIVERSAL EXECUTOR SUFFICIENCY — … — NO EXECUTIONINTENT AGGREGATE, NO AUTHORITYCATALOG, NO NEW STORE, NO NEW ENGINE, NO C6 REOPEN — W1/W2 REMAIN CLOSED — REAL OUT — RUNTIME V3 NON ADOPTED.**

Cette décision est une décision de **CONSTRUCTION W3-A**. Elle n’autorise **pas** : commit projet · push branche projet · PR · merge · REAL · W3 closure · W4 · FinOps · Product Completion complete · runtime v3 ADOPTED.

---

## 2. Positionnement W3 / W3-A

| Élément | État |
|---|---|
| W3 scope | Backlog Product Completion existant (Waves / US) — **pas de nouveau backlog** |
| W3 Delivery | **AUTHORIZED BY MORRIS / IN PROGRESS** |
| W3-A | Premier slice dépendant · seam **W2 AUTHORIZED → Attempt fixture gouverné** |
| W3-A ferme W3 ? | **NON** |
| NEXT-CAPABILITY REQUALIFICATION | **SATISFIED / CONSUMED** par la qualification W3 + GO Delivery |
| Frontière W2 reprise | EC inspecté → Confirmation si requise → effective authority → **AUTHORIZED/BLOCKED** → **STOP BEFORE EXECUTE** (W2) · W3-A démarre **exactement** après AUTHORIZED |

---

## 3. Exit contracts

### 3.1 Exit W3-A (ce cycle)

| ID | Contrat | Critère |
|---|---|---|
| X-W3A-01 | Seam canonique | `/studio` après AUTHORIZED peut Select → accepted → Start → running → terminal technique fixture |
| X-W3A-02 | Autorité fraîche | AVR jamais permission · re-verify via primitives OA avant Select/Start |
| X-W3A-03 | Fail-closed | BLOCKED / stale / Confirmation manquante / executor insuffisant → aucun launch |
| X-W3A-04 | No double launch | Replay idempotent · adapter appelé une fois |
| X-W3A-05 | Lifecycle honesty | Terminal technique ≠ CycleInstance closed ≠ Project archived |
| X-W3A-06 | Fake/Real | Fixture only · `externalEffects=false` · `realExecution=false` · Gate D non consommée |
| X-W3A-07 | Actor | Runtime actor = **Pilote** · pas de persona runtime Morris sur le chemin canonique |
| X-W3A-08 | Scope honesty | Pas de claim SUCCESS/STOP/FAIL Product · Evidence · CKC full · W3 CLOSED |

### 3.2 Exit W3 macro (hors fermeture ce cycle)

W3 macro reste **ouvert** jusqu’à fermeture des slices backlog W3 (dont US-P1-05/06/07, recovery E2E, catalog evolvability, full CKC track restant) sous GOs distincts. **W3-A ne satisfait pas l’exit W3 macro.**

---

## 4. Classification des actifs (W3-A)

| Classe | Actifs |
|---|---|
| **KEEP** | OA Native Backbone · Product SQLite · ExecutionContract · W2 inspection/confirmation/authority · ExecutionAttempt domain/ports/repos/services · agent registry / AgentCapability · Project/Cycle persistent backbone |
| **HARVEST / ADAPT** | Guards adapter · Select/Start/Record · idempotence · `prepareAndResolveM3ProductPath` / fixture-safe profile (**legacy · hors chemin canonique**) · **`prepareExecutionContractFromW2Decision` (FC-08 natif W3-A)** · **`ActualExecutionWork` / `QualifiedExecutionEffects` (non durable)** · effect→Confirmation projection |
| **READ-ONLY / DOWNSTREAM** | Evidence business-first · ReviewBundle completion · Nora post-Evidence · recovery/replan · full CKC track / Catalog Evolvability closure |
| **FREEZE / NE PAS PROMOUVOIR** | `execution-run` historique comme second chemin · Cursor REAL / Gate D · FinOps/T7 · W4 UX · routes legacy non canoniques · F3 comme second produit · ExecutionIntent/Work aggregate · AuthorityCatalog · ConfirmationPolicyEngine |

---

## 5. Dette / exit temporaire

| ID | Dette | Owner | Exit |
|---|---|---|---|
| W3A-D01 | Terminal technique `succeeded` **≠** sémantique Product SUCCESS/STOP/FAIL | W3-B | Fermeture US-P1-05 mapping métier |
| W3A-D02 | Evidence / Review / Nora post-Evidence **non fermés** | W3-B+ | US-P1-06 / US-P1-07 |
| W3A-D03 | Critical CycleInstance `proposed` sans API publique d’ack — EC cycle-linked confirm fail-closed (R-T-A3-1) | backlog / OA | Ne pas inventer AcknowledgeCriticalCycle ; path produit Standard primaire ; Critical agent_selection Confirmation harvestée pour Select |
| W3A-D04 | Preuve `/studio` Playwright R09 accepted→running→terminal | **CLOSED locally** — PASS · phase-history + paint yield · captures 07/08/09 | Re-run on CI if integrated |
| W2-CL-R04 | OPEN_NON_BLOCKING (carry) | Roadmap | Non bloquant W3-A |
| PB-RES-REAL-01 | OPEN / TRACE ONLY | Roadmap | REAL hors scope |

---

## 6. Gates restants (après ce cycle)

| Gate | État |
|---|---|
| GO MORRIS W3 DELIVERY | **CONSUMED** |
| Commit projet / push branche projet / PR / merge | **NON CONSOMMÉS** |
| GO REAL | **NON CONSOMMÉ** |
| FinOps/T7 | **FREEZE** |
| W3 closure | **NON** |
| W4 | **OUT** |
| Product Completion complete | **NON** |
| runtime v3 ADOPTED | **NON** |

---

## 7. Capacité suivante

**W3-B** — terminal semantics Product (SUCCESS/STOP/FAIL) + Evidence business-first seam (US-P1-05 / US-P1-06) — sous découpage W3 ultérieur · **≠** autorisé par la seule fermeture W3-A.

---

## 8. Verdict readiness

**W3 DELIVERY READINESS = QUALIFIED** · GO Morris W3 **CONSUMED** · slice courant **W3-A Governed Execute** · Product Completion **INCOMPLETE** · W3 **NOT CLOSED**.
```

### COMPLETE SOURCE: `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts`
```ts
/**
 * W3-A — Governed Execute seam on the canonical `/studio` W2 product path.
 *
 * Phase 1 (select): fresh AUTHORIZED evaluation → accepted
 * Phase 2 (start): continue durable Attempt → running (no re-authorize on executing EC)
 * Phase 3 (record): continue running Attempt → technical terminal
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type {
  ExecutionAttempt,
  SelectionProfile,
  SelectionStrategy,
} from "@/lib/oa/execution-attempt";
import { resolveSelectionStrategy } from "@/lib/oa/execution-attempt";
import type { CycleProfile } from "@/lib/oa/cycle";
import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
import type {
  GovernedExecuteAuthorizedContractResult,
  GovernedExecuteAttemptProjection,
  GovernedExecutePhaseResult,
} from "./types";

function mapCycleProfileToSelectionProfile(
  profile: CycleProfile | string | null | undefined,
): SelectionProfile {
  if (profile === "Critical") return "critical";
  if (profile === "Light") return "light";
  return "standard";
}

function attemptIdentities(executionContractId: string, version: number) {
  const digest = createHash("sha256")
    .update(`${executionContractId}@${version}`)
    .digest("hex")
    .slice(0, 16);
  return {
    attemptId: `xat:w3a:${digest}`,
    attemptIdempotencyKey: `idem:w3a:${digest}`,
    resultRef: `res:w3a:${digest}`,
  };
}

export type GovernedExecuteAuthorizedContractInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly executionContractId: string;
  readonly claimedAuthorityLevel?: unknown;
  readonly canActAsMorris?: unknown;
  readonly authorityReceiptRef?: unknown;
  readonly real?: unknown;
  readonly adapterRef?: unknown;
  readonly forceLocalAuthority?: boolean;
};

type Failure = GovernedExecuteAuthorizedContractResult;

function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
  if (!oa.fixtureAdapter || !oa.executionAttemptServices) {
    return {
      ok: false,
      code: "ATTEMPT_STACK_UNAVAILABLE",
      message:
        "Services ExecutionAttempt / fixture indisponibles — aucune exécution.",
    };
  }
  if (oa.fixtureAdapter.adapterId !== F3_ADAPTER_ID) {
    return {
      ok: false,
      code: "ADAPTER_IDENTITY_MISMATCH",
      message: "Adapter fixture identity mismatch — REAL/NoOp interdit.",
    };
  }
  if (oa.fixtureAdapter.externalEffects !== false) {
    return {
      ok: false,
      code: "EXTERNAL_EFFECTS_FORBIDDEN",
      message: "externalEffects doit rester false (FIXTURE only).",
    };
  }
  return null;
}

async function loadContract(
  oa: RuntimeOaStack,
  input: GovernedExecuteAuthorizedContractInput,
): Promise<
  | { ok: false; result: Failure }
  | { ok: true; contract: ExecutionContract; selectionProfile: SelectionProfile }
> {
  const contractResult =
    await oa.executionContractServices.getExecutionContract.execute({
      executionContractId: input.executionContractId,
    });
  if (!contractResult.ok) {
    return {
      ok: false,
      result: {
        ok: false,
        code: contractResult.error.detailCode,
        message: "Contrat d'exécution introuvable — exécution refusée.",
      },
    };
  }
  const contract = contractResult.contract;
  if (contract.projectId !== input.projectId) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_MISMATCH",
        message: "Le contrat n'appartient pas au projet demandé.",
      },
    };
  }

  const project = await oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (project.ok && project.project.status === "archived") {
    return {
      ok: false,
      result: {
        ok: false,
        code: "PROJECT_ARCHIVED",
        message: "Projet archivé — aucune exécution.",
      },
    };
  }

  let selectionProfile: SelectionProfile | null = null;
  if (!contract.cycleInstanceId) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "CYCLE_BINDING_REQUIRED",
        message:
          "ExecutionContract sans cycleInstanceId — Execute W3-A refusé (pas de fallback Standard).",
      },
    };
  }
  {
    const cycle = await oa.cycleServices.getCycle.execute({
      cycleInstanceId: contract.cycleInstanceId,
    });
    if (!cycle.ok) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_NOT_FOUND",
          message: "CycleInstance lié au contrat introuvable — exécution refusée.",
        },
      };
    }
    if (cycle.cycle.projectId !== input.projectId) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_PROJECT_MISMATCH",
          message: "CycleInstance / projet incohérents — exécution refusée.",
        },
      };
    }
    if (
      cycle.cycle.status === "completed" ||
      cycle.cycle.status === "cancelled" ||
      cycle.cycle.status === "superseded"
    ) {
      return {
        ok: false,
        result: {
          ok: false,
          code: "CYCLE_NOT_ACTIVE",
          message: `CycleInstance ${cycle.cycle.status} — aucune exécution.`,
        },
      };
    }
    selectionProfile = mapCycleProfileToSelectionProfile(cycle.cycle.profile);
  }

  return { ok: true, contract, selectionProfile };
}

function projectAttempt(attempt: ExecutionAttempt): GovernedExecuteAttemptProjection {
  return {
    attemptId: attempt.attemptId,
    attemptStatus: attempt.status,
    selectedAgentRef: attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
  };
}

function buildTerminalSuccess(input: {
  contract: ExecutionContract;
  attempt: ExecutionAttempt;
  selectionProfile: SelectionProfile;
  oa: RuntimeOaStack;
  reusedExistingAttempt: boolean;
  launchCountBefore: number;
}): GovernedExecuteAuthorizedContractResult {
  const launchCount = input.oa.fixtureAdapter!.launchCallCount;
  return {
    ok: true,
    phase: "terminal",
    executionContractId: input.contract.executionContractId,
    contractVersion: input.contract.version,
    attemptId: input.attempt.attemptId,
    attemptStatus: input.attempt.status,
    selectedAgentRef: input.attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
    selectionProfile: input.selectionProfile,
    reusedExistingAttempt: input.reusedExistingAttempt,
    launchCount,
    launchDelta: launchCount - input.launchCountBefore,
    executionPerformed: true,
    attemptCreated: !input.reusedExistingAttempt,
    realExecution: false,
    externalEffects: false,
    gitWritePerformed: false,
    cycleInstanceClosed: false,
    projectArchived: false,
    authorityReceiptUsedAsPermission: false,
    statusLabel:
      "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ (W3-A)",
    technicalTerminal: input.attempt.status === "succeeded",
    productSuccessSemantics: false,
    attempt: projectAttempt(input.attempt),
  };
}

async function findSucceededAttempt(
  oa: RuntimeOaStack,
  executionContractId: string,
): Promise<ExecutionAttempt | null> {
  const listed =
    await oa.executionAttemptServices!.listExecutionAttempts.execute({
      executionContractId,
    });
  if (!listed.ok) return null;
  return listed.attempts.find((a) => a.status === "succeeded") ?? null;
}

function registerPiloteAuthority(
  oa: RuntimeOaStack,
  scope: string,
  forceLocalAuthority?: boolean,
) {
  return registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope,
    issuedAt: oa.clock.nowIso(),
    forceEnable: forceLocalAuthority === true,
  });
}

/** Phase 1 — SelectExecutionAgent → accepted (fresh AUTHORIZED required). */
export async function governedExecuteSelectAgent(
  input: GovernedExecuteAuthorizedContractInput,
): Promise<GovernedExecutePhaseResult> {
  void input.claimedAuthorityLevel;
  void input.canActAsMorris;
  void input.authorityReceiptRef;
  void input.real;
  void input.adapterRef;

  const boundary = fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) {
    if (loaded.result.ok && loaded.result.phase === "terminal") return loaded.result;
    return loaded.result;
  }
  const { contract, selectionProfile } = loaded;

  const succeeded = await findSucceededAttempt(
    input.oa,
    contract.executionContractId,
  );
  if (succeeded) {
    return buildTerminalSuccess({
      contract,
      attempt: succeeded,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: true,
      launchCountBefore: input.oa.fixtureAdapter!.launchCallCount,
    });
  }

  const authorized = await evaluateExecutionAuthorization({
    oa: input.oa,
    projectId: input.projectId,
    executionContractId: input.executionContractId,
    forceLocalAuthority: input.forceLocalAuthority,
  });
  if (!authorized.ok) {
    return {
      ok: false,
      code: authorized.code,
      message: authorized.message,
    };
  }
  if (authorized.outcome !== "AUTHORIZED") {
    return {
      ok: false,
      code: "NOT_AUTHORIZED",
      message:
        "Exécution refusée : le verdict courant n'est pas AUTHORIZED (aucune tentative).",
    };
  }

  const authority = registerPiloteAuthority(
    input.oa,
    contract.scope,
    input.forceLocalAuthority,
  );
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const strategyResolved = resolveSelectionStrategy(selectionProfile);
  if ("detailCode" in strategyResolved) {
    return {
      ok: false,
      code: strategyResolved.detailCode,
      message: strategyResolved.reason,
    };
  }
  if (strategyResolved.strategy === "human_confirmed_proposal") {
    return {
      ok: false,
      code: "AGENT_CONFIRMATION_REQUIRED",
      message:
        "Profil Critical — confirmation agent_selection Pilote requise avant sélection (aucune simulation).",
    };
  }

  const identities = attemptIdentities(
    contract.executionContractId,
    contract.version,
  );

  const selected =
    await input.oa.executionAttemptServices!.selectExecutionAgent.execute({
      attemptId: identities.attemptId,
      executionContractId: contract.executionContractId,
      idempotencyKey: identities.attemptIdempotencyKey,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
      expectedContractVersion: contract.version,
      selectionProfile,
      selectionStrategy: strategyResolved.strategy,
      systemInitiated: false,
    });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
    };
  }

  return {
    ok: true,
    phase: "accepted",
    executionContractId: contract.executionContractId,
    contractVersion: contract.version,
    attemptId: selected.attempt.attemptId,
    attemptStatus: selected.attempt.status,
    selectedAgentRef: selected.attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
    selectionProfile,
    realExecution: false,
    externalEffects: false,
    authorityReceiptUsedAsPermission: false,
    statusLabel: "TENTATIVE ACCEPTÉE — EN ATTENTE DE DÉMARRAGE",
    technicalTerminal: false,
    productSuccessSemantics: false,
    attempt: projectAttempt(selected.attempt),
  };
}

/** Phase 2 — StartExecution → running (continues accepted Attempt). */
export async function governedExecuteStart(
  input: GovernedExecuteAuthorizedContractInput & { readonly attemptId: string },
): Promise<GovernedExecutePhaseResult> {
  const boundary = fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) return loaded.result;
  const { contract, selectionProfile } = loaded;

  const succeeded = await findSucceededAttempt(
    input.oa,
    contract.executionContractId,
  );
  if (succeeded) {
    return buildTerminalSuccess({
      contract,
      attempt: succeeded,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: true,
      launchCountBefore: input.oa.fixtureAdapter!.launchCallCount,
    });
  }

  const authority = registerPiloteAuthority(
    input.oa,
    contract.scope,
    input.forceLocalAuthority,
  );
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const started = await input.oa.executionAttemptServices!.startExecution.execute({
    attemptId: input.attemptId,
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });
  if (!started.ok) {
    const existing = await input.oa.executionAttemptServices!.getExecutionAttempt.execute(
      { attemptId: input.attemptId },
    );
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
      attempt:
        existing.ok && existing.attempt
          ? projectAttempt(existing.attempt)
          : undefined,
    };
  }

  return {
    ok: true,
    phase: "running",
    executionContractId: contract.executionContractId,
    contractVersion: contract.version,
    attemptId: started.attempt.attemptId,
    attemptStatus: started.attempt.status,
    selectedAgentRef: started.attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
    selectionProfile,
    realExecution: false,
    externalEffects: false,
    authorityReceiptUsedAsPermission: false,
    statusLabel: "EXÉCUTION EN COURS — FIXTURE GOUVERNÉE",
    technicalTerminal: false,
    productSuccessSemantics: false,
    attempt: projectAttempt(started.attempt),
  };
}

/** Phase 3 — RecordExecutionResult → technical terminal. */
export async function governedExecuteRecordResult(
  input: GovernedExecuteAuthorizedContractInput & { readonly attemptId: string },
): Promise<GovernedExecuteAuthorizedContractResult> {
  const boundary = fixtureBoundaryFailure(input.oa);
  if (boundary) return boundary;

  const loaded = await loadContract(input.oa, input);
  if (!loaded.ok) return loaded.result;
  const { contract, selectionProfile } = loaded;
  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;

  const succeeded = await findSucceededAttempt(
    input.oa,
    contract.executionContractId,
  );
  if (succeeded) {
    return buildTerminalSuccess({
      contract,
      attempt: succeeded,
      selectionProfile,
      oa: input.oa,
      reusedExistingAttempt: true,
      launchCountBefore,
    });
  }

  const identities = attemptIdentities(
    contract.executionContractId,
    contract.version,
  );

  const recorded =
    await input.oa.executionAttemptServices!.recordExecutionResult.execute({
      attemptId: input.attemptId,
      adapterId: F3_ADAPTER_ID,
      resultRef: identities.resultRef,
      technicalExitCode: 0,
    });
  if (!recorded.ok) {
    const existing = await input.oa.executionAttemptServices!.getExecutionAttempt.execute(
      { attemptId: input.attemptId },
    );
    return {
      ok: false,
      code: recorded.error.detailCode,
      message: recorded.error.message,
      attempt:
        existing.ok && existing.attempt
          ? projectAttempt(existing.attempt)
          : undefined,
    };
  }

  let cycleInstanceClosed = false;
  let projectArchived = false;
  const project = await input.oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  if (project.ok) {
    projectArchived = project.project.status === "archived";
    if (contract.cycleInstanceId) {
      const cycleAfter = await input.oa.cycleServices.getCycle.execute({
        cycleInstanceId: contract.cycleInstanceId,
      });
      if (cycleAfter.ok) {
        cycleInstanceClosed =
          cycleAfter.cycle.status === "completed" ||
          cycleAfter.cycle.status === "cancelled";
      }
    }
  }

  const launchCount = input.oa.fixtureAdapter!.launchCallCount;
  return {
    ok: true,
    phase: "terminal",
    executionContractId: contract.executionContractId,
    contractVersion: contract.version,
    attemptId: recorded.attempt.attemptId,
    attemptStatus: recorded.attempt.status,
    selectedAgentRef: recorded.attempt.selectedAgentRef,
    adapterId: F3_ADAPTER_ID,
    selectionProfile,
    reusedExistingAttempt: false,
    launchCount,
    launchDelta: launchCount - launchCountBefore,
    executionPerformed: true,
    attemptCreated: true,
    realExecution: false,
    externalEffects: false,
    gitWritePerformed: false,
    cycleInstanceClosed,
    projectArchived,
    authorityReceiptUsedAsPermission: false,
    statusLabel:
      "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ (W3-A)",
    technicalTerminal: recorded.attempt.status === "succeeded",
    productSuccessSemantics: false,
    attempt: projectAttempt(recorded.attempt),
  };
}

export async function governedExecuteAuthorizedContract(
  input: GovernedExecuteAuthorizedContractInput,
): Promise<GovernedExecuteAuthorizedContractResult> {
  const launchCountBefore = input.oa.fixtureAdapter?.launchCallCount ?? 0;
  const selected = await governedExecuteSelectAgent(input);
  if (!selected.ok) return selected;
  if (selected.phase === "terminal") {
    return selected as GovernedExecuteAuthorizedContractResult;
  }

  const started = await governedExecuteStart({
    ...input,
    attemptId: selected.attemptId,
  });
  if (!started.ok) return started;

  const terminal = await governedExecuteRecordResult({
    ...input,
    attemptId: started.attemptId,
  });
  if (!terminal.ok) return terminal;
  return {
    ...terminal,
    launchDelta: terminal.launchCount - launchCountBefore,
  };
}
```

### COMPLETE SOURCE: `projects/sfia-studio/app/features/project-assistant/w2/prepareExecutionContractFromW2Decision.ts`
```ts
/**
 * W3-A / FC-08 — native ExecutionContract preparation from qualified W2 context.
 *
 * Nora/Studio composes complete FC-08 build inputs from durable truths.
 * ExecutionContract is the first durable SoT for the execution envelope.
 *
 * NO fixtureSafeM3ResolutionProfile · NO F3 semantic overwrite · NO Morris runtime persona.
 * NO cycle-profile → requiredAuthority · NO HumanDecision.reversible → EC.reversibility.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { F2ContextSnapshot } from "../f2/types";
import { loadPresentedOptionSet } from "./presentedOptionSet";
import {
  assertNotF3FixtureSemantics,
  deriveW3AExecutionEnvelope,
} from "./w3aProductExecutionSemantics";
import {
  buildActualExecutionWork,
  isActualExecutionOperationKind,
  isHighRiskPolicyOnlyOperationKind,
  type ActualExecutionWork,
} from "./w3aActualExecutionWork";
import type { QualifiedExecutionEffects } from "./w3aQualifiedExecutionEffects";

export type PreparedExecutionContractDto = {
  readonly executionContractId: string;
  readonly version: number;
  readonly status: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredAuthority: string;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly reversibility: string;
  readonly semanticFingerprint: string;
  readonly decisionRefs: readonly string[];
  readonly cycleInstanceId: string;
  readonly effectClass: string;
  readonly effectConfirmationRequired: boolean;
  readonly effectConfirmationLevel: string | null;
};

export type PrepareExecutionContractFromW2DecisionResult =
  | {
      readonly ok: true;
      readonly contract: PreparedExecutionContractDto;
      readonly decisionId: string;
      readonly executionPerformed: false;
      readonly attemptCreated: false;
      readonly f3SemanticOverwrite: false;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

function safeIdSegment(value: string): string {
  return value.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
}

/**
 * W3-A cycle binding: Decision / DecisionBasis cycle is required.
 * activeCycleInstanceId may only confirm coherence — never invent a binding.
 */
async function resolveW3ACycleBinding(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionCycleInstanceId: string | null | undefined;
  readonly basisCycleInstanceId: string | null | undefined;
  readonly activeCycleInstanceId: string | null | undefined;
}): Promise<
  | { readonly ok: true; readonly cycleInstanceId: string; readonly cycleProfile: string }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const primary =
    input.decisionCycleInstanceId?.trim() ||
    input.basisCycleInstanceId?.trim() ||
    "";
  if (!primary) {
    return {
      ok: false,
      code: "CYCLE_BINDING_REQUIRED",
      message:
        "W3-A exige un CycleInstance durable lié à la HumanDecision/DecisionBasis — préparation refusée.",
    };
  }

  const cycle = await input.oa.cycleServices.getCycle.execute({
    cycleInstanceId: primary,
  });
  if (!cycle.ok) {
    return {
      ok: false,
      code: "CYCLE_NOT_FOUND",
      message: "CycleInstance lié introuvable — préparation bloquée.",
    };
  }
  if (cycle.cycle.projectId !== input.projectId) {
    return {
      ok: false,
      code: "CYCLE_PROJECT_MISMATCH",
      message: "CycleInstance / projet incohérents.",
    };
  }

  const active = input.activeCycleInstanceId?.trim() || "";
  if (active && active !== primary) {
    // Coherence signal only — do not rebind. Warn via fail-closed when
    // DecisionBasis and active diverge for the W3-A path.
    return {
      ok: false,
      code: "CYCLE_ACTIVE_MISMATCH",
      message:
        "CycleInstance décisionnel ≠ activeCycleInstanceId — cohérence W3-A refusée (pas de fallback silencieux).",
    };
  }

  return {
    ok: true,
    cycleInstanceId: primary,
    cycleProfile: cycle.cycle.profile,
  };
}

export async function prepareExecutionContractFromW2Decision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly currentContext: F2ContextSnapshot;
  readonly forceLocalAuthority?: boolean;
  /**
   * Explicit Pilot/Nora operation kind — REQUIRED for product path.
   * W2 trajectory alone never selects the execution action.
   * Hostile clients cannot invent kinds outside the allowlist.
   */
  readonly qualifiedOperationKind?: unknown;
  /** Same product path — optional Nora/test-injected qualified effects. */
  readonly explicitEffects?: QualifiedExecutionEffects;
  readonly forceEffectsUnresolved?: boolean;
}): Promise<PrepareExecutionContractFromW2DecisionResult> {
  const { oa } = input;

  const loaded = await oa.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: loaded.error.message,
    };
  }

  const decision = loaded.decision;
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La décision n'appartient pas à ce projet.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_CURRENT",
      message: `Décision ${decision.status} — préparation refusée.`,
    };
  }

  const basis = decision.decisionBasis;
  if (!basis) {
    return {
      ok: false,
      code: "DECISION_BASIS_REQUIRED",
      message: "DecisionBasis manquante — préparation refusée.",
    };
  }

  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.currentContext.doctrineDigest
  ) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message:
        "DecisionBasis doctrine digest périmé — re-décider avant préparation.",
    };
  }
  if (ctx.lpsVersion > input.currentContext.lpsVersion) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message: "DecisionBasis LPS en avance — état incohérent.",
    };
  }

  const traj = basis.trajectoryContext;
  if (!traj) {
    return {
      ok: false,
      code: "TRAJECTORY_CONTEXT_REQUIRED",
      message:
        "DecisionBasis.trajectoryContext requis pour la préparation W2→W3.",
    };
  }

  const presented = await loadPresentedOptionSet(
    oa,
    input.projectId,
    basis.sourceRef,
  );
  if (!presented.ok) {
    return {
      ok: false,
      code: presented.code,
      message: presented.message,
    };
  }

  const selected = presented.presented.options.find(
    (o) => o.optionRef === traj.selectedOptionRef,
  );
  if (!selected) {
    return {
      ok: false,
      code: "OPTION_NOT_IN_PRESENTED_SET",
      message: "Option sélectionnée absente du OptionSet présenté.",
    };
  }

  const cycleBinding = await resolveW3ACycleBinding({
    oa,
    projectId: input.projectId,
    decisionCycleInstanceId: decision.cycleInstanceId,
    basisCycleInstanceId: basis.cycleInstanceId,
    activeCycleInstanceId: input.currentContext.activeCycleInstanceId,
  });
  if (!cycleBinding.ok) {
    return cycleBinding;
  }

  const project = await oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  let projectObjective: string | null = null;
  let projectTitle: string | null = null;
  if (project.ok) {
    projectTitle = project.project.title ?? null;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
    if (lps.ok) {
      projectObjective = lps.livingProjectState.objective;
    }
  }

  // Note: cycleProfile is loaded for scrutiny/context only — NEVER for requiredAuthority.
  void cycleBinding.cycleProfile;

  let actualWork = undefined;
  if (!input.explicitEffects && !input.forceEffectsUnresolved) {
    // R15 — high-risk kinds are policy taxonomy only; reject before EC.
    if (isHighRiskPolicyOnlyOperationKind(input.qualifiedOperationKind)) {
      return {
        ok: false,
        code: "PREPARATION_BLOCKED",
        message:
          "Opération à risque non qualifiable depuis operationKind seul — ActualExecutionWork refuse push/write/commit/PR/merge/delete/doctrine/baseline sans facts produit.",
      };
    }
    if (!isActualExecutionOperationKind(input.qualifiedOperationKind)) {
      return {
        ok: false,
        code: "EFFECTS_UNRESOLVED",
        message:
          "Aucun travail d'exécution qualifié (operationKind) — W2 trajectory seule ne sélectionne pas l'action. Chemin canonique: read | simulate | generate-temporary-artifact.",
      };
    }
    const builtWork = buildActualExecutionWork({
      operationKind: input.qualifiedOperationKind,
      projectId: input.projectId,
      projectTitle,
      objective: projectObjective,
      qualificationSource:
        "studio.nora.actual-execution-work.from-explicit-operation-kind",
    });
    if ("ok" in builtWork && builtWork.ok === false) {
      return builtWork;
    }
    actualWork = builtWork as ActualExecutionWork;
  }

  const envelopeResult = deriveW3AExecutionEnvelope({
    projectId: input.projectId,
    decisionId: decision.decisionId,
    basis,
    selectedOptionRef: traj.selectedOptionRef,
    selectedOptionIntent: selected.intent,
    selectedOptionLabel: selected.label,
    projectObjective,
    actualWork,
    explicitEffects: input.explicitEffects,
    forceEffectsUnresolved: input.forceEffectsUnresolved,
  });
  if (!envelopeResult.ok) {
    return envelopeResult;
  }
  const envelope = envelopeResult.envelope;

  const f3Guard = assertNotF3FixtureSemantics({
    action: envelope.action,
    target: envelope.target,
    scope: envelope.scope,
    requiredCapabilities: envelope.requiredCapabilities,
  });
  if (f3Guard) {
    return f3Guard;
  }

  const issuedAt = oa.clock.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope: envelope.scope,
    issuedAt,
    evidenceId: `evd:w3a-prep:${decision.decisionId}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const safeId = safeIdSegment(decision.decisionId);
  const executionContractId = `xct:w3a:${safeId}`;
  const idempotencyKey = `idem:w3a-prep:${decision.decisionId}`;

  const built =
    await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId,
      projectId: input.projectId,
      cycleInstanceId: cycleBinding.cycleInstanceId,
      decisionRefs: [decision.decisionId],
      action: envelope.action,
      target: envelope.target,
      scope: envelope.scope,
      inputs: envelope.inputs,
      expectedOutputs: [...envelope.expectedOutputs],
      requiredCapabilities: [...envelope.requiredCapabilities],
      requiredAuthority: envelope.requiredAuthority,
      constraints: [...envelope.constraints],
      stopConditions: [...envelope.stopConditions],
      evidenceRequirements: [...envelope.evidenceRequirements],
      reversibility: envelope.reversibility,
      idempotencyKey,
      correlationId: `cor:w3a-prep:${decision.decisionId}`,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });

  if (!built.ok) {
    return {
      ok: false,
      code: built.error.detailCode,
      message: built.error.message,
    };
  }

  const validated =
    await oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });

  if (!validated.ok) {
    return {
      ok: false,
      code: validated.error.detailCode,
      message: validated.error.message,
    };
  }

  const contract = validated.contract;
  if (!contract.cycleInstanceId) {
    return {
      ok: false,
      code: "CYCLE_BINDING_REQUIRED",
      message: "ExecutionContract matérialisé sans cycleInstanceId — refuse.",
    };
  }

  return {
    ok: true,
    contract: {
      executionContractId: contract.executionContractId,
      version: contract.version,
      status: contract.status,
      action: contract.action,
      target: contract.target,
      scope: contract.scope,
      requiredAuthority: contract.requiredAuthority,
      constraints: [...contract.constraints],
      stopConditions: [...contract.stopConditions],
      requiredCapabilities: [...contract.requiredCapabilities],
      reversibility: contract.reversibility,
      semanticFingerprint: contract.semanticFingerprint ?? "",
      decisionRefs: [...(contract.decisionRefs ?? [])],
      cycleInstanceId: contract.cycleInstanceId,
      effectClass: envelope.effects.effectClass,
      effectConfirmationRequired: envelope.effectConfirmationRequired,
      effectConfirmationLevel: envelope.effectConfirmationLevel,
    },
    decisionId: decision.decisionId,
    executionPerformed: false,
    attemptCreated: false,
    f3SemanticOverwrite: false,
  };
}
```

### COMPLETE SOURCE: `projects/sfia-studio/app/features/project-assistant/w2/w3aActualExecutionWork.ts`
```ts
/**
 * W3-A — non-durable Actual Execution Work qualification (FC-04 / Nora-Studio).
 *
 * Application DTO ONLY. Not an aggregate, store, repository, or durable SoT.
 * Feeds QualifiedExecutionEffects → FC-08 materializes ExecutionContract.
 *
 * W2 trajectory option = governance context / provenance ONLY.
 * It never selects action, effects, target, scope, or authority.
 *
 * Canonical /studio product path (R13/R15): only read / simulate /
 * generate-temporary-artifact may become ActualExecutionWork.
 * High-risk kinds remain effect-policy taxonomy only until facts are
 * product-qualified (no durable ActualExecutionWork SoT).
 */

import {
  EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
} from "@/lib/oa/execution-contract";
import type {
  ExecutionEffectClass,
  QualifiedExecutionEffects,
  EffectQualificationFailure,
} from "./w3aQualifiedExecutionEffects";
import { buildQualifiedExecutionEffects } from "./w3aQualifiedExecutionEffects";

/** Product-stable execution scopes — authority-bearing, NOT W2 option intents. */
export const W3A_PRODUCT_SCOPE = {
  READ: "product:read-only",
  SIMULATE: "product:simulate-sandbox",
  TEMP_ARTIFACT: "product:temporary-local-artifact",
  LOCAL_WRITE: "product:local-durable-write",
  COMMIT: "product:local-commit",
  PUSH: "product:git-push",
  PULL_REQUEST: "product:pull-request",
  MERGE: "product:merge",
  CRITICAL_DELETE: "product:critical-delete",
  DOCTRINE: "product:doctrine-mutation",
  BASELINE: "product:baseline-promotion",
} as const;

/** Product-stable execution target — project binding stays on EC.projectId. */
export const W3A_PRODUCT_TARGET_WORKSPACE = "product:project-workspace" as const;

/**
 * Canonical W3-A actual work kinds — facts are product-qualifiable today.
 * Not a global ActionCatalog.
 */
export type W3ACanonicalActualOperationKind =
  | "read"
  | "simulate"
  | "generate-temporary-artifact";

/** @deprecated Use W3ACanonicalActualOperationKind — alias for prepare path. */
export type ActualExecutionOperationKind = W3ACanonicalActualOperationKind;

/**
 * Effect-policy taxonomy kinds (authority/Confirmation/reversibility projection).
 * NOT executable ActualExecutionWork from operationKind alone on /studio.
 */
export type EffectPolicyOnlyOperationKind =
  | "local-write"
  | "commit"
  | "push"
  | "pull-request"
  | "merge"
  | "critical-delete"
  | "doctrine-change"
  | "baseline-promotion";

export type ActualExecutionWork = {
  readonly operationKind: W3ACanonicalActualOperationKind;
  readonly effectClass: Exclude<
    ExecutionEffectClass,
    | "unknown"
    | "local-write"
    | "commit"
    | "push"
    | "pull-request"
    | "merge"
    | "critical-delete"
    | "doctrine-change"
    | "baseline-promotion"
  >;
  readonly target: string;
  readonly scopeIn: string;
  readonly scopeOut: readonly string[];
  readonly protectedBoundaries: readonly string[];
  readonly rollbackAvailable: boolean;
  readonly rollbackDescription: string | null;
  /** Weak vs protected frontier — drives Confirmation independently of N-level. */
  readonly weakBoundary: boolean;
  readonly qualificationSource: string;
  readonly notes: readonly string[];
};

export type ConfirmationRequirementFromEffects =
  | {
      readonly ok?: undefined;
      readonly required: false;
      readonly level: null;
      readonly reason: string;
    }
  | {
      readonly ok?: undefined;
      readonly required: true;
      readonly level: "N1" | "N2" | "N3";
      readonly reason: string;
    };

const CANONICAL_KIND_TO_SCOPE: Record<W3ACanonicalActualOperationKind, string> =
  {
    read: W3A_PRODUCT_SCOPE.READ,
    simulate: W3A_PRODUCT_SCOPE.SIMULATE,
    "generate-temporary-artifact": W3A_PRODUCT_SCOPE.TEMP_ARTIFACT,
  };

const CANONICAL_KINDS = new Set<string>(Object.keys(CANONICAL_KIND_TO_SCOPE));

const HIGH_RISK_POLICY_ONLY_KINDS = new Set<string>([
  "local-write",
  "commit",
  "push",
  "pull-request",
  "merge",
  "critical-delete",
  "doctrine-change",
  "baseline-promotion",
]);

export function isCanonicalW3AActualOperationKind(
  value: unknown,
): value is W3ACanonicalActualOperationKind {
  return typeof value === "string" && CANONICAL_KINDS.has(value);
}

/** Alias — product prepare path accepts canonical kinds only. */
export function isActualExecutionOperationKind(
  value: unknown,
): value is W3ACanonicalActualOperationKind {
  return isCanonicalW3AActualOperationKind(value);
}

export function isHighRiskPolicyOnlyOperationKind(value: unknown): boolean {
  return typeof value === "string" && HIGH_RISK_POLICY_ONLY_KINDS.has(value);
}

type ConfirmationLevel = "N1" | "N2" | "N3";

function confirmationRank(level: ConfirmationLevel | null): number {
  if (level === null) return 0;
  if (level === "N1") return 1;
  if (level === "N2") return 2;
  return 3;
}

function maxConfirmationLevel(
  a: ConfirmationLevel | null,
  b: ConfirmationLevel | null,
): ConfirmationLevel | null {
  return confirmationRank(a) >= confirmationRank(b) ? a : b;
}

/**
 * Intrinsic Confirmation from effect class (C2 §10) — before protected floor.
 */
function intrinsicConfirmationFromEffects(input: {
  readonly effectClass: ExecutionEffectClass;
  readonly rollbackAvailable: boolean;
  readonly weakBoundary: boolean;
}): ConfirmationRequirementFromEffects | EffectQualificationFailure {
  const { effectClass, rollbackAvailable, weakBoundary } = input;

  if (effectClass === "unknown") {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Effets non qualifiés — besoin de Confirmation fail-closed.",
    };
  }

  if (effectClass === "read") {
    return {
      required: false,
      level: null,
      reason: "C2 §10.1 lecture seule — aucune Confirmation",
    };
  }

  if (
    effectClass === "push" ||
    effectClass === "pull-request" ||
    effectClass === "merge" ||
    effectClass === "critical-delete" ||
    effectClass === "doctrine-change" ||
    effectClass === "baseline-promotion" ||
    (!rollbackAvailable &&
      effectClass !== "simulate" &&
      effectClass !== "generate-temporary-artifact")
  ) {
    return {
      required: true,
      level: "N3",
      reason: "C2 §10.2 effet N3 / irréversible — Confirmation N3",
    };
  }

  if (effectClass === "commit" || effectClass === "local-write") {
    return {
      required: true,
      level: "N2",
      reason: "C2 §10.2 écriture/commit — Confirmation N2",
    };
  }

  if (effectClass === "simulate") {
    return {
      required: true,
      level: "N1",
      reason: "C2 §10.1 simulation — Confirmation légère N1 selon policy",
    };
  }

  if (effectClass === "generate-temporary-artifact") {
    if (weakBoundary) {
      return {
        required: true,
        level: "N1",
        reason:
          "C2 §10.2 artefact temporaire local · frontière faible — Confirmation N1 légère",
      };
    }
    return {
      required: true,
      level: "N2",
      reason:
        "C2 §10.2 artefact temporaire hors frontière faible — Confirmation N2",
    };
  }

  return {
    ok: false,
    code: "PREPARATION_BLOCKED",
    message: `Confirmation non dérivable pour ${effectClass}`,
  };
}

/**
 * C2 §10 — Confirmation from effects / protections / reversibility.
 * Independent of requiredAuthority and of cycle profile.
 *
 * R14: effectiveLevel = max(intrinsicEffectLevel, protectedBoundaryFloor).
 * Protected boundary is a floor/aggravator (min N2) — never a downgrade.
 */
export function projectConfirmationRequirementFromEffects(input: {
  readonly effectClass: ExecutionEffectClass;
  readonly protectedBoundaries: readonly string[];
  readonly rollbackAvailable: boolean;
  readonly weakBoundary: boolean;
}): ConfirmationRequirementFromEffects | EffectQualificationFailure {
  const intrinsic = intrinsicConfirmationFromEffects(input);
  if ("ok" in intrinsic && intrinsic.ok === false) {
    return intrinsic;
  }
  const base = intrinsic as ConfirmationRequirementFromEffects;

  const protectedFloor: ConfirmationLevel | null =
    input.protectedBoundaries.length > 0 ? "N2" : null;

  if (!protectedFloor) {
    return base;
  }

  const effective = maxConfirmationLevel(
    base.required ? base.level : null,
    protectedFloor,
  );
  if (!effective) {
    return base;
  }

  return {
    required: true,
    level: effective,
    reason:
      base.required && confirmationRank(base.level) >= confirmationRank(protectedFloor)
        ? `${base.reason} · protected floor does not downgrade`
        : `C2 §10.2 protected path floor N2 · effective Confirmation ${effective} (max(intrinsic, floor))`,
  };
}

/**
 * Coherent scope OUT for a canonical operation — never forbids the current
 * scope IN / action effect (R13).
 */
function scopeOutForCanonicalKind(
  kind: W3ACanonicalActualOperationKind,
): readonly string[] {
  const common = ["REAL", "CURSOR_REAL"] as const;
  switch (kind) {
    case "read":
      return [
        ...common,
        "DURABLE_PROJECT_WRITE",
        "LOCAL_WRITE",
        "TEMPORARY_ARTIFACT_WRITE",
        "COMMIT",
        "GIT_PUSH",
        "GIT_PR",
        "GIT_MERGE",
        "DOCTRINE_MUTATION",
        "BASELINE_PROMOTION",
      ];
    case "simulate":
      return [
        ...common,
        "DURABLE_PROJECT_WRITE",
        "COMMIT",
        "GIT_PUSH",
        "GIT_PR",
        "GIT_MERGE",
        "DOCTRINE_MUTATION",
        "BASELINE_PROMOTION",
      ];
    case "generate-temporary-artifact":
      return [
        ...common,
        "DURABLE_PROJECT_WRITE",
        "COMMIT",
        "GIT_PUSH",
        "GIT_PR",
        "GIT_MERGE",
        "DOCTRINE_MUTATION",
        "BASELINE_PROMOTION",
      ];
  }
}

/**
 * Build ActualExecutionWork from an explicit Pilot/Nora canonical operation
 * kind + project-bound product facts. Never from W2 trajectory alone.
 * High-risk kinds must not call this — reject at prepare (R15).
 */
export function buildActualExecutionWork(input: {
  readonly operationKind: W3ACanonicalActualOperationKind;
  readonly projectId: string;
  readonly projectTitle?: string | null;
  readonly objective?: string | null;
  readonly protectedBoundaries?: readonly string[];
  readonly qualificationSource: string;
}): ActualExecutionWork | EffectQualificationFailure {
  if (!input.projectId.trim()) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "projectId requis pour qualifier le travail d'exécution.",
    };
  }

  if (!isCanonicalW3AActualOperationKind(input.operationKind)) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "operationKind hors chemin canonique W3-A (read/simulate/temp-artifact).",
    };
  }

  if (isHighRiskPolicyOnlyOperationKind(input.operationKind)) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Opération à risque non qualifiable depuis operationKind seul — facts produit requis.",
    };
  }

  const kind = input.operationKind;
  const scopeIn = CANONICAL_KIND_TO_SCOPE[kind];
  const scopeOut = scopeOutForCanonicalKind(kind);
  const protectedBoundaries = [...(input.protectedBoundaries ?? [])];
  const weakBoundary =
    protectedBoundaries.length === 0 &&
    (kind === "generate-temporary-artifact" ||
      kind === "simulate" ||
      kind === "read");

  const rollbackAvailable = true;
  const rollbackDescription =
    kind === "generate-temporary-artifact"
      ? "Cleanup/delete of the temporary local artifact after Attempt terminal."
      : kind === "simulate"
        ? "Discard simulation sandbox state."
        : null;

  return {
    operationKind: kind,
    effectClass: kind,
    target: W3A_PRODUCT_TARGET_WORKSPACE,
    scopeIn,
    scopeOut,
    protectedBoundaries,
    rollbackAvailable,
    rollbackDescription,
    weakBoundary,
    qualificationSource: input.qualificationSource,
    notes: [
      `projectId=${input.projectId}`,
      input.projectTitle ? `projectTitle=${input.projectTitle}` : null,
      input.objective ? `objective=${input.objective}` : null,
      "W2 trajectory option is NOT the execution action/scope/target",
      "EC.projectId remains the project binding",
      `canonicalW3AActualWork=${kind}`,
    ].filter((n): n is string => n !== null),
  };
}

/** Map ActualExecutionWork → QualifiedExecutionEffects (still non-durable). */
export function qualifyEffectsFromActualExecutionWork(input: {
  readonly work: ActualExecutionWork;
  readonly trajectoryOptionRef?: string | null;
}):
  | { readonly ok: true; readonly effects: QualifiedExecutionEffects }
  | EffectQualificationFailure {
  const { work } = input;
  return buildQualifiedExecutionEffects({
    effectClass: work.effectClass,
    projectId: "bound-on-ec",
    scopeIn: work.scopeIn,
    scopeOut: work.scopeOut,
    protectedBoundaries: work.protectedBoundaries,
    rollbackAvailable: work.rollbackAvailable,
    rollbackDescription: work.rollbackDescription,
    trajectoryOptionRef: input.trajectoryOptionRef ?? null,
    qualificationSource: work.qualificationSource,
    notes: work.notes,
    target: work.target,
  });
}

/**
 * Constraint token persisted on EC so Validate/FC-09 can reconstruct
 * effect-driven Confirmation without a parallel SoT.
 * Prefix owned as string convention shared with OA Validate / readiness.
 */
export const EFFECT_CONFIRMATION_REQUIRED_CONSTRAINT =
  "EFFECT_CONFIRMATION_REQUIRED" as const;

export function effectConfirmationConstraint(
  level: "N1" | "N2" | "N3",
): string {
  return `${EFFECT_CONFIRMATION_REQUIRED_CONSTRAINT}:${level}`;
}

/** Durable marker when FC-08 evaluated Confirmation and concluded NOT REQUIRED (R16). */
export const CONFIRMATION_EVALUATED_NOT_REQUIRED_CONSTRAINT =
  EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED;

export function parseEffectConfirmationConstraint(
  constraints: readonly string[],
): { required: true; level: "N1" | "N2" | "N3" } | { required: false } {
  for (const c of constraints) {
    if (c.startsWith(`${EFFECT_CONFIRMATION_REQUIRED_CONSTRAINT}:`)) {
      const level = c.slice(EFFECT_CONFIRMATION_REQUIRED_CONSTRAINT.length + 1);
      if (level === "N1" || level === "N2" || level === "N3") {
        return { required: true, level };
      }
    }
    if (c === EFFECT_CONFIRMATION_REQUIRED_CONSTRAINT) {
      return { required: true, level: "N1" };
    }
  }
  return { required: false };
}
```

### COMPLETE SOURCE: `projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts`
```ts
/**
 * W3-A — product-native FC-08 envelope from ActualExecutionWork → Effects.
 *
 * Order:
 *   explicit ActualExecutionWork (Nora/Studio / Pilot)
 *   → QualifiedExecutionEffects (non-durable)
 *   → authority/reversibility/capabilities/Confirmation from effects
 *   → FC-08 Build/Validate → ExecutionContract (first durable SoT)
 *   → AgentRegistry selection AFTER contract
 *
 * Trajectory governed/bounded = provenance only — NEVER action / scope / target / authority.
 * HumanDecision.reversible = NEVER ExecutionContract.reversibility.
 * Cycle profile / CKC = NEVER alone determine requiredAuthority or Confirmation.
 */

import type { DecisionBasis } from "@/lib/oa/decision";
import type { AuthorityClass, Reversibility } from "@/lib/oa/execution-contract";
import { EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED } from "@/lib/oa/execution-contract";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "./trajectoryOptions";
import {
  type ActualExecutionWork,
  effectConfirmationConstraint,
  projectConfirmationRequirementFromEffects,
  qualifyEffectsFromActualExecutionWork,
} from "./w3aActualExecutionWork";
import {
  type EffectQualificationFailure,
  type QualifiedExecutionEffects,
  projectRequiredAuthorityFromEffects,
  deriveReversibilityFromEffects,
} from "./w3aQualifiedExecutionEffects";

/** Implementation / provenance marker — NOT authority-bearing scope. */
export const W3A_IMPLEMENTATION_MARKER =
  "w3:governed-execute:studio-canonical" as const;

export type W3AExecutionEnvelope = {
  readonly action: string;
  readonly scope: string;
  readonly target: string;
  readonly requiredCapabilities: readonly string[];
  readonly requiredAuthority: AuthorityClass;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly reversibility: Reversibility;
  readonly expectedOutputs: readonly string[];
  readonly inputs: Record<string, unknown>;
  readonly effects: QualifiedExecutionEffects;
  /** Effect-driven Confirmation — independent of requiredAuthority. */
  readonly effectConfirmationRequired: boolean;
  readonly effectConfirmationLevel: "N1" | "N2" | "N3" | null;
};

export type EnvelopePrepareFailure =
  | EffectQualificationFailure
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

function productConstraints(
  basis: DecisionBasis,
  effects: QualifiedExecutionEffects,
  confirmationConstraint: string | null,
): string[] {
  const eb = basis.executionBasis;
  return [
    "PRODUCT_GOVERNED",
    "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
    "NO_REAL",
    "NO_CURSOR_REAL",
    "NO_ATTEMPT_AT_PREPARE",
    `IMPLEMENTATION_MARKER:${W3A_IMPLEMENTATION_MARKER}`,
    `EFFECT_CLASS:${effects.effectClass}`,
    ...(confirmationConstraint
      ? [confirmationConstraint]
      : [EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED]),
    ...(effects.morrisConstructionGateRequired
      ? ["MORRIS_CONSTRUCTION_GATE_REQUIRED"]
      : []),
    ...(effects.protectedBoundaries.map((b) => `PROTECTED:${b}`)),
    ...(eb.outOfScope ?? []).map((s) => `OUT_OF_SCOPE:${s}`),
    ...(eb.risks ?? []).map((s) => `RISK:${s}`),
    ...(eb.reservations ?? []).map((s) => `RESERVATION:${s}`),
    ...(effects.scopeOut.map((s) => `SCOPE_OUT:${s}`)),
  ];
}

function productStopConditions(basis: DecisionBasis): string[] {
  const eb = basis.executionBasis;
  const stops = new Set<string>([
    ...(eb.stopConditions ?? []),
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "DECISION_NOT_CURRENT",
    "EFFECTS_UNRESOLVED",
    "EXECUTOR_INSUFFICIENT",
    "CONFIRMATION_REQUIRED",
  ]);
  return [...stops];
}

/**
 * Qualify effects then derive FC-08 envelope fields.
 *
 * Requires ActualExecutionWork OR explicitEffects.
 * W2 trajectory alone NEVER selects the execution action.
 */
export function deriveW3AExecutionEnvelope(input: {
  readonly projectId: string;
  readonly decisionId: string;
  readonly basis: DecisionBasis;
  readonly selectedOptionRef: string;
  readonly selectedOptionIntent: string;
  readonly selectedOptionLabel: string;
  readonly projectObjective: string | null;
  /** Required product path — Nora/Studio qualified work. */
  readonly actualWork?: ActualExecutionWork;
  /** Optional pre-qualified effects (same application path / tests). */
  readonly explicitEffects?: QualifiedExecutionEffects;
  /** Force unknown-effects fail-closed for negative proof. */
  readonly forceEffectsUnresolved?: boolean;
}):
  | { readonly ok: true; readonly envelope: W3AExecutionEnvelope }
  | EnvelopePrepareFailure {
  if (
    input.selectedOptionRef !== GOVERNED_OPTION_REF &&
    input.selectedOptionRef !== BOUNDED_OPTION_REF
  ) {
    if (input.selectedOptionRef === CLARIFY_OPTION_REF) {
      return {
        ok: false,
        code: "TRAJECTORY_NOT_EXECUTABLE",
        message:
          "Trajectoire « clarifier d'abord » — aucune préparation d'exécution autorisée.",
      };
    }
    return {
      ok: false,
      code: "TRAJECTORY_NOT_EXECUTABLE",
      message: `Option ${input.selectedOptionRef} — enveloppe d'exécution non préparable.`,
    };
  }

  if (input.forceEffectsUnresolved === true) {
    return {
      ok: false,
      code: "EFFECTS_UNRESOLVED",
      message:
        "Effets d'exécution non qualifiés — préparation fail-closed.",
    };
  }

  let effects: QualifiedExecutionEffects;
  let weakBoundary = true;

  if (input.explicitEffects) {
    effects = input.explicitEffects;
    weakBoundary = effects.protectedBoundaries.length === 0;
  } else if (input.actualWork) {
    weakBoundary = input.actualWork.weakBoundary;
    const qualified = qualifyEffectsFromActualExecutionWork({
      work: input.actualWork,
      trajectoryOptionRef: input.selectedOptionRef,
    });
    if (!qualified.ok) return qualified;
    effects = qualified.effects;
  } else {
    return {
      ok: false,
      code: "EFFECTS_UNRESOLVED",
      message:
        "Aucun ActualExecutionWork qualifié — W2 trajectory seule ne sélectionne pas l'action d'exécution.",
    };
  }

  // Trajectory markers must never leak as executable action.
  if (
    effects.action.includes("trajectory-governed") ||
    effects.action.includes("trajectory-bounded") ||
    effects.action.startsWith("w2:decide-trajectory")
  ) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Action d'exécution ne peut pas être une option de trajectoire W2.",
    };
  }

  // W2 option intent must never become EC.scope.
  if (
    effects.scopeIn === input.selectedOptionIntent ||
    effects.scopeIn === (input.basis.executionBasis.scope?.trim() ?? "")
  ) {
    // Only fail when basis/intent look like trajectory prose (long governance text).
    const looksLikeTrajectoryIntent =
      input.selectedOptionIntent.length > 40 &&
      (input.selectedOptionIntent.includes("décider") ||
        input.selectedOptionIntent.includes("Inspecter") ||
        input.selectedOptionIntent.includes("inspecter") ||
        input.selectedOptionIntent.includes("périmètre réversible"));
    if (looksLikeTrajectoryIntent && effects.scopeIn === input.selectedOptionIntent) {
      return {
        ok: false,
        code: "PREPARATION_BLOCKED",
        message:
          "EC.scope ne peut pas être selectedOption.intent (intention de trajectoire W2).",
      };
    }
  }

  if (effects.scopeIn === W3A_IMPLEMENTATION_MARKER) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Le marqueur d'implémentation W3-A ne peut pas servir de scope authority-bearing.",
    };
  }

  const authority = projectRequiredAuthorityFromEffects({
    effectClass: effects.effectClass,
    rollbackAvailable: effects.rollbackAvailable,
    protectedBoundaries: effects.protectedBoundaries,
  });
  if (!authority.ok) return authority;

  const reversibility = deriveReversibilityFromEffects({
    effectClass: effects.effectClass,
    rollbackAvailable: effects.rollbackAvailable,
  });
  if (!reversibility.ok) return reversibility;

  const confirmation = projectConfirmationRequirementFromEffects({
    effectClass: effects.effectClass,
    protectedBoundaries: effects.protectedBoundaries,
    rollbackAvailable: effects.rollbackAvailable,
    weakBoundary,
  });
  if ("ok" in confirmation && confirmation.ok === false) {
    return confirmation;
  }
  const confirmationOk = confirmation as Exclude<
    typeof confirmation,
    EffectQualificationFailure
  >;

  const confirmationConstraint =
    confirmationOk.required && confirmationOk.level
      ? effectConfirmationConstraint(confirmationOk.level)
      : null;

  const eb = input.basis.executionBasis;
  const expectedOutputs = eb.expectedOutcome
    ? [eb.expectedOutcome]
    : [`Résultat d'exécution — ${effects.effectClass}`];

  return {
    ok: true,
    envelope: {
      action: effects.action,
      target: effects.target,
      scope: effects.scopeIn,
      requiredCapabilities: [...effects.requiredCapabilities],
      requiredAuthority: authority.requiredAuthority,
      constraints: productConstraints(
        input.basis,
        effects,
        confirmationConstraint,
      ),
      stopConditions: productStopConditions(input.basis),
      evidenceRequirements: [...effects.evidenceRequirements],
      reversibility: reversibility.reversibility,
      expectedOutputs,
      effects,
      effectConfirmationRequired: confirmationOk.required,
      effectConfirmationLevel: confirmationOk.required
        ? confirmationOk.level
        : null,
      inputs: {
        projectId: input.projectId,
        decisionId: input.decisionId,
        selectedOptionRef: input.selectedOptionRef,
        selectedOptionLabel: input.selectedOptionLabel,
        // Provenance only — NOT EC.scope
        trajectoryOptionIntent: input.selectedOptionIntent,
        trajectoryOptionIsNotAction: true,
        trajectoryOptionIsNotScope: true,
        executionScope: effects.scopeIn,
        effectClass: effects.effectClass,
        rollbackAvailable: effects.rollbackAvailable,
        rollbackDescription: effects.rollbackDescription,
        weakBoundary,
        effectConfirmationRequired: confirmationOk.required,
        effectConfirmationLevel: confirmationOk.required
          ? confirmationOk.level
          : null,
        implementationMarker: W3A_IMPLEMENTATION_MARKER,
        objective: eb.objective ?? input.projectObjective,
        cycleTypeId: eb.cycleTypeId,
        recommendedProfile: eb.recommendedProfile,
        sourceRef: input.basis.sourceRef,
        sourceDigest: input.basis.sourceDigest,
        authoritySource: "EFFECTS_PROJECTION_PRODUCT_COMPLETION",
        confirmationSource: "EFFECTS_C2_SECTION_10",
        reversibilitySource: "EFFECTS_PLUS_ROLLBACK_FACTS",
        morrisConstructionGateRequired: effects.morrisConstructionGateRequired,
        qualificationSource: effects.provenance.qualificationSource,
      },
    },
  };
}

/** Guard against accidental F3 / trajectory-as-action leakage. */
export function assertNotF3FixtureSemantics(fields: {
  action: string;
  target: string;
  scope: string;
  requiredCapabilities: readonly string[];
}): EnvelopePrepareFailure | null {
  if (
    fields.action.includes("fixture") ||
    fields.action === "fixture-docs-prepare"
  ) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Action fixture interdite sur le chemin canonique /studio.",
    };
  }
  if (fields.target.includes("f3-fixture")) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Cible fixture interdite sur le chemin canonique /studio.",
    };
  }
  if (fields.requiredCapabilities.some((c) => c.includes("f3-fixture"))) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Capability fixture interdite sur le chemin canonique /studio.",
    };
  }
  if (
    fields.action.includes("trajectory-governed") ||
    fields.action.includes("trajectory-bounded")
  ) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Action trajectoire W2 interdite comme action d'exécution.",
    };
  }
  if (fields.scope === W3A_IMPLEMENTATION_MARKER) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Scope authority-bearing ne peut pas être le marqueur W3-A.",
    };
  }
  return null;
}
```

### COMPLETE SOURCE: `projects/sfia-studio/app/features/project-assistant/w2/w3aQualifiedExecutionEffects.ts`
```ts
/**
 * W3-A — non-durable Qualified Execution Effects (Morris B2/B3).
 *
 * Application-level envelope ONLY. Not an aggregate, store, repository, or SoT.
 * FC-08 materializes ExecutionContract as the first durable SoT.
 *
 * Trajectory option governed/bounded = governance context / provenance only.
 * Cycle profile / CKC never alone determine authority.
 */

import type { AuthorityClass, Reversibility } from "@/lib/oa/execution-contract";

/** Bounded Product Completion effect taxonomy (governance, not a product catalog). */
export type ExecutionEffectClass =
  | "read"
  | "simulate"
  | "generate-temporary-artifact"
  | "local-write"
  | "commit"
  | "push"
  | "pull-request"
  | "merge"
  | "critical-delete"
  | "doctrine-change"
  | "baseline-promotion"
  | "unknown";

/** Executable action strings derived from effect class — never trajectory-governed/bounded. */
export type ProductExecutionAction =
  | "product:read"
  | "product:simulate"
  | "product:generate-temporary-artifact"
  | "product:local-write"
  | "product:commit"
  | "product:push"
  | "product:pull-request"
  | "product:merge"
  | "product:critical-delete"
  | "product:doctrine-change"
  | "product:baseline-promotion";

export type ProductExecutionCapability =
  | "cap:product-read"
  | "cap:product-simulate"
  | "cap:product-temp-artifact"
  | "cap:product-local-write"
  | "cap:product-commit"
  | "cap:product-git-push"
  | "cap:product-pull-request"
  | "cap:product-merge"
  | "cap:product-critical-delete"
  | "cap:product-doctrine-change"
  | "cap:product-baseline-promotion";

export type QualifiedExecutionEffects = {
  readonly effectClass: ExecutionEffectClass;
  readonly action: ProductExecutionAction;
  readonly target: string;
  readonly scopeIn: string;
  readonly scopeOut: readonly string[];
  readonly protectedBoundaries: readonly string[];
  /** True when a credible rollback/cleanup path exists for the effects. */
  readonly rollbackAvailable: boolean;
  readonly rollbackDescription: string | null;
  readonly requiredCapabilities: readonly ProductExecutionCapability[];
  readonly evidenceRequirements: readonly string[];
  readonly morrisConstructionGateRequired: boolean;
  readonly provenance: {
    readonly trajectoryOptionRef: string | null;
    readonly qualificationSource: string;
    readonly notes: readonly string[];
  };
};

export type EffectQualificationFailure = {
  readonly ok: false;
  readonly code:
    | "EFFECTS_UNRESOLVED"
    | "REVERSIBILITY_UNRESOLVED"
    | "AUTHORITY_UNRESOLVED"
    | "PREPARATION_BLOCKED"
    | "SCOPE_UNRESOLVED"
    | "TRAJECTORY_NOT_EXECUTABLE";
  readonly message: string;
};

const EFFECT_TO_ACTION: Record<
  Exclude<ExecutionEffectClass, "unknown">,
  ProductExecutionAction
> = {
  read: "product:read",
  simulate: "product:simulate",
  "generate-temporary-artifact": "product:generate-temporary-artifact",
  "local-write": "product:local-write",
  commit: "product:commit",
  push: "product:push",
  "pull-request": "product:pull-request",
  merge: "product:merge",
  "critical-delete": "product:critical-delete",
  "doctrine-change": "product:doctrine-change",
  "baseline-promotion": "product:baseline-promotion",
};

const EFFECT_TO_CAPABILITY: Record<
  Exclude<ExecutionEffectClass, "unknown">,
  ProductExecutionCapability
> = {
  read: "cap:product-read",
  simulate: "cap:product-simulate",
  "generate-temporary-artifact": "cap:product-temp-artifact",
  "local-write": "cap:product-local-write",
  commit: "cap:product-commit",
  push: "cap:product-git-push",
  "pull-request": "cap:product-pull-request",
  merge: "cap:product-merge",
  "critical-delete": "cap:product-critical-delete",
  "doctrine-change": "cap:product-doctrine-change",
  "baseline-promotion": "cap:product-baseline-promotion",
};

/**
 * Morris Product Completion runtime projection: effects → requiredAuthority.
 * Pure function — not an AuthorityCatalog, not framing-34 global engine.
 */
export function projectRequiredAuthorityFromEffects(input: {
  readonly effectClass: ExecutionEffectClass;
  readonly rollbackAvailable: boolean;
  readonly protectedBoundaries: readonly string[];
}):
  | {
      readonly ok: true;
      readonly requiredAuthority: AuthorityClass;
      readonly morrisConstructionGateRequired: boolean;
    }
  | EffectQualificationFailure {
  const { effectClass, rollbackAvailable, protectedBoundaries } = input;

  if (effectClass === "unknown") {
    return {
      ok: false,
      code: "AUTHORITY_UNRESOLVED",
      message:
        "Effets d'exécution non qualifiés — requiredAuthority fail-closed.",
    };
  }

  if (
    effectClass === "doctrine-change" ||
    effectClass === "baseline-promotion"
  ) {
    return {
      ok: true,
      requiredAuthority: "N3",
      morrisConstructionGateRequired: true,
    };
  }

  if (
    effectClass === "push" ||
    effectClass === "pull-request" ||
    effectClass === "merge" ||
    effectClass === "critical-delete"
  ) {
    return {
      ok: true,
      requiredAuthority: "N3",
      morrisConstructionGateRequired: false,
    };
  }

  if (!rollbackAvailable && effectClass !== "read" && effectClass !== "simulate") {
    return {
      ok: true,
      requiredAuthority: "N3",
      morrisConstructionGateRequired: false,
    };
  }

  if (effectClass === "local-write" || effectClass === "commit") {
    const protectedHit = protectedBoundaries.length > 0;
    return {
      ok: true,
      requiredAuthority: protectedHit ? "N2" : "N2",
      morrisConstructionGateRequired: false,
    };
  }

  if (
    effectClass === "read" ||
    effectClass === "simulate" ||
    effectClass === "generate-temporary-artifact"
  ) {
    if (protectedBoundaries.length > 0) {
      return {
        ok: true,
        requiredAuthority: "N2",
        morrisConstructionGateRequired: false,
      };
    }
    return {
      ok: true,
      requiredAuthority: "N1",
      morrisConstructionGateRequired: false,
    };
  }

  return {
    ok: false,
    code: "AUTHORITY_UNRESOLVED",
    message: `Classe d'effet non projetable: ${effectClass}`,
  };
}

/**
 * Reversibility from effects + rollback facts — NEVER HumanDecision.reversible.
 */
export function deriveReversibilityFromEffects(input: {
  readonly effectClass: ExecutionEffectClass;
  readonly rollbackAvailable: boolean;
}):
  | { readonly ok: true; readonly reversibility: Reversibility }
  | EffectQualificationFailure {
  const { effectClass, rollbackAvailable } = input;

  if (effectClass === "unknown") {
    return {
      ok: false,
      code: "REVERSIBILITY_UNRESOLVED",
      message:
        "Réversibilité d'exécution non établie — préparation bloquée.",
    };
  }

  if (effectClass === "read") {
    // No mutation — model as reversible (no durable side-effect).
    return { ok: true, reversibility: "reversible" };
  }

  if (effectClass === "simulate") {
    return { ok: true, reversibility: "reversible" };
  }

  if (effectClass === "generate-temporary-artifact") {
    if (!rollbackAvailable) {
      return {
        ok: false,
        code: "REVERSIBILITY_UNRESOLVED",
        message:
          "Artefact temporaire sans rollback/cleanup crédible — préparation bloquée.",
      };
    }
    return { ok: true, reversibility: "reversible" };
  }

  if (
    effectClass === "push" ||
    effectClass === "merge" ||
    effectClass === "critical-delete" ||
    effectClass === "doctrine-change" ||
    effectClass === "baseline-promotion"
  ) {
    if (!rollbackAvailable) {
      return { ok: true, reversibility: "irreversible" };
    }
    return { ok: true, reversibility: "partially_reversible" };
  }

  if (effectClass === "local-write" || effectClass === "commit" || effectClass === "pull-request") {
    if (!rollbackAvailable) {
      return {
        ok: false,
        code: "REVERSIBILITY_UNRESOLVED",
        message:
          "Écriture/commit sans fait de rollback crédible — préparation bloquée.",
      };
    }
    return {
      ok: true,
      reversibility:
        effectClass === "commit" ? "partially_reversible" : "reversible",
    };
  }

  return {
    ok: false,
    code: "REVERSIBILITY_UNRESOLVED",
    message: `Réversibilité non dérivable pour ${effectClass}`,
  };
}

export function actionForEffectClass(
  effectClass: Exclude<ExecutionEffectClass, "unknown">,
): ProductExecutionAction {
  return EFFECT_TO_ACTION[effectClass];
}

export function capabilityForEffectClass(
  effectClass: Exclude<ExecutionEffectClass, "unknown">,
): ProductExecutionCapability {
  return EFFECT_TO_CAPABILITY[effectClass];
}

export function buildQualifiedExecutionEffects(input: {
  readonly effectClass: Exclude<ExecutionEffectClass, "unknown">;
  readonly projectId: string;
  readonly scopeIn: string;
  readonly scopeOut?: readonly string[];
  readonly protectedBoundaries?: readonly string[];
  readonly rollbackAvailable: boolean;
  readonly rollbackDescription?: string | null;
  readonly trajectoryOptionRef?: string | null;
  readonly qualificationSource: string;
  readonly notes?: readonly string[];
  /** Actual execution target — never fixture-shaped. */
  readonly target?: string;
}):
  | { readonly ok: true; readonly effects: QualifiedExecutionEffects }
  | EffectQualificationFailure {
  if (!input.scopeIn.trim()) {
    return {
      ok: false,
      code: "SCOPE_UNRESOLVED",
      message: "Scope IN manquant — effets non qualifiables.",
    };
  }

  const target = (input.target ?? "").trim();
  if (!target) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Target d'exécution manquant — effets non qualifiables.",
    };
  }

  const protectedBoundaries = [...(input.protectedBoundaries ?? [])];
  const authority = projectRequiredAuthorityFromEffects({
    effectClass: input.effectClass,
    rollbackAvailable: input.rollbackAvailable,
    protectedBoundaries,
  });
  if (!authority.ok) return authority;

  const reversibility = deriveReversibilityFromEffects({
    effectClass: input.effectClass,
    rollbackAvailable: input.rollbackAvailable,
  });
  if (!reversibility.ok) return reversibility;

  const action = actionForEffectClass(input.effectClass);
  const capability = capabilityForEffectClass(input.effectClass);

  return {
    ok: true,
    effects: {
      effectClass: input.effectClass,
      action,
      target,
      scopeIn: input.scopeIn.trim(),
      scopeOut: [...(input.scopeOut ?? [])],
      protectedBoundaries,
      rollbackAvailable: input.rollbackAvailable,
      rollbackDescription: input.rollbackDescription ?? null,
      requiredCapabilities: [capability],
      evidenceRequirements: [`evreq:${input.effectClass}`],
      morrisConstructionGateRequired: authority.morrisConstructionGateRequired,
      provenance: {
        trajectoryOptionRef: input.trajectoryOptionRef ?? null,
        qualificationSource: input.qualificationSource,
        notes: [...(input.notes ?? [])],
      },
    },
  };
}

/**
 * @deprecated Do not call as W2-decide fallback.
 * Temporary-artifact work must come from ActualExecutionWork qualification.
 * Kept only for explicit negative/migration tests that assert its removal
 * from the product prepare path.
 */
export function qualifyDefaultW3ATemporaryArtifactEffects(_input: {
  readonly projectId: string;
  readonly scopeIn: string;
  readonly trajectoryOptionRef: string;
  readonly scopeOut?: readonly string[];
}): EffectQualificationFailure {
  return {
    ok: false,
    code: "EFFECTS_UNRESOLVED",
    message:
      "Fallback W2-decide→temporary-artifact interdit — qualifier ActualExecutionWork explicitement.",
  };
}
```

### COMPLETE SOURCE: `projects/sfia-studio/app/lib/vertical-slice-runtime/w3aProductFixtureWiring.ts`
```ts
/**
 * W3-A — BOUNDED deterministic fixture agent (Morris B2/B3 / B4).
 *
 * Fixture capabilities are DECLARED UP FRONT and independent of the contract.
 * They must NOT be synthesized from EC criteria (that made sufficiency tautological).
 * They must NOT shape EC action/target/scope.
 *
 * SUPPORTED (deterministic W3-A proof):
 * - product:generate-temporary-artifact / cap:product-temp-artifact
 * - product:simulate / cap:product-simulate
 * - scopes: product:temporary-local-artifact, product:simulate-sandbox
 * - target: product:project-workspace
 *
 * UNSUPPORTED (must yield SC-CAP / no Attempt):
 * - local-write, commit, push, PR, merge, critical-delete, doctrine/baseline
 * - any REAL / Cursor path
 * - W2 trajectory option intent strings as scopes
 *
 * TestExecutionAdapter remains the external-executor substitute only.
 */

import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import type { AgentDescriptor } from "@/lib/oa/execution-attempt";
import { F3_RUNTIME_ADAPTER_ID } from "./f3FixtureWiring";

export const W3A_BOUNDED_FIXTURE_AGENT_ID = "agt:w3a-bounded-fixture" as const;

/** Explicit fixture support — independent of requested EC capabilities. */
export const W3A_FIXTURE_SUPPORTED_ACTIONS = [
  "product:generate-temporary-artifact",
  "product:simulate",
] as const;

export const W3A_FIXTURE_SUPPORTED_CAPABILITIES = [
  "cap:product-temp-artifact",
  "cap:product-simulate",
] as const;

/** Must match W3A_PRODUCT_TARGET_WORKSPACE — duplicated to avoid @/features import. */
export const W3A_FIXTURE_STABLE_TARGET = "product:project-workspace" as const;

/** Must match W3A_PRODUCT_SCOPE TEMP_ARTIFACT / SIMULATE — no @/features import. */
export const W3A_FIXTURE_ALLOWED_SCOPES = [
  "product:temporary-local-artifact",
  "product:simulate-sandbox",
] as const;

function fixtureProvenance(nowIso: string): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: "prv:w3a-bounded-fixture-agent",
    actor: {
      actorId: "actor:system",
      role: "system",
      authorityLevel: "N1",
    },
    source: "system",
    timestamp: nowIso,
    correlationId: "cor:w3a-bounded-fixture-agent",
  };
}

/**
 * Bounded fixture AgentDescriptor — support declared independently of EC.
 */
export function createW3ABoundedFixtureAgentDescriptor(
  nowIso = "2026-08-11T00:00:00.000Z",
): AgentDescriptor {
  return Object.freeze({
    schemaVersion: "0.1.0-oa",
    agentId: W3A_BOUNDED_FIXTURE_AGENT_ID,
    agentType: "product_bounded_fixture",
    adapterRef: F3_RUNTIME_ADAPTER_ID,
    supportedCapabilities: [...W3A_FIXTURE_SUPPORTED_CAPABILITIES],
    allowedActions: [...W3A_FIXTURE_SUPPORTED_ACTIONS],
    allowedTargets: [W3A_FIXTURE_STABLE_TARGET],
    allowedScopes: [...W3A_FIXTURE_ALLOWED_SCOPES],
    trustLevel: "fixture",
    executionMode: "adapter_sync_fixture",
    healthStatus: "healthy",
    version: 1,
    enabled: true,
    createdAt: nowIso,
    provenance: fixtureProvenance(nowIso),
  });
}
```

## 9. Validations (from prior correction pass; not re-run in this regularization)
- tsc: PASS
- lint: PASS
- build: PASS
- vitest: 2026 passed / 131 skipped
- w3aGovernedExecute.test.ts: 24/24 PASS
- Playwright e2e/studio-w3a-governed-execute-runtime.spec.ts: 2/2 PASS

## 10. Fake / Real
- TestExecutionAdapter = only external fake
- DETERMINISTIC PRODUCT-NATIVE PROVEN CANDIDATE
- REAL OUT

## 11. Verdict
W3-A R16/R09 CORRECTION CANDIDATE — READY FOR CHATGPT RE-REVIEW
This pack exists to close REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING.
≠ W3-A CLOSED · ≠ W3 CLOSED · ≠ project commit · ≠ REAL · ≠ W4 STARTED

## 12. Next gate
ChatGPT re-review of this FULL immutable handoff.
W3-B DO NOT START · W4 OUT · NO PROJECT GIT MUTATION · REAL OUT · C6 CLOSED · RUNTIME V3 NON ADOPTED
