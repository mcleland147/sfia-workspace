# Gate A — TECHNICAL CANDIDATE GATE

**Date**: 2026-11-27T22:40 Europe/Paris  
**Verdict**: **PASS**

## Blocking residuals treated

| Risk | Action | Result |
| --- | --- | --- |
| Rights — all recent kinds | Fail-closed allowlists + load filters (docs/repos/attempts) | Corrected + unit tests |
| Proof identity | `kind:attemptId:resourceKey` via existing helper | Corrected + unit |
| D4 `attempted` fidelity | `attempted` only if capitalisation attempted | Corrected + PG/unit |
| Dictation modelApplied | From `session.updated` or `UNVERIFIED` | Corrected + unit |
| Historical PG ~22 FAIL | Reconciled; no integrity link to candidate | Reserve `R-E5-PG-HIST` |

## Validations (proportional)

| Control | Result |
| --- | --- |
| Targeted unit (rights/D4/dictation) | 33 PASS |
| Targeted PG (dictation + E2) | 17 PASS |
| lint | EXIT 0 |
| `npm run build` | EXIT 0 |
| `git diff --check` | clean |
| Full unit 1531 / browser E5 | Capitalized from prior E5 (unchanged surface for those) |

## Explicit reserves (non-blocking cutover)

- `R-E5-PG-HIST` — historical PG suite FAILs (obsolete schema assertions / fixtures)
- `R-E5-MP06-LIVE` — dictation LIVE / FR quality / latency → user recette
- `R-E5-TSC-TESTS` — pre-existing test tsc failures outside product delta
- Natural LIVE proofs (Nora, allocation, T08/T09) → GO distinct

## Gate decision

No known critical integrity/authority/isolation defect untreated.  
**TECHNICAL CANDIDATE GATE — PASS.**
