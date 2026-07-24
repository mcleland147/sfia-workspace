# 04 — Authority, Critical, and supersession

| Champ | Valeur |
|-------|--------|
| **Statut** | Gaps documented — **NOT IMPLEMENTED** |
| **Upstream** | T-A3 Decision / Confirmation / Authority (merged) |

## Supersession GAP (blocking)

| Requirement | Evidence | Gap |
|-------------|----------|-----|
| T-A4 rollback = **supersede contract** | tech-arch `12-delivery-slices-…` | Exit criterion |
| Status includes `superseded` | ExecutionContract schema enum | Status only |
| `supersedes*` field on ExecutionContract | Schema properties | **ABSENT** |
| `SupersedeExecutionContract` command | Catalog `09-…` | **ABSENT** |
| Events for supersede | Catalog events list `ExecutionContractBuilt/Confirmed` only (no Superseded) | **ABSENT** |
| Contrast: Decision supersession | `HumanDecision.supersedes` + T-A3 `SupersedeHumanDecision` | Pattern exists elsewhere — **not** copied here without Morris |

**Finding (discovery stop):**  
**EXECUTIONCONTRACT CONTRACT REQUIRES MORRIS ARBITRATION** — cannot implement “supersede contract” rollback without inventing fields/commands.

### Allowed without invention (none sufficient alone)

- Setting `status=superseded` with no link field would orphan history and break the modeled ID strategy (“supersession via champs `supersedes*`” — modeled `02-…`).
- Soft-delete / in-place mutate confirmed contracts contradicts immutability.
- Reusing Decision supersede APIs for contracts would invent cross-aggregate protocol.

## Critical — R-T-A3-1 (inherited OPEN)

| Reserve | Meaning | T-A4 impact |
|---------|---------|-------------|
| **R-T-A3-1** | No public T-A2 Critical acknowledge API; Critical cycle remains `proposed` when decision recorded | Linking `cycleInstanceId` on a contract to a Critical cycle does **not** imply cycle acknowledged. T-A4 must not invent Critical ack. |

Any T-A4 rule that requires Critical `acknowledged` / `active` before build/confirm is **OPEN** until Morris resolves R-T-A3-1 or accepts contracts against `proposed` Critical cycles.

## Authority consume (T-A3) — planned only

T-A3 provides:

- `AuthorityResolverPort` — never trust client `authorityLevel` / `displayName`
- Confirmation grant / consume / expire
- Audit `oa.authority.verified`, confirmation consumed, etc.

ExecutionContract schema:

- `requiredAuthority`: **free string** (`minLength: 1`), example `"morris-N3"`
- `confirmationRef`: optional identifier
- `decisionRefs`: optional array

### OPEN (would invent if closed now)

1. Map free-string `requiredAuthority` → T-A3 levels (`N1`/`N2`/`N3`) + Morris gate?
2. Must `confirmationRef` be granted then **consumed** at confirm/start (which slice)?
3. Exact string vocabulary (`morris-N3` vs `N3` vs other)?
4. Scope match: contract `scope` string vs Confirmation / AuthorityEvidence `scope`?

**Recommendation posture:** consume T-A3 verifier; do **not** invent a second authority system; do **not** invent enum without Morris + modeled rework.

## Anti-invention rules (this cycle)

- Do not add `supersedes*` to schema in delivery code
- Do not add `SupersedeExecutionContract` to catalog in delivery docs as if it existed
- Do not invent `requiredAuthority` enum
- Do not auto-acknowledge Critical cycles
