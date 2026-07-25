# 05 — Security, errors, audit, and performance

| Champ | Valeur |
|-------|--------|
| **Statut** | **MODELED REWORK COMPLETED — runtime not started** · security/audit still **PLANNED ONLY** for product code |
| **Code / ports / tests product** | **NONE** |
| **Modeled tests** | ExecutionContract governance ajv suite (pack `tests/`) |

## Security (planned runtime)

Unchanged posture vs arbitration pack: never trust client authority ; no secrets in clear ; adapter must not mutate F fields ; consume T-A3.

## Errors (modeled enum — reference)

Relevant codes unchanged: `CONFIRMATION_REQUIRED` · `DECISION_REQUIRED` · `CAPABILITY_MISSING` · `AUTHORITY_DENIED` · `STATE_CONFLICT` · `EXECUTION_*` · `DOCTRINE_UNRESOLVED` · `REPLAN_REQUIRED`.

No product ErrorRecord mapper shipped.

## Audit (modeled catalog aligned)

Events now include:

- `ExecutionContractBuilt` · `ExecutionContractValidated` · `ExecutionContractConfirmationRequired`
- `ExecutionContractConfirmed` · `ExecutionContractSuperseded` · `ExecutionContractCancelled`
- T-A5: `ExecutionStarted` / `Failed` / `Completed`

Runtime audit journal: **NOT IMPLEMENTED**.

## Performance (planned)

In-memory foundation pattern until DATABASE SELECTED ; idempotencyKey / version OCC fields exist on schema ; no benchmarks.
