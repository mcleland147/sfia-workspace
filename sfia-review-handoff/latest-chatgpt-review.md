# P5-S08-4 — GOVERNED MOMENT CLOSURE + GLOBAL RE-PROOF

**Timestamp:** 2026-10-07 Europe/Paris
**Repo:** mcleland147/sfia-workspace
**Branch:** `delivery/sfia-studio-product-simplification-p5-s08-global-p3-visual-parity`
**Base / origin/main:** `eed18bd572d65b6f5f4878ed24b195e4feeb5c7e`
**Morris S08-4 Substantive Visual Delivery GO:** AUTHORIZED / CONSUMED / CONTINUED (S08-4D closure)
**ChatGPT requalification:** Decision/Confirmation = **PRODUCT-PATH IMPLEMENTATION GAP**, not seed-only gap
**Prior handoff tip:** `d96438460a4eef4d691c705a901b7615075779a2` · blob `d057f8ba73a101b3663c7e6e0662dfc5f49eb029`
**Prior classification superseded:** P1 Decision/Confirmation runtime same-state — closed by this pass

---

## Verdict

**P5-S08-4 GLOBAL P3 VISUAL PARITY — PASS — READY FOR GIT INTEGRATION**

| Gate | Status |
| --- | --- |
| P0 | **0** |
| P1 | **0** |
| Decision 190:495 same-state | **PASS** |
| Confirmation 190:520 same-state | **PASS** |
| Desktop 59:2 / 61:2 | **STRUCTURALLY ALIGNED WITH P3 REFERENCE** (exploratory containers — not pixel-perfect claim) |
| S08-4A / B / C | **COMPLETE** |
| S08-4D | **PASS** |
| GLOBAL P3 VISUAL PARITY | **PASS** |
| Full Vitest | **5382 passed / 140 skipped / 0 failed** |
| Typecheck / Lint / Build | **PASS** |
| Playwright `p3-visual-parity` | **PASS** |
| Provider REAL | **NONE** |
| Production visual bypass | **NONE** |
| Parallel authority path | **NONE** |
| Legacy F2/F3 on `/studio` | **NOT ENABLED** |
| Project push / PR | **NONE** |
| Remaining P5 Exit blockers | **S08-5 ONLY** |
| S08-5 | **NOT STARTED** |
| P5 COMPLETE / P6 READY | **NO** |
| runtime v3 | **NON ADOPTED** |

---

## Chosen governed-moment architecture

**OPTION B (bounded):** Conversation consumes the same W2 read/mutation actions as TrajectorySurface.

1. Authoritative Product state via existing W2/W3 server actions
2. Pure presentation: `GovernedDecisionCard` / `GovernedConfirmationCard`
3. Conversation = primary inline Pilot interaction (P3 §17/§18)
4. TrajectorySurface `chat_first` = state/inspection/audit; **no competing Decision/Confirmation CTA**
5. `legacy_cta` harvest-only; `exposeLegacyAuthorityPath` remains false on `/studio`

**Why no parallel authority path:** Decision mutates only through `w2DecideTrajectoryAction`. Confirmation mutates only through `w2ConfirmExecutionContractAction` after `w2InspectExecutionContractAction` when needed. Applicability of confirmation remains domain-owned (`contract.status === "confirmation_required"`).

---

## Implementation

### Decision

| Item | Value |
| --- | --- |
| Component | `GovernedDecisionCard.tsx` + `.module.css` |
| Mount | `ConversationSurface` when `decisionSubjectContinuity.kind === "bound_awaiting_decision"` |
| Reads | `w2ReadActiveDecisionSubjectAction` (via `useProductConversation`) |
| Mutates | `w2DecideTrajectoryAction` |
| Secondary | « Voir l'autre option » = disclosure only (`decisionAlternateIndex`) — no HD |
| Geometry (390) | card x=16 w=358 · buttons 334×38 |

### Confirmation

| Item | Value |
| --- | --- |
| Component | `GovernedConfirmationCard.tsx` + `.module.css` |
| Mount | Conversation when EC continuity `active` + `confirmation_required` and Decision not pending |
| Reads | `w2ReadCurrentGovernedExecutionContinuityAction` |
| Inspect | `w2InspectExecutionContractAction` |
| Mutates | `w2ConfirmExecutionContractAction` (confirm-only — CTA « Confirmer l'action ») |
| Content | `presentPilotContract` → PORTÉE / IMPACT PRÉVU / RÉVERSIBILITÉ |
| Geometry (390) | card x=16 w=358 h≈435 (ref 438) · buttons 334×38 · Annuler present |

### TrajectorySurface

- `w2-confirm-contract` visible **only** when `decisionWorkflowMode === "legacy_cta"`
- chat_first Decision CTAs already hidden (prior S07)

### Modified / new Product files

- `hooks/useProductConversation.ts` — governed continuity + decide/inspect/confirm adapters
- `ConversationSurface.tsx` / `.module.css`
- `TrajectorySurface.tsx`
- `ProjectWorkspacePage.tsx` — `durableRefreshSignal`
- **NEW** `GovernedDecisionCard.*` / `GovernedConfirmationCard.*`
- Tests: `governedMomentsInline.ui.test.tsx`, `chatFirstGovernedDecisionLoop.ui.test.tsx`, `p5.s04.synthesesSurface.ui.test.tsx`, `s08-4.seedGovernedMoments.d0.test.ts` (opt-in `S08_4_SEED=1`)
- `production-runtime-reference.manifest.json` — digest for `useProductConversation.ts`
- Roadmap + P5 integrated delivery — material truth sync (S08-4D PASS)

---

## Deterministic QA state seed

| Scenario | DB | Mechanism |
| --- | --- | --- |
| D — Decision | `.tmp-sfia-review/visual/s08-4/qa-dbs/decision.sqlite` | `bootW2Runtime` + docs_write Proposal + `proposeTrajectoryOptions(proposalId)` → durable `PresentedOptionSet` → `bound_awaiting_decision` (restart-safe Epistemic) |
| C — Confirmation | `.tmp-sfia-review/visual/s08-4/qa-dbs/confirmation.sqlite` | propose → `decideTrajectory(GOVERNED_OPTION_REF)` → `prepareExecutionContractFromW2Decision(generate-temporary-artifact)` → `inspectExecutionContract` · **stop before confirm** |

- Manifest: `governed-moments-manifest.json`
- Seed runner: `S08_4_SEED=1 npx vitest run __tests__/project-assistant/s08-4.seedGovernedMoments.d0.test.ts`
- Runtime: Next with `SFIA_STUDIO_PRODUCT_DB_PATH=<qa db>` · `OPS1_CONVERSATION_PROVIDER=fake`
- **No** `VISUAL_TEST` UI branch · **No** demo query params · **No** OpenAI

---

## Visual evidence

| Artifact | Path |
| --- | --- |
| Figma Decision | `.tmp-sfia-review/visual/s08-4/figma/mobile-decision-190-495.png` |
| Runtime Decision 390 | `.tmp-sfia-review/visual/s08-4/runtime/decision-390.png` |
| Runtime Decision desktop | `.tmp-sfia-review/visual/s08-4/runtime/decision-desktop-1440.png` |
| Diff Decision | `.tmp-sfia-review/visual/s08-4/diff/decision-390-diff.png` |
| Figma Confirmation | `.tmp-sfia-review/visual/s08-4/figma/mobile-confirmation-190-520.png` |
| Runtime Confirmation 390 | `.tmp-sfia-review/visual/s08-4/runtime/confirmation-390.png` |
| Runtime Confirmation desktop | `.tmp-sfia-review/visual/s08-4/runtime/confirmation-desktop-1440.png` |
| Diff Confirmation | `.tmp-sfia-review/visual/s08-4/diff/confirmation-390-diff.png` |
| Geometry verdict | `.tmp-sfia-review/visual/s08-4/geometry/governed-moments-verdict.json` |
| Final workspace re-proof | `.tmp-sfia-review/visual/s08-4/final/` (Playwright p3-visual-parity) |

Full-frame pixelmatch % is high (different shell title / transcript / Issues overlay) — **card geometry + CTA hierarchy + section structure** are the PASS criteria for same-state governed moments. Desktop containers remain EXPLORATORY → structural alignment only.

---

## Accessibility (minimum)

- Cards use `<section>` + labelled headings (`aria-labelledby`)
- Buttons are real `<button>` with visible labels · `focus-visible` ring via `--pm6-focus-ring`
- Primary/secondary not hover-only · 38px height tap targets
- Errors use `role="alert"`
- No WCAG certification claim

---

## Tests

- Decision renders only on `bound_awaiting_decision`
- Recommendation alone does not render Decision card
- Alternate disclosure does not call decide
- Confirmation only when `confirmation_required`
- Confirmation absent when status not required
- Inspect path when inspection insufficient
- Trajectory chat_first hides `w2-confirm-contract`
- Legacy path not enabled by default on Conversation

**Full Vitest (clean env):** 5382 passed / 140 skipped / 0 failed

**Baseline attribution notes:**
- Earlier polluted run (QA env vars left set) caused createProject / authority false failures — **not Product regressions**; cleared env → green.
- `p5.s04.synthesesSurface` T14 failed on this branch only (duplicate title in Continuity + Overview) — **fixed** by scoping assertion to preview testid. Proven PASS on origin/main worktree before fix.
- `productionRuntimeReference` digest updated for `useProductConversation.ts` drift.

---

## P2 / P3-QNG (non-blocking)

- Product honesty « Projets récents » vs Figma « À reprendre » (S06 carry)
- Journal / context rail density vs Figma exploratory frames
- Full-frame pixel diff noise vs validated card geometry
- Desktop governed containers remain EXPLORATORY in Figma status

---

## Conditional Roadmap / P5 material sync

**DONE** — S08-4A–D COMPLETE · GLOBAL P3 VISUAL PARITY PASS · remaining blocker S08-5 ONLY · S08-5 NOT STARTED · P5 COMPLETE NO · P6 READY NO · runtime v3 NON ADOPTED.

---

## Local commits (this branch)

1. `301f3645` — feat(sfia-studio): converge S08-4 Product UI to P3 visual contract
2. `6b90beb3` — test(sfia-studio): harden S08-4 P3 visual parity harness navigation
3. `0984a4559130907ac46d2c0457c0e420419a723d` — feat(sfia-studio): complete P3 governed moments and S08-4 visual proof

**Project push:** NONE
**Project PR:** NONE

**Recommended next:** ONE CUMULATIVE S08-4 GIT INTEGRATION / PR READINESS PATH (Morris GO). STOP — do not start S08-5.
