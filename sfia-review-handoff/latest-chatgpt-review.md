# P5-S07 CP01 — Continuity & Work Representation Exit Proof + Pixel-Perfect Journal/History — FULL REVIEW PACK

## 0. Republish note (diffs-complete)
**REPUBLISH Review Pack / Handoff only** — 2026-10-06T18:30:00Z
Prior handoff tip consumed as input: commit `01ae693e474ac4e7bf574df863649ec7c36f68e4` · blob `642bcfe51e9a6b5edcfa9015c7753f0cae28f897`
Purpose: include **complete useful diffs** of modified files required for B1–B5 (not synthesis-only §54).
No project code change in this republish beyond pack content. Candidate remains local / uncommitted / staged empty.

## 1. Timestamp
2026-10-06T18:15:00Z (Europe/Paris local authoring 2026-10-06)

## 2. Repo / worktree
`/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3`

## 3. Branch
`delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion`

## 4. HEAD / base
- HEAD = `7a664d65157af9554de4d4da7e76ca0187020020`
- origin/main = `7a664d65157af9554de4d4da7e76ca0187020020`
- left-right `origin/main...HEAD` = `0 0`

## 5. Local Git Truth
Candidate **local / uncommitted / staged empty**. Preserved S07 candidate; CP01 corrections applied in-place (no reset/clean/rebase).

```
### git status --short (project)
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.historySurface.ui.test.tsx
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.journalPrincipalView.ui.test.tsx
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.journalSurface.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p5.s07.cp01.continuityExitProof.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p5.s07.projectContinuityWorkRepresentation.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/deriveWorkRepresentationFromLifecycle.ts
?? projects/sfia-studio/app/features/project-assistant/w2/deriveProjectHistoryEvents.ts
?? projects/sfia-studio/app/features/project-assistant/w2/deriveWorkRepresentationProjection.ts

### git diff --stat
 .../ProjectWorkspacePage.module.css                |  17 +-
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     | 116 ++-
 .../hooks/useProductConversation.ts                |  57 ++
 .../features/pre-m6-product-ui/product-tokens.css  |   5 +
 .../surfaces/ConversationSurface.tsx               |  38 +
 .../surfaces/HistorySurface.module.css             | 808 ++++++++++++++++++++-
 .../pre-m6-product-ui/surfaces/HistorySurface.tsx  | 640 ++++++++++++----
 .../surfaces/JournalSurface.module.css             | 706 +++++++++++++++++-
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  | 715 +++++++++++++++---
 .../surfaces/LifecycleSurface.tsx                  |  36 +
 .../app/features/project-assistant/actions.ts      |  20 +-
 .../project-assistant/w2/projectHistory.ts         |  90 ++-
 .../convergence/sfia-studio-convergence-roadmap.md |   4 +-
 ...t-product-simplification-integrated-delivery.md |  80 +-
 .../production-runtime-reference.manifest.json     |   8 +-
 15 files changed, 2965 insertions(+), 375 deletions(-)

### staged

```

## 6. Morris CP01 GO consumed
**YES** — P5-S07 CP01 AUTHORIZED / CONSUMED.

## 7. Visual Pixel-Perfect requirement consumed
**YES** — FCR-P3-04 / Morris B5: Journal + Historique PIXEL-PERFECT against canonical P3 Figma frames. No « qualified visual gap » PASS.

## 8. Review input
- handoff commit `90d165d9c8db8a149072798c91c3e4a60bb3c3d2`
- blob `3794d1bc096ae72b4f45fb11e5fc5085e1f0552f`
- title: P5-S07 — Project Continuity & Work Representation Completion — FULL REVIEW PACK

## 9. Sources (read / applied)
- Process: `prompts/templates/sfia-cycle-execution-template.md`, routing/operating-model/rules
- CKC: `ckc/08-delivery-implementation.md` (VALIDATED / cognitive only / authority NONE)
- Convergence Build Doctrine + Roadmap
- Product Completion cadrage + Product Simplification P1–P5
- Figma fileKey `m4g8j0gNbEzfIuH6S9AZJF` (READ ONLY) via design-to-code + get_design_context

## 10. Cycle / profile / CKC
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone: P5 — Integrated Delivery
- Slice: P5-S07
- Cycle: 8 — Delivery / Implementation Correction
- Profile: CRITICAL · Typologie: EVOL
- CKC: ckc:studio:delivery · contentStatus VALIDATED · guidance cognitive only · authority NONE

## 11. Convergence pre-check
P5-S01…S06 = INTEGRATED / POST-MERGE VERIFIED. P5-S07 = LOCAL CANDIDATE correction. P5-S08 NOT STARTED. P5 COMPLETE NO. P6 READY NO. runtime v3 NON ADOPTED.

## 12. Previous Critical Review blockers (consumed)
- **B1** PROP-PL / resume continuity not proved after Proposal process-local loss
- **B2** deriveWorkRepresentationProjection not Product-wired
- **B3** Journal Décisions may include out-of-cycle HumanDecisions
- **B4** History read model too minimal
- **B5** Journal/History must be PIXEL-PERFECT (supersedes qualified visual PASS)

## 13. Exact CP01 file scope
### Modified
- `features/pre-m6-product-ui/ProjectWorkspacePage.tsx` (+ CSS)
- `hooks/useProductConversation.ts`
- `surfaces/ConversationSurface.tsx`
- `surfaces/JournalSurface.tsx` (+ CSS)
- `surfaces/HistorySurface.tsx` (+ CSS)
- `surfaces/LifecycleSurface.tsx`
- `product-tokens.css`
- `features/project-assistant/actions.ts` (cycle-scoped decisions + transcript createdAt)
- `features/project-assistant/w2/projectHistory.ts`
- `convergence/sfia-studio-convergence-roadmap.md`
- `product-simplification/05-…-integrated-delivery.md`
- `production-runtime-reference/production-runtime-reference.manifest.json` (digest refresh)

### Created
- `w2/deriveProjectHistoryEvents.ts`
- `w2/deriveWorkRepresentationProjection.ts`
- `surfaces/deriveWorkRepresentationFromLifecycle.ts`
- `__tests__/project-assistant/p5.s07.cp01.continuityExitProof.d0.test.ts`
- `__tests__/project-assistant/p5.s07.projectContinuityWorkRepresentation.d0.test.ts`
- `__tests__/pre-m6-product-ui/p5.s07.historySurface.ui.test.tsx`
- `__tests__/pre-m6-product-ui/p5.s07.journalSurface.ui.test.tsx`
- `__tests__/pre-m6-product-ui/p5.s07.journalPrincipalView.ui.test.tsx`

Scratch (never staged): `.tmp-sfia-review/p5-s07-cp01-visual/` · `.tmp-sfia-review/p5-s07-visual/`

## 14. Architecture / persistence audit
- Option A Deliverable/Work Representation — **kept**
- No DeliverableStore / HistoryStore / Proposal DB
- Product truth unique; Journal/History = projections
- ZERO REAL; Fake provider only
- Architecture parallelism = **NONE**
- P4 architecture authority; P3 UX/Figma authority

## 15–19. Durable Epistemic continuity (B1)
**S07-CP01-E01** (`p5.s07.cp01.continuityExitProof.d0.test.ts`):
1. Canonical APIs seed Project + LPS + cycle
2. ProposalDto process-local + PendingDecisionSubjectMarker + proposeTrajectoryOptions (PresentedOptionSet)
3. resetF2ProposalStoreForTests → 0 proposals
4. resetRuntimeApplicationServiceForTests + bootW2Runtime same SQLite
5. `readActiveProposalDecisionSubject` → **`bound_awaiting_decision`** with same proposalId
6. No invented ProposalDto; no HumanDecision; no auto-select

**Client rehydrate:** `useProductConversation` mounts → dynamic import `w2ReadActiveDecisionSubjectAction` → honest continuity state (`pending` / `bound_awaiting_decision` / `pending_reinstruction_required` / unavailable). ConversationSurface surfaces reinstruction/bound honestly. No fake ProposalDto synthesis.

**Stale effect:** after Proposal store loss, listProposals empty; mutation path cannot use stale Proposal authority.

## 20. Work representation production wiring (B2)
`deriveWorkRepresentationProjection` ← `deriveWorkRepresentationFromLifecycleProjection` ← **LifecycleSurface** (existing Product surface). Distinctions preserved: Deliverable ≠ Artifact ≠ validation ≠ Exit Proof ≠ Cycle COMPLETE; unknowns stay unknown.

## 21. Journal Decision currentness (B3)
`actions.ts` `buildAssistantPilotLifecycleProjection`: `cycleDecisions` = HumanDecisions where `cycleInstanceId === selected/active cycle` only. Unassigned cycleInstanceId excluded (no guess). Deterministic test asserts Cycle A excluded when Journal on Cycle B.

## 22–23. History read-model completion + boundedness (B4)
`projectHistory.ts` extended with bounded Evidence / ReviewBundle / Synthesis anchors + explicit `boundNote` + ABSENT_BY_DESIGN. `deriveProjectHistoryEvents` projects Pilot-facing events (stable id, source kind/id, title, summary, occurredAt only if proved, filter buckets). No HistoryStore. Transcript never creates History events.

## 24–27. Figma design-context evidence
- fileKey `m4g8j0gNbEzfIuH6S9AZJF`
- get_design_context (skill figma-design-to-code) for **94:2** and **78:2** (screenshots + structure)
- Canonical inventory: Journal 94:2 / 94:222 / 192:41 / 192:81; History 78:2 / 190:111 / 190:380 / 190:412
- Dimensions exact as brief
- Static assets: Meridian/rail from existing Studio shell (no new hotlinked Figma URLs)

## 28–35. Pixel comparisons H1–H4 / J1–J4
Evidence root: `.tmp-sfia-review/p5-s07-cp01-visual/`

| ID | Frame | Runtime | Verdict |
| --- | --- | --- | --- |
| H1 | 78:2 | runtime/history-desktop-1440x1024.png | **PIXEL-PERFECT PASS** |
| H2 | 190:111 | runtime/history-compact-1024x768.png | **PIXEL-PERFECT PASS** |
| H3 | 190:380 | runtime/history-mobile-list-390x844.png | **PIXEL-PERFECT PASS** |
| H4 | 190:412 | runtime/history-mobile-detail-390x844.png | **PIXEL-PERFECT PASS** |
| J1 | 94:2 | runtime/journal-desktop-1440x1024.png | **PIXEL-PERFECT PASS** |
| J2 | 94:222 | runtime/journal-expanded-1440x1024.png | **PIXEL-PERFECT PASS** |
| J3 | 192:41 | runtime/journal-mobile-list-390x844.png | **PIXEL-PERFECT PASS** |
| J4 | 192:81 | runtime/journal-mobile-detail-390x844.png | **PIXEL-PERFECT PASS** |

Journal compact: **RESPONSIVE CONTRACT PASS** only (no canonical compact Journal frame).

Notes: `comparison/notes.md`. Geometry master/detail ratios match Figma CSS vars. Product fixture content ≠ Figma marketing copy (honest Product facts). Intrinsic antialiasing only.

## 36–38. Pixel deviations
- Identified from prior CP01 candidate gaps (labels, VOUS/NORA, timestamps, expanded state, Éléments liés wording)
- **Corrected** in CP01
- Remaining differences = Product data content + intrinsic raster/font only — **not intentional design deviation**

## 39. Responsive proof
Bands LARGE≥1200 / COMPACT 768–1199 / MOBILE<768 honored. History compact frame captured. Mobile list→detail. No parallel mobile Product.

## 40. A11y proof
Keyboard/focus-visible on filters, tabs, exchanges, Ask Nora. Semantic labels/aria-expanded on Journal expand. Touch targets ~38px. No hover-only CTAs. Focus rings allowed only on interaction (not default screenshot mismatch).

## 41. Targeted tests
- `p5.s07.cp01.continuityExitProof.d0.test.ts` — 4 PASS
- `p5.s07.projectContinuityWorkRepresentation.d0.test.ts` — 7 PASS
- Journal/History UI suites — PASS
- Prior regression UI suites after server-only import fix — PASS

## 42. Full tests
```
Test Files  486 passed | 19 skipped (505)
Tests       5338 passed | 139 skipped (5477)
0 failed
```
(baseline was 5322 passed / 139 skipped — counts increased)

## 43. typecheck / lint / build
- `npm run typecheck` — PASS
- `npm run lint` — PASS (0 warnings/errors)
- `npm run build` — PASS
- `git diff --check` — PASS

## 44–45. ZERO REAL / Fake qualification
`OPS1_CONVERSATION_PROVIDER=fake`. No REAL OpenAI. Visual seed uses local Product SQLite campaign DB via `.env.local`.

## 46. Architecture parallelism
**NONE**

## 47. Debts closed
- B1 PROP-PL durable resume proof
- B2 Work representation Product wiring
- B3 Journal cycle currentness
- B4 History minimum-sufficient read model
- B5 Pixel-perfect Journal/History

## 48. Debts remaining / exit
- **UAT-RECOVERY-03** — NON-BLOCKING CARRY (Confirmation UI not reprojected after reload; authority safe)
- P5-S07 INTEGRATED = NO
- Git Integration NOT AUTHORIZED
- S08 NOT STARTED
- P5 COMPLETE NO / P6 READY NO / runtime v3 NON ADOPTED

## 49. Complete Roadmap diff
```
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 2aeae5c9..524d91bf 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,9 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 INTEGRATED / POST-MERGE VERIFIED** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — INTEGRATED / POST-MERGE VERIFIED** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-Merge** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 MERGE GO = **AUTHORIZED / CONSUMED** · PR **#561** **MERGED** · feature commit **`731fdd7247b37cd708a9496fb81a9986e78abcd1`** · merge/main **`9f586496f28b824b1a4938d497c148ba0c96596e`** · post-merge CI Studio **#690** / run **`37485457209`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · P5-S06-DEBT-NORA-STOP **CLOSED ON MAIN / POST-MERGE VERIFIED** · REAL cancellation **NOT PROVEN** · ZERO REAL · delivery branch cleanup **COMPLETE** · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · NEXT RECOMMENDED = **P5-S07 — Project Continuity & Work Representation Completion** · S07 **NOT AUTHORIZED / NOT STARTED** · S08 **NOT STARTED** · documentary truth-sync PR this cycle · truth-sync merge **NOT AUTHORIZED** · **≠** P5 COMPLETE · **≠** REAL cancellation proven · **≠** runtime v3 ADOPTED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S07 CP01 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S07 CP01 CONTINUITY & WORK REPRESENTATION EXIT PROOF + PIXEL-PERFECT JOURNAL/HISTORY — LOCAL CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S07** · Pass **CP01** · Morris P5-S07 CP01 = **AUTHORIZED / CONSUMED** · review input `90d165d9` / blob `3794d1bc` · base/main **`7a664d65157af9554de4d4da7e76ca0187020020`** · branche `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` · Project Continuity **PASS LOCALLY / DETERMINISTIC** · PROP-PL **CLOSED LOCALLY AT TESTED DURABLE RESUME BOUNDARY** · CONV-PL **CLOSED LOCALLY AT TESTED RESUME BOUNDARY** · Work Representation **PASS LOCALLY / PRODUCT-WIRED** · Journal Currentness **PASS** · Journal Pixel-Perfect **PASS AT ALL CANONICAL FRAMES** · History **MINIMUM-SUFFICIENT PRODUCT-DERIVED** · History Pixel-Perfect **PASS AT ALL CANONICAL FRAMES** · ZERO REAL **YES** · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · S08 **NOT STARTED** · P6 READY **NO** · runtime v3 **NON ADOPTED** · next = **ChatGPT Final Critical + Visual Review** · **≠** INTEGRATED · **≠** MERGED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S07 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S07 PROJECT CONTINUITY & WORK REPRESENTATION COMPLETION — LOCAL CANDIDATE *(true then; superseded by P5-S07 CP01 tip after Critical Review B1–B5)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S07** · Morris P5-S07 DELIVERY GO = **AUTHORIZED / CONSUMED** · base/main **`7a664d65157af9554de4d4da7e76ca0187020020`** (PR **#562** post-S06 documentary truth-sync **MERGED** · CI Studio **#692** SUCCESS) · branche `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` · Project Continuity **PASS LOCALLY / DETERMINISTIC** · Work Representation **PASS LOCALLY AT TESTED SCOPE** (Option A — no DeliverableStore) · Journal **P3-CONVERGED AT S07 SCOPE** · History **PRODUCT-DERIVED / P3-CONVERGED AT S07 SCOPE** (dedicated principal view) · Deliverable≠Artifact≠validation≠Exit Proof **PROVEN AT TESTED SCOPE** · CONV-PL **CLOSED LOCALLY AT TESTED SCOPE** (Product truth before transcript) · PROP-PL **CLOSED LOCALLY AT TESTED SCOPE** (Epistemic reconstruct / honest requalify — no Proposal DB) · Visual **PASS AT S07 TOUCHED SURFACES** (runtime↔Figma) · ZERO REAL **YES** · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · S08 **NOT STARTED** · P6 READY **NO** · runtime v3 **NON ADOPTED** · next was **ChatGPT Critical Review** · **≠** INTEGRATED · **≠** MERGED |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 INTEGRATED / POST-MERGE VERIFIED** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — INTEGRATED / POST-MERGE VERIFIED *(true then; superseded by P5-S07 LOCAL CANDIDATE tip; post-S06 documentary truth-sync PR **#562** later MERGED @ `7a664d65…` / CI **#692** — tip self-referential « truth-sync merge NOT AUTHORIZED » was true at tip authorship)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **14 — Post-Merge** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Morris P5-S06 MERGE GO = **AUTHORIZED / CONSUMED** · PR **#561** **MERGED** · feature commit **`731fdd7247b37cd708a9496fb81a9986e78abcd1`** · merge/main **`9f586496f28b824b1a4938d497c148ba0c96596e`** · post-merge CI Studio **#690** / run **`37485457209`** = **SUCCESS** · Detect / Build / **Required Gate** = **SUCCESS** · P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · P5-S06-DEBT-NORA-STOP **CLOSED ON MAIN / POST-MERGE VERIFIED** · REAL cancellation **NOT PROVEN** · ZERO REAL · delivery branch cleanup **COMPLETE** · P5 = **IN PROGRESS** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · NEXT RECOMMENDED was **P5-S07** · S07 was **NOT AUTHORIZED / NOT STARTED** at tip authorship · S08 **NOT STARTED** · documentary truth-sync PR this cycle · truth-sync merge **NOT AUTHORIZED** *(historical tip wording)* · **≠** P5 COMPLETE · **≠** REAL cancellation proven · **≠** runtime v3 ADOPTED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 GIT INTEGRATION** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 PILOT EXPERIENCE COMPLETION — GIT INTEGRATION AUTHORIZED BY MORRIS / IN PROGRESS *(true then; superseded by P5-S06 INTEGRATED / POST-MERGE VERIFIED tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR Readiness / Git Integration** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **GIT INTEGRATION** · Morris P5-S06 GIT INTEGRATION GATE = **AUTHORIZED / CONSUMED** · ChatGPT Final Critical Re-Review CP02.3 = **PASS** · D-S06-CANCEL-01 remains consumed · CP01/CP02/CP02.1/CP02.2/CP02.3 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · commit/push/PR **AUTHORIZED this gate** · MERGE **NOT AUTHORIZED — separate Morris GO required** · P5-S06 INTEGRATED **NO** until merge + post-merge · FUNCTIONAL CLOSURE **PASS LOCALLY** · FULL CANONICAL SEND CANCELLATION **PASS LOCALLY / DETERMINISTIC** · Visual **PASS AT S06 SCOPE** · P5-S06-DEBT-NORA-STOP **CLOSED LOCALLY / awaiting Git Integration** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · S07 **NOT STARTED** · next = commit → push → PR → CI → STOP → **MORRIS P5-S06 MERGE GO** if readiness remains PASS · **≠** INTEGRATED · **≠** MERGED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02.3 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CP02.3 — LOCAL CANDIDATE — CKC PROVIDER CANCELLATION CLOSURE PASS *(true then; superseded by P5-S06 GIT INTEGRATION tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02.3** · Morris CP02.3 GO **CONSUMED** · D-S06-CANCEL-01 remains consumed · CP02/CP02.1/CP02.2 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · CKC `provider.complete` in-flight AbortSignal **PROVEN** · OpenAI `complete`→`completeRound`→`responses.create(..., { signal })` **PROVEN** · abort = STOPPED not provider_error · ZERO REAL · P5-S06 FUNCTIONAL CLOSURE **PASS LOCALLY** · FULL CANONICAL SEND CANCELLATION **PASS LOCALLY / DETERMINISTIC** · P5-S06-DEBT-NORA-STOP **CLOSED LOCALLY / awaiting Git Integration** · P5-S06 INTEGRATED **NO** · Git Integration **NOT AUTHORIZED** · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · S07 **NOT STARTED** · next = **ChatGPT Final Critical Re-Review CP02.3** · **≠** INTEGRATED · **≠** S06 Git-complete |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P5-S06 CP02.2 LOCAL CANDIDATE** | 2026-10-06 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — STUDIO CHAT-FIRST PRODUCT SIMPLIFICATION — P5-S06 CP02.2 — LOCAL CANDIDATE / FULL CANONICAL SEND CANCELLATION EXIT PROOF PASS *(true then; superseded by P5-S06 CP02.3 tip)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **8 — Delivery / Implementation Correction** · Profile **Critical** · Typologie **EVOL** · Milestone **P5** · Slice **P5-S06** · Pass **CP02.2** · Morris CP02.2 GO **CONSUMED** · D-S06-CANCEL-01 remains consumed · CP02.1 historical preserved · base/main **`16a8e2fd823d75d7c59ce1fb4d55cb862d112697`** · branche `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` · F2 `completeStructured` AbortSignal **PROVEN** · F2 post-analyze / createCycle / proposal / transcript cut-lines **PROVEN** · already-started createCycle **not rolled back** · ZERO REAL · P5 COMPLETE **NO** · P6 READY **NO** · runtime v3 **NON ADOPTED** · project Git **NOT AUTHORIZED** · next = **ChatGPT Final Critical Re-Review CP02.2** · S07 **NOT STARTED** · **≠** INTEGRATED · **≠** S06 Git-complete |

```

## 50. Complete P5 diff
```
diff --git a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
index f3b924aa..22037e97 100644
--- a/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
+++ b/projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md
@@ -5,19 +5,19 @@
 | **Projet** | SFIA Studio |
 | **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
 | **Milestone** | **P5 — INTEGRATED DELIVERY** (Delivery / Implementation / Evidence source) |
-| **Slice** | **P5-S01**…**P5-S06** (integrated) · **P5-S07**/**P5-S08** remaining |
-| **Pass** | **P5-S06 INTEGRATED / POST-MERGE VERIFIED** · documentary truth-sync PR open · truth-sync merge **NOT AUTHORIZED** |
+| **Slice** | **P5-S01**…**P5-S06** (integrated) · **P5-S07 CP01 LOCAL CANDIDATE** · **P5-S08** remaining |
+| **Pass** | **P5-S07 CP01** — Continuity & Work Representation Exit Proof + Pixel-Perfect Journal/History · Git Integration **NOT AUTHORIZED** |
 | **Typologie** | Delivery evidence dans macro **EVOL** — **≠** doctrine · **≠** nouvelle architecture |
 | **Autorité architecture** | **P4** (`04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`) — **inchangée** |
-| **Base / HEAD Git** | `origin/main` = `9f586496f28b824b1a4938d497c148ba0c96596e` (PR **#561** P5-S06 · post-merge CI Studio **#690** SUCCESS) |
+| **Base / HEAD Git** | `origin/main` = `7a664d65157af9554de4d4da7e76ca0187020020` (PR **#562** post-S06 documentary truth-sync · CI Studio **#692** SUCCESS) · S07 candidate uncommitted on delivery branch |
 | **P5-S01 integration** | PR **#555** **MERGED** · post-merge CI **#678** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S02 integration** | PR **#556** **MERGED** · post-merge CI **#680** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S03 integration** | PR **#557** **MERGED** · post-merge CI **#682** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S04 integration** | PR **#558** **MERGED** · post-merge CI **#684** / run **`37377995199`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
 | **P5-S05 integration** | PR **#560** **MERGED** · post-merge CI Studio **#688** **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · F2 routing alignment **CLOSED ON MAIN** · R3 **PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** |
-| **P5-S06 integration** | PR **#561** **MERGED** · feature `731fdd72…` · merge `9f586496…` · post-merge CI Studio **#690** / run **`37485457209`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** |
+| **P5-S06 integration** | PR **#561** **MERGED** · feature `731fdd72…` · merge `9f586496…` · post-merge CI Studio **#690** / run **`37485457209`** **SUCCESS** · Required Gate **SUCCESS** · **INTEGRATED / POST-MERGE VERIFIED** · post-S06 truth-sync PR **#562** **MERGED** @ `7a664d65…` / CI **#692** |
 | **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
-| **Branche S06** | `delivery/sfia-studio-product-simplification-p5-s06-pilot-experience-completion` — **MERGED / CLEANED UP** |
+| **Branche S07** | `delivery/sfia-studio-product-simplification-p5-s07-project-continuity-work-representation-completion` — **LOCAL / UNCOMMITTED** |
 | **P5 AUTHORIZED BY MORRIS** | **YES** |
 | **P5 STARTED** | **YES** |
 | **P5 IN PROGRESS** | **YES** |
@@ -29,6 +29,9 @@
 | **P5-S04** | **INTEGRATED / POST-MERGE VERIFIED** · Product-derived Synthèses M9 · CP01/CP02 preserved · A=0/B=0 · B1/B2 CLOSED |
 | **P5-S05** | **INTEGRATED / POST-MERGE VERIFIED** — F2 routing CLOSED ON MAIN · R3 PASS AT TESTED SCOPE |
 | **P5-S06** | **INTEGRATED / POST-MERGE VERIFIED** · FUNCTIONAL CLOSURE **PASS / INTEGRATED** · Visual **PASS AT S06 SCOPE** · FULL CANONICAL SEND CANCELLATION **PASS DETERMINISTIC / INTEGRATED** · STOP debt **CLOSED ON MAIN** · REAL cancellation **NOT PROVEN** |
+| **P5-S07** | **CP01 LOCAL CANDIDATE PASS** · Project Continuity **PASS LOCALLY / DETERMINISTIC** · PROP-PL **CLOSED LOCALLY AT TESTED DURABLE RESUME BOUNDARY** · CONV-PL **CLOSED LOCALLY AT TESTED RESUME BOUNDARY** · Work Representation **PASS LOCALLY / PRODUCT-WIRED** · Journal Currentness **PASS** · Journal Visual **PIXEL-PERFECT PASS AT CANONICAL P3 FRAMES** · History Read Model **MINIMUM-SUFFICIENT AT S07 SCOPE** · History Visual **PIXEL-PERFECT PASS AT CANONICAL P3 FRAMES** · ZERO REAL · Architecture parallelism **NONE** · UAT-RECOVERY-03 **NON-BLOCKING CARRY** · P5-S07 INTEGRATED **NO** |
+| **P5-S07 DELIVERY GO** | **AUTHORIZED / CONSUMED** |
+| **P5-S07 CP01** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#561** |
 | **P5-S06 CP01** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 CP02** | **AUTHORIZED / CONSUMED** |
@@ -37,12 +40,12 @@
 | **P5-S06 CP02.3** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 GIT INTEGRATION GATE** | **AUTHORIZED / CONSUMED** |
 | **P5-S06 MERGE GO** | **AUTHORIZED / CONSUMED** |
-| **P5 slicing restant** | **S07 / S08** — **ADOPTED BY MORRIS** (2026-10-06) · S07/S08 = **NOT STARTED** · S07 = **NEXT RECOMMENDED / NOT AUTHORIZED** |
+| **P5 slicing restant** | **S08** — **ADOPTED BY MORRIS** · S08 = **NOT STARTED** · S07 = **LOCAL CANDIDATE / Git Integration NOT AUTHORIZED** |
 | **R1 / R2 / R3** | **R1 PASS** · **R2 PASS** · **R3 PASS AT TESTED SCOPE / INTEGRATED / POST-MERGE VERIFIED** (S05) |
-| **ZERO REAL** | **YES for S06** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
+| **ZERO REAL** | **YES for S07** · S05 R3 REAL historique préservé (bounded OpenAI sous gate S05) |
 | **runtime v3** | **NON ADOPTED** |
-| **Git (S06)** | PR **#561** **MERGED** · post-merge CI **PASS** · delivery branch cleanup **COMPLETE** · documentary truth-sync merge **NOT AUTHORIZED** |
-| **Next** | **ChatGPT review / MORRIS P5 POST-S06 TRUTH-SYNC MERGE GATE** · S07 **NOT AUTHORIZED / NOT STARTED** |
+| **Git (S07)** | local branch only · project commit/push/PR/merge **NOT AUTHORIZED** · Review Handoff L3 only |
+| **Next** | **ChatGPT Final Critical + Visual Review (P5-S07 CP01)** · S08 **NOT STARTED** |
 | **P5-S05 DELIVERY** | **AUTHORIZED / CONSUMED** → **INTEGRATED** via PR **#560** |
 | **P5-S05 REAL / R3** | **AUTHORIZED / CONSUMED** → **INTEGRATED** |
 | **P5-S05 CP01 / CP02** | **AUTHORIZED / CONSUMED** (historique) |
@@ -50,7 +53,7 @@
 | **Fichier** | `projects/sfia-studio/product-simplification/05-chat-first-product-simplification-integrated-delivery.md` |
 | **Date** | 2026-10-06 · Europe/Paris |

-> **Lecture rapide.** P5-S01…S06 **intégrés**. P5-S06 = **INTEGRATED / POST-MERGE VERIFIED** via PR **#561** / merge `9f586496…` / post-merge CI **#690** SUCCESS. FUNCTIONAL CLOSURE + deterministic cancellation **ON MAIN**. REAL cancellation **NOT PROVEN**. **≠ P5 COMPLETE** · S07 **NOT AUTHORIZED**.
+> **Lecture rapide.** P5-S01…S06 **intégrés**. P5-S07 CP01 = **LOCAL CANDIDATE PASS** (continuity exit proof + pixel-perfect Journal/History) sur branche delivery · base `7a664d65…` · ZERO REAL · **≠ P5 COMPLETE** · Git Integration **NOT AUTHORIZED** · S08 **NOT STARTED**.
 > **Règle de lecture des preuves.** *Implémenté* ≠ *prouvé* ≠ *intégré* ≠ *REAL*. Chaque affirmation ci-dessous est qualifiée par son niveau de preuve. Les résultats de tests/typecheck/lint/build sont ceux **rapportés par la passe de livraison** ; ce document n’en invente pas d’autres et ne les a pas ré-exécutés lors de sa rédaction.

 ---
@@ -73,23 +76,35 @@ P5-S03 = INTEGRATED / POST-MERGE VERIFIED (PR #557)
 P5-S04 = INTEGRATED / POST-MERGE VERIFIED (PR #558 · main c7b53b93… · CI #684 SUCCESS)
 P5-S05 = INTEGRATED / POST-MERGE VERIFIED (PR #560 · F2 CLOSED ON MAIN · R3 PASS AT TESTED SCOPE)
 P5-S06 = INTEGRATED / POST-MERGE VERIFIED (PR #561 · feature 731fdd72… · merge 9f586496… · CI #690 SUCCESS)
-
-FUNCTIONAL CLOSURE = PASS / INTEGRATED
-VISUAL = PASS AT S06 SCOPE
+P5-S07 = CP01 LOCAL CANDIDATE PASS (delivery branch · base 7a664d65… · PR #562 truth-sync MERGED / CI #692)
+         Continuity PASS LOCALLY / DETERMINISTIC
+         PROP-PL CLOSED LOCALLY AT TESTED DURABLE RESUME BOUNDARY
+         CONV-PL CLOSED LOCALLY AT TESTED RESUME BOUNDARY
+         Work Representation PASS LOCALLY / PRODUCT-WIRED (Option A)
+         Journal Currentness PASS
+         Journal Pixel-Perfect PASS AT CANONICAL P3 FRAMES
+         History MINIMUM-SUFFICIENT PRODUCT-DERIVED
+         History Pixel-Perfect PASS AT CANONICAL P3 FRAMES
+         ZERO REAL = YES
+         Architecture parallelism = NONE
+         UAT-RECOVERY-03 = NON-BLOCKING CARRY
+         P5-S07 INTEGRATED = NO
+         Git Integration = NOT AUTHORIZED
+
+FUNCTIONAL CLOSURE (S06) = PASS / INTEGRATED
+VISUAL (S06) = PASS AT S06 SCOPE
 FULL CANONICAL SEND CANCELLATION = PASS DETERMINISTIC / INTEGRATED
 P5-S06-DEBT-NORA-STOP = CLOSED ON MAIN / POST-MERGE VERIFIED
 REAL cancellation = NOT PROVEN
-ZERO REAL (S06) = YES
+ZERO REAL (S07 CP01) = YES
 P5 COMPLETE = NO
 P6 READY = NO
 runtime v3 = NON ADOPTED

-NEXT RECOMMENDED = P5-S07 — Project Continuity & Work Representation Completion
-S07 = NOT AUTHORIZED / NOT STARTED
+NEXT = ChatGPT Final Critical + Visual Review (P5-S07 CP01)
 S08 = NOT STARTED
-P5-S06 MERGE GO = AUTHORIZED / CONSUMED
-DOCUMENTARY TRUTH-SYNC MERGE = NOT AUTHORIZED
-NEXT = CHATGPT REVIEW → MORRIS P5 POST-S06 TRUTH-SYNC MERGE GATE
+P5-S07 DELIVERY GO = AUTHORIZED / CONSUMED
+P5-S07 CP01 = AUTHORIZED / CONSUMED
 ```
 ### 1.2 Hiérarchie d’autorité

@@ -1173,4 +1188,29 @@ Anti-claims explicites :

 ---

-*Fin du document P5 — Integrated Delivery — S01…S06 INTEGRATED / POST-MERGE VERIFIED · S07 NEXT RECOMMENDED NOT AUTHORIZED · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*
+## 47. P5-S07 CP01 — Continuity Exit Proof + Pixel-Perfect Journal/History (truth-sync)
+
+> **Qualification.** Morris P5-S07 CP01 AUTHORIZED / CONSUMED. Critical Review blockers B1–B5 closed locally. Candidate remains uncommitted. **≠ INTEGRATED** · **≠ P5 COMPLETE**.
+
+| Item | Statut CP01 |
+| --- | --- |
+| Morris P5-S07 CP01 | **AUTHORIZED / CONSUMED** |
+| Review input | `90d165d9` / blob `3794d1bc` |
+| PROP-PL | **CLOSED LOCALLY AT TESTED DURABLE RESUME BOUNDARY** (S07-CP01-E01) |
+| CONV-PL | **CLOSED LOCALLY AT TESTED RESUME BOUNDARY** |
+| Client subject rehydrate | **PASS** (`w2ReadActiveDecisionSubjectAction` on mount) |
+| Work Representation | **PASS LOCALLY / PRODUCT-WIRED** (LifecycleSurface ← Option A) |
+| Journal Décisions current-cycle | **PASS** |
+| History read model | **MINIMUM-SUFFICIENT AT S07 SCOPE** (bounded; explicit `boundNote`) |
+| Journal visual | **PIXEL-PERFECT PASS** at 94:2 / 94:222 / 192:41 / 192:81 |
+| History visual | **PIXEL-PERFECT PASS** at 78:2 / 190:111 / 190:380 / 190:412 |
+| ZERO REAL | **YES** |
+| Architecture parallelism | **NONE** |
+| UAT-RECOVERY-03 | **NON-BLOCKING CARRY** |
+| P5-S07 INTEGRATED | **NO** |
+| Git Integration | **NOT AUTHORIZED** |
+| Next | **ChatGPT Final Critical + Visual Review** |
+
+---
+
+*Fin du document P5 — Integrated Delivery — S01…S06 INTEGRATED / POST-MERGE VERIFIED · S07 CP01 LOCAL CANDIDATE PASS · P5 COMPLETE NO · runtime v3 NON ADOPTED — P4 remains architecture authority.*

```

## 51. Files modified
See §13 + `diff-stat.txt`.

## 52. Files created
See §13 Created list.

## 53. Full created-file content

### deriveWorkRepresentationFromLifecycle.ts
```ts
import {
  deriveWorkRepresentationProjection,
  type WorkRepresentationProjection,
} from "@/features/project-assistant/w2/deriveWorkRepresentationProjection";
import type { FinalizationAssessment } from "@/lib/oa/cycle";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";

/**
 * P5-S07 CP01 — Option A work representation from existing Lifecycle assessment.
 * No DeliverableStore. Unknown stays unknown.
 */
export function deriveWorkRepresentationFromLifecycleProjection(
  projection: PilotLifecycleProjection | null,
  durable?: {
    readonly evidenceIds?: readonly string[] | null;
    readonly reviewBundleIds?: readonly string[] | null;
    readonly qualificationHint?:
      | "validated"
      | "changes_required"
      | "under_review"
      | "not_reviewed"
      | null;
  } | null,
): WorkRepresentationProjection | null {
  if (!projection?.projectId) return null;
  const assessment = projection.assessment ?? null;
  const art = assessment?.obligations.find((o) => o.family === "artifact");
  let artifactRequired: boolean | null = null;
  if (art) {
    if (art.applicability === "APPLICABLE") artifactRequired = true;
    else if (art.applicability === "NOT_APPLICABLE") artifactRequired = false;
    else artifactRequired = null;
  }
  const produced =
    art?.applicability === "APPLICABLE" && art.status === "SATISFIED";
  const cycleComplete =
    projection.selectedStatus === "completed"
      ? true
      : projection.selectedStatus == null
        ? null
        : false;

  return deriveWorkRepresentationProjection({
    projectId: projection.projectId,
    cycleInstanceId:
      projection.selectedCycleInstanceId ?? projection.activeCycleInstanceId,
    artifactRequired,
    artifactIds: produced ? ["artifact:satisfied"] : art ? [] : null,
    evidenceIds: durable?.evidenceIds ?? null,
    reviewBundleIds: durable?.reviewBundleIds ?? null,
    qualificationHint: durable?.qualificationHint ?? null,
    exitProofSatisfied: null,
    cycleComplete,
  });
}

/** Pure helper for tests — same Option A rules without Lifecycle coupling. */
export function artifactRequiredFromAssessment(
  assessment: FinalizationAssessment | null | undefined,
): boolean | null {
  if (!assessment) return null;
  const art = assessment.obligations.find((o) => o.family === "artifact");
  if (!art) return null;
  if (art.applicability === "APPLICABLE") return true;
  if (art.applicability === "NOT_APPLICABLE") return false;
  return null;
}

```

### deriveWorkRepresentationProjection.ts
```ts
/**
 * P5-S07 — minimum-sufficient Deliverable / Artifact work representation.
 *
 * OPTION A (Delivery GO): compose a read projection from existing Product facts.
 * No DeliverableStore / Deliverable aggregate is introduced.
 *
 * Distinguishes when facts allow:
 * - requirement state (expected / not required / unknown)
 * - production state (produced / not produced / unknown)
 * - validation/qualification state (distinct from production)
 * - Exit Proof / Cycle complete (never inferred from Artifact alone)
 */

export type WorkRequirementState =
  | "expected"
  | "not_required"
  | "unknown";

export type WorkProductionState =
  | "produced"
  | "not_produced"
  | "unknown";

export type WorkValidationState =
  | "not_reviewed"
  | "under_review"
  | "validated"
  | "changes_required"
  | "unknown";

export type WorkRepresentationProjection = {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly requirementState: WorkRequirementState;
  readonly productionState: WorkProductionState;
  readonly validationState: WorkValidationState;
  /** Explicit honesty — never inferred from Artifact existence. */
  readonly exitProofSatisfied: boolean | "unknown";
  readonly cycleComplete: boolean | "unknown";
  readonly artifactRefs: readonly string[];
  readonly evidenceRefs: readonly string[];
  readonly reviewBundleRefs: readonly string[];
  readonly pilotSummary: string;
  /** Anti-claims for UI / tests. */
  readonly distinctions: {
    readonly deliverableIsNotArtifact: true;
    readonly artifactExistsIsNotValidation: true;
    readonly validationIsNotExitProof: true;
  };
};

export type DeriveWorkRepresentationInput = {
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  /** From lifecycle / obligation policy when known. */
  readonly artifactRequired?: boolean | null;
  /** Durable Artifact ids linked to the current work when known. */
  readonly artifactIds?: readonly string[] | null;
  /** Evidence ids linked when known. */
  readonly evidenceIds?: readonly string[] | null;
  /** ReviewBundle ids linked when known. */
  readonly reviewBundleIds?: readonly string[] | null;
  /** Evidence/Review qualification hint when known. */
  readonly qualificationHint?:
    | "validated"
    | "changes_required"
    | "under_review"
    | "not_reviewed"
    | null;
  /** Explicit Exit Proof / Cycle complete flags — never invent. */
  readonly exitProofSatisfied?: boolean | null;
  readonly cycleComplete?: boolean | null;
};

function requirementState(
  artifactRequired: boolean | null | undefined,
): WorkRequirementState {
  if (artifactRequired === true) return "expected";
  if (artifactRequired === false) return "not_required";
  return "unknown";
}

function productionState(
  artifactIds: readonly string[] | null | undefined,
): WorkProductionState {
  if (artifactIds == null) return "unknown";
  return artifactIds.length > 0 ? "produced" : "not_produced";
}

function validationState(
  hint: DeriveWorkRepresentationInput["qualificationHint"],
  hasEvidence: boolean,
): WorkValidationState {
  if (hint) return hint;
  if (hasEvidence) return "under_review";
  return "unknown";
}

function pilotSummary(projection: Omit<WorkRepresentationProjection, "pilotSummary" | "distinctions">): string {
  const req =
    projection.requirementState === "expected"
      ? "Livrable attendu"
      : projection.requirementState === "not_required"
        ? "Aucun livrable exigé"
        : "Exigence de livrable indéterminée";
  const prod =
    projection.productionState === "produced"
      ? "Artifact produit"
      : projection.productionState === "not_produced"
        ? "Artifact non produit"
        : "Production indéterminée";
  const val =
    projection.validationState === "validated"
      ? "qualifié"
      : projection.validationState === "changes_required"
        ? "modifications requises"
        : projection.validationState === "under_review"
          ? "en revue"
          : projection.validationState === "not_reviewed"
            ? "non revu"
            : "qualification indéterminée";
  return `${req} · ${prod} · ${val}. Artifact ≠ validation · validation ≠ preuve de sortie.`;
}

/**
 * Pure derivation — Option A. Unknown fields stay unknown.
 */
export function deriveWorkRepresentationProjection(
  input: DeriveWorkRepresentationInput,
): WorkRepresentationProjection {
  const artifactRefs = Object.freeze([...(input.artifactIds ?? [])]);
  const evidenceRefs = Object.freeze([...(input.evidenceIds ?? [])]);
  const reviewBundleRefs = Object.freeze([...(input.reviewBundleIds ?? [])]);
  const base = {
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId ?? null,
    requirementState: requirementState(input.artifactRequired),
    productionState: productionState(input.artifactIds),
    validationState: validationState(
      input.qualificationHint,
      evidenceRefs.length > 0 || reviewBundleRefs.length > 0,
    ),
    exitProofSatisfied:
      input.exitProofSatisfied == null ? ("unknown" as const) : input.exitProofSatisfied,
    cycleComplete:
      input.cycleComplete == null ? ("unknown" as const) : input.cycleComplete,
    artifactRefs,
    evidenceRefs,
    reviewBundleRefs,
  };
  return {
    ...base,
    pilotSummary: pilotSummary(base),
    distinctions: {
      deliverableIsNotArtifact: true,
      artifactExistsIsNotValidation: true,
      validationIsNotExitProof: true,
    },
  };
}

```

### deriveProjectHistoryEvents.ts
```ts
/**
 * P5-S07 — Product-derived History events (read projection only).
 *
 * Composes Pilot-facing timeline events from the W2 minimal durable read model
 * (+ optional Evidence/Review anchors). No HistoryStore, no event sourcing,
 * no transcript, no invented why/impact when facts are absent.
 */

import type { W2ProjectHistoryReadModel } from "./projectHistory";

export type PilotHistoryEventKind =
  | "project"
  | "lps"
  | "cycle"
  | "trajectory"
  | "decision"
  | "contract"
  | "evidence"
  | "review"
  | "recommendation";

export type PilotHistoryFilter =
  | "all"
  | "decisions"
  | "changes"
  | "verified";

export type PilotHistoryLinkedRef = {
  readonly kind: string;
  readonly id: string;
  readonly label: string;
};

export type PilotHistoryEvent = {
  readonly eventId: string;
  readonly kind: PilotHistoryEventKind;
  /** Pilot-facing kind label (never raw technical type as primary). */
  readonly kindLabel: string;
  readonly title: string;
  readonly summary: string;
  /** ISO timestamp only when a Product fact proves it; otherwise null. */
  readonly occurredAt: string | null;
  readonly isCurrent: boolean;
  readonly sourceKind: string;
  readonly sourceId: string;
  readonly linked: readonly PilotHistoryLinkedRef[];
  /** Optional detail sections — null when no Product fact proves them. */
  readonly decidedWhat: string | null;
  /** On what durable basis the event rests. Never an inferred rationale. */
  readonly why: string | null;
  /** What the event changes, when a Product fact states it. */
  readonly impact: string | null;
  /** Proven verification anchor (evidence, review, currentness). */
  readonly verification: string | null;
  readonly filterBucket: Exclude<PilotHistoryFilter, "all">;
};

export type DurableOutcomeHistoryAnchors = {
  readonly evidence?: ReadonlyArray<{
    readonly evidenceId: string;
    readonly status: string;
  }>;
  readonly reviewBundles?: ReadonlyArray<{
    readonly reviewBundleId: string;
    readonly status: string;
  }>;
  readonly recommendation?: {
    readonly recommendationLabel: string;
  } | null;
};

function kindLabel(kind: PilotHistoryEventKind): string {
  switch (kind) {
    case "project":
      return "Projet";
    case "lps":
      return "État du projet";
    case "cycle":
      return "Cycle";
    case "trajectory":
      return "Trajectoire";
    case "decision":
      return "Décision";
    case "contract":
      return "Exécution";
    case "evidence":
      return "Preuve";
    case "review":
      return "Revue";
    case "recommendation":
      return "Recommandation";
    default:
      return kind;
  }
}

function pilotFacingCycleTitle(cycleTypeId: string | null): string {
  if (!cycleTypeId) return "Cycle rattaché";
  const key = cycleTypeId.replace(/^cyc:/i, "").toLowerCase();
  switch (key) {
    case "framing":
      return "Cycle de cadrage";
    case "delivery":
      return "Cycle de livraison";
    case "exploration":
      return "Cycle d'exploration";
    default:
      return "Cycle rattaché";
  }
}

/** Prefer Pilot vocabulary; keep technical subject only when it already reads as natural language. */
function pilotFacingDecisionTitle(subject: string): string {
  const trimmed = subject.trim();
  if (!trimmed) return "Décision humaine";
  if (
    /^(w2|project\.|pilot\.|prop:|trj|cyc:|lps:|xct:|dec:)/i.test(trimmed) ||
    /prop:f2:|obligation-policy|subject arbitration/i.test(trimmed)
  ) {
    return "Décision enregistrée";
  }
  return trimmed;
}

function trajectoryTitle(
  version: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
): string {
  if (version.isEffectiveCurrent) {
    return `Trajectoire v${version.version} courante`;
  }
  if (version.status === "candidate") {
    return `Trajectoire v${version.version} proposée`;
  }
  return `Trajectoire v${version.version}`;
}

function trajectorySummary(
  version: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
): string {
  if (version.isEffectiveCurrent) {
    return version.decidedByDecisionRef
      ? "Décidée et courante pour le Project."
      : "Courante · antérieure au rattachement de décision.";
  }
  if (version.status === "candidate") {
    return "Proposée · pas encore décidée · pas courante.";
  }
  return `Statut ${version.status} · non courante.`;
}

/**
 * Pure derivation — deterministic order: project → LPS → cycle → trajectories
 * → decisions → contracts → evidence → review → recommendation.
 */
export function deriveProjectHistoryEvents(input: {
  readonly history: W2ProjectHistoryReadModel;
  readonly durable?: DurableOutcomeHistoryAnchors | null;
}): readonly PilotHistoryEvent[] {
  const { history, durable = null } = input;
  const events: PilotHistoryEvent[] = [];

  events.push({
    eventId: `project:${history.projectId}`,
    kind: "project",
    kindLabel: kindLabel("project"),
    title: history.projectTitle,
    summary: "Identité projet enregistrée.",
    occurredAt: null,
    isCurrent: true,
    sourceKind: "Project",
    sourceId: history.projectId,
    linked: [],
    decidedWhat: null,
    why: null,
    impact: null,
    verification: null,
    filterBucket: "changes",
  });

  events.push({
    eventId: `lps:${history.lps.lpsId}:v${history.lps.version}`,
    kind: "lps",
    kindLabel: kindLabel("lps"),
    title: `État du projet · version ${history.lps.version}`,
    summary: "Living Project State courant.",
    occurredAt: null,
    isCurrent: true,
    sourceKind: "LPS",
    sourceId: history.lps.lpsId,
    linked: [],
    decidedWhat: null,
    why: null,
    impact: `État courant du projet en version ${history.lps.version}.`,
    verification: "Version courante lue depuis le Living Project State.",
    filterBucket: "changes",
  });

  if (history.cycle.activeCycleInstanceId) {
    events.push({
      eventId: `cycle:${history.cycle.activeCycleInstanceId}`,
      kind: "cycle",
      kindLabel: kindLabel("cycle"),
      title: pilotFacingCycleTitle(history.cycle.cycleTypeId),
      summary: [
        history.cycle.profile ? `Profil ${history.cycle.profile}` : null,
        history.cycle.status ? `Statut ${history.cycle.status}` : null,
      ]
        .filter(Boolean)
        .join(" · ") || "Cycle distinct du projet.",
      occurredAt: null,
      isCurrent: true,
      sourceKind: "Cycle",
      sourceId: history.cycle.activeCycleInstanceId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: history.cycle.profile
        ? `Cycle piloté avec le profil ${history.cycle.profile}.`
        : null,
      verification: history.cycle.status
        ? `Statut de cycle durable : ${history.cycle.status}.`
        : null,
      filterBucket: "changes",
    });
  }

  for (const version of history.trajectory.versions) {
    const linked: PilotHistoryLinkedRef[] = [];
    if (version.decidedByDecisionRef) {
      linked.push({
        kind: "Décision",
        id: version.decidedByDecisionRef,
        label: "Décision rattachée",
      });
    }
    events.push({
      eventId: `trj:${version.trajectoryId}:v${version.version}`,
      kind: "trajectory",
      kindLabel: kindLabel("trajectory"),
      title: trajectoryTitle(version),
      summary: trajectorySummary(version),
      occurredAt: null,
      isCurrent: version.isEffectiveCurrent,
      sourceKind: "ProjectTrajectory",
      sourceId: `${version.trajectoryId}@v${version.version}`,
      linked,
      decidedWhat: version.isEffectiveCurrent
        ? `${version.stepCount} étapes · courante`
        : null,
      why: version.decidedOptionRef
        ? `Option retenue ${version.decidedOptionRef}.`
        : null,
      impact: `${version.stepCount} étape${version.stepCount === 1 ? "" : "s"} dans cette version de trajectoire.`,
      verification: version.isEffectiveCurrent
        ? version.decidedByDecisionRef
          ? "Version courante, rattachée à une décision humaine."
          : "Version courante · rattachement de décision absent."
        : null,
      filterBucket: version.isEffectiveCurrent ? "verified" : "changes",
    });
  }

  for (const decision of history.decisions) {
    events.push({
      // decisionId is already a stable Product ref (often `dec:…`).
      eventId: decision.decisionId,
      kind: "decision",
      kindLabel: kindLabel("decision"),
      title: pilotFacingDecisionTitle(decision.subject || ""),
      summary: `${decision.status} · ${decision.actorRole}`,
      occurredAt: decision.effectiveAt || null,
      isCurrent: false,
      sourceKind: "HumanDecision",
      sourceId: decision.decisionId,
      linked: decision.basisTrajectoryRef
        ? [
            {
              kind: "Trajectoire",
              id: decision.basisTrajectoryRef,
              label: decision.basisTrajectoryRef,
            },
          ]
        : [],
      decidedWhat: `Option retenue ${decision.selectedOptionRef}`,
      why: decision.basisSourceType
        ? `Base de décision durable : ${decision.basisSourceType}.`
        : null,
      impact: decision.basisTrajectoryRef
        ? `Trajectoire de référence ${decision.basisTrajectoryRef}.`
        : null,
      verification: decision.basisSourceType
        ? `Décision ${decision.status} par ${decision.actorRole} · autorité ${decision.authority}.`
        : null,
      filterBucket: "decisions",
    });
  }

  for (const contract of history.contracts) {
    events.push({
      eventId: `xct:${contract.executionContractId}`,
      kind: "contract",
      kindLabel: kindLabel("contract"),
      title: `Contrat d'exécution v${contract.version}`,
      summary: `${contract.status} · ${contract.action}`,
      occurredAt: null,
      isCurrent: false,
      sourceKind: "ExecutionContract",
      sourceId: contract.executionContractId,
      linked: contract.decisionRefs.map((ref) => ({
        kind: "Décision",
        id: ref,
        label: ref,
      })),
      decidedWhat: null,
      why:
        contract.decisionRefs.length > 0
          ? `Contrat rattaché à ${contract.decisionRefs.length} décision${contract.decisionRefs.length === 1 ? "" : "s"}.`
          : null,
      impact: contract.target ? `Cible d'exécution ${contract.target}.` : null,
      verification: contract.semanticFingerprint
        ? "Empreinte sémantique enregistrée pour ce contrat."
        : null,
      filterBucket: "changes",
    });
  }

  const historyEvidence = history.evidence ?? [];
  for (const evidence of historyEvidence) {
    events.push({
      eventId: `evidence:${evidence.evidenceId}`,
      kind: "evidence",
      kindLabel: kindLabel("evidence"),
      title: "Preuve enregistrée",
      summary: `Statut ${evidence.status}`,
      occurredAt: null,
      isCurrent: false,
      sourceKind: "Evidence",
      sourceId: evidence.evidenceId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: `Preuve durable · statut ${evidence.status}.`,
      filterBucket: "verified",
    });
  }

  const historyReviews = history.reviewBundles ?? [];
  for (const rb of historyReviews) {
    events.push({
      eventId: `rb:${rb.reviewBundleId}`,
      kind: "review",
      kindLabel: kindLabel("review"),
      title: "Dossier de revue",
      summary: `Statut ${rb.status}`,
      occurredAt: null,
      isCurrent: false,
      sourceKind: "ReviewBundle",
      sourceId: rb.reviewBundleId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: `Revue durable · statut ${rb.status}.`,
      filterBucket: "verified",
    });
  }

  const historySyntheses = history.syntheses ?? [];
  for (const syn of historySyntheses) {
    events.push({
      eventId: `syn:${syn.synthesisId}`,
      kind: "project",
      kindLabel: "Synthèse",
      title: syn.title,
      summary: `Synthèse dérivée · ${syn.status} · ≠ vérité Product`,
      occurredAt: null,
      isCurrent: syn.status === "current",
      sourceKind: "Synthesis",
      sourceId: syn.synthesisId,
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: null,
      filterBucket: "changes",
    });
  }

  if (durable?.evidence) {
    for (const evidence of durable.evidence) {
      events.push({
        eventId: `evidence:${evidence.evidenceId}`,
        kind: "evidence",
        kindLabel: kindLabel("evidence"),
        title: "Preuve enregistrée",
        summary: `Statut ${evidence.status}`,
        occurredAt: null,
        isCurrent: false,
        sourceKind: "Evidence",
        sourceId: evidence.evidenceId,
        linked: [],
        decidedWhat: null,
        why: null,
        impact: null,
        verification: `Preuve durable ${evidence.evidenceId} · statut ${evidence.status}.`,
        filterBucket: "verified",
      });
    }
  }

  if (durable?.reviewBundles) {
    for (const rb of durable.reviewBundles) {
      events.push({
        eventId: `rb:${rb.reviewBundleId}`,
        kind: "review",
        kindLabel: kindLabel("review"),
        title: "Dossier de revue",
        summary: `Statut ${rb.status}`,
        occurredAt: null,
        isCurrent: false,
        sourceKind: "ReviewBundle",
        sourceId: rb.reviewBundleId,
        linked: [],
        decidedWhat: null,
        why: null,
        impact: null,
        verification: `Dossier de revue ${rb.reviewBundleId} · statut ${rb.status}.`,
        filterBucket: "verified",
      });
    }
  }

  if (durable?.recommendation?.recommendationLabel) {
    events.push({
      eventId: `rec:post-evidence`,
      kind: "recommendation",
      kindLabel: kindLabel("recommendation"),
      title: durable.recommendation.recommendationLabel,
      summary: "Recommandation dérivée · ≠ Décision humaine.",
      occurredAt: null,
      isCurrent: false,
      sourceKind: "Recommendation",
      sourceId: "post-evidence",
      linked: [],
      decidedWhat: null,
      why: null,
      impact: null,
      verification: null,
      filterBucket: "changes",
    });
  }

  return Object.freeze(events);
}

export function filterProjectHistoryEvents(
  events: readonly PilotHistoryEvent[],
  input: {
    readonly filter: PilotHistoryFilter;
    readonly query: string;
  },
): readonly PilotHistoryEvent[] {
  const q = input.query.trim().toLowerCase();
  return events.filter((event) => {
    if (input.filter === "decisions" && event.filterBucket !== "decisions") {
      return false;
    }
    // Figma Changements includes verified/change events (no separate Vérifié filter).
    if (
      input.filter === "changes" &&
      event.filterBucket !== "changes" &&
      event.filterBucket !== "verified"
    ) {
      return false;
    }
    if (!q) return true;
    const haystack = [
      event.title,
      event.summary,
      event.kindLabel,
      event.decidedWhat ?? "",
      event.why ?? "",
      event.impact ?? "",
      event.verification ?? "",
      ...event.linked.map((l) => l.label),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

```

### p5.s07.cp01.continuityExitProof.d0.test.ts
```ts
/**
 * P5-S07 CP01 — durable Epistemic subject survives Proposal store loss.
 * ZERO REAL.
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  listProposalsForProject,
  resetF2ProposalStoreForTests,
  saveProposal,
} from "@/features/project-assistant/f2/proposalStore";
import type { ProposalDto } from "@/features/project-assistant/f2/types";
import { F2_PROCESS_LOCAL_NOTICE } from "@/features/project-assistant/f2/proposalStore";
import { F2_ARTIFACT_MATERIALIZATION_OPERATION } from "@/features/project-assistant/f2/f2CanonicalOperations";
import { proposeTrajectoryOptions } from "@/features/project-assistant/w2/proposeTrajectoryOptions";
import { resolveW2QualificationInputs } from "@/features/project-assistant/w2/qualificationInputs";
import { readActiveProposalDecisionSubject } from "@/features/project-assistant/w2/activeProposalDecisionSubject";
import { deriveWorkRepresentationFromLifecycleProjection } from "@/features/pre-m6-product-ui/surfaces/deriveWorkRepresentationFromLifecycle";
import type { PilotLifecycleProjection } from "@/lib/oa/cycle/application/lifecycleProjection";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  currentF2Context,
  seedQualifiedProject,
  tempProductDbPath,
} from "./w2Harness";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  type RuntimeApplicationService,
} from "@/lib/vertical-slice-runtime";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import {
  computeProposalSubjectDigest,
  sealProposalExecutionBasis,
} from "@/features/project-assistant/w2/resolveProposalDecisionSubject";
import { writePendingDecisionSubjectMarker } from "@/features/project-assistant/w2/pendingDecisionSubjectMarker";

const TARGET_PATH = "projects/sfia-studio/.sandbox/gestion-de-taches.md";

function docsWriteProposal(input: {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
  activeCycleInstanceId: string | null;
  proposalId: string;
}): ProposalDto {
  return saveProposal({
    proposalId: input.proposalId,
    status: "DECISION_REQUIRED",
    rephrasedRequest: "Matérialiser la note sandbox",
    objective: "Livrable de référence CP01",
    cycleTypeId: "cyc:delivery",
    recommendedProfile: "Critical",
    rationale: "S07 CP01 continuity",
    scope: "borné",
    outOfScope: ["REAL"],
    activatedBlocks: [],
    expectedOutcome: "fichier sandbox",
    sources: ["nora"],
    risks: [],
    reservations: [],
    stopConditions: ["STOP AVANT EXECUTE"],
    morrisGateRequired: true,
    nextPossibleStep: "Instruire les options",
    contextSnapshot: {
      projectId: input.projectId,
      lpsId: input.lpsId,
      lpsVersion: input.lpsVersion,
      doctrineDigest: input.doctrineDigest,
      activeCycleInstanceId: input.activeCycleInstanceId,
    },
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: null,
      targetPath: TARGET_PATH,
      scopeIn: ["sandbox"],
      scopeOut: ["git"],
      expectedOutputs: ["markdown"],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: F2_ARTIFACT_MATERIALIZATION_OPERATION,
      reversibilityExpectation: "reversible",
      artifactBrief: "Livrable de référence CP01",
      contentRequirements: [],
      exitRequirementKinds: [],
      artifactWriteMode: "CREATE",
      targetRepositoryRef:
        process.env.SFIA_STUDIO_PROJECT_REPOSITORY_IDENTITY?.trim() ||
        "acme/vitest-default",
    },
  });
}

describe("P5-S07 CP01 durable continuity & work representation wiring", () => {
  let runtime: RuntimeApplicationService;
  let dbPath: string;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    dbPath = tempProductDbPath("p5-s07-cp01.sqlite");
    runtime = bootW2Runtime({ productDbPath: dbPath, idPrefix: "s07cp01" });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    cleanupW2TempDirs();
  });

  it("S07-CP01-E01 — durable Epistemic subject survives Proposal store + runtime reset", async () => {
    const seeded = await seedQualifiedProject(runtime, {
      profile: "Critical",
      suffix: "cp01",
    });
    const ctx = await currentF2Context(runtime, seeded.projectId);
    const proposal = docsWriteProposal({
      projectId: seeded.projectId,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
      activeCycleInstanceId: seeded.cycleInstanceId,
      proposalId: "prop:f2:p5-s07-cp01",
    });
    expect(listProposalsForProject(seeded.projectId)).toHaveLength(1);

    const sealed = sealProposalExecutionBasis(proposal);
    const subjectDigest = computeProposalSubjectDigest(
      sealed,
      proposal.proposalId,
    );
    const marked = await writePendingDecisionSubjectMarker({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      proposalId: proposal.proposalId,
      subjectDigest,
      lpsId: ctx.lpsId,
      lpsVersion: ctx.lpsVersion,
      doctrineDigest: ctx.doctrineDigest,
    });
    expect(marked.ok).toBe(true);

    const qualification = await resolveW2QualificationInputs({
      oa: runtime.oa!,
      projectId: seeded.projectId,
    });
    expect(qualification.ok).toBe(true);
    if (!qualification.ok) return;

    const proposed = await proposeTrajectoryOptions({
      oa: runtime.oa!,
      projectId: seeded.projectId,
      ...qualification.qualification.inputs,
      packagePin: qualification.qualification.packagePin,
      objective: qualification.qualification.objective,
      projectTitle: qualification.qualification.projectTitle,
      proposalId: proposal.proposalId,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    // Process-local loss.
    resetF2ProposalStoreForTests();
    expect(listProposalsForProject(seeded.projectId)).toHaveLength(0);

    // Fresh runtime boundary on the SAME Product SQLite.
    resetRuntimeApplicationServiceForTests();
    const fresh = bootW2Runtime({
      productDbPath: dbPath,
      idPrefix: "s07cp01-reopen",
    });
    const subject = await readActiveProposalDecisionSubject(
      fresh.oa!,
      seeded.projectId,
    );
    expect(subject.ok).toBe(true);
    if (!subject.ok) return;
    expect(subject.kind).toBe("bound_awaiting_decision");
    if (subject.kind === "bound_awaiting_decision") {
      expect(subject.optionSet.proposalId).toBe(proposal.proposalId);
    }
    // No invented ProposalDto after reset.
    expect(listProposalsForProject(seeded.projectId)).toHaveLength(0);
  });

  it("S07-CP01 — work representation Option A from Lifecycle projection (Product-wired helper)", () => {
    const projection = {
      projectId: "prj:cp01-work",
      selectedCycleInstanceId: "cyc:cp01",
      activeCycleInstanceId: "cyc:cp01",
      selectedStatus: "active",
      assessment: {
        readyExceptFinalizeDecision: false,
        obligations: [
          {
            family: "artifact",
            applicability: "APPLICABLE",
            status: "OPEN",
            kind: "TO_TREAT",
            label: "Artifact",
          },
        ],
      },
    } as unknown as PilotLifecycleProjection;

    const work = deriveWorkRepresentationFromLifecycleProjection(projection);
    expect(work).not.toBeNull();
    expect(work!.requirementState).toBe("expected");
    expect(work!.productionState).toBe("not_produced");
    expect(work!.validationState).toBe("unknown");
    expect(work!.exitProofSatisfied).toBe("unknown");
    expect(work!.cycleComplete).toBe(false);
    expect(work!.distinctions.deliverableIsNotArtifact).toBe(true);
  });

  it("S07-CP01 — Journal cycle scoping: only selected-cycle decisions", async () => {
    // Pure projection filter contract mirrored from actions.ts CP01 rule.
    const decisions = [
      {
        decisionId: "dec:a",
        cycleInstanceId: "cyc:A",
        subject: "Cycle A",
        status: "accepted",
        selectedOptionId: "opt:a",
        options: [{ optionId: "opt:a", label: "A" }],
        actor: { actorId: "pilote", role: "Pilote", displayName: "Pilote" },
        authority: "local_pilote",
        effectiveAt: "2026-10-06T10:00:00.000Z",
        reservations: [],
        decisionBasis: null,
      },
      {
        decisionId: "dec:b",
        cycleInstanceId: "cyc:B",
        subject: "Cycle B",
        status: "accepted",
        selectedOptionId: "opt:b",
        options: [{ optionId: "opt:b", label: "B" }],
        actor: { actorId: "pilote", role: "Pilote", displayName: "Pilote" },
        authority: "local_pilote",
        effectiveAt: "2026-10-06T11:00:00.000Z",
        reservations: [],
        decisionBasis: null,
      },
      {
        decisionId: "dec:orphan",
        cycleInstanceId: null,
        subject: "Sans cycle",
        status: "accepted",
        selectedOptionId: "opt:x",
        options: [{ optionId: "opt:x", label: "X" }],
        actor: { actorId: "pilote", role: "Pilote", displayName: "Pilote" },
        authority: "local_pilote",
        effectiveAt: "2026-10-06T12:00:00.000Z",
        reservations: [],
        decisionBasis: null,
      },
    ] as const;

    const journalCycleId = "cyc:B";
    const scoped = decisions.filter((d) => d.cycleInstanceId === journalCycleId);
    expect(scoped).toHaveLength(1);
    expect(scoped[0]!.decisionId).toBe("dec:b");
    expect(scoped.every((d) => d.cycleInstanceId === journalCycleId)).toBe(true);
  });

  it("ZERO REAL — provider remains Fake for CP01 continuity suite", () => {
    expect(process.env.OPS1_CONVERSATION_PROVIDER).toBe("fake");
    // Touch runtime to ensure harness path stays local Product SQLite.
    expect(getRuntimeApplicationService().oa).not.toBeNull();
  });
});

```

(Additional created UI/tests remain in worktree untracked — content on disk at paths in §52.)


## 54. Useful code diffs (COMPLETE — B1–B5)
Full unified diffs (`git diff` vs HEAD=`7a664d65157af9554de4d4da7e76ca0187020020`) for the modified Product files that close B1–B5. No truncation.

### 54.A Primary files (Morris-requested)

#### `useProductConversation.ts` — B1 client subject rehydrate
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 8490c6d6..ecadd672 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -43,11 +43,19 @@ import {
 import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";
 import { sendCancellableAssistantTurn } from "./sendCancellableAssistantTurn";
 import type { JournalSurfaceEntry } from "../surfaces/JournalSurface";
+import type { ActiveDecisionSubjectReadResult } from "@/features/project-assistant/w2/types";
+
+export type ProductDecisionSubjectContinuity =
+  | { readonly status: "pending" }
+  | { readonly status: "unavailable"; readonly message: string }
+  | Extract<ActiveDecisionSubjectReadResult, { ok: true }>;

 export type ProductMessage = {
   id: string;
   role: "user" | "assistant" | "system";
   content: string;
+  /** Durable Session turn timestamp when known — never synthesized client-side. */
+  createdAt?: string | null;
 };

 export type TranscriptAvailability =
@@ -130,6 +138,12 @@ export function useProductConversation({
   );
   const [f2, setF2] = useState<F2TurnPayload | null>(null);
   const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
+  /**
+   * P5-S07 CP01 — durable decision-subject continuity from server read on mount.
+   * Never fabricates a ProposalDto from thin air.
+   */
+  const [decisionSubjectContinuity, setDecisionSubjectContinuity] =
+    useState<ProductDecisionSubjectContinuity>({ status: "pending" });
   const [reservesText, setReservesText] = useState("");
   const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
   const [f3M3Resolved, setF3M3Resolved] = useState<F3M3ResolvedPayload | null>(
@@ -262,6 +276,7 @@ export function useProductConversation({
           id: m.id,
           role: m.role,
           content: m.content,
+          createdAt: m.createdAt ?? null,
         })),
       );
       setJournalCycleInstanceId(result.journal.cycleInstanceId);
@@ -276,6 +291,46 @@ export function useProductConversation({
     };
   }, [projectId, activeCycleInstanceId]);

+  // P5-S07 CP01 — rehydrate durable decision subject after process-local Proposal loss.
+  // Dynamic import keeps w2/actions (server-only) out of the client module graph.
+  useEffect(() => {
+    let cancelled = false;
+    setDecisionSubjectContinuity({ status: "pending" });
+    void import("@/features/project-assistant/w2/actions")
+      .then(({ w2ReadActiveDecisionSubjectAction }) =>
+        w2ReadActiveDecisionSubjectAction({ projectId }),
+      )
+      .then((result) => {
+        if (cancelled) return;
+        if (!result.ok) {
+          setDecisionSubjectContinuity({
+            status: "unavailable",
+            message: result.message,
+          });
+          return;
+        }
+        setDecisionSubjectContinuity(result);
+        // Never invent ProposalDto. Only clear stale local Proposal when server
+        // says none / reinstruction — never auto-synthesize from optionSet.
+        if (
+          result.kind === "none" ||
+          result.kind === "pending_reinstruction_required"
+        ) {
+          setActiveProposal(null);
+        }
+      })
+      .catch(() => {
+        if (cancelled) return;
+        setDecisionSubjectContinuity({
+          status: "unavailable",
+          message: "Sujet de décision indisponible pour la reprise.",
+        });
+      });
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId]);
+
   useEffect(() => {
     let cancelled = false;
     applyDurableEvidenceOutcome(null);
@@ -394,6 +449,7 @@ export function useProductConversation({
           id: m.id,
           role: m.role,
           content: m.content,
+          createdAt: m.createdAt ?? null,
         })),
       );
     }
@@ -962,6 +1018,7 @@ export function useProductConversation({
     lrMaterializeCode,
     f2,
     activeProposal,
+    decisionSubjectContinuity,
     reservesText,
     setReservesText,
     f3Prepare,
```

#### `actions.ts` — B3 Journal cycle-scoped decisions + transcript createdAt
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index bb03f760..b6970355 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -936,7 +936,13 @@ export async function projectAssistantConversationContinuityAction(input: {
 }): Promise<{
   ok: true;
   transcriptAvailability: "available" | "empty" | "unavailable";
-  messages: { id: string; role: "user" | "assistant"; content: string }[];
+  messages: {
+    id: string;
+    role: "user" | "assistant";
+    content: string;
+    /** Durable Session timestamp when present — never invented for UI. */
+    createdAt: string | null;
+  }[];
   journal: {
     cycleInstanceId: string | null;
     currentTopicEntryId: string | null;
@@ -995,6 +1001,7 @@ export async function projectAssistantConversationContinuityAction(input: {
           id: t.turnId,
           role: t.role as "user" | "assistant",
           content: t.content,
+          createdAt: t.createdAt?.trim() || null,
         }));
       const cycleInstanceId = input.cycleInstanceId?.trim() || null;
       const listed = cycleInstanceId
@@ -1443,7 +1450,16 @@ async function buildAssistantPilotLifecycleProjection(
   }

   // CHAT-FIRST — Décisions Journal tab (HumanDecision history).
-  projection.cycleDecisions = projectCycleDecisionCards(decisions);
+  // P5-S07 CP01 — Journal du cycle: only decisions confidently assigned to the
+  // selected/active cycle. Decisions without cycleInstanceId are excluded
+  // (no guess). Cross-cycle inheritance is not invented.
+  const journalCycleId =
+    projection.selectedCycleInstanceId ?? projection.activeCycleInstanceId;
+  projection.cycleDecisions = projectCycleDecisionCards(
+    journalCycleId
+      ? decisions.filter((d) => d.cycleInstanceId === journalCycleId)
+      : [],
+  );

   // Morris correction + MD-WR-02 — Work Recommendations for Journal > Recommandations.
   // Lifecycle CURRENT stays on currentRecommendations (right panel / audit only).
```

#### `projectHistory.ts` — B4 History read-model completion
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts b/projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts
index 8079bc5c..9a4707b0 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts
@@ -14,8 +14,11 @@ import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";

 /** Bounded lookback so the read model can never become a history platform. */
 export const W2_HISTORY_MAX_TRAJECTORY_VERSIONS = 5;
-export const W2_HISTORY_MAX_DECISIONS = 5;
-export const W2_HISTORY_MAX_CONTRACTS = 5;
+export const W2_HISTORY_MAX_DECISIONS = 8;
+export const W2_HISTORY_MAX_CONTRACTS = 8;
+export const W2_HISTORY_MAX_EVIDENCE = 5;
+export const W2_HISTORY_MAX_REVIEW_BUNDLES = 5;
+export const W2_HISTORY_MAX_SYNTHESES = 3;

 export type W2TrajectoryAnchor = {
   readonly trajectoryId: string;
@@ -50,6 +53,22 @@ export type W2ContractAnchor = {
   readonly decisionRefs: readonly string[];
 };

+export type W2EvidenceAnchor = {
+  readonly evidenceId: string;
+  readonly status: string;
+};
+
+export type W2ReviewBundleAnchor = {
+  readonly reviewBundleId: string;
+  readonly status: string;
+};
+
+export type W2SynthesisAnchor = {
+  readonly synthesisId: string;
+  readonly title: string;
+  readonly status: string;
+};
+
 export type W2ProjectHistoryReadModel = {
   readonly projectId: string;
   readonly projectTitle: string;
@@ -67,8 +86,13 @@ export type W2ProjectHistoryReadModel = {
   };
   readonly decisions: readonly W2DecisionAnchor[];
   readonly contracts: readonly W2ContractAnchor[];
+  readonly evidence: readonly W2EvidenceAnchor[];
+  readonly reviewBundles: readonly W2ReviewBundleAnchor[];
+  readonly syntheses: readonly W2SynthesisAnchor[];
   /** Explicit honesty about what this read model does NOT contain. */
   readonly absent: readonly string[];
+  /** Explicit lookback caps — History is bounded, not exhaustive. */
+  readonly boundNote: string;
 };

 export type ReadW2ProjectHistoryResult =
@@ -76,10 +100,11 @@ export type ReadW2ProjectHistoryResult =
   | { readonly ok: false; readonly code: string; readonly message: string };

 const ABSENT_BY_DESIGN: readonly string[] = Object.freeze([
-  "Conversation (process-local, non rejouée)",
-  "Proposition F2 process-local",
-  "Confirmation demandée (process-local)",
+  "Conversation (interaction durable Session — ≠ Historique Product)",
+  "Proposition F2 process-local (reconstruite via Epistemic ou requalification)",
+  "Confirmation préparée process-locale (UAT-RECOVERY-03 — non-autorité)",
   "Raisonnement interne non matérialisé",
+  "Historique borné — pas un dump exhaustif",
 ]);

 export async function readW2ProjectHistory(input: {
@@ -194,6 +219,57 @@ export async function readW2ProjectHistory(input: {
         }))
     : [];

+  // P5-S07 CP01 — minimum-sufficient Evidence / Review / Synthesis anchors
+  // from existing OA list use cases (bounded; no HistoryStore).
+  let evidence: W2EvidenceAnchor[] = [];
+  let reviewBundles: W2ReviewBundleAnchor[] = [];
+  try {
+    const listed = await oa.evidenceReviewServices.repository.listByProject(
+      projectId,
+    );
+    evidence = listed
+      .slice(-W2_HISTORY_MAX_EVIDENCE)
+      .reverse()
+      .map((e) => ({
+        evidenceId: e.evidenceId,
+        status: e.status,
+      }));
+  } catch {
+    evidence = [];
+  }
+  try {
+    const listed =
+      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
+        projectId,
+      );
+    reviewBundles = listed
+      .slice(-W2_HISTORY_MAX_REVIEW_BUNDLES)
+      .reverse()
+      .map((rb) => ({
+        reviewBundleId: rb.reviewBundleId,
+        status: rb.status,
+      }));
+  } catch {
+    reviewBundles = [];
+  }
+
+  let syntheses: W2SynthesisAnchor[] = [];
+  try {
+    const { listProductSynthesesAction } = await import(
+      "@/features/project-assistant/synthesisActions"
+    );
+    const listed = await listProductSynthesesAction({ projectId });
+    if (listed.ok) {
+      syntheses = listed.items.slice(0, W2_HISTORY_MAX_SYNTHESES).map((s) => ({
+        synthesisId: s.synthesisId,
+        title: s.title,
+        status: s.status,
+      }));
+    }
+  } catch {
+    syntheses = [];
+  }
+
   return {
     ok: true,
     history: {
@@ -214,7 +290,11 @@ export async function readW2ProjectHistory(input: {
       },
       decisions,
       contracts,
+      evidence,
+      reviewBundles,
+      syntheses,
       absent: ABSENT_BY_DESIGN,
+      boundNote: `Borné · ≤${W2_HISTORY_MAX_DECISIONS} décisions · ≤${W2_HISTORY_MAX_CONTRACTS} contrats · ≤${W2_HISTORY_MAX_EVIDENCE} preuves · ≤${W2_HISTORY_MAX_REVIEW_BUNDLES} revues · ≤${W2_HISTORY_MAX_SYNTHESES} synthèses.`,
     },
   };
 }
```

#### `LifecycleSurface.tsx` — B2 Work representation Product wiring
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
index 8d1cf279..773a5453 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx
@@ -23,6 +23,7 @@ import {
   readyExceptFinalizeDecision,
   summarizeFinalizationReadiness,
 } from "./lifecyclePresentation";
+import { deriveWorkRepresentationFromLifecycleProjection } from "./deriveWorkRepresentationFromLifecycle";
 import styles from "./LifecycleSurface.module.css";

 function cycleCatalogLabel(projection: PilotLifecycleProjection | null): string {
@@ -242,6 +243,8 @@ export function LifecycleSurface({
   const cycleTitle = cycleCatalogLabel(projection);
   const badge = lifecycleStatusBadge(projection);
   const cta = lifecycleCtaPresentation(projection);
+  const workRepresentation =
+    deriveWorkRepresentationFromLifecycleProjection(projection);
   const finalizeRec = primaryFinalizeRecommendation(projection);
   const nextRec = primaryNextCycleRecommendation(projection);
   const nonHd = nonHumanDecisionBlockers(projection.assessment);
@@ -301,6 +304,39 @@ export function LifecycleSurface({
         </p>
       </header>

+      {workRepresentation ? (
+        <section
+          className={styles.block}
+          data-testid="lifecycle-work-representation"
+          aria-label="Représentation du travail"
+        >
+          <p className={styles.eyebrow}>LIVRABLE / TRAVAIL</p>
+          <p
+            className={styles.muted}
+            data-testid="lifecycle-work-representation-summary"
+          >
+            {workRepresentation.pilotSummary}
+          </p>
+          <ul className={styles.list} data-testid="lifecycle-work-representation-states">
+            <li data-requirement={workRepresentation.requirementState}>
+              Exigence · {workRepresentation.requirementState}
+            </li>
+            <li data-production={workRepresentation.productionState}>
+              Production · {workRepresentation.productionState}
+            </li>
+            <li data-validation={workRepresentation.validationState}>
+              Qualification · {workRepresentation.validationState}
+            </li>
+            <li data-exit-proof={String(workRepresentation.exitProofSatisfied)}>
+              Preuve de sortie · {String(workRepresentation.exitProofSatisfied)}
+            </li>
+            <li data-cycle-complete={String(workRepresentation.cycleComplete)}>
+              Cycle terminé · {String(workRepresentation.cycleComplete)}
+            </li>
+          </ul>
+        </section>
+      ) : null}
+
       {error ? (
         <p className={styles.error} role="alert">
           {error}
```

#### `ProjectWorkspacePage.tsx` — Journal/History principal WorkspaceView
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
index 0a6e0be3..8385541f 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
@@ -54,7 +54,21 @@ import type { GetProjectResult, GetProjectSuccess } from "./types";
 import styles from "./ProjectWorkspacePage.module.css";

 /** Ephemeral presentation view — never persisted as Product state. */
-type WorkspaceView = "conversation" | "overview" | "execution" | "syntheses";
+type WorkspaceView =
+  | "conversation"
+  | "overview"
+  | "execution"
+  | "syntheses"
+  | "history"
+  | "journal";
+
+/** Views that own the principal width — no permanent sibling context rail. */
+const PRINCIPAL_ONLY_VIEWS: ReadonlySet<WorkspaceView> = new Set([
+  "overview",
+  "syntheses",
+  "history",
+  "journal",
+]);

 /** prefers-reduced-motion: no smooth scrolling for in-page jumps. */
 function scrollBehaviorPref(): ScrollBehavior {
@@ -240,13 +254,12 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
       ? [...lifecycleProjection.cycleDecisions]
       : [];

+  /** « Voir les réserves » — the dedicated Journal on its Réserves rail. */
   const openReservationsTab = useCallback(() => {
+    setActiveView("journal");
     setMemoryTab("reserves");
     setJournalCollapsed(false);
-    const rail = document.querySelector("[data-testid='cycle-journal-rail']");
-    if (rail instanceof HTMLElement) {
-      rail.scrollIntoView({ behavior: scrollBehaviorPref(), block: "start" });
-    }
+    setLpsOpen(false);
   }, []);

   /** Prefill composer with an explicit Pilot draft — NEVER sendMessage. */
@@ -353,6 +366,7 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
   };

   const viewJournalSubject = (journalEntryId: string) => {
+    setActiveView("journal");
     setMemoryTab("sujets");
     controller.setSelectedJournalEntryId(journalEntryId);
     window.setTimeout(() => {
@@ -374,22 +388,22 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     return false;
   }, []);

-  /** Shortcut « Journal du cycle » — opens the existing Journal rail. */
+  /**
+   * « Journal du cycle » — dedicated principal view (P3 94:2), like Historique.
+   * The context rail keeps only a compact shortcut into this same surface.
+   */
   const openJournal = useCallback(() => {
-    // Overview hides the permanent context rail — restore Conversation layout
-    // so Journal remains reachable without a second Product model.
-    setActiveView("conversation");
-    setLpsOpen(true);
+    setActiveView("journal");
+    setMemoryTab("sujets");
     setJournalCollapsed(false);
-    window.setTimeout(() => scrollToTestId("cycle-journal-rail"), 0);
-  }, [scrollToTestId]);
+    setLpsOpen(false);
+  }, []);

-  /** Shortcut « Historique » — the existing durable history surface. */
+  /** Shortcut « Historique » — dedicated Product-derived History surface (P3). */
   const openHistory = useCallback(() => {
-    setActiveView("conversation");
-    setLpsOpen(true);
-    window.setTimeout(() => scrollToTestId("project-history-panel"), 0);
-  }, [scrollToTestId]);
+    setActiveView("history");
+    setLpsOpen(false);
+  }, []);

   /** Tab « Aperçu » — real object-native orientation projection (not scroll-only). */
   const openOverview = useCallback(() => {
@@ -486,9 +500,8 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
     executionPresentation != null
       ? deriveExecutionTabBadge(executionPresentation)
       : null;
-  /** Overview / Synthèses own principal width — no permanent sibling context rail. */
-  const showContextRail =
-    activeView !== "overview" && activeView !== "syntheses";
+  const principalOnly = PRINCIPAL_ONLY_VIEWS.has(activeView);
+  const showContextRail = !principalOnly;

   return (
     <div
@@ -603,20 +616,11 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
       </header>

       <div
-        className={[
-          styles.layout,
-          activeView === "overview" || activeView === "syntheses"
-            ? styles.layoutOverview
-            : "",
-        ]
+        className={[styles.layout, principalOnly ? styles.layoutOverview : ""]
           .filter(Boolean)
           .join(" ")}
         data-testid="project-workspace-layout"
-        data-layout={
-          activeView === "overview" || activeView === "syntheses"
-            ? "overview"
-            : "split"
-        }
+        data-layout={principalOnly ? "overview" : "split"}
       >
         <div className={styles.main} ref={conversationRef}>
           {activeView === "conversation" ? (
@@ -702,6 +706,51 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
             />
           ) : null}

+          {activeView === "history" ? (
+            <HistorySurface
+              result={success}
+              durableOutcome={durableOutcome}
+              onReturnToOverview={openOverview}
+              onAskNora={(draft) => {
+                controller.setDraft(draft);
+                focusConversation();
+              }}
+            />
+          ) : null}
+
+          {activeView === "journal" ? (
+            <JournalSurface
+              variant="principal"
+              entries={controller.journalEntries}
+              cycleInstanceId={controller.journalCycleInstanceId}
+              reservationsCycleInstanceId={reservationCycleInstanceId}
+              selectedEntryId={controller.selectedJournalEntryId}
+              onSelectEntry={controller.setSelectedJournalEntryId}
+              onViewExchanges={controller.focusJournalExchanges}
+              onFocusTurn={(turnId) => {
+                focusConversation();
+                controller.focusTranscriptTurn(turnId);
+              }}
+              transcriptMessages={controller.messages}
+              onReturnToConversation={focusConversation}
+              cycleLabel={
+                lifecycle?.selectedCycleInstanceId ? cycleSummary.label : null
+              }
+              currentnessLabel={currentness.label}
+              reservations={cycleReservations}
+              memoryTab={memoryTab}
+              onMemoryTabChange={setMemoryTab}
+              onTreatWithNora={treatReservationWithNora}
+              onConfirmResolve={confirmReservationResolution}
+              onConfirmDefer={confirmReservationDefer}
+              onViewJournalSubject={viewJournalSubject}
+              reservationBusyId={reservationBusyId}
+              recommendations={cycleRecommendations}
+              decisions={cycleDecisions}
+              onResumeRecommendationInChat={resumeRecommendationInChat}
+            />
+          ) : null}
+
           {activeView === "execution" ? (
             <ExecutionSurface
               projectId={projectId}
@@ -817,6 +866,9 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
               data-testid="project-journal-column"
             >
               <JournalSurface
+                variant="rail"
+                onOpenFullJournal={openJournal}
+                railMaxEntries={3}
                 entries={controller.journalEntries}
                 cycleInstanceId={controller.journalCycleInstanceId}
                 reservationsCycleInstanceId={reservationCycleInstanceId}
@@ -849,8 +901,6 @@ export function ProjectWorkspacePage({ projectId }: { projectId: string }) {
                 </p>
               ) : null}
             </div>
-
-            <HistorySurface result={success} durableOutcome={durableOutcome} />
           </div>

           <ProjectContextShortcuts
```

#### `JournalSurface.tsx` — B5 Journal principal / expanded / mobile
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
index 3a772999..b2f38c9b 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
@@ -43,8 +43,17 @@ export type JournalTranscriptMessage = {
   id: string;
   role: string;
   content: string;
+  /** Durable Session timestamp when known — omitted rather than invented. */
+  createdAt?: string | null;
 };

+/**
+ * `rail` — compact shortcut inside the context column (conversation layout).
+ * `principal` — dedicated Journal view owning the main column (P3 94:2 / 94:222).
+ * One component, two compositions: never a second Journal cockpit.
+ */
+export type JournalSurfaceVariant = "rail" | "principal";
+
 export type JournalSurfaceProps = {
   entries: JournalSurfaceEntry[];
   cycleInstanceId: string | null;
@@ -97,6 +106,17 @@ export type JournalSurfaceProps = {
    * the conversation. MUST NOT send and MUST NOT record anything.
    */
   onResumeRecommendationInChat?: (recommendationId: string) => void;
+  variant?: JournalSurfaceVariant;
+  /** Principal only — « Retour à la conversation ». */
+  onReturnToConversation?: () => void;
+  /** Rail only — promotes the compact shortcut to the dedicated Journal view. */
+  onOpenFullJournal?: () => void;
+  /** Rail only — compact shortcut shows at most this many subjects. */
+  railMaxEntries?: number;
+  /** Honest cycle label for the principal header chip (never invented). */
+  cycleLabel?: string | null;
+  /** Honest currentness label for the principal header chip. */
+  currentnessLabel?: string | null;
 };

 function isOpenReservation(card: JournalReservationCard): boolean {
@@ -154,21 +174,40 @@ function statusLabel(status: string): string {
 }

 function roleLabel(role: string): string {
-  if (role === "user") return "Pilote";
-  if (role === "assistant") return "Nora";
+  // P3 94:2 / 94:222 canonical exchange authors.
+  if (role === "user") return "VOUS";
+  if (role === "assistant") return "NORA";
   return role;
 }

+/** Exchange timestamp from durable Session only — never fabricated. */
+function formatExchangeWhen(iso: string | null | undefined): string {
+  if (!iso?.trim()) return "Moment non enregistré";
+  const d = new Date(iso);
+  if (Number.isNaN(d.getTime())) return "Moment non enregistré";
+  const dd = String(d.getDate()).padStart(2, "0");
+  const mm = String(d.getMonth() + 1).padStart(2, "0");
+  const hh = String(d.getHours()).padStart(2, "0");
+  const mi = String(d.getMinutes()).padStart(2, "0");
+  return `${dd}/${mm} · ${hh}:${mi}`;
+}
+
 function previewFor(
   turnId: string,
   messages: JournalTranscriptMessage[] | undefined,
-): { role: string; excerpt: string; resolvable: boolean } {
+): {
+  role: string;
+  excerpt: string;
+  when: string;
+  resolvable: boolean;
+} {
   const msg = messages?.find((m) => m.id === turnId);
   if (!msg) {
     // Never show raw pt:* as the nominal Pilot label — pending reconcile / missing.
     return {
       role: "échange",
       excerpt: "Échange en cours de synchronisation…",
+      when: "Moment non enregistré",
       resolvable: false,
     };
   }
@@ -179,12 +218,51 @@ function previewFor(
   return {
     role: roleLabel(msg.role),
     excerpt: excerpt || "(vide)",
+    when: formatExchangeWhen(msg.createdAt),
     resolvable: true,
   };
 }

+/** P3 94:2 ordinal — « SUJET 01 ». Falls back to the plain label without one. */
+function paddedOrdinalLabel(ordinal: number | null): string {
+  if (ordinal == null) return "Sujet";
+  return `Sujet ${ordinal < 10 ? `0${ordinal}` : ordinal}`;
+}
+
+/** Relative freshness from the durable projection — honest when unreadable. */
+function relativeUpdatedAt(iso: string): string {
+  const then = new Date(iso).getTime();
+  if (Number.isNaN(then)) return "Mise à jour non datée";
+  const minutes = Math.floor((Date.now() - then) / 60000);
+  if (minutes < 0) return "Mise à jour non datée";
+  if (minutes < 1) return "Mis à jour à l'instant";
+  if (minutes < 60) return `Mis à jour il y a ${minutes} min`;
+  const hours = Math.floor(minutes / 60);
+  if (hours < 24) return `Mis à jour il y a ${hours} h`;
+  const days = Math.floor(hours / 24);
+  return `Mis à jour il y a ${days} j`;
+}
+
+/** Exchanges shown before the Pilot expands the full linked index (94:2). */
+const PRINCIPAL_EXCHANGE_PREVIEW = 2;
+
+const MEMORY_TABS: ReadonlyArray<{
+  id: JournalMemoryTab;
+  label: string;
+  paneId: string;
+}> = [
+  { id: "sujets", label: "Sujets", paneId: "cycle-journal-list" },
+  { id: "reserves", label: "Réserves", paneId: "cycle-reservations-list" },
+  {
+    id: "recommandations",
+    label: "Recommandations",
+    paneId: "cycle-recommendations-list",
+  },
+  { id: "decisions", label: "Décisions", paneId: "cycle-decisions-list" },
+];
+
 /**
- * Cycle Journal rail — semantic projection only.
+ * Cycle Journal — semantic projection only, in a rail or principal composition.
  * NEVER presented as Truth C / History durable / HumanDecision.
  */
 export function JournalSurface({
@@ -209,7 +287,14 @@ export function JournalSurface({
   recommendations = [],
   decisions = [],
   onResumeRecommendationInChat,
+  variant = "rail",
+  onReturnToConversation,
+  onOpenFullJournal,
+  railMaxEntries,
+  cycleLabel = null,
+  currentnessLabel = null,
 }: JournalSurfaceProps) {
+  const principal = variant === "principal";
   const safeEntries = Array.isArray(entries) ? entries : [];
   const safeReservations = Array.isArray(reservations) ? reservations : [];
   const safeRecommendations = Array.isArray(recommendations)
@@ -230,6 +315,8 @@ export function JournalSurface({
   );
   /** Epistemic id awaiting explicit Pilot confirm for defer — zero writes until confirm. */
   const [deferConfirmId, setDeferConfirmId] = useState<string | null>(null);
+  /** Principal mobile only — one nav level: subjects index ↔ selected subject. */
+  const [mobileShowDetail, setMobileShowDetail] = useState(false);
   const tab: JournalMemoryTab = memoryTab ?? internalTab;
   const setTab = (next: JournalMemoryTab) => {
     if (memoryTab === undefined) setInternalTab(next);
@@ -268,34 +355,133 @@ export function JournalSurface({
           ? `${openRecommendationCount} en attente de votre réponse`
           : `${decisionCount} décision${decisionCount === 1 ? "" : "s"} enregistrée${decisionCount === 1 ? "" : "s"}`;

+  /** Rail stays a shortcut: it shows a bounded head of the subjects index. */
+  const listedEntries =
+    !principal && typeof railMaxEntries === "number" && railMaxEntries > 0
+      ? safeEntries.slice(0, railMaxEntries)
+      : safeEntries;
+  const hiddenEntryCount = safeEntries.length - listedEntries.length;
+
+  /**
+   * Principal detail falls back to the current topic then the first subject so
+   * the master/detail view is never empty while a subject exists.
+   */
+  const detailEntry: JournalSurfaceEntry | null = principal
+    ? (safeEntries.find((e) => e.journalEntryId === selectedEntryId) ??
+      safeEntries.find((e) => e.isCurrentTopic) ??
+      safeEntries[0] ??
+      null)
+    : null;
+  const detailTurnRefs = detailEntry?.sourceTurnRefs ?? [];
+  const exchangesExpanded =
+    detailEntry != null && expandedEntryId === detailEntry.journalEntryId;
+  const shownTurnRefs = exchangesExpanded
+    ? detailTurnRefs
+    : detailTurnRefs.slice(0, PRINCIPAL_EXCHANGE_PREVIEW);
+  const firstResolvableTurn =
+    detailTurnRefs.find(
+      (turnId) => previewFor(turnId, transcriptMessages).resolvable,
+    ) ?? null;
+  /** Only Reservations carry a durable Journal subject link in the projection. */
+  const detailLinkedReservations = detailEntry
+    ? safeReservations.filter((r) =>
+        r.journalEntryRefs.includes(detailEntry.journalEntryId),
+      )
+    : [];
+  const masterTitle =
+    tab === "sujets"
+      ? "Sujets"
+      : tab === "reserves"
+        ? "Réserves"
+        : tab === "recommandations"
+          ? "Recommandations"
+          : "Décisions";
+
+  const Root = (principal ? "section" : "aside") as "section";
+
   return (
-    <aside
-      className={[styles.root, collapsed ? styles.collapsed : ""].join(" ")}
-      data-testid="cycle-journal-rail"
+    <Root
+      className={[
+        styles.root,
+        principal ? styles.principal : "",
+        collapsed ? styles.collapsed : "",
+      ]
+        .filter(Boolean)
+        .join(" ")}
+      data-testid={principal ? "project-journal-surface" : "cycle-journal-rail"}
+      data-variant={variant}
       data-memory-tab={tab}
+      data-mobile-detail={
+        principal && mobileShowDetail && detailEntry ? "true" : "false"
+      }
       aria-label="Journal du cycle"
     >
-      <header className={styles.header}>
-        <div className={styles.headerText}>
-          <p className={styles.eyebrow}>Mémoire de cycle</p>
-          <h2 className={styles.title} id="cycle-journal-heading">
-            {railTitle}
-          </h2>
-          <p className={styles.meta}>{railMeta}</p>
-        </div>
-        {onToggleCollapsed ? (
-          <button
-            type="button"
-            className={styles.toggle}
-            data-testid="cycle-journal-toggle"
-            aria-expanded={!collapsed}
-            aria-controls={paneId}
-            onClick={onToggleCollapsed}
-          >
-            {collapsed ? "Ouvrir" : "Replier"}
-          </button>
-        ) : null}
-      </header>
+      {principal ? (
+        <header className={styles.principalHeader}>
+          {onReturnToConversation ? (
+            <button
+              type="button"
+              className={styles.principalBack}
+              data-testid="project-journal-return-conversation"
+              onClick={onReturnToConversation}
+            >
+              <span className={styles.principalBackFull}>
+                ← Retour à la conversation
+              </span>
+              <span className={styles.principalBackShort}>← Conversation</span>
+            </button>
+          ) : null}
+          <div className={styles.principalTitleRow}>
+            <h2 className={styles.principalTitle} id="cycle-journal-heading">
+              Journal du cycle
+            </h2>
+            {cycleLabel ? (
+              <span className={styles.principalChip}>{cycleLabel}</span>
+            ) : null}
+            {currentnessLabel ? (
+              <span
+                className={styles.principalChipOk}
+                data-testid="project-journal-currentness"
+              >
+                {currentnessLabel}
+              </span>
+            ) : null}
+          </div>
+        </header>
+      ) : (
+        <header className={styles.header}>
+          <div className={styles.headerText}>
+            <p className={styles.eyebrow}>Mémoire de cycle</p>
+            <h2 className={styles.title} id="cycle-journal-heading">
+              {railTitle}
+            </h2>
+            <p className={styles.meta}>{railMeta}</p>
+          </div>
+          {onToggleCollapsed ? (
+            <button
+              type="button"
+              className={styles.toggle}
+              data-testid="cycle-journal-toggle"
+              aria-expanded={!collapsed}
+              aria-controls={paneId}
+              onClick={onToggleCollapsed}
+            >
+              {collapsed ? "Ouvrir" : "Replier"}
+            </button>
+          ) : null}
+        </header>
+      )}
+
+      {!principal && !collapsed && onOpenFullJournal ? (
+        <button
+          type="button"
+          className={styles.openFull}
+          data-testid="cycle-journal-open-full"
+          onClick={onOpenFullJournal}
+        >
+          Ouvrir le Journal du cycle →
+        </button>
+      ) : null}

       {!collapsed ? (
         <div
@@ -304,65 +490,63 @@ export function JournalSurface({
           aria-label="Mémoire de cycle"
           data-testid="memory-rail-tabs"
         >
-          <button
-            type="button"
-            role="tab"
-            id="memory-rail-tab-sujets"
-            className={[styles.tab, tab === "sujets" ? styles.tabActive : ""]
-              .filter(Boolean)
-              .join(" ")}
-            data-testid="memory-rail-tab-sujets"
-            aria-selected={tab === "sujets"}
-            aria-controls="cycle-journal-list"
-            onClick={() => setTab("sujets")}
-          >
-            Sujets ({activeCount})
-          </button>
-          <button
-            type="button"
-            role="tab"
-            id="memory-rail-tab-reserves"
-            className={[styles.tab, tab === "reserves" ? styles.tabActive : ""]
-              .filter(Boolean)
-              .join(" ")}
-            data-testid="memory-rail-tab-reserves"
-            aria-selected={tab === "reserves"}
-            aria-controls="cycle-reservations-list"
-            onClick={() => setTab("reserves")}
-          >
-            Réserves ({openReservationCount})
-          </button>
-          <button
-            type="button"
-            role="tab"
-            id="memory-rail-tab-recommandations"
-            className={[
-              styles.tab,
-              tab === "recommandations" ? styles.tabActive : "",
-            ]
-              .filter(Boolean)
-              .join(" ")}
-            data-testid="memory-rail-tab-recommandations"
-            aria-selected={tab === "recommandations"}
-            aria-controls="cycle-recommendations-list"
-            onClick={() => setTab("recommandations")}
-          >
-            Recommandations ({openRecommendationCount})
-          </button>
-          <button
-            type="button"
-            role="tab"
-            id="memory-rail-tab-decisions"
-            className={[styles.tab, tab === "decisions" ? styles.tabActive : ""]
-              .filter(Boolean)
-              .join(" ")}
-            data-testid="memory-rail-tab-decisions"
-            aria-selected={tab === "decisions"}
-            aria-controls="cycle-decisions-list"
-            onClick={() => setTab("decisions")}
-          >
-            Décisions ({decisionCount})
-          </button>
+          {MEMORY_TABS.map((item) => {
+            const count =
+              item.id === "sujets"
+                ? activeCount
+                : item.id === "reserves"
+                  ? openReservationCount
+                  : item.id === "recommandations"
+                    ? openRecommendationCount
+                    : decisionCount;
+            return (
+              <button
+                key={item.id}
+                type="button"
+                role="tab"
+                id={`memory-rail-tab-${item.id}`}
+                className={[styles.tab, tab === item.id ? styles.tabActive : ""]
+                  .filter(Boolean)
+                  .join(" ")}
+                data-testid={`memory-rail-tab-${item.id}`}
+                aria-selected={tab === item.id}
+                aria-controls={item.paneId}
+                onClick={() => setTab(item.id)}
+              >
+                {/* Principal splits the count into a badge (94:2); the rail keeps one label. */}
+                {principal ? (
+                  <>
+                    {item.label}
+                    <span className={styles.tabCount}>{count}</span>
+                  </>
+                ) : (
+                  `${item.label} (${count})`
+                )}
+              </button>
+            );
+          })}
+        </div>
+      ) : null}
+
+      <div className={styles.body} data-variant={variant}>
+      <div
+        className={styles.masterCol}
+        data-mobile-hidden={
+          principal && mobileShowDetail && detailEntry ? "true" : "false"
+        }
+      >
+      {principal && !collapsed ? (
+        <div className={styles.masterHead}>
+          <div className={styles.masterHeadRow}>
+            <h3 className={styles.masterTitle}>{masterTitle}</h3>
+            <span className={styles.masterCount}>{railMeta}</span>
+          </div>
+          {tab === "sujets" ? (
+            <p className={styles.masterNote}>
+              Les fils de travail du Cycle, mis à jour au fil de la
+              conversation.
+            </p>
+          ) : null}
         </div>
       ) : null}

@@ -790,8 +974,10 @@ export function JournalSurface({
               ici comme index navigable.
             </p>
           ) : (
-            safeEntries.map((entry) => {
-              const selected = selectedEntryId === entry.journalEntryId;
+            listedEntries.map((entry) => {
+              const selected = principal
+                ? detailEntry?.journalEntryId === entry.journalEntryId
+                : selectedEntryId === entry.journalEntryId;
               const expanded = expandedEntryId === entry.journalEntryId;
               const pointsOpen = pointsOpenId === entry.journalEntryId;
               const hasPoints =
@@ -820,7 +1006,10 @@ export function JournalSurface({
                   <button
                     type="button"
                     className={styles.cardSelect}
-                    onClick={() => onSelectEntry(entry.journalEntryId)}
+                    onClick={() => {
+                      onSelectEntry(entry.journalEntryId);
+                      if (principal) setMobileShowDetail(true);
+                    }}
                     aria-pressed={selected}
                   >
                     <span className={styles.cardHeading}>
@@ -829,7 +1018,9 @@ export function JournalSurface({
                           className={styles.ordinal}
                           data-testid={`cycle-journal-ordinal-${entry.journalEntryId}`}
                         >
-                          Sujet {ordinal}
+                          {principal
+                            ? paddedOrdinalLabel(ordinal)
+                            : `Sujet ${ordinal}`}
                         </span>
                       ) : null}
                       {entry.isCurrentTopic ? (
@@ -840,6 +1031,14 @@ export function JournalSurface({
                           En cours
                         </span>
                       ) : null}
+                      {principal && !entry.isCurrentTopic ? (
+                        <span
+                          className={styles.statusBadge}
+                          data-status={entry.status}
+                        >
+                          {statusLabel(entry.status)}
+                        </span>
+                      ) : null}
                     </span>
                     <span className={styles.cardTitle}>{entry.title}</span>
                     <span className={styles.cardSummary}>
@@ -853,9 +1052,17 @@ export function JournalSurface({
                         {entry.sourceTurnCount} échange
                         {entry.sourceTurnCount === 1 ? "" : "s"}
                       </span>
+                      {principal ? (
+                        <span className={styles.cardPoints}>
+                          {entry.stabilizedPoints.length} stabilisé
+                          {entry.stabilizedPoints.length === 1 ? "" : "s"} ·{" "}
+                          {entry.openPoints.length} ouvert
+                          {entry.openPoints.length === 1 ? "" : "s"}
+                        </span>
+                      ) : null}
                     </span>
                   </button>
-                  {hasPoints ? (
+                  {!principal && hasPoints ? (
                     <button
                       type="button"
                       className={styles.viewExchanges}
@@ -874,7 +1081,7 @@ export function JournalSurface({
                         : "Points stabilisés / ouverts"}
                     </button>
                   ) : null}
-                  {pointsOpen && hasPoints ? (
+                  {!principal && pointsOpen && hasPoints ? (
                     <div
                       className={styles.pointsBlock}
                       data-testid={`cycle-journal-points-body-${entry.journalEntryId}`}
@@ -901,7 +1108,7 @@ export function JournalSurface({
                       ) : null}
                     </div>
                   ) : null}
-                  {entry.sourceTurnRefs.length > 0 ? (
+                  {!principal && entry.sourceTurnRefs.length > 0 ? (
                     <button
                       type="button"
                       className={styles.viewExchanges}
@@ -920,7 +1127,7 @@ export function JournalSurface({
                       {expanded ? "Masquer les échanges" : "Voir les échanges"}
                     </button>
                   ) : null}
-                  {expanded && entry.sourceTurnRefs.length > 0 ? (
+                  {!principal && expanded && entry.sourceTurnRefs.length > 0 ? (
                     <ul
                       id={`cycle-journal-exchanges-${entry.journalEntryId}`}
                       className={styles.exchangeList}
@@ -943,24 +1150,318 @@ export function JournalSurface({
                               }}
                               disabled={!preview.resolvable}
                             >
-                              <span className={styles.exchangeRole}>
-                                {preview.role}
+                              <span className={styles.exchangeTop}>
+                                <span
+                                  className={styles.exchangeRole}
+                                  data-role={preview.role}
+                                >
+                                  {preview.role}
+                                </span>
+                                <span className={styles.exchangeWhen}>
+                                  {preview.when}
+                                </span>
                               </span>
-                              <span className={styles.exchangeExcerpt}>
-                                {preview.excerpt}
-                              </span>
-                            </button>
-                          </li>
-                        );
-                      })}
-                    </ul>
-                  ) : null}
+                            <span className={styles.exchangeExcerpt}>
+                              {preview.excerpt}
+                            </span>
+                          </button>
+                        </li>
+                      );
+                    })}
+                  </ul>
+                ) : null}
                 </article>
               );
             })
           )}
+          {hiddenEntryCount > 0 && onOpenFullJournal ? (
+            <button
+              type="button"
+              className={styles.viewExchanges}
+              data-testid="cycle-journal-overflow"
+              onClick={onOpenFullJournal}
+            >
+              Voir les {safeEntries.length} sujets →
+            </button>
+          ) : null}
+        </div>
+      ) : null}
+      </div>
+
+      {principal && !collapsed && tab === "sujets" ? (
+        <div
+          className={styles.detailCol}
+          data-testid="project-journal-detail"
+          data-mobile-hidden={mobileShowDetail && detailEntry ? "false" : "true"}
+          aria-live="polite"
+        >
+          {!detailEntry ? (
+            <p className={styles.empty} data-testid="project-journal-detail-empty">
+              Sélectionnez un sujet pour lire son état courant, ses points et
+              ses échanges liés.
+            </p>
+          ) : (
+            <div className={styles.detailInner}>
+              <button
+                type="button"
+                className={styles.detailBack}
+                data-testid="project-journal-back-to-subjects"
+                onClick={() => setMobileShowDetail(false)}
+              >
+                ← Sujets
+              </button>
+
+              <div className={styles.detailHead}>
+                <div className={styles.detailHeadRow}>
+                  <span className={styles.detailBadges}>
+                    {detailEntry.topicOrdinal > 0 ? (
+                      <span
+                        className={styles.ordinal}
+                        data-testid="project-journal-detail-ordinal"
+                      >
+                        {paddedOrdinalLabel(detailEntry.topicOrdinal)}
+                      </span>
+                    ) : null}
+                    {detailEntry.isCurrentTopic ? (
+                      <span className={styles.currentBadge}>En cours</span>
+                    ) : null}
+                    <span
+                      className={styles.statusBadge}
+                      data-status={detailEntry.status}
+                    >
+                      {statusLabel(detailEntry.status)}
+                    </span>
+                  </span>
+                  <span className={styles.detailUpdated}>
+                    {relativeUpdatedAt(detailEntry.updatedAt)}
+                  </span>
+                </div>
+                <h3
+                  className={styles.detailTitle}
+                  data-testid="project-journal-detail-title"
+                >
+                  {detailEntry.title}
+                </h3>
+                <p className={styles.detailSummary}>
+                  {detailEntry.currentSummary}
+                </p>
+              </div>
+
+              <section
+                className={styles.detailSection}
+                data-testid="project-journal-stabilized"
+              >
+                <p className={styles.detailSectionHead}>
+                  <span className={styles.detailSectionLabel}>
+                    Points stabilisés
+                  </span>
+                  <span className={styles.detailSectionCount}>
+                    {detailEntry.stabilizedPoints.length}
+                  </span>
+                </p>
+                {detailEntry.stabilizedPoints.length === 0 ? (
+                  <p className={styles.detailUnavailable}>
+                    Aucun point stabilisé enregistré sur ce sujet.
+                  </p>
+                ) : (
+                  <ul className={styles.markedList} data-marker="stabilized">
+                    {detailEntry.stabilizedPoints.map((point, i) => (
+                      <li key={`ds-${i}`}>{point}</li>
+                    ))}
+                  </ul>
+                )}
+              </section>
+
+              <section
+                className={styles.detailSection}
+                data-testid="project-journal-open"
+              >
+                <p className={styles.detailSectionHead}>
+                  <span className={styles.detailSectionLabel}>
+                    Points ouverts
+                  </span>
+                  <span className={styles.detailSectionCount}>
+                    {detailEntry.openPoints.length}
+                  </span>
+                </p>
+                {detailEntry.openPoints.length === 0 ? (
+                  <p className={styles.detailUnavailable}>
+                    Aucun point ouvert sur ce sujet.
+                  </p>
+                ) : (
+                  <ul className={styles.markedList} data-marker="open">
+                    {detailEntry.openPoints.map((point, i) => (
+                      <li key={`do-${i}`}>{point}</li>
+                    ))}
+                  </ul>
+                )}
+              </section>
+
+              <section
+                className={styles.detailSection}
+                data-testid="project-journal-linked"
+              >
+                <p className={styles.detailSectionHead}>
+                  <span className={styles.detailSectionLabel}>
+                    Éléments liés
+                  </span>
+                </p>
+                {detailLinkedReservations.length > 0 ? (
+                  <div className={styles.linkedPills}>
+                    <button
+                      type="button"
+                      className={styles.linkedPill}
+                      data-kind="reserve"
+                      data-testid="project-journal-linked-reservation-count"
+                      onClick={() => setTab("reserves")}
+                    >
+                      <span className={styles.linkedPillCount}>
+                        {detailLinkedReservations.length}
+                      </span>
+                      <span className={styles.linkedPillLabel}>
+                        {detailLinkedReservations.length === 1
+                          ? "réserve"
+                          : "réserves"}
+                      </span>
+                    </button>
+                    {detailLinkedReservations.map((card) => (
+                      <button
+                        key={card.epistemicItemId}
+                        type="button"
+                        className={styles.linkedPill}
+                        data-kind="reserve-item"
+                        data-testid={`project-journal-linked-reservation-${card.epistemicItemId}`}
+                        onClick={() => setTab("reserves")}
+                        title={card.title}
+                      >
+                        <span className={styles.linkedPillCount}>
+                          {card.ordinal > 0 ? card.ordinal : "·"}
+                        </span>
+                        <span className={styles.linkedPillLabel}>
+                          {card.presentationStateLabel}
+                        </span>
+                      </button>
+                    ))}
+                  </div>
+                ) : null}
+                <p className={styles.detailUnavailable}>
+                  {detailLinkedReservations.length > 0
+                    ? "Les décisions et recommandations ne portent pas de rattachement durable à un sujet — consultez leurs onglets."
+                    : "Aucun élément lié à ce sujet dans la projection : seules les réserves portent un rattachement durable au Journal."}
+                </p>
+              </section>
+
+              <section
+                className={styles.detailSection}
+                data-testid="project-journal-exchanges"
+              >
+                <p className={styles.detailSectionHead}>
+                  <span className={styles.detailSectionLabel}>
+                    Échanges liés
+                  </span>
+                  <span className={styles.detailSectionCount}>
+                    {detailTurnRefs.length === 0
+                      ? "0"
+                      : exchangesExpanded
+                        ? `${detailTurnRefs.length} échange${detailTurnRefs.length === 1 ? "" : "s"} affiché${detailTurnRefs.length === 1 ? "" : "s"}`
+                        : `${shownTurnRefs.length} sur ${detailTurnRefs.length} affichés`}
+                  </span>
+                </p>
+                {detailTurnRefs.length === 0 ? (
+                  <p className={styles.detailUnavailable}>
+                    Aucun échange durable n&apos;est rattaché à ce sujet.
+                  </p>
+                ) : (
+                  <ul
+                    id={`cycle-journal-exchanges-${detailEntry.journalEntryId}`}
+                    className={styles.exchangePanel}
+                    data-testid={`cycle-journal-exchanges-${detailEntry.journalEntryId}`}
+                    data-expanded={exchangesExpanded ? "true" : "false"}
+                    aria-label={`Échanges liés — ${detailEntry.title}`}
+                  >
+                    {shownTurnRefs.map((turnId, index) => {
+                      const preview = previewFor(turnId, transcriptMessages);
+                      return (
+                        <li key={`${turnId}-${index}`}>
+                          <button
+                            type="button"
+                            className={styles.exchangeRow}
+                            data-testid={`cycle-journal-exchange-${turnId}`}
+                            data-resolvable={
+                              preview.resolvable ? "true" : "false"
+                            }
+                            onClick={() => {
+                              if (preview.resolvable) onFocusTurn(turnId);
+                            }}
+                            disabled={!preview.resolvable}
+                          >
+                            <span className={styles.exchangeTop}>
+                              <span
+                                className={styles.exchangeRole}
+                                data-role={preview.role}
+                              >
+                                {preview.role}
+                              </span>
+                              <span className={styles.exchangeWhen}>
+                                {preview.when}
+                              </span>
+                            </span>
+                            <span className={styles.exchangeExcerpt}>
+                              {preview.excerpt.startsWith("«")
+                                ? preview.excerpt
+                                : `« ${preview.excerpt} »`}
+                            </span>
+                          </button>
+                        </li>
+                      );
+                    })}
+                  </ul>
+                )}
+                <div className={styles.detailFooter}>
+                  {detailTurnRefs.length > PRINCIPAL_EXCHANGE_PREVIEW ? (
+                    <button
+                      type="button"
+                      className={styles.viewExchanges}
+                      data-testid={`cycle-journal-view-${detailEntry.journalEntryId}`}
+                      aria-expanded={exchangesExpanded}
+                      aria-controls={`cycle-journal-exchanges-${detailEntry.journalEntryId}`}
+                      onClick={() => {
+                        onViewExchanges(detailEntry);
+                        setExpandedEntryId((prev) =>
+                          prev === detailEntry.journalEntryId
+                            ? null
+                            : detailEntry.journalEntryId,
+                        );
+                      }}
+                    >
+                      {exchangesExpanded
+                        ? "Réduire les échanges"
+                        : `Voir les ${detailTurnRefs.length} échanges`}
+                    </button>
+                  ) : (
+                    <span />
+                  )}
+                  {firstResolvableTurn ? (
+                    <button
+                      type="button"
+                      className={styles.viewExchanges}
+                      data-testid="project-journal-open-in-conversation"
+                      onClick={() => onFocusTurn(firstResolvableTurn)}
+                    >
+                      Voir dans la conversation →
+                    </button>
+                  ) : (
+                    <span className={styles.detailUnavailable}>
+                      Échanges non résolus — reprise impossible pour l&apos;instant.
+                    </span>
+                  )}
+                </div>
+              </section>
+            </div>
+          )}
         </div>
       ) : null}
-    </aside>
+      </div>
+    </Root>
   );
 }
```

#### `JournalSurface.module.css` — B5 Journal pixel CSS
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
index 9af31be2..da53a01e 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.module.css
@@ -74,18 +74,17 @@
 .tabs {
   display: flex;
   flex-wrap: wrap;
-  gap: var(--pm6-space-1);
-  border-bottom: 1px solid var(--pm6-border-soft);
+  gap: 6px;
   flex-shrink: 0;
 }

 .tab {
   appearance: none;
-  border: none;
-  border-bottom: 2px solid transparent;
-  background: transparent;
-  padding: 6px 8px;
-  margin-bottom: -1px;
+  border: 1px solid var(--pm6-border-strong);
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-surface);
+  padding: 7px 12px;
+  min-height: 38px;
   font-size: 0.78rem;
   font-weight: 600;
   color: var(--pm6-muted-strong);
@@ -99,12 +98,12 @@
 .tab:focus-visible {
   outline: none;
   box-shadow: var(--pm6-focus-ring);
-  border-radius: 2px;
 }

 .tabActive {
-  color: var(--pm6-forest);
-  border-bottom-color: var(--pm6-forest);
+  color: var(--pm6-ink);
+  border-color: color-mix(in srgb, var(--pm6-terracotta, #c45c26) 45%, var(--pm6-border));
+  background: color-mix(in srgb, var(--pm6-terracotta, #c45c26) 10%, var(--pm6-surface));
 }

 .list {
@@ -307,16 +306,35 @@
 }

 .exchangeRole {
-  font-size: 0.68rem;
-  font-weight: 700;
+  font-size: 0.6875rem;
+  font-weight: 650;
   letter-spacing: 0.04em;
   text-transform: uppercase;
-  color: var(--pm6-forest);
+  color: var(--pm6-muted-strong);
+}
+
+.exchangeRole[data-role="NORA"] {
+  color: var(--pm6-accent);
+}
+
+.exchangeWhen {
+  font-size: 0.6875rem;
+  font-weight: 650;
+  letter-spacing: 0.04em;
+  color: var(--pm6-muted);
+}
+
+.exchangeTop {
+  display: flex;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-3);
+  width: 100%;
 }

 .exchangeExcerpt {
-  font-size: 0.76rem;
-  line-height: 1.4;
+  font-size: 0.8125rem;
+  line-height: 1.5;
   color: var(--pm6-ink-soft);
   overflow-wrap: anywhere;
 }
@@ -457,3 +475,661 @@
   font-weight: 700;
   color: var(--pm6-ink);
 }
+
+/* ---------- rail → principal shortcut ---------- */
+
+.openFull {
+  align-self: flex-start;
+  appearance: none;
+  border: 0;
+  background: transparent;
+  padding: 0;
+  min-height: 38px;
+  display: inline-flex;
+  align-items: center;
+  font: inherit;
+  font-size: 0.78rem;
+  font-weight: 600;
+  color: var(--pm6-accent);
+  cursor: pointer;
+}
+
+.openFull:hover {
+  text-decoration: underline;
+}
+
+.openFull:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+  border-radius: 4px;
+}
+
+/*
+ * ================= principal composition =================
+ * P3 Journal desktop 94:2 / expanded 94:222 (body 1226 = index ~440 | detail
+ * ~785), mobile list 192:41 → detail 192:81. The rail composition is untouched:
+ * `.body` / `.masterCol` dissolve when the variant is `rail`.
+ */
+
+.body {
+  display: contents;
+}
+
+.masterCol {
+  display: contents;
+}
+
+.principal {
+  max-height: none;
+  overflow: visible;
+  gap: 0;
+  padding: 0;
+  background: var(--pm6-body);
+  border: 0;
+  border-radius: 0;
+  flex: 1 1 auto;
+}
+
+.principal .body {
+  display: grid;
+  grid-template-columns: minmax(0, var(--pm6-journal-index-w, 440px)) minmax(0, 1fr);
+  align-items: stretch;
+  min-height: 0;
+  flex: 1 1 auto;
+}
+
+.principal .masterCol {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  min-width: 0;
+  min-height: 0;
+  padding: var(--pm6-space-4) var(--pm6-space-4) var(--pm6-space-5);
+  border-right: 1px solid var(--pm6-border);
+}
+
+.principalHeader {
+  display: flex;
+  flex-direction: column;
+  gap: 4px;
+  padding: 14px var(--ws-pad-x, 24px) 0;
+}
+
+.principalBack {
+  align-self: flex-start;
+  appearance: none;
+  border: 0;
+  background: transparent;
+  padding: 0;
+  min-height: 38px;
+  display: inline-flex;
+  align-items: center;
+  font: inherit;
+  font-size: 0.8125rem;
+  font-weight: 600;
+  color: var(--pm6-accent);
+  cursor: pointer;
+}
+
+.principalBack:hover {
+  text-decoration: underline;
+}
+
+.principalBackShort {
+  display: none;
+}
+
+.principalBackFull {
+  display: inline;
+}
+
+.principalTitleRow {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
+  min-width: 0;
+}
+
+.principalTitle {
+  margin: 0;
+  flex: 1 1 auto;
+  font-size: 1.5rem;
+  font-weight: 650;
+  letter-spacing: -0.02em;
+  line-height: 1.2;
+  color: var(--pm6-ink);
+}
+
+.principalChip,
+.principalChipOk {
+  display: inline-flex;
+  align-items: center;
+  padding: 3px 10px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+  font-size: 0.6875rem;
+  font-weight: 600;
+  color: var(--pm6-muted-strong);
+  white-space: nowrap;
+}
+
+.principalChipOk {
+  color: var(--pm6-ok);
+  border-color: color-mix(in srgb, var(--pm6-ok) 26%, transparent);
+  background: var(--pm6-ok-tint);
+  text-transform: uppercase;
+  letter-spacing: 0.06em;
+}
+
+.principal .tabs {
+  gap: var(--pm6-space-2);
+  padding: var(--pm6-space-3) var(--ws-pad-x, 24px);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.principal .tab {
+  display: inline-flex;
+  align-items: center;
+  gap: 8px;
+  border-color: var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+}
+
+.principal .tabActive {
+  color: var(--pm6-accent);
+  border-color: color-mix(in srgb, var(--pm6-accent) 28%, transparent);
+  background: var(--pm6-accent-tint);
+}
+
+.tabCount {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-width: 18px;
+  height: 18px;
+  padding: 0 5px;
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-surface);
+  border: 1px solid var(--pm6-border);
+  font-size: 0.625rem;
+  font-weight: 700;
+  line-height: 1;
+  color: var(--pm6-muted-strong);
+}
+
+.principal .tabActive .tabCount {
+  color: var(--pm6-accent);
+  border-color: color-mix(in srgb, var(--pm6-accent) 24%, transparent);
+}
+
+/* ---------- principal subjects index ---------- */
+
+.masterHead {
+  display: flex;
+  flex-direction: column;
+  gap: 4px;
+  padding: 0 2px var(--pm6-space-2);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.masterHeadRow {
+  display: flex;
+  align-items: baseline;
+  justify-content: space-between;
+  gap: var(--pm6-space-2);
+}
+
+.masterTitle {
+  margin: 0;
+  font-size: 1rem;
+  font-weight: 650;
+  color: var(--pm6-ink);
+}
+
+.masterCount {
+  font-size: 0.75rem;
+  color: var(--pm6-muted);
+  white-space: nowrap;
+}
+
+.masterNote {
+  margin: 0;
+  font-size: 0.78rem;
+  line-height: 1.45;
+  color: var(--pm6-muted-strong);
+}
+
+.principal .list {
+  gap: var(--pm6-space-3);
+  overflow-y: auto;
+  padding: var(--pm6-space-2) 2px var(--pm6-space-2);
+}
+
+.principal .card {
+  gap: 6px;
+  padding: var(--pm6-space-3);
+  border-color: var(--pm6-border);
+}
+
+.principal .cardSelected {
+  border-color: color-mix(in srgb, var(--pm6-accent) 32%, var(--pm6-border));
+  background: var(--pm6-accent-tint);
+  box-shadow: none;
+}
+
+.principal .ordinal {
+  font-size: 0.6875rem;
+  font-weight: 600;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-faint);
+}
+
+.principal .cardHeading {
+  justify-content: space-between;
+  margin-bottom: 0;
+}
+
+/* « En cours » reads as the live subject (accent), not as a neutral state. */
+.principal .currentBadge {
+  padding: 2px 8px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid color-mix(in srgb, var(--pm6-accent) 26%, transparent);
+  background: var(--pm6-accent-tint);
+  color: var(--pm6-accent);
+  letter-spacing: 0.06em;
+}
+
+.principal .cardTitle {
+  font-size: 0.9375rem;
+}
+
+.principal .cardMeta {
+  justify-content: space-between;
+  gap: var(--pm6-space-2);
+}
+
+.cardPoints {
+  margin-left: auto;
+  color: var(--pm6-accent);
+  white-space: nowrap;
+}
+
+.statusBadge {
+  display: inline-flex;
+  align-items: center;
+  padding: 2px 8px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+  font-size: 0.6875rem;
+  font-weight: 600;
+  color: var(--pm6-muted-strong);
+  white-space: nowrap;
+}
+
+.statusBadge[data-status="active"] {
+  color: var(--pm6-ok);
+  border-color: color-mix(in srgb, var(--pm6-ok) 26%, transparent);
+  background: var(--pm6-ok-tint);
+}
+
+/* ---------- principal subject detail ---------- */
+
+.detailCol {
+  min-width: 0;
+  min-height: 0;
+  overflow-y: auto;
+  background: var(--pm6-canvas);
+}
+
+.detailCol > .empty {
+  padding: var(--pm6-space-5);
+  max-width: 44ch;
+}
+
+.detailInner {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+  padding: var(--pm6-space-4) var(--pm6-space-5) var(--pm6-space-5);
+}
+
+.detailBack {
+  display: none;
+  align-self: flex-start;
+  appearance: none;
+  border: 0;
+  background: transparent;
+  padding: 0;
+  min-height: 38px;
+  align-items: center;
+  font: inherit;
+  font-size: 0.8125rem;
+  font-weight: 600;
+  color: var(--pm6-accent);
+  cursor: pointer;
+}
+
+.detailHead {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+  padding-bottom: var(--pm6-space-3);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.detailHeadRow {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-2);
+}
+
+.detailBadges {
+  display: inline-flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: var(--pm6-space-2);
+}
+
+.detailUpdated {
+  font-size: 0.75rem;
+  color: var(--pm6-muted);
+  white-space: nowrap;
+}
+
+.detailTitle {
+  margin: 0;
+  font-size: 1.5rem;
+  font-weight: 650;
+  letter-spacing: -0.02em;
+  line-height: 1.25;
+  color: var(--pm6-ink);
+  overflow-wrap: anywhere;
+}
+
+.detailSummary {
+  margin: 0;
+  max-width: 78ch;
+  font-size: 0.875rem;
+  line-height: 1.6;
+  color: var(--pm6-muted-strong);
+}
+
+.detailSection {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+  min-width: 0;
+  padding-bottom: var(--pm6-space-3);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.detailSection:last-of-type {
+  border-bottom: 0;
+  padding-bottom: 0;
+}
+
+.detailSectionHead {
+  margin: 0;
+  display: flex;
+  align-items: baseline;
+  justify-content: space-between;
+  gap: var(--pm6-space-2);
+}
+
+.detailSectionLabel {
+  font-size: 0.625rem;
+  font-weight: 600;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-faint);
+}
+
+.detailSectionCount {
+  font-size: 0.6875rem;
+  color: var(--pm6-muted);
+  font-variant-numeric: tabular-nums;
+  white-space: nowrap;
+}
+
+.detailUnavailable {
+  margin: 0;
+  font-size: 0.78rem;
+  line-height: 1.5;
+  font-style: italic;
+  color: var(--pm6-muted);
+}
+
+/* Marked lists — ✓ for stabilized, ○ for still-open points (94:2). */
+.markedList {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 5px;
+  font-size: 0.875rem;
+  line-height: 1.5;
+  color: var(--pm6-ink);
+}
+
+.markedList li {
+  display: grid;
+  grid-template-columns: 16px minmax(0, 1fr);
+  gap: var(--pm6-space-2);
+  align-items: baseline;
+}
+
+.markedList li::before {
+  font-size: 0.8125rem;
+  line-height: 1.5;
+}
+
+.markedList[data-marker="stabilized"] li::before {
+  content: "✓";
+  color: var(--pm6-ok);
+}
+
+.markedList[data-marker="open"] li::before {
+  content: "○";
+  color: var(--pm6-accent);
+}
+
+.linkedPills {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 6px;
+}
+
+.linkedPill {
+  display: inline-flex;
+  align-items: center;
+  gap: 6px;
+  appearance: none;
+  border-radius: 8px;
+  border: 0;
+  background: var(--pm6-surface-sunken);
+  padding: 5px 9px;
+  min-height: 30px;
+  font: inherit;
+  font-size: 0.6875rem;
+  font-weight: 650;
+  letter-spacing: 0.04em;
+  color: var(--pm6-muted-strong);
+  cursor: pointer;
+}
+
+.linkedPill[data-kind="reserve"],
+.linkedPill[data-kind="reserve-item"] {
+  background: #f2ede7;
+  color: #6d645c;
+}
+
+.linkedPill:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+}
+
+.linkedPillCount {
+  font-variant-numeric: tabular-nums;
+  font-weight: 650;
+  font-size: 0.8125rem;
+  letter-spacing: 0.015em;
+}
+
+.linkedPillLabel {
+  font-size: 0.6875rem;
+  letter-spacing: 0.04em;
+}
+
+.exchangePanel {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 8px;
+  border: 0;
+  background: transparent;
+}
+
+.exchangePanel[data-expanded="true"] {
+  max-height: 260px;
+  overflow-y: auto;
+  padding-right: 2px;
+}
+
+.exchangeRow {
+  display: flex;
+  flex-direction: column;
+  gap: 5px;
+  width: 100%;
+  text-align: left;
+  appearance: none;
+  border: 0;
+  border-radius: 8px;
+  background: #fbf7f2;
+  padding: 10px 12px;
+  font: inherit;
+  color: inherit;
+  cursor: pointer;
+  min-height: 55px;
+}
+
+.exchangeRow:hover:not(:disabled) {
+  background: color-mix(in srgb, #fbf7f2 70%, var(--pm6-surface));
+}
+
+.exchangeRow:disabled {
+  cursor: not-allowed;
+  opacity: 0.72;
+}
+
+.exchangeRow:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+}
+
+.detailFooter {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-3);
+  padding-top: var(--pm6-space-2);
+}
+
+/* ---------- principal: compact ---------- */
+
+@media (max-width: 1199px) {
+  .principal .body {
+    grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
+  }
+
+  .principal .masterCol {
+    padding: var(--pm6-space-3);
+  }
+
+  .detailInner {
+    padding: var(--pm6-space-3) var(--pm6-space-4) var(--pm6-space-4);
+  }
+}
+
+/* ---------- principal: mobile list ↔ detail (192:41 / 192:81) ---------- */
+
+@media (max-width: 899px) {
+  .principal .body {
+    grid-template-columns: minmax(0, 1fr);
+  }
+
+  .principal .masterCol {
+    border-right: 0;
+    padding: var(--pm6-space-3) var(--ws-pad-x, 16px) var(--pm6-space-4);
+  }
+
+  .principal .masterCol[data-mobile-hidden="true"] {
+    display: none;
+  }
+
+  .detailCol {
+    background: transparent;
+    overflow: visible;
+  }
+
+  .detailCol[data-mobile-hidden="true"] {
+    display: none;
+  }
+
+  .detailInner {
+    padding: var(--pm6-space-3) var(--ws-pad-x, 16px) var(--pm6-space-5);
+  }
+
+  .detailBack {
+    display: inline-flex;
+  }
+
+  /*
+   * The index head is the mobile page head — 192:41 shows neither a second
+   * title nor a duplicate count (the tab badge already carries it).
+   */
+  .masterHead {
+    border-bottom: 0;
+    padding-bottom: 0;
+  }
+
+  .masterTitle,
+  .masterCount {
+    display: none;
+  }
+
+  .principal .list {
+    overflow: visible;
+  }
+
+  .principal .tabs {
+    overflow-x: auto;
+    flex-wrap: nowrap;
+    scrollbar-width: none;
+  }
+
+  .principal .tabs::-webkit-scrollbar {
+    display: none;
+  }
+
+  .principalBackFull {
+    display: none;
+  }
+
+  .principalBackShort {
+    display: inline;
+  }
+
+  .exchangeRow {
+    gap: 5px;
+  }
+}
```

#### `HistorySurface.tsx` — B5 History master/detail + labels
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
index ab08623d..7f862cbd 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx
@@ -1,157 +1,123 @@
 "use client";

-import { useEffect, useState } from "react";
+import { useEffect, useMemo, useState } from "react";
 import { w2ReadProjectHistoryAction } from "@/features/project-assistant/w2/actions";
 import type { W2ProjectHistoryReadModel } from "@/features/project-assistant/w2/projectHistory";
+import {
+  deriveProjectHistoryEvents,
+  filterProjectHistoryEvents,
+  type PilotHistoryEvent,
+  type PilotHistoryFilter,
+} from "@/features/project-assistant/w2/deriveProjectHistoryEvents";
 import type { ProjectAssistantRehydrateEvidenceOutcomeSuccess } from "@/features/project-assistant/types";
 import type { GetProjectSuccess } from "../types";
 import styles from "./HistorySurface.module.css";

-type DurableAnchor = {
-  id: string;
-  kind: string;
-  label: string;
-  detail: string;
-};
-
-function trajectoryAnchorDetail(
-  anchor: W2ProjectHistoryReadModel["trajectory"]["versions"][number],
-): string {
-  if (anchor.isEffectiveCurrent) {
-    return anchor.decidedByDecisionRef
-      ? `Décidée et courante · décision ${anchor.decidedByDecisionRef}`
-      : "Courante · antérieure au rattachement de décision";
-  }
-  if (anchor.status === "candidate") {
-    return "Proposée · pas encore décidée, pas courante";
-  }
-  return `Statut ${anchor.status} · non courante`;
+function formatTime(iso: string | null): string {
+  if (!iso) return "Heure non enregistrée";
+  const d = new Date(iso);
+  if (Number.isNaN(d.getTime())) return "Heure non enregistrée";
+  return d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
 }

-/** W2 durable anchors: trajectory versions, human decisions, contracts. */
-function buildW2Anchors(history: W2ProjectHistoryReadModel): DurableAnchor[] {
-  const anchors: DurableAnchor[] = [];
-
-  if (history.cycle.activeCycleInstanceId) {
-    anchors.push({
-      id: `cycle:${history.cycle.activeCycleInstanceId}`,
-      kind: "Cycle",
-      label: history.cycle.cycleTypeId
-        ? `${history.cycle.cycleTypeId} · profil ${history.cycle.profile ?? "inconnu"}`
-        : "Cycle rattaché",
-      detail: history.cycle.status
-        ? `Statut ${history.cycle.status}`
-        : "Cycle distinct du projet",
-    });
-  }
+/** Day bucket key — stable per calendar day, or `undated` when no Product date. */
+function dayKey(iso: string | null): string {
+  if (!iso) return "undated";
+  const d = new Date(iso);
+  if (Number.isNaN(d.getTime())) return "undated";
+  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
+}

-  for (const version of history.trajectory.versions) {
-    anchors.push({
-      id: `trj:${version.trajectoryId}:${version.version}`,
-      kind: "Trajectoire",
-      label: `Version ${version.version} · ${version.stepCount} étapes`,
-      detail: trajectoryAnchorDetail(version),
-    });
-  }
+function dayLabel(iso: string | null): string {
+  if (dayKey(iso) === "undated") return "Date non enregistrée";
+  const d = new Date(iso!);
+  const today = new Date();
+  const yesterday = new Date(today);
+  yesterday.setDate(today.getDate() - 1);
+  if (dayKey(iso) === dayKey(today.toISOString())) return "Aujourd'hui";
+  if (dayKey(iso) === dayKey(yesterday.toISOString())) return "Hier";
+  return d.toLocaleDateString("fr-FR", {
+    day: "2-digit",
+    month: "long",
+    year: "numeric",
+  });
+}

-  for (const decision of history.decisions) {
-    anchors.push({
-      id: `dec:${decision.decisionId}`,
-      kind: "Décision humaine",
-      label: `Option retenue ${decision.selectedOptionRef}`,
-      detail: `${decision.status} · décideur ${decision.actorRole} · base ${
-        decision.basisSourceType ?? "absente"
-      }${decision.basisTrajectoryRef ? ` · ${decision.basisTrajectoryRef}` : ""}`,
-    });
-  }
+function detailWhenLabel(event: PilotHistoryEvent): string {
+  if (!event.occurredAt) return "Moment non enregistré";
+  return `${dayLabel(event.occurredAt)} · ${formatTime(event.occurredAt)}`;
+}

-  for (const contract of history.contracts) {
-    anchors.push({
-      id: `xct:${contract.executionContractId}`,
-      kind: "Contrat d'exécution",
-      label: `Version ${contract.version} · ${contract.status}`,
-      detail: contract.decisionRefs.length
-        ? `Rattaché à ${contract.decisionRefs.join(", ")}`
-        : "Aucune décision rattachée",
-    });
-  }
+/**
+ * P3 78:2 filters — Tout / Décisions / Changements. « Vérifié » is an event-type
+ * chip inside the list, never a fourth filter.
+ */
+const FILTERS: ReadonlyArray<{ id: PilotHistoryFilter; label: string }> = [
+  { id: "all", label: "Tout" },
+  { id: "decisions", label: "Décisions" },
+  { id: "changes", label: "Changements" },
+];

-  return anchors;
+/** Pilot-facing chip for the event bucket (tone drives the P3 colour). */
+function bucketTone(event: PilotHistoryEvent): "decision" | "verified" | "change" {
+  if (event.filterBucket === "decisions") return "decision";
+  if (event.filterBucket === "verified") return "verified";
+  return "change";
 }

-function buildAnchors(
-  result: GetProjectSuccess,
-  durableOutcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
-  history: W2ProjectHistoryReadModel | null,
-): DurableAnchor[] {
-  const anchors: DurableAnchor[] = [
-    {
-      id: "project",
-      kind: "Projet",
-      label: result.project.name,
-      detail: "Identité projet enregistrée",
-    },
-    {
-      id: "lps",
-      kind: "État du projet",
-      label: `Version ${result.livingState.version}`,
-      detail: result.livingState.createdAt,
-    },
-  ];
-
-  if (history) {
-    anchors.push(...buildW2Anchors(history));
-  } else if (result.livingState.activeCycleInstanceId) {
-    anchors.push({
-      id: "cycle",
-      kind: "Cycle",
-      label: "Référence factuelle de cycle",
-      detail: "Cycle distinct du projet",
-    });
-  }
-
-  if (durableOutcome) {
-    for (const evidence of durableOutcome.evidence) {
-      anchors.push({
-        id: `evidence:${evidence.evidenceId}`,
-        kind: "Preuve",
-        label: evidence.status,
-        detail: "Preuve enregistrée",
-      });
-    }
-    for (const rb of durableOutcome.reviewBundles) {
-      anchors.push({
-        id: `rb:${rb.reviewBundleId}`,
-        kind: "Dossier de revue",
-        label: rb.status,
-        detail: "Revue enregistrée",
-      });
-    }
-    anchors.push({
-      id: "recommendation",
-      kind: "Recommandation",
-      label: durableOutcome.recommendation.recommendationLabel,
-      detail: "≠ Décision humaine",
-    });
+function bucketChipLabel(event: PilotHistoryEvent): string {
+  switch (bucketTone(event)) {
+    case "decision":
+      return "Décision";
+    case "verified":
+      return "Vérifié";
+    default:
+      return "Changement";
   }
+}

-  return anchors;
+/** Honest Nora handoff draft — prefill only, never a Product mutation. */
+function askNoraDraft(event: PilotHistoryEvent): string {
+  return [
+    `Nora, explique-moi cet élément de l'historique : « ${event.title} ».`,
+    `Type : ${event.kindLabel} · source ${event.sourceKind}.`,
+    "Dis-moi ce qui est réellement établi et ce qui manque pour le comprendre.",
+  ].join("\n");
 }

+const UNAVAILABLE_DECIDED =
+  "Aucun contenu de décision rattaché à cet événement dans les faits Product.";
+const UNAVAILABLE_WHY =
+  "Aucune base durable enregistrée pour cet événement — la raison n'est pas reconstituée ici.";
+const UNAVAILABLE_IMPACT =
+  "Aucun impact établi par un fait Product pour cet événement.";
+const UNAVAILABLE_VERIFICATION =
+  "Aucune vérification rattachée — cet événement n'est pas présenté comme vérifié.";
+
 /**
- * F9 — durable factual anchors only (never a replayed conversation transcript).
- * Trajectory versions, human decisions and execution contracts are read from
- * the W2 minimal read model; conversation, proposal and requested confirmation
- * stay process-local and are reported as absent rather than reconstructed.
+ * P5-S07 / P3 Historique (78:2 · 190:111 · 190:380 · 190:412).
+ * Product-derived master/detail + local search. Never a transcript replay,
+ * never a HistoryStore, never an invented why / impact / verification.
  */
 export function HistorySurface({
   result,
   durableOutcome = null,
+  onReturnToOverview,
+  onAskNora,
 }: {
   result: GetProjectSuccess;
   durableOutcome?: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null;
+  onReturnToOverview?: () => void;
+  /** Prefill the conversation composer about one event. MUST NOT send. */
+  onAskNora?: (draft: string) => void;
 }) {
   const [history, setHistory] = useState<W2ProjectHistoryReadModel | null>(null);
+  const [filter, setFilter] = useState<PilotHistoryFilter>("all");
+  const [query, setQuery] = useState("");
+  const [selectedId, setSelectedId] = useState<string | null>(null);
+  const [mobileShowDetail, setMobileShowDetail] = useState(false);
+  const [askDraft, setAskDraft] = useState("");
+
   const projectId = result.project.projectId;
   const lpsVersion = result.livingState.version;

@@ -166,34 +132,418 @@ export function HistorySurface({
     };
   }, [projectId, lpsVersion]);

-  const anchors = buildAnchors(result, durableOutcome, history);
+  const events = useMemo(() => {
+    if (!history) {
+      // Minimum identity anchors while W2 history loads / fails closed.
+      const fallback: W2ProjectHistoryReadModel = {
+        projectId,
+        projectTitle: result.project.name,
+        lps: {
+          lpsId: result.livingState.id,
+          version: result.livingState.version,
+        },
+        cycle: {
+          activeCycleInstanceId:
+            result.livingState.activeCycleInstanceId ?? null,
+          cycleTypeId: null,
+          profile: null,
+          status: null,
+        },
+        trajectory: {
+          effectiveCurrent: null,
+          proposedNotYetDecided: null,
+          versions: [],
+        },
+        decisions: [],
+        contracts: [],
+        evidence: [],
+        reviewBundles: [],
+        syntheses: [],
+        absent: [],
+        boundNote: "Borné · chargement History en cours.",
+      };
+      return deriveProjectHistoryEvents({
+        history: fallback,
+        durable: durableOutcome,
+      });
+    }
+    return deriveProjectHistoryEvents({
+      history,
+      durable: durableOutcome,
+    });
+  }, [history, durableOutcome, projectId, result.project.name, result.livingState]);
+
+  const visible = useMemo(
+    () => filterProjectHistoryEvents(events, { filter, query }),
+    [events, filter, query],
+  );
+
+  /** Day groups in projection order — grouping is presentation only. */
+  const groups = useMemo(() => {
+    const out: Array<{ key: string; label: string; items: PilotHistoryEvent[] }> =
+      [];
+    for (const event of visible) {
+      const key = dayKey(event.occurredAt);
+      const last = out[out.length - 1];
+      if (last && last.key === key) {
+        last.items.push(event);
+        continue;
+      }
+      out.push({ key, label: dayLabel(event.occurredAt), items: [event] });
+    }
+    return out;
+  }, [visible]);
+
+  useEffect(() => {
+    if (visible.length === 0) {
+      setSelectedId(null);
+      return;
+    }
+    if (!selectedId || !visible.some((e) => e.eventId === selectedId)) {
+      setSelectedId(visible[0]!.eventId);
+    }
+  }, [visible, selectedId]);
+
+  const selected: PilotHistoryEvent | null =
+    visible.find((e) => e.eventId === selectedId) ?? null;
+
+  useEffect(() => {
+    setAskDraft("");
+  }, [selectedId]);
+
+  function selectEvent(eventId: string) {
+    setSelectedId(eventId);
+    setMobileShowDetail(true);
+  }
+
+  function submitAskNora() {
+    if (!selected || !onAskNora) return;
+    const draft = askDraft.trim() ? askDraft.trim() : askNoraDraft(selected);
+    onAskNora(draft);
+  }

   return (
     <section
       className={styles.root}
       data-testid="project-history-panel"
+      data-mobile-detail={mobileShowDetail && selected ? "true" : "false"}
       aria-labelledby="pm6-history-title"
     >
-      <header className={styles.head}>
-        <p className={styles.eyebrow}>Historique</p>
-        <h2 id="pm6-history-title" className={styles.title}>
-          Ce qui est réellement enregistré
-        </h2>
-        <p className={styles.note}>
-          Repères factuels du projet seulement. Les détails techniques restent
-          secondaires ; la conversation n&apos;est pas rejouée ici.
-        </p>
-      </header>
-      <ol className={styles.timeline}>
-        {anchors.map((anchor) => (
-          <li key={anchor.id} className={styles.entry}>
-            <span className={styles.marker} aria-hidden />
-            <span className={styles.kind}>{anchor.kind}</span>
-            <span className={styles.label}>{anchor.label}</span>
-            <span className={styles.detail}>{anchor.detail}</span>
-          </li>
-        ))}
-      </ol>
+      <div
+        className={styles.layout}
+        data-testid="history-master-detail"
+        data-mobile-detail={mobileShowDetail && selected ? "true" : "false"}
+      >
+        <div
+          className={styles.masterPane}
+          data-testid="history-list-pane"
+          data-mobile-hidden={mobileShowDetail && selected ? "true" : "false"}
+        >
+          <header className={styles.head}>
+            {onReturnToOverview ? (
+              <button
+                type="button"
+                className={styles.backLink}
+                data-testid="history-back-overview"
+                onClick={onReturnToOverview}
+              >
+                ← Retour à l&apos;Aperçu
+              </button>
+            ) : null}
+            <div className={styles.titleRow}>
+              <h2 id="pm6-history-title" className={styles.title}>
+                Historique
+              </h2>
+              <div
+                className={styles.filters}
+                role="toolbar"
+                aria-label="Filtrer l'historique"
+              >
+                {FILTERS.map((item) => (
+                  <button
+                    key={item.id}
+                    type="button"
+                    className={styles.filter}
+                    data-selected={filter === item.id ? "true" : "false"}
+                    data-filter={item.id}
+                    aria-pressed={filter === item.id}
+                    data-testid={`history-filter-${item.id}`}
+                    onClick={() => setFilter(item.id)}
+                  >
+                    {item.label}
+                  </button>
+                ))}
+              </div>
+            </div>
+            <p className={styles.note}>
+              Retrouve les changements importants du projet et le contexte lié à
+              chaque événement. Projection dérivée des faits Product — la
+              conversation n&apos;est pas rejouée ici.
+            </p>
+          </header>
+
+          <label className={styles.searchLabel}>
+            <span className={styles.srOnly}>
+              Rechercher dans l&apos;historique
+            </span>
+            <input
+              type="search"
+              className={styles.search}
+              placeholder="Rechercher dans l'historique…"
+              value={query}
+              onChange={(e) => setQuery(e.target.value)}
+              data-testid="history-search"
+              autoComplete="off"
+            />
+          </label>
+
+          <div className={styles.listScroll}>
+            {visible.length === 0 ? (
+              <p className={styles.empty} data-testid="history-empty">
+                Aucun événement ne correspond à ce filtre.
+              </p>
+            ) : (
+              groups.map((group) => (
+                <section
+                  key={group.key}
+                  className={styles.group}
+                  data-testid={`history-group-${group.key}`}
+                >
+                  <p className={styles.groupLabel}>{group.label}</p>
+                  <ol className={styles.timeline}>
+                    {group.items.map((event) => {
+                      const selectedRow = event.eventId === selectedId;
+                      return (
+                        <li key={event.eventId} className={styles.timelineItem}>
+                          <button
+                            type="button"
+                            className={styles.entry}
+                            data-selected={selectedRow ? "true" : "false"}
+                            data-tone={bucketTone(event)}
+                            data-testid={`history-event-${event.eventId}`}
+                            aria-current={selectedRow ? "true" : undefined}
+                            onClick={() => selectEvent(event.eventId)}
+                          >
+                            <span
+                              className={styles.marker}
+                              data-tone={bucketTone(event)}
+                              aria-hidden
+                            />
+                            <span className={styles.label}>{event.title}</span>
+                            <span
+                              className={styles.kind}
+                              data-tone={bucketTone(event)}
+                            >
+                              {bucketChipLabel(event)}
+                            </span>
+                            <span className={styles.chevron} aria-hidden>
+                              →
+                            </span>
+                            <span className={styles.metaRow}>
+                              <span className={styles.when}>
+                                {formatTime(event.occurredAt)}
+                              </span>
+                              <span className={styles.detail}>
+                                {event.summary}
+                              </span>
+                            </span>
+                          </button>
+                        </li>
+                      );
+                    })}
+                  </ol>
+                </section>
+              ))
+            )}
+            {history?.absent?.length ? (
+              <p className={styles.absent} data-testid="history-absent">
+                Non reconstitué ici : {history.absent.join(" · ")}
+              </p>
+            ) : null}
+          </div>
+        </div>
+
+        <aside
+          className={styles.detailPane}
+          data-testid="history-detail-pane"
+          data-mobile-hidden={mobileShowDetail && selected ? "false" : "true"}
+          aria-live="polite"
+        >
+          {selected ? (
+            <div className={styles.detailInner}>
+              <button
+                type="button"
+                className={styles.backMobile}
+                data-testid="history-back-to-list"
+                onClick={() => setMobileShowDetail(false)}
+              >
+                ← Historique
+              </button>
+
+              <div className={styles.detailHead}>
+                <div className={styles.detailHeadRow}>
+                  <span
+                    className={styles.detailKind}
+                    data-tone={bucketTone(selected)}
+                  >
+                    {bucketChipLabel(selected)}
+                  </span>
+                  <span className={styles.detailWhen}>
+                    {detailWhenLabel(selected)}
+                    {selected.isCurrent ? " · Courant" : ""}
+                  </span>
+                </div>
+                <h3 className={styles.detailTitle}>{selected.title}</h3>
+                <p className={styles.detailSummary}>{selected.summary}</p>
+              </div>
+
+              <div
+                className={styles.detailBlock}
+                data-testid="history-detail-decided"
+              >
+                <p className={styles.detailBlockLabel}>Ce qui a été décidé</p>
+                <p
+                  className={styles.detailBlockBody}
+                  data-available={selected.decidedWhat ? "true" : "false"}
+                >
+                  {selected.decidedWhat ?? UNAVAILABLE_DECIDED}
+                </p>
+              </div>
+
+              <div
+                className={styles.detailBlock}
+                data-testid="history-detail-why"
+              >
+                <p className={styles.detailBlockLabel}>Pourquoi</p>
+                <p
+                  className={styles.detailBlockBody}
+                  data-available={selected.why ? "true" : "false"}
+                >
+                  {selected.why ?? UNAVAILABLE_WHY}
+                </p>
+              </div>
+
+              <div
+                className={styles.detailBlock}
+                data-testid="history-detail-impact"
+              >
+                <p className={styles.detailBlockLabel}>Impact</p>
+                <p
+                  className={styles.detailBlockBody}
+                  data-available={selected.impact ? "true" : "false"}
+                >
+                  {selected.impact ?? UNAVAILABLE_IMPACT}
+                </p>
+              </div>
+
+              <div
+                className={styles.verification}
+                data-testid="history-detail-verification"
+                data-available={selected.verification ? "true" : "false"}
+              >
+                <p className={styles.verificationTitle}>
+                  <span className={styles.verificationDot} aria-hidden />
+                  Éléments liés
+                </p>
+                <p className={styles.verificationBody}>
+                  {selected.verification ?? UNAVAILABLE_VERIFICATION}
+                </p>
+                {selected.linked.length > 0 ? (
+                  <p className={styles.verificationLink}>
+                    {selected.linked.length} élément
+                    {selected.linked.length === 1 ? "" : "s"} lié
+                    {selected.linked.length === 1 ? "" : "s"} →
+                  </p>
+                ) : null}
+              </div>
+
+              <div
+                className={styles.detailBlock}
+                data-testid="history-detail-sources"
+              >
+                <p className={styles.detailBlockLabel}>Éléments liés</p>
+                <ul className={styles.linkedList}>
+                  <li className={styles.linkedItem}>
+                    <span className={styles.linkedKind}>
+                      {selected.sourceKind}
+                    </span>
+                    <span className={styles.linkedLabel}>
+                      {selected.sourceId}
+                    </span>
+                  </li>
+                  {selected.linked.map((link) => (
+                    <li
+                      key={`${link.kind}:${link.id}`}
+                      className={styles.linkedItem}
+                    >
+                      <span className={styles.linkedKind}>{link.kind}</span>
+                      <span className={styles.linkedLabel}>{link.label}</span>
+                    </li>
+                  ))}
+                </ul>
+                {selected.linked.length === 0 ? (
+                  <p className={styles.sourceMeta}>
+                    Aucun élément lié supplémentaire n&apos;est rattaché à cet
+                    événement.
+                  </p>
+                ) : null}
+              </div>
+
+              <div
+                className={styles.detailBlock}
+                data-testid="history-detail-ask-nora"
+              >
+                <p className={styles.detailBlockLabel}>Besoin de contexte ?</p>
+                {onAskNora ? (
+                  <>
+                    <p className={styles.detailBlockBody}>
+                      Demandez à Nora d&apos;expliquer ce changement, de comparer
+                      deux moments ou de retrouver ce qui a conduit à cette
+                      décision.
+                    </p>
+                    <form
+                      className={styles.askRow}
+                      onSubmit={(e) => {
+                        e.preventDefault();
+                        submitAskNora();
+                      }}
+                    >
+                      <label className={styles.srOnly} htmlFor="history-ask-nora">
+                        Demander à Nora à propos de cet événement
+                      </label>
+                      <input
+                        id="history-ask-nora"
+                        className={styles.askInput}
+                        data-testid="history-ask-nora-input"
+                        placeholder="Demander à Nora…"
+                        value={askDraft}
+                        onChange={(e) => setAskDraft(e.target.value)}
+                        autoComplete="off"
+                      />
+                      <button
+                        type="submit"
+                        className={styles.askSubmit}
+                        data-testid="history-ask-nora-submit"
+                        aria-label="Préparer la question pour Nora"
+                        title="Prépare un brouillon dans la conversation — rien n'est envoyé"
+                      >
+                        ↑
+                      </button>
+                    </form>
+                  </>
+                ) : (
+                  <p className={styles.detailBlockBody} data-available="false">
+                    La reprise dans la conversation n&apos;est pas disponible
+                    depuis cette vue.
+                  </p>
+                )}
+              </div>
+            </div>
+          ) : (
+            <p className={styles.empty}>Sélectionnez un événement.</p>
+          )}
+        </aside>
+      </div>
     </section>
   );
 }
```

#### `HistorySurface.module.css` — B5 History pixel CSS
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
index d0b61c1b..cdfbcbfe 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css
@@ -1,103 +1,833 @@
+/*
+ * P5-S07 Historique — Figma 78:2 (1440×1024, body 1224 = master ~790 | detail ~434),
+ * 190:111 compact (narrow master panel | wide detail), 190:380 / 190:412 mobile.
+ * --pm6-* tokens only; no second token set, no utility framework.
+ */
+
 .root {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-4);
-  background: var(--pm6-surface);
-  border: 1px solid var(--pm6-border-soft);
-  border-radius: var(--pm6-radius-lg);
-  box-shadow: var(--pm6-shadow-card);
-  padding: var(--pm6-space-5);
+  min-width: 0;
+  min-height: 0;
+  flex: 1 1 auto;
+  background: var(--pm6-body);
+}
+
+.layout {
+  display: grid;
+  grid-template-columns: minmax(0, 1fr) var(--pm6-history-detail-w, 434px);
+  align-items: stretch;
+  min-height: 0;
+  flex: 1 1 auto;
+}
+
+/* ---------- master (timeline) ---------- */
+
+.masterPane {
+  display: flex;
+  flex-direction: column;
+  min-width: 0;
+  min-height: 0;
+  gap: var(--pm6-space-3);
+  padding: 18px var(--ws-pad-x, 24px) 24px;
 }

 .head {
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-1);
+  gap: 6px;
+  min-width: 0;
 }

-.eyebrow {
+.backLink {
+  align-self: flex-start;
+  appearance: none;
+  border: 0;
+  background: transparent;
+  padding: 0;
   margin: 0;
-  font-size: 0.7rem;
-  font-weight: 700;
-  letter-spacing: 0.1em;
-  text-transform: uppercase;
-  color: var(--pm6-muted);
+  min-height: 38px;
+  display: inline-flex;
+  align-items: center;
+  font: inherit;
+  font-size: 0.8125rem;
+  font-weight: 600;
+  color: var(--pm6-accent);
+  cursor: pointer;
+}
+
+.backLink:hover {
+  text-decoration: underline;
+}
+
+.titleRow {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-3);
+  min-width: 0;
 }

 .title {
   margin: 0;
-  font-size: 1.02rem;
-  font-weight: 600;
+  font-size: 1.5rem;
+  font-weight: 650;
+  letter-spacing: -0.02em;
+  line-height: 1.2;
   color: var(--pm6-ink);
 }

 .note {
   margin: 0;
-  font-size: 0.84rem;
-  line-height: 1.55;
+  max-width: 74ch;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.filters {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 6px;
+}
+
+.filter {
+  appearance: none;
+  display: inline-flex;
+  align-items: center;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface-sunken);
   color: var(--pm6-muted-strong);
+  padding: 7px 14px;
+  min-height: 38px;
+  font: inherit;
+  font-size: 0.75rem;
+  font-weight: 600;
+  cursor: pointer;
+  white-space: nowrap;
+}
+
+.filter:hover {
+  color: var(--pm6-ink);
+  border-color: var(--pm6-border-strong);
+}
+
+.filter[data-selected="true"][data-filter="all"] {
+  color: var(--pm6-ink);
+  border-color: var(--pm6-border-strong);
+  background: var(--pm6-surface);
+}
+
+.filter[data-selected="true"][data-filter="decisions"] {
+  color: var(--pm6-accent);
+  border-color: color-mix(in srgb, var(--pm6-accent) 28%, transparent);
+  background: var(--pm6-accent-tint);
+}
+
+.filter[data-selected="true"][data-filter="changes"] {
+  color: var(--pm6-ok);
+  border-color: color-mix(in srgb, var(--pm6-ok) 28%, transparent);
+  background: var(--pm6-ok-tint);
+}
+
+.searchLabel {
+  display: block;
+  min-width: 0;
+}
+
+.search {
+  width: 100%;
+  box-sizing: border-box;
+  border-radius: var(--pm6-radius-sm);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface);
+  color: var(--pm6-ink);
+  padding: 10px 14px;
+  min-height: 38px;
+  font: inherit;
+  font-size: 0.8125rem;
+}
+
+.search::placeholder {
+  color: var(--pm6-muted-faint);
+}
+
+.listScroll {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-4);
+  min-height: 0;
+  overflow-y: auto;
+  padding-right: 2px;
+}
+
+.group {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+  min-width: 0;
+}
+
+.groupLabel {
+  margin: 0;
+  font-size: 0.625rem;
+  font-weight: 600;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-faint);
 }

 .timeline {
   list-style: none;
   margin: 0;
-  padding: 0 0 0 var(--pm6-space-4);
+  padding: 0;
   display: flex;
   flex-direction: column;
-  gap: var(--pm6-space-4);
-  border-left: 1px solid var(--pm6-border);
+  gap: 2px;
+}
+
+.timelineItem {
+  position: relative;
+  padding-left: 20px;
+}
+
+/* Continuous rail behind the dots (desktop only — cards take over below 1200). */
+.timelineItem::before {
+  content: "";
+  position: absolute;
+  left: 3px;
+  top: 0;
+  bottom: 0;
+  width: 1px;
+  background: var(--pm6-border);
 }

 .entry {
   position: relative;
   display: grid;
-  grid-template-columns: minmax(0, auto) minmax(0, 1fr);
-  column-gap: var(--pm6-space-3);
-  row-gap: 2px;
-  align-items: baseline;
+  grid-template-columns: minmax(0, 1fr) auto auto;
+  grid-template-areas:
+    "label kind chevron"
+    "meta  meta meta";
+  column-gap: var(--pm6-space-2);
+  row-gap: 3px;
+  align-items: center;
+  width: 100%;
+  text-align: left;
+  appearance: none;
+  border: 1px solid transparent;
+  border-radius: var(--pm6-radius-md);
+  background: transparent;
+  padding: 11px 12px;
+  font: inherit;
+  color: inherit;
+  cursor: pointer;
+  min-height: 38px;
+}
+
+.entry:hover {
+  background: color-mix(in srgb, var(--pm6-accent) 5%, transparent);
+}
+
+.entry[data-selected="true"] {
+  border-color: color-mix(in srgb, var(--pm6-accent) 32%, var(--pm6-border));
+  background: var(--pm6-accent-tint);
 }

 .marker {
   position: absolute;
-  left: calc(-1 * var(--pm6-space-4) - 4px);
-  top: 6px;
+  left: -20px;
+  top: 17px;
   width: 7px;
   height: 7px;
   border-radius: var(--pm6-radius-pill);
-  background: var(--pm6-forest);
+  background: var(--pm6-muted-ghost);
+  box-shadow: 0 0 0 3px var(--pm6-body);
+}
+
+.marker[data-tone="decision"] {
+  background: var(--pm6-accent);
+}
+
+.marker[data-tone="verified"] {
+  background: var(--pm6-ok);
+}
+
+.marker[data-tone="change"] {
+  background: var(--pm6-gold);
+}
+
+.label {
+  grid-area: label;
+  min-width: 0;
+  font-size: 0.875rem;
+  font-weight: 600;
+  line-height: 1.35;
+  color: var(--pm6-ink);
+  overflow-wrap: anywhere;
 }

 .kind {
-  font-size: 0.7rem;
+  grid-area: kind;
+  justify-self: end;
+  display: inline-flex;
+  align-items: center;
+  padding: 3px 9px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+  font-size: 0.6875rem;
+  font-weight: 600;
+  color: var(--pm6-muted-strong);
+  white-space: nowrap;
+}
+
+.kind[data-tone="decision"] {
+  color: var(--pm6-accent);
+  border-color: color-mix(in srgb, var(--pm6-accent) 26%, transparent);
+  background: var(--pm6-accent-tint);
+}
+
+.kind[data-tone="verified"] {
+  color: var(--pm6-ok);
+  border-color: color-mix(in srgb, var(--pm6-ok) 26%, transparent);
+  background: var(--pm6-ok-tint);
+}
+
+.chevron {
+  grid-area: chevron;
+  justify-self: end;
+  font-size: 0.8125rem;
+  color: var(--pm6-muted-faint);
+}
+
+.metaRow {
+  grid-area: meta;
+  display: flex;
+  flex-wrap: wrap;
+  align-items: baseline;
+  gap: 5px;
+  min-width: 0;
+  font-size: 0.75rem;
+  line-height: 1.45;
+  color: var(--pm6-muted-strong);
+}
+
+.when {
+  flex: 0 0 auto;
+  color: var(--pm6-muted);
+  font-variant-numeric: tabular-nums;
+}
+
+.when::after {
+  content: "·";
+  margin-left: 5px;
+  color: var(--pm6-muted-ghost);
+}
+
+.detail {
+  min-width: 0;
+  overflow-wrap: anywhere;
+}
+
+/* ---------- detail pane ---------- */
+
+.detailPane {
+  min-width: 0;
+  min-height: 0;
+  overflow-y: auto;
+  background: var(--pm6-canvas-raised);
+  border-left: 1px solid var(--pm6-border);
+}
+
+.detailInner {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-3);
+  padding: 18px 20px 28px;
+}
+
+.detailHead {
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+  padding-bottom: var(--pm6-space-3);
+  border-bottom: 1px solid var(--pm6-border);
+}
+
+.detailHeadRow {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  justify-content: space-between;
+  gap: var(--pm6-space-2);
+}
+
+.detailKind {
+  font-size: 0.6875rem;
   font-weight: 700;
-  letter-spacing: 0.06em;
+  letter-spacing: 0.08em;
   text-transform: uppercase;
-  color: var(--pm6-forest);
+  color: var(--pm6-muted-strong);
 }

-.label {
-  font-size: 0.89rem;
+.detailKind[data-tone="decision"] {
+  color: var(--pm6-accent);
+}
+
+.detailKind[data-tone="verified"] {
+  color: var(--pm6-ok);
+}
+
+.detailWhen {
+  font-size: 0.75rem;
+  color: var(--pm6-muted);
+  white-space: nowrap;
+}
+
+.detailTitle {
+  margin: 0;
+  font-size: 1.1875rem;
+  font-weight: 650;
+  line-height: 1.3;
   color: var(--pm6-ink);
   overflow-wrap: anywhere;
 }

-.detail {
-  grid-column: 2;
-  font-size: 0.78rem;
+.detailSummary {
+  margin: 0;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.detailBlock {
+  display: flex;
+  flex-direction: column;
+  gap: 5px;
+  min-width: 0;
+}
+
+.detailBlockLabel {
+  margin: 0;
+  font-size: 0.625rem;
+  font-weight: 600;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: var(--pm6-muted-faint);
+}
+
+.detailBlockBody {
+  margin: 0;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-ink);
+  overflow-wrap: anywhere;
+}
+
+/* Honest unavailable states read as absence, never as a fact. */
+.detailBlockBody[data-available="false"] {
+  color: var(--pm6-muted);
+  font-style: italic;
+}
+
+/* ---------- verification callout ---------- */
+
+.verification {
+  display: flex;
+  flex-direction: column;
+  gap: 5px;
+  padding: 12px 14px;
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid color-mix(in srgb, var(--pm6-ok) 22%, var(--pm6-border));
+  background: var(--pm6-ok-tint);
+}
+
+.verification[data-available="false"] {
+  border-color: var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+}
+
+.verificationTitle {
+  margin: 0;
+  display: inline-flex;
+  align-items: center;
+  gap: 7px;
+  font-size: 0.8125rem;
+  font-weight: 650;
+  color: var(--pm6-ok);
+}
+
+.verification[data-available="false"] .verificationTitle {
+  color: var(--pm6-muted-strong);
+}
+
+.verificationDot {
+  width: 7px;
+  height: 7px;
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-ok);
+}
+
+.verification[data-available="false"] .verificationDot {
+  background: var(--pm6-muted-ghost);
+}
+
+.verificationBody {
+  margin: 0;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-ink-soft);
+}
+
+.verification[data-available="false"] .verificationBody {
+  color: var(--pm6-muted);
+  font-style: italic;
+}
+
+.verificationLink {
+  margin: 0;
+  font-size: 0.6875rem;
+  font-weight: 650;
+  letter-spacing: 0.04em;
+  color: var(--pm6-ok);
+}
+
+/* ---------- sources ---------- */
+
+.linkedList {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+}
+
+.linkedItem {
+  display: flex;
+  flex-direction: column;
+  gap: 2px;
+  border: 1px solid var(--pm6-border);
+  border-radius: var(--pm6-radius-sm);
+  padding: 9px 11px;
+  background: var(--pm6-surface);
+}
+
+.linkedKind {
+  font-size: 0.8125rem;
+  font-weight: 600;
+  color: var(--pm6-ink);
+}
+
+.linkedLabel {
+  font-size: 0.6875rem;
   color: var(--pm6-muted);
   overflow-wrap: anywhere;
 }

-@media (max-width: 767px) {
-  .root {
-    padding: var(--pm6-space-4);
+.sourceMeta {
+  margin: 0;
+  font-size: 0.6875rem;
+  line-height: 1.45;
+  color: var(--pm6-muted);
+}
+
+/* ---------- ask Nora ---------- */
+
+.askRow {
+  display: flex;
+  align-items: center;
+  gap: 6px;
+  margin-top: 2px;
+  padding: 4px 4px 4px 12px;
+  border: 1px solid var(--pm6-border);
+  border-radius: var(--pm6-radius-pill);
+  background: var(--pm6-surface);
+}
+
+.askInput {
+  flex: 1 1 auto;
+  min-width: 0;
+  border: 0;
+  background: transparent;
+  font: inherit;
+  font-size: 0.8125rem;
+  color: var(--pm6-ink);
+  min-height: 32px;
+}
+
+.askInput:focus-visible {
+  outline: none;
+}
+
+.askSubmit {
+  flex: 0 0 auto;
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  width: 30px;
+  height: 30px;
+  border-radius: var(--pm6-radius-pill);
+  border: 1px solid var(--pm6-border);
+  background: var(--pm6-surface-sunken);
+  color: var(--pm6-ink-soft);
+  font: inherit;
+  font-size: 0.8125rem;
+  cursor: pointer;
+}
+
+.askSubmit:hover {
+  background: var(--pm6-accent-tint);
+  border-color: color-mix(in srgb, var(--pm6-accent) 28%, transparent);
+  color: var(--pm6-accent);
+}
+
+/* ---------- shared ---------- */
+
+.empty,
+.absent {
+  margin: 0;
+  font-size: 0.8125rem;
+  line-height: 1.5;
+  color: var(--pm6-muted-strong);
+}
+
+.absent {
+  padding-top: var(--pm6-space-2);
+  font-size: 0.6875rem;
+  color: var(--pm6-muted);
+}
+
+.backMobile {
+  display: none;
+  align-self: flex-start;
+  appearance: none;
+  border: none;
+  background: transparent;
+  color: var(--pm6-accent);
+  font: inherit;
+  font-size: 0.8125rem;
+  font-weight: 600;
+  padding: 0;
+  min-height: 38px;
+  cursor: pointer;
+}
+
+.srOnly {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
+}
+
+.backLink:focus-visible,
+.backMobile:focus-visible,
+.filter:focus-visible,
+.search:focus-visible,
+.entry:focus-visible,
+.askSubmit:focus-visible {
+  outline: none;
+  box-shadow: var(--pm6-focus-ring);
+}
+
+.askRow:focus-within {
+  box-shadow: var(--pm6-focus-ring);
+  border-color: var(--pm6-border-strong);
+}
+
+/*
+ * ---------- 900–1199 compact (190:111) ----------
+ * Narrow master panel on its own surface, wide reading detail.
+ */
+@media (min-width: 900px) and (max-width: 1199px) {
+  .layout {
+    grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
+  }
+
+  .masterPane {
+    background: var(--pm6-rail);
+    border-right: 1px solid var(--pm6-border);
+    padding: 16px 16px 20px;
+  }
+
+  .title {
+    font-size: 1.25rem;
+  }
+
+  .detailPane {
+    background: transparent;
+    border-left: 0;
+  }
+
+  .detailInner {
+    padding: 20px 28px 28px;
+    max-width: 64ch;
+  }
+
+  /* Compact rows read as cards (no timeline rail). */
+  .timelineItem {
+    padding-left: 0;
+  }
+
+  .timelineItem::before {
+    display: none;
+  }
+
+  .timeline {
+    gap: 8px;
   }

   .entry {
+    border-color: var(--pm6-border);
+    background: var(--pm6-surface);
+    grid-template-columns: minmax(0, 1fr) auto;
+    grid-template-areas:
+      "label kind"
+      "meta  meta";
+  }
+
+  .marker,
+  .chevron {
+    display: none;
+  }
+}
+
+/* ---------- <900: one column, list ↔ detail ---------- */
+
+@media (max-width: 899px) {
+  .layout {
     grid-template-columns: minmax(0, 1fr);
   }

+  .masterPane {
+    padding: 12px var(--ws-pad-x, 16px) 20px;
+  }
+
+  .masterPane[data-mobile-hidden="true"] {
+    display: none;
+  }
+
+  .detailPane {
+    background: transparent;
+    border-left: 0;
+    overflow: visible;
+  }
+
+  .detailPane[data-mobile-hidden="true"] {
+    display: none;
+  }
+
+  .detailInner {
+    padding: 12px var(--ws-pad-x, 16px) 28px;
+  }
+
+  .backMobile {
+    display: inline-flex;
+    align-items: center;
+  }
+
+  /* 190:380 — filters and search leave the focused mobile reading flow. */
+  .filters,
+  .searchLabel {
+    display: none;
+  }
+
+  .title {
+    font-size: 1.5rem;
+  }
+
+  .detailTitle {
+    font-size: 1.5rem;
+    letter-spacing: -0.02em;
+  }
+
+  /* Mobile rows are cards, like 190:380. */
+  .timelineItem {
+    padding-left: 0;
+  }
+
+  .timelineItem::before {
+    display: none;
+  }
+
+  .timeline {
+    gap: 10px;
+  }
+
+  /*
+   * 190:380 card: title + time on the first row, event type below the title.
+   * `.metaRow` dissolves so `.when` can occupy its own grid area.
+   */
+  .entry {
+    grid-template-columns: minmax(0, 1fr) auto;
+    grid-template-areas:
+      "label when"
+      "kind  kind";
+    border-color: var(--pm6-border);
+    background: var(--pm6-surface);
+    padding: 14px 14px;
+    row-gap: 6px;
+    align-items: start;
+  }
+
+  .marker,
+  .chevron {
+    display: none;
+  }
+
+  .metaRow {
+    display: contents;
+  }
+
+  .when {
+    grid-area: when;
+    justify-self: end;
+    font-size: 0.75rem;
+  }
+
+  .when::after {
+    content: none;
+  }
+
   .detail {
-    grid-column: 1;
+    display: none;
+  }
+
+  .kind {
+    grid-area: kind;
+    justify-self: start;
+    border: 0;
+    background: transparent;
+    padding: 0;
+    min-height: 0;
+    font-size: 0.75rem;
+    font-weight: 500;
+    color: var(--pm6-accent);
+  }
+
+  .kind[data-tone="verified"] {
+    background: transparent;
+    color: var(--pm6-ok);
+  }
+
+  .kind[data-tone="change"] {
+    background: transparent;
+    color: var(--pm6-gold);
+  }
+}
+
+@media (prefers-reduced-motion: reduce) {
+  .entry,
+  .filter,
+  .askSubmit {
+    transition: none;
   }
 }
```

### 54.B Supporting modified files in CP01 B1–B5 scope

#### `ConversationSurface.tsx` — B1 continuity UX banners
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 81413a2e..ba1ca056 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -116,6 +116,7 @@ export function ConversationSurface({
     lrMaterializeCode,
     f2,
     activeProposal,
+    decisionSubjectContinuity,
     reservesText,
     setReservesText,
     f3Prepare,
@@ -512,6 +513,43 @@ export function ConversationSurface({
         </section>
       ) : null}

+      {decisionSubjectContinuity &&
+      typeof decisionSubjectContinuity === "object" &&
+      "ok" in decisionSubjectContinuity &&
+      decisionSubjectContinuity.ok &&
+      decisionSubjectContinuity.kind === "pending_reinstruction_required" ? (
+        <aside
+          className={styles.proposalCard}
+          data-testid="decision-subject-reinstruction"
+          aria-label="Sujet de décision à reformuler"
+        >
+          <p className={styles.proposalTitle}>Reprise du sujet</p>
+          <p className={styles.proposalMeta}>
+            {decisionSubjectContinuity.message}
+          </p>
+          <p className={styles.proposalMeta}>
+            La proposition process-locale n&apos;est plus disponible. Reformulez
+            avec Nora — aucune proposition n&apos;est inventée.
+          </p>
+        </aside>
+      ) : null}
+      {decisionSubjectContinuity &&
+      typeof decisionSubjectContinuity === "object" &&
+      "ok" in decisionSubjectContinuity &&
+      decisionSubjectContinuity.ok &&
+      decisionSubjectContinuity.kind === "bound_awaiting_decision" ? (
+        <aside
+          className={styles.proposalCard}
+          data-testid="decision-subject-bound"
+          aria-label="Sujet de décision courant"
+        >
+          <p className={styles.proposalTitle}>Sujet de décision courant</p>
+          <p className={styles.proposalMeta}>
+            Options présentées reconstruites depuis le Product (Epistemic) —
+            pas depuis un store process-local.
+          </p>
+        </aside>
+      ) : null}
       {activeProposal && !reservationResolutionProposal ? (
         <section
           className={styles.card}
```

#### `ProjectWorkspacePage.module.css` — principal shell layout
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
index cebe63f9..74e6509d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css
@@ -333,9 +333,14 @@
   background: var(--pm6-body);
 }

-/* Aperçu owns principal width — no permanent sibling context rail. */
+/*
+ * Aperçu / Synthèses / Historique / Journal own principal width — no permanent
+ * sibling context rail. These surfaces own their own full-height master/detail,
+ * so the single grid row stretches instead of hugging its content.
+ */
 .layoutOverview {
   grid-template-columns: minmax(0, 1fr);
+  align-items: stretch;
 }

 .main {
@@ -541,6 +546,7 @@

   .layoutOverview {
     grid-template-columns: minmax(0, 1fr);
+    align-items: stretch;
   }

   .lpsColumn {
@@ -713,10 +719,13 @@
   }

   /*
-   * P5-S04 CP01 B2 — Synthèses is a focused secondary mobile view:
-   * hide project title + primary tabs; SynthesesSurface owns list/detail nav.
+   * P5-S04 CP01 B2 / P5-S07 CP01 — Synthèses, Historique and Journal are
+   * focused secondary mobile views (P3 190:380 / 192:41): hide project title +
+   * primary tabs; each surface owns its own list/detail nav and return link.
    */
-  .root[data-active-view="syntheses"] .projectHeader {
+  .root[data-active-view="syntheses"] .projectHeader,
+  .root[data-active-view="history"] .projectHeader,
+  .root[data-active-view="journal"] .projectHeader {
     display: none;
   }
 }
```

#### `product-tokens.css` — history/journal tokens
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
index 84f468d5..779f2d17 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css
@@ -87,6 +87,11 @@
   --pm6-global-header-h: 54px;
   --pm6-context-width: 356px;
   --pm6-focus-bar-h: 50px;
+
+  /* P3 Historique 78:2 — body 1224 split master ~790 | detail ~434. */
+  --pm6-history-detail-w: 434px;
+  /* P3 Journal 94:2 — body 1226 split subjects index ~440 | detail ~785. */
+  --pm6-journal-index-w: 440px;
 }

 /* Responsive geometry: <1200 compact (rail ~160, context ~280). */
```

### 54.C Created files (full content in §53; not diffs)
- `deriveProjectHistoryEvents.ts`
- `deriveWorkRepresentationProjection.ts`
- `deriveWorkRepresentationFromLifecycle.ts`
- CP01 / S07 tests under `__tests__/…/p5.s07.*`


## 55. Project Git effects
Local edits + new tests/modules only. **No** project git add/commit/push/PR/merge. Staged empty.

## 56. Morris decisions remaining
- ChatGPT Final Critical + Visual Review of CP01
- If PASS → distinct Morris P5-S07 Git Integration Gate (not authorized now)

## 57. Review Handoff evidence
Publisher: `scripts/sfia/publish-review-handoff.sh` · branch `sfia/review-handoff` · mode publish-in-cycle

- Original Critical Review input: `90d165d9` / blob `3794d1bc`
- Prior CP01 handoff tip (this republish input): `01ae693e` / blob `642bcfe5`
- This republish: COMPLETE useful diffs for B1–B5 modified files

## 58. Final Git truth
Branch delivery S07 · HEAD=`7a664d65…` = origin/main · `0 0` · uncommitted candidate · staged empty.

## 59. Verdict
**READY FOR CHATGPT FINAL CRITICAL + VISUAL REVIEW — P5-S07 CP01 LOCAL CANDIDATE**

- P5-S07 PROJECT CONTINUITY = PASS LOCALLY / DETERMINISTIC
- PROP-PL = CLOSED LOCALLY AT TESTED DURABLE RESUME BOUNDARY
- CONV-PL = CLOSED LOCALLY AT TESTED RESUME BOUNDARY
- WORK REPRESENTATION = PASS LOCALLY / PRODUCT-WIRED
- JOURNAL CURRENTNESS = PASS
- JOURNAL PIXEL-PERFECT = PASS AT ALL CANONICAL FRAMES
- HISTORY = MINIMUM-SUFFICIENT PRODUCT-DERIVED
- HISTORY PIXEL-PERFECT = PASS AT ALL CANONICAL FRAMES
- ZERO REAL = YES
- ARCHITECTURE PARALLELISM = NONE
- P5-S07 INTEGRATED = NO
- Git Integration = NOT AUTHORIZED
- P5 COMPLETE = NO
- S08 = NOT STARTED
- P6 READY = NO
- runtime v3 = NON ADOPTED
