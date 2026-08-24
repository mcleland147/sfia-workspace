# SFIA Studio — W3-B Delivery Restart — Review Pack FULL

**Cycle 8 · CRITICAL · INC · Capability W3-B · US-P1-05 / US-P1-06**

Timestamps: **2026-08-24 22:13 CEST** · **2026-08-24 20:13 UTC**

---

## Morris GO (consumed)

GO MORRIS — W3-B DELIVERY RESTART — US-P1-05/06 ONLY — CURRENT MAIN `a71d9413` — PRESERVE PRE-DOC12 DIRTY WORKTREE AS HARVEST SOURCE — START FROM CLEAN CURRENT-MAIN DELIVERY WORKTREE/BRANCH — IMPLEMENT TD-W3B-01…04 — REWORK HEURISTIC FC-11 / SYNTHETIC STOP — HARVEST ONLY QUALIFIED ADAPT/KEEP EVIDENCE/UI/TEST HUNKS — CANONICAL /studio — PROVE X-W3B-01…12 DETERMINISTIC PRODUCT-NATIVE — NO US-P1-07/09/FULL-CKC EXPANSION — C6 CLOSED — NO PARALLEL CLAIM/STOP ENGINE — REAL OUT — FINOPS FREEZE — W4 OUT — RUNTIME V3 NON ADOPTED.

---

## Git topology

| Item | Value |
| --- | --- |
| Repo | sfia-workspace |
| origin/main | `a71d9413e0435a8252ab4c695163b67354d193aa` |
| Clean branch | `delivery/sfia-studio-product-completion-w3-b-td-reconciled` |
| Clean worktree | `/Users/morris/Projects/sfia-workspace-w3b-delivery-restart` |
| Candidate commit | `0ef57e73ed28e83c849962117a0a8566d0da8074` |
| Harvest source (READ-ONLY) | `/Users/morris/Projects/sfia-workspace` @ `ba7aa2db` branch `delivery/sfia-studio-product-completion-w3-b-terminal-evidence` |
| Harvest integrity | 25 dirty files pre/post — **unchanged by this cycle** |
| Project push | **NOT performed** |
| Project PR | **NOT created** |

---

## Sources loaded (read-only)

Convergence doctrine/roadmap · Product completion cadrage/conception/architecture/backlog/waves 07–11 · DOC12 W3-B addendum · CKC qualification snapshot · Studio v3 framing 30–37 · Cycle execution template · SFIA cycle routing guide · CKC synthetic map.

**No doc mutations in candidate.**

---

## Convergence / backlog mapping

- **C1 O-07/O-08**: SUCCESS/STOP/FAIL without silent success; Evidence business-first — implemented via FC-11 projection + TrajectorySurface.
- **C2 L→V**: Attempt terminal → Contract Result CE → Evidence/RB → Product terminal projection — same Attempt lifecycle preserved.
- **C6**: Product SQLite, existing ports, SqliteProductStore/UoW — consumed; M8 additive migration only.
- **US-P1-05**: Terminal semantics — TD-W3B-01/03/04 + FC-11 projection.
- **US-P1-06**: Evidence business-first — ingest multi-terminal + TrajectorySurface + materialize pipeline.
- **OUT**: US-P1-07 Nora · US-P1-09 · full CKC · W3-C/D/E · REAL · FinOps/T7 · W4 · runtime v3 ADOPTED.

---

## Harvest manifest (summary)

See `.tmp-sfia-review/w3b-harvest-manifest.md`.

| Source | Classification | Outcome |
| --- | --- | --- |
| w3bProductOutcomeSemantics.ts | REWORK/DROP | Not copied — replaced by EvaluateContractResult + w3bProductTerminalProjection |
| w3bMaterializeProductOutcome.ts | ADAPT | materializeW3bProductTerminal.ts wired to Contract Result CE |
| ingestExecutionAttemptEvidence | KEEP/ADAPT | Multi-terminal ingest (succeeded/failed/timeout/cancelled) |
| TrajectorySurface | ADAPT | Business-first panel bound to CE projection DTO |
| governedExecuteAuthorizedContract | ADAPT | systemGovernedStop path; synthetic Cancel-as-STOP dropped from product semantics |
| E2E harness | ADAPT | Test-only w3b-boundary route + Playwright spec |
| doc11/roadmap dirty edits | DROP | Current main is SoT |

---

## Modified files (43)

```
projects/sfia-studio/app/__tests__/oa/decision/m3ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultEvaluation.test.ts (new)
projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSqliteDurability.test.ts (new)
projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts
projects/sfia-studio/app/__tests__/oa/execution-attempt/systemGovernedStop.test.ts (new)
projects/sfia-studio/app/__tests__/oa/project/m5ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/oa/project/m6ProductSchemaMigration.test.ts
projects/sfia-studio/app/__tests__/project-assistant/w3bProductTerminal.test.ts (new)
projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
projects/sfia-studio/app/app/api/e2e/w3b-boundary/route.ts (new, test-only)
projects/sfia-studio/app/e2e/studio-w3b-terminal-evidence-runtime.spec.ts (new)
projects/sfia-studio/app/e2e/support/w3bBoundaryControl.ts (new)
projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.{tsx,module.css}
projects/sfia-studio/app/features/project-assistant/w2/{actions,governedExecuteAuthorizedContract,types}.ts
projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts (new)
projects/sfia-studio/app/features/project-assistant/w2/w3bProductTerminalProjection.ts (new)
projects/sfia-studio/app/lib/oa/evidence-review/application/{contractResultAssessment,contractResultReviewPolicy,contractResultVerdictProjection,evaluateContractResult,ingestExecutionAttemptEvidence}.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/{claimEvaluationTypes,contractResultTypes,types}.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/{createSqliteEvidenceReviewServices,sqliteClaimEvaluationRepository}.ts
projects/sfia-studio/app/lib/oa/evidence-review/{index,ports/claimEvaluationRepository}.ts
projects/sfia-studio/app/lib/oa/execution-attempt/application/{cancelExecutionAttempt,systemGovernedStop}.ts
projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
projects/sfia-studio/app/lib/oa/execution-attempt/{index,infrastructure/sqlite/createSqliteExecutionAttemptServices,ports/executionAttemptAudit}.ts
projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/{db,productSqliteHandle}.ts
projects/sfia-studio/app/lib/vertical-slice-runtime/{f3FixtureWiring,service,w3bE2eBoundaryControl}.ts
```

---

## TD-W3B-01 — Contract Result ClaimEvaluation

**Domain**: `contractResultTypes.ts` — `subjectKind: execution_contract_result`, bindings (projectId, cycleInstanceId, executionContractId/Version/SemanticFingerprint, executionAttemptId, reviewBundleId/Version, evidenceRefs), `expectedOutputAssessments[]`, `evidenceRequirementAssessments[]`.

**Evaluation**: `evaluateContractResult.ts` — server-owned; `ClaimEvaluation.status` is canonical SoT; `contractResultVerdictProjection.ts` derives PASS | NOT_PROVEN | FAIL for product DTO only.

**Persistence**: M8 migration in `db.ts` — table `oa_claim_evaluations`, schema `m8-0.1.0`; `sqliteClaimEvaluationRepository.ts` implements `ClaimEvaluationRepositoryPort` for Product path. Fail-closed when SQLite unavailable.

**Generic ClaimEvaluation**: unchanged outside contract-result mode; Morris/N3 structural behavior preserved for non-contract-result claims.

**Review policy** (`contractResultReviewPolicy.ts`):
- Policy ref: `W3B_CONTRACT_RESULT_REVIEW_POLICY_REF` (explicit auditable constant)
- `assisted` / `human_review` require authorized FC-12 reviewer confirmation
- Contract-result mode **bypasses** generic structural→Morris gate (`contractResultBypassesMorrisStructuralGate`)
- No new authority DSL / policy engine

---

## TD-W3B-02 — EO/ER immutable identity

`contractResultAssessment.ts` — identity tuple `(executionContractSemanticFingerprint, kind EO|ER, ordinal)`. Same text at different ordinals = distinct. EC amendment/reorder → new fingerprint → stale assessments → NOT_PROVEN. Tests: `contractResultEvaluation.test.ts`, identity digest test in `w3bProductTerminal.test.ts`.

---

## TD-W3B-03 — SYSTEM_GOVERNED_STOP

`systemGovernedStop.ts` — FC-10 use case on existing Attempt lifecycle:
1. Trusted server guard fact
2. Validate Attempt/EC/project bindings
3. Verify running or proven execution frontier
4. `adapter.cancel` when external execution may be active
5. Require cancel ACK
6. Finalize `cancelled` + `stopOrigin=SYSTEM_GOVERNED_STOP` + durable provenance
7. Idempotent replay; no double cancel

Pre-running accepted → REFUSE (not Product STOP). Human Cancel remains `USER_CANCEL`. Adapter failure → FAIL.

Wired from `governedExecuteAuthorizedContract.ts` via EC stopCondition path (not synthetic fixture token as product truth).

---

## TD-W3B-04 — Durable STOP provenance

On `ExecutionAttempt` domain type + SQLite persistence:
- `stopOrigin`: USER_CANCEL | SYSTEM_GOVERNED_STOP
- `stopCode`: stable server-owned code
- `stopSourceRef`: guard/receipt/checkpoint reference
- `stopObservedAt`: timestamp
- Optional policyVersion/guardVersion/observedFactsDigest

Client cannot forge. Historical cancelled without provenance → no SYSTEM_GOVERNED_STOP claim on restart.

---

## FC-11 Product terminal semantics

`w3bProductTerminalProjection.ts` — projection only from durable facts:
- **SUCCESS**: Attempt compatible + CE subject=execution_contract_result + status=pass + exact bindings
- **STOP**: terminal cancelled + stopOrigin=SYSTEM_GOVERNED_STOP + provenance
- **FAIL**: technical failure path
- **NOT_PROVEN / UNCLAIMED**: missing CE, stale assessments, pilot cancel alone, pre-block

`materializeW3bProductTerminal.ts` orchestrates: terminal ingest → RB → evaluate Contract Result → project product terminal DTO.

**No ProductOutcome aggregate. No heuristic SoT.**

---

## FC-12 Evidence / ReviewBundle

`ingestExecutionAttemptEvidence.ts` extended for succeeded/failed/timeout/cancelled with diagnostic facts. Business-first fields surfaced via projection DTO and TrajectorySurface. Missing Evidence/RB → fail-closed (no Product terminal claim).

---

## /studio UX

`TrajectorySurface.tsx` — business result first, terminal type in clear text, progressive disclosure for technical detail, icon+text (not color-only). Actions in `actions.ts` for materialize/rehydrate. Canonical path `/studio` only; E2E boundary route is test-only.

---

## Hostile / adversarial tests

- Generic ClaimEvaluation pass not consumable as Product SUCCESS
- Hostile claimedProductOutcome ignored
- Pre-running system stop refused (`systemGovernedStop.test.ts`)
- Evidence binding mismatch rejected
- SQLite restart durability (`contractResultSqliteDurability.test.ts`)
- Adversarial ingest policy updated for ATTEMPT_RESULT_UNAVAILABLE without diagnostic facts

---

## Architecture parallelism search

Searched: ProductOutcomeRepository, StopEngine, GuardEngine, GuardAggregate, second Attempt store, second Claim repository, W3B-specific executor, cycleType execution switch, alternate W3-B product route.

**Result: NO parallel durable/behavioral owners detected.** DTO aliases (`ProductOutcome`) are projection compatibility only.

---

## Validation results

| Command | Result |
| --- | --- |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run test` (vitest full) | **2041 passed**, 131 skipped |
| W3-B targeted | 22/22 (contractResult 4, durability, systemStop 2, w3bTerminal 7, ingest updates) |
| W3-A regression | 24/24 governed execute |
| Playwright E2E | **NOT RUN** — spec `studio-w3b-terminal-evidence-runtime.spec.ts` present |
| Runtime PNG captures | **NOT CREATED** — reserve for follow-up E2E run |

---

## X-W3B-01…12 matrix

| ID | Status | Evidence |
| --- | --- | --- |
| X-01 Honest SUCCESS | **PASS** | contractResultEvaluation "technical succeeded alone → not_proven"; w3bTerminal SUCCESS requires CE pass |
| X-02 NOT_PROVEN fail-closed | **PASS** | stale/missing assessments; waived/disputed paths in evaluator |
| X-03 FAIL distinct | **PASS** | w3bTerminal FAIL branch + contractResult failed attempt |
| X-04 System STOP same Attempt | **PASS** | systemGovernedStop + w3bTerminal governed STOP |
| X-05 Cancel/block distinctions | **PASS** | USER_CANCEL unclaimed vs SYSTEM_GOVERNED_STOP; pre-running refuse |
| X-06 Evidence before claim | **PASS** | materialize requires Evidence+RB |
| X-07 Business-first UX | **PASS (unit)** | TrajectorySurface + projection DTO; **E2E visual reserve** |
| X-08 Restart honesty | **PASS** | contractResultSqliteDurability + w3bTerminal TRUE RESTART |
| X-09 EC-version identity | **PASS** | contractResultEvaluation stale fingerprint |
| X-10 Server ownership | **PASS** | hostile client; provenance server-owned |
| X-11 Canonical /studio | **PASS** | w3bTerminal full W2→W3-A→materialize integration |
| X-12 No parallel architecture | **PASS** | grep + design review |

---

## Fake / Real qualification

TestExecutionAdapter simulates external executor only (success/fail/cancel ACK). Does NOT mint Product SUCCESS, CE pass, stop provenance, or guard facts. Proof ceiling: **DETERMINISTIC PRODUCT-NATIVE PROVEN** — not REAL BOUNDARY PROVEN.

---

## Debt / reserves

1. Playwright E2E + runtime captures under `.tmp-sfia-review/runtime-captures/w3-b/` not executed this cycle.
2. Contract Result review policy = minimal bounded Delivery shape; Morris may refine at W3-B closure.
3. US-P1-07 Nora post-Evidence remains downstream.

---

## State declarations

- **C6**: CLOSED (consumed)
- **W3**: IN PROGRESS
- **W3-B**: NOT CLOSED — delivery candidate only
- **W3-C/D/E**: NOT STARTED
- **REAL**: OUT
- **FinOps/T7**: FREEZE
- **W4**: OUT
- **runtime v3**: NON ADOPTED

---

## Verdict

**READY FOR REVIEW**

W3-B DELIVERY RESTART CANDIDATE — US-P1-05/06 ONLY — CLEAN MAIN-BASED IMPLEMENTATION — TD-W3B-01…04 IMPLEMENTED — PRE-DOC12 WORKTREE PRESERVED AS READ-ONLY HARVEST — HEURISTIC FC-11 / SYNTHETIC STOP NOT RETAINED AS PRODUCT TRUTH — CANONICAL /studio — X-W3B-01…12 DETERMINISTIC PRODUCT-NATIVE PROVEN (UNIT/INTEGRATION) — C6 CLOSED — NO US-P1-07/09/FULL-CKC EXPANSION — REAL OUT — FINOPS FREEZE — W4 OUT — RUNTIME V3 NON ADOPTED — LOCAL PROJECT COMMIT ONLY — NO PUSH/PR/MERGE — AWAITING CHATGPT REVIEW.

**Next gate**: ChatGPT review → Morris Git integration decision if PASS.
