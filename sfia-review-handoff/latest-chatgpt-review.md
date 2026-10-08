# ChatGPT Review Pack — P6 HUMAN QA CONSOLIDATED ROOT CAUSE DIAGNOSTIC

- timestamp: 2026-10-08T20:20:00Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- typology: QA / AUDIT / PRODUCT EXPERIENCE / ROOT CAUSE ANALYSIS
- profile: CRITICAL
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- previous handoff tip: 3f0171b7d9f02bf8664c989df685757bfae686b6
- project push: NONE
- PR: NONE
- merge: NONE
- Product files modified this pass: NONE
- P6 PASS: NOT CLAIMED
- HQ-01: BLOCKED / awaiting correction GO
- runtime v3: NON ADOPTED
- Morris GO consumed: DIAGNOSTIC ONLY (no Product correction)

## Local Git Truth

```
qa/sfia-studio-p6-global-integrated-product-qa
8a196be1a35ffa2d43e52beddc66b51eab56c99c
aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

Working tree preserves local Human-QA micro-fixes UI-01…UI-04 (uncommitted). Not overwritten. No reset/clean.

## Sources consulted

- Convergence Build Doctrine + Roadmap (paths under `projects/sfia-studio/convergence/`)
- Product Completion C1; Product Simplification P1–P7 (esp. P3 § interaction, P4 cognitive, P6 DOC07)
- v3 framing 30/32/33/37 (authority / LPS / epistemology)
- Cycle routing guide + QA validation CKC pilot (candidate only)
- Code: `f2/orchestrateF2.ts`, `createCycle.ts`, `startPreparedTrajectoryCycle.ts`, `lifecycleProjection.ts`, `workspaceContextPresentation.ts`, `ConversationSurface.tsx`, `presentationLabels.ts`, `TrajectorySurface.tsx`, MW5/cognitive routing
- Tests skimmed: `candidateTrajectoryCycleStart.d0`, `candidateTrajectoryHumanDecision.d0`, `candidateTrajectoryBridge.d0`
- Figma MCP: fileKey `m4g8j0gNbEzfIuH6S9AZJF` nodes `46:2` (DP01 v3 EXPLORATORY), `46:98` (Object / Recommendation 748×82), `46:107` (Object / ExecutionContract — distinct)
- READ-ONLY SQLite: product DB + Nora session for `prj:6b1151f7-7369-434a-a967-bbfe88c76f53`

## Fake / Real

| Claim | Class |
|-------|--------|
| Product object counts / LPS / cycles / HD=0 | REAL (READ-ONLY DB) |
| Transcript acceptance language | REAL (session DB) |
| Code path break points | REAL (source) |
| Figma compact card contract | REAL (MCP metadata + screenshot) |
| Improved Nora wording samples | DESIGN PROPOSAL only |
| Provider raw vs model output | NOT OBSERVED (no new provider calls) |
| Browser screenshot as authority proof | NOT CLAIMED |

---

# A. Confirmed facts (OBSERVED)

### Project

- ID: `prj:6b1151f7-7369-434a-a967-bbfe88c76f53`
- Title: P6-HQ-01 Deliverable Exit Proof 2026-10-08 15:05
- LPS current: version **2**, `status=active`, **`activeCycleInstanceId = null`**
- HumanDecision count: **0**
- Confirmation rows: **0** (table empty for project)
- CycleInstance count: **5**, all `cyc:delivery`, all status **`acknowledged`**, profiles Light/Standard
- Trajectory binding on all 5 cycles: **`trajectoryId` / `trajectoryVersion` / `trajectoryStepId` = null** → unbound / legacy relative to `startPreparedTrajectoryCycle` guards
- ProjectTrajectory current: `trj:prj:…` v1 status `active`, steps Clarify/Decide marked done (generic strip — not five Delivery steps)
- Context LPS text still states campaign prep: “NO HumanDecision invented”

### Transcript (session DB) — acceptance attempts

Morris (user) explicitly:

1. Retained Delivery as next cycle and asked to **start** it; asked which decisions/confirmations are needed.
2. Later: “je décide de retenir… démarrage effectif… présente-moi l'action structurée…”
3. Later: “Je confirme explicitement le démarrage… Je ne souhaite pas créer un nouveau cycle proposé, mais **activer** le cycle Delivery déjà identifié.”

Nora (assistant) after each acceptance:

- Ran **F2 new-cycle formalization** again (`Qualification SFIA et proposition structurée générées… Cycle proposé… L'état vivant du projet est inchangé… F2 s'arrête ici… CONTINUE — cognition propose-only…`).
- Claimed (on last turn) that explicit confirmation **constitutes the launch decision**, while Product still has **no HD** and **no active cycle**.
- Minted **additional** `acknowledged` CycleInstances instead of activating an existing one.

### UI-04 card behaviour (local, uncommitted)

- When F2 cards show: Recommendation/Proposal simplified vs pre-UI-04, but still **permanently expanded** multi-field cards (not Figma 748×82 compact object).
- READY_NO_GATE → “Aucune décision structurée… poursuivre avec Nora” — honest for F2 gate, but **no activation affordance**.

---

# B. F01 — Cycle activation root cause

## Object counts (OBSERVED)

| Object | Count / value |
|--------|----------------|
| CycleInstance | 5 (all `acknowledged`, Delivery) |
| Active Cycle (status=`active`) | **0** |
| LPS.activeCycleInstanceId | **null** |
| HumanDecision | **0** |
| Trajectory-bound prepared cycles | **0** (all unbound) |
| F2 process-local Proposal | NOT OBSERVED after restart (process-local); session shows repeated F2 formalizations |

## Answers A–N (compressed)

| Q | Answer | Class |
|---|--------|--------|
| A. Product received agreement? | Agreement exists as **transcript text only** | OBSERVED |
| B. Only conversation? | Yes — no HD / Confirmation / start mutation | OBSERVED |
| C. Decision candidate? | No durable DecisionRef / HD subject for start | OBSERVED / INFERRED from HD=0 |
| D. Structured HD required? | For Standard F2 `READY_NO_GATE`, F2 path **does not** open Morris gate; separate **pilotLifecycle.start** / trajectory-bound start is the activation mechanism | TARGET + CODE |
| E. Why not presented? | Nominal ConversationSurface: no start CTA; `gateOpen` false; UI-04 conversational next-step | OBSERVED |
| F. Activation mechanism? | `startPreparedTrajectoryCycle` → `pilotLifecycle.start` (+ authority), requires prepared **trajectory-bound** proposed/acknowledged cycle, LPS without active | CODE |
| G. Disconnected from Conversation? | **Yes** — start wired on TrajectorySurface; Conversation acceptance re-enters F2 createCycle | OBSERVED |
| H. Cycle defined not active? | Yes — 5 acknowledged candidates; none active | OBSERVED |
| I. Rec/Proposal recreated? | Yes — each acceptance/requalify mints new CycleInstance via F2 `createCycle` with `linkAsActiveCycle: false` | OBSERVED (`orchestrateF2.ts` ~2063–2079) |
| J. C1…C5? | **Five distinct CycleInstances** projected as candidate strip nodes (“Proposé”), labeled C1… via ordinal window — **not** five ProjectTrajectory steps | OBSERVED (`workspaceContextPresentation.ts` 135–164) |
| K. Staleness rejecting? | Not the primary block; binding + missing start call dominate. Ambiguity (`selectionAmbiguous` with >1 candidate) also forces `canStart=false` | CODE + STATE |
| L. F2 only qualify? | F2 creates candidacy (`acknowledged` for Standard) and stops (`READY_NO_GATE`); does not activate | CODE |
| M. Capability gap vs P2/P4? | Capability to start **exists** in OA + Trajectory UI; **chat-first promotion path incomplete** for Delivery accept | COMBINED |
| N. Verbal promise mismatch? | **Yes** — Nora text claims confirmation = launch while Product unchanged | OBSERVED |

## Root cause

**F01 ROOT CAUSE = COMBINED**  
**Confidence = CONFIRMED**

1. **PRODUCT TRANSITION GAP** — Chat acceptance never invokes `pilotLifecycle.start` / `startPreparedTrajectoryCycle`. F2 invents more unbound `acknowledged` cycles (`linkAsActiveCycle: false`). Those cycles **cannot** pass trajectory-bound start guards (`LEGACY_UNBOUND`).
2. **UI CONNECTION GAP** — Conversation has no structured “Démarrer le cycle” on nominal path after READY_NO_GATE; TrajectorySurface start is out-of-band for chat-first Pilote flow.
3. **AUTHORITY / NARRATIVE GAP** — Verbal confirmation ≠ HumanDecision; Nora over-claims activation while Product remains inert (cognitive honesty failure compounding F01).
4. **STATE/PROJECTION** — Five candidates → rail “Aucun cycle actif” + C1…C5 all “Proposé” is **accurate projection** of broken transition, not a display bug alone.

Severity: **CRITICAL** (HQ-01 functionally blocked).

---

# C. C1…C5 classification

**OBSERVED:** Five `oa_cycle_instances` rows → lifecycle `candidateCycles` → context strip nodes with ordinals → labels C1…C5 / “Proposé”.

**NOT** five ProjectTrajectory Delivery steps (trajectory payload only has Clarify/Decide steps).

---

# D. Recommendation / HD / Confirmation path

| Stage | HQ-01 reality |
|-------|----------------|
| Recommendation | Produced repeatedly (F2 + narrative) |
| Proposal | Process-local F2; READY_NO_GATE / morrisGateRequired=false for Standard |
| HumanDecision | **Never written** |
| Confirmation (execution) | N/A — no ExecutionContract start path engaged |
| Cycle start | **Never called**; LPS active null |

TARGET: Recommendation ≠ HD ≠ Confirmation ≠ start. Chat-first must still offer an **honest governed next action** that maps to an existing start/prepare capability without inventing HD when READY_NO_GATE, **or** escalate to a real DecisionRef when the contract requires it.

---

# E. UI05 — Figma / runtime delta

### Figma (EXPLORATORY DP01 v3)

- `46:98` Object / Recommendation: **748×82**, type label, title, one meta line, status right, **“Ouvrir →”**, details **not** expanded.
- `46:107` Object / ExecutionContract: **sibling compact object** — must not be merged with Proposal domain-wise.

### Runtime

- Cards are full-width expanded `dl` stacks (even after UI-04 simplification).
- Duplicate “Pourquoi” across Recommendation + Proposal.
- No compact collapsed default + details-on-demand matching 46:98.
- Proposal ≠ ExecutionContract — keep distinct if both shown.

### Reuse

KEEP: Geist tokens, card chrome, `details` disclosure primitive, UI-04 projections.  
ADAPT: ConversationSurface card layout → compact summary + open details.  
HARVEST: Figma 46:98 hierarchy as visual direction (not pixel canon).  
NOT APPLICABLE: Merging Proposal into ExecutionContract object.

### Minimum correction (no implement)

Collapsed nominal: type · title · one meta · status · Ouvrir.  
Expanded: why / out-of-scope / next action.  
Status mapping: “En attente de décision” only when DECISION_REQUIRED; READY_NO_GATE → “À démarrer” / “Candidat” + honest action.

---

# F. COG01 — Nora naturalness

### Raw provider output

**NOT OBSERVED** this pass (no new provider calls).

### Display vs persisted

- Persisted transcript retains raw F2 templates (`[Mode réel] Qualification SFIA…`, footers).
- UI-04 `formatNoraAssistantDisplayText` scrub is **presentation-only**; history/context still contaminated.

### Main root cause (CONFIRMED for F2 turns)

**Deterministic F2 `textParts` composition + MW5 `surface.disclosure` injection**, not model prose.

Primary evidence: `orchestrateF2.ts` new-cycle `textParts` (~2223–2247), `createCycle` with no activation, MW5 CONTINUE disclosure.

Model/effort (Luna/Sol/Astra) is secondary for these turns.

### Evaluation gap

P6 Layer-2 cognitive rubrics: clarity/governance **SUFFICIENT**; naturalness / brevity / non-repetition / voice continuity = **GAP** (PARTIAL for burden via Human QA only).

### Sample design proposals (not production changes)

See COG01 table in diagnostic body: short Delivery propose; omit engine CONTINUE from narrative; one governance clause not three; never claim activation without Product mutation.

---

# G. Shared dependencies / coherent map

```
Pilot intention (start Delivery)
  → Nora/F2 interprets as NEW_CYCLE_FORMALIZATION
  → createCycle (acknowledged, unbound, linkAsActive=false)
  → READY_NO_GATE Proposal + verbose textParts
  → Conversation cards (expanded) say “no structured decision”
  → Pilot re-confirms in chat
  → loop (more candidates; C1…Cn Proposé; LPS active null)
  → startPreparedTrajectoryCycle never called / would fail unbound
```

One underlying failure: **missing chat-first transition from accepted Recommendation to Cycle start**, amplified by template verbosity (COG01) and expanded cards (UI05).

---

# H. Option A — Minimum viable correction (recommended)

**Single coherent lot** after Morris GO:

1. **F01 (unblock HQ-01)**  
   - Stop treating Pilot “start/confirm Delivery” as another unbound F2 create when a Delivery candidate already exists.  
   - Surface an honest Conversation next action that invokes existing **start** (or prepare→start) capability, **or** fail closed with explicit blocker (binding/ambiguity) instead of claiming success.  
   - Prefer activating/selecting **one** existing candidate; supersede or ignore duplicate F2 mints.  
   - If trajectory binding is mandatory for start: create/bind once correctly — do not leave LEGACY_UNBOUND pile.  
   - Never claim “confirmation = activated” without LPS.activeCycleInstanceId set.

2. **UI05**  
   - Compact Recommendation (and Proposal) presentation aligned to 46:98 direction: collapsed default + Ouvrir/details.  
   - Keep Recommendation ≠ Proposal ≠ ExecutionContract.

3. **COG01**  
   - Compose one pilot-facing narrative at F2 source; move engine footers off the chat body (keep on DTO/audit/cards).  
   - Persist the same text Pilotes see.

Scope sketch (after GO): ConversationSurface + presentationLabels (UI), orchestrateF2 narrative + accept/start wiring (assistant), thin OA start action already exists, tests candidateTrajectoryCycleStart + new conversation start continuity D0.

---

# I. Option B — More complete (only if A insufficient)

Full candidate-trajectory HD → prepare → start as in `candidateTrajectory*` tests: DecisionRef materialization, trajectory-bound prepare, then start. Heavier semantics; use if Product contract requires HD for Delivery start even when F2 READY_NO_GATE.

---

# J–Q. Decision pack remainder

### Recommended lot

**Option A** as one implementation lot after Morris correction GO. Priority order: F01 unblock → conversation-to-action honesty → compact cards → narrative naturalness.

### Morris structural decisions required

1. For Standard Delivery candidacy: is **chat-confirmed start** allowed without HumanDecision row, provided `pilotLifecycle.start` + authority evidence run? Or must HD always be minted?  
2. How to dispose **duplicate** acknowledged Delivery instances (keep latest / supersede / manual select)?  
3. Confirm Figma 46:98 as **directional** compact UX (not pixel canon).

### Tests / proof strategy

- D0: accept/start message does not mint N+1 unbound cycles; either starts or surfaces honest blocker.  
- D0: LPS.activeCycleInstanceId set after successful start path.  
- UI: compact card collapsed/expanded; no READY_NO_GATE leak.  
- Narrative: no CONTINUE propose-only / stacked AUCUNE EXÉCUTION in persisted text.  
- Regression: UI-01…04; STOP; no invented HD when contract forbids.  
- HQ-01 resume Human QA on preserved project after GO.

### Risks / carries

- Ambiguous candidates may require supersede policy.  
- Trajectory binding retrofit for existing unbound cycles.  
- Do not “SQL activate”.  
- Cognitive eval rubric extension = recommendation only (P8 out of scope).

### HQ-01 continuity

- Data preserved; no mutation this pass.  
- Resume after correction GO with same project; expect active Delivery or explicit structured gate — not another F2 create loop.

### Assets classification

| Asset | Class |
|-------|--------|
| Cycle / LPS / pilotLifecycle.start | KEEP |
| startPreparedTrajectoryCycle | KEEP (needs binding) |
| TrajectorySurface start CTA | KEEP / ADAPT into Conversation |
| F2 qualify/createCycle | ADAPT (stop unbound spam; narrative) |
| ConversationSurface / UI-04 projections | ADAPT (compact + start next-action) |
| presentationLabels scrub | KEEP as secondary; not sole COG fix |
| candidateTrajectory* tests | KEEP / HARVEST as proof seams |
| Figma 46:98 | HARVEST visual direction |
| New engine / harness | NOT APPLICABLE |

### Architecture parallelism

**None recommended.**

---

## Explicit non-claims

- No Product code/data/prompt/routing changes in this pass  
- No Cycle activation / HumanDecision synthesis  
- No project commit/push/PR  
- P6 PASS NOT CLAIMED  
- runtime v3 NON ADOPTED  

## Ask for ChatGPT

Validate F01 COMBINED root cause (CONFIRMED), UI05 compact-card delta, COG01 template-primary cause, Option A as single lot, and Morris gates before any implementation.

---

## Verdict

**DIAGNOSTIC COMPLETE — READY FOR CHATGPT REVIEW**

NEXT: ChatGPT consolidated review → Morris correction GO if required → one coherent implementation lot → HQ-01 resume.
