# SFIA Review Pack — EP-S2-08-PROOF-01 CRITICAL CORRECTIVE PASS (R1/R2/R3)

**UTC:** 2026-10-28T08:16:10Z
**Cycle continuity:** SAME EP-S2-08-PROOF-01 Product Delivery (no new feature branch)
**Pass:** CRITICAL REVIEW CORRECTIONS R1/R2/R3
**Profile:** CRITICAL
**Morris GO:** 2026-10-28 — CRITICAL REVIEW CORRECTIVE PASS ONLY

---

## 1. Git Truth

| Fact | Value |
|---|---|
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Product WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-ep-s2-08-proof-01` |
| Branch | `feat/akg-m5-ep-s2-08-proof-01` |
| HEAD | `3fb84630efb9e0d2acaaf81b342da0358107db10` |
| origin/main | `3fb84630efb9e0d2acaaf81b342da0358107db10` |
| Expected base | `3fb84630efb9e0d2acaaf81b342da0358107db10` |
| Match | **YES** |
| Merge-base | `3fb84630efb9e0d2acaaf81b342da0358107db10` |
| Project GI | **NOT AUTHORIZED / NOT PERFORMED** |

### status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/epS208.proof01.piloteSurface.b5b6.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts
```

### diff --stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 1171 +++++++++++++++++---
 .../project-assistant/w2/qualificationInputs.ts    |   83 ++
 .../project-assistant/w2/w3cPostEvidenceLoop.ts    |   14 +-
 .../03-end-to-end-flow-catalog.md                  |    4 +
 .../06-persistence-restart-and-recovery.md         |    2 +
 .../08-test-proof-and-conformance-map.md           |   10 +
 ...9-known-gaps-reserves-and-current-boundaries.md |    2 +-
 .../production-runtime-reference.manifest.json     |    8 +-
 8 files changed, 1145 insertions(+), 149 deletions(-)
```

### Prior handoff (historical — start of this corrective pass)

| Field | Value |
|---|---|
| Branch | `sfia/review-handoff` |
| Tip | `4c1397dee3689a20e20d15225bfa88072ab73b61` |
| Blob `latest-chatgpt-review.md` | `8faef48113c1414e551b31f51dcd575c57704f77` |

### R3 metadata policy (this pack)

Section 14 records **pre-publication** identifiers only.
**Post-publication** tip/blob are verified after push and reported in the Cursor execution return — **not** rewritten into this file to embed a self-referential final hash.

---

## 2. Convergence / sources

SFIA v2.6 process · Studio v3 target NON ADOPTED · PRR 02–09 · prior FULL handoff @ tip above · Product W2/W3-C/UI code · CKC catalog/`ckc:studio:delivery` · D-ER-17/S8.

Gates unchanged: EP-S2-05 NOT PROVEN · EP-S2-08 PARTIAL · L3 GLOBAL OPEN · REAL NOT PROVEN · G-REAL NOT GRANTED · L4 NOT AUTHORIZED · runtime v3 NON ADOPTED.

---

## 3. Scope R1 / R2 / R3

| Res | Objective | Outcome |
|---|---|---|
| **R1** | `cyc:delivery` Project-scoped CKC applicability | **OPEN — MORRIS DECISION REQUIRED** (options A/B/C) |
| **R2** | Strengthen B5/B6 Pilote-facing UI proof | **STRENGTHENED** (jsdom TrajectorySurface) · browser E2E remains KNOWN GAP |
| **R3** | Handoff tip/blob coherence | **CLOSED** by non-self-referential pack + verified post-push return |

---

## 4. R1 — Project-scoped CKC (OPEN)

### Evidence assembled

| Source | Fact |
|---|---|
| `cycleTypeCatalog.ts` | `cyc:delivery` active catalog entry |
| `ckc-index.json` + `ckc/08-delivery-implementation.md` | `ckc:studio:delivery` CONTENT VALIDATED BY MORRIS |
| `loadProductCkcCognitiveContent` | **requires** `cycleTypeId` — no project-level CKC artifact |
| D-ER-17 / S8 / PRR 02–03 | `activeCycleInstanceId` may be null; no invented CycleInstance |
| `resolveW2QualificationInputs` | still `CYCLE_NOT_QUALIFIED` without cycle |
| ON MAIN `w3cPostEvidenceLoop` | used `resolveW2QualificationInputs` → Project-only W3-C fail-closed |
| Product Completion INT-07 | uses `cyc:delivery` **with** CycleInstance — ≠ Project-only contract |

### Anti-claims proven (LOCAL oracle)

`akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts`:
- Project-only resolver returns `projectScoped=true`, `cycleTypeId=cyc:delivery`
- CKC markdown loads (`ckc:studio:delivery`)
- **No** CycleInstance created
- Options remain `CYCLE_NOT_QUALIFIED`

### Explicit gap

**Successful CKC load ≠ doctrinal applicability closed** for Project-only Generic post-Evidence.

### Options for Morris

| Opt | Description | Impact |
|---|---|---|
| **A** | Adopt `cyc:delivery` as Project-scoped post-Evidence cognitive orientation (guidance only) | Keep current candidate; close R1 by Morris GO |
| **B** | Restore fail-closed (`CYCLE_NOT_QUALIFIED` / no Project-scoped CKC) | W3-C Project-only soft/hard fail as ON MAIN; EP-S2-08 W3-C resume stays gap |
| **C** | Allow W3-C with **null CKC** section when project-scoped (no cycleTypeId selection) | Removes invented orientation; uses existing null-CKC reasoning seam |

**Local retention:** candidate code kept pending Morris; clearly marked OPEN in comments + PRR.

---

## 5. R2 — UI / Pilote B5/B6

### Added

`epS208.proof01.piloteSurface.b5b6.ui.test.tsx` — REAL `TrajectorySurface` (jsdom); actions mocked at boundary.

| Case | Assertions |
|---|---|
| B5 continue | headline/nextStep/kind; `requiresHumanDecision=non`; authority Recommendation≠HD; **no** `w3c-propose-trajectory`; no decide |
| B5 recover (no HD) | same-scope note; no propose CTA; server Options mock returns `CYCLE_NOT_QUALIFIED` |
| B6 Nora unavailable | `w3c-nora-analysis` shows durable reason; UNCLAIMED; remount via reconcile preserves reason; no HD |

### Limits (honest)

- jsdom Pilote projection ≠ browser `/studio` remount E2E (**KNOWN GAP**)
- Dual ConversationSurface F3 vs TrajectorySurface W3-C consistency still **OPEN**
- B2 remains process remount DET (not widened to browser automation)

Integrated OA B2/B5/B6 oracle still **PASS actual**.

---

## 6. R3 — Handoff traceability

| Layer | Identifier |
|---|---|
| Historical prior handoff tip | `4c1397dee3689a20e20d15225bfa88072ab73b61` |
| Historical prior handoff blob | `8faef48113c1414e551b31f51dcd575c57704f77` |
| This pack content | sealed below **before** push |
| New remote tip/blob | **verified after push → Cursor return only** |

No contradictory “final tip equals content hash of itself” rewrite loop.

---

## 7. Changed files (corrective pass delta on same dirty Product WT)

| Path | Kind |
|---|---|
| `w2/qualificationInputs.ts` | R1 OPEN documentation + retained candidate |
| `w2/w3cPostEvidenceLoop.ts` | prior PROOF-01 behavior (unchanged this pass) |
| `akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts` | prior B2/B5/B6 |
| `akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts` | **NEW** R1 oracle |
| `epS208.proof01.piloteSurface.b5b6.ui.test.tsx` | **NEW** R2 UI |
| PRR 03/06/08/09 + manifest | R24 LOCAL sync (R1 OPEN noted) |
| `.tmp-sfia-review/chatgpt-review.md` | this pack |

---

## 8. Complete Product W2 diffs

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts b/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
index 370ba80d..c5449ffd 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts
@@ -106,3 +106,86 @@ export async function resolveW2QualificationInputs(input: {
     },
   };
 }
+
+/**
+ * EP-S2-08 / Option B — CKC orientation for W3-C post-Evidence Nora only.
+ *
+ * When an active CycleInstance exists, reuse its cycleTypeId (same as W2 Options).
+ * When Project-only (no cycle — S8 / D-ER-17), LOCAL CANDIDATE uses catalog key
+ * `cyc:delivery` to load product-native CKC markdown via the existing
+ * `loadProductCkcCognitiveContent` seam (requires a cycleTypeId; no project-level CKC).
+ *
+ * R1 (CRITICAL REVIEW) — **OPEN / MORRIS DECISION REQUIRED**:
+ * Catalog + CKC bytes for `cyc:delivery` EXIST and CONTENT VALIDATED, but there is
+ * **no** explicit Product contract that Project-only Generic post-Evidence SHALL
+ * select delivery orientation. Successful CKC load ≠ doctrinal applicability closed.
+ * Anti-claims retained: ≠ invent CycleInstance · ≠ authorize W2 Options
+ * (`resolveW2QualificationInputs` still `CYCLE_NOT_QUALIFIED`) · ≠ HumanDecision.
+ *
+ * Options for Morris: (A) adopt delivery as Project-scoped post-Evidence cognitive
+ * orientation; (B) restore fail-closed `CYCLE_NOT_QUALIFIED` for W3-C CKC when no
+ * cycle; (C) allow W3-C with null CKC section when project-scoped (no cycleTypeId).
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

## 9. Complete R24 PRR diffs

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 77ee95a6..944520fc 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -248,3 +248,7 @@ Project (`activeCycleInstanceId=null`) → Generic PREPARE (no fictive cycle) 
 **Late Evidence:** after frozen tech RB, rematerialize with expanded Evidence set → `IDEMPOTENCY_CONFLICT` (no silent frozen rewrite).
 
 **Anti-claims:** ≠ L3 GLOBAL CLOSED · ≠ REAL · ≠ mutating Generic Product PASS · ≠ invent CycleInstance · ≠ EP-S2-05/08 closed · Tool-First Nora first-prompt + multi-path unclaimed redaction closed DET (CORR-CI-623-01/02).
+
+### LOCAL CANDIDATE — EP-S2-08-PROOF-01 (2026-10-28) — Project-scoped W3-C CKC
+
+> **Epistemic class:** **LOCAL CANDIDATE** on Product branch `feat/akg-m5-ep-s2-08-proof-01` @ base `3fb84630…` · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ CURRENT ON MAIN**. Behavior delta (R24): `runW3cPostEvidenceLoop` loads CKC via `resolvePostEvidenceCkcContext` — when `activeCycleInstanceId=null`, LOCAL candidate uses catalog key `cyc:delivery` for `loadProductCkcCognitiveContent` **without inventing CycleInstance / HumanDecision**. W2 Options/`resolveW2QualificationInputs` still refuse with `CYCLE_NOT_QUALIFIED`. **R1 OPEN — MORRIS DECISION REQUIRED:** catalog/CKC bytes exist (CONTENT VALIDATED) but no explicit Product contract that Project-only Generic post-Evidence SHALL select delivery; load success ≠ applicability closed. Options: (A) adopt delivery orientation; (B) restore fail-closed; (C) null CKC when project-scoped. B2 DET remount + B5/B6 jsdom Pilote surface proven locally. EP-S2-08 remains **PARTIAL**. ≠ EP-S2-08 PASS · ≠ REAL · ≠ L4 · ≠ browser `/studio` E2E.
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
index db5716f1..22611041 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -222,3 +222,13 @@ Do **not** conflate Generic PREPARE eligibility with Artifact continuation. DETE
 | Post-merge CI `#40526990871` @ `6c8b661c…` | Detect / Typecheck / Lint / Build / Vitest / Modeled Governance / Secret scan / Trailing whitespace / **Required Gate SUCCESS** | CI FACT CURRENT ON MAIN |
 
 **Fake/Real:** Cursor = TestOnlyRealExecutionLaunchPort · FS OBSERVED = real temp worktree · O8 EvidenceReader = DET substitution bounded · REAL Cursor / OpenAI LIVE **NOT PROVEN**. Historical Pass 05 « 17 PASS / 105 PASS / dirty LOCAL » counts remain valid as **pre-merge handoff facts**, not re-asserted as Cycle 14 local re-runs.
+
+### LOCAL CANDIDATE — EP-S2-08-PROOF-01 (2026-10-28) — B2/B5/B6 Pilote resume
+
+| Suite / oracle | Result | Proof level |
+|---|---|---|
+| `akgM5L3S2.epS208.proof01.piloteResume.integrated.d0.test.ts` | B2 remount · B5 governed continue/recover (propose≠decide; `CYCLE_NOT_QUALIFIED` without cycle) · B6 Nora unavailable | **LOCAL DET CANDIDATE** ≠ ON MAIN |
+| `akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts` | R1 anti-authority: CKC load + no CycleInstance + Options `CYCLE_NOT_QUALIFIED` · applicability **OPEN** | **LOCAL DET** · R1 OPEN |
+| `epS208.proof01.piloteSurface.b5b6.ui.test.tsx` | B5/B6 TrajectorySurface jsdom Pilote projection (reco/CTA/Nora unavailable) | **LOCAL jsdom** ≠ browser E2E |
+
+Ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** (Product/OA/GERM/LPS + jsdom Pilote). ≠ browser `/studio` remount · ≠ EP-S2-08 PASS · ≠ REAL · **R1 OPEN Morris**.
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0aaab505..20892ad3 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -15,7 +15,7 @@
 | Option B Product + S8 + R-S8-01…04 + CORR-CI-623-01/02 | **CURRENT ON MAIN DET** (PR #623 MERGED · CI #40526990871 SUCCESS) | preserve; no Product mutation in Cycle 14 |
 | EP-S2-01…04, 06–07, 09–12 | **PASS** at tested DET scope | preserve senses |
 | EP-S2-05 Mission Evidence Project-only | **NOT PROVEN** | **Owner:** Product / construction Studio. **Exit (distinct):** Project-only context + Mission semantic **actually applicable** (no invented `PRODUCT_MISSION` stamp) + Mission Evidence ingested with Project/EC/Attempt identity + provenance + RB/CE consume it + Product Result honest; `generic_materialization` **≠** Mission Evidence. **Morris decision** only if semantic/model evolution required. **≠** automatic L4 assignment. |
-| EP-S2-08 Post-Evidence / rehydration (Nora/Pilote UX) | **PARTIAL** | **Owner:** Product / continuité Nora–Pilote. **Covered now:** durable GERM/W3-C technical rehydrate DET on main. **Exit (distinct):** durable resume with Project/EC/Attempt identity + Evidence/reserves preserved + Nora/Pilote restitution effective + governed continue/replan at decided scope + no invented HumanDecision; proofs Product/UX applicable. **Trajectory candidate:** L4 **or** next applicable capacity — **confirm via Roadmap + Morris GO** (L4 **not** automatically authorized / decided by this debt). |
+| EP-S2-08 Post-Evidence / rehydration (Nora/Pilote UX) | **PARTIAL** | **Owner:** Product / continuité Nora–Pilote. **Covered now (ON MAIN):** durable GERM/W3-C technical rehydrate DET. **LOCAL CANDIDATE (EP-S2-08-PROOF-01 @ `3fb84630…`, 2026-10-28 — ≠ ON MAIN / GI NOT AUTHORIZED):** B2 process remount DET; B5/B6 jsdom TrajectorySurface Pilote projection (`epS208.proof01.piloteSurface.b5b6.ui.test.tsx`) + integrated OA oracle; Project-scoped CKC candidate via `resolvePostEvidenceCkcContext`. **R1 OPEN — MORRIS:** `cyc:delivery` load success ≠ Project-only applicability closed (options A adopt / B fail-closed / C null CKC). **Still open:** browser `/studio` remount E2E; dual F3/W3-C surface consistency. **Exit:** Critical Review + Morris R1 + GI. ≠ EP-S2-08 PASS · L4 **not** auto-authorized. |
 | Late Evidence after frozen RB | Fail-closed `IDEMPOTENCY_CONFLICT`; **no** same-key supersession (**OPEN** policy) | Morris/OA — reopen policy or new Attempt |
 | Mutating Generic Product PASS | **NOT PROVEN** (honest UNCLAIMED) | Result Semantic GO if ever required |
 | generic_materialization Evidence (#618 gap) | **CLOSED AT DET SCOPE ON MAIN** via #623 · **≠** REAL E2E FS→Git→Review closure | REAL E2E remains KNOWN GAP / distinct proof |
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 788ea0f2..59ca9e44 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "d13787c0f629efe4"
+      "sha256_16": "bbbaf15d146fc63c"
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
+      "sha256_16": "b03b830d11e1780a"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "700ee3ee207a5434"
+      "sha256_16": "992efa8e4a1532f7"
     }
   ],
   "components": [

```

---

## 10. New / retained oracles (full files)

### 10.a Integrated B2/B5/B6

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

### 10.b R1 semantic

Path: `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.epS208.proof01.r1CkcSemantic.d0.test.ts`

```typescript
/**
 * EP-S2-08-PROOF-01 — R1 Project-scoped CKC semantic oracle (DET).
 *
 * Proves anti-authority facts for resolvePostEvidenceCkcContext.
 * Does NOT close doctrinal applicability of cyc:delivery for Project-only
 * post-Evidence — that remains OPEN for Morris (see pack R1 options).
 *
 * Sources consulted (existence ≠ Project-only applicability closed):
 * - cycleTypeCatalog cyc:delivery (active catalog entry)
 * - pkg CKC index → ckc:studio:delivery / 08-delivery-implementation.md
 * - loadProductCkcCognitiveContent requires cycleTypeId
 * - D-ER-17 / S8: activeCycleInstanceId may be null; no invented CycleInstance
 * - resolveW2QualificationInputs: CYCLE_NOT_QUALIFIED without cycle
 * - ON MAIN w3cPostEvidenceLoop used resolveW2QualificationInputs (fail-closed)
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
  resolvePostEvidenceCkcContext,
  resolveW2QualificationInputs,
} from "@/features/project-assistant/w2/qualificationInputs";
import { loadProductCkcCognitiveContent } from "@/features/project-assistant/f2/ckcCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
} from "./w2Harness";

describe("EP-S2-08-PROOF-01 R1 — Project-scoped CKC anti-authority (DET)", () => {
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousExclusive: string | undefined;
  let dbPath: string;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_MORRIS_LOCAL_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_ACTOR_ID;
    previousExclusive = process.env.SFIA_STUDIO_OA_EXCLUSIVE;
    process.env.SFIA_STUDIO_MORRIS_LOCAL_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_ACTOR_ID = "actor:local-pilote";
    process.env.SFIA_STUDIO_OA_EXCLUSIVE = "0";
    dbPath = tempProductDbPath("ep08-r1");
  });

  afterEach(() => {
    cleanupW2TempDirs();
    if (previousMorris === undefined) delete process.env.SFIA_STUDIO_MORRIS_LOCAL_AUTHORITY;
    else process.env.SFIA_STUDIO_MORRIS_LOCAL_AUTHORITY = previousMorris;
    if (previousPilot === undefined) delete process.env.SFIA_STUDIO_LOCAL_PILOT_ACTOR_ID;
    else process.env.SFIA_STUDIO_LOCAL_PILOT_ACTOR_ID = previousPilot;
    if (previousExclusive === undefined) delete process.env.SFIA_STUDIO_OA_EXCLUSIVE;
    else process.env.SFIA_STUDIO_OA_EXCLUSIVE = previousExclusive;
  });

  it("Project-only: candidate orientation loads CKC bytes; no CycleInstance; Options stay CYCLE_NOT_QUALIFIED", async () => {
    const runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "ep08r1" });
    const oa = runtime.oa!;

    const created = await runtime.createProject({
      name: "demo",
      objective: "EP-S2-08 R1 Project-only CKC",
      context: "semantic anti-authority",
      criticality: "STANDARD",
      constraints: ["ZERO REAL", "R1 DET"],
      shortReference: "P01R1",
      idempotencyKey: "idem:ep08-p01-r1",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.project.projectId;

    const live0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(live0.ok).toBe(true);
    if (!live0.ok) return;
    expect(live0.livingProjectState.activeCycleInstanceId ?? null).toBeNull();

    const ckcCtx = await resolvePostEvidenceCkcContext({ oa, projectId });
    expect(ckcCtx.ok).toBe(true);
    if (!ckcCtx.ok) return;
    expect(ckcCtx.context.projectScoped).toBe(true);
    expect(ckcCtx.context.activeCycleInstanceId).toBeNull();
    expect(ckcCtx.context.cycleTypeId).toBe(
      POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
    );
    expect(POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID).toBe("cyc:delivery");

    // Existence of catalog/CKC content (load success ≠ doctrinal Project-only closed).
    const registryRoot = resolveProductDoctrineRegistryRoot();
    const content = loadProductCkcCognitiveContent({
      registryRoot,
      cycleTypeId: ckcCtx.context.cycleTypeId,
      packagePin: ckcCtx.context.packagePin,
    });
    expect(content).not.toBeNull();
    expect(content!.ckcId).toBe("ckc:studio:delivery");
    expect(content!.cycleTypeId).toBe("cyc:delivery");
    expect(content!.markdown.length).toBeGreaterThan(0);

    // W2 Options remain refuse — Project-scoped CKC ≠ cycle qualification.
    const qual = await resolveW2QualificationInputs({ oa, projectId });
    expect(qual.ok).toBe(false);
    if (!qual.ok) {
      expect(qual.code).toBe("CYCLE_NOT_QUALIFIED");
    }

    const live1 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(live1.ok).toBe(true);
    if (live1.ok) {
      expect(live1.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }
  });
});

```

### 10.c R2 UI

Path: `projects/sfia-studio/app/__tests__/pre-m6-product-ui/epS208.proof01.piloteSurface.b5b6.ui.test.tsx`

```tsx
/**
 * EP-S2-08-PROOF-01 — R2 Pilote-facing TrajectorySurface B5/B6 (jsdom).
 *
 * Mounts REAL TrajectorySurface. Server actions mocked at the boundary only.
 * Ceiling: jsdom Pilote projection — ≠ browser /studio E2E remount.
 *
 * @vitest-environment jsdom
 */
import {
  act,
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TrajectorySurface } from "@/features/pre-m6-product-ui/surfaces/TrajectorySurface";
import {
  nextReconcileContinueDelayMs,
  RECONCILE_CONTINUE_BACKOFF_MAX_MS,
} from "@/features/project-assistant/w2/reconcileContinuePolicy";
import { NORA_ANALYSIS_UNAVAILABLE_RESERVE } from "@/features/project-assistant/w2/w3bProductTerminalProjection";

const {
  proposeMock,
  decideMock,
  inspectMock,
  authorizeMock,
  prepareContractMock,
  confirmMock,
  executeSelectMock,
  executeStartMock,
  executeCompleteMock,
  materializeMock,
  reconcileMock,
  deriveContinuityMock,
  resolveContextMock,
  readReviewItemMock,
  readActiveDecisionSubjectMock,
  readGovernedExecutionContinuityMock,
  readRecoveryExecutionBindingMock,
  readRecoveryOwnedDecisionContinuityMock,
  readPreCycleMock,
  readApprovalMock,
  readPreparedCycleMock,
} = vi.hoisted(() => ({
  proposeMock: vi.fn(),
  decideMock: vi.fn(),
  inspectMock: vi.fn(),
  authorizeMock: vi.fn(),
  prepareContractMock: vi.fn(),
  confirmMock: vi.fn(),
  executeSelectMock: vi.fn(),
  executeStartMock: vi.fn(),
  executeCompleteMock: vi.fn(),
  materializeMock: vi.fn(),
  reconcileMock: vi.fn(),
  deriveContinuityMock: vi.fn(),
  resolveContextMock: vi.fn(),
  readReviewItemMock: vi.fn(),
  readActiveDecisionSubjectMock: vi.fn(),
  readGovernedExecutionContinuityMock: vi.fn(),
  readRecoveryExecutionBindingMock: vi.fn(),
  readRecoveryOwnedDecisionContinuityMock: vi.fn(),
  readPreCycleMock: vi.fn(),
  readApprovalMock: vi.fn(),
  readPreparedCycleMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantConversationContinuityAction: vi.fn(async () => ({
    ok: true,
    transcriptAvailability: "empty",
    messages: [],
    journal: { cycleInstanceId: null, entries: [] },
  })),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantResolveLegacyM3DocsWriteAction: vi.fn(),
}));

vi.mock("@/features/project-assistant/w2/actions", () => ({
  w2ProposeTrajectoryOptionsAction: (...a: unknown[]) => proposeMock(...a),
  w2DecideTrajectoryAction: (...a: unknown[]) => decideMock(...a),
  w2InspectExecutionContractAction: (...a: unknown[]) => inspectMock(...a),
  w2ConfirmExecutionContractAction: (...a: unknown[]) => confirmMock(...a),
  w2AuthorizeExecutionContractAction: (...a: unknown[]) => authorizeMock(...a),
  w2AmendExecutionContractAction: vi.fn(),
  w2PrepareExecutionContractAction: (...a: unknown[]) =>
    prepareContractMock(...a),
  w2GovernedExecuteSelectAction: (...a: unknown[]) => executeSelectMock(...a),
  w2GovernedExecuteStartAction: (...a: unknown[]) => executeStartMock(...a),
  w2GovernedExecuteCompleteAction: (...a: unknown[]) =>
    executeCompleteMock(...a),
  w2GovernedExecuteCancelAction: vi.fn(),
  w2MaterializeProductOutcomeAction: (...a: unknown[]) =>
    materializeMock(...a),
  w2ReconcileGovernedExecutionAction: (...a: unknown[]) => reconcileMock(...a),
  w2DeriveGovernedExecutionContinuityAction: (...a: unknown[]) =>
    deriveContinuityMock(...a),
  w2ResolveProductExecutionContextAction: (...a: unknown[]) =>
    resolveContextMock(...a),
  w2ReadExecutionReviewItemAction: (...a: unknown[]) =>
    readReviewItemMock(...a),
  w2RehydrateProductOutcomeAction: vi.fn(),
  w2RematerializeDocsWriteEvidenceAction: vi.fn(),
  w2ReadActiveDecisionSubjectAction: (...a: unknown[]) =>
    readActiveDecisionSubjectMock(...a),
  w2ReadCurrentGovernedExecutionContinuityAction: (...a: unknown[]) =>
    readGovernedExecutionContinuityMock(...a),
  w2ReadRecoveryExecutionBindingAction: (...a: unknown[]) =>
    readRecoveryExecutionBindingMock(...a),
  w2ReadRecoveryOwnedDecisionContinuityAction: (...a: unknown[]) =>
    readRecoveryOwnedDecisionContinuityMock(...a),
  w2PrepareRecoveryDocsWriteAction: vi.fn(),
  w2ReadProjectHistoryAction: vi.fn().mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "unused",
  }),
}));

vi.mock("@/features/project-assistant/preCycleCandidateTrajectoryActions", () => ({
  projectAssistantReadPreCycleCandidateTrajectoryAction: (...a: unknown[]) =>
    readPreCycleMock(...a),
  projectAssistantPrepareCandidateTrajectoryAction: vi.fn(),
  projectAssistantReadCandidateTrajectoryApprovalPresentationAction: (
    ...a: unknown[]
  ) => readApprovalMock(...a),
  projectAssistantApprovePreCycleCandidateTrajectoryAction: vi.fn(),
  prepareCycleFromValidatedTrajectoryAction: vi.fn(),
  readPreparedTrajectoryCycleAction: (...a: unknown[]) =>
    readPreparedCycleMock(...a),
  startPreparedTrajectoryCycleAction: vi.fn(),
}));

const PROJECT_ID = "prj:ep08-p01-ui";
const EC_ID = "xct:w3a:dec:w2-trj:ep08-p01-ui";
const ATTEMPT_ID = "xat:ep08-p01-ui";
const UNAVAILABLE_REASON = "Nora provider controlled failure (DET)";

function activeContinuity() {
  return {
    ok: true as const,
    kind: "active" as const,
    decisionRef: "dec:w2-trj:ep08-p01-ui",
    contract: {
      executionContractId: EC_ID,
      version: 2,
      status: "confirmed",
      action: "studio.cursor.generalist.execute",
      target: "studio.cursor.generalist.workspace",
      scope: "studio.cursor.generalist.authorized_contract",
      requiredAuthority: "N2",
      constraints: ["PRODUCT_GOVERNED", "EFFECT_CLASS:local-write"],
      stopConditions: [],
      requiredCapabilities: ["cap:studio.cursor.generalist"],
      reversibility: "reversible",
      semanticFingerprint: "fp-ep08-p01-ui",
      effectConfirmationRequired: true,
      effectConfirmationLevel: "N2",
      inspectionDisclosure: {
        action: "studio.cursor.generalist.execute",
        technicalTarget: "studio.cursor.generalist.workspace",
        scope: "studio.cursor.generalist.authorized_contract",
        targetRepositoryRef: "acme/w2-harness",
        targetPath: null,
        scopeIn: null,
        scopeOut: null,
        createOrModify: null,
        noDelete: null,
        objective: "EP-S2-08 UI proof",
        artifactType: null,
        artifactBrief: null,
        contentRequirements: null,
        validationExpectations: null,
        expectedOutputs: ["Fichiers créés/modifiés dans le scope autorisé"],
        evidenceRequirements: ["evreq:local-write"],
        requiredAuthority: "N2",
        requiredCapabilities: ["cap:studio.cursor.generalist"],
        constraints: ["PRODUCT_GOVERNED"],
        stopConditions: [],
        reversibility: "reversible",
        contractVersion: 2,
        executionContractId: EC_ID,
        semanticFingerprint: "fp-ep08-p01-ui",
        disclosureComplete: true,
        incompletenessCode: null,
      },
    },
    inspection: {
      executionContractId: EC_ID,
      contractVersion: 2,
      semanticFingerprint: "fp-ep08-p01-ui",
      statusLabel: "INSPECTION SUFFISANTE",
      inspectionSufficient: true,
      attestationRef: "insp:ep08-p01-ui",
      attestedVersion: 2,
      staleAttestationRef: null,
      reinspectionRequired: false,
      reason: null,
      grantsAuthority: false,
    },
    requiredInspectedFacts: ["action", "target", "scope"],
  };
}

function productUnclaimed(reservations: readonly string[] = []) {
  return {
    outcome: "UNCLAIMED" as const,
    businessHeadline: "Résultat technique non encore prouvé",
    businessReason: "ClaimEvaluation NOT_PROVEN — Product PASS refused",
    claimAllowed: false,
    evidenceId: "ev:w3b:ep08-p01-ui",
    reviewBundleId: "rb:w3b:ep08-p01-ui",
    claimEvaluationId: "clm:w3b:ep08-p01-ui",
    claimEvaluationStatus: "not_proven",
    contractResultVerdict: "NOT_SATISFIED",
    evidenceStatus: "available",
    evidenceSummary: "Verification Evidence present",
    reviewBundleCompleteness: "partial",
    governedBoundary: "Fake Cursor boundary",
    technicalDetail: {
      attemptId: ATTEMPT_ID,
      attemptStatus: "succeeded",
      resultRef: "res:ep08-p01-ui",
      errorRef: null,
      stopReason: null,
      executionContractId: EC_ID,
      executionContractVersion: 2,
    },
    reservations: [...reservations],
    antiClaims: {
      ready: false,
      w3Closed: false,
      productCompletionComplete: false,
      runtimeV3Adopted: false,
      realProven: false,
      cycleAutoClosed: false,
      projectArchived: false,
    },
    cycleInstanceClosed: false,
    projectArchived: false,
    noraInvoked: true,
    replanInvoked: false,
    realExecution: false,
  };
}

function postEvidence(input: {
  kind: "continue" | "recover";
  analysisText: string | null;
  analysisUnavailableReason: string | null;
  requiresHumanDecision?: boolean;
}) {
  return {
    ok: true as const,
    noraInvoked: true,
    replanInvoked: false,
    analysisText: input.analysisText,
    analysisUnavailableReason: input.analysisUnavailableReason,
    analysisProviderId: "fake-test",
    recommendation: {
      kind: input.kind,
      headline:
        input.kind === "continue"
          ? "Continuer sur la lignée durable"
          : "Reprise technique same-scope",
      rationale: "Recommendation ≠ HumanDecision — DET Pilote surface",
      nextStep:
        input.kind === "continue"
          ? "Continuer l'exécution gouvernée sans nouvelle décision structurelle"
          : "Diagnostiquer puis reprendre same-scope si autorisé",
      requiresHumanDecision: input.requiresHumanDecision ?? false,
      authority: "none" as const,
      gateConsumed: false,
      decisionCreated: false,
      attemptAutoLaunchNextCycle: false,
      recommendNextGateStatus: null,
      nextActionCode: input.kind,
    },
    lpsVersion: 3,
    evidenceId: "ev:w3b:ep08-p01-ui",
    reviewBundleId: "rb:w3b:ep08-p01-ui",
    claimEvaluationId: "clm:w3b:ep08-p01-ui",
    productOutcome: "UNCLAIMED",
    executionReport: null,
  };
}

function projection(stage: "RUNNING" | "POST_EVIDENCE_COMPLETE") {
  return {
    projectId: PROJECT_ID,
    activeCycleInstanceId: null,
    executionContractId: EC_ID,
    executionContractVersion: 2,
    executionContractStatus: "confirmed",
    attemptId: ATTEMPT_ID,
    attemptStatus: stage === "RUNNING" ? "running" : "succeeded",
    stage,
    productOutcome: stage === "POST_EVIDENCE_COMPLETE" ? "UNCLAIMED" : null,
    evidenceId: stage === "POST_EVIDENCE_COMPLETE" ? "ev:w3b:ep08-p01-ui" : null,
    reviewBundleId:
      stage === "POST_EVIDENCE_COMPLETE" ? "rb:w3b:ep08-p01-ui" : null,
    claimEvaluationId:
      stage === "POST_EVIDENCE_COMPLETE" ? "clm:w3b:ep08-p01-ui" : null,
    claimEvaluationStatus:
      stage === "POST_EVIDENCE_COMPLETE" ? "not_proven" : null,
    postEvidencePresent: stage === "POST_EVIDENCE_COMPLETE",
    nextDeterministicAction:
      stage === "RUNNING" ? ("AWAIT_EXTERNAL" as const) : ("NONE" as const),
    humanDecisionRequired: false,
    recoveryRequired: false,
    reason: null,
    blockingCode: null,
    context: null,
  };
}

async function flush(ms = 0): Promise<void> {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
}

async function paintTerminal(extra: {
  product: ReturnType<typeof productUnclaimed>;
  postEvidence: ReturnType<typeof postEvidence>;
}) {
  reconcileMock.mockImplementation(async () => ({
    ok: true as const,
    intent: "continue" as const,
    projection: projection("POST_EVIDENCE_COMPLETE"),
    transitionsApplied: [] as string[],
    stoppedReason: "stable",
    product: extra.product,
    postEvidence: extra.postEvidence,
  }));
  render(
    <TrajectorySurface
      decisionWorkflowMode="legacy_cta"
      projectId={PROJECT_ID}
    />,
  );
  await flush(0);
  await flush(0);
  await flush(nextReconcileContinueDelayMs(1));
  await flush(RECONCILE_CONTINUE_BACKOFF_MAX_MS);
}

beforeEach(() => {
  vi.useFakeTimers();
  for (const m of [
    proposeMock,
    decideMock,
    inspectMock,
    authorizeMock,
    prepareContractMock,
    confirmMock,
    executeSelectMock,
    executeStartMock,
    executeCompleteMock,
    materializeMock,
    reconcileMock,
    deriveContinuityMock,
    resolveContextMock,
    readReviewItemMock,
    readActiveDecisionSubjectMock,
    readGovernedExecutionContinuityMock,
    readRecoveryExecutionBindingMock,
    readRecoveryOwnedDecisionContinuityMock,
    readPreCycleMock,
    readApprovalMock,
    readPreparedCycleMock,
  ]) {
    m.mockReset();
  }
  readActiveDecisionSubjectMock.mockResolvedValue({ ok: true, kind: "none" });
  readGovernedExecutionContinuityMock.mockResolvedValue(activeContinuity());
  readRecoveryExecutionBindingMock.mockResolvedValue({
    ok: true,
    binding: null,
    recoveryContextPresent: false,
  });
  readRecoveryOwnedDecisionContinuityMock.mockResolvedValue({
    ok: true,
    kind: "none",
  });
  readPreCycleMock.mockResolvedValue({
    ok: true,
    candidate: null,
    activeCycleInstanceId: null,
    hasCurrentNextCycleRecommendation: false,
  });
  readApprovalMock.mockResolvedValue({
    ok: true,
    presentation: null,
    alreadyDecided: null,
    activeCycleInstanceId: null,
  });
  readPreparedCycleMock.mockResolvedValue({ ok: true, prepared: null });
  deriveContinuityMock.mockResolvedValue({
    ok: true,
    projection: projection("RUNNING"),
  });
  resolveContextMock.mockResolvedValue({
    ok: false,
    code: "UNUSED",
    message: "",
  });
  proposeMock.mockResolvedValue({
    ok: false,
    code: "CYCLE_NOT_QUALIFIED",
    message:
      "Aucun cycle qualifié n'est actif — la qualification doit précéder les options.",
  });
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("EP-S2-08-PROOF-01 R2 — Pilote TrajectorySurface B5/B6 (jsdom)", () => {
  it("B5 continue — recommendation visible; no HD; no structural Options CTA", async () => {
    await paintTerminal({
      product: productUnclaimed(),
      postEvidence: postEvidence({
        kind: "continue",
        analysisText: "Analyse Nora DET continue",
        analysisUnavailableReason: null,
      }),
    });

    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
    expect(screen.getByTestId("w3c-post-evidence")).toBeVisible();
    expect(screen.getByTestId("w3c-recommendation-headline")).toHaveTextContent(
      /Continuer sur la lignée durable/,
    );
    expect(screen.getByTestId("w3c-next-step")).toHaveTextContent(/Continuer/);
    expect(screen.getByTestId("w3c-recommendation-kind")).toHaveTextContent(
      "continue",
    );
    expect(screen.getByTestId("w3c-requires-human-decision")).toHaveTextContent(
      "non",
    );
    expect(screen.getByTestId("w3c-recommendation-authority")).toHaveTextContent(
      /Recommendation ≠ HumanDecision/,
    );
    // Project-only continue: no structural propose CTA invented.
    expect(screen.queryByTestId("w3c-propose-trajectory")).toBeNull();
    expect(proposeMock).not.toHaveBeenCalled();
    expect(decideMock).not.toHaveBeenCalled();
  });

  it("B5 recover (no HD) — same-scope note; Options remain cycle-gated if proposed", async () => {
    await paintTerminal({
      product: productUnclaimed(),
      postEvidence: postEvidence({
        kind: "recover",
        analysisText: "Analyse Nora DET recover",
        analysisUnavailableReason: null,
        requiresHumanDecision: false,
      }),
    });

    expect(screen.getByTestId("w3c-recommendation-kind")).toHaveTextContent(
      "recover",
    );
    expect(screen.getByTestId("w3c-requires-human-decision")).toHaveTextContent(
      "non",
    );
    expect(screen.getByTestId("w3c-same-scope-recovery-note")).toBeVisible();
    expect(screen.queryByTestId("w3c-propose-trajectory")).toBeNull();
    // Honest Project-only Options refuse remains available at the server boundary.
    const refused = await proposeMock({ projectId: PROJECT_ID });
    expect(refused).toEqual(
      expect.objectContaining({ ok: false, code: "CYCLE_NOT_QUALIFIED" }),
    );
  });

  it("B6 Nora unavailable — reason intelligible; UNCLAIMED; remount preserve via reconcile", async () => {
    const pe = postEvidence({
      kind: "continue",
      analysisText: null,
      analysisUnavailableReason: UNAVAILABLE_REASON,
    });
    // When postEvidence.ok=true with unavailable analysis, Pilote sees reason on
    // w3c-nora-analysis. withNoraUnavailableReserve applies when postEvidence fails.
    await paintTerminal({
      product: productUnclaimed([NORA_ANALYSIS_UNAVAILABLE_RESERVE]),
      postEvidence: pe,
    });

    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
    expect(screen.getByTestId("w3c-nora-analysis")).toHaveTextContent(
      UNAVAILABLE_REASON,
    );
    expect(screen.getByTestId("w3c-requires-human-decision")).toHaveTextContent(
      "non",
    );
    expect(screen.queryByTestId("w3c-propose-trajectory")).toBeNull();

    cleanup();

    // Remount: auto-resume from RUNNING → same durable terminal (process remount analog).
    deriveContinuityMock.mockResolvedValue({
      ok: true,
      projection: projection("RUNNING"),
    });
    await paintTerminal({
      product: productUnclaimed([NORA_ANALYSIS_UNAVAILABLE_RESERVE]),
      postEvidence: pe,
    });
    expect(screen.getByTestId("w3c-nora-analysis")).toHaveTextContent(
      UNAVAILABLE_REASON,
    );
    expect(screen.getByTestId("w3b-product-outcome")).toHaveAttribute(
      "data-outcome",
      "UNCLAIMED",
    );
    expect(decideMock).not.toHaveBeenCalled();
  });
});

```

---

## 11. Proof matrix

| Proof | Class | Notes |
|---|---|---|
| B2 remount | BEHAVIOR PROVEN DET (process) | OA remount; ≠ browser E2E |
| B5 continuation | BEHAVIOR PROVEN DET + jsdom Pilote | continue/recover; Options cycle-gated |
| B6 Nora unavailable | BEHAVIOR PROVEN DET + jsdom Pilote | reason on `w3c-nora-analysis`; UNCLAIMED |
| R1 CKC applicability | **OPEN** | anti-authority proven; selection undecided |

B1/B3/B4 regressions: S8 + lotsAC + W3-C + frontDoor + trajectorySurface — **PASS actual** (82 tests in combined reg run).

---

## 12. Validations

| Check | Result |
|---|---|
| PROOF-01 + R1 + R2 UI | **PASS actual** (7/7) |
| S8 / lotsAC / W3-C / frontDoor / traj surface | **PASS actual** (82/82) |
| `npx tsc --noEmit` | **PASS actual** (exit 0, empty diagnostics) |
| `npm run lint` | **PASS actual** (pre-existing unused-var warnings only) |
| Build | **NOT RUN** |
| Full Vitest | **NOT RUN** |
| Required Gate CI | **NOT RUN** (no project push) |
| PRR digests | refreshed locally for 03/08/09 (06 unchanged bytes) |

---

## 13. R23 / R24

- R23: investigation before further Product mutation; R1 not silently closed.
- R24: PRR 03/08/09 LOCAL overlays updated for R1 OPEN + R2 UI oracles; digests refreshed. Roadmap tip **not** promoted.

---

## 14. Review Handoff (pre-publication)

Status: **REQUIRED / PUBLISH-IN-CYCLE** after this pack write.

| Field | Value |
|---|---|
| Branch | `sfia/review-handoff` |
| Canonical | `sfia-review-handoff/latest-chatgpt-review.md` |
| Prior tip (historical) | `4c1397dee3689a20e20d15225bfa88072ab73b61` |
| Prior blob (historical) | `8faef48113c1414e551b31f51dcd575c57704f77` |
| This publication tip/blob | **see Cursor return after verified FF push** |

Exception: single-file handoff only · no Product commit/push/PR.

---

## 15. Debts / decisions

| Item | Status |
|---|---|
| R1 `cyc:delivery` Project-only applicability | **OPEN — MORRIS** (A/B/C) |
| Browser `/studio` remount E2E | KNOWN GAP |
| Dual F3/W3-C surface | OPEN |
| EP-S2-05 / Late Evidence / HD semantics | unchanged |
| Project GI | NOT AUTHORIZED |

---

## 16. Suggested next gate / verdict

Next: Morris decides R1 (A/B/C) → Critical re-review of residual → GI only under separate GO.

**Recommended verdict:** `STOP — MORRIS DECISION REQUIRED` (R1 open).

Anti-claims preserved.
