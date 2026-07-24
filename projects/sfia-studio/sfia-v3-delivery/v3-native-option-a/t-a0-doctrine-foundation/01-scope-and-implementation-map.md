# 01 — Scope and implementation map

## Inclus (T-A0)

- Domain: `DoctrinePackageManifest`, `DoctrinePackageRef` / pin, `Digest`, invariants, erreurs structurées
- Application: `ResolveDoctrinePackage`, `ValidateDoctrinePackage`
- Ports: repository, resolver, schema validation, digest verification, clock, audit journal
- Infrastructure: registry filesystem local borné, AJV Draft-07, SHA-256, logs structurés
- Fixtures package + registry de test
- Tests unitaires / intégration fail-closed + anti-legacy
- Documentation delivery T-A0

## Exclus

Project / LPS · CycleInstance · CKC runtime complet · HumanDecision · Confirmation · ExecutionContract · agents · Evidence · ReviewBundle · ClaimEvaluation · UI Option A · cutover v2.6 · suppression MethodMode / OPS1 · migration SQL · IAM · DB sélection

## Chemins

| Rôle | Path |
|------|------|
| Module | `projects/sfia-studio/app/lib/oa/doctrine/**` |
| Fixtures | `…/lib/oa/doctrine/fixtures/**` |
| Tests | `…/app/__tests__/oa/doctrine/**` |
| Schemas consommés (lecture) | `sfia-v3-modeled/v3-native-option-a/schemas/**` |
| Docs | `sfia-v3-delivery/v3-native-option-a/t-a0-doctrine-foundation/**` |

## Qualification actifs existants

| Actif | Qualification | Usage T-A0 |
|-------|---------------|------------|
| `lib/platform/sfia-context/canonicalPaths` | REPLACE (futur) / HISTORICAL-ONLY pour doctrine v3 | **Non utilisé** comme autorité |
| `sourceLoader` / `contextResolver` | REPLACE (futur) | **Non utilisés** |
| `sessionContext` | KEEP (hors T-A0) | Non touché |
| AJV@6 transitif (lockfile) | ADAPT | SchemaValidationPort |
| Pattern `EventSink` / logs JSON | ADAPT | `AuditJournalPort` minimal |
| `D1Error` / `Ops1Error` | KEEP | Non réutilisés ; erreurs OA dédiées |
| OPS1 | HISTORICAL-ONLY / isolation | Lecture seule pour anti-tests |
| Schemas modeled OA | KEEP + consommation bornée T-A0 | Contrat de référence |
| `method/**` | PROTECTED | Interdit comme source |

## Distinction des identités

```
Git / package source (publication)
  ≠ datastore runtime (hors T-A0)
  ≠ identité DoctrinePackage (doctrinePackageId + version + digest)
```

Le path filesystem du registry n’est **jamais** un identifiant métier.
