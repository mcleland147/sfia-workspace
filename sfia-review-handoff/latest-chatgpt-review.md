# Review Pack FULL — STUDIO-P6-GENERIC-EXECUTION-GIT-READINESS-01

## Horodatage
2026-10-17T13:18:29Z

## Cycle
- ID: STUDIO-P6-GENERIC-EXECUTION-GIT-READINESS-01
- Type: 13 — PR Readiness / Critical
- Typologie: EVOL / INC / PR READINESS / GIT INTEGRATION
- Décision Morris: GO préparation intégration Git + qualification PR readiness (aucun GO commit/push/PR/merge Product)
- Capacité: V3-F05 · Milestone P6 · Human QA suspendue · Runtime v3 NON ADOPTED · P6 PASS non revendiqué

## Git Truth Check

| Champ | Valeur |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` |
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| Trees HEAD==main | `f641a109962e2cdc45397c306c7ddef159d0a32a` (identiques) |
| merge-base(HEAD,main) | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| Remote tip branche | b4c1d862… (= HEAD) |
| PR #586 | MERGED 2026-10-15 → main@896ff59c (branche déjà intégrée) |
| Staged | vide |
| Modified tracked | 49 |
| Untracked | 29 |
| Dirty FP (initial=final) | `00d004be58d7e35bacc4f639e58a60aae9beaebe3b28da6022dcef02cd8fce04` |
| HEAD vs main diff | vide (tout l'écart est dirty local) |

### Conclusion Git
La branche `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` est **déjà fusionnée** dans main (même tree). **Aucun commit Product n'existe** pour les travaux post-merge ; ils vivent uniquement en dirty/untracked local. L'intégration = nouvelle branche depuis `origin/main` + application du dirty (pas de cherry-pick de commits inexistants).

## Sources
- convergence-build-doctrine, convergence-roadmap, product-completion/01, P6 QA doc, sfia-v3-framing 30–37 (applicables)
- template cycle 13 + routing guide + CKC synthetic map (guidance)
- Handoffs: 6413d1b0, edecdef4, 7e768ffe, 02c50190, f41dd42c, b618a536, 17a75636, d4304659, 86ad2dab, a4eae306, ac4923ef (+ chaîne M-HD/DER16/cursor)

## Reconciliation handoffs → local

| Ensemble | Handoff | GO Morris | Verdict handoff | État local vs main | Validation consolidée |
|---|---|---|---|---|---|
| DER16 Nora tool | a4eae306 | GO Nora tool integrated delivery | DET PASS | dirty (nora runtime + test) | **FAIL** E12 F2 + R5 static |
| Cursor selection | ac4923ef | GO project-scoped Cursor | DET PASS | dirty (test + w2/runtime) | **FAIL** S1 Start |
| M-HD-01 | 86ad2dab (+ corrections) | GO M-HD-01 implementation | DET PASS | dirty (OA decision + w2 + UI + tests) | PASS (suites mHd01) |
| M-HD-02 | d4304659 / ca68fe69… | GO M-HD-02 / P6-MIN-07 | QA entry | dirty (tests mHd02 + presentation) | PASS (suites mHd02) |
| MATERIALITY-BLOCK-01 | b618a536 / 17a75636 | GO materiality regularization | DET PASS | dirty (resolveAuthoritative… + test) | PASS materiality test |
| Option 1 continuity | f41dd42c + Delivery 02c50190 | GO Option 1 adapt | IMPACT/DELIVERY PASS | dirty (continuity DTO + G-D4 tests + UI) | PASS G-D4 / E5 |
| Delivery A+B UX | 02c50190 | GO Delivery local | DET PASS VISUAL NOT PROVEN | dirty Execution rail | PASS s03 continuity |
| Regularization-02 | 7e768ffe | GO R02 | DET PASS VISUAL NOT PROVEN | dirty R02/R03 CTX | PASS CTX suite |
| Inspection Pass03 | edecdef4 | GO inspection closure | DET PASS VISUAL NOT PROVEN | dirty Execution inspect | PASS |
| Unified Inspection Pass04 | 6413d1b0 | GO unified inspection | DET PASS VISUAL NOT PROVEN | dirty 3 surfaces + panel | PASS UIC suite |
| Docs architecture | (audit chain) | review docs | — | dirty convergence md | INTEGRATE optional |

**Constat critique:** plusieurs handoffs affirmaient DET PASS isolé ; la **validation croisée consolidée** révèle des **incompatibilités inter-ensembles** (Option1↔DER16 static, materiality/F2↔DER16 E12, Start↔cursor selection).

## Matrice d'intégration (exhaustive)

Disposition legend: INTEGRATE · REQUIRES CORRECTION · GENERATED/TEMPORARY · ALREADY IN MAIN (N/A — dirty only)

| Fichier | Git | Ensemble | Disposition | Note / GO |
|---|---|---|---|---|
| `.tmp-sfia-review/chatgpt-review.md` | M | (see note) | **GENERATED / TEMPORARY** | EXCLUDE from Product commit · sha256:008c1d5939a7a019… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/automaticProjectResume.ui.test.tsx` | M | (see note) | **INTEGRATE** | Regularization-02 / Delivery UX · sha256:edb9f83443d5e0c6… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/governedMomentsInline.ui.test.tsx` | M | (see note) | **INTEGRATE** | Cumulative dirty linked to P6 generic execution chain · sha256:f764ada94c65d9c1… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s01.workspaceLayout.ui.test.tsx` | M | (see note) | **INTEGRATE** | Regularization-02 / Delivery UX · sha256:7328dddf8e887c08… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.durableExecutionActionContinuity.ui.test.tsx` | M | (see note) | **INTEGRATE** | Option 1 GO (f41dd42c) + Delivery · sha256:a26da94723e32d4e… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.objectNativeViews.ui.test.tsx` | M | (see note) | **INTEGRATE** | Regularization-02 / Delivery UX · sha256:cdb1ad85aac33995… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s03.pilotExecutionPresentation.d0.test.ts` | M | (see note) | **INTEGRATE** | Delivery A+B + Pass03/04 · sha256:56708344723be162… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s04.synthesesSurface.ui.test.tsx` | M | (see note) | **INTEGRATE** | Regularization-02 / Delivery UX · sha256:ec559a0d6ece1804… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s07.journalPrincipalView.ui.test.tsx` | M | (see note) | **INTEGRATE** | Regularization-02 / Delivery UX · sha256:b15dbdb2223df13f… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.closureRegularization.trajectorySurfaceConsent.ui.test.tsx` | M | (see note) | **INTEGRATE** | Delivery/R02/Pass04 — after Start/inspect test alignment · sha256:7b1dc959f21803d6… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/postExecutionTrajectorySurface.ui.test.tsx` | M | (see note) | **INTEGRATE** | Delivery/R02/Pass04 — after Start/inspect test alignment · sha256:7d7ce72bd0c5300b… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx` | M | (see note) | **INTEGRATE** | Delivery/R02/Pass04 — after Start/inspect test alignment · sha256:558235ca86426cad… |
| `projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:23513b92d5cfa5d3… |
| `projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:c2862434ad6fe670… |
| `projects/sfia-studio/app/__tests__/project-assistant/ecRehydrationContinuity.d0.test.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:4c91e41096ed8cc2… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx` | M | (see note) | **INTEGRATE** | Regularization-02 / Delivery UX · sha256:a9eb32d29dc4cade… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts` | M | (see note) | **INTEGRATE** | Cumulative dirty linked to P6 generic execution chain · sha256:7eb2fa5f7fb56ac0… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx` | M | (see note) | **INTEGRATE** | Cumulative dirty linked to P6 generic execution chain · sha256:7cac15a4b9be959e… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.module.css` | M | (see note) | **INTEGRATE** | Delivery A+B + Pass03/04 · sha256:65f2707e99772571… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ExecutionSurface.tsx` | M | (see note) | **INTEGRATE** | Delivery A+B + Pass03/04 · sha256:d7d06b79cb81713f… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard.tsx` | M | (see note) | **INTEGRATE** | Delivery A+B + Pass03/04 · sha256:4214e8464cff420d… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx` | M | (see note) | **INTEGRATE** | Delivery/R02/Pass04 — after Start/inspect test alignment · sha256:69e0f799c9d465e6… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/pilotExecutionPresentation.ts` | M | (see note) | **INTEGRATE** | Delivery A+B + Pass03/04 · sha256:2769de6b07f8dbd5… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/workspaceContextPresentation.ts` | M | (see note) | **INTEGRATE** | Regularization-02 / Delivery UX · sha256:ba88881796f349a0… |
| `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:a197c714289bb013… |
| `projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:93852ec0c2193c86… |
| `projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:25f6727102dc2525… |
| `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:bf17440e75fd1d6a… |
| `projects/sfia-studio/app/features/project-assistant/f2/types.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:3f920248f70fb76a… |
| `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:8150d48197019412… |
| `projects/sfia-studio/app/features/project-assistant/w2/actions.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:c672508735f92479… |
| `projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:cb05deba11a215a2… |
| `projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:b9d66ccd0aaba04b… |
| `projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:61b38aa22d8c3a43… |
| `projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:1a273321101a38e3… |
| `projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:7cc3cebdeafa3fe9… |
| `projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:00866702e83bae2a… |
| `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:66a7c92d10a053f0… |
| `projects/sfia-studio/app/features/project-assistant/w2/readCurrentGovernedExecutionContinuity.ts` | M | (see note) | **INTEGRATE** | Option 1 GO (f41dd42c) + Delivery · sha256:5d6c4b42bf46220b… |
| `projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts` | M | (see note) | **INTEGRATE** | MATERIALITY-BLOCK-01 GO (b618a536/17a75636) · sha256:312b42f555a3ec1b… |
| `projects/sfia-studio/app/features/project-assistant/w2/types.ts` | M | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:662dc62ea5d3ccf5… |
| `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts` | M | (see note) | **REQUIRES CORRECTION** | DER16 failures E12 F2 + static decisionRefs vs Option1 · sha256:45904003d4383e5b… |
| `projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts` | M | (see note) | **REQUIRES CORRECTION** | DER16 failures E12 F2 + static decisionRefs vs Option1 · sha256:02ef3daf64ecb885… |
| `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts` | M | (see note) | **REQUIRES CORRECTION** | DER16 failures E12 F2 + static decisionRefs vs Option1 · sha256:578bac8009a81f48… |
| `projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts` | M | (see note) | **INTEGRATE** | M-HD-01 GO (86ad2dab) — OA decision domain for generic_mission · sha256:5a852d37f3440f5f… |
| `projects/sfia-studio/app/lib/oa/decision/domain/types.ts` | M | (see note) | **INTEGRATE** | M-HD-01 GO (86ad2dab) — OA decision domain for generic_mission · sha256:861bdc1cf0b0541c… |
| `projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts` | M | (see note) | **INTEGRATE** | M-HD-01 GO (86ad2dab) — OA decision domain for generic_mission · sha256:f1a6802b699c13d2… |
| `projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts` | M | (see note) | **INTEGRATE** | M-HD-01 GO (86ad2dab) — OA decision domain for generic_mission · sha256:16d3c4a2141b205f… |
| `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` | M | (see note) | **INTEGRATE** | Architecture review doc — confirm Morris wants docs in same PR · sha256:c6e0668dba9ae122… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.o1.executionWorkPresentation.d0.test.ts` | U | (see note) | **REQUIRES CORRECTION** | TS2352 incomplete ProductExecutionContext fixture · sha256:0a19c82092ffdd1f… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r02.actionAvailability.d0.test.ts` | U | (see note) | **INTEGRATE** | Regularization-02 / Delivery UX · sha256:2eb81326eca89b61… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r03.contextFreshness.ui.test.tsx` | U | (see note) | **INTEGRATE** | Regularization-02 / Delivery UX · sha256:8d98963c194de902… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.r03.inspectionDisclosureClosure.d0.test.ts` | U | (see note) | **INTEGRATE** | Pass03/Pass04 GO (edecdef4/6413d1b0) · sha256:9cac1981a20dfaf9… |
| `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.uic.unifiedInspectionContract.ui.test.tsx` | U | (see note) | **INTEGRATE** | Pass03/Pass04 GO (edecdef4/6413d1b0) · sha256:7893e07127523928… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts` | U | (see note) | **REQUIRES CORRECTION** | DER16 failures E12 F2 + static decisionRefs vs Option1 · sha256:1b77f4206da20532… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts` | U | (see note) | **INTEGRATE** | MATERIALITY-BLOCK-01 GO (b618a536/17a75636) · sha256:01473944f707258a… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts` | U | (see note) | **INTEGRATE** | Generic PREPARE / W2 cumulative — verify after DER16/cursor fixes · sha256:3677e90083f02d68… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:ed5c1cb6c945bb9f… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:05cad76758f83bed… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:1436dc32a0fce9de… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:6392416e3be9473e… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:8d8f57c151e71d94… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:08db1f5d3dd96b7b… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:1544933b65c0ce7b… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts` | U | (see note) | **INTEGRATE** | Option 1 GO (f41dd42c) + Delivery · sha256:d6bb58a786db077b… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts` | U | (see note) | **REQUIRES CORRECTION** | S1 Start fails after Select (null-cycle) · sha256:209cf0b47c345b3d… |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.r03.inspectionContinuityAttestation.d0.test.ts` | U | (see note) | **INTEGRATE** | Pass03/Pass04 GO (edecdef4/6413d1b0) · sha256:19d3413a599de3b3… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ContractInspectionExamPanel.module.css` | U | (see note) | **INTEGRATE** | Pass03/Pass04 GO (edecdef4/6413d1b0) · sha256:9af51ead051d6970… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ContractInspectionExamPanel.tsx` | U | (see note) | **INTEGRATE** | Pass03/Pass04 GO (edecdef4/6413d1b0) · sha256:78606579150a7169… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedGenericMissionDecisionCard.tsx` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:5de363e1613bad40… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/contractInspectionExam.ts` | U | (see note) | **INTEGRATE** | Pass03/Pass04 GO (edecdef4/6413d1b0) · sha256:a46a0924f631852a… |
| `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/genericMissionPresentation.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:06e97880ddc27509… |
| `projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionApplicability.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:8ecdda2117b492be… |
| `projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionContinuity.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:4358a175a2dd6f59… |
| `projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:7ea8b36c7cb22f06… |
| `projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:c7e4ad23482a1413… |
| `projects/sfia-studio/app/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget.ts` | U | (see note) | **INTEGRATE** | Materiality + Generic PREPARE · sha256:ee284fdf41a8d6ef… |
| `projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts` | U | (see note) | **INTEGRATE** | M-HD-01/02 GO — after targeted corrections pass · sha256:bc6f265d8bafefef… |

### Synthèse dispositions
- INTEGRATE (après corrections): 71
- REQUIRES CORRECTION: 6
- EXCLUDE/TEMP: 1
- ALREADY IN MAIN (contenu commit): 0 fichiers dirty — tree déjà sur main

### Fichiers REQUIRES CORRECTION (bloqueurs)
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts` — DER16 failures E12 F2 + static decisionRefs vs Option1
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts` — DER16 failures E12 F2 + static decisionRefs vs Option1
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts` — DER16 failures E12 F2 + static decisionRefs vs Option1
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.o1.executionWorkPresentation.d0.test.ts` — TS2352 incomplete ProductExecutionContext fixture
- `projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts` — DER16 failures E12 F2 + static decisionRefs vs Option1
- `projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts` — S1 Start fails after Select (null-cycle)

### Exclusions obligatoires
- `.tmp-sfia-review/**` — Review Pack temporaire
- aucun `.env*`, cookies, tokens, SQLite HQA, caches détectés dans dirty
- lint Error préexistant hors dirty: `evaluateProductRealReadiness.ts` (`require()`) — **ALREADY IN MAIN**; qualifier impact CI séparément

### OA / autorité
Fichiers `lib/oa/decision/**` + `artifactTargetRouting.ts` modifiés pour `generic_mission` (M-HD-01).
- GO traçable: M-HD-01 (86ad2dab) — **pas** un changement OA Pass04 (Pass04 interdisait OA pour *son* cycle).
- Disposition: INTEGRATE avec le lot M-HD, après gates verts.

## Contrôles exécutés (non destructifs)

### TypeScript (`tsc --noEmit`)
**FAIL — 2 errors** (bloquant PR readiness)

```
__tests__/pre-m6-product-ui/p6.o1.executionWorkPresentation.d0.test.ts(32,14): error TS2352
__tests__/pre-m6-product-ui/p6.o1.executionWorkPresentation.d0.test.ts(164,20): error TS2352
```

**Qualification:**
- Cause: cast `as ProductExecutionContext` / context incomplet — type exige `cursorReport`, `artifact`, `postEvidence`, `provenance`, `disclosures` (défini dans `resolveProductExecutionContext.ts`).
- Lien local: fixture Delivery/Option1 (`p6.o1.executionWorkPresentation.d0.test.ts` untracked) non alignée sur le type Product courant.
- Correction minimale (cycle suivant): compléter le fixture (ou helper `minimalProductExecutionContext`) — **sans** affaiblir le type.
- Impact: **bloque** `npm run typecheck` CI Studio.

### Lint
- Warnings nombreuses (Trajectory hooks, unused) — non bloquantes typiques.
- Error `@typescript-eslint/no-require-imports` dans `evaluateProductRealReadiness.ts` — **hors dirty / déjà sur HEAD main**.

### Tests consolidés (vitest isolé)
Suite ciblée: 23 files · **324 PASS / 3 FAIL**

| Failure | Fichier | Invariant cassé | Lien ensembles |
|---|---|---|---|
| E12 F2 structural → no offer | `p6.der16…` | offer NON null malgré MARKER_STRUCTURAL_DOC | Materiality/F2 vs DER16 |
| R5 static `decisionRefs: []` count==1 | `p6.der16…` | code utilise `decisionRefs: [...verifiedDecisionRefs]` | Option1 vs DER16 test |
| S1 Start after Select | `p6.projectScopedCursorSelection…` | `started.ok === false` (Select OK) | Cursor selection vs cumulative gates |

Suites PASS notables: M-HD01/02, materiality, G-D4, UIC Pass04, CTX R03, Trajectory 55, Execution E5, closure, inspection binding, governed moments.

### git diff --check
Pas d'erreurs whitespace bloquantes relevées sur le diff Product.

## Fake/Real
- Niveau: CONSOLIDATED DETERMINISTIC READINESS **NOT** PROVEN (échecs croisés)
- Hors scope: REAL, HQA PASS, P6 PASS, runtime ADOPTED
- VISUAL NOT PROVEN conservé (héritage Delivery/Pass03/04)

## Stratégie d'intégration (recommandée — ne pas exécuter maintenant)

### Préférence: Option A — une PR cohérente, plusieurs commits logiques
Branche cible (à créer **après** GO Morris + corrections):
`integration/sfia-studio-p6-generic-execution-consolidation` depuis `origin/main`.

### Procédure non destructive (plan)
1. Conserver worktree dirty actuel intact.
2. `git worktree add -b integration/… <path> origin/main` (worktree propre).
3. Copier/appliquer **uniquement** les fichiers classés INTEGRATE (+ corrections) depuis le dirty source (rsync/cp fichier-à-fichier) — **jamais** `.tmp-sfia-review`.
4. Commits logiques dans le worktree d'intégration.
5. `npm run typecheck && npm run lint && npm test` (ou suites CI) dans worktree.
6. Push branche intégration + PR → main (GO Morris distinct).
7. Worktree Product dirty: inchangé jusqu'à décision post-merge (sync/discard).

### Plan de commits (après corrections)
1. `feat(oa): M-HD generic_mission decision basis` — lib/oa/decision + artifactTargetRouting + tests mHd01
2. `feat(w2): generic mission HD record/verify + materiality CURRENT` — w2 M-HD/materiality modules + tests
3. `feat(nora): generic tool invocation + project-scoped cursor selection` — nora runtime + der16/cursor tests (post-fix)
4. `feat(w2): Option1 continuity DTO decisionRef null + requiredInspectedFacts` — continuity + G-D4 tests
5. `feat(ui): execution rail + inspection Pass03/04 unified exam` — Execution/Conversation/Trajectory + UIC tests
6. `test(ui): R02/R03 context freshness + residual P5 alignments`
7. `docs(studio): generic execution review-result architecture note` (si inclus)

Contrôles après chaque commit: `tsc` + vitest du lot.

### Rollback
- PR non mergeable → fermer PR; worktree intégration jetable.
- Post-merge revert commit-group si nécessaire.
- Dirty Product source reste filet de sécurité jusqu'à sync explicite.

### Post-merge / HQA
- Sync worktree Product sur main.
- GO Morris distinct pour reprise HQA.
- Ne pas traiter merge Git comme HQA PASS / VISUAL PASS / REAL.

## Périmètre de régularisation (obligatoire avant READY)

### C1 — TypeScript fixture O1 presentation
- Fichier: `p6.o1.executionWorkPresentation.d0.test.ts`
- Fix: fixture `ProductExecutionContext` complet (cursorReport/artifact/postEvidence/provenance/disclosures/…)
- Preuve: `npm run typecheck` PASS

### C2 — DER16 ↔ Option1 static gate
- Fichier test: `p6.der16.genericNoraToolInvocation.d0.test.ts` (R5)
- Align assert sur `decisionRefs: [...verifiedDecisionRefs]` + invariant Option1 (empty when non-structural)
- Ne pas réintroduire HD artificiel

### C3 — DER16 E12 F2 structural offer leak
- Symptôme: offer créé malgré MARKER_STRUCTURAL_DOC
- Qualifier: regression materiality/F2 vs intention DER16 E12
- Fix borné F2/materiality OU test si marker/setup obsolète — **preuve négative** offer==null + 0 EC

### C4 — Cursor selection Start null-cycle
- Symptôme: Select/Accept OK, Start `ok:false`
- Capturer `code/message` Start; corriger gate ou test selon contrat project-scoped
- Preuve: S1 PASS end-to-end Fake

**Aucun code modifié dans ce cycle readiness.**

## Gates PR/merge (prévisionnels)
- typecheck PASS
- lint sans Error nouveaux
- vitest suites consolidées PASS (dont der16, cursor, mHd, materiality, o1, inspection, CTX)
- git diff --check clean
- exclusions respectées
- GO Morris explicite commit/push/PR
- HQA non mutée

## Diff stat (dirty vs HEAD)
```
.tmp-sfia-review/chatgpt-review.md                 | 167 +-----
 .../automaticProjectResume.ui.test.tsx             |   5 +-
 .../governedMomentsInline.ui.test.tsx              |  50 +-
 .../p5.s01.workspaceLayout.ui.test.tsx             |   5 +-
 ...03.durableExecutionActionContinuity.ui.test.tsx |  84 ++-
 .../p5.s03.objectNativeViews.ui.test.tsx           |   5 +-
 .../p5.s03.pilotExecutionPresentation.d0.test.ts   |  37 +-
 .../p5.s04.synthesesSurface.ui.test.tsx            |   5 +-
 .../p5.s07.journalPrincipalView.ui.test.tsx        |   5 +-
 ...larization.trajectorySurfaceConsent.ui.test.tsx |  45 +-
 .../postExecutionTrajectorySurface.ui.test.tsx     |  87 +++
 .../trajectorySurface.ui.test.tsx                  | 197 +++++-
 ...ifactMaterializationContinuityCorr01.d0.test.ts |   9 +-
 .../corrProof07.artifactMaterialization.d0.test.ts |  15 +-
 .../ecRehydrationContinuity.d0.test.ts             |   2 +
 .../pre-m6-product-ui/ProjectWorkspacePage.tsx     |  88 ++-
 .../hooks/useProductConversation.ts                | 176 +++++-
 .../surfaces/ConversationSurface.tsx               |  46 +-
 .../surfaces/ExecutionSurface.module.css           |  32 +
 .../surfaces/ExecutionSurface.tsx                  | 317 ++++++++--
 .../surfaces/GovernedConfirmationCard.tsx          | 112 +++-
 .../surfaces/TrajectorySurface.tsx                 | 342 ++++++++---
 .../surfaces/pilotExecutionPresentation.ts         | 373 ++++++++++--
 .../workspaceContextPresentation.ts                |  21 +
 .../project-assistant/ProjectAssistantPanel.tsx    |   2 +-
 .../f2/activeCycleGovernedContinuation.ts          |  19 +-
 .../project-assistant/f2/ckcCognitiveContext.ts    |   5 +-
 .../features/project-assistant/f2/orchestrateF2.ts | 194 ++++--
 .../app/features/project-assistant/f2/types.ts     |   7 +-
 .../features/project-assistant/orchestrateTurn.ts  |  41 ++
 .../app/features/project-assistant/w2/actions.ts   | 311 ++++++++++
 .../w2/authorizeExecutionContract.ts               |  53 +-
 .../w2/authorizeGenericPreparedContract.ts         |  52 +-
 .../w2/confirmForAuthorization.ts                  |  28 +-
 .../w2/governedExecuteAuthorizedContract.ts        | 253 +++++++-
 .../w2/pendingGenericPrepareOfferStore.ts          |  32 +-
 .../w2/prepareDocsWriteRecoverySuccessor.ts        |  11 +
 .../w2/prepareGenericExecutionContractDraft.ts     | 658 ++++++++++++++++++---
 .../w2/readCurrentGovernedExecutionContinuity.ts   |  93 ++-
 .../w2/resolveAuthoritativeProductMateriality.ts   |  13 +-
 .../app/features/project-assistant/w2/types.ts     |  12 +-
 .../app/lib/nora-cognitive-runtime/index.ts        |   2 +
 .../productExecutionAgentsTools.ts                 | 153 ++++-
 .../nora-cognitive-runtime/providerAgentsModel.ts  |   1 +
 .../app/lib/oa/decision/domain/invariants.ts       | 166 +++++-
 .../app/lib/oa/decision/domain/types.ts            |  59 +-
 .../infrastructure/localSingleUserAuthority.ts     |  17 +-
 .../lib/oa/project/domain/artifactTargetRouting.ts |  51 ++
 ...generic-execution-review-result-architecture.md | 170 +++++-
 49 files changed, 4024 insertions(+), 604 deletions(-)
```

## Verdict

**CUMULATIVE GIT READINESS — TARGETED CORRECTIONS REQUIRED**

Non READY FOR MORRIS INTEGRATION GO tant que C1–C4 non fermés.
Non READY FOR HQA.
Non READY FOR REAL.
VISUAL NOT PROVEN conservé.

## Instruction ChatGPT
Lire ce handoff au SHA distant. Valider inventaire, compatibilité des ensembles, exclusions, plan de commits, blocages C1–C4, et ne pas générer de prompt push/PR/merge sans GO Morris après corrections.
