# Migration 027 — derived_embedding_chunks (checkpoint A)

| Champ | Valeur |
|---|---|
| Statut | **APPLIED ON DEV — Morris GO Checkpoint A 2026-11-27** |
| Fichier | `web/src/db/migrations/027_derived_embedding_chunks.sql` (+ candidate archive) |
| Module runtime | `web/src/domains/knowledge/derived-embedding-pg.ts` — ops default `BACKEND=pg` |
| db-migrate.sh | **inclut 027** (appliqué DEV ; aucune migration supplémentaire sans GO) |

## Décision de principe Morris

Persistance cible = projection dérivée PostgreSQL (base existante DEV :5433).  
Aucune seconde base. Pas de pgvector requis.

## Comparaison fichier vs PG

| Critère | Fichier `.sfia-derived/` | PG 027 |
|---|---|---|
| Intérité transactionnelle | Faible (2 renames) | Forte |
| Concurrence | Non verrouillée | Isolée DB |
| Droits | Filtre app | FK + **revalidation D4/D9 obligatoire** (owner_pilot_id ≠ auth) |
| Reconstruction | Rewrite fichier | UPSERT SQL |
| Sauvegarde | Hors dump PG | Inclus dump |
| Multi-instance | Non | Oui |

## Après apply (GO A)

1. `SFIA_DERIVED_EMBEDDING_BACKEND=pg`
2. Retirer le fichier du chemin **opérationnel** (pas de dual-read/write)
3. Fallback fonctionnel = lexical exact autorisé
4. Conserver preuves expérimentales fichier hors ops

## Rollback

```sql
DROP TABLE IF EXISTS derived_embedding_chunks;
```

## GO apply — exécuté

Checkpoint consolidé : `morris-checkpoint-027-and-live-20261127.md` Gate A — **APPLIED**. Aucune migration 028+ sans nouveau GO.
