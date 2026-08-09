# Cycle 9 Critical — FinOps T7 SHADOW Activation Readiness — Review Pack

**Level:** FULL
**Date/time:** 2026-08-09 15:43:00 CEST / 2026-08-09 13:43:00 UTC
**Repo:** mcleland147/sfia-workspace
**Baseline:** SFIA v2.6
**Cycle:** 9 — QA / validation
**Profile:** Critical
**Typology:** EVOL / QA / ACTIVATION READINESS

---

## 1. Morris decision (exact)

GO T7 SHADOW ACTIVATION READINESS —
sfia-studio-ops1 —
TARGET neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot —
FINGERPRINT 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331 —
VERIFY EXPECTED-MODE ATOMICITY / CAS —
VERIFY CURRENT OFF + ROLLBACK —
VERIFY OBSERVABILITY —
REAL TARGET DRY-RUN ONLY —
NO SHADOW ACTIVATION.

Authorized: read-only code analysis; operator/store call-chain inspection; destructible local ephemeral tests; concurrent local apply on LOCAL ephemeral PostgreSQL only; real Neon read + fingerprint + OFF + dry-run without --apply; observability structural inventory; review pack; handoff.

Forbidden: Neon --apply; real SHADOW row; SHADOW/MONITOR/E1 activation; code/migration/branch/commit/push/PR; policy values selection; CAS correction; new observability mechanism.

---

## 2. Git Truth

| Check | Result |
|---|---|
| Branch | main |
| HEAD | 34b6a321a69e0315f410ac0876cd5e9734a77206 |
| origin/main | 34b6a321a69e0315f410ac0876cd5e9734a77206 |
| Baseline ancestor | YES (exact match) |
| Tracked working tree | clean |
| Untracked | .tmp-sfia-review/** only |
| Project branch | NONE |

Incoming handoff (pre-publish):
- HANDOFF_REMOTE_TIP = 650c98f33465062f9c5ceeb9447966b0844982a7
- HANDOFF_BLOB = b1a271c40e848472985802515f5639b298036494

---

## 3. Sources consulted

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/checklists/sfia-validation-checklist.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md
- sfia-review-handoff/latest-chatgpt-review.md (sfia/review-handoff)
- operateFinOpsT7ShadowRollout.ts
- postgresFinOpsRolloutStore.ts
- finopsRolloutPort.ts / types.rollout.ts
- finops-t7-shadow-rollout.ts
- finOpsT7TargetIdentity.ts
- composeFinOpsT7ShadowExecutionDeps.ts
- composeExecutionRunD2D3T7ShadowPilot.ts
- composeFinOpsT7Runtime.ts / composeFinOpsRuntime.ts
- versionedFinOpsT7ShadowPolicySource.ts
- coordinateExecutionRun.ts (capture/enforcement hooks)
- Relevant T7/SHADOW/PostgreSQL tests

---

## 4. CKC

- cycle = 9 — QA / validation
- path = method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md
- statut = candidate
- usage = experimental cognitive guidance
- autorité = aucune autorité d'exécution

Priority dimensions applied: objet à valider; référentiel attendu; preuves; cas négatifs; reproductibilité; non-régression; sévérité; limites; conditions du verdict; anti-claims.

---

## 5. Target tuple + Keychain

| Field | Value |
|---|---|
| Project | sfia-studio-ops1 |
| Target label | neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot |
| Expected fingerprint | 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331 |
| Keychain service | sfia-studio-finops-t7-shadow-pilot-DATABASE_URL_DIRECT |
| Keychain presence | YES (value never printed) |
| Safe identity | host=ep-dry-shape-b1fabcbm.c-5.eu-central-1.aws.neon.tech / port=5432 / database=neondb |

Secret hygiene: RAW_DATABASE_URL_PRESENT=NO · PASSWORD_VALUE_PRESENT=NO · SECRET_LEAK=NO

---

## 6. Real fingerprint recheck

- actual fingerprint = 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331
- MATCH = YES
- safe identity stable = YES

---

## 7. Real OFF proof (read-only Neon)

| Field | Value |
|---|---|
| ROW_EXISTS | false |
| MODE | null |
| REVISION | null |
| UPDATED_AT | null |
| EFFECTIVE_MODE | OFF |
| ROW_COUNT | 0 |

No SHADOW / MONITOR / E1.

---

## 8. Real target dry-run (no --apply)

Command executed exactly as authorized (Keychain-injected DATABASE_URL_DIRECT):

```
npm run finops:t7:rollout -- --project sfia-studio-ops1 --mode SHADOW --expected-mode OFF --target neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot --expected-target-fingerprint 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331
```

Result:

```
ok=true
result=dry_run
applied=false
beforeEffectiveMode=OFF
afterMode=OFF
beforeRevision=null
afterRevision=null
```

Post-check: ROW_COUNT_AFTER_DRYRUN=0 · REAL_TARGET_MUTATION=ZERO

---

## 9. Static call chain — expected-mode

operateFinOpsT7ShadowRollout:

1. A — readProjectRollout(projectId)
2. B — effectiveMode(beforeRow) (absent → OFF)
3. C — application compare beforeEffectiveMode !== expectedMode → EXPECTED_MODE_MISMATCH
4. D — expectedAfterRevision = beforeRevision === null ? 1 : beforeRevision + 1
5. E — upsertProjectRollout({ projectId, mode: requestedMode, updatedAt }) — no expectedMode / expectedRevision
6. F — post-read verification → POST_APPLY_MISMATCH if mode/revision ≠ expectedAfterRevision

postgresFinOpsRolloutStore.upsertProjectRollout SQL:

```
INSERT INTO finops_rollout_config (project_id, mode, revision, updated_at)
VALUES ($1, $2, 1, $3::timestamptz)
ON CONFLICT (project_id) DO UPDATE SET
  mode = EXCLUDED.mode,
  revision = finops_rollout_config.revision + 1,
  updated_at = EXCLUDED.updated_at
RETURNING ...
```

Semantics: atomic revision increment only. Not expected-mode CAS. No WHERE mode = expected. No WHERE revision = expected.

UpsertProjectRolloutInput = { projectId, mode, updatedAt } only.

---

## 10. CAS01–CAS10

| ID | Question | Answer |
|---|---|---|
| CAS01 | Write receives expectedMode? | NO |
| CAS02 | Write receives expectedRevision? | NO |
| CAS03 | SQL WHERE mode = expected? | NO |
| CAS04 | SQL WHERE revision = expected? | NO |
| CAS05 | SELECT FOR UPDATE same txn? | NO |
| CAS06 | Transaction enclosing read+check+write? | NO |
| CAS07 | Advisory lock equivalent? | NO |
| CAS08 | Serializable txn with retry? | NO |
| CAS09 | Stale actor can pass check before concurrent mute? | YES |
| CAS10 | Stale write can still modify revision/mode? | YES |

Classification:

- EXPECTED_MODE_CAS = NOT ATOMIC
- TOCTOU = PRESENT
- ACTIVATION_BLOCKER = YES
- POST_APPLY_MISMATCH ≠ pre-write CAS (mutation already durable)

---

## 11. Adversarial local CAS proof (LOCAL ephemeral PG ONLY)

Method: wrapper FinOpsRolloutPort barrier on first-phase readProjectRollout so both operators read before either write. Actors A and B: expected OFF → requested SHADOW, apply=true, local only.

Sanitized result:

```
preReads: ABSENT=OFF, ABSENT=OFF
upsertCount: 2
upsertModes: SHADOW, SHADOW
actorA: ok=false code=POST_APPLY_MISMATCH
actorB: ok=false code=POST_APPLY_MISMATCH
finalMode: SHADOW
finalRevision: 2
bothPreReadAbsent: true
bothFailedOnlyPostApply: true
casFailureProven: true
```

Proof: both actors accepted the same absent/OFF state; both unconditional upserts executed; durable revision became 2; both failed only after mutation via POST_APPLY_MISMATCH.

LOCAL_TEST_DB_DESTROYED = YES (Docker container removed). No Neon secret used in probe.

---

## 12. Expected-mode CAS verdict

EXPECTED-MODE CAS / TOCTOU = BLOCKING.

AR18 = FAIL BLOCKING.
Not READY FOR SHADOW ACTIVATION.

---

## 13. Rollback RB01–RB06

| ID | Check | Result |
|---|---|---|
| RB01 | Operator modes OFF\|SHADOW only | PASS (INVALID_MODE otherwise) |
| RB02 | Reverse transition expected SHADOW → requested OFF | PASS (supported by operator) |
| RB03 | Local ephemeral SHADOW→OFF | PASS — shadow rev1 → rollback OFF rev2; rb03_final_off=true |
| RB04 | Fingerprint guard before Pool also for OFF | PASS (CLI requires fingerprint before Pool for all apply/dry-run) |
| RB05 | Pilot guard sfia-studio-ops1 only | PASS |
| RB06 | Future real rollback command template | DOCUMENTARY ONLY — NOT EXECUTED |

Future documentary command (NEVER run this cycle):

```
npm run finops:t7:rollout -- --project sfia-studio-ops1 --mode OFF --expected-mode SHADOW --target neon-aws-eu-central-1-sfia-studio-finops-t7-shadow-pilot --expected-target-fingerprint 7476c251892df0e312c2ec302901b028a44b939b77f87ac4c40977529e3f3331 --apply
```

Impact of non-atomic CAS on rollback:

- ROLLBACK_FUNCTIONAL_PATH = AVAILABLE
- ROLLBACK_EXPECTED_MODE_ATOMICITY = NOT GUARANTEED
- ROLLBACK_OPERATIONAL_READINESS = BLOCKED UNDER CONCURRENCY

---

## 14. Observability OBS01–OBS12

| ID | Finding |
|---|---|
| OBS01 | T6 durable usage ledger present — YES (createPostgresFinOpsUsageLedger / finops_usage_event) |
| OBS02 | T6 durable audit journal present — YES (createPostgresFinOpsAuditJournal / finops_audit_event) |
| OBS03 | flushAudit available — YES (composeFinOpsRuntime → T7 → pilot composition) |
| OBS04 | SHADOW capture usage/audit after AI success path — YES when pilot+SHADOW via coordinator captureUsage after provider success (inert otherwise) |
| OBS05 | onShadowDecision exists — YES |
| OBS06 | onShadowDecision optional — YES |
| OBS07 | onShadowDecision errors fail-open — YES (emitShadowDecision swallows) |
| OBS08 | Durable decision sink wired in concrete pilot runtime path — NO (optional; only tests inject in-memory) |
| OBS09 | Default policy source empty — YES (VERSIONED_FINOPS_T7_SHADOW_POLICY_BY_PROJECT_ID = empty freeze) |
| OBS10 | Empty source ⇒ allow/not_configured — YES (T4 inert) |
| OBS11 | Post-activation RO queries can prove rollout SHADOW + usage + audit + provider continuity — PARTIAL YES (rollout/usage/audit/provider); decision/reason needs sink |
| OBS12 | Durable SHADOW decision/reason itself — NO on default path (only optional non-durable sink) |

### Observability A–E

| Layer | Status | Evidence |
|---|---|---|
| A. ROLLOUT OBSERVABILITY | READY | finops_rollout_config mode/revision |
| B. USAGE OBSERVABILITY | READY | T6 ledger wired through T7 runtime |
| C. AUDIT OBSERVABILITY | READY | T6 audit + flushAudit |
| D. SHADOW DECISION OBSERVABILITY | PARTIAL | optional fail-open onShadowDecision; no durable default sink |
| E. POLICY OBSERVABILITY | READY (inert) | empty versioned source ⇒ not_configured; no monetary threshold |

Critical justification for decision gap: with EMPTY policy, decision is code-deterministic allow/not_configured and never-block is unit/integration proven. Gap does not invent a new blocker beyond CAS in this cycle; recorded as OPEN MINOR reserve for Morris explicit acceptance before any future activation GO. Cursor does not auto-CLOSE or implement a sink.

---

## 15. Policy / signal-only / never-block

- VERSIONED_FINOPS_T7_SHADOW_POLICY_BY_PROJECT_ID = EMPTY
- POLICY VALUES = NOT SELECTED
- effect forced signal_only in SHADOW adapter
- ensureShadowNeverBlocks converts hostile block → failed finops-side
- adapter failures fail-open / failed finops-side only
- provider path not blocked by FinOps decision surface
- MONITOR/E1 inert in this adapter (rollout_not_shadow_inert)
- Proven by existing Option A unit + wiring integration suites (no byte changes)

---

## 16. Tests / quality

| Suite | Result |
|---|---|
| T7 operator / target-binding / Option A / policy source / rollout units | 5 files / 48 tests PASS |
| T7 postgres operator / wiring / rollout / foundation | 4 files / 59 tests PASS (local ephemeral PG) |
| typecheck | PASS |
| lint | PASS |
| build | PASS |

No test modifications. Ephemeral test PG destroyed.

---

## 17. AR01–AR18 Activation Readiness Matrix

| ID | Item | Verdict |
|---|---|---|
| AR01 | target fingerprint exact | PASS |
| AR02 | direct TLS target | PASS |
| AR03 | schema ready | PASS |
| AR04 | current effective OFF | PASS |
| AR05 | real dry-run PASS | PASS |
| AR06 | real mutation ZERO | PASS |
| AR07 | pilot-only guard | PASS |
| AR08 | OFF\|SHADOW-only guard | PASS |
| AR09 | MONITOR/E1 rejection | PASS |
| AR10 | signal_only forced | PASS |
| AR11 | never-block structural proof | PASS |
| AR12 | temporal PRE∧POST semantics intact | PASS |
| AR13 | rollback functional path | PASS |
| AR14 | rollback operational safety | FAIL (concurrency / non-atomic expected-mode) |
| AR15 | durable rollout observability | PASS |
| AR16 | durable usage/audit observability | PASS |
| AR17 | SHADOW decision observability | PASS WITH RESERVE |
| AR18 | expected-mode atomic CAS | FAIL BLOCKING |

One FAIL blocking ⇒ not READY FOR SHADOW ACTIVATION.

---

## 18. Reserves

### R-T7-OP-TARGET-BINDING-01
VALIDATED RESOLUTION CANDIDATE — TARGET + FINGERPRINT STABLE — NO TARGET-BINDING DEFECT FOUND — PENDING MORRIS CLOSURE / ACTIVATION DECISION.
(Not auto-CLOSED. Distinct from CAS.)

### R-T7-OP-EXPECTED-MODE-CAS-01
OPEN BLOCKING — EXPECTED-MODE CHECK IS PRE-READ APPLICATION CHECK — WRITE IS NOT CONDITIONAL ON EXPECTED MODE/REVISION — TOCTOU REPRODUCED OR STATICALLY PROVEN — REAL SHADOW ACTIVATION BLOCKED.

### R-T7-SHADOW-OBS-01
OPEN MINOR — DURABLE ROLLOUT + USAGE/AUDIT AVAILABLE — SHADOW DECISION DIAGNOSTIC DURABILITY ABSENT ON DEFAULT PILOT PATH (onShadowDecision optional / not durable). Critical: Morris must explicitly accept or remediate before activation GO; not remediated this cycle.

### Other retained
- R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
- R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
- POLICY VALUES = NOT SELECTED
- MONITOR = NOT ACTIVATED
- E1 = NOT AUTHORIZED

---

## 19. Anti-claims

- SHADOW = NOT ACTIVATED
- REAL APPLY = ZERO
- POLICY VALUES = NOT SELECTED
- MONITOR = NOT ACTIVATED
- E1 = NOT AUTHORIZED
- DRY-RUN PASS ≠ ACTIVATION READY
- ATOMIC UPSERT ≠ EXPECTED-MODE CAS
- POST-APPLY VERIFICATION ≠ PRE-WRITE CAS
- ROLLBACK COMMAND EXISTS ≠ CONCURRENCY-SAFE ROLLBACK
- T6 AUDIT EXISTS ≠ SHADOW DECISION DURABLY OBSERVABLE
- TARGET VERIFIED ≠ ACTIVATION AUTHORIZED
- QA PASS ≠ MORRIS GO ACTIVATION

---

## 20. Project modifications

CREATE=0 · MODIFY=0 · DELETE=0
Project branch=NONE · commit=NONE · push=NONE · PR=NONE
Temporaries only under .tmp-sfia-review/** + destroyed Docker locals. No document 162.

---

## 21. Next Morris gate

GO T7 EXPECTED-MODE CAS REMEDIATION —
sfia-studio-ops1 —
IMPLEMENT MINIMAL ATOMIC EXPECTED-MODE / REVISION COMPARE-AND-SWAP —
PRESERVE OFF|SHADOW PILOT BOUNDS —
NO REAL TARGET APPLY —
NO SHADOW ACTIVATION.

(Observability remediation NOT bundled — one subject at a time.)

---

## 22. Unique verdict

T7 SHADOW ACTIVATION READINESS BLOCKED —
CYCLE 9 CRITICAL —
TARGET NEON VERIFIED —
FINGERPRINT VERIFIED —
CURRENT REAL MODE OFF —
REAL TARGET DRY-RUN PASS / ZERO MUTATION —
EXPECTED-MODE CAS NOT ATOMIC —
TOCTOU PRESENT —
POST-APPLY CHECK DOES NOT PREVENT STALE MUTATION —
ROLLBACK FUNCTIONAL PATH VERIFIED BUT CONCURRENCY SAFETY NOT GUARANTEED —
OBSERVABILITY READY FOR ROLLOUT+USAGE+AUDIT / PARTIAL FOR SHADOW DECISION (optional non-durable onShadowDecision) —
R-T7-OP-TARGET-BINDING-01 VALIDATED RESOLUTION CANDIDATE —
R-T7-OP-EXPECTED-MODE-CAS-01 OPEN BLOCKING —
SHADOW NOT ACTIVATED —
POLICY VALUES NOT SELECTED —
NO PROJECT FILE CHANGES —
MORRIS REMEDIATION DECISION REQUIRED —
HANDOFF REMOTE VERIFIED
