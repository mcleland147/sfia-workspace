# Review Pack Full — FinOps Technical Lot T1 Consolidated Decisions Applied

## Meta

- Locale / UTC travail Cursor : 2026-08-07 00:00:07 CEST (+0200) / 2026-08-06 22:00:07 UTC
- Décision Morris : 2026-08-06 23:55 CEST (+0200) / 21:55 UTC (secondes exactes non inventées)
- GO complet : `GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE CONSOLIDATED FINOPS TECHNICAL LOT T1 EXECUTION PACK` + amendements D-T1-*
- Phrase Morris complémentaire : `ok pour les décisions`
- Cycle : Architecture technique — Consolidated Decisions Applied
- Mode : FinOps Technical Lot T1 Execution Pack Decisions Applied
- Profil : Critical
- Typologie : EVOL / DOC / ARCHITECTURE / FINOPS / PERSISTENCE / DEVOPS / SECURITY
- Review Pack : Full
- Review Handoff : required / publish-in-cycle

## Blocs

Activés : architecture technique ; FinOps ; persistence ; migrations ; CI/DevOps ; sécurité/RSSI ; RGPD/minimisation ; résilience ; multi-instance ; restart-safe ; GreenOps ; RUN readiness ; traçabilité ; gouvernance ; Review Pack ; Review Handoff ; garde-fous.

Désactivés : code ; tests ; packages ; SQL ; migrations exécutables ; accès DB ; accès Neon ; accès OpenAI ; credentials ; modification workflow ; commit projet ; push projet ; PR ; merge ; T2 à T7 ; LOT-D1 à LOT-D5.

## Coverage

- document 136 complet inclus : yes
- document 135 byte-identical proof : yes (SHA-256 `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe` · 548 lignes · 23328 octets)
- Local Git Truth initiale : yes
- Local Git Truth finale : yes
- matrice 13 décisions : yes
- synthesis only : no
- placeholder actif : no
- secrets : none
- verdict coverage : complete

## Local Git Truth initiale

```text
date_cest=2026-08-06 23:59:20 CEST (+0200)
date_utc=2026-08-06 21:59:20 UTC
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
=== remotes ===
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch=implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=fatal: no upstream configured for branch 'implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack'
NONE
=== status short ===
?? .tmp-sfia-review/
?? projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
=== diff ===
=== cached ===
=== others ===
.tmp-sfia-review/chatgpt-review.md
.tmp-sfia-review/t1-execution-pack/work-date-cest.txt
.tmp-sfia-review/t1-execution-pack/work-date-utc.txt
projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
=== ls-remote ===
0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
02d5a2e0d79d897be5d0bc37f985f3a4c2ecfbad	refs/heads/sfia/review-handoff
```

## Local Git Truth finale

```text
date_cest=2026-08-07 00:00:59 CEST (+0200)
date_utc=2026-08-06 22:00:59 UTC
pwd=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
branch=implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack
HEAD=0cdf57a12843891da8b8db2d550cb38c7ba9f60a
upstream=NONE
=== status short ===
?? .tmp-sfia-review/
?? projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
?? projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
=== diff ===
=== cached ===
=== others ===
.tmp-sfia-review/chatgpt-review.md
.tmp-sfia-review/t1-decisions-applied/git-truth-final.txt
.tmp-sfia-review/t1-decisions-applied/git-truth-initial.txt
.tmp-sfia-review/t1-decisions-applied/hash135-before.txt
.tmp-sfia-review/t1-decisions-applied/work-cest.txt
.tmp-sfia-review/t1-decisions-applied/work-utc.txt
.tmp-sfia-review/t1-execution-pack/work-date-cest.txt
.tmp-sfia-review/t1-execution-pack/work-date-utc.txt
projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md
projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md
=== remotes ===
0cdf57a12843891da8b8db2d550cb38c7ba9f60a	refs/heads/main
02d5a2e0d79d897be5d0bc37f985f3a4c2ecfbad	refs/heads/sfia/review-handoff
```

## Preuve 135 byte-identical

| Check | Résultat |
|---|---|
| Path | `projects/sfia-studio/135-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack.md` |
| SHA-256 before/after | `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe` |
| Lignes / octets | 548 / 23328 |
| UTF-8 / LF / final newline | OK |
| Modifié ce cycle | **NON** |

## Handoff entrant

| Champ | Valeur |
|---|---|
| Tip | `02d5a2e0d79d897be5d0bc37f985f3a4c2ecfbad` |
| Blob | `e1211fb514e35f14570fa742496e6efcb0913603` |
| Message | `docs(review-handoff): publish Assistant SFIA FinOps T1 execution-pack preparation` |

## Document 136 — contenu complet

Path : `projects/sfia-studio/136-assistant-sfia-native-openai-finops-technical-lot-t1-decisions-applied.md`

Stats : 473 lignes · 16953 octets

---BEGIN DOCUMENT 136---

# 136 — FinOps Technical Lot T1 — Consolidated Decisions Applied

## 1. Statut et anti-claims

**FINOPS TECHNICAL LOT T1 CONSOLIDATED DECISIONS APPLIED**

**T1 EXECUTION PACK 135 PRESERVED BYTE-IDENTICAL**

**T1 DELIVERY NOT AUTHORIZED**

**NO CODE IMPLEMENTED**

**NO PACKAGE INSTALLED**

**NO SQL OR MIGRATION CREATED**

**NO DATABASE ACCESSED**

**NO NEON CONFIGURED**

**NO OPENAI REAL CALL**

**NO CREDENTIAL RECEIVED OR DISPLAYED**

**T2 TO T7 NOT AUTHORIZED**

**LOT-D1 TO LOT-D5 NOT AUTHORIZED**

Le document 135 reste le Decision Pack pré-arbitrage historique. Ce document 136 est le record d’application documentaire des arbitrages consolidés. Il ne lance pas la Delivery T1.

## 2. Autorité Morris

Gate consommée :

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
ARBITRATE CONSOLIDATED FINOPS TECHNICAL LOT T1 EXECUTION PACK —

ACCEPT RECOMMENDATIONS WITH THESE AMENDMENTS:

D-T1-MONEY-01 = DEFER TO T2 —
FIND-03 REMAINS OPEN —

D-T1-LEDGER-SCHEMA-01 =
ACCEPT T1 USAGE LEDGER WITHOUT COST OR CURRENCY COLUMNS —

D-T1-NEON-REGION-01 = DEFER UNTIL NEON INTEGRATION —
D-T1-NEON-PLAN-01 = DEFER UNTIL NEON INTEGRATION —

D-T1-PG-VERSION-01 = ALIGN WITH SELECTED NEON ENVIRONMENT —
D-T1-PG-PACKAGE-01 = ACCEPT PG 8.22 LINE —
D-T1-MIGRATION-VERSION-01 = ACCEPT NODE-PG-MIGRATE 8 LINE —
D-T1-MIGRATION-PATH-01 = ACCEPT APP/DB/MIGRATIONS —

D-T1-DB-CONNECTION-01 =
ACCEPT DIRECT MIGRATION CONNECTION AND POOLED RUNTIME CONNECTION —

D-T1-CI-DATABASE-01 = ACCEPT CI-A POSTGRES SERVICE CONTAINER —
D-T1-PROVIDER-REAL-01 = DEFER TO DISTINCT VALIDATION —
D-T1-FAILURE-SEMANTICS-01 =
ACCEPT FAIL-OPEN USER RUN WITH SEPARATE AUDITABLE FINOPS ERROR —

D-T1-PROTECTED-WORKFLOW-01 =
AUTHORIZE BOUNDED SFIA STUDIO CI MODIFICATION IN FUTURE T1 DELIVERY —

T1 DELIVERY REMAINS NOT AUTHORIZED
```

Phrase Morris complémentaire :

```text
ok pour les décisions
```

Morris accepte les recommandations du document 135 avec les amendements explicitement fournis ci-dessus.

## 3. Horodatage

| Événement | Horodatage |
|---|---|
| Décision Morris | 2026-08-06 23:55 CEST (+0200) / 21:55 UTC (secondes exactes non inventées) |
| Travail Cursor | 2026-08-07 00:00:07 CEST (+0200) / 2026-08-06 22:00:07 UTC |

## 4. Git Truth

| Élément | Valeur |
|---|---|
| `origin/main` | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| Branche | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t1-execution-pack` |
| HEAD | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| Upstream | aucun |
| Worktree | `…/worktrees/finops-t1-pack` |
| Document 135 | untracked local · SHA-256 `fcdea54f024fff51a299292061e96b97541a6b6125adfec7b7c3bf410cccdcbe` · 548 lignes · 23328 octets · **byte-identical** préservé |
| Document 136 avant cycle | **ABSENT** |
| Document 136 après cycle | créé localement (untracked) |
| Tracked modifications | aucune |
| Staged | vide |
| Handoff entrant | tip `02d5a2e0d79d897be5d0bc37f985f3a4c2ecfbad` · blob `e1211fb514e35f14570fa742496e6efcb0913603` |
| Commit / push projet | **aucun** |

## 5. Sources

- `prompts/templates/sfia-cycle-execution-template.md` (blob `b9ce0a9fe57bb0f675afb8505ee0584180f830d7`)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- documents 103, 123, 125, 126–134 (read-only)
- document 135 complet (pré-arbitrage)
- Review Handoff entrant `02d5a2e…` / blob `e1211fb…`
- `projects/sfia-studio/app/package.json` (read-only)
- `.github/workflows/sfia-studio-ci.yml` (read-only)
- chemins runtime découverts dans 135 (`coordinateExecutionRun`, adapter, `openaiProvider`, types usage)

## 6. Matrice avant / après

| ID | Avant | Valeur décidée | Portée | Différé | Conséquences Delivery | Anti-claim |
|---|---|---|---|---|---|---|
| D-T1-MONEY-01 | REQUIRED | DEFER TO T2 | schéma / domaine monétaire | valeur Money exacte | pas de colonnes coût/devise T1 | DEFER ≠ M1 SELECTED |
| D-T1-LEDGER-SCHEMA-01 | REQUIRED | USAGE LEDGER WITHOUT COST/CURRENCY | schéma T1 | — | migration ledger usage-only | cost/currency exclus |
| D-T1-DB-CONNECTION-01 | REQUIRED | DIRECT migrate + POOLED runtime | connexions | secrets réels | dual-URL future | pas de credential maintenant |
| D-T1-NEON-REGION-01 | REQUIRED | DEFER UNTIL NEON INTEGRATION | Neon | région exacte | Delivery initiale sans Neon | defer ≠ sélection |
| D-T1-NEON-PLAN-01 | REQUIRED | DEFER UNTIL NEON INTEGRATION | Neon | plan exact | idem | defer ≠ sélection |
| D-T1-PG-VERSION-01 | REQUIRED | ALIGN WITH SELECTED NEON ENV | politique PG | version exacte | CI locale compatible | pas de version inventée |
| D-T1-PG-PACKAGE-01 | REQUIRED | PG 8.22 LINE | package | patch exact lock | install en Delivery | pas d’install maintenant |
| D-T1-MIGRATION-VERSION-01 | REQUIRED | NODE-PG-MIGRATE 8 LINE | package | patch exact lock | install en Delivery | pas d’install maintenant |
| D-T1-MIGRATION-PATH-01 | REQUIRED | `app/db/migrations/` | chemin | — | migrations additives futures | aucun SQL maintenant |
| D-T1-CI-DATABASE-01 | REQUIRED | CI-A Postgres service | CI | — | service éphémère | pas de secret Neon PR |
| D-T1-PROVIDER-REAL-01 | REQUIRED | DEFER TO DISTINCT VALIDATION | OpenAI réel | GO distinct | mocks/CI sans clé | pas de provider-real T1 |
| D-T1-FAILURE-SEMANTICS-01 | REQUIRED | FAIL-OPEN + erreur FinOps | résilience | retry durable T2/T6 | run user non fail-closed | pas de perte silencieuse |
| D-T1-PROTECTED-WORKFLOW-01 | REQUIRED | BOUNDED CI MOD IN FUTURE DELIVERY | workflow protégé | — | modif CI-A bornée | pas de modif ce cycle |

## 7. D-T1-MONEY-01

**Valeur décidée :** `DEFER TO T2`

**Statut :** DECISION TO DEFER APPLIED — VALUE NOT SELECTED

Conséquences :

- aucune représentation monétaire implémentée en T1 ;
- aucune colonne `cost` / `currency` ;
- aucun calcul tarifaire / arrondi monétaire ;
- **FIND-03 reste OPEN** ;
- Money arbitré et implémenté dans un cycle T2 distinct.

**Anti-claim :** `DEFER TO T2 ≠ M1 SELECTED`.

## 8. D-T1-LEDGER-SCHEMA-01

**Valeur décidée :** `T1 USAGE LEDGER WITHOUT COST OR CURRENCY COLUMNS`

**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED

Schéma logique accepté pour la future Delivery :

- `event_id`
- `dedup_key`
- `project_id`
- `execution_run_id`
- `correlation_id` (nullable)
- `provider`
- `model` (nullable)
- `occurred_at`
- `period_start`
- `source_of_truth`
- `evidence_class`
- `input_tokens` (nullable)
- `output_tokens` (nullable)
- `total_tokens` (nullable)
- `provider_request_id` (nullable)
- `correction_ref` (nullable)
- `usage_status`
- `created_at`

Colonnes **explicitement exclues** de T1 :

- `cost_minor`
- `cost_numeric`
- `currency_code`
- toute autre représentation monétaire

Préservé :

- append-only ;
- PK `event_id` ;
- UNIQUE `dedup_key` ;
- tokens non négatifs quand non null ;
- pas de payload OpenAI brut ;
- pas d’agrégat T2.

## 9. D-T1-DB-CONNECTION-01

**Valeur décidée :** `DIRECT MIGRATION CONNECTION AND POOLED RUNTIME CONNECTION`

**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED

Conséquences futures :

- migrations via URL directe ;
- runtime via URL poolée ;
- séparation des responsabilités ;
- secrets distincts possibles ;
- SSL obligatoire ;
- aucun nom ou credential réel créé maintenant.

Noms candidats (jamais de valeurs) :

- `DATABASE_URL`
- `DATABASE_URL_DIRECT`

## 10. D-T1-NEON-REGION-01

**Valeur décidée :** `DEFER UNTIL NEON INTEGRATION`

**Statut :** DECISION TO DEFER APPLIED — VALUE NOT SELECTED

## 11. D-T1-NEON-PLAN-01

**Valeur décidée :** `DEFER UNTIL NEON INTEGRATION`

**Statut :** DECISION TO DEFER APPLIED — VALUE NOT SELECTED

Anti-claims :

- compte Neon existant ≠ environnement configuré ;
- defer ≠ choix implicite ;
- aucune région / plan sélectionnés ;
- aucun projet ou branche DB créé ;
- aucun credential nécessaire pour Delivery locale/CI initiale.

## 12. D-T1-PG-VERSION-01

**Valeur décidée :** `ALIGN WITH SELECTED NEON ENVIRONMENT`

**Statut :** DECISION TO DEFER APPLIED — VALUE NOT SELECTED (politique décidée ; version exacte différée)

Qualification :

- politique de compatibilité décidée ;
- version PostgreSQL exacte non sélectionnée tant que l’environnement Neon ne l’est pas ;
- future Delivery locale/CI : version compatible avec la cible probable sans figer Neon.

## 13. D-T1-PG-PACKAGE-01

**Valeur décidée :** `PG 8.22 LINE ACCEPTED`

**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED

- famille 8.22 acceptée ;
- version exacte à figer dans `package-lock` pendant Delivery ;
- aucune installation maintenant ;
- `@types/pg` compatible à sélectionner techniquement en Delivery.

## 14. D-T1-MIGRATION-VERSION-01

**Valeur décidée :** `NODE-PG-MIGRATE 8 LINE ACCEPTED`

**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED

- ligne 8 acceptée ;
- version exacte à figer pendant Delivery ;
- compatibilité avec `pg` 8 requise ;
- aucune installation maintenant.

## 15. D-T1-MIGRATION-PATH-01

**Valeur décidée :** `projects/sfia-studio/app/db/migrations/`

**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED

- migrations additives ;
- conventions up/down ;
- aucun backfill historique T1 ;
- aucune migration destructive ;
- **aucune migration créée dans ce cycle**.

## 16. D-T1-CI-DATABASE-01

**Valeur décidée :** `CI-A — POSTGRES SERVICE CONTAINER`

**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED

Conséquences futures :

- PostgreSQL éphémère GitHub Actions ;
- pas de secret Neon dans les PR ;
- migrations avant tests DB ;
- isolation par run ;
- reproductibilité ;
- aucune dépendance réseau Neon pour la CI standard.

## 17. D-T1-PROVIDER-REAL-01

**Valeur décidée :** `DEFER TO DISTINCT VALIDATION`

**Statut :** DECISION TO DEFER APPLIED — VALUE NOT SELECTED

- Delivery T1 initiale avec mocks et mapping unitaire ;
- aucune clé OpenAI requise pour implémentation locale ou CI ;
- validation OpenAI réelle soumise à un GO Morris distinct ;
- aucune claim provider-real dans T1 Delivery.

## 18. D-T1-FAILURE-SEMANTICS-01

**Valeur décidée :** `FAIL-OPEN USER RUN WITH SEPARATE AUDITABLE FINOPS ERROR`

**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED

Définition :

- succès fournisseur conservé comme succès métier ;
- panne de capture FinOps **ne** transforme **pas** le run en échec ;
- erreur FinOps séparée, structurée, sanitized et auditable ;
- erreur transitoire marquée retryable lorsqu’approprié ;
- aucun retry incontrôlé dans T1 ;
- aucune perte silencieuse ;
- aucune exposition de détail DB à l’utilisateur.

La stratégie de retry durable / reconciliation appartient aux lots ultérieurs (T2/T6 selon responsabilité).

## 19. D-T1-PROTECTED-WORKFLOW-01

**Valeur décidée :** `BOUNDED SFIA STUDIO CI MODIFICATION AUTHORIZED IN FUTURE T1 DELIVERY`

**Statut :** DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED

Portée future strictement autorisée :

`.github/workflows/sfia-studio-ci.yml`

Modification future uniquement pour :

- ajouter un service PostgreSQL éphémère ;
- variables non secrètes de connexion au service local CI ;
- exécuter migrations ;
- exécuter tests d’intégration DB ;
- conserver les gates existantes.

Interdit même pendant la future Delivery sans nouveau GO :

- secret Neon ;
- appel OpenAI réel ;
- suppression de contrôles existants ;
- affaiblissement du Required Gate ;
- changement d’autres workflows ;
- déploiement / production.

**Aucune modification de workflow dans ce cycle.**

## 20. Synthèse des 13 décisions

| ID | Valeur décidée | Statut | Exactitude différée | Lot | Credential | Future action |
|---|---|---|---|---|---|---|
| D-T1-MONEY-01 | DEFER TO T2 | DECISION TO DEFER APPLIED — VALUE NOT SELECTED | représentation Money | T2 | non T1 | arbitrage T2 |
| D-T1-LEDGER-SCHEMA-01 | usage ledger sans cost/currency | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | — | T1 | non | migration + adapter |
| D-T1-DB-CONNECTION-01 | direct + pooled | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | secrets réels | T1 | local/CI non-secret ; Neon plus tard | dual-URL |
| D-T1-NEON-REGION-01 | DEFER UNTIL NEON INTEGRATION | DECISION TO DEFER APPLIED — VALUE NOT SELECTED | région | Neon future | Neon futur | gate Neon |
| D-T1-NEON-PLAN-01 | DEFER UNTIL NEON INTEGRATION | DECISION TO DEFER APPLIED — VALUE NOT SELECTED | plan | Neon future | Neon futur | gate Neon |
| D-T1-PG-VERSION-01 | ALIGN WITH SELECTED NEON ENV | DECISION TO DEFER APPLIED — VALUE NOT SELECTED | version exacte | T1/Neon | non | aligner CI/local |
| D-T1-PG-PACKAGE-01 | PG 8.22 LINE | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | patch lock | T1 | non | npm install Delivery |
| D-T1-MIGRATION-VERSION-01 | NODE-PG-MIGRATE 8 LINE | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | patch lock | T1 | non | npm install Delivery |
| D-T1-MIGRATION-PATH-01 | `app/db/migrations/` | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | — | T1 | non | créer migrations Delivery |
| D-T1-CI-DATABASE-01 | CI-A | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | — | T1 | non | modif workflow bornée |
| D-T1-PROVIDER-REAL-01 | DEFER TO DISTINCT VALIDATION | DECISION TO DEFER APPLIED — VALUE NOT SELECTED | GO distinct | validation future | OpenAI futur | gate distincte |
| D-T1-FAILURE-SEMANTICS-01 | FAIL-OPEN + erreur FinOps | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | retry durable | T1 (+T2/T6) | non | implémenter sémantique |
| D-T1-PROTECTED-WORKFLOW-01 | BOUNDED CI MOD FUTURE DELIVERY | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED | — | T1 | non | CI-A dans Delivery |

## 21. Manifest de la future Delivery T1

### Créations candidates

- service/application de capture FinOps ;
- types d’événement T1 (sans Money) ;
- port repository ledger ;
- adapter PostgreSQL ;
- mapper `ProviderUsage` → événement FinOps ;
- migration initiale sous `projects/sfia-studio/app/db/migrations/` ;
- tests unitaires et d’intégration ;
- `.env.example` sans secret si nécessaire.

### Modifications candidates

- composition root / `coordinateExecutionRun` (point exact à figer) ;
- `package.json` / `package-lock.json` ;
- `.github/workflows/sfia-studio-ci.yml` (borné CI-A) ;
- exports FinOps nécessaires.

### Exclusions fermes

- coût et devise ;
- T2 aggregation ;
- alertes / enforcement / override / rollout / UI ;
- Neon réel ;
- OpenAI réel ;
- autres workflows.

## 22. Credentials

| Phase | Credentials |
|---|---|
| DELIVERY T1 LOCALE / CI-A | aucun Neon · aucune clé OpenAI · Postgres local/service container uniquement |
| NEON INTEGRATION FUTURE | credentials Neon après gate distincte · saisie manuelle Morris · jamais chat/prompt/Git/handoff/logs |
| OPENAI PROVIDER-REAL FUTUR | `OPENAI_API_KEY` après gate distincte · saisie locale · jamais affichée |

## 23. Réserves

- FIND-03 Money — **OPEN** et reportée à T2 ;
- FIND-07 — NOTE ;
- R-TECH-TTL-01 — KEEP-OPEN ;
- R-TECH-FINOPS-HARD-01 — KEEP-OPEN ;
- recalibration 15/20/25/30 USD required ;
- TB-04-04 NOT DONE ;
- TB-02-05 PRESERVED ;
- LOT-D1 NOT-CONSUMED ;
- aucun contrôle FinOps actif.

## 24. Critères de passage vers Delivery T1

La future Delivery T1 devient éligible à une décision Morris distincte si :

- document 136 complet ;
- 135 byte-identical ;
- matrice 13 décisions sans ambiguïté ;
- manifest borné ;
- workflow protégé borné ;
- aucun credential requis pour la phase initiale ;
- aucune décision Money implicite ;
- tests CI-A définis ;
- rollback et erreurs définis ;
- Review Handoff distant conforme.

## 25. Prochaine gate candidate unique

```text
GO DELIVERY SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
IMPLEMENT FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
USING MORRIS-ARBITRATED EXECUTION PACK —
LOCAL POSTGRES AND CI-A ONLY —
NO NEON INTEGRATION —
NO OPENAI PROVIDER-REAL VALIDATION
```

**Candidate uniquement — non consommée.**

Cette future gate autorisera dans un même cycle borné :

- installation `pg` 8.22 line ;
- installation `node-pg-migrate` 8 line ;
- création de la migration T1 ;
- ledger usage sans Money ;
- service de capture ;
- adapter PostgreSQL ;
- idempotence ;
- intégration locale PostgreSQL ;
- modification bornée du workflow CI ;
- tests ;
- documentation d’exécution.

Elle n’autorisera pas :

- Neon réel ;
- OpenAI réel ;
- Money ;
- T2 à T7 ;
- LOT-D1 à LOT-D5 ;
- push ;
- PR ;
- merge sans gates distinctes.

---

**FINOPS TECHNICAL LOT T1 — CONSOLIDATED DECISIONS APPLIED DOCUMENTARILY — DELIVERY NOT AUTHORIZED — MONEY DEFERRED TO T2 — FIND-03 OPEN**

---END DOCUMENT 136---

## Table des 13 décisions (synthèse pack)

| ID | Valeur | Statut |
|---|---|---|
| D-T1-MONEY-01 | DEFER TO T2 · FIND-03 OPEN | DECISION TO DEFER APPLIED — VALUE NOT SELECTED |
| D-T1-LEDGER-SCHEMA-01 | usage ledger sans cost/currency | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED |
| D-T1-DB-CONNECTION-01 | direct migrate + pooled runtime | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED |
| D-T1-NEON-REGION-01 | DEFER UNTIL NEON INTEGRATION | DECISION TO DEFER APPLIED — VALUE NOT SELECTED |
| D-T1-NEON-PLAN-01 | DEFER UNTIL NEON INTEGRATION | DECISION TO DEFER APPLIED — VALUE NOT SELECTED |
| D-T1-PG-VERSION-01 | ALIGN WITH SELECTED NEON ENV | DECISION TO DEFER APPLIED — VALUE NOT SELECTED |
| D-T1-PG-PACKAGE-01 | PG 8.22 LINE | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED |
| D-T1-MIGRATION-VERSION-01 | NODE-PG-MIGRATE 8 LINE | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED |
| D-T1-MIGRATION-PATH-01 | `app/db/migrations/` | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED |
| D-T1-CI-DATABASE-01 | CI-A Postgres service container | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED |
| D-T1-PROVIDER-REAL-01 | DEFER TO DISTINCT VALIDATION | DECISION TO DEFER APPLIED — VALUE NOT SELECTED |
| D-T1-FAILURE-SEMANTICS-01 | FAIL-OPEN + erreur FinOps auditable | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED |
| D-T1-PROTECTED-WORKFLOW-01 | bounded CI mod future Delivery | DECIDED — APPLIED DOCUMENTARILY — NOT IMPLEMENTED |

## Décisions différées

- Money → T2 (FIND-03 OPEN) ; DEFER ≠ M1 SELECTED
- Neon région / plan → jusqu’à intégration Neon
- Version PostgreSQL exacte → alignée sur futur environnement Neon
- OpenAI provider-real → validation distincte
- Secrets / credentials réels → jamais dans ce cycle

## Manifest futur Delivery T1

Créations : capture FinOps · types T1 · port ledger · adapter PG · mapper usage · migration `app/db/migrations/` · tests · env example sans secret.

Modifications : composition/`coordinateExecutionRun` · package.json/lock · `sfia-studio-ci.yml` borné · exports FinOps.

Exclusions : cost/currency · T2+ · Neon réel · OpenAI réel · autres workflows · UI/alertes/enforcement.

## Périmètre workflow protégé

Fichier : `.github/workflows/sfia-studio-ci.yml` uniquement — autorisé **en future Delivery** pour CI-A (service Postgres, vars non secrètes, migrations, tests DB). **Aucune modification dans ce cycle.**

## Plan credentials

- Delivery T1 locale/CI-A : aucun Neon, aucune clé OpenAI
- Neon futur : après gate distincte, saisie manuelle Morris
- OpenAI réel futur : après gate distincte, jamais affiché

## Réserves

FIND-03 OPEN · FIND-07 NOTE · R-TECH-TTL-01 KEEP-OPEN · R-TECH-FINOPS-HARD-01 KEEP-OPEN · recalibration 15/20/25/30 USD required · TB-04-04 NOT DONE · TB-02-05 PRESERVED · LOT-D1 NOT-CONSUMED · aucun contrôle FinOps actif

## Prochaine gate candidate (non consommée)

```text
GO DELIVERY SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
IMPLEMENT FINOPS TECHNICAL LOT T1 CAPTURE AND PERSISTENCE —
USING MORRIS-ARBITRATED EXECUTION PACK —
LOCAL POSTGRES AND CI-A ONLY —
NO NEON INTEGRATION —
NO OPENAI PROVIDER-REAL VALIDATION
```

## Anti-claims cycle

- NO CODE / PACKAGE / SQL / MIGRATION / DB / NEON / OPENAI REAL / CREDENTIAL
- NO WORKFLOW MODIFIED IN THIS CYCLE
- NO PROJECT COMMIT OR PUSH
- DOCUMENT 103 UNCHANGED · DOCUMENT 135 BYTE-IDENTICAL
- T2–T7 NOT AUTHORIZED · LOT-D1–D5 NOT AUTHORIZED · T1 DELIVERY NOT AUTHORIZED

## Verdict

FINOPS TECHNICAL LOT T1 CONSOLIDATED DECISIONS APPLIED —
DOCUMENT 135 PRESERVED BYTE-IDENTICAL —
DOCUMENT 136 CREATED WITH COMPLETE CONTENT —
THIRTEEN D-T1 DECISIONS APPLIED DOCUMENTARILY —
MONEY DEFERRED TO T2 —
FIND-03 REMAINS OPEN —
T1 USAGE LEDGER WITHOUT COST OR CURRENCY ACCEPTED —
DIRECT MIGRATION AND POOLED RUNTIME CONNECTIONS ACCEPTED —
NEON REGION DEFERRED —
NEON PLAN DEFERRED —
POSTGRESQL VERSION ALIGNED WITH FUTURE NEON ENVIRONMENT —
PG 8.22 LINE ACCEPTED —
NODE-PG-MIGRATE 8 LINE ACCEPTED —
APP/DB/MIGRATIONS PATH ACCEPTED —
CI-A POSTGRES SERVICE CONTAINER ACCEPTED —
OPENAI PROVIDER-REAL VALIDATION DEFERRED —
FAIL-OPEN USER RUN WITH SEPARATE AUDITABLE FINOPS ERROR ACCEPTED —
BOUNDED SFIA STUDIO CI MODIFICATION AUTHORIZED FOR FUTURE T1 DELIVERY —
NO CODE MODIFIED —
NO PACKAGE INSTALLED —
NO SQL OR MIGRATION CREATED —
NO DATABASE ACCESSED —
NO NEON CONFIGURED —
NO OPENAI REAL CALL —
NO CREDENTIAL RECEIVED OR DISPLAYED —
NO WORKFLOW MODIFIED IN THIS CYCLE —
NO PROJECT COMMIT OR PUSH —
DOCUMENT 103 UNCHANGED —
FIND-07 NOTE PRESERVED —
R-TECH-TTL-01 KEEP-OPEN —
R-TECH-FINOPS-HARD-01 KEEP-OPEN —
TB-04-04 NOT DONE —
TB-02-05 PRESERVED —
T2 TO T7 NOT AUTHORIZED —
LOT-D1 TO LOT-D5 NOT AUTHORIZED —
LOT-D1 DELIVERY NOT-CONSUMED —
SINGLE T1 DELIVERY GATE CANDIDATE PRODUCED —
REVIEW HANDOFF UPDATED AND REMOTE VERIFIED —
READY FOR MORRIS T1 DELIVERY DECISION —
T1 DELIVERY NOT YET AUTHORIZED
