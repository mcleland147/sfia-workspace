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

### Ops (après GO A 2026-11-27) — PostgreSQL 027 APPLIED DEV

**Index dérivé ops unique = table `derived_embedding_chunks`** (`SFIA_DERIVED_EMBEDDING_BACKEND=pg`).

| Élément | Valeur |
|---|---|
| Store | PostgreSQL DEV :5433 · migration **027 APPLIED** |
| Reconstruction | relecture D4 autorisée → re-embed → replace projection PG |
| Hors index | sources revoked / deleted / autre projet / droits insuffisants / fingerprint stale |
| pgvector | **non utilisé** (jsonb vectors) |
| Hosted VS / fileId | **non** (DEFER) |

### Fichier — hors ops (tests unitaires seulement)

`web/.sfia-derived/` lorsque `SFIA_DERIVED_EMBEDDING_BACKEND=file` — **pas** de dual-write ops.

### Migration 027 — APPLIED DEV (GO A)

SQL appliqué via `db-migrate.sh` sous GO Morris A. Schema candidate historique conservée sous `candidates/` / `db/migrations/027_*.sql`. **Aucune migration supplémentaire** sans nouveau GO.

## Enveloppe cumulative préservée

| | |
|---|---|
| campaignId | `ml2-i2-docintel-20261127` |
| HTTP plancher reconstruite | ≈85 / 236 |
| Nora réservée | **40 contacts** — seuls contacts Nora autorisés pour preuve E2E |
| Cleanup réservé restant | 16 |
| Renouvellement campagne | **interdit** |
