# 03 — Lifecycle and invariants

| Champ | Valeur |
|-------|--------|
| **Status enum source** | `execution-contract.schema.json` `properties.status.enum` |
| **Narrative source** | modeled `07-execution-contract-attempt-and-agent-model.md` |
| **Catalog** | modeled `09-command-event-error-and-transition-catalog.md` |
| **Statut** | **MODELED REWORK COMPLETED — runtime not started** |
| **Runtime** | **NOT IMPLEMENTED** |

## Status enum

1. `draft` 2. `proposed` 3. `validated` 4. `confirmation_required` 5. `confirmed`
6. `executing` 7. `completed` 8. `failed` 9. `cancelled` 10. `superseded`

## Ownership (Morris VALIDATED)

| Owner | Statuses / commands |
|-------|---------------------|
| **T-A4** | draft→confirmed ; cancelled (pre-exec) ; superseded ; Build / Validate / Confirm / Supersede / Cancel(pre-exec) |
| **T-A5** | selectedAgentRef ; StartExecution ; executing\|completed\|failed ; Cancel(post-start) ; RecordExecutionResult |

Aucune transition vers `executing` sous T-A4.

## Invariants

| Invariant | Layer |
|-----------|-------|
| MD Cursor = export G only | modeled + future runtime |
| caps + authority + stops mandatory | schema |
| Immutable after confirm except supersession | schema description + runtime |
| `supersessionReason` when superseding or superseded | schema if/then + non-whitespace pattern |
| No self-supersession | **runtime only** |
| Reverse supersededBy derived | **runtime only** |
| Confirmation consumed on confirmed | catalog + schema (confirmationRef) |
| Critical non-ack cannot confirm | **runtime** (R-T-A3-1 OPEN) |
| Decision freshness | **runtime** |

Full transition matrix: modeled `09-…`.
