# 03 — Persistence, consistency and failure modes

## Persistence

- Store mémoire partagé `MemoryCycleStore` (cycles + trajectories + epistemic) avec `runInTransaction` mutex (même pattern T-A1)
- Repos deep-clone (`structuredClone`) on read/write/return
- LPS linkage via T-A1 `AppendLivingProjectStateVersion` (store Project séparé) — ordre fixe : cycle/trajectory d’abord, LPS ensuite ; rollback cycle si LPS échoue avant commit cycle
- **NOT DATABASE SELECTED** (T-A2-D06) — réversible

## Concurrence

| Opération | Mécanisme |
|-----------|-----------|
| ProposeTrajectoryVersion | `expectedVersion === current.version` **inside** mutex |
| CreateInitialTrajectory | refuse si trajectoire déjà liée au projet |
| LPS link | `expectedLpsVersion` → `LPS_VERSION_CONFLICT` |
| Double-append concurrent | un succès + un conflict (traj ou LPS) |

## Failure modes

| Mode | Comportement |
|------|--------------|
| Project absent | `PROJECT_NOT_FOUND` |
| Critical sans justification | `CYCLE_CRITICAL_JUSTIFICATION_REQUIRED` |
| Deps cycliques | `TRAJECTORY_INVALID` |
| Snapshot traj > 256KB | `TRAJECTORY_INVALID` |
| Version traj stale | `TRAJECTORY_VERSION_CONFLICT` |
| Version LPS stale | `LPS_VERSION_CONFLICT` |
| Promotion Hypothesis→DecisionRef | `EPISTEMIC_PROMOTION_FORBIDDEN` |
| CKC absent | résolution `unavailable` (ok guidance) — pas de blocage CreateCycle |
| Save forcé (test hook) | `PERSISTENCE_FAILURE` + rollback |

## Observabilité

Events audit minimaux : `oa.cycle.qualified|created`, `oa.trajectory.created|version_proposed|version_conflict`, `oa.epistemic.updated`, `oa.ckc.resolved` — sans payload trajectoire/épistémique.
