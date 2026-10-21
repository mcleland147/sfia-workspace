# AKG-M3 G7 — PRR G6 GIT INTEGRATION — REVIEW PACK FULL (CRITICAL)

```text
TIMESTAMP_UTC: 2026-10-21T18:00:17Z
CYCLE: AKG-M3 G7 — PRR G6 Git Integration
CHANTIER: SFIA-STUDIO-ARCHITECTURAL-KNOWLEDGE-AND-CONSTRUCTION-GOVERNANCE
MILESTONE: AKG-M3 — Reference Consolidation
TYPE: Cycle 13 — PR Readiness / Git Integration
PROFIL: CRITICAL
TYPOLOGIE: DOC / CONTROLLED GIT INTEGRATION
CAPACITY: V3-F05 · V3-F12
QA: CRITICAL GIT INTEGRATION REVIEW
REVIEW_PACK: FULL
REVIEW_HANDOFF: REQUIRED — publish-in-cycle (L3)
MERGE: NOT AUTHORIZED
FORMAL_EXIT: NOT AUTHORIZED
```

---

## 1. Timestamp UTC

**2026-10-21T18:00:17Z**

---

## 2. GO Morris G7

**GO AKG-M3 — G7 GIT INTEGRATION** — Morris « OK GO » 2026-10-21 — CONSUMED.

Authorized: branch · one project commit · push of that branch · one PR to main · validations.

NOT authorized: merge · auto-merge · squash · force push · Product · semantic PRR change · Formal Exit · M4.

---

## 3. Cycle / profil / justification

Cycle 13 CRITICAL DOC — integrate reviewed PRR G6 candidate (semantic PASS + digest sync ACCEPTED + local conformance PASS) without new semantic mutation.

---

## 4. Local Git Truth initial

| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-akg-m2-global-g1-roadmap-local` |
| Prior branch | `docs/sfia-studio-akg-m2-global-g1-roadmap-local` |
| Prior HEAD | `6ed646d8441c2f130e1a5ff1979b0b05d2afaedb` |
| origin/main | `c2b3d00ceb73b07eab44243ac45ecbe75e6e5bfd` — MATCH |
| Handoff DIGEST SYNC | `22b0b06f…` / blob `97c736bf…` — MATCH |
| Dirty | 7 PRR unstaged · +178/−62 |

Note: `HEAD..origin/main` = merge PR #598 (`c2b3d00c`). Tree content of prior HEAD and origin/main identical for PRR paths; Roadmap already on main via that merge — **not** included in G7.

---

## 5. Git Review Index

| Ref | SHA |
|---|---|
| DIGEST SYNC handoff | `22b0b06f…` |
| CORR-02 | `c13cf60e…` |
| CORR-01 | `abc6062d…` |
| G6 | `ac2e552b…` |
| G7 commit | `d21fbb86d69671987ee9660be768dc16f69a5ca1` |
| G7 parent | `c2b3d00ceb73b07eab44243ac45ecbe75e6e5bfd` (= origin/main) |

---

## 6. Convergence Pre-check

Build Doctrine / Roadmap / C1 / v3 framing as trajectory context. Roadmap tip may lag Morris GOs — **not edited** in G7. D1–D4 conserved. R24: **NO NEW SEMANTIC IMPACT**.

---

## 7. Build Doctrine / Roadmap / C1

Consulted. Roadmap preserved on main (no G7 Roadmap file in PR).

---

## 8. Baseline main

`origin/main` = `c2b3d00c…` throughout. G7 branch HEAD before commit = same. Parent of G7 commit = same.

---

## 9. Baseline G6 candidate

Pre-commit integrity PASS: 13/20/20/9 · OBJ-ATTEMPT · DEP-EC-ATT EC→Attempt · DEP-HD-EC HD→EC · F11b hors flows · digests 02=`61d089bf93c1676a` 03=`f0ec94936c4d8572` 04=`631fc37fa374c7c1` 05=`9883dc02a7856cf9` 07=`f19dd23a99dc896a` 09=`8e0ff7d45b1b33fa`. Fingerprints of seven files preserved across branch switch.

---

## 10. Provenance sept fichiers

Exact seven paths from DIGEST SYNC candidate; bit-identical to local reviewed tree; no opportunistic edits in G7.

---

## 11. Branche avant / après

| | |
|---|---|
| Created | `docs/sfia-studio-akg-m3-g7-prr-consolidation` from `origin/main` |
| Method | `git switch -c … origin/main` — dirty PRR carried · no reset/stash/clean |
| After commit HEAD | `d21fbb86…` |
| Tracking | `origin/docs/sfia-studio-akg-m3-g7-prr-consolidation` |

---

## 12. Contrôle de transition Git

PASS — HEAD==origin/main before commit · seven dirty only · no Roadmap in working tree diff · fingerprints PASS.

---

## 13. PR Readiness validations

| Check | Result |
|---|---|
| Seven files vs candidate | PASS |
| Digests / index | PASS |
| D1–D4 | PASS |
| git diff --check | PASS |
| Secrets | none observed |
| Checker read-only | **CONFORMANCE OK** |
| Vitest isolated 5/5 | PASS |

Checker:

```text
OK: canonical README exists
RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK

```

Vitest:

```text

 RUN  v3.2.7 /private/tmp/sfia-g7-conform-20261021T175700Z/projects/sfia-studio/app

 ✓ __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts (5 tests) 9ms

 Test Files  1 passed (1)
      Tests  5 passed (5)
   Start at  19:58:26
   Duration  206ms (transform 15ms, setup 35ms, collect 7ms, tests 9ms, environment 0ms, prepare 27ms)


```

---

## 14. Diff projet exact

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index b7342699..a284704d 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -95,7 +95,7 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 ## OBJ-GENERIC-MISSION-HD — Generic Mission HumanDecision (M-HD-01/02 + SHE)

-- **Status:** CURRENT on Delivery (D-P6-SHE-01) — not INTEGRATED_ON_MAIN until Product PR merge.
+- **Status:** **CURRENT ON MAIN** (D-P6-SHE-01 / Single Human Execute Option A) — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip). DETERMINISTIC at tested scope. ≠ REAL / HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.
 - **Purpose (SHE CURRENT):** Structural / HD-required Generic missions may PREPARE an inspectable draft without prior HD; durable OA HumanDecision (`authorize-inspected-execute`) is recorded on Pilot Exécuter, bound to the inspected EC (OA-projected effects — GAP-04). HD is **not** deleted; timing moves from PREPARE to Execute.
 - **Purpose (HISTORICAL disposition-before-PREPARE):** bind a durable OA HumanDecision to a sealed mission presentation before disposition-path PREPARE may resume (`verifyGenericMissionHumanDecisionForPrepare`).
 - **Durable truth:** `oa_human_decisions` with `decisionBasis.genericMissionContext`, `missionSubjectId`, `presentationDigest`.
@@ -120,11 +120,13 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 ## OBJ-EC — ExecutionContract

-- **Purpose:** Prepared execution contract after required Pilot decision/authority.
+- **Purpose:** Prepared (inspectable) execution contract draft/aggregate. **PREPARE ≠ AUTHORIZE ≠ EXECUTE** — a prepared EC is **not** automatically authorized for launch.
 - **Persistence:** `oa_execution_contracts`.
 - **Paths:** `lib/oa/execution-contract/**`
-- **Gate:** no EC before required Proposal HD (product path).
-- **Tool-First pathless stamp (local candidate — PENDING_GIT_INTEGRATION):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`).
+- **Gate (scoped — not universal):**
+  - **Legacy / Proposal / disposition-before-PREPARE product path:** no EC prepare on that path before the required Proposal / mission-bound HumanDecision (HD-bound PREPARE).
+  - **SHE CURRENT (D-P6-SHE-01 / PR #590):** STRUCTURAL / HD-required / UNKNOWN may obtain an **inspectable** PREPARE **without** prior HD when Product qualification admits (`sheDeferredStructuralAuthority` stamp possible). Authority is consumed on Pilot **Exécuter** (`singleHumanExecutePreparedContract`): Inspect binding → applicable HD (if required) → Confirm (if required) → Authorize → launch gates. **0 Attempt** if pre-launch gates fail. Historical disposition-before-PREPARE remains available at its own boundary.
+- **Tool-First pathless stamp (CURRENT ON MAIN — PR #588 merge `304e30e8`):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`). DETERMINISTIC at tested scope · REAL no-write enforcement OPEN (`TOOL-FIRST-REAL-NOWRITE`).

 ## OBJ-INSPECTION — InspectionAttestation

@@ -144,9 +146,15 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 ## OBJ-ATTEMPT — ExecutionAttempt

-- **Purpose:** Bounded attempt against an EC; terminal statuses recorded.
-- **Persistence:** `oa_execution_attempts`, active pointer, result budget tables.
-- **Invariant:** Attempt terminal ≠ Product Result PROVEN.
+- **Purpose:** Bounded attempt against an AUTHORIZED ExecutionContract; Select→Start→Result lifecycle unit. Distinct from ExecutionContract (PREPARE/inspect/authority).
+- **Lifecycle statuses (`ExecutionAttemptStatus` — 7):** `accepted` · `running` · `result_pending` · `succeeded` · `failed` · `timeout` · `cancelled` (`lib/oa/execution-attempt/domain/types.ts`).
+  - **Non-terminal / active (`ActiveExecutionAttemptStatus` — 3):** `accepted` · `running` · `result_pending` — hold the active-by-contract invariant.
+  - **Terminal (`TerminalExecutionAttemptStatus` — 4):** `succeeded` · `failed` · `timeout` · `cancelled`.
+- **Persistence:** `oa_execution_attempts`, `oa_execution_attempt_active`, `oa_execution_attempt_result_budget`.
+- **Paths:** `lib/oa/execution-attempt/**` (domain types; `selectExecutionAgent` / `startExecution`); SQLite tables in `lib/oa/project/infrastructure/sqlite/db.ts`; Product R2 gate `features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts`.
+- **Manifest index (AKG-M3 G6):** curated `components[]` includes **OBJ-ATTEMPT**; dependency **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (conformance endpoints ∈ components).
+- **Invariant:** Attempt **terminal** ≠ Product Result PROVEN (`INV-ATTEMPT-NE-PROVEN`); no execution before authority (`INV-NO-EXEC-BEFORE-AUTH`). PREPARE ≠ AUTHORIZE ≠ EXECUTE · Inspect ≠ Execute.
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
index bfa68d82..9ac33e79 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -38,7 +38,7 @@ LifecycleSurface / lifecyclePresentation
   → does not alone authorize materialization
 ```

-## Dual Generic PREPARE admission paths (D-P6-SHE-01 CURRENT on Delivery)
+## Dual Generic PREPARE admission paths (D-P6-SHE-01 CURRENT ON MAIN — PR #590)

 ```
 Nora tool (F04) / F2 analysis / F05 adjacent hand-off
@@ -88,25 +88,34 @@ OA = authority of record. W2 = Product coordination. Nora = cognition/recommenda

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
+**Index note (AKG-M3 G6 / CORR-01):** Curated `manifest.dependencies[]` holds exactly **9** edges; both endpoints ∈ `manifest.components[]` (13 after OBJ-ATTEMPT). **DEP-EC-ATT** = `OBJ-EC` → `OBJ-ATTEMPT` (prior self-edge was a conformance-preserving stub — R-M3A-01). Distinguish: (1) **curated indexed edge** (in the nine); (2) **historical narrative endpoint label** on a curated edge (e.g. old `OBJ-INTENT` wording for DEP-FAKE-INTENT — not a curated component); (3) **purely descriptive / non-indexed** edges (not in the nine — not auto-promoted).
+
+### Curated nine (manifest.dependencies[])
+
+| ID | From | To | Why | Manifest curated? |
+|---|---|---|---|---|
+| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace | YES |
+| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate | YES |
+| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification | YES |
+| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision | YES |
+| DEP-HD-EC | OBJ-HD | OBJ-EC | HD-bound / historical disposition-before-PREPARE and Proposal→prepare linkage — **not** a universal precondition of SHE inspectable PREPARE. Under SHE CURRENT, an inspectable PREPARE does not require prior HD. Any applicable HD is recorded within the Pilot's Exécuter gesture, after inspection, followed by conditional Confirmation and Authorization before any new Attempt or Cursor launch. | YES |
+| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays `accepted`) when REAL+pathless non-mutating | YES |
+| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn | YES |
+| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-TURN-ORCH | deterministic structured analysis into turn orch (**curated to=`OBJ-TURN-ORCH`**). Historical narrative sometimes labelled the consumer `OBJ-INTENT` — that label is **not** a curated component and does **not** mean this edge is absent from the manifest | YES |
+| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity | YES |
+
+### Descriptive / non-indexed (narrative only — not in manifest.dependencies[])
+
+| ID | From | To | Why | Manifest curated? |
+|---|---|---|---|---|
+| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence | NO (narrative) |
+| DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt | NO (narrative) |
+| DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural disposition-before-PREPARE | NO (narrative) |
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
index eb600e9c..915639c9 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -93,21 +93,45 @@

 ## Overlay — P6 Generic Execution consolidation candidate (LIVING REFERENCE R1–R4)

-**Status:** AS_IMPLEMENTED_IN_CANDIDATE on integration worktree `integration/sfia-studio-p6-generic-execution-consolidation` @ base `896ff59c` · Product dirty transferred from source `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` · **PENDING_GIT_INTEGRATION** · **NOT INTEGRATED_ON_MAIN**.
+### A — HISTORICAL AT MACRO TIME (snapshot preserved)

-| Item | Status |
+**Do not read this subsection as CURRENT.** It records the consolidation-candidate documentary tip as authored then.
+
+- Integration worktree: `integration/sfia-studio-p6-generic-execution-consolidation` @ base `896ff59c`
+- Product dirty transferred from source `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862`
+- Then-status: **AS_IMPLEMENTED_IN_CANDIDATE** · **PENDING_GIT_INTEGRATION** · **NOT INTEGRATED_ON_MAIN**
+
+| Item (historical tip) | Status **at macro time** |
 |---|---|
 | G-IB (importBoundaries allowlist +4 W2 type-only RuntimeOaStack) | **CLOSED** (historical gate) |
-| G-DIGEST Living Reference digests | **PENDING CONTENT APPROVAL** — manifest **FROZEN**; digests **not** promoted this cycle |
-| Living Reference volumes 02/03/04/06/07/08/09 | Semantic amendments R1–R4 applied locally — ChatGPT content review required before digest write |
-| 77 Product candidates + allowlist | Preserved dirty; **no** Product commit/push/PR this cycle |
+| G-DIGEST Living Reference digests | **PENDING CONTENT APPROVAL** — manifest **FROZEN**; digests **not** promoted that cycle |
+| Living Reference volumes 02/03/04/06/07/08/09 | Semantic amendments R1–R4 applied locally — ChatGPT content review required before digest write (that tip) |
+| 77 Product candidates + allowlist | Preserved dirty; **no** Product commit/push/PR that cycle (**historical** — not a claim about today’s worktree) |
 | Pending Generic PREPARE offer | Process-local — restart-unsafe (vol 06) |
 | Generic Mission HumanDecision | Durable OA; restart ≠ CURRENT offer; applicability re-check required |
 | Cursor REAL / OpenAI LIVE / HQA | **NOT PROVEN / NOT RETESTED** |
 | P6 GLOBAL PASS / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
-| DETERMINISTIC proof ceiling | Historical 328 targeted PASS + G-IB 5/5 — **not re-executed** this documentary cycle |
+| DETERMINISTIC proof ceiling | Historical **328 targeted PASS** + G-IB 5/5 — **not re-executed** in later documentary cycles |
+
+### B — CURRENT ON MAIN (Git requalification)
+
+Consolidation / Tool-First / SHE lineages absorbed via **PR #587** merge `e03c7b9f`, **PR #588** merge `304e30e8`, **PR #590** merge `c9abdbc3` (ancestors of main tip `c2b3d00c…`). Product behaviour for Generic PREPARE / optional Artifact / Tool-First R1/R2 / SHE is **CURRENT ON MAIN** only at deterministic tested scopes documented in vols 03/05/07. **OPEN / NOT PROVEN:** Cursor REAL · OpenAI LIVE · HQA · P6 GLOBAL PASS · READY FOR REAL · runtime v3 ADOPTED · `TOOL-FIRST-REAL-NOWRITE`.
+
+### C — G6 / CORR-01 LOCAL CANDIDATE (this documentary track)
+
+| Item | Status **now** |
+|---|---|
+| G6 PRR semantic sync authoring | Local dirty candidate (seven PRR paths) — **not** project-integrated |
+| G6-CORR-01 semantic corrections | Local candidate under Critical Re-Review — digests **not** written |
+| G-DIGEST / sha256_16 refresh | **PENDING MORRIS GO Digest Sync** — EXPECTED DIGEST DRIFT until authorized |
+| Global PRR conformance | **NOT ACQUIRED** while digests drift |
+| Project Git integration (commit/push/PR/merge) | **NOT AUTHORIZED** |

-**Next (distinct GOs):** ChatGPT semantic content review → Morris digest approval → conformance → Product git decision → PR/CI/merge → HQA reprise. This overlay does **not** claim CURRENT ON MAIN.
+### D — Gaps / reserves (continuity)
+
+R-M3A-01 OPEN · R-M3B-01 OPEN · R-G6-SR-01…04 = correction candidates under re-review (**not CLOSED** until Critical Re-Review accepts) · M2 38×20 identities preserved · F18/F19 PARTIAL · REAL NOT PROVEN.
+
+**Do not** promote Layer A PENDING_GIT_INTEGRATION / G-DIGEST historical rows into CURRENT after main absorption.

 ## GENERIC-EXECUTION-REVIEW-RESULT-CONVERGENCE-01 (historical macro — retained)

@@ -171,11 +195,13 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
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
@@ -185,12 +211,12 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
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
@@ -291,3 +317,28 @@ No `retired-components-ledger.md` — zero components removed.
 - NoteLite REAL re-proof deferred (Morris GO distinct)
 - Nora model/provider tuning deferred
 - `durableLocalWriteSeal` domain API transitional (tests/domain only — not Product front door)
+
+## AKG-M3 G6 — PRR Semantic Sync authoring (LOCAL CANDIDATE) + CORR-01
+
+**Authority:** Morris GO G6 PRR Semantic Sync Authoring (2026-10-21) · Morris GO G6-CORR-01 Bounded Semantic Correction Pass (2026-10-21). Digests / project commit / PR **NOT** authorized.
+
+| ID | Status | Note |
+|---|---|---|
+| **R-M3A-01** | **OPEN** — technical index candidate applied locally (OBJ-ATTEMPT + DEP-EC-ATT retarget); **not FORMALLY CLOSED** pending Critical Re-Review + Digest Sync + conformance | Formal owner NOT ASSIGNED |
+| **R-M3B-01** | **OPEN** — G6 scope completeness (vols 02/03/04/05/07/09 + manifest covered in authoring; README/01/06/08 READ-ONLY) | Formal owner NOT ASSIGNED |
+| **R-G6-SR-01** | Correction candidate (Attempt active vs terminal statuses) — **OPEN under re-review** | Formal owner NOT ASSIGNED |
+| **R-G6-SR-02** | Correction candidate (SHE authority timing / DEP-HD-EC Why) — **OPEN under re-review** | Formal owner NOT ASSIGNED |
+| **R-G6-SR-03** | Correction candidate (curated vs narrative DEP description) — **OPEN under re-review** | Formal owner NOT ASSIGNED |
+| **R-G6-SR-04** | Correction candidate (historical P6 provenance layers) — **OPEN under re-review** | Formal owner NOT ASSIGNED |
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
+**Anti-claims:** CORR-01 authoring ≠ Critical Re-Review APPROVED ≠ Digest Sync AUTHORIZED ≠ GLOBAL CONFORMANCE PASS ≠ project Git integrated ≠ AKG-M3 CLOSED ≠ P6/v3/REAL.
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index a25297d5..1cdc1863 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -15,19 +15,19 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
-      "sha256_16": "71177cd234b88a3b"
+      "sha256_16": "61d089bf93c1676a"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "12331c256c76bd30"
+      "sha256_16": "f0ec94936c4d8572"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "b7236bfd326f8f9a"
+      "sha256_16": "631fc37fa374c7c1"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
-      "sha256_16": "2f13a6917c240eb7"
+      "sha256_16": "9883dc02a7856cf9"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
@@ -35,7 +35,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "88893854dfe22bd9"
+      "sha256_16": "f19dd23a99dc896a"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
@@ -43,7 +43,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "252e18777ad9e04b"
+      "sha256_16": "8e0ff7d45b1b33fa"
     }
   ],
   "components": [
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

## 15. Contrôle staged exact

Staged via explicit `git add -- <7 paths>` only. Cached name-status: 7× M. No creates/deletes. No Roadmap/Product.

---

## 16. Commit SHA et parent

| | |
|---|---|
| Commit | `d21fbb86d69671987ee9660be768dc16f69a5ca1` |
| Parent | `c2b3d00ceb73b07eab44243ac45ecbe75e6e5bfd` |
| Message | `docs(studio-prr): consolidate AKG-M3 G6 reference` |
| Stat | 7 files · +178 / −62 |

---

## 17. Commit diff (full — seven files)

See §14 (identical to `git diff parent..commit`).

---

## 18. Push remote et SHA

| | |
|---|---|
| Remote branch | `origin/docs/sfia-studio-akg-m3-g7-prr-consolidation` |
| Remote SHA | `d21fbb86d69671987ee9660be768dc16f69a5ca1` |
| Match local | **PUSH_VERIFIED** |

---

## 19. PR number / URL

| | |
|---|---|
| Number | **#599** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/599 |
| Title | docs(studio-prr): AKG-M3 G6 reference consolidation |
| Base | main @ `c2b3d00c…` |
| Head | `docs/sfia-studio-akg-m3-g7-prr-consolidation` @ `d21fbb86…` |
| State | OPEN |
| Mergeable | MERGEABLE |
| Commits | 1 |
| Files | **7** (verified via API) |

---

## 20. Base / head / changed files

Seven MODIFIED paths only (manifest + 02/03/04/05/07/09). No Product. No Roadmap. No checker/tests.

---

## 21. Checker output

See §13 — CONFORMANCE OK on candidate worktree before commit.

---

## 22. Vitest isolation / output

Isolated copy `/private/tmp/sfia-g7-conform-20261021T175700Z` · 5/5 PASS · canonical Product not mutated by G7 test run.

---

## 23. CI status réel

Observed at pack time:

```text
Build and validate SFIA Studio	pending	0	https://github.com/mcleland147/sfia-workspace/actions/runs/39648590504/job/119390718113
Detect SFIA Studio changes	pass	6s	https://github.com/mcleland147/sfia-workspace/actions/runs/39648590504/job/119390644611

```

**CI PENDING** — `Detect SFIA Studio changes` SUCCESS; `Build and validate SFIA Studio` pending/queued (run `39648590504`).

**Do not declare CI SUCCESS / READY FOR MERGE.**

---

## 24. R23 / R24

R23: provenance = DIGEST SYNC accepted candidate; no new code confrontation required beyond integrity.
R24: **NO NEW SEMANTIC IMPACT** in G7 — Git transport only.

---

## 25. Fake / Real Qualification

GIT DIFF FIDELITY + PR INTEGRITY + CI STATUS OBSERVED (PENDING). REAL NOT PROVEN · P6 NOT PASSED · v3 NON ADOPTED. No new fakes/REAL.

---

## 26. Réserves OPEN

R-M3A-01 OPEN · R-M3B-01 OPEN · M2 debts preserved · TOOL-FIRST-REAL-NOWRITE OPEN · F18/F19 PARTIAL · REAL NOT PROVEN · B-M2B-03 OPEN.

---

## 27. Gates Morris restants

1. ChatGPT Critical Git Integration Review
2. Wait CI SUCCESS (if still pending)
3. **GO Morris Merge** (distinct)
4. Post-merge verification
5. AKG-M3 Formal Exit
6. AKG-M4 distinct

---

## 28. Review Handoff preuve

Filled after L3 publish.

---

## 29. Verdict

**G7 PR OPEN — CI PENDING — NOT READY FOR MERGE.**

Anti-claims: ≠ PR MERGED ≠ Formal Exit ≠ M4 ≠ P6/REAL/v3 · Merge NOT executed · auto-merge NOT enabled.

---

## 30. Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` — cycle **AKG-M3 G7**.

Vérifier: GO G7 · base origin/main · Roadmap absent from PR · parent `c2b3d00c` · commit `d21fbb86` · exactly 7 files · digests · checker · Vitest · PR #599 · remote head · CI status · handoff L3 · reserves · merge not done.

Produire **ChatGPT CRITICAL GIT INTEGRATION REVIEW**. Si PR correcte et CI SUCCESS → proposer GO Morris Merge. Si CI PENDING → recommander attente CI. Si problème → STOP / Correction Pass. Ne pas merger automatiquement.

---

END — AKG-M3 G7 GIT INTEGRATION REVIEW PACK FULL
