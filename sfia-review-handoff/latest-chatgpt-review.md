# CORR-PROOF-11 — Review Pack (FULL)

- timestamp: 2026-09-15T10:40:30Z
- cycle: 8 — Delivery / EVOL / Critical
- Morris GO consumed: local Product candidate only — reinstruction continuity + amend/refuse UX gating + pilot-facing semantics
- repository: mcleland147/sfia-workspace
- worktree: `/Users/morris/Projects/sfia-studio-corr-proof-11-reinstruction-pilot-language`
- branch: `fix/sfia-studio-corr-proof-11-reinstruction-pilot-language`
- base / HEAD: `1215c4823ba29421f46553f9b2fd2bde5b63c0f6` (dirty candidate; **0 commits** ahead of origin/main)
- dogfood worktree preserved: `/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d` @ `1215c482…` (DB/session/env/3020 NOT touched)
- Project commit / push / PR / merge: **NOT PERFORMED**

## Sources read

Process: cycle template, routing guide, operating model, guardrails, synthetic map.
Convergence: build doctrine, roadmap, product-completion cadrage.
v3 framing: 32 / 33 / 34 (read-only).
Code: ProposalStore, orchestrateF2, pending/active/resolve/propose/decide/prepare/actions/types, presentationLabels, ProjectWorkspacePage, useProductConversation, TrajectorySurface, CORR-10 tests.

## Root causes

### Gap A — Reinstruction continuity — CONFIRMED

- `readActiveProposalDecisionSubject` order: bound awaiting → effective pending → none.
- Pending-only returns `pending_reinstruction_required` with a message that incorrectly always claimed process-local loss.
- `orchestrateF2` wrote a **new** pending marker on each DECISION_REQUIRED Proposal with **no supersession** of prior effective pendings → ghost A after reinstruction/restart.
- Resolve reasons were only `option_set_bound|decided|amended|refused` — no `superseded_by_reinstruction`.
- Multi-pending possible; no explicit reinstruction transport.

### Gap B — Amend/Refuse ≠ PREPARE — CONFIRMED

- Backend already fail-closed: `prepareExecutionContractFromW2Decision` → `PREPARE_NOT_APPLICABLE` when proposal subject selectedOption ≠ pursue.
- UI bug: TrajectorySurface rendered operation selector + « Préparer le contrat d'exécution » for **any** `decision`.

### Gap C — Pilot language — CONFIRMED

- TrajectorySurface exposed Proposal IDs, ProjectTrajectory jargon, raw option refs as primary copy.
- Nora active-cycle envelope in `orchestrateF2` is **deterministic** (`[LIVE]`, docs_write, ZERO Attempt, DECISION REQUIRED…) — not provider prose.
- `presentationLabels.formatNoraAssistantDisplayText` existed but did not scrub those envelope phrases; TrajectorySurface barely used helpers.

## Design retained — explicit reinstruction

1. Client may send opaque `reinstructionOfProposalId` (non-authoritative).
2. Server gate `assertExplicitReinstructionGate`:
   - no effective pending → write new pending as before;
   - effective pending **without** reinstruction → `EXPLICIT_REINSTRUCTION_REQUIRED` (no competing decidable Proposal);
   - reinstruction id must match an **effective** pending; fail closed otherwise;
   - bound awaiting OptionSet blocks supersession.
3. On valid reinstruction after `saveProposal(B)`:
   - `replacePendingDecisionSubjectForExplicitReinstruction` atomically resolves A + writes B in **one** `updateEpistemicState` items batch (transactional when UoW present);
   - on failure → `markProposalStale(B)`; A remains authoritative.
4. Ordinary Nora turn without reinstruction never resolves pendings (R10).
5. Legacy CORR-10 markers compatible (same Epistemic Observation shape; no migration).
6. Reinstruction A never clears unrelated pending B; no project-global clear.

### Recoverability honesty

Pending read now exposes `recoverableProposalIds` (process-local DECISION_REQUIRED still present).
Pilot message does **not** claim loss when recoverable; CTA can instruct options on that id.
When not recoverable: reformulation CTA arms `reinstructionOfProposalId` + focuses Nora.

## Gap B UX

- amend → `w2-amend-next-action` (no op selector / no PREPARE)
- refuse → `w2-refuse-next-action`
- pursue / trajectory decisions keep PREPARE path
- direct PREPARE amend/refuse still `PREPARE_NOT_APPLICABLE` (backend)

## Gap C language

- `pilotPendingReinstructionMessage`, `pilotProposalOptionLabel`, `pilotPrepareNotApplicableMessage`
- scrub in `formatNoraAssistantDisplayText` for ZERO Attempt / Cursor REAL / DECISION_REQUIRED / docs_write / pending_reinstruction_required
- orchestrateF2 active-cycle textParts rewritten to pilot French (mode test/réel, décision requise, rien exécuté)
- TrajectorySurface: « Proposition à examiner », « Votre décision », technical IDs in `<details data-testid="w2-technical-details">`

## Atomicity / crash consistency

| Scenario | Outcome |
|---|---|
| Atomic replace succeeds | A resolved (`superseded_by_reinstruction`), B sole active pending |
| Replace fails after saveProposal(B) | B STALE; A still effective |
| Bound awaiting present | replace refused |
| Wrong / empty reinstruction id | fail closed; A unchanged |

## Multi-subject safety

- Closure/reinstruction of A does not neutralize unrelated B
- Trajectory DecisionRef without `prop:` does not close Proposal pendings (CORR-10 invariant kept)
- Ambiguous / non-matching reinstruction → fail closed
- No silent supersession of bound awaiting subject

## Files created / modified (candidate)

**New**
- `projects/sfia-studio/app/__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts` (15 tests; R01–R22 coverage, some combined)

**Modified**
- `w2/pendingDecisionSubjectMarker.ts` — supersede reason + atomic replace
- `w2/activeProposalDecisionSubject.ts` — recoverable ids + reinstruction gate helpers
- `w2/resolveProposalDecisionSubject.ts` — pilot messages
- `w2/actions.ts`, `w2/types.ts` — recoverableProposalIds transport
- `f2/orchestrateF2.ts` — reinstruction gate + replace + pilot envelope
- `actions.ts` — `reinstructionOfProposalId` passthrough
- `presentationLabels.ts` — pilot helpers + scrub
- `TrajectorySurface.tsx` — pending CTA, amend/refuse gating, pilot copy
- `ProjectWorkspacePage.tsx` / `useProductConversation.ts` — arm/consume reinstruction
- `trajectorySurface.ui.test.tsx` — amend/refuse UI + mocks
- `corrProof07…T15` — second send must pass explicit reinstruction (behavioral consequence of Gap A gate)

## Diffstat (Product/app only)

13 tracked files changed, **+876 / −82**, plus untracked:
`corrProof11.reinstructionPilotLanguage.d0.test.ts`

(`.tmp-sfia-review/chatgpt-review.md` is local review-only — excluded from any future project commit.)

## Validation

| Suite | Result |
|---|---|
| CORR-PROOF-11 | **15 PASS** |
| CORR-PROOF-10 | **45 PASS** |
| CORR-PROOF-07 | **32 PASS** |
| CORR-PROOF-09 | **15 PASS** |
| W2 Track A | **22 PASS** |
| TrajectorySurface UI | **7 PASS** |
| importBoundaries | **5 PASS** |
| Targeted total | **158 PASS** |
| Full Vitest | **4045 passed / 137 skipped / 0 failed** (380 files: 363 passed / 17 skipped) |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| git diff --check | PASS |

## Fake / Real

- DETERMINISTIC ONLY
- ZERO OpenAI LIVE
- ZERO Cursor REAL
- ZERO dogfood mutation / ZERO interaction with « Gestion de tâches »
- runtime v3 NON ADOPTED
- NOT REAL BOUNDARY / NOT E2E REAL / NOT L5

## Dogfood untouched

- Product DB / nora-session / d1 / .env.local not modified by this cycle
- Server 3020 left as found (still listening from prior env prep)
- No dogfood reproof

## Debt / reserves / exit

- Physical housekeeping of superseded markers still non-blocking (resolved status is authoritative)
- Broader Product redesign / Figma fidelity out of scope
- Provider-generated Nora prose not post-processed beyond existing display scrub
- Exit: ChatGPT Critical Review for **Git Integration Readiness** (still no project commit in this cycle)

## Structural decisions

None requiring Decision Pack — reuse Epistemic Observation + ProposalStore + presentationLabels + existing UoW.

## Forbidden actions NOT performed

- project commit / push / PR / merge
- dogfood mutation
- REAL / LIVE
- migrations / new tables / aggregates
- doctrine / roadmap / C1 / v3 framing edits
- redesign / design-system overhaul
- force push / branch delete

## Verdict

CORR-PROOF-11 — REINSTRUCTION CONTINUITY + AMEND/REFUSE UX GATING + PILOT-FACING SEMANTICS DETERMINISTICALLY PROVEN — READY FOR CHATGPT GIT INTEGRATION READINESS
