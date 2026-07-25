# Narrative — expired selection (schema-valid accepted; Start must refuse)

An Attempt may remain `accepted` with `selectionExpiresAt` in the past.
JSON Schema Draft-07 cannot compare timestamps to "now".

Runtime / future delivery MUST refuse `StartExecution` with `AGENT_SELECTION_EXPIRED`
when `selectionExpiresAt < now`, then require a fresh `SelectExecutionAgent`.

This file is documentation only — not a JSON Schema example.
