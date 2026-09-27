# 09 — Known Gaps, Reserves & Current Boundaries

## Hard boundaries

- Runtime v3 **NON ADOPTED**
- This corpus does not change product behavior
- PocketTasks bugs / MW5 defects **not fixed** here
- No CI workflow changes

## Current campaign findings (verified against repo where possible)

| Finding | Class | Notes |
|---|---|---|
| Natural active-cycle materialization routing corrected (#532) | CONFIRMED | continuity tests on main |
| Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
| REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
| Fake may derive `note-de-cadrage.md`; REAL may leave null | CONFIRMED Fake / PROBABLE REAL | Fake code path exists |
| MW5 may re-challenge structurally resolved continuation | PROBABLE | seam exists; journey observation |
| Local tests pre-satisfy challenge assessment | PROBABLE | fixtures |
| E2E backbone can bypass natural conversation front door | CONFIRMED | e2e API routes |
| Pending Proposal / reinstruction continuity = downstream impact seam | CONFIRMED structural | process-local proposalStore |
| EC→Attempt→Evidence→Recovery single lineage needs re-proof | NOT PROVEN as one journey | next macro |

## Next macro

`PRODUCT-CYCLE-E2E-STABILIZATION-01` must use this reference for impact analysis, then resume PocketTasks as acceptance journey.

## Uncertainties

- Dependency graph is representative, not exhaustive of every file.
- Failure-mode catalog is selected, not every string code in repo.
- Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.

## Harvest follow-up absorbed

Post-foundation repository harvest confirmed Product SQLite M1–M8 topology and clarified ABSENT/PARTIAL aggregates (ContractResult/LR tables absent; MaturityAssessment/ExecutionRun memory-primary; Hybrid Context composer-only). Volumes 02 and 06 updated accordingly. No product behavior change.

