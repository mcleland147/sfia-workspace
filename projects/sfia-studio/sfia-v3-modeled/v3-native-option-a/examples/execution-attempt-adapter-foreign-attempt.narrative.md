# Narrative — adapter RecordResult on foreign Attempt (runtime-only)

`RecordExecutionResult` / `RecordExecutionFailure` may only be issued by the authenticated adapter bound to **its own** Attempt.

Schema cannot encode adapter binding. Runtime MUST refuse foreign Attempt writes → `AUTHORITY_DENIED` / `ATTEMPT_STATE_CONFLICT`.
