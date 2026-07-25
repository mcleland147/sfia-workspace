# Narrative — launch-then-persist FORBIDDEN (D05)

Invariant: **persist-then-launch** only.

Forbidden: adapter launch before durable Attempt `accepted` persistence.

Schema: `running` (and other post-launch statuses) require `launchedAt`+`startedAt`; `accepted` has no `launchedAt`. Runtime MUST never emit `running` without prior `accepted` persist.

Catalog: **launch-then-persist** interdit.
