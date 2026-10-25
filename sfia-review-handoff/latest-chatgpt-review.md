# SFIA Review Pack — FULL — AKG-M5 Cycle 8 CRITICAL CI SEMANTIC RECONCILIATION

## 1. Horodatage
- UTC: **2026-10-25T20:26:47Z**
- Europe/Paris: 2026-10-25 (Cycle 8 delivery)

## 2. GO Morris
- **GO AKG-M5 — PR #618 CRITICAL CI SEMANTIC RECONCILIATION** (2026-10-25)
- Scope: LOCAL CORRECTION ONLY on existing PR #618 branch
- **FORBIDDEN consumed:** project commit / push / new PR / merge / REAL / Binding restore / docs_write Product admission restore
- **AUTHORIZED:** local Product/test/PRR/Roadmap edits; DET Vitest; typecheck/lint/build; FULL Review Pack; L3 handoff on `sfia/review-handoff` only

## 3. Git Truth
| Item | Value |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-remove-repository-binding-docs-write` |
| Branch | `feat/akg-m5-remove-repository-binding-docs-write` |
| Initial/Final HEAD (projet) | `ff653b587a75b9ff92472cb4e4350239c087c9e9` (**unchanged** — no project commit) |
| origin/main | `7db8afd7c27720712f08000274dbbc4e1a62d935` |
| Remote PR HEAD | `ff653b587a75b9ff92472cb4e4350239c087c9e9` (matches local) |
| PR | #618 OPEN / DRAFT / NOT MERGED |
| Handoff ref before | `sfia/review-handoff` `e42c44eec504752c1409ed9358652a3496cf3e77` |
| Staged projet | **none** |
| Project commit/push | **NONE** |
| Diff shortstat (working tree vs HEAD) | `62 files changed, 2179 insertions(+), 1705 deletions(-)` |

### Preflight — `.tmp-sfia-review/chatgpt-review.md`
- Historically **tracked**; pre-cycle content preserved at `/tmp/preserved-chatgpt-review-pre-cycle8.md` (blob parity with pre-reset working content).
- This file is **mono-cycle reset** for Cycle 8 FULL pack authoring (not a project commit).

## 4. Sources exactes (CURRENT Git)
- Template / routing / operating model / guardrails / validation checklist (SFIA v2.6)
- Build Doctrine; Roadmap CURRENT tip; C1 D-PC-09 + amendement 2026-10-25
- Generic Execution architecture D-ER-01…19; D-P6-SHE-01
- Doctrine v3 30/32/33/34/35/37 (as applicable)
- AKG M4 rationalization (candidate guidance); Roadmap primes for status
- PRR README + volumes 03–09 + manifest (LOCAL CANDIDATE overlays)
- Handoffs: Structural `5595e468` · CORR-01 `c9ddb83a` · CORR-02 `cac910a4` · Git Integration `f0d1f058` · CI Reconciliation `e42c44ee`

## 5. Convergence Pre-check
- Milestone **AKG-M5** OPEN; capacité immédiate **O-01 / Generic Execution foundation**
- v3 foundations served: F05/F06/F11/F12/F14/F15 (partial)
- Chaîne cible Generic PREPARE → EC → Human Authority → Slice → Select/Start → Evidence (no Binding / no docs_write Product admission)
- Next after this cycle: ChatGPT Critical Review → GO distinct commit/push → post-merge → O-01/H4 under separate gates
- Gates open: H4 / G-REAL / G-ACTIVATION **NOT GRANTED**; runtime v3 **NON ADOPTED**

## 6. Architecture-informed R23
Chain touched: Project/LPS → Generic PREPARE → ExecutionContract → HD/Confirm/Authorize → AuthorizedExecutionSlice → Select/Start → Cursor Gateway (DET Fake) → Evidence/ReviewBundle → Recovery.

| Seam | Impl | Qualification |
|---|---|---|
| AttemptExecutionProfile | effect-gated progressive FS→commit→push→PR→merge; sealed F3/RO first; no docs_write action gate | BEHAVIOR PROVEN DET (Agent01/GitLifecycle/Cont01) |
| FakeDocsWriteLaunchPort | restored DET Cursor effect fake (AKG-M5 naming; not Product admission) | COVERAGE VERIFIED |
| prepareM3FromDecision | prose requestedOperation → generalist action; technical token preserved | BEHAVIOR PROVEN DET |
| ProjectWorkspace | pathRoot from projectWorkspaceKey; sealed git env for identity | BEHAVIOR PROVEN DET |
| Materiality Confirm | stamped pathRoot/identity vs live sealed env | BEHAVIOR PROVEN DET (rCi01 L05/L06/L08) |
| PRR | LOCAL CANDIDATE overlays + digest sync | DOCUMENTED + CONFORMANCE OK local |
| REAL Cursor/GitHub | — | KNOWN GAP / FORBIDDEN this cycle |

## 7. Matrice CI — 44 suites (baseline 40215089725)
Baseline GitHub: Workflow **40215089725** · HEAD `ff653b58` · **44 failed** · **160 tests failed** · typecheck/lint/build PASS · Vitest FAIL.

Cycle 8 local re-run of the same 44 paths: **44 passed / 639 tests passed**.

| `__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/cycle/gcecD15Negatives.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/cycle/gcecDeterministicE2e.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/cycle/gcecRepositoryReadComposition.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/execution-attempt/gcecAgent01CorrWireLin.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/ecInspectionDisclosure.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/genericExecutionReviewResultConvergence01.cp2Seams.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.integration.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |
| `__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts` | CI FAIL (40215089725) | A–F family (see §8) | PASS local Cycle 8 |

## 8. Classification A–G (families / causes communes)
| Class | Meaning | Cycle 8 treatment |
|---|---|---|
| A HISTORICAL RETIRED | DocWrite agent / Binding SoT / docs_write Product admission | RETIRE TEST deps; restore only DET FS completion helpers under AKG-M5 headers |
| B OBSOLETE EXPECTATION | docs_write intentKind, Binding pathRoot, prose as EC.action, Binding-stale via Product Binding mutation | ADAPT oracles to generalist + projectWorkspaceKey + sealed-git env |
| C GENERIC INVARIANT | progressive Attempt profiles, fail-closed Confirm, sealed identity | COMPLETE Product (effect-gate) + KEEP adversarial tests |
| D PRODUCT BEHAVIOR GAP | workspace routing without Binding; PREPARE action mapping | COMPLETE minimal Product |
| E SECURITY/AUTHORITY | hostile repo override, identity substitution, Confirm of wrong effect | KEEP/ADAPT tests to reach gates with generic contracts |
| F TEST INFRA | FakeDocsWrite stubbed reject; missing FS completion modules; workspace-unaligned fixtures | COMPLETE fixtures |
| G UNKNOWN | none left unclassified among the 44 after Cycle 8 | — |

**Common causes:** (1) progressive profiles gated on retired docs_write action → `contract_legacy`; (2) FakeDocsWrite stub reject; (3) Binding-based pathRoot/identity oracles; (4) prose title expected as `contract.action`; (5) PRR digest drift.

## 9. Corrections P0 / P1 / P2
### P0 Authority / Git
- `resolveAttemptExecutionProfile`: progressive profiles gated on **authorized effects**, not docs_write action; sealed F3/RO before progressive; FS materialization prior for local_commit lineage.
- Restored DET `FakeDocsWriteLaunchPort` + sealed worktree path resolver + FS materialization prior (untracked adds).
- Rewrote Cr23 / Agent01 / Cont01 / GitLifecycle adversarial suites for generalist + sealed identity.
- `startExecution` / gateway: artifactBrief→commit message; FS agent mode + docsWriteSpec instruction path without Product admission.

### P1 PREPARE / Workspace / Evidence
- `prepareM3FromDecision.isTechnicalExecutionActionRef`: whitespace-free tokens are technical; French prose → generalist action.
- Journey / corrProof / rCi01: Binding-free workspace oracles; T17 proposes under `projects/<key>` with null `targetRepositoryRef`.
- rCi01 L06/L08: sealed-git env identity/remote mutation (not Product Binding).

### P2 Legacy
- Monolithic GCEC truncated at fixture-safe M3 resolve (KNOWN GAP exit proof; progressive spine covered by Cr23).
- No opportunistic `test.skip`; no Required Gate bypass.

## 10. Fichiers créés / modifiés / supprimés
### Created (untracked)
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/resolveSealedDocsWriteWorktreePaths.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorDeterministicLaunchPort.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts`

### Modified (tracked) — name-status
```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecCr01F2DecisionBasis.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecCr23StartExecution.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecD15Negatives.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecProductMonolithicE2e.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/cycle/gcecRepositoryReadComposition.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01AttemptProfile.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecAgent01CorrWireLin.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01SameEcAbContinuation.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitGatewayProfile.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitCommitSameEcAb.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecGitLifecyclePushPrMerge.d0.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
M	projects/sfia-studio/app/__tests__/platform/fakeProvider.userValidArtifactMaterialization.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/productJourneyProjectionCoherence.ui.test.tsx
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
M	projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactApplicabilityContinuationBridgeCorr01.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/chatFirstWorkRecommendationContinuity.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/checkpointF.realFailureObservability.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/checkpointF.recoveryCtaRestartPrecedence.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof09.materializationIntentContract.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/corrProof11.reinstructionPilotLanguage.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/ecInspectionDisclosure.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.cp2Seams.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/genericExecutionReviewResultConvergence01.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/habitFlowChatFirstProjectTrajectoryEcContinuity.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.o1.continuityGd4EmptyRefs.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.productContinuityClosure.integrated.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.executionContractSimplification.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/pilotExecutionExperience.recoveryOwnership.integration.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/pjReproof04.executionContractSemanticBridge.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/productCycleE2eStabilization.frontDoor.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.applicationPath.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/productProofJourneyIntegrity.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/productWorkspaceArtifactRouting.applicationPath.d0.test.ts
M	projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/liveManagedRepoComposition.d0.test.ts
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
M	projects/sfia-studio/app/features/project-assistant/f3/index.ts
M	projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
M	projects/sfia-studio/app/features/project-assistant/w2/deriveActualExecutionWorkFromProductContext.ts
M	projects/sfia-studio/app/lib/oa/cycle/application/pilotLifecycleTransitions.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
M	projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

### Untracked listing
```
?? projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
?? projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
?? projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
?? projects/sfia-studio/app/features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/resolveSealedDocsWriteWorktreePaths.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorDeterministicLaunchPort.ts
```

## 11. Diff stat
`62 files changed, 2179 insertions(+), 1705 deletions(-)`

## 12. Git Review Index
- Product seams: execution-attempt profile/gateway/start; f3 prepareM3; fakeProvider; TrajectorySurface (logic only); PRR 09 + Roadmap tip + manifest digests.
- Tests: all 44 CI FAIL suites + supporting harness.
- **No** Binding Product restore; **no** DocWrite specialized agent descriptor; **no** doctrine/method edits.

## 13. Contenu complet — fichiers créés
### projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
```typescript
/**
 * Progressive Attempt-A lineage for filesystem materialization → local-commit.
 *
 * Pure Product-truth: Attempt history + VERIFIED Artifact Evidence bindings.
 * Zero / multiple eligible candidates → fail closed (no latest/first heuristic).
 *
 * HISTORICAL durable reading: Evidence source `execution_attempt:docs_write`
 * and agent `agt:m4.cursor.bounded_docs_write` remain recognizable. That is not
 * Product admission of a docs_write launch path. Current materialization
 * Attempts use the Studio Cursor generalist agent id.
 */
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "./types";
import {
  evidenceMatchesContractLineage,
  expectedEvidenceIdentity,
} from "./qualifyExecutionContractCompletion";
import { STUDIO_CURSOR_GENERALIST_AGENT_ID } from "./realLaunchSafety";

/**
 * HISTORICAL durable Evidence source allowlist — not Product admission of
 * docs_write. Must stay aligned with
 * {@link FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES}.
 */
const FS_MATERIALIZATION_EVIDENCE_SOURCES = [
  "execution_attempt:docs_write",
] as const;

/** Historical Attempt agent — durable Evidence reading only. */
const HISTORICAL_BOUNDED_DOCS_WRITE_AGENT_ID =
  "agt:m4.cursor.bounded_docs_write" as const;

export type VerifiedFilesystemMaterializationPriorAttempt = {
  readonly priorAttemptId: string;
  readonly evidenceId: string;
  readonly artifactPath: string;
  readonly artifactDigest: string;
};

/** @deprecated Alias — historical naming retained for call-site continuity. */
export type VerifiedDocsWritePriorAttempt =
  VerifiedFilesystemMaterializationPriorAttempt;

export type ResolveVerifiedFilesystemMaterializationPriorAttemptInput = {
  readonly contract: Pick<
    ExecutionContract,
    | "executionContractId"
    | "projectId"
    | "cycleInstanceId"
    | "expectedOutputs"
    | "inputs"
  >;
  readonly attempts: readonly ExecutionAttempt[];
  readonly evidence: readonly Evidence[];
  /** Exclude current Attempt B when resolving prior A. */
  readonly excludeAttemptId?: string;
};

export type ResolveVerifiedFilesystemMaterializationPriorAttemptResult =
  | {
      readonly ok: true;
      readonly prior: VerifiedFilesystemMaterializationPriorAttempt;
    }
  | {
      readonly ok: false;
      readonly reason:
        | "docs_write_prior_none"
        | "docs_write_prior_ambiguous"
        | "docs_write_prior_incomplete";
      readonly candidateAttemptIds?: readonly string[];
    };

function expectedArtifactPaths(
  contract: ResolveVerifiedFilesystemMaterializationPriorAttemptInput["contract"],
): readonly string[] {
  const paths = new Set<string>();
  if (Array.isArray(contract.expectedOutputs)) {
    for (const o of contract.expectedOutputs) {
      const s = String(o).trim();
      if (s && s !== "artifact" && !s.includes(":") && s.includes("/")) {
        paths.add(s);
      }
    }
  }
  const inputs = contract.inputs;
  if (inputs && typeof inputs === "object") {
    const targetPath = (inputs as { targetPath?: unknown }).targetPath;
    if (typeof targetPath === "string" && targetPath.trim()) {
      paths.add(targetPath.trim());
    }
  }
  return [...paths];
}

function isAllowlistedFsMaterializationSource(source: string): boolean {
  for (const allowed of FS_MATERIALIZATION_EVIDENCE_SOURCES) {
    if (source === allowed || source.startsWith(`${allowed}.`)) return true;
  }
  return false;
}

function isDurableFsMaterializationAttemptAgent(
  selectedAgentRef: string | undefined,
): boolean {
  return (
    selectedAgentRef === STUDIO_CURSOR_GENERALIST_AGENT_ID ||
    selectedAgentRef === HISTORICAL_BOUNDED_DOCS_WRITE_AGENT_ID
  );
}

function isEligibleArtifact(
  ev: Evidence,
  expected: {
    projectId: string;
    cycleInstanceId?: string;
    executionContractId: string;
  },
  attemptId: string,
  allowedPaths: readonly string[],
): boolean {
  if (ev.status !== "verified") return false;
  if (ev.type !== "artifact") return false;
  if (!evidenceMatchesContractLineage(ev, expected)) return false;
  if (ev.bindings.executionAttemptId !== attemptId) return false;
  if (!isAllowlistedFsMaterializationSource(String(ev.source ?? ""))) {
    return false;
  }
  const loc = String(ev.location ?? "").trim();
  if (!loc) return false;
  if (allowedPaths.length > 0 && !allowedPaths.includes(loc)) return false;
  const digest = String(ev.digest ?? "").trim().toLowerCase();
  if (!digest.startsWith("sha256:") || digest.length < "sha256:".length + 64) {
    return false;
  }
  return true;
}

/**
 * Resolve the unique prior succeeded filesystem-materialization Attempt A with
 * matching VERIFIED Artifact Evidence for the current EC.
 */
export function resolveVerifiedFilesystemMaterializationPriorAttempt(
  input: ResolveVerifiedFilesystemMaterializationPriorAttemptInput,
): ResolveVerifiedFilesystemMaterializationPriorAttemptResult {
  const expected = expectedEvidenceIdentity({ contract: input.contract });
  const allowedPaths = expectedArtifactPaths(input.contract);

  type Candidate = VerifiedFilesystemMaterializationPriorAttempt;
  const candidates: Candidate[] = [];

  for (const attempt of input.attempts) {
    if (
      input.excludeAttemptId &&
      attempt.attemptId === input.excludeAttemptId
    ) {
      continue;
    }
    if (attempt.executionContractId !== input.contract.executionContractId) {
      continue;
    }
    if (attempt.status !== "succeeded") continue;
    if (!isDurableFsMaterializationAttemptAgent(attempt.selectedAgentRef)) {
      continue;
    }

    const matching = input.evidence.filter((ev) =>
      isEligibleArtifact(ev, expected, attempt.attemptId, allowedPaths),
    );
    if (matching.length === 0) continue;
    if (matching.length > 1) {
      return {
        ok: false,
        reason: "docs_write_prior_ambiguous",
        candidateAttemptIds: [attempt.attemptId],
      };
    }
    const ev = matching[0]!;
    candidates.push({
      priorAttemptId: attempt.attemptId,
      evidenceId: ev.evidenceId,
      artifactPath: String(ev.location).trim(),
      artifactDigest: String(ev.digest).trim().toLowerCase(),
    });
  }

  if (candidates.length === 0) {
    return { ok: false, reason: "docs_write_prior_none" };
  }
  if (candidates.length > 1) {
    return {
      ok: false,
      reason: "docs_write_prior_ambiguous",
      candidateAttemptIds: candidates.map((c) => c.priorAttemptId),
    };
  }

  const only = candidates[0]!;
  if (!only.artifactPath || !only.artifactDigest.startsWith("sha256:")) {
    return { ok: false, reason: "docs_write_prior_incomplete" };
  }
  return { ok: true, prior: only };
}

/** @deprecated Alias — historical naming retained for call-site continuity. */
export const resolveVerifiedDocsWritePriorAttempt =
  resolveVerifiedFilesystemMaterializationPriorAttempt;

```
### projects/sfia-studio/app/lib/oa/execution-attempt/application/resolveSealedDocsWriteWorktreePaths.ts
```typescript
/**
 * Resolve sealed repo-relative docsWrite paths under a prepared worktree root.
 * Canonical EC/docsWriteSpec paths stay repo-relative; absolute forms are for
 * Cursor external instruction only (and fail-closed confinement checks).
 */
import path from "node:path";

export type ResolveSealedDocsWriteWorktreePathsResult =
  | {
      ok: true;
      sealedTargetPath: string;
      absoluteTargetPath: string;
      sealedPathAllowlist: readonly string[];
      absolutePathAllowlist: readonly string[];
    }
  | { ok: false; reason: string };

function normalizeSealedRel(p: string): string | null {
  const n = p.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "").trim();
  if (!n || n.startsWith("/") || n.split("/").includes("..")) {
    return null;
  }
  return n;
}

function resolveUnderWorktree(
  worktreeRoot: string,
  sealedRel: string,
): { abs: string; root: string } | null {
  const root = path.resolve(worktreeRoot);
  const abs = path.resolve(root, ...sealedRel.split("/"));
  if (abs !== root && !abs.startsWith(root + path.sep)) {
    return null;
  }
  return { abs, root };
}

/**
 * Derive absolute Cursor instruction paths from sealed repo-relative target +
 * allowlist under the prepared worktree. Does not rewrite sealed EC inputs.
 */
export function resolveSealedDocsWriteWorktreePaths(input: {
  worktreeRoot: string;
  targetPath: string;
  pathAllowlist: readonly string[];
}): ResolveSealedDocsWriteWorktreePathsResult {
  const sealedTargetPath = normalizeSealedRel(input.targetPath);
  if (!sealedTargetPath) {
    return { ok: false, reason: "target_path_invalid" };
  }

  const targetResolved = resolveUnderWorktree(
    input.worktreeRoot,
    sealedTargetPath,
  );
  if (!targetResolved) {
    return { ok: false, reason: "target_path_escape" };
  }

  if (!input.pathAllowlist.length) {
    return { ok: false, reason: "path_allowlist_empty" };
  }

  const sealedPathAllowlist: string[] = [];
  const absolutePathAllowlist: string[] = [];
  for (const entry of input.pathAllowlist) {
    const sealed = normalizeSealedRel(entry);
    if (!sealed) {
      return { ok: false, reason: "path_allowlist_invalid" };
    }
    const allowResolved = resolveUnderWorktree(input.worktreeRoot, sealed);
    if (!allowResolved) {
      return { ok: false, reason: "path_allowlist_escape" };
    }
    sealedPathAllowlist.push(sealed);
    absolutePathAllowlist.push(allowResolved.abs);
  }

  const underAllowlist = sealedPathAllowlist.some(
    (root) =>
      sealedTargetPath === root || sealedTargetPath.startsWith(`${root}/`),
  );
  if (!underAllowlist) {
    return { ok: false, reason: "target_outside_allowlist" };
  }

  return {
    ok: true,
    sealedTargetPath,
    absoluteTargetPath: targetResolved.abs,
    sealedPathAllowlist,
    absolutePathAllowlist,
  };
}

```
### projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/fakeCursorDeterministicLaunchPort.ts
```typescript
/**
 * TEST-ONLY — deterministic fake Cursor external boundary (filesystem + Git
 * lifecycle effects). Writes allowlisted text files into an isolated worktree.
 * Same Product StartExecution / Gate D path as REAL; substitutes launch only.
 * ZERO REAL Cursor. ZERO remote Git.
 *
 * AKG-M5: not a Product docs_write admission path. Historical export alias
 * `FakeDocsWriteLaunchPort` retained for DET fixture continuity.
 *
 * D-GCEC-15: honors AuthorizedExecutionSlice — filesystem + optional fake Git
 * effects via shared FakeCursorGitExternalState.
 *
 * CR-GCEC-02: prefer request.docsWriteSpec; constructor options are fallback
 * for unit tests only.
 */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import {
  M4_REAL_GATEWAY_ADAPTER_ID,
  type RealExecutionLaunchPort,
  type RealLaunchRequest,
  type RealLaunchResult,
  type RealProcessObservation,
} from "@/lib/oa/execution-attempt";
import {
  assertArtifactWriteModeAtExecution,
  isAutomaticProductDocsWriteTargetPath,
} from "@/lib/oa/project/domain/artifactTargetRouting";
import {
  STUDIO_CURSOR_GENERALIST_ACTION,
} from "./studioCursorGeneralistAgent";
import { M4_BOUNDED_LOCAL_COMMIT_ACTION } from "./m4BoundedLocalCommitCursorAgent";
import { M4_BOUNDED_REMOTE_PUSH_ACTION } from "./m4BoundedRemotePushCursorAgent";
import { M4_BOUNDED_PR_CREATE_ACTION } from "./m4BoundedPrCreateCursorAgent";
import { M4_BOUNDED_PR_MERGE_ACTION } from "./m4BoundedPrMergeCursorAgent";
import {
  M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID,
  M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID,
  M4_BOUNDED_PR_MERGE_CURSOR_AGENT_ID,
  M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID,
} from "../domain/realLaunchSafety";

/** Historical action token — durable fixture recognition only. */
const HISTORICAL_BOUNDED_DOCS_WRITE_ACTION =
  "cursor.docs_write.apply" as const;
import { isBoundedGitCommitOnlySlice } from "../domain/verifyLocalCommitFacts";
import { buildGitCommitLaunchSpec } from "../domain/gitCommitLaunchSpec";
import {
  buildGitPushLaunchSpec,
  isBoundedGitPushOnlySlice,
} from "../domain/gitPushLaunchSpec";
import {
  assertLocalBranchRefMatchesExpectedSha,
  assertRemoteUrlMatchesRepositoryRef,
} from "../domain/assertLocalBranchRefMatchesExpectedSha";
import {
  buildGitPrCreateLaunchSpec,
  isBoundedGitPrCreateOnlySlice,
} from "../domain/gitPrCreateLaunchSpec";
import {
  buildGitPrMergeLaunchSpec,
  isBoundedGitPrMergeOnlySlice,
} from "../domain/gitPrMergeLaunchSpec";
import type {
  CursorAuthorizedEffectId,
  CursorExecutionReport,
  CursorGitEffectClaims,
} from "../domain/cursorExecutionReport";
import { mintCursorExecutionReportId } from "../domain/cursorExecutionReport";
import {
  FakeCursorGitExternalState,
} from "./fakeCursorGitExternalState";

export type FakeDocsWriteLaunchPortOptions = {
  worktreeRoot: string;
  pathAllowlist: readonly string[];
  /** Relative path written on success (must be allowlisted). Fallback only. */
  targetPath?: string;
  failLaunch?: boolean;
  content?: string;
  /** Optional fallback repositoryRef when docsWriteSpec absent. */
  repositoryRef?: string;
  /** Shared mutable Fake Cursor Git/GitHub external state (D-GCEC-15). */
  gitState?: FakeCursorGitExternalState;
  /** Default branch name used for fake commit/push when not otherwise known. */
  defaultBranch?: string;
  /**
   * TestOnly — control CursorExecutionReport stdout claim emission.
   * Default `emit` (nominal). `omit` / `malformed` prove fail-closed handoff.
   */
  cursorReportMode?: "emit" | "omit" | "malformed";
};

const DEFAULT_FILESYSTEM_EFFECTS: readonly CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
];

const ALL_PROGRESSIVE_EFFECTS: readonly CursorAuthorizedEffectId[] = [
  "filesystem.create",
  "filesystem.modify",
  "validation.run",
  "git.commit",
  "git.push",
  "github.pr.create",
  "github.pr.merge",
];

function normalizeRel(p: string): string {
  const n = p.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "");
  if (!n || n.startsWith("/") || n.split("/").includes("..")) {
    throw new Error("PATH_ESCAPE");
  }
  return n;
}

function isAllowlisted(rel: string, allowlist: readonly string[]): boolean {
  const n = normalizeRel(rel);
  return allowlist.some((a) => {
    const root = normalizeRel(a);
    return n === root || n.startsWith(`${root}/`);
  });
}

function resolveAuthorizedEffects(
  request: RealLaunchRequest,
): {
  authorized: Set<CursorAuthorizedEffectId>;
  blocked: CursorAuthorizedEffectId[];
} {
  const fromRequest = request.authorizedEffects;
  const slice = request.authorizedExecutionSlice;
  if (fromRequest && fromRequest.length > 0) {
    const authorized = new Set<CursorAuthorizedEffectId>(fromRequest);
    const blocked =
      (slice?.blockedEffects as CursorAuthorizedEffectId[] | undefined) ??
      ALL_PROGRESSIVE_EFFECTS.filter((e) => !authorized.has(e));
    return { authorized, blocked };
  }
  if (slice?.authorizedEffects?.length) {
    const authorized = new Set(
      slice.authorizedEffects as CursorAuthorizedEffectId[],
    );
    const blocked =
      (slice.blockedEffects as CursorAuthorizedEffectId[] | undefined) ??
      ALL_PROGRESSIVE_EFFECTS.filter((e) => !authorized.has(e));
    return { authorized, blocked };
  }
  // Default: filesystem only (CR-GCEC-15 — Git never inferred).
  const authorized = new Set<CursorAuthorizedEffectId>(DEFAULT_FILESYSTEM_EFFECTS);
  return {
    authorized,
    blocked: [
      "filesystem.delete",
      "git.commit",
      "git.push",
      "github.pr.create",
      "github.pr.update",
      "github.pr.merge",
    ],
  };
}

export class FakeDocsWriteLaunchPort implements RealExecutionLaunchPort {
  readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
  readonly externalEffects = true as const;
  /** Deterministic Fake substitution — never Cursor OS REAL proof. */
  readonly boundaryProofMode = "deterministic_fake" as const;
  readonly calls: RealLaunchRequest[] = [];
  readonly touchedFiles: string[] = [];
  lastDigest: string | null = null;
  lastReport: CursorExecutionReport | null = null;
  private readonly options: FakeDocsWriteLaunchPortOptions;
  private readonly observations = new Map<string, RealProcessObservation>();
  readonly gitState: FakeCursorGitExternalState;

  constructor(options: FakeDocsWriteLaunchPortOptions) {
    this.options = options;
    this.gitState =
      options.gitState ??
      new FakeCursorGitExternalState({
        worktreeRoot: options.worktreeRoot,
        initialBranch: options.defaultBranch ?? "main",
      });
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    this.calls.push(request);
    if (this.options.failLaunch) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "FAKE_DOCS_WRITE_LAUNCH_FAILED",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }
    const { authorized, blocked } = resolveAuthorizedEffects(request);
    const wantsCommitProfile = Boolean(request.gitCommitSpec);
    const wantsPushProfile = Boolean(request.gitPushSpec);
    const wantsPrCreateProfile = Boolean(request.gitPrCreateSpec);
    const wantsPrMergeProfile = Boolean(request.gitPrMergeSpec);
    if (wantsCommitProfile) {
      if (!isBoundedGitCommitOnlySlice([...authorized])) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason:
            authorized.size === 0
              ? "git_commit_authorized_effects_empty"
              : "git_commit_slice_not_commit_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (
        request.selectedAgentRef !== M4_BOUNDED_LOCAL_COMMIT_CURSOR_AGENT_ID
      ) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason:
            request.selectedAgentRef === "agt:m4.cursor.bounded_docs_write"
              ? "git_commit_agent_capability_bypass"
              : "git_commit_selected_agent_invalid",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (!request.workspaceContinuation) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_commit_continuation_required",
          realProcessInvoked: false,
          detailCode: "REAL_WORKSPACE_INVALID",
        };
      }
      const revalidated = buildGitCommitLaunchSpec({
        repositoryRef: request.gitCommitSpec!.repositoryRef,
        expectedParentSha: request.gitCommitSpec!.expectedParentSha,
        exactPaths: request.gitCommitSpec!.exactPaths,
        commitMessage: request.gitCommitSpec!.commitMessage,
        ...(request.gitCommitSpec!.branchOrRef
          ? { branchOrRef: request.gitCommitSpec!.branchOrRef }
          : {}),
      });
      if (!revalidated.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: revalidated.reason,
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
    }
    if (wantsPushProfile) {
      if (!isBoundedGitPushOnlySlice([...authorized])) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_push_slice_not_push_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (request.selectedAgentRef !== M4_BOUNDED_REMOTE_PUSH_CURSOR_AGENT_ID) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_push_agent_capability_bypass",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const revalidated = buildGitPushLaunchSpec({
        repositoryRef: request.gitPushSpec!.repositoryRef,
        remoteName: request.gitPushSpec!.remoteName,
        branchName: request.gitPushSpec!.branchName,
        expectedCommitSha: request.gitPushSpec!.expectedCommitSha,
        force: false,
        delete: false,
        noTags: true,
      });
      if (!revalidated.ok) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: revalidated.reason,
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
    }
    if (wantsPrCreateProfile) {
      if (!isBoundedGitPrCreateOnlySlice([...authorized])) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_create_slice_not_create_only",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      if (request.selectedAgentRef !== M4_BOUNDED_PR_CREATE_CURSOR_AGENT_ID) {
        return {
          outcome: "reject",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "git_pr_create_agent_capability_bypass",
          realProcessInvoked: false,
          detailCode: "REAL_AGENT_PROFILE_INVALID",
        };
      }
      const revalidated = buildGitPrCreateLaunchSpec({
        repositoryRef: request.gitPrCreateSpec!.repositoryRef,
        headBranch: request.gitPrCreateSpec!.headBranch,
        baseBranch: request.gitPrCreateSpec!.baseBranch,
        title: request.gitPrCreateSpec!.title,
        expectedHeadSha: request.gitPrCreateSpec!.expectedHeadSha,
        ...(request.git
… [truncated; full file 29680 bytes on disk]
```
### projects/sfia-studio/app/features/project-assistant/f3/completeBoundedDocsWriteLaunch.ts
```typescript
/**
 * AKG-M5: historical name retained — filesystem materialization completion /
 * artifact Evidence ingest. Not Product docs_write admission.
 */
/**
 * CR-GCEC-04 / D-GCEC-11 / CR-GCEC-14 — complete bounded docs-write launch.
 * Awaits observation, independently verifies workspace file effects (no stdout trust).
 */
import {
  type ExecutionAttempt,
  type ExecutionAttemptServices,
  type RealProcessObservation,
  parseCursorExecutionReport,
  type CursorExecutionReport,
  verifyWorkspaceFileEffects,
} from "@/lib/oa/execution-attempt";
import {
  NodeLocalGitStatusDiffPort,
  type LocalGitStatusDiffPort,
} from "@/lib/oa/git-ports";
import {
  completeBoundedReadOnlyLaunch,
  type CompleteBoundedReadOnlyLaunchResult,
} from "./completeBoundedReadOnlyLaunch";

export type DocsWriteCompletionFacts = {
  attemptId: string;
  processRef: string;
  targetPath: string;
  digest: string;
  touchedFiles: string[];
  worktreeRef: string | null;
  stdout: string;
  /** Cursor claim report when present — never trusted alone. */
  cursorReport?: CursorExecutionReport;
};

export type CompleteBoundedDocsWriteLaunchResult =
  | {
      ok: true;
      status: "succeeded";
      attempt: ExecutionAttempt;
      observation: RealProcessObservation;
      facts: DocsWriteCompletionFacts;
    }
  | Extract<
      CompleteBoundedReadOnlyLaunchResult,
      { ok: true; status: "running" | "failed" | "timeout" } | { ok: false }
    >;

function tryParseReportFromStdout(stdout: string): CursorExecutionReport | null {
  const marker = "CURSOR_EXECUTION_REPORT_JSON=";
  const idx = stdout.indexOf(marker);
  if (idx < 0) return null;
  const json = stdout.slice(idx + marker.length).trim().split("\n")[0] ?? "";
  try {
    const parsed = parseCursorExecutionReport(JSON.parse(json));
    return parsed.ok ? parsed.report : null;
  } catch {
    return null;
  }
}

export async function completeBoundedDocsWriteLaunch(input: {
  attempt: ExecutionAttempt;
  services: ExecutionAttemptServices;
  /** Expected relative target path (from docsWriteSpec / EC.inputs). */
  targetPath?: string;
  pathAllowlist?: readonly string[];
  /** Independent full-worktree status/diff (CR-GCEC-14). */
  statusDiffPort?: LocalGitStatusDiffPort;
  /** Test-only injectable porcelain when git unavailable. */
  nameStatusText?: string;
  /** See completeBoundedReadOnlyLaunch.awaitIfPending. */
  awaitIfPending?: boolean;
}): Promise<CompleteBoundedDocsWriteLaunchResult> {
  const base = await completeBoundedReadOnlyLaunch({
    attempt: input.attempt,
    services: input.services,
    awaitIfPending: input.awaitIfPending,
  });
  if (!base.ok) return base;
  if (base.status !== "succeeded") {
    return base as CompleteBoundedDocsWriteLaunchResult;
  }

  const stdout = base.observation.stdout ?? "";
  const cursorReport = tryParseReportFromStdout(stdout);
  const targetPath =
    input.targetPath?.trim() ||
    cursorReport?.fileEffects?.created[0] ||
    cursorReport?.fileEffects?.modified[0] ||
    "docs/functional-design.md";
  const worktreeRef = base.observation.worktreeRef ?? null;
  const pathAllowlist =
    input.pathAllowlist ??
    (targetPath.startsWith("docs/") ? ["docs/"] : [targetPath]);

  if (!worktreeRef) {
    return {
      ok: false,
      code: "DOCS_WRITE_WORKTREE_MISSING",
      message: "Docs-write completion missing worktree for independent verify.",
    };
  }

  const statusDiffPort =
    input.statusDiffPort ??
    (input.nameStatusText ? undefined : new NodeLocalGitStatusDiffPort());

  const verified = await verifyWorkspaceFileEffects({
    worktreePath: worktreeRef,
    pathAllowlist,
    targetPath,
    report: cursorReport,
    ...(statusDiffPort ? { statusDiffPort } : {}),
    ...(input.nameStatusText ? { nameStatusText: input.nameStatusText } : {}),
  });

  if (!verified.ok) {
    return {
      ok: false,
      code: "DOCS_WRITE_WORKSPACE_VERIFY_FAILED",
      message: verified.reason,
    };
  }

  return {
    ok: true,
    status: "succeeded",
    attempt: base.attempt,
    observation: base.observation,
    facts: {
      attemptId: input.attempt.attemptId,
      processRef: base.observation.processRef,
      targetPath: verified.targetPath,
      digest: verified.digest,
      touchedFiles: verified.touchedFiles,
      worktreeRef,
      stdout: base.facts?.stdout ?? stdout,
      ...(cursorReport ? { cursorReport } : {}),
    },
  };
}

```
### projects/sfia-studio/app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts
```typescript
/**
 * AKG-M5: historical name retained — filesystem materialization completion /
 * artifact Evidence ingest. Not Product docs_write admission.
 */
/**
 * CR-GCEC-04 — ingest docs-write artifact Evidence + ReviewBundle.
 * Strong bindings: projectId, cycleInstanceId, executionContractId, executionAttemptId.
 *
 * POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01:
 * When artifact bytes are supplied, persist under existing Evidence refs layout
 * (`external_payload_ref`) so Nora can review without hot worktree / Pilot paste.
 * CursorExecutionReport claim may be persisted alongside (still NOT Evidence).
 */
import type { Digest } from "@/lib/oa/doctrine";
import type {
  ActorReference,
  EvidenceReviewServices,
} from "@/lib/oa/evidence-review";
import type { CursorExecutionReport } from "@/lib/oa/execution-attempt";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
import {
  persistDocsWriteArtifactReviewMaterial,
  resolveProductEvidenceRefsRoot,
} from "./persistDocsWriteArtifactReviewMaterial";

export type IngestDocsWriteArtifactEvidenceInput = {
  evidenceReviewServices: EvidenceReviewServices;
  projectId: string;
  cycleInstanceId: string;
  executionContractId: string;
  executionAttemptId: string;
  targetPath: string;
  digest: string;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
  /**
   * Independently verified artifact bytes from the hot worktree.
   * When present → durable external_payload_ref (restart-safe review).
   * When absent → legacy metadata_only (location = relative targetPath).
   */
  artifactBytes?: Buffer;
  cursorReport?: CursorExecutionReport | null;
  /** Absolute refs root (defaults beside Product SQLite). */
  refsRoot?: string;
};

export type IngestDocsWriteArtifactEvidenceResult =
  | {
      ok: true;
      evidenceId: string;
      reviewBundleId: string;
      evidenceStatus: string;
      storageMode: "metadata_only" | "external_payload_ref";
      durableArtifactAbsolutePath?: string;
      durableCursorReportAbsolutePath?: string | null;
    }
  | { ok: false; code: string; message: string };

export async function ingestDocsWriteArtifactEvidence(
  input: IngestDocsWriteArtifactEvidenceInput,
): Promise<IngestDocsWriteArtifactEvidenceResult> {
  const actor = input.actor ?? LOCAL_MORRIS_ACTOR;
  const segment = input.executionAttemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
  const reviewBundleId = `rb:docs-write:${segment}`.slice(0, 128);
  const digest = input.digest as Digest;

  let location = input.targetPath;
  let storageMode: "metadata_only" | "external_payload_ref" = "metadata_only";
  let durableArtifactAbsolutePath: string | undefined;
  let durableCursorReportAbsolutePath: string | null | undefined;

  if (input.artifactBytes) {
    const refsRoot = resolveProductEvidenceRefsRoot(input.refsRoot);
    const persisted = persistDocsWriteArtifactReviewMaterial({
      refsRoot,
      attemptId: input.executionAttemptId,
      artifactBytes: input.artifactBytes,
      expectedDigest: input.digest,
      targetPath: input.targetPath,
      cursorReport: input.cursorReport ?? null,
    });
    if (!persisted.ok) {
      return {
        ok: false,
        code: persisted.code,
        message: persisted.message,
      };
    }
    location = persisted.artifactAbsolutePath;
    storageMode = "external_payload_ref";
    durableArtifactAbsolutePath = persisted.artifactAbsolutePath;
    durableCursorReportAbsolutePath = persisted.cursorReportAbsolutePath;

    // Dual-write Generic Execution Review Material (D-ER-04) — transitional bridge.
    // docs_write persist remains compatibility; generic path is the nominal target.
    if (input.cursorReport) {
      const { finalizeGenericExecutionReview } = await import(
        "./finalizeGenericExecutionReview"
      );
      await finalizeGenericExecutionReview({
        refsRoot,
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        executionContractId: input.executionContractId,
        attemptId: input.executionAttemptId,
        repositoryRef: input.cursorReport.repositoryRef,
        baseSha: input.cursorReport.baseSha,
        cursorReport: input.cursorReport,
        extraReviewItems: [
          {
            kind: "artifact",
            logicalPath: input.targetPath,
            label: `artifact: ${input.targetPath}`,
            bytes: input.artifactBytes,
            summary: input.digest,
          },
        ],
      });
    }
  }

  const registered = await input.evidenceReviewServices.registerEvidence.execute({
    evidenceId,
    type: "artifact",
    status: "available",
    digest,
    location,
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    classification: "internal",
    storageMode,
    bindings: {
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId,
      executionContractId: input.executionContractId,
      executionAttemptId: input.executionAttemptId,
    },
    actor,
    correlationId: input.correlationId ?? `cor:docs-write:${segment}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:docs-write:${evidenceId}`,
  });
  if (!registered.ok) {
    return {
      ok: false,
      code: registered.error.detailCode,
      message: registered.error.message,
    };
  }

  let evidenceStatus = registered.evidence.status;

  // external_payload_ref → VerifyEvidenceIntegrity when possible (filesystem probe).
  if (
    storageMode === "external_payload_ref" &&
    registered.evidence.status === "available" &&
    registered.evidence.digest
  ) {
    const verified =
      await input.evidenceReviewServices.verifyEvidenceIntegrity.execute({
        evidenceId: registered.evidence.evidenceId,
        expectedVersion: registered.evidence.version,
        actor,
        correlationId: input.correlationId ?? `cor:docs-write-verify:${segment}`,
        nowIso: input.nowIso,
      });
    if (verified.ok && verified.evidence) {
      evidenceStatus = verified.evidence.status;
    }
  }

  const bundle = await input.evidenceReviewServices.createReviewBundle.execute({
    reviewBundleId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    executionContractId: input.executionContractId,
    evidenceIds: [evidenceId],
    actor,
    correlationId: input.correlationId ?? `cor:docs-write-rb:${segment}`,
    nowIso: input.nowIso,
    idempotencyKey: `idem:docs-write-rb:${reviewBundleId}`,
  });
  if (!bundle.ok) {
    return {
      ok: false,
      code: bundle.error.detailCode,
      message: bundle.error.message,
    };
  }

  return {
    ok: true,
    evidenceId,
    reviewBundleId,
    evidenceStatus,
    storageMode,
    ...(durableArtifactAbsolutePath
      ? { durableArtifactAbsolutePath }
      : {}),
    ...(durableCursorReportAbsolutePath !== undefined
      ? { durableCursorReportAbsolutePath }
      : {}),
  };
}

```
### projects/sfia-studio/app/features/project-assistant/f3/persistDocsWriteArtifactReviewMaterial.ts
```typescript
/**
 * POST-EXECUTION-CURSOR-REPORT-ARTIFACT-HANDOFF-01 —
 * Persist docs_write artifact bytes + CursorExecutionReport claim under the
 * existing Evidence refs filesystem layout (no new store/table).
 *
 * Artifact content becomes restart-safe for Nora review.
 * CursorExecutionReport remains a CLAIM file — not Evidence by itself.
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { Digest } from "@/lib/oa/doctrine";
import type { CursorExecutionReport } from "@/lib/oa/execution-attempt";

/** Soft cap for Nora-facing artifact body (bytes). Truncation → PARTIAL. */
export const DOCS_WRITE_ARTIFACT_NORA_REVIEW_BYTE_CAP = 12_000;

export type DocsWriteArtifactReviewCompleteness = "FULL" | "PARTIAL";

export function docsWriteArtifactRefsRelative(
  attemptId: string,
  targetPath?: string,
): {
  readonly artifact: string;
  readonly cursorReport: string;
} {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  const safeTarget = (targetPath ?? "artifact.bin")
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .split("/")
    .filter((p) => p && p !== "." && p !== "..")
    .join("/");
  return {
    artifact: `refs/attempts/${segment}/docs-write-artifact/${safeTarget || "artifact.bin"}`,
    cursorReport: `refs/attempts/${segment}/cursor-execution-report.json`,
  };
}

export function digestUtf8OrBytes(content: string | Buffer): Digest {
  const buf = typeof content === "string" ? Buffer.from(content, "utf8") : content;
  return `sha256:${createHash("sha256").update(buf).digest("hex")}`;
}

export function persistDocsWriteArtifactReviewMaterial(input: {
  readonly refsRoot: string;
  readonly attemptId: string;
  readonly artifactBytes: Buffer;
  /** Independent digest already verified from the hot worktree (must match). */
  readonly expectedDigest: string;
  /** Relative contract target path — preserved under durable refs tree. */
  readonly targetPath?: string;
  readonly cursorReport?: CursorExecutionReport | null;
}):
  | {
      ok: true;
      artifactAbsolutePath: string;
      artifactDigest: Digest;
      cursorReportAbsolutePath: string | null;
    }
  | { ok: false; code: string; message: string } {
  const computed = digestUtf8OrBytes(input.artifactBytes);
  if (computed !== input.expectedDigest) {
    return {
      ok: false,
      code: "DOCS_WRITE_ARTIFACT_DIGEST_MISMATCH",
      message:
        "Durable artifact digest does not match independently verified digest.",
    };
  }
  try {
    fs.mkdirSync(input.refsRoot, { recursive: true });
    const rel = docsWriteArtifactRefsRelative(
      input.attemptId,
      input.targetPath,
    );
    const artifactAbsolutePath = path.join(input.refsRoot, rel.artifact);
    fs.mkdirSync(path.dirname(artifactAbsolutePath), { recursive: true });
    fs.writeFileSync(artifactAbsolutePath, input.artifactBytes);
    let cursorReportAbsolutePath: string | null = null;
    if (input.cursorReport) {
      cursorReportAbsolutePath = path.join(input.refsRoot, rel.cursorReport);
      fs.writeFileSync(
        cursorReportAbsolutePath,
        `${JSON.stringify(input.cursorReport)}\n`,
        "utf8",
      );
    }
    return {
      ok: true,
      artifactAbsolutePath,
      artifactDigest: computed,
      cursorReportAbsolutePath,
    };
  } catch (err) {
    return {
      ok: false,
      code: "DOCS_WRITE_ARTIFACT_PERSIST_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

export function loadDocsWriteArtifactReviewMaterial(input: {
  readonly refsRoot: string;
  readonly attemptId: string;
  readonly targetPath?: string;
  /** Soft Nora cap — never claim FULL when truncated. */
  readonly byteCap?: number;
}):
  | {
      ok: true;
      artifactText: string;
      completeness: DocsWriteArtifactReviewCompleteness;
      cursorReport: CursorExecutionReport | null;
      artifactAbsolutePath: string;
      cursorReportAbsolutePath: string | null;
    }
  | { ok: false; code: string; message: string } {
  const rel = docsWriteArtifactRefsRelative(input.attemptId, input.targetPath);
  let artifactAbsolutePath = path.join(input.refsRoot, rel.artifact);
  const cursorReportAbsolutePath = path.join(input.refsRoot, rel.cursorReport);
  if (!fs.existsSync(artifactAbsolutePath) && !input.targetPath) {
    // Fallback: first file under docs-write-artifact/ for the attempt.
    const dir = path.join(
      input.refsRoot,
      `refs/attempts/${input.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}/docs-write-artifact`,
    );
    if (fs.existsSync(dir)) {
      const walk = (d: string): string | null => {
        for (const name of fs.readdirSync(d)) {
          const child = path.join(d, name);
          const st = fs.statSync(child);
          if (st.isFile()) return child;
          if (st.isDirectory()) {
            const nested = walk(child);
            if (nested) return nested;
          }
        }
        return null;
      };
      const found = walk(dir);
      if (found) artifactAbsolutePath = found;
    }
  }
  if (!fs.existsSync(artifactAbsolutePath)) {
    return {
      ok: false,
      code: "DOCS_WRITE_ARTIFACT_REVIEW_MISSING",
      message: "Durable docs_write artifact review material introuvable.",
    };
  }
  try {
    const bytes = fs.readFileSync(artifactAbsolutePath);
    const cap = input.byteCap ?? DOCS_WRITE_ARTIFACT_NORA_REVIEW_BYTE_CAP;
    const truncated = bytes.byteLength > cap;
    const slice = truncated ? bytes.subarray(0, cap) : bytes;
    const artifactText = slice.toString("utf8");
    let cursorReport: CursorExecutionReport | null = null;
    if (fs.existsSync(cursorReportAbsolutePath)) {
      try {
        const raw = JSON.parse(
          fs.readFileSync(cursorReportAbsolutePath, "utf8"),
        ) as unknown;
        if (
          raw &&
          typeof raw === "object" &&
          (raw as { schemaVersion?: unknown }).schemaVersion ===
            "oa.cursor-execution-report.1"
        ) {
          cursorReport = raw as CursorExecutionReport;
        }
      } catch {
        cursorReport = null;
      }
    }
    return {
      ok: true,
      artifactText,
      completeness: truncated ? "PARTIAL" : "FULL",
      cursorReport,
      artifactAbsolutePath,
      cursorReportAbsolutePath: fs.existsSync(cursorReportAbsolutePath)
        ? cursorReportAbsolutePath
        : null,
    };
  } catch (err) {
    return {
      ok: false,
      code: "DOCS_WRITE_ARTIFACT_REVIEW_READ_FAILED",
      message: err instanceof Error ? err.message : String(err),
    };
  }
}

/** Default refs root beside Product SQLite (same convention as mission-result-refs). */
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
      : path.join(process.cwd(), "..", ".sfia-exec", "product", "oa-product.sqlite");
  return path.join(path.dirname(db), "mission-result-refs");
}

```
### projects/sfia-studio/app/features/project-assistant/w2/resolveDocsWriteArtifactAbsolutePath.ts
```typescript
/**
 * Resolve absolute filesystem path of a docs_write artifact for server-owned
 * conformity verification (ZERO client path trust).
 *
 * Priority:
 * 1) explicit worktreeRef from the just-completed launch (hottest)
 * 2) Evidence.location when already absolute and present
 * 3) managedRepoRootBase + repository identity + relative targetPath
 */
import { existsSync } from "node:fs";
import path from "node:path";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { Evidence } from "@/lib/oa/evidence-review";
import { sanitizeManagedRepoIdentity } from "@/lib/oa/execution-attempt/infrastructure/managedProjectRepositoryResolver";
import { resolveManagedRepoRootBaseFromEnv } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";

function boundInputsOf(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
): Record<string, unknown> {
  const bound = attempt.boundExecutionContract?.semanticMaterial?.inputs;
  if (bound && typeof bound === "object") return bound as Record<string, unknown>;
  return (contract.inputs ?? {}) as Record<string, unknown>;
}

function relativeTargetPath(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
  evidence: Evidence | null,
): string | null {
  const inputs = boundInputsOf(attempt, contract);
  const fromBound =
    typeof inputs.targetPath === "string" ? inputs.targetPath.trim() : "";
  if (fromBound) return fromBound;
  const loc = evidence?.location?.trim() ?? "";
  if (loc && !path.isAbsolute(loc)) return loc;
  return null;
}

function repositoryIdentity(
  attempt: ExecutionAttempt,
  contract: ExecutionContract,
): string | null {
  const inputs = boundInputsOf(attempt, contract);
  for (const key of [
    "repositoryBindingIdentity",
    "repositoryIdentity",
    "repositoryRef",
    "targetRepositoryRef",
  ] as const) {
    const v = inputs[key];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return null;
}

export function resolveDocsWriteArtifactAbsolutePath(input: {
  readonly attempt: ExecutionAttempt;
  readonly contract: ExecutionContract;
  readonly evidence: Evidence | null;
  /** Hot worktree from the same process that just completed docs_write. */
  readonly worktreeRef?: string | null;
  readonly managedRepoRootBase?: string | null;
}): string | null {
  const rel = relativeTargetPath(input.attempt, input.contract, input.evidence);
  const candidates: string[] = [];

  const wt = input.worktreeRef?.trim();
  if (wt && rel) {
    candidates.push(path.resolve(wt, ...rel.split("/")));
  }

  const loc = input.evidence?.location?.trim();
  if (loc && path.isAbsolute(loc)) {
    candidates.push(loc);
  }

  const base =
    input.managedRepoRootBase?.trim() ||
    resolveManagedRepoRootBaseFromEnv() ||
    undefined;
  const identity = repositoryIdentity(input.attempt, input.contract);
  if (base && identity && rel) {
    try {
      const sanitized = sanitizeManagedRepoIdentity(identity);
      candidates.push(path.resolve(base, sanitized, ...rel.split("/")));
    } catch {
      // identity invalid — skip managed candidate
    }
  }

  for (const abs of candidates) {
    if (existsSync(abs)) return abs;
  }
  return null;
}

```


## 14. Sections / diffs utiles (extraits)
### resolveAttemptExecutionProfile.ts (extrait)
```diff
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
index db735e53..36f223b7 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveAttemptExecutionProfile.ts
@@ -1,7 +1,9 @@
 /**
  * D-GCEC-AGENT-01 — AttemptExecutionProfile (non-persistent).
- * CORR-D-GCEC-AGENT-01 / GCEC-GIT-LIFECYCLE-E2E-01 PATH B:
- * progressive docs-write → local-commit → remote_push → pr_create → pr_merge.
+ * CORR-D-GCEC-AGENT-01 / GCEC-GIT-LIFECYCLE-E2E-01 PATH B / AKG-M5:
+ * progressive filesystem materialization → local-commit → remote_push →
+ * pr_create → pr_merge, gated on executable/authorized effects (not on a
+ * Product docs_write action or specialized DocWrite agent).
  *
  * Server-derived executor sufficiency for THIS Attempt's current eligible slice.
  * NOT an authority source, NOT client-authoritative, NOT persisted.
@@ -61,6 +63,10 @@ import {
 } from "./resolveVerifiedRemotePushPriorAttempt";
 import { resolveVerifiedRemotePushPriorForPrCreate } from "./resolveCrossEcVerifiedRemotePushPrior";
 import { resolveVerifiedPullRequestNumber } from "./resolveGitEffectTarget";
+import {
+  resolveVerifiedFilesystemMaterializationPriorAttempt,
+  type VerifiedFilesystemMaterializationPriorAttempt,
+} from "./resolveVerifiedFilesystemMaterializationPriorAttempt";

 export type AttemptExecutionProfileKind =
   | "local_commit"
@@ -146,6 +152,50 @@ const UNSUPPORTED_M4_PROTECTED: ReadonlySet<CursorAuthorizedEffectId> = new Set(
   "github.pr.update",
 ]);

+/**
+ * Filesystem materialization slice — Product generalist technical quartet.
+ * effectClass remains filesystem for audit; kind is contract_legacy (docs_write
+ * AttemptExecutionProfileKind retired with Product DocWrite specialization).
+ */
+function filesystemMaterializationProfile(
+  reason: string,
+): AttemptExecutionProfile {
+  return {
+    kind: "contract_legacy",
+    effectClass: "filesystem",
+    reason,
+    criteria: {
+      requiredCapabilities: [STUDIO_CURSOR_GENERALIST_CAPABILITY],
+      action: STUDIO_CURSOR_GENERALIST_ACTION,
+      target: STUDIO_CURSOR_GENERALIST_TARGET,
+      scope: STUDIO_CURSOR_GENERALIST_SCOPE,
+    },
+  };
+}
+
+function localCommitProfile(
+  reason: string,
+  prior: VerifiedFilesystemMaterializationPriorAttempt,
+): AttemptExecutionProfile {
+  return {
+    kind: "local_commit",
+    effectClass: "git.commit",
+    reason,
+    lineage: {
+      priorAttemptId: prior.priorAttemptId,
+      evidenceId: prior.evidenceId,
+      artifactPath: prior.artifactPath,
+      artifactDigest: prior.artifactDigest,
+    },
+    criteria: {
+      requiredCapabilities: [M4_BOUNDED_LOCAL_COMMIT_CAPABILITY],
+      action: M4_BOUNDED_LOCAL_COMMIT_ACTION,
+      target: M4_BOUNDED_LOCAL_COMMIT_TARGET,
+      scope: M4_BOUNDED_LOCAL_COMMIT_SCOPE,
+    },
+  };
+}
+
 function remotePushProfile(
   reason: string,
   prior: VerifiedLocalCommitPriorAttempt,
@@ -344,6 +394,41 @@ function requireEvidenceReader(
   return null;
 }

+function resolveLocalCommitOrFail(
+  input: ResolveAttemptExecutionProfileInput,
+  reason: string,
+): ResolveAttemptExecutionProfileResult {
+  const reader = requireEvidenceReader(input);
+  if (reader) return reader;
+  const prior = resolveVerifiedFilesystemMaterializationPriorAttempt({
+    contract: input.contract,
+    attempts: input.attempts ?? [],
+    evidence: input.evidence ?? [],
+  });
+  if (!prior.ok) {
+    if (prior.reason === "docs_write_prior_none") {
+      return {
+        ok: false,
+        reason: "attempt_profile_commit_without_verified_fs_lineage",
+      };
+    }
… [254 more lines truncated in pack]
```

### prepareM3FromDecision.ts (extrait)
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
index 0dac12ef..b9bd4f1a 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
@@ -31,6 +31,14 @@ import {
 } from "../w2/proposalSubjectOptions";
 import { probeManagedRepoRelativePathExists } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
 import { assertSealedArtifactWriteModeAgainstExistence } from "@/lib/oa/project/domain/artifactTargetRouting";
+import { STUDIO_CURSOR_GENERALIST_ACTION } from "@/lib/oa/execution-contract/domain/generalistExecutionSurface";
+
+function isTechnicalExecutionActionRef(value: string): boolean {
+  const v = value.trim();
+  // Prose objectives (e.g. French materialization titles) contain whitespace.
+  // Technical action refs are compact tokens (dotted, kebab, or colon ids).
+  return Boolean(v) && !/\s/.test(v);
+}

 /**
  * CR-PWR-02 TOCTOU (PREPARE) — sealed CREATE must not overwrite a file that appeared;
@@ -236,8 +244,10 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
     action = "UNRESOLVED_ACTION";
     stopConditions.push("ACTION_UNRESOLVED");
     stopConditions.push("SPECIALIZED_INTENT_NOT_ADMITTED");
-  } else if (requested) {
+  } else if (requested && isTechnicalExecutionActionRef(requested)) {
     action = requested;
+  } else if (requested || eb.targetPath?.trim()) {
+    action = STUDIO_CURSOR_GENERALIST_ACTION;
   } else {
     action = "UNRESOLVED_ACTION";
     stopConditions.push("ACTION_UNRESOLVED");
@@ -251,6 +261,47 @@ function fieldsFromBasis(basis: DecisionBasis, decisionId: string) {
     sourceRef: basis.sourceRef,
     sourceDigest: basis.sourceDigest,
   };
+  const targetPath = eb.targetPath?.trim();
+  if (targetPath) {
+    inputs.targetPath = targetPath;
+  }
+  const targetRepositoryRef = eb.targetRepositoryRef?.trim();
+  if (targetRepositoryRef) {
+    inputs.targetRepositoryRef = targetRepositoryRef;
+    inputs.repositoryRef = targetRepositoryRef;
+    inputs.repositoryIdentity = targetRepositoryRef;
+  }
+  if (eb.scopeIn?.length) {
+    inputs.scopeIn = [...eb.scopeIn];
+  }
+  if (eb.scopeOut?.length) {
+    inputs.scopeOut = [...eb.scopeOut];
+  }
+  if (eb.artifactBrief?.trim()) {
+    inputs.artifactBrief = eb.artifactBrief.trim();
+  }
+  if (eb.artifactType?.trim()) {
+    inputs.artifactType = eb.artifactType.trim();
+  }
+  if (eb.contentRequirements?.length) {
+    inputs.contentRequirements = [...eb.contentRequirements];
+  }
+  if (eb.validationExpectations?.length) {
+    inputs.validationExpectations = [...eb.validationExpectations];
+  }
+  if (eb.evidenceRequirements?.length) {
+    inputs.evidenceRequirements = [...eb.evidenceRequirements];
+  }
+  if (eb.artifactWriteMode != null) {
+    inputs.artifactWriteMode = eb.artifactWriteMode;
+  }
+  if (eb.artifactFileName?.trim()) {
+    inputs.artifactFileName = eb.artifactFileName.trim();
+  }
+  if (targetPath || targetRepositoryRef) {
+    inputs.createOrModify = true;
+    inputs.noDelete = true;
+  }

   // Specialized document-write PREPARE is not a Product admission.
   // Target and capability stay unresolved; generic PREPARE owns documentary work.
```

### p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts (extrait)
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts
index 08704a60..b6c4af83 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.rCi01.legacyW2ConfirmCompatibility.d0.test.ts
@@ -43,6 +43,10 @@ import {
 import {
   GOVERNED_OPTION_REF,
 } from "@/features/project-assistant/w2/trajectoryOptions";
+import {
+  SEALED_GIT_TARGET_IDENTITY_ENV,
+  SEALED_GIT_TARGET_REMOTE_URL_ENV,
+} from "@/features/project-assistant/w2/resolveTrustedProductLaunchContext";
 import {
   LOCAL_PILOTE_ACTOR,
   registerLocalPiloteAuthority,
@@ -57,6 +61,7 @@ import {
   bootW2Runtime,
   cleanupW2TempDirs,
   currentF2Context,
+  pathUnderProjectWorkspace,
   seedQualifiedProject,
   tempProductDbPath,
   W2_TEST_PINNED_BASE_HEAD_SHA,
@@ -70,8 +75,10 @@ function restoreEnvVar(name: string, previous: string | undefined): void {
 }

 function baseAnalysis(
+  workspaceKey: string,
   overrides: Partial<IntentAnalysisDto> = {},
 ): IntentAnalysisDto {
+  const filePath = pathUnderProjectWorkspace(workspaceKey, "app", "filter.ts");
   return {
     parseOk: true,
     intentClass: "actionable",
@@ -88,7 +95,7 @@ function baseAnalysis(
     contradictionCandidate: null,
     challengeResponseAssessment: "sufficient",
     objective: "Corriger le filtrage demo",
-    scope: "projects/demo/app/filter.ts",
+    scope: filePath,
     rephrasedRequest: "Corriger le bug de filtrage",
     outOfScope: ["refonte UI"],
     risks: [],
@@ -100,7 +107,7 @@ function baseAnalysis(
     requestedOperation: null,
     executionIntent: {
       intentKind: "other",
-      scopeIn: ["projects/demo/app/filter.ts"],
+      scopeIn: [filePath],
       scopeOut: ["refonte UI"],
     } as IntentAnalysisDto["executionIntent"],
     ...overrides,
@@ -262,7 +269,10 @@ describe("R-CI-01 Legacy W2 Confirm compatibility", () => {
       managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
       identity,
     });
-    return { projectId, cycleInstanceId, oa, identity };
+    const project = await oa.projectServices.getProject.execute({ projectId });
+    if (!project.ok) throw new Error("project");
+    const workspaceKey = project.project.projectWorkspaceKey ?? "project";
… [200 more lines truncated in pack]
```

## 15. Validations
| Check | Result |
|---|---|
| typecheck (`tsc --noEmit`) | **PASS** |
| lint (`next lint`) | **PASS** with 2 unused-var warnings (`pilotLifecycleTransitions`, `startExecution`) |
| build (`next build`) | **PASS** |
| Vitest 44 baseline suites | **44/44 PASS · 639/639 tests** |
| PRR conformance (`check-production-runtime-reference.mjs`) | **PASS** after `--write-digests` |
| Vitest global (after CI-44 green) | First residual outside-44: fakeProvider P1/P4b + NELC hostile docsWriteSpec — **ADAPTED/PASS** |
| Vitest global full | `2 failed | 552 passed | 22 skipped` (576) — failures = **timeouts under load** on `g2.catalog-versioning-mw6` + `genericExecutionReviewResultConvergence01.trajectorySurface` |
| Isolated re-run of those 2 | **PASS** (flaky under global parallel load — class F) |
| GitHub CI | last known `40215089725` **FAILURE** — **no new GitHub run** (no project push) |

## 16. Réserves classées
| ID | Reserve | Class |
|---|---|---|
| R1 | GitHub CI not re-proven (no push) | PROCESS |
| R2 | REAL Cursor / GitHub effects | BOUNDARY FORBIDDEN |
| R3 | Monolithic GCEC A→B progressive spine not re-run end-to-end in mono file (covered by Cr23/Agent01) | KNOWN GAP EXIT PROOF |
| R4 | FS→SHA Evidence allowlist remains historical `execution_attempt:docs_write` | KNOWN GAP (CORR-02) |
| R5 | Lint unused-var warnings in touched Product files | NON-BLOCKING |
| R6 | H4 / G-REAL / G-ACTIVATION | NOT GRANTED |
| R7 | Global Vitest 2 timeout flakes under load (PASS isolated) | NON-BLOCKING / F |

## 17. KNOWN GAPS + exit proof
- **M3 bounded docs_write Execute REAL** — FORBIDDEN; DET Fake path restored under AKG-M5 naming.
- **Generic Evidence source beyond historical docs_write allowlist** — fail-closed; next capability = Evidence generic source design under separate GO.
- **Runtime v3 adoption / H4** — separate gates.

## 18. R24 PRR / Roadmap
- PRR 09 overlay updated for Cycle 8 local status vs `40215089725`.
- Roadmap CURRENT TIP updated: HEAD `ff653b58`, no project commit/push, local 44 PASS ≠ GitHub CI PASS.
- Manifest digests rewritten via canonical `--write-digests` after semantic review of tracked drifts (fakeProvider + adapted tests + volume 09).
- Digest conforme ≠ vérité sémantique (explicit).

## 19. Fake / Real Qualification
- **BEHAVIOR PROVEN — DETERMINISTIC** at tested scope (O-01, Git fidelity, confinement, progressive profiles, Confirm/materiality).
- REAL: **FORBIDDEN / NOT PROVEN**.
- Forbidden claims: READY FOR REAL, H4 PASS, G-REAL, G-ACTIVATION, RUNTIME V3 ADOPTED, P6 GLOBAL PASS.

## 20. Décisions Morris futures
1. Critical Review ChatGPT on this handoff.
2. Distinct GO for project commit/push of PR #618 candidate (prior GO consumed).
3. Distinct GO for merge after Critical Review + green GitHub CI.
4. Separate gates for H4 / G-REAL / Evidence generic source.

## 21. Verdict borné
**LOCAL CORRECTION COMPLETE WITH RESERVES — CRITICAL REVIEW REQUIRED**

Anti-claims: ≠ READY FOR MERGE · ≠ MERGED · ≠ REAL PROVEN · ≠ RUNTIME V3 ADOPTED · ≠ GitHub CI PASS.
