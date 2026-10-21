# AKG-M3-G6 — PRR SEMANTIC SYNC AUTHORING — REVIEW PACK FULL (CRITICAL)

```text
TIMESTAMP_UTC: 2026-10-21T16:55:11Z
CYCLE: AKG-M3-G6 — PRR Semantic Sync Authoring
CHANTIER: SFIA-STUDIO-ARCHITECTURAL-KNOWLEDGE-AND-CONSTRUCTION-GOVERNANCE
MILESTONE: AKG-M3 — Reference Consolidation
TYPE: Cycle 8 — Delivery / Implementation
PROFIL: CRITICAL
TYPOLOGIE: DOC / ARCHITECTURE / CONTROLLED LOCAL AUTHORING
CAPACITY: V3-F05 (principal) · V3-F12 (connexe)
QA: CRITICAL DOCUMENTARY SEMANTIC REVIEW
REVIEW_PACK: FULL
REVIEW_HANDOFF: REQUIRED — publish-in-cycle (L3)
DIGEST_SYNC: NOT AUTHORIZED
PROJECT_COMMIT_PUSH_PR_MERGE: NOT AUTHORIZED
```

---

## 1. Timestamp UTC

**2026-10-21T16:55:11Z**

---

## 2. GO Morris G6

**GO AKG-M3 — G6 PRR SEMANTIC SYNC AUTHORING** (2026-10-21) — CONSUMED.

Adopted arbitrations:
- **D1** DEP-EC-ATT Option A — add OBJ-ATTEMPT; retarget OBJ-EC → OBJ-ATTEMPT
- **D2** F11b narrative subflow — NOT in flows[]
- **D3** CURRENT/historical sync vols 02, 03, 05, 09 (+07 SHE; +04 deps per allowlist)
- **D4** Routing table documentary bounded

Prior: M3-B REVIEW ACCEPTANCE WITH GOVERNED RESERVES — APPROVED.

NOT authorized: digest refresh · Product · checker · tests · vol08 · project commit/push/PR/merge · REAL · Roadmap.

---

## 3. Local Git Truth Check

| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-akg-m2-global-g1-roadmap-local` |
| Branch | `docs/sfia-studio-akg-m2-global-g1-roadmap-local` |
| HEAD | `6ed646d8441c2f130e1a5ff1979b0b05d2afaedb` |
| origin/main | `c2b3d00ceb73b07eab44243ac45ecbe75e6e5bfd` — **MATCH** expected |
| M3-B handoff tip (pre-publish) | `f670b17d0b13210e3f7b220ef3c03e221081e22f` |
| Porcelain pre-authoring | clean |
| Allowlist vs origin/main pre-edit | **7/7 MATCH** |

---

## 4. Git Review Index

| Ref | SHA |
|---|---|
| Baseline read | `c2b3d00c…` |
| M3-B | `f670b17d…` / blob `05e6555b…` |
| M3-A | `868bc45b…` |
| Debt 38×20 | `df77b8a2…` |
| PR #588 Tool-First | merge `304e30e8` |
| PR #590 SHE | merge `c9abdbc3` |

---

## 5. Sources consultées

Processus v2.6 template/routing/operating-model/rules/checklist (as applicable) · Build Doctrine A3/A4/A8–A12 · Roadmap B-AKG (historical G6 NOT AUTHORIZED ignored as veto) · C1 TARGET · v3 30/32–35/37 · PRR allowlist + complementary READ-ONLY · checker · conformance test (read) · Attempt/Select/Start/R2/SHE/F11b/routing code paths · immutable handoffs M2/M3-A/M3-B.

---

## 6. Convergence Pre-check

M0/M1/M2 CLOSED · M3-A/B accepted with reserves · G6 authoring APPROVED/CONSUMED · Semantic Review PENDING · Digest Sync NOT AUTHORIZED · AKG-M3 Formal Exit NOT ACQUIRED · M4 NOT STARTED · P6 NOT PASSED · v3 NON ADOPTED · REAL NOT PROVEN.

---

## 7. R23 / R24

| Rule | Result |
|---|---|
| R23 | **PASS** — Attempt code (`execution-attempt/**`, Select/Start, R2 gate, sqlite `oa_execution_attempts`) confronted before index; SHE/Tool-First merges verified ancestors of main |
| R24 | DOCUMENTARY SEMANTIC IMPACT = **YES** · PRODUCT BEHAVIOR CHANGE = **NO EXPECTED** · KEEP architecture · ADAPT obsolete CURRENT phrases · COMPLETE OBJ-ATTEMPT index · CONSOLIDATE routing table without parallel engine |

---

## 8. Manifest avant / après

| Metric | Before | After |
|---|---|---|
| components[] | 12 | **13** |
| flows[] | 20 (F01–F20) | **20** (unchanged; F11b absent) |
| dependencies[] | 9 | **9** |
| DEP-EC-ATT | OBJ-EC → OBJ-EC | **OBJ-EC → OBJ-ATTEMPT** |
| schemaVersion / kind / canonicalReadme | unchanged | unchanged |
| lastReviewedCommit | `928ab15b…` | **unchanged** (not simulated) |
| sha256_16 lists | frozen | **unchanged** (no --write-digests) |

### Manifest excerpt (modified objects)

```json
{
  "OBJ-ATTEMPT": {
    "id": "OBJ-ATTEMPT",
    "title": "ExecutionAttempt",
    "docSection": "02-runtime-object-catalog.md",
    "trackedSourcePaths": [
      "projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts",
      "projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts",
      "projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts",
      "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts",
      "projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts"
    ],
    "flowIds": [
      "F10",
      "F11",
      "F18"
    ],
    "invariantIds": [
      "INV-ATTEMPT-NE-PROVEN",
      "INV-NO-EXEC-BEFORE-AUTH"
    ],
    "testPaths": [
      "projects/sfia-studio/app/__tests__/oa/execution-attempt/lifecycleFoundation.test.ts",
      "projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts"
    ],
    "dependsOn": [
      "OBJ-EC"
    ],
    "dependencyIds": [],
    "authoritySensitive": true,
    "persistence": "oa_execution_attempts"
  },
  "DEP-EC-ATT": {
    "id": "DEP-EC-ATT",
    "from": "OBJ-EC",
    "to": "OBJ-ATTEMPT"
  },
  "componentCount": 13,
  "dependencyCount": 9,
  "flowIds": [
    "F01",
    "F02",
    "F03",
    "F04",
    "F05",
    "F06",
    "F07",
    "F08",
    "F09",
    "F10",
    "F11",
    "F12",
    "F13",
    "F14",
    "F15",
    "F16",
    "F17",
    "F18",
    "F19",
    "F20"
  ]
}

```

---

## 9. OBJ-ATTEMPT provenance

| Field | Sourced from |
|---|---|
| Role | Bounded attempt vs AUTHORIZED EC; Select→Start→Result; distinct from EC |
| Persistence | `oa_execution_attempts` (+ active / result budget) — `db.ts` |
| Paths | `lib/oa/execution-attempt/domain/types.ts`, `application/selectExecutionAgent.ts`, `application/startExecution.ts`, R2 `boundedNonMutatingRealLaunchGate.ts` |
| Flows | F10, F11, F18 (existing IDs) |
| Invariants | INV-ATTEMPT-NE-PROVEN, INV-NO-EXEC-BEFORE-AUTH (existing catalog) |
| Tests | `lifecycleFoundation.test.ts`, `p6.toolFirst.safetyClosureR1R2.d0.test.ts` (exist on disk) |
| dependsOn | OBJ-EC |
| Not invented | No OBJ-EVIDENCE / DEP-ATT-EV auto-add; empty dependencyIds justified (edge owned on OBJ-EC) |

---

## 10. DEP-EC-ATT avant / après

| | Before | After |
|---|---|---|
| from | OBJ-EC | OBJ-EC |
| to | OBJ-EC (self-edge stub) | **OBJ-ATTEMPT** |
| Checker endpoints | both in components | both in components (**PASS** structure) |
| R-M3A-01 | OPEN | **OPEN** — local candidate resolution; **not FORMALLY CLOSED** |

---

## 11. F11b INDEX POLICY

Recorded under PRR03 F11b: narrative subflow F10–F14; curated flows[] F01–F20 only; absence ≠ missing Product. **D2 satisfied.**

---

## 12. Phrase Reconciliation Matrix (executed)

| Location | Before class | After | Category |
|---|---|---|---|
| 02 GMHD status | CURRENT on Delivery / not INTEGRATED | CURRENT ON MAIN PR #590 | ADAPT CURRENT |
| 02 Tool-First stamp | PENDING_GIT_INTEGRATION | CURRENT ON MAIN PR #588 | ADAPT CURRENT |
| 02 OBJ-ATTEMPT | narrative only | + index/paths/ceilings | COMPLETE |
| 03 D-ER-16 / Tool-First / R1 / R2 / Select | PENDING / candidate | CURRENT ON MAIN + DET ceilings | ADAPT CURRENT |
| 03 F08/F09 SHE status | Delivery / PR pending | CURRENT ON MAIN | ADAPT CURRENT |
| 03 F11b | no policy | INDEX POLICY | COMPLETE |
| 03 routing | scattered | documentary table | CONSOLIDATE |
| 03 F18/F19 | PARTIAL | PARTIAL + clarify durable/process-local/REAL | KEEP + disclose |
| 03 D-ER nominal | LOCAL CANDIDATE | CURRENT ON MAIN; prior HISTORICAL | ADAPT CURRENT |
| 04 SHE header / Tool-First / DEP table | Delivery; no curated note | CURRENT ON MAIN; curated vs narrative | ADAPT + COMPLETE |
| 05 R2 | PENDING | CURRENT ON MAIN; OPEN no-write | ADAPT CURRENT |
| 07 SHE amendement | Delivery / PR DRAFT / not main | CURRENT ON MAIN PR #590 | ADAPT CURRENT |
| 09 consolidation / Tool-First overlays | PENDING as CURRENT | epistemic classes HISTORICAL/CURRENT/OPEN/G6 | ADAPT + CLARIFY |
| 09 G6 section | absent | R-M3A-01 / R-M3B-01 OPEN | COMPLETE |

Kept historical snapshots where dated (e.g. GENERIC-EXECUTION-REVIEW-RESULT « at time of that macro »).

---

## 13. Routing Table

Inserted under F05 in vol03 (see modified content). B-M2B-03 remains OPEN — table does not claim behavioural closure.

---

## 14. F18/F19 ceilings

F18 PARTIAL · F19 PARTIAL · durable vs process-local clarified · REAL NOT PROVEN · no COMPLETE promotion.

---

## 15. Documentary Impact Matrix

| File | Type | Direct | Transitive | Coverage | Checker |
|---|---|---|---|---|---|
| manifest | COMPLETE index | DEP-EC-ATT, components 13 | impact-analysis readers | DOCUMENTED + structure verified | endpoints OK; digests N/A for JSON body |
| 02 | ADAPT+COMPLETE | Attempt/SHE/R1 stamp | authority narrative | DOCUMENTED | digest drift expected |
| 03 | ADAPT+COMPLETE+CONSOLIDATE | F11b/routing/CURRENT/F18/19 | B-M2B-03 docs | DOCUMENTED | digest drift |
| 04 | ADAPT+COMPLETE | DEP map honesty | curated scope | DOCUMENTED | digest drift |
| 05 | ADAPT | R2 env boundary | REAL honesty | DOCUMENTED | digest drift |
| 07 | ADAPT | SHE CURRENT | authority invariants KEEP | DOCUMENTED | digest drift |
| 09 | ADAPT+COMPLETE | gaps/reserves G6 | debt continuity | DOCUMENTED | digest drift |

---

## 16. Registre des réserves

Preserved: R-M2A-04 OPEN/GOVERNED · R-M2B-03 PASS WITH RESERVE · B-M2B-01…05 OPEN · RS-03 OPEN · TOOL-FIRST-REAL-NOWRITE OPEN · F18/F19 PARTIAL · REAL NOT PROVEN · M2 38×20 identities.

| ID | Status |
|---|---|
| R-M3A-01 | OPEN (local index candidate; not formally closed) |
| R-M3B-01 | OPEN (G6 scope completeness) |

---

## 17. Fake/Real Qualification

Applicable YES · new fakes NONE · DET at selected scopes · documentary alignment this cycle · NOT acquired: READY FOR REAL / REAL BOUNDARY / E2E REAL / P6 / v3 · TOOL-FIRST-REAL-NOWRITE OPEN · F18/F19 PARTIAL · no LIVE/REAL campaign.

---

## 18. Structural Validation

**STRUCTURAL VALIDATION PASS**

- JSON parse OK · schemaVersion/kind/canonicalReadme unchanged
- IDs unique · components 13 · OBJ-ATTEMPT once · DEP-EC-ATT correct · deps 9
- endpoints ∈ components · dependsOn/dependencyIds/flowIds/invariantIds resolve
- referenced sources/tests exist · flows F01–F20 · F11b absent · no other index expansion

---

## 19. Digest Drift attendu

**STRUCTURAL VALIDATION PASS — GLOBAL CONFORMANCE DEFERRED — EXPECTED DIGEST DRIFT.**

Checker output (no --write-digests):

```text
OK: canonical README exists
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md: manifest=71177cd234b88a3b current=552dbce00860c9b8 ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md: manifest=12331c256c76bd30 current=f0ec94936c4d8572 ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md: manifest=b7236bfd326f8f9a current=fdf2c46998500d2e ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md: manifest=2f13a6917c240eb7 current=9883dc02a7856cf9 ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md: manifest=88893854dfe22bd9 current=f19dd23a99dc896a ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md: manifest=252e18777ad9e04b current=299795671742ab9f ⇒ REFERENCE REVIEW REQUIRED
RESULT: REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED

```

Do **NOT** declare PRODUCTION RUNTIME REFERENCE CONFORMANCE OK. Digest Sync requires distinct Morris GO after ChatGPT semantic review.

---

## 20. Fichiers modifiés

Exactly 7 allowlist paths (no creates/deletes):

```text
M projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
M projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

Stat: 7 files changed, 137 insertions(+), 54 deletions(-)

---

## 21. Diff stat / name-status

See §20. Full unified diff in §22.

---

## 22. Contenu exploitable des changements

### 22.A Modified section extracts (post-authoring)

```text
--- projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md:95-108 ---
95|
96|## OBJ-GENERIC-MISSION-HD — Generic Mission HumanDecision (M-HD-01/02 + SHE)
97|
98|- **Status:** **CURRENT ON MAIN** (D-P6-SHE-01 / Single Human Execute Option A) — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip). DETERMINISTIC at tested scope. ≠ REAL / HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.
99|- **Purpose (SHE CURRENT):** Structural / HD-required Generic missions may PREPARE an inspectable draft without prior HD; durable OA HumanDecision (`authorize-inspected-execute`) is recorded on Pilot Exécuter, bound to the inspected EC (OA-projected effects — GAP-04). HD is **not** deleted; timing moves from PREPARE to Execute.
100|- **Purpose (HISTORICAL disposition-before-PREPARE):** bind a durable OA HumanDecision to a sealed mission presentation before disposition-path PREPARE may resume (`verifyGenericMissionHumanDecisionForPrepare`).
101|- **Durable truth:** `oa_human_decisions` with `decisionBasis.genericMissionContext`, `missionSubjectId`, `presentationDigest`.
102|- **Process-local carrier:** CURRENT pending Generic PREPARE offer (M-HD-02 remember) enables Pilot Accept/Refuse/Amend seal on the historical path — **≠** SHE inspectable PREPARE; offer alone ≠ Authorization.
103|- **Gates:** SHE Record requires `sheInspectedExecutionContract` binding + OA EC reload; historical PREPARE verify remains for Accept→PREPARE callers. Historical HD without binding does not unlock a different mission.
104|- **Non-structural path:** Option 1 / G-D4 may PREPARE with `decisionRefs=[]` when Materiality CURRENT admits — empty refs ≠ structural bypass.
105|- **UI:** SHE ExecutionSurface Exécuter + `useProductConversation` / `GovernedGenericMissionDecisionCard` (historical disposition).
106|- **Paths:** `singleHumanExecutePreparedContract.ts`, `recordGenericMissionHumanDecision.ts`, `genericMissionDecisionContinuity.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `genericMissionSubject.ts`
107|- **Invariant:** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; PREPARE ≠ AUTHORIZE ≠ EXECUTE.
108|

--- projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md:126-139 ---
126|- **Gate:** no EC before required Proposal HD (product path).
127|- **Tool-First pathless stamp (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`). DETERMINISTIC at tested scope · REAL no-write enforcement OPEN (`TOOL-FIRST-REAL-NOWRITE`).
128|
129|## OBJ-INSPECTION — InspectionAttestation
130|
131|- **Purpose:** EC inspection attestation before launch.
132|- **Persistence:** `oa_ec_inspection_attestations`.
133|
134|## OBJ-AUTH-RECEIPT — AuthorityVerificationReceipt
135|
136|- **Purpose:** Durable authority verification evidence.
137|- **Persistence:** `oa_authority_verification_receipts`.
138|- **Invariant:** Capability ≠ Authority.
139|

--- projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md:144-157 ---
144|
145|## OBJ-ATTEMPT — ExecutionAttempt
146|
147|- **Purpose:** Bounded attempt against an AUTHORIZED ExecutionContract; Select→Start→Result lifecycle with closed terminal statuses (`accepted` / `running` / `result_pending` / `succeeded` / `failed` / `timeout` / `cancelled`). Distinct from ExecutionContract (PREPARE/inspect/authority) — Attempt is the execution unit.
148|- **Persistence:** `oa_execution_attempts`, `oa_execution_attempt_active`, `oa_execution_attempt_result_budget`.
149|- **Paths:** `lib/oa/execution-attempt/**` (domain types; `selectExecutionAgent` / `startExecution`); SQLite tables in `lib/oa/project/infrastructure/sqlite/db.ts`; Product R2 gate `features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts`.
150|- **Manifest index (AKG-M3 G6):** curated `components[]` includes **OBJ-ATTEMPT**; dependency **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (conformance endpoints ∈ components).
151|- **Invariant:** Attempt terminal ≠ Product Result PROVEN (`INV-ATTEMPT-NE-PROVEN`); no execution before authority (`INV-NO-EXEC-BEFORE-AUTH`). PREPARE ≠ AUTHORIZE ≠ EXECUTE · Inspect ≠ Execute.
152|- **Proof ceiling:** DETERMINISTIC at tested scope (lifecycle + Tool-First R2 Fake/DET) · REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED.
153|
154|## OBJ-ARTIFACT — Artifact obligation / materialization
155|
156|- **Purpose:** Whether deliverable is required (applicability) and materialization continuation.
157|- **Applicability SoT:** `deriveCycleObligationSnapshot` + `deriveFinalizationApplicability` + assess.

--- projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md:149-162 ---
149|- **Paths:** `lib/oa/execution-attempt/**` (domain types; `selectExecutionAgent` / `startExecution`); SQLite tables in `lib/oa/project/infrastructure/sqlite/db.ts`; Product R2 gate `features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts`.
150|- **Manifest index (AKG-M3 G6):** curated `components[]` includes **OBJ-ATTEMPT**; dependency **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (conformance endpoints ∈ components).
151|- **Invariant:** Attempt terminal ≠ Product Result PROVEN (`INV-ATTEMPT-NE-PROVEN`); no execution before authority (`INV-NO-EXEC-BEFORE-AUTH`). PREPARE ≠ AUTHORIZE ≠ EXECUTE · Inspect ≠ Execute.
152|- **Proof ceiling:** DETERMINISTIC at tested scope (lifecycle + Tool-First R2 Fake/DET) · REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED.
153|
154|## OBJ-ARTIFACT — Artifact obligation / materialization
155|
156|- **Purpose:** Whether deliverable is required (applicability) and materialization continuation.
157|- **Applicability SoT:** `deriveCycleObligationSnapshot` + `deriveFinalizationApplicability` + assess.
158|- **Continuation gate (Artifact governed):** `activeCycleGovernedContinuation.ts` — REQUIRE_ARTIFACT HD **OR** canonical APPLICABLE∧¬SATISFIED.
159|- **Adjacent (P6-HQA-F05-GD4-01):** `no_require_artifact` means a materialization signal without a closure Artifact obligation — **not** Artifact governed continuation and **not** an invented HD. `orchestrateF2` may qualify ordinary documentary work via Generic PREPARE on the same cycle when Product readiness allows (`isOptionalDocumentaryWithoutClosureArtifactBlock`).
160|- **Routing:** `artifactTargetRouting.ts` (workspace + cycle segment composition).
161|- **Invariant:** UNKNOWN ≠ APPLICABLE; Applicability ≠ execution authority; optional documentary ≠ REQUIRE_ARTIFACT.
162|

--- projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md:59-72 ---
59|
60|### Routing table — NEW_CYCLE / ACGC / F08 / Tool-First / SHE (documentary · AKG-M3 G6)
61|
62|Descriptive Product routing map for the same conversational front door. **Does not** close **B-M2B-03** (same utterance → mode ambiguity remains OPEN). Not a parallel execution engine.
63|
64|| Branch | Entry signal | Gate / refuse | Product responsibility | Authority | Exit | Proof / ceiling |
65||---|---|---|---|---|---|---|
66|| **NEW_CYCLE_FORMALIZATION** | Explicit new-cycle language (`hasExplicitNewCycleFormalizationSignal`) even if a future deliverable is mentioned | Not Artifact continuation; avoid `no_active_cycle` fail-closed before `createCycle` | Formalization / `createCycle` path | Pilot/Product cycle authority | New CycleInstance path | F05 CI-HQA-F01 DET · ≠ REAL |
67|| **ACTIVE_CYCLE_GOVERNED_CONTINUATION (ACGC)** | Active cycle + Artifact obligation (REQUIRE_ARTIFACT HD **OR** APPLICABLE∧¬SATISFIED) | Refuse invent HD; UNKNOWN≠APPLICABLE | `activeCycleGovernedContinuation` / materialization | Artifact gates ≠ exec authority | Proposal / materialization continuation | F05 DET · B-M2B-03 OPEN |
68|| **ACTIVE_CYCLE_CONTINUATION_BLOCKED** | e.g. `no_require_artifact` | Blocked reason only | Clarification / refusal messaging | No invented REQUIRE_ARTIFACT | May set `eligibleForGenericPrepareRouting` when optional documentary | F05 GD4-01 DET |
69|| **Adjacent → F08 Generic PREPARE** | Optional documentary without closure Artifact + conversation admission + actionable/`execution_request` + prepareGo/readiness | PREPARE≠AUTHORIZE; Nora solicit≠authority | `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft` | OA/W2 Product admission (F08) | Inspectable EC draft / pending offer | F08 + D-ER-16 Fake DET |
70|| **Tool-First pathless NON_STRUCTURAL** | Positive non-mutating claim (R1: `read_only` **OR** `repositoryMutationDeclared ∈ {none,read}`) | Absent positive claim / write/unknown/contradiction → refuse | Materiality→PREPARE qualification | Product admission ≠ Cursor sandbox | Pathless EC stamp possible | Tool-First R1 DET · REAL OPEN |
71|| **SHE structural / Exécuter** | STRUCTURAL / HD-required / UNKNOWN after inspectable PREPARE | INV-NO-EXEC-BEFORE-AUTH; STOP · 0 Attempt if pre-launch fails | Inspect → HD/Confirm/Authorize → Attempt | HumanDecision / receipts on Exécuter | AUTHORIZED EC → F10 Select/Start | SHE DET (PR #590) · REAL OPEN |
72|| **Nora Generic PREPARE solicitation** | Agents tool `request_generic_execution_prepare` | Never creates HD/Attempt/execute | Cognition solicits only | Remains F08 Product | Solicitation only | D-ER-16 Fake |

--- projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md:105-118 ---
105|- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4 + Tool-First R1):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
106|  - **Pathless bounded non-mutating analysis (CURRENT ON MAIN — Tool-First R1 / PR #588):** when concrete WHERE is empty, Product may qualify NON_STRUCTURAL **only** with a **positive** structured non-mutating claim — `executionIntent.intentKind === "read_only"` **or** `repositoryMutationDeclared ∈ {none, read}` — **plus** live Product context, generalist envelope, and no structural/write/docs_write/materialization/elevated contradiction (`qualifyBoundedNonMutatingAnalysisMission`). Positive declaration ≠ Product authority by itself. **Not a positive claim:** `repositoryMutation` absent **when** `read_only` is also absent; `unknown`; `write`. An admissible `read_only` claim is **not** invalidated by the mere absence of `repositoryMutation`. **No invented documentary/Git path.** CycleInstance and Artifact remain optional when gates allow. No systematic HumanDecision on this path.
107|  - Contract may stamp `boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` — stamp ≠ REAL no-write enforcement (see F10 R2).
108|- **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
109|- **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
110|- **Paths:** `prepareGenericExecutionContractDraft.ts`, `singleHumanExecutePreparedContract.ts`, `resolveAuthoritativeProductMateriality.ts`, `recordGenericMissionHumanDecision.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `prepareAndResolveM3ProductPath` (legacy), `lib/oa/execution-contract/**`
111|- **Invariant:** cannot expand DecisionBasis / sealed WHAT; PREPARE ≠ AUTHORIZE ≠ EXECUTE; no ExecutionAttempt on PREPARE
112|- **Proof:** SHE (`p6.she.singleHumanExecute*`, GAP continuity/HD/finalization) + G-D4 / materiality / M-HD / DER16 / Option1 / Tool-First — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
113|- **Status:** COMPLETE domain (legacy M3); Generic PREPARE + SHE Option A **CURRENT ON MAIN** (PR #590 `c9abdbc3`); Tool-First R1 **CURRENT ON MAIN** at tested scope (PR #588). DETERMINISTIC proof · ≠ REAL · ≠ P6 GLOBAL PASS
114|
115|## F09 — EC inspect / Confirmation / authority
116|- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
117|- **Unified inspection (CURRENT):** Conversation / Execution / Trajectory share one exam contract (`ContractInspectionExamPanel` + `contractInspectionExam` helpers). Explicit open ≠ write; Attest requires presented facts; identity binding = `projectId` + `executionContractId` + `version` + `semanticFingerprint`. Contract change → reinspection. PREPARE must not auto-inspect. Trajectory does not invent inspection on PREPARE/Execute alone.
118|- **requiredInspectedFacts / disclosure:** canonical inspection disclosure on EC; Confirm ≠ Inspect ≠ Authorize ≠ Execute.

--- projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md:126-139 ---
126|- **Project-scoped Cursor Select/Start (CURRENT ON MAIN at tested scope):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse. DETERMINISTIC Fake/DET · ≠ REAL BOUNDARY PROVEN.
127|- **R2 — pathless non-mutating vs Cursor REAL (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
128|  - **Select (`governedExecuteSelectAgent`):** refuse **before** creating a new Attempt — no accepted Attempt from that Select; no REAL process.
129|  - **Start (`governedExecuteStart`):** if an Attempt is already `accepted` (e.g. Fake Select earlier), re-evaluate and refuse Start — Attempt stays `accepted` (not `running`); launch-port calls unchanged; no REAL process.
130|  Fake/DET (`CURSOR_REAL≠1`) remains admissible. Ordinary write / concrete-path contracts are **not** blocked by this gate. **ZERO Cursor REAL** claimed by this candidate.
131|- **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
132|- **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
133|- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` + `p6.toolFirst.safetyClosureR1R2.d0.test.ts` (Select refuse + Start on valid Attempt with exact R2 code; TestOnly launch port) — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
134|- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; pathless non-mutating REAL fail-closed Product-side; no new REAL claim
135|
136|## F11 — Attempt terminal → Evidence → ReviewBundle
137|- **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
138|- **Docs_write durable artifact (POST-EXECUTION-…-01):** when hot-worktree bytes are available at completion, Artifact Evidence uses `external_payload_ref` under existing `mission-result-refs/refs/attempts/…/docs-write-artifact` (same filesystem Evidence layout as MissionResult — **no new store/table**). CursorExecutionReport claim is persisted alongside as `cursor-execution-report.json` on the nominal path (CLAIM, not Evidence). Independent digest verify retained.
139|- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake); docs_write durable review material AS-IMPLEMENTED at tested scope

--- projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md:142-155 ---
142|
143|- **INDEX POLICY (AKG-M3 G6 — D2):** F11b is a **narrative sub-flow** of Product Continuity / execution reconcile spanning journeys already indexed as **F10–F14**. Curated `manifest.flows[]` retains **F01–F20** only; **F11b is not indexed separately**. Absence from `flows[]` **≠** absence of Product behaviour. DET proofs remain historical coverage at tested scope. ZERO REAL · runtime v3 NON ADOPTED unchanged.
144|- **Shared Product Resolution (READ-ONLY):** `resolveProductExecutionContext` composes Project-bound EC / Attempt / Cursor CLAIM / Artifact / Evidence / RB / CE / post-Evidence Recommendation without a new store or knowledge domain. Evidence/RB/CE resolved via current Contract Result CE + `contractResultBindings.evidenceRefs`, then validated by canonical `contractResultBindingsMatchCurrentFacts` against Attempt-bound snapshot (Project / Cycle / EC id / version / semantic fingerprint / Attempt / RB id+frozenVersion / ordered Evidence refs). Never ID-prefix or repository-order preference; ambiguous multi-Evidence without CE → `EVIDENCE_LINEAGE_AMBIGUOUS`.
145|- **Execution Continuity Projection:** `deriveGovernedExecutionContinuityProjection` derives reachable stages only: PRE_EXECUTION | ATTEMPT_ACCEPTED | RUNNING | PRODUCT_MATERIALIZATION_PENDING | POST_EVIDENCE_PENDING | POST_EVIDENCE_COMPLETE | RECOVERY_REQUIRED. Closed lineage integrity codes (e.g. `CONTRACT_RESULT_BINDINGS_MISMATCH`, `CLAIM_EVALUATION_AMBIGUOUS`, `EVIDENCE_LINEAGE_AMBIGUOUS`) project to `RECOVERY_REQUIRED`; query errors such as `ATTEMPT_NOT_FOUND` remain resolve errors.
146|- **Server Reconciler:** `reconcileGovernedExecution` (intent observe|execute|continue) owns deterministic next steps; stops immediately on `recoveryRequired` without rematerialize / new Attempt / new CE. TrajectorySurface is command+projection only (no Select→Start→Complete→Materialize ownership). Restart after ACCEPTED and during RUNNING reuses the same Attempt (deterministic tested scope).
147|- **Nora:** `product_execution_context_get` tool (project-bound); W3-C and conversation both invoke shared `runNoraCognitiveCore` → Agents Runner (`runNoraAgentsTurn`); post_execution mode disables tools/Memory B/hosted search/MW5.
148|- **Status:** DETERMINISTIC at tested scope (incl. CORRECTION PASS 02 canonical lineage); ZERO REAL this macro; runtime v3 NON ADOPTED
149|
150|## F12 — ContractResult / ClaimEvaluation
151|- **Paths:** claim evaluation tables/services; docs_write automatic `completeDocsWriteClaimEvidenceCompletion` while hot worktree / durable absolute path available
152|- **Claim-completion propagation:** RecordResult **consumes** the completion result via closed `classifyDocsWriteClaimCompletionFailure` — only `CONFORMITY_HEADINGS_MISSING` / `ARTIFACT_EMPTY` → Product NOT_PROVEN/UNCLAIMED; all oracle/integrity/lineage/unknown codes → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`. No startsWith/includes catch-alls.
153|- **Honesty:** Attempt `succeeded` ≠ Product PASS; NOT_PROVEN remains when conformity Evidence insufficient
154|- **Status:** PRESENT; automatic qualification AS-IMPLEMENTED; journey REAL proof PARTIAL / NOT PROVEN this macro
155|

--- projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md:184-197 ---
184|
185|## F18 — Restart after HD / before execution
186|- **Survives (durable):** HD / DecisionBasis, LPS, cycle; EC if prepared
187|- **Process-local:** pending Generic PREPARE offer / presentation carrier — **lost** at restart (offer loss ≠ universal PREPARE ban when verified HD + gates allow — HD11)
188|- **Status:** **PARTIAL** proven by domain tests (DET). Automatic UI offer rehydration **NOT PROVEN**. REAL **NOT PROVEN**. Do **not** promote to COMPLETE without new proof.
189|
190|## F19 — Restart post-Evidence
191|- **Survives (durable):** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
192|- **Status:** **PARTIAL** — front-door rehydrate assertions at tested scope (DET). Cross-restart RunState DEFER. REAL SprintBoard re-proof requires distinct Morris GO. Do **not** promote to COMPLETE without new proof.
193|
194|## F20 — Legacy / historical compatibility
195|- **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
196|- **Historical UI surfaces (still routed):** `/cycle-actif`, `/decision`, `/synthese` (nav tier `historical`; `/` still redirects to `/synthese`; POC fixture harness — ≠ OA Truth C)
197|- **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)

--- projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md:189-202 ---
189|
190|## F19 — Restart post-Evidence
191|- **Survives (durable):** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
192|- **Status:** **PARTIAL** — front-door rehydrate assertions at tested scope (DET). Cross-restart RunState DEFER. REAL SprintBoard re-proof requires distinct Morris GO. Do **not** promote to COMPLETE without new proof.
193|
194|## F20 — Legacy / historical compatibility
195|- **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
196|- **Historical UI surfaces (still routed):** `/cycle-actif`, `/decision`, `/synthese` (nav tier `historical`; `/` still redirects to `/synthese`; POC fixture harness — ≠ OA Truth C)
197|- **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
198|- **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
199|- **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)
200|
201|## Generic Execution → Review → Result (CURRENT — Correction Pass 02 candidate)
202|

--- projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md:202-207 ---
202|
203|Nominal Product path (architecture D-ER; **CURRENT ON MAIN** at deterministic tested scope — prior “LOCAL CANDIDATE / NOT INTEGRATED ON MAIN” wording is **HISTORICAL** relative to Generic Execution / Tool-First / SHE merges on main; ≠ REAL · ≠ P6 GLOBAL PASS):
204|
205|HumanDecision (durable DecisionBasis + local-write seal) → Generic EC `studio.cursor.generalist.execute` (authorized `EFFECT_CLASS:local-write` / filesystem.create|modify — **≠** Product write taxonomy) → Cursor Generalist → isolated Git worktree → CursorExecutionReport [CLAIM] + native Cursor Review End Of [CLAIM executor-only; missing ⇒ PARTIAL / no Studio synthesis] → Studio `NodeLocalGitStatusDiffPort` / `observeVerifiedChangeSet` [FACTS] (Git delta only; OBSERVED vs UNAVAILABLE — never invent empty FACTS; never full-repo scan in Git mode) → Generic Execution Review Material → Verification Evidence `ev:execution-review:*` + Mission Evidence → same ReviewBundle / ClaimEvaluation / ContractResult (mismatch ⇒ ≠ PASS) → Product Resolution (`executionReview`) → scheduled UI continue (no abandonment counter) + remount auto-resume → Nora Deep Review (shared Agents core; actual `execution_review_*` tool calls) → Result Surface (real fields + Pilot `w2ReadExecutionReviewItemAction` by itemId).
206|
207|CURRENT: docs_write specialized persist remains TRANSITIONAL dual-write bridge. Anti-stall: mounted schedule + remount from durable projection; Reconciler remains owner of transitions. Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.

--- projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md:94-107 ---
94|
95|**Index note (AKG-M3 G6):** Curated `manifest.dependencies[]` holds **9** edges with both endpoints ∈ `manifest.components[]` (13 after OBJ-ATTEMPT). **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (aligned with this table; prior self-edge was a conformance-preserving stub — see R-M3A-01). Rows below that are **not** in the curated nine (e.g. DEP-ATT-EV, DEP-NORA-GENPREP, DEP-GMHD-EC, DEP-MAT-GENPREP, and DEP-FAKE-INTENT’s `OBJ-INTENT` endpoint) remain **descriptive** narrative dependencies — **not** auto-promoted into the manifest.
96|
97|| ID | From | To | Why | Manifest curated? |
98||---|---|---|---|---|
99|| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace | YES |
100|| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate | YES |
101|| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification | YES |
102|| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision | YES |
103|| DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority | YES |
104|| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays accepted) when REAL+pathless non-mutating | YES |
105|| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence | NO (narrative) |
106|| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn | YES |
107|| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-TURN-ORCH (curated) | deterministic structured analysis into turn orch; historical narrative sometimes named `OBJ-INTENT` (not a curated component) | YES |

--- projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md:103-116 ---
103|| DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority | YES |
104|| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays accepted) when REAL+pathless non-mutating | YES |
105|| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence | NO (narrative) |
106|| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn | YES |
107|| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-TURN-ORCH (curated) | deterministic structured analysis into turn orch; historical narrative sometimes named `OBJ-INTENT` (not a curated component) | YES |
108|| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity | YES |
109|| DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt | NO (narrative) |
110|| DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural PREPARE | NO (narrative) |
111|| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate | NO (narrative) |
112|
113|## Sample impact analysis A — `activeCycleGovernedContinuation.ts`
114|
115|**Changed path:** `features/project-assistant/f2/activeCycleGovernedContinuation.ts`
116|

--- projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md:40-46 ---
40|- **Cursor REAL:** gated; mutual exclusion with deterministic Cursor E2E boundary asserted in runtime helpers.
41|- **Tool-First R2 (CURRENT ON MAIN — PR #588 merge `304e30e8`):** `SFIA_STUDIO_CURSOR_REAL=1` arms REAL generalist. Pathless non-mutating ECs hit Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` because REAL generalist has **no** technical no-write sandbox: **Select** refuses before new Attempt; **Start** refuses launch while an existing Attempt stays `accepted`. Product gate ≠ technical sandbox. Env flag alone does not prove REAL BOUNDARY. **OPEN:** `TOOL-FIRST-REAL-NOWRITE`. Fake/DET (`CURSOR_REAL≠1`) remains the deterministic proof path for those missions at tested scope.
42|
43|## Server vs client
44|
45|- Product binding/authority envs are **server-only** (never `NEXT_PUBLIC_*`).
46|- Browser must not supply repository binding or Pilot authority claims.

--- projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md:4-17 ---
4|
5|**Amendement documentaire D-P6-SHE-01 (requalifié AKG-M3 G6 — 2026-10-21) :** SINGLE HUMAN EXECUTE / Option A est **CURRENT ON MAIN** — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip `c2b3d00c…`). DETERMINISTIC at tested scope. Les invariants SHE ci-dessous restent CURRENT. Les invariants « STRUCTURAL PREPARE requires HD » restent **HISTORICAL / disposition-before-PREPARE** (chemin encore disponible) — ils ne bloquent plus l’inspectable PREPARE sous SHE. Prior wording « CURRENT on Delivery / PR DRAFT pending merge / NOT INTEGRATED ON MAIN » is **HISTORICAL**. ≠ REAL/HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.
6|
7|## Invariant catalog — CURRENT IMPLEMENTED
8|
9|| ID | Statement | Enforcing code (examples) | Tests | Epistemic |
10||---|---|---|---|---|
11|| INV-REC-NE-HD | Recommendation ≠ HumanDecision | presentation labels; decision services | recommendation-vs-decision tests | CURRENT IMPLEMENTED |
12|| INV-HD-NE-CONF | HumanDecision ≠ Confirmation | OA decision vs confirmation aggregates | domain tests | CURRENT IMPLEMENTED |
13|| INV-CAP-NE-AUTH | Capability ≠ Authority | EC/authority receipts | execution-contract tests | CURRENT IMPLEMENTED |
14|| INV-PROJ-NE-CYCLE | Project ≠ CycleInstance | cycle create/link | cycle tests | CURRENT IMPLEMENTED |
15|| INV-MEMB-NE-TRUTHC | Memory B ≠ Truth C | sessionPaths vs product DB | continuity actions | CURRENT IMPLEMENTED |
16|| INV-COG-NE-AUTH | Cognition ≠ Authority | intentAnalysis non-authoritative hints | corrProof07/09 | CURRENT IMPLEMENTED |
17|| INV-PROP-NE-HD | Proposal ≠ HumanDecision | proposalStore vs recordDecision | F2 tests | CURRENT IMPLEMENTED |

--- projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md:73-86 ---
73|
74|### SHE invariant catalog (CURRENT ON MAIN — DET at tested scope)
75|
76|| ID | Statement (CURRENT SHE) | Proof owner |
77||---|---|---|
78|| INV-SHE-PREPARE-NO-AUTHORITY | PREPARE ne consomme aucune autorité ; ne crée ni Attempt ni Authorization | `p6.she.singleHumanExecute*` |
79|| INV-SHE-STRUCTURAL-INSPECTABLE | STRUCTURAL / UNKNOWN n’interdit pas PREPARE ni inspection d’un contrat honnêtement stampé | SHE + continuity GAP-01 |
80|| INV-SHE-AUTHORITY-BEFORE-LAUNCH | Autorité structurelle / effective vérifiée **avant** tout lancement Cursor (pas avant PREPARE) | SHE Execute path |
81|| INV-SHE-EXECUTE-BINDS-INSPECTED | Le clic Exécuter est lié au contrat inspecté (id + version + semantic fingerprint) | SHE + GAP-04 |
82|| INV-SHE-NO-SILENT-HD | Aucune HumanDecision silencieuse ; HD uniquement sur action Pilote explicite (sujet/version/digest) | SHE Record |
83|| INV-SHE-NO-EXEC-WITHOUT-EFFECTIVE-AUTH | Aucune exécution sans autorité effective ; 0 Attempt si gate pré-lancement échoue | SHE |
84|| INV-SHE-NO-AUTO-ELEVATION | Aucune élévation automatique de capacité / permission / chemin protégé | SHE |
85|| INV-SHE-UNKNOWN-BLOCKS-NONADMISSIBLE | UNKNOWN / matérialité non admissible interdit l’exécution (fail-closed) | SHE UNKNOWN gate |
86|| INV-SHE-STALE-CONTRACT-BLOCKS | Exécution refusée sur contrat obsolète (version/fp/currentness) | SHE currentness |

--- projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md:95-108 ---
95|
96|**Epistemic requalification (AKG-M3 G6 — 2026-10-21):**
97|
98|| Class | Fact |
99||---|---|
100|| **HISTORICAL AT MACRO TIME** | AS_IMPLEMENTED_IN_CANDIDATE on integration worktree `integration/sfia-studio-p6-generic-execution-consolidation` @ base `896ff59c` · Product dirty from `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` · then **PENDING_GIT_INTEGRATION** / **NOT INTEGRATED_ON_MAIN** |
101|| **CURRENT ON MAIN** | Consolidation lineage absorbed via merges including **PR #587** (`e03c7b9f`) and successor Tool-First/SHE Delivery merges (**PR #588**, **PR #590**) — ancestors of main tip `c2b3d00c…`. Product behaviour for Generic PREPARE / optional Artifact / Tool-First / SHE is **CURRENT ON MAIN** at deterministic tested scopes documented in vols 03/07. |
102|| **OPEN / PARTIAL / NOT PROVEN** | Cursor REAL / OpenAI LIVE / HQA · P6 GLOBAL PASS · READY FOR REAL · runtime v3 ADOPTED · `TOOL-FIRST-REAL-NOWRITE` |
103|| **G6 LOCAL CANDIDATE** | This volume’s semantic sync (AKG-M3 G6 authoring) — digests **not** refreshed this cycle |
104|| **FUTURE VALIDATION REQUIRED** | ChatGPT Critical Semantic Review → Morris Digest Sync GO → global conformance PASS → project Git integration gates |
105|
106|| Item | Status |
107||---|---|
108|| G-IB (importBoundaries allowlist +4 W2 type-only RuntimeOaStack) | **CLOSED** (historical gate) |

--- projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md:182-195 ---
182|
183|**Epistemic requalification (AKG-M3 G6):** Prior title « local candidate — PENDING_GIT_INTEGRATION » is **HISTORICAL**. Product R1/R2 integrated via **PR #588** merge `304e30e8` → **CURRENT ON MAIN** at deterministic tested scope (see README R-S02 / vols 03/05/07).
184|
185|| Item | Status |
186||---|---|
187|| Pathless analysis PREPARE without invented file path | **CURRENT ON MAIN** — positive non-mutating claim required (R1) |
188|| Systematic HD / mandatory CycleInstance / mandatory Artifact for ordinary pathless | **NOT REQUIRED** when NON_STRUCTURAL gates admit |
189|| Positive claim forms (R1) | `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` — either form may qualify **iff** complementary Product gates pass |
190|| `repositoryMutation` absent **with** admissible `read_only` | **NOT** an automatic refuse of the positive-claim step — `read_only` alone can satisfy that step |
191|| `repositoryMutation` absent **without** `read_only` | **FORBIDDEN** as pathless NON_STRUCTURAL — fail-closed (`repository_mutation_claim_absent` / Materiality UNKNOWN) |
192|| `repositoryMutation` unknown / write → pathless NON_STRUCTURAL | **FORBIDDEN** — fail-closed |
193|| Nora `repositoryMutation` / `read_only` alone as Product authority | **INSUFFICIENT** — live context, envelope, contradiction checks still apply |
194|| Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED** — HD / refuse paths KEEP |
195|| Inspect ≠ Execute; server Confirm/Authorize/Execute distinct | **PRESERVED** — Exécuter may fold Confirm after attest only |

--- projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md:303-316 ---
303|
304|## AKG-M3 G6 — PRR Semantic Sync authoring (LOCAL CANDIDATE)
305|
306|**Authority:** Morris GO G6 PRR Semantic Sync Authoring (2026-10-21). Digests / project commit / PR **NOT** authorized this cycle.
307|
308|| ID | Status | Note |
309||---|---|---|
310|| **R-M3A-01** | **OPEN** — technical index candidate applied locally (OBJ-ATTEMPT + DEP-EC-ATT retarget); **not FORMALLY CLOSED** pending Critical Semantic Review + Digest Sync + conformance | Formal owner NOT ASSIGNED |
311|| **R-M3B-01** | **OPEN** — G6 scope completeness (vols 02/03/04/05/07/09 + manifest covered in authoring; README/01/06/08 READ-ONLY) | Formal owner NOT ASSIGNED |
312|| R-M2A-04 | OPEN/GOVERNED | preserved |
313|| R-M2B-03 | PASS WITH GOVERNED RESERVE | preserved |
314|| B-M2B-01…05 | OPEN | B-M2B-03 routing ambiguity **not** behaviourally closed by documentary table |
315|| RS-03 | OPEN | preserved |
316|| TOOL-FIRST-REAL-NOWRITE | OPEN | preserved |

```

### 22.B Full unified diff (exact)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index b7342699..ac248750 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -95,7 +95,7 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 ## OBJ-GENERIC-MISSION-HD — Generic Mission HumanDecision (M-HD-01/02 + SHE)

-- **Status:** CURRENT on Delivery (D-P6-SHE-01) — not INTEGRATED_ON_MAIN until Product PR merge.
+- **Status:** **CURRENT ON MAIN** (D-P6-SHE-01 / Single Human Execute Option A) — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip). DETERMINISTIC at tested scope. ≠ REAL / HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.
 - **Purpose (SHE CURRENT):** Structural / HD-required Generic missions may PREPARE an inspectable draft without prior HD; durable OA HumanDecision (`authorize-inspected-execute`) is recorded on Pilot Exécuter, bound to the inspected EC (OA-projected effects — GAP-04). HD is **not** deleted; timing moves from PREPARE to Execute.
 - **Purpose (HISTORICAL disposition-before-PREPARE):** bind a durable OA HumanDecision to a sealed mission presentation before disposition-path PREPARE may resume (`verifyGenericMissionHumanDecisionForPrepare`).
 - **Durable truth:** `oa_human_decisions` with `decisionBasis.genericMissionContext`, `missionSubjectId`, `presentationDigest`.
@@ -124,7 +124,7 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
 - **Persistence:** `oa_execution_contracts`.
 - **Paths:** `lib/oa/execution-contract/**`
 - **Gate:** no EC before required Proposal HD (product path).
-- **Tool-First pathless stamp (local candidate — PENDING_GIT_INTEGRATION):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`).
+- **Tool-First pathless stamp (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`). DETERMINISTIC at tested scope · REAL no-write enforcement OPEN (`TOOL-FIRST-REAL-NOWRITE`).

 ## OBJ-INSPECTION — InspectionAttestation

@@ -144,9 +144,12 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 ## OBJ-ATTEMPT — ExecutionAttempt

-- **Purpose:** Bounded attempt against an EC; terminal statuses recorded.
-- **Persistence:** `oa_execution_attempts`, active pointer, result budget tables.
-- **Invariant:** Attempt terminal ≠ Product Result PROVEN.
+- **Purpose:** Bounded attempt against an AUTHORIZED ExecutionContract; Select→Start→Result lifecycle with closed terminal statuses (`accepted` / `running` / `result_pending` / `succeeded` / `failed` / `timeout` / `cancelled`). Distinct from ExecutionContract (PREPARE/inspect/authority) — Attempt is the execution unit.
+- **Persistence:** `oa_execution_attempts`, `oa_execution_attempt_active`, `oa_execution_attempt_result_budget`.
+- **Paths:** `lib/oa/execution-attempt/**` (domain types; `selectExecutionAgent` / `startExecution`); SQLite tables in `lib/oa/project/infrastructure/sqlite/db.ts`; Product R2 gate `features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts`.
+- **Manifest index (AKG-M3 G6):** curated `components[]` includes **OBJ-ATTEMPT**; dependency **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (conformance endpoints ∈ components).
+- **Invariant:** Attempt terminal ≠ Product Result PROVEN (`INV-ATTEMPT-NE-PROVEN`); no execution before authority (`INV-NO-EXEC-BEFORE-AUTH`). PREPARE ≠ AUTHORIZE ≠ EXECUTE · Inspect ≠ Execute.
+- **Proof ceiling:** DETERMINISTIC at tested scope (lifecycle + Tool-First R2 Fake/DET) · REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED.

 ## OBJ-ARTIFACT — Artifact obligation / materialization

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 46433f6b..3dcefc30 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -29,8 +29,8 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 ## F04 — Nora conversation during active cycle
 - **Trigger:** Pilot message via product conversation
 - **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
-- **Nora Generic PREPARE solicitation (D-ER-16 / Option 2 — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** `orchestrateTurn` may expose Agents tool `request_generic_execution_prepare` wired to Product `solicitGenericExecutionPrepare`. Cognition may **solicit** PREPARE only. Tool params never create HumanDecision, never create ExecutionAttempt, never authorize or execute. Authority remains OA/W2 Product admission (F08). DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE via `p6.der16.genericNoraToolInvocation.d0.test.ts` (Fake).
-- **Tool-First mission fields (local candidate — PENDING_GIT_INTEGRATION):** tool / orchestration may forward structured `repositoryMutation` (`none`/`read`/`write`/`unknown`) into Product mission admission. Nora proposal alone is **not** sufficient authority for NON_STRUCTURAL pathless qualification (see F08 R1). Paths: `productExecutionAgentsTools.ts`, `orchestrateTurn.ts`.
+- **Nora Generic PREPARE solicitation (D-ER-16 / Option 2 — CURRENT ON MAIN at tested scope):** `orchestrateTurn` may expose Agents tool `request_generic_execution_prepare` wired to Product `solicitGenericExecutionPrepare`. Cognition may **solicit** PREPARE only. Tool params never create HumanDecision, never create ExecutionAttempt, never authorize or execute. Authority remains OA/W2 Product admission (F08). DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE via `p6.der16.genericNoraToolInvocation.d0.test.ts` (Fake). ≠ REAL / OpenAI LIVE.
+- **Tool-First mission fields (CURRENT ON MAIN — PR #588 merge `304e30e8`):** tool / orchestration may forward structured `repositoryMutation` (`none`/`read`/`write`/`unknown`) into Product mission admission. Nora proposal alone is **not** sufficient authority for NON_STRUCTURAL pathless qualification (see F08 R1). Paths: `productExecutionAgentsTools.ts`, `orchestrateTurn.ts`.
 - **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
 - **Nora autonomy (PR #577 INTEGRATED ON MAIN — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality. Merge `d8ceb8ad`.
 - **Documentary cognitive reliability / RCD-01 (PR #578 INTEGRATED ON MAIN — DETERMINISTIC):** Guided Document Review acquisition uses the native tool path `git_local_read_file` → `GitLocalReadAdapter` → `ToolRouter` (`prepareGitLocalReadDataForModel`) → Agents Runner tool result. Coverage metadata (`returnedStartLine`/`returnedEndLine`/`completeLineCount`/`nextStartLineHint`/`truncated` vs `documentHasMore`) must describe the **final model-visible** payload after redaction and JSON envelope capping (`CT_MAX_TOOL_RESULT_CHARS` = 12000). Partial lines are never credited; redacted lines still progress; a line that fits the adapter but not the final envelope is skipped via explicit `lineExceedsCap` (no infinite same-line retry; no mid-line offset protocol). On soft `maxTurns` exhaustion, restitution discloses honest incomplete coverage from tool crumbs when available (no invented FULL / HumanDecision / Deliverable). Natural mono-file documentary prompts elevate Focused adaptive budget (≥8, ≤ ceiling 10) without raising FinOps ceilings. Proof: `p6.nora.min09.documentaryReliability.d0.test.ts` R1–R7 — **not** GDR REAL quality. Merge `44006648` / source `9b855d8d`.
@@ -57,6 +57,21 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro); adjacent Generic PREPARE routing **DETERMINISTIC at tested scope** (PR #586 + candidate consolidation)
 - **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle (Artifact path); satisfied artifact; other exclusive BLOCKED reasons

+### Routing table — NEW_CYCLE / ACGC / F08 / Tool-First / SHE (documentary · AKG-M3 G6)
+
+Descriptive Product routing map for the same conversational front door. **Does not** close **B-M2B-03** (same utterance → mode ambiguity remains OPEN). Not a parallel execution engine.
+
+| Branch | Entry signal | Gate / refuse | Product responsibility | Authority | Exit | Proof / ceiling |
+|---|---|---|---|---|---|---|
+| **NEW_CYCLE_FORMALIZATION** | Explicit new-cycle language (`hasExplicitNewCycleFormalizationSignal`) even if a future deliverable is mentioned | Not Artifact continuation; avoid `no_active_cycle` fail-closed before `createCycle` | Formalization / `createCycle` path | Pilot/Product cycle authority | New CycleInstance path | F05 CI-HQA-F01 DET · ≠ REAL |
+| **ACTIVE_CYCLE_GOVERNED_CONTINUATION (ACGC)** | Active cycle + Artifact obligation (REQUIRE_ARTIFACT HD **OR** APPLICABLE∧¬SATISFIED) | Refuse invent HD; UNKNOWN≠APPLICABLE | `activeCycleGovernedContinuation` / materialization | Artifact gates ≠ exec authority | Proposal / materialization continuation | F05 DET · B-M2B-03 OPEN |
+| **ACTIVE_CYCLE_CONTINUATION_BLOCKED** | e.g. `no_require_artifact` | Blocked reason only | Clarification / refusal messaging | No invented REQUIRE_ARTIFACT | May set `eligibleForGenericPrepareRouting` when optional documentary | F05 GD4-01 DET |
+| **Adjacent → F08 Generic PREPARE** | Optional documentary without closure Artifact + conversation admission + actionable/`execution_request` + prepareGo/readiness | PREPARE≠AUTHORIZE; Nora solicit≠authority | `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft` | OA/W2 Product admission (F08) | Inspectable EC draft / pending offer | F08 + D-ER-16 Fake DET |
+| **Tool-First pathless NON_STRUCTURAL** | Positive non-mutating claim (R1: `read_only` **OR** `repositoryMutationDeclared ∈ {none,read}`) | Absent positive claim / write/unknown/contradiction → refuse | Materiality→PREPARE qualification | Product admission ≠ Cursor sandbox | Pathless EC stamp possible | Tool-First R1 DET · REAL OPEN |
+| **SHE structural / Exécuter** | STRUCTURAL / HD-required / UNKNOWN after inspectable PREPARE | INV-NO-EXEC-BEFORE-AUTH; STOP · 0 Attempt if pre-launch fails | Inspect → HD/Confirm/Authorize → Attempt | HumanDecision / receipts on Exécuter | AUTHORIZED EC → F10 Select/Start | SHE DET (PR #590) · REAL OPEN |
+| **Nora Generic PREPARE solicitation** | Agents tool `request_generic_execution_prepare` | Never creates HD/Attempt/execute | Cognition solicits only | Remains F08 Product | Solicitation only | D-ER-16 Fake |
+| **Ambiguity / clarification / STOP** | Utterance without qualifying signal | Do not invent mode | Ask clarification | No silent PREPARE | Clarification / refuse | B-M2B-03 scenarios OPEN |
+
 ## F06 — Proposal / Decision Subject / options
 - **Trigger:** F2 turn producing `f2_proposal`
 - **Persistence:** process-local proposal store; durable pending marker + `PresentedOptionSet` Observation in Epistemic
@@ -79,7 +94,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F08 — EC PREPARE
 - **Trigger (legacy M3):** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
-- **Trigger (Generic PREPARE — D-P6-SHE-01 CURRENT on Delivery branch):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
+- **Trigger (Generic PREPARE — D-P6-SHE-01 CURRENT ON MAIN — PR #590 lineage):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
 - **Mission qualification:** Product readiness (`assessGenericMissionPrepareReadiness`) + authoritative Materiality CURRENT (`resolveAuthoritativeProductMateriality`). Materiality UNKNOWN may yield an **inspectable** PREPARE stamp; UNKNOWN still **blocks Execute** (fail-closed — no silent NON_STRUCTURAL elevation).
 - **Chemin SHE (CURRENT — D-P6-SHE-01 Option A):** STRUCTURAL / HD-required / UNKNOWN may PREPARE an **inspectable** draft **without** a prior HumanDecision (`decisionRefs` may be empty; Product may stamp `sheDeferredStructuralAuthority`). PREPARE ≠ AUTHORIZE ≠ EXECUTE. Authority is consumed on Pilot **Exécuter** (`singleHumanExecutePreparedContract`): inspect binding (id/version/fingerprint) → record applicable HD (`authorize-inspected-execute`) from OA EC effects (GAP-04) → Confirm/Authorize OA internals → ExecutionAttempt. No silent HD; no Attempt if pre-launch gates fail.
 - **Chemin A — STRUCTURAL disposition-before-PREPARE (HISTORICAL / still available):** structural signals or HD-required materiality → remember CURRENT offer for Pilot seal (process-local) → Pilot disposition on sealed presentation. **Three distinct branches:**
@@ -88,14 +103,14 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
   - **Amend** → new presentation / re-seal required → prior presentation does **not** unlock this disposition PREPARE (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new **accepted** applicable HD exists.
   - Structural offer alone ≠ Authorization. Historical HD without mission binding ≠ unlock. Under SHE, lack of Accept does **not** forbid inspectable PREPARE — authority moves to Exécuter.
 - **Chemin B — NON_STRUCTURAL (Option 1 / G-D4 + Tool-First R1):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
-  - **Pathless bounded non-mutating analysis (local candidate — PENDING_GIT_INTEGRATION):** when concrete WHERE is empty, Product may qualify NON_STRUCTURAL **only** with a **positive** structured non-mutating claim — `executionIntent.intentKind === "read_only"` **or** `repositoryMutationDeclared ∈ {none, read}` — **plus** live Product context, generalist envelope, and no structural/write/docs_write/materialization/elevated contradiction (`qualifyBoundedNonMutatingAnalysisMission`). Positive declaration ≠ Product authority by itself. **Not a positive claim:** `repositoryMutation` absent **when** `read_only` is also absent; `unknown`; `write`. An admissible `read_only` claim is **not** invalidated by the mere absence of `repositoryMutation`. **No invented documentary/Git path.** CycleInstance and Artifact remain optional when gates allow. No systematic HumanDecision on this path.
+  - **Pathless bounded non-mutating analysis (CURRENT ON MAIN — Tool-First R1 / PR #588):** when concrete WHERE is empty, Product may qualify NON_STRUCTURAL **only** with a **positive** structured non-mutating claim — `executionIntent.intentKind === "read_only"` **or** `repositoryMutationDeclared ∈ {none, read}` — **plus** live Product context, generalist envelope, and no structural/write/docs_write/materialization/elevated contradiction (`qualifyBoundedNonMutatingAnalysisMission`). Positive declaration ≠ Product authority by itself. **Not a positive claim:** `repositoryMutation` absent **when** `read_only` is also absent; `unknown`; `write`. An admissible `read_only` claim is **not** invalidated by the mere absence of `repositoryMutation`. **No invented documentary/Git path.** CycleInstance and Artifact remain optional when gates allow. No systematic HumanDecision on this path.
   - Contract may stamp `boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` — stamp ≠ REAL no-write enforcement (see F10 R2).
 - **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
 - **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
 - **Paths:** `prepareGenericExecutionContractDraft.ts`, `singleHumanExecutePreparedContract.ts`, `resolveAuthoritativeProductMateriality.ts`, `recordGenericMissionHumanDecision.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `prepareAndResolveM3ProductPath` (legacy), `lib/oa/execution-contract/**`
 - **Invariant:** cannot expand DecisionBasis / sealed WHAT; PREPARE ≠ AUTHORIZE ≠ EXECUTE; no ExecutionAttempt on PREPARE
 - **Proof:** SHE (`p6.she.singleHumanExecute*`, GAP continuity/HD/finalization) + G-D4 / materiality / M-HD / DER16 / Option1 / Tool-First — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
-- **Status:** COMPLETE domain (legacy M3); Generic PREPARE + SHE Option A CURRENT on Delivery (PR pending merge); Tool-First R1 CURRENT at tested scope
+- **Status:** COMPLETE domain (legacy M3); Generic PREPARE + SHE Option A **CURRENT ON MAIN** (PR #590 `c9abdbc3`); Tool-First R1 **CURRENT ON MAIN** at tested scope (PR #588). DETERMINISTIC proof · ≠ REAL · ≠ P6 GLOBAL PASS

 ## F09 — EC inspect / Confirmation / authority
 - **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
@@ -104,12 +119,12 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **SHE / Tool-First Pilot CTA (CURRENT — D-P6-SHE-01):** after inspection attestation is sufficient/aligned, Pilot surface shows **Exécuter** for the inspected contract — the single Pilot gesture records applicable HD when required, folds server Confirm (when required), then Authorize+Select/Start. **Inspect ≠ Execute** preserved (no auto-attest; no silent HD/Confirm). Server steps HD / Confirm / Authorize / Execute remain distinct OA transitions. Paths: `singleHumanExecutePreparedContract.ts`, `pilotExecutionPresentation.ts`, `ExecutionSurface.tsx`.
 - **Product path (legacy M3):** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
 - **Proof:** SHE + Pass03/Pass04 UIC + durable/reconcile continuity + pilotExecutionPresentation / R02 — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
-- **Status:** COMPLETE tables/services; unified exam + SHE/Tool-First CTA CURRENT on Delivery (PR pending merge)
+- **Status:** COMPLETE tables/services; unified exam + SHE/Tool-First CTA **CURRENT ON MAIN** (PR #590 / #588 lineages) at tested scope · ≠ REAL

 ## F10 — Governed execution (docs_write / Cursor)
 - **Gate:** effective Authorization on EC + attempt lifecycle; REAL additionally requires `SFIA_STUDIO_CURSOR_REAL` + managed repo base + Product REAL readiness fail-closed
-- **Project-scoped Cursor Select/Start (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse.
-- **R2 — pathless non-mutating vs Cursor REAL (local candidate — PENDING_GIT_INTEGRATION):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
+- **Project-scoped Cursor Select/Start (CURRENT ON MAIN at tested scope):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse. DETERMINISTIC Fake/DET · ≠ REAL BOUNDARY PROVEN.
+- **R2 — pathless non-mutating vs Cursor REAL (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
   - **Select (`governedExecuteSelectAgent`):** refuse **before** creating a new Attempt — no accepted Attempt from that Select; no REAL process.
   - **Start (`governedExecuteStart`):** if an Attempt is already `accepted` (e.g. Fake Select earlier), re-evaluate and refuse Start — Attempt stays `accepted` (not `running`); launch-port calls unchanged; no REAL process.
   Fake/DET (`CURSOR_REAL≠1`) remains admissible. Ordinary write / concrete-path contracts are **not** blocked by this gate. **ZERO Cursor REAL** claimed by this candidate.
@@ -125,6 +140,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F11b — Product Continuity / Shared Knowledge (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01)

+- **INDEX POLICY (AKG-M3 G6 — D2):** F11b is a **narrative sub-flow** of Product Continuity / execution reconcile spanning journeys already indexed as **F10–F14**. Curated `manifest.flows[]` retains **F01–F20** only; **F11b is not indexed separately**. Absence from `flows[]` **≠** absence of Product behaviour. DET proofs remain historical coverage at tested scope. ZERO REAL · runtime v3 NON ADOPTED unchanged.
 - **Shared Product Resolution (READ-ONLY):** `resolveProductExecutionContext` composes Project-bound EC / Attempt / Cursor CLAIM / Artifact / Evidence / RB / CE / post-Evidence Recommendation without a new store or knowledge domain. Evidence/RB/CE resolved via current Contract Result CE + `contractResultBindings.evidenceRefs`, then validated by canonical `contractResultBindingsMatchCurrentFacts` against Attempt-bound snapshot (Project / Cycle / EC id / version / semantic fingerprint / Attempt / RB id+frozenVersion / ordered Evidence refs). Never ID-prefix or repository-order preference; ambiguous multi-Evidence without CE → `EVIDENCE_LINEAGE_AMBIGUOUS`.
 - **Execution Continuity Projection:** `deriveGovernedExecutionContinuityProjection` derives reachable stages only: PRE_EXECUTION | ATTEMPT_ACCEPTED | RUNNING | PRODUCT_MATERIALIZATION_PENDING | POST_EVIDENCE_PENDING | POST_EVIDENCE_COMPLETE | RECOVERY_REQUIRED. Closed lineage integrity codes (e.g. `CONTRACT_RESULT_BINDINGS_MISMATCH`, `CLAIM_EVALUATION_AMBIGUOUS`, `EVIDENCE_LINEAGE_AMBIGUOUS`) project to `RECOVERY_REQUIRED`; query errors such as `ATTEMPT_NOT_FOUND` remain resolve errors.
 - **Server Reconciler:** `reconcileGovernedExecution` (intent observe|execute|continue) owns deterministic next steps; stops immediately on `recoveryRequired` without rematerialize / new Attempt / new CE. TrajectorySurface is command+projection only (no Select→Start→Complete→Materialize ownership). Restart after ACCEPTED and during RUNNING reuses the same Attempt (deterministic tested scope).
@@ -153,7 +169,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Undisposed Recommendations (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** finalization fails closed while an **active** Recommendation published on a presented governed subject (`source` = `optset:…`) is not closed by an active `DecisionRef`. Blocker code `undisposed_recommendations`, reported through the existing `blockers` obligation family — no second engine, no new obligation family. `resolved` / `rejected` / `superseded` Recommendations never block. An unreadable Epistemic source reports `recommendation_source_unreadable` and stays blocking.
 - **Explicitly NOT an authority:** Cycle Journal open points are not Truth C and do not gate finalization; only existing Reservation mechanisms do.
 - **Proof at tested scope:** `p6.she.gap03.effectiveGitPrimaryContract.d0.test.ts`, `undisposedRecommendations.d0.test.ts`, `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case K
-- **Status:** COMPLETE assessment engine; Pilot finalize HD required; GAP-03 effective EC CURRENT on Delivery
+- **Status:** COMPLETE assessment engine; Pilot finalize HD required; GAP-03 effective EC **CURRENT ON MAIN** at tested scope (SHE/Generic Execution lineage) · ≠ REAL

 ## F16 — Replan
 - **Invariant:** No silent replan
@@ -167,12 +183,13 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Status:** DETERMINISTIC proven at tested scope (both front-door oracles); Proposal store remains process-local

 ## F18 — Restart after HD / before execution
-- **Survives:** HD, LPS, cycle; EC if prepared
-- **Status:** PARTIAL proven by domain tests
+- **Survives (durable):** HD / DecisionBasis, LPS, cycle; EC if prepared
+- **Process-local:** pending Generic PREPARE offer / presentation carrier — **lost** at restart (offer loss ≠ universal PREPARE ban when verified HD + gates allow — HD11)
+- **Status:** **PARTIAL** proven by domain tests (DET). Automatic UI offer rehydration **NOT PROVEN**. REAL **NOT PROVEN**. Do **not** promote to COMPLETE without new proof.

 ## F19 — Restart post-Evidence
-- **Survives:** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
-- **Status:** PARTIAL — front-door rehydrate assertions at tested scope
+- **Survives (durable):** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
+- **Status:** **PARTIAL** — front-door rehydrate assertions at tested scope (DET). Cross-restart RunState DEFER. REAL SprintBoard re-proof requires distinct Morris GO. Do **not** promote to COMPLETE without new proof.

 ## F20 — Legacy / historical compatibility
 - **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
@@ -183,7 +200,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## Generic Execution → Review → Result (CURRENT — Correction Pass 02 candidate)

-Nominal Product path (architecture D-ER; delivery candidate, LOCAL CANDIDATE / NOT INTEGRATED ON MAIN):
+Nominal Product path (architecture D-ER; **CURRENT ON MAIN** at deterministic tested scope — prior “LOCAL CANDIDATE / NOT INTEGRATED ON MAIN” wording is **HISTORICAL** relative to Generic Execution / Tool-First / SHE merges on main; ≠ REAL · ≠ P6 GLOBAL PASS):

 HumanDecision (durable DecisionBasis + local-write seal) → Generic EC `studio.cursor.generalist.execute` (authorized `EFFECT_CLASS:local-write` / filesystem.create|modify — **≠** Product write taxonomy) → Cursor Generalist → isolated Git worktree → CursorExecutionReport [CLAIM] + native Cursor Review End Of [CLAIM executor-only; missing ⇒ PARTIAL / no Studio synthesis] → Studio `NodeLocalGitStatusDiffPort` / `observeVerifiedChangeSet` [FACTS] (Git delta only; OBSERVED vs UNAVAILABLE — never invent empty FACTS; never full-repo scan in Git mode) → Generic Execution Review Material → Verification Evidence `ev:execution-review:*` + Mission Evidence → same ReviewBundle / ClaimEvaluation / ContractResult (mismatch ⇒ ≠ PASS) → Product Resolution (`executionReview`) → scheduled UI continue (no abandonment counter) + remount auto-resume → Nora Deep Review (shared Agents core; actual `execution_review_*` tool calls) → Result Surface (real fields + Pilot `w2ReadExecutionReviewItemAction` by itemId).

diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index bfa68d82..0ba6ab35 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -38,7 +38,7 @@ LifecycleSurface / lifecyclePresentation
   → does not alone authorize materialization
 ```

-## Dual Generic PREPARE admission paths (D-P6-SHE-01 CURRENT on Delivery)
+## Dual Generic PREPARE admission paths (D-P6-SHE-01 CURRENT ON MAIN — PR #590)

 ```
 Nora tool (F04) / F2 analysis / F05 adjacent hand-off
@@ -88,25 +88,27 @@ OA = authority of record. W2 = Product coordination. Nora = cognition/recommenda

 **HISTORICAL S1 (pre-SHE):** only an accepted, mission-bound, applicable, verified, non-superseded HD opened Chemin A PREPARE. Retained for disposition-before-PREPARE callers and legacy M3.

-**Tool-First R1/R2 (CURRENT at tested scope):** R1 gates pathless NON_STRUCTURAL at Materiality→PREPARE (positive claim + Product checks). R2 is a Product dependency of F10 Select/Start on the Cursor REAL boundary — stamp ≠ technical no-write; Fake/DET path unchanged. Not a new OA object; not a parallel engine.
+**Tool-First R1/R2 (CURRENT ON MAIN — PR #588 merge `304e30e8`, DET at tested scope):** R1 gates pathless NON_STRUCTURAL at Materiality→PREPARE (positive claim + Product checks). R2 is a Product dependency of F10 Select/Start on the Cursor REAL boundary — stamp ≠ technical no-write; Fake/DET path unchanged. Not a new OA object; not a parallel engine. **OPEN:** `TOOL-FIRST-REAL-NOWRITE` (Product gate ≠ technical Cursor REAL no-write sandbox).

 ## DEP edges (stable IDs)

-| ID | From | To | Why |
-|---|---|---|---|
-| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace |
-| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate |
-| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification |
-| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision |
-| DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority |
-| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays accepted) when REAL+pathless non-mutating |
-| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence |
-| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn |
-| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-INTENT | deterministic structured analysis |
-| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity |
-| DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt |
-| DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural PREPARE |
-| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate |
+**Index note (AKG-M3 G6):** Curated `manifest.dependencies[]` holds **9** edges with both endpoints ∈ `manifest.components[]` (13 after OBJ-ATTEMPT). **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (aligned with this table; prior self-edge was a conformance-preserving stub — see R-M3A-01). Rows below that are **not** in the curated nine (e.g. DEP-ATT-EV, DEP-NORA-GENPREP, DEP-GMHD-EC, DEP-MAT-GENPREP, and DEP-FAKE-INTENT’s `OBJ-INTENT` endpoint) remain **descriptive** narrative dependencies — **not** auto-promoted into the manifest.
+
+| ID | From | To | Why | Manifest curated? |
+|---|---|---|---|---|
+| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace | YES |
+| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate | YES |
+| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification | YES |
+| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision | YES |
+| DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority | YES |
+| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays accepted) when REAL+pathless non-mutating | YES |
+| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence | NO (narrative) |
+| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn | YES |
+| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-TURN-ORCH (curated) | deterministic structured analysis into turn orch; historical narrative sometimes named `OBJ-INTENT` (not a curated component) | YES |
+| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity | YES |
+| DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt | NO (narrative) |
+| DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural PREPARE | NO (narrative) |
+| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate | NO (narrative) |

 ## Sample impact analysis A — `activeCycleGovernedContinuation.ts`

diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index af05ac4f..8513b780 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -38,7 +38,7 @@
 - **FakeConversationProvider** (`lib/platform/ai/fakeProvider.ts`): deterministic structured intent including path-less active-cycle materialization matcher; may synthesize `note-de-cadrage.md` leaf in some framings.
 - **OpenAI live:** same schemas; non-deterministic linguistics; may omit filename/`continuationKind`.
 - **Cursor REAL:** gated; mutual exclusion with deterministic Cursor E2E boundary asserted in runtime helpers.
-- **Tool-First R2 (local candidate — PENDING_GIT_INTEGRATION):** `SFIA_STUDIO_CURSOR_REAL=1` arms REAL generalist. Pathless non-mutating ECs hit Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` because REAL generalist has **no** technical no-write sandbox: **Select** refuses before new Attempt; **Start** refuses launch while an existing Attempt stays `accepted`. Env flag alone does not prove REAL BOUNDARY. Fake/DET (`CURSOR_REAL≠1`) remains the deterministic path for those missions.
+- **Tool-First R2 (CURRENT ON MAIN — PR #588 merge `304e30e8`):** `SFIA_STUDIO_CURSOR_REAL=1` arms REAL generalist. Pathless non-mutating ECs hit Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` because REAL generalist has **no** technical no-write sandbox: **Select** refuses before new Attempt; **Start** refuses launch while an existing Attempt stays `accepted`. Product gate ≠ technical sandbox. Env flag alone does not prove REAL BOUNDARY. **OPEN:** `TOOL-FIRST-REAL-NOWRITE`. Fake/DET (`CURSOR_REAL≠1`) remains the deterministic proof path for those missions at tested scope.

 ## Server vs client

diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 659effc5..aef82ade 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -2,7 +2,7 @@

 **As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`** (baseline documentaire historique)

-**Amendement documentaire D-P6-SHE-01 (2026-10-19 — Git Integration) :** SINGLE HUMAN EXECUTE / Option A est **CURRENT on Delivery** (déterministe prouvé au périmètre testé ; PR DRAFT pending merge). Les invariants SHE ci-dessous deviennent CURRENT. Les invariants « STRUCTURAL PREPARE requires HD » restent **HISTORICAL / disposition-before-PREPARE** (chemin encore disponible) — ils ne bloquent plus l’inspectable PREPARE sous SHE. TARGET architecture = Delivery runtime ; ≠ INTEGRATED_ON_MAIN tant que merge Morris non accordé ; ≠ REAL/HQA PROVEN.
+**Amendement documentaire D-P6-SHE-01 (requalifié AKG-M3 G6 — 2026-10-21) :** SINGLE HUMAN EXECUTE / Option A est **CURRENT ON MAIN** — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip `c2b3d00c…`). DETERMINISTIC at tested scope. Les invariants SHE ci-dessous restent CURRENT. Les invariants « STRUCTURAL PREPARE requires HD » restent **HISTORICAL / disposition-before-PREPARE** (chemin encore disponible) — ils ne bloquent plus l’inspectable PREPARE sous SHE. Prior wording « CURRENT on Delivery / PR DRAFT pending merge / NOT INTEGRATED ON MAIN » is **HISTORICAL**. ≠ REAL/HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.

 ## Invariant catalog — CURRENT IMPLEMENTED

@@ -71,7 +71,7 @@ Fake/DET (`CURSOR_REAL≠1`) remains admissible for both phases. Ordinary write

 Les invariants HISTORICAL `INV-STRUCTURAL-*PREPARE*HD` et la contrainte PREPARE-only de `INV-EMPTY-REFS-NE-STRUCTURAL` restent vraies pour le **chemin disposition-before-PREPARE** et les suites mHd01 / DER16. Sous SHE, leur **timing PREPARE** est superseded (autorité structurelle avant **lancement**).

-### SHE invariant catalog (CURRENT — Delivery)
+### SHE invariant catalog (CURRENT ON MAIN — DET at tested scope)

 | ID | Statement (CURRENT SHE) | Proof owner |
 |---|---|---|
@@ -123,4 +123,4 @@ sinon STOP · 0 Attempt

 Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is **expected**.

-**Note SHE CURRENT :** sous D-P6-SHE-01 Delivery, STRUCTURAL sans HD préalable peut PREPARE inspectable ; les refus d’autorité portent sur **Exécuter** (HD/Confirm/Authorize/currentness). REAL/HQA et merge main restent des gates Morris distincts.
+**Note SHE CURRENT :** sous D-P6-SHE-01 (**CURRENT ON MAIN**), STRUCTURAL sans HD préalable peut PREPARE inspectable ; les refus d’autorité portent sur **Exécuter** (HD/Confirm/Authorize/currentness). REAL/HQA / P6 GLOBAL PASS restent des gates Morris distincts (non acquis).
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index eb600e9c..fb3ea893 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -93,21 +93,28 @@

 ## Overlay — P6 Generic Execution consolidation candidate (LIVING REFERENCE R1–R4)

-**Status:** AS_IMPLEMENTED_IN_CANDIDATE on integration worktree `integration/sfia-studio-p6-generic-execution-consolidation` @ base `896ff59c` · Product dirty transferred from source `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` · **PENDING_GIT_INTEGRATION** · **NOT INTEGRATED_ON_MAIN**.
+**Epistemic requalification (AKG-M3 G6 — 2026-10-21):**
+
+| Class | Fact |
+|---|---|
+| **HISTORICAL AT MACRO TIME** | AS_IMPLEMENTED_IN_CANDIDATE on integration worktree `integration/sfia-studio-p6-generic-execution-consolidation` @ base `896ff59c` · Product dirty from `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` · then **PENDING_GIT_INTEGRATION** / **NOT INTEGRATED_ON_MAIN** |
+| **CURRENT ON MAIN** | Consolidation lineage absorbed via merges including **PR #587** (`e03c7b9f`) and successor Tool-First/SHE Delivery merges (**PR #588**, **PR #590**) — ancestors of main tip `c2b3d00c…`. Product behaviour for Generic PREPARE / optional Artifact / Tool-First / SHE is **CURRENT ON MAIN** at deterministic tested scopes documented in vols 03/07. |
+| **OPEN / PARTIAL / NOT PROVEN** | Cursor REAL / OpenAI LIVE / HQA · P6 GLOBAL PASS · READY FOR REAL · runtime v3 ADOPTED · `TOOL-FIRST-REAL-NOWRITE` |
+| **G6 LOCAL CANDIDATE** | This volume’s semantic sync (AKG-M3 G6 authoring) — digests **not** refreshed this cycle |
+| **FUTURE VALIDATION REQUIRED** | ChatGPT Critical Semantic Review → Morris Digest Sync GO → global conformance PASS → project Git integration gates |

 | Item | Status |
 |---|---|
 | G-IB (importBoundaries allowlist +4 W2 type-only RuntimeOaStack) | **CLOSED** (historical gate) |
-| G-DIGEST Living Reference digests | **PENDING CONTENT APPROVAL** — manifest **FROZEN**; digests **not** promoted this cycle |
-| Living Reference volumes 02/03/04/06/07/08/09 | Semantic amendments R1–R4 applied locally — ChatGPT content review required before digest write |
-| 77 Product candidates + allowlist | Preserved dirty; **no** Product commit/push/PR this cycle |
-| Pending Generic PREPARE offer | Process-local — restart-unsafe (vol 06) |
+| G-DIGEST Living Reference digests | **FUTURE VALIDATION REQUIRED** for G6 candidate — digests intentionally **not** written this authoring cycle (EXPECTED DIGEST DRIFT until Digest Sync GO) |
+| Living Reference volumes (G6 allowlist 02/03/04/05/07/09 + manifest) | Semantic sync authored locally — ChatGPT Critical Semantic Review required before digest write |
+| Pending Generic PREPARE offer | Process-local — restart-unsafe (vol 06) — unchanged |
 | Generic Mission HumanDecision | Durable OA; restart ≠ CURRENT offer; applicability re-check required |
 | Cursor REAL / OpenAI LIVE / HQA | **NOT PROVEN / NOT RETESTED** |
 | P6 GLOBAL PASS / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
-| DETERMINISTIC proof ceiling | Historical 328 targeted PASS + G-IB 5/5 — **not re-executed** this documentary cycle |
+| DETERMINISTIC proof ceiling | Historical targeted DET suites — **not re-executed** this documentary cycle |

-**Next (distinct GOs):** ChatGPT semantic content review → Morris digest approval → conformance → Product git decision → PR/CI/merge → HQA reprise. This overlay does **not** claim CURRENT ON MAIN.
+**Do not** treat the historical PENDING_GIT_INTEGRATION snapshot as CURRENT after main absorption.

 ## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (historical macro — retained)

@@ -171,11 +178,13 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
 | New store/table / parallel engines | NONE |

-## Overlay — Tool-First Generic Execution + R1/R2 (local candidate — PENDING_GIT_INTEGRATION)
+## Overlay — Tool-First Generic Execution + R1/R2
+
+**Epistemic requalification (AKG-M3 G6):** Prior title « local candidate — PENDING_GIT_INTEGRATION » is **HISTORICAL**. Product R1/R2 integrated via **PR #588** merge `304e30e8` → **CURRENT ON MAIN** at deterministic tested scope (see README R-S02 / vols 03/05/07).

 | Item | Status |
 |---|---|
-| Pathless analysis PREPARE without invented file path | AS-IMPLEMENTED_IN_CANDIDATE — positive non-mutating claim required (R1) |
+| Pathless analysis PREPARE without invented file path | **CURRENT ON MAIN** — positive non-mutating claim required (R1) |
 | Systematic HD / mandatory CycleInstance / mandatory Artifact for ordinary pathless | **NOT REQUIRED** when NON_STRUCTURAL gates admit |
 | Positive claim forms (R1) | `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` — either form may qualify **iff** complementary Product gates pass |
 | `repositoryMutation` absent **with** admissible `read_only` | **NOT** an automatic refuse of the positive-claim step — `read_only` alone can satisfy that step |
@@ -185,12 +194,12 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED** — HD / refuse paths KEEP |
 | Inspect ≠ Execute; server Confirm/Authorize/Execute distinct | **PRESERVED** — Exécuter may fold Confirm after attest only |
 | Cursor REAL generalist technical no-write | **ABSENT** — debt open |
-| R2 Select (REAL + pathless non-mutating) | AS-IMPLEMENTED_IN_CANDIDATE — refuse **before new Attempt**; code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` |
-| R2 Start (REAL + pathless non-mutating, Attempt already `accepted`) | AS-IMPLEMENTED_IN_CANDIDATE — refuse Start; Attempt stays `accepted`; zero launch-port calls; same code |
+| R2 Select (REAL + pathless non-mutating) | **CURRENT ON MAIN** — refuse **before new Attempt**; code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` |
+| R2 Start (REAL + pathless non-mutating, Attempt already `accepted`) | **CURRENT ON MAIN** — refuse Start; Attempt stays `accepted`; zero launch-port calls; same code |
 | Fake/DET pathless non-mutating Select/Start | ADMISSIBLE — DETERMINISTIC at tested scope |
-| Integration on main / GitHub CI / HQA / P6 GLOBAL PASS | **NOT CLAIMED** — PENDING_GIT_INTEGRATION |
+| Integration on main (Product R1/R2) | **CURRENT ON MAIN** (PR #588) — ≠ HQA / P6 GLOBAL PASS |
 | REAL BOUNDARY PROVEN / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
-| Debt `TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT` | OPEN — sandbox or Product-bound RO agent requires distinct Morris architecture GO |
+| Debt `TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT` | **OPEN** — Product gate ≠ technical sandbox; requires distinct Morris architecture GO |
 | Exit for debt | Enforceable no-write at REAL generalist (or equivalent) + GO + Bounded REAL proof |

 ## Overlay — P6-HQA-F05-GD4-01 / PR #586 (optional Artifact / Generic PREPARE)
@@ -291,3 +300,24 @@ No `retired-components-ledger.md` — zero components removed.
 - NoteLite REAL re-proof deferred (Morris GO distinct)
 - Nora model/provider tuning deferred
 - `durableLocalWriteSeal` domain API transitional (tests/domain only — not Product front door)
+
+## AKG-M3 G6 — PRR Semantic Sync authoring (LOCAL CANDIDATE)
+
+**Authority:** Morris GO G6 PRR Semantic Sync Authoring (2026-10-21). Digests / project commit / PR **NOT** authorized this cycle.
+
+| ID | Status | Note |
+|---|---|---|
+| **R-M3A-01** | **OPEN** — technical index candidate applied locally (OBJ-ATTEMPT + DEP-EC-ATT retarget); **not FORMALLY CLOSED** pending Critical Semantic Review + Digest Sync + conformance | Formal owner NOT ASSIGNED |
+| **R-M3B-01** | **OPEN** — G6 scope completeness (vols 02/03/04/05/07/09 + manifest covered in authoring; README/01/06/08 READ-ONLY) | Formal owner NOT ASSIGNED |
+| R-M2A-04 | OPEN/GOVERNED | preserved |
+| R-M2B-03 | PASS WITH GOVERNED RESERVE | preserved |
+| B-M2B-01…05 | OPEN | B-M2B-03 routing ambiguity **not** behaviourally closed by documentary table |
+| RS-03 | OPEN | preserved |
+| TOOL-FIRST-REAL-NOWRITE | OPEN | preserved |
+| F18 / F19 | PARTIAL | preserved — no COMPLETE promotion |
+| REAL | NOT PROVEN | preserved |
+| F11b INDEX SCOPE | POLICY RECORDED (subflow; not in flows[]) | ≠ missing Product |
+| DEP-EC-ATT | LOCAL CANDIDATE fidelity fix (EC→Attempt) | awaiting semantic+digest gates |
+| M2 debt register 38×20 | identities/statuses conserved | `df77b8a2…` immuable |
+
+**Anti-claims:** G6 authoring ≠ Semantic Review APPROVED ≠ Digest Sync AUTHORIZED ≠ GLOBAL CONFORMANCE PASS ≠ project Git integrated ≠ AKG-M3 CLOSED ≠ P6/v3/REAL.
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index a25297d5..faf98021 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -316,6 +316,37 @@
       "authoritySensitive": true,
       "persistence": "oa_execution_contracts"
     },
+    {
+      "id": "OBJ-ATTEMPT",
+      "title": "ExecutionAttempt",
+      "docSection": "02-runtime-object-catalog.md",
+      "trackedSourcePaths": [
+        "projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts",
+        "projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts",
+        "projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts",
+        "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts",
+        "projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts"
+      ],
+      "flowIds": [
+        "F10",
+        "F11",
+        "F18"
+      ],
+      "invariantIds": [
+        "INV-ATTEMPT-NE-PROVEN",
+        "INV-NO-EXEC-BEFORE-AUTH"
+      ],
+      "testPaths": [
+        "projects/sfia-studio/app/__tests__/oa/execution-attempt/lifecycleFoundation.test.ts",
+        "projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts"
+      ],
+      "dependsOn": [
+        "OBJ-EC"
+      ],
+      "dependencyIds": [],
+      "authoritySensitive": true,
+      "persistence": "oa_execution_attempts"
+    },
     {
       "id": "OBJ-UI-LIFECYCLE",
       "title": "Lifecycle UI presentation",
@@ -557,7 +588,7 @@
     {
       "id": "DEP-EC-ATT",
       "from": "OBJ-EC",
-      "to": "OBJ-EC"
+      "to": "OBJ-ATTEMPT"
     },
     {
       "id": "DEP-MW5-TURN",

```

---

## 23. Gates Morris restants

1. ChatGPT Critical Semantic Review
2. Optional Correction Pass borné
3. **GO Digest Sync** (distinct) → `--write-digests` + conformance PASS
4. Project Git integration gates (commit/push/PR/merge) — distinct
5. AKG-M3 Formal Exit — distinct
6. AKG-M4 — distinct GO

---

## 24. Verdict

**G6 LOCAL AUTHORING COMPLETE — READY FOR CHATGPT CRITICAL SEMANTIC REVIEW.**

Conformance status distinct: **STRUCTURAL VALIDATION PASS — DIGEST SYNC PENDING.**

Anti-claims: ≠ Semantic Review APPROVED ≠ Digest Sync AUTHORIZED ≠ GLOBAL CONFORMANCE PASS ≠ project integrated ≠ AKG-M3 CLOSED ≠ P6/v3/REAL.

---

## 25. Instruction ChatGPT

Lire Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier: baseline `c2b3d00c` · GO G6 · D1–D4 · manifest 13 + DEP-EC-ATT · F11b policy · CURRENT phrases · routing · F18/F19 PARTIAL · reserves OPEN · structural PASS · digest drift only on allowlist volumes · zero Product/checker/test/vol08 · zero project commit · handoff remote.

Produire **Critical Semantic Review** distincte: conformité GO · corrections · impacts · réserves · verdict · proposition GO digest ou Correction Pass.

Ne pas déduire automatiquement Digest Sync.

---

END — AKG-M3-G6 PRR SEMANTIC SYNC AUTHORING REVIEW PACK FULL
