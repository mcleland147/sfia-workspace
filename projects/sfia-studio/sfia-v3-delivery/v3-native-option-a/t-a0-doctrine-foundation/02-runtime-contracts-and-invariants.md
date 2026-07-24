# 02 — Runtime contracts and invariants

## Architecture

Modular monolith (Option C hybride) — nouveau module isolé `lib/oa/doctrine`, sans branchement global session.

```
ResolveDoctrinePackage
  → DoctrinePackageRepositoryPort (registry local)
  → SchemaValidationPort (AJV Draft-07)
  → DigestVerificationPort (SHA-256)
  → AuditJournalPort
```

## Registry

Fichier `registry.json` (schemaVersion `0.1.0-oa-registry`) :

- `doctrinePackageId`, `version`, `digest`, `relativePackageDir`, `status`
- `relativePackageDir` relatif au root registry, deny `..`, deny `method/**`
- Package dir contient `manifest.json` en lecture seule

## Digest (T-A0-D03 candidate)

- Algorithme: SHA-256
- Matériau: JSON canonique (clés triées) du manifest **sans** le champ `digest`
- Format: `sha256:` + 64 hex minuscules
- Vérifications: pin.digest ≡ registry.digest ≡ manifest.digest ≡ digest(calculé)
- Indépendant des chemins absolus

## DoctrinePackageRef

Entrée = **pin** `{ doctrinePackageId, version, digest }`.
Sortie succès = Ref complète `{ …, resolvedAt, resolver, status: "resolved" }` + provenance.

## Invariants

1. `schemaVersion === 0.1.0-oa`
2. `compatibility.studioNativeV3 === true`
3. `legacyV26Fallback` absent ou `false` (jamais `true`)
4. Aucune source / allowlist / path `method/**`, v2.6, OPS1 doctrine
5. `failurePolicy` si présent doit être fail-closed
6. Status consommable: `published` | `deprecated` (`draft`/`revoked` refusés)
7. `freshness === stale` → fail-closed (`CONTEXT_STALE`)
8. Provenance requise (règle sémantique T-A0)
9. Aucun fallback vers `method/**`, templates Cursor, v2.6, OPS1, `canonicalPaths`

## Erreurs

Detail codes T-A0 mappés vers ErrorRecord modeled :

| Detail | Modeled `code` |
|--------|----------------|
| DOCTRINE_* (sauf STALE) | `DOCTRINE_UNRESOLVED` |
| CONTEXT_STALE | `CONTEXT_STALE` |

Les detail codes plus fins (`DOCTRINE_DIGEST_MISMATCH`, …) sont candidats d’extension modeled (T-A0-D06).
