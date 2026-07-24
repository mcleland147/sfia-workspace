# ChatGPT Review Pack — FULL

## META

| Champ | Valeur |
|-------|--------|
| **Date/heure Europe/Paris** | 2026-07-24 12:08:46 CEST (+0200) |
| **Cycle** | Validation Option A T-A2 — Cycle / Trajectory / Epistemic / CKC |
| **Profil** | Critical |
| **Gate consommé** | `GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` |
| **Repo** | `mcleland147/sfia-workspace` |
| **origin/main** | `102b6c6c1d662c2359b1a11802f1bbc7e620935d` — feat(sfia-studio): add v3-native T-A1 Project and LPS foundation (#262) |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc` |
| **HEAD initial expected** | `633d46389f650c03a5d4c113fced41f106c2067b` |
| **HEAD initial observed** | `633d46389f650c03a5d4c113fced41f106c2067b` — MATCH |
| **HEAD final** | `bdd39d51382d228d38c83fc2f6b60de18d64f7ad` |
| **merge-base(HEAD, origin/main)** | `102b6c6c1d662c2359b1a11802f1bbc7e620935d` |
| **Status / staged / untracked** | clean tracked tree; untracked `.tmp-sfia-review/` only (local evidence; not committed) |
| **Handoff SOURCE consumed** | blob `18d8851cffdbcbc6f9e8361f83befb962bd54496` / commit `bdbc19bd5aba645fe48871e4a46fc5e416d026bc` (delivery handoff — T-A2 FOUNDATION IMPLEMENTED) |
| **Tech WT** | `/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech` |
| **Handoff WT** | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` |
| **Main checkout** | `/Users/morris/Projects/sfia-workspace` |
| **Push / PR / merge projet** | **NONE** |
| **T-A3 / DATABASE SELECTED / package.json / method/** / modeled schema edits / SQL** | **NONE** |
| **Niveau** | FULL |

## Truth Check

| Check | Résultat |
|-------|----------|
| Date Europe/Paris | 2026-07-24 12:08:46 CEST (+0200) — PASS |
| Gate | `GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A2` — PASS |
| origin/main | `102b6c6c1d662c2359b1a11802f1bbc7e620935d` — MATCH |
| Branche | `delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc` — PASS |
| HEAD initial expected | `633d463…` — MATCH observed |
| Delivery commits present | `b4a185a`, `230b4a9`, `633d463` — PASS |
| Correction chain | `d7af9cd` fix → `b7d6672` adversarial tests → `833fd14` findings → `bdd39d5` verdict align — PASS |
| merge-base | = origin/main `102b6c6…` — PASS |
| Diff delivery @633d463 | **37 files**, **+3901 / −6** — PASS |
| Diff final vs origin/main | **39 files**, **+4775 / −6** — PASS |
| Handoff source blob | `18d8851c…` type `blob` on `bdbc19bd` — PASS |
| Concurrent T-A2 PR | none opened / none pushed — PASS |
| Locks | no `.git/index.lock` — PASS |
| Working tree | only untracked `.tmp-sfia-review/` — PASS |

**Truth Check verdict:** **PASS**

## Handoff source consumed

- Branch `origin/sfia/review-handoff` commit **`bdbc19bd5aba645fe48871e4a46fc5e416d026bc`**
- Path `sfia-review-handoff/latest-chatgpt-review.md`
- Blob **`18d8851cffdbcbc6f9e8361f83befb962bd54496`** (`git cat-file -t` → `blob`)
- Content class: **Delivery** review pack (verdict `…FOUNDATION IMPLEMENTED — MORRIS VALIDATION REQUIRED`)
- This validation pack **supersedes** that delivery handoff for Morris/ChatGPT decision; it does **not** rewrite history of the delivery commit.

## CKC (for this validation cycle)

| Item | Value |
|------|-------|
| **Found / absent path** | Port `CkcResolver` + `MemoryCkcResolver` + `ResolveCycleKnowledgeContract` under `lib/oa/cycle/**` |
| **Candidate** | Registry candidate resolution **or** explicit absent guidance |
| **Experimental guidance** | Absent CKC → `level=absent`, `status=unavailable`, `fallbackPolicy=intra_v3_only` — guidance only; **does not block** `CreateCycle` |
| **executionAuthority** | **none / always false** — hostile `true` → `CKC_UNAVAILABLE` / `execution_authority_forbidden` |
| **Fallback architectural + modeled** | Only `intra_v3_only` or `none`; invalid fallback → `CKC_UNAVAILABLE` / `fallback_policy_invalid`; **no v2.6** |

Hostile CKC guard (post-correction suite green):

```typescript
// resolveCycleKnowledgeContract.ts — hard invariants
if (resolution.executionAuthority !== false && resolution.executionAuthority !== undefined) {
  return fail("CKC_UNAVAILABLE", "execution_authority_forbidden");
}
resolution.executionAuthority = false;
if (
  resolution.fallbackPolicy !== "intra_v3_only" &&
  resolution.fallbackPolicy !== "none"
) {
  return fail("CKC_UNAVAILABLE", "fallback_policy_invalid");
}
```

## Sources consulted

1. Delivery handoff blob `18d8851c…` / commit `bdbc19bd` (SOURCE consumed)
2. Canonical slice doc `sfia-v3-technical-architecture/v3-native-option-a/12-delivery-slices-dependencies-and-technical-gates.md` (T-A2 row)
3. Delivery docs `sfia-v3-delivery/v3-native-option-a/t-a2-cycle-trajectory-epistemic-ckc/{01..07,README}.md`
4. Modeled schemas (read-only): `sfia-v3-modeled/v3-native-option-a/schemas/{cycle,epistemic,doctrine}/**`
5. Implementation: `projects/sfia-studio/app/lib/oa/cycle/**`
6. Minimal T-A1 LPS linkage: `lib/oa/project/application/appendLivingProjectStateVersion.ts`, `lib/oa/project/domain/types.ts`
7. Tests: `__tests__/oa/cycle/{cycleTrajectoryEpistemicCkc,adversarialValidation,antiLegacy}.test.ts`
8. T-A1 mutex reference commit `861ca766cfd081060b1dddd6ef614aad96f264e1`
9. Local evidence `.tmp-sfia-review/validation-results-raw.txt` (tsc/lint/build/greps)
10. Prior T-A1 validation handoff pattern (`c90dd65`) for FULL pack structure

## Canonical T-A2 definition

Exact quote (doc 12 / delivery 01):

> | **T-A2** | Cycle/Trajectory/Epistemic/CKC | T-A1 | T-A2 | qualif Critical | version traj |

**MATCH** — CycleInstance / ProjectTrajectory / EpistemicItem / CkcResolution foundation with deterministic qualification and trajectory versioning. Rollback = propose restored trajectory version (never rewrite).

## Scope / Out of scope

### In scope (validated)

- Domain: `CycleInstance`, `ProjectTrajectory`, `EpistemicItem`, `CkcResolution`, qualification, invariants, structured errors
- Application use-cases: QualifyCycle, CreateCycle, GetCycle, CreateInitialTrajectory, GetCurrentTrajectory, GetTrajectoryVersion, ProposeTrajectoryVersion, GetEpistemicState, UpdateEpistemicState, ResolveCycleKnowledgeContract
- Ports + in-memory infrastructure (transactional store, repos, MemoryCkcResolver, audit)
- Minimal T-A1 LPS append linkage fields (trajectoryId/version, activeCycleInstanceId, ckcResolutionRef, epistemicItemIds) with carry-forward
- Adversarial validation + fixes for proven blockers B1/B3/B4/E
- Delivery + validation documentation under `t-a2-cycle-trajectory-epistemic-ckc/**`

### Out of scope

HumanDecision · Confirmation · ExecutionContract · agents · Evidence · ReviewBundle · ClaimEvaluation · UI Option A · cutover v2.6 · MethodMode/OPS1 suppression · SQL migration · IAM · **DATABASE SELECTED** · T-A3 · Critical Morris ack (Critical stays `proposed`) · inventing T-A1 `reservationIds` API (B5 reserve) · push/PR/merge

## Diff initial (37 files +3901/−6 at delivery HEAD)

At delivery HEAD `633d46389f650c03a5d4c113fced41f106c2067b` vs `origin/main` `102b6c6…`:

```
37 files changed, 3901 insertions(+), 6 deletions(-)
```

Delivery commit chain (local only, never pushed):

| SHA | Message |
|-----|---------|
| `b4a185a424b75dd12e1b640198646f11be9aa469` | feat(sfia-studio): add v3 Cycle and Trajectory foundation |
| `230b4a967ccf6f0912989b523a1c83c917cb84e0` | test(sfia-studio): validate T-A2 qualification and trajectory invariants |
| `633d46389f650c03a5d4c113fced41f106c2067b` | docs(sfia-studio): document Option A T-A2 delivery |

## Architecture

Modular monolith module `projects/sfia-studio/app/lib/oa/cycle/**` mirroring T-A0/T-A1:

```
QualifyCycle → recommendation only (isMorrisDecision=false)
CreateCycle → ProjectServices.GetProject → persist CycleInstance
CreateInitialTrajectory / ProposeTrajectoryVersion
  → clone-first steps → validate → TrajectoryRepository (mutex)
  → AppendLivingProjectStateVersion (expectedVersion / expectedLpsVersion)
ResolveCycleKnowledgeContract → CkcResolverPort (guidance; executionAuthority=false)
UpdateEpistemicState → refuse Hypothesis/Observation→DecisionRef promotion
```

Layers:

- **domain** — types, errors, invariants, qualification
- **application** — ten use-cases listed above
- **ports** — cycle/trajectory/epistemic repos, CkcResolver, CycleAudit
- **infrastructure** — `MemoryCycleStore` (+ queue mutex `runInTransaction`), memory repos (structuredClone R/W), `MemoryCkcResolver`, observability journals
- **index** — `createInMemoryCycleServices` / `createTestCycleServices` (injects `ProjectServices`)

Consumption: `@/lib/oa/project` and `@/lib/oa/doctrine` public barrels only. No `method/**`, ops1, d1, sfia-context imports (anti-legacy suite).

## Cycle domain

- Identity `cyc:…`; types e.g. `cyc:capitalization`
- Required modeled fields: schemaVersion, cycleInstanceId, cycleTypeId, projectId, profile, status, createdAt
- `profile` ∈ {Light, Standard, Critical} — **Capitalization is NOT a profile enum value** (schema gap → cycleTypeId)
- Critical → `status=proposed` until explicit Morris ack (out of T-A2)
- Light/Standard → `status=acknowledged`
- Absent CKC does not block CreateCycle
- QualifyCycle never consumes gates / never sets `isMorrisDecision=true`

## Qualification + signal priority + Standard default + Light + Critical + Capitalization

Deterministic signal priority (no invented scores):

1. Any Critical signal (`structuralChange` | `securityImpact` | `architectureImpact` | `dataImpact` | `irreversible`) → **Critical**; Create requires non-empty justification else `CYCLE_CRITICAL_JUSTIFICATION_REQUIRED`
2. Else `lowRiskBounded` → **Light**
3. Else → **Standard** (default)
4. RequestedProfile Light **without** `lowRiskBounded` → Standard (edge proven)
5. Critical signal wins even when `lowRiskBounded` also set (edge proven)
6. Capitalization = `cycleTypeId: cyc:capitalization` + profile from signals (typically Standard) — not a fourth profile enum

Adversarial proofs: `Critical wins when lowRiskBounded…`, `requestedProfile Light without lowRiskBounded yields Standard`, `Create refuses requested Critical without signals and empty justification`, `Capitalization cycleTypeId keeps profile from signals…`

## Status proposed/acknowledged + absence Morris decision

| Profile | Create status | Morris decision |
|---------|---------------|-----------------|
| Critical | `proposed` | **absent** — `isMorrisDecision=false` always on Qualify; never auto-ack |
| Light / Standard | `acknowledged` | N/A (no Critical gate) |

Proof: `never auto-acks Critical and never sets isMorrisDecision`.

## Trajectory + versioning + concurrency + logical rollback + cyclic deps + UTF-8 limit

- v1 via `CreateInitialTrajectory` (status candidate|active)
- Propose requires `expectedVersion` + `expectedLpsVersion`; supersedes prior; installs new version as current
- Optimistic concurrency: re-check `expectedVersion === current.version` **inside** `runInTransaction` mutex → `TRAJECTORY_VERSION_CONFLICT` (retryable)
- Concurrent same `expectedVersion`: one success + one conflict (proven)
- Cyclic dependencies → `TRAJECTORY_INVALID` / `cyclic_dependencies`
- Orphan deps → `orphan_dependency` (B3 fix); self-deps → `self_dependency`
- Logical rollback = propose new version restoring prior steps (never rewrite historical versions)
- Size: `MAX_TRAJECTORY_SNAPSHOT_BYTES = 256_000` UTF-8 bytes via `Buffer.byteLength(JSON.stringify(...), "utf8")`
- Propose status allowlist (B4 fix): `candidate|validated|active` only — `stale`/`superseded` refused (`propose_status_not_currentable`)

## Epistemic + promotion forbidden

Types: Observation · Hypothesis · Option · Recommendation · DecisionRef · Reservation · Contradiction · EvidenceRef.

- Observation fact-like requires `source` or `provenance`
- Auto promotion Hypothesis→DecisionRef **forbidden** (`EPISTEMIC_PROMOTION_FORBIDDEN` → modeled `AUTHORITY_DENIED`)
- Detection paths: `promoteFromHypothesis` flag; supersede Hypothesis as DecisionRef; **same-id overwrite** Hypothesis→DecisionRef or Observation→DecisionRef (finding **E** fixed)

```typescript
// invariants.ts — same-id promotion guard (fix E)
if (input.epistemicItemId) {
  const sameId = input.existing.find(
    (e) => e.epistemicItemId === input.epistemicItemId,
  );
  if (sameId && sameId.type === "Hypothesis") {
    return {
      detailCode: "EPISTEMIC_PROMOTION_FORBIDDEN",
      reason: "same_id_hypothesis_to_decision_ref",
    };
  }
  if (sameId && sameId.type === "Observation") {
    return {
      detailCode: "EPISTEMIC_PROMOTION_FORBIDDEN",
      reason: "same_id_observation_to_decision_ref",
    };
  }
}
```

```typescript
// updateEpistemicState.ts — passes epistemicItemId into guard
const promotion = assertNoHypothesisDecisionPromotion({
  epistemicItemId: raw.epistemicItemId,
  nextType: raw.type,
  promoteFromHypothesis: raw.promoteFromHypothesis,
  supersedes: raw.supersedes,
  existing,
});
```

## CKC resolution + hostile CKC

- Happy path: resolver returns candidate or absent guidance; `executionAuthority` forced false
- Hostile resolver granting `executionAuthority: true` → fail closed `CKC_UNAVAILABLE`
- Invalid `fallbackPolicy` → fail closed
- CreateCycle proceeds even when CKC absent/unavailable
- Anti-legacy: infrastructure never sets `executionAuthority: true`; no v2.6 strings as authority

## Project/LPS integration + carry-forward + atomicity + fault injection

### Intentional LPS touch (NOT accidental T-A1 edit during correction)

Commit `b4a185a` (foundation) modified only:

- `appendLivingProjectStateVersion.ts` — optional linkage fields + `pickLink` carry-forward / explicit `null` clear; constraints/stakeholders/decisionIds preserved from current
- `types.ts` — optional request fields `trajectoryId`, `trajectoryVersion`, `activeCycleInstanceId`, `ckcResolutionRef`, `epistemicItemIds`

Correction commits `d7af9cd` / `b7d6672` / `833fd14` / `bdd39d5` **did not** touch `lib/oa/project/**`. **No unexpected T-A1 LPS change in validation corrections.** Keep intentional non-breaking linkage from foundation commit.

### Carry-forward gap (B5 / R6 — OPEN RESERVE)

T-A1 `AppendLivingProjectStateVersion` still does **not** accept or carry `reservationIds` / `contradictionIds` / `evidenceIds` / similar satellite arrays. T-A2 trajectory link cannot invent that API. Adversarial probe documents the reserve without inventing fields.

### Atomicity

- Within Cycle store: snapshot/rollback via `MemoryCycleStore.runInTransaction` + queue mutex (same pattern as T-A1 `861ca76`)
- Cross-store Project↔Cycle: **no distributed transaction** — fixed order (cycle/trajectory first, LPS append next; rollback cycle if LPS fails before cycle commit). Reserve **R1**.

### Fault injection

`failNextSave: "cycle" | "trajectory" | "epistemic"` — proven rollback with `PERSISTENCE_FAILURE` and no partial current pointer.

## Immutability / anti-aliasing

- Repos: `structuredClone` on read, write, and list
- Application returns: `structuredClone` of cycle/trajectory/epistemic aggregates
- Clone-first on inbound `request.steps` (B1) before any `await`
- Adversarial: `mutating returned epistemic does not mutate store`
- Foundation suite: `does not alias returned cycle/trajectory/epistemic into the store`

## Repositories / transactions / mutex (compare T-A1 861ca76)

| Concern | T-A1 (`861ca76`) | T-A2 |
|---------|------------------|------|
| Store | `MemoryProjectStore` | `MemoryCycleStore` |
| Txn | `begin/commit/rollback` + snapshot maps | identical pattern |
| Mutex | promise queue on `runInTransaction` | identical promise queue |
| Version check | `expectedVersion` **inside** txn | trajectory `expectedVersion` **inside** txn |
| failNextSave | project/LPS hooks | cycle/trajectory/epistemic hooks |
| Cross-aggregate | Project+LPS same store | Cycle+Traj+Epistemic same store; LPS via T-A1 separate store (R1) |

```typescript
// memoryCycleStore.ts — queue mutex (T-A1 parity)
async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
  const run = async (): Promise<T> => {
    this.begin();
    try {
      const result = await fn();
      this.commit();
      return result;
    } catch (err) {
      this.rollback();
      throw err;
    }
  };
  const next = this.queue.then(run, run);
  this.queue = next.then(() => undefined, () => undefined);
  return next;
}
```

## Errors matrix + retryability

| Detail code | Modeled `code` | retryable (default) |
|-------------|----------------|---------------------|
| CYCLE_CRITICAL_JUSTIFICATION_REQUIRED | DECISION_REQUIRED | false |
| TRAJECTORY_VERSION_CONFLICT | STATE_CONFLICT | **true** |
| LPS_VERSION_CONFLICT | STATE_CONFLICT | **true** |
| CONTEXT_STALE | CONTEXT_STALE | **true** |
| PERSISTENCE_FAILURE | STATE_CONFLICT | **true** |
| EPISTEMIC_PROMOTION_FORBIDDEN | AUTHORITY_DENIED | false |
| CKC_UNAVAILABLE | CKC_UNAVAILABLE | false |
| TRAJECTORY_INVALID / CYCLE_INVALID / *_NOT_FOUND / *_ALREADY_EXISTS / EPISTEMIC_INVALID | STATE_CONFLICT | false |

Safe messages only; no raw exception leakage in structured errors. Detail codes finer than modeled ErrorRecord enum → debt **T-A2-D08** (documented; mapping stable).

## Provenance / security / prototype pollution

- `createdBy.actorId` required on mutating commands
- Provenance cloned via `structuredClone` when present
- Identifiers validated (`prj:`, `cyc:`, `trj:`, `stp:`, `epi:`) via `isOaIdentifier`
- No `Object.assign` onto untrusted prototypes for domain aggregates; inputs validated field-by-field
- Hostile CKC cannot grant execution authority
- Secrets grep on OA paths: no matches (exit 1 = clean)
- Legacy import grep: no matches
- method/ path grep: no matches
- SQL: only benign `validate`/`execute` identifier hits in doctrine (pre-existing); no migrations added

## Observability

Minimal audit events (no trajectory/epistemic payload content):

- `oa.cycle.qualified` / `oa.cycle.created`
- `oa.trajectory.created` / `oa.trajectory.version_proposed` / `oa.trajectory.version_conflict`
- `oa.epistemic.updated`
- `oa.ckc.resolved`

Sinks: `MemoryCycleAuditJournal` (tests) / `ConsoleCycleAuditJournal` (JSON line).

## Performance

- Dedicated large-payload smoke **skipped** due to path/alias constraints in this WT layout; not required for foundation gate
- Full `__tests__/oa/cycle` suite: **48 PASS in ~414ms** (sub-second)
- No premature optimization; in-memory only; 256KB hard cap prevents unbounded snapshots

## Tests before (26) / adversarial added / after (48) + T-A1 30 + T-A0 28 + platform 10

| Suite | Before validation | After validation | Command exit |
|-------|-------------------|------------------|--------------|
| `__tests__/oa/cycle` | **26 PASS** | **48 PASS** | exit 0 |
| `__tests__/oa/project` (T-A1) | 30 | 30 | exit 0 |
| `__tests__/oa/doctrine` (T-A0) | 28 | 28 | exit 0 |
| platform + fixtures | 10 | 10 | exit 0 |

Adversarial file: `__tests__/oa/cycle/adversarialValidation.test.ts` (22 cases). Initial adversarial run proved **7 FAIL** (blockers) then all green after fixes.

### Adversarial test names (complete)

1. `ignores cycle injected after clone-before-validate (no cyclic persist)` — B1
2. `ignores orphan dep injected after clone-before-validate` — B1
3. `rejects dependency pointing to non-existent stepId` — B3
4. `rejects self-dependency` — B3b
5. `refuses stale status that would orphan current pointer` — B4
6. `refuses superseded status on propose` — B4
7. `allows candidate|validated|active on propose` — B4 allowlist
8. `returns CKC_UNAVAILABLE when resolver grants executionAuthority` — hostile CKC
9. `returns CKC_UNAVAILABLE for invalid fallbackPolicy` — hostile CKC
10. `Critical wins when lowRiskBounded and critical signal both set` — Q
11. `requestedProfile Light without lowRiskBounded yields Standard` — Q
12. `Create refuses requested Critical without signals and empty justification` — Q
13. `Capitalization cycleTypeId keeps profile from signals not Capitalization enum` — Q/D02
14. `rolls back cycle save failure with PERSISTENCE_FAILURE` — R
15. `rolls back trajectory save failure with no partial state` — R
16. `rolls back epistemic save failure with PERSISTENCE_FAILURE` — R
17. `mutating returned epistemic does not mutate store` — I
18. `one success and one TRAJECTORY_VERSION_CONFLICT for same expectedVersion` — C
19. `never auto-acks Critical and never sets isMorrisDecision` — Crit
20. `forbids Hypothesis→DecisionRef via same-id type overwrite` — E
21. `forbids Observation→DecisionRef via same-id type overwrite` — E
22. `documents that T-A2 trajectory link does not invent reservationIds API` — B5 reserve

Re-run evidence (2026-07-24 12:07 CEST):

```
npx vitest run __tests__/oa/cycle  → Test Files 3 passed; Tests 48 passed; Duration ~414ms; exit 0
npx vitest run __tests__/oa/project → Tests 30 passed; exit 0
```

## Typecheck lint build diff-check secrets SQL package schema legacy

From `.tmp-sfia-review/validation-results-raw.txt` + re-runs:

| Check | Command / scope | Exit |
|-------|-----------------|------|
| T-A0 doctrine tests | vitest `__tests__/oa/doctrine` | **0** (28) |
| Platform tests | vitest platform + fixtures | **0** (10) |
| `tsc` | project typecheck | **0** |
| `next lint` | `OA_LINT_TARGETS=lib/oa __tests__/oa` | **0** (no warnings) |
| `next build` | production build | **0** (~6.9s) |
| diff-check | protected/path policy | **0** |
| secrets grep | OA paths | **1** (no matches — desired) |
| SQL grep | no migrations; benign validate hits only | cleaned / non-blocking |
| method/ grep | | **1** (no matches — desired) |
| legacy imports grep | | **1** (no matches — desired) |
| package.json | unchanged vs origin/main | PASS |
| modeled schemas | unchanged | PASS |
| SQL migrations | none added | PASS |

## Findings blockers (B1 B3 B4 E) with proof

### B1 — TOCTOU on `request.steps` (BLOCKER → FIXED)

**Defect:** validate then `await` then clone allowed caller to mutate `request.steps` after validation (inject cycle / orphan dep) and persist invalid graph.

**Proof (pre-fix):** adversarial tests failed — cycle/orphan injected after validate could persist.

**Fix:** clone-first in both `CreateInitialTrajectory` and `ProposeTrajectoryVersion`:

```typescript
// proposeTrajectoryVersion.ts / createInitialTrajectory.ts
// Clone FIRST then validate — closes TOCTOU on request.steps mutation after await.
const steps = structuredClone(request.steps);
const status = request.status ?? "candidate";
// ... validateProposeTrajectoryStatus(status) on propose ...
const stepsViolation = validateTrajectorySteps(steps);
```

**Post-fix proof:** `ignores cycle injected after clone-before-validate…`, `ignores orphan dep injected after clone-before-validate` — PASS.

### B3 — Orphan dependencies accepted (BLOCKER → FIXED)

**Defect:** DFS skipped unknown deps, so orphan `dependencies: ["stp:missing"]` passed validation.

**Fix:** after collecting `seen` stepIds, reject deps not in set; also explicit self-dep:

```typescript
if (dep === step.stepId) {
  return { detailCode: "TRAJECTORY_INVALID", reason: "self_dependency" };
}
// ...
for (const step of steps) {
  for (const dep of step.dependencies ?? []) {
    if (!seen.has(dep)) {
      return { detailCode: "TRAJECTORY_INVALID", reason: "orphan_dependency" };
    }
  }
}
```

**Proof:** `rejects dependency pointing to non-existent stepId`, `rejects self-dependency` — PASS.

### B4 — Propose `stale`/`superseded` orphans current pointer (BLOCKER → FIXED)

**Defect:** Propose accepted non-currentable statuses that could leave current pointer on a stale/superseded snapshot semantics.

**Fix:** allowlist:

```typescript
export const PROPOSE_CURRENTABLE_STATUSES = ["candidate", "validated", "active"] as const;
export function validateProposeTrajectoryStatus(status) {
  if (status === undefined) return null;
  if (!(PROPOSE_CURRENTABLE_STATUSES as readonly string[]).includes(status)) {
    return { detailCode: "TRAJECTORY_INVALID", reason: "propose_status_not_currentable" };
  }
  return null;
}
```

**Proof:** `refuses stale status…`, `refuses superseded status on propose`, `allows candidate|validated|active on propose` — PASS.

### E — Same-id Hypothesis/Observation → DecisionRef overwrite (BLOCKER → FIXED)

**Defect:** promotion guard missed same-`epistemicItemId` type overwrite to DecisionRef.

**Fix:** pass `epistemicItemId` into `assertNoHypothesisDecisionPromotion` (excerpts above).

**Proof:** `forbids Hypothesis→DecisionRef via same-id…`, `forbids Observation→DecisionRef via same-id…` — PASS.

## Findings non-blocking / reserves (B5 R1 R2…)

| ID | Title | Severity | Disposition |
|----|-------|----------|-------------|
| **B5 / R6** | LPS satellite ids (`reservationIds`, etc.) not carried by T-A1 append API | Non-blocking | **OPEN RESERVE** — T-A1 debt; do not invent API in T-A2 |
| **R1** | No strict cross-store atomicity Project↔Cycle | Accepted reserve | Dual mutex / ordered calls only |
| **R2** | Critical Morris ack out of scope | By design | Critical stays `proposed` |
| **R3** | Capitalization ∉ profile enum | Schema gap | cycleTypeId only (D02) |
| **R4** | ErrorRecord enum narrower than detail codes | Debt | mapping T-A2-D08 |
| **R5** | No DB | By design | memory reversible; NOT DATABASE SELECTED |

Hostile CKC / qualification / failNextSave / immutability / concurrency / Critical-proposed: already correct at delivery; re-proven adversarial (non-regressions).

## Corrections complete (with code excerpts or clear diffs of the 4 fixed areas)

Correction commit: **`d7af9cdf82e35a83ae8c70fa110fb9d72ee1bf18`** — `fix(sfia-studio): correct T-A2 validation findings` (4 files, +83/−11).

| Area | Files | Essence |
|------|-------|---------|
| 1. Clone-first TOCTOU | `createInitialTrajectory.ts`, `proposeTrajectoryVersion.ts` | `structuredClone(request.steps)` before validate/await |
| 2. Orphan + self deps | `invariants.ts` `validateTrajectorySteps` | `orphan_dependency` / `self_dependency` |
| 3. Propose status allowlist | `invariants.ts` `validateProposeTrajectoryStatus` + propose use-case | currentable only |
| 4. Same-id promotion | `invariants.ts` + `updateEpistemicState.ts` | Hypothesis/Observation→DecisionRef blocked |

Follow-on:

- `b7d6672` — `test(sfia-studio): strengthen T-A2 adversarial validation`
- `833fd14` — `docs(sfia-studio): record T-A2 validation findings`
- `bdd39d5` — `docs(sfia-studio): align T-A2 validation verdict string`

## Files created/modified/deleted

### Final vs origin/main (39 files, +4775/−6)

**Created (cycle module + tests + docs):** full `lib/oa/cycle/**` tree; `__tests__/oa/cycle/{antiLegacy,cycleTrajectoryEpistemicCkc,adversarialValidation}.test.ts`; `sfia-v3-delivery/.../t-a2-*/{01..07,README}.md`.

**Modified (intentional T-A1 linkage only at foundation):**

- `lib/oa/project/application/appendLivingProjectStateVersion.ts`
- `lib/oa/project/domain/types.ts`

**Deleted:** none.

### Validation delta vs delivery `633d463` (10 files, +899/−25)

- A `adversarialValidation.test.ts`
- M `createInitialTrajectory.ts`, `proposeTrajectoryVersion.ts`, `updateEpistemicState.ts`, `invariants.ts`
- M/A docs `04`, `05`, `06`, `07`, `README`

## Protected files untouched

Confirmed `git diff --name-only origin/main...HEAD` has **no** hits on:

- `method/**`
- `package.json` / lockfile changes for this slice
- modeled `schemas/**` writes
- `*.sql` migrations
- ops1 / d1 authority cutover

Anti-legacy tests enforce import boundaries.

## Diff final vs origin/main and vs 633d463

```
origin/main...HEAD (bdd39d5):  39 files changed, 4775 insertions(+), 6 deletions(-)
633d463...HEAD:               10 files changed, 899 insertions(+), 25 deletions(-)
origin/main...633d463:         37 files changed, 3901 insertions(+), 6 deletions(-)
```

## Correction commits

| SHA | Message |
|-----|---------|
| `d7af9cdf82e35a83ae8c70fa110fb9d72ee1bf18` | fix(sfia-studio): correct T-A2 validation findings |
| `b7d6672…` | test(sfia-studio): strengthen T-A2 adversarial validation |
| `833fd1483c5aab89da84aa169461521b36052749` | docs(sfia-studio): record T-A2 validation findings |
| `bdd39d51382d228d38c83fc2f6b60de18d64f7ad` | docs(sfia-studio): align T-A2 validation verdict string |

Full branch (`origin/main..HEAD`): `b4a185a` → `230b4a9` → `633d463` → `d7af9cd` → `b7d6672` → `833fd14` → `bdd39d5`.

## Decisions T-A2-D01..D10 with recommended ACCEPT/ACCEPT WITH RESERVE (Morris open)

| ID | Recommendation | Rationale |
|----|----------------|-----------|
| **T-A2-D01** | **ACCEPT** | Module isolation held under adversarial + anti-legacy suites |
| **T-A2-D02** | **ACCEPT** | Capitalization via `cycleTypeId` confirmed; profile enum gap documented |
| **T-A2-D03** | **ACCEPT** | Qualification edges confirmed (Critical wins, Light→Standard, justification, Capitalization) |
| **T-A2-D04** | **ACCEPT** | Critical stays `proposed`; no invented Morris decision |
| **T-A2-D05** | **ACCEPT WITH RESERVE** | Versioning + concurrency OK; B1/B3/B4 fixed; R1/B5 remain |
| **T-A2-D06** | **ACCEPT** | In-memory + ports; failNextSave rollback proven; NOT DATABASE SELECTED |
| **T-A2-D07** | **ACCEPT** | Hostile CKC denied; absent CKC guidance-only |
| **T-A2-D08** | **ACCEPT** | Detail codes + modeled mapping unchanged; new causes under existing codes |
| **T-A2-D09** | **ACCEPT** | 256_000 UTF-8 size cap unchanged |
| **T-A2-D10** | **ACCEPT WITH RESERVE** | Foundation-only; B5/R1 reserves; no UI / no T-A3 |

**Morris status:** decisions are **recommendations only** — **NOT consumed**, **NOT VALIDATED** by Morris in this pack.

## Reserves / Debt / Anti-claims

**Reserves:** R1 cross-store atomicity; R2 Critical ack; R3 Capitalization schema gap; R4 ErrorRecord enum; R5 no DB; **R6/B5** LPS satellite carry-forward.

**Debt:** T-A2-D08 detail-code mapping documentation; future T-A1 append API for reservation/contradiction/evidence ids if product requires carry-forward.

**Anti-claims:** Pas MERGED · Pas PUSH projet · Pas PR · Pas Morris validated · Pas T-A3 AUTHORIZED · Pas DATABASE SELECTED · Pas B5 fixed in T-A1 · Pas UI Option A · Pas v2.6 fallback authority.

## Working tree final

```
On branch delivery/sfia-studio-v3-native-option-a-t-a2-cycle-trajectory-epistemic-ckc
Untracked files:
  .tmp-sfia-review/
nothing added to commit but untracked files present
HEAD = bdd39d51382d228d38c83fc2f6b60de18d64f7ad
```

## Push/PR/merge/T-A3 = NONE

No `git push` of project branch. No PR. No merge to main. No T-A3 authorization. Handoff publish is **review-handoff branch only** (separate from project delivery branch).

## Verdict exact (allowed string)

**SFIA STUDIO V3-NATIVE OPTION A T-A2 VALIDATION PASSED AFTER CORRECTION — MORRIS DECISION REQUIRED**
