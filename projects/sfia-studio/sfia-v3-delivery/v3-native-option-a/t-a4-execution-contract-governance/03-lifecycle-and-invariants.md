# 03 — Lifecycle and invariants

| Champ | Valeur |
|-------|--------|
| **Status enum source** | `execution-contract.schema.json` `properties.status.enum` |
| **Narrative source** | modeled `07-execution-contract-attempt-and-agent-model.md` |
| **Architecture source** | tech-arch `06-execution-contract-agent-and-adapter-architecture.md` · slices `12-…` |
| **Runtime** | **NOT IMPLEMENTED** |

## Status enum (authoritative for modeled contract)

From schema (order as listed):

1. `draft`
2. `proposed`
3. `validated`
4. `confirmation_required`
5. `confirmed`
6. `executing`
7. `completed`
8. `failed`
9. `cancelled`
10. `superseded`

Modeled narrative chain (07):  
`draft → proposed → validated → confirmation_required → confirmed → executing → completed|failed|cancelled|superseded`.

Design pack (07) uses a shorter chain (`draft → proposed → confirmed → executing → …`) — **not** schema-authoritative; schema wins for field presence; transition graph remains **OPEN** for Morris where packs diverge.

## Documented invariants (modeled / architecture — planned only)

| Invariant | Source | Delivery |
|-----------|--------|----------|
| MD Cursor = export G only; adapter does not mutate action/scope/authority/capabilities/stops/evidenceRequirements | modeled 07 · arch 06 | **NOT IMPLEMENTED** |
| caps + authority + stops mandatory | modeled 07 · schema required | schema only |
| Immutable after confirm except explicit supersession | schema description · modeled 07 | **BLOCKED** (no supersedes* / no supersede command) |
| completed ⇒ résultats + preuves min | modeled 07 | T-A5/T-A6 boundary **OPEN** |
| retry ⇒ distinct Attempt | modeled 07 | T-A5 |
| capability ≠ authority; miss → stop | modeled 07 | planned consume of T-A3 + errors |

## T-A4 vs T-A5 ownership — OPEN QUESTIONS

Architecture slices:

| Slice | Contenu | Preuve | Rollback |
|-------|---------|--------|----------|
| **T-A4** | ExecutionContract governance | immutability tests | supersede contract |
| **T-A5** | Agent adapter / Attempt / timeout | timeout≠success | cancel attempt |

Catalog commands spanning both:

| Command | Plausible owner | Arbitration needed? |
|---------|-----------------|---------------------|
| `BuildExecutionContract` | T-A4 | Low (name exists) |
| `ValidateExecutionContract` | T-A4 | Low |
| Confirm path (via T-A3 Confirmation) | T-A3 consume + T-A4 status | Medium |
| `SelectExecutionAgent` | T-A4 or T-A5 | **YES — OPEN** |
| `StartExecution` | T-A4 or T-A5 | **YES — OPEN** |
| Statuses `executing` \| `completed` \| `failed` | T-A4 and/or T-A5 | **YES — OPEN** |
| `CancelExecution` / `RecordExecutionResult` | Likely T-A5 | **YES — OPEN** |
| Attempt lifecycle / timeout | T-A5 | T-A5 only when authorized |

**No product decision taken this cycle.** Implementing either split without Morris would invent ownership.

## Immutability vs supersession

Schema: `immutableAfterConfirm` const `true`; description allows *explicit supersession*.  
Without `supersedes*` + supersede command, “rollback: supersede contract” cannot be implemented faithfully → see [04](./04-authority-critical-and-supersession.md).
