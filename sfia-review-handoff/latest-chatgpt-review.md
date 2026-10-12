# Review Pack FULL — NORA PR #577 REFERENCE SYNC & CI RECOVERY 01

at_europe_paris: 2026-10-12 14:24:37 CEST
at_utc: 2026-10-12T12:24:37Z
level: FULL
profile: CRITICAL
cycleType: 8 — Delivery / implémentation
typology: INC / CORRECTION / DOCUMENTARY SYNC
campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
pass: REFERENCE SYNC & CI RECOVERY 01
pr: https://github.com/mcleland147/sfia-workspace/pull/577 (#577 Draft)
branch: qa/p6-hqa-02-rec01-human-qa
project_commit: b826526ce5531f73ec1f2013443c55e18155cbc2
prior_head: 95ebe42c5c4ecc5a662241171ee1e03eb3010b52
origin_main: f31bb8f610802c102edbe68889fb8ecf0339ec28
prior_handoff: 615250941c38291d79b350ee1920b7716bede3b0 / blob 924ea3a4d562f1206fdcb769808488364cc5808e
ci_observed: Detect SFIA Studio changes PASS; Build and validate SFIA Studio PENDING (run 38248825220)
merge: NOT PERFORMED
real: ZERO REAL
runtime_v3: NON ADOPTED

---

## 1. GO Morris consommé

GO REFERENCE SYNC & CI RECOVERY 01 (2026-10-12):
- integrate numeric fix;
- apply ChatGPT-approved documentary amendments;
- refresh digests after content review;
- commit/push on PR #577 branch only;
- observe CI;
- publish L3 handoff.

Protected path authorization limited to `production-runtime-reference/**` descriptive sync.
GO MERGE / GO REAL: NON.

---

## 2. Local Git Truth Check

| Check | Result |
|---|---|
| branch | qa/p6-hqa-02-rec01-human-qa |
| pre HEAD | 95ebe42c (= origin) |
| PR #577 | OPEN Draft head→95ebe42c then updated to b826526ce5531f73ec1f2013443c55e18155cbc2 |
| dirty pre | adaptiveTurnBudget + P1 test + pack (numeric fix preserved) |
| staged pre | none |
| STOP | not triggered |

---

## 3. Numeric fix integrated

File: `adaptiveTurnBudget.ts` — explicit non-finite maxTurns preserved for `normalizeSafeNonNegativeInteger` fail-closed (no adaptive fallback).
Test: absent vs explicit NaN/±Infinity in `p6.nora.p1.adaptiveBudget.d0.test.ts`.

### Diff utile adaptiveTurnBudget

```
commit b826526ce5531f73ec1f2013443c55e18155cbc2
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Oct 12 14:23:56 2026 +0200

    fix(studio): restore Nora budget guards and sync runtime reference

    Restore fail-closed handling for explicit non-finite maxTurns and sync
    Living Production Runtime Reference for PR #577 Nora P0/P1/P2 (candidate).

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
index d25d4f49..c08d4306 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
@@ -93,6 +93,11 @@ export function inferWorkloadHintsFromUserContent(
 /**
  * Resolve adaptive mission maxTurns.
  * Explicit caller maxTurns always wins (tests, eval). Otherwise strategy+signals.
+ *
+ * Historical FinOps contract: an *explicit* non-finite maxTurns (NaN / ±Infinity)
+ * must NOT fall back to the adaptive nominal budget. Preserve the invalid value
+ * so downstream `normalizeSafeNonNegativeInteger` fail-closes before Runner dispatch.
+ * Absent / null maxTurns remains the adaptive Product path.
  */
 export function resolveAdaptiveMaxTurns(input: {
   strategyClass?: CognitiveStrategyClass | null;
@@ -103,10 +108,18 @@ export function resolveAdaptiveMaxTurns(input: {
   const floor = ADAPTIVE_MAX_TURNS_FLOOR;
   const ceiling = ADAPTIVE_MAX_TURNS_CEILING;

-  if (
-    input.explicitMaxTurns != null &&
-    Number.isFinite(input.explicitMaxTurns)
-  ) {
+  if (input.explicitMaxTurns != null) {
+    if (!Number.isFinite(input.explicitMaxTurns)) {
+      reasonCodes.push("explicit_caller_maxTurns_non_finite");
+      return {
+        requestedMaxTurns: input.explicitMaxTurns,
+        strategyClass: input.strategyClass ?? null,
+        reasonCodes,
+        floor,
+        ceiling,
+        explicitOverride: true,
+      };
+    }
     const requestedMaxTurns = Math.max(0, Math.trunc(input.explicitMaxTurns));
     reasonCodes.push("explicit_caller_maxTurns");
     return {
```

---

## 4. Tests FinOps / QA

| Suite | Result |
|---|---|
| mw6.pre-real.budget-hardening + P1 adaptive + P0/P1/P2/TV01 + runner + orchestrateTurn + cancellation + conformance | **12 files / 170 PASS** |
| tsc --noEmit | **exit 0** |
| check-production-runtime-reference.mjs | **CONFORMANCE OK** |
| Vitest global full tree | NOT claimed this pass (targeted+conformance executed; CI Required Gate is source of truth for global) |

---

## 5. Documentary amendments applied

| File | Change |
|---|---|
| README.md | Nora autonomy overlay — PR #577 **candidate not merged** |
| 01 overview | Adaptive budget + RunState continuation + Session-on-resume; cognition≠authority |
| 02 catalog | New OBJ-TURN-ORCH card; OBJ-MEMORY-B Session-on-resume + FPPC-RES-01 |
| 03 F04 | Full cognitive path + same-turn continuation + incomplete honesty |
| 04 impact | Sample D PR #577; SEMANTIC IMPACT=YES |
| 06 persistence | Session vs RunState vs cross-restart DEFER vs FPPC-RES-01 |
| 08 proof | F04 Nora autonomy test map + oracles table |
| 09 reserves | Overlay table with historical reserves KEEP |
| 05 / 07 | READ-ONLY reviewed — no blocking inconsistency; no edit |

---

## 6. Digest inventory

### Tracked sources (before → after sync)

| Path | Before (drift) | After |
|---|---|---|
| orchestrateTurn.ts | 2495024ae952effe → 4b5dc69962b5a7ed | **4b5dc69962b5a7ed** OK |
| runNoraCognitiveTurn.ts | b4aaef8d204e35c7 → 0ae04ca7503de628 | **0ae04ca7503de628** OK |
| useProductConversation.ts | b9d52757c944c06b → 17e442645cd02afb | **17e442645cd02afb** OK |

Volumes digests refreshed after content edits (README, 01–04, 06, 08, 09). 05/07 unchanged content digests retained.
Manifest `lastReviewedCommit` = `95ebe42c…` (PR candidate base; **not** claimed merged on main). `lastReviewedAt` = 2026-10-12T14:23:24+02:00.

---

## 7. Commit / Push / PR

| Field | Value |
|---|---|
| Commit | `b826526ce5531f73ec1f2013443c55e18155cbc2` |
| Message | fix(studio): restore Nora budget guards and sync runtime reference |
| Files in commit | **11** (authorized exact) |
| Push | fast-forward 95ebe42c→b826526c |
| PR head | `b826526ce5531f73ec1f2013443c55e18155cbc2` |
| PR base | f31bb8f610802c102edbe68889fb8ecf0339ec28 |
| Draft | **true** (unchanged) |
| New PR | none |

Cumulative PR file count observed via `gh pr diff --name-only`: 27 (18 prior + reference sync files).

---

## 8. CI observed

Run: https://github.com/mcleland147/sfia-workspace/actions/runs/38248825220
- Detect SFIA Studio changes — **PASS** (6s)
- Build and validate SFIA Studio — **PENDING**
Overall Required Gate: **PENDING**. Do not claim PASS.

---

## 9. Fake / Real

DETERMINISTIC VERIFIED + REFERENCE CONFORMANCE PASS (local) + new HEAD traçable.
REAL NON. P6 GLOBAL PASS NON. Runtime v3 NON ADOPTED. MERGED NON.

---

## 10. Réserves (KEEP)

FPPC-RES-01 · P0-EFFECT-02 · RunState cross-restart DEFER · eval maxTurns>10 NON-BLOCKING · REAL NOT PROVEN

---

## 11. Gates Morris restants

1. CI Required Gate PASS on `b826526ce5531f73ec1f2013443c55e18155cbc2`
2. ChatGPT Critical PR re-review
3. **GO MERGE** (not this cycle)

---

## 12. Verdict pack

**REFERENCE SYNC + CI CORRECTION PUSHED / CI REVALIDATION PENDING**

---

## 13. Git Review Index

### Commit tree

```
M	projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
M	projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md
M	projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/README.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

### Commit stat

```
b826526c fix(studio): restore Nora budget guards and sync runtime reference
 .../p6.nora.p1.adaptiveBudget.d0.test.ts           | 22 ++++++++++++++++++
 .../nora-cognitive-runtime/adaptiveTurnBudget.ts   | 21 +++++++++++++----
 .../01-system-runtime-overview.md                  |  5 +++++
 .../02-runtime-object-catalog.md                   | 12 ++++++++++
 .../03-end-to-end-flow-catalog.md                  |  3 ++-
 .../04-dependency-impact-map.md                    | 24 ++++++++++++++++++++
 .../06-persistence-restart-and-recovery.md         | 11 +++++++++
 .../08-test-proof-and-conformance-map.md           | 12 ++++++++++
 ...9-known-gaps-reserves-and-current-boundaries.md | 15 +++++++++++++
 .../production-runtime-reference/README.md         |  1 +
 .../production-runtime-reference.manifest.json     | 26 +++++++++++-----------
 11 files changed, 134 insertions(+), 18 deletions(-)
```

### adaptiveTurnBudget.ts (full post-fix)

```ts
/**
 * P1 — Adaptive Runner model-turn budget (delivery design parameters).
 *
 * Proportioned to CognitiveStrategyClass + known workload signals.
 * UNKNOWN ≠ LOW (CORR-MW2-DLV-01). Never unlimited. Never derived solely
 * from experimental maxTurns=12 documentary qualification.
 *
 * Strategy Class ≠ Product authority. Floor/ceiling are server FinOps guards.
 */
import { CT_MAX_TOOL_ROUNDS } from "@/lib/platform/tools";
import type {
  CognitiveStrategyClass,
  CognitiveWorkloadSignals,
  SignalValue,
} from "./cognitiveWorkloadPolicy";

/** Legacy Product default when no adaptive decision applies. */
export const LEGACY_DEFAULT_MAX_TURNS = CT_MAX_TOOL_ROUNDS + 1; // 5

/** Absolute production floor — never below this without explicit caller override. */
export const ADAPTIVE_MAX_TURNS_FLOOR = 3;

/**
 * Absolute production ceiling — FinOps hard guard.
 * Intentionally NOT 12 (experimental documentary proof only).
 */
export const ADAPTIVE_MAX_TURNS_CEILING = 10;

/**
 * Base mission maxTurns by strategy class (delivery parameters).
 * Routine preserves legacy default (5).
 */
export const STRATEGY_BASE_MAX_TURNS: Record<CognitiveStrategyClass, number> = {
  Routine: LEGACY_DEFAULT_MAX_TURNS,
  Focused: 8,
  Deep: 10,
  "High-Assurance": 10,
};

export type AdaptiveMaxTurnsDecision = {
  /** Mission maxTurns before campaign clamp. */
  requestedMaxTurns: number;
  strategyClass: CognitiveStrategyClass | null;
  reasonCodes: string[];
  floor: number;
  ceiling: number;
  /** True when caller explicit maxTurns was used (tests / eval pins). */
  explicitOverride: boolean;
};

function clampInt(n: number, lo: number, hi: number): number {
  if (!Number.isFinite(n)) return lo;
  return Math.max(lo, Math.min(hi, Math.trunc(n)));
}

function isKnownHigh(value: SignalValue | undefined): boolean {
  return value === "high";
}

function isKnownMediumOrHigh(value: SignalValue | undefined): boolean {
  return value === "medium" || value === "high";
}

/**
 * Light, observable hints from Pilot request text — never invents LOW for unknowns.
 * Used only to elevate known dimensions when wording is explicit.
 */
export function inferWorkloadHintsFromUserContent(
  content: string,
): Partial<CognitiveWorkloadSignals> {
  const c = content.trim();
  if (!c) return {};
  const hints: Partial<CognitiveWorkloadSignals> = {};
  // Require multi-doc / documentary-analysis cues — bare "document" alone must NOT elevate.
  if (
    /documentary|multi[- ]?source|plusieurs\s+sources|guided\s+document|analys(?:e|er)\s+(?:plusieurs|les)\s+documents|cross[- ]?read|lire\s+(?:plusieurs|les)\s+fichiers|plusieurs\s+documents|documents\s+du\s+projet|compar(?:e|er)\s+(?:les\s+)?sources/i.test(
      c,
    )
  ) {
    hints.sourceBreadth = "high";
    hints.toolDependency = "high";
  }
  if (
    /v[ée]rif|cross[- ]?check|contradic|coherence|coh[ée]rence|entre\s+documents/i.test(
      c,
    )
  ) {
    hints.verificationNeed = "high";
  }
  return hints;
}

/**
 * Resolve adaptive mission maxTurns.
 * Explicit caller maxTurns always wins (tests, eval). Otherwise strategy+signals.
 *
 * Historical FinOps contract: an *explicit* non-finite maxTurns (NaN / ±Infinity)
 * must NOT fall back to the adaptive nominal budget. Preserve the invalid value
 * so downstream `normalizeSafeNonNegativeInteger` fail-closes before Runner dispatch.
 * Absent / null maxTurns remains the adaptive Product path.
 */
export function resolveAdaptiveMaxTurns(input: {
  strategyClass?: CognitiveStrategyClass | null;
  signals?: Partial<CognitiveWorkloadSignals> | null;
  explicitMaxTurns?: number | null;
}): AdaptiveMaxTurnsDecision {
  const reasonCodes: string[] = [];
  const floor = ADAPTIVE_MAX_TURNS_FLOOR;
  const ceiling = ADAPTIVE_MAX_TURNS_CEILING;

  if (input.explicitMaxTurns != null) {
    if (!Number.isFinite(input.explicitMaxTurns)) {
      reasonCodes.push("explicit_caller_maxTurns_non_finite");
      return {
        requestedMaxTurns: input.explicitMaxTurns,
        strategyClass: input.strategyClass ?? null,
        reasonCodes,
        floor,
        ceiling,
        explicitOverride: true,
      };
    }
    const requestedMaxTurns = Math.max(0, Math.trunc(input.explicitMaxTurns));
    reasonCodes.push("explicit_caller_maxTurns");
    return {
      requestedMaxTurns,
      strategyClass: input.strategyClass ?? null,
      reasonCodes,
      floor,
      ceiling,
      explicitOverride: true,
    };
  }

  const strategy = input.strategyClass ?? null;
  let base =
    strategy != null
      ? STRATEGY_BASE_MAX_TURNS[strategy]
      : LEGACY_DEFAULT_MAX_TURNS;
  reasonCodes.push(
    strategy != null
      ? `strategy_base:${strategy}:${base}`
      : `legacy_default:${base}`,
  );

  const signals = input.signals ?? {};
  // Known-high breadth/verification may bump within ceiling — never invent from unknown.
  if (
    isKnownHigh(signals.sourceBreadth) ||
    isKnownHigh(signals.verificationNeed)
  ) {
    const bumped = Math.min(ceiling, Math.max(base, 10));
    if (bumped > base) {
      reasonCodes.push("known_high_breadth_or_verification_bump");
      base = bumped;
    }
  } else if (
    isKnownMediumOrHigh(signals.sourceBreadth) &&
    isKnownMediumOrHigh(signals.toolDependency)
  ) {
    const bumped = Math.min(ceiling, Math.max(base, 8));
    if (bumped > base) {
      reasonCodes.push("known_medium_doc_tool_bump");
      base = bumped;
    }
  }

  // Unknown-heavy path: do not elevate beyond strategy base (UNKNOWN ≠ LOW inflate).
  if (
    signals.sourceBreadth === "unknown" &&
    signals.verificationNeed === "unknown" &&
    signals.reasoningDepth === "unknown"
  ) {
    reasonCodes.push("unknown_signals_no_inflate");
  }

  const requestedMaxTurns = clampInt(base, floor, ceiling);
  if (requestedMaxTurns !== base) {
    reasonCodes.push(`clamped_to_floor_ceiling:${requestedMaxTurns}`);
  }

  return {
    requestedMaxTurns,
    strategyClass: strategy,
    reasonCodes,
    floor,
    ceiling,
    explicitOverride: false,
  };
}

```

### Key documentary sections (excerpts already in volumes — see commit ${COMMIT})

OBJ-TURN-ORCH / OBJ-MEMORY-B / F04 Nora autonomy / Sample D / Session vs RunState / Proof oracles / PR #577 reserves overlay — all present in committed tree.

### Status after push

```
 M .tmp-sfia-review/chatgpt-review.md
```

---

## 14. Instruction ChatGPT

Lire ce handoff sur sfia/review-handoff; vérifier commit/blob; analyser correction numérique, sync référence, digests, conformance, PR #577 head b826526ce5531f73ec1f2013443c55e18155cbc2, CI PENDING→actual; rendre verdict indépendant avant GO MERGE.

---

## 15. END OF REVIEW PACK
