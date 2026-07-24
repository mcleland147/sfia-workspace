# 02 — Decision and Confirmation contracts

## HumanDecision

Required: `decisionId`, `projectId`, `subject`, `options[]`, `selectedOptionId`, `actor`, `authority`, `status`, `effectiveAt`, `reversible`, `schemaVersion`.

Statuses: `proposed` · `required` · `accepted` · `refused` · `amended` · `superseded` · `revoked`.

### Rules

- Recommendation ≠ decision: `recommended` on an option never auto-selects.
- Structuring (`authority === morris`): verified **N3** + `canActAsMorris: true` on registry evidence.
- `system_non_structuring` only when `nonStructuring: true` on the request.
- One current `accepted` decision per `(projectId, subject)` — auto-supersede prior or refuse.
- Clone-before-validate for `options` / `reservations` (T-A2 B1 pattern).
- Boundary returns are `structuredClone`d.

## Confirmation

Required: `confirmationId`, `level`, `actionRef`, `requestedBy`, `requestedTo`, `scope`, `status`, `idempotencyKey` (min 8), `schemaVersion`.

Statuses: `requested` · `granted` · `refused` · `expired` · `cancelled` · `consumed` · `superseded`.

### Rules

- Confirmation ≠ silent history rewrite.
- Expired confirmations are not consumable.
- Double consume forbidden.
- Idempotency: same key + same payload → reuse; different payload → `CONFIRMATION_IDEMPOTENCY_CONFLICT`.
- Grant: verified level ≥ confirmation.level (N3 may grant N2; N2 may not grant N3).

## Integration

| Concern | Behaviour |
|---------|-----------|
| Project | `getProject` must succeed |
| Cycle | If `cycleInstanceId` set, `GetCycle` + same `projectId`; **no status mutation** |
| Epistemic | After accept, optional new `DecisionRef` item id via `UpdateEpistemicState` |
| LPS | Optional `decisionIds` on append (non-breaking carry-forward) |

## Error mapping (detail → modeled)

| Detail | Modeled `ErrorRecord.code` |
|--------|----------------------------|
| `DECISION_REQUIRED` | `DECISION_REQUIRED` |
| `CONFIRMATION_*` (most) | `CONFIRMATION_REQUIRED` / `STATE_CONFLICT` |
| `AUTHORITY_DENIED` / `AUTHORITY_SCOPE_MISMATCH` | `AUTHORITY_DENIED` |
| Conflicts / invalid / persistence | `STATE_CONFLICT` |
