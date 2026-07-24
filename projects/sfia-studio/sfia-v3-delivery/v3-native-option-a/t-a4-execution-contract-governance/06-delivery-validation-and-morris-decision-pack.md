# 06 — Delivery validation and Morris decision pack

| Champ | Valeur |
|-------|--------|
| **Verdict** | **SFIA STUDIO V3-NATIVE OPTION A T-A4 DELIVERY INCOMPLETE — MORRIS ARBITRATION REQUIRED** |
| **Discovery finding** | **EXECUTIONCONTRACT CONTRACT REQUIRES MORRIS ARBITRATION** |
| **Gate delivery** | `GO DELIVERY … T-A4` — **NOT CONSUMED** |
| **Product code** | **NONE** (`app/lib/oa/execution*` absent) |
| **Modeled schemas** | **NOT MODIFIED** |
| **Push / PR / merge** | **NONE** |
| **T-A5** | **NONE** |
| **Tests T-A4** | **0** (no suite) |

## Stop evidence (do not invent)

| # | Stop reason | Evidence |
|---|-------------|---------|
| 1 | Supersession required by exit criteria; schema has status `superseded` only | `12-delivery-slices-…` rollback; schema properties lack `supersedes*` |
| 2 | No `SupersedeExecutionContract` in catalog | `09-command-event-error-and-transition-catalog.md` |
| 3 | T-A4 vs T-A5 ownership of `executing`\|`completed`\|`failed` and `StartExecution`/`SelectExecutionAgent` underspecified | slices T-A4/T-A5 + catalog |
| 4 | `requiredAuthority` free string — closing enum invents | schema `requiredAuthority` |
| 5 | Prompt types `ExecutionScope`/`AuthorizedAction`/`RecordExecutionContract` do not exist | catalog + modeled entities |
| 6 | No prior T-A4 delivery protocol pack to extend | delivery tree had no `t-a4-*` before this arbitration pack |

## D01–D10 — OPEN QUESTIONS / REWORK recommendations (Morris)

All items are **OPEN**. Recommendations are arbitration options, **not** accepted decisions and **not** authorization to implement.

| ID | Topic | Status | Recommendation to Morris (rework / decide) |
|----|-------|--------|--------------------------------------------|
| **T-A4-D01** | Add `supersedes*` (and/or successor id) to ExecutionContract schema | **OPEN QUESTION** | **REWORK modeled** before T-A4 code — align with Decision/LPS pattern |
| **T-A4-D02** | Add `SupersedeExecutionContract` (+ events) to command/event catalog | **OPEN QUESTION** | **REWORK modeled catalog** so rollback exit criterion is implementable |
| **T-A4-D03** | T-A4 ownership ends at `confirmed` (+ immutability); `executing`+ = T-A5 | **OPEN QUESTION** | Prefer explicit slice cut; document in arch `12` if accepted |
| **T-A4-D04** | Alternate: T-A4 owns status machine through `completed`/`failed`; T-A5 owns Attempt only | **OPEN QUESTION** | Competing cut to D03 — Morris must pick one |
| **T-A4-D05** | Owner of `SelectExecutionAgent` / `StartExecution` | **OPEN QUESTION** | Bind to chosen D03 or D04; do not implement both ambiguously |
| **T-A4-D06** | `requiredAuthority` closed vocabulary vs free string + T-A3 mapping table | **OPEN QUESTION** | **REWORK** schema enum **or** publish normative mapping; inventing enum in code forbidden |
| **T-A4-D07** | Confirmation consume timing (confirm contract vs start execution) | **OPEN QUESTION** | Consume T-A3 only; specify when `confirmationRef` must be `consumed` |
| **T-A4-D08** | Critical cycles + R-T-A3-1: allow contracts while cycle `proposed`? | **OPEN QUESTION** | Keep R-T-A3-1 OPEN or require Critical ack API before T-A4 |
| **T-A4-D09** | Prompt names (`RecordExecutionContract`, `ExecutionScope`, `AuthorizedAction`) vs catalog (`BuildExecutionContract`, string `scope`/`action`) | **OPEN QUESTION** | Treat catalog/schema as SoT; retire/alias prompt names explicitly |
| **T-A4-D10** | Resume T-A4 delivery only after D01–D09 + modeled rework landed | **OPEN QUESTION** | **HOLD implementation** until arbitration closes blockers; then new GO DELIVERY |

## Reserves

| ID | State | Note |
|----|-------|------|
| **R-T-A3-1** | **OPEN** (inherited) | Critical stays `proposed` |
| **B5** / **R1** / **R-T-A3-2..4** | **OPEN** (inherited) | Not closed by this pack |
| **R-T-A4-1** (proposed label) | **OPEN** | Supersession schema/catalog GAP |
| **R-T-A4-2** (proposed label) | **OPEN** | T-A4/T-A5 lifecycle ownership |
| **R-T-A4-3** (proposed label) | **OPEN** | `requiredAuthority` vocabulary |

Proposed R-T-A4-* labels are documentation handles only — not closed reserves and not implementation tickets.

## Anti-claims

- Pas T-A4 **IMPLEMENTED** / **COMPLETE** / **PASSED** / **VALIDATED BY MORRIS**
- Pas GO DELIVERY T-A4 **CONSUMED**
- Pas product `oa/execution*` / immutability tests / supersede runtime
- Pas modeled schema or catalog **edited** this cycle
- Pas D01–D10 **ACCEPTED**
- Pas T-A5 **AUTHORIZED** / **LAUNCHED**
- Pas push / PR / merge
- Pas READY FOR DELIVERY GLOBAL / OPTION A IMPLEMENTED / DATABASE SELECTED

## Exact verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A4 DELIVERY INCOMPLETE — MORRIS ARBITRATION REQUIRED**

Discovery finding (cite): **EXECUTIONCONTRACT CONTRACT REQUIRES MORRIS ARBITRATION**
