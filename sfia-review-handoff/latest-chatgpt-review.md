# SFIA Studio — PR #586 CI Reference Synchronization — Review Pack FULL

- **Horodatage** : 2026-10-15T22:56:00+0200 (Europe/Paris)
- **GO Morris** : PR #586 CI REFERENCE SYNCHRONIZATION — commit/push docs — NON MERGE
- **Finding** : P6-HQA-F05-GD4-01
- **Profil** : CRITICAL
- **Cycle** : 13 — PR readiness
- **CKC** : ckc:studio:pr-readiness (guidance only — no merge authority)

## 1. GO Morris consommé

| Action | Autorisé | Consommé |
|---|---|---|
| Revue documentaire bornée | OUI | OUI |
| Sync Living Runtime Reference | OUI | OUI |
| Digest refresh après revue | OUI | OUI |
| Commit + push branche PR | OUI | OUI |
| Merge | NON | NON |

## 2. Local Git Truth initial

| Check | Valeur |
|---|---|
| origin/main | `52f3688476e41cbab8fbe230f0ef4ddddb9aa56e` MATCH |
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD initial | `9b9cd5e5052da5781678a23a86c82b8b3283627e` |
| PR #586 | OPEN · base main · mergedAt null |
| Staged | AUCUN |
| Delta hors tmp | AUCUN Product |

## 3. Sources consultées

Cycle template / routing / guardrails ; convergence ; product-completion ; product-simplification 02/07 ; framing 30/32/35 ; CKC 13-pr-readiness ; Living Production Runtime Reference README + volumes 02–09 + manifeste ; checker `check-production-runtime-reference.mjs` ; conformance test ; diff PR #586 Product ; handoff Git Integration `34a3b6dd` / blob `3477182f`.

## 4. CI failure originale

| Item | Valeur |
|---|---|
| Workflow | SFIA Studio CI |
| Run | [38798709984](https://github.com/mcleland147/sfia-workspace/actions/runs/38798709984) |
| Étape | Unit tests (Vitest) |
| Test | `productionRuntimeReference.conformance.d0.test.ts` L100 |
| Cause | digest drift `orchestrateF2.ts` manifest `0f7c73b7539df09d` ≠ current `6200659a4be2f20c` |
| Suite CI | 5895 PASS / 1 FAIL / 143 SKIPPED |
| Typecheck / Lint / Build | PASS |
| Required Gate | FAILURE (conséquence Vitest) |

Pas de régression fonctionnelle Product démontrée — drift de référence uniquement.

## 5. Convergence Pre-check

P6 IN PROGRESS. Correctif Product PR #586 KEEP. Living Reference ADAPT. Manifeste ADAPT après revue sémantique. Dettes Generic PREPARE (offer process-local ; target autoritatif non résolu au PREPARE ; REAL non retesté) **conservées**.

## 6. Impact analysis — matrice

| Source modifiée (PR) | Tracked? | Component | Flows | Invariants | Impact sémantique | Volumes | Action |
|---|---|---|---|---|---|---|---|
| `orchestrateF2.ts` | OUI | OBJ-TURN-ORCH | F05 (+F06/F07/F10 adj.) | INV-NO-SILENT-HD, INV-NO-EXEC-BEFORE-AUTH | **YES** — eligible Generic PREPARE si `no_require_artifact` | 03,04,07,08,09,README | Documenter routing borné |
| `activeCycleGovernedContinuation.ts` | OUI | OBJ-ARTIFACT-CONTINUATION | F05 | INV-APPLICABILITY-NE-AUTHORITY, INV-ARTIFACT-COND, INV-NO-SILENT-HD | **YES** — helper optional documentary ; message `no_require_artifact` | 02,03,04,07,09 | Distinguer Artifact vs optional |
| `fakeProvider.ts` | OUI | Fake boundary | F05 tests | INV-FAKE-REAL-SM | **YES** (Fake only) — cue `__P6_OPTIONAL_DOCUMENTARY_MD__` | 03,05*,08,09 | Qualifier Fake ≠ LIVE |
| `pendingGenericPrepareOfferStore.ts` | NON | (adjacent) | F05 | INV-PROP-NOT-SOLE-RESTART analogue | **YES** — missionEffects | 06,09 | Gap process-local |
| `prepareGenericExecutionContractDraft.ts` | NON | (adjacent) | F05/F08 | INV-CAP-NE-AUTH | **YES** — candidates non autoritatifs | 03,07,09 | Documenter target fidelity |
| `resolveAuthoritativeProductMateriality.ts` | NON | (adjacent) | F05 | materiality server-owned | **YES** — exact envelope helper | 03,07 | Cohérence caps |
| `genericPrepareCapabilityEnvelope.ts` | NON | (adjacent) | F05 | exact identity | **YES** — new helper | 03,07,09 | Exact match |
| F05 optional routing test | NON | proof | F05 | — | **YES** (oracle) | 08 | Ajouter mapping test |

\*05 non modifié : Fake déjà décrit ; cue documentée via 03/08/09.

### Justification NO vs YES

Aucun **SEMANTIC IMPACT: NO** pour les trois sources tracked — diffs observés changent le routage Product / le classifier ACGC / la frontière Fake de test. UNKNOWN non utilisé.

## 7. Revue sémantique A–J (résumé)

| Point | Verdict |
|---|---|
| A Artifact obligatoire | PRESERVED |
| B Optional documentary → Generic PREPARE | AS-IMPLEMENTED |
| C no_require_artifact ≠ NEW_CYCLE | PRESERVED |
| D Materiality server-owned | PRESERVED |
| E Intent fidelity | AS-IMPLEMENTED |
| F Exact capabilities | AS-IMPLEMENTED |
| G Documentary target non autoritatif | AS-IMPLEMENTED |
| H PREPARE≠AUTHORIZE | PRESERVED |
| I Fake ≠ LIVE | EXPLICITÉ |
| J Restart offer process-local | EXPLICITÉ / dette |

## 8. Digests avant / après (sources tracked)

| Path | Avant | Après |
|---|---|---|
| `orchestrateF2.ts` | `0f7c73b7539df09d` | `6200659a4be2f20c` |
| `activeCycleGovernedContinuation.ts` | `34a387438181cc9d` | `57646c517d2ccdb6` |
| `fakeProvider.ts` | `aa71f77def274a75` | `b8e30897933dd2f0` |

Volumes actualisés (après contenu) : README `d6e17088b0cc5762` ; 02 `f820789e8f4d7af3` ; 03 `2e53911afec78653` ; 04 `f7f8d21a0efb997b` ; 06 `e65f13a723097cff` ; 07 `3dbdf5191b9b4670` ; 08 `a9adba70a42a1e55` ; 09 `716f81a3b1cb5937`.

`lastReviewedCommit` = `9b9cd5e5052da5781678a23a86c82b8b3283627e` (baseline Product déjà livrée — **pas** le SHA du commit docs futur au moment de la revue).
`lastReviewedAt` = `2026-10-15T22:51:00+02:00`.

Preuve de revue avant refresh : impact matrix + volumes édités **avant** `node scripts/check-production-runtime-reference.mjs --write-digests`.

## 9. Fichiers réellement modifiés (commit docs)

9 fichiers Living Reference uniquement — **zéro Product** :

b4c1d862 docs(studio): sync runtime reference for P6 F05 routing
M	projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
M	projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M	projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/README.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
## 10. Diff documentaire complet (commit docs)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
index b868cf56..b4178031 100644
--- a/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
@@ -138,9 +138,10 @@ Convention: each card lists **SoT**, **persistence**, **key paths**, **tests**.

 - **Purpose:** Whether deliverable is required (applicability) and materialization continuation.
 - **Applicability SoT:** `deriveCycleObligationSnapshot` + `deriveFinalizationApplicability` + assess.
-- **Continuation gate:** `activeCycleGovernedContinuation.ts` — REQUIRE_ARTIFACT HD **OR** canonical APPLICABLE∧¬SATISFIED.
+- **Continuation gate (Artifact governed):** `activeCycleGovernedContinuation.ts` — REQUIRE_ARTIFACT HD **OR** canonical APPLICABLE∧¬SATISFIED.
+- **Adjacent (P6-HQA-F05-GD4-01):** `no_require_artifact` means a materialization signal without a closure Artifact obligation — **not** Artifact governed continuation and **not** an invented HD. `orchestrateF2` may qualify ordinary documentary work via Generic PREPARE on the same cycle when Product readiness allows (`isOptionalDocumentaryWithoutClosureArtifactBlock`).
 - **Routing:** `artifactTargetRouting.ts` (workspace + cycle segment composition).
-- **Invariant:** UNKNOWN ≠ APPLICABLE; Applicability ≠ execution authority.
+- **Invariant:** UNKNOWN ≠ APPLICABLE; Applicability ≠ execution authority; optional documentary ≠ REQUIRE_ARTIFACT.

 ## OBJ-EVIDENCE — Evidence

diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index ebb8402a..99ec0008 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -41,17 +41,20 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 ## F05 — Active-cycle Artifact materialization
 - **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
 - **Boundary (CI-HQA-F01 / AS-IMPLEMENTED):** explicit NEW_CYCLE formalization (« préparer / créer / démarrer un cycle … », even when a future deliverable/note is mentioned) is **not** Artifact continuation. `hasExplicitNewCycleFormalizationSignal` keeps those turns on `NEW_CYCLE_FORMALIZATION` so absence of an active cycle does not fail-closed as `no_active_cycle` before `createCycle`. Natural Artifact cues still cover produce/write/materialize of a documentary object under an active cycle (F-C9-04).
-- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533)
+- **Admission (Artifact governed continuation):** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE ∧ ¬SATISFIED (#532+#533) — unchanged; obligations are not bypassed by Generic PREPARE.
+- **Adjacent path (P6-HQA-F05-GD4-01 / PR #586 AS-IMPLEMENTED):** ordinary documentary materialization recognized by ACGC but **without** a closure Artifact obligation resolves as `ACTIVE_CYCLE_CONTINUATION_BLOCKED` / `no_require_artifact`. When the turn is actionable for Generic PREPARE, `orchestrateF2` may route via `isOptionalDocumentaryWithoutClosureArtifactBlock` → Generic PREPARE on the **same** active cycle. This is **not** `NEW_CYCLE_FORMALIZATION`, **not** an invented `REQUIRE_ARTIFACT` HumanDecision, and **not** Artifact governed continuation. Other BLOCKED reasons stay exclusive / fail-closed clarification.
+- **Generic PREPARE fidelity (PR #586):** pending offer may retain documentary `missionEffects` / `docs_write`; capability envelope uses **exact** Product identities only (`cap:studio.cursor.generalist`, `cap:cursor.docs_write` — no substring spoofing); Nora `proposedTargetPath` / filename stay inspectable **candidates** (`proposedTargetPathAuthoritative=false`; `documentaryTargetResolution=unresolved_nora_candidate` when unresolved) — never promoted into authorized `expectedOutputs` solely by memorization.
 - **Leaf / target:** Nora/Pilot leaf candidate is non-authoritative; server owns `targetPath` composition (D-PC-09); no normal filename micro-gate when cues suffice; clarification only when no coherent cue
 - **Continuation fact:** `structurallyResolvedActiveCycleContinuation` is server-owned and local to this Recommendation/Proposal — ≠ Truth C, ≠ HumanDecision, ≠ universal uncertainty resolution; sealed continuation without impacting signals skips gratuitous structural MW5 re-challenge
 - **Same CycleInstance:** no silent NEW_CYCLE / re-formalization
-- **Exit:** Proposal `DECISION_REQUIRED`
+- **Exit (Artifact path):** Proposal `DECISION_REQUIRED`
+- **Exit (optional documentary Generic PREPARE):** inspectable ExecutionContract draft under existing Confirm/Authorize gates — PREPARE ≠ AUTHORIZE; AUTHORIZED ≠ EXECUTED; no ExecutionAttempt on prepare/authorize alone
 - **Product spine (UI server actions):** Send → Decide → PrepareResolvedM3 → ConfirmAndExecuteResolvedM3 → RehydrateEvidenceOutcome
 - **Nominal chat-first spine:** Send (proposal) → Send (disposition) → PrepareResolvedM3 → … — `projectAssistantDecideAction` remains available but is no longer a required UX step
-- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher, `actions.ts` Product actions
-- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07); CI-HQA-F01 — `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`
-- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro)
-- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact
+- **Paths:** `activeCycleGovernedContinuation.ts`, `orchestrateF2.ts` (Generic PREPARE routing), `artifactTargetRouting.ts`, Fake matcher (`__P6_OPTIONAL_DOCUMENTARY_MD__`), `actions.ts` Product actions; adjacent untracked w2 Generic PREPARE / materiality helpers
+- **Oracle:** `productCycleE2eStabilization.frontDoor.d0.test.ts` (+ continuity/bridge CORR-01, corrProof07); CI-HQA-F01 — `p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts`; optional documentary routing — `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts`
+- **Status / proof:** **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** (ZERO REAL this macro); optional documentary Generic PREPARE **DETERMINISTIC at tested scope** (PR #586)
+- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact; capability outside generalist envelope; stale/absent pending offer

 ## F06 — Proposal / Decision Subject / options
 - **Trigger:** F2 turn producing `f2_proposal`
diff --git a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
index 07f2a6f9..394f3663 100644
--- a/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
+++ b/projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
@@ -174,6 +174,28 @@ Untracked (documented, digests not expanded): `cognitiveExecutionReceipt.ts`, `t
 | Tests | `p6.nora.min09.documentaryReliability.d0.test.ts` (+ P1/P2/Session regressions) |
 | Docs | volumes 02, 03, 04, 06, 08, 09 + README; debt `RCD-01-PRR-SEMANTIC-COHERENCE` documentary correction prepared / integration pending |

+## Sample impact analysis G — P6-HQA-F05-GD4-01 / PR #586 (optional documentary → Generic PREPARE)
+
+**Changed tracked paths (digest drift):**
+- `features/project-assistant/f2/orchestrateF2.ts` → OBJ-TURN-ORCH
+- `features/project-assistant/f2/activeCycleGovernedContinuation.ts` → OBJ-ARTIFACT-CONTINUATION
+- `lib/platform/ai/fakeProvider.ts` → Fake test boundary (F05 fixture cue `__P6_OPTIONAL_DOCUMENTARY_MD__`)
+
+**Untracked Product helpers (semantic, not digest-tracked):** pending Generic PREPARE offer store; prepareGenericExecutionContractDraft; resolveAuthoritativeProductMateriality; genericPrepareCapabilityEnvelope; F05 optional routing d0 test.
+
+| Step | Result |
+|---|---|
+| Components | OBJ-TURN-ORCH + OBJ-ARTIFACT-CONTINUATION — **SEMANTIC IMPACT = YES** (routing + classifier helper + blocked message). FakeProvider — **SEMANTIC IMPACT = YES** at Fake boundary only (deterministic cue; ≠ OpenAI LIVE). |
+| Direct deps | Generic PREPARE offer / contract draft / materiality / capability envelope (adjacent); Artifact obligation assess unchanged for true REQUIRE_ARTIFACT |
+| Transitive | F08–F11 when Pilot accepts CURRENT offer → EC inspect/confirm/authorize; D-PC-09 path composition remains server-owned at execution |
+| Flows | **F05 primary** (admission split + optional documentary); F06/F07 adjacent (no invented HD); F10 adjacent after authorize |
+| Invariants | INV-NO-SILENT-HD; INV-APPLICABILITY-NE-AUTHORITY; INV-ARTIFACT-COND; INV-NO-EXEC-BEFORE-AUTH; INV-FAKE-REAL-SM; INV-CAP-NE-AUTH |
+| Persistence | Pending Generic PREPARE offer **process-local** (restart-unsafe) — no new tables |
+| Authority | PREPARE ≠ AUTHORIZE; materiality server-owned; capability exact match fail-closed; proposed paths non-authoritative |
+| Fake/Real | DETERMINISTIC proven at tested scope; OpenAI LIVE / e66 / Cursor REAL **NOT CLAIMED** |
+| Tests | `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (+ continuity/bridge CORR-01, G-D4, Product Continuity, HQA-F01) |
+| Docs | volumes 02, 03, 04, 06, 07, 08, 09 + README + digests |
+
 ## Component → flows (summary)

 | Component | Flows |
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index a199efbb..e11a9db2 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -42,7 +42,9 @@ Do **not** treat Session items as an exhaustive Pilot transcript. Do **not** cla
 | Active cycle | Cycle + LPS pointer | lifecycle projection | proposals may be empty | ok |
 | Recommendation | usually ephemeral | may recompute | yes | Recommendation ≠ HD |
 | Proposal pending | epistemic markers maybe | subject reconstruct or requalify | **Proposal map lost** | no silent invent |
+| Pending Generic PREPARE offer (P6-HQA-F05-GD4-01) | none | must re-offer / requalify | **offer map lost** (process-local) | no silent invent; no stale-offer reuse |
 | HD recorded | `oa_human_decisions` | decision list | proposal may be gone | HD remains authority record |
+
 | EC prepared | `oa_execution_contracts` | EC projection | | |
 | Inspected | attestations | | | |
 | Confirmed/authorized | confirmations + receipts | | | |
diff --git a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
index 6728e934..eba27ccd 100644
--- a/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
+++ b/projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
@@ -31,11 +31,12 @@

 | Code/State | Layer | Trigger | User effect | Mutations | Fail-closed |
 |---|---|---|---|---|---|
-| `no_require_artifact` | ACGC | UNKNOWN/N/A without policy HD | blocked continuation message | none | yes |
+| `no_require_artifact` | ACGC | materialization signal without CURRENT REQUIRE_ARTIFACT / APPLICABLE∧¬SATISFIED | when actionable: Generic PREPARE on same cycle (P6-HQA-F05-GD4-01); else clarification — **never** invent REQUIRE_ARTIFACT HD | none unauthorized | yes |
 | `artifact_already_satisfied` | ACGC | Artifact SATISFIED | blocked | none | yes |
 | `lifecycle_assess_failed` | ACGC | assess throw/!ok | blocked | none | yes |
 | `no_active_cycle` | ACGC | missing active id | blocked | none | yes |
-| `NEW_CYCLE_FORMALIZATION` | ACGC | no materialization intent | historical new-cycle path | may createCycle on other path | intent-gated |
+| `NEW_CYCLE_FORMALIZATION` | ACGC | no materialization intent / explicit new-cycle formalization | historical new-cycle path — **not** aliased from optional documentary `no_require_artifact` | may createCycle on other path | intent-gated |
+| `CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE` | Generic PREPARE | unknown / privileged / spoofed capability identity | prepare refused | none | yes — exact identity match only |
 | `CKC_*` | CKC | incoherent/unavailable mapping | qualification fail | none unauthorized | yes |
 | `AUTHORITY_NOT_CONFIGURED` | authz | missing local Pilot gate | cannot decide | none | yes |
 | `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | docs_write | missing managed root | cannot REAL write | none | yes |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 774b92a0..90b349ac 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -14,6 +14,8 @@
 | Flow | Deterministic tests | Notes |
 |---|---|---|
 | F05 materialization | continuity CORR-01, bridge CORR-01, corrProof07, **productCycleE2eStabilization.frontDoor**, fakeProvider materialization | **DETERMINISTIC PRODUCT E2E PROVEN AT TESTED SCOPE** — oracle traverses Product UI server actions (Send→Decide→PrepareResolvedM3→ConfirmAndExecuteResolvedM3→Rehydrate) |
+| F05 optional documentary → Generic PREPARE (PR #586) | `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (+ G-D4, Product Continuity, HQA-F01) | DETERMINISTIC — `no_require_artifact` routes to Generic PREPARE; Artifact obligation path preserved; exact caps; non-authoritative path candidates; Fake cue `__P6_OPTIONAL_DOCUMENTARY_MD__` ≠ OpenAI LIVE |
+
 | F03/F15 obligations | corrProof06.artifactObligation | policy HD + applicability |
 | F03 First Framing START | p6.hqa.f01.chatFirstCycleStartGate, chatFirstFramingContinuity(.frontDoor) | explicit START; no auto-START; no technical id in Pilot copy |
 | F04 Framing continuity UI | framingContinuityCard / Rehydrate / p6.ux.recommendationContinuity | examinable card; Recommendation≠Decision |
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 0d9a9251..f663ab90 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -153,6 +153,23 @@ NoteLite bounded REAL re-proof — **PAUSED**. Gate Morris distinct. Not this de
 | REAL SprintBoard / Cursor REAL re-proof | NOT PROVEN — ZERO REAL this macro |
 | New store/table / parallel engines | NONE |

+## Overlay — P6-HQA-F05-GD4-01 / PR #586 (optional Artifact / Generic PREPARE)
+
+| Item | Status |
+|---|---|
+| Ordinary documentary without closure REQUIRE_ARTIFACT | AS-IMPLEMENTED — may route to Generic PREPARE on same active cycle (`isOptionalDocumentaryWithoutClosureArtifactBlock`) |
+| `no_require_artifact` aliased as NEW_CYCLE_FORMALIZATION | **FORBIDDEN** — preserved |
+| Invented REQUIRE_ARTIFACT / silent HD for optional documentary | **FORBIDDEN** — preserved |
+| Applicable Artifact obligation / REQUIRE_ARTIFACT path | **PRESERVED** — Generic PREPARE does not bypass Artifact governance |
+| Intent fidelity (`docs_write` / missionEffects) | AS-IMPLEMENTED at tested scope — offer → rebuild → inspectable contract |
+| Capability envelope | Exact Product identities only; substring spoofing fail-closed |
+| Nora proposed path as authorized expectedOutput | **FORBIDDEN** at Generic PREPARE when unresolved — candidate only (`unresolved_nora_candidate`) |
+| Pending Generic PREPARE offer persistence | **PROCESS-LOCAL** — restart-unsafe; re-offer required |
+| Authoritative documentary targetPath at PREPARE | **NOT RESOLVED** in this correctif — composition remains server-owned later (D-PC-09) |
+| Fake fixture `__P6_OPTIONAL_DOCUMENTARY_MD__` | DETERMINISTIC boundary only — ≠ OpenAI LIVE |
+| OpenAI LIVE / e66 Human QA / Cursor REAL | **NOT RETESTED / NOT CLAIMED** |
+| P6 GLOBAL PASS / runtime v3 ADOPTED / READY FOR REAL | **NOT CLAIMED** |
+
 ## CHAT-FIRST-GOVERNED-DECISION-LOOP-01 overlay

 | Item | Status |
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 49cd6fb1..25549243 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -12,6 +12,7 @@
 **Nora autonomy overlay (INTEGRATED ON MAIN):** P6 / **PR #577 MERGED** @ `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (mergedAt 2026-10-12T12:53:30Z) — P0 incomplete Status Honesty; P1 Adaptive Runner Budget (Routine 5 / Focused 8 / Deep·HA 10, ceiling 10); P2 native RunState Controlled Continuation + Session-on-resume (TV01); numeric fail-closed for explicit non-finite `maxTurns`. Post-merge CI: [run 38251916421](https://github.com/mcleland147/sfia-workspace/actions/runs/38251916421) SUCCESS (Required Gate PASS). Proof level: **DETERMINISTIC VERIFIED** at Product wiring + next-turn input scope. REAL **NOT PROVEN**. Runtime v3 **NON ADOPTED**.
 **RCD-01 documentary reliability overlay (INTEGRATED ON MAIN):** P6-MIN-09 / **PR #578 MERGED** @ merge `440066485eaae458ccca188b2c91f8f47bd4987f` (source `9b855d8ddabd9bf9fffb8561f63d1138d8939be4`; mergedAt 2026-10-13T07:18:56Z) — honest Git read coverage; secret-safe redaction progression; final model-visible JSON envelope truth; bounded oversized-line skip (`lineExceedsCap`); honest budget-exhausted restitution. Post-merge CI: [run 38361885447](https://github.com/mcleland147/sfia-workspace/actions/runs/38361885447) SUCCESS (Required Gate PASS). Proof: **DETERMINISTIC CORRECTION PROVEN AT TESTED SCOPE** (R1–R7). **GDR REAL PASS / P6 GLOBAL PASS / Product READY: NOT CLAIMED**. Runtime v3 **NON ADOPTED**. FinOps ceilings unchanged (adaptive maxTurns ≤ 10; `CT_MAX_TOOL_RESULT_CHARS` = 12000). Volumes 02 / 03 / 04 / 06 / 08 / 09 + README + digests. Debt `RCD-01-PRR-SEMANTIC-COHERENCE`: documentary correction prepared locally — **integration of this PRR sync still PENDING**.
 **PR #585 cumulative CI correction overlay (scoped, Delivery):** baseline reviewed `e7774a0c71e3b052f091ed2dffdd70651916dd2d` · 2026-10-15 (Europe/Paris) — CI-HQA-F01 NEW_CYCLE vs Artifact natural-signal boundary + digest sync for tracked F2/P6 sources; volumes 03 / 09 + digests. **BOUNDED SEMANTIC IMPACT** on F05 admission only. **Not** a full Living Reference re-audit. P6 GLOBAL PASS / REAL / runtime v3 **NOT CLAIMED**.
+**PR #586 optional Artifact / Generic PREPARE overlay (scoped, Delivery):** Product baseline reviewed `9b9cd5e5052da5781678a23a86c82b8b3283627e` · 2026-10-15 (Europe/Paris) — P6-HQA-F05-GD4-01: ordinary documentary request without closure `REQUIRE_ARTIFACT` may route to Generic PREPARE on the same active cycle (`no_require_artifact` ≠ NEW_CYCLE_FORMALIZATION; ≠ invented HD); exact capability identities; Nora path candidates non-authoritative at PREPARE. Volumes 02 / 03 / 04 / 06 / 07 / 08 / 09 + digests. **BOUNDED SEMANTIC IMPACT** on F05 routing + Fake fixture cue. **Not** a full Living Reference re-audit. Pending offer process-local. OpenAI LIVE / e66 / Cursor REAL **NOT CLAIMED**. P6 GLOBAL PASS / runtime v3 **NOT CLAIMED**.

 ## What this corpus is

diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 25d9a5ba..a3628dc9 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,13 +1,13 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "e7774a0c71e3b052f091ed2dffdd70651916dd2d",
-  "lastReviewedAt": "2026-10-13T11:17:40+02:00",
+  "lastReviewedCommit": "9b9cd5e5052da5781678a23a86c82b8b3283627e",
+  "lastReviewedAt": "2026-10-15T22:51:00+02:00",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "8b6680c72e48efc4"
+      "sha256_16": "d6e17088b0cc5762"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
@@ -15,15 +15,15 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
-      "sha256_16": "cc17e518466f6b38"
+      "sha256_16": "f820789e8f4d7af3"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "426be5f4ce434eed"
+      "sha256_16": "2e53911afec78653"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "5e4fa6128f75930f"
+      "sha256_16": "f7f8d21a0efb997b"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
@@ -31,19 +31,19 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "a67fd0fb0c858962"
+      "sha256_16": "e65f13a723097cff"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "90a3ea63bda274bd"
+      "sha256_16": "3dbdf5191b9b4670"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "587caa7bbc0179f3"
+      "sha256_16": "a9adba70a42a1e55"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "68c40d977df748d1"
+      "sha256_16": "716f81a3b1cb5937"
     }
   ],
   "components": [
@@ -586,7 +586,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
-      "sha256_16": "0f7c73b7539df09d"
+      "sha256_16": "6200659a4be2f20c"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts",
@@ -594,7 +594,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts",
-      "sha256_16": "34a387438181cc9d"
+      "sha256_16": "57646c517d2ccdb6"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts",
@@ -666,7 +666,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
-      "sha256_16": "aa71f77def274a75"
+      "sha256_16": "b8e30897933dd2f0"
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
```

## 11. Validations

| Contrôle | Résultat |
|---|---|
| `check-production-runtime-reference.mjs` | CONFORMANCE OK |
| `productionRuntimeReference.conformance.d0.test.ts` | 5/5 PASS |
| Batch F05 + régressions | 63/63 PASS |
| `npm test` (suite complète) | **5896 passed** / 143 skipped / 540 files |
| typecheck | PASS |
| lint | PASS |
| `git diff --check` | PASS |
| Product files in docs commit | NONE |

## 12. Commit / push

| Champ | Valeur |
|---|---|
| Message | `docs(studio): sync runtime reference for P6 F05 routing` |
| SHA | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| Push | origin `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` MATCH |
| Force | NON |

## 13. PR #586 actualisée

| Champ | Valeur |
|---|---|
| URL | https://github.com/mcleland147/sfia-workspace/pull/586 |
| État | OPEN |
| Base | main |
| Head OID | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| Commits | Product `9b9cd5e5` + docs `b4c1d862` |
| Merge | NON |

## 14. CI après push

Observation au moment du Review Pack : nouveau workflow attendu / checks à requalifier — voir rapport Cursor pour statut live.

Si en cours : **PR OPEN — CI PENDING**.
Ne pas déclarer Required Gate PASS sans preuve.

## 15. Fake / Real

DOCUMENTARY REFERENCE SYNCHRONIZED AND DETERMINISTIC CI VALIDATION PASS (local).
REAL non exécuté. Gate Morris REAL NON CONSOMMÉ.
Gaps : OpenAI LIVE, e66, targetPath autoritatif au PREPARE, offer process-local, Cursor REAL.

## 16. Réserves

1. Pending Generic PREPARE offer process-local
2. Documentary target autoritatif non résolu au PREPARE
3. OpenAI LIVE / e66 / Cursor REAL non retestés
4. CI distante post-push à confirmer (Required Gate)
5. Living Reference sync ≠ full re-audit corpus

## 17. Gate merge

**NON CONSOMMÉ.**

## 18. Git Truth final

```
branch=fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare
HEAD=b4c1d86211d372f7b0685be7ce8a5ba7de598e37
origin/main=52f3688476e41cbab8fbe230f0ef4ddddb9aa56e
PR=#586 OPEN
merge=NON
status: M .tmp-sfia-review/chatgpt-review.md (hors commit)
```

## 19. Verdict

**REFERENCE SYNC COMMITTED**
**PR OPEN — CI PENDING** (jusqu'à confirmation Required Gate distant)
Après CI PASS distant : READY FOR CHATGPT PR READINESS REQUALIFICATION.

Non déclaré : MERGE AUTHORIZED · P6 GLOBAL PASS · READY FOR REAL · RUNTIME V3 ADOPTED.

## 20. Instruction ChatGPT obligatoire

Lire dans Git :

Branche : `sfia/review-handoff`
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier : revue sémantique réelle ; cohérence volumes ; digests contrôlés ; scope docs-only ; validations ; commit `b4c1d862` ; PR #586 ; CI / Required Gate ; handoff distant ; réserves ; absence de merge.

Produire :

**SFIA STUDIO — PR #586 POST-CI-CORRECTION CRITICAL PR READINESS REVIEW.**
