# Cycle 9 Critical — FinOps T7 SHADOW — Pre-Activation Reserve Review — Review Pack

**Level:** FULL
**Date/heure:** 2026-08-09 18:33:35 CEST / 2026-08-09 16:33:35 UTC
**Repo:** mcleland147/sfia-workspace
**Baseline:** SFIA v2.6
**Cycle:** 9 — QA / validation
**Profil:** Critical
**Typologie:** EVOL / QA / PRE-ACTIVATION RESERVE REVIEW
**Blocs:** FinOps · Sécurité · Observabilité / RUN readiness

---

## Morris GO (exact)

GO T7 SHADOW PRE-ACTIVATION RESERVE REVIEW —
REVIEW R-T7-OP-TARGET-BINDING-01 —
REVIEW R-T7-SHADOW-OBS-01 —
REVIEW R-QA-T7-C08-SCENARIO-01 —
CLASSIFY EACH AS CLOSE / ACCEPT / REMEDIATE / BLOCK —
CONFIRM R-T4-T3-SYNC-01 DEFERRED UNTIL PRE-MONITOR —
NO REAL TARGET APPLY —
NO SHADOW ACTIVATION.

Classifications below are RECOMMENDATIONS FOR MORRIS only.
CLOSE ≠ CLOSED · ACCEPT ≠ ACCEPTED without a new Morris GO.

---

## Git truth

| Field | Value |
|---|---|
| branch | `main` |
| HEAD / origin/main | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` |
| decision base | `96a8a14bc894b520043b3a8f758b1fb14a72a5e4` (NOMINAL_TIP) |
| tracked clean | YES (`?? .tmp-sfia-review/` only) |
| staged | NONE |
| baseline drift on T7 subject | NONE |

---

## Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md`
- `projects/sfia-studio/160-…-t7-shadow-activation-operator-execution.md`
- `projects/sfia-studio/161-…-t7-target-binding-option-b-execution.md`
- `projects/sfia-studio/162-…-t7-expected-mode-cas-remediation-execution.md`
- code: `finOpsT7TargetIdentity.ts`, `finops-t7-shadow-rollout.ts`, `composeFinOpsT7ShadowExecutionDeps.ts`, `composeExecutionRunD2D3T7ShadowPilot.ts`, `versionedFinOpsT7ShadowPolicySource.ts`, `resolveFinOpsRollout.ts`, `coordinateExecutionRun.ts`, related tests
- current handoff `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`
- historical readiness `8d44021…:sfia-review-handoff/latest-chatgpt-review.md`
- C08 origin handoff `cfd3b6a…` (temporal dual-gate QA)

---

## CKC

| Field | Value |
|---|---|
| cycle | 9 — QA / validation |
| path | `…/pilots/04-qa-validation.md` |
| statut | candidate |
| usage | experimental cognitive guidance |
| autorité | aucune |
| posture | référentiel avant verdict · observation ≠ réserve ≠ décision · aucun GO implicite · acceptation risque = Morris |

---

## Current handoff

| Field | Expected | Observed |
|---|---|---|
| tip | `940dcc4baa21f14dd48e4e1daeb7091b74161038` | MATCH |
| blob | `f94eafca80ff166daa5c01062dc9387525968d5a` | MATCH |

Confirms: CAS CLOSED · TARGET-BINDING VALIDATED RESOLUTION CANDIDATE · OBS OPEN MINOR · C08 OPEN MINOR · T4-T3 OPEN BEFORE MONITOR · REAL_NEON_APPLY ZERO · SHADOW NOT ACTIVATED · POLICY NOT SELECTED · MONITOR NOT ACTIVATED · E1 NOT AUTHORIZED.

**CURRENT HANDOFF COHERENT FOR REVIEW = YES**

---

## Historical readiness evidence

| Field | Value |
|---|---|
| commit | `8d44021c43e5b5749e78d782e7e98b2ac87ba55b` |
| blob | `0af0469a674e1e565d55640e33f028649b8c007c` |
| title | Cycle 9 Critical — FinOps T7 SHADOW Activation Readiness — Review Pack |

Historical tuple:
- project = `sfia-studio-ops1`
- target = `neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot`
- fingerprint = `7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331`
- actual fingerprint MATCH · safe identity stable YES · real dry-run PASS · real mutation ZERO

This cycle did **not** reconnect Neon; live revalidation remains a future activation-gate duty.

---

## CAS — non-réouverture

| Check | Result |
|---|---|
| R-T7-OP-EXPECTED-MODE-CAS-01 | CLOSED — UNCHANGED |
| `5d3f608…` ancestor of main | YES |
| NEW_CAS_DEFECT_EVIDENCE | NO |

No concurrency/rollback re-run. CAS not reclassified.

---

## 1) R-T7-OP-TARGET-BINDING-01

### Provenance

Original problem: `--target` was audit-only; `DATABASE_URL_DIRECT` selected the DB without intrinsic proof that the declared label matched the connection identity.

Option B (doc 161 + commit `7b39ac7…` / PR path): connection string → safe identity (host+port+database) → SHA-256 → compare expected fingerprint → Pool only after MATCH.

### TB01–TB12 (current main)

| ID | Check | Result |
|---|---|---|
| TB01 | safe identity = hostname + effective port + database only | PASS (`finOpsT7TargetIdentity.ts`) |
| TB02 | username/password/query/fragment excluded | PASS |
| TB03 | SHA-256 lowercase hex | PASS |
| TB04 | expected fingerprint obligatoire (CLI) | PASS (`finops-t7-shadow-rollout.ts`) |
| TB05 | invalid expected fingerprint fail-closed | PASS |
| TB06 | mismatch fail-closed | PASS |
| TB07 | mismatch before Pool | PASS (assert then `new Pool`) |
| TB08 | fingerprint on dry-run AND apply | PASS (both paths require fingerprint before Pool) |
| TB09 | target label audit-only | PASS |
| TB10 | pilot project guard unchanged | PASS (operator/CLI pilot bounds) |
| TB11 | OFF\|SHADOW bounds unchanged | PASS |
| TB12 | no registry / migration / hidden mapping | PASS |

### Classification answers

- Original problem: label/DB decoupling without fingerprint proof.
- Still in current code? **NO** — Option B fail-closed is integrated on main.
- Residual risk of THIS reserve: operator may supply a wrong fingerprint → correctly fail-closed; per-command fingerprint is the **normal contract**, not an open defect.
- Future live fingerprint recheck: activation-gate duty, not reason to keep this reserve open.

| Field | Value |
|---|---|
| TARGET_BINDING_CLASS | **CLOSE** |
| TARGET_BINDING_REASON | Original TOCTOU-of-target (label vs DB) remediated; TB01–TB12 PASS; historical live MATCH; no remaining binding defect observed |
| TARGET_BINDING_MORRIS_ACTION | GO CLOSE R-T7-OP-TARGET-BINDING-01 (formal closure) |
| Output | CLOSE RECOMMENDED |

Status in Git handoff remains VALIDATED RESOLUTION CANDIDATE until Morris consumes a CLOSE GO.

---

## 2) R-T7-SHADOW-OBS-01

### Historical OBS01–OBS12 (from 8d44021)

Rollout/usage/audit READY; SHADOW decision observability PARTIAL; policy READY (inert EMPTY).
Reserve: durable decision/reason absent on default pilot path; `onShadowDecision` optional; errors fail-open; no durable concrete sink.

### Current path discovery

Consumed pilot composition:
1. `composeExecutionRunD2D3T7ShadowPilot.ts` → default `resolveVersionedFinOpsT7ShadowPolicy` + optional `onShadowDecision`
2. `composeFinOpsT7ShadowExecutionDeps.ts` → `emitShadowDecision` (no-op if sink absent; swallows sink errors)
3. `composeFinOpsT7Runtime.ts` / `composeFinOpsRuntime.ts` → durable usage + `flushAudit`
4. `versionedFinOpsT7ShadowPolicySource.ts` → EMPTY freeze map
5. `coordinateExecutionRun.ts` → capture after provider success when eligible

### OBS-ACT01–12

| ID | Check | Result | Path proof |
|---|---|---|---|
| OBS-ACT01 | rollout mode/revision durable | PASS | postgres rollout store / operator CAS path |
| OBS-ACT02 | usage ledger durable | PASS | T6 capture via T7 runtime |
| OBS-ACT03 | audit journal durable | PASS | T6 audit journal |
| OBS-ACT04 | flushAudit concrete | PASS | pilot composition exposes `flushAudit` |
| OBS-ACT05 | capture after provider success | PASS | coordinator + shadow adapter |
| OBS-ACT06 | onShadowDecision exists | PASS | deps + pilot composer |
| OBS-ACT07 | onShadowDecision optional | PASS / PARTIAL intent | still optional |
| OBS-ACT08 | durable sink on default pilot path | FAIL (absent) | default composition does not inject durable sink |
| OBS-ACT09 | default policy EMPTY | PASS | `Object.freeze({})` |
| OBS-ACT10 | empty policy → null → allow/not_configured | PASS | tests T7-PS01 + units |
| OBS-ACT11 | signal_only / never-block | PASS | adapter forces `signal_only`; `ensureShadowNeverBlocks` |
| OBS-ACT12 | post-activation observability | PARTIAL | rollout+usage+audit+policy-empty+never-block durable/observable; decision/reason per-exec **not** durable by default |

### Central pilot-objective test

With POLICY VALUES NOT SELECTED / EMPTY source, first SHADOW pilot can still demonstrate durably:
1. rollout = SHADOW
2. AI provider continues
3. usage captured
4. audit captured
5. FinOps signal-only
6. no provider block
7. policy state = EMPTY / not_configured

Per-execution decision/reason durability is useful for later calibration but is **not** required to prove the EMPTY-policy first pilot objectives. It remains a residual observability gap.

| Field | Value |
|---|---|
| OBS_CLASS | **ACCEPT** |
| OBS_REASON | Durable decision/reason sink still absent on default path; first SHADOW pilot objectives remain objectively demonstrable via rollout+usage+audit+signal-only+EMPTY policy |
| OBS_RESIDUAL_RISK | Without optional sink injection, post-hoc reconstruction of per-execution decision/reason is not durable; calibration later may need a sink before MONITOR / policy selection |
| OBS_MORRIS_ACTION | Explicit ACCEPT residual risk for SHADOW pilot OR separate remediation Delivery if Morris requires decision durability before activation |
| Output | ACCEPT RECOMMENDED FOR SHADOW PILOT |

---

## 3) R-QA-T7-C08-SCENARIO-01

### Git provenance (reconstructed)

| Field | Value |
|---|---|
| C08_ORIGIN_COMMIT | `cfd3b6ab784aa61579c99bb01d366f1f262ec9b2` |
| C08_ORIGIN_DOCUMENT | `sfia-review-handoff/latest-chatgpt-review.md` (T7 shadow temporal dual-gate QA) |
| C08_ORIGINAL_SEVERITY | MINOR |
| C08_ORIGINAL_WORDING | « Scenario limit: Run B uses non-pilot rather than a second pilot OFF path. Classification: R-QA-T7-C08-SCENARIO-01 = MINOR — does not undermine structural isolation (P2) nor observed non-contamination (P1). » |
| C08_ORIGINAL_REASON | Concurrency proof T7-C08 used pilot SHADOW→OFF (A) + non-pilot (B); did not exercise a second concurrent pilot OFF path |
| C08_REQUIRED_FOLLOWUP | Optional stronger concurrency scenario; not treated as product blocker |
| C08_CURRENT_RELEVANCE | Scenario limit **still present** in `t7.shadow-option-a.wiring.integration.test.ts` T7-C08 (B = OTHER non-pilot). Structural P2 isolation and P1 non-contamination remain proven. No later test found that closes the second-pilot-OFF gap. |

Also mirrored into project doc/tests history via Option A wiring commit lineage; reserve ID carried forward through readiness/CAS handoffs as OPEN MINOR.

### Classification

Condition still exists (QA scenario completeness gap). It does not prevent SHADOW pilot safety: PRE/POST dual-gate and isolation are already proven; gap is an additional scenario shape, not a missing safety property.

| Field | Value |
|---|---|
| C08_CLASS | **ACCEPT** |
| C08_REASON | Exact provenance reconstructed; residual is a MINOR concurrency scenario-limit still present in tests; does not undermine isolation or activation safety for first SHADOW pilot |
| C08_CURRENT_EVIDENCE | Origin handoff `cfd3b6a…`; current test T7-C08 still uses non-pilot B; no subsequent closing proof found |
| C08_MORRIS_ACTION | Explicit ACCEPT for SHADOW pilot OR optional REMEDIATE Delivery to add second-pilot-OFF concurrency if Morris wants the gap closed |
| Output | ACCEPT RECOMMENDED FOR SHADOW PILOT |

(Priority applied: not BLOCK — provenance sufficient; not CLOSE — condition still exists; not REMEDIATE as mandatory — pilot objective does not require the extra scenario.)

---

## 4) R-T4-T3-SYNC-01

| Check | Result |
|---|---|
| SHADOW `requiresT3Sync` | false (`resolveFinOpsRollout.ts`) |
| MONITOR `requiresT3Sync` | true |
| SHADOW policy effect | signal_only · blockingAllowed=false |
| MONITOR activation | NOT ACTIVATED |
| Unit proof | T7-U04 SHADOW T3 not required; T7-U05 MONITOR T3 required |

| Field | Value |
|---|---|
| R-T4-T3-SYNC-01 | OPEN BEFORE MONITOR (unchanged) |
| T4_T3_REQUIRED_BEFORE_SHADOW | NO |
| T4_T3_REQUIRED_BEFORE_MONITOR | YES |
| DEFERRED_UNTIL_PRE_MONITOR | CONFIRMED |
| T4_T3_DEFER_CONFIRMATION | PASS |

---

## Focused tests (no Neon / no heavy re-QA)

| File | Result |
|---|---|
| `t7.shadow-target-binding-option-b.unit.test.ts` | 18 PASS |
| `t7.shadow-option-a.unit.test.ts` | 6 PASS |
| `t7.shadow-policy-source-option-a.unit.test.ts` | 5 PASS |
| `t7.rollout.unit.test.ts` | 10 PASS |
| **Total** | **39/39 PASS** |

No project file modification. No local PG required for this set. No Neon.

---

## PA01–PA16

| ID | Check | Result |
|---|---|---|
| PA01 | Git/main cohérent | PASS |
| PA02 | handoff courant exact | PASS |
| PA03 | historical readiness accessible | PASS |
| PA04 | CAS CLOSED preserved | PASS |
| PA05 | target-binding provenance complete | PASS |
| PA06 | target-binding current impl checked | PASS |
| PA07 | target-binding classification evidence sufficient | PASS |
| PA08 | OBS provenance complete | PASS |
| PA09 | OBS current runtime path checked | PASS |
| PA10 | OBS classification evidence sufficient | PASS |
| PA11 | C08 provenance reconstructed | PASS |
| PA12 | C08 current relevance established | PASS |
| PA13 | C08 classification evidence sufficient | PASS |
| PA14 | T4↔T3 deferred-before-MONITOR confirmed | PASS |
| PA15 | no project/live mutation | PASS |
| PA16 | classifications remain Morris recommendations only | PASS |

**PA01–PA16 = 16/16 PASS**

---

## Decision pack (recommendations only — statuses unchanged in Git)

| Reserve | Current status | Condition still exists? | Activation impact | Recommended class | Residual risk | Required Morris decision | Evidence |
|---|---|---|---|---|---|---|---|
| R-T7-OP-TARGET-BINDING-01 | VALIDATED RESOLUTION CANDIDATE | NO (binding defect remediated) | None if closed; live fingerprint still rechecked at activation | CLOSE | Wrong fingerprint fail-closed (normal contract) | Formal CLOSE GO | TB01–12; hist MATCH; units 18 PASS |
| R-T7-SHADOW-OBS-01 | OPEN MINOR | YES (no durable decision sink on default path) | Does not prevent first EMPTY-policy SHADOW pilot proofs | ACCEPT | Per-exec decision/reason not durable by default | Explicit ACCEPT for SHADOW or REMEDIATE Delivery | OBS-ACT; hist OBS; path inspection |
| R-QA-T7-C08-SCENARIO-01 | OPEN MINOR | YES (second pilot OFF concurrency not covered) | None material for first SHADOW safety | ACCEPT | Incomplete concurrency scenario catalogue | Explicit ACCEPT for SHADOW or optional REMEDIATE | Origin `cfd3b6a`; current T7-C08 |

Statuses above are **not** mutated by this cycle.

---

## Aggregation

| Field | Value |
|---|---|
| ANY_BLOCK | NO |
| ANY_REMEDIATE | NO |
| ALL_DECIDABLE | YES |
| PRE_ACTIVATION_DECISION | RESERVE DECISION PACK READY FOR MORRIS |

Anti-claim: RESERVE DECISION PACK READY ≠ SHADOW ACTIVATION READY.
Do **not** emit READY FOR SHADOW ACTIVATION.

---

## Project mutation / secrets / activation

| Claim | Value |
|---|---|
| PROJECT_FILE_CHANGES | ZERO |
| PROJECT_COMMIT | ZERO |
| PROJECT_PUSH | ZERO |
| PROJECT_PR | ZERO |
| DATABASE_URL_DIRECT_READ | NO |
| REAL_TARGET_CONNECTION | NONE |
| REAL_TARGET_APPLY | ZERO |
| SHADOW | NOT ACTIVATED |
| POLICY VALUES | NOT SELECTED |
| MONITOR | NOT ACTIVATED |
| E1 | NOT AUTHORIZED |

---

## Proposed Morris decision gate (not executed)

GO T7 SHADOW PRE-ACTIVATION RESERVE DECISIONS —
R-T7-OP-TARGET-BINDING-01 = CLOSE —
R-T7-SHADOW-OBS-01 = ACCEPT —
R-QA-T7-C08-SCENARIO-01 = ACCEPT —
R-T4-T3-SYNC-01 DEFERRED UNTIL PRE-MONITOR —
NO REAL TARGET APPLY —
NO SHADOW ACTIVATION.

Morris must validate explicitly. This gate does not authorize SHADOW activation.

---

## Unique verdict

T7 SHADOW PRE-ACTIVATION RESERVE REVIEW COMPLETE WITH RESERVES —
CYCLE 9 CRITICAL —
R-T7-OP-TARGET-BINDING-01 CLOSE RECOMMENDED —
R-T7-SHADOW-OBS-01 ACCEPT RECOMMENDED —
R-QA-T7-C08-SCENARIO-01 ACCEPT RECOMMENDED —
R-T4-T3-SYNC-01 DEFERRED UNTIL PRE-MONITOR CONFIRMED —
R-T7-OP-EXPECTED-MODE-CAS-01 CLOSED UNCHANGED —
NO PROJECT MUTATION —
NO REAL TARGET CONNECTION/APPLY —
SHADOW NOT ACTIVATED —
RESERVE DECISION PACK READY FOR MORRIS —
HANDOFF REMOTE VERIFIED.
