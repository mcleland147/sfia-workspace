# CORR-PROOF-05 — Pilot-Governed Cycle Lifecycle & Exit Transition
## Functional Delta — FULL Review Pack (exploitable)

| Field | Value |
| --- | --- |
| **Timestamp (UTC)** | 2026-09-07T14:04:00Z |
| **Repo** | `mcleland147/sfia-workspace` |
| **DOC worktree** | `/Users/morris/Projects/sfia-wt-corr05-func-12d837fd` |
| **Branch (DOC WT)** | `run/sfia-studio-corr05-func-delta-01` |
| **HEAD** | `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` |
| **origin/main** | `12d837fd29a69b3e83155a06ec58dc91b0e15f0b` |
| **Tree** | `142ec00df04b9361d3cffd92600aff8ae39e6976` |
| **Base** | Merge PR #475 (CORR-PROOF-04 Option D) on main |
| **Cycle** | CORR-PROOF-05 — Conception fonctionnelle corrective |
| **Typology** | DOC |
| **Profile** | CRITICAL |
| **Campaign** | Product Proof — iterative REAL validation |
| **Product Proof state** | OPEN / blocked at Suivi de contrat Cadrage exit-transition |
| **Files modified (Product/project versioned)** | NONE |
| **Files created (local only)** | `.tmp-sfia-review/chatgpt-review.md` |
| **Reservations** | See §J / Open reserves |
| **Decisions already consumed** | GO Morris to start CORR-PROOF-05 functional corrective; produce review material |
| **Decisions still required** | Morris validation of CORR-PROOF-05 Functional Contract after ChatGPT review |
| **Verdict** | CORR-PROOF-05 FUNCTIONAL DELTA — READY FOR CHATGPT CRITICAL REVIEW — NO DELIVERY — PRODUCT PROOF REMAINS OPEN |

### Anti-claims (explicit)

- NOT CORR-PROOF-05 VALIDATED
- NOT READY FOR DELIVERY
- NOT PRODUCT PROOF COMPLETE
- NOT runtime v3 ADOPTED
- NOT Stage B
- NOT production routing selected
- NO Product source / schema / UI mutation in this cycle
- NO REAL execution in this cycle

### Local Git Truth (DOC WT)

```
pwd=/Users/morris/Projects/sfia-wt-corr05-func-12d837fd
HEAD=12d837fd29a69b3e83155a06ec58dc91b0e15f0b
origin/main=12d837fd29a69b3e83155a06ec58dc91b0e15f0b
tree=142ec00df04b9361d3cffd92600aff8ae39e6976
tracked dirty=NO (only local .tmp-sfia-review)
```

**Workspace note (operational, non-blocking for DOC):** other local worktrees previously drifted via external `git checkout` away from `12d837fd`. This DOC analysis was executed from a freshly created clean worktree pinned to exact main. Product Proof REAL continuity DB remains owned by dogfood Product state (out of scope for this DOC cycle).

### Sources read

**Process (external):**
- `prompts/templates/sfia-cycle-execution-template.md` (routing awareness)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

**Convergence / Product Completion:**
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md` (authoritative C2)

**v3 doctrine:**
- `30`, `32`, `33`, `34`, `35`, `37` (as listed in contract)

**Product CKC:**
- `pkg-sfia-studio-doctrine-v3-1.0.0/ckc/02-conception-fonctionnelle.md`

**Runtime inspected (read-only):**
- `lib/oa/cycle/domain/types.ts`
- `lib/oa/cycle/application/createCycle.ts` (+ full `application/` listing)
- `lib/oa/cycle/**` (no pause/resume/finalize/cancel services found)
- `lib/oa/project/domain/types.ts`
- `lib/oa/decision/domain/types.ts` (+ errors/invariants)
- `features/project-assistant/f2/orchestrateF2.ts` (actionable create path)
- `features/project-assistant/f2/intentAnalysis.ts`
- `features/project-assistant/f2/studioCognitiveContext.ts`
- `features/project-assistant/ProjectAssistantPanel.tsx`
- related W2 EC prepare/execute cycle coherence checks

---

# A. Executive problem statement

## Product Proof observation

On the existing Project **Suivi de contrat** (`prj:ecc81c56-…`), Product Proof progressed through advisory/cognitive work (CORR-PROOF-04) to a **Cadrage maturity / exit-transition** judgment point: Nora may recommend finalizing Cadrage and moving toward Conception, but the Pilote has **no first-class governed lifecycle actions** (START / PAUSE / RESUME / FINALIZE / CANCEL) that:

1. create/activate a CycleInstance **only under Pilote control**;
2. engage a governed **exit procedure** without conflating Recommendation, Proposal, HumanDecision, and CycleInstance;
3. complete a CycleInstance only when **exit obligations** (scope/decisions/artifacts/execution/Evidence/Review/Git-conditional) are satisfied/proven;
4. keep Nora advisory while Studio enforces/persists.

## Expected loop (approved framing)

```
Nora recommends (candidate work / transition / finalize)
→ Pilote explicitly START | PAUSE | RESUME | FINALIZE | CANCEL
→ Studio validates, enforces, persists CycleInstance + LPS linkage
→ ExecutionContract only if outstanding obligation requires governed execution
→ Cursor/agent executes only under EC
→ Evidence/ReviewBundle proves outputs
→ CycleInstance completed only when applicable obligations SATISFIED
→ Nora may recommend next cycle type
→ no next-cycle content until Pilote START on a new CycleInstance
```

## Current observed loop (runtime, verified)

```
user utterance (F2 actionable intent)
→ analyzeIntent / qualify
→ CreateCycle (createdBy Nora F2) with linkAsActiveCycle=true
→ LPS.activeCycleInstanceId stamped
→ Proposal saved (process-local)
→ Pilote may later accept HD on proposal / trajectory / EC paths
```

**Exact code path:** `orchestrateF2.ts` actionable branch calls `oa.cycleServices.createCycle.execute({…, createdBy: actor:nora-f2, linkAsActiveCycle: true})` **before** any Pilote START HumanDecision.

**CreateCycle statuses written:** Critical → `proposed`; Light/Standard → `acknowledged`. Enum includes `active|blocked|completed|cancelled|superseded` but **no application service** was found that transitions a CycleInstance into `active`, `completed`, or `cancelled` after create. Repository `save` exists; writers beyond create were not found in `lib/oa/cycle/application/`.

**UI:** `ProjectAssistantPanel` shows cycle type / linked CycleInstance id / status when present; **no** Pilote CTAs START/PAUSE/RESUME/FINALIZE/CANCEL.

## Why this blocks end-to-end Product Proof

Without Pilot-governed START/FINALIZE (and pause/resume/cancel), Product Proof cannot demonstrate the central Studio loop: **explicit human lifecycle control + obligation-gated completion + honest next-cycle recommendation**. Cognitive grounding (CORR-PROOF-04) can improve advice, but **cannot close** the Cadrage exit gate.

---

# B. Authority model

| Actor / asset | May | Must not |
| --- | --- | --- |
| **Nora** | Recommend START/PAUSE/RESUME/FINALIZE/CANCEL; assess maturity/obligations; propose EC content; analyze Evidence | Mutate CycleInstance lifecycle; create HD; consume Confirmation; auto-activate cycle; invent Facts |
| **Pilote** | Own structuring lifecycle gates; START/PAUSE/RESUME/FINALIZE/CANCEL; HD; inspect EC; Confirm protected boundaries | Delegate HD to Nora; bypass Confirmation; treat Recommendation as cycle state |
| **Studio** | Validate transitions; enforce invariants; persist CycleInstance/LPS/trajectory/HD/EC/Evidence links; fail-closed | Decide for Pilote; auto-close Cycle on Attempt terminal; invent Confirmation |
| **ExecutionContract** | Bound governed effects when execution is required | Exist gratuitously when no obligation needs execution |
| **Cursor/agent** | Execute only under accepted EC + authority | Decide cycle lifecycle; invent HD/Confirmation |
| **Evidence / ReviewBundle** | Prove execution/output/artifacts | Silently promote Claims to Facts; auto-complete Cycle |
| **ProjectTrajectory / LPS** | Project living truth (active cycle, next action, decided trajectory) | Act as a second lifecycle engine; UI-owned truth |
| **Morris (construction)** | Repo construction gates for SFIA Studio protected effects | Be required as runtime Pilote for ordinary Project cycles |

Preserve C2 distinctions: Recommendation ≠ HD ≠ Confirmation ≠ Morris construction gate (C2 §10.3).

---

# C. Lifecycle model (functional)

## Candidate work vs real CycleInstance

| Concept | Meaning |
| --- | --- |
| **Recommended / candidate cycle work** | Nora Recommendation / conversational orientation — **no** CycleInstance, **no** LPS.activeCycleInstanceId |
| **CycleInstance** | Durable governed work unit of a cycle type under a Project |
| **ACTIVE (principal)** | Exactly one principal ACTIVE CycleInstance per Project (first target) |
| **LPS.activeCycleInstanceId** | Linkage of the principal ACTIVE instance — set only on START (or equivalent Pilote activation), cleared on PAUSE/CANCEL/COMPLETED as defined below |

## States (functional; reconcile with C2 vocabulary)

| CORR-PROOF-05 label | Relation to C2 §7.2 | Notes |
| --- | --- | --- |
| recommended/candidate (non-instance) | outside CycleInstance states | Conversation / Recommendation only |
| START (transition) | → enters working states | Pilote gate |
| ACTIVE | maps to working continuum (`qualifying`…`replanning` as C2 working states) | One principal ACTIVE |
| PAUSE → PAUSED | `cycle_paused` (C2) | Voluntary |
| RESUME | PAUSED → ACTIVE | Preconditions |
| BLOCKED | involuntary; ≠ PAUSED | External/authority/contradiction stop |
| FINALIZE (decision) | Pilote engages exit procedure | ≠ completed |
| finalization-in-progress | derived while obligations pending | Not a free-form reopen |
| COMPLETED | `cycle_closed` / terminal completed | Historical |
| CANCEL → CANCELLED | explicit abort | Terminal non-success |

**Disposition:** KEEP C2 names `cycle_paused` / `cycle_closed` as authoritative functional vocabulary; treat CORR-PROOF-05 START/ACTIVE/FINALIZE labels as **CLARIFICATION / COMPLETE** of Pilot control semantics, **not** a second competing engine.

**Runtime enum gap:** `CycleInstanceStatus` = `proposed|acknowledged|active|blocked|completed|cancelled|superseded` — **no** `paused` / `cycle_paused`. ProjectStatus includes `paused` (Project-level) — **must not** be reused as CycleInstance pause. Classification: **IMPLEMENTATION GAP ONLY** relative to C2 `cycle_paused` (plus **FUNCTIONAL DELTA** for Pilot START/FINALIZE control timing).

---

# D. Transition table

| # | Source | Trigger | Actor | Preconditions | New HD? | Confirmation N1/N2/N3? | Runtime checks | Side effects | Result | Evidence/audit | Fail-closed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T1 | none / candidate | START | Pilote | Valid Project; cycle type; profile; CKC semantics available-or-honestly-unavailable; entry deps; trajectory compatibility; no other principal ACTIVE; Pilot authority | Yes if START implies new structuring trajectory choice; **conditional** if trajectory already decided and START only activates decided type | No (unless START immediately implies protected effect — normally No) | one-ACTIVE invariant; Project active; type catalog | Create CycleInstance; set status ACTIVE continuum; set LPS.activeCycleInstanceId | ACTIVE | Audit lifecycle + LPS append | Refuse if ACTIVE exists / invalid type / authority denied |
| T2 | ACTIVE | PAUSE | Pilote | ACTIVE exists; no conflicting mandatory in-flight protected attempt that policy forbids pause | Conditional (if pause is structuring for this Project) — default **Yes** as lifecycle gate for clarity, or **No** if C2 already treats pause as non-structuring operator under policy — **Morris may choose**; recommendation: **HD yes** for CRITICAL projects, **HD optional/light** otherwise | No | Attempt not requiring exclusive lock | Clear or retain activeCycleInstanceId per §F; mark PAUSED | PAUSED | Audit | Refuse if unknown instance |
| T3 | PAUSED | RESUME | Pilote | Same instance; context reconcile OK | Conditional if material drift | No | stale HD/Evidence/trajectory checks | Restore ACTIVE + LPS link | ACTIVE | Audit | If material stale → require REPLAN (T3b) not silent resume |
| T3b | PAUSED | RESUME requested but stale | Studio+Pilote | Material change detected | Yes (REPLAN / scope) | Conditional | Drift detectors | No silent ACTIVE restore | stays PAUSED or REPLAN path | Audit | Fail-closed to REPLAN |
| T4 | ACTIVE | involuntary block | Studio | Stop condition / authority / contradiction | No automatic HD | No | SC-* | Mark BLOCKED; retain anchors | BLOCKED | Audit | No auto-close |
| T5 | ACTIVE/BLOCKED | FINALIZE accept | Pilote | Nora may have recommended; Pilote accepts exit engagement | **Yes** (FINALIZE is structuring exit engagement) | No extra Close after FINALIZE if no new structuring decision | Obligation assessment | Enter finalization-in-progress; **do not** set completed | finalization-in-progress | Audit + obligation ledger | Missing obligations → remain in-progress |
| T6 | finalization-in-progress | obligation requires execution | Studio/Nora prepare; Pilote inspect | Outstanding execution obligation | Conditional (if new structuring) | **Yes if protected boundary** after EC inspect | EC complete+inspect | 0..N EC/Attempts | still in-progress until obligations pass | Evidence/RB | No execution without EC gates |
| T7 | finalization-in-progress | all applicable obligations SATISFIED | Studio (deterministic) | Accepted FINALIZE HD; obligations SATISFIED/NOT_APPLICABLE | **No** gratuitous second Close | No | Obligation matrix | Set COMPLETED; clear active link; historical | COMPLETED | Evidence/audit of completion | Incomplete → no completed |
| T8 | ACTIVE/PAUSED/BLOCKED | CANCEL | Pilote | Explicit abort | Yes | Conditional if irreversible effects already done | Effects inventory | CANCELLED; clear active link | CANCELLED | Audit | Refuse silent cancel of protected in-flight without Confirmation |
| T9 | COMPLETED | reopen same instance | — | — | — | — | — | **Forbidden by default** | stays COMPLETED | — | Require new CycleInstance (T10) |
| T10 | COMPLETED + new need same type | START new | Pilote | Impact analysis; trajectory replan as needed | Yes | No unless protected | New id; relation to prior | New CycleInstance ACTIVE | ACTIVE (new) | Audit relation | Never mutate historical completed |

---

# E. START assessment

## Preconditions (functional)

1. **Valid Project** (active, resolvable LPS)
2. **Cycle type** from catalog (evolvable; not fixed-15 invariant)
3. **Profile** Light/Standard/Critical with Critical justification rules (existing CreateCycle/qualify semantics KEEP)
4. **DoctrinePackage / CKC** availability semantics: absent CKC must not silently invent authority; honest unavailable/synthetic per existing CKC resolution (KEEP; createCycle today does not block on absent CKC — KEEP with honesty)
5. **Entry dependencies** for the cycle type (CKC/method) — assess; blockers visible
6. **Trajectory compatibility** with decided/current ProjectTrajectory when present
7. **Blockers** (authority, contradictions, protected unfinished effects)
8. **One-ACTIVE invariant** — refuse START if another principal ACTIVE exists (unless prior PAUSED and policy allows parallel — **out of scope**; first target = one ACTIVE)
9. **Pilot authority** to start

## Exact moment CycleInstance is created/activated (TARGET)

| Moment | Rule |
| --- | --- |
| Nora recommends Cadrage/Conception/… | **No** CycleInstance |
| Pilote START (HD lifecycle gate) | **Create** CycleInstance + enter ACTIVE continuum |
| LPS.activeCycleInstanceId | Set **at START**, not at Recommendation/Proposal |

## CURRENT runtime (verified divergence)

| Moment | Observed |
| --- | --- |
| F2 actionable intent | `createCycle` with `linkAsActiveCycle: true`, `createdBy: actor:nora-f2` |
| CycleInstance.status | `proposed` or `acknowledged` (not necessarily `active`) |
| LPS.activeCycleInstanceId | Set immediately on that create |
| Pilote START CTA | **Absent** |

**Classification:** **FUNCTIONAL DELTA** (Pilot START before create/activate) + **IMPLEMENTATION GAP** (no START service/UI) relative to approved framing. C2 already requires Pilote HD for structuring and forbids Nora deciding — START-before-create **COMPLETES** C2 rather than replacing it.

---

# F. PAUSE / RESUME

| Topic | Rule |
| --- | --- |
| **PAUSED vs BLOCKED** | PAUSED = voluntary Pilote pause. BLOCKED = involuntary stop/authority/contradiction. **≠** |
| **activeCycleInstanceId on PAUSE** | Clear principal ACTIVE linkage (so another cycle may START) **or** retain pointer with explicit PAUSED flag — **functional preference:** clear principal ACTIVE linkage while retaining durable CycleInstance record in PAUSED state (enables Scenario 3). Exact persistence mechanics = **DEFERRED TECHNICAL DESIGN**. |
| **RESUME reconciliation** | Compare LPS/objective/scope, HD currency, Evidence freshness, trajectory version, doctrine digest |
| **Stale/superseded HD** | Block silent RESUME; require new HD or REPLAN |
| **Changed scope / trajectory** | REPLAN instead of RESUME |
| **Evidence freshness** | Materially stale Evidence → REPLAN or re-prove obligations |
| **When REPLAN required** | Material drift in Truth C, decided trajectory, authority basis, or exit criteria |

C2 already lists `cycle_paused` — **KEEP**. Runtime missing pause — **IMPLEMENTATION GAP ONLY** (+ Pilot CTA COMPLETE).

---

# G. FINALIZE assessment

FINALIZE = Pilote decision to **engage governed exit procedure**. FINALIZE **≠** completed.

## Obligation families

| Family | Examples | Git? |
| --- | --- | --- |
| Scope / exit criteria | Cadrage exit criteria met for this cycle type | N/A |
| Decisions | Required structuring HD recorded/accepted | N/A |
| Artifacts | Required documents/materializations for cycle type | Conditional |
| Execution | Required governed effects done under EC | Conditional |
| Evidence | Required Evidence present with epistemic honesty | Conditional |
| Review | ReviewBundle when required | Conditional |
| Repository / Git | Only when contract/obligations require repo effects | **Conditional — not universal** |

## Obligation result labels (functional candidates)

`SATISFIED` · `PENDING` · `MISSING` · `BLOCKING` · `NOT_APPLICABLE`

Not mandatory technical enums (**DEFERRED TECHNICAL DESIGN**).

## Semantic flow

```
Nora may recommend FINALIZE
→ Pilote FINALIZE (HD)
→ Studio builds obligation assessment
→ if any BLOCKING/MISSING applicable → finalization-in-progress (not completed)
→ EC only for obligations needing execution
→ when all applicable SATISFIED/NOT_APPLICABLE → Studio completes CycleInstance deterministically
→ no gratuitous second Close
```

---

# H. Conditional execution

- During finalization: **0..N** ExecutionContracts
- EC **not mandatory** when no outstanding obligation requires governed execution (e.g., pure documentary exit with Evidence already present and Git N/A)
- Ordering: prepare EC → Pilote inspect → Confirmation if protected → authority → Attempt
- Protected boundaries per C2 §10 KEEP
- Git actions only if EC/obligation requires them

---

# I. Completion semantics

COMPLETED when:

1. Pilote accepted FINALIZE (HD), and
2. All applicable obligations are SATISFIED or NOT_APPLICABLE, and
3. No BLOCKING residual for this cycle type exit, and
4. Studio applies terminal completed / `cycle_closed` semantics

**Automatic deterministic completion** after (1)+(2) — **no** second human Close gate.

**Exceptions requiring new HD:** new structuring scope discovered during finalization; contradiction requiring trajectory change; protected irreversible effect needing new Confirmation/HD.

C2 BR-PC-26 KEEP: Attempt terminal ≠ CycleInstance closed.

---

# J. Historical immutability / supplementary cycle

- COMPLETED remains terminal / historical
- No reopen by default
- Later need for same cycle type → **new** CycleInstance (new id), relation to prior recorded
- Impact analysis + ProjectTrajectory replan (Recommendation then HD if structuring)
- UI must show multiple instances of same type distinctly

---

# K. ProjectTrajectory / workspace contract

| Rule | Disposition |
| --- | --- |
| Conversation dominant | KEEP (Product Proof / C2 UX principles) |
| Living trajectory panel = projection of runtime truth | KEEP (doc 32 / C2) |
| Actual history vs ACTIVE work vs Recommendation/future candidate | COMPLETE visibility |
| Multiple instances same cycle type distinct | COMPLETE |
| No UI-owned truth | KEEP |
| No invented % maturity score | KEEP |
| Pilot CTA set: START, PAUSE, RESUME, FINALIZE, CANCEL | **FUNCTIONAL DELTA / COMPLETE** |
| Visible blockers / remaining exit obligations / Nora recommendation | COMPLETE |

---

# L. HumanDecision / Confirmation matrix

| Action | HD required? | Confirmation? | Notes |
| --- | --- | --- | --- |
| START (trajectory already decided) | Yes (lifecycle activation) — may be light-form HD | No | Avoid duplicate trajectory HD |
| START (new trajectory choice) | Yes (trajectory + activation; can be one HD covering both) | No | |
| PAUSE | Recommended Yes (Critical); optional lighter otherwise — **Morris reserve** | No | |
| RESUME (clean) | Yes or reuse explicit resume gate — prefer Yes for auditability | No | |
| RESUME (stale) | Yes (REPLAN) | Conditional | |
| FINALIZE | Yes | No second Close | |
| CANCEL | Yes | Yes if irreversible effects exist | |
| Git/irreversible effects | Per C2 | Yes after EC inspect | |

Avoid duplicate confirmations: Confirmation ≠ HD; no micro-confirmations (BR-PC-08 KEEP).

---

# M. C2 reconciliation matrix

| Principle | C2 source | Runtime support | Gap | Disposition | Acceptance criterion |
| --- | --- | --- | --- | --- | --- |
| Nora recommends / Pilote decides | §4–5, BR-PC-01 | Partial (F1 advisory; F2 still mutates cycle) | F2 createCycle by Nora | COMPLETE | No CycleInstance until Pilote START |
| Phrase ≠ auto HD | BR-PC-02 | Largely KEEP on HD recording | Lifecycle phrase may still create cycle via actionable | COMPLETE | Actionable utterance alone ≠ START |
| Project ≠ Cycle | BR-PC-04 / §6 | KEEP identity model | — | KEEP | |
| CycleInstance ≠ Attempt | §7 / BR-PC-26 | KEEP in EC/Attempt paths | — | KEEP | Scenario 9 |
| cycle_paused | §7.2 | **Absent** in CycleInstanceStatus | No pause service/UI | COMPLETE | Scenario 3 |
| cycle_closed explicit | §7.2 | `completed` enum exists; **no finalize path** | No FINALIZE/obligation completion | COMPLETE | Scenarios 6–8, 11 |
| Attempt terminal ≠ close cycle | BR-PC-26 | Enforced in doctrine/comments; no auto-close service found | — | KEEP | Scenario 9 |
| HD go/no-go cycle | §10.3 | HD exists; not wired as START/FINALIZE lifecycle | Gap | COMPLETE | Scenarios 1–2, 11 |
| Trajectory ≠ Recommendation ≠ HD | BR-PC-03 | W2 promoteDecidedTrajectory KEEP | Lifecycle not driving trajectory panel CTAs | ADAPT/COMPLETE | |
| Confirmation after EC inspect | §5.6–5.7, §10 | W2/W3 paths KEEP | — | KEEP | |
| No implicit authority mutations | C2 gates | F2 createCycle is durable mutation without Pilote START | **Divergence** | COMPLETE | Scenario 1 |
| One principal ACTIVE | Approved framing (this corrective) | LPS single activeCycleInstanceId field exists; **no** enforcement vs Nora auto-link | Gap | COMPLETE | Scenario 2–3 |
| Conditional Git | Approved framing + C2 Git SoT | EC Git effects conditional in spirit | FINALIZE obligations missing | COMPLETE | Scenarios 7–8 |
| Conversation dominant / no waterfall stepper | C2 / Product Experience | UI conversation-first | Missing lifecycle CTAs | COMPLETE | Workspace contract K |

---

# N. Delivery impact map (areas only — no implementation design)

| Asset | Class | Note |
| --- | --- | --- |
| C2 validated document | KEEP | Do not rewrite historical validated C2; ADAPT via corrective delta |
| `CreateCycle` application service | ADAPT | Retain qualify/profile/Critical rules; **stop** treating F2 auto-create+link as START |
| `orchestrateF2.ts` actionable path | ADAPT | Separate Recommendation/Proposal from CycleInstance create/activate |
| Cycle application services | COMPLETE | Pilot-governed transition services (names **DEFERRED**) for pause/resume/finalize/cancel/complete |
| `CycleInstanceStatus` / C2 vocabulary mapping | ADAPT/COMPLETE | Represent `cycle_paused` / closed semantics without second engine |
| LPS `activeCycleInstanceId` linkage | ADAPT | Set/clear only on Pilot lifecycle transitions |
| HumanDecision recording for lifecycle gates | COMPLETE | START/FINALIZE/CANCEL (and pause/resume per matrix) |
| Obligation assessment for FINALIZE | COMPLETE | Functional ledger; persistence **DEFERRED** |
| ExecutionContract / Evidence / Review paths | KEEP | Reuse; invoke conditionally during finalization |
| ProjectTrajectory UI projection | ADAPT | Show history vs ACTIVE vs recommendations; multi-instance |
| `ProjectAssistantPanel` CTAs | COMPLETE | START/PAUSE/RESUME/FINALIZE/CANCEL |
| `studioCognitiveContext` | ADAPT | Expose lifecycle state for Nora reasoning (status, obligations, paused vs blocked) |
| Build Doctrine / Roadmap | FREEZE for this cycle | No modification authorized here |
| Parallel lifecycle engine | **RETIRE LATER / forbidden now** | Do not introduce |

---

# O. Deterministic acceptance scenarios

## Scenario 1 — No cycle until Pilot START
Given no ACTIVE CycleInstance; when Nora recommends Cadrage; then **no** CycleInstance and **no** LPS.activeCycleInstanceId until Pilote START.

## Scenario 2 — START activates exactly one
Pilote START → exactly one ACTIVE CycleInstance + LPS.activeCycleInstanceId set to that id.

## Scenario 3 — PAUSE frees START of another
PAUSE → CycleInstance PAUSED; principal ACTIVE cleared; another cycle may START.

## Scenario 4 — RESUME clean
RESUME with unchanged material context → ACTIVE restored.

## Scenario 5 — RESUME stale → REPLAN
Material drift → RESUME refused; REPLAN required.

## Scenario 6 — FINALIZE with missing artifact
Nora recommends FINALIZE → Pilote accepts → missing required artifact ⇒ finalization-in-progress **not** completed.

## Scenario 7 — FINALIZE docs+Evidence; Git N/A
Obligations pass with Git NOT_APPLICABLE → completed.

## Scenario 8 — FINALIZE Git required
Incomplete until required Git/Evidence gates pass.

## Scenario 9 — Attempt success ≠ cycle completed
ExecutionAttempt terminal_success while exit obligations missing → CycleInstance remains open (not completed).

## Scenario 10 — Supplementary same type
Completed Cadrage later needs more cadrage → **new** CycleInstance; old remains completed.

## Scenario 11 — Suivi de contrat Product Proof (document only; DO NOT execute REAL here)
Cadrage mature → Nora recommends finalization → Pilote FINALIZE → materialize cadrage → Evidence/review/Git if applicable → completed → Nora recommends Conception fonctionnelle → **no** functional-design cycle content until Pilote START.

---

# P. REAL exit scenario (document only — DO NOT execute)

**Later proof (after Delivery of this functional contract + Morris gates):**

- Resume existing Suivi de contrat Product Proof at the exact blocked Cadrage exit-transition point
- **No dogfood restart**
- Bounded REAL validating Scenarios 1/2/6/7/11 as applicable to actual Project state
- Product Proof remains OPEN until Morris accepts end-to-end exit proof

---

# Key functional rules (summary for reviewers)

1. Nora recommends; Pilote owns START/PAUSE/RESUME/FINALIZE/CANCEL; Studio enforces/persists.
2. Recommendation ≠ CycleInstance ≠ HD ≠ Confirmation ≠ Attempt.
3. No CycleInstance / no active LPS link before Pilote START.
4. One principal ACTIVE CycleInstance per Project (first target).
5. PAUSED ≠ BLOCKED.
6. FINALIZE engages exit procedure; does not force completed.
7. Completed iff accepted FINALIZE + applicable obligations SATISFIED/NOT_APPLICABLE.
8. EC is conditional (0..N); Git conditional.
9. No gratuitous second Close after FINALIZE.
10. Completed is immutable; supplementary work = new CycleInstance.
11. Trajectory UI is projection, not a second state engine.
12. Conversation remains dominant; CTAs are lifecycle controls, not a waterfall stepper.
13. Reuse C2 vocabulary (`cycle_paused`, `cycle_closed`, Attempt separation); do not invent a parallel lifecycle engine.
14. Current F2 auto-create+link is the primary Product Proof blocker for exit-transition.

---

# Open reserves / Morris decisions required

1. **PAUSE HD strength:** always HD vs Critical-only HD (matrix L).
2. **activeCycleInstanceId on PAUSE:** clear principal link (preferred) vs retain with PAUSED flag — confirm preference (persistence deferred).
3. **Mapping runtime enum ↔ C2 labels** (`acknowledged`/`active` vs C2 working states) — Delivery design deferred; Morris validates functional mapping intent only.
4. **Whether START HD may be combined** with trajectory adoption HD in one record when both occur together (allowed if explicit).
5. Acceptance of CORR-PROOF-05 Functional Contract after ChatGPT Critical Review.

---

# Controls

- Product HEAD for analysis: `12d837fd29a69b3e83155a06ec58dc91b0e15f0b`
- Versioned Product/project files modified: **ZERO**
- Only local review material under `.tmp-sfia-review/`
- REAL / Stage B / routing / runtime v3: **NOT** performed/claimed

---

# Final verdict

**CORR-PROOF-05 FUNCTIONAL DELTA — READY FOR CHATGPT CRITICAL REVIEW — NO DELIVERY — PRODUCT PROOF REMAINS OPEN**
