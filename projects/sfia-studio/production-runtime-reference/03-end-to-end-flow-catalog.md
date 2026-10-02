# 03 — End-to-End Flow Catalog

**As-implemented @ `1162b36b14ca2f4f644dcd3da970b25113214b06`**

Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

## F01 — Project creation / greenfield
- **Trigger:** Studio create project
- **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
- **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
- **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)

## F02 — Project load / restart
- **Trigger:** Open `/studio/projects/[id]`
- **Reads:** Product DB Truth C + Nora session continuity action
- **Paths:** `projectAssistantConversationContinuityAction` in `actions.ts`
- **Status:** PARTIAL — transcript availability depends on session DB path colocation

## F03 — Cycle qualification / activation
- **Trigger:** F2 qualification / Pilot lifecycle start
- **Objects:** CycleInstance, CKC, LPS active pointer
- **Paths:** `f2/qualify.ts`, `orchestrateF2.ts`, `pilotLifecycle.start`
- **Status:** COMPLETE deterministic core

## F04 — Nora conversation during active cycle
- **Trigger:** Pilot message via product conversation
- **Steps:** orchestrateTurn → provider analyze/respond → session append → journal tools
- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider
- **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A (pending subject + unrelated topic → answered turn, ZERO HumanDecision, subject intact)

## F05 — Active-cycle Artifact materialization
- **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533)
- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition (D-PC-09); no normal filename micro-gate when cues suffice; clarification only when no coherent cue
- **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
- **Same CycleInstance:** no silent NEW_CYCLE / re-formalization
- **Exit:** Proposal `DECISION_REQUIRED`
- **Product spine (UI server actions):** Send → Decide → PrepareResolvedM3 → ConfirmAndExecuteResolvedM3 → RehydrateEvidenceOutcome
- **Nominal chat-first spine:** Send (proposal) → Send (disposition) → PrepareResolvedM3 → … — `projectAssistantDecideAction` remains available but is no longer a required UX step
- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher, `actions.ts` Product actions
- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07)
- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro)
- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact

## F06 — Proposal / Decision Subject / options
- **Trigger:** F2 turn producing `f2_proposal`
- **Persistence:** process-local proposal store; durable pending marker + `PresentedOptionSet` Observation in Epistemic
- **Sealed set without a CTA (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** the `PresentedOptionSet` is materialised server-side when a chat-first disposition needs it (`resolveChatFirstPilotDecision` → existing `proposeTrajectoryOptions` with the resolved `proposalId`), and the UI keeps the pre-existing FR-01 auto-instruct for a sole recoverable pending subject. Materialisation is **lazy, on the disposition turn** — NOT at `DECISION_REQUIRED` mint time. Reserve: an unbound subject that is never disposed of stays unbound (see vol 09).
- **UI role:** `TrajectorySurface` is read/inspection/audit on the nominal path (`decisionWorkflowMode="chat_first"`); « Instruire les options » and per-option « Décider » are only rendered under `decisionWorkflowMode="legacy_cta"` (harvest / RETIRE LATER proofs). Server actions `w2ProposeTrajectoryOptionsAction` / `w2DecideTrajectoryAction` are unchanged.
- **Status:** COMPLETE for in-process; PARTIAL across restart

## F07 — HumanDecision on Proposal
- **Trigger (legacy):** Pilot accept/refuse via `projectAssistantDecideAction` → `recordDecision.ts`
- **Trigger (nominal, chat-first Work only):** conversational disposition on `projectAssistantSendAction`. `analyzeIntent` emits a NON-AUTHORITATIVE `pilotDecisionCandidate` (accept|refuse|amend|defer|none|ambiguous). `orchestrateF2` resolves **Work / Proposal decision subjects only** via `resolveChatFirstPilotDecision` → existing `decideTrajectory`. Chat « oui » never START/FINALIZE a Lifecycle Recommendation.
- **Work family:** sealed option ref (`PROPOSAL_SUBJECT_PURSUE_REF` / `REFUSE` / `AMEND`) via existing `decideTrajectory`; OptionSet Work Recommendation status synced (`disposeWorkRecommendationAfterDecision`). Journal > Recommandations projects **Work** Recommendations only.
- **Lifecycle family:** explicit Studio actions preserved — prepareCandidateTrajectory / approval / prepareCycle / START / FINALIZE on the right-panel lifecycle surface. Not condensed into chat disposition.
- **Defer (Work):** durable Pilot HumanDecision + non-blocking Reservation stamp + Work Recommendation `resolved` + Proposal DecisionRef closure; honest target from CURRENT `NEXT_CYCLE` `targetCycleTypeId` or `resolveHonestReservationDeferTarget` (target lookup only). Missing target ⇒ `defer_target_unresolved` (conversation open). No `DEFERRED` enum invented.
- **Authority boundary:** the candidate is never a HumanDecision. Model-supplied option/proposal/optionSet refs are never read. `none` / `ambiguous` / no unique eligible Work subject / multiple effective pending subjects ⇒ **ZERO HumanDecision**; the conversation stays open. Lifecycle CURRENT alone never yields a chat START/FINALIZE.
- **Paths:** `f2/intentAnalysis.ts`, `f2/orchestrateF2.ts`, `w2/resolveChatFirstPilotDecision.ts`, `w2/deferWorkRecommendation.ts`, `w2/decideTrajectory.ts` → `oa_human_decisions`; lifecycle → existing `pilotLifecycle` / prepare-start actions
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` (Work + hybrid non-START proofs)
- **Status:** COMPLETE durable Work path (deterministic); Lifecycle explicit Studio path preserved

## F08 — EC PREPARE
- **Trigger:** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
- **Paths:** `prepareAndResolveM3ProductPath` → `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis WHAT; Product UI seals N2 Pilot authority (legacy omit → MORRIS)
- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (front-door oracle)

## F09 — EC inspect / Confirmation / authority
- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
- **Product path:** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
- **Status:** COMPLETE tables/services; Product E2E at tested scope

## F10 — Governed execution (docs_write / Cursor)
- **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
- **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
- **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro); Fake docs-write proven in front-door oracle; deterministic report envelope + runtime enforcement AS-IMPLEMENTED

## F11 — Attempt terminal → Evidence → ReviewBundle
- **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
- **Docs_write durable artifact (POST-EXECUTION-…-01):** when hot-worktree bytes are available at completion, Artifact Evidence uses `external_payload_ref` under existing `mission-result-refs/refs/attempts/…/docs-write-artifact` (same filesystem Evidence layout as MissionResult — **no new store/table**). CursorExecutionReport claim is persisted alongside as `cursor-execution-report.json` on the nominal path (CLAIM, not Evidence). Independent digest verify retained.
- **Status:** COMPLETE domain; Product E2E lineage proven at tested scope (Fake); docs_write durable review material AS-IMPLEMENTED at tested scope

## F11b — Product Continuity / Shared Knowledge (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01)

- **Shared Product Resolution (READ-ONLY):** `resolveProductExecutionContext` composes Project-bound EC / Attempt / Cursor CLAIM / Artifact / Evidence / RB / CE / post-Evidence Recommendation without a new store or knowledge domain. Evidence/RB/CE resolved via current Contract Result CE + `contractResultBindings.evidenceRefs`, then validated by canonical `contractResultBindingsMatchCurrentFacts` against Attempt-bound snapshot (Project / Cycle / EC id / version / semantic fingerprint / Attempt / RB id+frozenVersion / ordered Evidence refs). Never ID-prefix or repository-order preference; ambiguous multi-Evidence without CE → `EVIDENCE_LINEAGE_AMBIGUOUS`.
- **Execution Continuity Projection:** `deriveGovernedExecutionContinuityProjection` derives reachable stages only: PRE_EXECUTION | ATTEMPT_ACCEPTED | RUNNING | PRODUCT_MATERIALIZATION_PENDING | POST_EVIDENCE_PENDING | POST_EVIDENCE_COMPLETE | RECOVERY_REQUIRED. Closed lineage integrity codes (e.g. `CONTRACT_RESULT_BINDINGS_MISMATCH`, `CLAIM_EVALUATION_AMBIGUOUS`, `EVIDENCE_LINEAGE_AMBIGUOUS`) project to `RECOVERY_REQUIRED`; query errors such as `ATTEMPT_NOT_FOUND` remain resolve errors.
- **Server Reconciler:** `reconcileGovernedExecution` (intent observe|execute|continue) owns deterministic next steps; stops immediately on `recoveryRequired` without rematerialize / new Attempt / new CE. TrajectorySurface is command+projection only (no Select→Start→Complete→Materialize ownership). Restart after ACCEPTED and during RUNNING reuses the same Attempt (deterministic tested scope).
- **Nora:** `product_execution_context_get` tool (project-bound); W3-C and conversation both invoke shared `runNoraCognitiveCore` → Agents Runner (`runNoraAgentsTurn`); post_execution mode disables tools/Memory B/hosted search/MW5.
- **Status:** DETERMINISTIC at tested scope (incl. CORRECTION PASS 02 canonical lineage); ZERO REAL this macro; runtime v3 NON ADOPTED

## F12 — ContractResult / ClaimEvaluation
- **Paths:** claim evaluation tables/services; docs_write automatic `completeDocsWriteClaimEvidenceCompletion` while hot worktree / durable absolute path available
- **Claim-completion propagation:** RecordResult **consumes** the completion result via closed `classifyDocsWriteClaimCompletionFailure` — only `CONFORMITY_HEADINGS_MISSING` / `ARTIFACT_EMPTY` → Product NOT_PROVEN/UNCLAIMED; all oracle/integrity/lineage/unknown codes → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`. No startsWith/includes catch-alls.
- **Honesty:** Attempt `succeeded` ≠ Product PASS; NOT_PROVEN remains when conformity Evidence insufficient
- **Status:** PRESENT; automatic qualification AS-IMPLEMENTED; journey REAL proof PARTIAL / NOT PROVEN this macro

## F13 — Nora post-Evidence
- **Handoff (POST-EXECUTION-…-01):** `runW3cPostEvidenceLoop` and `rehydrateW3cPostEvidenceFromLps` share `projectW3cExecutionReportSurfaceFromDurable` — loads durable artifact review material + Cursor report into `PostEvidenceAnalysisFacts` / `executionReport` (`artifactReviewMaterial` FULL/PARTIAL, never invent FULL). Fresh and restart/rehydrate paths project the same `W3cExecutionReportSurface`. No fabricated « sans CursorExecutionReport » surface. Nora must not depend on generic worktree `read` that yields `PATH_NOT_ALLOWED`.
- **UI:** TrajectorySurface shows business-first « Rapport d'exécution » from `postEvidence.executionReport` when present; rehydrate button remains recovery-only (not nominal step); after restart the report is restored from durable refs without a new Nora call solely for the report
- **Status:** DETERMINISTIC fresh + restart handoff proven at tested scope; REAL SprintBoard re-proof requires distinct Morris GO

## F14 — LPS / trajectory continuation or recovery
- **Paths:** trajectory services; recovery ownership continuity; `projectAssistantRehydrateEvidenceOutcomeAction`
- **Status:** PARTIAL (greenfield/recovery fixes integrated; front-door rehydrate proven at tested scope)

## F15 — Cycle finalization
- **Paths:** `assessFinalization.ts`, `deriveUndisposedRecommendations.ts`, lifecycle finalize decision path
- **Undisposed Recommendations (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** finalization fails closed while an **active** Recommendation published on a presented governed subject (`source` = `optset:…`) is not closed by an active `DecisionRef`. Blocker code `undisposed_recommendations`, reported through the existing `blockers` obligation family — no second engine, no new obligation family. `resolved` / `rejected` / `superseded` Recommendations never block. An unreadable Epistemic source reports `recommendation_source_unreadable` and stays blocking.
- **Explicitly NOT an authority:** Cycle Journal open points are not Truth C and do not gate finalization; only existing Reservation mechanisms do.
- **Proof at tested scope:** `undisposedRecommendations.d0.test.ts`, `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case K
- **Status:** COMPLETE assessment engine; Pilot finalize HD required

## F16 — Replan
- **Invariant:** No silent replan
- **Status:** PARTIAL — explicit replan seams exist; silent replan forbidden

## F17 — Restart at Proposal pending
- **Expected:** process-local proposal may be absent → product subject-read (`w2ReadActiveDecisionSubjectAction`) hydrates recoverable snapshots / pending reinstruction; Truth C intact; no invented HD
- **Product resume (legacy arm, still supported):** explicit `reinstructionOfProposalId` on Send, then Decide — proven by `productCycleE2eStabilization.frontDoor.d0.test.ts`
- **Product resume (nominal, chat-first):** the Pilot disposes of the pending subject in the conversation. The server owns the continuity: after a chat-first AMEND closes the subject, the next formalization turn needs **no** client-supplied `reinstructionOfProposalId`. A non-reconstructible pending subject yields `no_eligible_subject` (ZERO HumanDecision), never an invented decision.
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case D
- **Status:** DETERMINISTIC proven at tested scope (both front-door oracles); Proposal store remains process-local

## F18 — Restart after HD / before execution
- **Survives:** HD, LPS, cycle; EC if prepared
- **Status:** PARTIAL proven by domain tests

## F19 — Restart post-Evidence
- **Survives:** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
- **Status:** PARTIAL — front-door rehydrate assertions at tested scope

## F20 — Legacy / historical compatibility
- **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
- **Historical UI surfaces (still routed):** `/cycle-actif`, `/decision`, `/synthese` (nav tier `historical`; `/` still redirects to `/synthese`; POC fixture harness — ≠ OA Truth C)
- **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
- **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
- **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)

## Generic Execution → Review → Result (CURRENT — Correction Pass 02 candidate)

Nominal Product path (architecture D-ER; delivery candidate, LOCAL CANDIDATE / NOT INTEGRATED ON MAIN):

HumanDecision (durable DecisionBasis + local-write seal) → Generic EC `studio.cursor.generalist.execute` (authorized `EFFECT_CLASS:local-write` / filesystem.create|modify — **≠** Product write taxonomy) → Cursor Generalist → isolated Git worktree → CursorExecutionReport [CLAIM] + native Cursor Review End Of [CLAIM executor-only; missing ⇒ PARTIAL / no Studio synthesis] → Studio `NodeLocalGitStatusDiffPort` / `observeVerifiedChangeSet` [FACTS] (Git delta only; OBSERVED vs UNAVAILABLE — never invent empty FACTS; never full-repo scan in Git mode) → Generic Execution Review Material → Verification Evidence `ev:execution-review:*` + Mission Evidence → same ReviewBundle / ClaimEvaluation / ContractResult (mismatch ⇒ ≠ PASS) → Product Resolution (`executionReview`) → scheduled UI continue (no abandonment counter) + remount auto-resume → Nora Deep Review (shared Agents core; actual `execution_review_*` tool calls) → Result Surface (real fields + Pilot `w2ReadExecutionReviewItemAction` by itemId).

CURRENT: docs_write specialized persist remains TRANSITIONAL dual-write bridge. Anti-stall: mounted schedule + remount from durable projection; Reconciler remains owner of transitions. Proof ceiling: **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.
