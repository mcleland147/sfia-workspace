# ChatGPT Review Pack — FULL — PRE-M6 CANDIDATE PR READINESS

## Meta

| Champ | Valeur |
|-------|--------|
| Timestamp Europe/Paris | 2026-08-18 10:18:00 CEST (+0200) |
| GO Morris consomme | GO MORRIS — CONSOLIDATE CURRENT SFIA STUDIO PRE-M6 CANDIDATE — PR READINESS — ONE COHERENT PROJECT COMMIT — PUSH PROJECT BRANCH — OPEN DRAFT PR — NO MERGE — NO BRANCH DELETE |
| Cycle / profil / typologie | Cycle 13 — PR readiness / controlled integration · Critical · EVOL |
| Repo | mcleland147/sfia-workspace |
| Branche candidate | delivery/sfia-studio-pre-m6-ui-option-a |
| HEAD local | 0d33478566627a9bf507d5a06323962d349308ee |
| origin/main | a3ac418f3bc2ebb006cbc58f902f13629871014d |
| merge-base HEAD↔origin/main | 0d33478566627a9bf507d5a06323962d349308ee |
| origin/sfia/review-handoff pre | c225ae0f96ac1117fb5288480066b48c7e3dbd0e |
| staged initial | empty |
| dirty versioned scope | 69 modified tracked + 31 untracked project paths |
| dirty temp/local scope | .tmp-sfia-review/** extensive, excluded from commit |
| project git actions | no commit · no push · no PR · no merge |

## Git Truth Check

- Branch check: PASS — `delivery/sfia-studio-pre-m6-ui-option-a`
- HEAD provenance check: PASS — still at expected `0d33478566627a9bf507d5a06323962d349308ee`
- Staged-at-start check: PASS — empty
- origin/main drift since prior handoff: YES — branch is behind by 2 commits:
  - `085828e` `docs(sfia): add fake-real fidelity and progressive proof`
  - `a3ac418` merge PR #360
- Handoff drift since prior expected commit/blob: YES — remote handoff advanced to `c225ae0f96ac1117fb5288480066b48c7e3dbd0e`
- New local project commits since expected HEAD: NONE

## DIRTY_SCOPE_MATRIX

### A. PRE-M6 PRODUCT UI / PRESENTATION — intended
Shared reason: new `/studio` product entry, product shell, conversation-first project principal, history/LPS/recovery surfaces, and related presentation CSS.

- `M` `projects/sfia-studio/app/app/globals.css`
- `M` `projects/sfia-studio/app/app/studio/projects/[id]/page.tsx`
- `M` `projects/sfia-studio/app/app/studio/projects/new/page.tsx`
- `M` `projects/sfia-studio/app/components/shell/StudioShell.tsx`
- `M` `projects/sfia-studio/app/components/shell/UtilityRail.tsx`
- `M` `projects/sfia-studio/app/components/shell/utility-rail.module.css`
- `M` `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`
- `M` `projects/sfia-studio/app/features/project-assistant/project-assistant.module.css`
- `M` `projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx`
- `M` `projects/sfia-studio/app/features/vertical-slice-ui/ProjectWorkspaceView.tsx`
- `M` `projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx`
- `M` `projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css`
- `M` `projects/sfia-studio/app/features/vertical-slice-ui/project-workspace.module.css`
- `M` `projects/sfia-studio/app/styles/shell.module.css`
- `M` `projects/sfia-studio/app/styles/tokens.css`
- `A` `projects/sfia-studio/app/app/studio/page.tsx`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/README.md`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.module.css`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.module.css`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.module.css`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.module.css`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/index.ts`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/product-tokens.css`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.module.css`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.module.css`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LpsSurface.tsx`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.module.css`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/RecoverySurface.tsx`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/types.ts`
- `A` `projects/sfia-studio/app/features/studio-projects/LivingProjectStatePanel.tsx`
- `A` `projects/sfia-studio/app/features/studio-projects/ProjectHistoryPanel.tsx`
- `A` `projects/sfia-studio/app/features/studio-projects/ProjectPrincipalClient.tsx`
- `A` `projects/sfia-studio/app/features/studio-projects/ProjectRecoveryBanner.tsx`
- `A` `projects/sfia-studio/app/features/studio-projects/StudioProjectsHome.tsx`
- `A` `projects/sfia-studio/app/features/studio-projects/index.ts`
- `A` `projects/sfia-studio/app/features/studio-projects/living-project-state-panel.module.css`
- `A` `projects/sfia-studio/app/features/studio-projects/project-history-panel.module.css`
- `A` `projects/sfia-studio/app/features/studio-projects/project-principal.module.css`
- `A` `projects/sfia-studio/app/features/studio-projects/project-recovery-banner.module.css`
- `A` `projects/sfia-studio/app/features/studio-projects/studio-projects-home.module.css`

### B. PRE-M6 PRODUCT APPLICATION WIRING — intended
Shared reason: route/navigation, product create/open/list actions, F3 wiring from GO/prepare/confirm to attempt/evidence/recommendation, history/recovery hooks.

- `M` `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `M` `projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts`
- `M` `projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts`
- `M` `projects/sfia-studio/app/features/project-assistant/f3/constants.ts`
- `M` `projects/sfia-studio/app/features/project-assistant/f3/index.ts`
- `M` `projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts`
- `M` `projects/sfia-studio/app/features/project-assistant/f3/rehydrateEvidenceOutcomeFromLps.ts`
- `M` `projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts`
- `M` `projects/sfia-studio/app/features/project-assistant/f3/types.ts`
- `M` `projects/sfia-studio/app/features/project-assistant/types.ts`
- `M` `projects/sfia-studio/app/lib/navigation.ts`
- `M` `projects/sfia-studio/app/lib/vertical-slice-runtime/actions.ts`
- `M` `projects/sfia-studio/app/lib/vertical-slice-runtime/index.ts`
- `M` `projects/sfia-studio/app/lib/vertical-slice-runtime/mapping.ts`
- `M` `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`
- `M` `projects/sfia-studio/app/lib/vertical-slice-runtime/types.ts`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`
- `A` `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useRunningAttemptO3Observation.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/deriveAttemptProvenance.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedFixtureSafeContract.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/fixtureSafeM3ResolutionProfile.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/postEvidenceNoraAnalysis.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/prepareAndResolveM3ProductPath.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/selectProductM3ResolutionProfile.ts`
- `A` `projects/sfia-studio/app/features/project-assistant/f3/validateResolvedM3ExecutionBoundary.ts`
- `A` `projects/sfia-studio/app/lib/oa/project/application/listProjects.ts`

### C. PRE-M6 SEMANTIC / FAKE-REAL FIXES — intended but high review weight
Shared reason: fake/real fail-closed semantics, execution window policy, bounded deterministic boundary, attempt/contract/project invariants and persistence support.

- `M` `projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-attempt/domain/invariants.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-attempt/index.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioGitWorktreeWorkspace.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/testExecutionAdapter.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-contract/application/supersedeExecutionContract.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts`
- `M` `projects/sfia-studio/app/lib/oa/execution-contract/index.ts`
- `M` `projects/sfia-studio/app/lib/oa/project/domain/types.ts`
- `M` `projects/sfia-studio/app/lib/oa/project/index.ts`
- `M` `projects/sfia-studio/app/lib/oa/project/infrastructure/memoryProjectRepository.ts`
- `M` `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/createSqliteProductProjectServices.ts`
- `M` `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProjectRepository.ts`
- `M` `projects/sfia-studio/app/lib/oa/project/ports/projectAuditJournalPort.ts`
- `M` `projects/sfia-studio/app/lib/oa/project/ports/projectRepositoryPort.ts`
- `M` `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
- `M` `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json`
- `A` `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`
- `A` `projects/sfia-studio/app/lib/oa/execution-attempt/application/observationSchedule.ts`
- `A` `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/cursorTrustMarkerPathCompatibility.ts`
- `A` `projects/sfia-studio/app/lib/oa/execution-contract/domain/executionWindowPolicy.ts`
- `A` `projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts`
- `A` `projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts`
- `A` `projects/sfia-studio/app/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl.ts`
- `A` `projects/sfia-studio/app/lib/vertical-slice-runtime/resolveBoundedReadOnlyBaseHeadSha.ts`

### D. TESTS UNIT / UI / E2E PRE-M6 — intended
Shared reason: unit/UI/E2E coverage for Option A, project assistant, semantic reserves, deterministic boundary, observation policy, NAME_MAX, negative states, and project principal.

- `M` `projects/sfia-studio/app/__tests__/increment-a.test.tsx`
- `M` `projects/sfia-studio/app/__tests__/increment-b.test.tsx`
- `M` `projects/sfia-studio/app/__tests__/navigation.test.tsx`
- `M` `projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR1.test.ts`
- `M` `projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR2.test.ts`
- `M` `projects/sfia-studio/app/__tests__/oa/execution-attempt/m4RealOffCorrectionR3.test.ts`
- `M` `projects/sfia-studio/app/__tests__/oa/execution-attempt/support/fakeSpawnAndGit.ts`
- `M` `projects/sfia-studio/app/__tests__/oa/execution-attempt/support/testOnlyRealExecutionLaunchPort.ts`
- `M` `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`
- `M` `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`
- `M` `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`
- `M` `projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx`
- `A` `projects/sfia-studio/app/__tests__/oa/execution-attempt/cursorTrustMarkerNameMax.test.ts`
- `A` `projects/sfia-studio/app/__tests__/oa/execution-attempt/executionWindowDeadline.test.ts`
- `A` `projects/sfia-studio/app/__tests__/oa/execution-attempt/observationSchedule.test.ts`
- `A` `projects/sfia-studio/app/__tests__/oa/execution-contract/executionWindowPolicy.test.ts`
- `A` `projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx`
- `A` `projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx`
- `A` `projects/sfia-studio/app/__tests__/pre-m6-product-ui/useRunningAttemptO3Observation.test.tsx`
- `A` `projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringAmend.test.ts`
- `A` `projects/sfia-studio/app/__tests__/project-assistant/preM6.realProductWiringResidual.test.ts`
- `A` `projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts`
- `A` `projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.finalHardening.test.ts`
- `A` `projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts`
- `A` `projects/sfia-studio/app/__tests__/project-assistant/qa-pre-m6-test-01.e2eQaControl.test.ts`
- `A` `projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx`
- `A` `projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalReadback.test.tsx`
- `A` `projects/sfia-studio/app/__tests__/studio-projects/studioProjectsHome.test.tsx`
- `A` `projects/sfia-studio/app/__tests__/vertical-slice-runtime/deterministicCursorBoundary.test.ts`
- `A` `projects/sfia-studio/app/e2e/studio-option-a-clean-slate-captures.spec.ts`
- `A` `projects/sfia-studio/app/e2e/studio-option-a-deterministic-cursor-boundary.spec.ts`
- `A` `projects/sfia-studio/app/e2e/studio-option-a-negative-states.spec.ts`
- `A` `projects/sfia-studio/app/e2e/studio-option-a-new-design-captures.spec.ts`
- `A` `projects/sfia-studio/app/e2e/studio-option-a-uat-semantic-reserves.spec.ts`
- `A` `projects/sfia-studio/app/e2e/studio-option-a.spec.ts`

### E. INTENDED SUPPORT FILE REQUIRED BY ABOVE — intended
Shared reason: QA-control route and E2E support helpers required by deterministic browser campaigns.

- `A` `projects/sfia-studio/app/app/api/e2e/option-a-qa-scenario/route.ts`
- `A` `projects/sfia-studio/app/e2e/support/optionAQaScenarioControl.ts`

### F. GENERATED / TEMP / BUILD / LOCAL ENVIRONMENT — MUST NOT COMMIT
All `.tmp-sfia-review/**` entries, QA sqlite DBs, screenshots, manifests, operator scripts, and review-pack artefacts. Expected in PR: NO.

### G. UNRELATED / UNKNOWN — BLOCKING
No versioned file was proven unrelated enough to classify G. Unknown/unrelated versioned count retained for gating: `0`.

## Reconstruction du lot PRE-M6

Evidence from current filenames, local review packs, and diff shape supports these accumulated workstreams:

- PRE-M6 Option A presentation implementation: PRESENT
- New Project UI accepted work: PRESENT
- user-readable ExecutionContract surface: PRESENT
- UAT-UX-03/04/05/07 semantic surface: PRESENT
- UAT-UX-08 durable Fake/Real fail-closed: PRESENT
- UAT-UX-09 pre-confirmation Fake/Real fail-closed: PRESENT
- deterministic browser support/specs: PRESENT
- async running → terminal observation work: PRESENT
- NAME_MAX correction: PRESENT
- bounded read-only / product readback hardening: PRESENT

Conclusion: the dirty tree is explainable as one accumulated PRE-M6 candidate, but the validation gate below is failing on the current candidate state.

## Diff Review

- `git diff --check`: PASS
- secrets / `.env` / runtime DB / build outputs in versioned scope: none found
- `.tmp-sfia-review/**` present locally but untracked only; excluded from commit
- node_modules / build artefacts in versioned scope: none found
- project-method / doctrine / roadmap modifications in working tree candidate scope: none in dirty project set
- branch is behind `origin/main` by 2 docs commits; no local project commit divergence exists yet
- future PR narrative would be coherent only if validations pass; currently blocked by E2E failure

## Validations Executed

### PASS

- `npm run typecheck` — PASS after one justified rerun post-build
  - first run failed because `tsconfig.json` includes `.next/types/**/*.ts` and those generated files were absent before build
  - second run after `next build`: PASS
- `npm run lint` — PASS
- `npm run build` — PASS
- `env -u SFIA_STUDIO_CURSOR_REAL -u OPS1_CURSOR_REAL -u OPENAI_API_KEY npm run test` — PASS
  - `199` test files passed, `13` skipped
  - `1898` tests passed, `131` skipped
- `e2e/studio-option-a.spec.ts`
  - negative authority / recovery / amend deferred / accessibility subtests: PASS (`8` passed)

### FAIL / BLOCKING

- `e2e/studio-option-a.spec.ts`
  - principal happy-path test FAIL in isolated production-backed run
  - blocking assertion:
    - `getByTestId('f3-evidence-id')` exists but remains hidden after successful attempt
    - expected visible at happy-path F7 evidence/review bundle stage
- `e2e/studio-option-a-deterministic-cursor-boundary.spec.ts`
  - also failed on visible `f3-evidence-id`
  - initial parallel `next dev` run contaminated by webpack cache collisions, so only the isolated production-backed principal failure is treated as authoritative
- parallel `next dev` E2E runs additionally showed environment-only cache collisions (`.next/cache` / webpack pack rename / invalid code lengths)
  - classified as environment noise, not primary product verdict

## Fake / Real Qualification

- ZERO REAL maintained
- OpenAI LIVE calls: `0`
- Cursor REAL calls: `0`
- deterministic/fake provider used for validation
- Morris server `3084`: untouched
- fresh QA environments used via dedicated sqlite paths and isolated ports

## PR Readiness Gate

Result: `STOP — PRE-M6 CANDIDATE NOT READY FOR SINGLE PR`

Blocking reason:

1. principal PRE-M6 browser happy-path validation is failing reproducibly in isolated local prod mode;
2. candidate cannot truthfully claim engineering/deterministic QA PASS;
3. commit/push/PR would violate the explicit PASS-only gate.

## Files Excluded From Commit

- all `.tmp-sfia-review/**`
- all QA sqlite DBs
- all screenshots/manifests/logs/operator outputs
- no staging performed

## Remaining Reserves

- UAT-RECOVERY-03 — open, not fixed
- UAT-UX-01/02/06 — open, not fixed
- Confirmation process-local limitation — carried
- Conversation/Proposal process-local limitation — carried
- V3-F10 — OPEN
- generic Cursor execution beyond bounded read-only — not proven
- PRE-M6 acceptance pending

## Explicit Non-Claims

- PRE-M6 NOT COMPLETE
- runtime v3 NON ADOPTED
- no generic write/dev/commit/push/PR Cursor capability proven in Studio runtime
- CKC 15/15 NOT COMPLETE
- new Product Completion trajectory NOT YET ROADMAP-ADOPTED in this cycle
- no project commit created
- no project branch push performed
- no draft PR opened
- merge NOT AUTHORIZED

## Review Handoff Instruction

ChatGPT must read the canonical remote handoff after publication and verify:
- this STOP verdict
- no project commit / push / PR / merge happened
- validation results and blocking happy-path E2E failure
- ZERO REAL status

## Verdict

STOP — PRE-M6 CANDIDATE NOT READY FOR SINGLE PR — DIRTY TREE EXPLAINED AND VERSIONED SCOPE QUALIFIED — NO VERSIONED UNRELATED/G UNKNOWN PROVEN — TYPECHECK/LINT/BUILD/FULL VITEST PASS — PRINCIPAL PRE-M6 PRODUCT E2E FAILS ON HIDDEN `f3-evidence-id` AFTER SUCCESS PATH — ZERO REAL MAINTAINED — NO STAGING / NO PROJECT COMMIT / NO PROJECT PUSH / NO DRAFT PR / NO MERGE
