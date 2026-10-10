# SFIA Review Pack — FULL
# P6-HQA-02 — REC-01 — PR READINESS + COMMIT + PUSH + PULL REQUEST
# Cycle 13 — Critical (template v2.6 §7.5)

## 1. Horodatage

- Generated: 2026-10-10T21:27:51+02:00
- Cycle projet: 13 — PR readiness
- Lot: P6-HQA-02 / REC-01
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Profil: Critical
- Typologie: EVOL corrective / Product completion
- Prior handoff (minimal stabilization): `96550a9cd40f79372fd4909ec8b86f624628615f` blob `2c8f05dd9f8b77c64051f46931beb1cfcea4e5f1`
- Local pack before overwrite: blob matched prior handoff exactly (`2c8f05dd…`) — mono-cycle replace

## 2. GO Morris

GO explicite consommé: **"ok go commit push pr"**

Autorisé: PR readiness → commit projet → push branche → création PR → Review Pack FULL → Review Handoff L3.

Non autorisé: merge · suppression de branche · promotion baseline/runtime · nouvelle Delivery · REAL Human QA dans ce cycle.

## 3. Git Truth Check (initial)

| Check | Result |
|-------|--------|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-hqa-02` |
| Branch | `fix/studio-p6-hqa-02-work-recommendation-materialization` |
| HEAD (pre-commit) | `8ed61737df30db270bf871eedad1535020fd1c11` |
| origin/main | `8ed61737df30db270bf871eedad1535020fd1c11` |
| Staged initial | empty |
| Remote branch pre-push | ABSENT |
| Prior handoff | `96550a9c` / blob `2c8f05dd` VERIFIED |
| Destructive git | NONE |

Candidate locale non commitée confirmée (tracked + untracked tests; pack local only).

## 4. Qualification SFIA

- Repository: mcleland147/sfia-workspace
- Justification: publication évolution transverse contrat Nora/Studio/Product (matérialisation épistémique, persistance, continuité, idempotence, contradictions)
- Blocs activés: Convergence Studio; Repo-informed PR readiness; Product integrity; Tests/non-régression; Git publication contrôlée; Fake/Real; Review Pack; Review Handoff
- Blocs désactivés: Nouvelle Delivery; Refonte architecture; Nouvelle persistence; Migration; Modification doctrine; Déploiement; Human QA REAL; Merge; Post-merge; Cleanup
- Capacités: V3-F04, V3-F05, V3-F08, V3-F02, V3-F14
- Milestone: P6 Human QA
- Capacité suivante: intégration gouvernée puis Human QA REC-01
- Gate Morris: COMMIT + PUSH + PR AUTORISÉS
- Gate merge: NON AUTORISÉ
- CKC Cycle 13: fallback synthétique intra-v3 — sans autorité d'exécution

## 5. Convergence Pre-check

| Signal | Status |
|--------|--------|
| Build Doctrine | VALIDATED — ACTIVE ON MAIN |
| Roadmap P6 | applicable |
| C1 / P2 | VALIDATED |
| P6 Human QA | IN PROGRESS |
| P6 GLOBAL PASS | NO |
| Runtime v3 | NON ADOPTED |

Trajectoire: REC-01 local → PR readiness → commit/push/PR → review + Morris merge gate → intégration → Human QA → P6 continuation.

KEEP: Option B · Bounded Cognitive Trust · Option A · Product SQLite · WR materialization · Nora Structured Outputs · Typed CONTRADICTORY · UX-REC-02
DEFER: DISTINCT_RELATED advanced durability · REC-02 RESERVED
ACCEPTED RESERVATION: Coverage PARTIAL >12

## 6. Sources

Gouvernance / Product / Doctrine / Processus (liste contrat §2) consultées. Handoff `96550a9c` lu: cycle stabilization, branche, HEAD/base 8ed61737, GO Morris stabilization, correctifs replay/currentness, tests PASS, verdict READY FOR CHATGPT RE-REVIEW — contenu exploitable confirmé.

## 7. Scope complet — matrice fichiers

### Inclus (24 fichiers — commités)

| Path | Qualification |
|------|---------------|
| `lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts` | REC-01 Product (NEW) |
| `lib/oa/cycle/application/deriveWorkRecommendations.ts` | REC-01 Product |
| `lib/oa/cycle/application/updateEpistemicState.ts` | REC-01 Product (clone envelope) |
| `lib/oa/cycle/domain/types.ts` | REC-01 Product (Option A type) |
| `lib/oa/cycle/index.ts` | REC-01 barrel export |
| `lib/nora-cognitive-runtime/noraProductTurnOutputType.ts` | REC-01 Option B contract |
| `features/project-assistant/materializeActiveCycleWork.ts` | REC-01 Product + replay fix |
| `features/project-assistant/orchestrateTurn.ts` | REC-01 wiring |
| `features/project-assistant/f2/studioCognitiveContext.ts` | REC-01 coverage/projection |
| `features/project-assistant/buildProjectSystemPrompt.ts` | REC-01 bounded trust prompt |
| `features/pre-m6-product-ui/surfaces/JournalSurface.tsx` | UX-REC-02 KEEP |
| `*qualify*.d0.test.ts` / `*minimalStabilization*` / `*optionB*` / `*uxrec02*` | tests REC-01 (NEW) |
| `activeCycleCognitiveWork.d0.test.ts` | tests Option A/B/replay |
| fixture touch-ups (corrProof06, chatFirstGovernedDecisionLoop, rec03 label, ux continuity, noraConversationalInitiative, pilotNora*, studioCognitiveContext.test) | compatibilité Option B/A / UX-REC-02 — **pas** nouvelles features REC-03 |

### Exclus

| Path | Reason |
|------|--------|
| `.tmp-sfia-review/**` | Review pack — never project-committed |
| `sfia-review-handoff/**` | Handoff branch only |
| convergence / product-completion / product-simplification / sfia-v3-framing / prompts / method / migrations / CI | protected / hors GO |

Aucun fichier indépendant hors scope détecté → pas de STOP SCOPE REQUALIFICATION.

## 8. PR readiness

### Architecture

- No new table / migration / RelationshipStore / Currentness Engine / semantic classifier / parallel architecture / doctrine edit / unauthorized DISTINCT_RELATED extension — CONFIRMED

### Product

- Recommendation ≠ HD · no auto supersession/disposition · refs · Option A persist · provenance · Context Seal · atomicity · idempotence · sourceIndexes · historical replay · legacy compat · no false currentness — CONFIRMED via prior stabilization + re-run suites

### Dernier correctif (stabilization)

- existing-first replay · materialParity before reuse · live target only on new mint · no history rewrite · source∧target applicability · no global CURRENT · PARTIAL fail-closed — CONFIRMED

### Réserves (non-blockers PR)

Coverage PARTIAL>12 · CONTRADICTORY sous PARTIAL · DISTINCT_RELATED DEFER · paraphrase dups · Human QA REAL NOT RUN · P6 GLOBAL PASS=NO

### Verdict readiness

**READY FOR COMMIT PUSH PR**

## 9. Tests exécutés

| Validation | Result |
|------------|--------|
| qualifyProspectiveWorkRecommendationMaterialization | PASS |
| Option B context | PASS |
| Active Cycle Work (Option A SQLite reload + historical replay) | PASS |
| REC-01 minimal stabilization | PASS |
| chat-first WR continuity (+ ProjectTrajectory/TDS) | PASS |
| Nora Lifecycle Recommendation continuity | PASS |
| UX-REC-02 | PASS |
| Journal fixtures / UX continuity / REC-03 label fixture | PASS |
| studioCognitiveContext + Nora continuity fixtures | PASS |
| Aggregate targeted: 14 files / 260 tests | PASS |
| `tsc --noEmit` | PASS |
| ESLint ciblé | PASS |
| `git diff --check` | PASS |
| REAL provider | NOT RUN |
| Human QA REAL | NOT RUN |
| Full CI GitHub | PENDING at PR open (see §15) |

## 10. Fake / Real Qualification

- Applicable: YES · External: Nora/OpenAI
- Fake: structured fixtures — DETERMINISTIC PROVEN at REC-01 qualified scope
- This cycle: PR readiness / repository publication
- REAL: NOT RUN · Human QA: NEXT
- Not claimed: REAL BOUNDARY PROVEN · E2E REAL · P6 GLOBAL PASS · runtime v3 ADOPTED
- DETERMINISTIC ≠ READY FOR REAL

## 11. Commit projet

- SHA: `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9`
- Message: `feat(studio): complete governed work recommendation materialization`
- Files: 24 (2767 insertions / 18 deletions)
- Review pack: NOT included
- Protected paths: NONE

### git show --name-status / --stat

```
commit b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sat Oct 10 21:27:03 2026 +0200

    feat(studio): complete governed work recommendation materialization

    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts
A	projects/sfia-studio/app/__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.rec03.journalRecommendationLabel.ui.test.tsx
A	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
A	projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
M	projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
M	projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
A	projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts

```

## 12. Push projet

- Branch: `fix/studio-p6-hqa-02-work-recommendation-materialization`
- Remote SHA: `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9`
- Local HEAD == remote: YES
- Force push: NO
- Push main: NO

## 13. Pull Request

- Number: **#576**
- URL: https://github.com/mcleland147/sfia-workspace/pull/576
- Base: `main`
- Head: `fix/studio-p6-hqa-02-work-recommendation-materialization`
- Head SHA: `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9`
- State: OPEN
- Draft: false (aligned with prior P6 HQA PRs #574/#575; body denies READY FOR MERGE / merge authorization)
- Mergeable: MERGEABLE (GitHub) · mergeStateStatus: BLOCKED (branch protection / checks) — **no merge performed**
- Files in PR: 24 — matches commit exactly

### PR body final

```markdown
## Context / Problem

P6-HQA-02 / REC-01 closes the governed path for Nora Work Recommendations to become durable Product EpistemicItems: prospective materialization controls, bounded cognitive trust, typed CONTRADICTORY relation continuity (Option A), SQLite durability, historical replay, and honest applicability projection — without treating Recommendation as HumanDecision and without architectural expansion.

## Scope REC-01

- Lot: P6-HQA-02 / REC-01 — Work Recommendation Materialization
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Branch: `fix/studio-p6-hqa-02-work-recommendation-materialization`
- Base: `main` @ `8ed61737df30db270bf871eedad1535020fd1c11`
- Head: see PR head SHA after push
- REC-02: RESERVED (out of this PR)

## Nora Option B structured contract

KEEP. Nora structured Recommendation candidates carry `trackingRationale`, `relationKind` (`NEW` | `ALREADY_COVERED` | `DISTINCT_RELATED` | `CONTRADICTORY` | `UNCERTAIN`), and `relatedRecommendationRef`, with open-WR context coverage `COMPLETE` | `PARTIAL` | `UNAVAILABLE`. Studio retains deterministic Product gates; Nora judgment remains candidate-only.

## Bounded cognitive trust

KEEP. No product-anchor pseudo-proof. `trackingRationale` / `relationKind=NEW` are semantic candidate judgment, not Product authorization. Coverage PARTIAL/UNAVAILABLE fail-closed for NEW (and CONTRADICTORY mint under current policy).

## Option A typed relation on EpistemicItem

KEEP. Optional durable envelope `workRecommendationRelation` on EpistemicItem (`kind`, `targetEpistemicItemId`, `judgmentOrigin: nora_structured_candidate`, `authority: none`) persisted via existing Product SQLite payload path. CONTRADICTORY planned for durable persist; DISTINCT_RELATED systematic durability DEFERRED.

## SQLite durability / reload

KEEP Product SQLite / UoW / LPS / provenance / idempotence. Option A SQLite reload and materialParity suites PASS under deterministic fixtures. No new table, no migration, no RelationshipStore.

## Historical replay stabilization

BLOCKING defect fixed: relation live-target validation previously ran before existing-identity reuse, so replaying a persisted CONTRADICTORY Recommendation failed after the target was superseded. Fix: existing-first replay with intended durable relation material for parity; live open-target validation only for **new** mints. No history rewrite, no identity change, no HD, no auto-disposition.

## Currentness honesty

`deriveWorkRecommendationRelationApplicability` is read-time tri-state (`applicable` | `not_applicable` | `unknown`) for source∧target open WR when source is supplied — not a global Currentness Engine / CURRENT claim. Prompt projection states durable ≠ CURRENT.

## Existing Product invariants

- Recommendation ≠ HumanDecision
- No automatic supersession / disposition from CONTRADICTORY
- ACW identity, Context Seal, atomic UoW, sourceIndexes, provenance preserved
- Legacy Work Recommendations unchanged
- Coverage PARTIAL >12 open WR: accepted functional reservation (fail-closed NEW)

## UX-REC-02 preservation

KEEP. Journal per-card methodological disclaimer removed; Product Recommendation ≠ HD remains server-side. Status + discuss-with-Nora actions retained. Fixture null `workRecommendationRelation` adaptations are compatibility only — not new REC-03 features.

## Tests executed and results (local, deterministic)

| Suite | Result |
|-------|--------|
| qualifyProspectiveWorkRecommendationMaterialization | PASS |
| Option B workRecommendationsContext | PASS |
| Active Cycle Work (incl. Option A SQLite reload + historical replay) | PASS |
| REC-01 minimal stabilization | PASS |
| chat-first Work Recommendation continuity (incl. ProjectTrajectory/TDS) | PASS |
| Nora Lifecycle Recommendation continuity | PASS |
| UX-REC-02 journal disclaimer | PASS |
| Journal recommendation fixtures / UX continuity / REC-03 label fixture | PASS |
| studioCognitiveContext + Nora continuity fixture adaptations | PASS |
| `tsc --noEmit` | PASS |
| ESLint (targeted) | PASS |
| `git diff --check` | PASS |

Aggregate targeted readiness run: **14 files / 260 tests PASS**.

## Fake / Real Qualification

- Applicable: YES (Nora / OpenAI boundary)
- Fake: structured deterministic fixtures — **DETERMINISTIC PROVEN** at REC-01 qualified scope
- REAL provider execution: **NOT RUN** in this publication cycle
- Human QA: **NEXT PRODUCT PROOF** under Morris gates
- Not claimed: REAL BOUNDARY PROVEN · END-TO-END REAL PROVEN · P6 GLOBAL PASS · Runtime v3 ADOPTED
- DETERMINISTIC PROVEN ≠ READY FOR REAL

## Known reserves

1. Coverage PARTIAL beyond 12 open Work Recommendations (fail-closed NEW)
2. CONTRADICTORY mint under PARTIAL remains blocked (intentional)
3. DISTINCT_RELATED systematic durable envelope deferred
4. Paraphrase semantic duplicates not solved by deterministic engine
5. Human QA REAL not executed for this candidate
6. P6 GLOBAL PASS = NO · runtime v3 NON ADOPTED

## P6 / Human QA next steps

After ChatGPT / Morris review and CI: Morris merge gate (explicit) → integration → Human QA rejeu REC-01 → P6 continuation. No automatic merge authorization from this PR.

## Explicit anti-claims

- No P6 Global PASS
- No runtime v3 adoption
- No READY FOR MERGE implied by PR openness
- No merge in this cycle


Made with [Cursor](https://cursor.com)

```

## 14. CI visible (instantané publication)

| Check | Status |
|-------|--------|
| Detect SFIA Studio changes | **PENDING** |
| Other checks | not yet reported at capture |

CI not claimed PASS. Pending ≠ Pass.

## 15. Absence de merge

CONFIRMED: PR open, not merged, merge gate Morris only.

## 16. Git Review Index (code consultable dans Git @ `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9`)

| Path | Symbol / topic | Line |
|------|----------------|------|
| `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts` | EpistemicWorkRecommendationRelation type | L335 |
| `projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts` | qualifyProspectiveWorkRecommendationMaterialization | L172 |
| `projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts` | planDurableWorkRecommendationRelation | L407 |
| `projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts` | filterActiveCycleWorkItemsForProspectiveMaterialization | L314 |
| `projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts` | intendedWorkRecommendationRelationMaterial | L267 |
| `projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts` | resolveWorkRecommendationRelationForNewWrite | L285 |
| `projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts` | materialParity (relation key) | L230 |
| `projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts` | deriveWorkRecommendationRelationApplicability | L281 |
| `projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts` | isOpenWorkRecommendationRelationTarget | L252 |

Existing-first replay loop: `materializeActiveCycleWork.ts` around existingById reuse → intended relation parity → `resolveWorkRecommendationRelationForNewWrite` only on new mint (commit tree).

### Option A envelope type (complete committed excerpt)

```typescript
export type EpistemicWorkRecommendationRelationKind =
  | "CONTRADICTORY"
  | "DISTINCT_RELATED";

export type EpistemicWorkRecommendationRelation = {
  kind: EpistemicWorkRecommendationRelationKind;
  targetEpistemicItemId: string;
  judgmentOrigin: "nora_structured_candidate";
  authority: "none";
};

```

### New files (committed — consult Git; sizes)

- `projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts` — 442 lines — committed at `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (consult Git; full content in commit tree)
- `projects/sfia-studio/app/__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts` — 504 lines — committed at `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (consult Git; full content in commit tree)
- `projects/sfia-studio/app/__tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts` — 309 lines — committed at `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (consult Git; full content in commit tree)
- `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts` — 132 lines — committed at `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (consult Git; full content in commit tree)
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx` — 51 lines — committed at `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (consult Git; full content in commit tree)

### Complete new file — UX-REC-02 test

```tsx
/**
 * P6-HQA-02 UX-REC-02 — Journal Work Recommendation cards drop repeated disclaimer.
 * @vitest-environment jsdom
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { JournalSurface } from "@/features/pre-m6-product-ui/surfaces/JournalSurface";

describe("P6-HQA-02 UX-REC-02 Journal recommendation disclaimer", () => {
  it("omits per-card authority disclaimer while keeping status and discuss CTA", () => {
    const onResume = vi.fn();
    render(
      <JournalSurface
        entries={[]}
        cycleInstanceId="cycinst:test"
        selectedEntryId={null}
        onSelectEntry={() => {}}
        onViewExchanges={() => {}}
        onFocusTurn={() => {}}
        recommendations={[
          {
            epistemicItemId: "epi:acw:uxrec02",
            statement: "Structurer le suivi des responsabilités",
            status: "active",
            source: "active-cycle-work:nora",
            optionSetRef: null,
            proposalId: null,
            cycleInstanceId: "cycinst:test",
            createdAt: "2026-10-10T10:00:00.000Z",
            dispositionDecisionId: null,
            workRecommendationEpistemicItemId: "epi:acw:uxrec02",
            workRecommendationRelation: null,
          },
        ]}
        decisions={[]}
        reservations={[]}
        memoryTab="recommandations"
        onResumeRecommendationInChat={onResume}
      />,
    );
    expect(screen.queryByText(/Disposez-en dans/i)).toBeNull();
    expect(
      screen.queryByText(/RECOMMANDATION — PAS UNE DÉCISION HUMAINE/i),
    ).toBeNull();
    expect(screen.getAllByText(/À examiner/i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByTestId("cycle-recommendation-resume-epi:acw:uxrec02"),
    ).toBeTruthy();
    expect(screen.getByText("Structurer le suivi des responsabilités")).toBeTruthy();
  });
});

```

### Complete new file — Option B context test

```typescript
/**
 * P6-HQA-02 REC-01 Option B — open Work Recommendations context coverage.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  buildStudioCognitivePromptSections,
  type StudioCognitiveContext,
  type StudioOpenWorkRecommendationProjection,
} from "@/features/project-assistant/f2/studioCognitiveContext";

function baseContext(
  wr: StudioCognitiveContext["workRecommendationsContext"],
): StudioCognitiveContext {
  return {
    projectTruth: {
      projectId: "proj:wr-ctx",
      name: "WR Ctx",
      objective: "obj",
      context: "ctx",
      constraints: [],
      criticality: "STANDARD",
      shortReference: null,
      lpsId: "lps:1",
      lpsVersion: 1,
      activeCycleInstanceId: "cycinst:wr",
      doctrineId: "pkg:x",
      doctrineVersion: "1",
      doctrineStatus: "resolved",
    },
    method: {
      orientation: {
        state: "UNRESOLVED" as const,
        candidateCycleTypeId: null,
      },
      cycleLabel: null,
      ckcLensSection: null,
      ckcLoaded: false,
      doctrinePinPresent: true,
      sourceLimit: "none" as const,
      trajectory: null,
    } as StudioCognitiveContext["method"],
    activeCycle: {
      cycleInstanceId: "cycinst:wr",
      cycleTypeId: "cyc:framing",
      cycleLabel: "Cadrage",
      profile: "Light",
      status: "active",
      workEligible: true,
      trajectoryId: null,
      trajectoryVersion: null,
      trajectoryStepId: null,
      ckcResolutionRef: null,
    },
    activeCycleWorkItems: { state: "NONE", items: [] },
    workRecommendationsContext: wr,
    trajectoryDecisionSupport: {
      state: "NONE",
      optionRefs: [],
      optionLabels: [],
      currentNoraRecommendedOptionRef: null,
      currentRecommendationSource: null,
    },
    decisions: { state: "NONE", items: [] },
    evidence: { state: "NONE", items: [] },
    review: { state: "NONE", items: [] },
    trajectory: { state: "ABSENT", current: null },
    lifecycleRecommendation: {
      state: "NONE",
      current: null,
      satisfiesPreCycleNextCycleTransition: false,
    },
    reservationCompactSection: null,
    reservationFocusSection: null,
    limits: {
      oaAvailable: true,
      truthOutranksConversation: true,
      composerDoesNotScoreMaturity: true,
      composerDoesNotSelectTrajectory: true,
    },
  };
}

describe("P6-HQA-02 REC-01 Option B workRecommendationsContext coverage", () => {
  it("COMPLETE renders ids and does not invent coverage", () => {
    const item: StudioOpenWorkRecommendationProjection = {
      epistemicItemId: "epi:acw:open-1",
      statement: "Prioriser le suivi avant la planification.",
      status: "active",
      cycleInstanceId: "cycinst:wr",
      dispositionDecisionId: null,
      family: "Work",
      workRecommendationRelation: null,
    };
    const text = buildStudioCognitivePromptSections(
      baseContext({ coverage: "COMPLETE", items: [item] }),
    ).join("\n");
    expect(text).toContain("coverage=COMPLETE");
    expect(text).toContain("id=epi:acw:open-1");
    expect(text).toContain("family=Work");
    expect(text).not.toContain("coverage=PARTIAL");
  });

  it("PARTIAL warns against NEW-by-absence", () => {
    const text = buildStudioCognitivePromptSections(
      baseContext({
        coverage: "PARTIAL",
        items: [
          {
            epistemicItemId: "epi:acw:open-2",
            statement: "Améliorer la visibilité.",
            status: "active",
            cycleInstanceId: "cycinst:wr",
            dispositionDecisionId: null,
            family: "Work",
            workRecommendationRelation: null,
          },
        ],
      }),
    ).join("\n");
    expect(text).toContain("coverage=PARTIAL");
    expect(text).toMatch(/ne pas conclure NEW/i);
  });

  it("UNAVAILABLE forbids invented ids", () => {
    const text = buildStudioCognitivePromptSections(
      baseContext({ coverage: "UNAVAILABLE", items: [] }),
    ).join("\n");
    expect(text).toContain("coverage=UNAVAILABLE");
    expect(text).toMatch(/ne pas inventer d'ids/i);
  });
});

```

Larger new Product/test files (`qualifyProspective…`, qualify tests, minimalStabilization, ACW suite delta) are fully present in commit `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` — see Git Review Index + `git show b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9:<path>`. Not duplicated wholesale here to avoid pack bloat; content is remote-verifiable on the project branch.

## 17. Décisions Morris restantes

1. Review ChatGPT of this PR publication pack
2. Wait CI completion — treat outcomes honestly
3. Explicit Morris merge gate (not automatic)
4. Post-merge integration then Human QA REC-01
5. DISTINCT_RELATED durability / PARTIAL reopen policy remain structural deferrals

## 18. Handoff

Publisher: `scripts/sfia/publish-review-handoff.sh`
Message: `review-handoff: P6-HQA-02 REC-01 PR publication`
Branch: `sfia/review-handoff` · path: `sfia-review-handoff/latest-chatgpt-review.md`
(SHA/blob filled after publish)

## 19. État final worktrees (pré-handoff publish)

```
 M .tmp-sfia-review/chatgpt-review.md
```

Product HEAD `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` tracking origin; only local dirty: `.tmp-sfia-review/chatgpt-review.md` (this pack).

## 20. Verdict

**REC-01 PR OPENED — REMOTE VERIFIED — AWAITING REVIEW / CI / MORRIS MERGE GATE**

Anti-claims: no merge · no post-merge · no cleanup · no P6 GLOBAL PASS · no runtime v3 adoption · DETERMINISTIC ≠ READY FOR REAL · no READY FOR MERGE implied.

---

## Instruction ChatGPT (obligatoire)

Lire depuis `sfia/review-handoff` :

`sfia-review-handoff/latest-chatgpt-review.md`

Vérifier: cycle, branche, HEAD/base, GO Morris, readiness, commit, push, PR, fichiers, tests, réserves, CI, handoff, verdict.
