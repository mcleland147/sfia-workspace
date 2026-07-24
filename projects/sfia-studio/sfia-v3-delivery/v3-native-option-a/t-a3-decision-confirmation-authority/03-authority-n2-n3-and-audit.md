# 03 — Authority N2/N3 and audit

## AuthorityResolverPort (critical)

In-memory registry of `AuthorityEvidence`:

| Field | Notes |
|-------|-------|
| `evidenceId` | Registry key |
| `actorId` | Bound actor |
| `level` | `N1` \| `N2` \| `N3` |
| `scope` | Exact match required |
| `issuedAt` / `expiresAt?` | Expiry checked |
| `source` | Provenance string |
| `canActAsMorris?` | **Separate from N3** |

### Never trusted

- `request.authorityLevel` / `ActorReference.authorityLevel` from client
- `displayName === "Morris"`
- `actorId` containing `"morris"`
- Injected N3 in confirmation grant body (`claimedAuthorityLevel`)

### Verify result reasons

`verified` · `no_evidence` · `expired` · `level_insufficient` · `scope_mismatch` · `morris_gate_denied` · `evidence_not_found` · `actor_mismatch`

Scope mismatch → detail `AUTHORITY_SCOPE_MISMATCH` → modeled `AUTHORITY_DENIED`.

## Matrix

| Action | Required verified level | Morris gate |
|--------|-------------------------|-------------|
| Decision `delegated` | ≥ N2 | No |
| Decision `morris` | ≥ N3 | **Yes** (`canActAsMorris`) |
| Decision `system_non_structuring` | ≥ N1 + flag | No |
| Confirm N2 | ≥ N2 | No |
| Confirm N3 | ≥ N3 | No |

**N3 does NOT automatically mean Morris gate.** Documented and enforced.

## Audit (after successful persist)

| Event | When |
|-------|------|
| `oa.decision.recorded` | RecordHumanDecision |
| `oa.decision.superseded` | SupersedeHumanDecision |
| `oa.confirmation.requested` | RequestConfirmation |
| `oa.confirmation.granted` | GrantConfirmation |
| `oa.confirmation.refused` | RefuseConfirmation |
| `oa.confirmation.consumed` | ConsumeConfirmation |
| `oa.confirmation.cancelled` | CancelConfirmation |
| `oa.authority.verified` | Every verify path (ok or deny) |

Proof model: N2/N3 verification is audited; rollback of decisions is via **supersede** (immutable history).
