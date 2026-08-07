# Review Pack Full — FinOps Technical Lot T1 Delivery Validation Corrections

## Meta

- Travail Cursor : 2026-08-07 03:22:26 CEST (+0200) / 2026-08-07 01:22:26 UTC
- GO Delivery (toujours consommé) : `GO DELIVERY SFIA STUDIO — … LOCAL POSTGRES AND CI-A ONLY — NO NEON — NO OPENAI PROVIDER-REAL`
- Cycle : QA / validation avec correction bornée de Delivery
- Profil : Critical
- Review Pack : Full · Handoff : required / publish-in-cycle

## Coverage checklist

- document 137 complet : yes
- fichiers créés complets : yes
- trois fichiers de tests complets : yes
- migration complète : yes
- diffs unifiés fichiers modifiés : yes
- package-lock diff complet : yes
- workflow CI diff complet : yes
- preuves safe integer / réseau / audit : yes
- synthesis only : no

## Local Git Truth initiale

```text
date_cest=2026-08-07 03:16:18 CEST (+0200)
date_utc=2026-08-07 01:16:18 UTC
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
branch=delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=fatal: no upstream configured for branch 'delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-capture-persistence-local-ci-a'
=== status short ===
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
=== diff names ===
.github/workflows/sfia-studio-ci.yml
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/types.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
projects/sfia-studio/app/package-lock.json
projects/sfia-studio/app/package.json
=== cached ===
=== others (no tmp) ===
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
projects/sfia-studio/app/lib/oa/finops/application/types.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/openai/mapProviderUsage.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts
projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts
projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts
projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts
=== ls-remote ===
0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
003af7aea050c35bc3d26719612afc7cfbbf9fed	refs/heads/sfia/review-handoff
```

## Local Git Truth finale

```text
date_cest=2026-08-07 03:22:26 CEST (+0200)
date_utc=2026-08-07 01:22:26 UTC
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
?? projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md
?? projects/sfia-studio/app/__tests__/oa/finops/postgres/
?? projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts
?? projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts
?? projects/sfia-studio/app/db/
?? projects/sfia-studio/app/lib/oa/finops/application/
?? projects/sfia-studio/app/lib/oa/finops/infrastructure/
?? projects/sfia-studio/app/lib/oa/finops/ports/
0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
003af7aea050c35bc3d26719612afc7cfbbf9fed	refs/heads/sfia/review-handoff
```

## Preuve 135 / 136

| Doc | SHA-256 |
|---|---|
| 135 | `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe` |
| 136 | `b2c4c258bc6b6a13d8a88c19a88b52178a4576e4b2c7606f8ba736df6b0cec61` |

## Manifest final exact

### Préservés
- 135, 136 byte-identical

### Créés (encore présents)
- `projects/sfia-studio/app/lib/oa/finops/application/types.ts`
- `projects/sfia-studio/app/lib/oa/finops/application/identity.ts`
- `projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts`
- `projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts`
- `projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts`
- `projects/sfia-studio/app/lib/oa/finops/ports/finopsCapturePort.ts`
- `projects/sfia-studio/app/lib/oa/finops/ports/finopsUsageLedgerPort.ts`
- `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/createFinOpsPool.ts`
- `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger.ts`
- `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/sanitizeDbError.ts`
- `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts`
- `projects/sfia-studio/app/db/migrations/1754500000000_finops-t1-usage-ledger.js`
- `projects/sfia-studio/137-assistant-sfia-native-openai-finops-technical-lot-t1-execution.md`
- `projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts`
- `projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts`
- `projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts`

### Modifiés
- `.github/workflows/sfia-studio-ci.yml`
- `projects/sfia-studio/app/package.json`
- `projects/sfia-studio/app/package-lock.json`
- `coordinateExecutionRun.ts` / `types.ts` / `platformAiExecutionAdapter.ts` / `composeExecutionRunD2D3.ts`

### Supprimés
- `projects/sfia-studio/app/lib/oa/finops/infrastructure/openai/mapProviderUsage.ts` (T1-VAL-05)

## Document 137 — contenu complet

---BEGIN DOCUMENT 137---

# 137 — FinOps Technical Lot T1 — Execution Record (Local PostgreSQL + CI-A)

## 1. Statut et anti-claims

**T1 IMPLEMENTED LOCALLY**

**VALIDATION CORRECTIONS APPLIED**

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

## 28. ChatGPT Delivery Validation Corrections

Horodatage correction Cursor : 2026-08-07 03:22:26 CEST (+0200) / 2026-08-07 01:22:26 UTC

Ce cycle corrige et revalide la Delivery T1 locale **sans** nouveau périmètre fonctionnel, **sans** commit/push/PR projet, **sans** Neon, **sans** OpenAI réel, **sans** Money.

### Findings

| ID | Sévérité | Statut | Correction |
|---|---|---|---|
| T1-VAL-01 | BLOCKING | **CLOSED** | Codes Node `ECONNREFUSED`, `ECONNRESET`, `ETIMEDOUT`, `ENOTFOUND`, `EHOSTUNREACH`, `ENETUNREACH`, `EPIPE` → `FINOPS_DB_UNAVAILABLE` / `retryable=true` ; SQLSTATE transitoires préservés |
| T1-VAL-02 | BLOCKING | **CLOSED** | `Number.isSafeInteger` ; somme input+output bornée ; helper `readPgTokenField` ; migration `<= 9007199254740991` |
| T1-VAL-03 | MAJOR | **CLOSED** | `safeEmit` isole les exceptions d’audit ; `buildUsageEvent` protégé ; `occurredAt` invalide → `FINOPS_VALIDATION_FAILED` |
| T1-VAL-04 | NOTE | **CLOSED** | `ssl` explicite (`PoolConfig.ssl`) ; défaut local/CI-A `false` ; Neon SSL différé ; `statementTimeoutMillis` validé + `set_config` paramétré |
| T1-VAL-05 | NOTE | **CLOSED** | `mapProviderUsage.ts` **supprimé** (unused) ; `PlatformAiExecutionAdapter` reste autoritatif |

### Fichiers touchés par la correction

- `sanitizeDbError.ts` — Node transient codes
- `readPgToken.ts` — lecture PG safe-integer (nouveau)
- `safeTokens.ts` — validation application (nouveau)
- `buildUsageEvent.ts` — safe integer + try/catch structure
- `captureFinOpsUsage.ts` — `safeEmit` + isolation audit
- `createFinOpsPool.ts` — SSL explicite + timeout paramétré
- `postgresFinOpsUsageLedger.ts` — `readPgTokenField` pour fingerprint
- migration T1 — contrainte upper bound safe integer
- tests unitaires / intégration / fail-open enrichis
- **suppression** `infrastructure/openai/mapProviderUsage.ts`

### Versions inchangées

pg **8.22.0** · node-pg-migrate **8.0.4** · @types/pg **8.20.4**

### Résultats avant / après

| Contrôle | Avant (Delivery initiale) | Après corrections |
|---|---|---|
| Erreurs réseau Node | non classées retryable | `FINOPS_DB_UNAVAILABLE` retryable |
| Safe integer | `Number.isInteger` seulement | `isSafeInteger` + borne PG + helper lecture |
| Audit throw | pouvait requalifier le résultat | isolé via `safeEmit` |
| SSL | `ssl: false` figé non configurable | option explicite ; défaut local false |
| Mapper openai FinOps | fichier mort + tests dédiés | **supprimé** |
| FinOps tests | 77 | **92 passed** |
| test:db | 8 | **10 passed** |
| Full suite serial | 1385 passed | **1398 passed** / 10 skipped |
| typecheck / lint / build / governance | passed | **passed** |

### Migration

up → down (données présentes = refus) → truncate test → down empty → up final : **OK**

### Anti-claims correction

- NO NEON
- NO OPENAI PROVIDER-REAL
- NO REAL CREDENTIAL
- NO MONEY / CURRENCY COLUMNS
- NO PROJECT COMMIT OR PUSH
- NO PR
- DOCUMENT 135 / 136 BYTE-IDENTICAL PRESERVED

### Verdict correction

FINOPS TECHNICAL LOT T1 DELIVERY VALIDATION CORRECTIONS COMPLETED —
T1-VAL-01 CLOSED —
T1-VAL-02 CLOSED —
T1-VAL-03 CLOSED —
T1-VAL-04 CLOSED —
T1-VAL-05 CLOSED —
READY FOR CHATGPT REVALIDATION —
NOT AUTHORIZED FOR PUBLICATION

**T1 LOCAL CI-A DELIVERY COMPLETE DOCUMENTARILY AND TECHNICALLY — NOT PUBLISHED**

---END DOCUMENT 137---

## Fichiers créés — contenu complet

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

### `projects/sfia-studio/app/lib/oa/finops/application/safeTokens.ts`

```
/**
 * FinOps T1 — application-side safe-integer token contract (no Money).
 */

export const FINOPS_MAX_SAFE_TOKEN = Number.MAX_SAFE_INTEGER; // 9007199254740991

/** Application-side token validation before persist. */
export function validateSafeToken(
  value: number | undefined,
): number | null | "invalid" {
  if (value === undefined) return null;
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return "invalid";
  }
  if (!Number.isSafeInteger(value)) return "invalid";
  return value;
}

/**
 * Compute totalTokens when not provided: input + output must remain safe.
 * Returns "invalid" if the sum would exceed MAX_SAFE_INTEGER.
 */
export function resolveTotalTokens(input: {
  readonly inputTokens: number | null;
  readonly outputTokens: number | null;
  readonly totalTokens: number | null;
}): number | null | "invalid" {
  if (input.totalTokens !== null) {
    return input.totalTokens;
  }
  if (input.inputTokens !== null && input.outputTokens !== null) {
    const sum = input.inputTokens + input.outputTokens;
    if (!Number.isSafeInteger(sum)) return "invalid";
    return sum;
  }
  if (input.inputTokens !== null) return input.inputTokens;
  if (input.outputTokens !== null) return input.outputTokens;
  return null;
}
```

### `projects/sfia-studio/app/lib/oa/finops/application/buildUsageEvent.ts`

```
/**
 * FinOps T1 — build a canonical usage ledger event (no Money).
 * Safe-integer token contract; structural failures return sanitized errors.
 */

import { classifyCostEvidenceFromSource } from "../domain/costEvidence";
import { computeUtcMonthPeriod } from "../domain/period";
import type { FinOpsSourceOfTruth } from "../domain/types";
import type { FinOpsCaptureUsageInput } from "../ports/finopsCapturePort";
import { deriveFinOpsIdentity } from "./identity";
import { resolveTotalTokens, validateSafeToken } from "./safeTokens";
import type {
  FinOpsUsageEvent,
  FinOpsUsageFingerprint,
  FinOpsUsageStatus,
  SanitizedFinOpsCaptureError,
} from "./types";

function periodStartDate(occurredAt: string): string {
  const period = computeUtcMonthPeriod(occurredAt);
  return period.periodStart.slice(0, 10);
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

function validationFailed(message: string): BuildUsageEventResult {
  return {
    ok: false,
    error: {
      code: "FINOPS_VALIDATION_FAILED",
      message,
      retryable: false,
      technicalDetailsRedacted: true,
    },
  };
}

export function buildUsageEvent(input: {
  readonly projectId: string;
  readonly executionRunId: string;
  readonly correlationId: string;
  readonly provider: string;
  readonly usage: FinOpsCaptureUsageInput;
  readonly occurredAt: string;
}): BuildUsageEventResult {
  try {
    const projectId = input.projectId.trim();
    const executionRunId = input.executionRunId.trim();
    const provider = input.provider.trim();
    const correlationId = input.correlationId.trim();
    if (!projectId || !executionRunId || !provider || !correlationId) {
      return validationFailed("FinOps capture rejected invalid identity fields");
    }

    let usageStatus: FinOpsUsageStatus;
    let sourceOfTruth: FinOpsSourceOfTruth;
    let inputTokens: number | null = null;
    let outputTokens: number | null = null;
    let totalTokens: number | null = null;

    if (input.usage.status === "validated") {
      const i = validateSafeToken(input.usage.inputTokens);
      const o = validateSafeToken(input.usage.outputTokens);
      const t = validateSafeToken(input.usage.totalTokens);
      if (i === "invalid" || o === "invalid" || t === "invalid") {
        usageStatus = "invalid";
        sourceOfTruth = "UNKNOWN";
        inputTokens = null;
        outputTokens = null;
        totalTokens = null;
      } else {
        const resolved = resolveTotalTokens({
          inputTokens: i,
          outputTokens: o,
          totalTokens: t,
        });
        if (resolved === "invalid") {
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
          totalTokens = resolved;
        }
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

    let periodStart: string;
    try {
      periodStart = periodStartDate(input.occurredAt);
    } catch {
      return validationFailed("FinOps capture rejected invalid occurredAt");
    }

    const event: FinOpsUsageEvent = {
      eventId: identity.eventId,
      dedupKey: identity.dedupKey,
      projectId,
      executionRunId,
      correlationId,
      provider,
      model,
      occurredAt: input.occurredAt,
      periodStart,
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
  } catch {
    return validationFailed("FinOps capture rejected invalid event structure");
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/application/captureFinOpsUsage.ts`

```
/**
 * FinOps T1 — single authoritative capture writer (application boundary).
 * Audit failures never requalify ledger outcomes.
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

function safeEmit(
  audit: FinOpsAuditEmitter | undefined,
  event: {
    readonly type:
      | "finops_capture_created"
      | "finops_capture_duplicate"
      | "finops_capture_failed";
    readonly detail: Readonly<Record<string, unknown>>;
  },
): void {
  if (!audit) return;
  try {
    audit.emit(event);
  } catch {
    // Audit is best-effort T1; durable observability is T6.
    // Never mutate ledger outcomes, never retry, never expose details.
  }
}

export function createFinOpsCaptureService(deps: {
  readonly ledger: FinOpsUsageLedgerPort;
  readonly audit?: FinOpsAuditEmitter;
}): FinOpsCapturePort {
  return {
    async captureUsage(
      request: FinOpsCaptureRequest,
    ): Promise<FinOpsCaptureDiagnostic> {
      let built;
      try {
        built = buildUsageEvent(request);
      } catch {
        const error = {
          code: "FINOPS_VALIDATION_FAILED" as const,
          message: "FinOps capture rejected invalid event structure",
          retryable: false,
          technicalDetailsRedacted: true as const,
        };
        safeEmit(deps.audit, {
          type: "finops_capture_failed",
          detail: { code: error.code, retryable: error.retryable },
        });
        return { status: "failed", error };
      }

      if (!built.ok) {
        safeEmit(deps.audit, {
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
          const diagnostic: FinOpsCaptureDiagnostic = {
            status: "created",
            eventId: result.eventId,
            dedupKey: built.event.dedupKey,
          };
          safeEmit(deps.audit, {
            type: "finops_capture_created",
            detail: { eventId: result.eventId },
          });
          return diagnostic;
        }
        if (result.outcome === "duplicate") {
          const diagnostic: FinOpsCaptureDiagnostic = {
            status: "duplicate",
            eventId: result.eventId,
            dedupKey: built.event.dedupKey,
          };
          safeEmit(deps.audit, {
            type: "finops_capture_duplicate",
            detail: { eventId: result.eventId },
          });
          return diagnostic;
        }
        const diagnostic: FinOpsCaptureDiagnostic = {
          status: "failed",
          error: result.error,
        };
        safeEmit(deps.audit, {
          type: "finops_capture_failed",
          detail: {
            code: result.error.code,
            retryable: result.error.retryable,
          },
        });
        return diagnostic;
      } catch {
        const error = {
          code: "FINOPS_CAPTURE_FAILED" as const,
          message: "FinOps capture failed",
          retryable: true,
          technicalDetailsRedacted: true as const,
        };
        safeEmit(deps.audit, {
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
 *
 * SSL: explicit option only. Default false for local/CI-A.
 * Neon must supply an explicit secure SSL config in a future gate — never inferred from URL.
 */

import { Pool, type PoolConfig } from "pg";

const MAX_STATEMENT_TIMEOUT_MS = 60_000;

export type FinOpsPoolOptions = {
  readonly connectionString: string;
  readonly max?: number;
  readonly connectionTimeoutMillis?: number;
  readonly idleTimeoutMillis?: number;
  readonly statementTimeoutMillis?: number;
  /**
   * Explicit SSL setting compatible with pg PoolConfig.ssl.
   * Default: false (local / CI-A ephemeral Postgres).
   * Neon integration must pass a secure config explicitly — never auto-detected.
   */
  readonly ssl?: PoolConfig["ssl"];
};

function validateStatementTimeoutMillis(value: number): number {
  if (
    typeof value !== "number" ||
    !Number.isSafeInteger(value) ||
    value <= 0 ||
    value > MAX_STATEMENT_TIMEOUT_MS
  ) {
    throw new Error("statementTimeoutMillis out of allowed range");
  }
  return value;
}

export function createFinOpsPool(options: FinOpsPoolOptions): Pool {
  if (!options.connectionString || !options.connectionString.trim()) {
    throw new Error("DATABASE_URL required for FinOps pool");
  }
  const ssl = options.ssl === undefined ? false : options.ssl;
  const config: PoolConfig = {
    connectionString: options.connectionString,
    max: options.max ?? 5,
    connectionTimeoutMillis: options.connectionTimeoutMillis ?? 5_000,
    idleTimeoutMillis: options.idleTimeoutMillis ?? 10_000,
    ssl,
  };
  const pool = new Pool(config);
  if (options.statementTimeoutMillis !== undefined) {
    const timeoutMs = validateStatementTimeoutMillis(
      options.statementTimeoutMillis,
    );
    pool.on("connect", (client) => {
      // Parameterized set_config — no free string interpolation of the timeout.
      void client.query("SELECT set_config('statement_timeout', $1, false)", [
        String(timeoutMs),
      ]);
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
import { readPgTokenField } from "./readPgToken";
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

function rowToFingerprint(
  row: Record<string, unknown>,
):
  | { readonly ok: true; readonly fingerprint: FinOpsUsageFingerprint }
  | { readonly ok: false; readonly error: ReturnType<typeof sanitizeDbError> } {
  const inputTokens = readPgTokenField(row.input_tokens);
  if (!inputTokens.ok) return inputTokens;
  const outputTokens = readPgTokenField(row.output_tokens);
  if (!outputTokens.ok) return outputTokens;
  const totalTokens = readPgTokenField(row.total_tokens);
  if (!totalTokens.ok) return totalTokens;

  return {
    ok: true,
    fingerprint: {
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
      inputTokens: inputTokens.value,
      outputTokens: outputTokens.value,
      totalTokens: totalTokens.value,
      model:
        row.model === null || row.model === undefined ? null : String(row.model),
      sourceOfTruth:
        row.source_of_truth as FinOpsUsageFingerprint["sourceOfTruth"],
      evidenceClass:
        row.evidence_class as FinOpsUsageFingerprint["evidenceClass"],
    },
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

        const existingFpResult = rowToFingerprint(
          existing.rows[0] as Record<string, unknown>,
        );
        if (!existingFpResult.ok) {
          await client.query("ROLLBACK");
          return { outcome: "failed", error: existingFpResult.error };
        }
        if (!fingerprintEqual(existingFpResult.fingerprint, fingerprint)) {
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
 * FinOps T1 — sanitize PostgreSQL / pg / Node network errors.
 * Never expose host, SQL, secrets, or connection strings.
 */

import type { SanitizedFinOpsCaptureError } from "../../application/types";

/** PostgreSQL SQLSTATE codes treated as transient / unavailable. */
const TRANSIENT_SQLSTATES = new Set([
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

/** Node.js network / socket codes treated as transient DB unavailability. */
const TRANSIENT_NODE_CODES = new Set([
  "ECONNREFUSED",
  "ECONNRESET",
  "ETIMEDOUT",
  "ENOTFOUND",
  "EHOSTUNREACH",
  "ENETUNREACH",
  "EPIPE",
]);

function readErrorCode(error: unknown): string | undefined {
  if (!error || typeof error !== "object") return undefined;
  if (
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
  ) {
    return (error as { code: string }).code;
  }
  return undefined;
}

export function sanitizeDbError(error: unknown): SanitizedFinOpsCaptureError {
  const code = readErrorCode(error);

  if (code === "23505") {
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

  const transient =
    code !== undefined &&
    (TRANSIENT_SQLSTATES.has(code) || TRANSIENT_NODE_CODES.has(code));

  return {
    code: transient ? "FINOPS_DB_UNAVAILABLE" : "FINOPS_CAPTURE_FAILED",
    message: "FinOps capture failed",
    retryable: transient,
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

### `projects/sfia-studio/app/lib/oa/finops/infrastructure/postgres/readPgToken.ts`

```
/**
 * FinOps T1 — controlled PostgreSQL token reading (safe integer contract).
 * Tokens remain JavaScript number; never silently Number() a bigint out of range.
 */

import { FINOPS_MAX_SAFE_TOKEN } from "../../application/safeTokens";
import type { SanitizedFinOpsCaptureError } from "../../application/types";

export type ReadPgTokenResult =
  | { readonly ok: true; readonly value: number | null }
  | { readonly ok: false; readonly error: SanitizedFinOpsCaptureError };

/**
 * Accept null; accept string or number; require non-negative safe integer.
 * Fail sanitized / non-retryable when DB value is outside the T1 contract.
 */
export function readPgTokenField(raw: unknown): ReadPgTokenResult {
  if (raw === null || raw === undefined) {
    return { ok: true, value: null };
  }

  let asNumber: number;
  if (typeof raw === "number") {
    asNumber = raw;
  } else if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!/^\d+$/.test(trimmed)) {
      return {
        ok: false,
        error: {
          code: "FINOPS_VALIDATION_FAILED",
          message: "FinOps ledger rejected invalid usage values",
          retryable: false,
          technicalDetailsRedacted: true,
        },
      };
    }
    // Reject strings that exceed MAX_SAFE_INTEGER before Number() loses precision.
    if (
      trimmed.length > String(FINOPS_MAX_SAFE_TOKEN).length ||
      (trimmed.length === String(FINOPS_MAX_SAFE_TOKEN).length &&
        trimmed > String(FINOPS_MAX_SAFE_TOKEN))
    ) {
      return {
        ok: false,
        error: {
          code: "FINOPS_VALIDATION_FAILED",
          message: "FinOps ledger rejected invalid usage values",
          retryable: false,
          technicalDetailsRedacted: true,
        },
      };
    }
    asNumber = Number(trimmed);
  } else if (typeof raw === "bigint") {
    const max = BigInt(FINOPS_MAX_SAFE_TOKEN);
    if (raw < BigInt(0) || raw > max) {
      return {
        ok: false,
        error: {
          code: "FINOPS_VALIDATION_FAILED",
          message: "FinOps ledger rejected invalid usage values",
          retryable: false,
          technicalDetailsRedacted: true,
        },
      };
    }
    asNumber = Number(raw);
  } else {
    return {
      ok: false,
      error: {
        code: "FINOPS_VALIDATION_FAILED",
        message: "FinOps ledger rejected invalid usage values",
        retryable: false,
        technicalDetailsRedacted: true,
      },
    };
  }

  if (
    !Number.isFinite(asNumber) ||
    asNumber < 0 ||
    !Number.isSafeInteger(asNumber)
  ) {
    return {
      ok: false,
      error: {
        code: "FINOPS_VALIDATION_FAILED",
        message: "FinOps ledger rejected invalid usage values",
        retryable: false,
        technicalDetailsRedacted: true,
      },
    };
  }

  return { ok: true, value: asNumber };
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

  // JavaScript Number.MAX_SAFE_INTEGER upper bound (T1 tokens remain number).
  pgm.addConstraint("finops_usage_event", "finops_usage_event_tokens_safe_int", {
    check:
      "(input_tokens IS NULL OR input_tokens <= 9007199254740991) AND (output_tokens IS NULL OR output_tokens <= 9007199254740991) AND (total_tokens IS NULL OR total_tokens <= 9007199254740991)",
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

## Tests — contenu complet

### `projects/sfia-studio/app/__tests__/oa/finops/t1.capture.unit.test.ts`

```
/**
 * @vitest-environment node
 */
import { describe, expect, it, vi } from "vitest";
import { buildUsageEvent } from "@/lib/oa/finops/application/buildUsageEvent";
import { createFinOpsCaptureService } from "@/lib/oa/finops/application/captureFinOpsUsage";
import { deriveFinOpsIdentity } from "@/lib/oa/finops/application/identity";
import {
  FINOPS_MAX_SAFE_TOKEN,
  resolveTotalTokens,
  validateSafeToken,
} from "@/lib/oa/finops/application/safeTokens";
import { createFinOpsPool } from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { readPgTokenField } from "@/lib/oa/finops/infrastructure/postgres/readPgToken";
import { sanitizeDbError } from "@/lib/oa/finops/infrastructure/postgres/sanitizeDbError";
import type { FinOpsUsageLedgerPort } from "@/lib/oa/finops/ports/finopsUsageLedgerPort";

describe("FinOps T1 identity", () => {
  it("derives deterministic eventId and dedupKey", () => {
    const a = deriveFinOpsIdentity({
      projectId: "p1",
      executionRunId: "run-1",
      provider: "openai",
      providerRequestId: "resp_abc",
      correlationId: "corr-1",
    });
    const b = deriveFinOpsIdentity({
      projectId: "p1",
      executionRunId: "run-1",
      provider: "openai",
      providerRequestId: "resp_abc",
      correlationId: "corr-1",
    });
    expect(a.eventId).toBe(b.eventId);
    expect(a.dedupKey).toBe(b.dedupKey);
    expect(a.eventId.startsWith("evt_")).toBe(true);
    expect(a.dedupKey.startsWith("dedup_")).toBe(true);
  });

  it("changes identity when run or provider response id changes", () => {
    const base = {
      projectId: "p1",
      executionRunId: "run-1",
      provider: "openai",
      providerRequestId: "resp_abc",
      correlationId: "corr-1",
    };
    const a = deriveFinOpsIdentity(base);
    const b = deriveFinOpsIdentity({ ...base, executionRunId: "run-2" });
    const c = deriveFinOpsIdentity({
      ...base,
      providerRequestId: "resp_other",
    });
    expect(a.eventId).not.toBe(b.eventId);
    expect(a.eventId).not.toBe(c.eventId);
  });
});

describe("FinOps T1 buildUsageEvent", () => {
  const base = {
    projectId: "proj-1",
    executionRunId: "run-1",
    correlationId: "corr-1",
    provider: "openai",
    occurredAt: "2026-08-06T22:05:00.000Z",
  };

  it("builds validated API_USAGE event without Money fields", () => {
    const result = buildUsageEvent({
      ...base,
      usage: {
        status: "validated",
        inputTokens: 10,
        outputTokens: 5,
        totalTokens: 15,
        model: "gpt-test",
        providerResponseId: "resp_1",
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("validated");
    expect(result.event.sourceOfTruth).toBe("API_USAGE");
    expect(JSON.stringify(result.event)).not.toMatch(/cost|currency|price|Money/i);
  });

  it("builds unavailable with UNKNOWN and null tokens (unknown ≠ zero)", () => {
    const result = buildUsageEvent({
      ...base,
      usage: { status: "unavailable", reason: "missing" },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("unavailable");
    expect(result.event.inputTokens).toBeNull();
  });

  it("marks negative tokens as invalid without inventing values", () => {
    const result = buildUsageEvent({
      ...base,
      usage: { status: "validated", inputTokens: -1, outputTokens: 2 },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("invalid");
    expect(result.event.inputTokens).toBeNull();
  });

  it("accepts Number.MAX_SAFE_INTEGER tokens", () => {
    const result = buildUsageEvent({
      ...base,
      usage: {
        status: "validated",
        inputTokens: FINOPS_MAX_SAFE_TOKEN,
        outputTokens: 0,
        totalTokens: FINOPS_MAX_SAFE_TOKEN,
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("validated");
    expect(result.event.inputTokens).toBe(FINOPS_MAX_SAFE_TOKEN);
  });

  it("rejects Number.MAX_SAFE_INTEGER + 1 as invalid", () => {
    const result = buildUsageEvent({
      ...base,
      usage: {
        status: "validated",
        inputTokens: FINOPS_MAX_SAFE_TOKEN + 1,
        outputTokens: 0,
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("invalid");
    expect(result.event.inputTokens).toBeNull();
  });

  it("rejects sum exceeding MAX_SAFE_INTEGER", () => {
    expect(
      resolveTotalTokens({
        inputTokens: FINOPS_MAX_SAFE_TOKEN,
        outputTokens: 1,
        totalTokens: null,
      }),
    ).toBe("invalid");
    const result = buildUsageEvent({
      ...base,
      usage: {
        status: "validated",
        inputTokens: FINOPS_MAX_SAFE_TOKEN,
        outputTokens: 1,
      },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.event.usageStatus).toBe("invalid");
  });

  it("returns FINOPS_VALIDATION_FAILED for invalid occurredAt", () => {
    const result = buildUsageEvent({
      ...base,
      occurredAt: "not-a-date",
      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.code).toBe("FINOPS_VALIDATION_FAILED");
    expect(result.error.retryable).toBe(false);
  });
});

describe("FinOps T1 safe token helpers", () => {
  it("validateSafeToken accepts MAX_SAFE_INTEGER and rejects beyond", () => {
    expect(validateSafeToken(FINOPS_MAX_SAFE_TOKEN)).toBe(FINOPS_MAX_SAFE_TOKEN);
    expect(validateSafeToken(FINOPS_MAX_SAFE_TOKEN + 1)).toBe("invalid");
  });

  it("readPgTokenField rejects out-of-range DB strings without silent Number()", () => {
    const ok = readPgTokenField(String(FINOPS_MAX_SAFE_TOKEN));
    expect(ok.ok).toBe(true);
    if (ok.ok) expect(ok.value).toBe(FINOPS_MAX_SAFE_TOKEN);
    const bad = readPgTokenField("9007199254740992");
    expect(bad.ok).toBe(false);
    if (!bad.ok) {
      expect(bad.error.code).toBe("FINOPS_VALIDATION_FAILED");
      expect(bad.error.retryable).toBe(false);
    }
  });
});

describe("FinOps T1 sanitized DB errors (T1-VAL-01)", () => {
  it("classifies SQLSTATE 08006 as FINOPS_DB_UNAVAILABLE retryable", () => {
    const err = sanitizeDbError({ code: "08006", message: "connection failed" });
    expect(err.code).toBe("FINOPS_DB_UNAVAILABLE");
    expect(err.retryable).toBe(true);
    expect(err.technicalDetailsRedacted).toBe(true);
  });

  it("classifies ECONNREFUSED as FINOPS_DB_UNAVAILABLE retryable", () => {
    const err = sanitizeDbError({ code: "ECONNREFUSED", message: "refused" });
    expect(err.code).toBe("FINOPS_DB_UNAVAILABLE");
    expect(err.retryable).toBe(true);
  });

  it("classifies ETIMEDOUT as FINOPS_DB_UNAVAILABLE retryable", () => {
    const err = sanitizeDbError({ code: "ETIMEDOUT", message: "timeout" });
    expect(err.code).toBe("FINOPS_DB_UNAVAILABLE");
    expect(err.retryable).toBe(true);
  });

  it("classifies non-transient codes as FINOPS_CAPTURE_FAILED", () => {
    const err = sanitizeDbError({ code: "42P01", message: "undefined_table" });
    expect(err.code).toBe("FINOPS_CAPTURE_FAILED");
    expect(err.retryable).toBe(false);
  });

  it("classifies CHECK violation 23514 as FINOPS_VALIDATION_FAILED", () => {
    const err = sanitizeDbError({ code: "23514", message: "check" });
    expect(err.code).toBe("FINOPS_VALIDATION_FAILED");
    expect(err.retryable).toBe(false);
  });

  it("never leaks connection strings in sanitized messages", () => {
    const err = sanitizeDbError({
      code: "ECONNREFUSED",
      message: "connect ECONNREFUSED 127.0.0.1:55432",
    });
    expect(err.message).toBe("FinOps capture failed");
    expect(err.message).not.toMatch(/55432|127\.0\.0\.1|postgres/i);
  });
});

describe("FinOps T1 audit isolation (T1-VAL-03)", () => {
  it("keeps created when audit emitter throws", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async (event) => ({
        outcome: "created",
        eventId: event.eventId,
      }),
    };
    const audit = {
      emit: vi.fn(() => {
        throw new Error("audit boom");
      }),
    };
    const finops = createFinOpsCaptureService({ ledger, audit });
    const result = await finops.captureUsage({
      projectId: "p",
      executionRunId: "r",
      correlationId: "c",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
    });
    expect(result.status).toBe("created");
  });

  it("keeps duplicate when audit emitter throws", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async (event) => ({
        outcome: "duplicate",
        eventId: event.eventId,
      }),
    };
    const finops = createFinOpsCaptureService({
      ledger,
      audit: {
        emit: () => {
          throw new Error("audit boom");
        },
      },
    });
    const result = await finops.captureUsage({
      projectId: "p",
      executionRunId: "r",
      correlationId: "c",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
    });
    expect(result.status).toBe("duplicate");
  });

  it("keeps failed when audit emitter throws during failure path", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async () => ({
        outcome: "failed",
        error: {
          code: "FINOPS_DB_UNAVAILABLE",
          message: "FinOps capture failed",
          retryable: true,
          technicalDetailsRedacted: true,
        },
      }),
    };
    const finops = createFinOpsCaptureService({
      ledger,
      audit: {
        emit: () => {
          throw new Error("audit boom");
        },
      },
    });
    const result = await finops.captureUsage({
      projectId: "p",
      executionRunId: "r",
      correlationId: "c",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
    });
    expect(result.status).toBe("failed");
  });
});

describe("FinOps T1 pool SSL options (T1-VAL-04)", () => {
  it("defaults ssl to false and accepts explicit ssl option shape", () => {
    const pool = createFinOpsPool({
      connectionString:
        "postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:1/sfia_studio_finops_t1",
      connectionTimeoutMillis: 100,
      ssl: false,
    });
    expect(pool).toBeTruthy();
    void pool.end();
  });

  it("rejects non-positive or unsafe statementTimeoutMillis", () => {
    expect(() =>
      createFinOpsPool({
        connectionString:
          "postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:1/sfia_studio_finops_t1",
        statementTimeoutMillis: 0,
      }),
    ).toThrow(/statementTimeoutMillis/);
    expect(() =>
      createFinOpsPool({
        connectionString:
          "postgres://sfia_t1:sfia_t1_local_only@127.0.0.1:1/sfia_studio_finops_t1",
        statementTimeoutMillis: 999_999,
      }),
    ).toThrow(/statementTimeoutMillis/);
  });
});

describe("FinOps T1 unused mapper removal (T1-VAL-05)", () => {
  it("does not ship mapProviderUsage module", () => {
    const fs = require("node:fs") as typeof import("node:fs");
    const path = require("node:path") as typeof import("node:path");
    const target = path.join(
      __dirname,
      "../../lib/oa/finops/infrastructure/openai/mapProviderUsage.ts",
    );
    expect(fs.existsSync(target)).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/t1.coordinator.failopen.test.ts`

```
/**
 * @vitest-environment node
 */
import { describe, expect, it, vi } from "vitest";
import { createFinOpsCaptureService } from "@/lib/oa/finops/application/captureFinOpsUsage";
import type { FinOpsUsageLedgerPort } from "@/lib/oa/finops/ports/finopsUsageLedgerPort";
import { getFixture } from "@/lib/oa/execution-run";
import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3";
import { composeExecutionRunProvidersFake } from "@/lib/oa/execution-run/server/composeExecutionRunProviders";

function nominalAiInput(correlationSuffix = "finops") {
  const fixture = getFixture("nominal");
  const correlationId = `${fixture.intent.correlationId}:${correlationSuffix}`;
  return {
    intent: {
      ...fixture.intent,
      intentId: `${fixture.intent.intentId}:${correlationSuffix}`,
      correlationId,
    },
    context: fixture.context,
    providerRequest: {
      correlationId,
      lane: "ai" as const,
      operation: "complete",
      messages: [{ role: "user" as const, content: "bounded fixture summary" }],
      timeoutMs: 100,
    },
    timeoutMs: 100,
  };
}

describe("FinOps T1 coordinator fail-open", () => {
  it("returns disabled when FinOps dependency is not injected", async () => {
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProvidersFake(),
    });
    const result = await composition.coordinate(nominalAiInput("disabled"));
    expect(result.ok).toBe(true);
    expect(result.finopsCapture.status).toBe("disabled");
  });

  it("does not fail the user run when FinOps capture fails", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async () => ({
        outcome: "failed",
        error: {
          code: "FINOPS_DB_UNAVAILABLE",
          message: "FinOps capture failed",
          retryable: true,
          technicalDetailsRedacted: true,
        },
      }),
    };
    const audit = { emit: vi.fn() };
    const finops = createFinOpsCaptureService({ ledger, audit });
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProvidersFake(),
      finops,
    });
    const result = await composition.coordinate(nominalAiInput("failopen"));
    expect(result.ok).toBe(true);
    expect(result.finopsCapture.status).toBe("failed");
    if (result.finopsCapture.status === "failed") {
      expect(result.finopsCapture.error.technicalDetailsRedacted).toBe(true);
      expect(result.finopsCapture.error.message).not.toMatch(/postgres|host|sql/i);
    }
    expect(audit.emit).toHaveBeenCalledWith(
      expect.objectContaining({ type: "finops_capture_failed" }),
    );
  });

  it("skips FinOps capture for non-AI lanes", async () => {
    const captureUsage = vi.fn();
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProvidersFake(),
      finops: { captureUsage },
    });
    const fixture = getFixture("nominal");
    const intent = {
      ...fixture.intent,
      intentId: "intent:d2d3:git:finops",
      correlationId: "corr:d2d3:git:finops",
      requestedLane: "git" as const,
    };
    const result = await composition.coordinate({
      intent,
      context: fixture.context,
      providerRequest: {
        correlationId: intent.correlationId,
        lane: "git",
        operation: "read",
        owner: "o",
        repo: "r",
        kind: "repository",
        timeoutMs: 100,
      },
      timeoutMs: 100,
    });
    expect(captureUsage).not.toHaveBeenCalled();
    expect(result.finopsCapture.status).toBe("not_attempted");
  });

  it("records created diagnostic when ledger inserts", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async (event) => ({
        outcome: "created",
        eventId: event.eventId,
      }),
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProvidersFake(),
      finops: createFinOpsCaptureService({ ledger }),
    });
    const result = await composition.coordinate(nominalAiInput("created"));
    expect(result.ok).toBe(true);
    expect(result.finopsCapture.status).toBe("created");
  });

  it("keeps provider success when FinOps validation fails (invalid occurredAt via clock)", async () => {
    const ledger: FinOpsUsageLedgerPort = {
      insertUsageEvent: async (event) => ({
        outcome: "created",
        eventId: event.eventId,
      }),
    };
    const composition = composeExecutionRunD2D3({
      providers: composeExecutionRunProvidersFake(),
      finops: createFinOpsCaptureService({ ledger }),
      clock: { nowIso: () => "not-a-valid-instant" },
    });
    const result = await composition.coordinate(nominalAiInput("baddate"));
    expect(result.ok).toBe(true);
    expect(result.finopsCapture.status).toBe("failed");
    if (result.finopsCapture.status === "failed") {
      expect(result.finopsCapture.error.code).toBe("FINOPS_VALIDATION_FAILED");
      expect(result.finopsCapture.error.retryable).toBe(false);
    }
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/postgres/t1.ledger.integration.test.ts`

```
/**
 * @vitest-environment node
 *
 * Requires DATABASE_URL (and preferably DATABASE_URL_DIRECT) pointing at an
 * ephemeral local/CI Postgres — never Neon.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createFinOpsPool, closeFinOpsPool } from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
import { createPostgresFinOpsUsageLedger } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsUsageLedger";
import { buildUsageEvent } from "@/lib/oa/finops/application/buildUsageEvent";
import type { Pool } from "pg";

const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("FinOps T1 PostgreSQL integration", () => {
  let pool: Pool;

  beforeAll(() => {
    pool = createFinOpsPool({ connectionString: DATABASE_URL, max: 4 });
  });

  afterAll(async () => {
    await closeFinOpsPool(pool);
  });

  it("has finops_usage_event table and constraints without money columns", async () => {
    const cols = await pool.query<{ column_name: string }>(
      `SELECT column_name FROM information_schema.columns
       WHERE table_name = 'finops_usage_event'
       ORDER BY column_name`,
    );
    const names = cols.rows.map((r) => r.column_name);
    expect(names).toContain("event_id");
    expect(names).toContain("dedup_key");
    expect(names).not.toContain("cost");
    expect(names).not.toContain("cost_minor");
    expect(names).not.toContain("cost_numeric");
    expect(names).not.toContain("currency");
    expect(names).not.toContain("currency_code");
  });

  it("inserts created then duplicate for identical event", async () => {
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const built = buildUsageEvent({
      projectId: "proj-db",
      executionRunId: `run-${Date.now()}-a`,
      correlationId: "corr-db-a",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 11,
        outputTokens: 7,
        totalTokens: 18,
        model: "gpt-test",
        providerResponseId: `resp-${Date.now()}-a`,
      },
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const first = await ledger.insertUsageEvent(built.event, built.fingerprint);
    const second = await ledger.insertUsageEvent(built.event, built.fingerprint);
    expect(first.outcome).toBe("created");
    expect(second.outcome).toBe("duplicate");
  });

  it("handles concurrent identical inserts with one created and rest duplicate", async () => {
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const built = buildUsageEvent({
      projectId: "proj-db",
      executionRunId: `run-concurrent-${Date.now()}`,
      correlationId: "corr-concurrent",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        providerResponseId: `resp-concurrent-${Date.now()}`,
      },
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const results = await Promise.all(
      Array.from({ length: 8 }, () =>
        ledger.insertUsageEvent(built.event, built.fingerprint),
      ),
    );
    const created = results.filter((r) => r.outcome === "created");
    const duplicates = results.filter((r) => r.outcome === "duplicate");
    expect(created.length).toBe(1);
    expect(duplicates.length).toBe(7);
  });

  it("returns structured conflict when dedup matches but fingerprint diverges", async () => {
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const providerResponseId = `resp-conflict-${Date.now()}`;
    const firstBuilt = buildUsageEvent({
      projectId: "proj-db",
      executionRunId: `run-conflict-${Date.now()}`,
      correlationId: "corr-conflict",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: {
        status: "validated",
        inputTokens: 2,
        outputTokens: 2,
        totalTokens: 4,
        providerResponseId,
      },
    });
    expect(firstBuilt.ok).toBe(true);
    if (!firstBuilt.ok) return;
    const inserted = await ledger.insertUsageEvent(
      firstBuilt.event,
      firstBuilt.fingerprint,
    );
    expect(inserted.outcome).toBe("created");

    const diverged = {
      ...firstBuilt.event,
      inputTokens: 99,
      totalTokens: 101,
    };
    const divergedFp = {
      ...firstBuilt.fingerprint,
      inputTokens: 99,
      totalTokens: 101,
    };
    const conflict = await ledger.insertUsageEvent(diverged, divergedFp);
    expect(conflict.outcome).toBe("conflict");
    if (conflict.outcome === "conflict") {
      expect(conflict.error.code).toBe("FINOPS_DEDUP_CONFLICT");
    }
  });

  it("rejects negative tokens via DB check", async () => {
    await expect(
      pool.query(
        `INSERT INTO finops_usage_event (
          event_id, dedup_key, project_id, execution_run_id, provider,
          occurred_at, period_start, source_of_truth, evidence_class,
          input_tokens, usage_status
        ) VALUES (
          'evt_neg', 'dedup_neg', 'p', 'r', 'openai',
          NOW(), '2026-08-01', 'API_USAGE', 'observed',
          -1, 'validated'
        )`,
      ),
    ).rejects.toBeTruthy();
  });

  it("rejects tokens above MAX_SAFE_INTEGER via DB check", async () => {
    await expect(
      pool.query(
        `INSERT INTO finops_usage_event (
          event_id, dedup_key, project_id, execution_run_id, provider,
          occurred_at, period_start, source_of_truth, evidence_class,
          input_tokens, usage_status
        ) VALUES (
          'evt_oversafe', 'dedup_oversafe', 'p', 'r', 'openai',
          NOW(), '2026-08-01', 'API_USAGE', 'observed',
          9007199254740992, 'validated'
        )`,
      ),
    ).rejects.toBeTruthy();
  });

  it("preserves MAX_SAFE_INTEGER in duplicate fingerprint without precision loss", async () => {
    const ledger = createPostgresFinOpsUsageLedger(pool);
    const built = buildUsageEvent({
      projectId: "proj-db",
      executionRunId: `run-safeint-${Date.now()}`,
      correlationId: "corr-safeint",
      provider: "openai",
      occurredAt: "2026-08-06T22:05:00.000Z",
      usage: {
        status: "validated",
        inputTokens: Number.MAX_SAFE_INTEGER,
        outputTokens: 0,
        totalTokens: Number.MAX_SAFE_INTEGER,
        providerResponseId: `resp-safeint-${Date.now()}`,
      },
    });
    expect(built.ok).toBe(true);
    if (!built.ok) return;
    const first = await ledger.insertUsageEvent(built.event, built.fingerprint);
    const second = await ledger.insertUsageEvent(built.event, built.fingerprint);
    expect(first.outcome).toBe("created");
    expect(second.outcome).toBe("duplicate");
    expect(built.fingerprint.inputTokens).toBe(Number.MAX_SAFE_INTEGER);
  });

  it("forbids UPDATE and DELETE via append-only trigger", async () => {
    const id = `evt_immut_${Date.now()}`;
    const dedup = `dedup_immut_${Date.now()}`;
    await pool.query(
      `INSERT INTO finops_usage_event (
        event_id, dedup_key, project_id, execution_run_id, provider,
        occurred_at, period_start, source_of_truth, evidence_class,
        input_tokens, usage_status
      ) VALUES (
        $1, $2, 'p', 'r', 'openai',
        NOW(), '2026-08-01', 'API_USAGE', 'observed',
        1, 'validated'
      )`,
      [id, dedup],
    );
    await expect(
      pool.query(`UPDATE finops_usage_event SET provider = 'x' WHERE event_id = $1`, [
        id,
      ]),
    ).rejects.toThrow(/append-only/i);
    await expect(
      pool.query(`DELETE FROM finops_usage_event WHERE event_id = $1`, [id]),
    ).rejects.toThrow(/append-only/i);
  });

  it("supports restart-safe behavior across two pools", async () => {
    const poolB = createFinOpsPool({ connectionString: DATABASE_URL, max: 2 });
    try {
      const ledgerA = createPostgresFinOpsUsageLedger(pool);
      const ledgerB = createPostgresFinOpsUsageLedger(poolB);
      const built = buildUsageEvent({
        projectId: "proj-db",
        executionRunId: `run-restart-${Date.now()}`,
        correlationId: "corr-restart",
        provider: "openai",
        occurredAt: "2026-08-06T22:05:00.000Z",
        usage: {
          status: "validated",
          inputTokens: 5,
          outputTokens: 5,
          totalTokens: 10,
          providerResponseId: `resp-restart-${Date.now()}`,
        },
      });
      expect(built.ok).toBe(true);
      if (!built.ok) return;
      const a = await ledgerA.insertUsageEvent(built.event, built.fingerprint);
      const b = await ledgerB.insertUsageEvent(built.event, built.fingerprint);
      expect(a.outcome).toBe("created");
      expect(b.outcome).toBe("duplicate");
    } finally {
      await closeFinOpsPool(poolB);
    }
  });

  it("sanitizes connection failures", async () => {
    const badPool = createFinOpsPool({
      connectionString:
        "postgres://sfia_ci:sfia_ci_local_only@127.0.0.1:1/sfia_studio_finops_t1",
      connectionTimeoutMillis: 500,
      max: 1,
    });
    try {
      const ledger = createPostgresFinOpsUsageLedger(badPool);
      const built = buildUsageEvent({
        projectId: "proj-db",
        executionRunId: "run-bad",
        correlationId: "corr-bad",
        provider: "openai",
        occurredAt: "2026-08-06T22:05:00.000Z",
        usage: { status: "unavailable", reason: "x" },
      });
      expect(built.ok).toBe(true);
      if (!built.ok) return;
      const result = await ledger.insertUsageEvent(
        built.event,
        built.fingerprint,
      );
      expect(result.outcome).toBe("failed");
      if (result.outcome === "failed") {
        expect(result.error.code).toBe("FINOPS_DB_UNAVAILABLE");
        expect(result.error.retryable).toBe(true);
        expect(result.error.message).not.toMatch(/postgres:\/\/|password|127\.0\.0\.1/i);
        expect(result.error.technicalDetailsRedacted).toBe(true);
      }
    } finally {
      await closeFinOpsPool(badPool);
    }
  });
});
```

## Diffs unifiés — fichiers modifiés

### execution-run + adapter + compose

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
```

### package.json

```diff
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

### package-lock.json (complet)

```diff
diff --git a/projects/sfia-studio/app/package-lock.json b/projects/sfia-studio/app/package-lock.json
index 9489b10..39242b9 100644
--- a/projects/sfia-studio/app/package-lock.json
+++ b/projects/sfia-studio/app/package-lock.json
@@ -11,6 +11,7 @@
         "ajv": "^6.15.0",
         "next": "^15.3.3",
         "openai": "^6.48.0",
+        "pg": "~8.22.0",
         "react": "^19.1.0",
         "react-dom": "^19.1.0"
       },
@@ -20,12 +21,14 @@
         "@testing-library/react": "^16.3.0",
         "@testing-library/user-event": "^14.6.1",
         "@types/node": "^22.15.21",
+        "@types/pg": "^8.20.4",
         "@types/react": "^19.1.2",
         "@types/react-dom": "^19.1.2",
         "axe-core": "^4.10.3",
         "eslint": "^9.27.0",
         "eslint-config-next": "^15.3.3",
         "jsdom": "^26.1.0",
+        "node-pg-migrate": "^8.0.4",
         "typescript": "^5.8.3",
         "vitest": "^3.1.2"
       }
@@ -1402,6 +1405,16 @@
         "url": "https://opencollective.com/libvips"
       }
     },
+    "node_modules/@isaacs/cliui": {
+      "version": "9.0.0",
+      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-9.0.0.tgz",
+      "integrity": "sha512-AokJm4tuBHillT+FpMtxQ60n8ObyXBatq7jD2/JA9dxbDDokKQm8KMht5ibGzLVU9IJDIKK4TPKgMHEYMn3lMg==",
+      "dev": true,
+      "license": "BlueOak-1.0.0",
+      "engines": {
+        "node": ">=18"
+      }
+    },
     "node_modules/@jridgewell/sourcemap-codec": {
       "version": "1.5.5",
       "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
@@ -2218,6 +2231,18 @@
         "undici-types": "~6.21.0"
       }
     },
+    "node_modules/@types/pg": {
+      "version": "8.20.4",
+      "resolved": "https://registry.npmjs.org/@types/pg/-/pg-8.20.4.tgz",
+      "integrity": "sha512-Jz7UDOlIiFJuacC0TlBoLyNtmwlA/wpIyPDd3tvUqlRM+HzkWy2xUgpFpaXtbfTAFF6sIGq5lsCDBdJnhky1Xg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/node": "*",
+        "pg-protocol": "*",
+        "pg-types": "^2.2.0"
+      }
+    },
     "node_modules/@types/react": {
       "version": "19.2.17",
       "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.17.tgz",
@@ -3044,7 +3069,6 @@
       "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
       "dev": true,
       "license": "MIT",
-      "peer": true,
       "engines": {
         "node": ">=8"
       }
@@ -3476,6 +3500,21 @@
       "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
       "license": "MIT"
     },
+    "node_modules/cliui": {
+      "version": "8.0.1",
+      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
+      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
+      "dev": true,
+      "license": "ISC",
+      "dependencies": {
+        "string-width": "^4.2.0",
+        "strip-ansi": "^6.0.1",
+        "wrap-ansi": "^7.0.0"
+      },
+      "engines": {
+        "node": ">=12"
+      }
+    },
     "node_modules/color-convert": {
       "version": "2.0.1",
       "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
@@ -4023,6 +4062,16 @@
         "@esbuild/win32-x64": "0.28.1"
       }
     },
+    "node_modules/escalade": {
+      "version": "3.2.0",
+      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
+      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6"
+      }
+    },
     "node_modules/escape-string-regexp": {
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
@@ -4612,6 +4661,23 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/foreground-child": {
+      "version": "3.3.1",
+      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz",
+      "integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
+      "dev": true,
+      "license": "ISC",
+      "dependencies": {
+        "cross-spawn": "^7.0.6",
+        "signal-exit": "^4.0.1"
+      },
+      "engines": {
+        "node": ">=14"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
     "node_modules/fsevents": {
       "version": "2.3.2",
       "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
@@ -4680,6 +4746,16 @@
         "node": ">= 0.4"
       }
     },
+    "node_modules/get-caller-file": {
+      "version": "2.0.5",
+      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
+      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
+      "dev": true,
+      "license": "ISC",
+      "engines": {
+        "node": "6.* || 8.* || >= 10.*"
+      }
+    },
     "node_modules/get-intrinsic": {
       "version": "1.3.0",
       "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
@@ -4750,6 +4826,31 @@
         "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
       }
     },
+    "node_modules/glob": {
+      "version": "11.1.0",
+      "resolved": "https://registry.npmjs.org/glob/-/glob-11.1.0.tgz",
+      "integrity": "sha512-vuNwKSaKiqm7g0THUBu2x7ckSs3XJLXE+2ssL7/MfTGPLLcrJQ/4Uq1CjPTtO5cCIiRxqvN6Twy1qOwhL0Xjcw==",
+      "deprecated": "Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me",
+      "dev": true,
+      "license": "BlueOak-1.0.0",
+      "dependencies": {
+        "foreground-child": "^3.3.1",
+        "jackspeak": "^4.1.1",
+        "minimatch": "^10.1.1",
+        "minipass": "^7.1.2",
+        "package-json-from-dist": "^1.0.0",
+        "path-scurry": "^2.0.0"
+      },
+      "bin": {
+        "glob": "dist/esm/bin.mjs"
+      },
+      "engines": {
+        "node": "20 || >=22"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
     "node_modules/glob-parent": {
       "version": "6.0.2",
       "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
@@ -4763,6 +4864,45 @@
         "node": ">=10.13.0"
       }
     },
+    "node_modules/glob/node_modules/balanced-match": {
+      "version": "4.0.4",
+      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
+      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": "18 || 20 || >=22"
+      }
+    },
+    "node_modules/glob/node_modules/brace-expansion": {
+      "version": "5.0.9",
+      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.9.tgz",
+      "integrity": "sha512-ScQ4IuvIEF1TMlP7Zt+vjJ//9zlPb2SDcxWxM3bk8s6t6GGdJ7KO1dCcTidOPJKePW30LE/2cT7wCyPho9/Wxg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "balanced-match": "^4.0.2"
+      },
+      "engines": {
+        "node": "20 || >=22"
+      }
+    },
+    "node_modules/glob/node_modules/minimatch": {
+      "version": "10.2.6",
+      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.6.tgz",
+      "integrity": "sha512-vpLQEs+VLCr1nU0BXS07maYoFwlDAH0gngQuuttxIwutDFEMHq2blX+8vpgxDdK3J1PwjCJiep77OitTZ4Ll1A==",
+      "dev": true,
+      "license": "BlueOak-1.0.0",
+      "dependencies": {
+        "brace-expansion": "^5.0.8"
+      },
+      "engines": {
+        "node": "18 || 20 || >=22"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
     "node_modules/globals": {
       "version": "14.0.0",
       "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
@@ -5203,6 +5343,16 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/is-fullwidth-code-point": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
+      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=8"
+      }
+    },
     "node_modules/is-generator-function": {
       "version": "1.1.2",
       "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
@@ -5473,6 +5623,22 @@
         "node": ">= 0.4"
       }
     },
+    "node_modules/jackspeak": {
+      "version": "4.2.3",
+      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-4.2.3.tgz",
+      "integrity": "sha512-ykkVRwrYvFm1nb2AJfKKYPr0emF6IiXDYUaFx4Zn9ZuIH7MrzEZ3sD5RlqGXNRpHtvUHJyOnCEFxOlNDtGo7wg==",
+      "dev": true,
+      "license": "BlueOak-1.0.0",
+      "dependencies": {
+        "@isaacs/cliui": "^9.0.0"
+      },
+      "engines": {
+        "node": "20 || >=22"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
     "node_modules/js-tokens": {
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
@@ -5774,6 +5940,16 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/minipass": {
+      "version": "7.1.3",
+      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.3.tgz",
+      "integrity": "sha512-tEBHqDnIoM/1rXME1zgka9g6Q2lcoCkxHLuc7ODJ5BxbP5d4c2Z5cGgtXAku59200Cx7diuHTOYfSBD8n6mm8A==",
+      "dev": true,
+      "license": "BlueOak-1.0.0",
+      "engines": {
+        "node": ">=16 || 14 >=14.17"
+      }
+    },
     "node_modules/ms": {
       "version": "2.1.3",
       "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
@@ -5903,6 +6079,32 @@
         "semver": "bin/semver.js"
       }
     },
+    "node_modules/node-pg-migrate": {
+      "version": "8.0.4",
+      "resolved": "https://registry.npmjs.org/node-pg-migrate/-/node-pg-migrate-8.0.4.tgz",
+      "integrity": "sha512-HTlJ6fOT/2xHhAUtsqSN85PGMAqSbfGJNRwQF8+ZwQ1+sVGNUTl/ZGEshPsOI3yV22tPIyHXrKXr3S0JxeYLrg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "glob": "~11.1.0",
+        "yargs": "~17.7.0"
+      },
+      "bin": {
+        "node-pg-migrate": "bin/node-pg-migrate.js"
+      },
+      "engines": {
+        "node": ">=20.11.0"
+      },
+      "peerDependencies": {
+        "@types/pg": ">=6.0.0 <9.0.0",
+        "pg": ">=4.3.0 <9.0.0"
+      },
+      "peerDependenciesMeta": {
+        "@types/pg": {
+          "optional": true
+        }
+      }
+    },
     "node_modules/nwsapi": {
       "version": "2.2.24",
       "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.24.tgz",
@@ -6131,6 +6333,13 @@
         "url": "https://github.com/sponsors/sindresorhus"
       }
     },
+    "node_modules/package-json-from-dist": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
+      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
+      "dev": true,
+      "license": "BlueOak-1.0.0"
+    },
     "node_modules/parent-module": {
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
@@ -6184,6 +6393,33 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/path-scurry": {
+      "version": "2.0.2",
+      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-2.0.2.tgz",
+      "integrity": "sha512-3O/iVVsJAPsOnpwWIeD+d6z/7PmqApyQePUtCndjatj/9I5LylHvt5qluFaBT3I5h3r1ejfR056c+FCv+NnNXg==",
+      "dev": true,
+      "license": "BlueOak-1.0.0",
+      "dependencies": {
+        "lru-cache": "^11.0.0",
+        "minipass": "^7.1.2"
+      },
+      "engines": {
+        "node": "18 || 20 || >=22"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
+    "node_modules/path-scurry/node_modules/lru-cache": {
+      "version": "11.5.2",
+      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.5.2.tgz",
+      "integrity": "sha512-4pfM1Ff0x50o0tQwb5ucw/RzNyD0/YJME6IVcStalZuMWxdt3sR3huStTtxz4PUmvZfRguvDejasvQ2kifR11g==",
+      "dev": true,
+      "license": "BlueOak-1.0.0",
+      "engines": {
+        "node": "20 || >=22"
+      }
+    },
     "node_modules/pathe": {
       "version": "2.0.3",
       "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
@@ -6201,6 +6437,95 @@
         "node": ">= 14.16"
       }
     },
+    "node_modules/pg": {
+      "version": "8.22.0",
+      "resolved": "https://registry.npmjs.org/pg/-/pg-8.22.0.tgz",
+      "integrity": "sha512-8wih1vVIBMxoUM2oB4soJsD9tDnDpLv4OXBJ+EJzFsvycD+lfyIreC2gGHq78f8jbLLt+bvlPTFdFZfJkOuzAA==",
+      "license": "MIT",
+      "dependencies": {
+        "pg-connection-string": "^2.14.0",
+        "pg-pool": "^3.14.0",
+        "pg-protocol": "^1.15.0",
+        "pg-types": "2.2.0",
+        "pgpass": "1.0.5"
+      },
+      "engines": {
+        "node": ">= 16.0.0"
+      },
+      "optionalDependencies": {
+        "pg-cloudflare": "^1.4.0"
+      },
+      "peerDependencies": {
+        "pg-native": ">=3.0.1"
+      },
+      "peerDependenciesMeta": {
+        "pg-native": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/pg-cloudflare": {
+      "version": "1.4.0",
+      "resolved": "https://registry.npmjs.org/pg-cloudflare/-/pg-cloudflare-1.4.0.tgz",
+      "integrity": "sha512-Vo7z/6rrQYxpNRylp4Tlob2elzbh+N/MOQbxFVWCxS7oEx6jF53GTJFxK2WWpKuBRkmiin4Mt+xofFDjx09R0A==",
+      "license": "MIT",
+      "optional": true
+    },
+    "node_modules/pg-connection-string": {
+      "version": "2.14.0",
+      "resolved": "https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.14.0.tgz",
+      "integrity": "sha512-XwWDGcLRGCXAR8F/AM5bG7Q+A3Wm2s6QeEjlOKZLlH3UYcguiqCWKyWXVag5TLTIjR7oOJUY8kcADaZgWPyLeg==",
+      "license": "MIT"
+    },
+    "node_modules/pg-int8": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz",
+      "integrity": "sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw==",
+      "license": "ISC",
+      "engines": {
+        "node": ">=4.0.0"
+      }
+    },
+    "node_modules/pg-pool": {
+      "version": "3.14.0",
+      "resolved": "https://registry.npmjs.org/pg-pool/-/pg-pool-3.14.0.tgz",
+      "integrity": "sha512-gKtPkFdQPU3DksooVLi9LsjZxrsBUZIpa+7aVx+LV5pNh0KzP4Zleud2po+ConrxbuXGBJ6Hfer6hdgpIBpBaw==",
+      "license": "MIT",
+      "peerDependencies": {
+        "pg": ">=8.0"
+      }
+    },
+    "node_modules/pg-protocol": {
+      "version": "1.15.0",
+      "resolved": "https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.15.0.tgz",
+      "integrity": "sha512-cq9sECI5s0+uPUXjbz8ioyPJni6RzsRib0US67i5IoTZKw8fNeYlVE7u8F4dG7vEJJtc5wdD1K189lCCUwqWTQ==",
+      "license": "MIT"
+    },
+    "node_modules/pg-types": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz",
+      "integrity": "sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==",
+      "license": "MIT",
+      "dependencies": {
+        "pg-int8": "1.0.1",
+        "postgres-array": "~2.0.0",
+        "postgres-bytea": "~1.0.0",
+        "postgres-date": "~1.0.4",
+        "postgres-interval": "^1.1.0"
+      },
+      "engines": {
+        "node": ">=4"
+      }
+    },
+    "node_modules/pgpass": {
+      "version": "1.0.5",
+      "resolved": "https://registry.npmjs.org/pgpass/-/pgpass-1.0.5.tgz",
+      "integrity": "sha512-FdW9r/jQZhSeohs1Z3sI1yxFQNFvMcnmfuj4WBMUTxOrAyLMaTcE1aAMBiTlbMNaXvBCQuVi0R7hd8udDSP7ug==",
+      "license": "MIT",
+      "dependencies": {
+        "split2": "^4.1.0"
+      }
+    },
     "node_modules/picocolors": {
       "version": "1.1.1",
       "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
@@ -6290,6 +6615,45 @@
         "node": "^10 || ^12 || >=14"
       }
     },
+    "node_modules/postgres-array": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz",
+      "integrity": "sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=4"
+      }
+    },
+    "node_modules/postgres-bytea": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.1.tgz",
+      "integrity": "sha512-5+5HqXnsZPE65IJZSMkZtURARZelel2oXUEO8rH83VS/hxH5vv1uHquPg5wZs8yMAfdv971IU+kcPUczi7NVBQ==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/postgres-date": {
+      "version": "1.0.7",
+      "resolved": "https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz",
+      "integrity": "sha512-suDmjLVQg78nMK2UZ454hAG+OAW+HQPZ6n++TNDUX+L0+uUlLywnoxJKDou51Zm+zTCjrCl0Nq6J9C5hP9vK/Q==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/postgres-interval": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz",
+      "integrity": "sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==",
+      "license": "MIT",
+      "dependencies": {
+        "xtend": "^4.0.0"
+      },
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
     "node_modules/prelude-ls": {
       "version": "1.2.1",
       "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
@@ -6466,6 +6830,16 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/require-directory": {
+      "version": "2.1.1",
+      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
+      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
     "node_modules/resolve": {
       "version": "2.0.0-next.7",
       "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.7.tgz",
@@ -6891,6 +7265,19 @@
       "dev": true,
       "license": "ISC"
     },
+    "node_modules/signal-exit": {
+      "version": "4.1.0",
+      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
+      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
+      "dev": true,
+      "license": "ISC",
+      "engines": {
+        "node": ">=14"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/isaacs"
+      }
+    },
     "node_modules/source-map-js": {
       "version": "1.2.1",
       "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
@@ -6900,6 +7287,15 @@
         "node": ">=0.10.0"
       }
     },
+    "node_modules/split2": {
+      "version": "4.2.0",
+      "resolved": "https://registry.npmjs.org/split2/-/split2-4.2.0.tgz",
+      "integrity": "sha512-UcjcJOWknrNkF6PLX83qcHM6KHgVKNkV62Y8a5uYDVv9ydGQVwAHMKqHdJje1VTWpljG0WYpCDhrCdAOYH4TWg==",
+      "license": "ISC",
+      "engines": {
+        "node": ">= 10.x"
+      }
+    },
     "node_modules/stable-hash": {
       "version": "0.0.5",
       "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
@@ -6935,6 +7331,28 @@
         "node": ">= 0.4"
       }
     },
+    "node_modules/string-width": {
+      "version": "4.2.3",
+      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
+      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "emoji-regex": "^8.0.0",
+        "is-fullwidth-code-point": "^3.0.0",
+        "strip-ansi": "^6.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
+    "node_modules/string-width/node_modules/emoji-regex": {
+      "version": "8.0.0",
+      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
+      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
+      "dev": true,
+      "license": "MIT"
+    },
     "node_modules/string.prototype.includes": {
       "version": "2.0.1",
       "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
@@ -7049,6 +7467,19 @@
         "url": "https://github.com/sponsors/ljharb"
       }
     },
+    "node_modules/strip-ansi": {
+      "version": "6.0.1",
+      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
+      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "ansi-regex": "^5.0.1"
+      },
+      "engines": {
+        "node": ">=8"
+      }
+    },
     "node_modules/strip-bom": {
       "version": "3.0.0",
       "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
@@ -7974,6 +8405,24 @@
         "node": ">=0.10.0"
       }
     },
+    "node_modules/wrap-ansi": {
+      "version": "7.0.0",
+      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
+      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "ansi-styles": "^4.0.0",
+        "string-width": "^4.1.0",
+        "strip-ansi": "^6.0.0"
+      },
+      "engines": {
+        "node": ">=10"
+      },
+      "funding": {
+        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
+      }
+    },
     "node_modules/ws": {
       "version": "8.21.1",
       "resolved": "https://registry.npmjs.org/ws/-/ws-8.21.1.tgz",
@@ -8013,6 +8462,54 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/xtend": {
+      "version": "4.0.2",
+      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
+      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
+      "license": "MIT",
+      "engines": {
+        "node": ">=0.4"
+      }
+    },
+    "node_modules/y18n": {
+      "version": "5.0.8",
+      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
+      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
+      "dev": true,
+      "license": "ISC",
+      "engines": {
+        "node": ">=10"
+      }
+    },
+    "node_modules/yargs": {
+      "version": "17.7.3",
+      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.3.tgz",
+      "integrity": "sha512-GZtjxm/J/4TSxuL3FNYjCmLktBTnIw/rVmKSIyKeYAZpmJB2ig9VauCC5xsa82GNKVKDAqpOn3KVzNt0zmrU0g==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "cliui": "^8.0.1",
+        "escalade": "^3.1.1",
+        "get-caller-file": "^2.0.5",
+        "require-directory": "^2.1.1",
+        "string-width": "^4.2.3",
+        "y18n": "^5.0.5",
+        "yargs-parser": "^21.1.1"
+      },
+      "engines": {
+        "node": ">=12"
+      }
+    },
+    "node_modules/yargs-parser": {
+      "version": "21.1.1",
+      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
+      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
+      "dev": true,
+      "license": "ISC",
+      "engines": {
+        "node": ">=12"
+      }
+    },
     "node_modules/yocto-queue": {
       "version": "0.1.0",
       "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
```

### workflow CI

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

## Commandes et résultats exploitables

```text

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack/projects/sfia-studio/app

 ✓ __tests__/oa/finops/postgres/t1.ledger.integration.test.ts (10 tests) 81ms
 ✓ __tests__/oa/finops/t1.coordinator.failopen.test.ts (5 tests) 89ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (14 tests) 6ms
 ✓ __tests__/oa/finops/importBoundaries.test.ts (7 tests) 9ms
 ✓ __tests__/oa/finops/t1.capture.unit.test.ts (23 tests) 8ms
 ✓ __tests__/oa/finops/period.test.ts (14 tests) 5ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 2ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 2ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 3ms

 Test Files  9 passed (9)
      Tests  92 passed (92)
   Start at  03:19:58
   Duration  2.23s (transform 201ms, setup 331ms, collect 351ms, tests 206ms, environment 1ms, prepare 345ms)
```

```text
ion.test.ts (19 tests) 9ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 3ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (9 tests) 9ms
 ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 14ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 8ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 8ms
 ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 7ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 5ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 4ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 7ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 6ms
 ✓ __tests__/oa/execution-run/ports.conformance.test.ts (5 tests) 6ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 8ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 5ms
 ✓ __tests__/oa/execution-run/adapter.events.redaction.test.ts (3 tests) 4ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (8 tests) 6ms
 ✓ __tests__/oa/execution-run/adapter.git.readonly.test.ts (4 tests) 3ms
 ✓ __tests__/oa/finops/importBoundaries.test.ts (7 tests) 5ms
 ✓ __tests__/oa/execution-run/evidence.test.ts (6 tests) 2ms
 ✓ __tests__/oa/finops/t1.capture.unit.test.ts (23 tests) 11ms
 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 4ms
 ✓ __tests__/oa/execution-run/policy.test.ts (9 tests) 2ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 3ms
 ✓ __tests__/oa/execution-run/transitions.test.ts (8 tests) 3ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 3ms
 ✓ __tests__/oa/execution-run/adapter.ai.fake.test.ts (2 tests) 4ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (14 tests) 7ms
 ✓ __tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts (6 tests) 3ms
 ✓ __tests__/oa/execution-run/adversarial.providerBoundary.test.ts (17 tests) 2ms
 ✓ __tests__/oa/finops/period.test.ts (14 tests) 4ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 2ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 4ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 3ms

 Test Files  138 passed | 1 skipped (139)
      Tests  1398 passed | 10 skipped (1408)
   Start at  03:20:32
   Duration  71.46s (transform 4.32s, setup 5.14s, collect 11.64s, tests 24.98s, environment 7.38s, prepare 5.57s)
```

- typecheck passed
- lint passed
- build passed
- governance 73 passed
- migrate up/down-with-data-refused/down-empty/up-final validated
- test:db 10 passed
- full serial suite 1398 passed / 10 skipped

## Preuves ciblées

- Safe integer : MAX_SAFE_INTEGER accepté ; +1 refusé ; somme overflow → invalid ; contrainte PG `<= 9007199254740991`
- Réseau retryable : ECONNREFUSED / ETIMEDOUT / SQLSTATE 08006 → FINOPS_DB_UNAVAILABLE
- Audit isolation : throw après created/duplicate/failed ne change pas le diagnostic ledger
- SSL : option explicite ; défaut false ; Neon non connecté
- Mapper unused removed
- Absence secret / Neon / Money columns

## Verdict

FINOPS TECHNICAL LOT T1 DELIVERY VALIDATION CORRECTIONS COMPLETED —
T1-VAL-01 CLOSED —
T1-VAL-02 CLOSED —
T1-VAL-03 CLOSED —
T1-VAL-04 CLOSED —
T1-VAL-05 CLOSED —
DOCUMENT 135 PRESERVED BYTE-IDENTICAL —
DOCUMENT 136 PRESERVED BYTE-IDENTICAL —
DOCUMENT 137 UPDATED —
SAFE INTEGER CONTRACT IMPLEMENTED —
POSTGRES BIGINT PRECISION GUARDED —
TRANSIENT NODE DATABASE ERRORS CLASSIFIED RETRYABLE —
AUDIT FAILURE ISOLATED FROM LEDGER OUTCOME —
LOCAL SSL CONFIGURATION EXPLICIT AND NEON SSL DEFERRED —
UNUSED PROVIDER MAPPING REMOVED —
MIGRATION UP/DOWN VALIDATED —
POSTGRES INTEGRATION TESTS PASSED —
FULL DETERMINISTIC TEST SUITE PASSED —
TYPECHECK PASSED —
LINT PASSED —
BUILD PASSED —
GOVERNANCE TESTS PASSED —
NO MONEY OR CURRENCY —
NO NEON —
NO OPENAI PROVIDER-REAL —
NO REAL CREDENTIAL —
NO PROJECT COMMIT OR PUSH —
NO PR —
REVIEW HANDOFF COMPLETE AND REMOTE VERIFIED —
READY FOR CHATGPT REVALIDATION —
NOT AUTHORIZED FOR PUBLICATION
