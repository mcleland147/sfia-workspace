# PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 — CORR-01
## Cycle 8 — Delivery / implémentation
## FULL Review Pack — Cursor → ChatGPT (correction)

Generated: 2026-09-26T08:43:11Z
Macro: PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01
Correction: CORR-01 — FAIL-CLOSED CURRENTNESS / HUMAN-DECISION CUTOFF / PRODUCT-PATH PROOF
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Prior handoff: commit e05e6e1acad2ea1c4200b6fbdb6de9a76b01498b / blob 017d42b1eeb04c69fb385c6292b586e56fe695ab
Morris GO consumed: original GO retained; this is correction of uncommitted macro (no new GO required by contract).
Cursor REAL: NOT RUN
OpenAI LIVE: NOT RUN
StudyFlow Product mutation: NONE
Project commit/push/PR: NONE

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Branch | `feat/sfia-studio-pilot-nora-studio-semantic-continuity-01` |
| HEAD / origin/main | `49249101bab1bd1e3a1d91b469fe7b41341c5a01` |
| Project commit | **NOT COMMITTED** |
| Project push | **NOT PUSHED** |
| Scope | Existing semantic-continuity macro + CORR-01 only |

---

## 2. CHATGPT CORR-01 FINDINGS → CORRECTIONS

### C1 — mixed valid + invalid Recommendation fail-closed
**Finding:** `notInSet.length > 0 && inSet.length === 0` permitted valid+invented to keep the valid winner.
**Correction:** ANY `notInSet.length > 0` → `NORA_RECOMMENDATION_NOT_IN_OPTION_SET`.
**Proof:** unit + durable product-path mixed refs → fail; decision-support → UNAVAILABLE.

### C2 — validate before ACW persistence / Pilot display
**Finding:** only syntactic `opt:*` shape checked.
**Correction:** `validateActiveCycleRecommendationAgainstDecisionSupport` — if `recommendedOptionRef != null` then TDS.state MUST be PRESENT and ref ∈ optionRefs; else `ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID`.
Wired in `orchestrateTurn` BEFORE materialize and for Pilot structured display. Defense-in-depth `allowedOptionRefs` on `materializeActiveCycleWork`.
NONE/UNAVAILABLE → reject trajectory recommendedOptionRef. Null ref still allowed.

### C3 — HumanDecision cutoff product-wired
**Finding:** `ignoreCreatedAtOnOrBefore` existed but production callers did not supply HD timestamp.
**Correction:** pure helper `trajectoryRecommendationCurrentness.ts`:
- Same subject = accepted|amended HD with `decisionBasis.sourceType === "trajectory_option"` AND cycle binding = active cycle (`decision.cycleInstanceId` | `basis.cycleInstanceId` | `proposalContext.activeCycleInstanceId`).
- Cutoff = latest `effectiveAt` among matching HDs.
- Auto-derived inside `resolveCurrentNoraTrajectoryRecommendation` when cutoff not explicitly passed.
- Applied via resolve path to: W2 propose, W2 decide revalidation, `resolveTrajectoryDecisionSupportProjection`, ACW projection (`recommendationCurrentness` CURRENT|HISTORICAL) + prompt wording.
- Proposal HDs do NOT cut off trajectory Recommendations.
- Historical EpistemicItems preserved (status=active); classified HISTORICAL, not deleted.

### C4 — UNAVAILABLE stays UNAVAILABLE
**Finding:** epistemic list failure / selector !ok collapsed to PRESENT + deterministic_fallback.
**Correction:** `resolveTrajectoryDecisionSupportProjection` now calls `resolveCurrentNoraTrajectoryRecommendation`:
- EPISTEMIC_UNAVAILABLE / NORA_RECOMMENDATION_NOT_IN_OPTION_SET / AMBIGUOUS → state UNAVAILABLE (never fallback-normal).
- KNOWN EMPTY (ok + no Nora item) → PRESENT + deterministic_fallback.
- Prompt: `Decision-support trajectoire : UNAVAILABLE — ne pas inventer d'optionRefs.`

---

## 3. SUBJECT-MATCHING RULE (exact)

```
isAcceptedTrajectoryOptionDecisionForCycle(decision, cycleInstanceId):
  status ∈ {accepted, amended}
  AND decisionBasis.sourceType === "trajectory_option"
  AND cycleId =
       decision.cycleInstanceId
    OR decisionBasis.cycleInstanceId
    OR decisionBasis.proposalContext.activeCycleInstanceId
  AND cycleId === activeCycleInstanceId
```

Cutoff = max(effectiveAt) among matches. Nora ACW Recommendations with `createdAt <= cutoff` are not CURRENT.

---

## 4. PRODUCT-PATH EVIDENCE

New file: `pilotNoraStudioSemanticContinuity.corr01.d0.test.ts`

| Scenario | Result |
|----------|--------|
| Nora A → propose → Nora B → decide(old set) | OPTION_SET_STALE; HD count unchanged; no promotion |
| Nora governed → decide(clarify) | succeeds; Recommendation ≠ Decision |
| post-HD + reload sqlite | resolver = deterministic_fallback; TDS noraRef=null; ACW HISTORICAL; prompt no current governed Nora |
| mixed durable valid+invented | resolve fail NORA_RECOMMENDATION_NOT_IN_OPTION_SET; TDS UNAVAILABLE |
| invented / NONE TDS | ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID |

---

## 5. FILES CHANGED SINCE FIRST REVIEW

### New
- `features/project-assistant/trajectoryRecommendationCurrentness.ts`
- `features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation.ts` (evolved)
- `features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection.ts` (rewritten C4)
- `__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr01.d0.test.ts`
- updates to `pilotNoraStudioSemanticContinuity.d0.test.ts` (C1/C2/C4 unit cases)

### Modified
- `materializeActiveCycleWork.ts` — validator + allowedOptionRefs defense
- `orchestrateTurn.ts` — pre-persist / display validation
- `f2/studioCognitiveContext.ts` — recommendationCurrentness + prompt
- `f2/orchestrateF2.ts` — null-oa safe TDS resolve

### NOT modified
convergence/**, product-completion/**, sfia-v3-framing/**, nora-cognitive-completion/**, method/**, prompts/**, .github/**, scripts/sfia/**, campaign DBs, managed clone, .env.local, OpenAI provider.

---

## 6. VALIDATION

| Check | Result |
|-------|--------|
| Targeted CORR-01 suites | 33 passed (continuity + corr01 + studioCognitive + importBoundaries) |
| typecheck | PASS |
| lint | PASS (0 warnings/errors) |
| build | PASS |
| vitest full | **425** files passed / **17** skipped · **4705** passed / **137** skipped · **0** failed |

---

## 7. FAKE / REAL

DETERMINISTIC PRODUCT SEMANTIC CONTINUITY PROVEN
INCLUDING FAIL-CLOSED CURRENTNESS AND HUMANDECISION CUTOFF

NOT claimed: OpenAI LIVE · StudyFlow E2E · Cursor REAL · docs_write REAL · GO REAL · runtime v3 ADOPTED.

---

## 8. RESERVES

- GAP-15 OPEN NON-BLOCKING
- Roadmap documentary drift
- StudyFlow managed clone freshness
- Natural/OpenAI-live StudyFlow reproof pending after Morris gates

---

## 9. ANTI-CLAIMS

Not claimed: runtime v3 ADOPTED · Product globally READY · Product Completion newly COMPLETE · Nora Cognitive Completion COMPLETE · OpenAI LIVE correction proven · StudyFlow E2E REAL proven · Cursor docs_write REAL proven · GO REAL · GAP-15 closed · Roadmap synced · managed clone freshness solved · next macro selected · PR ready · merge ready.

---

## 10. FINAL VERDICT

**PILOT-NORA-STUDIO SEMANTIC CONTINUITY — DETERMINISTICALLY PROVEN / READY FOR CHATGPT RE-REVIEW**

Project Git: **LOCAL / NOT COMMITTED / NOT PUSHED**

---

## 11. EXPLOITABLE DIFFS / NEW SOURCES

### trajectoryRecommendationCurrentness.ts (new)

```ts
/**
 * CORR-01 — subject-aware HumanDecision cutoff for Nora trajectory Recommendation
 * currentness. Pure domain helpers — no RuntimeOaStack / node:crypto.
 *
 * Same subject = accepted|amended HD with DecisionBasis.sourceType
 * `trajectory_option` bound to the active cycle. Proposal subjects do not cut off.
 */
import type { HumanDecision } from "@/lib/oa/decision";

export function isAcceptedTrajectoryOptionDecisionForCycle(
  decision: HumanDecision,
  cycleInstanceId: string,
): boolean {
  if (decision.status !== "accepted" && decision.status !== "amended") {
    return false;
  }
  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "trajectory_option") {
    return false;
  }
  const decisionCycle =
    decision.cycleInstanceId?.trim() ||
    basis.cycleInstanceId?.trim() ||
    basis.proposalContext?.activeCycleInstanceId?.trim() ||
    null;
  return decisionCycle === cycleInstanceId;
}

/**
 * Latest effectiveAt among accepted/amended trajectory_option HDs for this cycle.
 */
export function resolveTrajectoryRecommendationCutoffFromDecisions(input: {
  readonly decisions: readonly HumanDecision[];
  readonly cycleInstanceId: string;
}): string | null {
  const matching = input.decisions.filter((d) =>
    isAcceptedTrajectoryOptionDecisionForCycle(d, input.cycleInstanceId),
  );
  if (matching.length === 0) return null;
  let latest = matching[0]!.effectiveAt;
  for (let i = 1; i < matching.length; i += 1) {
    const at = matching[i]!.effectiveAt;
    if (at > latest) latest = at;
  }
  return latest;
}

export function classifyAcwRecommendationCurrentness(input: {
  readonly createdAt: string;
  readonly ignoreCreatedAtOnOrBefore: string | null;
}): "CURRENT" | "HISTORICAL" {
  const cutoff = input.ignoreCreatedAtOnOrBefore?.trim() || null;
  if (cutoff && input.createdAt <= cutoff) return "HISTORICAL";
  return "CURRENT";
}
```

### new resolver sources (full)

```text
=== NEW: trajectoryRecommendationCurrentness.ts ===
/**
 * CORR-01 — subject-aware HumanDecision cutoff for Nora trajectory Recommendation
 * currentness. Pure domain helpers — no RuntimeOaStack / node:crypto.
 *
 * Same subject = accepted|amended HD with DecisionBasis.sourceType
 * `trajectory_option` bound to the active cycle. Proposal subjects do not cut off.
 */
import type { HumanDecision } from "@/lib/oa/decision";

export function isAcceptedTrajectoryOptionDecisionForCycle(
  decision: HumanDecision,
  cycleInstanceId: string,
): boolean {
  if (decision.status !== "accepted" && decision.status !== "amended") {
    return false;
  }
  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "trajectory_option") {
    return false;
  }
  const decisionCycle =
    decision.cycleInstanceId?.trim() ||
    basis.cycleInstanceId?.trim() ||
    basis.proposalContext?.activeCycleInstanceId?.trim() ||
    null;
  return decisionCycle === cycleInstanceId;
}

/**
 * Latest effectiveAt among accepted/amended trajectory_option HDs for this cycle.
 */
export function resolveTrajectoryRecommendationCutoffFromDecisions(input: {
  readonly decisions: readonly HumanDecision[];
  readonly cycleInstanceId: string;
}): string | null {
  const matching = input.decisions.filter((d) =>
    isAcceptedTrajectoryOptionDecisionForCycle(d, input.cycleInstanceId),
  );
  if (matching.length === 0) return null;
  let latest = matching[0]!.effectiveAt;
  for (let i = 1; i < matching.length; i += 1) {
    const at = matching[i]!.effectiveAt;
    if (at > latest) latest = at;
  }
  return latest;
}

export function classifyAcwRecommendationCurrentness(input: {
  readonly createdAt: string;
  readonly ignoreCreatedAtOnOrBefore: string | null;
}): "CURRENT" | "HISTORICAL" {
  const cutoff = input.ignoreCreatedAtOnOrBefore?.trim() || null;
  if (cutoff && input.createdAt <= cutoff) return "HISTORICAL";
  return "CURRENT";
}

=== NEW: resolveCurrentNoraTrajectoryRecommendation.ts ===
/**
 * PILOT-NORA-STUDIO-SEMANTIC-CONTINUITY-01 / CORR-01 —
 * resolve the current Nora ACW trajectory Recommendation for a decision-support
 * OptionSet.
 *
 * Prefer a fresh validated Nora recommendedOptionRef when it belongs to the
 * server-derived OptionSet. Otherwise expose deterministic fallback explicitly.
 * Never silently pick among ambiguous / mixed-invalid Nora Recommendations.
 * Subject-aware HumanDecision cutoff: accepted/amended trajectory_option HD for
 * the same active cycle supersedes prior Nora Recommendations as CURRENT.
 * Recommendation ≠ HumanDecision; never promotes trajectory.
 */

import { createHash } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { EpistemicItem } from "@/lib/oa/cycle";
import {
  ACTIVE_CYCLE_WORK_SOURCE,
  extractAcwRecommendedOptionRef,
} from "../materializeActiveCycleWork";
import {
  resolveTrajectoryRecommendationCutoffFromDecisions,
} from "../trajectoryRecommendationCurrentness";
import type { TrajectoryRecommendationDto } from "./types";
import { computeDecisionBasisSourceDigest } from "@/lib/oa/decision";
import type { TrajectoryOptionInputs } from "./trajectoryOptions";
import { deriveTrajectoryRecommendation } from "./trajectoryOptions";

export {
  classifyAcwRecommendationCurrentness,
  isAcceptedTrajectoryOptionDecisionForCycle,
  resolveTrajectoryRecommendationCutoffFromDecisions,
} from "../trajectoryRecommendationCurrentness";

export type RecommendationSourceKind =
  | "nora_active_cycle"
  | "deterministic_fallback";

export type ResolvedTrajectoryRecommendation = {
  readonly recommendation: TrajectoryRecommendationDto;
  readonly recommendationSource: RecommendationSourceKind;
  readonly recommendationBasisDigest: string;
  readonly noraRecommendationEpistemicItemId: string | null;
  readonly noraRecommendationCreatedAt: string | null;
};

export type ResolveCurrentNoraTrajectoryRecommendationResult =
  | { readonly ok: true; readonly resolved: ResolvedTrajectoryRecommendation }
  | {
      readonly ok: false;
      readonly code:
        | "AMBIGUOUS_NORA_RECOMMENDATION"
        | "NORA_RECOMMENDATION_NOT_IN_OPTION_SET"
        | "EPISTEMIC_UNAVAILABLE";
      readonly message: string;
    };

function relatedToCycle(
  item: EpistemicItem,
  cycleInstanceId: string,
): boolean {
  return (item.relatedObjects ?? []).includes(cycleInstanceId);
}

function computeNoraBasisDigest(input: {
  readonly epistemicItemId: string;
  readonly recommendedOptionRef: string;
  readonly createdAt: string;
}): string {
  return computeDecisionBasisSourceDigest({
    kind: "nora_active_cycle_recommendation",
    epistemicItemId: input.epistemicItemId,
    recommendedOptionRef: input.recommendedOptionRef,
    createdAt: input.createdAt,
  });
}

function computeFallbackBasisDigest(input: {
  readonly recommendedOptionRef: string;
  readonly optionInputs: TrajectoryOptionInputs;
}): string {
  const recovery = input.optionInputs.recoveryContext;
  return computeDecisionBasisSourceDigest({
    kind: "deterministic_fallback_recommendation",
    recommendedOptionRef: input.recommendedOptionRef,
    cycleTypeId: input.optionInputs.cycleTypeId,
    recommendedProfile: input.optionInputs.recommendedProfile,
    criticalSignalsPresent: input.optionInputs.criticalSignalsPresent,
    irreversible: input.optionInputs.irreversible,
    reservations: [...input.optionInputs.reservations],
    recoveryAttemptId: recovery?.attemptId ?? null,
    recoveryProductOutcome: recovery?.productOutcome ?? null,
  });
}

/**
 * Pure selection among ACW Recommendation items (exported for tests).
 */
export function selectCurrentNoraTrajectoryRecommendationItems(input: {
  readonly items: readonly EpistemicItem[];
  readonly cycleInstanceId: string;
  readonly optionRefs: readonly string[];
  /** When set, ignore Nora Recommendations created at/before this HD timestamp. */
  readonly ignoreCreatedAtOnOrBefore?: string | null;
}):
  | { readonly ok: true; readonly item: EpistemicItem; readonly recommendedOptionRef: string }
  | { readonly ok: true; readonly item: null }
  | {
      readonly ok: false;
      readonly code: "AMBIGUOUS_NORA_RECOMMENDATION" | "NORA_RECOMMENDATION_NOT_IN_OPTION_SET";
      readonly message: string;
    } {
  const optionSet = new Set(input.optionRefs);
  const cutoff = input.ignoreCreatedAtOnOrBefore?.trim() || null;
  const candidates = input.items.filter((item) => {
    if (item.source !== ACTIVE_CYCLE_WORK_SOURCE) return false;
    if (item.type !== "Recommendation") return false;
    if (item.status !== "active") return false;
    if (!relatedToCycle(item, input.cycleInstanceId)) return false;
    if (cutoff && item.createdAt <= cutoff) return false;
    return extractAcwRecommendedOptionRef(item.relatedObjects) != null;
  });

  if (candidates.length === 0) {
    return { ok: true, item: null };
  }

  const withRefs = candidates.map((item) => ({
    item,
    ref: extractAcwRecommendedOptionRef(item.relatedObjects)!,
  }));

  const notInSet = withRefs.filter((c) => !optionSet.has(c.ref));
  const inSet = withRefs.filter((c) => optionSet.has(c.ref));

  // CORR-01 C1 — ANY current Nora Recommendation outside OptionSet → fail-closed.
  // Mixed valid+invented must NOT silently keep the valid winner.
  if (notInSet.length > 0) {
    return {
      ok: false,
      code: "NORA_RECOMMENDATION_NOT_IN_OPTION_SET",
      message: `Recommendation Nora « ${notInSet[0]!.ref} » absente des Options serveur — aucune présentation inventée.`,
    };
  }

  if (inSet.length === 0) {
    return { ok: true, item: null };
  }

  const distinctRefs = new Set(inSet.map((c) => c.ref));
  if (distinctRefs.size > 1) {
    return {
      ok: false,
      code: "AMBIGUOUS_NORA_RECOMMENDATION",
      message:
        "Plusieurs Recommendations Nora courantes concurrentes — aucune sélection silencieuse.",
    };
  }

  // Newest by createdAt, then epistemicItemId for stability.
  const sorted = [...inSet].sort((a, b) => {
    const byCreated = b.item.createdAt.localeCompare(a.item.createdAt);
    if (byCreated !== 0) return byCreated;
    return b.item.epistemicItemId.localeCompare(a.item.epistemicItemId);
  });
  const winner = sorted[0]!;
  return {
    ok: true,
    item: winner.item,
    recommendedOptionRef: winner.ref,
  };
}

/**
 * Resolve recommendation for W2 present: Nora ACW when eligible, else
 * deterministic deriveTrajectoryRecommendation as explicit fallback.
 */
export async function resolveCurrentNoraTrajectoryRecommendation(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly optionRefs: readonly string[];
  readonly optionInputs: TrajectoryOptionInputs;
  readonly ignoreCreatedAtOnOrBefore?: string | null;
}): Promise<ResolveCurrentNoraTrajectoryRecommendationResult> {
  const fallback = deriveTrajectoryRecommendation(input.optionInputs);
  const fallbackDigest = computeFallbackBasisDigest({
    recommendedOptionRef: fallback.recommendedOptionRef,
    optionInputs: input.optionInputs,
  });

  if (!input.cycleInstanceId?.trim()) {
    return {
      ok: true,
      resolved: {
        recommendation: fallback,
        recommendationSource: "deterministic_fallback",
        recommendationBasisDigest: fallbackDigest,
        noraRecommendationEpistemicItemId: null,
        noraRecommendationCreatedAt: null,
      },
    };
  }

  let items: EpistemicItem[] = [];
  try {
    items = await input.oa.cycleServices.epistemic.listByProject(
      input.projectId,
    );
  } catch {
    return {
      ok: false,
      code: "EPISTEMIC_UNAVAILABLE",
      message:
        "État épistémique illisible — impossible de résoudre la Recommendation Nora courante.",
    };
  }

  // CORR-01 C3 — subject-aware HD cutoff from durable HumanDecision truth.
  let cutoff = input.ignoreCreatedAtOnOrBefore?.trim() || null;
  if (cutoff === null && input.ignoreCreatedAtOnOrBefore === undefined) {
    try {
      const decisions = await input.oa.decisionServices.decisions.listByProject(
        input.projectId,
      );
      cutoff = resolveTrajectoryRecommendationCutoffFromDecisions({
        decisions,
        cycleInstanceId: input.cycleInstanceId,
      });
    } catch {
      return {
        ok: false,
        code: "EPISTEMIC_UNAVAILABLE",
        message:
          "HumanDecisions illisibles — impossible de déterminer la currentness Recommendation.",
      };
    }
  }

  const selected = selectCurrentNoraTrajectoryRecommendationItems({
    items,
    cycleInstanceId: input.cycleInstanceId,
    optionRefs: input.optionRefs,
    ignoreCreatedAtOnOrBefore: cutoff,
  });

  if (!selected.ok) {
    return {
      ok: false,
      code: selected.code,
      message: selected.message,
    };
  }

  if (!selected.item) {
    return {
      ok: true,
      resolved: {
        recommendation: fallback,
        recommendationSource: "deterministic_fallback",
        recommendationBasisDigest: fallbackDigest,
        noraRecommendationEpistemicItemId: null,
        noraRecommendationCreatedAt: null,
      },
    };
  }

  const noraRecommendation: TrajectoryRecommendationDto = {
    label: "RECOMMANDATION — PAS UNE DÉCISION",
    recommendedOptionRef: selected.recommendedOptionRef,
    rationale:
      selected.item.statement.trim() ||
      `Nora recommande l'option ${selected.recommendedOptionRef} — pas une décision.`,
    isHumanDecision: false,
    promotesTrajectory: false,
    ckcAttribution: input.optionInputs.ckcAttribution,
    ckcProvenance: null,
  };

  return {
    ok: true,
    resolved: {
      recommendation: noraRecommendation,
      recommendationSource: "nora_active_cycle",
      recommendationBasisDigest: computeNoraBasisDigest({
        epistemicItemId: selected.item.epistemicItemId,
        recommendedOptionRef: selected.recommendedOptionRef,
        createdAt: selected.item.createdAt,
      }),
      noraRecommendationEpistemicItemId: selected.item.epistemicItemId,
      noraRecommendationCreatedAt: selected.item.createdAt,
    },
  };
}

/** Stable digest helper for tests / decide stale checks without re-listing. */
export function hashRecommendationBasisToken(token: string): string {
  return createHash("sha256").update(token, "utf8").digest("hex").slice(0, 32);
}

=== NEW: resolveTrajectoryDecisionSupportProjection.ts ===
/**
 * Server-only trajectory decision-support projection for Nora prompt.
 * Kept out of studioCognitiveContext static imports to preserve browser/test
 * import boundaries (vertical-slice-runtime is server-only).
 *
 * CORR-01 C4 — Epistemic / ambiguous / invented current state → UNAVAILABLE.
 * KNOWN EMPTY (no eligible Nora Recommendation after successful read) may use
 * deterministic_fallback. Never convert UNKNOWN into fallback-normal.
 */
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { StudioTrajectoryDecisionSupportProjection } from "../f2/studioCognitiveContext";
import { deriveTrajectoryOptions } from "./trajectoryOptions";
import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
import { resolveCurrentNoraTrajectoryRecommendation } from "./resolveCurrentNoraTrajectoryRecommendation";
import { resolveW2QualificationInputs } from "./qualificationInputs";

const UNAVAILABLE: StudioTrajectoryDecisionSupportProjection = Object.freeze({
  state: "UNAVAILABLE",
  optionRefs: Object.freeze([]),
  optionLabels: Object.freeze([]),
  currentNoraRecommendedOptionRef: null,
  currentRecommendationSource: null,
});

const NONE: StudioTrajectoryDecisionSupportProjection = Object.freeze({
  state: "NONE",
  optionRefs: Object.freeze([]),
  optionLabels: Object.freeze([]),
  currentNoraRecommendedOptionRef: null,
  currentRecommendationSource: null,
});

export async function resolveTrajectoryDecisionSupportProjection(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
}): Promise<StudioTrajectoryDecisionSupportProjection> {
  if (!input.cycleInstanceId?.trim()) {
    return NONE;
  }
  try {
    const qual = await resolveW2QualificationInputs({
      oa: input.oa,
      projectId: input.projectId,
    });
    const recovery = await resolvePostEvidenceRecoveryContext({
      oa: input.oa,
      projectId: input.projectId,
    });
    if (!qual.ok || !recovery.ok) {
      return UNAVAILABLE;
    }
    const optionInputs = {
      ...qual.qualification.inputs,
      recoveryContext: recovery.context,
    };
    const options = deriveTrajectoryOptions(optionInputs);
    const optionRefs = options.map((o) => o.optionRef);
    const optionLabels = options.map((o) => o.label);

    const noraResolution = await resolveCurrentNoraTrajectoryRecommendation({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      optionRefs,
      optionInputs,
    });

    // CORR-01 C4 — fail-closed / UNAVAILABLE; never silent deterministic fallback.
    if (!noraResolution.ok) {
      return UNAVAILABLE;
    }

    const noraRef =
      noraResolution.resolved.recommendationSource === "nora_active_cycle"
        ? noraResolution.resolved.recommendation.recommendedOptionRef
        : null;

    return Object.freeze({
      state: "PRESENT",
      optionRefs: Object.freeze(optionRefs),
      optionLabels: Object.freeze(optionLabels),
      currentNoraRecommendedOptionRef: noraRef,
      currentRecommendationSource: noraResolution.resolved.recommendationSource,
    });
  } catch {
    return UNAVAILABLE;
  }
}
```

### materializeActiveCycleWork.ts.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts b/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
index 40522534..4ae0f934 100644
--- a/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
+++ b/projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
@@ -19,12 +19,86 @@ import type { GetCurrentLivingProjectState } from "@/lib/oa/project/application/
 import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
 import type { GetCycle } from "@/lib/oa/cycle/application/getCycle";
 import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
+import { normalizeActiveCycleRecommendedOptionRef } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
 import type { ActiveCycleWorkContextSeal } from "./f2/activeCycleCognitiveContext";

 /** Stable Product source for Nora active-cycle cognitive work. */
 export const ACTIVE_CYCLE_WORK_SOURCE = "active-cycle-work:nora" as const;

+/**
+ * Extract canonical recommendedOptionRef from ACW EpistemicItem.relatedObjects.
+ * Prefers opt:trajectory:* then any opt:* (W2-compatible relatedObjects pattern).
+ */
+export function extractAcwRecommendedOptionRef(
+  relatedObjects: readonly string[] | null | undefined,
+): string | null {
+  if (!relatedObjects || relatedObjects.length === 0) return null;
+  const optionRefs = relatedObjects.filter((r) => r.startsWith("opt:"));
+  const trajectory = optionRefs.find((r) => r.startsWith("opt:trajectory:"));
+  return trajectory ?? optionRefs[0] ?? null;
+}
+
+/**
+ * CORR-01 C2 — validate structured ACW Recommendation option identity against
+ * server trajectory decision-support BEFORE persistence / Pilot display.
+ * Non-trajectory Recommendations (recommendedOptionRef=null) remain allowed.
+ */
+export function validateActiveCycleRecommendationAgainstDecisionSupport(input: {
+  readonly items: readonly {
+    readonly type: string;
+    readonly recommendedOptionRef?: string | null;
+  }[];
+  readonly decisionSupportState:
+    | "PRESENT"
+    | "NONE"
+    | "UNAVAILABLE"
+    | null
+    | undefined;
+  readonly optionRefs: readonly string[] | null | undefined;
+}):
+  | { readonly ok: true }
+  | {
+      readonly ok: false;
+      readonly code: "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID";
+      readonly reason: string;
+    } {
+  for (const item of input.items) {
+    if (item.type !== "Recommendation") continue;
+    if (
+      item.recommendedOptionRef == null ||
+      String(item.recommendedOptionRef).trim() === ""
+    ) {
+      continue;
+    }
+    const normalized = normalizeActiveCycleRecommendedOptionRef(
+      item.recommendedOptionRef,
+    );
+    if (normalized === null) {
+      return {
+        ok: false,
+        code: "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID",
+        reason: "recommended_option_ref_invalid_shape",
+      };
+    }
+    if (input.decisionSupportState !== "PRESENT") {
+      return {
+        ok: false,
+        code: "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID",
+        reason: "decision_support_not_present_for_trajectory_recommendation",
+      };
+    }
+    if (!input.optionRefs || !input.optionRefs.includes(normalized)) {
+      return {
+        ok: false,
+        code: "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID",
+        reason: `recommended_option_ref_not_in_decision_support:${normalized}`,
+      };
+    }
+  }
+  return { ok: true };
+}
+
 /** Same Nora agent actor as LR — authority remains none on items. */
 export const NORA_ACTIVE_CYCLE_WORK_ACTOR: ActorReference =
   NORA_LIFECYCLE_RECOMMENDATION_ACTOR;
@@ -91,6 +165,8 @@ export function activeCycleWorkEpistemicItemId(input: {
   index: number;
   type: string;
   statement: string;
+  /** Semantic continuity — part of identity when Recommendation binds an Option. */
+  recommendedOptionRef?: string | null;
 }): string {
   const raw = [
     input.projectId,
@@ -99,6 +175,7 @@ export function activeCycleWorkEpistemicItemId(input: {
     String(input.index),
     input.type,
     statementDigest(input.statement),
+    input.recommendedOptionRef?.trim() || "",
   ].join("|");
   const digest = createHash("sha256")
     .update(raw, "utf8")
@@ -139,6 +216,7 @@ function materialParity(
     statement: string;
     confidence?: EpistemicConfidence;
     blocking?: boolean;
+    recommendedOptionRef?: string | null;
   },
 ): boolean {
   if (existing.type !== next.type) return false;
@@ -150,6 +228,9 @@ function materialParity(
     return false;
   }
   if (existing.source !== ACTIVE_CYCLE_WORK_SOURCE) return false;
+  const existingRef = extractAcwRecommendedOptionRef(existing.relatedObjects);
+  const nextRef = next.recommendedOptionRef?.trim() || null;
+  if ((existingRef ?? null) !== (nextRef ?? null)) return false;
   return true;
 }

@@ -280,6 +361,11 @@ export async function materializeActiveCycleWork(input: {
   runInTransaction: CyclePersistenceUnitOfWorkPort["runInTransaction"];
   producedAt: string;
   createdBy?: ActorReference;
+  /**
+   * CORR-01 C2 — when provided, every structured recommendedOptionRef must be an
+   * exact member. Omit only for legacy callers without decision-support context.
+   */
+  allowedOptionRefs?: readonly string[];
 }): Promise<MaterializeActiveCycleWorkResult> {
   if (!input.items || input.items.length === 0) {
     return {
@@ -300,6 +386,52 @@ export async function materializeActiveCycleWork(input: {
         reason: `forbidden_epistemic_type:${item.type}`,
       };
     }
+    // Recommendation may carry structured option identity; other types must not.
+    if (
+      item.type !== "Recommendation" &&
+      item.recommendedOptionRef != null &&
+      String(item.recommendedOptionRef).trim() !== ""
+    ) {
+      return {
+        ok: false,
+        code: "ACTIVE_CYCLE_WORK_INVALID",
+        reason: "recommended_option_ref_only_on_recommendation",
+      };
+    }
+    if (
+      item.type === "Recommendation" &&
+      item.recommendedOptionRef != null &&
+      normalizeActiveCycleRecommendedOptionRef(item.recommendedOptionRef) ===
+        null
+    ) {
+      return {
+        ok: false,
+        code: "ACTIVE_CYCLE_WORK_INVALID",
+        reason: "recommended_option_ref_invalid",
+      };
+    }
+    // CORR-01 C2 defense-in-depth — when allowedOptionRefs is supplied, every
+    // structured Recommendation ref must be an exact member.
+    if (
+      item.type === "Recommendation" &&
+      item.recommendedOptionRef != null &&
+      String(item.recommendedOptionRef).trim() !== ""
+    ) {
+      const normalized = normalizeActiveCycleRecommendedOptionRef(
+        item.recommendedOptionRef,
+      );
+      if (
+        input.allowedOptionRefs !== undefined &&
+        (normalized === null ||
+          !input.allowedOptionRefs.includes(normalized))
+      ) {
+        return {
+          ok: false,
+          code: "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID",
+          reason: "recommended_option_ref_not_in_decision_support",
+        };
+      }
+    }
   }

   const createdBy = input.createdBy ?? NORA_ACTIVE_CYCLE_WORK_ACTOR;
@@ -401,6 +533,12 @@ export async function materializeActiveCycleWork(input: {
             "empty_statement",
           );
         }
+        const recommendedOptionRef =
+          type === "Recommendation"
+            ? normalizeActiveCycleRecommendedOptionRef(
+                raw.recommendedOptionRef,
+              )
+            : null;
         const epistemicItemId = activeCycleWorkEpistemicItemId({
           projectId: facts.projectId,
           cycleInstanceId: facts.activeCycleInstanceId,
@@ -408,6 +546,7 @@ export async function materializeActiveCycleWork(input: {
           index,
           type,
           statement,
+          recommendedOptionRef,
         });
         const existing = existingById.get(epistemicItemId);
         const confidence =
@@ -423,6 +562,7 @@ export async function materializeActiveCycleWork(input: {
               statement,
               confidence,
               blocking,
+              recommendedOptionRef,
             })
           ) {
             throw new ActiveCycleWorkAtomicFailure(
@@ -458,6 +598,7 @@ export async function materializeActiveCycleWork(input: {
           facts.activeCycleInstanceId,
           ...(cycle.trajectoryId ? [cycle.trajectoryId] : []),
           ...(cycle.trajectoryStepId ? [cycle.trajectoryStepId] : []),
+          ...(recommendedOptionRef ? [recommendedOptionRef] : []),
         ];

         planned.push({
```

### orchestrateTurn.ts.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 695b9f6c..388da859 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -48,7 +48,11 @@ import {
   LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
   lifecycleRecommendationMaterializeFailurePiloteNotice,
 } from "./lifecycleRecommendationPiloteNotice";
-import { materializeActiveCycleWork } from "./materializeActiveCycleWork";
+import { pilotTrajectoryOptionLabel } from "./presentationLabels";
+import {
+  materializeActiveCycleWork,
+  validateActiveCycleRecommendationAgainstDecisionSupport,
+} from "./materializeActiveCycleWork";
 import {
   materializeReservationDelta,
   stripActiveCycleWorkReservationsWhenDeltaPresent,
@@ -677,6 +681,29 @@ export async function orchestrateProjectAssistantTurn(input: {
       });
       const acwItems = strippedAcw?.items ?? [];
       if (acwItems.length > 0) {
+        // CORR-01 C2 — validate structured recommendedOptionRef against server
+        // decision-support BEFORE any ACW write or Pilot structured display.
+        const studioForRec = input.studioCognitiveContext ?? null;
+        const tds = studioForRec?.trajectoryDecisionSupport;
+        const acwRecValidation =
+          validateActiveCycleRecommendationAgainstDecisionSupport({
+            items: acwItems,
+            decisionSupportState: tds?.state,
+            optionRefs: tds?.optionRefs,
+          });
+        if (!acwRecValidation.ok) {
+          return {
+            ok: false,
+            status: "validation_error",
+            code: acwRecValidation.code,
+            message:
+              "Recommendation trajectoire structurée invalide face au decision-support serveur — aucune matérialisation ni affichage structuré.",
+            mode: modeResolution.mode,
+            retryable: false,
+            logicalTurnId,
+          };
+        }
+
         const assessment = coherent?.preCycleRoutingAssessment;
         const disposition = coherent?.disposition;
         const eligibleDefer =
@@ -837,6 +864,12 @@ export async function orchestrateProjectAssistantTurn(input: {
             ),
             producedAt,
             createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
+            ...(studio.trajectoryDecisionSupport?.state === "PRESENT"
+              ? {
+                  allowedOptionRefs:
+                    studio.trajectoryDecisionSupport.optionRefs,
+                }
+              : {}),
           });
           if (!mat.ok) {
             return {
@@ -1134,10 +1167,36 @@ export async function orchestrateProjectAssistantTurn(input: {
     );
     // NORA-CONVERSATIONAL-INITIATIVE-01 / CR-NCI-03 — compose from the same
     // coherent guidance already normalized with Cognitive Stop (no second pass).
-    if (coherentEarly?.conversationGuidance) {
+    // CORR-01 C2 — structured Recommendation line only when validated vs TDS.
+    if (coherentEarly?.conversationGuidance || coherentEarly?.activeCycleWork) {
+      const tdsForDisplay =
+        input.studioCognitiveContext?.trajectoryDecisionSupport;
+      const structuredRecItem = coherentEarly.activeCycleWork?.items?.find(
+        (i) =>
+          i.type === "Recommendation" &&
+          typeof i.recommendedOptionRef === "string" &&
+          i.recommendedOptionRef.trim().length > 0,
+      );
+      const displayValidation = structuredRecItem
+        ? validateActiveCycleRecommendationAgainstDecisionSupport({
+            items: [structuredRecItem],
+            decisionSupportState: tdsForDisplay?.state,
+            optionRefs: tdsForDisplay?.optionRefs,
+          })
+        : { ok: true as const };
+      const structuredRecommendation =
+        displayValidation.ok && structuredRecItem?.recommendedOptionRef
+          ? {
+              recommendedOptionRef: structuredRecItem.recommendedOptionRef.trim(),
+              optionLabel: pilotTrajectoryOptionLabel(
+                structuredRecItem.recommendedOptionRef,
+              ),
+            }
+          : null;
       assistantText = composePilotFacingAssistantText(
         assistantText,
-        coherentEarly.conversationGuidance,
+        coherentEarly.conversationGuidance ?? null,
+        structuredRecommendation,
       );
     }
```

### studioCognitiveContext.ts.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index ea7a12fd..cbe173ab 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -42,7 +42,12 @@ import {
   resolveActiveCycleCognitiveContext,
   type ActiveCycleCognitiveProjection,
 } from "./activeCycleCognitiveContext";
-import { ACTIVE_CYCLE_WORK_SOURCE } from "../materializeActiveCycleWork";
+import { ACTIVE_CYCLE_WORK_SOURCE, extractAcwRecommendedOptionRef } from "../materializeActiveCycleWork";
+import {
+  classifyAcwRecommendationCurrentness,
+  resolveTrajectoryRecommendationCutoffFromDecisions,
+} from "../trajectoryRecommendationCurrentness";
+import { pilotTrajectoryOptionLabel } from "../presentationLabels";
 import {
   buildReservationCompactForPrompt,
   formatReservationCompactForPrompt,
@@ -218,6 +223,28 @@ export type StudioActiveCycleWorkProjection = {
   readonly confidence?: string;
   readonly blocking?: boolean;
   readonly status: EpistemicItemStatus;
+  /** Structured Option identity when Recommendation binds a server Option. */
+  readonly recommendedOptionRef?: string | null;
+  /**
+   * CORR-01 C3 — CURRENT vs HISTORICAL relative to accepted trajectory HD cutoff.
+   * Only set for Recommendations that carry a structured option ref.
+   */
+  readonly recommendationCurrentness?: "CURRENT" | "HISTORICAL" | null;
+};
+
+/**
+ * Server-derived trajectory decision-support OptionRefs for Nora (read-only).
+ * Never authority; Nora may recommend only among these refs when present.
+ */
+export type StudioTrajectoryDecisionSupportProjection = {
+  readonly state: "PRESENT" | "NONE" | "UNAVAILABLE";
+  readonly optionRefs: readonly string[];
+  readonly optionLabels: readonly string[];
+  readonly currentNoraRecommendedOptionRef: string | null;
+  readonly currentRecommendationSource:
+    | "nora_active_cycle"
+    | "deterministic_fallback"
+    | null;
 };

 /**
@@ -242,6 +269,7 @@ export type StudioCognitiveContext = {
     readonly state: PresenceState;
     readonly items: readonly StudioActiveCycleWorkProjection[];
   };
+  readonly trajectoryDecisionSupport: StudioTrajectoryDecisionSupportProjection;
   readonly decisions: {
     readonly state: PresenceState;
     readonly items: readonly StudioDecisionProjection[];
@@ -378,7 +406,19 @@ function projectTrajectory(t: ProjectTrajectory): StudioTrajectoryProjection {

 function projectActiveCycleWorkItem(
   item: EpistemicItem,
+  ignoreCreatedAtOnOrBefore: string | null,
 ): StudioActiveCycleWorkProjection {
+  const recommendedOptionRef =
+    item.type === "Recommendation"
+      ? extractAcwRecommendedOptionRef(item.relatedObjects)
+      : null;
+  const recommendationCurrentness =
+    item.type === "Recommendation" && recommendedOptionRef
+      ? classifyAcwRecommendationCurrentness({
+          createdAt: item.createdAt,
+          ignoreCreatedAtOnOrBefore,
+        })
+      : null;
   return Object.freeze({
     type: item.type,
     statement: clip(
@@ -388,6 +428,8 @@ function projectActiveCycleWorkItem(
     ...(item.confidence !== undefined ? { confidence: item.confidence } : {}),
     ...(item.blocking !== undefined ? { blocking: item.blocking } : {}),
     status: item.status,
+    recommendedOptionRef,
+    recommendationCurrentness,
   });
 }

@@ -414,6 +456,12 @@ export async function composeStudioCognitiveContext(input: {
    * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — server-validated focus only.
    */
   reservationFocus?: ValidatedReservationInteractionContext | null;
+  /**
+   * Optional server-precomputed decision-support (from
+   * resolveTrajectoryDecisionSupportProjection). Avoids pulling W2/server-only
+   * imports into this composer module.
+   */
+  trajectoryDecisionSupport?: StudioTrajectoryDecisionSupportProjection | null;
 }): Promise<ComposeStudioCognitiveContextResult> {
   const activeCycleInstanceId =
     input.activeCycleInstanceId ??
@@ -490,6 +538,13 @@ export async function composeStudioCognitiveContext(input: {
           state: "UNAVAILABLE" as const,
           items: Object.freeze([]),
         }),
+        trajectoryDecisionSupport: Object.freeze({
+          state: "UNAVAILABLE" as const,
+          optionRefs: Object.freeze([]),
+          optionLabels: Object.freeze([]),
+          currentNoraRecommendedOptionRef: null,
+          currentRecommendationSource: null,
+        }),
         decisions: Object.freeze({
           state: "UNAVAILABLE" as const,
           items: Object.freeze([]),
@@ -601,6 +656,18 @@ export async function composeStudioCognitiveContext(input: {
   if (activeCycle) {
     try {
       const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
+      let hdCutoff: string | null = null;
+      try {
+        const decisionsForCutoff =
+          await oa.decisionServices.decisions.listByProject(projectId);
+        hdCutoff = resolveTrajectoryRecommendationCutoffFromDecisions({
+          decisions: decisionsForCutoff,
+          cycleInstanceId: activeCycle.cycleInstanceId,
+        });
+      } catch {
+        // Decision unreadability → do not claim ACW Recommendation as CURRENT.
+        hdCutoff = "9999-12-31T23:59:59.999Z";
+      }
       const filtered = epistemic.filter(
         (item) =>
           item.source === ACTIVE_CYCLE_WORK_SOURCE &&
@@ -620,7 +687,7 @@ export async function composeStudioCognitiveContext(input: {
         // Chronological ASC for prompt display.
         acwItems = newestN
           .reverse()
-          .map(projectActiveCycleWorkItem);
+          .map((item) => projectActiveCycleWorkItem(item, hdCutoff));
       }
     } catch {
       acwState = "UNAVAILABLE";
@@ -775,6 +842,16 @@ export async function composeStudioCognitiveContext(input: {
     }
   }

+  let trajectoryDecisionSupport: StudioTrajectoryDecisionSupportProjection =
+    input.trajectoryDecisionSupport ??
+    Object.freeze({
+      state: "NONE" as const,
+      optionRefs: Object.freeze([] as string[]),
+      optionLabels: Object.freeze([] as string[]),
+      currentNoraRecommendedOptionRef: null,
+      currentRecommendationSource: null,
+    });
+
   return {
     ok: true,
     context: Object.freeze({
@@ -785,6 +862,7 @@ export async function composeStudioCognitiveContext(input: {
         state: acwState,
         items: Object.freeze(acwItems),
       }),
+      trajectoryDecisionSupport,
       decisions: Object.freeze({
         state: decisionsState,
         items: Object.freeze(decisionItems),
@@ -894,10 +972,26 @@ export function buildStudioCognitivePromptSections(
     if (ctx.activeCycleWorkItems.state === "PRESENT") {
       lines.push("Travail cognitif déjà matérialisé pour ce cycle ACTIVE :");
       for (const w of ctx.activeCycleWorkItems.items) {
+        const recCurrentness =
+          w.recommendationCurrentness === "HISTORICAL"
+            ? " recommendationCurrentness=HISTORICAL (pré-décision — PAS CURRENT)"
+            : w.recommendationCurrentness === "CURRENT"
+              ? " recommendationCurrentness=CURRENT"
+              : "";
+        const showOptionRef =
+          w.recommendedOptionRef &&
+          w.recommendationCurrentness !== "HISTORICAL"
+            ? ` recommendedOptionRef=${w.recommendedOptionRef}`
+            : w.recommendedOptionRef &&
+                w.recommendationCurrentness === "HISTORICAL"
+              ? ` recommendedOptionRef=${w.recommendedOptionRef} (historique)`
+              : "";
         lines.push(
           `• [${w.type}${w.status !== "active" ? `/${w.status}` : ""}]` +
             (w.confidence ? ` conf=${w.confidence}` : "") +
             (w.blocking === true ? " blocking" : "") +
+            showOptionRef +
+            recCurrentness +
             ` — ${w.statement}`,
         );
       }
@@ -908,6 +1002,32 @@ export function buildStudioCognitivePromptSections(
     } else {
       lines.push("Travail cognitif cycle ACTIVE : aucun item matérialisé encore.");
     }
+    const tds = ctx.trajectoryDecisionSupport;
+    if (tds.state === "PRESENT" && tds.optionRefs.length > 0) {
+      lines.push("");
+      lines.push(
+        "Options trajectoire serveur (decision-support — Nora ne peut recommander QUE parmi ces refs) :",
+      );
+      for (let i = 0; i < tds.optionRefs.length; i += 1) {
+        const ref = tds.optionRefs[i]!;
+        const label =
+          tds.optionLabels[i] ?? pilotTrajectoryOptionLabel(ref);
+        lines.push(`• ${ref} — ${label}`);
+      }
+      if (tds.currentNoraRecommendedOptionRef) {
+        lines.push(
+          `Recommendation Nora courante (structurée) : ${tds.currentNoraRecommendedOptionRef} (${pilotTrajectoryOptionLabel(tds.currentNoraRecommendedOptionRef)}) — PAS une HumanDecision.`,
+        );
+      } else {
+        lines.push(
+          "Aucune Recommendation Nora structurée courante pour ces Options — le fallback déterministe Studio s'applique jusqu'à émission Nora.",
+        );
+      }
+    } else if (tds.state === "UNAVAILABLE") {
+      lines.push(
+        "Decision-support trajectoire : UNAVAILABLE — ne pas inventer d'optionRefs.",
+      );
+    }
     if (ctx.reservationFocusSection) {
       lines.push("");
       lines.push(ctx.reservationFocusSection);
```

### orchestrateF2.ts.diff

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54b9213f..dc59025b 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -71,6 +71,7 @@ import {
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
 import { composeStudioCognitiveContext } from "./studioCognitiveContext";
+import { resolveTrajectoryDecisionSupportProjection } from "../w2/resolveTrajectoryDecisionSupportProjection";
 import {
   parseReservationInteractionContextInput,
   validateReservationInteractionContext,
@@ -1081,17 +1082,32 @@ export async function orchestrateAssistantSend(input: {
     // Pure read-only composition; NO reasonWithResolvedCkcContext; NO third model call.
     const registryRoot = resolveProductDoctrineRegistryRoot();
     const oa = getRuntimeApplicationService().oa;
+    const cycleForSupport =
+      reservationFocus?.cycleInstanceId ??
+      project.activeCycleInstanceId ??
+      null;
+    const trajectoryDecisionSupport = oa
+      ? await resolveTrajectoryDecisionSupportProjection({
+          oa,
+          projectId: project.projectId,
+          cycleInstanceId: cycleForSupport,
+        })
+      : Object.freeze({
+          state: "UNAVAILABLE" as const,
+          optionRefs: Object.freeze([] as string[]),
+          optionLabels: Object.freeze([] as string[]),
+          currentNoraRecommendedOptionRef: null,
+          currentRecommendationSource: null,
+        });
     const studioComposed = await composeStudioCognitiveContext({
       analysis,
       project,
       registryRoot,
       truthCContext: truthCContextForF1,
       oa,
-      activeCycleInstanceId:
-        reservationFocus?.cycleInstanceId ??
-        project.activeCycleInstanceId ??
-        null,
+      activeCycleInstanceId: cycleForSupport,
       reservationFocus,
+      trajectoryDecisionSupport,
     });
     if (!studioComposed.ok) {
       return {
```

### pilotNoraStudioSemanticContinuity.corr01.d0.test.ts (new)

```ts
// @vitest-environment node
/**
 * CORR-01 — product-path proofs for semantic continuity:
 * stale recommendation basis, post-HumanDecision cutoff, decision independence.
 * Isolated W2 harness — does NOT mutate real StudyFlow.
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { decideTrajectory } from "@/features/project-assistant/w2/decideTrajectory";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { resolveCurrentNoraTrajectoryRecommendation } from "@/features/project-assistant/w2/resolveCurrentNoraTrajectoryRecommendation";
import { resolveTrajectoryDecisionSupportProjection } from "@/features/project-assistant/w2/resolveTrajectoryDecisionSupportProjection";
import { loadPresentedOptionSet } from "@/features/project-assistant/w2/presentedOptionSet";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
  deriveTrajectoryOptions,
} from "@/features/project-assistant/w2/trajectoryOptions";
import {
  ACTIVE_CYCLE_WORK_SOURCE,
  validateActiveCycleRecommendationAgainstDecisionSupport,
} from "@/features/project-assistant/materializeActiveCycleWork";
import {
  buildStudioCognitivePromptSections,
  composeStudioCognitiveContext,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  seedQualifiedProject,
  tempProductDbPath,
  W2_REGISTRY_ROOT,
} from "./w2Harness";

beforeEach(() => {
  process.env.OPS1_CONVERSATION_PROVIDER = "fake";
  setConversationProviderForTests(null);
});

afterEach(() => {
  cleanupW2TempDirs();
});

async function persistAcwRecommendation(input: {
  oa: NonNullable<ReturnType<typeof bootW2Runtime>["oa"]>;
  projectId: string;
  cycleInstanceId: string;
  epistemicItemId: string;
  recommendedOptionRef: string;
  statement: string;
}): Promise<void> {
  const written = await input.oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    items: [
      {
        epistemicItemId: input.epistemicItemId,
        type: "Recommendation",
        statement: input.statement,
        status: "active",
        source: ACTIVE_CYCLE_WORK_SOURCE,
        relatedObjects: [
          input.projectId,
          input.cycleInstanceId,
          input.recommendedOptionRef,
        ],
      },
    ],
  });
  expect(written.ok).toBe(true);
  if (!written.ok) throw new Error(written.error.detailCode);
}

function analysisStub(): IntentAnalysisDto {
  return {
    intentClass: "informative",
    parseOk: true,
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: null,
  };
}

function projectStub(seeded: {
  projectId: string;
  cycleInstanceId: string;
  lpsVersion: number;
}): ProjectAssistantContextDto {
  return {
    projectId: seeded.projectId,
    name: "CORR-01",
    shortReference: "C01",
    objective: "semantic continuity",
    contextSummary: "corr-01",
    criticality: "STANDARD",
    constraints: ["AUCUNE EXÉCUTION"],
    lpsId: "lps:corr01",
    lpsVersion: seeded.lpsVersion,
    lpsCreatedAt: "2026-09-26T00:00:00.000Z",
    doctrineId: "pkg:corr01",
    doctrineVersion: "1",
    doctrineDigest: "digest:corr01",
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    activeCycleInstanceId: seeded.cycleInstanceId,
  };
}

describe("CORR-01 product-path semantic continuity", () => {
  it("stale recommendation basis → OPTION_SET_STALE + zero HD + zero promotion", async () => {
    const db = tempProductDbPath("corr01-stale.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c01s" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "stale" });
    const oa = runtime.oa!;

    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:a",
      recommendedOptionRef: GOVERNED_OPTION_REF,
      statement: "Nora recommande governed-gated.",
    });

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      GOVERNED_OPTION_REF,
    );
    const sealed = await loadPresentedOptionSet(
      oa,
      seeded.projectId,
      proposed.optionSetRef,
    );
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    expect(sealed.presented.recommendationBasisDigest).toBeTruthy();
    expect(sealed.presented.recommendationSource).toBe("nora_active_cycle");

    // Newer competing Nora Recommendation for same cycle (lexically later id).
    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:z",
      recommendedOptionRef: BOUNDED_OPTION_REF,
      statement: "Nora recommande maintenant bounded-direct.",
    });

    const decisionsBefore = await oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );
    const trajBefore = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      epistemicRefs: proposed.epistemicRefs,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(false);
    if (!decided.ok) {
      expect(decided.code).toBe("OPTION_SET_STALE");
    }

    const decisionsAfter = await oa.decisionServices.decisions.listByProject(
      seeded.projectId,
    );
    expect(decisionsAfter.length).toBe(decisionsBefore.length);
    const trajAfter = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId: seeded.projectId,
    });
    expect(trajAfter.ok).toBe(trajBefore.ok);
    if (trajAfter.ok && trajBefore.ok) {
      expect(trajAfter.trajectory.version).toBe(trajBefore.trajectory.version);
      expect(trajAfter.trajectory.decidedByDecisionRef).toBe(
        trajBefore.trajectory.decidedByDecisionRef,
      );
    }
  });

  it("unchanged basis + non-recommended presented Option → decide succeeds", async () => {
    const db = tempProductDbPath("corr01-decide.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c01d" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "decide" });
    const oa = runtime.oa!;

    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:gov",
      recommendedOptionRef: GOVERNED_OPTION_REF,
      statement: "Nora recommande governed-gated.",
    });

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.recommendation.recommendedOptionRef).toBe(
      GOVERNED_OPTION_REF,
    );
    expect(proposed.recommendation.isHumanDecision).toBe(false);

    // Recommendation ≠ Decision — select clarify while governed was recommended.
    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: CLARIFY_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      epistemicRefs: proposed.epistemicRefs,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;
    expect(decided.decision.selectedOptionRef).toBe(CLARIFY_OPTION_REF);
    expect(decided.executionPerformed).toBe(false);
    expect(decided.trajectory!.decidedByDecisionRef).toBe(
      decided.decision.decisionId,
    );
  });

  it("post-HD: old Nora Recommendation not CURRENT after reload", async () => {
    const db = tempProductDbPath("corr01-posthd.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c01h" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "posthd" });
    const oa = runtime.oa!;

    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:pre",
      recommendedOptionRef: GOVERNED_OPTION_REF,
      statement: "Pré-décision governed.",
    });

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const decided = await decideTrajectory({
      oa,
      projectId: seeded.projectId,
      optionSetRef: proposed.optionSetRef,
      options: proposed.options,
      recommendedOptionRef: proposed.recommendation.recommendedOptionRef,
      selectedOptionRef: GOVERNED_OPTION_REF,
      trajectoryId: proposed.proposedTrajectory!.trajectoryId,
      candidateVersion: proposed.proposedTrajectory!.version,
      epistemicRefs: proposed.epistemicRefs,
      forceLocalAuthority: true,
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    const options = deriveTrajectoryOptions(qualification.qualification.inputs);
    const resolved = await resolveCurrentNoraTrajectoryRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      optionRefs: options.map((o) => o.optionRef),
      optionInputs: qualification.qualification.inputs,
    });
    expect(resolved.ok).toBe(true);
    if (!resolved.ok) return;
    expect(resolved.resolved.recommendationSource).toBe(
      "deterministic_fallback",
    );
    expect(resolved.resolved.noraRecommendationEpistemicItemId).toBeNull();

    const tds = await resolveTrajectoryDecisionSupportProjection({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
    });
    expect(tds.state).toBe("PRESENT");
    expect(tds.currentNoraRecommendedOptionRef).toBeNull();
    expect(tds.currentRecommendationSource).toBe("deterministic_fallback");

    // Reload durable Product truth (new runtime on same sqlite).
    const runtime2 = bootW2Runtime({ productDbPath: db, idPrefix: "c01h2" });
    const oa2 = runtime2.oa!;
    const resolved2 = await resolveCurrentNoraTrajectoryRecommendation({
      oa: oa2,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      optionRefs: options.map((o) => o.optionRef),
      optionInputs: qualification.qualification.inputs,
    });
    expect(resolved2.ok).toBe(true);
    if (!resolved2.ok) return;
    expect(resolved2.resolved.recommendationSource).toBe(
      "deterministic_fallback",
    );

    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub(),
      project: projectStub(seeded),
      registryRoot: W2_REGISTRY_ROOT,
      oa: oa2,
      activeCycleInstanceId: seeded.cycleInstanceId,
      trajectoryDecisionSupport: await resolveTrajectoryDecisionSupportProjection(
        {
          oa: oa2,
          projectId: seeded.projectId,
          cycleInstanceId: seeded.cycleInstanceId,
        },
      ),
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(
      composed.context.decisions.items.some(
        (d) =>
          d.lifecycle === "CURRENT" &&
          d.selectedOptionId === GOVERNED_OPTION_REF,
      ),
    ).toBe(true);
    const prompt = buildStudioCognitivePromptSections(composed.context).join(
      "\n",
    );
    expect(prompt).toMatch(/HumanDecision|décision/i);
    expect(prompt).not.toMatch(
      /Recommendation Nora courante \(structurée\) : opt:trajectory:governed-gated/,
    );
    const hist = composed.context.activeCycleWorkItems.items.find(
      (i) =>
        i.type === "Recommendation" &&
        i.recommendedOptionRef === GOVERNED_OPTION_REF,
    );
    if (hist) {
      expect(hist.recommendationCurrentness).toBe("HISTORICAL");
    }
  });

  it("C2/C4 — invented ref + UNAVAILABLE decision-support fail closed", () => {
    expect(
      validateActiveCycleRecommendationAgainstDecisionSupport({
        items: [
          {
            type: "Recommendation",
            recommendedOptionRef: "opt:trajectory:invented",
          },
        ],
        decisionSupportState: "PRESENT",
        optionRefs: [GOVERNED_OPTION_REF, BOUNDED_OPTION_REF, CLARIFY_OPTION_REF],
      }).ok,
    ).toBe(false);

    expect(
      validateActiveCycleRecommendationAgainstDecisionSupport({
        items: [
          {
            type: "Recommendation",
            recommendedOptionRef: GOVERNED_OPTION_REF,
          },
        ],
        decisionSupportState: "NONE",
        optionRefs: [],
      }).ok,
    ).toBe(false);
  });

  it("C4 — mixed durable invented+valid → resolve fails (not valid winner)", async () => {
    const db = tempProductDbPath("corr01-mixed.sqlite");
    const runtime = bootW2Runtime({ productDbPath: db, idPrefix: "c01m" });
    const seeded = await seedQualifiedProject(runtime, { suffix: "mixed" });
    const oa = runtime.oa!;

    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:valid",
      recommendedOptionRef: GOVERNED_OPTION_REF,
      statement: "Valid",
    });
    await persistAcwRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      epistemicItemId: "epi:acw:corr01:invented",
      recommendedOptionRef: "opt:trajectory:invented-mixed",
      statement: "Invented",
    });

    const qualification = await resolveW2QualificationInputs({
      oa,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;
    const options = deriveTrajectoryOptions(qualification.qualification.inputs);
    const resolved = await resolveCurrentNoraTrajectoryRecommendation({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
      optionRefs: options.map((o) => o.optionRef),
      optionInputs: qualification.qualification.inputs,
    });
    expect(resolved.ok).toBe(false);
    if (!resolved.ok) {
      expect(resolved.code).toBe("NORA_RECOMMENDATION_NOT_IN_OPTION_SET");
    }

    const tds = await resolveTrajectoryDecisionSupportProjection({
      oa,
      projectId: seeded.projectId,
      cycleInstanceId: seeded.cycleInstanceId,
    });
    expect(tds.state).toBe("UNAVAILABLE");
    expect(tds.currentRecommendationSource).toBeNull();
  });
});
```
