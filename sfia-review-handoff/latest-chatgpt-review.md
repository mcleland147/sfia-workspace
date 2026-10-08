# ChatGPT Review Pack — P6 HUMAN QA MICRO UI FIX 04 (Pilot-Facing Simplification)

- timestamp: 2026-10-08T18:43:49Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- typology: EVOL / QA / PRODUCT UX / PRESENTATION
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- previous handoff tip: 48b6bd47863b27fd7f13c5bbfef68a683957fdab
- project push: NONE
- PR: NONE
- merge: NONE
- P6 PASS: NOT CLAIMED
- HQ-01 verdict: STILL WAITING HUMAN QA
- Product/runtime semantic change: NO
- architecture change: NO
- Nora engine / routing / persistence: UNCHANGED

## Local Git Truth

```
qa/sfia-studio-p6-global-integrated-product-qa
8a196be1a35ffa2d43e52beddc66b51eab56c99c
aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

Working tree retains prior P6 Human-QA micro-fixes (UI-01/02/03) plus this UI-04 presentation change. No project commit.

## Accumulated P6 Human-QA micro-fixes

1. P6-HQA-UI-01 — Intro truncation = CLOSED
2. P6-HQA-UI-02 — Composer autogrow = CLOSED
3. P6-HQA-UI-03 — Nora activity in thread = CLOSED
4. P6-HQA-UI-04 — Pilot-facing Recommendation / Proposal simplification = CLOSED (this pack)

## Root cause

On the nominal Pilote path, `ConversationSurface` exposed raw F2 machinery:

- status text `READY_NO_GATE`
- `processLocalNotice` (Product SQLite / TEMPORARY WITH EXIT / process memory)
- engine `nextPossibleStep` (`AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI`)
- LPS/project identifiers and technical details
- dense duplicated proposal fields
- F2 narrative footers (`CONTINUE — cognition propose-only`, recommendation≠decision boilerplate)

This conflicted with a conversational ask to “confirm Delivery start” while cards said no decision was required.

## Correction (presentation-only)

Added pilot projections in `presentationLabels.ts`:

- `projectPilotRecommendationCard` → **Ce que Nora recommande** (recommendation / why / state; Standard profile hidden unless arbitration-relevant)
- `projectPilotProposalCard` → **Ce que Nora propose** (main proposition / optional why / consequence / agreement / next step)
- READY_NO_GATE → conversational next step, **no fake decision CTA**
- DECISION_REQUIRED / gate → clear structured-decision wording
- Extended `formatNoraAssistantDisplayText` / `scrubPiloteFacingEngineJargon` for known F2 footers and anti-scope / silent REAL / Evidence jargon
- Nominal path: technical details + processLocalNotice + AUCUNE EXÉCUTION stamp hidden (sr-only / legacy only)
- `exposeLegacyAuthorityPath`: diagnostic details preserved (T21)

Domain objects, authorities, HumanDecision / Confirmation semantics, cycle activation, Nora engine, routing, persistence: **unchanged**.

## Projection before → after

| Surface | Before | After |
|--------|--------|-------|
| Recommendation title | Ce que Nora comprend | Ce que Nora recommande |
| Status / freshness | READY_NO_GATE · RECOMMANDATION — PAS… | state: cycle not started; freshness only if stale |
| Proposal | status + 6 dense fields + processLocalNotice + stamp | proposition + short why + next step |
| Next action (READY_NO_GATE) | F2 S'ARRÊTE ICI | conversational invite to continue with Nora |
| Chips | RECOMMANDATION / AUCUNE EXÉCUTION | Recommandation / Proposition (noExecution chip legacy-only) |

## Files modified

- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`
- `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx` (new)

## Tests

- UI-04: **9/9 PASS**
- UI-03 regression: PASS
- Cancellation / STOP: PASS
- qualToGovernedCycle presentation: PASS
- lint: PASS
- build: PASS
- git diff --check (scoped): PASS

## Runtime proof

- URL: http://localhost:3020 (left running)
- Project: P6-HQ-01 Deliverable Exit Proof 2026-10-08 15:05 (data preserved; no HumanDecision invented)
- Captures: `.tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/11-ui04-after-{desktop1440,compact1024,mobile390}.png`
- Evidence note: `.tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-HQ-01/p6-hqa-ui-04-pilot-facing-simplification.md`

### Runtime reserve

Process-local F2 cards do not rehydrate after Next restart. In-session capture showed simplified card chrome and conversational next step. Post-capture scrub of residual “anti scope creep / silent REAL / Evidence” wording is unit-proven. LPS context column may still contain prep strings **outside** ConversationSurface (out of authorized file scope).

## Fake / Real

- Deterministic UI/projection tests: REAL proof of presentation
- Browser runtime on HQ-01: used for captures; no extra OpenAI call required solely for cards; no synthetic HumanDecision

## Explicit non-claims

- P6 PASS: NOT CLAIMED
- HQ-01: WAITING HUMAN QA
- No project commit / push / PR
- No cognitive prompt / router / engine change

## Ask for ChatGPT

Confirm P6-HQA-UI-04 CLOSED as presentation-only under P3 pilot cognitive burden minimization, with Recommendation ≠ Proposal ≠ HumanDecision ≠ Confirmation preserved, UI-01/02/03 still CLOSED, and HQ-01 still waiting Human QA.
