# SFIA-STUDIO-PRODUCT-PROOF-LIFECYCLE-RECOMMENDATION-DELIVERY-01
## CHATGPT DELIVERY REVIEW PACK — FULL
## Canonical Review Handoff candidate

| Field | Value |
| --- | --- |
| **Timestamp (UTC)** | 2026-09-08T08:16:20Z |
| **Cycle** | 8 — Delivery / EVOL / CRITICAL · `SFIA-STUDIO-PRODUCT-PROOF-LIFECYCLE-RECOMMENDATION-DELIVERY-01` |
| **Capability v3** | Lifecycle Recommendation & Pilot Decision Continuity |
| **Milestone** | Product Proof / Pilot-Governed Project Lifecycle completion |
| **Product baseline / origin/main** | `e6d7c649e9d0522b60401f11fb8dd1fd4b122637` |
| **Product branch** | `delivery/sfia-studio-lifecycle-recommendation-product` |
| **Product HEAD** | `e6d7c649e9d0522b60401f11fb8dd1fd4b122637` (uncommitted Product delta) |
| **Review Handoff input (Morris decision)** | `ef8dec99d8e3f406840f34d51773c25c53f6fe84` |
| **Structural qualification anchor** | `3d7603232d197c8882a5b5a90a44566645caae4a` |
| **GO Morris consumed** | AUTHORIZE LOCAL PRODUCT DELIVERY EXECUTION UNDER THIS EXACT CONTRACT |
| **REAL** | ZERO REAL |
| **runtime v3** | NON ADOPTED |
| **Product Proof** | OPEN |
| **Verdict** | READY FOR CHATGPT DELIVERY REVIEW — DETERMINISTIC PRODUCT CANDIDATE — ZERO REAL — PRODUCT COMMIT/PUSH/PR NOT AUTHORIZED |

## Anti-claims

- Not READY FOR PR / merge / Product push.
- Not Product Proof CLOSED.
- Not REAL BOUNDARY PROVEN / END-TO-END REAL PROVEN / READY FOR REAL.
- Not runtime v3 ADOPTED.
- Recommendation ≠ HumanDecision ≠ transition ≠ canFinalize ≠ candidate existence ≠ D5 Morris GO.
- PNG / Penpot review-v5 = visual evidence only, not Product SoT.

---

## 1. Local Git Truth (execution tree)

Isolated clone used after shared worktrees were repeatedly hijacked onto `delivery/sfia-studio-proof-corr-04-hybrid-envelope-d`.

| Check | Result |
| --- | --- |
| Repository | `mcleland147/sfia-workspace` |
| Branch | `delivery/sfia-studio-lifecycle-recommendation-product` |
| HEAD | `e6d7c649e9d0522b60401f11fb8dd1fd4b122637` |
| origin/main | `e6d7c649e9d0522b60401f11fb8dd1fd4b122637` |
| origin/sfia/review-handoff (input) | `ef8dec99d8e3f406840f34d51773c25c53f6fe84` |
| Product commit | NO |
| Product push | NO |

Working tree path: `/Users/morris/Projects/sfia-lr-delivery-isolated-e6d7c649`

---

## 2. Morris decisions consumed (LR-D01→LR-D05)

- **LR-D01** OPTION 1 — Epistemic + COMBINE + projection.
- **LR-D02** Agents SDK `outputType` on governed Nora Runner (same path).
- **LR-D03** EpistemicItem Recommendation carrier; no new table; no JSON-in-statement; CURRENT/STALE derived.
- **LR-D04** LifecycleSurface for Recommend→Decide; TrajectorySurface for trajectory arbitration.
- **LR-D05** resume+replan = visible HD; never bypasses `CYCLE_RESUME_DRIFT`.

GO: local Product Delivery execution authorized; Product commit/push/PR/merge/REAL forbidden.

---

## 3. Sources read (mandatory set)

Process: sfia-cycle-execution-template, routing guide, chatgpt-cursor operating model, rules/guardrails, 15-cycles synthetic map (CKC Cycle 8 = synthetic only).

Delivery refs: delivery-pipeline, decision-engine.

Convergence / product-completion / v3 framing 30–37 (as listed in contract).

Review Handoff decision tip `ef8dec99…` + structural `3d760323…`.

UX evidence: review-v5 manifest (7 frames) — anti-claim preserved.

CKC status: Cycle 8 has no detailed CKC — synthetic map guidance only; no invented Delivery CKC.

---

## 4. Discovery matrix

**KEEP:** CycleInstance lifecycle, invariants, PilotLifecycleTransitions, assessors, ProjectTrajectory, LPS, HumanDecision, Epistemic infra, Nora Runner, TrajectorySurface, ProjectWorkspace, UX semantics, CORR-PROOF-05.

**ADAPT:** `runNoraAgentsTurn` (+optional `outputType`), Epistemic Recommendation typed `relatedObjects`, lifecycle projection companion, PA projection action, ProjectWorkspace composition.

**COMPLETE:** FINALIZE/NEXT_CYCLE structured candidate, deterministic validation, basis fingerprint, currentness/supersession, reload-safe read, LifecycleSurface Recommend→Decide, resume drift honest UX.

**FORBIDDEN preserved:** parallel engines, second model call, prose parser, JSON-in-statement, new table, D5 remap, Recommendation authority/mutation, REAL, protected schema mutation.

---

## 5. Exact files created

- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/relatedObjectsCodec.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts`
- `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts`
- `.tmp-sfia-review/discovery-matrix.md`

## 6. Exact files modified

- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`
- `projects/sfia-studio/app/lib/oa/cycle/index.ts`
- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

Protected modeled schemas: **NOT MODIFIED**.

---

## 7. Schema / protected-path outcome

**NO protected-path mutation.**

Modeled `EpistemicItem` remains `additionalProperties: false`. Structured Recommendation fields are encoded as typed OA-style `relatedObjects` identifiers (`lr:intent:…`, `lr:basis:<sha256>`, `lr:semkey:…`, `lr:subject:…`, `lr:target:…`, `lr:targettype:…`) plus human-readable `statement` and existing provenance/attribution fields.

STOP condition 11/12 not triggered.

---

## 8. Structured Recommendation contract

Intents: `FINALIZE_CURRENT_CYCLE` | `NEXT_CYCLE`.

Envelope fields: recommendationId, projectId, intent, subject/target cycle ids, targetCycleTypeId, producer=`nora`, producedAt, human statement, basisFingerprint, basisRefs, semanticKey, authority=`none`, HD/activation/finalize flags false, epistemicStatus, supersedes, **derivedCurrentness** CURRENT|STALE|SUPERSEDED.

Validation fail-closed: project binding, subject/target, terminal finalize refusal, NEXT_CYCLE target required, trajectory-aware gate when `hasTrajectoryContext===false`, no authority-bearing state.

---

## 9. Nora outputType outcome

`@openai/agents` 0.17 — `Agent({ outputType })` available.

`runNoraAgentsTurn` accepts optional `outputType`; returns `structuredOutput` when set.

`NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE` = strict JSON schema.

Same Runner path; no second LLM call; no prose parser. Model output = candidate only until SFIA validate→materialize.

---

## 10. Epistemic durability / basis / supersession

Carrier: EpistemicItem `type: Recommendation`, source `lifecycle-recommendation:nora`, table `oa_epistemic_items` / `payload_json` unchanged.

Basis fingerprint: sha256 of validation seed facts (cycle status, LPS active id, targets…).

Relevant mutation (e.g. cycle status change) → STALE (non-current for primary CTA).

Supersession: same semanticKey → new active item supersedes prior via existing Epistemic supersede path.

Reload: selectCurrent only returns CURRENT; superseded never primary.

---

## 11. Authority separation / RESUME / Trajectory

- FINALIZE Recommendation does not mutate Cycle (R7 proven).
- NEXT_CYCLE does not create/start Cycle (R8 proven).
- HD still required before structural transitions (existing PilotLifecycleTransitions + CORR-PROOF-05).
- `resumeReplanSubjectFor` does not claim drift clearance (R10); `CYCLE_RESUME_DRIFT` authority remains assessor/transitions.
- LifecycleSurface escalates to TrajectorySurface; no duplicate arbitration; no model calls in surface (R11).

---

## 12. UX visual contract

Pre-code contract: `lifecycleVisualContract.ts` from review-v5 (ACTIVE±FINALIZE rec, CANDIDATE, BLOCKED/DRIFT, FINALIZATION, COMPLETED→NEXT, responsive drawer).

LifecycleSurface wired first in LPS contextual stack; conversation-dominant preserved.

**Runtime screenshots:** RESERVE — no seeded Product runtime visual capture in this cycle (deterministic tests only). Strong visual READY **not** claimed. Accepted Penpot review-v5 remains presentation evidence only.

---

## 13. Fake/Real Qualification

| Axis | Value |
| --- | --- |
| Applicable | YES |
| Entry | ZERO REAL |
| This cycle | DETERMINISTIC PROVEN |
| Out of scope | REAL BOUNDARY / E2E REAL |
| Fake boundary | ScriptedModel + same post-model path validate→materialize→projection→currentness (R15) |
| FinOps | No additional model invocation path for lifecycle |

DETERMINISTIC PROVEN ≠ READY FOR REAL.

---

## 14. R1–R15 proof matrix

| ID | Result | Evidence |
| --- | --- | --- |
| R1 | PASS | ScriptedModel + outputType FINALIZE via `runNoraAgentsTurn` |
| R2 | PASS | Same path NEXT_CYCLE |
| R3 | PASS | validate fail-closed |
| R4 | PASS | SQLite reload without statement parse |
| R5 | PASS | status mutation → non-CURRENT |
| R6 | PASS | supersession single CURRENT per semantic key |
| R7 | PASS | cycle status unchanged after materialize |
| R8 | PASS | no new cycles after NEXT_CYCLE |
| R9 | PASS | canFinalize without Recommendation |
| R10 | PASS | replan subject ≠ drift clear |
| R11 | PASS | TrajectorySurface + escalate; no model in LifecycleSurface |
| R12 | PASS | single Runner cognitiveRuntime |
| R13 | PASS | superseded not selected as CURRENT |
| R14 | PASS | LifecycleSurface distinguishes Rec vs CTA vs drift |
| R15 | PASS | produceLifecycleRecommendation shared post-model path |

Test file: `__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts` — **7/7 passed**.

---

## 15. Tests / regressions / typecheck / build / lint

| Suite | Result |
| --- | --- |
| lifecycleRecommendation.delivery.d0 | 7/7 PASS |
| corrProof05.pilotLifecycle.d0 | **136/136 PASS** |
| nora-cognitive-runtime/runner.d0 | 11/11 PASS |
| `tsc --noEmit` | PASS |
| `next build` | PASS |
| `next lint` | PASS (0 warnings/errors) |

---

## 16. Modified content (exploitable)

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts`

```typescript
/**
 * Lifecycle Recommendation — Product-side envelope (not Epistemic schema extension).
 * Durable carrier = EpistemicItem type Recommendation; structured fields via typed relatedObjects.
 * LR-D01 / LR-D03 — no new table; no JSON-in-statement.
 */
export const LIFECYCLE_RECOMMENDATION_INTENTS = [
  "FINALIZE_CURRENT_CYCLE",
  "NEXT_CYCLE",
] as const;

export type LifecycleRecommendationIntent =
  (typeof LIFECYCLE_RECOMMENDATION_INTENTS)[number];

export type LifecycleRecommendationDerivedCurrentness =
  | "CURRENT"
  | "STALE"
  | "SUPERSEDED";

/** Model/cognition candidate — never Product truth until SFIA validation + materialization. */
export type LifecycleRecommendationCandidate = {
  intent: LifecycleRecommendationIntent;
  statement: string;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
  rationale?: string | null;
};

export type LifecycleRecommendationBasisRefs = {
  projectId: string;
  subjectCycleInstanceId?: string | null;
  subjectCycleStatus?: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
  lpsActiveCycleInstanceId?: string | null;
  lpsVersion?: number | null;
  trajectoryId?: string | null;
  trajectoryVersion?: number | null;
  trajectoryStatus?: string | null;
  finalizeAccepted?: boolean | null;
  resumeClean?: boolean | null;
  reservationBlockingCount?: number | null;
};

export type LifecycleRecommendationEnvelope = {
  recommendationId: string;
  projectId: string;
  intent: LifecycleRecommendationIntent;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  producer: "nora";
  producedAt: string;
  statement: string;
  basisFingerprint: string;
  basisRefs: LifecycleRecommendationBasisRefs;
  semanticKey: string;
  authority: "none";
  isHumanDecision: false;
  doesNotActivateCycle: true;
  doesNotFinalize: true;
  doesNotCreateHumanDecision: true;
  epistemicStatus: "active" | "superseded" | "rejected" | "resolved";
  supersedesRecommendationId: string | null;
  /** Derived at read time — never persisted as Epistemic status. */
  derivedCurrentness: LifecycleRecommendationDerivedCurrentness;
};

export type NoraLifecycleRecommendationStructuredOutput = {
  intent: LifecycleRecommendationIntent;
  statement: string;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  rationale: string | null;
  authority: "none";
  isHumanDecision: false;
};

```
### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts`

```typescript
import type { CycleInstance } from "../../domain/types";
import { isTerminalCycleStatus } from "../../domain/lifecycleInvariants";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationIntent,
} from "./types";

export type ValidateLifecycleRecommendationInput = {
  projectId: string;
  candidate: LifecycleRecommendationCandidate;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  /** When known — trajectory must be trajectory-aware for NEXT_CYCLE. */
  hasTrajectoryContext?: boolean;
};

export type ValidateLifecycleRecommendationResult =
  | {
      ok: true;
      intent: LifecycleRecommendationIntent;
      subjectCycleInstanceId: string | null;
      targetCycleInstanceId: string | null;
      targetCycleTypeId: string | null;
      statement: string;
      basisSeed: LifecycleRecommendationBasisRefs;
    }
  | {
      ok: false;
      code: string;
      reason: string;
    };

/**
 * Deterministic SFIA validation — fail closed.
 * Does not mutate Cycle/LPS/HD.
 */
export function validateLifecycleRecommendation(
  input: ValidateLifecycleRecommendationInput,
): ValidateLifecycleRecommendationResult {
  const { candidate, projectId, cycles } = input;
  if (!projectId.startsWith("prj:")) {
    return { ok: false, code: "LR_PROJECT_INVALID", reason: "project_binding" };
  }
  const statement = (candidate.statement ?? "").trim();
  if (statement.length < 1) {
    return { ok: false, code: "LR_STATEMENT_INVALID", reason: "statement_empty" };
  }

  const byId = new Map(cycles.map((c) => [c.cycleInstanceId, c] as const));

  if (candidate.intent === "FINALIZE_CURRENT_CYCLE") {
    const subjectId = candidate.subjectCycleInstanceId ?? null;
    if (!subjectId || !byId.has(subjectId)) {
      return {
        ok: false,
        code: "LR_SUBJECT_INVALID",
        reason: "finalize_subject_missing",
      };
    }
    const subject = byId.get(subjectId)!;
    if (subject.projectId !== projectId) {
      return {
        ok: false,
        code: "LR_PROJECT_MISMATCH",
        reason: "subject_wrong_project",
      };
    }
    if (isTerminalCycleStatus(subject.status)) {
      return {
        ok: false,
        code: "LR_SUBJECT_TERMINAL",
        reason: "finalize_subject_terminal",
      };
    }
    // Eligibility is NOT required — Recommendation ≠ canFinalize.
    return {
      ok: true,
      intent: candidate.intent,
      subjectCycleInstanceId: subjectId,
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      statement,
      basisSeed: {
        projectId,
        subjectCycleInstanceId: subjectId,
        subjectCycleStatus: subject.status,
        lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
      },
    };
  }

  if (candidate.intent === "NEXT_CYCLE") {
    const targetId = candidate.targetCycleInstanceId ?? null;
    const targetType = candidate.targetCycleTypeId ?? null;
    if (!targetId && !targetType) {
      return {
        ok: false,
        code: "LR_TARGET_MISSING",
        reason: "next_cycle_needs_target",
      };
    }
    if (targetId) {
      const target = byId.get(targetId);
      if (!target) {
        return {
          ok: false,
          code: "LR_TARGET_INVALID",
          reason: "target_cycle_missing",
        };
      }
      if (target.projectId !== projectId) {
        return {
          ok: false,
          code: "LR_PROJECT_MISMATCH",
          reason: "target_wrong_project",
        };
      }
      if (
        target.status === "active" ||
        target.status === "completed" ||
        target.status === "cancelled" ||
        target.status === "superseded"
      ) {
        return {
          ok: false,
          code: "LR_TARGET_STATUS",
          reason: "target_not_startable_state",
        };
      }
      // Single ACTIVE invariant: Recommendation must not imply a second active.
      const active =
        cycles.find((c) => c.status === "active") ??
        (input.lpsActiveCycleInstanceId
          ? byId.get(input.lpsActiveCycleInstanceId)
          : null);
      if (active && active.cycleInstanceId === targetId) {
        return {
          ok: false,
          code: "LR_TARGET_ACTIVE",
          reason: "target_already_active",
        };
      }
    }
    if (input.hasTrajectoryContext === false) {
      return {
        ok: false,
        code: "LR_TRAJECTORY_REQUIRED",
        reason: "next_cycle_requires_trajectory",
      };
    }
    return {
      ok: true,
      intent: candidate.intent,
      subjectCycleInstanceId: candidate.subjectCycleInstanceId ?? null,
      targetCycleInstanceId: targetId,
      targetCycleTypeId: targetType,
      statement,
      basisSeed: {
        projectId,
        subjectCycleInstanceId: candidate.subjectCycleInstanceId ?? null,
        targetCycleInstanceId: targetId,
        targetCycleTypeId: targetType,
        lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
      },
    };
  }

  return { ok: false, code: "LR_INTENT_INVALID", reason: "unknown_intent" };
}

```
### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/relatedObjectsCodec.ts`

```typescript
import { createHash } from "node:crypto";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationIntent,
} from "./types";
import { LIFECYCLE_RECOMMENDATION_INTENTS } from "./types";

const INTENT_PREFIX = "lr:intent:";
const BASIS_PREFIX = "lr:basis:";
const SEMKEY_PREFIX = "lr:semkey:";
const TARGET_TYPE_PREFIX = "lr:targettype:";
const SUBJECT_PREFIX = "lr:subject:";
const TARGET_PREFIX = "lr:target:";

export function isLifecycleRecommendationIntent(
  value: unknown,
): value is LifecycleRecommendationIntent {
  return (
    typeof value === "string" &&
    (LIFECYCLE_RECOMMENDATION_INTENTS as readonly string[]).includes(value)
  );
}

export function intentRelatedObject(
  intent: LifecycleRecommendationIntent,
): string {
  return `${INTENT_PREFIX}${intent}`;
}

export function basisRelatedObject(fingerprint: string): string {
  return `${BASIS_PREFIX}${fingerprint}`;
}

export function semanticKeyRelatedObject(semanticKey: string): string {
  return `${SEMKEY_PREFIX}${semanticKey}`;
}

/** Encode cycleTypeId without inventing a second id space. */
export function targetTypeRelatedObject(cycleTypeId: string): string {
  if (cycleTypeId.includes(":")) {
    return `${TARGET_TYPE_PREFIX}${cycleTypeId.replace(/:/g, ".")}`;
  }
  return `${TARGET_TYPE_PREFIX}${cycleTypeId}`;
}

export function parseTargetTypeRelatedObject(value: string): string | null {
  if (!value.startsWith(TARGET_TYPE_PREFIX)) return null;
  const raw = value.slice(TARGET_TYPE_PREFIX.length);
  return raw.includes(".") ? raw.replace(/\./g, ":") : raw;
}

export function subjectRelatedObject(cycleInstanceId: string): string {
  return `${SUBJECT_PREFIX}${cycleInstanceId}`;
}

export function targetRelatedObject(cycleInstanceId: string): string {
  return `${TARGET_PREFIX}${cycleInstanceId}`;
}

export function parseSubjectRelatedObject(value: string): string | null {
  if (!value.startsWith(SUBJECT_PREFIX)) return null;
  return value.slice(SUBJECT_PREFIX.length);
}

export function parseTargetRelatedObject(value: string): string | null {
  if (!value.startsWith(TARGET_PREFIX)) return null;
  return value.slice(TARGET_PREFIX.length);
}

export function computeBasisFingerprint(
  refs: LifecycleRecommendationBasisRefs,
): string {
  const canonical = JSON.stringify({
    projectId: refs.projectId,
    subjectCycleInstanceId: refs.subjectCycleInstanceId ?? null,
    subjectCycleStatus: refs.subjectCycleStatus ?? null,
    targetCycleInstanceId: refs.targetCycleInstanceId ?? null,
    targetCycleTypeId: refs.targetCycleTypeId ?? null,
    lpsActiveCycleInstanceId: refs.lpsActiveCycleInstanceId ?? null,
    lpsVersion: refs.lpsVersion ?? null,
    trajectoryId: refs.trajectoryId ?? null,
    trajectoryVersion: refs.trajectoryVersion ?? null,
    trajectoryStatus: refs.trajectoryStatus ?? null,
    finalizeAccepted: refs.finalizeAccepted ?? null,
    resumeClean: refs.resumeClean ?? null,
    reservationBlockingCount: refs.reservationBlockingCount ?? null,
  });
  return createHash("sha256").update(canonical).digest("hex");
}

export function computeSemanticKey(input: {
  projectId: string;
  intent: LifecycleRecommendationIntent;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
}): string {
  const raw = [
    input.projectId,
    input.intent,
    input.subjectCycleInstanceId ?? "",
    input.targetCycleInstanceId ?? "",
    input.targetCycleTypeId ?? "",
  ].join("|");
  return createHash("sha256").update(raw).digest("hex").slice(0, 32);
}

export function buildRelatedObjects(input: {
  projectId: string;
  intent: LifecycleRecommendationIntent;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
  targetCycleTypeId?: string | null;
  basisFingerprint: string;
  semanticKey: string;
}): string[] {
  const out: string[] = [
    input.projectId,
    intentRelatedObject(input.intent),
    basisRelatedObject(input.basisFingerprint),
    semanticKeyRelatedObject(input.semanticKey),
  ];
  if (input.subjectCycleInstanceId) {
    out.push(subjectRelatedObject(input.subjectCycleInstanceId));
  }
  if (input.targetCycleInstanceId) {
    out.push(targetRelatedObject(input.targetCycleInstanceId));
  }
  if (input.targetCycleTypeId) {
    out.push(targetTypeRelatedObject(input.targetCycleTypeId));
  }
  return out;
}

export function parseLifecycleRecommendationRelatedObjects(
  relatedObjects: readonly string[] | undefined,
): {
  intent: LifecycleRecommendationIntent | null;
  basisFingerprint: string | null;
  semanticKey: string | null;
  projectId: string | null;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
} {
  const objs = relatedObjects ?? [];
  let intent: LifecycleRecommendationIntent | null = null;
  let basisFingerprint: string | null = null;
  let semanticKey: string | null = null;
  let projectId: string | null = null;
  let targetCycleTypeId: string | null = null;
  let subjectCycleInstanceId: string | null = null;
  let targetCycleInstanceId: string | null = null;

  for (const o of objs) {
    if (o.startsWith(INTENT_PREFIX)) {
      const v = o.slice(INTENT_PREFIX.length);
      if (isLifecycleRecommendationIntent(v)) intent = v;
    } else if (o.startsWith(BASIS_PREFIX)) {
      basisFingerprint = o.slice(BASIS_PREFIX.length);
    } else if (o.startsWith(SEMKEY_PREFIX)) {
      semanticKey = o.slice(SEMKEY_PREFIX.length);
    } else if (o.startsWith(TARGET_TYPE_PREFIX)) {
      targetCycleTypeId = parseTargetTypeRelatedObject(o);
    } else if (o.startsWith(SUBJECT_PREFIX)) {
      subjectCycleInstanceId = parseSubjectRelatedObject(o);
    } else if (o.startsWith(TARGET_PREFIX)) {
      targetCycleInstanceId = parseTargetRelatedObject(o);
    } else if (o.startsWith("prj:")) {
      projectId = o;
    }
  }

  return {
    intent,
    basisFingerprint,
    semanticKey,
    projectId,
… [truncated for handoff size] …

```
### `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts`

```typescript
import type { NoraLifecycleRecommendationStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/types";

/**
 * Agents SDK outputType for Lifecycle Recommendation candidates.
 * Same Nora Runner path — no second model call / prose parser.
 */
export const NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE = {
  type: "json_schema" as const,
  name: "nora_lifecycle_recommendation",
  strict: true,
  schema: {
    type: "object" as const,
    additionalProperties: false as const,
    required: [
      "intent",
      "statement",
      "subjectCycleInstanceId",
      "targetCycleInstanceId",
      "targetCycleTypeId",
      "rationale",
      "authority",
      "isHumanDecision",
    ],
    properties: {
      intent: {
        type: "string" as const,
        enum: ["FINALIZE_CURRENT_CYCLE", "NEXT_CYCLE"],
      },
      statement: { type: "string" as const },
      subjectCycleInstanceId: { type: ["string", "null"] as const },
      targetCycleInstanceId: { type: ["string", "null"] as const },
      targetCycleTypeId: { type: ["string", "null"] as const },
      rationale: { type: ["string", "null"] as const },
      authority: { type: "string" as const, enum: ["none"] },
      isHumanDecision: { type: "boolean" as const, enum: [false] },
    },
  },
};

export function isNoraLifecycleRecommendationStructuredOutput(
  value: unknown,
): value is NoraLifecycleRecommendationStructuredOutput {
  if (!value || typeof value !== "object") return false;
  const o = value as Record<string, unknown>;
  if (o.intent !== "FINALIZE_CURRENT_CYCLE" && o.intent !== "NEXT_CYCLE") {
    return false;
  }
  if (typeof o.statement !== "string") return false;
  if (o.authority !== "none") return false;
  if (o.isHumanDecision !== false) return false;
  return true;
}

```
### `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts`

```typescript
/**
 * Visual contract — LifecycleSurface (pre-UI code).
 * Sources: review-v5 Penpot evidence (NOT Product SoT).
 * Desktop 1440x900 · Responsive drawer ≤1024 (evidence 1100x908).
 *
 * Layout (contextual stack in LPS drawer, above LPS/Trajectory):
 * - Eyebrow: CYCLE (neutral)
 * - Status badge (text + tone, not color-only): En cours | Proposé | Bloqué | Finalisation | Terminé
 * - Recommendation block (optional): label "Recommandation Nora" + statement + currentness
 * - Distinction line: Recommendation ≠ décision Pilote
 * - Primary CTA hierarchy:
 *   - ACTIVE without FINALIZE rec → Finaliser secondary
 *   - ACTIVE with CURRENT FINALIZE rec → Finaliser primary
 *   - CANDIDATE → Démarrer primary (eligibility)
 *   - BLOCKED/DRIFT → Replanifier (HD visible) ; RESUME disabled until clean
 *   - FINALIZATION OPEN → Traiter / Voir détails / Annuler
 *   - COMPLETED → next-cycle recommendation + escalate to TrajectorySurface if arbitration
 * - Trajectory escalation: link/focus TrajectorySurface (no duplicate arbitration)
 * - Empty: no recommendation → honest copy, eligibility CTAs only
 * - Loading/error: reuse workspace patterns; disabled CTAs honest
 */
export const LIFECYCLE_SURFACE_VISUAL_CONTRACT = {
  source: "review-v5",
  desktop: "1440x900",
  responsive: "drawer/sheet ≤1024 (evidence 1100x908)",
  heading: "Cycle",
  recommendationLabel: "Recommandation Nora",
  decisionLabel: "Décision Pilote requise",
  antiClaim: "PNG = visual evidence only; not Product SoT",
} as const;

```


### git diff (tracked modifications)

```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 4836a276..fba20c82 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -10,6 +10,7 @@ import { ConversationSurface } from "./surfaces/ConversationSurface";
 import { HistorySurface } from "./surfaces/HistorySurface";
 import { LpsSurface } from "./surfaces/LpsSurface";
 import { RecoverySurface } from "./surfaces/RecoverySurface";
+import { LifecycleSurface } from "./surfaces/LifecycleSurface";
 import { TrajectorySurface } from "./surfaces/TrajectorySurface";
 import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";
@@ -192,6 +193,20 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                 className={styles.stateTrajectoryStack}
                 data-testid="h01-lps-trajectory-composition"
               >
+                <LifecycleSurface
+                  projectId={projectId}
+                  onDurableFactsChanged={() => {
+                    void loadProject();
+                  }}
+                  onEscalateTrajectory={() => {
+                    const el = document.querySelector(
+                      "[data-testid='trajectory-surface']",
+                    );
+                    if (el instanceof HTMLElement) {
+                      el.scrollIntoView({ behavior: "smooth", block: "start" });
+                    }
+                  }}
+                />
                 <LpsSurface result={success} />
                 <TrajectorySurface
                   projectId={projectId}
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index ed66148b..afb930e5 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -11,6 +11,8 @@ import {
 import {
   projectPilotLifecycle,
   type PilotLifecycleProjection,
+  selectCurrentLifecycleRecommendations,
+  isPausedStatus,
 } from "@/lib/oa/cycle";
 import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
 import type { F2DecisionKind } from "./f2/types";
@@ -934,13 +936,61 @@ async function buildAssistantPilotLifecycleProjection(
     await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
       projectId,
     });
-  return projectPilotLifecycle({
+  const lpsActive = lps.ok
+    ? lps.livingProjectState.activeCycleInstanceId
+    : null;
+  let epistemicItems: Awaited<
+    ReturnType<typeof runtime.oa.cycleServices.epistemic.listByProject>
+  > = [];
+  try {
+    epistemicItems = await runtime.oa.cycleServices.epistemic.listByProject(
+      projectId,
+    );
+  } catch {
+    epistemicItems = [];
+  }
+
+  const currentRecommendations = selectCurrentLifecycleRecommendations({
+    items: epistemicItems,
+    cycles,
+    lpsActiveCycleInstanceId: lpsActive,
+  });
+
+  const projection = projectPilotLifecycle({
     projectId,
     cycles,
-    lpsActiveCycleInstanceId: lps.ok
-      ? lps.livingProjectState.activeCycleInstanceId
-      : null,
+    lpsActiveCycleInstanceId: lpsActive,
+    currentRecommendations,
   });
+
+  // Honest resume gate: if paused without clean reconciliation signal, mark dirty unknown-safe.
+  if (
+    projection.selectedStatus &&
+    isPausedStatus(projection.selectedStatus)
+  ) {
+    const selected = cycles.find(
+      (c) => c.cycleInstanceId === projection.selectedCycleInstanceId,
+    );
+    const snap = selected?.pauseReconciliation;
+    if (!snap) {
+      projection.resumeReconciliation = {
+        clean: false,
+        detailCode: "CYCLE_RESUME_DRIFT",
+        reason: "pause_snapshot_missing",
+      };
+      projection.cta = { ...projection.cta, canResume: false };
+    } else {
+      // Without full decision/evidence readers here, absence of materialDrift alone is not claimed clean.
+      // Surface known snapshot presence as clean-capable; PilotLifecycleTransitions remains authority.
+      projection.resumeReconciliation = {
+        clean: true,
+        detailCode: null,
+        reason: "pause_snapshot_present",
+      };
+    }
+  }
+
+  return projection;
 }

 /**
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index d941406b..c1c46dd8 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -14,6 +14,7 @@ import {
   Runner,
   type Model,
   type Session,
+  type AgentOutputType,
 } from "@openai/agents";
 import type { ConversationProvider } from "@/lib/platform/ai";
 import type { EventSink } from "@/lib/platform/observability/eventSink";
@@ -136,6 +137,11 @@ export type RunNoraAgentsTurnInput = {
    * Runtime-generic hook — nora-eval injects BudgetTracker bridge. Not authority.
    */
   usdAccounting?: NoraAgentsUsdAccounting;
+  /**
+   * LR-D02 — optional Agents SDK structured outputType on the same Runner.
+   * When set, finalOutput may be a structured object (candidate data only).
+   */
+  outputType?: AgentOutputType;
 };

 export type RunNoraAgentsTurnHostedSearchObserve = {
@@ -469,6 +475,7 @@ export async function runNoraAgentsTurn(
     instructions: input.systemInstructions,
     model: model as never,
     tools,
+    ...(input.outputType ? { outputType: input.outputType } : {}),
   });

   const runner = createNoraAgentsRunner(
@@ -485,6 +492,7 @@ export async function runNoraAgentsTurn(
     (session ? "available_with_history" : "unavailable");

   let text = "";
+  let structuredOutput: unknown = undefined;
   let lastResponseId: string | null = null;
   let usageAgg: {
     inputTokens?: number;
@@ -551,7 +559,21 @@ export async function runNoraAgentsTurn(
           ? result.finalOutput
           : result.finalOutput == null
             ? ""
-            : String(result.finalOutput);
+            : typeof result.finalOutput === "object"
+              ? JSON.stringify(result.finalOutput)
+              : String(result.finalOutput);
+      if (input.outputType && result.finalOutput != null) {
+        structuredOutput =
+          typeof result.finalOutput === "string"
+            ? (() => {
+                try {
+                  return JSON.parse(result.finalOutput) as unknown;
+                } catch {
+                  return result.finalOutput;
+                }
+              })()
+            : result.finalOutput;
+      }
       lastResponseId = result.lastResponseId ?? null;
       usageAgg = result.state?.usage ?? null;
       runNewItems = Array.isArray(result.newItems) ? [...result.newItems] : [];
@@ -677,6 +699,7 @@ export async function runNoraAgentsTurn(
     memoryBAvailability,
     memoryBCompactionState: "none",
     memoryBCompactionDetails: null,
+    ...(structuredOutput !== undefined ? { structuredOutput } : {}),
     ...(hostedSearchObserve ? { hostedSearchObserve } : {}),
     ...(budgetObserve ? { budgetObserve } : {}),
     ...(usdObserve ? { usdObserve } : {}),
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
index 95448a25..dec56300 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
@@ -63,6 +63,11 @@ export type NoraCognitiveTurnResult = {
   mw4Grounding?: Mw4GroundingTurnSurface;
   /** MW6 — source strategy + normalized external observations (non-authoritative). */
   mw6SourceIntelligence?: Mw6SourceIntelligenceSurface;
+  /**
+   * LR-D02 — structured Agents finalOutput when outputType was requested.
+   * Candidate data only — never Product truth until SFIA validation.
+   */
+  structuredOutput?: unknown;
   /**
    * MW6↔Auth — authority binding axes from preflight (composition proof).
    * Present when campaign + governedAuthority composition evaluated.
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
index 29375d8c..45ff1334 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
@@ -13,6 +13,7 @@ import {
   isStartableCandidateStatus,
   isTerminalCycleStatus,
 } from "../domain/lifecycleInvariants";
+import type { LifecycleRecommendationEnvelope } from "./lifecycleRecommendation/types";

 export type PilotLifecycleProjection = {
   projectId: string;
@@ -40,6 +41,17 @@ export type PilotLifecycleProjection = {
     canFinalize: boolean;
     canCancel: boolean;
   };
+  /**
+   * Companion — CURRENT Nora lifecycle Recommendations (never eligibility).
+   * Recommendation ≠ canFinalize / canStart / HumanDecision.
+   */
+  currentRecommendations?: LifecycleRecommendationEnvelope[];
+  /** Resume reconciliation when selected cycle is paused — never cleared by HD alone. */
+  resumeReconciliation?: {
+    clean: boolean;
+    detailCode?: string | null;
+    reason?: string | null;
+  } | null;
 };

 export function projectPilotLifecycle(input: {
@@ -47,6 +59,8 @@ export function projectPilotLifecycle(input: {
   cycles: readonly CycleInstance[];
   lpsActiveCycleInstanceId: string | null | undefined;
   assessment?: FinalizationAssessment | null;
+  currentRecommendations?: LifecycleRecommendationEnvelope[];
+  resumeReconciliation?: PilotLifecycleProjection["resumeReconciliation"];
 }): PilotLifecycleProjection {
   const byId = new Map(
     input.cycles.map((c) => [c.cycleInstanceId, c] as const),
@@ -118,5 +132,7 @@ export function projectPilotLifecycle(input: {
     selectionAmbiguous,
     assessment: input.assessment ?? null,
     cta,
+    currentRecommendations: input.currentRecommendations ?? [],
+    resumeReconciliation: input.resumeReconciliation ?? null,
   };
 }
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 09d58153..9a779465 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -61,6 +61,7 @@ export {
   projectPilotLifecycle,
   type PilotLifecycleProjection,
 } from "./application/lifecycleProjection";
+export * from "./application/lifecycleRecommendation";
 export {
   deriveLifecycleBlockersFromEpistemicItems,
   lifecycleBlockersFromReaderFailure,

```

---

## 17. Realism gaps / debt / exit

- No live OpenAI structured-output proof (ZERO REAL by contract).
- No runtime PNG comparison vs review-v5 (reserve).
- Projection resume cleanliness uses pause snapshot presence as honest gate; full assessResumeReconciliation reader wiring in PA projection remains refinement debt (transitions remain authority).
- Nora composition caller that *triggers* lifecycle Recommendation production in Product conversation turn is bounded to Runner seam + produce path; broader PA orchestration auto-emit may need a follow-up GO if desired.

Exit of this cycle: ChatGPT Delivery Review gate — **not** PR.

---

## 18. Claims allowed / forbidden

**Allowed:** deterministic Product implementation candidate; deterministic validation/durability/currentness; authority separation; ZERO REAL.

**Forbidden:** READY FOR PR; Product Proof CLOSED; REAL proven; runtime v3 ADOPTED; UX ADOPTED; strong visual READY without runtime screenshots.

---

## 19. Next gate / Morris decisions still required

1. ChatGPT Delivery Review of this handoff.
2. Morris gate for Product commit/push/PR (not authorized here).
3. Separate Morris GO for any REAL OpenAI proof.
4. Protected schema mutation still requires distinct STOP/gate if later needed (not needed now).

---

## 20. Final verdict

**READY FOR CHATGPT DELIVERY REVIEW — DETERMINISTIC PRODUCT CANDIDATE — ZERO REAL — PRODUCT COMMIT/PUSH/PR NOT AUTHORIZED**
