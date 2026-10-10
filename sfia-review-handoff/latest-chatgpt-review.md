# SFIA Review Pack — FULL
# P6-HQA-02 — REC-01 — TYPED WORK RECOMMENDATION RELATION CONTINUITY
# Technical Architecture Study (Cycle 6) — NO Product implementation
# template v2.6 §7.5

## 1. Git Truth Check

- Generated: 2026-10-10T20:34:55+02:00
- Worktree: `/Users/morris/Projects/sfia-workspace-p6-hqa-02`
- Branch: `fix/studio-p6-hqa-02-work-recommendation-materialization`
- HEAD: `8ed61737df30db270bf871eedad1535020fd1c11`
- origin/main: `8ed61737df30db270bf871eedad1535020fd1c11`
- HEAD == origin/main: YES
- Prior handoff: `7d660f95eacd4ea4b3496d22fba74fdb26da67ce` blob `35c148e0299a8811bbbdc50664d250c7a0969c77`
- Local pack MD5 matched prior handoff before reset (bounded trust pack preserved until this rewrite)
- Staged: empty
- Destructive git: NONE
- Project commit/push/PR: NONE
- Product code modified this cycle: **NONE** (read-only architecture)

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
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
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/qualifyProspectiveWorkRecommendationMaterialization.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.uxrec02.journalDisclaimer.ui.test.tsx
?? projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.rec01.optionB.workRecommendationsContext.d0.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts
```

### git diff --stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 1642 ++++++++++++++++++--
 .../corrProof06.artifactObligation.d0.test.ts      |    4 +
 .../chatFirstGovernedDecisionLoop.ui.test.tsx      |   10 +-
 .../activeCycleCognitiveWork.d0.test.ts            |  135 ++
 .../noraConversationalInitiative.d0.test.ts        |    3 +
 ...anticContinuity.corr02.c2ProductTurn.d0.test.ts |    9 +
 .../pilotNoraStudioSemanticContinuity.d0.test.ts   |    6 +
 .../studioCognitiveContext.test.ts                 |    8 +
 .../pre-m6-product-ui/surfaces/JournalSurface.tsx  |   10 +-
 .../project-assistant/buildProjectSystemPrompt.ts  |   21 +
 .../project-assistant/f2/studioCognitiveContext.ts |  130 +-
 .../materializeActiveCycleWork.ts                  |   41 +-
 .../features/project-assistant/orchestrateTurn.ts  |   46 +-
 .../noraProductTurnOutputType.ts                   |   94 +-
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |   12 +
 15 files changed, 2020 insertions(+), 151 deletions(-)
```

### git diff --cached --stat

```
(empty)
```

### git worktree list (excerpt)

```
/Users/morris/Projects/sfia-workspace                                                                                                                                                                                                                                              980064c0 [qa/sfia-studio-p6-global-integrated-product-qa]
/Users/morris/Projects/sfia-codex-pilot                                                                                                                                                                                                                                            ec7f397a [method/codex-operating-model-pilot]
/Users/morris/Projects/sfia-doc-od04-i01-truth                                                                                                                                                                                                                                     299cb617 [docs/sfia-studio-nora-od04-i01-boundary-truth-sync]
/Users/morris/Projects/sfia-gcec-b-commit-target-binding-c481610c                                                                                                                                                                                                                  11a43d3d [delivery/sfia-studio-gcec-b-commit-target-binding-alignment]
/Users/morris/Projects/sfia-gcec-c-remote-push-auth-env-11a43d3d                                                                                                                                                                                                                   ff267fdf [delivery/sfia-studio-gcec-c-remote-push-auth-env]
/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf                                                                                                                                                                                                                f4210388 [delivery/sfia-studio-gcec-d-ephemeral-secret-bridge]
…
```

**Collision:** NONE. REC-01 Option B / bounded-trust local candidate preserved (uncommitted).

## 2. GO Morris

**Authorized:** repository-informed technical architecture study; option comparison; candidate conceptual contract; FULL Review Pack; L3 handoff publish.

**Consumed functional principles (Morris-validated):**
1. CONTRADICTORY relations must remain durably reconstructible when materialized as significant.
2. DISTINCT_RELATED durable only when materially necessary for continuity.
3. Proportionality — no universal epistemic graph; no systematic persistence of all cognitive signals.
4. Authority — Nora candidate ≠ Pilot business truth; Studio verifies context/refs/policy.
5. Uncertainty — no automatic materialization under identified material uncertainty.
6. History — no retroactive mutation of historical Work Recommendations.

**NOT authorized / NOT taken:**
- Product implementation
- Persistence architecture selection (implicit or explicit adoption)
- Migration / schema creation / new store
- UI change / Nora prompt change / REAL calls
- Project commit/push/PR/merge
- Doctrine / Roadmap / C1 modification

## 3. Qualification SFIA

| Field | Value |
|-------|-------|
| Cycle type | 6 — Architecture technique |
| Profile | Critical |
| Typologie | EVOL — conception technique bornée |
| Capacités | V3-F04, V3-F08, V3-F05, V3-F02, V3-F14 |
| Blocs activés | Convergence; Architecture technique; Modèle épistémique; Persistance/provenance; Currentness; Gouvernance; Compatibilité historique; Architecture decision support; Review Pack; Handoff |
| Blocs désactivés | Delivery; UI; Migration; Schema creation; New storage architecture; Deploy; Product automation; REAL provider calls |
| QA level | Architecture analysis — deterministic Product tests NOT RUN |

## 4. Convergence Pre-check

| Item | Status |
|------|--------|
| Build Doctrine | VALIDATED — ACTIVE ON MAIN |
| Roadmap P6 | applicable |
| C1 | VALIDATED |
| P2 | VALIDATED |
| P6 Human QA | IN PROGRESS |
| P6 GLOBAL PASS | NO |
| Runtime v3 | NON ADOPTED |

**Trajectory:** REC-01 Option B → bounded cognitive trust → proportional typed relation continuity → durable carrier design → **Morris arbitration** → eventual Delivery → tests → Human QA → resume P6.

### Asset classification (analysis only — nothing ADOPTED)

| Asset | Disposition |
|-------|-------------|
| EpistemicItem | KEEP / ADAPT CANDIDATE |
| Product SQLite (`oa_epistemic_items`) | KEEP |
| relatedObjects | KEEP / QUALIFY (generic id bag — not typed relation) |
| provenance | KEEP / QUALIFY (actor/source/correlation — not WR relation kind) |
| supersedes | KEEP — do not repurpose |
| Lifecycle Recommendation metadata | HARVEST PATTERN ONLY |
| Reservation metadata | HARVEST PATTERN ONLY |
| DecisionBasis | HARVEST PATTERN ONLY (HD-side; wrong authority for WR–WR link) |
| Work Recommendation projection | ADAPT CANDIDATE |
| Nora context | ADAPT CANDIDATE |
| Journal | KEEP / ADAPT CANDIDATE |
| Contradiction EpistemicItemType | QUALIFY (distinct item type; not WR typed edge) |

**Gap:** typed relation not reconstructible after materialization (bounded-trust handoff).
**Debt:** loss of relational context + transient justification.
**Target exit proof:** durable governed reconstructible relation after reload, no historical mutation, no parallel store.

## 5. Sources Git and source routing

### Governance
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`

### Product
- `product-simplification/02-…-functional-operating-model.md`
- `product-simplification/03-…-workspace-interaction-architecture.md`
- `product-simplification/04-…-semantic-projection-cognitive-architecture.md`
- `product-simplification/07-…-p6-global-integrated-product-qa.md`

### Doctrine v3
- `sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`

### Process
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- Operating Model / guardrails v2.6

### Prior handoff (required)
- `sfia/review-handoff` @ `7d660f95` — Bounded Cognitive Trust Completion FULL pack
- Confirmed reserve: typed `relationKind` / `relatedRecommendationRef` mint-time only; not reconstructible

### CKC Cycle 6
- Synthetic intra-v3 card (no detailed CKC invented). CKC without execution authority.

### Primary code (corrective worktree — not main)

Inspected paths:
- `app/lib/oa/cycle/domain/types.ts` — EpistemicItem, EpistemicLifecycleRecommendation, UpdateEpistemicStateRequest
- `app/lib/oa/cycle/domain/reservationSemantics.ts` — EpistemicReservationMetadata Option A
- `app/lib/oa/cycle/application/lifecycleRecommendation/types.ts` — LR-D01/D03 Option A doctrine
- `app/lib/oa/cycle/application/updateEpistemicState.ts` — write path clones optional typed envelopes
- `app/lib/oa/cycle/infrastructure/sqlite/sqliteEpistemicRepository.ts` — payload_json persistence
- `app/lib/oa/project/infrastructure/sqlite/db.ts` — `oa_epistemic_items` schema
- `app/lib/oa/doctrine/domain/types.ts` — ProvenanceRecord
- `app/lib/oa/cycle/application/deriveWorkRecommendations.ts` — WR projection from relatedObjects
- `app/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization.ts` — mint-time gates (local candidate)
- `app/features/project-assistant/materializeActiveCycleWork.ts` — relatedObjects construction; no relationKind persist
- `app/features/project-assistant/f2/studioCognitiveContext.ts` — open WR projection (id/statement/status/cycle/disposition)
- `app/features/pre-m6-product-ui/surfaces/JournalSurface.tsx` — WR cards; no typed relation UI
- `app/lib/oa/decision/domain/types.ts` — DecisionBasis (HD authority — harvest pattern only)
- `app/lib/oa/cycle/application/lifecycleRecommendation/currentness.ts` (+ basisFingerprint / resolveCanonicalBasis) — LR-specific; not WR engine

## 6. Contrats techniques inspectés

### 6.1 EpistemicItem (owner: Cycle/OA epistemic)

| Aspect | Finding |
|--------|---------|
| Role | Durable epistemic object (Recommendation, Observation, Reservation, Contradiction, …) |
| Truth | Product SQLite row `oa_epistemic_items` + LPS id list |
| TS model | `EpistemicItem` in `domain/types.ts` |
| Serialization | Entire object `JSON.stringify` → `payload_json` |
| Physical store | SQLite columns: id, project_id, type, status, materialized, payload_json, timestamps — **no per-field columns for optional envelopes** |
| Validation | Application invariants + UpdateEpistemicState promotion guards |
| Write | `UpdateEpistemicState` → `saveForProject` inside UoW/transaction |
| Read | `listByProject` / `findById` → `JSON.parse(payload_json)` |
| Replay | Reload from SQLite; LPS lists ids |
| Historical compat | Optional fields (`lifecycleRecommendation`, `reservation`) absent on legacy items — readers tolerate absence |
| Relations today | `relatedObjects: string[]` (generic); `supersedes?: string` (replacement) |
| Currentness | Status + derived projections; LR has separate derived CURRENT/STALE (not stored on item) |

**Critical persistence fact (verified):**

```44:72:projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/sqliteEpistemicRepository.ts
  async saveForProject(projectId: string, item: EpistemicItem): Promise<void> {
    ...
    const payload = JSON.stringify(cloneItem(item));
    this.store.db.prepare(
      `INSERT INTO oa_epistemic_items(
         epistemic_item_id, project_id, type, status, materialized, payload_json, created_at, updated_at
       ) VALUES (?, ?, ?, ?, 1, ?, ?, ?)
       ON CONFLICT(epistemic_item_id) DO UPDATE SET ... payload_json = excluded.payload_json ...`
    )
```

Therefore: an **optional typed field on EpistemicItem** is persisted if and only if it is present on the object passed to `UpdateEpistemicState` / `saveForProject`. No SQLite DDL change is required for additive JSON fields. Conversely, a TypeScript-only field never written into `items[]` is **not** persisted.

### 6.2 UpdateEpistemicStateRequest

Already accepts optional:
- `lifecycleRecommendation?: EpistemicLifecycleRecommendation`
- `reservation?: EpistemicReservationMetadata`
- `provenance?`, `relatedObjects?`, `supersedes?`

Write assembly clones these onto the durable item (lines 118–142 of `updateEpistemicState.ts`). Pattern proven for prior Option A envelopes.

### 6.3 materializeActiveCycleWork (local candidate)

Builds `relatedObjects` as:
`[projectId, cycleInstanceId, trajectoryId?, trajectoryStepId?, recommendedOptionRef?]`

Does **not** pass `relationKind`, `relatedRecommendationRef`, or `trackingRationale` into `UpdateEpistemicState`.

Identity: `epi:acw:` digest of project|cycle|turnCorrelationId|index|type|statementDigest|optionRef.
Idempotence via reuse + `materialParity` (type/statement/confidence/blocking/source/optionRef) — **does not currently consider relation metadata**.

### 6.4 qualifyProspectiveWorkRecommendationMaterialization (local candidate)

Mint-time gates under bounded trust. `relationKind` / `relatedRecommendationRef` used for admit/abstain only. File documents explicitly: typed relation **not** persisted as reconstructible Product fact.

### 6.5 NoraActiveCycleWorkItem

Structured Option B fields exist on Nora output (local candidate schema). Transient until Studio materializes.

### 6.6 deriveWorkRecommendations / studioCognitiveContext / Journal

- Projection cards: id, statement, status, disposition, cycle binding via relatedObjects / source — **no relationKind**.
- `StudioOpenWorkRecommendationProjection`: id, statement, status, cycleInstanceId, dispositionDecisionId, family Work.
- JournalSurface: Work Recommendation cards + disposition labels; UX-REC-02 disclaimer preserved; no typed relation display.

### 6.7 ProvenanceRecord

Fields: provenanceRecordId, actor, source enum, timestamp, correlationId, projectId?, cycleInstanceId?, doctrinePackageRef?, supersedes?, evidenceRefs?.

**No** typed peer-item relation kind. `evidenceRefs` is Evidence-oriented. Overloading provenance to encode CONTRADICTORY/DISTINCT would collide with actor/source semantics.

### 6.8 supersedes

Means replacement / mark prior superseded (`markSuperseded`). Using it for CONTRADICTORY coexistence would **falsify** status of the target — forbidden by Morris principles and GO.

### 6.9 Contradiction EpistemicItemType

Exists as a first-class `EpistemicItemType` and may appear in ACW type allowlist. It is a **separate item**, not a typed edge between two Recommendations. Using it as WR–WR relation carrier would change object taxonomy (new Contradiction items per link) — distinct architecture, not reconstructibility of a Recommendation edge.

### 6.10 Lifecycle / Trajectory currentness

LR stores basisFingerprint + basisRefs; CURRENT/STALE **derived**, never stored on item (`EpistemicLifecycleRecommendation` comment). Trajectory currentness is separate. **Not transferable** as a WR Currentness Engine. Identity ≠ currentness (P4) remains binding.

### 6.11 DecisionBasis

Lives on HumanDecision. Encodes decision source context including optional `workRecommendationContext`. Wrong authority plane for persisting Nora-candidate WR–WR relations (would imply decision-side truth). Harvest pattern only for “typed optional envelope” idea — not for storage location.

## 7. Inventaire des carriers existants

| Carrier | Represents today | Typed WR relation? | Machine protocol? | Reconstructible typed kind? | Migration for additive use? | Second store? |
|---------|------------------|--------------------|-------------------|-----------------------------|-----------------------------|---------------|
| A. `relatedObjects: string[]` | Generic related ids (prj/cycle/opt/optset/epi occasionally) | NO — id presence ≠ kind | Prefix conventions (`opt:`, `optset:`) already; LR forbids machine protocol for enums | NO | N/A (abuse forbidden) | No |
| B. `provenance` | Who/when/source/correlation | NO | Structured record | NO for relation kind | Would require ProvenanceRecord schema widen | No |
| C. Optional typed envelopes on EpistemicItem (`lifecycleRecommendation`, `reservation`) | Domain-specific typed metadata | **Pattern YES** (not WR yet) | Typed object, optional, absent=legacy | YES if written into payload | **No DDL**; TypeScript + writers/readers | No |
| D. LR/Trajectory currentness/basis | Derived applicability for LR/PT | NO for WR–WR | Fingerprints + refs | N/A | N/A | No |
| E. `supersedes` | Replacement edge | Wrong semantics | Status mutation | Would destroy coexistence | N/A | No |
| F. `type=Contradiction` item | Separate epistemic object | Different model | Item type | Not a Recommendation edge | New mint semantics | No |
| G. DecisionBasis on HD | Decision authority context | Wrong plane | Typed on HD | Would couple WR relation to HD | HD schema | No |
| H. Dedicated relationship table/store | N/A today | Would | New | Would | **Yes** (new table) | **Yes — forbidden as default** |

## 8. Matrice de compatibilité

| Requirement | relatedObjects | provenance | Optional typed envelope (LR/RSV pattern) | Dedicated store |
|-------------|----------------|------------|------------------------------------------|-----------------|
| Typed kind CONTRADICTORY/DISTINCT | FAIL (forbidden string protocol) | FAIL (wrong semantics) | PASS if designed | PASS (oversized) |
| Source + target ids | Partial (target id only, untyped) | Partial via evidenceRefs misuse | PASS | PASS |
| Origin of judgment (Nora candidate vs Studio-validated) | FAIL | Partial (actor/source) | PASS (explicit fields) | PASS |
| Provenance/correlation | Separate field exists | Native | Can reference provenanceRecordId | PASS |
| Project/cycle binding | Already in relatedObjects | Optional fields | Can denormalize or rely on item | PASS |
| Current vs historical applicability | No | No | Can store durable fact + derive applicability | PASS |
| Historical WR without field | N/A | N/A | PASS (optional absent) | PASS if readers tolerate |
| No historical mutation | PASS if prospective-only write | PASS | PASS if write only on new mints | Risk if backfill |
| No HumanDecision | PASS | PASS | PASS if authority=none | PASS if designed |
| Proportionality | — | — | Best fit | Worst fit |
| Structural persistence GO needed? | Abuse = STOP | Schema widen = YES | **YES (field shape + policy)** | **YES (new store)** |

## 9. Options A/B/C/D

> Options are analysis tracks. **None is adopted** by this cycle.

### OPTION A — Optional typed relational metadata on existing Work Recommendation EpistemicItem

**Harvest:** `lifecycleRecommendation` / `reservation` Option A — same EpistemicItem JSON payload; no new table; no JSON-in-statement; no relatedObjects machine protocol (LR-D01/D03).

#### 1. Feasibility (repo)
HIGH. Persistence pipeline already round-trips unknown-to-SQLite optional object fields via `payload_json`. `UpdateEpistemicStateRequest` already extended twice with optional envelopes.

#### 2. Conceptual model (CANDIDATE — not adopted)
On the **source** Recommendation (newly minted), optional e.g. `workRecommendationRelation?: { kind, targetEpistemicItemId, judgmentOrigin, materializationPolicyVersion, … }` with:
- `kind`: CONTRADICTORY | DISTINCT_RELATED (only kinds that may become durable)
- `targetEpistemicItemId`: validated open/active WR id at mint
- `judgmentOrigin`: nora_structured_candidate (never pilot_decision)
- `authority: "none"`
- optional `trackingRationaleSnapshot` **only if** Morris accepts durability of justification (separable decision)
- **Not** stored: CURRENT/STALE (derive)

#### 3–6. Schema / serdes / SQLite / read
- TS: add optional field on `EpistemicItem` + `UpdateEpistemicStateRequest` (Delivery)
- Serdes: automatic via existing JSON payload
- SQLite: **no DDL migration** for additive field
- Read: `listByProject` returns field when present; projections ADAPT to expose when authorized

#### 7. Reconstructibility
YES after reload if field written at mint and not stripped by writers.

#### 8. Currentness / invalidation
Derive applicability: target missing/disposed/superseded ⇒ relation durable but **not currently applicable** (Identity ≠ currentness). Do not auto-dispose target. Do not invent second Currentness Engine — small predicates beside WR projection.

#### 9. Historical compatibility
Legacy items omit field → OK. No backfill required. Eight Human QA historical WRs unchanged.

#### 10–11. Idempotence / UoW
Must extend `materialParity` / identity policy so relation metadata does not mint duplicates or silently drop on reuse. Write remains inside existing ACW UoW + LPS append. Atomicity preserved if field included in same `UpdateEpistemicState` call as item create.

#### 12–14. Nora / Journal / Work-Lifecycle-Trajectory
- Nora: keep structured candidate; no new AI call; prompt change only if exposing reconstructed relations (future, separate GO)
- Journal: optional display of durable relation — UX ADAPT candidate; UX-REC-02 remains
- Lifecycle/Trajectory: untouched if field namespaced to Work Recommendations only (`source === active-cycle-work:nora` or family Work)

#### 15. Migration
None for SQLite DDL. Application-level reader tolerance required (already pattern).

#### 16–17. Dev / maintenance cost
LOW–MEDIUM: types + materialize path + qualify policy for when to attach + projection + tests. Maintenance: one more optional envelope; harvestable from Reservation/LR lessons.

#### 18. Debt / exit
Debt: when DISTINCT_RELATED is “materially necessary”; whether rationale is durable; projection surfaces. Exit: Delivery tests §18.

#### 19. Risks
- Over-persisting DISTINCT_RELATED (violates proportionality)
- Treating durable Nora relation as Pilot-resolved contradiction
- Forgetting materialParity → identity bugs
- Journal implying Truth C

#### 20. Morris gates
- Approve optional envelope shape (names/enums)
- Approve CONTRADICTORY always-durable vs DISTINCT_RELATED conditional rule
- Approve whether trackingRationale snapshot is durable
- Approve projection surfaces (Nora context / Journal)
- Distinct Delivery GO

**Structural persistence decision required:** YES (field adoption), but **smallest coherent delta**.

---

### OPTION B — Reuse/extend provenance/lineage carrier

#### Feasibility
LOW as honest typed WR relation. `ProvenanceRecord` models production provenance, not peer Recommendation semantics. `evidenceRefs` is Evidence-shaped. Extending ProvenanceRecord with `relationKind` would overload two concerns and widen a cross-cutting doctrine type used by Cycle/Decision/EC/Attempt.

#### Reconstructibility
Only if ProvenanceRecord schema extended and ACW provenance populated — high blast radius.

#### Historical / migration
Widening shared ProvenanceRecord affects many writers/readers; higher risk than EpistemicItem-local optional field.

#### Cost
MEDIUM–HIGH; maintenance spreads.

#### Recommendation role
**Not preferred** as primary carrier. May **reference** `provenanceRecordId` from Option A envelope.

**Structural GO:** YES if chosen (doctrine-level type change).

---

### OPTION C — Reconstruct from already-persisted Product objects without new field

#### Feasibility
**NOT DEMONSTRABLE** with current writers.

What persists today for a coexisting CONTRADICTORY mint:
- Two Recommendation items (statements, statuses, relatedObjects project/cycle/opt, provenance turn)
- **Not** relationKind, **not** relatedRecommendationRef, **not** trackingRationale

After reload, coexistence of two active WRs is visible; **typed contradiction is not**. Statement text comparison is heuristic — forbidden as semantic proof.

#### Reconstructibility of typed kind
FAIL.

#### Role
Documents why bounded-trust handoff residual exists. Useful as negative proof, not as solution.

**Structural GO:** N/A (cannot satisfy CONTRADICTORY durability principle without new durable signal).

---

### OPTION D — Dedicated relational entity / new store

#### Feasibility
Technically possible; **disproportionate** for REC-01. Requires new table/port/UoW integration, dual-write atomicity with EpistemicItem, new projections, migration story.

#### Reconstructibility
YES if built.

#### Cost
HIGH; maintenance of parallel graph.

#### Role
Comparison only — default **rejected** under proportionality unless Morris finds Option A insufficient after Delivery attempt.

**Structural GO:** YES (new store) — not default.

---

### Comparison summary

| Criterion | A Typed optional envelope | B Provenance extend | C No new field | D New store |
|-----------|---------------------------|---------------------|----------------|-------------|
| Satisfies CONTRADICTORY durability | YES (if implemented) | Forced/awkward | NO | YES |
| Proportionality | BEST | POOR | N/A | WORST |
| Historical compat | BEST (optional) | Risky shared type | Status quo gap | Heavy |
| DDL migration | NO | Maybe | NO | YES |
| Second store | NO | NO | NO | YES |
| Aligns existing Option A pattern | YES | NO | — | NO |
| Blast radius | Localized to WR path | Cross-cutting | None | Large |
| Smallest coherent Product delta | **YES** | No | Incomplete | No |

## 10. Risques

| Risk | Severity | Mitigation |
|------|----------|------------|
| Implicit architecture adoption in “recommendation” | High | Explicit CANDIDATE; no Product writes this cycle |
| relatedObjects string protocol temptation | High | Forbidden by GO + LR doctrine |
| supersedes misuse for contradiction | High | Forbidden |
| Durable Nora judgment read as Pilot resolution | High | `authority: "none"`; no auto disposition; Journal language |
| DISTINCT_RELATED over-persistence | Medium | Material-necessity policy gate (Morris) |
| materialParity / identity regression | Medium | Delivery must extend parity tests |
| LR/RSV readers confused by new field | Low | Namespace; ignore unknown optional |
| Claiming Option C works | High | Documented FAIL |
| REAL Nora mis-classification | Medium | Human QA; not solved by persistence |
| Currentness engine sprawl | Medium | Derive applicability; no new engine |

## 11. Currentness

Cases (design constraints for future Delivery — not implemented):

| Case | Durable relation? | Currently applicable? |
|------|-------------------|------------------------|
| Target active, same open cycle | Yes (if kind persisted) | Yes (derive) |
| Target disposed | Yes (historical) | No for current work effects |
| Source superseded | Yes on superseded item | No as current source |
| Target superseded | Yes | No |
| Cycle closed | Yes | Historical / non-current |
| Project reload | Yes via payload_json | Re-derive |
| Multi-turn resume | Yes | Re-derive against live facts |
| Target inaccessible | Durable row may remain | Fail-closed applicability |
| Trajectory change | WR relation independent unless optionRef coupled | Re-derive |
| Contradiction became historical | Remains reconstructible | Not current authority |

**P4:** Identity ≠ currentness. Do not store CURRENT on the relation. Do not transfer LR Currentness Engine.

## 12. Provenance

Durable relation should retain:
- link to mint provenance (`provenanceRecordId` / turnCorrelationId)
- judgmentOrigin = structured Nora candidate validated by Studio gates
- **not** escalate to human_decision source without HD

Distinction to preserve in design language (enums not created this cycle):
- Nora candidate relation
- Product-validated reference (ref resolved against open facts)
- Qualified contradiction (Studio accepted mint under policy)
- Resolved contradiction (requires Pilot/HD — out of automatic path)
- Historical contradiction (durable, non-applicable)

## 13. Relations typées

| Kind | Durable? | Notes |
|------|----------|-------|
| CONTRADICTORY | **Required** when materialized as significant | Reconstructible; no auto-dispose; no HD; no supersede |
| DISTINCT_RELATED | **Conditional** | Only if absence loses material continuity info; qualify via structured Nora signal + Studio policy — **no new text classifier** |
| NEW | No relation required | |
| ALREADY_COVERED | No new WR | |
| UNCERTAIN | Abstain | |

**How to qualify DISTINCT_RELATED material necessity without lexical classifier:**
Use existing structured contract only: Nora emits DISTINCT_RELATED + valid relatedRecommendationRef + exploitable trackingRationale + COMPLETE coverage. Studio may persist relation **only for that structured kind** when Morris policy says DISTINCT_RELATED edges are durable when minted (narrow rule), **or** require an additional explicit structured flag later (would be new field — separate Morris gate). This study does **not** invent a text classifier.

## 14. Compatibilité historique

- Prospective writes only for new mints after Delivery GO
- No backfill of eight historical Human QA WRs
- Readers must treat missing relation metadata as “no typed relation” (same as missing `reservation`)
- Absence must not throw in list/project/Journal
- Idempotent replay of old turns unchanged

## 15. Impacts stockage / lecture / écriture (if Option A later chosen)

| Layer | Impact |
|-------|--------|
| SQLite DDL | None |
| payload_json | Additive keys on new items |
| UpdateEpistemicState | Accept + clone new optional field |
| materializeActiveCycleWork | Attach envelope when qualify admits CONTRADICTORY / (policy) DISTINCT_RELATED |
| qualify* | Unchanged gates + decide attach vs mint-only |
| deriveWorkRecommendations / studioCognitiveContext | Optional projection fields |
| Journal | Optional relation disclosure |
| LPS | Unchanged (ids only) |
| LR / Trajectory materializers | No change if namespaced |

## 16. Transition temporaire (runtime policy NOT changed this cycle)

Current candidate behavior: CONTRADICTORY / DISTINCT_RELATED may mint coexisting WRs **without** durable typed relation (bounded trust).

| Transient strategy | Product risk | Continuity loss | Human QA impact | Simplicity | Debt | Exit | Gate |
|--------------------|--------------|-----------------|-----------------|------------|------|------|------|
| **T1** Keep coexistence + explicit bounded reserve | Low (status quo) | Typed kind lost after reload | QA must not assume reconstructible contradiction | Highest | Continues residual | Close only after Delivery or accept residual | Morris if extending HQA under reserve |
| **T2** Suspend CONTRADICTORY mint until durable carrier | Medium (less WR created) | Avoids false durable expectation | Blocks contradiction scenarios in HQA | Medium | Forces Delivery dependency | Cleaner semantics | Morris |
| **T3** Defer REC-01 closure until durable capacity | Process | Blocks lot closure | HQA sequencing | Process-heavy | Lowest technical debt illusion | Clean lot exit | Morris |

**This cycle does not select T1/T2/T3.** Prefer presenting **T1 as default continuity of already-validated bounded-trust candidate** unless Morris chooses T2/T3 — but selection remains Morris-owned.

## 17. Contrat cible candidat (CANDIDATE — not ADOPTED)

| Question | Candidate answer |
|----------|------------------|
| Who produces? | Nora structured `relationKind` + `relatedRecommendationRef` |
| Who qualifies? | Studio (`qualifyProspective…` Product gates + bounded trust) |
| When durable? | On successful prospective materialization of CONTRADICTORY always; DISTINCT_RELATED per Morris material-necessity policy |
| Where recorded? | Optional typed envelope on source EpistemicItem Recommendation (Option A pattern) |
| How reconstructed? | Read payload_json → envelope fields |
| Exposed to Nora? | Via studioCognitiveContext ADAPT (future) — ids + kind + target statement summary; not as Truth C |
| Journal? | Optional non-authoritative disclosure (future UX GO) |
| When sources change? | Envelope remains; applicability derived; no auto mutation of target |
| Avoid implicit HD? | `authority: "none"`; no disposition; no supersede |
| Avoid historical mutation? | Write only on new mints; no backfill |
| Legacy? | Field optional / absent |

**Illustrative CANDIDATE shape (not adopted, not implemented):**

```typescript
// CANDIDATE ONLY — not in Product types this cycle
type EpistemicWorkRecommendationRelation = {
  kind: "CONTRADICTORY" | "DISTINCT_RELATED";
  targetEpistemicItemId: string;
  judgmentOrigin: "nora_structured_candidate";
  authority: "none";
  qualifiedAt: string; // mint timestamp
  provenanceRecordId?: string;
  // optional separable Morris decision:
  // trackingRationaleSnapshot?: string;
};
// EpistemicItem.workRecommendationRelation?: EpistemicWorkRecommendationRelation
```

## 18. Tests / exit proof — future Delivery (specify only)

### A. CONTRADICTORY
Create REC-002 linked to REC-001 → restart Product process → reload REC-002 → reconstruct source, target, kind, provenance, applicable status → no supersession/disposition → no HD.

### B. DISTINCT_RELATED
Two distinct WRs → coexistence → durable relation only if policy requires → no mandatory relation otherwise.

### C. LEGACY
Reload eight historical WRs → no mutation, no mandatory backfill, no disappearance, no errors from missing metadata.

### D. INTEGRITY
Same logicalTurnId → idempotence, sourceIndexes, no double mint, no LPS duplicates, UoW atomicity; materialParity covers relation envelope.

### E. CURRENTNESS
Historical / disposed target ⇒ reconstructible but not authorizing current Product effect on stale basis.

### F. UX / NORA
Durable relation exploitable in authorized projections; never auto decision/disposition.

### G. REAL
Separate empirical evaluation of Nora detection quality — fixtures ≠ REAL PROVEN.

## 19. Dette et conditions de sortie

**Debt:**
- Persistence carrier not selected (this cycle by design)
- DISTINCT_RELATED material-necessity rule precision
- Whether rationale snapshot is durable
- Projection/Journal surfaces
- Transient T1/T2/T3 choice for HQA sequencing

**Exit (architecture study):** options qualified + Morris decision on carrier + transition.
**Exit (REC-01 overall):** Delivery under distinct GO + tests A–F PASS + HQA replay.

## 20. Décisions Morris à prendre

1. **Select persistence carrier:** recommend Option A; alternatives B/C/D documented. **No selection made here.**
2. **Approve candidate envelope fields** (names/enums/authority).
3. **DISTINCT_RELATED durability rule:** always-when-minted vs stricter material-necessity signal.
4. **trackingRationaleSnapshot durable?** yes/no (separable).
5. **Transient strategy T1/T2/T3** for HQA while Delivery pending.
6. **Distinct Delivery GO** (implementation) after architecture acceptance.
7. **Projection GO** (Nora context / Journal disclosure) — may follow Delivery.

## 21. Recommandation technique (motivated — NOT adopted)

**Recommend Option A** (optional typed relational metadata on the Work Recommendation EpistemicItem) as the **smallest coherent Product delta** because:

1. **Repo-proven pattern:** `lifecycleRecommendation` and `reservation` already use optional typed envelopes on the same `payload_json` path (`UpdateEpistemicState` + `SqliteEpistemicRepository`) with explicit “no new table / no relatedObjects machine protocol / no JSON-in-statement” doctrine (LR-D01/D03; Reservation KEEP store ADAPT metadata).
2. **Satisfies CONTRADICTORY durability** without abusing `supersedes` or inventing a graph store.
3. **Preserves historical compatibility** via optional absence — no DDL migration, no backfill.
4. **Keeps authority plane correct:** envelope can carry `authority: "none"` and judgmentOrigin; avoids DecisionBasis/HD coupling.
5. **Proportional:** scoped to Work Recommendation mints; not a universal epistemic graph (rejects D as default).
6. **Option C fails** reconstructibility of typed kind with current writers — cannot meet Morris principle 1.
7. **Option B** overloads cross-cutting ProvenanceRecord — higher blast radius for weaker semantic fit.

**Explicit non-claims:** This recommendation is **not** an adoption, **not** a Delivery GO, **not** a schema change, **not** a persistence selection executed in code.

## 22. Réserves

1. Architecture recommendation ≠ selected persistence.
2. Option A still requires Morris field/policy gates before Delivery.
3. DISTINCT_RELATED proportionality rule needs Morris precision.
4. Current candidate continues coexistence without durable typed relation until Delivery.
5. Contradiction EpistemicItemType is a different model — not evaluated as preferred WR edge.
6. No REAL / no Product tests executed this cycle (architecture read-only).
7. Local REC-01 Product candidate remains uncommitted; main lacks these files.
8. P6 GLOBAL PASS = NO; runtime v3 NON ADOPTED.

## 23. Verdict

**TECHNICAL ARCHITECTURE OPTIONS QUALIFIED — READY FOR MORRIS DECISION**

Conditions:
- inventory complete and repo-verified;
- options A/B/C/D compared with real contracts;
- recommendation Option A motivated without implicit adoption;
- impacts / risks / historical compatibility / currentness / provenance documented;
- **zero Product code changes this cycle**;
- Review Pack FULL;
- Handoff L3 to verify after publish.

Not: Delivery · persistence GO · migration GO · PR · P6 PASS · v3 ADOPTED.

---

## INSTRUCTION CHATGPT

Lire depuis `sfia/review-handoff` le fichier `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier: cycle, branche, HEAD/base, GO Morris, options A/B/C/D, sources, impacts, réserves, décisions, verdict.

---

## Appendix — Verbatim contract anchors

### EpistemicItem optional envelopes (types.ts concept)

export type EpistemicItem = {
  schemaVersion: "0.1.0-oa";
  epistemicItemId: string;
  type: EpistemicItemType;
  statement: string;
  status: EpistemicItemStatus;
  ...
  supersedes?: string;
  relatedObjects?: string[];
  provenance?: ProvenanceRecord;
  lifecycleRecommendation?: EpistemicLifecycleRecommendation;  // Option A pattern
  reservation?: EpistemicReservationMetadata;                  // Option A pattern
};

### LR doctrine (lifecycleRecommendation/types.ts)

```
Durable carrier = EpistemicItem type Recommendation + optional typed lifecycleRecommendation.
LR-D01 / LR-D03 Option A — no new table; no JSON-in-statement; no relatedObjects machine protocol.
```

### Reservation pattern (reservationSemantics.ts)

```
CYCLE-RESERVATION-PILOTING-01 — Reservation semantics on EpistemicItem.
KEEP EpistemicItem store; ADAPT optional metadata only. No parallel store.
Optional typed Reservation payload (Option A — same EpistemicItem JSON).
Absent on historical MealFlow / pre-#517 reservations.
```

### oa_epistemic_items DDL (db.ts)

```
CREATE TABLE IF NOT EXISTS oa_epistemic_items (
  epistemic_item_id TEXT PRIMARY KEY NOT NULL,
  project_id TEXT NOT NULL,
  type TEXT NOT NULL,
  status TEXT NOT NULL,
  materialized INTEGER NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  ...
);
```

### materializeActiveCycleWork relatedObjects (current candidate)

```
const relatedObjects = [
  facts.projectId,
  facts.activeCycleInstanceId,
  ...(cycle.trajectoryId ? [cycle.trajectoryId] : []),
  ...(cycle.trajectoryStepId ? [cycle.trajectoryStepId] : []),
  ...(recommendedOptionRef ? [recommendedOptionRef] : []),
];
// UpdateEpistemicState items: no relationKind / relatedRecommendationRef / trackingRationale
```

### ProvenanceRecord fields (doctrine/domain/types.ts)

```
provenanceRecordId, actor, source, timestamp, correlationId,
projectId?, cycleInstanceId?, doctrinePackageRef?, supersedes?, evidenceRefs?
```
