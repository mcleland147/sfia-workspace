# SFIA Review Pack — Cycle 8 Delivery Amend — Cursor trust-marker NAME_MAX
Date/time: 2026-08-17 19:54:49 CEST (Europe/Paris)
Cycle: 8 — Delivery / implémentation — AMEND
Profile: Critical
Typology: INC / bounded execution-boundary correction
Worktree: /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off
Campaign evidence: /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/cycle-8-namemax-delivery-20260817-194948

## Morris ACCEPT + GO consumed

ACCEPT —
CURSOR REAL EXIT 1 ROOT CAUSE DIAGNOSIS

PRIMARY CAUSE —
WORKSPACE / PATH FAILURE
CURSOR --trust MARKER mkdir ENAMETOOLONG

AND

GO MORRIS —
CYCLE 8 DELIVERY AMEND
NAME_MAX / CURSOR TRUST-MARKER PATH
SHORT EXECROOT IDENTITY + PRE-SPAWN FAIL-CLOSED
ZERO REAL

This GO does NOT authorize OpenAI LIVE, Cursor REAL, `cursor agent`, `cursor-agent`, model calls, another REAL Project/Attempt/worktree, ARCH-WOP-1 mutation, `--trust` removal, Cursor install/auth mutation, architecture pivot, V3-F10 redesign, Roadmap/doctrine mutation, project commit/push/PR/merge, runtime v3 adoption, or PRE-M6 closure.

Review Handoff publication on `sfia/review-handoff` is separately authorized as the canonical bounded L3 publication.

## Local Git Truth PRE

```
timestamp=2026-08-17 19:49:49 CEST (+0200)
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin/main=a3ac418f3bc2ebb006cbc58f902f13629871014d
origin/sfia/review-handoff=ca06abbdcf2eeb2c779d7b6e24084791922d8e24
handoff_blob=b768fdfd1db75886a56ae6944a4c082cf8697f4b
staged_n=0
dirty_n=110
```

PRE `git status --short` (110 lines, staged empty):

```
 M projects/sfia-studio/app/__tests__/increment-a.test.tsx
 M projects/sfia-studio/app/__tests__/increment-b.test.tsx
 M projects/sfia-studio/app/__tests__/navigation.test.tsx
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/app/globals.css
 M projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
 M projects/sfia-studio/app/app/studio/projects/new/page.tsx
 M projects/sfia-studio/app/components/shell/StudioShell.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/components/shell/utility-rail.module.css
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
 M projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
 M projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/f3/types.ts
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
 M projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
 M projects/sfia-studio/app/lib/navigation.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/lib/oa/project/domain/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
 M projects/sfia-studio/app/playwright.config.ts
 M projects/sfia-studio/app/styles/shell.module.css
 M projects/sfia-studio/app/styles/tokens.css
 M projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/executionWindowDeadline.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/observationSchedule.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/executionWindowPolicy.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/
?? projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-test-01.e2eQaControl.test.ts
?? projects/sfia-studio/app/__tests__/studio-projects/
?? projects/sfia-studio/app/__tests__/vertical-slice-runtime/deterministicCursorBoundary.test.ts
?? projects/sfia-studio/app/app/api/
?? projects/sfia-studio/app/app/studio/page.tsx
?? projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a.spec.ts
?? projects/sfia-studio/app/e2e/support/
?? projects/sfia-studio/app/features/pre-m6-product-ui/
?? projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
?? projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
?? projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts
?? projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts
?? projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts
?? projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts
?? projects/sfia-studio/app/features/project-assistant/f3/fixtureSafeM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
?? projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
?? projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts
?? projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
?? projects/sfia-studio/app/features/studio-projects/
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/observationSchedule.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/domain/executionWindowPolicy.ts
?? projects/sfia-studio/app/lib/oa/project/application/listProjects.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha.ts
```

PRE `git diff --cached`: empty.
PRE `git worktree list --porcelain`: recorded at `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/cycle-8-namemax-delivery-20260817-194948/pre/worktree-list.porcelain.txt`.
Candidate app files PRE: 994
Candidate app manifest PRE: `328bc0bb3b04dab4b1f12b031901c2b5d4cf8806b794d8d2e824403899c6c3f5`

Branch/HEAD matched the validated local candidate (`delivery/sfia-studio-pre-m6-ui-option-a` @ `0d33478566627a9bf507d5a06323962d349308ee`). origin/main and origin/sfia/review-handoff matched ChatGPT remote truth. No STOP for input-state divergence.

## Local Git Truth POST (pre-handoff)

```
branch=delivery/sfia-studio-pre-m6-ui-option-a
HEAD=0d33478566627a9bf507d5a06323962d349308ee
origin_main=a3ac418f3bc2ebb006cbc58f902f13629871014d
origin_review_handoff=ca06abbdcf2eeb2c779d7b6e24084791922d8e24
staged=0
```

POST `git status --short` (113 lines, staged empty):

```
 M projects/sfia-studio/app/__tests__/increment-a.test.tsx
 M projects/sfia-studio/app/__tests__/increment-b.test.tsx
 M projects/sfia-studio/app/__tests__/navigation.test.tsx
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx
 M projects/sfia-studio/app/app/globals.css
 M projects/sfia-studio/app/app/studio/projects/[id]/page.tsx
 M projects/sfia-studio/app/app/studio/projects/new/page.tsx
 M projects/sfia-studio/app/components/shell/StudioShell.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/components/shell/utility-rail.module.css
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
 M projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
 M projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/f3/types.ts
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
 M projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
 M projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css
 M projects/sfia-studio/app/lib/navigation.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/lib/oa/project/domain/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts
 M projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts
 M projects/sfia-studio/app/playwright.config.ts
 M projects/sfia-studio/app/styles/shell.module.css
 M projects/sfia-studio/app/styles/tokens.css
 M projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/executionWindowDeadline.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/observationSchedule.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/executionWindowPolicy.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/
?? projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-test-01.e2eQaControl.test.ts
?? projects/sfia-studio/app/__tests__/studio-projects/
?? projects/sfia-studio/app/__tests__/vertical-slice-runtime/deterministicCursorBoundary.test.ts
?? projects/sfia-studio/app/app/api/
?? projects/sfia-studio/app/app/studio/page.tsx
?? projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts
?? projects/sfia-studio/app/e2e/studio-option-a.spec.ts
?? projects/sfia-studio/app/e2e/support/
?? projects/sfia-studio/app/features/pre-m6-product-ui/
?? projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
?? projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts
?? projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts
?? projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts
?? projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts
?? projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts
?? projects/sfia-studio/app/features/project-assistant/f3/fixtureSafeM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts
?? projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts
?? projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts
?? projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts
?? projects/sfia-studio/app/features/project-assistant/presentationLabels.ts
?? projects/sfia-studio/app/features/studio-projects/
?? projects/sfia-studio/app/lib/oa/execution-attempt/application/observationSchedule.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorTrustMarkerPathCompatibility.ts
?? projects/sfia-studio/app/lib/oa/execution-contract/domain/executionWindowPolicy.ts
?? projects/sfia-studio/app/lib/oa/project/application/listProjects.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts
?? projects/sfia-studio/app/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha.ts
```

Candidate app files POST: 996 (+helper +test)
Candidate app manifest POST: `e11f719e032182cee0b9433463c35a7652a14d68ad6a0ce3bc47a46c9060a7e9`

HEAD / origin/main / origin/sfia/review-handoff unchanged vs PRE. Staged remains empty. Project commit/push/PR/merge: none.

## Baseline / candidate identities

- origin/main = `a3ac418f3bc2ebb006cbc58f902f13629871014d`
- origin/sfia/review-handoff (cycle start) = `ca06abbdcf2eeb2c779d7b6e24084791922d8e24`
- parent forensic handoff blob = `b768fdfd1db75886a56ae6944a4c082cf8697f4b`
- candidate branch = `delivery/sfia-studio-pre-m6-ui-option-a`
- candidate HEAD = `0d33478566627a9bf507d5a06323962d349308ee`

## Parent forensic handoff

- branch commit: `ca06abbdcf2eeb2c779d7b6e24084791922d8e24`
- blob `sfia-review-handoff/latest-chatgpt-review.md`: `b768fdfd1db75886a56ae6944a4c082cf8697f4b`
- failed process pid:19887
- failed Attempt: `xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- failed leaf: `wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15`
- failed absolute workspace: 273 UTF-8 bytes
- flattened trust-marker component: 269
- Darwin NAME_MAX: 255
- overage: 14
- Cursor error: Failed to create trust marker: ENAMETOOLONG mkdir ~/.cursor/projects/<flattened-workspace-identity>
- Do not reinterpret Cursor 3.16.17 as the cause.

## Sources (candidate / experimental cognitive guidance only — no CKC execution authority)

PROCESS (read):
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md (Cycle 8 Delivery)
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md §4.8
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md

CONVERGENCE / V3 (read):
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
- projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md

RUNTIME (local candidate authoritative):
- studioGitWorktreeWorkspace.ts
- studioCursorRealLaunchGateway.ts
- nodeCursorProcessRunner.ts (READ ONLY — unchanged)
- cursorCliLaunchGateway.ts (READ ONLY — unchanged)
- realExecutionWorkspacePort.ts / realExecutionLaunchPort.ts (READ ONLY — unchanged)
- realLaunchSafety.ts (READ ONLY — unchanged)

No detailed Cycle 8 CKC pilot exists. Fifteen-cycles synthetic map + v2.5 §4.8 used as candidate/experimental cognitive guidance only.

## Convergence qualification

- Milestone: PRE-M6 — NON COMPLETE
- Runtime v3: NON ADOPTED
- Primary capability: V3-F05 governed end-to-end product execution loop
- Supporting: V3-F11 / V3-F12
- Evidence / anti-claims: V3-F14 / V3-F15
- Open debt outside this fix: V3-F10 process-local observation / recovery / diagnostic durability — REMAINS OPEN

KEEP: product orchestration, HumanDecision, ExecutionContract, Gate D, ExecutionAttempt, ARCH-WOP-1, 15-minute window, one-launch, O3, StudioCursorRealLaunchGateway contract, Cursor argv shape, `--trust`, `--sandbox enabled`, README-only bounded instruction, NodeCursorProcessRunner, real failure semantics, Evidence/ReviewBundle, operator Link fix, operator asksWrite fix.

ADAPT: physical isolated-worktree naming; workspace/path compatibility validation immediately before the external Cursor boundary.

FREEZE: historical REAL Projects/Attempts/worktrees, pid 19887 campaign, forensic evidence, Cursor installation/auth, V3-F10 architecture, Roadmap/doctrine.

Targeted gap: CURSOR TRUST-MARKER NAME_MAX COMPATIBILITY.

Exit proof (this cycle): historical long-root/long-Attempt reproducer no longer creates an unsafe worktree identity; unsafe workspace rejected fail-closed BEFORE runner.invoke; no Cursor subprocess for rejected path; valid short workspace reaches fake/injected runner exactly once; argv and bounded instruction unchanged; ARCH-WOP-1 unchanged; all execution deterministic; ZERO REAL.

Next capability: Cycle 9 deterministic QA / validation of this correction. A future bounded REAL re-proof requires a NEW explicit Morris GO. NOT authorized here.

## Fake / Real qualification

Applicable: YES.
OpenAI LIVE = FORBIDDEN.
Cursor REAL = FORBIDDEN.
Fake/injected process runner = ALLOWED for deterministic tests only.
Fake Git runner = ALLOWED for deterministic workspace tests.
Proof level: DETERMINISTIC PROVEN for NAME_MAX compatibility. Explicitly NOT: REAL BOUNDARY PROVEN, END-TO-END REAL PROVEN, REAL Cursor terminal success, PRE-M6 completion, runtime v3 adoption.
No test silently executed a real Cursor binary. FakeProcessRunner + FakeGitCommandRunner + injected resolveCursorBin=`/tmp/fake-cursor-bin` only. Production `SFIA_STUDIO_CURSOR_REAL` remained unset (`!== "1"`).

## Root-cause invariant used

deep absolute execution worktree
→ Cursor flattens workspace identity under ~/.cursor/projects
→ flattened component for failed pid 19887 = 269 bytes (ASCII)
→ Darwin NAME_MAX = 255
→ trust-marker mkdir ENAMETOOLONG
→ Cursor turn never starts
→ process exit 1.

Primary restoration: shorter physical worktree identity.
Defense in depth: UTF-8 byte compatibility check before spawn.

## Authorized files

Primary:
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts

Conditionally allowed helper (used to share NAME_MAX logic):
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorTrustMarkerPathCompatibility.ts

Tests (one new file in the execution-attempt family):
- projects/sfia-studio/app/__tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts

Public ports/domain contracts: unchanged. index.ts barrel: unchanged this cycle (pre-existing dirty preserved). nodeCursorProcessRunner.ts: unchanged.

## PRE-existing candidate state (authorized files)

studioGitWorktreeWorkspace.ts PRE (vs HEAD: clean):
- sha256 `88fcceeba4ec6ccf1311d9e967ea37194bf4ccfb50f827fc803ca40781659d45`
- old physical rule: `wt-${safe(attemptId).slice(0,48)}-${sha256(attemptId).slice(0,24)}`

studioCursorRealLaunchGateway.ts PRE (already dirty vs HEAD — ARCH-WOP-1 timeoutMs / assertResolvedTimeoutMs):
- sha256 `1fc7ce8723f82be5e6f58511945ff31ee51920f2a6337afd262ba66cc82bd39c`
- pre-existing HEAD→PRE diff (NOT this cycle; preserved):

```
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
index f46b4ef..8683852 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts
@@ -22,13 +22,13 @@ import type {
 } from "../ports/realExecutionLaunchPort";
 import type { RealExecutionWorkspacePort } from "../ports/realExecutionWorkspacePort";
 import { DisabledRealProcessRunner } from "./nodeCursorProcessRunner";
+import { assertResolvedTimeoutMs } from "@/lib/oa/execution-contract";

 export type StudioCursorRealLaunchGatewayOptions = {
   readonly processRunner: ProcessRunner;
   readonly workspacePort: RealExecutionWorkspacePort;
   readonly env?: NodeJS.ProcessEnv;
   readonly resolveCursorBin?: () => string | null;
-  readonly defaultTimeoutMs?: number;
 };

 /** Copy of OPS1 resolveCursorBinPath pattern — no ops1 import. */
@@ -63,7 +63,6 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
   private readonly workspacePort: RealExecutionWorkspacePort;
   private readonly env: NodeJS.ProcessEnv;
   private readonly resolveBin: () => string | null;
-  private readonly timeoutMs: number;
   /**
    * Fallback only when the runner has no observe/awaitCompletion.
    * Live observation source is the runner registry when present
@@ -86,7 +85,6 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
     this.env = options.env ?? process.env;
     this.resolveBin =
       options.resolveCursorBin ?? (() => resolveCursorBinPath(this.env));
-    this.timeoutMs = options.defaultTimeoutMs ?? 60_000;
   }

   async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
@@ -126,6 +124,17 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
       };
     }

+    if (!assertResolvedTimeoutMs(request.timeoutMs)) {
+      return {
+        outcome: "reject",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: "resolved_timeout_ms_required",
+        realProcessInvoked: false,
+        detailCode: "REAL_LAUNCH_FAILED",
+      };
+    }
+
     const baseHeadSha =
       request.baseHeadSha ?? request.worktreeBaseHeadSha ?? "";
     if (!/^[0-9a-f]{40}$/i.test(baseHeadSha)) {
@@ -213,7 +222,7 @@ export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
         executable: bin,
         cwd: workspacePath,
         argv,
-        timeoutMs: this.timeoutMs,
+        timeoutMs: request.timeoutMs,
         env: {
           ...this.env,
           [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
```

Helper and NAME_MAX test: did not exist PRE.

## Files POST hashes

- studioGitWorktreeWorkspace.ts: `a41495c13075f3668a9c86d46a175209d415ef07eaa974b24e161659f9c24e42`
- studioCursorRealLaunchGateway.ts: `e54e8a4e6d7bb3a96773ed888921013c405bdbf262e8ec9277e76b1d9c21ee83`
- cursorTrustMarkerPathCompatibility.ts: `22a966bb0721d3ba7fc633fcef89afb5dfbe0af9b073be48042c2d339911ca86`
- cursorTrustMarkerNameMax.test.ts: `da5f2eebbcb2ea5c12b8b1187a9eac6197ada9c9e5e82d28751dcfba79735e55`

## Cycle-only PRE→POST diffs

Dirty-tree isolation:
- PRE status lines: 110
- POST status lines: 113
- ADDED status lines only:
  - ` M projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts`
  - `?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorTrustMarkerPathCompatibility.ts`
  - `?? projects/sfia-studio/app/__tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts`
- REMOVED status lines: none
- Unrelated PRE status lines changed: 0
- Gateway remained ` M .../studioCursorRealLaunchGateway.ts` (pre-existing dirty + this cycle incremental check)

### studioGitWorktreeWorkspace.ts (PRE snapshot → POST)

```
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/cycle-8-namemax-delivery-20260817-194948/source-snapshots/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts	2026-08-17 19:49:49
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts	2026-08-17 19:51:19
@@ -13,7 +13,17 @@
   PrepareWorkspaceResult,
   RealExecutionWorkspacePort,
 } from "../ports/realExecutionWorkspacePort";
+import { assertCursorTrustMarkerPathCompatible } from "./cursorTrustMarkerPathCompatibility";

+export {
+  CURSOR_TRUST_MARKER_NAME_MAX_BYTES,
+  CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
+  assertCursorTrustMarkerPathCompatible,
+  cursorTrustMarkerProjectComponent,
+  cursorTrustMarkerProjectComponentByteLength,
+  isCursorTrustMarkerPathCompatible,
+} from "./cursorTrustMarkerPathCompatibility";
+
 export type GitCommandResult = {
   readonly stdout: string;
   readonly stderr: string;
@@ -39,18 +49,22 @@
   return typeof value === "string" && FULL_SHA_RE.test(value);
 }

-export function workspacePathForAttempt(
-  execRoot: string,
-  attemptId: string,
-): string {
+/** Physical leaf only — `wt-` + sha256(attemptId) hex prefix (24). */
+export function physicalWorktreeLeafForAttempt(attemptId: string): string {
   const digest = createHash("sha256")
     .update(attemptId, "utf8")
     .digest("hex")
     .slice(0, 24);
-  const safe = attemptId.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 48);
-  return path.resolve(execRoot, `wt-${safe}-${digest}`);
+  return `wt-${digest}`;
 }

+export function workspacePathForAttempt(
+  execRoot: string,
+  attemptId: string,
+): string {
+  return path.resolve(execRoot, physicalWorktreeLeafForAttempt(attemptId));
+}
+
 export class StudioGitWorktreeWorkspace implements RealExecutionWorkspacePort {
   private readonly repoRoot: string;
   private readonly execRoot: string;
@@ -97,6 +111,7 @@
     if (existsSync(workspacePath)) {
       throw new Error("REAL_WORKSPACE_INVALID:workspace_path_exists");
     }
+    assertCursorTrustMarkerPathCompatible(workspacePath);

     // a) verify commit exists
     const verify = await this.gitRunner.run(
```

### studioCursorRealLaunchGateway.ts (PRE snapshot → POST; ARCH-WOP-1 timeout block preserved)

```
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/cycle-8-namemax-delivery-20260817-194948/source-snapshots/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts	2026-08-17 19:49:49
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts	2026-08-17 19:51:21
@@ -23,6 +23,10 @@
 import type { RealExecutionWorkspacePort } from "../ports/realExecutionWorkspacePort";
 import { DisabledRealProcessRunner } from "./nodeCursorProcessRunner";
 import { assertResolvedTimeoutMs } from "@/lib/oa/execution-contract";
+import {
+  CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
+  isCursorTrustMarkerPathCompatible,
+} from "./cursorTrustMarkerPathCompatibility";

 export type StudioCursorRealLaunchGatewayOptions = {
   readonly processRunner: ProcessRunner;
@@ -181,6 +185,17 @@
       };
     }

+    if (!isCursorTrustMarkerPathCompatible(workspacePath)) {
+      return {
+        outcome: "reject",
+        gatewayId: this.gatewayId,
+        attemptId: request.attemptId,
+        reason: CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
+        realProcessInvoked: false,
+        detailCode: "REAL_WORKSPACE_INVALID",
+      };
+    }
+
     // Fixed argv shape — executable is separate; no user-controlled shell.
     // --mode ask: local CLI help documents ask as read-only Q&A (no edits).
     // Shell under ask remains unresolved by help alone; future REAL must observe.
```

## Implementation explanation

Physical identity shortened in-place inside execRoot. Domain Attempt/Contract/journal IDs unchanged. worktreeRef remains the absolute workspace path. No second identity system. No UUID. No execRoot relocation. No parallel workspace adapter.

After workspace resolution, StudioCursorRealLaunchGateway refuses incompatible paths with existing REAL_WORKSPACE_INVALID semantics before argv construction and before runner.invoke. StudioGitWorktreeWorkspace also asserts compatibility after exists/inside-execRoot checks and before any Fake/real git call (defense in depth; extreme deep execRoot never reaches git).

Flatten used for the bound is a defensive reconstruction of observed Cursor `--trust` project-component behavior, documented as not a public Cursor API.

## Exact physical naming rule

OLD: `wt-${sanitizedAttemptId truncated to 48}-${sha256(attemptId).hex.slice(0,24)}`
NEW: `wt-${sha256(attemptId).hex.slice(0,24)}` — fixed 27 ASCII chars (`wt-` + 24 hex).

Historical Attempt `xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824`:
- old leaf: `wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15` (76 chars)
- new leaf: `wt-e1a473939ed0a7076438ea15` (27 chars)
- old abs path length: 273
- new abs path length: 224
- old flattened component UTF-8 bytes: 269 (UNSAFE)
- new flattened component UTF-8 bytes: 220 (SAFE vs 255)

## Exact compatibility rule and byte-count logic

Function: `cursorTrustMarkerProjectComponent` / `cursorTrustMarkerProjectComponentByteLength` / `isCursorTrustMarkerPathCompatible` / `assertCursorTrustMarkerPathCompatible`
File: `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorTrustMarkerPathCompatibility.ts`

Rule:
1. Normalize `\\` → `/`, strip leading `/`.
2. Drop `.`, map `_` → `-`, map `/` → `-`.
3. Measure `Buffer.byteLength(component, "utf8")` — not JavaScript `.length`.
4. Compatible iff bytes ≤ 255 (`CURSOR_TRUST_MARKER_NAME_MAX_BYTES`).

Error:
- workspace prepare throw: `REAL_WORKSPACE_INVALID:cursor_trust_marker_path_too_long`
- gateway reject: `reason=REAL_WORKSPACE_INVALID:cursor_trust_marker_path_too_long`
- `detailCode=REAL_WORKSPACE_INVALID`
- `outcome=reject`
- `realProcessInvoked=false`
- NOT a REAL process failure (no process spawned)

Gateway placement: after `prepareWorkspace`, before argv / `runner.invoke`.

## Tests T1–T14 expected / actual

Targeted file: `cursorTrustMarkerNameMax.test.ts` — 15 passed / 15 (T8/T9 has an extra gateway byte-rule case). ZERO REAL.

| ID | Expected | Actual |
| T1 | Same Attempt ID twice → identical physical path | PASS |
| T2 | Distinct Attempt IDs → distinct leaves | PASS |
| T3 | Historical long Attempt → leaf length 27, no Attempt text | PASS (old leaf 76) |
| T4 | Historical execRoot depth + new leaf compatible; old 269 unsafe | PASS (269 → 220) |
| T5 | Short execRoot FakeGit: verify / worktree add --detach / HEAD | PASS |
| T6 | Extreme deep execRoot: throw PATH_TOO_LONG, git.calls=0 | PASS |
| T7 | Injected unsafe workspace: runner.invoke=0, realProcessInvoked=false, REAL_WORKSPACE_INVALID | PASS |
| T8 | 255 bytes ALLOW, 256 REJECT | PASS |
| T9 | `é`×127 JS length 127 / 254 bytes ALLOW; `é`×128 / 256 bytes REJECT | PASS |
| T10 | Safe workspace: FakeProcessRunner invoke=1; argv agent/--print/--mode ask/--workspace/--trust/--sandbox enabled + bounded instruction | PASS |
| T11 | Two NAME_MAX rejects: invoke remains 0 (no retry spawn) | PASS |
| T12 | Historical 269-component path: runner.invoke=0 | PASS |
| T13 | base SHA invalid, path exists, HEAD mismatch preserved | PASS |
| T14 | `SFIA_STUDIO_CURSOR_REAL !== "1"`; flatten `/tmp/a_b.c/d` → `tmp-a-bc-d` | PASS |

Vitest T1–T14 log:

```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app

 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T1 same Attempt ID → identical physical path 1ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T2 distinct Attempts → distinct leaves 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T3 historical long Attempt → fixed short leaf, no Attempt id text 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T4 historical failure-depth root + short leaf is compatible 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T5 short execRoot FakeGit prepare still verifies HEAD 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T6 unsafe extreme execRoot fail-closed before git 1ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T7 unsafe injected workspace never reaches runner 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T8 exact 255 bytes ALLOW, 256 REJECT 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T9 UTF-8 bytes not JS .length 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T8/T9 gateway uses the same byte rule 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T10 safe workspace invokes fake runner once with unchanged argv 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T11 NAME_MAX reject does not invoke then retry 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T12 historical 269-component path never reaches runner.invoke 0ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T13 existing workspace validations preserved 1ms
 ✓ __tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts > Cursor trust-marker NAME_MAX compatibility > T14 no Cursor REAL / no OpenAI LIVE in this file 0ms

 Test Files  1 passed (1)
      Tests  15 passed (15)
   Start at  19:54:13
   Duration  447ms (transform 151ms, setup 41ms, collect 215ms, tests 5ms, environment 0ms, prepare 38ms)
```

## Broader execution-attempt results

Command: `npx vitest run __tests__/oa/execution-attempt` (app dir)
Result: Test Files 14 passed (14); Tests 165 passed (165); exit 0
No REAL-case exclusion required: suite contains no live Cursor/OpenAI cases. Existing R1/R2/R3 REAL-OFF tests passed, including R1-10 argv `--mode ask` + `--trust` + request.timeoutMs.

```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/app

·····································································································································································

 Test Files  14 passed (14)
      Tests  165 passed (165)
   Start at  19:52:58
   Duration  1.06s (transform 709ms, setup 627ms, collect 4.29s, tests 1.09s, environment 1ms, prepare 597ms)
```

Also re-ran R1+R2 with NAME_MAX file (after T14 assertion fix): targeted NAME_MAX 15/15 PASS.

## Static validation

- `npx tsc --noEmit` → typecheck_exit=0
- `npx next lint` on the four authorized/new files → lint_exit=0, no warnings
- `npx next build` → build_exit=0 (no Cursor REAL / OpenAI LIVE)

## Proof runner invocation = 0 on unsafe case

T6 git.calls length 0.
T7/T11/T12 FakeProcessRunner.calls length 0; simulatedInvokeCount 0; realProcessInvoked false.

## Proof one invocation on safe fake case

T10 runner.calls length 1; T8 allow then over/utf keep invoke count at 1 (rejects do not add invokes).

## Proof ZERO REAL

- No `cursor` / `cursor agent` / `cursor-agent` subprocess in this cycle
- No OpenAI LIVE
- No product REAL server
- No new REAL Project / Attempt / worktree
- Tests inject FakeProcessRunner + FakeGitCommandRunner only
- Historical campaign `.tmp-sfia-review/real-bounded-reproof-20260817-191840/` files touched this cycle: 0
- Forensic `.tmp-sfia-review/cycle-9-cursor-real-exit1-diagnostic-20260817-193158/` files touched this cycle: 0

## Proof Cursor argv unchanged / `--trust` unchanged

T10 exact argv:
`["agent","--print","--mode","ask","--workspace",workspacePath,"--trust","--sandbox","enabled",instruction]`
Instruction still README-only, no Shell, no Glob/Grep, M4_READ_ONLY_OK / M4_READ_ONLY_UNAVAILABLE.
R1-10 still PASS. Gateway argv block not rewritten except remaining on the far side of the new guard.

## Proof ARCH-WOP-1 unchanged

- executionWindowPolicy.ts not in cycle delta (mtime 2026-08-17 16:01:02, before cycle)
- standard 900000 ms not modified
- gateway still uses `request.timeoutMs` + `assertResolvedTimeoutMs` from pre-existing candidate dirty (preserved, not redesigned)
- nodeCursorProcessRunner.ts mtime 2026-08-14 09:01:13, not touched
- observationSchedule.ts status line unchanged vs PRE
- one-launch: T11 two rejects → 0 invokes; T10 one safe launch → 1 invoke

## Unrelated dirty-tree integrity

Every non-authorized PRE dirty status line is byte-identical in POST. Cycle added exactly three status entries listed above. Pre-existing gateway dirty isolated from cycle delta via PRE snapshot hash `1fc7ce87…` → POST `e54e8a4e…` (NAME_MAX import + pre-spawn check only).

Forbidden-path mtimes all before cycle start (19:49:48 CEST): nodeCursorProcessRunner, ports, realLaunchSafety, index.ts, executionWindowPolicy, cursorCliLaunchGateway.

## Historical REAL integrity (read-only freeze)

Unchanged / not resumed / not retried / not cleaned / DB not mutated / worktree not mutated / Cursor not rerun:
- Project `prj:4ebd28f9-b3c8-49b4-bf70-88825d357a61`
- Decision `dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- Contract `xct:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- Attempt `xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824`
- processRef pid:19887
- Campaign `.tmp-sfia-review/real-bounded-reproof-20260817-191840/`
- Forensic `.tmp-sfia-review/cycle-9-cursor-real-exit1-diagnostic-20260817-193158/`

## Reserves / debt

- V3-F10 remains open (process-local observation / recovery / diagnostic durability)
- PRE-M6 remains NON COMPLETE
- runtime v3 remains NON ADOPTED
- Compatibility flatten is defensive/observed, not a public Cursor API
- Unusually deep execRoot still fail-closed (T6) rather than relocated

## Claims / anti-claims

CLAIM: Cycle 8 Delivery Amend closed the confirmed Cursor trust-marker NAME_MAX gap under deterministic QA: short isolated worktree identity + pre-spawn fail-closed.

ANTI-CLAIMS (do not claim):
- REAL boundary proven
- Cursor terminal success proven
- end-to-end REAL proven
- PRE-M6 complete
- runtime v3 adopted
- V3-F10 closed
- production ready
- future REAL authorized

## Verdict

PASS —
CYCLE 8 DELIVERY AMEND
CURSOR TRUST-MARKER NAME_MAX GAP CLOSED UNDER DETERMINISTIC QA
SHORT ISOLATED WORKTREE IDENTITY IMPLEMENTED
PRE-SPAWN PATH COMPATIBILITY FAIL-CLOSED PROVEN
HISTORICAL 269-COMPONENT FAILURE REGRESSION CLOSED
UNSAFE EXTREME PATH REJECTED BEFORE RUNNER INVOCATION
CURSOR ARGV / --TRUST / BOUNDED INSTRUCTION UNCHANGED
ARCH-WOP-1 UNCHANGED
ONE-LAUNCH INVARIANT PRESERVED
ZERO REAL
PRE-M6 REMAINS NON COMPLETE
RUNTIME V3 REMAINS NON ADOPTED
READY FOR MORRIS DELIVERY ACCEPTANCE
READY FOR CYCLE 9 DETERMINISTIC QA
NO REAL AUTHORIZED

## Exact next gate

MORRIS —
ACCEPT / REJECT
CYCLE 8 DELIVERY AMEND
CURSOR TRUST-MARKER NAME_MAX PATH COMPATIBILITY

AND

GO / NO-GO
CYCLE 9 QA / VALIDATION
NAME_MAX DELIVERY FIX
DETERMINISTIC PRODUCT QA
ZERO REAL

A new bounded REAL campaign is NOT the immediate automatic next action.
REAL requires: (1) Delivery accepted; (2) deterministic QA accepted; (3) a new explicit Morris REAL GO.

## Instruction ChatGPT

Read the remote canonical Review Handoff (`origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`) before validating this report.

## Complete modified content

### cursorTrustMarkerPathCompatibility.ts (new, complete)

```typescript
/**
 * Defensive Cursor `--trust` marker path compatibility.
 *
 * Derived from observed Darwin ENAMETOOLONG on
 * `mkdir ~/.cursor/projects/<flattened-workspace-identity>` (pid 19887).
 * Not a public Cursor API contract.
 *
 * Observed flatten (ASCII case): strip leading separators, drop `.`,
 * map `_` → `-`, map `/` → `-`. Compatibility uses UTF-8 BYTE length
 * of that single derived component against Darwin NAME_MAX (255).
 */
export const CURSOR_TRUST_MARKER_NAME_MAX_BYTES = 255;

export const CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON =
  "REAL_WORKSPACE_INVALID:cursor_trust_marker_path_too_long";

export function cursorTrustMarkerProjectComponent(
  workspaceAbsPath: string,
): string {
  const posix = workspaceAbsPath.replace(/\\/g, "/").replace(/^\/+/, "");
  return posix.replaceAll(".", "").replaceAll("_", "-").replaceAll("/", "-");
}

export function cursorTrustMarkerProjectComponentByteLength(
  workspaceAbsPath: string,
): number {
  return Buffer.byteLength(
    cursorTrustMarkerProjectComponent(workspaceAbsPath),
    "utf8",
  );
}

export function isCursorTrustMarkerPathCompatible(
  workspaceAbsPath: string,
): boolean {
  return (
    cursorTrustMarkerProjectComponentByteLength(workspaceAbsPath) <=
    CURSOR_TRUST_MARKER_NAME_MAX_BYTES
  );
}

export function assertCursorTrustMarkerPathCompatible(
  workspaceAbsPath: string,
): void {
  if (!isCursorTrustMarkerPathCompatible(workspaceAbsPath)) {
    throw new Error(CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON);
  }
}
```

### studioGitWorktreeWorkspace.ts (complete POST)

```typescript
/**
 * StudioGitWorktreeWorkspace — fail-closed isolated Git worktree prep (M4 R2).
 *
 * Injectable GitCommandRunner; production default spawn(shell:false).
 * Tests MUST inject FakeGitCommandRunner — never run real git worktree in REAL-OFF.
 */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawn as nodeSpawn } from "node:child_process";
import type {
  PrepareWorkspaceRequest,
  PrepareWorkspaceResult,
  RealExecutionWorkspacePort,
} from "../ports/realExecutionWorkspacePort";
import { assertCursorTrustMarkerPathCompatible } from "./cursorTrustMarkerPathCompatibility";

export {
  CURSOR_TRUST_MARKER_NAME_MAX_BYTES,
  CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
  assertCursorTrustMarkerPathCompatible,
  cursorTrustMarkerProjectComponent,
  cursorTrustMarkerProjectComponentByteLength,
  isCursorTrustMarkerPathCompatible,
} from "./cursorTrustMarkerPathCompatibility";

export type GitCommandResult = {
  readonly stdout: string;
  readonly stderr: string;
  readonly exitCode: number;
};

export interface GitCommandRunner {
  run(
    argv: readonly string[],
    cwd: string,
  ): Promise<GitCommandResult>;
}

export type StudioGitWorktreeWorkspaceOptions = {
  readonly repoRoot: string;
  readonly execRoot: string;
  readonly gitRunner: GitCommandRunner;
};

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

export function isFullGitSha(value: unknown): value is string {
  return typeof value === "string" && FULL_SHA_RE.test(value);
}

/** Physical leaf only — `wt-` + sha256(attemptId) hex prefix (24). */
export function physicalWorktreeLeafForAttempt(attemptId: string): string {
  const digest = createHash("sha256")
    .update(attemptId, "utf8")
    .digest("hex")
    .slice(0, 24);
  return `wt-${digest}`;
}

export function workspacePathForAttempt(
  execRoot: string,
  attemptId: string,
): string {
  return path.resolve(execRoot, physicalWorktreeLeafForAttempt(attemptId));
}

export class StudioGitWorktreeWorkspace implements RealExecutionWorkspacePort {
  private readonly repoRoot: string;
  private readonly execRoot: string;
  private readonly gitRunner: GitCommandRunner;

  constructor(options: StudioGitWorktreeWorkspaceOptions) {
    if (!options.repoRoot || options.repoRoot.trim() === "") {
      throw new Error("studio_git_worktree_repo_root_required");
    }
    if (!options.execRoot || options.execRoot.trim() === "") {
      throw new Error("studio_git_worktree_exec_root_required");
    }
    const repoRoot = path.resolve(options.repoRoot);
    const execRoot = path.resolve(options.execRoot);
    if (repoRoot === execRoot) {
      throw new Error("studio_git_worktree_repo_exec_roots_must_differ");
    }
    if (!options.gitRunner) {
      throw new Error("studio_git_worktree_git_runner_required");
    }
    this.repoRoot = repoRoot;
    this.execRoot = execRoot;
    this.gitRunner = options.gitRunner;
  }

  async prepareWorkspace(
    request: PrepareWorkspaceRequest,
  ): Promise<PrepareWorkspaceResult> {
    if (!isFullGitSha(request.baseHeadSha)) {
      throw new Error("REAL_WORKSPACE_INVALID:base_head_sha_invalid");
    }
    const baseHeadSha = request.baseHeadSha.toLowerCase();
    const workspacePath = workspacePathForAttempt(
      this.execRoot,
      request.attemptId,
    );

    if (
      workspacePath !== this.execRoot &&
      !workspacePath.startsWith(this.execRoot + path.sep)
    ) {
      throw new Error("REAL_WORKSPACE_INVALID:workspace_outside_exec_root");
    }
    if (existsSync(workspacePath)) {
      throw new Error("REAL_WORKSPACE_INVALID:workspace_path_exists");
    }
    assertCursorTrustMarkerPathCompatible(workspacePath);

    // a) verify commit exists
    const verify = await this.gitRunner.run(
      ["rev-parse", "--verify", `${baseHeadSha}^{commit}`],
      this.repoRoot,
    );
    if (verify.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:base_head_sha_missing");
    }

    // b) worktree add --detach
    const add = await this.gitRunner.run(
      ["worktree", "add", "--detach", workspacePath, baseHeadSha],
      this.repoRoot,
    );
    if (add.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:worktree_add_failed");
    }

    // c) rev-parse HEAD must equal baseHeadSha exactly
    const head = await this.gitRunner.run(["rev-parse", "HEAD"], workspacePath);
    if (head.exitCode !== 0) {
      throw new Error("REAL_WORKSPACE_INVALID:head_rev_parse_failed");
    }
    const verifiedHeadSha = head.stdout.trim().toLowerCase();
    if (verifiedHeadSha !== baseHeadSha) {
      throw new Error("REAL_WORKSPACE_INVALID:head_mismatch");
    }

    return { workspacePath, verifiedHeadSha };
  }
}

/**
 * Production GitCommandRunner — spawn(shell:false).
 * Tests MUST NOT use this; inject FakeGitCommandRunner instead.
 */
export class NodeGitCommandRunner implements GitCommandRunner {
  async run(
    argv: readonly string[],
    cwd: string,
  ): Promise<GitCommandResult> {
    return await new Promise((resolve) => {
      const child = nodeSpawn("git", [...argv], {
        cwd,
        shell: false,
        stdio: ["ignore", "pipe", "pipe"],
      });
      let stdout = "";
      let stderr = "";
      child.stdout?.on("data", (c: Buffer) => {
        if (stdout.length < 64 * 1024) stdout += c.toString("utf8");
      });
      child.stderr?.on("data", (c: Buffer) => {
        if (stderr.length < 64 * 1024) stderr += c.toString("utf8");
      });
      child.on("error", () => {
        resolve({ stdout, stderr: stderr || "git_spawn_error", exitCode: 1 });
      });
      child.on("close", (code) => {
        resolve({ stdout, stderr, exitCode: code ?? 1 });
      });
    });
  }
}
```

### studioCursorRealLaunchGateway.ts (complete POST, includes preserved ARCH-WOP-1 timeoutMs)

```typescript
/**
 * StudioCursorRealLaunchGateway — OA-owned REAL launch ACL (D-M4-01).
 *
 * Harvested concepts from OPS1 (no import from lib/ops1).
 * Default REAL process enablement OFF via SFIA_STUDIO_CURSOR_REAL.
 * Requires ProcessRunner + RealExecutionWorkspacePort (no Fake defaults).
 * Order: enablement → bin resolve → prepareWorkspace → runner.invoke.
 */
import { accessSync, constants } from "node:fs";
import path from "node:path";
import {
  isStudioCursorRealEnabled,
  M4_REAL_GATEWAY_ADAPTER_ID,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
} from "../domain/realLaunchSafety";
import type {
  ProcessRunner,
  RealExecutionLaunchPort,
  RealLaunchRequest,
  RealLaunchResult,
  RealProcessObservation,
} from "../ports/realExecutionLaunchPort";
import type { RealExecutionWorkspacePort } from "../ports/realExecutionWorkspacePort";
import { DisabledRealProcessRunner } from "./nodeCursorProcessRunner";
import { assertResolvedTimeoutMs } from "@/lib/oa/execution-contract";
import {
  CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
  isCursorTrustMarkerPathCompatible,
} from "./cursorTrustMarkerPathCompatibility";

export type StudioCursorRealLaunchGatewayOptions = {
  readonly processRunner: ProcessRunner;
  readonly workspacePort: RealExecutionWorkspacePort;
  readonly env?: NodeJS.ProcessEnv;
  readonly resolveCursorBin?: () => string | null;
};

/** Copy of OPS1 resolveCursorBinPath pattern — no ops1 import. */
export function resolveCursorBinPath(
  env: NodeJS.ProcessEnv = process.env,
): string | null {
  const candidates = [
    env.SFIA_CURSOR_BIN,
    "/Applications/Cursor.app/Contents/Resources/app/bin/cursor",
    path.join(env.HOME ?? "", ".local/bin/cursor-agent"),
  ].filter(Boolean) as string[];
  for (const c of candidates) {
    try {
      accessSync(c, constants.X_OK);
      return c;
    } catch {
      /* next */
    }
  }
  return null;
}

export const resolveStudioCursorBinPath = resolveCursorBinPath;

export { DisabledRealProcessRunner };

export class StudioCursorRealLaunchGateway implements RealExecutionLaunchPort {
  readonly gatewayId = M4_REAL_GATEWAY_ADAPTER_ID;
  readonly externalEffects = true as const;

  private readonly runner: ProcessRunner;
  private readonly workspacePort: RealExecutionWorkspacePort;
  private readonly env: NodeJS.ProcessEnv;
  private readonly resolveBin: () => string | null;
  /**
   * Fallback only when the runner has no observe/awaitCompletion.
   * Live observation source is the runner registry when present
   * (single source — no competing snapshot).
   */
  private readonly fallbackObservations = new Map<
    string,
    RealProcessObservation
  >();

  constructor(options: StudioCursorRealLaunchGatewayOptions) {
    if (!options.processRunner) {
      throw new Error("studio_cursor_real_launch_process_runner_required");
    }
    if (!options.workspacePort) {
      throw new Error("studio_cursor_real_launch_workspace_port_required");
    }
    this.runner = options.processRunner;
    this.workspacePort = options.workspacePort;
    this.env = options.env ?? process.env;
    this.resolveBin =
      options.resolveCursorBin ?? (() => resolveCursorBinPath(this.env));
  }

  async launch(request: RealLaunchRequest): Promise<RealLaunchResult> {
    if (request.adapterRef !== this.gatewayId) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "adapter_ref_mismatch",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    if (!isStudioCursorRealEnabled(this.env)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "studio_cursor_real_disabled",
        realProcessInvoked: false,
        detailCode: "REAL_BOUNDARY_DISABLED",
      };
    }

    if (
      (request.target && request.target.includes("UNRESOLVED")) ||
      (request.action && request.action.includes("UNRESOLVED"))
    ) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "unresolved_contract_refused",
        realProcessInvoked: false,
        detailCode: "REAL_AGENT_PROFILE_INVALID",
      };
    }

    if (!assertResolvedTimeoutMs(request.timeoutMs)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "resolved_timeout_ms_required",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }

    const baseHeadSha =
      request.baseHeadSha ?? request.worktreeBaseHeadSha ?? "";
    if (!/^[0-9a-f]{40}$/i.test(baseHeadSha)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "base_head_sha_invalid",
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    const bin = this.resolveBin();
    if (!bin) {
      return {
        outcome: "fail",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "cursor_unavailable",
        realProcessInvoked: false,
        detailCode: "CURSOR_UNAVAILABLE",
      };
    }

    let workspacePath: string;
    try {
      const prepared = await this.workspacePort.prepareWorkspace({
        attemptId: request.attemptId,
        baseHeadSha,
      });
      workspacePath = prepared.workspacePath;
    } catch (err) {
      const message = err instanceof Error ? err.message : "workspace_failed";
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: message.includes("REAL_WORKSPACE_INVALID")
          ? message
          : `workspace_prepare_failed:${message}`,
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    if (!isCursorTrustMarkerPathCompatible(workspacePath)) {
      return {
        outcome: "reject",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
        realProcessInvoked: false,
        detailCode: "REAL_WORKSPACE_INVALID",
      };
    }

    // Fixed argv shape — executable is separate; no user-controlled shell.
    // --mode ask: local CLI help documents ask as read-only Q&A (no edits).
    // Shell under ask remains unresolved by help alone; future REAL must observe.
    const instruction = [
      "TÂCHE UNIQUE — preuve read-only déterministe.",
      "Lire uniquement le fichier README.md à la racine du workspace.",
      "Ne modifier aucun fichier.",
      "Ne créer aucun fichier.",
      "Ne lancer aucune commande Shell.",
      "Ne faire aucune recherche récursive, Glob ou Grep.",
      "Ne consulter aucun autre fichier.",
      "Si README.md peut être lu, répondre exactement :",
      "M4_READ_ONLY_OK",
      "Si README.md ne peut pas être lu, répondre exactement :",
      "M4_READ_ONLY_UNAVAILABLE",
      `target=${request.target ?? ""}`,
      `action=${request.action ?? ""}`,
      `scope=${request.scope ?? ""}`,
      `fingerprint=${request.semanticFingerprint}`,
      "Aucune mutation, aucun git remote/commit/push/PR/merge.",
    ].join("\n");

    const argv = [
      "agent",
      "--print",
      "--mode",
      "ask",
      "--workspace",
      workspacePath,
      "--trust",
      "--sandbox",
      "enabled",
      instruction,
    ];

    try {
      const invoked = await this.runner.invoke({
        attemptId: request.attemptId,
        executable: bin,
        cwd: workspacePath,
        argv,
        timeoutMs: request.timeoutMs,
        env: {
          ...this.env,
          [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
        },
      });

      if (!invoked.realProcessInvoked) {
        return {
          outcome: "fail",
          gatewayId: this.gatewayId,
          attemptId: request.attemptId,
          reason: "real_process_not_invoked",
          realProcessInvoked: false,
          detailCode: "REAL_LAUNCH_FAILED",
        };
      }

      if (typeof this.runner.observe !== "function") {
        this.fallbackObservations.set(invoked.processRef, {
          processRef: invoked.processRef,
          exitCode: invoked.observation?.exitCode ?? null,
          timedOut: invoked.observation?.timedOut ?? false,
          stdout: invoked.observation?.stdout ?? "",
          stderr: invoked.observation?.stderr ?? "",
          durationMs: invoked.observation?.durationMs ?? 0,
          realProcessInvoked: true,
          worktreeRef: workspacePath,
        });
      }

      return {
        outcome: "ack",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        realProcessInvoked: true,
        processRef: invoked.processRef,
        worktreeRef: workspacePath,
      };
    } catch {
      return {
        outcome: "fail",
        gatewayId: this.gatewayId,
        attemptId: request.attemptId,
        reason: "real_launch_threw",
        realProcessInvoked: false,
        detailCode: "REAL_LAUNCH_FAILED",
      };
    }
  }

  async observe(processRef: string): Promise<RealProcessObservation | null> {
    if (typeof this.runner.observe === "function") {
      return this.runner.observe(processRef);
    }
    return this.fallbackObservations.get(processRef) ?? null;
  }

  async awaitCompletion(
    processRef: string,
  ): Promise<RealProcessObservation | null> {
    if (typeof this.runner.awaitCompletion === "function") {
      return this.runner.awaitCompletion(processRef);
    }
    return this.observe(processRef);
  }
}

/** @deprecated Prefer StudioCursorRealLaunchGateway. */
export { StudioCursorRealLaunchGateway as CursorCliLaunchGateway };
```

### cursorTrustMarkerNameMax.test.ts (new, complete)

```typescript
/**
 * Cycle 8 Delivery Amend — Cursor trust-marker NAME_MAX compatibility.
 * Fake Git + FakeProcessRunner only. ZERO REAL.
 * @vitest-environment node
 */
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  assertStudioCursorRealOffForTests,
  M4_REAL_GATEWAY_ADAPTER_ID,
  SFIA_STUDIO_CURSOR_REAL_FLAG,
  StudioCursorRealLaunchGateway,
  StudioGitWorktreeWorkspace,
  workspacePathForAttempt,
} from "@/lib/oa/execution-attempt";
import {
  CURSOR_TRUST_MARKER_NAME_MAX_BYTES,
  CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON,
  cursorTrustMarkerProjectComponent,
  cursorTrustMarkerProjectComponentByteLength,
  isCursorTrustMarkerPathCompatible,
} from "@/lib/oa/execution-attempt/infrastructure/cursorTrustMarkerPathCompatibility";
import { physicalWorktreeLeafForAttempt } from "@/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace";
import { FakeProcessRunner } from "./support/fakeProcessRunner";
import {
  FakeGitCommandRunner,
  FakeRealExecutionWorkspacePort,
} from "./support/fakeSpawnAndGit";
import { M4_TEST_BASE_HEAD_SHA } from "./support/m4Fixtures";

const HISTORICAL_ATTEMPT =
  "xat:m3:m3-res:dec:f2:85c4d482-baea-4e19-8924-f817fe059824";

/** Forensic corpus — failed pid 19887 execRoot (test fixture only, not product logic). */
const HISTORICAL_EXEC_ROOT =
  "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees";

const HISTORICAL_LONG_LEAF =
  "wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15";

function independentDigest(attemptId: string): string {
  return createHash("sha256")
    .update(attemptId, "utf8")
    .digest("hex")
    .slice(0, 24);
}

function historicalLongLeaf(attemptId: string): string {
  const digest = independentDigest(attemptId);
  const safe = attemptId.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 48);
  return `wt-${safe}-${digest}`;
}

function enabledGateway(input: {
  runner: FakeProcessRunner;
  workspacePath: string;
}): StudioCursorRealLaunchGateway {
  return new StudioCursorRealLaunchGateway({
    processRunner: input.runner,
    workspacePort: new FakeRealExecutionWorkspacePort({
      workspacePath: input.workspacePath,
    }),
    env: {
      ...process.env,
      [SFIA_STUDIO_CURSOR_REAL_FLAG]: "1",
    },
    resolveCursorBin: () => "/tmp/fake-cursor-bin",
  });
}

function launchRequest(attemptId: string) {
  return {
    attemptId,
    executionContractId: "xct:namemax",
    executionContractVersion: 1,
    semanticFingerprint: "fp:namemax",
    selectedAgentRef: "agt:m4.cursor.bounded_readonly",
    adapterRef: M4_REAL_GATEWAY_ADAPTER_ID,
    correlationId: "cor:namemax",
    baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    action: "cursor.read_only.inspect",
    target: "workspace.isolated.read",
    scope: "studio.m4.real_off",
    timeoutMs: 15 * 60 * 1000,
  };
}

describe("Cursor trust-marker NAME_MAX compatibility", () => {
  beforeEach(() => {
    assertStudioCursorRealOffForTests();
  });
  afterEach(() => {
    assertStudioCursorRealOffForTests();
  });

  it("T1 same Attempt ID → identical physical path", () => {
    const a = workspacePathForAttempt("/tmp/exec-a", HISTORICAL_ATTEMPT);
    const b = workspacePathForAttempt("/tmp/exec-a", HISTORICAL_ATTEMPT);
    expect(a).toBe(b);
    expect(physicalWorktreeLeafForAttempt(HISTORICAL_ATTEMPT)).toBe(
      `wt-${independentDigest(HISTORICAL_ATTEMPT)}`,
    );
  });

  it("T2 distinct Attempts → distinct leaves", () => {
    expect(physicalWorktreeLeafForAttempt("xat:one")).not.toBe(
      physicalWorktreeLeafForAttempt("xat:two"),
    );
  });

  it("T3 historical long Attempt → fixed short leaf, no Attempt id text", () => {
    const leaf = physicalWorktreeLeafForAttempt(HISTORICAL_ATTEMPT);
    expect(leaf).toBe(`wt-${independentDigest(HISTORICAL_ATTEMPT)}`);
    expect(leaf.length).toBe(27);
    expect(leaf.startsWith("wt-")).toBe(true);
    expect(leaf).not.toContain("xat");
    expect(leaf).not.toContain("85c4d482");
    expect(leaf).not.toMatch(/m3-res/);
    expect(historicalLongLeaf(HISTORICAL_ATTEMPT)).toBe(HISTORICAL_LONG_LEAF);
    expect(historicalLongLeaf(HISTORICAL_ATTEMPT).length).toBeGreaterThan(
      leaf.length,
    );
  });

  it("T4 historical failure-depth root + short leaf is compatible", () => {
    const oldPath = `${HISTORICAL_EXEC_ROOT}/${HISTORICAL_LONG_LEAF}`;
    const newPath = workspacePathForAttempt(
      HISTORICAL_EXEC_ROOT,
      HISTORICAL_ATTEMPT,
    );
    const oldBytes = cursorTrustMarkerProjectComponentByteLength(oldPath);
    const newBytes = cursorTrustMarkerProjectComponentByteLength(newPath);
    expect(oldBytes).toBe(269);
    expect(oldBytes).toBeGreaterThan(CURSOR_TRUST_MARKER_NAME_MAX_BYTES);
    expect(isCursorTrustMarkerPathCompatible(oldPath)).toBe(false);
    expect(newBytes).toBeLessThanOrEqual(CURSOR_TRUST_MARKER_NAME_MAX_BYTES);
    expect(isCursorTrustMarkerPathCompatible(newPath)).toBe(true);
    expect(path.basename(newPath)).toBe(
      physicalWorktreeLeafForAttempt(HISTORICAL_ATTEMPT),
    );
  });

  it("T5 short execRoot FakeGit prepare still verifies HEAD", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "m4-nm-t5-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    const prepared = await ws.prepareWorkspace({
      attemptId: HISTORICAL_ATTEMPT,
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    expect(prepared.verifiedHeadSha).toBe(M4_TEST_BASE_HEAD_SHA);
    expect(prepared.workspacePath).toBe(
      workspacePathForAttempt(execRoot, HISTORICAL_ATTEMPT),
    );
    expect(git.calls.map((c) => c.argv[0])).toEqual([
      "rev-parse",
      "worktree",
      "rev-parse",
    ]);
    expect(git.calls[1].argv.slice(0, 3)).toEqual([
      "worktree",
      "add",
      "--detach",
    ]);
  });

  it("T6 unsafe extreme execRoot fail-closed before git", async () => {
    const execRoot = path.join("/tmp", "n".repeat(240));
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot: "/tmp/repo-nm",
      execRoot,
      gitRunner: git,
    });
    const planned = workspacePathForAttempt(execRoot, HISTORICAL_ATTEMPT);
    expect(isCursorTrustMarkerPathCompatible(planned)).toBe(false);
    await expect(
      ws.prepareWorkspace({
        attemptId: HISTORICAL_ATTEMPT,
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON);
    expect(git.calls).toHaveLength(0);
  });

  it("T7 unsafe injected workspace never reaches runner", async () => {
    const unsafe =
      HISTORICAL_EXEC_ROOT + "/" + HISTORICAL_LONG_LEAF;
    const runner = new FakeProcessRunner({ processRef: "proc:sim:t7" });
    const gateway = enabledGateway({ runner, workspacePath: unsafe });
    const result = await gateway.launch(launchRequest("xat:t7"));
    expect(result.outcome).toBe("reject");
    if (result.outcome === "reject") {
      expect(result.detailCode).toBe("REAL_WORKSPACE_INVALID");
      expect(result.reason).toBe(CURSOR_TRUST_MARKER_PATH_TOO_LONG_REASON);
      expect(result.realProcessInvoked).toBe(false);
    }
    expect(runner.calls).toHaveLength(0);
    expect(runner.simulatedInvokeCount).toBe(0);
  });

  it("T8 exact 255 bytes ALLOW, 256 REJECT", () => {
    const max = `/${"a".repeat(CURSOR_TRUST_MARKER_NAME_MAX_BYTES)}`;
    const over = `/${"a".repeat(CURSOR_TRUST_MARKER_NAME_MAX_BYTES + 1)}`;
    expect(cursorTrustMarkerProjectComponentByteLength(max)).toBe(255);
    expect(isCursorTrustMarkerPathCompatible(max)).toBe(true);
    expect(cursorTrustMarkerProjectComponentByteLength(over)).toBe(256);
    expect(isCursorTrustMarkerPathCompatible(over)).toBe(false);
  });

  it("T9 UTF-8 bytes not JS .length", () => {
    const allow = `/${"é".repeat(127)}`;
    const reject = `/${"é".repeat(128)}`;
    expect(cursorTrustMarkerProjectComponent(allow).length).toBe(127);
    expect(cursorTrustMarkerProjectComponentByteLength(allow)).toBe(254);
    expect(isCursorTrustMarkerPathCompatible(allow)).toBe(true);
    expect(cursorTrustMarkerProjectComponent(reject).length).toBe(128);
    expect(cursorTrustMarkerProjectComponentByteLength(reject)).toBe(256);
    expect(isCursorTrustMarkerPathCompatible(reject)).toBe(false);
  });

  it("T8/T9 gateway uses the same byte rule", async () => {
    const runner = new FakeProcessRunner({ processRef: "proc:sim:t8" });
    const maxPath = `/${"a".repeat(255)}`;
    const overPath = `/${"a".repeat(256)}`;
    const utfReject = `/${"é".repeat(128)}`;

    const allowGw = enabledGateway({ runner, workspacePath: maxPath });
    const allow = await allowGw.launch(launchRequest("xat:t8-allow"));
    expect(allow.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(1);

    const overGw = enabledGateway({ runner, workspacePath: overPath });
    const over = await overGw.launch(launchRequest("xat:t8-over"));
    expect(over.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(1);

    const utfGw = enabledGateway({ runner, workspacePath: utfReject });
    const utf = await utfGw.launch(launchRequest("xat:t9-utf"));
    expect(utf.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(1);
  });

  it("T10 safe workspace invokes fake runner once with unchanged argv", async () => {
    const workspacePath = "/tmp/fake-exec-root/wt-namemax-ok";
    const runner = new FakeProcessRunner({ processRef: "proc:sim:t10" });
    const gateway = enabledGateway({ runner, workspacePath });
    const result = await gateway.launch(launchRequest("xat:t10"));
    expect(result.outcome).toBe("ack");
    expect(runner.calls).toHaveLength(1);
    const call = runner.calls[0];
    expect(call.cwd).toBe(workspacePath);
    expect(call.timeoutMs).toBe(15 * 60 * 1000);
    const argv = [...call.argv];
    expect(argv[0]).toBe("agent");
    expect(argv).toEqual([
      "agent",
      "--print",
      "--mode",
      "ask",
      "--workspace",
      workspacePath,
      "--trust",
      "--sandbox",
      "enabled",
      argv[argv.length - 1],
    ]);
    expect(argv[argv.indexOf("--workspace") + 1]).toBe(workspacePath);
    expect(argv[argv.indexOf("--sandbox") + 1]).toBe("enabled");
    const instruction = argv[argv.length - 1];
    expect(instruction).toContain("README.md");
    expect(instruction).toContain("M4_READ_ONLY_OK");
    expect(instruction).toContain("M4_READ_ONLY_UNAVAILABLE");
    expect(instruction).toMatch(/Ne lancer aucune commande Shell/);
    expect(instruction).toContain("target=workspace.isolated.read");
    expect(instruction).toContain("action=cursor.read_only.inspect");
    expect(instruction).toContain("scope=studio.m4.real_off");
  });

  it("T11 NAME_MAX reject does not invoke then retry", async () => {
    const runner = new FakeProcessRunner({ processRef: "proc:sim:t11" });
    const gateway = enabledGateway({
      runner,
      workspacePath: `/${"a".repeat(256)}`,
    });
    await gateway.launch(launchRequest("xat:t11-a"));
    await gateway.launch(launchRequest("xat:t11-b"));
    expect(runner.calls).toHaveLength(0);
  });

  it("T12 historical 269-component path never reaches runner.invoke", async () => {
    const historical269 = `${HISTORICAL_EXEC_ROOT}/${HISTORICAL_LONG_LEAF}`;
    expect(cursorTrustMarkerProjectComponentByteLength(historical269)).toBe(
      269,
    );
    const runner = new FakeProcessRunner({ processRef: "proc:sim:t12" });
    const gateway = enabledGateway({
      runner,
      workspacePath: historical269,
    });
    const result = await gateway.launch(launchRequest(HISTORICAL_ATTEMPT));
    expect(result.outcome).toBe("reject");
    expect(runner.calls).toHaveLength(0);
  });

  it("T13 existing workspace validations preserved", async () => {
    const root = mkdtempSync(path.join(os.tmpdir(), "m4-nm-t13-"));
    const repoRoot = path.join(root, "repo");
    const execRoot = path.join(root, "exec");
    mkdirSync(repoRoot);
    mkdirSync(execRoot);
    const git = new FakeGitCommandRunner({
      baseHeadSha: M4_TEST_BASE_HEAD_SHA,
    });
    const ws = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot,
      gitRunner: git,
    });
    await expect(
      ws.prepareWorkspace({
        attemptId: "xat:t13",
        baseHeadSha: "not-a-sha",
      }),
    ).rejects.toThrow(/base_head_sha_invalid/);

    const existing = workspacePathForAttempt(execRoot, "xat:t13-exists");
    mkdirSync(existing, { recursive: true });
    writeFileSync(path.join(existing, "marker"), "x");
    await expect(
      ws.prepareWorkspace({
        attemptId: "xat:t13-exists",
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(/workspace_path_exists/);

    const mismatch = new StudioGitWorktreeWorkspace({
      repoRoot,
      execRoot: path.join(root, "exec-mis"),
      gitRunner: new FakeGitCommandRunner({
        baseHeadSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      }),
    });
    mkdirSync(path.join(root, "exec-mis"));
    await expect(
      mismatch.prepareWorkspace({
        attemptId: "xat:t13-mis",
        baseHeadSha: M4_TEST_BASE_HEAD_SHA,
      }),
    ).rejects.toThrow(/head_mismatch/);
  });

  it("T14 no Cursor REAL / no OpenAI LIVE in this file", () => {
    expect(process.env.SFIA_STUDIO_CURSOR_REAL).not.toBe("1");
    expect(process.env.SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY).not.toBe(
      "1",
    );
    expect(cursorTrustMarkerProjectComponent("/tmp/a_b.c/d")).toBe(
      "tmp-a-bc-d",
    );
  });
});
```
