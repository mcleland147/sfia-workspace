# LIGHT REVIEW PACK — HABITFLOW-LEGACY-TRAJECTORY-STATE-TRUTH-CHECK-01

## 0. Meta
- timestamp: `2026-10-02T20:11:37Z`
- cycle: `HABITFLOW-LEGACY-TRAJECTORY-STATE-TRUTH-CHECK-01`
- type: Audit projet / RUN-Support (READ-ONLY)
- profile: Standard
- Product mutation: **ZERO**
- DB mutation: **ZERO**
- REAL: **ZERO**
- classification: **A — LEGACY PRE-CORRECTION STATE INCOMPLETE**
- verdict: **LEGACY STATE NON-BLOCKING — REPLAY ON CURRENT RUNTIME RECOMMENDED**

## 1. Git truth
- workspace: `/Users/morris/Projects/sfia-workspace-post-execution-handoff-01`
- current branch (local): `delivery/sfia-studio-habitflow-chat-first-projecttrajectory-hd-ec-continuity-01` @ `b0cbdfb006c2a183a1e73cfa7052b8e6a1eb8885`
- origin/main: `0a8c808bf0f701e6b2c1fcf7421ca04efc4f03fe` (= Merge PR #545) — **MAIN_OK**
- dirty: `.tmp-sfia-review/**` only (tolerated)
- no rebase / reset / clean / project commit

## 2. Store inspected (READ-ONLY)
- Product DB: `/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite`
- Session DB: `.../nora-session.sqlite`
- Opened via SQLite URI `file:...?mode=ro` — SELECT only
- No INSERT/UPDATE/DELETE/services mutantes / Studio writes triggered
- DB mtime unchanged by audit (last Product write = T4 Proposal turn `2026-10-02T19:36:47Z`)

## 3. HabitFlow Project ID
**Unique match:** `prj:4047b5eb-5abd-402b-9712-45c1b3634b50`
- title: HabitFlow
- created: `2026-10-02T07:11:47.826Z`
- repositoryBinding.pathRoot: `projects/habitflow`
- repositoryBinding.identity: `mcleland147/sfia-workspace`
- current LPS: `lps:e206b42c1c3fe2d1` (v11 active)
- activeCycleInstanceId (Project payload): `cyc:trj-7b226d5d5d54d00bb88fbce2` (framing)

No other HabitFlow Project in this store.

## 4. PROJECT / LPS
- LPS v1→v11; objective HabitFlow habit-tracking unchanged
- Active cycle on LPS v5+: framing `cyc:trj-7b226d5d5d54d00bb88fbce2`
- Trajectory pin: `trj:lr-bridge-a1fbf8de34ad` @ v1

## 5. CYCLE INSTANCES
| cycleInstanceId | type | status | createdAt |
|---|---|---|---|
| `cyc:trj-7b226d5d5d54d00bb88fbce2` | cyc:framing / Light | **active** | 2026-10-02T07:15:48.841Z |
| `cyc:f2-82d25cd2781cbed9` | cyc:delivery / Light | acknowledged (not Project-active) | **2026-10-02T19:36:43.951Z** (post-#545) |

Active cycle at old Recommendation era and now: framing cycle (still active on Project).

## 6. PROJECT TRAJECTORIES
- `trj:lr-bridge-a1fbf8de34ad` v1 status=`validated`
- decidedByDecisionRef=`dec:gf-trj:60a65977-4d59-478a-a058-ec9d9a2aa302` (greenfield candidate_trajectory HD @ 07:15:47Z)
- CURRENT pointer: same traj@1
- **No second W2 ProjectTrajectory candidate** created for BOUNDED chat-first decide

## 7. NORA RECOMMENDATIONS
Lifecycle + ACW Recommendations (all status=active):

Pre-correction ACW with `opt:trajectory:bounded-direct` in relatedObjects:
- `epi:acw:1a17622ebf6028c1f64f` @ 07:44:15Z
- `epi:acw:534ec1141c0f7a1485cf` @ 07:48:14Z
- `epi:acw:9e3b6c786ccaf6ff3d7d` @ 10:37:57Z
- `epi:acw:da481442f0bf64f6120d` @ 13:27:11Z
- `epi:acw:8028408aa6c1efe0b2e1` @ 13:33:39Z (latest ACW bounded-direct)

Source: `active-cycle-work:nora` — **not** a PresentedOptionSet seal.
Post-#545 Recommendation: `epi:rec-w2-e92cb65a8204` @ 19:36:47Z source=`optset:w2-e92cb65a8204` (Proposal amend).

## 8. PROJECTTRAJECTORY PRESENTED OPTION SETS
**EXISTAIT-IL un PresentedOptionSet ProjectTrajectory durable pour l’ancienne Recommendation ?**

### **NO**

Evidence:
- Only Observation with `kind=w2_presented_option_set`: `epi:set-w2-e92cb65a8204` @ 19:36:47Z
- That set is **Proposal** (`optionRefs` pursue/amend/refuse; `trajectoryId=null`; `candidateVersion=null`)
- Zero historical / resolved / inactive PT POS found for HabitFlow
- Options epistemic items exist only for this Proposal set (3 Options)

## 9. CURRENTNESS / TDS reconstruction (conceptual, no mutation)
From durable facts + current code contracts:

| Reader | Reconstructed result | Why |
|---|---|---|
| `findActiveAwaitingProjectTrajectoryPresentedOptionSet` | **none** | No PT POS Observation exists |
| Proposal awaiting POS | **unique** (`optset:w2-e92cb65a8204`) | Active Proposal POS; pending marker resolved after bind |
| `assessChatFirstWorkEligibility` | **eligible Proposal** (not PT) | Proposal XOR PT → Proposal wins; no PT unique |
| ACW Nora refs | newest ACW carries `opt:trajectory:bounded-direct` on framing cycle | Durable ACW items yes |
| Chat-first PT HD path | **blocked** | Requires awaiting PT POS or seal; none sealed historically |
| TDS PRESENT vs CURRENT PT subject | ACW may project PRESENT for framing, but **CURRENT sealed PT decision subject = absent** | Nora T4 text: Recommendation ProjectTrajectory CURRENT unavailable |

## 10. HUMAN DECISIONS
| decisionId | sourceType / subject | when |
|---|---|---|
| `dec:gf-trj:60a65977-…` | `candidate_trajectory` (approve as-is, stopConditions AUCUN EXECUTION_CONTRACT) | 07:15:47Z |
| `dec:pilot-life:cf94116d-…` | lifecycle obligation-policy framing | 07:39:25Z |

- W2 trajectory_option HD: **0**
- W2 Proposal HD: **0**
- HD created by last message (T4): **NO**

## 11. EXECUTION CONTRACTS
- EC count HabitFlow: **0**
- EC created by last attempt/message: **NO**
- Attempts: **0**

## 12. CURRENT PROPOSAL (T4 — do not decide)
- proposalId: `prop:f2:5d6ba5fe-86c0-45ef-9469-84edd394996d`
- createdAt: `2026-10-02T19:36:43.958Z` (pending marker) / POS `19:36:47.444Z`
- status snapshot: DECISION_REQUIRED
- cycle proposed: `cyc:f2-82d25cd2781cbed9` (delivery) — not Project active
- POS: `optset:w2-e92cb65a8204` recommended amend
- **NOT decided / not mutated by this audit**

## 13. Timeline T0–T5
| T | UTC | Durable | Conversational |
|---|---|---|---|
| T0 | 07:11:47 | Project HabitFlow created | — |
| T0b | 07:15:47–51 | Traj validated + framing cycle active + GF HD | — |
| T1 | 07:44→13:33 | ACW Recommendations bounded-direct (no PT POS) | Nora recommends prepare EC |
| T2 | 13:27 / 13:33 | Still 0 HD W2 / 0 EC | Pilot “accepts bornée” / “matérialise EC”; Nora cannot write EC |
| T3 | 19:24:52 | PR #545 merge on main `0a8c808b` | — |
| T4 | 19:36:43 | Delivery cycle draft + Proposal + Proposal POS | Pilot accept CURRENT PT; Nora: CURRENT unavailable; 0 HD / 0 EC |
| T5 | now | Proposal DECISION_REQUIRED still open | UI shows Proposal, not PT |

## 14. Why last turn created a new Proposal
Pilot asked to accept CURRENT PT Recommendation + auto-PREPARE EC.
Durable store had **no sealed PT PresentedOptionSet**.
Chat-first PT path therefore had no CURRENT subject.
Orchestration produced a **new F2 Delivery Proposal** (propose-only) instead of recording a PT HD.
This is consistent with fail-closed currentness after #545 — not a silent PT accept.

## 15. Exit answers
1. Old Recommendation durable as PT decision subject? **NO** (ACW only)
2. Linked to identifiable active cycle? **YES** (framing ACW relatedObjects) — but not as sealed PT POS
3. PT PresentedOptionSet existed? **NO**
4. Still active? **N/A** (never existed)
5. HD PT W2? **NO** (0)
6. EC? **NO** (0)
7. Why TDS/CURRENT unavailable for chat-first PT? **No awaiting PT POS**; subject slot now Proposal
8. Why new Proposal? **Fail-closed absence of CURRENT PT subject → F2 Proposal path**
9. Classification: **A**
10. Next minimal action: **Pilot-facing options for clean replay on current runtime; do not decide/delete current Proposal in this audit**

## 16. Classification
**A — LEGACY PRE-CORRECTION STATE INCOMPLETE**

Proof: never produced Observation `w2_presented_option_set` with `decisionSubjectMode=project_trajectory`; never recorded W2 trajectory HD; never prepared EC. ACW Recommendations are insufficient carriers for post-#545 chat-first PT HD→EC continuity.

#545 is **not** falsified. Secondary fact: T4 created a Proposal subject (current UI) — do not treat as B.

Not B: required durable PT POS artifacts are absent, not merely unread.
Not C as primary: supersession is a *consequence* of incomplete legacy + new Proposal, not that an old sealed PT was overwritten.

## 17. Recommendation
**LEGACY STATE NON-BLOCKING — REPLAY ON CURRENT RUNTIME RECOMMENDED**

Present to Pilot (decision outside this cycle):
- leave current Proposal undecided / isolate;
- run a clean replay under post-#545 runtime that produces a sealed PT POS then accept CURRENT;
- do **not** reset DB / delete Proposal / invent Recommendation / send Nora from this audit.

## 18. Effects
- Product files changed: NO
- DB writes: NO
- project commit/push: NO
- REAL: NO

## 19. UNIQUE VERDICT
**LEGACY STATE NON-BLOCKING — REPLAY ON CURRENT RUNTIME RECOMMENDED**
