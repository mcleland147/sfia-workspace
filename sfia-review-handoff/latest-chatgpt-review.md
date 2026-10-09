# ChatGPT Review Pack — P6-HQA-COG-01 Conversational Quality Correction

- timestamp: 2026-10-09T00:30:00Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- finding: P6-HQA-COG-01
- cycle: 8 — Delivery / implémentation
- typology: EVOL / correction Product bornée
- profile: CRITICAL
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (INITIAL=FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- previous handoff tip: fa5048341524e9aaefcd0b23dd11a1b7a0f5435c
- project commit: NONE
- project push: NONE
- PR: NONE
- merge: NONE
- P6 PASS: NOT CLAIMED
- runtime v3: NON ADOPTED
- Morris GO consumed: COG01 conversational correction (targeted)
- F01: BLOCKED (unchanged — out of scope)
- UI05: OPEN (unchanged — out of scope)
- UI-01…UI-04: local CLOSED preserved (uncommitted)
- COG01 status: CORRECTION CANDIDATE — READY FOR HUMAN QA (NOT CLOSED)

## Local Git Truth (INITIAL)

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

Working tree already contained UI-01…UI-04 local fixes + prior review pack.
No reset / clean / destructive stash. UI-01…UI-04 preserved.

## Sources consulted

- Convergence Build Doctrine + Roadmap (`projects/sfia-studio/convergence/`)
- Product Completion C1; Product Simplification P2 (P2-D-01…04), P4 DOC04, P6 DOC07
- v3 framing 30 / 32 / 33 / 37 (authority / LPS / epistemology)
- Review handoff fa504834 COG01 root-cause section
- HQ-01 local evidence index under `.tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/`
- Code: `f2/orchestrateF2.ts`, `f2/studioCognitiveContext.ts`, `f2/ckcCognitiveContext.ts`,
  `criticalChallengeClarification.ts` (`formatMw5PiloteText` / `formatMw5MachineText`),
  `presentationLabels.ts` (UI-04 scrub = presentation-only),
  `canonicalConversationSession.ts` persist path
- Cycle template / routing / operating model / guardrails v2.6 (resolved in-repo)

## Fake / Real Qualification

| Claim | Class |
|-------|--------|
| F2 textParts + MW5 disclosure as primary mechanical cause | DETERMINISTIC / CODE (CONFIRMED) |
| Composer produces contextual, non-admin narrative | DETERMINISTIC PROVEN (unit + corrProof01 persistence) |
| UI-01…04 non-regression | DETERMINISTIC PROVEN (UI-03/UI-04 tests PASS) |
| Naturalness / Human QA closure | NOT PROVEN — Human QA required |
| Provider raw improvement / model routing cause | NOT CLAIMED (no new REAL provider calls) |
| F01 unblocked / HQ-01 playable to PASS | NOT CLAIMED |
| P6 PASS / runtime v3 ADOPTED | NOT CLAIMED |

---

# A. Pre-modification analysis (AVANT)

## Seams

1. **Deterministic F2 proposal assembly** in `orchestrateF2.ts` (`NEW_CYCLE_FORMALIZATION` and `ACTIVE_CYCLE_GOVERNED_CONTINUATION`) built `textParts` as stacked administrative strings.
2. **MW5** `surface.disclosure` (`CONTINUE — cognition propose-only…`) was injected into the chat body for CONTINUE; DTO already carries disclosure for audit.
3. **CKC cognitive** output (`reasonWithResolvedCkcContext` → `ckcCognitiveRecommendation`) existed but was buried under admin leads/footers.
4. **F1 / Runner path** already produces contextual Nora prose when `formalizationReady=false` — preserved; not replaced.
5. **UI-04** `formatNoraAssistantDisplayText` scrubbed jargon at presentation only — transcript/context still contaminated.

## Confirmed causes (COG01)

- Primary: deterministic F2 `textParts` + MW5 CONTINUE disclosure injection.
- Secondary: stacked governance footers (Recommendation ≠ / F2 s'arrête / Nora n'émet…).
- Model/routing: secondary for these F2 turns; no new provider evidence this cycle.

## Gap: context available vs used

Available at assembly: user content, history, analysis objective/rephrasedRequest, qualification, LPS unchanged, activeCycleInstanceId, MW5 disposition, optional CKC cognitive recommendation.
Used before: almost none of intent/history/Product activation truth — fixed admin stack.

## Minimal correction (GO-compatible)

- Compose one pilot-facing narrative at F2 source.
- Persist that same text (`completeF2Turn` / `persistCanonicalF2AssistantTurn`).
- Keep MW5 CONTINUE on DTO only.
- Acknowledge reconfirm/start intent honestly without claiming activation (F01 remains BLOCKED).
- No second LLM call; no new runner/router/store; no F01/UI05 changes.

---

# B. Implementation (APRÈS)

## Files modified / created (COG01)

| Path | Action |
|------|--------|
| `projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts` | **CREATED** — pure narrative composer + invariants |
| `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` | **MODIFIED** — both proposal `textParts` sites → composer |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts` | **CREATED** — invariants A–J |
| `projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts` | **MODIFIED** — T10 expects pilot-facing persisted body |

UI-01…UI-04 files **untouched** this cycle.

## Full new module

See repository file:
`projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts`
(complete file — 242 lines — pure functions; no I/O; no provider).

## orchestrateF2 wiring (new-cycle site)

```ts
const narrative = composeF2PilotFacingNarrative({
  kind: "new_cycle_proposal",
  presentation,
  userContent: content,
  history: input.history,
  intentClass: analysis.intentClass,
  objective: analysis.objective,
  rephrasedRequest: analysis.rephrasedRequest,
  cycleLabel: qualification.cycleLabel,
  recommendedProfile: qualification.recommendedProfile,
  recommendationLabel: qualification.recommendationLabel,
  ckcCognitiveRecommendation: qualification.ckcCognitiveRecommendation,
  projectName: project.name,
  projectObjective: project.objective,
  activeCycleInstanceId: project.activeCycleInstanceId,
  lpsUnchanged: project.lpsVersion === preLpsVersion,
  morrisGateRequired,
  executionBlocked,
  mw5Disposition: mw5.surface.disposition,
  mw5EscalatePiloteText:
    mw5.surface.disposition === "ESCALATE" ? mw5.text : null,
});
// text: narrative  — mw5.surface still attached on DTO
```

Active-cycle deliverable proposal site uses `kind: "active_cycle_deliverable_proposal"` with the same pattern.

## BEFORE (historical template — TEST / OBSERVED pattern)

```
[Mode réel] Qualification SFIA et proposition structurée générées. Cycle proposé: Delivery.
Un nouveau cycle est proposé et attend votre validation. Profil recommandé: Standard.
L'état vivant du projet est inchangé (pas d'activation avant démarrage).
RECOMMANDATION — PAS UNE DÉCISION HUMAINE. Recommandation ≠ décision Pilote — …
Pas de gate de construction supplémentaire — aucune exécution — F2 s'arrête ici.
Aucune exécution. CONTINUE — cognition propose-only, pas d'escalade d'autorité.
Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.
```

## AFTER — propose (DETERMINISTIC TEST sample)

```
Je propose le cycle « Delivery » pour avancer sur : Formaliser un cycle Delivery pour la note.
Un cycle candidat est prêt ; il attend votre validation avant tout démarrage.
Profil recommandé : Standard.
L'état vivant du projet est inchangé tant qu'aucun démarrage n'est enregistré.
Ceci reste une recommandation — pas une décision Pilote, ni une activation, ni une exécution.
Rien n'a encore été exécuté.
```

## AFTER — repeated confirm with prior proposal history (DETERMINISTIC TEST sample)

```
Je reconnais votre accord pour démarrer « Delivery ».
Ce tour ne l'active pas : aucune activation de cycle n'est enregistrée sur le projet.
La proposition reste disponible pour la suite — ce n'est pas un nouveau démarrage accompli.
Profil recommandé : Standard.
L'état vivant du projet est inchangé tant qu'aucun démarrage n'est enregistré.
Ceci reste une recommandation — pas une décision Pilote, ni une activation, ni une exécution.
Rien n'a encore été exécuté.
```

Note: Product still does not activate (F01 BLOCKED). Narrative no longer claims launch success.

---

# C. Validations

| Control | Result |
|---------|--------|
| COG01 D0 narrative unit (`p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts`) | PASS — 11 tests |
| corrProof01 D1 conversation | PASS — 17 tests (T10 updated) |
| UI-03 Nora activity thread | PASS — 6 tests |
| UI-04 pilot-facing simplification | PASS — 9 tests |
| qualToGovernedCycle.presentation.d0 | PASS — 21 tests |
| `git diff --check` (COG01 files) | PASS |
| typecheck | PASS for COG01 files; pre-existing errors in untracked `p6-campaign/*.real.test.ts` (DO_NOT_COMMIT) — NOT introduced by COG01 |
| eslint on COG01 files | pre-existing prefer-const / unused import warnings in `orchestrateF2.ts` (not introduced); composer clean |
| next build | NOT RUN — Studio next-dev historically on :3020; avoid webpack clash |
| REAL provider calls | NONE (authorized) |
| HQ-01 Product mutation | NONE |

Commands:

```bash
cd projects/sfia-studio/app
npm test -- --run __tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts
npm test -- --run __tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
npm test -- --run __tests__/pre-m6-product-ui/p6.hqa.ui03.noraActivityThread.ui.test.tsx \
  __tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
```

---

# D. Human QA preparation (required to close COG01)

Deterministic D0 ≠ Human QA CLOSED.

Replay on Studio (same or fresh project; **do not require HQ-01 unlock** — F01 still blocked):

1. Ask Nora to propose Delivery for a concrete objective → expect natural propose, no CONTINUE/admin stack in body or history.
2. Different intention, same project → wording tracks intention.
3. Repeat explicit “je confirme le démarrage” after a proposal → Nora acknowledges history and states cycle **not** activated.
4. Exploratory Q&A (informative) → F1 path still conversational (no forced SFIA report).
5. Push-back / contradiction → no automatic acquiescence; challenge/clarify when MW5 requires.
6. Execution ask → blocked honestly, no invented HD/activation.
7. Compare persisted transcript vs on-screen text → same conversational body.

Criteria: naturalité, pertinence, continuité, challenge, concision, adaptation, fiabilité (no false activation).

---

# E. Reserves / risks

- F01 still causes createCycle-on-reconfirm Product loop — narrative now honest, activation still missing.
- Heuristic activation-intent regex is FR-oriented; edge phrasings may fall through to generic propose (fail-safe: still no false activation claim).
- CKC cognitive snippet still appended when present — quality of that snippet remains provider-dependent (no new REAL campaign this cycle).
- Some secondary F2 clarification strings still use `[Mode réel]` (not the proposal body paths fixed here).

---

# F. Status map

| Item | Status |
|------|--------|
| COG01 | CORRECTION CANDIDATE — READY FOR HUMAN QA (NOT CLOSED) |
| F01 | BLOCKED |
| UI05 | OPEN |
| HQ-01 | BLOCKED (needs F01) |
| UI-01…04 | local CLOSED preserved |
| P6 PASS | NOT CLAIMED |
| runtime v3 | NON ADOPTED |

## Morris decisions still required

1. Human QA observation GO / close COG01 after replay.
2. Distinct GO for F01 (and UI05) remain outstanding for HQ-01 unlock.
3. Structural F01 questions from prior diagnostic (HD required for Delivery start? duplicate candidate disposition?) unchanged.

## Verdict

**COG01 CORRECTION CANDIDATE — READY FOR HUMAN QA**

**READY FOR CHATGPT CRITICAL REVIEW**

Instruction ChatGPT: before answering Morris, re-read this handoff on `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

## Next capability

ChatGPT Critical Review → Human QA COG01 → then F01 correction GO (separate) to unblock HQ-01.
