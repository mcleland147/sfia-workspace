# 03 — Validation, security and failure modes

## Validation structurelle

- Parse JSON
- JSON Schema Draft-07 (schemas modeled Option A)
- `$ref` common (digest, identifier, timestamp, actor, provenance)
- `additionalProperties: false` sur le manifest

## Validation sémantique

- Cohérence pin ↔ manifest (id, version, digest)
- Digest recalculé
- Sources / allowlist interdites
- Status / freshness / compatibility
- Provenance présente
- `failurePolicy` non permissive

## Sécurité

- Allowlist registry stricte (entrées déclarées uniquement)
- Path traversal bloqué (`..`, absolu, escape root)
- Taille max manifest 256 KiB
- Lecture seule
- Deny-by-default
- Erreurs non bavardes (cause interne via `internalCauseRef` opaque)
- Pas de secrets dans fixtures
- Pas d’IAM / auth dans T-A0

## Résilience (fail-closed)

| Anomalie | Outcome |
|----------|---------|
| Package absent | `not_found` |
| JSON invalide | `invalid_manifest` |
| Schema | `schema_mismatch` |
| Digest | `digest_mismatch` |
| Source interdite | `source_not_allowed` |
| Version / status | `unsupported_version` |
| Stale | `stale_package` |
| IO | `internal_resolution_error` |

Aucun mode dégradé ne recharge la doctrine v2.6.

## Observabilité

Événement `oa.doctrine.resolution` : correlationId, packageId, version, suffixes digest, result, detailCode, durationMs, adapter.

Métriques candidates (non instrumentées) : `doctrine_resolution_total`, `_failed_total`, `_digest_mismatch_total`, `_schema_failure_total`, `_duration`.

## Performance (budgets candidats, non SLA)

- Résolution locale fixture : < 50 ms typique en tests
- Pas de cache (T-A0-D07) — correction fonctionnelle sans cache
