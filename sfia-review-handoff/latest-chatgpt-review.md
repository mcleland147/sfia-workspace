# SFIA Studio Review Pack — FULL

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-09-09 19:11:55 CEST |
| **Cycle ID** | `SFIA-STUDIO-PRE-CYCLE-ROUTING-BOUNDARY-CORRECTIVE-01` |
| **Type** | 8 — Delivery · EVOL · CRITICAL |
| **Décision Morris consommée** | `GO MORRIS — PRE-CYCLE ROUTING BOUNDARY POSITIVE ENFORCEMENT MICRO-CORRECTIVE` |
| **Milestone** | PRODUCT PROOF — PRE-CYCLE ROUTING BOUNDARY CORRECTIVE |
| **Review pack** | FULL |
| **ZERO NEW REAL** | OUI |
| **Verdict** | PRE-CYCLE ROUTING BOUNDARY POSITIVE ENFORCEMENT — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW |

---

## 1. Critical Review blockers addressed

| ID | Blocker | Disposition |
| --- | --- | --- |
| **CR-01** | PRE-CYCLE ROUTING BOUNDARY POSITIVE ENFORCEMENT INCOMPLETE — EMIT+null accepted silently | **CLOSED** — `MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION` fail-closed |
| **CR-02** | `remainingUnknownsAreCycleOwned` unused in `derivePreCycleRoutingDisposition` | **QUALIFIED** — no schema expansion; false ≠ automatic incoherence; documented + BAR-RB-18 |

---

## 2. Local Git Truth — BEFORE

| Check | Observed |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310` |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| HEAD (old candidate) | `1bbfecb2ff43ed4a0ecbc21cb647c4054ee321a9` |
| parent | `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0` |
| origin/main | `a9f6c310a0826d0e5bd6f7264603382a86564db1` |
| upstream | NONE (no project push) |
| staged | empty |
| dirty | `.tmp-sfia-review/*` only + this micro-corrective Product edits |
| live captures | `.tmp-sfia-review/runtime-captures/` READ-ONLY preserved |
| handoff tip at start | `6febd57835487ff88e98005048d957419bd69f8a` / blob `5fb5468f…` |

**Verdict :** PASS — no unexplained Product divergence.

---

## 3. Root cause (micro)

Negative enforcement already stripped premature LR (CONTINUE/HOLD/DEFER-NEXT).

Positive branch incomplete:

`EMIT_LIFECYCLE_RECOMMENDATION` + `lifecycleRecommendation=null`
→ `recommendationAttempted=false`
→ silent conversational `ok:true`
→ no contradiction.

Additionally, `orchestrateTurn` short-circuited when `!extracted.candidate` and **never called** materialize — so seams 1–3 alone could not make the contradiction Product-observable.

---

## 4. Fail-closed design retained

| Disposition | LR null | LR present |
| --- | --- | --- |
| CONTINUE | OK (clarify) | strip LR |
| HOLD | OK (routing clarify) | strip LR |
| DEFER | FINALIZE may remain; NEXT_CYCLE stripped | — |
| **EMIT** | **`MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION`** | keep + materialize |

- Server **never invents** LR.
- Same Nora turn / one model call.
- Assessment remains non-durable / non-authoritative.

### Propagation seam

1. `applyPreCycleRoutingBoundaryCoherence` sets `boundaryContradiction`
2. `normalize` / `extractLifecycleCandidateFromStructuredOutput` surfaces it
3. `materializeLifecycleRecommendationFromStructuredOutput` returns `recommendationAttempted=true` + `materialization.ok=false` + code
4. `orchestrateTurn` returns `ok:false` / `status:validation_error` / same code — **not** normal conversational success

**Why orchestrateTurn (file 4) was required:** without it, EMIT+null still returned `ok:true` via the `!candidate` short-circuit.

---

## 5. remainingUnknownsAreCycleOwned semantics

| Value | Meaning |
| --- | --- |
| `true` | Remaining unknowns exist and belong to the candidate cycle |
| `false` | No materially remaining unknowns (or none cycle-owned) |

`derivePreCycleRoutingDisposition` does **not** require `true` for EMIT.
`candidateCycleSupportable` + no routing blocker / multi-cycle / active-cycle → EMIT is legitimate even when `remainingUnknownsAreCycleOwned=false` (BAR-RB-18).
No sixth schema field required.

---

## 6. Files changed

| Path | Why |
| --- | --- |
| `noraProductTurnOutputType.ts` | contradiction on EMIT+null |
| `materializeFromProductTurn.ts` | fail-closed materialization result |
| `orchestrateTurn.ts` | observable Product turn failure (required) |
| `preCycleRoutingBoundary.d0.test.ts` | BAR-RB-16…20 |

Protected untouched: prompt, providerAgentsModel, runNoraAgentsTurn, qualificationSignalCoherence, recommendProfile, invariants, persistence, package.json, method/, UI, etc.

---

## 7. BAR mapping

| BAR | Status |
| --- | --- |
| RB-01…15 | Non-regression PASS (22-file suite includes them) |
| RB-16 | EMIT without LR → contradiction + orchestrate `ok:false` |
| RB-17 | EMIT with LR → materialize OK |
| RB-18 | remainingUnknownsAreCycleOwned=false still EMIT |
| RB-19 | CONTINUE/HOLD + null remain valid |
| RB-20 | one Agents call; EMIT+null fails; no prose parser |

---

## 8. Validation results (EXACT)

| Gate | Result |
| --- | --- |
| Focused (4 files) | **67 passed** |
| preCycleRoutingBoundary alone | **22 passed** |
| Full Vitest | **Test Files 319 passed \| 17 skipped (336)** · **Tests 3329 passed \| 135 skipped (3464)** |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check (Product) | clean |
| ZERO NEW REAL | PROVEN |

---

## 9. Proofs

- Same-turn / one-model: BAR-RB-16/20 spy `runNoraAgentsTurn` = 1
- No prose parser: coherence uses structured booleans only
- No server-generated LR: EMIT+null returns error; epistemic LR count stays 0
- No persistence schema change
- NEXT_CYCLE ≠ Cycle: RB-13/17 cycle counts unchanged
- Recommendation ≠ HD/START: authority none preserved on valid path

---

## 10. Reserves

- RESERVE-QA-MOCK-01 — OPEN / NON-BLOCKING / OUT OF SCOPE
- LIVE REPLAY AFTER CORRECTIVE NOT YET PROVEN
- R2 OPEN
- runtime v3 NON ADOPTED

---

## 11. Claims

### Authorized
- ROUTING BOUNDARY POSITIVE ENFORCEMENT DETERMINISTICALLY PROVEN AT TESTED SCOPE
- EMIT WITHOUT LR FAILS CLOSED
- SAME-TURN OPENAI-NATIVE PATH PRESERVED
- ZERO NEW REAL

### Forbidden
- LIVE BOUNDARY PROVEN / GREENFIELD COMPLETE / E2E REAL / R2 CLOSED / RUNTIME V3 ADOPTED / READY FOR PR

---

## 12. Commit strategy

- Old rejected candidate: `1bbfecb2ff43ed4a0ecbc21cb647c4054ee321a9`
- Amend mono-cycle (`--no-edit`) — no live replay on 1bbfecb2; not project-pushed
- Parent must remain `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0`
- New amended SHA: `e79f16ba467c227470328d7f723f1c2b53fdf2fb`

---

## 13. Modified Product content (FULL)

### 13.1 noraProductTurnOutputType.ts
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
  /**
   * Structured boundary contradiction (e.g. EMIT without LR).
   * Non-null ⇒ fail-closed — never invent LR; never silent conversational success.
   */
  boundaryContradiction: string | null;
};

/** Explicit contract code — EMIT disposition requires a Nora-produced LR. */
export const MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION =
  "MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION" as const;

/**
 * Deterministic coherence between assessment and lifecycleRecommendation.
 * - CONTINUE / HOLD → strip any LR (no premature recommendation).
 * - DEFER_TO_ACTIVE_CYCLE → strip NEXT_CYCLE only (FINALIZE may remain).
 * - EMIT + LR → keep as emitted (never invent one server-side).
 * - EMIT + null → MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION (fail-closed).
 * Does not parse narrative. Does not create Cycle/HD/START.
 *
 * remainingUnknownsAreCycleOwned semantics:
 * - true  → remaining unknowns exist and belong to the candidate cycle
 * - false → no materially remaining unknowns (or none that are cycle-owned)
 * Either value is compatible with EMIT when candidateCycleSupportable and
 * no routing blocker / multi-cycle / active-cycle deferral. false is NOT
 * automatically incoherent.
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
      boundaryContradiction: null,
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
      boundaryContradiction: null,
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
        boundaryContradiction: null,
      };
    }
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: candidate,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
      boundaryContradiction: null,
    };
  }
  // EMIT_LIFECYCLE_RECOMMENDATION — never invent LR.
  if (candidate === null) {
    return {
      narrative: input.narrative,
      preCycleRoutingAssessment: input.preCycleRoutingAssessment,
      disposition,
      lifecycleRecommendation: null,
      lifecycleRecommendationSuppressed: false,
      suppressReason: null,
      boundaryContradiction: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    };
  }
  return {
    narrative: input.narrative,
    preCycleRoutingAssessment: input.preCycleRoutingAssessment,
    disposition,
    lifecycleRecommendation: candidate,
    lifecycleRecommendationSuppressed: false,
    suppressReason: null,
    boundaryContradiction: null,
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

### 13.2 materializeFromProductTurn.ts
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
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
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
  /** Structured boundary contradiction code when Product turn is incoherent. */
  boundaryContradiction?: string | null;
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
  boundaryContradiction?: string | null;
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
      boundaryContradiction: coherent.boundaryContradiction,
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
          boundaryContradiction: extracted.boundaryContradiction ?? null,
        }
      : {
          routingDisposition: null,
          preCycleRoutingAssessment: null,
          lifecycleRecommendationSuppressed: false,
          boundaryContradiction: null,
        };

  if (
    extracted.kind === "product_turn" &&
    extracted.boundaryContradiction ===
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION
  ) {
    // EMIT without LR — fail closed; never invent a Recommendation.
    return {
      narrative: extracted.narrative,
      recommendationAttempted: true,
      materialization: {
        ok: false,
        code: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
        reason: "emit_disposition_without_lifecycle_recommendation",
      },
      ...boundaryMeta,
    };
  }

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

### 13.3 orchestrateTurn.ts — positive-enforcement hunk
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index c03c4732..0d6ef3af 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -19,7 +19,10 @@ import {
   type NoraAgentsUsdAccounting,
   type NoraCampaignBudget,
 } from "@/lib/nora-cognitive-runtime";
-import { NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
+import {
+  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
+  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
+} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
 import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
 import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
@@ -312,6 +315,25 @@ export async function orchestrateProjectAssistantTurn(input: {
       if (extracted.narrative) {
         assistantText = extracted.narrative;
       }
+      // Positive enforcement: EMIT without LR is a structured contradiction.
+      // Never invent LR; never treat as normal conversational success.
+      // Seams 1–3 alone are insufficient because this short-circuit previously
+      // skipped materialize and returned ok:true silently.
+      if (
+        extracted.kind === "product_turn" &&
+        extracted.boundaryContradiction ===
+          MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION
+      ) {
+        return {
+          ok: false,
+          status: "validation_error",
+          code: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
+          message:
+            "Contradiction de frontière de routage : une Recommendation lifecycle était requise (EMIT) mais absente. Aucune Recommendation n'a été inventée côté serveur.",
+          mode: modeResolution.mode,
+          retryable: false,
+        };
+      }
       if (!extracted.candidate) {
         lifecycleRecommendationMaterialized = false;
       } else {
```

### 13.4 preCycleRoutingBoundary.d0.test.ts (full)
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
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
  PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  applyPreCycleRoutingBoundaryCoherence,
  buildFailClosedProductTurnJson,
  derivePreCycleRoutingDisposition,
  isNoraProductTurnWithOptionalLr,
  normalizeNoraProductTurnStructuredOutput,
  type PreCycleRoutingAssessment,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { coercePlainTextToProductTurnJson } from "@/lib/nora-cognitive-runtime/providerAgentsModel";
import {
  extractLifecycleCandidateFromStructuredOutput,
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

  it("BAR-RB-16 — EMIT without LR fails closed (materialize + orchestrate)", async () => {
    const assessment = { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "EMIT_LIFECYCLE_RECOMMENDATION",
    );
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Besoin compris — mais LR manquante.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: null,
    });
    expect(coherent.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
    expect(coherent.lifecycleRecommendation).toBeNull();

    const structured = productTurn(assessment, null, "Besoin compris.");
    const extracted = extractLifecycleCandidateFromStructuredOutput(structured);
    expect(extracted.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
    expect(extracted.candidate).toBeNull();

    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T18:00:00.000Z",
      idSource: new FixedIdSource("rb16"),
      auditMode: "noop",
      productDbPath: tempDbPath("rb16.sqlite"),
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "RB16",
      objective: "greenfield",
      context: "rb16",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "RB16",
      idempotencyKey: "idem:rb16",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.projectId;
    await runtime.oa.cycleServices.createInitialTrajectory.execute({
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
      producedAt: "2026-09-09T18:01:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.recommendationAttempted).toBe(true);
    expect(mat.materialization?.ok).toBe(false);
    if (mat.materialization && !mat.materialization.ok) {
      expect(mat.materialization.code).toBe(
        MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
      );
    }
    expect(mat.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
    // No invented LR / Cycle / HD
    expect(
      (await runtime.oa.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(beforeCycles.length);
    expect(
      (await runtime.oa.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(beforeHd.length);
    expect(
      (await runtime.oa.cycleServices.epistemic.listByProject(projectId)).filter(
        (i) => i.source === "lifecycle-recommendation:nora",
      ).length,
    ).toBe(0);

    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(structured))],
    ]);
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "situation comprise",
      sessionDbPath: tempDbPath("rb16-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    expect(orch.ok).toBe(false);
    if (orch.ok) return;
    expect(orch.status).toBe("validation_error");
    expect(orch.code).toBe(MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(
      (await runtime.oa.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(beforeCycles.length);
    expect(
      (await runtime.oa.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(beforeHd.length);
  });

  it("BAR-RB-17 — EMIT with LR remains valid (materialize)", async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T18:10:00.000Z",
      idSource: new FixedIdSource("rb17"),
      auditMode: "noop",
      productDbPath: tempDbPath("rb17.sqlite"),
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "RB17",
      objective: "greenfield",
      context: "rb17",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "RB17",
      idempotencyKey: "idem:rb17",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const projectId = created.projectId;
    await runtime.oa.cycleServices.createInitialTrajectory.execute({
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
    const coherent = normalizeNoraProductTurnStructuredOutput(structured);
    expect(coherent?.boundaryContradiction).toBeNull();
    expect(coherent?.lifecycleRecommendation).not.toBeNull();

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
      producedAt: "2026-09-09T18:11:00.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    expect(mat.boundaryContradiction ?? null).toBeNull();
    expect(mat.recommendationAttempted).toBe(true);
    expect(mat.materialization?.ok).toBe(true);
    expect(
      (await runtime.oa.cycleServices.cycles.listByProject(projectId)).length,
    ).toBe(beforeCycles.length);
    expect(
      (await runtime.oa.decisionServices.decisions.listByProject(projectId))
        .length,
    ).toBe(beforeHd.length);
  });

  it("BAR-RB-18 — no remaining unknown is not a false block", () => {
    const assessment: PreCycleRoutingAssessment = {
      routingBlockingUnknownPresent: false,
      candidateCycleSupportable: true,
      remainingUnknownsAreCycleOwned: false,
      multiplePlausibleCycles: false,
      activeCycleAlreadyCoversWork: false,
    };
    expect(derivePreCycleRoutingDisposition(assessment)).toBe(
      "EMIT_LIFECYCLE_RECOMMENDATION",
    );
    const lr = nextCycleLr("cyc:ux-ui", "Changement UX borné.");
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Travail déjà suffisamment borné.",
      preCycleRoutingAssessment: assessment,
      lifecycleRecommendation: lr,
    });
    expect(coherent.boundaryContradiction).toBeNull();
    expect(coherent.lifecycleRecommendation).toEqual(lr);
  });

  it("BAR-RB-19 — CONTINUE/HOLD without LR remain valid (not errors)", () => {
    const continueOk = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Quelle situation concrète ?",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
      },
      lifecycleRecommendation: null,
    });
    expect(continueOk.disposition).toBe("CONTINUE_PRE_CYCLE");
    expect(continueOk.boundaryContradiction).toBeNull();
    expect(continueOk.lifecycleRecommendation).toBeNull();

    const holdOk = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Cadrage ou Conception ?",
      preCycleRoutingAssessment: {
        routingBlockingUnknownPresent: false,
        candidateCycleSupportable: false,
        remainingUnknownsAreCycleOwned: false,
        multiplePlausibleCycles: true,
        activeCycleAlreadyCoversWork: false,
      },
      lifecycleRecommendation: null,
    });
    expect(holdOk.disposition).toBe("HOLD_FOR_ROUTING_AMBIGUITY");
    expect(holdOk.boundaryContradiction).toBeNull();
    expect(holdOk.lifecycleRecommendation).toBeNull();
  });

  it("BAR-RB-20 — same-turn positive enforcement (one Agents call, no retry)", async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-09T18:20:00.000Z",
      idSource: new FixedIdSource("rb20"),
      auditMode: "noop",
      productDbPath: tempDbPath("rb20.sqlite"),
    });
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: "RB20",
      objective: "greenfield",
      context: "rb20",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "RB20",
      idempotencyKey: "idem:rb20",
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

    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const emitNull = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Ready but missing LR.",
    );
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(emitNull))],
    ]);
    const orch = await orchestrateProjectAssistantTurn({
      projectId: created.projectId,
      content: "ok",
      sessionDbPath: tempDbPath("rb20-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    expect(orch.ok).toBe(false);
    if (!orch.ok) {
      expect(orch.code).toBe(MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION);
    }
    expect(spy).toHaveBeenCalledTimes(1);
    // No second model / retry — ScriptedModel queue exhausted after one call.
    expect(spy.mock.calls.length).toBe(1);

    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "lib/nora-cognitive-runtime/noraProductTurnOutputType.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/narrative\.includes|new RegExp|match\(\//);
  });
});
```

---

## 14. Instruction to ChatGPT

Lire ce Review Handoff distant et effectuer une Critical Review complète du candidate amendé.

Si PASS, le prochain gate pourra être proposé :

`GO MORRIS — GREENFIELD ROUTING-BOUNDARY CORRECTIVE — FRESH BOUNDED LIVE REPLAY`

Ce gate REAL n’est PAS consommé par ce cycle.

---

## 15. Verdict

**PRE-CYCLE ROUTING BOUNDARY POSITIVE ENFORCEMENT — DETERMINISTIC CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**



---

## Local Git Truth — AFTER

| Check | Observed |
| --- | --- |
| old candidate (superseded) | `1bbfecb2ff43ed4a0ecbc21cb647c4054ee321a9` |
| new amended SHA | `e79f16ba467c227470328d7f723f1c2b53fdf2fb` |
| parent | `f35ae52a2fa5004f6b79e5f4db50d1494df8cee0` (exact) |
| branch | `delivery/sfia-studio-product-proof-qual-to-governed-cycle` |
| project push | NONE |

```
e79f16ba fix(sfia-studio): bound pre-cycle routing qualification
M	projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts

```
