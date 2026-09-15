# PRODUCT-PROOF-JOURNEY-INTEGRITY — Review Pack (FULL)

- timestamp: 2026-09-15T15:08:20Z
- Cycle: 8 — Delivery / EVOL / Critical
- Morris GO: full journey audit + bounded non-structural implementation
- origin/main: `6a41ab7e7deda9f7168d12a37b9316413565fa16`
- worktree: `/Users/morris/Projects/sfia-studio-product-proof-journey-integrity`
- branch: `fix/sfia-studio-product-proof-journey-integrity`
- dogfood forensic freeze: `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` @ `6a41ab7e…`
- forensic snapshot: `~/.cache/sfia-dogfood-backups/journey-integrity-forensic-20260915T150249Z`
- Project commit/push/PR/merge: NOT PERFORMED
- Fake/Real: DETERMINISTIC ONLY

## B. Dogfood forensic observations

Observed failed journey (preserved as evidence; ZERO further Product mutation):

1. Project Gestion de tâches reopened (LPS v16 forensic: `prj:ae9bd0de-e24d-474f-880d-ff5ea56dbaf6`).
2. UI: non-recoverable pending → « Reformulez votre demande ».
3. Pilot: Reformuler avec Nora → precise materialization for `projects/sfia-studio/.sandbox/gestion-de-taches.md`.
4. Nora conversational success (« Je prépare la proposition… » / no write).
5. UI still Reformulez; after refresh still Reformulez; generic « Instruire les options » also visible.
6. Durable pending marker still active: `prop:f2:4a90b644-3eb7-43b8-9e83-b140cfeb9a9c`.
7. Durable repository binding (NOT acme/widget): `mcleland147/sfia-workspace` / pathRoot `projects/sfia-studio/.sandbox`.

## C. CANONICAL JOURNEY CONTRACT J00→J17

| State | Intent | Primary action | Subject | SoT | Durability | Forbidden competitor |
|---|---|---|---|---|---|---|
| J00 Open | Open project | load project | Project | LPS/Project | durable | fake binding display |
| J01 Recovery | Resume or new intention | Resume LPS OR focus Nora | Project | LPS | durable | direct proposeOptions |
| J02 Intention | New intent via Nora | send message (+ optional reinstruction) | Conversation | Nora/F2 | session+markers | generic Instruire |
| J03 Binding | Repo effect readiness | load/save durable binding | RepositoryBinding | Project payload | durable | sample as truth |
| J04 Qualify | SFIA qualification | F2 qualify | Cycle/Proposal | Cycle+LPS | durable cycle | silent NEW_CYCLE when active |
| J05 Proposal | Decision Subject mint | DECISION_REQUIRED Proposal | Proposal | Epistemic pending + proposal snapshot | durable marker + reconstructible snapshot | competing pending without gate |
| J06 Continuity | Reload/restart | re-read subject | Proposal | Epistemic + hydrate | reconstructible | obsolete subject pointer |
| J07 Options | Instruct options | Instruire (exact proposalId) | Proposal | PresentedOptionSet | durable epistemic | generic trajectory options |
| J08 Decide | Pilot choice | pursue/amend/refuse | Option | HumanDecision | durable | auto-decide |
| J09 Close | Subject closure | DecisionBasis | Proposal closed | DecisionRef | durable | PREPARE on amend/refuse |
| J10 Prepare eligibility | pursue only | show PREPARE | HD+Proposal | DecisionBasis | durable | PREPARE on amend/refuse |
| J11 PREPARE | Mint EC | prepare contract | ExecutionContract | EC store | durable | wrong Proposal lineage |
| J12 Inspect | Inspect EC | inspect CTA | EC | EC | durable | Execute without inspect |
| J13 Confirm | If required | Confirmation | EC | Confirmation | durable | skip when required |
| J14 Authority | Effective authority | authorize | EC | Authority | durable | fake authority |
| J15 Execute | Attempt | Execute | Attempt | Attempt | durable | auto-execute |
| J16 Evidence | Capture | Evidence/ReviewBundle | Evidence | Evidence | durable | silent skip |
| J17 Replan | LPS/next | replan CTA | LPS/Trajectory | LPS | durable | fake trajectory for Proposal |

Implementation campaign: J00→J12 deterministic. J13→J17 static audit.

## D–F. Routing map + divergences + root causes

See implementation section below (completed after audit).

### Root causes (confirmed)

1. **UI wiring / Decision Subject routing** — Recovery « nouvelle intention » → `proposeOptions()` bypasses Nora (`ProjectWorkspacePage.onRequalify` + `recoveryProposeSignal`).
2. **UI wiring / semantic consumption** — `armedReinstructionOfProposalId` cleared on any `result.ok`, including clarification without DECISION_REQUIRED supersession.
3. **Refresh** — TrajectorySurface does not rehydrate Decision Subject after Nora send success.
4. **Decision Subject routing** — generic `w2-propose-options` shown whenever `activeCycleInstanceId`, even beside lost pending.
5. **Durability** — Proposal body process-local only; marker alone ⇒ lost recoverability across process boundaries (honest Reformulez) — COMPLETE by embedding reconstructible snapshot in existing Epistemic Observation marker (no new table).
6. **Binding truth** — `RepositoryBindingForm` hardcodes acme/widget; durable binding exists but is never loaded.

Prior « button bugs » (Reformuler, Instruire, Recovery) are **symptoms of the same Decision Subject routing + arm-consumption + refresh defects**.

### Structural decision gate

**NO** new DB table / migration / aggregate / persistence engine required.

Disposition: COMPLETE existing Epistemic Observation pending-marker payload with reconstructible Proposal snapshot + ADAPT UI/server contracts.

## G. Asset classification

| Asset | Disposition |
|---|---|
| LPS / Epistemic / Pending markers | KEEP + COMPLETE snapshot |
| PresentedOptionSet / HD / DecisionBasis / EC | KEEP |
| ProposalStore process-local | ADAPT hydrate-from-marker |
| TrajectorySurface CTAs | ADAPT mutual exclusion |
| Recovery requalify | ADAPT → Nora focus |
| RepositoryBindingForm | ADAPT load durable |
| Conversation legacy prepare | FREEZE (already off) |

--- PLACEHOLDER: implementation evidence appended after Phase B ---

────────────────────────────────────────────────────────────
# PHASE B — IMPLEMENTATION EVIDENCE (2026-09-15T15:18:27Z)

## Structural decision gate result

**NO** — COMPLETE existing Epistemic Observation pending-marker payload with
 + ADAPT UI/server contracts. No new table/migration/aggregate.

## Files modified

Product:
- ProjectWorkspacePage.tsx — Recovery nouvelle intention → Nora focus only
- useProductConversation.ts — reinstruction arm clears only on superseded / f2_proposal DECISION_REQUIRED; notifyDurableFactsChanged
- TrajectorySurface.tsx — hide generic Instruire when pendingReinstruction; no recovery auto-propose
- RepositoryBindingForm.tsx — load durable binding; empty when unbound; never acme/widget as truth
- orchestrateF2.ts — reinstructionTransition superseded on DECISION_REQUIRED paths; proposal passed into marker write/replace
- types.ts — reinstructionTransition field
- pendingDecisionSubjectMarker.ts — proposalSnapshot + hydrateProposalsFromPendingMarkers
- activeProposalDecisionSubject.ts — hydrate before recoverability

Tests:
- productProofJourneyIntegrity.d0.test.ts (new)
- repositoryBindingForm.ui.test.tsx (new)
- trajectorySurface.ui.test.tsx
- w1RecoveryFoundation.test.tsx

## Results

| Suite | Result |
|---|---|
| Targeted journey+CORR+W2+UI | 179 PASS |
| Full Vitest | **4063 passed / 137 skipped / 0 failed** |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check | PASS |

Baseline was 4052 / 137 / 0 → +11 tests.

## Implementation outcomes

1. Recovery routing → Nora focus only (no proposeOptions)
2. Reinstruction semantic consumption via reinstructionTransition / f2_proposal
3. Proposal continuity via Epistemic snapshot hydrate across process-local clear
4. Decision Subject precedence: generic CTA hidden when pending owns next action
5. Repository binding loads durable truth (dogfood shape: mcleland147/sfia-workspace / .sandbox)
6. Trajectory refresh via notifyDurableFactsChanged after proposal mint/supersession
7. PREPARE lineage pursue path proven in journey integrity test with gestion-de-taches.md

## J13→J17 downstream static audit

| Stage | Exists? | Canonical? | Gap |
|---|---|---|---|
| J13 Confirmation | Yes (oa_confirmations / Trajectory inspect→confirm) | Product W2/GCEC path | REAL gate; not exercised this lot |
| J14 Authority | Yes | GCEC authority verification | REAL/local authority TEMPORARY WITH EXIT |
| J15 Execute | Yes | Attempt + Cursor ports | REAL forbidden here; next dogfood GO |
| J16 Evidence/ReviewBundle | Yes | Evidence + ReviewBundle tables | Known GCEC proof level varies by capability |
| J17 LPS replan | Yes | Trajectory / LR materialize | Competing lifecycle vs Proposal paths — gated by Decision Subject precedence fix |

Known next blocker for Morris dogfood reproof: re-run Product Proof on forensic state with this candidate after ChatGPT Critical Review — not auto-started.

## Fake/Real

DETERMINISTIC ONLY. ZERO LIVE/REAL. Dogfood not mutated by this cycle.

## Verdict

**PRODUCT-PROOF-JOURNEY-INTEGRITY — CANONICAL USER JOURNEY RECONSTRUCTED — DETERMINISTIC PROJECT→NORA→PROPOSAL→OPTIONS→HUMANDECISION→PREPARE PATH PROVEN — DOWNSTREAM PATH AUDITED — READY FOR CHATGPT CRITICAL REVIEW**

────────────────────────────────────────────────────────────
# COMPLETE USEFUL DIFF
