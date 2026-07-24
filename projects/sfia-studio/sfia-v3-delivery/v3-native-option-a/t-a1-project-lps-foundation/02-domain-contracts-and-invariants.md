# 02 — Domain contracts and invariants

## Architecture

Modular monolith (Option C) — module isolé `lib/oa/project`, sans branchement UI/session.

```
CreateProject
  → DoctrinePackageResolverPort (T-A0)
  → ProjectRepositoryPort + LivingProjectStateRepositoryPort (atomic)
  → ProjectAuditJournalPort

AppendLivingProjectStateVersion
  → optimistic expectedVersion === current.version
  → pin match Project.doctrinePackageRef (no re-resolve)
  → supersede previous + update Project.currentLpsVersionId
```

## Project (modeled 0.1.0-oa)

Required: `schemaVersion`, `projectId`, `title`, `status`, `createdAt`, `createdBy`.

Sur create réussi avec doctrine résolue :

- `status = active`
- `doctrinePackageRef` (resolved)
- `currentLpsVersionId`
- `provenance`
- `updatedAt`

Identité : `prj:…` (pattern identifier modeled).

## LivingProjectState

Required: `schemaVersion`, `lpsVersionId`, `projectId`, `version`, `status`, `objective`, `createdAt`, `createdBy`, `doctrinePackageRef`.

- Version initiale = `1`, `status = active`, `supersedesLpsVersionId` absent
- Append : `version = current + 1`, `supersedes` précédent, précédent → `superseded`
- `uiOwnership` toujours `false` quand présent
- Identité : `lps:…`

## Invariants

1. `schemaVersion === 0.1.0-oa`
2. Project `active` ⇒ DoctrinePackageRef `resolved`
3. Mutation LPS ⇒ nouvelle version (pas d’in-place silencieux)
4. `expectedVersion === current.version` sinon `LPS_VERSION_CONFLICT` → modeled `STATE_CONFLICT` (check **inside** txn/mutex)
5. Pin create : `resolver.resolve({pin})` ; seul `outcome === resolved` accepté
6. Pin append : égalité id+version+digest avec Project (pas de re-resolve obligatoire) — Option A
7. Provenance présente sur create/append (`prv:…`)
8. Snapshot sérialisé (champs stockés T-A1) ≤ `MAX_LPS_SNAPSHOT_BYTES` (256_000 UTF-8 bytes via `Buffer.byteLength(JSON.stringify(...), "utf8")`)
9. Idempotence optionnelle : même `idempotencyKey` → même Project
10. Create atomique Project + LPS v1 (rollback si échec)
11. Repos deep-clone (`structuredClone`) on read/write ; returned graphs cloned

## Erreurs

| Detail | Modeled `code` | retryable |
|--------|----------------|-----------|
| DOCTRINE_UNRESOLVED | `DOCTRINE_UNRESOLVED` | true |
| LPS_VERSION_CONFLICT | `STATE_CONFLICT` | true |
| PERSISTENCE_FAILURE | `STATE_CONFLICT` | true |
| PROJECT_NOT_FOUND / LPS_NOT_FOUND | `STATE_CONFLICT` | false |
| PROJECT_INVALID / LPS_INVALID / PROJECT_ALREADY_EXISTS | `STATE_CONFLICT` | false |

Detail codes hors enum ErrorRecord modeled → dette documentée (T-A1-D08). Clients doivent préférer `detailCode` pour distinguer NOT_FOUND vs conflict.