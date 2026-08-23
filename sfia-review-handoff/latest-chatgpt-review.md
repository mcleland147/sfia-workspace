# REVIEW PACK FULL — W2-G3 E+A+B+C — GIT INTEGRATION TRANSPORT

## A. Metadata

| Field | Value |
|---|---|
| Timestamp (UTC) | 2026-08-23T08:36:20Z |
| Repo | mcleland147/sfia-workspace |
| Branch | `delivery/sfia-studio-w2-g3-umbrella-a` |
| Pre-commit HEAD | `3a86f8190deb34e37bede868a6e765b0440fc839` |
| Project commit HEAD | `0ab627737950203cb1928dcb3d30f46608c57703` |
| origin/main | `3a86f8190deb34e37bede868a6e765b0440fc839` |
| Incoming handoff | `2fea10fa20524012936278fff36c8c3d1f413371` |
| Incoming blob | `41d272f564d2d05f2be8ed6784043334bb2a8fca` |
| GO Morris Git Integration | CONSUMED |
| Merge | NOT AUTHORIZED |

## B. Local Git Truth pre-transport

- Branch correct
- Staged empty before transport
- No origin/main drift
- Working tree = reviewed Delivery + out-of-scope locals

## C. Transport manifest

### TRANSPORT (65 files) — UNKNOWN = 0

- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/runningAttemptRefresh.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/presentationLabels.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/w1CkcSemanticSeam.test.ts`
- `projects/sfia-studio/app/__tests__/studio-projects/projectPrincipalAmend.test.tsx`
- `projects/sfia-studio/app/__tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/ProductShell.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectWorkspacePage.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/ProjectsPage.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/HistorySurface.tsx`
- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/qualify.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`
- `projects/sfia-studio/app/features/project-assistant/f2/types.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/constants.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/types.ts`
- `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/proposeTrajectoryVersion.ts`
- `projects/sfia-studio/app/lib/oa/cycle/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/cycle/index.ts`
- `projects/sfia-studio/app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts`
- `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`
- `projects/sfia-studio/app/lib/oa/decision/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/decision/index.ts`
- `projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/index.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/createSqliteExecutionContractServices.ts`
- `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts`
- `projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/disclosures.ts`
- `projects/sfia-studio/app/playwright.config.ts`
- `projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/w2EabcDelivery.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts`
- `projects/sfia-studio/app/e2e/studio-w2-g3-correction-runtime.spec.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.module.css`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx`
- `projects/sfia-studio/app/features/project-assistant/w2/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/decideTrajectory.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/inspectExecutionContract.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/presentedOptionSet.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/projectHistory.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/qualificationInputs.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/trajectoryOptions.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/types.ts`
- `projects/sfia-studio/app/lib/oa/cycle/application/promoteDecidedTrajectory.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/application/recordAuthorityVerification.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/application/recordContractInspection.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/domain/authorityVerificationReceipt.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/domain/inspectionAttestation.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/memoryAuthorityVerificationReceiptRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/memoryInspectionAttestationRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteAuthorityVerificationReceiptRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteInspectionAttestationRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/ports/authorityVerificationReceiptRepository.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/ports/inspectionAttestationRepository.ts`

### REVIEW ARTIFACT — DO NOT TRANSPORT

- `.tmp-sfia-review/**` (12 paths)

### UNRELATED — PRESERVE

- `projects/eventops-poc/**`
- `projects/flex-office-demo/**`

## D. Staging

- Explicit `git add -- <manifest>` only (no `git add -A`)
- Staged count = 65 = TRANSPORT count
- No review/unrelated paths staged
- `git diff --cached --check`: noted preexisting EOF blank-line warning on `w2EabcDelivery.test.ts` (content not mutated)

## E. Freeze evidence

| Digest | Value |
|---|---|
| W2_G3_STAGED_DIFF_SHA256 | `b7b36c77537631539374d077690422bc40455157d4c9d00482f340a65b095297` |
| COMMIT_DIFF_SHA256 | `b7b36c77537631539374d077690422bc40455157d4c9d00482f340a65b095297` |
| Equality | **PASS** |

## F. Commit

- SHA: `0ab627737950203cb1928dcb3d30f46608c57703`
- Subject: `feat(sfia-studio): deliver W2-G3 EABC governed trajectory flow`
- Parent: `3a86f8190deb34e37bede868a6e765b0440fc839`
- Stat: 65 files, +7990 / −104
- Single project commit only
- No amend / no --no-verify

## G. Push

- Remote branch: `origin/delivery/sfia-studio-w2-g3-umbrella-a`
- Local HEAD = remote HEAD = `0ab627737950203cb1928dcb3d30f46608c57703`
- No force push
- origin/main unchanged through push

## H. Draft PR

| Field | Value |
|---|---|
| Number | 400 |
| URL | https://github.com/mcleland147/sfia-workspace/pull/400 |
| Title | feat(sfia-studio): deliver W2-G3 EABC governed trajectory flow |
| Base | main |
| Head | delivery/sfia-studio-w2-g3-umbrella-a |
| headRefOid | `0ab627737950203cb1928dcb3d30f46608c57703` |
| isDraft | true |
| state | OPEN |
| mergeable | MERGEABLE |

## I. CI

Workflow run: https://github.com/mcleland147/sfia-workspace/actions/runs/32628550080

| Check | Result |
|---|---|
| Detect SFIA Studio changes | PASS (9s) job 97167629646 |
| Build and validate SFIA Studio | **FAIL** (2m7s) job 97167652078 |
| SFIA Studio Required Gate | **FAIL** (aggregate; validate_result=failure) job 97167887772 |

Unit tests (Vitest) in Build job: **6 failed** | 1956 passed | 131 skipped.

### Failure inventory (no fix applied — transport cycle)

1. `__tests__/pre-m6-product-ui/uatUxSemanticReserves.ui.test.tsx:262` — expects `/Morris/` in confirmation summary; UI shows `autorité structurante` (known Delivery reserve).
2. `__tests__/vertical-slice-runtime/importBoundaries.test.ts:107` — expected import-boundary set outdated vs new `features/project-assistant/w2/*` imports of `@/lib/vertical-slice-runtime` (9 new edges).
3–6. Product schema migration tests expect schema fingerprint `m6-0.1.0` but receive `m7-0.1.0` after Delivery SQLite schema additions (inspect/receipt tables):
   - `__tests__/oa/decision/m3ProductSchemaMigration.test.ts:134`
   - `__tests__/oa/project/m5ProductSchemaMigration.test.ts:150`
   - `__tests__/oa/project/m5ProductSchemaMigration.test.ts:199`
   - `__tests__/oa/project/m6ProductSchemaMigration.test.ts:114`

Typecheck / Lint / Build steps in the same job: **success** before Vitest failure.

**No project content mutation after CI failure** (per GO).

## J. Prior QA evidence (qualified handoff; plus smoke)

From handoff `2fea10fa` / blob `41d272f5`:
- w2EabcDelivery 28/28
- OA trajectory + adversarial 47/47
- UI sample 45/45
- Playwright /studio 1/1
- in-scope tsc clean

Transport-cycle smoke actually executed:
- `npx vitest run __tests__/project-assistant/w2EabcDelivery.test.ts` → **28/28 PASS** immediately before staging

## K. Architecture / gates

- OA KEEP · Product SQLite KEEP · ProjectTrajectory single SoT
- C6 CLOSED · Phase B OUT · Execute OUT · REAL OUT · runtime v3 NON ADOPTED
- Merge NOT authorized

## L. Remaining gaps

- CI failures above require ChatGPT requalification / correction cycle (not this transport)
- Track D / Phase B
- W2 final closure
- Confirmation multi-actor simplification
- REAL / Figma

## M. Anti-claims

- Draft PR open ≠ merge authorized
- EABC ≠ W2 complete ≠ Phase B
- Transport ≠ CI green
- deterministic ≠ REAL
- C6 not reopened

## N. Final Git State

- Branch: `delivery/sfia-studio-w2-g3-umbrella-a`
- HEAD: `0ab627737950203cb1928dcb3d30f46608c57703`
- Tracked clean after commit
- Remaining untracked: `.tmp-sfia-review/`, `eventops-poc/`, `flex-office-demo/`
- No second project commit

## O. Verdict

**DRAFT PR OPEN — CI FAILED — RETURN TO CHATGPT REQUALIFICATION**

## P. Instruction ChatGPT

Inspect Draft PR #400 and CI run 32628550080.
Classify failures (known reserve vs Delivery-induced import-boundary / schema-migration expectation drift).
Recommend correction cycle scope before any merge GO.
No merge without distinct Morris GO after CI green + PR readiness PASS.
