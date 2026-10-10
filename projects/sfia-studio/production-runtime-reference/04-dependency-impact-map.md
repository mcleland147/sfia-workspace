# 04 — Dependency & Impact Map

**As-implemented @ `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (impact sample C = REC-01; prior samples retained)**

## Impact analysis procedure (mandatory for future changes)

Given changed paths:

1. Map paths → component IDs (manifest `components[].trackedSourcePaths`).
2. Collect direct `dependsOn` / `dependedBy`.
3. Walk transitive closure (cap depth 6).
4. Union `flowIds`.
5. Union `invariantIds`.
6. Note persistence/restart flags on components.
7. Note authority-sensitive components (`authoritySensitive: true`).
8. Note Fake/Real boundary flags.
9. Collect `testPaths` as mandatory regression set.
10. List doc volumes requiring review; after content review only, refresh digests.

## Core dependency edges (harvested)

```
intentAnalysis / Fake provider
  → activeCycleGovernedContinuation
    → artifactTargetRouting
    → deriveCycleObligationSnapshot / assessFinalization
    → Proposal (proposalStore)
      → recordDecision (HumanDecision)
        → ExecutionContract prepare
          → Attempt → Evidence → ReviewBundle → ClaimEvaluation

criticalChallengeClarification (MW5)
  → orchestrateTurn / F2 progression
  → may delay or re-enter clarification before Proposal continuation

LifecycleSurface / lifecyclePresentation
  → reads assessFinalization obligations (APPLICABLE display)
  → does not alone authorize materialization
```

## DEP edges (stable IDs)

| ID | From | To | Why |
|---|---|---|---|
| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace |
| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate |
| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification |
| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision |
| DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority |
| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | launch |
| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence |
| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn |
| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-INTENT | deterministic structured analysis |
| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity |

## Sample impact analysis A — `activeCycleGovernedContinuation.ts`

**Changed path:** `features/project-assistant/f2/activeCycleGovernedContinuation.ts`

| Step | Result |
|---|---|
| Components | OBJ-ARTIFACT-CONTINUATION |
| Direct deps | Artifact routing, finalization assess/obligation snapshot, Proposal emission, Fake/intent hints |
| Transitive | DecisionBasis/EC/Attempt/Evidence (via Proposal→HD), Lifecycle UI wording consumers |
| Flows | F05 primary; F04/F06/F07 adjacent; F17 restart at proposal |
| Invariants | INV-APPLICABILITY-NE-AUTHORITY, INV-UNKNOWN-NE-APPLICABLE, INV-NO-AUTO-HD, INV-NO-EXEC-BEFORE-AUTH, INV-OLD-CYCLE-HD |
| Persistence | Reads product DB assess/decisions; writes none directly; Proposal process-local |
| Authority | Opens Proposal path only; never EC |
| Fake/Real | Server gate identical; provider may omit continuationKind (mitigated by natural signal) |
| Tests | continuity CORR-01, bridge CORR-01, corrProof07/06, fakeProvider materialization |
| Docs | volumes 02,03,04,06,07,08,09 |

## Sample impact analysis B — `criticalChallengeClarification.ts` (MW5)

**Changed path:** `lib/nora-cognitive-runtime/criticalChallengeClarification.ts`

| Step | Result |
|---|---|
| Components | OBJ-MW5-CHALLENGE |
| Direct deps | Turn orchestration, MW5 session store, product authority facts |
| Transitive | Intent→active-cycle materialization Proposal path (F05) can be delayed/re-challenged; Fake may pre-satisfy challengeAssessment |
| Flows | F04, F05, F06 |
| Invariants | INV-RECOMMENDATION-NE-HD, INV-COGNITION-NE-AUTHORITY, INV-NO-SILENT-HD |
| Persistence | MW5 session store (process/session — verify store type in code); transcript appends |
| Authority | Challenge is cognitive gate, not execution authority |
| Fake/Real | High REAL sensitivity — classifier/challenge sufficiency |
| Tests | MW5-related nora-cognitive / project-assistant continuity tests; **oracle weakness:** local tests may pre-satisfy challenge |
| Docs | 02,03,04,08,09 |

## Sample impact analysis C — P6-HQA-02 / REC-01 (PR #576 @ `b433d431`)

**Changed tracked paths (digest drift):**
- `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH
- `__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts` → OBJ-FINALIZATION-ASSESS testPath

| Step | Result |
|---|---|
| Components | OBJ-TURN-ORCH (semantic); OBJ-FINALIZATION-ASSESS (**NO SEMANTIC IMPACT** — fixture adds `workRecommendationsContext` only) |
| Direct deps | OBJ-MEMORY-B, OBJ-MW5-CHALLENGE; ACW writer / qualify module / Epistemic SQLite (via turn path; not all separately tracked) |
| Transitive | Journal Work projection consumers; F07 disposition remains separate (no auto-HD) |
| Flows | F04 primary (prospective WR mint); F05/F06 adjacent (shared turn orch); F15 tests fixture-only |
| Invariants | INV-COG-NE-AUTH, INV-REC-NE-HD; coverage fail-closed; no auto-disposition from CONTRADICTORY |
| Persistence | Durable WR via existing `oa_epistemic_items` / ACW UoW — no new table |
| Authority | Nora candidate ≠ Product authorization; Studio qualifies |
| Fake/Real | DETERMINISTIC proven at REC-01 scope; Human QA REAL NOT RUN |
| Tests | qualify / ACW Option A+replay / minimalStabilization / Option B context / UX-REC-02 / chatFirst WR / Lifecycle WR / corrProof06 |
| Docs | volumes 02, 03, 04, 08, 09 + README overlay |

Many other REC-01 Product files exist on the PR but are **not** in `trackedSources`/`trackedTests`; this sync documents their as-implemented behavior without expanding the tracked set.

## Component → flows (summary)

| Component | Flows |
|---|---|
| OBJ-ARTIFACT-CONTINUATION | F05, F06, F17 |
| OBJ-MW5-CHALLENGE | F04, F05, F06 |
| OBJ-TURN-ORCH | F04, F05, F06 |
| OBJ-PROPOSAL | F06, F07, F17 |
| OBJ-EC | F08–F11, F18 |
| OBJ-MEMORY-B | F02, F04, F19 |
