# 03 — Persistence, consistency and failure modes

## Persistance (T-A1-D06)

**In-memory only** — `MemoryProjectStore` + repositories.

- **NOT DATABASE SELECTED**
- Candidat réversible (swap ports → SQLite/autre sans changer application)
- Pas de migration SQL
- Pas de filesystem snapshot store dans T-A1

## Unité atomique

`MemoryProjectStore.runInTransaction` :

1. snapshot maps
2. exécute saves Project + LPS (+ idempotency)
3. commit ou rollback complet

Échec LPS après Project → aucun Project résiduel.

## Concurrence (T-A1-D04)

Optimistic lock sur append :

- entrée `expectedVersion`
- compare à LPS courant
- mismatch → `LPS_VERSION_CONFLICT` + audit `oa.lps.version_conflict`
- pas d’écrasement silencieux

## DoctrinePackage pin (T-A1-D05)

| Moment | Comportement |
|--------|--------------|
| Create | resolve T-A0 ; store Ref resolved |
| Append | pin optionnel doit matcher Ref projet ; pas de re-resolve |

## Observabilité

| Event | Contenu |
|-------|---------|
| `oa.project.created` | projectId, lpsVersion, result, detailCode, durationMs, correlationId |
| `oa.lps.version_appended` | projectId, lpsVersion, previousLpsVersionId, durationMs |
| `oa.lps.version_conflict` | expected/current version |
| `oa.project.load_failed` | detailCode |

**Jamais** le snapshot LPS complet.

## Failure modes

| Anomalie | Detail |
|----------|--------|
| Id invalide | `PROJECT_INVALID` / `LPS_INVALID` |
| Doublon | `PROJECT_ALREADY_EXISTS` |
| Doctrine fail | `DOCTRINE_UNRESOLVED` |
| Projet absent | `PROJECT_NOT_FOUND` |
| Version stale | `LPS_VERSION_CONFLICT` |
| Pin append mismatch | `DOCTRINE_UNRESOLVED` |
| Save échoue | `PERSISTENCE_FAILURE` (+ rollback) |
| Snapshot trop grand | `LPS_INVALID` |

## Sécurité

- Pas d’IAM complète
- Actor/provenance requis
- Pas de contenu doctrinal dans logs
- Pas de path absolu métier
- Domaine erreur `C` (LPS / Project foundation)
- Pas d’autorité agent / capability
