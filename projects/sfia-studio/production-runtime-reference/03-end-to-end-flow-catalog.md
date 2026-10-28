# 03 — End-to-End Flow Catalog

**As-implemented @ `6a4374ed54cf346d16c11b995eec772090c81807`** (First Framing chat-first continuity overlay)

Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

**Epistemic split (post-merge 2026-10-26) — RepositoryBinding + docs_write Product specialization:** **CURRENT ON MAIN** (`fec4e65d` / PR #618 MERGED): **RepositoryBinding RETIRED**; **docs_write Product admission RETIRED**. `projectWorkspaceKey` / `projects/<key>` routing **PRESERVED**. Sentences below that still describe Binding or docs_write Product admission as live Product behaviour are **HISTORICAL SNAPSHOTS** (true on `7db8afd7` before merge). **H4 / G-REAL / G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**.

## Overlay — CORR-02 Git target fidelity (CURRENT ON MAIN — PR #618 MERGED — 2026-10-26)

**BOUNDED FLOW IMPACT — F10 only.** Protected Git start seals identity↔remote and accepts a managed checkout only when `origin` matches the sealed identity. **NO SEMANTIC IMPACT** on unrelated flows (F01–F09, F11–F20), including D-PC-09 workspace routing (`projects/<key>`). FS→SHA continuation reading stays historical-only on `execution_attempt:docs_write` Evidence; it does not restore docs_write Product admission. Pre-merge LOCAL DELIVERY / NOT ON MAIN wording = **HISTORICAL**. **≠** REAL.

## F01 — Project creation / greenfield
- **Trigger:** Studio create project
- **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
- **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
- **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)
- **RepositoryBinding:** **CURRENT ON MAIN after #618:** CreateProject has **no** `repositoryBinding`; env keys removed from CreateProject preflight / `.env.example` as Product SoT; `projectWorkspaceKey` still set. **HISTORICAL** before merge: server-owned projection from `SFIA_STUDIO_PROJECT_REPOSITORY_*` at create on `7db8afd7`.
- **Overlay — AKG-M5 L2-D2 (CURRENT ON MAIN — PR #614; DEFAULT OFF / NOT ACTIVATED; main tip PR #617 activation prep, exclusive still OFF):** Product create remains OA Truth C (`prj:*` / `oa_*`). When `SFIA_STUDIO_LOCAL_OA_EXCLUSIVE` trim=`"1"` (future **G-ACTIVATION** only), D1 create/confirm paths fail-closed — **no dual-write**, **no** `proj-*`→`prj:*` mapping. O-01 DET proves create → durable LPS objective → list/workspace UI (« comprendre ») on disposable SQLite. Marker default OFF preserves pre-L2-D2 D1 operator paths. **≠** live Studio activation / HTTP E2E.

## F02 — Project load / restart
- **Trigger:** Open `/studio/projects/[id]`
- **Reads:** Product DB Truth C + Nora session continuity action
- **Paths:** `projectAssistantConversationContinuityAction` in `actions.ts`
- **Status:** PARTIAL — transcript availability depends on session DB path colocation

## F03 — Cycle qualification / activation
- **Trigger (legacy / Studio):** F2 qualification / Pilot lifecycle start controls
- **Trigger (First Framing chat-first, AS-IMPLEMENTED @ `6a4374ed`):** conversational continuity after a CURRENT Framing Recommendation — **descriptive chain, not automation**:
  Recommendation CURRENT → candidate trajectory (prepare) → examinable presentation (`FramingTrajectoryExamination` / Framing Continuity Card) → HumanDecision when structural (trajectory approval) → prepare cycle → **explicit Pilot START** (intent `attempt_start`, never a bare recommendation accept) → LPS re-read → conversational continuity while active
- **Objects:** CycleInstance, CKC, LPS active pointer; Framing continuity snapshot (phase projection only — ≠ Truth C)
- **Paths:** `f2/qualify.ts`, `orchestrateF2.ts`, `f2/resolveChatFirstCycleStartGate.ts`, `f2/chatFirstFramingContinuity.ts`, `preCycleCandidateTrajectoryActions.ts`, `pilotLifecycle.start` (Studio KEEP)
- **Authority:** no silent HD; no auto-START; already-active + START intent → honest no-op (no second CycleInstance); Pilot-facing START copy must not expose internal `cyc:…` / `activeCycleInstanceId`
- **Status:** COMPLETE deterministic core + First Framing START gate DETERMINISTIC at tested scope (ZERO REAL claim)
- **Proof at tested scope:** `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`, `chatFirstFramingContinuity.frontDoor.d0.test.ts`, `chatFirstFramingContinuity.d0.test.ts`

## F04 — Nora conversation during active cycle
- **Trigger:** Pilot message via product conversation
- **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
- **Nora Generic PREPARE solicitation (D-ER-16 / Option 2 — CURRENT ON MAIN at tested scope):** `orchestrateTurn` may expose Agents tool `request_generic_execution_prepare` wired to Product `solicitGenericExecutionPrepare`. Cognition may **solicit** PREPARE only. Tool params never create HumanDecision, never create ExecutionAttempt, never authorize or execute. Authority remains OA/W2 Product admission (F08). DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE via `p6.der16.genericNoraToolInvocation.d0.test.ts` (Fake). ≠ REAL / OpenAI LIVE.
- **Tool-First mission fields (CURRENT ON MAIN — PR #588 merge `304e30e8`):** tool / orchestration may forward structured `repositoryMutation` (`none`/`read`/`write`/`unknown`) into Product mission admission. Nora proposal alone is **not** sufficient authority for NON_STRUCTURAL pathless qualification (see F08 R1). Paths: `productExecutionAgentsTools.ts`, `orchestrateTurn.ts`.
- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
- **Nora autonomy (PR #577 INTEGRATED ON MAIN — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality. Merge `d8ceb8ad`.
- **Documentary cognitive reliability / RCD-01 (PR #578 INTEGRATED ON MAIN — DETERMINISTIC):** Guided Document Review acquisition uses the native tool path `git_local_read_file` → `GitLocalReadAdapter` → `ToolRouter` (`prepareGitLocalReadDataForModel`) → Agents Runner tool result. Coverage metadata (`returnedStartLine`/`returnedEndLine`/`completeLineCount`/`nextStartLineHint`/`truncated` vs `documentHasMore`) must describe the **final model-visible** payload after redaction and JSON envelope capping (`CT_MAX_TOOL_RESULT_CHARS` = 12000). Partial lines are never credited; redacted lines still progress; a line that fits the adapter but not the final envelope is skipped via explicit `lineExceedsCap` (no infinite same-line retry; no mid-line offset protocol). On soft `maxTurns` exhaustion, restitution discloses honest incomplete coverage from tool crumbs when available (no invented FULL / HumanDecision / Deliverable). Natural mono-file documentary prompts elevate Focused adaptive budget (≥8, ≤ ceiling 10) without raising FinOps ceilings. Proof: `p6.nora.min09.documentaryReliability.d0.test.ts` R1–R7 — **not** GDR REAL quality. Merge `44006648` / source `9b855d8d`.
- **Work Recommendation materialization (P6-HQA-02 / REC-01):** after a coherent Nora Product turn, Studio may mint durable ACW EpistemicItems via `materializeActiveCycleWork`, but only after `filterActiveCycleWorkItemsForProspectiveMaterialization` (bounded cognitive trust). Nora coverage `COMPLETE`|`PARTIAL`|`UNAVAILABLE` is authoritative for novelty claims — Product reader available ≠ COMPLETE. Ordinary suggestions stay in `conversationGuidance` (zero WR). Historical WR never mutated on the prospective path. `itemSourceIndexes` preserve ACW identity under filter/replay. CONTRADICTORY may persist a typed relation envelope (Option A); never auto-HD / auto-disposition.
- **Non-blocking conversation (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** a pending governed decision subject no longer turns an unrelated or informative turn into a transport error. `assertExplicitReinstructionGate` stays fail-closed (no competing `DECISION_REQUIRED` is minted) but `orchestrateF2` now renders `EXPLICIT_REINSTRUCTION_REQUIRED` / `AMBIGUOUS_PENDING_REINSTRUCTION` as a conversational clarification turn, so the composer never dead-ends.
- **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope; REC-01 WR path DETERMINISTIC at tested scope (ZERO REAL claim)
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`; REC-01 — `qualifyProspectiveWorkRecommendationMaterialization.d0`, `activeCycleCognitiveWork.d0` (Option A reload + historical replay), `p6.hqa.rec01.minimalStabilization.d0`, Option B context tests

## F05 — Active-cycle Artifact materialization
- **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
- **Boundary (CI-HQA-F01 / AS-IMPLEMENTED):** explicit NEW_CYCLE formalization (« préparer / créer / démarrer un cycle … », even when a future deliverable/note is mentioned) is **not** Artifact continuation. `hasExplicitNewCycleFormalizationSignal` keeps those turns on `NEW_CYCLE_FORMALIZATION` so absence of an active cycle does not fail-closed as `no_active_cycle` before `createCycle`. Natural Artifact cues still cover produce/write/materialize of a documentary object under an active cycle (F-C9-04).
- **Admission (Artifact governed continuation):** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533) — unchanged; obligations are not bypassed by Generic PREPARE.
- **Adjacent hand-off (P6-HQA-F05-GD4-01 / PR #586 AS-IMPLEMENTED on main):** ordinary documentary materialization recognized by ACGC but **without** a closure Artifact obligation resolves as `ACTIVE_CYCLE_CONTINUATION_BLOCKED` / `no_require_artifact` (or, for a natural signal without a docs_write-compatible effect — **CURRENT ON MAIN**; the 2026-10-25 local candidate no longer admits that Product effect — may surface `NEW_CYCLE_FORMALIZATION` / `no_compatible_artifact_effect` — see vol 08 oracle semantics). When the turn is actionable for Generic PREPARE, orchestration may **hand off to F08** via `isOptionalDocumentaryWithoutClosureArtifactBlock`. This is **not** Artifact governed continuation, **not** an invented `REQUIRE_ARTIFACT` HumanDecision, and **not** proof that a new CycleInstance was created. Full Generic PREPARE admission/authority lives under **F08**, not F05. **NOT MERGED** applies only to the local retirement, not to PR #586.
- **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition under `projects/<projectWorkspaceKey>/` (D-PC-09 workspace routing — **PRESERVED**); no normal filename micro-gate when cues suffice; clarification only when no coherent cue. The D-PC-09 **RepositoryBinding projection** is **RETIRED ON MAIN** via #618 (historical on `7db8afd7`).
- **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
- **Same CycleInstance:** no silent NEW_CYCLE / re-formalization on the Artifact path
- **Exit (Artifact path):** Proposal `DECISION_REQUIRED`
- **Exit (adjacent → F08):** qualification / pending Generic PREPARE offer or inspectable EC draft under F08 gates — PREPARE ≠ AUTHORIZE; AUTHORIZED ≠ EXECUTED
- **Product spine (UI server actions):** Send → Decide → PrepareResolvedM3 → ConfirmAndExecuteResolvedM3 → RehydrateEvidenceOutcome
- **Nominal chat-first spine:** Send (proposal) → Send (disposition) → PrepareResolvedM3 → … — `projectAssistantDecideAction` remains available but is no longer a required UX step
- **Paths:** `activeCycleGovernedContinuation.ts`, `orchestrateF2.ts` (hand-off), `artifactTargetRouting.ts`, Fake matcher (`__P6_OPTIONAL_DOCUMENTARY_MD__`), `actions.ts` Product actions
- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07); CI-HQA-F01 — `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`; optional documentary routing — `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts`
- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro); adjacent Generic PREPARE routing **DETERMINISTIC at tested scope** (PR #586 + candidate consolidation)
- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle (Artifact path); satisfied artifact; other exclusive BLOCKED reasons

### Routing table — NEW_CYCLE / ACGC / F08 / Tool-First / SHE (documentary · AKG-M3 G6)

Descriptive Product routing map for the same conversational front door. **Does not** close **B-M2B-03** (same utterance → mode ambiguity remains OPEN). Not a parallel execution engine.

| Branch | Entry signal | Gate / refuse | Product responsibility | Authority | Exit | Proof / ceiling |
|---|---|---|---|---|---|---|
| **NEW_CYCLE_FORMALIZATION** | Explicit new-cycle language (`hasExplicitNewCycleFormalizationSignal`) even if a future deliverable is mentioned | Not Artifact continuation; avoid `no_active_cycle` fail-closed before `createCycle` | Formalization / `createCycle` path | Pilot/Product cycle authority | New CycleInstance path | F05 CI-HQA-F01 DET · ≠ REAL |
| **ACTIVE_CYCLE_GOVERNED_CONTINUATION (ACGC)** | Active cycle + Artifact obligation (REQUIRE_ARTIFACT HD **OR** APPLICABLE∧¬SATISFIED) | Refuse invent HD; UNKNOWN≠APPLICABLE | `activeCycleGovernedContinuation` / materialization | Artifact gates ≠ exec authority | Proposal / materialization continuation | F05 DET · B-M2B-03 OPEN |
| **ACTIVE_CYCLE_CONTINUATION_BLOCKED** | e.g. `no_require_artifact` | Blocked reason only | Clarification / refusal messaging | No invented REQUIRE_ARTIFACT | May set `eligibleForGenericPrepareRouting` when optional documentary | F05 GD4-01 DET |
| **Adjacent → F08 Generic PREPARE** | Optional documentary without closure Artifact + conversation admission + actionable/`execution_request` + prepareGo/readiness | PREPARE≠AUTHORIZE; Nora solicit≠authority | `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft` | OA/W2 Product admission (F08) | Inspectable EC draft / pending offer | F08 + D-ER-16 Fake DET |
| **Tool-First pathless NON_STRUCTURAL** | Positive non-mutating claim (R1: `read_only` **OR** `repositoryMutationDeclared ∈ {none,read}`) | Absent positive claim / write/unknown/contradiction → refuse | Materiality→PREPARE qualification | Product admission ≠ Cursor sandbox | Pathless EC stamp possible | Tool-First R1 DET · REAL OPEN |
| **SHE structural / Exécuter** | STRUCTURAL / HD-required / UNKNOWN after inspectable PREPARE | INV-NO-EXEC-BEFORE-AUTH; STOP · 0 Attempt if pre-launch fails | Inspect → HD/Confirm/Authorize → Attempt | HumanDecision / receipts on Exécuter | AUTHORIZED EC → F10 Select/Start | SHE DET (PR #590) · REAL OPEN |
| **Nora Generic PREPARE solicitation** | Agents tool `request_generic_execution_prepare` | Never creates HD/Attempt/execute | Cognition solicits only | Remains F08 Product | Solicitation only | D-ER-16 Fake |
| **Ambiguity / clarification / STOP** | Utterance without qualifying signal | Do not invent mode | Ask clarification | No silent PREPARE | Clarification / refuse | B-M2B-03 scenarios OPEN |

## F06 — Proposal / Decision Subject / options
- **Trigger:** F2 turn producing `f2_proposal`
- **Persistence:** process-local proposal store; durable pending marker + `PresentedOptionSet` Observation in Epistemic
- **Sealed set without a CTA (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** the `PresentedOptionSet` is materialised server-side when a chat-first disposition needs it (`resolveChatFirstPilotDecision` → existing `proposeTrajectoryOptions` with the resolved `proposalId`), and the UI keeps the pre-existing FR-01 auto-instruct for a sole recoverable pending subject. Materialisation is **lazy, on the disposition turn** — NOT at `DECISION_REQUIRED` mint time. Reserve: an unbound subject that is never disposed of stays unbound (see vol 09).
- **UI role:** `TrajectorySurface` is read/inspection/audit on the nominal path (`decisionWorkflowMode="chat_first"`); « Instruire les options » and per-option « Décider » are only rendered under `decisionWorkflowMode="legacy_cta"` (harvest / RETIRE LATER proofs). Server actions `w2ProposeTrajectoryOptionsAction` / `w2DecideTrajectoryAction` are unchanged.
- **Status:** COMPLETE for in-process; PARTIAL across restart

## F07 — HumanDecision on Proposal / Framing trajectory
- **Trigger (legacy):** Pilot accept/refuse via `projectAssistantDecideAction` → `recordDecision.ts`
- **Trigger (nominal, chat-first Work):** conversational disposition on `projectAssistantSendAction`. `analyzeIntent` emits a NON-AUTHORITATIVE `pilotDecisionCandidate` (accept|refuse|amend|defer|none|ambiguous). `orchestrateF2` resolves **Work / Proposal decision subjects only** via `resolveChatFirstPilotDecision` → existing `decideTrajectory`. Chat « oui » on a Work Recommendation never START/FINALIZE.
- **Work family:** sealed option ref (`PROPOSAL_SUBJECT_PURSUE_REF` / `REFUSE` / `AMEND`) via existing `decideTrajectory`; OptionSet Work Recommendation status synced (`disposeWorkRecommendationAfterDecision`). Journal > Recommandations projects **Work** Recommendations only.
- **Lifecycle / Framing family (AS-IMPLEMENTED split):**
  - **Studio KEEP:** prepareCandidateTrajectory / approve / prepareCycle / START / FINALIZE remain available on lifecycle controls.
  - **First Framing conversational path (bounded):** Recommendation CURRENT → prepare candidate → **examinable** trajectory presentation → structural HumanDecision for trajectory when required → prepare cycle → **explicit** Pilot START intent (`resolveChatFirstCycleStartGate` / `attempt_start`). A bare recommendation accept at `ready_to_start` does **not** start. Not every Lifecycle transition is chat-first — FINALIZE and non-Framing Lifecycle dispositions remain explicit Studio / non-chat unless separately proven.
- **Defer (Work):** durable Pilot HumanDecision + non-blocking Reservation stamp + Work Recommendation `resolved` + Proposal DecisionRef closure; honest target from CURRENT `NEXT_CYCLE` `targetCycleTypeId` or `resolveHonestReservationDeferTarget` (target lookup only). Missing target ⇒ `defer_target_unresolved` (conversation open). No `DEFERRED` enum invented.
- **Authority boundary:** Recommendation / `pilotDecisionCandidate` never equals HumanDecision. Model-supplied option/proposal/optionSet refs are never read. `none` / `ambiguous` / no unique eligible Work subject / multiple effective pending subjects ⇒ **ZERO HumanDecision**. Lifecycle CURRENT alone never invents HD or auto-START. Trajectory examination insufficient ⇒ validation CTA disabled (no invented substance).
- **Paths:** `f2/intentAnalysis.ts`, `f2/orchestrateF2.ts`, `f2/chatFirstFramingContinuity.ts`, `f2/resolveChatFirstCycleStartGate.ts`, `preCycleCandidateTrajectoryActions.ts`, `w2/resolveChatFirstPilotDecision.ts`, `w2/deferWorkRecommendation.ts`, `w2/decideTrajectory.ts` → `oa_human_decisions`; lifecycle → existing `pilotLifecycle` / prepare-start actions
- **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` (Work); Framing — `chatFirstFramingContinuity*.d0.test.ts`, `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`, `p6.ux.recommendationContinuity.ui.test.tsx`
- **Status:** COMPLETE durable Work path (deterministic); First Framing START conversational path DETERMINISTIC at tested scope; other Lifecycle transitions Studio-preserved; ZERO REAL claim

## F08 — EC PREPARE
- **Trigger (legacy M3):** After required HD / authority path (`projectAssistantPrepareResolvedM3Action`)
- **Trigger (Generic PREPARE — D-P6-SHE-01 CURRENT ON MAIN — PR #590 lineage):** F2 chat-first GO / Nora tool solicitation (F04) / adjacent F05 hand-off → Product `solicitGenericExecutionPrepare` / `prepareGenericExecutionContractDraft`
- **Mission qualification:** Product readiness (`assessGenericMissionPrepareReadiness`) + authoritative Materiality CURRENT (`resolveAuthoritativeProductMateriality`). Materiality UNKNOWN may yield an **inspectable** PREPARE stamp; UNKNOWN still **blocks Execute** (fail-closed — no silent NON_STRUCTURAL elevation).
- **Chemin SHE (CURRENT — D-P6-SHE-01 Option A):** STRUCTURAL / HD-required / UNKNOWN may PREPARE an **inspectable** draft **without** a prior HumanDecision (`decisionRefs` may be empty; Product may stamp `sheDeferredStructuralAuthority`). PREPARE ≠ AUTHORIZE ≠ EXECUTE. Authority is consumed on Pilot **Exécuter** (`singleHumanExecutePreparedContract`): inspect binding (id/version/fingerprint) → record applicable HD (`authorize-inspected-execute`) from OA EC effects (GAP-04) → Confirm/Authorize OA internals → ExecutionAttempt. No silent HD; no Attempt if pre-launch gates fail.
- **Chemin A — STRUCTURAL disposition-before-PREPARE (HISTORICAL / still available):** structural signals or HD-required materiality → remember CURRENT offer for Pilot seal (process-local) → Pilot disposition on sealed presentation. **Three distinct branches:**
  - **Accept** → durable OA HumanDecision `accepted` with `genericMissionContext` / `presentationDigest` → `verifyGenericMissionHumanDecisionForPrepare` → structural PREPARE with verified `decisionRefs` **iff** all gates pass. Accept alone ≠ Inspection ≠ Confirmation ≠ Authorization ≠ Execute.
  - **Refuse** → durable refused HD recordable → this disposition path forbids PREPARE (`HD_REFUSED`); no implicit Authorization; no Attempt.
  - **Amend** → new presentation / re-seal required → prior presentation does **not** unlock this disposition PREPARE (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new **accepted** applicable HD exists.
  - Structural offer alone ≠ Authorization. Historical HD without mission binding ≠ unlock. Under SHE, lack of Accept does **not** forbid inspectable PREPARE — authority moves to Exécuter.
- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4 + Tool-First R1):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
  - **Pathless bounded non-mutating analysis (CURRENT ON MAIN — Tool-First R1 / PR #588):** when concrete WHERE is empty, Product may qualify NON_STRUCTURAL **only** with a **positive** structured non-mutating claim — `executionIntent.intentKind === "read_only"` **or** `repositoryMutationDeclared ∈ {none, read}` — **plus** live Product context, generalist envelope, and no structural/write/docs_write/materialization/elevated contradiction (`qualifyBoundedNonMutatingAnalysisMission`). Positive declaration ≠ Product authority by itself. **Not a positive claim:** `repositoryMutation` absent **when** `read_only` is also absent; `unknown`; `write`. An admissible `read_only` claim is **not** invalidated by the mere absence of `repositoryMutation`. **No invented documentary/Git path.** CycleInstance and Artifact remain optional when gates allow. No systematic HumanDecision on this path.
  - Contract may stamp `boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` — stamp ≠ REAL no-write enforcement (see F10 R2).
- **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
- **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
- **Paths:** `prepareGenericExecutionContractDraft.ts`, `singleHumanExecutePreparedContract.ts`, `resolveAuthoritativeProductMateriality.ts`, `recordGenericMissionHumanDecision.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `prepareAndResolveM3ProductPath` (legacy), `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis / sealed WHAT; PREPARE ≠ AUTHORIZE ≠ EXECUTE; no ExecutionAttempt on PREPARE
- **Proof:** SHE (`p6.she.singleHumanExecute*`, GAP continuity/HD/finalization) + G-D4 / materiality / M-HD / DER16 / Option1 / Tool-First — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
- **Status:** COMPLETE domain (legacy M3); Generic PREPARE + SHE Option A **CURRENT ON MAIN** (PR #590 `c9abdbc3`); Tool-First R1 **CURRENT ON MAIN** at tested scope (PR #588). DETERMINISTIC proof · ≠ REAL · ≠ P6 GLOBAL PASS

## F09 — EC inspect / Confirmation / authority
- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
- **Unified inspection (CURRENT):** Conversation / Execution / Trajectory share one exam contract (`ContractInspectionExamPanel` + `contractInspectionExam` helpers). Explicit open ≠ write; Attest requires presented facts; identity binding = `projectId` + `executionContractId` + `version` + `semanticFingerprint`. Contract change → reinspection. PREPARE must not auto-inspect. Trajectory does not invent inspection on PREPARE/Execute alone.
- **requiredInspectedFacts / disclosure:** canonical inspection disclosure on EC; Confirm ≠ Inspect ≠ Authorize ≠ Execute.
- **SHE / Tool-First Pilot CTA (CURRENT — D-P6-SHE-01):** after inspection attestation is sufficient/aligned, Pilot surface shows **Exécuter** for the inspected contract — the single Pilot gesture records applicable HD when required, folds server Confirm (when required), then Authorize+Select/Start. **Inspect ≠ Execute** preserved (no auto-attest; no silent HD/Confirm). Server steps HD / Confirm / Authorize / Execute remain distinct OA transitions. Paths: `singleHumanExecutePreparedContract.ts`, `pilotExecutionPresentation.ts`, `ExecutionSurface.tsx`.
- **Product path (legacy M3):** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
- **Proof:** SHE + Pass03/Pass04 UIC + durable/reconcile continuity + pilotExecutionPresentation / R02 — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
- **Status:** COMPLETE tables/services; unified exam + SHE/Tool-First CTA **CURRENT ON MAIN** (PR #590 / #588 lineages) at tested scope · ≠ REAL

## F10 — Governed execution (docs_write / Cursor)

**Status split:** **CURRENT ON MAIN after #618:** docs_write Product admission (`intentKind` / cap / action) is **RETIRED**; documentary work is generic PREPARE / generalist. Historical docs_write execution, report, and evidence sentences below are **HISTORICAL SNAPSHOTS** (true on `7db8afd7` before merge). Known regressions of that retirement are **accepted** and are not a new REAL claim.
- **Gate:** effective Authorization on EC + attempt lifecycle; REAL additionally requires `SFIA_STUDIO_CURSOR_REAL` + managed repo base + Product REAL readiness fail-closed
- **CORR-02 / CURRENT ON MAIN (#618) — git-target fidelity (F10):** `sealRepositoryBindingFromExecutionInputs` refuses a provided remote that does not match the canonical identity (`repository_remote_identity_mismatch` / `REAL_WORKSPACE_INVALID`; no synthesized GitHub URL fallback). `resolveIdentityMatchedLocalRepo` accepts `{managedRootBase}/{sanitizedIdentity}` only when checkout `origin` matches that identity (`managed_repo_identity_mismatch` / `managed_repo_absent` on the protected path). **DETERMINISTIC VERIFIED** at tested scope. **≠** REAL. Unrelated flows: **NO SEMANTIC IMPACT**.
- **Project-scoped Cursor Select/Start (CURRENT ON MAIN at tested scope):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse. DETERMINISTIC Fake/DET · ≠ REAL BOUNDARY PROVEN.
- **R2 — pathless non-mutating vs Cursor REAL (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
  - **Select (`governedExecuteSelectAgent`):** refuse **before** creating a new Attempt — no accepted Attempt from that Select; no REAL process.
  - **Start (`governedExecuteStart`):** if an Attempt is already `accepted` (e.g. Fake Select earlier), re-evaluate and refuse Start — Attempt stays `accepted` (not `running`); launch-port calls unchanged; no REAL process.
  Fake/DET (`CURSOR_REAL≠1`) remains admissible. Ordinary write / concrete-path contracts are **not** blocked by this gate. **ZERO Cursor REAL** claimed by this candidate.
- **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
- **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` + `p6.toolFirst.safetyClosureR1R2.d0.test.ts` (Select refuse + Start on valid Attempt with exact R2 code; TestOnly launch port) — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; pathless non-mutating REAL fail-closed Product-side; no new REAL claim

## F11 — Attempt terminal → Evidence → ReviewBundle
- **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
- **Docs_write durable artifact (POST-EXECUTION-…-01):** when hot-worktree bytes are available at completion, Artifact Evidence uses `external_payload_ref` under existing `mission-result-refs/refs/attempts/…/docs-write-artifact` (same filesystem Evidence layout as MissionResult — **no new store/table**). CursorExecutionReport claim is persisted alongside as `cursor-execution-report.json` on the nominal path (CLAIM, not Evidence). Independent digest verify retained.
- **Status:** COMPLETE domain on main for Generic Evidence/RB at tested scope (Fake). docs_write Product specialization **RETIRED ON MAIN** (#618). Historical docs_write durable review material sentences = **HISTORICAL**. Product E2E FS→Git→Review généraliste = **KNOWN GAP** (partially fixture-safe).

## F11b — Product Continuity / Shared Knowledge (PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01)

- **INDEX POLICY (AKG-M3 G6 — D2):** F11b is a **narrative sub-flow** of Product Continuity / execution reconcile spanning journeys already indexed as **F10–F14**. Curated `manifest.flows[]` retains **F01–F20** only; **F11b is not indexed separately**. Absence from `flows[]` **≠** absence of Product behaviour. DET proofs remain historical coverage at tested scope. ZERO REAL · runtime v3 NON ADOPTED unchanged.
- **Shared Product Resolution (READ-ONLY):** `resolveProductExecutionContext` composes Project-bound EC / Attempt / Cursor CLAIM / Artifact / Evidence / RB / CE / post-Evidence Recommendation without a new store or knowledge domain. Evidence/RB/CE resolved via current Contract Result CE + `contractResultBindings.evidenceRefs`, then validated by canonical `contractResultBindingsMatchCurrentFacts` against Attempt-bound snapshot (Project / Cycle / EC id / version / semantic fingerprint / Attempt / RB id+frozenVersion / ordered Evidence refs). Never ID-prefix or repository-order preference; ambiguous multi-Evidence without CE → `EVIDENCE_LINEAGE_AMBIGUOUS`.
- **Execution Continuity Projection:** `deriveGovernedExecutionContinuityProjection` derives reachable stages only: PRE_EXECUTION | ATTEMPT_ACCEPTED | RUNNING | PRODUCT_MATERIALIZATION_PENDING | POST_EVIDENCE_PENDING | POST_EVIDENCE_COMPLETE | RECOVERY_REQUIRED. Closed lineage integrity codes (e.g. `CONTRACT_RESULT_BINDINGS_MISMATCH`, `CLAIM_EVALUATION_AMBIGUOUS`, `EVIDENCE_LINEAGE_AMBIGUOUS`) project to `RECOVERY_REQUIRED`; query errors such as `ATTEMPT_NOT_FOUND` remain resolve errors.
- **Server Reconciler:** `reconcileGovernedExecution` (intent observe|execute|continue) owns deterministic next steps; stops immediately on `recoveryRequired` without rematerialize / new Attempt / new CE. TrajectorySurface is command+projection only (no Select→Start→Complete→Materialize ownership). Restart after ACCEPTED and during RUNNING reuses the same Attempt (deterministic tested scope).
- **Nora:** `product_execution_context_get` tool (project-bound); W3-C and conversation both invoke shared `runNoraCognitiveCore` → Agents Runner (`runNoraAgentsTurn`); post_execution mode disables tools/Memory B/hosted search/MW5.
- **Status:** DETERMINISTIC at tested scope (incl. CORRECTION PASS 02 canonical lineage); ZERO REAL this macro; runtime v3 NON ADOPTED

## F12 — ContractResult / ClaimEvaluation
- **Paths:** claim evaluation tables/services; docs_write automatic `completeDocsWriteClaimEvidenceCompletion` while hot worktree / durable absolute path available
- **Claim-completion propagation:** RecordResult **consumes** the completion result via closed `classifyDocsWriteClaimCompletionFailure` — only `CONFORMITY_HEADINGS_MISSING` / `ARTIFACT_EMPTY` → Product NOT_PROVEN/UNCLAIMED; all oracle/integrity/lineage/unknown codes → `POST_EXECUTION_CONTINUITY_ADVANCE_FAILED`. No startsWith/includes catch-alls.
- **Honesty:** Attempt `succeeded` ≠ Product PASS; NOT_PROVEN remains when conformity Evidence insufficient
- **Status:** PRESENT on main for Generic journey shells; automatic docs_write Product qualification **RETIRED ON MAIN** (#618); journey REAL proof PARTIAL / NOT PROVEN this macro

## F13 — Nora post-Evidence
- **Handoff (POST-EXECUTION-…-01):** `runW3cPostEvidenceLoop` and `rehydrateW3cPostEvidenceFromLps` share `projectW3cExecutionReportSurfaceFromDurable` — loads durable artifact review material + Cursor report into `PostEvidenceAnalysisFacts` / `executionReport` (`artifactReviewMaterial` FULL/PARTIAL, never invent FULL). Fresh and restart/rehydrate paths project the same `W3cExecutionReportSurface`. No fabricated « sans CursorExecutionReport » surface. Nora must not depend on generic worktree `read` that yields `PATH_NOT_ALLOWED`.
- **UI:** TrajectorySurface shows business-first « Rapport d'exécution » from `postEvidence.executionReport` when present; rehydrate button remains recovery-only (not nominal step); after restart the report is restored from durable refs without a new Nora call solely for the report
- **Status:** DETERMINISTIC fresh + restart handoff proven at tested scope; REAL SprintBoard re-proof requires distinct Morris GO

## F14 — LPS / trajectory continuation or recovery
- **Paths:** trajectory services; recovery ownership continuity; `projectAssistantRehydrateEvidenceOutcomeAction`; Framing continuity rehydrate via `projectAssistantReadFramingContinuityAction` after remount / send
- **First Framing:** after governed START, LPS / `activeCycleInstanceId` are re-read from Product (Truth C); continuity snapshot phases (`recommendation_ready` → … → `ready_to_start` → `active`) are projections over existing OA objects — no parallel persistence
- **Status:** PARTIAL (greenfield/recovery fixes integrated; front-door rehydrate proven at tested scope; Framing continuity rehydrate DETERMINISTIC UI at tested scope)

## F15 — Cycle finalization
- **Paths:** `assessFinalization.ts`, `deriveFinalizationApplicability.ts`, `deriveUndisposedRecommendations.ts`, lifecycle finalize decision path
- **Git MUST primary EC (D-P6-SHE-01 GAP-03 CURRENT):** when obligation snapshot includes `git_repository` MUST, `deriveFinalizationApplicability` selects the **effective** (non-superseded) git-applicable ExecutionContract as `primaryContract` for typed Git proof SET qualification — not raw `gitApplicable[0]`. Multiple effective git-applicable ECs → fail-closed (no arbitrary pick). `gitProofPresent=true` ≠ Cycle FINALIZED (other MUST obligations remain). Obligations policy unchanged.
- **Undisposed Recommendations (CHAT-FIRST-GOVERNED-DECISION-LOOP-01):** finalization fails closed while an **active** Recommendation published on a presented governed subject (`source` = `optset:…`) is not closed by an active `DecisionRef`. Blocker code `undisposed_recommendations`, reported through the existing `blockers` obligation family — no second engine, no new obligation family. `resolved` / `rejected` / `superseded` Recommendations never block. An unreadable Epistemic source reports `recommendation_source_unreadable` and stays blocking.
- **Explicitly NOT an authority:** Cycle Journal open points are not Truth C and do not gate finalization; only existing Reservation mechanisms do.
- **Proof at tested scope:** `p6.she.gap03.effectiveGitPrimaryContract.d0.test.ts`, `undisposedRecommendations.d0.test.ts`, `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case K
- **Status:** COMPLETE assessment engine; Pilot finalize HD required; GAP-03 effective EC **CURRENT ON MAIN** at tested scope (SHE/Generic Execution lineage) · ≠ REAL

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
- **Survives (durable):** HD / DecisionBasis, LPS, cycle; EC if prepared
- **Process-local:** pending Generic PREPARE offer / presentation carrier — **lost** at restart (offer loss ≠ universal PREPARE ban when verified HD + gates allow — HD11)
- **Status:** **PARTIAL** proven by domain tests (DET). Automatic UI offer rehydration **NOT PROVEN**. REAL **NOT PROVEN**. Do **not** promote to COMPLETE without new proof.

## F19 — Restart post-Evidence
- **Survives (durable):** Evidence/RB/claims in product DB; LPS evidence outcome refs; session transcript if session path stable
- **Status:** **PARTIAL** — front-door rehydrate assertions at tested scope (DET). Cross-restart RunState DEFER. REAL SprintBoard re-proof requires distinct Morris GO. Do **not** promote to COMPLETE without new proof.

## F20 — Legacy / historical compatibility
- **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
- **Historical UI surfaces (still routed):** `/cycle-actif`, `/decision`, `/synthese` (nav tier `historical`; `/` still redirects to `/synthese`; POC fixture harness — ≠ OA Truth C)
- **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
- **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
- **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)

### Overlay — AKG-M5 L2-D2 D4 + D1 confirmation (CURRENT ON MAIN — PR #614; 2026-10-24)

| Flow | Behavior on main | Status class |
|---|---|---|
| **D4 Option A — generic legacy routes** | `/workspace`, `/projects/new`, `/nouvelle-demande` → redirect `/studio` when exclusive ON | Code CURRENT · DET proven (`l2d2D4LegacyNavigation`) · LIVE HTTP **NOT PROVEN** |
| **D4 — legacy deep links** | `/projects/[id]` (D1-shaped) → `notFound()` when exclusive ON — **no** `proj-*`→`prj:*` rewrite | same |
| **D4 — exclusive OFF (default)** | helpers no-op — historical D1 routes unchanged | CURRENT default operator path |
| **D1 confirmation CREATE** | Exclusive ON: `executeConfirmedMutation` → `FAILED`+`FORBIDDEN` ; `actionExecuteConfirmation` → **`ok:false` / `FORBIDDEN`** | Code CURRENT · DET proven |
| **Confirmation UI** | `ConfirmationPanel` bails on `!res.ok` — **no `onDone`** | BEHAVIOR PROVEN AT TESTED SCOPE (unit) |
| **Product vs D1** | Target continuity = OA Product UI (`/studio/...`) ; D1 Intake/confirm = freeze-gated when exclusive ON | D1 FREEZE gated · RETIRE LATER |

**Anti-claims:** exclusive **not** ACTIVATED by merge · cutover LIVE **not** proven · D4 LIVE HTTP **not** proven (R-02).

## Generic Execution → Review → Result (CURRENT — Correction Pass 02 candidate)

Nominal Product path (architecture D-ER; **CURRENT ON MAIN** at deterministic tested scope — prior “LOCAL CANDIDATE / NOT INTEGRATED ON MAIN” wording is **HISTORICAL** relative to Generic Execution / Tool-First / SHE merges on main; ≠ REAL · ≠ P6 GLOBAL PASS):

HumanDecision (durable DecisionBasis + local-write seal) → Generic EC `studio.cursor.generalist.execute` (authorized `EFFECT_CLASS:local-write` / filesystem.create|modify — **≠** Product write taxonomy) → Cursor Generalist → isolated Git worktree → CursorExecutionReport [CLAIM] + native Cursor Review End Of [CLAIM executor-only; missing ⇒ PARTIAL / no Studio synthesis] → Studio `NodeLocalGitStatusDiffPort` / `observeVerifiedChangeSet` [FACTS] (Git delta only; OBSERVED vs UNAVAILABLE — never invent empty FACTS; never full-repo scan in Git mode) → Generic Execution Review Material → Verification Evidence `ev:execution-review:*` + Mission Evidence → same ReviewBundle / ClaimEvaluation / ContractResult (mismatch ⇒ ≠ PASS) → Product Resolution (`executionReview`) → scheduled UI continue (no abandonment counter) + remount auto-resume → Nora Deep Review (shared Agents core; actual `execution_review_*` tool calls) → Result Surface (real fields + Pilot `w2ReadExecutionReviewItemAction` by itemId).

**CURRENT ON MAIN after #618:** docs_write Product specialization is **RETIRED**. Dual-write bridge sentences that assumed admission are **HISTORICAL** (true on `7db8afd7`). Anti-stall: mounted schedule + remount from durable projection; Reconciler remains owner of transitions. Proof ceiling for generic paths: **DETERMINISTIC AT TESTED SCOPE** · ZERO REAL · READY FOR REAL **NO**.


## Overlay — AKG-M5 L3-S2 Option B / S8 Project-first (CURRENT ON MAIN — PR #623 MERGED — 2026-10-27)

> **Epistemic class:** **CURRENT ON MAIN** via [PR #623](https://github.com/mcleland147/sfia-workspace/pull/623) **MERGED** `2026-10-27T15:02:16Z` · merge **`6c8b661c50a5c1d9bd04793192b9294b63349bb1`** · parents **`6e957ecbf50b009b692cf1fcba2748ee1aa9c862`** + **`73f0166c6a71c301a7b2a9c2471beb30ad068221`** · [post-merge CI #40526990871](https://github.com/mcleland147/sfia-workspace/actions/runs/40526990871) **COMPLETED / SUCCESS** (Detect · Typecheck · Lint · Build · Vitest · Modeled Governance · Secret Pattern Scan · Trailing Whitespace · **SFIA Studio Required Gate PASS**) · event=`push` · branch=`main` · HEAD=merge. Integrated Product commits: `0577ca5c…` (feat) · `90bbf479…` (pre-merge R24 LOCAL docs+manifest) · `f7c9ba78…` (**CORR-CI-623-01** Tool-First first-prompt) · `73f0166c…` (**CORR-CI-623-02** multi-path unclaimed redaction). Pre-merge CI [run #40519630827](https://github.com/mcleland147/sfia-workspace/actions/runs/40519630827) SUCCESS on `73f0166c…`. Prior overlay wording **LOCAL CANDIDATE / dirty Product / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN** = **HISTORICAL AS TIP** (true at 2026-10-27 pre-merge authoring). Proof ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE**. REAL / G-REAL / OA-exclusive activation / runtime v3 **NOT** claimed. **L3 GLOBAL OPEN**. EP-S2-05 **NOT PROVEN**. EP-S2-08 **PARTIAL**. ≠ Product PASS invented · ≠ L3 GLOBAL CLOSED.

### Flow — Project-first Generic → Evidence → W3-B → Product Result (CURRENT ON MAIN DET)

**Project-only path (S8):**

Project (`activeCycleInstanceId=null`) → Generic PREPARE (no fictive cycle) → SHE Select/Start → ExecutionAttempt → Cursor boundary (**TestOnlyRealExecutionLaunchPort** in DET) → Studio GERM / VerifiedChangeSet (**OBSERVED** when worktreeRef+HEAD/base coherent; else honest **UNAVAILABLE**) → Verification Evidence ± **generic_materialization** Evidence → W3-B ReviewBundle / ClaimEvaluation → Product Result honest (**UNCLAIMED** / **NOT_PROVEN** without applicable Result Semantic) → W3-C / GERM surface rehydrate.

**Cycle-bound Mission path:** KEEP — Mission Evidence + cycle bindings when Product Mission stamped; non-regression suites preserved.

**Admission (W3-B):** ABSENT (optional skip / incomplete honest) ≠ ADMISSIBLE (enter RB) ≠ REJECTED (Product fail-closed; codes `EVIDENCE_PROJECT_MISMATCH` / `EVIDENCE_CONTRACT_MISMATCH` / `EVIDENCE_ATTEMPT_MISMATCH` / `EVIDENCE_CYCLE_MISMATCH` / `W3B_EVIDENCE_ADMISSION_REJECTED`).

**Late Evidence:** after frozen tech RB, rematerialize with expanded Evidence set → `IDEMPOTENCY_CONFLICT` (no silent frozen rewrite).

**Anti-claims:** ≠ L3 GLOBAL CLOSED · ≠ REAL · ≠ mutating Generic Product PASS · ≠ invent CycleInstance · ≠ EP-S2-05/08 closed · Tool-First Nora first-prompt + multi-path unclaimed redaction closed DET (CORR-CI-623-01/02).

### LOCAL CANDIDATE — EP-S2-08-PROOF-01 (2026-10-28) — Project-scoped W3-C CKC (R1 Option A + Option 1 + R-INSPECT-01)

> **Epistemic class:** **LOCAL CANDIDATE** on Product branch `feat/akg-m5-ep-s2-08-proof-01` @ base `3fb84630…` · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ CURRENT ON MAIN**. **Morris Option A** + **Option 1** + **R-INSPECT-01** (inspection disclosure coherence). Defensive gates retained. **Positive Delivery WHAT:** `scopeIn` alone is **NOT** sufficient (WHERE ≠ WHAT). Affirmative stamps (exact): `repositoryMutationDeclared==="write"` OR exact `EFFECT_CLASS:local-write`. **Option 1:** Generic PREPARE preserves declared mutation enum onto durable EC (no invention; no EFFECT_CLASS stamp; declaration ≠ SHE authority). **R-INSPECT-01:** canonical `projectExecutionContractInspectionDisclosure` exposes `repositoryMutationDeclared`; `requiredInspectedFactsForContract` requires `inputs.repositoryMutationDeclared` when present; Pilote exam rows (`buildInspectionFactRowsFromDisclosure` / `ContractInspectionExamPanel`) and TrajectorySurface render neutral label « Opération déclarée sur le dépôt »; HD/sealed `read_only` vs analysis `write` fail-closed (`HD_MUTATION_DECLARATION_CONFLICT` / internal consistency A5). Fingerprint alone ≠ visual disclosure. POS-01 + B2/B5/B6 + R-INSPECT oracles DET. EP-S2-08 **PARTIAL**. ≠ invent CycleInstance/HD · ≠ browser E2E · ≠ REAL · ≠ L4.
