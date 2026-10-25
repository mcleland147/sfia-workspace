# SFIA Review Pack — FULL / Critical
# AKG-M5 — STRUCTURAL REMOVAL RepositoryBinding + docs_write
# LOCAL DELIVERY — NOT MERGED

## 0. Meta
- Generated (UTC): 2026-10-25T13:11:59Z
- Generated (local): 2026-10-25 14:11:59 +0100
- Cycle: 8 Delivery / Critical
- GO Morris: 2026-10-25 structural removal RepositoryBinding + docs_write Product specialization
- Worktree: /Users/morris/Projects/sfia-workspace-feat-akg-m5-remove-repository-binding-docs-write
- Branch: feat/akg-m5-remove-repository-binding-docs-write
- Base HEAD (uncommitted Delivery): 7db8afd7c27720712f08000274dbbc4e1a62d935 (= origin/main tip before local edits)
- origin/main: 7db8afd7c27720712f08000274dbbc4e1a62d935 (unchanged — retirement NOT ON MAIN)
- No project commit/push/PR/merge this cycle
- L3 handoff only

## 1. GO Morris consumed
Remove Product RepositoryBinding mechanism; remove docs_write Product specialization and specialized runtime paths; sync docs; accept temporary regressions; refuse cosmetic renames/wrappers/parallel architecture/hardening campaigns.

## 2. Git Truth
- Initial Delivery WT created/corrected onto feat/akg-m5-remove-repository-binding-docs-write @ 7db8afd7c27720712f08000274dbbc4e1a62d935
- Other worktrees preserved (activation-prep restored to its branch)
- Dirty: full local Delivery tree below (uncommitted)
- origin/main still has historical binding/docs_write until future GI

## 3. Sources
Process v2.6 · Build Doctrine · Roadmap · Product Completion · Generic ER architecture D-ER · M5 blueprint/L2-D0 · doctrine v3 (NON ADOPTED) · PRR · code under projects/sfia-studio/app/

## 4. R23 / R24
- R23: code-first removal of Product mechanisms; Project create independent of Git binding; documentary WHERE via projectWorkspaceKey
- R24: Roadmap tip + C1 amendment + PRR volumes + manifest digests updated for **LOCAL CANDIDATE** (explicitly not CURRENT ON MAIN)

## 5. Classification of assets
| Asset | Action |
|-------|--------|
| Project.repositoryBinding / SetProjectRepositoryBinding / serverOwnedRepositoryConfig / PROJECT_REPOSITORY_* | **RETIRED IN LOCAL DELIVERY** |
| docs_write intentKind / cap:cursor.docs_write / cursor.docs_write.apply / specialized agents/helpers | **RETIRED IN LOCAL DELIVERY** (admission paths zero in lib+features excl. tests) |
| projectWorkspaceKey / projects/<key> routing | **KEEP** |
| Generic PREPARE / ExecutionContract / generalist Cursor / Git ports / Evidence / ReviewBundle | **KEEP** |
| EC field name `repositoryBindingIdentity` | **RESIDUAL NAMING** — sealed git-target identity string; NOT Product RepositoryBinding SoT; launch context leaves unset |
| Historical comments / legacy UI strings mentioning docs_write | **RESIDUAL TEXT** — not Product admission |
| Extracted helpers productEvidenceRefsRoot / authorizedCursorRealAgent | **KEEP** (primitives without docs_write agent) |

## 6. Files deleted (51)
```
projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealDocsWrite.real.d0.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/missionResultContractResultSemantic.d0.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/nativeExecutionLoopConvergence01.acceptanceAmbiguity.d0.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/nativeExecutionLoopConvergence01.contractResultCriteria.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/docsWriteSealedWorktreePaths.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/nativeExecutionLoopConvergence01.sameMacroClosure.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts
projects/sfia-studio/app/__tests__/pre-m6-product-ui/repositoryBindingForm.ui.test.tsx
projects/sfia-studio/app/__tests__/project-assistant/automaticResultQualification.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryDocsWriteSuccessor.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/claimEvidenceCompletion.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/contractResultCrBlk04PreserveWhat.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/contractResultDocsWriteRequal.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/docsWriteProductAwaitCompletionWiring.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/nativeExecutionLoopPostEvidenceRecoveryContinuityCorr01.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.closureRegularization.repositoryCurrentness.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/postExecutionCursorReportArtifactHandoff.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/postExecutionHandoff.integrated.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/postExecutionProductContinuity.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/productJourneyGovernedDocsWriteWiring.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/productJourneyPostExecutionReplan.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/recoveryBindingWriteModePrestartContinuity.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.corr03.governedClaim.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/recoveryOwnership.prestartFailure.integration.d0.test.ts
projects/sfia-studio/app/__tests__/vertical-slice-runtime/repositoryBindingProjection.d0.test.ts
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RepositoryBindingForm.tsx
projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
projects/sfia-studio/app/features/project-assistant/f3/docsWriteEvidenceContradictionView.ts
projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedDocsWriteContract.ts
projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
projects/sfia-studio/app/features/project-assistant/f3/legacyDocsWritePrepareContractView.ts
projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
projects/sfia-studio/app/features/project-assistant/f3/qualifyDocsWriteM3Intent.ts
projects/sfia-studio/app/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts
projects/sfia-studio/app/features/project-assistant/f3/resolveExistingLegacyM3DocsWriteProductPath.ts
projects/sfia-studio/app/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts
projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
projects/sfia-studio/app/features/project-assistant/w2/repairIncompleteRecoveryDocsWriteSuccessor.ts
projects/sfia-studio/app/features/project-assistant/w2/requalifyDocsWriteContractResult.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteMinConformityVerifier.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/resolveSealedDocsWriteWorktreePaths.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedDocsWritePriorAttempt.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeDocsWriteLaunchPort.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent.ts
projects/sfia-studio/app/lib/oa/project/application/setProjectRepositoryBinding.ts
projects/sfia-studio/app/lib/oa/project/domain/serverOwnedRepositoryConfig.ts
```

## 7. Files added (0)
```

```

### Full content — new file `projects/sfia-studio/app/features/project-assistant/f3/productEvidenceRefsRoot.ts`
```typescript
/**
 * Default refs root beside Product SQLite (same convention as mission-result-refs).
 */
import path from "node:path";

export function resolveProductEvidenceRefsRoot(
  explicit?: string | null,
): string {
  const trimmed = explicit?.trim();
  if (trimmed) return trimmed;
  const fromEnv =
    typeof process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT === "string" &&
    process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT.trim()
      ? process.env.SFIA_STUDIO_PRODUCT_EVIDENCE_REFS_ROOT.trim()
      : null;
  if (fromEnv) return fromEnv;
  const db =
    typeof process.env.SFIA_STUDIO_PRODUCT_DB_PATH === "string" &&
    process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
      ? process.env.SFIA_STUDIO_PRODUCT_DB_PATH.trim()
      : path.join(
          process.cwd(),
          "..",
          ".sfia-exec",
          "product",
          "oa-product.sqlite",
        );
  return path.join(path.dirname(db), "mission-result-refs");
}

```

### Full content — new file `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/authorizedCursorRealAgent.ts`
```typescript
/**
 * REAL Cursor allowlist — generalist | read-only | local-commit | push | PR create | PR merge.
 * Product missions use the generalist. Git ports keep their bounded agents.
 */
import type { AgentDescriptor } from "../domain/types";
import { isM4BoundedLocalCommitRealAgent } from "./m4BoundedLocalCommitCursorAgent";
import { isM4BoundedPrCreateRealAgent } from "./m4BoundedPrCreateCursorAgent";
import { isM4BoundedPrMergeRealAgent } from "./m4BoundedPrMergeCursorAgent";
import { isM4BoundedReadOnlyRealAgent } from "./m4BoundedReadOnlyCursorAgent";
import { isM4BoundedRemotePushRealAgent } from "./m4BoundedRemotePushCursorAgent";
import { isStudioCursorGeneralistRealAgent } from "./studioCursorGeneralistAgent";

export function isM4AuthorizedCursorRealAgent(
  agent: AgentDescriptor,
): boolean {
  return (
    isStudioCursorGeneralistRealAgent(agent) ||
    isM4BoundedReadOnlyRealAgent(agent) ||
    isM4BoundedLocalCommitRealAgent(agent) ||
    isM4BoundedRemotePushRealAgent(agent) ||
    isM4BoundedPrCreateRealAgent(agent) ||
    isM4BoundedPrMergeRealAgent(agent)
  );
}

```

## 8. Files modified (146) — path list
```
.tmp-sfia-review/chatgpt-review.md
projects/sfia-studio/app/.env.example
projects/sfia-studio/app/__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecCursorRealSameEcCommit.real.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecOneLotDelivery.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
projects/sfia-studio/app/__tests__/oa/cycle/gcecRepositoryReadComposition.d0.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01CorrWireLin.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCrossEcPrCreateIntegration.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCursorFullCapabilityParity.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecMutatingCursorConfinementEnv.d0.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/nativeExecutionLoopConvergence01.gatewayMission.d0.test.ts
projects/sfia-studio/app/__tests__/oa/project/projectWorkspaceArtifactRouting.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/naturalMaterialization.applicationPath.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.authorityChatFirstContinuity.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.r03.inspectionContinuityAttestation.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.she.singleHumanExecute.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
projects/sfia-studio/app/__tests__/setup.ts
projects/sfia-studio/app/__tests__/vertical-slice-core/localProjectComposition.test.ts
projects/sfia-studio/app/__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts
projects/sfia-studio/app/__tests__/vertical-slice-runtime/studioRuntimeProfilePreflight.d0.test.ts
projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
projects/sfia-studio/app/features/project-assistant/actions.ts
projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
projects/sfia-studio/app/features/project-assistant/f2/executionIntentSchema.ts
projects/sfia-studio/app/features/project-assistant/f2/f2CanonicalOperations.ts
projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
projects/sfia-studio/app/features/project-assistant/f2/types.ts
projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
projects/sfia-studio/app/features/project-assistant/f3/index.ts
projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
projects/sfia-studio/app/features/project-assistant/f3/readBoundExecutionReviewItem.ts
projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
projects/sfia-studio/app/features/project-assistant/types.ts
projects/sfia-studio/app/features/project-assistant/w2/actions.ts
projects/sfia-studio/app/features/project-assistant/w2/applyVerifiedChangeSetProductHonesty.ts
projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
projects/sfia-studio/app/features/project-assistant/w2/genericPrepareCapabilityEnvelope.ts
projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
projects/sfia-studio/app/features/project-assistant/w2/missionContractSemanticInputs.ts
projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
projects/sfia-studio/app/features/project-assistant/w2/proposalSubjectOptions.ts
projects/sfia-studio/app/features/project-assistant/w2/recoveryReplaceableCurrentContract.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveChatFirstPilotDecision.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveProductExecutionContext.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveRecoveryExecutionBinding.ts
projects/sfia-studio/app/features/project-assistant/w2/resolveTrustedProductLaunchContext.ts
projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/executionReviewAgentsTools.ts
projects/sfia-studio/app/lib/oa/cycle/application/cycleExitState.ts
projects/sfia-studio/app/lib/oa/cycle/application/deriveCycleObligationSnapshot.ts
projects/sfia-studio/app/lib/oa/cycle/application/deriveFinalizationApplicability.ts
projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
projects/sfia-studio/app/lib/oa/decision/domain/types.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts
projects/sfia-studio/app/lib/oa/evidence-review/index.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/grantGateD.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/authorizedExecutionSlice.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/realLaunchSafety.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveGitEffectTarget.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
projects/sfia-studio/app/lib/oa/execution-contract/index.ts
projects/sfia-studio/app/lib/oa/execution-contract/projection/inspectionDisclosure.ts
projects/sfia-studio/app/lib/oa/project/application/createProject.ts
projects/sfia-studio/app/lib/oa/project/domain/invariants.ts
projects/sfia-studio/app/lib/oa/project/domain/projectWorkspaceKey.ts
projects/sfia-studio/app/lib/oa/project/domain/types.ts
projects/sfia-studio/app/lib/oa/project/index.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
projects/sfia-studio/app/lib/oa/synthesis/application/buildProductSynthesis.ts
projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
projects/sfia-studio/app/lib/vertical-slice-core/types.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/managedRepoRootBaseConfig.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/studioRuntimeProfilePreflight.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
projects/sfia-studio/app/scripts/studio-runtime-preflight.ts
projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
projects/sfia-studio/product-completion/01-product-completion-cadrage.md
projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md
projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
projects/sfia-studio/production-runtime-reference/README.md
projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```
(Diffs are in the local worktree vs 7db8afd7c27720712f08000274dbbc4e1a62d935; not committed. ChatGPT GI review should `git diff 7db8afd7c27720712f08000274dbbc4e1a62d935` on this branch after future commit GO.)

## 9. Target paths after removal
**Project:** Studio → CreateProject → Truth C Project+LPS (workspace key) → list/consult/resume — **no Git binding required**.
**Execution:** Generic PREPARE → ExecutionContract → Pilote EXECUTE → generalist Cursor → Attempt → Evidence/Review → Resolution. Documentary file effects remain possible as generic effects, not Product docs_write taxonomy.
PREPARE ≠ AUTHORIZE ≠ EXECUTE preserved. Nora does not execute.

## 10. Validation
- `npm run typecheck` (projects/sfia-studio/app): **PASS**
- O-01 integrated DET: **PASS**
- S1 snapshot DET: **PASS**
- localProjectComposition + studioRuntimeProfilePreflight (updated): **PASS**
- PRR conformance: **PASS** (volumes + trackedSources/Tests digests synced for Delivery drift)
- Many historical docs_write/binding exclusive tests: **DELETED** (accepted)
- Broader suite: not fully green claimed — known regressions accepted per Morris

## 11. Residual search (active Product dependency)
| Pattern (lib+features, excl __tests__) | Result |
|----------------------------------------|--------|
| Project.repositoryBinding | 0 |
| cap:cursor.docs_write | 0 |
| cursor.docs_write.apply | 0 |
| intentKind docs_write assignment | 0 |
| SetProjectRepositoryBinding | 0 |
| PROJECT_REPOSITORY_IDENTITY | 0 |
| Loose docs_write/RepositoryBinding text+EC field names | residual naming/comments (documented) |

**Active Product dependency:** ZERO for Create + admission.
**Zero textual references:** NOT claimed (residual EC field name + comments).

## 12. Accepted regressions
- Manual/server-owned RepositoryBinding UI/commands unavailable
- Specialized docs_write Product missions/agents unavailable
- Legacy M3 docs_write rematerialization paths removed
- Tests exclusively covering removed mechanisms deleted
- Preflight no longer requires PROJECT_REPOSITORY_* or per-identity managed clone for Product create
- Historical SQLite rows with repositoryBinding JSON: untouched; new code may ignore/refuse incompatible ops

## 13. Documentation R24
- Roadmap: NEW CURRENT TIP 2026-10-25 LOCAL Delivery retirement; PR #614 demoted HISTORICAL; PR #617 noted on main for prior L2-D2 prep
- C1: dated amendment superseding D-PC-09 server-owned binding projection; historical text preserved
- PRR README/02/03/05/07/08/09 + manifest digests: LOCAL CANDIDATE vs CURRENT ON MAIN

## 14. Gates / non-claims
- NOT MERGED / NOT CURRENT ON MAIN
- H4 REAL NOT QUALIFIED · G-REAL NOT GRANTED · G-ACTIVATION NOT GRANTED
- P6 GLOBAL NOT PASSED · AKG-M5 OPEN · RUNTIME V3 NON ADOPTED
- No project commit this cycle

## 15. Decisions still needed
1. ChatGPT Critical review of local retirement
2. Morris GO for project Git Integration (commit/push/Draft PR) if accepted
3. Optional later: rename EC `repositoryBindingIdentity` → neutral git-target field (cosmetic debt; not re-creating binding)
4. H4 OA-only instance designation remains separate track

## 16. Verdict
**RETIREMENT IMPLEMENTED LOCALLY — KNOWN FUNCTIONAL REGRESSIONS**
(with residual EC field naming / historical comment strings — **not** active Product Create/admission dependency)

**NOT:** RETIRED ON MAIN

END_OF_PACK
