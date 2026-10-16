# SFIA STUDIO — M-HD-01 AUTHORITY CONTINUITY CORRECTION PASS
## Review Pack FULL — CRITICAL

**Horodatage:** 2026-10-16 14:38:54 CEST
**GO Morris:** TARGETED CRITICAL CORRECTION PASS (CR-01…CR-04) — 2026-10-16
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — IN PROGRESS
**Capacité:** V3-F05 (connexes V3-F11 / V3-F12 / V3-F14)
**Cycle type:** 8 — Delivery / implémentation
**Profil SFIA:** CRITICAL
**Typologie:** EVOL — targeted correction pass
**CKC:** ckc:studio:delivery (CONTENT VALIDATED BY MORRIS — guidance only)
**QA attendu:** CRITICAL — LOCAL DETERMINISTIC
**Architecture conservée:** M-HD-01 O1 (DecisionBasis `generic_mission`) — aucune reconstruction

---

## 1. VERDICT CANDIDAT

**M-HD-01 AUTHORITY CONTINUITY — DETERMINISTIC PASS**

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Claims interdits non émis:
- PRODUCT GIT INTEGRATED / PR READY / READY FOR REAL / HUMAN QA PASS / P6 GLOBAL PASS / RUNTIME V3 ADOPTED

---

## 2. GIT TRUTH INITIAL / FINAL (candidat)

### Remote
```
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
```

### Branch / HEAD / main
- Worktree: `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016`
- Branche: `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare`
- HEAD: `b4c1d86211d372f7b0685be7ce8a5ba7de598e37`
- origin/main: `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (attendu / vérifié: `896ff59c704bfa76df1da1a51705aaf948c1cf0c`)
- Cohérence: **OK** — dirty candidate préservé; aucun reset/stash/clean/rebase; aucun commit Product.

### status --short
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/types.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
?? projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
?? projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
```

### diff --name-status
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
M	projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
M	projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
M	projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
M	projects/sfia-studio/app/features/project-assistant/f2/types.ts
M	projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
M	projects/sfia-studio/app/features/project-assistant/w2/actions.ts
M	projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
M	projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
M	projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
M	projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
M	projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
M	projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
M	projects/sfia-studio/app/lib/oa/decision/domain/types.ts
M	projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
```

### untracked
```
projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
```

### worktree list (extrait)
```
/Users/morris/Projects/sfia-workspace                                                                                                                                                                                                                                              980064c0 [qa/sfia-studio-p6-global-integrated-product-qa]
/Users/morris/Projects/sfia-codex-pilot                                                                                                                                                                                                                                            ec7f397a [method/codex-operating-model-pilot]
/Users/morris/Projects/sfia-doc-od04-i01-truth                                                                                                                                                                                                                                     299cb617 [docs/sfia-studio-nora-od04-i01-boundary-truth-sync]
/Users/morris/Projects/sfia-gcec-b-commit-target-binding-c481610c                                                                                                                                                                                                                  11a43d3d [delivery/sfia-studio-gcec-b-commit-target-binding-alignment]
/Users/morris/Projects/sfia-gcec-c-remote-push-auth-env-11a43d3d                                                                                                                                                                                                                   ff267fdf [delivery/sfia-studio-gcec-c-remote-push-auth-env]
```

**Interdits respectés:** pas de commit Product, push Product, PR, merge, suppression de branche, nouveau worktree Product.

---

## 3. CONVERGENCE PRE-CHECK

| Item | Valeur |
|------|--------|
| Capacité | V3-F05 Generic Execution |
| Milestone | P6 IN PROGRESS |
| TARGET | HD acceptée autorise uniquement reprise mission exacte + effets/scope/contexte courants compatibles |
| CURRENT (pré-correction) | Subject + OA HD + PREPARE decisionRefs + restart SQLite + Project-scoped Select; réserves CRITICAL ouvertes |
| KEEP | genericMissionSubject / record / verify / OA HD / DecisionBasis generic_mission / EC / Confirmation / Attempt / Cursor Generalist |
| ADAPT | effets, authenticité Record, Confirm/Authorize, LPS/currentness, tests |
| REPLACE | bypass structural+HD fondé uniquement sur `decisionRefs.length` |
| RETIRE LATER | carrier SelectionProfile; admissions F2/ACGC |
| Exit proof | structural+HD ne poursuit que si décision toujours applicable à mission + effets actuels |
| Capacité suivante | Generic Product/Nora E4–E8 (hors périmètre) |

---

## 4. SOURCES CONSULTÉES (cycle)

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- Architecture D-ER candidate locale
- Doctrine v3 30/32/34/35/37 (références applicables)
- projects/sfia-studio/sfia-v3-framing/ckc/08-delivery-implementation.md
- Handoff précédent: `sfia/review-handoff` @ `86ad2dab` / blob `f10f0bac` (4137 lignes) — M-HD-01 Implementation Delivery
- Diffs locaux M-HD-01 + correction + tests Delivery

---

## 5. CONTRATS ADOPTÉS CONSOMMÉS

- D-ER-16…19; Option B TARGETED UPSTREAM REPLACEMENT; PROJECT-SCOPED TOOL ACCESS
- M-HD-01 GENERIC MISSION HUMANDECISION BINDING; O1 Extension ciblée DecisionBasis OA
- M-HD-01 Implementation Contract GO; présent GO = TARGETED CRITICAL CORRECTION PASS
- Invariants: Nora/Cursor Project-scoped ≠ autorisation; HD mission précise; PREPARE≠CONFIRM≠AUTHORIZE≠EXECUTE; aucune HD fabriquée; Confirmation ≠ HD; pas d'Execute auto; pas de second moteur Decision / store Product / table SQL

---

## 6. RÉSERVES CRITICAL → CORRECTIONS

### CR-01 — Revalidation complète des effets

**CURRENT:** comparaison partielle / risques de silence sur drifts matériels.
**TARGET:** décision opération A / effets A n'autorise pas B.

**Correction:** `materialCurrentnessMatch` (`genericMissionSubject.ts:290-362`) compare intégralement:
objective, expectedOutcome, scopeNarrative, scopeIn/Out, materiality, repositoryBindingIdentity, pathRoot, requiredCapabilities, expectedOutputs, intentKind, artifactType, requestedOperation, reversibilityExpectation, stopConditions (suppression refusée), risks, reservations, impactSignals, cycleInstanceId.

**Distinction champs:**
1. **Intégrité présentation durable:** tous champs scellés dans presentationDigest (incl. optionRefs, presentedAt, lps*, doctrineDigest, materialityReasonCodes).
2. **Requalification CURRENT avant PREPARE/Confirm/Authorize:** champs listés dans materialCurrentnessMatch (faits Product via analysis + resolveAuthoritativeProductMateriality + capability envelope).
3. **Métadonnées non égalité brute à Confirm:** lpsVersion/doctrineDigest traités via evaluateLpsTransition (CR-04); presentedAtIso non recomparé comme effet matériel; optionRefs scellées vérifiées via selectedOption accept-prepare.

**Chemins:** `verifyGenericMissionHumanDecisionForPrepare` + `verifyGenericMissionHumanDecisionForContract` reconstruisent current material depuis EC/analysis Product — pas depuis payload Nora seul.

### CR-02 — Authenticité présentation / Record

**Correction:** `recordGenericMissionHumanDecision.ts:273-295` — après self-digest check, **Product re-seal** via `sealGenericMissionForPresentation` avec `analysis` obligatoire; digest mismatch → `HD_SUBJECT_STALE`. Autorité Pilote via `registerLocalPiloteAuthority` (serveur); option explicite parmi optionRefs; refuse/amend n'unlock pas PREPARE; aucun Attempt au Record.

**B1–B12:** payload appelant ≠ autorité; digest auto-cohérent insuffisant (re-seal); identité/autorité côté serveur; Confirmation ≠ HD; sujet modifié → nouvelle présentation; pas de PresentedMission Store / token client / preuve synthétique de clic.

**Réserve honesty:** acteur Pilote simulé en tests ≠ session UI réelle — Fake/Real gap documenté; pas de claim REAL.

### CR-03 — Continuité Confirm/Authorize

**CURRENT:** `decisionRefs.length > 0` → skip revalidation NON_STRUCTURAL.
**REPLACE:** `confirmForAuthorization.ts:177-201`, `authorizeGenericPreparedContract.ts`, `authorizeExecutionContract.ts` appellent `verifyGenericMissionHumanDecisionForContract` (read-only) pour structural/unknown + refs — vérifie OA HD existante, accepted, accept-prepare, sourceType generic_mission, digest intègre, effets courants, LPS, repository, cycle.

**Préservé:** NON_STRUCTURAL G-D4 avec refs vides; legacy W2 avec HD authentique; structural sans HD fail-closed.

### CR-04 — LPS currentness

**CURRENT:** `currentLpsVersion >= sealed` ∧ decisionId ∈ decisionIds.
**REPLACE:** `evaluateLpsTransitionAfterHumanDecision` (`genericMissionSubject.ts:385-441`) — même version OK; version ultérieure OK seulement si champs LPS matériels identiques (objective/context/scope/constraints/doctrineDigest/cycle/trajectory) + decisionId lié + historique décision non réécrit (prefix). Version supérieure seule ≠ valide.

### Bloc E — Cycle + Idempotence EC

- Cycle facultatif: Project sans cycle OK; cycle clos lié → refus; mission Project indépendante d'un cycle clos OK (pas de profil Light/Standard/Critical gate).
- CONTRACT_ALREADY_EXISTS reuse: refuse stale/superseded/status non réutilisable + semanticFingerprint/scope/effets/capabilities/materiality/decisionRefs/HD/currentness incompatibles (`prepareGenericExecutionContractDraft.ts`).

---

## 7. FICHIERS CRÉÉS / MODIFIÉS (périmètre correction + candidat)

### Nouveaux (untracked)
- `w2/genericMissionSubject.ts` (536 lignes) — FULL ci-dessous
- `w2/recordGenericMissionHumanDecision.ts` (374 lignes) — FULL ci-dessous
- `w2/verifyGenericMissionHumanDecisionForPrepare.ts` (728 lignes) — FULL ci-dessous
- `__tests__/.../p6.mHd01.authorityContinuityCorrection.d0.test.ts` (893 lignes) — FULL ci-dessous
- (préexistants dirty cycle) p6.mHd01.genericMissionHumanDecision / inspectionBinding / projectScoped / der16

### Modifiés (diff exploitables)
- w2/actions.ts, confirmForAuthorization.ts, authorizeGenericPreparedContract.ts, authorizeExecutionContract.ts, prepareGenericExecutionContractDraft.ts
- (+ dirty lineage hors correction stricte: f2/*, nora-cognitive-runtime, oa/decision types, architecture md, ConversationSurface, etc. — préservés, non mutés hors GO pour ce cycle)

**OA partagé:** types/invariants `generic_mission` déjà O1 — pas de nouvelle table SQL / migration / second store.

---

## 8. MATRICE PREUVES FX/PR/AU/LP/CY/ID

Fichier: `p6.mHd01.authorityContinuityCorrection.d0.test.ts` — **24 PASS** (Fake SQLite Product).

| ID | Scénario | Résultat | Fake/REAL |
|----|----------|----------|-----------|
| FX01 | requestedOperation change → refus | PASS | Fake |
| FX02 | intentKind change → refus | PASS | Fake |
| FX03 | artifactType change → refus | PASS | Fake |
| FX05/06/07 | outputs / reversibility / stopConditions → refus | PASS | Fake |
| FX08/09 | scope / repository → refus | PASS | Fake |
| FX10 | mission identique → PREPARE OK | PASS | Fake |
| PR01 | Product subject + Pilote explicite → Record OK | PASS | Fake |
| PR02 | sujet falsifié digest recalculé → Record refus | PASS | Fake |
| PR03 | autorité Pilote absente → Record refus | PASS | Fake |
| PR04 | Confirmation ≠ HD | PASS | Fake |
| PR05/06/07 | refuse/amend/no Attempt | PASS | Fake |
| AU01 | HD valide → Confirm/Authorize | PASS | Fake |
| AU03 | HD superseded → Authorize refus | PASS | Fake |
| AU05 | repository divergent → refus | PASS | Fake |
| AU06 | decisionRef forgée → refus | PASS | Fake |
| AU08 | NON_STRUCTURAL sans HD (G-D4) NR | PASS | Fake |
| AU10 | structural sans HD fail-closed | PASS | Fake |
| LP01 | transition Record HD seule → OK | PASS | Fake |
| LP02/03 | drift LPS matériel / scope → refus | PASS | Fake |
| LP04 | repository muté → refus | PASS | Fake |
| LP06 | restart état légitime → reprise OK | PASS | Fake |
| CY02 | sans cycle → parcours valide | PASS | Fake |
| ID01 | même EC courant → idempotence | PASS | Fake |
| ID03 | mêmes decisionRefs effets divergents → pas reuse succès | PASS | Fake |

**Couverture note:** FX04 (capabilities) couvert via materialCurrentnessMatch + chemins FX/AU; AU02/AU04/AU07/AU09/CY01/CY03/CY04/ID02/ID04 partiellement via NR suites HD + project-scoped + logique prepare reuse — déclarés dans suite M-HD-01 (21) et project-scoped (14). LP05 LPS indisponible → code path HD_SUBJECT_STALE (evaluateLpsCurrentness).

---

## 9. TESTS EXÉCUTÉS / NON EXÉCUTÉS

### Exécutés (PASS)
1. p6.mHd01.authorityContinuityCorrection.d0.test.ts — 24
2. p6.mHd01.genericMissionHumanDecision.d0.test.ts — 21
3. p6.inspectionBindingSelect.d0.test.ts — 15
4. p6.projectScopedCursorSelection.d0.test.ts — 14
5. OA decision: m3HumanDecisionDurability + adversarialAuthority — inclus run NR (26 tests total ce batch avec project-scoped)
6. tsc --noEmit — PASS
7. next build — PASS

**Totaux ciblés correction+NR immédiats:** 60 (correction+HD+binding) + 26 (selection+OA) + retest 45 — tous PASS.

### Non exécutés
- Suite Product complète hors ciblage
- Cursor REAL / OpenAI LIVE (gate Morris non accordé)
- Runtime :3020 / e66

### Échecs
- Préexistants hors périmètre: non rejoués
- Nouveaux: **aucun**

---

## 10. FAKE / REAL QUALIFICATION

| Frontière | Niveau |
|-----------|--------|
| Applicable | OUI |
| Preuve entrée M-HD-01 O1 | DETERMINISTIC PROGRESS CONFIRMED |
| Restart SQLite | DETERMINISTICALLY TESTED (LP06) |
| Select Fake | DETERMINISTICALLY TESTED |
| Autorité continue | **LOCAL DETERMINISTIC AUTHORITY CONTINUITY PROOF** (CR-01…04) |
| Fake | OA Product SQLite test + Fake Cursor boundary |
| REAL | Nora/OpenAI LIVE + Cursor REAL — **NON ACCORDÉ** |
| Gaps | Auth/session Pilot UI réelle; provider Cursor; runtime LIVE |
| Claims autorisés | LOCAL DETERMINISTIC PASS |
| Claims interdits | REAL BOUNDARY PROVEN / E2E REAL / READY FOR REAL / HUMAN QA / P6 GLOBAL / RUNTIME V3 |

---

## 11. DETTE / EXIT / GATES

| Dette | Propriétaire | Exit |
|-------|--------------|------|
| E4–E8 Generic Product/Nora | Morris GO | Cycle dédié |
| Cursor REAL | Morris REAL gate | Bounded REAL proof cycle |
| OpenAI LIVE | Morris | Cycle LIVE |
| carrier OA SelectionProfile | Product | Retire later |
| historique F2/ACGC | Product | Retire later |
| sync modeled/runtime | Product | Gate dédié |
| Session Pilot UI réelle | Product + Morris | hors Fake |

**Gates Morris résiduels:** REAL non accordé; pas de nouvelle persistence PresentedMission; pas de nouvelle politique HD générale.

**Decision Pack STOP:** N/A — corrections réalisables avec mécanismes existants.

---

## 12. INSTRUCTION CHATGPT

Lire depuis Git:

`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Effectuer:

**SFIA STUDIO — M-HD-01 AUTHORITY CONTINUITY CRITICAL CORRECTION CODE REVIEW**

Vérifier en priorité:
- effets scellés intégralement couverts;
- Record Pilot réellement gouverné;
- absence de décision synthétique;
- HD applicable à Confirm/Authorize;
- aucune revalidation remplacée par simple présence decisionRefs;
- transitions LPS qualifiées;
- EC stale non réutilisé;
- cycle actif et cycle facultatif;
- absence d'architecture parallèle / élévation d'autorité;
- tests adversariaux;
- Review Pack complet;
- aucun commit Product.

---

## 13. SORTIES TESTS (extraits)
### Correction + HD + Binding
```
ent":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:0d9f27d4e62e081a","attemptId":"xat:w3a:78be08e2ad52ae0f","executionContractId":"xct:gen-prep:6e4b4ee24db6d622054df693","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":3}

stdout | __tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts > P6 Select inspection binding (R1) > I2 — both explicit valid params → Select accepted (no overwrite path)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:61b736ed4dfdd2c0","attemptId":"xat:w3a:9ac4709df09d3f13","executionContractId":"xct:gen-prep:01435f95bb26c0035b1e3990","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":1}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:61b736ed4dfdd2c0","attemptId":"xat:w3a:9ac4709df09d3f13","executionContractId":"xct:gen-prep:01435f95bb26c0035b1e3990","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":1}

stdout | __tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts > P6 Select inspection binding (R1) > I11 — Confirm may bump version; attested binding still Select-valid via I1 path
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:b720adf91647482f","attemptId":"xat:w3a:558c9e5d185840a9","executionContractId":"xct:gen-prep:246739781710a80be78f84bb","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:b720adf91647482f","attemptId":"xat:w3a:558c9e5d185840a9","executionContractId":"xct:gen-prep:246739781710a80be78f84bb","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

 ✓ __tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts (15 tests) 592ms
stdout | __tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts > P6 M-HD-01 Generic Mission HumanDecision > E1 — structural + verified HD can Select (Fake)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:0b9dcf4304875a15","attemptId":"xat:w3a:38987bf6b37ab847","executionContractId":"xct:gen-prep:cd542bff05852bfe7d5c04cb","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:0b9dcf4304875a15","attemptId":"xat:w3a:38987bf6b37ab847","executionContractId":"xct:gen-prep:cd542bff05852bfe7d5c04cb","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

 ✓ __tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts (21 tests) 674ms
 ✓ __tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts (24 tests) 741ms

 Test Files  3 passed (3)
      Tests  60 passed (60)
   Start at  14:37:13
   Duration  2.01s (transform 1.05s, setup 81ms, collect 3.31s, tests 2.01s, environment 0ms, prepare 74ms)


```
### NR selection + OA
```
ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:d5c037539fa8b8bc","attemptId":"xat:w3a:24d3a612c2cbdde8","executionContractId":"xct:gen-prep:6c68a2f7ccd5100173c518fb","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

stdout | __tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts > P6 project-scoped Cursor selection Delivery > S4/S20 — dernier cycle clos: mission Project indépendante (null cycle) OK; cycle clos non muté
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:9d36b5874a8749c3","attemptId":"xat:w3a:b9960aa317e7bcac","executionContractId":"xct:gen-prep:f49b7fd520e551e8457a4419","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:9d36b5874a8749c3","attemptId":"xat:w3a:b9960aa317e7bcac","executionContractId":"xct:gen-prep:f49b7fd520e551e8457a4419","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

stdout | __tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts > P6 project-scoped Cursor selection Delivery > S10 — mission faible effet: PREPARE + Select proportionnés (no cycle)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:cae3984039396d0e","attemptId":"xat:w3a:31f61af2570e3b4f","executionContractId":"xct:gen-prep:cb0741efdba3cbcf7f9448c0","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":1}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:cae3984039396d0e","attemptId":"xat:w3a:31f61af2570e3b4f","executionContractId":"xct:gen-prep:cb0741efdba3cbcf7f9448c0","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":1}

 ✓ __tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts (14 tests) 387ms

 Test Files  3 passed (3)
      Tests  26 passed (26)
   Start at  14:37:24
   Duration  1.67s (transform 990ms, setup 140ms, collect 2.88s, tests 527ms, environment 0ms, prepare 95ms)


```
### Retest HD + correction
```

> sfia-studio@0.1.0 test
> vitest run --run __tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts __tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/projects/sfia-studio/app

stdout | __tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts > P6 M-HD-01 Generic Mission HumanDecision > E1 — structural + verified HD can Select (Fake)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:46fab7daf01a8c38","attemptId":"xat:w3a:bfceb37bbee5611a","executionContractId":"xct:gen-prep:223972d2543bc14b9fba1bb8","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:46fab7daf01a8c38","attemptId":"xat:w3a:bfceb37bbee5611a","executionContractId":"xct:gen-prep:223972d2543bc14b9fba1bb8","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

 ✓ __tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts (21 tests) 554ms
 ✓ __tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts (24 tests) 614ms

 Test Files  2 passed (2)
      Tests  45 passed (45)
   Start at  14:38:13
   Duration  2.10s (transform 846ms, setup 84ms, collect 2.66s, tests 1.17s, environment 0ms, prepare 61ms)


```
### Build (extrait)
```
atic pages (13/13)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                             Size  First Load JS
┌ ○ /                                                  138 B         103 kB
├ ○ /_not-found                                        138 B         103 kB
├ ƒ /api/auth/[...all]                                 138 B         103 kB
├ ƒ /api/auth/github-start                             138 B         103 kB
├ ƒ /api/e2e/option-a-qa-scenario                      138 B         103 kB
├ ƒ /api/e2e/w3b-boundary                              138 B         103 kB
├ ƒ /api/studio/projects/[projectId]/assistant/send    925 B         107 kB
├ ○ /cycle-actif                                     3.83 kB         130 kB
├ ○ /decision                                        5.54 kB         132 kB
├ ƒ /login                                           2.14 kB         105 kB
├ ƒ /nouvelle-demande                                10.2 kB         116 kB
├ ○ /ops1/nouvelle-demande                             19 kB         145 kB
├ ƒ /projects/[id]                                   2.65 kB         109 kB
├ ○ /projects/new                                    2.63 kB         109 kB
├ ○ /studio                                            220 B         222 kB
├ ƒ /studio/projects/[id]                              996 B         223 kB
├ ○ /studio/projects/new                               220 B         222 kB
├ ○ /synthese                                        4.85 kB         131 kB
└ ƒ /workspace                                         571 B         107 kB
+ First Load JS shared by all                         103 kB
  ├ chunks/08901a54-eef2169f52760975.js              54.2 kB
  ├ chunks/330-bd6260a0bea2af79.js                   46.4 kB
  └ other shared chunks (total)                      2.06 kB


ƒ Middleware                                          234 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


```

---

## 14. DIFF COMPLET — fichiers w2 modifiés (Confirm/Authorize/Prepare/Actions)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
index 651fe806..23d009df 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/actions.ts
@@ -74,6 +74,14 @@ import type {
 } from "./types";
 import type { ReadW2ProjectHistoryResult } from "./projectHistory";
 import type { RecoveryExecutionBinding } from "./resolveRecoveryExecutionBinding";
+import type { IntentAnalysisDto } from "../f2/types";
+import type { GenericMissionSubject } from "./genericMissionSubject";
+import {
+  recordGenericMissionHumanDecision,
+  sealGenericMissionForPresentation,
+  type RecordGenericMissionHumanDecisionResult,
+  type SealGenericMissionForPresentationResult,
+} from "./recordGenericMissionHumanDecision";

 const OA_UNAVAILABLE = {
   ok: false as const,
@@ -549,6 +557,12 @@ export async function w2PrepareRecoveryDocsWriteAction(input: {
 export async function w2GovernedExecuteSelectAction(input: {
   projectId: string;
   executionContractId: string;
+  /**
+   * Optional Pilote inspection binding for G-D4 stamped Generic Select.
+   * When omitted, Select resolves from durable inspection attestation.
+   */
+  expectedVersion?: number;
+  expectedSemanticFingerprint?: string;
   canActAsMorris?: unknown;
   claimedAuthorityLevel?: unknown;
   authorityReceiptRef?: unknown;
@@ -560,6 +574,8 @@ export async function w2GovernedExecuteSelectAction(input: {
     oa: runtime.oa,
     projectId: input.projectId,
     executionContractId: input.executionContractId,
+    expectedVersion: input.expectedVersion,
+    expectedSemanticFingerprint: input.expectedSemanticFingerprint,
     canActAsMorris: input.canActAsMorris,
     claimedAuthorityLevel: input.claimedAuthorityLevel,
     authorityReceiptRef: input.authorityReceiptRef,
@@ -930,3 +946,62 @@ export async function w2ReadProjectHistoryAction(input: {
     projectId: input.projectId,
   });
 }
+
+/**
+ * M-HD-01 — seal a Generic Mission subject for explicit Pilote presentation.
+ * Does not record HumanDecision. Does not create Attempt.
+ */
+export async function w2SealGenericMissionAction(input: {
+  projectId: string;
+  cycleInstanceId?: string | null;
+  analysis: IntentAnalysisDto;
+  missionSubjectId?: string;
+}): Promise<SealGenericMissionForPresentationResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "OA stack unavailable",
+      humanDecisionCreated: false,
+      executionAttemptCreated: false,
+    };
+  }
+  return sealGenericMissionForPresentation({
+    oa: runtime.oa,
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    analysis: input.analysis,
+    missionSubjectId: input.missionSubjectId,
+  });
+}
+
+/**
+ * M-HD-01 — record Pilote HumanDecision on a sealed Generic Mission via OA.
+ * Never creates ExecutionAttempt. Never auto-PREPARE / EXECUTE.
+ */
+export async function w2RecordGenericMissionHumanDecisionAction(input: {
+  subject: GenericMissionSubject;
+  selectedOptionId: string;
+  /** CR-02 — required for Product re-seal authenticity. */
+  analysis: IntentAnalysisDto;
+  rationale?: string;
+}): Promise<RecordGenericMissionHumanDecisionResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      code: "OA_STACK_UNAVAILABLE",
+      message: "OA stack unavailable",
+      humanDecisionCreated: false,
+      executionAttemptCreated: false,
+    };
+  }
+  return recordGenericMissionHumanDecision({
+    oa: runtime.oa,
+    subject: input.subject,
+    selectedOptionId: input.selectedOptionId,
+    analysis: input.analysis,
+    rationale: input.rationale,
+  });
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
index 730abe5e..e361075c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
@@ -47,6 +47,7 @@ import {
   parseStampedProductCurrentness,
   revalidateMaterialityAgainstCurrentProduct,
 } from "./resolveAuthoritativeProductMateriality";
+import { verifyGenericMissionHumanDecisionForContract } from "./verifyGenericMissionHumanDecisionForPrepare";
 import type {
   AgentCapabilityOutcomeDto,
   ConfirmationRequirementDto,
@@ -435,20 +436,44 @@ export async function evaluateExecutionAuthorization(
       typeof contractInputs.materialityFacts === "object"
         ? (contractInputs.materialityFacts as Record<string, unknown>)
         : null;
-    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
-      oa,
-      projectId: input.projectId,
-      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
-      cycleInstanceId: contract.cycleInstanceId ?? null,
-      stampedMateriality,
-      stampedCurrentness: parseStampedProductCurrentness(factsRaw),
-    });
-    if (!revalidated.ok) {
-      return {
-        ok: false,
-        code: revalidated.code,
-        message: revalidated.message,
-      };
+    const decisionRefs = contract.decisionRefs ?? [];
+    // M-HD-01 CR-03 — structural/unknown: verify each HD currently.
+    const structuralHdResume =
+      decisionRefs.length >= 1 &&
+      (stampedMateriality === "structural" ||
+        stampedMateriality === "unknown");
+    if (structuralHdResume) {
+      for (const ref of decisionRefs) {
+        const hd = await verifyGenericMissionHumanDecisionForContract({
+          oa,
+          projectId: input.projectId,
+          decisionId: ref,
+          contract,
+        });
+        if (!hd.ok) {
+          return {
+            ok: false,
+            code: hd.code,
+            message: hd.message,
+          };
+        }
+      }
+    } else {
+      const revalidated = await revalidateMaterialityAgainstCurrentProduct({
+        oa,
+        projectId: input.projectId,
+        analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
+        cycleInstanceId: contract.cycleInstanceId ?? null,
+        stampedMateriality,
+        stampedCurrentness: parseStampedProductCurrentness(factsRaw),
+      });
+      if (!revalidated.ok) {
+        return {
+          ok: false,
+          code: revalidated.code,
+          message: revalidated.message,
+        };
+      }
     }
   }

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts b/projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
index 074db64b..6efc35dc 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
@@ -28,6 +28,7 @@ import {
   parseStampedProductCurrentness,
   revalidateMaterialityAgainstCurrentProduct,
 } from "./resolveAuthoritativeProductMateriality";
+import { verifyGenericMissionHumanDecisionForContract } from "./verifyGenericMissionHumanDecisionForPrepare";

 export type AuthorizeGenericPreparedContractInput = {
   readonly oa: RuntimeOaStack;
@@ -151,20 +152,43 @@ export async function authorizeGenericPreparedContract(
       : null
   );
   const stamped = materialityFromContractConstraints(loaded.contract.constraints);
-  const revalidated = await revalidateMaterialityAgainstCurrentProduct({
-    oa: input.oa,
-    projectId: input.projectId,
-    analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
-    cycleInstanceId: loaded.contract.cycleInstanceId ?? null,
-    stampedMateriality: stamped,
-    stampedCurrentness: parseStampedProductCurrentness(factsRaw),
-  });
-  if (!revalidated.ok) {
-    return {
-      ok: false,
-      code: revalidated.code,
-      message: revalidated.message,
-    };
+  const decisionRefs = loaded.contract.decisionRefs ?? [];
+  // M-HD-01 CR-03 — structural/unknown: re-verify each HD currently (not refs length).
+  const structuralHdResume =
+    decisionRefs.length >= 1 &&
+    (stamped === "structural" || stamped === "unknown");
+  if (structuralHdResume) {
+    for (const ref of decisionRefs) {
+      const hd = await verifyGenericMissionHumanDecisionForContract({
+        oa: input.oa,
+        projectId: input.projectId,
+        decisionId: ref,
+        contract: loaded.contract,
+      });
+      if (!hd.ok) {
+        return {
+          ok: false,
+          code: hd.code,
+          message: hd.message,
+        };
+      }
+    }
+  } else {
+    const revalidated = await revalidateMaterialityAgainstCurrentProduct({
+      oa: input.oa,
+      projectId: input.projectId,
+      analysis: analysisStubFromMaterialityFacts(factsRaw, contractInputs),
+      cycleInstanceId: loaded.contract.cycleInstanceId ?? null,
+      stampedMateriality: stamped,
+      stampedCurrentness: parseStampedProductCurrentness(factsRaw),
+    });
+    if (!revalidated.ok) {
+      return {
+        ok: false,
+        code: revalidated.code,
+        message: revalidated.message,
+      };
+    }
   }

   let confirmationRef: string | null = loaded.contract.confirmationRef ?? null;
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
index b2cd6cee..d547312c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
@@ -29,6 +29,7 @@ import {
   parseStampedProductCurrentness,
   revalidateMaterialityAgainstCurrentProduct,
 } from "./resolveAuthoritativeProductMateriality";
+import { verifyGenericMissionHumanDecisionForContract } from "./verifyGenericMissionHumanDecisionForPrepare";

 export function w2ConfirmationActionRef(input: {
   executionContractId: string;
@@ -173,10 +174,33 @@ export async function confirmExecutionContractForAuthorization(
   const requiresGd4CurrentMaterialityRevalidation =
     stamped != null || stampedCurrentness != null;

+  // M-HD-01 CR-03 — structural/unknown + decisionRefs: verify each HD currently
+  // (never skip currentness merely because decisionRefs.length > 0).
+  const structuralHdResume =
+    decisionRefs.length >= 1 &&
+    (stamped === "structural" || stamped === "unknown");
+
   let recomputedMateriality = stamped ?? "unknown";
   if (requiresGd4CurrentMaterialityRevalidation) {
-    // Cases B/C — G-D4 stamped (NON_STRUCTURAL / STRUCTURAL / UNKNOWN) or stamped facts.
-    if (input.skipMaterialityRevalidation !== true) {
+    if (structuralHdResume) {
+      for (const ref of decisionRefs) {
+        const hd = await verifyGenericMissionHumanDecisionForContract({
+          oa,
+          projectId: input.projectId,
+          decisionId: ref,
+          contract,
+        });
+        if (!hd.ok) {
+          return {
+            ok: false,
+            code: hd.code,
+            message: hd.message,
+          };
+        }
+      }
+      recomputedMateriality = stamped ?? "unknown";
+    } else if (input.skipMaterialityRevalidation !== true) {
+      // Cases B/C — G-D4 stamped NON_STRUCTURAL (or stamped facts without HD).
       const revalidated = await revalidateMaterialityAgainstCurrentProduct({
         oa,
         projectId: input.projectId,
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 37daec50..df6ec6bf 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -1,14 +1,14 @@
 /**
  * G-D4 / T-A4 / Authority Continuity — generic ExecutionContract PREPARE
- * without systematic HumanDecision.
+ * without systematic HumanDecision for non-structural missions.
  *
- * When a mission is sufficiently qualified and server-owned Product materiality
- * is non-structural, Studio may Build + Validate a generalist contract with
- * decisionRefs=[] for Pilote inspection. PREPARE ≠ EXECUTE: no Attempt.
+ * M-HD-01 — structural / HD-required missions may resume PREPARE only after a
+ * verified OA HumanDecision (sourceType generic_mission, accept-prepare).
+ * decisionRefs then carries that verified decisionId only. PREPARE ≠ EXECUTE.
  *
  * Confirm/Authorize remain separate Pilote acts. Empty decisionRefs at
  * confirmed require MATERIALITY:NON_STRUCTURAL stamp + CURRENT revalidation
- * (T-A4 schema G-D4). Structural missions still require a real HD ref.
+ * (T-A4 schema G-D4).
  *
  * Reuses BuildExecutionContract + ValidateExecutionContract + generalist surface
  * + resolveTrustedProductLaunchContext + resolveContractSourceGroundingForPrepare.
@@ -64,6 +64,10 @@ import {
   resolveGenericPrepareCapabilityEnvelope,
   type GenericPrepareCapabilityResolution,
 } from "./genericPrepareCapabilityEnvelope";
+import {
+  verifyGenericMissionHumanDecisionForContract,
+  verifyGenericMissionHumanDecisionForPrepare,
+} from "./verifyGenericMissionHumanDecisionForPrepare";

 export {
   GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
@@ -153,7 +157,8 @@ export function isChatFirstPrepareAcceptGo(input: {
  */
 export function resolveChatFirstGenericPrepareGo(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  /** null = S8 project-context (no active cycle). Matches only a null-cycle offer. */
+  readonly cycleInstanceId: string | null;
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
   readonly sessionKey?: string | null;
@@ -184,7 +189,7 @@ export function resolveChatFirstGenericPrepareGo(input: {
   if (offer.sessionKey !== sessionKey) {
     return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
   }
-  if (offer.cycleInstanceId !== input.cycleInstanceId) {
+  if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
     return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
   }
   return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
@@ -282,6 +287,11 @@ export type PrepareGenericExecutionContractDraftInput = {
   readonly projectId: string;
   readonly cycleInstanceId?: string | null;
   readonly analysis: IntentAnalysisDto;
+  /**
+   * M-HD-01 — durable OA HumanDecision id for structural resume.
+   * Verified before decisionRefs is populated. Never fabricated.
+   */
+  readonly decisionId?: string | null;
   /** When true, bypass local authority env gate (DET tests). */
   readonly forceLocalAuthority?: boolean;
   /**
@@ -320,6 +330,9 @@ function stableMissionKey(input: {
   readonly scopeIn: readonly string[];
   readonly scopeOut: readonly string[];
   readonly materiality: string;
+  /** M-HD-01 — bind EC identity to verified HD when present. */
+  readonly decisionId?: string | null;
+  readonly presentationDigest?: string | null;
 }): string {
   const raw = [
     input.projectId,
@@ -330,6 +343,8 @@ function stableMissionKey(input: {
     input.scopeIn.join("|"),
     input.scopeOut.join("|"),
     input.materiality,
+    input.decisionId?.trim() || "",
+    input.presentationDigest?.trim() || "",
   ].join("\n");
   return createHash("sha256").update(raw).digest("hex").slice(0, 24);
 }
@@ -368,7 +383,7 @@ export function extractMissionEffectsFromAnalysis(

 function offerFingerprintFor(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  readonly cycleInstanceId: string | null;
   readonly objective: string;
   readonly expectedOutcome: string;
   readonly scope: string;
@@ -381,7 +396,7 @@ function offerFingerprintFor(input: {
     .update(
       [
         input.projectId,
-        input.cycleInstanceId,
+        input.cycleInstanceId ?? "",
         input.objective,
         input.expectedOutcome,
         input.scope,
@@ -405,7 +420,7 @@ function offerFingerprintFor(input: {
 /** Remember CURRENT prepare recommendation (Nora offered; Pilot has not GO'd). */
 export function rememberGenericPrepareRecommendation(input: {
   readonly projectId: string;
-  readonly cycleInstanceId: string;
+  readonly cycleInstanceId: string | null;
   readonly analysis: IntentAnalysisDto;
   readonly offeredAtIso: string;
   readonly sessionKey?: string | null;
@@ -540,21 +555,14 @@ export function getCurrentGenericPrepareOffer(

 /**
  * Build (+ optional Validate) an inspectable generalist ExecutionContract.
- * Empty decisionRefs when non-structural. Never records HumanDecision.
+ * Empty decisionRefs when non-structural. Structural resume requires verified HD.
+ * Never records HumanDecision. Never auto-EXECUTE.
  */
 export async function prepareGenericExecutionContractDraft(
   input: PrepareGenericExecutionContractDraftInput,
 ): Promise<PrepareGenericExecutionContractDraftResult> {
   const readiness = assessGenericMissionPrepareReadiness(input.analysis);
-  if (readiness.structuralBlocked) {
-    return {
-      ok: false,
-      code: "STRUCTURAL_HUMAN_DECISION_REQUIRED",
-      message:
-        "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
-    };
-  }
-  if (!readiness.ready) {
+  if (readiness.missingFields.length > 0) {
     return {
       ok: false,
       code: "MISSION_INSUFFICIENTLY_QUALIFIED",
@@ -562,6 +570,10 @@ export async function prepareGenericExecutionContractDraft(
     };
   }

+  const decisionId = input.decisionId?.trim() || null;
+  let verifiedDecisionRefs: string[] = [];
+  let verifiedPresentationDigest: string | null = null;
+
   const proposedCapabilities =
     input.analysis.executionIntent?.requiredCapabilities ?? [];
   const capabilityResolution =
@@ -581,19 +593,41 @@ export async function prepareGenericExecutionContractDraft(
     cycleInstanceId: input.cycleInstanceId,
   });
   const materiality = materialityResolution.assessment;
-  if (materiality.humanDecisionRequired) {
-    return {
-      ok: false,
-      code:
-        materiality.materiality === "unknown"
-          ? "MATERIALITY_UNKNOWN"
-          : "STRUCTURAL_HUMAN_DECISION_REQUIRED",
-      message:
-        materiality.materiality === "unknown"
-          ? "Matérialité indéterminée — contexte Product insuffisant ou contradiction ; HumanDecision / clarification requise."
-          : "Matérialité server-owned structurelle — HumanDecision requise avant préparation sans refs.",
-    };
+  const hdRequired =
+    readiness.structuralBlocked || materiality.humanDecisionRequired;
+
+  if (hdRequired) {
+    if (!decisionId) {
+      return {
+        ok: false,
+        code:
+          materiality.materiality === "unknown" && !readiness.structuralBlocked
+            ? "MATERIALITY_UNKNOWN"
+            : "STRUCTURAL_HUMAN_DECISION_REQUIRED",
+        message:
+          materiality.materiality === "unknown" && !readiness.structuralBlocked
+            ? "Matérialité indéterminée — contexte Product insuffisant ou contradiction ; HumanDecision / clarification requise."
+            : "Cette mission engage une vérité structurelle — une HumanDecision Pilote reste requise avant préparation.",
+      };
+    }
+    const verified = await verifyGenericMissionHumanDecisionForPrepare({
+      oa: input.oa,
+      projectId: input.projectId,
+      cycleInstanceId: input.cycleInstanceId?.trim() || null,
+      decisionId,
+      analysis: input.analysis,
+    });
+    if (!verified.ok) {
+      return {
+        ok: false,
+        code: verified.code,
+        message: verified.message,
+      };
+    }
+    verifiedDecisionRefs = [verified.verified.decisionId];
+    verifiedPresentationDigest = verified.verified.presentationDigest;
   }
+  // Non-structural: decisionRefs remain empty (no systematic HD).

   const services = input.oa.executionContractServices;
   if (!services?.buildExecutionContract) {
@@ -717,6 +751,8 @@ export async function prepareGenericExecutionContractDraft(
     scopeIn,
     scopeOut: outOfScope,
     materiality: materiality.materiality,
+    decisionId: verifiedDecisionRefs[0] ?? null,
+    presentationDigest: verifiedPresentationDigest,
   });
   const executionContractId = `xct:gen-prep:${missionKey}`;
   const idempotencyKey = `idem:gen-prep:${missionKey}`;
@@ -739,7 +775,9 @@ export async function prepareGenericExecutionContractDraft(
   const constraints = [
     "PRODUCT_GOVERNED",
     "NO_ATTEMPT_AT_PREPARE",
-    "PREPARE_WITHOUT_SYSTEMATIC_HD",
+    verifiedDecisionRefs.length > 0
+      ? "PREPARE_AFTER_VERIFIED_GENERIC_MISSION_HD"
+      : "PREPARE_WITHOUT_SYSTEMATIC_HD",
     "CURSOR_DETERMINES_HOW",
     "GENERIC_MISSION_NO_TASK_CATALOG",
     materiality.constraintToken,
@@ -776,7 +814,7 @@ export async function prepareGenericExecutionContractDraft(
     executionContractId,
     projectId: input.projectId,
     cycleInstanceId,
-    decisionRefs: [],
+    decisionRefs: [...verifiedDecisionRefs],
     action: PRODUCT_CANONICAL_EXECUTION_ACTION,
     target: PRODUCT_CANONICAL_EXECUTION_TARGET,
     scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
@@ -788,7 +826,9 @@ export async function prepareGenericExecutionContractDraft(
       scopeOut: outOfScope,
       sourcesToRead,
       cursorDeterminesHow: true,
-      prepareWithoutSystematicHumanDecision: true,
+      prepareWithoutSystematicHumanDecision: verifiedDecisionRefs.length === 0,
+      verifiedGenericMissionHumanDecisionId: verifiedDecisionRefs[0] ?? null,
+      presentationDigest: verifiedPresentationDigest,
       humanDecisionCreated: false,
       executionAttemptCreated: false,
       prepareStatus: "draft_inspectable",
@@ -835,16 +875,104 @@ export async function prepareGenericExecutionContractDraft(
     authorityEvidenceId: authority.evidenceId,
   });

+  let contract;
+  let reusedExisting = false;
   if (!built.ok) {
-    return {
-      ok: false,
-      code: built.error.detailCode,
-      message: built.error.message,
-    };
+    // Idempotent resume: same missionKey / executionContractId already built.
+    if (built.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
+      const existing = await services.getExecutionContract.execute({
+        executionContractId,
+      });
+      const reusableStatuses = new Set([
+        "draft",
+        "validated",
+        "confirmation_required",
+        "confirmed",
+        "authorized",
+      ]);
+      const existingRefs = [...(existing.ok ? existing.contract.decisionRefs ?? [] : [])].sort();
+      const wantedRefs = [...verifiedDecisionRefs].sort();
+      const existingCaps = [
+        ...(existing.ok ? existing.contract.requiredCapabilities ?? [] : []),
+      ];
+      const wantedCaps = [...capabilityResolution.contractCapabilities];
+      const existingInputs = (existing.ok ? existing.contract.inputs ?? {} : {}) as Record<
+        string,
+        unknown
+      >;
+      const sameRefs = JSON.stringify(existingRefs) === JSON.stringify(wantedRefs);
+      const sameCaps = JSON.stringify(existingCaps) === JSON.stringify(wantedCaps);
+      const sameObjective =
+        String(existingInputs.objective ?? "").trim() === objective.trim();
+      const sameScope =
+        String(existingInputs.missionScopeNarrative ?? "").trim() ===
+          scopeNarrative.trim() &&
+        JSON.stringify(existingInputs.scopeIn ?? []) === JSON.stringify(scopeIn) &&
+        JSON.stringify(existingInputs.scopeOut ?? []) === JSON.stringify(outOfScope);
+      const sameMateriality = (existing.ok ? existing.contract.constraints ?? [] : []).includes(
+        materiality.constraintToken,
+      );
+      const sameDigest =
+        !verifiedPresentationDigest ||
+        String(existingInputs.presentationDigest ?? "") ===
+          verifiedPresentationDigest;
+      const statusOk =
+        existing.ok && reusableStatuses.has(existing.contract.status);
+      const notSuperseded =
+        existing.ok && existing.contract.status !== "superseded";
+      if (
+        existing.ok &&
+        existing.contract.projectId === input.projectId &&
+        sameRefs &&
+        sameCaps &&
+        sameObjective &&
+        sameScope &&
+        sameMateriality &&
+        sameDigest &&
+        statusOk &&
+        notSuperseded
+      ) {
+        // When HD resume: re-verify decision still applicable before reuse.
+        if (verifiedDecisionRefs.length > 0) {
+          for (const ref of verifiedDecisionRefs) {
+            const hd = await verifyGenericMissionHumanDecisionForContract({
+              oa: input.oa,
+              projectId: input.projectId,
+              decisionId: ref,
+              contract: existing.contract,
+            });
+            if (!hd.ok) {
+              return {
+                ok: false,
+                code: "CONTRACT_STALE",
+                message: `EC existant non réutilisable — HD courante invalide (${hd.code}).`,
+              };
+            }
+          }
+        }
+        contract = existing.contract;
+        reusedExisting = true;
+      } else {
+        return {
+          ok: false,
+          code: "CONTRACT_STALE",
+          message:
+            "EC existant non réutilisable (statut/scope/effets/decisionRefs/currentness divergents).",
+        };
+      }
+    } else {
+      return {
+        ok: false,
+        code: built.error.detailCode,
+        message: built.error.message,
+      };
+    }
+  } else {
+    contract = built.contract;
   }

-  let contract = built.contract;
-  const shouldValidate = input.validateAfterBuild !== false;
+  const shouldValidate =
+    input.validateAfterBuild !== false && !reusedExisting;
   if (shouldValidate && services.validateExecutionContract) {
     const validated = await services.validateExecutionContract.execute({
       executionContractId: contract.executionContractId,
@@ -884,13 +1012,19 @@ export function genericMissionClarificationText(input: {
   readonly missingFields: readonly string[];
   readonly structuralBlocked: boolean;
   readonly recommendPrepare?: boolean;
+  /** false = S8 project-context (no active cycle, none invented). Default true. */
+  readonly hasActiveCycle?: boolean;
 }): string {
   const head =
     input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
+  const contextKept =
+    input.hasActiveCycle === false
+      ? "Contexte projet conservé — aucun cycle artificiel créé."
+      : "Le cycle actif est conservé.";
   if (input.structuralBlocked) {
     return [
       head,
-      "Le cycle actif est conservé.",
+      contextKept,
       "Cette demande touche une frontière structurelle — une décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution.",
       "Rien n'a encore été exécuté.",
     ].join(" ");
@@ -898,7 +1032,7 @@ export function genericMissionClarificationText(input: {
   if (input.recommendPrepare) {
     return [
       head,
-      "Le cycle actif est conservé.",
+      contextKept,
       "Je recommande de confier cette mission à Cursor.",
       "Je peux préparer le contrat d'exécution générique inspectable.",
       "Si tu es d'accord, dis-le-moi (par ex. « OK, vas-y ») — préparer ≠ autoriser ≠ exécuter.",
@@ -908,7 +1042,7 @@ export function genericMissionClarificationText(input: {
   const gaps = input.missingFields.join(", ");
   return [
     head,
-    "Le cycle actif est conservé.",
+    contextKept,
     `Pour préparer le contrat d'exécution, il me manque encore : ${gaps}.`,
     "La préparation reste distincte du lancement. Rien n'a encore été exécuté.",
   ].join(" ");
@@ -930,3 +1064,184 @@ export function genericMissionPreparedText(input: {
     "Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.",
   ].join(" ");
 }
+
+// ---------------------------------------------------------------------------
+// D-ER-16…19 — Nora tool solicitation (Option 2). Thin Product service over
+// the SAME backend: assess readiness → prepareGenericExecutionContractDraft.
+// No parallel prepare engine · no task taxonomy · never an ExecutionAttempt.
+// ---------------------------------------------------------------------------
+
+/** Mission fields Nora may supply to the solicitation tool (NON-AUTHORITATIVE). */
+export type SolicitGenericPrepareMissionFields = {
+  readonly objective?: string | null;
+  readonly expectedOutcome?: string | null;
+  readonly scope?: string | null;
+  readonly contextNotes?: string | null;
+  /** Conservative-only: a true flag can only make Product MORE cautious. */
+  readonly impactSignals?: {
+    readonly structuralChange?: boolean;
+    readonly securityImpact?: boolean;
+    readonly architectureImpact?: boolean;
+    readonly dataImpact?: boolean;
+    readonly irreversible?: boolean;
+  } | null;
+};
+
+/**
+ * Minimal IntentAnalysisDto for a tool-solicited mission. Safe defaults:
+ * intentClass execution_request, NO executionIntent taxonomy, NO
+ * continuationKind / artifactMaterializationOperation, NO cycle type.
+ */
+export function buildIntentAnalysisFromSolicitedMission(
+  fields: SolicitGenericPrepareMissionFields,
+): IntentAnalysisDto {
+  const objective = fields.objective?.trim() || null;
+  const expectedOutcome = fields.expectedOutcome?.trim() || null;
+  const scope = fields.scope?.trim() || null;
+  const sig = fields.impactSignals ?? null;
+  const structural =
+    sig?.structuralChange === true ||
+    sig?.securityImpact === true ||
+    sig?.architectureImpact === true ||
+    sig?.dataImpact === true ||
+    sig?.irreversible === true;
+  const notes = fields.contextNotes?.trim() || null;
+  return {
+    parseOk: true,
+    intentClass: "execution_request",
+    candidateCycleTypeId: null,
+    signals: {
+      structuralChange: sig?.structuralChange === true,
+      securityImpact: sig?.securityImpact === true,
+      architectureImpact: sig?.architectureImpact === true,
+      dataImpact: sig?.dataImpact === true,
+      irreversible: sig?.irreversible === true,
+      lowRiskBounded: !structural,
+    },
+    cognitiveWorkload: null,
+    contradictionCandidate: null,
+    challengeResponseAssessment: "sufficient",
+    objective,
+    scope,
+    rephrasedRequest: objective,
+    outOfScope: [],
+    risks: [],
+    reservations: notes ? [notes] : [],
+    stopConditions: [],
+    activatedBlocks: [],
+    expectedOutcome,
+    criticalJustification: null,
+    requestedOperation: null,
+    executionIntent: null,
+  };
+}
+
+export type SolicitGenericExecutionPrepareInput = {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  /** null = S8 project-context (no active cycle; none is ever created here). */
+  readonly cycleInstanceId: string | null;
+  /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
+  readonly analysis?: IntentAnalysisDto;
+  readonly mission?: SolicitGenericPrepareMissionFields;
+  /** M-HD-01 — verified OA HumanDecision for structural resume. */
+  readonly decisionId?: string | null;
+  readonly sessionKey?: string | null;
+  readonly sessionDbPath?: string | null;
+  readonly forceLocalAuthority?: boolean;
+  readonly pinnedBaseHeadSha?: string | null;
+  readonly managedRepoRootBase?: string | null;
+  readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
+};
+
+export type SolicitGenericExecutionPrepareResult =
+  | {
+      readonly ok: true;
+      readonly code: "GENERIC_PREPARE_DRAFTED";
+      readonly executionContractId: string;
+      readonly contractStatus: string;
+      readonly materiality: string;
+      readonly cycleInstanceId: string | null;
+      readonly projectContextOnly: boolean;
+      readonly humanDecisionCreated: false;
+      readonly executionAttemptCreated: false;
+      readonly message: string;
+    }
+  | {
+      readonly ok: false;
+      readonly code: string;
+      readonly message: string;
+      readonly missingFields?: readonly string[];
+      readonly humanDecisionCreated: false;
+      readonly executionAttemptCreated: false;
+    };
+
+/**
+ * Thin Product service for Nora tool injection (D-ER-16). PREPARE only —
+ * AUTHORIZE and EXECUTE remain separate Pilote/Studio acts. Always reports
+ * executionAttemptCreated:false; JSON-serializable.
+ */
+export async function solicitGenericExecutionPrepare(
+  input: SolicitGenericExecutionPrepareInput,
+): Promise<SolicitGenericExecutionPrepareResult> {
+  const projectId = input.projectId.trim();
+  const fail = (
+    code: string,
+    message: string,
+    missingFields?: readonly string[],
+  ): SolicitGenericExecutionPrepareResult => ({
+    ok: false,
+    code,
+    message,
+    ...(missingFields ? { missingFields } : {}),
+    humanDecisionCreated: false,
+    executionAttemptCreated: false,
+  });
+  if (!projectId) {
+    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
+  }
+  const analysis =
+    input.analysis ??
+    buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
+
+  const readiness = assessGenericMissionPrepareReadiness(analysis);
+  if (readiness.missingFields.length > 0) {
+    return fail(
+      "MISSION_INSUFFICIENTLY_QUALIFIED",
+      `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
+      readiness.missingFields,
+    );
+  }
+  // Structural without decisionId fails inside prepareGeneric (verified HD path).
+
+  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
+  const prep = await prepareGenericExecutionContractDraft({
+    oa: input.oa,
+    projectId,
+    cycleInstanceId,
+    analysis,
+    decisionId: input.decisionId,
+    forceLocalAuthority: input.forceLocalAuthority,
+    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
+    managedRepoRootBase: input.managedRepoRootBase,
+    sourceGroundingReader: input.sourceGroundingReader,
+    sessionKey: input.sessionKey,
+    sessionDbPath: input.sessionDbPath,
+  });
+  if (!prep.ok) {
+    return fail(prep.code, prep.message);
+  }
+  return {
+    ok: true,
+    code: "GENERIC_PREPARE_DRAFTED",
+    executionContractId: prep.contract.executionContractId,
+    contractStatus: prep.contract.status,
+    materiality: prep.materiality.materiality,
+    cycleInstanceId,
+    projectContextOnly: cycleInstanceId === null,
+    humanDecisionCreated: false,
+    executionAttemptCreated: false,
+    message:
+      "Contrat d'exécution préparé et inspectable — non autorisé, non lancé. Préparer ≠ autoriser ≠ exécuter.",
+  };
+}

```

---

## 15. CONTENU COMPLET — genericMissionSubject.ts

```typescript
/**
 * M-HD-01 — Generic Mission Subject seal + presentationDigest.
 *
 * Occurrence identity (missionSubjectId) is distinct from the semantic
 * presentationDigest. Digests use full SHA-256 over canonical JSON.
 * presentedAtIso is metadata only — excluded from the seal.
 * No PresentedMission store; durability lives in OA HumanDecision.decisionBasis.
 */

import { randomBytes } from "node:crypto";
import {
  computeDecisionBasisSourceDigest,
  type DecisionBasis,
  type DecisionBasisGenericMissionContext,
} from "@/lib/oa/decision";

export const GENERIC_MISSION_SUBJECT_SCHEMA_VERSION = "0.1.0-gms" as const;

export const GENERIC_MISSION_OPTION_ACCEPT_PREPARE =
  "opt:generic-mission:accept-prepare" as const;
export const GENERIC_MISSION_OPTION_REFUSE =
  "opt:generic-mission:refuse" as const;
export const GENERIC_MISSION_OPTION_REQUEST_AMEND =
  "opt:generic-mission:request-amend" as const;

export const GENERIC_MISSION_PRESENTED_OPTIONS = [
  {
    optionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
    label: "Accepter — autoriser la préparation de cette mission",
  },
  {
    optionId: GENERIC_MISSION_OPTION_REFUSE,
    label: "Refuser cette mission structurante",
  },
  {
    optionId: GENERIC_MISSION_OPTION_REQUEST_AMEND,
    label: "Demander un amendement — nouvelle présentation requise",
  },
] as const;

export type GenericMissionImpactSignals = {
  readonly structuralChange: boolean;
  readonly securityImpact: boolean;
  readonly architectureImpact: boolean;
  readonly dataImpact: boolean;
  readonly irreversible: boolean;
};

export type GenericMissionEffectsSeal = {
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  readonly requestedOperation: string | null;
  readonly requiredCapabilities: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly stopConditions: readonly string[];
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
};

/** Material fields sealed into presentationDigest (no digests, no presentedAt). */
export type GenericMissionSealPayload = {
  readonly schemaVersion: typeof GENERIC_MISSION_SUBJECT_SCHEMA_VERSION;
  readonly missionSubjectId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly materialityReasonCodes: readonly string[];
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly effects: GenericMissionEffectsSeal;
  readonly impactSignals: GenericMissionImpactSignals;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
  readonly optionRefs: readonly string[];
};

export type GenericMissionSubject = GenericMissionSealPayload & {
  readonly presentedAtIso: string;
  readonly presentationDigest: string;
};

export function newGenericMissionSubjectId(): string {
  return `gms:${randomBytes(16).toString("hex")}`;
}

export function computeGenericMissionPresentationDigest(
  payload: GenericMissionSealPayload,
): string {
  return computeDecisionBasisSourceDigest(payload);
}

export function buildGenericMissionSubject(input: {
  readonly missionSubjectId?: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly materialityReasonCodes: readonly string[];
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly effects: GenericMissionEffectsSeal;
  readonly impactSignals: GenericMissionImpactSignals;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
  readonly optionRefs?: readonly string[];
  readonly presentedAtIso: string;
}): GenericMissionSubject {
  const missionSubjectId =
    input.missionSubjectId?.trim() || newGenericMissionSubjectId();
  const optionRefs =
    input.optionRefs && input.optionRefs.length > 0
      ? [...input.optionRefs]
      : GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => o.optionId);
  const seal: GenericMissionSealPayload = {
    schemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    missionSubjectId,
    projectId: input.projectId.trim(),
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
    objective: input.objective.trim(),
    expectedOutcome: input.expectedOutcome.trim(),
    scopeNarrative: input.scopeNarrative.trim(),
    scopeIn: [...input.scopeIn],
    scopeOut: [...input.scopeOut],
    materiality: input.materiality,
    materialityReasonCodes: [...input.materialityReasonCodes],
    repositoryBindingIdentity: input.repositoryBindingIdentity,
    pathRoot: input.pathRoot,
    effects: {
      intentKind: input.effects.intentKind,
      artifactType: input.effects.artifactType,
      requestedOperation: input.effects.requestedOperation,
      requiredCapabilities: [...input.effects.requiredCapabilities],
      expectedOutputs: [...input.effects.expectedOutputs],
      reversibilityExpectation: input.effects.reversibilityExpectation,
      stopConditions: [...input.effects.stopConditions],
      risks: [...input.effects.risks],
      reservations: [...input.effects.reservations],
    },
    impactSignals: { ...input.impactSignals },
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    ...(input.doctrineDigest
      ? { doctrineDigest: input.doctrineDigest }
      : {}),
    optionRefs,
  };
  return {
    ...seal,
    presentedAtIso: input.presentedAtIso,
    presentationDigest: computeGenericMissionPresentationDigest(seal),
  };
}

/** Rebuild seal payload from durable genericMissionContext (+ LPS anchors). */
export function sealPayloadFromGenericMissionContext(input: {
  readonly ctx: DecisionBasisGenericMissionContext;
  readonly projectId: string;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly doctrineDigest?: string;
}): GenericMissionSealPayload {
  const ctx = input.ctx;
  return {
    schemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    missionSubjectId: ctx.missionSubjectId,
    projectId: input.projectId,
    cycleInstanceId: ctx.cycleInstanceId,
    objective: ctx.objective,
    expectedOutcome: ctx.expectedOutcome,
    scopeNarrative: ctx.scopeNarrative,
    scopeIn: [...ctx.scopeIn],
    scopeOut: [...ctx.scopeOut],
    materiality: ctx.materiality,
    materialityReasonCodes: [...ctx.materialityReasonCodes],
    repositoryBindingIdentity: ctx.repositoryBindingIdentity,
    pathRoot: ctx.pathRoot,
    effects: {
      intentKind: ctx.intentKind,
      artifactType: ctx.artifactType,
      requestedOperation: ctx.requestedOperation,
      requiredCapabilities: [...ctx.requiredCapabilities],
      expectedOutputs: [...ctx.expectedOutputs],
      reversibilityExpectation: ctx.reversibilityExpectation,
      stopConditions: [...ctx.stopConditions],
      risks: [...ctx.risks],
      reservations: [...ctx.reservations],
    },
    impactSignals: { ...ctx.impactSignals },
    lpsId: input.lpsId,
    lpsVersion: input.lpsVersion,
    ...(input.doctrineDigest
      ? { doctrineDigest: input.doctrineDigest }
      : {}),
    optionRefs: [...ctx.optionRefs],
  };
}

/**
 * Integrity check: recompute digest from durable snapshot fields.
 * Does not compare CURRENT Product facts (see materialCurrentnessMatch).
 */
export function verifyGenericMissionSnapshotIntegrity(input: {
  readonly basis: DecisionBasis;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const basis = input.basis;
  if (basis.sourceType !== "generic_mission") {
    return { ok: false, reason: "source_type_not_generic_mission" };
  }
  const ctx = basis.genericMissionContext;
  if (!ctx) {
    return { ok: false, reason: "generic_mission_context_absent" };
  }
  const payload = sealPayloadFromGenericMissionContext({
    ctx,
    projectId: basis.projectId,
    lpsId: basis.proposalContext.lpsId,
    lpsVersion: basis.proposalContext.lpsVersion,
    doctrineDigest: basis.proposalContext.doctrineDigest,
  });
  const recomputed = computeGenericMissionPresentationDigest(payload);
  if (recomputed !== basis.sourceDigest || recomputed !== ctx.presentationDigest) {
    return { ok: false, reason: "presentation_digest_integrity_failed" };
  }
  return { ok: true };
}

function sameStringArr(a: readonly string[], b: readonly string[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function normNullStr(v: string | null | undefined): string | null {
  if (v == null) return null;
  const t = v.trim();
  return t.length > 0 ? t : null;
}

/**
 * CURRENT mission material snapshot compared against sealed HD context.
 *
 * Integrity fields (digest): all seal payload fields including LPS anchors.
 * Currentness fields (requalify before PREPARE/Confirm/Authorize): mission
 * content, scope, effects, repo binding, materiality, impact signals, cycle.
 * Metadata not requiring raw equality at resume: presentedAtIso (never in seal),
 * optionRefs (fixed closed set; selectedOption checked separately),
 * materialityReasonCodes (diagnostic; materiality class is authoritative).
 */
export type GenericMissionCurrentMaterial = {
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly requiredCapabilities: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  readonly requestedOperation: string | null;
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly stopConditions: readonly string[];
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
  readonly impactSignals: GenericMissionImpactSignals;
  readonly cycleInstanceId: string | null;
};

/** Material fields that must match between sealed HD and CURRENT requalification. */
export function materialCurrentnessMatch(input: {
  readonly sealed: DecisionBasisGenericMissionContext;
  readonly current: GenericMissionCurrentMaterial;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  const s = input.sealed;
  const c = input.current;
  if (s.objective.trim() !== c.objective.trim()) {
    return { ok: false, reason: "objective_drift" };
  }
  if (s.expectedOutcome.trim() !== c.expectedOutcome.trim()) {
    return { ok: false, reason: "expected_outcome_drift" };
  }
  if (s.scopeNarrative.trim() !== c.scopeNarrative.trim()) {
    return { ok: false, reason: "scope_narrative_drift" };
  }
  if (!sameStringArr(s.scopeIn, c.scopeIn) || !sameStringArr(s.scopeOut, c.scopeOut)) {
    return { ok: false, reason: "scope_arrays_drift" };
  }
  if (s.materiality !== c.materiality) {
    return { ok: false, reason: "materiality_drift" };
  }
  if (s.repositoryBindingIdentity !== c.repositoryBindingIdentity) {
    return { ok: false, reason: "repository_binding_drift" };
  }
  if (s.pathRoot !== c.pathRoot) {
    return { ok: false, reason: "path_root_drift" };
  }
  if (!sameStringArr(s.requiredCapabilities, c.requiredCapabilities)) {
    return { ok: false, reason: "capabilities_drift" };
  }
  if (!sameStringArr(s.expectedOutputs, c.expectedOutputs)) {
    return { ok: false, reason: "expected_outputs_drift" };
  }
  if (normNullStr(s.intentKind) !== normNullStr(c.intentKind)) {
    return { ok: false, reason: "intent_kind_drift" };
  }
  if (normNullStr(s.artifactType) !== normNullStr(c.artifactType)) {
    return { ok: false, reason: "artifact_type_drift" };
  }
  if (normNullStr(s.requestedOperation) !== normNullStr(c.requestedOperation)) {
    return { ok: false, reason: "requested_operation_drift" };
  }
  if (s.reversibilityExpectation !== c.reversibilityExpectation) {
    return { ok: false, reason: "reversibility_drift" };
  }
  // Suppression of a sealed stop condition is refused; added Product stops OK.
  for (const stop of s.stopConditions) {
    if (!c.stopConditions.includes(stop)) {
      return { ok: false, reason: "stop_conditions_drift" };
    }
  }
  if (!sameStringArr(s.risks, c.risks)) {
    return { ok: false, reason: "risks_drift" };
  }
  if (!sameStringArr(s.reservations, c.reservations)) {
    return { ok: false, reason: "reservations_drift" };
  }
  const sig = s.impactSignals;
  const cs = c.impactSignals;
  if (
    sig.structuralChange !== cs.structuralChange ||
    sig.securityImpact !== cs.securityImpact ||
    sig.architectureImpact !== cs.architectureImpact ||
    sig.dataImpact !== cs.dataImpact ||
    sig.irreversible !== cs.irreversible
  ) {
    return { ok: false, reason: "impact_signals_drift" };
  }
  if ((s.cycleInstanceId ?? null) !== (c.cycleInstanceId ?? null)) {
    return { ok: false, reason: "cycle_drift" };
  }
  return { ok: true };
}

export type LpsMaterialSnapshot = {
  readonly version: number;
  readonly objective: string;
  readonly context?: string;
  readonly scope?: string;
  readonly constraints?: readonly string[];
  readonly doctrineDigest: string;
  readonly activeCycleInstanceId?: string | null;
  readonly trajectoryId?: string | null;
  readonly trajectoryVersion?: number | null;
  readonly decisionIds?: readonly string[];
};

/**
 * CR-04 — LPS transition after Record HD.
 *
 * Same version → OK.
 * Later version → OK only when material LPS fields are unchanged vs sealed
 * snapshot AND decisionId ∈ current.decisionIds.
 * version supérieure alone is never sufficient.
 */
export function evaluateLpsTransitionAfterHumanDecision(input: {
  readonly sealed: LpsMaterialSnapshot;
  readonly current: LpsMaterialSnapshot;
  readonly decisionId: string;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  if (input.current.version < input.sealed.version) {
    return { ok: false, reason: "lps_version_regressed" };
  }
  if (input.current.version === input.sealed.version) {
    return { ok: true };
  }
  // Material LPS fields must be identical aside from decisionIds growth.
  if (input.sealed.objective.trim() !== input.current.objective.trim()) {
    return { ok: false, reason: "lps_objective_drift" };
  }
  if ((input.sealed.context ?? "") !== (input.current.context ?? "")) {
    return { ok: false, reason: "lps_context_drift" };
  }
  if ((input.sealed.scope ?? "") !== (input.current.scope ?? "")) {
    return { ok: false, reason: "lps_scope_drift" };
  }
  const sealedConstraints = [...(input.sealed.constraints ?? [])].sort();
  const currentConstraints = [...(input.current.constraints ?? [])].sort();
  if (!sameStringArr(sealedConstraints, currentConstraints)) {
    return { ok: false, reason: "lps_constraints_drift" };
  }
  if (input.sealed.doctrineDigest !== input.current.doctrineDigest) {
    return { ok: false, reason: "lps_doctrine_drift" };
  }
  if (
    (input.sealed.activeCycleInstanceId ?? null) !==
    (input.current.activeCycleInstanceId ?? null)
  ) {
    return { ok: false, reason: "lps_cycle_drift" };
  }
  if ((input.sealed.trajectoryId ?? null) !== (input.current.trajectoryId ?? null)) {
    return { ok: false, reason: "lps_trajectory_drift" };
  }
  if (
    (input.sealed.trajectoryVersion ?? null) !==
    (input.current.trajectoryVersion ?? null)
  ) {
    return { ok: false, reason: "lps_trajectory_version_drift" };
  }
  const currentIds = input.current.decisionIds ?? [];
  if (!currentIds.includes(input.decisionId)) {
    return { ok: false, reason: "lps_decision_not_linked" };
  }
  // Sealed decisionIds must remain a prefix subset of current (HD append only).
  const sealedIds = input.sealed.decisionIds ?? [];
  for (let i = 0; i < sealedIds.length; i += 1) {
    if (currentIds[i] !== sealedIds[i]) {
      return { ok: false, reason: "lps_decision_history_rewritten" };
    }
  }
  return { ok: true };
}

/**
 * @deprecated Prefer evaluateLpsTransitionAfterHumanDecision (CR-04).
 * Kept for call-site migration; permissive version-only check is insufficient.
 */
export function isLegitimateLpsTransitionAfterHumanDecision(input: {
  readonly sealedLpsVersion: number;
  readonly currentLpsVersion: number;
  readonly currentDecisionIds: readonly string[] | undefined;
  readonly decisionId: string;
}): boolean {
  if (input.currentLpsVersion === input.sealedLpsVersion) return true;
  if (input.currentLpsVersion < input.sealedLpsVersion) return false;
  const ids = input.currentDecisionIds ?? [];
  return ids.includes(input.decisionId);
}

export function decisionBasisFromGenericMissionSubject(input: {
  readonly subject: GenericMissionSubject;
  readonly selectedOptionRef: string;
  readonly recommendedOptionRef?: string;
}): DecisionBasis {
  const s = input.subject;
  const ctx: DecisionBasisGenericMissionContext = {
    missionSubjectId: s.missionSubjectId,
    presentationDigest: s.presentationDigest,
    subjectSchemaVersion: GENERIC_MISSION_SUBJECT_SCHEMA_VERSION,
    objective: s.objective,
    expectedOutcome: s.expectedOutcome,
    scopeNarrative: s.scopeNarrative,
    scopeIn: [...s.scopeIn],
    scopeOut: [...s.scopeOut],
    materiality: s.materiality,
    materialityReasonCodes: [...s.materialityReasonCodes],
    repositoryBindingIdentity: s.repositoryBindingIdentity,
    pathRoot: s.pathRoot,
    requiredCapabilities: [...s.effects.requiredCapabilities],
    expectedOutputs: [...s.effects.expectedOutputs],
    reversibilityExpectation: s.effects.reversibilityExpectation,
    stopConditions: [...s.effects.stopConditions],
    risks: [...s.effects.risks],
    reservations: [...s.effects.reservations],
    intentKind: s.effects.intentKind,
    artifactType: s.effects.artifactType,
    requestedOperation: s.effects.requestedOperation,
    impactSignals: { ...s.impactSignals },
    optionRefs: [...s.optionRefs],
    selectedOptionRef: input.selectedOptionRef,
    ...(input.recommendedOptionRef
      ? { recommendedOptionRef: input.recommendedOptionRef }
      : {}),
    cycleInstanceId: s.cycleInstanceId,
  };
  return {
    sourceType: "generic_mission",
    sourceRef: s.missionSubjectId,
    sourceDigest: s.presentationDigest,
    projectId: s.projectId,
    ...(s.cycleInstanceId ? { cycleInstanceId: s.cycleInstanceId } : {}),
    proposalContext: {
      lpsId: s.lpsId,
      lpsVersion: s.lpsVersion,
      ...(s.doctrineDigest ? { doctrineDigest: s.doctrineDigest } : {}),
      ...(s.cycleInstanceId
        ? { activeCycleInstanceId: s.cycleInstanceId }
        : {}),
    },
    genericMissionContext: ctx,
    executionBasis: {
      objective: s.objective,
      scope: s.scopeNarrative,
      expectedOutcome: s.expectedOutcome,
      scopeIn: [...s.scopeIn],
      scopeOut: [...s.scopeOut],
      outOfScope: [...s.scopeOut],
      requiredCapabilities: [...s.effects.requiredCapabilities],
      expectedOutputs: [...s.effects.expectedOutputs],
      stopConditions: [...s.effects.stopConditions],
      risks: [...s.effects.risks],
      reservations: [...s.effects.reservations],
      ...(s.effects.intentKind
        ? { intentKind: s.effects.intentKind }
        : {}),
      ...(s.effects.artifactType
        ? { artifactType: s.effects.artifactType }
        : {}),
      ...(s.effects.requestedOperation
        ? { requestedOperation: s.effects.requestedOperation }
        : {}),
      ...(s.effects.reversibilityExpectation
        ? { reversibilityExpectation: s.effects.reversibilityExpectation }
        : {}),
    },
  };
}

```

---

## 16. CONTENU COMPLET — recordGenericMissionHumanDecision.ts

```typescript
/**
 * M-HD-01 — present + record Pilote HumanDecision on a sealed Generic Mission.
 *
 * PREPARE / AUTHORIZE / EXECUTE are never performed here.
 * No Attempt. No fabricated decision. Refuse ≠ GO. Amend requires new seal.
 */

import { randomBytes } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type HumanDecision,
} from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabilityEnvelope";
import type { IntentAnalysisDto } from "../f2/types";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
  GENERIC_MISSION_PRESENTED_OPTIONS,
  buildGenericMissionSubject,
  decisionBasisFromGenericMissionSubject,
  type GenericMissionSubject,
} from "./genericMissionSubject";

export type SealGenericMissionForPresentationInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
  /** Reuse existing occurrence id on amend re-presentation only when material unchanged. */
  readonly missionSubjectId?: string;
};

export type SealGenericMissionForPresentationResult =
  | {
      readonly ok: true;
      readonly subject: GenericMissionSubject;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

export async function sealGenericMissionForPresentation(
  input: SealGenericMissionForPresentationInput,
): Promise<SealGenericMissionForPresentationResult> {
  const fail = (
    code: string,
    message: string,
  ): SealGenericMissionForPresentationResult => ({
    ok: false,
    code,
    message,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });

  const projectId = input.projectId.trim();
  if (!projectId) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis.");
  }

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!materialityResolution.liveReadOk) {
    return fail(
      materialityResolution.failureCode ?? "PRODUCT_CONTEXT_UNAVAILABLE",
      "Contexte Product insuffisant pour sceller la mission.",
    );
  }
  const currentness = materialityResolution.facts.productCurrentness;
  if (!currentness) {
    return fail(
      "PRODUCT_CURRENTNESS_UNAVAILABLE",
      "Ancres LPS / doctrine indisponibles pour le sceau.",
    );
  }

  const proposedCapabilities =
    input.analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return fail(
      capabilityResolution.code,
      `Capacités hors enveloppe — sceau refusé : ${capabilityResolution.elevated.join(", ")}.`,
    );
  }

  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  if (!objective || (!expectedOutcome && !scopeNarrative)) {
    return fail(
      "MISSION_INSUFFICIENTLY_QUALIFIED",
      "Objectif / résultat attendu insuffisants pour présentation Pilote.",
    );
  }

  // Nora path/filename candidates stay non-authoritative — never sealed as destinations.
  const ei = input.analysis.executionIntent;
  const authoritativeExpectedOutputs = [expectedOutcome];
  const requestedOperation =
    ei && "requestedOperation" in ei && typeof ei.requestedOperation === "string"
      ? ei.requestedOperation.trim() || null
      : input.analysis.requestedOperation?.trim() || null;

  const signals = input.analysis.signals;
  const revFromEi =
    ei &&
    "reversibilityExpectation" in ei &&
    (ei.reversibilityExpectation === "reversible" ||
      ei.reversibilityExpectation === "irreversible" ||
      ei.reversibilityExpectation === "unknown")
      ? ei.reversibilityExpectation
      : null;
  const subject = buildGenericMissionSubject({
    missionSubjectId: input.missionSubjectId,
    projectId,
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn: ei?.scopeIn ?? [],
    scopeOut: input.analysis.outOfScope ?? [],
    materiality: materialityResolution.assessment.materiality,
    materialityReasonCodes: materialityResolution.assessment.reasonCodes,
    repositoryBindingIdentity: currentness.repositoryIdentity,
    pathRoot: currentness.pathRoot,
    effects: {
      intentKind: ei?.intentKind?.trim() || null,
      artifactType: ei?.artifactType?.trim() || null,
      requestedOperation,
      requiredCapabilities: [...capabilityResolution.contractCapabilities],
      expectedOutputs: authoritativeExpectedOutputs,
      reversibilityExpectation:
        revFromEi ??
        (signals?.irreversible === true
          ? "irreversible"
          : signals?.irreversible === false
            ? "reversible"
            : "unknown"),
      stopConditions: [
        ...(input.analysis.stopConditions ?? []).filter((s) => s.trim()),
        "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
      ],
      risks: [...(input.analysis.risks ?? [])],
      reservations: [...(input.analysis.reservations ?? [])],
    },
    impactSignals: {
      structuralChange: Boolean(signals?.structuralChange),
      securityImpact: Boolean(signals?.securityImpact),
      architectureImpact: Boolean(signals?.architectureImpact),
      dataImpact: Boolean(signals?.dataImpact),
      irreversible: Boolean(signals?.irreversible),
    },
    lpsId: currentness.lpsId,
    lpsVersion: currentness.lpsVersion,
    doctrineDigest: currentness.doctrineDigest,
    presentedAtIso: input.oa.clock.nowIso(),
  });

  return {
    ok: true,
    subject,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  };
}

export type RecordGenericMissionHumanDecisionInput = {
  readonly oa: RuntimeOaStack;
  readonly subject: GenericMissionSubject;
  readonly selectedOptionId: string;
  /**
   * CR-02 — server re-seals from this analysis + Product facts; caller subject
   * digest must match. Client-only subject is not authority.
   */
  readonly analysis: IntentAnalysisDto;
  readonly forceLocalAuthority?: boolean;
  readonly rationale?: string;
  readonly supersedeExistingAccepted?: boolean;
  /** When true (default), link accepted HD into LPS (legitimate version bump). */
  readonly linkToLivingProjectState?: boolean;
};

export type RecordGenericMissionHumanDecisionResult =
  | {
      readonly ok: true;
      readonly decision: HumanDecision;
      readonly humanDecisionCreated: true;
      readonly executionAttemptCreated: false;
      readonly code: "GENERIC_MISSION_HUMAN_DECISION_RECORDED";
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

export async function recordGenericMissionHumanDecision(
  input: RecordGenericMissionHumanDecisionInput,
): Promise<RecordGenericMissionHumanDecisionResult> {
  const fail = (
    code: string,
    message: string,
  ): RecordGenericMissionHumanDecisionResult => ({
    ok: false,
    code,
    message,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });

  const selected = input.selectedOptionId.trim();
  const presentedIds = new Set(
    GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => o.optionId),
  );
  if (!presentedIds.has(selected as (typeof GENERIC_MISSION_PRESENTED_OPTIONS)[number]["optionId"])) {
    return fail(
      "HD_OPTION_NOT_PRESENTED",
      "Option Pilote hors ensemble présenté — décision refusée.",
    );
  }

  // Self-consistency of caller subject (digest over its own fields).
  const selfCheck = buildGenericMissionSubject({
    missionSubjectId: input.subject.missionSubjectId,
    projectId: input.subject.projectId,
    cycleInstanceId: input.subject.cycleInstanceId,
    objective: input.subject.objective,
    expectedOutcome: input.subject.expectedOutcome,
    scopeNarrative: input.subject.scopeNarrative,
    scopeIn: input.subject.scopeIn,
    scopeOut: input.subject.scopeOut,
    materiality: input.subject.materiality,
    materialityReasonCodes: input.subject.materialityReasonCodes,
    repositoryBindingIdentity: input.subject.repositoryBindingIdentity,
    pathRoot: input.subject.pathRoot,
    effects: input.subject.effects,
    impactSignals: input.subject.impactSignals,
    lpsId: input.subject.lpsId,
    lpsVersion: input.subject.lpsVersion,
    doctrineDigest: input.subject.doctrineDigest,
    optionRefs: input.subject.optionRefs,
    presentedAtIso: input.subject.presentedAtIso,
  });
  if (selfCheck.presentationDigest !== input.subject.presentationDigest) {
    return fail(
      "HD_SUBJECT_DIGEST_MISMATCH",
      "Sceau de présentation incohérent — enregistrement refusé.",
    );
  }

  // CR-02 — Product-qualified re-seal; forged subject with recomputed digest fails.
  const projectOk = await input.oa.projectServices.getProject.execute({
    projectId: input.subject.projectId,
  });
  if (!projectOk.ok) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project introuvable pour Record.");
  }
  const fresh = await sealGenericMissionForPresentation({
    oa: input.oa,
    projectId: input.subject.projectId,
    cycleInstanceId: input.subject.cycleInstanceId,
    analysis: input.analysis,
    missionSubjectId: input.subject.missionSubjectId,
  });
  if (!fresh.ok) {
    return fail(fresh.code, fresh.message);
  }
  if (fresh.subject.presentationDigest !== input.subject.presentationDigest) {
    return fail(
      "HD_SUBJECT_STALE",
      "Sujet présenté divergent des faits Product courants — nouvelle présentation requise.",
    );
  }

  const status =
    selected === GENERIC_MISSION_OPTION_ACCEPT_PREPARE
      ? ("accepted" as const)
      : selected === GENERIC_MISSION_OPTION_REFUSE
        ? ("refused" as const)
        : ("amended" as const);

  // request-amend is recorded as amended — never unlocks PREPARE.
  if (selected === GENERIC_MISSION_OPTION_REQUEST_AMEND) {
    // Still record durable refusal-of-accept path as amended for audit.
  }

  const scope = `generic-mission:${input.subject.missionSubjectId}`;
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope,
    issuedAt: input.oa.clock.nowIso(),
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }

  const decisionBasis = decisionBasisFromGenericMissionSubject({
    subject: input.subject,
    selectedOptionRef: selected,
  });

  const decisionId = `dec:gms:${randomBytes(8).toString("hex")}`;
  const linkLps =
    status === "accepted" && input.linkToLivingProjectState !== false;

  const recorded = await input.oa.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.subject.projectId,
    ...(input.subject.cycleInstanceId
      ? { cycleInstanceId: input.subject.cycleInstanceId }
      : {}),
    subject: input.subject.missionSubjectId,
    options: GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => ({
      optionId: o.optionId,
      label: o.label,
    })),
    selectedOptionId: selected,
    actor: LOCAL_PILOTE_ACTOR,
    authority: "pilot",
    status,
    reversible: true,
    scope,
    rationale: input.rationale,
    authorityEvidenceId: authority.evidenceId,
    decisionBasis,
    supersedeExistingAccepted: input.supersedeExistingAccepted !== false,
    linkToLivingProjectState: linkLps,
    ...(linkLps ? { expectedLpsVersion: input.subject.lpsVersion } : {}),
  });

  if (!recorded.ok) {
    return fail(
      recorded.error.detailCode,
      recorded.error.message ?? "RecordHumanDecision refusé.",
    );
  }

  return {
    ok: true,
    decision: recorded.decision,
    humanDecisionCreated: true,
    executionAttemptCreated: false,
    code: "GENERIC_MISSION_HUMAN_DECISION_RECORDED",
  };
}

export {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
};

```

---

## 17. CONTENU COMPLET — verifyGenericMissionHumanDecisionForPrepare.ts

```typescript
/**
 * M-HD-01 — verify durable OA HumanDecision for Generic PREPARE resume
 * and for Confirm/Authorize currentness (CR-03).
 *
 * Never fabricates HD. Never treats Confirmation as HD.
 * Read-only — no Build / PREPARE side effects.
 */

import { validateDecisionBasis } from "@/lib/oa/decision";
import type { HumanDecision } from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "../f2/types";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabilityEnvelope";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  evaluateLpsTransitionAfterHumanDecision,
  materialCurrentnessMatch,
  verifyGenericMissionSnapshotIntegrity,
  type GenericMissionCurrentMaterial,
  type LpsMaterialSnapshot,
} from "./genericMissionSubject";

export type VerifiedGenericMissionHumanDecision = {
  readonly decisionId: string;
  readonly decision: HumanDecision;
  readonly missionSubjectId: string;
  readonly presentationDigest: string;
};

export type VerifyGenericMissionHumanDecisionResult =
  | { readonly ok: true; readonly verified: VerifiedGenericMissionHumanDecision }
  | { readonly ok: false; readonly code: string; readonly message: string };

type LpsDoctrineRefLike = {
  readonly digest?: string;
  readonly contentDigest?: string;
  readonly packageDigest?: string;
};

function doctrineDigestFromLps(lps: {
  readonly doctrinePackageRef?: LpsDoctrineRefLike | null;
}): string {
  const ref = lps.doctrinePackageRef ?? undefined;
  return (
    (typeof ref?.digest === "string" ? ref.digest.trim() : "") ||
    (typeof ref?.contentDigest === "string" ? ref.contentDigest.trim() : "") ||
    (typeof ref?.packageDigest === "string" ? ref.packageDigest.trim() : "") ||
    ""
  );
}

function lpsSnapshotFromState(lps: {
  readonly version: number;
  readonly objective: string;
  readonly context?: string;
  readonly scope?: string;
  readonly constraints?: readonly string[];
  readonly doctrinePackageRef?: LpsDoctrineRefLike | null;
  readonly activeCycleInstanceId?: string | null;
  readonly trajectoryId?: string | null;
  readonly trajectoryVersion?: number | null;
  readonly decisionIds?: readonly string[];
}): LpsMaterialSnapshot {
  return {
    version: lps.version,
    objective: lps.objective,
    context: lps.context,
    scope: lps.scope,
    constraints: lps.constraints ? [...lps.constraints] : undefined,
    doctrineDigest: doctrineDigestFromLps(lps),
    activeCycleInstanceId: lps.activeCycleInstanceId ?? null,
    trajectoryId: lps.trajectoryId ?? null,
    trajectoryVersion: lps.trajectoryVersion ?? null,
    decisionIds: lps.decisionIds ? [...lps.decisionIds] : undefined,
  };
}

export function buildCurrentMaterialFromAnalysis(input: {
  readonly analysis: IntentAnalysisDto;
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly requiredCapabilities: readonly string[];
  readonly cycleInstanceId: string | null;
}): GenericMissionCurrentMaterial {
  const analysis = input.analysis;
  const objective = (
    analysis.objective ??
    analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (analysis.scope ?? expectedOutcome).trim();
  const ei = analysis.executionIntent;
  const signals = analysis.signals;
  const requestedOperation =
    ei && "requestedOperation" in ei && typeof ei.requestedOperation === "string"
      ? ei.requestedOperation.trim() || null
      : analysis.requestedOperation?.trim() || null;
  const revFromEi =
    ei &&
    "reversibilityExpectation" in ei &&
    (ei.reversibilityExpectation === "reversible" ||
      ei.reversibilityExpectation === "irreversible" ||
      ei.reversibilityExpectation === "unknown")
      ? ei.reversibilityExpectation
      : null;
  return {
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn: ei?.scopeIn ?? [],
    scopeOut: analysis.outOfScope ?? [],
    materiality: input.materiality,
    repositoryBindingIdentity: input.repositoryBindingIdentity,
    pathRoot: input.pathRoot,
    requiredCapabilities: [...input.requiredCapabilities],
    expectedOutputs: [expectedOutcome],
    intentKind: ei?.intentKind?.trim() || null,
    artifactType: ei?.artifactType?.trim() || null,
    requestedOperation,
    reversibilityExpectation:
      revFromEi ??
      (signals?.irreversible === true
        ? "irreversible"
        : signals?.irreversible === false
          ? "reversible"
          : "unknown"),
    stopConditions: [
      ...(analysis.stopConditions ?? []).filter((s) => s.trim()),
      "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
    ],
    risks: [...(analysis.risks ?? [])],
    reservations: [...(analysis.reservations ?? [])],
    impactSignals: {
      structuralChange: Boolean(signals?.structuralChange),
      securityImpact: Boolean(signals?.securityImpact),
      architectureImpact: Boolean(signals?.architectureImpact),
      dataImpact: Boolean(signals?.dataImpact),
      irreversible: Boolean(signals?.irreversible),
    },
    cycleInstanceId: input.cycleInstanceId,
  };
}

async function loadAndValidateAcceptedGenericMissionHd(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
}): Promise<VerifyGenericMissionHumanDecisionResult> {
  const decisionId = input.decisionId.trim();
  if (!decisionId.startsWith("dec:")) {
    return {
      ok: false,
      code: "HD_ABSENT",
      message: "decisionId invalide — HumanDecision absente.",
    };
  }

  const loaded = await input.oa.decisionServices.getHumanDecision.execute({
    decisionId,
  });
  if (!loaded.ok) {
    return {
      ok: false,
      code: "HD_ABSENT",
      message: "HumanDecision introuvable via OA.",
    };
  }
  const decision = loaded.decision;

  if (decision.status === "superseded") {
    return {
      ok: false,
      code: "HD_SUPERSEDED",
      message: "HumanDecision superseded — reprise refusée.",
    };
  }
  if (decision.status === "revoked") {
    return {
      ok: false,
      code: "HD_REVOKED",
      message: "HumanDecision revoked — reprise refusée.",
    };
  }
  if (decision.status === "refused") {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: "HumanDecision refusée — PREPARE non autorisé.",
    };
  }
  if (decision.status === "amended") {
    return {
      ok: false,
      code: "HD_AMEND_REQUIRES_NEW_PRESENTATION",
      message:
        "Option request-amend — nouvelle présentation requise avant acceptation.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: `Statut HumanDecision ${decision.status} — reprise refusée.`,
    };
  }

  if (decision.projectId !== input.projectId.trim()) {
    return {
      ok: false,
      code: "HD_PROJECT_MISMATCH",
      message: "HumanDecision d'un autre Project.",
    };
  }

  if (decision.authority !== "pilot") {
    return {
      ok: false,
      code: "HD_AUTHORITY_INVALID",
      message: "Autorité Pilote requise pour mission générique structurante.",
    };
  }

  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "generic_mission") {
    return {
      ok: false,
      code: "HD_SOURCE_TYPE_INVALID",
      message: "DecisionBasis.sourceType generic_mission requis.",
    };
  }

  const basisViolation = validateDecisionBasis(basis);
  if (basisViolation) {
    return {
      ok: false,
      code: "HD_BASIS_INVALID",
      message: `DecisionBasis invalide: ${basisViolation.reason}`,
    };
  }

  const ctx = basis.genericMissionContext!;
  if (decision.subject.trim() !== ctx.missionSubjectId) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "Sujet HumanDecision ≠ missionSubjectId scellé.",
    };
  }
  if (
    decision.selectedOptionId !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE ||
    ctx.selectedOptionRef !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE
  ) {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: "Option accept-prepare absente — PREPARE non débloqué.",
    };
  }

  const integrity = verifyGenericMissionSnapshotIntegrity({ basis });
  if (!integrity.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: `Intégrité du sceau durable échouée (${integrity.reason}).`,
    };
  }

  return {
    ok: true,
    verified: {
      decisionId: decision.decisionId,
      decision,
      missionSubjectId: ctx.missionSubjectId,
      presentationDigest: ctx.presentationDigest,
    },
  };
}

async function evaluateLpsCurrentness(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly sealedLpsVersion: number;
  readonly sealedDoctrineDigest?: string;
  readonly decisionId: string;
}): Promise<VerifyGenericMissionHumanDecisionResult | { readonly ok: true }> {
  const currentLps =
    await input.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  if (!currentLps.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "LPS courant indisponible pour currentness.",
    };
  }

  const sealedLps =
    await input.oa.projectServices.getLivingProjectStateVersion.execute({
      projectId: input.projectId,
      version: input.sealedLpsVersion,
    });
  if (!sealedLps.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "LPS scellé indisponible — transition non qualifiable.",
    };
  }

  const sealedSnap = lpsSnapshotFromState(sealedLps.livingProjectState);
  // Prefer sealed proposalContext doctrineDigest when LPS payload lacks it.
  const sealedWithDoctrine: LpsMaterialSnapshot = {
    ...sealedSnap,
    doctrineDigest:
      sealedSnap.doctrineDigest ||
      input.sealedDoctrineDigest?.trim() ||
      "",
  };
  const currentSnap = lpsSnapshotFromState(currentLps.livingProjectState);
  const currentWithDoctrine: LpsMaterialSnapshot = {
    ...currentSnap,
    doctrineDigest:
      currentSnap.doctrineDigest ||
      input.sealedDoctrineDigest?.trim() ||
      "",
  };

  const lpsEval = evaluateLpsTransitionAfterHumanDecision({
    sealed: sealedWithDoctrine,
    current: currentWithDoctrine,
    decisionId: input.decisionId,
  });
  if (!lpsEval.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: `Transition LPS non légitime (${lpsEval.reason}).`,
    };
  }
  return { ok: true };
}

function effectsMismatchCode(reason: string): string {
  if (
    reason === "scope_arrays_drift" ||
    reason === "scope_narrative_drift"
  ) {
    return "HD_SCOPE_MISMATCH";
  }
  if (
    reason === "capabilities_drift" ||
    reason === "impact_signals_drift" ||
    reason === "intent_kind_drift" ||
    reason === "artifact_type_drift" ||
    reason === "requested_operation_drift" ||
    reason === "expected_outputs_drift" ||
    reason === "reversibility_drift" ||
    reason === "stop_conditions_drift" ||
    reason === "risks_drift" ||
    reason === "reservations_drift"
  ) {
    return "HD_EFFECTS_MISMATCH";
  }
  if (reason === "objective_drift" || reason === "expected_outcome_drift") {
    return "HD_MISSION_MISMATCH";
  }
  if (
    reason === "repository_binding_drift" ||
    reason === "path_root_drift"
  ) {
    return "HD_SUBJECT_STALE";
  }
  return "HD_SUBJECT_STALE";
}

export async function verifyGenericMissionHumanDecisionForPrepare(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly decisionId: string;
  readonly analysis: IntentAnalysisDto;
}): Promise<VerifyGenericMissionHumanDecisionResult> {
  const base = await loadAndValidateAcceptedGenericMissionHd({
    oa: input.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
  if (!base.ok) return base;

  const decision = base.verified.decision;
  const basis = decision.decisionBasis!;
  const ctx = basis.genericMissionContext!;

  const expectedCycle = input.cycleInstanceId?.trim() || null;
  const sealedCycle = ctx.cycleInstanceId ?? null;
  if (expectedCycle !== sealedCycle) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "cycleInstanceId incompatible avec la mission scellée.",
    };
  }

  const lpsOk = await evaluateLpsCurrentness({
    oa: input.oa,
    projectId: input.projectId,
    sealedLpsVersion: basis.proposalContext.lpsVersion,
    sealedDoctrineDigest: basis.proposalContext.doctrineDigest,
    decisionId: decision.decisionId,
  });
  if (!lpsOk.ok) return lpsOk;

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!materialityResolution.liveReadOk) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Requalification Product impossible — reprise refusée.",
    };
  }
  const currentness = materialityResolution.facts.productCurrentness;
  if (!currentness) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Currentness Product absente — reprise refusée.",
    };
  }

  const proposedCapabilities =
    input.analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return {
      ok: false,
      code: "HD_EFFECTS_MISMATCH",
      message: "Capacités courantes hors enveloppe — reprise refusée.",
    };
  }

  const current = buildCurrentMaterialFromAnalysis({
    analysis: input.analysis,
    materiality: materialityResolution.assessment.materiality,
    repositoryBindingIdentity: currentness.repositoryIdentity,
    pathRoot: currentness.pathRoot,
    requiredCapabilities: capabilityResolution.contractCapabilities,
    cycleInstanceId: expectedCycle,
  });

  const material = materialCurrentnessMatch({ sealed: ctx, current });
  if (!material.ok) {
    return {
      ok: false,
      code: effectsMismatchCode(material.reason),
      message: `Faits Product courants incompatibles avec la mission scellée (${material.reason}).`,
    };
  }

  return base;
}

/**
 * CR-03 — read-only currentness of a generic_mission HD against an EC.
 * Used at Confirm/Authorize. Never builds contracts. Never skips via refs length.
 */
export async function verifyGenericMissionHumanDecisionForContract(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly contract: ExecutionContract;
}): Promise<VerifyGenericMissionHumanDecisionResult> {
  const base = await loadAndValidateAcceptedGenericMissionHd({
    oa: input.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
  if (!base.ok) return base;

  const decision = base.verified.decision;
  const basis = decision.decisionBasis!;
  const ctx = basis.genericMissionContext!;
  const contract = input.contract;

  if (contract.projectId !== input.projectId.trim()) {
    return {
      ok: false,
      code: "HD_PROJECT_MISMATCH",
      message: "EC Project mismatch.",
    };
  }

  const refs = contract.decisionRefs ?? [];
  if (!refs.includes(decision.decisionId)) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "decisionId absent des decisionRefs du contrat.",
    };
  }

  const contractCycle = contract.cycleInstanceId?.trim() || null;
  const sealedCycle = ctx.cycleInstanceId ?? null;
  if (contractCycle !== sealedCycle) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "cycleInstanceId EC incompatible avec la mission scellée.",
    };
  }

  // Closed cycle bound to EC → refuse.
  if (contractCycle) {
    const cycleServices = input.oa.cycleServices;
    if (!cycleServices?.getCycle) {
      return {
        ok: false,
        code: "HD_SUBJECT_STALE",
        message: "Services cycle indisponibles pour valider le cycle lié.",
      };
    }
    const cycle = await cycleServices.getCycle.execute({
      cycleInstanceId: contractCycle,
    });
    if (!cycle.ok) {
      return {
        ok: false,
        code: "CYCLE_NOT_ACTIVE",
        message: "Cycle lié introuvable — Confirm/Authorize refusé.",
      };
    }
    const status = cycle.cycle.status;
    if (
      status === "completed" ||
      status === "cancelled" ||
      status === "superseded"
    ) {
      return {
        ok: false,
        code: "CYCLE_NOT_ACTIVE",
        message: `Cycle lié ${status} — Confirm/Authorize refusé.`,
      };
    }
    if (cycle.cycle.projectId !== input.projectId.trim()) {
      return {
        ok: false,
        code: "HD_PROJECT_MISMATCH",
        message: "Cycle lié à un autre Project.",
      };
    }
  }

  const lpsOk = await evaluateLpsCurrentness({
    oa: input.oa,
    projectId: input.projectId,
    sealedLpsVersion: basis.proposalContext.lpsVersion,
    sealedDoctrineDigest: basis.proposalContext.doctrineDigest,
    decisionId: decision.decisionId,
  });
  if (!lpsOk.ok) return lpsOk;

  const inputs = (contract.inputs ?? {}) as Record<string, unknown>;
  const objective = String(inputs.objective ?? "").trim();
  const expectedOutcome = String(inputs.expectedOutcome ?? objective).trim();
  const scopeNarrative = String(
    inputs.missionScopeNarrative ?? inputs.scope ?? expectedOutcome,
  ).trim();
  const scopeIn = Array.isArray(inputs.scopeIn)
    ? (inputs.scopeIn as string[])
    : [];
  const scopeOut = Array.isArray(inputs.scopeOut)
    ? (inputs.scopeOut as string[])
    : [];

  // Live Product binding vs sealed.
  const live = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: {
      parseOk: true,
      intentClass: "execution_request",
      candidateCycleTypeId: null,
      signals: ctx.impactSignals
        ? {
            structuralChange: ctx.impactSignals.structuralChange,
            securityImpact: ctx.impactSignals.securityImpact,
            architectureImpact: ctx.impactSignals.architectureImpact,
            dataImpact: ctx.impactSignals.dataImpact,
            irreversible: ctx.impactSignals.irreversible,
            lowRiskBounded: false,
          }
        : null,
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: "sufficient",
      objective: ctx.objective,
      scope: ctx.scopeNarrative,
      rephrasedRequest: ctx.objective,
      outOfScope: [...ctx.scopeOut],
      risks: [...ctx.risks],
      reservations: [...ctx.reservations],
      stopConditions: [...ctx.stopConditions],
      activatedBlocks: [],
      expectedOutcome: ctx.expectedOutcome,
      criticalJustification: null,
      requestedOperation: ctx.requestedOperation,
      executionIntent: {
        intentKind: ctx.intentKind,
        artifactType: ctx.artifactType,
        scopeIn: [...ctx.scopeIn],
        requiredCapabilities: [...ctx.requiredCapabilities],
        requestedOperation: ctx.requestedOperation,
        reversibilityExpectation: ctx.reversibilityExpectation,
      },
    } as IntentAnalysisDto,
    cycleInstanceId: sealedCycle,
  });
  if (!live.liveReadOk || !live.facts.productCurrentness) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Currentness Product indisponible à Confirm/Authorize.",
    };
  }
  const binding = live.facts.productCurrentness;
  if (binding.repositoryIdentity !== ctx.repositoryBindingIdentity) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Repository binding courant incompatible avec la HD scellée.",
    };
  }
  if (binding.pathRoot !== ctx.pathRoot) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "pathRoot courant incompatible avec la HD scellée.",
    };
  }

  // EC must still carry the sealed mission material.
  if (objective !== ctx.objective.trim()) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "EC objective divergent du sceau HD.",
    };
  }
  if (expectedOutcome !== ctx.expectedOutcome.trim()) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "EC expectedOutcome divergent du sceau HD.",
    };
  }
  if (scopeNarrative !== ctx.scopeNarrative.trim()) {
    return {
      ok: false,
      code: "HD_SCOPE_MISMATCH",
      message: "EC scope divergent du sceau HD.",
    };
  }
  if (
    JSON.stringify(scopeIn) !== JSON.stringify(ctx.scopeIn) ||
    JSON.stringify(scopeOut) !== JSON.stringify(ctx.scopeOut)
  ) {
    return {
      ok: false,
      code: "HD_SCOPE_MISMATCH",
      message: "EC scopeIn/scopeOut divergents du sceau HD.",
    };
  }
  if (
    JSON.stringify([...(contract.requiredCapabilities ?? [])]) !==
    JSON.stringify([...ctx.requiredCapabilities])
  ) {
    return {
      ok: false,
      code: "HD_EFFECTS_MISMATCH",
      message: "EC requiredCapabilities divergentes du sceau HD.",
    };
  }
  const ecIntent = normStr(inputs.intentKind);
  const ecArtifact = normStr(inputs.artifactType);
  if (ecIntent !== normStr(ctx.intentKind)) {
    return {
      ok: false,
      code: "HD_EFFECTS_MISMATCH",
      message: "EC intentKind divergent du sceau HD.",
    };
  }
  if (ecArtifact !== normStr(ctx.artifactType)) {
    return {
      ok: false,
      code: "HD_EFFECTS_MISMATCH",
      message: "EC artifactType divergent du sceau HD.",
    };
  }

  // presentationDigest continuity when stamped on EC inputs.
  const stampedDigest = normStr(inputs.presentationDigest);
  if (stampedDigest && stampedDigest !== ctx.presentationDigest) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "presentationDigest EC incompatible avec la HD.",
    };
  }

  return base;
}

function normStr(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length > 0 ? t : null;
}

```

---

## 18. CONTENU COMPLET — p6.mHd01.authorityContinuityCorrection.d0.test.ts

```typescript
/**
 * P6 — M-HD-01 Authority Continuity Correction Pass (CR-01…CR-04).
 *
 * Fake Cursor boundary only — ZERO Cursor REAL / OpenAI LIVE.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  buildIntentAnalysisFromSolicitedMission,
  prepareGenericExecutionContractDraft,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
  buildGenericMissionSubject,
  evaluateLpsTransitionAfterHumanDecision,
  materialCurrentnessMatch,
} from "@/features/project-assistant/w2/genericMissionSubject";
import { verifyGenericMissionHumanDecisionForContract } from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
import { inspectExecutionContract } from "@/features/project-assistant/w2/inspectExecutionContract";
import { authorizeGenericPreparedContract } from "@/features/project-assistant/w2/authorizeGenericPreparedContract";
import { confirmExecutionContractForAuthorization } from "@/features/project-assistant/w2/confirmForAuthorization";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { DecisionBasisGenericMissionContext } from "@/lib/oa/decision";

function structuralAnalysis(overrides?: {
  objective?: string;
  expectedOutcome?: string;
  scope?: string;
  intentKind?: string;
  artifactType?: string;
  requestedOperation?: string | null;
  requiredCapabilities?: string[];
  stopConditions?: string[];
  reversibility?: "reversible" | "irreversible" | "unknown";
}): IntentAnalysisDto {
  const scope = overrides?.scope ?? "projects/demo/src/authority";
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: overrides?.objective ?? "Mission structurante correction",
    expectedOutcome: overrides?.expectedOutcome ?? "Effets scellés stables",
    scope,
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    stopConditions: overrides?.stopConditions ?? ["STOP_MATERIAL_A"],
    executionIntent: {
      intentKind: overrides?.intentKind ?? "code_change",
      artifactType: overrides?.artifactType ?? "module",
      scopeIn: [scope],
      requiredCapabilities: overrides?.requiredCapabilities ?? [],
      requestedOperation: overrides?.requestedOperation ?? "refactor-binding",
      reversibilityExpectation: overrides?.reversibility ?? "reversible",
    },
  };
}

describe("P6 M-HD-01 Authority Continuity Correction", () => {
  let runtime: RuntimeApplicationService;
  let sessionDbPath: string;
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    sessionDbPath = tempProductDbPath("p6-mhd01-cr.sqlite");
    runtime = bootW2Runtime({
      productDbPath: sessionDbPath,
      idPrefix: "mhdcr",
    });
  });

  afterEach(() => {
    cleanupW2TempDirs();
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
    if (previousDetPin === undefined) {
      delete process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    } else {
      process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = previousDetPin;
    }
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `MHDCR ${suffix}`,
      objective: "M-HD-01 authority continuity",
      context: "det mhdcr",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `MC${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhdcr-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const lps0 = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    if (!lps0.ok) throw new Error("lps0");
    await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:${projectId}`,
      projectId,
      steps: [{ stepId: "stp:a", order: 1, label: "A", state: "done" }],
      status: "active",
      expectedLpsVersion: lps0.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "project_owner",
        displayName: "Morris",
        authorityLevel: "N3",
      },
    });
    const identity = `acme/mhdcr-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  async function sealAccept(projectId: string, analysis: IntentAnalysisDto) {
    const sealed = await sealGenericMissionForPresentation({
      oa: runtime.oa!,
      projectId,
      cycleInstanceId: null,
      analysis,
    });
    if (!sealed.ok) throw new Error(`seal ${sealed.code}`);
    const recorded = await recordGenericMissionHumanDecision({
      oa: runtime.oa!,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      forceLocalAuthority: true,
    });
    if (!recorded.ok) throw new Error(`record ${recorded.code}`);
    return { subject: sealed.subject, decision: recorded.decision };
  }

  // ---------- CR-01 FX ----------
  describe("CR-01 effects revalidation (FX)", () => {
    it("FX01 — requestedOperation change → REFUS", async () => {
      const { projectId, oa } = await seedProject("fx01");
      const analysis = structuralAnalysis({ requestedOperation: "op-a" });
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis({ requestedOperation: "op-b" }),
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) throw new Error("expected refuse");
      expect(prep.code).toBe("HD_EFFECTS_MISMATCH");
    });

    it("FX02 — intentKind change → REFUS", async () => {
      const { projectId, oa } = await seedProject("fx02");
      const analysis = structuralAnalysis({ intentKind: "code_change" });
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis({ intentKind: "docs_write" }),
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) throw new Error("expected refuse");
      expect(prep.code).toBe("HD_EFFECTS_MISMATCH");
    });

    it("FX03 — artifactType change → REFUS", async () => {
      const { projectId, oa } = await seedProject("fx03");
      const analysis = structuralAnalysis({ artifactType: "module" });
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis({ artifactType: "service" }),
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) throw new Error("expected refuse");
      expect(prep.code).toBe("HD_EFFECTS_MISMATCH");
    });

    it("FX05/FX06/FX07 — outputs / reversibility / stopConditions → REFUS", async () => {
      const sealedCtx = {
        objective: "o",
        expectedOutcome: "e",
        scopeNarrative: "s",
        scopeIn: ["a"],
        scopeOut: [],
        materiality: "structural" as const,
        materialityReasonCodes: [],
        repositoryBindingIdentity: "acme/x",
        pathRoot: "projects/demo",
        requiredCapabilities: ["cap:x"],
        expectedOutputs: ["e"],
        intentKind: "code_change",
        artifactType: "module",
        requestedOperation: "op",
        reversibilityExpectation: "reversible" as const,
        stopConditions: ["STOP_A", "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE"],
        risks: [],
        reservations: [],
        impactSignals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
        },
        cycleInstanceId: null,
        missionSubjectId: "gms:x",
        presentationDigest: "a".repeat(64),
        subjectSchemaVersion: "0.1.0-gms" as const,
        optionRefs: [GENERIC_MISSION_OPTION_ACCEPT_PREPARE],
        selectedOptionRef: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      } satisfies DecisionBasisGenericMissionContext;

      expect(
        materialCurrentnessMatch({
          sealed: sealedCtx,
          current: {
            ...sealedCtx,
            expectedOutputs: ["OTHER"],
            requiredCapabilities: sealedCtx.requiredCapabilities,
          },
        }).ok,
      ).toBe(false);

      expect(
        materialCurrentnessMatch({
          sealed: sealedCtx,
          current: {
            ...sealedCtx,
            reversibilityExpectation: "irreversible",
            requiredCapabilities: sealedCtx.requiredCapabilities,
          },
        }).ok,
      ).toBe(false);

      expect(
        materialCurrentnessMatch({
          sealed: sealedCtx,
          current: {
            ...sealedCtx,
            stopConditions: ["NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE"],
            requiredCapabilities: sealedCtx.requiredCapabilities,
          },
        }).ok,
      ).toBe(false);
    });

    it("FX08/FX09 — scope / repository → REFUS", async () => {
      const { projectId, oa } = await seedProject("fx08");
      const analysis = structuralAnalysis({
        scope: "projects/demo/src/authority",
      });
      const { decision } = await sealAccept(projectId, analysis);
      const scopeDrift = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis({ scope: "projects/demo/src/other" }),
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(scopeDrift.ok).toBe(false);

      await oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/mhdcr-mutated",
          remoteUrl: "https://github.com/acme/mhdcr-mutated.git",
          defaultBranch: "main",
          pathRoot: "projects/other",
        },
      });
      const repoDrift = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(repoDrift.ok).toBe(false);
    });

    it("FX10 — identical mission → PREPARE OK", async () => {
      const { projectId, oa } = await seedProject("fx10");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);
      expect(prep.contract.decisionRefs).toEqual([decision.decisionId]);
    });
  });

  // ---------- CR-02 PR ----------
  describe("CR-02 presentation / Record authenticity (PR)", () => {
    it("PR01 — Product-qualified subject + explicit Pilote option → Record OK", async () => {
      const { projectId } = await seedProject("pr01");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      expect(decision.authority).toBe("pilot");
      expect(decision.actor.actorId).toBe(LOCAL_PILOTE_ACTOR.actorId);
      expect(decision.decisionBasis?.sourceType).toBe("generic_mission");
    });

    it("PR02 — forged subject with recomputed digest → Record REFUS", async () => {
      const { projectId, oa } = await seedProject("pr02");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed.ok) throw new Error(sealed.message);
      const forged = buildGenericMissionSubject({
        ...sealed.subject,
        objective: "OBJECTIF FORGE",
      });
      expect(forged.presentationDigest).not.toBe(sealed.subject.presentationDigest);
      const recorded = await recordGenericMissionHumanDecision({
        oa,
        subject: forged,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis,
        forceLocalAuthority: true,
      });
      expect(recorded.ok).toBe(false);
      if (recorded.ok) throw new Error("expected refuse");
      expect(recorded.code).toBe("HD_SUBJECT_STALE");
    });

    it("PR03 — Pilote authority absent → Record REFUS", async () => {
      const { projectId, oa } = await seedProject("pr03");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed.ok) throw new Error(sealed.message);
      const prev = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
      const prevLegacy = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
      const recorded = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis,
        forceLocalAuthority: false,
      });
      if (prev === undefined) delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
      else process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = prev;
      if (prevLegacy === undefined) {
        delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
      } else {
        process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = prevLegacy;
      }
      expect(recorded.ok).toBe(false);
      if (recorded.ok) throw new Error("expected refuse");
      expect(recorded.code).toBe("AUTHORITY_NOT_CONFIGURED");
    });

    it("PR04 — Confirmation alone is not HumanDecision", async () => {
      const { projectId, oa } = await seedProject("pr04");
      const prep = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: buildIntentAnalysisFromSolicitedMission({
          objective: "Non structural note",
          expectedOutcome: "note",
          scope: "projects/demo/src/notes.md",
        }),
        sessionDbPath,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      if (!prep.ok) throw new Error(prep.message);
      const live = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prep.executionContractId,
      });
      if (!live.ok) throw new Error("get");
      if (live.contract.status === "confirmation_required") {
        await inspectExecutionContract({
          oa,
          projectId,
          executionContractId: prep.executionContractId,
        });
        await confirmExecutionContractForAuthorization({
          oa,
          projectId,
          executionContractId: prep.executionContractId,
          forceLocalAuthority: true,
        });
      }
      const structural = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis(),
        sessionDbPath,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(structural.ok).toBe(false);
      if (structural.ok) throw new Error("expected refuse");
      expect(structural.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
    });

    it("PR05/PR06/PR07 — refuse/amend/no Attempt", async () => {
      const { projectId, oa } = await seedProject("pr05");
      const analysis = structuralAnalysis();
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed.ok) throw new Error(sealed.message);
      const refused = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
        analysis,
        forceLocalAuthority: true,
      });
      expect(refused.ok).toBe(true);
      if (!refused.ok) throw new Error(refused.message);
      expect(refused.executionAttemptCreated).toBe(false);
      const prepRefuse = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: refused.decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prepRefuse.ok).toBe(false);

      const sealed2 = await sealGenericMissionForPresentation({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
      });
      if (!sealed2.ok) throw new Error(sealed2.message);
      const amended = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed2.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_REQUEST_AMEND,
        analysis,
        forceLocalAuthority: true,
      });
      expect(amended.ok).toBe(true);
      if (!amended.ok) throw new Error(amended.message);
      const prepAmend = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: amended.decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prepAmend.ok).toBe(false);
      if (prepAmend.ok) throw new Error("expected refuse");
      expect(prepAmend.code).toBe("HD_AMEND_REQUIRES_NEW_PRESENTATION");
    });
  });

  // ---------- CR-03 AU ----------
  describe("CR-03 Confirm/Authorize currentness (AU)", () => {
    async function prepareStructuralWithHd(suffix: string) {
      const { projectId, oa } = await seedProject(suffix);
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      if (!prep.ok) throw new Error(prep.message);
      const inspected = await inspectExecutionContract({
        oa,
        projectId,
        executionContractId: prep.contract.executionContractId,
      });
      if (!inspected.ok) throw new Error(inspected.message);
      return { projectId, oa, analysis, decision, prep, inspected };
    }

    it("AU01 — HD valid → Confirm/Authorize possible", async () => {
      const ctx = await prepareStructuralWithHd("au01");
      const live = await ctx.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: ctx.prep.contract.executionContractId,
      });
      if (!live.ok) throw new Error("get");
      if (live.contract.status === "confirmation_required") {
        const confirmed = await confirmExecutionContractForAuthorization({
          oa: ctx.oa,
          projectId: ctx.projectId,
          executionContractId: ctx.prep.contract.executionContractId,
          forceLocalAuthority: true,
        });
        expect(confirmed.ok).toBe(true);
      }
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.prep.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(true);
    });

    it("AU03 — HD superseded after PREPARE → Authorize REFUS", async () => {
      const ctx = await prepareStructuralWithHd("au03");
      const resealed = await sealGenericMissionForPresentation({
        oa: ctx.oa,
        projectId: ctx.projectId,
        cycleInstanceId: null,
        analysis: ctx.analysis,
        missionSubjectId: ctx.decision.subject,
      });
      if (!resealed.ok) throw new Error(resealed.message);
      const second = await recordGenericMissionHumanDecision({
        oa: ctx.oa,
        subject: resealed.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis: ctx.analysis,
        forceLocalAuthority: true,
        supersedeExistingAccepted: true,
      });
      if (!second.ok) throw new Error(second.message);
      const authorized = await authorizeGenericPreparedContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        executionContractId: ctx.prep.contract.executionContractId,
        expectedVersion: ctx.inspected.contractVersion,
        expectedSemanticFingerprint: ctx.inspected.semanticFingerprint,
        forceLocalAuthority: true,
      });
      expect(authorized.ok).toBe(false);
      if (authorized.ok) throw new Error("expected refuse");
      expect(authorized.code).toBe("HD_SUPERSEDED");
    });

    it("AU05 — repository divergent → contract verify REFUS", async () => {
      const ctx = await prepareStructuralWithHd("au05");
      await ctx.oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId: ctx.projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/mhdcr-au05",
          remoteUrl: "https://github.com/acme/mhdcr-au05.git",
          defaultBranch: "main",
          pathRoot: "projects/other",
        },
      });
      const live = await ctx.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: ctx.prep.contract.executionContractId,
      });
      if (!live.ok) throw new Error("get");
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: ctx.decision.decisionId,
        contract: live.contract,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.code).toBe("HD_SUBJECT_STALE");
    });

    it("AU06 — forged decisionRef → verify REFUS", async () => {
      const ctx = await prepareStructuralWithHd("au06");
      const live = await ctx.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: ctx.prep.contract.executionContractId,
      });
      if (!live.ok) throw new Error("get");
      const forged = {
        ...live.contract,
        decisionRefs: ["dec:forged:not-real"],
      };
      const v = await verifyGenericMissionHumanDecisionForContract({
        oa: ctx.oa,
        projectId: ctx.projectId,
        decisionId: "dec:forged:not-real",
        contract: forged,
      });
      expect(v.ok).toBe(false);
      if (v.ok) throw new Error("expected refuse");
      expect(v.code).toBe("HD_ABSENT");
    });

    it("AU08 — NON_STRUCTURAL without HD non-regression", async () => {
      const { projectId, oa } = await seedProject("au08");
      const prep = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: buildIntentAnalysisFromSolicitedMission({
          objective: "Note locale",
          expectedOutcome: "note",
          scope: "projects/demo/src/notes.md",
        }),
        sessionDbPath,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
      if (!prep.ok) throw new Error(prep.message);
      const live = await oa.executionContractServices.getExecutionContract.execute({
        executionContractId: prep.executionContractId,
      });
      expect(live.ok).toBe(true);
      if (!live.ok) throw new Error("get");
      expect(live.contract.decisionRefs ?? []).toEqual([]);
    });

    it("AU10 — structural without HD fail-closed", async () => {
      const { projectId, oa } = await seedProject("au10");
      const prep = await solicitGenericExecutionPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis(),
        sessionDbPath,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(false);
      if (prep.ok) throw new Error("expected refuse");
      expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
    });
  });

  // ---------- CR-04 LP ----------
  describe("CR-04 LPS currentness (LP)", () => {
    it("LP01 — transition due to Record HD alone → OK", async () => {
      const { projectId, oa } = await seedProject("lp01");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
    });

    it("LP02/LP03 — material LPS drift after HD → REFUS", async () => {
      const sealed = {
        version: 1,
        objective: "obj",
        context: "ctx",
        scope: "scp",
        constraints: ["C1"],
        doctrineDigest: "d1",
        activeCycleInstanceId: null,
        trajectoryId: "trj:1",
        trajectoryVersion: 1,
        decisionIds: [] as string[],
      };
      const drifted = {
        ...sealed,
        version: 3,
        objective: "MUTATED",
        decisionIds: ["dec:x"],
      };
      const evalDrift = evaluateLpsTransitionAfterHumanDecision({
        sealed,
        current: drifted,
        decisionId: "dec:x",
      });
      expect(evalDrift.ok).toBe(false);
      if (evalDrift.ok) throw new Error("expected refuse");
      expect(evalDrift.reason).toBe("lps_objective_drift");
    });

    it("LP04 — repository muté → REFUS", async () => {
      const { projectId, oa } = await seedProject("lp04");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      await oa.projectServices.setProjectRepositoryBinding!.execute({
        projectId,
        actor: LOCAL_PILOTE_ACTOR,
        binding: {
          provider: "github",
          identity: "acme/lp04-mut",
          remoteUrl: "https://github.com/acme/lp04-mut.git",
          defaultBranch: "main",
          pathRoot: "projects/other",
        },
      });
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(false);
    });

    it("LP06 — restart on legitimate state → resume OK", async () => {
      const { projectId } = await seedProject("lp06");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      const runtime2 = bootW2Runtime({
        productDbPath: sessionDbPath,
        idPrefix: "mhdcr2",
      });
      const prep = await prepareGenericExecutionContractDraft({
        oa: runtime2.oa!,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
    });
  });

  // ---------- CY / ID ----------
  describe("Cycle + idempotence (CY/ID)", () => {
    it("CY02 — sans cycle → parcours valide", async () => {
      const { projectId, oa } = await seedProject("cy02");
      const analysis = structuralAnalysis();
      const { decision, subject } = await sealAccept(projectId, analysis);
      expect(subject.cycleInstanceId).toBeNull();
      const prep = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prep.ok).toBe(true);
    });

    it("ID01 — même EC courant → idempotence", async () => {
      const { projectId, oa } = await seedProject("id01");
      const analysis = structuralAnalysis();
      const { decision } = await sealAccept(projectId, analysis);
      const a = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      const b = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(a.ok && b.ok).toBe(true);
      if (!a.ok || !b.ok) throw new Error("prepare");
      expect(a.contract.executionContractId).toBe(b.contract.executionContractId);
    });

    it("ID03 — same decisionRefs but effects diverge → no reuse as success path", async () => {
      const { projectId, oa } = await seedProject("id03");
      const analysis = structuralAnalysis({ requestedOperation: "op-a" });
      const { decision } = await sealAccept(projectId, analysis);
      const a = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(a.ok).toBe(true);
      const b = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis: structuralAnalysis({ requestedOperation: "op-b" }),
        decisionId: decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(b.ok).toBe(false);
      if (b.ok) throw new Error("expected refuse");
      expect(b.code).toBe("HD_EFFECTS_MISMATCH");
    });
  });
});

```

---

## 19. HANDOFF PUBLICATION (à compléter post-publish)

Branche: `sfia/review-handoff`
Fichier: `sfia-review-handoff/latest-chatgpt-review.md`
Message: `docs(review-handoff): publish M-HD-01 authority continuity correction pass`
Publisher: `scripts/sfia/publish-review-handoff.sh`
Mode: publish-in-cycle L3 borné — mono-fichier uniquement.

(Post-publish: commit SHA + blob SHA + relecture distante.)

---

## 20. FIN DU REVIEW PACK

Verdict: **M-HD-01 AUTHORITY CONTINUITY — DETERMINISTIC PASS**
Statut: **LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**
Dirty candidate préservé. Aucun commit Product.
Pack generated: 2026-10-16 14:38:54 CEST
