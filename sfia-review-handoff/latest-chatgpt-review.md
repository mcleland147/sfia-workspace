# Cycle 9 Critical — T7 SHADOW Pilot Activation Readiness — Review Pack (full)

## 1. Date / time
- CEST: 2026-08-09 06:51:47 CEST
- UTC: 2026-08-09 04:51:47 UTC

## 2. Décision Morris exacte
GO PRESERVE T7 SEQUENCE —
POLICY VALUES DEFERRED UNTIL POST-SHADOW CALIBRATION —
NEXT SUBJECT SHADOW ACTIVATION READINESS.

## 3. Cycle / profil + justification Critical
- Cycle: 9 — QA / validation
- Profil: Critical (EXPLICIT)
- Justification: last technical gate before durable pilot rollout mutation; execution-run/provider path impact; fail-open / never-block / rollback OFF / activation mechanism / SHADOW evidence must be proven; no real activation authorized in this cycle.
- Blocs: FinOps + Observability/RUN readiness (bounded).

## 4. Git Truth
- branch: main
- HEAD = origin/main = `bb52624e4de6aa19a7d68205af053596bf599a1a`
- tracked clean; staged none; untracked `.tmp-sfia-review/**` only

## 5. Handoff entrant tip / blob
- tip: `eb6250ee26a39330a760f22acc993383e65aee69`
- blob: `3a6f6b3cffa9512e2e8cc4405bfee50ed2670586`
- cycle: Cycle 1 Standard — Policy Values Calibration
- confirmed: PRESERVE SELECTED SEQUENCE recommended; VALUES NOT SELECTED; SHADOW NOT ACTIVATED; EMPTY/INERT; REAL-AMOUNT INSUFFICIENT
- Morris decision in this prompt validates PRESERVE SELECTED SEQUENCE as DECISION VALIDATED BY MORRIS (status upgrade only for that recommendation)

## 6. Sources consultées
- SFIA templates/core/checklists/delivery-qa-standard/CKC pilots/04-qa-validation.md
- docs 156 / 157 / 158 / 159
- types.rollout.ts · resolveFinOpsRollout.ts · postgresFinOpsRolloutStore.ts
- composeFinOpsT7Runtime.ts · composeFinOpsT7ShadowExecutionDeps.ts · versionedFinOpsT7ShadowPolicySource.ts
- composeExecutionRunD2D3T7ShadowPilot.ts · coordinateExecutionRun.ts
- migration `1754600004000_finops-t7-rollout-config.js`
- T7 unit + PostgreSQL suites
- handoff Cycle 1 calibration (full)

## 7. PRESERVE SEQUENCE actée
PRESERVE SELECTED SEQUENCE = DECISION VALIDATED BY MORRIS
POLICY VALUES remain NOT SELECTED / deferred until post-SHADOW calibration.
Real calibration remains REQUIRED BEFORE MONITOR, NOT BEFORE SHADOW.

## 8. AR01–AR15
| ID | Statement | Status | Evidence |
|----|-----------|--------|----------|
| AR01 | T7 rollout persistence ON MAIN | PASS | migration `1754600004000…` + `postgresFinOpsRolloutStore` + T7-PG* PASS |
| AR02 | missing row → OFF | PASS | resolveFinOpsRollout default_off; T7-U01 / T7-PG01 / T7-SW02 PASS |
| AR03 | SHADOW = evaluateT4 true / signal_only / blockingAllowed false | PASS | resolveFinOpsRollout SHADOW case; T7-U04 PASS |
| AR04 | pilot identity = sfia-studio-ops1 | PASS | `T7_SHADOW_PILOT_PROJECT_ID`; T7-SW15 / T7-SW15 unit PASS |
| AR05 | execution-run SHADOW wiring ON MAIN | PASS | composeExecutionRunD2D3T7ShadowPilot + T7-SW* / T7-C* PASS |
| AR06 | never-block defense ON MAIN | PASS | ensureShadowNeverBlocks; T7-SW06 / SW05 / SW10 PASS |
| AR07 | fail-open / provider continuity | PASS | T7-SW03 / SW11 / SW12 / U02 PASS |
| AR08 | Option C PRE∧POST SHADOW | PASS | T7-C02 PASS (doc 158 ON MAIN) |
| AR09 | OFF→SHADOW no retroactive capture | PASS | T7-C03 PASS |
| AR10 | SHADOW→OFF immediate observational rollback | PASS | T7-C04 PASS |
| AR11 | Option A policy source ON MAIN | PASS | versionedFinOpsT7ShadowPolicySource.ts + doc 159 |
| AR12 | Option A EMPTY / INERT | PASS | Object.freeze({}); PS-U01..U05 + T7-PS01 PASS |
| AR13 | empty policy compatible with technical SHADOW | PASS | T7-PS01 / T7-SW10 allow/not_configured + provider continues |
| AR14 | T3 sync NOT REQUIRED before SHADOW | PASS | T7-U04 T3 not required for SHADOW; reserve R-T4-T3-SYNC-01 remains BEFORE MONITOR |
| AR15 | real calibration NOT REQUIRED before SHADOW | PASS | D-T7-CALIBRATION-PILOT-01 + Morris PRESERVE SEQUENCE decision |

## 9. Activation mechanism discovery
ACTIVATION_MECHANISM = **INFRASTRUCTURE_ONLY**

Findings:
- Port method `upsertProjectRollout` exists on `finopsRolloutPort` / `postgresFinOpsRolloutStore`.
- `composeFinOpsT7Runtime` explicitly: *Does not expose upsertProjectRollout as a product API.*
- Runtime composition exposes read-only `resolveProjectRollout` only.
- All call sites of upsert outside the store definition are **tests** (T7-PG*, foundation runtime, wiring).
- No CLI, admin route, server action, operator script, seed, or bounded activation command found for OFF↔SHADOW.
- Persistence method existence ≠ operational activation mechanism.

Intermediate verdict: **ACTIVATION MECHANISM NOT OPERATIONALIZED.**

## 10. upsertProjectRollout usages found
- Definition: `postgresFinOpsRolloutStore.ts`
- Port: `finopsRolloutPort.ts`
- Anti-exposure comment: `composeFinOpsT7Runtime.ts`
- Callers: tests only (`t7.rollout.integration`, `t7.foundation-runtime.integration`, `t7.shadow-option-a.wiring.integration`, unit fakes)
- Product/admin/CLI callers: **0**

## 11. Environment inventory
- Local/ephemeral Postgres used by CI-A / this rehearsal (`127.0.0.1` docker) — NOT Neon.
- Repo explicitly distinguishes local CI ephemeral DB from Neon/production.
- Studio README marks MVP/production as closed / requiring distinct Morris GOs.
- No FinOps SHADOW-specific staging/preview/production target selected in repo for `sfia-studio-ops1`.

## 12. Activation target classification
ACTIVATION_TARGET = **NOT_DEFINED** (for SHADOW pilot activation decision).
Local ephemeral = rehearsal-only candidate, not an activation target.
No environment selected by Cursor on behalf of Morris.

## 13. Rehearsal R01–R15 (existing tests only)
| R | Requirement | Mapping | Result |
|---|-------------|---------|--------|
| R01 | absent → OFF | T7-U01 / PG01 / SW02 / R01 | PASS |
| R02 | local upsert SHADOW → resolve SHADOW | T7-PG03 / R13 / SW04 | PASS (test-only upsert) |
| R03 | SHADOW + empty Option A → allow/not_configured | T7-PS01 / SW10 | PASS |
| R04 | provider still invoked | SW05 / SW04 / SW10–SW12 | PASS |
| R05 | no BLOCK | SW05 / SW06 / never-block | PASS |
| R06 | capture when PRE+POST SHADOW | T7-C02 / SW13 | PASS |
| R07 | non-pilot inert | SW07 / SW14 / C05 | PASS |
| R08 | OFF→SHADOW mid-provider no retro capture | T7-C03 | PASS |
| R09 | SHADOW→OFF mid-provider no post capture | T7-C04 | PASS |
| R10 | explicit OFF rollback subsequent inert | SW01 / SW14 / C01 after OFF | PASS |
| R11 | revision monotonic | T7-PG04 / PG11 / PG12 | PASS |
| R12 | resolver/store failure fail-open | T7-U02 / SW03 | PASS |
| R13 | hostile policy cannot BLOCK in SHADOW | SW05 / SW06 | PASS |
| R14 | MONITOR/E1 outside rehearsal activation | SW08 / SW09 / U05 / U06 | PASS (rows resolve but adapter inert) |
| R15 | no policy values needed | PS-U* / PS01 / U10 / R12 | PASS |

## 14. PostgreSQL ephemeral proof + cleanup
- Container: `sfia-t7-ar-pg` on `127.0.0.1:55445` (local-only, non-prod credentials).
- Migrations up through T7 rollout complete.
- Container removed after tests: `docker rm -f sfia-t7-ar-pg`.
- No Neon / shared staging / production access.

## 15. Tests exacts et résultats
- Unit: `t7.rollout.unit` + `t7.shadow-option-a.unit` + `t7.shadow-policy-source-option-a.unit` → **21/21 PASS**
- PG: `t7.rollout.integration` + `t7.foundation-runtime.integration` + `t7.shadow-option-a.wiring.integration` → **51/51 PASS**
- Total targeted Critical suites: **72/72 PASS**

## 16. Typecheck / lint / build / regression
- typecheck PASS
- lint PASS
- build PASS
- `git diff --check` PASS
- Full npm regression: NOT re-run (Critical scope covered by T7 targeted suites + typecheck/lint/build; prior Cycle 9 Dedicated QA already validated full suite on identical Option A bytes; no project mutation this cycle).

## 17. Rollback readiness
SHADOW → OFF semantics READY at runtime/store level:
- project-scoped upsert mode OFF
- revision increments (auditable)
- Option C prevents post-provider capture when POST=OFF (T7-C04)
- no financial ledger deletion / no migration down required
- process restart not required if runtime re-reads rollout each execution

Future stop conditions recommending OFF after a real activation:
- FinOps-attributable runtime error impacting provider continuity
- capture path anomaly / unexpected project scope
- incorrect rollout resolution
- evidence contamination
- any unanticipated BLOCK
- inability to determine current rollout state

Real shared-environment rollback NOT executed in this cycle.

## 18. Evidence plan E01–E14 (post future activation)
| E | What | Source candidate | Expected |
|---|------|------------------|----------|
| E01 | mode SHADOW for sfia-studio-ops1 | finops_rollout_config read | mode=SHADOW |
| E02 | revision known | same table revision | monotonic int ≥1 |
| E03 | non-pilot unaffected | other project_id rows / absence | OFF/default_off |
| E04 | provider continues | execution logs / provider stubs in QA | calls occur |
| E05 | 0 FinOps BLOCK | enforcement decisions / never-block | no block |
| E06 | empty source → allow/not_configured | decision reason | not_configured |
| E07 | capture/cost when applicable | finops_usage_event / audit | created/duplicate when PRE∧POST SHADOW |
| E08 | projection freshness | finops_enforcement_projection.rebuilt_at | observable after T2 refresh |
| E09 | FinOps fail-open | failed decisions / provider continue | no provider halt |
| E10 | Option C transitions | PRE/POST eligibility behavior | C03/C04 semantics |
| E11 | multi-currency isolation | projection keys currency | no FX aggregation |
| E12 | rollback OFF demonstrated | mode OFF + subsequent inert run | PASS |
| E13 | diagnostic provenance | decision provenance fields / audit payload | sufficient for incident |
| E14 | no silent policy values | versioned source still empty | EMPTY |

No new quantitative acceptance metrics invented.

## 19. Observability assessment
OBSERVABILITY = **PARTIAL**

- Durable existing: rollout row (mode/revision), usage/cost ledger, audit capture events, enforcement projection.
- Transient internal: soft_signal (internal-only, non-durable) — not expected while policy empty.
- Test-only: upsert rehearsal paths.
- Absent: operator activation audit trail (no operational mechanism yet); product SHADOW dashboard/metrics.

Sufficient to prove technical SHADOW gating/capture/continuity/rollback once an activation mechanism + target exist.
Not a blocking gap for runtime correctness, but activation cannot proceed without mechanism/target decisions.

## 20. Reserves
- R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
- R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
- R-PR-T2-API-01 = OPEN MINOR (si toujours applicable)
- REAL CALIBRATION = DEFERRED UNTIL POST-SHADOW / REQUIRED BEFORE MONITOR
- POLICY VALUES = NOT SELECTED
- T6-ext = NOT AUTHORIZED
- Product IAM = NOT_SELECTED
- T5 = OUT OF SCOPE SHADOW
- MONITOR = NOT ACTIVATED
- E1 = NOT AUTHORIZED

## 21. Policy source status
OPTION A ON MAIN — EMPTY / INERT

## 22. Policy values status
NOT SELECTED

## 23. SHADOW status
NOT ACTIVATED

## 24. Project mutation
NO — no project source/test/doc create/modify; no shared DB activation; no commit/push/PR/merge.

## 25. Readiness summary
- RUNTIME READINESS = PASS
- ACTIVATION MECHANISM READINESS = FAIL (NOT OPERATIONALIZED)
- TARGET ENVIRONMENT READINESS = NOT_DEFINED / NOT SELECTED
- ROLLBACK READINESS = PASS (semantics)
- OBSERVABILITY READINESS = PARTIAL (non-blocking for mechanism decision)
- OVERALL SHADOW ACTIVATION READINESS = **BLOCKED**

## 26. Recommendation
Do NOT request GO SHADOW ACTIVATION yet.

Prefer minimal mechanism without product UI/API debt:
**bounded audited server operator command/script** that:
- accepts projectId=`sfia-studio-ops1` only (or strict allow-list)
- accepts mode ∈ {SHADOW, OFF} only for this gate
- uses existing `createPostgresFinOpsRolloutStore(pool).upsertProjectRollout`
- requires explicit target DB URL local/non-prod or later Morris-selected target
- prints before/after mode+revision
- is reversible via same command mode=OFF
- is NOT exposed as public product API / UI

Challenge answer:
- UI? NO (not required)
- Product API? NO (not required)
- New platform tool? NO if a minimal server operator command suffices
- Minimal operator server command? YES — recommended

## 27. Exact next Morris gate
```text
GO MINIMAL SHADOW ACTIVATION MECHANISM —
BOUNDED SERVER OPERATOR COMMAND —
PILOT sfia-studio-ops1 ONLY —
MODES OFF|SHADOW ONLY —
NO PRODUCT UI/API —
NO POLICY VALUES —
SHADOW REMAINS NOT ACTIVATED UNTIL DISTINCT GO.
```

After that Delivery + QA, separately decide:
GO SHADOW ACTIVATION TARGET — <OPTIONS>
then only later:
GO SHADOW ACTIVATION — …

## 28. Unique verdict
T7 SHADOW PILOT ACTIVATION READINESS BLOCKED —
CYCLE 9 CRITICAL —
RUNTIME PREREQUISITES PASS —
REHEARSAL PASS —
SHADOW NEVER-BLOCK VERIFIED —
ROLLBACK SEMANTICS VERIFIED —
ACTIVATION MECHANISM NOT OPERATIONALIZED —
ACTIVATION TARGET NOT DEFINED —
OBSERVABILITY PARTIAL —
POLICY VALUES NOT SELECTED —
SHADOW NOT ACTIVATED —
MINIMAL ACTIVATION MECHANISM DECISION REQUIRED —
NO PROJECT MUTATION —
HANDOFF REMOTE VERIFIED
