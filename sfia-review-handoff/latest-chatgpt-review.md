# SFIA Studio Next — Review Pack FULL
# ML4 D8 DATA REMEDIATION AUDIT (READ-ONLY)
# Cycle AUDIT PROJET — CRITICAL — mono-cycle reset

## 1. Date/heure Europe/Paris
2026-11-08 18:59 CET

## 2. GO Morris consommé
« OK GO » — mandat limité à cet audit READ-ONLY.
Aucun arbitrage autonome de remédiation. Aucune écriture PostgreSQL. Aucune modification Product.

## 3. Sources Git, refs et SHA
| Item | Valeur |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Product branch | `feat/next-git-collaboration-20261108` |
| Product HEAD | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| origin/main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| Handoff entrée (cycle remédié) | `dd11d465f7decf44bd0564d126e63ecec08573f0` |
| Worktree Product | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Worktree handoff | `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` |

Sources process/gouvernance consultées (READ-ONLY / main blobs via worktree) :
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `projects/sfia-studio-next/governance/SEF.md`
- `projects/sfia-studio-next/governance/roadmap.md`
- `projects/sfia-studio-next/governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md`
- `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md`
- `projects/sfia-studio-next/governance/product-versioning.md`
- `projects/sfia-studio-next/construction/integration-git/specification-technique.md`
- `projects/sfia-studio-next/construction/delivery-history.md`
- Handoff `dd11d465…` (Review Pack D7-D8 integrity closure)

Preuves d'exécution remédiation :
- Agent transcript compaction `segment_003.md` turns 227–232
- Agent jsonl tool responses (RETURNING + COMMIT)

## 4. Git Truth initial/final
**Initial (ce cycle audit) :**
- Branch/HEAD/main alignés attendus
- Staged : vide
- LOCAL DIRTY préservé (~36 lignes porcelain status ; untracked ML4 inclus)
- Aucun commit/push Product

**Final :** HEAD Product inchangé ; dirty préservé ; seul handoff L3 mono-fichier publié.

## 5. ENV-01 isolation
| Contrôle | Résultat |
|---|---|
| DATABASE_URL host | `127.0.0.1` |
| Port client | `5433` |
| Database | `sfia_next_dev` |
| Role | `sfia_next_dev` |
| Lane | **DEV_LOCAL** |
| RECETTE/STABLE contact | **NON** |
| Session audit | `current_database=sfia_next_dev`, `transaction_read_only=on` |
| Server addr observé | Docker bridge `172.17.0.2:5432` (mapping host 5433) |

**ENV-01 : PASS** — aucune requête hors DEV.

## 6. Diagnostic / périmètre audit
Objet : qualifier la remédiation DEV du cycle `dd11d465` (3 `effectAttemptId` en doublon → 6 refs → détachement de 3).

Méthode : SELECT uniquement, transaction `READ ONLY`.

## 7. Historique de remédiation (observabilité)

### 7.1 SQL réellement exécuté — **PROUVÉ** (transcript)
```sql
BEGIN;
WITH ranked AS (
  SELECT id, effect_attempt_id,
         ROW_NUMBER() OVER (PARTITION BY effect_attempt_id ORDER BY created_at ASC, id ASC) AS rn
  FROM document_publication_refs
  WHERE effect_attempt_id IS NOT NULL
),
losers AS (
  SELECT id, effect_attempt_id FROM ranked WHERE rn > 1
)
UPDATE document_publication_refs d
SET effect_attempt_id = NULL,
    detail_json = jsonb_set(
      COALESCE(d.detail_json::jsonb, '{}'::jsonb),
      '{integrityRemediation}',
      jsonb_build_object(
        'kind', 'DUPLICATE_EFFECT_ATTEMPT_DETACH',
        'formerEffectAttemptId', l.effect_attempt_id,
        'reason', 'DEV preflight before UNIQUE 009 — keep earliest ref linked; detach later duplicate without deletion',
        'at', now()
      ),
      true
    )::text,
    updated_at = now()
FROM losers l
WHERE d.id = l.id
RETURNING d.id, l.effect_attempt_id AS former_attempt;
-- verify zero duplicates...
COMMIT;
```

### 7.2 Identité base — **PROUVÉ**
`docker exec … psql -U sfia_next_dev -d sfia_next_dev` sur container `sfia-next-dev-pg`.

### 7.3 Sélection des lignes — **PROUVÉ**
Règle : `ROW_NUMBER() … ORDER BY created_at ASC, id ASC` ; `rn > 1` = losers détachés ; earliest reste lié.

### 7.4 Transaction — **PROUVÉ**
`BEGIN` … `UPDATE 3` … verify 0 doublons … `COMMIT` (exit 0).

### 7.5 Résultat RETURNING — **PROUVÉ**
```
dpr_e64f325b-0351-4425-b7d4-c0dab0a65e1c | efx_0d5d2071-1a9c-4d53-95ee-35795049a756
dpr_2b23e3f3-127b-41af-8515-b46bfbfdfa81 | efx_28c78d74-b80d-4c31-849c-99162ed58bd9
dpr_2b731522-6c15-4618-a3ae-168bfd21e00f | efx_0fa3de69-fd5b-4c7c-a2dd-737f86f87c65
UPDATE 3 ; duplicates remaining = 0 ; COMMIT
```

### 7.6 État antérieur conservé (snapshot/backup) — **NON PROUVÉ**
- Aucun dump SQL / CSV / backup fichier trouvé sous `/tmp` ni AgentStores pour l'état pré-UPDATE.
- Preuve antérieure limitée au preflight COUNT (3 eids × 2) + RETURNING.
- Restauration bit-à-bit de l'état lié antérieur : **NON PROUVÉ** sans reconstruction hypothétique.

### 7.7 Preuve post-état actuel — **PROUVÉ** (ce cycle READ ONLY)
Voir sections 8–9.

## 8. Contrôles non mutants (état actuel)
| Contrôle | Résultat |
|---|---|
| Index 009 présent | **OUI** `document_publication_refs_effect_attempt_uidx` |
| Prédicat UNIQUE | `(effect_attempt_id) WHERE (effect_attempt_id IS NOT NULL)` |
| Doublons non-NULL actuels | **0** |
| Refs `effect_attempt_id IS NULL` | **3** |
| Refs marquées `integrityRemediation` | **3** |
| Autres détachées hors intervention | **0** |
| Totals pub refs | total=174 linked=171 detached=3 |
| schema.ts `schemaRevision` | `009_publication_ref_attempt_unique` (LOCAL DIRTY) |
| migration file 009 | présent LOCAL DIRTY ; contenu aligné index |
| Écart migration↔DB | **aucun** sur la définition d'index observée |

## 9. Tableau des cas (observé maintenant)


### Cas 1 — formerEffectAttemptId `efx_0d5d2071-1a9c-4d53-95ee-35795049a756`

| Champ | Valeur observée |
|---|---|
| Projet | `proj_bbfc8cd6-3de1-41c9-8ecf-277598fde004` — name `git-b2` |
| Pilote | `pilot_ae8e6c1f-89db-4e9d-b4a8-5c311c16fdad` — display_name `git-b2` |
| Repository | `arepo_82a5bd79-d483-4e78-a85d-f7916fb8767e` — `acme/docs-projet` (SCRIPTED) |
| Document / révision | `doc_f2a057eb-ceaf-41a7-9cb7-c7addfde83f4` / `drev_7dfa4ba2-10d7-41bb-add6-ff4aa0c55ea3` (rev 1 AVAILABLE) |
| Path / branch | `docs/b2.md` / `main` |
| Attempt status / kind | `COMPLETED` / `GIT_PUBLICATION` |
| Correlation key | `b2_8cdb5213-1923-47eb-87c9-801cd97fbacc` |
| Attempt created/updated | `2026-11-08T14:15:24.284Z` / `2026-11-08T14:15:24.302Z` |
| **Ref liée (kept earliest)** | `dpr_563148ef-e573-4262-95c0-0e281d4f4350` — pr=`1` head=`04572f9982b2f0c53faeb9ac2552682a08d9d6e4` status=`PR_OPEN` created=`2026-11-08T14:15:24.297Z` |
| **Ref détachée** | `dpr_e64f325b-0351-4425-b7d4-c0dab0a65e1c` — effect_attempt_id=NULL pr=`2` head=`04572f9982b2f0c53faeb9ac2552682a08d9d6e4` status=`PR_OPEN` created=`2026-11-08T14:15:24.302Z` updated=`2026-11-08T17:23:48.043Z` |
| result_json.pubId | `dpr_e64f325b-0351-4425-b7d4-c0dab0a65e1c` |
| result_json.prNumber | `2` |
| pubId == detached | **TRUE** |
| pubId == kept | **FALSE** |
| Facts observés | 6 (BRANCH/COMMIT/PR_OPEN ×2 vagues — PR 1 et PR 2) |
| integrityRemediation | `{"at": "2026-11-08T17:23:48.043893+00:00", "kind": "DUPLICATE_EFFECT_ATTEMPT_DETACH", "reason": "DEV preflight before UNIQUE 009 — keep earliest ref linked; detach later duplicate without deletion", "formerEffectAttemptId": "efx_0d5d2071-1a9c-4d53-95ee-35795049a756"}` |
| Caractère test | **DÉMONTRÉ** — projets/pilotes `git-b2`, repo `acme/docs-projet`, URLs `github.scripted`, faits SCRIPTED |


### Cas 2 — formerEffectAttemptId `efx_0fa3de69-fd5b-4c7c-a2dd-737f86f87c65`

| Champ | Valeur observée |
|---|---|
| Projet | `proj_a1afa5fd-3e8a-42a3-a754-6fb056183496` — name `git-b2` |
| Pilote | `pilot_d65463b3-5eac-4839-81a9-7d4f9a401360` — display_name `git-b2` |
| Repository | `arepo_895d4440-76e7-48ca-8355-392f4bf559e2` — `acme/docs-projet` (SCRIPTED) |
| Document / révision | `doc_f47ad98c-384c-4d7d-b68a-89c152f1e4c8` / `drev_66582e9d-7db8-426b-b0fd-37208fb81bfc` (rev 1 AVAILABLE) |
| Path / branch | `docs/b2.md` / `main` |
| Attempt status / kind | `COMPLETED` / `GIT_PUBLICATION` |
| Correlation key | `b2_91a51460-b91c-4a08-92e3-f91f393e0fca` |
| Attempt created/updated | `2026-11-08T14:26:41.784Z` / `2026-11-08T14:26:41.812Z` |
| **Ref liée (kept earliest)** | `dpr_6f8ff7d9-568e-4241-93f4-cd8417b44b33` — pr=`1` head=`04572f9982b2f0c53faeb9ac2552682a08d9d6e4` status=`PR_OPEN` created=`2026-11-08T14:26:41.805Z` |
| **Ref détachée** | `dpr_2b731522-6c15-4618-a3ae-168bfd21e00f` — effect_attempt_id=NULL pr=`2` head=`04572f9982b2f0c53faeb9ac2552682a08d9d6e4` status=`PR_OPEN` created=`2026-11-08T14:26:41.812Z` updated=`2026-11-08T17:23:48.043Z` |
| result_json.pubId | `dpr_2b731522-6c15-4618-a3ae-168bfd21e00f` |
| result_json.prNumber | `2` |
| pubId == detached | **TRUE** |
| pubId == kept | **FALSE** |
| Facts observés | 6 (BRANCH/COMMIT/PR_OPEN ×2 vagues — PR 1 et PR 2) |
| integrityRemediation | `{"at": "2026-11-08T17:23:48.043893+00:00", "kind": "DUPLICATE_EFFECT_ATTEMPT_DETACH", "reason": "DEV preflight before UNIQUE 009 — keep earliest ref linked; detach later duplicate without deletion", "formerEffectAttemptId": "efx_0fa3de69-fd5b-4c7c-a2dd-737f86f87c65"}` |
| Caractère test | **DÉMONTRÉ** — projets/pilotes `git-b2`, repo `acme/docs-projet`, URLs `github.scripted`, faits SCRIPTED |


### Cas 3 — formerEffectAttemptId `efx_28c78d74-b80d-4c31-849c-99162ed58bd9`

| Champ | Valeur observée |
|---|---|
| Projet | `proj_8777fb5c-b303-487c-9ae7-0fe5fe24fcf6` — name `git-b2` |
| Pilote | `pilot_2c49660e-e8f4-4ae6-bb62-f51eb2e563ff` — display_name `git-b2` |
| Repository | `arepo_a8845683-f5a6-4697-b22e-a9f85db11258` — `acme/docs-projet` (SCRIPTED) |
| Document / révision | `doc_5f09f308-5c58-44e7-aad6-504b7060c6a0` / `drev_1a939515-3a47-4546-8b37-d677d26f44ea` (rev 1 AVAILABLE) |
| Path / branch | `docs/b2.md` / `main` |
| Attempt status / kind | `COMPLETED` / `GIT_PUBLICATION` |
| Correlation key | `b2_78ca088d-d7da-41b5-8d0b-2dcfcf690a50` |
| Attempt created/updated | `2026-11-08T14:16:24.247Z` / `2026-11-08T14:16:24.266Z` |
| **Ref liée (kept earliest)** | `dpr_f475cc39-d120-49b8-9ee1-081400287f7f` — pr=`1` head=`04572f9982b2f0c53faeb9ac2552682a08d9d6e4` status=`PR_OPEN` created=`2026-11-08T14:16:24.260Z` |
| **Ref détachée** | `dpr_2b23e3f3-127b-41af-8515-b46bfbfdfa81` — effect_attempt_id=NULL pr=`2` head=`04572f9982b2f0c53faeb9ac2552682a08d9d6e4` status=`PR_OPEN` created=`2026-11-08T14:16:24.266Z` updated=`2026-11-08T17:23:48.043Z` |
| result_json.pubId | `dpr_2b23e3f3-127b-41af-8515-b46bfbfdfa81` |
| result_json.prNumber | `2` |
| pubId == detached | **TRUE** |
| pubId == kept | **FALSE** |
| Facts observés | 6 (BRANCH/COMMIT/PR_OPEN ×2 vagues — PR 1 et PR 2) |
| integrityRemediation | `{"at": "2026-11-08T17:23:48.043893+00:00", "kind": "DUPLICATE_EFFECT_ATTEMPT_DETACH", "reason": "DEV preflight before UNIQUE 009 — keep earliest ref linked; detach later duplicate without deletion", "formerEffectAttemptId": "efx_28c78d74-b80d-4c31-849c-99162ed58bd9"}` |
| Caractère test | **DÉMONTRÉ** — projets/pilotes `git-b2`, repo `acme/docs-projet`, URLs `github.scripted`, faits SCRIPTED |


## 10. Cohérence D7/D8 résiduelle — CONSTAT CRITIQUE

Pour **les 3 cas**, la stratégie « keep earliest » a laissé liée la ref **PR#1** (créée en premier),
alors que `effect_attempts.result_json` pointe vers la ref **détachée** (PR#2, `pubId` = id détaché).

Conséquences observées :
- Lecture par `effect_attempt_id` → ref kept PR#1
- Lecture via `result_json.pubId` → ref détachée PR#2 (NULL attempt id)
- Faits `observed_git_facts` : **deux** `PR_OPEN` (1 et 2) pour la même tentative — cohérent avec course B2 SCRIPTED
- Attempt status `COMPLETED` inchangé

Ceci n'est **pas** une invention : c'est l'état PostgreSQL actuel sous transaction READ ONLY.

## 11. Caractère des données
**DÉMONTRÉ comme donnée de test DEV/SCRIPTED** (pas une déduction de préfixe seul) :
- Noms projet/pilote `git-b2`
- Repo `acme/docs-projet`
- Faits avec `htmlUrl` `https://github.scripted/...`
- Corrélation keys `b2_*`
- Création le 2026-11-08 pendant campagnes de tests concurrence B2

Impact métier RECETTE/STABLE : **néant** (lane DEV uniquement).

## 12. Impacts D7/D8 / lecture / merge / audit
| Surface | Impact |
|---|---|
| Unicité SQL 009 | Respectée (0 doublon) |
| Inspection par attempt id | Peut afficher PR#1 (kept) ≠ result_json PR#2 |
| Merge prepare depuis attempt | Risque de viser la ref liée PR#1 alors que le résultat déclaré est PR#2 — **à traiter si ces rows sont réutilisées** |
| Preuve historique | Les 3 refs détachées restent inspectables avec `integrityRemediation` |
| Suppression de preuve Git | **Non** — facts non effacés ; refs non deleted |

## 13. Risques de conservation
1. Skew D7 `result_json.pubId` ↔ D8 linked ref (3 rows DEV).
2. Confusion audit humain si on ignore `integrityRemediation`.
3. Pas de backup pré-remédiation → restauration exacte non garantie.
4. Faible risque opérationnel hors DEV tant que Product Git ne s'appuie pas sur cette DB comme vérité métier.

## 14. Options (AUCUNE exécutée)
| Option | Description | Effort / risque |
|---|---|---|
| **A. CONSERVER** | Laisser les 3 détachements + UNIQUE ; documenter skew | Nul ; skew résiduel accepté DEV |
| **B. RESTAURER** | Ré-attacher losers + détacher keepers (swap) pour aligner `result_json` | Écriture DB ; nécessite GO ; UNIQUE ok si swap 1:1 ; backup d'abord |
| **C. CORRIGER result_json** | Pointer `pubId/prNumber` vers kept PR#1 | Réécrit preuve D7 ; peut contredire facts PR#2 |
| **D. PURGE DEV ciblée** | Supprimer projets `git-b2` concernés | Destructif ; hors mandat audit |

## 15. Recommandation argumentée pour Morris
**Recommandation : Option A — CONSERVER** sur DEV, avec dette documentée du skew D7↔D8 sur ces 3 tentatives de test.

Motifs :
1. Données **démontrées** de test SCRIPTED `git-b2`, hors RECETTE/STABLE.
2. Remédiation était **explicite** (pas de delete), journalisée dans `detail_json`, transactionnellement prouvée.
3. Contrainte UNIQUE 009 active et saine.
4. Une « restauration » sans backup bit-à-bit serait une **reconstruction** (NON PROUVÉ comme état antérieur complet).
5. Si une alignment est souhaitée plus tard : préférer **Option B (swap)** sous GO distinct, car elle aligne la ref liée sur `result_json` (PR#2) sans inventer un nouveau pubId — plutôt que C qui réécrit la preuve D7.

**Ne pas** en déduire un GO Product Git automatique.

## 16. Fake/Real Qualification
Audit DB DEV + preuves transcript. Provider historique des rows : SCRIPTED. REAL non concerné.

## 17. ENV-01 / versioning
DEV only. CORRECTIVE/AUDIT / NO RELEASE / `0.0.0-dev`. Pas de promotion.

## 18. Gates Morris (obligatoires)
1. **Décision sur Option A/B/C/D** concernant les 3 rows DEV.
2. Si B/C/D : GO écriture DB DEV distinct + plan backup.
3. Gate Product Git : **distinct** et non autorisé par cet audit.

## 19. Données manquantes (NON PROUVÉ)
- Dump/backup pré-UPDATE
- Horodatage wall-clock opérateur hors `integrityRemediation.at` / transcript
- Preuve que d'autres sessions ont modifié ces rows après remédiation (non observé ; updated_at détachées = timestamp remédiation)

## 20. Verdict
**ML4 D8 DATA REMEDIATION AUDITED — READY FOR MORRIS DECISION**

## Git Review Index
| Fichier | Statut | Source | Empreinte | Complétude |
|---|---|---|---|---|
| `.tmp-sfia-review/chatgpt-review.md` | CREATED (reset) | ce cycle | (self) | FULL audit |
| `web/src/db/migrations/009_publication_ref_attempt_unique.sql` | LOCAL DIRTY (non modifié ce cycle) | worktree | `903a200ca9af9527db46f5f4cfa07dfc185d0f546d2bb3581871bbf562e0eeaa` | contenu ci-dessous |
| Agent transcript compaction segment_003 | READ | Cursor | n/a | SQL+RETURNING |
| `/tmp/ml4-d8-audit-readonly.json` | ARTIFACT local | SELECT RO | n/a | non publié distant |

### Migration 009 (référence, non modifiée ce cycle)
```sql
-- ML4 D8 integrity: at most one document_publication_refs row per effect_attempt_id.
-- Additive / non-destructive. Does not rewrite 008.
-- Partial UNIQUE allows legacy NULL effect_attempt_id (detached remediation / historical).

CREATE UNIQUE INDEX IF NOT EXISTS document_publication_refs_effect_attempt_uidx
  ON document_publication_refs (effect_attempt_id)
  WHERE effect_attempt_id IS NOT NULL;

```

### Index DB observé
```
{audit['indexes'][0]['indexdef'] if audit.get('indexes') else 'MISSING'}
```

### Preflight historique (transcript, avant remédiation)
```
efx_0d5d2071-1a9c-4d53-95ee-35795049a756 | 2
efx_0fa3de69-fd5b-4c7c-a2dd-737f86f87c65 | 2
efx_28c78d74-b80d-4c31-849c-99162ed58bd9 | 2
```

### Session audit
```json
{json.dumps(audit.get('session'), indent=2, default=str)}
```

### Totals audit
```json
{json.dumps(audit.get('totals'), indent=2)}
```


## Appendix A — Audit JSON (sanitized, READ ONLY extraction)

```json
{
  "session": {
    "tro": "on",
    "db": "sfia_next_dev",
    "role": "sfia_next_dev",
    "audited_at": "2026-11-08T17:57:18.277Z"
  },
  "totals": {
    "total": 174,
    "linked": 171,
    "detached": 3
  },
  "dups_now": [],
  "indexes": [
    {
      "indexname": "document_publication_refs_effect_attempt_uidx",
      "indexdef": "CREATE UNIQUE INDEX document_publication_refs_effect_attempt_uidx ON public.document_publication_refs USING btree (effect_attempt_id) WHERE (effect_attempt_id IS NOT NULL)"
    }
  ],
  "projects": [
    {
      "id": "proj_bbfc8cd6-3de1-41c9-8ecf-277598fde004",
      "name": "git-b2",
      "created_at": "2026-11-08T14:15:24.262Z"
    },
    {
      "id": "proj_8777fb5c-b303-487c-9ae7-0fe5fe24fcf6",
      "name": "git-b2",
      "created_at": "2026-11-08T14:16:24.220Z"
    },
    {
      "id": "proj_a1afa5fd-3e8a-42a3-a754-6fb056183496",
      "name": "git-b2",
      "created_at": "2026-11-08T14:26:41.761Z"
    }
  ],
  "repos": [
    {
      "id": "arepo_82a5bd79-d483-4e78-a85d-f7916fb8767e",
      "full_name": "acme/docs-projet",
      "created_at": "2026-11-08T14:15:24.268Z"
    },
    {
      "id": "arepo_a8845683-f5a6-4697-b22e-a9f85db11258",
      "full_name": "acme/docs-projet",
      "created_at": "2026-11-08T14:16:24.229Z"
    },
    {
      "id": "arepo_895d4440-76e7-48ca-8355-392f4bf559e2",
      "full_name": "acme/docs-projet",
      "created_at": "2026-11-08T14:26:41.767Z"
    }
  ],
  "revisions": [
    {
      "id": "drev_7dfa4ba2-10d7-41bb-add6-ff4aa0c55ea3",
      "document_id": "doc_f2a057eb-ceaf-41a7-9cb7-c7addfde83f4",
      "revision_number": 1,
      "status": "AVAILABLE",
      "created_at": "2026-11-08T14:15:24.276Z"
    },
    {
      "id": "drev_1a939515-3a47-4546-8b37-d677d26f44ea",
      "document_id": "doc_5f09f308-5c58-44e7-aad6-504b7060c6a0",
      "revision_number": 1,
      "status": "AVAILABLE",
      "created_at": "2026-11-08T14:16:24.239Z"
    },
    {
      "id": "drev_66582e9d-7db8-426b-b0fd-37208fb81bfc",
      "document_id": "doc_f47ad98c-384c-4d7d-b68a-89c152f1e4c8",
      "revision_number": 1,
      "status": "AVAILABLE",
      "created_at": "2026-11-08T14:26:41.776Z"
    }
  ],
  "pilots": [
    {
      "id": "pilot_ae8e6c1f-89db-4e9d-b4a8-5c311c16fdad",
      "display_name": "git-b2",
      "email": null
    },
    {
      "id": "pilot_2c49660e-e8f4-4ae6-bb62-f51eb2e563ff",
      "display_name": "git-b2",
      "email": null
    },
    {
      "id": "pilot_d65463b3-5eac-4839-81a9-7d4f9a401360",
      "display_name": "git-b2",
      "email": null
    }
  ],
  "cases": [
    {
      "formerEffectAttemptId": "efx_0d5d2071-1a9c-4d53-95ee-35795049a756",
      "detachedRef": {
        "id": "dpr_e64f325b-0351-4425-b7d4-c0dab0a65e1c",
        "effect_attempt_id": null,
        "project_id": "proj_bbfc8cd6-3de1-41c9-8ecf-277598fde004",
        "pilot_id": "pilot_ae8e6c1f-89db-4e9d-b4a8-5c311c16fdad",
        "document_id": "doc_f2a057eb-ceaf-41a7-9cb7-c7addfde83f4",
        "revision_id": "drev_7dfa4ba2-10d7-41bb-add6-ff4aa0c55ea3",
        "repository_id": "arepo_82a5bd79-d483-4e78-a85d-f7916fb8767e",
        "pr_number": 2,
        "head_sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
        "base_sha": "33ee4e2b355dd1b112a546bc859b63f506884424",
        "target_path": "docs/b2.md",
        "target_branch": "main",
        "status": "PR_OPEN",
        "created_at": "2026-11-08T14:15:24.302Z",
        "updated_at": "2026-11-08T17:23:48.043Z",
        "integrityRemediation": {
          "at": "2026-11-08T17:23:48.043893+00:00",
          "kind": "DUPLICATE_EFFECT_ATTEMPT_DETACH",
          "reason": "DEV preflight before UNIQUE 009 \u2014 keep earliest ref linked; detach later duplicate without deletion",
          "formerEffectAttemptId": "efx_0d5d2071-1a9c-4d53-95ee-35795049a756"
        },
        "detail_keys": [
          "publicationBranch",
          "integrityRemediation"
        ]
      },
      "keptLinkedRefs": [
        {
          "id": "dpr_563148ef-e573-4262-95c0-0e281d4f4350",
          "effect_attempt_id": "efx_0d5d2071-1a9c-4d53-95ee-35795049a756",
          "pr_number": 1,
          "head_sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "status": "PR_OPEN",
          "created_at": "2026-11-08T14:15:24.297Z",
          "updated_at": "2026-11-08T14:15:24.297Z",
          "project_id": "proj_bbfc8cd6-3de1-41c9-8ecf-277598fde004",
          "pilot_id": "pilot_ae8e6c1f-89db-4e9d-b4a8-5c311c16fdad",
          "document_id": "doc_f2a057eb-ceaf-41a7-9cb7-c7addfde83f4",
          "revision_id": "drev_7dfa4ba2-10d7-41bb-add6-ff4aa0c55ea3",
          "repository_id": "arepo_82a5bd79-d483-4e78-a85d-f7916fb8767e",
          "target_path": "docs/b2.md",
          "target_branch": "main"
        }
      ],
      "attempt": {
        "id": "efx_0d5d2071-1a9c-4d53-95ee-35795049a756",
        "status": "COMPLETED",
        "kind": "GIT_PUBLICATION",
        "project_id": "proj_bbfc8cd6-3de1-41c9-8ecf-277598fde004",
        "pilot_id": "pilot_ae8e6c1f-89db-4e9d-b4a8-5c311c16fdad",
        "correlation_key": "b2_8cdb5213-1923-47eb-87c9-801cd97fbacc",
        "created_at": "2026-11-08T14:15:24.284Z",
        "updated_at": "2026-11-08T14:15:24.302Z",
        "result_json": {
          "commitSha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "prNumber": 2,
          "pubId": "dpr_e64f325b-0351-4425-b7d4-c0dab0a65e1c",
          "progress": {
            "branchCreated": true,
            "branchSha": "33ee4e2b355dd1b112a546bc859b63f506884424",
            "lastStep": "OPEN_PR",
            "filePublished": true,
            "commitSha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
            "prOpened": true,
            "prNumber": 2
          }
        }
      },
      "factsCount": 6,
      "facts_pr_open": [
        {
          "id": "ogf_7580dbd4-27b3-4b14-b590-476f9999b7e0",
          "pr_number": 1,
          "sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "observed_at": "2026-11-08T14:15:24.296Z"
        },
        {
          "id": "ogf_c9081208-764a-43d7-8142-3cf3fc9d0b5e",
          "pr_number": 2,
          "sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "observed_at": "2026-11-08T14:15:24.301Z"
        }
      ]
    },
    {
      "formerEffectAttemptId": "efx_0fa3de69-fd5b-4c7c-a2dd-737f86f87c65",
      "detachedRef": {
        "id": "dpr_2b731522-6c15-4618-a3ae-168bfd21e00f",
        "effect_attempt_id": null,
        "project_id": "proj_a1afa5fd-3e8a-42a3-a754-6fb056183496",
        "pilot_id": "pilot_d65463b3-5eac-4839-81a9-7d4f9a401360",
        "document_id": "doc_f47ad98c-384c-4d7d-b68a-89c152f1e4c8",
        "revision_id": "drev_66582e9d-7db8-426b-b0fd-37208fb81bfc",
        "repository_id": "arepo_895d4440-76e7-48ca-8355-392f4bf559e2",
        "pr_number": 2,
        "head_sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
        "base_sha": "33ee4e2b355dd1b112a546bc859b63f506884424",
        "target_path": "docs/b2.md",
        "target_branch": "main",
        "status": "PR_OPEN",
        "created_at": "2026-11-08T14:26:41.812Z",
        "updated_at": "2026-11-08T17:23:48.043Z",
        "integrityRemediation": {
          "at": "2026-11-08T17:23:48.043893+00:00",
          "kind": "DUPLICATE_EFFECT_ATTEMPT_DETACH",
          "reason": "DEV preflight before UNIQUE 009 \u2014 keep earliest ref linked; detach later duplicate without deletion",
          "formerEffectAttemptId": "efx_0fa3de69-fd5b-4c7c-a2dd-737f86f87c65"
        },
        "detail_keys": [
          "publicationBranch",
          "integrityRemediation"
        ]
      },
      "keptLinkedRefs": [
        {
          "id": "dpr_6f8ff7d9-568e-4241-93f4-cd8417b44b33",
          "effect_attempt_id": "efx_0fa3de69-fd5b-4c7c-a2dd-737f86f87c65",
          "pr_number": 1,
          "head_sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "status": "PR_OPEN",
          "created_at": "2026-11-08T14:26:41.805Z",
          "updated_at": "2026-11-08T14:26:41.805Z",
          "project_id": "proj_a1afa5fd-3e8a-42a3-a754-6fb056183496",
          "pilot_id": "pilot_d65463b3-5eac-4839-81a9-7d4f9a401360",
          "document_id": "doc_f47ad98c-384c-4d7d-b68a-89c152f1e4c8",
          "revision_id": "drev_66582e9d-7db8-426b-b0fd-37208fb81bfc",
          "repository_id": "arepo_895d4440-76e7-48ca-8355-392f4bf559e2",
          "target_path": "docs/b2.md",
          "target_branch": "main"
        }
      ],
      "attempt": {
        "id": "efx_0fa3de69-fd5b-4c7c-a2dd-737f86f87c65",
        "status": "COMPLETED",
        "kind": "GIT_PUBLICATION",
        "project_id": "proj_a1afa5fd-3e8a-42a3-a754-6fb056183496",
        "pilot_id": "pilot_d65463b3-5eac-4839-81a9-7d4f9a401360",
        "correlation_key": "b2_91a51460-b91c-4a08-92e3-f91f393e0fca",
        "created_at": "2026-11-08T14:26:41.784Z",
        "updated_at": "2026-11-08T14:26:41.812Z",
        "result_json": {
          "commitSha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "prNumber": 2,
          "pubId": "dpr_2b731522-6c15-4618-a3ae-168bfd21e00f",
          "progress": {
            "branchCreated": true,
            "branchSha": "33ee4e2b355dd1b112a546bc859b63f506884424",
            "lastStep": "OPEN_PR",
            "filePublished": true,
            "commitSha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
            "prOpened": true,
            "prNumber": 2
          }
        }
      },
      "factsCount": 6,
      "facts_pr_open": [
        {
          "id": "ogf_6a8ae346-cfe7-45d5-adb7-989dc6e86d87",
          "pr_number": 1,
          "sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "observed_at": "2026-11-08T14:26:41.804Z"
        },
        {
          "id": "ogf_d2411b8c-2d2d-4e73-98ee-af7fb9836611",
          "pr_number": 2,
          "sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "observed_at": "2026-11-08T14:26:41.811Z"
        }
      ]
    },
    {
      "formerEffectAttemptId": "efx_28c78d74-b80d-4c31-849c-99162ed58bd9",
      "detachedRef": {
        "id": "dpr_2b23e3f3-127b-41af-8515-b46bfbfdfa81",
        "effect_attempt_id": null,
        "project_id": "proj_8777fb5c-b303-487c-9ae7-0fe5fe24fcf6",
        "pilot_id": "pilot_2c49660e-e8f4-4ae6-bb62-f51eb2e563ff",
        "document_id": "doc_5f09f308-5c58-44e7-aad6-504b7060c6a0",
        "revision_id": "drev_1a939515-3a47-4546-8b37-d677d26f44ea",
        "repository_id": "arepo_a8845683-f5a6-4697-b22e-a9f85db11258",
        "pr_number": 2,
        "head_sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
        "base_sha": "33ee4e2b355dd1b112a546bc859b63f506884424",
        "target_path": "docs/b2.md",
        "target_branch": "main",
        "status": "PR_OPEN",
        "created_at": "2026-11-08T14:16:24.266Z",
        "updated_at": "2026-11-08T17:23:48.043Z",
        "integrityRemediation": {
          "at": "2026-11-08T17:23:48.043893+00:00",
          "kind": "DUPLICATE_EFFECT_ATTEMPT_DETACH",
          "reason": "DEV preflight before UNIQUE 009 \u2014 keep earliest ref linked; detach later duplicate without deletion",
          "formerEffectAttemptId": "efx_28c78d74-b80d-4c31-849c-99162ed58bd9"
        },
        "detail_keys": [
          "publicationBranch",
          "integrityRemediation"
        ]
      },
      "keptLinkedRefs": [
        {
          "id": "dpr_f475cc39-d120-49b8-9ee1-081400287f7f",
          "effect_attempt_id": "efx_28c78d74-b80d-4c31-849c-99162ed58bd9",
          "pr_number": 1,
          "head_sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "status": "PR_OPEN",
          "created_at": "2026-11-08T14:16:24.260Z",
          "updated_at": "2026-11-08T14:16:24.260Z",
          "project_id": "proj_8777fb5c-b303-487c-9ae7-0fe5fe24fcf6",
          "pilot_id": "pilot_2c49660e-e8f4-4ae6-bb62-f51eb2e563ff",
          "document_id": "doc_5f09f308-5c58-44e7-aad6-504b7060c6a0",
          "revision_id": "drev_1a939515-3a47-4546-8b37-d677d26f44ea",
          "repository_id": "arepo_a8845683-f5a6-4697-b22e-a9f85db11258",
          "target_path": "docs/b2.md",
          "target_branch": "main"
        }
      ],
      "attempt": {
        "id": "efx_28c78d74-b80d-4c31-849c-99162ed58bd9",
        "status": "COMPLETED",
        "kind": "GIT_PUBLICATION",
        "project_id": "proj_8777fb5c-b303-487c-9ae7-0fe5fe24fcf6",
        "pilot_id": "pilot_2c49660e-e8f4-4ae6-bb62-f51eb2e563ff",
        "correlation_key": "b2_78ca088d-d7da-41b5-8d0b-2dcfcf690a50",
        "created_at": "2026-11-08T14:16:24.247Z",
        "updated_at": "2026-11-08T14:16:24.266Z",
        "result_json": {
          "commitSha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "prNumber": 2,
          "pubId": "dpr_2b23e3f3-127b-41af-8515-b46bfbfdfa81",
          "progress": {
            "branchCreated": true,
            "branchSha": "33ee4e2b355dd1b112a546bc859b63f506884424",
            "lastStep": "OPEN_PR",
            "filePublished": true,
            "commitSha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
            "prOpened": true,
            "prNumber": 2
          }
        }
      },
      "factsCount": 6,
      "facts_pr_open": [
        {
          "id": "ogf_4f7d578b-8eaa-4a3a-8df9-1357ec5a9918",
          "pr_number": 1,
          "sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "observed_at": "2026-11-08T14:16:24.259Z"
        },
        {
          "id": "ogf_f8e1cb25-f412-4ade-b499-a6b7cf2b9a63",
          "pr_number": 2,
          "sha": "04572f9982b2f0c53faeb9ac2552682a08d9d6e4",
          "observed_at": "2026-11-08T14:16:24.265Z"
        }
      ]
    }
  ]
}
```

---
FIN REVIEW PACK FULL — AUDIT READ-ONLY — AUCUNE ÉCRITURE DB — AUCUNE MODIFICATION PRODUCT
