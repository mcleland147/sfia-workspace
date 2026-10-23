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

## Dual Generic PREPARE admission paths (D-P6-SHE-01 CURRENT ON MAIN — PR #590)

```
Nora tool (F04) / F2 analysis / F05 adjacent hand-off
  → assessGenericMissionPrepareReadiness + resolveAuthoritativeProductMateriality
      ├─ SHE CURRENT (STRUCTURAL / HD-required / UNKNOWN)
      │    → solicitGenericExecutionPrepare / prepareGenericExecutionContractDraft
      │         (inspectable draft; decisionRefs may be empty;
      │          may stamp sheDeferredStructuralAuthority)
      │    → F09 INSPECT (attestation; grantsAuthority=false)
      │    → Pilot Exécuter (singleHumanExecutePreparedContract)
      │         → HD authorize-inspected-execute (OA EC effects — GAP-04)
      │         → Confirm (if required) → Authorize → Attempt
      │         → F10 Select/Start if admissible else STOP · 0 Attempt
      │         (PREPARE ≠ Inspect ≠ HD ≠ Confirm ≠ Authorize ≠ Execute)
      ├─ HISTORICAL disposition-before-PREPARE (still available)
      │    → remember CURRENT offer (process-local)
      │    → Pilot disposition on sealed presentation (UI)
      │         ├─ ACCEPT
      │         │    → OA HumanDecision status=accepted (durable genericMissionContext)
      │         │    → verifyGenericMissionHumanDecisionForPrepare
      │         │    → solicitGenericExecutionPrepare (decisionRefs verified)
      │         │    → F09 inspect → Confirm → Authorize → F10 Execute
      │         ├─ REFUSE
      │         │    → OA HumanDecision refused (recordable)
      │         │    → this disposition path forbids PREPARE (HD_REFUSED)
      │         └─ AMEND
      │              → HD_AMEND_REQUIRES_NEW_PRESENTATION
      │              → PREPARE forbidden on this path until new accepted HD
      └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4 + Tool-First R1)
           → pathless: positive non-mutating claim required
                (`read_only` OR repositoryMutationDeclared ∈ {none,read})
                + complementary Product gates; declaration alone ≠ authority
           → solicitGenericExecutionPrepare (decisionRefs=[])
           → F09 inspect → Confirm → Authorize
           → F10 Select → Start → Execute (Fake/DET)
                └─ if REAL armed + pathless non-mutating (Tool-First R2):
                     Select: refuse before new Attempt
                     Start: refuse launch; Attempt stays accepted; no launch-port call
                     code BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE
      UNKNOWN Execute without admissible authority → FAIL-CLOSED (inspectable PREPARE allowed)
      pathless without positive claim (absent mutation AND not read_only) → FAIL-CLOSED
```

OA = authority of record. W2 = Product coordination. Nora = cognition/recommendation only. Cursor = controlled execution under Authorization.

**Structural authority gate (S1 — CURRENT SHE):** structural / HD-required authority is verified **before Cursor launch** on Exécuter — not as a precondition that blocks inspectable PREPARE. Disposition-before-PREPARE Accept remains a valid historical path; Refuse/Amend still refuse **that** path. Accept alone is never Execute authority. HD / Confirm / Authorize OA objects are **not** removed.

**HISTORICAL S1 (pre-SHE):** only an accepted, mission-bound, applicable, verified, non-superseded HD opened Chemin A PREPARE. Retained for disposition-before-PREPARE callers and legacy M3.

**Tool-First R1/R2 (CURRENT ON MAIN — PR #588 merge `304e30e8`, DET at tested scope):** R1 gates pathless NON_STRUCTURAL at Materiality→PREPARE (positive claim + Product checks). R2 is a Product dependency of F10 Select/Start on the Cursor REAL boundary — stamp ≠ technical no-write; Fake/DET path unchanged. Not a new OA object; not a parallel engine. **OPEN:** `TOOL-FIRST-REAL-NOWRITE` (Product gate ≠ technical Cursor REAL no-write sandbox).

## DEP edges (stable IDs)

**Index note (AKG-M3 G6 / CORR-01):** Curated `manifest.dependencies[]` holds exactly **9** edges; both endpoints ∈ `manifest.components[]` (13 after OBJ-ATTEMPT). **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (prior self-edge was a conformance-preserving stub — R-M3A-01). Distinguish: (1) **curated indexed edge** (in the nine); (2) **historical narrative endpoint label** on a curated edge (e.g. old `OBJ-INTENT` wording for DEP-FAKE-INTENT — not a curated component); (3) **purely descriptive / non-indexed** edges (not in the nine — not auto-promoted).

### Curated nine (manifest.dependencies[])

| ID | From | To | Why | Manifest curated? |
|---|---|---|---|---|
| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace | YES |
| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate | YES |
| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification | YES |
| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision | YES |
| DEP-HD-EC | OBJ-HD | OBJ-EC | HD-bound / historical disposition-before-PREPARE and Proposal→prepare linkage — **not** a universal precondition of SHE inspectable PREPARE. Under SHE CURRENT, an inspectable PREPARE does not require prior HD. Any applicable HD is recorded within the Pilot's Exécuter gesture, after inspection, followed by conditional Confirmation and Authorization before any new Attempt or Cursor launch. | YES |
| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays `accepted`) when REAL+pathless non-mutating | YES |
| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn | YES |
| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-TURN-ORCH | deterministic structured analysis into turn orch (**curated to=`OBJ-TURN-ORCH`**). Historical narrative sometimes labelled the consumer `OBJ-INTENT` — that label is **not** a curated component and does **not** mean this edge is absent from the manifest | YES |
| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity | YES |

### Descriptive / non-indexed (narrative only — not in manifest.dependencies[])

| ID | From | To | Why | Manifest curated? |
|---|---|---|---|---|
| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence | NO (narrative) |
| DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt | NO (narrative) |
| DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural disposition-before-PREPARE | NO (narrative) |
| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate | NO (narrative) |
| DEP-VSR-D1-AUDIT-TYPE | vertical-slice-runtime | lib/d1 boundedAtomicAudit | **HISTORICAL** TYPE_ONLY import removed under AKG-M5 L1/A09 (local Delivery). VSR/core now type against `ProjectCycleAuditPort` (`lib/platform/t-a7`); D1 store remains transient adapter when `auditMode=sqlite` + store injected; default **noop** | NO (narrative) |

### Overlay — AKG-M5 L1/A09 audit-port decoupling (local Delivery 2026-10-23)

| Item | Status |
|---|---|
| Changed paths | `lib/vertical-slice-runtime/service.ts`, `lib/vertical-slice-core/localSqliteAudit.ts`, importBoundaries tests (VSR + core) |
| Contract | Reuse `ProjectCycleAuditPort` (append-only); `LocalProjectCreationAuditPort` remains distinct |
| Runtime default | `auditMode` noop unchanged — no implicit sqlite activation |
| Persistence | No new Product table; D1 `d1_atomic_audit` adapter retained until L2 gates |
| Proof (this cycle) | typecheck + targeted Vitest **BEHAVIOR PROVEN at tested local scope** — not Product REAL |
| Manifest | trackedSource digest refresh for `service.ts` after review — digest ≠ semantic exhaustiveness |

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

## Sample impact analysis D — Nora P0/P1/P2 (PR #577 INTEGRATED ON MAIN)

**Changed tracked paths (digest drift at sync):**
- `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH
- `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` → OBJ-TURN-ORCH
- `features/pre-m6-product-ui/hooks/useProductConversation.ts` → OBJ-UI-LIFECYCLE

Untracked but behaviorally central (documented, digests not expanded): `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `controlledContinuation.ts`, P0 UI panel/surface files, P0/P1/P2/TV01 tests.

| Step | Result |
|---|---|
| Components | OBJ-TURN-ORCH (**SEMANTIC IMPACT**); OBJ-UI-LIFECYCLE (incomplete Chat-first); OBJ-MEMORY-B adjacent (Session-on-resume); OBJ-MW5-CHALLENGE adjacent |
| Direct deps | OBJ-MEMORY-B, OBJ-MW5-CHALLENGE; Runner/adaptive helpers |
| Flows | F04 primary; F02 / F05 / F06 / F15 / F19 adjacent per manifest |
| Invariants | INV-COG-NE-AUTH; INV-MEMB-NE-TRUTHC; INV-NO-SILENT-HD; FinOps numeric fail-closed; INV-FAKE-REAL-SM |
| Persistence | Session SQLite history between Product turns; RunState **in-process same turn only**; cross-restart RunState DEFER |
| Authority | Nora candidate ≠ Product authorization / HD |
| Fake/Real | DETERMINISTIC proven at PR #577 scope (merged `d8ceb8ad`); REAL documentary quality NOT PROVEN |
| Tests | `p6.nora.p0.*`, `p6.nora.p1.*`, `p6.nora.p1p2.*`, `mw6.pre-real.budget-hardening` NUM-CLAMP / R-PRE-REAL-08A, `runner.d0`, `orchestrateTurn.test` |
| Docs | volumes 01, 02, 03, 04, 06, 08, 09 + README overlay |
| Digests | refreshed **after** content review + Morris GO on this sync pass |

**SEMANTIC IMPACT = YES** (do not claim global NO SEMANTIC IMPACT).

## Sample impact analysis F — P6-REAL-OBS-P0 Option B (local candidate — CRITICAL CORRECTION)

**Changed tracked paths (digest drift):**
- `features/project-assistant/orchestrateTurn.ts` → OBJ-TURN-ORCH

Untracked (documented, digests not expanded): `cognitiveExecutionReceipt.ts`, `types.ts` receipt field, `p6.realObs.optionB.receiptConservation.d0.test.ts`.

| Step | Result |
|---|---|
| Components | OBJ-TURN-ORCH (**SEMANTIC IMPACT** — additive receipt projection; fail-soft conservation) |
| Direct deps | NoraCognitiveTurnResult usage/adaptive/continuation |
| Flows | F04 primary (send/orchestrate); F02 adjacent (observability) |
| Persistence | Product: process-local registry only (no Product JSONL write). External QA: §T JSONL ledger **ADOPTED + STABILIZED** via `lib/p6-campaign-evidence/**` (secured append, integrity statuses, exclusive lock). Session ≠ Evidence authority |
| Authority | Receipt `realProofStatus=NOT_PROVEN`; ledger `realBoundaryClaim=NOT_CLAIMED`; Runner id observed ≠ REAL |
| Fake/Real | DETERMINISTIC PROVEN AT INTEGRATED OPTION B EVIDENCE SEAM (incl. read-uniqueness); REAL boundary **NOT PROVEN**; concurrency **MONO_WRITER** only |
| Digests | mechanical `--write-digests` after integrity/capture stabilization (tracked Product files when changed) |

**SEMANTIC IMPACT = YES** on prior Product seam; external ledger module is **QA device** (OBS-01…04 closed at DET claimed model).

## Sample impact analysis E — RCD-01 documentary reliability (PR #578 INTEGRATED ON MAIN)

**Changed Product paths (historical semantic change; already on main @ `44006648`):**
- `lib/platform/repository/gitLocalReadAdapter.ts` → Git read / coverage accounting
- `lib/platform/tools/toolRouter.ts` → final model-visible envelope (`prepareGitLocalReadDataForModel`)
- `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` → OBJ-TURN-ORCH (documentary guidance hook); tracked digest `f4804915f8906eda`
- `lib/nora-cognitive-runtime/readCoverage.ts`, `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `documentaryReadGuidance.ts`, `documentaryBudgetExhausted.ts` → coverage / restitution / Focused elevation (several untracked in manifest)

**This documentary pass:** NO NEW PRODUCT CODE CHANGE — Living Reference sync only.

| Step | Result |
|---|---|
| Components | OBJ-TURN-ORCH (**SEMANTIC IMPACT = YES** on F04 documentary acquisition); tool/Git adapter adjacent |
| Direct deps | OBJ-MEMORY-B (Session tool results); OBJ-CWP/adaptive budget adjacent; platform tools/redaction |
| Transitive | Product conversation UI consumers of incomplete / coverage disclosure; REC-01 coverage readers |
| Flows | **F04 primary**; F02 / F15 / F19 adjacent (Session / tests) |
| Invariants | INV-COG-NE-AUTH; INV-FAKE-REAL-SM; FinOps ceilings unchanged (≤10 / 12000); no silent HD / Deliverable invent |
| Persistence | **None changed** — Session/tool results only; no new tables; RunState cross-restart still DEFER |
| Authority | ToolRouter gains no Product authority; Nora candidate ≠ HD |
| Fake/Real | DETERMINISTIC R1–R7 proven at tested scope; **GDR REAL NOT PROVEN** |
| Tests | `p6.nora.min09.documentaryReliability.d0.test.ts` (+ P1/P2/Session regressions) |
| Docs | volumes 02, 03, 04, 06, 08, 09 + README; debt `RCD-01-PRR-SEMANTIC-COHERENCE` documentary correction prepared / integration pending |

## Sample impact analysis G — P6-HQA-F05-GD4-01 / PR #586 (optional documentary → Generic PREPARE)

**Changed tracked paths (digest drift):**
- `features/project-assistant/f2/orchestrateF2.ts` → OBJ-TURN-ORCH
- `features/project-assistant/f2/activeCycleGovernedContinuation.ts` → OBJ-ARTIFACT-CONTINUATION
- `lib/platform/ai/fakeProvider.ts` → Fake test boundary (F05 fixture cue `__P6_OPTIONAL_DOCUMENTARY_MD__`)

**Untracked Product helpers (semantic, not digest-tracked):** pending Generic PREPARE offer store; prepareGenericExecutionContractDraft; resolveAuthoritativeProductMateriality; genericPrepareCapabilityEnvelope; F05 optional routing d0 test.

| Step | Result |
|---|---|
| Components | OBJ-TURN-ORCH + OBJ-ARTIFACT-CONTINUATION — **SEMANTIC IMPACT = YES** (routing + classifier helper + blocked message). FakeProvider — **SEMANTIC IMPACT = YES** at Fake boundary only (deterministic cue; ≠ OpenAI LIVE). |
| Direct deps | Generic PREPARE offer / contract draft / materiality / capability envelope (adjacent); Artifact obligation assess unchanged for true REQUIRE_ARTIFACT |
| Transitive | F08–F11 when Pilot accepts CURRENT offer → EC inspect/confirm/authorize; D-PC-09 path composition remains server-owned at execution |
| Flows | **F05 primary** (admission split + optional documentary); F06/F07 adjacent (no invented HD); F10 adjacent after authorize |
| Invariants | INV-NO-SILENT-HD; INV-APPLICABILITY-NE-AUTHORITY; INV-ARTIFACT-COND; INV-NO-EXEC-BEFORE-AUTH; INV-FAKE-REAL-SM; INV-CAP-NE-AUTH |
| Persistence | Pending Generic PREPARE offer **process-local** (restart-unsafe) — no new tables |
| Authority | PREPARE ≠ AUTHORIZE; materiality server-owned; capability exact match fail-closed; proposed paths non-authoritative |
| Fake/Real | DETERMINISTIC proven at tested scope; OpenAI LIVE / e66 / Cursor REAL **NOT CLAIMED** |
| Tests | `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (+ continuity/bridge CORR-01, G-D4, Product Continuity, HQA-F01) |
| Docs | volumes 02, 03, 04, 06, 07, 08, 09 + README + digests |

## Component → flows (summary)

| Component | Flows |
|---|---|
| OBJ-ARTIFACT-CONTINUATION | F05, F06, F17 |
| OBJ-MW5-CHALLENGE | F04, F05, F06 |
| OBJ-TURN-ORCH | F04, F05, F06 |
| OBJ-PROPOSAL | F06, F07, F17 |
| OBJ-EC | F08–F11, F18 |
| OBJ-MEMORY-B | F02, F04, F19 |
