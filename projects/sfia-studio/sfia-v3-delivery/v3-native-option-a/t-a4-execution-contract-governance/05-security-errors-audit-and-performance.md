# 05 — Security, errors, audit, and performance

| Champ | Valeur |
|-------|--------|
| **Statut** | **PLANNED ONLY — NOT IMPLEMENTED** |
| **Code / ports / tests** | **NONE** this cycle |

This document records intended fail-closed posture for a future T-A4 implementation **after** Morris arbitration. Nothing below is shipped runtime behavior.

## Security (planned)

From modeled `10-validation-versioning-provenance-and-security-rules.md` (conceptual):

| Topic | Planned posture | Implemented? |
|-------|-----------------|--------------|
| Secrets in Evidence / contract payloads | Forbidden in clear | No |
| Protected paths | Adapter must not expand beyond contract | No |
| Client-claimed authority | Never trust (consume T-A3) | No |
| Adapter mutates contract fields | Denied (F/G split) | No |
| PII / redaction / retention | Conceptual only | No |
| IAM product choice | Out of scope | No |

## Errors (modeled enum — reference only)

From `schemas/error/error-record.schema.json` (relevant subset for execution governance):

| Code | Likely T-A4 relevance | Implemented mapping? |
|------|----------------------|----------------------|
| `CONFIRMATION_REQUIRED` | Pre-confirm gate | No |
| `DECISION_REQUIRED` | Missing decision link | No |
| `CAPABILITY_MISSING` | Caps check | No (T-A4/T-A5 OPEN) |
| `AUTHORITY_DENIED` | Authority / scope | No |
| `STATE_CONFLICT` | Concurrent mutate / OCC | No |
| `EXECUTION_FAILED` | Post-start | Likely T-A5 — OPEN |
| `EXECUTION_TIMEOUT` | Attempt | T-A5 |
| `EVIDENCE_INCOMPLETE` | completed gate | T-A5/T-A6 |
| `DOCTRINE_UNRESOLVED` | Package pin | No |
| `REPLAN_REQUIRED` | Supersession path | Blocked by supersession GAP |

No T-A4 detail→modeled ErrorRecord mapper shipped.

## Audit (planned)

Architecture / modeled narrative expect append-only audit covering contract build/confirm/execution. Catalog events present today:

- `ExecutionContractBuilt` / `ExecutionContractConfirmed`
- `ExecutionStarted` / `ExecutionFailed` / `ExecutionCompleted`

**Absent:** supersession audit event for contracts.

Planned event names for a future implementation must follow Morris-approved catalog rework — not invented in this pack as implemented.

## Performance (planned)

| Concern | Planned note | Implemented? |
|---------|--------------|--------------|
| In-memory store (foundation pattern T-A0–T-A3) | Likely until DATABASE SELECTED | No |
| Immutability / clone-before-validate | Match T-A3 adversarial lessons | No |
| Idempotency via `idempotencyKey` | Schema field exists | No |
| OCC via `version` | Schema field exists | No |
| Load / latency targets | Not specified for T-A4 | No |

## Explicit non-claims

- Pas security **IMPLEMENTED**
- Pas audit journal **IMPLEMENTED** for ExecutionContract
- Pas performance benchmarks
- Pas error mapper **SHIPPED**
