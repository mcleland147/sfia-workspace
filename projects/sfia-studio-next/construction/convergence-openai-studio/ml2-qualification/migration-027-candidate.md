# Migration 027 — derived_embedding_chunks (checkpoint A)

| Champ | Valeur |
|---|---|
| Statut | **CANDIDATE FINALISÉE — GO PRINCIPLE Morris — APPLY EN ATTENTE checkpoint A** |
| Fichier | `web/src/db/migrations/candidates/027_derived_embedding_chunks.sql` |
| Module runtime | `web/src/domains/knowledge/derived-embedding-pg.ts` (inactive tant que backend≠pg) |
| db-migrate.sh | **ne l'inclut pas** jusqu'au GO apply |

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

## GO apply requis

Checkpoint consolidé : `morris-checkpoint-027-and-live-20261127.md` Gate A.
