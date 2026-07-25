# Narrative — result_pending must not complete contract (D06)

While Attempt is `result_pending`, ExecutionContract **stays `executing`**.

Forbidden: speculative `completed` from `result_pending` without durable `RecordExecutionResult` success (`resultRef` on Attempt `succeeded`).

Schema: `succeeded` requires `resultRef`+`completedAt`; `result_pending` requires `resultPendingAt` and does not map to contract completed.
