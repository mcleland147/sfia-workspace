# CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — FULL Review Pack

**Timestamp:** 2026-09-27T19:54+02:00  
**Verdict:** `READY FOR CHATGPT CRITICAL REVIEW`

**Repo:** `mcleland147/sfia-workspace`  
**Worktree:** `/Users/morris/Projects/sfia-workspace-chat-first-governed-decision-loop-01`  
**Branch:** `feat/sfia-studio-chat-first-governed-decision-loop-01`  
**HEAD (uncommitted local candidate):** base `955e86d2ea6eb0ed19dff1e66f578d61edeb3522`  
**Tree base:** `35de7d8582a873c59305a16eed807dff87e71cb7`  
**origin/main:** `955e86d2ea6eb0ed19dff1e66f578d61edeb3522` / tree `35de7d8582a873c59305a16eed807dff87e71cb7`

**Anti-claims (mandatory):**
- NOT REAL PROVEN
- NOT READY FOR REAL
- NOT PROJECT GIT INTEGRATED (no project commit/push/PR)
- NOT PRODUCT GLOBAL READY
- RUNTIME V3 NON ADOPTED

---

## Décision Morris consommée

1. **GO construction** CHAT-FIRST-GOVERNED-DECISION-LOOP-01 (2026-09-27) — Critical EVOL Delivery.
2. **GO Git worktree regularization only** (2026-09-27) — PASS; chat-first WT on feat @ main; e2e WT restored to fix @ `82148c0b`.

Included GO decisions:
- Chat-first = chemin nominal
- Recommendations non-bloquantes pendant le travail
- Disposition required before finalization when applicable
- HumanDecision exprimée dans le chat, matérialisée serveur
- Journal: Sujets | Réserves | Recommandations | Décisions
- Panneau droit: état / audit / inspection
- Pas de cycle UX/UI, Figma, Penpot
- Pas de nouveau moteur / store
- CTAs Proposal/OptionSet **sortent** du chemin nominal (pas un mirror)

---

## Git Truth (post-regularization)

| Item | Value |
|---|---|
| chat-first branch | `feat/sfia-studio-chat-first-governed-decision-loop-01` @ `955e86d2` |
| e2e/PocketTasks | `fix/sfia-studio-product-cycle-e2e-stabilization-01` @ `82148c0b` (unchanged product tree) |
| Project commits this macro | **ZERO** (local uncommitted candidate only) |
| Dirty | product + Living Ref + `.tmp` as listed below |

---

## Sources lues (READ ONLY doctrine / framing)

- `convergence/sfia-studio-convergence-build-doctrine.md`
- `convergence/sfia-studio-convergence-roadmap.md`
- `product-completion/01-product-completion-cadrage.md`
- `sfia-v3-framing/30,32,33,34,35,37`
- `nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md`
- CKC `08-delivery-implementation.md`
- Living Production Runtime Reference README / 03 / 09
- Process templates (external only)
- Code list from macro prompt (project-assistant F2/W2, Journal, assessFinalization, decision OA)

---

## Convergence / CKC / OpenAI capability fit

| Item | Disposition |
|---|---|
| Cycle | `cyc:delivery` / `ckc:studio:delivery` — VALIDATED content; guidance only |
| Profile | Critical (authority semantics) |
| Typology | EVOL |
| OpenAI R22 | **ADAPT / COMBINE** existing `IntentAnalysisDto` structured-output seam — `pilotDecisionCandidate` NON-AUTHORITATIVE; server resolves + `decideTrajectory`. No parallel NLP parser. No API migration. Model never creates HumanDecision. |

---

## Flow avant → après

### Avant (nominal PocketTasks friction)
```
Send → DECISION_REQUIRED + pending marker
 → TrajectorySurface: Instruire / option CTAs / Modifier
 → w2DecideTrajectoryAction
 → HD → PREPARE …
Pending competing mint → EXPLICIT_REINSTRUCTION_REQUIRED (transport-ish dead-end feel)
Finalization: reservations gate; Recommendations did NOT block canComplete
Journal: Sujets | Réserves only
```

### Après (chat-first nominal)
```
Pilot turn
 → IntentAnalysis.pilotDecisionCandidate (NON-AUTHORITATIVE)
 → resolveChatFirstPilotDecision (server)
    → unique sealed PresentedOptionSet (lazy materialize via existing proposeTrajectoryOptions)
    → decideTrajectory (KEEP writer)
 → HumanDecision + DecisionBasis + DecisionRef
 → PREPARE / Confirmation / Evidence (unchanged authority)
 → assessFinalization + undisposed_recommendations blocker
```

Ordinary / unrelated conversation under pending: **FAIL-OPEN** (reinstruction gate no longer dead-ends composer; competing DECISION_REQUIRED still fail-closed as clarification).  
Governed disposition without unique eligible subject: **FAIL-CLOSED ACTION** (zero HD).  
Finalization with active undisposed Recommendation on presented subject: **FAIL-CLOSED**.

---

## KEEP / ADAPT / RETIRE FROM NOMINAL UX

| Area | KEEP | ADAPT | RETIRE FROM NOMINAL UX |
|---|---|---|---|
| HD writer | `decideTrajectory` + DecisionRef UoW | Chat disposition → same writer | CTA Instruire / Décider / Modifier as required workflow |
| Pending / reinstruction | Server gate + markers | Gate outcomes → conversational clarification; post-AMEND no client `reinstructionOfProposalId` | Global composer hard-block myth |
| IntentAnalysis | Non-authoritative seams | `pilotDecisionCandidate` | Candidate as authority |
| Journal | Projection rail | + Recommandations / Décisions tabs | New store / journal-as-Truth-C |
| Trajectory panel | Inspection / EC / badges | `decisionWorkflowMode="chat_first"` default | Decision state-machine CTAs |
| Finalization | `assessFinalization` + reservations | `undisposed_recommendations` in blockers family | Second finalization engine |
| Legacy actions | Server actions / legacy_cta | — | Not deleted (#535 NO SAFE REMOVAL) |

---

## Fichiers créés / modifiés

### Créés
- `app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts`
- `app/lib/oa/cycle/application/deriveUndisposedRecommendations.ts`
- `app/__tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts`
- `app/__tests__/project-assistant/chatFirstPilotDecisionCandidate.d0.test.ts`
- `app/__tests__/oa/cycle/undisposedRecommendations.d0.test.ts`
- `app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx`

### Modifiés (product / tests / Living Ref)
- `f2/types.ts`, `f2/intentAnalysis.ts`, `f2/orchestrateF2.ts`
- `project-assistant/actions.ts` (projection Recos/Décisions)
- `fakeProvider.ts` (same spine; can emit candidate)
- `TrajectorySurface.tsx`, `ConversationSurface.tsx`, `JournalSurface.tsx`(+css), `ProjectWorkspacePage.tsx`, `useProductConversation.ts`
- `assessFinalization.ts`, `lifecycleProjection.ts`, `pilotLifecycleTransitions.ts`, `oa/cycle/index.ts`
- UI / corrProof09 / importBoundaries tests adapted
- Living Ref: `03-end-to-end-flow-catalog.md`, `09-known-gaps-reserves-and-current-boundaries.md`

---

## Contenu exploitable des changements

### 1) `PilotDecisionCandidate` (types + schema)

```ts
export type PilotDecisionDisposition =
  | "accept" | "refuse" | "amend" | "defer" | "none" | "ambiguous";

export type PilotDecisionCandidate = {
  disposition: PilotDecisionDisposition;
  rationale?: string | null;
};
```

Added to `IntentAnalysisDto` and `F2_INTENT_JSON_SCHEMA` (required-null pattern). Invalid → fail-closed null. **Never** a HumanDecision.

### 2) `resolveChatFirstPilotDecision`

- Maps accept/refuse/amend → sealed `PROPOSAL_SUBJECT_*` refs only
- Lazy-materializes PresentedOptionSet via existing `proposeTrajectoryOptions` when pending unbound
- Multi-pending → `ambiguous_subjects` (no HD)
- No eligible → `no_eligible_subject` (no HD)
- `defer` → `defer_unsupported` honest (Recommendation stays active; no DEFERRED enum / no new store)
- Calls existing `decideTrajectory`

### 3) `orchestrateF2` chat-first branch

- Runs **before** new DECISION_REQUIRED mint when effective disposition present
- On HD recorded → `f2_decision` success; clears client reinstruction arm relevance
- On ambiguity / defer_unsupported / action fail → clarification turn; conversation stays open
- Reinstruction gate: competing mint still blocked, but surfaced as conversational clarification (composer not dead-ended)

### 4) TrajectorySurface

- Default `decisionWorkflowMode = "chat_first"`
- Legacy CTAs (`Instruire les options`, per-option Décider) only when `legacy_cta`
- Server actions unchanged (compatibility)

### 5) JournalSurface

Tabs: **Sujets | Réserves | Recommandations | Décisions**  
Projection-only cards from lifecycle recommendations + HumanDecision history. No Accept/Refuse buttons.

### 6) Finalization

`deriveUndisposedRecommendations` — active Recommendation with `source=optset:…` and no active DecisionRef closing that optset → blocker `undisposed_recommendations` inside existing blockers family of `assessFinalization`. Journal openPoints are **not** Truth C.

---

## Invariants d'autorité

- Nora / OpenAI / Fake never emit HumanDecision
- `pilotDecisionCandidate` is NON-AUTHORITATIVE
- Only `decideTrajectory` / existing OA HumanDecision services write HD
- DecisionBasis sealed from PresentedOptionSet / Proposal — WHAT not enlarged
- No auto-GO, no silent HD, no auto-finalization
- N1/N2/N3 authority path for PREPARE/Confirm unchanged (#536 oracle still PASS)

---

## Finalization semantics

| Condition | Effect |
|---|---|
| Active Recommendation on presented optset without DecisionRef | blocks (`undisposed_recommendations`) |
| Recommendation resolved/rejected/superseded | does not block |
| Blocking reservation undisposed | blocks (`blocking_reservations`) — preserved |
| Decision history alone | does not arbitrarily block |
| Journal openPoint display alone | never closes / never authorizes |

---

## Tests / commandes / résultats

Working directory: `projects/sfia-studio/app`

| Command | Result |
|---|---|
| `npm run test -- …productChatFirst… …chatFirstPilot… …undisposed… …chatFirstGoverned…ui…` | **PASS** 4 files / **36** tests |
| `npm run test -- …productCycleE2eStabilization.frontDoor… trajectorySurface… preCycle… postExecution… corrProof09… importBoundaries…` | **PASS** 6 files / **84** tests (#536 oracle included) |
| `npm run test -- …lifecycleClosure.phaseB… lifecycleRecommendation.delivery…` | **PASS** 3 files / **37** tests |
| `npm run test -- …recommendationDecisionIntegrity… proposalSubjectIntegrity…` | **PASS** 2 files / **16** tests |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** (0 warnings/errors) |

**TOTAL reported this macro (targeted):** 36 + 84 + 37 + 16 = **173 tests PASS**  
No REAL tests. No pre-existing failures masked.

Oracle coverage highlights (front-door chat-first): non-blocking conversation; accept → 1 HD + PREPARE; refuse; amend without client reinstruction id; ambiguity; unrelated yes; finalization disposition gate.

---

## Fake / Real Qualification

| Item | Status |
|---|---|
| Fake provider | Same orchestration spine; emits `pilotDecisionCandidate` when scripted — does **not** write HD |
| REAL OpenAI | Same server path after cognition boundary — **NOT exercised this macro** |
| Proof level obtained | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** |
| Proof ceiling | DETERMINISTIC only |
| Bounded REAL | Next campaign / distinct Morris Gate — **NOT granted** |

---

## Dettes / réserves / legacy

1. **`defer_unsupported`** — honest; durable defer needs existing Reservation+HD pattern or future Morris arbitration (no new enum/store here).
2. **OptionSet materialization is lazy** on disposition turn — unbound subject never disposed stays unbound (documented vol 09).
3. **Legacy CTA path** retained via `decisionWorkflowMode="legacy_cta"` + server actions — RETIRE LATER; #535 NO SAFE REMOVAL PROVEN.
4. **REAL chat-first / PocketTasks parity** — NOT PROVEN.
5. **Process-local proposalStore** still structural (known); Proposal remains technical seal object, not Pilot-administered UX.

---

## Futurs exits (non autorisés ici)

- Project commit / push / PR (needs new Morris GO)
- REAL PocketTasks re-run Gate
- Safe legacy CTA deletion campaign
- Durable DEFER contract if product requires it

---

## Living Production Runtime Reference (AS-IMPLEMENTED candidat)

Updated in same macro:
- `03-end-to-end-flow-catalog.md` — F04 non-blocking; F05/F06 sealed set without CTA; F07 chat-first HD; F15 undisposed Recommendations; F17 resume without client reinstruction id
- `09-known-gaps-reserves-and-current-boundaries.md` — CHAT-FIRST overlay + next macro pointer; anti READY FOR REAL

No Convergence Roadmap edits. No doctrine/C1/framing edits.

---

## Verdict candidat

`CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — LOCAL CANDIDATE / DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE / READY FOR CHATGPT CRITICAL REVIEW`

Anti-claims restated: NOT REAL PROVEN · NOT READY FOR REAL · NOT PROJECT GIT INTEGRATED · NOT PRODUCT GLOBAL READY · RUNTIME V3 NON ADOPTED.
