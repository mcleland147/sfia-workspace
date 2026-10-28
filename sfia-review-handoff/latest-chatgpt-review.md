# SFIA Review Pack — EP-S2-08-PROOF-01

**UTC:** 2026-10-28T07:58:56Z
**Cycle:** PRODUCT COMPLETION — BOUNDED DET DELIVERY
**Profile:** CRITICAL
**Mode:** LOCAL DELIVERY — TESTS FIRST
**Capability:** EP-S2-08 — POST-EVIDENCE NORA/PILOTE
**Increment:** EP-S2-08-PROOF-01
**Morris GO:** 2026-10-28 — EP-S2-08-PROOF-01 BOUNDED DET PROOF DELIVERY

---

## 1. Git Truth

| Fact | Value |
|---|---|
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Product worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-ep-s2-08-proof-01` |
| Branch | `feat/akg-m5-ep-s2-08-proof-01` |
| HEAD | `3fb84630efb9e0d2acaaf81b342da0358107db10` |
| origin/main | `3fb84630efb9e0d2acaaf81b342da0358107db10` |
| Expected baseline | `3fb84630efb9e0d2acaaf81b342da0358107db10` |
| Match | **YES** (HEAD == origin/main == expected) |
| Merge-base(HEAD, origin/main) | `3fb84630efb9e0d2acaaf81b342da0358107db10` |
| Project commit/push/PR | **NOT AUTHORIZED / NOT PERFORMED** |

### Isolation note (reconciled mid-cycle)

Initial checkout of the Product path briefly carried branch `docs/akg-m5-l3-s2-postmerge-r24-current` @ `f884dda1…` (ancestor of main; Product target files identical to `3fb84630…`). Reconciled by `git checkout feat/akg-m5-ep-s2-08-proof-01` without disturbing docs WT (detached @ `f884dda1…`, dirty pack only). All validations below re-run on **`3fb84630…`**.

### status --short (Product WT at pack time)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts
```

### Docs WT (preserved, not Product baseline)

- Path: `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s2-postmerge-r24-current`
- Detached HEAD `f884dda1…` · dirty: `.tmp-sfia-review/chatgpt-review.md` only
- **Not used** as Product implementation baseline

---

## 2. Sources read (Convergence Pre-check)

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/convergence/architectural-knowledge-governance/m5-product-transformation/05-m5-target-journey-and-trajectory-requalification.md`
- `projects/sfia-studio/production-runtime-reference/README.md` + volumes **02, 03, 04, 06, 07, 08, 09** (R24 LOCAL sync on 03/06/08/09 + manifest digests)
- Product: `w3cPostEvidenceLoop.ts`, `qualificationInputs.ts`, `materializeW3bProductTerminal.ts`, `reconcileGovernedExecution.ts`, Trajectory/Conversation surfaces (inspection), existing S8/lotsAC/frontDoor oracles

### Confirmed gate truths (unchanged)

| Gate | Status |
|---|---|
| L3-S2 Option B | integrated ON MAIN (#623) |
| EP-S2-05 | **NOT PROVEN** |
| EP-S2-08 | **PARTIAL** (LOCAL candidate proofs; not PASS) |
| L3 GLOBAL | **OPEN** |
| REAL | **NOT PROVEN** |
| G-REAL | **NOT GRANTED** |
| L4 | **NOT AUTHORIZED** |
| Runtime v3 | **NON ADOPTED** |
| Process authority | **v2.6** (not target v3) |

---

## 3. Objective / delivery summary

Prove Pilot can resume completed Generic Project-only execution after durable remount and take a governed next action, preserving identity + evidence. Minimal Product fix: Project-scoped CKC for W3-C only.

**Not done:** new post-Evidence engine; UI redesign; EP-S2-05; Late Evidence policy; HumanDecision semantics; REAL; L4; project GI.

---

## 4. Changed files

| Path | Kind |
|---|---|
| `projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts` | **BEHAVIOR** — add `resolvePostEvidenceCkcContext` + `POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID` |
| `projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts` | **BEHAVIOR** — W3-C CKC load uses post-Evidence resolver (not cycle-gated W2 Options) |
| `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts` | **NEW** — B2/B5/B6 integrated DET oracle |
| `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md` | R24 LOCAL overlay |
| `projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md` | R24 LOCAL overlay |
| `projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md` | R24 LOCAL proof index |
| `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md` | R24 EP-S2-08 PARTIAL row update |
| `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json` | digest refresh (03/06/08/09) |
| `.tmp-sfia-review/chatgpt-review.md` | this pack |

---

## 5. Complete Product diffs (W2)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts b/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
index 370ba80d..9a0d807a 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
@@ -106,3 +106,77 @@ export async function resolveW2QualificationInputs(input: {
     },
   };
 }
+
+/**
+ * EP-S2-08 / Option B — CKC orientation for W3-C post-Evidence Nora only.
+ *
+ * When an active CycleInstance exists, reuse its cycleTypeId (same as W2 Options).
+ * When Project-only (no cycle — S8 / D-ER-17), load product-native CKC via the
+ * Studio delivery orientation without inventing a CycleInstance or HumanDecision.
+ *
+ * Does NOT authorize W2 propose/decide Options (those still require CYCLE_NOT_QUALIFIED
+ * until a real cycle is active).
+ */
+export const POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID = "cyc:delivery";
+
+export type ResolvedPostEvidenceCkcContext = {
+  readonly cycleTypeId: string;
+  readonly packagePin: DoctrinePackagePin;
+  readonly lpsVersion: number;
+  readonly projectScoped: boolean;
+  readonly activeCycleInstanceId: string | null;
+};
+
+export async function resolvePostEvidenceCkcContext(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+}): Promise<
+  | { readonly ok: true; readonly context: ResolvedPostEvidenceCkcContext }
+  | { readonly ok: false; readonly code: string; readonly message: string }
+> {
+  const live = await readLiveProjectContext(input.oa, input.projectId);
+  if (!live.ok) {
+    return { ok: false, code: live.code, message: live.message };
+  }
+
+  const packagePin: DoctrinePackagePin = Object.freeze({
+    doctrinePackageId: live.context.doctrinePackageId,
+    version: live.context.doctrineVersion,
+    digest: live.context.doctrineDigest as Digest,
+  });
+
+  const cycleInstanceId = live.context.activeCycleInstanceId;
+  if (cycleInstanceId) {
+    const cycle = await input.oa.cycleServices.getCycle.execute({
+      cycleInstanceId,
+    });
+    if (!cycle.ok) {
+      return {
+        ok: false,
+        code: cycle.error.detailCode,
+        message: "Cycle actif introuvable pour orientation CKC post-Evidence.",
+      };
+    }
+    return {
+      ok: true,
+      context: {
+        cycleTypeId: cycle.cycle.cycleTypeId,
+        packagePin,
+        lpsVersion: live.context.lpsVersion,
+        projectScoped: false,
+        activeCycleInstanceId: cycleInstanceId,
+      },
+    };
+  }
+
+  return {
+    ok: true,
+    context: {
+      cycleTypeId: POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
+      packagePin,
+      lpsVersion: live.context.lpsVersion,
+      projectScoped: true,
+      activeCycleInstanceId: null,
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
index dba328ce..de7b7b1c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
@@ -45,7 +45,7 @@ import {
   parseContractStringListInput,
 } from "@/lib/oa/execution-contract";
 import type { W3BProductTerminalProjection } from "./w3bProductTerminalProjection";
-import { resolveW2QualificationInputs } from "./qualificationInputs";
+import { resolvePostEvidenceCkcContext } from "./qualificationInputs";
 
 export type W3cRecommendationKind =
   | "continue"
@@ -1668,8 +1668,10 @@ export async function runW3cPostEvidenceLoop(input: {
   }
 
   // W3-D / US-P1-14 — full CKC Phase B on post-Evidence Nora path.
-  // Same product-native load + prompt seam as W2 Options (no parallel resolver).
-  const qualification = await resolveW2QualificationInputs({ oa, projectId });
+  // Product-native CKC load (same package seam as W2 Options).
+  // EP-S2-08 / Option B: Project-only (no CycleInstance) uses delivery CKC
+  // orientation without inventing a cycle — W2 Options still require CYCLE.
+  const qualification = await resolvePostEvidenceCkcContext({ oa, projectId });
   if (!qualification.ok) {
     return failClosed(
       qualification.code,
@@ -1679,13 +1681,13 @@ export async function runW3cPostEvidenceLoop(input: {
   const registryRoot = resolveProductDoctrineRegistryRoot();
   const ckcContent = loadProductCkcCognitiveContent({
     registryRoot,
-    cycleTypeId: qualification.qualification.inputs.cycleTypeId,
-    packagePin: qualification.qualification.packagePin,
+    cycleTypeId: qualification.context.cycleTypeId,
+    packagePin: qualification.context.packagePin,
   });
   if (!ckcContent) {
     return failClosed(
       "CKC_UNAVAILABLE",
-      "CKC product-native introuvable ou incohérent pour le cycle actif — aucune mutation LPS/Epistemic post-Evidence.",
+      "CKC product-native introuvable ou incohérent pour l'orientation post-Evidence — aucune mutation LPS/Epistemic.",
     );
   }
   const ckcPromptSection = buildCkcCognitivePromptSection(ckcContent);

```

---

## 6. Complete R24 PRR diffs

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 77ee95a6..248e0b97 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -248,3 +248,7 @@ Project (`activeCycleInstanceId=null`) → Generic PREPARE (no fictive cycle) 
 **Late Evidence:** after frozen tech RB, rematerialize with expanded Evidence set → `IDEMPOTENCY_CONFLICT` (no silent frozen rewrite).
 
 **Anti-claims:** ≠ L3 GLOBAL CLOSED · ≠ REAL · ≠ mutating Generic Product PASS · ≠ invent CycleInstance · ≠ EP-S2-05/08 closed · Tool-First Nora first-prompt + multi-path unclaimed redaction closed DET (CORR-CI-623-01/02).
+
+### LOCAL CANDIDATE — EP-S2-08-PROOF-01 (2026-10-28) — Project-scoped W3-C CKC
+
+> **Epistemic class:** **LOCAL CANDIDATE** on Product branch `feat/akg-m5-ep-s2-08-proof-01` @ base `3fb84630…` · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ CURRENT ON MAIN**. Behavior delta (R24): `runW3cPostEvidenceLoop` loads CKC via `resolvePostEvidenceCkcContext` — when `activeCycleInstanceId=null`, uses delivery orientation `cyc:delivery` **without inventing CycleInstance / HumanDecision**. W2 Options/`resolveW2QualificationInputs` still refuse with `CYCLE_NOT_QUALIFIED`. F13/F19 remount + governed continue/recover + Nora-unavailable reserve proven DET by `akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts` (B2/B5/B6). EP-S2-08 remains **PARTIAL** until Critical Review + GI. ≠ EP-S2-08 PASS · ≠ REAL · ≠ L4.
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index 8fd457ad..6acb120d 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -161,4 +161,6 @@ Four situations must stay distinct (S2 / M-HD-01 HD11):
 | Rehydration | W3-C / GERM surface from durable facts demonstrated DET (O2 / nominal) | Nora/Pilote UX E2E **NOT PROVEN** (EP-S2-08 PARTIAL) |
 | Fictive cycle | Rehydrate must not create CycleInstance | BEHAVIOR PROVEN at tested scope |
 
+**LOCAL CANDIDATE (EP-S2-08-PROOF-01, 2026-10-28):** Process remount = new OA on same durable SQLite + refs → Project/EC/Attempt + Evidence/RB/CE + W3-C recommendation/reserve rehydrate DET (`akgM5L3S2.epS208.proof01…` B2/B6). **≠** browser `/studio` remount E2E · **≠** CURRENT ON MAIN · EP-S2-08 still **PARTIAL**.
+
 **≠** invent recovery E2E beyond DET proofs.
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index db5716f1..8ce704a8 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -222,3 +222,11 @@ Do **not** conflate Generic PREPARE eligibility with Artifact continuation. DETE
 | Post-merge CI `#40526990871` @ `6c8b661c…` | Detect / Typecheck / Lint / Build / Vitest / Modeled Governance / Secret scan / Trailing whitespace / **Required Gate SUCCESS** | CI FACT CURRENT ON MAIN |
 
 **Fake/Real:** Cursor = TestOnlyRealExecutionLaunchPort · FS OBSERVED = real temp worktree · O8 EvidenceReader = DET substitution bounded · REAL Cursor / OpenAI LIVE **NOT PROVEN**. Historical Pass 05 « 17 PASS / 105 PASS / dirty LOCAL » counts remain valid as **pre-merge handoff facts**, not re-asserted as Cycle 14 local re-runs.
+
+### LOCAL CANDIDATE — EP-S2-08-PROOF-01 (2026-10-28) — B2/B5/B6 Pilote resume
+
+| Suite / oracle | Result | Proof level |
+|---|---|---|
+| `akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts` | B2 remount · B5 governed continue/recover (propose≠decide; `CYCLE_NOT_QUALIFIED` without cycle) · B6 Nora unavailable reserve | **LOCAL DET CANDIDATE** ≠ ON MAIN |
+
+Ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** (Product/OA/GERM/LPS). ≠ browser `/studio` mount · ≠ EP-S2-08 PASS · ≠ REAL.
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0aaab505..0777ca28 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -15,7 +15,7 @@
 | Option B Product + S8 + R-S8-01…04 + CORR-CI-623-01/02 | **CURRENT ON MAIN DET** (PR #623 MERGED · CI #40526990871 SUCCESS) | preserve; no Product mutation in Cycle 14 |
 | EP-S2-01…04, 06–07, 09–12 | **PASS** at tested DET scope | preserve senses |
 | EP-S2-05 Mission Evidence Project-only | **NOT PROVEN** | **Owner:** Product / construction Studio. **Exit (distinct):** Project-only context + Mission semantic **actually applicable** (no invented `PRODUCT_MISSION` stamp) + Mission Evidence ingested with Project/EC/Attempt identity + provenance + RB/CE consume it + Product Result honest; `generic_materialization` **≠** Mission Evidence. **Morris decision** only if semantic/model evolution required. **≠** automatic L4 assignment. |
-| EP-S2-08 Post-Evidence / rehydration (Nora/Pilote UX) | **PARTIAL** | **Owner:** Product / continuité Nora–Pilote. **Covered now:** durable GERM/W3-C technical rehydrate DET on main. **Exit (distinct):** durable resume with Project/EC/Attempt identity + Evidence/reserves preserved + Nora/Pilote restitution effective + governed continue/replan at decided scope + no invented HumanDecision; proofs Product/UX applicable. **Trajectory candidate:** L4 **or** next applicable capacity — **confirm via Roadmap + Morris GO** (L4 **not** automatically authorized / decided by this debt). |
+| EP-S2-08 Post-Evidence / rehydration (Nora/Pilote UX) | **PARTIAL** | **Owner:** Product / continuité Nora–Pilote. **Covered now (ON MAIN):** durable GERM/W3-C technical rehydrate DET. **LOCAL CANDIDATE (EP-S2-08-PROOF-01 @ `3fb84630…`, 2026-10-28 — ≠ ON MAIN / GI NOT AUTHORIZED):** B2 process remount preserves Project/EC/Attempt + Evidence/RB/CE + W3-C; B5 recommendation visible + continue/recover permitted, recommend≠HD, no auto replan, structural Options still cycle-gated; B6 Nora-unavailable reserve remount-stable via `withNoraUnavailableReserve`; Project-scoped CKC via `resolvePostEvidenceCkcContext` (`cyc:delivery`). **Still open for decided Product/UX exit:** true `/studio` browser remount E2E; dual F3/W3-C surface consistency; structural replan CTA only when cycle-qualified. **Exit (distinct):** durable resume + Nora/Pilote restitution effective + governed continue/replan at decided scope + no invented HumanDecision; proofs Product/UX applicable + Critical Review. **Trajectory candidate:** L4 **or** next applicable capacity — **confirm via Roadmap + Morris GO** (L4 **not** automatically authorized). ≠ EP-S2-08 PASS until reviewed+integrated. |
 | Late Evidence after frozen RB | Fail-closed `IDEMPOTENCY_CONFLICT`; **no** same-key supersession (**OPEN** policy) | Morris/OA — reopen policy or new Attempt |
 | Mutating Generic Product PASS | **NOT PROVEN** (honest UNCLAIMED) | Result Semantic GO if ever required |
 | generic_materialization Evidence (#618 gap) | **CLOSED AT DET SCOPE ON MAIN** via #623 · **≠** REAL E2E FS→Git→Review closure | REAL E2E remains KNOWN GAP / distinct proof |
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 788ea0f2..33dca871 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "d13787c0f629efe4"
+      "sha256_16": "7fbccdf6879875a4"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -31,7 +31,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "21c9328c91f86984"
+      "sha256_16": "21f3dc86c0eb537e"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "7a1bc607f6f28230"
+      "sha256_16": "44b7174e02ba3f88"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "700ee3ee207a5434"
+      "sha256_16": "fd80aa73117b868c"
     }
   ],
   "components": [

```

---

## 7. New oracle (full file)

Path: `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts`

```typescript
/**
 * EP-S2-08-PROOF-01 — Pilote post-Evidence resume & continuation (DET).
 *
 * Proves B2 / B5 / B6 at Product/OA/GERM/LPS boundary after Option B Project-first:
 *   complete Attempt → W3-B/W3-C → process remount (same durable SQLite + refs)
 *   → rehydrate → recommendation visible / anti-authority → Nora unavailable reserve.
 *
 * Ceiling: DETERMINISTIC. ≠ REAL Studio browser E2E. ≠ EP-S2-08 GLOBAL PASS claim.
 * ≠ EP-S2-05. ≠ Late Evidence policy change. ≠ L4.
 *
 * @vitest-environment node
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildIntentAnalysisFromSolicitedMission,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { singleHumanExecutePreparedContract } from "@/features/project-assistant/w2/singleHumanExecutePreparedContract";
import { requiredInspectedFactsForContract } from "@/lib/oa/execution-contract";
import {
  governedExecuteRecordResult,
  governedExecuteSelectAgent,
  governedExecuteStart,
} from "@/features/project-assistant/w2/governedExecuteAuthorizedContract";
import {
  materializeW3bProductTerminal,
  rehydrateProductOutcomeFromAttempt,
} from "@/features/project-assistant/w2/materializeW3bProductTerminal";
import { reconcileGovernedExecution } from "@/features/project-assistant/w2/reconcileGovernedExecution";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { shouldAutoResumeReconcileOnRemount } from "@/features/project-assistant/w2/reconcileContinuePolicy";
import { NORA_ANALYSIS_UNAVAILABLE_RESERVE } from "@/features/project-assistant/w2/w3bProductTerminalProjection";
import {
  projectW3cExecutionReportSurfaceFromDurable,
  type W3cPostEvidenceLoopResult,
} from "@/features/project-assistant/w2/w3cPostEvidenceLoop";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "@/lib/oa/execution-attempt";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import { PRODUCT_MISSION_FROM_DURABLE_CONTEXT } from "@/lib/oa/evidence-review/application/missionResultPayload";
import { executionReviewVerificationEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestExecutionReviewVerificationEvidence";
import { missionResultEvidenceIdForAttempt } from "@/features/project-assistant/f3/ingestMissionResultEvidence";
import { loadGenericExecutionReviewMaterial } from "@/features/project-assistant/f3/persistGenericExecutionReviewMaterial";
import { TestOnlyRealExecutionLaunchPort } from "../oa/execution-attempt/support/testOnlyRealExecutionLaunchPort";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";

const NOTES_PATH = "projects/demo/notes/project-notes.md";

function restoreEnvVar(name: string, previous: string | undefined): void {
  if (previous === undefined) delete process.env[name];
  else process.env[name] = previous;
}

function requiredFactsOrThrow(
  contract: Parameters<typeof requiredInspectedFactsForContract>[0],
): readonly string[] {
  const facts = requiredInspectedFactsForContract(contract);
  if (Array.isArray(facts)) return facts;
  throw new Error(
    `inspection disclosure incomplete: ${(facts as { code: string }).code}`,
  );
}

function launchPortOf(oa: {
  executionAttemptServices?: {
    realBoundary?: { launchPort?: unknown };
  } | null;
}): TestOnlyRealExecutionLaunchPort {
  const port = oa.executionAttemptServices?.realBoundary?.launchPort;
  if (!(port instanceof TestOnlyRealExecutionLaunchPort)) {
    throw new Error("TestOnlyRealExecutionLaunchPort required");
  }
  return port;
}

function notesEditAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "EP-S2-08-PROOF-01 notes edit (Project-first DET)",
    expectedOutcome: "Honest Product Result + W3-C post-Evidence",
    scope: NOTES_PATH,
    repositoryMutation: "write",
    impactSignals: { structuralChange: false, architectureImpact: false },
  });
  return {
    ...base,
    executionIntent: {
      intentKind: "other",
      scopeIn: [NOTES_PATH],
      requiredCapabilities: [],
    },
  };
}

function cursorReportStdout(input: {
  attemptId: string;
  executionContractId: string;
  repositoryRef: string;
  baseSha: string;
}): string {
  const body = {
    schemaVersion: "oa.cursor-execution-report.1",
    reportId: `rpt:p01:${input.attemptId}`.slice(0, 128),
    attemptId: input.attemptId,
    executionContractId: input.executionContractId,
    repositoryRef: input.repositoryRef,
    baseSha: input.baseSha,
    status: "succeeded",
    authorizedEffectsExecuted: ["filesystem.modify"],
    workPerformed: [`modified ${NOTES_PATH}`],
    fileEffects: {
      created: [],
      modified: [NOTES_PATH],
      deleted: [],
    },
  };
  return `CURSOR_EXECUTION_REPORT_JSON=${JSON.stringify(body)}`;
}

type Completed = {
  projectId: string;
  executionContractId: string;
  attemptId: string;
  verificationId: string;
  productEvidenceId: string | null;
  reviewBundleId: string | null;
  claimEvaluationId: string | null;
  productOutcome: string;
  postEvidence: W3cPostEvidenceLoopResult;
  hdCountBefore: number;
};

describe("EP-S2-08-PROOF-01 — Pilote resume / continuation / Nora unavailable (DET)", () => {
  let previousMorris: string | undefined;
  let previousDetPin: string | undefined;
  let previousPilot: string | undefined;
  let previousExclusive: string | undefined;
  let previousRefs: string | undefined;
  let refsRoot: string;
  let dbPath: string;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousExclusive = process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    previousRefs = process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    delete process.env.SFIA_STUDIO_LOCAL_OA_EXCLUSIVE;
    setConversationProviderForTests(null);
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    refsRoot = fs.mkdtempSync(path.join(os.tmpdir(), "ep08-p01-refs-"));
    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT = refsRoot;
    dbPath = tempProductDbPath("ep-s2-08-proof01.sqlite");
  });

  afterEach(() => {
    cleanupW2TempDirs();
    try {
      fs.rmSync(refsRoot, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
    restoreEnvVar("SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY", previousMorris);
    restoreEnvVar("SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA", previousDetPin);
    restoreEnvVar("SFIA_STUDIO_LOCAL_PILOT_AUTHORITY", previousPilot);
    restoreEnvVar("SFIA_STUDIO_LOCAL_OA_EXCLUSIVE", previousExclusive);
    restoreEnvVar("SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT", previousRefs);
    setConversationProviderForTests(null);
  });

  async function seedProject(
    runtime: RuntimeApplicationService,
    suffix: string,
  ) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: "demo",
      objective: "EP-S2-08-PROOF-01 Project-first DET",
      context: "akg-m5 ep-s2-08 proof01",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "PROOF-01 DET ONLY"],
      shortReference: `P01${suffix.toUpperCase().slice(0, 5)}`,
      idempotencyKey: `idem:ep08-p01-${suffix}`,
    });
    if (!created.ok) {
      throw new Error(`createProject: ${created.error?.message ?? "fail"}`);
    }
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const identity = `acme/ep08-p01-${suffix}`;
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!live.ok) throw new Error("live");
    expect(live.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    return { projectId, oa };
  }

  async function countHumanDecisions(
    oa: RuntimeOaStack,
    projectId: string,
  ): Promise<number> {
    const decisions = await oa.decisionServices!.decisions.listByProject(
      projectId,
    );
    return decisions.length;
  }

  async function runOptionBToPostEvidence(input: {
    suffix: string;
    noraFail?: boolean;
  }): Promise<{ runtime: RuntimeApplicationService; completed: Completed }> {
    const runtime = bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: `ep08${input.suffix}`,
    });
    const { projectId, oa } = await seedProject(runtime, input.suffix);
    if (input.noraFail) {
      setConversationProviderForTests(
        new FakeConversationProvider({ failOnCall: 1 }),
      );
    }

    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis: notesEditAnalysis(),
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(true);
    if (!prep.ok) throw new Error(`prepare: ${prep.message}`);
    expect(prep.projectContextOnly).toBe(true);
    expect(prep.cycleInstanceId).toBeNull();

    const live = await oa.executionContractServices!.getExecutionContract.execute(
      {
        executionContractId: prep.executionContractId,
      },
    );
    expect(live.ok).toBe(true);
    if (!live.ok) throw new Error("get EC");
    expect(live.contract.cycleInstanceId ?? null).toBeNull();
    expect(live.contract.constraints).not.toContain(
      PRODUCT_MISSION_FROM_DURABLE_CONTEXT,
    );
    const facts = requiredFactsOrThrow(live.contract);
    const inputs = live.contract.inputs as Record<string, unknown>;
    const repositoryRef = String(inputs.repositoryBindingIdentity ?? "");
    const baseSha = String(inputs.baseHeadSha ?? W2_TEST_PINNED_BASE_HEAD_SHA);

    const she = await singleHumanExecutePreparedContract({
      oa,
      projectId,
      executionContractId: live.contract.executionContractId,
      expectedVersion: live.contract.version,
      expectedSemanticFingerprint: live.contract.semanticFingerprint!,
      presentedFactIds: facts,
      forceLocalAuthority: true,
    });
    expect(she.ok).toBe(true);
    if (!she.ok) throw new Error(`she: ${she.code}`);

    const port = launchPortOf(oa);
    const selected = await governedExecuteSelectAgent({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      forceLocalAuthority: true,
    });
    expect(selected.ok).toBe(true);
    if (!selected.ok) throw new Error(`select: ${selected.message}`);
    expect(selected.attempt!.selectedAgentRef).toBe(
      STUDIO_CURSOR_GENERALIST_AGENT_ID,
    );
    const attemptId = selected.attempt!.attemptId;

    const started = await governedExecuteStart({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) throw new Error(`start: ${started.message}`);

    setTimeout(() => {
      port.resolveSimulatedCompletion(`proc:sim:${attemptId}`, {
        exitCode: 0,
        timedOut: false,
        stdout: cursorReportStdout({
          attemptId,
          executionContractId: she.executionContractId,
          repositoryRef,
          baseSha,
        }),
        stderr: "",
        durationMs: 5,
      });
    }, 15);

    const terminal = await governedExecuteRecordResult({
      oa,
      projectId,
      executionContractId: she.executionContractId,
      attemptId,
      forceLocalAuthority: true,
      awaitIfPending: true,
      missionResultRefsRoot: refsRoot,
    });
    expect(terminal.ok).toBe(true);
    if (!terminal.ok) throw new Error(`record: ${terminal.code}`);
    expect(terminal.attemptStatus).toBe("succeeded");

    const germ = loadGenericExecutionReviewMaterial({ refsRoot, attemptId });
    expect(germ.ok).toBe(true);

    const verificationId =
      executionReviewVerificationEvidenceIdForAttempt(attemptId);
    const verification =
      await oa.evidenceReviewServices!.evidenceReader.findById(verificationId);
    expect(verification).toBeTruthy();
    expect(verification!.bindings.cycleInstanceId).toBeUndefined();
    expect(
      await oa.evidenceReviewServices!.evidenceReader.findById(
        missionResultEvidenceIdForAttempt(attemptId),
      ),
    ).toBeNull();

    const hdCountBefore = await countHumanDecisions(oa, projectId);

    const materialized = await materializeW3bProductTerminal({
      oa,
      projectId,
      attemptId,
    });
    expect(materialized.ok).toBe(true);
    if (!materialized.ok) throw new Error(`materialize: ${materialized.code}`);
    expect(materialized.product.outcome).toBe("UNCLAIMED");
    expect(materialized.product.outcome).not.toBe("SUCCESS");
    expect(materialized.postEvidence).toBeTruthy();

    return {
      runtime,
      completed: {
        projectId,
        executionContractId: she.executionContractId,
        attemptId,
        verificationId,
        productEvidenceId: materialized.product.evidenceId,
        reviewBundleId: materialized.product.reviewBundleId,
        claimEvaluationId: materialized.product.claimEvaluationId,
        productOutcome: materialized.product.outcome,
        postEvidence: materialized.postEvidence!,
        hdCountBefore,
      },
    };
  }

  function remountRuntime(): RuntimeApplicationService {
    // Simulate /studio server remount: new process-local OA on same durable DB.
    return bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: "ep08remount",
    });
  }

  it("B2 — durable remount preserves Project/EC/Attempt + Evidence/RB/CE + W3-C", async () => {
    const { completed } = await runOptionBToPostEvidence({ suffix: "b2" });
    expect(completed.postEvidence.ok).toBe(true);
    if (!completed.postEvidence.ok) return;

    const remounted = remountRuntime();
    const oa = remounted.oa!;

    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: completed.projectId,
    });
    expect(live.ok).toBe(true);
    if (!live.ok) return;
    expect(live.livingProjectState.activeCycleInstanceId ?? null).toBeNull();

    const ec = await oa.executionContractServices!.getExecutionContract.execute({
      executionContractId: completed.executionContractId,
    });
    expect(ec.ok).toBe(true);
    if (!ec.ok) return;
    expect(ec.contract.cycleInstanceId ?? null).toBeNull();

    const attempt = await oa.executionAttemptServices!.getExecutionAttempt.execute(
      { attemptId: completed.attemptId },
    );
    expect(attempt.ok).toBe(true);
    if (!attempt.ok) return;
    expect(attempt.attempt.executionContractId).toBe(
      completed.executionContractId,
    );

    const verification = await oa.evidenceReviewServices!.evidenceReader.findById(
      completed.verificationId,
    );
    expect(verification?.bindings.projectId).toBe(completed.projectId);
    expect(verification?.bindings.executionAttemptId).toBe(completed.attemptId);

    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa,
      projectId: completed.projectId,
      attemptId: completed.attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok) return;
    expect(rehydrated.product.evidenceId).toBe(completed.productEvidenceId);
    expect(rehydrated.product.reviewBundleId).toBe(completed.reviewBundleId);
    expect(rehydrated.product.claimEvaluationId).toBe(
      completed.claimEvaluationId,
    );
    expect(rehydrated.product.outcome).toBe(completed.productOutcome);
    expect(rehydrated.product.outcome).not.toBe("SUCCESS");
    expect(rehydrated.postEvidence?.ok).toBe(true);
    if (!rehydrated.postEvidence || !rehydrated.postEvidence.ok) return;
    expect(rehydrated.postEvidence.evidenceId).toBe(completed.productEvidenceId);
    expect(rehydrated.postEvidence.recommendation.kind).toBe(
      completed.postEvidence.recommendation.kind,
    );
    expect(rehydrated.postEvidence.lpsVersion).toBe(
      completed.postEvidence.lpsVersion,
    );
    expect(rehydrated.postEvidence.replanInvoked).toBe(false);

    // GERM still readable after remount (same refs root).
    const surface = projectW3cExecutionReportSurfaceFromDurable({
      attemptId: completed.attemptId,
      refsRoot,
      targetPath: NOTES_PATH,
    });
    expect(surface.executionReport).not.toBeNull();

    // Remount continue: terminal post-Evidence must not invent HD / cycle /
    // duplicate Evidence. Product may already be stable (no re-materialize).
    const reconciled = await reconcileGovernedExecution({
      oa,
      projectId: completed.projectId,
      executionContractId: completed.executionContractId,
      intent: "continue",
      forceLocalAuthority: true,
    });
    expect(reconciled.ok).toBe(true);
    if (!reconciled.ok) return;
    if (reconciled.product && typeof reconciled.product === "object") {
      const product = reconciled.product as {
        evidenceId?: string | null;
        outcome?: string;
      };
      expect(product.evidenceId).toBe(completed.productEvidenceId);
      expect(product.outcome).toBe(completed.productOutcome);
    }
    const live2 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: completed.projectId,
    });
    expect(live2.ok).toBe(true);
    if (live2.ok) {
      expect(live2.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }
    expect(await countHumanDecisions(oa, completed.projectId)).toBe(
      completed.hdCountBefore,
    );
    // Second materialize/rehydrate remains idempotent (no Evidence duplication).
    const again = await rehydrateProductOutcomeFromAttempt({
      oa,
      projectId: completed.projectId,
      attemptId: completed.attemptId,
    });
    expect(again.ok).toBe(true);
    if (again.ok) {
      expect(again.product.evidenceId).toBe(completed.productEvidenceId);
    }
  }, 90_000);

  it("B5 — post-Evidence recommendation visible; no auto HD / no false replan; propose≠decide", async () => {
    const { completed } = await runOptionBToPostEvidence({ suffix: "b5" });
    expect(completed.postEvidence.ok).toBe(true);
    if (!completed.postEvidence.ok) return;

    const remounted = remountRuntime();
    const oa = remounted.oa!;
    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa,
      projectId: completed.projectId,
      attemptId: completed.attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok || !rehydrated.postEvidence?.ok) return;

    const reco = rehydrated.postEvidence.recommendation;
    expect(reco.headline.length).toBeGreaterThan(0);
    expect(reco.nextStep.length).toBeGreaterThan(0);
    expect(["continue", "recover"]).toContain(reco.kind);
    expect(reco.requiresHumanDecision).toBe(false);
    expect(rehydrated.postEvidence.replanInvoked).toBe(false);
    expect(reco.decisionCreated).toBe(false);
    expect(reco.gateConsumed).toBe(false);

    // Project-only: W2 Options still require an active CycleInstance
    // (honest — W3-C must not invent replan/HD to fake a structural CTA).
    const qual = await resolveW2QualificationInputs({
      oa,
      projectId: completed.projectId,
    });
    expect(qual.ok).toBe(false);
    if (!qual.ok) {
      expect(qual.code).toBe("CYCLE_NOT_QUALIFIED");
    }

    expect(await countHumanDecisions(oa, completed.projectId)).toBe(
      completed.hdCountBefore,
    );
    const live = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: completed.projectId,
    });
    expect(live.ok && (live.livingProjectState.activeCycleInstanceId ?? null)).toBe(
      null,
    );

    // Remount auto-resume is for pending stages only — completed terminal ≠ invent replan.
    expect(
      shouldAutoResumeReconcileOnRemount({
        stage: "COMPLETE",
        nextDeterministicAction: "NONE",
      }),
    ).toBe(false);
  }, 90_000);

  it("B6 — Nora unavailable: durable reserve survives remount; no false SUCCESS / HD", async () => {
    const { completed } = await runOptionBToPostEvidence({
      suffix: "b6",
      noraFail: true,
    });
    expect(completed.postEvidence.ok).toBe(true);
    if (!completed.postEvidence.ok) return;

    expect(completed.postEvidence.analysisText).toBeNull();
    expect(completed.postEvidence.analysisUnavailableReason).toBeTruthy();
    expect(completed.postEvidence.noraInvoked).toBe(true);
    expect(completed.productOutcome).toBe("UNCLAIMED");
    expect(completed.productOutcome).not.toBe("SUCCESS");

    // Prefer existing withNoraUnavailableReserve projection when postEvidence
    // path marks analysis unavailable but product CE remains durable.
    // (Reserve may appear on product.reservations and/or analysisUnavailableReason.)
    const remounted = remountRuntime();
    const oa = remounted.oa!;
    const rehydrated = await rehydrateProductOutcomeFromAttempt({
      oa,
      projectId: completed.projectId,
      attemptId: completed.attemptId,
    });
    expect(rehydrated.ok).toBe(true);
    if (!rehydrated.ok || !rehydrated.postEvidence?.ok) return;

    expect(rehydrated.postEvidence.analysisText).toBeNull();
    expect(rehydrated.postEvidence.analysisUnavailableReason).toBe(
      completed.postEvidence.analysisUnavailableReason,
    );
    expect(rehydrated.product.outcome).toBe("UNCLAIMED");
    expect(rehydrated.postEvidence.recommendation.requiresHumanDecision).toBe(
      false,
    );
    expect(rehydrated.postEvidence.replanInvoked).toBe(false);
    expect(await countHumanDecisions(oa, completed.projectId)).toBe(
      completed.hdCountBefore,
    );

    // GERM not fabricated on remount.
    const germ = loadGenericExecutionReviewMaterial({
      refsRoot,
      attemptId: completed.attemptId,
    });
    expect(germ.ok).toBe(true);

    // Pilot-facing reserve constant remains the canonical degraded label.
    expect(NORA_ANALYSIS_UNAVAILABLE_RESERVE).toMatch(/Nora indisponible/i);
  }, 90_000);
});

```

---

## 8. Proof matrix B2 / B5 / B6

| Proof | Classification | Oracle / assertions | Sources | Ceiling / limits |
|---|---|---|---|---|
| **B2** durable `/studio` remount (process) | **BEHAVIOR PROVEN** (DET) | `B2 — durable remount preserves Project/EC/Attempt + Evidence/RB/CE + W3-C` — new OA on same SQLite+refs; LPS/EC/Attempt ids; Evidence/RB/CE; W3-C reco kind+lpsVersion; no fictive cycle; HD count stable; idempotent rehydrate | OA Project/EC/Attempt/Evidence/RB/CE · GERM refs · `rehydrateProductOutcomeFromAttempt` · `reconcileGovernedExecution(continue)` | Process remount ≠ browser React remount E2E (**KNOWN GAP**) |
| **B5** governed continuation | **BEHAVIOR PROVEN** (DET) at permitted paths | `B5 — post-Evidence recommendation visible…` — headline/nextStep; kind ∈ continue\|recover; `requiresHumanDecision=false`; `replanInvoked=false`; `decisionCreated=false`; W2 Options → `CYCLE_NOT_QUALIFIED`; no auto-resume on COMPLETE | W3-C reco · `resolveW2QualificationInputs` · `shouldAutoResumeReconcileOnRemount` | Structural Options CTA **not** reachable without cycle — **honest mismatch if UX suggests replan** (**KNOWN GAP** / qualify) |
| **B6** Nora unavailable | **BEHAVIOR PROVEN** (DET) | `B6 — Nora unavailable…` — Fake provider fail; `analysisText=null` + unavailable reason; Product UNCLAIMED≠SUCCESS; remount preserves reason; no HD/replan; GERM intact; `NORA_ANALYSIS_UNAVAILABLE_RESERVE` label | FakeConversationProvider · `withNoraUnavailableReserve` · LPS rehydrate | ≠ invent separate persistence for reserve |

### Dual-surface note

TrajectorySurface uses `w2ReconcileGovernedExecutionAction`; ConversationSurface uses F3 LPS rehydrate — consistency review remains open (no UI redesign this cycle).

---

## 9. B1 / B3 / B4 non-regression

| Suite | Result |
|---|---|
| `akgM5L3S2.s8.projectFirst.integrated.d0.test.ts` | **PASS actual** (incl. late Evidence `IDEMPOTENCY_CONFLICT`) |
| `akgM5L3S2.optionB.lotsAC.d0.test.ts` | **PASS actual** |
| `w3cPostEvidenceLoop.test.ts` + `w3cPostEvidenceCorrection.test.ts` | **PASS actual** |
| `genericExecutionReviewResultConvergence01.frontDoor.d0.test.ts` | **PASS actual** |
| `genericExecutionReviewResultConvergence01.trajectorySurface.d0.test.ts` + `postExecutionTrajectorySurface.ui.test.tsx` | **PASS actual** (bundled in 5-file run, 57 tests) |

Preserved: nominal Evidence; ABSENT≠REJECTED; honest UNCLAIMED; W3-B ownership; frozen RB; Tool-First; SHE; Late Evidence fail-closed; Mission Result applicability untouched; EP-S2-05 **NOT PROVEN**.

---

## 10. Validation results

| Check | Result | Command / notes |
|---|---|---|
| PROOF-01 B2/B5/B6 | **PASS actual** (3/3) | `npx vitest run __tests__/project-assistant/akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts` (from `app/`) |
| S8 + lotsAC + PROOF-01 | **PASS actual** (47/47) | combined vitest |
| W3-C + frontDoor + trajectory UI | **PASS actual** (57/57) | combined vitest |
| Typecheck (PROOF-01 clean) | **PASS actual** for changed oracle after typing fix; `npx tsc --noEmit` shows no `epS208` errors | Note: `npm run typecheck` historically exited 0 even when other errors present — scoped grep used |
| Lint | **PASS actual** (warnings only pre-existing unused vars) | `npm run lint` |
| Build | **NOT RUN** (time; not required for DET proof ceiling) | — |
| Full Vitest | **NOT RUN** | targeted suites only |
| SFIA Studio Required Gate (CI) | **NOT RUN** (no project push) | — |

---

## 11. R23 / R24 qualification

- **R23:** Product mutation preceded by Convergence/PRR/code inspection; scope minimized to W3-C CKC Project-only defect + DET oracles.
- **R24:** Behavior change documented in PRR 03/06/08/09 LOCAL overlays; manifest digests refreshed for those volumes. Roadmap tip **not** promoted. EP-S2-08 remains **PARTIAL**. No doctrine/L4 promotion.

Digest deltas (sha256_16):
- 03: `d13787c0f629efe4` → `7fbccdf6879875a4`
- 06: `21c9328c91f86984` → `21f3dc86c0eb537e`
- 08: `7a1bc607f6f28230` → `44b7174e02ba3f88`
- 09: `700ee3ee207a5434` → `fd80aa73117b868c`

---

## 12. Debts / reserves / STOPs

| Item | Status |
|---|---|
| Browser `/studio` remount E2E | **KNOWN GAP** (process remount DET used) |
| Dual F3 / W3-C surface consistency | **OPEN** (no UI redesign) |
| Structural replan CTA on Project-only | **honestly unavailable** (`CYCLE_NOT_QUALIFIED`) |
| EP-S2-05 | **NOT PROVEN** |
| EP-S2-08 PASS | **not claimed** — PARTIAL |
| Project GI / PR | **NOT AUTHORIZED** |
| REAL / G-REAL / L4 / runtime v3 | unchanged anti-claims |

No STOP requiring Morris decision for HumanDecision / Late Evidence / architecture pivot.

---

## 13. Gate impact / recommended verdict

**Suggested next gate:** Critical Review of this pack → Morris GO for Product GI (separate) if accepted · keep EP-S2-08 PARTIAL until merge+post-merge truth.

**Recommended verdict:** `LOCAL DELIVERY COMPLETE — READY FOR CRITICAL REVIEW`

Anti-claims preserved: EP-S2-05 NOT PROVEN · EP-S2-08 PARTIAL · L3 GLOBAL OPEN · REAL NOT PROVEN · G-REAL NOT GRANTED · L4 NOT AUTHORIZED · runtime v3 NON ADOPTED.

---

## 14. Review Handoff

Status: **REQUIRED / PUBLISH-IN-CYCLE** (executed after this pack write).
Branch: `sfia/review-handoff`
Canonical: `sfia-review-handoff/latest-chatgpt-review.md`
Exception: single-file handoff only (no Product commit).
