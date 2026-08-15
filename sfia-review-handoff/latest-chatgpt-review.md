# SFIA Review Pack — FULL

## 1. Timestamp (Europe/Paris)
2026-08-15 07:23:30 CEST

## 2. GO exact
GO Morris M5 Delivery
(GO MORRIS CONSOMMÉ — M5 DELIVERY)

## 3. Cycle / Profile / Typology
- Cycle: **8 — Delivery / implémentation**
- Profile: **Critical**
- Typology: **EVOL**

## 4. Repo / branch / HEAD / base / origin-main
- Repo: `mcleland147/sfia-workspace`
- Worktree: `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off`
- Branch: `delivery/sfia-studio-m5-evidence-return`
- HEAD: `129570dfd44af5b4d466cc3dc0c166d928d26ef5`
- origin/main: `129570dfd44af5b4d466cc3dc0c166d928d26ef5`
- Expected base: `129570dfd44af5b4d466cc3dc0c166d928d26ef5`
- Match: **YES** (HEAD == origin/main == expected; Delivery uncommitted local)
- Remote delivery branch: **absent** (local-only, as authorized — no project push)
- Incoming `origin/sfia/review-handoff` at Delivery start / pre-publish: `183e0481af66cfad94a9f17694aa6195fe4f3b7d` (expected `183e0481af66cfad94a9f17694aa6195fe4f3b7d`)

## 5. Convergence pre-check
- Capability principale: **V3-F14 Artifact Completeness**
- Capacités directement servies: V3-F13, V3-F02, V3-F04, V3-F05, V3-F09
- Milestone: **M5 — Retour de preuve + analyse Nora**
- Previous: **M4 CLOSED**
- Next capability AFTER M5 closure: **M6 — Boucle projet complète** (**NOT AUTHORIZED**)
- Architecture parallel? **NO**
- Classifications applied:
  - ExecutionAttempt domain/ports = KEEP
  - Memory ExecutionAttempt product adapter = REPLACE ON PRODUCT PATH (KEEP for tests)
  - Evidence domain/ports/use cases = KEEP
  - Memory Evidence product adapter = REPLACE ON PRODUCT PATH (KEEP for tests)
  - ReviewBundle domain/ports/use cases = KEEP
  - Memory ReviewBundle product adapter = REPLACE ON PRODUCT PATH (KEEP for tests)
  - Product SQLite backbone = KEEP / COMPLETE (m5-0.1.0)
  - LivingProjectState = KEEP
  - AppendLivingProjectStateVersion = ADAPT (W1)
  - RecommendNextGate = KEEP / RECOMMENDATION-ONLY
  - Nora/F3 compose = HARVEST / ADAPT (no new engine)
  - technical launch journal = KEEP / TEMPORARY WITH EXIT
  - Claims/Maturity = FREEZE (remain Memory)
  - Timeout = OUT OF M5 CRITICAL PATH (unchanged 60000)

## 6. Capability / milestone / next
M5 local Product path candidate. M6 not authorized. M5 CLOSED ≠ this Delivery.

## 7. Sources réellement lues
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`
- `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md`
- Historical handoff `sfia/review-handoff/latest-chatgpt-review.md` @ `63f41e3f328868286c14312a58a7b79f850383c0` (M5 entry qualification)
- Process templates / CKC synthetic map / v2.5 cycles method (guidance only)
- `.github/workflows/sfia-studio-ci.yml` (read-only)
- Repo discovery of Attempt / Evidence / ReviewBundle / Project SQLite / Runtime / F3

## 8. Git Truth before
- origin/main = `129570dfd44af5b4d466cc3dc0c166d928d26ef5` ✅
- tracked/staged clean ✅
- Untracked authorized: `.tmp-sfia-review/**` ✅
- `SFIA_STUDIO_CURSOR_REAL` unset ✅
- `OPS1_CURSOR_REAL` unset ✅
- Branch created: `git switch -c delivery/sfia-studio-m5-evidence-return origin/main` ✅

## 9. Repo discovery (réelle)
- Memory Attempt store carried: activeByContractId Map, resultRecordingAttempts Map, runInTransaction snapshots
- Use cases T-A5 depended on MemoryExecutionAttemptStore concrete type for txn + result budget
- Evidence/RB Memory repos with OCC + idempotency + successor atomic reopen
- Product SQLite was m3-0.1.0 with Project/LPS/Cycle/HD/EC; no Attempt/Evidence/RB tables
- Runtime `wireOaStack` used Memory Attempt + Memory Evidence when productSqlite present
- LPS types already had evidenceIds/reviewBundleIds but Append request did not write them (dropped on later appends)
- F3 ingestEvidenceAndRecommend existed; product path still had fixture markers historically
- M4 technical journal `sqliteLaunchSafetyJournal.ts` isolated — left untouched (diff empty for that file)

## 10. Liste exacte des fichiers modifiés/créés

### Modified
```
M	projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
M	projects/sfia-studio/app/features/project-assistant/actions.ts
M	projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
M	projects/sfia-studio/app/features/project-assistant/f3/index.ts
M	projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/index.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
M	projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
M	projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
M	projects/sfia-studio/app/lib/oa/project/domain/types.ts
M	projects/sfia-studio/app/lib/oa/project/index.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
M	projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
M	projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
```

### Created (untracked in Delivery working tree)
- projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts
- projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
- projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
- projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
- projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
- projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
- projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
- projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts
- projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts
- projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts
- projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts
- projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts

### Diff stat
```
 .../oa/decision/m3ProductSchemaMigration.test.ts   | 10 ++-
 .../app/features/project-assistant/actions.ts      |  1 +
 .../f3/confirmAndExecuteF3Fixture.ts               |  8 +-
 .../app/features/project-assistant/f3/index.ts     |  1 +
 .../f3/ingestEvidenceAndRecommend.ts               | 28 +++++++
 .../app/lib/oa/evidence-review/index.ts            | 14 +++-
 .../application/cancelExecutionAttempt.ts          |  4 +-
 .../application/recordExecutionFailure.ts          |  4 +-
 .../application/recordExecutionResult.ts           |  4 +-
 .../application/selectExecutionAgent.ts            |  4 +-
 .../application/startExecution.ts                  |  4 +-
 .../application/triggerAttemptTimeout.ts           |  4 +-
 .../app/lib/oa/execution-attempt/index.ts          | 15 +++-
 .../application/appendLivingProjectStateVersion.ts | 12 +++
 .../sfia-studio/app/lib/oa/project/domain/types.ts | 10 +++
 projects/sfia-studio/app/lib/oa/project/index.ts   |  1 +
 .../app/lib/oa/project/infrastructure/sqlite/db.ts | 87 +++++++++++++++++++++-
 .../infrastructure/sqlite/productSqliteHandle.ts   | 14 +++-
 .../infrastructure/sqlite/sqliteProductStore.ts    | 15 +++-
 .../app/lib/vertical-slice-runtime/service.ts      | 51 +++++++++----
 20 files changed, 253 insertions(+), 38 deletions(-)
```

## 11. Architecture implémentée
**M5-A OPTION B** — Attempt + Evidence + ReviewBundle durables dans le Product SQLite OA existant (même SqliteProductStore / DatabaseSync).
**M5-B W1** — append factuel LPS evidenceIds/reviewBundleIds (merge+dedup dans F3 helper; carry-forward OCC dans Append).
**M5-C** — technical launch journal M4 inchangé (KEEP TEMPORARY WITH EXIT).
Pas de second Product Store. Pas de nouveau moteur Nora/M5. Claims/Maturity restent Memory.

## 12. Schema version before/after
- Before: `m3-0.1.0`
- After: `m5-0.1.0`
- Constants: `PRODUCT_SCHEMA_VERSION_M1/M2/M3` retained; `PRODUCT_SCHEMA_VERSION = "m5-0.1.0"`

## 13. Tables/indexes ajoutés
- `oa_execution_attempts` (+ index contract)
- `oa_execution_attempt_active` (PK contract → attempt; one active non-terminal)
- `oa_execution_attempt_result_budget` (durable resultRecordingAttempts)
- `oa_evidence` (+ index project)
- `oa_evidence_idempotency`
- `oa_review_bundles` (+ index project)
- `oa_review_bundle_idempotency`

## 14. Migration behavior
- NULL / M1 → apply M2+M3+M5 → m5-0.1.0
- M2 → M3+M5 → m5-0.1.0
- M3 → M5 → m5-0.1.0
- m5 reopen → idempotent
- unknown/future → FAIL CLOSED
- Aucune migration destructive; tables M1–M3 préservées

## 15. ExecutionAttempt durable semantics
SqliteExecutionAttemptRepository behind ExecutionAttemptRepositoryPort:
findById / findByIdempotencyKey / exists / create / update OCC / listByContract / reserveActiveContract / releaseActiveContract / rebuildActiveIndex / detectActiveIndexDrift / assertActiveIndexConsistent.
Invariant: ≤1 non-terminal Attempt per executionContractId survives restart via `oa_execution_attempt_active`.

## 16. Hidden Memory store state audit
| Concern | Discovery | Disposition |
|---|---|---|
| activeByContractId | process Map + rebuild | **Durable** via `oa_execution_attempt_active` (+ rebuild/drift APIs) |
| resultRecordingAttempts | process Map; fail-closed budget after restart would reset if not persisted | **Durable** via `oa_execution_attempt_result_budget` (SqliteExecutionAttemptTechnicalStore Map facade) |
| runInTransaction | Memory snapshot rollback | **Port** `ExecutionAttemptTechnicalStorePort.runInTransaction` — Memory keeps snapshot semantics; SQLite uses Product `runInTransaction` |
| Use-case typing | concrete Memory store | Narrowed to `ExecutionAttemptTechnicalStorePort` (Memory still satisfies) |

No STOP — EXECUTION ATTEMPT DURABILITY REVEALS UNRESOLVED STRUCTURAL STATE (budget durability covered within OPTION B Product SQLite).

## 17. Evidence persistence semantics
SqliteEvidenceRepository: create/read, idempotency survives restart, OCC update, bindings/technicalResultRef/provenance in payload_json. EvidenceReaderPort unchanged.

## 18. ReviewBundle persistence semantics
SqliteReviewBundleRepository: create/read, idempotency, OCC, evidence refs / frozen snapshots in payload, `createSuccessorAndMarkSuperseded` atomic via Product transaction. Claim/Maturity not persisted.

## 19. RuntimeOaStack wiring
`vertical-slice-runtime/service.ts`: when `productSqlite` present → `createSqliteExecutionAttemptServices` + `createSqliteEvidenceReviewServices`; Memory path retained otherwise. REAL-OFF comments preserved; **no** `createStudioCursorRealBoundary` / realBoundary wiring. Claim/Maturity Memory.

## 20. W1 implementation
- `AppendLivingProjectStateRequest.evidenceIds?` / `reviewBundleIds?`
- Append carries forward existing LPS ids when omitted (fixes prior drop)
- F3 `appendEvidenceOutcomeToLps`: merge existing + new, `Set` dedup, OCC expectedVersion
- Does **not** mutate trajectory / activeCycle / decisionIds / HumanDecision / gate / authority / maturity

## 21. Nora/F3 product path
- Harvest: IngestExecutionAttemptEvidence / CreateReviewBundle / RecommendNextGate / existing compose
- `ingestEvidenceAndRecommend` optionally receives projectServices → W1 append after Evidence+RB
- `confirmAndExecuteF3Fixture` / actions wired for optional LPS link
- No new M5Engine / NoraEngine
- Fixture historical path retained; Product-created IDs are not claimed as fixture

## 22. Durable UI/readback path
After restart: LPS current → evidenceIds/reviewBundleIds → Evidence/RB readers by id → RecommendNextGate recompute. No listByProject added. No UI redesign (data wiring only).

## 23. Current vs target (IMPLEMENTED locally)
| Target | Status |
|---|---|
| Product SQLite M5 schema additive | IMPLEMENTED |
| Durable Attempt/Evidence/RB | IMPLEMENTED |
| Runtime Product path adapters | IMPLEMENTED |
| Memory adapters for tests | KEPT |
| W1 LPS factual append | IMPLEMENTED |
| Durable F3/Nora readback path | IMPLEMENTED (LPS ids + ports) |
| RecommendNextGate recommendation-only | KEPT + tests |
| M4 journal / REAL-OFF / Gate D / timeout | UNCHANGED |
| M5 CLOSED | **NOT CLAIMED** |
| M6 | **NOT AUTHORIZED / 0** |

## 24. Technical journal proof = unchanged
`sqliteLaunchSafetyJournal.ts` **not** in git diff (present on disk, unmodified). M5-C KEEP TEMPORARY WITH EXIT.

## 25. REAL proof = ZERO
- `SFIA_STUDIO_CURSOR_REAL` unset
- `OPS1_CURSOR_REAL` unset
- No Gate D grant
- No REAL launch / retry
- Runtime default REAL-OFF preserved
- Restart/worker proofs use Product SQLite + seeded/no-effect paths only

## 26. Tests ciblés — commandes + résultats
(Executed by Delivery agent from `projects/sfia-studio/app`; REAL env absent)

| Suite | Result |
|---|---|
| `npm test -- __tests__/oa/project` | **46 passed** |
| `npm test -- __tests__/oa/execution-attempt` | **133 passed** |
| `npm test -- __tests__/oa/evidence-review` | **142 passed** |
| `npm test -- __tests__/vertical-slice-runtime` | **13 passed** |
| `npm test -- __tests__/project-assistant` | **pass** |
| `npm test -- __tests__/recommendation-vs-decision.test.tsx` | **2 passed** |

New M5 suites include: schema migration M1/M2/M3→M5; Attempt durability; Evidence/RB durability; W1 LPS; **process restart proof** (two Node processes, same DB).

## 27. typecheck / lint / build / full Vitest
| Check | Result |
|---|---|
| `npm run typecheck` | **green** |
| `npm run lint` | **green** |
| `npm run build` | **green** |
| `npm test` (full) | **1710 passed**, 131 skipped |

## 28. Modeled governance tests
From `projects/sfia-studio`:
`node --test` evidence-review-maturity / execution-contract / execution-attempt governance → **73 passed**

## 29. Restart proof détaillé
Process A (worker create): temp Product DB → Project+LPS → terminal Attempt (accepted) + result budget → Evidence → ReviewBundle → W1 LPS append → exit.
Process B (worker read): reopen same dbPath → Attempt status `accepted`, resultBudget=1, same evidenceId/reviewBundleId, LPS evidenceIds/reviewBundleIds intact, same lpsVersion.
REAL invocations = 0.

## 30. Anti-claim proof
- Recommendation.kind = recommendation (existing adversarial tests kept)
- executionAuthority = false
- gateConsumed = false
- decisionCreated = false
- W1 does not create HumanDecision
- W1 does not structurally mutate trajectory
- Durable Attempt ≠ journal retirement
- Local Delivery ≠ M5 CLOSED ≠ M6 authorized

## 31. FULL git diff — ALL modified + created content
See sections below (mandatory FULL content).

## 32. git diff --check
```

```
(empty = clean; exit 0)

## 33. Final Git status (pre-handoff publish; project uncommitted)
```
 M projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/index.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
 M projects/sfia-studio/app/lib/oa/project/domain/types.ts
 M projects/sfia-studio/app/lib/oa/project/index.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
 M projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts
?? projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
?? projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts
?? projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts
?? projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts
```
- staged = empty
- project commit = 0
- project push = 0
- project PR = 0

## 34. Réserves
- Non-blocking: Claims/Maturity remain Memory (intentional FREEZE / out of minimal M5)
- Non-blocking: Cross-aggregate Attempt/Evidence/RB/LPS not single distributed TX — idempotent retry converges; failure after Evidence/RB before LPS append does not claim SUCCESS (F3 helper returns ok:false); no compensatory HumanDecision
- Non-blocking: `CURSOR_REAL_TIMEOUT_POLICY` remains OPEN / NON-BLOCKING; 60000 KEEP FOR NOW
- Non-blocking: UI is wiring-only; no pixel-perfect UX claim
- Blocking for M5 CLOSED: **none claimed here** — exit proof acceptance is a future Morris gate after ChatGPT review + commit/push/PR/merge GOs

## 35. DebtItems / exit conditions
- Debt: M5-C journal retirement still TEMPORARY WITH EXIT (not authorized this cycle)
- Debt: Claims/Maturity Product durability deferred
- Exit to M5 CLOSED requires separate Morris evaluation of exit proof after merge path
- M6 requires distinct future GO

## 36. M5 exit proof matrix (local Delivery)
| Criterion | Local proof | Status |
|---|---|---|
| 1 Product SQLite schema M5 additive | db.ts m5-0.1.0 + migration tests | SATISFIED LOCALLY |
| 2 ExecutionAttempt durable | SQLite adapter + tests + restart | SATISFIED LOCALLY |
| 3 Evidence durable | SQLite adapter + tests + restart | SATISFIED LOCALLY |
| 4 ReviewBundle durable | SQLite adapter + tests + restart | SATISFIED LOCALLY |
| 5 IDs/provenance cohérents | payload bindings + LPS ids | SATISFIED LOCALLY |
| 6 RuntimeOaStack Product path | wireOaStack sqlite factories | SATISFIED LOCALLY |
| 7 Memory adapters tests/fallback | factories kept | SATISFIED LOCALLY |
| 8 fixture/no-effect path intact | F3 fixture path kept | SATISFIED LOCALLY |
| 9 M4 REAL default OFF | runtime comments + no realBoundary | SATISFIED LOCALLY |
| 10 technical journal unchanged | no diff on journal file | SATISFIED LOCALLY |
| 11 W1 LPS N+1 factuel | append + tests | SATISFIED LOCALLY |
| 12 evidenceIds/RB ids survive restart | process proof | SATISFIED LOCALLY |
| 13 Attempt/resultRef survive restart | process proof | SATISFIED LOCALLY |
| 14 Evidence/RB survive restart | process proof | SATISFIED LOCALLY |
| 15 Recommendation recomputable | ports + readers + tests | SATISFIED LOCALLY |
| 16 kind=recommendation | adversarial tests | SATISFIED LOCALLY |
| 17 executionAuthority=false | tests | SATISFIED LOCALLY |
| 18 gateConsumed=false | tests | SATISFIED LOCALLY |
| 19 decisionCreated=false | tests | SATISFIED LOCALLY |
| 20 no implicit HumanDecision | W1 factual only | SATISFIED LOCALLY |
| 21 no automatic execution | no StartExecution from Recommendation | SATISFIED LOCALLY |
| 22 Cursor REAL = 0 | env unset; no REAL path | SATISFIED LOCALLY |
| 23 M6 work = 0 | scope | SATISFIED LOCALLY |
| 24 QA ciblée PASS | suites above | SATISFIED LOCALLY |
| 25 typecheck/lint/build/full unit | green / 1710 | SATISFIED LOCALLY |
| Morris M5 CLOSED acceptance | — | **NOT PROVEN** (future gate) |

## 37. Verdict
**M5 DELIVERY IMPLEMENTED LOCALLY — OPTION B + W1 PRODUCT PATH COMPLETE — ZERO REAL — M6 NOT AUTHORIZED — READY FOR CHATGPT QA REVIEW**

(PRODUCT PATH COMPLETE = local reviewable candidate ≠ M5 CLOSED)

## 38. Next Morris gate
1. ChatGPT QA/review of this handoff
2. Corrections locales si nécessaires
3. Morris GO commit/push/PR (if readiness)
4. Morris GO merge séparé
5. Post-merge / M5 exit proof evaluation
6. Morris décision M5 exit/closure
7. M6 only under distinct future GO

---

# FULL DIFF — MODIFIED FILES
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
index 04202fb..e1fe203 100644
--- a/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
@@ -15,6 +15,7 @@ import {
 import {
   PRODUCT_SCHEMA_VERSION,
   PRODUCT_SCHEMA_VERSION_M2,
+  PRODUCT_SCHEMA_VERSION_M3,
   createTestSqliteProductProjectServices,
   type ActorReference,
   type SqliteProductProjectServices,
@@ -129,7 +130,8 @@ describe("M3 Product SQLite schema migration", () => {
       .prepare("SELECT value FROM schema_meta WHERE key = ?")
       .get("schema_version") as { value: string };
     expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
-    expect(PRODUCT_SCHEMA_VERSION).toBe("m3-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");
+    expect(PRODUCT_SCHEMA_VERSION).toBe("m5-0.1.0");

     const decisions = svc.store.db
       .prepare(
@@ -141,8 +143,14 @@ describe("M3 Product SQLite schema migration", () => {
         `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_execution_contracts'`,
       )
       .get() as { name?: string } | undefined;
+    const attempts = svc.store.db
+      .prepare(
+        `SELECT name FROM sqlite_master WHERE type='table' AND name='oa_execution_attempts'`,
+      )
+      .get() as { name?: string } | undefined;
     expect(decisions?.name).toBe("oa_human_decisions");
     expect(contracts?.name).toBe("oa_execution_contracts");
+    expect(attempts?.name).toBe("oa_execution_attempts");

     const project = await svc.getProject.execute({ projectId: "prj:m3-mig" });
     expect(project.ok).toBe(true);
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 4b05d0d..18b2a97 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -467,6 +467,7 @@ export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
       executionAttemptServices: runtime.oa.executionAttemptServices,
       evidenceReviewServices: runtime.oa.evidenceReviewServices,
       fixtureAdapter: runtime.oa.fixtureAdapter,
+      projectServices: runtime.oa.projectServices,
       nowIso: () => runtime.oa!.clock.nowIso(),
     },
   });
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
index 261e3e6..a1c89b9 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteF3Fixture.ts
@@ -18,6 +18,7 @@ import type {
   TestExecutionAdapter,
 } from "@/lib/oa/execution-attempt";
 import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type { ProjectServices } from "@/lib/oa/project";
 import type { F2ContextSnapshot } from "../f2/types";
 import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
 import {
@@ -43,6 +44,8 @@ export type ConfirmExecuteF3Deps = {
   evidenceReviewServices: EvidenceReviewServices;
   fixtureAdapter: TestExecutionAdapter;
   nowIso: () => string;
+  /** Product path — enables M5-B W1 LPS evidence/RB factual append. */
+  projectServices?: ProjectServices;
 };

 function authorityEvidenceIdForProposal(proposalId: string): string {
@@ -113,7 +116,10 @@ async function buildExecutePayload(input: {
     projectId: input.projectId,
     attemptId: input.attempt.attemptId,
     executionContractId: input.contract.executionContractId,
-    deps: { evidenceReviewServices: input.deps.evidenceReviewServices },
+    deps: {
+      evidenceReviewServices: input.deps.evidenceReviewServices,
+      projectServices: input.deps.projectServices,
+    },
   });
   if (!ingested.ok) {
     return ingested;
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index ba86054..23c6e2f 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -14,6 +14,7 @@ export { prepareM3FromDecision } from "./prepareM3FromDecision";
 export type { F3M3PreparePayload, PrepareM3Deps } from "./prepareM3FromDecision";
 export { confirmAndExecuteF3Fixture } from "./confirmAndExecuteF3Fixture";
 export { ingestEvidenceAndRecommend } from "./ingestEvidenceAndRecommend";
+export { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
 export {
   createF3FixtureAgentDescriptor,
   createF3TestExecutionAdapter,
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts b/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
index 5c6039a..c4ad4b3 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/ingestEvidenceAndRecommend.ts
@@ -1,10 +1,13 @@
 /**
  * IngestExecutionAttemptEvidence → CreateReviewBundle → RecommendNextGate.
  * Recommendation-only; HARD refs passed through; no auto-launch.
+ * M5-B W1: when projectServices present, append factual LPS evidence/RB ids.
  */

 import type { EvidenceReviewServices } from "@/lib/oa/evidence-review";
+import type { ProjectServices } from "@/lib/oa/project";
 import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";
+import { appendEvidenceOutcomeToLps } from "./appendEvidenceOutcomeToLps";
 import {
   F3_LABELS,
   F3_MODE,
@@ -18,6 +21,11 @@ import type {

 export type IngestRecommendDeps = {
   evidenceReviewServices: EvidenceReviewServices;
+  /** When present (product path), perform M5-B W1 LPS factual link append. */
+  projectServices?: Pick<
+    ProjectServices,
+    "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
+  >;
 };

 export type IngestRecommendResult =
@@ -26,6 +34,7 @@ export type IngestRecommendResult =
       evidence: F3EvidenceDto;
       reviewBundle: F3ReviewBundleDto;
       recommendation: F3RecommendationDto;
+      lpsVersion?: number;
     }
   | { ok: false; code: string; message: string };

@@ -85,6 +94,24 @@ export async function ingestEvidenceAndRecommend(input: {
     };
   }

+  let lpsVersion: number | undefined;
+  if (input.deps.projectServices) {
+    const linked = await appendEvidenceOutcomeToLps({
+      projectId: input.projectId,
+      evidenceId: ingested.evidence.evidenceId,
+      reviewBundleId: bundle.reviewBundle.reviewBundleId,
+      projectServices: input.deps.projectServices,
+    });
+    if (!linked.ok) {
+      return {
+        ok: false,
+        code: linked.code,
+        message: linked.message,
+      };
+    }
+    lpsVersion = linked.lpsVersion;
+  }
+
   const recommended =
     await input.deps.evidenceReviewServices.recommendNextGate.execute({
       projectId: input.projectId,
@@ -163,5 +190,6 @@ export async function ingestEvidenceAndRecommend(input: {
       recommendationLabel: F3_LABELS.recommendationNotDecision,
       mode: F3_MODE,
     },
+    lpsVersion,
   };
 }
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 474d8b4..45d97c4 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -88,6 +88,14 @@ export {

 export { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
 export { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
+export { SqliteEvidenceRepository } from "./infrastructure/sqlite/sqliteEvidenceRepository";
+export { SqliteReviewBundleRepository } from "./infrastructure/sqlite/sqliteReviewBundleRepository";
+export {
+  createSqliteEvidenceReviewServices,
+  createTestSqliteEvidenceReviewServices,
+  type CreateSqliteEvidenceReviewServicesOptions,
+  type SqliteEvidenceReviewServices,
+} from "./infrastructure/sqlite/createSqliteEvidenceReviewServices";
 export { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
 export type { FakePayloadScript } from "./infrastructure/fakeEvidencePayloadAdapter";
 export { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
@@ -162,16 +170,18 @@ import type { ClaimEvaluationReaderPort } from "./ports/claimEvaluationReader";
 import type { EvidenceAuditPort } from "./ports/evidenceAudit";
 import type { EvidencePayloadPort } from "./ports/evidencePayloadPort";
 import type { EvidenceReaderPort } from "./ports/evidenceReader";
+import type { EvidenceRepositoryPort } from "./ports/evidenceRepository";
 import type { ExecutionAttemptReaderPort } from "./ports/executionAttemptReader";
 import type { IdGeneratorPort } from "./ports/idGenerator";
 import type { MaturityAssessmentReaderPort } from "./ports/maturityAssessmentReader";
 import type { ReviewBundleReaderPort } from "./ports/reviewBundleReader";
+import type { ReviewBundleRepositoryPort } from "./ports/reviewBundleRepository";

 export type EvidenceReviewServices = {
   store: MemoryEvidenceStore;
-  repository: MemoryEvidenceRepository;
+  repository: EvidenceRepositoryPort;
   reviewBundleStore: MemoryReviewBundleStore;
-  reviewBundleRepository: MemoryReviewBundleRepository;
+  reviewBundleRepository: ReviewBundleRepositoryPort;
   reviewBundleReader: ReviewBundleReaderPort;
   claimEvaluationStore: MemoryClaimEvaluationStore;
   claimEvaluationRepository: MemoryClaimEvaluationRepository;
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
index 03ea617..3f394db 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/cancelExecutionAttempt.ts
@@ -21,7 +21,7 @@ import type {
   ExecutionAttempt,
   ExecutionAttemptResult,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
@@ -43,7 +43,7 @@ export class CancelExecutionAttempt {
     private readonly adapter: ExecutionAdapterPort,
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
index be8de58..6226702 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionFailure.ts
@@ -11,7 +11,7 @@ import type {
   ExecutionAttemptResult,
   RecordExecutionFailureRequest,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
@@ -26,7 +26,7 @@ export class RecordExecutionFailure {
     private readonly registry: AgentRegistryPort,
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
index 175cdc4..c0d5d0d 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
@@ -16,7 +16,7 @@ import type {
   ExecutionAttemptResult,
   RecordExecutionResultRequest,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
@@ -33,7 +33,7 @@ export class RecordExecutionResult {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly policy: AttemptPolicy,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
index 5bb7b9f..a0f03b9 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/selectExecutionAgent.ts
@@ -35,7 +35,7 @@ import type {
   SelectExecutionAgentRequest,
   SelectionStrategy,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
@@ -59,7 +59,7 @@ export class SelectExecutionAgent {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly policy: AttemptPolicy,
-    private readonly store?: MemoryExecutionAttemptStore,
+    private readonly store?: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
index 9eb798c..576a400 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
@@ -52,7 +52,7 @@ import type {
   GateDGrant,
 } from "../domain/realLaunchSafety";
 import { isM4BoundedReadOnlyRealAgent } from "../infrastructure/m4BoundedReadOnlyCursorAgent";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { AgentRegistryPort } from "../ports/agentRegistry";
 import type { ExecutionAdapterPort } from "../ports/executionAdapter";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
@@ -139,7 +139,7 @@ export class StartExecution {
     private readonly adapter: ExecutionAdapterPort,
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
-    private readonly store?: MemoryExecutionAttemptStore,
+    private readonly store?: ExecutionAttemptTechnicalStorePort,
     private readonly realLaunchPort?: RealExecutionLaunchPort,
     private readonly safetyJournal?: RealLaunchSafetyJournalPort,
   ) {}
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
index fde1e69..0600f33 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts
@@ -19,7 +19,7 @@ import type {
   ExecutionAttemptResult,
   TriggerAttemptTimeoutRequest,
 } from "../domain/types";
-import type { MemoryExecutionAttemptStore } from "../infrastructure/memoryExecutionAttemptStore";
+import type { ExecutionAttemptTechnicalStorePort } from "../ports/executionAttemptTechnicalStorePort";
 import type { ExecutionAttemptAuditPort } from "../ports/executionAttemptAudit";
 import type { ExecutionAttemptRepositoryPort } from "../ports/executionAttemptRepository";
 import {
@@ -39,7 +39,7 @@ export class TriggerAttemptTimeout {
     private readonly clock: ClockPort,
     private readonly audit: ExecutionAttemptAuditPort,
     private readonly policy: AttemptPolicy,
-    private readonly store: MemoryExecutionAttemptStore,
+    private readonly store: ExecutionAttemptTechnicalStorePort,
   ) {}

   async execute(
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
index 85ec45b..2b74f41 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
@@ -46,6 +46,7 @@ export * from "./domain/invariants";
 export * from "./domain/realLaunchSafety";

 export * from "./ports/executionAttemptRepository";
+export * from "./ports/executionAttemptTechnicalStorePort";
 export * from "./ports/agentRegistry";
 export * from "./ports/executionAdapter";
 export * from "./ports/executionAttemptAudit";
@@ -86,6 +87,14 @@ export {

 export { MemoryExecutionAttemptStore } from "./infrastructure/memoryExecutionAttemptStore";
 export { MemoryExecutionAttemptRepository } from "./infrastructure/memoryExecutionAttemptRepository";
+export { SqliteExecutionAttemptRepository } from "./infrastructure/sqlite/sqliteExecutionAttemptRepository";
+export { SqliteExecutionAttemptTechnicalStore } from "./infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore";
+export {
+  createSqliteExecutionAttemptServices,
+  createTestSqliteExecutionAttemptServices,
+  type CreateSqliteExecutionAttemptServicesOptions,
+  type SqliteExecutionAttemptServices,
+} from "./infrastructure/sqlite/createSqliteExecutionAttemptServices";
 export { MemoryAgentRegistry } from "./infrastructure/memoryAgentRegistry";
 export { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
 export type {
@@ -169,6 +178,8 @@ import { TestExecutionAdapter } from "./infrastructure/testExecutionAdapter";
 import type { AgentDescriptor } from "./domain/types";
 import type { AgentRegistryPort } from "./ports/agentRegistry";
 import type { ExecutionAttemptAuditPort } from "./ports/executionAttemptAudit";
+import type { ExecutionAttemptRepositoryPort } from "./ports/executionAttemptRepository";
+import type { ExecutionAttemptTechnicalStorePort } from "./ports/executionAttemptTechnicalStorePort";
 import type { RealExecutionLaunchPort } from "./ports/realExecutionLaunchPort";
 import type { RealLaunchSafetyJournalPort } from "./ports/realLaunchSafetyJournalPort";

@@ -196,8 +207,8 @@ export type RealBoundaryWiring = {
 };

 export type ExecutionAttemptServices = {
-  store: MemoryExecutionAttemptStore;
-  attempts: MemoryExecutionAttemptRepository;
+  store: ExecutionAttemptTechnicalStorePort;
+  attempts: ExecutionAttemptRepositoryPort;
   registry: AgentRegistryPort;
   adapter: InjectableExecutionAdapter;
   audit: ExecutionAttemptAuditPort;
diff --git a/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts b/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
index d15101f..8b019b7 100644
--- a/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
+++ b/projects/sfia-studio/app/lib/oa/project/application/appendLivingProjectStateVersion.ts
@@ -266,6 +266,18 @@ export class AppendLivingProjectStateVersion {
               : current.decisionIds
                 ? [...current.decisionIds]
                 : [],
+          evidenceIds:
+            request.evidenceIds !== undefined
+              ? [...request.evidenceIds]
+              : current.evidenceIds
+                ? [...current.evidenceIds]
+                : [],
+          reviewBundleIds:
+            request.reviewBundleIds !== undefined
+              ? [...request.reviewBundleIds]
+              : current.reviewBundleIds
+                ? [...current.reviewBundleIds]
+                : [],
           createdAt: timestamp,
           createdBy: structuredClone(request.createdBy),
           correlationId,
diff --git a/projects/sfia-studio/app/lib/oa/project/domain/types.ts b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
index 4caed79..b3f1951 100644
--- a/projects/sfia-studio/app/lib/oa/project/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/project/domain/types.ts
@@ -125,6 +125,16 @@ export type AppendLivingProjectStateRequest = {
    * forward from the current LPS snapshot (same pattern as epistemicItemIds).
    */
   decisionIds?: string[];
+  /**
+   * Optional evidence id linkage (M5-B W1). When omitted, carried forward
+   * from the current LPS snapshot.
+   */
+  evidenceIds?: string[];
+  /**
+   * Optional review-bundle id linkage (M5-B W1). When omitted, carried
+   * forward from the current LPS snapshot.
+   */
+  reviewBundleIds?: string[];
 };

 /** Modeled ErrorRecord codes applicable to Project/LPS (M-OA). */
diff --git a/projects/sfia-studio/app/lib/oa/project/index.ts b/projects/sfia-studio/app/lib/oa/project/index.ts
index f42706f..133a5da 100644
--- a/projects/sfia-studio/app/lib/oa/project/index.ts
+++ b/projects/sfia-studio/app/lib/oa/project/index.ts
@@ -35,6 +35,7 @@ export {
   PRODUCT_SCHEMA_VERSION,
   PRODUCT_SCHEMA_VERSION_M1,
   PRODUCT_SCHEMA_VERSION_M2,
+  PRODUCT_SCHEMA_VERSION_M3,
 } from "./infrastructure/sqlite/db";
 export type { ProductSqliteHandle } from "./infrastructure/sqlite/productSqliteHandle";
 export { SqliteProductStore } from "./infrastructure/sqlite/sqliteProductStore";
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
index 54190ad..b11b5ff 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts
@@ -2,7 +2,8 @@ import { DatabaseSync } from "node:sqlite";

 export const PRODUCT_SCHEMA_VERSION_M1 = "m1-0.1.0" as const;
 export const PRODUCT_SCHEMA_VERSION_M2 = "m2-0.1.0" as const;
-export const PRODUCT_SCHEMA_VERSION = "m3-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION_M3 = "m3-0.1.0" as const;
+export const PRODUCT_SCHEMA_VERSION = "m5-0.1.0" as const;

 const BASE_SCHEMA_SQL = `
 PRAGMA foreign_keys = ON;
@@ -122,6 +123,78 @@ CREATE INDEX IF NOT EXISTS idx_oa_execution_contracts_idempotency
   ON oa_execution_contracts(idempotency_key);
 `;

+const M5_ATTEMPT_EVIDENCE_SCHEMA_SQL = `
+CREATE TABLE IF NOT EXISTS oa_execution_attempts (
+  attempt_id TEXT PRIMARY KEY NOT NULL,
+  execution_contract_id TEXT NOT NULL,
+  status TEXT NOT NULL,
+  idempotency_key TEXT NOT NULL UNIQUE,
+  version INTEGER NOT NULL,
+  result_recording_count INTEGER NOT NULL DEFAULT 0,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_execution_attempts_contract
+  ON oa_execution_attempts(execution_contract_id, attempt_id);
+
+CREATE TABLE IF NOT EXISTS oa_execution_attempt_active (
+  execution_contract_id TEXT PRIMARY KEY NOT NULL,
+  attempt_id TEXT NOT NULL
+);
+
+CREATE TABLE IF NOT EXISTS oa_execution_attempt_result_budget (
+  attempt_id TEXT PRIMARY KEY NOT NULL,
+  count INTEGER NOT NULL
+);
+
+CREATE TABLE IF NOT EXISTS oa_evidence (
+  evidence_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT,
+  status TEXT NOT NULL,
+  idempotency_key TEXT UNIQUE,
+  version INTEGER NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_evidence_project
+  ON oa_evidence(project_id, created_at);
+
+CREATE TABLE IF NOT EXISTS oa_evidence_idempotency (
+  idempotency_key TEXT PRIMARY KEY NOT NULL,
+  evidence_id TEXT NOT NULL,
+  fingerprint TEXT NOT NULL,
+  operation TEXT NOT NULL,
+  FOREIGN KEY (evidence_id) REFERENCES oa_evidence(evidence_id)
+);
+
+CREATE TABLE IF NOT EXISTS oa_review_bundles (
+  review_bundle_id TEXT PRIMARY KEY NOT NULL,
+  project_id TEXT NOT NULL,
+  status TEXT NOT NULL,
+  idempotency_key TEXT UNIQUE,
+  version INTEGER NOT NULL,
+  payload_json TEXT NOT NULL,
+  created_at TEXT NOT NULL,
+  updated_at TEXT
+);
+
+CREATE INDEX IF NOT EXISTS idx_oa_review_bundles_project
+  ON oa_review_bundles(project_id, created_at);
+
+CREATE TABLE IF NOT EXISTS oa_review_bundle_idempotency (
+  idempotency_key TEXT PRIMARY KEY NOT NULL,
+  review_bundle_id TEXT NOT NULL,
+  fingerprint TEXT NOT NULL,
+  operation TEXT NOT NULL,
+  successor_id TEXT,
+  FOREIGN KEY (review_bundle_id) REFERENCES oa_review_bundles(review_bundle_id)
+);
+`;
+
 function readSchemaVersion(db: DatabaseSync): string | null {
   const row = db
     .prepare("SELECT value FROM schema_meta WHERE key = ?")
@@ -159,8 +232,12 @@ function applyM3(db: DatabaseSync): void {
   db.exec(M3_DECISION_CONTRACT_SCHEMA_SQL);
 }

+function applyM5(db: DatabaseSync): void {
+  db.exec(M5_ATTEMPT_EVIDENCE_SCHEMA_SQL);
+}
+
 /**
- * Open Product SQLite with additive M1→M2→M3 migration.
+ * Open Product SQLite with additive M1→M2→M3→M5 migration.
  * Fail closed on unknown/future schema versions.
  */
 export function openProductSqlite(dbPath: string): DatabaseSync {
@@ -172,13 +249,19 @@ export function openProductSqlite(dbPath: string): DatabaseSync {
   if (version === null || version === PRODUCT_SCHEMA_VERSION_M1) {
     applyM2(db);
     applyM3(db);
+    applyM5(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION_M2) {
     applyM3(db);
+    applyM5(db);
+    setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
+  } else if (version === PRODUCT_SCHEMA_VERSION_M3) {
+    applyM5(db);
     setSchemaVersion(db, PRODUCT_SCHEMA_VERSION);
   } else if (version === PRODUCT_SCHEMA_VERSION) {
     applyM2(db);
     applyM3(db);
+    applyM5(db);
   } else {
     try {
       db.close();
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
index a91f6cc..102fafc 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts
@@ -2,10 +2,20 @@ import type { DatabaseSync } from "node:sqlite";
 import type { ProjectPersistenceUnitOfWorkPort } from "../../ports/projectPersistenceUnitOfWorkPort";

 /**
- * Shared Product SQLite handle for Project + Cycle + Decision + Contract (M3).
+ * Shared Product SQLite handle for Project + Cycle + Decision + Contract +
+ * Attempt/Evidence/ReviewBundle (M5).
  * Downstream adapters depend on this shape — not on SqliteProductStore class.
  */
 export type ProductSqliteHandle = ProjectPersistenceUnitOfWorkPort & {
   readonly db: DatabaseSync;
-  failNextSave?: "project" | "lps" | "cycle" | "decision" | "contract" | null;
+  failNextSave?:
+    | "project"
+    | "lps"
+    | "cycle"
+    | "decision"
+    | "contract"
+    | "attempt"
+    | "evidence"
+    | "review_bundle"
+    | null;
 };
diff --git a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
index 45c5e60..4734803 100644
--- a/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
+++ b/projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts
@@ -13,7 +13,8 @@ type TransactionContext = {
 };

 /**
- * SQLite product UnitOfWork for Project/LPS (M1) + Cycle (M2) + Decision/Contract (M3).
+ * SQLite product UnitOfWork for Project/LPS (M1) + Cycle (M2) + Decision/Contract (M3)
+ * + Attempt/Evidence/ReviewBundle (M5).
  * Isolated file — not D1 / OPS1 / FinOps. Single Product DB authority.
  *
  * Nested reentrance: same async chain (AsyncLocalStorage) reuses the open
@@ -31,8 +32,16 @@ export class SqliteProductStore
   readonly dbPath: string;

   /** Test hook — force next save to throw (atomicity tests). */
-  failNextSave: "project" | "lps" | "cycle" | "decision" | "contract" | null =
-    null;
+  failNextSave:
+    | "project"
+    | "lps"
+    | "cycle"
+    | "decision"
+    | "contract"
+    | "attempt"
+    | "evidence"
+    | "review_bundle"
+    | null = null;

   private queue: Promise<void> = Promise.resolve();
   private readonly txLocal = new AsyncLocalStorage<TransactionContext>();
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 2c366c1..272fff6 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -33,11 +33,13 @@ import {
 } from "@/lib/oa/execution-contract";
 import {
   createInMemoryExecutionAttemptServices,
+  createSqliteExecutionAttemptServices,
   type ExecutionAttemptServices,
   type TestExecutionAdapter,
 } from "@/lib/oa/execution-attempt";
 import {
   createInMemoryEvidenceReviewServices,
+  createSqliteEvidenceReviewServices,
   type EvidenceReviewServices,
 } from "@/lib/oa/evidence-review";
 import type { ProjectServices } from "@/lib/oa/project";
@@ -174,22 +176,45 @@ function wireOaStack(
   // EXPLICIT TestExecutionAdapter — never omit (factory default is NoOp).
   // M4 REAL-OFF default: do NOT wire realBoundary / SFIA_STUDIO_CURSOR_REAL here.
   // Opt-in REAL composition is explicit (journal + RealExecutionLaunchPort); no Fake defaults.
+  // M5-A: when Product SQLite is present, Attempt + Evidence/RB are durable;
+  // Claim/Maturity remain Memory; technical journal / Gate D unchanged.
   const fixtureAdapter = createF3TestExecutionAdapter();
   const fixtureAgent = createF3FixtureAgentDescriptor(clock.nowIso());
-  const executionAttemptServices = createInMemoryExecutionAttemptServices({
-    decisionServices,
-    executionContractServices,
-    agents: [fixtureAgent],
-    adapter: fixtureAdapter,
-    clock,
-    authorityResolver,
-    policy: { defaultMaxRetriesBudget: 0 },
-  });
+  const executionAttemptServices = productSqlite
+    ? createSqliteExecutionAttemptServices({
+        decisionServices,
+        executionContractServices,
+        productStore: productSqlite,
+        agents: [fixtureAgent],
+        adapter: fixtureAdapter,
+        clock,
+        authorityResolver,
+        policy: { defaultMaxRetriesBudget: 0 },
+      })
+    : createInMemoryExecutionAttemptServices({
+        decisionServices,
+        executionContractServices,
+        agents: [fixtureAgent],
+        adapter: fixtureAdapter,
+        clock,
+        authorityResolver,
+        policy: { defaultMaxRetriesBudget: 0 },
+      });

-  const evidenceReviewServices = createInMemoryEvidenceReviewServices({
-    clock,
-    attemptReader: createAttemptReaderBridge(executionAttemptServices.attempts),
-  });
+  const evidenceReviewServices = productSqlite
+    ? createSqliteEvidenceReviewServices({
+        productStore: productSqlite,
+        clock,
+        attemptReader: createAttemptReaderBridge(
+          executionAttemptServices.attempts,
+        ),
+      })
+    : createInMemoryEvidenceReviewServices({
+        clock,
+        attemptReader: createAttemptReaderBridge(
+          executionAttemptServices.attempts,
+        ),
+      });

   return Object.freeze({
     projectServices,
```

# FULL CONTENT — NEW / CREATED FILES
```
===== NEW FILES =====

===== BEGIN FILE: projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts =====
/**
 * Technical store surface used by Attempt use-cases:
 * - transactional unit of work
 * - durable/process-local result-recording budget (RTA5-06)
 *
 * MemoryExecutionAttemptStore satisfies this structurally.
 * SQLite backs resultRecordingAttempts via oa_execution_attempt_result_budget.
 */
export interface ExecutionAttemptTechnicalStorePort {
  /**
   * attemptId → bounded RecordExecutionResult attempts.
   * Only get/set are required by application code; Map satisfies this.
   */
  resultRecordingAttempts: {
    get(key: string): number | undefined;
    set(key: string, value: number): unknown;
  };
  runInTransaction<T>(fn: () => Promise<T>): Promise<T>;
  /** Test hook — force next Attempt persist to throw (Memory path). */
  failNextSave?: boolean;
}

===== END FILE: projects/sfia-studio/app/lib/oa/execution-attempt/ports/executionAttemptTechnicalStorePort.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts =====
import type { ProductSqliteHandle } from "@/lib/oa/project";
import { ExecutionAttemptDomainError } from "../../domain/errors";
import { isAttemptTerminal, validateAttemptShape } from "../../domain/invariants";
import type { ExecutionAttempt } from "../../domain/types";
import type {
  ActiveIndexDrift,
  ExecutionAttemptRepositoryPort,
} from "../../ports/executionAttemptRepository";

type AttemptRow = {
  attempt_id: string;
  execution_contract_id: string;
  status: string;
  idempotency_key: string;
  version: number;
  payload_json: string;
};

function cloneAttempt(attempt: ExecutionAttempt): ExecutionAttempt {
  return structuredClone(attempt);
}

/**
 * Durable ExecutionAttempt repository on Product SQLite (M5).
 * Mirrors MemoryExecutionAttemptRepository OCC + active-index semantics.
 */
export class SqliteExecutionAttemptRepository
  implements ExecutionAttemptRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(attemptId: string): Promise<ExecutionAttempt | null> {
    const row = this.store.db
      .prepare(
        `SELECT attempt_id, execution_contract_id, status, idempotency_key,
                version, payload_json
         FROM oa_execution_attempts WHERE attempt_id = ?`,
      )
      .get(attemptId) as AttemptRow | undefined;
    if (!row) return null;
    return cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt);
  }

  async findByIdempotencyKey(
    idempotencyKey: string,
  ): Promise<ExecutionAttempt | null> {
    const row = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_attempts WHERE idempotency_key = ?`,
      )
      .get(idempotencyKey) as { payload_json?: string } | undefined;
    if (!row?.payload_json) return null;
    return cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt);
  }

  async exists(attemptId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_execution_attempts WHERE attempt_id = ?`)
      .get(attemptId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async create(attempt: ExecutionAttempt): Promise<void> {
    const shape = validateAttemptShape(attempt);
    if (shape) {
      throw new ExecutionAttemptDomainError(shape.detailCode, shape.reason);
    }
    if (attempt.version !== 1) {
      throw new ExecutionAttemptDomainError(
        "ATTEMPT_INVALID",
        "create_requires_version_1",
      );
    }
    if (await this.exists(attempt.attemptId)) {
      throw new ExecutionAttemptDomainError(
        "ATTEMPT_ALREADY_EXISTS",
        "attempt_id_taken",
      );
    }
    const existingKeyOwner = await this.findByIdempotencyKey(
      attempt.idempotencyKey,
    );
    if (
      existingKeyOwner &&
      existingKeyOwner.attemptId !== attempt.attemptId
    ) {
      throw new ExecutionAttemptDomainError(
        "ATTEMPT_IDEMPOTENCY_CONFLICT",
        "idempotency_key_taken",
      );
    }
    this.failIfForced();
    const now = attempt.createdAt;
    const payload = JSON.stringify(cloneAttempt(attempt));
    this.store.db
      .prepare(
        `INSERT INTO oa_execution_attempts(
           attempt_id, execution_contract_id, status, idempotency_key,
           version, result_recording_count, payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, 0, ?, ?, ?)`,
      )
      .run(
        attempt.attemptId,
        attempt.executionContractId,
        attempt.status,
        attempt.idempotencyKey,
        attempt.version,
        payload,
        now,
        now,
      );
  }

  async update(
    attempt: ExecutionAttempt,
    expectedVersion: number,
  ): Promise<void> {
    const current = await this.findById(attempt.attemptId);
    if (!current) {
      throw new ExecutionAttemptDomainError(
        "ATTEMPT_NOT_FOUND",
        "update_missing_attempt",
      );
    }
    if (current.version !== expectedVersion) {
      throw new ExecutionAttemptDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (attempt.version !== expectedVersion + 1) {
      throw new ExecutionAttemptDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateAttemptShape(attempt);
    if (shape) {
      throw new ExecutionAttemptDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    const now = attempt.updatedAt ?? attempt.completedAt ?? attempt.createdAt;
    const payload = JSON.stringify(cloneAttempt(attempt));
    this.store.db
      .prepare(
        `UPDATE oa_execution_attempts SET
           execution_contract_id = ?,
           status = ?,
           idempotency_key = ?,
           version = ?,
           payload_json = ?,
           updated_at = ?
         WHERE attempt_id = ?`,
      )
      .run(
        attempt.executionContractId,
        attempt.status,
        attempt.idempotencyKey,
        attempt.version,
        payload,
        now,
        attempt.attemptId,
      );
  }

  async listByContract(
    executionContractId: string,
  ): Promise<ExecutionAttempt[]> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_attempts
         WHERE execution_contract_id = ?
         ORDER BY attempt_id ASC`,
      )
      .all(executionContractId) as Array<{ payload_json: string }>;
    return rows.map((row) =>
      cloneAttempt(JSON.parse(row.payload_json) as ExecutionAttempt),
    );
  }

  async findActiveByContract(
    executionContractId: string,
  ): Promise<ExecutionAttempt | null> {
    const row = this.store.db
      .prepare(
        `SELECT attempt_id FROM oa_execution_attempt_active
         WHERE execution_contract_id = ?`,
      )
      .get(executionContractId) as { attempt_id?: string } | undefined;
    if (!row?.attempt_id) return null;
    return this.findById(row.attempt_id);
  }

  async reserveActiveContract(
    executionContractId: string,
    attemptId: string,
  ): Promise<void> {
    const current = this.store.db
      .prepare(
        `SELECT attempt_id FROM oa_execution_attempt_active
         WHERE execution_contract_id = ?`,
      )
      .get(executionContractId) as { attempt_id?: string } | undefined;
    if (current?.attempt_id && current.attempt_id !== attemptId) {
      throw new ExecutionAttemptDomainError(
        "EXECUTION_ALREADY_ACTIVE",
        "active_attempt_already_reserved",
      );
    }
    this.store.db
      .prepare(
        `INSERT INTO oa_execution_attempt_active(execution_contract_id, attempt_id)
         VALUES (?, ?)
         ON CONFLICT(execution_contract_id) DO UPDATE SET
           attempt_id = excluded.attempt_id`,
      )
      .run(executionContractId, attemptId);
  }

  async releaseActiveContract(
    executionContractId: string,
    attemptId: string,
  ): Promise<void> {
    this.store.db
      .prepare(
        `DELETE FROM oa_execution_attempt_active
         WHERE execution_contract_id = ? AND attempt_id = ?`,
      )
      .run(executionContractId, attemptId);
  }

  async rebuildActiveIndex(): Promise<void> {
    const rows = this.store.db
      .prepare(
        `SELECT payload_json FROM oa_execution_attempts ORDER BY attempt_id ASC`,
      )
      .all() as Array<{ payload_json: string }>;
    const rebuilt = new Map<string, string>();
    for (const row of rows) {
      const attempt = JSON.parse(row.payload_json) as ExecutionAttempt;
      if (isAttemptTerminal(attempt.status)) continue;
      const existing = rebuilt.get(attempt.executionContractId);
      if (existing && existing !== attempt.attemptId) {
        throw new ExecutionAttemptDomainError(
          "ACTIVE_INDEX_DRIFT",
          "multiple_active_attempts_for_contract",
        );
      }
      rebuilt.set(attempt.executionContractId, attempt.attemptId);
    }
    this.store.db.exec(`DELETE FROM oa_execution_attempt_active`);
    const insert = this.store.db.prepare(
      `INSERT INTO oa_execution_attempt_active(execution_contract_id, attempt_id)
       VALUES (?, ?)`,
    );
    for (const [executionContractId, attemptId] of rebuilt) {
      insert.run(executionContractId, attemptId);
    }
  }

  async detectActiveIndexDrift(): Promise<ActiveIndexDrift[]> {
    const drifts: ActiveIndexDrift[] = [];
    const indexed = this.store.db
      .prepare(
        `SELECT execution_contract_id, attempt_id FROM oa_execution_attempt_active`,
      )
      .all() as Array<{ execution_contract_id: string; attempt_id: string }>;

    for (const row of indexed) {
      const attempt = await this.findById(row.attempt_id);
      if (!attempt) {
        drifts.push({
          executionContractId: row.execution_contract_id,
          attemptId: row.attempt_id,
          reason: "indexed_attempt_missing",
        });
        continue;
      }
      if (isAttemptTerminal(attempt.status)) {
        drifts.push({
          executionContractId: row.execution_contract_id,
          attemptId: row.attempt_id,
          reason: "indexed_attempt_terminal",
        });
      }
    }

    const allRows = this.store.db
      .prepare(`SELECT payload_json FROM oa_execution_attempts`)
      .all() as Array<{ payload_json: string }>;
    const seenActive = new Map<string, string>();
    const activeIndex = new Map(
      indexed.map((r) => [r.execution_contract_id, r.attempt_id] as const),
    );

    for (const row of allRows) {
      const attempt = JSON.parse(row.payload_json) as ExecutionAttempt;
      if (isAttemptTerminal(attempt.status)) continue;
      const previous = seenActive.get(attempt.executionContractId);
      if (previous && previous !== attempt.attemptId) {
        drifts.push({
          executionContractId: attempt.executionContractId,
          attemptId: attempt.attemptId,
          reason: "multiple_active_attempts",
        });
      }
      seenActive.set(attempt.executionContractId, attempt.attemptId);
      const indexedId = activeIndex.get(attempt.executionContractId);
      if (indexedId !== attempt.attemptId) {
        drifts.push({
          executionContractId: attempt.executionContractId,
          attemptId: attempt.attemptId,
          reason: "active_attempt_not_indexed",
        });
      }
    }
    return drifts;
  }

  async assertActiveIndexConsistent(): Promise<void> {
    const drifts = await this.detectActiveIndexDrift();
    if (drifts.length > 0) {
      throw new ExecutionAttemptDomainError(
        "ACTIVE_INDEX_DRIFT",
        `drift_${drifts[0].reason}`,
      );
    }
  }

  private failIfForced(): void {
    if (this.store.failNextSave === "attempt") {
      this.store.failNextSave = null;
      throw new ExecutionAttemptDomainError(
        "EXECUTION_PERSISTENCE_FAILED",
        "forced_execution_attempt_save_failure",
      );
    }
  }
}

===== END FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptRepository.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts =====
import type { ProductSqliteHandle } from "@/lib/oa/project";
import type { ExecutionAttemptTechnicalStorePort } from "../../ports/executionAttemptTechnicalStorePort";

/**
 * Durable Map-like facade for result-recording budget.
 * Persists to oa_execution_attempt_result_budget (side table).
 */
class SqliteResultRecordingAttemptsMap {
  constructor(private readonly store: ProductSqliteHandle) {}

  get(attemptId: string): number | undefined {
    const row = this.store.db
      .prepare(
        `SELECT count FROM oa_execution_attempt_result_budget WHERE attempt_id = ?`,
      )
      .get(attemptId) as { count?: number } | undefined;
    return typeof row?.count === "number" ? row.count : undefined;
  }

  set(attemptId: string, count: number): this {
    this.store.db
      .prepare(
        `INSERT INTO oa_execution_attempt_result_budget(attempt_id, count)
         VALUES (?, ?)
         ON CONFLICT(attempt_id) DO UPDATE SET count = excluded.count`,
      )
      .run(attemptId, count);
    return this;
  }
}

/**
 * Technical Attempt store over Product SQLite — shares UoW with contracts/LPS.
 */
export class SqliteExecutionAttemptTechnicalStore
  implements ExecutionAttemptTechnicalStorePort
{
  readonly resultRecordingAttempts: SqliteResultRecordingAttemptsMap;

  constructor(private readonly productStore: ProductSqliteHandle) {
    this.resultRecordingAttempts = new SqliteResultRecordingAttemptsMap(
      productStore,
    );
  }

  async runInTransaction<T>(fn: () => Promise<T>): Promise<T> {
    return this.productStore.runInTransaction(fn);
  }
}

===== END FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/sqliteExecutionAttemptTechnicalStore.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts =====
import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type {
  AuthorityResolverPort,
  DecisionServices,
} from "@/lib/oa/decision";
import type { ExecutionContractServices } from "@/lib/oa/execution-contract";
import type { ProductSqliteHandle } from "@/lib/oa/project";
import {
  resolveAttemptPolicy,
  type AttemptPolicy,
} from "../../application/attemptPolicy";
import { CancelExecutionAttempt } from "../../application/cancelExecutionAttempt";
import { CheckAttemptAuthorization } from "../../application/checkAttemptAuthorization";
import { ExecutionContractStatusWriter } from "../../application/executionContractStatusWriter";
import { GetExecutionAttempt } from "../../application/getExecutionAttempt";
import { ListExecutionAttempts } from "../../application/listExecutionAttempts";
import { RecordExecutionFailure } from "../../application/recordExecutionFailure";
import { RecordExecutionResult } from "../../application/recordExecutionResult";
import { RetryExecutionAttempt } from "../../application/retryExecutionAttempt";
import { SelectExecutionAgent } from "../../application/selectExecutionAgent";
import { StartExecution } from "../../application/startExecution";
import { TriggerAttemptTimeout } from "../../application/triggerAttemptTimeout";
import type { AgentDescriptor } from "../../domain/types";
import { MemoryAgentRegistry } from "../memoryAgentRegistry";
import { NoOpExecutionAdapter } from "../noOpExecutionAdapter";
import {
  ConsoleExecutionAttemptAuditJournal,
  MemoryExecutionAttemptAuditJournal,
} from "../observability";
import { TestExecutionAdapter } from "../testExecutionAdapter";
import type { AgentRegistryPort } from "../../ports/agentRegistry";
import type { ExecutionAttemptAuditPort } from "../../ports/executionAttemptAudit";
import type { ExecutionAttemptRepositoryPort } from "../../ports/executionAttemptRepository";
import type { ExecutionAttemptTechnicalStorePort } from "../../ports/executionAttemptTechnicalStorePort";
import { SqliteExecutionAttemptRepository } from "./sqliteExecutionAttemptRepository";
import { SqliteExecutionAttemptTechnicalStore } from "./sqliteExecutionAttemptTechnicalStore";

type InjectableExecutionAdapter = TestExecutionAdapter | NoOpExecutionAdapter;

function isInjectableExecutionAdapter(
  candidate: unknown,
): candidate is InjectableExecutionAdapter {
  return (
    candidate instanceof TestExecutionAdapter ||
    candidate instanceof NoOpExecutionAdapter
  );
}

export type CreateSqliteExecutionAttemptServicesOptions = {
  decisionServices: DecisionServices;
  executionContractServices: ExecutionContractServices;
  productStore: ProductSqliteHandle;
  agents?: readonly AgentDescriptor[];
  registry?: MemoryAgentRegistry;
  adapter?: InjectableExecutionAdapter;
  clock?: ClockPort;
  audit?: ExecutionAttemptAuditPort;
  policy?: Partial<AttemptPolicy>;
  authorityResolver?: AuthorityResolverPort;
};

export type SqliteExecutionAttemptServices = {
  store: ExecutionAttemptTechnicalStorePort;
  attempts: ExecutionAttemptRepositoryPort;
  registry: AgentRegistryPort;
  adapter: InjectableExecutionAdapter;
  audit: ExecutionAttemptAuditPort;
  policy: AttemptPolicy;
  contractStatusWriter: ExecutionContractStatusWriter;
  productStore: ProductSqliteHandle;
  selectExecutionAgent: SelectExecutionAgent;
  startExecution: StartExecution;
  cancelExecutionAttempt: CancelExecutionAttempt;
  recordExecutionResult: RecordExecutionResult;
  recordExecutionFailure: RecordExecutionFailure;
  retryExecutionAttempt: RetryExecutionAttempt;
  triggerAttemptTimeout: TriggerAttemptTimeout;
  getExecutionAttempt: GetExecutionAttempt;
  listExecutionAttempts: ListExecutionAttempts;
  checkAttemptAuthorization: CheckAttemptAuthorization;
};

/**
 * Durable ExecutionAttempt services on Product SQLite (M5-A).
 * Does NOT wire realBoundary / Gate D / REAL launch (M4 REAL-OFF unchanged).
 */
export function createSqliteExecutionAttemptServices(
  options: CreateSqliteExecutionAttemptServicesOptions,
): SqliteExecutionAttemptServices {
  if (options.registry && options.agents) {
    throw new Error("execution_attempt_factory_registry_or_agents_not_both");
  }
  const registry =
    options.registry ?? new MemoryAgentRegistry(options.agents ?? []);

  const adapter = options.adapter ?? new NoOpExecutionAdapter();
  if (!isInjectableExecutionAdapter(adapter)) {
    throw new Error("execution_attempt_factory_adapter_not_allowed");
  }

  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleExecutionAttemptAuditJournal();
  const authority =
    options.authorityResolver ?? options.decisionServices.authority;
  const policy = resolveAttemptPolicy(options.policy);

  const store = new SqliteExecutionAttemptTechnicalStore(options.productStore);
  const attempts = new SqliteExecutionAttemptRepository(options.productStore);

  const contracts = options.executionContractServices.contracts;
  const contractStatusWriter = new ExecutionContractStatusWriter(
    contracts,
    options.executionContractServices.store,
    attempts,
  );

  const selectExecutionAgent = new SelectExecutionAgent(
    attempts,
    contracts,
    options.executionContractServices.checkExecutionAuthorization,
    options.decisionServices,
    authority,
    registry,
    clock,
    audit,
    policy,
    store,
  );

  return {
    store,
    attempts,
    registry,
    adapter,
    audit,
    policy,
    contractStatusWriter,
    productStore: options.productStore,
    selectExecutionAgent,
    startExecution: new StartExecution(
      attempts,
      contracts,
      contractStatusWriter,
      options.executionContractServices.checkExecutionAuthorization,
      options.decisionServices,
      authority,
      registry,
      adapter,
      clock,
      audit,
      store,
    ),
    cancelExecutionAttempt: new CancelExecutionAttempt(
      attempts,
      contracts,
      contractStatusWriter,
      authority,
      registry,
      adapter,
      clock,
      audit,
      store,
    ),
    recordExecutionResult: new RecordExecutionResult(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      clock,
      audit,
      policy,
      store,
    ),
    recordExecutionFailure: new RecordExecutionFailure(
      attempts,
      contracts,
      contractStatusWriter,
      registry,
      clock,
      audit,
      store,
    ),
    retryExecutionAttempt: new RetryExecutionAttempt(
      attempts,
      contracts,
      selectExecutionAgent,
      authority,
      clock,
      audit,
      policy,
    ),
    triggerAttemptTimeout: new TriggerAttemptTimeout(
      attempts,
      contracts,
      contractStatusWriter,
      authority,
      clock,
      audit,
      policy,
      store,
    ),
    getExecutionAttempt: new GetExecutionAttempt(attempts, clock, audit),
    listExecutionAttempts: new ListExecutionAttempts(attempts, clock, audit),
    checkAttemptAuthorization: new CheckAttemptAuthorization(
      attempts,
      contracts,
      options.executionContractServices.checkExecutionAuthorization,
      authority,
      clock,
      audit,
    ),
  };
}

export function createTestSqliteExecutionAttemptServices(
  options: CreateSqliteExecutionAttemptServicesOptions & {
    audit?: MemoryExecutionAttemptAuditJournal;
    adapter?: TestExecutionAdapter | NoOpExecutionAdapter;
    fixedNowIso?: string;
  },
): SqliteExecutionAttemptServices & {
  audit: MemoryExecutionAttemptAuditJournal;
} {
  const audit = options.audit ?? new MemoryExecutionAttemptAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-08-15T07:00:00.000Z"));
  const adapter = options.adapter ?? new TestExecutionAdapter();
  return createSqliteExecutionAttemptServices({
    ...options,
    adapter,
    clock,
    audit,
  }) as SqliteExecutionAttemptServices & {
    audit: MemoryExecutionAttemptAuditJournal;
  };
}

===== END FILE: projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/sqlite/createSqliteExecutionAttemptServices.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts =====
import type { ProductSqliteHandle } from "@/lib/oa/project";
import { EvidenceDomainError } from "../../domain/errors";
import { validateEvidenceShape } from "../../domain/invariants";
import type { Evidence } from "../../domain/types";
import type {
  EvidenceRepositoryPort,
  IdempotencyRecord,
} from "../../ports/evidenceRepository";

type EvidenceRow = {
  evidence_id: string;
  project_id: string | null;
  status: string;
  idempotency_key: string | null;
  version: number;
  payload_json: string;
};

type IdempotencyRow = {
  idempotency_key: string;
  evidence_id: string;
  fingerprint: string;
  operation: string;
};

function cloneEvidence(evidence: Evidence): Evidence {
  return structuredClone(evidence);
}

/**
 * Durable Evidence repository on Product SQLite (M5).
 * Mirrors MemoryEvidenceRepository OCC + IdempotencyRecord semantics.
 */
export class SqliteEvidenceRepository implements EvidenceRepositoryPort {
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(evidenceId: string): Promise<Evidence | null> {
    const row = this.store.db
      .prepare(
        `SELECT evidence_id, project_id, status, idempotency_key, version, payload_json
         FROM oa_evidence WHERE evidence_id = ?`,
      )
      .get(evidenceId) as EvidenceRow | undefined;
    if (!row) return null;
    return cloneEvidence(JSON.parse(row.payload_json) as Evidence);
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    evidence: Evidence;
    record: IdempotencyRecord;
  } | null> {
    const row = this.store.db
      .prepare(
        `SELECT idempotency_key, evidence_id, fingerprint, operation
         FROM oa_evidence_idempotency WHERE idempotency_key = ?`,
      )
      .get(idempotencyKey) as IdempotencyRow | undefined;
    if (!row) return null;
    const evidence = await this.findById(row.evidence_id);
    if (!evidence) return null;
    return {
      evidence,
      record: {
        evidenceId: row.evidence_id,
        fingerprint: row.fingerprint,
        operation: row.operation as IdempotencyRecord["operation"],
      },
    };
  }

  async exists(evidenceId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(`SELECT 1 AS ok FROM oa_evidence WHERE evidence_id = ?`)
      .get(evidenceId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async create(
    evidence: Evidence,
    record?: IdempotencyRecord,
  ): Promise<void> {
    const shape = validateEvidenceShape(evidence);
    if (shape) {
      throw new EvidenceDomainError(shape.detailCode, shape.reason);
    }
    if (evidence.version !== 1) {
      throw new EvidenceDomainError(
        "EVIDENCE_INVALID",
        "create_requires_version_1",
      );
    }
    if (await this.exists(evidence.evidenceId)) {
      throw new EvidenceDomainError(
        "EVIDENCE_ALREADY_EXISTS",
        "evidence_id_taken",
      );
    }
    if (record) {
      const existing = await this.findByIdempotencyKey(
        evidence.idempotencyKey ?? "",
      );
      if (existing && existing.evidence.evidenceId !== evidence.evidenceId) {
        throw new EvidenceDomainError(
          "IDEMPOTENCY_CONFLICT",
          "idempotency_key_taken",
        );
      }
    }
    this.failIfForced();
    const now = evidence.createdAt;
    const payload = JSON.stringify(cloneEvidence(evidence));
    this.store.db
      .prepare(
        `INSERT INTO oa_evidence(
           evidence_id, project_id, status, idempotency_key, version,
           payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        evidence.evidenceId,
        evidence.bindings.projectId ?? null,
        evidence.status,
        evidence.idempotencyKey ?? null,
        evidence.version,
        payload,
        now,
        now,
      );
    if (record && evidence.idempotencyKey) {
      this.upsertIdempotency(evidence.idempotencyKey, record);
    }
  }

  async update(
    evidence: Evidence,
    expectedVersion: number,
    record?: IdempotencyRecord,
  ): Promise<void> {
    const current = await this.findById(evidence.evidenceId);
    if (!current) {
      throw new EvidenceDomainError(
        "EVIDENCE_NOT_FOUND",
        "update_missing_evidence",
      );
    }
    if (current.version !== expectedVersion) {
      throw new EvidenceDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (evidence.version !== expectedVersion + 1) {
      throw new EvidenceDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateEvidenceShape(evidence);
    if (shape) {
      throw new EvidenceDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    const now = evidence.updatedAt ?? evidence.createdAt;
    const payload = JSON.stringify(cloneEvidence(evidence));
    this.store.db
      .prepare(
        `UPDATE oa_evidence SET
           project_id = ?,
           status = ?,
           idempotency_key = ?,
           version = ?,
           payload_json = ?,
           updated_at = ?
         WHERE evidence_id = ?`,
      )
      .run(
        evidence.bindings.projectId ?? null,
        evidence.status,
        evidence.idempotencyKey ?? null,
        evidence.version,
        payload,
        now,
        evidence.evidenceId,
      );
    if (record && evidence.idempotencyKey) {
      this.upsertIdempotency(evidence.idempotencyKey, record);
    }
  }

  private upsertIdempotency(
    idempotencyKey: string,
    record: IdempotencyRecord,
  ): void {
    this.store.db
      .prepare(
        `INSERT INTO oa_evidence_idempotency(
           idempotency_key, evidence_id, fingerprint, operation
         ) VALUES (?, ?, ?, ?)
         ON CONFLICT(idempotency_key) DO UPDATE SET
           evidence_id = excluded.evidence_id,
           fingerprint = excluded.fingerprint,
           operation = excluded.operation`,
      )
      .run(
        idempotencyKey,
        record.evidenceId,
        record.fingerprint,
        record.operation,
      );
  }

  private failIfForced(): void {
    if (this.store.failNextSave === "evidence") {
      this.store.failNextSave = null;
      throw new EvidenceDomainError(
        "EVIDENCE_PERSISTENCE_FAILED",
        "forced_evidence_save_failure",
      );
    }
  }
}

===== END FILE: projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts =====
import type { ProductSqliteHandle } from "@/lib/oa/project";
import { ReviewBundleDomainError } from "../../domain/reviewBundleErrors";
import { validateReviewBundleShape } from "../../domain/reviewBundleInvariants";
import type { ReviewBundle } from "../../domain/reviewBundleTypes";
import type {
  ReviewBundleIdempotencyRecord,
  ReviewBundleRepositoryPort,
} from "../../ports/reviewBundleRepository";

type BundleRow = {
  review_bundle_id: string;
  project_id: string;
  status: string;
  idempotency_key: string | null;
  version: number;
  payload_json: string;
};

type IdempotencyRow = {
  idempotency_key: string;
  review_bundle_id: string;
  fingerprint: string;
  operation: string;
  successor_id: string | null;
};

function cloneBundle(bundle: ReviewBundle): ReviewBundle {
  return structuredClone(bundle);
}

/**
 * Durable ReviewBundle repository on Product SQLite (M5).
 * createSuccessorAndMarkSuperseded runs inside productStore.runInTransaction.
 */
export class SqliteReviewBundleRepository
  implements ReviewBundleRepositoryPort
{
  constructor(private readonly store: ProductSqliteHandle) {}

  async findById(reviewBundleId: string): Promise<ReviewBundle | null> {
    const row = this.store.db
      .prepare(
        `SELECT review_bundle_id, project_id, status, idempotency_key, version, payload_json
         FROM oa_review_bundles WHERE review_bundle_id = ?`,
      )
      .get(reviewBundleId) as BundleRow | undefined;
    if (!row) return null;
    return cloneBundle(JSON.parse(row.payload_json) as ReviewBundle);
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    reviewBundle: ReviewBundle;
    record: ReviewBundleIdempotencyRecord;
    successor?: ReviewBundle;
  } | null> {
    const row = this.store.db
      .prepare(
        `SELECT idempotency_key, review_bundle_id, fingerprint, operation, successor_id
         FROM oa_review_bundle_idempotency WHERE idempotency_key = ?`,
      )
      .get(idempotencyKey) as IdempotencyRow | undefined;
    if (!row) return null;
    const reviewBundle = await this.findById(row.review_bundle_id);
    if (!reviewBundle) return null;
    const successor = row.successor_id
      ? ((await this.findById(row.successor_id)) ?? undefined)
      : undefined;
    return {
      reviewBundle,
      record: {
        reviewBundleId: row.review_bundle_id,
        fingerprint: row.fingerprint,
        operation: row.operation as ReviewBundleIdempotencyRecord["operation"],
      },
      successor,
    };
  }

  async exists(reviewBundleId: string): Promise<boolean> {
    const row = this.store.db
      .prepare(
        `SELECT 1 AS ok FROM oa_review_bundles WHERE review_bundle_id = ?`,
      )
      .get(reviewBundleId) as { ok?: number } | undefined;
    return row?.ok === 1;
  }

  async create(
    bundle: ReviewBundle,
    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
  ): Promise<void> {
    const shape = validateReviewBundleShape(bundle);
    if (shape) {
      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
    }
    if (bundle.version !== 1) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "create_requires_version_1",
      );
    }
    if (await this.exists(bundle.reviewBundleId)) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_ALREADY_EXISTS",
        "review_bundle_id_taken",
      );
    }
    this.failIfForced();
    this.insertBundle(bundle);
    if (record && bundle.idempotencyKey) {
      this.upsertIdempotency(bundle.idempotencyKey, record);
    }
  }

  async update(
    bundle: ReviewBundle,
    expectedVersion: number,
    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
  ): Promise<void> {
    const current = await this.findById(bundle.reviewBundleId);
    if (!current) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_NOT_FOUND",
        "update_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (bundle.version !== expectedVersion + 1) {
      throw new ReviewBundleDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateReviewBundleShape(bundle);
    if (shape) {
      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    this.updateBundleRow(bundle);
    if (record) {
      const key = bundle.idempotencyKey;
      if (key) {
        this.upsertIdempotency(key, record);
      }
    }
  }

  async createSuccessorAndMarkSuperseded(
    successor: ReviewBundle,
    superseded: ReviewBundle,
    expectedVersion: number,
    record: ReviewBundleIdempotencyRecord & { successorId: string },
  ): Promise<void> {
    const successorShape = validateReviewBundleShape(successor);
    if (successorShape) {
      throw new ReviewBundleDomainError(
        successorShape.detailCode,
        successorShape.reason,
      );
    }
    const supersededShape = validateReviewBundleShape(superseded);
    if (supersededShape) {
      throw new ReviewBundleDomainError(
        supersededShape.detailCode,
        supersededShape.reason,
      );
    }
    if (successor.version !== 1) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "successor_requires_version_1",
      );
    }
    if (superseded.status !== "superseded") {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "source_must_be_superseded",
      );
    }
    if (record.successorId !== successor.reviewBundleId) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "record_successor_id_mismatch",
      );
    }
    if (successor.reviewBundleId === superseded.reviewBundleId) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "successor_must_differ_from_source",
      );
    }

    const current = await this.findById(superseded.reviewBundleId);
    if (!current) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_NOT_FOUND",
        "reopen_source_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (superseded.version !== expectedVersion + 1) {
      throw new ReviewBundleDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    if (await this.exists(successor.reviewBundleId)) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_ALREADY_EXISTS",
        "successor_review_bundle_id_taken",
      );
    }
    if (!superseded.idempotencyKey) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "reopen_idempotency_key_required",
      );
    }

    await this.store.runInTransaction(async () => {
      this.failIfForced();
      this.insertBundle(successor);
      this.updateBundleRow(superseded);
      this.upsertIdempotency(superseded.idempotencyKey!, record);
    });
  }

  private insertBundle(bundle: ReviewBundle): void {
    const now = bundle.createdAt;
    const payload = JSON.stringify(cloneBundle(bundle));
    this.store.db
      .prepare(
        `INSERT INTO oa_review_bundles(
           review_bundle_id, project_id, status, idempotency_key, version,
           payload_json, created_at, updated_at
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        bundle.reviewBundleId,
        bundle.projectId,
        bundle.status,
        bundle.idempotencyKey ?? null,
        bundle.version,
        payload,
        now,
        now,
      );
  }

  private updateBundleRow(bundle: ReviewBundle): void {
    const now = bundle.updatedAt ?? bundle.createdAt;
    const payload = JSON.stringify(cloneBundle(bundle));
    this.store.db
      .prepare(
        `UPDATE oa_review_bundles SET
           project_id = ?,
           status = ?,
           idempotency_key = ?,
           version = ?,
           payload_json = ?,
           updated_at = ?
         WHERE review_bundle_id = ?`,
      )
      .run(
        bundle.projectId,
        bundle.status,
        bundle.idempotencyKey ?? null,
        bundle.version,
        payload,
        now,
        bundle.reviewBundleId,
      );
  }

  private upsertIdempotency(
    idempotencyKey: string,
    record: ReviewBundleIdempotencyRecord & { successorId?: string },
  ): void {
    this.store.db
      .prepare(
        `INSERT INTO oa_review_bundle_idempotency(
           idempotency_key, review_bundle_id, fingerprint, operation, successor_id
         ) VALUES (?, ?, ?, ?, ?)
         ON CONFLICT(idempotency_key) DO UPDATE SET
           review_bundle_id = excluded.review_bundle_id,
           fingerprint = excluded.fingerprint,
           operation = excluded.operation,
           successor_id = excluded.successor_id`,
      )
      .run(
        idempotencyKey,
        record.reviewBundleId,
        record.fingerprint,
        record.operation,
        record.successorId ?? null,
      );
  }

  private failIfForced(): void {
    if (this.store.failNextSave === "review_bundle") {
      this.store.failNextSave = null;
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "forced_review_bundle_save_failure",
      );
    }
  }
}

===== END FILE: projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts =====

===== BEGIN FILE: projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts =====
import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { ProductSqliteHandle } from "@/lib/oa/project";
import { AttachEvidenceToReviewBundle } from "../../application/attachEvidenceToReviewBundle";
import { CompleteReview } from "../../application/completeReview";
import { ConfirmClaimEvaluation } from "../../application/confirmClaimEvaluation";
import { ConfirmMaturity } from "../../application/confirmMaturity";
import { CreateReviewBundle } from "../../application/createReviewBundle";
import { DowngradeMaturity } from "../../application/downgradeMaturity";
import { EvaluateClaim } from "../../application/evaluateClaim";
import { FreezeReviewBundle } from "../../application/freezeReviewBundle";
import { IngestExecutionAttemptEvidence } from "../../application/ingestExecutionAttemptEvidence";
import { MarkEvidenceUnavailable } from "../../application/markEvidenceUnavailable";
import { ProposeMaturity } from "../../application/proposeMaturity";
import { RecommendNextGate } from "../../application/recommendNextGate";
import { RegisterEvidence } from "../../application/registerEvidence";
import { RejectClaimEvaluation } from "../../application/rejectClaimEvaluation";
import { RemoveEvidenceFromReviewBundle } from "../../application/removeEvidenceFromReviewBundle";
import { ReopenReview } from "../../application/reopenReview";
import { StartReview } from "../../application/startReview";
import { VerifyEvidenceIntegrity } from "../../application/verifyEvidenceIntegrity";
import { FakeClaimAuthority } from "../claimAuthorityAdapter";
import { ClaimEvaluationRepositoryReader } from "../claimEvaluationRepositoryReader";
import { EvidenceRepositoryReader } from "../evidenceRepositoryReader";
import { FakeEvidencePayloadAdapter } from "../fakeEvidencePayloadAdapter";
import { FakeExecutionAttemptReader } from "../fakeExecutionAttemptReader";
import {
  FixedIdGenerator,
  RandomIdGenerator,
} from "../idGenerator";
import { MemoryClaimEvaluationRepository } from "../memoryClaimEvaluationRepository";
import { MemoryClaimEvaluationStore } from "../memoryClaimEvaluationStore";
import { MemoryEvidenceStore } from "../memoryEvidenceStore";
import { MemoryMaturityAssessmentRepository } from "../memoryMaturityAssessmentRepository";
import { MemoryMaturityAssessmentStore } from "../memoryMaturityAssessmentStore";
import { MemoryReviewBundleStore } from "../memoryReviewBundleStore";
import { MaturityAssessmentRepositoryReader } from "../maturityAssessmentRepositoryReader";
import {
  ConsoleEvidenceAuditJournal,
  MemoryEvidenceAuditJournal,
} from "../observability";
import { ReviewBundleRepositoryReader } from "../reviewBundleRepositoryReader";
import type { ClaimAuthorityPort } from "../../ports/claimAuthorityPort";
import type { ClaimEvaluationReaderPort } from "../../ports/claimEvaluationReader";
import type { EvidenceAuditPort } from "../../ports/evidenceAudit";
import type { EvidencePayloadPort } from "../../ports/evidencePayloadPort";
import type { EvidenceReaderPort } from "../../ports/evidenceReader";
import type { EvidenceRepositoryPort } from "../../ports/evidenceRepository";
import type { ExecutionAttemptReaderPort } from "../../ports/executionAttemptReader";
import type { IdGeneratorPort } from "../../ports/idGenerator";
import type { MaturityAssessmentReaderPort } from "../../ports/maturityAssessmentReader";
import type { ReviewBundleReaderPort } from "../../ports/reviewBundleReader";
import type { ReviewBundleRepositoryPort } from "../../ports/reviewBundleRepository";
import { SqliteEvidenceRepository } from "./sqliteEvidenceRepository";
import { SqliteReviewBundleRepository } from "./sqliteReviewBundleRepository";

export type CreateSqliteEvidenceReviewServicesOptions = {
  productStore: ProductSqliteHandle;
  clock?: ClockPort;
  audit?: EvidenceAuditPort;
  ids?: IdGeneratorPort;
  payload?: EvidencePayloadPort;
  attemptReader?: ExecutionAttemptReaderPort;
  evidenceReader?: EvidenceReaderPort;
  claimAuthority?: ClaimAuthorityPort;
  claimEvaluationStore?: MemoryClaimEvaluationStore;
  maturityAssessmentStore?: MemoryMaturityAssessmentStore;
};

export type SqliteEvidenceReviewServices = {
  store: MemoryEvidenceStore;
  repository: EvidenceRepositoryPort;
  reviewBundleStore: MemoryReviewBundleStore;
  reviewBundleRepository: ReviewBundleRepositoryPort;
  reviewBundleReader: ReviewBundleReaderPort;
  claimEvaluationStore: MemoryClaimEvaluationStore;
  claimEvaluationRepository: MemoryClaimEvaluationRepository;
  claimEvaluationReader: ClaimEvaluationReaderPort;
  claimAuthority: ClaimAuthorityPort;
  maturityAssessmentStore: MemoryMaturityAssessmentStore;
  maturityAssessmentRepository: MemoryMaturityAssessmentRepository;
  maturityAssessmentReader: MaturityAssessmentReaderPort;
  evidenceReader: EvidenceReaderPort;
  payload: EvidencePayloadPort;
  attemptReader: ExecutionAttemptReaderPort;
  clock: ClockPort;
  audit: EvidenceAuditPort;
  ids: IdGeneratorPort;
  productStore: ProductSqliteHandle;
  registerEvidence: RegisterEvidence;
  ingestExecutionAttemptEvidence: IngestExecutionAttemptEvidence;
  verifyEvidenceIntegrity: VerifyEvidenceIntegrity;
  markEvidenceUnavailable: MarkEvidenceUnavailable;
  createReviewBundle: CreateReviewBundle;
  attachEvidenceToReviewBundle: AttachEvidenceToReviewBundle;
  removeEvidenceFromReviewBundle: RemoveEvidenceFromReviewBundle;
  freezeReviewBundle: FreezeReviewBundle;
  startReview: StartReview;
  completeReview: CompleteReview;
  reopenReview: ReopenReview;
  evaluateClaim: EvaluateClaim;
  confirmClaimEvaluation: ConfirmClaimEvaluation;
  rejectClaimEvaluation: RejectClaimEvaluation;
  proposeMaturity: ProposeMaturity;
  confirmMaturity: ConfirmMaturity;
  downgradeMaturity: DowngradeMaturity;
  recommendNextGate: RecommendNextGate;
};

/**
 * Evidence + ReviewBundle durable on Product SQLite (M5-A).
 * ClaimEvaluation + MaturityAssessment remain Memory (out of minimal M5).
 */
export function createSqliteEvidenceReviewServices(
  options: CreateSqliteEvidenceReviewServicesOptions,
): SqliteEvidenceReviewServices {
  const productStore = options.productStore;
  // Type-compat placeholders — evidence/RB use SQLite repos, not these maps.
  const store = new MemoryEvidenceStore();
  const repository = new SqliteEvidenceRepository(productStore);
  const reviewBundleStore = new MemoryReviewBundleStore();
  const reviewBundleRepository = new SqliteReviewBundleRepository(productStore);
  const reviewBundleReader = new ReviewBundleRepositoryReader(
    reviewBundleRepository,
  );
  const claimEvaluationStore =
    options.claimEvaluationStore ?? new MemoryClaimEvaluationStore();
  const claimEvaluationRepository = new MemoryClaimEvaluationRepository(
    claimEvaluationStore,
  );
  const claimEvaluationReader = new ClaimEvaluationRepositoryReader(
    claimEvaluationRepository,
    claimEvaluationStore,
  );
  const claimAuthority = options.claimAuthority ?? new FakeClaimAuthority();
  const maturityAssessmentStore =
    options.maturityAssessmentStore ?? new MemoryMaturityAssessmentStore();
  const maturityAssessmentRepository = new MemoryMaturityAssessmentRepository(
    maturityAssessmentStore,
  );
  const maturityAssessmentReader = new MaturityAssessmentRepositoryReader(
    maturityAssessmentRepository,
  );
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleEvidenceAuditJournal();
  const ids = options.ids ?? new RandomIdGenerator();
  const payload = options.payload ?? new FakeEvidencePayloadAdapter();
  const attemptReader =
    options.attemptReader ?? new FakeExecutionAttemptReader();
  const evidenceReader =
    options.evidenceReader ?? new EvidenceRepositoryReader(repository);

  return {
    store,
    repository,
    reviewBundleStore,
    reviewBundleRepository,
    reviewBundleReader,
    claimEvaluationStore,
    claimEvaluationRepository,
    claimEvaluationReader,
    claimAuthority,
    maturityAssessmentStore,
    maturityAssessmentRepository,
    maturityAssessmentReader,
    evidenceReader,
    payload,
    attemptReader,
    clock,
    audit,
    ids,
    productStore,
    registerEvidence: new RegisterEvidence(repository, clock, audit, ids),
    ingestExecutionAttemptEvidence: new IngestExecutionAttemptEvidence(
      repository,
      attemptReader,
      clock,
      audit,
      ids,
    ),
    verifyEvidenceIntegrity: new VerifyEvidenceIntegrity(
      repository,
      payload,
      clock,
      audit,
      ids,
    ),
    markEvidenceUnavailable: new MarkEvidenceUnavailable(
      repository,
      clock,
      audit,
      ids,
    ),
    createReviewBundle: new CreateReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    attachEvidenceToReviewBundle: new AttachEvidenceToReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    removeEvidenceFromReviewBundle: new RemoveEvidenceFromReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    freezeReviewBundle: new FreezeReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    startReview: new StartReview(reviewBundleRepository, clock, audit, ids),
    completeReview: new CompleteReview(
      reviewBundleRepository,
      clock,
      audit,
      ids,
    ),
    reopenReview: new ReopenReview(reviewBundleRepository, clock, audit, ids),
    evaluateClaim: new EvaluateClaim(
      claimEvaluationRepository,
      reviewBundleReader,
      evidenceReader,
      claimAuthority,
      clock,
      audit,
      ids,
    ),
    confirmClaimEvaluation: new ConfirmClaimEvaluation(
      claimEvaluationRepository,
      reviewBundleReader,
      evidenceReader,
      claimAuthority,
      clock,
      audit,
      ids,
    ),
    rejectClaimEvaluation: new RejectClaimEvaluation(
      claimEvaluationRepository,
      clock,
      audit,
      ids,
    ),
    proposeMaturity: new ProposeMaturity(
      maturityAssessmentRepository,
      claimEvaluationReader,
      clock,
      audit,
      ids,
    ),
    confirmMaturity: new ConfirmMaturity(
      maturityAssessmentRepository,
      claimEvaluationReader,
      claimAuthority,
      clock,
      audit,
      ids,
    ),
    downgradeMaturity: new DowngradeMaturity(
      maturityAssessmentRepository,
      claimEvaluationReader,
      claimAuthority,
      clock,
      audit,
      ids,
    ),
    recommendNextGate: new RecommendNextGate(
      evidenceReader,
      reviewBundleReader,
      claimEvaluationReader,
      maturityAssessmentReader,
      clock,
      audit,
      ids,
    ),
  };
}

export function createTestSqliteEvidenceReviewServices(
  options: CreateSqliteEvidenceReviewServicesOptions & {
    fixedNowIso?: string;
  },
): SqliteEvidenceReviewServices & {
  fakePayload: FakeEvidencePayloadAdapter;
  fakeAttempts: FakeExecutionAttemptReader;
  memoryAudit: MemoryEvidenceAuditJournal;
  fakeClaimAuthority: FakeClaimAuthority;
} {
  const fakePayload =
    options.payload instanceof FakeEvidencePayloadAdapter
      ? options.payload
      : new FakeEvidencePayloadAdapter();
  const fakeAttempts =
    options.attemptReader instanceof FakeExecutionAttemptReader
      ? options.attemptReader
      : new FakeExecutionAttemptReader();
  const memoryAudit =
    options.audit instanceof MemoryEvidenceAuditJournal
      ? options.audit
      : new MemoryEvidenceAuditJournal();
  const fakeClaimAuthority =
    options.claimAuthority instanceof FakeClaimAuthority
      ? options.claimAuthority
      : new FakeClaimAuthority();

  const services = createSqliteEvidenceReviewServices({
    ...options,
    clock:
      options.clock ??
      new FixedClock(options.fixedNowIso ?? "2026-08-15T07:00:00.000Z"),
    audit: memoryAudit,
    ids: options.ids ?? new FixedIdGenerator(),
    payload: fakePayload,
    attemptReader: fakeAttempts,
    claimAuthority: fakeClaimAuthority,
  });

  return {
    ...services,
    fakePayload,
    fakeAttempts,
    memoryAudit,
    fakeClaimAuthority,
  };
}

===== END FILE: projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts =====

===== BEGIN FILE: projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts =====
/**
 * M5-B W1 — factual LPS append of evidenceIds / reviewBundleIds after
 * successful Evidence ingest + ReviewBundle create.
 * Recommendation remains Recommendation (not Decision / not gate consume).
 */

import type { ProjectServices } from "@/lib/oa/project";
import { LOCAL_MORRIS_ACTOR } from "../f2/recordDecision";

export type AppendEvidenceOutcomeToLpsResult =
  | { ok: true; lpsVersion: number }
  | { ok: false; code: string; message: string };

export async function appendEvidenceOutcomeToLps(input: {
  projectId: string;
  evidenceId: string;
  reviewBundleId: string;
  projectServices: Pick<
    ProjectServices,
    "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
  >;
}): Promise<AppendEvidenceOutcomeToLpsResult> {
  const current =
    await input.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  if (!current.ok) {
    return {
      ok: false,
      code: current.error.detailCode,
      message: current.error.message,
    };
  }

  const lps = current.livingProjectState;
  const evidenceIds = [
    ...new Set([...(lps.evidenceIds ?? []), input.evidenceId]),
  ];
  const reviewBundleIds = [
    ...new Set([...(lps.reviewBundleIds ?? []), input.reviewBundleId]),
  ];

  const appended =
    await input.projectServices.appendLivingProjectStateVersion.execute({
      projectId: input.projectId,
      expectedVersion: lps.version,
      objective: lps.objective,
      context: lps.context,
      scope: lps.scope,
      createdBy: LOCAL_MORRIS_ACTOR,
      evidenceIds,
      reviewBundleIds,
    });

  if (!appended.ok) {
    return {
      ok: false,
      code: appended.error.detailCode,
      message: appended.error.message,
    };
  }

  return { ok: true, lpsVersion: appended.livingProjectState.version };
}

===== END FILE: projects/sfia-studio/app/features/project-assistant/f3/appendEvidenceOutcomeToLps.ts =====

===== BEGIN FILE: projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts =====
/**
 * M5 — Product SQLite migration M3→M5 (and M2→M5 ladder).
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  PRODUCT_SCHEMA_VERSION,
  PRODUCT_SCHEMA_VERSION_M2,
  PRODUCT_SCHEMA_VERSION_M3,
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import { createSqliteCycleServices } from "@/lib/oa/cycle";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-mig-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function buildProjectServices(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-15T08:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

function tableExists(
  db: DatabaseSync,
  name: string,
): boolean {
  const row = db
    .prepare(
      `SELECT name FROM sqlite_master WHERE type='table' AND name=?`,
    )
    .get(name) as { name?: string } | undefined;
  return row?.name === name;
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M5 Product SQLite schema migration", () => {
  it("migrates M3 DB additively to m5, preserves Project/LPS/Cycle/Decision tables", async () => {
    const dbPath = tempDbPath("m3-legacy.sqlite");
    {
      const bootstrap = buildProjectServices(dbPath);
      const created = await bootstrap.createProject.execute({
        projectId: "prj:m5-mig",
        title: "M3 legacy project",
        objective: "preserve-m3",
        context: "m3-context",
        scope: "m3-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: ACTOR,
        lpsVersionId: "lps:m5-mig-v1",
        idempotencyKey: "idem:m5-mig",
      });
      expect(created.ok).toBe(true);
      const cycles = createSqliteCycleServices({
        projectServices: bootstrap,
        productStore: bootstrap.store,
      });
      const cycle = await cycles.createCycle.execute({
        cycleInstanceId: "cyc:m5-mig-1",
        cycleTypeId: "cyc:delivery",
        projectId: "prj:m5-mig",
        signals: {},
        createdBy: ACTOR,
      });
      expect(cycle.ok).toBe(true);
      bootstrap.dispose();
      openServices.pop();
    }

    {
      const db = new DatabaseSync(dbPath);
      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_result_budget");
      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_active");
      db.exec("DROP TABLE IF EXISTS oa_execution_attempts");
      db.exec("DROP TABLE IF EXISTS oa_evidence_idempotency");
      db.exec("DROP TABLE IF EXISTS oa_evidence");
      db.exec("DROP TABLE IF EXISTS oa_review_bundle_idempotency");
      db.exec("DROP TABLE IF EXISTS oa_review_bundles");
      db.prepare(
        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
      ).run(PRODUCT_SCHEMA_VERSION_M3);
      db.close();
    }

    const svc = buildProjectServices(dbPath);
    const version = svc.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
    expect(PRODUCT_SCHEMA_VERSION).toBe("m5-0.1.0");
    expect(PRODUCT_SCHEMA_VERSION_M3).toBe("m3-0.1.0");

    expect(tableExists(svc.store.db, "oa_human_decisions")).toBe(true);
    expect(tableExists(svc.store.db, "oa_execution_contracts")).toBe(true);
    expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
    expect(tableExists(svc.store.db, "oa_evidence")).toBe(true);
    expect(tableExists(svc.store.db, "oa_review_bundles")).toBe(true);
    expect(
      tableExists(svc.store.db, "oa_execution_attempt_result_budget"),
    ).toBe(true);

    const project = await svc.getProject.execute({ projectId: "prj:m5-mig" });
    expect(project.ok).toBe(true);
    const cycles = createSqliteCycleServices({
      projectServices: svc,
      productStore: svc.store,
    });
    const cycle = await cycles.cycles.findById("cyc:m5-mig-1");
    expect(cycle?.cycleInstanceId).toBe("cyc:m5-mig-1");
  });

  it("migrates M2 DB through M3+M5 ladder", async () => {
    const dbPath = tempDbPath("m2-legacy.sqlite");
    {
      const bootstrap = buildProjectServices(dbPath);
      bootstrap.dispose();
      openServices.pop();
    }
    {
      const db = new DatabaseSync(dbPath);
      db.exec("DROP TABLE IF EXISTS oa_human_decisions");
      db.exec("DROP TABLE IF EXISTS oa_execution_contracts");
      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_result_budget");
      db.exec("DROP TABLE IF EXISTS oa_execution_attempt_active");
      db.exec("DROP TABLE IF EXISTS oa_execution_attempts");
      db.exec("DROP TABLE IF EXISTS oa_evidence_idempotency");
      db.exec("DROP TABLE IF EXISTS oa_evidence");
      db.exec("DROP TABLE IF EXISTS oa_review_bundle_idempotency");
      db.exec("DROP TABLE IF EXISTS oa_review_bundles");
      db.prepare(
        `UPDATE schema_meta SET value = ? WHERE key = 'schema_version'`,
      ).run(PRODUCT_SCHEMA_VERSION_M2);
      db.close();
    }
    const svc = buildProjectServices(dbPath);
    const version = svc.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe("m5-0.1.0");
    expect(tableExists(svc.store.db, "oa_execution_attempts")).toBe(true);
  });

  it("m5 reopen is idempotent", () => {
    const dbPath = tempDbPath("m5-reopen.sqlite");
    const a = buildProjectServices(dbPath);
    a.dispose();
    openServices.pop();
    const b = buildProjectServices(dbPath);
    const version = b.store.db
      .prepare("SELECT value FROM schema_meta WHERE key = ?")
      .get("schema_version") as { value: string };
    expect(version.value).toBe(PRODUCT_SCHEMA_VERSION);
  });

  it("fails closed on unknown schema version", () => {
    const dbPath = tempDbPath("unknown.sqlite");
    const db = new DatabaseSync(dbPath);
    db.exec(`
CREATE TABLE schema_meta (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);
INSERT INTO schema_meta(key, value) VALUES ('schema_version', 'm99-future');
`);
    db.close();
    expect(() => buildProjectServices(dbPath)).toThrow(
      /product_sqlite_unsupported_schema/,
    );
  });
});

===== END FILE: projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts =====

===== BEGIN FILE: projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts =====
/**
 * M5-B W1 — LPS factual evidenceIds / reviewBundleIds append + carry-forward.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-w1-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function openProjects(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-15T09:30:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M5 W1 LPS evidence/RB append", () => {
  it("appends evidenceIds and reviewBundleIds factually", async () => {
    const dbPath = tempDbPath("w1.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-w1",
      title: "M5 W1",
      objective: "m5-w1-objective",
      context: "m5-w1-context",
      scope: "m5-w1-scope",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-w1-v1",
      idempotencyKey: "idem:m5-w1",
    });

    const linked = await appendEvidenceOutcomeToLps({
      projectId: "prj:m5-w1",
      evidenceId: "ev:m5-w1",
      reviewBundleId: "rb:m5-w1",
      projectServices: projects,
    });
    expect(linked.ok).toBe(true);
    if (!linked.ok) return;
    expect(linked.lpsVersion).toBe(2);

    const lps = await projects.getCurrentLivingProjectState.execute({
      projectId: "prj:m5-w1",
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    expect(lps.livingProjectState.evidenceIds).toEqual(["ev:m5-w1"]);
    expect(lps.livingProjectState.reviewBundleIds).toEqual(["rb:m5-w1"]);
  });

  it("preserves evidenceIds/reviewBundleIds when omitted on later append", async () => {
    const dbPath = tempDbPath("carry.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-carry",
      title: "M5 carry",
      objective: "carry-objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-carry-v1",
      idempotencyKey: "idem:m5-carry",
    });

    await appendEvidenceOutcomeToLps({
      projectId: "prj:m5-carry",
      evidenceId: "ev:keep",
      reviewBundleId: "rb:keep",
      projectServices: projects,
    });

    const appended = await projects.appendLivingProjectStateVersion.execute({
      projectId: "prj:m5-carry",
      expectedVersion: 2,
      objective: "carry-objective-v3",
      createdBy: ACTOR,
      decisionIds: ["dec:1"],
    });
    expect(appended.ok).toBe(true);
    if (!appended.ok) return;
    expect(appended.livingProjectState.evidenceIds).toEqual(["ev:keep"]);
    expect(appended.livingProjectState.reviewBundleIds).toEqual(["rb:keep"]);
    expect(appended.livingProjectState.decisionIds).toEqual(["dec:1"]);
  });
});

===== END FILE: projects/sfia-studio/app/__tests__/oa/project/m5W1LpsAppend.test.ts =====

===== BEGIN FILE: projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts =====
/**
 * M5 strong restart proof — two independent Node processes, same DB file.
 * Attempt + Evidence + ReviewBundle + W1 LPS ids + result budget.
 * @vitest-environment node
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const WORKER = path.join(
  APP_ROOT,
  "__tests__/oa/project/m5RestartProcessWorker.ts",
);
const TSX = path.join(APP_ROOT, "node_modules/.bin/tsx");

describe("M5 process restart proof", () => {
  it(
    "create Attempt/Evidence/RB/W1 in process A, read in process B",
    () => {
      expect(fs.existsSync(TSX)).toBe(true);
      const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-proc-"));
      const dbPath = path.join(dir, "oa-product.sqlite");
      const projectId = "prj:m5-proc";

      try {
        const create = spawnSync(TSX, [WORKER, "create", dbPath, projectId], {
          cwd: APP_ROOT,
          encoding: "utf8",
          env: { ...process.env },
          timeout: 60_000,
        });
        expect(create.status, create.stderr || create.stdout).toBe(0);
        const created = JSON.parse(create.stdout.trim()) as {
          ok: boolean;
          attemptId?: string;
          evidenceId?: string;
          reviewBundleId?: string;
          lpsVersion?: number;
        };
        expect(created.ok).toBe(true);

        const read = spawnSync(TSX, [WORKER, "read", dbPath, projectId], {
          cwd: APP_ROOT,
          encoding: "utf8",
          env: { ...process.env },
          timeout: 60_000,
        });
        expect(read.status, read.stderr || read.stdout).toBe(0);
        const loaded = JSON.parse(read.stdout.trim()) as {
          ok: boolean;
          attemptStatus?: string;
          resultBudget?: number | null;
          evidenceId?: string;
          reviewBundleId?: string;
          evidenceIds?: string[];
          reviewBundleIds?: string[];
          lpsVersion?: number;
        };
        expect(loaded.ok).toBe(true);
        expect(loaded.attemptStatus).toBe("accepted");
        expect(loaded.resultBudget).toBe(1);
        expect(loaded.evidenceId).toBe("ev:m5-proc");
        expect(loaded.reviewBundleId).toBe("rb:m5-proc");
        expect(loaded.evidenceIds).toEqual(["ev:m5-proc"]);
        expect(loaded.reviewBundleIds).toEqual(["rb:m5-proc"]);
        expect(loaded.lpsVersion).toBe(created.lpsVersion);
      } finally {
        fs.rmSync(dir, { recursive: true, force: true });
      }
    },
    60_000,
  );
});

===== END FILE: projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessProof.test.ts =====

===== BEGIN FILE: projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts =====
/**
 * Child-process worker for M5 restart proof.
 * Usage: tsx m5RestartProcessWorker.ts <create|read> <dbPath> <projectId>
 */
import path from "node:path";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import { createTestSqliteProductProjectServices } from "@/lib/oa/project";
import {
  SqliteExecutionAttemptRepository,
  SqliteExecutionAttemptTechnicalStore,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";
import { createTestSqliteEvidenceReviewServices } from "@/lib/oa/evidence-review";
import { appendEvidenceOutcomeToLps } from "@/features/project-assistant/f3/appendEvidenceOutcomeToLps";

const APP_ROOT = process.cwd();
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const NOW = "2026-08-15T10:00:00.000Z";
const EVIDENCE_DIGEST =
  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as Digest;

function baseAttempt(attemptId: string): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    attemptId,
    executionContractId: "xct:m5-proc",
    executionContractVersion: 1,
    selectedAgentRef: "agt:fixture",
    status: "accepted",
    idempotencyKey: `idem-${attemptId}`,
    correlationId: "cor:m5-proc",
    version: 1,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:m5-proc",
      actor: { actorId: "actor:morris", role: "decision_maker" },
      source: "human_decision",
      timestamp: NOW,
      correlationId: "cor:m5-proc",
    },
    selectionStrategy: "capabilities_deterministic",
    selectionProfile: "standard",
    selectionExpiresAt: "2026-08-15T10:30:00.000Z",
  };
}

async function main(): Promise<void> {
  const [, , mode, dbPath, projectId] = process.argv;
  if (!mode || !dbPath || !projectId) {
    throw new Error("usage: <create|read> <dbPath> <projectId>");
  }

  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: NOW,
    dbPath,
  });

  try {
    if (mode === "create") {
      const created = await svc.createProject.execute({
        projectId,
        title: "M5 Process Restart",
        objective: "m5-process-restart-objective",
        context: "m5-process-restart-context",
        scope: "m5-process-restart-scope",
        doctrinePackagePin: VALID_PIN,
        createdBy: {
          actorId: "actor:morris",
          role: "project_owner",
          displayName: "Morris",
          authorityLevel: "N3",
        },
        lpsVersionId: "lps:m5-proc-v1",
        idempotencyKey: `idem:${projectId}`,
      });
      if (!created.ok) {
        console.error(JSON.stringify(created.error));
        process.exit(2);
      }

      const attempts = new SqliteExecutionAttemptRepository(svc.store);
      const tech = new SqliteExecutionAttemptTechnicalStore(svc.store);
      const attempt = baseAttempt("xat:m5-proc");
      await attempts.create(attempt);
      tech.resultRecordingAttempts.set(attempt.attemptId, 1);

      const evidence = createTestSqliteEvidenceReviewServices({
        productStore: svc.store,
        fixedNowIso: NOW,
      });
      const reg = await evidence.registerEvidence.execute({
        evidenceId: "ev:m5-proc",
        idempotencyKey: "idem:ev:m5-proc",
        actor: {
          actorId: "actor:morris",
          role: "decision_maker",
          authorityLevel: "N3",
        },
        type: "document",
        source: "fixture",
        sourceKind: "manual",
        bindings: { projectId },
        classification: "internal",
        storageMode: "metadata_only",
        digest: EVIDENCE_DIGEST,
      });
      if (!reg.ok) {
        console.error(JSON.stringify(reg.error));
        process.exit(3);
      }
      const bundle = await evidence.createReviewBundle.execute({
        reviewBundleId: "rb:m5-proc",
        idempotencyKey: "idem:rb:m5-proc",
        actor: {
          actorId: "actor:morris",
          role: "decision_maker",
          authorityLevel: "N3",
        },
        projectId,
        evidenceIds: ["ev:m5-proc"],
      });
      if (!bundle.ok) {
        console.error(JSON.stringify(bundle.error));
        process.exit(4);
      }

      const linked = await appendEvidenceOutcomeToLps({
        projectId,
        evidenceId: "ev:m5-proc",
        reviewBundleId: "rb:m5-proc",
        projectServices: svc,
      });
      if (!linked.ok) {
        console.error(JSON.stringify(linked));
        process.exit(5);
      }

      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          attemptId: attempt.attemptId,
          evidenceId: "ev:m5-proc",
          reviewBundleId: "rb:m5-proc",
          lpsVersion: linked.lpsVersion,
          resultBudget: 1,
        })}\n`,
      );
      return;
    }

    if (mode === "read") {
      const attempts = new SqliteExecutionAttemptRepository(svc.store);
      const tech = new SqliteExecutionAttemptTechnicalStore(svc.store);
      const evidence = createTestSqliteEvidenceReviewServices({
        productStore: svc.store,
      });
      const attempt = await attempts.findById("xat:m5-proc");
      const ev = await evidence.repository.findById("ev:m5-proc");
      const rb = await evidence.reviewBundleRepository.findById("rb:m5-proc");
      const lps = await svc.getCurrentLivingProjectState.execute({ projectId });
      if (!attempt || !ev || !rb || !lps.ok) {
        process.stdout.write(`${JSON.stringify({ ok: false })}\n`);
        process.exit(6);
      }
      process.stdout.write(
        `${JSON.stringify({
          ok: true,
          attemptStatus: attempt.status,
          resultBudget: tech.resultRecordingAttempts.get("xat:m5-proc") ?? null,
          evidenceId: ev.evidenceId,
          reviewBundleId: rb.reviewBundleId,
          evidenceIds: lps.livingProjectState.evidenceIds ?? [],
          reviewBundleIds: lps.livingProjectState.reviewBundleIds ?? [],
          lpsVersion: lps.livingProjectState.version,
        })}\n`,
      );
      return;
    }

    throw new Error(`unknown mode ${mode}`);
  } finally {
    svc.dispose();
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack : String(err));
  process.exit(1);
});

===== END FILE: projects/sfia-studio/app/__tests__/oa/project/m5RestartProcessWorker.ts =====

===== BEGIN FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts =====
/**
 * M5 — ExecutionAttempt durability + durable resultRecordingAttempts budget.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  SqliteExecutionAttemptRepository,
  SqliteExecutionAttemptTechnicalStore,
  type ExecutionAttempt,
} from "@/lib/oa/execution-attempt";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const NOW = "2026-08-15T08:30:00.000Z";

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-att-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function openProjects(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: NOW,
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

function baseAttempt(
  overrides: Partial<ExecutionAttempt> & { attemptId: string },
): ExecutionAttempt {
  return {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:m5-001",
    executionContractVersion: 1,
    selectedAgentRef: "agt:fixture",
    status: "accepted",
    idempotencyKey: `idem-${overrides.attemptId}`,
    correlationId: "cor:m5-att",
    version: 1,
    createdAt: NOW,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:m5-att",
      actor: { actorId: "actor:morris", role: "decision_maker" },
      source: "human_decision",
      timestamp: NOW,
      correlationId: "cor:m5-att",
    },
    selectionStrategy: "capabilities_deterministic",
    selectionProfile: "standard",
    selectionExpiresAt: "2026-08-15T09:00:00.000Z",
    ...overrides,
  };
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M5 ExecutionAttempt durability", () => {
  it("persists attempt + active index + result budget across reopen", async () => {
    const dbPath = tempDbPath("attempt.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-att",
      title: "M5 Attempt",
      objective: "m5-att-objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-att-v1",
      idempotencyKey: "idem:m5-att-prj",
    });

    const repo = new SqliteExecutionAttemptRepository(projects.store);
    const tech = new SqliteExecutionAttemptTechnicalStore(projects.store);
    const attempt = baseAttempt({ attemptId: "xat:m5-durable" });
    await repo.create(attempt);
    await repo.reserveActiveContract(
      attempt.executionContractId,
      attempt.attemptId,
    );
    tech.resultRecordingAttempts.set(attempt.attemptId, 2);

    const active = await repo.findActiveByContract(attempt.executionContractId);
    expect(active?.attemptId).toBe("xat:m5-durable");
    expect(tech.resultRecordingAttempts.get(attempt.attemptId)).toBe(2);

    projects.dispose();
    openServices.pop();

    const projects2 = openProjects(dbPath);
    const repo2 = new SqliteExecutionAttemptRepository(projects2.store);
    const tech2 = new SqliteExecutionAttemptTechnicalStore(projects2.store);
    const loaded = await repo2.findById("xat:m5-durable");
    expect(loaded?.status).toBe("accepted");
    expect(loaded?.idempotencyKey).toBe("idem-xat:m5-durable");
    const active2 = await repo2.findActiveByContract("xct:m5-001");
    expect(active2?.attemptId).toBe("xat:m5-durable");
    expect(tech2.resultRecordingAttempts.get("xat:m5-durable")).toBe(2);
  });

  it("enforces OCC and active reservation on SQLite", async () => {
    const dbPath = tempDbPath("occ.sqlite");
    const projects = openProjects(dbPath);
    const repo = new SqliteExecutionAttemptRepository(projects.store);
    await repo.create(baseAttempt({ attemptId: "xat:m5-occ" }));
    await expect(
      repo.update(
        baseAttempt({
          attemptId: "xat:m5-occ",
          status: "running",
          version: 2,
          startedAt: NOW,
        }),
        99,
      ),
    ).rejects.toMatchObject({ detailCode: "VERSION_CONFLICT" });

    await repo.reserveActiveContract("xct:m5-001", "xat:m5-occ");
    await expect(
      repo.reserveActiveContract("xct:m5-001", "xat:other"),
    ).rejects.toMatchObject({ detailCode: "EXECUTION_ALREADY_ACTIVE" });
  });
});

===== END FILE: projects/sfia-studio/app/__tests__/oa/execution-attempt/m5AttemptDurability.test.ts =====

===== BEGIN FILE: projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts =====
/**
 * M5 — Evidence + ReviewBundle Product SQLite durability.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createTestDoctrineResolver,
  type Digest,
  type DoctrinePackagePin,
} from "@/lib/oa/doctrine";
import {
  createTestSqliteProductProjectServices,
  type ActorReference,
  type SqliteProductProjectServices,
} from "@/lib/oa/project";
import {
  createTestSqliteEvidenceReviewServices,
  type ActorReference as EvidenceActor,
  type Digest as EvidenceDigest,
} from "@/lib/oa/evidence-review";

const APP_ROOT = path.resolve(__dirname, "../../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const EVIDENCE_DIGEST =
  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as EvidenceDigest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const EV_ACTOR: EvidenceActor = {
  actorId: "actor:morris",
  role: "decision_maker",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];
const openServices: Array<{ dispose: () => void }> = [];

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m5-ev-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

function openProjects(dbPath: string): SqliteProductProjectServices {
  const { resolver } = createTestDoctrineResolver({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
  });
  const svc = createTestSqliteProductProjectServices({
    doctrineResolver: resolver,
    fixedNowIso: "2026-08-15T09:00:00.000Z",
    dbPath,
  });
  openServices.push(svc);
  return svc;
}

afterEach(() => {
  while (openServices.length) {
    try {
      openServices.pop()?.dispose();
    } catch {
      /* ignore */
    }
  }
  while (tempDirs.length) {
    const dir = tempDirs.pop();
    if (dir) fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("M5 Evidence/ReviewBundle durability", () => {
  it("persists Evidence + ReviewBundle across Product SQLite reopen", async () => {
    const dbPath = tempDbPath("ev-rb.sqlite");
    const projects = openProjects(dbPath);
    await projects.createProject.execute({
      projectId: "prj:m5-ev",
      title: "M5 Evidence",
      objective: "m5-ev-objective",
      doctrinePackagePin: VALID_PIN,
      createdBy: ACTOR,
      lpsVersionId: "lps:m5-ev-v1",
      idempotencyKey: "idem:m5-ev-prj",
    });

    const services = createTestSqliteEvidenceReviewServices({
      productStore: projects.store,
      fixedNowIso: "2026-08-15T09:00:00.000Z",
    });

    const reg = await services.registerEvidence.execute({
      evidenceId: "ev:m5-durable",
      idempotencyKey: "idem:ev:m5-durable",
      actor: EV_ACTOR,
      type: "document",
      source: "fixture",
      sourceKind: "manual",
      bindings: { projectId: "prj:m5-ev" },
      classification: "internal",
      storageMode: "metadata_only",
      digest: EVIDENCE_DIGEST,
    });
    expect(reg.ok).toBe(true);

    const bundle = await services.createReviewBundle.execute({
      reviewBundleId: "rb:m5-durable",
      idempotencyKey: "idem:rb:m5-durable",
      actor: EV_ACTOR,
      projectId: "prj:m5-ev",
      evidenceIds: ["ev:m5-durable"],
    });
    expect(bundle.ok).toBe(true);

    projects.dispose();
    openServices.pop();

    const projects2 = openProjects(dbPath);
    const services2 = createTestSqliteEvidenceReviewServices({
      productStore: projects2.store,
    });
    const evidence = await services2.repository.findById("ev:m5-durable");
    expect(evidence?.status).toBe("available");
    expect(evidence?.bindings.projectId).toBe("prj:m5-ev");
    const rb = await services2.reviewBundleRepository.findById("rb:m5-durable");
    expect(rb?.evidenceRefs).toEqual(["ev:m5-durable"]);
    const byKey = await services2.repository.findByIdempotencyKey(
      "idem:ev:m5-durable",
    );
    expect(byKey?.evidence.evidenceId).toBe("ev:m5-durable");
  });

  it("createSuccessorAndMarkSuperseded is transactional on Product SQLite", async () => {
    const dbPath = tempDbPath("reopen.sqlite");
    const projects = openProjects(dbPath);
    const services = createTestSqliteEvidenceReviewServices({
      productStore: projects.store,
    });
    const reg = await services.registerEvidence.execute({
      evidenceId: "ev:m5-reopen",
      idempotencyKey: "idem:ev:m5-reopen",
      actor: EV_ACTOR,
      type: "document",
      source: "fixture",
      sourceKind: "manual",
      bindings: { projectId: "prj:m5-reopen" },
      classification: "internal",
      storageMode: "metadata_only",
      digest: EVIDENCE_DIGEST,
    });
    expect(reg.ok).toBe(true);
    const created = await services.createReviewBundle.execute({
      reviewBundleId: "rb:m5-src",
      idempotencyKey: "idem:rb:m5-src",
      actor: EV_ACTOR,
      projectId: "prj:m5-reopen",
      evidenceIds: ["ev:m5-reopen"],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    // Freeze → start → complete so reopen is legal.
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: "rb:m5-src",
      actor: EV_ACTOR,
      expectedVersion: 1,
      idempotencyKey: "idem:freeze:m5-src",
    });
    expect(frozen.ok).toBe(true);
    const started = await services.startReview.execute({
      reviewBundleId: "rb:m5-src",
      actor: EV_ACTOR,
      expectedVersion: 2,
      idempotencyKey: "idem:start:m5-src",
    });
    expect(started.ok).toBe(true);
    const completed = await services.completeReview.execute({
      reviewBundleId: "rb:m5-src",
      actor: EV_ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
      idempotencyKey: "idem:complete:m5-src",
    });
    expect(completed.ok).toBe(true);

    const reopened = await services.reopenReview.execute({
      reviewBundleId: "rb:m5-src",
      successorReviewBundleId: "rb:m5-successor",
      actor: EV_ACTOR,
      expectedVersion: 4,
      reason: "revise",
      idempotencyKey: "idem:reopen:m5-src",
    });
    expect(reopened.ok).toBe(true);
    if (!reopened.ok) return;
    expect(reopened.reviewBundle.reviewBundleId).toBe("rb:m5-src");
    expect(reopened.reviewBundle.status).toBe("superseded");
    expect(reopened.successor?.reviewBundleId).toBe("rb:m5-successor");
    expect(reopened.successor?.status).toBe("draft");

    const superseded = await services.reviewBundleRepository.findById(
      "rb:m5-src",
    );
    expect(superseded?.status).toBe("superseded");
    const successor = await services.reviewBundleRepository.findById(
      "rb:m5-successor",
    );
    expect(successor?.status).toBe("draft");
  });
});

===== END FILE: projects/sfia-studio/app/__tests__/oa/evidence-review/m5EvidenceReviewDurability.test.ts =====
```

---
END OF REVIEW PACK FULL
