# ChatGPT Review Pack — FULL

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-07 06:49:08 UTC+02:00 (+0200) / 2026-08-07 04:49:08 UTC |
| **Niveau** | FULL |
| **GO Morris** | `GO PUBLICATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE — LOCAL CI-A PACKAGE — AFTER CHATGPT DELIVERY VALIDATION — NO PUSH UNTIL EXPLICIT GO — NO PR UNTIL EXPLICIT GO` |
| **Horodatage GO** | 2026-08-07 05:40 CEST (+0200) / 2026-08-07 03:40 UTC (secondes non inventées) |
| **Cycle** | Intégration / DevOps — préparation de publication Git locale |
| **Profil** | Critical |
| **Typologie** | EVOL / DEVOPS / DELIVERY |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| **Branche** | `delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a` |
| **Base / parent** | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| **Commit local T1** | `23feee90ecf3315c537a0e39c1393ce3122bb4ac` |
| **Tree** | `769b562c33334c8bb8cf218014a08439dc3d174a` |
| **Upstream** | NONE |
| **Handoff entrant tip** | `e0987c455421723a44d9980efc60f79ca4279672` |
| **Handoff entrant blob** | `6ea5aae272260d68e6cd608a5c93c78046081645` |

## Verdict

FINOPS TECHNICAL LOT T1 PUBLICATION PACKAGE PREPARED —
CHATGPT DELIVERY VALIDATION USED AS AUTHORITATIVE INPUT —
T1-VAL-01 TO T1-VAL-06 CLOSED —
DOCUMENT 135 INCLUDED BYTE-IDENTICAL —
DOCUMENT 136 INCLUDED BYTE-IDENTICAL —
DOCUMENT 137 INCLUDED —
FINOPS T1 CODE PACKAGE INCLUDED —
POSTGRES MIGRATION INCLUDED —
CI-A WORKFLOW INCLUDED —
PG 8.22.0 INCLUDED —
NODE-PG-MIGRATE 8.0.4 INCLUDED —
PACKAGE LOCK VERIFIED —
EXACT PACKAGE MANIFEST VERIFIED —
25 PROJECT PATHS COMMITTED —
SINGLE LOCAL PROJECT COMMIT CREATED —
PROJECT COMMIT PARENT IS 0cdf57a12843891da8b8db2d550cb38c7ba9f60a —
TYPECHECK PASSED —
LINT PASSED —
BUILD PASSED —
UNIT SUITE PASSED WITH POSTGRES TESTS SKIPPED BEFORE MIGRATION —
MIGRATION PASSED —
POSTGRES INTEGRATION TESTS 10/10 PASSED —
GOVERNANCE PASSED —
SECRET SCAN PASSED —
NO MONEY OR CURRENCY IMPLEMENTED —
FIND-03 REMAINS OPEN —
NO NEON INTEGRATION —
NO OPENAI PROVIDER-REAL VALIDATION —
NO REAL CREDENTIAL —
NO PROJECT PUSH —
PROJECT REMOTE BRANCH ABSENT —
NO PR —
NO MERGE —
NO BRANCH DELETION —
T2 TO T7 NOT AUTHORIZED —
LOT-D1 TO LOT-D5 NOT AUTHORIZED —
REVIEW HANDOFF UPDATED AND REMOTE VERIFIED —
READY FOR MORRIS GIT PUSH DECISION —
NOT AUTHORIZED FOR PROJECT PUSH OR PR

## Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md` (blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`)
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/guardrails-checklist.md`
- CKC capitalization tree `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/**`
- documents projet 135 / 136 / 137 (worktree)
- package T1 (25 chemins)
- `.github/workflows/sfia-studio-ci.yml`
- `package.json` / `package-lock.json`
- Review Handoff tip entrant `e0987c…`

## CKC resolution

| Champ | Valeur |
|-------|--------|
| recherché | oui |
| cycle qualifié | Intégration / DevOps — publication preparation |
| contrat trouvé | arbre CKC présent ; pas de CKC détaillé « publication preparation » monofichier obligatoire |
| statut | candidate / experimental via carte synthétique + matrice de routage |
| usage | experimental cognitive guidance uniquement |
| autorité | aucune autorité d’exécution |
| fallback | carte synthétique 02 + méthode SFIA v2.6 / template cycle |

## Local Git Truth — initiale

```
date_cest=2026-08-07 06:34:35 CEST (+0200)
date_utc=2026-08-07 04:34:35 UTC
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
pwd_wt=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
=== remote -v ===
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch=delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=fatal: no upstream configured for branch 'delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a'
=== status --short ===
 M .github/workflows/sfia-studio-ci.yml
 M projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
 M projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
 M projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
?? .tmp-sfia-review/
?? projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
?? projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
?? projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/
?? projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
?? projects/sfia-studio/app/db/
?? projects/sfia-studio/app/lib/oa/finops/application/
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/
?? projects/sfia-studio/app/lib/oa/finops/ports/
=== diff --name-status ===
M	.github/workflows/sfia-studio-ci.yml
M	projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
M	projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
M	projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
M	projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
M	projects/sfia-studio/app/package-lock.json
M	projects/sfia-studio/app/package.json
=== cached --name-status ===
=== untracked ===
.tmp-sfia-review/chatgpt-review.md
.tmp-sfia-review/pub-prep/git-truth-initial.txt
.tmp-sfia-review/t1-decisions-applied/git-truth-final.txt
.tmp-sfia-review/t1-decisions-applied/git-truth-initial.txt
.tmp-sfia-review/t1-decisions-applied/handoff-blob.txt
.tmp-sfia-review/t1-decisions-applied/handoff-dry-run.txt
.tmp-sfia-review/t1-decisions-applied/handoff-publish.txt
.tmp-sfia-review/t1-decisions-applied/handoff-remote-reread.md
.tmp-sfia-review/t1-decisions-applied/handoff-tip.txt
.tmp-sfia-review/t1-decisions-applied/hash135-before.txt
.tmp-sfia-review/t1-decisions-applied/work-cest.txt
.tmp-sfia-review/t1-decisions-applied/work-utc.txt
.tmp-sfia-review/t1-delivery/baseline-build.txt
.tmp-sfia-review/t1-delivery/baseline-note.txt
.tmp-sfia-review/t1-delivery/baseline-partial.txt
.tmp-sfia-review/t1-delivery/baseline-test.txt
.tmp-sfia-review/t1-delivery/build.txt
.tmp-sfia-review/t1-delivery/ci-diff.patch
.tmp-sfia-review/t1-delivery/code-diff.patch
.tmp-sfia-review/t1-delivery/createProjectUi-rerun.txt
.tmp-sfia-review/t1-delivery/diff-check.txt
.tmp-sfia-review/t1-delivery/diff-stat.txt
.tmp-sfia-review/t1-delivery/finops-tests.txt
.tmp-sfia-review/t1-delivery/full-test-2.txt
.tmp-sfia-review/t1-delivery/full-test-serial.txt
.tmp-sfia-review/t1-delivery/full-test.txt
.tmp-sfia-review/t1-delivery/git-truth-final.txt
.tmp-sfia-review/t1-delivery/git-truth-initial.txt
.tmp-sfia-review/t1-delivery/governance.txt
.tmp-sfia-review/t1-delivery/handoff-blob.txt
.tmp-sfia-review/t1-delivery/handoff-dry-run.txt
.tmp-sfia-review/t1-delivery/handoff-publish.txt
.tmp-sfia-review/t1-delivery/handoff-remote-reread.md
.tmp-sfia-review/t1-delivery/handoff-tip.txt
.tmp-sfia-review/t1-delivery/hash135.txt
.tmp-sfia-review/t1-delivery/hash136.txt
.tmp-sfia-review/t1-delivery/migrate-down.txt
.tmp-sfia-review/t1-delivery/migrate-up-2.txt
.tmp-sfia-review/t1-delivery/migrate-up.txt
.tmp-sfia-review/t1-delivery/npm-ci-baseline.txt
.tmp-sfia-review/t1-delivery/npm-install-migrate.txt
.tmp-sfia-review/t1-delivery/npm-install-pg.txt
.tmp-sfia-review/t1-delivery/npm-ls.txt
.tmp-sfia-review/t1-delivery/postgres/database-url.local
.tmp-sfia-review/t1-delivery/rerun-flaky.txt
.tmp-sfia-review/t1-delivery/status-scoped.txt
.tmp-sfia-review/t1-delivery/targeted-exec-lint.txt
.tmp-sfia-review/t1-delivery/typecheck.txt
.tmp-sfia-review/t1-delivery/validation-main.txt
.tmp-sfia-review/t1-delivery/work-cest.txt
.tmp-sfia-review/t1-delivery/work-utc.txt
.tmp-sfia-review/t1-execution-pack/work-date-cest.txt
.tmp-sfia-review/t1-execution-pack/work-date-utc.txt
.tmp-sfia-review/t1-val-06/build.txt
.tmp-sfia-review/t1-val-06/diff-check.txt
.tmp-sfia-review/t1-val-06/git-truth-final.txt
.tmp-sfia-review/t1-val-06/git-truth-initial.txt
.tmp-sfia-review/t1-val-06/git-truth-post-handoff.txt
.tmp-sfia-review/t1-val-06/governance.txt
.tmp-sfia-review/t1-val-06/handoff-publish.txt
.tmp-sfia-review/t1-val-06/lint.txt
.tmp-sfia-review/t1-val-06/migrate-up.txt
.tmp-sfia-review/t1-val-06/npm-test-no-db.txt
.tmp-sfia-review/t1-val-06/section-29.md
.tmp-sfia-review/t1-val-06/status-scoped-final.txt
.tmp-sfia-review/t1-val-06/test-db.txt
.tmp-sfia-review/t1-val-06/typecheck.txt
.tmp-sfia-review/t1-val-06/workflow-validate-excerpt.yml
.tmp-sfia-review/t1-validation-corrections/build.txt
.tmp-sfia-review/t1-validation-corrections/ci-diff.patch
.tmp-sfia-review/t1-validation-corrections/diff-check.txt
.tmp-sfia-review/t1-validation-corrections/execution-run-diff.patch
.tmp-sfia-review/t1-validation-corrections/finops-tests.txt
.tmp-sfia-review/t1-validation-corrections/full-test-serial.txt
.tmp-sfia-review/t1-validation-corrections/git-truth-final.txt
.tmp-sfia-review/t1-validation-corrections/git-truth-initial.txt
.tmp-sfia-review/t1-validation-corrections/governance.txt
.tmp-sfia-review/t1-validation-corrections/handoff-blob.txt
.tmp-sfia-review/t1-validation-corrections/handoff-dry-run.txt
.tmp-sfia-review/t1-validation-corrections/handoff-publish.txt
.tmp-sfia-review/t1-validation-corrections/handoff-remote-reread.md
.tmp-sfia-review/t1-validation-corrections/handoff-tip.txt
.tmp-sfia-review/t1-validation-corrections/migrate-down-empty-final.txt
.tmp-sfia-review/t1-validation-corrections/migrate-down-empty.txt
.tmp-sfia-review/t1-validation-corrections/migrate-down-with-data.txt
.tmp-sfia-review/t1-validation-corrections/migrate-up-2.txt
.tmp-sfia-review/t1-validation-corrections/migrate-up-final.txt
.tmp-sfia-review/t1-validation-corrections/migrate-up.txt
.tmp-sfia-review/t1-validation-corrections/package-diff.patch
.tmp-sfia-review/t1-validation-corrections/package-lock-diff.patch
.tmp-sfia-review/t1-validation-corrections/test-db.txt
.tmp-sfia-review/t1-validation-corrections/truncate-for-down.txt
.tmp-sfia-review/t1-validation-corrections/typecheck.txt
.tmp-sfia-review/t1-validation-corrections/validation-partial.txt
.tmp-sfia-review/t1-validation-corrections/work-cest.txt
.tmp-sfia-review/t1-validation-corrections/work-utc.txt
projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts
projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js
projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts
projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
projects/sfia-studio/app/lib/oa/finops/application/identity.ts
projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts
projects/sfia-studio/app/lib/oa/finops/application/types.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts
projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts
projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts
=== worktree list ===
/Users/morris/Projects/sfia-workspace                                                                                                    0cdf57a [delivery/flex-office-demo-option-a]
/Users/morris/Projects/sfia-codex-pilot                                                                                                  ec7f397 [method/codex-operating-model-pilot]
/Users/morris/Projects/sfia-task-tracker                                                                                                 b763a31 [cadrage/task-tracker-light]
/Users/morris/Projects/sfia-workspace-a5-2-framing                                                                                       bd3608c [framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity]
/Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts                                                                          cae8415 [method/sfia-cycle-knowledge-contracts]
/Users/morris/Projects/sfia-workspace-d1-conversational-convergence                                                                      7dc6f9f [ux/sfia-studio-d1-conversational-convergence]
/Users/morris/Projects/sfia-workspace-d1-platform-integration                                                                            c2d39a7 [delivery/sfia-studio-d1-shared-platform-integration]
/Users/morris/Projects/sfia-workspace-doc32-post-p3-m1                                                                                   dd2a68c [docs/sfia-studio-doc32-post-p3-m1-correction]
/Users/morris/Projects/sfia-workspace-docs-recover                                                                                       1a2fa31 [docs/sfia-studio-recover-unmerged-project-docs]
/Users/morris/Projects/sfia-workspace-fa6-mitigated-clean                                                                                67f140a [docs/sfia-studio-fa6-mitigated-from-main]
/Users/morris/Projects/sfia-workspace-framing-next-increment                                                                             88fa465 [framing/sfia-studio-next-product-increment]
/Users/morris/Projects/sfia-workspace-m1-bypass-probe                                                                                    f0f0e0f [qa/sfia-studio-m1-bypass-probe]
/Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert                                                                             b502c00 [qa/sfia-studio-m1-bypass-probe-revert]
/Users/morris/Projects/sfia-workspace-m1-capitalization                                                                                  fa0eebe [docs/sfia-studio-m1-capitalization-rex]
/Users/morris/Projects/sfia-workspace-option-a-after-t-a6                                                                                aef7fd6 [framing/sfia-studio-v3-native-option-a-after-t-a6]
/Users/morris/Projects/sfia-workspace-option-a-ci-governance                                                                             2f95605 [delivery/sfia-studio-v3-native-option-a-ci-merge-governance]
/Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs                                                                        a42a85c [docs/sfia-studio-option-a-ci-governance-post-merge]
/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check                                                                 9f03916 [delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation]
/Users/morris/Projects/sfia-workspace-review-handoff-publisher                                                                           14d58fe [tooling/review-handoff-canonical-publisher]
/Users/morris/Projects/sfia-workspace-shared-platform-delivery                                                                           08c282a [delivery/sfia-studio-shared-technical-platform]
/Users/morris/Projects/sfia-workspace-t-a6-post-merge                                                                                    1f25857 [post-merge/sfia-studio-v3-native-option-a-t-a6]
/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration                                                                       6849b6f [framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration]
/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge                                                                 960c90b [docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status]
/Users/morris/Projects/sfia-workspace-t-a7-framing                                                                                       b7a5e82 [framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge                                                                               08d6cd0 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1                                               4e4db74 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-t0-103-section-33-requalification                   4e4db74 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-t0-103-section-33-requalification-clean             489605c [delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-operational-backlog-103-section-33-requalification-clean]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/main-post-merge                                              52c1d75 [backlog/sfia-studio-v3-1-d2-d-integration-foundation]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-execution-pack                           8dc54db (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-execution-pack-clean                     8dc54db [decisions/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness-reserves]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack                                     0cdf57a [delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a]
/Users/morris/Projects/sfia-workspace-t-a7-next-decision                                                                                 33ea3e8 [framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step]
/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness                                                                           b6a1933 [framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness]
/Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions                                                                              f89ba5f [record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions]
/Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope                                                                           4fad47f [framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope]
/Users/morris/Projects/sfia-workspace-template-handoff-fix                                                                               134be30 (detached HEAD)
/Users/morris/Projects/sfia-workspace-ux-reconciliation                                                                                  7bdabdc [project/sfia-studio-ux-ui-reconciliation]
/Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation                                                                          daf6f7d [method/sfia-studio-v3-doctrine-consolidation]
/Users/morris/Projects/sfia-workspace-v3-native-audit                                                                                    56ddf32 [audit/sfia-studio-v3-native-dependencies]
/Users/morris/Projects/sfia-workspace-v3-native-option-a-arch                                                                            577ff0c [design/sfia-studio-v3-native-option-a-functional-architecture]
/Users/morris/Projects/sfia-workspace-v3-native-option-a-design                                                                          e22bc24 [design/sfia-studio-v3-native-option-a-functional]
/Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled                                                                         52891e5 [modeled/sfia-studio-v3-native-option-a]
/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech                                                                            0b696ed [framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity]
/Users/morris/Projects/sfia-workspace-v3-native-option-a-ux                                                                              608d3d4 [design/sfia-studio-v3-native-option-a-ux-ui]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901  32e5271 [ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68  32e5271 [ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89  27811e8 [ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1  32e5271 [ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f  27811e8 [ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10  4b279b8 [ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29  32e5271 [ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56  27811e8 [ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62  4b279b8 [ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928  27811e8 [ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14  32e5271 [ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd  27811e8 [ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539  27811e8 [ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61  4b279b8 [ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a  27811e8 [ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608  27811e8 [ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce  27811e8 [ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d  27811e8 [ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6  32e5271 [ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8  27811e8 [ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca  4b279b8 [ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4  32e5271 [ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0  32e5271 [ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187  27811e8 [ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7  27811e8 [ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7  27811e8 [ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846  32e5271 [ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e  32e5271 [ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700  27811e8 [ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c  32e5271 [ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4  32e5271 [ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca  27811e8 [ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353  27811e8 [ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050  27811e8 [ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b  4b279b8 [ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2  27811e8 [ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230  27811e8 [ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0  4b279b8 [ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0]
/Users/morris/Projects/sfia-workspace/sfia-review-handoff                                                                                e0987c4 [sfia/review-handoff]
=== ls-remote main ===
0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
=== ls-remote handoff ===
e0987c455421723a44d9980efc60f79ca4279672	refs/heads/sfia/review-handoff
=== ls-remote delivery branch ===
origin_main_local=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
handoff_tip=e0987c455421723a44d9980efc60f79ca4279672
handoff_blob=6ea5aae272260d68e6cd608a5c93c78046081645
```

### Incident mid-cycle (restauré avant commit)

Durant la revalidation, le worktree a été basculé involontairement sur
`decisions/...-t0-pr-readiness-reserves` @ `8dc54db` (antérieur à T0 sur main),
ce qui masquait temporairement `lib/oa/finops/domain/**` (T0 déjà sur `origin/main`).
Restauration immédiate sur la branche Delivery @ `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` **avant** staging/commit.
Aucun fichier package modifié pour « réparer » ; T0 domain rétabli uniquement via checkout de la branche attendue.

## Local Git Truth — finale

```
date_cest=2026-08-07 06:49:06 CEST (+0200)
date_utc=2026-08-07 04:49:06 UTC
branch=delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a
HEAD=23feee90ecf3315c537a0e39c1393ce3122bb4ac
parent=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
tree=769b562c33334c8bb8cf218014a08439dc3d174a
origin_main=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=fatal: no upstream configured for branch 'delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a'
status=?? .tmp-sfia-review/
handoff=e0987c455421723a44d9980efc60f79ca4279672
remote_delivery_empty=0
```

## Hashes documents

| Doc | SHA-256 | Statut |
|-----|---------|--------|
| 135 | `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe` | byte-identical attendu |
| 136 | `b2c4c258bc6b6a13d8a88c19a88b52178a4576e4b2c7606f8ba736df6b0cec61` | byte-identical attendu |
| 137 | inclus dans commit ; sections T1-VAL-01…06 présentes | OK |
| 138 | absent | OK |

## Manifest attendu (25)

1. projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
2. projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
3. projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
4. projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js
5. projects/sfia-studio/app/lib/oa/finops/application/types.ts
6. projects/sfia-studio/app/lib/oa/finops/application/identity.ts
7. projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts
8. projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts
9. projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
10. projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts
11. projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts
12. projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts
13. projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts
14. projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts
15. projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts
16. projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
17. projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
18. projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts
19. .github/workflows/sfia-studio-ci.yml
20. projects/sfia-studio/app/package.json
21. projects/sfia-studio/app/package-lock.json
22. projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
23. projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
24. projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
25. projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts

## Manifest observé / preuve

```
expected_count=25
observed_count=25
=== expected ===
.github/workflows/sfia-studio-ci.yml
projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts
projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts
projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
projects/sfia-studio/app/lib/oa/finops/application/identity.ts
projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts
projects/sfia-studio/app/lib/oa/finops/application/types.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts
projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts
projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts
projects/sfia-studio/app/package-lock.json
projects/sfia-studio/app/package.json
=== observed project (excl tmp) ===
.github/workflows/sfia-studio-ci.yml
projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts
projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts
projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
projects/sfia-studio/app/lib/oa/finops/application/identity.ts
projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts
projects/sfia-studio/app/lib/oa/finops/application/types.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts
projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts
projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts
projects/sfia-studio/app/package-lock.json
projects/sfia-studio/app/package.json
missing=[]
extra=[]
exists projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md=True
exists projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md=True
exists projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md=True
exists projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js=True
exists projects/sfia-studio/app/lib/oa/finops/application/types.ts=True
exists projects/sfia-studio/app/lib/oa/finops/application/identity.ts=True
exists projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts=True
exists projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts=True
exists projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts=True
exists projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts=True
exists projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts=True
exists projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts=True
exists projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts=True
exists projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts=True
exists projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts=True
exists projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts=True
exists projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts=True
exists projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts=True
exists .github/workflows/sfia-studio-ci.yml=True
exists projects/sfia-studio/app/package.json=True
exists projects/sfia-studio/app/package-lock.json=True
exists projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts=True
exists projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts=True
exists projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts=True
exists projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts=True
hash 135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md match=True got=fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe
hash 136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md match=True got=b2c4c258bc6b6a13d8a88c19a88b52178a4576e4b2c7606f8ba736df6b0cec61
137 has T1-VAL-01=True
137 has T1-VAL-02=True
137 has T1-VAL-03=True
137 has T1-VAL-04=True
137 has T1-VAL-05=True
137 has T1-VAL-06=True
138 exists=False
mapProviderUsage_exists=False
finops_openai_dir_exists=False
forbid_hits=[('projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md', 'cost_minor'), ('projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md', 'cost_numeric'), ('projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md', 'currency_code'), ('projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md', 'cost_minor'), ('projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md', 'cost_numeric'), ('projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md', 'currency_code'), ('projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md', 'cost_minor'), ('projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md', 'cost_numeric'), ('projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md', 'currency_code'), ('projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts', 'cost_minor'), ('projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts', 'cost_numeric'), ('projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts', 'currency_code')]
code_money=['projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js', 'projects/sfia-studio/app/lib/oa/finops/application/types.ts', 'projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts', 'projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts', 'projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts', 'projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts', 'projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts']
CI_A_ORDERING_OK
pg=~8.22.0
node-pg-migrate=^8.0.4
@types/pg=^8.20.4
VERDICT=FAIL
```

`mapProviderUsage.ts` : **ABSENT** (T1-VAL-05).

## Commit projet local

| Champ | Valeur |
|-------|--------|
| message | `feat(sfia-studio): implement FinOps T1 capture and persistence` |
| SHA | `23feee90ecf3315c537a0e39c1393ce3122bb4ac` |
| parent | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| tree | `769b562c33334c8bb8cf218014a08439dc3d174a` |
| count vs base | **1** |
| ahead/behind vs origin/main (`left-right`) | `0	1` → ahead **1** / behind **0** |

### git show --name-status

```
M	.github/workflows/sfia-studio-ci.yml
A	projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
A	projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
A	projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
A	projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts
A	projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
A	projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
A	projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js
M	projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
M	projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
M	projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
M	projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
A	projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts
A	projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
A	projects/sfia-studio/app/lib/oa/finops/application/identity.ts
A	projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts
A	projects/sfia-studio/app/lib/oa/finops/application/types.ts
A	projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts
A	projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts
A	projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts
A	projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts
A	projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts
A	projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts
M	projects/sfia-studio/app/package-lock.json
M	projects/sfia-studio/app/package.json
```

### git show --stat

```
23feee9 feat(sfia-studio): implement FinOps T1 capture and persistence
 .github/workflows/sfia-studio-ci.yml               |  29 +
 ...penai-finops-technical-lot-t1-execution-pack.md | 548 ++++++++++++++
 ...ai-finops-technical-lot-t1-decisions-applied.md | 473 ++++++++++++
 ...ive-openai-finops-technical-lot-t1-execution.md | 818 +++++++++++++++++++++
 .../finops/postgres/t1.ledger.integration.test.ts  | 285 +++++++
 .../__tests__/oa/finops/t1.capture.unit.test.ts    | 358 +++++++++
 .../oa/finops/t1.coordinator.failopen.test.ts      | 139 ++++
 .../1754500000000_finops-t1-usage-ledger.js        | 120 +++
 .../application/coordinateExecutionRun.ts          | 143 +++-
 .../app/lib/oa/execution-run/domain/types.ts       |  13 +-
 .../ai/platformAiExecutionAdapter.ts               |  10 +-
 .../server/composeExecutionRunD2D3.ts              |   2 +
 .../lib/oa/finops/application/buildUsageEvent.ts   | 173 +++++
 .../oa/finops/application/captureFinOpsUsage.ts    | 135 ++++
 .../app/lib/oa/finops/application/identity.ts      |  56 ++
 .../app/lib/oa/finops/application/safeTokens.ts    |  39 +
 .../app/lib/oa/finops/application/types.ts         |  93 +++
 .../infrastructure/postgres/createFinOpsPool.ts    |  68 ++
 .../postgres/postgresFinOpsUsageLedger.ts          | 214 ++++++
 .../finops/infrastructure/postgres/readPgToken.ts  |  98 +++
 .../infrastructure/postgres/sanitizeDbError.ts     |  87 +++
 .../app/lib/oa/finops/ports/finopsCapturePort.ts   |  36 +
 .../lib/oa/finops/ports/finopsUsageLedgerPort.ts   |  20 +
 projects/sfia-studio/app/package-lock.json         | 499 ++++++++++++-
 projects/sfia-studio/app/package.json              |   8 +-
 25 files changed, 4457 insertions(+), 7 deletions(-)
```

## Staged useful diff (hors package-lock)

```diff
diff --git a/.github/workflows/sfia-studio-ci.yml b/.github/workflows/sfia-studio-ci.yml
index 801a875..00308f3 100644
--- a/.github/workflows/sfia-studio-ci.yml
+++ b/.github/workflows/sfia-studio-ci.yml
@@ -122,6 +122,20 @@ jobs:
       run:
         shell: bash
         working-directory: projects/sfia-studio/app
+    services:
+      postgres:
+        image: postgres:16-alpine
+        env:
+          POSTGRES_USER: sfia_ci
+          POSTGRES_PASSWORD: sfia_ci_local_only
+          POSTGRES_DB: sfia_studio_finops_t1
+        ports:
+          - 5432:5432
+        options: >-
+          --health-cmd "pg_isready -U sfia_ci -d sfia_studio_finops_t1"
+          --health-interval 5s
+          --health-timeout 5s
+          --health-retries 10
     steps:
       - name: Checkout
         uses: actions/checkout@v4
@@ -148,8 +162,23 @@ jobs:
         run: npm run build

       - name: Unit tests (Vitest)
+        # DB connection env intentionally absent at this step:
+        # PostgreSQL integration tests must stay skipped until after migrate.
         run: npm test

+      - name: FinOps T1 migrate up (CI-A)
+        env:
+          # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
+          DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+        run: npm run migrate:up
+
+      - name: FinOps T1 PostgreSQL integration tests (CI-A)
+        env:
+          # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
+          DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+          DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+        run: npm run test:db
+
       - name: Modeled governance tests
         working-directory: projects/sfia-studio
         run: |
diff --git a/projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md b/projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
new file mode 100644
index 0000000..acddf6f
--- /dev/null
+++ b/projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
@@ -0,0 +1,548 @@
+# 135 — FinOps Technical Lot T1 — Capture and Persistence Execution Pack
+
+## 1. Statut et anti-claims
+
+**T0 MERGED AND POST-MERGE CI PASSED**
+
+**T1 EXECUTION PACK PREPARED**
+
+**T1 NOT IMPLEMENTED**
+
+**T1 DELIVERY NOT AUTHORIZED**
+
+**NO DATABASE PROVISIONED OR ACCESSED**
+
+**NO OPENAI REAL CALL**
+
+**NO CREDENTIAL RECEIVED OR DISPLAYED**
+
+**T2 TO T7 NOT AUTHORIZED**
+
+**LOT-D1 TO LOT-D5 NOT AUTHORIZED**
+
+Ce document est un pack d’exécution documentaire. Il ne constitue pas une autorisation d’installation de packages, de provisionnement Neon, d’appel OpenAI réel, de création SQL/migration, de modification CI, de commit/push projet, ni de PR.
+
+## 2. Autorité Morris et GO consommé
+
+Décision Morris exacte :
+
+```text
+ok go T1
+```
+
+Qualification : cette phrase autorise **exclusivement** la préparation complète du FinOps Technical Lot T1 (document 135 + Review Pack + Review Handoff). Elle n’autorise pas l’implémentation T1, ni l’accès DB/provider, ni la Delivery.
+
+## 3. Horodatage
+
+| Événement | Horodatage |
+|---|---|
+| Décision Morris | 2026-08-06 23:29 CEST (+0200) / 21:29 UTC (secondes exactes non inventées) |
+| Travail Cursor (création document) | 2026-08-06 23:50:02 CEST (+0200) / 2026-08-06 21:50:02 UTC |
+
+## 4. Git Truth et preuve T0
+
+| Élément | Valeur |
+|---|---|
+| `origin/main` | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
+| Merge T0 (H1 PR #312) | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
+| Head T0 consommé | `489605cb2f2bd7c5db7174af2bc94715f1d3a8e1` |
+| Parent 1 merge | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| Parent 2 merge | `489605cb2f2bd7c5db7174af2bc94715f1d3a8e1` |
+| PR | #312 MERGED |
+| CI post-merge | SFIA Studio CI **#104** / run `31111626695` / success / event `push` |
+| Handoff historique T0 (immuable) | commit `2cf71c8eb1e23a68937828f764fd8c996dbd7f97` · blob `48c72c051f194975b1bb1958578410d056e0cb5c` |
+| Tip `sfia/review-handoff` observé en début de cycle | `29152c5d20d50db5064083eb98329ac8d9dfcdfc` (latest rotatif — **ne pas** confondre avec le handoff T0 historique) |
+| Document 135 avant cycle | **ABSENT** |
+| Branche de préparation | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack` |
+| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
+| Upstream | aucun |
+| Index / tracked mods (worktree propre) | vides au démarrage |
+
+Note méthodologique : des worktrees antérieurs de tentative T1 ont été contaminés par un changement de root agent ; ils n’ont pas été utilisés pour l’édition. Le worktree ci-dessus a été vérifié à `0cdf57a…` avant écriture.
+
+## 5. Sources consultées
+
+| Source | Rôle |
+|---|---|
+| `prompts/templates/sfia-cycle-execution-template.md` | Template cycle SFIA v2.6 |
+| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routage cycles |
+| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Operating model |
+| `projects/sfia-studio/103-…-technical-implementation-backlog.md` | Backlog opérationnel · A2 Neon/pg/node-pg-migrate · FIND-03 Money · anti-gates §33 |
+| `projects/sfia-studio/123-…-finops-enforcement-decisions-applied.md` | Décisions enforcement (hors T1 actif) |
+| `projects/sfia-studio/125-…-finops-technical-implementation-decisions-applied.md` | CAP-C · BND-A · TECH-STORE/IDEM/MIG · périmètre T1 |
+| `projects/sfia-studio/126`–`134` | Execution pack / records / readiness / findings T0 |
+| `projects/sfia-studio/app/package.json` + `package-lock.json` | Dépendances actuelles (`openai` présent · `pg`/`node-pg-migrate` absents) |
+| `.github/workflows/sfia-studio-ci.yml` | CI Studio · Node 24 · pas de service Postgres |
+| `app/lib/oa/finops/**` + `__tests__/oa/finops/**` | Domaine T0 pur |
+| `app/lib/oa/execution-run/application/coordinateExecutionRun.ts` | Capture usage post-provider |
+| `app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts` | Mapping `ProviderUsage` → `UsageSummary` |
+| `app/lib/platform/ai/openaiProvider.ts` | Provider OpenAI Responses API |
+| `app/lib/platform/ai/types.ts` | `ProviderUsage` |
+| `app/lib/oa/execution-run/domain/types.ts` | `UsageSummary` |
+| `app/lib/platform/ai/config.ts` | `OPENAI_API_KEY` / `OPENAI_MODEL` |
+| `.gitignore` | Ignore `.env` / `.env.*` |
+| `scripts/sfia/publish-review-handoff.sh` | Publisher handoff L3 |
+| Métadonnées npm read-only (`pg`, `node-pg-migrate`, `@types/pg`) | Versions candidates |
+
+## 6. État existant du runtime
+
+### 6.1 Flux `coordinateExecutionRun`
+
+Chemin réel :
+
+`projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
+
+Flux observé (succès provider) :
+
+1. préflight / create / engage ;
+2. invocation `AiExecutionPort.complete` (adapter plateforme) ;
+3. si `providerResult.kind === "success"` → `validatedUsage(providerResult.usage)` ;
+4. transitions d’état execution-run ;
+5. retour `CoordinateExecutionRunResult` avec `validatedUsage`.
+
+`validatedUsage` devient disponible **uniquement** sur le chemin succès provider (ou normalisé depuis usage provider). Sur échec/timeout/cancel/hostile/invalid : `status: "unavailable"` avec reason.
+
+**Aucune écriture FinOps ledger / PostgreSQL** n’existe aujourd’hui dans ce flux.
+
+### 6.2 Adapter et provider
+
+| Composant | Chemin |
+|---|---|
+| Adapter | `…/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts` |
+| Provider canonique | `…/platform/ai/openaiProvider.ts` |
+| Re-export ops1 | `…/ops1/conversation/openaiProvider.ts` → même classe |
+
+Mapping adapter : si `inputTokens` ou `outputTokens` non null → `UsageSummary.status = "validated"` ; sinon `unavailable` (`provider usage missing`).
+
+Provider lit Responses API `usage.input_tokens` / `output_tokens` / `total_tokens` → `ProviderUsage`.
+
+### 6.3 Types
+
+- `ProviderUsage` : `app/lib/platform/ai/types.ts` — `inputTokens`, `outputTokens`, `totalTokens`, `model`, `providerResponseId` (nullable).
+- `UsageSummary` : `app/lib/oa/execution-run/domain/types.ts` — `validated` | `unavailable`.
+
+### 6.4 Stockage actuel
+
+- Execution-run : `persistence.kind: "memory_process_local"` · repository mémoire process-local.
+- FinOps T0 : contrats purs uniquement · **aucune** persistence.
+- Aucun dossier `migrations/` sous `projects/sfia-studio`.
+- Aucune `DATABASE_URL` Studio.
+
+### 6.5 Dépendances
+
+- `openai`: `^6.48.0` (présent).
+- `pg` : **absent**.
+- `node-pg-migrate` : **absent**.
+- Scripts migrate : **absents**.
+- CI Node : **24**.
+
+### 6.6 Environnement
+
+- Variables référencées : `OPENAI_API_KEY`, `OPENAI_MODEL`, `OPS1_CONVERSATION_PROVIDER`.
+- Pas de `.env.example` sous `projects/sfia-studio`.
+- `.gitignore` ignore `.env` / `.env.*` (exception `!.env.example`).
+
+## 7. Frontière exacte T1
+
+### 7.1 Flux cible (sans code)
+
+```text
+provider invocation
+→ provider result validation
+→ post-provider FinOps capture boundary (CAP-C)
+→ canonical event construction
+→ deterministic identity (eventId + dedup key)
+→ transaction DB
+→ immutable ledger insert OR duplicate recognition
+→ structured result to caller
+```
+
+Writer autoritatif unique : service FinOps serveur (BND-A). UI et domaine T0 purs **n’écrivent pas** PostgreSQL.
+
+### 7.2 Sémantiques opérationnelles (candidats — arbitrage Morris si non déjà SELECTED)
+
+| Situation | Comportement candidat | Statut |
+|---|---|---|
+| Écriture réussie | résultat `created` · run caller inchangé côté métier | aligné CAP-C |
+| Événement déjà présent | résultat `duplicate` · succès idempotent · pas de double comptage | aligné TECH-IDEM-01 |
+| DB indisponible | erreur structurée retryable · **ne pas** transformer silencieusement un succès provider en échec métier sans décision | **D-T1-FAILURE-SEMANTICS-01** |
+| Usage fournisseur absent | événement `usage_unavailable` ou skip capture selon option | **D-T1-FAILURE-SEMANTICS-01** |
+| Usage invalide | rejeter capture · erreur non retryable auditable | candidat |
+| Timeout / cancellation provider | pas de capture validated · éventuel marker unavailable | aligné runtime actuel |
+| Panne FinOps après succès provider | recommandation candidate : **ne pas** fail-closed le run utilisateur ; surface erreur FinOps séparée | **MORRIS DECISION REQUIRED** |
+
+## 8. Modèle physique candidat — ledger T1
+
+### 8.1 Table candidate `finops_usage_event` (ledger immuable)
+
+**Rôle :** append-only ledger d’événements d’usage post-provider.
+
+| Colonne | Type candidat | Null | Notes |
+|---|---|---|---|
+| `event_id` | `uuid` (ou `text` canonique) | NOT NULL | PK · déterministe |
+| `dedup_key` | `text` | NOT NULL | UNIQUE |
+| `project_id` | `text` | NOT NULL | |
+| `execution_run_id` | `text` | NOT NULL | |
+| `correlation_id` | `text` | NULL | |
+| `provider` | `text` | NOT NULL | ex. `openai` |
+| `model` | `text` | NULL | |
+| `occurred_at` | `timestamptz` | NOT NULL | |
+| `period_start` | `date` | NOT NULL | UTC calendar month start |
+| `source_of_truth` | `text` | NOT NULL | enum SoT T0 |
+| `evidence_class` | `text` | NOT NULL | |
+| `input_tokens` | `bigint` | NULL | |
+| `output_tokens` | `bigint` | NULL | |
+| `total_tokens` | `bigint` | NULL | |
+| `cost_minor` / `cost_numeric` | selon Money | NULL | **FIND-03 / D-T1-MONEY-01** |
+| `currency_code` | `char(3)` | NULL | ISO 4217 si coût présent |
+| `provider_request_id` | `text` | NULL | |
+| `correction_ref` | `text` | NULL | réservé corrections futures |
+| `usage_status` | `text` | NOT NULL | `validated` / `unavailable` / `invalid` |
+| `created_at` | `timestamptz` | NOT NULL | default `now()` |
+
+**Contraintes :**
+
+- PK(`event_id`) ;
+- UNIQUE(`dedup_key`) ;
+- CHECK tokens ≥ 0 quand non null ;
+- **pas** de UPDATE métier ; corrections via nouvel événement + `correction_ref` (évolution future).
+
+**Index candidats :**
+
+- UNIQUE dedup ;
+- `(project_id, period_start)` ;
+- `(execution_run_id)` ;
+- `(occurred_at)`.
+
+**Données interdites :**
+
+- payload OpenAI brut ;
+- `OPENAI_API_KEY` / secrets ;
+- PII non minimisée (prompts, contenus conversation) ;
+- agrégats T2.
+
+**Pas de table d’agrégats T2** dans T1 (TECH-STORE autorise events+aggregates conceptuellement, mais agrégation = T2). T1 se limite au ledger d’événements.
+
+## 9. Représentation Money — FIND-03
+
+FIND-03 reste **OPEN / ACCEPTED RESERVE** jusqu’à décision Morris.
+
+### Option M1 — entier unité mineure + currency
+
+- précision : déterministe ;
+- PG : `bigint` + `char(3)` ;
+- TS : `number`/`bigint` ;
+- risques arrondi : à la frontière d’entrée uniquement ;
+- **recommandation candidate : OUI** pour coûts FinOps.
+
+### Option M2 — `numeric` scale explicite + currency
+
+- précision forte ;
+- risques de mapping TS/ORM ;
+- acceptable si scale figée (ex. 6).
+
+### Option M3 — chaîne décimale domaine + conversion DB
+
+- déterminisme domaine élevé ;
+- friction frontière ;
+- utile si multi-scale.
+
+**Recommandation candidate :** **M1** (entier unité mineure + ISO 4217).
+
+**Statut :** `D-T1-MONEY-01` — **MORRIS DECISION REQUIRED** — FIND-03 non fermé.
+
+## 10. Stratégie Neon candidate
+
+Compte Neon existe (prérequis opérationnel Morris) · **aucune configuration dans ce cycle**.
+
+| Sujet | Options / notes | Statut |
+|---|---|---|
+| Projet / env | isolé Studio FinOps | candidat |
+| Région | non sélectionnée dans repo | **D-T1-NEON-REGION-01** |
+| Plan | non sélectionné | **D-T1-NEON-PLAN-01** |
+| Branche DB | possible pour CI/dev | candidat |
+| Connexion directe | migrations (`node-pg-migrate`) | **D-T1-DB-CONNECTION-01** |
+| Connexion poolée | runtime app | **D-T1-DB-CONNECTION-01** |
+| SSL | requis | candidat |
+| Variables | `DATABASE_URL` (runtime pool) · `DATABASE_URL_DIRECT` ou `DIRECT_URL` (migrations) — noms candidats | |
+| Local / CI / partagé | séparation stricte | |
+| Rotation | manuelle Morris | |
+
+Aucun credential demandé ou affiché.
+
+## 11. Stratégie OpenAI candidate
+
+| Sujet | Observation / candidat |
+|---|---|
+| Moment de lecture usage | post-`complete` provider · avant/après transitions · **après** validation `UsageSummary` |
+| Champs disponibles | `inputTokens`, `outputTokens`, `totalTokens`, `model`, `providerResponseId` |
+| Mapping FinOps | SoT initial typiquement `API_USAGE` / evidence estimée selon 125 — **ne bloque jamais** |
+| Usage absent | `usage_status=unavailable` · tokens null |
+| Modèle inconnu | stocker `model` null/unknown text · pas d’invention |
+| provider request ID absent | null autorisé |
+| Mocks | `OPS1_CONVERSATION_PROVIDER=fake` / fixtures — **sans** clé |
+| Provider-real | étape Delivery optionnelle · **D-T1-PROVIDER-REAL-01** |
+
+## 12. Packages et versions
+
+| Package | État actuel | Version candidate (npm read-only) | Rôle | Runtime/dev | Recommandation candidate |
+|---|---|---|---|---|---|
+| `openai` | `^6.48.0` présent | conserver | provider | runtime | KEEP |
+| `pg` | absent | `8.22.0` (engines ≥16) | client PG | runtime | **D-T1-PG-PACKAGE-01** |
+| `@types/pg` | absent | `8.20.4` | types | dev | avec `pg` |
+| `node-pg-migrate` | absent | `8.0.x` ou `9.0.0` (peer `pg` `<9`) | migrations | dev/runtime migrate | **D-T1-MIGRATION-VERSION-01** — privilégier ligne compatible peer `pg@8` |
+
+Node CI = 24 · compatible.
+
+**Interdit dans ce cycle :** `npm install` / modification lockfile.
+
+## 13. Stratégie migrations
+
+| Élément | Candidat |
+|---|---|
+| Chemin | `projects/sfia-studio/app/db/migrations/` (**candidat**) |
+| Outil | `node-pg-migrate` (TECH-MIG-01 SELECTED) |
+| Nommage | timestamp + slug additif |
+| Up/down | obligatoires · down non destructif (drop objects créés uniquement si vides / safe) |
+| Règles | additives only · **pas** de backfill historique T1 |
+| Connexion | **directe** (pas pool transaction mode) |
+| Scripts futurs | `migrate:up` / `migrate:down` (non créés ici) |
+| CI | selon **D-T1-CI-DATABASE-01** |
+| Rollback | flag-off + data preserved (125) |
+
+## 14. Stratégie CI et tests DB
+
+### Option CI-A — service container Postgres GitHub Actions (recommandation candidate)
+
+- reproductible · pas de secret Neon en PR ;
+- `services: postgres` + migrate + tests intégration ;
+- modification future de `.github/workflows/sfia-studio-ci.yml` → **D-T1-PROTECTED-WORKFLOW-01**.
+
+### Option CI-B — Neon branch CI
+
+- secrets GitHub · isolation/nettoyage requis · plus de surface credential.
+
+### Option CI-C — DB tests locaux seulement
+
+- CI sans DB · risque de régression non détectée.
+
+**Recommandation candidate :** **CI-A**.
+
+## 15. Plan de credentials
+
+| Phase | Credentials |
+|---|---|
+| PREPARATION T1 (ce cycle) | **aucun** |
+| DELIVERY T1 — mock / local Postgres | aucun OpenAI · Postgres local/CI |
+| DELIVERY T1 — Neon | Neon URL(s) · saisie manuelle locale Morris · jamais chat/prompt/Git/pack/logs |
+| VALIDATION PROVIDER-REAL | `OPENAI_API_KEY` (+ model) uniquement si GO explicite · masqué |
+
+Noms candidats uniquement : `DATABASE_URL`, `DATABASE_URL_DIRECT`, `OPENAI_API_KEY`, `OPENAI_MODEL`.
+
+## 16. Manifest futur T1 (borné)
+
+### À créer (candidats)
+
+- `app/lib/oa/finops/application/captureFinOpsUsage.ts` (ou équivalent conventions repo)
+- `app/lib/oa/finops/application/types.ts` (event / results)
+- `app/lib/oa/finops/ports/finOpsLedgerRepository.ts`
+- `app/lib/oa/finops/infrastructure/postgres/pgFinOpsLedgerRepository.ts`
+- `app/lib/oa/finops/infrastructure/openai/mapProviderUsageToFinOpsEvent.ts`
+- `app/db/migrations/<timestamp>_create-finops-usage-event.js` (ou `.ts` selon outil)
+- tests unitaires + intégration sous `app/__tests__/oa/finops/`
+- `.env.example` Studio **sans secrets** (si absent)
+
+### À modifier (candidats)
+
+- `coordinateExecutionRun.ts` **ou** composition root serveur — appel capture post-success (**point exact à figer en Delivery**)
+- `package.json` / `package-lock.json` — ajout `pg` / `node-pg-migrate` après GO
+- `.github/workflows/sfia-studio-ci.yml` — **protégé** · GO borné requis
+
+### Préservés / interdits
+
+- domaine T0 pur `app/lib/oa/finops/domain/**` : préservé (extensions non cassantes seulement)
+- documents 103–134 : **non modifiés** dans Delivery T1 sauf GO distinct
+- pas d’agrégation T2 · pas d’enforcement · pas d’UI
+
+## 17. Symboles futurs (candidats)
+
+- `FinOpsUsageEvent`
+- `FinOpsEventId`
+- `FinOpsDedupKey`
+- `FinOpsLedgerRepository`
+- `CaptureFinOpsUsage` / `captureFinOpsUsage`
+- `mapProviderUsageToFinOpsEvent`
+- `PgFinOpsLedgerRepository`
+- `FinOpsInsertResult` = `created` | `duplicate`
+- `FinOpsPersistenceError` (sanitized)
+
+Noms finaux à aligner sur conventions camelCase/ports du repo lors de Delivery.
+
+## 18. Idempotence et concurrence
+
+Aligné TECH-IDEM-01 (SELECTED — NOT IMPLEMENTED) :
+
+| Élément | Candidat |
+|---|---|
+| Matériau `eventId` | hash canonique stable de champs normalisés (provider, runId, attempt/correlation, period, usage fingerprint) |
+| Matériau `dedup_key` | `provider + execution_run_id + attempt` (125) · normalisation trim/lower où applicable |
+| Retry | même clé → `duplicate` |
+| Concurrence | UNIQUE + transaction · pas de lock mémoire autoritatif |
+| Multi-instance / restart-safe | oui via contrainte DB |
+
+Détail exact du hash algorithmique : **à figer en Delivery** sans changer la sémantique.
+
+## 19. Erreurs et résilience
+
+| Cas | Classe candidate | Retryable | User-visible |
+|---|---|---|---|
+| provider success / DB success | OK | — | non |
+| provider success / DB failure | FinOps persistence error | oui (transient) | message générique / flag interne |
+| provider failure | pas de capture validated | — | existant |
+| usage unavailable | event marker ou skip | non | non |
+| usage invalid | reject | non | non |
+| duplicate | success idempotent | — | non |
+| migration failure | stop Delivery | non | ops |
+| connection timeout | transient | oui | non |
+| conflict transaction | transient | oui | non |
+| malformed env | config error | non | ops |
+| credential absent/invalid | config/auth error | non | ops |
+
+## 20. Sécurité et RGPD
+
+- secrets server-side only ;
+- jamais dans bundle client / logs / handoff ;
+- SQL paramétré ;
+- least privilege DB (runtime vs migrate) ;
+- pas de payload brut ;
+- actorId pseudonymisé si nécessaire ;
+- **R-TECH-TTL-01 KEEP-OPEN** ;
+- **R-TECH-FINOPS-HARD-01 KEEP-OPEN**.
+
+## 21. Performance et GreenOps
+
+- insert unitaire post-run · batch non requis T1 ;
+- index minimaux (§8) ;
+- pas d’agrégation always-on ;
+- pool sizing futur borné ;
+- unknown ≠ zero conservé ;
+- estimation never blocks.
+
+## 22. Plan de tests futurs
+
+| Test | Type | Credential | CI |
+|---|---|---|---|
+| invariants T0 inchangés | unitaire | non | oui |
+| mapper OpenAI → event | unitaire | non | oui |
+| idempotence duplicate | intégration PG | non (local/CI PG) | oui (CI-A) |
+| DB unavailable | intégration | non | oui |
+| usage invalid / unavailable | unitaire | non | oui |
+| unknown ≠ zero / estimation never blocks | unitaire | non | oui |
+| import boundaries | unitaire | non | oui |
+| migrations up/down | intégration | non | oui |
+| secret leakage scan | CI existant + asserts | non | oui |
+| Neon validation | manuel borné | Neon | non PR |
+| OpenAI provider-real | manuel borné | OpenAI | non PR |
+
+## 23. Commandes futures candidates (ne pas exécuter ici)
+
+```bash
+# unitaires FinOps
+npm test -- __tests__/oa/finops
+
+# typecheck / lint / build (app)
+npm run typecheck && npm run lint && npm run build
+
+# migrations (après installation autorisée)
+npm run migrate:up
+npm run migrate:down
+
+# CI
+# déclenchée sur PR/push — service Postgres si CI-A accepté
+```
+
+## 24. Stop conditions — future Delivery T1
+
+- main divergent du SHA arbitrage ;
+- décisions Morris manquantes (matrice §26) ;
+- Money non arbitré si colonne coût persistée ;
+- versions packages non validées ;
+- région/plan Neon requis non sélectionnés ;
+- credential demandé trop tôt / secret visible ;
+- migration destructive / raw payload / T2 aggregation / enforcement ;
+- modification hors manifest ;
+- workflow protégé sans GO ;
+- lockfile hors installation attendue ;
+- double comptage possible ;
+- absence rollback / redaction.
+
+## 25. Critères d’acceptation T1 futurs (non réalisés)
+
+1. Ledger append-only déployable via migration additive.
+2. Capture post-provider unique writer.
+3. Idempotence prouvée (duplicate sous retry/concurrence).
+4. Aucun secret en repo/logs.
+5. Tests unitaires + intégration PG verts en CI (si CI-A).
+6. Domaine T0 non régressé.
+7. Aucun enforcement/alerte/UI/T2+.
+
+## 26. Matrice consolidée de décisions Morris
+
+| ID | Options | Recommandation candidate | Statut |
+|---|---|---|---|
+| D-T1-MONEY-01 | M1 / M2 / M3 | **M1** unité mineure | MORRIS DECISION REQUIRED |
+| D-T1-LEDGER-SCHEMA-01 | schéma §8 | accepter / amender | MORRIS DECISION REQUIRED |
+| D-T1-DB-CONNECTION-01 | direct migrate + pooled runtime | **séparation dual-URL** | MORRIS DECISION REQUIRED |
+| D-T1-NEON-REGION-01 | régions Neon | **sélection Morris** | MORRIS DECISION REQUIRED |
+| D-T1-NEON-PLAN-01 | plans Neon | **sélection Morris** | MORRIS DECISION REQUIRED |
+| D-T1-PG-VERSION-01 | version serveur PG Neon | aligner offre Neon | MORRIS DECISION REQUIRED |
+| D-T1-PG-PACKAGE-01 | `pg@8.22.x` | **8.22.x** | MORRIS DECISION REQUIRED |
+| D-T1-MIGRATION-VERSION-01 | node-pg-migrate 8.x / 9.x | **8.x** (peer pg<9) ou 9.x si peer OK | MORRIS DECISION REQUIRED |
+| D-T1-MIGRATION-PATH-01 | `app/db/migrations/` | ce chemin | MORRIS DECISION REQUIRED |
+| D-T1-CI-DATABASE-01 | CI-A / CI-B / CI-C | **CI-A** | MORRIS DECISION REQUIRED |
+| D-T1-PROVIDER-REAL-01 | inclure / différer validation réelle | **différer** hors mock | MORRIS DECISION REQUIRED |
+| D-T1-FAILURE-SEMANTICS-01 | fail-open run vs fail-closed | **fail-open run + erreur FinOps** | MORRIS DECISION REQUIRED |
+| D-T1-PROTECTED-WORKFLOW-01 | autoriser modif CI | requis si CI-A | MORRIS DECISION REQUIRED |
+
+Nombre de décisions consolidées : **13**.
+
+## 27. Réserves
+
+- FIND-03 Money — **OPEN** jusqu’à D-T1-MONEY-01 ;
+- FIND-07 — NOTE préservée ;
+- R-TECH-TTL-01 — KEEP-OPEN ;
+- R-TECH-FINOPS-HARD-01 — KEEP-OPEN ;
+- recalibration 15/20/25/30 USD required (hors T1) ;
+- aucun contrôle FinOps actif ;
+- TB-04-04 NOT DONE ;
+- TB-02-05 PRESERVED ;
+- LOT-D1 NOT-CONSUMED.
+
+## 28. Prochaine gate candidate unique
+
+```text
+GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+ARBITRATE CONSOLIDATED FINOPS TECHNICAL LOT T1 EXECUTION PACK
+```
+
+**Candidate uniquement — non consommée.**
+
+Cette gate permettra à Morris d’accepter toutes les recommandations ou de modifier uniquement les décisions désignées, sans micro-cycle par décision. Elle n’autorise pas automatiquement la Delivery T1.
+
+## 29. Gate Delivery future (non active)
+
+Documentée pour clarté — **pas** la prochaine gate active :
+
+```text
+GO DELIVERY SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+IMPLEMENT FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
+USING MORRIS-ARBITRATED EXECUTION PACK
+```
+
+Utilisable uniquement après arbitrage consolidé §28.
+
+---
+
+**FINOPS TECHNICAL LOT T1 — EXECUTION PACK PREPARED — NOT IMPLEMENTED — DELIVERY NOT AUTHORIZED — MONEY FIND-03 OPEN — SINGLE ARBITRATION GATE CANDIDATE**
diff --git a/projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md b/projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
new file mode 100644
index 0000000..b887580
--- /dev/null
+++ b/projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
@@ -0,0 +1,473 @@
+# 136 — FinOps Technical Lot T1 — Consolidated Decisions Applied
+
+## 1. Statut et anti-claims
+
+**FINOPS TECHNICAL LOT T1 CONSOLIDATED DECISIONS APPLIED**
+
+**T1 EXECUTION PACK 135 PRESERVED BYTE-IDENTICAL**
+
+**T1 DELIVERY NOT AUTHORIZED**
+
+**NO CODE IMPLEMENTED**
+
+**NO PACKAGE INSTALLED**
+
+**NO SQL OR MIGRATION CREATED**
+
+**NO DATABASE ACCESSED**
+
+**NO NEON CONFIGURED**
+
+**NO OPENAI REAL CALL**
+
+**NO CREDENTIAL RECEIVED OR DISPLAYED**
+
+**T2 TO T7 NOT AUTHORIZED**
+
+**LOT-D1 TO LOT-D5 NOT AUTHORIZED**
+
+Le document 135 reste le Decision Pack pré-arbitrage historique. Ce document 136 est le record d’application documentaire des arbitrages consolidés. Il ne lance pas la Delivery T1.
+
+## 2. Autorité Morris
+
+Gate consommée :
+
+```text
+GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+ARBITRATE CONSOLIDATED FINOPS TECHNICAL LOT T1 EXECUTION PACK —
+
+ACCEPT RECOMMENDATIONS WITH THESE AMENDMENTS:
+
+D-T1-MONEY-01 = DEFER TO T2 —
+FIND-03 REMAINS OPEN —
+
+D-T1-LEDGER-SCHEMA-01 =
+ACCEPT T1 USAGE LEDGER WITHOUT COST OR CURRENCY COLUMNS —
+
+D-T1-NEON-REGION-01 = DEFER UNTIL NEON INTEGRATION —
+D-T1-NEON-PLAN-01 = DEFER UNTIL NEON INTEGRATION —
+
+D-T1-PG-VERSION-01 = ALIGN WITH SELECTED NEON ENVIRONMENT —
+D-T1-PG-PACKAGE-01 = ACCEPT PG 8.22 LINE —
+D-T1-MIGRATION-VERSION-01 = ACCEPT NODE-PG-MIGRATE 8 LINE —
+D-T1-MIGRATION-PATH-01 = ACCEPT APP/DB/MIGRATIONS —
+
+D-T1-DB-CONNECTION-01 =
+ACCEPT DIRECT MIGRATION CONNECTION AND POOLED RUNTIME CONNECTION —
+
+D-T1-CI-DATABASE-01 = ACCEPT CI-A POSTGRES SERVICE CONTAINER —
+D-T1-PROVIDER-REAL-01 = DEFER TO DISTINCT VALIDATION —
+D-T1-FAILURE-SEMANTICS-01 =
+ACCEPT FAIL-OPEN USER RUN WITH SEPARATE AUDITABLE FINOPS ERROR —
+
+D-T1-PROTECTED-WORKFLOW-01 =
+AUTHORIZE BOUNDED SFIA STUDIO CI MODIFICATION IN FUTURE T1 DELIVERY —
+
+T1 DELIVERY REMAINS NOT AUTHORIZED
+```
+
+Phrase Morris complémentaire :
+
+```text
+ok pour les décisions
+```
+
+Morris accepte les recommandations du document 135 avec les amendements explicitement fournis ci-dessus.
+
+## 3. Horodatage
+
+| Événement | Horodatage |
+|---|---|
+| Décision Morris | 2026-08-06 23:55 CEST (+0200) / 21:55 UTC (secondes exactes non inventées) |
+| Travail Cursor | 2026-08-07 00:00:07 CEST (+0200) / 2026-08-06 22:00:07 UTC |
+
+## 4. Git Truth
+
+| Élément | Valeur |
+|---|---|
+| `origin/main` | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
+| Branche | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack` |
+| HEAD | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
+| Upstream | aucun |
+| Worktree | `…/worktrees/finops-t1-pack` |
+| Document 135 | untracked local · SHA-256 `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe` · 548 lignes · 23328 octets · **byte-identical** préservé |
+| Document 136 avant cycle | **ABSENT** |
+| Document 136 après cycle | créé localement (untracked) |
+| Tracked modifications | aucune |
+| Staged | vide |
+| Handoff entrant | tip `02d5a2e0d79d897be5d0bc37f985f3a4c2ecfbad` · blob `e1211fb514e35f14570fa742496e6efcb0913603` |
+| Commit / push projet | **aucun** |
+
+## 5. Sources
+
+- `prompts/templates/sfia-cycle-execution-template.md` (blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`)
+- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
+- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
+- documents 103, 123, 125, 126–134 (read-only)
+- document 135 complet (pré-arbitrage)
+- Review Handoff entrant `02d5a2e…` / blob `e1211fb…`
+- `projects/sfia-studio/app/package.json` (read-only)
+- `.github/workflows/sfia-studio-ci.yml` (read-only)
+- chemins runtime découverts dans 135 (`coordinateExecutionRun`, adapter, `openaiProvider`, types usage)
+
+## 6. Matrice avant / après
+
+| ID | Avant | Valeur décidée | Portée | Différé | Conséquences Delivery | Anti-claim |
+|---|---|---|---|---|---|---|
+| D-T1-MONEY-01 | REQUIRED | DEFER TO T2 | schéma / domaine monétaire | valeur Money exacte | pas de colonnes coût/devise T1 | DEFER ≠ M1 SELECTED |
+| D-T1-LEDGER-SCHEMA-01 | REQUIRED | USAGE LEDGER WITHOUT COST/CURRENCY | schéma T1 | — | migration ledger usage-only | cost/currency exclus |
+| D-T1-DB-CONNECTION-01 | REQUIRED | DIRECT migrate + POOLED runtime | connexions | secrets réels | dual-URL future | pas de credential maintenant |
+| D-T1-NEON-REGION-01 | REQUIRED | DEFER UNTIL NEON INTEGRATION | Neon | région exacte | Delivery initiale sans Neon | defer ≠ sélection |
+| D-T1-NEON-PLAN-01 | REQUIRED | DEFER UNTIL NEON INTEGRATION | Neon | plan exact | idem | defer ≠ sélection |
+| D-T1-PG-VERSION-01 | REQUIRED | ALIGN WITH SELECTED NEON ENV | politique PG | version exacte | CI locale compatible | pas de version inventée |
+| D-T1-PG-PACKAGE-01 | REQUIRED | PG 8.22 LINE | package | patch exact lock | install en Delivery | pas d’install maintenant |
+| D-T1-MIGRATION-VERSION-01 | REQUIRED | NODE-PG-MIGRATE 8 LINE | package | patch exact lock | install en Delivery | pas d’install maintenant |
+| D-T1-MIGRATION-PATH-01 | REQUIRED | `app/db/migrations/` | chemin | — | migrations additives futures | aucun SQL maintenant |
+| D-T1-CI-DATABASE-01 | REQUIRED | CI-A Postgres service | CI | — | service éphémère | pas de secret Neon PR |
+| D-T1-PROVIDER-REAL-01 | REQUIRED | DEFER TO DISTINCT VALIDATION | OpenAI réel | GO distinct | mocks/CI sans clé | pas de provider-real T1 |
+| D-T1-FAILURE-SEMANTICS-01 | REQUIRED | FAIL-OPEN + erreur FinOps | résilience | retry durable T2/T6 | run user non fail-closed | pas de perte silencieuse |
+| D-T1-PROTECTED-WORKFLOW-01 | REQUIRED | BOUNDED CI MOD IN FUTURE DELIVERY | workflow protégé | — | modif CI-A bornée | pas de modif ce cycle |
+
+## 7. D-T1-MONEY-01
+
+**Valeur décidée :** `DEFER TO T2`
+
+**Statut :** DECISION TO DEFER APPLIED — VALUE NOT SELECTED
+
+Conséquences :
+
+- aucune représentation monétaire implémentée en T1 ;
+- aucune colonne `cost` / `currency` ;
+- aucun calcul tarifaire / arrondi monétaire ;
+- **FIND-03 reste OPEN** ;
+- Money arbitré et implémenté dans un cycle T2 distinct.
+
+**Anti-claim :** `DEFER TO T2 ≠ M1 SELECTED`.
+
+## 8. D-T1-LEDGER-SCHEMA-01
+
+**Valeur décidée :** `T1 USAGE LEDGER WITHOUT COST OR CURRENCY COLUMNS`
+
+**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED
+
+Schéma logique accepté pour la future Delivery :
+
+- `event_id`
+- `dedup_key`
+- `project_id`
+- `execution_run_id`
+- `correlation_id` (nullable)
+- `provider`
+- `model` (nullable)
+- `occurred_at`
+- `period_start`
+- `source_of_truth`
+- `evidence_class`
+- `input_tokens` (nullable)
+- `output_tokens` (nullable)
+- `total_tokens` (nullable)
+- `provider_request_id` (nullable)
+- `correction_ref` (nullable)
+- `usage_status`
+- `created_at`
+
+Colonnes **explicitement exclues** de T1 :
+
+- `cost_minor`
+- `cost_numeric`
+- `currency_code`
+- toute autre représentation monétaire
+
+Préservé :
+
+- append-only ;
+- PK `event_id` ;
+- UNIQUE `dedup_key` ;
+- tokens non négatifs quand non null ;
+- pas de payload OpenAI brut ;
+- pas d’agrégat T2.
+
+## 9. D-T1-DB-CONNECTION-01
+
+**Valeur décidée :** `DIRECT MIGRATION CONNECTION AND POOLED RUNTIME CONNECTION`
+
+**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED
+
+Conséquences futures :
+
+- migrations via URL directe ;
+- runtime via URL poolée ;
+- séparation des responsabilités ;
+- secrets distincts possibles ;
+- SSL obligatoire ;
+- aucun nom ou credential réel créé maintenant.
+
+Noms candidats (jamais de valeurs) :
+
+- `DATABASE_URL`
+- `DATABASE_URL_DIRECT`
+
+## 10. D-T1-NEON-REGION-01
+
+**Valeur décidée :** `DEFER UNTIL NEON INTEGRATION`
+
+**Statut :** DECISION TO DEFER APPLIED — VALUE NOT SELECTED
+
+## 11. D-T1-NEON-PLAN-01
+
+**Valeur décidée :** `DEFER UNTIL NEON INTEGRATION`
+
+**Statut :** DECISION TO DEFER APPLIED — VALUE NOT SELECTED
+
+Anti-claims :
+
+- compte Neon existant ≠ environnement configuré ;
+- defer ≠ choix implicite ;
+- aucune région / plan sélectionnés ;
+- aucun projet ou branche DB créé ;
+- aucun credential nécessaire pour Delivery locale/CI initiale.
+
+## 12. D-T1-PG-VERSION-01
+
+**Valeur décidée :** `ALIGN WITH SELECTED NEON ENVIRONMENT`
+
+**Statut :** DECISION TO DEFER APPLIED — VALUE NOT SELECTED (politique décidée ; version exacte différée)
+
+Qualification :
+
+- politique de compatibilité décidée ;
+- version PostgreSQL exacte non sélectionnée tant que l’environnement Neon ne l’est pas ;
+- future Delivery locale/CI : version compatible avec la cible probable sans figer Neon.
+
+## 13. D-T1-PG-PACKAGE-01
+
+**Valeur décidée :** `PG 8.22 LINE ACCEPTED`
+
+**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED
+
+- famille 8.22 acceptée ;
+- version exacte à figer dans `package-lock` pendant Delivery ;
+- aucune installation maintenant ;
+- `@types/pg` compatible à sélectionner techniquement en Delivery.
+
+## 14. D-T1-MIGRATION-VERSION-01
+
+**Valeur décidée :** `NODE-PG-MIGRATE 8 LINE ACCEPTED`
+
+**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED
+
+- ligne 8 acceptée ;
+- version exacte à figer pendant Delivery ;
+- compatibilité avec `pg` 8 requise ;
+- aucune installation maintenant.
+
+## 15. D-T1-MIGRATION-PATH-01
+
+**Valeur décidée :** `projects/sfia-studio/app/db/migrations/`
+
+**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED
+
+- migrations additives ;
+- conventions up/down ;
+- aucun backfill historique T1 ;
+- aucune migration destructive ;
+- **aucune migration créée dans ce cycle**.
+
+## 16. D-T1-CI-DATABASE-01
+
+**Valeur décidée :** `CI-A — POSTGRES SERVICE CONTAINER`
+
+**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED
+
+Conséquences futures :
+
+- PostgreSQL éphémère GitHub Actions ;
+- pas de secret Neon dans les PR ;
+- migrations avant tests DB ;
+- isolation par run ;
+- reproductibilité ;
+- aucune dépendance réseau Neon pour la CI standard.
+
+## 17. D-T1-PROVIDER-REAL-01
+
+**Valeur décidée :** `DEFER TO DISTINCT VALIDATION`
+
+**Statut :** DECISION TO DEFER APPLIED — VALUE NOT SELECTED
+
+- Delivery T1 initiale avec mocks et mapping unitaire ;
+- aucune clé OpenAI requise pour implémentation locale ou CI ;
+- validation OpenAI réelle soumise à un GO Morris distinct ;
+- aucune claim provider-real dans T1 Delivery.
+
+## 18. D-T1-FAILURE-SEMANTICS-01
+
+**Valeur décidée :** `FAIL-OPEN USER RUN WITH SEPARATE AUDITABLE FINOPS ERROR`
+
+**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED
+
+Définition :
+
+- succès fournisseur conservé comme succès métier ;
+- panne de capture FinOps **ne** transforme **pas** le run en échec ;
+- erreur FinOps séparée, structurée, sanitized et auditable ;
+- erreur transitoire marquée retryable lorsqu’approprié ;
+- aucun retry incontrôlé dans T1 ;
+- aucune perte silencieuse ;
+- aucune exposition de détail DB à l’utilisateur.
+
+La stratégie de retry durable / reconciliation appartient aux lots ultérieurs (T2/T6 selon responsabilité).
+
+## 19. D-T1-PROTECTED-WORKFLOW-01
+
+**Valeur décidée :** `BOUNDED SFIA STUDIO CI MODIFICATION AUTHORIZED IN FUTURE T1 DELIVERY`
+
+**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED
+
+Portée future strictement autorisée :
+
+`.github/workflows/sfia-studio-ci.yml`
+
+Modification future uniquement pour :
+
+- ajouter un service PostgreSQL éphémère ;
+- variables non secrètes de connexion au service local CI ;
+- exécuter migrations ;
+- exécuter tests d’intégration DB ;
+- conserver les gates existantes.
+
+Interdit même pendant la future Delivery sans nouveau GO :
+
+- secret Neon ;
+- appel OpenAI réel ;
+- suppression de contrôles existants ;
+- affaiblissement du Required Gate ;
+- changement d’autres workflows ;
+- déploiement / production.
+
+**Aucune modification de workflow dans ce cycle.**
+
+## 20. Synthèse des 13 décisions
+
+| ID | Valeur décidée | Statut | Exactitude différée | Lot | Credential | Future action |
+|---|---|---|---|---|---|---|
+| D-T1-MONEY-01 | DEFER TO T2 | DECISION TO DEFER APPLIED — VALUE NOT SELECTED | représentation Money | T2 | non T1 | arbitrage T2 |
+| D-T1-LEDGER-SCHEMA-01 | usage ledger sans cost/currency | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | — | T1 | non | migration + adapter |
+| D-T1-DB-CONNECTION-01 | direct + pooled | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | secrets réels | T1 | local/CI non-secret ; Neon plus tard | dual-URL |
+| D-T1-NEON-REGION-01 | DEFER UNTIL NEON INTEGRATION | DECISION TO DEFER APPLIED — VALUE NOT SELECTED | région | Neon future | Neon futur | gate Neon |
+| D-T1-NEON-PLAN-01 | DEFER UNTIL NEON INTEGRATION | DECISION TO DEFER APPLIED — VALUE NOT SELECTED | plan | Neon future | Neon futur | gate Neon |
+| D-T1-PG-VERSION-01 | ALIGN WITH SELECTED NEON ENV | DECISION TO DEFER APPLIED — VALUE NOT SELECTED | version exacte | T1/Neon | non | aligner CI/local |
+| D-T1-PG-PACKAGE-01 | PG 8.22 LINE | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | patch lock | T1 | non | npm install Delivery |
+| D-T1-MIGRATION-VERSION-01 | NODE-PG-MIGRATE 8 LINE | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | patch lock | T1 | non | npm install Delivery |
+| D-T1-MIGRATION-PATH-01 | `app/db/migrations/` | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | — | T1 | non | créer migrations Delivery |
+| D-T1-CI-DATABASE-01 | CI-A | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | — | T1 | non | modif workflow bornée |
+| D-T1-PROVIDER-REAL-01 | DEFER TO DISTINCT VALIDATION | DECISION TO DEFER APPLIED — VALUE NOT SELECTED | GO distinct | validation future | OpenAI futur | gate distincte |
+| D-T1-FAILURE-SEMANTICS-01 | FAIL-OPEN + erreur FinOps | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | retry durable | T1 (+T2/T6) | non | implémenter sémantique |
+| D-T1-PROTECTED-WORKFLOW-01 | BOUNDED CI MOD FUTURE DELIVERY | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | — | T1 | non | CI-A dans Delivery |
+
+## 21. Manifest de la future Delivery T1
+
+### Créations candidates
+
+- service/application de capture FinOps ;
+- types d’événement T1 (sans Money) ;
+- port repository ledger ;
+- adapter PostgreSQL ;
+- mapper `ProviderUsage` → événement FinOps ;
+- migration initiale sous `projects/sfia-studio/app/db/migrations/` ;
+- tests unitaires et d’intégration ;
+- `.env.example` sans secret si nécessaire.
+
+### Modifications candidates
+
+- composition root / `coordinateExecutionRun` (point exact à figer) ;
+- `package.json` / `package-lock.json` ;
+- `.github/workflows/sfia-studio-ci.yml` (borné CI-A) ;
+- exports FinOps nécessaires.
+
+### Exclusions fermes
+
+- coût et devise ;
+- T2 aggregation ;
+- alertes / enforcement / override / rollout / UI ;
+- Neon réel ;
+- OpenAI réel ;
+- autres workflows.
+
+## 22. Credentials
+
+| Phase | Credentials |
+|---|---|
+| DELIVERY T1 LOCALE / CI-A | aucun Neon · aucune clé OpenAI · Postgres local/service container uniquement |
+| NEON INTEGRATION FUTURE | credentials Neon après gate distincte · saisie manuelle Morris · jamais chat/prompt/Git/handoff/logs |
+| OPENAI PROVIDER-REAL FUTUR | `OPENAI_API_KEY` après gate distincte · saisie locale · jamais affichée |
+
+## 23. Réserves
+
+- FIND-03 Money — **OPEN** et reportée à T2 ;
+- FIND-07 — NOTE ;
+- R-TECH-TTL-01 — KEEP-OPEN ;
+- R-TECH-FINOPS-HARD-01 — KEEP-OPEN ;
+- recalibration 15/20/25/30 USD required ;
+- TB-04-04 NOT DONE ;
+- TB-02-05 PRESERVED ;
+- LOT-D1 NOT-CONSUMED ;
+- aucun contrôle FinOps actif.
+
+## 24. Critères de passage vers Delivery T1
+
+La future Delivery T1 devient éligible à une décision Morris distincte si :
+
+- document 136 complet ;
+- 135 byte-identical ;
+- matrice 13 décisions sans ambiguïté ;
+- manifest borné ;
+- workflow protégé borné ;
+- aucun credential requis pour la phase initiale ;
+- aucune décision Money implicite ;
+- tests CI-A définis ;
+- rollback et erreurs définis ;
+- Review Handoff distant conforme.
+
+## 25. Prochaine gate candidate unique
+
+```text
+GO DELIVERY SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+IMPLEMENT FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
+USING MORRIS-ARBITRATED EXECUTION PACK —
+LOCAL POSTGRES AND CI-A ONLY —
+NO NEON INTEGRATION —
+NO OPENAI PROVIDER-REAL VALIDATION
+```
+
+**Candidate uniquement — non consommée.**
+
+Cette future gate autorisera dans un même cycle borné :
+
+- installation `pg` 8.22 line ;
+- installation `node-pg-migrate` 8 line ;
+- création de la migration T1 ;
+- ledger usage sans Money ;
+- service de capture ;
+- adapter PostgreSQL ;
+- idempotence ;
+- intégration locale PostgreSQL ;
+- modification bornée du workflow CI ;
+- tests ;
+- documentation d’exécution.
+
+Elle n’autorisera pas :
+
+- Neon réel ;
+- OpenAI réel ;
+- Money ;
+- T2 à T7 ;
+- LOT-D1 à LOT-D5 ;
+- push ;
+- PR ;
+- merge sans gates distinctes.
+
+---
+
+**FINOPS TECHNICAL LOT T1 — CONSOLIDATED DECISIONS APPLIED DOCUMENTARILY — DELIVERY NOT AUTHORIZED — MONEY DEFERRED TO T2 — FIND-03 OPEN**
diff --git a/projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md b/projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
new file mode 100644
index 0000000..3adc547
--- /dev/null
+++ b/projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
@@ -0,0 +1,818 @@
+# 137 — FinOps Technical Lot T1 — Execution Record (Local PostgreSQL + CI-A)
+
+## 1. Statut et anti-claims
+
+**T1 IMPLEMENTED LOCALLY**
+
+**VALIDATION CORRECTIONS APPLIED**
+
+**LOCAL POSTGRES VALIDATED**
+
+**CI-A CONFIGURED LOCALLY**
+
+**NOT COMMITTED**
+
+**NOT PUSHED**
+
+**NO PR**
+
+**NO NEON**
+
+**NO OPENAI PROVIDER-REAL**
+
+**NO CODE COMMITTED TO ORIGIN**
+
+**NO REAL CREDENTIAL RECEIVED OR DISPLAYED**
+
+**T2 TO T7 NOT AUTHORIZED**
+
+**LOT-D1 TO LOT-D5 NOT AUTHORIZED**
+
+**FIND-03 REMAINS OPEN**
+
+**MONEY NOT IMPLEMENTED**
+
+## 2. GO exact et horodatage
+
+```text
+GO DELIVERY SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+IMPLEMENT FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
+USING MORRIS-ARBITRATED EXECUTION PACK —
+LOCAL POSTGRES AND CI-A ONLY —
+NO NEON INTEGRATION —
+NO OPENAI PROVIDER-REAL VALIDATION
+```
+
+| Événement | Horodatage |
+|---|---|
+| GO Morris | 2026-08-07 00:05 CEST (+0200) / 2026-08-06 22:05 UTC (secondes exactes non inventées) |
+| Travail Cursor | 2026-08-07 00:36:27 CEST (+0200) / 2026-08-06 22:36:27 UTC |
+
+## 3. Git Truth
+
+### Initiale
+
+```text
+date_cest=2026-08-07 00:15:47 CEST (+0200)
+date_utc=2026-08-06 22:15:47 UTC
+pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
+toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
+=== remotes ===
+origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
+origin	https://github.com/mcleland147/sfia-workspace.git (push)
+branch=implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack
+HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
+upstream=fatal: no upstream configured for branch 'implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack'
+=== status short ===
+?? .tmp-sfia-review/
+?? projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
+?? projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
+=== diff ===
+=== cached ===
+=== others ===
+.tmp-sfia-review/chatgpt-review.md
+.tmp-sfia-review/t1-decisions-applied/git-truth-final.txt
+.tmp-sfia-review/t1-decisions-applied/git-truth-initial.txt
+.tmp-sfia-review/t1-decisions-applied/handoff-blob.txt
+.tmp-sfia-review/t1-decisions-applied/handoff-dry-run.txt
+.tmp-sfia-review/t1-decisions-applied/handoff-publish.txt
+.tmp-sfia-review/t1-decisions-applied/handoff-remote-reread.md
+.tmp-sfia-review/t1-decisions-applied/handoff-tip.txt
+.tmp-sfia-review/t1-decisions-applied/hash135-before.txt
+.tmp-sfia-review/t1-decisions-applied/work-cest.txt
+.tmp-sfia-review/t1-decisions-applied/work-utc.txt
+.tmp-sfia-review/t1-delivery/git-truth-initial.txt
+.tmp-sfia-review/t1-execution-pack/work-date-cest.txt
+.tmp-sfia-review/t1-execution-pack/work-date-utc.txt
+projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
+projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
+=== worktree list (truncated) ===
+/Users/morris/Projects/sfia-workspace                                                                                                    0cdf57a [delivery/flex-office-demo-option-a]
+/Users/morris/Projects/sfia-codex-pilot                                                                                                  ec7f397 [method/codex-operating-model-pilot]
+/Users/morris/Projects/sfia-task-tracker                                                                                                 b763a31 [cadrage/task-tracker-light]
+/Users/morris/Projects/sfia-workspace-a5-2-framing                                                                                       bd3608c [framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity]
+/Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts                                                                          cae8415 [method/sfia-cycle-knowledge-contracts]
+/Users/morris/Projects/sfia-workspace-d1-conversational-convergence                                                                      7dc6f9f [ux/sfia-studio-d1-conversational-convergence]
+/Users/morris/Projects/sfia-workspace-d1-platform-integration                                                                            c2d39a7 [delivery/sfia-studio-d1-shared-platform-integration]
+/Users/morris/Projects/sfia-workspace-doc32-post-p3-m1                                                                                   dd2a68c [docs/sfia-studio-doc32-post-p3-m1-correction]
+/Users/morris/Projects/sfia-workspace-docs-recover                                                                                       1a2fa31 [docs/sfia-studio-recover-unmerged-project-docs]
+/Users/morris/Projects/sfia-workspace-fa6-mitigated-clean                                                                                67f140a [docs/sfia-studio-fa6-mitigated-from-main]
+/Users/morris/Projects/sfia-workspace-framing-next-increment                                                                             88fa465 [framing/sfia-studio-next-product-increment]
+/Users/morris/Projects/sfia-workspace-m1-bypass-probe                                                                                    f0f0e0f [qa/sfia-studio-m1-bypass-probe]
+/Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert                                                                             b502c00 [qa/sfia-studio-m1-bypass-probe-revert]
+/Users/morris/Projects/sfia-workspace-m1-capitalization                                                                                  fa0eebe [docs/sfia-studio-m1-capitalization-rex]
+/Users/morris/Projects/sfia-workspace-option-a-after-t-a6                                                                                aef7fd6 [framing/sfia-studio-v3-native-option-a-after-t-a6]
+/Users/morris/Projects/sfia-workspace-option-a-ci-governance                                                                             2f95605 [delivery/sfia-studio-v3-native-option-a-ci-merge-governance]
+/Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs                                                                        a42a85c [docs/sfia-studio-option-a-ci-governance-post-merge]
+/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check                                                                 9f03916 [delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation]
+/Users/morris/Projects/sfia-workspace-review-handoff-publisher                                                                           14d58fe [tooling/review-handoff-canonical-publisher]
+/Users/morris/Projects/sfia-workspace-shared-platform-delivery                                                                           08c282a [delivery/sfia-studio-shared-technical-platform]
+=== branch list delivery ===
+  docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing
+* implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack
+=== ls-remote ===
+0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
+cec7d15c782ecd59e0a37de5f6a594ff252035ed	refs/heads/sfia/review-handoff
+```
+
+### Finale
+
+```text
+date_cest=2026-08-07 00:36:27 CEST (+0200)
+date_utc=2026-08-06 22:36:27 UTC
+pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
+toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
+branch=delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a
+HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
+upstream=NONE
+ M .github/workflows/sfia-studio-ci.yml
+ M projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
+ M projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
+ M projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
+ M projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
+ M projects/sfia-studio/app/package-lock.json
+ M projects/sfia-studio/app/package.json
+?? .tmp-sfia-review/
+?? projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
+?? projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
+?? projects/sfia-studio/app/__tests__/oa/finops/postgres/
+?? projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
+?? projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
+?? projects/sfia-studio/app/db/
+?? projects/sfia-studio/app/lib/oa/finops/application/
+?? projects/sfia-studio/app/lib/oa/finops/infrastructure/
+?? projects/sfia-studio/app/lib/oa/finops/ports/
+=== ls-remote main/handoff ===
+0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
+cec7d15c782ecd59e0a37de5f6a594ff252035ed	refs/heads/sfia/review-handoff
+```
+
+## 4. Sources consultées
+
+- template `prompts/templates/sfia-cycle-execution-template.md` (blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`)
+- routing guide / operating model SFIA v2.6
+- CKC Delivery : absent détaillé → fallback carte synthétique (matrice §8)
+- documents 103, 123, 125, 126–134 (read-only)
+- documents 135 et 136 (préservés byte-identical)
+- handoff entrant tip `cec7d15c782ecd59e0a37de5f6a594ff252035ed` / blob `1842731c077e4e2efac414b1fe5562fc0dbf2370`
+- `package.json` / lock, workflow CI, FinOps T0, `coordinateExecutionRun`, adapter AI, composition D2D3
+
+## 5. Documents 135 / 136
+
+| Doc | Lignes | Octets | SHA-256 | Statut |
+|---|---|---|---|---|
+| 135 | 548 | 23328 | `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe` | byte-identical préservé |
+| 136 | 473 | 16953 | `b2c4c258bc6b6a13d8a88c19a88b52178a4576e4b2c7606f8ba736df6b0cec61` | byte-identical préservé |
+
+## 6. Branche Delivery
+
+`delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a`
+
+- HEAD base : `0cdf57a12843891da8b8db2d550cb38c7ba9f60a`
+- Upstream : **aucun**
+- Push : **aucun**
+
+## 7. Manifest réel des fichiers
+
+- CREATED `projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md` (23328 bytes)
+- CREATED `projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md` (16953 bytes)
+- CREATED `projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js` (3602 bytes)
+- CREATED `projects/sfia-studio/app/lib/oa/finops/application/types.ts` (2808 bytes)
+- CREATED `projects/sfia-studio/app/lib/oa/finops/application/identity.ts` (1727 bytes)
+- CREATED `projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts` (4650 bytes)
+- CREATED `projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts` (2725 bytes)
+- CREATED `projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts` (1101 bytes)
+- CREATED `projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts` (537 bytes)
+- CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts` (1200 bytes)
+- CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts` (5782 bytes)
+- CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts` (1796 bytes)
+- CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/openai/mapProviderUsage.ts` (1637 bytes)
+- CREATED `projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts` (6188 bytes)
+- CREATED `projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts` (4159 bytes)
+- CREATED `projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts` (8390 bytes)
+- MODIFIED `.github/workflows/sfia-studio-ci.yml`
+- MODIFIED `projects/sfia-studio/app/package.json`
+- MODIFIED `projects/sfia-studio/app/package-lock.json`
+- MODIFIED `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
+- MODIFIED `projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts`
+- MODIFIED `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts`
+- MODIFIED `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts`
+- CREATED `projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md` (this document)
+
+Diffstat :
+
+```text
+.github/workflows/sfia-studio-ci.yml               |  24 +
+ .../application/coordinateExecutionRun.ts          | 143 +++++-
+ .../app/lib/oa/execution-run/domain/types.ts       |  13 +-
+ .../ai/platformAiExecutionAdapter.ts               |  10 +-
+ .../server/composeExecutionRunD2D3.ts              |   2 +
+ projects/sfia-studio/app/package-lock.json         | 499 ++++++++++++++++++++-
+ projects/sfia-studio/app/package.json              |   8 +-
+ 7 files changed, 692 insertions(+), 7 deletions(-)
+```
+
+## 8. Versions exactes installées
+
+| Package | Range déclaré | Version résolue |
+|---|---|---|
+| `pg` | `~8.22.0` | **8.22.0** |
+| `node-pg-migrate` | `^8.0.4` (ligne 8) | **8.0.4** |
+| `@types/pg` | `^8.20.4` | **8.20.4** |
+
+Node local : v24.16.0 · npm 11.13.0
+
+Scripts ajoutés : `migrate:up`, `migrate:down`, `test:db`
+
+## 9. Architecture implémentée
+
+```text
+AI provider success
+  → UsageSummary (+ model / providerResponseId / totalTokens optionnels)
+  → coordinateExecutionRun (injecte FinOpsCapturePort optionnel)
+  → createFinOpsCaptureService (writer unique)
+  → buildUsageEvent + identity SHA-256
+  → PostgresFinOpsUsageLedger (INSERT … ON CONFLICT, transaction)
+  → finops_usage_event (append-only)
+```
+
+Lane AI uniquement. Git/Cursor/none → `not_attempted`.
+
+## 10. Frontière de capture
+
+- Port : `FinOpsCapturePort.captureUsage`
+- Service : `createFinOpsCaptureService`
+- Aucun SQL dans le coordinateur
+- Aucun accès DB depuis le domaine T0
+- Composition D2D3 accepte `finops?` optionnel ; absent ⇒ `disabled`
+
+## 11. Schéma PostgreSQL exact
+
+Table `finops_usage_event` :
+
+- `event_id` text PK
+- `dedup_key` text UNIQUE
+- `project_id`, `execution_run_id` text
+- `correlation_id` text nullable
+- `provider` text · `model` text nullable
+- `occurred_at` timestamptz · `period_start` date
+- `source_of_truth` · `evidence_class` text + CHECK T0
+- `input_tokens` / `output_tokens` / `total_tokens` bigint nullable ≥ 0
+- `provider_request_id` · `correction_ref` nullable
+- `usage_status` IN (validated, unavailable, invalid)
+- `created_at` timestamptz
+
+**Colonnes absentes :** cost, cost_minor, cost_numeric, amount, price, currency, currency_code.
+
+Triggers append-only bloquent UPDATE/DELETE.
+
+## 12. Identité et idempotence
+
+- Contrat `t1-v1`
+- Matériau : `version|projectId|executionRunId|provider|providerRequestId||correlationId`
+- SHA-256 → `evt_<hex>` / `dedup_<hex>`
+- INSERT ON CONFLICT DO NOTHING + relecture fingerprint
+- Concurrence : un `created`, les autres `duplicate`
+- Conflit fingerprint divergent → `FINOPS_DEDUP_CONFLICT`
+
+## 13. Sémantique fail-open
+
+Succès fournisseur conservé même si FinOps échoue.
+
+Diagnostic `finopsCapture` : `not_attempted` | `disabled` | `created` | `duplicate` | `failed`.
+
+Erreur FinOps séparée, sanitized, `technicalDetailsRedacted: true`.
+
+## 14. Audit minimal T1
+
+Événements : `finops_capture_created` · `finops_capture_duplicate` · `finops_capture_failed`.
+
+Ce n’est **pas** l’observabilité durable T6.
+
+## 15. Migration up/down
+
+Fichier : `projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js`
+
+Validé localement :
+
+1. migrate up — OK
+2. migrate down (table vide) — OK
+3. migrate up — OK
+
+Down refuse le drop si des lignes existent.
+
+Contenu migration :
+
+```javascript
+/**
+ * Migration: FinOps T1 usage ledger (append-only, no Money columns).
+ *
+ * @type {import('node-pg-migrate').MigrationBuilder}
+ */
+
+/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
+exports.up = (pgm) => {
+  pgm.createTable("finops_usage_event", {
+    event_id: { type: "text", primaryKey: true, notNull: true },
+    dedup_key: { type: "text", notNull: true },
+    project_id: { type: "text", notNull: true },
+    execution_run_id: { type: "text", notNull: true },
+    correlation_id: { type: "text" },
+    provider: { type: "text", notNull: true },
+    model: { type: "text" },
+    occurred_at: { type: "timestamptz", notNull: true },
+    period_start: { type: "date", notNull: true },
+    source_of_truth: { type: "text", notNull: true },
+    evidence_class: { type: "text", notNull: true },
+    input_tokens: { type: "bigint" },
+    output_tokens: { type: "bigint" },
+    total_tokens: { type: "bigint" },
+    provider_request_id: { type: "text" },
+    correction_ref: { type: "text" },
+    usage_status: { type: "text", notNull: true },
+    created_at: {
+      type: "timestamptz",
+      notNull: true,
+      default: pgm.func("NOW()"),
+    },
+  });
+
+  pgm.addConstraint("finops_usage_event", "finops_usage_event_dedup_key_key", {
+    unique: ["dedup_key"],
+  });
+
+  pgm.addConstraint("finops_usage_event", "finops_usage_event_tokens_nonneg", {
+    check:
+      "(input_tokens IS NULL OR input_tokens >= 0) AND (output_tokens IS NULL OR output_tokens >= 0) AND (total_tokens IS NULL OR total_tokens >= 0)",
+  });
+
+  pgm.addConstraint("finops_usage_event", "finops_usage_event_usage_status_chk", {
+    check: "usage_status IN ('validated', 'unavailable', 'invalid')",
+  });
+
+  pgm.addConstraint(
+    "finops_usage_event",
+    "finops_usage_event_source_of_truth_chk",
+    {
+      check:
+        "source_of_truth IN ('BILLED', 'PROVIDER_OBSERVED', 'API_USAGE', 'LOCAL_COUNT', 'PARAMETRIC_ESTIMATE', 'UNKNOWN')",
+    },
+  );
+
+  pgm.addConstraint(
+    "finops_usage_event",
+    "finops_usage_event_evidence_class_chk",
+    {
+      check: "evidence_class IN ('estimated', 'observed', 'billed', 'unknown')",
+    },
+  );
+
+  pgm.addConstraint("finops_usage_event", "finops_usage_event_period_start_chk", {
+    check: "period_start = date_trunc('month', period_start::timestamp)::date",
+  });
+
+  // Append-only guard: block UPDATE/DELETE of business rows.
+  pgm.sql(`
+CREATE OR REPLACE FUNCTION finops_usage_event_append_only()
+RETURNS trigger
+LANGUAGE plpgsql
+AS $$
+BEGIN
+  RAISE EXCEPTION 'finops_usage_event is append-only';
+END;
+$$;
+`);
+
+  pgm.sql(`
+CREATE TRIGGER trg_finops_usage_event_no_update
+BEFORE UPDATE ON finops_usage_event
+FOR EACH ROW
+EXECUTE FUNCTION finops_usage_event_append_only();
+`);
+
+  pgm.sql(`
+CREATE TRIGGER trg_finops_usage_event_no_delete
+BEFORE DELETE ON finops_usage_event
+FOR EACH ROW
+EXECUTE FUNCTION finops_usage_event_append_only();
+`);
+};
+
+/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
+exports.down = (pgm) => {
+  // Fail closed if ledger contains events — preserve data by default.
+  pgm.sql(`
+DO $$
+DECLARE
+  event_count bigint;
+BEGIN
+  SELECT COUNT(*) INTO event_count FROM finops_usage_event;
+  IF event_count > 0 THEN
+    RAISE EXCEPTION 'Refusing to drop finops_usage_event: % row(s) present', event_count;
+  END IF;
+END $$;
+`);
+
+  pgm.sql(`DROP TRIGGER IF EXISTS trg_finops_usage_event_no_delete ON finops_usage_event;`);
+  pgm.sql(`DROP TRIGGER IF EXISTS trg_finops_usage_event_no_update ON finops_usage_event;`);
+  pgm.sql(`DROP FUNCTION IF EXISTS finops_usage_event_append_only();`);
+  pgm.dropTable("finops_usage_event");
+};
+
+```
+
+## 16. Configuration PostgreSQL locale
+
+- Docker image test : `postgres:16-alpine` (banc T1, **pas** une décision Neon)
+- Conteneur éphémère `sfia-finops-t1-pg`
+- Port local `55432`
+- Base `sfia_studio_finops_t1`
+- Identifiants locaux jetables (non Neon ; non publiés comme secrets)
+- Variables distinctes `DATABASE_URL` (runtime) et `DATABASE_URL_DIRECT` (migrations) — même instance locale
+
+## 17. Modification CI-A exacte
+
+Fichier unique : `.github/workflows/sfia-studio-ci.yml`
+
+Ajouts sous job `validate` uniquement :
+
+- `services.postgres` (`postgres:16-alpine` + healthcheck)
+- env locales non secrètes `DATABASE_URL` / `DATABASE_URL_DIRECT` *(Delivery initiale — **corrigé T1-VAL-06 §29** : plus au niveau job ; injectées uniquement sur migrate / `test:db`)*
+- étapes `migrate:up` puis `test:db`
+
+Préservés : detect, npm ci, typecheck, lint, build, unit tests, governance, secret scan, whitespace, Required Gate, permissions, timeouts, concurrency.
+
+Diff CI (Delivery initiale — **avant** correction d’ordonnancement T1-VAL-06) :
+
+```diff
+diff --git a/.github/workflows/sfia-studio-ci.yml b/.github/workflows/sfia-studio-ci.yml
+index 801a875..b1670c3 100644
+--- a/.github/workflows/sfia-studio-ci.yml
++++ b/.github/workflows/sfia-studio-ci.yml
+@@ -122,6 +122,24 @@ jobs:
+       run:
+         shell: bash
+         working-directory: projects/sfia-studio/app
++    services:
++      postgres:
++        image: postgres:16-alpine
++        env:
++          POSTGRES_USER: sfia_ci
++          POSTGRES_PASSWORD: sfia_ci_local_only
++          POSTGRES_DB: sfia_studio_finops_t1
++        ports:
++          - 5432:5432
++        options: >-
++          --health-cmd "pg_isready -U sfia_ci -d sfia_studio_finops_t1"
++          --health-interval 5s
++          --health-timeout 5s
++          --health-retries 10
++    env:
++      # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
++      DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
++      DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+     steps:
+       - name: Checkout
+         uses: actions/checkout@v4
+@@ -150,6 +168,12 @@ jobs:
+       - name: Unit tests (Vitest)
+         run: npm test
+
++      - name: FinOps T1 migrate up (CI-A)
++        run: npm run migrate:up
++
++      - name: FinOps T1 PostgreSQL integration tests (CI-A)
++        run: npm run test:db
++
+       - name: Modeled governance tests
+         working-directory: projects/sfia-studio
+         run: |
+
+```
+
+## 18. Tests et résultats
+
+| Suite | Résultat |
+|---|---|
+| FinOps unit + intégration PG | **77 passed** |
+| test:db | **8 passed** |
+| execution-run (dont F07) | **passed** |
+| typecheck | **passed** |
+| lint | **passed** |
+| build | **passed** |
+| governance modeled | **passed** |
+| Full unit suite (`vitest --no-file-parallelism`) | **1385 passed** · 8 skipped (PG sans env) |
+| Full unit parallèle | flaky hors T1 (UI timeouts) — non lié FinOps ; passe isolé et en série |
+
+Baseline note : flake UI préexistant sous charge concurrente.
+
+## 19. Sécurité / RGPD
+
+- SQL paramétré
+- erreurs sanitized
+- pas de payload OpenAI brut
+- minimisation des champs ledger
+- aucun secret Neon/OpenAI
+- scan ciblé : pas de credential réel dans artefacts T1
+
+## 20. Performance / GreenOps
+
+- pool borné (max 5)
+- timeouts connexion
+- Postgres éphémère sans volume
+- CI-A isolée par run
+
+## 21. Réserves
+
+- FIND-03 Money OPEN → T2
+- FIND-07 NOTE
+- R-TECH-TTL-01 KEEP-OPEN
+- R-TECH-FINOPS-HARD-01 KEEP-OPEN
+- recalibration 15/20/25/30 USD required
+- TB-04-04 NOT DONE
+- TB-02-05 PRESERVED
+- LOT-D1 NOT-CONSUMED
+- aucun contrôle FinOps actif (pas d’enforcement)
+
+## 22. Limitations
+
+- Neon non intégré
+- OpenAI provider-real non validé
+- Money absent
+- retry durable / reconciliation hors T1
+- composition D2D3 n’active pas FinOps par défaut (injection explicite)
+- image PG 16 = banc de test, pas version Neon figée
+
+## 23. Absence Neon / OpenAI réel
+
+**NO NEON INTEGRATION**
+
+**NO OPENAI PROVIDER-REAL VALIDATION**
+
+## 24. Absence credential
+
+Aucun credential réel demandé, lu ou affiché.
+
+Identifiants locaux/CI jetables uniquement.
+
+## 25. Absence commit / push
+
+Aucun `git add` / `git commit` / `git push` projet.
+
+Aucun PR.
+
+## 26. Verdict
+
+FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE IMPLEMENTED LOCALLY —
+DOCUMENT 135 PRESERVED BYTE-IDENTICAL —
+DOCUMENT 136 PRESERVED BYTE-IDENTICAL —
+DOCUMENT 137 CREATED WITH COMPLETE EXECUTION RECORD —
+PG 8.22.0 INSTALLED —
+NODE-PG-MIGRATE 8.0.4 INSTALLED —
+POSTGRESQL LOCAL EPHEMERAL INSTANCE VALIDATED —
+CI-A POSTGRES SERVICE CONTAINER CONFIGURED LOCALLY —
+T1 USAGE LEDGER CREATED WITHOUT COST OR CURRENCY —
+APPEND-ONLY CONTRACT IMPLEMENTED —
+POST-PROVIDER CAPTURE BOUNDARY IMPLEMENTED —
+SINGLE AUTHORITATIVE WRITER IMPLEMENTED —
+DETERMINISTIC EVENT ID IMPLEMENTED —
+DETERMINISTIC DEDUP KEY IMPLEMENTED —
+TRANSACTIONAL IDEMPOTENCE IMPLEMENTED —
+CONCURRENT DUPLICATE HANDLING VALIDATED —
+MULTI-INSTANCE AND RESTART-SAFE BEHAVIOR VALIDATED —
+FAIL-OPEN USER RUN SEMANTICS IMPLEMENTED —
+SEPARATE SANITIZED FINOPS ERROR IMPLEMENTED —
+MINIMAL AUDIT EVENT IMPLEMENTED —
+MIGRATION UP VALIDATED —
+MIGRATION DOWN ON EMPTY DATABASE VALIDATED —
+UNIT TESTS PASSED —
+POSTGRESQL INTEGRATION TESTS PASSED —
+TYPECHECK PASSED —
+LINT PASSED —
+FULL UNIT SUITE PASSED —
+BUILD PASSED —
+MODELED GOVERNANCE TESTS PASSED —
+SECRET SCAN PASSED —
+TRAILING WHITESPACE CHECK PASSED —
+NO MONEY OR CURRENCY IMPLEMENTED —
+FIND-03 REMAINS OPEN FOR T2 —
+NO NEON INTEGRATION —
+NO OPENAI PROVIDER-REAL VALIDATION —
+NO REAL CREDENTIAL REQUESTED OR DISPLAYED —
+NO OTHER WORKFLOW MODIFIED —
+NO PROJECT COMMIT OR PUSH —
+NO PR CREATED —
+DOCUMENT 103 UNCHANGED —
+FIND-07 NOTE PRESERVED —
+R-TECH-TTL-01 KEEP-OPEN —
+R-TECH-FINOPS-HARD-01 KEEP-OPEN —
+TB-04-04 NOT DONE —
+TB-02-05 PRESERVED —
+T2 TO T7 NOT AUTHORIZED —
+LOT-D1 TO LOT-D5 NOT AUTHORIZED —
+LOT-D1 DELIVERY NOT-CONSUMED —
+READY FOR CHATGPT DELIVERY VALIDATION —
+NOT YET AUTHORIZED FOR GIT PUBLICATION OR PR
+
+## 27. Prochaine gate candidate
+
+```text
+GO PUBLICATION PREPARATION SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
+LOCAL CI-A PACKAGE —
+AFTER CHATGPT DELIVERY VALIDATION —
+NO PUSH UNTIL EXPLICIT GO —
+NO PR UNTIL EXPLICIT GO
+```
+
+Candidate uniquement — non consommée.
+
+---
+
+## 28. ChatGPT Delivery Validation Corrections
+
+Horodatage correction Cursor : 2026-08-07 03:22:26 CEST (+0200) / 2026-08-07 01:22:26 UTC
+
+Ce cycle corrige et revalide la Delivery T1 locale **sans** nouveau périmètre fonctionnel, **sans** commit/push/PR projet, **sans** Neon, **sans** OpenAI réel, **sans** Money.
+
+### Findings
+
+| ID | Sévérité | Statut | Correction |
+|---|---|---|---|
+| T1-VAL-01 | BLOCKING | **CLOSED** | Codes Node `ECONNREFUSED`, `ECONNRESET`, `ETIMEDOUT`, `ENOTFOUND`, `EHOSTUNREACH`, `ENETUNREACH`, `EPIPE` → `FINOPS_DB_UNAVAILABLE` / `retryable=true` ; SQLSTATE transitoires préservés |
+| T1-VAL-02 | BLOCKING | **CLOSED** | `Number.isSafeInteger` ; somme input+output bornée ; helper `readPgTokenField` ; migration `<= 9007199254740991` |
+| T1-VAL-03 | MAJOR | **CLOSED** | `safeEmit` isole les exceptions d’audit ; `buildUsageEvent` protégé ; `occurredAt` invalide → `FINOPS_VALIDATION_FAILED` |
+| T1-VAL-04 | NOTE | **CLOSED** | `ssl` explicite (`PoolConfig.ssl`) ; défaut local/CI-A `false` ; Neon SSL différé ; `statementTimeoutMillis` validé + `set_config` paramétré |
+| T1-VAL-05 | NOTE | **CLOSED** | `mapProviderUsage.ts` **supprimé** (unused) ; `PlatformAiExecutionAdapter` reste autoritatif |
+| T1-VAL-06 | BLOCKING | **CLOSED** | Env DB retirée du job `validate` ; injectée uniquement sur migrate + `test:db` ; `npm test` sans env DB → PG skipped |
+
+### Fichiers touchés par la correction
+
+- `sanitizeDbError.ts` — Node transient codes
+- `readPgToken.ts` — lecture PG safe-integer (nouveau)
+- `safeTokens.ts` — validation application (nouveau)
+- `buildUsageEvent.ts` — safe integer + try/catch structure
+- `captureFinOpsUsage.ts` — `safeEmit` + isolation audit
+- `createFinOpsPool.ts` — SSL explicite + timeout paramétré
+- `postgresFinOpsUsageLedger.ts` — `readPgTokenField` pour fingerprint
+- migration T1 — contrainte upper bound safe integer
+- tests unitaires / intégration / fail-open enrichis
+- **suppression** `infrastructure/openai/mapProviderUsage.ts`
+
+### Versions inchangées
+
+pg **8.22.0** · node-pg-migrate **8.0.4** · @types/pg **8.20.4**
+
+### Résultats avant / après
+
+| Contrôle | Avant (Delivery initiale) | Après corrections |
+|---|---|---|
+| Erreurs réseau Node | non classées retryable | `FINOPS_DB_UNAVAILABLE` retryable |
+| Safe integer | `Number.isInteger` seulement | `isSafeInteger` + borne PG + helper lecture |
+| Audit throw | pouvait requalifier le résultat | isolé via `safeEmit` |
+| SSL | `ssl: false` figé non configurable | option explicite ; défaut local false |
+| Mapper openai FinOps | fichier mort + tests dédiés | **supprimé** |
+| FinOps tests | 77 | **92 passed** |
+| test:db | 8 | **10 passed** |
+| Full suite serial | 1385 passed | **1398 passed** / 10 skipped |
+| typecheck / lint / build / governance | passed | **passed** |
+
+### Migration
+
+up → down (données présentes = refus) → truncate test → down empty → up final : **OK**
+
+### Anti-claims correction
+
+- NO NEON
+- NO OPENAI PROVIDER-REAL
+- NO REAL CREDENTIAL
+- NO MONEY / CURRENCY COLUMNS
+- NO PROJECT COMMIT OR PUSH
+- NO PR
+- DOCUMENT 135 / 136 BYTE-IDENTICAL PRESERVED
+
+### Verdict correction
+
+FINOPS TECHNICAL LOT T1 DELIVERY VALIDATION CORRECTIONS COMPLETED —
+T1-VAL-01 CLOSED —
+T1-VAL-02 CLOSED —
+T1-VAL-03 CLOSED —
+T1-VAL-04 CLOSED —
+T1-VAL-05 CLOSED —
+READY FOR CHATGPT REVALIDATION —
+NOT AUTHORIZED FOR PUBLICATION
+
+**T1 LOCAL CI-A DELIVERY COMPLETE DOCUMENTARILY AND TECHNICALLY — NOT PUBLISHED**
+
+---
+
+## 29. T1-VAL-06 — CI-A Database Ordering Correction
+
+| Champ | Valeur |
+|---|---|
+| **Finding** | T1-VAL-06 — BLOCKING |
+| **Statut** | **CLOSED** |
+| **Horodatage Cursor** | 2026-08-07 05:01–05:10 CEST (+0200) / 2026-08-07 03:01–03:10 UTC |
+| **Fichier unique workflow** | `.github/workflows/sfia-studio-ci.yml` |
+| **Doc exécution** | ce document 137 (section ajoutée) |
+| **Docs 135 / 136** | **préservés byte-identical** (`fcdea54f…` / `b2c4c258…`) |
+
+### Cause
+
+Le job `validate` exposait `DATABASE_URL` et `DATABASE_URL_DIRECT` au niveau **job**. L’étape `npm test` héritait donc de ces variables **avant** `migrate:up`. Les 10 tests d’intégration PostgreSQL détectaient `DATABASE_URL`, devenaient actifs, et pouvaient exercer le schéma **avant migration**.
+
+### Workflow avant (Delivery T1 locale — ordre incorrect)
+
+- `services.postgres` au niveau job (conservé)
+- `env` job : `DATABASE_URL` + `DATABASE_URL_DIRECT` (jetables CI-A)
+- Séquence : … → `npm test` (**avec** env DB) → `migrate:up` → `test:db`
+
+### Workflow après (correction T1-VAL-06)
+
+- `services.postgres` conservé au niveau job
+- **Aucun** `DATABASE_URL` / `DATABASE_URL_DIRECT` au niveau job
+- Étape `Unit tests (Vitest)` : **sans** env DB
+- Étape `FinOps T1 migrate up (CI-A)` : `DATABASE_URL_DIRECT` uniquement
+- Étape `FinOps T1 PostgreSQL integration tests (CI-A)` : `DATABASE_URL` (+ `DATABASE_URL_DIRECT`)
+- Gates suivantes inchangées (governance, secret scan, whitespace, Required Gate)
+
+### Diff borné T1-VAL-06 (env job → env steps)
+
+```diff
+--- a/.github/workflows/sfia-studio-ci.yml
++++ b/.github/workflows/sfia-studio-ci.yml
+@@
+-    env:
+-      # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
+-      DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+-      DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+     steps:
+@@
+       - name: Unit tests (Vitest)
++        # DB connection env intentionally absent at this step:
++        # PostgreSQL integration tests must stay skipped until after migrate.
+         run: npm test
+
+       - name: FinOps T1 migrate up (CI-A)
++        env:
++          # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
++          DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+         run: npm run migrate:up
+
+       - name: FinOps T1 PostgreSQL integration tests (CI-A)
++        env:
++          # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
++          DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
++          DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+         run: npm run test:db
+```
+
+### Séparation env unit / migration / DB tests
+
+| Étape | `DATABASE_URL` | `DATABASE_URL_DIRECT` | Attendu |
+|---|---|---|---|
+| `npm test` | absent | absent | suite unitaire ; PG **skipped** |
+| `migrate:up` | absent | présent (CI jetable) | migration OK |
+| `test:db` | présent | présent | **10** tests PG passed sur schéma migré |
+
+### Résultats exacts (Postgres Docker local jetable — port 55432 — non Neon)
+
+| Contrôle | Commande / condition | Résultat |
+|---|---|---|
+| A — unit sans DB env | `unset DATABASE_URL DATABASE_URL_DIRECT` ; `npm test` | **138 passed / 1 skipped** · **1398 passed / 10 skipped** · fichier PG `10 skipped` |
+| B — migrate | `DATABASE_URL_DIRECT` seule (URL locale jetable) ; `npm run migrate:up` | **Migrations complete!** exit 0 |
+| C — DB tests | `DATABASE_URL` (+ DIRECT) ; `npm run test:db` | **10 passed** |
+| D — typecheck | `npm run typecheck` | exit 0 |
+| D — lint | `npm run lint` | exit 0 |
+| D — build | `npm run build` | exit 0 |
+| D — governance | modeled node --test (73) | exit 0 |
+| D — `git diff --check` | workflow + 137 | clean |
+| D — secret / Neon / OpenAI | scan workflow + 137 | aucun Neon / OpenAI key / credential réel |
+
+### Absence de changement fonctionnel
+
+Aucun fichier code FinOps / migration / package modifié dans ce cycle. Correction **uniquement** d’ordonnancement CI-A + documentation 137.
+
+### Anti-claims
+
+- NO NEON
+- NO OPENAI PROVIDER-REAL
+- NO REAL CREDENTIAL
+- NO MONEY
+- NO PROJECT COMMIT OR PUSH
+- NO PR
+- NO T2–T7
+- DOCUMENT 135 / 136 BYTE-IDENTICAL PRESERVED
+- T1-VAL-01 … T1-VAL-05 REMAIN CLOSED
+
+### Verdict section
+
+T1-VAL-06 CLOSED —
+UNIT SUITE RUNS WITHOUT DATABASE ENVIRONMENT —
+POSTGRES TESTS SKIPPED DURING GENERIC UNIT STEP —
+MIGRATION RUNS BEFORE DATABASE INTEGRATION TESTS —
+DATABASE TESTS RUN ONLY AFTER MIGRATION —
+READY FOR FINAL CHATGPT DELIVERY REVALIDATION —
+NOT AUTHORIZED FOR PUBLICATION
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts
new file mode 100644
index 0000000..59af5c7
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts
@@ -0,0 +1,285 @@
+/**
+ * @vitest-environment node
+ *
+ * Requires DATABASE_URL (and preferably DATABASE_URL_DIRECT) pointing at an
+ * ephemeral local/CI Postgres — never Neon.
+ */
+import { afterAll, beforeAll, describe, expect, it } from "vitest";
+import { createFinOpsPool, closeFinOpsPool } from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
+import { createPostgresFinOpsUsageLedger } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger";
+import { buildUsageEvent } from "@/lib/oa/finops/application/buildUsageEvent";
+import type { Pool } from "pg";
+
+const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
+const describeDb = DATABASE_URL ? describe : describe.skip;
+
+describeDb("FinOps T1 PostgreSQL integration", () => {
+  let pool: Pool;
+
+  beforeAll(() => {
+    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
+  });
+
+  afterAll(async () => {
+    await closeFinOpsPool(pool);
+  });
+
+  it("has finops_usage_event table and constraints without money columns", async () => {
+    const cols = await pool.query<{ column_name: string }>(
+      `SELECT column_name FROM information_schema.columns
+       WHERE table_name = 'finops_usage_event'
+       ORDER BY column_name`,
+    );
+    const names = cols.rows.map((r) => r.column_name);
+    expect(names).toContain("event_id");
+    expect(names).toContain("dedup_key");
+    expect(names).not.toContain("cost");
+    expect(names).not.toContain("cost_minor");
+    expect(names).not.toContain("cost_numeric");
+    expect(names).not.toContain("currency");
+    expect(names).not.toContain("currency_code");
+  });
+
+  it("inserts created then duplicate for identical event", async () => {
+    const ledger = createPostgresFinOpsUsageLedger(pool);
+    const built = buildUsageEvent({
+      projectId: "proj-db",
+      executionRunId: `run-${Date.now()}-a`,
+      correlationId: "corr-db-a",
+      provider: "openai",
+      occurredAt: "2026-08-06T22:05:00.000Z",
+      usage: {
+        status: "validated",
+        inputTokens: 11,
+        outputTokens: 7,
+        totalTokens: 18,
+        model: "gpt-test",
+        providerResponseId: `resp-${Date.now()}-a`,
+      },
+    });
+    expect(built.ok).toBe(true);
+    if (!built.ok) return;
+    const first = await ledger.insertUsageEvent(built.event, built.fingerprint);
+    const second = await ledger.insertUsageEvent(built.event, built.fingerprint);
+    expect(first.outcome).toBe("created");
+    expect(second.outcome).toBe("duplicate");
+  });
+
+  it("handles concurrent identical inserts with one created and rest duplicate", async () => {
+    const ledger = createPostgresFinOpsUsageLedger(pool);
+    const built = buildUsageEvent({
+      projectId: "proj-db",
+      executionRunId: `run-concurrent-${Date.now()}`,
+      correlationId: "corr-concurrent",
+      provider: "openai",
+      occurredAt: "2026-08-06T22:05:00.000Z",
+      usage: {
+        status: "validated",
+        inputTokens: 1,
+        outputTokens: 1,
+        totalTokens: 2,
+        providerResponseId: `resp-concurrent-${Date.now()}`,
+      },
+    });
+    expect(built.ok).toBe(true);
+    if (!built.ok) return;
+    const results = await Promise.all(
+      Array.from({ length: 8 }, () =>
+        ledger.insertUsageEvent(built.event, built.fingerprint),
+      ),
+    );
+    const created = results.filter((r) => r.outcome === "created");
+    const duplicates = results.filter((r) => r.outcome === "duplicate");
+    expect(created.length).toBe(1);
+    expect(duplicates.length).toBe(7);
+  });
+
+  it("returns structured conflict when dedup matches but fingerprint diverges", async () => {
+    const ledger = createPostgresFinOpsUsageLedger(pool);
+    const providerResponseId = `resp-conflict-${Date.now()}`;
+    const firstBuilt = buildUsageEvent({
+      projectId: "proj-db",
+      executionRunId: `run-conflict-${Date.now()}`,
+      correlationId: "corr-conflict",
+      provider: "openai",
+      occurredAt: "2026-08-06T22:05:00.000Z",
+      usage: {
+        status: "validated",
+        inputTokens: 2,
+        outputTokens: 2,
+        totalTokens: 4,
+        providerResponseId,
+      },
+    });
+    expect(firstBuilt.ok).toBe(true);
+    if (!firstBuilt.ok) return;
+    const inserted = await ledger.insertUsageEvent(
+      firstBuilt.event,
+      firstBuilt.fingerprint,
+    );
+    expect(inserted.outcome).toBe("created");
+
+    const diverged = {
+      ...firstBuilt.event,
+      inputTokens: 99,
+      totalTokens: 101,
+    };
+    const divergedFp = {
+      ...firstBuilt.fingerprint,
+      inputTokens: 99,
+      totalTokens: 101,
+    };
+    const conflict = await ledger.insertUsageEvent(diverged, divergedFp);
+    expect(conflict.outcome).toBe("conflict");
+    if (conflict.outcome === "conflict") {
+      expect(conflict.error.code).toBe("FINOPS_DEDUP_CONFLICT");
+    }
+  });
+
+  it("rejects negative tokens via DB check", async () => {
+    await expect(
+      pool.query(
+        `INSERT INTO finops_usage_event (
+          event_id, dedup_key, project_id, execution_run_id, provider,
+          occurred_at, period_start, source_of_truth, evidence_class,
+          input_tokens, usage_status
+        ) VALUES (
+          'evt_neg', 'dedup_neg', 'p', 'r', 'openai',
+          NOW(), '2026-08-01', 'API_USAGE', 'observed',
+          -1, 'validated'
+        )`,
+      ),
+    ).rejects.toBeTruthy();
+  });
+
+  it("rejects tokens above MAX_SAFE_INTEGER via DB check", async () => {
+    await expect(
+      pool.query(
+        `INSERT INTO finops_usage_event (
+          event_id, dedup_key, project_id, execution_run_id, provider,
+          occurred_at, period_start, source_of_truth, evidence_class,
+          input_tokens, usage_status
+        ) VALUES (
+          'evt_oversafe', 'dedup_oversafe', 'p', 'r', 'openai',
+          NOW(), '2026-08-01', 'API_USAGE', 'observed',
+          9007199254740992, 'validated'
+        )`,
+      ),
+    ).rejects.toBeTruthy();
+  });
+
+  it("preserves MAX_SAFE_INTEGER in duplicate fingerprint without precision loss", async () => {
+    const ledger = createPostgresFinOpsUsageLedger(pool);
+    const built = buildUsageEvent({
+      projectId: "proj-db",
+      executionRunId: `run-safeint-${Date.now()}`,
+      correlationId: "corr-safeint",
+      provider: "openai",
+      occurredAt: "2026-08-06T22:05:00.000Z",
+      usage: {
+        status: "validated",
+        inputTokens: Number.MAX_SAFE_INTEGER,
+        outputTokens: 0,
+        totalTokens: Number.MAX_SAFE_INTEGER,
+        providerResponseId: `resp-safeint-${Date.now()}`,
+      },
+    });
+    expect(built.ok).toBe(true);
+    if (!built.ok) return;
+    const first = await ledger.insertUsageEvent(built.event, built.fingerprint);
+    const second = await ledger.insertUsageEvent(built.event, built.fingerprint);
+    expect(first.outcome).toBe("created");
+    expect(second.outcome).toBe("duplicate");
+    expect(built.fingerprint.inputTokens).toBe(Number.MAX_SAFE_INTEGER);
+  });
+
+  it("forbids UPDATE and DELETE via append-only trigger", async () => {
+    const id = `evt_immut_${Date.now()}`;
+    const dedup = `dedup_immut_${Date.now()}`;
+    await pool.query(
+      `INSERT INTO finops_usage_event (
+        event_id, dedup_key, project_id, execution_run_id, provider,
+        occurred_at, period_start, source_of_truth, evidence_class,
+        input_tokens, usage_status
+      ) VALUES (
+        $1, $2, 'p', 'r', 'openai',
+        NOW(), '2026-08-01', 'API_USAGE', 'observed',
+        1, 'validated'
+      )`,
+      [id, dedup],
+    );
+    await expect(
+      pool.query(`UPDATE finops_usage_event SET provider = 'x' WHERE event_id = $1`, [
+        id,
+      ]),
+    ).rejects.toThrow(/append-only/i);
+    await expect(
+      pool.query(`DELETE FROM finops_usage_event WHERE event_id = $1`, [id]),
+    ).rejects.toThrow(/append-only/i);
+  });
+
+  it("supports restart-safe behavior across two pools", async () => {
+    const poolB = createFinOpsPool({ connectionString: DATABASE_URL, max: 2 });
+    try {
+      const ledgerA = createPostgresFinOpsUsageLedger(pool);
+      const ledgerB = createPostgresFinOpsUsageLedger(poolB);
+      const built = buildUsageEvent({
+        projectId: "proj-db",
+        executionRunId: `run-restart-${Date.now()}`,
+        correlationId: "corr-restart",
+        provider: "openai",
+        occurredAt: "2026-08-06T22:05:00.000Z",
+        usage: {
+          status: "validated",
+          inputTokens: 5,
+          outputTokens: 5,
+          totalTokens: 10,
+          providerResponseId: `resp-restart-${Date.now()}`,
+        },
+      });
+      expect(built.ok).toBe(true);
+      if (!built.ok) return;
+      const a = await ledgerA.insertUsageEvent(built.event, built.fingerprint);
+      const b = await ledgerB.insertUsageEvent(built.event, built.fingerprint);
+      expect(a.outcome).toBe("created");
+      expect(b.outcome).toBe("duplicate");
+    } finally {
+      await closeFinOpsPool(poolB);
+    }
+  });
+
+  it("sanitizes connection failures", async () => {
+    const badPool = createFinOpsPool({
+      connectionString:
+        "postgres://sfia_ci:sfia_ci_local_only@127.0.0.1:1/sfia_studio_finops_t1",
+      connectionTimeoutMillis: 500,
+      max: 1,
+    });
+    try {
+      const ledger = createPostgresFinOpsUsageLedger(badPool);
+      const built = buildUsageEvent({
+        projectId: "proj-db",
+        executionRunId: "run-bad",
+        correlationId: "corr-bad",
+        provider: "openai",
+        occurredAt: "2026-08-06T22:05:00.000Z",
+        usage: { status: "unavailable", reason: "x" },
+      });
+      expect(built.ok).toBe(true);
+      if (!built.ok) return;
+      const result = await ledger.insertUsageEvent(
+        built.event,
+        built.fingerprint,
+      );
+      expect(result.outcome).toBe("failed");
+      if (result.outcome === "failed") {
+        expect(result.error.code).toBe("FINOPS_DB_UNAVAILABLE");
+        expect(result.error.retryable).toBe(true);
+        expect(result.error.message).not.toMatch(/postgres:\/\/|password|127\.0\.0\.1/i);
+        expect(result.error.technicalDetailsRedacted).toBe(true);
+      }
+    } finally {
+      await closeFinOpsPool(badPool);
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
new file mode 100644
index 0000000..f6dee8b
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
@@ -0,0 +1,358 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it, vi } from "vitest";
+import { buildUsageEvent } from "@/lib/oa/finops/application/buildUsageEvent";
+import { createFinOpsCaptureService } from "@/lib/oa/finops/application/captureFinOpsUsage";
+import { deriveFinOpsIdentity } from "@/lib/oa/finops/application/identity";
+import {
+  FINOPS_MAX_SAFE_TOKEN,
+  resolveTotalTokens,
+  validateSafeToken,
+} from "@/lib/oa/finops/application/safeTokens";
+import { createFinOpsPool } from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
+import { readPgTokenField } from "@/lib/oa/finops/infrastructure/postgres/readPgToken";
+import { sanitizeDbError } from "@/lib/oa/finops/infrastructure/postgres/sanitizeDbError";
+import type { FinOpsUsageLedgerPort } from "@/lib/oa/finops/ports/finopsUsageLedgerPort";
+
+describe("FinOps T1 identity", () => {
+  it("derives deterministic eventId and dedupKey", () => {
+    const a = deriveFinOpsIdentity({
+      projectId: "p1",
+      executionRunId: "run-1",
+      provider: "openai",
+      providerRequestId: "resp_abc",
+      correlationId: "corr-1",
+    });
+    const b = deriveFinOpsIdentity({
+      projectId: "p1",
+      executionRunId: "run-1",
+      provider: "openai",
+      providerRequestId: "resp_abc",
+      correlationId: "corr-1",
+    });
+    expect(a.eventId).toBe(b.eventId);
+    expect(a.dedupKey).toBe(b.dedupKey);
+    expect(a.eventId.startsWith("evt_")).toBe(true);
+    expect(a.dedupKey.startsWith("dedup_")).toBe(true);
+  });
+
+  it("changes identity when run or provider response id changes", () => {
+    const base = {
+      projectId: "p1",
+      executionRunId: "run-1",
+      provider: "openai",
+      providerRequestId: "resp_abc",
+      correlationId: "corr-1",
+    };
+    const a = deriveFinOpsIdentity(base);
+    const b = deriveFinOpsIdentity({ ...base, executionRunId: "run-2" });
+    const c = deriveFinOpsIdentity({
+      ...base,
+      providerRequestId: "resp_other",
+    });
+    expect(a.eventId).not.toBe(b.eventId);
+    expect(a.eventId).not.toBe(c.eventId);
+  });
+});
+
+describe("FinOps T1 buildUsageEvent", () => {
+  const base = {
+    projectId: "proj-1",
+    executionRunId: "run-1",
+    correlationId: "corr-1",
+    provider: "openai",
+    occurredAt: "2026-08-06T22:05:00.000Z",
+  };
+
+  it("builds validated API_USAGE event without Money fields", () => {
+    const result = buildUsageEvent({
+      ...base,
+      usage: {
+        status: "validated",
+        inputTokens: 10,
+        outputTokens: 5,
+        totalTokens: 15,
+        model: "gpt-test",
+        providerResponseId: "resp_1",
+      },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.event.usageStatus).toBe("validated");
+    expect(result.event.sourceOfTruth).toBe("API_USAGE");
+    expect(JSON.stringify(result.event)).not.toMatch(/cost|currency|price|Money/i);
+  });
+
+  it("builds unavailable with UNKNOWN and null tokens (unknown ≠ zero)", () => {
+    const result = buildUsageEvent({
+      ...base,
+      usage: { status: "unavailable", reason: "missing" },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.event.usageStatus).toBe("unavailable");
+    expect(result.event.inputTokens).toBeNull();
+  });
+
+  it("marks negative tokens as invalid without inventing values", () => {
+    const result = buildUsageEvent({
+      ...base,
+      usage: { status: "validated", inputTokens: -1, outputTokens: 2 },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.event.usageStatus).toBe("invalid");
+    expect(result.event.inputTokens).toBeNull();
+  });
+
+  it("accepts Number.MAX_SAFE_INTEGER tokens", () => {
+    const result = buildUsageEvent({
+      ...base,
+      usage: {
+        status: "validated",
+        inputTokens: FINOPS_MAX_SAFE_TOKEN,
+        outputTokens: 0,
+        totalTokens: FINOPS_MAX_SAFE_TOKEN,
+      },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.event.usageStatus).toBe("validated");
+    expect(result.event.inputTokens).toBe(FINOPS_MAX_SAFE_TOKEN);
+  });
+
+  it("rejects Number.MAX_SAFE_INTEGER + 1 as invalid", () => {
+    const result = buildUsageEvent({
+      ...base,
+      usage: {
+        status: "validated",
+        inputTokens: FINOPS_MAX_SAFE_TOKEN + 1,
+        outputTokens: 0,
+      },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.event.usageStatus).toBe("invalid");
+    expect(result.event.inputTokens).toBeNull();
+  });
+
+  it("rejects sum exceeding MAX_SAFE_INTEGER", () => {
+    expect(
+      resolveTotalTokens({
+        inputTokens: FINOPS_MAX_SAFE_TOKEN,
+        outputTokens: 1,
+        totalTokens: null,
+      }),
+    ).toBe("invalid");
+    const result = buildUsageEvent({
+      ...base,
+      usage: {
+        status: "validated",
+        inputTokens: FINOPS_MAX_SAFE_TOKEN,
+        outputTokens: 1,
+      },
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) return;
+    expect(result.event.usageStatus).toBe("invalid");
+  });
+
+  it("returns FINOPS_VALIDATION_FAILED for invalid occurredAt", () => {
+    const result = buildUsageEvent({
+      ...base,
+      occurredAt: "not-a-date",
+      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.code).toBe("FINOPS_VALIDATION_FAILED");
+    expect(result.error.retryable).toBe(false);
+  });
+});
+
+describe("FinOps T1 safe token helpers", () => {
+  it("validateSafeToken accepts MAX_SAFE_INTEGER and rejects beyond", () => {
+    expect(validateSafeToken(FINOPS_MAX_SAFE_TOKEN)).toBe(FINOPS_MAX_SAFE_TOKEN);
+    expect(validateSafeToken(FINOPS_MAX_SAFE_TOKEN + 1)).toBe("invalid");
+  });
+
+  it("readPgTokenField rejects out-of-range DB strings without silent Number()", () => {
+    const ok = readPgTokenField(String(FINOPS_MAX_SAFE_TOKEN));
+    expect(ok.ok).toBe(true);
+    if (ok.ok) expect(ok.value).toBe(FINOPS_MAX_SAFE_TOKEN);
+    const bad = readPgTokenField("9007199254740992");
+    expect(bad.ok).toBe(false);
+    if (!bad.ok) {
+      expect(bad.error.code).toBe("FINOPS_VALIDATION_FAILED");
+      expect(bad.error.retryable).toBe(false);
+    }
+  });
+});
+
+describe("FinOps T1 sanitized DB errors (T1-VAL-01)", () => {
+  it("classifies SQLSTATE 08006 as FINOPS_DB_UNAVAILABLE retryable", () => {
+    const err = sanitizeDbError({ code: "08006", message: "connection failed" });
+    expect(err.code).toBe("FINOPS_DB_UNAVAILABLE");
+    expect(err.retryable).toBe(true);
+    expect(err.technicalDetailsRedacted).toBe(true);
+  });
+
+  it("classifies ECONNREFUSED as FINOPS_DB_UNAVAILABLE retryable", () => {
+    const err = sanitizeDbError({ code: "ECONNREFUSED", message: "refused" });
+    expect(err.code).toBe("FINOPS_DB_UNAVAILABLE");
+    expect(err.retryable).toBe(true);
+  });
+
+  it("classifies ETIMEDOUT as FINOPS_DB_UNAVAILABLE retryable", () => {
+    const err = sanitizeDbError({ code: "ETIMEDOUT", message: "timeout" });
+    expect(err.code).toBe("FINOPS_DB_UNAVAILABLE");
+    expect(err.retryable).toBe(true);
+  });
+
+  it("classifies non-transient codes as FINOPS_CAPTURE_FAILED", () => {
+    const err = sanitizeDbError({ code: "42P01", message: "undefined_table" });
+    expect(err.code).toBe("FINOPS_CAPTURE_FAILED");
+    expect(err.retryable).toBe(false);
+  });
+
+  it("classifies CHECK violation 23514 as FINOPS_VALIDATION_FAILED", () => {
+    const err = sanitizeDbError({ code: "23514", message: "check" });
+    expect(err.code).toBe("FINOPS_VALIDATION_FAILED");
+    expect(err.retryable).toBe(false);
+  });
+
+  it("never leaks connection strings in sanitized messages", () => {
+    const err = sanitizeDbError({
+      code: "ECONNREFUSED",
+      message: "connect ECONNREFUSED 127.0.0.1:55432",
+    });
+    expect(err.message).toBe("FinOps capture failed");
+    expect(err.message).not.toMatch(/55432|127\.0\.0\.1|postgres/i);
+  });
+});
+
+describe("FinOps T1 audit isolation (T1-VAL-03)", () => {
+  it("keeps created when audit emitter throws", async () => {
+    const ledger: FinOpsUsageLedgerPort = {
+      insertUsageEvent: async (event) => ({
+        outcome: "created",
+        eventId: event.eventId,
+      }),
+    };
+    const audit = {
+      emit: vi.fn(() => {
+        throw new Error("audit boom");
+      }),
+    };
+    const finops = createFinOpsCaptureService({ ledger, audit });
+    const result = await finops.captureUsage({
+      projectId: "p",
+      executionRunId: "r",
+      correlationId: "c",
+      provider: "openai",
+      occurredAt: "2026-08-06T22:05:00.000Z",
+      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
+    });
+    expect(result.status).toBe("created");
+  });
+
+  it("keeps duplicate when audit emitter throws", async () => {
+    const ledger: FinOpsUsageLedgerPort = {
+      insertUsageEvent: async (event) => ({
+        outcome: "duplicate",
+        eventId: event.eventId,
+      }),
+    };
+    const finops = createFinOpsCaptureService({
+      ledger,
+      audit: {
+        emit: () => {
+          throw new Error("audit boom");
+        },
+      },
+    });
+    const result = await finops.captureUsage({
+      projectId: "p",
+      executionRunId: "r",
+      correlationId: "c",
+      provider: "openai",
+      occurredAt: "2026-08-06T22:05:00.000Z",
+      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
+    });
+    expect(result.status).toBe("duplicate");
+  });
+
+  it("keeps failed when audit emitter throws during failure path", async () => {
+    const ledger: FinOpsUsageLedgerPort = {
+      insertUsageEvent: async () => ({
+        outcome: "failed",
+        error: {
+          code: "FINOPS_DB_UNAVAILABLE",
+          message: "FinOps capture failed",
+          retryable: true,
+          technicalDetailsRedacted: true,
+        },
+      }),
+    };
+    const finops = createFinOpsCaptureService({
+      ledger,
+      audit: {
+        emit: () => {
+          throw new Error("audit boom");
+        },
+      },
+    });
+    const result = await finops.captureUsage({
+      projectId: "p",
+      executionRunId: "r",
+      correlationId: "c",
+      provider: "openai",
+      occurredAt: "2026-08-06T22:05:00.000Z",
+      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
+    });
+    expect(result.status).toBe("failed");
+  });
+});
+
+describe("FinOps T1 pool SSL options (T1-VAL-04)", () => {
+  it("defaults ssl to false and accepts explicit ssl option shape", () => {
+    const pool = createFinOpsPool({
+      connectionString:
+        "postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:1/sfia_studio_finops_t1",
+      connectionTimeoutMillis: 100,
+      ssl: false,
+    });
+    expect(pool).toBeTruthy();
+    void pool.end();
+  });
+
+  it("rejects non-positive or unsafe statementTimeoutMillis", () => {
+    expect(() =>
+      createFinOpsPool({
+        connectionString:
+          "postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:1/sfia_studio_finops_t1",
+        statementTimeoutMillis: 0,
+      }),
+    ).toThrow(/statementTimeoutMillis/);
+    expect(() =>
+      createFinOpsPool({
+        connectionString:
+          "postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:1/sfia_studio_finops_t1",
+        statementTimeoutMillis: 999_999,
+      }),
+    ).toThrow(/statementTimeoutMillis/);
+  });
+});
+
+describe("FinOps T1 unused mapper removal (T1-VAL-05)", () => {
+  it("does not ship mapProviderUsage module", () => {
+    const fs = require("node:fs") as typeof import("node:fs");
+    const path = require("node:path") as typeof import("node:path");
+    const target = path.join(
+      __dirname,
+      "../../lib/oa/finops/infrastructure/openai/mapProviderUsage.ts",
+    );
+    expect(fs.existsSync(target)).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
new file mode 100644
index 0000000..cb49576
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
@@ -0,0 +1,139 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it, vi } from "vitest";
+import { createFinOpsCaptureService } from "@/lib/oa/finops/application/captureFinOpsUsage";
+import type { FinOpsUsageLedgerPort } from "@/lib/oa/finops/ports/finopsUsageLedgerPort";
+import { getFixture } from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3";
+import { composeExecutionRunProvidersFake } from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
+
+function nominalAiInput(correlationSuffix = "finops") {
+  const fixture = getFixture("nominal");
+  const correlationId = `${fixture.intent.correlationId}:${correlationSuffix}`;
+  return {
+    intent: {
+      ...fixture.intent,
+      intentId: `${fixture.intent.intentId}:${correlationSuffix}`,
+      correlationId,
+    },
+    context: fixture.context,
+    providerRequest: {
+      correlationId,
+      lane: "ai" as const,
+      operation: "complete",
+      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
+      timeoutMs: 100,
+    },
+    timeoutMs: 100,
+  };
+}
+
+describe("FinOps T1 coordinator fail-open", () => {
+  it("returns disabled when FinOps dependency is not injected", async () => {
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProvidersFake(),
+    });
+    const result = await composition.coordinate(nominalAiInput("disabled"));
+    expect(result.ok).toBe(true);
+    expect(result.finopsCapture.status).toBe("disabled");
+  });
+
+  it("does not fail the user run when FinOps capture fails", async () => {
+    const ledger: FinOpsUsageLedgerPort = {
+      insertUsageEvent: async () => ({
+        outcome: "failed",
+        error: {
+          code: "FINOPS_DB_UNAVAILABLE",
+          message: "FinOps capture failed",
+          retryable: true,
+          technicalDetailsRedacted: true,
+        },
+      }),
+    };
+    const audit = { emit: vi.fn() };
+    const finops = createFinOpsCaptureService({ ledger, audit });
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProvidersFake(),
+      finops,
+    });
+    const result = await composition.coordinate(nominalAiInput("failopen"));
+    expect(result.ok).toBe(true);
+    expect(result.finopsCapture.status).toBe("failed");
+    if (result.finopsCapture.status === "failed") {
+      expect(result.finopsCapture.error.technicalDetailsRedacted).toBe(true);
+      expect(result.finopsCapture.error.message).not.toMatch(/postgres|host|sql/i);
+    }
+    expect(audit.emit).toHaveBeenCalledWith(
+      expect.objectContaining({ type: "finops_capture_failed" }),
+    );
+  });
+
+  it("skips FinOps capture for non-AI lanes", async () => {
+    const captureUsage = vi.fn();
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProvidersFake(),
+      finops: { captureUsage },
+    });
+    const fixture = getFixture("nominal");
+    const intent = {
+      ...fixture.intent,
+      intentId: "intent:d2d3:git:finops",
+      correlationId: "corr:d2d3:git:finops",
+      requestedLane: "git" as const,
+    };
+    const result = await composition.coordinate({
+      intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: intent.correlationId,
+        lane: "git",
+        operation: "read",
+        owner: "o",
+        repo: "r",
+        kind: "repository",
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    expect(captureUsage).not.toHaveBeenCalled();
+    expect(result.finopsCapture.status).toBe("not_attempted");
+  });
+
+  it("records created diagnostic when ledger inserts", async () => {
+    const ledger: FinOpsUsageLedgerPort = {
+      insertUsageEvent: async (event) => ({
+        outcome: "created",
+        eventId: event.eventId,
+      }),
+    };
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProvidersFake(),
+      finops: createFinOpsCaptureService({ ledger }),
+    });
+    const result = await composition.coordinate(nominalAiInput("created"));
+    expect(result.ok).toBe(true);
+    expect(result.finopsCapture.status).toBe("created");
+  });
+
+  it("keeps provider success when FinOps validation fails (invalid occurredAt via clock)", async () => {
+    const ledger: FinOpsUsageLedgerPort = {
+      insertUsageEvent: async (event) => ({
+        outcome: "created",
+        eventId: event.eventId,
+      }),
+    };
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProvidersFake(),
+      finops: createFinOpsCaptureService({ ledger }),
+      clock: { nowIso: () => "not-a-valid-instant" },
+    });
+    const result = await composition.coordinate(nominalAiInput("baddate"));
+    expect(result.ok).toBe(true);
+    expect(result.finopsCapture.status).toBe("failed");
+    if (result.finopsCapture.status === "failed") {
+      expect(result.finopsCapture.error.code).toBe("FINOPS_VALIDATION_FAILED");
+      expect(result.finopsCapture.error.retryable).toBe(false);
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js b/projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js
new file mode 100644
index 0000000..dc03627
--- /dev/null
+++ b/projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js
@@ -0,0 +1,120 @@
+/**
+ * Migration: FinOps T1 usage ledger (append-only, no Money columns).
+ *
+ * @type {import('node-pg-migrate').MigrationBuilder}
+ */
+
+/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
+exports.up = (pgm) => {
+  pgm.createTable("finops_usage_event", {
+    event_id: { type: "text", primaryKey: true, notNull: true },
+    dedup_key: { type: "text", notNull: true },
+    project_id: { type: "text", notNull: true },
+    execution_run_id: { type: "text", notNull: true },
+    correlation_id: { type: "text" },
+    provider: { type: "text", notNull: true },
+    model: { type: "text" },
+    occurred_at: { type: "timestamptz", notNull: true },
+    period_start: { type: "date", notNull: true },
+    source_of_truth: { type: "text", notNull: true },
+    evidence_class: { type: "text", notNull: true },
+    input_tokens: { type: "bigint" },
+    output_tokens: { type: "bigint" },
+    total_tokens: { type: "bigint" },
+    provider_request_id: { type: "text" },
+    correction_ref: { type: "text" },
+    usage_status: { type: "text", notNull: true },
+    created_at: {
+      type: "timestamptz",
+      notNull: true,
+      default: pgm.func("NOW()"),
+    },
+  });
+
+  pgm.addConstraint("finops_usage_event", "finops_usage_event_dedup_key_key", {
+    unique: ["dedup_key"],
+  });
+
+  pgm.addConstraint("finops_usage_event", "finops_usage_event_tokens_nonneg", {
+    check:
+      "(input_tokens IS NULL OR input_tokens >= 0) AND (output_tokens IS NULL OR output_tokens >= 0) AND (total_tokens IS NULL OR total_tokens >= 0)",
+  });
+
+  // JavaScript Number.MAX_SAFE_INTEGER upper bound (T1 tokens remain number).
+  pgm.addConstraint("finops_usage_event", "finops_usage_event_tokens_safe_int", {
+    check:
+      "(input_tokens IS NULL OR input_tokens <= 9007199254740991) AND (output_tokens IS NULL OR output_tokens <= 9007199254740991) AND (total_tokens IS NULL OR total_tokens <= 9007199254740991)",
+  });
+
+  pgm.addConstraint("finops_usage_event", "finops_usage_event_usage_status_chk", {
+    check: "usage_status IN ('validated', 'unavailable', 'invalid')",
+  });
+
+  pgm.addConstraint(
+    "finops_usage_event",
+    "finops_usage_event_source_of_truth_chk",
+    {
+      check:
+        "source_of_truth IN ('BILLED', 'PROVIDER_OBSERVED', 'API_USAGE', 'LOCAL_COUNT', 'PARAMETRIC_ESTIMATE', 'UNKNOWN')",
+    },
+  );
+
+  pgm.addConstraint(
+    "finops_usage_event",
+    "finops_usage_event_evidence_class_chk",
+    {
+      check: "evidence_class IN ('estimated', 'observed', 'billed', 'unknown')",
+    },
+  );
+
+  pgm.addConstraint("finops_usage_event", "finops_usage_event_period_start_chk", {
+    check: "period_start = date_trunc('month', period_start::timestamp)::date",
+  });
+
+  // Append-only guard: block UPDATE/DELETE of business rows.
+  pgm.sql(`
+CREATE OR REPLACE FUNCTION finops_usage_event_append_only()
+RETURNS trigger
+LANGUAGE plpgsql
+AS $$
+BEGIN
+  RAISE EXCEPTION 'finops_usage_event is append-only';
+END;
+$$;
+`);
+
+  pgm.sql(`
+CREATE TRIGGER trg_finops_usage_event_no_update
+BEFORE UPDATE ON finops_usage_event
+FOR EACH ROW
+EXECUTE FUNCTION finops_usage_event_append_only();
+`);
+
+  pgm.sql(`
+CREATE TRIGGER trg_finops_usage_event_no_delete
+BEFORE DELETE ON finops_usage_event
+FOR EACH ROW
+EXECUTE FUNCTION finops_usage_event_append_only();
+`);
+};
+
+/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
+exports.down = (pgm) => {
+  // Fail closed if ledger contains events — preserve data by default.
+  pgm.sql(`
+DO $$
+DECLARE
+  event_count bigint;
+BEGIN
+  SELECT COUNT(*) INTO event_count FROM finops_usage_event;
+  IF event_count > 0 THEN
+    RAISE EXCEPTION 'Refusing to drop finops_usage_event: % row(s) present', event_count;
+  END IF;
+END $$;
+`);
+
+  pgm.sql(`DROP TRIGGER IF EXISTS trg_finops_usage_event_no_delete ON finops_usage_event;`);
+  pgm.sql(`DROP TRIGGER IF EXISTS trg_finops_usage_event_no_update ON finops_usage_event;`);
+  pgm.sql(`DROP FUNCTION IF EXISTS finops_usage_event_append_only();`);
+  pgm.dropTable("finops_usage_event");
+};
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
index 047a184..1f926bb 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
@@ -28,6 +28,8 @@ import type {
   GitReadRequest,
   ProviderInvocationResult,
 } from "../ports/providerResult";
+import type { FinOpsCapturePort } from "../../finops/ports/finopsCapturePort";
+import type { FinOpsCaptureDiagnostic } from "../../finops/application/types";
 import {
   invokeWithTimeoutAndCancellation,
   type InvokeOutcome,
@@ -73,6 +75,8 @@ export type CoordinateExecutionRunDependencies = {
   };
   readonly events: ExecutionEventSinkPort;
   readonly clock: ClockPort;
+  /** Optional FinOps T1 capture boundary — absent ⇒ not_attempted/disabled. */
+  readonly finops?: FinOpsCapturePort;
 };

 export type CoordinateExecutionRunInput = {
@@ -96,6 +100,7 @@ export type CoordinateExecutionRunResult =
       readonly providerCompleted: boolean;
       readonly stateTrace: readonly ExecutionRun["state"][];
       readonly validatedUsage: UsageSummary;
+      readonly finopsCapture: FinOpsCaptureDiagnostic;
       readonly lateEvidenceRecorded: boolean;
       readonly eventDelivery: {
         readonly status: EventDeliveryStatus;
@@ -111,6 +116,7 @@ export type CoordinateExecutionRunResult =
       readonly providerCompleted: boolean;
       readonly stateTrace: readonly ExecutionRun["state"][];
       readonly validatedUsage: UsageSummary;
+      readonly finopsCapture: FinOpsCaptureDiagnostic;
       readonly lateEvidenceRecorded: boolean;
       readonly eventDelivery: {
         readonly status: EventDeliveryStatus;
@@ -154,29 +160,135 @@ function validatedUsage(input: unknown): UsageSummary {
     return unavailableUsage("provider_usage_unavailable");
   }
   const usage = input as Record<string, unknown>;
+  if (usage.status === "invalid") {
+    return {
+      status: "invalid",
+      reason:
+        typeof usage.reason === "string"
+          ? usage.reason
+          : "provider_usage_invalid",
+      model: typeof usage.model === "string" ? usage.model : undefined,
+      providerResponseId:
+        typeof usage.providerResponseId === "string"
+          ? usage.providerResponseId
+          : undefined,
+    };
+  }
+  if (usage.status === "unavailable") {
+    return {
+      status: "unavailable",
+      reason:
+        typeof usage.reason === "string"
+          ? usage.reason
+          : "provider_usage_unavailable",
+      model: typeof usage.model === "string" ? usage.model : undefined,
+      providerResponseId:
+        typeof usage.providerResponseId === "string"
+          ? usage.providerResponseId
+          : undefined,
+    };
+  }
   if (usage.status !== "validated") {
     return unavailableUsage("provider_usage_unavailable");
   }
-  for (const key of ["inputTokens", "outputTokens"] as const) {
+  for (const key of ["inputTokens", "outputTokens", "totalTokens"] as const) {
     const value = usage[key];
     if (
       value !== undefined &&
       (typeof value !== "number" || !Number.isFinite(value) || value < 0)
     ) {
-      return unavailableUsage("provider_usage_invalid");
+      return {
+        status: "invalid",
+        reason: "provider_usage_invalid",
+        model: typeof usage.model === "string" ? usage.model : undefined,
+        providerResponseId:
+          typeof usage.providerResponseId === "string"
+            ? usage.providerResponseId
+            : undefined,
+      };
     }
   }
   if (usage.unit !== undefined && typeof usage.unit !== "string") {
-    return unavailableUsage("provider_usage_invalid");
+    return {
+      status: "invalid",
+      reason: "provider_usage_invalid",
+    };
   }
   return {
     status: "validated",
     inputTokens: usage.inputTokens as number | undefined,
     outputTokens: usage.outputTokens as number | undefined,
+    totalTokens: usage.totalTokens as number | undefined,
     unit: usage.unit as string | undefined,
+    model: typeof usage.model === "string" ? usage.model : undefined,
+    providerResponseId:
+      typeof usage.providerResponseId === "string"
+        ? usage.providerResponseId
+        : undefined,
   };
 }

+function finopsNotAttempted(reason: string): FinOpsCaptureDiagnostic {
+  return { status: "not_attempted", reason };
+}
+
+function finopsDisabled(): FinOpsCaptureDiagnostic {
+  return { status: "disabled", reason: "finops_dependency_not_injected" };
+}
+
+async function captureFinOpsAfterAiSuccess(args: {
+  readonly deps: CoordinateExecutionRunDependencies;
+  readonly run: ExecutionRun;
+  readonly usage: UsageSummary;
+  readonly providerSucceeded: boolean;
+}): Promise<FinOpsCaptureDiagnostic> {
+  if (args.run.intent.requestedLane !== "ai") {
+    return finopsNotAttempted("non_ai_lane");
+  }
+  if (!args.providerSucceeded) {
+    return finopsNotAttempted("provider_not_successful");
+  }
+  if (!args.deps.finops) {
+    return finopsDisabled();
+  }
+  try {
+    return await args.deps.finops.captureUsage({
+      projectId: args.run.context.projectId,
+      executionRunId: args.run.runId,
+      correlationId: args.run.correlationId,
+      provider: "openai",
+      usage: {
+        status: args.usage.status,
+        ...(args.usage.status === "validated"
+          ? {
+              inputTokens: args.usage.inputTokens,
+              outputTokens: args.usage.outputTokens,
+              totalTokens: args.usage.totalTokens,
+              unit: args.usage.unit,
+              model: args.usage.model,
+              providerResponseId: args.usage.providerResponseId,
+            }
+          : {
+              reason: args.usage.reason,
+              model: args.usage.model,
+              providerResponseId: args.usage.providerResponseId,
+            }),
+      },
+      occurredAt: args.deps.clock.nowIso(),
+    });
+  } catch {
+    return {
+      status: "failed",
+      error: {
+        code: "FINOPS_CAPTURE_FAILED",
+        message: "FinOps capture failed",
+        retryable: true,
+        technicalDetailsRedacted: true,
+      },
+    };
+  }
+}
+
 function invalidProviderFailure(correlationId: string): NormalizedFailure {
   return normalizedFailure({
     family: "invalid_provider_result",
@@ -207,6 +319,7 @@ function emptyDiagnostics(tracker: EventTracker) {
     providerCompleted: false,
     stateTrace: [] as ExecutionRun["state"][],
     validatedUsage: unavailableUsage("not_validated"),
+    finopsCapture: finopsNotAttempted("preflight_or_early_exit"),
     lateEvidenceRecorded: false,
     eventDelivery: {
       status: (tracker.failureCount > 0
@@ -881,6 +994,7 @@ export async function coordinateExecutionRun(
       providerCompleted: false,
       stateTrace,
       validatedUsage: noUsage,
+      finopsCapture: finopsNotAttempted("create_failed"),
       lateEvidenceRecorded: false,
       eventDelivery: deliveryOf(tracker),
     };
@@ -923,6 +1037,7 @@ export async function coordinateExecutionRun(
       providerCompleted: false,
       stateTrace,
       validatedUsage: noUsage,
+      finopsCapture: finopsNotAttempted("pre_engagement_block"),
       lateEvidenceRecorded: false,
       eventDelivery: deliveryOf(tracker),
     };
@@ -942,6 +1057,7 @@ export async function coordinateExecutionRun(
       providerCompleted: false,
       stateTrace,
       validatedUsage: noUsage,
+      finopsCapture: finopsNotAttempted("start_failed"),
       lateEvidenceRecorded: false,
       eventDelivery: deliveryOf(tracker),
     };
@@ -1001,6 +1117,24 @@ export async function coordinateExecutionRun(
   });

   const terminal = await transitionFromInvocation(current, invocation, deps);
+  let providerSucceeded = false;
+  if (invocation.status === "completed") {
+    try {
+      providerSucceeded = invocation.result.kind === "success";
+    } catch {
+      providerSucceeded = false;
+    }
+  }
+
+  // Fail-open FinOps capture: never convert provider success into user failure.
+  const runForCapture = terminal.result.run ?? current;
+  const finopsCapture = await captureFinOpsAfterAiSuccess({
+    deps,
+    run: runForCapture,
+    usage: terminal.usage,
+    providerSucceeded,
+  });
+
   if (!terminal.result.ok) {
     return {
       ok: false,
@@ -1011,6 +1145,7 @@ export async function coordinateExecutionRun(
       providerCompleted,
       stateTrace,
       validatedUsage: terminal.usage,
+      finopsCapture,
       lateEvidenceRecorded: false,
       eventDelivery: deliveryOf(tracker),
     };
@@ -1050,6 +1185,7 @@ export async function coordinateExecutionRun(
         providerCompleted,
         stateTrace,
         validatedUsage: terminal.usage,
+        finopsCapture,
         lateEvidenceRecorded,
         eventDelivery: deliveryOf(tracker),
       }
@@ -1080,6 +1216,7 @@ export async function coordinateExecutionRun(
         providerCompleted,
         stateTrace,
         validatedUsage: terminal.usage,
+        finopsCapture,
         lateEvidenceRecorded,
         eventDelivery: deliveryOf(tracker),
       };
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
index e7a3902..65467bd 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
@@ -184,17 +184,28 @@ export type HumanDecisionGate = {
   readonly expiresAt?: string;
 };

-/** 11. UsageSummary */
+/** 11. UsageSummary — T1 optional transport fields are additive (no Money). */
 export type UsageSummary =
   | {
       readonly status: "validated";
       readonly inputTokens?: number;
       readonly outputTokens?: number;
+      readonly totalTokens?: number;
       readonly unit?: string;
+      readonly model?: string;
+      readonly providerResponseId?: string;
     }
   | {
       readonly status: "unavailable";
       readonly reason: string;
+      readonly model?: string;
+      readonly providerResponseId?: string;
+    }
+  | {
+      readonly status: "invalid";
+      readonly reason: string;
+      readonly model?: string;
+      readonly providerResponseId?: string;
     };

 /** 12. NormalizedFailure */
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
index d2e8a9b..6029a2e 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
@@ -92,9 +92,17 @@ export class PlatformAiExecutionAdapter implements AiExecutionPort {
                   status: "validated" as const,
                   inputTokens: raw.usage.inputTokens ?? undefined,
                   outputTokens: raw.usage.outputTokens ?? undefined,
+                  totalTokens: raw.usage.totalTokens ?? undefined,
                   unit: "tokens",
+                  model: raw.usage.model ?? undefined,
+                  providerResponseId: raw.usage.providerResponseId ?? undefined,
                 }
-              : { status: "unavailable" as const, reason: "provider usage missing" };
+              : {
+                  status: "unavailable" as const,
+                  reason: "provider usage missing",
+                  model: raw.usage.model ?? undefined,
+                  providerResponseId: raw.usage.providerResponseId ?? undefined,
+                };
           return {
             kind: "success" as const,
             completeness: "complete" as const,
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
index 5c49470..ed73157 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
@@ -56,6 +56,7 @@ export function composeExecutionRunD2D3(options?: {
   readonly providers?: ExecutionRunProviderComposition;
   readonly clock?: ClockPort;
   readonly clockIso?: string;
+  readonly finops?: import("../../finops/ports/finopsCapturePort").FinOpsCapturePort;
 }): ExecutionRunD2D3Composition {
   assertServerOnly();
   const clockIso = options?.clockIso ?? "2026-08-04T09:15:00.000Z";
@@ -93,6 +94,7 @@ export function composeExecutionRunD2D3(options?: {
         providers,
         events: providers.events,
         clock,
+        ...(options?.finops ? { finops: options.finops } : {}),
       }),
     projectById,
     assessById: async (runId) => {
diff --git a/projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts b/projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts
new file mode 100644
index 0000000..68a48f9
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts
@@ -0,0 +1,173 @@
+/**
+ * FinOps T1 — build a canonical usage ledger event (no Money).
+ * Safe-integer token contract; structural failures return sanitized errors.
+ */
+
+import { classifyCostEvidenceFromSource } from "../domain/costEvidence";
+import { computeUtcMonthPeriod } from "../domain/period";
+import type { FinOpsSourceOfTruth } from "../domain/types";
+import type { FinOpsCaptureUsageInput } from "../ports/finopsCapturePort";
+import { deriveFinOpsIdentity } from "./identity";
+import { resolveTotalTokens, validateSafeToken } from "./safeTokens";
+import type {
+  FinOpsUsageEvent,
+  FinOpsUsageFingerprint,
+  FinOpsUsageStatus,
+  SanitizedFinOpsCaptureError,
+} from "./types";
+
+function periodStartDate(occurredAt: string): string {
+  const period = computeUtcMonthPeriod(occurredAt);
+  return period.periodStart.slice(0, 10);
+}
+
+export type BuildUsageEventResult =
+  | {
+      readonly ok: true;
+      readonly event: FinOpsUsageEvent;
+      readonly fingerprint: FinOpsUsageFingerprint;
+    }
+  | {
+      readonly ok: false;
+      readonly error: SanitizedFinOpsCaptureError;
+    };
+
+function validationFailed(message: string): BuildUsageEventResult {
+  return {
+    ok: false,
+    error: {
+      code: "FINOPS_VALIDATION_FAILED",
+      message,
+      retryable: false,
+      technicalDetailsRedacted: true,
+    },
+  };
+}
+
+export function buildUsageEvent(input: {
+  readonly projectId: string;
+  readonly executionRunId: string;
+  readonly correlationId: string;
+  readonly provider: string;
+  readonly usage: FinOpsCaptureUsageInput;
+  readonly occurredAt: string;
+}): BuildUsageEventResult {
+  try {
+    const projectId = input.projectId.trim();
+    const executionRunId = input.executionRunId.trim();
+    const provider = input.provider.trim();
+    const correlationId = input.correlationId.trim();
+    if (!projectId || !executionRunId || !provider || !correlationId) {
+      return validationFailed("FinOps capture rejected invalid identity fields");
+    }
+
+    let usageStatus: FinOpsUsageStatus;
+    let sourceOfTruth: FinOpsSourceOfTruth;
+    let inputTokens: number | null = null;
+    let outputTokens: number | null = null;
+    let totalTokens: number | null = null;
+
+    if (input.usage.status === "validated") {
+      const i = validateSafeToken(input.usage.inputTokens);
+      const o = validateSafeToken(input.usage.outputTokens);
+      const t = validateSafeToken(input.usage.totalTokens);
+      if (i === "invalid" || o === "invalid" || t === "invalid") {
+        usageStatus = "invalid";
+        sourceOfTruth = "UNKNOWN";
+        inputTokens = null;
+        outputTokens = null;
+        totalTokens = null;
+      } else {
+        const resolved = resolveTotalTokens({
+          inputTokens: i,
+          outputTokens: o,
+          totalTokens: t,
+        });
+        if (resolved === "invalid") {
+          usageStatus = "invalid";
+          sourceOfTruth = "UNKNOWN";
+          inputTokens = null;
+          outputTokens = null;
+          totalTokens = null;
+        } else {
+          usageStatus = "validated";
+          sourceOfTruth = "API_USAGE";
+          inputTokens = i;
+          outputTokens = o;
+          totalTokens = resolved;
+        }
+      }
+    } else if (input.usage.status === "unavailable") {
+      usageStatus = "unavailable";
+      sourceOfTruth = "UNKNOWN";
+    } else {
+      usageStatus = "invalid";
+      sourceOfTruth = "UNKNOWN";
+    }
+
+    const evidenceClass = classifyCostEvidenceFromSource(sourceOfTruth);
+    const model =
+      typeof input.usage.model === "string" && input.usage.model.trim()
+        ? input.usage.model.trim()
+        : null;
+    const providerRequestId =
+      typeof input.usage.providerResponseId === "string" &&
+      input.usage.providerResponseId.trim()
+        ? input.usage.providerResponseId.trim()
+        : null;
+
+    const identity = deriveFinOpsIdentity({
+      projectId,
+      executionRunId,
+      provider,
+      providerRequestId,
+      correlationId,
+    });
+
+    let periodStart: string;
+    try {
+      periodStart = periodStartDate(input.occurredAt);
+    } catch {
+      return validationFailed("FinOps capture rejected invalid occurredAt");
+    }
+
+    const event: FinOpsUsageEvent = {
+      eventId: identity.eventId,
+      dedupKey: identity.dedupKey,
+      projectId,
+      executionRunId,
+      correlationId,
+      provider,
+      model,
+      occurredAt: input.occurredAt,
+      periodStart,
+      sourceOfTruth,
+      evidenceClass,
+      inputTokens,
+      outputTokens,
+      totalTokens,
+      providerRequestId,
+      correctionRef: null,
+      usageStatus,
+    };
+
+    const fingerprint: FinOpsUsageFingerprint = {
+      projectId: event.projectId,
+      executionRunId: event.executionRunId,
+      provider: event.provider,
+      providerRequestId: event.providerRequestId,
+      correlationId: event.correlationId,
+      usageStatus: event.usageStatus,
+      inputTokens: event.inputTokens,
+      outputTokens: event.outputTokens,
+      totalTokens: event.totalTokens,
+      model: event.model,
+      sourceOfTruth: event.sourceOfTruth,
+      evidenceClass: event.evidenceClass,
+    };
+
+    return { ok: true, event, fingerprint };
+  } catch {
+    return validationFailed("FinOps capture rejected invalid event structure");
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts b/projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
new file mode 100644
index 0000000..d8f20ef
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts
@@ -0,0 +1,135 @@
+/**
+ * FinOps T1 — single authoritative capture writer (application boundary).
+ * Audit failures never requalify ledger outcomes.
+ */
+
+import type {
+  FinOpsCapturePort,
+  FinOpsCaptureRequest,
+} from "../ports/finopsCapturePort";
+import type { FinOpsUsageLedgerPort } from "../ports/finopsUsageLedgerPort";
+import { buildUsageEvent } from "./buildUsageEvent";
+import type { FinOpsCaptureDiagnostic } from "./types";
+
+export type FinOpsAuditEmitter = {
+  readonly emit: (event: {
+    readonly type:
+      | "finops_capture_created"
+      | "finops_capture_duplicate"
+      | "finops_capture_failed";
+    readonly detail: Readonly<Record<string, unknown>>;
+  }) => void;
+};
+
+function safeEmit(
+  audit: FinOpsAuditEmitter | undefined,
+  event: {
+    readonly type:
+      | "finops_capture_created"
+      | "finops_capture_duplicate"
+      | "finops_capture_failed";
+    readonly detail: Readonly<Record<string, unknown>>;
+  },
+): void {
+  if (!audit) return;
+  try {
+    audit.emit(event);
+  } catch {
+    // Audit is best-effort T1; durable observability is T6.
+    // Never mutate ledger outcomes, never retry, never expose details.
+  }
+}
+
+export function createFinOpsCaptureService(deps: {
+  readonly ledger: FinOpsUsageLedgerPort;
+  readonly audit?: FinOpsAuditEmitter;
+}): FinOpsCapturePort {
+  return {
+    async captureUsage(
+      request: FinOpsCaptureRequest,
+    ): Promise<FinOpsCaptureDiagnostic> {
+      let built;
+      try {
+        built = buildUsageEvent(request);
+      } catch {
+        const error = {
+          code: "FINOPS_VALIDATION_FAILED" as const,
+          message: "FinOps capture rejected invalid event structure",
+          retryable: false,
+          technicalDetailsRedacted: true as const,
+        };
+        safeEmit(deps.audit, {
+          type: "finops_capture_failed",
+          detail: { code: error.code, retryable: error.retryable },
+        });
+        return { status: "failed", error };
+      }
+
+      if (!built.ok) {
+        safeEmit(deps.audit, {
+          type: "finops_capture_failed",
+          detail: {
+            code: built.error.code,
+            retryable: built.error.retryable,
+          },
+        });
+        return { status: "failed", error: built.error };
+      }
+
+      try {
+        const result = await deps.ledger.insertUsageEvent(
+          built.event,
+          built.fingerprint,
+        );
+        if (result.outcome === "created") {
+          const diagnostic: FinOpsCaptureDiagnostic = {
+            status: "created",
+            eventId: result.eventId,
+            dedupKey: built.event.dedupKey,
+          };
+          safeEmit(deps.audit, {
+            type: "finops_capture_created",
+            detail: { eventId: result.eventId },
+          });
+          return diagnostic;
+        }
+        if (result.outcome === "duplicate") {
+          const diagnostic: FinOpsCaptureDiagnostic = {
+            status: "duplicate",
+            eventId: result.eventId,
+            dedupKey: built.event.dedupKey,
+          };
+          safeEmit(deps.audit, {
+            type: "finops_capture_duplicate",
+            detail: { eventId: result.eventId },
+          });
+          return diagnostic;
+        }
+        const diagnostic: FinOpsCaptureDiagnostic = {
+          status: "failed",
+          error: result.error,
+        };
+        safeEmit(deps.audit, {
+          type: "finops_capture_failed",
+          detail: {
+            code: result.error.code,
+            retryable: result.error.retryable,
+          },
+        });
+        return diagnostic;
+      } catch {
+        const error = {
+          code: "FINOPS_CAPTURE_FAILED" as const,
+          message: "FinOps capture failed",
+          retryable: true,
+          technicalDetailsRedacted: true as const,
+        };
+        safeEmit(deps.audit, {
+          type: "finops_capture_failed",
+          detail: { code: error.code, retryable: error.retryable },
+        });
+        return { status: "failed", error };
+      }
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/application/identity.ts b/projects/sfia-studio/app/lib/oa/finops/application/identity.ts
new file mode 100644
index 0000000..55e3d1e
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/application/identity.ts
@@ -0,0 +1,56 @@
+/**
+ * FinOps T1 — deterministic event_id / dedup_key (SHA-256, versioned material).
+ * No Math.random, no UUID, no wall-clock, no cost, no secrets, no prompt content.
+ */
+
+import { createHash } from "node:crypto";
+import { FINOPS_USAGE_IDENTITY_CONTRACT_VERSION } from "./types";
+
+export type FinOpsIdentityMaterial = {
+  readonly projectId: string;
+  readonly executionRunId: string;
+  readonly provider: string;
+  /** Prefer provider response id when present; else stable correlationId. */
+  readonly providerRequestId: string | null;
+  readonly correlationId: string | null;
+};
+
+function normalizePart(value: string | null | undefined): string {
+  if (value === null || value === undefined) return "";
+  return value.trim();
+}
+
+/**
+ * Stable material string for identity hashing.
+ * Order and separators are part of the contract version.
+ */
+export function buildIdentityMaterial(input: FinOpsIdentityMaterial): string {
+  const responseOrCorrelation =
+    normalizePart(input.providerRequestId) ||
+    normalizePart(input.correlationId);
+  return [
+    FINOPS_USAGE_IDENTITY_CONTRACT_VERSION,
+    normalizePart(input.projectId),
+    normalizePart(input.executionRunId),
+    normalizePart(input.provider),
+    responseOrCorrelation,
+  ].join("|");
+}
+
+export function sha256Hex(material: string): string {
+  return createHash("sha256").update(material, "utf8").digest("hex");
+}
+
+export function deriveFinOpsIdentity(input: FinOpsIdentityMaterial): {
+  readonly eventId: string;
+  readonly dedupKey: string;
+  readonly material: string;
+} {
+  const material = buildIdentityMaterial(input);
+  const digest = sha256Hex(material);
+  return {
+    eventId: `evt_${digest}`,
+    dedupKey: `dedup_${digest}`,
+    material,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts b/projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts
new file mode 100644
index 0000000..7acef94
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts
@@ -0,0 +1,39 @@
+/**
+ * FinOps T1 — application-side safe-integer token contract (no Money).
+ */
+
+export const FINOPS_MAX_SAFE_TOKEN = Number.MAX_SAFE_INTEGER; // 9007199254740991
+
+/** Application-side token validation before persist. */
+export function validateSafeToken(
+  value: number | undefined,
+): number | null | "invalid" {
+  if (value === undefined) return null;
+  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
+    return "invalid";
+  }
+  if (!Number.isSafeInteger(value)) return "invalid";
+  return value;
+}
+
+/**
+ * Compute totalTokens when not provided: input + output must remain safe.
+ * Returns "invalid" if the sum would exceed MAX_SAFE_INTEGER.
+ */
+export function resolveTotalTokens(input: {
+  readonly inputTokens: number | null;
+  readonly outputTokens: number | null;
+  readonly totalTokens: number | null;
+}): number | null | "invalid" {
+  if (input.totalTokens !== null) {
+    return input.totalTokens;
+  }
+  if (input.inputTokens !== null && input.outputTokens !== null) {
+    const sum = input.inputTokens + input.outputTokens;
+    if (!Number.isSafeInteger(sum)) return "invalid";
+    return sum;
+  }
+  if (input.inputTokens !== null) return input.inputTokens;
+  if (input.outputTokens !== null) return input.outputTokens;
+  return null;
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/application/types.ts b/projects/sfia-studio/app/lib/oa/finops/application/types.ts
new file mode 100644
index 0000000..6ae34f6
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/application/types.ts
@@ -0,0 +1,93 @@
+/**
+ * FinOps T1 — capture / ledger event types (usage-only; no Money).
+ */
+
+import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "../domain/types";
+
+export const FINOPS_USAGE_IDENTITY_CONTRACT_VERSION = "t1-v1" as const;
+
+export type FinOpsUsageStatus = "validated" | "unavailable" | "invalid";
+
+export type FinOpsUsageEvent = {
+  readonly eventId: string;
+  readonly dedupKey: string;
+  readonly projectId: string;
+  readonly executionRunId: string;
+  readonly correlationId: string | null;
+  readonly provider: string;
+  readonly model: string | null;
+  readonly occurredAt: string;
+  /** UTC calendar month start as YYYY-MM-DD */
+  readonly periodStart: string;
+  readonly sourceOfTruth: FinOpsSourceOfTruth;
+  readonly evidenceClass: FinOpsCostEvidenceClass;
+  readonly inputTokens: number | null;
+  readonly outputTokens: number | null;
+  readonly totalTokens: number | null;
+  readonly providerRequestId: string | null;
+  readonly correctionRef: string | null;
+  readonly usageStatus: FinOpsUsageStatus;
+};
+
+/** Canonical fingerprint fields used for conflict detection (no secrets, no prompt). */
+export type FinOpsUsageFingerprint = {
+  readonly projectId: string;
+  readonly executionRunId: string;
+  readonly provider: string;
+  readonly providerRequestId: string | null;
+  readonly correlationId: string | null;
+  readonly usageStatus: FinOpsUsageStatus;
+  readonly inputTokens: number | null;
+  readonly outputTokens: number | null;
+  readonly totalTokens: number | null;
+  readonly model: string | null;
+  readonly sourceOfTruth: FinOpsSourceOfTruth;
+  readonly evidenceClass: FinOpsCostEvidenceClass;
+};
+
+export type SanitizedFinOpsCaptureError = {
+  readonly code:
+    | "FINOPS_CAPTURE_FAILED"
+    | "FINOPS_DEDUP_CONFLICT"
+    | "FINOPS_VALIDATION_FAILED"
+    | "FINOPS_DB_UNAVAILABLE";
+  readonly message: string;
+  readonly retryable: boolean;
+  readonly technicalDetailsRedacted: true;
+};
+
+export type FinOpsCaptureDiagnostic =
+  | {
+      readonly status: "not_attempted";
+      readonly reason: string;
+    }
+  | {
+      readonly status: "disabled";
+      readonly reason: string;
+    }
+  | {
+      readonly status: "created";
+      readonly eventId: string;
+      readonly dedupKey: string;
+    }
+  | {
+      readonly status: "duplicate";
+      readonly eventId: string;
+      readonly dedupKey: string;
+    }
+  | {
+      readonly status: "failed";
+      readonly error: SanitizedFinOpsCaptureError;
+    };
+
+export type FinOpsLedgerInsertResult =
+  | { readonly outcome: "created"; readonly eventId: string }
+  | { readonly outcome: "duplicate"; readonly eventId: string }
+  | {
+      readonly outcome: "conflict";
+      readonly error: SanitizedFinOpsCaptureError;
+    }
+  | {
+      readonly outcome: "failed";
+      readonly error: SanitizedFinOpsCaptureError;
+    };
diff --git a/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts b/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts
new file mode 100644
index 0000000..53d95a2
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts
@@ -0,0 +1,68 @@
+/**
+ * FinOps T1 — pg.Pool factory for runtime (pooled) connections.
+ * Never logs or throws the connection string.
+ *
+ * SSL: explicit option only. Default false for local/CI-A.
+ * Neon must supply an explicit secure SSL config in a future gate — never inferred from URL.
+ */
+
+import { Pool, type PoolConfig } from "pg";
+
+const MAX_STATEMENT_TIMEOUT_MS = 60_000;
+
+export type FinOpsPoolOptions = {
+  readonly connectionString: string;
+  readonly max?: number;
+  readonly connectionTimeoutMillis?: number;
+  readonly idleTimeoutMillis?: number;
+  readonly statementTimeoutMillis?: number;
+  /**
+   * Explicit SSL setting compatible with pg PoolConfig.ssl.
+   * Default: false (local / CI-A ephemeral Postgres).
+   * Neon integration must pass a secure config explicitly — never auto-detected.
+   */
+  readonly ssl?: PoolConfig["ssl"];
+};
+
+function validateStatementTimeoutMillis(value: number): number {
+  if (
+    typeof value !== "number" ||
+    !Number.isSafeInteger(value) ||
+    value <= 0 ||
+    value > MAX_STATEMENT_TIMEOUT_MS
+  ) {
+    throw new Error("statementTimeoutMillis out of allowed range");
+  }
+  return value;
+}
+
+export function createFinOpsPool(options: FinOpsPoolOptions): Pool {
+  if (!options.connectionString || !options.connectionString.trim()) {
+    throw new Error("DATABASE_URL required for FinOps pool");
+  }
+  const ssl = options.ssl === undefined ? false : options.ssl;
+  const config: PoolConfig = {
+    connectionString: options.connectionString,
+    max: options.max ?? 5,
+    connectionTimeoutMillis: options.connectionTimeoutMillis ?? 5_000,
+    idleTimeoutMillis: options.idleTimeoutMillis ?? 10_000,
+    ssl,
+  };
+  const pool = new Pool(config);
+  if (options.statementTimeoutMillis !== undefined) {
+    const timeoutMs = validateStatementTimeoutMillis(
+      options.statementTimeoutMillis,
+    );
+    pool.on("connect", (client) => {
+      // Parameterized set_config — no free string interpolation of the timeout.
+      void client.query("SELECT set_config('statement_timeout', $1, false)", [
+        String(timeoutMs),
+      ]);
+    });
+  }
+  return pool;
+}
+
+export async function closeFinOpsPool(pool: Pool): Promise<void> {
+  await pool.end();
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts b/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts
new file mode 100644
index 0000000..305bc98
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts
@@ -0,0 +1,214 @@
+/**
+ * FinOps T1 — PostgreSQL append-only usage ledger adapter.
+ */
+
+import type { Pool, PoolClient } from "pg";
+import type {
+  FinOpsLedgerInsertResult,
+  FinOpsUsageEvent,
+  FinOpsUsageFingerprint,
+} from "../../application/types";
+import type { FinOpsUsageLedgerPort } from "../../ports/finopsUsageLedgerPort";
+import { readPgTokenField } from "./readPgToken";
+import { sanitizeDbError } from "./sanitizeDbError";
+
+const INSERT_SQL = `
+INSERT INTO finops_usage_event (
+  event_id,
+  dedup_key,
+  project_id,
+  execution_run_id,
+  correlation_id,
+  provider,
+  model,
+  occurred_at,
+  period_start,
+  source_of_truth,
+  evidence_class,
+  input_tokens,
+  output_tokens,
+  total_tokens,
+  provider_request_id,
+  correction_ref,
+  usage_status,
+  created_at
+) VALUES (
+  $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,NOW()
+)
+ON CONFLICT (dedup_key) DO NOTHING
+RETURNING event_id
+`;
+
+const SELECT_BY_DEDUP_SQL = `
+SELECT
+  event_id,
+  project_id,
+  execution_run_id,
+  correlation_id,
+  provider,
+  model,
+  usage_status,
+  input_tokens,
+  output_tokens,
+  total_tokens,
+  provider_request_id,
+  source_of_truth,
+  evidence_class
+FROM finops_usage_event
+WHERE dedup_key = $1
+LIMIT 1
+`;
+
+function fingerprintEqual(
+  existing: FinOpsUsageFingerprint,
+  candidate: FinOpsUsageFingerprint,
+): boolean {
+  return (
+    existing.projectId === candidate.projectId &&
+    existing.executionRunId === candidate.executionRunId &&
+    existing.provider === candidate.provider &&
+    existing.providerRequestId === candidate.providerRequestId &&
+    existing.correlationId === candidate.correlationId &&
+    existing.usageStatus === candidate.usageStatus &&
+    existing.inputTokens === candidate.inputTokens &&
+    existing.outputTokens === candidate.outputTokens &&
+    existing.totalTokens === candidate.totalTokens &&
+    existing.model === candidate.model &&
+    existing.sourceOfTruth === candidate.sourceOfTruth &&
+    existing.evidenceClass === candidate.evidenceClass
+  );
+}
+
+function rowToFingerprint(
+  row: Record<string, unknown>,
+):
+  | { readonly ok: true; readonly fingerprint: FinOpsUsageFingerprint }
+  | { readonly ok: false; readonly error: ReturnType<typeof sanitizeDbError> } {
+  const inputTokens = readPgTokenField(row.input_tokens);
+  if (!inputTokens.ok) return inputTokens;
+  const outputTokens = readPgTokenField(row.output_tokens);
+  if (!outputTokens.ok) return outputTokens;
+  const totalTokens = readPgTokenField(row.total_tokens);
+  if (!totalTokens.ok) return totalTokens;
+
+  return {
+    ok: true,
+    fingerprint: {
+      projectId: String(row.project_id),
+      executionRunId: String(row.execution_run_id),
+      provider: String(row.provider),
+      providerRequestId:
+        row.provider_request_id === null || row.provider_request_id === undefined
+          ? null
+          : String(row.provider_request_id),
+      correlationId:
+        row.correlation_id === null || row.correlation_id === undefined
+          ? null
+          : String(row.correlation_id),
+      usageStatus: row.usage_status as FinOpsUsageFingerprint["usageStatus"],
+      inputTokens: inputTokens.value,
+      outputTokens: outputTokens.value,
+      totalTokens: totalTokens.value,
+      model:
+        row.model === null || row.model === undefined ? null : String(row.model),
+      sourceOfTruth:
+        row.source_of_truth as FinOpsUsageFingerprint["sourceOfTruth"],
+      evidenceClass:
+        row.evidence_class as FinOpsUsageFingerprint["evidenceClass"],
+    },
+  };
+}
+
+export function createPostgresFinOpsUsageLedger(
+  pool: Pool,
+): FinOpsUsageLedgerPort {
+  return {
+    async insertUsageEvent(
+      event: FinOpsUsageEvent,
+      fingerprint: FinOpsUsageFingerprint,
+    ): Promise<FinOpsLedgerInsertResult> {
+      let client: PoolClient | undefined;
+      try {
+        client = await pool.connect();
+        await client.query("BEGIN");
+        const inserted = await client.query<{ event_id: string }>(INSERT_SQL, [
+          event.eventId,
+          event.dedupKey,
+          event.projectId,
+          event.executionRunId,
+          event.correlationId,
+          event.provider,
+          event.model,
+          event.occurredAt,
+          event.periodStart,
+          event.sourceOfTruth,
+          event.evidenceClass,
+          event.inputTokens,
+          event.outputTokens,
+          event.totalTokens,
+          event.providerRequestId,
+          event.correctionRef,
+          event.usageStatus,
+        ]);
+
+        if (inserted.rowCount === 1) {
+          await client.query("COMMIT");
+          return { outcome: "created", eventId: event.eventId };
+        }
+
+        const existing = await client.query(SELECT_BY_DEDUP_SQL, [
+          event.dedupKey,
+        ]);
+        if (existing.rowCount !== 1) {
+          await client.query("ROLLBACK");
+          return {
+            outcome: "failed",
+            error: {
+              code: "FINOPS_CAPTURE_FAILED",
+              message: "FinOps capture failed",
+              retryable: true,
+              technicalDetailsRedacted: true,
+            },
+          };
+        }
+
+        const existingFpResult = rowToFingerprint(
+          existing.rows[0] as Record<string, unknown>,
+        );
+        if (!existingFpResult.ok) {
+          await client.query("ROLLBACK");
+          return { outcome: "failed", error: existingFpResult.error };
+        }
+        if (!fingerprintEqual(existingFpResult.fingerprint, fingerprint)) {
+          await client.query("ROLLBACK");
+          return {
+            outcome: "conflict",
+            error: {
+              code: "FINOPS_DEDUP_CONFLICT",
+              message: "FinOps dedup key conflict with divergent payload",
+              retryable: false,
+              technicalDetailsRedacted: true,
+            },
+          };
+        }
+
+        await client.query("COMMIT");
+        return {
+          outcome: "duplicate",
+          eventId: String(existing.rows[0].event_id),
+        };
+      } catch (error) {
+        if (client) {
+          try {
+            await client.query("ROLLBACK");
+          } catch {
+            // ignore rollback errors
+          }
+        }
+        return { outcome: "failed", error: sanitizeDbError(error) };
+      } finally {
+        client?.release();
+      }
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts b/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts
new file mode 100644
index 0000000..c95eb81
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts
@@ -0,0 +1,98 @@
+/**
+ * FinOps T1 — controlled PostgreSQL token reading (safe integer contract).
+ * Tokens remain JavaScript number; never silently Number() a bigint out of range.
+ */
+
+import { FINOPS_MAX_SAFE_TOKEN } from "../../application/safeTokens";
+import type { SanitizedFinOpsCaptureError } from "../../application/types";
+
+export type ReadPgTokenResult =
+  | { readonly ok: true; readonly value: number | null }
+  | { readonly ok: false; readonly error: SanitizedFinOpsCaptureError };
+
+/**
+ * Accept null; accept string or number; require non-negative safe integer.
+ * Fail sanitized / non-retryable when DB value is outside the T1 contract.
+ */
+export function readPgTokenField(raw: unknown): ReadPgTokenResult {
+  if (raw === null || raw === undefined) {
+    return { ok: true, value: null };
+  }
+
+  let asNumber: number;
+  if (typeof raw === "number") {
+    asNumber = raw;
+  } else if (typeof raw === "string") {
+    const trimmed = raw.trim();
+    if (!/^\d+$/.test(trimmed)) {
+      return {
+        ok: false,
+        error: {
+          code: "FINOPS_VALIDATION_FAILED",
+          message: "FinOps ledger rejected invalid usage values",
+          retryable: false,
+          technicalDetailsRedacted: true,
+        },
+      };
+    }
+    // Reject strings that exceed MAX_SAFE_INTEGER before Number() loses precision.
+    if (
+      trimmed.length > String(FINOPS_MAX_SAFE_TOKEN).length ||
+      (trimmed.length === String(FINOPS_MAX_SAFE_TOKEN).length &&
+        trimmed > String(FINOPS_MAX_SAFE_TOKEN))
+    ) {
+      return {
+        ok: false,
+        error: {
+          code: "FINOPS_VALIDATION_FAILED",
+          message: "FinOps ledger rejected invalid usage values",
+          retryable: false,
+          technicalDetailsRedacted: true,
+        },
+      };
+    }
+    asNumber = Number(trimmed);
+  } else if (typeof raw === "bigint") {
+    const max = BigInt(FINOPS_MAX_SAFE_TOKEN);
+    if (raw < BigInt(0) || raw > max) {
+      return {
+        ok: false,
+        error: {
+          code: "FINOPS_VALIDATION_FAILED",
+          message: "FinOps ledger rejected invalid usage values",
+          retryable: false,
+          technicalDetailsRedacted: true,
+        },
+      };
+    }
+    asNumber = Number(raw);
+  } else {
+    return {
+      ok: false,
+      error: {
+        code: "FINOPS_VALIDATION_FAILED",
+        message: "FinOps ledger rejected invalid usage values",
+        retryable: false,
+        technicalDetailsRedacted: true,
+      },
+    };
+  }
+
+  if (
+    !Number.isFinite(asNumber) ||
+    asNumber < 0 ||
+    !Number.isSafeInteger(asNumber)
+  ) {
+    return {
+      ok: false,
+      error: {
+        code: "FINOPS_VALIDATION_FAILED",
+        message: "FinOps ledger rejected invalid usage values",
+        retryable: false,
+        technicalDetailsRedacted: true,
+      },
+    };
+  }
+
+  return { ok: true, value: asNumber };
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts b/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts
new file mode 100644
index 0000000..589fe0d
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts
@@ -0,0 +1,87 @@
+/**
+ * FinOps T1 — sanitize PostgreSQL / pg / Node network errors.
+ * Never expose host, SQL, secrets, or connection strings.
+ */
+
+import type { SanitizedFinOpsCaptureError } from "../../application/types";
+
+/** PostgreSQL SQLSTATE codes treated as transient / unavailable. */
+const TRANSIENT_SQLSTATES = new Set([
+  "40001", // serialization_failure
+  "40P01", // deadlock_detected
+  "57P01", // admin_shutdown
+  "57P02", // crash_shutdown
+  "57P03", // cannot_connect_now
+  "08000",
+  "08003",
+  "08006",
+  "08001",
+  "08004",
+]);
+
+/** Node.js network / socket codes treated as transient DB unavailability. */
+const TRANSIENT_NODE_CODES = new Set([
+  "ECONNREFUSED",
+  "ECONNRESET",
+  "ETIMEDOUT",
+  "ENOTFOUND",
+  "EHOSTUNREACH",
+  "ENETUNREACH",
+  "EPIPE",
+]);
+
+function readErrorCode(error: unknown): string | undefined {
+  if (!error || typeof error !== "object") return undefined;
+  if (
+    "code" in error &&
+    typeof (error as { code: unknown }).code === "string"
+  ) {
+    return (error as { code: string }).code;
+  }
+  return undefined;
+}
+
+export function sanitizeDbError(error: unknown): SanitizedFinOpsCaptureError {
+  const code = readErrorCode(error);
+
+  if (code === "23505") {
+    return {
+      code: "FINOPS_CAPTURE_FAILED",
+      message: "FinOps capture failed",
+      retryable: false,
+      technicalDetailsRedacted: true,
+    };
+  }
+
+  if (code === "23514") {
+    return {
+      code: "FINOPS_VALIDATION_FAILED",
+      message: "FinOps ledger rejected invalid usage values",
+      retryable: false,
+      technicalDetailsRedacted: true,
+    };
+  }
+
+  const transient =
+    code !== undefined &&
+    (TRANSIENT_SQLSTATES.has(code) || TRANSIENT_NODE_CODES.has(code));
+
+  return {
+    code: transient ? "FINOPS_DB_UNAVAILABLE" : "FINOPS_CAPTURE_FAILED",
+    message: "FinOps capture failed",
+    retryable: transient,
+    technicalDetailsRedacted: true,
+  };
+}
+
+export function assertNoSecretLeak(message: string): void {
+  const lower = message.toLowerCase();
+  if (
+    lower.includes("password") ||
+    lower.includes("postgres://") ||
+    lower.includes("postgresql://") ||
+    /:\d{2,5}\//.test(message)
+  ) {
+    throw new Error("Sanitized FinOps error must not leak connection details");
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts b/projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts
new file mode 100644
index 0000000..370d7cc
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts
@@ -0,0 +1,36 @@
+/**
+ * FinOps T1 — capture boundary port injected into the execution coordinator.
+ */
+
+import type { FinOpsCaptureDiagnostic } from "../application/types";
+
+/**
+ * Minimal usage shape accepted at the capture boundary.
+ * Intentionally independent of execution-run domain imports to keep FinOps
+ * application free of execution-run coupling at the type layer when composed.
+ */
+export type FinOpsCaptureUsageInput = {
+  readonly status: "validated" | "unavailable" | "invalid";
+  readonly inputTokens?: number;
+  readonly outputTokens?: number;
+  readonly totalTokens?: number;
+  readonly unit?: string;
+  readonly model?: string | null;
+  readonly providerResponseId?: string | null;
+  readonly reason?: string;
+};
+
+export type FinOpsCaptureRequest = {
+  readonly projectId: string;
+  readonly executionRunId: string;
+  readonly correlationId: string;
+  readonly provider: string;
+  readonly usage: FinOpsCaptureUsageInput;
+  readonly occurredAt: string;
+};
+
+export type FinOpsCapturePort = {
+  readonly captureUsage: (
+    request: FinOpsCaptureRequest,
+  ) => Promise<FinOpsCaptureDiagnostic>;
+};
diff --git a/projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts b/projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts
new file mode 100644
index 0000000..d708edb
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts
@@ -0,0 +1,20 @@
+/**
+ * FinOps T1 — append-only ledger port (insert only; no update/delete).
+ */
+
+import type {
+  FinOpsLedgerInsertResult,
+  FinOpsUsageEvent,
+  FinOpsUsageFingerprint,
+} from "../application/types";
+
+export type FinOpsUsageLedgerPort = {
+  /**
+   * Insert a usage event transactionally with unique dedup_key handling.
+   * Implementations must never UPDATE or DELETE business rows.
+   */
+  readonly insertUsageEvent: (
+    event: FinOpsUsageEvent,
+    fingerprint: FinOpsUsageFingerprint,
+  ) => Promise<FinOpsLedgerInsertResult>;
+};
diff --git a/projects/sfia-studio/app/package.json b/projects/sfia-studio/app/package.json
index 05b6858..57afc28 100644
--- a/projects/sfia-studio/app/package.json
+++ b/projects/sfia-studio/app/package.json
@@ -11,12 +11,16 @@
     "typecheck": "tsc --noEmit",
     "test": "vitest run",
     "test:watch": "vitest",
-    "test:e2e": "playwright test"
+    "test:e2e": "playwright test",
+    "test:db": "vitest run __tests__/oa/finops/postgres",
+    "migrate:up": "node-pg-migrate up --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT",
+    "migrate:down": "node-pg-migrate down --migrations-dir db/migrations --database-url-var DATABASE_URL_DIRECT"
   },
   "dependencies": {
     "ajv": "^6.15.0",
     "next": "^15.3.3",
     "openai": "^6.48.0",
+    "pg": "~8.22.0",
     "react": "^19.1.0",
     "react-dom": "^19.1.0"
   },
@@ -26,12 +30,14 @@
     "@testing-library/react": "^16.3.0",
     "@testing-library/user-event": "^14.6.1",
     "@types/node": "^22.15.21",
+    "@types/pg": "^8.20.4",
     "@types/react": "^19.1.2",
     "@types/react-dom": "^19.1.2",
     "axe-core": "^4.10.3",
     "eslint": "^9.27.0",
     "eslint-config-next": "^15.3.3",
     "jsdom": "^26.1.0",
+    "node-pg-migrate": "^8.0.4",
     "typescript": "^5.8.3",
     "vitest": "^3.1.2"
   }
```

## package-lock validation

Versions résolues dans le lock committé :

- `pg` **8.22.0**
- `node-pg-migrate` **8.0.4**
- `@types/pg` **8.20.4**

Changements lock bornés aux paquets `pg` / `node-pg-migrate` / `@types/pg` et dépendances transitives (`pg-*`, `postgres-*`, etc.). Aucune autre mise à jour intentionnelle.

## Validations

### typecheck / lint / build

- typecheck : **PASS** (exit 0)
- lint : **PASS** (exit 0)
- build : **PASS** (exit 0)

```
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
```

```
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         121 kB
├ ƒ /nouvelle-demande                    10.2 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.65 kB         108 kB
├ ○ /projects/new                        2.62 kB         108 kB
├ ƒ /studio/projects/[id]                2.14 kB         112 kB
├ ○ /studio/projects/new                 4.07 kB         114 kB
├ ○ /synthese                            4.84 kB         120 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

```

### npm test sans DATABASE_URL

Première exécution parallèle : flake UI hors T1 (`createProjectUi.test.tsx`, 2 timeouts) — **non lié FinOps**.
Rejoué isolé : **12/12 PASS**.
Suite complète `vitest run --no-file-parallelism` :

```
 ✓ __tests__/oa/finops/period.test.ts (14 tests) 11ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (14 tests) 11ms
 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 8ms
 ✓ __tests__/oa/finops/t1.capture.unit.test.ts (23 tests) 16ms
 ✓ __tests__/oa/execution-run/transitions.test.ts (8 tests) 5ms
 ✓ __tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts (6 tests) 7ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 14ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 7ms
 ✓ __tests__/oa/execution-run/adapter.events.redaction.test.ts (3 tests) 8ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms
 ✓ __tests__/oa/execution-run/adapter.secrets.opaque.test.ts (2 tests) 8ms
 ✓ __tests__/oa/execution-run/adapter.ai.fake.test.ts (2 tests) 6ms
 ✓ __tests__/oa/execution-run/adapter.git.readonly.test.ts (4 tests) 9ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 4ms
 ✓ __tests__/oa/execution-run/policy.test.ts (9 tests) 6ms
 ✓ __tests__/oa/execution-run/adversarial.providerBoundary.test.ts (17 tests) 4ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 7ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 6ms
 ✓ __tests__/oa/execution-run/evidence.test.ts (6 tests) 3ms

 Test Files  138 passed | 1 skipped (139)
      Tests  1398 passed | 10 skipped (1408)
   Start at  06:45:17
   Duration  174.20s (transform 11.31s, setup 13.46s, collect 34.33s, tests 52.58s, environment 18.22s, prepare 15.36s)

```

Preuve PG skipped : `t1.ledger.integration.test.ts (10 tests | 10 skipped)` · **1398 passed / 10 skipped**.

### migrate:up (DATABASE_URL_DIRECT locale jetable uniquement)

```
CREATE TRIGGER trg_finops_usage_event_no_update
BEFORE UPDATE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
;

CREATE TRIGGER trg_finops_usage_event_no_delete
BEFORE DELETE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
;
INSERT INTO "public"."pgmigrations" (name, run_on) VALUES ('1754500000000_finops-t1-usage-ledger', NOW());


Migrations complete!
```

### test:db (DATABASE_URL locale)

```

> sfia-studio@0.1.0 test:db
> vitest run __tests__/oa/finops/postgres


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests) 312ms

 Test Files  1 passed (1)
      Tests  10 passed (10)
   Start at  06:44:35
   Duration  1.92s (transform 382ms, setup 209ms, collect 363ms, tests 312ms, environment 0ms, prepare 415ms)
```

### governance

```
✔ supersessionReason required with supersedesExecutionContractId (27.525208ms)
✔ status=superseded requires supersessionReason (104.04625ms)
✔ self-supersession is schema-accepted; runtime must reject (documented) (38.919166ms)
✔ catalog documents ConfirmExecutionContract and SupersedeExecutionContract (0.896459ms)
✔ adversarial: authority casing morris/Morris/n3 rejected (24.121166ms)
✔ adversarial: whitespace-only supersessionReason rejected (16.794708ms)
✔ adversarial: unicode supersessionReason with real content accepted (12.657833ms)
✔ adversarial: confirmed without confirmationRef/decisionRefs rejected (13.119208ms)
✔ adversarial: bad schemaVersion rejected (11.8195ms)
✔ adversarial: additionalProperties rejected (11.053708ms)
✔ adversarial: supersedes without xct: prefix rejected (12.123666ms)
✔ catalog CancelExecution dual-context ownership is explicit (0.317583ms)
ℹ tests 73
ℹ suites 0
ℹ pass 73
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 789.47925
```

**73 PASS**.

### CI-A ordering (inchangé ce cycle)

Unit tests **sans** env DB → migrate avec `DATABASE_URL_DIRECT` → `test:db` avec `DATABASE_URL` → governance / secret scan / whitespace / Required Gate.

### Secret / anti-claims

- pas de `neon.tech` dans le package code/CI
- pas d’`OPENAI_API_KEY` assigné
- pas de credential réel
- mentions `cost_*` / Money uniquement anti-claims / assertions négatives
- schéma ledger **sans** colonnes monétaires

## État post-commit

```
?? .tmp-sfia-review/
```

Seul `.tmp-sfia-review/` reste untracked. Aucun fichier package restant.

Branche distante projet : **absente**.
Aucun push projet. Aucune PR.

## Réserves préservées

- FIND-03 Money — OPEN → T2
- FIND-07 — NOTE
- R-TECH-TTL-01 — KEEP-OPEN
- R-TECH-FINOPS-HARD-01 — KEEP-OPEN
- recalibration 15/20/25/30 USD required
- TB-04-04 NOT DONE
- TB-02-05 PRESERVED
- LOT-D1 NOT-CONSUMED
- T2 TO T7 NOT AUTHORIZED
- LOT-D1 TO LOT-D5 NOT AUTHORIZED
- aucun contrôle FinOps actif
- Neon integration NOT DONE
- OpenAI provider-real validation NOT DONE

## Prochaine gate candidate (non consommée)

```
GO GIT PUBLICATION SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
PUSH FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
EXPECTED HEAD 23feee90ecf3315c537a0e39c1393ce3122bb4ac —
PUSH DELIVERY BRANCH ONLY —
NO PR UNTIL EXPLICIT GO
```

## Review Handoff

| Champ | Valeur |
|-------|--------|
| Mode | publish-in-cycle |
| Tip entrant | `e0987c455421723a44d9980efc60f79ca4279672` |
| Blob entrant | `6ea5aae272260d68e6cd608a5c93c78046081645` |
| Commit attendu | `docs(review-handoff): publish Assistant SFIA FinOps T1 publication preparation` |

## Instruction ChatGPT

Relire le handoff distant post-publication ; vérifier SHA commit projet `23feee90ecf3315c537a0e39c1393ce3122bb4ac` et manifest 25 chemins ; **ne pas** autoriser push/PR projet sans nouveau GO Morris.
