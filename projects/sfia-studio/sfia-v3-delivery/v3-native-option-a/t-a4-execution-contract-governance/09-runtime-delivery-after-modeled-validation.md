# 09 — Runtime delivery after modeled validation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A4 — ExecutionContract governance **RUNTIME** |
| **Profil** | Critical |
| **Gate** | `GO RESUME DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A4 EXECUTIONCONTRACT` |
| **Handoff consumed** | blob `2fb07e42c0ff625b20ea2215fd7b5380bc15d416` — MODELED REWORK CORRECTED AND VALIDATED — RUNTIME MAY RESUME |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance` |
| **origin/main** | `37d4036bb0811575bd112a30e97139f75c7acb3e` |
| **HEAD start** | `1e469fba7509d94a8b61f6b0a117b9c914d12774` |
| **Module** | `app/lib/oa/execution-contract/` |
| **Tests** | **≥45** under `app/__tests__/oa/execution-contract/` |
| **Modeled schemas** | **NOT MODIFIED** this cycle |
| **Push / PR** | **NONE** |
| **T-A5** | **NONE** (refused) |

## What shipped

In-memory Option A foundation mirroring `decision/`:

| Area | Contents |
|------|----------|
| **domain** | types (`0.2.0-oa`), errors (detailCode → ErrorRecord), invariants (ids, authority enum, `\S` reason, self-supersession reject, deny-by-default, clone-before-validate) |
| **application** | Build / Get / ListHistory / Validate / Confirm / Supersede / Cancel(pre-exec) / CheckAuthorization |
| **ports** | repository + audit ; inject ProjectServices, CycleServices, DecisionServices, AuthorityResolverPort |
| **infrastructure** | memory store + mutex txn + `failNextSave` + deep clone |
| **barrel** | `createInMemoryExecutionContractServices` / `createTestExecutionContractServices` |

## Morris rules materialized

| Rule | Runtime |
|------|---------|
| T-A4 owns through confirmed (+ cancelled pre-exec, superseded) | Status transitions enforced; T-A5 statuses refused |
| T-A5 owns SelectAgent / Start / executing\|completed\|failed | `selectedAgentRef` + T-A5 statuses → `TA5_STATUS_REFUSED` |
| `requiredAuthority` N1\|N2\|N3\|MORRIS | Closed enum; MORRIS = N3 + `canActAsMorris` via T-A3 AuthorityResolverPort |
| Confirmation consumed **only** on Confirm | Build/Validate leave Confirmation `granted` |
| Critical fail-closed if not acknowledged | Confirm/CheckAuth fail with `CRITICAL_NOT_ACKNOWLEDGED` when Critical cycle still `proposed` (R-T-A3-1 OPEN — no public ack API) |
| No agent / Attempt / shell / execution | Anti-legacy + anti-T-A5 tests |

## Confirmation consumption (R-T-A3-2 residual)

`ConfirmExecutionContract` calls `DecisionServices.consumeConfirmation` (public T-A3 use-case) then persists the contract in the execution-contract store.

**Residual R-T-A3-2 OPEN:** confirmation consume and contract persist are **not** a single atomic cross-store transaction. If persist fails after consume, confirmation remains consumed — Confirm returns fail-closed (`PERSISTENCE_FAILURE` / OCC). No compensating un-consume invented.

## Critical ack (R-T-A3-1 residual)

T-A2 Cycle has **no** public `AcknowledgeCriticalCycle` API. Confirm **fail-closes** when `cycle.profile === Critical` and `cycle.status === proposed`. T-A4 does not invent ack, does not mutate cycle status, and does not treat a HumanDecision as cycle acknowledgement.

## Validation matrix (this delivery)

| Suite | Count | Result |
|-------|-------|--------|
| modeled `execution-contract-governance.test.mjs` | 18 | PASS |
| `__tests__/oa/execution-contract` | 45 | PASS |
| `__tests__/oa/decision` | 50 | PASS |
| `__tests__/oa/cycle` | 48 | PASS |
| `__tests__/oa/project` | 30 | PASS |
| `__tests__/oa/doctrine` | 28 | PASS |
| platform + fixtures | 10 | PASS |
| **Total vitest OA+platform** | **211** | PASS |
| tsc / lint / build / `git diff --check` | — | PASS |

## Decisions D01–D10

Approved as previously validated (modeled rework + Morris). Not re-arbitrated. See [06](./06-delivery-validation-and-morris-decision-pack.md) / [07](./07-modeled-rework-after-morris-arbitration.md) / [08](./08-modeled-rework-validation.md).

## Reserves

| Reserve | Status |
|---------|--------|
| **B5** | **OPEN** |
| **R1** | **OPEN** |
| **R-T-A3-1** | **OPEN** (Critical ack — fail-closed Confirm documented) |
| **R-T-A3-2** | **OPEN** (cross-store consume/persist residual documented) |
| **R-T-A3-3** | **OPEN** |
| **R-T-A3-4** | **OPEN** |
| **R-T-A4-1** | **resolved-by-modeled** (supersession fields) |
| **R-T-A4-2** | **resolved-by-modeled** (ownership / Confirm consume) |
| **R-T-A4-3** | **resolved-by-modeled** (authority enum N1\|N2\|N3\|MORRIS) |

## Anti-claims

- Pas T-A4 **MERGED** / **PR**
- Pas T-A5 **AUTHORIZED** / **LAUNCHED** / **IMPLEMENTED**
- Pas DATABASE SELECTED / SCHEMAS ADOPTED (product runtime maps modeled fields; schemas not edited)
- Pas READY FOR DELIVERY GLOBAL / OPTION A IMPLEMENTED
- Pas B5 / R1 / R-T-A3-* **CLOSED**
- Pas Critical auto-acknowledged
- Pas agent selection / StartExecution / shell / Attempt
- Pas modeled schema edits this cycle
- Pas push

## Verdict (delivery)

**SFIA STUDIO V3-NATIVE OPTION A T-A4 EXECUTIONCONTRACT RUNTIME FOUNDATION IMPLEMENTED — MORRIS VALIDATION REQUIRED**
