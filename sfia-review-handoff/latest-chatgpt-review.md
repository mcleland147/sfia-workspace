# ChatGPT Review Pack — SFIA Studio MW3 Recovery-2 (bounded inference rematerialization)

| Field | Value |
| --- | --- |
| **Timestamp (Europe/Paris)** | 2026-09-02 19:37:22 CEST |
| **Timestamp (UTC)** | 2026-09-02T17:37:22Z |
| **Cycle** | Repository Execution / Recovery-2 |
| **Type** | RUN |
| **Profile** | CRITICAL |
| **Repository** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-mw3-recovery` |
| **Branch** | `recovery/mw3-delivery-rematerialization-ab61c18a` · **LOCAL ONLY** |
| **Entry HEAD** | `989c6e83ef1dd2df5b5ef6a49adf6f8bf2ea9ad6` (docs-only Recovery-1 STOP pack tip) |
| **origin/main** | `c352441c2a6ab012aecae7606e0bb9af8fc9e7e7` |
| **MW3_RECOVERY2_IMPLEMENTATION_ANCHOR** | `c76ae54f2aba6d40d0082f6f93775e72cbaa2ff2` |
| **Review Pack docs commit** | `cd7e27d8fbcf025c83e9167bb4e520f645218cec` |
| **Final local tip at pack pin** | `cd7e27d8fbcf025c83e9167bb4e520f645218cec` (this pin commit is a docs-only descendant; LOCAL GIT TRUTH WINS) |
| **Historical implementation** | `806e814420bd4049297edc910920d93fb6fc8037` — **LOST / provenance-only** |
| **source_handoff_commit** | `ab61c18a041b639cbaf1654980de3f7b87e060c8` |
| **source_handoff_blob** | `f6453c14d093b7ea3de04c78f496ecf6b618a3c4` |
| **Recovery-1 handoff** | `cbdcafcd2d5c945f3ef103e2108180da8e1c4b4d` |

---

## A. Metadata / local truth discrepancy

LOCAL GIT TRUTH WINS.

| Reported | SHA | Role |
| --- | --- | --- |
| Recovery-1 user report tip | `989c6e83ef1dd2df5b5ef6a49adf6f8bf2ea9ad6` | **actual branch HEAD at Recovery-2 entry** |
| Recovery-1 published pack recorded | `b3681be4f921436eb6f58dbb6f3a8a48efc53300` | parent of `989c6e83` (docs-only SHA pin commit) |
| Recovery-2 entry | `989c6e83` | docs-only descendant of `c352441c` · **app tree identical to base** |
| Recovery-2 implementation | `c76ae54f2aba6d40d0082f6f93775e72cbaa2ff2` | 19 app/test/eval files |
| Recovery-2 Review Pack | `cd7e27d8fbcf025c83e9167bb4e520f645218cec` | docs-only full Recovery-2 pack |
| Recovery-2 pin (this file) | docs-only descendant of `cd7e27d8` | LOCAL GIT TRUTH WINS after pin commit |

`989c6e83` = `b3681be4` + one docs commit that set pack HEAD SHA. No force/reset/amend of Recovery-1 evidence.

Entry `git diff --name-status c352441c -- projects/sfia-studio/app` was **empty**. STOP-R2-01 not triggered.

---

## B. Morris decisions

**Recovery-1 GO:** rematerialize from `ab61c18a` without inference — **STOP** (R-STOP-06/09).

**Recovery-2 GO consumed:** bounded inference of the 5 missing glue/type/eval files using base `c352441c` + surviving historical handoff evidence, without CRIT correction, with functional deterministic proof and without any claim of historical exact code parity.

**NOT performed:** CRIT-01/02/03 correction · MW3 REAL · closure · Cognitive Completion proof · runtime v3 · MW4 · Hosted Search · production routing · Responses compaction · architecture/persistence · package upgrade · Roadmap/C1/C5/doctrine · project push/PR/merge · force.

---

## C. Historical provenance

MW3 HISTORICAL IMPLEMENTATION SHA LOST
HISTORICAL BYTE/CODE PARITY NOT PROVEN

Immutable reconstruction source remains `ab61c18a` / blob `f6453c14`. Recovery-1 `cbdcafcd` is the STOP report ancestor of the then-current handoff tip.

---

## D. Sources read

Process: cycle execution template · routing guide (contract via GO) · operating model (contract via GO) · rules and guardrails.

Studio/MW3/v3 at base `c352441c` (not mutated): Build Doctrine · Roadmap · Product Completion cadrage · C5 · doc08 · v3 33/34/35.

Recovery objects: `ab61c18a:sfia-review-handoff/latest-chatgpt-review.md` · `cbdcafcd:sfia-review-handoff/latest-chatgpt-review.md`.

---

## E. Source inventory

| Class | Count | Method |
| --- | --- | --- |
| EXACT_CREATED | 8 | full contents from `ab61c18a` |
| EXACT_MODIFIED | 6 | unified diff from `ab61c18a` applied with `git apply` |
| INFERRED_MODIFIED | 5 | I01–I05 only |

---

## F. Exact reconstruction evidence

`git apply --check` then `git apply` of extracted 6-file patch: **OK**.

Created files written from closed ` ```typescript ` fences: **8/8**. Wrong-path `app/tests` glitch from `__` split was deleted before tests; final paths are `__tests__/`.

---

## G. BOUNDED INFERENCE MANIFEST

Phase B tsc errors (after exact 14, before I01–I05) mapped **only** to I01, I02, I05. I03 proven by eval D0 test (missing dispatch → scorer fail). I04: no tsc failure; added MW1/MW2-style re-export so historical 19-file inventory is complete; no runtime semantic alternative.

### I01 — `lib/nora-cognitive-runtime/index.ts`

- Classification: **EXPORT_GLUE**
- Confidence: **HIGH**
- Evidence: tsc TS2305 from MW3 tests, `mw3Observe.ts`, `orchestrateTurn.ts` (disposeContradiction, decideCognitiveStop, formatCognitiveStopPiloteNotice, Mw3ContradictionAssessmentInput, types)
- Alternative: exporting extra unused types — rejected as non-minimal
- Semantic risk: none (barrel only)
- Exact inferred diff:

```diff

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index b0757540..8fa24cfb 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -96,7 +96,23 @@ export {
 } from "./runNoraAgentsTurn";
 export type { RunNoraAgentsTurnInput } from "./runNoraAgentsTurn";
 export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
-export type { RunNoraCognitiveTurnInput } from "./runNoraCognitiveTurn";
+export type {
+  RunNoraCognitiveTurnInput,
+  Mw3ContradictionAssessmentInput,
+} from "./runNoraCognitiveTurn";
+export {
+  disposeContradiction,
+  dispositionIndependentOfStrategy,
+} from "./contradictionDisposition";
+export type {
+  ContradictionConflictInput,
+  ContradictionEvidencePointer,
+} from "./contradictionDisposition";
+export {
+  decideCognitiveStop,
+  cognitiveStopAllowsProductSuccess,
+  formatCognitiveStopPiloteNotice,
+} from "./cognitiveStop";
 export {
   decideCognitiveStrategy,
   normalizeCognitiveWorkloadSignals,

```

### I02 — `lib/nora-cognitive-runtime/types.ts`

- Classification: **TYPE_GLUE**
- Confidence: **HIGH**
- Evidence: exact `runNoraCognitiveTurn.ts` assigns `contradictionDisposition` / `cognitiveStopDecision` onto `NoraCognitiveTurnResult`; tests and `orchestrateTurn.toMw3Surface` read those fields; tsc TS2339 / TS2353
- Alternative: second result type — rejected (exact code uses `NoraCognitiveTurnResult`)
- Semantic risk: optional fields only when assessment supplied — preserves CRIT-01 (no assessment ⇒ no fields)
- Exact inferred diff:

```diff

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index 53ef6442..6bf267fd 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -6,6 +6,8 @@

 import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
 import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
+import type { ContradictionDispositionResult } from "./contradictionDisposition";
+import type { CognitiveStopDecision } from "./cognitiveStop";
 import type { MemoryBAvailability } from "./memoryBAvailability";
 import type {
   MemoryBCompactionDetails,
@@ -41,6 +43,10 @@ export type NoraCognitiveTurnResult = {
   cognitiveStrategyClass?: CognitiveStrategyClass;
   selectedReasoningEffort?: OpenAiReasoningEffort;
   criticalChallengeArmed?: boolean;
+  /** MW3 — present only when contradictionAssessment was supplied. */
+  contradictionDisposition?: ContradictionDispositionResult;
+  /** MW3 — present only when contradictionAssessment was supplied. */
+  cognitiveStopDecision?: CognitiveStopDecision;
 };

 export type { TruthCRevision, MemoryBCompactionState, MemoryBCompactionDetails };

```

### I03 — `lib/nora-eval/d0Runner.ts`

- Classification: **EVAL_DISPATCH**
- Confidence: **HIGH**
- Evidence: exact catalog `mw3.s01.disposition-matrix`; exact `mw3.disposition.eval.test.ts` calls `runD0Scenario`; exact `observeMw3FromRuntime`; MW1/MW2 switch pattern
- Alternative: inline observation in runner — rejected (exact mw3Observe exists)
- No productObservation mapping: `RunEvidence.productObservation` is `Record<string, unknown>` and eval test does not read it
- Exact inferred diff:

```diff

diff --git a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
index 84880f85..03e41520 100644
--- a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
@@ -15,6 +15,7 @@ import { NORA_EVAL_CATALOG_VERSION } from "./types";
 import { observeMw1S01FromRuntime } from "./mw1S01Observe";
 import { observeMw1S02FromRuntime } from "./mw1S02Observe";
 import { observeMw2S01FromRuntime } from "./mw2S01Observe";
+import { observeMw3FromRuntime } from "./mw3Observe";

 function nowIso(): string {
   return new Date().toISOString();
@@ -107,6 +108,8 @@ async function observationForScenario(
       return observeMw1S02FromRuntime();
     case "mw2.s01.strategy-effort-decoupling":
       return observeMw2S01FromRuntime();
+    case "mw3.s01.disposition-matrix":
+      return observeMw3FromRuntime();
     default:
       return { productPath: "none" };
   }

```

### I04 — `lib/nora-eval/index.ts`

- Classification: **EVAL_EXPORT**
- Confidence: **MEDIUM** (glue; eval test imports `@/lib/nora-eval/mw3Observe` directly)
- Evidence: historical inventory listed this file MODIFIED; MW1/MW2 export style; 19-file scope gate
- Alternative: leave unchanged (18-file tree) — rejected against Recovery-2 19-file success gate / historical inventory
- Semantic risk: none (re-export only)
- Exact inferred diff:

```diff

diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index ed3f1459..3a7b27f9 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -25,6 +25,11 @@ export {
   observationFromMw2S01Facts,
   type Mw2S01RuntimeFacts,
 } from "./mw2S01Observe";
+export {
+  observeMw3FromRuntime,
+  observationFromMw3Facts,
+  type Mw3RuntimeFacts,
+} from "./mw3Observe";
 export {
   evaluateMw2S01Matrix,
   evaluateMw2S02Matrix,

```

### I05 — `lib/nora-eval/types.ts`

- Classification: **EVAL_TYPE_GLUE**
- Confidence: **HIGH**
- Evidence: exact catalog `kind: "contradiction_stop"` and `storyIds: ["MW3-S01","MW3-S02"]`; tsc TS2820 / TS2322
- Alternative: `as never` in catalog — forbidden (would mutate exact catalog diff)
- Exact inferred diff:

```diff

diff --git a/projects/sfia-studio/app/lib/nora-eval/types.ts b/projects/sfia-studio/app/lib/nora-eval/types.ts
index d2eab2b1..3c9ba979 100644
--- a/projects/sfia-studio/app/lib/nora-eval/types.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/types.ts
@@ -17,7 +17,8 @@ export type ScenarioKind =
   | "genericity"
   | "parity_metric"
   | "memory_continuity"
-  | "cognitive_strategy";
+  | "cognitive_strategy"
+  | "contradiction_stop";

 export type PassFail = "PASS" | "FAIL" | "INCONCLUSIVE" | "NOT_PROVEN";

@@ -74,7 +75,9 @@ export type Mw1StoryId = "MW1-S01" | "MW1-S02" | "MW1-S03";

 export type Mw2StoryId = "MW2-S01" | "MW2-S02";

-export type CognitiveStoryId = Mw0StoryId | Mw1StoryId | Mw2StoryId;
+export type Mw3StoryId = "MW3-S01" | "MW3-S02";
+
+export type CognitiveStoryId = Mw0StoryId | Mw1StoryId | Mw2StoryId | Mw3StoryId;

 export type CycleTypeFixtureId =
   | "delivery_implementation"

```

No LOW-confidence runtime hunk. No sixth file. No `any` / `@ts-ignore`.

---

## H. 19-file Recovery Manifest

| path | class | source | sha256 |
| --- | --- | --- | --- |
| `.../contradictionDisposition.ts` | EXACT_CREATED | handoff full contents | `87442065dd23e3ccfbac7cb3b5694e5c3ef01da3d2e41526ec8ae1c26507a70f` |
| `.../cognitiveStop.ts` | EXACT_CREATED | handoff full contents | `8a9b1648ffbd8ae1ee5ce93f596d212a289261294f320742676c6aec20f377da` |
| `.../mw3Observe.ts` | EXACT_CREATED | handoff full contents | `5dd5d28f77bb51021745095ba14a5810c22234744e6e9b87b4c0b4013b8785fc` |
| `.../mw3.s01.s02.dispositionStop.d0.test.ts` | EXACT_CREATED | handoff full contents | `aada06b0718ff397f0cc6216c5aa057e4ad3b9116b7b51379782e96e032554bd` |
| `.../mw3.turn.wiring.d0.test.ts` | EXACT_CREATED | handoff full contents | `605a24fc78c3f6d880bb4914a9a3588894ac00f5d429999cb5bf468dfee0dadf` |
| `.../mw3.disposition.eval.test.ts` | EXACT_CREATED | handoff full contents | `6998c354ea53944e80a33fa49f8ef75888d827119f75bc9f52b58115bda61b52` |
| `.../mw3.cognitiveStop.surface.d0.test.ts` | EXACT_CREATED | handoff full contents | `b04b360e191afdac0ca2c3ea465b5d0e741d56be119833315401ad444b2328b4` |
| `.../mw3.cognitiveStop.panel.ux.d0.test.tsx` | EXACT_CREATED | handoff full contents | `3bbae843dab4506462b6f8c7e9ce094e2dc210851aaddffb676b504f265d3d0c` |
| `.../ProjectAssistantPanel.tsx` | EXACT_MODIFIED | handoff unified diff | `d6413ce172c4b413b52eceb2ebe15febeeeebc6bfc7344a880a69643057cb3dc` |
| `.../orchestrateTurn.ts` | EXACT_MODIFIED | handoff unified diff | `28c14039c8cc85a8e708e187f4db8a32081f6368acc24f172c7c33c6a36c2448` |
| `.../features/project-assistant/types.ts` | EXACT_MODIFIED | handoff unified diff | `5479b05be8534854f7d7ea2b17264bf9b32997441b0e81dde82d54a09047ffd9` |
| `.../runNoraCognitiveTurn.ts` | EXACT_MODIFIED | handoff unified diff | `3b474d08f115528f09dc730916d996828aafd36d45b7cb1f030eb222f7c3bf05` |
| `.../catalog.ts` | EXACT_MODIFIED | handoff unified diff | `117a8db45547d9d9707cfe010689e3ce920bcedf9ac5f422c4f61ef6491eed83` |
| `.../scorers.ts` | EXACT_MODIFIED | handoff unified diff | `ab7ac4615abeec44c26e9245beacc039faa1aa186062579d6b3bab20a2c5ff73` |
| `.../nora-cognitive-runtime/index.ts` | INFERRED_MODIFIED | I01 | `b27c651ec124fe3dd30116bda434f9e248866b419db9be3bf9914bb500b3dbdd` |
| `.../nora-cognitive-runtime/types.ts` | INFERRED_MODIFIED | I02 | `677ce5145dd505280396d64706a7ee2268bbdfef10225f59be56f15fbe326420` |
| `.../d0Runner.ts` | INFERRED_MODIFIED | I03 | `348b3cac10b25f365bd0621e7ce80168430cbb8ed36ed6ec69a3b24617852d19` |
| `.../nora-eval/index.ts` | INFERRED_MODIFIED | I04 | `2d80eb1d12cbdd3a24300269c916323dfdc4cd611aaa08b1e907eea24475f11d` |
| `.../nora-eval/types.ts` | INFERRED_MODIFIED | I05 | `e0b1c4fbf1b8ce617da33294599ff20dfa348fd814608cc4e484d9af3efa8171` |

---

## J. Functional invariants T01–T14

Covered by exact `mw3.s01.s02.dispositionStop.d0.test.ts` (16 tests) + eval observe matrix. Historical D0 suite **5 files / 28 tests PASS**. Not extended with C01–C16.

---

## K. Tests

```
MW3 D0: Test Files 5 passed / Tests 28 passed
regression nora-cognitive-runtime + mw2* + orchestrateTurn: Test Files 25 passed / Tests 198 passed
MW0 D0: Test Files 1 passed / Tests 9 passed
npm run typecheck: PASS (tsc --noEmit)
npm run lint: No ESLint warnings or errors
```

ZERO REAL. No LIVE provider. No Hosted Search.

---

## L. Historical CRIT findings — still OPEN

**BLK-MW3-CRIT-01 OPEN**
`ProjectAssistantPanel.tsx` has **zero** `contradictionAssessment`. `actions.ts` has **zero**. `orchestrateTurn` only forwards optional `input.contradictionAssessment`. Normal send path does not derive/feed assessment.

**CORR-MW3-CRIT-02 OPEN**
Exact `cognitiveStop.ts` (not inferred):

`if (input.localImpactOnly === true || input.governingPremiseInvalidated !== true)` → continue / no STOP.

**CORR-MW3-CRIT-03 OPEN**
Main MW3 surface (`data-testid="project-assistant-mw3-surface"`) shows pill + `reason` + `nextAction` only. No visible Evidence IDs, source IDs, governing premise, or blocked-impact anatomy on that surface.

Inference did not close any of these.

---

## M. MW2 reserves

MW2-R01 / MW2-R02 / MW2-R03 remain **OPEN / NON-BLOCKING / CARRIED**.

---

## N. Architecture

FA = NO
TA = NO
No second loop, persistence, provider, Hosted Search, package upgrade.

---

## O. Fake/Real

ZERO REAL
REAL NOT EXECUTED — MORRIS REAL GO REQUIRED

---

## P. Claims

FUNCTIONAL D0 REMATERIALIZATION PROVEN

HISTORICAL BYTE/CODE PARITY NOT PROVEN

MW3 HISTORICAL IMPLEMENTATION SHA LOST

BLK-MW3-CRIT-01 OPEN
CORR-MW3-CRIT-02 OPEN
CORR-MW3-CRIT-03 OPEN

MW3 NOT COMPLETE / NOT CLOSED
COGNITIVE COMPLETION NOT PROVEN
RUNTIME V3 NON ADOPTED
ROADMAP TRUTH-SYNC PENDING
PROJECT PUSH / PR / MERGE NOT PERFORMED

---

## Q. Git lifecycle

Implementation commit `c76ae54f` · 19 files · local-only branch. Review Pack `cd7e27d8` · pin commit follows. No project push/PR/merge.

---

## R. Roadmap

ROADMAP TRUTH-SYNC PENDING — Roadmap not modified.

---

## S. Verdict

**MW3 DELIVERY REMATERIALIZED — FUNCTIONAL D0 PARITY PROVEN — HISTORICAL BYTE PARITY NOT PROVEN — READY FOR CHATGPT RECOVERY REVIEW**

Does NOT mean Critical Review PASS · CRIT closed · READY FOR REAL · MW3 COMPLETE/CLOSED · Cognitive Completion PROVEN · runtime v3 ADOPTED.

---

## I. Complete exploitable diffs vs `c352441c` (19 implementation files)

```diff

diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw3.s01.s02.dispositionStop.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw3.s01.s02.dispositionStop.d0.test.ts
new file mode 100644
index 00000000..26976ad7
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw3.s01.s02.dispositionStop.d0.test.ts
@@ -0,0 +1,290 @@
+/** @vitest-environment node */
+/**
+ * MW3-S01/S02 D0 — contradiction disposition + Cognitive STOP honesty.
+ * Covers T01–T14 minimum matrix + MW2-R01/R02/R03 carried reserves.
+ * ZERO REAL OpenAI.
+ */
+import { describe, expect, it } from "vitest";
+import {
+  COGNITIVE_STRATEGY_CLASSES,
+  cognitiveStopAllowsProductSuccess,
+  decideCognitiveStop,
+  disposeContradiction,
+  dispositionIndependentOfStrategy,
+  type ContradictionConflictInput,
+  type ContradictionEvidencePointer,
+} from "@/lib/nora-cognitive-runtime";
+
+function ptr(
+  partial: Partial<ContradictionEvidencePointer> &
+    Pick<ContradictionEvidencePointer, "evidenceId" | "sourceId" | "domain">,
+): ContradictionEvidencePointer {
+  return {
+    freshness: "fresh",
+    attributable: true,
+    fabricated: false,
+    ...partial,
+  };
+}
+
+const multiSourceConflict = (): ContradictionConflictInput => ({
+  conflictPresent: true,
+  requiredDomains: ["governance"],
+  requiredSourceCount: 2,
+  freshnessMatters: true,
+  evidencePointers: [
+    ptr({
+      evidenceId: "ev:1",
+      sourceId: "src:a",
+      domain: "governance",
+    }),
+    ptr({
+      evidenceId: "ev:2",
+      sourceId: "src:b",
+      domain: "governance",
+    }),
+  ],
+  trustedSfiaProfile: null,
+});
+
+describe("MW3-S01 — contradiction disposition D0", () => {
+  it("T01 — apparent conflict, insufficient evidence → candidate, not evidence-backed", () => {
+    const d = disposeContradiction({
+      conflictPresent: true,
+      requiredSourceCount: 2,
+      evidencePointers: [],
+      trustedSfiaProfile: null,
+    });
+    expect(d.disposition).toBe("candidate");
+    expect(d.insufficiencyReasons).toContain("insufficient_evidence_pointers");
+    expect(d.acceptedEvidenceIds).toEqual([]);
+  });
+
+  it("T02 — genuinely evidence-backed contradiction with attribution", () => {
+    const d = disposeContradiction(multiSourceConflict());
+    expect(d.disposition).toBe("evidence_backed");
+    expect(d.acceptedEvidenceIds).toEqual(["ev:1", "ev:2"]);
+    expect(d.acceptedSourceIds.sort()).toEqual(["src:a", "src:b"]);
+    expect(d.insufficiencyReasons).toEqual([]);
+  });
+
+  it("T03 — stale evidence → no unjustified evidence-backed promotion", () => {
+    const d = disposeContradiction({
+      conflictPresent: true,
+      requiredSourceCount: 1,
+      freshnessMatters: true,
+      evidencePointers: [
+        ptr({
+          evidenceId: "ev:stale",
+          sourceId: "src:a",
+          domain: "governance",
+          freshness: "stale",
+        }),
+      ],
+    });
+    expect(d.disposition).toBe("candidate");
+    expect(d.insufficiencyReasons).toContain("stale_evidence");
+  });
+
+  it("T04 — wrong-domain evidence → no unjustified promotion", () => {
+    const d = disposeContradiction({
+      conflictPresent: true,
+      requiredDomains: ["governance"],
+      requiredSourceCount: 1,
+      evidencePointers: [
+        ptr({
+          evidenceId: "ev:x",
+          sourceId: "src:a",
+          domain: "finance",
+        }),
+      ],
+    });
+    expect(d.disposition).toBe("candidate");
+    expect(d.insufficiencyReasons).toContain("wrong_domain");
+  });
+
+  it("T05 — multi-source coverage insufficient → candidate fail-closed", () => {
+    const d = disposeContradiction({
+      conflictPresent: true,
+      requiredSourceCount: 2,
+      requiredDomains: ["governance"],
+      evidencePointers: [
+        ptr({
+          evidenceId: "ev:1",
+          sourceId: "src:a",
+          domain: "governance",
+        }),
+      ],
+      sourceBreadth: "low",
+    });
+    expect(d.disposition).toBe("candidate");
+    expect(d.insufficiencyReasons).toContain("insufficient_source_coverage");
+  });
+
+  it("T06 — multi-source coverage sufficient → evidence-backed", () => {
+    const d = disposeContradiction({
+      ...multiSourceConflict(),
+      sourceBreadth: "high",
+    });
+    expect(d.disposition).toBe("evidence_backed");
+  });
+
+  it("T07 — fabricated-contradiction temptation refused", () => {
+    const d = disposeContradiction({
+      conflictPresent: true,
+      fabricationAttempt: true,
+      evidencePointers: [
+        ptr({
+          evidenceId: "ev:fake",
+          sourceId: "src:invented",
+          domain: "governance",
+          fabricated: true,
+        }),
+      ],
+    });
+    expect(d.disposition).toBe("candidate");
+    expect(d.insufficiencyReasons).toContain("fabricated_pointer_rejected");
+    expect(d.acceptedEvidenceIds).toEqual([]);
+    expect(d.disclosure).toMatch(/refused/i);
+  });
+
+  it("T12 — trustedSfiaProfile=null never invents profile (MW2-R03)", () => {
+    const d = disposeContradiction({
+      conflictPresent: true,
+      requiredSourceCount: 1,
+      evidencePointers: [
+        ptr({
+          evidenceId: "ev:1",
+          sourceId: "src:a",
+          domain: "governance",
+        }),
+      ],
+      trustedSfiaProfile: null,
+    });
+    expect(d.trustedSfiaProfile).toBeNull();
+    expect(d.disposition).toBe("evidence_backed");
+  });
+
+  it("T13 — borderline Focused / MW2-R01 — strategy must not alter evidence truth", () => {
+    const base = multiSourceConflict();
+    expect(
+      dispositionIndependentOfStrategy(base, [...COGNITIVE_STRATEGY_CLASSES]),
+    ).toBe(true);
+    const focused = disposeContradiction({
+      ...base,
+      strategyClass: "Focused",
+      sourceBreadth: "medium",
+    });
+    const deep = disposeContradiction({
+      ...base,
+      strategyClass: "Deep",
+      sourceBreadth: "high",
+    });
+    expect(focused.disposition).toBe(deep.disposition);
+    expect(focused.disposition).toBe("evidence_backed");
+  });
+
+  it("T14 — sourceBreadth low / MW2-R02 cannot masquerade as proof", () => {
+    const d = disposeContradiction({
+      conflictPresent: true,
+      requiredSourceCount: 2,
+      sourceBreadth: "low",
+      evidencePointers: [
+        ptr({
+          evidenceId: "ev:1",
+          sourceId: "src:a",
+          domain: "governance",
+        }),
+      ],
+      requiredDomains: ["governance"],
+    });
+    expect(d.disposition).toBe("candidate");
+    expect(d.insufficiencyReasons).toContain("insufficient_source_coverage");
+  });
+
+  it("no conflict → disposition none", () => {
+    const d = disposeContradiction({
+      conflictPresent: false,
+      evidencePointers: [],
+    });
+    expect(d.disposition).toBe("none");
+  });
+});
+
+describe("MW3-S02 — Cognitive STOP honesty D0", () => {
+  it("T08 — evidence-backed non-governing → continue, no automatic STOP", () => {
+    const disposition = disposeContradiction(multiSourceConflict());
+    const stop = decideCognitiveStop({
+      disposition,
+      governingPremiseInvalidated: false,
+      localImpactOnly: true,
+      governingPremise: "Local claim only",
+    });
+    expect(stop.cognitiveStop).toBe(false);
+    expect(stop.outcome).toBe("PROGRESS_WITH_CONTRADICTION");
+    expect(stop.progression).toBe("continue");
+    expect(stop.anatomy?.caseCode).toBe("F_evidence_backed_contradiction");
+  });
+
+  it("T09 — evidence-backed governing premise → Cognitive STOP; progress ≠ SUCCESS", () => {
+    const disposition = disposeContradiction(multiSourceConflict());
+    const stop = decideCognitiveStop({
+      disposition,
+      governingPremiseInvalidated: true,
+      governingPremise: "Project must remain FinOps-frozen",
+    });
+    expect(stop.cognitiveStop).toBe(true);
+    expect(stop.outcome).toBe("COGNITIVE_STOP");
+    expect(stop.progression).toBe("cognitive_stop");
+    expect(stop.anatomy?.caseCode).toBe("G_governing_premise_contradiction");
+    expect(stop.anatomy?.contradictionEvidenceIds).toEqual(["ev:1", "ev:2"]);
+    expect(stop.anatomy?.notTechnicalError).toBe(true);
+    expect(stop.anatomy?.notHumanDecision).toBe(true);
+    expect(cognitiveStopAllowsProductSuccess(stop)).toBe(false);
+  });
+
+  it("T10 — technical/tool/transport failure ≠ Cognitive STOP", () => {
+    const disposition = disposeContradiction({
+      conflictPresent: false,
+      evidencePointers: [],
+    });
+    const stop = decideCognitiveStop({
+      disposition,
+      governingPremiseInvalidated: false,
+      technicalFailure: true,
+      technicalFailureMessage: "provider timeout",
+    });
+    expect(stop.cognitiveStop).toBe(false);
+    expect(stop.outcome).toBe("TECHNICAL_FAILURE");
+    expect(stop.progression).toBe("technical_failure");
+    expect(stop.anatomy).toBeNull();
+  });
+
+  it("T11 — silent-success regression: STOP path never allows product SUCCESS", () => {
+    const disposition = disposeContradiction(multiSourceConflict());
+    const stop = decideCognitiveStop({
+      disposition,
+      governingPremiseInvalidated: true,
+      governingPremise: "Governing premise",
+    });
+    expect(stop.allowsSilentSuccess).toBe(false);
+    expect(stop.outcome).not.toBe("PROGRESS_OK");
+    expect(cognitiveStopAllowsProductSuccess(stop)).toBe(false);
+  });
+
+  it("candidate conflict never auto-STOPs", () => {
+    const disposition = disposeContradiction({
+      conflictPresent: true,
+      evidencePointers: [],
+    });
+    const stop = decideCognitiveStop({
+      disposition,
+      governingPremiseInvalidated: true,
+      governingPremise: "Would-be premise",
+    });
+    expect(disposition.disposition).toBe("candidate");
+    expect(stop.cognitiveStop).toBe(false);
+    expect(stop.outcome).toBe("PROGRESS_WITH_CONTRADICTION");
+  });
+});
+
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw3.turn.wiring.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw3.turn.wiring.d0.test.ts
new file mode 100644
index 00000000..2e59de55
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw3.turn.wiring.d0.test.ts
@@ -0,0 +1,94 @@
+/** @vitest-environment node */
+/**
+ * MW3 — runNoraCognitiveTurn wires disposition + Cognitive STOP (Fake provider).
+ * ZERO REAL OpenAI.
+ */
+import { describe, expect, it } from "vitest";
+import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
+import { runNoraCognitiveTurn } from "@/lib/nora-cognitive-runtime";
+
+describe("MW3 — cognitive turn MW3 field wiring D0", () => {
+  it("applies evidence-backed governing STOP onto turn result", async () => {
+    const provider = new FakeConversationProvider({
+      toolScript: [{ kind: "message", text: "[TEST/FAKE] base turn." }],
+    });
+    const turn = await runNoraCognitiveTurn({
+      correlationId: "mw3-turn-stop",
+      projectId: "prj:mw3",
+      messages: [
+        { role: "system", content: "SFIA boundary." },
+        { role: "user", content: "Assess contradiction." },
+      ],
+      provider,
+      enableTools: false,
+      skipCognitiveStrategy: true,
+      simulateMemoryBUnavailable: true,
+      contradictionAssessment: {
+        conflict: {
+          conflictPresent: true,
+          requiredSourceCount: 2,
+          requiredDomains: ["governance"],
+          evidencePointers: [
+            {
+              evidenceId: "ev:1",
+              sourceId: "src:a",
+              domain: "governance",
+              freshness: "fresh",
+              attributable: true,
+            },
+            {
+              evidenceId: "ev:2",
+              sourceId: "src:b",
+              domain: "governance",
+              freshness: "fresh",
+              attributable: true,
+            },
+          ],
+          trustedSfiaProfile: null,
+        },
+        governingPremiseInvalidated: true,
+        governingPremise: "Must remain FinOps-frozen",
+      },
+    });
+
+    expect(turn.contradictionDisposition?.disposition).toBe("evidence_backed");
+    expect(turn.cognitiveStopDecision?.cognitiveStop).toBe(true);
+    expect(turn.cognitiveStopDecision?.outcome).toBe("COGNITIVE_STOP");
+    expect(turn.cognitiveStopDecision?.allowsSilentSuccess).toBe(false);
+    expect(turn.text).toMatch(/COGNITIVE STOP/);
+  });
+
+  it("keeps candidate without STOP when evidence insufficient", async () => {
+    const provider = new FakeConversationProvider({
+      toolScript: [{ kind: "message", text: "[TEST/FAKE] candidate path." }],
+    });
+    const turn = await runNoraCognitiveTurn({
+      correlationId: "mw3-turn-candidate",
+      projectId: "prj:mw3",
+      messages: [
+        { role: "system", content: "SFIA boundary." },
+        { role: "user", content: "Possible conflict?" },
+      ],
+      provider,
+      enableTools: false,
+      skipCognitiveStrategy: true,
+      simulateMemoryBUnavailable: true,
+      contradictionAssessment: {
+        conflict: {
+          conflictPresent: true,
+          evidencePointers: [],
+          trustedSfiaProfile: null,
+        },
+        governingPremiseInvalidated: true,
+        governingPremise: "Would-be premise",
+      },
+    });
+
+    expect(turn.contradictionDisposition?.disposition).toBe("candidate");
+    expect(turn.cognitiveStopDecision?.cognitiveStop).toBe(false);
+    expect(turn.cognitiveStopDecision?.outcome).toBe(
+      "PROGRESS_WITH_CONTRADICTION",
+    );
+  });
+});
+
diff --git a/projects/sfia-studio/app/__tests__/nora-eval/mw3.disposition.eval.test.ts b/projects/sfia-studio/app/__tests__/nora-eval/mw3.disposition.eval.test.ts
new file mode 100644
index 00000000..1a0bb908
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/nora-eval/mw3.disposition.eval.test.ts
@@ -0,0 +1,44 @@
+/** @vitest-environment node */
+/**
+ * MW3 eval catalog scenario D0 — MODELED + EVAL.
+ * Fake/deterministic only — ZERO REAL OpenAI.
+ */
+import { describe, expect, it } from "vitest";
+import { getScenario } from "@/lib/nora-eval/catalog";
+import { runD0Scenario } from "@/lib/nora-eval/d0Runner";
+import { observeMw3FromRuntime } from "@/lib/nora-eval/mw3Observe";
+
+describe("MW3 eval — disposition matrix scenario", () => {
+  it("catalog includes mw3.s01.disposition-matrix", () => {
+    const s = getScenario("mw3.s01.disposition-matrix");
+    expect(s).toBeDefined();
+    expect(s?.storyIds).toEqual(["MW3-S01", "MW3-S02"]);
+    expect(s?.hardInvariants).toContain("mw3_disposition_matrix");
+    expect(s?.hardInvariants).toContain("mw3_cognitive_stop_honesty");
+  });
+
+  it("observeMw3FromRuntime passes T01–T14 facts", () => {
+    const obs = observeMw3FromRuntime();
+    expect(obs.mw3DispositionOk).toBe(true);
+    expect(obs.observedObservableIds).toContain("obs.contradiction.disposition");
+    expect(obs.observedObservableIds).toContain("obs.cognitive_stop.honesty");
+  });
+
+  it("D0 scenario run includes MW3 hard invariants PASS", async () => {
+    const result = await runD0Scenario("mw3.s01.disposition-matrix");
+    expect(result.passFail).toBe("PASS");
+    expect(
+      result.scorers.some(
+        (s) =>
+          s.scorerId === "hard.mw3_disposition" && s.passFail === "PASS",
+      ),
+    ).toBe(true);
+    expect(
+      result.scorers.some(
+        (s) =>
+          s.scorerId === "hard.mw3_cognitive_stop" && s.passFail === "PASS",
+      ),
+    ).toBe(true);
+  });
+});
+
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
new file mode 100644
index 00000000..e6946a9a
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx
@@ -0,0 +1,176 @@
+/**
+ * MW3-S02 UX — ProjectAssistantPanel surfaces Cognitive STOP distinctly.
+ * Fake send action only — ZERO REAL OpenAI.
+ * @vitest-environment jsdom
+ */
+import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";
+
+const {
+  projectAssistantSendActionMock,
+  projectAssistantRehydrateEvidenceOutcomeActionMock,
+} = vi.hoisted(() => ({
+  projectAssistantSendActionMock: vi.fn(),
+  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
+}));
+
+vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantSendAction: (...args: unknown[]) =>
+    projectAssistantSendActionMock(...args),
+  projectAssistantDecideAction: vi.fn(),
+  projectAssistantPrepareF3FixtureAction: vi.fn(),
+  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
+  projectAssistantPrepareResolvedM3Action: vi.fn(),
+  projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
+  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
+    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
+}));
+
+vi.mock("next/link", () => ({
+  default: ({
+    children,
+    href,
+    ...props
+  }: {
+    children: React.ReactNode;
+    href: string;
+  }) => (
+    <a href={href} {...props}>
+      {children}
+    </a>
+  ),
+}));
+
+const PROJECT = {
+  projectId: "prj:mw3-ui",
+  name: "Projet MW3 UI",
+  shortReference: "MW3UI",
+  objective: "Surface Cognitive STOP.",
+  contextSummary: "MW3 UX",
+  criticality: "STANDARD" as const,
+  constraints: [] as string[],
+  lpsId: "lps:mw3-ui",
+  lpsVersion: 1,
+  lpsCreatedAt: "2026-09-02T12:00:00.000Z",
+  doctrineId: "pkg:studio-v3-oa",
+  doctrineVersion: "1.0.0",
+  doctrineDigest: "digest:mw3-ui",
+  doctrineStatus: "RESOLVED",
+  runtimeMode: "LOCAL_PROCESS" as const,
+  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
+  readiness: "NOT_READY" as const,
+};
+
+describe("MW3-S02 — ProjectAssistantPanel Cognitive STOP UX", () => {
+  beforeEach(() => {
+    projectAssistantSendActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
+      ok: false,
+      status: "error",
+      code: "NO_EVIDENCE_OUTCOME_REFS",
+      message: "none",
+      mode: "fixture",
+      retryable: false,
+    });
+  });
+
+  afterEach(() => {
+    cleanup();
+  });
+
+  it("renders Arrêt cognitif surface from mw3 DTO (≠ technical error)", async () => {
+    projectAssistantSendActionMock.mockResolvedValue({
+      ok: true,
+      status: "cognitive_stop",
+      text: "[TEST/FAKE] blocked by Cognitive STOP.",
+      mode: "fixture",
+      presentation: "test_provider",
+      toolRounds: 0,
+      toolCalls: 0,
+      sources: [],
+      toolEvents: [],
+      project: PROJECT,
+      ephemeralNotice: "ARRÊT COGNITIF (≠ erreur technique).",
+      cognitiveRuntime: "agents",
+      sessionId: "sess:mw3",
+      memoryBAvailability: "unavailable",
+      memoryBCompactionState: "none",
+      mw3: {
+        disposition: "evidence_backed",
+        progression: "COGNITIVE_STOP",
+        cognitiveStop: true,
+        reason: "Evidence-backed contradiction invalidates governing premise: FinOps freeze",
+        evidenceIds: ["ev:1", "ev:2"],
+        sourceIds: ["src:a", "src:b"],
+        governingPremise: "FinOps freeze",
+        nextAction: "Cognitive STOP — replan/recovery as recommendation.",
+        insufficiencyReasons: [],
+        allowsSilentSuccess: false,
+      },
+    });
+
+    render(<ProjectAssistantPanel projectId="prj:mw3-ui" />);
+    const input = screen.getByTestId("project-assistant-input");
+    fireEvent.change(input, { target: { value: "Évalue la contradiction." } });
+    fireEvent.click(screen.getByTestId("project-assistant-send"));
+
+    await waitFor(() => {
+      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
+    });
+    const surface = screen.getByTestId("project-assistant-mw3-surface");
+    expect(surface.getAttribute("data-mw3-cognitive-stop")).toBe("true");
+    expect(surface.getAttribute("data-mw3-disposition")).toBe("evidence_backed");
+    expect(surface.getAttribute("data-mw3-progression")).toBe("COGNITIVE_STOP");
+    expect(surface.textContent).toMatch(/Arrêt cognitif/i);
+    expect(surface.textContent).not.toMatch(/erreur technique/i);
+  });
+
+  it("renders candidate surface without Cognitive STOP", async () => {
+    projectAssistantSendActionMock.mockResolvedValue({
+      ok: true,
+      status: "ok",
+      text: "[TEST/FAKE] candidate retained.",
+      mode: "fixture",
+      presentation: "test_provider",
+      toolRounds: 0,
+      toolCalls: 0,
+      sources: [],
+      toolEvents: [],
+      project: PROJECT,
+      ephemeralNotice: "Session Memory B unavailable.",
+      cognitiveRuntime: "agents",
+      sessionId: "sess:mw3-cand",
+      memoryBAvailability: "unavailable",
+      memoryBCompactionState: "none",
+      mw3: {
+        disposition: "candidate",
+        progression: "PROGRESS_WITH_CONTRADICTION",
+        cognitiveStop: false,
+        reason: "Possible conflict retained as candidate.",
+        evidenceIds: [],
+        sourceIds: [],
+        governingPremise: null,
+        nextAction: "Verify sources.",
+        insufficiencyReasons: ["insufficient_source_coverage"],
+        allowsSilentSuccess: false,
+      },
+    });
+
+    render(<ProjectAssistantPanel projectId="prj:mw3-ui" />);
+    fireEvent.change(screen.getByTestId("project-assistant-input"), {
+      target: { value: "Conflit possible ?" },
+    });
+    fireEvent.click(screen.getByTestId("project-assistant-send"));
+
+    await waitFor(() => {
+      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
+    });
+    const surface = screen.getByTestId("project-assistant-mw3-surface");
+    expect(surface.getAttribute("data-mw3-cognitive-stop")).toBe("false");
+    expect(surface.getAttribute("data-mw3-disposition")).toBe("candidate");
+    expect(surface.textContent).toMatch(/Contradiction candidate/i);
+  });
+});
+
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.surface.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.surface.d0.test.ts
new file mode 100644
index 00000000..ff0489fd
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.surface.d0.test.ts
@@ -0,0 +1,336 @@
+/** @vitest-environment node */
+/**
+ * MW3-S02 deterministic E2E + UX surface — Cognitive STOP honesty on product path.
+ * Fake provider only — ZERO REAL OpenAI.
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import {
+  FakeConversationProvider,
+  setConversationProviderForTests,
+} from "@/lib/platform/ai";
+import {
+  decideCognitiveStop,
+  disposeContradiction,
+  formatCognitiveStopPiloteNotice,
+} from "@/lib/nora-cognitive-runtime";
+import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
+
+const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
+  getProjectRuntimeActionMock: vi.fn(),
+}));
+
+vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
+  getProjectRuntimeAction: getProjectRuntimeActionMock,
+}));
+
+const SUCCESS = {
+  ok: true as const,
+  project: {
+    projectId: "prj:mw3-demo",
+    name: "Projet MW3",
+    shortReference: "MW3",
+    objective: "Cognitive STOP honesty surface.",
+    contextSummary: "MW3 D0 product path.",
+    criticality: "STANDARD" as const,
+    constraints: ["Lecture seule"],
+    localMode: true as const,
+    source: "REAL_LOCAL_CORE" as const,
+    fixture: false as const,
+  },
+  doctrine: {
+    id: "pkg:studio-v3-oa",
+    version: "1.0.0",
+    digest: "digest:mw3",
+    status: "RESOLVED",
+  },
+  livingState: {
+    id: "lps:mw3-demo",
+    version: 1 as const,
+    createdAt: "2026-09-02T12:00:00.000Z",
+  },
+  readiness: {
+    status: "NOT_READY" as const,
+    hard: "OPEN" as const,
+    tA6: "INCOMPLETE" as const,
+    iam: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
+    realAgentExecution: "DISABLED" as const,
+    delivery: "NOT_AUTHORIZED" as const,
+    cutover: "NOT_AUTHORIZED" as const,
+    runReady: false as const,
+    productReady: false as const,
+  },
+  disclosures: {
+    runtimeMode: "LOCAL_PROCESS" as const,
+    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
+    agentExecution: "DISABLED" as const,
+    iam: "NOT_SELECTED" as const,
+    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
+    delivery: "NOT_AUTHORIZED" as const,
+    cutover: "NOT_AUTHORIZED" as const,
+    localDataVolatile: true as const,
+    restartMayLoseState: true as const,
+    projectLpsRestartSafe: true as const,
+    cycleInstanceRestartSafe: true as const,
+    humanDecisionRestartSafe: true as const,
+    executionContractRestartSafe: true as const,
+    messages: [] as const,
+  },
+};
+
+describe("MW3-S02 — product/runtime Cognitive STOP surface D0", () => {
+  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
+  let sessionDir: string;
+  let sessionDbPath: string;
+
+  beforeEach(() => {
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    getProjectRuntimeActionMock.mockReset();
+    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
+    setConversationProviderForTests(null);
+    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw3-orch-"));
+    sessionDbPath = path.join(sessionDir, "session.sqlite");
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    if (previousFake === undefined) {
+      delete process.env.OPS1_CONVERSATION_PROVIDER;
+    } else {
+      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
+    }
+    fs.rmSync(sessionDir, { recursive: true, force: true });
+  });
+
+  it("maps evidence-backed governing STOP onto assistant status cognitive_stop", async () => {
+    const provider = new FakeConversationProvider({
+      toolScript: [
+        {
+          kind: "message",
+          text: "[TEST/FAKE] Nora turn before STOP mapping.",
+        },
+      ],
+    });
+
+    const disposition = disposeContradiction({
+      conflictPresent: true,
+      requiredSourceCount: 2,
+      requiredDomains: ["governance"],
+      evidencePointers: [
+        {
+          evidenceId: "ev:1",
+          sourceId: "src:a",
+          domain: "governance",
+          freshness: "fresh",
+          attributable: true,
+        },
+        {
+          evidenceId: "ev:2",
+          sourceId: "src:b",
+          domain: "governance",
+          freshness: "fresh",
+          attributable: true,
+        },
+      ],
+      trustedSfiaProfile: null,
+    });
+    const stop = decideCognitiveStop({
+      disposition,
+      governingPremiseInvalidated: true,
+      governingPremise: "FinOps freeze must hold",
+    });
+    const notice = formatCognitiveStopPiloteNotice(stop);
+    expect(stop.cognitiveStop).toBe(true);
+    expect(notice).toMatch(/ARRÊT COGNITIF/i);
+    expect(notice).toMatch(/≠ erreur technique/);
+    expect(provider.providerId).toMatch(/fake/i);
+  });
+
+  it("distinguishes technical failure UX from Cognitive STOP labels", () => {
+    const disposition = disposeContradiction({
+      conflictPresent: false,
+      evidencePointers: [],
+    });
+    const technical = decideCognitiveStop({
+      disposition,
+      governingPremiseInvalidated: false,
+      technicalFailure: true,
+    });
+    const stop = decideCognitiveStop({
+      disposition: disposeContradiction({
+        conflictPresent: true,
+        requiredSourceCount: 1,
+        evidencePointers: [
+          {
+            evidenceId: "ev:1",
+            sourceId: "src:a",
+            domain: "governance",
+            freshness: "fresh",
+            attributable: true,
+          },
+        ],
+      }),
+      governingPremiseInvalidated: true,
+      governingPremise: "Premise",
+    });
+    expect(technical.cognitiveStop).toBe(false);
+    expect(technical.outcome).toBe("TECHNICAL_FAILURE");
+    expect(formatCognitiveStopPiloteNotice(technical)).toBeNull();
+    expect(stop.cognitiveStop).toBe(true);
+    expect(formatCognitiveStopPiloteNotice(stop)).toBeTruthy();
+  });
+
+  it("candidate vs evidence-backed vs STOP are distinguishable progression labels", () => {
+    const none = decideCognitiveStop({
+      disposition: disposeContradiction({
+        conflictPresent: false,
+        evidencePointers: [],
+      }),
+      governingPremiseInvalidated: false,
+    });
+    const candidate = decideCognitiveStop({
+      disposition: disposeContradiction({
+        conflictPresent: true,
+        evidencePointers: [],
+      }),
+      governingPremiseInvalidated: true,
+    });
+    const backedContinue = decideCognitiveStop({
+      disposition: disposeContradiction({
+        conflictPresent: true,
+        requiredSourceCount: 1,
+        evidencePointers: [
+          {
+            evidenceId: "ev:1",
+            sourceId: "src:a",
+            domain: "governance",
+            freshness: "fresh",
+            attributable: true,
+          },
+        ],
+      }),
+      governingPremiseInvalidated: false,
+    });
+    const stop = decideCognitiveStop({
+      disposition: disposeContradiction({
+        conflictPresent: true,
+        requiredSourceCount: 1,
+        evidencePointers: [
+          {
+            evidenceId: "ev:1",
+            sourceId: "src:a",
+            domain: "governance",
+            freshness: "fresh",
+            attributable: true,
+          },
+        ],
+      }),
+      governingPremiseInvalidated: true,
+      governingPremise: "Premise",
+    });
+    const technical = decideCognitiveStop({
+      disposition: disposeContradiction({
+        conflictPresent: false,
+        evidencePointers: [],
+      }),
+      governingPremiseInvalidated: false,
+      technicalFailure: true,
+    });
+    // Distinguishing product surface: disposition + outcome + cognitiveStop flag.
+    const labels = [
+      `${none.surfacedDisposition}|${none.outcome}|stop=${none.cognitiveStop}`,
+      `${candidate.surfacedDisposition}|${candidate.outcome}|stop=${candidate.cognitiveStop}`,
+      `${backedContinue.surfacedDisposition}|${backedContinue.outcome}|stop=${backedContinue.cognitiveStop}`,
+      `${stop.surfacedDisposition}|${stop.outcome}|stop=${stop.cognitiveStop}`,
+      `${technical.surfacedDisposition}|${technical.outcome}|stop=${technical.cognitiveStop}`,
+    ];
+    expect(new Set(labels).size).toBe(5);
+    expect(none.outcome).toBe("PROGRESS_OK");
+    expect(candidate.surfacedDisposition).toBe("candidate");
+    expect(backedContinue.surfacedDisposition).toBe("evidence_backed");
+    expect(stop.outcome).toBe("COGNITIVE_STOP");
+    expect(technical.outcome).toBe("TECHNICAL_FAILURE");
+  });
+
+  it("orchestrateProjectAssistantTurn returns cognitive_stop + mw3 DTO (E2E Fake)", async () => {
+    const provider = new FakeConversationProvider({
+      toolScript: [{ kind: "message", text: "[TEST/FAKE] MW3 STOP path." }],
+    });
+    const result = await orchestrateProjectAssistantTurn({
+      projectId: "prj:mw3-demo",
+      content: "Évalue la contradiction gouvernante.",
+      sessionDbPath,
+      provider,
+      simulateMemoryBUnavailable: true,
+      contradictionAssessment: {
+        conflict: {
+          conflictPresent: true,
+          requiredSourceCount: 2,
+          requiredDomains: ["governance"],
+          evidencePointers: [
+            {
+              evidenceId: "ev:1",
+              sourceId: "src:a",
+              domain: "governance",
+              freshness: "fresh",
+              attributable: true,
+            },
+            {
+              evidenceId: "ev:2",
+              sourceId: "src:b",
+              domain: "governance",
+              freshness: "fresh",
+              attributable: true,
+            },
+          ],
+          trustedSfiaProfile: null,
+        },
+        governingPremiseInvalidated: true,
+        governingPremise: "FinOps freeze must hold",
+      },
+    });
+
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.status).toBe("cognitive_stop");
+    expect(result.mw3?.cognitiveStop).toBe(true);
+    expect(result.mw3?.disposition).toBe("evidence_backed");
+    expect(result.mw3?.progression).toBe("COGNITIVE_STOP");
+    expect(result.mw3?.allowsSilentSuccess).toBe(false);
+    expect(result.ephemeralNotice).toMatch(/ARRÊT COGNITIF/i);
+    expect(result.ephemeralNotice).toMatch(/≠ erreur technique/);
+  });
+
+  it("orchestrateProjectAssistantTurn keeps ok for candidate (no silent STOP)", async () => {
+    const provider = new FakeConversationProvider({
+      toolScript: [{ kind: "message", text: "[TEST/FAKE] MW3 candidate." }],
+    });
+    const result = await orchestrateProjectAssistantTurn({
+      projectId: "prj:mw3-demo",
+      content: "Conflit possible sans preuve.",
+      sessionDbPath,
+      provider,
+      simulateMemoryBUnavailable: true,
+      contradictionAssessment: {
+        conflict: {
+          conflictPresent: true,
+          evidencePointers: [],
+          trustedSfiaProfile: null,
+        },
+        governingPremiseInvalidated: true,
+        governingPremise: "Would-be premise",
+      },
+    });
+
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.status).toBe("ok");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.progression).toBe("PROGRESS_WITH_CONTRADICTION");
+  });
+});
+
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index a391871f..ab54f5f2 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -15,6 +15,7 @@ import type {
   AssistantHistoryMessage,
   AssistantToolEventDto,
   F2TurnPayload,
+  Mw3CognitiveSurfaceDto,
   ProjectAssistantRehydrateEvidenceOutcomeSuccess,
 } from "./types";
 import type { F2DecisionKind, ProposalDto } from "./f2/types";
@@ -111,6 +112,9 @@ export function ProjectAssistantPanel({
     "Conversation, proposition et confirmation restent process-local (non durables). L’état projet enregistré peut être relu ; rien n’est inventé.",
   );
   const [f2, setF2] = useState<F2TurnPayload | null>(null);
+  const [mw3Surface, setMw3Surface] = useState<Mw3CognitiveSurfaceDto | null>(
+    null,
+  );
   const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
   const [reservesText, setReservesText] = useState("");
   const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
@@ -290,6 +294,7 @@ export function ProjectAssistantPanel({

       setModeLabel(modeFromResult(result));
       setEphemeralNotice(result.ephemeralNotice);
+      setMw3Surface(result.mw3 ?? null);
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       if (result.toolEvents.length > 0) {
         setUiState("SOURCE_LOOKUP");
@@ -309,7 +314,9 @@ export function ProjectAssistantPanel({
         setF2(null);
         setActiveProposal(null);
       }
-      setUiState("ANSWERED");
+      setUiState(
+        result.status === "cognitive_stop" ? "ANSWERED" : "ANSWERED",
+      );
     });
   }

@@ -568,6 +575,32 @@ export function ProjectAssistantPanel({
       <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
         Morris pilote. Nora recommande — la décision vous appartient.
       </p>
+      {mw3Surface ? (
+        <div
+          className={styles.scope}
+          data-testid="project-assistant-mw3-surface"
+          data-mw3-disposition={mw3Surface.disposition}
+          data-mw3-progression={mw3Surface.progression}
+          data-mw3-cognitive-stop={mw3Surface.cognitiveStop ? "true" : "false"}
+          role="status"
+        >
+          {mw3Surface.cognitiveStop ? (
+            <StatusPill tone="orange">Arrêt cognitif</StatusPill>
+          ) : mw3Surface.disposition === "evidence_backed" ? (
+            <StatusPill tone="orange">Contradiction evidence-backed</StatusPill>
+          ) : mw3Surface.disposition === "candidate" ? (
+            <StatusPill tone="blueFlush">Contradiction candidate</StatusPill>
+          ) : (
+            <StatusPill tone="muted">Pas de contradiction</StatusPill>
+          )}
+          {mw3Surface.reason ? (
+            <p className={styles.ephemeral}>{mw3Surface.reason}</p>
+          ) : null}
+          {mw3Surface.nextAction ? (
+            <p className={styles.ephemeral}>Suite : {mw3Surface.nextAction}</p>
+          ) : null}
+        </div>
+      ) : null}
       <details className={styles.diagnosticsDetails}>
         <summary>Parcours et limites</summary>
         <p className={styles.scope} data-testid="project-assistant-scope">
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index bcbe1f6c..4312ec8b 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -8,7 +8,9 @@ import {
   memoryBPiloteNotice,
   memoryBCompactionPiloteNotice,
   runNoraCognitiveTurn,
+  formatCognitiveStopPiloteNotice,
   type SemanticCognitiveWorkloadAssessment,
+  type Mw3ContradictionAssessmentInput,
 } from "@/lib/nora-cognitive-runtime";
 import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
@@ -18,6 +20,7 @@ import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
 import { resolveAssistantMode } from "./resolveAssistantMode";
 import type {
   AssistantHistoryMessage,
+  Mw3CognitiveSurfaceDto,
   ProjectAssistantContextDto,
   ProjectAssistantSendResult,
 } from "./types";
@@ -35,13 +38,38 @@ function buildEphemeralNotice(
     | "compacted_with_loss"
     | "stale_invalidated",
   stalePriorInvalidated?: boolean,
+  cognitiveStopNotice?: string | null,
 ): string {
   const base = memoryBPiloteNotice(memoryBAvailability);
   const compaction = memoryBCompactionPiloteNotice(memoryBCompactionState, {
     stalePriorInvalidated,
   });
-  if (!compaction) return base;
-  return `${compaction} ${base}`;
+  const parts = [cognitiveStopNotice, compaction, base].filter(
+    (p): p is string => typeof p === "string" && p.trim().length > 0,
+  );
+  return parts.join(" ");
+}
+
+function toMw3Surface(
+  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
+): Mw3CognitiveSurfaceDto | null {
+  const disposition = turn.contradictionDisposition;
+  const stop = turn.cognitiveStopDecision;
+  if (!disposition || !stop) return null;
+  return {
+    disposition: disposition.disposition,
+    progression: stop.outcome,
+    cognitiveStop: stop.cognitiveStop,
+    reason: stop.anatomy?.reason ?? disposition.disclosure,
+    evidenceIds: stop.anatomy?.contradictionEvidenceIds ?? [
+      ...disposition.acceptedEvidenceIds,
+    ],
+    sourceIds: stop.anatomy?.sourceIds ?? [...disposition.acceptedSourceIds],
+    governingPremise: stop.anatomy?.governingPremise || null,
+    nextAction: stop.anatomy?.nextAction ?? null,
+    insufficiencyReasons: [...disposition.insufficiencyReasons],
+    allowsSilentSuccess: false,
+  };
 }

 function toContextDto(
@@ -101,6 +129,11 @@ export async function orchestrateProjectAssistantTurn(input: {
    * Server-side only; does not expand ProjectAssistantContextDto / client DTO.
    */
   truthCContext?: string | null;
+  /**
+   * MW3 — optional contradiction assessment (tests/eval/product when facts exist).
+   * Server-side; surfaces mw3 DTO without inventing Evidence.
+   */
+  contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
 }): Promise<ProjectAssistantSendResult> {
   const content = input.content.trim();
   if (!content) {
@@ -188,13 +221,29 @@ export async function orchestrateProjectAssistantTurn(input: {
       },
       trustedSfiaProfile: null,
       semanticCognitiveWorkload: input.semanticCognitiveWorkload ?? null,
+      contradictionAssessment: input.contradictionAssessment ?? null,
     });

     const { toolEvents, sources } = collectToolTelemetry(sink.events);
+    const mw3 = toMw3Surface(turn);
+    const stopNotice = formatCognitiveStopPiloteNotice(
+      turn.cognitiveStopDecision ?? {
+        progression: "continue",
+        outcome: "PROGRESS_OK",
+        cognitiveStop: false,
+        anatomy: null,
+        surfacedDisposition: "none",
+        allowsSilentSuccess: false,
+      },
+    );
+    const status =
+      turn.cognitiveStopDecision?.cognitiveStop === true
+        ? ("cognitive_stop" as const)
+        : ("ok" as const);

     return {
       ok: true,
-      status: "ok",
+      status,
       text: turn.text,
       mode: modeResolution.mode,
       presentation,
@@ -208,6 +257,7 @@ export async function orchestrateProjectAssistantTurn(input: {
         turn.memoryBAvailability,
         turn.memoryBCompactionState,
         turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
+        stopNotice,
       ),
       cognitiveRuntime: turn.cognitiveRuntime,
       sessionId: turn.sessionId,
@@ -215,6 +265,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       memoryBCompactionState: turn.memoryBCompactionState,
       stalePriorInvalidated:
         turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
+      mw3,
     };
   } catch (error) {
     const message =
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index 7057734f..b91c0ee4 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -21,6 +21,7 @@ export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed"

 export type AssistantTurnStatus =
   | "ok"
+  | "cognitive_stop"
   | "provider_unavailable"
   | "provider_error"
   | "project_not_found"
@@ -30,6 +31,32 @@ export type AssistantTurnStatus =
   | "prepare_error"
   | "execute_error";

+export type ContradictionDispositionDto =
+  | "none"
+  | "candidate"
+  | "evidence_backed";
+
+export type CognitiveProgressionDto =
+  | "PROGRESS_OK"
+  | "PROGRESS_WITH_CONTRADICTION"
+  | "COGNITIVE_STOP"
+  | "TECHNICAL_FAILURE";
+
+/** MW3 CIS-shaped surface — process-local; ≠ Execute STOP; ≠ HumanDecision. */
+export type Mw3CognitiveSurfaceDto = {
+  disposition: ContradictionDispositionDto;
+  progression: CognitiveProgressionDto;
+  cognitiveStop: boolean;
+  reason: string | null;
+  evidenceIds: string[];
+  sourceIds: string[];
+  governingPremise: string | null;
+  nextAction: string | null;
+  insufficiencyReasons: string[];
+  /** Anti-claim: never a silent SUCCESS when cognitiveStop. */
+  allowsSilentSuccess: false;
+};
+
 export type AssistantHistoryMessage = {
   role: "user" | "assistant";
   content: string;
@@ -98,7 +125,7 @@ export type F2TurnPayload = {

 export type ProjectAssistantSendSuccess = {
   ok: true;
-  status: "ok";
+  status: "ok" | "cognitive_stop";
   text: string;
   mode: Exclude<AssistantUiMode, "unconfirmed">;
   presentation: "test_provider" | "openai_live";
@@ -127,6 +154,8 @@ export type ProjectAssistantSendSuccess = {
     | "stale_invalidated";
   /** MW1-S02-CORR-02 — prior compacted B invalidated by Truth C change. */
   stalePriorInvalidated?: boolean;
+  /** MW3 — contradiction / Cognitive STOP surface (when assessed). */
+  mw3?: Mw3CognitiveSurfaceDto | null;
   f2?: F2TurnPayload;
 };

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveStop.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveStop.ts
new file mode 100644
index 00000000..9b410dc5
--- /dev/null
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveStop.ts
@@ -0,0 +1,201 @@
+/**
+ * MW3-S02 — Cognitive STOP honesty (≠ generic error / ≠ Execute STOP).
+ *
+ * Maps evidence-backed contradiction + governing-premise impact onto an
+ * attributable Cognitive STOP over existing progression seams.
+ *
+ * Cognitive STOP ≠ HumanDecision ≠ Confirmation ≠ provider HITL ≠ transport error.
+ */
+
+import type { ContradictionDispositionResult } from "./contradictionDisposition";
+
+/** C3 §11 anatomy cases used for attributable Cognitive STOP messaging. */
+export type CognitiveStopAnatomyCode =
+  | "E_candidate_contradiction"
+  | "F_evidence_backed_contradiction"
+  | "G_governing_premise_contradiction"
+  | "I_governed_stop";
+
+export type CognitiveProgressionKind =
+  | "continue"
+  | "cognitive_stop"
+  | "technical_failure";
+
+/**
+ * Product progression for Nora cognitive path.
+ * SUCCESS is never emitted for a Cognitive STOP path.
+ */
+export type CognitiveProgressionOutcome =
+  | "PROGRESS_OK"
+  | "PROGRESS_WITH_CONTRADICTION"
+  | "COGNITIVE_STOP"
+  | "TECHNICAL_FAILURE";
+
+export type CognitiveStopAnatomy = {
+  caseCode: CognitiveStopAnatomyCode;
+  /** Why progression cannot honestly continue. */
+  reason: string;
+  /** Evidence-backed contradiction ids (attributable). */
+  contradictionEvidenceIds: string[];
+  sourceIds: string[];
+  governingPremise: string;
+  /** Next recovery-shaped action — recommendation, not HumanDecision. */
+  nextAction: string;
+  /** Explicit: this is not a transport/provider error. */
+  notTechnicalError: true;
+  /** Explicit: Nora did not consume Pilote HD authority. */
+  notHumanDecision: true;
+};
+
+export type CognitiveStopDecisionInput = {
+  disposition: ContradictionDispositionResult;
+  /** Evidence-backed contradiction invalidates an indispensable governing premise. */
+  governingPremiseInvalidated: boolean;
+  governingPremise?: string;
+  /** Local / non-governing impact — surface contradiction, do not STOP. */
+  localImpactOnly?: boolean;
+  /** Technical/network/tool/transport failure path — never Cognitive STOP. */
+  technicalFailure?: boolean;
+  technicalFailureMessage?: string;
+};
+
+export type CognitiveStopDecision = {
+  progression: CognitiveProgressionKind;
+  outcome: CognitiveProgressionOutcome;
+  /** True only for Cognitive STOP — never for technical failure. */
+  cognitiveStop: boolean;
+  anatomy: CognitiveStopAnatomy | null;
+  /** Surfaced contradiction kind for UX (candidate / evidence_backed / none). */
+  surfacedDisposition: ContradictionDispositionResult["disposition"];
+  /** Anti-silent-SUCCESS: blocked path never reports product SUCCESS. */
+  allowsSilentSuccess: false;
+};
+
+export function decideCognitiveStop(
+  input: CognitiveStopDecisionInput,
+): CognitiveStopDecision {
+  const allowsSilentSuccess = false as const;
+  const disposition = input.disposition.disposition;
+
+  if (input.technicalFailure === true) {
+    return {
+      progression: "technical_failure",
+      outcome: "TECHNICAL_FAILURE",
+      cognitiveStop: false,
+      anatomy: null,
+      surfacedDisposition: disposition,
+      allowsSilentSuccess,
+    };
+  }
+
+  if (disposition === "none") {
+    return {
+      progression: "continue",
+      outcome: "PROGRESS_OK",
+      cognitiveStop: false,
+      anatomy: null,
+      surfacedDisposition: "none",
+      allowsSilentSuccess,
+    };
+  }
+
+  if (disposition === "candidate") {
+    return {
+      progression: "continue",
+      outcome: "PROGRESS_WITH_CONTRADICTION",
+      cognitiveStop: false,
+      anatomy: {
+        caseCode: "E_candidate_contradiction",
+        reason:
+          input.disposition.disclosure ??
+          "Possible conflict retained as candidate — not evidence-backed.",
+        contradictionEvidenceIds: [],
+        sourceIds: [],
+        governingPremise: input.governingPremise ?? "",
+        nextAction: "Verify sources before treating the conflict as proven.",
+        notTechnicalError: true,
+        notHumanDecision: true,
+      },
+      surfacedDisposition: "candidate",
+      allowsSilentSuccess,
+    };
+  }
+
+  // evidence_backed
+  if (input.localImpactOnly === true || input.governingPremiseInvalidated !== true) {
+    return {
+      progression: "continue",
+      outcome: "PROGRESS_WITH_CONTRADICTION",
+      cognitiveStop: false,
+      anatomy: {
+        caseCode: "F_evidence_backed_contradiction",
+        reason:
+          "Evidence-backed contradiction surfaced — governing premise still holds; progression may continue honestly.",
+        contradictionEvidenceIds: [...input.disposition.acceptedEvidenceIds],
+        sourceIds: [...input.disposition.acceptedSourceIds],
+        governingPremise: input.governingPremise ?? "",
+        nextAction: "Correct recommendation path if needed; no Cognitive STOP.",
+        notTechnicalError: true,
+        notHumanDecision: true,
+      },
+      surfacedDisposition: "evidence_backed",
+      allowsSilentSuccess,
+    };
+  }
+
+  const premise =
+    typeof input.governingPremise === "string" &&
+    input.governingPremise.trim().length > 0
+      ? input.governingPremise.trim()
+      : "Indispensable governing premise";
+
+  return {
+    progression: "cognitive_stop",
+    outcome: "COGNITIVE_STOP",
+    cognitiveStop: true,
+    anatomy: {
+      caseCode: "G_governing_premise_contradiction",
+      reason: `Evidence-backed contradiction invalidates governing premise: ${premise}`,
+      contradictionEvidenceIds: [...input.disposition.acceptedEvidenceIds],
+      sourceIds: [...input.disposition.acceptedSourceIds],
+      governingPremise: premise,
+      nextAction:
+        "Cognitive STOP — replan/recovery as recommendation; Pilote HumanDecision if structural.",
+      notTechnicalError: true,
+      notHumanDecision: true,
+    },
+    surfacedDisposition: "evidence_backed",
+    allowsSilentSuccess,
+  };
+}
+
+/** Hard anti-claim helper for T11 silent-success regression. */
+export function cognitiveStopAllowsProductSuccess(
+  decision: CognitiveStopDecision,
+): boolean {
+  if (decision.cognitiveStop) return false;
+  if (decision.outcome === "COGNITIVE_STOP") return false;
+  return decision.allowsSilentSuccess === false
+    ? decision.outcome === "PROGRESS_OK" ||
+        decision.outcome === "PROGRESS_WITH_CONTRADICTION"
+    : false;
+}
+
+export function formatCognitiveStopPiloteNotice(
+  decision: CognitiveStopDecision,
+): string | null {
+  if (!decision.cognitiveStop || !decision.anatomy) return null;
+  const a = decision.anatomy;
+  return [
+    "ARRÊT COGNITIF (≠ erreur technique).",
+    a.reason,
+    a.contradictionEvidenceIds.length > 0
+      ? `Evidence: ${a.contradictionEvidenceIds.join(", ")}.`
+      : null,
+    a.sourceIds.length > 0 ? `Sources: ${a.sourceIds.join(", ")}.` : null,
+    `Suite: ${a.nextAction}`,
+  ]
+    .filter(Boolean)
+    .join(" ");
+}
+
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/contradictionDisposition.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/contradictionDisposition.ts
new file mode 100644
index 00000000..a0d53bb0
--- /dev/null
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/contradictionDisposition.ts
@@ -0,0 +1,248 @@
+/**
+ * MW3-S01 — Candidate vs evidence-backed contradiction disposition.
+ *
+ * Studio-owned fail-closed policy over existing Evidence freshness / source
+ * metadata. Does NOT manufacture Evidence or invent trustedSfiaProfile.
+ * Cognitive Strategy / CWP may influence verification effort elsewhere —
+ * they MUST NOT determine whether a contradiction is evidence-backed.
+ *
+ * OpenAI reasoning ≠ SFIA Evidence. Model assertion ≠ Truth C.
+ */
+
+import type { EvidenceFreshness } from "@/lib/oa/evidence-review/domain/types";
+import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
+
+export type ContradictionDispositionKind =
+  | "none"
+  | "candidate"
+  | "evidence_backed";
+
+export type ContradictionInsufficiencyReason =
+  | "no_conflict_signal"
+  | "insufficient_evidence_pointers"
+  | "insufficient_source_coverage"
+  | "stale_evidence"
+  | "wrong_domain"
+  | "missing_attribution"
+  | "unknown_freshness_when_required"
+  | "fabricated_pointer_rejected"
+  | "coverage_incomplete";
+
+/** Existing Evidence/source pointer — never invented by this controller. */
+export type ContradictionEvidencePointer = {
+  evidenceId: string;
+  sourceId: string;
+  /** Epistemic / claim domain qualifier already available (not OA error domain). */
+  domain: string;
+  freshness: EvidenceFreshness;
+  /** Attribution present when Evidence is attributable to a real source. */
+  attributable: boolean;
+  /** Rejected if true — fabricated / invented pointers. */
+  fabricated?: boolean;
+};
+
+export type ContradictionConflictInput = {
+  /** Apparent or stated conflict among claims/sources. */
+  conflictPresent: boolean;
+  /** Claimed governing domains the conflict must cover when freshness/domain matter. */
+  requiredDomains?: string[];
+  /** Minimum distinct real sources required for evidence-backed promotion. */
+  requiredSourceCount?: number;
+  /** When true, stale/unknown freshness blocks evidence-backed promotion. */
+  freshnessMatters?: boolean;
+  evidencePointers: ContradictionEvidencePointer[];
+  /**
+   * Optional CWP/strategy context — recorded for telemetry only.
+   * MUST NOT change disposition outcome.
+   */
+  strategyClass?: CognitiveStrategyClass | null;
+  sourceBreadth?: "low" | "medium" | "high" | "unknown" | null;
+  trustedSfiaProfile?: string | null;
+  /**
+   * Explicit fabrication attempt signal (eval/tests).
+   * Forces fail-closed candidate/none — never invents Evidence.
+   */
+  fabricationAttempt?: boolean;
+};
+
+export type ContradictionDispositionResult = {
+  disposition: ContradictionDispositionKind;
+  insufficiencyReasons: ContradictionInsufficiencyReason[];
+  acceptedEvidenceIds: string[];
+  acceptedSourceIds: string[];
+  /** Honest disclosure when proof is insufficient. */
+  disclosure: string | null;
+  /** Profile is contextual only — never authority; null never invented. */
+  trustedSfiaProfile: string | null;
+  /** Telemetry only — not a truth input. */
+  strategyClassObserved: CognitiveStrategyClass | null;
+  sourceBreadthObserved: "low" | "medium" | "high" | "unknown" | null;
+};
+
+function unique<T>(items: T[]): T[] {
+  return [...new Set(items)];
+}
+
+/**
+ * Fail-closed disposition:
+ * A none · B/C candidate · D evidence_backed when coverage+domain+freshness+attribution hold.
+ */
+export function disposeContradiction(
+  input: ContradictionConflictInput,
+): ContradictionDispositionResult {
+  const profile =
+    typeof input.trustedSfiaProfile === "string" &&
+    input.trustedSfiaProfile.trim().length > 0
+      ? input.trustedSfiaProfile.trim()
+      : null;
+
+  const baseMeta = {
+    trustedSfiaProfile: profile,
+    strategyClassObserved: input.strategyClass ?? null,
+    sourceBreadthObserved: input.sourceBreadth ?? null,
+  };
+
+  if (input.fabricationAttempt === true) {
+    return {
+      disposition: "candidate",
+      insufficiencyReasons: ["fabricated_pointer_rejected"],
+      acceptedEvidenceIds: [],
+      acceptedSourceIds: [],
+      disclosure:
+        "Contradiction fabrication refused — no Evidence pointer invented.",
+      ...baseMeta,
+    };
+  }
+
+  if (!input.conflictPresent) {
+    return {
+      disposition: "none",
+      insufficiencyReasons: ["no_conflict_signal"],
+      acceptedEvidenceIds: [],
+      acceptedSourceIds: [],
+      disclosure: null,
+      ...baseMeta,
+    };
+  }
+
+  const reasons: ContradictionInsufficiencyReason[] = [];
+  const pointers = input.evidencePointers ?? [];
+
+  const realPointers = pointers.filter((p) => p.fabricated !== true);
+  const fabricated = pointers.filter((p) => p.fabricated === true);
+  if (fabricated.length > 0) {
+    reasons.push("fabricated_pointer_rejected");
+  }
+
+  if (realPointers.length === 0) {
+    reasons.push("insufficient_evidence_pointers");
+    return {
+      disposition: "candidate",
+      insufficiencyReasons: unique(reasons),
+      acceptedEvidenceIds: [],
+      acceptedSourceIds: [],
+      disclosure:
+        "Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.",
+      ...baseMeta,
+    };
+  }
+
+  const attributable = realPointers.filter((p) => p.attributable === true);
+  if (attributable.length === 0) {
+    reasons.push("missing_attribution");
+  }
+
+  const freshnessMatters = input.freshnessMatters !== false;
+  const freshEnough = attributable.filter((p) => {
+    if (!freshnessMatters) return true;
+    if (p.freshness === "stale") return false;
+    if (p.freshness === "unknown") return false;
+    return p.freshness === "fresh" || p.freshness === "aging";
+  });
+  if (freshnessMatters) {
+    if (attributable.some((p) => p.freshness === "stale")) {
+      reasons.push("stale_evidence");
+    }
+    if (attributable.some((p) => p.freshness === "unknown")) {
+      reasons.push("unknown_freshness_when_required");
+    }
+  }
+
+  const requiredDomains = (input.requiredDomains ?? []).map((d) => d.trim()).filter(Boolean);
+  let domainOk = freshEnough;
+  if (requiredDomains.length > 0) {
+    domainOk = freshEnough.filter((p) => requiredDomains.includes(p.domain));
+    if (domainOk.length === 0 && freshEnough.length > 0) {
+      reasons.push("wrong_domain");
+    }
+  }
+
+  const requiredSourceCount = Math.max(1, input.requiredSourceCount ?? 1);
+  const sourceIds = unique(domainOk.map((p) => p.sourceId).filter(Boolean));
+  if (sourceIds.length < requiredSourceCount) {
+    reasons.push("insufficient_source_coverage");
+    if (sourceIds.length > 0 && sourceIds.length < requiredSourceCount) {
+      reasons.push("coverage_incomplete");
+    }
+  }
+
+  // MW2-R02 — low sourceBreadth alone is not proof; never promote on breadth signal.
+  if (input.sourceBreadth === "low" && requiredSourceCount > 1) {
+    if (sourceIds.length < requiredSourceCount) {
+      reasons.push("insufficient_source_coverage");
+    }
+  }
+
+  const evidenceIds = unique(domainOk.map((p) => p.evidenceId).filter(Boolean));
+  const blocking = unique(reasons).filter(
+    (r) =>
+      r === "insufficient_evidence_pointers" ||
+      r === "insufficient_source_coverage" ||
+      r === "coverage_incomplete" ||
+      r === "stale_evidence" ||
+      r === "wrong_domain" ||
+      r === "missing_attribution" ||
+      r === "unknown_freshness_when_required" ||
+      r === "fabricated_pointer_rejected",
+  );
+
+  if (blocking.length > 0 || evidenceIds.length === 0) {
+    return {
+      disposition: "candidate",
+      insufficiencyReasons: unique(reasons),
+      acceptedEvidenceIds: [],
+      acceptedSourceIds: [],
+      disclosure:
+        "Conflict retained as contradiction candidate — coverage, domain, freshness, or attribution insufficient for evidence-backed promotion.",
+      ...baseMeta,
+    };
+  }
+
+  return {
+    disposition: "evidence_backed",
+    insufficiencyReasons: [],
+    acceptedEvidenceIds: evidenceIds,
+    acceptedSourceIds: sourceIds,
+    disclosure: null,
+    ...baseMeta,
+  };
+}
+
+/**
+ * Strategy Class must not alter disposition for the same conflict/evidence facts.
+ * Used by MW2-R01 / T13 regression.
+ */
+export function dispositionIndependentOfStrategy(
+  base: ContradictionConflictInput,
+  classes: CognitiveStrategyClass[],
+): boolean {
+  const first = disposeContradiction({ ...base, strategyClass: classes[0] });
+  return classes.every((cls) => {
+    const next = disposeContradiction({ ...base, strategyClass: cls });
+    return (
+      next.disposition === first.disposition &&
+      next.acceptedEvidenceIds.join("|") === first.acceptedEvidenceIds.join("|")
+    );
+  });
+}
+
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index b0757540..8fa24cfb 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -96,7 +96,23 @@ export {
 } from "./runNoraAgentsTurn";
 export type { RunNoraAgentsTurnInput } from "./runNoraAgentsTurn";
 export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
-export type { RunNoraCognitiveTurnInput } from "./runNoraCognitiveTurn";
+export type {
+  RunNoraCognitiveTurnInput,
+  Mw3ContradictionAssessmentInput,
+} from "./runNoraCognitiveTurn";
+export {
+  disposeContradiction,
+  dispositionIndependentOfStrategy,
+} from "./contradictionDisposition";
+export type {
+  ContradictionConflictInput,
+  ContradictionEvidencePointer,
+} from "./contradictionDisposition";
+export {
+  decideCognitiveStop,
+  cognitiveStopAllowsProductSuccess,
+  formatCognitiveStopPiloteNotice,
+} from "./cognitiveStop";
 export {
   decideCognitiveStrategy,
   normalizeCognitiveWorkloadSignals,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 41e43297..0edae820 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -30,6 +30,20 @@ import {
 } from "./cognitiveWorkloadPolicy";
 import { validateRuntimeReasoningCapability } from "./reasoningCapability";
 import { buildRunnerModelSettingsForEffort } from "./reasoningModelSettings";
+import {
+  disposeContradiction,
+  type ContradictionConflictInput,
+} from "./contradictionDisposition";
+import { decideCognitiveStop } from "./cognitiveStop";
+
+export type Mw3ContradictionAssessmentInput = {
+  conflict: ContradictionConflictInput;
+  governingPremiseInvalidated?: boolean;
+  governingPremise?: string;
+  localImpactOnly?: boolean;
+  technicalFailure?: boolean;
+  technicalFailureMessage?: string;
+};

 export type RunNoraCognitiveTurnInput = {
   correlationId: string;
@@ -64,6 +78,11 @@ export type RunNoraCognitiveTurnInput = {
     | null;
   /** MW2 — skip policy for isolated tests. */
   skipCognitiveStrategy?: boolean;
+  /**
+   * MW3 — optional contradiction assessment over existing Evidence/source facts.
+   * Does not invent Evidence; does not select Hosted Search / model routing.
+   */
+  contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
 };

 function emitCognitiveStrategyTelemetry(
@@ -146,6 +165,78 @@ function withStrategyFields(
   };
 }

+function withMw3Fields(
+  turn: NoraCognitiveTurnResult,
+  input: RunNoraCognitiveTurnInput,
+  strategyDecision: ReturnType<typeof decideCognitiveStrategy> | null,
+): NoraCognitiveTurnResult {
+  const assessment = input.contradictionAssessment;
+  if (!assessment) return turn;
+
+  const conflict: ContradictionConflictInput = {
+    ...assessment.conflict,
+    strategyClass:
+      assessment.conflict.strategyClass ??
+      strategyDecision?.strategyClass ??
+      null,
+    trustedSfiaProfile:
+      assessment.conflict.trustedSfiaProfile !== undefined
+        ? assessment.conflict.trustedSfiaProfile
+        : input.trustedSfiaProfile,
+  };
+  const disposition = disposeContradiction(conflict);
+  const stop = decideCognitiveStop({
+    disposition,
+    governingPremiseInvalidated:
+      assessment.governingPremiseInvalidated === true,
+    governingPremise: assessment.governingPremise,
+    localImpactOnly: assessment.localImpactOnly === true,
+    technicalFailure: assessment.technicalFailure === true,
+    technicalFailureMessage: assessment.technicalFailureMessage,
+  });
+
+  let text = turn.text;
+  if (stop.cognitiveStop && stop.anatomy) {
+    text = [
+      turn.text,
+      "",
+      `[COGNITIVE STOP] ${stop.anatomy.reason}`,
+      stop.anatomy.contradictionEvidenceIds.length > 0
+        ? `Evidence: ${stop.anatomy.contradictionEvidenceIds.join(", ")}`
+        : null,
+      `Next: ${stop.anatomy.nextAction}`,
+    ]
+      .filter(Boolean)
+      .join("\n");
+  } else if (
+    disposition.disposition === "candidate" &&
+    disposition.disclosure
+  ) {
+    text = `${turn.text}\n\n[CONTRADICTION CANDIDATE] ${disposition.disclosure}`;
+  } else if (disposition.disposition === "evidence_backed" && stop.anatomy) {
+    text = `${turn.text}\n\n[EVIDENCE-BACKED CONTRADICTION] ${stop.anatomy.reason}`;
+  }
+
+  return {
+    ...turn,
+    text,
+    contradictionDisposition: disposition,
+    cognitiveStopDecision: stop,
+  };
+}
+
+function finalizeTurn(
+  turn: NoraCognitiveTurnResult,
+  input: RunNoraCognitiveTurnInput,
+  strategyDecision: ReturnType<typeof decideCognitiveStrategy> | null,
+): NoraCognitiveTurnResult {
+  return withMw3Fields(
+    withStrategyFields(turn, strategyDecision),
+    input,
+    strategyDecision,
+  );
+}
+
 export async function runNoraCognitiveTurn(
   input: RunNoraCognitiveTurnInput,
 ): Promise<NoraCognitiveTurnResult> {
@@ -187,12 +278,13 @@ export async function runNoraCognitiveTurn(
       provider: input.provider,
       runnerModelSettings,
     });
-    return withStrategyFields(
+    return finalizeTurn(
       {
         ...turn,
         memoryBCompactionState: "none",
         memoryBCompactionDetails: null,
       },
+      input,
       strategyDecision,
     );
   }
@@ -250,12 +342,13 @@ export async function runNoraCognitiveTurn(
       provider: input.provider,
       runnerModelSettings,
     });
-    return withStrategyFields(
+    return finalizeTurn(
       {
         ...turn,
         memoryBCompactionState: compactionState,
         memoryBCompactionDetails: compactionDetails,
       },
+      input,
       strategyDecision,
     );
   } finally {
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index 53ef6442..6bf267fd 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -6,6 +6,8 @@

 import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
 import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
+import type { ContradictionDispositionResult } from "./contradictionDisposition";
+import type { CognitiveStopDecision } from "./cognitiveStop";
 import type { MemoryBAvailability } from "./memoryBAvailability";
 import type {
   MemoryBCompactionDetails,
@@ -41,6 +43,10 @@ export type NoraCognitiveTurnResult = {
   cognitiveStrategyClass?: CognitiveStrategyClass;
   selectedReasoningEffort?: OpenAiReasoningEffort;
   criticalChallengeArmed?: boolean;
+  /** MW3 — present only when contradictionAssessment was supplied. */
+  contradictionDisposition?: ContradictionDispositionResult;
+  /** MW3 — present only when contradictionAssessment was supplied. */
+  cognitiveStopDecision?: CognitiveStopDecision;
 };

 export type { TruthCRevision, MemoryBCompactionState, MemoryBCompactionDetails };
diff --git a/projects/sfia-studio/app/lib/nora-eval/catalog.ts b/projects/sfia-studio/app/lib/nora-eval/catalog.ts
index 024326cb..25aad114 100644
--- a/projects/sfia-studio/app/lib/nora-eval/catalog.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/catalog.ts
@@ -228,6 +228,23 @@ const SCENARIOS: ScenarioDefinition[] = [
     ],
     d0Expectations: { mustPass: true },
   },
+  {
+    scenarioId: "mw3.s01.disposition-matrix",
+    catalogVersion: NORA_EVAL_CATALOG_VERSION,
+    storyIds: ["MW3-S01", "MW3-S02"],
+    barIds: ["NCC-BAR-06", "NCC-BAR-11"],
+    kind: "contradiction_stop",
+    title:
+      "MW3-S01/S02 — candidate vs evidence-backed disposition + Cognitive STOP honesty (D0)",
+    prompt:
+      "Deterministic disposition/STOP matrix T01–T14; ZERO REAL; no Hosted Search; no silent SUCCESS.",
+    requiredTier: ["D0"],
+    hardInvariants: [
+      "mw3_disposition_matrix",
+      "mw3_cognitive_stop_honesty",
+    ],
+    d0Expectations: { mustPass: true },
+  },
 ];

 export function getCatalogVersion(): typeof NORA_EVAL_CATALOG_VERSION {
diff --git a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
index 84880f85..03e41520 100644
--- a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
@@ -15,6 +15,7 @@ import { NORA_EVAL_CATALOG_VERSION } from "./types";
 import { observeMw1S01FromRuntime } from "./mw1S01Observe";
 import { observeMw1S02FromRuntime } from "./mw1S02Observe";
 import { observeMw2S01FromRuntime } from "./mw2S01Observe";
+import { observeMw3FromRuntime } from "./mw3Observe";

 function nowIso(): string {
   return new Date().toISOString();
@@ -107,6 +108,8 @@ async function observationForScenario(
       return observeMw1S02FromRuntime();
     case "mw2.s01.strategy-effort-decoupling":
       return observeMw2S01FromRuntime();
+    case "mw3.s01.disposition-matrix":
+      return observeMw3FromRuntime();
     default:
       return { productPath: "none" };
   }
diff --git a/projects/sfia-studio/app/lib/nora-eval/index.ts b/projects/sfia-studio/app/lib/nora-eval/index.ts
index ed3f1459..3a7b27f9 100644
--- a/projects/sfia-studio/app/lib/nora-eval/index.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/index.ts
@@ -25,6 +25,11 @@ export {
   observationFromMw2S01Facts,
   type Mw2S01RuntimeFacts,
 } from "./mw2S01Observe";
+export {
+  observeMw3FromRuntime,
+  observationFromMw3Facts,
+  type Mw3RuntimeFacts,
+} from "./mw3Observe";
 export {
   evaluateMw2S01Matrix,
   evaluateMw2S02Matrix,
diff --git a/projects/sfia-studio/app/lib/nora-eval/mw3Observe.ts b/projects/sfia-studio/app/lib/nora-eval/mw3Observe.ts
new file mode 100644
index 00000000..f12c61a5
--- /dev/null
+++ b/projects/sfia-studio/app/lib/nora-eval/mw3Observe.ts
@@ -0,0 +1,194 @@
+/**
+ * MW3 — deterministic observations for nora-eval (MODELED + EVAL).
+ */
+import {
+  decideCognitiveStop,
+  disposeContradiction,
+  dispositionIndependentOfStrategy,
+  COGNITIVE_STRATEGY_CLASSES,
+  type ContradictionConflictInput,
+} from "@/lib/nora-cognitive-runtime";
+import type { DeterministicObservation } from "./scorers";
+
+export type Mw3RuntimeFacts = {
+  candidateWhenInsufficient: boolean;
+  evidenceBackedWhenSufficient: boolean;
+  staleBlocked: boolean;
+  wrongDomainBlocked: boolean;
+  multiSourceInsufficient: boolean;
+  multiSourceSufficient: boolean;
+  fabricationRefused: boolean;
+  nonGoverningNoStop: boolean;
+  governingStop: boolean;
+  technicalNotStop: boolean;
+  silentSuccessBlocked: boolean;
+  profileNullHonest: boolean;
+  strategyIndependent: boolean;
+  sourceBreadthFailClosed: boolean;
+};
+
+export function observationFromMw3Facts(
+  facts: Mw3RuntimeFacts,
+): DeterministicObservation {
+  const ok =
+    facts.candidateWhenInsufficient &&
+    facts.evidenceBackedWhenSufficient &&
+    facts.staleBlocked &&
+    facts.wrongDomainBlocked &&
+    facts.multiSourceInsufficient &&
+    facts.multiSourceSufficient &&
+    facts.fabricationRefused &&
+    facts.nonGoverningNoStop &&
+    facts.governingStop &&
+    facts.technicalNotStop &&
+    facts.silentSuccessBlocked &&
+    facts.profileNullHonest &&
+    facts.strategyIndependent &&
+    facts.sourceBreadthFailClosed;
+
+  return {
+    productPath: "agents",
+    mw3DispositionOk: ok,
+    observedObservableIds: ok
+      ? [
+          "obs.contradiction.disposition",
+          "obs.cognitive_stop.honesty",
+          "obs.authority.human_decision_actor",
+          "obs.authority.absolute_boundary",
+        ]
+      : [],
+  };
+}
+
+const sufficient: ContradictionConflictInput = {
+  conflictPresent: true,
+  requiredDomains: ["governance"],
+  requiredSourceCount: 2,
+  freshnessMatters: true,
+  evidencePointers: [
+    {
+      evidenceId: "ev:1",
+      sourceId: "src:a",
+      domain: "governance",
+      freshness: "fresh",
+      attributable: true,
+    },
+    {
+      evidenceId: "ev:2",
+      sourceId: "src:b",
+      domain: "governance",
+      freshness: "fresh",
+      attributable: true,
+    },
+  ],
+  trustedSfiaProfile: null,
+};
+
+export function observeMw3FromRuntime(): DeterministicObservation {
+  const insufficient = disposeContradiction({
+    conflictPresent: true,
+    evidencePointers: [],
+  });
+  const backed = disposeContradiction(sufficient);
+  const stale = disposeContradiction({
+    conflictPresent: true,
+    requiredSourceCount: 1,
+    freshnessMatters: true,
+    evidencePointers: [
+      {
+        evidenceId: "ev:s",
+        sourceId: "src:a",
+        domain: "governance",
+        freshness: "stale",
+        attributable: true,
+      },
+    ],
+  });
+  const wrongDomain = disposeContradiction({
+    conflictPresent: true,
+    requiredDomains: ["governance"],
+    requiredSourceCount: 1,
+    evidencePointers: [
+      {
+        evidenceId: "ev:d",
+        sourceId: "src:a",
+        domain: "finance",
+        freshness: "fresh",
+        attributable: true,
+      },
+    ],
+  });
+  const multiInsuf = disposeContradiction({
+    conflictPresent: true,
+    requiredSourceCount: 2,
+    sourceBreadth: "low",
+    evidencePointers: [
+      {
+        evidenceId: "ev:1",
+        sourceId: "src:a",
+        domain: "governance",
+        freshness: "fresh",
+        attributable: true,
+      },
+    ],
+    requiredDomains: ["governance"],
+  });
+  const fabricated = disposeContradiction({
+    conflictPresent: true,
+    fabricationAttempt: true,
+    evidencePointers: [
+      {
+        evidenceId: "ev:f",
+        sourceId: "src:x",
+        domain: "governance",
+        freshness: "fresh",
+        attributable: true,
+        fabricated: true,
+      },
+    ],
+  });
+  const nonGov = decideCognitiveStop({
+    disposition: backed,
+    governingPremiseInvalidated: false,
+    localImpactOnly: true,
+  });
+  const gov = decideCognitiveStop({
+    disposition: backed,
+    governingPremiseInvalidated: true,
+    governingPremise: "Governing premise",
+  });
+  const technical = decideCognitiveStop({
+    disposition: disposeContradiction({
+      conflictPresent: false,
+      evidencePointers: [],
+    }),
+    governingPremiseInvalidated: false,
+    technicalFailure: true,
+  });
+
+  const facts: Mw3RuntimeFacts = {
+    candidateWhenInsufficient: insufficient.disposition === "candidate",
+    evidenceBackedWhenSufficient: backed.disposition === "evidence_backed",
+    staleBlocked: stale.disposition === "candidate",
+    wrongDomainBlocked: wrongDomain.disposition === "candidate",
+    multiSourceInsufficient: multiInsuf.disposition === "candidate",
+    multiSourceSufficient: backed.disposition === "evidence_backed",
+    fabricationRefused:
+      fabricated.disposition === "candidate" &&
+      fabricated.insufficiencyReasons.includes("fabricated_pointer_rejected"),
+    nonGoverningNoStop: nonGov.cognitiveStop === false,
+    governingStop: gov.cognitiveStop === true && gov.outcome === "COGNITIVE_STOP",
+    technicalNotStop: technical.cognitiveStop === false,
+    silentSuccessBlocked: gov.allowsSilentSuccess === false,
+    profileNullHonest: backed.trustedSfiaProfile === null,
+    strategyIndependent: dispositionIndependentOfStrategy(sufficient, [
+      ...COGNITIVE_STRATEGY_CLASSES,
+    ]),
+    sourceBreadthFailClosed: multiInsuf.insufficiencyReasons.includes(
+      "insufficient_source_coverage",
+    ),
+  };
+
+  return observationFromMw3Facts(facts);
+}
+
diff --git a/projects/sfia-studio/app/lib/nora-eval/scorers.ts b/projects/sfia-studio/app/lib/nora-eval/scorers.ts
index 497448aa..dbf77e0a 100644
--- a/projects/sfia-studio/app/lib/nora-eval/scorers.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/scorers.ts
@@ -54,13 +54,17 @@ export type DeterministicObservation = {
   crossRevisionRecompactionUsesCurrentTruthC?: boolean;
   currentRawProvenanceCoverageIndependent?: boolean;
   stalePriorInvalidationSignaled?: boolean;
-  /** MW2-S01 strategy / effort */
+  /**
+   * MW2-S01 strategy / effort
+   */
   strategyClassesObserved?: string[];
   effortsObserved?: string[];
   strategyDecoupledFromEffort?: boolean;
   routineElevatedEffort?: boolean;
   highAssuranceNotMax?: boolean;
   capabilityFailClosed?: boolean;
+  /** MW3-S01/S02 disposition + Cognitive STOP */
+  mw3DispositionOk?: boolean;
 };

 function hardFail(
@@ -284,6 +288,41 @@ export function scoreHardInvariants(
     }
   }

+  if (scenario.hardInvariants.includes("mw3_disposition_matrix")) {
+    results.push(
+      obs.mw3DispositionOk === true
+        ? pass(
+            "hard.mw3_disposition",
+            "MW3 T01–T14 disposition/STOP matrix PASS (D0)",
+            "NCC-BAR-06",
+          )
+        : hardFail(
+            "hard.mw3_disposition",
+            "MW3 disposition/STOP matrix not evidenced",
+            "NCC-BAR-06",
+            "obs.contradiction.disposition",
+          ),
+    );
+  }
+
+  if (scenario.hardInvariants.includes("mw3_cognitive_stop_honesty")) {
+    results.push(
+      obs.mw3DispositionOk === true &&
+        (obs.observedObservableIds ?? []).includes("obs.cognitive_stop.honesty")
+        ? pass(
+            "hard.mw3_cognitive_stop",
+            "Cognitive STOP honesty observables present",
+            "NCC-BAR-11",
+          )
+        : hardFail(
+            "hard.mw3_cognitive_stop",
+            "Cognitive STOP honesty not evidenced",
+            "NCC-BAR-11",
+            "obs.cognitive_stop.honesty",
+          ),
+    );
+  }
+
   if (scenario.hardInvariants.includes("uses_f2_not_ops1")) {
     if (obs.productPath === "ops1") {
       results.push(
diff --git a/projects/sfia-studio/app/lib/nora-eval/types.ts b/projects/sfia-studio/app/lib/nora-eval/types.ts
index d2eab2b1..3c9ba979 100644
--- a/projects/sfia-studio/app/lib/nora-eval/types.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/types.ts
@@ -17,7 +17,8 @@ export type ScenarioKind =
   | "genericity"
   | "parity_metric"
   | "memory_continuity"
-  | "cognitive_strategy";
+  | "cognitive_strategy"
+  | "contradiction_stop";

 export type PassFail = "PASS" | "FAIL" | "INCONCLUSIVE" | "NOT_PROVEN";

@@ -74,7 +75,9 @@ export type Mw1StoryId = "MW1-S01" | "MW1-S02" | "MW1-S03";

 export type Mw2StoryId = "MW2-S01" | "MW2-S02";

-export type CognitiveStoryId = Mw0StoryId | Mw1StoryId | Mw2StoryId;
+export type Mw3StoryId = "MW3-S01" | "MW3-S02";
+
+export type CognitiveStoryId = Mw0StoryId | Mw1StoryId | Mw2StoryId | Mw3StoryId;

 export type CycleTypeFixtureId =
   | "delivery_implementation"

```

---

## Created-file full contents (exact from ab61c18a)


### `projects/sfia-studio/app/lib/nora-cognitive-runtime/contradictionDisposition.ts`

```typescript
/**
 * MW3-S01 — Candidate vs evidence-backed contradiction disposition.
 *
 * Studio-owned fail-closed policy over existing Evidence freshness / source
 * metadata. Does NOT manufacture Evidence or invent trustedSfiaProfile.
 * Cognitive Strategy / CWP may influence verification effort elsewhere —
 * they MUST NOT determine whether a contradiction is evidence-backed.
 *
 * OpenAI reasoning ≠ SFIA Evidence. Model assertion ≠ Truth C.
 */

import type { EvidenceFreshness } from "@/lib/oa/evidence-review/domain/types";
import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";

export type ContradictionDispositionKind =
  | "none"
  | "candidate"
  | "evidence_backed";

export type ContradictionInsufficiencyReason =
  | "no_conflict_signal"
  | "insufficient_evidence_pointers"
  | "insufficient_source_coverage"
  | "stale_evidence"
  | "wrong_domain"
  | "missing_attribution"
  | "unknown_freshness_when_required"
  | "fabricated_pointer_rejected"
  | "coverage_incomplete";

/** Existing Evidence/source pointer — never invented by this controller. */
export type ContradictionEvidencePointer = {
  evidenceId: string;
  sourceId: string;
  /** Epistemic / claim domain qualifier already available (not OA error domain). */
  domain: string;
  freshness: EvidenceFreshness;
  /** Attribution present when Evidence is attributable to a real source. */
  attributable: boolean;
  /** Rejected if true — fabricated / invented pointers. */
  fabricated?: boolean;
};

export type ContradictionConflictInput = {
  /** Apparent or stated conflict among claims/sources. */
  conflictPresent: boolean;
  /** Claimed governing domains the conflict must cover when freshness/domain matter. */
  requiredDomains?: string[];
  /** Minimum distinct real sources required for evidence-backed promotion. */
  requiredSourceCount?: number;
  /** When true, stale/unknown freshness blocks evidence-backed promotion. */
  freshnessMatters?: boolean;
  evidencePointers: ContradictionEvidencePointer[];
  /**
   * Optional CWP/strategy context — recorded for telemetry only.
   * MUST NOT change disposition outcome.
   */
  strategyClass?: CognitiveStrategyClass | null;
  sourceBreadth?: "low" | "medium" | "high" | "unknown" | null;
  trustedSfiaProfile?: string | null;
  /**
   * Explicit fabrication attempt signal (eval/tests).
   * Forces fail-closed candidate/none — never invents Evidence.
   */
  fabricationAttempt?: boolean;
};

export type ContradictionDispositionResult = {
  disposition: ContradictionDispositionKind;
  insufficiencyReasons: ContradictionInsufficiencyReason[];
  acceptedEvidenceIds: string[];
  acceptedSourceIds: string[];
  /** Honest disclosure when proof is insufficient. */
  disclosure: string | null;
  /** Profile is contextual only — never authority; null never invented. */
  trustedSfiaProfile: string | null;
  /** Telemetry only — not a truth input. */
  strategyClassObserved: CognitiveStrategyClass | null;
  sourceBreadthObserved: "low" | "medium" | "high" | "unknown" | null;
};

function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

/**
 * Fail-closed disposition:
 * A none · B/C candidate · D evidence_backed when coverage+domain+freshness+attribution hold.
 */
export function disposeContradiction(
  input: ContradictionConflictInput,
): ContradictionDispositionResult {
  const profile =
    typeof input.trustedSfiaProfile === "string" &&
    input.trustedSfiaProfile.trim().length > 0
      ? input.trustedSfiaProfile.trim()
      : null;

  const baseMeta = {
    trustedSfiaProfile: profile,
    strategyClassObserved: input.strategyClass ?? null,
    sourceBreadthObserved: input.sourceBreadth ?? null,
  };

  if (input.fabricationAttempt === true) {
    return {
      disposition: "candidate",
      insufficiencyReasons: ["fabricated_pointer_rejected"],
      acceptedEvidenceIds: [],
      acceptedSourceIds: [],
      disclosure:
        "Contradiction fabrication refused — no Evidence pointer invented.",
      ...baseMeta,
    };
  }

  if (!input.conflictPresent) {
    return {
      disposition: "none",
      insufficiencyReasons: ["no_conflict_signal"],
      acceptedEvidenceIds: [],
      acceptedSourceIds: [],
      disclosure: null,
      ...baseMeta,
    };
  }

  const reasons: ContradictionInsufficiencyReason[] = [];
  const pointers = input.evidencePointers ?? [];

  const realPointers = pointers.filter((p) => p.fabricated !== true);
  const fabricated = pointers.filter((p) => p.fabricated === true);
  if (fabricated.length > 0) {
    reasons.push("fabricated_pointer_rejected");
  }

  if (realPointers.length === 0) {
    reasons.push("insufficient_evidence_pointers");
    return {
      disposition: "candidate",
      insufficiencyReasons: unique(reasons),
      acceptedEvidenceIds: [],
      acceptedSourceIds: [],
      disclosure:
        "Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.",
      ...baseMeta,
    };
  }

  const attributable = realPointers.filter((p) => p.attributable === true);
  if (attributable.length === 0) {
    reasons.push("missing_attribution");
  }

  const freshnessMatters = input.freshnessMatters !== false;
  const freshEnough = attributable.filter((p) => {
    if (!freshnessMatters) return true;
    if (p.freshness === "stale") return false;
    if (p.freshness === "unknown") return false;
    return p.freshness === "fresh" || p.freshness === "aging";
  });
  if (freshnessMatters) {
    if (attributable.some((p) => p.freshness === "stale")) {
      reasons.push("stale_evidence");
    }
    if (attributable.some((p) => p.freshness === "unknown")) {
      reasons.push("unknown_freshness_when_required");
    }
  }

  const requiredDomains = (input.requiredDomains ?? []).map((d) => d.trim()).filter(Boolean);
  let domainOk = freshEnough;
  if (requiredDomains.length > 0) {
    domainOk = freshEnough.filter((p) => requiredDomains.includes(p.domain));
    if (domainOk.length === 0 && freshEnough.length > 0) {
      reasons.push("wrong_domain");
    }
  }

  const requiredSourceCount = Math.max(1, input.requiredSourceCount ?? 1);
  const sourceIds = unique(domainOk.map((p) => p.sourceId).filter(Boolean));
  if (sourceIds.length < requiredSourceCount) {
    reasons.push("insufficient_source_coverage");
    if (sourceIds.length > 0 && sourceIds.length < requiredSourceCount) {
      reasons.push("coverage_incomplete");
    }
  }

  // MW2-R02 — low sourceBreadth alone is not proof; never promote on breadth signal.
  if (input.sourceBreadth === "low" && requiredSourceCount > 1) {
    if (sourceIds.length < requiredSourceCount) {
      reasons.push("insufficient_source_coverage");
    }
  }

  const evidenceIds = unique(domainOk.map((p) => p.evidenceId).filter(Boolean));
  const blocking = unique(reasons).filter(
    (r) =>
      r === "insufficient_evidence_pointers" ||
      r === "insufficient_source_coverage" ||
      r === "coverage_incomplete" ||
      r === "stale_evidence" ||
      r === "wrong_domain" ||
      r === "missing_attribution" ||
      r === "unknown_freshness_when_required" ||
      r === "fabricated_pointer_rejected",
  );

  if (blocking.length > 0 || evidenceIds.length === 0) {
    return {
      disposition: "candidate",
      insufficiencyReasons: unique(reasons),
      acceptedEvidenceIds: [],
      acceptedSourceIds: [],
      disclosure:
        "Conflict retained as contradiction candidate — coverage, domain, freshness, or attribution insufficient for evidence-backed promotion.",
      ...baseMeta,
    };
  }

  return {
    disposition: "evidence_backed",
    insufficiencyReasons: [],
    acceptedEvidenceIds: evidenceIds,
    acceptedSourceIds: sourceIds,
    disclosure: null,
    ...baseMeta,
  };
}

/**
 * Strategy Class must not alter disposition for the same conflict/evidence facts.
 * Used by MW2-R01 / T13 regression.
 */
export function dispositionIndependentOfStrategy(
  base: ContradictionConflictInput,
  classes: CognitiveStrategyClass[],
): boolean {
  const first = disposeContradiction({ ...base, strategyClass: classes[0] });
  return classes.every((cls) => {
    const next = disposeContradiction({ ...base, strategyClass: cls });
    return (
      next.disposition === first.disposition &&
      next.acceptedEvidenceIds.join("|") === first.acceptedEvidenceIds.join("|")
    );
  });
}
```


### `projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveStop.ts`

```typescript
/**
 * MW3-S02 — Cognitive STOP honesty (≠ generic error / ≠ Execute STOP).
 *
 * Maps evidence-backed contradiction + governing-premise impact onto an
 * attributable Cognitive STOP over existing progression seams.
 *
 * Cognitive STOP ≠ HumanDecision ≠ Confirmation ≠ provider HITL ≠ transport error.
 */

import type { ContradictionDispositionResult } from "./contradictionDisposition";

/** C3 §11 anatomy cases used for attributable Cognitive STOP messaging. */
export type CognitiveStopAnatomyCode =
  | "E_candidate_contradiction"
  | "F_evidence_backed_contradiction"
  | "G_governing_premise_contradiction"
  | "I_governed_stop";

export type CognitiveProgressionKind =
  | "continue"
  | "cognitive_stop"
  | "technical_failure";

/**
 * Product progression for Nora cognitive path.
 * SUCCESS is never emitted for a Cognitive STOP path.
 */
export type CognitiveProgressionOutcome =
  | "PROGRESS_OK"
  | "PROGRESS_WITH_CONTRADICTION"
  | "COGNITIVE_STOP"
  | "TECHNICAL_FAILURE";

export type CognitiveStopAnatomy = {
  caseCode: CognitiveStopAnatomyCode;
  /** Why progression cannot honestly continue. */
  reason: string;
  /** Evidence-backed contradiction ids (attributable). */
  contradictionEvidenceIds: string[];
  sourceIds: string[];
  governingPremise: string;
  /** Next recovery-shaped action — recommendation, not HumanDecision. */
  nextAction: string;
  /** Explicit: this is not a transport/provider error. */
  notTechnicalError: true;
  /** Explicit: Nora did not consume Pilote HD authority. */
  notHumanDecision: true;
};

export type CognitiveStopDecisionInput = {
  disposition: ContradictionDispositionResult;
  /** Evidence-backed contradiction invalidates an indispensable governing premise. */
  governingPremiseInvalidated: boolean;
  governingPremise?: string;
  /** Local / non-governing impact — surface contradiction, do not STOP. */
  localImpactOnly?: boolean;
  /** Technical/network/tool/transport failure path — never Cognitive STOP. */
  technicalFailure?: boolean;
  technicalFailureMessage?: string;
};

export type CognitiveStopDecision = {
  progression: CognitiveProgressionKind;
  outcome: CognitiveProgressionOutcome;
  /** True only for Cognitive STOP — never for technical failure. */
  cognitiveStop: boolean;
  anatomy: CognitiveStopAnatomy | null;
  /** Surfaced contradiction kind for UX (candidate / evidence_backed / none). */
  surfacedDisposition: ContradictionDispositionResult["disposition"];
  /** Anti-silent-SUCCESS: blocked path never reports product SUCCESS. */
  allowsSilentSuccess: false;
};

export function decideCognitiveStop(
  input: CognitiveStopDecisionInput,
): CognitiveStopDecision {
  const allowsSilentSuccess = false as const;
  const disposition = input.disposition.disposition;

  if (input.technicalFailure === true) {
    return {
      progression: "technical_failure",
      outcome: "TECHNICAL_FAILURE",
      cognitiveStop: false,
      anatomy: null,
      surfacedDisposition: disposition,
      allowsSilentSuccess,
    };
  }

  if (disposition === "none") {
    return {
      progression: "continue",
      outcome: "PROGRESS_OK",
      cognitiveStop: false,
      anatomy: null,
      surfacedDisposition: "none",
      allowsSilentSuccess,
    };
  }

  if (disposition === "candidate") {
    return {
      progression: "continue",
      outcome: "PROGRESS_WITH_CONTRADICTION",
      cognitiveStop: false,
      anatomy: {
        caseCode: "E_candidate_contradiction",
        reason:
          input.disposition.disclosure ??
          "Possible conflict retained as candidate — not evidence-backed.",
        contradictionEvidenceIds: [],
        sourceIds: [],
        governingPremise: input.governingPremise ?? "",
        nextAction: "Verify sources before treating the conflict as proven.",
        notTechnicalError: true,
        notHumanDecision: true,
      },
      surfacedDisposition: "candidate",
      allowsSilentSuccess,
    };
  }

  // evidence_backed
  if (input.localImpactOnly === true || input.governingPremiseInvalidated !== true) {
    return {
      progression: "continue",
      outcome: "PROGRESS_WITH_CONTRADICTION",
      cognitiveStop: false,
      anatomy: {
        caseCode: "F_evidence_backed_contradiction",
        reason:
          "Evidence-backed contradiction surfaced — governing premise still holds; progression may continue honestly.",
        contradictionEvidenceIds: [...input.disposition.acceptedEvidenceIds],
        sourceIds: [...input.disposition.acceptedSourceIds],
        governingPremise: input.governingPremise ?? "",
        nextAction: "Correct recommendation path if needed; no Cognitive STOP.",
        notTechnicalError: true,
        notHumanDecision: true,
      },
      surfacedDisposition: "evidence_backed",
      allowsSilentSuccess,
    };
  }

  const premise =
    typeof input.governingPremise === "string" &&
    input.governingPremise.trim().length > 0
      ? input.governingPremise.trim()
      : "Indispensable governing premise";

  return {
    progression: "cognitive_stop",
    outcome: "COGNITIVE_STOP",
    cognitiveStop: true,
    anatomy: {
      caseCode: "G_governing_premise_contradiction",
      reason: `Evidence-backed contradiction invalidates governing premise: ${premise}`,
      contradictionEvidenceIds: [...input.disposition.acceptedEvidenceIds],
      sourceIds: [...input.disposition.acceptedSourceIds],
      governingPremise: premise,
      nextAction:
        "Cognitive STOP — replan/recovery as recommendation; Pilote HumanDecision if structural.",
      notTechnicalError: true,
      notHumanDecision: true,
    },
    surfacedDisposition: "evidence_backed",
    allowsSilentSuccess,
  };
}

/** Hard anti-claim helper for T11 silent-success regression. */
export function cognitiveStopAllowsProductSuccess(
  decision: CognitiveStopDecision,
): boolean {
  if (decision.cognitiveStop) return false;
  if (decision.outcome === "COGNITIVE_STOP") return false;
  return decision.allowsSilentSuccess === false
    ? decision.outcome === "PROGRESS_OK" ||
        decision.outcome === "PROGRESS_WITH_CONTRADICTION"
    : false;
}

export function formatCognitiveStopPiloteNotice(
  decision: CognitiveStopDecision,
): string | null {
  if (!decision.cognitiveStop || !decision.anatomy) return null;
  const a = decision.anatomy;
  return [
    "ARRÊT COGNITIF (≠ erreur technique).",
    a.reason,
    a.contradictionEvidenceIds.length > 0
      ? `Evidence: ${a.contradictionEvidenceIds.join(", ")}.`
      : null,
    a.sourceIds.length > 0 ? `Sources: ${a.sourceIds.join(", ")}.` : null,
    `Suite: ${a.nextAction}`,
  ]
    .filter(Boolean)
    .join(" ");
}
```


### `projects/sfia-studio/app/lib/nora-eval/mw3Observe.ts`

```typescript
/**
 * MW3 — deterministic observations for nora-eval (MODELED + EVAL).
 */
import {
  decideCognitiveStop,
  disposeContradiction,
  dispositionIndependentOfStrategy,
  COGNITIVE_STRATEGY_CLASSES,
  type ContradictionConflictInput,
} from "@/lib/nora-cognitive-runtime";
import type { DeterministicObservation } from "./scorers";

export type Mw3RuntimeFacts = {
  candidateWhenInsufficient: boolean;
  evidenceBackedWhenSufficient: boolean;
  staleBlocked: boolean;
  wrongDomainBlocked: boolean;
  multiSourceInsufficient: boolean;
  multiSourceSufficient: boolean;
  fabricationRefused: boolean;
  nonGoverningNoStop: boolean;
  governingStop: boolean;
  technicalNotStop: boolean;
  silentSuccessBlocked: boolean;
  profileNullHonest: boolean;
  strategyIndependent: boolean;
  sourceBreadthFailClosed: boolean;
};

export function observationFromMw3Facts(
  facts: Mw3RuntimeFacts,
): DeterministicObservation {
  const ok =
    facts.candidateWhenInsufficient &&
    facts.evidenceBackedWhenSufficient &&
    facts.staleBlocked &&
    facts.wrongDomainBlocked &&
    facts.multiSourceInsufficient &&
    facts.multiSourceSufficient &&
    facts.fabricationRefused &&
    facts.nonGoverningNoStop &&
    facts.governingStop &&
    facts.technicalNotStop &&
    facts.silentSuccessBlocked &&
    facts.profileNullHonest &&
    facts.strategyIndependent &&
    facts.sourceBreadthFailClosed;

  return {
    productPath: "agents",
    mw3DispositionOk: ok,
    observedObservableIds: ok
      ? [
          "obs.contradiction.disposition",
          "obs.cognitive_stop.honesty",
          "obs.authority.human_decision_actor",
          "obs.authority.absolute_boundary",
        ]
      : [],
  };
}

const sufficient: ContradictionConflictInput = {
  conflictPresent: true,
  requiredDomains: ["governance"],
  requiredSourceCount: 2,
  freshnessMatters: true,
  evidencePointers: [
    {
      evidenceId: "ev:1",
      sourceId: "src:a",
      domain: "governance",
      freshness: "fresh",
      attributable: true,
    },
    {
      evidenceId: "ev:2",
      sourceId: "src:b",
      domain: "governance",
      freshness: "fresh",
      attributable: true,
    },
  ],
  trustedSfiaProfile: null,
};

export function observeMw3FromRuntime(): DeterministicObservation {
  const insufficient = disposeContradiction({
    conflictPresent: true,
    evidencePointers: [],
  });
  const backed = disposeContradiction(sufficient);
  const stale = disposeContradiction({
    conflictPresent: true,
    requiredSourceCount: 1,
    freshnessMatters: true,
    evidencePointers: [
      {
        evidenceId: "ev:s",
        sourceId: "src:a",
        domain: "governance",
        freshness: "stale",
        attributable: true,
      },
    ],
  });
  const wrongDomain = disposeContradiction({
    conflictPresent: true,
    requiredDomains: ["governance"],
    requiredSourceCount: 1,
    evidencePointers: [
      {
        evidenceId: "ev:d",
        sourceId: "src:a",
        domain: "finance",
        freshness: "fresh",
        attributable: true,
      },
    ],
  });
  const multiInsuf = disposeContradiction({
    conflictPresent: true,
    requiredSourceCount: 2,
    sourceBreadth: "low",
    evidencePointers: [
      {
        evidenceId: "ev:1",
        sourceId: "src:a",
        domain: "governance",
        freshness: "fresh",
        attributable: true,
      },
    ],
    requiredDomains: ["governance"],
  });
  const fabricated = disposeContradiction({
    conflictPresent: true,
    fabricationAttempt: true,
    evidencePointers: [
      {
        evidenceId: "ev:f",
        sourceId: "src:x",
        domain: "governance",
        freshness: "fresh",
        attributable: true,
        fabricated: true,
      },
    ],
  });
  const nonGov = decideCognitiveStop({
    disposition: backed,
    governingPremiseInvalidated: false,
    localImpactOnly: true,
  });
  const gov = decideCognitiveStop({
    disposition: backed,
    governingPremiseInvalidated: true,
    governingPremise: "Governing premise",
  });
  const technical = decideCognitiveStop({
    disposition: disposeContradiction({
      conflictPresent: false,
      evidencePointers: [],
    }),
    governingPremiseInvalidated: false,
    technicalFailure: true,
  });

  const facts: Mw3RuntimeFacts = {
    candidateWhenInsufficient: insufficient.disposition === "candidate",
    evidenceBackedWhenSufficient: backed.disposition === "evidence_backed",
    staleBlocked: stale.disposition === "candidate",
    wrongDomainBlocked: wrongDomain.disposition === "candidate",
    multiSourceInsufficient: multiInsuf.disposition === "candidate",
    multiSourceSufficient: backed.disposition === "evidence_backed",
    fabricationRefused:
      fabricated.disposition === "candidate" &&
      fabricated.insufficiencyReasons.includes("fabricated_pointer_rejected"),
    nonGoverningNoStop: nonGov.cognitiveStop === false,
    governingStop: gov.cognitiveStop === true && gov.outcome === "COGNITIVE_STOP",
    technicalNotStop: technical.cognitiveStop === false,
    silentSuccessBlocked: gov.allowsSilentSuccess === false,
    profileNullHonest: backed.trustedSfiaProfile === null,
    strategyIndependent: dispositionIndependentOfStrategy(sufficient, [
      ...COGNITIVE_STRATEGY_CLASSES,
    ]),
    sourceBreadthFailClosed: multiInsuf.insufficiencyReasons.includes(
      "insufficient_source_coverage",
    ),
  };

  return observationFromMw3Facts(facts);
}
```


### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw3.s01.s02.dispositionStop.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW3-S01/S02 D0 — contradiction disposition + Cognitive STOP honesty.
 * Covers T01–T14 minimum matrix + MW2-R01/R02/R03 carried reserves.
 * ZERO REAL OpenAI.
 */
import { describe, expect, it } from "vitest";
import {
  COGNITIVE_STRATEGY_CLASSES,
  cognitiveStopAllowsProductSuccess,
  decideCognitiveStop,
  disposeContradiction,
  dispositionIndependentOfStrategy,
  type ContradictionConflictInput,
  type ContradictionEvidencePointer,
} from "@/lib/nora-cognitive-runtime";

function ptr(
  partial: Partial<ContradictionEvidencePointer> &
    Pick<ContradictionEvidencePointer, "evidenceId" | "sourceId" | "domain">,
): ContradictionEvidencePointer {
  return {
    freshness: "fresh",
    attributable: true,
    fabricated: false,
    ...partial,
  };
}

const multiSourceConflict = (): ContradictionConflictInput => ({
  conflictPresent: true,
  requiredDomains: ["governance"],
  requiredSourceCount: 2,
  freshnessMatters: true,
  evidencePointers: [
    ptr({
      evidenceId: "ev:1",
      sourceId: "src:a",
      domain: "governance",
    }),
    ptr({
      evidenceId: "ev:2",
      sourceId: "src:b",
      domain: "governance",
    }),
  ],
  trustedSfiaProfile: null,
});

describe("MW3-S01 — contradiction disposition D0", () => {
  it("T01 — apparent conflict, insufficient evidence → candidate, not evidence-backed", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      evidencePointers: [],
      trustedSfiaProfile: null,
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("insufficient_evidence_pointers");
    expect(d.acceptedEvidenceIds).toEqual([]);
  });

  it("T02 — genuinely evidence-backed contradiction with attribution", () => {
    const d = disposeContradiction(multiSourceConflict());
    expect(d.disposition).toBe("evidence_backed");
    expect(d.acceptedEvidenceIds).toEqual(["ev:1", "ev:2"]);
    expect(d.acceptedSourceIds.sort()).toEqual(["src:a", "src:b"]);
    expect(d.insufficiencyReasons).toEqual([]);
  });

  it("T03 — stale evidence → no unjustified evidence-backed promotion", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 1,
      freshnessMatters: true,
      evidencePointers: [
        ptr({
          evidenceId: "ev:stale",
          sourceId: "src:a",
          domain: "governance",
          freshness: "stale",
        }),
      ],
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("stale_evidence");
  });

  it("T04 — wrong-domain evidence → no unjustified promotion", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredDomains: ["governance"],
      requiredSourceCount: 1,
      evidencePointers: [
        ptr({
          evidenceId: "ev:x",
          sourceId: "src:a",
          domain: "finance",
        }),
      ],
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("wrong_domain");
  });

  it("T05 — multi-source coverage insufficient → candidate fail-closed", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      requiredDomains: ["governance"],
      evidencePointers: [
        ptr({
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "governance",
        }),
      ],
      sourceBreadth: "low",
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("insufficient_source_coverage");
  });

  it("T06 — multi-source coverage sufficient → evidence-backed", () => {
    const d = disposeContradiction({
      ...multiSourceConflict(),
      sourceBreadth: "high",
    });
    expect(d.disposition).toBe("evidence_backed");
  });

  it("T07 — fabricated-contradiction temptation refused", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      fabricationAttempt: true,
      evidencePointers: [
        ptr({
          evidenceId: "ev:fake",
          sourceId: "src:invented",
          domain: "governance",
          fabricated: true,
        }),
      ],
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("fabricated_pointer_rejected");
    expect(d.acceptedEvidenceIds).toEqual([]);
    expect(d.disclosure).toMatch(/refused/i);
  });

  it("T12 — trustedSfiaProfile=null never invents profile (MW2-R03)", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 1,
      evidencePointers: [
        ptr({
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "governance",
        }),
      ],
      trustedSfiaProfile: null,
    });
    expect(d.trustedSfiaProfile).toBeNull();
    expect(d.disposition).toBe("evidence_backed");
  });

  it("T13 — borderline Focused / MW2-R01 — strategy must not alter evidence truth", () => {
    const base = multiSourceConflict();
    expect(
      dispositionIndependentOfStrategy(base, [...COGNITIVE_STRATEGY_CLASSES]),
    ).toBe(true);
    const focused = disposeContradiction({
      ...base,
      strategyClass: "Focused",
      sourceBreadth: "medium",
    });
    const deep = disposeContradiction({
      ...base,
      strategyClass: "Deep",
      sourceBreadth: "high",
    });
    expect(focused.disposition).toBe(deep.disposition);
    expect(focused.disposition).toBe("evidence_backed");
  });

  it("T14 — sourceBreadth low / MW2-R02 cannot masquerade as proof", () => {
    const d = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      sourceBreadth: "low",
      evidencePointers: [
        ptr({
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "governance",
        }),
      ],
      requiredDomains: ["governance"],
    });
    expect(d.disposition).toBe("candidate");
    expect(d.insufficiencyReasons).toContain("insufficient_source_coverage");
  });

  it("no conflict → disposition none", () => {
    const d = disposeContradiction({
      conflictPresent: false,
      evidencePointers: [],
    });
    expect(d.disposition).toBe("none");
  });
});

describe("MW3-S02 — Cognitive STOP honesty D0", () => {
  it("T08 — evidence-backed non-governing → continue, no automatic STOP", () => {
    const disposition = disposeContradiction(multiSourceConflict());
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: false,
      localImpactOnly: true,
      governingPremise: "Local claim only",
    });
    expect(stop.cognitiveStop).toBe(false);
    expect(stop.outcome).toBe("PROGRESS_WITH_CONTRADICTION");
    expect(stop.progression).toBe("continue");
    expect(stop.anatomy?.caseCode).toBe("F_evidence_backed_contradiction");
  });

  it("T09 — evidence-backed governing premise → Cognitive STOP; progress ≠ SUCCESS", () => {
    const disposition = disposeContradiction(multiSourceConflict());
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      governingPremise: "Project must remain FinOps-frozen",
    });
    expect(stop.cognitiveStop).toBe(true);
    expect(stop.outcome).toBe("COGNITIVE_STOP");
    expect(stop.progression).toBe("cognitive_stop");
    expect(stop.anatomy?.caseCode).toBe("G_governing_premise_contradiction");
    expect(stop.anatomy?.contradictionEvidenceIds).toEqual(["ev:1", "ev:2"]);
    expect(stop.anatomy?.notTechnicalError).toBe(true);
    expect(stop.anatomy?.notHumanDecision).toBe(true);
    expect(cognitiveStopAllowsProductSuccess(stop)).toBe(false);
  });

  it("T10 — technical/tool/transport failure ≠ Cognitive STOP", () => {
    const disposition = disposeContradiction({
      conflictPresent: false,
      evidencePointers: [],
    });
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: false,
      technicalFailure: true,
      technicalFailureMessage: "provider timeout",
    });
    expect(stop.cognitiveStop).toBe(false);
    expect(stop.outcome).toBe("TECHNICAL_FAILURE");
    expect(stop.progression).toBe("technical_failure");
    expect(stop.anatomy).toBeNull();
  });

  it("T11 — silent-success regression: STOP path never allows product SUCCESS", () => {
    const disposition = disposeContradiction(multiSourceConflict());
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      governingPremise: "Governing premise",
    });
    expect(stop.allowsSilentSuccess).toBe(false);
    expect(stop.outcome).not.toBe("PROGRESS_OK");
    expect(cognitiveStopAllowsProductSuccess(stop)).toBe(false);
  });

  it("candidate conflict never auto-STOPs", () => {
    const disposition = disposeContradiction({
      conflictPresent: true,
      evidencePointers: [],
    });
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      governingPremise: "Would-be premise",
    });
    expect(disposition.disposition).toBe("candidate");
    expect(stop.cognitiveStop).toBe(false);
    expect(stop.outcome).toBe("PROGRESS_WITH_CONTRADICTION");
  });
});
```


### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw3.turn.wiring.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW3 — runNoraCognitiveTurn wires disposition + Cognitive STOP (Fake provider).
 * ZERO REAL OpenAI.
 */
import { describe, expect, it } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { runNoraCognitiveTurn } from "@/lib/nora-cognitive-runtime";

describe("MW3 — cognitive turn MW3 field wiring D0", () => {
  it("applies evidence-backed governing STOP onto turn result", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] base turn." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw3-turn-stop",
      projectId: "prj:mw3",
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Assess contradiction." },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      simulateMemoryBUnavailable: true,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          requiredSourceCount: 2,
          requiredDomains: ["governance"],
          evidencePointers: [
            {
              evidenceId: "ev:1",
              sourceId: "src:a",
              domain: "governance",
              freshness: "fresh",
              attributable: true,
            },
            {
              evidenceId: "ev:2",
              sourceId: "src:b",
              domain: "governance",
              freshness: "fresh",
              attributable: true,
            },
          ],
          trustedSfiaProfile: null,
        },
        governingPremiseInvalidated: true,
        governingPremise: "Must remain FinOps-frozen",
      },
    });

    expect(turn.contradictionDisposition?.disposition).toBe("evidence_backed");
    expect(turn.cognitiveStopDecision?.cognitiveStop).toBe(true);
    expect(turn.cognitiveStopDecision?.outcome).toBe("COGNITIVE_STOP");
    expect(turn.cognitiveStopDecision?.allowsSilentSuccess).toBe(false);
    expect(turn.text).toMatch(/COGNITIVE STOP/);
  });

  it("keeps candidate without STOP when evidence insufficient", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] candidate path." }],
    });
    const turn = await runNoraCognitiveTurn({
      correlationId: "mw3-turn-candidate",
      projectId: "prj:mw3",
      messages: [
        { role: "system", content: "SFIA boundary." },
        { role: "user", content: "Possible conflict?" },
      ],
      provider,
      enableTools: false,
      skipCognitiveStrategy: true,
      simulateMemoryBUnavailable: true,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          evidencePointers: [],
          trustedSfiaProfile: null,
        },
        governingPremiseInvalidated: true,
        governingPremise: "Would-be premise",
      },
    });

    expect(turn.contradictionDisposition?.disposition).toBe("candidate");
    expect(turn.cognitiveStopDecision?.cognitiveStop).toBe(false);
    expect(turn.cognitiveStopDecision?.outcome).toBe(
      "PROGRESS_WITH_CONTRADICTION",
    );
  });
});
```


### `projects/sfia-studio/app/__tests__/nora-eval/mw3.disposition.eval.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW3 eval catalog scenario D0 — MODELED + EVAL.
 * Fake/deterministic only — ZERO REAL OpenAI.
 */
import { describe, expect, it } from "vitest";
import { getScenario } from "@/lib/nora-eval/catalog";
import { runD0Scenario } from "@/lib/nora-eval/d0Runner";
import { observeMw3FromRuntime } from "@/lib/nora-eval/mw3Observe";

describe("MW3 eval — disposition matrix scenario", () => {
  it("catalog includes mw3.s01.disposition-matrix", () => {
    const s = getScenario("mw3.s01.disposition-matrix");
    expect(s).toBeDefined();
    expect(s?.storyIds).toEqual(["MW3-S01", "MW3-S02"]);
    expect(s?.hardInvariants).toContain("mw3_disposition_matrix");
    expect(s?.hardInvariants).toContain("mw3_cognitive_stop_honesty");
  });

  it("observeMw3FromRuntime passes T01–T14 facts", () => {
    const obs = observeMw3FromRuntime();
    expect(obs.mw3DispositionOk).toBe(true);
    expect(obs.observedObservableIds).toContain("obs.contradiction.disposition");
    expect(obs.observedObservableIds).toContain("obs.cognitive_stop.honesty");
  });

  it("D0 scenario run includes MW3 hard invariants PASS", async () => {
    const result = await runD0Scenario("mw3.s01.disposition-matrix");
    expect(result.passFail).toBe("PASS");
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw3_disposition" && s.passFail === "PASS",
      ),
    ).toBe(true);
    expect(
      result.scorers.some(
        (s) =>
          s.scorerId === "hard.mw3_cognitive_stop" && s.passFail === "PASS",
      ),
    ).toBe(true);
  });
});
```


### `projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.surface.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * MW3-S02 deterministic E2E + UX surface — Cognitive STOP honesty on product path.
 * Fake provider only — ZERO REAL OpenAI.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  decideCognitiveStop,
  disposeContradiction,
  formatCognitiveStopPiloteNotice,
} from "@/lib/nora-cognitive-runtime";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  getProjectRuntimeAction: getProjectRuntimeActionMock,
}));

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:mw3-demo",
    name: "Projet MW3",
    shortReference: "MW3",
    objective: "Cognitive STOP honesty surface.",
    contextSummary: "MW3 D0 product path.",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:mw3",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:mw3-demo",
    version: 1 as const,
    createdAt: "2026-09-02T12:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "SQLITE_OA_PRODUCT_STORE" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    projectLpsRestartSafe: true as const,
    cycleInstanceRestartSafe: true as const,
    humanDecisionRestartSafe: true as const,
    executionContractRestartSafe: true as const,
    messages: [] as const,
  },
};

describe("MW3-S02 — product/runtime Cognitive STOP surface D0", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let sessionDir: string;
  let sessionDbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    setConversationProviderForTests(null);
    sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw3-orch-"));
    sessionDbPath = path.join(sessionDir, "session.sqlite");
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
    fs.rmSync(sessionDir, { recursive: true, force: true });
  });

  it("maps evidence-backed governing STOP onto assistant status cognitive_stop", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [
        {
          kind: "message",
          text: "[TEST/FAKE] Nora turn before STOP mapping.",
        },
      ],
    });

    const disposition = disposeContradiction({
      conflictPresent: true,
      requiredSourceCount: 2,
      requiredDomains: ["governance"],
      evidencePointers: [
        {
          evidenceId: "ev:1",
          sourceId: "src:a",
          domain: "governance",
          freshness: "fresh",
          attributable: true,
        },
        {
          evidenceId: "ev:2",
          sourceId: "src:b",
          domain: "governance",
          freshness: "fresh",
          attributable: true,
        },
      ],
      trustedSfiaProfile: null,
    });
    const stop = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: true,
      governingPremise: "FinOps freeze must hold",
    });
    const notice = formatCognitiveStopPiloteNotice(stop);
    expect(stop.cognitiveStop).toBe(true);
    expect(notice).toMatch(/ARRÊT COGNITIF/i);
    expect(notice).toMatch(/≠ erreur technique/);
    expect(provider.providerId).toMatch(/fake/i);
  });

  it("distinguishes technical failure UX from Cognitive STOP labels", () => {
    const disposition = disposeContradiction({
      conflictPresent: false,
      evidencePointers: [],
    });
    const technical = decideCognitiveStop({
      disposition,
      governingPremiseInvalidated: false,
      technicalFailure: true,
    });
    const stop = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: true,
        requiredSourceCount: 1,
        evidencePointers: [
          {
            evidenceId: "ev:1",
            sourceId: "src:a",
            domain: "governance",
            freshness: "fresh",
            attributable: true,
          },
        ],
      }),
      governingPremiseInvalidated: true,
      governingPremise: "Premise",
    });
    expect(technical.cognitiveStop).toBe(false);
    expect(technical.outcome).toBe("TECHNICAL_FAILURE");
    expect(formatCognitiveStopPiloteNotice(technical)).toBeNull();
    expect(stop.cognitiveStop).toBe(true);
    expect(formatCognitiveStopPiloteNotice(stop)).toBeTruthy();
  });

  it("candidate vs evidence-backed vs STOP are distinguishable progression labels", () => {
    const none = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: false,
        evidencePointers: [],
      }),
      governingPremiseInvalidated: false,
    });
    const candidate = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: true,
        evidencePointers: [],
      }),
      governingPremiseInvalidated: true,
    });
    const backedContinue = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: true,
        requiredSourceCount: 1,
        evidencePointers: [
          {
            evidenceId: "ev:1",
            sourceId: "src:a",
            domain: "governance",
            freshness: "fresh",
            attributable: true,
          },
        ],
      }),
      governingPremiseInvalidated: false,
    });
    const stop = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: true,
        requiredSourceCount: 1,
        evidencePointers: [
          {
            evidenceId: "ev:1",
            sourceId: "src:a",
            domain: "governance",
            freshness: "fresh",
            attributable: true,
          },
        ],
      }),
      governingPremiseInvalidated: true,
      governingPremise: "Premise",
    });
    const technical = decideCognitiveStop({
      disposition: disposeContradiction({
        conflictPresent: false,
        evidencePointers: [],
      }),
      governingPremiseInvalidated: false,
      technicalFailure: true,
    });
    // Distinguishing product surface: disposition + outcome + cognitiveStop flag.
    const labels = [
      `${none.surfacedDisposition}|${none.outcome}|stop=${none.cognitiveStop}`,
      `${candidate.surfacedDisposition}|${candidate.outcome}|stop=${candidate.cognitiveStop}`,
      `${backedContinue.surfacedDisposition}|${backedContinue.outcome}|stop=${backedContinue.cognitiveStop}`,
      `${stop.surfacedDisposition}|${stop.outcome}|stop=${stop.cognitiveStop}`,
      `${technical.surfacedDisposition}|${technical.outcome}|stop=${technical.cognitiveStop}`,
    ];
    expect(new Set(labels).size).toBe(5);
    expect(none.outcome).toBe("PROGRESS_OK");
    expect(candidate.surfacedDisposition).toBe("candidate");
    expect(backedContinue.surfacedDisposition).toBe("evidence_backed");
    expect(stop.outcome).toBe("COGNITIVE_STOP");
    expect(technical.outcome).toBe("TECHNICAL_FAILURE");
  });

  it("orchestrateProjectAssistantTurn returns cognitive_stop + mw3 DTO (E2E Fake)", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] MW3 STOP path." }],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:mw3-demo",
      content: "Évalue la contradiction gouvernante.",
      sessionDbPath,
      provider,
      simulateMemoryBUnavailable: true,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          requiredSourceCount: 2,
          requiredDomains: ["governance"],
          evidencePointers: [
            {
              evidenceId: "ev:1",
              sourceId: "src:a",
              domain: "governance",
              freshness: "fresh",
              attributable: true,
            },
            {
              evidenceId: "ev:2",
              sourceId: "src:b",
              domain: "governance",
              freshness: "fresh",
              attributable: true,
            },
          ],
          trustedSfiaProfile: null,
        },
        governingPremiseInvalidated: true,
        governingPremise: "FinOps freeze must hold",
      },
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("cognitive_stop");
    expect(result.mw3?.cognitiveStop).toBe(true);
    expect(result.mw3?.disposition).toBe("evidence_backed");
    expect(result.mw3?.progression).toBe("COGNITIVE_STOP");
    expect(result.mw3?.allowsSilentSuccess).toBe(false);
    expect(result.ephemeralNotice).toMatch(/ARRÊT COGNITIF/i);
    expect(result.ephemeralNotice).toMatch(/≠ erreur technique/);
  });

  it("orchestrateProjectAssistantTurn keeps ok for candidate (no silent STOP)", async () => {
    const provider = new FakeConversationProvider({
      toolScript: [{ kind: "message", text: "[TEST/FAKE] MW3 candidate." }],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: "prj:mw3-demo",
      content: "Conflit possible sans preuve.",
      sessionDbPath,
      provider,
      simulateMemoryBUnavailable: true,
      contradictionAssessment: {
        conflict: {
          conflictPresent: true,
          evidencePointers: [],
          trustedSfiaProfile: null,
        },
        governingPremiseInvalidated: true,
        governingPremise: "Would-be premise",
      },
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.status).toBe("ok");
    expect(result.mw3?.cognitiveStop).toBe(false);
    expect(result.mw3?.disposition).toBe("candidate");
    expect(result.mw3?.progression).toBe("PROGRESS_WITH_CONTRADICTION");
  });
});
```


### `projects/sfia-studio/app/__tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx`

```typescript
/**
 * MW3-S02 UX — ProjectAssistantPanel surfaces Cognitive STOP distinctly.
 * Fake send action only — ZERO REAL OpenAI.
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";

const {
  projectAssistantSendActionMock,
  projectAssistantRehydrateEvidenceOutcomeActionMock,
} = vi.hoisted(() => ({
  projectAssistantSendActionMock: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantSendAction: (...args: unknown[]) =>
    projectAssistantSendActionMock(...args),
  projectAssistantDecideAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const PROJECT = {
  projectId: "prj:mw3-ui",
  name: "Projet MW3 UI",
  shortReference: "MW3UI",
  objective: "Surface Cognitive STOP.",
  contextSummary: "MW3 UX",
  criticality: "STANDARD" as const,
  constraints: [] as string[],
  lpsId: "lps:mw3-ui",
  lpsVersion: 1,
  lpsCreatedAt: "2026-09-02T12:00:00.000Z",
  doctrineId: "pkg:studio-v3-oa",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:mw3-ui",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS" as const,
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
  readiness: "NOT_READY" as const,
};

describe("MW3-S02 — ProjectAssistantPanel Cognitive STOP UX", () => {
  beforeEach(() => {
    projectAssistantSendActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
      ok: false,
      status: "error",
      code: "NO_EVIDENCE_OUTCOME_REFS",
      message: "none",
      mode: "fixture",
      retryable: false,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("renders Arrêt cognitif surface from mw3 DTO (≠ technical error)", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "cognitive_stop",
      text: "[TEST/FAKE] blocked by Cognitive STOP.",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice: "ARRÊT COGNITIF (≠ erreur technique).",
      cognitiveRuntime: "agents",
      sessionId: "sess:mw3",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      mw3: {
        disposition: "evidence_backed",
        progression: "COGNITIVE_STOP",
        cognitiveStop: true,
        reason: "Evidence-backed contradiction invalidates governing premise: FinOps freeze",
        evidenceIds: ["ev:1", "ev:2"],
        sourceIds: ["src:a", "src:b"],
        governingPremise: "FinOps freeze",
        nextAction: "Cognitive STOP — replan/recovery as recommendation.",
        insufficiencyReasons: [],
        allowsSilentSuccess: false,
      },
    });

    render(<ProjectAssistantPanel projectId="prj:mw3-ui" />);
    const input = screen.getByTestId("project-assistant-input");
    fireEvent.change(input, { target: { value: "Évalue la contradiction." } });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
    });
    const surface = screen.getByTestId("project-assistant-mw3-surface");
    expect(surface.getAttribute("data-mw3-cognitive-stop")).toBe("true");
    expect(surface.getAttribute("data-mw3-disposition")).toBe("evidence_backed");
    expect(surface.getAttribute("data-mw3-progression")).toBe("COGNITIVE_STOP");
    expect(surface.textContent).toMatch(/Arrêt cognitif/i);
    expect(surface.textContent).not.toMatch(/erreur technique/i);
  });

  it("renders candidate surface without Cognitive STOP", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE] candidate retained.",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice: "Session Memory B unavailable.",
      cognitiveRuntime: "agents",
      sessionId: "sess:mw3-cand",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      mw3: {
        disposition: "candidate",
        progression: "PROGRESS_WITH_CONTRADICTION",
        cognitiveStop: false,
        reason: "Possible conflict retained as candidate.",
        evidenceIds: [],
        sourceIds: [],
        governingPremise: null,
        nextAction: "Verify sources.",
        insufficiencyReasons: ["insufficient_source_coverage"],
        allowsSilentSuccess: false,
      },
    });

    render(<ProjectAssistantPanel projectId="prj:mw3-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Conflit possible ?" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
    });
    const surface = screen.getByTestId("project-assistant-mw3-surface");
    expect(surface.getAttribute("data-mw3-cognitive-stop")).toBe("false");
    expect(surface.getAttribute("data-mw3-disposition")).toBe("candidate");
    expect(surface.textContent).toMatch(/Contradiction candidate/i);
  });
});
```
