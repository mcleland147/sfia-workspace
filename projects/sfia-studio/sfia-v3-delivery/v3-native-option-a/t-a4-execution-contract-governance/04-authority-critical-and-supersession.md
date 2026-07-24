# 04 — Authority, Critical, and supersession

| Champ | Valeur |
|-------|--------|
| **Statut** | **MODELED REWORK COMPLETED — runtime not started** |
| **Upstream** | T-A3 Decision / Confirmation / Authority (merged) |

## Supersession — RESOLVED BY MODELED REWORK (R-T-A4-1)

| Requirement | Modeled status |
|-------------|----------------|
| `supersedesExecutionContractId` | **PRESENT** (`^xct:`) |
| `supersessionReason` | **PRESENT** (conditional required) |
| `SupersedeExecutionContract` | **PRESENT** in catalog |
| `ExecutionContractSuperseded` | **PRESENT** in catalog |
| Reverse link | **Derived at runtime** (not stored) |
| Self-supersession | Documented runtime reject |

## Critical — R-T-A3-1 remains OPEN

Critical cycle stays `proposed` without public ack API. T-A4 must **fail-closed**: no `confirmed` while Critical non-acknowledged. T-A4 does not invent Critical ack.

## Authority — RESOLVED BY CANONICAL T-A3 MAPPING (R-T-A4-3)

`requiredAuthority` enum:

| Value | Rule |
|-------|------|
| `N1` / `N2` / `N3` | T-A3 levels ; `N3` ≠ Morris |
| `MORRIS` | N3 verified ∧ `canActAsMorris=true` |

Consume T-A3 `AuthorityResolverPort` only — no second authority system.

## Confirmation — T-A4-D07 APPROVED

Consumed when contract becomes `confirmed` via `ConfirmExecutionContract`. Build/Validate do not consume.
