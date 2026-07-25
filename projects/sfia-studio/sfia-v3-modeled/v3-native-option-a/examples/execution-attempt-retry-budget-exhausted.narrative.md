# Narrative — retry budget exhausted (runtime-only)

`RetryExecutionAttempt` creates a **new** Attempt with `retryOfAttemptId`, `retryIndex`, `maxRetriesBudget`.

When `retryIndex` would exceed `maxRetriesBudget` (or policy budget), runtime MUST refuse with `RETRY_BUDGET_EXHAUSTED`.

In-place retry of the same Attempt is forbidden (schema models new Attempt only).
