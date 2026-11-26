# Convergence OpenAI–Studio — As-built Macro-lot 1 (operational completion)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 (operational completion) |
| Statut | OPERATIONAL DEV FOUNDATION — **NOT ADOPTED** · **NO RELEASE** |
| HEAD entrée | `a095171e` |
| Contrats | `1e2e188d` blobs exacts |
| Migration DEV | `023_provider_admin_usage_snapshots.sql` appliquée (PG 16.16) |
| BUILD_ID | `cUOHTek8qSni3vSYXOTWZ` |
| Hors GO | Admin LIVE · WEB LIVE · UX Figma apply · tracing/continuité ON opérationnel · push projet · RECETTE |

## Cartographie KEEP / ADAPT / REPLACE / BUILD / DEFER

| Domaine | Classe | État opérationnel |
|---|---|---|
| Tracing | ADAPT | ALS ; fail-closed OFF ; **vrai SDK** + oracle réseau (0 export distant) |
| OBS | KEEP | Causalité métier |
| Frontier | ADAPT | Agrégat PARTIAL si UNKNOWN↔MEASURED ; stream UNKNOWN |
| Collecteur Admin | BUILD | Modes `TEST_SUBSTITUTED` / `LIVE` séparés ; gate LIVE à l'émission ; transport officiel HTTPS |
| Persistance | BUILD | Collecteur isolé → PG DEV → repository → FinOps API |
| FinOps | ADAPT | Somme org refusée sans projet attribué ; devise non inventée ; évidence complète |
| Continuité | ADAPT | `bindProviderContinuityContext` appelé depuis Nora LIVE + conducteur D3 ; mode OFF |
| WEB | KEEP OFF | Dossier A3 |
| Decisions / retrieval / audio / L2 | DEFER | Macro-lots 2/3 |

## Flux démontré

```
Collecteur isolé (SFIA_ADMIN_COLLECTOR_PROCESS=1)
  → transport TEST_SUBSTITUTED | LIVE(gated)
  → provider_admin_collection_runs + provider_admin_usage_snapshots (PG DEV)
  → provider-admin-usage-repository (lecture produit)
  → usage-read-service / API FinOps
  → UI consommation existante (non-régression)
```

## Sécurité Admin

- Présence d'un transport **ne** lève **pas** le GO LIVE.
- `TEST_SUBSTITUTED` : transport marqué ; aucune clé Admin réelle requise.
- `LIVE` : `liveAdminCallsAuthorized` + clé + transport `markLiveAdminTransport` + destination `https://api.openai.com/v1` + `redirect:error`.
- Produit Next ne charge jamais `OPENAI_ADMIN_KEY`.
- Rollback non destructif : `SFIA_ADMIN_SNAPSHOT_READ=0`.

## Migration DEV

- Backup : `.tmp-sfia-review/pg-backup/sfia_next_dev_pre_023.dump` (pg_dump -Fc, listable).
- Additive exclusively ; ledger `provider_usage_observations` préservé.
- UNIQUE NULLS NOT DISTINCT sur identité canonique snapshot.
- Rôles NOLOGIN : `sfia_admin_collector` (écriture), `sfia_finops_reader` (lecture).

## Gates

**Levé (DEV only) :** G-PROVIDER-SNAPSHOT-MIGRATION

**Fermés :** G-ADMIN-SECRET · G-ADMIN-LIVE · G-FINOPS-UX · G-WEB-PUBLIC/A3 · G-TRACING-LOCAL · G-NATIVE-CONTINUITY · G-PROVIDER-LIVE-QUALIFICATION · RECETTE/promotions

## Preuves clés

- 44 tests unit/intégration ciblés PASS (admin, frontier, tracing mock+real SDK, PG snapshots).
- Collecteur dry-substituted → row `provider_admin_collection_runs` en DEV.
- DEV runtime : `127.0.0.1:3100` BUILD_ID `cUOHTek8qSni3vSYXOTWZ` pid qualify.
- RECETTE : pid inchangé, worktree figé distinct.
