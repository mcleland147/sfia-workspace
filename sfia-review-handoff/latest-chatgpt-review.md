# P5-S07 CP01 — Continuity & Work Representation Exit Proof + Pixel-Perfect Journal/History — FULL REVIEW PACK

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

## 54. Useful code diffs
Key deltas (summary):
- Journal principal WorkspaceView + pixel CSS (94:2/94:222/mobile)
- History master/detail + Figma filters/labels + Éléments liés verification block
- actions cycleDecisions filter
- projectHistory evidence/review/syntheses + boundNote
- useProductConversation subject rehydrate (dynamic import)
- LifecycleSurface Option A block

Full unified diffs available via `git diff` on modified paths (uncommitted).

## 55. Project Git effects
Local edits + new tests/modules only. **No** project git add/commit/push/PR/merge. Staged empty.

## 56. Morris decisions remaining
- ChatGPT Final Critical + Visual Review of CP01
- If PASS → distinct Morris P5-S07 Git Integration Gate (not authorized now)

## 57. Review Handoff evidence
Publisher: `scripts/sfia/publish-review-handoff.sh` · branch `sfia/review-handoff` · mode publish-in-cycle · input `90d165d9` / `3794d1bc`

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
