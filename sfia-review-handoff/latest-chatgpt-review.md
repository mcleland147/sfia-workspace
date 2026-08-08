# Cycle 6 Standard — T7 SHADOW Temporal Mode Semantics Architecture — Review Pack (full)

## 1. Date / heure

- **CEST:** 2026-08-08 21:47:09 UTC+02:00
- **UTC:** 2026-08-08 19:47:09 UTC

## 2. GO Morris résolu

Utterance: `ok go`

Resolved: **GO Cycle 6 — Architecture technique — TEMPORAL MODE SEMANTICS analysis.**

Authorized: repo read · architecture analysis · useful Git history · tests analysis · options matrix · recommendation · FULL pack · L3 handoff.

Not authorized: auto-select option · code/tests/157 mutate · ADR versioned · project commit · Delivery branch · project push · PR · merge · SHADOW row · policy source · threshold · SHADOW activation · MONITOR · E1 · T3 · T5 · T6-ext · Product IAM.

## 3. Cycle / profil

- **Cycle:** 6 — Architecture technique
- **Profil:** Standard
- **Nature:** analyse / décision d'architecture · **READ-ONLY PROJECT CONTENT**
- **CKC:** `pilots/03-architecture-technique.md` candidate v0.1.0 — experimental cognitive guidance
- **Blocs:** FinOps · architecture technique · résilience · observabilité · DevOps/testabilité
- Ne PAS promouvoir ce cycle en Critical.

## 4. Git Truth

| Ref | Valeur |
|-----|--------|
| worktree | `finops-t2-main` |
| branch | `main` |
| HEAD | `fd06f4aa1a19e629e0330473e43b1cf3b935014f` |
| origin/main | `fd06f4aa1a19e629e0330473e43b1cf3b935014f` |
| tracked/staged | clean |
| untracked | `.tmp-sfia-review/**` only |
| Delivery remote | **ABSENT** (post Cycle 14 cleanup) |
| PR #321 | MERGED |
| SHADOW | NOT ACTIVATED |
| Policy source | NOT SELECTED |
| Temporal drift | OPEN |

## 5. Handoff entrant

- tip: `39a4e4331df76418f94b5ba8c08a89cb4ccb9c9e`
- blob: `69c45084e6fdbf15f14e8ae0fd0fb8378522ee5e`
- Cycle 14 Standard — T7 SHADOW PR #321 Post-Merge
- Confirmed: main=fd06f4aa · QA-G4 PASS WITH RESERVES · OA→OPS1 CLOSED · whitespace CLOSED · Delivery cleaned · policy NOT SELECTED · TEMPORAL MODE DRIFT OPEN · SHADOW NOT ACTIVATED

## 6. Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md`
- `composeFinOpsT7ShadowExecutionDeps.ts`
- `composeExecutionRunD2D3T7ShadowPilot.ts`
- `composeExecutionRunD2D3.ts`
- `coordinateExecutionRun.ts`
- `composeFinOpsT7Runtime.ts`
- `resolveFinOpsRollout.ts`
- `types.rollout.ts`
- `finopsCapturePort.ts`
- `finopsEnforcementPort.ts`
- tests: `t7.shadow-option-a.unit.test.ts`, `t7.shadow-option-a.wiring.integration.test.ts`
- handoff Cycle 14 canonique

## 7. Current runtime sequence (proven)

```
coordinateExecutionRun
  → (create run / pre-engagement)
  → finopsEnforcement.evaluateBeforeProvider({projectId, executionRunId, ...})
       → composeFinOpsT7ShadowExecutionDeps.evaluateBeforeProvider
       → t7.resolveProjectRollout(projectId)   # READ #1 — PRE
  → provider invocation (if not blocked; SHADOW never blocks)
  → on provider success (AI lane):
       captureFinOpsAfterAiSuccess
       → deps.finops.captureUsage({projectId, executionRunId, ...})
            → composeFinOpsT7ShadowExecutionDeps.captureUsage
            → t7.resolveProjectRollout(projectId)   # READ #2 — POST
```

Wiring proof (`composeExecutionRunD2D3T7ShadowPilot.ts`):
- `finops: shadowDeps.capture`
- `finopsEnforcement: shadowDeps.finopsEnforcement`
- coordinator injection surface unchanged (`composeExecutionRunD2D3`).

## 8. Double-read proof

In `composeFinOpsT7ShadowExecutionDeps.ts`:

1. PRE path L167: `instruction = await t7.resolveProjectRollout(projectId)` inside `evaluateBeforeProvider`
2. POST path L257: `instruction = await t7.resolveProjectRollout(projectId)` inside `captureUsage`

Confirmed:
- same `projectId` and `executionRunId` flow from coordinator into both ports
- **two distinct rollout reads**
- **no per-run snapshot**
- **no rollout context propagated PRE→POST**
- **no SHADOW mutation** in composer (read-only resolve)
- no Map/WeakMap/process cache/snapshot fields in adapter or pilot composer

## 9. Temporal matrix (current = live re-read)

| PRE mode | POST mode | PRE behavior | Provider | Capture | Observation consistency |
|----------|-----------|--------------|----------|---------|-------------------------|
| OFF | OFF | inert allow (`rollout_not_shadow_inert`) | continues | disabled (`shadow_capture_inactive`) | coherent inert |
| SHADOW | SHADOW | SHADOW eval, effect forced `signal_only`, never block | continues | may capture via T7 capture | coherent SHADOW |
| **OFF** | **SHADOW** | inert PRE | continues | **may capture as SHADOW** | **DRIFT — named reserve** |
| **SHADOW** | **OFF** | SHADOW eval PRE | continues | **disabled** | **rollback observation cuts capture** |
| missing/non-SHADOW | SHADOW | inert PRE | continues | may capture | drift-like |
| SHADOW | missing/OFF | SHADOW PRE | continues | disabled | rollback-like |
| PRE rollout read fail | * | `failed` finops-side (`rollout_resolve_failed`) — provider continues (fail-open) | continues | independent POST read | PRE diagnostic unresolved |
| * | POST rollout read fail | * | * | disabled (`shadow_capture_rollout_failed_inert`) | capture omitted |

**Historical reserve OFF→SHADOW:** a run can be captured as SHADOW without having been evaluated SHADOW at PRE.

**SHADOW→OFF:** rollback OFF takes effect before capture under current semantics.

## 10. Invariants (non-negotiable for any option)

I1 SHADOW never BLOCK · I2 effect forced signal_only · I3 OFF/missing inert · I4 non-pilot inert · I5 MONITOR/E1 inert in this composer · I6 fail-open provider continuity · I7 no implicit production threshold · I8 temporal arch must not select policy source · I9 no OA→OPS1 · I10 no global identity authority · I11 rollback explicit/understandable · I12 no cross-run contamination · I13 no unbounded process memory · I14 deterministic testability.

## 11. Central architecture question

Distinguish:

- **A. CURRENT mode** — project configuration at the moment a boundary executes
- **B. FOR-RUN mode** — mode to which an `executionRun` is bound once started

Current code implements **A** at every boundary.

Decision Morris must make: is FinOps SHADOW observation integrity defined per **step-time** or per **run start**?

## 12. Option A — LIVE RE-READ (current)

**Principle:** each boundary re-reads current rollout.

### Advantages
- Already implemented; zero new state
- No propagation / lifecycle
- SHADOW→OFF rollback cuts capture immediately
- Config flips visible at next boundary without stale latch

### Disadvantages
- OFF→SHADOW drift (named reserve)
- PRE diagnostic and POST capture can narrate different regimes
- Audit ambiguity for mid-run activation

### Debt
- Current: observational inconsistency debt (OPEN reserve), not safety debt (I1–I7 hold)
- Keeping A means **accepting** step-current semantics as product design

### Activation impact
- Before SHADOW activation, A is low operational risk (no live SHADOW)
- After activation, FinOps observations may include mid-run activations without PRE soft_signal history

### Can A be kept intentionally?
YES — by documenting that mode is CURRENT-at-boundary, not FOR-RUN. That closes the reserve as **ACCEPTED DESIGN**, not as a bug.

## 13. Option B — PER-RUN SNAPSHOT

**Principle:** resolve mode once for the run; reuse for PRE + POST.

### Latch moment candidates
1. run create — earliest, may precede FinOps injection relevance
2. **just before evaluateBeforeProvider** — preferred: first FinOps boundary
3. other — not justified

### Flip behaviors
- Snapshot SHADOW then OFF during provider → capture would continue under SHADOW (rollback delayed for in-flight)
- Snapshot OFF then SHADOW during provider → capture stays inactive (no retroactive)

### Implementation sketches (NOT executed)

**B1. Explicit coordinator/run context propagation**
- MODIFY: `coordinateExecutionRun.ts`, possibly domain run types, ports
- Impact: core execution-run contract
- Debt: higher blast radius

**B2. Run-scoped token / context object**
- Similar to B1; needs transport through capture call chain
- Core or port signature change likely

**B3. Adapter Map keyed by executionRunId**
- CREATE/MODIFY mostly adapter
- RISK: process-local unbounded Map without cleanup = **REJECT pattern** unless hard lifecycle (delete on capture + fail paths + TTL/cap + multi-instance caveat)
- Multi-instance: Map is not shared across processes — inconsistent unless mode is also durable (undesired)

### Assessment
- Better intra-run audit coherence than A
- **Worse** observational rollback immediacy than A/C for SHADOW→OFF in-flight
- Heavier than needed for a never-block pilot

## 14. Option C — HYBRID / DUAL-GATE (PRE eligibility latch)

**Principle:** capture SHADOW only if:

`PRE_WAS_SHADOW AND POST_IS_SHADOW`

| Flip | Capture |
|------|---------|
| OFF→OFF | no |
| SHADOW→SHADOW | yes (if other capture gates pass) |
| OFF→SHADOW | **no** (blocks retroactive) |
| SHADOW→OFF | **no** (keeps immediate observational rollback) |

### Minimal state
Transport only a boolean/token: `preWasShadow` / eligibility for this `executionRunId`.
Not a full policy/threshold snapshot.

### Implementation credibility
- **Adapter-primary possible:** PRE path records eligibility; POST path checks eligibility ∧ current SHADOW
- Requires lifecycle: clear token after captureUsage (all outcomes); clear/TTL if POST never reached (provider fail / non-AI / early return)
- Prefer adapter-local bounded store **only with** demonstrated cleanup; else propagate eligibility via a thin coordinator field (more explicit, less leaky)

### Why credible now
- Directly targets named OFF→SHADOW integrity gap
- Preserves SHADOW→OFF immediate cut of capture
- Smaller than full FOR-RUN mode snapshot
- Does not select policy/threshold
- Compatible with I1–I10

### Costs
- New mechanism (latch) before SHADOW activation
- Must design concurrency + failure cleanup carefully
- Slightly more tests than documenting A

## 15. Comparison matrix

| Criterion | A live re-read | B per-run snapshot | C hybrid dual-gate |
|-----------|----------------|--------------------|--------------------|
| Intra-run coherence | LOW on flips | HIGH | HIGH for eligibility |
| Rollback OFF immediate (capture cut) | YES | NO (in-flight may still capture) | YES |
| Activation SHADOW mid-run | Capture possible | No capture | No capture |
| Capture OFF→SHADOW | YES (drift) | NO | NO |
| Capture SHADOW→OFF | NO | YES possible | NO |
| Auditability | Ambiguous on flips | Strong regime story | Strong eligibility story |
| Observability needs | preMode/postMode useful | effectiveModeForRun | preWasShadow + postMode |
| Fail-open | YES | YES if designed | YES if designed |
| Concurrency isolation | Natural (stateless) | Needs run key | Needs run key |
| State management | None | Snapshot state | Minimal latch |
| Memory lifecycle | N/A | Required | Required |
| Core coordinator impact | None | Likely (B1/B2) or risky Map (B3) | Prefer thin; possible adapter-only with lifecycle |
| Adapter-only possible? | Already is | Hard for clean B | Possible with care |
| DB migration | NO | NO (unless durable chosen) | NO |
| New durable state | NO | Prefer NO | Prefer NO |
| Test complexity | Baseline | Higher | Moderate |
| Reversibility | High (status quo) | Medium | Medium-high |
| Debt created | Observational ambiguity | Snapshot + delayed rollback | Latch lifecycle |
| Blast radius | None now | Highest | Moderate |
| Prep for SHADOW activation | Weak integrity | Strong but rollback softer | Strong + rollback sharp |
| Cost of later change | Document now / code later | Large if wrong | Moderate |

## 16. Rollback semantics

Meaning of project SHADOW→OFF:

- **A:** next POST capture becomes inactive immediately for runs already past PRE
- **B:** in-flight runs with SHADOW snapshot may still capture after OFF
- **C:** OFF at POST prevents capture even if PRE was SHADOW

Safety note: none of these block the provider (I1/I6). Difference is **observation stop timing**, not enforcement.

## 17. Concurrency

Scenario: Run A starts, Run B starts, mode flips, A/B finish in different order.

- **A:** each boundary independent; no cross-run state; flips affect whichever boundary executes after flip
- **B/C:** must key by `executionRunId`; contamination if shared mutable mode without keying
- Process-local Map: not multi-instance coherent; if used, document single-process assumption + cleanup, or prefer explicit per-call propagation

## 18. Failure semantics

| Failure | A | B | C |
|---------|---|---|---|
| PRE rollout fail | failed finops-side; provider continues | snapshot unresolved/inert; provider continues | no eligibility; later capture blocked for SHADOW path |
| Policy resolver fail | handled in PRE SHADOW path; never block | depends on snapshot timing | same as A at PRE |
| Provider fail / no capture | no POST | must cleanup unused snapshot | must cleanup unused latch |
| POST rollout fail | capture disabled inert | if using snapshot may still capture | POST not SHADOW ⇒ no capture |
| Capture fail | failed capture diagnostic; provider success preserved | same | same |

**Invariant:** FinOps failure must not become provider block (already true).

## 19. Persistence / migration

- **DB migration required?** **NO** for A/B/C if latch/snapshot is request/run-scoped ephemeral
- **Durable snapshot needed?** **NO** for pilot SHADOW observation integrity; crash mid-run already loses in-memory process state broadly
- Do not add durable state by reflex

## 20. Observability

Current `onShadowDecision` is minimal, non-durable, PRE-oriented.

Ideal diagnostic fields (not T6-ext):
- executionRunId, projectId, preMode, postMode (if re-read), effectiveEligibility, captureEligibility, reason

Classification: **B — useful but non-blocking before activation**. Do **not** require T6-ext. Keep sink optional/fail-open.

## 21. File impact map (no edits performed)

### Option A (document only)
- UNCHANGED: all runtime files
- possible future DOC-only note in 157 (out of this cycle)

### Option B
- MODIFY likely: `composeFinOpsT7ShadowExecutionDeps.ts`
- MODIFY possible: `coordinateExecutionRun.ts`, ports, domain (B1/B2)
- CREATE possible: run context helper
- UNCHANGED preferred: T4/T6 cores, OPS1
- REJECT: unbounded process Map without lifecycle

### Option C (recommended direction)
- MODIFY: `composeFinOpsT7ShadowExecutionDeps.ts` (primary)
- MODIFY possible (if propagation preferred over Map): `coordinateExecutionRun.ts` / capture args — only if adapter latch lifecycle judged unsafe
- MODIFY: T7 SHADOW tests
- UNCHANGED: `composeFinOpsT7Runtime.ts`, T4/T6, OPS1, migrations
- CREATE: none durable; maybe small helper type in adapter module

## 22. Test impact map (future Delivery — not this cycle)

Reuse: never-block, signal_only force, non-pilot, MONITOR/E1 inert, OFF inert, hostile enforce.

Modify/create for recommended option:
- T1 OFF→OFF
- T2 SHADOW→SHADOW
- **T3 OFF→SHADOW** (must not capture under C)
- **T4 SHADOW→OFF** (must not capture under C)
- T5 concurrent runs around mode flip
- T6 PRE rollout failure
- T7 POST rollout failure
- T8 provider failure / no capture (+ latch cleanup)
- T9 hostile enforce → signal_only
- T10 never-block
- T11 non-pilot
- T12 MONITOR/E1 inert

## 23. Debt / simplicity challenge

- A removes no debt; documents acceptance of drift
- B adds snapshot debt + softer rollback
- C adds latch debt but removes observation integrity debt for the named reserve
- **Least mechanism that fixes OFF→SHADOW without delaying SHADOW→OFF rollback = C**, not full B
- Avoid over-architecture before activation: C is intentionally minimal (boolean eligibility), not a full FOR-RUN policy engine

## 24. Recommendation

### RECOMMENDATION ONLY — MORRIS DECISION REQUIRED

**Recommend: Option C — Hybrid dual-gate (PRE eligibility latch).**

1. **Option:** C
2. **Why:** closes OFF→SHADOW retroactive capture (named reserve) while preserving immediate observational rollback on SHADOW→OFF; smaller than full per-run snapshot; preserves I1–I10; adapter-primary feasible
3. **Sacrifices:** introduces minimal run-scoped eligibility state + lifecycle/tests; not zero-change
4. **Future Delivery perimeter:** primarily `composeFinOpsT7ShadowExecutionDeps.ts` + T7 SHADOW tests; touch coordinator only if latch lifecycle cannot be proven safe in-adapter
5. **Future Delivery profile recommendation:** **Critical** — changes pre-provider/capture coupling semantics for FinOps observation integrity (even if mostly adapter); Morris final call
6. **Tests required:** T1–T12 matrix above, especially T3/T4/T5/T8
7. **Reserve after decision:** TEMPORAL MODE DRIFT becomes **DECIDED → C** pending Delivery/QA; remains OPEN until implemented
8. **Why not A now:** leaves named integrity gap into activation; documenting A is acceptable only if Morris explicitly accepts step-current semantics
9. **Why not B now:** overshoots; delays observational rollback for in-flight SHADOW→OFF; higher core risk

**Explicit alternative for Morris:** choose **Option A (document as CURRENT-at-boundary design)** if priority is zero runtime change until policy source / activation planning.

## 25. Future Delivery profile recommendation

If Option C (or B) selected: recommend **Cycle 8 Delivery — Critical** with dedicated QA for temporal flips.

If Option A documented only: no Delivery; reserve reclassified ACCEPTED DESIGN by Morris utterance.

## 26. Reserves

- TEMPORAL MODE DRIFT OFF→SHADOW = **OPEN** (analysis complete; decision pending)
- SHADOW PILOT POLICY SOURCE = NOT SELECTED (separate)
- R-T4-T3-SYNC-01 = OPEN — BEFORE MONITOR
- R-PR-T2-API-01 = OPEN MINOR
- Calibration = REQUIRED BEFORE MONITOR
- T6-ext / T5 / Product IAM / MONITOR / E1 = unchanged
- OA→OPS1 / whitespace = CLOSED ON MAIN (unchanged by this cycle)

## 27. Explicit non-decisions

- No option selected
- No ADR written to repo
- No Delivery started
- No policy source selected
- No threshold adopted
- No SHADOW activation readiness claim
- No T6-ext program

## 28. Project mutation

**NO**

## 29. SHADOW activation

**NOT ACTIVATED**

## 30. Policy source

**NOT SELECTED**

## 31. Morris decision required

`GO TEMPORAL SEMANTICS — <OPTION A | OPTION B | OPTION C>`

Only then: qualify Delivery · new prompt · implement · QA · PR/merge gates.

Policy source remains a **separate** later decision.

## 32. Verdict

**T7 SHADOW TEMPORAL MODE SEMANTICS ARCHITECTURE COMPLETE — CYCLE 6 STANDARD — CURRENT DOUBLE-READ SEMANTICS PROVEN — TEMPORAL DRIFT CHARACTERIZED — LIVE RE-READ ANALYZED — PER-RUN SNAPSHOT ANALYZED — HYBRID OPTION ANALYZED IF CREDIBLE — ROLLBACK TRADE-OFFS EXPLICIT — CONCURRENCY / FAILURE / OBSERVABILITY IMPACTS EXPLICIT — NO PROJECT MUTATION — SHADOW NOT ACTIVATED — POLICY SOURCE NOT SELECTED — RECOMMENDATION PRODUCED — MORRIS TEMPORAL SEMANTICS DECISION REQUIRED — HANDOFF REMOTE VERIFIED**
