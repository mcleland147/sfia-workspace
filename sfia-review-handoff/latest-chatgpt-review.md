# PRODUCT-JOURNEY-RECONCILIATION — Review Pack (FULL)

- timestamp: 2026-09-15T15:41:34Z
- Cycle: 2 — Conception fonctionnelle / DOC-ANALYSIS / Critical
- Formal Product Completion C2 promotion: **NOT declared** (Morris decides)
- origin/main: `6a41ab7e7deda9f7168d12a37b9316413565fa16`
- worktree: `/Users/morris/Projects/sfia-studio-product-proof-journey-integrity`
- branch: `fix/sfia-studio-product-proof-journey-integrity` (dirty overlay = CANDIDATE TO REVIEW, not accepted design)
- Product source modifications this cycle: **ZERO**
- Dogfood mutations: **ZERO**
- LIVE/REAL: **ZERO**
- Project commit/push/PR/merge: **NOT PERFORMED**

Three-way separation maintained throughout:
- **A. Product truth on main** (`6a41ab7e`)
- **B. Local Journey Integrity candidate delta** (uncommitted overlay)
- **C. Target Product behavior from doctrine** (Build Doctrine A3 + C1 + v3 framing + validated C2 elaboration)

---

## A. Executive Product diagnosis

SFIA Studio's **intended** Product is a Pilote-governed, Nora-assisted loop:

Project continuity → Trajectory/options/Recommendation → HumanDecision → native ExecutionContract (inspect → Confirmation if required → effective authority) → Cursor under contract → Evidence/ReviewBundle → Nora analysis → LPS/Trajectory replan → next cycle.

**Main implementation today** already contains most durable OA primitives (LPS, Epistemic, PresentedOptionSet, HumanDecision, EC, Attempt, Evidence/RB, GCEC) and a usable `/studio` workspace, but the **Product orchestration layer** still mixes Decision Subjects, bypasses Nora on Recovery requalify, treats conversational success as reinstruction completion, presents sample repository binding as truth, and runs Product « Exécuter » as **fixture** (not GCEC REAL Cursor).

**Candidate overlay** correctly addresses Decision Subject precedence / reinstruction consumption / binding honesty / Proposal snapshot continuity for PREPARE path — **KEEP with light remediation** — but does **not** by itself deliver First Governed Cursor REAL.

**Critical path to first Cursor task:** land Decision Subject coherence (Lot A/B) → ensure PREPARE→Inspect→Confirm→Authorize Product path → wire Product Execute to GCEC REAL under Gate D (Lot D) — **not** more isolated button patches.

Structural decision required **now** for a coherent target journey: **NO** (doctrine target is decidable). Open Morris decisions remain on UX naming, REAL campaign authorization, and when/if to promote C2 formally.

---

## B. Canonical target Product loop

**DECIDED TARGET** — Build Doctrine A3:

```
Pilote → Studio/Nora → DoctrinePackage/CKC → qualify cycle/profile/lenses
→ analyse/clarification → LPS → ProjectTrajectory/options/Recommendation
→ HumanDecision → native EC prepared → EC inspected
→ Confirmation if required → effective authority ∩ executor sufficiency
→ Cursor/agent under contract → Evidence/ReviewBundle/Git
→ Nora analysis → LPS/Trajectory update/replan → Pilot decision → next cycle
```

Order governing Confirmation: **inspect before Confirmation; authority after required Confirmations** (A3 / C2 supersede older C1 F.1 ambiguity).

Authority formula (DECIDED):
`valid human authorization ∩ EC scope ∩ AgentCapability/policy ∩ runtime guardrails ∩ valid required Confirmations = effective authority`

---

## C. Product levels P / T / C / E / R

| Level | Meaning | Must not collapse into |
|---|---|---|
| **P PROJECT** | Identity, LPS, resume, binding, continuity | CycleInstance |
| **T TRAJECTORY** | Proposed/decided Project path, options, replan | Proposal / EC |
| **C CYCLE** | Qualify/start/active/exit CycleInstance | Attempt terminal |
| **E EXECUTION** | Intent→HD→EC→Confirm→Authorize→Cursor | Recommendation |
| **R RESULT** | Attempt→Evidence→RB→Nora→LPS/replan | Decorative logs |

Labels P/T/C/E/R are analysis decomposition (**INFERENCE** naming); content is **DECIDED** from V3-F02/F04/F06/F09/F11/F12/F14 + C1.

---

## D. Functional state model (summary)

Representative states (usable for "one primary next action"):

**P:** `project_open` · `recovery_honest` · `binding_missing|bound` · `lps_current`
**T:** `no_trajectory` · `trajectory_recommended` · `trajectory_awaiting_hd` · `trajectory_decided` · `trajectory_replanning`
**C:** `intent_captured` · `qualifying` · `clarifying` · `cycle_prepared` · `cycle_active` · `cycle_blocked` · `cycle_replanning` · `cycle_closed` (C2 states)
**E:** `proposal_pending_lost|recoverable` · `options_bound` · `hd_pursue|amend|refuse` · `ec_prepared` · `ec_inspected` · `confirmation_required|granted` · `authorized` · `attempt_running|terminal_*`
**R:** `evidence_present` · `review_bundle_present` · `nora_post_analysis` · `next_recommendation`

Each state (full matrix in analysis notes): SoT, durable/reconstructible/ephemeral, primary CTA, forbidden competitors, reload expectation = fail-closed requalify if missing (V3-F02).

**Count:** ~30 named functional states across P/T/C/E/R (not a new runtime state-machine framework — functional contract only).

---

## E. Scenario matrix summary

Covered families: S01–S07 Project start; S10–S25 Trajectory/Cycle; S30–S39 Nora/Decision; S40–S54 Execution; S60–S68 Result.

Illustrative expected behaviors:

| ID | Expected (TARGET) | Main today | Candidate |
|---|---|---|---|
| S03 resume | honest LPS + one next action | mostly | better subject CTAs |
| S07 binding missing | empty/unconfigured | **shows acme sample** | **fixed empty load** |
| S30 clarification | Nora asks; no HD invented | yes | arm not cleared |
| S32–S35 Proposal HD | one subject; amend/refuse no PREPARE | W2 yes; CTA race | CTA race fixed |
| S36 lost Proposal | reformulate only | reformulate + **generic Instruire** | reformulate only |
| S37 reconstructible | hydrate or requalify honestly | process-local only | snapshot+hydrate |
| S38 multi-subject | AMBIGUOUS fail-closed | CORR-11 yes | retained |
| S42–S46 EC path | PREPARE→inspect→confirm | fixture path yes | same |
| S51 Cursor start | REAL under Gate D | **fixture Execute** | still fixture |
| S64–S67 replan | Evidence→Nora→LPS/T | partial UI | same |

---

## F. Object / source-of-truth matrix

| Object | Classification | Notes |
|---|---|---|
| Project / LPS | DURABLE CANONICAL | OA Product SQLite |
| ProjectTrajectory | DURABLE CANONICAL | versions + current |
| CycleInstance / CKC | DURABLE CANONICAL | |
| EpistemicItem | DURABLE CANONICAL | Options/Reco/pending markers |
| Recommendation | DURABLE DERIVED | Epistemic Recommendation |
| Proposal body | PROCESS-LOCAL DEBT on main; RECONSTRUCTIBLE via candidate snapshot | Completing Epistemic Observation — no new table |
| Pending Decision Subject marker | DURABLE CANONICAL | |
| PresentedOptionSet | DURABLE CANONICAL | sealed Observation |
| HumanDecision / DecisionBasis | DURABLE CANONICAL | |
| RepositoryBinding | DURABLE CANONICAL | Project payload |
| ExecutionContract | DURABLE CANONICAL | |
| Confirmation requested | EPHEMERAL LEGITIMATE | granted = durable |
| Attempt / Evidence / ReviewBundle | DURABLE CANONICAL | |
| Armed reinstruction / conversation UI | EPHEMERAL LEGITIMATE | |
| Competing CTA subjects | AMBIGUOUS / MULTIPLE on main | lifecycle trajectory vs Proposal pending |

---

## G. Current code architecture map (families)

**pre-m6-product-ui:** ProjectWorkspacePage, Recovery/Conversation/Lps/Lifecycle/Trajectory/History, RepositoryBindingForm, useProductConversation — **KEEP/ADAPT**

**project-assistant:** actions, F2 orchestrate, ProposalStore, Decision Subject, W2 propose/decide/prepare/inspect/confirm/authorize/execute, Evidence rehydrate — **KEEP/COMPLETE**

**vertical-slice-runtime:** Project/LPS/binding/cycle/decision/EC services — **KEEP**

**GCEC/Cursor:** REAL adapters + harness proofs — **HARVEST for Lot D**; not Product Exécuter today

**Legacy:** Conversation `exposeLegacyAuthorityPath` F2/F3 — **FREEZE / keep off Product**; ProjectAssistantPanel — **RETIRE LATER from canonical nav**

---

## H. CTA / action inventory summary

Canonical `/studio` CTAs inventoried across Recovery, Conversation, Lifecycle, Trajectory, Binding.

**Incorrect/ambiguous on main:**
- Recovery « nouvelle intention » → proposeOptions (wrong)
- Generic Instruire while pending owns subject (wrong)
- Binding form acme defaults (wrong as truth)
- Conversation legacy authority path (hidden OK; leak risk HIGH)

**Correct on main (keep):**
- Reformuler / Instruire recoverable pending
- W2 decide pursue/amend/refuse
- PREPARE only when pursue-like
- Inspect / Confirm / Authorize / fixture Execute
- Lifecycle start/assess/finalize/complete-step (cycle plane)

---

## I. Complete routing map (critical transitions)

Examples:

1. **Nora intention:** ConversationSurface → sendMessage → projectAssistantSendAction → orchestrateAssistantSend → (optional) pending marker write → f2 proposal → (candidate) notifyDurableFactsChanged → Trajectory rehydrate

2. **Recovery new intention (TARGET):** RecoverySurface → onRequalify → focus Nora only → Pilote types → same as (1). **Main:** also recoveryProposeSignal → proposeOptions (**divergence**)

3. **Instruct Proposal options:** Trajectory instruct → w2ProposeTrajectoryOptionsAction → PresentedOptionSet Epistemic → decide → HumanDecision durable

4. **PREPARE:** Trajectory prepareContract → w2PrepareExecutionContractAction → prepareExecutionContractFromW2Decision → EC durable

5. **Execute (Product today):** governedExecute → fixture adapter `realExecution:false` — **not** Cursor REAL gateway

---

## J. Cycle lifecycle — target vs current

**TARGET:** propose/qualify/clarify → trajectory HD if structural → prepare/start CycleInstance → active work may include **multiple ECs** → Attempt terminal ≠ cycle closed → Evidence → Nora → replan/HD → explicit close → next CycleInstance.

**CURRENT:** LifecycleSurface + pilot lifecycle actions cover start/assess/finalize/pause-resume/replan HD; Trajectory covers pre-cycle prepare/start and Proposal-subject EC path; Nora F2 covers qualification/Proposal. **Gap:** Pilote-facing unity of "what plane am I on?" (T vs C vs E) and subject ownership when Proposal pending coexists with lifecycle CTAs.

---

## K. ExecutionContract → Cursor — target vs current

**TARGET chain:** need → Decision Subject → Options/Reco → HD → DecisionBasis → PREPARE → inspect → Confirmation if required → effective authority → Cursor adapter payload retaining objective/context/sources/scope/gates/stops/validation/evidence → Attempt.

**CURRENT Product:** chain exists through Authorize + **fixture Execute**.

**CURRENT GCEC:** REAL Cursor/docs/git proven in **harness** under env gates — technical capability **HARVESTABLE**.

**First remaining blocker for "Pilote creates valid EC and sends to Cursor":**
Product UI Execute does not select GCEC REAL executor / Gate D campaign path (orchestration gap, not missing Cursor tech).

---

## L. Evidence / ReviewBundle / replan — target vs current

**TARGET:** Attempt → Evidence before claim → ReviewBundle → Nora → LPS/Trajectory → HD if structural → continue/close/next.

**CURRENT:** Trajectory post-evidence / History / Conversation durable cards exist; W3-C post-evidence kinds; loop partially wired. **Gap:** Product REAL Cursor result feeding that loop as default dogfood path; SUCCESS technical ≠ cycle success messaging.

---

## M. Continuity / restart matrix (findings)

| Case | TARGET | Main | Candidate |
|---|---|---|---|
| Browser reload mid-pending | reconstruct subject or fail-closed reformulate | marker durable; Proposal body lost | hydrate if snapshot |
| Next process restart | same | same | same |
| Conversational ok without Proposal | keep prior subject / arm | **clears arm** | keeps arm |
| Consumed Confirmation | durable | durable granted | same |
| Running Attempt UI loss | rehydrate result | rehydrate CTAs exist | same |
| Evidence without LPS update | fail-closed / requalify | risk of stale projection | same debt |

---

## N. Main implementation gaps (journey-ordered)

### BLOCKING
1. **G-B01** J01 Recovery→proposeOptions (main)
2. **G-B02** J02 reinstruction arm cleared on any ok (main)
3. **G-B03** J02/J07 generic Instruire vs pending (main)
4. **G-B04** J03 binding sample-as-truth (main)
5. **G-B05** J05/J06 Proposal body process-local without reconstructible snapshot (main; legacy markers even after candidate)
6. **G-B06** J15 Product Execute ≠ Cursor REAL (First Governed Cursor)

### HIGH
1. **G-H01** Lifecycle trajectory CTAs vs Proposal pending subject fork
2. **G-H02** `not_consumed` transition typed but under-emitted
3. **G-H03** Dead recoveryProposeSignal wiring debt (candidate)
4. **G-H04** Legacy F2/F3 still in conversation controller
5. **G-H05** PREPARE needs manual operation kind — easy miss after pursue
6. **G-H06** Evidence→Nora→replan Product UX incomplete for REAL results

---

## O. Local candidate overlay assessment

| Change | Classification |
|---|---|
| Recovery → Nora focus | **KEEP AS-IS** |
| Suppress generic Instruire under pending | **KEEP AS-IS** |
| Arm clear only on supersession / f2_proposal | **KEEP WITH REMEDIATION** (emit explicit `not_consumed`) |
| notifyDurableFactsChanged after proposal | **KEEP AS-IS** |
| proposalSnapshot + hydrate | **KEEP WITH REMEDIATION** (legacy markers; payload size) |
| RepositoryBindingForm durable load | **KEEP AS-IS** |
| Dead recoveryProposeSignal prop | **REWORK** (cleanup) |
| New journey/binding/UI tests | **KEEP AS-IS** |
| Nothing wholesale **DROP** | — |

Candidate is **aligned with confirmed target invariants** for Decision Subject / continuity / binding honesty; **incomplete** for First Cursor REAL; **risk** if merged without Lot A acceptance tests and without clarifying T vs E CTA ownership.

---

## P. Legacy / parallel path audit

| Path | Disposition |
|---|---|
| Conversation exposeLegacyAuthorityPath | FREEZE off Product |
| F3 fixture prepare/execute in controller | FREEZE / REMOVE FROM CANONICAL PATH |
| ProjectAssistantPanel | RETIRE LATER from /studio |
| Fixture governedExecute | KEEP as deterministic path; HARVEST REAL separately |
| Ops1 return-to-studio | KEEP navigation |
| Multiple lifecycle vs Proposal CTAs | ADAPT subject ownership rules |

---

## Q. Regression / coherence risks

- Hiding generic Instruire must not block legitimate **trajectory** options when `kind=none`.
- Snapshot hydrate must not revive STALE/superseded Proposal after LPS advance without digest checks.
- Recovery Nora-first must not remove valid resume of decided trajectory.
- Binding load must not overwrite in-progress edits mid-type.
- PREPARE must not remain visible after amend/refuse (already guarded — keep tests).
- Cycle finalize must clear obsolete Decision Subjects or fail-closed.
- Wiring Product Execute to REAL must not silently widen authority.

Required future tests: J-contract E2E, CTA mutual exclusion, restart hydrate, binding non-overwrite, amend/refuse no PREPARE, multi-pending AMBIGUOUS, fixture vs REAL parity.

---

## R. Product acceptance contract

AC-P01…AC-P20 as mandated, plus:

- **AC-P21** At most one primary Decision Subject CTA family visible.
- **AC-P22** Recovery « nouvelle intention » never calls proposeOptions.
- **AC-P23** Binding UI never presents sample values as current durable truth.
- **AC-P24** Product Execute REAL path is explicit, Gate-D gated, and inspectable as distinct from fixture.
- **AC-P25** Attempt SUCCESS does not auto-close CycleInstance.

---

## S. Target test strategy

A. Journey contract tests (application entrypoints)
B. UI wiring (CTA→handler)
C. Integration propose→decide→PREPARE→inspect
D. Reload/restart hydrate
E. SoT / Epistemic integrity
F. Negatives (ambiguous, amend/refuse, missing binding)
G. Fake/REAL parity (same Product path; boundary substitute vs REAL)
H. Bounded REAL Product campaign (separate Morris GO)

**Minimal deterministic E2E:** Project→Nora→(cycle/trajectory as needed)→Proposal→Options→pursue→PREPARE→Inspect→**STOP**.

**Distinct REAL:** same path→Confirm/Authorize→one Cursor bounded task→Evidence/RB→**STOP**.

---

## T. Capability convergence lots

### LOT A — Canonical navigation / Decision Subject precedence
Closes G-B01/B02/B03/H01. Reuses overlay KEEP items. Exit: CTA exclusion + Recovery Nora-first tests green on main.

### LOT B — Semantic continuity / reconstruction
Closes G-B05/H02. Snapshot+hydrate + explicit not_consumed. Exit: restart recovers B or honest reformulate; no invented subject.

### LOT C — Cycle lifecycle coherence (Product UX)
Closes Pilote confusion T vs C vs E. Reuses LifecycleSurface. Exit: active cycle + pending Proposal shows one primary plane/CTA family.

### LOT D — ExecutionContract → Cursor Product handoff
Closes G-B06. Harvest GCEC REAL into Product Execute under Gate D. Exit: deterministic prepare/inspect + separate REAL one-task proof.

### LOT E — Evidence → RB → LPS/replan
Closes G-H06. Exit: post-Attempt Product path updates LPS/trajectory recommendation without auto-closing cycle.

**Critical path:** A → B → (C as needed) → D. E can partially parallel after D.

---

## U. FIRST GOVERNED CURSOR TASK — TARGET MILESTONE

Pilote must, in Product UI:
1 open/resume Project · 2 active cycle · 3 identify bounded work · 4 review Reco/options · 5 HD · 6 PREPARE · 7 inspect · 8 confirm if required · 9 authorize · 10 send EC to Cursor · 11 one Attempt · 12 Evidence/RB.

**Working now:** 1–9 largely (fixture through authorize); Decision Subject continuity better on candidate.
**Missing:** 10–12 as **Product REAL** default; subject UX coherence on main; Gate D Product wiring.
**Minimum lots:** A+B (merge-ready overlay) then D.
**NOT authorized for REAL by this analysis.**

---

## V. Structural / open Morris decisions

**Structural decision required now? NO** — target journey decidable from doctrine without new persistence architecture.

### Already decided
A3 loop; Rec≠HD; EC inspect→Confirm→authority; Attempt≠Cycle≠Project; V3-F02 continuity; native EC; GCEC harvest preferred over rebuild; runtime v3 NON ADOPTED.

### Open Morris decisions
1. Formal promotion of Product Completion C2 as construction status?
2. Authorize REAL First Cursor Product campaign (Gate D) after Lots A/B?
3. Product naming: "Proposal" vs Recommendation vocabulary in UI?
4. Whether Lifecycle CTAs yield completely when Proposal pending (strict) vs soft guidance?
5. Timeline for Lot D Product Execute REAL vs keep fixture longer?

### Recommendations (not decisions)
- Treat Journey Integrity overlay as **Lot A/B candidate**, remediate H02/H03, then ChatGPT Critical Review → commit/PR.
- Do not dogfood REAL until Lot D wired.
- Do not invent new Proposal table; complete Epistemic snapshot approach.

---

## W. Fake / Real proof map

| Path | Proof level |
|---|---|
| W2/F2/CORR journey deterministic | DETERMINISTIC PROVEN (tests) |
| Product Execute on /studio | FIXTURE / non-REAL |
| GCEC Cursor docs/git | REAL at **tested harness scope** (historical) — not Product UI E2E |
| This reconciliation cycle | ANALYSIS ONLY |

---

## X. Recommended next action

1. Morris/ChatGPT review this reconciliation.
2. If accepted: remediate candidate H02/H03 → Critical Review → integrate Lot A/B.
3. Separate GO for dogfood reproof on Decision Subject path (deterministic PREPARE), still **no REAL**.
4. Separate Gate D GO for Lot D First Governed Cursor.

---

## Y. Unique verdict

**PRODUCT-JOURNEY-RECONCILIATION — TARGET SFIA STUDIO PRODUCT LOOP RECONSTRUCTED — CURRENT IMPLEMENTATION MAPPED — GAPS AND CONVERGENCE PATH IDENTIFIED — READY FOR MORRIS / CHATGPT PRODUCT TRAJECTORY REVIEW**

---

## Appendix — Candidate overlay hash freeze (BEFORE analysis)

```
030320440b41f2de413147524d14f996e31e517bf4e7d62433c1ed4ffadf2e1b  projects/sfia-studio/app/__tests__/pre-m6-product-ui/repositoryBindingForm.ui.test.tsx
a447cf785bea5b2a9ae144c7aea788d4b1c39d666468def198039dbc09462846  projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
a9212ee40d909621e6ae915230d54fa4a1da66ab5f981bf3716104371da72241  projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
a950971189e6a4d42d9428c36fee9eb21307095938cbec9a6816102f22dd6ed9  projects/sfia-studio/app/__tests__/project-assistant/w1RecoveryFoundation.test.tsx
3d68d2eae2ba680508c73af07fe1b55fd1232cc2f420c42d64585641e8909c32  projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
bcc4bfacba9e05bec18feda4239374d63b9ea20173fee1880cc5c1deeb3503bf  projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
c25c63290eb78e865add80fbe3b4493e4b3bc4231ad6a3dc8b16d8fd38262423  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
7d35e35a6bcc8303dc980ea1318c05b635cd82865a570f9cd07ae6ed2337a991  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
bba6bc700a9d314739602a7685df42439f5e339d5074020c57f0cf168c0b5e93  projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
1a41e9fc44e7b6da8084e931a75838bd1f51270b46dc8358907dca71baf341d9  projects/sfia-studio/app/features/project-assistant/types.ts
17883488266c226817536dfbfd6c3c640147c2f55226641254b24dff7c36740a  projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
87d64f3e7ca20a6171ce5080ab2eeb22c8cd9f2cdb11cc380e45215aa648cce0  projects/sfia-studio/app/features/project-assistant/w2/pendingDecisionSubjectMarker.ts
```
