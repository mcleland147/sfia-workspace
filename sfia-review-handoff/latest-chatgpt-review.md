# SFIA Review Pack — FULL
# P6-HQA-02 — REC-01 — MINIMAL PRODUCT STABILIZATION
# Local Bounded Delivery (template v2.6 §7.5)

## 1. Horodatage / Date-heure

- Generated: 2026-10-10T21:03:13+02:00
- Cycle: P6-HQA-02 / REC-01 — Minimal Product Stabilization
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Campaign: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Lot: P6-HQA-02
- Scope: REC-01 minimal stabilization
- Cycle projet: 8 — Delivery / implémentation
- Profil: Critical
- Typologie: EVOL corrective — minimal stabilization
- Prior handoff (Option A durable delivery): `745a67a687d1071da5843751c30ef7cde2762d7d` blob `6329880359281a84e84e640ff942bb6b4080411e`
- Morris GO consumed: KEEP Option B + bounded cognitive trust + Option A; STOP architectural expansion; CORRECT only demonstrated material Product blockers; RETURN to Human QA when deterministic integrity sufficient

## 2. Git Truth Check

| Check | Result |
|-------|--------|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-hqa-02` |
| Branch | `fix/studio-p6-hqa-02-work-recommendation-materialization` |
| HEAD | `8ed61737df30db270bf871eedad1535020fd1c11` |
| origin/main | `8ed61737df30db270bf871eedad1535020fd1c11` |
| HEAD == origin/main | YES |
| Staged | empty |
| Candidate Option B + bounded trust + Option A preserved | YES (local uncommitted layered on HEAD) |
| Destructive git (reset/clean/stash/rebase/cherry-pick/branch switch) | NONE |
| Project commit / push / PR / merge | NONE |
| REAL provider execution | NONE |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.rec03.journalRecommendationLabel.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.ux.recommendationContinuity.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.corr02.c2ProductTurn.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/pilotNoraStudioSemanticContinuity.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/updateEpistemicState.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/types.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts
```

### git diff --stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 1930 ++++++++++++++++++--
 .../corrProof06.artifactObligation.d0.test.ts      |    4 +
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |   11 +-
 ...qa.rec03.journalRecommendationLabel.ui.test.tsx |    1 +
 .../p6.ux.recommendationContinuity.ui.test.tsx     |    1 +
 .../activeCycleCognitiveWork.d0.test.ts            |  639 +++++++
 .../noraConversationalInitiative.d0.test.ts        |    3 +
 ...anticContinuity.corr02.c2ProductTurn.d0.test.ts |    9 +
 .../pilotNoraStudioSemanticContinuity.d0.test.ts   |    6 +
 .../studioCognitiveContext.test.ts                 |    8 +
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  |   10 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |   23 +
 .../project-assistant/f2/studioCognitiveContext.ts |  153 +-
 .../materializeActiveCycleWork.ts                  |  170 +-
 .../features/project-assistant/orchestrateTurn.ts  |   46 +-
 .../noraProductTurnOutputType.ts                   |   94 +-
 .../cycle/application/deriveWorkRecommendations.ts |  126 ++
 .../oa/cycle/application/updateEpistemicState.ts   |    3 +
 .../sfia-studio/app/lib/oa/cycle/domain/types.ts   |   23 +
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   17 +
 20 files changed, 3126 insertions(+), 151 deletions(-)
```

### git diff --cached --stat

```
(empty)
```

### Prior handoff correspondence

- Last published handoff: Option A Durable Typed Relation Delivery (`745a67a6`).
- Local pack `.tmp-sfia-review/chatgpt-review.md` matched that handoff content before this overwrite.
- This pack **replaces entirely** (mono-cycle, no append).
- Untracked/new this cycle: `p6.hqa.rec01.minimalStabilization.d0.test.ts` (+ prior Option B/A untracked files preserved).

## 3. GO Morris

GO for:
- diagnostic local;
- tests de reproduction ciblés;
- corrections minimales si défauts confirmés;
- non-régressions;
- Review Pack FULL;
- Review Handoff L3.

Aucun GO: commit projet; push projet; PR; merge; nouvelle architecture; nouvelle persistence; migration; refonte UX; REAL provider execution.

Décisions KEEP explicites:
- KEEP Option B — Nora Structured Work Recommendations
- KEEP confiance cognitive bornée
- KEEP Option A — typed relation envelope on EpistemicItem
- KEEP Product SQLite / UoW / LPS / provenance / idempotence
- STOP architectural expansion
- CORRECT only demonstrated material Product blockers

## 4. Qualification Cycle 8 Critical

- Repository: mcleland147/sfia-workspace
- Justification: contrôles de matérialisation d'objets Product durables, identité épistémique, rejeu, références et intégrité transactionnelle
- Blocs activés: Studio Convergence; Product Delivery; Epistemic Integrity; Cognitive/Product Boundary; Idempotence; Currentness Qualification; QA / Non-regression; Fake / Real Qualification; Review Pack; Review Handoff
- Blocs désactivés: Architecture exploration; New persistence; Migration; UI redesign; Figma-to-code; New cognitive engine; New recommendation engine; New currentness engine; Performance optimization sans blocker; Provider REAL execution
- Capacités v3: V3-F04; V3-F05; V3-F08; V3-F02; V3-F14
- Milestone: P6 Human QA
- Capacité suivante: requalification et rejeu Human QA de REC-01 après revue ChatGPT et gates Morris applicables
- CKC Cycle 8: consommé via template / routing (fallback synthétique intra-v3 si détail absent) — CKC sans autorité d'exécution

## 5. Sources

Gouvernance:
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`

Product:
- `projects/sfia-studio/product-simplification/02-chat-first-product-simplification-functional-operating-model.md`
- `projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md`
- `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md`

Doctrine:
- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`

Processus:
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- Operating Model / guardrails v2.6 applicables

Review Handoff prior lu intégralement: commit `745a67a6` — Delivery Option A exploitable confirmée (envelope durable CONTRADICTORY, SQLite reload, materialParity, DISTINCT_RELATED non systématique).

## 6. Convergence Pre-check

| Signal | Status |
|--------|--------|
| Build Doctrine | VALIDATED — ACTIVE ON MAIN |
| Roadmap P6 | applicable |
| C1 | VALIDATED |
| P2 | VALIDATED |
| P6 Human QA | IN PROGRESS |
| P6 GLOBAL PASS | NO |
| Runtime v3 | NON ADOPTED |

Trajectoire: REC-01 local candidate → minimal stabilization → ChatGPT review → Morris integration gate → Human QA → P6 continuation.

## 7. Candidate initiale (préservée)

État local au démarrage du cycle (non commitée):
- Option B structured WR fields + coverage COMPLETE/PARTIAL/UNAVAILABLE
- Bounded cognitive trust (no product-anchor pseudo-proof)
- Option A `workRecommendationRelation` envelope on EpistemicItem
- ACW materialize + qualify + derive + cognitive context + UX-REC-02 journal disclaimer
- Prior Option A SQLite reload / idempotence suites

## 8. KEEP / SIMPLIFY / DEFER matrix

| Item | Classification |
|------|----------------|
| Option B structured WR | KEEP |
| Bounded Cognitive Trust | KEEP |
| Option A typed envelope | KEEP |
| EpistemicItem / Product SQLite | KEEP |
| Product materialization | KEEP / CORRECTED (replay order) |
| Nora structured output | KEEP |
| Coverage guards | KEEP / QUALIFIED (fail-closed PARTIAL for NEW) |
| ACW identity | KEEP |
| Source indexes | KEEP |
| UoW / LPS | KEEP |
| Typed CONTRADICTORY relation | KEEP |
| DISTINCT_RELATED future durability | DEFER |
| Journal UX | KEEP |
| UX-REC-02 | KEEP |
| REC-02 | RESERVED |
| Coverage budget increase as sole fix | DEFER / REJECTED |
| Semantic similarity / vector / classification engine | DEFER / FORBIDDEN this cycle |
| New Currentness Engine | DEFER / FORBIDDEN this cycle |
| Parallel architecture | FORBIDDEN |

## 9. Findings — Coverage PARTIAL

### Diagnostic reproduced

| Scenario | Result |
|----------|--------|
| A. 0 open WR, COMPLETE | NEW may mint — PASS |
| B. 1 open WR, COMPLETE | NEW may mint — PASS |
| C. 12 open WR, COMPLETE | NEW may mint — PASS |
| D/E. 13+/20 opens, coverage=PARTIAL | NEW blocked `insufficient_context_coverage` — PASS |
| F. Reader unavailable | fail-closed `open_context_unavailable` — PASS |
| G. ALREADY_COVERED ref in Product facts under PARTIAL | resolved against full Product facts — PASS |
| H. Exact duplicate under PARTIAL with full Product facts | `exact_open_duplicate` — PASS |
| I. CONTRADICTORY under PARTIAL even with Product-resolved ref | blocked by coverage policy — PASS (intentional) |
| Filter under PARTIAL | preserves non-Recommendation sourceIndexes — PASS |

### Distinction Nora vs Studio

- Nora semantic context COMPLETE ≠ Product full reader available.
- `studioCognitiveContext` budget `maxOpenWorkRecommendations=12` → truncated projection ⇒ coverage=PARTIAL.
- Studio Product reader can still list full open facts for exact-id / exact-statement checks.
- PARTIAL does **not** prove absence of semantic duplicate → NEW (and CONTRADICTORY mint under current policy) remain fail-closed.

### Classification

**NON-BLOCKING / INTENTIONAL FAIL-CLOSED** — not a disproportionate Product integrity bug for Human QA at this scope.

Frequency: only when >12 open Work Recommendations projected into Nora context.
Impact: legitimate NEW may be deferred to UNCERTAIN / conversationGuidance until coverage COMPLETE.
Scope on Human QA: document as known functional limitation; do not claim COMPLETE cognitive coverage beyond budget.

### Correction

**NO CHANGE** to coverage policy. No second retrieval engine. No arbitrary budget increase as sole solution.

## 10. Findings — Historical Replay

### Defect reproduced (BLOCKING)

Pre-fix order: relation applicability validated before existing-identity reuse.
After target superseded/disposed, replaying the same logical turn (same ACW identity + same durable relation material) failed with `contradictory_relation_target_not_applicable` even though the Recommendation was already persisted.

### Scenarios

| Scenario | Result |
|----------|--------|
| A. Create CONTRADICTORY with active target | PASS |
| B. Replay same logical turn, target still active | PASS (prior Option A idempotence) |
| C/D. Replay same logical turn after target superseded | PASS after fix |
| E. Target inaccessible | covered by new-mint fail-closed |
| F. Same ACW identity, different relationKind | fail-closed materialParity — PASS (prior) |
| G. Same ACW identity, different target | fail-closed materialParity — PASS (prior) |
| H. New CONTRADICTORY mint with stale target | still fails — PASS |

### Classification

**BLOCKING — FIXED**

### Correction (minimal)

1. `intendedWorkRecommendationRelationMaterial` — durable intended envelope for parity (no live applicability).
2. Existing-identity path: materialParity + reuse **before** live relation gate; preserve existing envelope; no rewrite.
3. `resolveWorkRecommendationRelationForNewWrite` — live open-target check **only** for new mints.

Invariants preserved: no history rewrite; no identity change; no new object on replay; no target mutation; no HD; no contradiction→supersession; materialParity conflict policy unchanged.

## 11. Findings — Currentness Claims

### What `deriveWorkRecommendationRelationApplicability` proves today

- Tri-state: `applicable` | `not_applicable` | `unknown`
- `applicable` iff (when `sourceItem` provided) source is open active WR **and** target is open active WR (cycle-bound, undisposed, non-lifecycle).
- `unknown` when context unavailable, missing cycle, missing/empty target id, or target not found.
- `not_applicable` when source (if provided) or target fails open-target checks.
- Applicability is **derived at read time**, never persisted as CURRENT/STALE.
- Does **not** prove global product currentness, cycle currency, or provenance completeness.

### Overclaim found

Prior target-only applicability could label a relation `applicable` while the **source** was already superseded — dishonest for consumers/prompts.

### Classification

**MAJOR (honesty) — FIXED** (smallest change: pass `sourceItem` into derive + projection; prompt line clarifies source∧target).

### Correction

- `projectWorkRecommendationRelation` passes `sourceItem: item`.
- Cognitive context prompt: `applicability=applicable uniquement si source ET cible restent des Work Recommendations ouvertes ; durable ≠ CURRENT.`
- No Currentness Engine; no universal fingerprint; no Lifecycle/Trajectory copy; never authorizes Product mutation from this projection alone.

## 12. Scénarios reproduits (summary matrix)

See §§9–11. Additional integrated SQLite/ACW scenarios in `activeCycleCognitiveWork.d0.test.ts` historical replay suite.

## 13. Classification des défauts

| Finding | Severity | Action |
|---------|----------|--------|
| Coverage PARTIAL blocks NEW | NON-BLOCKING / intentional | DOCUMENT — NO CHANGE |
| Historical replay fails after target status change | BLOCKING | FIXED |
| Applicability overclaim (target-only) | MAJOR honesty | FIXED |
| DISTINCT_RELATED systematic durability | DEFER | unchanged |
| Semantic paraphrase duplicates | Known realism gap | Human QA / DEFER |
| REAL provider variability | Known realism gap | no REAL this cycle |

## 14. Correctifs effectués

1. **materializeActiveCycleWork.ts** — existing-first replay; intended relation for parity; new-write-only live gate.
2. **deriveWorkRecommendations.ts** — source+target applicability honesty.
3. **studioCognitiveContext.ts** — prompt honesty line for applicability (source∧target; durable≠CURRENT).
4. **Tests** — `p6.hqa.rec01.minimalStabilization.d0.test.ts` (new); historical replay suite appended to ACW tests.

## 15. Comportements volontairement inchangés

- Coverage PARTIAL fail-closed for NEW / CONTRADICTORY mint policy
- Option B field contract
- Option A envelope shape / CONTRADICTORY persist / DISTINCT_RELATED not systematic
- Bounded cognitive trust (no product-anchor)
- ACW identity scheme
- materialParity conflict on divergent relation material
- No HD / no auto-disposition on CONTRADICTORY
- UX-REC-02 journal disclaimer
- Legacy Work Recommendations projection
- Product SQLite schema / no migration
- No UI redesign

## 16. Intégrité Product

- Identity / references / membership / authority / persistence / UoW / LPS / provenance / Context Seal: preserved
- Historical objects not rewritten on replay
- New mint still validates live target applicability
- Recommendation ≠ HumanDecision preserved

## 17. Idempotence

- Option B / Option A idempotence suites: PASS (targeted re-run)
- Historical replay returns reuse/idempotent without new create: PASS
- Same identity + different relation material: fail-closed: PASS

## 18. Historique

- Replay does not mutate persisted relation envelope
- Target supersession does not rewrite source Recommendation
- No contradiction→supersession transform

## 19. Tests

| # | Validation | Result |
|---|------------|--------|
| 1 | Reproduction coverage PARTIAL | PASS |
| 2 | Reproduction historical replay | PASS |
| 3 | Vérification currentness claims | PASS |
| 4 | Idempotence Option B | PASS (targeted ACW/qualify) |
| 5 | Idempotence Option A | PASS |
| 6 | CONTRADICTORY SQLite reload | PASS (prior Option A suite retained; re-run with Option A filter) |
| 7 | SourceIndexes preserved | PASS |
| 8 | Legacy Work Recommendations | PASS (chatFirst WR continuity) |
| 9 | No HD / no auto-disposition | PASS |
| 10 | Lifecycle Recommendation non-regression | PASS (`noraLifecycleRecommendationContinuity`) |
| 11 | ProjectTrajectory non-regression | PASS (chatFirst WR continuity trajectory/TDS slice 25 tests) |
| 12 | Nora continuity | PASS (lifecycle + chatFirst suites) |
| 13 | UX-REC-02 regression | PASS |
| 14 | TypeScript `tsc --noEmit` | PASS |
| 15 | ESLint ciblé | PASS |
| 16 | `git diff --check` | PASS |

Not claimed: full historical suite beyond targeted sets; REAL BOUNDARY; E2E REAL; P6 GLOBAL PASS.

## 20. Fake / Real Qualification

- Applicable: YES
- External boundary: Nora / OpenAI
- Fake: structured fixtures — DETERMINISTIC PROVEN at durable relation + stabilization scope
- REAL: not executed this cycle
- Entry evidence: DETERMINISTIC PROVEN AT DURABLE RELATION CONTRACTED SCOPE (prior) + stabilization proofs
- Expected proof: targeted deterministic stabilization — achieved
- Not claimed: REAL BOUNDARY PROVEN; END-TO-END REAL PROVEN; P6 GLOBAL PASS; Runtime v3 ADOPTED
- DETERMINISTIC PROVEN ≠ READY FOR REAL
- Human QA remains next Product proof

Known realism gaps (unchanged): semantic classification quality; guidance/Recommendation confusion; paraphrase duplicates; contradictory recommendations; incomplete cognitive context; multi-turn continuity; provider variability.

## 21. Fichiers

### Modified this stabilization (Product code)

- `projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/deriveWorkRecommendations.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts` (honesty line; prior Option B context retained)

### Tests added/extended

- `projects/sfia-studio/app/__tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts` (**NEW** — full content below)
- `projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts` (historical replay suite appended)

### Preserved candidate files (prior Option B / A / UX — not newly architected this cycle)

- `qualifyProspectiveWorkRecommendationMaterialization.ts` (+ tests)
- `noraProductTurnOutputType.ts`, `orchestrateTurn.ts`, `buildProjectSystemPrompt.ts`
- `domain/types.ts`, `updateEpistemicState.ts`, `index.ts`
- `JournalSurface.tsx`, UX/fixture test touch-ups
- Option B context tests, UX-REC-02 tests

### Forbidden paths

No writes under convergence/**, product-completion/**, product-simplification/**, sfia-v3-framing/**, prompts/templates/**, method/**, .sfia/**, migrations/**, CI, other projects/worktrees.

## 22. Diffs utiles / sections modifiées complètes

### 22.1 materializeActiveCycleWork — helpers (complete)

```typescript

function relationMaterialKey(
  relation: EpistemicWorkRecommendationRelation | null | undefined,
): string {
  if (!relation) return "";
  return [
    relation.kind,
    relation.targetEpistemicItemId,
    relation.judgmentOrigin,
    relation.authority,
  ].join("|");
}



function materialParity(
  existing: EpistemicItem,
  next: {
    type: EpistemicItemType;
    statement: string;
    confidence?: EpistemicConfidence;
    blocking?: boolean;
    recommendedOptionRef?: string | null;
    workRecommendationRelation?: EpistemicWorkRecommendationRelation | null;
  },


/**
 * Intended durable relation material from Nora candidate (no live applicability).
 * Used for materialParity on historical replay — durable ≠ CURRENT.
 */
function intendedWorkRecommendationRelationMaterial(
  item: NoraActiveCycleWorkItem,
): EpistemicWorkRecommendationRelation | null {
  if (item.type !== "Recommendation") return null;
  const planned = planDurableWorkRecommendationRelation({
    relationKind: item.relationKind,
    relatedRecommendationRef: item.relatedRecommendationRef,
  });
  if (!planned.persist) return null;
  return planned.relation;
}


/**
 * Resolve durable typed WR relation for a **new** Recommendation mint inside UoW.
 * CONTRADICTORY requires an open applicable Work Recommendation target now.
 * Fail-closed: never mint CONTRADICTORY without a writable envelope.
 * Not used for reuse of an already-persisted identity (see replay path).
 */
function resolveWorkRecommendationRelationForNewWrite(input: {
  readonly item: NoraActiveCycleWorkItem;
  readonly existingItems: readonly EpistemicItem[];
  readonly cycleInstanceId: string;
}):

```

### 22.2 materializeActiveCycleWork — existing-first / new-mint loop (complete section)

```typescript
        if (existing) {
          // Historical replay: compare durable relation material only.
          // Do NOT require the target to still be CURRENT/applicable.
          const intendedRelation =
            intendedWorkRecommendationRelationMaterial(raw);
          if (
            !materialParity(existing, {
              type,
              statement,
              confidence,
              blocking,
              recommendedOptionRef,
              workRecommendationRelation: intendedRelation,
            })
          ) {
            throw new ActiveCycleWorkAtomicFailure(
              "ACTIVE_CYCLE_WORK_IDEM_CONFLICT",
              "same_id_different_material",
            );
          }
          planned.push({
            epistemicItemId,
            type,
            statement,
            confidence,
            blocking,
            relatedObjects: existing.relatedObjects
              ? [...existing.relatedObjects]
              : [facts.projectId, facts.activeCycleInstanceId],
            provenance: existing.provenance
              ? structuredClone(existing.provenance)
              : buildProvenance({
                  projectId: facts.projectId,
                  cycleInstanceId: facts.activeCycleInstanceId,
                  turnCorrelationId: facts.turnCorrelationId,
                  producedAt: input.producedAt,
                  index: identityIndex,
                }),
            workRecommendationRelation: existing.workRecommendationRelation
              ? structuredClone(existing.workRecommendationRelation)
              : undefined,
            reuse: true,
          });
          continue;
        }

        // New mint only: CONTRADICTORY target must be open/applicable now.
        const relationPlan = resolveWorkRecommendationRelationForNewWrite({
          item: raw,
          existingItems: facts.existingItems,
          cycleInstanceId: facts.activeCycleInstanceId,
        });
        if (!relationPlan.ok) {
          throw new ActiveCycleWorkAtomicFailure(
            "ACTIVE_CYCLE_WORK_RELATION_INVALID",
            relationPlan.reason,
          );
        }
        const workRecommendationRelation = relationPlan.relation;

        const relatedObjects = [
          facts.projectId,
          facts.activeCycleInstanceId,
          ...(cycle.trajectoryId ? [cycle.trajectoryId] : []),
          ...(cycle.trajectoryStepId ? [cycle.trajectoryStepId] : []),
          ...(recommendedOptionRef ? [recommendedOptionRef] : []),
        ];

        planned.push({
          epistemicItemId,
          type,
          statement,
          confidence,
          blocking,
          relatedObjects,
          provenance: buildProvenance({
            projectId: facts.projectId,
            cycleInstanceId: facts.activeCycleInstanceId,
            turnCorrelationId: facts.turnCorrelationId,
            producedAt: input.producedAt,
            index: identityIndex,
          }),
          workRecommendationRelation,
          reuse: false,
        });
      }
```

### 22.3 deriveWorkRecommendations — open target + applicability + projection (complete)

```typescript
/**
 * True when `item` is an open ACW Work Recommendation suitable as a typed
 * relation target (active, non-lifecycle, undisposed, cycle-bound).
 */
export function isOpenWorkRecommendationRelationTarget(input: {
  readonly item: WorkRecommendationItemLike;
  readonly allItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string;
}): boolean {
  const { item, allItems, cycleInstanceId } = input;
  if (!isActiveCycleWorkRecommendationItem(item)) return false;
  if (item.status !== "active") return false;
  if (item.lifecycleRecommendation != null) return false;
  if (dispositionDecisionIdFromItems(item, allItems)) return false;
  if (
    !workRecommendationBelongsToCycle(
      item,
      cycleInstanceId,
      cycleInstanceId,
    )
  ) {
    return false;
  }
  return true;
}


/**
 * Derive relation applicability at read time (Identity ≠ currentness).
 * Durable envelope remains; applicability is not persisted.
 *
 * "applicable" means both source (when provided) and target are still open
 * active Work Recommendations — not a global Currentness Engine verdict.
 */
export function deriveWorkRecommendationRelationApplicability(input: {
  readonly relation: NonNullable<
    WorkRecommendationItemLike["workRecommendationRelation"]
  >;
  readonly allItems: ReadonlyArray<WorkRecommendationItemLike>;
  readonly cycleInstanceId: string | null;
  readonly contextAvailable?: boolean;
  /** Source Recommendation carrying the envelope — required for honest applicability. */
  readonly sourceItem?: WorkRecommendationItemLike | null;
}): WorkRecommendationRelationApplicability {
  if (input.contextAvailable === false) return "unknown";
  if (!input.cycleInstanceId) return "unknown";
  const targetId = input.relation.targetEpistemicItemId.trim();
  if (!targetId) return "unknown";
  const target = input.allItems.find((i) => i.epistemicItemId === targetId);
  if (!target) return "unknown";

  if (input.sourceItem) {
    const sourceOpen = isOpenWorkRecommendationRelationTarget({
      item: input.sourceItem,
      allItems: input.allItems,
      cycleInstanceId: input.cycleInstanceId,
    });
    if (!sourceOpen) return "not_applicable";
  }

  if (
    isOpenWorkRecommendationRelationTarget({
      item: target,
      allItems: input.allItems,
      cycleInstanceId: input.cycleInstanceId,
    })
  ) {
    return "applicable";
  }
  return "not_applicable";
}



function projectWorkRecommendationRelation(
  item: WorkRecommendationItemLike,
  all: ReadonlyArray<WorkRecommendationItemLike>,
  cycleInstanceId: string,
): WorkRecommendationRelationProjection | null {
  const rel = item.workRecommendationRelation;
  if (!rel) return null;
  if (rel.kind !== "CONTRADICTORY" && rel.kind !== "DISTINCT_RELATED") {
    return null;
  }
  if (rel.judgmentOrigin !== "nora_structured_candidate") return null;
  if (rel.authority !== "none") return null;
  const targetId = rel.targetEpistemicItemId?.trim();
  if (!targetId) return null;
  return {
    kind: rel.kind,
    targetEpistemicItemId: targetId,
    judgmentOrigin: "nora_structured_candidate",
    authority: "none",
    applicability: deriveWorkRecommendationRelationApplicability({
      relation: rel,
      allItems: all,
      cycleInstanceId,
      sourceItem: item,
    }),
  };
}

```

### 22.4 studioCognitiveContext — honesty lines (complete relevant statements)

```
1166:           "coverage=PARTIAL — ne pas conclure NEW uniquement parce qu'aucune correspondance n'apparaît ici.",
1172:           "coverage=PARTIAL — vue tronquée ; ne pas conclure NEW uniquement par absence de correspondance ici.",
1195:         "relation=* est une relation candidate durable admise par Studio (≠ HumanDecision ; ≠ contradiction tranchée par le Pilote).",
1196:         "applicability=applicable uniquement si source ET cible restent des Work Recommendations ouvertes ; durable ≠ CURRENT.",
```

### 22.5 buildProjectSystemPrompt — REC-01 bounded trust section (complete retained block)

```typescript
      "Pour Recommendation hors Option trajectoire : recommendedOptionRef = null.",
      "Recommendation ≠ HumanDecision ; n'exécute rien ; ne promeut pas de trajectoire.",
      "=== P6-HQA-02 / REC-01 — Work Recommendation (confiance cognitive bornée) ===",
      "Une Work Recommendation (type=Recommendation) est exclusivement un objet Product DURABLE.",
      "Suggestion conversationnelle ordinaire → conversationGuidance SEULEMENT (zéro Recommendation).",
      "Pour toute Recommendation, renseigne OBLIGATOIREMENT :",
      "- trackingRationale : pourquoi un suivi durable distinct est nécessaire (≠ simple copie de statement) ;",
      "  justification métier en langage naturel — NE PAS inventer ni coller d'ids techniques",
      "  (cycleInstanceId / epi:… / recommendedOptionRef) comme « preuve » ;",
      "- relationKind : NEW | ALREADY_COVERED | DISTINCT_RELATED | CONTRADICTORY | UNCERTAIN ;",
      "- relatedRecommendationRef : id=epi:… EXACT d'une Work Recommendation ouverte du contexte, ou null.",
      "Règles relationKind :",
      "- ALREADY_COVERED / DISTINCT_RELATED / CONTRADICTORY → relatedRecommendationRef requis (id réel du contexte) ;",
      "- NEW → relatedRecommendationRef = null en général ; INTERDIT si coverage=PARTIAL ou UNAVAILABLE",
      "  — préfère UNCERTAIN ou conversationGuidance ;",
      "- UNCERTAIN → aucune matérialisation automatique ; poursuis en conversation.",
      "- DISTINCT_RELATED : proposition liée mais potentiellement distincte — Studio peut matérialiser",
      "  une nouvelle WR coexistant si couverture COMPLETE et contrôles Product ; jamais fusionner.",
      "- CONTRADICTORY ≠ équivalence ; aucun remplacement / disposition automatique de l'existante ;",
      "  coexistence durable possible sous contrôle Studio (coverage COMPLETE + refs valides).",
      "trackingRationale et relationKind=NEW sont un jugement sémantique candidat — PAS une autorisation Product.",
      "Studio décide de la matérialisation selon la politique de confiance cognitive bornée.",
      "Une relation CONTRADICTORY matérialisée peut être reconstruite après reprise (relation=* dans le contexte) ;",
      "ce signal reste candidat Studio — jamais HumanDecision ni disposition automatique.",
      "Ne jamais inventer d'identifiant. Ne jamais créer de HumanDecision pour une recommandation ordinaire.",
    );
```

### 22.6 Coverage qualify policy (unchanged — excerpt)

Policy still returns `insufficient_context_coverage` when coverage is PARTIAL/UNAVAILABLE for mint paths that require complete semantic context (NEW / CONTRADICTORY under current rules). Exact duplicate and ALREADY_COVERED continue to use Product facts. Excerpt marker: `insufficient_context_coverage"
  | "uncertain_relation"
  | "already_covered"
  | "invalid_related_ref"
  | "exact_open_duplicate"
  | "conversational_channel_exact"
  | "open_context_unavailable";

e…`

## 23. Contenu complet des nouveaux fichiers

### `projects/sfia-studio/app/__tests__/oa/cycle/p6.hqa.rec01.minimalStabilization.d0.test.ts`

```typescript
/**
 * P6-HQA-02 REC-01 — Minimal stabilization diagnostics.
 * Reproduce Coverage PARTIAL / Historical Replay / Currentness claims.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  filterActiveCycleWorkItemsForProspectiveMaterialization,
  planDurableWorkRecommendationRelation,
  qualifyProspectiveWorkRecommendationMaterialization,
} from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
import {
  deriveWorkRecommendationRelationApplicability,
  projectCycleWorkRecommendations,
} from "@/lib/oa/cycle/application/deriveWorkRecommendations";
import { STUDIO_COGNITIVE_CONTEXT_BUDGET } from "@/features/project-assistant/f2/studioCognitiveContext";
import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";

const CYCLE = "cycinst:qa-rec01-stab";
const RATIONALE =
  "Orientation de travail distincte nécessitant un suivi propre hors tour.";

function rec(
  statement: string,
  opts: Partial<
    Pick<
      NoraActiveCycleWorkItem,
      "relationKind" | "relatedRecommendationRef" | "trackingRationale"
    >
  > = {},
): NoraActiveCycleWorkItem {
  return {
    type: "Recommendation",
    statement,
    confidence: "medium",
    blocking: null,
    recommendedOptionRef: null,
    trackingRationale: opts.trackingRationale ?? RATIONALE,
    relationKind: opts.relationKind ?? "NEW",
    relatedRecommendationRef: opts.relatedRecommendationRef ?? null,
  };
}

function openFacts(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    epistemicItemId: `epi:acw:open-${i}`,
    statement: `Recommandation ouverte numéro ${i} sur le suivi.`,
  }));
}

describe("P6-HQA-02 REC-01 stabilization — Coverage PARTIAL", () => {
  it("budget maxOpenWorkRecommendations is 12", () => {
    expect(STUDIO_COGNITIVE_CONTEXT_BUDGET.maxOpenWorkRecommendations).toBe(12);
  });

  it("0/1/12 opens under COMPLETE may mint NEW", () => {
    for (const n of [0, 1, 12]) {
      const decision = qualifyProspectiveWorkRecommendationMaterialization({
        statement: "Documenter les responsabilités de livraison pour le jalon.",
        trackingRationale: RATIONALE,
        relationKind: "NEW",
        relatedRecommendationRef: null,
        cycleInstanceId: CYCLE,
        openWorkRecommendationsCoverage: "COMPLETE",
        openWorkRecommendationFacts: openFacts(n),
      });
      expect(decision, `n=${n}`).toEqual({
        materialize: true,
        reason: "justified_durable_work",
      });
    }
  });

  it("13+ opens with coverage=PARTIAL blocks NEW (Nora truncated view)", () => {
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Documenter les responsabilités de livraison pour le jalon.",
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      // Product facts may still be full — coverage is Nora projection authority.
      openWorkRecommendationFacts: openFacts(20),
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_context_coverage",
    });
  });

  it("PARTIAL still allows exact-duplicate suppress against full Product facts", () => {
    const facts = openFacts(20);
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: facts[15]!.statement,
      trackingRationale: RATIONALE,
      relationKind: "NEW",
      relatedRecommendationRef: null,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: facts,
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "exact_open_duplicate",
    });
  });

  it("PARTIAL still resolves ALREADY_COVERED against Product facts", () => {
    const openId = "epi:acw:open-15";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Autre formulation.",
      trackingRationale: RATIONALE,
      relationKind: "ALREADY_COVERED",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: [
        ...openFacts(15),
        { epistemicItemId: openId, statement: "Prioriser le suivi." },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "already_covered",
    });
  });

  it("PARTIAL blocks CONTRADICTORY mint even with Product-resolved ref (current policy)", () => {
    const openId = "epi:acw:open-1";
    const decision = qualifyProspectiveWorkRecommendationMaterialization({
      statement: "Prioriser la planification avant le suivi.",
      trackingRationale:
        "Contradiction candidate sur l'ordre de priorité suivi/planification.",
      relationKind: "CONTRADICTORY",
      relatedRecommendationRef: openId,
      cycleInstanceId: CYCLE,
      openWorkRecommendationsCoverage: "PARTIAL",
      openWorkRecommendationFacts: [
        { epistemicItemId: openId, statement: "Prioriser le suivi avant la planification." },
      ],
    });
    expect(decision).toEqual({
      materialize: false,
      reason: "insufficient_context_coverage",
    });
  });

  it("UNAVAILABLE / reader false fail-closed", () => {
    expect(
      qualifyProspectiveWorkRecommendationMaterialization({
        statement: "Documenter les responsabilités.",
        trackingRationale: RATIONALE,
        relationKind: "NEW",
        openRecommendationsContextAvailable: false,
        openWorkRecommendationFacts: openFacts(3),
      }).reason,
    ).toBe("open_context_unavailable");
  });

  it("filter under PARTIAL preserves non-Recommendation sourceIndexes", () => {
    const plan = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        rec("Documenter les responsabilités de livraison."),
        {
          type: "Observation",
          statement: "Observation indépendante.",
          confidence: "medium",
          blocking: null,
          recommendedOptionRef: null,
        },
      ],
      existingItems: [],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "PARTIAL",
    });
    expect(plan.items.map((i) => i.type)).toEqual(["Observation"]);
    expect(plan.sourceIndexes).toEqual([1]);
  });
});

describe("P6-HQA-02 REC-01 stabilization — Currentness claims", () => {
  const targetId = "epi:acw:target-1";
  const sourceId = "epi:acw:source-1";
  const relation = {
    kind: "CONTRADICTORY" as const,
    targetEpistemicItemId: targetId,
    judgmentOrigin: "nora_structured_candidate" as const,
    authority: "none" as const,
  };

  function item(
    id: string,
    status: string,
    opts: { disposed?: boolean } = {},
  ) {
    return {
      type: "Recommendation",
      status,
      epistemicItemId: id,
      source: "active-cycle-work:nora",
      statement: `Statement ${id}`,
      createdAt: "2026-10-01T00:00:00.000Z",
      relatedObjects: [CYCLE],
      workRecommendationRelation: id === sourceId ? relation : null,
      // disposition simulated via DecisionRef when disposed
      ...(opts.disposed
        ? {}
        : {}),
    };
  }

  it("applicable only when source and target are open active WR", () => {
    const source = item(sourceId, "active");
    const all = [source, item(targetId, "active")];
    expect(
      deriveWorkRecommendationRelationApplicability({
        relation,
        allItems: all,
        cycleInstanceId: CYCLE,
        sourceItem: source,
      }),
    ).toBe("applicable");
  });

  it("not_applicable when target superseded", () => {
    const source = item(sourceId, "active");
    const all = [source, item(targetId, "superseded")];
    expect(
      deriveWorkRecommendationRelationApplicability({
        relation,
        allItems: all,
        cycleInstanceId: CYCLE,
        sourceItem: source,
      }),
    ).toBe("not_applicable");
  });

  it("unknown when context unavailable or target missing", () => {
    const source = item(sourceId, "active");
    expect(
      deriveWorkRecommendationRelationApplicability({
        relation,
        allItems: [source],
        cycleInstanceId: CYCLE,
        contextAvailable: false,
        sourceItem: source,
      }),
    ).toBe("unknown");
    expect(
      deriveWorkRecommendationRelationApplicability({
        relation,
        allItems: [source],
        cycleInstanceId: CYCLE,
        sourceItem: source,
      }),
    ).toBe("unknown");
  });

  it("not_applicable when source is superseded even if target remains open", () => {
    const source = item(sourceId, "superseded");
    const all = [source, item(targetId, "active")];
    expect(
      deriveWorkRecommendationRelationApplicability({
        relation,
        allItems: all,
        cycleInstanceId: CYCLE,
        sourceItem: source,
      }),
    ).toBe("not_applicable");
  });

  it("projection cards expose relation without inventing CURRENT", () => {
    const cards = projectCycleWorkRecommendations({
      items: [
        {
          ...item(sourceId, "active"),
          workRecommendationRelation: relation,
        },
        item(targetId, "active"),
      ],
      cycleInstanceId: CYCLE,
      trajectoryDecisionSupportState: "NONE",
    });
    const sourceCard = cards.find((c) => c.epistemicItemId === sourceId);
    expect(sourceCard?.workRecommendationRelation?.kind).toBe("CONTRADICTORY");
    expect(sourceCard?.workRecommendationRelation?.authority).toBe("none");
    expect(sourceCard?.workRecommendationRelation?.applicability).toBe(
      "applicable",
    );
  });
});

describe("P6-HQA-02 REC-01 stabilization — planDurable unchanged", () => {
  it("CONTRADICTORY plans envelope; DISTINCT_RELATED does not", () => {
    expect(
      planDurableWorkRecommendationRelation({
        relationKind: "CONTRADICTORY",
        relatedRecommendationRef: "epi:acw:t",
      }).persist,
    ).toBe(true);
    expect(
      planDurableWorkRecommendationRelation({
        relationKind: "DISTINCT_RELATED",
        relatedRecommendationRef: "epi:acw:t",
      }),
    ).toEqual({ persist: false, reason: "not_required" });
  });
});

```

### Historical replay suite appended to `activeCycleCognitiveWork.d0.test.ts` (complete new describe)

```typescript
 * P6-HQA-02 REC-01 minimal stabilization — historical replay after target disposition.
 * New mint requires applicable target; replay of persisted identity must not.
 */
describe("P6-HQA-02 REC-01 historical replay after target status change", () => {
  function wrRec(
    statement: string,
    opts: {
      relationKind?: NoraActiveCycleWorkItem["relationKind"];
      relatedRecommendationRef?: string | null;
      trackingRationale?: string;
    } = {},
  ): NoraActiveCycleWorkItem {
    return {
      type: "Recommendation",
      statement,
      confidence: "medium",
      blocking: null,
      recommendedOptionRef: null,
      trackingRationale:
        opts.trackingRationale ??
        "Orientation de travail distincte nécessitant un suivi propre hors tour.",
      relationKind: opts.relationKind ?? "NEW",
      relatedRecommendationRef: opts.relatedRecommendationRef ?? null,
    };
  }

  it("replay same logical turn succeeds after CONTRADICTORY target is superseded", async () => {
    const s = await seedStarted("rec01-replay-supersede");
    const cycleId = s.cycle.cycleInstanceId;

    const mat1 = await materializeActiveCycleWork({
      ...acwMaterializeInput(
        s.oa,
        await materializeFacts(
          s.oa,
          s.projectId,
          cycleId,
          "turn:logical:rec01-replay-001",
        ),
        [wrRec("Prioriser l'analyse du suivi d'avancement avant la planification.")],
      ),
      itemSourceIndexes: [0],
    });
    expect(mat1.ok).toBe(true);
    if (!mat1.ok) throw new Error(mat1.reason);
    const targetId = mat1.createdIds[0]!;

    const statement =
      "Prioriser la planification avant le suivi d'avancement.";
    const turnCorrelationId = "turn:logical:rec01-replay-002";
    const after1 = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const filter2 = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        wrRec(statement, {
          relationKind: "CONTRADICTORY",
          relatedRecommendationRef: targetId,
          trackingRationale:
            "Contradiction candidate sur l'ordre de priorité suivi/planification.",
        }),
      ],
      existingItems: after1,
      cycleInstanceId: cycleId,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    const mat2 = await materializeActiveCycleWork({
      ...acwMaterializeInput(
        s.oa,
        await materializeFacts(s.oa, s.projectId, cycleId, turnCorrelationId),
        filter2.items,
      ),
      itemSourceIndexes: filter2.sourceIndexes,
    });
    expect(mat2.ok).toBe(true);
    if (!mat2.ok) throw new Error(mat2.reason);
    const sourceId = mat2.createdIds[0]!;
    const before = await s.oa.cycleServices.epistemic.findById(sourceId);
    expect(before?.workRecommendationRelation?.kind).toBe("CONTRADICTORY");

    // Mark target superseded (historical context change — not via ACW writer).
    await s.oa.cycleServices.epistemic.markSuperseded(targetId);
    const targetAfter = await s.oa.cycleServices.epistemic.findById(targetId);
    expect(targetAfter?.status).toBe("superseded");

    // Replay same logical turn / same payload — must reuse, not fail relation gate.
    const afterSupersede = await s.oa.cycleServices.epistemic.listByProject(
      s.projectId,
    );
    const replayFilter = filterActiveCycleWorkItemsForProspectiveMaterialization({
      items: [
        wrRec(statement, {
          relationKind: "CONTRADICTORY",
          relatedRecommendationRef: targetId,
          trackingRationale:
            "Contradiction candidate sur l'ordre de priorité suivi/planification.",
        }),
      ],
      existingItems: afterSupersede,
      cycleInstanceId: cycleId,
      trajectoryDecisionSupportState: "NONE",
      openWorkRecommendationsCoverage: "COMPLETE",
    });
    // Exact statement already open → filter may suppress; force writer replay path
    // with the original sourceIndexes if filter empties.
    const replayItems =
      replayFilter.items.length > 0
        ? replayFilter.items
        : [
            wrRec(statement, {
              relationKind: "CONTRADICTORY",
              relatedRecommendationRef: targetId,
              trackingRationale:
                "Contradiction candidate sur l'ordre de priorité suivi/planification.",
            }),
          ];
    const replayIndexes =
      replayFilter.items.length > 0 ? replayFilter.sourceIndexes : [0];

    const matReplay = await materializeActiveCycleWork({
      ...acwMaterializeInput(
        s.oa,
        await materializeFacts(s.oa, s.projectId, cycleId, turnCorrelationId),
        replayItems,
      ),
      itemSourceIndexes: replayIndexes,
    });
    expect(matReplay.ok).toBe(true);
    if (!matReplay.ok) throw new Error(`${matReplay.code}:${matReplay.reason}`);
    expect(matReplay.idempotent || matReplay.reusedIds.includes(sourceId)).toBe(
      true,
    );
    expect(matReplay.createdIds).not.toContain(sourceId);

    const afterReplay = await s.oa.cycleServices.epistemic.findById(sourceId);
    expect(afterReplay?.workRecommendationRelation).toEqual(
      before?.workRecommendationRelation,
    );
    expect(afterReplay?.status).toBe("active");
    expect(afterReplay?.supersedes).toBeUndefined();
  });

  it("new CONTRADICTORY mint still fails when target is already superseded", async () => {
    const s = await seedStarted("rec01-replay-new-stale");
    const cycleId = s.cycle.cycleInstanceId;
    const mat1 = await materializeActiveCycleWork({
      ...acwMaterializeInput(
        s.oa,
        await materializeFacts(
          s.oa,
          s.projectId,
          cycleId,
          "turn:logical:rec01-new-stale-001",
        ),
        [wrRec("Prioriser l'analyse du suivi d'avancement avant la planification.")],
      ),
      itemSourceIndexes: [0],
    });
    expect(mat1.ok).toBe(true);
    if (!mat1.ok) throw new Error(mat1.reason);
    const targetId = mat1.createdIds[0]!;
    await s.oa.cycleServices.epistemic.markSuperseded(targetId);

    const mat2 = await materializeActiveCycleWork({
      ...acwMaterializeInput(
        s.oa,
        await materializeFacts(
          s.oa,
          s.projectId,
          cycleId,
          "turn:logical:rec01-new-stale-002",
        ),
        [
          wrRec("Prioriser la planification avant le suivi d'avancement.", {
            relationKind: "CONTRADICTORY",
            relatedRecommendationRef: targetId,
            trackingRationale:
              "Contradiction candidate sur l'ordre de priorité suivi/planification.",
          }),
        ],
      ),
      itemSourceIndexes: [0],
    });
    expect(mat2.ok).toBe(false);
    if (mat2.ok) throw new Error("expected relation invalid");
    expect(mat2.code).toBe("ACTIVE_CYCLE_WORK_RELATION_INVALID");
  });
});
```

## 24. Réserves

1. Coverage PARTIAL remains fail-closed for NEW — functional limitation when >12 open WR; not lifted.
2. CONTRADICTORY under PARTIAL still blocked even if Product can resolve the ref — intentional; lifting would need Morris structural decision.
3. DISTINCT_RELATED durable envelope still not systematic — DEFER.
4. Semantic paraphrase duplicate detection — out of scope / Human QA.
5. REAL Nora provider — not proven; Human QA next.
6. Applicability without `sourceItem` still target-only (backward compat); projection path always supplies source.
7. T3 REC-01 durable continuity: deterministic stabilization candidate ready for ChatGPT re-review — not Human-QA closed.

## 25. Dette et exit

- Exit criterion this cycle: deterministic integrity sufficient for ChatGPT re-review → Human QA rejeu REC-01.
- Remaining debt: PARTIAL policy product decision (keep vs proportional reopen); DISTINCT_RELATED durability; REAL boundary; REC-02 reserved.
- No new architecture debt introduced.

## 26. Décisions Morris restantes

1. Whether to ever reopen NEW/CONTRADICTORY under PARTIAL when Product full reader + exact ref checks suffice (structural — not improvised here).
2. DISTINCT_RELATED durable persistence policy (deferred).
3. Integration gate after ChatGPT re-review before Human QA.
4. No PR readiness automatic.

## 27. Absence de nouvelle architecture

Confirmé: aucun nouveau store, migration, moteur de classification, moteur currentness, second retrieval, vector search, généralisation des relations, ni extension structurante du contrat Option A.

## 28. Verdict

**LOCAL REC-01 MINIMAL STABILIZATION CANDIDATE — READY FOR CHATGPT RE-REVIEW**

Conditions:
- aucun blocker déterministe non résolu;
- Option B / Option A préservées;
- intégrité Product maintenue;
- idempotence PASS;
- SQLite/reload PASS (suite Option A);
- couverture honnêtement qualifiée;
- currentness non sur-déclarée;
- historique inchangé sur replay;
- tests pertinents PASS;
- aucune architecture ajoutée;
- Review Pack FULL;
- handoff Git distant à vérifier après publication L3.

Anti-claims: aucune PR readiness automatique; aucun commit/push projet; aucun merge; aucun P6 GLOBAL PASS; aucune adoption runtime v3; DETERMINISTIC ≠ READY FOR REAL.

---

## Instruction ChatGPT (obligatoire)

Lire depuis `sfia/review-handoff` le fichier:

`sfia-review-handoff/latest-chatgpt-review.md`

Vérifier: cycle, branche, HEAD/base, GO Morris, findings, code, tests, scope, historique, réserves, décisions et verdict.
