# SFIA STUDIO — PRR SEMANTIC CORRECTION PASS — Review Pack FULL
# ChatGPT Final Content Review Handoff

## A. Horodatage Europe/Paris

- ISO: `2026-10-18T06:01:44+0200`
- Local: `2026-10-18 06:01 CEST`

## B. GO Morris consommé

**PRR SEMANTIC CORRECTION PASS** (18 octobre 2026 — GO MORRIS).

Autorise: lecture candidat Product local; analyse dépendances; corrections documentaires PRR bornées; contrôles cohérence; Review Pack FULL; publication Review Handoff L3.

N'autorise PAS: ACCEPT sémantique définitif; digest refresh; commit/push Product; PR/merge; Cursor REAL; promotion runtime v3.

GO historique `PRR BOUNDED SEMANTIC SYNC + COMMIT/PUSH` **non consommé** pour intégration Product dans ce pass.

## C. Cycle / profil / CKC

| Champ | Valeur |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Macro | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| Milestone | P6 — GLOBAL INTEGRATED PRODUCT QA |
| Campagne | P6-GLOBAL-INTEGRATED-PRODUCT-QA-01 |
| Capacité | V3-F05 — Conversation vers exécution gouvernée |
| Connexes | V3-F11, V3-F12, V3-F14, V3-F15 |
| Type cycle | 13 — PR readiness / Git Integration (continuation documentaire) |
| Profil SFIA | CRITICAL |
| CKC | ckc:studio:pr-readiness |
| Typologie | DOC / CONFORMANCE / SEMANTIC CORRECTION |

## D. Git Truth initial

| Champ | Valeur |
|---|---|
| Worktree | `/private/tmp/sfia-tf-safety-r1r2` |
| toplevel | `/private/tmp/sfia-tf-safety-r1r2` |
| remote | `origin` → https://github.com/mcleland147/sfia-workspace.git |
| Branche | `fix/sfia-studio-p6-tool-first-safety-r1r2` |
| HEAD | `e03c7b9fd3665b89a4083a937b82424c5e7f6406` |
| origin/main | `e03c7b9fd3665b89a4083a937b82424c5e7f6406` |
| Baseline match | HEAD == origin/main == e03c7b9… (OK) |
| Staged | vide |
| Dirty | OUI (attendu) |

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
 M projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
 M projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/README.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts
```

## E. Sources consultées

### Processus / gouvernance / doctrine (lecture)

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`
- `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md`
- `projects/sfia-studio/sfia-v3-framing/ckc/13-pr-readiness.md`

### PRR

- README, 02, 03, 04, 05, 06, 07, 08, 09
- `production-runtime-reference.manifest.json` (READ-ONLY — non modifié)

### Code Product local (contrats R1/R2)

- `resolveAuthoritativeProductMateriality.ts` → `qualifyBoundedNonMutatingAnalysisMission`
- `boundedNonMutatingRealLaunchGate.ts` → `assertBoundedNonMutatingCursorRealAdmissible`
- `governedExecuteAuthorizedContract.ts` → Select/Start call sites
- `prepareGenericExecutionContractDraft.ts`, `orchestrateTurn.ts`, `productExecutionAgentsTools.ts`
- `pilotExecutionPresentation.ts`, `ExecutionSurface.tsx`
- Tests: `p6.toolFirst.executionContractSimplification.d0.test.ts`, `p6.toolFirst.safetyClosureR1R2.d0.test.ts`

## F. Convergence Pre-check

| Item | État |
|---|---|
| Capacité v3 | V3-F05 |
| Milestone | P6 GLOBAL INTEGRATED PRODUCT QA |
| PR #587 | MERGED |
| Tool-First | LOCAL CANDIDATE |
| R1 | DETERMINISTICALLY CLOSED (périmètre testé) |
| R2 | PRODUCT FAIL-CLOSED / DETERMINISTICALLY PROVEN |
| PRR | DOCUMENTARY ADAPT PREPARED → SEMANTIC CORRECTION APPLIED (ce pass) |
| Manifest | NOT REFRESHED |
| P6 GLOBAL PASS | NOT CLAIMED |
| Runtime v3 | NON ADOPTED |
| Dette | TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT (conservée) |

## G. Handoff d'entrée

| Champ | Valeur |
|---|---|
| Branche | `sfia/review-handoff` |
| Commit | `7a8af21e5a467b90a010b9bf1434a0f43b0897b3` |
| Blob historique | `3cb35c8f8f2be31534f4d1cc66880c632e37c1dd` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| ls-tree entrée | `100644 blob 3cb35c8f8f2be31534f4d1cc66880c632e37c1dd	sfia-review-handoff/latest-chatgpt-review.md` |
| Worktree handoff | `/Users/morris/Projects/sfia-workspace/sfia-review-handoff` (clean, @ 7a8af21e) |

Sections 4–9 du handoff d'entrée (matrice PRR, digests, inventaire, diff PRR, gate sémantique, gates Morris) prises comme baseline documentaire à amender.

## H. État des 15 fichiers Tool-First

Ce pass **n'a modifié aucun** fichier Product/test. Inventaire + sha256 au moment du Review Pack:

```
### Tool-First 15 files (local candidate)
1273aebaf73b95648fcb36fcac82da37a1dd514887f1b19bedb66271134ed525  projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
00bc1375546283ae8ff116871e7e6003b023420a48a13c9e5bbf39e4c9a3fcf6  projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
e18ee62a8ef3e845ce5f8623c87c5f7965bc205a201e530d22d0627fdb3169c5  projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
504eca358136873f370a1eed4570ece894601ff7bd9d1d96f992e7cc0cf02642  projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
ea5773f3ccca0eda9bb52ec472deae87fadec3ea9568d863e0f88004a4a2da04  projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
56ea60ca19b9862562dae4f535a57494eddf4a37b265d7cc97a74565b197faea  projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
b200fa136398173d98331d09bf5d0816f35ef1204014276fcf6c37ea8155c0c9  projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
dcf93660ddbaf3741f973625fc6fa7194b61ce4c99ea4cf1183b2c6b9c8fa2f9  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
e97ac1c30fe8812fc75b0ab7715364a06033eb0d6a1d1a41a50b52ed6dd23783  projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
4024ae1078c6f4da655ea0bca36f0c0a70415211f3e5eb323949f651bfc41be9  projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
c65e239668b4bc3514597dc04e9ba0ad8b219ce56ab1d05e805a1722c58cc854  projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts
a10470efdea00fefe0ba3239772c88c8e2d4b1baac455bab8a0c1fd4f2c0a0ec  projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
5829e84f655fefe449381bb47f6f29e537c191f8b38dac5aaeb4c1c704caf4e4  projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
dc5ea668ef2b765ba33042d4f95269bfef7ebbc610c61f20101fadaeb5283d14  projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
c565b4714397e266e55d80afce90ff8d9ede5454a9a431b44f08694f95bdccce  projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts

```

Comptage: 12 modified + 3 untracked = **15** (cohérent avec handoff d'entrée).

## I. Matrice documentaire

| Volume | Classement handoff entrée | Ce pass | Motif |
|---|---|---|---|
| README | ADAPT (prior) | KEEP (pas de nouvelle édition R1/R2 ce pass) | Overlay déjà présent |
| 02 | ADAPT (prior) | KEEP | Stamp ≠ REAL no-write déjà correct |
| 03 | ADAPT | **ADAPT** | R1 positive claim + R2 Select/Start |
| 04 | KEEP | **ADAPT** | Écart F10 R2 / DEP-EC-ATT / DEP-MAT-GENPREP démontré |
| 05 | ADAPT (prior) | **ADAPT** (micro) | Même finding R2 Select≠Start |
| 06 | KEEP | KEEP | Persistence inchangée |
| 07 | ADAPT | **ADAPT** | R1 + R2 Select/Start effects |
| 08 | ADAPT (prior) | KEEP (pas d'édition incrémentale ce pass) | Preuves déjà pointées |
| 09 | ADAPT | **ADAPT** | Overlay R1/R2 précis |
| Manifest | — | **READ-ONLY** | Aucun digest refresh |

## J. Diagnostic R1

Finding ChatGPT: volumes 07/09 présentaient certaines absences de `repositoryMutation` comme motif général de refus — contradictoire avec le contrat R1 (deux formes de déclaration positive).

Code local vérifié: `qualifyBoundedNonMutatingAnalysisMission` refuse l'absence **seulement si** `!readOnlyIntent`.

## K. Contrat R1 vérifié contre le code

```
199|  const declaredMutation = (
200|    input.analysis as {
201|      repositoryMutationDeclared?: "none" | "read" | "write" | "unknown" | null;
202|    }
203|  ).repositoryMutationDeclared;
204|  const readOnlyIntent = intentKind === "read_only";
205|  const explicitNone =
206|    declaredMutation === "none" || declaredMutation === "read";
207|  if (declaredMutation === "write") {
208|    return { ok: false, basis: "repository_mutation_declared_write" };
209|  }
210|  if (declaredMutation === "unknown") {
211|    return { ok: false, basis: "repository_mutation_unknown" };
212|  }
213|  // R1 — absence is NOT a positive claim (fail-closed → UNKNOWN upstream).
214|  if (declaredMutation == null && !readOnlyIntent) {
215|    return { ok: false, basis: "repository_mutation_claim_absent" };
216|  }
217|  if (readOnlyIntent || explicitNone) {
218|    return {
219|      ok: true,
220|      basis: readOnlyIntent
221|        ? "read_only_intent_pathless_verified"
222|        : "declared_non_mutating_pathless_verified",
223|    };
224|  }
```

Règles effectives:

1. `write` → refuse (`repository_mutation_declared_write`)
2. `unknown` → refuse (`repository_mutation_unknown`)
3. `declaredMutation == null && !readOnlyIntent` → refuse (`repository_mutation_claim_absent`)
4. `readOnlyIntent || explicitNone{none,read}` → positive-claim step OK
5. Contrôles complémentaires restent requis — déclaration ≠ autorité Product.

## L. Matrice des cas R1

| Cas | Input | Positive-claim step | Admission Product effective |
|---|---|---|---|
| A. read_only positif | intentKind=read_only (mutation absente OK) | PASS | IFF complementary gates |
| B. mutation=none | repositoryMutationDeclared=none | PASS | IFF complementary gates |
| C. mutation=read | repositoryMutationDeclared=read | PASS | IFF complementary gates |
| D. mutation absent + non read_only | null + !read_only | FAIL `repository_mutation_claim_absent` | NO |
| E. unknown | unknown | FAIL | NO |
| F. write | write | FAIL | NO |
| G. read_only + signal write contradictoire | read_only + other write/docs_write cues | claim step may pass then complementary refuse | NO if contradiction |
| H. mission structurelle | structural cues | outside pathless NON_STRUCTURAL | HD path / fail-closed |
| I. capacité hors enveloppe | elevated capability | complementary refuse | NO |
| J. pathless sans déclaration positive | absent mutation AND not read_only | FAIL | NO |

**Distinction:** déclaration positive admissible ≠ admission Product effective ≠ autorité Nora.

## M. Diagnostic R2

Finding ChatGPT: « refus avant Attempt/effect » trop général.

Code: gate unique `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` appelé depuis Select **et** Start avec effets distincts.

## N. Contrat Select/Start vérifié

Gate: `boundedNonMutatingRealLaunchGate.ts` → code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE`.

- Select (`governedExecuteSelectAgent` ~L779): gate **avant** création Attempt.
- Start (`governedExecuteStart` ~L983): gate **avant** effet launch; Attempt préexistant inchangé.

## O. États Attempt et effets observables

Scénario déterministe `p6.toolFirst.safetyClosureR1R2.d0.test.ts`:

1. Fake Select → Attempt `accepted` (id valide ≠ `xat:none`)
2. Arm REAL=`1`
3. Start → refuse code exact R2
4. Attempt reste `accepted` (pas `running`)
5. `launchCallCount` inchangé; `testOnlyPort.calls.length === 0`
6. Select sous REAL → aucun nouvel Attempt

## P. Analyse d'impact volume 04

Graphe Materiality → EC → Authorization → Select/Start → Cursor REAL:

- Prior KEEP assumait procédure d'analyse dépendances inchangée.
- R2 introduit une dépendance Product réelle de F10 Select/Start sur la frontière REAL.
- R1 annote DEP-MAT-GENPREP (positive-claim gate).
- DEP-EC-ATT « launch » seul était inexact face au fail-closed Select/Start.

→ Écart factuel démontré → **OPTION ADAPT** minimale (pas de nouveau composant OA; pas de pivot structurel).

## Q. Classification KEEP/ADAPT justifiée

**04 = ADAPT** (minimal): dual-path diagram + note Tool-First + DEP-EC-ATT + DEP-MAT-GENPREP.

Pas de STOP architecture: identités/contrats OA inchangés.

## R. Liste des fichiers réellement modifiés

### Product (préservés — non touchés ce pass)

Les 15 fichiers Tool-First listés en §H.

### PRR (candidat consolidé vs HEAD e03c7b9)

```
 .../02-runtime-object-catalog.md                   |  1 +
 .../03-end-to-end-flow-catalog.md                  | 22 +++++++++++++++-------
 .../04-dependency-impact-map.md                    | 19 +++++++++++++++----
 ...05-environments-configuration-and-boundaries.md |  1 +
 .../07-authority-invariants-and-failure-modes.md   | 18 ++++++++++++++++--
 .../08-test-proof-and-conformance-map.md           |  3 +++
 ...9-known-gaps-reserves-and-current-boundaries.md | 22 ++++++++++++++++++++++
 .../production-runtime-reference/README.md         |  1 +
 8 files changed, 74 insertions(+), 13 deletions(-)

```

Éditions sémantiques ciblées R1/R2 de **ce** pass: **03, 04, 05, 07, 09**.

## S. Diff consolidé PRR vs baseline Git (exploitable)

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
index 13e01c2e..df47640f 100644
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
@@ -85,29 +86,36 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
   - **Refuse** → durable refused HD recordable → PREPARE **forbidden** (`HD_REFUSED`); no implicit Authorization; no Attempt.
   - **Amend** → new presentation / re-seal required → prior presentation does **not** unlock PREPARE (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new **accepted** applicable HD exists.
   - Structural offer alone ≠ PREPARE admission. Historical HD without mission binding ≠ unlock. Only an **accepted**, mission-bound, applicable, verified, non-superseded HD opens structural PREPARE.
-- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
+- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4 + Tool-First R1):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
+  - **Pathless bounded non-mutating analysis (local candidate — PENDING_GIT_INTEGRATION):** when concrete WHERE is empty, Product may qualify NON_STRUCTURAL **only** with a **positive** structured non-mutating claim — `executionIntent.intentKind === "read_only"` **or** `repositoryMutationDeclared ∈ {none, read}` — **plus** live Product context, generalist envelope, and no structural/write/docs_write/materialization/elevated contradiction (`qualifyBoundedNonMutatingAnalysisMission`). Positive declaration ≠ Product authority by itself. **Not a positive claim:** `repositoryMutation` absent **when** `read_only` is also absent; `unknown`; `write`. An admissible `read_only` claim is **not** invalidated by the mere absence of `repositoryMutation`. **No invented documentary/Git path.** CycleInstance and Artifact remain optional when gates allow. No systematic HumanDecision on this path.
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
+- **R2 — pathless non-mutating vs Cursor REAL (local candidate — PENDING_GIT_INTEGRATION):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
+  - **Select (`governedExecuteSelectAgent`):** refuse **before** creating a new Attempt — no accepted Attempt from that Select; no REAL process.
+  - **Start (`governedExecuteStart`):** if an Attempt is already `accepted` (e.g. Fake Select earlier), re-evaluate and refuse Start — Attempt stays `accepted` (not `running`); launch-port calls unchanged; no REAL process.
+  Fake/DET (`CURSOR_REAL≠1`) remains admissible. Ordinary write / concrete-path contracts are **not** blocked by this gate. **ZERO Cursor REAL** claimed by this candidate.
 - **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
 - **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
-- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
-- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; no new REAL claim
+- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` + `p6.toolFirst.safetyClosureR1R2.d0.test.ts` (Select refuse + Start on valid Attempt with exact R2 code; TestOnly launch port) — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
+- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; pathless non-mutating REAL fail-closed Product-side; no new REAL claim

 ## F11 — Attempt terminal → Evidence → ReviewBundle
 - **Paths:** execution-attempt + evidence-review aggregates; docs-write appends LPS `evidenceIds`/`reviewBundleIds` for rehydrate
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index fdcedba7..98090dde 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -61,16 +61,27 @@ Nora tool (F04) / F2 analysis / F05 adjacent hand-off
       │              → HD_AMEND_REQUIRES_NEW_PRESENTATION
       │              → re-present / re-seal required
       │              → PREPARE forbidden until new accepted applicable HD
-      └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4)
+      └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4 + Tool-First R1 local candidate)
+           → pathless: positive non-mutating claim required
+                (`read_only` OR repositoryMutationDeclared ∈ {none,read})
+                + complementary Product gates; declaration alone ≠ authority
            → solicitGenericExecutionPrepare (decisionRefs=[])
-           → F09 inspect → Confirm → Authorize → F10 Execute
+           → F09 inspect → Confirm → Authorize
+           → F10 Select → Start → Execute (Fake/DET)
+                └─ if REAL armed + pathless non-mutating (Tool-First R2):
+                     Select: refuse before new Attempt
+                     Start: refuse launch; Attempt stays accepted; no launch-port call
+                     code BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE
       UNKNOWN materiality / structural without accepted+verified HD → FAIL-CLOSED
+      pathless without positive claim (absent mutation AND not read_only) → FAIL-CLOSED
 ```

 OA = authority of record. W2 = Product coordination. Nora = cognition/recommendation only. Cursor = controlled execution under Authorization.

 **Structural PREPARE gate (S1):** only an **accepted**, mission-bound, applicable, verified, non-superseded HumanDecision opens Chemin A PREPARE. Refuse and Amend are **not** admissible prepare paths. Accept alone is not Execute authority.

+**Tool-First R1/R2 (local candidate — PENDING_GIT_INTEGRATION):** R1 gates pathless NON_STRUCTURAL at Materiality→PREPARE (positive claim + Product checks). R2 is a Product dependency of F10 Select/Start on the Cursor REAL boundary — stamp ≠ technical no-write; Fake/DET path unchanged. Not a new OA object; not a parallel engine.
+
 ## DEP edges (stable IDs)

 | ID | From | To | Why |
@@ -80,14 +91,14 @@ OA = authority of record. W2 = Product coordination. Nora = cognition/recommenda
 | DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification |
 | DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision |
 | DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority |
-| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | launch |
+| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays accepted) when REAL+pathless non-mutating |
 | DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence |
 | DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn |
 | DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-INTENT | deterministic structured analysis |
 | DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity |
 | DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt |
 | DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural PREPARE |
-| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs |
+| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate |

 ## Sample impact analysis A — `activeCycleGovernedContinuation.ts`

diff --git a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
index a24f06bd..af05ac4f 100644
--- a/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
@@ -38,6 +38,7 @@
 - **FakeConversationProvider** (`lib/platform/ai/fakeProvider.ts`): deterministic structured intent including path-less active-cycle materialization matcher; may synthesize `note-de-cadrage.md` leaf in some framings.
 - **OpenAI live:** same schemas; non-deterministic linguistics; may omit filename/`continuationKind`.
 - **Cursor REAL:** gated; mutual exclusion with deterministic Cursor E2E boundary asserted in runtime helpers.
+- **Tool-First R2 (local candidate — PENDING_GIT_INTEGRATION):** `SFIA_STUDIO_CURSOR_REAL=1` arms REAL generalist. Pathless non-mutating ECs hit Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` because REAL generalist has **no** technical no-write sandbox: **Select** refuses before new Attempt; **Start** refuses launch while an existing Attempt stays `accepted`. Env flag alone does not prove REAL BOUNDARY. Fake/DET (`CURSOR_REAL≠1`) remains the deterministic path for those missions.

 ## Server vs client

diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index bee84335..7f684d28 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -33,6 +33,10 @@
 | INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 |
 | INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 |
 | INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 |
+| INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING | Pathless NON_STRUCTURAL requires **one** positive structured non-mutating claim: `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` (plus other Product gates). `unknown`/`write` always refuse. `repositoryMutation` **absent** refuses **only when** `read_only` is also absent — absence alone does not invalidate an admissible `read_only` claim | qualifyBoundedNonMutatingAnalysisMission | toolFirst A–J / safetyClosureR1R2 |
+| INV-STAMP-NE-REAL-NOWRITE | Contract `NO_REPOSITORY_MUTATION_*` / bounded analysis stamp ≠ Cursor REAL technical no-write | boundedNonMutatingRealLaunchGate + generalist REAL launch | safetyClosureR1R2 |
+| INV-R2-REAL-PATHLESS-BLOCK | Pathless non-mutating + `SFIA_STUDIO_CURSOR_REAL=1` → Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` on **both** Select and Start (distinct effects — see R2 note) | assertBoundedNonMutatingCursorRealAdmissible | safetyClosureR1R2 |
+| INV-INSPECT-NE-EXECUTE-CTA | Inspection attestation ≠ Execute; Tool-First Exécuter may fold Confirm server-side after attest only | pilotExecutionPresentation / ExecutionSurface | durable continuity / R02 |

 ## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)

@@ -42,9 +46,16 @@
 - **Amend** → new presentation required → PREPARE forbidden (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new accepted applicable HD.
 No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission. Accept alone ≠ Execute.

-**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed.
+**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed. **Tool-First R1:** pathless admission requires a positive non-mutating claim (INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING) **and** complementary Product gates (live context, envelope, no write/docs_write/structural/elevated contradiction). Declaration alone ≠ Product authority. No invented file path; no systematic HD.

-**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN.
+**Tool-First ordinary CTA:** after Inspect attest, Pilot **Exécuter** may carry Confirm (server) then Authorize+launch — Inspect ≠ Execute; Confirm ≠ Authorize ≠ Execute remain.
+
+**R2 REAL pathless (Select ≠ Start effects):** when REAL is armed for a pathless non-mutating EC:
+- **Select:** gate fires **before** creating a new ExecutionAttempt — no Select-accepted Attempt; no Cursor REAL call.
+- **Start:** if an Attempt already exists in `accepted` (e.g. created under Fake/DET), gate re-evaluates and **refuses Start** — Attempt remains `accepted` (not `running`); launch-port call count unchanged; no Cursor REAL effect.
+Fake/DET (`CURSOR_REAL≠1`) remains admissible for both phases. Ordinary write / concrete-path contracts are not blocked by this gate.
+
+**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN; Stamp ≠ REAL no-write.

 **CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: process-local offer loss ≠ universal PREPARE ban when durable accepted HD remains verifiable (see vol 06 / HD11).

@@ -58,6 +69,9 @@ No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD
 | `no_active_cycle` | ACGC | missing active id | blocked | none | yes |
 | `NEW_CYCLE_FORMALIZATION` | ACGC | no materialization intent / explicit new-cycle formalization | historical new-cycle path — **not** aliased from optional documentary `no_require_artifact` | may createCycle on other path | intent-gated |
 | `CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE` | Generic PREPARE | unknown / privileged / spoofed capability identity | prepare refused | none | yes — exact identity match only |
+| `MATERIALITY_UNKNOWN` (pathless without positive claim) | Materiality / Tool-First R1 | No positive claim: (`repositoryMutation` absent **and** not `read_only`) **or** `unknown`/`write` **or** other Product contradictions | PREPARE refused — no silent NON_STRUCTURAL | none | yes |
+| `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Select) | F10 R2 | pathless non-mutating EC + REAL=1 at Select | **No new Attempt**; Select refused; no REAL launch | none | yes — Fake/DET still OK |
+| `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Start) | F10 R2 | same EC + REAL=1 at Start with prior `accepted` Attempt | Start refused; Attempt stays `accepted`; no launch-port call | none | yes — Fake/DET still OK |
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
index d9f19039..eb600e9c 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -171,6 +171,28 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
 | New store/table / parallel engines | NONE |

+## Overlay — Tool-First Generic Execution + R1/R2 (local candidate — PENDING_GIT_INTEGRATION)
+
+| Item | Status |
+|---|---|
+| Pathless analysis PREPARE without invented file path | AS-IMPLEMENTED_IN_CANDIDATE — positive non-mutating claim required (R1) |
+| Systematic HD / mandatory CycleInstance / mandatory Artifact for ordinary pathless | **NOT REQUIRED** when NON_STRUCTURAL gates admit |
+| Positive claim forms (R1) | `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` — either form may qualify **iff** complementary Product gates pass |
+| `repositoryMutation` absent **with** admissible `read_only` | **NOT** an automatic refuse of the positive-claim step — `read_only` alone can satisfy that step |
+| `repositoryMutation` absent **without** `read_only` | **FORBIDDEN** as pathless NON_STRUCTURAL — fail-closed (`repository_mutation_claim_absent` / Materiality UNKNOWN) |
+| `repositoryMutation` unknown / write → pathless NON_STRUCTURAL | **FORBIDDEN** — fail-closed |
+| Nora `repositoryMutation` / `read_only` alone as Product authority | **INSUFFICIENT** — live context, envelope, contradiction checks still apply |
+| Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED** — HD / refuse paths KEEP |
+| Inspect ≠ Execute; server Confirm/Authorize/Execute distinct | **PRESERVED** — Exécuter may fold Confirm after attest only |
+| Cursor REAL generalist technical no-write | **ABSENT** — debt open |
+| R2 Select (REAL + pathless non-mutating) | AS-IMPLEMENTED_IN_CANDIDATE — refuse **before new Attempt**; code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` |
+| R2 Start (REAL + pathless non-mutating, Attempt already `accepted`) | AS-IMPLEMENTED_IN_CANDIDATE — refuse Start; Attempt stays `accepted`; zero launch-port calls; same code |
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

## T. Contenu PRR consolidé — extraits sections concernées

### 07 (invariants + R2 note + failure modes)

```
30|| INV-INSPECT-NE-CONFIRM | Inspection ≠ Confirmation | unified exam + confirm services | Pass03/04 UIC |
31|| INV-CONFIRM-NE-AUTH | Confirmation ≠ Authorization | authorize* services | authorizeGeneric / confirmForAuthorization |
32|| INV-AUTH-NE-EXEC | Authorization ≠ Execution | governedExecute Select/Start | projectScopedCursorSelection |
33|| INV-EMPTY-REFS-NE-STRUCTURAL | `decisionRefs=[]` admissible only when NON_STRUCTURAL CURRENT gates allow | Option 1 / G-D4 + materiality | p6.o1 / gD4 / materialityBlock01 |
34|| INV-STRUCTURAL-NEEDS-VERIFIED-HD | Structural mission PREPARE requires verified mission-bound HD | verifyGenericMissionHumanDecisionForPrepare | mHd01 / DER16 E12 |
35|| INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | STRUCTURAL PREPARE requires **accepted**, applicable, verified, mission-bound, non-superseded HD — Refuse (`HD_REFUSED`) and Amend (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) are not prepare paths; Accept alone ≠ Execute | verifyGenericMissionHumanDecisionForPrepare | mHd01 (incl. refuse/amend cases) / DER16 |
36|| INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING | Pathless NON_STRUCTURAL requires **one** positive structured non-mutating claim: `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` (plus other Product gates). `unknown`/`write` always refuse. `repositoryMutation` **absent** refuses **only when** `read_only` is also absent — absence alone does not invalidate an admissible `read_only` claim | qualifyBoundedNonMutatingAnalysisMission | toolFirst A–J / safetyClosureR1R2 |
37|| INV-STAMP-NE-REAL-NOWRITE | Contract `NO_REPOSITORY_MUTATION_*` / bounded analysis stamp ≠ Cursor REAL technical no-write | boundedNonMutatingRealLaunchGate + generalist REAL launch | safetyClosureR1R2 |
38|| INV-R2-REAL-PATHLESS-BLOCK | Pathless non-mutating + `SFIA_STUDIO_CURSOR_REAL=1` → Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` on **both** Select and Start (distinct effects — see R2 note) | assertBoundedNonMutatingCursorRealAdmissible | safetyClosureR1R2 |
39|| INV-INSPECT-NE-EXECUTE-CTA | Inspection attestation ≠ Execute; Tool-First Exécuter may fold Confirm server-side after attest only | pilotExecutionPresentation / ExecutionSurface | durable continuity / R02 |
40|
41|## Dual admission paths — authority summary (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION)
42|
43|**Chemin A — STRUCTURAL:** mission signals / HD-required materiality → process-local presentation carrier → Pilot disposition:
44|- **Accept** → durable HD `accepted` → verify basis/identity/mission/digest/CURRENT/non-superseded → PREPARE (refs verified) → inspect → Confirm (if required) → Authorize → Execute.
45|- **Refuse** → HD refused → PREPARE forbidden (`HD_REFUSED`); no Authorization; no Attempt.
46|- **Amend** → new presentation required → PREPARE forbidden (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new accepted applicable HD.
47|No artificial HD. Structural offer alone does not PREPARE. Unbound historical HD does not unlock a different mission. Accept alone ≠ Execute.
48|
49|**Chemin B — NON_STRUCTURAL:** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN → fail-closed. **Tool-First R1:** pathless admission requires a positive non-mutating claim (INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING) **and** complementary Product gates (live context, envelope, no write/docs_write/structural/elevated contradiction). Declaration alone ≠ Product authority. No invented file path; no systematic HD.
50|
51|**Tool-First ordinary CTA:** after Inspect attest, Pilot **Exécuter** may carry Confirm (server) then Authorize+launch — Inspect ≠ Execute; Confirm ≠ Authorize ≠ Execute remain.
52|
53|**R2 REAL pathless (Select ≠ Start effects):** when REAL is armed for a pathless non-mutating EC:
54|- **Select:** gate fires **before** creating a new ExecutionAttempt — no Select-accepted Attempt; no Cursor REAL call.
55|- **Start:** if an Attempt already exists in `accepted` (e.g. created under Fake/DET), gate re-evaluates and **refuses Start** — Attempt remains `accepted` (not `running`); launch-port call count unchanged; no Cursor REAL effect.
56|Fake/DET (`CURSOR_REAL≠1`) remains admissible for both phases. Ordinary write / concrete-path contracts are not blocked by this gate.
57|
58|**Separations (KEEP):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN; Stamp ≠ REAL no-write.
59|
60|**CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: process-local offer loss ≠ universal PREPARE ban when durable accepted HD remains verifiable (see vol 06 / HD11).
61|
62|## Failure modes (selected)
63|
64|| Code/State | Layer | Trigger | User effect | Mutations | Fail-closed |
65||---|---|---|---|---|---|
66|| `no_require_artifact` | ACGC | materialization signal without CURRENT REQUIRE_ARTIFACT / APPLICABLE∧¬SATISFIED | when actionable: Generic PREPARE on same cycle (P6-HQA-F05-GD4-01); else clarification — **never** invent REQUIRE_ARTIFACT HD | none unauthorized | yes |
67|| `artifact_already_satisfied` | ACGC | Artifact SATISFIED | blocked | none | yes |
68|| `lifecycle_assess_failed` | ACGC | assess throw/!ok | blocked | none | yes |
69|| `no_active_cycle` | ACGC | missing active id | blocked | none | yes |
70|| `NEW_CYCLE_FORMALIZATION` | ACGC | no materialization intent / explicit new-cycle formalization | historical new-cycle path — **not** aliased from optional documentary `no_require_artifact` | may createCycle on other path | intent-gated |
71|| `CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE` | Generic PREPARE | unknown / privileged / spoofed capability identity | prepare refused | none | yes — exact identity match only |
72|| `MATERIALITY_UNKNOWN` (pathless without positive claim) | Materiality / Tool-First R1 | No positive claim: (`repositoryMutation` absent **and** not `read_only`) **or** `unknown`/`write` **or** other Product contradictions | PREPARE refused — no silent NON_STRUCTURAL | none | yes |
73|| `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Select) | F10 R2 | pathless non-mutating EC + REAL=1 at Select | **No new Attempt**; Select refused; no REAL launch | none | yes — Fake/DET still OK |
74|| `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Start) | F10 R2 | same EC + REAL=1 at Start with prior `accepted` Attempt | Start refused; Attempt stays `accepted`; no launch-port call | none | yes — Fake/DET still OK |
75|| `CKC_*` | CKC | incoherent/unavailable mapping | qualification fail | none unauthorized | yes |
76|| `AUTHORITY_NOT_CONFIGURED` | authz | missing local Pilot gate | cannot decide | none | yes |
77|| `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | docs_write | missing managed root | cannot REAL write | none | yes |
78|| Session path orphan | Memory B | worktree cwd default | empty transcript UI | Truth C intact | operational |
79|
80|Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is **expected**.

```

### 09 (overlay Tool-First R1/R2)

```
174|## Overlay — Tool-First Generic Execution + R1/R2 (local candidate — PENDING_GIT_INTEGRATION)
175|
176|| Item | Status |
177||---|---|
178|| Pathless analysis PREPARE without invented file path | AS-IMPLEMENTED_IN_CANDIDATE — positive non-mutating claim required (R1) |
179|| Systematic HD / mandatory CycleInstance / mandatory Artifact for ordinary pathless | **NOT REQUIRED** when NON_STRUCTURAL gates admit |
180|| Positive claim forms (R1) | `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` — either form may qualify **iff** complementary Product gates pass |
181|| `repositoryMutation` absent **with** admissible `read_only` | **NOT** an automatic refuse of the positive-claim step — `read_only` alone can satisfy that step |
182|| `repositoryMutation` absent **without** `read_only` | **FORBIDDEN** as pathless NON_STRUCTURAL — fail-closed (`repository_mutation_claim_absent` / Materiality UNKNOWN) |
183|| `repositoryMutation` unknown / write → pathless NON_STRUCTURAL | **FORBIDDEN** — fail-closed |
184|| Nora `repositoryMutation` / `read_only` alone as Product authority | **INSUFFICIENT** — live context, envelope, contradiction checks still apply |
185|| Structural / protected-path / elevated caps / docs_write disguise | **PRESERVED** — HD / refuse paths KEEP |
186|| Inspect ≠ Execute; server Confirm/Authorize/Execute distinct | **PRESERVED** — Exécuter may fold Confirm after attest only |
187|| Cursor REAL generalist technical no-write | **ABSENT** — debt open |
188|| R2 Select (REAL + pathless non-mutating) | AS-IMPLEMENTED_IN_CANDIDATE — refuse **before new Attempt**; code `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` |
189|| R2 Start (REAL + pathless non-mutating, Attempt already `accepted`) | AS-IMPLEMENTED_IN_CANDIDATE — refuse Start; Attempt stays `accepted`; zero launch-port calls; same code |
190|| Fake/DET pathless non-mutating Select/Start | ADMISSIBLE — DETERMINISTIC at tested scope |
191|| Integration on main / GitHub CI / HQA / P6 GLOBAL PASS | **NOT CLAIMED** — PENDING_GIT_INTEGRATION |
192|| REAL BOUNDARY PROVEN / READY FOR REAL / runtime v3 ADOPTED | **NOT CLAIMED** |
193|| Debt `TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT` | OPEN — sandbox or Product-bound RO agent requires distinct Morris architecture GO |
194|| Exit for debt | Enforceable no-write at REAL generalist (or equivalent) + GO + Bounded REAL proof |
195|

```

### 03 (F08 R1 + F10 R2)

```
85|  - **Accept** → durable OA HumanDecision `accepted` with `genericMissionContext` / `presentationDigest` → `verifyGenericMissionHumanDecisionForPrepare` (DecisionBasis, identity/mission/digest, CURRENT applicability, non-superseded) → structural PREPARE with verified `decisionRefs` **iff** all gates pass. Accept alone ≠ Inspection ≠ Confirmation ≠ Authorization ≠ Execute.
86|  - **Refuse** → durable refused HD recordable → PREPARE **forbidden** (`HD_REFUSED`); no implicit Authorization; no Attempt.
87|  - **Amend** → new presentation / re-seal required → prior presentation does **not** unlock PREPARE (`HD_AMEND_REQUIRES_NEW_PRESENTATION`) until a new **accepted** applicable HD exists.
88|  - Structural offer alone ≠ PREPARE admission. Historical HD without mission binding ≠ unlock. Only an **accepted**, mission-bound, applicable, verified, non-superseded HD opens structural PREPARE.
89|- **Chemin B — NON_STRUCTURAL (Option 1 / G-D4 + Tool-First R1):** NON_STRUCTURAL CURRENT + gates satisfied → PREPARE with `decisionRefs=[]` admissible; empty refs ≠ structural bypass; Confirm/Authorize unchanged.
90|  - **Pathless bounded non-mutating analysis (local candidate — PENDING_GIT_INTEGRATION):** when concrete WHERE is empty, Product may qualify NON_STRUCTURAL **only** with a **positive** structured non-mutating claim — `executionIntent.intentKind === "read_only"` **or** `repositoryMutationDeclared ∈ {none, read}` — **plus** live Product context, generalist envelope, and no structural/write/docs_write/materialization/elevated contradiction (`qualifyBoundedNonMutatingAnalysisMission`). Positive declaration ≠ Product authority by itself. **Not a positive claim:** `repositoryMutation` absent **when** `read_only` is also absent; `unknown`; `write`. An admissible `read_only` claim is **not** invalidated by the mere absence of `repositoryMutation`. **No invented documentary/Git path.** CycleInstance and Artifact remain optional when gates allow. No systematic HumanDecision on this path.
91|  - Contract may stamp `boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` — stamp ≠ REAL no-write enforcement (see F10 R2).
92|- **S8 project context (D-ER-17):** absence of active CycleInstance does **not** alone block Generic PREPARE; **no invented CycleInstance**.
93|- **Fidelity (PR #586 + candidate):** pending offer may retain documentary `missionEffects`; exact capability identities only; Nora path candidates non-authoritative until Product resolve.
94|- **Paths:** `prepareGenericExecutionContractDraft.ts`, `resolveAuthoritativeProductMateriality.ts`, `recordGenericMissionHumanDecision.ts`, `verifyGenericMissionHumanDecisionForPrepare.ts`, `prepareAndResolveM3ProductPath` (legacy), `lib/oa/execution-contract/**`
95|- **Invariant:** cannot expand DecisionBasis / sealed WHAT; PREPARE ≠ AUTHORIZE ≠ EXECUTE; no ExecutionAttempt on PREPARE
96|- **Proof:** G-D4 / materiality / M-HD / DER16 / Option1 / `p6.toolFirst.executionContractSimplification` / `p6.toolFirst.safetyClosureR1R2` — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake). REAL NOT PROVEN.
97|- **Status:** COMPLETE domain (legacy); Generic PREPARE + Tool-First R1 AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION
98|
99|## F09 — EC inspect / Confirmation / authority
100|- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
101|- **Unified inspection (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** Conversation / Execution / Trajectory share one exam contract (`ContractInspectionExamPanel` + `contractInspectionExam` helpers). Explicit open ≠ write; Attest requires presented facts; identity binding = `projectId` + `executionContractId` + `version` + `semanticFingerprint`. Contract change → reinspection. PREPARE must not auto-inspect. Trajectory does not invent inspection on PREPARE/Execute alone.
102|- **requiredInspectedFacts / disclosure:** canonical inspection disclosure on EC; Confirm ≠ Inspect ≠ Authorize ≠ Execute.
103|- **Tool-First ordinary Pilot CTA (local candidate — PENDING_GIT_INTEGRATION):** after inspection attestation is sufficient/aligned, Pilot surface may show **Exécuter** while status remains `confirmation_required` / À confirmer — the single Pilot gesture folds server Confirm (when required) then Authorize+Select/Start. **Inspect ≠ Execute** preserved (no auto-attest; no silent Confirm). Server steps Confirm / Authorize / Execute remain distinct. Paths: `pilotExecutionPresentation.ts`, `ExecutionSurface.tsx`.
104|- **Product path (legacy):** Confirm+execute folded in `projectAssistantConfirmAndExecuteResolvedM3Action` (boundary validates MORRIS legacy or N2 Product Pilot matching PREPARE)
105|- **Proof:** Pass03/Pass04 UIC + durable/reconcile continuity + pilotExecutionPresentation / R02 — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE
106|- **Status:** COMPLETE tables/services; unified exam + Tool-First CTA AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION
107|
108|## F10 — Governed execution (docs_write / Cursor)
109|- **Gate:** effective Authorization on EC + attempt lifecycle; REAL additionally requires `SFIA_STUDIO_CURSOR_REAL` + managed repo base + Product REAL readiness fail-closed
110|- **Project-scoped Cursor Select/Start (AS_IMPLEMENTED_IN_CANDIDATE / PENDING_GIT_INTEGRATION):** AUTHORIZED PRODUCT_GOVERNED EC may Select→Start→Result on Fake Cursor **without** active CycleInstance when the existing OA contract admits null-cycle — **no invented CycleInstance**, **no invented HumanDecision**. `SelectionProfile` is a technical OA carrier (e.g. capabilities_deterministic), **not** a methodological SFIA Standard/Critical access gate. Unauthorized / closed-cycle / missing project remain refuse.
111|- **R2 — pathless non-mutating vs Cursor REAL (local candidate — PENDING_GIT_INTEGRATION):** Cursor REAL generalist launch remains technically writable (`--sandbox disabled` class). A contract stamp / prompt “no write” is **not** enforcement. When EC is pathless non-mutating (`boundedNonMutatingAnalysis` / `NO_REPOSITORY_MUTATION_*` + empty concrete scope) **and** `SFIA_STUDIO_CURSOR_REAL=1`, Product applies `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (`boundedNonMutatingRealLaunchGate.ts`) at **two distinct phases**:
112|  - **Select (`governedExecuteSelectAgent`):** refuse **before** creating a new Attempt — no accepted Attempt from that Select; no REAL process.
113|  - **Start (`governedExecuteStart`):** if an Attempt is already `accepted` (e.g. Fake Select earlier), re-evaluate and refuse Start — Attempt stays `accepted` (not `running`); launch-port calls unchanged; no REAL process.
114|  Fake/DET (`CURSOR_REAL≠1`) remains admissible. Ordinary write / concrete-path contracts are **not** blocked by this gate. **ZERO Cursor REAL** claimed by this candidate.
115|- **Report protocol (POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01):** EC→Cursor projection requires machine-readable `CURSOR_EXECUTION_REPORT_JSON=<one-line JSON>` (`oa.cursor-execution-report.1`) in addition to business-readable rapport; prose-only is not Evidence-capable
116|- **Report-required runtime (docs_write nominal):** after Attempt `succeeded`, Product handoff fail-closes with `CURSOR_EXECUTION_REPORT_REQUIRED` / `CURSOR_EXECUTION_REPORT_MALFORMED` / bind mismatch when the structured claim is absent, unparseable, or identity-mismatched. Technical Attempt stays succeeded; Product SUCCESS is never invented. Independently verified artifact bytes may still be persisted as technical Evidence.
117|- **Proof:** `p6.projectScopedCursorSelection.d0.test.ts` + `p6.toolFirst.safetyClosureR1R2.d0.test.ts` (Select refuse + Start on valid Attempt with exact R2 code; TestOnly launch port) — DETERMINISTICALLY_PROVEN_AT_TESTED_SCOPE (Fake; ZERO Cursor REAL)
118|- **Status:** BOUNDARY gated; REAL only under distinct Morris GO; Fake docs-write + Fake Select/Start proven at tested scope; pathless non-mutating REAL fail-closed Product-side; no new REAL claim
119|
120|## F11 — Attempt terminal → Evidence → ReviewBundle

```

### 04 (dual path + DEP table)

```
55|      │         │         (PREPARE ≠ Inspect ≠ Confirm ≠ Authorize ≠ Execute)
56|      │         ├─ REFUSE
57|      │         │    → OA HumanDecision refused (recordable)
58|      │         │    → PREPARE forbidden (HD_REFUSED)
59|      │         │    → no Authorization / no Attempt
60|      │         └─ AMEND
61|      │              → HD_AMEND_REQUIRES_NEW_PRESENTATION
62|      │              → re-present / re-seal required
63|      │              → PREPARE forbidden until new accepted applicable HD
64|      └─ NON_STRUCTURAL CURRENT (Option 1 / G-D4 + Tool-First R1 local candidate)
65|           → pathless: positive non-mutating claim required
66|                (`read_only` OR repositoryMutationDeclared ∈ {none,read})
67|                + complementary Product gates; declaration alone ≠ authority
68|           → solicitGenericExecutionPrepare (decisionRefs=[])
69|           → F09 inspect → Confirm → Authorize
70|           → F10 Select → Start → Execute (Fake/DET)
71|                └─ if REAL armed + pathless non-mutating (Tool-First R2):
72|                     Select: refuse before new Attempt
73|                     Start: refuse launch; Attempt stays accepted; no launch-port call
74|                     code BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE
75|      UNKNOWN materiality / structural without accepted+verified HD → FAIL-CLOSED
76|      pathless without positive claim (absent mutation AND not read_only) → FAIL-CLOSED
77|```
78|
79|OA = authority of record. W2 = Product coordination. Nora = cognition/recommendation only. Cursor = controlled execution under Authorization.
80|
81|**Structural PREPARE gate (S1):** only an **accepted**, mission-bound, applicable, verified, non-superseded HumanDecision opens Chemin A PREPARE. Refuse and Amend are **not** admissible prepare paths. Accept alone is not Execute authority.
82|
83|**Tool-First R1/R2 (local candidate — PENDING_GIT_INTEGRATION):** R1 gates pathless NON_STRUCTURAL at Materiality→PREPARE (positive claim + Product checks). R2 is a Product dependency of F10 Select/Start on the Cursor REAL boundary — stamp ≠ technical no-write; Fake/DET path unchanged. Not a new OA object; not a parallel engine.
84|
85|## DEP edges (stable IDs)
86|
87|| ID | From | To | Why |
88||---|---|---|---|
89|| DEP-ACGC-ART | OBJ-ARTIFACT-CONTINUATION | OBJ-ARTIFACT-ROUTING | target composition under workspace |
90|| DEP-ACGC-ASSESS | OBJ-ARTIFACT-CONTINUATION | OBJ-FINALIZATION-ASSESS | APPLICABLE/SATISFIED gate |
91|| DEP-ACGC-PROP | OBJ-ARTIFACT-CONTINUATION | OBJ-PROPOSAL | continuation emits Proposal/clarification |
92|| DEP-PROP-HD | OBJ-PROPOSAL | OBJ-HD | Pilot decision |
93|| DEP-HD-EC | OBJ-HD | OBJ-EC | prepare after authority |
94|| DEP-EC-ATT | OBJ-EC | OBJ-ATTEMPT | Select→Attempt; Tool-First R2 may refuse Select (no Attempt) or Start (Attempt stays accepted) when REAL+pathless non-mutating |
95|| DEP-ATT-EV | OBJ-ATTEMPT | OBJ-EVIDENCE | terminal → evidence |
96|| DEP-MW5-TURN | OBJ-MW5-CHALLENGE | OBJ-TURN-ORCH | challenge gate on turn |
97|| DEP-FAKE-INTENT | OBJ-FAKE-PROVIDER | OBJ-INTENT | deterministic structured analysis |
98|| DEP-SESSION-TURN | OBJ-MEMORY-B | OBJ-TURN-ORCH | transcript continuity |
99|| DEP-NORA-GENPREP | OBJ-TURN-ORCH | OBJ-EC | Nora solicits Generic PREPARE only (D-ER-16); never Attempt |
100|| DEP-GMHD-EC | OBJ-GENERIC-MISSION-HD | OBJ-EC | verified mission-bound HD before structural PREPARE |
101|| DEP-MAT-GENPREP | OBJ-ARTIFACT-CONTINUATION / materiality | OBJ-EC | Materiality CURRENT gates empty vs HD-bound refs; Tool-First R1 pathless positive-claim gate |
102|
103|## Sample impact analysis A — `activeCycleGovernedContinuation.ts`
104|
105|**Changed path:** `features/project-assistant/f2/activeCycleGovernedContinuation.ts`

```

### 05 (Fake/Real R2)

```
38|- **FakeConversationProvider** (`lib/platform/ai/fakeProvider.ts`): deterministic structured intent including path-less active-cycle materialization matcher; may synthesize `note-de-cadrage.md` leaf in some framings.
39|- **OpenAI live:** same schemas; non-deterministic linguistics; may omit filename/`continuationKind`.
40|- **Cursor REAL:** gated; mutual exclusion with deterministic Cursor E2E boundary asserted in runtime helpers.
41|- **Tool-First R2 (local candidate — PENDING_GIT_INTEGRATION):** `SFIA_STUDIO_CURSOR_REAL=1` arms REAL generalist. Pathless non-mutating ECs hit Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` because REAL generalist has **no** technical no-write sandbox: **Select** refuses before new Attempt; **Start** refuses launch while an existing Attempt stays `accepted`. Env flag alone does not prove REAL BOUNDARY. Fake/DET (`CURSOR_REAL≠1`) remains the deterministic path for those missions.
42|
43|## Server vs client
44|
45|- Product binding/authority envs are **server-only** (never `NEXT_PUBLIC_*`).

```

## U. Contrôles de cohérence

| Contrôle | Résultat |
|---|---|
| R1 == code local | OK — read_only OK avec mutation absente |
| R1 ne contourne pas Product gates | OK — déclaration ≠ autorité |
| R2 Select ≠ Start documentés | OK — 03/05/07/09/04 |
| Attempt effects exacts | OK — aligned safetyClosureR1R2 |
| Volume 04 classé | ADAPT justifié |
| Corpus PRR cohérent F04/F08/F09/F10 | OK |
| 15 Product préservés | OK (ce pass) |
| Manifest inchangé | OK (diff vide) |
| Digests non actualisés | OK |
| Secrets | aucun |
| Hors scope | aucun fichier doctrine/OA/Cursor/tests Product édité ce pass |
| Fake/REAL reserves | conservées — pas de REAL BOUNDARY PROVEN |
| Candidate / PENDING_GIT_INTEGRATION | conservé |
| Conformance PASS | **NON déclaré** (digests pending) |

## V. Contrôles Git

`git diff --check`: OK (vide)

### name-status

```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.executionReconcileContinuity.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
M	projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
M	projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/README.md
```

### cached

```
(vide)
```

### stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 167 +----------------
 ...03.durableExecutionActionContinuity.ui.test.tsx |  53 +++---
 ...p5.s03.executionReconcileContinuity.ui.test.tsx |  19 +-
 .../p5.s03.pilotExecutionPresentation.d0.test.ts   |  11 +-
 .../p6.r02.actionAvailability.d0.test.ts           |   7 +-
 .../p6.der16.genericNoraToolInvocation.d0.test.ts  |   9 +-
 .../surfaces/ExecutionSurface.tsx                  |  44 ++++-
 .../surfaces/pilotExecutionPresentation.ts         |   8 +-
 .../features/project-assistant/orchestrateTurn.ts  |   1 +
 .../w2/governedExecuteAuthorizedContract.ts        |  25 +++
 .../w2/prepareGenericExecutionContractDraft.ts     |  65 ++++++-
 .../w2/resolveAuthoritativeProductMateriality.ts   | 207 +++++++++++++++++++--
 .../productExecutionAgentsTools.ts                 |  18 ++
 .../02-runtime-object-catalog.md                   |   1 +
 .../03-end-to-end-flow-catalog.md                  |  22 ++-
 .../04-dependency-impact-map.md                    |  19 +-
 ...05-environments-configuration-and-boundaries.md |   1 +
 .../07-authority-invariants-and-failure-modes.md   |  18 +-
 .../08-test-proof-and-conformance-map.md           |   3 +
 ...9-known-gaps-reserves-and-current-boundaries.md |  22 +++
 .../production-runtime-reference/README.md         |   1 +
 21 files changed, 474 insertions(+), 247 deletions(-)
```

### untracked

```
projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
projects/sfia-studio/app/features/project-assistant/w2/boundedNonMutatingRealLaunchGate.ts
```

## W. Manifest non modifié

`production-runtime-reference.manifest.json` — diff vs HEAD: **vide**. Aucun `--write-digests`.

## X. Digests non actualisés

Conformance checker attendu: **REFERENCE REVIEW REQUIRED** jusqu'à refresh ultérieur sous GO distinct post-ACCEPT ChatGPT.

## Y. Fake / Real Qualification

| Item | Valeur |
|---|---|
| Applicable | OUI |
| Fake | Tests déterministes Tool-First antérieurs (non rejoués ce pass documentaire) |
| REAL | NON exécuté; NON autorisé |
| Niveau ce pass | DOCUMENTARY SEMANTIC ALIGNMENT WITH VERIFIED LOCAL PRODUCT CODE |
| Claims interdits | REAL BOUNDARY PROVEN / E2E REAL / CURSOR REAL READ-ONLY / P6 GLOBAL PASS / PRODUCT READY / RUNTIME V3 ADOPTED — **non affirmés** |

## Z. Dette no-write et condition de sortie

**Dette:** TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT.

**Condition de sortie (future):** enforcement no-write REAL techniquement applicable, qualifié et prouvé sous gate Morris distinct.

Ce pass ne clôture pas la dette.

## AA. Réserves ouvertes

1. Digests PRR non rafraîchis → conformance non PASS.
2. Product lot non commité / non pushé.
3. Dette no-write REAL ouverte.
4. ACCEPT sémantique ChatGPT **en attente**.
5. Suite GO historique commit/push conditionnée à ACCEPT + Git Truth CURRENT.

## AB. Décisions Morris restantes

1. ChatGPT Final Content Review → ACCEPT / AMEND / STOP.
2. Si ACCEPT: requalifier GO historique pour digest refresh + full validation + commit/push Product.
3. PR Product: GO distinct.
4. Cursor REAL / Human QA: GO distinct.
5. Clôture dette no-write: GO distinct.

## AC. Git Review Index

| Path | Rôle |
|---|---|
| `.tmp-sfia-review/chatgpt-review.md` | Review Pack FULL (ce fichier) |
| `projects/sfia-studio/production-runtime-reference/{03,04,05,07,09}…` | Corrections sémantiques |
| `projects/sfia-studio/production-runtime-reference/{README,02,08}…` | Candidat prior (cohérence) |
| 15 fichiers Tool-First | LOCAL CANDIDATE préservé |
| Manifest | READ-ONLY |

## AD. Git Truth final (pré-handoff publish)

Voir §D + §V. HEAD Product inchangé (`e03c7b9fd3665b89a4083a937b82424c5e7f6406`). Staged vide. Dirty attendu.

## AE. Verdict

**PRR SEMANTIC CORRECTION COMPLETE — LOCAL DOCUMENTARY CANDIDATE — READY FOR CHATGPT FINAL CONTENT REVIEW.**

Ce verdict ≠ ACCEPT définitif ≠ PRR CONFORMANCE PASS ≠ PRODUCT COMMITTED.

## AF. Instruction ChatGPT

Lire le Review Handoff distant:

`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Effectuer:

**SFIA STUDIO — PRR SEMANTIC CORRECTION PASS FINAL CONTENT REVIEW.**

Vérifier:

- contrat R1 exact; déclaration positive; contradictions write; protections Product
- contrat R2 Select/Start; conservation Attempt; zéro lancement REAL
- classification volume 04; cohérence F04/F08/F09/F10
- HumanDecision et autorité; dette no-write; limites Fake/REAL
- contenu modifié complet; digests non actualisés; Product inchangé; état Git final

Rendre: **ACCEPT** | **AMEND REQUIRED** | **STOP**.

Ne pas autoriser automatiquement la suite sur un simple rapport Cursor.
