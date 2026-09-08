# SFIA-STUDIO-PRODUCT-PROOF-LIFECYCLE-RECOMMENDATION-CORR-QUAL-01
## CHATGPT CORRECTION QUALIFICATION REVIEW PACK — FULL
## READ-ONLY — PRODUCT MUTATION NOT PERFORMED

| Field | Value |
| --- | --- |
| **Timestamp (UTC)** | 2026-09-08T08:43:47Z |
| **Cycle** | 9 — QA / validation · EVOL · CRITICAL · `SFIA-STUDIO-PRODUCT-PROOF-LIFECYCLE-RECOMMENDATION-CORR-QUAL-01` |
| **Capability** | Lifecycle Recommendation & Pilot Decision Continuity |
| **Mode** | READ-ONLY Product qualification + complete Review Handoff |
| **Product mutation** | FORBIDDEN / NONE PERFORMED |
| **Product baseline / origin/main** | `e6d7c649e9d0522b60401f11fb8dd1fd4b122637` |
| **Product branch** | `delivery/sfia-studio-lifecycle-recommendation-product` |
| **Product HEAD** | `e6d7c649e9d0522b60401f11fb8dd1fd4b122637` (uncommitted candidate) |
| **Handoff input under review** | `d9d3aa98a31941698455b28e772451e343cf474b` |
| **Prior Morris decision handoff** | `ef8dec99d8e3f406840f34d51773c25c53f6fe84` |
| **Workspace** | `/Users/morris/Projects/sfia-lr-delivery-isolated-e6d7c649` |
| **REAL** | ZERO REAL |
| **runtime v3** | NON ADOPTED |
| **Product Proof** | OPEN |
| **Verdict** | READY FOR MORRIS CORRECTION DECISION — LR-D03 SCHEMA GATE QUALIFIED — RESUME AUTHORITY FIX QUALIFIED — PRODUCT MUTATION NOT PERFORMED — ZERO REAL |

FULL REVIEW PACK SIZE THRESHOLD EXCEEDED — COMPLETE PRODUCT CONTENT PRESERVED

## Anti-claims

- This cycle performs **no** Product code mutation.
- This cycle does **not** authorize Product commit/push/PR/merge.
- This cycle does **not** authorize REAL.
- Schema Decision Pack recommendation ≠ Morris decision.
- Prior d9 Delivery “all R PASS / READY FOR CHATGPT DELIVERY REVIEW” is **reclassified** under contract scrutiny.

---

## 1. Local Git Truth

| Check | Result |
| --- | --- |
| pwd | `/Users/morris/Projects/sfia-lr-delivery-isolated-e6d7c649` |
| remote | `https://github.com/mcleland147/sfia-workspace.git` |
| branch | `delivery/sfia-studio-lifecycle-recommendation-product` |
| HEAD | `e6d7c649e9d0522b60401f11fb8dd1fd4b122637` |
| origin/main | `e6d7c649e9d0522b60401f11fb8dd1fd4b122637` |
| origin/sfia/review-handoff (input) | `d9d3aa98a31941698455b28e772451e343cf474b` |
| staged | empty |
| Product commit | NO |
| Note | Isolated clone; local alias `delivery/sfia-studio-proof-corr-04-hybrid-envelope-d` also points at same baseline SHA — current checked-out branch is the authorized Product branch. |

### git status --short (captured)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
?? .tmp-sfia-review/discovery-matrix.md
?? projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/
```

---

## 2. Sources read

Process: sfia-cycle-execution-template; routing guide; chatgpt-cursor operating model; rules/guardrails; fifteen-cycles synthetic map (Cycle 8 no detailed CKC).

Convergence/product-completion/framing 30,32,33,37 as required by contract.

Handoff d9d3aa98 full canonical file inspected (truncation marker confirmed at line ~681).

Authoritative seams: EpistemicItem TS + modeled schema; assessResumeReconciliation; pilotLifecycleTransitions RESUME path; lifecycleProjection; sqlite Epistemic repository ports; provenance schema; full local Lifecycle Recommendation candidate tree.

---

## 3. Morris decisions consumed (context only)

LR-D01 Epistemic+COMBINE+projection · LR-D02 Agents outputType same Runner · LR-D03 Epistemic Recommendation carrier, no new table, no JSON-in-statement, reload-safe typed/structural, CURRENT/STALE derived · LR-D04 LifecycleSurface / TrajectorySurface split · LR-D05 resume+replan HD visible, never overrides CYCLE_RESUME_DRIFT.

---

## 4. ChatGPT Delivery Review findings — verification

### FINDING A — relatedObjects machine protocol — **CONFIRMED**

Local `relatedObjectsCodec.ts` persists lifecycle machine semantics as prefixed identifiers:
`lr:intent:`, `lr:basis:`, `lr:semkey:`, `lr:subject:`, `lr:target:`, `lr:targettype:`.

Reload reconstruction **requires** interpreting this ad-hoc prefix protocol (`parseLifecycleRecommendationRelatedObjects`). That is a serialization protocol hidden in `relatedObjects`, conflicting with the Delivery prohibition against hiding machine payload in source/relatedObjects/provenance.

Modeled `relatedObjects` is `array` of **identifier** refs (`identifier.schema.json`) — intended for genuine object references (prj:/cyc:/…), not opaque machine-state encoding.

### FINDING B — RESUME clean from snapshot presence — **CONFIRMED**

In `actions.ts` `buildAssistantPilotLifecycleProjection`:
- if pause snapshot **missing** → `clean: false`, `canResume: false`
- if pause snapshot **present** → `clean: true`, reason `pause_snapshot_present`
- **does not call** `assessResumeReconciliation`

Authoritative assessor (used by `PilotLifecycleTransitions.resume`) compares objective/context/scope/doctrine/trajectory/HD/evidence/blocker fingerprints against the pause snapshot. Snapshot presence alone never proves clean.

### FINDING C — d9 handoff truncated — **CONFIRMED**

d9 pack contains an explicit handoff-size truncation placeholder (confirmed at approximately line 681 of the canonical handoff file) and embeds only a subset of created Product files (types/validate/relatedObjects partial + visual contract + diffs). Missing full content for: materialize, currentness, produce, index, LifecycleSurface(+css), lifecyclePresentation, delivery test, and remainder of relatedObjectsCodec.

---

## 5. Git Review Index — Product candidate inventory

| Path | Tracked? | Role | Created/Modified | Finding relevance | Embed full content | Embed complete diff |
| --- | --- | --- | --- | --- | --- | --- |
| lifecycleRecommendation/types.ts | untracked | contract types | created | LR-D03 | YES | n/a |
| relatedObjectsCodec.ts | untracked | persistence codec | created | FINDING A | YES | n/a |
| validateLifecycleRecommendation.ts | untracked | deterministic validation | created | R3 | YES | n/a |
| materializeLifecycleRecommendation.ts | untracked | Epistemic write | created | LR-D03 | YES | n/a |
| currentness.ts | untracked | CURRENT/STALE derive | created | R5/R6/R13 | YES | n/a |
| produceLifecycleRecommendation.ts | untracked | post-model path | created | R15 | YES | n/a |
| index.ts (lr) | untracked | barrel | created | export | YES | n/a |
| noraLifecycleRecommendationOutputType.ts | untracked | LR-D02 schema | created | R1/R2 | YES | n/a |
| LifecycleSurface.tsx | untracked | UI Recommend→Decide | created | R14/LR-D04 | YES | n/a |
| LifecycleSurface.module.css | untracked | UI styles | created | R14 | YES | n/a |
| lifecyclePresentation.ts | untracked | CTA/status presentation | created | R14/R10 UI | YES | n/a |
| lifecycleVisualContract.ts | untracked | visual contract | created | R14 | YES | n/a |
| lifecycleRecommendation.delivery.d0.test.ts | untracked | R proofs | created | R matrix limits | YES | n/a |
| ProjectWorkspacePage.tsx | tracked M | workspace wire | modified | LR-D04 | via diff | YES |
| actions.ts | tracked M | PA projection | modified | FINDING B | via diff | YES |
| runNoraAgentsTurn.ts | tracked M | outputType seam | modified | LR-D02 | via diff | YES |
| nora types.ts | tracked M | structuredOutput | modified | LR-D02 | via diff | YES |
| lifecycleProjection.ts | tracked M | companion fields | modified | projection | via diff | YES |
| cycle/index.ts | tracked M | export | modified | export | via diff | YES |
| .tmp-sfia-review/* | review-only | qualification/handoff | rewrite | not Product | review pack itself | n/a |

### Comparison to d9 handoff inventory

- Same Product created/modified set as local candidate (aligned).
- d9 claimed FULL but truncated created-file bodies and omitted several created files’ full content.
- Extra local review-only: discovery-matrix, product-tracked.diff (qualification aids).

---

## 6. Qualification B — LR-D03 carrier analysis

### B1. Machine-readable lifecycle semantics currently persisted

Via EpistemicItem Recommendation + relatedObjects protocol + human statement + epistemic status/supersedes/source/createdBy/createdAt (+ optional provenance):
intent, basisFingerprint, semanticKey, subjectCycleInstanceId, targetCycleInstanceId, targetCycleTypeId.

basisRefs object itself is **not** stored as structured fields; fingerprint is. CURRENT/STALE derived at read by rebuilding seed facts and comparing fingerprint.

### B2. Persistence locations

| Semantic | Persisted where |
| --- | --- |
| intent | `relatedObjects` entry `lr:intent:<INTENT>` |
| basis fingerprint | `relatedObjects` entry `lr:basis:<sha256>` |
| semantic key | `relatedObjects` entry `lr:semkey:<hex>` |
| subject cycle | `relatedObjects` entry `lr:subject:<cyc:…>` |
| target cycle | `relatedObjects` entry `lr:target:<cyc:…>` |
| target cycle type | `relatedObjects` entry `lr:targettype:…` |
| project binding | `relatedObjects` entry `prj:…` |
| human statement | `statement` (human French; no JSON) |
| epistemic status | `status` active/superseded/… |
| supersession link | `supersedes` |
| producer attribution | `source`=`lifecycle-recommendation:nora`, `createdBy` |
| provenance | optional `provenance` (not used as payload dump in candidate) |
| basis refs object | NOT persisted as typed field; reconstructed for currentness |

### B3. relatedObjects beyond genuine object references?

**YES.** Prefixed `lr:*` entries are machine-state encodings, not genuine domain object identifiers the Epistemic model intends relatedObjects to hold.

### B4. Reconstruct without ad-hoc relatedObjects protocol?

**NO.** Decode path is the codec. Without the prefix protocol, structured Recommendation cannot be recovered from EpistemicItem after reload (statement is human-only by design).

### B5. Satisfies LR-D03 “reload-safe typed / structural”?

**NO at architectural-contract level.** Green codec round-trip tests prove the protocol works mechanically; they do **not** prove LR-D03 compliance. LR-D03 forbids hiding machine payload in relatedObjects.

### B6. Existing non-protected typed field that can honestly carry semantics?

Inspected EpistemicItem TS + modeled schema (`additionalProperties: false`):

- `statement` — human only; JSON-in-statement forbidden
- `source` — free string; using as payload dump = source abuse
- `relatedObjects` — identifier refs only; protocol abuse = FINDING A
- `provenance` — ProvenanceRecord with closed properties; not a Recommendation payload carrier; abuse forbidden
- `confidence`, `blocking`, `supersedes`, `status` — insufficient / wrong semantics

**NO compliant existing field.**

### B7. Conclusion

**PROTECTED MODELED SCHEMA DELTA REQUIRED — MORRIS DECISION REQUIRED**

---

## 7. Schema Decision Pack

### OPTION A — bounded additive typed field on EpistemicItem (RECOMMENDED for Morris decision)

Direction (not decided): add an **optional** modeled property on EpistemicItem, e.g. `lifecycleRecommendation` (or dedicated `$ref` schema), holding the structured Recommendation envelope fields required for reload-safe semantics; continue using existing `oa_epistemic_items.payload_json`; **no new table**; **no DDL migration**.

Assess:

| Axis | Assessment |
| --- | --- |
| Modeled files | `epistemic-item.schema.json`; likely new `lifecycle-recommendation.schema.json` (or inline object); possibly common identifier refs reuse |
| TS files | `domain/types.ts` EpistemicItem; lifecycleRecommendation encode/materialize/currentness; sqlite payload round-trip already JSON — likely no DDL |
| New bounded JSON schema | YES recommended (keeps EpistemicItem readable) |
| Backward compatibility | Optional property absent on historical items → OK if consumers treat missing as “no structured LR” |
| Historical Recommendation | Non-lifecycle Recommendations remain valid without the field |
| additionalProperties | Remains false; field must be explicitly added |
| schemaVersion | Currently **const `0.1.0-oa`**. Additive optional field **may** keep const if policy treats optional additive as compatible — **OR** require a distinct schemaVersion gate. **Do not silently decide.** Flag as Morris sub-gate if const bump required. |
| Persistence | Same payload_json; UpdateEpistemicState/validateEpistemicItemInput must accept new field |
| Migration | **NO DDL** expected for Option A as scoped |
| Tests | Replace relatedObjects protocol tests; R4/R5/R6/R13 must assert typed field durability without lr:* codec |
| Exit proof | Reload reconstructs from typed field; relatedObjects only genuine refs (prj/cyc) |
| Debt | Retire relatedObjectsCodec protocol; migrate any local candidate items (none committed) |
| Parallelism risk | LOW if single optional field on existing EpistemicItem; HIGH if second entity |

**Hard rule:** if Morris requires schemaVersion const change incompatible with “additive optional only”, that is an **additional distinct gate** — not silently inside Option A implementation.

### OPTION B — smaller compliant existing modeled mechanism proven by Git

**NONE FOUND.** No Option B fabricated.

### OPTION C — separate Recommendation table/entity

**REJECTED** under LR-D03 unless Morris reopens LR-D03. Creates parallel persistence / second carrier. Forbidden by consumed decision.

### Recommendation (≠ decision)

Recommend **OPTION A** as smallest compliant path satisfying LR-D03 + modeled doctrine + no new table. Morris must still decide Option A (and any schemaVersion const implication).

---

## 8. Qualification C — RESUME authority

### C1. assessResumeReconciliation evaluates

Pause snapshot presence + comparison of current LPS objective/context/scope, doctrine pin, trajectory fingerprint, HD fingerprint, evidence fingerprint, blockers; sibling active; LPS readability; caller material drift hint. Returns `clean`, `driftReasons`, `requiresReplanHumanDecision`.

### C2. Required facts

Cycle (+pauseReconciliation), projectId, LPS readability/version/active pointer, objective/context/scope, doctrine pin, trajectory, decisions list, evidence list, blocking reservations / blocker readability, siblingActiveExists, optional caller hint.

### C3. Does PA projection invoke it?

**NO.**

### C4. Can candidate set clean=true from snapshot presence alone?

**YES** (`reason: "pause_snapshot_present"`).

### C5. Can canResume remain true when authoritative reconciliation would be dirty?

**YES for the projection CTA surface.** `projectPilotLifecycle` may still set `canResume` from paused status; projection only forces `canResume:false` when snapshot **missing**. When snapshot **present**, it does **not** clear canResume even if material facts drifted. Transition-time assessor would still refuse RESUME — but UI/projection can **lie clean** / offer Resume as eligible.

### C6. Classification

**LIFECYCLE AUTHORITY GAP CONFIRMED.**

### C7. Smallest correction (no mutation this cycle)

Projection must:
1. gather required readers/facts, **invoke `assessResumeReconciliation`**, map `clean`/`driftReasons` into `resumeReconciliation`, set `canResume = projection.cta.canResume && reconciliation.clean`; **OR**
2. **fail closed** (`clean:false`, `canResume:false`) if required facts/readers unavailable.

**Forbid:** snapshot presence ⇒ clean.

### C8. Likely fix files (do not edit now)

- `projects/sfia-studio/app/features/project-assistant/actions.ts` (primary)
- possibly thin helper near lifecycle projection (optional)
- `LifecycleSurface.tsx` / `lifecyclePresentation.ts` only if they currently trust projection clean without surfacing driftReasons (presentation should remain non-authoritative consumers)
- tests: extend delivery +/or CORR-PROOF-05 projection-level cases

Authority remains `assessResumeReconciliation` + `PilotLifecycleTransitions` — do not duplicate assessor logic.

### C9. Required tests for later correction cycle

1. pause snapshot present + trajectory changed ⇒ canResume false / clean false
2. pause snapshot present + relevant HD fingerprint change ⇒ clean false where assessor detects
3. evidence/blocker drift cases represented by assessor
4. clean reconciliation ⇒ canResume true
5. replan HD alone ⇒ cannot clear drift
6. after durable replan + fresh clean reconciliation ⇒ resume eligible only then

---

## 9. R1–R15 reclassification (contract-level)

| ID | Class | Rationale |
| --- | --- | --- |
| R1 | PASS | ScriptedModel + outputType FINALIZE on same Runner path — mechanism reviewable |
| R2 | PASS | NEXT_CYCLE same path |
| R3 | PASS | validate fail-closed for bad bindings |
| R4 | **BLOCKED BY ARCHITECTURE GAP** | Durability green only via forbidden relatedObjects protocol; not LR-D03-compliant reload-safe typed durability |
| R5 | **BLOCKED BY ARCHITECTURE GAP** | Currentness works via same protocol; contract-level invalidation proof tethered to non-compliant carrier |
| R6 | **BLOCKED BY ARCHITECTURE GAP** | Supersession uses Epistemic status (OK) but primary CURRENT selection still depends on protocol decode |
| R7 | PASS | Materialize does not mutate Cycle (test + code) |
| R8 | PASS | NEXT_CYCLE does not create/start Cycle |
| R9 | PASS | Eligibility can exist without Recommendation |
| R10 | **FAIL** | Projection can claim clean / leave Resume eligible without authoritative assessResumeReconciliation; HD replan subject string test alone ≠ Product projection proof |
| R11 | PASS | TrajectorySurface reuse + LifecycleSurface escalate; no model calls in surface |
| R12 | PASS | Single Runner path; no second cognition engine in candidate |
| R13 | **BLOCKED BY ARCHITECTURE GAP** | Superseded not selected depends on protocol-aware selectCurrent |
| R14 | **NOT PROVEN** (functional PRESENTATION REVIEWABLE; strong visual RESERVED) | Surface distinguishes Rec/CTA/drift in code; no runtime PNG comparison vs review-v5 |
| R15 | **BLOCKED BY ARCHITECTURE GAP** | Post-model path exists, but persistence step uses non-compliant carrier |

Tests green ≠ contract proven.

---

## 10. Tests previously observed + limits

Prior Delivery reported: delivery.d0 7/7; CORR-PROOF-05 136/136; Nora runner 11/11; tsc/build/lint PASS.

Limits: those proofs do not authorize LR-D03 relatedObjects protocol; R10 projection gap not covered by CORR-PROOF-05 transition tests alone; this CORR-QUAL cycle did not re-run expensive suites (read-only qualification; no Product mutation).

Fake/Real: ZERO REAL; DETERMINISTIC PROVEN claim from Delivery is **reclassified** — durability/currentness blocked at architecture until schema gate; RESUME projection FAIL.

---

## 11. Exact blockers

1. **LR-D03 / FINDING A:** relatedObjects machine protocol — protected modeled schema delta required before compliant durability.
2. **RESUME / FINDING B:** PA projection clean from snapshot presence — authority gap; correction qualified, not implemented.
3. **Review completeness / FINDING C:** prior d9 truncated — remediated by this FULL pack.

---

## 12. Debt / exit

Debt: Option A schema Morris gate; then Product correction cycle to (1) typed Epistemic field + retire lr:* codec (2) wire assessResumeReconciliation into PA projection fail-closed (3) strengthen R4–R6/R10/R13/R15 tests (4) optional runtime visual comparison.

Exit this cycle: Morris correction decision — **not** Product implementation.

---

## 13. Recommendation to Morris (≠ decision)

1. Accept FINDING A/B/C as confirmed against local Product truth.
2. Decide **OPTION A** protected modeled EpistemicItem additive optional structured Recommendation field (and separately whether schemaVersion const must change).
3. Authorize a later Product **correction Delivery** cycle only after schema decision: implement typed carrier + RESUME projection authoritative wiring; no Product commit until that correction is reviewed.
4. Keep ZERO REAL; no PR/merge.

---

## 14. Morris decisions required

- Protected modeled schema Option A accept/reject (LR-D03 gate)
- schemaVersion const bump yes/no if Option A accepted
- Authorization of subsequent Product correction execution GO (separate from this QA cycle)
- Still later: Product commit/push/PR gates; REAL gates — not now

---

## 15. Review Pack Content Coverage

| Check | Result |
| --- | --- |
| created files full content | YES |
| modified files useful complete diff | YES |
| synthesis only | NO |
| artificial truncation present | NO (self-check below) |
| all declared Product files represented | YES |
| review pack verdict | **COMPLETE** |

---

## 16. Final verdict

**READY FOR MORRIS CORRECTION DECISION — LR-D03 SCHEMA GATE QUALIFIED — RESUME AUTHORITY FIX QUALIFIED — PRODUCT MUTATION NOT PERFORMED — ZERO REAL**

---

# APPENDIX A — CREATED PRODUCT FILES (COMPLETE CONTENT)

### CREATED FULL CONTENT — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/types.ts`

Lines: 78 · Bytes: 2573

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

### CREATED FULL CONTENT — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/relatedObjectsCodec.ts`

Lines: 197 · Bytes: 6531

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
    subjectCycleInstanceId,
    targetCycleInstanceId,
    targetCycleTypeId,
  };
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

### CREATED FULL CONTENT — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/validateLifecycleRecommendation.ts`

Lines: 170 · Bytes: 5111

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

### CREATED FULL CONTENT — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeLifecycleRecommendation.ts`

Lines: 182 · Bytes: 6236

```typescript
import type { EpistemicItem, ProvenanceRecord } from "../../domain/types";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import {
  buildRelatedObjects,
  computeBasisFingerprint,
  computeSemanticKey,
  parseLifecycleRecommendationRelatedObjects,
} from "./relatedObjectsCodec";
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
  // Stable-ish unique id; supersession uses semanticKey match among active items.
  const slug = input.semanticKey.slice(0, 16);
  const ts = input.producedAt.replace(/[^0-9A-Za-z]/g, "").slice(0, 20);
  return `epi:lr:${slug}:${ts}`;
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
  const basisFingerprint = computeBasisFingerprint(input.basisRefs);
  const semanticKey = computeSemanticKey({
    projectId: input.projectId,
    intent: input.validated.intent,
    subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
    targetCycleInstanceId: input.validated.targetCycleInstanceId,
    targetCycleTypeId: input.validated.targetCycleTypeId,
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
    relatedObjects: buildRelatedObjects({
      projectId: input.projectId,
      intent: input.validated.intent,
      subjectCycleInstanceId: input.validated.subjectCycleInstanceId,
      targetCycleInstanceId: input.validated.targetCycleInstanceId,
      targetCycleTypeId: input.validated.targetCycleTypeId,
      basisFingerprint,
      semanticKey,
    }),
    provenance: input.provenance
      ? structuredClone(input.provenance)
      : undefined,
  };
}

export function tryDecodeLifecycleRecommendationItem(
  item: EpistemicItem,
  derivedCurrentness: LifecycleRecommendationEnvelope["derivedCurrentness"],
): LifecycleRecommendationEnvelope | null {
  if (item.type !== "Recommendation") return null;
  if (item.source !== "lifecycle-recommendation:nora") return null;
  const parsed = parseLifecycleRecommendationRelatedObjects(item.relatedObjects);
  if (!parsed.intent || !parsed.basisFingerprint || !parsed.semanticKey) {
    return null;
  }
  if (!parsed.projectId) return null;

  return {
    recommendationId: item.epistemicItemId,
    projectId: parsed.projectId,
    intent: parsed.intent,
    subjectCycleInstanceId: parsed.subjectCycleInstanceId,
    targetCycleInstanceId: parsed.targetCycleInstanceId,
    targetCycleTypeId: parsed.targetCycleTypeId,
    producer: "nora",
    producedAt: item.createdAt,
    statement: item.statement,
    basisFingerprint: parsed.basisFingerprint,
    basisRefs: { projectId: parsed.projectId },
    semanticKey: parsed.semanticKey,
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
    const p = parseLifecycleRecommendationRelatedObjects(e.relatedObjects);
    return p.semanticKey === semanticKey;
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

### CREATED FULL CONTENT — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts`

Lines: 83 · Bytes: 3184

```typescript
import type { CycleInstance, EpistemicItem } from "../../domain/types";
import {
  computeBasisFingerprint,
  parseLifecycleRecommendationRelatedObjects,
} from "./relatedObjectsCodec";
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
  const parsed = parseLifecycleRecommendationRelatedObjects(
    input.item.relatedObjects,
  );
  if (!parsed.basisFingerprint) return "STALE";
  const now = computeBasisFingerprint(input.currentBasisRefs);
  return now === parsed.basisFingerprint ? "CURRENT" : "STALE";
}

/** Rebuild the validation basisSeed shape from current Product facts. */
export function rebuildBasisRefsForRecommendation(input: {
  item: EpistemicItem;
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
}): LifecycleRecommendationBasisRefs {
  const parsed = parseLifecycleRecommendationRelatedObjects(
    input.item.relatedObjects,
  );
  const subjectId = parsed.subjectCycleInstanceId;
  const targetId = parsed.targetCycleInstanceId;
  const subject = subjectId
    ? input.cycles.find((c) => c.cycleInstanceId === subjectId)
    : undefined;
  return {
    projectId: parsed.projectId ?? input.cycles[0]?.projectId ?? "",
    subjectCycleInstanceId: subjectId,
    subjectCycleStatus: subject?.status ?? null,
    targetCycleInstanceId: targetId,
    targetCycleTypeId: parsed.targetCycleTypeId,
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
    const basis = rebuildBasisRefsForRecommendation({
      item,
      cycles: input.cycles,
      lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
    });
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

### CREATED FULL CONTENT — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/produceLifecycleRecommendation.ts`

Lines: 153 · Bytes: 4866

```typescript
import type { EpistemicItem, ProvenanceRecord } from "../../domain/types";
import type { CycleInstance } from "../../domain/types";
import type { UpdateEpistemicState } from "../updateEpistemicState";
import {
  computeBasisFingerprint,
  candidateFromStructuredOutput,
} from "./relatedObjectsCodec";
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
  /** Structured candidate from Nora outputType (or deterministic Fake boundary). */
  structured: NoraLifecycleRecommendationStructuredOutput | LifecycleRecommendationCandidate;
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
 * Product path post-model: validate → materialize → decode envelope.
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

  // Fingerprint from validation seed only — read-path rebuild must mirror these fields.
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

  // Ensure basisFingerprint matches what we stored.
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

### CREATED FULL CONTENT — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`

Lines: 6 · Bytes: 250

```typescript
export * from "./types";
export * from "./relatedObjectsCodec";
export * from "./validateLifecycleRecommendation";
export * from "./materializeLifecycleRecommendation";
export * from "./currentness";
export * from "./produceLifecycleRecommendation";

```

### CREATED FULL CONTENT — `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType.ts`

Lines: 52 · Bytes: 1792

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

### CREATED FULL CONTENT — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx`

Lines: 251 · Bytes: 8054

```typescript
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

### CREATED FULL CONTENT — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.module.css`

Lines: 125 · Bytes: 2046

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

### CREATED FULL CONTENT — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecyclePresentation.ts`

Lines: 118 · Bytes: 3672

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

### CREATED FULL CONTENT — `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/lifecycleVisualContract.ts`

Lines: 30 · Bytes: 1542

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

### CREATED FULL CONTENT — `projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.delivery.d0.test.ts`

Lines: 442 · Bytes: 14253

```typescript
/**
 * Lifecycle Recommendation Product Delivery — R1–R15 deterministic proofs.
 * ZERO REAL — ScriptedModel / structured candidate on same post-model path.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
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
  createSqliteCycleServices,
  produceLifecycleRecommendation,
  projectPilotLifecycle,
  resumeReplanSubjectFor,
  selectCurrentLifecycleRecommendations,
  validateLifecycleRecommendation,
} from "@/lib/oa/cycle";
import {
  createSqliteDecisionServices,
  MemoryAuthorityResolver,
  type DecisionServices,
} from "@/lib/oa/decision";
import { runNoraAgentsTurn } from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";
import {
  NORA_LIFECYCLE_RECOMMENDATION_OUTPUT_TYPE,
  isNoraLifecycleRecommendationStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraLifecycleRecommendationOutputType";

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

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

afterEach(() => {
  while (openServices.length) {
    openServices.pop()?.dispose();
  }
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-lr-"));
  tempDirs.push(dir);
  return path.join(dir, name);
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
    title: "LR Delivery",
    objective: "lifecycle recommendation",
    context: "lr-delivery",
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

describe("Lifecycle Recommendation Delivery R1–R15", () => {
  it("R1+R2+R12+R15 — FINALIZE and NEXT_CYCLE via same Nora Runner outputType path", async () => {
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
    const nextPayload = {
      intent: "NEXT_CYCLE",
      statement: "Envisager un prochain cycle UX.",
      subjectCycleInstanceId: null,
      targetCycleInstanceId: null,
      targetCycleTypeId: "cyc:ux-ui",
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
      : (JSON.parse(r1.text || "{}") as typeof finalizePayload);
    expect(structured1.intent).toBe("FINALIZE_CURRENT_CYCLE");

    const r2 = await runNoraAgentsTurn({
      correlationId: "cor:lr-r2",
      projectId: "prj:lr-r2",
      systemInstructions: "Emit lifecycle recommendation JSON only.",
      userContent: "Recommend next cycle",
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
      : (JSON.parse(r2.text || "{}") as typeof nextPayload);
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
    expect(
      validateLifecycleRecommendation({
        projectId: "prj:lr-r3",
        candidate: {
          intent: "FINALIZE_CURRENT_CYCLE",
          statement: "x",
          subjectCycleInstanceId: "cyc:missing",
        },
        cycles,
        lpsActiveCycleInstanceId: "cyc:lr-r3",
      }).ok,
    ).toBe(false);
  });

  it("R4+R5+R6+R7+R13 — durable Epistemic, currentness, supersession, no cycle mutation", async () => {
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
    expect(produced.item.statement.includes("{")).toBe(false);
    expect(produced.envelope.derivedCurrentness).toBe("CURRENT");

    cycles = await stack.cycles.cycles.listByProject("prj:lr-r4");
    expect(cycles[0]!.status).toBe(before.status);

    const items = await stack.cycles.epistemic.listByProject("prj:lr-r4");
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
        statement: "Nouvelle recommandation de finalisation.",
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
    const prior = afterSuper.find(
      (i) => i.epistemicItemId === produced.envelope.recommendationId,
    );
    expect(prior?.status).toBe("superseded");

    const mutated = { ...cycles[0]!, status: "paused" as const };
    await stack.cycles.cycles.save(mutated);
    const stale = selectCurrentLifecycleRecommendations({
      items: afterSuper,
      cycles: [mutated],
      lpsActiveCycleInstanceId: null,
    });
    expect(stale.every((s) => s.derivedCurrentness !== "CURRENT")).toBe(true);
  });

  it("R8 — NEXT_CYCLE does not create/start Cycle", async () => {
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

  it("R9+R14 — Recommendation ≠ eligibility; projection distinguishes", () => {
    const cycles = [
      {
        schemaVersion: "0.1.0-oa" as const,
        cycleInstanceId: "cyc:lr-r9",
        projectId: "prj:lr-r9",
        cycleTypeId: "cyc:delivery",
        profile: "Standard" as const,
        status: "active" as const,
        createdAt: "2026-09-08T08:00:00.000Z",
        updatedAt: "2026-09-08T08:00:00.000Z",
        createdBy: ACTOR,
      },
    ];
    const projection = projectPilotLifecycle({
      projectId: "prj:lr-r9",
      cycles,
      lpsActiveCycleInstanceId: "cyc:lr-r9",
      currentRecommendations: [],
    });
    expect(projection.cta.canFinalize).toBe(true);
    expect(projection.currentRecommendations ?? []).toHaveLength(0);
  });

  it("R10 — resume+replan HD subject never claims drift clearance", () => {
    expect(resumeReplanSubjectFor("cyc:x")).toContain("cyc:x");
    expect(resumeReplanSubjectFor("cyc:x")).not.toMatch(/CLEAR|bypass/i);
  });

  it("R11 — TrajectorySurface reused; LifecycleSurface has no model calls", () => {
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
      ),
      "utf8",
    );
    expect(src).toContain("onEscalateTrajectory");
    expect(src).not.toMatch(/runNoraAgentsTurn|openai|completeRound/);
    const ws = fs.readFileSync(
      path.join(APP_ROOT, "features/pre-m6-product-ui/ProjectWorkspacePage.tsx"),
      "utf8",
    );
    expect(ws).toContain("LifecycleSurface");
    expect(ws).toContain("TrajectorySurface");
  });
});

```


---

# APPENDIX B — MODIFIED PRODUCT FILES (COMPLETE DIFFS vs HEAD)


### MODIFIED COMPLETE DIFF vs HEAD — `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`

Diff bytes: 1830

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

### MODIFIED COMPLETE DIFF vs HEAD — `projects/sfia-studio/app/features/project-assistant/actions.ts`

Diff bytes: 2641

```diff
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

```

### MODIFIED COMPLETE DIFF vs HEAD — `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

Diff bytes: 2940

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

### MODIFIED COMPLETE DIFF vs HEAD — `projects/sfia-studio/app/lib/nora-cognitive-runtime/types.ts`

Diff bytes: 906

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

### MODIFIED COMPLETE DIFF vs HEAD — `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleProjection.ts`

Diff bytes: 1988

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

### MODIFIED COMPLETE DIFF vs HEAD — `projects/sfia-studio/app/lib/oa/cycle/index.ts`

Diff bytes: 530

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


---

# APPENDIX C — Anti-truncation self-check

This document was generated without inserting truncation placeholders.
Post-write scan for artificial truncation marker patterns: zero hits in Product appendix content; this appendix does not restate marker literals.

# APPENDIX D — Fake/Real Qualification

Applicable: YES (Nora/OpenAI boundary exists at capability level).
This cycle: READ-ONLY; ZERO REAL; no model execution required.
Forbidden claims: READY FOR REAL; REAL BOUNDARY PROVEN; END-TO-END REAL PROVEN; runtime v3 ADOPTED.
