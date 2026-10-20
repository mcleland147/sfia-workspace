# SFIA Studio — AKG-M2 Lot A — Correction Pass 01
## Review Pack FULL (ChatGPT Critical Re-Review)

| Field | Value |
|---|---|
| Timestamp UTC | 2026-10-20T15:33:02Z |
| GO Morris | **GO AKG-M2 LOT A — CORRECTION PASS 01 — R-M2A-01 / R-M2A-02 / R-M2A-03 — REVIEW PACK + HANDOFF L3 ONLY** |
| Cycle | 6 — Architecture technique · **Correction Pass 01** |
| Profil | CRITICAL |
| Typologie | DOC / ARCHITECTURE / REVIEW CORRECTION |
| Capacités | V3-F05 / V3-F06 |
| Repository | mcleland147/sfia-workspace |
| Investigation SHA (CURRENT main) | `4ac169b69dfdc571421328811ba062540cc9655f` |
| Worktree | `/Users/morris/Projects/sfia-workspace-akg-m1-formal-closure-roadmap-sync` |
| WT branch / HEAD | `docs/sfia-studio-akg-m1-formal-closure-roadmap-sync` / `f666f19f99821d9c4480673db7fa398704874945` |
| Lecture CURRENT | `git show 4ac169b69dfdc571421328811ba062540cc9655f:path` |
| Dirty | `.tmp-sfia-review/chatgpt-review.md` only |
| Prior pack (to correct) | `86a2b1e701fa5ee70997d5e39cc84a6bffa9f922` / blob `bc2f88fe7e38dad6633238dd3dbfe22afb60bc64` |
| CKC Cycle 6 | candidate pilot `pilots/03-architecture-technique.md` — guidance only |
| Product/PRR/Roadmap edits | **NONE** |
| M2-B / M3 | **NOT AUTHORIZED** |
| Verdict | **AKG-M2 LOT A — CORRECTION PASS 01 COMPLETE — READY FOR CHATGPT CRITICAL RE-REVIEW** |

---

## Git Truth (initial = final for Product)

| Check | Value |
|---|---|
| `ls-remote` main | `4ac169b69dfdc571421328811ba062540cc9655f` |
| Handoff tip at start | `86a2b1e701fa5ee70997d5e39cc84a6bffa9f922` |
| Destructive ops | **none** |
| M1 branch preserved | **yes** @ `f666f19f99821d9c4480673db7fa398704874945` |

---

## Sources

Processus v2.6 · routing · CKC pilot 03 · Build Doctrine · Roadmap B-AKG · C1 (TARGET only) · v3 30/32–35/37 · PRR 01–04/06–09 · manifest 12/20/20/9/27/7 · code w2 F11b · ACGC · artifactTargetRouting · assessFinalization · prior handoff `86a2b1e701fa5ee70997d5e39cc84a6bffa9f922` · Formal Closure `068beff9…` (R-D01/02/03).

R23: proportional code+PRR re-read for three reserves.  
R24: **NO SEMANTIC IMPACT** (read-only documentary correction).

Fake/REAL: DET proofs cited only; REAL boundary **NOT PROVEN**; G-M1-05 OPEN; no REAL/HQA this cycle.

---

## Convergence Pre-check

AKG-M0 CLOSED · AKG-M1 CLOSED (PR #594) · AKG-M2-A Correction Pass GO · M2-B/C NOT AUTHORIZED · P6 NOT ACQUIRED · v3 NON ADOPTED · D11/D12 R-D01 identities · residuals G-M1-* OPEN.

---

# Correction Register

### R-M2A-01 — F11b ownership

| | |
|---|---|
| **AVANT** | F11b / continuity sometimes labeled globally READ-ONLY including reconciler |
| **CORRECTION** | Split Shared Resolution (read-only) · Continuity Projection (derived, no exec authority) · Server Reconciler (intent-scoped transitions; **not** globally read-only) |
| **PREUVE** | File headers + body: `resolveProductExecutionContext.ts` · `deriveGovernedExecutionContinuityProjection.ts` · `reconcileGovernedExecution.ts` (observe/execute/continue · `governedExecute*` · `materializeW3bProductTerminal`) @ `4ac169b69dfdc571421328811ba062540cc9655f` |
| **ÉTAT** | **CORRECTED** · G-M1-17 remains OPEN |

### R-M2A-02 — Authority matrix

| | |
|---|---|
| **AVANT** | Misaligned columns · empty Proof · B8 had 8 cells · invariants in wrong columns |
| **CORRECTION** | Full L-M2A2 rebuilt: B1–B16 × exactly **7** columns |
| **PREUVE** | Structural count assertion in pack build · code/test anchors per row |
| **ÉTAT** | **CORRECTED** |

### R-M2A-03 — Artifact / Finalization

| | |
|---|---|
| **AVANT** | OBJ-ARTIFACT-CONTINUATION / ROUTING / FINALIZATION-ASSESS under-specified in L-M2A1 |
| **CORRECTION** | Explicit R-ART-CONT / R-ART-ROUTE / R-FIN-ASSESS cards + deps |
| **PREUVE** | `activeCycleGovernedContinuation.ts` · `artifactTargetRouting.ts` · `assessFinalization.ts` · `deriveFinalizationApplicability.ts` · `deriveCycleObligationSnapshot.ts` · manifest components |
| **ÉTAT** | **CORRECTED** · no new ontology |

---

# L-M2A1 — Responsibility Ownership Matrix (complete)

Paths under `projects/sfia-studio/app/` unless noted.

### Spine / cognition / project / decision / execution

| ID | Domaine | Manifest OBJ | Responsabilité | Owner / Producteur | Consommateurs | Write auth | Decision auth | Persistence | Invariants | Flows | Code CURRENT | Preuve |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-COMP-01 | D2 | OBJ-RUNTIME-COMPOSITION | Wire OA + Product DB | `lib/vertical-slice-runtime/service.ts` | W2/F2/UI | Indirect | None | Product SQLite | INV-NO-V3-ADOPT | F01–F02 | service.ts · singleton.ts | COVERAGE VERIFIED |
| R-UI-01 | D1 | OBJ-UI-LIFECYCLE | Present UX; trigger Pilote actions | `features/pre-m6-product-ui/**` | Pilote | None→Truth C | None | none | INV-APPLICABILITY-NE-AUTHORITY | F09 | useProductConversation · surfaces | DOCUMENTED + sampled BEHAVIOR PROVEN |
| R-PA-01 | D2/D5 | OBJ-TURN-ORCH | Intent · qualify · orchestrate; stop before unauthorized exec | `features/project-assistant/` actions · `f2/orchestrateF2.ts` · orchestrateTurn | Nora · OA · UI | Via OA | Enforces gates; ≠ mint HD alone | Mixed | INV-COG-NE-AUTH · INV-NO-SILENT-HD | F03–F08 | orchestrateF2 | BEHAVIOR PROVEN — AT TESTED SCOPE (front-door) |
| R-NORA-01 | D3 | — | Cognitive turn; Memory B owner; non-authoritative | `lib/nora-cognitive-runtime/**` | PA | Does not write Truth C | None | Memory B | INV-MEMB-NE-TRUTHC · INV-COG-NE-AUTH | F04/F13 | runNoraCognitiveTurn · productSqliteSession | BEHAVIOR PROVEN — AT TESTED SCOPE (MW1) |
| R-MAT-MB-01 | D3/D8 | — | Memory B→Truth C materialization | OA `materializeFromMemoryB.ts` | Studio | Requires MaterializationBasis | Fail-closed | Truth C | INV-MEMB-NE-TRUTHC | F04 | MaterializeFromMemoryB | COVERAGE VERIFIED |
| R-PROJ-01 | D4 | OBJ-PROJECT | Durable project | OA project/** | PA · UI | Project services | n/a | Truth C | INV-PROJ-NE-CYCLE | F01/F02 | — | COVERAGE VERIFIED |
| R-LPS-01 | D4 | OBJ-LPS | Living state OCC | OA LPS | PA · continuity | LPS append | n/a | Truth C | — | F02/F14 | — | COVERAGE VERIFIED |
| R-CYCLE-01 | D4 | OBJ-CYCLE | CycleInstance | OA cycle/** | F2 · W2 | create/link | n/a | Truth C | INV-PROJ-NE-CYCLE | F03/F06 | — | COVERAGE VERIFIED |
| R-CKC-01 | D4 | OBJ-CKC | Cycle knowledge qualify | OA ckc* | F2 | catalog | n/a | Truth C/domain | — | F06 | — | DOCUMENTED |
| R-TRAJ-01 | D5 | OBJ-TRAJECTORY | Durable trajectory promote | OA + `w2/decideTrajectory.ts` | UI | Only after verified accepted HD | Pilote HD | Truth C | INV-REC-NE-HD | F14 PARTIAL | decideTrajectory | BEHAVIOR PROVEN — AT TESTED SCOPE |
| R-PROP-01 | D5 | OBJ-PROPOSAL | Process-local decision subject | `f2/proposalStore.ts` | recordDecision | process Map | ≠ HD | process-local | INV-PROP-NE-HD · INV-PROP-NOT-SOLE-RESTART | F06/F17 | proposalStore | COVERAGE VERIFIED |
| R-REC-01 | D5 | OBJ-RECOMMENDATION | Materialize recommendations | OA materializeFromProductTurn / lifecycle | UI · Nora | Truth C epistemic | ≠ HD | Truth C | INV-REC-NE-HD | F05 | — | COVERAGE VERIFIED |
| R-HD-01 | D5/D9 | OBJ-HD | Durable Pilote HD | OA RecordHumanDecision · recordDecision · recordGenericMission · SHE bind | EC verify · authorize | Truth C | **Pilote only** | Truth C | INV-NO-SILENT-HD | F07/F08/SHE | — | BEHAVIOR PROVEN — AT TESTED SCOPE |
| R-DBASIS-01 | D5/D6 | OBJ-DECISION-BASIS | Sealed WHAT on HD | OA validateDecisionBasis | EC | embedded HD | sealed at record | Truth C | INV-EC-NO-EXPAND-WHAT | F07 | — | COVERAGE VERIFIED |
| R-EC-01 | D6 | OBJ-EC | Prepare/validate EC | OA Build/Validate · prepareGeneric* | Inspect/Auth/Select | Truth C | PREPARE≠auth | Truth C | INV-SHE-PREPARE-NO-AUTHORITY | F08 | prepare* | BEHAVIOR PROVEN — AT TESTED SCOPE |
| R-INSP-01 | D6 | OBJ-INSPECTION | Inspection attestation | inspectExecutionContract | SHE / Authorize | Truth C | ≠ Confirm | Truth C | INV-INSPECT-NE-CONFIRM | F08 | — | BEHAVIOR PROVEN — AT TESTED SCOPE |
| R-CONF-01 | D6/D9 | OBJ-CONFIRMATION | Confirmation when required | confirmForAuthorization | Authorize | Truth C | ≠ HD ≠ Auth | Truth C | INV-HD-NE-CONF · INV-CONFIRM-NE-AUTH | F08 | — | BEHAVIOR PROVEN — AT TESTED SCOPE |
| R-AUTH-01 | D6/D9 | OBJ-AUTH-RECEIPT | Evaluate authority · receipts | authorizeExecutionContract · authorizeGeneric* | Select | receipts | AUTHORIZED/BLOCKED | Truth C | INV-CAP-NE-AUTH · INV-AUTH-NE-EXEC | F08/F10 | authorize*: **0 Attempt** | BEHAVIOR PROVEN — AT TESTED SCOPE |
| R-SHE-01 | D6/D9 | — | SHE pre-launch orchestration | singleHumanExecutePreparedContract | governedExecute caller | may HD + supersede EC refs | Pilote Exécuter | Truth C | INV-SHE-* | F08 SHE | **0 Attempt · 0 Cursor** | BEHAVIOR PROVEN — AT TESTED SCOPE · code on main |
| R-ATT-01 | D6 | OBJ-ATTEMPT | Select creates Attempt; Start mutates existing | OA SelectExecutionAgent · StartExecution · governedExecute* | Evidence · F11b | Truth C | requires AUTHORIZED | Truth C | INV-ATTEMPT-NE-PROVEN | F10 | selectExecutionAgent · governedExecuteStart | BEHAVIOR PROVEN — AT TESTED SCOPE |
| R-CUR-01 | D10 | — | Cursor REAL gateway | studioCursorRealLaunchGateway | StartExecution | adapter | no auth expand | env-gated | INV-STAMP-NE-REAL-NOWRITE | F10 | gateway | DOCUMENTED · REAL **KNOWN GAP** |
| R-CAP-01 | D6/D10 | OBJ-CAPABILITY | Capability envelope | registries / EC | Authorize | none alone | ≠ permission | — | INV-CAP-NE-AUTH | F08 | — | DOCUMENTED |
| R-EV-01 | D7 | OBJ-EVIDENCE | Durable evidence | evidence-review · F3 ingest | Claim/RB | Truth C | — | Truth C | INV-ATTEMPT-NE-PROVEN | F11/F12 | — | BEHAVIOR PROVEN Fake |
| R-RB-01 | D7 | OBJ-RB | ReviewBundle | evidence-review | Claim | Truth C | — | Truth C | — | F11/F12 | — | COVERAGE VERIFIED |
| R-CE-01 | D7 | OBJ-CLAIM | ClaimEvaluation / ContractResult projection | claim* · projectContractResultVerdict | Continuity | Truth C | — | Truth C | INV-SUCCESS-NE-READY | F12 | — | BEHAVIOR PROVEN Fake · REAL PARTIAL |
| R-F13-01 | D3/D7 | — | Nora post-Evidence | runW3cPostEvidenceLoop / rehydrate | UI | durable refs | — | Mixed | — | F13 | — | COVERAGE VERIFIED · REAL NOT PROVEN |

### F11b — Split ownership (R-M2A-01)

| ID | Role | Read-only? | Transitions / effects | Owner | Intent / notes | Persistence | Flows | Preuve |
|---|---|---|---|---|---|---|---|---|
| R-F11B-RES | Shared Product Resolution | **YES** — compose existing Truth | None | `w2/resolveProductExecutionContext.ts` | Fail-closed lineage (`EVIDENCE_LINEAGE_AMBIGUOUS` etc.) | No new store | F11b | BEHAVIOR PROVEN — AT TESTED SCOPE (`productContinuitySharedKnowledge.d0.test.ts`) |
| R-F11B-PROJ | Continuity Projection | **YES** — derived stages | None (no exec authority) | `w2/deriveGovernedExecutionContinuityProjection.ts` | Stages PRE_EXECUTION…RECOVERY_REQUIRED; nextDeterministicAction | Derived | F11b | BEHAVIOR PROVEN — AT TESTED SCOPE |
| R-F11B-REC | Server Reconciler | **NO — not globally read-only** | Intent-scoped | `w2/reconcileGovernedExecution.ts` | see matrix below | Uses Truth C via OA/governed paths | F11b | BEHAVIOR PROVEN — AT TESTED SCOPE (`p6.productContinuityClosure.integrated.d0.test.ts`) |
| R-F11B-MAT | Product terminal materialize (invoked by reconciler) | Mutating Product lineage | Evidence/RB/CE/post-Evidence | `w2/materializeW3bProductTerminal.ts` | Called when next=MATERIALIZE_PRODUCT / RUN_POST_EVIDENCE | Truth C writes via OA | F11/F12/F13 | BEHAVIOR PROVEN Fake scope |

**Reconciler intent qualification (code-grounded):**

| Intent | Behavior | Creates Attempt? | May mutate? |
|---|---|---|---|
| `observe` | projection only · `stoppedReason=observe_only` | **No** | **No** |
| `continue` without Attempt | `no_attempt_continue_is_read_stable` | **No** | **No** |
| `execute` without Attempt | `governedExecuteAuthorizedContract` (auth+select+start+record path) | **Yes** (via Select inside governed path) after authority checks | **Yes** if gates pass |
| `execute` with Attempt | redelegated to continue · **no second Attempt** | **No new** | Continue path |
| `continue` + ATTEMPT_ACCEPTED | `governedExecuteStart` on **existing** Attempt | **No new** (Start ≠ create) | Yes (running) |
| `continue` + RUNNING | `governedExecuteRecordResult` | No | Terminal/record |
| loop MATERIALIZE / POST_EVIDENCE | `materializeW3bProductTerminal` | No | Product/post-Evidence |
| `recoveryRequired` | stop · `transitionsApplied=[]` | No | **No** before recovery |

**Attempt guarantees:** SHE/Authorize/PREPARE → **0 Attempt**. Select refuse → **0 new Attempt**. Start refuse → Attempt may already be `accepted`. Rehydrate path remains **separate read-only** (header).

**G-M1-17:** F11b absent from `manifest.flows[]` — **INDEX SCOPE TO VERIFY OPEN** (≠ unimplemented).

### Artifact / Finalization (R-M2A-03)

| ID | Domaine | Manifest | Responsabilité | Owner | Consommateurs | Write / Decision | Persistence | Invariants | Flows | Code | Preuve |
|---|---|---|---|---|---|---|---|---|---|---|---|
| R-ART-CONT | D5/D7 | OBJ-ARTIFACT-CONTINUATION | Active-cycle Artifact governed continuation vs NEW_CYCLE vs BLOCKED | `f2/activeCycleGovernedContinuation.ts` (+ obligation snapshot) | Proposal path · PA | Server-owned resolution; **APPLICABILITY ≠ authority**; HD still required before EC | reads Product DB / derived | INV-APPLICABILITY-NE-AUTHORITY · INV-UNKNOWN-NE-APPLICABLE · INV-NO-SILENT-HD · INV-OLD-CYCLE-HD | F05/F06/F17 | ACGC · deriveCycleObligationSnapshot | BEHAVIOR PROVEN — AT TESTED SCOPE (ACGC bridge / corrProof07 / front-door) |
| R-ART-ROUTE | D7/D8 | OBJ-ARTIFACT-ROUTING | Compose/validate artifact target paths (server) | `lib/oa/project/domain/artifactTargetRouting.ts` | ACGC · prepare | Pure domain; Nora filename = **non-authoritative candidate**; fail-closed invalid paths (CR-PWR-01) | none (pure) | INV-EC-NO-EXPAND-WHAT (routing ≠ expand EC WHAT) | F05/F08 | artifactTargetRouting | COVERAGE VERIFIED (used by ACGC) · dedicated trackedTests empty in manifest |
| R-FIN-ASSESS | D4/D5 | OBJ-FINALIZATION-ASSESS | Derived finalization obligation assessment (no auto-FINALIZED) | `assessFinalization.ts` · `deriveFinalizationApplicability.ts` · obligation snapshot | Lifecycle UI · gates | Assessment ≠ finalize HD; UNKNOWN→BLOCKING; blockers for missing MUST / undisposed | derived-read | INV-ARTIFACT-COND · INV-UNKNOWN-NE-APPLICABLE | F05/F15 | assess* · derive* | BEHAVIOR PROVEN — AT TESTED SCOPE (`corrProof06.artifactObligation.d0.test.ts`) |

**ACGC notes:** Durable active cycle + (CURRENT REQUIRE_ARTIFACT HD **or** Artifact APPLICABLE ∧ ¬SATISFIED) admit Proposal/clarification; `continuationKind` NON-AUTHORITATIVE; BLOCKED never silent createCycle; same CycleInstance continuation.

**Finalization notes:** MUST families from obligation snapshot; effective primary EC selection; undisposed recommendations as blockers; finalize requires current lifecycle HD — **no auto-FINALIZED**.

---

# L-M2A2 — Authority Boundary Matrix (complete · R-M2A-02)

Schema: Boundary | From | To | Owner enforcement | Fail-closed example | Invariant(s) | Proof  
**16 rows · 7 cells each · verified.**

| Boundary | From | To | Owner enforcement | Fail-closed example | Invariant(s) | Proof |
|---|---|---|---|---|---|---|
| B1 Recommendation ≠ HD | Rec / epistemic items | HumanDecision | OA materialize* (`authority: none`) · Product `f2/recordDecision.ts` / `w2/recordGenericMissionHumanDecision.ts` / SHE bind only on Pilote action | Nora/rec path cannot mint HD; silent HD forbidden | INV-REC-NE-HD · INV-NO-SILENT-HD | BEHAVIOR PROVEN — AT TESTED SCOPE (`g3.human-decision-pilote-only.test.ts` · front-door HD tests cited M1) |
| B2 Proposal ≠ HD | `f2/proposalStore` process-local | Durable HD | `recordDecision` / closeProposalDecisionSubject after Pilote accept | Process death loses proposal ≠ invent HD; INV-PROP-NOT-SOLE-RESTART | INV-PROP-NE-HD · INV-PROP-NOT-SOLE-RESTART | BEHAVIOR PROVEN — AT TESTED SCOPE (F2 / front-door proposal→HD) |
| B3 Cognition ≠ Authority | Nora / intentAnalysis hints | HD · EC · Authorize | PA consumes structured output; Nora has no RecordHumanDecision / Authorize ownership | Cognitive hint cannot authorize Execute | INV-COG-NE-AUTH | BEHAVIOR PROVEN — AT TESTED SCOPE (`nora-cognitive-runtime/authority.d0.test.ts` · MW product-authority facts) |
| B4 HD ≠ Confirmation | `oa_human_decisions` | `oa_confirmations` | OA ConfirmExecutionContract · `w2/confirmForAuthorization.ts` | Confirm missing when required → authorize BLOCKED (`confirmation_missing` family) | INV-HD-NE-CONF | BEHAVIOR PROVEN — AT TESTED SCOPE (authorize + confirm path tests) |
| B5 Inspection ≠ Confirmation | Inspection attestation | Confirmation | `w2/inspectExecutionContract.ts` · OA inspection attestations | Uninspected contract → authorize BLOCKED (`not_inspected`) | INV-INSPECT-NE-CONFIRM | BEHAVIOR PROVEN — AT TESTED SCOPE (`ecInspectionDisclosure.d0.test.ts` · SHE attest) |
| B6 Confirmation ≠ Authorization | Confirmation obtained | AUTHORIZED verdict + receipts | `w2/authorizeExecutionContract.ts` / `authorizeGenericPreparedContract.ts` | Missing required Confirmation → BLOCKED; Confirm alone ≠ AUTHORIZED | INV-CONFIRM-NE-AUTH | BEHAVIOR PROVEN — AT TESTED SCOPE (`authorizeExecutionContract` BLOCKED_TEXT paths) |
| B7 Authorization ≠ Execution | AUTHORIZED / receipts | Attempt create · Start · Cursor | Authorize stops before Attempt; `governedExecuteSelectAgent` creates Attempt; `governedExecuteStart` starts existing Attempt | Authorize: **0 Attempt**; Select refuse: **0 new Attempt**; Start refuse: Attempt may already be `accepted` | INV-AUTH-NE-EXEC · INV-NO-EXEC-BEFORE-AUTH | BEHAVIOR PROVEN — AT TESTED SCOPE (`governedExecuteAuthorizedContract.ts` · `selectExecutionAgent.ts` · GCEC StartExecution tests) |
| B8 PREPARE ≠ AUTHORIZE ≠ EXECUTE | PREPARE / inspectable EC | Authorize then Select/Start | `prepareGenericExecutionContractDraft.ts` · `singleHumanExecutePreparedContract.ts` · governedExecute phases | PREPARE/SHE: **0 Attempt** · **0 Cursor**; authority before launch only | INV-SHE-PREPARE-NO-AUTHORITY · INV-SHE-AUTHORITY-BEFORE-LAUNCH · INV-AUTH-NE-EXEC | BEHAVIOR PROVEN — AT TESTED SCOPE (`p6.she.singleHumanExecute*.d0.test.ts`) |
| B9 Capability ≠ Authority | AgentCapability / registry | AuthorityVerificationReceipt | Capability evaluated as envelope in authorize*; receipts materialize outcome | Cap alone never authorizes (`no_authorized_executor` / mismatch paths) | INV-CAP-NE-AUTH | BEHAVIOR PROVEN — AT TESTED SCOPE (authorize capability sufficiency + Native Auth S1 tests) |
| B10 Applicability ≠ Authority | Artifact APPLICABLE / REQUIRE_ARTIFACT | Execution authorized | `f2/activeCycleGovernedContinuation.ts` bridge · INV-APPLICABILITY-NE-AUTHORITY | APPLICABLE admits Proposal path only; HD still required before EC | INV-APPLICABILITY-NE-AUTHORITY · INV-UNKNOWN-NE-APPLICABLE | BEHAVIOR PROVEN — AT TESTED SCOPE (`activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts`) |
| B11 Offer ≠ Authorization | `pendingGenericPrepareOfferStore` | AUTHORIZED | Offer is process-local presentation carrier | Offer loss ≠ Authorization; PREPARE offer ≠ launch authority | INV-OFFER-NE-AUTH | DOCUMENTED (PRR07 · store header) · COVERAGE VERIFIED (paths) — dedicated refuse code **NOT VERIFIED** as unique string this pass |
| B12 Attempt terminal ≠ Product PROVEN | Attempt `succeeded` | ClaimEvaluation / ContractResult PASS | evidence-review claim* · `projectContractResultVerdict` | Technical SUCCESS may remain NOT_PROVEN / UNCLAIMED | INV-ATTEMPT-NE-PROVEN · INV-SUCCESS-NE-READY | BEHAVIOR PROVEN — AT TESTED SCOPE (Fake F11/F12 · `productContinuitySharedKnowledge.d0.test.ts`) · REAL journey PARTIAL |
| B13 Stamp ≠ REAL no-write | `NO_REPOSITORY_MUTATION_*` / bounded stamp | Cursor REAL technical no-write | `boundedNonMutatingRealLaunchGate.ts` · assert on Select/Start | Pathless + `SFIA_STUDIO_CURSOR_REAL=1` → `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` | INV-STAMP-NE-REAL-NOWRITE · INV-R2-REAL-PATHLESS-BLOCK | BEHAVIOR PROVEN — AT TESTED SCOPE (Product refuse R2 · `p6.toolFirst.safetyClosureR1R2.d0.test.ts`) · **KNOWN GAP** global REAL no-write (G-M1-05) |
| B14 Memory B ≠ Truth C | `nora-session.sqlite` / sessionPaths | Product SQLite `oa_*` | Dual owners; Memory B→C only via `MaterializeFromMemoryB` | Session orphan ≠ Truth C write | INV-MEMB-NE-TRUTHC | BEHAVIOR PROVEN — AT TESTED SCOPE (MW1 observers · materialize gates) |
| B15 Project ≠ Cycle | Project aggregate | CycleInstance | OA create/link rules | Cycle ≠ Project identity | INV-PROJ-NE-CYCLE | COVERAGE VERIFIED (schema + cycle create tests) |
| B16 SHE vs historical disposition | SHE CURRENT path | disposition-before-PREPARE HISTORICAL | PRR07 dual admission; both code paths available | SHE: structural PREPARE without prior HD; historical Accept/Refuse/Amend before that PREPARE | INV-SHE-* · HISTORICAL INV-STRUCTURAL-*PREPARE*HD | DOCUMENTED (PRR07) + BEHAVIOR PROVEN — AT TESTED SCOPE (SHE tests) · PRR07 “≠ INTEGRATED_ON_MAIN” wording = HISTORICAL SNAPSHOT (G-M1-14) |

**Column integrity check:** 16 data rows × 7 cells = PASS (pack builder assertion).

---

# L-M2A3 — State & Persistence Ownership Map (updated)

| Store / Concern | Owner | SoT class | Restart | Risk | Flows | Preuve |
|---|---|---|---|---|---|---|
| Product SQLite `oa_*` | Runtime + OA | Truth C | Durable | path config | F01–F15 | COVERAGE VERIFIED |
| Nora session | Nora sessionPaths | Memory B | Path-dependent | orphan ≠ Truth C | F02/F04/F13 | COVERAGE VERIFIED |
| Proposal map | proposalStore | process-local | ≠ sole restart | lost on death | F06/F17 | DOCUMENTED |
| Pending PREPARE offer | pendingGenericPrepareOfferStore | process-local | HD may remain | offer loss | F18 | DOCUMENTED |
| RunState in-process | Nora | ephemeral | same-turn | DEFER | F02 | KNOWN GAP |
| F11b resolve/projection | R-F11B-RES / R-F11B-PROJ | derived read-only | n/a | — | F11b | BEHAVIOR PROVEN tested |
| F11b reconciler | R-F11B-REC | orchestrates Truth C transitions | recoveryRequired halt | not global SoT | F11b | BEHAVIOR PROVEN tested |
| Artifact routing | pure domain | none | n/a | — | F05 | COVERAGE VERIFIED |
| Finalization assessment | derived | derived-read | n/a | ≠ ledger | F15 | BEHAVIOR PROVEN tested |
| Synthesis | oa/synthesis | NON-AUTHORITATIVE | n/a | ≠ Truth C | — | DOCUMENTED |
| OPS1 execution-run | D12 parallel | isolated | ≠ Product spine | — | F20 | DOCUMENTED |

---

# L-M2A4 — Responsibility Dependency Map (updated)

```
UI → PA → F2 (qualify/proposal) → Nora (Memory B)
       ↘ Rec (epistemic)
       ↘ HD (Pilote)
       ↘ ACGC (Artifact continuation) → Proposal · uses Routing + Obligation/Finalization assess
       ↘ prepare EC → inspect → confirm? → authorize (0 Attempt)
       ↘ SHE (0 Attempt) → governedExecute Select (Attempt) → Start (existing) → Cursor?
       ↘ F11b: resolve (RO) → project (RO) → reconcile(observe|execute|continue) → maybe materialize/post-Evidence
       ↘ decideTrajectory after verified HD
```

| Dep | Runtime | Manifest | Note |
|---|---|---|---|
| DEP-ACGC-ART | ACGC→Routing | indexed | COVERAGE VERIFIED |
| DEP-ACGC-ASSESS | ACGC→Finalization assess | indexed | COVERAGE VERIFIED |
| DEP-ACGC-PROP | ACGC→Proposal | indexed | COVERAGE VERIFIED |
| DEP-PROP-HD | Proposal→HD | indexed | COVERAGE VERIFIED |
| DEP-HD-EC | HD→EC | indexed | COVERAGE VERIFIED |
| DEP-EC-ATT | Select creates Attempt from authorized EC | self-edge OBJ-EC→OBJ-EC | **G-M1-15 OPEN** |

---

# L-M2A5 — Coverage, Ambiguity & Gap Register (updated)

### Established (incl. corrections)
Spine ownership · authority B1–B16 · F11b split · Artifact Continuation/Routing/Finalization Assessment.

### Ambiguities residual (non-blocking)
| ID | Item | For |
|---|---|---|
| A-M2A-01 | All Trajectory writes only via decideTrajectory? | M2-B |
| A-M2A-02 | Legacy M3/F3 vs W2 Select path always identical? | M2-B |
| A-M2A-03 | F13 t-a7 vs Product post-Evidence boundary | M2-B/M3 |
| A-M2A-04 | Manifest intent F11b + DEP-EC-ATT | M3 PRR sync GO |
| A-M2A-05 | Exact unique refuse code for Offer≠Auth | optional deepen |

### Gaps OPEN (preserved — none closed)
G-M1-04 · G-M1-05 · G-M1-06 · G-M1-09 · G-M1-10 · G-M1-12 · G-M1-14 · G-M1-15 · G-M1-17 · G-M1-18 · RS-03 · other Formal Closure L-D4 residuals as applicable.

### Special cases
DEP-EC-ATT / F11b index / REAL no-write / D11/D12 — same qualifications as Lot A + R-M2A-01 clarifications.

---

# L-M2A6 — M2-B Entry Contract Candidate (unchanged status)

| Field | Candidate |
|---|---|
| Title | AKG-M2 Lot B — Critical Interaction Understanding |
| Status | **PROPOSAL ONLY — NOT AUTHORIZED** |
| Prerequisite | Lot A Critical Re-Review PASS after Correction Pass 01 + **distinct Morris GO M2-B** |
| Must consume | Corrected L-M2A1…L-M2A6 · M1 L-B/C/D · G-M1-* · D11/D12 |
| Established | Authority chain · F11b split · ACGC/Routing/Finalization ownership · SHE 0 Attempt · Select vs Start |
| Interactions to deepen | E2E SHE→Select→Start→Evidence→reconcile execute/continue · restart F17–F19 · ACGC→Proposal→HD→EC · finalize HD vs assessment · Fake/REAL crossings |
| Gaps conserve | All OPEN |
| Stops | REAL without GO · PRR mutation · Product change · M2-C/M3 without GO |

---

## Exit proof Correction Pass 01

| # | Criterion | Result |
|---|---|---|
| A | R-M2A-01/02/03 treated | **PASS** |
| B | Artifact cards in L-M2A1 | **PASS** |
| C | Resolver ≠ projection ≠ reconciler | **PASS** |
| D | Reconciler intents without global RO claim | **PASS** |
| E | L-M2A2 16×7 | **PASS** |
| F | Proofs justified or NOT VERIFIED | **PASS** |
| G | Select vs Start · 0 Attempt | **PASS** |
| H | L-M2A3/4/5 coherent | **PASS** |
| I | L-M2A6 candidate only | **PASS** |
| J | Gaps not closed | **PASS** |
| K | Product Git unchanged | **PASS** |
| L | No canonical file outside handoff | **PASS** |

---

## Validations / exclusions

Executed: Git Truth · prior handoff read · code show for F11b/ACGC/routing/finalization/authorize/SHE · matrix cell count · porcelain.  
Excluded: npm test/build/lint · HQA · REAL · Product/PRR edits.

---

## Décisions restantes

1. ChatGPT Critical Re-Review of Correction Pass 01.  
2. Morris Lot A exit decision.  
3. Distinct GO for M2-B if authorized.  
4. M3 PRR index sync optional later.

---

## Verdict

# **AKG-M2 LOT A — CORRECTION PASS 01 COMPLETE — READY FOR CHATGPT CRITICAL RE-REVIEW**

| Declaration | Status |
|---|---|
| Product mutations | **NONE** |
| M2-B | **NOT AUTHORIZED** |
| AKG-M3 | **NOT AUTHORIZED** |
| P6 / v3 / REAL | NOT ACQUIRED / NON ADOPTED / NOT PROVEN |

---

## Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (après publish L3).

Vérifier:
1. Correction Register R-M2A-01/02/03 COMPLETE.  
2. L-M2A1 F11b split + Artifact/Finalization cards.  
3. L-M2A2 : 16 lignes B1–B16 · **7 cellules** · preuves non vides/décalées.  
4. Reconciler observe/execute/continue · Select vs Start · 0 Attempt.  
5. Gaps G-M1-* OPEN.  
6. L-M2A6 CANDIDATE ONLY.  
7. main `4ac169b69dfdc571421328811ba062540cc9655f` · handoff SHA/blob · Product unchanged.  
8. Verdict CORRECTION PASS 01 COMPLETE.

---

## Handoff L3 notes (pre-publish)

| Field | Value |
|---|---|
| Proposed message | docs(review-handoff): correct AKG-M2 lot A critical review reserves |
| Prior tip | `86a2b1e701fa5ee70997d5e39cc84a6bffa9f922` |
| Policy | no tip self-reference SHA chase |
