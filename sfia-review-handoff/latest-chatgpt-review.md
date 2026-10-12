# Review Pack FULL — NORA PR #577 CI CORRECTION PASS 01

at_europe_paris: 2026-10-12 14:02:29 CEST
at_utc: 2026-10-12T12:02:29Z
level: FULL
profile: CRITICAL
cycleType: 8 — Delivery / implémentation
typology: INC / CORRECTION / CI REGRESSION
campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
pass: CI CORRECTION PASS 01
pr: https://github.com/mcleland147/sfia-workspace/pull/577
workspace: /Users/morris/Projects/sfia-workspace-p6-rec01-human-qa
branch: qa/p6-hqa-02-rec01-human-qa
HEAD_project_remote: 95ebe42c5c4ecc5a662241171ee1e03eb3010b52
origin_main: f31bb8f610802c102edbe68889fb8ecf0339ec28
local_dirty: adaptiveTurnBudget.ts + p1 adaptiveBudget test (numeric fix) — NOT COMMITTED
project_commit_push: NOT PERFORMED (documentary gate open)
merge: NOT PERFORMED
real: ZERO REAL
runtime_v3: NON ADOPTED

---

## 1. GO Morris consommé

GO Correction Pass CI ciblé (2026-10-12): correction garde-fous numériques + revue d'impact référentiel.

Autorisé: diagnostic/correction minimale; tests; analyse référence; proposition documentaire; commit/push conditionnels.
Non autorisé: merge; nouvelle PR; REAL; doctrine; architecture/persistence; digest refresh sans revue; force push; Runtime v3.

---

## 2. Local Git Truth Check

| Check | Result |
|---|---|
| branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `95ebe42c5c4ecc5a662241171ee1e03eb3010b52` (= origin branch) |
| origin/main | `f31bb8f610802c102edbe68889fb8ecf0339ec28` |
| PR #577 | OPEN, Draft=true, head=95ebe42c |
| staged | none |
| local dirty (this pass) | adaptiveTurnBudget.ts + p6.nora.p1.adaptiveBudget.d0.test.ts + pack |
| STOP Git | not triggered |

---

## 3. Sources / Convergence

Sources lues: Build Doctrine, Roadmap, C1, v3 33/34/35/37, Nora 08, P6 product 07, CKC 08/09, v2.6, production-runtime-reference README+04+manifest, CI run 38243235090, prior handoff 15c22f25.

Capacité: autonomie cognitive bornée. Milestone P6. Runtime v3 NON ADOPTED.
Gaps: CI-01 digest; CI-02 NaN+campagne; CI-03 NaN/Infinity sans campagne.

---

## 4. Reproduction CI-02 / CI-03

Avant correction:
- NUM-CLAMP-01: `limitReached` expected true, got **false**
- R-PRE-REAL-08A NaN/Infinity: `limitReached` expected true, got **false**

Cause: `resolveAdaptiveMaxTurns` exigeait `Number.isFinite(explicitMaxTurns)`. NaN/±Infinity → fallback adaptatif nominal → `normalizeSafeNonNegativeInteger` reçoit un budget fini → Runner dispatch.

---

## 5. Correction numérique (locale)

Fichier unique runtime: `adaptiveTurnBudget.ts`

Comportement:
- `explicitMaxTurns == null` → adaptive nominal (P1 Product)
- finite explicit → override tests/eval (KEEP)
- non-finite explicit → preserve value + `explicit_caller_maxTurns_non_finite` → downstream fail-closed via existing `normalizeSafeNonNegativeInteger` / `CampaignLeaseError` catch → `limitReached:true`, no dispatch, no campaign consume

### Diff utile

```diff
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

### Contenu section complète resolveAdaptiveMaxTurns (post-fix)

```ts
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

```

Test non-régression ajouté: absent vs explicit NaN/±Infinity dans `p6.nora.p1.adaptiveBudget.d0.test.ts`.

---

## 6. Tests numériques avant/après

| Suite | Avant | Après |
|---|---|---|
| NUM-CLAMP-01 | FAIL | **PASS** |
| R-PRE-REAL-08A NaN/Infinity | FAIL | **PASS** |
| mw6.pre-real.budget-hardening full | (CI fail subset) | **106 PASS** (with P1 file) |
| p6.nora.p1.adaptiveBudget | — | **7 PASS** (incl. new) |
| P0/P1/P2/TV01 consolidated | — | **39 PASS** |
| tsc --noEmit | — | **exit 0** |
| productionRuntimeReference.conformance | FAIL digest | **FAIL** (expected — gate open) |

Cancellation hook: 1 flaky local timeout observed once; **PASS on re-run** (4/4). Not a CI-reported failure.

---

## 7. CI-01 — Living Production Runtime Reference Impact

### Digest mismatch inventory (trackedSources overlapping PR #577)

| Path | recorded sha256_16 | current sha256_16 |
|---|---|---|
| orchestrateTurn.ts | 2495024ae952effe | **4b5dc69962b5a7ed** |
| runNoraCognitiveTurn.ts | b4aaef8d204e35c7 | **0ae04ca7503de628** |
| useProductConversation.ts | b9d52757c944c06b | **17e442645cd02afb** |

Checker: `REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED`

Note: `adaptiveTurnBudget.ts` / `runNoraAgentsTurn.ts` / `controlledContinuation.ts` **ne sont pas** dans `trackedSources` — la correction numérique seule ne résout pas CI-01.

### Path → component mapping

| Chemin modifié (PR) | Tracked? | Component |
|---|---|---|
| orchestrateTurn.ts | YES | OBJ-TURN-ORCH |
| runNoraCognitiveTurn.ts | YES | OBJ-TURN-ORCH |
| useProductConversation.ts | YES | OBJ-UI-LIFECYCLE |
| ProjectAssistantPanel.tsx | no | adjacent UI (P0) |
| ConversationSurface.tsx | no | adjacent UI (P0) |
| types.ts (project-assistant) | no | DTO |
| runNoraAgentsTurn.ts | no | Runner (P1/P2) — depended by TURN-ORCH via cognitive turn |
| adaptiveTurnBudget.ts | no | P1 policy (this fix) |
| controlledContinuation.ts | no | P2 |
| tests/** | no | proof only |

### Transitive closure (depth ≤6)

OBJ-TURN-ORCH
- dependsOn: OBJ-MEMORY-B, OBJ-MW5-CHALLENGE
- dependedBy: OBJ-MW5-CHALLENGE (cycle mild)
- + OBJ-UI-LIFECYCLE (useProductConversation tracked)

Union flowIds: F02, F04, F05, F06, F15, F19
Union invariantIds: INV-COG-NE-AUTH, INV-MEMB-NE-TRUTHC, INV-APPLICABILITY-NE-AUTHORITY, INV-NO-SILENT-HD, INV-FAKE-REAL-SM (adjacent Fake)

Persistence: Memory B nora-session.sqlite; turn orch mixed; UI none.
Authority: cognition ≠ authority (INV-COG-NE-AUTH kept).
Fake/Real: DETERMINISTIC only for this chantier; Fake path unchanged.

### Semantic impact qualification

**SEMANTIC IMPACT = YES** (cannot claim global NO SEMANTIC IMPACT):

1. P0 — incomplete status honesty (Product status / UI surfaces)
2. P1 — adaptive mission maxTurns (budget Product path)
3. P2 — RunState continuation + Session-on-resume
4. This pass — restore fail-closed on explicit non-finite maxTurns (FinOps)

### Matrice actions documentaires

| Volume | Action | Why |
|---|---|---|
| 01 overview | REVIEW / ADD overlay note | cognitive Runner budget + continuation |
| 02 object catalog | UPDATE OBJ-TURN-ORCH + OBJ-MEMORY-B cards | adaptive budget; Session continuity after RunState |
| 03 flow catalog | UPDATE F04 | incomplete honesty; multi-segment continuation |
| 04 dependency map | ADD Sample D (this PR) | impact procedure evidence |
| 05 env/Fake-Real | REVIEW | no env change; Fake/Real boundary unchanged |
| 06 persistence/restart | UPDATE | RunState in-process only; Session SoT; cross-restart DEFER |
| 07 invariants | REVIEW | FinOps numeric fail-closed; INV-COG-NE-AUTH |
| 08 tests/proof | UPDATE | cite P0/P1/P2/TV01 test paths |
| 09 gaps | UPDATE | FPPC-RES-01; P0-EFFECT-02; RunState DEFER; REAL NOT PROVEN |
| README | ADD overlay line | PR #577 Nora autonomy |
| manifest digests | REFRESH ONLY AFTER content review + GO | currently FORBIDDEN |

---

## 8. Proposed documentary sections (exact text — NOT applied)

### README.md — overlay line (append after REC-01 overlay)

```md
**Nora autonomy overlay:** P6 / PR #577 — P0 incomplete honesty + P1 Adaptive Runner Budget (Routine 5 / Focused 8 / Deep·HA 10) + P2 native RunState controlled continuation + Session-on-resume; numeric fail-closed for explicit non-finite maxTurns restored (CI Correction Pass 01). Runtime v3 NON ADOPTED. Cross-restart RunState DEFER.
```

### 02-runtime-object-catalog.md — OBJ-TURN-ORCH addenda

```md
#### OBJ-TURN-ORCH — Nora bounded cognitive autonomy (PR #577)

- **Adaptive mission maxTurns (P1):** when Product omits `maxTurns`, `resolveAdaptiveMaxTurns` selects Routine=5 / Focused=8 / Deep|High-Assurance=10 (ceiling 10). Explicit finite maxTurns remains tests/eval override. Explicit NaN/±Infinity fail-closed via `normalizeSafeNonNegativeInteger` before Runner dispatch (no adaptive fallback).
- **Controlled continuation (P2):** within one Product turn, `MaxTurnsExceededError.state` may resume with absolute `maxTurns` raised toward mission budget; `ProductSqliteSession` is passed on every segment including RunState resume.
- **Status honesty (P0):** `limitReached` maps to Product status `incomplete` (≠ ok, ≠ cognitive_stop).
- **Non-claims:** no durable RunState across process restart; no Product client maxTurns DTO; Runtime v3 not adopted.
```

### 03-end-to-end-flow-catalog.md — F04 addenda

```md
#### F04 — Product conversation turn (Nora autonomy notes)

- Documentary multi-read missions may require mission maxTurns > segment size; continuation is same-turn RunState only.
- Incomplete turn: partial text may display; no durable LR/ACW materialization from incomplete.
- Next Product turn reuses Session history items (tools/assistant) via Memory B; prior user utterance may be absent as Session AgentInputItem under observed SDK prepare (FPPC-RES-01).
```

### 04-dependency-impact-map.md — Sample D

```md
## Sample impact analysis D — Nora P0/P1/P2 (PR #577)

**Changed tracked paths (digest drift):**
- orchestrateTurn.ts → OBJ-TURN-ORCH
- runNoraCognitiveTurn.ts → OBJ-TURN-ORCH
- useProductConversation.ts → OBJ-UI-LIFECYCLE

| Step | Result |
|---|---|
| Components | OBJ-TURN-ORCH (semantic); OBJ-UI-LIFECYCLE (incomplete UI); OBJ-MEMORY-B (Session continuity — productSqliteSession not digest-drifted but behavior used) |
| Direct deps | Memory B, MW5; Runner/adaptive helpers (untracked sources) |
| Flows | F04 primary; F02/F05/F06/F19 adjacent |
| Invariants | INV-COG-NE-AUTH; FinOps numeric fail-closed; INV-MEMB-NE-TRUTHC |
| Persistence | Session SQLite history; RunState in-process only |
| Fake/Real | DETERMINISTIC proven; REAL NOT PROVEN |
| Tests | p6.nora.p0/p1/p2/* ; mw6.pre-real.budget-hardening NUM-CLAMP / 08A |
| Docs | 01–04, 06–09 + README overlay |
| Digests | REFRESH ONLY after content review + applicable GO |
```

### 06 / 09 — short reserves

```md
- Cross-restart RunState persistence: DEFER (architecture GO required).
- FPPC-RES-01: prior user utterance not persisted as Session AgentInputItem under observed Agents Session prepare.
- P0-EFFECT-02 store-level: NOT PROVEN.
- Explicit eval maxTurns may exceed adaptive ceiling 10: NON-BLOCKING (not Product DTO).
```

**Digest refresh: NOT EXECUTED this pass.**

---

## 9. Gates documentaires / protections

| Gate | Status |
|---|---|
| Numeric CI-02/CI-03 fix prepared | YES (local) |
| Reference impact analysis | YES |
| Documentary content applied to volumes | **NO** — awaiting ChatGPT Critical + Morris GO covering `production-runtime-reference/**` |
| Digest refresh | **FORBIDDEN** until content reviewed |
| Project commit/push | **NOT DONE** (gate open) |
| Merge | NOT authorized |

---

## 10. Fake / Real

DETERMINISTIC NUMERIC GUARDS RESTORED (local proof).
REFERENCE IMPACT QUALIFIED (analysis complete; content sync pending).
REAL NON. P6 GLOBAL PASS NON. Runtime v3 NON ADOPTED.

---

## 11. Réserves historiques (inchangées)

FPPC-RES-01 · RunState DEFER · eval maxTurns>10 NON-BLOCKING · P0-EFFECT-02 · REAL NOT PROVEN

---

## 12. Verdict pack

**CI CORRECTION PREPARED / REFERENCE REVIEW REQUIRED**

Décisions Morris restantes:
1. Review/approve proposed documentary sections (or amend).
2. GO to apply volume updates + digest refresh on same PR branch.
3. Then allow commit/push of numeric fix + reference sync.
4. CI revalidation → ChatGPT PR re-review → GO MERGE.

---

## 13. Git Review Index — local uncommitted files

### adaptiveTurnBudget.ts (full file)

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

\`\`\`

### p6.nora.p1.adaptiveBudget.d0.test.ts (full file)

\`\`\`ts
/**
 * P6 Nora P1 — Adaptive Runner Budget (deterministic).
 * ZERO REAL.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  ADAPTIVE_MAX_TURNS_CEILING,
  ADAPTIVE_MAX_TURNS_FLOOR,
  LEGACY_DEFAULT_MAX_TURNS,
  STRATEGY_BASE_MAX_TURNS,
  inferWorkloadHintsFromUserContent,
  resolveAdaptiveMaxTurns,
} from "@/lib/nora-cognitive-runtime/adaptiveTurnBudget";
import { decideCognitiveStrategy } from "@/lib/nora-cognitive-runtime/cognitiveWorkloadPolicy";

describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
  it("legacy default remains 5; ceiling is not experimental 12", () => {
    expect(LEGACY_DEFAULT_MAX_TURNS).toBe(5);
    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(10);
    expect(ADAPTIVE_MAX_TURNS_CEILING).toBeLessThan(12);
    expect(STRATEGY_BASE_MAX_TURNS.Routine).toBe(5);
    expect(STRATEGY_BASE_MAX_TURNS.Focused).toBe(8);
    expect(STRATEGY_BASE_MAX_TURNS.Deep).toBe(10);
  });

  it("explicit maxTurns wins (tests / eval)", () => {
    const d = resolveAdaptiveMaxTurns({
      strategyClass: "Deep",
      explicitMaxTurns: 3,
    });
    expect(d.requestedMaxTurns).toBe(3);
    expect(d.explicitOverride).toBe(true);
    expect(d.reasonCodes).toContain("explicit_caller_maxTurns");
  });

  it("Routine → 5; Focused → 8; Deep → 10; never above ceiling", () => {
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "Routine" }).requestedMaxTurns,
    ).toBe(5);
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "Focused" }).requestedMaxTurns,
    ).toBe(8);
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "Deep" }).requestedMaxTurns,
    ).toBe(10);
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: "High-Assurance" })
        .requestedMaxTurns,
    ).toBeLessThanOrEqual(ADAPTIVE_MAX_TURNS_CEILING);
  });

  it("UNKNOWN signals do not inflate beyond strategy base", () => {
    const d = resolveAdaptiveMaxTurns({
      strategyClass: "Focused",
      signals: {
        sourceBreadth: "unknown",
        verificationNeed: "unknown",
        reasoningDepth: "unknown",
      },
    });
    expect(d.requestedMaxTurns).toBe(8);
    expect(d.reasonCodes.some((c) => c.includes("unknown_signals"))).toBe(
      true,
    );
  });

  it("known-high documentary hints elevate strategy class via CWP", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Analyse plusieurs documents du projet et croise les sources.",
    );
    expect(hints.sourceBreadth).toBe("high");
    const strategy = decideCognitiveStrategy({
      signals: {
        ambiguity: "unknown",
        reasoningDepth: "medium",
        sourceBreadth: hints.sourceBreadth!,
        toolDependency: hints.toolDependency ?? "unknown",
        contradictionRisk: "unknown",
        contextSize: "medium",
        verificationNeed: hints.verificationNeed ?? "unknown",
        multimodality: "unknown",
        latencySensitivity: "unknown",
        costBudget: "unknown",
        rigorCriticality: "medium",
      },
    });
    expect(["Deep", "Focused", "High-Assurance"]).toContain(
      strategy.strategyClass,
    );
    const budget = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(8);
    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(
      ADAPTIVE_MAX_TURNS_CEILING,
    );
    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(
      ADAPTIVE_MAX_TURNS_FLOOR,
    );
  });

  it("null strategy falls back to legacy 5", () => {
    expect(
      resolveAdaptiveMaxTurns({ strategyClass: null }).requestedMaxTurns,
    ).toBe(5);
  });

  it("absent maxTurns uses adaptive; explicit NaN/Infinity preserved (no adaptive fallback)", () => {
    const absent = resolveAdaptiveMaxTurns({ strategyClass: "Routine" });
    expect(absent.explicitOverride).toBe(false);
    expect(absent.requestedMaxTurns).toBe(5);

    for (const bad of [
      Number.NaN,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ]) {
      const d = resolveAdaptiveMaxTurns({
        strategyClass: "Deep",
        explicitMaxTurns: bad,
      });
      expect(d.explicitOverride).toBe(true);
      expect(d.reasonCodes).toContain("explicit_caller_maxTurns_non_finite");
      expect(Number.isFinite(d.requestedMaxTurns)).toBe(false);
      // Must not silently substitute Deep adaptive ceiling (10).
      expect(d.requestedMaxTurns).not.toBe(10);
    }
  });
});
```

### Status

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
 .../p6.nora.p1.adaptiveBudget.d0.test.ts           | 22 ++++++++++++++++++++++
 .../nora-cognitive-runtime/adaptiveTurnBudget.ts   | 21 +++++++++++++++++----
 2 files changed, 39 insertions(+), 4 deletions(-)
```

---

## 14. Instruction ChatGPT

Avant réponse: lire ce handoff sur `sfia/review-handoff`, vérifier commit/blob, analyser correction numérique, matrice d'impact, sections proposées, digests, et qualifier la prochaine décision Morris (GO doc+digest sync vs amendements).

---

## 15. END OF REVIEW PACK
