# SFIA Studio Review Pack — FULL

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-09-09 18:42:49 CEST |
| **Cycle ID** | `SFIA-STUDIO-PRE-CYCLE-ROUTING-BOUNDARY-CORRECTIVE-01` |
| **Type** | 8 — Delivery / implémentation · EVOL · CRITICAL |
| **Décision Morris consommée** | `GO MORRIS — PRE-CYCLE ROUTING QUALIFICATION BOUNDARY CORRECTIVE` |
| **Milestone** | PRODUCT PROOF — PRE-CYCLE ROUTING BOUNDARY CORRECTIVE |
| **Review pack** | FULL |
| **ZERO NEW REAL** | OUI |
| **Verdict** | PRE-CYCLE ROUTING BOUNDARY CORRECTIVE — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW |

---

## 1. Local Git Truth — BEFORE

| Check | Observed |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| HEAD | `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0` |
| origin/main (after fetch) | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| staged | (empty) |
| tracked dirty at start | `M .tmp-sfia-review/chatgpt-review.md` |
| untracked at start | `.tmp-sfia-review/runtime-captures/` (bounded live replay evidence — READ-ONLY) |
| parent of HEAD | `a9f6c310a0826d0e5bd6f7264603382a86564db1` (= origin/main) |

**Verdict Local Git Truth :** PASS — identity matches expected parent `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0`. No unexpected Product staged changes. Live replay artefacts preserved read-only.

---

## 2. Bounded live replay evidence (READ-ONLY — not reused as fixture)

Preserved under `.tmp-sfia-review/runtime-captures/qual-to-governed-cycle/`:

- `01-presentation-desktop.png`
- `02-presentation-390.png`
- `fixture.html` / `fixture-meta.json` / `manifest.jsonl`

Live semantic failure (prior campaign against f35):

1. Fresh Project « application de gestion de tâches »
2. Turn 1 clarification situation concrète — **accepted** (routing-relevant)
3. After Pilote situation (tâches quotidiennes / oubli / vue simple) — Nora continued into priorité/urgence signals then task-state taxonomy (En retard / Aujourd'hui / …) and « due aujourd'hui → retard demain ou heure ? »
4. No spontaneous Lifecycle Recommendation

**Live verdict carried :** QUALIFICATION BOUNDARY NOT PROVEN IN REAL.

---

## 3. Sources read

### Processus externe
- `prompts/templates/sfia-cycle-execution-template.md` (routing obligations referenced via method guide)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- CKC Delivery / méthode cycles projet (catalogue `cyc:*`)

### Convergence / doctrine / v3 / R22
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` (scope: capacity framing)
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/sfia-v3-framing/32|33|34|35-*.md` (read for invariants; **not modified**)
- `projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md`

### Candidate + seams
- commit `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0`
- `buildProjectSystemPrompt.ts`
- `noraProductTurnOutputType.ts` / `noraLifecycleRecommendationOutputType.ts`
- `orchestrateTurn.ts` (consumer of `NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE`)
- `materializeFromProductTurn.ts`
- `providerAgentsModel.ts` / `runNoraAgentsTurn.ts` (plain-text coerce)
- tests qual-to-governed-cycle + lifecycleRecommendation #477

---

## 4. Root Cause Matrix

### A. Same-turn Nora context (actual)

| Context | Available same turn? | Notes |
| --- | --- | --- |
| Project / LPS / criticality | YES | via `buildProjectSystemPrompt` |
| Active cycle | YES (Truth C / studio cognitive) | when present |
| Candidate cycle cognitive orientation | YES (method/CKC lens if resolved) | advisory only |
| CKC applicable | YES when resolved | guidance; not authority |
| Signals / profile | Via F2 path when used | **not** root cause this cycle (`qualificationSignalCoherence` untouched) |
| Trajectory / lifecycle facts | YES for materialization after turn | readers fail-closed |
| Conversation history | YES | Memory B / messages |
| Structured Product output | YES | narrative + optional LR — **before this corrective**: no explicit routing-boundary facts |

### B. Why prompt-only failed in REAL

f35 already added a semantic prompt section (« lorsque besoin assez compris… cesse approfondissement »). In REAL, Nora treated residual unknowns (priority signals, task states, overdue rules) as sufficient reason to keep clarifying. The model had **no structured obligation** to classify unknowns as routing-blocking vs cycle-owned, and **no server coherence** to strip a premature posture or force the LR field when ready. Prompt prose alone is soft; the live path showed continued Cadrage/Conception content without LR.

### C. Least new mechanics for routing-blocking vs cycle-owned

Represent the two cognitive tests as **required boolean facts** inside the existing Product turn structured output (`preCycleRoutingAssessment`), then apply **deterministic coherence** before LR materialization. No second model, no prose parser, no new store.

### D/E. Options

| Option | Covers capacity? | Fail-closed | Debt | Tests | Parallel arch? | Same-turn? | Persistence? | Authority? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Prompt-only wording | Partial (already failed REAL) | Weak | Low | Soft | No | Yes | No | No |
| **Structured-output extension + coherence (CHOSEN)** | Yes at deterministic scope | Strong (strip LR on CONTINUE/HOLD/DEFER-NEXT) | Low schema additive | BAR-RB-01…15 | No | Yes | No (assessment ephemeral) | No |
| Server-only inference from existing facts without SO fields | Incomplete (cannot know model's unknown classification without narrative parse) | Would require prose parse (forbidden) | High | Hard | Risk | Yes | No | No |

### F. Chosen solution

**ADAPT EXISTING OPENAI-NATIVE STRUCTURED OUTPUT SEAM**

1. Extend `NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE` with required `preCycleRoutingAssessment`.
2. Prompt encodes Routing Relevance Test + Cycle Ownership Test mapped to those booleans.
3. `derivePreCycleRoutingDisposition` + `applyPreCycleRoutingBoundaryCoherence` gate `lifecycleRecommendation` deterministically.
4. Plain-text Fake coerce → fail-closed CONTINUE defaults (never invent readiness).
5. Never invent LR server-side when disposition=EMIT but LR=null (model must emit; Fake proves path).

### OpenAI-native fit disposition

**ADAPT EXISTING OPENAI-NATIVE STRUCTURED OUTPUT SEAM**

- existing Agents SDK outputType = KEEP
- strict structured output = ADAPT (additive fields)
- no provider primitive gap requiring new internal generic engine
- no second call / parallel planner / prose parser

---

## 5. Generic cognitive tests (contract)

### ROUTING RELEVANCE TEST

> Une réponse différente à cette question peut-elle matériellement changer : le cycle candidat ; le profil ; un gate / frontière d'autorité ; ou provoquer un STOP ?

- OUI → clarification pré-cycle autorisée (`routingBlockingUnknownPresent=true`)
- NON → inconnue cycle-owned / non routing-blocking

### CYCLE OWNERSHIP TEST

> Cette inconnue relève-t-elle normalement du travail du cycle que Nora est déjà capable de recommander ?

- OUI → STOP pré-cycle ; Lifecycle Recommendation (`remainingUnknownsAreCycleOwned=true` + candidate supportable)

---

## 6. Architecture chosen — coherence rules

`derivePreCycleRoutingDisposition(assessment)`:

1. `activeCycleAlreadyCoversWork` → `DEFER_TO_ACTIVE_CYCLE`
2. else `multiplePlausibleCycles` → `HOLD_FOR_ROUTING_AMBIGUITY`
3. else `routingBlockingUnknownPresent` → `CONTINUE_PRE_CYCLE`
4. else `candidateCycleSupportable` → `EMIT_LIFECYCLE_RECOMMENDATION`
5. else → `CONTINUE_PRE_CYCLE`

`applyPreCycleRoutingBoundaryCoherence`:

- CONTINUE / HOLD → strip any LR
- DEFER → strip `NEXT_CYCLE` only (FINALIZE may remain)
- EMIT → keep LR as-is (never invent)

Assessment is **non-durable**, **non-authoritative**, not Fact/HD/Cycle/LPS.

---

## 7. Alternatives rejected

- Prompt-only (REAL already falsified)
- Second model / classifier / planner
- Domain keyword matrix / N-turn / always-Cadrage
- New Qualification cycle / LPS phase / persistence
- Parsing narrative for « did Nora ask a question? »
- Touching `qualificationSignalCoherence` / recommendProfile / invariants

---

## 8. Files changed (Product)

| Path | Change |
| --- | --- |
| `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts` | schema + disposition + coherence |
| `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts` | extract via normalize/coherence |
| `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts` | fail-closed coerce |
| `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts` | product-turn normalize |
| `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts` | boundary tests in prompt |
| `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts` | productTurnPayload + assessment |
| `projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts` | prompt assertions |
| `projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts` | **NEW** BAR-RB-01…15 |

**Protected untouched:** qualificationSignalCoherence, invariants, recommendProfile, LPS/migrations, package.json, method/, prompts/, convergence docs, v3 framing, UI (except no new UX this cycle).

---

## 9. BAR-RB-01…15 mapping

| BAR | Coverage in `preCycleRoutingBoundary.d0.test.ts` |
| --- | --- |
| RB-01 | CONTINUE + LR stripped when routing blocking |
| RB-02 | routing block / multiple plausible HOLD |
| RB-03 | READY_TO_EMIT keeps LR with cycle-owned unknowns |
| RB-04 | many unknowns → EMIT; prompt forbids always-Cadrage N-turn |
| RB-05 | delivery-bounded candidate not forced to framing |
| RB-06 | routing vs cycle-owned pair |
| RB-07 | Fake same-turn task-app semantic regression → LR materialized |
| RB-08 | functional details stay cycle-owned (EMIT) |
| RB-09 | genuine Critical unknown → CONTINUE |
| RB-10 | active cycle strips NEXT_CYCLE |
| RB-11 | multiple plausible → HOLD |
| RB-12 | coerce same-turn; no prose parser in SO module |
| RB-13+14 | NEXT_CYCLE materialize; cycle/HD count unchanged; CURRENT select |
| RB-15 | assessment non-authority; fail-closed defaults |

---

## 10. Validation results (EXACT)

| Gate | Result |
| --- | --- |
| Focused RB + qual + LR #477 | **62 passed** (4 files) |
| Full Vitest | **Test Files 319 passed \| 17 skipped (336)** · **Tests 3324 passed \| 135 skipped (3459)** |
| typecheck | PASS (`tsc --noEmit`) |
| lint | PASS (No ESLint warnings or errors) |
| build | PASS (`next build`) |
| git diff --check | clean on Product files (review pack whitespace only pre-final) |
| ZERO NEW REAL | **PROVEN** — Fake/ScriptedModel only |

### Deterministic runtime proof

BAR-RB-07: `orchestrateProjectAssistantTurn` + ScriptedModel product-turn JSON → `lifecycleRecommendationMaterialized=true`, `runNoraAgentsTurn` called **once**, CycleInstance/HD counts unchanged.

---

## 11. Proof statements

- **Same-turn:** single `outputType` Product turn; coerce/normalize only; spy count = 1 in RB-07
- **No prose parser:** coherence uses structured booleans only
- **No new persistence:** assessment not written as Fact/HD/Cycle
- **NEXT_CYCLE ≠ Cycle:** RB-13 + existing R8 #477 delivery tests
- **Recommendation ≠ HD ≠ START:** authority none / isHumanDecision false preserved

---

## 12. Reserves

- `RESERVE-QA-MOCK-01` — OPEN / NON-BLOCKING / OUT OF SCOPE
- **LIVE REPLAY AFTER CORRECTIVE NOT YET PROVEN**
- **R2 OPEN**
- **runtime v3 NON ADOPTED**

---

## 13. Claims

### Authorized
- ROUTING RELEVANCE / CYCLE OWNERSHIP BOUNDARY DETERMINISTICALLY PROVEN AT TESTED SCOPE
- SAME-TURN OPENAI-NATIVE PATH PRESERVED
- ZERO NEW REAL

### Forbidden (not claimed)
- LIVE BOUNDARY PROVEN
- GREENFIELD PRODUCT PROOF COMPLETE
- END-TO-END REAL PROVEN
- R2 CLOSED
- RUNTIME V3 ADOPTED
- READY FOR PR

---

## 14. Commit / Git after (filled after commit)

| Field | Value |
| --- | --- |
| parent | `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0` |
| new commit | `1bbfecb2ff43ed4a0ecbc21cb647c4054ee321a9` |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |

---

## 15. Modified Product content (FULL)


### 15.1 noraProductTurnOutputType.ts
```typescript
import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";
import {
  NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
  isNoraLifecycleRecommendationStructuredOutput,
} from "./noraLifecycleRecommendationOutputType";

/**
 * Pre-cycle routing boundary assessment (same Product turn).
 * Non-durable, non-authoritative — forces Routing Relevance / Cycle Ownership
 * into structured facts so server coherence can gate lifecycleRecommendation.
 * NEVER a Fact / HumanDecision / CycleInstance / LPS state.
 */
export const PRE_CYCLE_ROUTING_ASSESSMENT_SCHEMA = {
  type: "object" as const,
  additionalProperties: false as const,
  required: [
    "routingBlockingUnknownPresent",
    "candidateCycleSupportable",
    "remainingUnknownsAreCycleOwned",
    "multiplePlausibleCycles",
    "activeCycleAlreadyCoversWork",
  ],
  properties: {
    /** ROUTING RELEVANCE: an answer could still change cycle / profile / gate / STOP. */
    routingBlockingUnknownPresent: { type: "boolean" as const },
    /** A single next cycle type is honestly supportable. */
    candidateCycleSupportable: { type: "boolean" as const },
    /** CYCLE OWNERSHIP: remaining unknowns belong to that candidate cycle's work. */
    remainingUnknownsAreCycleOwned: { type: "boolean" as const },
    /** More than one cycle remains honestly plausible. */
    multiplePlausibleCycles: { type: "boolean" as const },
    /** An active CycleInstance already covers the work. */
    activeCycleAlreadyCoversWork: { type: "boolean" as const },
  },
} as const;

export type PreCycleRoutingAssessment = {
  routingBlockingUnknownPresent: boolean;
  candidateCycleSupportable: boolean;
  remainingUnknownsAreCycleOwned: boolean;
  multiplePlausibleCycles: boolean;
  activeCycleAlreadyCoversWork: boolean;
};

/**
 * Deterministic disposition derived from assessment facts (not model prose).
 * Not persisted; not authority.
 */
export type PreCycleRoutingDisposition =
  | "CONTINUE_PRE_CYCLE"
  | "EMIT_LIFECYCLE_RECOMMENDATION"
  | "DEFER_TO_ACTIVE_CYCLE"
  | "HOLD_FOR_ROUTING_AMBIGUITY";

/** Fail-closed default for plain-text coerce / missing assessment. */
export const PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT: PreCycleRoutingAssessment =
  Object.freeze({
    routingBlockingUnknownPresent: true,
    candidateCycleSupportable: false,
    remainingUnknownsAreCycleOwned: false,
    multiplePlausibleCycles: false,
    activeCycleAlreadyCoversWork: false,
  });

/** Candidate clear; remaining unknowns belong to the cycle (emit LR). */
export const PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT: PreCycleRoutingAssessment =
  Object.freeze({
    routingBlockingUnknownPresent: false,
    candidateCycleSupportable: true,
    remainingUnknownsAreCycleOwned: true,
    multiplePlausibleCycles: false,
    activeCycleAlreadyCoversWork: false,
  });

/**
 * Product Assistant Nora turn contract:
 * - user-visible narrative (required)
 * - pre-cycle routing assessment (required, non-authoritative)
 * - optional Lifecycle Recommendation candidate (nullable)
 * Same Agents Runner — one model call — no prose parsing.
 */
export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
  type: "json_schema" as const,
  name: "nora_product_turn_with_optional_lr",
  strict: true,
  schema: {
    type: "object" as const,
    additionalProperties: false as const,
    required: [
      "narrative",
      "preCycleRoutingAssessment",
      "lifecycleRecommendation",
    ],
    properties: {
      narrative: { type: "string" as const },
      preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_SCHEMA,
      lifecycleRecommendation: {
        anyOf: [
          { type: "null" as const },
          NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE.schema,
        ],
      },
    },
  },
};

export type NoraProductTurnWithOptionalLr = {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
};

export function isPreCycleRoutingAssessment(
  value: unknown,
): value is PreCycleRoutingAssessment {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  return (
    typeof o.routingBlockingUnknownPresent === "boolean" &&
    typeof o.candidateCycleSupportable === "boolean" &&
    typeof o.remainingUnknownsAreCycleOwned === "boolean" &&
    typeof o.multiplePlausibleCycles === "boolean" &&
    typeof o.activeCycleAlreadyCoversWork === "boolean"
  );
}

/**
 * ROUTING RELEVANCE + CYCLE OWNERSHIP → disposition (deterministic).
 */
export function derivePreCycleRoutingDisposition(
  assessment: PreCycleRoutingAssessment,
): PreCycleRoutingDisposition {
  if (assessment.activeCycleAlreadyCoversWork) {
    return "DEFER_TO_ACTIVE_CYCLE";
  }
  if (assessment.multiplePlausibleCycles) {
    return "HOLD_FOR_ROUTING_AMBIGUITY";
  }
  if (assessment.routingBlockingUnknownPresent) {
    return "CONTINUE_PRE_CYCLE";
  }
  if (assessment.candidateCycleSupportable) {
    // Remaining unknowns may be cycle-owned (typical) or absent — either way,
    // no routing-blocking unknown remains → cede to Lifecycle Recommendation.
    return "EMIT_LIFECYCLE_RECOMMENDATION";
  }
  return "CONTINUE_PRE_CYCLE";
}

export type PreCycleRoutingBoundaryCoherenceResult = {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  disposition: PreCycleRoutingDisposition;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
  /** True when a candidate LR was stripped by boundary coherence. */
  lifecycleRecommendationSuppressed: boolean;
  suppressReason: string | null;
};

/**
 * Deterministic coherence between assessment and lifecycleRecommendation.
 * - CONTINUE / HOLD → strip any LR (no premature recommendation).
 * - DEFER_TO_ACTIVE_CYCLE → strip NEXT_CYCLE only (FINALIZE may remain).
 * - EMIT → keep LR as emitted (never invent one server-side).
 * Does not parse narrative. Does not create Cycle/HD/START.
 */
export function applyPreCycleRoutingBoundaryCoherence(input: {
  narrative: string;
  preCycleRoutingAssessment: PreCycleRoutingAssessment;
  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
}): PreCycleRoutingBoundaryCoherenceResult {
  const disposition = derivePreCycleRoutingDisposition(
    input.preCycleRoutingAssessment,
  );
  const candidate = input.lifecycleRecommendation;

  if (disposition === "CONTINUE_PRE_CYCLE") {
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      lifecycleRecommendationSuppressed: candidate !== null,
      suppressReason:
        candidate !== null
          ? "routing_blocking_unknown_present"
          : null,
    };
  }
  if (disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      lifecycleRecommendationSuppressed: candidate !== null,
      suppressReason:
        candidate !== null ? "multiple_plausible_cycles" : null,
    };
  }
  if (disposition === "DEFER_TO_ACTIVE_CYCLE") {
    if (candidate?.intent === "NEXT_CYCLE") {
      return {
        narrative: input.narrative,
        preCycleRoutingAssessment: input.preCycleRoutingAssessment,
        disposition,
        lifecycleRecommendation: null,
        lifecycleRecommendationSuppressed: true,
        suppressReason: "active_cycle_covers_work",
      };
    }
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: candidate,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
    };
  }
  // EMIT_LIFECYCLE_RECOMMENDATION — keep as-is; never invent LR.
  return {
    narrative: input.narrative,
    preCycleRoutingAssessment: input.preCycleRoutingAssessment,
    disposition,
    lifecycleRecommendation: candidate,
    lifecycleRecommendationSuppressed: false,
    suppressReason: null,
  };
}

/**
 * Normalize raw structured output into a coherent Product turn.
 * Missing assessment → fail-closed CONTINUE defaults (plain-text Fake path).
 */
export function normalizeNoraProductTurnStructuredOutput(
  value: unknown,
): PreCycleRoutingBoundaryCoherenceResult | null {
  if (!value || typeof value !== "object") return null;
  const o = value as Record<string, unknown>;
  if (typeof o.narrative !== "string") return null;

  const assessment = isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)
    ? o.preCycleRoutingAssessment
    : PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT;

  let lr: NoraLifecycleRecommendationStructuredOutput | null = null;
  if (o.lifecycleRecommendation != null) {
    if (
      !isNoraLifecycleRecommendationStructuredOutput(o.lifecycleRecommendation)
    ) {
      return null;
    }
    lr = o.lifecycleRecommendation;
  }

  return applyPreCycleRoutingBoundaryCoherence({
    narrative: o.narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
  });
}

export function isNoraProductTurnWithOptionalLr(
  value: unknown,
): value is NoraProductTurnWithOptionalLr {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (typeof o.narrative !== "string") return false;
  if (!isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)) return false;
  if (o.lifecycleRecommendation === null) return true;
  return isNoraLifecycleRecommendationStructuredOutput(
    o.lifecycleRecommendation,
  );
}

export function isNoraProductTurnOutputTypeName(name: unknown): boolean {
  return name === NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.name;
}

/** Plain-text / incomplete Fake → fail-closed Product turn JSON. */
export function buildFailClosedProductTurnJson(narrative: string): string {
  return JSON.stringify({
    narrative,
    preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
    lifecycleRecommendation: null,
  });
}
```

### 15.2 materializeFromProductTurn.ts
```typescript
/**
 * Server-owned Product materialization after Nora structured Product turn.
 * Does not call the model. Does not invent HD / Cycle mutations.
 * Material readers fail closed: UNKNOWN ≠ KNOWN EMPTY.
 */
import type { ActorReference } from "@/lib/oa/doctrine";
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
} from "@/lib/oa/cycle/domain/types";
import type { UpdateEpistemicState } from "@/lib/oa/cycle/application/updateEpistemicState";
import { deriveLifecycleBlockersFromEpistemicItems } from "@/lib/oa/cycle/application/deriveLifecycleBlockers";
import {
  produceLifecycleRecommendation,
  type ProduceLifecycleRecommendationResult,
} from "@/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation";
import { resolveCanonicalLifecycleRecommendationBasis } from "@/lib/oa/cycle/application/lifecycleRecommendation/resolveCanonicalBasis";
import { isNoraLifecycleRecommendationStructuredOutput } from "@/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType";
import {
  normalizeNoraProductTurnStructuredOutput,
  type PreCycleRoutingAssessment,
  type PreCycleRoutingDisposition,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";
import {
  firstFailedRequiredMaterialDimension,
  materialBasisUnavailableCode,
  type LifecycleRecommendationMaterialDimension,
} from "./materialReaderContract";

export type LifecycleRecommendationMaterialFacts = {
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion: number | null | undefined;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory: ProjectTrajectory | null;
  decisions: readonly HumanDecision[];
  evidence: readonly Evidence[];
  epistemicItems: readonly EpistemicItem[];
  /**
   * Dimensions whose readers failed (UNKNOWN). Must not be treated as empty.
   * Intent-scoped: only required dimensions block materialization.
   */
  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
};

export type MaterializeFromProductTurnResult = {
  narrative: string | null;
  recommendationAttempted: boolean;
  materialization: ProduceLifecycleRecommendationResult | null;
  /** Non-authoritative boundary disposition when Product turn was used. */
  routingDisposition?: PreCycleRoutingDisposition | null;
  preCycleRoutingAssessment?: PreCycleRoutingAssessment | null;
  lifecycleRecommendationSuppressed?: boolean;
};

export function extractLifecycleCandidateFromStructuredOutput(
  structuredOutput: unknown,
): {
  narrative: string | null;
  candidate: NoraLifecycleRecommendationStructuredOutput | null;
  kind: "product_turn" | "lr_only" | "none";
  preCycleRoutingAssessment?: PreCycleRoutingAssessment | null;
  routingDisposition?: PreCycleRoutingDisposition | null;
  lifecycleRecommendationSuppressed?: boolean;
} {
  const coherent = normalizeNoraProductTurnStructuredOutput(structuredOutput);
  if (coherent) {
    return {
      narrative: coherent.narrative,
      candidate: coherent.lifecycleRecommendation,
      kind: "product_turn",
      preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
      routingDisposition: coherent.disposition,
      lifecycleRecommendationSuppressed:
        coherent.lifecycleRecommendationSuppressed,
    };
  }
  if (isNoraLifecycleRecommendationStructuredOutput(structuredOutput)) {
    return {
      narrative: structuredOutput.statement,
      candidate: structuredOutput,
      kind: "lr_only",
    };
  }
  return { narrative: null, candidate: null, kind: "none" };
}

export async function materializeLifecycleRecommendationFromStructuredOutput(input: {
  projectId: string;
  structuredOutput: unknown;
  updateEpistemicState: UpdateEpistemicState;
  facts: LifecycleRecommendationMaterialFacts;
  producedAt: string;
  createdBy: ActorReference;
  correlationId?: string;
}): Promise<MaterializeFromProductTurnResult> {
  const extracted = extractLifecycleCandidateFromStructuredOutput(
    input.structuredOutput,
  );
  const boundaryMeta =
    extracted.kind === "product_turn"
      ? {
          routingDisposition: extracted.routingDisposition ?? null,
          preCycleRoutingAssessment:
            extracted.preCycleRoutingAssessment ?? null,
          lifecycleRecommendationSuppressed:
            extracted.lifecycleRecommendationSuppressed === true,
        }
      : {
          routingDisposition: null,
          preCycleRoutingAssessment: null,
          lifecycleRecommendationSuppressed: false,
        };

  if (extracted.kind === "product_turn" && extracted.candidate === null) {
    return {
      narrative: extracted.narrative,
      recommendationAttempted: false,
      materialization: null,
      ...boundaryMeta,
    };
  }
  if (!extracted.candidate) {
    return {
      narrative: extracted.narrative,
      recommendationAttempted: false,
      materialization: null,
      ...boundaryMeta,
    };
  }

  const candidate = extracted.candidate;
  const failed = input.facts.failedMaterialDimensions ?? new Set();
  const failedRequired = firstFailedRequiredMaterialDimension(
    candidate.intent,
    failed,
  );
  if (failedRequired) {
    return {
      narrative: extracted.narrative,
      recommendationAttempted: true,
      materialization: {
        ok: false,
        code: materialBasisUnavailableCode(failedRequired),
        reason: `material_reader_unavailable:${failedRequired}`,
      },
      ...boundaryMeta,
    };
  }

  const blockers = deriveLifecycleBlockersFromEpistemicItems(
    input.facts.epistemicItems,
  );
  const subjectId = candidate.subjectCycleInstanceId ?? null;

  const basisRefs = resolveCanonicalLifecycleRecommendationBasis({
    intent: candidate.intent,
    projectId: input.projectId,
    subjectCycleInstanceId: subjectId,
    targetCycleInstanceId: candidate.targetCycleInstanceId ?? null,
    targetCycleTypeId: candidate.targetCycleTypeId ?? null,
    cycles: input.facts.cycles,
    lpsActiveCycleInstanceId: input.facts.lpsActiveCycleInstanceId,
    lpsVersion: input.facts.lpsVersion,
    doctrinePackageId: input.facts.doctrinePackageId,
    doctrinePackageVersion: input.facts.doctrinePackageVersion,
    doctrinePackageDigest: input.facts.doctrinePackageDigest,
    trajectory: input.facts.trajectory,
    decisions: input.facts.decisions,
    evidence: input.facts.evidence,
    blockingReservationStatements: blockers.statements,
  });

  const materialization = await produceLifecycleRecommendation({
    updateEpistemicState: input.updateEpistemicState,
    projectId: input.projectId,
    structured: candidate,
    cycles: input.facts.cycles,
    lpsActiveCycleInstanceId: input.facts.lpsActiveCycleInstanceId,
    basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    existingItems: input.facts.epistemicItems,
    hasTrajectoryContext: Boolean(input.facts.trajectory),
    correlationId: input.correlationId,
  });

  return {
    narrative: extracted.narrative,
    recommendationAttempted: true,
    materialization,
    ...boundaryMeta,
  };
}
```

### 15.3 buildProjectSystemPrompt.ts
```typescript
import type { ProjectAssistantContextDto } from "./types";
import type { AdvisoryMethodContext } from "./f2/methodOrientation";
import {
  buildStudioCognitivePromptSections,
  type StudioCognitiveContext,
} from "./f2/studioCognitiveContext";

/**
 * Compact F1 system prompt — project context + advisory contract + hard read-only limits.
 * No F2 CycleInstance authority, no Cursor, no write, no HumanDecision/START.
 * Structured lifecycle Recommendation emission is allowed (authority none) via Product turn output.
 * CORR-PROOF-02 B1 — positive advisory initiative for ordinary incomplete requests.
 * CORR-PROOF-03 E1 — Studio method identity + optional non-mutating method context.
 * QUAL-TO-GOVERNED-CYCLE — semantic boundary before silent pre-cycle deepening.
 */
export function buildProjectSystemPrompt(
  project: ProjectAssistantContextDto,
  options?: {
    /**
     * CORR-MW2-REAL-04 — optional full Truth C / LPS context for F1 cognitive turns.
     * When set, replaces UI contextSummary in the Contexte line only.
     * Does not mutate ProjectAssistantContextDto / client boundary.
     */
    truthCContext?: string | null;
    /**
     * CORR-PROOF-03 E1 — bounded non-mutating method orientation + optional CKC lens.
     * Guidance only; never Truth C / HumanDecision / ExecutionContract.
     */
    methodContext?: AdvisoryMethodContext | null;
    /**
     * CORR-PROOF-04 — Hybrid Context Envelope (composer-first).
     * When present, supersedes methodContext for method + state sections.
     */
    studioCognitiveContext?: StudioCognitiveContext | null;
  },
): string {
  const constraints =
    project.constraints.length > 0
      ? project.constraints.map((c) => `- ${c}`).join("\n")
      : "- (aucune contrainte listée)";

  const shortRef = project.shortReference
    ? `Référence courte : ${project.shortReference}`
    : "Référence courte : (absente)";

  const contextLine =
    options?.truthCContext != null && options.truthCContext !== ""
      ? options.truthCContext
      : project.contextSummary;

  const studio = options?.studioCognitiveContext ?? null;
  const methodSection = studio
    ? buildStudioCognitivePromptSections(studio)
    : buildMethodGroundingSection(options?.methodContext ?? null);

  return [
    "Tu es Nora, partenaire de réflexion projet/produit du Project Workspace.",
    "Périmètre : ANALYSE / CONVERSATION / CONSEIL / LECTURE SEULE.",
    "Tu n'as aucune autorité de décision Pilote, d'exécution Cursor, d'écriture Git/GitHub,",
    "ni de création / START / HumanDecision / CycleInstance actif.",
    "Tu PEUX émettre une Recommendation lifecycle structurée SANS autorité (champ lifecycleRecommendation)",
    "lorsque la frontière sémantique ci-dessous est atteinte — le serveur valide et matérialise ;",
    "émettre ≠ qualifier formellement un CycleInstance ≠ décider.",
    "Une intention utilisateur n'est jamais une autorisation d'exécution.",
    "",
    "=== IDENTITÉ SFIA STUDIO (priorité source) ===",
    "À l'intérieur de SFIA Studio, « SFIA » désigne PAR DÉFAUT la méthodologie / doctrine produit SFIA Studio",
    "applicable au projet courant (DoctrinePackage / CKC produit), PAS le Skills Framework for the Information Age.",
    "Si le Pilote demande explicitement le Skills Framework for the Information Age, le référentiel public/externe",
    "de compétences SFIA, ou le framework SFIA externe : tu peux en parler, en le distinguant clairement de la méthodologie Studio.",
    "Ne traite JAMAIS le Skills Framework public comme la méthodologie Studio par défaut.",
    "Pour toute claim de méthode Studio : DoctrinePackage / CKC produit résolu > état Project / Truth C de confiance",
    "> contexte conversationnel > connaissance préentraînée générique.",
    "La connaissance préentraînée du SFIA public ne doit JAMAIS surcharger une doctrine Studio résolue.",
    "Si la source méthodologique exacte n'est pas résolue : ne fabrique pas de claims détaillées de méthode Studio ;",
    "reste en conseil général sûr ; annonce les limites de source quand c'est matériel ; conserve l'identité Studio ;",
    "ne bascule PAS silencieusement vers le Skills Framework public.",
    "",
    "=== CONTRAT ADVISORY CONTEXT-FIRST (par défaut) ===",
    "Pour une demande intelligible même incomplète : avance utilement la pensée du Pilote.",
    "AVANT toute structure générique (MVP, rôles, objets, phases, roadmap) : utilise le Studio Cognitive Context",
    "pour déterminer ce qui est déjà établi, décidé, evidencé, encore ouvert, et ce qui compte MAINTENANT.",
    "Priorise le prochain mouvement méthodologique matériel dérivé de l'état Studio — pas un template PM générique.",
    "MVP / rôles / objets / options / architecture : seulement s'ils sont pertinents pour l'état courant.",
    "Indique ce qu'il ne faut PAS faire encore lorsque l'état le justifie (ex. delivery prématurée).",
    "Utilise des hypothèses de travail EXPLICITES quand un détail manquant ne bloque pas un progrès utile.",
    "Distingue clairement : fait / hypothèse / option / recommandation / HumanDecision / Evidence.",
    "Hypothèse ≠ Fait. Option ≠ Recommandation. Recommandation ≠ HumanDecision. Claim utilisateur ≠ fait externe vérifié.",
    "Quand c'est possible : raisonnement utile D'ABORD, puis UNE question de raffinement ciblée si nécessaire.",
    "Clarification autorisée uniquement si le manque change matériellement l'analyse, le scope, le risque,",
    "la recommandation, la trajectoire, l'autorité, la preuve ou un effet gouverné.",
    "Pas de questionnaire générique. Pas d'intake séquentiel obligatoire. Pas d'intake CKC séquentiel obligatoire.",
    "Pas de dimensions CKC comme formulaire.",
    "Langage métier pour le Pilote — ne pas exposer F1/F2/MW5/CKC IDs, digests, routage interne ou schémas structurés.",
    "Vérité Project courante + doctrine Studio outrankent les prémisses conversationnelles obsolètes (sans réécrire l'historique).",
    "Une compréhension conversationnelle ne devient JAMAIS Truth C / LPS / HumanDecision par inférence silencieuse.",
    "",
    "=== FRONTIÈRE QUALIFICATION PRÉ-CYCLE → RECOMMANDATION DE CYCLE ===",
    "Qualification pré-cycle ≠ Cadrage ≠ CycleInstance ≠ « Cycle 0 » ≠ workflow durable.",
    "Elle sert UNIQUEMENT à déterminer honnêtement le prochain travail gouverné.",
    "Pas de règle « après N messages ». Pas de « toujours Cadrage en premier ».",
    "Pas de matrice métier par domaine. Pas de limite arbitraire de questions.",
    "",
    "TEST DE PERTINENCE DE ROUTAGE (avant toute clarification pré-cycle) :",
    "Une réponse différente à CETTE question peut-elle matériellement changer",
    "le cycle candidat, le profil SFIA, un gate / une frontière d'autorité, ou provoquer un STOP ?",
    "Si OUI → clarification pré-cycle autorisée (au plus une, ciblée).",
    "Si NON → l'inconnue appartient au cycle candidat ; ne la poursuis PAS en pré-cycle.",
    "",
    "TEST DE PROPRIÉTÉ DE CYCLE :",
    "Cette inconnue relève-t-elle normalement du travail du cycle que tu es déjà capable de recommander ?",
    "Si OUI → STOP qualification pré-cycle ; émets narrative + lifecycleRecommendation.",
    "« Il reste beaucoup à préciser » NE signifie PAS « continuer la qualification » —",
    "cela peut être exactement la raison de recommander le cycle (ex. Cadrage) qui possède ces inconnues.",
    "",
    "Champ structuré obligatoire preCycleRoutingAssessment (même tour ; non durable ; sans autorité) :",
    "- routingBlockingUnknownPresent = true ssi une inconnue bloque encore le routage (test de pertinence).",
    "- candidateCycleSupportable = true ssi un prochain type de cycle est honnêtement supportable.",
    "- remainingUnknownsAreCycleOwned = true ssi les inconnues restantes appartiennent à ce cycle.",
    "- multiplePlausibleCycles = true ssi plusieurs cycles restent vraiment plausibles.",
    "- activeCycleAlreadyCoversWork = true ssi un cycle actif couvre déjà le travail.",
    "Cohérence obligatoire avec lifecycleRecommendation :",
    "- si routingBlockingUnknownPresent OU multiplePlausibleCycles → lifecycleRecommendation = null ; clarification ciblée seulement.",
    "- si activeCycleAlreadyCoversWork → ne pas émettre NEXT_CYCLE pour « sortir » de la qualification.",
    "- si candidateCycleSupportable ET NOT routingBlockingUnknownPresent ET NOT multiplePlausibleCycles",
    "  ET NOT activeCycleAlreadyCoversWork → cesse l'approfondissement ; lifecycleRecommendation NEXT_CYCLE (ou FINALIZE si pertinent).",
    "Ne résous PAS en pré-cycle le périmètre détaillé, critères de succès, règles de comportement,",
    "états métier ou signaux d'urgence appartenant au cycle candidat.",
    "lifecycleRecommendation (si émise) : intent NEXT_CYCLE ou FINALIZE_CURRENT_CYCLE ;",
    "authority conceptuelle aucune ; isHumanDecision false ; statement et rationale lisibles Pilote ;",
    "targetCycleTypeId seulement s'il est supportable (jamais inventé ; jamais forcé cyc:framing).",
    "Ne dis PAS « je ne peux pas l'enregistrer dans Studio » si le chemin structured Recommendation est disponible.",
    "Si tu émets lifecycleRecommendation : le serveur peut la matérialiser ; ne prétends jamais qu'elle est",
    "enregistrée si tu n'as pas de confirmation produit ; ne crée pas de CycleInstance / HD / START.",
    "",
    "=== LIMITES D'AUTORITÉ (strict) ===",
    "Distingue vérité courante / historique / superseded / réserve ouverte.",
    "Tu peux utiliser uniquement les outils de lecture (Git/GitHub read) exposés.",
    "Session conversationnelle (si présente) = continuité de chat uniquement — jamais Truth C / LPS / HumanDecision.",
    "Si Memory B est indisponible : n'invente pas de transcript, de HumanDecision, d'autorisation ni d'Evidence.",
    "Project/LPS/Cycle restent Product SQLite Truth C (autorité métier). AUCUNE EXÉCUTION.",
    "Ne propose pas d'ouvrir OPS1, Cursor, ni un gate d'exécution.",
    "",
    "=== SOURCE INTEGRITY (fail-closed) ===",
    "- Un FAIT repository nécessite une source réellement obtenue via un outil réussi.",
    "- Ne jamais prétendre avoir lu un document si git_local_read_file n'a pas réussi pour ce chemin.",
    "- search hit (git_local_search_files / git_local_search_content) ≠ file read.",
    "- failed / denied / PATH_NOT_ALLOWED / TRANSPORT_UNAVAILABLE ≠ source.",
    "- truncated / hasMore ≠ document complet ; annonce explicitement la limite.",
    "- outil unavailable ≠ information vérifiée.",
    "- Si la preuve est insuffisante : annonce la limite ; ne reconstruis PAS un contenu depuis la mémoire du modèle.",
    "- FAILED/DENIED/UNRESOLVED SOURCE ne doit JAMAIS devenir un fact source-backed.",
    "",
    "=== GIT / REPOSITORY PRIORITY ===",
    "- Pour HEAD / status / branche / vérité Git locale : utilise git_local_get_head / git_local_get_status (ne demande pas à l'humain d'exécuter git si l'outil est disponible).",
    "- Pour comparer main distant : utilise github_get_branch lorsque GitHub READ est disponible ; sinon déclare la limite réelle.",
    "- Pour un identifiant technique inconnu du chemin : utilise git_local_search_content (pas seulement search_files).",
    "- Pour une section profonde d'un long document : utilise git_local_read_file avec startLine/endLine.",
    "",
    ...methodSection,
    "Contexte projet (autorité Project/LPS runtime Studio) :",
    `Project ID : ${project.projectId}`,
    `Nom : ${project.name}`,
    shortRef,
    `Objectif : ${project.objective}`,
    `Contexte : ${contextLine}`,
    `Criticité : ${project.criticality}`,
    "Contraintes :",
    constraints,
    `LPS : ${project.lpsId} (v${project.lpsVersion}, ${project.lpsCreatedAt})`,
    `Doctrine : ${project.doctrineId} ${project.doctrineVersion} · ${project.doctrineStatus} · ${project.doctrineDigest}`,
    `Runtime : ${project.runtimeMode} · persistence ${project.persistence} · readiness ${project.readiness}`,
  ].join("\n");
}

function buildMethodGroundingSection(
  methodContext: AdvisoryMethodContext | null,
): string[] {
  const lines = [
    "=== ANCRAGE MÉTHODOLOGIQUE (guidance seulement — non mutante) ===",
    "Ce bloc oriente le conseil. Il n'est PAS Truth C, PAS CycleInstance actif, PAS HumanDecision,",
    "PAS ExecutionContract, PAS autorité d'exécution. Orientation candidat = hypothèse / lentille.",
    "Utilise la méthodologie pour décider ce qui compte maintenant, quoi enchaîner, quels risques/décisions approchent.",
    "Ne force pas un waterfall fixe (« toujours commencer au Cycle 1 »). Ne prétends pas une trajectoire dynamique",
    "si aucune trajectoire n'est fournie ici. Pas d'intake séquentiel obligatoire.",
  ];

  if (!methodContext) {
    lines.push(
      "Orientation : non fournie pour ce tour — conserve l'identité Studio ; conseil général sûr.",
    );
    lines.push("");
    return lines;
  }

  if (methodContext.orientation.state === "RESOLVED_FROM_INTENT_CANDIDATE") {
    lines.push(
      `État orientation : RESOLVED_FROM_INTENT_CANDIDATE` +
        (methodContext.cycleLabel
          ? ` · cycle candidat « ${methodContext.cycleLabel} »`
          : "") +
        " (hypothèse non durable).",
    );
  } else {
    lines.push(
      "État orientation : UNRESOLVED — n'invente pas de cycle ; pose une question ciblée seulement si matériel.",
    );
  }

  if (methodContext.sourceLimit === "doctrine_unavailable") {
    lines.push(
      "Limite source : DoctrinePackage produit non résolu — aucune claim Studio détaillée source-backed.",
    );
  } else if (methodContext.sourceLimit === "ckc_unavailable") {
    lines.push(
      "Limite source : lentille CKC détaillée indisponible pour l'orientation — dégradation gouvernée ;",
      "pas de bascule vers le Skills Framework public ; pas de fabrication de CKC.",
    );
  }

  if (methodContext.ckcLensSection?.trim()) {
    lines.push("Lentille CKC (interne) :");
    lines.push(methodContext.ckcLensSection.trim());
  }

  lines.push("");
  return lines;
}
```

### 15.4 providerAgentsModel.ts (coerce section — full file)
```typescript
/**
 * Thin ConversationProvider → Agents SDK Model adapter.
 * Used whenever a ConversationProvider exposes completeRound() (Fake/fixture
 * deterministic path; any completeRound-capable test/provider boundary).
 * ONE model invocation → ONE provider.completeRound(). Runner owns the loop.
 * Does NOT execute tools, persist Session, or resolve authority.
 * RESERVE-OPT-C-02: this is a boundary adapter, not a provider-architecture
 * decision — live OpenAI Agents model routing remains separate when no
 * completeRound provider is supplied.
 */
import { Usage, type Model, type ModelRequest, type ModelResponse } from "@openai/agents";
import type {
  ConversationProvider,
  ProviderInputItem,
  ProviderRoundResult,
} from "@/lib/platform/ai";
import {
  CONTROL_TOWER_TOOL_DEFINITIONS,
  type ToolDefinition,
} from "@/lib/platform/tools";
import {
  buildFailClosedProductTurnJson,
  isPreCycleRoutingAssessment,
  normalizeNoraProductTurnStructuredOutput,
} from "./noraProductTurnOutputType";

function extractTextContent(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((part) => {
      if (typeof part === "string") return part;
      if (part && typeof part === "object" && "text" in part) {
        return String((part as { text?: unknown }).text ?? "");
      }
      return "";
    })
    .join("\n");
}

/**
 * Map Runner model input → provider round items.
 * Fail closed on unsupported shapes (no silent invention).
 */
export function agentInputToProviderItems(
  input: ModelRequest["input"],
): ProviderInputItem[] {
  if (typeof input === "string") {
    return [{ type: "message", role: "user", content: input }];
  }
  if (!Array.isArray(input)) {
    throw new Error("NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT");
  }
  const items: ProviderInputItem[] = [];
  for (const raw of input) {
    if (!raw || typeof raw !== "object") {
      throw new Error("NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT_ITEM");
    }
    const item = raw as Record<string, unknown>;
    const type = String(item.type ?? "");
    if (type === "message") {
      const role = String(item.role ?? "");
      if (role !== "user" && role !== "assistant" && role !== "system") {
        throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_ROLE:${role}`);
      }
      items.push({
        type: "message",
        role,
        content: extractTextContent(item.content),
      });
      continue;
    }
    if (type === "function_call") {
      items.push({
        type: "function_call",
        callId: String(item.callId ?? item.id ?? ""),
        name: String(item.name ?? ""),
        argumentsJson:
          typeof item.arguments === "string"
            ? item.arguments
            : JSON.stringify(item.arguments ?? {}),
      });
      continue;
    }
    if (type === "function_call_result" || type === "function_call_output") {
      const output = item.output;
      const outputText =
        typeof output === "string"
          ? output
          : output == null
            ? ""
            : JSON.stringify(output);
      items.push({
        type: "function_call_output",
        callId: String(item.callId ?? item.id ?? ""),
        output: outputText,
      });
      continue;
    }
    // Ignore purely structural / non-conversation items that Runner may prepend
    // (e.g. reasoning) — fail closed if they look like actionable model content.
    if (type === "reasoning") {
      continue;
    }
    throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_INPUT_TYPE:${type}`);
  }
  return items;
}

/**
 * Resolve SFIA ToolDefinitions from Runner-serialized tools by name only.
 * No second schema source — Studio CONTROL_TOWER_TOOL_DEFINITIONS remain canonical.
 */
export function toolDefinitionsFromModelRequest(
  request: ModelRequest,
): ToolDefinition[] {
  const byName = new Map<string, ToolDefinition>(
    CONTROL_TOWER_TOOL_DEFINITIONS.map((d) => [d.name, d]),
  );
  const out: ToolDefinition[] = [];
  for (const tool of request.tools ?? []) {
    if (!tool || typeof tool !== "object") continue;
    const t = tool as { type?: string; name?: string };
    if (t.type && t.type !== "function") {
      // MW6 CR-09 — only the qualified hosted web_search boundary may be skipped
      // by the deterministic Fake adapter. Unknown hosted tools fail closed.
      if (t.type === "hosted_tool") {
        const hostedName = String(t.name ?? "");
        if (
          hostedName === "web_search" ||
          hostedName === "web_search_preview"
        ) {
          continue;
        }
        throw new Error(
          `NORA_PROVIDER_MODEL_UNSUPPORTED_HOSTED_TOOL:${hostedName || "unnamed"}`,
        );
      }
      throw new Error(`NORA_PROVIDER_MODEL_UNSUPPORTED_TOOL_TYPE:${t.type}`);
    }
    const name = String(t.name ?? "");
    if (!name) continue;
    const def = byName.get(name);
    if (!def) {
      throw new Error(`NORA_PROVIDER_MODEL_UNKNOWN_TOOL:${name}`);
    }
    out.push(def);
  }
  return out;
}

function roundResultToModelResponse(
  round: ProviderRoundResult,
): ModelResponse {
  const usage = new Usage({
    requests: 1,
    inputTokens: round.usage.inputTokens ?? 0,
    outputTokens: round.usage.outputTokens ?? 0,
    totalTokens: round.usage.totalTokens ?? 0,
  });
  if (round.kind === "message") {
    return {
      usage,
      responseId: round.usage.providerResponseId ?? undefined,
      output: [
        {
          type: "message",
          role: "assistant",
          status: "completed",
          content: [{ type: "output_text", text: round.text }],
        },
      ],
    };
  }
  return {
    usage,
    responseId: round.usage.providerResponseId ?? undefined,
    output: round.toolCalls.map((call) => ({
      type: "function_call" as const,
      name: call.name,
      callId: call.callId,
      id: call.callId,
      status: "completed" as const,
      arguments: call.argumentsJson,
    })),
  };
}

/** Coerce plain assistant text into product-turn JSON when outputType requires it. */
export function coercePlainTextToProductTurnJson(text: string): string {
  try {
    const parsed = JSON.parse(text) as unknown;
    if (
      parsed &&
      typeof parsed === "object" &&
      typeof (parsed as { narrative?: unknown }).narrative === "string"
    ) {
      const o = parsed as Record<string, unknown>;
      if (isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)) {
        return text;
      }
      const coherent = normalizeNoraProductTurnStructuredOutput({
        narrative: o.narrative,
        lifecycleRecommendation: o.lifecycleRecommendation ?? null,
        preCycleRoutingAssessment: o.preCycleRoutingAssessment,
      });
      if (coherent) {
        return JSON.stringify({
          narrative: coherent.narrative,
          preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
          lifecycleRecommendation: coherent.lifecycleRecommendation,
        });
      }
      return buildFailClosedProductTurnJson(String(o.narrative));
    }
  } catch {
    // plain text
  }
  return buildFailClosedProductTurnJson(text);
}

function productTurnOutputTypeName(request: ModelRequest): string {
  return request.outputType &&
    typeof request.outputType === "object" &&
    "name" in request.outputType
    ? String((request.outputType as { name?: unknown }).name ?? "")
    : "";
}

function coerceModelResponseForProductTurn(
  response: ModelResponse,
  request: ModelRequest,
): ModelResponse {
  if (productTurnOutputTypeName(request) !== "nora_product_turn_with_optional_lr") {
    return response;
  }
  const output = Array.isArray(response.output) ? [...response.output] : [];
  let changed = false;
  for (let i = 0; i < output.length; i += 1) {
    const item = output[i];
    if (!item || typeof item !== "object") continue;
    const msg = item as {
      type?: string;
      role?: string;
      status?: string;
      content?: unknown;
      providerData?: Record<string, unknown>;
      id?: string;
    };
    if (msg.type !== "message" || msg.role !== "assistant") continue;
    if (!Array.isArray(msg.content)) continue;
    const nextContent = msg.content.map((part) => {
      if (
        part &&
        typeof part === "object" &&
        (part as { type?: string }).type === "output_text" &&
        typeof (part as { text?: unknown }).text === "string"
      ) {
        const text = (part as { text: string }).text;
        const coerced = coercePlainTextToProductTurnJson(text);
        if (coerced !== text) changed = true;
        return {
          ...(part as Record<string, unknown>),
          type: "output_text" as const,
          text: coerced,
        };
      }
      return part;
    });
    output[i] = {
      ...msg,
      type: "message" as const,
      role: "assistant" as const,
      status: (msg.status as "completed" | "in_progress" | "incomplete") ?? "completed",
      content: nextContent,
    } as (typeof output)[number];
  }
  return changed ? { ...response, output } : response;
}

/**
 * Wrap an injected Agents Model (e.g. ScriptedModel) so plain-text Fake/eval
 * responses satisfy product-turn outputType — same coerce as Fake completeRound.
 * Live OpenAI string models are unaffected (caller passes string, not Model).
 */
export function wrapAgentsModelForProductTurnPlainTextCoercion(
  model: Model,
): Model {
  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      const response = await model.getResponse(request);
      return coerceModelResponseForProductTurn(response, request);
    },
    async *getStreamedResponse(
      ...args: Parameters<Model["getStreamedResponse"]>
    ) {
      const stream = model.getStreamedResponse(...args);
      for await (const event of stream) {
        yield event;
      }
    },
  };
}

/**
 * Agents SDK Model backed by ConversationProvider.completeRound (Fake path).
 */
export function createProviderAgentsModel(
  provider: ConversationProvider,
): Model {
  if (typeof provider.completeRound !== "function") {
    throw new Error("NORA_PROVIDER_MODEL_REQUIRES_COMPLETE_ROUND");
  }
  const completeRound = provider.completeRound.bind(provider);

  return {
    async getResponse(request: ModelRequest): Promise<ModelResponse> {
      if (request.signal?.aborted) {
        throw new Error("AbortError");
      }
      const items = agentInputToProviderItems(request.input);
      // Ensure Studio system instructions from the Runner filter are visible
      // to Fake specialization (CKC markers live in system messages).
      if (
        request.systemInstructions &&
        !items.some(
          (i) =>
            i.type === "message" &&
            i.role === "system" &&
            i.content.includes(request.systemInstructions!),
        )
      ) {
        items.unshift({
          type: "message",
          role: "system",
          content: request.systemInstructions,
        });
      }
      const tools = toolDefinitionsFromModelRequest(request);
      const round = await completeRound({ items, tools });
      if (round.kind === "message") {
        if (
          productTurnOutputTypeName(request) ===
          "nora_product_turn_with_optional_lr"
        ) {
          const text = coercePlainTextToProductTurnJson(round.text);
          return roundResultToModelResponse({ ...round, text });
        }
      }
      return roundResultToModelResponse(round);
    },
    async *getStreamedResponse(): AsyncIterable<never> {
      throw new Error("NORA_PROVIDER_MODEL_STREAMING_UNSUPPORTED");
    },
  };
}

export function isFakeConversationProvider(
  provider: ConversationProvider,
): boolean {
  return (
    provider.providerId === "fake-test" ||
    provider.providerId.startsWith("fake")
  );
}
```

### 15.5 runNoraAgentsTurn.ts — product-turn normalize hunk (file large; exploitable diff)
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index fd775909..d7853c64 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -32,6 +32,10 @@ import {
   isFakeConversationProvider,
   wrapAgentsModelForProductTurnPlainTextCoercion,
 } from "./providerAgentsModel";
+import {
+  buildFailClosedProductTurnJson,
+  normalizeNoraProductTurnStructuredOutput,
+} from "./noraProductTurnOutputType";
 import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
 import type { MemoryBAvailability } from "./memoryBAvailability";
 import {
@@ -580,20 +584,28 @@ export async function runNoraAgentsTurn(
                 }
               })()
             : result.finalOutput;
-        // Plain-string Fake/Scripted responses under product-turn outputType →
-        // coerce to narrative + null Recommendation (preserve conversational text).
-        if (
-          typeof structuredOutput === "string" &&
+        // Plain-string / partial Fake responses under product-turn outputType →
+        // coerce to fail-closed assessment + null Recommendation (same turn).
+        const isProductTurnOutput =
           input.outputType &&
           typeof input.outputType === "object" &&
           "name" in input.outputType &&
           (input.outputType as { name?: string }).name ===
-            "nora_product_turn_with_optional_lr"
-        ) {
-          structuredOutput = {
-            narrative: structuredOutput,
-            lifecycleRecommendation: null,
-          };
+            "nora_product_turn_with_optional_lr";
+        if (isProductTurnOutput && typeof structuredOutput === "string") {
+          structuredOutput = JSON.parse(
+            buildFailClosedProductTurnJson(structuredOutput),
+          ) as unknown;
+        } else if (isProductTurnOutput && structuredOutput) {
+          const coherent =
+            normalizeNoraProductTurnStructuredOutput(structuredOutput);
+          if (coherent) {
+            structuredOutput = {
+              narrative: coherent.narrative,
+              preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
+              lifecycleRecommendation: coherent.lifecycleRecommendation,
+            };
+          }
         }
         if (
           structuredOutput &&
```

### 15.6 preCycleRoutingBoundary.d0.test.ts (NEW — full)
```typescript
/** @vitest-environment node */
/**
 * PRE-CYCLE ROUTING BOUNDARY — BAR-RB-01…15 (deterministic).
 * ZERO NEW REAL. Same-turn structured output + server coherence only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  selectCurrentLifecycleRecommendations,
} from "@/lib/oa/cycle";
import type { ActorReference } from "@/lib/oa/project";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import * as runNoraAgentsTurnMod from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import {
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
  PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
  applyPreCycleRoutingBoundaryCoherence,
  buildFailClosedProductTurnJson,
  derivePreCycleRoutingDisposition,
  isNoraProductTurnWithOptionalLr,
  normalizeNoraProductTurnStructuredOutput,
  type PreCycleRoutingAssessment,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { coercePlainTextToProductTurnJson } from "@/lib/nora-cognitive-runtime/providerAgentsModel";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rb-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
  };
}

function productTurn(
  assessment: PreCycleRoutingAssessment,
  lr: ReturnType<typeof nextCycleLr> | null,
  narrative: string,
) {
  return {
    narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
  };
}

const baseProject = {
  projectId: "prj:rb",
  name: "Task app",
  shortReference: null as string | null,
  objective: "Application de gestion de tâches",
  contextSummary: "Intention minimale",
  criticality: "standard",
  constraints: [] as string[],
  lpsId: "lps:1",
  lpsVersion: 1,
  lpsCreatedAt: "2026-01-01T00:00:00.000Z",
  doctrineId: "doc:1",
  doctrineVersion: "1",
  doctrineStatus: "active",
  doctrineDigest: "sha256:abc",
  runtimeMode: "product",
  persistence: "sqlite",
  readiness: "ready",
};

describe("BAR-RB — pre-cycle routing boundary (deterministic)", () => {
  it("schema requires preCycleRoutingAssessment on Product turn", () => {
    const required =
      NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema.required;
    expect(required).toContain("preCycleRoutingAssessment");
    expect(required).toContain("lifecycleRecommendation");
    expect(required).toContain("narrative");
  });

  it("BAR-RB-01 — initial intent still ambiguous → CONTINUE, LR null", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: true,
      candidateCycleSupportable: false,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "CONTINUE_PRE_CYCLE",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Peux-tu préciser la situation concrète ?",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr(
        "cyc:framing",
        "should be stripped",
      ),
    });
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.lifecycleRecommendationSuppressed).toBe(true);
    expect(coherent.disposition).toBe("CONTINUE_PRE_CYCLE");
  });

  it("BAR-RB-02 — routing unknown can change cycle → CONTINUE", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: true,
      candidateCycleSupportable: false,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: true,
      activeCycleAlreadyCoversWork: false,
    };
    // multiplePlausible takes precedence → HOLD
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "HOLD_FOR_ROUTING_AMBIGUITY",
    );
    const onlyRoutingBlock: PreCycleRoutingAssessment = {
      ...assessment,
      multiplePlausibleCycles: false,
    };
    expect(derivePreCycleRoutingDisposition(onlyRoutingBlock)).toBe(
      "CONTINUE_PRE_CYCLE",
    );
  });

  it("BAR-RB-03 — candidate clear, details still unknown → EMIT, keep LR", () => {
    const assessment = { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT };
    expect(assessment.remainingUnknownsAreCycleOwned).toBe(true);
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "EMIT_LIFECYCLE_RECOMMENDATION",
    );
    const lr = nextCycleLr(
      "cyc:framing",
      "Envisager un Cadrage pour préciser périmètre et succès.",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative:
        "Besoin compris. Plusieurs détails restent ouverts pour le Cadrage.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: lr,
    });
    expect(coherent.lifecycleRecommendation).toEqual(lr);
    expect(coherent.lifecycleRecommendationSuppressed).toBe(false);
  });

  it("BAR-RB-04 — many unknowns does not mean continue qualification", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: true,
      remainingUnknownsAreCycleOwned: true,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "EMIT_LIFECYCLE_RECOMMENDATION",
    );
    const prompt = buildProjectSystemPrompt(baseProject);
    expect(prompt).toMatch(/Il reste beaucoup à préciser/);
    expect(prompt).toMatch(/Pas de « toujours Cadrage en premier »/);
    expect(prompt).toMatch(/Ne force pas un waterfall fixe/);
  });

  it("BAR-RB-05 — not always Cadrage (delivery-bounded candidate)", () => {
    const assessment = { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT };
    const lr = nextCycleLr(
      "cyc:delivery",
      "Correction Delivery bornée déjà définie.",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Le correctif est suffisamment borné pour Delivery.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: lr,
    });
    expect(coherent.lifecycleRecommendation?.targetCycleTypeId).toBe(
      "cyc:delivery",
    );
    expect(coherent.lifecycleRecommendation?.targetCycleTypeId).not.toBe(
      "cyc:framing",
    );
  });

  it("BAR-RB-06 — cycle ownership pairs (routing vs cycle-owned)", () => {
    const routingRelevant: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: true,
      candidateCycleSupportable: false,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    const cycleOwned: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: true,
      remainingUnknownsAreCycleOwned: true,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(routingRelevant)).toBe(
      "CONTINUE_PRE_CYCLE",
    );
    expect(derivePreCycleRoutingDisposition(cycleOwned)).toBe(
      "EMIT_LIFECYCLE_RECOMMENDATION",
    );
  });

  it("BAR-RB-07 — task-app live regression semantic boundary (Fake same-turn)", async () => {
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T12:00:00.000Z",
      idSource: new FixedIdSource("rb07"),
      auditMode: "noop",
      productDbPath: tempDbPath("rb07.sqlite"),
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "Gestion de tâches perso",
      objective: "application de gestion de tâches",
      context:
        "tâches quotidiennes personnelles/admin, oubli, priorisation, vue simple",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "TASK",
      idempotencyKey: "idem:rb07",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    await runtime.oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${created.projectId}`,
      projectId: created.projectId,
      steps: [
        {
          stepId: "stp:clarify",
          order: 1,
          label: "Clarify",
          state: "pending",
        },
      ],
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });

    const payload = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      nextCycleLr(
        "cyc:framing",
        "Envisager un Cadrage pour cadrer le besoin quotidien.",
      ),
      "Besoin : retrouver et prioriser des tâches dispersées. Hypothèses ouvertes restent pour le Cadrage.",
    );
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(payload))],
    ]);
    const beforeCycles = await runtime.oa.cycleServices.cycles.listByProject(
      created.projectId,
    );
    const beforeHd = await runtime.oa.decisionServices.decisions.listByProject(
      created.projectId,
    );

    const result = await orchestrateProjectAssistantTurn({
      projectId: created.projectId,
      content:
        "petites tâches quotidiennes personnelles/administratives, certaines datées, oubli/priorisation, vue simple",
      sessionDbPath: tempDbPath("rb07-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.lifecycleRecommendationMaterialized).toBe(true);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(result.text).toMatch(/Besoin|Hypothèses|Cadrage/i);
    // Property: pre-cycle must not keep deepening via null LR after emit path.
    expect(result.lifecycleRecommendationMaterialized).not.toBe(false);

    const afterCycles = await runtime.oa.cycleServices.cycles.listByProject(
      created.projectId,
    );
    expect(afterCycles.length).toBe(beforeCycles.length);
    const afterHd = await runtime.oa.decisionServices.decisions.listByProject(
      created.projectId,
    );
    expect(afterHd.length).toBe(beforeHd.length);
  });

  it("BAR-RB-08 — functional design details stay cycle-owned (no pre-cycle emit of behavior rules)", () => {
    // Asking urgency semantics after Cadrage is supportable → must EMIT, not CONTINUE.
    const assessment = { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT };
    const prematureContinueWouldBeWrong =
      derivePreCycleRoutingDisposition(assessment) === "CONTINUE_PRE_CYCLE";
    expect(prematureContinueWouldBeWrong).toBe(false);
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Résumé besoin. Recommandation de Cadrage.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr("cyc:framing", "Cadrage."),
    });
    expect(coherent.disposition).toBe("EMIT_LIFECYCLE_RECOMMENDATION");
  });

  it("BAR-RB-09 — genuine Critical / gate unknown remains routing-relevant", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: true,
      candidateCycleSupportable: false,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "CONTINUE_PRE_CYCLE",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Quel est l'impact données / irréversible ?",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr("cyc:architecture", "premature"),
    });
    expect(coherent.lifecycleRecommendation).toBeNull();
  });

  it("BAR-RB-10 — active cycle covers work → strip NEXT_CYCLE", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: true,
      remainingUnknownsAreCycleOwned: true,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: true,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "DEFER_TO_ACTIVE_CYCLE",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Le cycle actif couvre déjà ce travail.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr("cyc:framing", "should strip"),
    });
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.suppressReason).toBe("active_cycle_covers_work");
  });

  it("BAR-RB-11 — multiple plausible cycles → HOLD, no arbitrary LR", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: false,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: true,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "HOLD_FOR_ROUTING_AMBIGUITY",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Cadrage ou Conception fonctionnelle ?",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: nextCycleLr("cyc:framing", "arbitrary"),
    });
    expect(coherent.lifecycleRecommendation).toBeNull();
  });

  it("BAR-RB-12 — same turn / no second model (coerce + schema only)", () => {
    const plain = coercePlainTextToProductTurnJson("Clarification ciblée.");
    const parsed = JSON.parse(plain) as unknown;
    expect(isNoraProductTurnWithOptionalLr(parsed)).toBe(true);
    expect(
      (parsed as { lifecycleRecommendation: unknown }).lifecycleRecommendation,
    ).toBeNull();
    expect(
      (parsed as { preCycleRoutingAssessment: PreCycleRoutingAssessment })
        .preCycleRoutingAssessment,
    ).toEqual(PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT);
    // No prose parser: narrative questions are not inspected.
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "lib/nora-cognitive-runtime/noraProductTurnOutputType.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/match\(.*\?|RegExp\(|narrative\.includes/);
  });

  it("BAR-RB-13+14 — NEXT_CYCLE materializes without Cycle/HD; reload CURRENT", async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T12:00:00.000Z",
      idSource: new FixedIdSource("rb13"),
      auditMode: "noop",
      productDbPath: tempDbPath("rb13.sqlite"),
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "RB13",
      objective: "greenfield",
      context: "rb13",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "RB13",
      idempotencyKey: "idem:rb13",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.projectId;
    const traj = await runtime.oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [
        {
          stepId: "stp:clarify",
          order: 1,
          label: "Clarify",
          state: "pending",
        },
      ],
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    expect(traj.ok).toBe(true);

    const beforeCycles = await runtime.oa.cycleServices.cycles.listByProject(
      projectId,
    );
    const beforeHd = await runtime.oa.decisionServices.decisions.listByProject(
      projectId,
    );
    const lps =
      await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const trajNow = await runtime.oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    expect(trajNow.ok).toBe(true);
    if (!trajNow.ok) return;

    const structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      nextCycleLr("cyc:framing", "Envisager un Cadrage."),
      "Recommendation narrative.",
    );
    const mat = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: structured,
      updateEpistemicState: runtime.oa.cycleServices.updateEpistemicState,
      facts: {
        cycles: beforeCycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: trajNow.trajectory,
        decisions: beforeHd,
        evidence: [],
        epistemicItems: [],
      },
      producedAt: "2026-09-09T12:01:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.recommendationAttempted).toBe(true);
    expect(mat.materialization?.ok).toBe(true);
    expect(mat.routingDisposition).toBe("EMIT_LIFECYCLE_RECOMMENDATION");

    const afterCycles = await runtime.oa.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(afterCycles.length).toBe(beforeCycles.length);
    const afterHd = await runtime.oa.decisionServices.decisions.listByProject(
      projectId,
    );
    expect(afterHd.length).toBe(beforeHd.length);

    const items = await runtime.oa.cycleServices.epistemic.listByProject(
      projectId,
    );
    const lrItems = items.filter(
      (i) =>
        i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lrItems.length).toBe(1);
    expect(lrItems[0]!.lifecycleRecommendation?.authority).toBe("none");
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles: afterCycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: trajNow.trajectory,
      decisions: afterHd,
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(
      current.some((c) => c.recommendationId === lrItems[0]!.epistemicItemId),
    ).toBe(true);
  });

  it("BAR-RB-15 — routing metadata is not authority / not durable Fact", () => {
    const coherent = normalizeNoraProductTurnStructuredOutput(
      productTurn(
        { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
        nextCycleLr("cyc:framing", "Cadrage."),
        "ok",
      ),
    );
    expect(coherent).toBeTruthy();
    // Assessment travels only in ephemeral Product turn — not in LR schema authority.
    expect(coherent!.lifecycleRecommendation?.authority).toBe("none");
    expect(coherent!.lifecycleRecommendation?.isHumanDecision).toBe(false);
    const failClosed = JSON.parse(
      buildFailClosedProductTurnJson("plain"),
    ) as Record<string, unknown>;
    expect(failClosed.lifecycleRecommendation).toBeNull();
    expect(isNoraProductTurnWithOptionalLr(failClosed)).toBe(true);
  });

  it("coherence strips premature LR when CONTINUE despite model emitting LR", () => {
    const coherent = normalizeNoraProductTurnStructuredOutput({
      narrative: "encore une question de priorité ?",
      preCycleRoutingAssessment:
        PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
      lifecycleRecommendation: nextCycleLr("cyc:framing", "premature"),
    });
    expect(coherent?.lifecycleRecommendation).toBeNull();
    expect(coherent?.lifecycleRecommendationSuppressed).toBe(true);
  });

  it("missing assessment fails closed (no invented readiness)", () => {
    const coherent = normalizeNoraProductTurnStructuredOutput({
      narrative: "legacy partial",
      lifecycleRecommendation: nextCycleLr("cyc:framing", "should strip"),
    });
    expect(coherent?.preCycleRoutingAssessment).toEqual(
      PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
    );
    expect(coherent?.lifecycleRecommendation).toBeNull();
  });
});
```

### 15.7 finalCorr productTurnPayload helper diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
index 98552975..ab2aa4be 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
@@ -119,9 +119,34 @@ class FixedIdSource implements LocalProjectIdSource {
   }
 }

-function productTurnPayload(lr: object | null, narrative: string) {
+function productTurnPayload(
+  lr: object | null,
+  narrative: string,
+  assessment: {
+    routingBlockingUnknownPresent: boolean;
+    candidateCycleSupportable: boolean;
+    remainingUnknownsAreCycleOwned: boolean;
+    multiplePlausibleCycles: boolean;
+    activeCycleAlreadyCoversWork: boolean;
+  } = lr
+    ? {
+        routingBlockingUnknownPresent: false,
+        candidateCycleSupportable: true,
+        remainingUnknownsAreCycleOwned: true,
+        multiplePlausibleCycles: false,
+        activeCycleAlreadyCoversWork: false,
+      }
+    : {
+        routingBlockingUnknownPresent: true,
+        candidateCycleSupportable: false,
+        remainingUnknownsAreCycleOwned: false,
+        multiplePlausibleCycles: false,
+        activeCycleAlreadyCoversWork: false,
+      },
+) {
   return {
     narrative,
+    preCycleRoutingAssessment: assessment,
     lifecycleRecommendation: lr,
   };
 }
```

### 15.8 qualToGovernedCycle.presentation.d0.test.ts diff
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
index a965bfe3..dcc35203 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
@@ -70,6 +70,10 @@ describe("qual-to-governed-cycle — prompt + presentation contracts", () => {
     expect(prompt).toMatch(/NEXT_CYCLE/);
     expect(prompt).toMatch(/Pas de règle « après N messages »/);
     expect(prompt).toMatch(/jamais forcé cyc:framing/);
+    expect(prompt).toMatch(/TEST DE PERTINENCE DE ROUTAGE/);
+    expect(prompt).toMatch(/TEST DE PROPRIÉTÉ DE CYCLE/);
+    expect(prompt).toMatch(/preCycleRoutingAssessment/);
+    expect(prompt).toMatch(/remainingUnknownsAreCycleOwned/);
     expect(prompt).not.toMatch(
       /aucune autorité de décision, d'exécution Cursor, d'écriture Git\/GitHub, ni de qualification de cycle SFIA/,
     );
```

---

## 16. Instruction to ChatGPT

Lire ce Review Handoff distant et effectuer une Critical Review complète.

Si PASS, le prochain gate pourra être proposé :

`GO MORRIS — GREENFIELD ROUTING-BOUNDARY CORRECTIVE — FRESH BOUNDED LIVE REPLAY`

Ce gate REAL n’est PAS consommé par ce cycle.

---

## 17. Verdict

**PRE-CYCLE ROUTING BOUNDARY CORRECTIVE — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**


---

## Local Git Truth — AFTER

| Check | Observed |
| --- | --- |
| HEAD | `1bbfecb2ff43ed4a0ecbc21cb647c4054ee321a9` |
| parent | `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0` (exact) |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| project push | NONE |
| live replay artefacts | still untracked read-only under `.tmp-sfia-review/runtime-captures/` |

```
1bbfecb2 fix(sfia-studio): bound pre-cycle routing qualification
M	projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
```
