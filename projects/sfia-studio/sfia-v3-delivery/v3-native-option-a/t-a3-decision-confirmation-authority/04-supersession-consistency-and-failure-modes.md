# 04 — Supersession, consistency and failure modes

## Supersession

`SupersedeHumanDecision`:

1. Load prior decision (must not already be superseded/revoked)
2. Require non-empty `reason`
3. Re-verify authority (same rules as record)
4. OCC: optional `expectedVersion` → `VERSION_CONFLICT`
5. Atomic txn: prior → `superseded`; new decision with `supersedes` link, `status=accepted`
6. Audit `oa.decision.superseded` after persist

History remains listable; no in-place rewrite of the prior payload.

## Consistency model

| Store | Mechanism |
|-------|-----------|
| Decision/Confirmation | Single `MemoryDecisionStore` mutex + snapshot begin/commit/rollback |
| Project/LPS | Separate T-A1 mutex |
| Cycle/Epistemic | Separate T-A2 mutex |

Cross-store Decision↔LPS / Decision↔Epistemic is **best-effort after persist** (same pattern as T-A2 trajectory↔LPS). See **R-T-A3-2**.

## Failure modes

| Mode | detailCode | Behaviour |
|------|------------|-----------|
| Missing project | `PROJECT_NOT_FOUND` | Fail closed |
| Cycle wrong project | `CYCLE_PROJECT_MISMATCH` | Fail closed |
| Authority deny | `AUTHORITY_DENIED` | Fail closed + audit |
| Scope mismatch | `AUTHORITY_SCOPE_MISMATCH` | Fail closed |
| Idempotency clash | `CONFIRMATION_IDEMPOTENCY_CONFLICT` | Fail closed |
| Expired consume | `CONFIRMATION_EXPIRED` | Fail closed |
| Double consume | `CONFIRMATION_ALREADY_CONSUMED` | Fail closed |
| Concurrent grant | `STATE_CONFLICT` | One wins |
| `failNextSave` | `PERSISTENCE_FAILURE` | Full rollback |
| OCC supersede | `VERSION_CONFLICT` | Retryable |

## Critical cycle ack (reserve)

T-A2 `CreateCycle` leaves Critical as `proposed`. No public `AcknowledgeCriticalCycle` API exists. T-A3 records a decision linking `cycleInstanceId` **without** mutating cycle status (**R-T-A3-1**). Preferred foundation behaviour.
