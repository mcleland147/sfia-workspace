# T-A4 — ExecutionContract Governance (Delivery Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A4 — ExecutionContract governance |
| **Profil** | Critical |
| **Gate delivery candidate** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A4` (**NOT CONSUMED**) |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a4-execution-contract-governance` |
| **Base / HEAD (pre-docs)** | `37d4036bb0811575bd112a30e97139f75c7acb3e` (T-A3 merge on `origin/main`) |
| **Code produit `app/lib/oa/execution*`** | **NONE** — delivery stopped before implementation |
| **Schemas modeled** | **NOT MODIFIED** this cycle |
| **Push / PR / merge** | **NONE** |
| **T-A5** | **NONE** (not started) |
| **Statut pack** | **INCOMPLETE / ARBITRATION REQUIRED** |
| **Verdict** | **SFIA STUDIO V3-NATIVE OPTION A T-A4 DELIVERY INCOMPLETE — MORRIS ARBITRATION REQUIRED** |

## Why this pack exists

T-A4 delivery was **stopped** after discovery. Modeled `ExecutionContract` exists, but exit criteria and catalog/schema are insufficient to implement without inventing protocol. This pack documents findings and open questions only.

## Discovery stop (finding)

**EXECUTIONCONTRACT CONTRACT REQUIRES MORRIS ARBITRATION**

Cited blockers (do not invent around them):

1. Schema has status `superseded` but **no** `supersedes*` field; catalog has **no** `SupersedeExecutionContract` — yet T-A4 rollback is “supersede contract”.
2. Ownership of `executing` \| `completed` \| `failed` and `StartExecution` / `SelectExecutionAgent` between T-A4 and T-A5 is underspecified.
3. `requiredAuthority` is a free string (no enum) — closed vocabulary would invent.
4. Prompt-named types `ExecutionScope` / `AuthorizedAction` / `RecordExecutionContract` do **not** exist; catalog name is `BuildExecutionContract`.
5. No prior T-A4 delivery pack / protocol — inventing one is forbidden.

## Contenu

1. [01-scope-and-boundaries.md](./01-scope-and-boundaries.md)
2. [02-canonical-contract-mapping.md](./02-canonical-contract-mapping.md)
3. [03-lifecycle-and-invariants.md](./03-lifecycle-and-invariants.md)
4. [04-authority-critical-and-supersession.md](./04-authority-critical-and-supersession.md)
5. [05-security-errors-audit-and-performance.md](./05-security-errors-audit-and-performance.md)
6. [06-delivery-validation-and-morris-decision-pack.md](./06-delivery-validation-and-morris-decision-pack.md)

## Anti-claims

- Pas T-A4 **IMPLEMENTED** / **COMPLETE** / **VALIDATED** / **MERGED**
- Pas `app/lib/oa/execution*` shipped
- Pas schemas modeled edited
- Pas GO DELIVERY T-A4 **CONSUMED**
- Pas READY FOR DELIVERY GLOBAL / OPTION A IMPLEMENTED
- Pas DATABASE SELECTED / SCHEMAS ADOPTED runtime
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas UI / Evidence / ReviewBundle / ClaimEvaluation
- Pas T-A5 **AUTHORIZED** / **LAUNCHED** / **IMPLEMENTED**
- Pas inventer `SupersedeExecutionContract`, `supersedes*`, enum `requiredAuthority`, ou types prompt absents
- Pas push / PR / merge this branch
