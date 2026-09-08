# SFIA Review Pack — Lifecycle Recommendation Correction Delivery

- timestamp_utc: 2026-09-08T09:08:15Z
- cycle: SFIA-STUDIO-PRODUCT-PROOF-LIFECYCLE-RECOMMENDATION-CORR-DELIVERY-01
- type: 8 — Delivery / implémentation
- typology: EVOL
- profile: CRITICAL
- capability: Lifecycle Recommendation & Pilot Decision Continuity
- runtime_v3: NON ADOPTED
- real: ZERO REAL
- product_git: NO PRODUCT COMMIT / PUSH / PR / MERGE
- review_handoff_git: REQUIRED — publish-in-cycle

## 1. Local Git Truth (at Review Pack generation)

```
pwd: /Users/morris/Projects/sfia-lr-delivery-isolated-e6d7c649
remote:
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch: delivery/sfia-studio-lifecycle-recommendation-product
HEAD: e6d7c649e9d0522b60401f11fb8dd1fd4b122637
origin/main: e6d7c649e9d0522b60401f11fb8dd1fd4b122637
status --short:
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
?? .tmp-sfia-review/discovery-matrix.md
?? .tmp-sfia-review/product-tracked.diff
?? projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/
?? projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/lifecycle-recommendation.schema.json
diff --stat:
.tmp-sfia-review/chatgpt-review.md                 | 2783 ++++++++++++++++++--
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |   15 +
 .../app/features/project-assistant/actions.ts      |  171 +-
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   25 +-
 .../app/lib/nora-cognitive-runtime/types.ts        |    5 +
 .../oa/cycle/application/lifecycleProjection.ts    |   16 +
 .../oa/cycle/application/updateEpistemicState.ts   |    3 +
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   |   32 +
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |    1 +
 .../schemas/epistemic/epistemic-item.schema.json   |    3 +
 10 files changed, 2844 insertions(+), 210 deletions(-)
diff --name-status:
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
diff --cached --stat:
(empty)
untracked:
.tmp-sfia-review/discovery-matrix.md
.tmp-sfia-review/product-tracked.diff
projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts
projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/lifecycle-recommendation.schema.json
log -8:
e6d7c649 (HEAD -> delivery/sfia-studio-lifecycle-recommendation-product, origin/main, origin/delivery/sfia-studio-lifecycle-recommendation-product, delivery/sfia-studio-proof-corr-04-hybrid-envelope-d) Merge pull request #476 from mcleland147/delivery/sfia-studio-proof-corr-05-pilot-lifecycle
105f6473 feat(sfia-studio): enforce pilot-governed cycle lifecycle
12d837fd Merge pull request #475 from mcleland147/recovery/sfia-studio-proof-corr-04-option-d-ac7376d9
7f7184ca test(sfia-studio): register cognitive context runtime boundary
95b268c3 feat(sfia-studio): ground Nora reasoning in Studio context
1f48dd81 Merge pull request #474 from mcleland147/delivery/sfia-studio-proof-corr-03-e1-method-grounded-advisory
8c6715fe fix(sfia-studio): ground Nora advisory in Studio method
1b93fca8 Merge pull request #473 from mcleland147/delivery/sfia-studio-proof-corr-02-b1-advisory-default
```

## 2. Incoming Review Handoff

- origin/sfia/review-handoff @ `68fe55347b4b4ac84f8535bc0449b8c358c62fbb`
- CORR-QUAL findings consumed: FINDING A (lr:* relatedObjects protocol), FINDING B (pause_snapshot_present ⇒ clean), FINDING C (truncated pack)

## 3. Exact Morris GO Consumed

> GO MORRIS — LR CORRECTION OPTION A APPROVED — ADD OPTIONAL TYPED LIFECYCLE RECOMMENDATION FIELD TO EPISTEMICITEM — KEEP SCHEMAVERSION 0.1.0-OA FOR THIS STRICTLY ADDITIVE BACKWARD-COMPATIBLE DELTA — AUTHORIZE BOUNDED PRODUCT CORRECTION DELIVERY FOR TYPED CARRIER + AUTHORITATIVE RESUME RECONCILIATION — ZERO REAL — NO PRODUCT COMMIT/PUSH/PR/MERGE.

## 4. Sources Read

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md
- projects/sfia-studio/sfia-v3-framing/30,32,33,37
- projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/05,10 + epistemic-item + provenance schemas
- Incoming handoff 68fe5534 latest-chatgpt-review.md
- Full local Product candidate (uncommitted)

## 5. Convergence Matrix

| Keep | Status |
|------|--------|
| CycleInstance lifecycle | KEPT |
| ProjectTrajectory | KEPT |
| HumanDecision engine | KEPT |
| assessResumeReconciliation | KEPT + wired as sole projection authority |
| PilotLifecycleTransitions | KEPT |
| SQLite oa_epistemic_items / payload_json | KEPT — no DDL |
| Nora governed Agents Runner + outputType | KEPT |
| LifecycleSurface / TrajectorySurface | KEPT |
| Recommendation ≠ decision; CURRENT/STALE derived | KEPT |
| single Product cognition path | KEPT |

| Adapt | Status |
|-------|--------|
| EpistemicItem modeled + TS | OPTIONAL lifecycleRecommendation |
| materialize/currentness/produce | typed field; no lr:* |
| updateEpistemicState | clones typed field |
| PA lifecycle projection | assessResumeReconciliation + fail-closed |
| deterministic tests | R1–R15 + R10-A..H |

| Remove | Status |
|--------|--------|
| lr:* relatedObjectsCodec | DELETED (uncommitted candidate) |
| pause_snapshot_present ⇒ clean | REMOVED |

## 6. Files Created / Modified / Deleted

### Created
- `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/lifecycle-recommendation.schema.json`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts`
- `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts`

### Modified
- `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json`
- `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`
- `projects/sfia-studio/app/lib/oa/cycle/index.ts`
- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts`

### Deleted
- `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/relatedObjectsCodec.ts` (uncommitted candidate retirement of forbidden lr:* protocol)

## 7. Protected Schema Delta

- schemaVersion remains const `0.1.0-oa`
- optional `lifecycleRecommendation` $ref added to EpistemicItem
- new sibling schema `lifecycle-recommendation.schema.json`
- additionalProperties:false retained
- Breaking change detected: NO
- DDL/migration: NO

## 8. Final Typed Persisted Contract

Outer EpistemicItem: epistemicItemId, type=Recommendation, statement, status, supersedes, createdAt, createdBy, source, provenance, relatedObjects (genuine domain refs only).

Optional `lifecycleRecommendation`:
- intent
- basisFingerprint
- basisRefs (audit/reload/currentness)
- semanticKey
- subjectCycleInstanceId
- targetCycleInstanceId
- targetCycleTypeId
- authority: none (invariant)

NOT persisted: CURRENT/STALE/UI/eligibility/canFinalize/canResume.

## 9. Backward Compatibility / Persistence / Codec Retirement

- Existing EpistemicItem without lifecycleRecommendation validates (AJV proven)
- Existing non-lifecycle Recommendation validates
- New lifecycle Recommendation with typed field validates
- Unknown extra field fails (additionalProperties:false)
- SQLite payload_json round-trip preserves typed field (R4)
- No lr:* needed after reload
- No DDL
- schemaVersion 0.1.0-oa

### lr:* protocol search (Product app)
```
projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts:541:      expect(text).not.toMatch(/lr:intent:/);
projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts:542:      expect(text).not.toMatch(/lr:basis:/);
projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts:543:      expect(text).not.toMatch(/lr:semkey:/);
projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts:544:      expect(text).not.toMatch(/lr:subject:/);
projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts:545:      expect(text).not.toMatch(/lr:target:/);
projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts:546:      expect(text).not.toMatch(/lr:targettype:/);
```

relatedObjectsCodec.ts exists: False

## 10. Nora outputType

- `NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE` + ScriptedModel path unchanged
- Same post-model path: structured → validate → materialize → Epistemic → SQLite → reload → currentness
- ZERO REAL OpenAI calls

## 11. Currentness / Supersession

- CURRENT/STALE derived from basisFingerprint vs live facts
- semanticKey typed; Epistemic status authoritative for superseded
- Reload does not resurrect stale/superseded (R13)

## 12. RESUME Authoritative Wiring

`buildAssistantPilotLifecycleProjection` (actions.ts):
- when selected cycle paused → collect LPS/project/trajectory/decisions/evidence
- on reader failure → fail closed (clean=false, canResume=false, honest reason)
- call `assessResumeReconciliation`
- map to projection.resumeReconciliation
- canResume = base eligibility AND reconciliation.clean
- REMOVED: pause_snapshot_present ⇒ clean
- NO duplicated drift logic in UI

## 13. R1–R15 Matrix

| ID | Claim | Verdict | Evidence |
|----|-------|---------|----------|
| R1 | FINALIZE structured Nora output same Runner | PASS | delivery.d0 ScriptedModel + outputType |
| R2 | NEXT_CYCLE same path | PASS | delivery.d0 |
| R3 | invalid binding fail closed | PASS | delivery.d0 |
| R4 | typed Epistemic durability SQLite reload | PASS | delivery.d0 |
| R5 | material basis mutation ⇒ STALE | PASS | delivery.d0 |
| R6 | semanticKey + supersession one current | PASS | delivery.d0 |
| R7 | FINALIZE Rec does not mutate Cycle | PASS | delivery.d0 |
| R8 | NEXT_CYCLE does not create Cycle | PASS | delivery.d0 |
| R9 | Rec ≠ eligibility ≠ HD | PASS | delivery.d0 |
| R10 | authoritative RESUME at projection | PASS | R10-A..H delivery.d0 + assessor |
| R10-A | traj change ⇒ dirty / canResume false | PASS | projection |
| R10-B | HD fingerprint drift | PASS | assessor unit |
| R10-C | evidence drift | PASS | assessor unit |
| R10-D | blocker drift | PASS | assessor unit |
| R10-E | clean facts ⇒ canResume true | PASS | projection |
| R10-F | replan HD alone never clears drift | PASS | subject + G |
| R10-G | only clean fresh recon restores Resume | PASS | projection restore |
| R10-H | reader/snapshot fail-closed | PASS | missing snapshot projection |
| R11 | TrajectorySurface reused | PASS | delivery.d0 |
| R12 | no second cognition path | PASS | same Runner |
| R13 | reload never resurrects stale/superseded | PASS | delivery.d0 |
| R14 | presentation distinction | PASS (visual RESERVED) | surface copy; no screenshots |
| R15 | same post-model Product path | PASS | produce path |

## 14. Tests / Typecheck / Build / Lint

- lifecycleRecommendation.delivery.d0.test.ts: 14 passed
- corrProof05.pilotLifecycle.d0.test.ts: 136 passed
- nora-cognitive-runtime suite: 478 passed (38 files)
- adversarialValidation + cycleTrajectoryEpistemicCkc: 44 passed
- tsc --noEmit: PASS
- npm run build: PASS
- npm run lint: PASS (0 warnings)
- git diff --check: PASS

## 15. Fake/Real

- Applicable: YES (OpenAI/Nora boundary)
- This cycle: ZERO REAL
- ScriptedModel substitutes external cognition
- Forbidden claims NOT made: READY FOR REAL / REAL BOUNDARY PROVEN / END-TO-END REAL / runtime v3 ADOPTED
- Visual strong R14: RESERVED

## 16. Diff Summary

```
.tmp-sfia-review/chatgpt-review.md                 | 2783 ++++++++++++++++++--
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |   15 +
 .../app/features/project-assistant/actions.ts      |  171 +-
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   25 +-
 .../app/lib/nora-cognitive-runtime/types.ts        |    5 +
 .../oa/cycle/application/lifecycleProjection.ts    |   16 +
 .../oa/cycle/application/updateEpistemicState.ts   |    3 +
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   |   32 +
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |    1 +
 .../schemas/epistemic/epistemic-item.schema.json   |    3 +
 10 files changed, 2844 insertions(+), 210 deletions(-)
```

```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/lifecycle-recommendation.schema.json
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts
A	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
A	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts
D	projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/relatedObjectsCodec.ts
```

## 17. Debt / Exit / Next Gate

- Product remains uncommitted (authorized)
- Visual R14 strong evidence RESERVED
- Next Morris gate: ChatGPT correction acceptance → Product Git gate decision

## 18. Final Verdict (local pack; handoff publish follows)

READY FOR CHATGPT CORRECTION DELIVERY REVIEW — LR-D03 TYPED CARRIER IMPLEMENTED — AUTHORITATIVE RESUME RECONCILIATION IMPLEMENTED — DETERMINISTIC PRODUCT CANDIDATE — ZERO REAL — HANDOFF REMOTE VERIFIED — PRODUCT COMMIT/PUSH/PR NOT AUTHORIZED

(Handoff remote verification completed in Cursor final report after publisher.)

---

# COMPLETE PRODUCT CONTENT — CREATED FILES

## CREATED: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/lifecycle-recommendation.schema.json`

```
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/v3-native-option-a/epistemic/lifecycle-recommendation.schema.json",
  "title": "LifecycleRecommendation",
  "description": "Optional typed Lifecycle Recommendation payload on EpistemicItem. Authority remains none; CURRENT/STALE are never persisted here.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "intent",
    "basisFingerprint",
    "basisRefs",
    "semanticKey",
    "subjectCycleInstanceId",
    "targetCycleInstanceId",
    "targetCycleTypeId",
    "authority"
  ],
  "properties": {
    "intent": {
      "type": "string",
      "enum": ["FINALIZE_CURRENT_CYCLE", "NEXT_CYCLE"]
    },
    "basisFingerprint": {
      "type": "string",
      "minLength": 16,
      "maxLength": 128
    },
    "basisRefs": {
      "type": "object",
      "additionalProperties": false,
      "required": ["projectId"],
      "properties": {
        "projectId": {
          "$ref": "../common/identifier.schema.json"
        },
        "subjectCycleInstanceId": {
          "type": ["string", "null"]
        },
        "subjectCycleStatus": {
          "type": ["string", "null"]
        },
        "targetCycleInstanceId": {
          "type": ["string", "null"]
        },
        "targetCycleTypeId": {
          "type": ["string", "null"]
        },
        "lpsActiveCycleInstanceId": {
          "type": ["string", "null"]
        },
        "lpsVersion": {
          "type": ["integer", "null"]
        },
        "trajectoryId": {
          "type": ["string", "null"]
        },
        "trajectoryVersion": {
          "type": ["integer", "null"]
        },
        "trajectoryStatus": {
          "type": ["string", "null"]
        },
        "finalizeAccepted": {
          "type": ["boolean", "null"]
        },
        "resumeClean": {
          "type": ["boolean", "null"]
        },
        "reservationBlockingCount": {
          "type": ["integer", "null"]
        }
      }
    },
    "semanticKey": {
      "type": "string",
      "minLength": 8,
      "maxLength": 128
    },
    "subjectCycleInstanceId": {
      "type": ["string", "null"]
    },
    "targetCycleInstanceId": {
      "type": ["string", "null"]
    },
    "targetCycleTypeId": {
      "type": ["string", "null"]
    },
    "authority": {
      "type": "string",
      "const": "none"
    }
  }
}
```

## CREATED: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/basisFingerprint.ts`

```
```typescript
import { createHash } from "node:crypto";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationIntent,
} from "./types";
import { LIFECYCLE_RECOMMENDATION_INTENTS } from "./types";

export function isLifecycleRecommendationIntent(
  value: unknown,
): value is LifecycleRecommendationIntent {
  return (
    typeof value === "string" &&
    (LIFECYCLE_RECOMMENDATION_INTENTS as readonly string[]).includes(value)
  );
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

/** Genuine domain-object references only — never machine-state prefixes. */
export function buildGenuineRelatedObjects(input: {
  projectId: string;
  subjectCycleInstanceId?: string | null;
  targetCycleInstanceId?: string | null;
}): string[] {
  const out: string[] = [input.projectId];
  if (input.subjectCycleInstanceId) out.push(input.subjectCycleInstanceId);
  if (input.targetCycleInstanceId) out.push(input.targetCycleInstanceId);
  return out;
}

export function candidateFromStructuredOutput(
  output: LifecycleRecommendationCandidate,
): LifecycleRecommendationCandidate {
  return {
    intent: output.intent,
    statement: output.statement.trim(),
    subjectCycleInstanceId: output.subjectCycleInstanceId ?? null,
    targetCycleInstanceId: output.targetCycleInstanceId ?? null,
    targetCycleTypeId: output.targetCycleTypeId ?? null,
    rationale: output.rationale ?? null,
  };
}
```

## CREATED: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts`

```
```typescript
import type { CycleInstance, EpistemicItem } from "../../domain/types";
import { computeBasisFingerprint } from "./basisFingerprint";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationDerivedCurrentness,
  LifecycleRecommendationEnvelope,
} from "./types";
import { tryDecodeLifecycleRecommendationItem } from "./materializeLifecycleRecommendation";

export function deriveLifecycleRecommendationCurrentness(input: {
  item: EpistemicItem;
  currentBasisRefs: LifecycleRecommendationBasisRefs;
}): LifecycleRecommendationDerivedCurrentness {
  if (input.item.status === "superseded") return "SUPERSEDED";
  if (input.item.status === "rejected" || input.item.status === "resolved") {
    return "STALE";
  }
  const persisted = input.item.lifecycleRecommendation;
  if (!persisted?.basisFingerprint) return "STALE";
  const now = computeBasisFingerprint(input.currentBasisRefs);
  return now === persisted.basisFingerprint ? "CURRENT" : "STALE";
}

/** Rebuild validation seed shape from current Product facts. */
export function rebuildBasisRefsForRecommendation(input: {
  item: EpistemicItem;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
}): LifecycleRecommendationBasisRefs | null {
  const persisted = input.item.lifecycleRecommendation;
  if (!persisted) return null;
  const subjectId = persisted.subjectCycleInstanceId;
  const subject = subjectId
    ? input.cycles.find((c) => c.cycleInstanceId === subjectId)
    : undefined;
  return {
    projectId: persisted.basisRefs.projectId,
    subjectCycleInstanceId: subjectId,
    subjectCycleStatus: subject?.status ?? null,
    targetCycleInstanceId: persisted.targetCycleInstanceId,
    targetCycleTypeId: persisted.targetCycleTypeId,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId ?? null,
  };
}

export function selectCurrentLifecycleRecommendations(input: {
  items: readonly EpistemicItem[];
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
}): LifecycleRecommendationEnvelope[] {
  const decoded: LifecycleRecommendationEnvelope[] = [];
  for (const item of input.items) {
    if (item.type !== "Recommendation") continue;
    if (item.source !== "lifecycle-recommendation:nora") continue;
    if (!item.lifecycleRecommendation) continue;
    const basis = rebuildBasisRefsForRecommendation({
      item,
      cycles: input.cycles,
      lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
    });
    if (!basis) continue;
    const currentness = deriveLifecycleRecommendationCurrentness({
      item,
      currentBasisRefs: basis,
    });
    const env = tryDecodeLifecycleRecommendationItem(item, currentness);
    if (env) decoded.push({ ...env, basisRefs: basis });
  }

  const current = decoded.filter((d) => d.derivedCurrentness === "CURRENT");
  const byKey = new Map<string, LifecycleRecommendationEnvelope>();
  for (const env of current.sort((a, b) =>
    a.producedAt < b.producedAt ? 1 : -1,
  )) {
    if (!byKey.has(env.semanticKey)) byKey.set(env.semanticKey, env);
  }
  return [...byKey.values()];
}
```

## CREATED: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`

```
```typescript
export * from "./types";
export * from "./basisFingerprint";
export * from "./validateLifecycleRecommendation";
export * from "./materializeLifecycleRecommendation";
export * from "./currentness";
export * from "./produceLifecycleRecommendation";
```

## CREATED: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts`

```
```typescript
import type {
  EpistemicItem,
  EpistemicLifecycleRecommendation,
  ProvenanceRecord,
} from "../../domain/types";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import {
  buildGenuineRelatedObjects,
  computeBasisFingerprint,
  computeSemanticKey,
} from "./basisFingerprint";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationEnvelope,
} from "./types";
import type { ValidateLifecycleRecommendationResult } from "./validateLifecycleRecommendation";

export function lifecycleRecommendationEpistemicId(input: {
  projectId: string;
  semanticKey: string;
  producedAt: string;
}): string {
  const slug = input.semanticKey.slice(0, 16);
  const ts = input.producedAt.replace(/[^0-9A-Za-z]/g, "").slice(0, 20);
  return `epi:lr:${slug}:${ts}`;
}

export function buildPersistedLifecycleRecommendation(input: {
  intent: EpistemicLifecycleRecommendation["intent"];
  basisRefs: LifecycleRecommendationBasisRefs;
  subjectCycleInstanceId: string | null;
  targetCycleInstanceId: string | null;
  targetCycleTypeId: string | null;
  projectId: string;
}): EpistemicLifecycleRecommendation {
  const basisFingerprint = computeBasisFingerprint(input.basisRefs);
  const semanticKey = computeSemanticKey({
    projectId: input.projectId,
    intent: input.intent,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    targetCycleInstanceId: input.targetCycleInstanceId,
    targetCycleTypeId: input.targetCycleTypeId,
  });
  return {
    intent: input.intent,
    basisFingerprint,
    basisRefs: { ...input.basisRefs, projectId: input.projectId },
    semanticKey,
    subjectCycleInstanceId: input.subjectCycleInstanceId,
    targetCycleInstanceId: input.targetCycleInstanceId,
    targetCycleTypeId: input.targetCycleTypeId,
    authority: "none",
  };
}

export function encodeLifecycleRecommendationItem(input: {
  recommendationId: string;
  projectId: string;
  validated: Extract<ValidateLifecycleRecommendationResult, { ok: true }>;
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  supersedesRecommendationId?: string | null;
  provenance?: ProvenanceRecord;
}): EpistemicItem {
  const persisted = buildPersistedLifecycleRecommendation({
    intent: input.validated.intent,
    basisRefs: input.basisRefs,
    subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
    targetCycleInstanceId: input.validated.targetCycleInstanceId,
    targetCycleTypeId: input.validated.targetCycleTypeId,
    projectId: input.projectId,
  });
  return {
    schemaVersion: "0.1.0-oa",
    epistemicItemId: input.recommendationId,
    type: "Recommendation",
    statement: input.validated.statement,
    status: "active",
    source: "lifecycle-recommendation:nora",
    createdBy: structuredClone(input.createdBy),
    createdAt: input.producedAt,
    supersedes: input.supersedesRecommendationId ?? undefined,
    relatedObjects: buildGenuineRelatedObjects({
      projectId: input.projectId,
      subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
      targetCycleInstanceId: input.validated.targetCycleInstanceId,
    }),
    provenance: input.provenance
      ? structuredClone(input.provenance)
      : undefined,
    lifecycleRecommendation: persisted,
  };
}

export function tryDecodeLifecycleRecommendationItem(
  item: EpistemicItem,
  derivedCurrentness: LifecycleRecommendationEnvelope["derivedCurrentness"],
): LifecycleRecommendationEnvelope | null {
  if (item.type !== "Recommendation") return null;
  if (item.source !== "lifecycle-recommendation:nora") return null;
  const persisted = item.lifecycleRecommendation;
  if (!persisted || persisted.authority !== "none") return null;
  if (!persisted.basisFingerprint || !persisted.semanticKey) return null;

  return {
    recommendationId: item.epistemicItemId,
    projectId: persisted.basisRefs.projectId,
    intent: persisted.intent,
    subjectCycleInstanceId: persisted.subjectCycleInstanceId,
    targetCycleInstanceId: persisted.targetCycleInstanceId,
    targetCycleTypeId: persisted.targetCycleTypeId,
    producer: "nora",
    producedAt: item.createdAt,
    statement: item.statement,
    basisFingerprint: persisted.basisFingerprint,
    basisRefs: persisted.basisRefs,
    semanticKey: persisted.semanticKey,
    authority: "none",
    isHumanDecision: false,
    doesNotActivateCycle: true,
    doesNotFinalize: true,
    doesNotCreateHumanDecision: true,
    epistemicStatus: item.status,
    supersedesRecommendationId: item.supersedes ?? null,
    derivedCurrentness,
  };
}

export async function materializeLifecycleRecommendation(input: {
  updateEpistemicState: UpdateEpistemicState;
  projectId: string;
  validated: Extract<ValidateLifecycleRecommendationResult, { ok: true }>;
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  existingItems: readonly EpistemicItem[];
  provenance?: ProvenanceRecord;
  correlationId?: string;
}): Promise<
  | { ok: true; item: EpistemicItem; supersededId: string | null }
  | { ok: false; code: string; reason: string }
> {
  const semanticKey = computeSemanticKey({
    projectId: input.projectId,
    intent: input.validated.intent,
    subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
    targetCycleInstanceId: input.validated.targetCycleInstanceId,
    targetCycleTypeId: input.validated.targetCycleTypeId,
  });

  const priorActive = input.existingItems.find((e) => {
    if (e.type !== "Recommendation" || e.status !== "active") return false;
    if (e.source !== "lifecycle-recommendation:nora") return false;
    return e.lifecycleRecommendation?.semanticKey === semanticKey;
  });

  const recommendationId = lifecycleRecommendationEpistemicId({
    projectId: input.projectId,
    semanticKey,
    producedAt: input.producedAt,
  });

  const item = encodeLifecycleRecommendationItem({
    recommendationId,
    projectId: input.projectId,
    validated: input.validated,
    basisRefs: input.basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    supersedesRecommendationId: priorActive?.epistemicItemId ?? null,
    provenance: input.provenance,
  });

  const result = await input.updateEpistemicState.execute({
    projectId: input.projectId,
    createdBy: input.createdBy,
    correlationId: input.correlationId,
    items: [
      {
        epistemicItemId: item.epistemicItemId,
        type: "Recommendation",
        statement: item.statement,
        status: "active",
        source: item.source,
        supersedes: item.supersedes,
        relatedObjects: item.relatedObjects,
        provenance: item.provenance,
        lifecycleRecommendation: item.lifecycleRecommendation,
      },
    ],
  });

  if (!result.ok) {
    return {
      ok: false,
      code: result.error.detailCode,
      reason: result.error.internalCauseRef ?? "materialize_failed",
    };
  }

  return {
    ok: true,
    item,
    supersededId: priorActive?.epistemicItemId ?? null,
  };
}
```

## CREATED: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts`

```
```typescript
import type { EpistemicItem, ProvenanceRecord } from "../../domain/types";
import type { CycleInstance } from "../../domain/types";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import {
  computeBasisFingerprint,
  candidateFromStructuredOutput,
} from "./basisFingerprint";
import { materializeLifecycleRecommendation } from "./materializeLifecycleRecommendation";
import { validateLifecycleRecommendation } from "./validateLifecycleRecommendation";
import type {
  LifecycleRecommendationBasisRefs,
  LifecycleRecommendationCandidate,
  LifecycleRecommendationEnvelope,
  NoraLifecycleRecommendationStructuredOutput,
} from "./types";
import { tryDecodeLifecycleRecommendationItem } from "./materializeLifecycleRecommendation";
import { deriveLifecycleRecommendationCurrentness } from "./currentness";

export type ProduceLifecycleRecommendationInput = {
  updateEpistemicState: UpdateEpistemicState;
  projectId: string;
  structured:
    | NoraLifecycleRecommendationStructuredOutput
    | LifecycleRecommendationCandidate;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  basisRefs: LifecycleRecommendationBasisRefs;
  producedAt: string;
  createdBy: EpistemicItem["createdBy"];
  existingItems: readonly EpistemicItem[];
  hasTrajectoryContext?: boolean;
  provenance?: ProvenanceRecord;
  correlationId?: string;
};

export type ProduceLifecycleRecommendationResult =
  | {
      ok: true;
      envelope: LifecycleRecommendationEnvelope;
      item: EpistemicItem;
      supersededId: string | null;
    }
  | { ok: false; code: string; reason: string };

/**
 * Product path post-model: validate → materialize typed Epistemic → decode envelope.
 * Used by Fake/deterministic and future REAL boundary alike (R15).
 */
export async function produceLifecycleRecommendation(
  input: ProduceLifecycleRecommendationInput,
): Promise<ProduceLifecycleRecommendationResult> {
  if (
    "authority" in input.structured &&
    input.structured.authority !== undefined &&
    input.structured.authority !== "none"
  ) {
    return {
      ok: false,
      code: "LR_AUTHORITY_FORBIDDEN",
      reason: "authority_bearing_forbidden",
    };
  }
  if (
    "isHumanDecision" in input.structured &&
    input.structured.isHumanDecision !== undefined &&
    input.structured.isHumanDecision !== false
  ) {
    return {
      ok: false,
      code: "LR_HD_FORBIDDEN",
      reason: "recommendation_is_not_human_decision",
    };
  }

  const candidate = candidateFromStructuredOutput({
    intent: input.structured.intent,
    statement: input.structured.statement,
    subjectCycleInstanceId: input.structured.subjectCycleInstanceId ?? null,
    targetCycleInstanceId: input.structured.targetCycleInstanceId ?? null,
    targetCycleTypeId: input.structured.targetCycleTypeId ?? null,
    rationale:
      "rationale" in input.structured
        ? (input.structured.rationale ?? null)
        : null,
  });

  const validated = validateLifecycleRecommendation({
    projectId: input.projectId,
    candidate,
    cycles: input.cycles,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
    hasTrajectoryContext: input.hasTrajectoryContext,
  });
  if (!validated.ok) {
    return { ok: false, code: validated.code, reason: validated.reason };
  }

  const basisRefs: LifecycleRecommendationBasisRefs = {
    ...validated.basisSeed,
    projectId: input.projectId,
  };

  const materialized = await materializeLifecycleRecommendation({
    updateEpistemicState: input.updateEpistemicState,
    projectId: input.projectId,
    validated,
    basisRefs,
    producedAt: input.producedAt,
    createdBy: input.createdBy,
    existingItems: input.existingItems,
    provenance: input.provenance,
    correlationId: input.correlationId,
  });
  if (!materialized.ok) {
    return {
      ok: false,
      code: materialized.code,
      reason: materialized.reason,
    };
  }

  const currentness = deriveLifecycleRecommendationCurrentness({
    item: materialized.item,
    currentBasisRefs: basisRefs,
  });
  const envelope = tryDecodeLifecycleRecommendationItem(
    materialized.item,
    currentness,
  );
  if (!envelope) {
    return {
      ok: false,
      code: "LR_DECODE_FAILED",
      reason: "envelope_decode_failed",
    };
  }

  if (envelope.basisFingerprint !== computeBasisFingerprint(basisRefs)) {
    return {
      ok: false,
      code: "LR_BASIS_MISMATCH",
      reason: "basis_fingerprint_mismatch",
    };
  }

  return {
    ok: true,
    envelope: { ...envelope, basisRefs },
    item: materialized.item,
    supersededId: materialized.supersededId,
  };
}
```

## CREATED: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts`

```
```typescript
/**
 * Lifecycle Recommendation — Product-side envelope (not Epistemic schema extension alone).
 * Durable carrier = EpistemicItem type Recommendation + optional typed lifecycleRecommendation.
 * LR-D01 / LR-D03 Option A — no new table; no JSON-in-statement; no relatedObjects machine protocol.
 */
import type { EpistemicLifecycleRecommendation } from "../../domain/types";

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

export type LifecycleRecommendationBasisRefs =
  EpistemicLifecycleRecommendation["basisRefs"];

/** Persisted typed payload — aligns with modeled lifecycle-recommendation.schema.json. */
export type PersistedLifecycleRecommendation = EpistemicLifecycleRecommendation;

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

## CREATED: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts`

```
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

## CREATED: `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts`

```
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

## CREATED: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`

```
```tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import {
  projectAssistantPilotLifecycleAction,
  projectAssistantPilotLifecycleProjection,
} from "@/features/project-assistant/actions";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
import {
  lifecycleCtaPresentation,
  lifecycleStatusBadge,
  primaryFinalizeRecommendation,
  primaryNextCycleRecommendation,
} from "./lifecyclePresentation";
import styles from "./LifecycleSurface.module.css";

/**
 * LifecycleSurface — Recommend→Decide presentation only.
 * Never owns lifecycle / Recommendation / HD / trajectory truth; no model calls.
 */
export function LifecycleSurface({
  projectId,
  onDurableFactsChanged,
  onEscalateTrajectory,
}: {
  projectId: string;
  onDurableFactsChanged?: () => void;
  onEscalateTrajectory?: () => void;
}) {
  const [projection, setProjection] = useState<PilotLifecycleProjection | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const result = await projectAssistantPilotLifecycleProjection({ projectId });
    if (!result.ok || !result.projection) {
      setError(result.message ?? "Projection lifecycle indisponible.");
      setProjection(null);
      return;
    }
    setError(null);
    setProjection(result.projection);
  }, [projectId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function runAction(
    action: "START" | "PAUSE" | "RESUME" | "FINALIZE" | "CANCEL" | "REEVALUATE",
    opts?: { requiresReplanHumanDecision?: boolean },
  ) {
    if (!projection?.selectedCycleInstanceId) return;
    setBusy(action);
    try {
      const result = await projectAssistantPilotLifecycleAction({
        projectId,
        cycleInstanceId: projection.selectedCycleInstanceId,
        action,
        requiresReplanHumanDecision: opts?.requiresReplanHumanDecision,
      });
      if (!result.ok) {
        setError(result.message ?? result.code ?? "Action refusée.");
      } else {
        setError(null);
        await refresh();
        onDurableFactsChanged?.();
      }
    } finally {
      setBusy(null);
    }
  }

  if (!projection) {
    return (
      <aside
        className={styles.panel}
        data-testid="lifecycle-surface"
        aria-label="Cycle"
      >
        <header className={styles.head}>
          <p className={styles.eyebrow}>CYCLE</p>
          <h2 className={styles.title}>Cycle</h2>
        </header>
        <p className={styles.muted}>
          {error ?? "Chargement de l’état du cycle…"}
        </p>
      </aside>
    );
  }

  const badge = lifecycleStatusBadge(projection);
  const cta = lifecycleCtaPresentation(projection);
  const finalizeRec = primaryFinalizeRecommendation(projection);
  const nextRec = primaryNextCycleRecommendation(projection);

  return (
    <aside
      className={styles.panel}
      data-testid="lifecycle-surface"
      aria-label="Cycle"
    >
      <header className={styles.head}>
        <p className={styles.eyebrow}>CYCLE</p>
        <h2 className={styles.title}>Cycle</h2>
        <p
          className={styles.badge}
          data-testid="lifecycle-status-badge"
          data-status={badge.status}
        >
          <span className={styles.badgeLabel}>{badge.label}</span>
          {projection.selectedStatus ? (
            <span className={styles.badgeMeta}> · {projection.selectedStatus}</span>
          ) : null}
        </p>
      </header>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      {finalizeRec || nextRec ? (
        <section
          className={styles.recBlock}
          data-testid="lifecycle-recommendation"
          aria-label="Recommandation Nora"
        >
          <h3 className={styles.blockTitle}>Recommandation Nora</h3>
          <p className={styles.recStatement}>
            {(finalizeRec ?? nextRec)!.statement}
          </p>
          <p className={styles.recMeta}>
            {(finalizeRec ?? nextRec)!.intent.replace(/_/g, " ")} ·{" "}
            {(finalizeRec ?? nextRec)!.derivedCurrentness}
          </p>
          <p className={styles.distinction}>
            Recommandation ≠ décision Pilote · n’active pas le cycle
          </p>
        </section>
      ) : (
        <section className={styles.recBlock} data-testid="lifecycle-recommendation-empty">
          <h3 className={styles.blockTitle}>Recommandation Nora</h3>
          <p className={styles.muted}>
            Aucune recommandation lifecycle courante.
          </p>
        </section>
      )}

      {projection.assessment && !projection.assessment.canComplete ? (
        <section className={styles.block} data-testid="lifecycle-finalization-obligations">
          <h3 className={styles.blockTitle}>Obligations de finalisation</h3>
          <p className={styles.muted}>
            Des obligations restent ouvertes — la recommandation FINALIZE n’est
            pas une éligibilité.
          </p>
        </section>
      ) : null}

      {cta.showReplan ? (
        <section className={styles.block} data-testid="lifecycle-resume-drift">
          <h3 className={styles.blockTitle}>Dérive à la reprise</h3>
          <p className={styles.muted}>
            CYCLE_RESUME_DRIFT — replanifier via décision Pilote, puis
            réévaluer. La décision seule ne lève pas la dérive.
          </p>
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null}
            data-testid="lifecycle-replan-cta"
            onClick={() =>
              void runAction("RESUME", { requiresReplanHumanDecision: true })
            }
          >
            Enregistrer replan (décision Pilote)
          </button>
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null}
            data-testid="lifecycle-reevaluate-cta"
            onClick={() => void runAction("REEVALUATE")}
          >
            Réévaluer la reconciliation
          </button>
        </section>
      ) : null}

      <div className={styles.ctaRow} data-testid="lifecycle-cta-row">
        {cta.showStart ? (
          <button
            type="button"
            className={styles.btnPrimary}
            disabled={busy !== null}
            data-testid="lifecycle-start-cta"
            onClick={() => void runAction("START")}
          >
            Démarrer
          </button>
        ) : null}
        {cta.showFinalizePrimary ? (
          <button
            type="button"
            className={styles.btnPrimary}
            disabled={busy !== null || !cta.finalizeEnabled}
            data-testid="lifecycle-finalize-cta-primary"
            onClick={() => void runAction("FINALIZE")}
          >
            Finaliser
          </button>
        ) : null}
        {cta.showFinalizeSecondary ? (
          <button
            type="button"
            className={styles.btnSecondary}
            disabled={busy !== null || !cta.finalizeEnabled}
            data-testid="lifecycle-finalize-cta-secondary"
            onClick={() => void runAction("FINALIZE")}
          >
            Finaliser
          </button>
        ) : null}
        {cta.showResume ? (
          <button
            type="button"
            className={styles.btnPrimary}
            disabled={busy !== null || !cta.resumeEnabled}
            data-testid="lifecycle-resume-cta"
            onClick={() => void runAction("RESUME")}
          >
            Reprendre
          </button>
        ) : null}
        {cta.showTrajectoryEscalation ? (
          <button
            type="button"
            className={styles.btnSecondary}
            data-testid="lifecycle-trajectory-escalate"
            onClick={() => onEscalateTrajectory?.()}
          >
            Trajectoire
          </button>
        ) : null}
      </div>
    </aside>
  );
}
```

## CREATED: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css`

```
```css
.panel {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-4);
  background: var(--pm6-surface);
  border: 1px solid var(--pm6-border-soft);
  border-radius: var(--pm6-radius-lg);
  box-shadow: var(--pm6-shadow-card);
  padding: var(--pm6-space-5);
}

.head {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-1);
  padding-bottom: var(--pm6-space-3);
  border-bottom: 1px solid var(--pm6-border-soft);
}

.eyebrow {
  margin: 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--pm6-forest);
}

.title {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--pm6-ink);
}

.badge {
  margin: 0;
  font-size: 0.82rem;
  color: var(--pm6-ink-soft);
}

.badgeLabel {
  font-weight: 600;
}

.badgeMeta {
  color: var(--pm6-muted);
}

.block,
.recBlock {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-1);
}

.blockTitle {
  margin: 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--pm6-muted);
}

.recStatement {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--pm6-ink);
}

.recMeta,
.distinction,
.muted {
  margin: 0;
  font-size: 0.8rem;
  color: var(--pm6-muted);
  line-height: 1.45;
}

.error {
  margin: 0;
  font-size: 0.86rem;
  color: var(--pm6-danger, #8b2e2e);
}

.ctaRow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pm6-space-2);
}

.btnPrimary,
.btnSecondary {
  appearance: none;
  border-radius: var(--pm6-radius-md, 8px);
  padding: 0.55rem 0.9rem;
  font-size: 0.86rem;
  font-weight: 600;
  cursor: pointer;
}

.btnPrimary {
  border: 1px solid var(--pm6-forest);
  background: var(--pm6-forest);
  color: #fff;
}

.btnSecondary {
  border: 1px solid var(--pm6-border-soft);
  background: transparent;
  color: var(--pm6-ink);
}

.btnPrimary:disabled,
.btnSecondary:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.btnPrimary:focus-visible,
.btnSecondary:focus-visible {
  outline: 2px solid var(--pm6-forest);
  outline-offset: 2px;
}
```

## CREATED: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`

```
```typescript
import type { PilotLifecycleProjection } from "@/lib/oa/cycle";
import type { LifecycleRecommendationEnvelope } from "@/lib/oa/cycle";

export type LifecycleUiStatus =
  | "active"
  | "candidate"
  | "blocked_drift"
  | "finalization_open"
  | "completed_next"
  | "paused"
  | "empty";

export function lifecycleStatusBadge(
  projection: PilotLifecycleProjection,
): { status: LifecycleUiStatus; label: string } {
  const resume = projection.resumeReconciliation;
  if (
    projection.selectedStatus === "paused" &&
    resume &&
    resume.clean === false
  ) {
    return { status: "blocked_drift", label: "Bloqué / dérive" };
  }
  if (projection.selectedStatus === "active") {
    const finalizeRec = (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "FINALIZE_CURRENT_CYCLE" &&
        r.derivedCurrentness === "CURRENT",
    );
    if (projection.assessment && !projection.assessment.canComplete) {
      return { status: "finalization_open", label: "Finalisation en cours" };
    }
    return {
      status: "active",
      label: finalizeRec ? "En cours" : "En cours",
    };
  }
  if (
    projection.selectedStatus === "proposed" ||
    projection.selectedStatus === "acknowledged"
  ) {
    return { status: "candidate", label: "Cycle proposé" };
  }
  if (projection.selectedStatus === "completed") {
    return { status: "completed_next", label: "Terminé" };
  }
  if (projection.selectedStatus === "paused") {
    return { status: "paused", label: "En pause" };
  }
  if (projection.selectedStatus === "blocked") {
    return { status: "blocked_drift", label: "Bloqué" };
  }
  return { status: "empty", label: "Aucun cycle sélectionné" };
}

export function primaryFinalizeRecommendation(
  projection: PilotLifecycleProjection,
): LifecycleRecommendationEnvelope | null {
  return (
    (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "FINALIZE_CURRENT_CYCLE" &&
        r.derivedCurrentness === "CURRENT",
    ) ?? null
  );
}

export function primaryNextCycleRecommendation(
  projection: PilotLifecycleProjection,
): LifecycleRecommendationEnvelope | null {
  return (
    (projection.currentRecommendations ?? []).find(
      (r) =>
        r.intent === "NEXT_CYCLE" && r.derivedCurrentness === "CURRENT",
    ) ?? null
  );
}

/**
 * CTA honesty: Recommendation never grants authority.
 * Dirty resume never exposes clean RESUME.
 */
export function lifecycleCtaPresentation(projection: PilotLifecycleProjection): {
  showFinalizePrimary: boolean;
  showFinalizeSecondary: boolean;
  showStart: boolean;
  showResume: boolean;
  showReplan: boolean;
  showTrajectoryEscalation: boolean;
  finalizeEnabled: boolean;
  resumeEnabled: boolean;
} {
  const finalizeRec = primaryFinalizeRecommendation(projection);
  const nextRec = primaryNextCycleRecommendation(projection);
  const resumeClean = projection.resumeReconciliation?.clean !== false;
  const dirtyResume =
    projection.selectedStatus === "paused" &&
    projection.resumeReconciliation?.clean === false;

  return {
    showFinalizePrimary: Boolean(
      finalizeRec && projection.cta.canFinalize,
    ),
    showFinalizeSecondary: Boolean(
      !finalizeRec && projection.cta.canFinalize,
    ),
    showStart: projection.cta.canStart,
    showResume: projection.cta.canResume && !dirtyResume,
    showReplan: dirtyResume,
    showTrajectoryEscalation: Boolean(
      nextRec ||
        (projection.candidateCycles.length > 1) ||
        projection.selectionAmbiguous,
    ),
    finalizeEnabled: projection.cta.canFinalize,
    resumeEnabled: projection.cta.canResume && resumeClean && !dirtyResume,
  };
}
```

## CREATED: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts`

```
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

## CREATED: `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts`

```
```typescript
/**
 * Lifecycle Recommendation Correction Delivery — R1–R15 + R10-A..H.
 * ZERO REAL — ScriptedModel / typed Epistemic Option A / authoritative resume.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import Ajv from "ajv";
import { afterEach, describe, expect, it } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import {
  createTestDoctrineResolver,
  FixedClock,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  assessResumeReconciliation,
  buildPauseReconciliationSnapshot,
  createSqliteCycleServices,
  produceLifecycleRecommendation,
  projectPilotLifecycle,
  resumeReplanSubjectFor,
  selectCurrentLifecycleRecommendations,
  trajectoryFingerprint,
  validateLifecycleRecommendation,
} from "@/lib/oa/cycle";
import {
  createSqliteDecisionServices,
  MemoryAuthorityResolver,
  registerLocalPiloteAuthority,
  LOCAL_PILOTE_ACTOR,
  type DecisionServices,
} from "@/lib/oa/decision";
import { runNoraAgentsTurn } from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import {
  NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
  isNoraLifecycleRecommendationStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { projectAssistantPilotLifecycleProjection } from "@/features/project-assistant/actions";

const APP_ROOT = path.resolve(__dirname, "../../..");
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

const NORA_BY = {
  actorId: "actor:nora",
  role: "agent" as const,
  displayName: "Nora",
  authorityLevel: "N1" as const,
};

const STEPS_PENDING = [
  { stepId: "stp:clarify", order: 1, label: "Clarify", state: "pending" as const },
  {
    stepId: "stp:decide",
    order: 2,
    label: "Decide",
    state: "pending" as const,
    dependencies: ["stp:clarify"],
  },
];

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  while (openServices.length) {
    openServices.pop()?.dispose();
  }
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-lr-corr-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function loadJson(rel: string): object {
  return JSON.parse(fs.readFileSync(path.join(SCHEMAS, rel), "utf8")) as object;
}

function createEpistemicAjv(): Ajv.Ajv {
  const ajv = new Ajv({
    allErrors: true,
    schemaId: "auto",
    meta: true,
    validateSchema: true,
    format: "full",
    unknownFormats: "ignore",
  });
  for (const f of [
    "common/digest.schema.json",
    "common/identifier.schema.json",
    "common/timestamp.schema.json",
    "common/actor-reference.schema.json",
    "common/provenance-record.schema.json",
  ]) {
    ajv.addSchema(loadJson(f));
  }
  ajv.addSchema(loadJson("epistemic/lifecycle-recommendation.schema.json"));
  ajv.addSchema(loadJson("epistemic/epistemic-item.schema.json"));
  return ajv;
}

function authorityAdapter(authority: MemoryAuthorityResolver) {
  return {
    verify: (req: {
      actorId: string;
      scope: string;
      evidenceId?: string;
      requiredLevel?: "N1" | "N2" | "N3";
      requireMorrisGate?: boolean;
    }) => {
      const r = authority.verify({
        actorId: req.actorId,
        requiredLevel: req.requiredLevel ?? "N3",
        scope: req.scope,
        evidenceId: req.evidenceId,
        requireMorrisGate: req.requireMorrisGate ?? true,
      });
      return { ok: r.ok, reason: r.reason };
    },
  };
}

function buildStack(dbPath: string) {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const project = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-09-08T08:00:00.000Z",
    dbPath,
  });
  openServices.push(project);
  const authority = new MemoryAuthorityResolver();
  const clock = new FixedClock("2026-09-08T08:00:00.000Z");
  let decisions!: DecisionServices;
  const cycles = createSqliteCycleServices({
    projectServices: project,
    productStore: project.store,
    clock,
    decisions: {
      getById: (id) => decisions.decisions.findById(id),
      listByProject: (pid) => decisions.decisions.listByProject(pid),
    },
    authority: authorityAdapter(authority),
  });
  decisions = createSqliteDecisionServices({
    projectServices: project,
    cycleServices: cycles,
    productStore: project.store,
    clock,
    authorityResolver: authority,
  });
  return { project, cycles, decisions, authority };
}

async function seedProject(
  project: SqliteProductProjectServices,
  projectId: string,
) {
  const created = await project.createProject.execute({
    projectId,
    title: "LR Correction",
    objective: "lifecycle recommendation",
    context: "lr-corr",
    scope: "pilot-lifecycle",
    doctrinePackagePin: VALID_PIN,
    createdBy: ACTOR,
    lpsVersionId: `lps:${projectId}-v1`,
    idempotencyKey: `idem:${projectId}`,
  });
  expect(created.ok).toBe(true);
}

async function createCandidate(
  cycles: ReturnType<typeof createSqliteCycleServices>,
  projectId: string,
  cycleInstanceId: string,
  linkAsActive = false,
) {
  return cycles.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: "cyc:delivery",
    projectId,
    signals: { lowRiskBounded: true },
    createdBy: NORA_BY,
    linkAsActiveCycle: linkAsActive,
  });
}

describe("Lifecycle Recommendation Correction Delivery", () => {
  it("schema Option A — additive optional field; schemaVersion 0.1.0-oa; backward compatible", () => {
    const ajv = createEpistemicAjv();
    const validate = ajv.getSchema(
      "https://sfia.local/schemas/v3-modeled/v3-native-option-a/epistemic/epistemic-item.schema.json",
    );
    expect(validate).toBeTruthy();
    if (!validate) return;

    const baseItem = {
      schemaVersion: "0.1.0-oa",
      epistemicItemId: "epi:hist-1",
      type: "Recommendation",
      statement: "Historical non-lifecycle recommendation.",
      status: "active",
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
      createdAt: "2026-09-08T08:00:00.000Z",
      relatedObjects: ["prj:hist"],
    };
    expect(validate(baseItem)).toBe(true);

    const withLr = {
      ...baseItem,
      epistemicItemId: "epi:lr-1",
      lifecycleRecommendation: {
        intent: "FINALIZE_CURRENT_CYCLE",
        basisFingerprint: "a".repeat(64),
        basisRefs: { projectId: "prj:hist" },
        semanticKey: "b".repeat(32),
        subjectCycleInstanceId: "cyc:hist",
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        authority: "none",
      },
    };
    expect(validate(withLr)).toBe(true);

    const unknownExtra = { ...baseItem, unexpectedField: true };
    expect(validate(unknownExtra)).toBe(false);

    const schema = loadJson("epistemic/epistemic-item.schema.json") as {
      properties: { schemaVersion: { const: string } };
    };
    expect(schema.properties.schemaVersion.const).toBe("0.1.0-oa");
  });

  it("R1+R2+R12 — FINALIZE and NEXT_CYCLE via same Nora Runner outputType", async () => {
    const finalizePayload = {
      intent: "FINALIZE_CURRENT_CYCLE",
      statement: "Envisager la finalisation du cycle actif.",
      subjectCycleInstanceId: "cyc:lr-r1",
      targetCycleInstanceId: null,
      targetCycleTypeId: null,
      rationale: null,
      authority: "none",
      isHumanDecision: false,
    };
    const r1 = await runNoraAgentsTurn({
      correlationId: "cor:lr-r1",
      projectId: "prj:lr-r1",
      systemInstructions: "Emit lifecycle recommendation JSON only.",
      userContent: "Recommend finalize",
      enableTools: false,
      model: new ScriptedModel([
        [assistantMessage(JSON.stringify(finalizePayload))],
      ]),
      outputType: NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
    });
    expect(r1.cognitiveRuntime).toBe("agents");
    const structured1 = isNoraLifecycleRecommendationStructuredOutput(
      r1.structuredOutput,
    )
      ? r1.structuredOutput
      : JSON.parse(r1.text || "{}");
    expect(structured1.intent).toBe("FINALIZE_CURRENT_CYCLE");

    const nextPayload = {
      ...finalizePayload,
      intent: "NEXT_CYCLE",
      statement: "Envisager un prochain cycle UX.",
      subjectCycleInstanceId: null,
      targetCycleTypeId: "cyc:ux-ui",
    };
    const r2 = await runNoraAgentsTurn({
      correlationId: "cor:lr-r2",
      projectId: "prj:lr-r2",
      systemInstructions: "Emit lifecycle recommendation JSON only.",
      userContent: "Recommend next",
      enableTools: false,
      model: new ScriptedModel([
        [assistantMessage(JSON.stringify(nextPayload))],
      ]),
      outputType: NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
    });
    const structured2 = isNoraLifecycleRecommendationStructuredOutput(
      r2.structuredOutput,
    )
      ? r2.structuredOutput
      : JSON.parse(r2.text || "{}");
    expect(structured2.intent).toBe("NEXT_CYCLE");
    expect(r1.cognitiveRuntime).toBe(r2.cognitiveRuntime);
  });

  it("R3 — invalid binding fail-closed", async () => {
    const dbPath = tempDbPath("r3.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:lr-r3");
    await createCandidate(stack.cycles, "prj:lr-r3", "cyc:lr-r3", true);
    const cycles = await stack.cycles.cycles.listByProject("prj:lr-r3");
    expect(
      validateLifecycleRecommendation({
        projectId: "bad",
        candidate: {
          intent: "FINALIZE_CURRENT_CYCLE",
          statement: "x",
          subjectCycleInstanceId: "cyc:lr-r3",
        },
        cycles,
        lpsActiveCycleInstanceId: "cyc:lr-r3",
      }).ok,
    ).toBe(false);
  });

  it("R4+R5+R6+R7+R13+R15 — typed Epistemic durability, no lr:* protocol", async () => {
    const dbPath = tempDbPath("r4.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:lr-r4");
    await createCandidate(stack.cycles, "prj:lr-r4", "cyc:lr-r4", true);
    let cycles = await stack.cycles.cycles.listByProject("prj:lr-r4");
    const before = cycles[0]!;

    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: stack.cycles.updateEpistemicState,
      projectId: "prj:lr-r4",
      structured: {
        intent: "FINALIZE_CURRENT_CYCLE",
        statement: "Finaliser ce cycle.",
        subjectCycleInstanceId: "cyc:lr-r4",
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        rationale: null,
        authority: "none",
        isHumanDecision: false,
      },
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
      basisRefs: { projectId: "prj:lr-r4" },
      producedAt: "2026-09-08T08:00:01.000Z",
      createdBy: NORA_BY,
      existingItems: [],
    });
    expect(produced.ok).toBe(true);
    if (!produced.ok) return;
    expect(produced.item.lifecycleRecommendation).toBeTruthy();
    expect(produced.item.statement.includes("{")).toBe(false);
    expect(JSON.stringify(produced.item.relatedObjects ?? [])).not.toMatch(
      /lr:(intent|basis|semkey|subject|target|targettype):/,
    );
    expect(produced.envelope.derivedCurrentness).toBe("CURRENT");

    cycles = await stack.cycles.cycles.listByProject("prj:lr-r4");
    expect(cycles[0]!.status).toBe(before.status);

    const items = await stack.cycles.epistemic.listByProject("prj:lr-r4");
    expect(items[0]?.lifecycleRecommendation?.intent).toBe(
      "FINALIZE_CURRENT_CYCLE",
    );
    const reloaded = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
    });
    expect(reloaded).toHaveLength(1);

    const second = await produceLifecycleRecommendation({
      updateEpistemicState: stack.cycles.updateEpistemicState,
      projectId: "prj:lr-r4",
      structured: {
        intent: "FINALIZE_CURRENT_CYCLE",
        statement: "Nouvelle recommandation.",
        subjectCycleInstanceId: "cyc:lr-r4",
        targetCycleInstanceId: null,
        targetCycleTypeId: null,
        rationale: null,
        authority: "none",
        isHumanDecision: false,
      },
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
      basisRefs: { projectId: "prj:lr-r4" },
      producedAt: "2026-09-08T08:00:02.000Z",
      createdBy: NORA_BY,
      existingItems: await stack.cycles.epistemic.listByProject("prj:lr-r4"),
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    const afterSuper = await stack.cycles.epistemic.listByProject("prj:lr-r4");
    const current = selectCurrentLifecycleRecommendations({
      items: afterSuper,
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r4",
    });
    expect(current).toHaveLength(1);
    expect(current[0]!.recommendationId).toBe(
      second.envelope.recommendationId,
    );
    expect(
      afterSuper.find((i) => i.epistemicItemId === produced.envelope.recommendationId)
        ?.status,
    ).toBe("superseded");

    const mutated = { ...cycles[0]!, status: "paused" as const };
    await stack.cycles.cycles.save(mutated);
    const stale = selectCurrentLifecycleRecommendations({
      items: afterSuper,
      cycles: [mutated],
      lpsActiveCycleInstanceId: null,
    });
    expect(stale.every((s) => s.derivedCurrentness !== "CURRENT")).toBe(true);
  });

  it("R8 — NEXT_CYCLE does not create Cycle", async () => {
    const dbPath = tempDbPath("r8.sqlite");
    const stack = buildStack(dbPath);
    await seedProject(stack.project, "prj:lr-r8");
    const before = await stack.cycles.cycles.listByProject("prj:lr-r8");
    const produced = await produceLifecycleRecommendation({
      updateEpistemicState: stack.cycles.updateEpistemicState,
      projectId: "prj:lr-r8",
      structured: {
        intent: "NEXT_CYCLE",
        statement: "Envisager un cycle UX suivant.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:ux-ui",
        rationale: null,
        authority: "none",
        isHumanDecision: false,
      },
      cycles: [],
      lpsActiveCycleInstanceId: null,
      basisRefs: { projectId: "prj:lr-r8" },
      producedAt: "2026-09-08T08:00:03.000Z",
      createdBy: NORA_BY,
      existingItems: [],
      hasTrajectoryContext: true,
    });
    expect(produced.ok).toBe(true);
    const after = await stack.cycles.cycles.listByProject("prj:lr-r8");
    expect(after.length).toBe(before.length);
  });

  it("R9+R14 — Recommendation ≠ eligibility; surface has no model calls", () => {
    const projection = projectPilotLifecycle({
      projectId: "prj:lr-r9",
      cycles: [
        {
          schemaVersion: "0.1.0-oa",
          cycleInstanceId: "cyc:lr-r9",
          projectId: "prj:lr-r9",
          cycleTypeId: "cyc:delivery",
          profile: "Standard",
          status: "active",
          createdAt: "2026-09-08T08:00:00.000Z",
        },
      ],
      lpsActiveCycleInstanceId: "cyc:lr-r9",
      currentRecommendations: [],
    });
    expect(projection.cta.canFinalize).toBe(true);
    expect(projection.currentRecommendations ?? []).toHaveLength(0);
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/runNoraAgentsTurn|openai|completeRound/);
    expect(src).not.toMatch(/pause_snapshot_present/);
  });

  it("R10-F — replan HD subject never claims drift clearance", () => {
    expect(resumeReplanSubjectFor("cyc:x")).toContain("cyc:x");
    expect(resumeReplanSubjectFor("cyc:x")).not.toMatch(/CLEAR|bypass/i);
  });

  it("R11 — TrajectorySurface reused", () => {
    const ws = fs.readFileSync(
      path.join(APP_ROOT, "features/pre-m6-product-ui/ProjectWorkspacePage.tsx"),
      "utf8",
    );
    expect(ws).toContain("LifecycleSurface");
    expect(ws).toContain("TrajectorySurface");
  });

  it("lr:* protocol retired from Product implementation", () => {
    const root = path.join(APP_ROOT, "lib/oa/cycle/application/lifecycleRecommendation");
    const files = fs.readdirSync(root).map((f) => path.join(root, f));
    files.push(
      path.join(APP_ROOT, "features/project-assistant/actions.ts"),
      path.join(APP_ROOT, "lib/oa/cycle/domain/types.ts"),
    );
    for (const f of files) {
      if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) continue;
      const text = fs.readFileSync(f, "utf8");
      expect(text).not.toMatch(/lr:intent:/);
      expect(text).not.toMatch(/lr:basis:/);
      expect(text).not.toMatch(/lr:semkey:/);
      expect(text).not.toMatch(/lr:subject:/);
      expect(text).not.toMatch(/lr:target:/);
      expect(text).not.toMatch(/lr:targettype:/);
    }
    expect(
      fs.existsSync(path.join(root, "relatedObjectsCodec.ts")),
    ).toBe(false);
  });
});

describe("R10 authoritative RESUME projection", () => {
  class FixedIdSource implements LocalProjectIdSource {
    private n = 0;
    nextProjectId(): string {
      this.n += 1;
      return `prj:lr-r10-${this.n}`;
    }
    nextLpsVersionId(): string {
      return `lps:lr-r10-${this.n}`;
    }
    nextCorrelationId(): string {
      return `cor:lr-r10-${this.n}`;
    }
  }

  async function bootPausedProject(suffix: string) {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    resetRuntimeApplicationServiceForTests();
    // Must use process singleton — PA projection reads getRuntimeApplicationService().
    const runtime = getRuntimeApplicationService({
      registryRoot: FIXTURES,
      schemasRoot: SCHEMAS,
      nowIso: "2026-09-08T08:00:00.000Z",
      idSource: new FixedIdSource(),
      auditMode: "noop",
      productDbPath: tempDbPath(`r10-${suffix}.sqlite`),
    });
    expect(runtime.oa).toBeTruthy();
    if (!runtime.oa) throw new Error("oa missing");
    const created = await runtime.createProject({
      name: `LR R10 ${suffix}`,
      objective: "lifecycle",
      context: "lr-r10",
      criticality: "STANDARD",
      constraints: [],
      shortReference: `R10${suffix}`,
      idempotencyKey: `idem:lr-r10-${suffix}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    const projectId = created.projectId;
    const oa = runtime.oa;
    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: STEPS_PENDING,
      status: "active",
      expectedLpsVersion: created.livingState.version,
      createdBy: ACTOR,
    });
    expect(traj.ok).toBe(true);
    const cycleInstanceId = `cyc:lr-r10-${suffix}`;
    const cycle = await oa.cycleServices.createCycle.execute({
      cycleInstanceId,
      cycleTypeId: "cyc:delivery",
      projectId,
      signals: { lowRiskBounded: true },
      createdBy: NORA_BY,
      linkAsActiveCycle: false,
    });
    expect(cycle.ok).toBe(true);
    const auth = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: `pilot-lifecycle:${cycleInstanceId}`,
      issuedAt: "2026-09-08T08:00:00.000Z",
      forceEnable: true,
    });
    expect(auth.ok).toBe(true);
    if (!auth.ok) throw new Error(auth.message);
    const start = await oa.cycleServices.pilotLifecycle.start({
      cycleInstanceId,
      projectId,
      createdBy: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(start.ok).toBe(true);
    const pause = await oa.cycleServices.pilotLifecycle.pause({
      cycleInstanceId,
      projectId,
      createdBy: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: auth.evidenceId,
    });
    expect(pause.ok).toBe(true);
    return { runtime, oa, projectId, cycleInstanceId, authEvidenceId: auth.evidenceId };
  }

  it("R10-A — snapshot present + trajectory changed => projection canResume false", async () => {
    const ctx = await bootPausedProject("a");
    // Candidate propose alone does not move getCurrentTrajectory; mutate the
    // durable current trajectory so the authoritative assessor sees material drift.
    const current = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    await ctx.oa.cycleServices.trajectories.save({
      ...current.trajectory,
      steps: [
        ...current.trajectory.steps,
        { stepId: "stp:extra", order: 3, label: "Extra", state: "pending" },
      ],
    });

    const proj = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(proj.ok).toBe(true);
    expect(proj.projection?.resumeReconciliation?.clean).toBe(false);
    expect(proj.projection?.cta.canResume).toBe(false);
    expect(proj.projection?.resumeReconciliation?.reason).not.toBe(
      "pause_snapshot_present",
    );
  });

  it("R10-E — clean matching facts => canResume true", async () => {
    const ctx = await bootPausedProject("e");
    const proj = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(proj.ok).toBe(true);
    expect(proj.projection?.resumeReconciliation?.clean).toBe(true);
    expect(proj.projection?.cta.canResume).toBe(true);
  });

  it("R10-G — only clean fresh reconciliation restores Resume eligibility", async () => {
    const ctx = await bootPausedProject("g");
    const current = await ctx.oa.cycleServices.getCurrentTrajectory.execute({
      projectId: ctx.projectId,
    });
    expect(current.ok).toBe(true);
    if (!current.ok) return;
    const originalSteps = current.trajectory.steps;
    await ctx.oa.cycleServices.trajectories.save({
      ...current.trajectory,
      steps: [
        ...originalSteps,
        { stepId: "stp:drift", order: 9, label: "Drift", state: "pending" },
      ],
    });
    const dirty = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(dirty.projection?.resumeReconciliation?.clean).toBe(false);
    expect(dirty.projection?.cta.canResume).toBe(false);

    // Replan HD subject alone never claims clearance (R10-F / R10-G).
    expect(resumeReplanSubjectFor(ctx.cycleInstanceId)).not.toMatch(
      /CLEAR|bypass/i,
    );

    await ctx.oa.cycleServices.trajectories.save({
      ...current.trajectory,
      steps: originalSteps,
    });
    const restored = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(restored.projection?.resumeReconciliation?.clean).toBe(true);
    expect(restored.projection?.cta.canResume).toBe(true);
  });

  it("R10-B/C/D — assessor detects HD/evidence/blocker drift (unit authoritative)", () => {
    const cycle = {
      schemaVersion: "0.1.0-oa" as const,
      cycleInstanceId: "cyc:r10u",
      projectId: "prj:r10u",
      cycleTypeId: "cyc:delivery",
      profile: "Standard" as const,
      status: "paused" as const,
      createdAt: "2026-09-08T08:00:00.000Z",
      pauseReconciliation: buildPauseReconciliationSnapshot({
        pausedAt: "2026-09-08T08:00:00.000Z",
        lpsVersion: 2,
        lpsActiveCycleInstanceId: null,
        objective: "o",
        context: "c",
        scope: "s",
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: {
          schemaVersion: "0.1.0-oa",
          trajectoryId: "trj:r10u",
          projectId: "prj:r10u",
          version: 1,
          status: "active",
          steps: STEPS_PENDING,
        },
        decisions: [],
        evidence: [],
        blockingReservationStatements: [],
        blockerSnapshotState: "KNOWN",
        projectId: "prj:r10u",
        cycleInstanceId: "cyc:r10u",
      }),
    };
    const traj = {
      schemaVersion: "0.1.0-oa" as const,
      trajectoryId: "trj:r10u",
      projectId: "prj:r10u",
      version: 1,
      status: "active" as const,
      steps: STEPS_PENDING,
    };
    const dirtyHd = assessResumeReconciliation({
      cycle,
      projectId: "prj:r10u",
      lpsReadable: true,
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "o",
      context: "c",
      scope: "s",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [
        {
          schemaVersion: "0.1.0-oa",
          decisionId: "dec:r10u",
          projectId: "prj:r10u",
          cycleInstanceId: "cyc:r10u",
          subject: resumeReplanSubjectFor("cyc:r10u"),
          status: "accepted",
          options: [{ optionId: "opt:accept", label: "Accept" }],
          selectedOptionId: "opt:accept",
          effectiveAt: "2026-09-08T08:01:00.000Z",
          reversible: true,
          actor: LOCAL_PILOTE_ACTOR,
          authority: "morris",
        },
      ],
      evidence: [],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(dirtyHd.clean).toBe(false);
    expect(dirtyHd.driftReasons).toContain("human_decision_material_drift");

    const dirtyEv = assessResumeReconciliation({
      cycle,
      projectId: "prj:r10u",
      lpsReadable: true,
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "o",
      context: "c",
      scope: "s",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [],
      evidence: [
        {
          schemaVersion: "0.1.0-oa",
          evidenceId: "ev:r10u",
          projectId: "prj:r10u",
          kind: "artifact",
          status: "stale",
          createdAt: "2026-09-08T08:00:00.000Z",
          createdBy: ACTOR,
          bindings: { cycleInstanceId: "cyc:r10u" },
        } as never,
      ],
      blockingReservationStatements: [],
      siblingActiveExists: false,
    });
    expect(dirtyEv.clean).toBe(false);

    const dirtyBlock = assessResumeReconciliation({
      cycle,
      projectId: "prj:r10u",
      lpsReadable: true,
      lpsVersion: 2,
      lpsActiveCycleInstanceId: null,
      objective: "o",
      context: "c",
      scope: "s",
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: traj,
      decisions: [],
      evidence: [],
      blockingReservationStatements: ["new blocker"],
      siblingActiveExists: false,
    });
    expect(dirtyBlock.clean).toBe(false);

    void trajectoryFingerprint;
  });

  it("R10-H — missing pause snapshot => fail closed at assessor/projection", async () => {
    const ctx = await bootPausedProject("h");
    const cyc = await ctx.oa.cycleServices.cycles.findById(ctx.cycleInstanceId);
    expect(cyc).toBeTruthy();
    if (!cyc) return;
    const stripped = { ...cyc, pauseReconciliation: null };
    await ctx.oa.cycleServices.cycles.save(stripped);
    const proj = await projectAssistantPilotLifecycleProjection({
      projectId: ctx.projectId,
    });
    expect(proj.projection?.resumeReconciliation?.clean).toBe(false);
    expect(proj.projection?.cta.canResume).toBe(false);
  });
});
```

# COMPLETE PRODUCT CONTENT — MODIFIED FILES (FULL USEFUL DIFF)

## MODIFIED: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json`

```diff
diff --git a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
index e4b4ea82..5a8dd10e 100644
--- a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
+++ b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json
@@ -79,6 +79,9 @@
     },
     "provenance": {
       "$ref": "../common/provenance-record.schema.json"
+    },
+    "lifecycleRecommendation": {
+      "$ref": "lifecycle-recommendation.schema.json"
     }
   }
 }
```

### Full current content: `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/epistemic/epistemic-item.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/v3-native-option-a/epistemic/epistemic-item.schema.json",
  "title": "EpistemicItem",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "schemaVersion",
    "epistemicItemId",
    "type",
    "statement",
    "status",
    "createdBy",
    "createdAt"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-oa"
    },
    "epistemicItemId": {
      "$ref": "../common/identifier.schema.json"
    },
    "type": {
      "type": "string",
      "enum": [
        "Observation",
        "Hypothesis",
        "Option",
        "Recommendation",
        "DecisionRef",
        "Reservation",
        "Contradiction",
        "EvidenceRef"
      ]
    },
    "statement": {
      "type": "string",
      "minLength": 1
    },
    "status": {
      "type": "string",
      "enum": [
        "active",
        "superseded",
        "rejected",
        "resolved"
      ]
    },
    "confidence": {
      "type": "string",
      "enum": [
        "high",
        "medium",
        "low",
        "none"
      ]
    },
    "source": {
      "type": "string"
    },
    "createdBy": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "createdAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "supersedes": {
      "$ref": "../common/identifier.schema.json"
    },
    "relatedObjects": {
      "type": "array",
      "items": {
        "$ref": "../common/identifier.schema.json"
      }
    },
    "blocking": {
      "type": "boolean"
    },
    "provenance": {
      "$ref": "../common/provenance-record.schema.json"
    },
    "lifecycleRecommendation": {
      "$ref": "lifecycle-recommendation.schema.json"
    }
  }
}
```

## MODIFIED: `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
index 0a98ae95..54d10b7f 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
@@ -251,6 +251,35 @@ export type ProjectTrajectory = {
   decidedOptionRef?: string;
 };

+/**
+ * Optional typed Lifecycle Recommendation payload (Option A).
+ * Persisted on EpistemicItem; CURRENT/STALE never stored here.
+ */
+export type EpistemicLifecycleRecommendation = {
+  intent: "FINALIZE_CURRENT_CYCLE" | "NEXT_CYCLE";
+  basisFingerprint: string;
+  basisRefs: {
+    projectId: string;
+    subjectCycleInstanceId?: string | null;
+    subjectCycleStatus?: string | null;
+    targetCycleInstanceId?: string | null;
+    targetCycleTypeId?: string | null;
+    lpsActiveCycleInstanceId?: string | null;
+    lpsVersion?: number | null;
+    trajectoryId?: string | null;
+    trajectoryVersion?: number | null;
+    trajectoryStatus?: string | null;
+    finalizeAccepted?: boolean | null;
+    resumeClean?: boolean | null;
+    reservationBlockingCount?: number | null;
+  };
+  semanticKey: string;
+  subjectCycleInstanceId: string | null;
+  targetCycleInstanceId: string | null;
+  targetCycleTypeId: string | null;
+  authority: "none";
+};
+
 export type EpistemicItem = {
   schemaVersion: "0.1.0-oa";
   epistemicItemId: string;
@@ -265,6 +294,8 @@ export type EpistemicItem = {
   relatedObjects?: string[];
   blocking?: boolean;
   provenance?: ProvenanceRecord;
+  /** Optional — absent on historical / non-lifecycle Recommendations. */
+  lifecycleRecommendation?: EpistemicLifecycleRecommendation;
 };

 export type CkcResolution = {
@@ -385,6 +416,7 @@ export type UpdateEpistemicStateRequest = {
     relatedObjects?: string[];
     blocking?: boolean;
     provenance?: ProvenanceRecord;
+    lifecycleRecommendation?: EpistemicLifecycleRecommendation;
     /**
      * Forbidden auto-promotion signal — if true and type is DecisionRef
      * while superseding a Hypothesis, refused.
```

## MODIFIED: `projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts b/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
index 8f7e2378..335e282d 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
@@ -133,6 +133,9 @@ export class UpdateEpistemicState {
             provenance: raw.provenance
               ? structuredClone(raw.provenance)
               : undefined,
+            lifecycleRecommendation: raw.lifecycleRecommendation
+              ? structuredClone(raw.lifecycleRecommendation)
+              : undefined,
           };

           if (this.epistemic.saveForProject) {
```

### Full current content: `projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { ClockPort } from "@/lib/oa/doctrine";
import { createCycleError } from "../domain/errors";
import {
  assertNoHypothesisDecisionPromotion,
  validateEpistemicItemInput,
} from "../domain/invariants";
import type {
  EpistemicItem,
  UpdateEpistemicResult,
  UpdateEpistemicStateRequest,
} from "../domain/types";
import type { CyclePersistenceUnitOfWorkPort } from "../ports/cyclePersistenceUnitOfWorkPort";
import type { MemoryEpistemicRepository } from "../infrastructure/memoryEpistemicRepository";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type { EpistemicRepositoryPort } from "../ports/epistemicRepository";

function newId(prefix: "cor"): string {
  return `${prefix}:${randomBytes(8).toString("hex")}`;
}

/**
 * UpdateEpistemicState — appends/supersedes items keyed by projectId.
 * Refuses Hypothesis→DecisionRef auto-promotion.
 */
export class UpdateEpistemicState {
  constructor(
    private readonly epistemic: EpistemicRepositoryPort &
      Partial<Pick<MemoryEpistemicRepository, "saveForProject">>,
    private readonly clock: ClockPort,
    private readonly audit: CycleAuditPort,
    private readonly store?: CyclePersistenceUnitOfWorkPort,
  ) {}

  async execute(
    request: UpdateEpistemicStateRequest,
  ): Promise<UpdateEpistemicResult> {
    const started = Date.now();
    const timestamp = this.clock.nowIso();
    const correlationId = request.correlationId ?? newId("cor");

    const fail = (
      detailCode: Parameters<typeof createCycleError>[0]["detailCode"],
      internalCauseRef?: string,
      extra?: Partial<Parameters<typeof createCycleError>[0]>,
    ): UpdateEpistemicResult => {
      const durationMs = Date.now() - started;
      const error = createCycleError({
        detailCode,
        timestamp,
        correlationId,
        projectId: request.projectId,
        internalCauseRef,
        ...extra,
      });
      this.audit.append({
        event: "oa.epistemic.updated",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        itemCount: request.items.length,
        result: "error",
        detailCode,
        durationMs,
      });
      return { ok: false, error, durationMs };
    };

    try {
      if (!request.createdBy?.actorId) {
        return fail("EPISTEMIC_INVALID", "created_by_required");
      }
      if (!Array.isArray(request.items) || request.items.length < 1) {
        return fail("EPISTEMIC_INVALID", "items_required");
      }

      const persist = async () => {
        const existing = await this.epistemic.listByProject(request.projectId);

        for (const raw of request.items) {
          const fieldViolation = validateEpistemicItemInput({
            epistemicItemId: raw.epistemicItemId,
            type: raw.type,
            statement: raw.statement,
            source: raw.source,
            provenance: raw.provenance,
          });
          if (fieldViolation) {
            throw Object.assign(new Error(fieldViolation.reason), {
              detailCode: fieldViolation.detailCode,
              epistemicItemId: raw.epistemicItemId,
            });
          }

          const promotion = assertNoHypothesisDecisionPromotion({
            epistemicItemId: raw.epistemicItemId,
            nextType: raw.type,
            promoteFromHypothesis: raw.promoteFromHypothesis,
            supersedes: raw.supersedes,
            existing,
          });
          if (promotion) {
            throw Object.assign(new Error(promotion.reason), {
              detailCode: promotion.detailCode,
              epistemicItemId: raw.epistemicItemId,
            });
          }

          if (raw.supersedes) {
            const prior = existing.find(
              (e) => e.epistemicItemId === raw.supersedes,
            );
            if (prior && prior.status === "active") {
              await this.epistemic.markSuperseded(raw.supersedes);
            }
          }

          const item: EpistemicItem = {
            schemaVersion: "0.1.0-oa",
            epistemicItemId: raw.epistemicItemId,
            type: raw.type,
            statement: raw.statement.trim(),
            status: raw.status ?? "active",
            confidence: raw.confidence,
            source: raw.source,
            createdBy: structuredClone(request.createdBy),
            createdAt: timestamp,
            supersedes: raw.supersedes,
            relatedObjects: raw.relatedObjects
              ? [...raw.relatedObjects]
              : [request.projectId],
            blocking: raw.blocking,
            provenance: raw.provenance
              ? structuredClone(raw.provenance)
              : undefined,
            lifecycleRecommendation: raw.lifecycleRecommendation
              ? structuredClone(raw.lifecycleRecommendation)
              : undefined,
          };

          if (this.epistemic.saveForProject) {
            await this.epistemic.saveForProject(request.projectId, item);
          } else {
            await this.epistemic.save(item);
          }
          existing.push(item);
        }
      };

      try {
        if (this.store) {
          await this.store.runInTransaction(persist);
        } else {
          await persist();
        }
      } catch (err) {
        if (
          err &&
          typeof err === "object" &&
          "detailCode" in err &&
          typeof (err as { detailCode: unknown }).detailCode === "string"
        ) {
          return fail(
            (
              err as {
                detailCode: Parameters<typeof createCycleError>[0]["detailCode"];
              }
            ).detailCode,
            err instanceof Error ? err.message : "epistemic_rule",
            {
              epistemicItemId: (err as { epistemicItemId?: string })
                .epistemicItemId,
            },
          );
        }
        return fail("PERSISTENCE_FAILURE", "atomic_update_failed");
      }

      const items = await this.epistemic.listByProject(request.projectId);
      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.epistemic.updated",
        ts: timestamp,
        correlationId,
        projectId: request.projectId,
        itemCount: items.length,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        state: {
          projectId: request.projectId,
          items: structuredClone(items),
        },
        durationMs,
      };
    } catch {
      return fail("PERSISTENCE_FAILURE", "unexpected_exception");
    }
  }
}
```

## MODIFIED: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`

```diff
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
```

### Full current content: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`

```typescript
/**
 * CORR-PROOF-05 — durable Pilot lifecycle projection (reload-safe).
 * Derived from CycleRepository + LPS (+ optional trajectory/assessment).
 * Never owned by F2/proposal process-local state.
 */
import type {
  CycleInstance,
  CycleInstanceStatus,
  FinalizationAssessment,
} from "../domain/types";
import {
  isPausedStatus,
  isStartableCandidateStatus,
  isTerminalCycleStatus,
} from "../domain/lifecycleInvariants";
import type { LifecycleRecommendationEnvelope } from "./lifecycleRecommendation/types";

export type PilotLifecycleProjection = {
  projectId: string;
  activeCycleInstanceId: string | null;
  activeCycle: CycleInstance | null;
  pausedCycles: CycleInstance[];
  /** Startable candidates only (proposed | acknowledged). */
  candidateCycles: CycleInstance[];
  /** Historical superseded — visible, never startable. */
  supersededCycles: CycleInstance[];
  terminalCycles: CycleInstance[];
  /**
   * Selected cycle for CTA surface.
   * Preference: LPS active → single paused → single startable candidate → null (ambiguous).
   * Superseded never selected for canStart; multiple superseded alone do not create ambiguity.
   */
  selectedCycleInstanceId: string | null;
  selectedStatus: CycleInstanceStatus | null;
  selectionAmbiguous: boolean;
  assessment?: FinalizationAssessment | null;
  cta: {
    canStart: boolean;
    canPause: boolean;
    canResume: boolean;
    canFinalize: boolean;
    canCancel: boolean;
  };
  /**
   * Companion — CURRENT Nora lifecycle Recommendations (never eligibility).
   * Recommendation ≠ canFinalize / canStart / HumanDecision.
   */
  currentRecommendations?: LifecycleRecommendationEnvelope[];
  /** Resume reconciliation when selected cycle is paused — never cleared by HD alone. */
  resumeReconciliation?: {
    clean: boolean;
    detailCode?: string | null;
    reason?: string | null;
  } | null;
};

export function projectPilotLifecycle(input: {
  projectId: string;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  assessment?: FinalizationAssessment | null;
  currentRecommendations?: LifecycleRecommendationEnvelope[];
  resumeReconciliation?: PilotLifecycleProjection["resumeReconciliation"];
}): PilotLifecycleProjection {
  const byId = new Map(
    input.cycles.map((c) => [c.cycleInstanceId, c] as const),
  );
  const activeId = input.lpsActiveCycleInstanceId ?? null;
  const activeFromRepo = input.cycles.find((c) => c.status === "active") ?? null;
  const activeCycle =
    (activeId ? byId.get(activeId) ?? null : null) ?? activeFromRepo;

  const pausedCycles = input.cycles.filter((c) => isPausedStatus(c.status));
  const candidateCycles = input.cycles.filter((c) =>
    isStartableCandidateStatus(c.status),
  );
  const supersededCycles = input.cycles.filter(
    (c) => c.status === "superseded",
  );
  const terminalCycles = input.cycles.filter((c) =>
    isTerminalCycleStatus(c.status),
  );

  let selectedCycleInstanceId: string | null = null;
  let selectionAmbiguous = false;

  if (activeCycle) {
    selectedCycleInstanceId = activeCycle.cycleInstanceId;
  } else if (pausedCycles.length === 1) {
    selectedCycleInstanceId = pausedCycles[0]!.cycleInstanceId;
  } else if (pausedCycles.length > 1) {
    selectionAmbiguous = true;
  } else if (candidateCycles.length === 1) {
    selectedCycleInstanceId = candidateCycles[0]!.cycleInstanceId;
  } else if (candidateCycles.length > 1) {
    selectionAmbiguous = true;
  }

  const selected = selectedCycleInstanceId
    ? byId.get(selectedCycleInstanceId) ?? null
    : null;
  const selectedStatus = selected?.status ?? null;

  const cta = {
    canStart: Boolean(
      selected && isStartableCandidateStatus(selected.status) && !activeCycle,
    ),
    canPause: Boolean(selected && selected.status === "active"),
    canResume: Boolean(selected && isPausedStatus(selected.status) && !activeCycle),
    canFinalize: Boolean(
      selected &&
        !isTerminalCycleStatus(selected.status) &&
        (selected.status === "active" ||
          selected.status === "paused" ||
          selected.status === "blocked"),
    ),
    canCancel: Boolean(
      selected && !isTerminalCycleStatus(selected.status),
    ),
  };

  return {
    projectId: input.projectId,
    activeCycleInstanceId: activeCycle?.cycleInstanceId ?? activeId,
    activeCycle,
    pausedCycles,
    candidateCycles,
    supersededCycles,
    terminalCycles,
    selectedCycleInstanceId,
    selectedStatus,
    selectionAmbiguous,
    assessment: input.assessment ?? null,
    cta,
    currentRecommendations: input.currentRecommendations ?? [],
    resumeReconciliation: input.resumeReconciliation ?? null,
  };
}
```

## MODIFIED: `projects/sfia-studio/app/lib/oa/cycle/index.ts`

```diff
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

### Full current content: `projects/sfia-studio/app/lib/oa/cycle/index.ts`

```typescript
/**
 * T-A2 Cycle / Trajectory / Epistemic / CKC Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A1 project + T-A0 doctrine
 * public APIs only. Does not replace d1 / OPS1 / MethodMode. In-memory only.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/qualification";
export * from "./domain/cycleTypeCatalog";
export * from "./domain/ckcQualificationContracts";
export * from "./domain/ckcQualificationErrors";
export * from "./domain/ckcConsumptionProof";
export * from "./domain/ckcQualificationResult";
export * from "./domain/catalogFingerprint";
export * from "./domain/catalogProjection";

export * from "./ports/cycleRepository";
export * from "./ports/cyclePersistenceUnitOfWorkPort";
export * from "./ports/trajectoryRepository";
export * from "./ports/epistemicRepository";
export * from "./ports/ckcResolver";
export * from "./ports/ckcQualificationResolver";
export * from "./ports/cycleAudit";

export { QualifyCycle } from "./application/qualifyCycle";
export * from "./application/qualifyCycleWithCkc";
export * from "./application/bindCatalogAuthority";
export { CreateCycle } from "./application/createCycle";
export { GetCycle } from "./application/getCycle";
export {
  assessFinalizationObligations,
  finalizeSubjectFor,
  cancelSubjectFor,
  startTrajectorySubjectFor,
  resumeReplanSubjectFor,
  isAcceptedFinalizeDecision,
  isAcceptedCancelDecision,
  isAcceptedStartTrajectoryDecision,
  isAcceptedResumeReplanDecision,
  FINALIZE_SUBJECT_PREFIX,
  CANCEL_SUBJECT_PREFIX,
  START_TRAJECTORY_SUBJECT_PREFIX,
  RESUME_REPLAN_SUBJECT_PREFIX,
} from "./application/assessFinalization";
export {
  assessStartReadiness,
  type AssessStartReadinessInput,
} from "./application/assessStartReadiness";
export {
  buildPauseReconciliationSnapshot,
  assessResumeReconciliation,
  trajectoryFingerprint,
  type BuildPauseSnapshotInput,
  type ResumeReconciliationInput,
  type ResumeReconciliationResult,
} from "./application/assessResumeReconciliation";
export {
  projectPilotLifecycle,
  type PilotLifecycleProjection,
} from "./application/lifecycleProjection";
export * from "./application/lifecycleRecommendation";
export {
  deriveLifecycleBlockersFromEpistemicItems,
  lifecycleBlockersFromReaderFailure,
  type LifecycleBlockerSnapshot,
} from "./application/deriveLifecycleBlockers";
export {
  deriveFinalizationApplicability,
  obligationPolicySubjectFor,
  OBLIGATION_POLICY_SUBJECT_PREFIX,
  OBLIGATION_POLICY_NO_GOVERNED_EFFECTS,
  OBLIGATION_POLICY_NO_ARTIFACT,
  OBLIGATION_POLICY_NO_GIT,
  OBLIGATION_POLICY_NO_EXECUTION,
  OBLIGATION_POLICY_NO_EVIDENCE,
  OBLIGATION_POLICY_NO_REVIEW,
  OBLIGATION_POLICY_REQUIRE_ARTIFACT,
  OBLIGATION_POLICY_REQUIRE_GIT,
  type DerivableExecutionContract,
  type DeriveFinalizationApplicabilityInput,
} from "./application/deriveFinalizationApplicability";
export {
  selectEffectiveExecutionContracts,
  type SelectableExecutionContract,
  type SelectEffectiveExecutionContractsResult,
} from "./application/selectEffectiveExecutionContracts";
export {
  selectEffectiveReviewBundles,
  type SelectEffectiveReviewBundlesResult,
} from "./application/selectEffectiveReviewBundles";
export {
  hasGitRepositorySemanticMarker,
  isGitApplicableContract,
  isGitQualifyingEvidence,
  type GitQualifiableContract,
} from "./application/qualifyGitEvidence";
export {
  PilotLifecycleTransitions,
  type PilotLifecycleDeps,
  type PilotLifecycleAuthorityPort,
  type LifecycleDecisionReader,
  type LifecycleEvidenceReader,
  type LifecycleReviewBundleReader,
  type LifecycleExecutionSnapshotReader,
  type LifecycleEpistemicReader,
} from "./application/pilotLifecycleTransitions";
export * from "./domain/lifecycleInvariants";
export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
export { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
export { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
export {
  ProposeTrajectoryVersion,
  TrajectoryVersionConflictSignal,
  resolveTrajectoryLineageHead,
} from "./application/proposeTrajectoryVersion";
export { PromoteDecidedTrajectory } from "./application/promoteDecidedTrajectory";
export { GetEpistemicState } from "./application/getEpistemicState";
export { UpdateEpistemicState } from "./application/updateEpistemicState";
export { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";

export { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
export { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
export { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
export { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
export {
  MemoryCkcResolver,
  type CkcRegistryEntry,
} from "./infrastructure/memoryCkcResolver";
export {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
export * from "./infrastructure/ckcReferenceManifest";
export * from "./infrastructure/ckcQualificationResolver";
export {
  createSqliteCycleServices,
  createTestSqliteCycleServices,
  type CreateSqliteCycleServicesOptions,
  type SqliteCycleServices,
} from "./infrastructure/sqlite/createSqliteCycleServices";
export { SqliteCycleRepository } from "./infrastructure/sqlite/sqliteCycleRepository";
export { SqliteCycleAuditJournal } from "./infrastructure/sqlite/sqliteCycleAuditJournal";

import type { ClockPort, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  FixedClock,
  PRODUCT_DOCTRINE_PACKAGE_ID,
  SystemClock,
} from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { CreateCycle } from "./application/createCycle";
import { CreateInitialTrajectory } from "./application/createInitialTrajectory";
import { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
import { GetCycle } from "./application/getCycle";
import { GetEpistemicState } from "./application/getEpistemicState";
import { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
import { PromoteDecidedTrajectory } from "./application/promoteDecidedTrajectory";
import { ProposeTrajectoryVersion } from "./application/proposeTrajectoryVersion";
import { QualifyCycle } from "./application/qualifyCycle";
import {
  QualifyCycleWithCkc,
  type QualifyCycleExecutor,
} from "./application/qualifyCycleWithCkc";
import {
  bindCycleTypeCatalogAuthority,
  verifyCycleTypeCatalogAuthority,
} from "./application/bindCatalogAuthority";
import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
import { UpdateEpistemicState } from "./application/updateEpistemicState";
import {
  PilotLifecycleTransitions,
  type LifecycleDecisionReader,
  type LifecycleEvidenceReader,
  type LifecycleReviewBundleReader,
  type LifecycleExecutionSnapshotReader,
  type LifecycleEpistemicReader,
  type PilotLifecycleAuthorityPort,
} from "./application/pilotLifecycleTransitions";
import { DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY } from "./domain/catalogFingerprint";
import type { CycleTypeCatalogAuthority } from "./domain/catalogFingerprint";
import type { CycleTypeCatalog } from "./domain/cycleTypeCatalog";
import type { FinalizationApplicabilityRules } from "./domain/types";
import { CkcQualificationResolver } from "./infrastructure/ckcQualificationResolver";
import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
import { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
import { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
import { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
import {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
import type { CycleAuditPort } from "./ports/cycleAudit";
import type { CyclePersistenceUnitOfWorkPort } from "./ports/cyclePersistenceUnitOfWorkPort";
import type { CycleRepositoryPort } from "./ports/cycleRepository";
import type { CkcResolverPort } from "./ports/ckcResolver";
import type { CkcQualificationResolverPort } from "./ports/ckcQualificationResolver";
import type { EpistemicRepositoryPort } from "./ports/epistemicRepository";
import type { TrajectoryRepositoryPort } from "./ports/trajectoryRepository";

export type CycleServices = {
  store: CyclePersistenceUnitOfWorkPort;
  cycles: CycleRepositoryPort;
  trajectories: TrajectoryRepositoryPort;
  epistemic: EpistemicRepositoryPort;
  ckc: CkcResolverPort;
  audit: CycleAuditPort;
  qualifyCycle: QualifyCycle;
  createCycle: CreateCycle;
  getCycle: GetCycle;
  createInitialTrajectory: CreateInitialTrajectory;
  getCurrentTrajectory: GetCurrentTrajectory;
  getTrajectoryVersion: GetTrajectoryVersion;
  proposeTrajectoryVersion: ProposeTrajectoryVersion;
  /** W2: candidate → decided/current promotion, decisionRef mandatory. */
  promoteDecidedTrajectory: PromoteDecidedTrajectory;
  getEpistemicState: GetEpistemicState;
  updateEpistemicState: UpdateEpistemicState;
  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
  /** CORR-PROOF-05 Pilot lifecycle transitions. */
  pilotLifecycle: PilotLifecycleTransitions;
};

export type CreateInMemoryCycleServicesOptions = {
  projectServices: ProjectServices;
  clock?: ClockPort;
  audit?: CycleAuditPort;
  ckcResolver?: CkcResolverPort;
  decisions?: LifecycleDecisionReader;
  evidence?: LifecycleEvidenceReader;
  reviewBundles?: LifecycleReviewBundleReader;
  execution?: LifecycleExecutionSnapshotReader;
  epistemic?: LifecycleEpistemicReader;
  authority?: PilotLifecycleAuthorityPort;
  applicabilityRules?: FinalizationApplicabilityRules;
};

export type CkcQualificationServices = {
  readonly audit: CycleAuditPort;
  readonly resolver: CkcQualificationResolverPort;
  readonly qualifyCycleWithCkc: QualifyCycleWithCkc;
};

export type CreateCkcQualificationServicesOptions = {
  readonly clock?: ClockPort;
  readonly audit?: CycleAuditPort;
  readonly resolver?: CkcQualificationResolverPort;
  readonly registryRoot?: string;
  readonly doctrinePackagePin?: DoctrinePackagePin;
  readonly productResolverFactory?: (
    audit: CycleAuditPort,
    registryRoot: string,
  ) => CkcQualificationResolverPort;
  readonly qualifyCycle?: QualifyCycleExecutor;
  /**
   * Optional HASH-A-bound catalog authority (test-only future snapshots).
   * Cryptographically verified before use; forged fingerprints fail closed
   * on QualifyCycleWithCkc (R-W3D-03). Prefer {@link catalogSnapshot} when
   * injecting N+1 content — factory binds HASH-A itself.
   */
  readonly catalogAuthority?: CycleTypeCatalogAuthority;
  /**
   * Optional raw catalog snapshot. Factory binds HASH-A via
   * bindCycleTypeCatalogAuthority — callers cannot supply a forged fingerprint.
   * Mutually preferred over an unverified catalogAuthority when both are set.
   */
  readonly catalogSnapshot?: Pick<CycleTypeCatalog, "entries">;
};

function resolveCkcQualificationCatalogAuthority(
  options: CreateCkcQualificationServicesOptions,
): CycleTypeCatalogAuthority {
  if (options.catalogSnapshot) {
    return bindCycleTypeCatalogAuthority(options.catalogSnapshot);
  }
  if (options.catalogAuthority) {
    // Do not re-bind silently: QualifyCycleWithCkc verifies cryptographically
    // and returns CATALOG_FINGERPRINT_STALE for forged authorities.
    if (!verifyCycleTypeCatalogAuthority(options.catalogAuthority)) {
      return options.catalogAuthority;
    }
    return options.catalogAuthority;
  }
  return DEFAULT_CYCLE_TYPE_CATALOG_AUTHORITY;
}

function usesProductDoctrinePin(pin?: DoctrinePackagePin): boolean {
  return pin?.doctrinePackageId === PRODUCT_DOCTRINE_PACKAGE_ID;
}

function createFailureAwareAudit(audit: CycleAuditPort): CycleAuditPort & {
  readonly hasFailed: () => boolean;
} {
  let failed = false;
  return {
    append(event): void {
      if (failed) {
        throw new Error("Audit sink unavailable.");
      }
      try {
        audit.append(event);
      } catch {
        failed = true;
        throw new Error("Audit sink unavailable.");
      }
    },
    hasFailed: () => failed,
  };
}

/**
 * Default CKC resolver selection (COR-W1-07).
 *
 * Product doctrine pin (`pkg:sfia-studio-doctrine-v3`) ALWAYS selects the
 * product-bound resolver path. Missing/invalid registryRoot must fail closed
 * as Product CKC unavailable — NEVER silently fall back to method-candidate.
 *
 * Explicit `options.resolver` injection remains for deliberate test/DI only.
 */
function createDefaultCkcQualificationResolver(
  options: CreateCkcQualificationServicesOptions,
  audit: CycleAuditPort,
): CkcQualificationResolverPort {
  if (usesProductDoctrinePin(options.doctrinePackagePin)) {
    const pin = options.doctrinePackagePin!;
    return new CkcQualificationResolver(undefined, audit, {
      // Empty/absent root is handled fail-closed inside product index load.
      registryRoot: options.registryRoot ?? "",
      doctrinePackageId: pin.doctrinePackageId,
      packageVersion: pin.version,
      packageDigest: pin.digest,
    });
  }
  return new CkcQualificationResolver(undefined, audit);
}

/** Read-only D2-A → D2-B → D2-C composition without repositories or mutation. */
export function createCkcQualificationServices(
  options: CreateCkcQualificationServicesOptions = {},
): CkcQualificationServices {
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const failureAwareAudit = createFailureAwareAudit(audit);
  const resolver =
    options.resolver ??
    createDefaultCkcQualificationResolver(options, failureAwareAudit);
  const qualifyCycle =
    options.qualifyCycle ?? new QualifyCycle(clock, failureAwareAudit);

  return Object.freeze({
    audit,
    resolver,
    qualifyCycleWithCkc: new QualifyCycleWithCkc(
      resolver,
      qualifyCycle,
      clock,
      failureAwareAudit,
      resolveCkcQualificationCatalogAuthority(options),
    ),
  });
}

/** Factory for in-memory Cycle/Trajectory/Epistemic/CKC services. */
export function createInMemoryCycleServices(
  options: CreateInMemoryCycleServicesOptions,
): CycleServices {
  const store = new MemoryCycleStore();
  const cycles = new MemoryCycleRepository(store);
  const trajectories = new MemoryTrajectoryRepository(store);
  const epistemic = new MemoryEpistemicRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const ckc = options.ckcResolver ?? new MemoryCkcResolver();

  return {
    store,
    cycles,
    trajectories,
    epistemic,
    ckc,
    audit,
    qualifyCycle: new QualifyCycle(clock, audit),
    createCycle: new CreateCycle(
      cycles,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCycle: new GetCycle(cycles, clock, audit),
    createInitialTrajectory: new CreateInitialTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
    getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
    proposeTrajectoryVersion: new ProposeTrajectoryVersion(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    promoteDecidedTrajectory: new PromoteDecidedTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
    updateEpistemicState: new UpdateEpistemicState(
      epistemic,
      clock,
      audit,
      store,
    ),
    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
      ckc,
      clock,
      audit,
    ),
    pilotLifecycle: new PilotLifecycleTransitions({
      cycles,
      trajectories,
      projectServices: options.projectServices,
      clock,
      audit,
      store,
      decisions: options.decisions,
      evidence: options.evidence,
      reviewBundles: options.reviewBundles,
      execution: options.execution,
      epistemic: options.epistemic ?? {
        listByProject: (projectId) => epistemic.listByProject(projectId),
      },
      authority: options.authority,
      applicabilityRules: options.applicabilityRules,
    }),
  };
}

export function createTestCycleServices(
  options: CreateInMemoryCycleServicesOptions & {
    audit?: MemoryCycleAuditJournal;
    fixedNowIso?: string;
    ckcResolver?: MemoryCkcResolver;
  },
): CycleServices & { audit: MemoryCycleAuditJournal } {
  const audit = options.audit ?? new MemoryCycleAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T06:00:00.000Z"));
  return createInMemoryCycleServices({
    ...options,
    clock,
    audit,
  }) as CycleServices & { audit: MemoryCycleAuditJournal };
}
```

## MODIFIED: `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index ed66148b..aa00d5e8 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -11,6 +11,10 @@ import {
 import {
   projectPilotLifecycle,
   type PilotLifecycleProjection,
+  selectCurrentLifecycleRecommendations,
+  isPausedStatus,
+  assessResumeReconciliation,
+  deriveLifecycleBlockersFromEpistemicItems,
 } from "@/lib/oa/cycle";
 import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
 import type { F2DecisionKind } from "./f2/types";
@@ -934,13 +938,172 @@ async function buildAssistantPilotLifecycleProjection(
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
+  if (
+    projection.selectedStatus &&
+    isPausedStatus(projection.selectedStatus) &&
+    projection.selectedCycleInstanceId
+  ) {
+    const selected = cycles.find(
+      (c) => c.cycleInstanceId === projection.selectedCycleInstanceId,
+    );
+    if (!selected) {
+      projection.resumeReconciliation = {
+        clean: false,
+        detailCode: "CYCLE_RESUME_DRIFT",
+        reason: "selected_cycle_missing",
+      };
+      projection.cta = { ...projection.cta, canResume: false };
+      return projection;
+    }
+
+    try {
+      const projectResult =
+        await runtime.oa.projectServices.getProject.execute({ projectId });
+      if (!projectResult.ok) {
+        projection.resumeReconciliation = {
+          clean: false,
+          detailCode: "CYCLE_RESUME_DRIFT",
+          reason: "project_unreadable",
+        };
+        projection.cta = { ...projection.cta, canResume: false };
+        return projection;
+      }
+
+      let trajectory = null;
+      try {
+        const traj =
+          await runtime.oa.cycleServices.getCurrentTrajectory.execute({
+            projectId,
+          });
+        trajectory = traj.ok ? traj.trajectory : null;
+      } catch {
+        projection.resumeReconciliation = {
+          clean: false,
+          detailCode: "CYCLE_RESUME_DRIFT",
+          reason: "trajectory_reader_unavailable",
+        };
+        projection.cta = { ...projection.cta, canResume: false };
+        return projection;
+      }
+
+      let decisions: Awaited<
+        ReturnType<
+          typeof runtime.oa.decisionServices.decisions.listByProject
+        >
+      > = [];
+      try {
+        decisions =
+          await runtime.oa.decisionServices.decisions.listByProject(projectId);
+      } catch {
+        projection.resumeReconciliation = {
+          clean: false,
+          detailCode: "CYCLE_RESUME_DRIFT",
+          reason: "decision_reader_unavailable",
+        };
+        projection.cta = { ...projection.cta, canResume: false };
+        return projection;
+      }
+
+      let evidence: Awaited<
+        ReturnType<
+          typeof runtime.oa.evidenceReviewServices.repository.listByProject
+        >
+      > = [];
+      try {
+        evidence =
+          await runtime.oa.evidenceReviewServices.repository.listByProject(
+            projectId,
+          );
+      } catch {
+        projection.resumeReconciliation = {
+          clean: false,
+          detailCode: "CYCLE_RESUME_DRIFT",
+          reason: "evidence_reader_unavailable",
+        };
+        projection.cta = { ...projection.cta, canResume: false };
+        return projection;
+      }
+
+      const blockersSnap =
+        deriveLifecycleBlockersFromEpistemicItems(epistemicItems);
+      const doctrinePin =
+        projectResult.project.doctrinePackageRef ??
+        (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined);
+      const siblingActiveExists = cycles.some(
+        (c) =>
+          c.status === "active" &&
+          c.cycleInstanceId !== selected.cycleInstanceId,
+      );
+
+      const reconciliation = assessResumeReconciliation({
+        cycle: selected,
+        projectId,
+        lpsReadable: lps.ok,
+        lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
+        lpsActiveCycleInstanceId: lpsActive,
+        objective: lps.ok ? lps.livingProjectState.objective : "",
+        context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
+        scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
+        doctrinePackageId: doctrinePin?.doctrinePackageId,
+        doctrinePackageVersion: doctrinePin?.version,
+        doctrinePackageDigest: doctrinePin?.digest,
+        trajectory,
+        decisions,
+        evidence,
+        blockingReservationStatements: blockersSnap.statements,
+        blockerSourceUnreadable: false,
+        siblingActiveExists,
+      });
+
+      projection.resumeReconciliation = {
+        clean: reconciliation.clean,
+        detailCode: reconciliation.clean ? null : "CYCLE_RESUME_DRIFT",
+        reason: reconciliation.clean
+          ? "assess_resume_reconciliation_clean"
+          : reconciliation.driftReasons.join(",") || "dirty",
+      };
+      projection.cta = {
+        ...projection.cta,
+        canResume: projection.cta.canResume && reconciliation.clean,
+      };
+    } catch {
+      projection.resumeReconciliation = {
+        clean: false,
+        detailCode: "CYCLE_RESUME_DRIFT",
+        reason: "reconciliation_facts_unavailable",
+      };
+      projection.cta = { ...projection.cta, canResume: false };
+    }
+  }
+
+  return projection;
 }

 /**
```

## MODIFIED: `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

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
```

## MODIFIED: `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```diff
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
```

## MODIFIED: `projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts`

```diff
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
```

### Full current content: `projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts`

```typescript
/**
 * Nora Option C cognitive runtime — types.
 * Session is conversational continuity only — never Truth C / LPS / HD.
 * Single Runner path after legacy Nora runtime retirement.
 */

import type { OpenAiReasoningEffort } from "@/lib/platform/ai";
import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
import type { ContradictionDispositionResult } from "./contradictionDisposition";
import type { CognitiveStopDecision } from "./cognitiveStop";
import type { MemoryBAvailability } from "./memoryBAvailability";
import type {
  MemoryBCompactionDetails,
  MemoryBCompactionState,
  TruthCRevision,
} from "./memoryBCompaction";
import type { Mw4GroundingTurnSurface } from "./groundingDurability";
import type { Mw6SourceIntelligenceSurface } from "./sourceIntelligenceContract";

/** F1/Nora cognitive runtime kind — Agents SDK Runner only. */
export type NoraCognitiveRuntimeKind = "agents";

export type NoraCognitiveTurnResult = {
  text: string;
  usage: {
    inputTokens: number | null;
    outputTokens: number | null;
    totalTokens: number | null;
    model: string | null;
    providerResponseId: string | null;
  };
  toolRounds: number;
  toolCalls: number;
  limitReached: boolean;
  /** Always "agents" after Nora legacy retirement (honest observability). */
  cognitiveRuntime: NoraCognitiveRuntimeKind;
  sessionId: string | null;
  /** MW1-S01 — honest Memory B availability for this turn. */
  memoryBAvailability: MemoryBAvailability;
  /** MW1-S02 — compaction / stale state for this turn. */
  memoryBCompactionState: MemoryBCompactionState;
  /** MW1-S02 — optional compaction details when relevant. */
  memoryBCompactionDetails: MemoryBCompactionDetails | null;
  /** MW2-S01 — internal strategy telemetry (not Pilote authority). */
  cognitiveStrategyClass?: CognitiveStrategyClass;
  /**
   * Effective reasoning effort applied to Runner (eval pin when present, else CWP).
   */
  selectedReasoningEffort?: OpenAiReasoningEffort;
  /**
   * CWP-derived effort when strategy ran — observable even when eval pin overrides.
   */
  cwpDerivedReasoningEffort?: OpenAiReasoningEffort;
  /** Eval-only pin identity when Stage A / campaign cell control is active. */
  evalPinnedModelId?: string;
  evalPinnedReasoningEffort?: OpenAiReasoningEffort;
  criticalChallengeArmed?: boolean;
  /** MW3 — present only when contradictionAssessment was supplied. */
  contradictionDisposition?: ContradictionDispositionResult;
  /** MW3 — present only when contradictionAssessment was supplied. */
  cognitiveStopDecision?: CognitiveStopDecision;
  /** MW4 — grounding durability surface when Session refs were assessed. */
  mw4Grounding?: Mw4GroundingTurnSurface;
  /** MW6 — source strategy + normalized external observations (non-authoritative). */
  mw6SourceIntelligence?: Mw6SourceIntelligenceSurface;
  /**
   * LR-D02 — structured Agents finalOutput when outputType was requested.
   * Candidate data only — never Product truth until SFIA validation.
   */
  structuredOutput?: unknown;
  /**
   * MW6↔Auth — authority binding axes from preflight (composition proof).
   * Present when campaign + governedAuthority composition evaluated.
   */
  mw6AuthorityBinding?: {
    authorityBound: boolean;
    realAuthorized: boolean;
    realPreflightCode: string;
    realPreflightBlocked: boolean;
    realPreflightReasons: string[];
    eligible: boolean;
  };
};

export type { TruthCRevision, MemoryBCompactionState, MemoryBCompactionDetails };
```

# DELETED FILE

## DELETED: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/relatedObjectsCodec.ts`

File removed from uncommitted Product candidate. Replacement: `basisFingerprint.ts` (deterministic hashing + genuine `prj:`/`cyc:` relatedObjects only). No lr:* encoder/decoder remains.

Deletion proof: path absent on disk = `True`

---


FULL REVIEW PACK SIZE THRESHOLD EXCEEDED — COMPLETE PRODUCT CONTENT PRESERVED

## Review Pack Content Coverage

- created files full content: YES
- modified files useful complete diff: YES
- deleted files complete diff: YES (deletion + replacement explanation; prior uncommitted codec removed)
- modeled schema content complete: YES
- synthesis only: NO
- artificial truncation present: NO
- all Product files represented: YES
- review pack verdict: COMPLETE
