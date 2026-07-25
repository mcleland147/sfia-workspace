# 10 — Runtime validation (T-A4 ExecutionContract)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A4 — ExecutionContract governance **RUNTIME VALIDATION** |
| **Profil** | Critical |
| **Gate** | adversarial runtime validation after foundation delivery |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance` |
| **HEAD start (foundation)** | `c7c83509b841c75f17013294493c03401089abac` |
| **Module** | `app/lib/oa/execution-contract/` |
| **Modeled schemas** | **NOT MODIFIED** |
| **Push / PR** | **NONE** |
| **T-A5** | **NONE** (refused) |

## Purpose

Prove and close adversarial defects found against the T-A4 runtime foundation, harden Confirm orphan-consume (R-T-A3-2 Option B), and document residual reserves that remain OPEN.

## Findings → fixes

| # | Defect | Fix | Tests |
|---|--------|-----|-------|
| 1 | Supersede allowed T-A5 status / `selectedAgentRef` injection; empty override arrays silently fell back | `assertNotTa5Injection`; successor status `draft\|proposed` only; explicit override arrays validated like Build | supersede TA5 / empty constraints / proposed OK |
| 2 | Confirm did not bind Confirmation to contract | Require `confirmation.scope === contract.scope`, level ≥ `requiredAuthority` (MORRIS→N3), `decisionRef ∈ decisionRefs` if present → `CONFIRMATION_INVALID` | scope / level / decisionRef |
| 3 | Idempotency fingerprint omitted constraints, capabilities, stopConditions, evidence, reversibility, status | Extended `contractIdempotencyFingerprint` stable join | constraints / reversibility / status conflicts |
| 4 | Build `doctrinePackageRef` TOCTOU (read after await) | Snapshot clone into `BuildSnapshot` before any await | doctrine TOCTOU |
| 5 | `supersessionReason` accepted ZWSP-only (`\u200B…`) | Strip ZWSP/BOM; require `\p{L}\|\p{N}` | ZWSP-only reject |
| 6 | CheckAuth skipped `decision.projectId === contract.projectId`; draft/proposed not explicitly covered | ProjectId check; draft/proposed deny tests | draft + proposed deny |
| 7 | R-T-A3-2 orphan: consume-then-persist left consumed Confirmation on persist fail | **Option B**: persist confirmed + `confirmationRef` first, then consume; on consume fail → `CancelExecutionContract` compensate | failNextSave + Option B compensate |

## R-T-A3-2 Option B

`confirmationId` is known from the Confirm request before consume. Sequence:

1. Validate (Critical, decisions, Confirmation binding, authority).
2. Persist `status=confirmed` with `confirmationRef` in the execution store txn.
3. `DecisionServices.consumeConfirmation`.
4. If consume fails → compensate `CancelExecutionContract` on the just-confirmed row.

**Residual OPEN:** if consume fails **and** compensate cancel also fails, a confirmed row may remain with an unconsumed `confirmationRef`. Still documented as **R-T-A3-2 OPEN** (cross-store atomicity not inventable without a shared txn).

`Confirm` `failNextSave` now fails **before** consume → Confirmation stays `granted` (improved vs consume-first).

## Validation matrix (this cycle)

| Suite | Count | Result |
|-------|-------|--------|
| modeled `execution-contract-governance.test.mjs` | 18 | PASS |
| `__tests__/oa/execution-contract` | **45+new (≥61)** | PASS |
| `__tests__/oa/decision` | 50 | PASS |
| `__tests__/oa/cycle` | 48 | PASS |
| `__tests__/oa/project` | 30 | PASS |
| `__tests__/oa/doctrine` | 28 | PASS |
| platform + fixtures | 10 | PASS |
| tsc / lint / build / `git diff --check` | — | PASS |

## Reserves (unchanged OPEN)

| Reserve | Status |
|---------|--------|
| **B5** | **OPEN** |
| **R1** | **OPEN** |
| **R-T-A3-1** | **OPEN** (Critical ack — fail-closed Confirm) |
| **R-T-A3-2** | **OPEN** (cross-store residual after Option B harden) |
| **R-T-A3-3** | **OPEN** |
| **R-T-A3-4** | **OPEN** |
| **R-T-A4-1 / 2 / 3** | **resolved-by-modeled** |

## Anti-claims

- Pas T-A4 **MERGED** / **PR**
- Pas T-A5 **AUTHORIZED** / **IMPLEMENTED**
- Pas B5 / R1 / R-T-A3-* **CLOSED**
- Pas Critical auto-acknowledged
- Pas modeled schema edits
- Pas push

## Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A4 EXECUTIONCONTRACT RUNTIME FOUNDATION CORRECTED AND VALIDATED — PR READINESS MAY OPEN WITH MORRIS GO**
