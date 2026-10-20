# SFIA Studio — AKG-M2 Lot A — Responsibility & Authority Understanding
## Review Pack FULL (ChatGPT Critical)

| Field | Value |
|---|---|
| Timestamp UTC | 2026-10-20T15:13:14Z |
| GO Morris | **GO AKG-M2 — RESPONSIBILITY & AUTHORITY UNDERSTANDING — LOT A — BOUNDED READ-ONLY INVESTIGATION** |
| Cycle | **6 — Architecture technique** |
| Profil | **CRITICAL** |
| Typologie | DOC / ARCHITECTURE / INVESTIGATION / GOVERNANCE |
| Capacités | V3-F05 / V3-F06 (connexes F02/F07/F11/F12/F14/F15 selon preuves) |
| Repository | mcleland147/sfia-workspace |
| Investigation SHA (CURRENT main) | `4ac169b69dfdc571421328811ba062540cc9655f` |
| Worktree (lecture sûre) | `/Users/morris/Projects/sfia-workspace-akg-m1-formal-closure-roadmap-sync` |
| WT branch / HEAD | `docs/sfia-studio-akg-m1-formal-closure-roadmap-sync` / `f666f19f99821d9c4480673db7fa398704874945` |
| Lecture CURRENT | `git show 4ac169b69dfdc571421328811ba062540cc9655f:path` (objets présents ; WT M1 **préservé**) |
| Dirty | `.tmp-sfia-review/chatgpt-review.md` only |
| Staged / project mutations | **none** |
| Prior handoff | `5bfcf0e36d6cdfaf92fa17a8bc8685e7ad9086d7` / blob `47ae156dafaad05dfef58aa407c5bd46f41d96ec` (Cycle 14 post-merge) |
| CKC Cycle 6 | **PRESENT as candidate** — `method/.../pilots/03-architecture-technique.md` (v0.1.0) · guidance cognitive · **subordonnée** template v2.6 + routing |
| Product/PRR/Roadmap/Doctrine edits | **NONE** |
| M2-B / M2-C | **NOT AUTHORIZED** |
| Verdict | **AKG-M2 LOT A — READY FOR CHATGPT CRITICAL REVIEW** |

---

## Git Truth (initial = final for Product)

| Check | Value |
|---|---|
| remote | `https://github.com/mcleland147/sfia-workspace.git` |
| `ls-remote` main | `4ac169b69dfdc571421328811ba062540cc9655f` (= expected pre-check) |
| Handoff tip (entry) | `5bfcf0e36d6cdfaf92fa17a8bc8685e7ad9086d7` |
| Destructive ops | **none** |
| Fetch | non-destructif `main` + `sfia/review-handoff` only |

---

## Sources lues (CURRENT `4ac169b69dfdc571421328811ba062540cc9655f` sauf handoffs M1)

| Classe | Paths / commits |
|---|---|
| Processus | `prompts/templates/sfia-cycle-execution-template.md` · routing · CKC map + pilot 03 |
| Convergence | Build Doctrine · Roadmap tip AKG-M1 CLOSED · B-AKG |
| C1 | consulted TARGET≠CURRENT (G-M1-10) |
| Doctrine v3 | 30 / 32 / 33 / 34 / 35 / 37 (authority & trajectory framing) |
| PRR | README · 01–09 · manifest **12/20/20/9/27/7** |
| Code | `app/lib/vertical-slice-runtime/**` · `app/features/project-assistant/{f2,w2}/**` · `app/lib/nora-cognitive-runtime/**` · `app/lib/oa/{project,cycle,decision,execution-contract,execution-attempt,evidence-review}/**` · `app/features/pre-m6-product-ui/**` |
| M1 Lot A | `ae1e24db…` L-A* |
| M1 Lot B | `54c08a4a…` L-B1…L-B7 |
| M1 Lot C | `436bc1bb…` L-C1…L-C8 |
| M1 Lot D | `0af13812…` (superseded corrections) |
| M1 Formal closure | `068beff9…` **R-D01/R-D02/R-D03** + L-D1…L-D8 corrected |
| M1 Post-merge | `5bfcf0e36d6cdfaf92fa17a8bc8685e7ad9086d7` |

---

## Convergence Pre-check M2-A

| Item | Status |
|---|---|
| AKG-M0 | CLOSED BY MORRIS AT METHODOLOGICAL SCOPE |
| AKG-M1 | CLOSED BY MORRIS AT BOUNDED SYSTEM INVENTORY SCOPE · PR #594 MERGED · post-merge CI SUCCESS |
| AKG-M2-A | **GO CONSUMED — THIS LOT** |
| AKG-M2-B/C | NOT AUTHORIZED |
| P6 / v3 / REAL | NOT ACQUIRED / NON ADOPTED / NOT PROVEN |
| Roadmap tip | M1 FORMAL CLOSURE CURRENT on main · tip text still says AKG-M2 NOT STARTED as authoring snapshot — **RESOLVE FROM CURRENT GIT** for M2-A GO (no Roadmap edit this cycle) |
| D11 / D12 | OBSERVABILITÉ/TESTS/CI · HISTORIQUE/SURFACES PARALLÈLES (R-D01) |
| Residuals | G-M1-04/05/06/09/10/12/15/17/18 OPEN |

R23: source-informed architecture investigation (code+PRR+M1).  
R24: **NO SEMANTIC IMPACT** (read-only; no Product/PRR mutation).

---

# L-M2A1 — Responsibility Ownership Matrix

Paths relative to `projects/sfia-studio/app/` unless noted. Proof levels: **DOCUMENTED** / **COVERAGE VERIFIED** / **BEHAVIOR PROVEN** / **KNOWN GAP**.

### Spine composition

| ID | Domaine | Manifest OBJ | Responsabilité canonique | Owner / Producteur | Consommateurs | Write auth | Decision auth | Persistence / SoT | Invariants | Flows | Code CURRENT | Preuve |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-COMP-01 | D2 | OBJ-RUNTIME-COMPOSITION | Wire OA stack + Product DB access | `lib/vertical-slice-runtime/service.ts` (`wireOaStack`, `RuntimeApplicationService`) | W2/F2/UI actions via `singleton.getRuntimeApplicationService` | Indirect (exposes services) | **None** | Product SQLite path | INV-NO-V3-ADOPT | F01–F02 | service.ts · singleton.ts | COVERAGE VERIFIED |
| R-UI-01 | D1 | OBJ-UI-LIFECYCLE | Present conversation / lifecycle / execution UX | `features/pre-m6-product-ui/**` | Pilote | **None** to Truth C | **None** (triggers only) | none | INV-APPLICABILITY-NE-AUTHORITY | F09 | useProductConversation · ExecutionSurface | DOCUMENTED + sampled BEHAVIOR PROVEN (UIC) |
| R-PA-01 | D2/D5 | OBJ-TURN-ORCH | Receive intent · qualify · orchestrate turn · stop before unauthorized exec | `features/project-assistant/` — `actions.ts` · `f2/orchestrateF2.ts` · `orchestrateTurn.ts` | Nora · OA · UI | Via OA only | Enforces gates; does not mint HD alone | Mixed | INV-COG-NE-AUTH · INV-NO-SILENT-HD | F03–F08 | orchestrateF2 header: stops before execution | BEHAVIOR PROVEN (front-door tests) |
| R-NORA-01 | D3 | — | Cognitive turn · Memory B owner · non-authoritative | `lib/nora-cognitive-runtime/**` | PA turn · post-Evidence tools | **Does not write Truth C** | **None** | Memory B `nora-session.sqlite` | INV-MEMB-NE-TRUTHC · INV-COG-NE-AUTH | F04/F13 | runNoraCognitiveTurn · productSqliteSession | BEHAVIOR PROVEN (MW1 observers) @ Fake/DET |
| R-MAT-MB-01 | D3/D8 | — | Memory B → Truth C materialization (governed) | OA `lib/oa/project/application/materializeFromMemoryB.ts` | Studio composition | Requires MaterializationBasis | Fail-closed | Truth C write | INV-MEMB-NE-TRUTHC | F04 related | MaterializeFromMemoryB.execute | COVERAGE VERIFIED |

### Project / cycle / trajectory / decision

| ID | Domaine | OBJ | Responsabilité | Owner | Consumers | Write | Decision | SoT | Invariants | Flows | Code | Preuve |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-PROJ-01 | D4 | OBJ-PROJECT | Durable project container | OA `lib/oa/project/**` | PA · UI | Project services | n/a | Truth C `oa_projects` | INV-PROJ-NE-CYCLE | F01/F02 | project repos | COVERAGE VERIFIED |
| R-LPS-01 | D4 | OBJ-LPS | Living project state OCC | OA project/LPS | PA · continuity | LPS append | n/a | Truth C `oa_lps*` | — | F02/F14 | — | COVERAGE VERIFIED |
| R-CYCLE-01 | D4 | OBJ-CYCLE | CycleInstance unit | OA `lib/oa/cycle/**` | F2 · W2 | create/link | n/a | Truth C `oa_cycle_instances` | INV-PROJ-NE-CYCLE | F03/F06 | — | COVERAGE VERIFIED |
| R-CKC-01 | D4 | OBJ-CKC | Cycle knowledge qualification | OA cycle domain `ckc*` | F2 cognitive context | catalog/qualify | n/a | Truth C / domain | — | F06 | — | DOCUMENTED |
| R-TRAJ-01 | D5 | OBJ-TRAJECTORY | Durable ProjectTrajectory promote | OA trajectory + **Product gate** `w2/decideTrajectory.ts` | UI chat-first | **Only after verified accepted HD** (header decideTrajectory) | Pilote HD required | Truth C `oa_project_trajectories*` | INV-REC-NE-HD | F14 PARTIAL | decideTrajectory.ts | BEHAVIOR PROVEN chat-first @ tested scope |
| R-PROP-01 | D5 | OBJ-PROPOSAL | Process-local decision subject | `f2/proposalStore.ts` | recordDecision | process Map | ≠ HD | **process-local** | INV-PROP-NE-HD · INV-PROP-NOT-SOLE-RESTART | F06/F17 | proposalStore | COVERAGE VERIFIED |
| R-REC-01 | D5 | OBJ-RECOMMENDATION | Materialize recommendations (authority none) | OA cycle materializeFromProductTurn / lifecycleRecommendation | UI · Nora | Truth C epistemic | **≠ HD** | Truth C epistemic items | INV-REC-NE-HD | F05 | materializeFromProductTurn | COVERAGE VERIFIED |
| R-HD-01 | D5/D9 | OBJ-HD | Durable Pilote HumanDecision | OA RecordHumanDecision · Product `f2/recordDecision.ts` · `w2/recordGenericMissionHumanDecision.ts` · SHE bind | EC verify · authorize | Truth C `oa_human_decisions` | **Pilote only** | Truth C | INV-NO-SILENT-HD · INV-REC-NE-HD | F07/F08/SHE | record* | BEHAVIOR PROVEN |
| R-DBASIS-01 | D5/D6 | OBJ-DECISION-BASIS | Sealed WHAT basis on HD | OA decision validateDecisionBasis | EC prepare/verify | embedded in HD | sealed at record | Truth C (HD payload) | INV-EC-NO-EXPAND-WHAT | F07 | — | COVERAGE VERIFIED |

### Execution governance

| ID | Domaine | OBJ | Responsabilité | Owner | Consumers | Write | Decision | SoT | Invariants | Flows | Code | Preuve |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-EC-01 | D6 | OBJ-EC | Prepare/validate ExecutionContract | OA Build/Validate · Product `w2/prepareGenericExecutionContractDraft.ts` · prepareExecutionContractFromW2Decision | Inspect/Auth/Select | Truth C `oa_execution_contracts` | PREPARE **≠** auth | Truth C | INV-SHE-PREPARE-NO-AUTHORITY · INV-OFFER-NE-AUTH | F08 | prepare* | BEHAVIOR PROVEN |
| R-INSP-01 | D6 | OBJ-INSPECTION | Inspection attestation | OA inspection · `w2/inspectExecutionContract.ts` | SHE / Authorize | Truth C attestations | ≠ Confirm | Truth C | INV-INSPECT-NE-CONFIRM · INV-INSPECT-NE-EXECUTE-CTA | F08 | inspect* | BEHAVIOR PROVEN |
| R-CONF-01 | D6/D9 | OBJ-CONFIRMATION | Explicit confirmation when required | OA Confirm · `w2/confirmForAuthorization.ts` | Authorize | Truth C `oa_confirmations` | ≠ HD · ≠ Auth | Truth C | INV-HD-NE-CONF · INV-CONFIRM-NE-AUTH | F08 | confirm* | BEHAVIOR PROVEN |
| R-AUTH-01 | D6/D9 | OBJ-AUTH-RECEIPT | Evaluate effective authority · receipts | OA CheckExecutionAuthorization · `w2/authorizeExecutionContract.ts` · authorizeGenericPreparedContract | Governed Select | receipts table | AUTHORIZED/BLOCKED | Truth C | INV-CAP-NE-AUTH · INV-AUTH-NE-EXEC · INV-NO-EXEC-BEFORE-AUTH | F08/F10 | authorize* header: STOP BEFORE EXECUTE · **0 Attempt** | BEHAVIOR PROVEN |
| R-SHE-01 | D6/D9 | — (SHE path) | Single Human Execute orchestration pre-launch | `w2/singleHumanExecutePreparedContract.ts` | governedExecute caller | may record HD + supersede EC refs | Pilote Exécuter gesture | Truth C HD/EC | INV-SHE-* catalog | F08 SHE | SHE file header: **does not create Attempt / launch Cursor** | BEHAVIOR PROVEN (`p6.she.singleHumanExecute*`) · code **on main `4ac169b69dfdc571421328811ba062540cc9655f`** |
| R-ATT-01 | D6 | OBJ-ATTEMPT | Create/select Attempt · start · terminal | OA `SelectExecutionAgent` · `StartExecution` · Product `w2/governedExecuteAuthorizedContract.ts` | Evidence · F11b | Truth C `oa_execution_attempts` | requires prior AUTHORIZED | Truth C | INV-ATTEMPT-NE-PROVEN · INV-AUTH-NE-EXEC | F10 | selectExecutionAgent.ts persists `accepted` | BEHAVIOR PROVEN |
| R-CUR-01 | D10 | — | Cursor REAL launch gateway | `lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts` | StartExecution | adapter effects | no authority expand | env-gated | INV-STAMP-NE-REAL-NOWRITE · INV-R2-* | F10 | gateway | DOCUMENTED · REAL boundary **KNOWN GAP** (G-M1-05/09) |
| R-CAP-01 | D6/D10 | OBJ-CAPABILITY | Capability envelope declaration | registries / EC constraints | Authorize | none alone | **≠ permission** | — | INV-CAP-NE-AUTH | F08 | — | DOCUMENTED |

### Evidence & continuity

| ID | Domaine | OBJ | Responsabilité | Owner | Consumers | Write | SoT | Invariants | Flows | Code | Preuve |
|---|---|---|---|---|---|---|---|---|---|---|---|
| R-EV-01 | D7 | OBJ-EVIDENCE | Durable evidence | OA evidence-review · F3 ingest paths | Claim/RB | Truth C `oa_evidence` | INV-ATTEMPT-NE-PROVEN | F11/F12 | — | BEHAVIOR PROVEN Fake scope |
| R-RB-01 | D7 | OBJ-RB | ReviewBundle aggregation | evidence-review | Claim | Truth C `oa_review_bundles` | — | F11/F12 | — | COVERAGE VERIFIED |
| R-CE-01 | D7 | OBJ-CLAIM | ClaimEvaluation / ContractResult projection | evidence-review claim* · projectContractResultVerdict | Continuity | Truth C CE | INV-SUCCESS-NE-READY | F12 | — | BEHAVIOR PROVEN Fake · REAL PARTIAL |
| R-F11B-01 | D7/D8 | — | Product Continuity / Shared Knowledge (read-only compose + reconcile) | `w2/resolveProductExecutionContext.ts` · `deriveGovernedExecutionContinuityProjection.ts` · `reconcileGovernedExecution.ts` | Nora tool · TrajectorySurface | **no new store** | derived over Truth C | recoveryRequired stops rematerialize | **F11b** (PRR03) | continuity modules + tests | BEHAVIOR PROVEN @ tested · **INDEX SCOPE TO VERIFY** (not in manifest.flows[]) = G-M1-17 |
| R-F13-01 | D3/D7 | — | Nora post-Evidence loop | `runW3cPostEvidenceLoop` / rehydrate helpers | UI | Memory B disabled tools mode per PRR | durable refs + session | — | F13 | nora post-evidence | COVERAGE VERIFIED · REAL NOT PROVEN |

**Completeness note:** P0 objects from L-B1/L-B2 covered for ownership. D11/D12 surfaces classified only (no exhaustive ownership cards). OPS1/`execution-run` = D12 parallel ≠ Product Truth C spine.

---

# L-M2A2 — Authority Boundary Matrix

| Boundary | From | To | Owner enforcement | Fail-closed example | Invariant(s) | Proof |
|---|---|---|---|---|---|---|
| B1 Recommendation ≠ HD | Rec / epistemic | HumanDecision | materialize* authority none · record* only on Pilote | no auto HD from Nora | INV-REC-NE-HD · INV-NO-SILENT-HD | BEHAVIOR PROVEN |
| B2 Proposal ≠ HD | proposalStore | recordDecision | accept→HD only | process-local loss ≠ invent HD | INV-PROP-NE-HD | BEHAVIOR PROVEN |
| B3 Cognition ≠ Authority | Nora / intentAnalysis | HD/EC/Auth | PA consumes structured output; Nora no mint | INV-COG-NE-AUTH | DOCUMENTED + tests | |
| B4 HD ≠ Confirmation | Decision | Confirmation | separate aggregates | INV-HD-NE-CONF | BEHAVIOR PROVEN | |
| B5 Inspection ≠ Confirmation | Inspect attest | Confirm | inspectExecutionContract | INV-INSPECT-NE-CONFIRM | BEHAVIOR PROVEN | |
| B6 Confirmation ≠ Authorization | Confirm | Authorize | authorize* after confirm when required | INV-CONFIRM-NE-AUTH | BEHAVIOR PROVEN | |
| B7 Authorization ≠ Execution | AUTHORIZED | Select/Start | authorize creates **0 Attempt**; Select creates Attempt | INV-AUTH-NE-EXEC · INV-NO-EXEC-BEFORE-AUTH | BEHAVIOR PROVEN | |
| B8 PREPARE ≠ AUTHORIZE ≠ EXECUTE | prepare draft | auth | execute | prepareGeneric* · SHE · governedExecute phases | SHE headers | INV-SHE-PREPARE-NO-AUTHORITY · INV-SHE-AUTHORITY-BEFORE-LAUNCH | BEHAVIOR PROVEN |
| B9 Capability ≠ Authority | AgentCapability | receipts | evaluate from closed registry | INV-CAP-NE-AUTH | BEHAVIOR PROVEN | |
| B10 Applicability ≠ Authority | Artifact APPLICABLE | execute | ACGC bridge | INV-APPLICABILITY-NE-AUTHORITY | COVERAGE VERIFIED | |
| B11 Offer ≠ Authorization | pendingGenericPrepareOffer | Auth | process-local offer | INV-OFFER-NE-AUTH | DOCUMENTED | |
| B12 Attempt terminal ≠ Product PROVEN | Attempt succeeded | Claim PASS | claim evaluation | INV-ATTEMPT-NE-PROVEN · INV-SUCCESS-NE-READY | BEHAVIOR PROVEN Fake | |
| B13 Stamp ≠ REAL no-write | NO_REPOSITORY_MUTATION stamp | Cursor REAL | R2 gate | INV-STAMP-NE-REAL-NOWRITE · INV-R2-REAL-PATHLESS-BLOCK | BEHAVIOR PROVEN refuse · **debt OPEN** G-M1-05 | |
| B14 Memory B ≠ Truth C | session DB | product DB | dual paths | INV-MEMB-NE-TRUTHC | BEHAVIOR PROVEN | |
| B15 Project ≠ Cycle | Project | CycleInstance | create/link rules | INV-PROJ-NE-CYCLE | COVERAGE VERIFIED | |
| B16 SHE vs historical disposition | SHE CURRENT | disposition-before-PREPARE HISTORICAL | both available | PRR07 dual paths | DOCUMENTED + SHE BEHAVIOR PROVEN | |

**SHE on Git CURRENT:** file + tests present on `4ac169b69dfdc571421328811ba062540cc9655f`. PRR07 header still says “CURRENT on Delivery / PR DRAFT pending merge / ≠ INTEGRATED_ON_MAIN” → treat as **HISTORICAL SNAPSHOT wording** (G-M1-14/18). **Code authority:** SHE Product path CURRENT on main; **≠** REAL/HQA PROVEN; **≠** P6 PASS.

**Authority chain (Product SHE CURRENT):**  
PREPARE (inspectable) → INSPECT → Pilote **Exécuter** → (HD if structural empty refs) → Confirm if required → Authorize → **STOP** → caller `governedExecuteSelect/Start` → Cursor iff admissible else **0 Attempt**.

---

# L-M2A3 — State & Persistence Ownership Map

| Store / Concern | Owner | SoT class | Restart authority | Risk | Flows | Proof |
|---|---|---|---|---|---|---|
| Product SQLite (`oa_*`) | Runtime composition + OA repos | **Truth C** | Durable | path config | F01–F15 | COVERAGE VERIFIED |
| Nora session SQLite | Nora `productSqliteSession` / `sessionPaths` | **Memory B** | Path-dependent | orphan session ≠ Truth C loss | F02/F04/F13 | COVERAGE VERIFIED |
| Proposal map | `f2/proposalStore.ts` | process-local | **≠ sole restart** | lost on process death | F06/F17 | DOCUMENTED · INV-PROP-NOT-SOLE-RESTART |
| Pending generic PREPARE offer | `w2/pendingGenericPrepareOfferStore.ts` | process-local | HD durable may still verify | offer loss | F18 | DOCUMENTED |
| RunState in-process | Nora runtime | ephemeral | same-turn only | DEFER full recovery | F02 | KNOWN GAP (vol06) |
| F11b continuity projection | derive/reconcile (stateless compose) | derived | recoveryRequired halt | no new store | F11b | BEHAVIOR PROVEN tested |
| Synthesis projections | `lib/oa/synthesis/**` | **NON-AUTHORITATIVE** | n/a | ≠ Truth C | — | DOCUMENTED |
| OPS1 execution-run BC | parallel surface | D12 / isolated | ≠ Product spine | — | F20 HISTORICAL | DOCUMENTED |

**Recovery responsibility (bounded — full scenarios = M2-B):**  
- Truth C aggregates: OA repositories.  
- Memory B: session path owner Nora/PA continuity actions.  
- Materialize Memory B→C: Studio OA use case (not Nora tool).  
- Post-Evidence rehydrate: shared W3c projection helpers (F13) + F11b reconcile.

---

# L-M2A4 — Responsibility Dependency Map (critical only)

Not a full L-C3 replay. Edges needed for ownership understanding:

```
UI → PA actions → F2 orchestrate (qualify/proposal) → Nora turn (Memory B)
                ↘ materialize Rec (Truth C epistemic)
                ↘ record HD (Truth C) ← Pilote only
                ↘ prepare EC (Truth C) — no Attempt
                ↘ inspect → confirm? → authorize (receipts) — no Attempt
                ↘ SHE execute bind → authorize — no Attempt
                ↘ governedExecuteSelect → OA SelectExecutionAgent → Attempt(accepted)
                ↘ governedExecuteStart → StartExecution → Cursor Gateway (env)
                ↘ Evidence/RB/CE (Truth C) → F11b resolve/reconcile (read-only)
                ↘ decideTrajectory → Trajectory write only after verified HD
```

| Dep | From→To | Runtime reality | Manifest | Qualification |
|---|---|---|---|---|
| DEP-PROP-HD | Proposal→HD | recordDecision closes proposal subject | indexed | COVERAGE VERIFIED |
| DEP-HD-EC | HD→EC | verify HD for prepare/execute paths | indexed | COVERAGE VERIFIED |
| **DEP-EC-ATT** | EC→Attempt | **SelectExecutionAgent** creates Attempt from **confirmed/authorized** EC | manifest **self-edge OBJ-EC→OBJ-EC** | **KNOWN GAP index fidelity G-M1-15** · PRR04 narrative EC→ATTEMPT aligns runtime · **do not** invent intentional self-edge ontology |
| Memory B→Turn | MEMB→TURN-ORCH | session feeds turn | DEP-SESSION-TURN | COVERAGE VERIFIED |
| Fake→Turn | FAKE→TURN | deterministic cognition | DEP-FAKE-INTENT | DOCUMENTED |

---

# L-M2A5 — Coverage, Ambiguity & Gap Register

### Established responsibilities (Lot A)

Owners for composition, UI, PA orchestration, Nora cognition, Project/LPS/Cycle, Proposal, Rec, HD, EC, Inspect, Confirm, Authorize, SHE pre-launch, Attempt select/start, Evidence/RB/CE, F11b continuity, Trajectory gate — as L-M2A1/2/3.

### Documentary coverage

PRR 01–09 + manifest components index **curated** (12) vs object catalog broader (G-M1-02) — expected.

### Behavioral proof existing (sampled)

SHE · authorize · select Attempt · F2 front-door · Memory B observers · F11b continuity tests · R1/R2 Product refuse — **DET/Fake scope**.

### Ownership ambiguities — UNKNOWN / TO VERIFY (non-blocking for Lot A exit if explicit)

| ID | Ambiguity | Consequence | For |
|---|---|---|---|
| A-M2A-01 | All Trajectory writes only via `decideTrajectory` + OA promote? | bootstrap paths outside W2? | M2-B interaction |
| A-M2A-02 | Legacy M3/F3 confirmAndExecute vs W2 governed — same SelectExecutionAgent always? | dual path residual | M2-B |
| A-M2A-03 | F13 `t-a7` boundedHistory vs Product post-Evidence ownership boundary | overclaim “bounded read” | M2-B / M3 |
| A-M2A-04 | Manifest registration intent for F11b & DEP-EC-ATT | index vs code | **M3 PRR sync GO** (not M2-A) |

### Gaps / debts preserved (not closed)

| ID | Class | Status |
|---|---|---|
| G-M1-04 | Documentary Tool-First drift | OPEN |
| G-M1-05 | TOOL-FIRST-REAL-NOWRITE | OPEN debt |
| G-M1-06 | RS-03 | OPEN |
| G-M1-09 | DET≠REAL | OPEN non-claim |
| G-M1-10 | TARGET≠CURRENT | OPEN |
| G-M1-12 | v3 NON ADOPTED | OPEN non-claim |
| G-M1-14 | SHE PRR wording stale | OPEN historical (code CURRENT on main) |
| G-M1-15 | DEP-EC-ATT index fidelity | OPEN · **reconfirmed** |
| G-M1-17 | F11b INDEX SCOPE TO VERIFY | OPEN · **reconfirmed** (implemented + tested; absent flows[]) |
| G-M1-18 | Historical PRR photos | OPEN |

### Special cases (mandatory)

**DEP-EC-ATT:** Runtime ownership EC→Attempt via Select after auth = **COVERAGE VERIFIED / BEHAVIOR PROVEN** at DET scope. Manifest self-edge = **KNOWN GAP** representation only — **≠** absence of runtime relation · **≠** proven intentional self-edge · **≠** schema change mandate.

**F11b:** Implemented + tested = **BEHAVIOR PROVEN** @ tested · absent `manifest.flows[]` = **INDEX SCOPE TO VERIFY** — **≠** unimplemented · **≠** proven intentional omit.

**TOOL-FIRST REAL NO-WRITE:** remains OPEN; R2 DET refuse ≠ global REAL technical no-write; **no REAL executed this cycle**.

**D11/D12:** identities R-D01 preserved; no decommission proposal.

---

# L-M2A6 — M2-B Entry Contract Candidate

| Field | Candidate |
|---|---|
| Title | AKG-M2 Lot B — Critical Interaction Understanding |
| Status | **PROPOSAL ONLY — NOT AUTHORIZED** |
| Prerequisite | Lot A Critical Review PASS + **distinct Morris GO M2-B** |
| Must consume | L-M2A1…L-M2A6 · M1 L-B/C/D corrected · G-M1-* residuals · D11/D12 |
| Established (reuse) | Authority chain PREPARE≠AUTH≠EXEC · Rec≠HD · Memory B≠Truth C · SHE pre-launch 0 Attempt · Select creates Attempt · F11b owner modules |
| Interactions to deepen | End-to-end SHE→Select→Start→Evidence→F11b reconcile · restart F17/F18/F19 sequences · ACGC applicability→continue · trajectory accept→promote · post-Evidence Nora F13 · Fake vs REAL boundary crossings (still no unauthorized REAL) |
| Frontiers still TO VERIFY | A-M2A-01…04 · unsampled INV refuse cells · multi-instance composition limits |
| Sources | Code CURRENT main · PRR 03/06/07 · Lot C flow proofs · Lot A matrices |
| Gaps conserve | All G-M1-* OPEN · no debt close by understanding alone |
| Exit proof candidate | Sourced interaction cards · sequence diagrams with refuse paths · persistence/restart scenario matrix · proof ceilings · M2-C entry candidate |
| Stops | REAL/HQA without GO · PRR mutation · Product change · treating DET as REAL · starting M2-C/M3 without GO |
| Morris gates | GO M2-B · any REAL campaign · any PRR sync · any Roadmap tip for M2 |

---

## Exit proof M2-A (A–L)

| # | Criterion | Result |
|---|---|---|
| A | P0 responsibilities mapped from M1 objects | **PASS** (L-M2A1) |
| B | Owners from code | **PASS** |
| C | Authority frontiers coherent with invariants | **PASS** (L-M2A2) |
| D | Rec≠Decision≠Authorize | **PASS** |
| E | Truth C / Memory B / process-local explicit | **PASS** (L-M2A3) |
| F | Critical deps sourced | **PASS** (L-M2A4) |
| G | DEP-EC-ATT / F11b qualified without overclaim | **PASS** |
| H | Honest proof levels | **PASS** |
| I | Gaps OPEN preserved | **PASS** (L-M2A5) |
| J | No parallel référentiel | **PASS** |
| K | M2-B link explicit | **PASS** (L-M2A6) |
| L | No Product/PRR/Governance file mutation | **PASS** |

---

## Validations executed / excluded

**Executed:** Git Truth · `git show` code/PRR/manifest · M1 handoff consume · path existence · semantic cross-check DEP-EC-ATT/F11b · status porcelain.  
**Excluded:** npm test/build/lint · HQA · REAL · OpenAI LIVE · PRR sync · Roadmap edit.

---

## Décisions ouvertes (Morris / ChatGPT)

1. Critical Review accept/reject Lot A.  
2. Distinct GO for M2-B if accepted.  
3. Optional later: PRR index correction DEP-EC-ATT / F11b (M3) — **not this lot**.  
4. Optional Roadmap tip recording M2-A start — **not authorized here**.

---

## Verdict

# **AKG-M2 LOT A — READY FOR CHATGPT CRITICAL REVIEW**

| Declaration | Status |
|---|---|
| Product Git mutations | **NONE** |
| M2-B | **NOT AUTHORIZED / NOT STARTED** |
| P6 GLOBAL PASS | **NOT ACQUIRED** |
| Runtime v3 | **NON ADOPTED** |
| REAL boundary | **NOT PROVEN** |
| Next | **CHATGPT CRITICAL REVIEW — AKG-M2 LOT A** |

---

## Instruction ChatGPT

Lire distant `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (this pack after L3).

Vérifier:
- L-M2A1…L-M2A6 exploitables (pas synthèse seule) ;
- authority chain PREPARE≠AUTH≠EXEC · SHE 0 Attempt · Select crée Attempt ;
- Memory B≠Truth C · Rec≠HD ;
- DEP-EC-ATT KNOWN GAP index · F11b COVERAGE+INDEX TO VERIFY ;
- gaps G-M1-* OPEN ;
- CKC cycle 6 candidate present ;
- main `4ac169b69dfdc571421328811ba062540cc9655f` · no Product mutation ;
- verdict READY FOR CHATGPT CRITICAL REVIEW ;
- M2-B proposal ≠ authorization.

---

## Handoff L3 notes (pre-publish)

| Field | Value |
|---|---|
| Proposed message | docs(review-handoff): publish AKG-M2 lot A responsibility review |
| Prior tip | `5bfcf0e36d6cdfaf92fa17a8bc8685e7ad9086d7` |
| Policy | no tip self-reference SHA chase |
