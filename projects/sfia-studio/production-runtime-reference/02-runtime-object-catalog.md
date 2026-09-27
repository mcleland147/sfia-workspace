# 02 — Runtime Object Catalog

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

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

## OBJ-RECOMMENDATION — Recommendation / LifecycleRecommendation

- **Purpose:** Non-authoritative next-step guidance (≠ HumanDecision).
- **Paths:** `lifecycleRecommendation/**`, presentation labels, conversationGuidance.
- **Invariant:** Recommendation ≠ HumanDecision.

## OBJ-RESERVATION — Reservation

- **Purpose:** Bounded reservation context for piloting (cognitive / cycle reservation).
- **Paths:** `reservationInteractionContext.ts`, nora reservation modules.
- **Authority:** recommendation-class; not execution grant.

## OBJ-HD — HumanDecision

- **Purpose:** Durable Pilot decision (accept/refuse/…); authority evidence scoped.
- **Persistence:** `oa_human_decisions`.
- **Paths:** `lib/oa/decision/**`, `f2/recordDecision.ts`, obligation policy HDs in `pilotLifecycleActions.ts`
- **Examples:** Proposal accept; `OBLIGATION_POLICY_REQUIRE_ARTIFACT`.

## OBJ-DECISION-BASIS — DecisionBasis

- **Purpose:** Sealed WHAT/scope feeding ExecutionContract preparation.
- **Paths:** execution-contract domain / F2 accept path.
- **Invariant:** EC cannot expand DecisionBasis WHAT.

## OBJ-CONFIRMATION — Confirmation

- **Purpose:** Explicit confirmation records (≠ HumanDecision).
- **Persistence:** `oa_confirmations`.
- **Invariant:** HumanDecision ≠ Confirmation.

## OBJ-EC — ExecutionContract

- **Purpose:** Prepared execution contract after required Pilot decision/authority.
- **Persistence:** `oa_execution_contracts`.
- **Paths:** `lib/oa/execution-contract/**`
- **Gate:** no EC before required Proposal HD (product path).

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

- **Purpose:** Bounded attempt against an EC; terminal statuses recorded.
- **Persistence:** `oa_execution_attempts`, active pointer, result budget tables.
- **Invariant:** Attempt terminal ≠ Product Result PROVEN.

## OBJ-ARTIFACT — Artifact obligation / materialization

- **Purpose:** Whether deliverable is required (applicability) and materialization continuation.
- **Applicability SoT:** `deriveCycleObligationSnapshot` + `deriveFinalizationApplicability` + assess.
- **Continuation gate:** `activeCycleGovernedContinuation.ts` — REQUIRE_ARTIFACT HD **OR** canonical APPLICABLE∧¬SATISFIED.
- **Routing:** `artifactTargetRouting.ts` (workspace + cycle segment composition).
- **Invariant:** UNKNOWN ≠ APPLICABLE; Applicability ≠ execution authority.

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

## OBJ-MEMORY-B — ProductSqliteSession / Memory B

- **Purpose:** Session working memory, transcript, journal — ≠ Truth C.
- **Persistence:** `nora-session.sqlite` tables: `session_items`, `logical_product_turns`, `pilot_transcript_turns`, `cycle_journal_*`.
- **Paths:** `productSqliteSession.ts`, `sessionPaths.ts`, `cycleJournalStore.ts`
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

