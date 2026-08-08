# Cycle 9 Critical — T7 SHADOW Temporal Dual-Gate Dedicated QA — Review Pack (full)

## 1. Date / heure

- **CEST:** 2026-08-08 22:20:00 CEST
- **UTC:** 2026-08-08 20:20:00 UTC

## 2. Décision Morris (exacte)

> GO Cycle 9 Dedicated Temporal Dual-Gate QA — Critical.

## 3. Cycle / profil / justification

- **Cycle:** 9 — QA / validation
- **Profil:** Critical
- **Nature:** QA indépendante post-Delivery (read-only subject)
- **CKC:** `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` (candidate 0.1.0 — experimental cognitive guidance; no execution authority)
- **Justification Critical:** Delivery touche FinOps enforcement decision contract, coordinator execution path, capture eligibility PRE↔POST, mode flips, fail-open. Erreur possible: capture rétroactive, rollback observationnel cassé, legacy break, cross-run contamination, provider path indirect.

## 4. Git Truth

- **Repository:** mcleland147/sfia-workspace
- **origin/main:** `fd06f4aa1a19e629e0330473e43b1cf3b935014f`
- **Delivery branch:** `delivery/sfia-studio-finops-t7-shadow-temporal-dual-gate` (local, not pushed)
- **Delivery HEAD:** `fd06f4aa1a19e629e0330473e43b1cf3b935014f` (uncommitted subject atop main)
- **Worktree:** `…/worktrees/finops-t7-shadow-temporal-dual-gate`
- **Project commit Delivery:** none
- **Staged:** none

## 5. Handoff entrant

- **Branch:** `sfia/review-handoff`
- **Path:** `sfia-review-handoff/latest-chatgpt-review.md`
- **Tip:** `f1fce02c6590a727b1f92d47c161f705b6a70ca2`
- **Blob:** `da4d37689aea33500844603fcd054286a9e5b345`
- **Cycle entrant:** Cycle 8 Critical — T7 SHADOW Temporal Dual-Gate Delivery
- **Markers verified:** Option C Morris-selected · base fd06f4aa · 6 paths · no project commit/push/PR · full regression PASS · temporal reserve addressed locally/pending QA · policy NOT SELECTED · SHADOW NOT ACTIVATED

## 6. Sources

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`
- Handoff Cycle 8 (above)
- Subject 6 paths + read-only ports/composers

## 7. Exact 6-path subject

| Status | Path |
|--------|------|
| M | `projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts` |
| M | `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts` |
| M | `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts` |
| M | `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts` |
| M | `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts` |
| A | `projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md` |

Untracked non-subject: `.tmp-sfia-review/**` only.

## 8. PRE-QA file hashes

PRE_QA_SHA256_1 types.enforcement.ts
890143179f0f48c80cae562ed9fad785b70967f3780cde61ca0abe49afa8562a  projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
PRE_QA_SHA256_2 coordinateExecutionRun.ts
d29d65ad51fa2f1784fff36983f9eb98d29d39f6835feafc0d388bbd52ea6c48  projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
PRE_QA_SHA256_3 composeFinOpsT7ShadowExecutionDeps.ts
47251e9eda3cb0765a214080f9f48fbb8315d7ba90c2aa9375045c4f092e3e24  projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
PRE_QA_SHA256_4 t7.shadow-option-a.unit.test.ts
16fc58ade6cf0483c2bbef43c7e3a9c213cfee14b624ebbcc7454ea773a8e83a  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
PRE_QA_SHA256_5 t7.shadow-option-a.wiring.integration.test.ts
ca17838c68f7891315b10c85aeb7f5915da67720dc7495d1551a65318ed9603a  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
PRE_QA_SHA256_6 158-...dual-gate-execution.md
8f44f34c15a378565b43c6084af44832a85bde9cc7f0178cc60623910f1b19ee  projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md

## 9. PRE-QA diff hash

PRE_QA_DIFF_SHA256=981a2c5e70626f536c1b9055e5f48bd22a1653c193d10b4d355111672e852737
PRE_QA_158_BLOB=362ac968d159ebe00cff9e3837f31f7ece6d3cd3

## 10. Comparison to Delivery handoff

Normalized patch compare (local vs Cycle 8 handoff §17 / §18):

types: MATCH local_bytes=1519 handoff_bytes=1517
coord: MATCH local_bytes=3055 handoff_bytes=3052
adapter: MATCH local_bytes=4950 handoff_bytes=4943
unit: MATCH local_bytes=2410 handoff_bytes=2409
wiring: MATCH local_bytes=15285 handoff_bytes=15283

**Result:** all five tracked diffs MATCH; 158 body MATCH.
**Verdict:** LOCAL SUBJECT = DELIVERY HANDOFF (PASS).

## 11. Static contract review

Independent code inspection confirms:

| # | Claim | Evidence |
|---|-------|----------|
| A | `FinOpsCaptureEligibility = "eligible" \| "ineligible"` | `types.enforcement.ts` |
| B | `captureEligibility` OPTIONAL | `?:` on `FinOpsEnforcementDecision` |
| C | undefined NOT normalized to ineligible | coordinator gate only `=== "ineligible"` |
| D | coordinator variable call-local | `let captureEligibility` inside `coordinateExecutionRun` |
| E | no module-level temporal state | static scan — no Map/Set/ALS |
| F | PRE eligible only after pilot + SHADOW | adapter sets eligible after mode===SHADOW |
| G | policy null/throw does not cancel eligibility | C05 + adapter comment/code |
| H | POST re-reads rollout | `captureUsage` → `resolveProjectRollout` |
| I | PRE gate never blocks provider | gate only in `captureFinOpsAfterAiSuccess` |
| J | POST/capture failure fail-open | adapter returns disabled/failed; coordinator fail-open preserved |

### Key coordinator PRE-gate excerpt

```ts
if (args.captureEligibility === "ineligible") {
  return {
    status: "disabled",
    reason: "finops_pre_provider_capture_ineligible",
  };
}
```

### Key adapter PRE eligibility excerpt

```ts
// PRE_WAS_SHADOW proven — eligibility is mode-based, not policy-based.
captureEligibility = "eligible";
```

### Key POST gate excerpt

```ts
instruction = await t7.resolveProjectRollout(projectId);
if (instruction.mode !== "SHADOW") {
  return { status: "disabled", reason: "shadow_capture_inactive" };
}
```

## 12. No-cache proof

=== NO-CACHE on 3 runtime files ===
-- projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
(no matches)
-- projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
(no matches)
-- projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
(no matches)

=== NO-CACHE on NEW DIFF only ===
13:+   * Local to this coordinateExecutionRun call only — no registry/cache.
39:+  // (no Map/registry/cache). Undefined ⇒ legacy capture behavior.

=== STATIC CONTRACT KEY HITS ===
projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts:39:export type FinOpsEnforcementEffect = "signal_only" | "enforce";
projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts:80: * Transient T7 SHADOW Option C dual-gate hint (PRE_WAS_SHADOW).
projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts:89:export type FinOpsCaptureEligibility = "eligible" | "ineligible";
projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts:101:  readonly captureEligibility?: FinOpsCaptureEligibility;
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:257:  readonly captureEligibility?: "eligible" | "ineligible";
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:268:  // Option C PRE gate: captureEligibility === "ineligible" prevents capture port call.
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:270:  if (args.captureEligibility === "ineligible") {
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:273:      reason: "finops_pre_provider_capture_ineligible",
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:1071:  // Option C: optional captureEligibility is kept in this call-local variable only
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:1073:  let captureEligibility: FinOpsEnforcementDecision["captureEligibility"];
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:1091:    captureEligibility = enforcementDecision.captureEligibility;
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:1211:  // Option C: pass call-local PRE captureEligibility (undefined = legacy).
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts:1218:    captureEligibility,
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:6: * - Forces effect=signal_only for SHADOW.
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:35: * Effect is intentionally omitted — the adapter always forces signal_only.
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:95:  captureEligibility: FinOpsEnforcementDecision["captureEligibility"],
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:100:    ...(captureEligibility ? { captureEligibility } : {}),
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:106:  captureEligibility: FinOpsEnforcementDecision["captureEligibility"],
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:112:    ...(captureEligibility ? { captureEligibility } : {}),
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:119: * Preserves optional transient captureEligibility (Option C PRE latch).
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:121:export function ensureShadowNeverBlocks(
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:125:    return failed("shadow_block_forbidden", decision.captureEligibility);
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:164:      // Option C: PRE_WAS_SHADOW only after pilot + resolved SHADOW mode.
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:166:      let captureEligibility: FinOpsEnforcementDecision["captureEligibility"] =
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:215:        // PRE_WAS_SHADOW proven — eligibility is mode-based, not policy-based.
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:216:        captureEligibility = "eligible";
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:232:              effect: "signal_only",
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:238:        const decision = ensureShadowNeverBlocks({
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:240:          captureEligibility,
projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts:253:        const decision = failed("shadow_adapter_failed", captureEligibility);

**Verdict:** NO PROCESS-LOCAL TEMPORAL CACHE — PASS.

## 13. Temporal matrix evidence

| ID | Scenario | Diagnostic / DB | Result |
|----|----------|-----------------|--------|
| T7-C01 | OFF→OFF | `finops_pre_provider_capture_ineligible` · no DB event | PASS |
| T7-C02 | SHADOW→SHADOW | capture status created/duplicate · DB event `corr:t7sw:c02` present | PASS |
| T7-C03 | OFF→SHADOW mid-provider | PRE short-circuit · POST mode SHADOW · no DB event | PASS |
| T7-C04 | SHADOW→OFF mid-provider | PRE eligible · POST `shadow_capture_inactive` · no DB event | PASS |

Wiring suite re-run: **22/22 PASS**.

## 14. PRE eligibility evidence

T7-C05 matrix + unit never-block preserve eligibility:

- non-pilot → ineligible
- OFF → ineligible
- MONITOR → ineligible
- E1_ENFORCED → ineligible
- SHADOW + policy null → eligible
- SHADOW + policy throw → decision failed + eligible
- hostile block → failed/`shadow_block_forbidden` + eligible preserved (T7-C-U01)

**Verdict:** PRE ELIGIBILITY SEMANTICS — PASS.

## 15. Legacy evidence

- **T7-C06:** generic enforcement `{ decision: "allow", reason }` without `captureEligibility` → captureCalled=1, status created — PASS
- **T7-C07:** no `finopsEnforcement`, capture only → historical capture — PASS
- Structural: `undefined` not treated as ineligible

**Verdict:** LEGACY CAPTURE COMPATIBILITY — PASS.

## 16. Concurrency evidence + limite

**P1 dynamic (T7-C08):** Promise.all A (pilot SHADOW→OFF) + B (non-pilot).
A → `shadow_capture_inactive`; B → `finops_pre_provider_capture_ineligible`; no DB events for c08a/c08b.

**P2 structural:** `let captureEligibility` is function-scoped inside `coordinateExecutionRun` — each invocation has an independent binding. No shared registry.

**Scenario limit:** Run B uses non-pilot rather than a second pilot OFF path.
**Classification:** `R-QA-T7-C08-SCENARIO-01` = **MINOR** — does not undermine structural isolation (P2) nor observed non-contamination (P1).

**Concurrency verdict:** PASS (with minor scenario-limit reserve).

## 17. Failure semantics

| Path | Evidence | Result |
|------|----------|--------|
| PRE OFF / default | SW01/SW02/C01 · provider continues | PASS |
| SHADOW + policy throw | C05 · failed + eligible · provider continues in wiring | PASS |
| hostile block | unit C-U01 + SW06 · never provider block from T7 adapter | PASS |
| provider failure / timeout / cancel | existing coordinator `not_attempted` preserved; related suites PASS | PASS |
| POST rollout non-SHADOW / failure | C04 + adapter inert reasons | PASS |
| capture failure | adapter returns failed FinOps diagnostic; provider success preserved (fail-open) | PASS |

## 18. Never-block proof

- `ensureShadowNeverBlocks` converts `block` → `failed` / `shadow_block_forbidden`
- T7 adapter does not surface BLOCK to create HUMAN_GATE_REQUIRED
- Generic coordinator may still honor block from *other* ports — not introduced by Option C T7 path

**Verdict:** SHADOW NEVER BLOCK — PASS.

## 19. signal_only proof

- Adapter forces `effect: "signal_only"` in policy mapping
- Unit SW16 asserts `effect: "signal_only"` present and no `effect: "enforce"` activation API in pilot composer

**Verdict:** SIGNAL_ONLY — PASS.

## 20. Rollback proof (SHADOW→OFF)

T7-C04 + DB absence of `corr:t7sw:c04`.

**IMMEDIATE OBSERVATIONAL ROLLBACK = PASS**

## 21. Retroactive activation proof (OFF→SHADOW)

T7-C03 + POST mode SHADOW + PRE short-circuit + DB absence of `corr:t7sw:c03`.

**NO RETROACTIVE SHADOW CAPTURE = PASS**

## 22. PG environment / migrations / cleanup

ENV_TYPE=docker_ephemeral_postgres
HOST_CLASS=loopback:127.0.0.1
PORT=55441
DB_NAME=sfia_studio_finops_t1
USER=sfia_ci
NEON=no
SHARED_REMOTE=no
IMAGE=postgres:16-alpine
CONTAINER=finops-t7-temporal-dual-gate-qa-pg
LIFECYCLE=docker_run_dedicated_named_container
PROVENANCE=SAFE_EPHEMERAL
PASSWORD_OR_URL_IN_THIS_FILE=no

Migrations: complete (T1…T7 rollout) — see migrate-up.txt
Cleanup:
cleanup=0

## 23. DB no-event proofs

SOURCE=psql query after wiring suite on ephemeral QA PG (port 55441)
QUERY=SELECT correlation_id, project_id, usage_status FROM finops_usage_event WHERE correlation_id LIKE 'corr:t7sw:%'

OBSERVED_EVENTS:
 corr:t7sw:c02  | sfia-studio-ops1 | validated
 corr:t7sw:sw05 | sfia-studio-ops1 | validated
 corr:t7sw:sw10 | sfia-studio-ops1 | validated
 corr:t7sw:sw11 | sfia-studio-ops1 | validated
 corr:t7sw:sw12 | sfia-studio-ops1 | validated
 corr:t7sw:sw13 | sfia-studio-ops1 | validated

NO_EVENT_PROOF:
 corr:t7sw:c01 = ABSENT  (OFF→OFF)
 corr:t7sw:c03 = ABSENT  (OFF→SHADOW mid-provider)
 corr:t7sw:c04 = ABSENT  (SHADOW→OFF mid-provider)
 corr:t7sw:c08a = ABSENT (concurrency A POST OFF)
 corr:t7sw:c08b = ABSENT (concurrency B ineligible)

CAPTURE_PATH:
 corr:t7sw:c02 = PRESENT (SHADOW→SHADOW)

VERDICT=DB_NO_EVENT_AND_SHADOW_SHADOW_CAPTURE_PASS

## 24. Targeted suites

| Suite | Result |
|-------|--------|
| `t7.shadow-option-a.unit.test.ts` | PASS 6/6 (~2ms) |
| `t7.shadow-option-a.wiring.integration.test.ts` | PASS 22/22 (~199ms) |
| OA/OPS1 isolation + antiLegacy (doctrine, execution-contract) | PASS 12/12 |
| `t4.enforcement-boundary.unit.test.ts` | PASS 15 |
| `t1.coordinator.failopen.test.ts` | PASS 5 |
| `d2d3.coordination.fixture.test.ts` | PASS 5 |
| `d2d3.negative.resilience.test.ts` | PASS 16 |
| Related subtotal | PASS 41/41 |

## 25. QA-G2

**PASS** — Option C temporal matrix, PRE eligibility, legacy, concurrency, never-block/signal_only/static no-cache are covered by Delivery tests re-executed independently.

## 26. Typecheck

**PASS** (`tsc --noEmit`)

## 27. Lint

**PASS** (`next lint` — no warnings/errors)

## 28. Build

**PASS** (`next build`)

## 29. Full regression

**PASS** — `npm test`: **159** files / **1616** tests / 0 failures.
`DATABASE_URL` = ephemeral QA Postgres 55441.

## 30. Diff-check

**PASS** — `git diff --check` exit 0.

## 31. Document 158 review

Read complete. Claims verified:

- Option C Morris exact decision present
- Dual-gate PRE_WAS_SHADOW ∧ POST_IS_SHADOW
- Runtime local TRUE; closed on main FALSE
- SHADOW activated FALSE; policy selected FALSE
- NO CACHE / NO MIGRATION
- Tests table consistent with Delivery-era results (QA reconfirmed)
- Next = Cycle 9 dedicated QA (this cycle) / no commit-push-PR

**No overclaims** (no PRODUCTION READY / CLOSED ON MAIN / SHADOW ACTIVE).
**DOC CLAIM = PASS** (Delivery document correctly still says pending dedicated QA; this QA cycle updates reserve status in the review pack, not by mutating 158).

## 32. Reserve classification

| Item | Class |
|------|-------|
| R-QA-T7-C08-SCENARIO-01 (concurrency B uses non-pilot) | **MINOR** |
| SHADOW PILOT POLICY SOURCE | NOT SELECTED (preexisting) |
| R-T4-T3-SYNC-01 | OPEN BEFORE MONITOR |
| R-PR-T2-API-01 | OPEN MINOR |
| Calibration réelle | REQUIRED BEFORE MONITOR |
| T6-ext / Product IAM / T5 | NOT AUTHORIZED / NOT_SELECTED / OUT OF SCOPE |
| SHADOW / MONITOR / E1 | NOT ACTIVATED / NOT ACTIVATED / NOT AUTHORIZED |
| Subject-related defects | **NONE** |

## 33. POST-QA file hashes

POST_QA_SHA256_1 types.enforcement.ts
890143179f0f48c80cae562ed9fad785b70967f3780cde61ca0abe49afa8562a  projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
POST_QA_SHA256_2 coordinateExecutionRun.ts
d29d65ad51fa2f1784fff36983f9eb98d29d39f6835feafc0d388bbd52ea6c48  projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
POST_QA_SHA256_3 composeFinOpsT7ShadowExecutionDeps.ts
47251e9eda3cb0765a214080f9f48fbb8315d7ba90c2aa9375045c4f092e3e24  projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
POST_QA_SHA256_4 t7.shadow-option-a.unit.test.ts
16fc58ade6cf0483c2bbef43c7e3a9c213cfee14b624ebbcc7454ea773a8e83a  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
POST_QA_SHA256_5 t7.shadow-option-a.wiring.integration.test.ts
ca17838c68f7891315b10c85aeb7f5915da67720dc7495d1551a65318ed9603a  projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
POST_QA_SHA256_6 158-...dual-gate-execution.md
8f44f34c15a378565b43c6084af44832a85bde9cc7f0178cc60623910f1b19ee  projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md

## 34. POST-QA diff hash

POST_QA_DIFF_SHA256=981a2c5e70626f536c1b9055e5f48bd22a1653c193d10b4d355111672e852737
POST_QA_158_BLOB=362ac968d159ebe00cff9e3837f31f7ece6d3cd3

## 35. Subject immutability proof

FILE_HASHES_IDENTICAL
DIFF_HASH_IDENTICAL

PRE_QA_DIFF_SHA256 = POST_QA_DIFF_SHA256 = `981a2c5e70626f536c1b9055e5f48bd22a1653c193d10b4d355111672e852737`
PRE_QA_158_BLOB = POST_QA_158_BLOB = `362ac968d159ebe00cff9e3837f31f7ece6d3cd3`

**Verdict:** QA DID NOT MUTATE DELIVERY SUBJECT — PASS.

## 36. Final git status

 M projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
 M projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
 M projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
 M projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
 M projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
?? projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md

M	projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
M	projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
M	projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
M	projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
M	projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts

cached:

## 37. Project mutation

**NO** (QA wrote only under `.tmp-sfia-review/**`)

## 38. Commit

**NO**

## 39. Project push

**NO**

## 40. PR

**NO**

## 41. SHADOW

**NOT ACTIVATED**

## 42. Policy

**NOT SELECTED**

## 43. Temporal reserve status

**TEMPORAL MODE DRIFT OFF→SHADOW = VALIDATED LOCALLY AS ADDRESSED BY OPTION C — NOT CLOSED ON MAIN**

## 44. QA-G3 proposed verdict

**PASS WITH RESERVES** — subject verified; only non-blocking concurrency scenario-limit reserve (MINOR). Ready for Morris review before PR readiness / local commit GO.

## 45. Next Morris gate

**GO LOCAL COMMIT + PR READINESS — T7 SHADOW Temporal Dual-Gate** (distinct decision).

Do NOT commit/push/open PR in this QA cycle.
Policy source and SHADOW activation remain separate decisions.

## 46. Unique verdict

```text
T7 SHADOW TEMPORAL DUAL-GATE DEDICATED QA PASS WITH RESERVES —
CYCLE 9 CRITICAL —
R-QA-T7-C08-SCENARIO-01 MINOR —
OPTION C SUBJECT BYTE-IDENTICAL TO DELIVERY INPUT —
PRE_WAS_SHADOW ∧ POST_IS_SHADOW VERIFIED —
OFF→SHADOW RETROACTIVE CAPTURE PREVENTED —
SHADOW→OFF IMMEDIATE OBSERVATIONAL ROLLBACK VERIFIED —
SHADOW→SHADOW CAPTURE PATH VERIFIED —
PRE ELIGIBILITY SEMANTICS VERIFIED —
LEGACY CAPTURE COMPATIBILITY VERIFIED —
NO CROSS-RUN TEMPORAL STATE VERIFIED —
NO PROCESS-LOCAL CACHE / REGISTRY VERIFIED —
FAIL-OPEN VERIFIED —
SHADOW NEVER BLOCK VERIFIED —
SIGNAL_ONLY VERIFIED —
OA→OPS1 ISOLATION VERIFIED —
NO MIGRATION / DURABLE STATE —
FULL REGRESSION PASS —
QA-G2 PASS —
QA-G3 PASS WITH RESERVES —
TEMPORAL MODE DRIFT VALIDATED LOCALLY AS ADDRESSED —
NOT CLOSED ON MAIN —
NO PROJECT MUTATION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
SHADOW PILOT POLICY SOURCE NOT SELECTED —
SHADOW NOT ACTIVATED —
READY FOR MORRIS REVIEW BEFORE PR READINESS —
HANDOFF REMOTE VERIFIED
```

---

## Appendix A — COMPLETE tracked diffs (Delivery subject)

### A.1 types.enforcement.ts

diff --git a/projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts b/projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
index 88f8c34..937c4da 100644
--- a/projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
+++ b/projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts
@@ -76,12 +76,29 @@ export type FinOpsEnforcementDecisionProvenance = {
   readonly rebuiltAt: string;
 };

+/**
+ * Transient T7 SHADOW Option C dual-gate hint (PRE_WAS_SHADOW).
+ *
+ * Anti-claims:
+ * - optional — absent means legacy capture behavior (no temporal gate)
+ * - internal only — not a public/product API
+ * - transient — lives only within one coordinateExecutionRun call stack
+ * - not persisted — not a durable event / DB column / audit SoT
+ * - does not enforce provider path — capture gate ≠ provider gate
+ */
+export type FinOpsCaptureEligibility = "eligible" | "ineligible";
+
 export type FinOpsEnforcementDecision = {
   readonly decision: FinOpsEnforcementDecisionKind;
   readonly reason: string;
   /** True when FinOps-side technical failure — never means BLOCK. */
   readonly finopsSideOnly?: true;
   readonly provenance?: FinOpsEnforcementDecisionProvenance;
+  /**
+   * Optional transient capture eligibility from PRE FinOps evaluation.
+   * Absent ⇒ preserve historical capture behavior for non-T7 / legacy ports.
+   */
+  readonly captureEligibility?: FinOpsCaptureEligibility;
 };

 export type EvaluateFinOpsEnforcementInput = {

### A.2 coordinateExecutionRun.ts

diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
index edc9dee..1fddb6c 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
@@ -248,6 +248,13 @@ async function captureFinOpsAfterAiSuccess(args: {
   readonly run: ExecutionRun;
   readonly usage: UsageSummary;
   readonly providerSucceeded: boolean;
+  /**
+   * Transient Option C PRE hint from evaluateBeforeProvider.
+   * - "ineligible" ⇒ short-circuit capture (no port call)
+   * - "eligible" | undefined ⇒ call capture port (POST gate / legacy)
+   * Local to this coordinateExecutionRun call only — no registry/cache.
+   */
+  readonly captureEligibility?: "eligible" | "ineligible";
 }): Promise<FinOpsCaptureDiagnostic> {
   if (args.run.intent.requestedLane !== "ai") {
     return finopsNotAttempted("non_ai_lane");
@@ -258,6 +265,14 @@ async function captureFinOpsAfterAiSuccess(args: {
   if (!args.deps.finops) {
     return finopsDisabled();
   }
+  // Option C PRE gate: captureEligibility === "ineligible" prevents capture port call.
+  // undefined preserves legacy FinOps compositions without temporal gate.
+  if (args.captureEligibility === "ineligible") {
+    return {
+      status: "disabled",
+      reason: "finops_pre_provider_capture_ineligible",
+    };
+  }
   try {
     return await args.deps.finops.captureUsage({
       projectId: args.run.context.projectId,
@@ -1053,6 +1068,9 @@ export async function coordinateExecutionRun(
   // T4 ENF-B: after create + pre-engagement, before intent_valid / provider.
   // Absent dependency ⇒ inert. allow/soft_signal/failed/throw ⇒ fail-open continue.
   // block ⇒ HUMAN_GATE_REQUIRED; provider never attempted/invoked.
+  // Option C: optional captureEligibility is kept in this call-local variable only
+  // (no Map/registry/cache). Undefined ⇒ legacy capture behavior.
+  let captureEligibility: FinOpsEnforcementDecision["captureEligibility"];
   if (deps.finopsEnforcement) {
     let enforcementDecision: FinOpsEnforcementDecision;
     try {
@@ -1070,6 +1088,8 @@ export async function coordinateExecutionRun(
       };
     }

+    captureEligibility = enforcementDecision.captureEligibility;
+
     if (enforcementDecision.decision === "block") {
       const enforcementFailure = normalizedFailure({
         family: "human_gate_required",
@@ -1188,12 +1208,14 @@ export async function coordinateExecutionRun(
   }

   // Fail-open FinOps capture: never convert provider success into user failure.
+  // Option C: pass call-local PRE captureEligibility (undefined = legacy).
   const runForCapture = terminal.result.run ?? current;
   const finopsCapture = await captureFinOpsAfterAiSuccess({
     deps,
     run: runForCapture,
     usage: terminal.usage,
     providerSucceeded,
+    captureEligibility,
   });

   if (!terminal.result.ok) {

### A.3 composeFinOpsT7ShadowExecutionDeps.ts

diff --git a/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts b/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
index 28df1e4..a4f3bb9 100644
--- a/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
+++ b/projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts
@@ -90,23 +90,39 @@ function assertServerOnly(): void {
   }
 }

-function allow(reason: string): FinOpsEnforcementDecision {
-  return { decision: "allow", reason };
+function allow(
+  reason: string,
+  captureEligibility: FinOpsEnforcementDecision["captureEligibility"],
+): FinOpsEnforcementDecision {
+  return {
+    decision: "allow",
+    reason,
+    ...(captureEligibility ? { captureEligibility } : {}),
+  };
 }

-function failed(reason: string): FinOpsEnforcementDecision {
-  return { decision: "failed", reason, finopsSideOnly: true };
+function failed(
+  reason: string,
+  captureEligibility: FinOpsEnforcementDecision["captureEligibility"],
+): FinOpsEnforcementDecision {
+  return {
+    decision: "failed",
+    reason,
+    finopsSideOnly: true,
+    ...(captureEligibility ? { captureEligibility } : {}),
+  };
 }

 /**
  * Defense-in-depth: SHADOW path must never surface `block` to the coordinator.
  * Exported for focused unit proof (T7-SW06).
+ * Preserves optional transient captureEligibility (Option C PRE latch).
  */
 export function ensureShadowNeverBlocks(
   decision: FinOpsEnforcementDecision,
 ): FinOpsEnforcementDecision {
   if (decision.decision === "block") {
-    return failed("shadow_block_forbidden");
+    return failed("shadow_block_forbidden", decision.captureEligibility);
   }
   return decision;
 }
@@ -145,13 +161,17 @@ export function composeFinOpsT7ShadowExecutionDeps(
   const finopsEnforcement: FinOpsEnforcementPort = {
     async evaluateBeforeProvider(evalInput) {
       let mode: FinOpsT7ShadowDecisionDiagnostic["mode"] = "unresolved";
+      // Option C: PRE_WAS_SHADOW only after pilot + resolved SHADOW mode.
+      // Policy success/failure does not affect temporal eligibility.
+      let captureEligibility: FinOpsEnforcementDecision["captureEligibility"] =
+        "ineligible";
       try {
         const projectId =
           typeof evalInput.projectId === "string"
             ? evalInput.projectId.trim()
             : "";
         if (!projectId || projectId !== pilotProjectId) {
-          const decision = allow("non_pilot_inert");
+          const decision = allow("non_pilot_inert", "ineligible");
           await emitShadowDecision(input.onShadowDecision, {
             projectId: projectId || "",
             mode: "OFF",
@@ -166,7 +186,7 @@ export function composeFinOpsT7ShadowExecutionDeps(
         try {
           instruction = await t7.resolveProjectRollout(projectId);
         } catch {
-          const decision = failed("rollout_resolve_failed");
+          const decision = failed("rollout_resolve_failed", "ineligible");
           await emitShadowDecision(input.onShadowDecision, {
             projectId,
             mode: "unresolved",
@@ -181,7 +201,7 @@ export function composeFinOpsT7ShadowExecutionDeps(

         if (instruction.mode !== "SHADOW") {
           // OFF / MONITOR / E1_ENFORCED / inert — this adapter does not activate them.
-          const decision = allow("rollout_not_shadow_inert");
+          const decision = allow("rollout_not_shadow_inert", "ineligible");
           await emitShadowDecision(input.onShadowDecision, {
             projectId,
             mode,
@@ -192,6 +212,9 @@ export function composeFinOpsT7ShadowExecutionDeps(
           return decision;
         }

+        // PRE_WAS_SHADOW proven — eligibility is mode-based, not policy-based.
+        captureEligibility = "eligible";
+
         const port = createFinOpsEnforcementPort({
           projection,
           resolvePolicy: async (policyInput) => {
@@ -211,9 +234,11 @@ export function composeFinOpsT7ShadowExecutionDeps(
           },
         });

-        const decision = ensureShadowNeverBlocks(
-          await port.evaluateBeforeProvider(evalInput),
-        );
+        const evaluated = await port.evaluateBeforeProvider(evalInput);
+        const decision = ensureShadowNeverBlocks({
+          ...evaluated,
+          captureEligibility,
+        });

         await emitShadowDecision(input.onShadowDecision, {
           projectId,
@@ -224,7 +249,8 @@ export function composeFinOpsT7ShadowExecutionDeps(
         });
         return decision;
       } catch {
-        const decision = failed("shadow_adapter_failed");
+        // If PRE SHADOW was already proven, keep eligibility across adapter failure.
+        const decision = failed("shadow_adapter_failed", captureEligibility);
         await emitShadowDecision(input.onShadowDecision, {
           projectId:
             typeof evalInput.projectId === "string"

### A.4 t7.shadow-option-a.unit.test.ts

diff --git a/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
index 009d464..25523e9 100644
--- a/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts
@@ -42,6 +42,17 @@ describe("T7 SHADOW Option A — unit", () => {
     ).toBe("failed");
   });

+  it("T7-C-U01 ensureShadowNeverBlocks preserves captureEligibility eligible", () => {
+    const out = ensureShadowNeverBlocks({
+      decision: "block",
+      reason: "threshold_crossed_enforce",
+      captureEligibility: "eligible",
+    });
+    expect(out.decision).toBe("failed");
+    expect(out.reason).toBe("shadow_block_forbidden");
+    expect(out.captureEligibility).toBe("eligible");
+  });
+
   it("T7-SW15 pilot constant equals OPS1_PROJECT_KEY sfia-studio-ops1", () => {
     expect(T7_SHADOW_PILOT_PROJECT_ID).toBe("sfia-studio-ops1");
     expect(T7_SHADOW_PILOT_PROJECT_ID).toBe(OPS1_PROJECT_KEY);
@@ -65,8 +76,29 @@ describe("T7 SHADOW Option A — unit", () => {
     expect(adapter).toMatch(/effect:\s*"signal_only"/);
     expect(adapter).toMatch(/shadow_block_forbidden/);
     expect(adapter).toMatch(/rollout_not_shadow_inert/);
+    expect(adapter).toMatch(/captureEligibility/);
+    expect(adapter).not.toMatch(/new Map\s*\(/);
+    expect(adapter).not.toMatch(/new Set\s*\(/);
+    expect(adapter).not.toMatch(/WeakMap/);
+    expect(adapter).not.toMatch(/AsyncLocalStorage/);
     expect(pilot).not.toMatch(/E1_ENFORCED/);
     expect(pilot).not.toMatch(/effect:\s*"enforce"/);
     expect(adapter).not.toMatch(/upsertProjectRollout/);
   });
+
+  it("T7-C-U02 static: no process-local eligibility registry in runtime trio", () => {
+    const roots = [
+      "lib/oa/finops/application/types.enforcement.ts",
+      "lib/oa/execution-run/application/coordinateExecutionRun.ts",
+      "lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts",
+    ];
+    for (const rel of roots) {
+      const src = readFileSync(path.join(process.cwd(), rel), "utf8");
+      expect(src).not.toMatch(/new Map\s*\(/);
+      expect(src).not.toMatch(/new Set\s*\(/);
+      expect(src).not.toMatch(/WeakMap/);
+      expect(src).not.toMatch(/WeakSet/);
+      expect(src).not.toMatch(/AsyncLocalStorage/);
+    }
+  });
 });

### A.5 t7.shadow-option-a.wiring.integration.test.ts

diff --git a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
index 41fc4c4..f430c23 100644
--- a/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts
@@ -21,12 +21,15 @@ import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastruc
 import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
 import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
 import { composeFinOpsT7ShadowExecutionDeps } from "@/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server/composeExecutionRunD2D3";
 import { createPostgresFinOpsRolloutStore } from "@/lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
 import {
   closeFinOpsPool,
   createFinOpsPool,
 } from "@/lib/oa/finops/infrastructure/postgres/createFinOpsPool";
 import type { FinOpsRolloutMode } from "@/lib/oa/finops/application/types.rollout";
+import type { FinOpsCapturePort } from "@/lib/oa/finops/ports/finopsCapturePort";
+import type { FinOpsEnforcementPort } from "@/lib/oa/finops/ports/finopsEnforcementPort";

 const DATABASE_URL = process.env.DATABASE_URL?.trim() ?? "";
 const describeDb = DATABASE_URL ? describe : describe.skip;
@@ -160,7 +163,12 @@ describeDb("T7 SHADOW Option A — wiring integration", () => {
     expect(result.providerInvoked).toBe(true);
     expect(completeSpy).toHaveBeenCalled();
     expect(policy).not.toHaveBeenCalled();
-    expect(result.finopsCapture?.status).toBe("disabled");
+    expect(result.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "finops_pre_provider_capture_ineligible",
+      }),
+    );
   });

   it("T7-SW02 pilot + missing row → default OFF inert", async () => {
@@ -480,4 +488,380 @@ describeDb("T7 SHADOW Option A — wiring integration", () => {
     expect(seen).toEqual(["sfia-studio-ops1"]);
     expect(deps.pilotProjectId).toBe("sfia-studio-ops1");
   });
+
+  it("T7-C01 OFF → OFF · PRE ineligible · capture disabled · no usage event", async () => {
+    await upsertMode(pool, PILOT, "OFF");
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c01"),
+    );
+    expect(result.ok).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(result.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "finops_pre_provider_capture_ineligible",
+      }),
+    );
+  });
+
+  it("T7-C02 SHADOW → SHADOW · PRE eligible · capture created/duplicate", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, "0.10000000");
+    const deps = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: async () => null,
+    });
+    const decision = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c02",
+      correlationId: "corr:c02",
+      occurredAt: clockIso,
+    });
+    expect(decision.captureEligibility).toBe("eligible");
+    const { providers } = spyProviders();
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c02"),
+    );
+    expect(result.ok).toBe(true);
+    expect(["created", "duplicate", "failed"]).toContain(
+      result.finopsCapture!.status,
+    );
+  });
+
+  it("T7-C03 OFF → SHADOW mid-provider · PRE ineligible · capture short-circuited", async () => {
+    await upsertMode(pool, PILOT, "OFF");
+    const ai = new FakeAiExecutionAdapter();
+    const completeSpy = vi.spyOn(ai, "complete").mockImplementation(async () => {
+      await upsertMode(pool, PILOT, "SHADOW");
+      return {
+        kind: "success" as const,
+        completeness: "complete" as const,
+        redactedSummary: "TEST_ONLY flip OFF→SHADOW",
+        disclosureNotes: ["source=fake", "live=false"],
+        usage: {
+          status: "validated" as const,
+          inputTokens: 1,
+          outputTokens: 1,
+          unit: "tokens" as const,
+        },
+      };
+    });
+    const secretsAdapter = new FakeSecretSourceAdapter();
+    const providers = composeExecutionRunProviders({
+      ai,
+      git: new FakeGitReadAdapter({
+        repositoryAllowlist: [
+          "o/r",
+          "example/example",
+          "mcleland147/sfia-workspace",
+        ],
+        pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+      }),
+      cursor: new FixtureCursorExecutionAdapter(),
+      secrets: {
+        resolve: (secretId) => secretsAdapter.resolve(secretId),
+      },
+      events: new RecordingExecutionEventSink(),
+    });
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c03"),
+    );
+    expect(result.ok).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(result.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "finops_pre_provider_capture_ineligible",
+      }),
+    );
+    // POST would be SHADOW, but PRE gate must win (no retroactive capture).
+    const postMode = await createPostgresFinOpsRolloutStore(pool).readProjectRollout(
+      PILOT,
+    );
+    expect(postMode?.mode ?? "OFF").toBe("SHADOW");
+  });
+
+  it("T7-C04 SHADOW → OFF mid-provider · PRE eligible · POST disables capture", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, "0.10000000");
+    const ai = new FakeAiExecutionAdapter();
+    const completeSpy = vi.spyOn(ai, "complete").mockImplementation(async () => {
+      await upsertMode(pool, PILOT, "OFF");
+      return {
+        kind: "success" as const,
+        completeness: "complete" as const,
+        redactedSummary: "TEST_ONLY flip SHADOW→OFF",
+        disclosureNotes: ["source=fake", "live=false"],
+        usage: {
+          status: "validated" as const,
+          inputTokens: 1,
+          outputTokens: 1,
+          unit: "tokens" as const,
+        },
+      };
+    });
+    const secretsAdapter = new FakeSecretSourceAdapter();
+    const providers = composeExecutionRunProviders({
+      ai,
+      git: new FakeGitReadAdapter({
+        repositoryAllowlist: [
+          "o/r",
+          "example/example",
+          "mcleland147/sfia-workspace",
+        ],
+        pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+      }),
+      cursor: new FixtureCursorExecutionAdapter(),
+      secrets: {
+        resolve: (secretId) => secretsAdapter.resolve(secretId),
+      },
+      events: new RecordingExecutionEventSink(),
+    });
+    const composition = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers,
+      resolveShadowPolicy: async () => null,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c04"),
+    );
+    expect(result.ok).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(result.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "shadow_capture_inactive",
+      }),
+    );
+  });
+
+  it("T7-C05 PRE eligibility matrix · non-pilot/OFF/MONITOR/E1 ineligible · SHADOW eligible", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await upsertMode(pool, OTHER, "SHADOW");
+    const deps = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: async () => null,
+    });
+    const nonPilot = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: OTHER,
+      executionRunId: "run:c05a",
+      correlationId: "corr:c05a",
+      occurredAt: clockIso,
+    });
+    expect(nonPilot.captureEligibility).toBe("ineligible");
+
+    await upsertMode(pool, PILOT, "OFF");
+    const off = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c05b",
+      correlationId: "corr:c05b",
+      occurredAt: clockIso,
+    });
+    expect(off.captureEligibility).toBe("ineligible");
+
+    await upsertMode(pool, PILOT, "MONITOR");
+    const monitor = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c05c",
+      correlationId: "corr:c05c",
+      occurredAt: clockIso,
+    });
+    expect(monitor.captureEligibility).toBe("ineligible");
+
+    await upsertMode(pool, PILOT, "E1_ENFORCED");
+    const e1 = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c05d",
+      correlationId: "corr:c05d",
+      occurredAt: clockIso,
+    });
+    expect(e1.captureEligibility).toBe("ineligible");
+
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, TEST_ONLY_ELIGIBLE);
+    const shadowNull = await deps.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c05e",
+      correlationId: "corr:c05e",
+      occurredAt: clockIso,
+    });
+    expect(shadowNull.captureEligibility).toBe("eligible");
+
+    const depsThrow = composeFinOpsT7ShadowExecutionDeps({
+      pool,
+      nowIso: () => clockIso,
+      pilotProjectId: PILOT,
+      resolveShadowPolicy: async () => {
+        throw new Error("TEST_ONLY policy boom");
+      },
+    });
+    const shadowThrow = await depsThrow.finopsEnforcement.evaluateBeforeProvider({
+      projectId: PILOT,
+      executionRunId: "run:c05f",
+      correlationId: "corr:c05f",
+      occurredAt: clockIso,
+    });
+    expect(shadowThrow.decision).toBe("failed");
+    expect(shadowThrow.captureEligibility).toBe("eligible");
+  });
+
+  it("T7-C06 legacy: no captureEligibility on generic enforcement → capture preserved", async () => {
+    let captureCalled = 0;
+    const capture: FinOpsCapturePort = {
+      async captureUsage() {
+        captureCalled += 1;
+        return {
+          status: "created",
+          eventId: "evt:legacy-c06",
+          dedupKey: "dedup:legacy-c06",
+        };
+      },
+    };
+    const enforcement: FinOpsEnforcementPort = {
+      async evaluateBeforeProvider() {
+        return { decision: "allow", reason: "generic_allow_no_eligibility" };
+      },
+    };
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3({
+      providers,
+      clockIso,
+      finops: capture,
+      finopsEnforcement: enforcement,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c06"),
+    );
+    expect(result.ok).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(captureCalled).toBe(1);
+    expect(result.finopsCapture?.status).toBe("created");
+  });
+
+  it("T7-C07 legacy: no finopsEnforcement · capture path preserved", async () => {
+    let captureCalled = 0;
+    const capture: FinOpsCapturePort = {
+      async captureUsage() {
+        captureCalled += 1;
+        return {
+          status: "created",
+          eventId: "evt:legacy-c07",
+          dedupKey: "dedup:legacy-c07",
+        };
+      },
+    };
+    const { providers, completeSpy } = spyProviders();
+    const composition = composeExecutionRunD2D3({
+      providers,
+      clockIso,
+      finops: capture,
+    });
+    const result = await composition.coordinate(
+      coordinateInput(PILOT, "c07"),
+    );
+    expect(result.ok).toBe(true);
+    expect(completeSpy).toHaveBeenCalled();
+    expect(captureCalled).toBe(1);
+    expect(result.finopsCapture?.status).toBe("created");
+  });
+
+  it("T7-C08 concurrency: A SHADOW-eligible and B OFF-ineligible do not contaminate", async () => {
+    await upsertMode(pool, PILOT, "SHADOW");
+    await seedProjection(pool, PILOT, "0.10000000");
+    await upsertMode(pool, OTHER, "OFF");
+
+    // B uses OTHER as non-pilot under PILOT SHADOW adapter → always ineligible.
+    // A uses PILOT under SHADOW → eligible; flip OFF during A's provider to prove POST gate.
+    const aiA = new FakeAiExecutionAdapter();
+    vi.spyOn(aiA, "complete").mockImplementation(async () => {
+      await upsertMode(pool, PILOT, "OFF");
+      return {
+        kind: "success" as const,
+        completeness: "complete" as const,
+        redactedSummary: "TEST_ONLY concurrent A",
+        disclosureNotes: ["source=fake", "live=false"],
+        usage: {
+          status: "validated" as const,
+          inputTokens: 1,
+          outputTokens: 1,
+          unit: "tokens" as const,
+        },
+      };
+    });
+    const secretsA = new FakeSecretSourceAdapter();
+    const compositionA = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers: composeExecutionRunProviders({
+        ai: aiA,
+        git: new FakeGitReadAdapter({
+          repositoryAllowlist: [
+            "o/r",
+            "example/example",
+            "mcleland147/sfia-workspace",
+          ],
+          pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+        }),
+        cursor: new FixtureCursorExecutionAdapter(),
+        secrets: { resolve: (id) => secretsA.resolve(id) },
+        events: new RecordingExecutionEventSink(),
+      }),
+      resolveShadowPolicy: async () => null,
+    });
+
+    await upsertMode(pool, PILOT, "SHADOW");
+    const { providers: providersB } = spyProviders();
+    const compositionB = composeExecutionRunD2D3T7ShadowPilot({
+      pool,
+      clockIso,
+      providers: providersB,
+      resolveShadowPolicy: async () => null,
+    });
+
+    const [resultA, resultB] = await Promise.all([
+      compositionA.coordinate(coordinateInput(PILOT, "c08a")),
+      compositionB.coordinate(coordinateInput(OTHER, "c08b")),
+    ]);
+
+    expect(resultA.ok).toBe(true);
+    expect(resultB.ok).toBe(true);
+    // A: PRE eligible then POST OFF → shadow_capture_inactive
+    expect(resultA.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "shadow_capture_inactive",
+      }),
+    );
+    // B: non-pilot PRE ineligible → coordinator short-circuit
+    expect(resultB.finopsCapture).toEqual(
+      expect.objectContaining({
+        status: "disabled",
+        reason: "finops_pre_provider_capture_ineligible",
+      }),
+    );
+  });
 });

## Appendix B — COMPLETE 158 content

# 158 — FinOps T7 SHADOW Temporal Semantics Option C — Hybrid Dual-Gate Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/158-assistant-sfia-native-openai-finops-t7-shadow-temporal-dual-gate-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profil:** Critical
**Typologie:** EVOL / CODE / TEST / DOC
**Baseline:** SFIA v2.6
**Date (CEST):** 2026-08-08 22:07 CEST
**Date (UTC):** 2026-08-08 20:07 UTC

---

## A. Status / anti-claims

| Claim | Status |
|-------|--------|
| Option C selected by Morris | **TRUE** |
| Dual-gate = `PRE_WAS_SHADOW ∧ POST_IS_SHADOW` | **TRUE** |
| Runtime implementation local | **TRUE** |
| Temporal drift OFF→SHADOW addressed locally | **TRUE** |
| Closed on main | **FALSE** |
| SHADOW activated | **FALSE** |
| Policy source selected | **FALSE** |
| MONITOR activated | **FALSE** |
| E1 authorized | **FALSE** |
| Process-local cache / Map / Set / registry | **FALSE** |
| Migration / durable eligibility state | **FALSE** |
| Project commit / push / PR | **FALSE** |

```text
OPTION C DUAL-GATE DELIVERED LOCALLY —
TEMPORAL MODE DRIFT ADDRESSED LOCALLY —
PENDING DEDICATED QA —
NOT CLOSED ON MAIN —
SHADOW NOT ACTIVATED —
POLICY SOURCE NOT SELECTED
```

---

## B. Morris decision

**Exact decision consumed:**

> GO TEMPORAL SEMANTICS — OPTION C, puis Delivery Cycle 8 Critical, avec dual-gate PRE_WAS_SHADOW ∧ POST_IS_SHADOW et interdiction de cache process-local non borné.

**Consumed by this Delivery:** transient `captureEligibility` + coordinator-local PRE gate + existing POST rollout re-read.
**Not consumed:** SHADOW activation · policy source · MONITOR · E1 · thresholds · T6-ext · Product IAM · commit/push/PR.

---

## C. Architecture implemented

```text
PRE resolveProjectRollout
  → captureEligibility ("eligible" iff pilot + PRE mode SHADOW)
  → FinOpsEnforcementDecision (optional field)
  → coordinateExecutionRun call-local variable
  → captureFinOpsAfterAiSuccess PRE gate
       "ineligible" → disabled / finops_pre_provider_capture_ineligible (no port call)
       "eligible" | undefined → call capture port
  → composeFinOpsT7ShadowExecutionDeps.captureUsage
       POST resolveProjectRollout
       mode === "SHADOW" required for capture
```

Transport: **coordinator-local only** for the duration of one `coordinateExecutionRun(...)`.
No snapshot of full rollout mode. No durable state. No shared registry.

---

## D. Temporal matrix

| Transition | PRE eligibility | POST mode | Capture |
|------------|-----------------|-----------|---------|
| OFF → OFF | ineligible | OFF | NO |
| OFF → SHADOW (during provider) | ineligible | SHADOW | NO (PRE short-circuit) |
| SHADOW → OFF (during provider) | eligible | OFF | NO (POST gate) |
| SHADOW → SHADOW | eligible | SHADOW | YES (if other capture conditions hold) |

---

## E. State model

- **NO CACHE**
- **NO MAP / SET / WeakMap / WeakSet**
- **NO AsyncLocalStorage eligibility registry**
- **NO module-level mutable eligibility**
- **NO DURABLE STATE / NO MIGRATION**
- Eligibility lives only as a call-local `let` inside `coordinateExecutionRun`

---

## F. Files

**MODIFY**

1. `projects/sfia-studio/app/lib/oa/finops/application/types.enforcement.ts`
2. `projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`
3. `projects/sfia-studio/app/lib/oa/finops/server/composeFinOpsT7ShadowExecutionDeps.ts`
4. `projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-option-a.unit.test.ts`
5. `projects/sfia-studio/app/__tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts`

**CREATE**

6. This execution record (`158-…`)

**Unchanged (required):** `finopsCapturePort.ts`, `finopsEnforcementPort.ts`, `composeFinOpsT7Runtime.ts`, `resolveFinOpsRollout.ts`, `types.rollout.ts`, `composeExecutionRunD2D3.ts`, `composeExecutionRunD2D3T7ShadowPilot.ts`, OPS1, migrations.

---

## G. Tests (real results)

| Suite | Result |
|-------|--------|
| `t7.shadow-option-a.unit.test.ts` | **PASS** — 6/6 |
| `t7.shadow-option-a.wiring.integration.test.ts` | **PASS** — 22/22 |
| OA/OPS1 isolation probe + antiLegacy (doctrine + execution-contract) | **PASS** — 12/12 |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| Full `npm test` | **PASS** — 159 files / 1616 tests |
| `git diff --check` | **PASS** |

Covered proofs include T-C01…C04 temporal matrix, PRE eligibility matrix, legacy D2D3 / generic enforcement without `captureEligibility`, concurrency A/B no cross-run contamination, never-block / signal_only, static absence of Map/Set/AsyncLocalStorage in the three runtime files.

---

## H. Reserves

| Reserve | Status |
|---------|--------|
| TEMPORAL MODE DRIFT OFF→SHADOW | **ADDRESSED LOCALLY BY OPTION C — PENDING DEDICATED QA — NOT CLOSED ON MAIN** |
| SHADOW PILOT POLICY SOURCE | **NOT SELECTED** |
| R-T4-T3-SYNC-01 | **OPEN BEFORE MONITOR** |
| R-PR-T2-API-01 | **OPEN MINOR** |
| Calibration réelle | **REQUIRED BEFORE MONITOR** |
| T6-ext | **NOT AUTHORIZED** |
| Product IAM | **NOT_SELECTED** |
| T5 | **OUT OF SCOPE** |
| SHADOW | **NOT ACTIVATED** |
| MONITOR | **NOT ACTIVATED** |
| E1 | **NOT AUTHORIZED** |

---

## I. Next

**Cycle 9 — Dedicated T7 SHADOW Temporal Dual-Gate QA** (Critical, distinct validation).

Do **not** commit / push project / open PR from this Delivery.
PR readiness only after QA + distinct Morris GO.
Policy source and SHADOW activation remain separate decisions.
