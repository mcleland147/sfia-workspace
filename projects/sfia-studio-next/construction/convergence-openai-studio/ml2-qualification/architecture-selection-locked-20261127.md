# ML2 — Architecture sélection verrouillée (GO Morris)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| Campagne cumulative | `ml2-i2-docintel-20261127` (aucune remise à zéro) |
| GO | **MACRO-LOT 2 ARCHITECTURE SELECTION AND INTEGRATED DELIVERY** |
| WEB LIVE | OFF |
| RECETTE | protégée |
| Persistance externe ops | interdite |
| Migration | **aucun GO implicite** — voir § Persistance |

## Décisions structurantes validées

| Domaine | Décision Morris |
|---|---|
| Responses + `semantic-qualification` | **KEEP** (cœur Nora) |
| Decisions | **ADAPT** jugements bornés démontrés + incertitude explicite + **fallback Responses** |
| Recherche | **E = lexical + embeddings** — index local dérivé |
| Vector Stores / File Search / fileId durable | **DEFER** |
| Vision ponctuelle | **ADAPT** docs complexes / scans / schémas |
| PDF extract + visionneuse | **KEEP** |
| D3 V1 | **KEEP** |
| HumanDecision D6 | **KEEP** (autorité inchangée ; OpenAI Decisions ≠ D6) |

## Invariants avant mobilisation Nora

Droits projet/préparation · révocation · fraîcheur de version · provenance exacte — filtrés **avant** injection outil / contexte.

## Persistance locale — mécanisme physique

### Retenu pour Delivery I2 (sans migration)

**Index dérivé fichier**, reconstructible, hors PostgreSQL produit :

| Élément | Valeur |
|---|---|
| Racine | `web/.sfia-derived/embedding-index/<projectId>/` |
| Manifeste | `manifest.json` — `sourceId`, `projectId`, `preparationId`, `contentFingerprint`, `model`, `dims`, `revoked`, `deleted`, `versionLabel`, `indexRef`, `updatedAt` |
| Vecteurs | `vectors.jsonl` — une ligne `{ sourceId, vector[] }` (float64 JSON) |
| Reconstruction | relecture D4 autorisée → re-embed → rewrite atomique (tmp + rename) |
| Hors index | sources revoked / deleted / autre projet / droits insuffisants |
| pgvector | **non utilisé** |
| Hosted VS / fileId | **non** |

Ce chemin satisfait CONV-F23 (reconstructible) sans extension PG ni nouvelle table.

### Candidat migration 027 — **NON appliqué** (attente GO explicite)

Si Morris autorise ultérieurement une table durable :

```sql
-- CANDIDATE ONLY — not applied
-- 027_derived_embedding_chunks.sql
CREATE TABLE IF NOT EXISTS derived_embedding_chunks (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id),
  preparation_id text NOT NULL,
  source_id text NOT NULL,
  source_kind text NOT NULL,
  content_fingerprint text NOT NULL,
  model text NOT NULL,
  dims integer NOT NULL,
  vector_json jsonb NOT NULL,
  revoked boolean NOT NULL DEFAULT false,
  deleted boolean NOT NULL DEFAULT false,
  version_label text,
  index_ref text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (project_id, source_id, content_fingerprint, model)
);
CREATE INDEX IF NOT EXISTS derived_embedding_chunks_project_idx
  ON derived_embedding_chunks (project_id, revoked, deleted);
```

**Aucun `db:migrate` 027 dans ce Delivery.** Feature flag produit lit uniquement l'index fichier tant que GO migration absent.

## Enveloppe cumulative préservée

| | |
|---|---|
| campaignId | `ml2-i2-docintel-20261127` |
| HTTP plancher reconstruite | ≈85 / 236 |
| Nora réservée | **40 contacts** — seuls contacts Nora autorisés pour preuve E2E |
| Cleanup réservé restant | 16 |
| Renouvellement campagne | **interdit** |
