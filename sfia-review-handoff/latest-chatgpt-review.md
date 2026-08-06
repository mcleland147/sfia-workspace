# Review Pack Full — FinOps Technical Lot T1 Local CI-A Delivery

## Meta

- Travail Cursor : 2026-08-07 00:36:27 CEST (+0200) / 2026-08-06 22:36:27 UTC
- GO Morris : 2026-08-07 00:05 CEST (+0200) / 2026-08-06 22:05 UTC
- GO exact : `GO DELIVERY SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — IMPLEMENT FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE — USING MORRIS-ARBITRATED EXECUTION PACK — LOCAL POSTGRES AND CI-A ONLY — NO NEON INTEGRATION — NO OPENAI PROVIDER-REAL VALIDATION`
- Cycle : Delivery / implémentation
- Mode : FinOps Technical Lot T1 — Capture and Persistence — Local PostgreSQL and CI-A
- Profil : Critical
- Typologie : EVOL / DELIVERY / FINOPS / PERSISTENCE / DEVOPS / QA / SECURITY
- CKC : Delivery détaillé absent → fallback carte synthétique + méthode v2.6
- Review Pack : Full · Handoff : required / publish-in-cycle

## Coverage

- document 137 complet inclus : yes
- 135/136 byte-identical proof : yes
- diffs utiles complets : yes
- sources T1 nouvelles complètes : yes
- synthesis only : no
- secrets : none

## Local Git Truth initiale

```text
date_cest=2026-08-07 00:15:47 CEST (+0200)
date_utc=2026-08-06 22:15:47 UTC
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
=== remotes ===
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch=implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=fatal: no upstream configured for branch 'implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack'
=== status short ===
?? .tmp-sfia-review/
?? projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
?? projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
=== diff ===
=== cached ===
=== others ===
.tmp-sfia-review/chatgpt-review.md
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
.tmp-sfia-review/t1-delivery/git-truth-initial.txt
.tmp-sfia-review/t1-execution-pack/work-date-cest.txt
.tmp-sfia-review/t1-execution-pack/work-date-utc.txt
projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
=== worktree list (truncated) ===
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
=== branch list delivery ===
  docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing
* implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack
=== ls-remote ===
0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
cec7d15c782ecd59e0a37de5f6a594ff252035ed	refs/heads/sfia/review-handoff
```

## Local Git Truth finale

```text
date_cest=2026-08-07 00:36:27 CEST (+0200)
date_utc=2026-08-06 22:36:27 UTC
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
branch=delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=NONE
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
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/
?? projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
?? projects/sfia-studio/app/db/
?? projects/sfia-studio/app/lib/oa/finops/application/
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/
?? projects/sfia-studio/app/lib/oa/finops/ports/
=== ls-remote main/handoff ===
0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
cec7d15c782ecd59e0a37de5f6a594ff252035ed	refs/heads/sfia/review-handoff
```

## Branche Delivery

`delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a` @ base `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` · no upstream · no push

## Preuve 135 / 136

| Doc | SHA-256 |
|---|---|
| 135 | `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe` |
| 136 | `b2c4c258bc6b6a13d8a88c19a88b52178a4576e4b2c7606f8ba736df6b0cec61` |

## Document 137 — contenu complet

---BEGIN DOCUMENT 137---

# 137 — FinOps Technical Lot T1 — Execution Record (Local PostgreSQL + CI-A)

## 1. Statut et anti-claims

**T1 IMPLEMENTED LOCALLY**

**LOCAL POSTGRES VALIDATED**

**CI-A CONFIGURED LOCALLY**

**NOT COMMITTED**

**NOT PUSHED**

**NO PR**

**NO NEON**

**NO OPENAI PROVIDER-REAL**

**NO CODE COMMITTED TO ORIGIN**

**NO REAL CREDENTIAL RECEIVED OR DISPLAYED**

**T2 TO T7 NOT AUTHORIZED**

**LOT-D1 TO LOT-D5 NOT AUTHORIZED**

**FIND-03 REMAINS OPEN**

**MONEY NOT IMPLEMENTED**

## 2. GO exact et horodatage

```text
GO DELIVERY SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
IMPLEMENT FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
USING MORRIS-ARBITRATED EXECUTION PACK —
LOCAL POSTGRES AND CI-A ONLY —
NO NEON INTEGRATION —
NO OPENAI PROVIDER-REAL VALIDATION
```

| Événement | Horodatage |
|---|---|
| GO Morris | 2026-08-07 00:05 CEST (+0200) / 2026-08-06 22:05 UTC (secondes exactes non inventées) |
| Travail Cursor | 2026-08-07 00:36:27 CEST (+0200) / 2026-08-06 22:36:27 UTC |

## 3. Git Truth

### Initiale

```text
date_cest=2026-08-07 00:15:47 CEST (+0200)
date_utc=2026-08-06 22:15:47 UTC
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
=== remotes ===
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch=implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=fatal: no upstream configured for branch 'implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack'
=== status short ===
?? .tmp-sfia-review/
?? projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
?? projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
=== diff ===
=== cached ===
=== others ===
.tmp-sfia-review/chatgpt-review.md
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
.tmp-sfia-review/t1-delivery/git-truth-initial.txt
.tmp-sfia-review/t1-execution-pack/work-date-cest.txt
.tmp-sfia-review/t1-execution-pack/work-date-utc.txt
projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
=== worktree list (truncated) ===
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
=== branch list delivery ===
  docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing
* implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack
=== ls-remote ===
0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
cec7d15c782ecd59e0a37de5f6a594ff252035ed	refs/heads/sfia/review-handoff
```

### Finale

```text
date_cest=2026-08-07 00:36:27 CEST (+0200)
date_utc=2026-08-06 22:36:27 UTC
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
branch=delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=NONE
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
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/
?? projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
?? projects/sfia-studio/app/db/
?? projects/sfia-studio/app/lib/oa/finops/application/
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/
?? projects/sfia-studio/app/lib/oa/finops/ports/
=== ls-remote main/handoff ===
0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
cec7d15c782ecd59e0a37de5f6a594ff252035ed	refs/heads/sfia/review-handoff
```

## 4. Sources consultées

- template `prompts/templates/sfia-cycle-execution-template.md` (blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`)
- routing guide / operating model SFIA v2.6
- CKC Delivery : absent détaillé → fallback carte synthétique (matrice §8)
- documents 103, 123, 125, 126–134 (read-only)
- documents 135 et 136 (préservés byte-identical)
- handoff entrant tip `cec7d15c782ecd59e0a37de5f6a594ff252035ed` / blob `1842731c077e4e2efac414b1fe5562fc0dbf2370`
- `package.json` / lock, workflow CI, FinOps T0, `coordinateExecutionRun`, adapter AI, composition D2D3

## 5. Documents 135 / 136

| Doc | Lignes | Octets | SHA-256 | Statut |
|---|---|---|---|---|
| 135 | 548 | 23328 | `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe` | byte-identical préservé |
| 136 | 473 | 16953 | `b2c4c258bc6b6a13d8a88c19a88b52178a4576e4b2c7606f8ba736df6b0cec61` | byte-identical préservé |

## 6. Branche Delivery

`delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a`

- HEAD base : `0cdf57a12843891da8b8db2d550cb38c7ba9f60a`
- Upstream : **aucun**
- Push : **aucun**

## 7. Manifest réel des fichiers

- CREATED `projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md` (23328 bytes)
- CREATED `projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md` (16953 bytes)
- CREATED `projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js` (3602 bytes)
- CREATED `projects/sfia-studio/app/lib/oa/finops/application/types.ts` (2808 bytes)
- CREATED `projects/sfia-studio/app/lib/oa/finops/application/identity.ts` (1727 bytes)
- CREATED `projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts` (4650 bytes)
- CREATED `projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts` (2725 bytes)
- CREATED `projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts` (1101 bytes)
- CREATED `projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts` (537 bytes)
- CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts` (1200 bytes)
- CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts` (5782 bytes)
- CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts` (1796 bytes)
- CREATED `projects/sfia-studio/app/lib/oa/finops/infrastructure/openai/mapProviderUsage.ts` (1637 bytes)
- CREATED `projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts` (6188 bytes)
- CREATED `projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts` (4159 bytes)
- CREATED `projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts` (8390 bytes)
- MODIFIED `.github/workflows/sfia-studio-ci.yml`
- MODIFIED `projects/sfia-studio/app/package.json`
- MODIFIED `projects/sfia-studio/app/package-lock.json`
- MODIFIED `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
- MODIFIED `projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts`
- MODIFIED `projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts`
- MODIFIED `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts`
- CREATED `projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md` (this document)

Diffstat :

```text
.github/workflows/sfia-studio-ci.yml               |  24 +
 .../application/coordinateExecutionRun.ts          | 143 +++++-
 .../app/lib/oa/execution-run/domain/types.ts       |  13 +-
 .../ai/platformAiExecutionAdapter.ts               |  10 +-
 .../server/composeExecutionRunD2D3.ts              |   2 +
 projects/sfia-studio/app/package-lock.json         | 499 ++++++++++++++++++++-
 projects/sfia-studio/app/package.json              |   8 +-
 7 files changed, 692 insertions(+), 7 deletions(-)
```

## 8. Versions exactes installées

| Package | Range déclaré | Version résolue |
|---|---|---|
| `pg` | `~8.22.0` | **8.22.0** |
| `node-pg-migrate` | `^8.0.4` (ligne 8) | **8.0.4** |
| `@types/pg` | `^8.20.4` | **8.20.4** |

Node local : v24.16.0 · npm 11.13.0

Scripts ajoutés : `migrate:up`, `migrate:down`, `test:db`

## 9. Architecture implémentée

```text
AI provider success
  → UsageSummary (+ model / providerResponseId / totalTokens optionnels)
  → coordinateExecutionRun (injecte FinOpsCapturePort optionnel)
  → createFinOpsCaptureService (writer unique)
  → buildUsageEvent + identity SHA-256
  → PostgresFinOpsUsageLedger (INSERT … ON CONFLICT, transaction)
  → finops_usage_event (append-only)
```

Lane AI uniquement. Git/Cursor/none → `not_attempted`.

## 10. Frontière de capture

- Port : `FinOpsCapturePort.captureUsage`
- Service : `createFinOpsCaptureService`
- Aucun SQL dans le coordinateur
- Aucun accès DB depuis le domaine T0
- Composition D2D3 accepte `finops?` optionnel ; absent ⇒ `disabled`

## 11. Schéma PostgreSQL exact

Table `finops_usage_event` :

- `event_id` text PK
- `dedup_key` text UNIQUE
- `project_id`, `execution_run_id` text
- `correlation_id` text nullable
- `provider` text · `model` text nullable
- `occurred_at` timestamptz · `period_start` date
- `source_of_truth` · `evidence_class` text + CHECK T0
- `input_tokens` / `output_tokens` / `total_tokens` bigint nullable ≥ 0
- `provider_request_id` · `correction_ref` nullable
- `usage_status` IN (validated, unavailable, invalid)
- `created_at` timestamptz

**Colonnes absentes :** cost, cost_minor, cost_numeric, amount, price, currency, currency_code.

Triggers append-only bloquent UPDATE/DELETE.

## 12. Identité et idempotence

- Contrat `t1-v1`
- Matériau : `version|projectId|executionRunId|provider|providerRequestId||correlationId`
- SHA-256 → `evt_<hex>` / `dedup_<hex>`
- INSERT ON CONFLICT DO NOTHING + relecture fingerprint
- Concurrence : un `created`, les autres `duplicate`
- Conflit fingerprint divergent → `FINOPS_DEDUP_CONFLICT`

## 13. Sémantique fail-open

Succès fournisseur conservé même si FinOps échoue.

Diagnostic `finopsCapture` : `not_attempted` | `disabled` | `created` | `duplicate` | `failed`.

Erreur FinOps séparée, sanitized, `technicalDetailsRedacted: true`.

## 14. Audit minimal T1

Événements : `finops_capture_created` · `finops_capture_duplicate` · `finops_capture_failed`.

Ce n’est **pas** l’observabilité durable T6.

## 15. Migration up/down

Fichier : `projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js`

Validé localement :

1. migrate up — OK
2. migrate down (table vide) — OK
3. migrate up — OK

Down refuse le drop si des lignes existent.

Contenu migration :

```javascript
/**
 * Migration: FinOps T1 usage ledger (append-only, no Money columns).
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_usage_event", {
    event_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    execution_run_id: { type: "text", notNull: true },
    correlation_id: { type: "text" },
    provider: { type: "text", notNull: true },
    model: { type: "text" },
    occurred_at: { type: "timestamptz", notNull: true },
    period_start: { type: "date", notNull: true },
    source_of_truth: { type: "text", notNull: true },
    evidence_class: { type: "text", notNull: true },
    input_tokens: { type: "bigint" },
    output_tokens: { type: "bigint" },
    total_tokens: { type: "bigint" },
    provider_request_id: { type: "text" },
    correction_ref: { type: "text" },
    usage_status: { type: "text", notNull: true },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
  });

  pgm.addConstraint("finops_usage_event", "finops_usage_event_dedup_key_key", {
    unique: ["dedup_key"],
  });

  pgm.addConstraint("finops_usage_event", "finops_usage_event_tokens_nonneg", {
    check:
      "(input_tokens IS NULL OR input_tokens >= 0) AND (output_tokens IS NULL OR output_tokens >= 0) AND (total_tokens IS NULL OR total_tokens >= 0)",
  });

  pgm.addConstraint("finops_usage_event", "finops_usage_event_usage_status_chk", {
    check: "usage_status IN ('validated', 'unavailable', 'invalid')",
  });

  pgm.addConstraint(
    "finops_usage_event",
    "finops_usage_event_source_of_truth_chk",
    {
      check:
        "source_of_truth IN ('BILLED', 'PROVIDER_OBSERVED', 'API_USAGE', 'LOCAL_COUNT', 'PARAMETRIC_ESTIMATE', 'UNKNOWN')",
    },
  );

  pgm.addConstraint(
    "finops_usage_event",
    "finops_usage_event_evidence_class_chk",
    {
      check: "evidence_class IN ('estimated', 'observed', 'billed', 'unknown')",
    },
  );

  pgm.addConstraint("finops_usage_event", "finops_usage_event_period_start_chk", {
    check: "period_start = date_trunc('month', period_start::timestamp)::date",
  });

  // Append-only guard: block UPDATE/DELETE of business rows.
  pgm.sql(`
CREATE OR REPLACE FUNCTION finops_usage_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_usage_event is append-only';
END;
$$;
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_usage_event_no_update
BEFORE UPDATE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_usage_event_no_delete
BEFORE DELETE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
`);
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  // Fail closed if ledger contains events — preserve data by default.
  pgm.sql(`
DO $$
DECLARE
  event_count bigint;
BEGIN
  SELECT COUNT(*) INTO event_count FROM finops_usage_event;
  IF event_count > 0 THEN
    RAISE EXCEPTION 'Refusing to drop finops_usage_event: % row(s) present', event_count;
  END IF;
END $$;
`);

  pgm.sql(`DROP TRIGGER IF EXISTS trg_finops_usage_event_no_delete ON finops_usage_event;`);
  pgm.sql(`DROP TRIGGER IF EXISTS trg_finops_usage_event_no_update ON finops_usage_event;`);
  pgm.sql(`DROP FUNCTION IF EXISTS finops_usage_event_append_only();`);
  pgm.dropTable("finops_usage_event");
};

```

## 16. Configuration PostgreSQL locale

- Docker image test : `postgres:16-alpine` (banc T1, **pas** une décision Neon)
- Conteneur éphémère `sfia-finops-t1-pg`
- Port local `55432`
- Base `sfia_studio_finops_t1`
- Identifiants locaux jetables (non Neon ; non publiés comme secrets)
- Variables distinctes `DATABASE_URL` (runtime) et `DATABASE_URL_DIRECT` (migrations) — même instance locale

## 17. Modification CI-A exacte

Fichier unique : `.github/workflows/sfia-studio-ci.yml`

Ajouts sous job `validate` uniquement :

- `services.postgres` (`postgres:16-alpine` + healthcheck)
- env locales non secrètes `DATABASE_URL` / `DATABASE_URL_DIRECT`
- étapes `migrate:up` puis `test:db`

Préservés : detect, npm ci, typecheck, lint, build, unit tests, governance, secret scan, whitespace, Required Gate, permissions, timeouts, concurrency.

Diff CI :

```diff
diff --git a/.github/workflows/sfia-studio-ci.yml b/.github/workflows/sfia-studio-ci.yml
index 801a875..b1670c3 100644
--- a/.github/workflows/sfia-studio-ci.yml
+++ b/.github/workflows/sfia-studio-ci.yml
@@ -122,6 +122,24 @@ jobs:
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
+    env:
+      # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
+      DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+      DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
     steps:
       - name: Checkout
         uses: actions/checkout@v4
@@ -150,6 +168,12 @@ jobs:
       - name: Unit tests (Vitest)
         run: npm test

+      - name: FinOps T1 migrate up (CI-A)
+        run: npm run migrate:up
+
+      - name: FinOps T1 PostgreSQL integration tests (CI-A)
+        run: npm run test:db
+
       - name: Modeled governance tests
         working-directory: projects/sfia-studio
         run: |

```

## 18. Tests et résultats

| Suite | Résultat |
|---|---|
| FinOps unit + intégration PG | **77 passed** |
| test:db | **8 passed** |
| execution-run (dont F07) | **passed** |
| typecheck | **passed** |
| lint | **passed** |
| build | **passed** |
| governance modeled | **passed** |
| Full unit suite (`vitest --no-file-parallelism`) | **1385 passed** · 8 skipped (PG sans env) |
| Full unit parallèle | flaky hors T1 (UI timeouts) — non lié FinOps ; passe isolé et en série |

Baseline note : flake UI préexistant sous charge concurrente.

## 19. Sécurité / RGPD

- SQL paramétré
- erreurs sanitized
- pas de payload OpenAI brut
- minimisation des champs ledger
- aucun secret Neon/OpenAI
- scan ciblé : pas de credential réel dans artefacts T1

## 20. Performance / GreenOps

- pool borné (max 5)
- timeouts connexion
- Postgres éphémère sans volume
- CI-A isolée par run

## 21. Réserves

- FIND-03 Money OPEN → T2
- FIND-07 NOTE
- R-TECH-TTL-01 KEEP-OPEN
- R-TECH-FINOPS-HARD-01 KEEP-OPEN
- recalibration 15/20/25/30 USD required
- TB-04-04 NOT DONE
- TB-02-05 PRESERVED
- LOT-D1 NOT-CONSUMED
- aucun contrôle FinOps actif (pas d’enforcement)

## 22. Limitations

- Neon non intégré
- OpenAI provider-real non validé
- Money absent
- retry durable / reconciliation hors T1
- composition D2D3 n’active pas FinOps par défaut (injection explicite)
- image PG 16 = banc de test, pas version Neon figée

## 23. Absence Neon / OpenAI réel

**NO NEON INTEGRATION**

**NO OPENAI PROVIDER-REAL VALIDATION**

## 24. Absence credential

Aucun credential réel demandé, lu ou affiché.

Identifiants locaux/CI jetables uniquement.

## 25. Absence commit / push

Aucun `git add` / `git commit` / `git push` projet.

Aucun PR.

## 26. Verdict

FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE IMPLEMENTED LOCALLY —
DOCUMENT 135 PRESERVED BYTE-IDENTICAL —
DOCUMENT 136 PRESERVED BYTE-IDENTICAL —
DOCUMENT 137 CREATED WITH COMPLETE EXECUTION RECORD —
PG 8.22.0 INSTALLED —
NODE-PG-MIGRATE 8.0.4 INSTALLED —
POSTGRESQL LOCAL EPHEMERAL INSTANCE VALIDATED —
CI-A POSTGRES SERVICE CONTAINER CONFIGURED LOCALLY —
T1 USAGE LEDGER CREATED WITHOUT COST OR CURRENCY —
APPEND-ONLY CONTRACT IMPLEMENTED —
POST-PROVIDER CAPTURE BOUNDARY IMPLEMENTED —
SINGLE AUTHORITATIVE WRITER IMPLEMENTED —
DETERMINISTIC EVENT ID IMPLEMENTED —
DETERMINISTIC DEDUP KEY IMPLEMENTED —
TRANSACTIONAL IDEMPOTENCE IMPLEMENTED —
CONCURRENT DUPLICATE HANDLING VALIDATED —
MULTI-INSTANCE AND RESTART-SAFE BEHAVIOR VALIDATED —
FAIL-OPEN USER RUN SEMANTICS IMPLEMENTED —
SEPARATE SANITIZED FINOPS ERROR IMPLEMENTED —
MINIMAL AUDIT EVENT IMPLEMENTED —
MIGRATION UP VALIDATED —
MIGRATION DOWN ON EMPTY DATABASE VALIDATED —
UNIT TESTS PASSED —
POSTGRESQL INTEGRATION TESTS PASSED —
TYPECHECK PASSED —
LINT PASSED —
FULL UNIT SUITE PASSED —
BUILD PASSED —
MODELED GOVERNANCE TESTS PASSED —
SECRET SCAN PASSED —
TRAILING WHITESPACE CHECK PASSED —
NO MONEY OR CURRENCY IMPLEMENTED —
FIND-03 REMAINS OPEN FOR T2 —
NO NEON INTEGRATION —
NO OPENAI PROVIDER-REAL VALIDATION —
NO REAL CREDENTIAL REQUESTED OR DISPLAYED —
NO OTHER WORKFLOW MODIFIED —
NO PROJECT COMMIT OR PUSH —
NO PR CREATED —
DOCUMENT 103 UNCHANGED —
FIND-07 NOTE PRESERVED —
R-TECH-TTL-01 KEEP-OPEN —
R-TECH-FINOPS-HARD-01 KEEP-OPEN —
TB-04-04 NOT DONE —
TB-02-05 PRESERVED —
T2 TO T7 NOT AUTHORIZED —
LOT-D1 TO LOT-D5 NOT AUTHORIZED —
LOT-D1 DELIVERY NOT-CONSUMED —
READY FOR CHATGPT DELIVERY VALIDATION —
NOT YET AUTHORIZED FOR GIT PUBLICATION OR PR

## 27. Prochaine gate candidate

```text
GO PUBLICATION PREPARATION SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
LOCAL CI-A PACKAGE —
AFTER CHATGPT DELIVERY VALIDATION —
NO PUSH UNTIL EXPLICIT GO —
NO PR UNTIL EXPLICIT GO
```

Candidate uniquement — non consommée.

---

**T1 LOCAL CI-A DELIVERY COMPLETE DOCUMENTARILY AND TECHNICALLY — NOT PUBLISHED**

---END DOCUMENT 137---

## Fichiers créés / modifiés

Voir §7 du document 137.

## Versions packages

pg **8.22.0** · node-pg-migrate **8.0.4** · @types/pg **8.20.4**

## Sources T1 nouvelles (contenu complet)

### `projects/sfia-studio/app/lib/oa/finops/application/types.ts`

```
/**
 * FinOps T1 — capture / ledger event types (usage-only; no Money).
 */

import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "../domain/types";

export const FINOPS_USAGE_IDENTITY_CONTRACT_VERSION = "t1-v1" as const;

export type FinOpsUsageStatus = "validated" | "unavailable" | "invalid";

export type FinOpsUsageEvent = {
  readonly eventId: string;
  readonly dedupKey: string;
  readonly projectId: string;
  readonly executionRunId: string;
  readonly correlationId: string | null;
  readonly provider: string;
  readonly model: string | null;
  readonly occurredAt: string;
  /** UTC calendar month start as YYYY-MM-DD */
  readonly periodStart: string;
  readonly sourceOfTruth: FinOpsSourceOfTruth;
  readonly evidenceClass: FinOpsCostEvidenceClass;
  readonly inputTokens: number | null;
  readonly outputTokens: number | null;
  readonly totalTokens: number | null;
  readonly providerRequestId: string | null;
  readonly correctionRef: string | null;
  readonly usageStatus: FinOpsUsageStatus;
};

/** Canonical fingerprint fields used for conflict detection (no secrets, no prompt). */
export type FinOpsUsageFingerprint = {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly provider: string;
  readonly providerRequestId: string | null;
  readonly correlationId: string | null;
  readonly usageStatus: FinOpsUsageStatus;
  readonly inputTokens: number | null;
  readonly outputTokens: number | null;
  readonly totalTokens: number | null;
  readonly model: string | null;
  readonly sourceOfTruth: FinOpsSourceOfTruth;
  readonly evidenceClass: FinOpsCostEvidenceClass;
};

export type SanitizedFinOpsCaptureError = {
  readonly code:
    | "FINOPS_CAPTURE_FAILED"
    | "FINOPS_DEDUP_CONFLICT"
    | "FINOPS_VALIDATION_FAILED"
    | "FINOPS_DB_UNAVAILABLE";
  readonly message: string;
  readonly retryable: boolean;
  readonly technicalDetailsRedacted: true;
};

export type FinOpsCaptureDiagnostic =
  | {
      readonly status: "not_attempted";
      readonly reason: string;
    }
  | {
      readonly status: "disabled";
      readonly reason: string;
    }
  | {
      readonly status: "created";
      readonly eventId: string;
      readonly dedupKey: string;
    }
  | {
      readonly status: "duplicate";
      readonly eventId: string;
      readonly dedupKey: string;
    }
  | {
      readonly status: "failed";
      readonly error: SanitizedFinOpsCaptureError;
    };

export type FinOpsLedgerInsertResult =
  | { readonly outcome: "created"; readonly eventId: string }
  | { readonly outcome: "duplicate"; readonly eventId: string }
  | {
      readonly outcome: "conflict";
      readonly error: SanitizedFinOpsCaptureError;
    }
  | {
      readonly outcome: "failed";
      readonly error: SanitizedFinOpsCaptureError;
    };
```

### `projects/sfia-studio/app/lib/oa/finops/application/identity.ts`

```
/**
 * FinOps T1 — deterministic event_id / dedup_key (SHA-256, versioned material).
 * No Math.random, no UUID, no wall-clock, no cost, no secrets, no prompt content.
 */

import { createHash } from "node:crypto";
import { FINOPS_USAGE_IDENTITY_CONTRACT_VERSION } from "./types";

export type FinOpsIdentityMaterial = {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly provider: string;
  /** Prefer provider response id when present; else stable correlationId. */
  readonly providerRequestId: string | null;
  readonly correlationId: string | null;
};

function normalizePart(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  return value.trim();
}

/**
 * Stable material string for identity hashing.
 * Order and separators are part of the contract version.
 */
export function buildIdentityMaterial(input: FinOpsIdentityMaterial): string {
  const responseOrCorrelation =
    normalizePart(input.providerRequestId) ||
    normalizePart(input.correlationId);
  return [
    FINOPS_USAGE_IDENTITY_CONTRACT_VERSION,
    normalizePart(input.projectId),
    normalizePart(input.executionRunId),
    normalizePart(input.provider),
    responseOrCorrelation,
  ].join("|");
}

export function sha256Hex(material: string): string {
  return createHash("sha256").update(material, "utf8").digest("hex");
}

export function deriveFinOpsIdentity(input: FinOpsIdentityMaterial): {
  readonly eventId: string;
  readonly dedupKey: string;
  readonly material: string;
} {
  const material = buildIdentityMaterial(input);
  const digest = sha256Hex(material);
  return {
    eventId: `evt_${digest}`,
    dedupKey: `dedup_${digest}`,
    material,
  };
}
```

### `projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts`

```
/**
 * FinOps T1 — build a canonical usage ledger event (no Money).
 */

import {
  classifyCostEvidenceFromSource,
} from "../domain/costEvidence";
import { computeUtcMonthPeriod } from "../domain/period";
import type { FinOpsSourceOfTruth } from "../domain/types";
import { deriveFinOpsIdentity } from "./identity";
import type {
  FinOpsUsageEvent,
  FinOpsUsageFingerprint,
  FinOpsUsageStatus,
  SanitizedFinOpsCaptureError,
} from "./types";
import type { FinOpsCaptureUsageInput } from "../ports/finopsCapturePort";

function periodStartDate(occurredAt: string): string {
  const period = computeUtcMonthPeriod(occurredAt);
  // period.periodStart is ISO instant; store DATE as YYYY-MM-DD UTC.
  return period.periodStart.slice(0, 10);
}

function nonNegativeToken(
  value: number | undefined,
): number | null | "invalid" {
  if (value === undefined) return null;
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return "invalid";
  }
  if (!Number.isInteger(value)) return "invalid";
  return value;
}

export type BuildUsageEventResult =
  | {
      readonly ok: true;
      readonly event: FinOpsUsageEvent;
      readonly fingerprint: FinOpsUsageFingerprint;
    }
  | {
      readonly ok: false;
      readonly error: SanitizedFinOpsCaptureError;
    };

export function buildUsageEvent(input: {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly correlationId: string;
  readonly provider: string;
  readonly usage: FinOpsCaptureUsageInput;
  readonly occurredAt: string;
}): BuildUsageEventResult {
  const projectId = input.projectId.trim();
  const executionRunId = input.executionRunId.trim();
  const provider = input.provider.trim();
  const correlationId = input.correlationId.trim();
  if (!projectId || !executionRunId || !provider || !correlationId) {
    return {
      ok: false,
      error: {
        code: "FINOPS_VALIDATION_FAILED",
        message: "FinOps capture rejected invalid identity fields",
        retryable: false,
        technicalDetailsRedacted: true,
      },
    };
  }

  let usageStatus: FinOpsUsageStatus;
  let sourceOfTruth: FinOpsSourceOfTruth;
  let inputTokens: number | null = null;
  let outputTokens: number | null = null;
  let totalTokens: number | null = null;

  if (input.usage.status === "validated") {
    const i = nonNegativeToken(input.usage.inputTokens);
    const o = nonNegativeToken(input.usage.outputTokens);
    const t = nonNegativeToken(input.usage.totalTokens);
    if (i === "invalid" || o === "invalid" || t === "invalid") {
      usageStatus = "invalid";
      sourceOfTruth = "UNKNOWN";
      inputTokens = null;
      outputTokens = null;
      totalTokens = null;
    } else {
      usageStatus = "validated";
      sourceOfTruth = "API_USAGE";
      inputTokens = i;
      outputTokens = o;
      totalTokens =
        t ??
        (i !== null && o !== null ? i + o : i !== null ? i : o !== null ? o : null);
    }
  } else if (input.usage.status === "unavailable") {
    usageStatus = "unavailable";
    sourceOfTruth = "UNKNOWN";
  } else {
    usageStatus = "invalid";
    sourceOfTruth = "UNKNOWN";
  }

  const evidenceClass = classifyCostEvidenceFromSource(sourceOfTruth);
  const model =
    typeof input.usage.model === "string" && input.usage.model.trim()
      ? input.usage.model.trim()
      : null;
  const providerRequestId =
    typeof input.usage.providerResponseId === "string" &&
    input.usage.providerResponseId.trim()
      ? input.usage.providerResponseId.trim()
      : null;

  const identity = deriveFinOpsIdentity({
    projectId,
    executionRunId,
    provider,
    providerRequestId,
    correlationId,
  });

  const event: FinOpsUsageEvent = {
    eventId: identity.eventId,
    dedupKey: identity.dedupKey,
    projectId,
    executionRunId,
    correlationId,
    provider,
    model,
    occurredAt: input.occurredAt,
    periodStart: periodStartDate(input.occurredAt),
    sourceOfTruth,
    evidenceClass,
    inputTokens,
    outputTokens,
    totalTokens,
    providerRequestId,
    correctionRef: null,
    usageStatus,
  };

  const fingerprint: FinOpsUsageFingerprint = {
    projectId: event.projectId,
    executionRunId: event.executionRunId,
    provider: event.provider,
    providerRequestId: event.providerRequestId,
    correlationId: event.correlationId,
    usageStatus: event.usageStatus,
    inputTokens: event.inputTokens,
    outputTokens: event.outputTokens,
    totalTokens: event.totalTokens,
    model: event.model,
    sourceOfTruth: event.sourceOfTruth,
    evidenceClass: event.evidenceClass,
  };

  return { ok: true, event, fingerprint };
}
```

### `projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts`

```
/**
 * FinOps T1 — single authoritative capture writer (application boundary).
 */

import type {
  FinOpsCapturePort,
  FinOpsCaptureRequest,
} from "../ports/finopsCapturePort";
import type { FinOpsUsageLedgerPort } from "../ports/finopsUsageLedgerPort";
import { buildUsageEvent } from "./buildUsageEvent";
import type { FinOpsCaptureDiagnostic } from "./types";

export type FinOpsAuditEmitter = {
  readonly emit: (event: {
    readonly type:
      | "finops_capture_created"
      | "finops_capture_duplicate"
      | "finops_capture_failed";
    readonly detail: Readonly<Record<string, unknown>>;
  }) => void;
};

export function createFinOpsCaptureService(deps: {
  readonly ledger: FinOpsUsageLedgerPort;
  readonly audit?: FinOpsAuditEmitter;
}): FinOpsCapturePort {
  return {
    async captureUsage(
      request: FinOpsCaptureRequest,
    ): Promise<FinOpsCaptureDiagnostic> {
      const built = buildUsageEvent(request);
      if (!built.ok) {
        deps.audit?.emit({
          type: "finops_capture_failed",
          detail: {
            code: built.error.code,
            retryable: built.error.retryable,
          },
        });
        return { status: "failed", error: built.error };
      }

      try {
        const result = await deps.ledger.insertUsageEvent(
          built.event,
          built.fingerprint,
        );
        if (result.outcome === "created") {
          deps.audit?.emit({
            type: "finops_capture_created",
            detail: { eventId: result.eventId },
          });
          return {
            status: "created",
            eventId: result.eventId,
            dedupKey: built.event.dedupKey,
          };
        }
        if (result.outcome === "duplicate") {
          deps.audit?.emit({
            type: "finops_capture_duplicate",
            detail: { eventId: result.eventId },
          });
          return {
            status: "duplicate",
            eventId: result.eventId,
            dedupKey: built.event.dedupKey,
          };
        }
        deps.audit?.emit({
          type: "finops_capture_failed",
          detail: {
            code: result.error.code,
            retryable: result.error.retryable,
          },
        });
        return { status: "failed", error: result.error };
      } catch {
        const error = {
          code: "FINOPS_CAPTURE_FAILED" as const,
          message: "FinOps capture failed",
          retryable: true,
          technicalDetailsRedacted: true as const,
        };
        deps.audit?.emit({
          type: "finops_capture_failed",
          detail: { code: error.code, retryable: error.retryable },
        });
        return { status: "failed", error };
      }
    },
  };
}
```

### `projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts`

```
/**
 * FinOps T1 — capture boundary port injected into the execution coordinator.
 */

import type { FinOpsCaptureDiagnostic } from "../application/types";

/**
 * Minimal usage shape accepted at the capture boundary.
 * Intentionally independent of execution-run domain imports to keep FinOps
 * application free of execution-run coupling at the type layer when composed.
 */
export type FinOpsCaptureUsageInput = {
  readonly status: "validated" | "unavailable" | "invalid";
  readonly inputTokens?: number;
  readonly outputTokens?: number;
  readonly totalTokens?: number;
  readonly unit?: string;
  readonly model?: string | null;
  readonly providerResponseId?: string | null;
  readonly reason?: string;
};

export type FinOpsCaptureRequest = {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly correlationId: string;
  readonly provider: string;
  readonly usage: FinOpsCaptureUsageInput;
  readonly occurredAt: string;
};

export type FinOpsCapturePort = {
  readonly captureUsage: (
    request: FinOpsCaptureRequest,
  ) => Promise<FinOpsCaptureDiagnostic>;
};
```

### `projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts`

```
/**
 * FinOps T1 — append-only ledger port (insert only; no update/delete).
 */

import type {
  FinOpsLedgerInsertResult,
  FinOpsUsageEvent,
  FinOpsUsageFingerprint,
} from "../application/types";

export type FinOpsUsageLedgerPort = {
  /**
   * Insert a usage event transactionally with unique dedup_key handling.
   * Implementations must never UPDATE or DELETE business rows.
   */
  readonly insertUsageEvent: (
    event: FinOpsUsageEvent,
    fingerprint: FinOpsUsageFingerprint,
  ) => Promise<FinOpsLedgerInsertResult>;
};
```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts`

```
/**
 * FinOps T1 — pg.Pool factory for runtime (pooled) connections.
 * Never logs or throws the connection string.
 */

import { Pool, type PoolConfig } from "pg";

export type FinOpsPoolOptions = {
  readonly connectionString: string;
  readonly max?: number;
  readonly connectionTimeoutMillis?: number;
  readonly idleTimeoutMillis?: number;
  readonly statementTimeoutMillis?: number;
};

export function createFinOpsPool(options: FinOpsPoolOptions): Pool {
  if (!options.connectionString || !options.connectionString.trim()) {
    throw new Error("DATABASE_URL required for FinOps pool");
  }
  const config: PoolConfig = {
    connectionString: options.connectionString,
    max: options.max ?? 5,
    connectionTimeoutMillis: options.connectionTimeoutMillis ?? 5_000,
    idleTimeoutMillis: options.idleTimeoutMillis ?? 10_000,
    ssl: false,
  };
  const pool = new Pool(config);
  if (options.statementTimeoutMillis) {
    pool.on("connect", (client) => {
      void client.query(
        `SET statement_timeout = ${Number(options.statementTimeoutMillis)}`,
      );
    });
  }
  return pool;
}

export async function closeFinOpsPool(pool: Pool): Promise<void> {
  await pool.end();
}
```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts`

```
/**
 * FinOps T1 — PostgreSQL append-only usage ledger adapter.
 */

import type { Pool, PoolClient } from "pg";
import type {
  FinOpsLedgerInsertResult,
  FinOpsUsageEvent,
  FinOpsUsageFingerprint,
} from "../../application/types";
import type { FinOpsUsageLedgerPort } from "../../ports/finopsUsageLedgerPort";
import { sanitizeDbError } from "./sanitizeDbError";

const INSERT_SQL = `
INSERT INTO finops_usage_event (
  event_id,
  dedup_key,
  project_id,
  execution_run_id,
  correlation_id,
  provider,
  model,
  occurred_at,
  period_start,
  source_of_truth,
  evidence_class,
  input_tokens,
  output_tokens,
  total_tokens,
  provider_request_id,
  correction_ref,
  usage_status,
  created_at
) VALUES (
  $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,NOW()
)
ON CONFLICT (dedup_key) DO NOTHING
RETURNING event_id
`;

const SELECT_BY_DEDUP_SQL = `
SELECT
  event_id,
  project_id,
  execution_run_id,
  correlation_id,
  provider,
  model,
  usage_status,
  input_tokens,
  output_tokens,
  total_tokens,
  provider_request_id,
  source_of_truth,
  evidence_class
FROM finops_usage_event
WHERE dedup_key = $1
LIMIT 1
`;

function fingerprintEqual(
  existing: FinOpsUsageFingerprint,
  candidate: FinOpsUsageFingerprint,
): boolean {
  return (
    existing.projectId === candidate.projectId &&
    existing.executionRunId === candidate.executionRunId &&
    existing.provider === candidate.provider &&
    existing.providerRequestId === candidate.providerRequestId &&
    existing.correlationId === candidate.correlationId &&
    existing.usageStatus === candidate.usageStatus &&
    existing.inputTokens === candidate.inputTokens &&
    existing.outputTokens === candidate.outputTokens &&
    existing.totalTokens === candidate.totalTokens &&
    existing.model === candidate.model &&
    existing.sourceOfTruth === candidate.sourceOfTruth &&
    existing.evidenceClass === candidate.evidenceClass
  );
}

function rowToFingerprint(row: Record<string, unknown>): FinOpsUsageFingerprint {
  return {
    projectId: String(row.project_id),
    executionRunId: String(row.execution_run_id),
    provider: String(row.provider),
    providerRequestId:
      row.provider_request_id === null || row.provider_request_id === undefined
        ? null
        : String(row.provider_request_id),
    correlationId:
      row.correlation_id === null || row.correlation_id === undefined
        ? null
        : String(row.correlation_id),
    usageStatus: row.usage_status as FinOpsUsageFingerprint["usageStatus"],
    inputTokens:
      row.input_tokens === null || row.input_tokens === undefined
        ? null
        : Number(row.input_tokens),
    outputTokens:
      row.output_tokens === null || row.output_tokens === undefined
        ? null
        : Number(row.output_tokens),
    totalTokens:
      row.total_tokens === null || row.total_tokens === undefined
        ? null
        : Number(row.total_tokens),
    model:
      row.model === null || row.model === undefined ? null : String(row.model),
    sourceOfTruth: row.source_of_truth as FinOpsUsageFingerprint["sourceOfTruth"],
    evidenceClass: row.evidence_class as FinOpsUsageFingerprint["evidenceClass"],
  };
}

export function createPostgresFinOpsUsageLedger(
  pool: Pool,
): FinOpsUsageLedgerPort {
  return {
    async insertUsageEvent(
      event: FinOpsUsageEvent,
      fingerprint: FinOpsUsageFingerprint,
    ): Promise<FinOpsLedgerInsertResult> {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        await client.query("BEGIN");
        const inserted = await client.query<{ event_id: string }>(INSERT_SQL, [
          event.eventId,
          event.dedupKey,
          event.projectId,
          event.executionRunId,
          event.correlationId,
          event.provider,
          event.model,
          event.occurredAt,
          event.periodStart,
          event.sourceOfTruth,
          event.evidenceClass,
          event.inputTokens,
          event.outputTokens,
          event.totalTokens,
          event.providerRequestId,
          event.correctionRef,
          event.usageStatus,
        ]);

        if (inserted.rowCount === 1) {
          await client.query("COMMIT");
          return { outcome: "created", eventId: event.eventId };
        }

        const existing = await client.query(SELECT_BY_DEDUP_SQL, [
          event.dedupKey,
        ]);
        if (existing.rowCount !== 1) {
          await client.query("ROLLBACK");
          return {
            outcome: "failed",
            error: {
              code: "FINOPS_CAPTURE_FAILED",
              message: "FinOps capture failed",
              retryable: true,
              technicalDetailsRedacted: true,
            },
          };
        }

        const existingFp = rowToFingerprint(
          existing.rows[0] as Record<string, unknown>,
        );
        if (!fingerprintEqual(existingFp, fingerprint)) {
          await client.query("ROLLBACK");
          return {
            outcome: "conflict",
            error: {
              code: "FINOPS_DEDUP_CONFLICT",
              message: "FinOps dedup key conflict with divergent payload",
              retryable: false,
              technicalDetailsRedacted: true,
            },
          };
        }

        await client.query("COMMIT");
        return {
          outcome: "duplicate",
          eventId: String(existing.rows[0].event_id),
        };
      } catch (error) {
        if (client) {
          try {
            await client.query("ROLLBACK");
          } catch {
            // ignore rollback errors
          }
        }
        return { outcome: "failed", error: sanitizeDbError(error) };
      } finally {
        client?.release();
      }
    },
  };
}
```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts`

```
/**
 * FinOps T1 — sanitize PostgreSQL / pg errors (never expose host, SQL, secrets).
 */

import type { SanitizedFinOpsCaptureError } from "../../application/types";

const TRANSIENT_CODES = new Set([
  "40001", // serialization_failure
  "40P01", // deadlock_detected
  "57P01", // admin_shutdown
  "57P02", // crash_shutdown
  "57P03", // cannot_connect_now
  "08000",
  "08003",
  "08006",
  "08001",
  "08004",
]);

export function sanitizeDbError(error: unknown): SanitizedFinOpsCaptureError {
  const code =
    error &&
    typeof error === "object" &&
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
      ? (error as { code: string }).code
      : undefined;

  const retryable = code !== undefined && TRANSIENT_CODES.has(code);

  if (code === "23505") {
    // Unique violation should be handled by ON CONFLICT path; treat as capture fail if leaked.
    return {
      code: "FINOPS_CAPTURE_FAILED",
      message: "FinOps capture failed",
      retryable: false,
      technicalDetailsRedacted: true,
    };
  }

  if (code === "23514") {
    return {
      code: "FINOPS_VALIDATION_FAILED",
      message: "FinOps ledger rejected invalid usage values",
      retryable: false,
      technicalDetailsRedacted: true,
    };
  }

  return {
    code: retryable ? "FINOPS_DB_UNAVAILABLE" : "FINOPS_CAPTURE_FAILED",
    message: "FinOps capture failed",
    retryable,
    technicalDetailsRedacted: true,
  };
}

export function assertNoSecretLeak(message: string): void {
  const lower = message.toLowerCase();
  if (
    lower.includes("password") ||
    lower.includes("postgres://") ||
    lower.includes("postgresql://") ||
    /:\d{2,5}\//.test(message)
  ) {
    throw new Error("Sanitized FinOps error must not leak connection details");
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/openai/mapProviderUsage.ts`

```
/**
 * FinOps T1 — map ProviderUsage-shaped data into capture usage input.
 * Lives under infrastructure/openai mapping path; does not call OpenAI.
 */

import type { FinOpsCaptureUsageInput } from "../../ports/finopsCapturePort";

export type ProviderUsageLike = {
  readonly inputTokens: number | null;
  readonly outputTokens: number | null;
  readonly totalTokens: number | null;
  readonly model: string | null;
  readonly providerResponseId: string | null;
};

export function mapProviderUsageToCaptureInput(
  usage: ProviderUsageLike | null | undefined,
): FinOpsCaptureUsageInput {
  if (!usage) {
    return { status: "unavailable", reason: "provider_usage_missing" };
  }
  const hasTokens =
    usage.inputTokens != null || usage.outputTokens != null || usage.totalTokens != null;
  if (!hasTokens) {
    return {
      status: "unavailable",
      reason: "provider_usage_missing",
      model: usage.model,
      providerResponseId: usage.providerResponseId,
    };
  }
  for (const value of [usage.inputTokens, usage.outputTokens, usage.totalTokens]) {
    if (value != null && (typeof value !== "number" || !Number.isFinite(value) || value < 0)) {
      return {
        status: "invalid",
        reason: "provider_usage_invalid",
        model: usage.model,
        providerResponseId: usage.providerResponseId,
      };
    }
  }
  return {
    status: "validated",
    inputTokens: usage.inputTokens ?? undefined,
    outputTokens: usage.outputTokens ?? undefined,
    totalTokens: usage.totalTokens ?? undefined,
    unit: "tokens",
    model: usage.model,
    providerResponseId: usage.providerResponseId,
  };
}
```

### `projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js`

```
/**
 * Migration: FinOps T1 usage ledger (append-only, no Money columns).
 *
 * @type {import('node-pg-migrate').MigrationBuilder}
 */

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("finops_usage_event", {
    event_id: { type: "text", primaryKey: true, notNull: true },
    dedup_key: { type: "text", notNull: true },
    project_id: { type: "text", notNull: true },
    execution_run_id: { type: "text", notNull: true },
    correlation_id: { type: "text" },
    provider: { type: "text", notNull: true },
    model: { type: "text" },
    occurred_at: { type: "timestamptz", notNull: true },
    period_start: { type: "date", notNull: true },
    source_of_truth: { type: "text", notNull: true },
    evidence_class: { type: "text", notNull: true },
    input_tokens: { type: "bigint" },
    output_tokens: { type: "bigint" },
    total_tokens: { type: "bigint" },
    provider_request_id: { type: "text" },
    correction_ref: { type: "text" },
    usage_status: { type: "text", notNull: true },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("NOW()"),
    },
  });

  pgm.addConstraint("finops_usage_event", "finops_usage_event_dedup_key_key", {
    unique: ["dedup_key"],
  });

  pgm.addConstraint("finops_usage_event", "finops_usage_event_tokens_nonneg", {
    check:
      "(input_tokens IS NULL OR input_tokens >= 0) AND (output_tokens IS NULL OR output_tokens >= 0) AND (total_tokens IS NULL OR total_tokens >= 0)",
  });

  pgm.addConstraint("finops_usage_event", "finops_usage_event_usage_status_chk", {
    check: "usage_status IN ('validated', 'unavailable', 'invalid')",
  });

  pgm.addConstraint(
    "finops_usage_event",
    "finops_usage_event_source_of_truth_chk",
    {
      check:
        "source_of_truth IN ('BILLED', 'PROVIDER_OBSERVED', 'API_USAGE', 'LOCAL_COUNT', 'PARAMETRIC_ESTIMATE', 'UNKNOWN')",
    },
  );

  pgm.addConstraint(
    "finops_usage_event",
    "finops_usage_event_evidence_class_chk",
    {
      check: "evidence_class IN ('estimated', 'observed', 'billed', 'unknown')",
    },
  );

  pgm.addConstraint("finops_usage_event", "finops_usage_event_period_start_chk", {
    check: "period_start = date_trunc('month', period_start::timestamp)::date",
  });

  // Append-only guard: block UPDATE/DELETE of business rows.
  pgm.sql(`
CREATE OR REPLACE FUNCTION finops_usage_event_append_only()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  RAISE EXCEPTION 'finops_usage_event is append-only';
END;
$$;
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_usage_event_no_update
BEFORE UPDATE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
`);

  pgm.sql(`
CREATE TRIGGER trg_finops_usage_event_no_delete
BEFORE DELETE ON finops_usage_event
FOR EACH ROW
EXECUTE FUNCTION finops_usage_event_append_only();
`);
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  // Fail closed if ledger contains events — preserve data by default.
  pgm.sql(`
DO $$
DECLARE
  event_count bigint;
BEGIN
  SELECT COUNT(*) INTO event_count FROM finops_usage_event;
  IF event_count > 0 THEN
    RAISE EXCEPTION 'Refusing to drop finops_usage_event: % row(s) present', event_count;
  END IF;
END $$;
`);

  pgm.sql(`DROP TRIGGER IF EXISTS trg_finops_usage_event_no_delete ON finops_usage_event;`);
  pgm.sql(`DROP TRIGGER IF EXISTS trg_finops_usage_event_no_update ON finops_usage_event;`);
  pgm.sql(`DROP FUNCTION IF EXISTS finops_usage_event_append_only();`);
  pgm.dropTable("finops_usage_event");
};
```

## Diff code modifié (hors lockfile)

```diff
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

## Diff workflow CI-A

```diff
diff --git a/.github/workflows/sfia-studio-ci.yml b/.github/workflows/sfia-studio-ci.yml
index 801a875..b1670c3 100644
--- a/.github/workflows/sfia-studio-ci.yml
+++ b/.github/workflows/sfia-studio-ci.yml
@@ -122,6 +122,24 @@ jobs:
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
+    env:
+      # Local CI-A ephemeral Postgres only — not Neon; not a real secret.
+      DATABASE_URL: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
+      DATABASE_URL_DIRECT: postgres://sfia_ci:sfia_ci_local_only@localhost:5432/sfia_studio_finops_t1
     steps:
       - name: Checkout
         uses: actions/checkout@v4
@@ -150,6 +168,12 @@ jobs:
       - name: Unit tests (Vitest)
         run: npm test

+      - name: FinOps T1 migrate up (CI-A)
+        run: npm run migrate:up
+
+      - name: FinOps T1 PostgreSQL integration tests (CI-A)
+        run: npm run test:db
+
       - name: Modeled governance tests
         working-directory: projects/sfia-studio
         run: |
```

## Commandes et résultats (synthèse exploitable)

- npm ci baseline + typecheck/lint/finops OK
- npm install pg@~8.22.0 + node-pg-migrate@^8 + @types/pg
- docker postgres:16-alpine :55432 · migrate up/down/up OK
- FinOps tests 77 passed · test:db 8 passed
- typecheck/lint/build/governance OK
- full suite serial : 1385 passed / 8 skipped
- concurrent full suite : flakes UI hors T1 (passent isolés)

## Preuves clés

- PostgreSQL local éphémère validé
- migration up/down empty OK
- concurrence idempotente OK
- fail-open coordinateur OK
- absence Money / Neon / OpenAI réel / credential réel
- aucun commit/push projet

## Réserves

FIND-03 OPEN · FIND-07 NOTE · R-TECH-TTL-01 / R-TECH-FINOPS-HARD-01 KEEP-OPEN · TB-04-04 NOT DONE · TB-02-05 · LOT-D1 NOT-CONSUMED

## Prochaine gate candidate

```text
GO PUBLICATION PREPARATION SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
LOCAL CI-A PACKAGE —
AFTER CHATGPT DELIVERY VALIDATION —
NO PUSH UNTIL EXPLICIT GO —
NO PR UNTIL EXPLICIT GO
```

## Verdict

FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE IMPLEMENTED LOCALLY — READY FOR CHATGPT DELIVERY VALIDATION — NOT YET AUTHORIZED FOR GIT PUBLICATION OR PR
