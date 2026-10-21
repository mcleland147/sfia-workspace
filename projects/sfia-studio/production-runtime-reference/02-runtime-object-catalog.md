# 02 — Runtime Object Catalog

**As-implemented @ `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` (REC-01 overlay; prior harvest retained)**

Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**. Fields marked UNKNOWN when not confirmed in harvest.

## OBJ-PROJECT — Project

- **Purpose:** Durable product container (name, objective, binding, workspace key).
- **SoT / persistence:** `oa_projects` (+ payload_json) via OA project store.
- **Create:** `RuntimeApplicationService.createProject` / LocalProjectComposition.
- **Upstream:** server-owned repository binding env (`SFIA_STUDIO_PROJECT_REPOSITORY_*`).
- **Downstream:** LPS, trajectories, cycles, decisions, contracts.
- **Paths:** `lib/oa/project/**`, `lib/vertical-slice-runtime/service.ts`
- **Restart:** survives product DB.

## OBJ-REPO-BINDING — RepositoryBinding

- **Purpose:** Explicit GitHub identity/remote/branch/pathRoot for Project.
- **SoT:** Project payload / binding fields — server-owned; never client-authored.
- **Paths:** project domain + `SFIA_STUDIO_PROJECT_REPOSITORY_*` in `.env.example`
- **Authority:** configuration ≠ authority; enables docs_write composition.

## OBJ-LPS — LivingProjectState

- **Purpose:** Versioned living state; current pointer `oa_lps_current`.
- **Persistence:** `oa_lps`, `oa_lps_current` (OCC via version).
- **Paths:** `lib/oa/project/**`
- **Downstream:** activeCycleInstanceId, ckcResolutionRef projections.

## OBJ-CYCLE — CycleInstance

- **Purpose:** Governed cycle execution unit (type, profile, status).
- **Persistence:** `oa_cycle_instances`.
- **Paths:** `lib/oa/cycle/**`, `pilotLifecycleActions.ts`
- **Invariant:** Project ≠ CycleInstance; old-cycle HD ≠ current authority.

## OBJ-CYCLE-TYPE — CycleType / Catalog

- **Purpose:** Catalogued cycle types + CKC refs + workspace segments.
- **Paths:** `lib/oa/cycle/domain/cycleTypeCatalog.ts`
- **Example:** `cyc:functional-design` drives F14 obligation snapshot when repo-backed.

## OBJ-CKC — CKC / CkcResolution

- **Purpose:** Cycle Knowledge Contract qualification/consumption for cycle type.
- **Paths:** `lib/oa/cycle/domain/ckc*.ts`, F2 `ckcCognitiveContext.ts`
- **Failure codes:** `CKC_*` (see volume 07).

## OBJ-TRAJECTORY — ProjectTrajectory

- **Purpose:** Versioned project trajectory; current pointer with OCC token.
- **Persistence:** `oa_project_trajectories`, `oa_project_trajectory_current`.
- **Paths:** cycle/project trajectory services; greenfield continuity readers.

## OBJ-PROPOSAL — F2 Proposal

- **Purpose:** Structured decision subject presented to Pilot (DECISION_REQUIRED).
- **Persistence:** **process-local** `f2/proposalStore.ts` (Map on globalThis).
- **Notice:** `F2_PROCESS_LOCAL_NOTICE` — conversation/proposal not durable aggregate.
- **Downstream:** HumanDecision via `recordDecision.ts`.
- **Restart:** NOT sole restart authority; subject may need reconstruction/requalification.

## OBJ-PENDING-SUBJECT / OptionSet

- **Purpose:** Effective decision subject / presented options for Pilot.
- **Maturity:** PARTIAL as standalone named aggregate — carried inside Proposal DTO / epistemic markers.
- **Paths:** proposal types, epistemic items table `oa_epistemic_items`.

## OBJ-RECOMMENDATION — Recommendation / LifecycleRecommendation / Work Recommendation

- **Purpose:** Non-authoritative next-step guidance (≠ HumanDecision).
- **Families (AS-IMPLEMENTED):**
  - **Lifecycle Recommendation** — typed lifecycle recommendation path (`lifecycleRecommendation/**`); not Journal Work.
  - **Work Recommendation (ACW)** — durable EpistemicItem `type=Recommendation` with `source=active-cycle-work:nora`, minted only after Studio prospective qualification (P6-HQA-02 / REC-01).
  - **conversationGuidance** — ordinary conversational suggestion; **never** an EpistemicItem.
- **Nora structured candidate (Option B):** Recommendations may carry `trackingRationale`, `relationKind` (`NEW` | `ALREADY_COVERED` | `DISTINCT_RELATED` | `CONTRADICTORY` | `UNCERTAIN`), `relatedRecommendationRef`. Candidate judgment only — not Product authorization.
- **Studio gates:** `qualifyProspectiveWorkRecommendationMaterialization` / `filterActiveCycleWorkItemsForProspectiveMaterialization` in `orchestrateTurn` before `materializeActiveCycleWork`. Coverage `PARTIAL`/`UNAVAILABLE` fail-closed for NEW (and CONTRADICTORY mint under current policy). Exact duplicate / ALREADY_COVERED may still use full Product open facts.
- **Option A typed relation:** optional durable `workRecommendationRelation` on EpistemicItem (`kind`, `targetEpistemicItemId`, `judgmentOrigin=nora_structured_candidate`, `authority=none`) via existing Product SQLite payload — CONTRADICTORY planned for persist; DISTINCT_RELATED systematic durability deferred. Historical replay is existing-first (materialParity); live target applicability required only for **new** mints. Read-time `applicability` (source∧target open) ≠ persisted CURRENT.
- **Paths:** `lifecycleRecommendation/**`, `qualifyProspectiveWorkRecommendationMaterialization.ts`, `materializeActiveCycleWork.ts`, `orchestrateTurn.ts`, `noraProductTurnOutputType.ts`, `deriveWorkRecommendations.ts`, Journal presentation.
- **Invariant:** Recommendation ≠ HumanDecision; no auto-disposition / auto-supersession from CONTRADICTORY.

## OBJ-RESERVATION — Reservation

- **Purpose:** Bounded reservation context for piloting (cognitive / cycle reservation).
- **Paths:** `reservationInteractionContext.ts`, nora reservation modules.
- **Authority:** recommendation-class; not execution grant.

## OBJ-HD — HumanDecision

- **Purpose:** Durable Pilot decision (accept/refuse/…); authority evidence scoped.
- **Persistence:** `oa_human_decisions`.
- **Paths:** `lib/oa/decision/**`, `f2/recordDecision.ts`, obligation policy HDs in `pilotLifecycleActions.ts`
- **Examples:** Proposal accept; `OBLIGATION_POLICY_REQUIRE_ARTIFACT`.

## OBJ-GENERIC-MISSION-HD — Generic Mission HumanDecision (M-HD-01/02 + SHE)

- **Status:** **CURRENT ON MAIN** (D-P6-SHE-01 / Single Human Execute Option A) — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip). DETERMINISTIC at tested scope. ≠ REAL / HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.
- **Purpose (SHE CURRENT):** Structural / HD-required Generic missions may PREPARE an inspectable draft without prior HD; durable OA HumanDecision (`authorize-inspected-execute`) is recorded on Pilot Exécuter, bound to the inspected EC (OA-projected effects — GAP-04). HD is **not** deleted; timing moves from PREPARE to Execute.
- **Purpose (HISTORICAL disposition-before-PREPARE):** bind a durable OA HumanDecision to a sealed mission presentation before disposition-path PREPARE may resume (`verifyGenericMissionHumanDecisionForPrepare`).
- **Durable truth:** `oa_human_decisions` with `decisionBasis.genericMissionContext`, `missionSubjectId`, `presentationDigest`.
- **Process-local carrier:** CURRENT pending Generic PREPARE offer (M-HD-02 remember) enables Pilot Accept/Refuse/Amend seal on the historical path — **≠** SHE inspectable PREPARE; offer alone ≠ Authorization.
- **Gates:** SHE Record requires `sheInspectedExecutionContract` binding + OA EC reload; historical PREPARE verify remains for Accept→PREPARE callers. Historical HD without binding does not unlock a different mission.
- **Non-structural path:** Option 1 / G-D4 may PREPARE with `decisionRefs=[]` when Materiality CURRENT admits — empty refs ≠ structural bypass.
- **UI:** SHE ExecutionSurface Exécuter + `useProductConversation` / `GovernedGenericMissionDecisionCard` (historical disposition).
- **Paths:** `singleHumanExecutePreparedContract.ts`, `recordGenericMissionHumanDecision.ts`, `genericMissionDecisionContinuity.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `genericMissionSubject.ts`
- **Invariant:** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; PREPARE ≠ AUTHORIZE ≠ EXECUTE.

## OBJ-DECISION-BASIS — DecisionBasis

- **Purpose:** Sealed WHAT/scope feeding ExecutionContract preparation.
- **Paths:** execution-contract domain / F2 accept path; Generic Mission seal uses `genericMissionContext` inside DecisionBasis when HD-bound.
- **Invariant:** EC cannot expand DecisionBasis WHAT.

## OBJ-CONFIRMATION — Confirmation

- **Purpose:** Explicit confirmation records (≠ HumanDecision).
- **Persistence:** `oa_confirmations`.
- **Invariant:** HumanDecision ≠ Confirmation.

## OBJ-EC — ExecutionContract

- **Purpose:** Prepared (inspectable) execution contract draft/aggregate. **PREPARE ≠ AUTHORIZE ≠ EXECUTE** — a prepared EC is **not** automatically authorized for launch.
- **Persistence:** `oa_execution_contracts`.
- **Paths:** `lib/oa/execution-contract/**`
- **Gate (scoped — not universal):**
  - **Legacy / Proposal / disposition-before-PREPARE product path:** no EC prepare on that path before the required Proposal / mission-bound HumanDecision (HD-bound PREPARE).
  - **SHE CURRENT (D-P6-SHE-01 / PR #590):** STRUCTURAL / HD-required / UNKNOWN may obtain an **inspectable** PREPARE **without** prior HD when Product qualification admits (`sheDeferredStructuralAuthority` stamp possible). Authority is consumed on Pilot **Exécuter** (`singleHumanExecutePreparedContract`): Inspect binding → applicable HD (if required) → Confirm (if required) → Authorize → launch gates. **0 Attempt** if pre-launch gates fail. Historical disposition-before-PREPARE remains available at its own boundary.
- **Tool-First pathless stamp (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`). DETERMINISTIC at tested scope · REAL no-write enforcement OPEN (`TOOL-FIRST-REAL-NOWRITE`).

## OBJ-INSPECTION — InspectionAttestation

- **Purpose:** EC inspection attestation before launch.
- **Persistence:** `oa_ec_inspection_attestations`.

## OBJ-AUTH-RECEIPT — AuthorityVerificationReceipt

- **Purpose:** Durable authority verification evidence.
- **Persistence:** `oa_authority_verification_receipts`.
- **Invariant:** Capability ≠ Authority.

## OBJ-CAPABILITY — AgentCapability

- **Purpose:** Declared agent capabilities (e.g. `cap:cursor.docs_write`).
- **Authority:** capability presence ≠ permission to execute.

## OBJ-ATTEMPT — ExecutionAttempt

- **Purpose:** Bounded attempt against an AUTHORIZED ExecutionContract; Select→Start→Result lifecycle unit. Distinct from ExecutionContract (PREPARE/inspect/authority).
- **Lifecycle statuses (`ExecutionAttemptStatus` — 7):** `accepted` · `running` · `result_pending` · `succeeded` · `failed` · `timeout` · `cancelled` (`lib/oa/execution-attempt/domain/types.ts`).
  - **Non-terminal / active (`ActiveExecutionAttemptStatus` — 3):** `accepted` · `running` · `result_pending` — hold the active-by-contract invariant.
  - **Terminal (`TerminalExecutionAttemptStatus` — 4):** `succeeded` · `failed` · `timeout` · `cancelled`.
- **Persistence:** `oa_execution_attempts`, `oa_execution_attempt_active`, `oa_execution_attempt_result_budget`.
- **Paths:** `lib/oa/execution-attempt/**` (domain types; `selectExecutionAgent` / `startExecution`); SQLite tables in `lib/oa/project/infrastructure/sqlite/db.ts`; Product R2 gate `features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts`.
- **Manifest index (AKG-M3 G6):** curated `components[]` includes **OBJ-ATTEMPT**; dependency **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (conformance endpoints ∈ components).
- **Invariant:** Attempt **terminal** ≠ Product Result PROVEN (`INV-ATTEMPT-NE-PROVEN`); no execution before authority (`INV-NO-EXEC-BEFORE-AUTH`). PREPARE ≠ AUTHORIZE ≠ EXECUTE · Inspect ≠ Execute.
- **Proof ceiling:** DETERMINISTIC at tested scope (lifecycle + Tool-First R2 Fake/DET) · REAL NOT PROVEN · P6 GLOBAL NOT PASSED · runtime v3 NON ADOPTED.

## OBJ-ARTIFACT — Artifact obligation / materialization

- **Purpose:** Whether deliverable is required (applicability) and materialization continuation.
- **Applicability SoT:** `deriveCycleObligationSnapshot` + `deriveFinalizationApplicability` + assess.
- **Continuation gate (Artifact governed):** `activeCycleGovernedContinuation.ts` — REQUIRE_ARTIFACT HD **OR** canonical APPLICABLE∧¬SATISFIED.
- **Adjacent (P6-HQA-F05-GD4-01):** `no_require_artifact` means a materialization signal without a closure Artifact obligation — **not** Artifact governed continuation and **not** an invented HD. `orchestrateF2` may qualify ordinary documentary work via Generic PREPARE on the same cycle when Product readiness allows (`isOptionalDocumentaryWithoutClosureArtifactBlock`).
- **Routing:** `artifactTargetRouting.ts` (workspace + cycle segment composition).
- **Invariant:** UNKNOWN ≠ APPLICABLE; Applicability ≠ execution authority; optional documentary ≠ REQUIRE_ARTIFACT.

## OBJ-EVIDENCE — Evidence

- **Purpose:** Durable evidence records tied to attempts/artifacts.
- **Persistence:** `oa_evidence` (+ idempotency).

## OBJ-RB — ReviewBundle

- **Purpose:** Review bundle aggregation over evidence.
- **Persistence:** `oa_review_bundles`.

## OBJ-CLAIM — ClaimEvaluation / ContractResult

- **Purpose:** Claim evaluation / contract result semantics post-evidence.
- **Persistence:** `oa_claim_evaluations` (+ idempotency).
- **Invariant:** Technical SUCCESS ≠ READY.

## OBJ-EPISTEMIC — EpistemicItem

- **Purpose:** Durable epistemic markers (observation / decision-subject continuity aids).
- **Persistence:** `oa_epistemic_items`.

## OBJ-CONTRADICTION / OBJ-COG-STOP

- **Purpose:** MW3 contradiction candidates / cognitive STOP signals (non-authoritative alone).
- **Paths:** intentAnalysis cognitive fields; nora-cognitive-runtime MW3 modules.
- **Maturity:** modeled as signals; never silent HumanDecision.

## OBJ-TURN-ORCH — Project assistant / Nora turn orchestration

- **Purpose:** Product/Nora turn spine — `orchestrateTurn` → `runNoraCognitiveTurn` → Agents Runner (`runNoraAgentsTurn`).
- **Paths:** `features/project-assistant/orchestrateTurn.ts`, `actions.ts`, `f2/orchestrateF2.ts`, `lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts` (+ Runner helpers `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `controlledContinuation.ts`, `readCoverage.ts`, `documentaryReadGuidance.ts`, `documentaryBudgetExhausted.ts` — some untracked in manifest). Tool path: `lib/platform/repository/gitLocalReadAdapter.ts`, `lib/platform/tools/toolRouter.ts` (`prepareGitLocalReadDataForModel`), `lib/platform/security/redaction.ts`.
- **Adaptive mission maxTurns (P1):** when Product omits `maxTurns`, `resolveAdaptiveMaxTurns` selects Routine=5 / Focused=8 / Deep|High-Assurance=10 (ceiling **10**, not experimental 12). Explicit **finite** `maxTurns` remains tests/eval override. Explicit **NaN / ±Infinity** fail-closed via existing `normalizeSafeNonNegativeInteger` before Runner dispatch (no adaptive fallback). Natural mono-file documentary synthesis prompts may elevate Focused (≥8, ≤10) without raising the FinOps ceiling.
- **Controlled continuation (P2):** within one Product turn, `MaxTurnsExceededError.state` may resume with absolute `maxTurns` raised toward mission budget; campaign clamps remain imperative.
- **Status honesty (P0):** `limitReached` → Product status `incomplete` (≠ `ok`, ≠ `cognitive_stop`). Incomplete must not materialize durable LR/ACW illegitimately.
- **Documentary reliability (RCD-01 / PR #578 INTEGRATED ON MAIN):**
  - Mono-file documentary guidance may be appended to system instructions (bounded; not a dedicated GDR engine).
  - `git_local_read_file` returns complete-line coverage only; `truncated` ≠ `documentHasMore`; `hasMore` = document remainder **or** content cut.
  - Secrets are redacted **before** complete-line accounting; content is never rebuilt from raw secret lines.
  - Final model-visible JSON envelope is budgeted; coverage fields are reconciled to the payload actually returned (no silent mid-line credit; no false FULL).
  - Envelope-only oversized lines emit `lineExceedsCap` and advance `nextStartLineHint` (bounded skip; no mid-line offset protocol).
  - Soft maxTurns exhaustion discloses honest incomplete documentary perimeter from tool results when facts exist.
- **Invariant:** INV-COG-NE-AUTH — Nora cognition ≠ Product authority.
- **Non-claims:** no durable RunState across process restart; no Product client `maxTurns` DTO; no dedicated documentary engine; Runtime v3 not adopted; GDR REAL quality not proven.

## OBJ-MEMORY-B — ProductSqliteSession / Memory B

- **Purpose:** Session working memory, transcript, journal — ≠ Truth C.
- **Persistence:** `nora-session.sqlite` tables: `session_items`, `logical_product_turns`, `pilot_transcript_turns`, `cycle_journal_*`.
- **Paths:** `productSqliteSession.ts`, `sessionPaths.ts`, `cycleJournalStore.ts`
- **Session-on-resume (P2 / TV01):** `ProductSqliteSession` is passed to the Agents Runner on **every** segment, including native RunState resume, so history persists for the next Product turn (close/reopen SQLite retains items when DB path is stable).
- **Observed SDK limit (FPPC-RES-01):** under the installed Agents Session prepare path, the initial user utterance is often **not** stored as a Session `role:user` AgentInputItem; tool/assistant items and next-turn ModelRequest.input carry the conserved history. Session is not an exhaustive transcript SoT.
- **Invariant:** Memory B ≠ Truth C.
- **Ops note:** path defaults relative to worktree `cwd` unless `SFIA_STUDIO_NORA_SESSION_DB_PATH` is absolute — worktree switches can orphan transcript (observed in campaign ops).

## OBJ-HYBRID — Hybrid Context Envelope

- **Purpose:** Composed cognitive context for turns (studioCognitiveContext / activeCycleCognitiveContext).
- **Paths:** `f2/studioCognitiveContext.ts`, `activeCycleCognitiveContext.ts`

## OBJ-CWP — Cognitive Workload / Strategy

- **Purpose:** Internal CWP assessment influencing strategy — not profile authority.
- **Paths:** intentAnalysis `cognitiveWorkload`; nora CWP decision hooks.

## OBJ-RECOVERY — Recovery / post-Evidence context

- **Purpose:** Continuity after attempt/evidence; recovery ownership projections.
- **Paths:** recovery-related project-assistant modules; EC rehydration; greenfield continuity readers.
- **Maturity:** multiple seams — lineage E2E re-proof deferred to next macro.

## OBJ-MW5-CHALLENGE — MW5 Critical Challenge session

- **Purpose:** Challenge/clarification loop before structurally advancing some turns.
- **Paths:** `criticalChallengeClarification.ts`, `mw5ChallengeSessionStore.ts`, `resolveMw5ProductAuthorityFromOa.ts`
- **Risk:** may re-challenge structurally resolved continuation (campaign observation — see vol 09).

## Harvest addendum — ABSENT / PARTIAL aggregates (repo-verified)

| Concept | Finding | Paths |
|---|---|---|
| ContractResult table | **ABSENT** — subject of ClaimEvaluation + derived verdict projection | `lib/oa/evidence-review/domain/contractResultTypes.ts`, `evaluateContractResult.ts` |
| LifecycleRecommendation table | **ABSENT** — EpistemicItem Recommendation payload | `lib/oa/cycle/application/lifecycleRecommendation/*` |
| Hybrid Context store | **ABSENT** — composer only | `f2/studioCognitiveContext.ts` |
| Dedicated Recovery aggregate | **ABSENT** — projections over Attempt/Evidence/RB/Epistemic | `features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts` et al. |
| CWP persistence table | **ABSENT** — turn/policy signals | `lib/nora-cognitive-runtime/cognitiveWorkloadPolicy.ts` |
| Contradiction standalone table | **ABSENT** — EpistemicItem type + disposition policy | `contradictionDisposition.ts` |
| MaturityAssessment Product SQLite | **PARTIAL** — domain + memory store only (“out of minimal M5”) | `memoryMaturityAssessmentStore.ts` |
| ExecutionRun Product SQLite | **ABSENT** — memory-only parallel BC | `lib/oa/execution-run/**` |
| DebtItem / RiskItem BC | **PARTIAL** — LPS id fields exist; dedicated tables not found | LPS type fields |
| OPS1 ↔ OA unified session | **ABSENT by design** — separate DBs | `lib/ops1/db.ts` vs product OA |

Source: repository harvest at `b4aa09bd` (architecture inventory agent).
