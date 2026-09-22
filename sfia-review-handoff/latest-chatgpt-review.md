# PJ-REPROOF-05 — MORRIS GO CORRECTIF CI — FULL Review Pack

- **Timestamp:** 2026-09-22T23:04:59Z / 2026-09-23 01:04:59 CEST
- **Repo:** mcleland147/sfia-workspace
- **Branch:** `fix/sfia-studio-pj-reproof-05-execution-eligibility`
- **HEAD (unchanged — no corrective commit):** `edb920e5fc118b16d520bcf3ac40faaaef4ed70b`
- **origin/main:** `31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0`
- **PR:** #511 OPEN @ head `edb920e5…`
- **Mode:** SAME PJ-REPROOF-05 — CORRECTIF CI (NO micro-cycle)
- **Morris GO consumed:** CORRECTIF CI — correction + validation + commit/push **only if full local PASS**
- **Fake/Real:** DETERMINISTIC PROVEN — Product REAL Cursor = 0 — `SFIA_STUDIO_CURSOR_REAL` unset
- **Product Journey:** PAUSED
- **Runtime v3:** NON ADOPTED

## 1. Local Git Truth — before correction

```
branch: fix/sfia-studio-pj-reproof-05-execution-eligibility
HEAD = origin/branch = edb920e5fc118b16d520bcf3ac40faaaef4ed70b
origin/main = 31295c70cb33b3037cd3e5b79f7dc44f7ea9afa0
dirty: only .tmp-sfia-review/chatgpt-review.md
staged: empty
PR #511 OPEN / mergedAt null
```

## 2. SAME PJ-REPROOF-05 / NO MICRO-CYCLE

Confirmed. No 05.1. No separate harness/boundary/CI cycle.

## 3. Sources (blobs verified)

| Source | SHA |
|---|---|
| template | 948156a21309ef99c3aaed6410947dc6b9bc569a |
| routing guide | 8949e764d96faf3fa812d39307dbc298b500f5ef |
| Build Doctrine | 99232e4582e4ef4cf489020a46b818ebb41ac397 |
| Roadmap | df2ad6f3c4cd5504d586f344bc0d76f737b0ce65 |
| C1 | 806d672fe21ad82a641bf88fe95fc87870481105 |
| framing 34 | 0d81a3616d08e3c8d1b1d3e3ad982c1cc1cd077d |
| framing 36 | af4b6531beca99cb8c854a03ec36285c4e4e0c2e |
| prior handoff | bfd95784038cacfc43fed3fe754260f980ea5a73 / blob ea09ebd1… |
| CI source | run 35794051559 |

## 4. Initial CI failure (35794051559)

- Typecheck/Lint/Build PASS
- Vitest FAIL — 7 files / 40 tests
- Required Gate FAIL

Initial 7 files:
1. w3cPostEvidenceCorrection.test.ts
2. checkpointF.recoveryOptionsContext.d0.test.ts
3. checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
4. w3cPostEvidenceLoop.test.ts
5. w3bProductTerminal.test.ts
6. vertical-slice-runtime/importBoundaries.test.ts
7. project-assistant/importBoundaries.test.ts

## 5. Cause A — trusted-launch prepare harness (APPLIED locally)

Production `prepareExecutionContractFromW2Decision` correctly requires trusted launch context (fail-closed). Historical helpers called prepare without `pinnedBaseHeadSha`.

### Helpers / calls corrected (explicit `W2_TEST_PINNED_BASE_HEAD_SHA`)

| File | Call site |
|---|---|
| w3cPostEvidenceLoop.test.ts | `authorizeTempArtifact` → prepare |
| w3cPostEvidenceCorrection.test.ts | `authorizeTempArtifact` → prepare + second prepare (~line 226) |
| checkpointF.recoveryOptionsContext.d0.test.ts | `authorizeTempArtifact` → prepare |
| w3bProductTerminal.test.ts | `authorizeTempArtifact` → prepare |
| checkpointF.recoveryDocsWriteSuccessor.d0.test.ts | `wrong` prepare (generic Product EC) |

### Proof no production weakening

- No `process.env.VITEST` auto-pin
- No `process.cwd` fallback
- Comments in prepare still forbid VITEST inference
- pjReproof05 fail-closed trusted-launch tests still PASS (6/6 focused)

## 6. Cause B — vertical-slice allowlist (APPLIED locally)

Added EXACTLY 3 edges to `importBoundaries.test.ts`:

```
features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime
features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime/managedRepoRootBaseConfig
features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha
```

Result: vertical-slice-runtime/importBoundaries **PASS** (5/5).

## 7. Cause C — project-assistant Cursor infrastructure boundary (APPLIED locally)

### Before
`w3aProductExecutionSemantics.ts` imported quartet from
`@/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent`
→ matched forbidden `/cursor/i` feature import rule.

### After — single canonical domain owner
New file:
`lib/oa/execution-contract/domain/generalistExecutionSurface.ts`

```typescript
/**
 * Canonical generic Product ExecutionContract surface (PJ-REPROOF-05 / Morris).
 *
 * ONE quartet for ANY authorized Product mission. Cursor owns HOW.
 * These tokens describe the durable EC contract surface — not AgentDescriptor
 * infrastructure and not a Product task catalogue.
 *
 * Owned by execution-contract domain. Consumers (Product prepare semantics,
 * AgentDescriptor builders) MUST import from this module (or the public
 * execution-contract barrel) — never duplicate the string literals.
 */

/** Single generic Product capability — not a task catalogue. */
export const STUDIO_CURSOR_GENERALIST_CAPABILITY =
  "cap:studio.cursor.generalist" as const;
export const STUDIO_CURSOR_GENERALIST_ACTION =
  "studio.cursor.generalist.execute" as const;
export const STUDIO_CURSOR_GENERALIST_TARGET =
  "studio.cursor.generalist.workspace" as const;
export const STUDIO_CURSOR_GENERALIST_SCOPE =
  "studio.cursor.generalist.authorized_contract" as const;
```

Exported via `execution-contract/index.ts`.

`w3aProductExecutionSemantics` now imports quartet from `@/lib/oa/execution-contract`.

`studioCursorGeneralistAgent` **consumes the same domain source** and re-exports for historical consumers (no duplicated string literals).

### Quartet values unchanged
- capability = `cap:studio.cursor.generalist`
- action = `studio.cursor.generalist.execute`
- target = `studio.cursor.generalist.workspace`
- scope = `studio.cursor.generalist.authorized_contract`

### Boundary proof
`project-assistant/importBoundaries.test.ts` **PASS** (3/3) — **not weakened**.

FEATURE_CURSOR_INFRA_IMPORT from features/project-assistant = **0**.

## 8. Targeted 7-suite results AFTER A+B+C

| Suite | Result |
|---|---|
| vertical-slice-runtime/importBoundaries | **PASS** |
| project-assistant/importBoundaries | **PASS** |
| checkpointF.recoveryDocsWriteSuccessor.d0 | **PASS** (6/6) |
| w3cPostEvidenceLoop | **FAIL** (prepare fixed; later steps fail) |
| w3cPostEvidenceCorrection | **FAIL** |
| w3bProductTerminal | **FAIL** |
| checkpointF.recoveryOptionsContext.d0 | **FAIL** |

Aggregate observed: **3 files PASS / 4 files FAIL** (~35 failing tests remaining).

## 9. NEW CAUSE D — STOP (not Case A)

After pins, Product prepare succeeds and Select→Start reaches **generic Cursor REAL** (`agt:studio.cursor.generalist`) via TestOnlyRealExecutionLaunchPort (holdCompletion=true).

Historical W3-B / W3-C helpers then call `governedExecuteRecordResult` expecting fixture-style technical terminal (`terminal.ok === true`).

Canonical Product path correctly returns **non-ok** (CURSOR_REPORT_PENDING class — Record waits for Cursor report; no fixture fallback). Evidence materialize then fails (`ATTEMPT_STATUS_REFUSED` / attempt still running).

This is **NOT**:
- missing prepare pin
- allowlist gap
- import boundary violation

This is a **second harness adaptation class**: historical post-Evidence / Product-terminal suites still assume pre–PJ-REPROOF-05 fixture Record completion for temp-artifact Product ECs.

Contract §10 / §19:
> If une autre cause apparaît : STOP. Pas de scope creep.

**No production weakening applied.** No FIXTURE stamp reintroduced. No VITEST autopin. No third commit.

## 10. Validations NOT claimed complete

- Full `npm test` / typecheck / lint / build: **NOT executed to green** (blocked by Cause D)
- PJ-REPROOF critical 131 batch: not re-run as gate (pins/boundaries proven separately; full green blocked)
- No corrective commit
- No push
- PR #511 head remains `edb920e5…`
- No new CI run from this pass

## 11. Fake / Real / Legacy

- Product REAL Cursor processes = **0**
- SFIA_STUDIO_CURSOR_REAL = unset
- Legacy Batch v2 / fp `ca296bb56…` / attempts **0** (RO)

## 12. Working tree after STOP (uncommitted corrective WIP)

### git status --short
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/domain/generalistExecutionSurface.ts
```

### git diff --stat HEAD
```
 .tmp-sfia-review/chatgpt-review.md                 | 135 +--------------------
 ...eckpointF.recoveryDocsWriteSuccessor.d0.test.ts |   2 +
 .../checkpointF.recoveryOptionsContext.d0.test.ts  |   2 +
 .../project-assistant/w3bProductTerminal.test.ts   |   2 +
 .../w3cPostEvidenceCorrection.test.ts              |   3 +
 .../project-assistant/w3cPostEvidenceLoop.test.ts  |   2 +
 .../importBoundaries.test.ts                       |   3 +
 .../w2/w3aProductExecutionSemantics.ts             |  14 +--
 .../infrastructure/studioCursorGeneralistAgent.ts  |  30 +++--
 .../app/lib/oa/execution-contract/index.ts         |   6 +
 10 files changed, 49 insertions(+), 150 deletions(-)
```

### git diff --name-status HEAD
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent.ts
M	projects/sfia-studio/app/lib/oa/execution-contract/index.ts
```

### Untracked
```
projects/sfia-studio/app/lib/oa/execution-contract/domain/generalistExecutionSurface.ts
```

### Useful diffs (A/B/C applied)

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index e54ec540..b574a279 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -124,6 +124,9 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
       "features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveProposalDecisionSubject.ts:@/lib/vertical-slice-runtime",
       "features/project-assistant/w2/resolveRecoveryExecutionBinding.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime",
+      "features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime/managedRepoRootBaseConfig",
+      "features/project-assistant/w2/resolveTrustedProductLaunchContext.ts:@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha",
       "features/pre-m6-product-ui/NewProjectIntentionPage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectWorkspacePage.tsx:@/lib/vertical-slice-runtime/actions",
       "features/pre-m6-product-ui/ProjectsPage.tsx:@/lib/vertical-slice-runtime/actions",
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
index ade56e2d..8091f8d6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3aProductExecutionSemantics.ts
@@ -15,7 +15,13 @@

 import type { DecisionBasis } from "@/lib/oa/decision";
 import type { AuthorityClass, Reversibility } from "@/lib/oa/execution-contract";
-import { EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED } from "@/lib/oa/execution-contract";
+import {
+  EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
+  STUDIO_CURSOR_GENERALIST_ACTION,
+  STUDIO_CURSOR_GENERALIST_CAPABILITY,
+  STUDIO_CURSOR_GENERALIST_SCOPE,
+  STUDIO_CURSOR_GENERALIST_TARGET,
+} from "@/lib/oa/execution-contract";
 import type { ProductMissionFields } from "./deriveActualExecutionWorkFromProductContext";
 import {
   BOUNDED_OPTION_REF,
@@ -36,12 +42,6 @@ import {
   deriveReversibilityFromEffects,
 } from "./w3aQualifiedExecutionEffects";
 import { filterTrajectoryNonExecuteStopsFromEc } from "./resolveProductExecutionEligibility";
-import {
-  STUDIO_CURSOR_GENERALIST_ACTION,
-  STUDIO_CURSOR_GENERALIST_CAPABILITY,
-  STUDIO_CURSOR_GENERALIST_SCOPE,
-  STUDIO_CURSOR_GENERALIST_TARGET,
-} from "@/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent";

 /** Implementation / provenance marker — NOT authority-bearing scope. */
 export const W3A_IMPLEMENTATION_MARKER =
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent.ts
index dbec0095..6fbe5b43 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorGeneralistAgent.ts
@@ -1,28 +1,38 @@
 /**
- * PJ-REPROOF-04 — Studio Cursor generalist executor (canonical Product path).
+ * PJ-REPROOF-04 / PJ-REPROOF-05 — Studio Cursor generalist executor
+ * (AgentDescriptor owner for the canonical Product path).
  *
  * ONE agent identity for ANY authorized ExecutionContract mission.
  * Cursor determines HOW from the projected prompt.
  *
+ * Contract-surface quartet tokens are owned by execution-contract domain
+ * (`generalistExecutionSurface`). This module builds the AgentDescriptor and
+ * re-exports the quartet for historical consumers — it does NOT redefine the
+ * string literals.
+ *
  * Do NOT grow supportedCapabilities / allowedActions by Product task type.
  * Exact non-wildcard technical tokens satisfy REAL allowlist shape only.
  */
 import type { ProvenanceRecord } from "@/lib/oa/doctrine";
+import {
+  STUDIO_CURSOR_GENERALIST_ACTION,
+  STUDIO_CURSOR_GENERALIST_CAPABILITY,
+  STUDIO_CURSOR_GENERALIST_SCOPE,
+  STUDIO_CURSOR_GENERALIST_TARGET,
+} from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";
 import {
   M4_REAL_GATEWAY_ADAPTER_ID,
   STUDIO_CURSOR_GENERALIST_AGENT_ID,
 } from "../domain/realLaunchSafety";
 import type { AgentDescriptor } from "../domain/types";

-/** Single generic Product capability — not a task catalogue. */
-export const STUDIO_CURSOR_GENERALIST_CAPABILITY =
-  "cap:studio.cursor.generalist" as const;
-export const STUDIO_CURSOR_GENERALIST_ACTION =
-  "studio.cursor.generalist.execute" as const;
-export const STUDIO_CURSOR_GENERALIST_TARGET =
-  "studio.cursor.generalist.workspace" as const;
-export const STUDIO_CURSOR_GENERALIST_SCOPE =
-  "studio.cursor.generalist.authorized_contract" as const;
+/** Compatibility re-exports — canonical source is execution-contract domain. */
+export {
+  STUDIO_CURSOR_GENERALIST_ACTION,
+  STUDIO_CURSOR_GENERALIST_CAPABILITY,
+  STUDIO_CURSOR_GENERALIST_SCOPE,
+  STUDIO_CURSOR_GENERALIST_TARGET,
+};

 export function createStudioCursorGeneralistAgentDescriptor(
   nowIso: string,
diff --git a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
index fc1706ae..0c3f9b75 100644
--- a/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-contract/index.ts
@@ -35,6 +35,12 @@ export {
   type ProductExecutionEligibility,
   type ProductExecutionEligibilityReasonCode,
 } from "./domain/resolveProductExecutionEligibility";
+export {
+  STUDIO_CURSOR_GENERALIST_ACTION,
+  STUDIO_CURSOR_GENERALIST_CAPABILITY,
+  STUDIO_CURSOR_GENERALIST_SCOPE,
+  STUDIO_CURSOR_GENERALIST_TARGET,
+} from "./domain/generalistExecutionSurface";
 export {
   computeExecutionContractSemanticFingerprint,
   computeExecutionContractSemanticMaterialFingerprint,
```

### Harness pin diffs
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
index cfae8891..49675062 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
@@ -39,6 +39,7 @@ import {
   currentF2Context,
   seedQualifiedProject,
   tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

@@ -447,6 +448,7 @@ describe("R8 — prepare recovery docs_write successor (durable)", () => {
       currentContext: context,
       qualifiedOperationKind: "generate-temporary-artifact",
       forceLocalAuthority: true,
+      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
     });
     expect(wrong.ok).toBe(true);
     if (!wrong.ok) return;
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
index 1e9f2225..4799c5f2 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryOptionsContext.d0.test.ts
@@ -43,6 +43,7 @@ import {
   currentF2Context,
   seedQualifiedProject,
   tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";

 beforeEach(() => {
@@ -122,6 +123,7 @@ async function authorizeTempArtifact(suffix: string, dbPath?: string) {
     currentContext: context,
     forceLocalAuthority: true,
     qualifiedOperationKind: "generate-temporary-artifact",
+    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
   });
   expect(prepared.ok).toBe(true);
   if (!prepared.ok) throw new Error(prepared.code);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
index 6ec932f0..7c7d0c12 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts
@@ -33,6 +33,7 @@ import {
   currentF2Context,
   seedQualifiedProject,
   tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";

 beforeEach(() => {
@@ -92,6 +93,7 @@ async function authorizeTempArtifact(suffix: string, dbPath?: string) {
     currentContext: context,
     forceLocalAuthority: true,
     qualifiedOperationKind: "generate-temporary-artifact",
+    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
   });
   expect(prepared.ok).toBe(true);
   if (!prepared.ok) throw new Error(prepared.code);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts
index 2fdf6ee3..17559bf0 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceCorrection.test.ts
@@ -49,6 +49,7 @@ import {
   currentF2Context,
   seedQualifiedProject,
   tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";

 beforeEach(() => {
@@ -111,6 +112,7 @@ async function authorizeTempArtifact(suffix: string, dbPath?: string) {
     currentContext: context,
     forceLocalAuthority: true,
     qualifiedOperationKind: "generate-temporary-artifact",
+    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
   });
   expect(prepared.ok).toBe(true);
   if (!prepared.ok) throw new Error(prepared.code);
@@ -230,6 +232,7 @@ async function secondSuccessOnSameProject(
     currentContext: context,
     forceLocalAuthority: true,
     qualifiedOperationKind: "generate-temporary-artifact",
+    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
   });
   expect(prepared.ok).toBe(true);
   if (!prepared.ok) throw new Error(prepared.code);
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
index 21d498ca..f93a9c72 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/w3cPostEvidenceLoop.test.ts
@@ -33,6 +33,7 @@ import {
   currentF2Context,
   seedQualifiedProject,
   tempProductDbPath,
+  W2_TEST_PINNED_BASE_HEAD_SHA,
 } from "./w2Harness";

 beforeEach(() => {
@@ -93,6 +94,7 @@ async function authorizeTempArtifact(suffix: string, dbPath?: string) {
     currentContext: context,
     forceLocalAuthority: true,
     qualifiedOperationKind: "generate-temporary-artifact",
+    pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
   });
   expect(prepared.ok).toBe(true);
   if (!prepared.ok) throw new Error(prepared.code);
```

## 13. Commit / push / PR / CI

- Corrective commit: **NOT CREATED** (local validation not fully PASS)
- Push: **NOT PERFORMED**
- PR #511 head: still `edb920e5fc118b16d520bcf3ac40faaaef4ed70b`
- New CI run: **none**
- mergeStateStatus: unchanged (BLOCKED from prior fail)
- **Merge NOT performed**

## 14. Remaining debt / next Morris decision needed

Proposed next GO (not auto-created):
**PJ-REPROOF-05 — harness adaptation for deterministic Product Cursor completion in historical W3-B/W3-C/checkpointF suites**

Direction candidates (for Morris/ChatGPT, not executed):
1. After Start, resolveSimulatedCompletion on TestOnlyRealExecutionLaunchPort + resume/settle Attempt to terminal **without** fixture fallback and without weakening CURSOR_REPORT_PENDING production semantics; OR
2. Explicitly update those suites' assertions to the CURSOR_REPORT_PENDING Product model where terminal Evidence is out of scope for that suite.

Plus prior out-of-scope debt unchanged (product:* cleanup, qualifiedOperationKind, CURSOR_REPORT_PENDING product bridge, Evidence REAL, Journey REAL).

## 15. Forbidden actions respected

- no merge / force push / amend edb920e5 / rebase
- no REAL / SFIA_STUDIO_CURSOR_REAL
- no production trusted-launch weakening
- no importBoundaries weakening
- no doctrine/DB/migration
- no micro-cycle auto-spawn
- WIP kept local for review (uncommitted)

## 16. Final verdict

**STOP — PJ-REPROOF-05 CORRECTIVE CI NOT PROVEN — MERGE NOT AUTHORIZED**

A+B+C applied locally and partially proven (boundaries + prepare pins + recoveryDocsWriteSuccessor). Full CI green blocked by Cause D (Product Cursor Record pending vs historical fixture terminal expectations). Requires distinct Morris GO before commit/push.
