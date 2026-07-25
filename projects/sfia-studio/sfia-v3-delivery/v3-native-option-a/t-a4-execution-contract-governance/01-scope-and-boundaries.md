# 01 — Scope and boundaries

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A4 — ExecutionContract governance |
| **Statut** | **MODELED REWORK CORRECTED AND VALIDATED — runtime not started** |
| **Code** | **NONE** (`app/lib/oa/execution*` absent) |

## In-scope (modeled this cycle)

| Item | Status |
|------|--------|
| ExecutionContract schema rework (`0.2.0-oa`) | **DONE** (modeled) |
| Supersession fields + SupersedeExecutionContract + events | **DONE** (modeled) |
| requiredAuthority enum N1\|N2\|N3\|MORRIS | **DONE** (modeled) |
| ConfirmExecutionContract + confirmation consume rule | **DONE** (modeled) |
| T-A4/T-A5 ownership documentation | **DONE** (modeled) |
| Examples + ajv tests | **DONE** (modeled) |

## In-scope (runtime — NOT this cycle)

| Item | Source | Delivery status |
|------|--------|-----------------|
| ExecutionContract governance runtime | Slice T-A4 | **NOT STARTED** |
| Proof: immutability tests (product) | Exit criteria T-A4 | **NOT RUN** |
| Rollback: supersede contract (product) | Exit criteria | **UNBLOCKED at modeled** — runtime pending validation gate |

## Explicit exclusions

| Excluded | Notes |
|---------|-------|
| `app/lib/oa/execution*` / `app/__tests__/oa/**` | Forbidden this rework |
| T-A5 Agent adapter / Attempt / timeout | Separate slice; **NONE** |
| Evidence / ReviewBundle / ClaimEvaluation | T-A6+ |
| UI / SQL / IAM / cutover | Out |
| package.json / method / prompts | Forbidden |
| Push / PR / merge | **NONE** |

## Dependency

| Upstream | State |
|----------|-------|
| T-A0…T-A3 | Merged foundations |
| R-T-A3-1 Critical ack | **OPEN** — fail-closed confirm rule documented |

## Catalog / naming (post-rework)

| Name | Exists? | Owner |
|------|---------|-------|
| `BuildExecutionContract` | Yes | T-A4 |
| `ValidateExecutionContract` | Yes | T-A4 |
| `ConfirmExecutionContract` | **Yes (added)** | T-A4 |
| `SupersedeExecutionContract` | **Yes (added)** | T-A4 |
| `SelectExecutionAgent` | Yes | **T-A5** |
| `StartExecution` | Yes | **T-A5** |
| `CancelExecution` | Yes | Dual-context T-A4 pre-exec / T-A5 post-start |
| `RecordExecutionResult` | Yes | T-A5 |
| Prompt-only names (`RecordExecutionContract`, …) | No | Catalog wins (D09) |

Historical stop condition (arbitration cycle) is preserved in git history / prior docs; superseded by Morris decisions + this modeled rework.
