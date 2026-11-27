# Migration 027 candidate — derived_embedding_chunks

| Champ | Valeur |
|---|---|
| Statut | **CANDIDATE — AUCUN GO — NON APPLIQUÉE** |
| Fichier | `web/src/db/migrations/candidates/027_derived_embedding_chunks.sql` |
| db-migrate.sh | **ne l'inclut pas** |

## Comparaison fichier vs PG

| Critère | Fichier `.sfia-derived/` (actuel) | PG 027 (candidat) |
|---|---|---|
| Intérité transactionnelle | Faible (2 renames) | Forte (TX avec D4 writes) |
| Concurrence | Non verrouillée | Isolée par DB |
| Droits | Filtre app `projectId` | FK `projects` + `owner_pilot_id` |
| Reconstruction | Rewrite fichier | UPSERT / rebuild SQL |
| Sauvegarde | Hors backup PG | Inclus dump PG DEV/RECETTE |
| Hébergement multi-instance | Non partagé | Partagé |
| Complexité | Simple | Migration + dual-read |

**Recommandation produit :** adopter 027 dès GO Morris ; conserver file backend comme fallback jusqu'à apply.

## Delta exact

Voir SQL candidat (table + 2 indexes, **sans pgvector**).

## Rollback

```sql
DROP TABLE IF EXISTS derived_embedding_chunks;
```

## Intérêt

Évite d'industrialiser un stockage fichier transitoire pour une capacité transverse multi-parcours.

## GO requis

Morris doit autoriser explicitement `db:migrate` 027 sur DEV avant tout apply. RECETTE/STABLE inchangés sans gates séparés.
