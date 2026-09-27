# 03 — End-to-End Flow Catalog

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**

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
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts

## F05 — Active-cycle Artifact materialization
- **Trigger:** Natural “matérialise … livrable du cycle”
- **Steps:** intentAnalysis → `resolveActiveCycleGovernedContinuation` → Proposal or in-cycle clarification
- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE∧¬SATISFIED (#532+#533)
- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher
- **Status:** DETERMINISTIC PROVEN for routing/bridge; REAL journey reserves remain (vol 09)
- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact

## F06 — Proposal / Decision Subject / options
- **Trigger:** F2 turn producing `f2_proposal`
- **Persistence:** process-local proposal store
- **Status:** COMPLETE for in-process; PARTIAL across restart

## F07 — HumanDecision on Proposal
- **Trigger:** Pilot accept/refuse
- **Paths:** `recordDecision.ts` → `oa_human_decisions`
- **Status:** COMPLETE durable path

## F08 — EC PREPARE
- **Trigger:** After required HD / authority path
- **Paths:** `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis WHAT
- **Status:** COMPLETE domain; product journey integration PARTIAL/NOT PROVEN as single lineage

## F09 — EC inspect / Confirmation / authority
- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
- **Status:** COMPLETE tables/services; journey continuity PARTIAL

## F10 — Governed execution (docs_write / Cursor)
- **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro)

## F11 — Attempt terminal → Evidence → ReviewBundle
- **Paths:** execution-attempt + evidence-review aggregates
- **Status:** COMPLETE domain; E2E lineage re-proof deferred

## F12 — ContractResult / ClaimEvaluation
- **Paths:** claim evaluation tables/services
- **Status:** PRESENT; journey proof PARTIAL

## F13 — Nora post-Evidence
- **Status:** PARTIAL — product surfaces exist; campaign re-proof deferred

## F14 — LPS / trajectory continuation or recovery
- **Paths:** trajectory services; recovery ownership continuity
- **Status:** PARTIAL (greenfield/recovery fixes integrated; broader matrix open)

## F15 — Cycle finalization
- **Paths:** `assessFinalization.ts`, lifecycle finalize decision path
- **Status:** COMPLETE assessment engine; Pilot finalize HD required

## F16 — Replan
- **Invariant:** No silent replan
- **Status:** PARTIAL — explicit replan seams exist; silent replan forbidden

## F17 — Restart at Proposal pending
- **Expected:** process-local proposal may be absent → requalify; Truth C intact
- **Status:** PARTIAL / known honesty notice in proposalStore

## F18 — Restart after HD / before execution
- **Survives:** HD, LPS, cycle; EC if prepared
- **Status:** PARTIAL proven by domain tests

## F19 — Restart post-Evidence
- **Survives:** Evidence/RB/claims in product DB; session transcript if session path stable
- **Status:** PARTIAL

## F20 — Legacy / historical compatibility
- **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
- **Status:** ACTIVE compatibility paths remain

