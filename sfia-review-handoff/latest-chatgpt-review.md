# SFIA REVIEW PACK — FULL
# MACRO-LOT 2 — PRODUCT-WIDE CAPABILITIES IMPLEMENTED AND BEHAVIOR PROVEN

- **Generated (UTC):** 2026-11-27T05:50:55Z
- **Objective:** Final ML2 product delivery after Morris GO A (027 DEV) then GO B (max 30 LIVE).
- **Prior handoffs capitalized:** 64977d30 · 8e1d82dc · dfd1114f · 6c4044ba
- **Campaign:** ml2-i2-docintel-20261127 — Gate B httpDelta=9 (90→99) within 30
- **Local HEAD:** `bca4a4e5f219dcf0a2e3cba47e1c24551be6dc9d`
- **BUILD_ID:** `qvIWhDeJwvskHV5DSrfE8` · digest `4a08741ce51450cee8270d689f6523a908212b4f87eb611604fb0348390ffcf1` · pid `58000`
- **Verdict:** MACRO-LOT 2 — PRODUCT-WIDE CAPABILITIES IMPLEMENTED AND BEHAVIOR PROVEN — MORRIS EXIT ACCEPTANCE PROPOSED
- **Fake/Real:** REAL LIVE Gate B + REAL PG DEV 027 + UNIT 46 + HTTP smoke :3100; Playwright browser smoke ABORTED (timeout) — login/portfolio HTTP 200 with BUILD_ID in HTML

---

## 0. Local Git Truth Check

| Field | Value |
|---|---|
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `bca4a4e5f219dcf0a2e3cba47e1c24551be6dc9d` |
| Baseline | `e784232b0745bc7f8be87947a6f92225a6df85c1` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Tree web | `26aa28e989454c6107d8395a1928de2b53c5c0c5` |
| Project push | **NONE** |
| Schema | **027 applied DEV** |
| Lane | DEV |
| RECETTE | protected :3200/:5434 |

### Commits e784..HEAD
```text
bca4a4e5 feat(ml2): apply 027 PG derived index and Gate B product LIVE qualification
f372616e docs(ml2): bump registre to v0.22 checkpoint A+B
be7c2a87 fix(ml2): harden rights, judgment, Frontier protect; finalize 027 checkpoint
8b75249a feat(ml2): product-wide wire hybrid search, Decisions, Vision; protect LIVE campaign
56572cf8 docs(ml2): pin final LIVE manifesto Git Truth refs
49333f09 docs(ml2): finalize LIVE campaign manifesto and seed DEV journal baseline
70291410 feat(ml2): frontier family envelopes, corrected corpora, LIVE manifesto preflight
```

### Diff stat
```text
.../as-built-macro-lot-2-20261127.md               |  58 ++
 .../cloture-macro-lot-1.md                         |  11 +-
 ...ion-specialisee-et-intelligence-documentaire.md |  14 +-
 .../contrat-fonctionnel.md                         |   2 +
 .../convergence-openai-studio/contrat-technique.md |   6 +-
 .../architecture-selection-locked-20261127.md      |  86 ++
 ...ast-radius-inventory-final-delivery-20261127.md |  47 +
 .../ml2-qualification/corpus-decisions-labels.json |  71 +-
 .../corpus-pdf-vision-oracle.json                  |  36 +-
 .../ml2-qualification/corpus-retrieval-oracle.json | 105 ++-
 .../finops-reconcile-audit-20261127.md             |  27 +
 .../live-campaign-manifest-candidate.md            | 103 +++
 .../live-campaign-manifest-final.md                | 186 ++++
 .../live-campaign-remainder-20261127.md            |  32 +
 .../live-gate-b-emission-plan-20261127.md          |  55 ++
 .../ml2-qualification/migration-027-candidate.md   |  41 +
 .../morris-checkpoint-027-and-live-20261127.md     | 115 +++
 .../product-consumer-cartography-20261127.md       |  32 +
 .../ml2-qualification/protocole-qualification.md   |   5 +-
 .../selection-checkpoint-ml2-i2-20261127.md        |  82 ++
 .../construction/delivery-history.md               |  37 +
 ...5-registre-couverture-et-revue-developpement.md |   2 +-
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   3 +-
 .../ml2-frontier-preflight-concurrency-restart.mts | 304 +++++++
 .../web/scripts/ml2-gate-b-product-live.mts        | 361 ++++++++
 .../ml2-generate-synthetic-document-artefacts.py   | 338 +++++++
 .../web/scripts/ml2-i2-bounded-live-campaign.mts   | 973 +++++++++++++++++++++
 .../web/scripts/ml2-i2-finops-reconcile.mts        | 154 ++++
 .../scripts/ml2-i2-integrated-delivery-qualify.mts | 581 ++++++++++++
 .../ml2-seed-synthetic-journal-baseline.mts        | 276 ++++++
 .../scripts/ml2-verify-synthetic-pdf-extract.mts   |  48 +
 .../projects/[projectId]/journal/search/route.ts   |  14 +
 .../db/migrations/027_derived_embedding_chunks.sql |  44 +
 .../candidates/027_derived_embedding_chunks.sql    |  44 +
 .../src/domains/conversation/bounded-judgment.ts   | 527 +++++++++++
 .../web/src/domains/conversation/d4-read-tools.ts  |  89 ++
 .../web/src/domains/conversation/git-read-tools.ts |  82 +-
 .../conversation/provider-emission-frontier.ts     | 436 +++++++--
 .../domains/documents/document-vision-punctual.ts  | 126 +++
 .../domains/knowledge/derived-embedding-index.ts   | 248 ++++++
 .../src/domains/knowledge/derived-embedding-pg.ts  | 173 ++++
 .../domains/knowledge/derived-embedding-service.ts | 392 +++++++++
 .../domains/knowledge/hybrid-knowledge-search.ts   | 150 ++++
 .../web/src/domains/knowledge/journal.ts           |  51 +-
 .../web/src/domains/knowledge/service.ts           |  13 +
 .../domains/proofs/d8-cognitive-criterion-eval.ts  |  76 ++
 .../web/tests/unit/ml2-bounded-judgment.test.ts    |  79 ++
 .../tests/unit/ml2-derived-embedding-index.test.ts | 169 ++++
 .../tests/unit/ml2-derived-rights-rebuild.test.ts  |  46 +
 .../web/tests/unit/ml2-product-wiring.test.ts      |  95 ++
 50 files changed, 6922 insertions(+), 123 deletions(-)
```

### Name-status
```text
A	projects/sfia-studio-next/construction/convergence-openai-studio/as-built-macro-lot-2-20261127.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/cloture-macro-lot-1.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/cognition-specialisee-et-intelligence-documentaire.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/contrat-technique.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/architecture-selection-locked-20261127.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/blast-radius-inventory-final-delivery-20261127.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/corpus-decisions-labels.json
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/corpus-pdf-vision-oracle.json
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/corpus-retrieval-oracle.json
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/finops-reconcile-audit-20261127.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/live-campaign-manifest-candidate.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/live-campaign-manifest-final.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/live-campaign-remainder-20261127.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/live-gate-b-emission-plan-20261127.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/migration-027-candidate.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/morris-checkpoint-027-and-live-20261127.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/product-consumer-cartography-20261127.md
M	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/protocole-qualification.md
A	projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/selection-checkpoint-ml2-i2-20261127.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
A	projects/sfia-studio-next/web/scripts/ml2-frontier-preflight-concurrency-restart.mts
A	projects/sfia-studio-next/web/scripts/ml2-gate-b-product-live.mts
A	projects/sfia-studio-next/web/scripts/ml2-generate-synthetic-document-artefacts.py
A	projects/sfia-studio-next/web/scripts/ml2-i2-bounded-live-campaign.mts
A	projects/sfia-studio-next/web/scripts/ml2-i2-finops-reconcile.mts
A	projects/sfia-studio-next/web/scripts/ml2-i2-integrated-delivery-qualify.mts
A	projects/sfia-studio-next/web/scripts/ml2-seed-synthetic-journal-baseline.mts
A	projects/sfia-studio-next/web/scripts/ml2-verify-synthetic-pdf-extract.mts
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/journal/search/route.ts
A	projects/sfia-studio-next/web/src/db/migrations/027_derived_embedding_chunks.sql
A	projects/sfia-studio-next/web/src/db/migrations/candidates/027_derived_embedding_chunks.sql
A	projects/sfia-studio-next/web/src/domains/conversation/bounded-judgment.ts
M	projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
M	projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
M	projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
A	projects/sfia-studio-next/web/src/domains/documents/document-vision-punctual.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/derived-embedding-index.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/derived-embedding-pg.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/derived-embedding-service.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/hybrid-knowledge-search.ts
M	projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
M	projects/sfia-studio-next/web/src/domains/knowledge/service.ts
M	projects/sfia-studio-next/web/src/domains/proofs/d8-cognitive-criterion-eval.ts
A	projects/sfia-studio-next/web/tests/unit/ml2-bounded-judgment.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml2-derived-rights-rebuild.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml2-product-wiring.test.ts
```

### Worktree
```text
M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/web/.sfia-derived/
```

---

## 0b. §9.1 champs obligatoires
1. Date/heure: `2026-11-27T05:50:55Z` UTC
2. Git Truth: §0
3. Sources: SEF/Roadmap/DATA-01/SEM/ENV-01/D1–D9/R4/Nora/FinOps/OBS/contrats/architecture lock/cartography/027/remainder/as-built
4. Actions: GO A apply 027 · PG-only ops · GO B LIVE ≤30 · rebuild DEV · HTTP smoke · FULL handoff
5. Créés/modifiés: name-status §0
6. Diff stat: §0
7. Validations: unit 46 · Gate B LIVE · PG integrity · build Next · login/portfolio 200
8. Garde-fous: WEB OFF · Admin unused · RECETTE intact · no project push · campaign not renewed
9–14. Pack réinitialisé/full/mono-cycle/confirmé
15. Réserves: §15
16. Décisions Morris: exit acceptance
17. Coverage: created=yes modified=yes synthesis-only=**no**
18. Handoff: required publish-in-cycle L3 — filled after publish
19. Verdict: §16
20. Fake/Real: oui — REAL PG+LIVE+build; browser Playwright SUBSTITUTED (HTTP smoke)

---

## 1. Architecture lock

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


## 2. As-built

# As-built — Macro-lot 2 (Intelligence documentaire) — Product-wide integration

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` (cumulative, non renouvelée) |
| Architecture | [architecture-selection-locked-20261127.md](./ml2-qualification/architecture-selection-locked-20261127.md) |
| Cartographie | [product-consumer-cartography-20261127.md](./ml2-qualification/product-consumer-cartography-20261127.md) |
| Migration 027 | **APPLIED DEV** — [migration-027-candidate.md](./ml2-qualification/migration-027-candidate.md) |
| Checkpoint | [morris-checkpoint-027-and-live-20261127.md](./ml2-qualification/morris-checkpoint-027-and-live-20261127.md) · GO A+B exécuté |
| Gate B plan/report | [live-gate-b-emission-plan-20261127.md](./ml2-qualification/live-gate-b-emission-plan-20261127.md) · evidence `gate-b-report.json` |
| Reliquat LIVE | HTTP **99**/236 after Gate B (delta 9 ≤ 30) |
| FinOps audit | [finops-reconcile-audit-20261127.md](./ml2-qualification/finops-reconcile-audit-20261127.md) |
| WEB LIVE | OFF |
| RECETTE | protégée |
| Candidat | BUILD_ID `qvIWhDeJwvskHV5DSrfE8` · digest `4a08741c…` · DEV pid 58000 |

## Livrables code (product raccordements)

| Module / surface | Rôle |
|---|---|
| `derived-embedding-index.ts` | Index fichier local + lifecycle (ops jusqu'à GO A) |
| `derived-embedding-service.ts` | Rebuild **admissible-only** · hybrid + **rights revalidation** · Frontier fetch |
| `derived-embedding-pg.ts` | Store PG inactif jusqu'à `BACKEND=pg` |
| `hybrid-knowledge-search.ts` | Fusion + `allowedSourceIds` |
| `bounded-judgment.ts` | Validation stricte type/choix · pas p=1 inventé · fallback p=0 |
| `document-vision-punctual.ts` | Vision ponctuelle bytes locaux |
| `d4-read-tools.searchProjectResources` | **ADAPT** semanticSupplement (flag) |
| `journal/search` API | **ADAPT** queryVector embed (flag) |
| `knowledge/service.capitalizeAcquis` | revoke superseded in derived index |
| `git-read-tools.read_git_pdf` | Vision scan/sparse/schema + Frontier client |
| `d8-cognitive-criterion-eval` | Bounded judgment via Frontier client |
| Frontier | protect **générique** (`protectPersisted` / env) — pas d'id hardcodé |
| Flags OFF by default | `SFIA_DERIVED_EMBEDDING_SEARCH`, `SFIA_BOUNDED_JUDGMENT`, `SFIA_DOCUMENT_VISION_PUNCTUAL` |

## Persistance

- **Ops unique:** PostgreSQL `derived_embedding_chunks` (`SFIA_DERIVED_EMBEDDING_BACKEND=pg`)
- Fichier : hors chemin opérationnel (tests unitaires `BACKEND=file` seulement)
- Index ≠ vérité métier · droits via D4/D9 revalidation
- Backup pre-027 : `.sfia-evidence/db-backups/sfia_next_dev_pre_027_*.dump` · restore probe 194 projects

## CONV-F21…F26

| ID | Statut | Preuve |
|---|---|---|
| F21 | PASS_WITH_RESERVE | LIVE 12/12 + module fallback ; AMB calibration residual |
| F22 | PASS_ARCHITECTURE_E | Lexical + emb ; VS DEFER |
| F23 | PASS_LOCAL_INDEX | Unit lifecycle + cleanup VS 404 ; PG 027 pending GO |
| F24 | PASS | LIVE Vision 6/6 ; product Vision wired behind flag |
| F25 | PARTIAL→INTEGRATION | Adapter E2E earlier ; product tools now wired (flag) — full Studio parcours LIVE needs Morris GO on remainder |
| F26 | PASS_ATTRIBUTED | Ledger + reconcile ; product ops record on rebuild |

## Hors scope / réserves

- Activation permanente flags OFF jusqu'à gate
- Migration 027 sans GO
- Nouvelle émission LIVE sans GO reliquat
- Macro-lot 3


## 3. Cartography

# ML2 — Cartographie produit des consommateurs

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 |
| HEAD baseline | `e784232b` → local `56572cf8` + worktree delivery |
| Statut | PRODUCT INTEGRATION INSTRUCTION |

## Capacité → consommateurs

| Capacité | Consommateurs | Action |
|---|---|---|
| Lexical + embeddings locaux | Nora `search_project_resources` ; Journal API ; `selectRelevantKnowledgeContext` ; reprise cognitive | **ADAPT** — service commun `hybridKnowledgeSearch` |
| Decisions bornés | D8 critères ; jugements annexes Nora | **ADAPT** — `runBoundedJudgment` ; jamais D6 |
| Vision ponctuelle | Git PDF scanné ; inspect document `SCANNED_NO_TEXT` | **ADAPT** — après extract vide |
| PDF extract + viewer | inchangé | **KEEP** |
| semantic-qualification | Nora turn | **KEEP** |
| FinOps/OBS | toutes émissions ML2 | **ADAPT** — `recordProviderUsageObservation` |

## Non concernés (justifiés)

| Domaine | Motif |
|---|---|
| Audio / Realtime | Macro-lot 3 |
| Images génératives | DEFER doctrine |
| VS / File Search / fileId | DEFER DATA-01 |
| Continuity native V2–V4 | DEFER ; D3 V1 KEEP |
| Cursor realization D7/D8 exécution | hors ML2 cognition doc |

## Persistance

Fichier actuel = preuve ML2 I2. **Priorité produit :** table PG `derived_embedding_chunks` (migration **027 candidate**, GO distinct). Adapter commun ; backend file tant que 027 non appliquée.


## 4. Migration 027 + Gate A

# Migration 027 — derived_embedding_chunks (checkpoint A)

| Champ | Valeur |
|---|---|
| Statut | **APPLIED ON DEV — Morris GO Checkpoint A 2026-11-27** |
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


### SQL applied

```sql
-- APPLIED ON DEV — Morris GO Checkpoint A 2026-11-27.
-- Macro-lot 2 derived embedding projection (no pgvector).
-- Owner of métier data remains D4/D9 — this table is a reconstructible projection.
-- owner_pilot_id is attribution metadata, NOT sole authorization proof.
-- Authorization must revalidate via projects.owner_pilot_id + preparation links.
--
-- Apply (DEV only, after GO):
--   psql … -f 027_derived_embedding_chunks.sql
--   then set SFIA_DERIVED_EMBEDDING_BACKEND=pg and retire file ops path.
--
-- Rollback:
--   DROP TABLE IF EXISTS derived_embedding_chunks;

CREATE TABLE IF NOT EXISTS derived_embedding_chunks (
  id text PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  preparation_id text NOT NULL REFERENCES preparations(id) ON DELETE CASCADE,
  -- Attribution only — revalidate rights via projects/preparations owners before use.
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  source_id text NOT NULL,
  source_kind text NOT NULL
    CHECK (source_kind IN ('acquis', 'subject', 'open_point', 'document_excerpt')),
  content_fingerprint text NOT NULL,
  model text NOT NULL,
  dims integer NOT NULL CHECK (dims > 0),
  vector_json jsonb NOT NULL,
  text_excerpt text,
  revoked boolean NOT NULL DEFAULT false,
  deleted boolean NOT NULL DEFAULT false,
  version_label text,
  index_ref text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (project_id, source_id, content_fingerprint, model)
);

CREATE INDEX IF NOT EXISTS derived_embedding_chunks_project_mobilizable_idx
  ON derived_embedding_chunks (project_id, revoked, deleted, model)
  WHERE revoked = false AND deleted = false;

CREATE INDEX IF NOT EXISTS derived_embedding_chunks_source_idx
  ON derived_embedding_chunks (project_id, source_id);

CREATE INDEX IF NOT EXISTS derived_embedding_chunks_prep_idx
  ON derived_embedding_chunks (preparation_id, owner_pilot_id);

```

### Gate A proofs

- Backup: `.sfia-evidence/db-backups/sfia_next_dev_pre_027_20261127T053958Z.dump`
- Restore probe: projects=194 · chunks table null in pre-027 dump · DEV intact after
- Post-apply: table+3 FKs+indexes · projects still 194
- Ops backend default `pg` · no dual-write

## 5. Gate B plan + report

# Gate B — Plan d'émission LIVE (validation définitive)

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` (existante — **pas de renouvellement**) |
| Accord principe Morris | ≤ **30** contacts HTTP |
| Reliquat campagne | 90/236 committed · **146** restants · Nora ~38/40 · cleanup 16 |
| WEB | OFF |
| Admin | unused |
| Corpus | **synthétique** uniquement |
| Flags DEV temporaires | `SFIA_DERIVED_EMBEDDING_SEARCH=1` · `SFIA_BOUNDED_JUDGMENT=1` · `SFIA_DOCUMENT_VISION_PUNCTUAL=1` · `SFIA_DERIVED_EMBEDDING_BACKEND=pg` · `SFIA_LIVE_CAMPAIGN_ID=ml2-i2-docintel-20261127` · `SFIA_PROTECT_CAMPAIGN_ENVELOPE=1` |
| Après qualify | flags OFF (sauf backend=pg durable ops) |

## Opérations exactes (≤30 HTTP)

| # | Opération | Famille | HTTP max | Tokens estimés (in/out) | Notes |
|---|---|---|---|---|---|
| 1 | Embed query ×3 (hybrid rights + negative) | embeddings | 3 | ~150 / 0 | text-embedding-3-small |
| 2 | Rebuild index PG synthétique | embeddings | 1 | ~400 / 0 | admissible-only |
| 3 | Bounded judgment AMB + fallback | decisions+responses | 4 | ~400 / 200 | gpt-6-luna |
| 4 | Vision punctual PDF synthétique | responses | 2 | ~1200 / 300 | gpt-6.1-terra |
| 5 | Nora parcours intégré (tools/D4/note) | responses | 12 | ~6000 / 2500 | workId + semantic-qual |
| 6 | Marge erreurs / retry borné | mixed | 4 | ~800 / 200 | budget/invalid paths |
| | **TOTAL plafonné** | | **≤26** (+4 marge = **30**) | **~8950 / ~3200** | |

## Coût estimé (indicatif — non inventé comme facture)

Tarifs catalogue partiels ; embeddings PARTIAL/UNKNOWN.

| Poste | Estimation grossière USD |
|---|---|
| Embeddings (~550 tok) | ≪ 0.01 |
| Decisions/Responses (~10k tok total) | ~0.05–0.25 selon effort |
| Vision (~1.5k) | ~0.02–0.08 |
| **Fourchette totale** | **~0.10 – 0.40 USD** |

Observation réelle = usage fournisseur via Frontier + ledger.
Ne pas assimiler réservations Frontier à coût facturé.

## Durée estimée

15–35 minutes chronomètre script + smoke navigateur.

## Protections

- Sous-enveloppes non transférables
- Aucun VS / File Search / fileId durable
- Aucune donnée projet réelle
- D3 V1 · pas de D6 IA
- RECETTE intacte

## Validation définitive

Ce plan constitue la présentation exigée **avant émission**.
Exécution dans le même Delivery sous le plafond Morris ≤30.


```json
{
  "campaignId": "ml2-i2-docintel-20261127",
  "gate": "B",
  "plan": "live-gate-b-emission-plan-20261127.md",
  "startedAt": "2026-11-27T05:44:07.235Z",
  "httpCap": 30,
  "ops": [
    {
      "op": "rebuild_pg_index",
      "ok": true,
      "entryCount": 14,
      "tokens": 392,
      "skippedNonAdmissible": 1,
      "backend": "pg"
    },
    {
      "op": "hybrid_search_authorized",
      "hitCount": 8,
      "derivedUsed": true,
      "rightsRevalidated": true,
      "backend": "pg"
    },
    {
      "op": "revoke_lifecycle",
      "revokeId": "acq_d0177f88-1990-43cc-9333-54eb0946418c",
      "revokeOk": true,
      "revokedAbsent": true
    },
    {
      "op": "bounded_judgment_amb",
      "source": "responses_fallback",
      "value": false,
      "probability": null,
      "uncertain": false,
      "abstain": false,
      "reason": "FALLBACK_AFTER:UNCERTAINTY_BAND",
      "usage": {
        "inputTokens": 113,
        "outputTokens": 78,
        "model": "gpt-6-luna"
      }
    },
    {
      "op": "vision_punctual",
      "ok": true,
      "usage": {
        "inputTokens": 3785,
        "outputTokens": 231,
        "model": "gpt-6.1-terra"
      },
      "reason": null,
      "parsedKeys": [
        "observedFacts",
        "interpretation",
        "uncertainty",
        "pagesConsulted",
        "unreadZones",
        "exactRefs"
      ]
    }
  ],
  "negatives": {
    "foreignProject": {
      "denied": true,
      "reason": "Projet introuvable"
    }
  },
  "nora": {
    "status": "COMPLETE",
    "preview": "Oui : d\u2019apr\u00e8s le contexte fourni, **semantic-qualification reste au c\u0153ur** de l\u2019architecture, avec Responses conserv\u00e9 et Decisions adapt\u00e9. Je n\u2019ai trouv\u00e9 aucun acquis D4 pertinent \u00e0 citer lors de la recherche, donc cette confirmation s\u2019appuie sur le r\u00e9sum\u00e9 de campagne inclus dans votre message. Aucune HumanDecision n\u2019a \u00e9t\u00e9 cr\u00e9\u00e9e.",
    "modelApplied": "UNVERIFIED",
    "qualificationSchema": "ml4c-sem-qual-v1",
    "usage": {
      "inputTokens": 20910,
      "outputTokens": 515,
      "totalTokens": 21425,
      "reasoningTokens": 302,
      "cachedInputTokens": 9306,
      "providerRequests": 2,
      "requestUsageEntries": [
        {
          "inputTokens": 9309,
          "outputTokens": 147,
          "totalTokens": 9456,
          "reasoningTokens": 89,
          "cachedInputTokens": 0
        },
        {
          "inputTokens": 11601,
          "outputTokens": 368,
          "totalTokens": 11969,
          "reasoningTokens": 213,
          "cachedInputTokens": 9306
        }
      ],
      "provenance": "AGENTS_SDK_RUN_STATE",
      "limits": []
    },
    "d6": false,
    "toolsBound": true
  },
  "envelopeBefore": {
    "campaignId": "ml2-i2-docintel-20261127",
    "suspended": false,
    "suspendReason": null,
    "httpAttemptsReserved": 90,
    "httpAttemptsCommitted": 90,
    "httpAttemptsReleased": 0,
    "inputTokenCountAttemptsReserved": 21,
    "inputTokenCountAttemptsCommitted": 21,
    "inputTokensReserved": 22198,
    "inputTokensCommitted": 22198,
    "outputTokensReserved": 11418,
    "outputTokensCommitted": 11418,
    "hostedSearchesCommitted": 0,
    "hostedSearchesMeasured": 0,
    "hostedSearchMeasureStatus": "MEASURED",
    "requireNativeInputBound": true,
    "maxHttpAttempts": 236,
    "maxInputTokens": 344000,
    "maxOutputTokens": 344000,
    "familyHttp": {
      "decisions": {
        "maxHttpAttempts": 24,
        "reserved": 14,
        "committed": 14,
        "released": 0
      },
      "embeddings": {
        "maxHttpAttempts": 12,
        "reserved": 8,
        "committed": 8,
        "released": 0
      },
      "responses": {
        "maxHttpAttempts": 112,
        "reserved": 24,
        "committed": 24,
        "released": 0
      },
      "vector_stores": {
        "maxHttpAttempts": 88,
        "reserved": 29,
        "committed": 29,
        "released": 0
      },
      "files": {
        "maxHttpAttempts": 40,
        "reserved": 12,
        "committed": 12,
        "released": 0
      }
    }
  },
  "envelopeAfter": {
    "campaignId": "ml2-i2-docintel-20261127",
    "suspended": false,
    "suspendReason": null,
    "httpAttemptsReserved": 99,
    "httpAttemptsCommitted": 99,
    "httpAttemptsReleased": 0,
    "inputTokenCountAttemptsReserved": 25,
    "inputTokenCountAttemptsCommitted": 25,
    "inputTokensReserved": 47515,
    "inputTokensCommitted": 47515,
    "outputTokensReserved": 26522,
    "outputTokensCommitted": 26522,
    "hostedSearchesCommitted": 0,
    "hostedSearchesMeasured": 0,
    "hostedSearchMeasureStatus": "MEASURED",
    "requireNativeInputBound": true,
    "maxHttpAttempts": 236,
    "maxInputTokens": 344000,
    "maxOutputTokens": 344000,
    "familyHttp": {
      "decisions": {
        "maxHttpAttempts": 24,
        "reserved": 14,
        "committed": 14,
        "released": 0
      },
      "embeddings": {
        "maxHttpAttempts": 12,
        "reserved": 8,
        "committed": 8,
        "released": 0
      },
      "responses": {
        "maxHttpAttempts": 112,
        "reserved": 24,
        "committed": 24,
        "released": 0
      },
      "vector_stores": {
        "maxHttpAttempts": 88,
        "reserved": 29,
        "committed": 29,
        "released": 0
      },
      "files": {
        "maxHttpAttempts": 40,
        "reserved": 12,
        "committed": 12,
        "released": 0
      }
    }
  },
  "httpDelta": 9,
  "verdict": "GATE_B_LIVE_WITHIN_CAP",
  "finishedAt": "2026-11-27T05:44:28.258Z"
}
```

## 6. Candidate identity

```json
{
  "pid": 58000,
  "port": 3100,
  "host": "127.0.0.1",
  "buildId": "qvIWhDeJwvskHV5DSrfE8",
  "contentDigest": "4a08741ce51450cee8270d689f6523a908212b4f87eb611604fb0348390ffcf1",
  "sessionFingerprint": "e4829b8bd74645b3df79713af1f7d8fcc9d3fc6268c5b59a2bc75f9a1c53a6c4",
  "workspaceRoot": "/tmp/sfia-c12-cursor-live-ws",
  "effectMode": "LIVE",
  "startedAt": "2026-11-27T05:46:18Z",
  "mode": "qualify-next-start"
}
```

## 7. Key modules (full source)

### `projects/sfia-studio-next/web/src/domains/knowledge/derived-embedding-pg.ts`

```typescript
/**
 * PG backend for derived embeddings — sole operational store after Morris GO A.
 * No dual-read/dual-write with file. File helpers remain for unit tests only.
 *
 * Authorization: caller MUST revalidate pilot/project via D4.
 * owner_pilot_id on rows is attribution only.
 */
import { sql as pg } from "@/db/client";
import {
  DERIVED_EMBEDDING_MODEL,
  cosineSimilarity,
  type DerivedIndexEntry,
  type MobilizableHit,
} from "@/domains/knowledge/derived-embedding-index";

export function derivedEmbeddingBackend(
  env: NodeJS.ProcessEnv = process.env,
): "file" | "pg" {
  const v = (env.SFIA_DERIVED_EMBEDDING_BACKEND || "pg").trim().toLowerCase();
  // Explicit file only for unit tests / emergency — ops default is pg.
  return v === "file" ? "file" : "pg";
}

export function pgDerivedStoreActive(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return derivedEmbeddingBackend(env) === "pg";
}

/**
 * Replace project projection: delete prior rows then upsert admissible entries.
 * Transactional via postgres.js reserved transaction.
 */
export async function replaceDerivedChunksPg(input: {
  projectId: string;
  preparationId: string;
  ownerPilotId: string;
  entries: DerivedIndexEntry[];
  vectors: Map<string, number[]>;
}): Promise<{ written: number }> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  await pg.begin(async (tx) => {
    await tx`
      DELETE FROM derived_embedding_chunks
      WHERE project_id = ${input.projectId}
    `;
    for (const e of input.entries) {
      const vector = input.vectors.get(e.sourceId);
      if (!vector) continue;
      const id = `${input.projectId}:${e.sourceId}:${e.contentFingerprint}:${e.model}`;
      const vectorJson = JSON.stringify(vector);
      await tx.unsafe(
        `INSERT INTO derived_embedding_chunks (
          id, project_id, preparation_id, owner_pilot_id,
          source_id, source_kind, content_fingerprint, model, dims,
          vector_json, text_excerpt, revoked, deleted, version_label, index_ref, updated_at
        ) VALUES (
          $1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,$14,$15,now()
        )
        ON CONFLICT (project_id, source_id, content_fingerprint, model)
        DO UPDATE SET
          vector_json = EXCLUDED.vector_json,
          text_excerpt = EXCLUDED.text_excerpt,
          revoked = EXCLUDED.revoked,
          deleted = EXCLUDED.deleted,
          version_label = EXCLUDED.version_label,
          index_ref = EXCLUDED.index_ref,
          updated_at = now(),
          preparation_id = EXCLUDED.preparation_id,
          owner_pilot_id = EXCLUDED.owner_pilot_id,
          dims = EXCLUDED.dims`,
        [
          id,
          input.projectId,
          input.preparationId,
          input.ownerPilotId,
          e.sourceId,
          e.sourceKind,
          e.contentFingerprint,
          e.model,
          e.dims,
          vectorJson,
          e.text.slice(0, 2000),
          e.revoked,
          e.deleted,
          e.versionLabel,
          e.indexRef,
        ],
      );
    }
  });
  return { written: input.entries.filter((e) => input.vectors.has(e.sourceId)).length };
}

/** Mark revoked/deleted idempotently. */
export async function markDerivedChunkLifecyclePg(input: {
  projectId: string;
  sourceId: string;
  revoked?: boolean;
  deleted?: boolean;
}): Promise<number> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  const rows = await pg`
    UPDATE derived_embedding_chunks
    SET
      revoked = COALESCE(${input.revoked ?? null}, revoked),
      deleted = COALESCE(${input.deleted ?? null}, deleted),
      updated_at = now()
    WHERE project_id = ${input.projectId}
      AND source_id = ${input.sourceId}
    RETURNING id
  `;
  return rows.length;
}

export async function searchDerivedChunksPg(input: {
  projectId: string;
  queryVector: number[];
  limit?: number;
  model?: string;
}): Promise<MobilizableHit[]> {
  if (!pgDerivedStoreActive()) {
    throw new Error("PG_DERIVED_STORE_INACTIVE");
  }
  const model = input.model ?? DERIVED_EMBEDDING_MODEL;
  const limit = Math.min(Math.max(input.limit ?? 8, 1), 20);
  const rows = await pg`
    SELECT source_id, source_kind, preparation_id, version_label, index_ref,
           vector_json, text_excerpt
    FROM derived_embedding_chunks
    WHERE project_id = ${input.projectId}
      AND model = ${model}
      AND revoked = false
      AND deleted = false
  `;
  const hits: MobilizableHit[] = [];
  for (const row of rows) {
    const raw = row.vector_json;
    const vector = Array.isArray(raw)
      ? (raw as number[])
      : typeof raw === "string"
        ? (JSON.parse(raw) as number[])
        : null;
    if (!vector?.length) continue;
    hits.push({
      sourceId: String(row.source_id),
      sourceKind: String(row.source_kind) as MobilizableHit["sourceKind"],
      score: cosineSimilarity(input.queryVector, vector),
      versionLabel: (row.version_label as string | null) ?? null,
      indexRef: String(row.index_ref),
      preparationId: String(row.preparation_id),
      snippet: String(row.text_excerpt ?? "").slice(0, 280),
    });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

export async function countDerivedChunksPg(projectId?: string): Promise<number> {
  if (projectId) {
    const rows = await pg`
      SELECT count(*)::int AS n FROM derived_embedding_chunks
      WHERE project_id = ${projectId}
    `;
    return Number(rows[0]?.n ?? 0);
  }
  const rows = await pg`SELECT count(*)::int AS n FROM derived_embedding_chunks`;
  return Number(rows[0]?.n ?? 0);
}

```

### `projects/sfia-studio-next/web/src/domains/knowledge/derived-embedding-service.ts`

```typescript
/**
 * Product service for ML2 derived embeddings.
 * Ops backend: PostgreSQL (Morris GO A). File helpers remain for unit tests
 * when SFIA_DERIVED_EMBEDDING_BACKEND=file only — no dual-write.
 */
import {
  contentFingerprint,
  DERIVED_EMBEDDING_MODEL,
  derivedEmbeddingSearchEnabled,
  makeIndexRef,
  markSourceLifecycle,
  searchDerivedIndex,
  writeDerivedIndex,
  type DerivedIndexEntry,
  type DerivedSourceKind,
} from "@/domains/knowledge/derived-embedding-index";
import {
  derivedEmbeddingBackend,
  markDerivedChunkLifecyclePg,
  replaceDerivedChunksPg,
  searchDerivedChunksPg,
} from "@/domains/knowledge/derived-embedding-pg";
import {
  mergeLexicalAndDerived,
  type HybridHit,
  type LexicalHit,
} from "@/domains/knowledge/hybrid-knowledge-search";
import { listProjectKnowledge } from "@/domains/knowledge/journal";

export type EmbedClient = {
  embeddings: {
    create: (body: {
      model: string;
      input: string | string[];
    }) => Promise<{
      data: Array<{ embedding: number[] }>;
      usage?: { total_tokens?: number };
    }>;
  };
};

async function defaultEmbedClient(): Promise<EmbedClient | null> {
  const key = (process.env.OPENAI_API_KEY || "").trim();
  if (!key) return null;
  try {
    const frontier = await import(
      "@/domains/conversation/provider-emission-frontier"
    );
    const client = await frontier.createFrontierBoundOpenAIClient({
      maxRetries: 0,
    });
    return client as unknown as EmbedClient | null;
  } catch {
    return null;
  }
}

export async function embedQueryText(
  text: string,
  client?: EmbedClient | null,
): Promise<{ vector: number[]; tokens: number } | null> {
  const c = client ?? (await defaultEmbedClient());
  if (!c) return null;
  const q = text.trim();
  if (!q) return null;
  const res = await c.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: q,
  });
  const vector = res.data[0]?.embedding;
  if (!vector?.length) return null;
  return { vector, tokens: res.usage?.total_tokens ?? 0 };
}

export function collectAdmissibleKnowledgeSources(bundle: Awaited<
  ReturnType<typeof listProjectKnowledge>
>): Array<{
  sourceId: string;
  sourceKind: DerivedSourceKind;
  text: string;
  versionLabel: string | null;
}> {
  const sources: Array<{
    sourceId: string;
    sourceKind: DerivedSourceKind;
    text: string;
    versionLabel: string | null;
  }> = [];
  for (const a of bundle.acquis) {
    if (a.status !== "CURRENT") continue;
    sources.push({
      sourceId: a.id,
      sourceKind: "acquis",
      text: `${a.kind}: ${a.statement}`,
      versionLabel: "CURRENT",
    });
  }
  for (const o of bundle.openPoints) {
    if (o.status !== "OPEN") continue;
    sources.push({
      sourceId: o.id,
      sourceKind: "open_point",
      text: o.statement,
      versionLabel: o.status,
    });
  }
  for (const s of bundle.subjects) {
    if (s.status === "ARCHIVED") continue;
    sources.push({
      sourceId: s.id,
      sourceKind: "subject",
      text: s.title,
      versionLabel: s.status,
    });
  }
  return sources;
}

async function persistDerivedIndex(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  entries: DerivedIndexEntry[];
  vectors: Map<string, number[]>;
}): Promise<void> {
  if (derivedEmbeddingBackend() === "pg") {
    await replaceDerivedChunksPg({
      projectId: input.projectId,
      preparationId: input.preparationId,
      ownerPilotId: input.pilotId,
      entries: input.entries,
      vectors: input.vectors,
    });
    return;
  }
  // Test-only file backend — not an operational dual-write path.
  writeDerivedIndex({
    projectId: input.projectId,
    entries: input.entries,
    vectors: input.vectors,
  });
}

/**
 * Rebuild derived index from CURRENT/OPEN admissible sources only.
 */
export async function rebuildDerivedIndexFromProjectKnowledge(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  client?: EmbedClient | null;
}): Promise<{
  ok: boolean;
  entryCount: number;
  tokens: number;
  reason?: string;
  skippedNonAdmissible?: number;
  backend?: string;
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return { ok: false, entryCount: 0, tokens: 0, reason: "FLAG_OFF" };
  }
  const client = input.client ?? (await defaultEmbedClient());
  if (!client) {
    return { ok: false, entryCount: 0, tokens: 0, reason: "NO_OPENAI_CLIENT" };
  }
  const bundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const nonAdmissible =
    bundle.acquis.filter((a) => a.status !== "CURRENT").length +
    bundle.openPoints.filter((o) => o.status !== "OPEN").length +
    bundle.subjects.filter((s) => s.status === "ARCHIVED").length;
  const sources = collectAdmissibleKnowledgeSources(bundle);
  if (sources.length === 0) {
    await persistDerivedIndex({
      pilotId: input.pilotId,
      projectId: input.projectId,
      preparationId: input.preparationId,
      entries: [],
      vectors: new Map(),
    });
    return {
      ok: true,
      entryCount: 0,
      tokens: 0,
      skippedNonAdmissible: nonAdmissible,
      backend: derivedEmbeddingBackend(),
    };
  }
  const texts = sources.map((s) => s.text);
  const emb = await client.embeddings.create({
    model: DERIVED_EMBEDDING_MODEL,
    input: texts,
  });
  const vectors = new Map<string, number[]>();
  const entries: DerivedIndexEntry[] = [];
  for (let i = 0; i < sources.length; i++) {
    const src = sources[i]!;
    const vector = emb.data[i]?.embedding;
    if (!vector) continue;
    const fp = contentFingerprint(src.text);
    vectors.set(src.sourceId, vector);
    entries.push({
      sourceId: src.sourceId,
      sourceKind: src.sourceKind,
      projectId: input.projectId,
      preparationId: input.preparationId,
      contentFingerprint: fp,
      model: DERIVED_EMBEDDING_MODEL,
      dims: vector.length,
      revoked: false,
      deleted: false,
      versionLabel: src.versionLabel,
      indexRef: makeIndexRef({
        projectId: input.projectId,
        sourceId: src.sourceId,
        contentFingerprint: fp,
      }),
      updatedAt: new Date().toISOString(),
      text: src.text,
    });
  }
  await persistDerivedIndex({
    pilotId: input.pilotId,
    projectId: input.projectId,
    preparationId: input.preparationId,
    entries,
    vectors,
  });
  try {
    const { recordProviderUsageObservation, buildIdempotencyKey } = await import(
      "@/domains/conversation/usage-accounting"
    );
    await recordProviderUsageObservation({
      operation: "embeddings.derived_index_rebuild",
      modelRequested: DERIVED_EMBEDDING_MODEL,
      modelApplied: DERIVED_EMBEDDING_MODEL,
      inputTokens: emb.usage?.total_tokens ?? null,
      outputTokens: 0,
      status: "succeeded",
      granularity: "REQUEST",
      costCoverage: "PARTIAL",
      projectId: input.projectId,
      ownerPilotId: input.pilotId,
      preparationId: input.preparationId,
      idempotencyKey: buildIdempotencyKey({
        granularity: "REQUEST",
        lane: process.env.STUDIO_LANE || "DEV",
        operation: "embeddings.derived_index_rebuild",
        projectId: input.projectId,
        preparationId: input.preparationId,
        callOrdinal: Date.now() % 100000,
      }),
      limits: [
        "DERIVED_INDEX_PG",
        "ADMISSIBLE_SOURCES_ONLY",
        "EMBEDDING_TARIFF_PARTIAL",
        `BACKEND_${derivedEmbeddingBackend().toUpperCase()}`,
      ],
    });
  } catch {
    /* FinOps best-effort */
  }
  return {
    ok: true,
    entryCount: entries.length,
    tokens: emb.usage?.total_tokens ?? 0,
    skippedNonAdmissible: nonAdmissible,
    backend: derivedEmbeddingBackend(),
  };
}

export async function hybridSearchProjectKnowledge(input: {
  pilotId: string;
  projectId: string;
  query: string;
  lexical: LexicalHit[];
  limit?: number;
  client?: EmbedClient | null;
  openPointsOnly?: boolean;
}): Promise<{
  hits: HybridHit[];
  derivedUsed: boolean;
  derivedSkippedReason: string | null;
  rightsRevalidated: boolean;
  backend?: string;
}> {
  if (!derivedEmbeddingSearchEnabled()) {
    return {
      hits: input.lexical.map((l) => ({ ...l, channel: "lexical" as const })),
      derivedUsed: false,
      derivedSkippedReason: "FLAG_OFF",
      rightsRevalidated: false,
      backend: derivedEmbeddingBackend(),
    };
  }
  const bundle = await listProjectKnowledge(input.pilotId, input.projectId);
  const admissible = new Set(
    collectAdmissibleKnowledgeSources(bundle).map((s) => s.sourceId),
  );
  if (input.openPointsOnly) {
    for (const id of [...admissible]) {
      const op = bundle.openPoints.find((o) => o.id === id);
      if (!op || op.status !== "OPEN") admissible.delete(id);
    }
  }
  for (const l of input.lexical) admissible.add(l.sourceId);

  const emb = await embedQueryText(input.query, input.client);
  if (!emb) {
    return {
      hits: input.lexical
        .filter((l) => admissible.has(l.sourceId))
        .map((l) => ({ ...l, channel: "lexical" as const })),
      derivedUsed: false,
      derivedSkippedReason: "EMBED_UNAVAILABLE",
      rightsRevalidated: true,
      backend: derivedEmbeddingBackend(),
    };
  }
  const snippets = new Map<string, string>();
  for (const l of input.lexical) snippets.set(l.sourceId, l.snippet);

  let semanticHits =
    derivedEmbeddingBackend() === "pg"
      ? await searchDerivedChunksPg({
          projectId: input.projectId,
          queryVector: emb.vector,
          limit: Math.max((input.limit ?? 12) * 2, 16),
        })
      : searchDerivedIndex({
          projectId: input.projectId,
          queryVector: emb.vector,
          limit: Math.max((input.limit ?? 12) * 2, 16),
          snippets,
        });
  // Attach snippets for PG hits when available from lexical map.
  semanticHits = semanticHits.map((h) => ({
    ...h,
    snippet: h.snippet || snippets.get(h.sourceId) || "",
  }));

  const merged = mergeLexicalAndDerived({
    projectId: input.projectId,
    lexical: input.lexical.filter((l) => admissible.has(l.sourceId)),
    queryVector: emb.vector,
    limit: input.limit,
    snippets,
    allowedSourceIds: admissible,
    semanticHits,
  });
  return {
    ...merged,
    rightsRevalidated: true,
    backend: derivedEmbeddingBackend(),
  };
}

export async function revokeDerivedSource(
  projectId: string,
  sourceId: string,
): Promise<boolean> {
  if (derivedEmbeddingBackend() === "pg") {
    const n = await markDerivedChunkLifecyclePg({
      projectId,
      sourceId,
      revoked: true,
    });
    return n > 0;
  }
  return markSourceLifecycle(projectId, sourceId, { revoked: true });
}

export async function deleteDerivedSource(
  projectId: string,
  sourceId: string,
): Promise<boolean> {
  if (derivedEmbeddingBackend() === "pg") {
    const n = await markDerivedChunkLifecyclePg({
      projectId,
      sourceId,
      deleted: true,
    });
    return n > 0;
  }
  return markSourceLifecycle(projectId, sourceId, { deleted: true });
}

export {
  searchDerivedIndex,
  derivedEmbeddingSearchEnabled,
  derivedEmbeddingBackend,
};

```

### `projects/sfia-studio-next/web/src/domains/conversation/bounded-judgment.ts`

```typescript
/**
 * ML2 ADAPT — OpenAI Decisions for bounded judgments (predicate/choice/score).
 * NOT HumanDecision D6. Explicit uncertainty + Responses fallback when
 * Decisions abstains / confidence is out of band / API unavailable / invalid.
 *
 * Gate: SFIA_BOUNDED_JUDGMENT=1 (OFF by default).
 */
import { createHash } from "node:crypto";

export const BOUNDED_JUDGMENT_SCHEMA = "ml2-bounded-judgment-v1";

export type BoundedJudgmentKind = "predicate" | "choice" | "score";

export type BoundedJudgmentRequest = {
  kind: BoundedJudgmentKind;
  name: string;
  question: string;
  evidence: string;
  choices?: string[];
  levels?: string[];
  /** When set, probabilities in (lo, hi) are treated as uncertain. */
  uncertaintyBand?: { lo: number; hi: number };
};

export type BoundedJudgmentResult = {
  schema: typeof BOUNDED_JUDGMENT_SCHEMA;
  name: string;
  kind: BoundedJudgmentKind;
  source: "decisions" | "responses_fallback" | "refused";
  value: boolean | string | number | null;
  probability: number | null;
  uncertain: boolean;
  abstain: boolean;
  reason: string | null;
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    model?: string;
  };
};

export function boundedJudgmentEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return (env.SFIA_BOUNDED_JUDGMENT || "").trim() === "1";
}

/** Heuristic: mid-band probability ⇒ uncertain (caller may tighten). */
export function assessUncertainty(
  probability: number | null,
  band: { lo: number; hi: number } = { lo: 0.35, hi: 0.65 },
): boolean {
  if (probability == null || !Number.isFinite(probability)) return true;
  return probability > band.lo && probability < band.hi;
}

/**
 * p≈0 is NOT sufficient proof the proposition is false (may be AMB/INS collapse).
 * Callers must not treat value=false at p=0 as authoritative without fallback.
 */
export function isOverconfidentFalseAtZero(result: {
  kind: BoundedJudgmentKind;
  value: unknown;
  probability: number | null;
}): boolean {
  if (result.kind !== "predicate") return false;
  if (result.value !== false) return false;
  return result.probability === 0 || result.probability == null;
}

export function shouldFallbackToResponses(result: {
  uncertain: boolean;
  abstain: boolean;
  probability: number | null;
  value: unknown;
  kind?: BoundedJudgmentKind;
  reason?: string | null;
}): boolean {
  if (result.abstain) return true;
  if (result.value == null && result.probability == null) return true;
  if (result.uncertain) return true;
  if (result.reason?.startsWith("INVALID_")) return true;
  if (
    result.kind === "predicate" &&
    isOverconfidentFalseAtZero({
      kind: "predicate",
      value: result.value,
      probability: result.probability,
    })
  ) {
    return true;
  }
  return false;
}

export type DecisionsClient = {
  decisions: {
    create: (body: Record<string, unknown>) => Promise<{
      answers?: Array<{
        type: string;
        name?: string;
        probability?: number;
        choice?: string;
        score?: number;
      }>;
      usage?: { input_tokens?: number; output_tokens?: number };
    }>;
  };
  responses: {
    create: (body: Record<string, unknown>) => Promise<{
      output_text?: string;
      usage?: { input_tokens?: number; output_tokens?: number };
    }>;
  };
};

function buildDecisionsQuestions(req: BoundedJudgmentRequest): unknown[] {
  if (req.kind === "predicate") {
    return [
      {
        type: "predicate",
        name: req.name,
        instructions: req.question,
      },
    ];
  }
  if (req.kind === "choice") {
    return [
      {
        type: "choice",
        name: req.name,
        instructions: req.question,
        choices: (req.choices ?? []).map((value) => ({ value })),
      },
    ];
  }
  return [
    {
      type: "score",
      name: req.name,
      instructions: req.question,
      levels: (req.levels ?? []).map((label) => ({ label })),
    },
  ];
}

function parseStrictBoolean(raw: unknown): boolean | null {
  if (typeof raw === "boolean") return raw;
  // Never Boolean("false") === true
  if (typeof raw === "string") {
    const t = raw.trim().toLowerCase();
    if (t === "true" || t === "yes" || t === "1") return true;
    if (t === "false" || t === "no" || t === "0") return false;
    return null;
  }
  if (typeof raw === "number" && Number.isFinite(raw)) {
    if (raw === 1) return true;
    if (raw === 0) return false;
  }
  return null;
}

export function validateDecisionsAnswer(input: {
  kind: BoundedJudgmentKind;
  answer: {
    type: string;
    probability?: number;
    choice?: string;
    score?: number;
  } | null | undefined;
  choices?: string[];
  levels?: string[];
}): {
  ok: boolean;
  value: boolean | string | number | null;
  probability: number | null;
  reason: string | null;
} {
  const a = input.answer;
  if (!a) {
    return {
      ok: false,
      value: null,
      probability: null,
      reason: "INVALID_MISSING_ANSWER",
    };
  }
  if (a.type !== input.kind) {
    return {
      ok: false,
      value: null,
      probability: null,
      reason: `INVALID_TYPE_MISMATCH:${a.type}`,
    };
  }
  if (input.kind === "predicate") {
    const probability =
      typeof a.probability === "number" && Number.isFinite(a.probability)
        ? a.probability
        : null;
    if (probability == null || probability < 0 || probability > 1) {
      return {
        ok: false,
        value: null,
        probability: null,
        reason: "INVALID_PREDICATE_PROBABILITY",
      };
    }
    // Threshold mapping is interpretive — p=0 must still be treated carefully
    // by shouldFallbackToResponses (overconfident false).
    return {
      ok: true,
      value: probability >= 0.5,
      probability,
      reason: null,
    };
  }
  if (input.kind === "choice") {
    const choice = a.choice != null ? String(a.choice) : null;
    const allowed = input.choices ?? [];
    if (!choice || (allowed.length > 0 && !allowed.includes(choice))) {
      return {
        ok: false,
        value: null,
        probability: null,
        reason: "INVALID_CHOICE",
      };
    }
    // Do NOT invent confidence=1 for choice answers.
    return { ok: true, value: choice, probability: null, reason: null };
  }
  // score
  const levels = input.levels ?? [];
  if (typeof a.score === "number" && Number.isFinite(a.score)) {
    if (levels.length > 0) {
      const asLabel = String(a.score);
      if (!levels.includes(asLabel) && a.choice == null) {
        // numeric score without level labels — accept number, no fake p=1
        return {
          ok: true,
          value: a.score,
          probability: null,
          reason: null,
        };
      }
    }
    return { ok: true, value: a.score, probability: null, reason: null };
  }
  if (a.choice != null) {
    const label = String(a.choice);
    if (levels.length > 0 && !levels.includes(label)) {
      return {
        ok: false,
        value: null,
        probability: null,
        reason: "INVALID_SCORE_LEVEL",
      };
    }
    return { ok: true, value: label, probability: null, reason: null };
  }
  return {
    ok: false,
    value: null,
    probability: null,
    reason: "INVALID_SCORE",
  };
}

function parseResponsesJson(text: string): {
  value?: unknown;
  uncertainty?: boolean;
  abstain?: boolean;
} | null {
  try {
    const m = text.match(/\{[\s\S]*\}/);
    if (!m) return null;
    return JSON.parse(m[0]) as {
      value?: unknown;
      uncertainty?: boolean;
      abstain?: boolean;
    };
  } catch {
    return null;
  }
}

function validateResponsesValue(
  req: BoundedJudgmentRequest,
  raw: unknown,
): { ok: boolean; value: boolean | string | number | null; reason: string | null } {
  if (req.kind === "predicate") {
    const b = parseStrictBoolean(raw);
    if (b == null) {
      return { ok: false, value: null, reason: "INVALID_RESPONSES_PREDICATE" };
    }
    return { ok: true, value: b, reason: null };
  }
  if (req.kind === "choice") {
    const choice = raw != null ? String(raw) : null;
    const allowed = req.choices ?? [];
    if (!choice || (allowed.length > 0 && !allowed.includes(choice))) {
      return { ok: false, value: null, reason: "INVALID_RESPONSES_CHOICE" };
    }
    return { ok: true, value: choice, reason: null };
  }
  if (typeof raw === "number" && Number.isFinite(raw)) {
    return { ok: true, value: raw, reason: null };
  }
  if (raw != null) {
    const label = String(raw);
    const levels = req.levels ?? [];
    if (levels.length > 0 && !levels.includes(label)) {
      return { ok: false, value: null, reason: "INVALID_RESPONSES_LEVEL" };
    }
    return { ok: true, value: label, reason: null };
  }
  return { ok: false, value: null, reason: "INVALID_RESPONSES_SCORE" };
}

/**
 * Run Decisions first; on uncertainty/abstain/invalid/error, Responses JSON fallback.
 * Never records a HumanDecision — Studio admission remains separate (D6).
 */
export async function runBoundedJudgment(input: {
  client: DecisionsClient;
  request: BoundedJudgmentRequest;
  modelDecisions?: string;
  modelResponses?: string;
  effortResponses?: string;
}): Promise<BoundedJudgmentResult> {
  const req = input.request;
  const band = req.uncertaintyBand ?? { lo: 0.35, hi: 0.65 };
  const inputText = `Evidence:\n${req.evidence}\n\nAnswer only the named question.`;

  let decisionsResult: BoundedJudgmentResult | null = null;
  try {
    const dec = await input.client.decisions.create({
      model: input.modelDecisions ?? "gpt-6-luna",
      input: inputText,
      questions: buildDecisionsQuestions(req),
    });
    const primary =
      (dec.answers ?? []).find((a) => a.name === req.name) ??
      (dec.answers ?? [])[0];
    const validated = validateDecisionsAnswer({
      kind: req.kind,
      answer: primary,
      choices: req.choices,
      levels: req.levels,
    });
    const uncertain =
      req.kind === "predicate"
        ? assessUncertainty(validated.probability, band) ||
          isOverconfidentFalseAtZero({
            kind: "predicate",
            value: validated.value,
            probability: validated.probability,
          })
        : !validated.ok;
    decisionsResult = {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "decisions",
      value: validated.ok ? validated.value : null,
      probability: validated.probability,
      uncertain,
      abstain: !validated.ok || validated.value == null,
      reason: validated.reason ?? (uncertain ? "UNCERTAINTY_BAND" : null),
      usage: {
        inputTokens: dec.usage?.input_tokens,
        outputTokens: dec.usage?.output_tokens,
        model: input.modelDecisions ?? "gpt-6-luna",
      },
    };
    if (
      !shouldFallbackToResponses({
        ...decisionsResult,
        kind: req.kind,
      })
    ) {
      return decisionsResult;
    }
  } catch (e) {
    decisionsResult = {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "refused",
      value: null,
      probability: null,
      uncertain: true,
      abstain: true,
      reason: e instanceof Error ? e.message.slice(0, 200) : "DECISIONS_ERROR",
    };
  }

  // Responses fallback
  try {
    const schemaHint = JSON.stringify({
      id: req.name,
      type: req.kind,
      value: req.kind === "predicate" ? true : "",
      uncertainty: false,
      abstain: false,
    });
    const prompt = `You are a bounded judgment helper. Evidence:\n${req.evidence}\n\nQuestion: ${req.question}\n${
      req.choices ? `Choices: ${req.choices.join(" | ")}\n` : ""
    }${req.levels ? `Levels: ${req.levels.join(" | ")}\n` : ""}
Return ONLY JSON matching ${schemaHint}. If unsure set uncertainty=true and/or abstain=true.
For predicate, value must be boolean true/false — never the strings "true"/"false" without boolean type.`;
    const resp = await input.client.responses.create({
      model: input.modelResponses ?? "gpt-6-luna",
      store: false,
      max_output_tokens: 256,
      reasoning: { effort: input.effortResponses ?? "medium" },
      input: prompt,
    });
    const parsed = parseResponsesJson(resp.output_text ?? "");
    if (!parsed) {
      return {
        ...(decisionsResult ?? {
          schema: BOUNDED_JUDGMENT_SCHEMA,
          name: req.name,
          kind: req.kind,
          value: null,
          probability: null,
          uncertain: true,
          abstain: true,
          reason: "DECISIONS_UNAVAILABLE",
        }),
        source: "responses_fallback",
        reason: "RESPONSES_UNPARSEABLE",
        usage: {
          inputTokens: resp.usage?.input_tokens,
          outputTokens: resp.usage?.output_tokens,
          model: input.modelResponses ?? "gpt-6-luna",
        },
      };
    }
    if (parsed.abstain) {
      return {
        schema: BOUNDED_JUDGMENT_SCHEMA,
        name: req.name,
        kind: req.kind,
        source: "responses_fallback",
        value: null,
        probability: null,
        uncertain: true,
        abstain: true,
        reason: decisionsResult?.reason
          ? `FALLBACK_ABSTAIN_AFTER:${decisionsResult.reason}`
          : "FALLBACK_ABSTAIN",
        usage: {
          inputTokens: resp.usage?.input_tokens,
          outputTokens: resp.usage?.output_tokens,
          model: input.modelResponses ?? "gpt-6-luna",
        },
      };
    }
    const validated = validateResponsesValue(req, parsed.value);
    if (!validated.ok) {
      return {
        schema: BOUNDED_JUDGMENT_SCHEMA,
        name: req.name,
        kind: req.kind,
        source: "refused",
        value: null,
        probability: null,
        uncertain: true,
        abstain: true,
        reason: validated.reason,
        usage: {
          inputTokens: resp.usage?.input_tokens,
          outputTokens: resp.usage?.output_tokens,
          model: input.modelResponses ?? "gpt-6-luna",
        },
      };
    }
    return {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "responses_fallback",
      value: validated.value,
      probability: null,
      uncertain: Boolean(parsed.uncertainty),
      abstain: false,
      reason: decisionsResult?.reason
        ? `FALLBACK_AFTER:${decisionsResult.reason}`
        : "FALLBACK",
      usage: {
        inputTokens: resp.usage?.input_tokens,
        outputTokens: resp.usage?.output_tokens,
        model: input.modelResponses ?? "gpt-6-luna",
      },
    };
  } catch (e) {
    return {
      schema: BOUNDED_JUDGMENT_SCHEMA,
      name: req.name,
      kind: req.kind,
      source: "refused",
      value: null,
      probability: null,
      uncertain: true,
      abstain: true,
      reason: e instanceof Error ? e.message.slice(0, 200) : "FALLBACK_ERROR",
    };
  }
}

export function boundedJudgmentIdempotencyKey(fields: {
  workId?: string;
  name: string;
  evidenceFp: string;
}): string {
  return createHash("sha256")
    .update(
      JSON.stringify({
        schema: BOUNDED_JUDGMENT_SCHEMA,
        ...fields,
      }),
    )
    .digest("hex")
    .slice(0, 40);
}

```

### `projects/sfia-studio-next/web/scripts/ml2-gate-b-product-live.mts`

```typescript
/**
 * Gate B — product LIVE qualification ≤30 HTTP on campaign ml2-i2-docintel-20261127.
 * No renewal. WEB OFF. PG derived backend. Synthetic corpus only.
 */
import { createHash } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const CAMPAIGN_ID = "ml2-i2-docintel-20261127";
const OUT = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/gate-b-product-live",
);
mkdirSync(OUT, { recursive: true });

function loadEnvLocal() {
  const p = join(process.cwd(), ".env.local");
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    )
      v = v.slice(1, -1);
    if (!(k in process.env) || process.env[k] === "") process.env[k] = v;
  }
}

loadEnvLocal();
process.env.STUDIO_LANE = "DEV";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";
process.env.SFIA_QUALIFY_MODE = "1";
process.env.SFIA_BOUNDED_JUDGMENT = "1";
process.env.SFIA_DOCUMENT_VISION_PUNCTUAL = "1";
process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
process.env.SFIA_DERIVED_EMBEDDING_BACKEND = "pg";
process.env.SFIA_LIVE_CAMPAIGN_ID = CAMPAIGN_ID;
process.env.SFIA_PROTECT_CAMPAIGN_ENVELOPE = "1";
process.env.SFIA_G_LIVE_API = "1";
process.env.SFIA_LIVE_MAX_HTTP_ATTEMPTS = "236";
process.env.SFIA_LIVE_MAX_INPUT_TOKENS = "344000";
process.env.SFIA_LIVE_MAX_OUTPUT_TOKENS = "344000";

const key = (process.env.OPENAI_API_KEY || "").trim();
if (!key) throw new Error("OPENAI_API_KEY missing");
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
const expected = (process.env.SFIA_OPENAI_EXPECTED_KEY_FP || "").trim();
const forbidden = (process.env.SFIA_OPENAI_FORBIDDEN_KEY_FP || "").trim();
if (expected && fp !== expected) throw new Error(`KEY_FP mismatch ${fp}`);
if (forbidden && fp === forbidden) throw new Error("FORBIDDEN Admin key");

const GATE_B_HTTP_CAP = 30;
const durableEnvelope = join(
  process.cwd(),
  ".sfia-evidence/document-intelligence/live-campaign/envelope-state.json",
);
const sharedState = join(process.cwd(), ".sfia-evidence/live-campaign-state.json");
if (existsSync(durableEnvelope)) {
  mkdirSync(join(process.cwd(), ".sfia-evidence"), { recursive: true });
  const raw = JSON.parse(readFileSync(durableEnvelope, "utf8"));
  raw.protectPersisted = true;
  writeFileSync(sharedState, JSON.stringify(raw, null, 2));
}

const report: Record<string, unknown> = {
  campaignId: CAMPAIGN_ID,
  gate: "B",
  plan: "live-gate-b-emission-plan-20261127.md",
  startedAt: new Date().toISOString(),
  httpCap: GATE_B_HTTP_CAP,
  ops: [] as unknown[],
  negatives: {} as Record<string, unknown>,
  nora: {} as Record<string, unknown>,
  envelopeBefore: null,
  envelopeAfter: null,
  httpDelta: null,
  verdict: null,
};

const {
  beginCampaignEnvelope,
  createFrontierBoundOpenAIClient,
  getCampaignEnvelopeMetrics,
  runWithProviderEmissionStoreAsync,
  attachConfiguredLiveCampaignFromEnv,
} = await import("../src/domains/conversation/provider-emission-frontier.ts");

await runWithProviderEmissionStoreAsync(async () => {
  // Restore cumulative campaign (pid mismatch → restore path).
  const camp = attachConfiguredLiveCampaignFromEnv(process.env);
  if (!camp) {
    beginCampaignEnvelope({
      campaignId: CAMPAIGN_ID,
      maxHttpAttempts: 236,
      maxInputTokens: 344000,
      maxOutputTokens: 344000,
      required: true,
      familyHttpLimits: {
        decisions: 24,
        embeddings: 12,
        responses: 112,
        vector_stores: 88,
        files: 40,
      },
    });
  }
  report.envelopeBefore = getCampaignEnvelopeMetrics();
  const httpBefore =
    (report.envelopeBefore as { httpAttemptsCommitted?: number })
      ?.httpAttemptsCommitted ?? 0;

  const client = await createFrontierBoundOpenAIClient({
    requireCampaign: true,
    maxRetries: 0,
  });
  if (!client) throw new Error("NO_FRONTIER_CLIENT");

  const { sql: pg } = await import("../src/db/client.ts");
  const projRows = await pg`
    SELECT p.id AS project_id, p.owner_pilot_id AS pilot_id, l.preparation_id
    FROM projects p
    JOIN preparation_project_links l ON l.project_id = p.id
    WHERE p.id = 'proj_330057a0-cb37-4ab1-9c98-be5eb4454ead'
    LIMIT 1
  `;
  const proj = projRows[0];
  if (!proj) throw new Error("SYNTHETIC_PROJECT_A_MISSING");
  const pilotId = String(proj.pilot_id);
  const projectId = String(proj.project_id);
  const preparationId = String(proj.preparation_id);
  const foreignProjectId = "proj_239db87c-0f2c-47ae-b9fd-1b53fd15a7e3";

  const {
    rebuildDerivedIndexFromProjectKnowledge,
    hybridSearchProjectKnowledge,
    revokeDerivedSource,
    derivedEmbeddingBackend,
  } = await import("../src/domains/knowledge/derived-embedding-service.ts");

  // ——— 1 Rebuild PG index ———
  const rebuild = await rebuildDerivedIndexFromProjectKnowledge({
    pilotId,
    projectId,
    preparationId,
    client: client as never,
  });
  (report.ops as unknown[]).push({
    op: "rebuild_pg_index",
    ...rebuild,
    backend: derivedEmbeddingBackend(),
  });

  // ——— 2 Hybrid search (authorized) ———
  const hybrid = await hybridSearchProjectKnowledge({
    pilotId,
    projectId,
    query: "Orion capacity architecture",
    lexical: [],
    limit: 8,
    client: client as never,
  });
  (report.ops as unknown[]).push({
    op: "hybrid_search_authorized",
    hitCount: hybrid.hits.length,
    derivedUsed: hybrid.derivedUsed,
    rightsRevalidated: hybrid.rightsRevalidated,
    backend: hybrid.backend,
  });

  // ——— 3 Negative: foreign pilot vs project B ———
  let foreignDenied = false;
  let foreignReason = "";
  try {
    await hybridSearchProjectKnowledge({
      pilotId,
      projectId: foreignProjectId,
      query: "secret",
      lexical: [],
      client: client as never,
    });
  } catch (e) {
    foreignDenied = true;
    foreignReason = e instanceof Error ? e.message.slice(0, 120) : "ERROR";
  }
  report.negatives = {
    ...(report.negatives as object),
    foreignProject: { denied: foreignDenied, reason: foreignReason },
  };

  // ——— 4 Revoke lifecycle + search absence ———
  const revokeId = hybrid.hits[0]?.sourceId;
  let revokeOk = false;
  let revokedAbsent = true;
  if (revokeId) {
    revokeOk = await revokeDerivedSource(projectId, revokeId);
    const after = await hybridSearchProjectKnowledge({
      pilotId,
      projectId,
      query: "Orion capacity architecture",
      lexical: [],
      limit: 8,
      client: client as never,
    });
    revokedAbsent = !after.hits.some((h) => h.sourceId === revokeId);
    (report.ops as unknown[]).push({
      op: "revoke_lifecycle",
      revokeId,
      revokeOk,
      revokedAbsent,
    });
  }

  // ——— 5 Bounded judgment AMB ———
  const { runBoundedJudgment } = await import(
    "../src/domains/conversation/bounded-judgment.ts"
  );
  const bj = await runBoundedJudgment({
    client: client as never,
    request: {
      kind: "predicate",
      name: "GATEB-AMB",
      question: "Is the evidence conclusive that capacity is exactly 12?",
      evidence:
        "Source A says capacity≈12. Source B says unknown. No authoritative measurement.",
    },
  });
  (report.ops as unknown[]).push({
    op: "bounded_judgment_amb",
    source: bj.source,
    value: bj.value,
    probability: bj.probability,
    uncertain: bj.uncertain,
    abstain: bj.abstain,
    reason: bj.reason,
    usage: bj.usage,
  });

  // ——— 6 Vision punctual on synthetic PDF if present ———
  const pdfPath = join(
    process.cwd(),
    ".sfia-evidence/document-intelligence/artefacts/P-SCN-01-network-scan.pdf",
  );
  if (!existsSync(pdfPath)) {
    (report.ops as unknown[]).push({
      op: "vision_punctual",
      skipped: true,
      reason: "NO_SYNTHETIC_PDF",
    });
  } else {
    const { runDocumentVisionPunctual } = await import(
      "../src/domains/documents/document-vision-punctual.ts"
    );
    const bytes = readFileSync(pdfPath);
    const vis = await runDocumentVisionPunctual({
      client: client as never,
      request: {
        mode: "pdf_bytes",
        bytes,
        filename: "P-SCN-01-network-scan.pdf",
        ask: "JSON {observedFacts:string[],interpretation:string,uncertainty:boolean,pagesConsulted:number[],unreadZones:string[],exactRefs:string[]}",
      },
    });
    (report.ops as unknown[]).push({
      op: "vision_punctual",
      ok: vis.ok,
      usage: vis.usage,
      reason: vis.reason ?? null,
      parsedKeys: vis.parsed ? Object.keys(vis.parsed) : [],
    });
  }

  // ——— 7 Nora product turn (semantic-qual + D4 toolScope) ———
  try {
    const { generateNoraReply } = await import(
      "../src/domains/conversation/nora-adapter.ts"
    );
    const { buildCognitivePolicy } = await import(
      "../src/domains/conversation/cognitive-policy.ts"
    );
    const policy = buildCognitivePolicy(
      "Investigation synthétique Gate B. WEB interdit. Pas d'effet D6.",
      "OPERATIONAL_PROVISIONAL",
      { profileHint: "analyse", modelHint: "gpt-6-luna", effortHint: "medium" },
    );
    const nora = await generateNoraReply({
      userText:
        "Confirme que semantic-qualification reste au cœur. Utilise les outils D4 si utile pour citer les acquis autorisés du projet. Ne crée aucune HumanDecision.",
      contextSnippets: [
        "WEB LIVE OFF. Campagne ml2-i2-docintel-20261127 Gate B.",
        "Architecture: KEEP Responses+semantic-qualification; ADAPT Decisions; E=lexical+PG embeddings; Vision ponctuelle.",
        "Acquis synthétique: Orion capacity = 12 (CURRENT).",
      ],
      policyOverride: policy,
      toolScope: {
        pilotId,
        preparationId,
        projectId,
        operationId: `gateb-op-${Date.now()}`,
        generationId: `gateb-gen-${Date.now()}`,
      },
    });
    report.nora = {
      status: nora.status,
      preview: (nora.content ?? "").slice(0, 500),
      modelApplied: nora.modelApplied,
      qualificationSchema: nora.qualification?.schemaVersion ?? null,
      usage: nora.usage ?? null,
      d6: false,
      toolsBound: true,
    };
  } catch (e) {
    report.nora = {
      status: "ERROR",
      error: e instanceof Error ? e.message.slice(0, 240) : "NORA_ERROR",
    };
  }

  report.envelopeAfter = getCampaignEnvelopeMetrics();
  const httpAfter =
    (report.envelopeAfter as { httpAttemptsCommitted?: number })
      ?.httpAttemptsCommitted ?? 0;
  report.httpDelta = httpAfter - httpBefore;
  const withinCap = (report.httpDelta as number) <= GATE_B_HTTP_CAP;
  report.verdict = withinCap
    ? "GATE_B_LIVE_WITHIN_CAP"
    : "GATE_B_HTTP_CAP_EXCEEDED";
  report.finishedAt = new Date().toISOString();
  writeFileSync(join(OUT, "gate-b-report.json"), JSON.stringify(report, null, 2));
  // Persist durable envelope snapshot for continuity
  if (existsSync(sharedState)) {
    copyFileSync(sharedState, join(OUT, "envelope-after.json"));
    copyFileSync(
      sharedState,
      join(
        process.cwd(),
        ".sfia-evidence/document-intelligence/live-campaign/envelope-state.json",
      ),
    );
  }
  console.log(JSON.stringify({
    verdict: report.verdict,
    httpDelta: report.httpDelta,
    httpBefore,
    httpAfter,
    ops: (report.ops as unknown[]).map((o) => (o as { op?: string }).op),
    nora: report.nora,
    negatives: report.negatives,
  }, null, 2));
  if (!withinCap) process.exit(2);
});

```

## 8. CONV-F21…F26 (capitalized + Gate B)

| ID | Status | Evidence |
|---|---|---|
| F21 | PASS_WITH_RESERVE + GateB fallback | LIVE prior + bounded_judgment_amb → responses_fallback |
| F22 | PASS_ARCHITECTURE_E | hybrid PG derivedUsed=true · 8 hits |
| F23 | PASS_PG | rebuild 14 · revokeAbsent=true · 027 |
| F24 | PASS | vision punctual ok parsedKeys complete |
| F25 | PASS_BOUNDED_PRODUCT | Nora COMPLETE · D4 search tool · schema ml4c-sem-qual-v1 · d6=false |
| F26 | PASS_ATTRIBUTED | usage Nora measured · rebuild tokens 392 · vision usage |

## 9. Negatives

- Foreign project hybrid: denied Projet introuvable
- Revoked source absent after mark
- WEB OFF · Admin unused

## 15. Réserves

| # | Reserve | Impact | Owner | Protection | Exit |
|---|---|---|---|---|---|
| 1 | Playwright browser smoke aborted (timeout) | UI parcours non exercé via Playwright | Cursor | HTTP login/portfolio 200 + BUILD_ID HTML | Optional browser GO |
| 2 | Feature flags OFF (search/judgment/vision) | Capacités non actives UX défaut | Morris | Flags | Lane enablement |
| 3 | Nora D4 search returned 0 matched in Gate B turn | Citation acquis via tool EMPTY this turn | Cognition | Context snippets + hybrid API proven separately | Optional remainder |
| 4 | Embedding tariff PARTIAL | Cost may show unknown | FinOps | Explicit unknown | Catalog update |
| 5 | RECETTE 027 not applied | RECETTE sans table | Morris | Lane isolation | Separate RECETTE GO |

## 16. Verdict

**MACRO-LOT 2 — PRODUCT-WIDE CAPABILITIES IMPLEMENTED AND BEHAVIOR PROVEN — MORRIS EXIT ACCEPTANCE PROPOSED**

R5 IN PROGRESS / ML5 OPEN / ML1 accepted with reserves / ML3 not engaged / NO RELEASE / NOT ADOPTED / STABLE NOT AVAILABLE.

## 17. Instruction ChatGPT obligatoire (§9.1)

> **Instruction ChatGPT obligatoire :**
>
> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
>
> branche : `sfia/review-handoff`
> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
>
> ChatGPT doit vérifier sa cohérence avec le rapport Cursor (cycle, branche, HEAD initial/final, main, sources, créations/modifications, diffs, validations, réserves, décisions Morris, verdict, commit/vérification distante), puis produire une **synthèse globale** pour Morris (objectif, actions réelles, résultats, réserves, distinction observations/recommandations/décisions, verdict ChatGPT, prochaine action Morris).
> Ne pas transformer une recommandation en décision sans GO Morris.
> Si handoff absent/obsolète/incomplet/synthesis-only → `REVIEW HANDOFF INCOMPLETE` + motif.
