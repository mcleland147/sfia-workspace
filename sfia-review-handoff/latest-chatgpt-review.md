# CORR-PROOF-05 — Pilot-Governed Cycle Lifecycle & Exit Transition
## Functional Delta — FULL Review Pack (exploitable) — AMENDED after ChatGPT Critical Review

| Field | Value |
| --- | --- |
| **Timestamp (UTC)** | 2026-09-07T14:26:51Z |
| **Repo** | `mcleland147/sfia-workspace` |
| **DOC worktree** | `/Users/morris/Projects/sfia-wt-corr05-func-12d837fd` |
| **Branch (DOC WT)** | `run/sfia-studio-corr05-func-delta-01` |
| **HEAD** | `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` |
| **origin/main** | `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` |
| **Tree** | `142ec00df04b9361d3cffd92600aff8ae39e6976` |
| **Base** | Merge PR #475 (CORR-PROOF-04 Option D) on main |
| **Prior handoff tip (amended)** | `c17b475df7ac5db2979f3231aeb2e125c8f3f275` |
| **Cycle** | CORR-PROOF-05 — SAME functional-design corrective — targeted amendment |
| **Typology** | DOC |
| **Profile** | CRITICAL |
| **Campaign** | Product Proof — iterative REAL validation |
| **Product Proof state** | OPEN / blocked at Suivi de contrat Cadrage exit-transition |
| **Files modified (Product/project versioned)** | NONE |
| **Files created/updated (local only)** | `.tmp-sfia-review/chatgpt-review.md` |
| **Amendment provenance** | ChatGPT Critical Review of prior FULL pack @ handoff `c17b475d…` · Morris GO for targeted correction + re-handoff |
| **Resolved reserves** | PAUSE HD strength CLOSED; activeCycleInstanceId on PAUSE CLOSED functionally; START+trajectory one-HD CLOSED; enum↔C2 remains DEFERRED TECHNICAL DESIGN |
| **Remaining reserves** | Morris validation of corrected Functional Contract after ChatGPT re-review |
| **Decisions already consumed** | GO Morris start CORR-PROOF-05; GO Morris targeted amendment after Critical Review |
| **Decisions still required** | Morris validation of the corrected CORR-PROOF-05 Functional Contract after ChatGPT re-review |
| **Verdict** | CORR-PROOF-05 FUNCTIONAL DELTA AMENDED — READY FOR CHATGPT RE-REVIEW — NO DELIVERY — PRODUCT PROOF REMAINS OPEN |

### Anti-claims (explicit)

- NOT CORR-PROOF-05 VALIDATED
- NOT READY FOR DELIVERY
- NOT PRODUCT PROOF COMPLETE
- NOT runtime v3 ADOPTED
- NOT Stage B
- NOT production routing selected
- NO Product source / schema / UI mutation in this cycle
- NO REAL execution in this cycle
- NOT a new cycle — same CORR-PROOF-05 corrective, targeted amendment only

### Superseded prior wording (do not reuse as current contract)

The following claims from the prior pack (`c17b475d…`) are **superseded** by this amendment:

1. ~~"No CycleInstance until Pilot START"~~ → replaced by: no **active/authority-bearing** CycleInstance linkage until Pilot START; candidate/non-active pre-START lifecycle remains permitted and C2-compatible.
2. ~~Systematic HD for START (trajectory already decided) / PAUSE / clean RESUME~~ → replaced by Amendment 2 matrix (HD NO by default for those operational cases).
3. ~~Open reserve on PAUSE HD strength / activeCycleInstanceId clear-vs-retain~~ → CLOSED as stated in Amendment 4.

### Local Git Truth (DOC WT)

```
pwd=/Users/morris/Projects/sfia-wt-corr05-func-12d837fd
HEAD=12d837fd29a69b3e83155a06ec58dc91b0e15f0b
origin/main=12d837fd29a69b3e83155a06ec58dc91b0e15f0b
origin/sfia/review-handoff (pre-publish expected)=c17b475df7ac5db2979f3231aeb2e125c8f3f275
tree=142ec00df04b9361d3cffd92600aff8ae39e6976
tracked Product/project source dirty=NO
authorized local dirty=.tmp-sfia-review/chatgpt-review.md only
```

### Sources re-read

**Process (external):** cycle-execution-template; cycle-routing-guide; chatgpt-cursor-operating-model; rules-and-guardrails.

**Convergence / Product Completion:** Build Doctrine; Roadmap; C1 cadrage; C2 conception fonctionnelle (authoritative).

**v3:** 30, 32, 33, 34, 35, 37.

**Product CKC:** `ckc/02-conception-fonctionnelle.md`.

**Runtime inspected (read-only):**
- `lib/oa/cycle/domain/types.ts`
- `lib/oa/cycle/application/createCycle.ts`
- `features/project-assistant/f2/orchestrateF2.ts`
- `features/project-assistant/f2/gatePolicy.ts` (`evaluateMorrisGateRequired`)
- prior inspected surfaces (studioCognitiveContext, ProjectAssistantPanel, decision/project types) remain in force for divergence evidence

**Prior review:** local `.tmp-sfia-review/chatgpt-review.md` + remote handoff tip `c17b475d…`

---

# A. Executive problem statement

## Product Proof observation

On existing Project **Suivi de contrat**, Product Proof reached a **Cadrage maturity / exit-transition** point. Nora may recommend FINALIZE and next-cycle Conception, but the Pilote lacks first-class governed lifecycle actions (START / PAUSE / RESUME / FINALIZE / CANCEL) that:

1. activate a CycleInstance as the **authority-bearing ACTIVE** working cycle only under Pilote control;
2. engage a governed **exit procedure** without conflating Recommendation, Proposal, HumanDecision, and CycleInstance;
3. complete a CycleInstance only when **exit obligations** are satisfied/proven;
4. keep Nora advisory while Studio enforces/persists.

## Expected loop (amended framing)

```
Nora / Studio qualification
→ Recommendation
→ optional candidate/non-active CycleInstance (C2 pre-START continuum permitted)
→ LPS.activeCycleInstanceId MUST NOT point to candidate
→ no "cycle started" claim; no execution authority; no next-cycle work content
→ Pilote explicitly START | PAUSE | RESUME | FINALIZE | CANCEL
→ Studio validates, enforces, persists
→ ExecutionContract only if outstanding obligation requires governed execution
→ Cursor/agent executes only under EC
→ Evidence/ReviewBundle proves outputs
→ CycleInstance completed only when applicable obligations SATISFIED
→ Nora may recommend next cycle type
→ optional candidate next cycle remains non-active
→ no next-cycle work content until Pilote START
```

## Current observed loop (runtime, verified)

```
user utterance (F2 actionable intent)
→ analyzeIntent / qualify
→ CreateCycle (createdBy Nora F2) with linkAsActiveCycle=true
→ LPS.activeCycleInstanceId stamped BEFORE Pilot START
→ Proposal saved (process-local)
→ morrisGateRequired may appear on proposal path (evaluateMorrisGateRequired)
→ Pilote may later accept HD on proposal / trajectory / EC paths
```

**Exact code path:** `orchestrateF2.ts` actionable branch calls `createCycle.execute({…, createdBy: actor:nora-f2, linkAsActiveCycle: true})` before Pilot START activation.

**CreateCycle statuses written:** Critical → `proposed`; Light/Standard → `acknowledged`.

**Functional flag on `acknowledged`:** no label/status may semantically claim human acknowledgement/activation if the Pilote did not consume such a gate. Exact enum/schema resolution = **DEFERRED TECHNICAL DESIGN**.

**UI:** shows cycle type / linked id / status when present; **no** Pilot CTAs START/PAUSE/RESUME/FINALIZE/CANCEL.

## Why this blocks end-to-end Product Proof

Without Pilot-governed START/FINALIZE (and pause/resume/cancel), and while F2 auto-links `activeCycleInstanceId` before START, Product Proof cannot demonstrate: **explicit human lifecycle control + non-authority-bearing pre-START candidates + obligation-gated completion + honest next-cycle recommendation**. Cognitive grounding (CORR-PROOF-04) improves advice but **cannot close** the Cadrage exit gate.

---

# B. Authority model

| Actor / asset | May | Must not |
| --- | --- | --- |
| **Nora** | Recommend START/PAUSE/RESUME/FINALIZE/CANCEL; assess maturity/obligations; propose EC; analyze Evidence; participate in qualification producing optional candidate CycleInstance | Mutate ACTIVE lifecycle; claim cycle started; create HD; consume Confirmation; invent Facts; control availability of Pilot lifecycle gates |
| **Pilote** | Own START/PAUSE/RESUME/FINALIZE/CANCEL; HD when structuring; inspect EC; Confirm protected boundaries; request FINALIZE even without Nora recommendation | Delegate HD to Nora; bypass Confirmation; treat Recommendation as ACTIVE cycle |
| **Studio** | Validate transitions; enforce invariants; persist candidate vs ACTIVE distinction; set/clear `activeCycleInstanceId` per rules; fail-closed | Decide for Pilote; auto-close Cycle on Attempt terminal; invent Confirmation; treat Morris construction gate as generic lifecycle engine |
| **ExecutionContract** | Bound governed effects when execution required | Exist gratuitously when no obligation needs execution |
| **Cursor/agent** | Execute only under accepted EC + authority | Decide cycle lifecycle; invent HD/Confirmation |
| **Evidence / ReviewBundle** | Prove execution/output/artifacts | Promote Claims to Facts; auto-complete Cycle |
| **ProjectTrajectory / LPS** | Project living truth | Second lifecycle engine; UI-owned truth |
| **Morris (construction)** | Repo construction/governance gates for SFIA Studio protected effects | Be reused as generic runtime Pilot lifecycle authority for ordinary Projects |

**Amendment 3 boundary:** Runtime Pilot lifecycle authority (START/PAUSE/RESUME/FINALIZE/CANCEL) **IS NOT** governed by `evaluateMorrisGateRequired` / `morrisGateRequired` (`f2/gatePolicy.ts`). Morris gates apply to SFIA Studio construction/governance/protected effects. For Studio construction, gates may coexist independently: Pilot HD (if applicable) + EC + Confirmation-by-effects + Morris construction gate. **No authority substitutes another.**

Preserve C2: Recommendation ≠ HD ≠ Confirmation ≠ Morris construction gate (C2 §10.3).

---

# C. Lifecycle model (functional)

## Candidate / pre-START vs ACTIVE

| Concept | Meaning |
| --- | --- |
| **Recommended work** | Nora Recommendation / conversational orientation |
| **Candidate / non-active CycleInstance** | **MAY** exist pre-START for qualification, CKC/context resolution, audit, or proposal continuity (C2-compatible: `intent_captured` / `context_resolving` / `qualifying` / `clarifying` intent) |
| **ACTIVE (principal)** | Authority-bearing working cycle — exactly one principal ACTIVE per Project (first target) |
| **LPS.activeCycleInstanceId** | Points **only** to principal ACTIVE — **MUST NOT** point to candidate/non-active |

### Pre-START constraints (Amendment 1)

Before explicit Pilot START:

- no CycleInstance may be authority-bearing as the active working cycle
- no CycleInstance may claim Pilot acknowledgement/activation that did not occur
- `LPS.activeCycleInstanceId` MUST NOT point to that candidate
- Nora Recommendation MUST NOT be presented as "cycle started"
- no execution authority is created
- no next-cycle work content is authorized

**Pilot START** is the first authority-bearing **ACTIVATION** transition.

Do **not** remove pre-START candidate lifecycle merely to simplify implementation.

### States (functional; reconcile with C2 vocabulary)

| CORR-PROOF-05 label | Relation to C2 §7.2 | Notes |
| --- | --- | --- |
| recommended / candidate (non-instance or non-active instance) | `intent_captured`…`clarifying` continuum permitted | Not ACTIVE; no activeCycleInstanceId |
| START (transition) | activation into working ACTIVE continuum | Pilote gate |
| ACTIVE | working continuum (`qualifying`…`replanning` as C2 working states) | One principal ACTIVE |
| PAUSE → PAUSED | `cycle_paused` (C2) | Voluntary; clears activeCycleInstanceId |
| RESUME | PAUSED → ACTIVE | Preconditions |
| BLOCKED | involuntary; ≠ PAUSED | activeCycleInstanceId **remains** unless Pilot pauses/cancels/replans |
| FINALIZE (decision) | Pilote engages exit procedure | ≠ completed; Nora recommendation NOT a precondition |
| finalization-in-progress | derived while obligations pending | |
| COMPLETED | `cycle_closed` / terminal completed | Historical; clears activeCycleInstanceId |
| CANCEL → CANCELLED | explicit abort | Clears activeCycleInstanceId |

**Disposition:** KEEP C2 names `cycle_paused` / `cycle_closed` as authoritative functional vocabulary; CORR-PROOF-05 START/ACTIVE/FINALIZE labels are **CLARIFICATION / FUNCTIONAL DELTA** of Pilot control semantics — **not** a second competing engine.

**Runtime enum gap:** `CycleInstanceStatus` = `proposed|acknowledged|active|blocked|completed|cancelled|superseded` — **no** `paused` / `cycle_paused`. ProjectStatus includes `paused` (Project-level) — **must not** be reused as CycleInstance pause. Classification: **IMPLEMENTATION GAP ONLY** + **DEFERRED TECHNICAL DESIGN** for enum/schema; C2 remains functional authority.

### activeCycleInstanceId ownership (Amendment 4B — CLOSED functionally)

| Cycle disposition | activeCycleInstanceId |
| --- | --- |
| ACTIVE | = that cycle |
| BLOCKED | remains that cycle unless Pilot pauses/cancels/replans |
| PAUSED | `null` |
| COMPLETED | `null` |
| CANCELLED | `null` |
| candidate / non-active pre-START | MUST NOT be set |

Exact persistence mechanics = **DEFERRED TECHNICAL DESIGN**.

---

# D. Transition table

| # | Source | Trigger | Actor | Preconditions | New HD? | Confirmation N1/N2/N3? | Runtime checks | Side effects | Result | Evidence/audit | Fail-closed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T0 | none | qualification / recommendation | Nora/Studio | Valid Project | No | No | honesty on CKC/availability | Optional candidate/non-active CycleInstance; **no** activeCycleInstanceId; no "started" claim | candidate / non-active | Audit qualification | Refuse invented authority |
| T1a | candidate or none | START — trajectory already decided | Pilote | Valid Project; type; profile; CKC honest; entry deps; trajectory compatible; no other principal ACTIVE | **NO by default** | No | one-ACTIVE; Pilot lifecycle authority (≠ Morris gate) | Activate CycleInstance; set activeCycleInstanceId | ACTIVE | Durable lifecycle audit | Refuse if ACTIVE exists |
| T1b | candidate or none | START — Pilot chooses/amends structuring trajectory | Pilote | Same + structuring trajectory act | **YES** — one HD MAY cover trajectory adoption + START | No | same | Activate + decided trajectory effects | ACTIVE | HD + lifecycle audit | Fail-closed on HD denial |
| T2 | ACTIVE | PAUSE | Pilote | ACTIVE exists; pause not forbidden by in-flight protected lock policy | **NO by default**; HD only if separate underlying structuring decision | No | | Mark PAUSED; **clear** activeCycleInstanceId | PAUSED | Durable lifecycle audit | Refuse unknown instance |
| T3 | PAUSED | RESUME — materially unchanged | Pilote | Same instance; reconcile OK | **NO** | No | stale checks pass | Restore ACTIVE + activeCycleInstanceId | ACTIVE | Durable lifecycle audit | |
| T3b | PAUSED | RESUME — material drift | Studio+Pilote | Material change detected | **YES if structuring / REPLAN** | Conditional | Drift detectors | No silent ACTIVE restore | stays PAUSED or REPLAN | Audit | Fail-closed to REPLAN |
| T4 | ACTIVE | involuntary block | Studio | Stop/authority/contradiction | No automatic HD | No | SC-* | Mark BLOCKED; **retain** activeCycleInstanceId | BLOCKED | Audit | No auto-close |
| T5 | ACTIVE/BLOCKED | FINALIZE (Pilot request; Nora recommendation optional) | Pilote | Pilot may FINALIZE with or without Nora recommendation | **YES** | No gratuitous second Close | Obligation assessment | Enter finalization-in-progress; **not** completed | finalization-in-progress | HD + audit + obligation ledger | Missing/blocking → not completed |
| T6 | finalization-in-progress | obligation needs execution | Studio/Nora prepare; Pilote inspect | Outstanding execution obligation | Conditional if new structuring | **Yes if protected** after EC inspect | EC complete+inspect | 0..N EC/Attempts | still in-progress | Evidence/RB | No execution without EC gates |
| T7 | finalization-in-progress | all applicable obligations SATISFIED/N/A | Studio (deterministic) | Accepted FINALIZE HD; obligations ok | **No** second Close | No | Obligation matrix | COMPLETED; clear activeCycleInstanceId | COMPLETED | Evidence/audit | Incomplete → no completed |
| T8 | ACTIVE/PAUSED/BLOCKED | CANCEL | Pilote | Explicit abort | **YES** | Conditional if irreversible effects exist | Effects inventory | CANCELLED; clear activeCycleInstanceId | CANCELLED | HD + audit | |
| T9 | COMPLETED | reopen same instance | — | — | — | — | — | **Forbidden by default** | stays COMPLETED | — | Require new CycleInstance (T10) |
| T10 | COMPLETED + new need same type | START new | Pilote | Impact analysis; trajectory replan as needed | Per T1a/T1b | No unless protected | New id; relation to prior | New ACTIVE CycleInstance | ACTIVE (new) | Audit relation | Never mutate historical completed |

---

# E. START assessment

## Preconditions (functional)

1. Valid Project (active, resolvable LPS)
2. Cycle type from catalog
3. Profile Light/Standard/Critical with Critical justification rules (KEEP existing qualify semantics)
4. DoctrinePackage / CKC availability honesty (KEEP; absent CKC ≠ invented authority)
5. Entry dependencies / blockers visible
6. Trajectory compatibility when decided trajectory exists
7. One-ACTIVE invariant
8. **Pilot lifecycle authority** (not Morris construction gate)

## Exact moments (TARGET)

| Moment | Rule |
| --- | --- |
| Nora recommends | No ACTIVE; activeCycleInstanceId unset |
| Optional candidate CycleInstance | Permitted for qualification/CKC/audit/proposal continuity |
| Pilote START | First authority-bearing ACTIVATION; set activeCycleInstanceId |
| "acknowledged" / similar labels | Must not claim human acknowledgement without consumed Pilot gate |

## CURRENT runtime divergence (verified)

| Moment | Observed |
| --- | --- |
| F2 actionable | `createCycle` + `linkAsActiveCycle: true`, `createdBy: actor:nora-f2` |
| CycleInstance.status | `proposed` or `acknowledged` |
| LPS.activeCycleInstanceId | Set immediately — **before** Pilot START |
| Pilot START CTA | Absent |
| morrisGateRequired | May appear on F2 proposal path via `evaluateMorrisGateRequired` — **must not** be the generic Pilot lifecycle engine |

**Classification:** **FUNCTIONAL DELTA** (activation ownership + candidate vs ACTIVE) + **IMPLEMENTATION GAP** (auto-link; missing Pilot CTAs/services) + **DEFERRED TECHNICAL DESIGN** (enum labels).

---

# F. PAUSE / RESUME

| Topic | Rule |
| --- | --- |
| **PAUSED vs BLOCKED** | PAUSED = voluntary. BLOCKED = involuntary. **≠** |
| **activeCycleInstanceId on PAUSE** | **CLOSED:** clear (`null`); CycleInstance remains durably PAUSED and visible in trajectory |
| **activeCycleInstanceId on BLOCKED** | Remains set unless Pilot pauses/cancels/replans |
| **RESUME reconciliation** | LPS/objective/scope, HD currency, Evidence freshness, trajectory version, doctrine digest |
| **Stale/superseded HD / changed scope / trajectory** | Silent resume forbidden → REPLAN / structuring HD as needed |
| **PAUSE HD** | **CLOSED:** NO by default; HD only for separate underlying structuring decision |

C2 `cycle_paused` — **KEEP** / **EXISTING VALIDATED**. Runtime missing pause — **IMPLEMENTATION GAP ONLY**.

---

# G. FINALIZE assessment

FINALIZE = Pilote decision to **engage governed exit procedure**. FINALIZE **≠** completed.

**Amendment 10 clarification:** Nora Recommendation to FINALIZE is the **nominal UX path** but is **NOT** an authority precondition. Pilote may request FINALIZE directly. Studio evaluates exit obligations. If missing/blocking: no completed claim; show assessment / remaining obligations. Nora advises; Nora does **not** control availability of the Pilot FINALIZE gate.

## Obligation families

| Family | Examples | Git? |
| --- | --- | --- |
| Scope / exit criteria | Cycle-type exit criteria | N/A |
| Decisions | Required structuring HD recorded/accepted | N/A |
| Artifacts | Required materializations | Conditional |
| Execution | Required effects under EC | Conditional |
| Evidence | Required Evidence with epistemic honesty | Conditional |
| Review | ReviewBundle when required | Conditional |
| Repository / Git | Only when obligations require repo effects | **Conditional — not universal** |

## Obligation result labels (functional candidates)

`SATISFIED` · `PENDING` · `MISSING` · `BLOCKING` · `NOT_APPLICABLE`

Not mandatory technical enums (**DEFERRED TECHNICAL DESIGN**).

## Semantic flow

```
Nora may recommend FINALIZE (optional)
→ Pilote FINALIZE (HD) — may be direct
→ Studio builds obligation assessment
→ if BLOCKING/MISSING applicable → finalization-in-progress (not completed)
→ EC only for obligations needing execution
→ when all applicable SATISFIED/NOT_APPLICABLE → Studio completes deterministically
→ no gratuitous second Close
```

---

# H. Conditional execution

- During finalization: **0..N** ExecutionContracts
- EC **not mandatory** when no outstanding obligation requires governed execution
- Ordering: prepare EC → Pilote inspect → Confirmation if protected → authority → Attempt
- Protected boundaries per C2 §10 KEEP
- Git actions only if EC/obligation requires them
- Confirmation ≠ HumanDecision; BR-PC-08 no micro-confirmations KEEP

---

# I. Completion semantics

COMPLETED when:

1. Pilote accepted FINALIZE (HD), and
2. All applicable obligations are SATISFIED or NOT_APPLICABLE, and
3. No BLOCKING residual for this cycle type exit, and
4. Studio applies terminal completed / `cycle_closed` semantics

**Automatic deterministic completion** after (1)+(2) — **no** second human Close gate.

**Exceptions requiring new HD:** new structuring scope during finalization; contradiction requiring trajectory change; protected irreversible effect needing new Confirmation/HD.

C2 BR-PC-26 KEEP: Attempt terminal ≠ CycleInstance closed.

---

# J. Historical immutability / supplementary cycle

- COMPLETED remains terminal / historical
- No reopen by default
- Later need for same cycle type → **new** CycleInstance; relation to prior recorded
- Impact analysis + ProjectTrajectory replan (Recommendation then HD if structuring)
- UI must show multiple instances of same type distinctly
- Next-cycle optional candidate remains **non-active** until Pilot START

---

# K. ProjectTrajectory / workspace contract

| Rule | Disposition |
| --- | --- |
| Conversation dominant | KEEP |
| Living trajectory panel = projection of runtime truth | KEEP |
| Actual history vs ACTIVE vs candidate/Recommendation | COMPLETE visibility |
| Multiple instances same cycle type distinct | COMPLETE |
| No UI-owned truth | KEEP |
| No invented % maturity score | KEEP |
| Pilot CTA set: START, PAUSE, RESUME, FINALIZE, CANCEL | FUNCTIONAL DELTA / COMPLETE |
| Visible blockers / remaining exit obligations / Nora recommendation | COMPLETE |
| Candidate ≠ "started" presentation | COMPLETE |

---

# L. HumanDecision / Confirmation matrix (Amendment 2)

| Action | HD required? | Confirmation? | Notes |
| --- | --- | --- | --- |
| START — trajectory already decided | **NO by default** | No | Explicit Pilot lifecycle gate/action; durable audit event required |
| START — Pilot chooses/amends structuring trajectory | **YES** | No | One HD MAY cover trajectory adoption + START when one explicit structuring act; no duplicate HD |
| PAUSE | **NO by default** | No | Durable lifecycle audit; HD only if separate underlying structuring decision |
| RESUME — materially unchanged | **NO** | No | Durable lifecycle audit |
| RESUME — material scope/trajectory/authority drift | Silent resume forbidden; **HD if structuring / REPLAN** | Conditional | |
| FINALIZE | **YES** | No second Close | Engages exit procedure; ≠ completed |
| CANCEL | **YES** | Yes if irreversible effects exist | Terminal abandonment / no normal exit |
| Git / irreversible / protected execution effects | Per structuring need | **Yes N1/N2/N3 per ActionPolicy after EC inspection where applicable** | Confirmation ≠ HD; BR-PC-08 KEEP |

---

# M. C2 reconciliation matrix (corrected)

| Principle | Class | C2 source | Runtime | Gap | Disposition | Acceptance criterion |
| --- | --- | --- | --- | --- | --- | --- |
| Nora recommends / Pilote decides | EXISTING VALIDATED | §4–5, BR-PC-01 | Partial | F2 auto-activates linkage | COMPLETE | No ACTIVE / no activeCycleInstanceId until Pilot START |
| Pre-START candidate lifecycle permitted | CLARIFICATION / EXISTING C2 intent | §7.2 intent_captured…clarifying | F2 creates but wrongly links active | Auto-link | COMPLETE | Candidate MAY exist; must be non-authority-bearing |
| No active/authority-bearing linkage until START | FUNCTIONAL DELTA (corrected) | C2 Pilote authority + §7 | F2 `linkAsActiveCycle=true` before START | Divergence | COMPLETE | Scenario 1 amended |
| Phrase ≠ auto HD | EXISTING VALIDATED | BR-PC-02 | Mostly | Actionable may still create/link | ADAPT | Actionable utterance ≠ START activation |
| Project ≠ Cycle | EXISTING VALIDATED | BR-PC-04 | KEEP | — | KEEP | |
| CycleInstance ≠ Attempt | EXISTING VALIDATED | §7 / BR-PC-26 | KEEP | — | KEEP | Scenario 9 |
| cycle_paused | EXISTING VALIDATED | §7.2 | Absent in runtime status | No pause service/UI | IMPLEMENTATION GAP ONLY | Scenario 3 |
| cycle_closed explicit | EXISTING VALIDATED | §7.2 | `completed` enum; no finalize path | No FINALIZE/obligations | COMPLETE | Scenarios 6–8, 11 |
| Attempt terminal ≠ close cycle | EXISTING VALIDATED | BR-PC-26 | No auto-close writer found | — | KEEP | Scenario 9 |
| HD for structuring only (not every operational gate) | CLARIFICATION | §10.3 + BR-PC-08 | Over/under use | Systematic HD was overstated | COMPLETE | Matrix L amended |
| Trajectory ≠ Recommendation ≠ HD | EXISTING VALIDATED | BR-PC-03 | W2 promote KEEP | Lifecycle CTAs missing | ADAPT/COMPLETE | |
| Confirmation after EC inspect | EXISTING VALIDATED | §5.6–10 | W2/W3 KEEP | — | KEEP | |
| Morris construction gate ≠ Pilot lifecycle | FUNCTIONAL DELTA / CLARIFICATION | §10.3 | `gatePolicy.ts` / morrisGateRequired in F2 | Boundary conflation risk | ADAPT | Amendment 3 |
| One principal ACTIVE | FUNCTIONAL DELTA (first target) | Approved framing | Field exists; auto-link undermines | Gap | COMPLETE | Scenarios 2–3 |
| Conditional Git | EXISTING + clarification | C2 Git SoT | EC conditional in spirit | FINALIZE obligations missing | COMPLETE | Scenarios 7–8 |
| Conversation dominant | EXISTING VALIDATED | Product Experience | Conversation-first | Missing lifecycle CTAs | COMPLETE | Workspace K |
| Enum ↔ C2 vocabulary mapping | DEFERRED TECHNICAL DESIGN | C2 functional authority | Runtime enums differ | Delivery adapts without second engine | DEFERRED | No parallel state machine |

**Corrected prior misclassification:** do **not** require "no CycleInstance until Pilot START". Require: **no active/authority-bearing CycleInstance linkage until Pilot START; candidate pre-START lifecycle remains permitted and C2-compatible.**

---

# N. Delivery impact map (updated)

## KEEP
- Validated C2 lifecycle distinction (`cycle_paused` / `cycle_closed`, Attempt separation)
- CycleInstance ≠ ExecutionAttempt
- HumanDecision / Confirmation separation
- ProjectTrajectory
- EC / Evidence / Review paths
- Critical justification / qualify semantics (as non-lifecycle-core)

## ADAPT
- `CreateCycle` activation/linking semantics (`linkAsActiveCycle` ownership)
- F2 `orchestrateF2` auto-link behavior
- `activeCycleInstanceId` ownership (set/clear rules Amendment 4B)
- **`f2/gatePolicy.ts` — ADAPT / REQUALIFY responsibility boundary**
- **usages of `morrisGateRequired` in F2 — ADAPT** (do not delete historical gate machinery in this DOC cycle)
- `studioCognitiveContext` lifecycle projection (candidate vs ACTIVE; paused vs blocked)
- `ProjectAssistantPanel` lifecycle presentation (no false "started"; CTAs)

## COMPLETE
- Pilot lifecycle transition application capability
- pause/resume/finalize/cancel semantics
- finalization obligation assessment
- lifecycle CTA layer (START/PAUSE/RESUME/FINALIZE/CANCEL)

## DEFERRED TECHNICAL DESIGN
- exact enum names/migration
- exact service/class names
- persistence representation of finalization ledger
- schema/API shapes
- representation of candidate/non-active vs ACTIVE statuses

## FORBIDDEN
- parallel lifecycle engine
- multi-ACTIVE redesign in this corrective

---

# O. Deterministic acceptance scenarios (updated)

## Scenario 1 — Candidate permitted; ACTIVE only after START
Given no ACTIVE CycleInstance, when Nora recommends Cadrage, then an **optional candidate/non-active** representation MAY exist, BUT:
- no ACTIVE cycle exists
- `LPS.activeCycleInstanceId` is unset
- no Pilot acknowledgement/activation is claimed
until explicit Pilot START.

## Scenario 2 — START activates exactly one
Pilot START activates exactly one principal CycleInstance and sets `activeCycleInstanceId`.

## Scenario 3 — PAUSE (no HD by default)
Pilot PAUSE needs **no HD by default**, marks PAUSED and clears `activeCycleInstanceId`; another cycle may START.

## Scenario 4 — clean RESUME (no HD)
Clean RESUME needs **no HD** and restores ACTIVE/linkage after runtime checks.

## Scenario 5 — stale RESUME → REPLAN
Materially stale RESUME → REPLAN / HD if structuring; silent resume forbidden.

## Scenario 6 — FINALIZE with missing artifact
Nora recommends FINALIZE **or** Pilot requests FINALIZE directly → Pilote accepts (HD) → missing required artifact ⇒ finalization-in-progress **not** completed.

## Scenario 7 — FINALIZE docs+Evidence; Git N/A
Obligations pass with Git NOT_APPLICABLE → completed.

## Scenario 8 — FINALIZE Git required
Incomplete until required Git/Evidence gates pass.

## Scenario 9 — Attempt success ≠ cycle completed
ExecutionAttempt terminal_success while exit obligations missing → CycleInstance remains open.

## Scenario 10 — Supplementary same type
Completed Cadrage later needs more cadrage → **new** CycleInstance; old remains completed.

## Scenario 11 — Suivi de contrat Product Proof (document only; DO NOT execute REAL)
```
Cadrage mature
→ Nora recommends FINALIZE
→ Pilot FINALIZE
→ exit obligations
→ Artifact / EC / Evidence / Review / Git conditionally
→ Cadrage completed
→ Nora recommends Conception fonctionnelle
→ optional candidate next cycle is non-active
→ NO Conception fonctionnelle work until Pilot START
```

---

# P. REAL exit scenario (document only — DO NOT execute)

**Later proof (after Delivery of this functional contract + Morris gates):**

- Resume existing Suivi de contrat Product Proof at the exact blocked Cadrage exit-transition point
- **No dogfood restart**
- Bounded REAL validating amended Scenarios 1/2/6/7/11 as applicable
- Product Proof remains OPEN until Morris accepts end-to-end exit proof

---

# Key functional rules (amended summary)

1. Nora recommends; Pilote owns START/PAUSE/RESUME/FINALIZE/CANCEL; Studio enforces/persists.
2. Recommendation ≠ CycleInstance ≠ HD ≠ Confirmation ≠ Attempt ≠ Morris construction gate.
3. Candidate/non-active CycleInstance MAY exist pre-START; **no** activeCycleInstanceId / no "started" claim / no execution authority / no next-cycle work until Pilot START.
4. Pilot START is the first authority-bearing ACTIVATION.
5. One principal ACTIVE CycleInstance per Project (first target).
6. PAUSED ≠ BLOCKED; PAUSE clears activeCycleInstanceId; BLOCKED retains it unless Pilot acts.
7. FINALIZE engages exit procedure; does not force completed; Nora recommendation is not a precondition.
8. Completed iff accepted FINALIZE + applicable obligations SATISFIED/NOT_APPLICABLE.
9. EC conditional (0..N); Git conditional.
10. No gratuitous second Close after FINALIZE.
11. Completed immutable; supplementary work = new CycleInstance.
12. Trajectory UI is projection, not a second state engine.
13. Conversation dominant; CTAs are lifecycle controls, not a waterfall stepper.
14. Pilot lifecycle gates ≠ `evaluateMorrisGateRequired` / `morrisGateRequired`.
15. HD is for structuring acts (FINALIZE/CANCEL/trajectory choice/REPLAN), not for default operational START/PAUSE/clean RESUME.
16. No status/label may claim human acknowledgement without a consumed Pilot gate (`acknowledged` runtime flag).
17. Reuse C2 vocabulary; do not invent a parallel lifecycle engine.
18. Current F2 auto-create+`linkAsActiveCycle` before START remains the primary Product Proof blocker for exit-transition honesty.

---

# Reserves

## Closed by this amendment
- A. PAUSE HD strength — CLOSED (NO by default)
- B. activeCycleInstanceId on PAUSE — CLOSED functionally (clear to null; instance remains PAUSED visible)
- D. START + trajectory adoption — CLOSED (one HD may cover both when one structuring act)

## Remains deferred (not a Morris functional open question)
- C. runtime enum ↔ C2 vocabulary — **DEFERRED TECHNICAL DESIGN** (C2 functional authority; Delivery adapts without second state machine)

## Remaining structural decision required
- Morris validation of the **corrected** CORR-PROOF-05 Functional Contract after ChatGPT **re-review**

---

# Controls

- Product HEAD for analysis: `12d837fd29a69b3e83155a06ec58dc91b0e15f0b`
- Versioned Product/project files modified: **ZERO**
- Only local review material under `.tmp-sfia-review/`
- REAL / Stage B / routing / runtime v3: **NOT** performed/claimed
- Consistency search targets for obsolete claims must be clean except in "Superseded prior wording" quotes

---

# Final verdict

**CORR-PROOF-05 FUNCTIONAL DELTA AMENDED — READY FOR CHATGPT RE-REVIEW — NO DELIVERY — PRODUCT PROOF REMAINS OPEN**
