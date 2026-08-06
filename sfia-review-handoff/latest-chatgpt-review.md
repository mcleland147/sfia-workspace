# Review Pack Full — FinOps Technical Lot T1 Execution Pack Preparation

## Meta

- Locale : 2026-08-06 23:51:21 CEST (+0200)
- UTC : 2026-08-06 21:51:21 UTC
- GO / décision Morris : `ok go T1`
- Horodatage décision : 2026-08-06 23:29 CEST (+0200) / 21:29 UTC (secondes exactes non inventées)
- Cycle : Architecture technique — Implementation Preparation
- Mode : FinOps Technical Lot T1 Capture and Persistence Execution Pack
- Profil : Critical
- Typologie : EVOL / DOC / ARCHITECTURE / FINOPS / PERSISTENCE / DEVOPS / SECURITY

## Coverage

- document 135 complet : yes
- Local Git Truth initiale : yes
- Local Git Truth finale : yes
- matrice décisions : yes
- synthesis only : no
- placeholder actif : no
- verdict : complete

## Local Git Truth initiale / finale (worktree propre)

```text
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
branch=implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
origin_main=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=NONE
tracked_diff=(empty)
untracked_project=projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
document_103_unchanged=yes
handoff_tip_observed=29152c5d20d50db5064083eb98329ac8d9dfcdfc	refs/heads/sfia/review-handoff
t0_historical_handoff_commit=2cf71c8eb1e23a68937828f764fd8c996dbd7f97
t0_historical_handoff_blob=48c72c051f194975b1bb1958578410d056e0cb5c
```

## Fichier créé

`projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md`

- lines : 548
- bytes : 23328
- UTF-8 / LF / final newline
- aucun secret

## Contenu complet du document 135

```markdown
# 135 — FinOps Technical Lot T1 — Capture and Persistence Execution Pack

## 1. Statut et anti-claims

**T0 MERGED AND POST-MERGE CI PASSED**

**T1 EXECUTION PACK PREPARED**

**T1 NOT IMPLEMENTED**

**T1 DELIVERY NOT AUTHORIZED**

**NO DATABASE PROVISIONED OR ACCESSED**

**NO OPENAI REAL CALL**

**NO CREDENTIAL RECEIVED OR DISPLAYED**

**T2 TO T7 NOT AUTHORIZED**

**LOT-D1 TO LOT-D5 NOT AUTHORIZED**

Ce document est un pack d’exécution documentaire. Il ne constitue pas une autorisation d’installation de packages, de provisionnement Neon, d’appel OpenAI réel, de création SQL/migration, de modification CI, de commit/push projet, ni de PR.

## 2. Autorité Morris et GO consommé

Décision Morris exacte :

```text
ok go T1
```

Qualification : cette phrase autorise **exclusivement** la préparation complète du FinOps Technical Lot T1 (document 135 + Review Pack + Review Handoff). Elle n’autorise pas l’implémentation T1, ni l’accès DB/provider, ni la Delivery.

## 3. Horodatage

| Événement | Horodatage |
|---|---|
| Décision Morris | 2026-08-06 23:29 CEST (+0200) / 21:29 UTC (secondes exactes non inventées) |
| Travail Cursor (création document) | 2026-08-06 23:50:02 CEST (+0200) / 2026-08-06 21:50:02 UTC |

## 4. Git Truth et preuve T0

| Élément | Valeur |
|---|---|
| `origin/main` | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| Merge T0 (H1 PR #312) | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| Head T0 consommé | `489605cb2f2bd7c5db7174af2bc94715f1d3a8e1` |
| Parent 1 merge | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| Parent 2 merge | `489605cb2f2bd7c5db7174af2bc94715f1d3a8e1` |
| PR | #312 MERGED |
| CI post-merge | SFIA Studio CI **#104** / run `31111626695` / success / event `push` |
| Handoff historique T0 (immuable) | commit `2cf71c8eb1e23a68937828f764fd8c996dbd7f97` · blob `48c72c051f194975b1bb1958578410d056e0cb5c` |
| Tip `sfia/review-handoff` observé en début de cycle | `29152c5d20d50db5064083eb98329ac8d9dfcdfc` (latest rotatif — **ne pas** confondre avec le handoff T0 historique) |
| Document 135 avant cycle | **ABSENT** |
| Branche de préparation | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack` |
| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack` |
| Upstream | aucun |
| Index / tracked mods (worktree propre) | vides au démarrage |

Note méthodologique : des worktrees antérieurs de tentative T1 ont été contaminés par un changement de root agent ; ils n’ont pas été utilisés pour l’édition. Le worktree ci-dessus a été vérifié à `0cdf57a…` avant écriture.

## 5. Sources consultées

| Source | Rôle |
|---|---|
| `prompts/templates/sfia-cycle-execution-template.md` | Template cycle SFIA v2.6 |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routage cycles |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Operating model |
| `projects/sfia-studio/103-…-technical-implementation-backlog.md` | Backlog opérationnel · A2 Neon/pg/node-pg-migrate · FIND-03 Money · anti-gates §33 |
| `projects/sfia-studio/123-…-finops-enforcement-decisions-applied.md` | Décisions enforcement (hors T1 actif) |
| `projects/sfia-studio/125-…-finops-technical-implementation-decisions-applied.md` | CAP-C · BND-A · TECH-STORE/IDEM/MIG · périmètre T1 |
| `projects/sfia-studio/126`–`134` | Execution pack / records / readiness / findings T0 |
| `projects/sfia-studio/app/package.json` + `package-lock.json` | Dépendances actuelles (`openai` présent · `pg`/`node-pg-migrate` absents) |
| `.github/workflows/sfia-studio-ci.yml` | CI Studio · Node 24 · pas de service Postgres |
| `app/lib/oa/finops/**` + `__tests__/oa/finops/**` | Domaine T0 pur |
| `app/lib/oa/execution-run/application/coordinateExecutionRun.ts` | Capture usage post-provider |
| `app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts` | Mapping `ProviderUsage` → `UsageSummary` |
| `app/lib/platform/ai/openaiProvider.ts` | Provider OpenAI Responses API |
| `app/lib/platform/ai/types.ts` | `ProviderUsage` |
| `app/lib/oa/execution-run/domain/types.ts` | `UsageSummary` |
| `app/lib/platform/ai/config.ts` | `OPENAI_API_KEY` / `OPENAI_MODEL` |
| `.gitignore` | Ignore `.env` / `.env.*` |
| `scripts/sfia/publish-review-handoff.sh` | Publisher handoff L3 |
| Métadonnées npm read-only (`pg`, `node-pg-migrate`, `@types/pg`) | Versions candidates |

## 6. État existant du runtime

### 6.1 Flux `coordinateExecutionRun`

Chemin réel :

`projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts`

Flux observé (succès provider) :

1. préflight / create / engage ;
2. invocation `AiExecutionPort.complete` (adapter plateforme) ;
3. si `providerResult.kind === "success"` → `validatedUsage(providerResult.usage)` ;
4. transitions d’état execution-run ;
5. retour `CoordinateExecutionRunResult` avec `validatedUsage`.

`validatedUsage` devient disponible **uniquement** sur le chemin succès provider (ou normalisé depuis usage provider). Sur échec/timeout/cancel/hostile/invalid : `status: "unavailable"` avec reason.

**Aucune écriture FinOps ledger / PostgreSQL** n’existe aujourd’hui dans ce flux.

### 6.2 Adapter et provider

| Composant | Chemin |
|---|---|
| Adapter | `…/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts` |
| Provider canonique | `…/platform/ai/openaiProvider.ts` |
| Re-export ops1 | `…/ops1/conversation/openaiProvider.ts` → même classe |

Mapping adapter : si `inputTokens` ou `outputTokens` non null → `UsageSummary.status = "validated"` ; sinon `unavailable` (`provider usage missing`).

Provider lit Responses API `usage.input_tokens` / `output_tokens` / `total_tokens` → `ProviderUsage`.

### 6.3 Types

- `ProviderUsage` : `app/lib/platform/ai/types.ts` — `inputTokens`, `outputTokens`, `totalTokens`, `model`, `providerResponseId` (nullable).
- `UsageSummary` : `app/lib/oa/execution-run/domain/types.ts` — `validated` | `unavailable`.

### 6.4 Stockage actuel

- Execution-run : `persistence.kind: "memory_process_local"` · repository mémoire process-local.
- FinOps T0 : contrats purs uniquement · **aucune** persistence.
- Aucun dossier `migrations/` sous `projects/sfia-studio`.
- Aucune `DATABASE_URL` Studio.

### 6.5 Dépendances

- `openai`: `^6.48.0` (présent).
- `pg` : **absent**.
- `node-pg-migrate` : **absent**.
- Scripts migrate : **absents**.
- CI Node : **24**.

### 6.6 Environnement

- Variables référencées : `OPENAI_API_KEY`, `OPENAI_MODEL`, `OPS1_CONVERSATION_PROVIDER`.
- Pas de `.env.example` sous `projects/sfia-studio`.
- `.gitignore` ignore `.env` / `.env.*` (exception `!.env.example`).

## 7. Frontière exacte T1

### 7.1 Flux cible (sans code)

```text
provider invocation
→ provider result validation
→ post-provider FinOps capture boundary (CAP-C)
→ canonical event construction
→ deterministic identity (eventId + dedup key)
→ transaction DB
→ immutable ledger insert OR duplicate recognition
→ structured result to caller
```

Writer autoritatif unique : service FinOps serveur (BND-A). UI et domaine T0 purs **n’écrivent pas** PostgreSQL.

### 7.2 Sémantiques opérationnelles (candidats — arbitrage Morris si non déjà SELECTED)

| Situation | Comportement candidat | Statut |
|---|---|---|
| Écriture réussie | résultat `created` · run caller inchangé côté métier | aligné CAP-C |
| Événement déjà présent | résultat `duplicate` · succès idempotent · pas de double comptage | aligné TECH-IDEM-01 |
| DB indisponible | erreur structurée retryable · **ne pas** transformer silencieusement un succès provider en échec métier sans décision | **D-T1-FAILURE-SEMANTICS-01** |
| Usage fournisseur absent | événement `usage_unavailable` ou skip capture selon option | **D-T1-FAILURE-SEMANTICS-01** |
| Usage invalide | rejeter capture · erreur non retryable auditable | candidat |
| Timeout / cancellation provider | pas de capture validated · éventuel marker unavailable | aligné runtime actuel |
| Panne FinOps après succès provider | recommandation candidate : **ne pas** fail-closed le run utilisateur ; surface erreur FinOps séparée | **MORRIS DECISION REQUIRED** |

## 8. Modèle physique candidat — ledger T1

### 8.1 Table candidate `finops_usage_event` (ledger immuable)

**Rôle :** append-only ledger d’événements d’usage post-provider.

| Colonne | Type candidat | Null | Notes |
|---|---|---|---|
| `event_id` | `uuid` (ou `text` canonique) | NOT NULL | PK · déterministe |
| `dedup_key` | `text` | NOT NULL | UNIQUE |
| `project_id` | `text` | NOT NULL | |
| `execution_run_id` | `text` | NOT NULL | |
| `correlation_id` | `text` | NULL | |
| `provider` | `text` | NOT NULL | ex. `openai` |
| `model` | `text` | NULL | |
| `occurred_at` | `timestamptz` | NOT NULL | |
| `period_start` | `date` | NOT NULL | UTC calendar month start |
| `source_of_truth` | `text` | NOT NULL | enum SoT T0 |
| `evidence_class` | `text` | NOT NULL | |
| `input_tokens` | `bigint` | NULL | |
| `output_tokens` | `bigint` | NULL | |
| `total_tokens` | `bigint` | NULL | |
| `cost_minor` / `cost_numeric` | selon Money | NULL | **FIND-03 / D-T1-MONEY-01** |
| `currency_code` | `char(3)` | NULL | ISO 4217 si coût présent |
| `provider_request_id` | `text` | NULL | |
| `correction_ref` | `text` | NULL | réservé corrections futures |
| `usage_status` | `text` | NOT NULL | `validated` / `unavailable` / `invalid` |
| `created_at` | `timestamptz` | NOT NULL | default `now()` |

**Contraintes :**

- PK(`event_id`) ;
- UNIQUE(`dedup_key`) ;
- CHECK tokens ≥ 0 quand non null ;
- **pas** de UPDATE métier ; corrections via nouvel événement + `correction_ref` (évolution future).

**Index candidats :**

- UNIQUE dedup ;
- `(project_id, period_start)` ;
- `(execution_run_id)` ;
- `(occurred_at)`.

**Données interdites :**

- payload OpenAI brut ;
- `OPENAI_API_KEY` / secrets ;
- PII non minimisée (prompts, contenus conversation) ;
- agrégats T2.

**Pas de table d’agrégats T2** dans T1 (TECH-STORE autorise events+aggregates conceptuellement, mais agrégation = T2). T1 se limite au ledger d’événements.

## 9. Représentation Money — FIND-03

FIND-03 reste **OPEN / ACCEPTED RESERVE** jusqu’à décision Morris.

### Option M1 — entier unité mineure + currency

- précision : déterministe ;
- PG : `bigint` + `char(3)` ;
- TS : `number`/`bigint` ;
- risques arrondi : à la frontière d’entrée uniquement ;
- **recommandation candidate : OUI** pour coûts FinOps.

### Option M2 — `numeric` scale explicite + currency

- précision forte ;
- risques de mapping TS/ORM ;
- acceptable si scale figée (ex. 6).

### Option M3 — chaîne décimale domaine + conversion DB

- déterminisme domaine élevé ;
- friction frontière ;
- utile si multi-scale.

**Recommandation candidate :** **M1** (entier unité mineure + ISO 4217).

**Statut :** `D-T1-MONEY-01` — **MORRIS DECISION REQUIRED** — FIND-03 non fermé.

## 10. Stratégie Neon candidate

Compte Neon existe (prérequis opérationnel Morris) · **aucune configuration dans ce cycle**.

| Sujet | Options / notes | Statut |
|---|---|---|
| Projet / env | isolé Studio FinOps | candidat |
| Région | non sélectionnée dans repo | **D-T1-NEON-REGION-01** |
| Plan | non sélectionné | **D-T1-NEON-PLAN-01** |
| Branche DB | possible pour CI/dev | candidat |
| Connexion directe | migrations (`node-pg-migrate`) | **D-T1-DB-CONNECTION-01** |
| Connexion poolée | runtime app | **D-T1-DB-CONNECTION-01** |
| SSL | requis | candidat |
| Variables | `DATABASE_URL` (runtime pool) · `DATABASE_URL_DIRECT` ou `DIRECT_URL` (migrations) — noms candidats | |
| Local / CI / partagé | séparation stricte | |
| Rotation | manuelle Morris | |

Aucun credential demandé ou affiché.

## 11. Stratégie OpenAI candidate

| Sujet | Observation / candidat |
|---|---|
| Moment de lecture usage | post-`complete` provider · avant/après transitions · **après** validation `UsageSummary` |
| Champs disponibles | `inputTokens`, `outputTokens`, `totalTokens`, `model`, `providerResponseId` |
| Mapping FinOps | SoT initial typiquement `API_USAGE` / evidence estimée selon 125 — **ne bloque jamais** |
| Usage absent | `usage_status=unavailable` · tokens null |
| Modèle inconnu | stocker `model` null/unknown text · pas d’invention |
| provider request ID absent | null autorisé |
| Mocks | `OPS1_CONVERSATION_PROVIDER=fake` / fixtures — **sans** clé |
| Provider-real | étape Delivery optionnelle · **D-T1-PROVIDER-REAL-01** |

## 12. Packages et versions

| Package | État actuel | Version candidate (npm read-only) | Rôle | Runtime/dev | Recommandation candidate |
|---|---|---|---|---|---|
| `openai` | `^6.48.0` présent | conserver | provider | runtime | KEEP |
| `pg` | absent | `8.22.0` (engines ≥16) | client PG | runtime | **D-T1-PG-PACKAGE-01** |
| `@types/pg` | absent | `8.20.4` | types | dev | avec `pg` |
| `node-pg-migrate` | absent | `8.0.x` ou `9.0.0` (peer `pg` `<9`) | migrations | dev/runtime migrate | **D-T1-MIGRATION-VERSION-01** — privilégier ligne compatible peer `pg@8` |

Node CI = 24 · compatible.

**Interdit dans ce cycle :** `npm install` / modification lockfile.

## 13. Stratégie migrations

| Élément | Candidat |
|---|---|
| Chemin | `projects/sfia-studio/app/db/migrations/` (**candidat**) |
| Outil | `node-pg-migrate` (TECH-MIG-01 SELECTED) |
| Nommage | timestamp + slug additif |
| Up/down | obligatoires · down non destructif (drop objects créés uniquement si vides / safe) |
| Règles | additives only · **pas** de backfill historique T1 |
| Connexion | **directe** (pas pool transaction mode) |
| Scripts futurs | `migrate:up` / `migrate:down` (non créés ici) |
| CI | selon **D-T1-CI-DATABASE-01** |
| Rollback | flag-off + data preserved (125) |

## 14. Stratégie CI et tests DB

### Option CI-A — service container Postgres GitHub Actions (recommandation candidate)

- reproductible · pas de secret Neon en PR ;
- `services: postgres` + migrate + tests intégration ;
- modification future de `.github/workflows/sfia-studio-ci.yml` → **D-T1-PROTECTED-WORKFLOW-01**.

### Option CI-B — Neon branch CI

- secrets GitHub · isolation/nettoyage requis · plus de surface credential.

### Option CI-C — DB tests locaux seulement

- CI sans DB · risque de régression non détectée.

**Recommandation candidate :** **CI-A**.

## 15. Plan de credentials

| Phase | Credentials |
|---|---|
| PREPARATION T1 (ce cycle) | **aucun** |
| DELIVERY T1 — mock / local Postgres | aucun OpenAI · Postgres local/CI |
| DELIVERY T1 — Neon | Neon URL(s) · saisie manuelle locale Morris · jamais chat/prompt/Git/pack/logs |
| VALIDATION PROVIDER-REAL | `OPENAI_API_KEY` (+ model) uniquement si GO explicite · masqué |

Noms candidats uniquement : `DATABASE_URL`, `DATABASE_URL_DIRECT`, `OPENAI_API_KEY`, `OPENAI_MODEL`.

## 16. Manifest futur T1 (borné)

### À créer (candidats)

- `app/lib/oa/finops/application/captureFinOpsUsage.ts` (ou équivalent conventions repo)
- `app/lib/oa/finops/application/types.ts` (event / results)
- `app/lib/oa/finops/ports/finOpsLedgerRepository.ts`
- `app/lib/oa/finops/infrastructure/postgres/pgFinOpsLedgerRepository.ts`
- `app/lib/oa/finops/infrastructure/openai/mapProviderUsageToFinOpsEvent.ts`
- `app/db/migrations/<timestamp>_create-finops-usage-event.js` (ou `.ts` selon outil)
- tests unitaires + intégration sous `app/__tests__/oa/finops/`
- `.env.example` Studio **sans secrets** (si absent)

### À modifier (candidats)

- `coordinateExecutionRun.ts` **ou** composition root serveur — appel capture post-success (**point exact à figer en Delivery**)
- `package.json` / `package-lock.json` — ajout `pg` / `node-pg-migrate` après GO
- `.github/workflows/sfia-studio-ci.yml` — **protégé** · GO borné requis

### Préservés / interdits

- domaine T0 pur `app/lib/oa/finops/domain/**` : préservé (extensions non cassantes seulement)
- documents 103–134 : **non modifiés** dans Delivery T1 sauf GO distinct
- pas d’agrégation T2 · pas d’enforcement · pas d’UI

## 17. Symboles futurs (candidats)

- `FinOpsUsageEvent`
- `FinOpsEventId`
- `FinOpsDedupKey`
- `FinOpsLedgerRepository`
- `CaptureFinOpsUsage` / `captureFinOpsUsage`
- `mapProviderUsageToFinOpsEvent`
- `PgFinOpsLedgerRepository`
- `FinOpsInsertResult` = `created` | `duplicate`
- `FinOpsPersistenceError` (sanitized)

Noms finaux à aligner sur conventions camelCase/ports du repo lors de Delivery.

## 18. Idempotence et concurrence

Aligné TECH-IDEM-01 (SELECTED — NOT IMPLEMENTED) :

| Élément | Candidat |
|---|---|
| Matériau `eventId` | hash canonique stable de champs normalisés (provider, runId, attempt/correlation, period, usage fingerprint) |
| Matériau `dedup_key` | `provider + execution_run_id + attempt` (125) · normalisation trim/lower où applicable |
| Retry | même clé → `duplicate` |
| Concurrence | UNIQUE + transaction · pas de lock mémoire autoritatif |
| Multi-instance / restart-safe | oui via contrainte DB |

Détail exact du hash algorithmique : **à figer en Delivery** sans changer la sémantique.

## 19. Erreurs et résilience

| Cas | Classe candidate | Retryable | User-visible |
|---|---|---|---|
| provider success / DB success | OK | — | non |
| provider success / DB failure | FinOps persistence error | oui (transient) | message générique / flag interne |
| provider failure | pas de capture validated | — | existant |
| usage unavailable | event marker ou skip | non | non |
| usage invalid | reject | non | non |
| duplicate | success idempotent | — | non |
| migration failure | stop Delivery | non | ops |
| connection timeout | transient | oui | non |
| conflict transaction | transient | oui | non |
| malformed env | config error | non | ops |
| credential absent/invalid | config/auth error | non | ops |

## 20. Sécurité et RGPD

- secrets server-side only ;
- jamais dans bundle client / logs / handoff ;
- SQL paramétré ;
- least privilege DB (runtime vs migrate) ;
- pas de payload brut ;
- actorId pseudonymisé si nécessaire ;
- **R-TECH-TTL-01 KEEP-OPEN** ;
- **R-TECH-FINOPS-HARD-01 KEEP-OPEN**.

## 21. Performance et GreenOps

- insert unitaire post-run · batch non requis T1 ;
- index minimaux (§8) ;
- pas d’agrégation always-on ;
- pool sizing futur borné ;
- unknown ≠ zero conservé ;
- estimation never blocks.

## 22. Plan de tests futurs

| Test | Type | Credential | CI |
|---|---|---|---|
| invariants T0 inchangés | unitaire | non | oui |
| mapper OpenAI → event | unitaire | non | oui |
| idempotence duplicate | intégration PG | non (local/CI PG) | oui (CI-A) |
| DB unavailable | intégration | non | oui |
| usage invalid / unavailable | unitaire | non | oui |
| unknown ≠ zero / estimation never blocks | unitaire | non | oui |
| import boundaries | unitaire | non | oui |
| migrations up/down | intégration | non | oui |
| secret leakage scan | CI existant + asserts | non | oui |
| Neon validation | manuel borné | Neon | non PR |
| OpenAI provider-real | manuel borné | OpenAI | non PR |

## 23. Commandes futures candidates (ne pas exécuter ici)

```bash
# unitaires FinOps
npm test -- __tests__/oa/finops

# typecheck / lint / build (app)
npm run typecheck && npm run lint && npm run build

# migrations (après installation autorisée)
npm run migrate:up
npm run migrate:down

# CI
# déclenchée sur PR/push — service Postgres si CI-A accepté
```

## 24. Stop conditions — future Delivery T1

- main divergent du SHA arbitrage ;
- décisions Morris manquantes (matrice §26) ;
- Money non arbitré si colonne coût persistée ;
- versions packages non validées ;
- région/plan Neon requis non sélectionnés ;
- credential demandé trop tôt / secret visible ;
- migration destructive / raw payload / T2 aggregation / enforcement ;
- modification hors manifest ;
- workflow protégé sans GO ;
- lockfile hors installation attendue ;
- double comptage possible ;
- absence rollback / redaction.

## 25. Critères d’acceptation T1 futurs (non réalisés)

1. Ledger append-only déployable via migration additive.
2. Capture post-provider unique writer.
3. Idempotence prouvée (duplicate sous retry/concurrence).
4. Aucun secret en repo/logs.
5. Tests unitaires + intégration PG verts en CI (si CI-A).
6. Domaine T0 non régressé.
7. Aucun enforcement/alerte/UI/T2+.

## 26. Matrice consolidée de décisions Morris

| ID | Options | Recommandation candidate | Statut |
|---|---|---|---|
| D-T1-MONEY-01 | M1 / M2 / M3 | **M1** unité mineure | MORRIS DECISION REQUIRED |
| D-T1-LEDGER-SCHEMA-01 | schéma §8 | accepter / amender | MORRIS DECISION REQUIRED |
| D-T1-DB-CONNECTION-01 | direct migrate + pooled runtime | **séparation dual-URL** | MORRIS DECISION REQUIRED |
| D-T1-NEON-REGION-01 | régions Neon | **sélection Morris** | MORRIS DECISION REQUIRED |
| D-T1-NEON-PLAN-01 | plans Neon | **sélection Morris** | MORRIS DECISION REQUIRED |
| D-T1-PG-VERSION-01 | version serveur PG Neon | aligner offre Neon | MORRIS DECISION REQUIRED |
| D-T1-PG-PACKAGE-01 | `pg@8.22.x` | **8.22.x** | MORRIS DECISION REQUIRED |
| D-T1-MIGRATION-VERSION-01 | node-pg-migrate 8.x / 9.x | **8.x** (peer pg<9) ou 9.x si peer OK | MORRIS DECISION REQUIRED |
| D-T1-MIGRATION-PATH-01 | `app/db/migrations/` | ce chemin | MORRIS DECISION REQUIRED |
| D-T1-CI-DATABASE-01 | CI-A / CI-B / CI-C | **CI-A** | MORRIS DECISION REQUIRED |
| D-T1-PROVIDER-REAL-01 | inclure / différer validation réelle | **différer** hors mock | MORRIS DECISION REQUIRED |
| D-T1-FAILURE-SEMANTICS-01 | fail-open run vs fail-closed | **fail-open run + erreur FinOps** | MORRIS DECISION REQUIRED |
| D-T1-PROTECTED-WORKFLOW-01 | autoriser modif CI | requis si CI-A | MORRIS DECISION REQUIRED |

Nombre de décisions consolidées : **13**.

## 27. Réserves

- FIND-03 Money — **OPEN** jusqu’à D-T1-MONEY-01 ;
- FIND-07 — NOTE préservée ;
- R-TECH-TTL-01 — KEEP-OPEN ;
- R-TECH-FINOPS-HARD-01 — KEEP-OPEN ;
- recalibration 15/20/25/30 USD required (hors T1) ;
- aucun contrôle FinOps actif ;
- TB-04-04 NOT DONE ;
- TB-02-05 PRESERVED ;
- LOT-D1 NOT-CONSUMED.

## 28. Prochaine gate candidate unique

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
ARBITRATE CONSOLIDATED FINOPS TECHNICAL LOT T1 EXECUTION PACK
```

**Candidate uniquement — non consommée.**

Cette gate permettra à Morris d’accepter toutes les recommandations ou de modifier uniquement les décisions désignées, sans micro-cycle par décision. Elle n’autorise pas automatiquement la Delivery T1.

## 29. Gate Delivery future (non active)

Documentée pour clarté — **pas** la prochaine gate active :

```text
GO DELIVERY SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
IMPLEMENT FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
USING MORRIS-ARBITRATED EXECUTION PACK
```

Utilisable uniquement après arbitrage consolidé §28.

---

**FINOPS TECHNICAL LOT T1 — EXECUTION PACK PREPARED — NOT IMPLEMENTED — DELIVERY NOT AUTHORIZED — MONEY FIND-03 OPEN — SINGLE ARBITRATION GATE CANDIDATE**
```

## Décisions validées antérieures (entrées)

- T0 merged H1 `0cdf57a…` · CI #104 success
- A2 : PostgreSQL · Neon · pg · node-pg-migrate · LD-A (documentaire)
- CAP-C · BND-A · TECH-STORE/IDEM/MIG SELECTED — NOT IMPLEMENTED
- FIND-03 Money OPEN reserve
- document 103 §33 : aucune prochaine gate active dans 103

## Décisions candidates / matrice

13 décisions consolidées D-T1-* (voir §26 du document 135).

Recommandations clés :

- Money : **M1** (unité mineure)
- CI DB : **CI-A** (Postgres service container)
- Credentials Neon : phase Delivery Neon uniquement
- OpenAI key : validation provider-real optionnelle uniquement

## Garde-fous

- aucun code modifié hors 135
- aucun package installé
- aucun SQL/migration créé
- aucun DB/OpenAI access
- aucun workflow modifié
- aucun commit/push projet
- document 103 inchangé
- TB-04-04 NOT DONE · TB-02-05 PRESERVED
- T2–T7 / LOT-D1–D5 NOT AUTHORIZED

## Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
ARBITRATE CONSOLIDATED FINOPS TECHNICAL LOT T1 EXECUTION PACK
```

## Verdict

FINOPS TECHNICAL LOT T1 EXECUTION PACK PREPARED —
T0 MERGE AND POST-MERGE CI USED AS AUTHORITATIVE INPUT —
T1 SCOPE CAPTURE / BOUNDARY / STORE / IDEM / MIG BOUNDED —
CURRENT EXECUTION AND PROVIDER PATHS DISCOVERED —
LEDGER PHYSICAL MODEL CANDIDATE PREPARED —
MONEY OPTIONS AND RECOMMENDATION PREPARED —
NEON CONFIGURATION OPTIONS PREPARED —
POSTGRESQL / PG / NODE-PG-MIGRATE VERSION OPTIONS PREPARED —
DIRECT AND POOLED CONNECTION ROLES PREPARED —
MIGRATION STRATEGY PREPARED —
CI DATABASE OPTIONS PREPARED —
OPENAI USAGE CAPTURE MAPPING PREPARED —
IDEMPOTENCE AND CONCURRENCY CONTRACT PREPARED —
FAILURE SEMANTICS PREPARED —
SECURITY / RGPD / GREENOPS / RUN GUARDRAILS PREPARED —
FUTURE FILE MANIFEST BOUNDED —
FUTURE TEST PLAN BOUNDED —
CREDENTIAL INPUT PHASES DOCUMENTED —
NO CREDENTIAL REQUESTED OR DISPLAYED —
NO CODE MODIFIED —
NO PACKAGE INSTALLED —
NO SQL OR MIGRATION CREATED —
NO DATABASE PROVISIONED OR ACCESSED —
NO OPENAI REAL CALL —
NO WORKFLOW MODIFIED —
NO PROJECT COMMIT OR PUSH —
DOCUMENT 103 UNCHANGED —
DOCUMENT 135 CREATED LOCALLY WITH COMPLETE CONTENT —
FIND-03 MONEY REMAINS OPEN PENDING MORRIS DECISION —
FIND-07 NOTE PRESERVED —
R-TECH-TTL-01 KEEP-OPEN —
R-TECH-FINOPS-HARD-01 KEEP-OPEN —
TB-04-04 NOT DONE —
TB-02-05 PRESERVED —
T2 TO T7 NOT AUTHORIZED —
LOT-D1 TO LOT-D5 NOT AUTHORIZED —
LOT-D1 DELIVERY NOT-CONSUMED —
CONSOLIDATED MORRIS DECISION MATRIX PRODUCED —
SINGLE ARBITRATION GATE CANDIDATE PRODUCED —
REVIEW HANDOFF UPDATED AND REMOTE VERIFIED —
READY FOR MORRIS CONSOLIDATED T1 ARBITRATION —
T1 DELIVERY NOT YET AUTHORIZED
