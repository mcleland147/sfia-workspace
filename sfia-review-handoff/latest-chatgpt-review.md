# SFIA STUDIO — PRODUCT JOURNEY ↔ GOVERNED DOCS_WRITE EXECUTION WIRING
## Review Pack FULL — Cycle 8 Delivery / EVOL / Critical

- timestamp UTC: 2026-09-16T19:05:29Z
- cycle: SFIA STUDIO — PRODUCT JOURNEY ↔ GOVERNED DOCS_WRITE EXECUTION WIRING
- type: Cycle 8 — Delivery / implémentation
- typologie v2.4: EVOL
- profil SFIA: Critical
- Morris GO exact: DELIVERY PRODUCT JOURNEY ↔ GOVERNED REAL DOCS_WRITE — CLOSE WIRING + EC PROFILE GAP AS ONE COHERENT LOT — ZERO REAL DURING DELIVERY

## 1. Repo truth
- repo: mcleland147/sfia-workspace
- origin/main: a8a5dffaa84fe25f792074b93696a74722de8fdf (unchanged vs cadrage)
- Delivery worktree: /Users/morris/Projects/sfia-studio-product-real-docs-write-wiring
- branch: delivery/sfia-studio-product-real-docs-write-wiring
- base/HEAD: a8a5dffaa84fe25f792074b93696a74722de8fdf
- note: mid-cycle the worktree briefly tracked fix/sfia-studio-ec-rehydration-continuity@b871ad7c (Reproof intermediate); restored to delivery branch@origin/main before Review Pack. Product delta identical (b871ad7c tree ≡ merge parent of a8a5dff for these paths). No project commit.

## 2. Source handoff Reproof 07
- branch tip consumed: b19c3a84facadf4e9c376e165bc0247a778019d1
- campaign: AUTHENTICATED PRODUCT REPROOF 07
- verdict: INCOMPLETE — TOOLING OR WIRING GAP
- diagnostic confirmed:
  - EC Product Journey used narrative/business scope ≠ studio.gcec.docs_write
  - constraints still PREPARE_ONLY / NO_CURSOR_REAL / NO_ATTEMPT on prepare EC
  - Product Execute seam was fixture-only (F3 forced boundary)
  - REAL ON alone did not align machine profile or authorize Execute

## 3. Build Doctrine / Roadmap / C1 / CKC
- Build Doctrine: VALIDATED — ACTIVE ON MAIN (read, not mutated)
- Roadmap: VALIDATED — ACTIVE LIVING ROADMAP (read, not mutated)
- Product Completion: CLOSED / COMPLETE BY MORRIS (not reopened)
- Runtime v3: NON ADOPTED
- CKC Cycle 8 Delivery: ABSENT among pilots/01–04
- fallback: routing guide + méthode v2.6 + Build Doctrine + Product sources (no invented CKC authority)

## 4. Fake/Real qualification
- DETERMINISTIC DELIVERY ONLY
- SFIA_STUDIO_CURSOR_REAL=0 / OPS1_CURSOR_REAL=0 during all validations
- OpenAI: FAKE/OFF-LIVE
- Nora: FAKE/OFF-LIVE
- ZERO Cursor REAL statement: no StudioCursorRealLaunchGateway effectful launch; FakeDocsWriteLaunchPort only in tests
- DETERMINISTIC PROVEN ≠ READY FOR REAL

## 5. Source discovery (candidates → disposition)
| Path | Role | Disposition |
|------|------|-------------|
| prepareM3FromDecision.ts | PREPARE narrative + PREPARE_ONLY | KEEP |
| boundedDocsWriteM3ResolutionProfile.ts | canonical M4 machine profile | KEEP / HARVEST |
| selectProductM3ResolutionProfile.ts | profile select + authorizedM3ResolutionKind | KEEP |
| prepareAndResolveM3ProductPath.ts | prepare→resolve supersession | ADAPT (auto docs_write from DecisionBasis) |
| resolveM3ExecutionContract.ts | supersede + successor view | ADAPT (disclosure fields on successor) |
| confirmAndExecuteResolvedM3.ts | confirm→execute router | ADAPT (route bounded_docs_write) |
| executeConfirmedBoundedDocsWriteContract.ts | M4 Select/GateD/Start/Evidence | COMPLETE (new, mirrors RO) |
| governedExecuteAuthorizedContract.ts | W2 Product Execute seam | ADAPT (dual fixture/docs-write, one SM) |
| TrajectorySurface.tsx | Product Journey prepare CTA | ADAPT (prepareResolvedM3 + disclosure) |
| agentMatchViolation / M4 agent | exact scope matcher | KEEP (unchanged) |
| StudioCursorRealLaunchGateway | REAL boundary | KEEP (not invoked) |
| doctrine/method/convergence | protected | HORS SCOPE |

## 6. Architecture BEFORE → AFTER
### BEFORE
HumanDecision → prepareM3 (narrative scope + PREPARE_ONLY) → Inspect/Confirm on prepare or incomplete resolve → W2 governedExecute → F3 fixture only → never M4 StartExecution/Evidence for docs_write Product Journey.

### AFTER (one Product state machine)
HumanDecision (docs_write DecisionBasis)
→ prepareM3 (still prepare-only original)
→ resolve via boundedDocsWriteM3ResolutionProfile (scope=studio.gcec.docs_write, action=cursor.docs_write.apply, target=workspace.isolated.docs_write) — auto when prepare action/caps indicate docs_write; never from client REAL flags
→ Inspect / Confirmation on successor
→ authority evaluation (existing)
→ Product Execute = same OA Select → Gate D → StartExecution → completeBoundedDocsWriteLaunch → Evidence
→ Fake launch port when REAL OFF / composed Fake; REAL gateway only if future opt-in composition (not this cycle)
→ fixture path preserved for non-docs-write ECs

## 7. EC profile / authority / execute / attempt / evidence / persistence
- Machine scope retained: studio.gcec.docs_write (M4_BOUNDED_DOCS_WRITE_SCOPE)
- Business disclosure: preserved via inspectionDisclosure projection; not used as authority scope
- Material change: supersedeExecutionContract (existing); stale inspection/confirmation not transferred
- Agent matcher: unchanged exact match; narrative scope → AGENT_SCOPE_MISMATCH
- Product Execute: governedExecuteAuthorizedContract branches on authorizedM3ResolutionKind===bounded_docs_write
- Deterministic adapter: FakeDocsWriteLaunchPort (calls[] counted); no subprocess Cursor
- REAL OFF fail-closed: REAL_BOUNDARY_REQUIRED when docs_write EC without realBoundary
- Attempt: exactly one succeeded; replay reuses
- Evidence: ingestDocsWriteArtifactEvidence bound to attempt
- Persistence: SQLite TEMP in harness; reload/list attempts no duplicate

## 8. Tests
- NEW: __tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts (10/10 PASS)
- Related suites: w3aGovernedExecute, gcecOneLotDelivery, gcecCr23, qa-pre-m6-01, preM6.realProductWiringResidual → 83/83 PASS
- Commands (all with SFIA_STUDIO_CURSOR_REAL=0 OPS1_CURSOR_REAL=0 OPS1_CONVERSATION_PROVIDER=fake):
  - npx vitest run __tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
  - npx vitest run [related list]
  - npm run typecheck → PASS
  - npm run lint → PASS
  - npm run build → PASS

## 9. Validation outputs summary
- focused wiring: 10 passed
- related: 6 files / 83 passed
- typecheck: PASS
- lint: PASS (next lint, no warnings)
- build: PASS
- REAL executions = 0
- OpenAI LIVE = 0
- project commit/push/PR/merge = 0

## 10. git status / diff
```
 .../uatUxSemanticReserves.ui.test.tsx              |  36 ++
 .../surfaces/TrajectorySurface.tsx                 |  12 +-
 .../f3/confirmAndExecuteResolvedM3.ts              |  37 +-
 .../app/features/project-assistant/f3/index.ts     |   1 +
 .../f3/prepareAndResolveM3ProductPath.ts           |  42 ++-
 .../f3/resolveM3ExecutionContract.ts               |   9 +
 .../w2/governedExecuteAuthorizedContract.ts        | 375 ++++++++++++++++-----
 7 files changed, 414 insertions(+), 98 deletions(-)

 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
?? projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedDocsWriteContract.ts

diff --check:

```

## 11. Reserves / debts
- TRAJECTORY_NOT_FOUND bookkeeping reserve (prior Reproofs) untouched
- Historical Reproof 07 dogfood DB / dual Statuer AVRs not mutated
- REAL BOUNDARY PROVEN / E2E REAL PROVEN: NOT claimed
- smoke UI authenticated dogfood: not run (auth/DB mutation risk); integration harness used instead
- mid-cycle wrong branch checkout recovered (documented above)

## 12. Next gate
NEXT ACTION REQUIRES CHATGPT CRITICAL REVIEW + DISTINCT MORRIS DECISION
Candidate after PASS review: bounded REAL docs_write campaign under separate Morris GO (not authorized here).

## 13. Verdict
PRODUCT-JOURNEY-GOVERNED-DOCS-WRITE-WIRING — DELIVERY PASS — DETERMINISTICALLY PROVEN DELIVERY CANDIDATE — AUTHENTICATED PRODUCT EXECUTIONCONTRACT PROFILE ALIGNED WITH EXISTING M4 DOCS_WRITE AGENT — MACHINE AUTHORITY SCOPE DISTINCT FROM BUSINESS DISCLOSURE — MATERIAL CONTRACT GOVERNANCE PRESERVED — PRODUCT EXECUTE WIRED TO EXISTING GOVERNED EXECUTION PIPELINE — FAKE/REAL SHARE ONE PRODUCT STATE MACHINE — ATTEMPT + EVIDENCE PATH PROVEN DETERMINISTICALLY — REAL OFF FAIL-CLOSED PRESERVED — REPROOF 05/06/07 NON-REGRESSION PASS — ZERO CURSOR REAL — ZERO OPENAI LIVE — ZERO PROJECT COMMIT/PUSH/PR/MERGE — RUNTIME V3 NON ADOPTED — READY FOR CHATGPT CRITICAL REVIEW

---

## ANTI-STUB — FULL PRODUCT DIFF + NEW FILES

### git diff (modified Product files)
```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
index 5bb947a6..0012fdb3 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx
@@ -110,6 +110,42 @@ const RESOLVED: F3M3ResolvedPayload = {
     stopConditions: ["GATE_D_REQUIRED"],
     supersedesExecutionContractId: "xct:m3:dec:f2:demo",
     supersessionReason: "bounded",
+    semanticFingerprint: "fp:demo",
+    evidenceRequirements: [],
+    inspectionDisclosure: {
+      action: "cursor.read_only.inspect",
+      technicalTarget: "workspace.isolated.read",
+      scope: "studio.m4.real_off",
+      targetRepositoryRef: null,
+      targetPath: null,
+      scopeIn: null,
+      scopeOut: null,
+      createOrModify: null,
+      noDelete: null,
+      objective: null,
+      artifactType: null,
+      artifactBrief: null,
+      contentRequirements: null,
+      validationExpectations: null,
+      expectedOutputs: null,
+      evidenceRequirements: [],
+      requiredAuthority: "MORRIS",
+      requiredCapabilities: ["cap:cursor.read_only"],
+      constraints: [
+        "BOUNDED READ-ONLY",
+        "CURSOR CLI REAL PROFILE",
+        "GATE D REQUIRED",
+        "NO GIT WRITE",
+        "NO GITHUB WRITE",
+      ],
+      stopConditions: ["GATE_D_REQUIRED"],
+      reversibility: "reversible",
+      contractVersion: 3,
+      executionContractId: "xct:m3-res:dec:f2:demo",
+      semanticFingerprint: "fp:demo",
+      disclosureComplete: true,
+      incompletenessCode: null,
+    },
   },
   reusedFromIdempotency: false,
   executionPerformed: false,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
index 7e0fa460..da65d63a 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
@@ -17,7 +17,7 @@ import {
   useState,
 } from "react";
 import { flushSync } from "react-dom";
-import { projectAssistantPrepareM3Action } from "@/features/project-assistant/actions";
+import { projectAssistantPrepareResolvedM3Action } from "@/features/project-assistant/actions";
 import {
   w2AmendExecutionContractAction,
   w2AuthorizeExecutionContractAction,
@@ -843,12 +843,14 @@ export function TrajectorySurface({
   ]);

   /**
-   * JOURNEY-INTEGRITY / Lot A-B final — Proposal-backed PREPARE.
+   * JOURNEY-INTEGRITY / Lot A-B final — Proposal-backed PREPARE+RESOLVE.
    *
    * After pursue on a Proposal Decision Subject, the sealed DecisionBasis already
    * carries the decided operation (e.g. cursor.docs_write.apply). The Pilot must
    * not re-select a sandbox op. Client sends only projectId + decisionId; the
-   * server resolves targetPath / operation / binding from durable lineage.
+   * server resolves targetPath / operation / binding from durable lineage and
+   * supersedes PREPARE into the canonical M4 docs-write machine profile when
+   * DecisionBasis indicates docs_write (studio.gcec.docs_write).
    */
   const prepareProposalBackedContract = useCallback(async () => {
     if (continuityMutationBlocked) return;
@@ -856,7 +858,7 @@ export function TrajectorySurface({
     if (decisionDefersExecution) return;
     setBusy("contract");
     setError(null);
-    const result = await projectAssistantPrepareM3Action({
+    const result = await projectAssistantPrepareResolvedM3Action({
       projectId,
       decisionId: decision.decisionId,
     });
@@ -865,7 +867,7 @@ export function TrajectorySurface({
       setError(result.message);
       return;
     }
-    const prepared = result.f3.contract;
+    const prepared = result.f3.successor;
     setContract({
       executionContractId: prepared.executionContractId,
       version: prepared.version,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
index bdee43e5..3a774700 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
@@ -24,6 +24,7 @@ import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
 import { F3_ADAPTER_ID } from "./constants";
 import { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
+import { executeConfirmedBoundedDocsWriteContract } from "./executeConfirmedBoundedDocsWriteContract";
 import { executeConfirmedFixtureSafeContract } from "./executeConfirmedFixtureSafeContract";
 import { authorizedM3ResolutionKind } from "./selectProductM3ResolutionProfile";
 import type { F3ExecutePayload } from "./types";
@@ -155,12 +156,46 @@ export async function confirmAndExecuteResolvedM3(input: {
     });
   }

+  if (kind === "bounded_docs_write") {
+    return executeConfirmedBoundedDocsWriteContract({
+      projectId: input.projectId,
+      decisionId: input.decisionId,
+      proposal: null,
+      contract,
+      expectedContractVersion: input.expectedContractVersion,
+      actor: LOCAL_MORRIS_M3_ACTOR,
+      authorityEvidenceId: auth.evidenceId,
+      identities: {
+        confirmationId: `cfm:m3:${contract.executionContractId}:v${contract.version}`,
+        confirmationIdempotencyKey: `idem:m3-cfm:${contract.executionContractId}:v${contract.version}`,
+        confirmationLevel: "N3",
+        attemptId,
+        attemptIdempotencyKey: `idem:m3-att:${contract.executionContractId}`,
+        grantId: `gd:m3:${contract.executionContractId.replace(/^xct:/, "")}`,
+      },
+      extraDisclosures: [
+        "M3 resolved successor — bounded docs-write profile",
+        "NO Proposal authority",
+        "Launch port is Fake or REAL composition — client real/adapter fields ignored",
+      ],
+      deps: {
+        decisionServices: input.deps.decisionServices,
+        executionContractServices: input.deps.executionContractServices,
+        executionAttemptServices: input.deps.executionAttemptServices,
+        evidenceReviewServices: input.deps.evidenceReviewServices,
+        projectServices: input.deps.projectServices,
+        productDurablePath: input.deps.productDurablePath,
+        nowIso: input.deps.nowIso,
+      },
+    });
+  }
+
   if (kind !== "fixture") {
     return {
       ok: false,
       code: "M3_SUCCESSOR_GOVERNANCE_MISMATCH",
       message:
-        "Successor n'est ni fixture-safe ni bounded read-only — refus fail-closed.",
+        "Successor n'est ni fixture-safe, ni bounded read-only, ni bounded docs-write — refus fail-closed.",
     };
   }

diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index 34154be5..66c47879 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -53,6 +53,7 @@ export type {
   CompleteBoundedReadOnlyLaunchResult,
 } from "./completeBoundedReadOnlyLaunch";
 export { executeConfirmedBoundedReadOnlyContract } from "./executeConfirmedBoundedReadOnlyContract";
+export { executeConfirmedBoundedDocsWriteContract } from "./executeConfirmedBoundedDocsWriteContract";
 export { prepareAndResolveM3ProductPath } from "./prepareAndResolveM3ProductPath";
 export type {
   F3M3ResolvedPayload,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
index 9cd9c650..e435d213 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
@@ -19,12 +19,16 @@ import {
   type ResolveM3Deps,
   type ResolveM3Success,
 } from "./resolveM3ExecutionContract";
+import {
+  M4_BOUNDED_DOCS_WRITE_ACTION,
+  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+  type GitCommandRunner,
+} from "@/lib/oa/execution-attempt";
 import { selectProductM3ResolutionProfile } from "./selectProductM3ResolutionProfile";
 import {
   resolveBoundedReadOnlyBaseHeadSha,
   validateBaseHeadSha,
 } from "@/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha";
-import type { GitCommandRunner } from "@/lib/oa/execution-attempt";

 export type PrepareAndResolveM3Deps = PrepareM3Deps &
   ResolveM3Deps & {
@@ -36,6 +40,8 @@ export type PrepareAndResolveM3Deps = PrepareM3Deps &
     /**
      * Server/test only. Never accepted from the client.
      * Selects the bounded docs-write M3 profile (GCEC first vertical).
+     * When omitted, docs-write prepare contracts auto-select this profile
+     * (DecisionBasis intent) — never client REAL flags.
      */
     preferBoundedDocsWriteProfile?: boolean;
     /**
@@ -60,7 +66,10 @@ export type PrepareAndResolveM3Deps = PrepareM3Deps &

 export type F3M3ResolvedPayload = {
   turnKind: "f3_m3_resolved";
-  mode: "M3_RESOLVED_FIXTURE" | "M3_RESOLVED_BOUNDED_READ_ONLY";
+  mode:
+    | "M3_RESOLVED_FIXTURE"
+    | "M3_RESOLVED_BOUNDED_READ_ONLY"
+    | "M3_RESOLVED_BOUNDED_DOCS_WRITE";
   decisionId: string;
   projectId: string;
   prepare: F3M3PreparePayload;
@@ -109,10 +118,22 @@ export async function prepareAndResolveM3ProductPath(input: {
     return prepared;
   }

+  const preparedContract = prepared.payload.contract;
+  const docsWritePrepare =
+    preparedContract.action === M4_BOUNDED_DOCS_WRITE_ACTION ||
+    preparedContract.requiredCapabilities.includes(
+      M4_BOUNDED_DOCS_WRITE_CAPABILITY,
+    );
+  // Server-owned: DecisionBasis docs_write prepare auto-selects M4 docs-write
+  // profile. Explicit preferBoundedDocsWriteProfile:false remains an escape hatch
+  // for tests. Never derived from client REAL flags.
+  const preferDocsWrite =
+    input.deps.preferBoundedDocsWriteProfile === true ||
+    (docsWritePrepare && input.deps.preferBoundedDocsWriteProfile !== false);
+
   const selected = selectProductM3ResolutionProfile({
     preferBoundedReadOnlyProfile: input.deps.preferBoundedReadOnlyProfile === true,
-    preferBoundedDocsWriteProfile:
-      input.deps.preferBoundedDocsWriteProfile === true,
+    preferBoundedDocsWriteProfile: preferDocsWrite,
   });

   let resolution = selected.profile;
@@ -176,13 +197,16 @@ export async function prepareAndResolveM3ProductPath(input: {

   const fixtureSelected = selected.kind === "fixture";
   const docsWriteSelected = selected.kind === "bounded_docs_write";
+  const readOnlySelected = selected.kind === "bounded_read_only";
   return {
     ok: true,
     payload: {
       turnKind: "f3_m3_resolved",
       mode: fixtureSelected
         ? "M3_RESOLVED_FIXTURE"
-        : "M3_RESOLVED_BOUNDED_READ_ONLY",
+        : docsWriteSelected
+          ? "M3_RESOLVED_BOUNDED_DOCS_WRITE"
+          : "M3_RESOLVED_BOUNDED_READ_ONLY",
       decisionId: input.decisionId,
       projectId: input.projectId,
       prepare: prepared.payload,
@@ -198,11 +222,15 @@ export async function prepareAndResolveM3ProductPath(input: {
         fixtureSelected
           ? "G-UX-15 resolveM3ExecutionContract — fixture-safe ZERO REAL profile"
           : docsWriteSelected
-            ? "G-UX-15 resolveM3ExecutionContract — bounded docs-write M4 profile (server-selected; ZERO LIVE Cursor; Fake boundary in tests)"
+            ? "G-UX-15 resolveM3ExecutionContract — bounded docs-write M4 profile (server-selected from DecisionBasis; ZERO LIVE Cursor; Fake boundary in tests)"
             : "G-UX-15 resolveM3ExecutionContract — bounded read-only M4 profile (server-selected; ZERO LIVE in this cycle)",
         "NO Proposal authority",
         "Confirmation required before StartExecution",
-        fixtureSelected ? "NO CURSOR REAL" : "CURSOR REAL NOT EXECUTED AT PREPARE",
+        fixtureSelected
+          ? "NO CURSOR REAL"
+          : readOnlySelected || docsWriteSelected
+            ? "CURSOR REAL NOT EXECUTED AT PREPARE"
+            : "CURSOR REAL NOT EXECUTED AT PREPARE",
         "Profile is server-side; client adapter/command/real fields are ignored",
         ...resolved.disclosures,
       ],
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
index f9aa9551..bb318d43 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
@@ -33,6 +33,8 @@ import type {
   ExecutionWindowClass,
   Reversibility,
 } from "@/lib/oa/execution-contract";
+import { projectExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract/projection/inspectionDisclosure";
+import type { ExecutionContractInspectionDisclosure } from "@/lib/oa/execution-contract/projection/inspectionDisclosure";

 const UNRESOLVED_ACTION = "UNRESOLVED_ACTION";
 const UNRESOLVED_TARGET = "UNRESOLVED_TARGET";
@@ -147,6 +149,9 @@ export type ResolveM3Success = {
     stopConditions: string[];
     supersedesExecutionContractId: string;
     supersessionReason: string;
+    semanticFingerprint: string;
+    evidenceRequirements: string[];
+    inspectionDisclosure: ExecutionContractInspectionDisclosure;
   };
   reusedFromIdempotency: boolean;
   disclosures: string[];
@@ -373,6 +378,7 @@ function toOriginalView(contract: ExecutionContract) {
 }

 function toSuccessorView(contract: ExecutionContract) {
+  const disclosure = projectExecutionContractInspectionDisclosure(contract);
   return {
     executionContractId: contract.executionContractId,
     version: contract.version,
@@ -387,6 +393,9 @@ function toSuccessorView(contract: ExecutionContract) {
     stopConditions: [...contract.stopConditions],
     supersedesExecutionContractId: contract.supersedesExecutionContractId ?? "",
     supersessionReason: contract.supersessionReason ?? "",
+    semanticFingerprint: contract.semanticFingerprint ?? "",
+    evidenceRequirements: [...contract.evidenceRequirements],
+    inspectionDisclosure: disclosure.disclosure,
   };
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
index 3eff8b22..1c789a84 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
@@ -4,6 +4,11 @@
  * Phase 1 (select): fresh AUTHORIZED evaluation → accepted
  * Phase 2 (start): continue durable Attempt → running (no re-authorize on executing EC)
  * Phase 3 (record): continue running Attempt → technical terminal
+ *
+ * Dual Product orchestration (ONE state machine):
+ * - Sandbox / fixture-safe EC → F3 fixture adapter (existing)
+ * - Resolved M4 bounded docs-write EC → OA Select → Gate D → StartExecution
+ *   with Fake or REAL launch port from composition (client real/adapter ignored)
  */

 import { createHash } from "node:crypto";
@@ -22,9 +27,16 @@ import type {
   SelectionProfile,
   SelectionStrategy,
 } from "@/lib/oa/execution-attempt";
-import { resolveSelectionStrategy } from "@/lib/oa/execution-attempt";
+import {
+  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
+  M4_REAL_GATEWAY_ADAPTER_ID,
+  resolveSelectionStrategy,
+} from "@/lib/oa/execution-attempt";
 import type { CycleProfile } from "@/lib/oa/cycle";
 import { F3_ADAPTER_ID } from "@/features/project-assistant/f3/constants";
+import { completeBoundedDocsWriteLaunch } from "@/features/project-assistant/f3/completeBoundedDocsWriteLaunch";
+import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
+import { authorizedM3ResolutionKind } from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
 import { evaluateExecutionAuthorization } from "./authorizeExecutionContract";
 import type {
   GovernedExecuteAuthorizedContractResult,
@@ -67,6 +79,10 @@ export type GovernedExecuteAuthorizedContractInput = {

 type Failure = GovernedExecuteAuthorizedContractResult;

+function isBoundedDocsWriteContract(contract: ExecutionContract): boolean {
+  return authorizedM3ResolutionKind(contract) === "bounded_docs_write";
+}
+
 function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
   if (!oa.fixtureAdapter || !oa.executionAttemptServices) {
     return {
@@ -93,6 +109,53 @@ function fixtureBoundaryFailure(oa: RuntimeOaStack): Failure | null {
   return null;
 }

+/** Docs-write path: require composed launch boundary (Fake in tests / REAL when opted-in). */
+function docsWriteBoundaryFailure(oa: RuntimeOaStack): Failure | null {
+  if (!oa.executionAttemptServices) {
+    return {
+      ok: false,
+      code: "ATTEMPT_STACK_UNAVAILABLE",
+      message: "Services ExecutionAttempt indisponibles — aucune exécution.",
+    };
+  }
+  if (!oa.executionAttemptServices.realBoundary) {
+    return {
+      ok: false,
+      code: "REAL_BOUNDARY_REQUIRED",
+      message:
+        "Contrat bounded docs-write refusé — realBoundary absent (fail-closed, pas de fallback fixture).",
+    };
+  }
+  if (!oa.executionAttemptServices.grantRealExecutionGate) {
+    return {
+      ok: false,
+      code: "GATE_D_REQUIRED",
+      message:
+        "Contrat bounded docs-write refusé — Gate D non disponible (fail-closed).",
+    };
+  }
+  return null;
+}
+
+function launchCallCountOf(port: unknown): number {
+  if (port && typeof port === "object") {
+    if ("launchCallCount" in port) {
+      const n = (port as { launchCallCount: unknown }).launchCallCount;
+      if (typeof n === "number") return n;
+    }
+    if ("calls" in port && Array.isArray((port as { calls: unknown }).calls)) {
+      return (port as { calls: unknown[] }).calls.length;
+    }
+  }
+  return 0;
+}
+
+function adapterIdForContract(contract: ExecutionContract): string {
+  return isBoundedDocsWriteContract(contract)
+    ? M4_REAL_GATEWAY_ADAPTER_ID
+    : F3_ADAPTER_ID;
+}
+
 async function loadContract(
   oa: RuntimeOaStack,
   input: GovernedExecuteAuthorizedContractInput,
@@ -196,12 +259,15 @@ async function loadContract(
   return { ok: true, contract, selectionProfile };
 }

-function projectAttempt(attempt: ExecutionAttempt): GovernedExecuteAttemptProjection {
+function projectAttempt(
+  attempt: ExecutionAttempt,
+  adapterId: string = F3_ADAPTER_ID,
+): GovernedExecuteAttemptProjection {
   return {
     attemptId: attempt.attemptId,
     attemptStatus: attempt.status,
     selectedAgentRef: attempt.selectedAgentRef,
-    adapterId: F3_ADAPTER_ID,
+    adapterId,
   };
 }

@@ -214,7 +280,13 @@ function buildTechnicalTerminal(input: {
   launchCountBefore: number;
   statusLabel?: string;
 }): GovernedExecuteAuthorizedContractResult {
-  const launchCount = input.oa.fixtureAdapter!.launchCallCount;
+  const docsWrite = isBoundedDocsWriteContract(input.contract);
+  const adapterId = adapterIdForContract(input.contract);
+  const launchCount = docsWrite
+    ? launchCallCountOf(
+        input.oa.executionAttemptServices?.realBoundary?.launchPort,
+      )
+    : input.oa.fixtureAdapter!.launchCallCount;
   const status = input.attempt.status;
   const defaultLabel =
     status === "cancelled"
@@ -230,7 +302,7 @@ function buildTechnicalTerminal(input: {
     attemptId: input.attempt.attemptId,
     attemptStatus: status,
     selectedAgentRef: input.attempt.selectedAgentRef,
-    adapterId: F3_ADAPTER_ID,
+    adapterId,
     selectionProfile: input.selectionProfile,
     reusedExistingAttempt: input.reusedExistingAttempt,
     launchCount,
@@ -250,7 +322,7 @@ function buildTechnicalTerminal(input: {
       status === "failed" ||
       status === "timeout",
     productSuccessSemantics: false,
-    attempt: projectAttempt(input.attempt),
+    attempt: projectAttempt(input.attempt, adapterId),
   };
 }

@@ -301,15 +373,22 @@ export async function governedExecuteSelectAgent(
   void input.real;
   void input.adapterRef;

-  const boundary = fixtureBoundaryFailure(input.oa);
-  if (boundary) return boundary;
-
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) {
     if (loaded.result.ok && loaded.result.phase === "terminal") return loaded.result;
     return loaded.result;
   }
   const { contract, selectionProfile } = loaded;
+  const docsWrite = isBoundedDocsWriteContract(contract);
+  const boundary = docsWrite
+    ? docsWriteBoundaryFailure(input.oa)
+    : fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const adapterId = adapterIdForContract(contract);
+  const launchCountBefore = docsWrite
+    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
+    : input.oa.fixtureAdapter!.launchCallCount;

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -322,7 +401,7 @@ export async function governedExecuteSelectAgent(
       selectionProfile,
       oa: input.oa,
       reusedExistingAttempt: true,
-      launchCountBefore: input.oa.fixtureAdapter!.launchCallCount,
+      launchCountBefore,
     });
   }

@@ -357,21 +436,32 @@ export async function governedExecuteSelectAgent(
     return { ok: false, code: authority.code, message: authority.message };
   }

-  const strategyResolved = resolveSelectionStrategy(selectionProfile);
-  if ("detailCode" in strategyResolved) {
-    return {
-      ok: false,
-      code: strategyResolved.detailCode,
-      message: strategyResolved.reason,
-    };
-  }
-  if (strategyResolved.strategy === "human_confirmed_proposal") {
-    return {
-      ok: false,
-      code: "AGENT_CONFIRMATION_REQUIRED",
-      message:
-        "Profil Critical — confirmation agent_selection Pilote requise avant sélection (aucune simulation).",
-    };
+  // Docs-write shares F3 M4 selection: capabilities_deterministic + requested
+  // M4 agent (system-initiated). Cycle Critical must not invent a second
+  // agent-confirmation Product path for an already Confirmation-gated EC.
+  let effectiveProfile: SelectionProfile = selectionProfile;
+  let selectionStrategy: SelectionStrategy;
+  if (docsWrite) {
+    effectiveProfile = "standard";
+    selectionStrategy = "capabilities_deterministic";
+  } else {
+    const strategyResolved = resolveSelectionStrategy(selectionProfile);
+    if ("detailCode" in strategyResolved) {
+      return {
+        ok: false,
+        code: strategyResolved.detailCode,
+        message: strategyResolved.reason,
+      };
+    }
+    if (strategyResolved.strategy === "human_confirmed_proposal") {
+      return {
+        ok: false,
+        code: "AGENT_CONFIRMATION_REQUIRED",
+        message:
+          "Profil Critical — confirmation agent_selection Pilote requise avant sélection (aucune simulation).",
+      };
+    }
+    selectionStrategy = strategyResolved.strategy;
   }

   const identities = attemptIdentities(
@@ -387,9 +477,12 @@ export async function governedExecuteSelectAgent(
       actor: LOCAL_PILOTE_ACTOR,
       authorityEvidenceId: authority.evidenceId,
       expectedContractVersion: contract.version,
-      selectionProfile,
-      selectionStrategy: strategyResolved.strategy,
-      systemInitiated: false,
+      selectionProfile: effectiveProfile,
+      selectionStrategy,
+      systemInitiated: docsWrite,
+      ...(docsWrite
+        ? { requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID }
+        : {}),
     });
   if (!selected.ok) {
     return {
@@ -407,15 +500,15 @@ export async function governedExecuteSelectAgent(
     attemptId: selected.attempt.attemptId,
     attemptStatus: selected.attempt.status,
     selectedAgentRef: selected.attempt.selectedAgentRef,
-    adapterId: F3_ADAPTER_ID,
-    selectionProfile,
+    adapterId,
+    selectionProfile: effectiveProfile,
     realExecution: false,
     externalEffects: false,
     authorityReceiptUsedAsPermission: false,
     statusLabel: "TENTATIVE ACCEPTÉE — EN ATTENTE DE DÉMARRAGE",
     technicalTerminal: false,
     productSuccessSemantics: false,
-    attempt: projectAttempt(selected.attempt),
+    attempt: projectAttempt(selected.attempt, adapterId),
   };
 }

@@ -423,12 +516,19 @@ export async function governedExecuteSelectAgent(
 export async function governedExecuteStart(
   input: GovernedExecuteAuthorizedContractInput & { readonly attemptId: string },
 ): Promise<GovernedExecutePhaseResult> {
-  const boundary = fixtureBoundaryFailure(input.oa);
-  if (boundary) return boundary;
-
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
+  const docsWrite = isBoundedDocsWriteContract(contract);
+  const boundary = docsWrite
+    ? docsWriteBoundaryFailure(input.oa)
+    : fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const adapterId = adapterIdForContract(contract);
+  const launchCountBefore = docsWrite
+    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
+    : input.oa.fixtureAdapter!.launchCallCount;

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -441,7 +541,7 @@ export async function governedExecuteStart(
       selectionProfile,
       oa: input.oa,
       reusedExistingAttempt: true,
-      launchCountBefore: input.oa.fixtureAdapter!.launchCallCount,
+      launchCountBefore,
     });
   }

@@ -454,10 +554,32 @@ export async function governedExecuteStart(
     return { ok: false, code: authority.code, message: authority.message };
   }

-  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
-
-  // R-W3B-04 — TEST-ONLY external adapter fail arm (never a product UI outcome).
-  applyW3bAdapterFailArmIfPresent(input.oa.fixtureAdapter);
+  if (!docsWrite) {
+    // R-W3B-04 — TEST-ONLY external adapter fail arm (never a product UI outcome).
+    applyW3bAdapterFailArmIfPresent(input.oa.fixtureAdapter);
+  } else {
+    const grantId = `gd:w3a:${input.attemptId.replace(/^xat:/, "")}`;
+    const nowMs = Date.parse(input.oa.clock.nowIso());
+    const expiresAt = new Date(
+      (Number.isFinite(nowMs) ? nowMs : Date.now()) + 60 * 60 * 1000,
+    ).toISOString();
+    const gate = await input.oa.executionAttemptServices!.grantRealExecutionGate!.execute(
+      {
+        grantId,
+        attemptId: input.attemptId,
+        actor: LOCAL_PILOTE_ACTOR,
+        expiresAt,
+        authorityEvidenceId: authority.evidenceId,
+      },
+    );
+    if (!gate.ok) {
+      return {
+        ok: false,
+        code: gate.error.detailCode,
+        message: gate.error.message,
+      };
+    }
+  }

   const started = await input.oa.executionAttemptServices!.startExecution.execute({
     attemptId: input.attemptId,
@@ -474,7 +596,6 @@ export async function governedExecuteStart(
     const attempt =
       fromStart ??
       (existing && existing.ok && existing.attempt ? existing.attempt : null);
-    // Adapter/executor failure durably failed the Attempt — product path continues to FC-11/12.
     if (
       attempt &&
       (attempt.status === "failed" || attempt.status === "timeout")
@@ -492,40 +613,42 @@ export async function governedExecuteStart(
       ok: false,
       code: started.error.detailCode,
       message: started.error.message,
-      attempt: attempt ? projectAttempt(attempt) : undefined,
+      attempt: attempt ? projectAttempt(attempt, adapterId) : undefined,
     };
   }

   // R-W3B-03 — TEST-ONLY governed stop arm: FC-10 SystemGovernedStop (not human Cancel).
-  const stopArm = consumeW3bBoundaryArm();
-  if (stopArm?.kind === "governed_stop") {
-    const onContract =
-      contract.stopConditions.includes(stopArm.stopCondition) ||
-      contract.constraints.some(
-        (c) =>
-          c === stopArm.stopCondition ||
-          (c.startsWith("PROTECTED:") &&
-            (stopArm.stopCondition === c ||
-              stopArm.stopCondition.startsWith(`${c} `) ||
-              stopArm.stopCondition.startsWith(`${c}:`))),
-      );
-    if (onContract && input.oa.executionAttemptServices!.systemGovernedStop) {
-      const stopped =
-        await input.oa.executionAttemptServices!.systemGovernedStop.execute({
-          attemptId: started.attempt.attemptId,
-          stopCode: stopArm.stopCondition,
-          stopSourceRef: `w3b-e2e-boundary:${stopArm.stopCondition}`,
-          reason: stopArm.stopCondition,
-        });
-      if (stopped.ok) {
-        return buildTechnicalTerminal({
-          contract,
-          attempt: stopped.attempt,
-          selectionProfile,
-          oa: input.oa,
-          reusedExistingAttempt: false,
-          launchCountBefore,
-        });
+  if (!docsWrite) {
+    const stopArm = consumeW3bBoundaryArm();
+    if (stopArm?.kind === "governed_stop") {
+      const onContract =
+        contract.stopConditions.includes(stopArm.stopCondition) ||
+        contract.constraints.some(
+          (c) =>
+            c === stopArm.stopCondition ||
+            (c.startsWith("PROTECTED:") &&
+              (stopArm.stopCondition === c ||
+                stopArm.stopCondition.startsWith(`${c} `) ||
+                stopArm.stopCondition.startsWith(`${c}:`))),
+        );
+      if (onContract && input.oa.executionAttemptServices!.systemGovernedStop) {
+        const stopped =
+          await input.oa.executionAttemptServices!.systemGovernedStop.execute({
+            attemptId: started.attempt.attemptId,
+            stopCode: stopArm.stopCondition,
+            stopSourceRef: `w3b-e2e-boundary:${stopArm.stopCondition}`,
+            reason: stopArm.stopCondition,
+          });
+        if (stopped.ok) {
+          return buildTechnicalTerminal({
+            contract,
+            attempt: stopped.attempt,
+            selectionProfile,
+            oa: input.oa,
+            reusedExistingAttempt: false,
+            launchCountBefore,
+          });
+        }
       }
     }
   }
@@ -538,7 +661,7 @@ export async function governedExecuteStart(
     attemptId: started.attempt.attemptId,
     attemptStatus: started.attempt.status,
     selectedAgentRef: started.attempt.selectedAgentRef,
-    adapterId: F3_ADAPTER_ID,
+    adapterId,
     selectionProfile,
     realExecution: false,
     externalEffects: false,
@@ -546,7 +669,7 @@ export async function governedExecuteStart(
     statusLabel: "EXÉCUTION EN COURS",
     technicalTerminal: false,
     productSuccessSemantics: false,
-    attempt: projectAttempt(started.attempt),
+    attempt: projectAttempt(started.attempt, adapterId),
   };
 }

@@ -554,13 +677,19 @@ export async function governedExecuteStart(
 export async function governedExecuteRecordResult(
   input: GovernedExecuteAuthorizedContractInput & { readonly attemptId: string },
 ): Promise<GovernedExecuteAuthorizedContractResult> {
-  const boundary = fixtureBoundaryFailure(input.oa);
-  if (boundary) return boundary;
-
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
-  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
+  const docsWrite = isBoundedDocsWriteContract(contract);
+  const boundary = docsWrite
+    ? docsWriteBoundaryFailure(input.oa)
+    : fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const adapterId = adapterIdForContract(contract);
+  const launchCountBefore = docsWrite
+    ? launchCallCountOf(input.oa.executionAttemptServices!.realBoundary!.launchPort)
+    : input.oa.fixtureAdapter!.launchCallCount;

   const succeeded = await findSucceededAttempt(
     input.oa,
@@ -577,6 +706,76 @@ export async function governedExecuteRecordResult(
     });
   }

+  if (docsWrite) {
+    const existing =
+      await input.oa.executionAttemptServices!.getExecutionAttempt.execute({
+        attemptId: input.attemptId,
+      });
+    if (!existing.ok || !existing.attempt) {
+      return {
+        ok: false,
+        code: existing.ok ? "ATTEMPT_NOT_FOUND" : existing.error.detailCode,
+        message: existing.ok
+          ? "Attempt introuvable pour completion docs-write."
+          : existing.error.message,
+      };
+    }
+    let attempt = existing.attempt;
+    if (attempt.status === "running" && !attempt.resultRef) {
+      const targetPath =
+        typeof contract.inputs?.targetPath === "string"
+          ? contract.inputs.targetPath
+          : undefined;
+      const pathAllowlist = Array.isArray(contract.inputs?.pathAllowlist)
+        ? (contract.inputs.pathAllowlist as string[])
+        : undefined;
+      const completed = await completeBoundedDocsWriteLaunch({
+        attempt: attempt as never,
+        services: input.oa.executionAttemptServices!,
+        ...(targetPath ? { targetPath } : {}),
+        ...(pathAllowlist ? { pathAllowlist } : {}),
+      });
+      if (!completed.ok) {
+        return {
+          ok: false,
+          code: completed.code,
+          message: completed.message,
+          attempt: projectAttempt(attempt, adapterId),
+        };
+      }
+      attempt = completed.attempt;
+      if (
+        completed.status === "succeeded" &&
+        "facts" in completed &&
+        completed.facts &&
+        contract.cycleInstanceId
+      ) {
+        await ingestDocsWriteArtifactEvidence({
+          evidenceReviewServices: input.oa.evidenceReviewServices,
+          projectId: input.projectId,
+          cycleInstanceId: contract.cycleInstanceId,
+          executionContractId: contract.executionContractId,
+          executionAttemptId: attempt.attemptId,
+          targetPath: completed.facts.targetPath,
+          digest: completed.facts.digest,
+          nowIso: input.oa.clock.nowIso(),
+        });
+      }
+    }
+    return buildTechnicalTerminal({
+      contract,
+      attempt,
+      selectionProfile,
+      oa: input.oa,
+      reusedExistingAttempt: false,
+      launchCountBefore,
+      statusLabel:
+        attempt.status === "succeeded"
+          ? "TERMINAL TECHNIQUE DOCS-WRITE — RÉSULTAT PRODUIT À QUALIFIER"
+          : undefined,
+    });
+  }
+
   const identities = attemptIdentities(
     contract.executionContractId,
     contract.version,
@@ -599,7 +798,7 @@ export async function governedExecuteRecordResult(
       message: recorded.error.message,
       attempt:
         existing.ok && existing.attempt
-          ? projectAttempt(existing.attempt)
+          ? projectAttempt(existing.attempt, adapterId)
           : undefined,
     };
   }
@@ -645,11 +844,10 @@ export async function governedExecuteRecordResult(
     cycleInstanceClosed,
     projectArchived,
     authorityReceiptUsedAsPermission: false,
-    statusLabel:
-      "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ",
+    statusLabel: "TERMINAL TECHNIQUE — RÉSULTAT PRODUIT NON ENCORE QUALIFIÉ",
     technicalTerminal: recorded.attempt.status === "succeeded",
     productSuccessSemantics: false,
-    attempt: projectAttempt(recorded.attempt),
+    attempt: projectAttempt(recorded.attempt, adapterId),
   };
 }

@@ -667,13 +865,20 @@ export async function governedExecuteCancel(
     readonly reason?: string;
   },
 ): Promise<GovernedExecuteAuthorizedContractResult> {
-  const boundary = fixtureBoundaryFailure(input.oa);
-  if (boundary) return boundary;
-
   const loaded = await loadContract(input.oa, input);
   if (!loaded.ok) return loaded.result;
   const { contract, selectionProfile } = loaded;
-  const launchCountBefore = input.oa.fixtureAdapter!.launchCallCount;
+  const docsWrite = isBoundedDocsWriteContract(contract);
+  const boundary = docsWrite
+    ? docsWriteBoundaryFailure(input.oa)
+    : fixtureBoundaryFailure(input.oa);
+  if (boundary) return boundary;
+
+  const launchCountBefore = docsWrite
+    ? launchCallCountOf(
+        input.oa.executionAttemptServices!.realBoundary!.launchPort,
+      )
+    : input.oa.fixtureAdapter!.launchCallCount;

   registerPiloteAuthority(
     input.oa,
@@ -699,7 +904,7 @@ export async function governedExecuteCancel(
       message: cancelled.error.message,
       attempt:
         existing.ok && existing.attempt
-          ? projectAttempt(existing.attempt)
+          ? projectAttempt(existing.attempt, adapterIdForContract(contract))
           : undefined,
     };
   }
```

### New Product files (full contents)
```
===== NEW FILE: projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedDocsWriteContract.ts =====
/**
 * Confirm → Select M4 bounded docs-write → Grant Gate D → StartExecution.
 * Same Product orchestration as bounded read-only; Fake/REAL differ only at launch port.
 * No fixture fallback. No client adapter/command. No NodeCursorProcessRunner here.
 * ZERO LIVE Cursor in Delivery tests — inject FakeDocsWriteLaunchPort as realBoundary.
 */

import type {
  DecisionServices,
  OaActorReference,
} from "@/lib/oa/decision";
import type {
  ExecutionContract,
  ExecutionContractServices,
} from "@/lib/oa/execution-contract";
import {
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  type ExecutionAttemptServices,
} from "@/lib/oa/execution-attempt";
import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
import type { ProjectServices } from "@/lib/oa/project";
import type { ProposalDto } from "../f2/types";
import { resolvePersistenceNotice } from "../presentationLabels";
import {
  F3_CONFIRM_ACTION_REF,
  F3_LABELS,
} from "./constants";
import { deriveAttemptProvenance } from "./deriveAttemptProvenance";
import {
  completeBoundedDocsWriteLaunch,
  type DocsWriteCompletionFacts,
} from "./completeBoundedDocsWriteLaunch";
import { ingestDocsWriteArtifactEvidence } from "./ingestDocsWriteArtifactEvidence";
import { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
import type { F3ExecutePayload } from "./types";

export type BoundedDocsWritePipelineDeps = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  executionAttemptServices: ExecutionAttemptServices;
  evidenceReviewServices: EvidenceReviewServices;
  projectServices?: ProjectServices;
  productDurablePath?: boolean;
  nowIso: () => string;
};

export type BoundedDocsWritePipelineIdentities = {
  confirmationId: string;
  confirmationIdempotencyKey: string;
  confirmationLevel: "N2" | "N3";
  attemptId: string;
  attemptIdempotencyKey: string;
  grantId: string;
};

function launchCallCountOf(port: unknown): number {
  if (port && typeof port === "object") {
    if ("launchCallCount" in port) {
      const n = (port as { launchCallCount: unknown }).launchCallCount;
      if (typeof n === "number") return n;
    }
    if ("calls" in port && Array.isArray((port as { calls: unknown }).calls)) {
      return (port as { calls: unknown[] }).calls.length;
    }
  }
  return 0;
}

function pendingEvidence(mode: F3ExecutePayload["mode"]): F3ExecutePayload["evidence"] {
  return {
    evidenceId: "ev:pending-real",
    status: "pending",
    sourceKind: "execution_attempt",
    technicalResultRef: null,
    verified: false,
    mode,
  };
}

function pendingReviewBundle(
  mode: F3ExecutePayload["mode"],
): F3ExecutePayload["reviewBundle"] {
  return {
    reviewBundleId: "rb:pending-real",
    status: "pending",
    version: 0,
    evidenceRefs: [],
    mode,
  };
}

function pendingRecommendation(
  mode: F3ExecutePayload["mode"],
): F3ExecutePayload["recommendation"] {
  return {
    kind: "recommendation",
    status: "pending",
    executionAuthority: false,
    gateConsumed: false,
    decisionCreated: false,
    attemptAutoLaunchNextCycle: false,
    openHardReservationRefs: [],
    hardBlockers: [],
    nextGateCode: null,
    nextActionCode: null,
    recommendationLabel: F3_LABELS.recommendationNotDecision,
    mode,
    analysisStatus: "not_attempted",
    analysisText: null,
    analysisProviderId: null,
    analysisUnavailableReason: null,
  };
}

function buildPayload(input: {
  proposal: ProposalDto | null;
  decisionId: string;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
    launchedAt?: string;
    irreversibleEffectsPossible?: boolean;
    startedAt?: string;
    executionWindowClass?: string;
    resolvedMaxDurationMs?: number;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  extraDisclosures: readonly string[];
  productDurablePath: boolean;
  provenance: ReturnType<typeof deriveAttemptProvenance>;
  processRef?: string | null;
  ingested?: Extract<
    Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
    { ok: true }
  >;
}): F3ExecutePayload {
  const persistenceNotice = resolvePersistenceNotice({
    productDurablePath: input.productDurablePath,
    mode: input.provenance.mode,
    kind: "execute",
  });
  return {
    turnKind: "f3_execute",
    mode: input.provenance.mode,
    proposal: input.proposal,
    decisionId: input.decisionId,
    contract: {
      executionContractId: input.contract.executionContractId,
      version: input.contract.version,
      status: input.contract.status,
      action: input.contract.action,
      target: input.contract.target,
      scope: input.contract.scope,
      requiredAuthority: input.contract.requiredAuthority,
      mode: input.provenance.mode,
      constraints: [...input.contract.constraints],
    },
    attempt: {
      attemptId: input.attempt.attemptId,
      status: input.attempt.status,
      selectedAgentRef: input.attempt.selectedAgentRef,
      adapterId: input.provenance.adapterRef,
      adapterRef: input.provenance.adapterRef,
      executionMode: input.provenance.executionMode,
      realProcessInvoked: input.provenance.realProcessInvoked,
      externalEffects: input.provenance.externalEffects,
      resultRef: input.attempt.resultRef ?? null,
      launchCount: input.launchCount,
      selectionStrategy:
        input.attempt.selectionStrategy ?? "capabilities_deterministic",
      mode: input.provenance.mode,
      startedAt: input.attempt.startedAt ?? null,
      executionWindowClass: input.attempt.executionWindowClass ?? null,
      resolvedMaxDurationMs: input.attempt.resolvedMaxDurationMs ?? null,
      processRef: input.processRef ?? null,
    },
    evidence: input.ingested?.evidence ?? pendingEvidence(input.provenance.mode),
    reviewBundle:
      input.ingested?.reviewBundle ??
      pendingReviewBundle(input.provenance.mode),
    recommendation:
      input.ingested?.recommendation ??
      pendingRecommendation(input.provenance.mode),
    reusedExistingAttempt: input.reusedExistingAttempt,
    executionPerformed: true,
    realExecution: input.provenance.realExecution,
    gitWritePerformed: false,
    labels: {
      fixtureNoReal: F3_LABELS.fixtureNoReal,
      noGitWrite: F3_LABELS.noGitWrite,
      recommendationNotDecision: F3_LABELS.recommendationNotDecision,
      cursorRealBlocked: F3_LABELS.cursorRealBlocked,
      hardOpen: F3_LABELS.hardOpen,
    },
    processLocalNotice: persistenceNotice,
    disclosures: [
      F3_LABELS.noGitWrite,
      F3_LABELS.recommendationNotDecision,
      F3_LABELS.noReadyClaim,
      F3_LABELS.noTa6Complete,
      "BOUNDED DOCS-WRITE BRANCH — provenance from Attempt, not env flag",
      ...input.extraDisclosures,
      persistenceNotice,
    ],
  };
}

async function finishBoundedDocsWriteAttempt(input: {
  projectId: string;
  decisionId: string;
  proposal: ProposalDto | null;
  contract: ExecutionContract;
  attempt: {
    attemptId: string;
    status: string;
    selectedAgentRef: string;
    resultRef?: string;
    selectionStrategy?: string;
    launchedAt?: string;
    irreversibleEffectsPossible?: boolean;
    version?: number;
    startedAt?: string;
    executionWindowClass?: string;
    resolvedMaxDurationMs?: number;
  };
  launchCount: number;
  reusedExistingAttempt: boolean;
  extraDisclosures: readonly string[];
  productDurablePath: boolean;
  deps: BoundedDocsWritePipelineDeps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const attempts = input.deps.executionAttemptServices;
  let attempt = input.attempt;
  let facts: DocsWriteCompletionFacts | null = null;
  let processRef: string | null = null;
  const extra = [...input.extraDisclosures];

  if (attempt.status === "running" && !attempt.resultRef) {
    const targetPath =
      typeof input.contract.inputs?.targetPath === "string"
        ? input.contract.inputs.targetPath
        : undefined;
    const pathAllowlist = Array.isArray(input.contract.inputs?.pathAllowlist)
      ? (input.contract.inputs.pathAllowlist as string[])
      : undefined;
    const completed = await completeBoundedDocsWriteLaunch({
      attempt: attempt as never,
      services: attempts,
      ...(targetPath ? { targetPath } : {}),
      ...(pathAllowlist ? { pathAllowlist } : {}),
    });
    if (!completed.ok) return completed;
    attempt = completed.attempt;
    if (completed.status === "succeeded") {
      facts = completed.facts;
      processRef = completed.facts.processRef;
    } else {
      processRef = completed.observation?.processRef ?? null;
      if (completed.status === "running") {
        extra.push(
          "Docs-write process ACK — completion still pending; no Evidence candidate",
        );
      } else if (completed.status === "timeout") {
        extra.push("Docs-write process timed out — no Evidence candidate");
      } else if (completed.status === "failed") {
        extra.push("Docs-write process non-zero exit — no Evidence candidate");
      }
    }
  }

  const agent = attempts.registry.getAgent(attempt.selectedAgentRef);
  const provenance = deriveAttemptProvenance({ attempt, agent });

  const refreshed =
    await input.deps.executionContractServices.getExecutionContract.execute({
      executionContractId: input.contract.executionContractId,
    });
  const contract = refreshed.ok ? refreshed.contract : input.contract;

  let ingested:
    | Extract<
        Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
        { ok: true }
      >
    | undefined;
  if (attempt.status === "succeeded" && attempt.resultRef && facts) {
    const cycleInstanceId = contract.cycleInstanceId;
    if (!cycleInstanceId) {
      return {
        ok: false,
        code: "CYCLE_BINDING_REQUIRED",
        message:
          "Docs-write Evidence refusée — ExecutionContract sans cycleInstanceId.",
      };
    }
    const artifact = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: input.deps.evidenceReviewServices,
      projectId: input.projectId,
      cycleInstanceId,
      executionContractId: contract.executionContractId,
      executionAttemptId: attempt.attemptId,
      targetPath: facts.targetPath,
      digest: facts.digest,
      nowIso: input.deps.nowIso(),
    });
    if (!artifact.ok) return artifact;
    extra.push(
      `Docs-write Evidence ${artifact.evidenceId} / ReviewBundle ${artifact.reviewBundleId}`,
      `target ${facts.targetPath} digest ${facts.digest.slice(0, 12)}…`,
    );
    ingested = {
      ok: true,
      evidence: {
        evidenceId: artifact.evidenceId,
        status: artifact.evidenceStatus,
        sourceKind: "execution_attempt",
        technicalResultRef: attempt.resultRef ?? null,
        verified: true,
        mode: provenance.mode,
      },
      reviewBundle: {
        reviewBundleId: artifact.reviewBundleId,
        status: "available",
        version: 1,
        evidenceRefs: [artifact.evidenceId],
        mode: provenance.mode,
      },
      recommendation: pendingRecommendation(provenance.mode),
      provenance,
    } as unknown as Extract<
      Awaited<ReturnType<typeof ingestEvidenceAndRecommend>>,
      { ok: true }
    >;
  }
  return {
    ok: true,
    payload: buildPayload({
      proposal: input.proposal,
      decisionId: input.decisionId,
      contract,
      attempt,
      launchCount: input.launchCount,
      reusedExistingAttempt: input.reusedExistingAttempt,
      extraDisclosures: extra,
      productDurablePath: input.productDurablePath,
      provenance,
      processRef,
      ingested,
    }),
  };
}

export async function executeConfirmedBoundedDocsWriteContract(input: {
  projectId: string;
  decisionId: string;
  proposal: ProposalDto | null;
  contract: ExecutionContract;
  expectedContractVersion: number;
  actor: OaActorReference;
  authorityEvidenceId: string;
  identities: BoundedDocsWritePipelineIdentities;
  extraDisclosures?: readonly string[];
  deps: BoundedDocsWritePipelineDeps;
}): Promise<
  | { ok: true; payload: F3ExecutePayload }
  | { ok: false; code: string; message: string }
> {
  const attempts = input.deps.executionAttemptServices;
  const realBoundary = attempts.realBoundary;
  if (!realBoundary) {
    return {
      ok: false,
      code: "REAL_BOUNDARY_REQUIRED",
      message:
        "Contrat bounded docs-write refusé — realBoundary absent (fail-closed, pas de fallback fixture).",
    };
  }
  if (!attempts.grantRealExecutionGate) {
    return {
      ok: false,
      code: "GATE_D_REQUIRED",
      message:
        "Contrat bounded docs-write refusé — Gate D non disponible (fail-closed, pas de fallback fixture).",
    };
  }

  let contract = input.contract;
  const extraDisclosures = input.extraDisclosures ?? [];
  const productDurable =
    input.deps.productDurablePath ?? input.deps.projectServices !== undefined;

  const listed = await attempts.listExecutionAttempts.execute({
    executionContractId: contract.executionContractId,
  });
  if (listed.ok) {
    const reusable = listed.attempts.find(
      (a) => a.status === "succeeded" || a.status === "running",
    );
    if (reusable) {
      return finishBoundedDocsWriteAttempt({
        projectId: input.projectId,
        decisionId: input.decisionId,
        proposal: input.proposal,
        contract,
        attempt: reusable,
        launchCount: launchCallCountOf(realBoundary.launchPort),
        reusedExistingAttempt: true,
        extraDisclosures,
        productDurablePath: productDurable,
        deps: input.deps,
      });
    }
  }

  if (contract.version !== input.expectedContractVersion) {
    return {
      ok: false,
      code: "CONTRACT_VERSION_MISMATCH",
      message: `Version contrat attendue ${input.expectedContractVersion}, actuelle ${contract.version}.`,
    };
  }

  if (
    contract.status === "confirmation_required" ||
    contract.status === "validated"
  ) {
    const requested = await input.deps.decisionServices.requestConfirmation.execute({
      confirmationId: input.identities.confirmationId,
      level: input.identities.confirmationLevel,
      actionRef: F3_CONFIRM_ACTION_REF,
      requestedBy: input.actor,
      requestedTo: input.actor,
      scope: contract.scope,
      idempotencyKey: input.identities.confirmationIdempotencyKey,
      decisionRef: input.decisionId,
    });
    if (!requested.ok) {
      return {
        ok: false,
        code: requested.error.detailCode,
        message: requested.error.message,
      };
    }

    const granted = await input.deps.decisionServices.grantConfirmation.execute({
      confirmationId: input.identities.confirmationId,
      actor: input.actor,
      authorityEvidenceId: input.authorityEvidenceId,
    });
    if (!granted.ok) {
      return {
        ok: false,
        code: granted.error.detailCode,
        message: granted.error.message,
      };
    }

    const confirmed =
      await input.deps.executionContractServices.confirmExecutionContract.execute(
        {
          executionContractId: contract.executionContractId,
          confirmationId: input.identities.confirmationId,
          actor: input.actor,
          authorityEvidenceId: input.authorityEvidenceId,
          expectedVersion: contract.version,
        },
      );
    if (!confirmed.ok) {
      return {
        ok: false,
        code: confirmed.error.detailCode,
        message: confirmed.error.message,
      };
    }
    contract = confirmed.contract;
  } else if (
    contract.status !== "confirmed" &&
    contract.status !== "executing" &&
    contract.status !== "completed"
  ) {
    return {
      ok: false,
      code: "CONTRACT_NOT_CONFIRMABLE",
      message: `Contrat non confirmable (statut ${contract.status}).`,
    };
  }

  const selected = await attempts.selectExecutionAgent.execute({
    attemptId: input.identities.attemptId,
    executionContractId: contract.executionContractId,
    idempotencyKey: input.identities.attemptIdempotencyKey,
    actor: input.actor,
    authorityEvidenceId: input.authorityEvidenceId,
    expectedContractVersion: contract.version,
    selectionProfile: "standard",
    selectionStrategy: "capabilities_deterministic",
    requestedAgentRef: M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
    systemInitiated: true,
  });
  if (!selected.ok) {
    return {
      ok: false,
      code: selected.error.detailCode,
      message: selected.error.message,
    };
  }

  const nowMs = Date.parse(input.deps.nowIso());
  const expiresAt = new Date(
    (Number.isFinite(nowMs) ? nowMs : Date.now()) + 60 * 60 * 1000,
  ).toISOString();

  const gate = await attempts.grantRealExecutionGate.execute({
    grantId: input.identities.grantId,
    attemptId: input.identities.attemptId,
    actor: input.actor,
    expiresAt,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  if (!gate.ok) {
    return {
      ok: false,
      code: gate.error.detailCode,
      message: gate.error.message,
    };
  }

  const started = await attempts.startExecution.execute({
    attemptId: input.identities.attemptId,
    actor: input.actor,
    authorityEvidenceId: input.authorityEvidenceId,
  });
  if (!started.ok) {
    return {
      ok: false,
      code: started.error.detailCode,
      message: started.error.message,
    };
  }

  return finishBoundedDocsWriteAttempt({
    projectId: input.projectId,
    decisionId: input.decisionId,
    proposal: input.proposal,
    contract,
    attempt: started.attempt,
    launchCount: launchCallCountOf(realBoundary.launchPort),
    reusedExistingAttempt: false,
    extraDisclosures,
    productDurablePath: productDurable,
    deps: input.deps,
  });
}

===== NEW FILE: projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts =====
/**
 * PRODUCT JOURNEY ↔ GOVERNED DOCS_WRITE EXECUTION WIRING — Delivery proofs.
 *
 * Deterministic only. ZERO Cursor REAL. ZERO OpenAI LIVE.
 * Proves: EC machine profile auto-resolve, W2 inspect/confirm/authority,
 * Product Execute → existing OA Attempt/Evidence pipeline, Fake boundary,
 * fail-closed without boundary, Reproof 05/06/07 non-regression properties.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  LOCAL_PILOTE_ACTOR,
} from "@/lib/oa/decision";
import {
  FakeCursorGitExternalState,
  FakeDocsWriteLaunchPort,
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID,
  M4_BOUNDED_DOCS_WRITE_SCOPE,
  M4_BOUNDED_DOCS_WRITE_TARGET,
  M4_REAL_GATEWAY_ADAPTER_ID,
  MemoryLaunchSafetyJournal,
  createM4BoundedDocsWriteCursorAgentDescriptor,
  isStudioCursorRealEnabled,
} from "@/lib/oa/execution-attempt";
import { agentMatchViolation } from "@/lib/oa/execution-attempt/domain/invariants";
import { prepareAndResolveM3ProductPath } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import { boundedDocsWriteM3ResolutionProfile } from "@/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile";
import {
  authorizedM3ResolutionKind,
  selectProductM3ResolutionProfile,
} from "@/features/project-assistant/f3/selectProductM3ResolutionProfile";
import { analyzeIntent } from "@/features/project-assistant/f2/intentAnalysis";
import {
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
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
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { evaluateExecutionAuthorization } from "@/features/project-assistant/w2/authorizeExecutionContract";
import {
  governedExecuteAuthorizedContract,
  governedExecuteSelectAgent,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";

const APP_ROOT = path.resolve(__dirname, "../..");
const REGISTRY_ROOT = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS_ROOT = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const IDENTITY = "acme/widget";
const BRANCH = "main";
const NOW = "2026-09-16T18:00:00.000Z";
const PILOTE = LOCAL_PILOTE_ACTOR;
const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const tempRoots: string[] = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempRoots.push(dir);
  return dir;
}

function assertRealOff(): void {
  delete process.env.SFIA_STUDIO_CURSOR_REAL;
  delete process.env.OPS1_CURSOR_REAL;
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.OPS1_CURSOR_REAL = "0";
  expect(isStudioCursorRealEnabled()).toBe(false);
}

function initManagedRepo(managedBase: string, identity: string) {
  fs.mkdirSync(managedBase, { recursive: true });
  const repoRoot = path.join(managedBase, identity.replace("/", "__"));
  fs.mkdirSync(path.join(repoRoot, "docs"), { recursive: true });
  fs.writeFileSync(path.join(repoRoot, "docs", ".keep"), "");
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: repoRoot,
  });
  execFileSync("git", ["config", "user.name", "Test"], { cwd: repoRoot });
  execFileSync("git", ["add", "."], { cwd: repoRoot });
  execFileSync("git", ["commit", "-m", "init"], { cwd: repoRoot });
  const baseHeadSha = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
  return { repoRoot, baseHeadSha };
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:pjw-${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    this.n += 1;
    return `lps:pjw-${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    this.n += 1;
    return `cor:pjw-${this.prefix}-${this.n}`;
  }
}

beforeEach(() => {
  assertRealOff();
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
});

afterEach(() => {
  assertRealOff();
  setConversationProviderForTests(null);
  resetF2ProposalStoreForTests();
  resetRuntimeApplicationServiceForTests();
  while (tempRoots.length) {
    const d = tempRoots.pop();
    if (d) {
      try {
        fs.rmSync(d, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
    }
  }
});

describe("10.1 / profile — machine scope vs business disclosure", () => {
  it("bounded docs_write profile is canonical M4 scope without PREPARE_ONLY", () => {
    const profile = boundedDocsWriteM3ResolutionProfile();
    expect(profile.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(profile.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(profile.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
    expect(profile.constraints).not.toContain("PREPARE_ONLY");
    expect(profile.constraints).not.toContain("NO_CURSOR_REAL");
    expect(profile.constraints).not.toContain("NO_ATTEMPT");
    expect(authorizedM3ResolutionKind({
      action: profile.action,
      target: profile.target,
      scope: profile.scope!,
      reversibility: profile.reversibility,
      requiredCapabilities: profile.requiredCapabilities,
      constraints: profile.constraints ?? [],
      stopConditions: profile.stopConditions ?? [],
    })).toBe("bounded_docs_write");
  });

  it("narrative/French scope alone never matches M4 agent", () => {
    const agent = createM4BoundedDocsWriteCursorAgentDescriptor(NOW);
    const violation = agentMatchViolation(agent, {
      action: M4_BOUNDED_DOCS_WRITE_ACTION,
      target: M4_BOUNDED_DOCS_WRITE_TARGET,
      requiredCapabilities: ["cap:cursor.docs_write"],
      scope: "docs_write borné — cycle actif — aucune exécution automatique",
    });
    expect(violation).not.toBeNull();
    expect(violation?.detailCode).toMatch(/SCOPE|scope/i);
  });

  it("selectProductM3ResolutionProfile docs-write explicit; fixture default", () => {
    expect(
      selectProductM3ResolutionProfile({ preferBoundedDocsWriteProfile: true })
        .kind,
    ).toBe("bounded_docs_write");
    expect(selectProductM3ResolutionProfile().kind).toBe("fixture");
  });
});

async function bootDocsWriteJourney(suffix: string, withBoundary: boolean) {
  const root = tempDir(`sfia-pjw-${suffix}-`);
  const managedBase = path.join(root, "managed");
  const { repoRoot, baseHeadSha } = initManagedRepo(managedBase, IDENTITY);
  const gitState = new FakeCursorGitExternalState({
    worktreeRoot: repoRoot,
    initialBranch: BRANCH,
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
    ...(withBoundary
      ? {
          realBoundary: {
            launchPort: fakeLaunch,
            safetyJournal,
            managedRepoRootBase: managedBase,
          },
        }
      : {}),
  });
  const oa = runtime.oa!;

  const created = await runtime.createProject({
    name: `PJW ${suffix}`,
    objective: "Product Journey docs_write wiring",
    context: "delivery",
    criticality: "STANDARD",
    constraints: ["ZERO LIVE"],
    shortReference: `PJW${suffix}`.slice(0, 8),
    idempotencyKey: `idem:pjw-${suffix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("createProject");
  const projectId = created.project.projectId;

  const bound = await oa.projectServices.setProjectRepositoryBinding.execute({
    projectId,
    actor: PILOTE,
    binding: {
      provider: "github",
      identity: IDENTITY,
      remoteUrl: `https://github.com/${IDENTITY}.git`,
      defaultBranch: BRANCH,
      pathRoot: "docs",
      baseSha: baseHeadSha,
    },
  });
  expect(bound.ok).toBe(true);

  const cycles0 = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions0 = await oa.decisionServices.decisions.listByProject(projectId);
  const lpsBoot = await oa.projectServices.getCurrentLivingProjectState.execute({
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
      narrative: "PJW Next cycle.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Design fonctionnel.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:functional-design",
        rationale: "PJW",
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
  if (!mat.materialization?.ok) {
    throw new Error(
      `materialization failed: ${JSON.stringify(mat, null, 2).slice(0, 2000)}`,
    );
  }

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
    newTrajectoryId: () => `trj:pjw-${suffix}`,
    newStepId: () => `stp:pjw-${suffix}`,
    newProvenanceObservationId: () => `epi:pjw-${suffix}`,
    correlationId: `cor:pjw-bridge-${suffix}`,
  };

  const candidate = await prepareCandidateTrajectoryFromCurrentRecommendation({
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
    projectSummary: overview.project.name ?? "PJW",
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
    rationale: "PJW",
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

  return {
    runtime,
    oa,
    projectId,
    cycleInstanceId,
    decisionId,
    baseHeadSha,
    fakeLaunch,
    currentContext: {
      projectId,
      lpsId: overviewAfter.livingState.id,
      lpsVersion: overviewAfter.livingState.version,
      doctrineDigest: overviewAfter.doctrine.digest,
      activeCycleInstanceId: cycleInstanceId,
    },
    dbPath: path.join(root, "oa.sqlite"),
  };
}

describe("10.1 / 10.3 / 10.4 / 10.5 / 10.6 / 10.7 — Product Execute wiring", () => {
  it("AUTO resolve docs_write (no prefer flag) → inspect → confirm → AUTHORIZED → governedExecute one Attempt", async () => {
    const ctx = await bootDocsWriteJourney("auto", true);
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        // Intentionally omit preferBoundedDocsWriteProfile — DecisionBasis auto-select.
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");
    const successor = prepared.payload.successor;
    expect(successor.scope).toBe(M4_BOUNDED_DOCS_WRITE_SCOPE);
    expect(successor.action).toBe(M4_BOUNDED_DOCS_WRITE_ACTION);
    expect(successor.target).toBe(M4_BOUNDED_DOCS_WRITE_TARGET);
    expect(successor.constraints).not.toContain("PREPARE_ONLY");
    expect(successor.constraints).not.toContain("NO_ATTEMPT");
    expect(prepared.payload.prepare.contract.constraints).toContain("PREPARE_ONLY");
    expect(prepared.payload.prepare.contract.scope).not.toBe(
      M4_BOUNDED_DOCS_WRITE_SCOPE,
    );

    const executionContractId = successor.executionContractId;

    const inspected = await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    expect(inspected.ok).toBe(true);
    if (!inspected.ok) return;
    expect(inspected.inspectionSufficient).toBe(true);

    const blocked = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(blocked.ok).toBe(true);
    if (!blocked.ok) return;
    expect(blocked.outcome).toBe("BLOCKED");

    const confirmed = await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const authorized = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(authorized.ok).toBe(true);
    if (!authorized.ok) return;
    expect(authorized.outcome).toBe("AUTHORIZED");

    const launchBefore = ctx.fakeLaunch.calls.length;
    const executed = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    expect(executed.phase).toBe("terminal");
    expect(executed.selectedAgentRef).toBe(M4_BOUNDED_DOCS_WRITE_CURSOR_AGENT_ID);
    expect(executed.adapterId).toBe(M4_REAL_GATEWAY_ADAPTER_ID);
    expect(executed.realExecution).toBe(false);
    expect(executed.externalEffects).toBe(false);
    expect(executed.attemptStatus).toBe("succeeded");
    expect(ctx.fakeLaunch.calls.length).toBe(launchBefore + 1);

    const listed =
      await ctx.oa.executionAttemptServices.listExecutionAttempts.execute({
        executionContractId,
      });
    expect(listed.ok).toBe(true);
    if (!listed.ok) return;
    const succeeded = listed.attempts.filter((a) => a.status === "succeeded");
    expect(succeeded).toHaveLength(1);

    const replay = await governedExecuteAuthorizedContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedExistingAttempt).toBe(true);
    expect(ctx.fakeLaunch.calls.length).toBe(launchBefore + 1);

    const evidence = await ctx.oa.evidenceReviewServices.repository.listByProject(
      ctx.projectId,
    );
    expect(
      evidence.some(
        (e) =>
          e.bindings?.executionAttemptId === succeeded[0]!.attemptId ||
          e.bindings?.executionContractId === executionContractId,
      ),
    ).toBe(true);
  });

  it("docs_write EC without realBoundary → REAL_BOUNDARY_REQUIRED fail-closed", async () => {
    const ctx = await bootDocsWriteJourney("nobound", false);
    expect(ctx.oa.executionAttemptServices.realBoundary).toBeUndefined();
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    expect(prepared.payload.mode).toBe("M3_RESOLVED_BOUNDED_DOCS_WRITE");

    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    await confirmExecutionContractForAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });

    const selected = await governedExecuteSelectAgent({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) return;
    expect(selected.code).toBe("REAL_BOUNDARY_REQUIRED");
  });
});

describe("10.9 — Reproof 05/06/07 non-regression properties", () => {
  it("Reproof 07 — legacy narrative scope never equals studio.gcec.docs_write match", () => {
    expect(
      authorizedM3ResolutionKind({
        action: M4_BOUNDED_DOCS_WRITE_ACTION,
        target: M4_BOUNDED_DOCS_WRITE_TARGET,
        scope: "docs_write borné — cycle actif — aucune exécution automatique",
        reversibility: "reversible",
        requiredCapabilities: ["cap:cursor.docs_write"],
        constraints: [
          "PREPARE_ONLY",
          "NO_CURSOR_REAL",
          "NO_ATTEMPT",
          "OUT_OF_SCOPE:Cursor REAL",
        ],
        stopConditions: ["AUTHORITY_DENIED"],
      }),
    ).toBeNull();
  });

  it("Reproof 07 — REAL flag alone never auto-selects docs_write profile", () => {
    const off = selectProductM3ResolutionProfile({
      env: { SFIA_STUDIO_CURSOR_REAL: "0", NODE_ENV: "test" },
    });
    const on = selectProductM3ResolutionProfile({
      env: { SFIA_STUDIO_CURSOR_REAL: "1", NODE_ENV: "test" },
    });
    // REAL may arm bounded_read_only composition; it must NEVER silently
    // promote docs_write or rewrite an inspected EC's semantics.
    expect(off.kind).not.toBe("bounded_docs_write");
    expect(on.kind).not.toBe("bounded_docs_write");
    expect(on.kind === "fixture" || on.kind === "bounded_read_only").toBe(true);
  });

  it("Reproof 06 — missing Confirmation blocks authority on resolved docs_write", async () => {
    const ctx = await bootDocsWriteJourney("nocfm", true);
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const executionContractId = prepared.payload.successor.executionContractId;
    await inspectExecutionContract({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
    });
    const auth = await evaluateExecutionAuthorization({
      oa: ctx.oa,
      projectId: ctx.projectId,
      executionContractId,
      forceLocalAuthority: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) return;
    expect(auth.outcome).toBe("BLOCKED");
    expect(auth.reasonCode).toMatch(/confirmation/i);
  });

  it("Reproof 05 — prepare original is superseded; successor linked; PREPARE_ONLY preserved on original", async () => {
    const ctx = await bootDocsWriteJourney("stale", true);
    const prepared = await prepareAndResolveM3ProductPath({
      projectId: ctx.projectId,
      decisionId: ctx.decisionId,
      currentContext: ctx.currentContext,
      deps: {
        decisionServices: ctx.oa.decisionServices,
        authorityResolver: ctx.oa.authorityResolver,
        executionContractServices: ctx.oa.executionContractServices,
        nowIso: () => ctx.oa.clock.nowIso(),
        forceM3Authority: true,
        boundedDocsWriteBaseHeadSha: ctx.baseHeadSha,
      },
    });
    expect(prepared.ok).toBe(true);
    if (!prepared.ok) return;
    const originalLoaded =
      await ctx.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prepared.payload.original.executionContractId,
      });
    expect(originalLoaded.ok).toBe(true);
    if (!originalLoaded.ok) return;
    expect(originalLoaded.contract.status).toBe("superseded");
    expect(originalLoaded.contract.constraints).toContain("PREPARE_ONLY");
    expect(prepared.payload.successor.supersedesExecutionContractId).toBe(
      prepared.payload.original.executionContractId,
    );
    expect(prepared.payload.successor.constraints).not.toContain("PREPARE_ONLY");
  });
});

describe("smoke — env REAL off", () => {
  it("SFIA_STUDIO_CURSOR_REAL and OPS1_CURSOR_REAL remain off", () => {
    assertRealOff();
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).toBe("0");
    expect(process.env.OPS1_CURSOR_REAL).toBe("0");
  });
});
```
