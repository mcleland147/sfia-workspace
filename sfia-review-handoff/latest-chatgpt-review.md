# SFIA STUDIO — Review Pack (FULL)
## STUDIO-P6-TOOL-FIRST — PRR SEMANTIC CONTENT REVIEW REQUIRED

**Horodatage (UTC):** 2026-10-17T20:44:11Z
**Cycle:** 13 — PR readiness / Git Integration continuation — Critical
**Typologie:** EVOL / DOC / CONFORMANCE / GIT INTEGRATION
**GO Morris consommé:** PRR BOUNDED SEMANTIC SYNC + COMMIT/PUSH — **arrêté avant digest/commit/push** (revue ChatGPT du contenu PRR absente et non traçable).

**Verdict:**
STOP — PRR SEMANTIC CONTENT REVIEW REQUIRED

Hors scope: digests écrits · commit Product · push Product · PR · REAL · HQA PASS · P6 PASS · Runtime v3 ADOPTED · GitHub CI PASS.

---

## 1. Git Truth

```
toplevel: /private/tmp/sfia-tf-safety-r1r2
branch:   fix/sfia-studio-p6-tool-first-safety-r1r2
HEAD:     e03c7b9fd3665b89a4083a937b82424c5e7f6406
origin/main: e03c7b9… (unchanged)
feature remote: ABSENT
staged: vide
commit/push Product: NON
```

Lot Tool-First 15 fichiers **préservé**. Modifications PRR documentaires **locales** (7 volumes + README) — digests **non** rafraîchis.

---

## 2. Autorité de revue sémantique

| Question | Réponse |
|---|---|
| Revue humaine/ChatGPT du contenu PRR modifié disponible et traçable ? | **NON** |
| Auto-évaluation Cursor présentée comme revue ChatGPT ? | **NON** (interdit) |
| Handoffs 9f8e6e04 / 0f9cf2ce couvrent-ils le contenu PRR ci-dessous ? | **NON** — Product/code readiness et STOP digest, pas revue des volumes |

Contrôle §8 du GO → **STOP avant** `node … --write-digests`, avant commit, avant push.

---

## 3. Convergence Pre-check

V3-F05 / P6 · Tool-First local · R1 CLOSED · R2 FAIL-CLOSED · Content READY · full npm test bloqué par PRR jusqu'à sync digests **après** revue contenu.

---

## 4. Matrice d'impact PRR

| VOLUME | COMPORTEMENT | ÉCART | ACTION | PREUVE CODE |
|---|---|---|---|---|
| README | Overlay Tool-First+R1/R2 | Absent | ADAPT overlay | worktree e03c7b9 |
| 02 | OBJ-EC stamp pathless | Stamp non documenté | ADAPT | prepare + gate |
| 03 F04/F08/F09/F10 | Pathless R1, Exécuter fold, R2 | Sous-spécifié | ADAPT | qualifyBounded… / presentation / gate |
| 04 | Impact map procedure | KEEP (procédure inchangée) | KEEP | — |
| 05 | CURSOR_REAL + R2 | Frontière absente | ADAPT | env + gate |
| 06 | Persistence | Offer process-local déjà dit | KEEP | — |
| 07 | Invariants + failure modes | R1/R2 manquants | ADAPT | INV-* + codes |
| 08 | Tests Tool-First / R1R2 / UI | Absents | ADAPT | suites d0 |
| 09 | Dette REAL no-write | Absente | ADAPT | overlay + debt |
| Manifest digests | Drift orchestrateTurn + volumes | Attendu | **BLOQUÉ** jusqu'à revue | checker |

---

## 5. Digests (calculés — non écrits dans le manifeste)

orchestrateTurn: 8150d48197019412 -> 4024ae1078c6f4da
README: d6e17088b0cc5762 -> 5e3580cad38d5fbc
02: 243b7c0e390eb19f -> a63310ed7b85cf1b
03: efdc700181d6a2cc -> 15aac8bbf42afc1a
05: 101ec96a6908db71 -> 5021e67074bdbafd
07: 8e81c1fd63d604b0 -> d4e078da3dd81b39
08: 9ee8dde351556e12 -> 8237aa210ecfac30
09: e9868b78e0a79e7c -> efd1d00b81d06016


Checker: RESULT REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED (attendu tant que digests non synchro).

---

## 6. Inventaire local courant

- 15 fichiers Tool-First (inchangés vs cycles précédents)
- 7 fichiers PRR documentaires modifiés (README + 02/03/05/07/08/09)
- Manifeste: **non modifié** (pas de --write-digests)
- Review Pack: .tmp-sfia-review (hors Product)

---

## 7. Diff PRR exploitable (complet — pour revue ChatGPT)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index eeca2b2e..3ad774ce 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -123,6 +123,7 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.
 - **Persistence:** `oa_execution_contracts`.
 - **Paths:** `lib/oa/execution-contract/**`
 - **Gate:** no EC before required Proposal HD (product path).
+- **Tool-First pathless stamp (local candidate — PENDING_GIT_INTEGRATION):** Generic PREPARE may set `inputs.boundedNonMutatingAnalysis` and related `NO_REPOSITORY_MUTATION_*` constraints/stops for Product-admitted pathless analysis. Stamp declares Product intent envelope — **≠** Cursor REAL technical no-write (see F10 R2 / `boundedNonMutatingRealLaunchGate.ts`).

 ## OBJ-INSPECTION — InspectionAttestation

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index 13e01c2e..871a627b 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -30,6 +30,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Trigger:** Pilot message via product conversation
 - **Steps:** Pilot content → Product orchestration (`orchestrateTurn`) → `runNoraCognitiveTurn` (strategy + **adaptive maxTurns**) → Agents Runner (`runNoraAgentsTurn`) → optional **same-turn** RunState continuation under mission/campaign budget → result + Session append → Product status → (optional) prospective Active Cycle Work / Work Recommendation materialization → journal tools
 - **Nora Generic PREPARE solicitation (D-ER-16 / Option 2 — AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** `orchestrateTurn` may expose Agents tool `request_generic_execution_prepare` wired to Product `solicitGenericExecutionPrepare`. Cognition may **solicit** PREPARE only. Tool params never create HumanDecision, never create ExecutionAttempt, never authorize or execute. Authority remains OA/W2 Product admission (F08). DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE via `p6.der16.genericNoraToolInvocation.d0.test.ts` (Fake).
+- **Tool-First mission fields (local candidate — PENDING_GIT_INTEGRATION):** tool / orchestration may forward structured `repositoryMutation` (`none`/`read`/`write`/`unknown`) into Product mission admission. Nora proposal alone is **not** sufficient authority for NON_STRUCTURAL pathless qualification (see F08 R1). Paths: `productExecutionAgentsTools.ts`, `orchestrateTurn.ts`.
 - **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider; Product UI `useProductConversation.ts` + `ConversationSurface` / `FramingContinuityCard`
 - **Nora autonomy (PR #577 INTEGRATED ON MAIN — DETERMINISTIC):** multi-segment documentary missions may continue via native RunState **inside the same Product turn** only; total budget remains bounded; `incomplete` is honest (no false mission success; no illegitimate durable LR/ACW); a **new** Pilot Product turn reuses Session history — it is **not** a RunState resume; cross-restart RunState **DEFER**. Proof is deterministic ScriptedModel/Fake only — not REAL documentary quality. Merge `d8ceb8ad`.
 - **Documentary cognitive reliability / RCD-01 (PR #578 INTEGRATED ON MAIN — DETERMINISTIC):** Guided Document Review acquisition uses the native tool path `git_local_read_file` → `GitLocalReadAdapter` → `ToolRouter` (`prepareGitLocalReadDataForModel`) → Agents Runner tool result. Coverage metadata (`returnedStartLine`/`returnedEndLine`/`completeLineCount`/`nextStartLineHint`/`truncated` vs `documentHasMore`) must describe the **final model-visible** payload after redaction and JSON envelope capping (`CT_MAX_TOOL_RESULT_CHARS` = 12000). Partial lines are never credited; redacted lines still progress; a line that fits the adapter but not the final envelope is skipped via explicit `lineExceedsCap` (no infinite same-line retry; no mid-line offset protocol). On soft `maxTurns` exhaustion, restitution discloses honest incomplete coverage from tool crumbs when available (no invented FULL / HumanDecision / Deliverable). Natural mono-file documentary prompts elevate Focused adaptive budget (≥8, ≤ ceiling 10) without raising FinOps ceilings. Proof: `p6.nora.min09.documentaryReliability.d0.test.ts` R1–R7 — **not** GDR REAL quality. Merge `44006648` / source `9b855d8d`.
@@ -85,29 +86,33 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
   - **Refuse** → durable refused HD recordable → PREPARE **forbidden** (`HD_REFUSED`); no implicit Authorization; no Attempt.
   - **Amend** → new presentation / re-seal required → prior presentation does **not** unlock PREPARE (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new **accepted** applicable HD exists.
   - Structural offer alone ≠ PREPARE admission. Historical HD without mission binding ≠ unlock. Only an **accepted**, mission-bound, applicable, verified, non-superseded HD opens structural PREPARE.
-- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
+- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4 + Tool-First R1):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
+  - **Pathless bounded non-mutating analysis (local candidate — PENDING_GIT_INTEGRATION):** when concrete WHERE is empty, Product may qualify NON_STRUCTURAL **only** with a **positive** structured non-mutating claim — `executionIntent.intentKind === "read_only"` **or** `repositoryMutationDeclared ∈ {none, read}` — plus live Product context, generalist envelope, no structural/write/docs_write/materialization contradiction (`qualifyBoundedNonMutatingAnalysisMission`). **Absence** of `repositoryMutation`, `unknown`, or `write` is **not** a positive claim → Materiality UNKNOWN / structural path (fail-closed). **No invented documentary/Git path.** CycleInstance and Artifact remain optional when gates allow. No systematic HumanDecision on this path.
+  - Contract may stamp `boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` — stamp ≠ REAL no-write enforcement (see F10 R2).
 - **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
 - **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
 - **Paths:** `prepareGenericExecutionContractDraft.ts`, `resolveAuthoritativeProductMateriality.ts`, `recordGenericMissionHumanDecision.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `prepareAndResolveM3ProductPath` (legacy), `lib/oa/execution-contract/**`
 - **Invariant:** cannot expand DecisionBasis / sealed WHAT; PREPARE ≠ AUTHORIZE ≠ EXECUTE; no ExecutionAttempt on PREPARE
-- **Proof:** G-D4 / materiality / M-HD / DER16 / Option1 suites — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
-- **Status:** COMPLETE domain (legacy); Generic PREPARE AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION
+- **Proof:** G-D4 / materiality / M-HD / DER16 / Option1 / `p6.toolFirst.executionContractSimplification` / `p6.toolFirst.safetyClosureR1R2` — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
+- **Status:** COMPLETE domain (legacy); Generic PREPARE + Tool-First R1 AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION

 ## F09 — EC inspect / Confirmation / authority
 - **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
 - **Unified inspection (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** Conversation / Execution / Trajectory share one exam contract (`ContractInspectionExamPanel` + `contractInspectionExam` helpers). Explicit open ≠ write; Attest requires presented facts; identity binding = `projectId` + `executionContractId` + `version` + `semanticFingerprint`. Contract change → reinspection. PREPARE must not auto-inspect. Trajectory does not invent inspection on PREPARE/Execute alone.
 - **requiredInspectedFacts / disclosure:** canonical inspection disclosure on EC; Confirm ≠ Inspect ≠ Authorize ≠ Execute.
+- **Tool-First ordinary Pilot CTA (local candidate — PENDING_GIT_INTEGRATION):** after inspection attestation is sufficient/aligned, Pilot surface may show **Exécuter** while status remains `confirmation_required` / À confirmer — the single Pilot gesture folds server Confirm (when required) then Authorize+Select/Start. **Inspect ≠ Execute** preserved (no auto-attest; no silent Confirm). Server steps Confirm / Authorize / Execute remain distinct. Paths: `pilotExecutionPresentation.ts`, `ExecutionSurface.tsx`.
 - **Product path (legacy):** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
-- **Proof:** Pass03/Pass04 UIC suites — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
-- **Status:** COMPLETE tables/services; unified exam AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION
+- **Proof:** Pass03/Pass04 UIC + durable/reconcile continuity + pilotExecutionPresentation / R02 — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
+- **Status:** COMPLETE tables/services; unified exam + Tool-First CTA AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION

 ## F10 — Governed execution (docs_write / Cursor)
 - **Gate:** effective Authorization on EC + attempt lifecycle; REAL additionally requires `SFIA_STUDIO_CURSOR_REAL` + managed repo base + Product REAL readiness fail-closed
 - **Project-scoped Cursor Select/Start (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse.
+- **R2 — pathless non-mutating vs Cursor REAL (local candidate — PENDING_GIT_INTEGRATION):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product refuses **before** Select Attempt creation and again on Start: code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts` → `governedExecuteSelectAgent` / `governedExecuteStart`). Fake/DET (`CURSOR_REAL≠1`) remains admissible. Ordinary write / concrete-path contracts are **not** blocked by this gate. **ZERO Cursor REAL** claimed by this candidate.
 - **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
 - **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
-- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
-- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; no new REAL claim
+- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` + `p6.toolFirst.safetyClosureR1R2.d0.test.ts` (Select refuse + Start on valid Attempt with exact R2 code; TestOnly launch port) — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
+- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; pathless non-mutating REAL fail-closed Product-side; no new REAL claim

 ## F11 — Attempt terminal → Evidence → ReviewBundle
 - **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index a24f06bd..6dc3073a 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -38,6 +38,7 @@
 - **FakeConversationProvider** (`lib/platform/ai/fakeProvider.ts`): deterministic structured intent including path-less active-cycle materialization matcher; may synthesize `note-de-cadrage.md` leaf in some framings.
 - **OpenAI live:** same schemas; non-deterministic linguistics; may omit filename/`continuationKind`.
 - **Cursor REAL:** gated; mutual exclusion with deterministic Cursor E2E boundary asserted in runtime helpers.
+- **Tool-First R2 (local candidate — PENDING_GIT_INTEGRATION):** `SFIA_STUDIO_CURSOR_REAL=1` arms REAL generalist. Pathless non-mutating ECs are **Product-refused** before Select/Start (`BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE`) because REAL generalist has **no** technical no-write sandbox. Env flag alone does not prove REAL BOUNDARY. Fake/DET (`CURSOR_REAL≠1`) remains the deterministic path for those missions.

 ## Server vs client

diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index bee84335..2462e505 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -33,6 +33,10 @@
 | INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 |
 | INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 |
 | INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 |
+| INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING | Pathless NON_STRUCTURAL requires positive structured non-mutating claim (`read_only` or `repositoryMutationDeclared ∈ {none,read}`); absent/unknown/write ≠ admission | qualifyBoundedNonMutatingAnalysisMission | toolFirst A–J / safetyClosureR1R2 |
+| INV-STAMP-NE-REAL-NOWRITE | Contract `NO_REPOSITORY_MUTATION_*` / bounded analysis stamp ≠ Cursor REAL technical no-write | boundedNonMutatingRealLaunchGate + generalist REAL launch | safetyClosureR1R2 |
+| INV-R2-REAL-PATHLESS-BLOCK | Pathless non-mutating + `SFIA_STUDIO_CURSOR_REAL=1` → refuse Select/Start before effect (`BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE`) | assertBoundedNonMutatingCursorRealAdmissible | safetyClosureR1R2 |
+| INV-INSPECT-NE-EXECUTE-CTA | Inspection attestation ≠ Execute; Tool-First Exécuter may fold Confirm server-side after attest only | pilotExecutionPresentation / ExecutionSurface | durable continuity / R02 |

 ## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

@@ -42,9 +46,13 @@
 - **Amend** → new presentation required → PREPARE forbidden (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new accepted applicable HD.
 No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission. Accept alone ≠ Execute.

-**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed.
+**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed. **Tool-First R1:** pathless admission additionally requires positive non-mutating claim (see INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING); no invented file path; no systematic HD.

-**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN.
+**Tool-First ordinary CTA:** after Inspect attest, Pilot **Exécuter** may carry Confirm (server) then Authorize+launch — Inspect ≠ Execute; Confirm ≠ Authorize ≠ Execute remain.
+
+**R2 REAL pathless:** when REAL armed, pathless non-mutating EC cannot Select/Start (INV-R2-REAL-PATHLESS-BLOCK). Fake/DET OK. Ordinary write contracts unchanged.
+
+**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN; Stamp ≠ REAL no-write.

 **CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: process-local offer loss ≠ universal PREPARE ban when durable accepted HD remains verifiable (see vol 06 / HD11).

@@ -58,6 +66,8 @@ No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD
 | `no_active_cycle` | ACGC | missing active id | blocked | none | yes |
 | `NEW_CYCLE_FORMALIZATION` | ACGC | no materialization intent / explicit new-cycle formalization | historical new-cycle path — **not** aliased from optional documentary `no_require_artifact` | may createCycle on other path | intent-gated |
 | `CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE` | Generic PREPARE | unknown / privileged / spoofed capability identity | prepare refused | none | yes — exact identity match only |
+| `MATERIALITY_UNKNOWN` (pathless without positive claim) | Materiality / Tool-First R1 | repositoryMutation absent/unknown/write or contradictory signals | PREPARE refused — no silent NON_STRUCTURAL | none | yes |
+| `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` | F10 R2 | pathless non-mutating EC + `SFIA_STUDIO_CURSOR_REAL=1` | Select/Start refused before Attempt/effect | none | yes — Fake/DET still OK |
 | `CKC_*` | CKC | incoherent/unavailable mapping | qualification fail | none unauthorized | yes |
 | `AUTHORITY_NOT_CONFIGURED` | authz | missing local Pilot gate | cannot decide | none | yes |
 | `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | docs_write | missing managed root | cannot REAL write | none | yes |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 03626bcd..51f98389 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -17,7 +17,10 @@
 | F05 optional documentary → Generic PREPARE (PR #586) | `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (+ G-D4, Product Continuity, HQA-F01) | DETERMINISTIC — `no_require_artifact` routes to Generic PREPARE; Artifact obligation path preserved; exact caps; non-authoritative path candidates; Fake cue `__P6_OPTIONAL_DOCUMENTARY_MD__` ≠ OpenAI LIVE |
 | F04 Nora Generic PREPARE tool (D-ER-16) | `p6.der16.genericNoraToolInvocation.d0.test.ts` | DETERMINISTIC — solicit PREPARE only; structural fail-closed; no Attempt; PENDING_GIT_INTEGRATION |
 | F08 Generic PREPARE / M-HD / Option1 | `p6.mHd01*`, `p6.mHd02*`, `p6.hqa.materialityBlock01*`, `p6.o1.continuityGd4EmptyRefs*` | DETERMINISTIC — structural HD-bound vs NON_STRUCTURAL empty refs; PENDING_GIT_INTEGRATION |
+| F08 Tool-First pathless NON_STRUCTURAL (A–J) | `p6.toolFirst.executionContractSimplification.d0.test.ts` | DETERMINISTIC — pathless PREPARE→inspect→authorize→Select/Start Fake; no HD/cycle/artifact invent; PENDING_GIT_INTEGRATION |
+| F08/F10 Tool-First R1/R2 safety | `p6.toolFirst.safetyClosureR1R2.d0.test.ts` | DETERMINISTIC — R1 positive claim; R2 Select+Start exact code on valid Attempt; TestOnly port ZERO REAL; PENDING_GIT_INTEGRATION |
 | F09 unified inspection | `p6.uic.unifiedInspectionContract*`, `p6.r03.inspection*` | DETERMINISTIC — explicit exam/attest; identity binding; PENDING_GIT_INTEGRATION |
+| F09 Tool-First Exécuter folds Confirm | `p5.s03.durableExecutionActionContinuity*`, `p5.s03.pilotExecutionPresentation*`, `p6.r02.actionAvailability*` | DETERMINISTIC — Inspect≠Execute; CTA execute after attest; PENDING_GIT_INTEGRATION |
 | F10 project-scoped Cursor | `p6.projectScopedCursorSelection.d0.test.ts` | DETERMINISTIC Fake Select→Start→Result; null-cycle admitted only if OA allows; ZERO Cursor REAL |

 | F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index d9f19039..65550532 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -171,6 +171,24 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
 | New store/table / parallel engines | NONE |

+## Overlay — Tool-First Generic Execution + R1/R2 (local candidate — PENDING_GIT_INTEGRATION)
+
+| Item | Status |
+|---|---|
+| Pathless analysis PREPARE without invented file path | AS-IMPLEMENTED_IN_CANDIDATE — positive non-mutating claim required (R1) |
+| Systematic HD / mandatory CycleInstance / mandatory Artifact for ordinary pathless | **NOT REQUIRED** when NON_STRUCTURAL gates admit |
+| `repositoryMutation` absent / unknown / write → NON_STRUCTURAL | **FORBIDDEN** — fail-closed |
+| Nora `repositoryMutation` / `read_only` alone as authority | **INSUFFICIENT** — Product materiality gates apply |
+| Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED** — HD / refuse paths KEEP |
+| Inspect ≠ Execute; server Confirm/Authorize/Execute distinct | **PRESERVED** — Exécuter may fold Confirm after attest only |
+| Cursor REAL generalist technical no-write | **ABSENT** — debt open |
+| R2 Product fail-closed when REAL armed + pathless non-mutating | AS-IMPLEMENTED_IN_CANDIDATE — `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` before Select/Start |
+| Fake/DET pathless non-mutating Select/Start | ADMISSIBLE — DETERMINISTIC at tested scope |
+| Integration on main / GitHub CI / HQA / P6 GLOBAL PASS | **NOT CLAIMED** — PENDING_GIT_INTEGRATION |
+| REAL BOUNDARY PROVEN / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
+| Debt `TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT` | OPEN — sandbox or Product-bound RO agent requires distinct Morris architecture GO |
+| Exit for debt | Enforceable no-write at REAL generalist (or equivalent) + GO + Bounded REAL proof |
+
 ## Overlay — P6-HQA-F05-GD4-01 / PR #586 (optional Artifact / Generic PREPARE)

 | Item | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 25549243..99cc4dd2 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -13,6 +13,7 @@
 **RCD-01 documentary reliability overlay (INTEGRATED ON MAIN):** P6-MIN-09 / **PR #578 MERGED** @ merge `440066485eaae458ccca188b2c91f8f47bd4987f` (source `9b855d8ddabd9bf9fffb8561f63d1138d8939be4`; mergedAt 2026-10-13T07:18:56Z) — honest Git read coverage; secret-safe redaction progression; final model-visible JSON envelope truth; bounded oversized-line skip (`lineExceedsCap`); honest budget-exhausted restitution. Post-merge CI: [run 38361885447](https://github.com/mcleland147/sfia-workspace/actions/runs/38361885447) SUCCESS (Required Gate PASS). Proof: **DETERMINISTIC CORRECTION PROVEN AT TESTED SCOPE** (R1–R7). **GDR REAL PASS / P6 GLOBAL PASS / Product READY: NOT CLAIMED**. Runtime v3 **NON ADOPTED**. FinOps ceilings unchanged (adaptive maxTurns ≤ 10; `CT_MAX_TOOL_RESULT_CHARS` = 12000). Volumes 02 / 03 / 04 / 06 / 08 / 09 + README + digests. Debt `RCD-01-PRR-SEMANTIC-COHERENCE`: documentary correction prepared locally — **integration of this PRR sync still PENDING**.
 **PR #585 cumulative CI correction overlay (scoped, Delivery):** baseline reviewed `e7774a0c71e3b052f091ed2dffdd70651916dd2d` · 2026-10-15 (Europe/Paris) — CI-HQA-F01 NEW_CYCLE vs Artifact natural-signal boundary + digest sync for tracked F2/P6 sources; volumes 03 / 09 + digests. **BOUNDED SEMANTIC IMPACT** on F05 admission only. **Not** a full Living Reference re-audit. P6 GLOBAL PASS / REAL / runtime v3 **NOT CLAIMED**.
 **PR #586 optional Artifact / Generic PREPARE overlay (scoped, Delivery):** Product baseline reviewed `9b9cd5e5052da5781678a23a86c82b8b3283627e` · 2026-10-15 (Europe/Paris) — P6-HQA-F05-GD4-01: ordinary documentary request without closure `REQUIRE_ARTIFACT` may route to Generic PREPARE on the same active cycle (`no_require_artifact` ≠ NEW_CYCLE_FORMALIZATION; ≠ invented HD); exact capability identities; Nora path candidates non-authoritative at PREPARE. Volumes 02 / 03 / 04 / 06 / 07 / 08 / 09 + digests. **BOUNDED SEMANTIC IMPACT** on F05 routing + Fake fixture cue. **Not** a full Living Reference re-audit. Pending offer process-local. OpenAI LIVE / e66 / Cursor REAL **NOT CLAIMED**. P6 GLOBAL PASS / runtime v3 **NOT CLAIMED**.
+**Tool-First Generic Execution + R1/R2 safety (local candidate — PENDING_GIT_INTEGRATION):** Product worktree `fix/sfia-studio-p6-tool-first-safety-r1r2` @ baseline `e03c7b9` — ordinary pathless analysis may PREPARE as NON_STRUCTURAL without invented file path / systematic HD / mandatory CycleInstance / mandatory Artifact when Product admits a **positive** non-mutating claim (`intentKind=read_only` **or** `repositoryMutationDeclared ∈ {none,read}`); absent/unknown/write/contradictions remain fail-closed. Pilot UI **Exécuter** may fold server Confirm after inspection attestation (Inspect ≠ Execute). Cursor REAL generalist has no technical no-write; Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` refuses Select/Start when REAL is armed for pathless non-mutating ECs. Fake/DET remains admissible. Volumes 02 / 03 / 05 / 07 / 08 / 09 (+ digests only after ChatGPT semantic content review). **BOUNDED SEMANTIC IMPACT**. **Not** integrated on main. REAL BOUNDARY / HQA / P6 GLOBAL PASS / runtime v3 **NOT CLAIMED**.

 ## What this corpus is


```

---

## 8. Ce que ChatGPT doit valider avant GO digest

1. Cohérence F04/F08/F09/F10 avec le code Product local (R1 positif, R2 fail-closed, Exécuter folds Confirm).
2. Absence d'élargissement doctrinal / v3 ADOPTED / READY FOR REAL.
3. Maturité Candidate / PENDING_GIT_INTEGRATION exacte.
4. Dette no-write + condition de sortie exactes.
5. KEEP des chemins structurels / HD / protected.

Si ACCEPT sur ce contenu exact → GO suivant: digest refresh + full npm test + commit 15+N + push.

---

## 9. Gates Morris restants

1. **Revue ChatGPT** de ce pack (contenu PRR).
2. Si ACCEPT: digest refresh + validations complètes + COMMIT/PUSH (GO déjà émis, à réactiver après revue).
3. Puis PR GO distinct pour CI GitHub.

---

## 10. Verdict

STOP — PRR SEMANTIC CONTENT REVIEW REQUIRED

PRR documentary ADAPT préparé localement. Digests non actualisés. Aucun commit Product. Aucun push Product.

---

## 11. Fin du Review Pack FULL
