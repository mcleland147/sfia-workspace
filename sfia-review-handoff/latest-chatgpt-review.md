# ChatGPT Critical Review Pack — FULL

## Meta
- **timestamp**: 2026-09-10T04:39:43Z
- **local timestamp**: 2026-09-10 06:39:43
- **Cycle ID**: SFIA-STUDIO-GREENFIELD-VALIDATED-TRAJECTORY-CYCLEINSTANCE-START-CONTRACT-QUALIFICATION-01
- **Milestone**: Greenfield Product Proof — Governed Cycle Entry
- **SFIA Cycle**: 3 — Architecture fonctionnelle / qualification de contrat
- **Typologie**: RUN — read-only qualification
- **Profile**: CRITICAL
- **Justification CRITICAL**: contrat gouvernera ProjectTrajectory décidée → CycleInstance authority-bearing via START (identité cycle, profil, CKC, autorité Pilote, activeCycleInstanceId, cohérence Trajectory↔Cycle↔LPS)
- **GO Morris consumed**: GO MORRIS — GREENFIELD VALIDATED TRAJECTORY → CYCLEINSTANCE / START CONTRACT — READ-ONLY QUALIFICATION
- **Candidate Product**: `d436c31468f66b33cc4110ab9c64601938fa5732`
- **Parent**: `4c8733bf80e25060241c49157bded9813842e1ce`
- **origin/main**: `a9f6c310a0826d0e5bd6f7264603382a86564db1`
- **Latest LIVE handoff**: `02c94daf` / blob `e3f6c09b` — GREENFIELD … LIVE BOUNDARY PROVEN

## Local Git Truth
- worktree: `/Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310`
- branch: `delivery/sfia-studio-product-proof-qual-to-governed-cycle`
- HEAD: `d436c31468f66b33cc4110ab9c64601938fa5732` — MATCH
- parent / origin/main: MATCH
- Product tracked diff vs HEAD: **ZERO** (dirty limited to `.tmp-sfia-review/**`)
- Product commits / push / PR: **NONE**
- Candidate not on GitHub main — local HEAD is SoT

## Sources read
- cycle execution template; cycle routing guide
- CKC routing matrix 04; synthetic map 02; method §4.3 fallback only
- convergence doctrine + roadmap; product-completion cadrage
- framing 30 / 32 / 33 / 34
- latest handoff LIVE BOUNDARY PROVEN
- CKC Cycle 3 (Architecture fonctionnelle): detailed CKC **absent** · fallback synthetic map + §4.3 · status candidate/experimental · executionAuthority=none

## Convergence Pre-check
- Capacities: V3-F02 / F05 / F06 / F09 served; prepare upstream of V3-F11/F12 only (no EC)
- Entry LIVE PROVEN: intention → LR → candidate traj → provenance → HD → validated/current
- Gap: validated/current → exact CycleInstance materialization → explicit START → active + LPS link
- **AUCUN START in this cycle**

## LIVE entry state (READ-ONLY verified)
- projectId: `prj:08f868d7-a859-4c5c-9a56-e0f7a71b7c58`
- trajectory: `trj:lr-bridge-ecb3c4704c48` status=validated effective current=true version=1
- decidedByDecisionRef: `dec:gf-trj:80be687f-b88b-4fb6-b987-0517c06adb25`
- HD: accepted · actor:local-pilote · authority=morris · sourceType=candidate_trajectory · targetCycleTypeId=`cyc:framing`
- steps: one step `stp:cadrage-c9ddb562` order=1 label=Cadrage state=pending (no cycleTypeId field on step)
- provenance: `epi:trj-prov-62c6c74d5d07da15` RESOLVED
- LPS: v4 · trajectoryId set · decisionIds contains HD · **activeCycleInstanceId=null** · ckcResolutionRef absent
- CycleInstance=0 · Confirmation=0 · START=none · EC=0
- Optional LIVE RO: **PASS** (no UI mutation / no write)

## Files inspected (local HEAD)
- `lib/oa/cycle/domain/types.ts`, invariants, lifecycleInvariants, cycleTypeCatalog, qualification
- createCycle, qualifyCycleWithCkc, resolveCycleKnowledgeContract, assessStartReadiness, pilotLifecycleTransitions, assessFinalization, promoteDecidedTrajectory
- appendLivingProjectStateVersion
- f2/pilotLifecycleActions, orchestrateF2, qualify, qualificationSignalCoherence, proposalStore
- project-assistant/actions, ProjectAssistantPanel
- greenfield: approveCandidateTrajectory, candidateTrajectoryDecisionBasis, candidateTrajectoryProvenance, prepareCandidateTrajectoryFromCurrentRecommendation, preCycleCandidateTrajectoryActions, TrajectorySurface
- LifecycleSurface (START UI)

## Call-site map (Product, non-test)
### createCycle.execute
- **Only**: `f2/orchestrateF2.ts` (~987) with linkAsActiveCycle=false, id cyc:f2-{hex}, signals from Nora F2 analysis

### qualifyCycleWithCkc.execute
- **Only**: `f2/qualify.ts` → orchestrateF2 (~867)

### pilotLifecycle.start / START
- `f2/pilotLifecycleActions.ts` executePilotLifecycleAction START
- `actions.ts` projectAssistantPilotLifecycleAction
- UI: ProjectAssistantPanel · LifecycleSurface
- **No greenfield TrajectorySurface START CTA** after decided trajectory (shows “Aucun cycle démarré” only)

### TrajectoryStep.state writers
- Full trajectory save only: CreateInitialTrajectory / ProposeTrajectoryVersion / PromoteDecidedTrajectory
- Product constructors set state=pending at bridge / W2 options
- **START does not mutate step.state**

### CycleInstance ↔ trajectory durable links found
- LPS sibling pointers only: trajectoryId / trajectoryVersion / activeCycleInstanceId / ckcResolutionRef
- **No** trajectoryStepId on CycleInstance
- **No** cycleTypeId / cycleInstanceId on TrajectoryStep
- Epistemic relatedObjects on provenance: project + LR + trajectory (no stepId)
- Verdict: **LINK GAP**

---

## Existing contracts (revalidated on d436c314)

### CycleInstance
- Fields: cycleInstanceId, cycleTypeId, projectId, profile, status, acknowledgedAt?, createdAt, closedAt?, pauseReconciliation?, qualificationSignals?
- Critical create → proposed; Light/Standard → acknowledged

### CreateCycle
- Inputs: cycleInstanceId (caller-supplied), cycleTypeId, projectId, signals(6), requestedProfile?, justification?, objective?, scope?, createdBy, linkAsActiveCycle?, expectedLpsVersion?, ckcResolutionRef?
- ckcResolutionRef written to LPS **only if** linkAsActiveCycle===true (also sets activeCycleInstanceId)
- Server does **not** mint cycleInstanceId

### Qualification / profile
- QualifyCycleWithCkc requires six explicit boolean signals + catalog/CKC resolution
- recommendProfile derives Critical/Light/Standard from signals only
- F2 harvests signals from Nora intent analysis — **not available on greenfield post-HD path without new REAL or other durable source**

### CKC
- Catalog `cyc:framing` → detailed pilot CKC path (Product doctrine registry)
- Method matrix: Cadrage CKC detailed=yes, consumption candidate
- Cycle 3 Architecture (this qualification cycle): detailed absent · fallback only · executionAuthority=none
- Runtime: CKC = cognitive guidance · executionAuthority=false

### START (PilotLifecycleTransitions.start)
- Requires existing CycleInstance in proposed|acknowledged
- Authority: N3 + requireMorrisGate on pilot-lifecycle:{cycleInstanceId}
- assessStartReadiness then activate cycle + LPS activeCycleInstanceId only
- **Does not** accept/bind ckcResolutionRef
- **Does not** mutate trajectory/steps
- Trajectory HD required only if trajectory.status===candidate OR structuringTrajectoryChoiceOpen; **validated → requiresTrajectoryHumanDecision=false**

### Authority
- LOCAL_PILOTE_ACTOR + morris gate; env TEMPORARY WITH EXIT already LIVE-CONSUMED
- GREENFIELD START AUTHORITY: **EXISTING CONTRACT SUFFICIENT**

### Legacy F2
- Cycle-first before decided ProjectTrajectory; ProposalStore process-local; linkAsActiveCycle=false; Nora-driven signals
- **REJECT FOR GREENFIELD PATH** as workflow; **HARVEST** CreateCycle/qualify/START/readiness/authority/tests only

---

## Q1 — Contrat métier exact
Recommended functional sequence (pending Morris on structural deltas):

validated/current trajectory
→ server PREPARE non-active CycleInstance (exact type/profile/CKC qualified)
→ Pilote sees prepared cycle (no active authority)
→ explicit Pilote START
→ CycleInstance active + LPS.activeCycleInstanceId
→ STOP before ExecutionContract

Preparation = materialize + qualify (non-authority-bearing).
Structuring already done = trajectory HD candidate_trajectory.
Authority-bearing mutation = START (N3), not a second trajectory choice HD.
Prefer **two-step PREPARE then START (Option A)** once gaps closed; prepared non-active cycle is legitimate retryable state.

## Q2 — Source canonique cycleTypeId
Authoritative chain:
validated current trajectory → decidedByDecisionRef → accepted HD → sourceType=candidate_trajectory → candidateTrajectoryContext.targetCycleTypeId → cross-check provenance → catalog selectability
FORBIDDEN as authority: step.label reverse map.
Provenance: REQUIRED FOR CORRECTNESS as cross-check.
Live observed type: `cyc:framing`.

## Q3 — CycleInstance ↔ TrajectoryStep
**LINK GAP** — EXACT LINK DOES NOT EXIST.
Single-step LIVE reconstructible only by heuristic (unique pending step) — not durable generic relation.
Multi-step future cannot be honest without stored cycleTypeId or step↔cycle link.
→ **MORRIS STRUCTURAL DECISION REQUIRED**

## Q4 — Trajectory step state at START
Runtime today: START does not flip step.state or trajectory.status.
active Cycle + LPS pointer + step still pending without contracted semantics = **INVALID** for governed path (or at best TEMPORARY INCONSISTENCY).
No existing use-case activates step on START. Blocked on Q3 for which step to activate.

## Q5 — Materialization CreateCycle
| Input | Class |
|---|---|
| cycleInstanceId | SERVER GENERATED (today caller-supplied; should mint server-side) |
| cycleTypeId | DERIVABLE EXACTLY from HD context |
| projectId | DERIVABLE |
| signals | NOT reconstructible honestly today → PROFILE GAP |
| requestedProfile | DERIVABLE once signals honest |
| justification | HUMAN if Critical |
| objective/scope | DERIVABLE from LPS/project |
| createdBy | SERVER (not Nora) |
| linkAsActiveCycle | MUST be false for prepare |
| ckcResolutionRef | DERIVABLE via QualifyCycleWithCkc; persistence gap if linkAsActiveCycle false |

## Q6 — Runtime CycleProfile
Studio construction CRITICAL ≠ Task-App Cadrage profile.
Six signals: F2 from Nora; greenfield HD path has no durable sealed signals.
Hardcoding Standard / six-false: FORBIDDEN.
**PROFILE QUALIFICATION CONTRACT GAP**

## Q7 — QualifyCycleWithCkc
HARVEST as canonical pre-Create qualification (catalog, selectability, six signals, CKC resolution, recommendedProfile, executionAuthority=false).

## Q8 — CKC binding
1. Non-active CycleInstance does not store CKC ref on aggregate.
2. LPS ckcResolutionRef today only via CreateCycle.linkAsActiveCycle=true or carry-forward.
3. Prepare with linkAsActiveCycle=false → CKC not durable on LPS.
4. No other durable CKC store for the instance.
5. linkAsActiveCycle=true before START → semantic incoherence.
6. START does not currently accept ckcResolutionRef — ADAPT START to pass ref into LPS append is minimal non-schema fix.
7. For cyc:framing, unavailable/invalid CKC resolution should fail-close at prepare/START.

## Q9 — linkAsActiveCycle
**KEEP FALSE** for prepare. ACTIVE pointer before explicit START = invalid.

## Q10 — START vs HumanDecision
validated → requiresTrajectoryHumanDecision false (revalidated).
candidate_trajectory HD already decided which cycle type to follow.
**GREENFIELD START HUMANDECISION: NOT REQUIRED**
START = explicit Pilote lifecycle action + N3 evidence + readiness. Do not reuse trajectory.approval HD under fake start+trajectory subject.

## Q11 — Explicit Pilote START
Technical START CTA sufficient once CycleInstance exists; métier label “Démarrer le cadrage/cycle” with type/profile/objective/CKC guidance; no Cursor/EC/agent.
TrajectorySurface today has no Start CTA post-HD — Delivery must add honest presentation after prepare.

## Q12 — Confirmation
**GREENFIELD START CONFIRMATION: NOT REQUIRED** (N3 authority verify already gates; avoid gratuitous micro-confirmation; not EC Confirmation).

## Q13 — Authority
**GREENFIELD START AUTHORITY: EXISTING CONTRACT SUFFICIENT**
Reuse registerLocalPiloteAuthority; RESERVE-HD-LIVE-AUTHORITY-ENV-01 remains CLOSED AT ENV-CONFIGURED + LIVE-CONSUMED SCOPE.

## Q14 — Start readiness
Existing assessStartReadiness adequate for generic START; greenfield extras in prepare/orchestration guard: validated current · decidedByDecisionRef · accepted candidate_trajectory HD · targetCycleTypeId match · catalog selectable · provenance cross-check.

## Q15 — DecisionBasis revalidation
Server must re-read at prepare and re-check at START. Mismatch → refuse. No heuristic recovery.

## Q16 — cycleInstanceId / idempotence
Generate server-side. Prefer stable key from projectId+trajectoryId+version+targetCycleTypeId+stepId once step link exists. exists → idempotent or refuse foreign.

## Q17 — Create vs START atomicity
MODEL A recommended: prepare durable non-active CycleInstance; START separately. Failed START leaving proposed/acknowledged = legitimate retryable prepared state if UI honest.
MODEL B only with outer UoW; current Create/START UoWs separate.

## Q18 — Critical vs Standard instance
Critical→proposed, Standard/Light→acknowledged; both startable; no auto-start; explicit Pilote START activates.

## Q19 — TOCTOU / fail-closed (summary)
no/non-validated/stale traj, HD drift, provenance invalid, type mismatch/deprecated, missing signals, CKC invalid, sibling active, LPS OCC, reservation/blocked step, authority denied, step link missing → PREPARE/START REFUSED or RETRY as applicable. Label reverse-map → STOP. Invent profile → STOP.

## Q20 — Step/active coherence
active Cycle + LPS pointer + corresponding step pending without contract = **INVALID**.
Minimal delta after link exists: same START UoW updates step.state pending→active.

## Q21 — LPS map
- Entry: v4 · traj+decision · active=null · no ckc
- After PREPARE (target): traj/decision unchanged · active=null · CycleInstance non-active · CKC binding TBD
- After START: active=cycleId · traj+decision retained · ckc ref set · cycle active

## Q22 — CKC & START
Framing detailed CKC inaccessible → fail-close prepare/START. Still executionAuthority=false.

## Q23 — Legacy F2
REJECT workflow; HARVEST primitives.

## Q24 — UI surface
Primary: TrajectorySurface greenfield post-decided block. Legacy panel secondary. Figma N/A.

## Q25 — START ≠ EC
Max: active CycleInstance + LPS active + trajectory coherence. Must NOT create EC/Attempt/Cursor/Nora auto.

---

## Options A→F
| Option | Verdict |
|---|---|
| A PREPARE then START | RECOMMENDED shape after structural gaps closed |
| B Atomic create+START | Possible later; higher complexity |
| C Reuse F2 path | REJECT |
| D Minimal product orchestration | REQUIRED companion |
| E New domain relation/schema | REQUIRED minimal for Cycle↔step link (+ maybe profile seal) |
| F New parallel store | REJECT |

## Minimum durable facts classification
| Fact | Class |
|---|---|
| projectId, trajectoryId/version, decidedByDecisionRef | MATERIAL DURABLE |
| cycleTypeId (from HD context) | DERIVABLE EXACTLY |
| trajectoryStepId link | MISSING — must become MATERIAL |
| cycleInstanceId | SERVER GENERATED durable |
| CycleProfile + qualificationSignals | MATERIAL on CycleInstance once honest source exists |
| ckcResolutionRef | MATERIAL on LPS at/after START |
| catalog version/hash | DERIVABLE at qualify (seal in resolution) |
| cycle status, activeCycleInstanceId | MATERIAL |
| HD ref | MATERIAL |
| authority evidence | SERVER |
| LPS version / step state | MATERIAL |

## Future BAR-START matrix
BAR-START-01…32 as listed in GO — required for future Delivery; not implemented here.

---

## Structural gate

# MORRIS STRUCTURAL DECISION REQUIRED

Cannot claim EXISTING CONTRACT SUFFICIENT / DELIVERY QUALIFIED without inventing:
- Cycle↔step exact link (multi-step honesty)
- honest profile signal source for greenfield
- CKC durability without pre-START active pointer (START ADAPT may suffice for CKC alone — still blocked by other gaps)

---

## MORRIS DECISION PACK

### Decision ID proposed
**D-GF-START-01** — Greenfield validated trajectory → CycleInstance / START exact identity & coherence

### Problem
Validated/current ProjectTrajectory + accepted candidate_trajectory HD prove which cycle type was decided, but Product cannot yet: (1) durably bind CycleInstance to exact TrajectoryStep; (2) qualify honest runtime CycleProfile without Nora F2 signals or invented booleans; (3) bind CKC on LPS without activeCycleInstanceId before explicit START (unless START extended).

### Existing contract
CreateCycle + QualifyCycleWithCkc + PilotLifecycleTransitions.start + assessStartReadiness; LPS pointers; HD candidate_trajectory context with targetCycleTypeId; bridge builds single step with catalog label only (no cycleTypeId on step).

### Gap
LINK GAP · PROFILE QUALIFICATION CONTRACT GAP · CKC bind-without-active gap

### Why primitives insufficient
No trajectoryStepId / cycleTypeId on step; six signals not sealed on greenfield HD path; CreateCycle writes ckcResolutionRef only with linkAsActiveCycle; StartCycleRequest has no ckcResolutionRef.

### Options
1. First-pending-only + invent Standard + linkAsActiveCycle true — REJECT
2. Application ADAPT only without step link — INSUFFICIENT for multi-step
3. Minimal structural: durable step↔cycle relation + profile source contract + START CKC bind — RECOMMENDED
4. New parallel lifecycle store — REJECT

### Recommended option
- **E-min**: persist cycleTypeId on each TrajectoryStep at candidate bridge/promote (and/or trajectoryStepId on CycleInstance at prepare). Prefer step.cycleTypeId for multi-step.
- **Profile**: Pilote-confirmed signal set at prepare/start (HUMAN INPUT) OR sealed prior qualificationSignals on HD/context if already produced — never invent/hardcode framing=Standard.
- **CKC**: ADAPT StartCycleRequest + START LPS append to accept server-resolved ckcResolutionRef; CreateCycle linkAsActiveCycle=false on prepare.
- **Orchestration D**: product-level prepare from validated traj+HD; explicit START; reuse authority/readiness.

### Exact minimal delta
1. Domain: TrajectoryStep.cycleTypeId (required for bridge-produced steps) OR CycleInstance.trajectoryStepId
2. Bridge/promote writes cycleTypeId onto step(s)
3. Prepare guard: match HD targetCycleTypeId to step.cycleTypeId (fail if 0/ambiguous)
4. Profile source as above
5. START accepts ckcResolutionRef into LPS append
6. Same START UoW: step.state pending→active for linked step
7. Likely no new SQL table if payload_json stores aggregates

### Why now / why simpler fails
Without this, LIVE START invents type/step/profile or activates LPS before START. Label map forbidden; first-pending not multi-step-safe; six-false forbidden; linkAsActiveCycle true breaks START semantics; F2 wrong order.

### Impacts
Domain TrajectoryStep/CycleInstance field; JSON payload evolution; LPS ckc via START; step state on START; START HD not required; authority unchanged; F2 regression keep; multi-step enabled via step.cycleTypeId.

### Debt / exit
If Morris prefers temporary first-cycle-only without step.cycleTypeId: RESERVE-START-STEP-LINK-01 OPEN with exit=add cycleTypeId before second step. Still need profile+CKC answers.

### Anti-claims
Does not authorize START LIVE, EC, Cursor, Nora auto, or Product Delivery code in this cycle.

### Decision wording ready for Morris
> Adopt D-GF-START-01: (1) durable exact link CycleInstance↔TrajectoryStep via step.cycleTypeId (bridge-written) [or trajectoryStepId on CycleInstance]; (2) greenfield CycleProfile signals must be honestly sourced (Pilote-confirmed or sealed prior fact)—never invented; (3) CKC LPS bind occurs at explicit START (extend START), never via linkAsActiveCycle before START; (4) prepare uses CreateCycle linkAsActiveCycle=false; (5) START remains N3 Pilote action without second trajectory HD when trajectory is validated/current.

---

## Future Delivery boundary (only after Morris adopts)
validated/current → exact type/profile/CKC → prepare CycleInstance non-active → explicit START → active + LPS link + step coherence → STOP.
Hors scope: Nora post-START, cycle work, EC, Confirmation d’exécution, Cursor, Evidence, FINALIZE.
**Not qualified for Delivery until D-GF-START-01 decided.**

## Product / REAL scope this cycle
- Product files changed: **ZERO**
- Env changed: **ZERO**
- Model / REAL: **ZERO**
- CycleInstance / START / HD / Confirmation / EC / Attempt: **ZERO**

## Reserve dispositions
- RESERVE-HD-LIVE-AUTHORITY-ENV-01 = CLOSED AT ENV-CONFIGURED + LIVE-CONSUMED SCOPE
- RESERVE-HD-LIVE-01 = CLOSED AT LIVE BOUNDARY PROVEN SCOPE
- RESERVE-TRJ-PROVENANCE-01 = CLOSED AT LIVE BOUNDARY PROVEN SCOPE
- CR-HD-01 / CR-HD-02 = CLOSED DETERMINISTICALLY
- RESERVE-HD-CONCURRENCY-REALISM-01 = OPEN
- RESERVE-QA-MOCK-01 = OPEN / NON-BLOCKING
- **New**: RESERVE-START-STEP-LINK-01 = OPEN (LINK GAP) — pending D-GF-START-01
- **New**: RESERVE-START-PROFILE-SIGNAL-01 = OPEN (PROFILE QUALIFICATION CONTRACT GAP)
- **New**: RESERVE-START-CKC-BIND-01 = OPEN (CKC bind without pre-START active) — closable by START ADAPT if Morris agrees

## Next capability
Morris decides D-GF-START-01 → then Delivery deterministic of prepare/START boundary → Critical Review → LIVE only under separate GO.

## Anti-claims
Does NOT claim: CycleInstance LIVE · START LIVE · EC · execution ready · E2E REAL · Task App delivered · Greenfield complete · R2 closed · PR ready · runtime v3 ADOPTED · Delivery qualified without Morris.

## Final verdict
**GREENFIELD VALIDATED TRAJECTORY → CYCLEINSTANCE / START CONTRACT — STRUCTURAL DECISION REQUIRED**
