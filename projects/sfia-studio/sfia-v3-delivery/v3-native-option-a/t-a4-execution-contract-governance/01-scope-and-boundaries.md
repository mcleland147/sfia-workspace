# 01 — Scope and boundaries

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A4 — ExecutionContract governance |
| **Statut** | **INCOMPLETE / ARBITRATION REQUIRED** |
| **Code** | **NONE** |

## In-scope (intended T-A4, not implemented)

Per technical architecture `12-delivery-slices-dependencies-and-technical-gates.md`:

| Item | Source | Delivery status |
|------|--------|-----------------|
| ExecutionContract governance | Slice table T-A4 | **NOT IMPLEMENTED** |
| Proof: immutability tests | Exit criteria T-A4 | **NOT RUN** (no code) |
| Rollback: supersede contract | Exit criteria T-A4 | **BLOCKED** — schema/catalog gap |

Intended governance concerns (documented only):

- Build / validate / confirm native `ExecutionContract` (domain F)
- Immutable after confirm except explicit supersession
- Consume T-A3 confirmation / authority (no redefinition)
- Cursor Markdown = adapter export only (domain G) — not SoT

## Explicit exclusions

| Excluded | Notes |
|----------|-------|
| `app/lib/oa/execution*` product code | Delivery stopped |
| Modeled schema edits | Forbidden this cycle |
| T-A5 Agent adapter / Attempt / timeout | Separate slice; **NONE** |
| Evidence / ReviewBundle / ClaimEvaluation | T-A6+ |
| UI Option A | Out of slice |
| Cutover v2.6 / MethodMode / OPS1 | T-A7 |
| SQL / migrations / IAM / DATABASE SELECTED | Not this cycle |
| Inventing protocol / closed authority vocabulary | Forbidden |
| Push / PR / merge | **NONE** |

## Dependency

| Upstream | State |
|----------|-------|
| T-A0 Doctrine | Merged foundation |
| T-A1 Project/LPS | Merged foundation |
| T-A2 Cycle/Trajectory/Epistemic/CKC | Merged foundation |
| T-A3 Decision/Confirmation/Authority | Merged @ `37d4036…` |

Open inherited reserve relevant to T-A4: **R-T-A3-1** (Critical cycle stays `proposed`; no public Critical acknowledge API).

## Catalog / naming boundary

| Name | Exists? | Source |
|------|---------|--------|
| `BuildExecutionContract` | Yes (command catalog) | `09-command-event-error-and-transition-catalog.md` |
| `ValidateExecutionContract` | Yes (command catalog) | same |
| `SelectExecutionAgent` | Yes (command catalog) | same — **T-A4 vs T-A5 ownership OPEN** |
| `StartExecution` | Yes (command catalog) | same — **T-A4 vs T-A5 ownership OPEN** |
| `CancelExecution` | Yes (command catalog) | same |
| `RecordExecutionResult` | Yes (command catalog) | same — likely T-A5+ |
| `SupersedeExecutionContract` | **NO** | Absent from catalog |
| `RecordExecutionContract` | **NO** | Prompt-only name; not catalog |
| `ExecutionScope` / `AuthorizedAction` | **NO** | Prompt-only types; not modeled entities |

## Stop condition hit

Inventing any of: supersession command/fields, authority enum, prompt types, or T-A4/T-A5 split = **forbidden**. Delivery stopped for Morris arbitration.
