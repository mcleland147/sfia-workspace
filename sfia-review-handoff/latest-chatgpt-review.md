# ChatGPT Architecture Review Pack — FULL
## HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-EC-CONTINUITY-ARCH-01

## 1. Timestamp

2026-10-02T14:01:38Z (UTC)

## 2. Cycle / profile / typology

- **Cycle:** 6 — Architecture technique
- **Cycle id:** HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-EC-CONTINUITY-ARCH-01
- **Profil:** Critical
- **Typology v2.4:** EVOL
- **CKC:** `projects/sfia-studio/sfia-v3-framing/ckc/06-architecture-technique.md` (guidance only)
- **Nature:** READ-ONLY Architecture / Impact audit — **ZERO Product modification**

## 3. Local Git Truth

- Workspace: `/Users/morris/Projects/sfia-workspace-post-execution-handoff-01`
- Branch: `architecture/sfia-studio-habitflow-chat-first-projecttrajectory-ec-continuity-arch-01`
- HEAD = origin/main = `2087066a2760befabce3d7fc39a976dd0f1b2ebd`
- Message: Merge pull request #544 … semantic presentation continuity
- ahead/behind: **0/0**
- Product dirty: **ZERO** (only `.tmp-sfia-review/**` local)
- Project commit/push/PR: **NO**

## 4. Main / base

`2087066a2760befabce3d7fc39a976dd0f1b2ebd` (PR #544 MERGED · CI #655 SUCCESS)

## 5. Convergence qualification

| Field | Qualification |
|-------|----------------|
| Capacité v3 | ProjectTrajectory / Options / Recommendation → HumanDecision → DecisionBasis → ExecutionContract |
| Milestone | HabitFlow post generic ER convergence + post semantic presentation continuity (#544) |
| État | Présentation sémantique **INTEGRATED**; continuité chat-first ProjectTrajectory→HD→EC **NON ABOUTIE** (prouvé durablement) |
| KEEP | `decideTrajectory`, `recordHumanDecision`, PresentedOptionSet binding, TDS projection, `prepareExecutionContractFromW2Decision`, TrajectorySurface inspection rails, proposal chat-first path |
| ADAPT (future) | `resolveChatFirstPilotDecision` / `assessChatFirstWorkEligibility` subject binding; possibly PREPARE auto policy for BOUNDED |
| RETIRE | none proposed this audit |
| HARVEST | CHAT-FIRST-GOVERNED-DECISION-LOOP-01 Proposal pattern; `legacy_cta` as harvest-only |
| Gaps | Chat-first Proposal-only boundary vs UX `chat_first` default for ProjectTrajectory; BOUNDED not in auto-PREPARE |
| Dépendances | F2 disposition candidate → chat-first resolver → decideTrajectory → (UI) PREPARE |
| Trajectoire | Architecture Option pack → Morris D1/D2 → Delivery bounded → proof matrix |
| Exit proof | See §31 / HabitFlow exit |
| Gates Morris | D1 HD chat-first ProjectTrajectory; D2 PREPARE BOUNDED policy; separate REAL gate later |
| Capacité suivante | Delivery chat-first ProjectTrajectory HD (+ optional PREPARE policy) |
| Parallel architecture | **Avoid** new writer/resolver/store/UI state machine |

**Trajectory link:** DEMONSTRABLE — HabitFlow campaign blocked exactly on this capacity path.

## 6. Sources Product (read)

`resolveChatFirstPilotDecision.ts`, `assessChatFirstWorkEligibility.ts`, `decideTrajectory.ts`, `presentedOptionSet.ts`, `proposeTrajectoryOptions.ts`, `prepareExecutionContractFromW2Decision.ts`, `w2/actions.ts` (`w2DecideTrajectoryAction`), `f2/orchestrateF2.ts` (front-door call), `TrajectorySurface.tsx`, `activeProposalDecisionSubject.ts`, DecisionBasis construction in `decideTrajectory`, tests listed in §29.

## 7–8. HabitFlow observation + limits

### RUNTIME OBSERVATION (campaign)

After #544 semantic fix, Nora presents structured Recommendation « Trajectoire bornée directe ».
Pilot explicitly requested: select that trajectory; materialize ExecutionContract only; no execute; no Cursor; no workspace effect.
Nora conversationally acknowledged but stated she cannot perform Product write from read-only scope.

### LIMITS

- Nora prose ≠ Product Truth.
- Observation alone does not prove absence of HD/EC without store inspection.

## 9. Durable facts inspected (READ-ONLY)

Product DB (path from Studio `.env.local` on sibling checkout, same campaign workspace):

`…/new-project-campaign-01/product/oa-product.sqlite`

| Fact | Value |
|------|--------|
| HabitFlow `project_id` | `prj:4047b5eb-5abd-402b-9712-45c1b3634b50` |
| HumanDecisions | 2 — **neither** is W2 trajectory/proposal arbitration |
| | `dec:gf-trj:…` → `opt:approve-candidate-trajectory-as-is` |
| | `dec:pilot-life:…` → `opt:require-artifact` |
| `dec:w2-trj:*` count | **0** |
| `dec:w2-prop:*` count | **0** |
| payload mentions `bounded-direct` in HD | **0** |
| ExecutionContracts for HabitFlow | **0** |
| Attempts for HabitFlow contracts | **0** (no EC to bind) |
| Epistemic ACW | Multiple Recommendations/Observations urging EC materialization for bounded trajectory — **not** HumanDecision / DecisionBasis / EC |

Session transcript (`nora-session.sqlite`) contains explicit Pilot accept + EC materialization requests — conversational only.

**CAUSE CODE-LEVEL QUALIFIED (below) is independent of this DB** but **consistent** with it.

## 10. Symptom

Pilote chat-first acceptance of a **ProjectTrajectory** bounded recommendation does **not** invoke a durable HumanDecision writer for that option, therefore no DecisionBasis for that selection, therefore no ExecutionContract PREPARE path can fire.

## 11–12. Source of truth / ownership matrix

| Responsibility | Owner (path / function) |
|----------------|-------------------------|
| Recommendation (structured ACW / TDS current) | TDS + ACW materialization; cognitive prompt; Nora structured item |
| PresentedOptionSet seal | `proposeTrajectoryOptions` → Observation binding (`presentedOptionSet.ts`) |
| Selected option binding (chat-first Proposal) | `resolveChatFirstPilotDecision` maps disposition→`PROPOSAL_SUBJECT_*` refs from sealed set |
| Pilot disposition candidate | F2 `pilotDecisionCandidate` (non-authoritative) |
| HumanDecision writer | **Only** `decideTrajectory` → `recordHumanDecision` (single outer UoW) |
| DecisionBasis | Built inside `decideTrajectory` (`proposal` vs `trajectory_option`) |
| ProjectTrajectory promotion | `decideTrajectory` atomic path when non-proposal + promotes |
| EC PREPARE | `prepareExecutionContractFromW2Decision` / `projectAssistantPrepareResolvedM3Action` (proposal) via W2 actions |
| Contract validation | `validateExecutionContract` / inspect path |
| Confirmation | Separate confirm action — not authority expansion |
| Execution authority | Authorize / execute gates after PREPARE |
| Product UI presentation | `TrajectorySurface` (default `chat_first` = inspection/audit); conversation = disposition |
| Recovery/restart continuity | Continuity readers on TrajectorySurface + recovery binding actions |

## 13. Call graph — Proposal (chat-first nominal)

```
Pilot message
→ F2 intentAnalysis.pilotDecisionCandidate.disposition
→ orchestrateF2
→ assessChatFirstWorkEligibility (Proposal subject only)
→ resolveChatFirstPilotDecision
→ readActiveProposalDecisionSubject / seal OptionSet
→ isProposalSubjectPresentedSet? YES
→ decideTrajectory(proposal mode, selected PROPOSAL_SUBJECT_*)
→ recordHumanDecision (+ DecisionBasis sourceType=proposal)
→ return decision_recorded to conversation
→ UI: shouldAutoPrepareProposal (pursue) → projectAssistantPrepareResolvedM3Action → inspect
```

## 14–16. Call graph — ProjectTrajectory / GOVERNED / BOUNDED

### Intended explicit (legacy_cta) path

```
TrajectorySurface (decisionWorkflowMode=legacy_cta)
→ w2DecideTrajectoryAction
→ loadPresentedOptionSet
→ decideTrajectory(non-proposal: requires matching trajectoryId+candidateVersion)
→ recordHumanDecision (dec:w2-trj:*) + DecisionBasis sourceType=trajectory_option
→ if GOVERNED_OPTION_REF: shouldAutoPrepareGoverned → w2PrepareExecutionContractAction
→ if BOUNDED: NO auto-PREPARE → secondary CTA `w3a-prepare-execution-from-decision`
```

### Chat-first path today (HabitFlow relevant)

```
Pilot disposition in conversation
→ assessChatFirstWorkEligibility / resolveChatFirstPilotDecision
→ if presented is ProjectTrajectory (not proposal):
     SUBJECT_NOT_PROPOSAL_MODE / no_eligible_subject
→ ZERO decideTrajectory call
→ ZERO HD / DecisionBasis / EC
→ conversation continues; Nora may narrate inability to write
```

**Fact:** With default `chat_first`, legacy per-option Décider CTAs are **hidden** (`legacyDecisionCtaVisible = decisionWorkflowMode === "legacy_cta"`). Therefore ProjectTrajectory has **no** chat-first writer **and** no visible CTA writer in the nominal UX mode.

## 17–18. Proposal-only boundary + Git history

Code (`resolveChatFirstPilotDecision.ts` ~267–273):

```ts
if (!isProposalSubjectPresentedSet(presented)) {
  // Project trajectory promotion stays on its own explicit path.
  return { kind: "no_eligible_subject", code: "SUBJECT_NOT_PROPOSAL_MODE", ... };
}
```

`isProposalSubjectPresentedSet` requires `decisionSubjectMode==="proposal"`, non-empty `proposalId`, `promotesProjectTrajectory===false`.

Mirrored in `assessChatFirstWorkEligibility.ts` (eligibility false for non-proposal).

**Introduced by** commit `d12272e822a481b868722dfd73a73825f63eff41` — `feat(studio): enable chat-first governed work decisions` (CHAT-FIRST-GOVERNED-DECISION-LOOP-01).

TrajectorySurface default `chat_first` comment (same commit): nominal governed disposition is in conversation; surface stays state/inspection/audit; `legacy_cta` for harvest / RETIRE LATER proofs.

### Boundary classification (Q4)

**B — restriction transitoire / campagne-bornée**, with explicit code comment that ProjectTrajectory stays on its **own explicit path**, plus UX comment marking `legacy_cta` as harvest/RETIRE LATER.

Not proven as permanent doctrine forever; not accidental silent bug — **intentional bounded scope** of chat-first v1 that now **collides** with HabitFlow needing ProjectTrajectory chat acceptance under `chat_first` default.

## 19. TrajectorySurface UX contract

**Fact (not mere claim):** Product defaults to `chat_first`, promising conversational governed disposition while chat-first **cannot** record ProjectTrajectory HD, and CTAs that *can* are hidden. This is a **continuity / UX-authority mismatch** for ProjectTrajectory campaigns like HabitFlow.

UI test oracle (`chatFirstGovernedDecisionLoop.ui.test.tsx`) documents: chat_first = state/inspection/audit only.

## 20. `decideTrajectory` reuse analysis

Already supports both modes:

- Proposal: ignores client trajectory fields; DecisionBasis `sourceType: "proposal"`; optional seal.
- ProjectTrajectory: requires `trajectoryId` + `candidateVersion` match presented binding; DecisionBasis `sourceType: "trajectory_option"`; may promote; stamps local-write seal for GOVERNED/BOUNDED when appropriate.

**Architecturally reusable** from an extended chat-first resolver if the resolver supplies **server-sealed** PresentedOptionSet fields (never model-supplied refs) and maps Pilot disposition to a **member** optionRef of that set (e.g. CURRENT recommended / explicitly selected bounded/governed/clarify — design choice for Morris).

No second writer needed.

## 21. PREPARE ownership

| Path | Primitive | Trigger |
|------|-----------|---------|
| Proposal pursue | `projectAssistantPrepareResolvedM3Action` | Auto after HD if pursue + decisionBasisLinked |
| ProjectTrajectory GOVERNED | `w2PrepareExecutionContractAction` → `prepareExecutionContractFromW2Decision` | Auto after HD if `selectedOptionRef===GOVERNED_OPTION_REF` (recovery binding gate) |
| ProjectTrajectory BOUNDED | Same prepare primitive | **Not auto**; secondary CTA « Reprendre la préparation » (`w3a-prepare-execution-from-decision`) |
| Recovery docs_write | Separate recovery prepare CTA | Explicit |

PREPARE ≠ Execute; Attempt not created by PREPARE (existing W3-A contract).

## 22. GOVERNED vs BOUNDED auto-PREPARE

Code asymmetry is **explicit** in TrajectorySurface (`shouldAutoPrepareGoverned` only when `GOVERNED_OPTION_REF`).

Introduced/shaped in `8416968532b757f52972a7dcbc347424182402ab` (`feat(studio): simplify pilot execution and recovery flow`) with comments tying GOVERNED to RC-06 auto-PREPARE.

**Doctrine necessity:** NOT PROVEN from naming alone. Could be intentional recovery/gated semantics, historical UX, or incomplete BOUNDED continuity. Treat as **separate Morris decision D2**.

## 23. Confirmation / authority

Existing PREPARE paths document: never auto-Execute; Confirmation separate; local authority registration inside prepare/decide gates. Extending chat-first to ProjectTrajectory must **not** grant ExecutionAuthority or launch Cursor. HabitFlow exit requires Attempt=0 / Cursor=0 / workspace=0 after PREPARE.

## 24. Consumers (exhaustive, classification)

| Consumer | Class |
|----------|-------|
| `orchestrateF2` chat-first call | ADAPT POTENTIAL |
| `resolveChatFirstPilotDecision` | ADAPT POTENTIAL |
| `assessChatFirstWorkEligibility` | ADAPT POTENTIAL |
| `decideTrajectory` / `recordHumanDecision` | KEEP |
| `w2DecideTrajectoryAction` | KEEP (legacy_cta / explicit) |
| `TrajectorySurface` chat_first default / CTA visibility | ADAPT POTENTIAL (UX honesty) or KEEP if chat-first gains PT |
| Auto-PREPARE GOVERNED / BOUNDED CTA | ADAPT POTENTIAL (D2) |
| Proposal front-door tests | KEEP / regression lock |
| `candidateTrajectoryHumanDecision` tests | KEEP |
| ConversationSurface / Journal read rails | KEEP |
| Persistence schemas | OUT OF SCOPE |
| Nora schema/prompts | OUT OF SCOPE unless disposition mapping needs clarity (prefer server mapping) |
| PRR tracked files | RISK if Delivery touches tracked sources (digest sync later) |

## 25–26. Reusable primitives / parallelism

Reuse: `decideTrajectory`, PresentedOptionSet load/seal, existing PREPARE engines, disposition→option mapping pattern (extend beyond Proposal refs).

**Do NOT create:** new HD writer, new EC engine, new store, new DTO taxonomy, second UI state machine.

New resolver (Option B) = parallel seam risk vs extending existing chat-first resolver (Option A).

## 27. Dependency map

Recommendation/TDS → (missing chat-first PT binding) → HD → DecisionBasis → PREPARE → inspectable EC → (later) Confirm/Authorize/Execute.

Semantic presentation continuity (#544) sits upstream and must remain unchanged.

## 28. Regression risks

Double HD; subject ambiguity; Proposal regression; stale OptionSet; recommendation basis change; optionRef mismatch; trajectory version mismatch; accidental promotion; duplicate PREPARE/EC; idempotency; restart; stale client decision; recovery continuity; Confirmation bypass; authority escalation; Attempt/Cursor before gate; UI dual machine; transcript≠truth; BOUNDED/GOVERNED drift.

## 29. Existing tests executed

| Suite | Result |
|-------|--------|
| `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` | **11 PASS** |
| `chatFirstPilotDecisionCandidate.d0.test.ts` | **11 PASS** |
| `candidateTrajectoryHumanDecision.d0.test.ts` | **24 PASS** |
| `chatFirstGovernedDecisionLoop.ui.test.tsx` | **10 PASS** |
| `m3ExecutionContractPrepare.test.ts` | **18 PASS** |
| **Total** | **74 PASS** |

These qualify **current** Proposal chat-first + trajectory HD via explicit decide + prepare — they do **not** prove ProjectTrajectory chat-first HD (boundary prevents it).

## 30. Future proof matrix (before Delivery)

| ID | Scenario | Existing/strengthen/new | Claim |
|----|----------|-------------------------|-------|
| A | Proposal accept → 1 HD | existing front-door | KEEP |
| B | PT GOVERNED chat-first accept → 1 HD + basis | **new** | required if D1=A |
| C | PT BOUNDED chat-first accept → 1 HD `opt:trajectory:bounded-direct` | **new** | HabitFlow core |
| D | Ambiguous disposition → 0 HD | existing + strengthen | |
| E | Unrelated « oui » → 0 HD | existing candidate tests | |
| F | Stale OptionSet → fail-closed | existing decideTrajectory | |
| G | Recommendation basis changed → fail-closed | strengthen | |
| H | Wrong trajectory version → fail-closed | existing TRAJECTORY_MISMATCH | |
| I | Competing Proposal vs PT subjects → no silent pick | new | |
| J | BOUNDED HD → EC path defined (auto or CTA) | new (depends D2) | |
| K | GOVERNED HD → EC auto path | strengthen existing UI | |
| L | PREPARE → 0 Attempt / 0 Cursor / 0 workspace | existing W3-A + new | |
| M | Restart after HD before EC | strengthen continuity | |
| N | Restart after EC | existing rehydrate | |
| O | Idempotent retry | strengthen | |
| P–Q | Authority / Confirmation / HD≠Execute | existing | |
| R | Contextual label continuity preserved | existing SPC suites | |
| S | Proposal front-door green | existing | |
| T | Recovery green | existing | |

## 31. HabitFlow exit proof (future Delivery — NOT executed here)

Pilot explicitly chooses BOUNDED in conversation → exactly one durable HD (`dec:w2-trj:*`, selected `opt:trajectory:bounded-direct`) → DecisionBasis links PresentedOptionSet → EC materialized by canonical prepare → contract inspectable → no execute / Attempt / Cursor / workspace effect.

## 32. Architecture options (D1 — HumanDecision chat-first PT)

### Option A — Extend existing chat-first resolver to ProjectTrajectory; reuse `decideTrajectory`

- Reuse writer + binding + authority model
- Map disposition to sealed PT optionRefs (design: CURRENT recommendation vs explicit ref)
- Load PT PresentedOptionSet from durable binding (analogous to proposal subject reader / propose path)
- **No** parallel writer
- UX: keeps `chat_first` promise honest for PT
- Risks: subject competition, wrong option mapping, accidental promotion, Proposal regression
- Compatibility: Build Doctrine REUSE > parallel
- **Recommended for D1** subject to Morris GO

### Option B — New PT-specific chat-first resolver

- Parallel seam vs `resolveChatFirstPilotDecision`
- Higher duplication / dual eligibility risk
- **Not recommended** unless Option A structurally blocked (not evidenced)

### Option C — Keep Proposal-only chat-first; re-expose ProjectTrajectory CTAs (`legacy_cta` or selective CTA)

- Minimal resolver change
- Breaks / weakens “nominal = conversation” contract already shipped as default
- HabitFlow would require UI click after Nora — workable but product-direction regression risk
- Acceptable fallback if Morris rejects conversational PT authority binding

### Option D — Hybrid: chat-first records HD for PT; PREPARE remains surface-driven

- Separates D1 from D2 cleanly
- Compatible with Option A + current BOUNDED CTA semantics

## 33. PREPARE policy options (D2 — separate)

| Option | Description |
|--------|-------------|
| D2-A | Auto-PREPARE BOUNDED like GOVERNED after HD |
| D2-B | Keep BOUNDED explicit/secondary CTA (current) |
| D2-C | Auto-PREPARE only when HabitFlow-like bounded-direct + readiness predicates |

Needs Morris choice; do **not** silently fold into D1.

## 34. Recommendation — NOT A DECISION

**Recommend Option A for D1** (extend `resolveChatFirstPilotDecision` / eligibility to ProjectTrajectory PresentedOptionSets; reuse `decideTrajectory`; no new writer/store).

**Recommend Option D / D2 deferred:** keep PREPARE policy as **separate** Morris decision; default interim = preserve current BOUNDED secondary CTA until D2 chosen (HabitFlow can still reach EC via CTA after HD exists).

**Why:** Matches declared `chat_first` UX; closes HabitFlow durable gap; maximizes reuse; avoids parallel architecture.

**Minimal future Delivery (if A approved):**
Likely: `resolveChatFirstPilotDecision.ts`, `assessChatFirstWorkEligibility.ts`, possibly a PT subject binder reader, tests for B/C/I/L; carefully **not** DecisionBasis schema change; **not** EC engine rewrite; **not** TrajectorySurface dual machine unless UX honesty requires copy tweaks.

## 35. Morris decisions required

1. **D1** — Approve Option A / B / C for ProjectTrajectory chat-first HumanDecision.
2. **D2** — PREPARE policy for BOUNDED after HD (auto vs CTA vs hybrid).
3. Disposition→optionRef mapping rule for PT (accept → CURRENT recommended vs named ref only).
4. Competing Proposal+PT subjects policy (already fail-closed for multi-proposal — extend).
5. Later: REAL / READY FOR REAL gates — **not** this cycle.

## 36–37. Future Delivery scope / out

**In (if A):** chat-first eligibility+resolver PT support; sealed set binding; tests B/C/…
**Out:** new persistence; Confirmation change; Execute path; Cursor REAL; runtime v3; semantic label resolver; proposal path rewrite; doctrine docs unless truth-sync after merge.

## 38. Fake / Real qualification

- Deterministic suites: FakeConversationProvider / harness — **74 PASS**
- HabitFlow: real Product conversation observation + durable SQLite inspection
- Cursor REAL HabitFlow: **ZERO**
- Entry proof: semantic continuity DETERMINISTIC; this audit **ARCHITECTURE / IMPACT QUALIFIED**
- Not claimed: REAL BOUNDARY / E2E REAL / READY FOR REAL / v3 ADOPTED
- Morris REAL gate: future, separate

## 39–40. Claims / anti-claims

**Claims:** Proposal-only chat-first boundary is code-documented intentional scope; HabitFlow has no W2 trajectory HD and no EC; decideTrajectory already reusable for PT; UX default chat_first hides PT CTA path; GOVERNED auto-PREPARE vs BOUNDED CTA is explicit code asymmetry; Option A recommended ≠ decided.

**Anti-claims:** Not a Nora bug alone; not proven that BOUNDED must auto-PREPARE by doctrine; not Delivery authorized; not REAL proven; not runtime v3.

## 41–42. Reservations / debt / exit

- Disposition mapping for multi-option PT still needs Morris rule.
- HabitFlow ACW recommendations may continue to urge EC without HD until Delivery.
- `.env.local` Product DB path lives on sibling tree path — facts verified there; architecture branch has PRODUCT_DIFF ZERO.
- Debt exit: after D1 Delivery + proofs, either retire `legacy_cta` harvest or keep explicit for recovery tooling.

## 43. Next capability

Morris D1/D2 → Delivery HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-HD(-PREPARE) → deterministic proof → Critical Review → integrate → resume HabitFlow to EC inspectable (still ZERO Execute unless separate GO).

## 44. Project Git effects

| Effect | Value |
|--------|-------|
| Product code/doc change | **NO** |
| project commit/push/PR/merge | **NO** |
| branch delete / force | **NO** |
| handoff L3 | **YES** |

## 45. Review Handoff

`docs(review-handoff): publish habitflow chat-first projecttrajectory ec architecture audit`

## 46. Unique verdict

**READY FOR CHATGPT ARCHITECTURE REVIEW — HABITFLOW-CHAT-FIRST-PROJECTTRAJECTORY-EC-CONTINUITY-ARCH-01**

**Proof ceiling:** ARCHITECTURE / IMPACT QUALIFIED

ZERO REAL · READY FOR REAL NO · runtime v3 NON ADOPTED

**Also surfaces:** MORRIS DECISION REQUIRED (D1 + D2) before any Delivery.
