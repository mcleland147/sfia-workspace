# LIGHT REVIEW PACK — HABITFLOW-NORA-ACW-OPTION-REF-CONTRACT-CORR-01

## 0. Meta
- timestamp: `2026-10-02T22:01:32Z`
- cycle: `HABITFLOW-NORA-ACW-OPTION-REF-CONTRACT-CORR-01`
- type: Cycle 8 — Delivery / implémentation
- profil: Standard
- typologie: RUN / Support
- verdict: `READY FOR CHATGPT REVIEW — NORA ACW CONTRACT CORRECTION CANDIDATE`
- project commit/push/PR/merge/REAL: **NO**

## 1. Local Git Truth
- worktree: `/Users/morris/Projects/sfia-studio-nora-acw-option-ref-contract-01`
- branch: `fix/sfia-studio-nora-acw-option-ref-contract-01`
- HEAD / origin/main: `0a8c808bf0f701e6b2c1fcf7421ca04efc4f03fe` (Merge PR #545)
- prior Delivery worktree left intact (detached `b0cbdfb0` on handoff-01); new worktree used for clean main base
- staged project files: none
- dirty: product candidate (2 files) + `.tmp-sfia-review/**` temp only

## 2. Qualification
- Capability: Nora ACW Structured Output → Recommendation PT → decide → EC
- Milestone: HabitFlow Replay 02 blocker before PT Recommendation materialization
- KEEP: materializeActiveCycleWork fail-closed `recommended_option_ref_only_on_recommendation`
- ADAPT: `NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA`, `isNoraActiveCycleWorkItem`
- COMPLETE: ACW + semantic continuity tests
- INTERDIT: new architecture / store / second validator engine

## 3. Root cause confirmation (pre-mod)
| Layer | Before |
|---|---|
| Structured Output schema | `recommendedOptionRef: string \| null` for **all** types |
| `isNoraActiveCycleWorkItem` | accepted non-Recommendation + valid `opt:*` |
| `materializeActiveCycleWork` | refused with `ACTIVE_CYCLE_WORK_INVALID` / `recommended_option_ref_only_on_recommendation` |

= exact HABITFLOW-REPLAY-02 failure mode. **ROOT CAUSE MATCH.**

## 4. OpenAI Capability Fit
- Provider: `openaiProvider.completeStructured` → Responses API `json_schema` **strict:true**
- Existing schemas already use nested `anyOf` (confidence/blocking/nullables)
- Strategy: nested `anyOf` discrimination on item schema (Recommendation vs non-Recommendation)
- No if/then/else; no second format; no retry engine; no silent repair
- KEEP + ADAPT Structured Outputs

## 5. Implementation
### After
- Recommendation branch: `recommendedOptionRef` = string | null
- Non-Recommendation branch: `recommendedOptionRef` = **null only** (`type: "null"`)
- Parser rejects non-Recommendation + non-null (fail-closed; no silent nulling)
- Materializer KEEP identical defense-in-depth

### Schema + parser (post-fix)
```typescript
const NORA_ACTIVE_CYCLE_WORK_ITEM_COMMON_PROPERTIES = {
  statement: { type: "string" as const },
  confidence: {
    anyOf: [
      {
        type: "string" as const,
        enum: ["high", "medium", "low", "none"],
      },
      { type: "null" as const },
    ],
  },
  blocking: { anyOf: [{ type: "boolean" as const }, { type: "null" as const }] },
} as const;

const NORA_ACTIVE_CYCLE_WORK_ITEM_REQUIRED = [
  "type",
  "statement",
  "confidence",
  "blocking",
  "recommendedOptionRef",
] as const;

/**
 * D-GF-ACW-01 — non-authoritative active-cycle cognitive work items (no ids).
 *
 * HABITFLOW-NORA-ACW-OPTION-REF-CONTRACT-CORR-01 — parity with
 * materializeActiveCycleWork `recommended_option_ref_only_on_recommendation`:
 * - Recommendation: recommendedOptionRef = string | null
 * - all other types: recommendedOptionRef = null only
 *
 * Discriminated via nested anyOf (OpenAI Responses json_schema strict:true).
 * Recommendation ≠ HumanDecision; never promotes trajectory.
 */
export const NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA = {
  anyOf: [
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: [...NORA_ACTIVE_CYCLE_WORK_ITEM_REQUIRED],
      properties: {
        type: {
          type: "string" as const,
          enum: ["Recommendation"],
        },
        ...NORA_ACTIVE_CYCLE_WORK_ITEM_COMMON_PROPERTIES,
        /**
         * Canonical Option identity when Recommendation targets a server-derived
         * trajectory/proposal Option. Structured field only (never from prose).
         */
        recommendedOptionRef: {
          anyOf: [{ type: "string" as const }, { type: "null" as const }],
        },
      },
    },
    {
      type: "object" as const,
      additionalProperties: false as const,
      required: [...NORA_ACTIVE_CYCLE_WORK_ITEM_REQUIRED],
      properties: {
        type: {
          type: "string" as const,
          enum: [
            "Observation",
            "Hypothesis",
            "Option",
            "Reservation",
            "Contradiction",
          ],
        },
        ...NORA_ACTIVE_CYCLE_WORK_ITEM_COMMON_PROPERTIES,
        /** Non-Recommendation ACW items must not carry Option identity. */
        recommendedOptionRef: { type: "null" as const },
      },
    },
  ],
} as const;


```

```typescript
export function isNoraActiveCycleWorkItem(
  value: unknown,
): value is NoraActiveCycleWorkItem {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (!ACTIVE_CYCLE_WORK_ITEM_TYPES.has(String(o.type))) return false;
  if (typeof o.statement !== "string") return false;
  if (
    o.confidence !== null &&
    !(
      typeof o.confidence === "string" &&
      ACTIVE_CYCLE_WORK_CONFIDENCES.has(o.confidence)
    )
  ) {
    return false;
  }
  if (o.blocking !== null && typeof o.blocking !== "boolean") return false;
  // HABITFLOW-NORA-ACW-OPTION-REF-CONTRACT-CORR-01 — parity with materializer:
  // non-Recommendation + non-null recommendedOptionRef → REJECT (never silent null).
  // Recommendation: absent (legacy) OR null OR valid opt: ref.
  // Invalid non-null strings fail closed (reject item).
  const type = String(o.type);
  const hasRefKey = "recommendedOptionRef" in o;
  const rawRef = hasRefKey ? o.recommendedOptionRef : undefined;
  if (type !== "Recommendation") {
    if (rawRef !== undefined && rawRef !== null) {
      return false;
    }
    return true;
  }
  if (
    hasRefKey &&
    rawRef !== null &&
    rawRef !== undefined
  ) {
    if (normalizeActiveCycleRecommendedOptionRef(rawRef) === null) {
      return false;
    }
  }
  return true;
}


```

## 6. Files read
- convergence Build Doctrine / Roadmap / product-completion cadrage / GERR architecture (paths as brief)
- ckc/08-delivery-implementation.md
- noraProductTurnOutputType.ts, materializeActiveCycleWork.ts
- openaiProvider.ts (strict:true)
- activeCycleCognitiveWork.d0.test.ts
- pilotNoraStudioSemanticContinuity*.d0.test.ts (commit 71c31a8e)

## 7. Files modified
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts`

NOT modified: materializeActiveCycleWork.ts, HabitFlow DB, framing, doctrine, #545 path

## 8. Diff (complete)
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
index c81e708a..143ccc03 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
@@ -8,6 +8,7 @@
 import fs from "node:fs";
 import os from "node:os";
 import path from "node:path";
+import Ajv from "ajv";
 import { afterEach, describe, expect, it, vi } from "vitest";
 import {
   classifyTrajectoryBinding,
@@ -31,6 +32,7 @@ import {
   NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA,
   NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA,
   applyPreCycleRoutingBoundaryCoherence,
+  isNoraActiveCycleWorkItem,
   isNoraActiveCycleWorkOutput,
   normalizeNoraProductTurnStructuredOutput,
   type NoraActiveCycleWorkItem,
@@ -840,6 +842,103 @@ describe("D-GF-ACW-01 schema (BAR-WORK-12..15)", () => {
     );
     expect(acwSlice).not.toMatch(/"properties":\{[^}]*"(id|authority|provenance)"/);
   });
+
+  it("CORR-ACW-OPTREF: schema + parser enforce type × recommendedOptionRef parity", () => {
+    const ajv = new Ajv({ allErrors: true });
+    const validateItem = ajv.compile(NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA);
+    const nonRecTypes = [
+      "Observation",
+      "Hypothesis",
+      "Option",
+      "Reservation",
+      "Contradiction",
+    ] as const;
+    const validOpt = "opt:trajectory:bounded-direct";
+
+    for (const type of nonRecTypes) {
+      const withNull = {
+        type,
+        statement: "ok",
+        confidence: null,
+        blocking: null,
+        recommendedOptionRef: null,
+      };
+      expect(validateItem(withNull)).toBe(true);
+      expect(isNoraActiveCycleWorkItem(withNull)).toBe(true);
+      expect(isNoraActiveCycleWorkOutput({ items: [withNull] })).toBe(true);
+
+      const withRef = {
+        ...withNull,
+        recommendedOptionRef: validOpt,
+      };
+      expect(validateItem(withRef)).toBe(false);
+      expect(isNoraActiveCycleWorkItem(withRef)).toBe(false);
+      expect(isNoraActiveCycleWorkOutput({ items: [withRef] })).toBe(false);
+      // Fail-closed: normalize drops the whole structured turn (no silent nulling).
+      expect(
+        normalizeNoraProductTurnStructuredOutput({
+          narrative: "n",
+          preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
+          lifecycleRecommendation: null,
+          activeCycleWork: { items: [withRef] },
+        }),
+      ).toBeNull();
+    }
+
+    const recWithRef = {
+      type: "Recommendation" as const,
+      statement: "Poursuivre bornée",
+      confidence: "high" as const,
+      blocking: false,
+      recommendedOptionRef: validOpt,
+    };
+    expect(validateItem(recWithRef)).toBe(true);
+    expect(isNoraActiveCycleWorkItem(recWithRef)).toBe(true);
+
+    const recWithNull = {
+      type: "Recommendation" as const,
+      statement: "Recommandation non optionnelle",
+      confidence: null,
+      blocking: null,
+      recommendedOptionRef: null,
+    };
+    expect(validateItem(recWithNull)).toBe(true);
+    expect(isNoraActiveCycleWorkItem(recWithNull)).toBe(true);
+  });
+
+  it("CORR-ACW-OPTREF: materialize keeps recommended_option_ref_only_on_recommendation (ZERO write)", async () => {
+    const s = await seedStarted("optref-mat");
+    const facts = await materializeFacts(
+      s.oa,
+      s.projectId,
+      s.cycle.cycleInstanceId,
+      "cor:acw-optref-mat",
+    );
+    const before = (
+      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
+    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE).length;
+
+    const mat = await materializeActiveCycleWork(
+      acwMaterializeInput(s.oa, facts, [
+        {
+          type: "Observation",
+          statement: "Observation carrying illegal option identity",
+          confidence: null,
+          blocking: null,
+          recommendedOptionRef: "opt:trajectory:bounded-direct",
+        },
+      ]),
+    );
+    expect(mat.ok).toBe(false);
+    if (mat.ok) throw new Error("expected fail-closed");
+    expect(mat.code).toBe("ACTIVE_CYCLE_WORK_INVALID");
+    expect(mat.reason).toBe("recommended_option_ref_only_on_recommendation");
+
+    const after = (
+      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
+    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE).length;
+    expect(after).toBe(before);
+  });
 });

 // ─── Materialization authority ───────────────────────────────────────────────
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index d90c1424..8f322903 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -86,50 +86,86 @@ export const PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT: PreCycleRoutingAssessme
     activeCycleAlreadyCoversWork: false,
   });

-/** D-GF-ACW-01 — non-authoritative active-cycle cognitive work items (no ids). */
+/**
+ * Shared ACW item fields for OpenAI Structured Outputs (strict).
+ * HABITFLOW-NORA-ACW-OPTION-REF-CONTRACT-CORR-01 — type×recommendedOptionRef
+ * is discriminated via anyOf below (no if/then/else).
+ */
+const NORA_ACTIVE_CYCLE_WORK_ITEM_COMMON_PROPERTIES = {
+  statement: { type: "string" as const },
+  confidence: {
+    anyOf: [
+      {
+        type: "string" as const,
+        enum: ["high", "medium", "low", "none"],
+      },
+      { type: "null" as const },
+    ],
+  },
+  blocking: { anyOf: [{ type: "boolean" as const }, { type: "null" as const }] },
+} as const;
+
+const NORA_ACTIVE_CYCLE_WORK_ITEM_REQUIRED = [
+  "type",
+  "statement",
+  "confidence",
+  "blocking",
+  "recommendedOptionRef",
+] as const;
+
+/**
+ * D-GF-ACW-01 — non-authoritative active-cycle cognitive work items (no ids).
+ *
+ * HABITFLOW-NORA-ACW-OPTION-REF-CONTRACT-CORR-01 — parity with
+ * materializeActiveCycleWork `recommended_option_ref_only_on_recommendation`:
+ * - Recommendation: recommendedOptionRef = string | null
+ * - all other types: recommendedOptionRef = null only
+ *
+ * Discriminated via nested anyOf (OpenAI Responses json_schema strict:true).
+ * Recommendation ≠ HumanDecision; never promotes trajectory.
+ */
 export const NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA = {
-  type: "object" as const,
-  additionalProperties: false as const,
-  required: [
-    "type",
-    "statement",
-    "confidence",
-    "blocking",
-    "recommendedOptionRef",
-  ],
-  properties: {
-    type: {
-      type: "string" as const,
-      enum: [
-        "Observation",
-        "Hypothesis",
-        "Option",
-        "Recommendation",
-        "Reservation",
-        "Contradiction",
-      ],
-    },
-    statement: { type: "string" as const },
-    confidence: {
-      anyOf: [
-        {
+  anyOf: [
+    {
+      type: "object" as const,
+      additionalProperties: false as const,
+      required: [...NORA_ACTIVE_CYCLE_WORK_ITEM_REQUIRED],
+      properties: {
+        type: {
           type: "string" as const,
-          enum: ["high", "medium", "low", "none"],
+          enum: ["Recommendation"],
         },
-        { type: "null" as const },
-      ],
+        ...NORA_ACTIVE_CYCLE_WORK_ITEM_COMMON_PROPERTIES,
+        /**
+         * Canonical Option identity when Recommendation targets a server-derived
+         * trajectory/proposal Option. Structured field only (never from prose).
+         */
+        recommendedOptionRef: {
+          anyOf: [{ type: "string" as const }, { type: "null" as const }],
+        },
+      },
     },
-    blocking: { anyOf: [{ type: "boolean" as const }, { type: "null" as const }] },
-    /**
-     * PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 — canonical Option identity when
-     * type=Recommendation targets a server-derived trajectory/proposal Option.
-     * Structured field only (never parsed from statement). Null for non-option
-     * recommendations. Recommendation ≠ HumanDecision; never promotes trajectory.
-     */
-    recommendedOptionRef: {
-      anyOf: [{ type: "string" as const }, { type: "null" as const }],
+    {
+      type: "object" as const,
+      additionalProperties: false as const,
+      required: [...NORA_ACTIVE_CYCLE_WORK_ITEM_REQUIRED],
+      properties: {
+        type: {
+          type: "string" as const,
+          enum: [
+            "Observation",
+            "Hypothesis",
+            "Option",
+            "Reservation",
+            "Contradiction",
+          ],
+        },
+        ...NORA_ACTIVE_CYCLE_WORK_ITEM_COMMON_PROPERTIES,
+        /** Non-Recommendation ACW items must not carry Option identity. */
+        recommendedOptionRef: { type: "null" as const },
+      },
     },
-  },
+  ],
 } as const;

 export const NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA = {
@@ -481,14 +517,25 @@ export function isNoraActiveCycleWorkItem(
     return false;
   }
   if (o.blocking !== null && typeof o.blocking !== "boolean") return false;
-  // recommendedOptionRef: absent (legacy) OR null OR valid opt: ref.
+  // HABITFLOW-NORA-ACW-OPTION-REF-CONTRACT-CORR-01 — parity with materializer:
+  // non-Recommendation + non-null recommendedOptionRef → REJECT (never silent null).
+  // Recommendation: absent (legacy) OR null OR valid opt: ref.
   // Invalid non-null strings fail closed (reject item).
+  const type = String(o.type);
+  const hasRefKey = "recommendedOptionRef" in o;
+  const rawRef = hasRefKey ? o.recommendedOptionRef : undefined;
+  if (type !== "Recommendation") {
+    if (rawRef !== undefined && rawRef !== null) {
+      return false;
+    }
+    return true;
+  }
   if (
-    "recommendedOptionRef" in o &&
-    o.recommendedOptionRef !== null &&
-    o.recommendedOptionRef !== undefined
+    hasRefKey &&
+    rawRef !== null &&
+    rawRef !== undefined
   ) {
-    if (normalizeActiveCycleRecommendedOptionRef(o.recommendedOptionRef) === null) {
+    if (normalizeActiveCycleRecommendedOptionRef(rawRef) === null) {
       return false;
     }
   }

```

## 9. Contract matrix
| type | recommendedOptionRef | schema | parser | materializer |
|---|---|---|---|---|
| Recommendation | valid opt: | VALID | VALID | OK |
| Recommendation | null | VALID | VALID | OK |
| Observation | null | VALID | VALID | OK |
| Hypothesis | null | VALID | VALID | OK |
| Option | null | VALID | VALID | OK |
| Reservation | null | VALID | VALID | OK |
| Contradiction | null | VALID | VALID | OK |
| Observation | valid opt: | INVALID | INVALID | fail-closed ZERO write |
| Hypothesis/Option/Reservation/Contradiction | valid opt: | INVALID | INVALID | fail-closed |

## 10. Tests
- CORR-ACW-OPTREF schema+parser matrix (Ajv + isNora* + normalize fail-closed)
- CORR-ACW-OPTREF materialize Observation+ref → `recommended_option_ref_only_on_recommendation`, ZERO write
- activeCycleCognitiveWork.d0: **59 PASS**
- semantic continuity (d0+corr01+corr02): **26 PASS**
- Full Vitest: **5097 PASS / 137 skipped** (459 files)

## 11. Validations
- typecheck PASS
- lint PASS
- build PASS
- git diff --check PASS
- full Vitest PASS (above)

## 12. Product / REAL effects
- HabitFlow DB write: NO
- HumanDecision: 0
- ExecutionContract: 0
- Attempt: 0
- Cursor REAL: NO
- OpenAI REAL proof: NO

## 13. Fake / Real Qualification
- Fake: FakeConversationProvider + isolated SQLite
- Deterministic correction proven at tested scope
- Realism gap: live provider must honor corrected schema (next Replay REAL, out of scope)
- Claims: DETERMINISTIC CORRECTION PROVEN AT TESTED SCOPE
- Forbidden claims: REAL closed / READY FOR REAL / E2E REAL / runtime v3 ADOPTED

## 14. Risks / reserves
- OpenAI strict anyOf discrimination assumed compatible (same pattern already used elsewhere); REAL Replay must confirm generation compliance
- No silent coercion of invalid refs

## 15. Morris decisions
- local correction authorized
- commit/push/PR/merge/REAL project: **NOT authorized** this cycle

## 16. UNIQUE VERDICT
**READY FOR CHATGPT REVIEW — NORA ACW CONTRACT CORRECTION CANDIDATE**
