# Review Pack Full — Persistence A2 Technology Selection Preparation

## Meta

| Champ | Valeur |
|---|---|
| **Date locale** | 2026-08-05 17:38:20 CEST +0200 (truth initiale) |
| **GO utilisateur** | `ok go pour cette recommandation` |
| **Interprétation canonique** | `GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE PERSISTENCE A2 TECHNOLOGY SELECTION` |
| **Consommation** | 2026-08-05 17:32 CEST / 15:32 UTC |
| **Cycle** | Implementation Preparation — Persistence A2 Technology Selection Preparation |
| **Profil** | Critical |
| **Typologie** | EVOL / DOC |
| **CKC** | recherché · contrat détaillé absent · fallback méthode SFIA v2.6 |
| **Review Pack** | Full |
| **synthesis only** | no |
| **placeholder actif** | no |

---

## Instruction ChatGPT obligatoire

Consulter `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier : GO/interprétation · 103 modifié · 112/113 complets · 104–111 inchangés · 114 absent · sources externes · shortlists · recommandations candidates · cinq décisions NOT DECIDED · aucune techno sélectionnée · A2/DA-A/MIG-C/P1 · P2 non sélectionné · dix ADR · 21 impacts · graphe 33/56 · priorités · aucun item DONE · LOT-IP-0C différé · LOT-D* non autorisés · aucun code/SQL/migration · aucun compte · Delivery NOT-CONSUMED · Local Git Truth · handoff.

Si 112/113 ou modifs 103 absents : `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Si techno présentée comme sélectionnée : `PERSISTENCE A2 TECHNOLOGY SELECTION PREPARATION INVALID — UNAUTHORIZED TECHNOLOGY ADOPTION`.
Si LOT-D1 autorisé : `… DELIVERY GATE OVERREACH`.
Si code/SQL/migration : `… DELIVERY SCOPE OVERREACH`.

---

## Local Git Truth initiale

```text
=== LOCAL GIT TRUTH INITIAL — PERSISTENCE A2 TECH SELECTION PREP ===
2026-08-05 17:38:20 CEST +0200
2026-08-05 15:38:20 UTC
TOPLEVEL=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1
BRANCH=decisions/sfia-studio-assistant-sfia-native-openai-lot-ip-0b
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
UPSTREAM=none
ORIGIN_MAIN=8dc54db0069eed78a8d8930cc2b035450ab56ad1
MERGE_BASE=8dc54db0069eed78a8d8930cc2b035450ab56ad1
LEFT_RIGHT=0	0
AHEAD=0
BEHIND=0
--- status ---
?? .tmp-sfia-review/
?? projects/sfia-studio/100-assistant-sfia-native-openai-technical-architecture.md
?? projects/sfia-studio/101-assistant-sfia-native-openai-technical-architecture-decision-pack.md
?? projects/sfia-studio/102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/104-assistant-sfia-native-openai-technical-implementation-backlog-decisions-applied.md
?? projects/sfia-studio/105-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a.md
?? projects/sfia-studio/106-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decision-pack.md
?? projects/sfia-studio/107-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decisions-applied.md
?? projects/sfia-studio/108-assistant-sfia-native-openai-lot-ip-0b-selection-decisions-applied.md
?? projects/sfia-studio/109-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b.md
?? projects/sfia-studio/110-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decision-pack.md
?? projects/sfia-studio/111-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decisions-applied.md
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
?? projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
?? projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
?? projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md
?? projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md
?? projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md
?? projects/sfia-studio/97-assistant-sfia-native-openai-ux-ui-decisions-applied.md
?? projects/sfia-studio/98-assistant-sfia-native-openai-technical-prerequisites-decision-pack.md
?? projects/sfia-studio/99-assistant-sfia-native-openai-technical-prerequisites-decisions-applied.md
?? projects/sfia-studio/app/.tmp-sfia-review/
--- diff/cached ---
--- branch scoped ---
  decisions/sfia-studio-assistant-sfia-native-openai-lot-ip-0a                             8dc54db Merge pull request #311 from mcleland147/capitalization/sfia-studio-v3-1-d2-d3-rex
* decisions/sfia-studio-assistant-sfia-native-openai-lot-ip-0b                             8dc54db Merge pull request #311 from mcleland147/capitalization/sfia-studio-v3-1-d2-d3-rex
  decisions/sfia-studio-assistant-sfia-native-openai-select-lot-ip-0b                      8dc54db Merge pull request #311 from mcleland147/capitalization/sfia-studio-v3-1-d2-d3-rex
  implementation-preparation/sfia-studio-assistant-sfia-native-openai-lot-ip-0a            8dc54db Merge pull request #311 from mcleland147/capitalization/sfia-studio-v3-1-d2-d3-rex
  implementation-preparation/sfia-studio-assistant-sfia-native-openai-lot-ip-0b            8dc54db Merge pull request #311 from mcleland147/capitalization/sfia-studio-v3-1-d2-d3-rex
WORKTREE_COUNT=79
--- handoff ---
54a93ba4ae4ded70c739c863dececb3a667d366a	refs/heads/sfia/review-handoff
ORIGIN_HANDOFF=54a93ba4ae4ded70c739c863dececb3a667d366a
HANDOFF_BLOB=9e6a6761f26803ed86bd18badae9c2e860f58832
HANDOFF_MSG=docs(review-handoff): publish Assistant SFIA LOT-IP-0B decisions applied
```

## Branche

`implementation-preparation/sfia-studio-assistant-sfia-native-openai-persistence-a2-technology-selection` @ `8dc54db…` · pas d’upstream.

## Handoff entrant

tip `54a93ba4…` · blob `9e6a6761…` · `docs(review-handoff): publish Assistant SFIA LOT-IP-0B decisions applied`

## Hashes entrants 103–111

| Doc | SHA-256 | Lignes |
|---|---|---|
| 103 | `8291db2167033a3018b9d93da521c0b79c7601a941fccfbcc6db84f8953a3959` | 1643 |
| 104–111 | hashes attendus PASS | voir truth |

## Inventaire repo (synthèse)

Next 15.5.20 · TS 5.9.3 · Node CI 24 · deps : next/react/ajv/openai · **aucun** driver/ORM/migration product · memory OA non-A2 · SQLite OPS1/D1 GAP · Docker ABSENT · CI validate-only.

## Contraintes

A2 external-durable + no-embedded · DA-A ports manuels · MIG-C hybrid · P1 ephemeral+external · P2 NOT SELECTED.

## Recommandations candidates (NOT DECIDED)

| Décision | Candidate |
|---|---|
| SQL-ENGINE-01 | PostgreSQL |
| MANAGED-STORE-01 | Neon (co : Supabase PG, RDS/Aurora PG) |
| DATA-DRIVER-01 | `pg` / node-postgres (alt : postgres.js) |
| MIGRATION-TOOL-01 | dbmate (alt : node-pg-migrate) |
| LOCAL-DEV-TEST-01 | Docker PG same major + memory unit-only |

## Hashes après

| Doc | SHA-256 | Lignes |
|---|---|---|
| 103 | `{h103}` | {l103} |
| 112 | `{h112}` | {l112} |
| 113 | `{h113}` | {l113} |
| 104–111 | byte-identical | PASS |
| 114 | absent | — |

## Contrôles

Graphe 33/56 PRESERVED · P0=6/P1=13/P2=13/P3=1 · aucun DONE · LOT-D1 NOT AUTHORIZED · Delivery NOT-CONSUMED · anti-stub clean · aucun commit projet.

---

## Document 112 complet

# SFIA Studio — Assistant SFIA natif OpenAI — Persistence A2 Technology Selection Preparation

## 1. Statut et anti-claims

**PERSISTENCE A2 TECHNOLOGY SELECTION PREPARATION EXECUTED —**
**TECHNOLOGY LANDSCAPE ANALYSED —**
**FIVE DECISION AREAS PREPARED —**
**RECOMMENDATIONS CANDIDATE ONLY —**
**ALL TECHNOLOGY DECISIONS NOT DECIDED —**
**NO SQL ENGINE, MANAGED STORE, DRIVER, MIGRATION TOOL OR LOCAL STRATEGY SELECTED —**
**NO CODE, SQL, DDL OR PACKAGE CHANGE —**
**LOT-D1 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED**

### Anti-claims

| Anti-claim | Statut |
|---|---|
| Préparation exécutée ≠ décisions du Decision Pack 113 adoptées | vrai |
| Recommandation candidate ≠ technologie sélectionnée | vrai |
| PostgreSQL cité comme candidat moteur ≠ moteur choisi | vrai |
| Neon cité comme candidat store managé ≠ fournisseur choisi | vrai |
| `pg` cité comme candidat driver ≠ dépendance ajoutée au `package.json` | vrai |
| dbmate cité comme candidat migration ≠ outil installé ni migration créée | vrai |
| Stratégie locale LD-A ≠ Docker/CI configuré | vrai |
| STORE-01=A / DA-A / MIG-C / P1 restent des décisions historiques déjà appliquées — non réouvertes ici | vrai |
| P2 reste **CO-COMPATIBLE BUT NOT SELECTED** — statut inchangé | vrai |
| Aucun SQL, DDL, migration exécutable, schéma physique, fichier Docker ou dépendance créés | vrai |
| Aucun item backlog marqué DONE | vrai |
| LOT-D1 à LOT-D5 restent NOT AUTHORIZED | vrai |
| Sécurité / RGPD / FinOps / GreenOps non validés opérationnellement | vrai |
| Delivery NOT-CONSUMED | vrai |

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/112-assistant-sfia-native-openai-persistence-a2-technology-selection-preparation.md` |
| **Rôle** | Analyse, paysages technologiques, comparaisons et préparation des cinq décisions de sélection technologique persistance A2 |
| **Decision Pack** | `projects/sfia-studio/113-assistant-sfia-native-openai-persistence-a2-technology-selection-decision-pack.md` |
| **Document 111 (historique)** | `projects/sfia-studio/111-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decisions-applied.md` — DA-A / MIG-C / P1 déjà appliqués, inchangé |
| **Recommandations** | **candidates uniquement** — jamais des décisions |

---

## 2. GO Morris exact

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE PERSISTENCE A2 TECHNOLOGY SELECTION
```

Phrase Morris consommée : « ok go pour cette recommandation ».

---

## 3. Horodatage local avec fuseau et UTC

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation GO (local)** | 2026-08-05 17:32 CEST (+0200) |
| **Consommation GO (UTC)** | 2026-08-05 15:32 UTC |
| **Application Cursor (local)** | 2026-08-05 17:38 CEST (+0200) |
| **Application Cursor (UTC)** | 2026-08-05 15:38 UTC |
| **Sources externes consultées (local)** | ~2026-08-05 17:39 CEST (+0200) |
| **Sources externes consultées (UTC)** | ~2026-08-05 15:39 UTC |

---

## 4. Effet autorisé et non-effet

### Effet autorisé

Préparation **documentaire** de la sélection technologique de persistance A2 : paysages de moteurs SQL, de stores managés, de drivers, d'outils de migration et de stratégies locales ; critères éliminatoires ; shortlists ; matrices de comparaison ; recommandations **candidates** ; Decision Pack 113 ; registre de sources externes ; publication Review Handoff.

### Non-effet

Pas d'adoption des options 113 · pas de moteur SQL, fournisseur de store, driver, ORM, outil de migration ou stratégie locale sélectionnés · pas de SQL/DDL/migration exécutable · pas de fichier Docker/IaC · pas de dépendance ajoutée à `package.json` · pas de code applicatif · pas de LOT-D1 à LOT-D5 · pas de commit/push projet · pas de réouverture de STORE-01=A, DA-A, MIG-C, P1 ou du statut de P2.

---

## 5. Cycle, profil, typologie et blocs

| Champ | Valeur |
|---|---|
| **Type** | 6 — Architecture technique |
| **Mode** | Implementation Preparation / Decision Preparation — Persistence A2 Technology Selection |
| **Profil SFIA** | **Critical** |
| **Typologie** | EVOL / DOC |
| **CKC** | recherché · contrat détaillé spécifique **absent** · fallback carte synthétique + méthode SFIA v2.6 · aucune autorité d'exécution additionnelle |
| **Blocs activés** | architecture technique · architecture data · intégration/DevOps (profils uniquement) · déploiement/release (profils uniquement) · Sécurité/RSSI · FinOps · GreenOps · RGPD · performance et concurrence · observabilité/RUN readiness (critères) · garde-fous décisionnels · traçabilité documentaire |
| **Blocs désactivés** | code · UX/UI · accessibilité · Delivery · déploiement réel · IaC · PR readiness · post-merge · capitalisation |

**Justification Critical :** cinq décisions structurantes conditionnent le moteur SQL, le fournisseur de store managé, le driver d'accès aux données, l'outil de migration et la stratégie de développement/test local pour la persistance A2. Une erreur documentaire pourrait sélectionner implicitement un produit, contredire STORE-01=A/DA-A/MIG-C/P1, réintroduire un embedded store, ou autoriser prématurément LOT-D1.

---

## 6. Autorité Morris

Morris décide. Cursor analyse, compare et prépare. Toute option « recommandée » reste **candidate**. Le GO exécute uniquement le lot documentaire de préparation ; il **n'adopte pas** les cinq décisions du document 113. Aucune inférence d'adoption implicite n'est permise depuis une citation de source externe ou une préférence de landscape.

---

## 7. Sources et hiérarchie de preuve

1. Git `origin/main` = `8dc54db0069eed78a8d8930cc2b035450ab56ad1` — code réel ;
2. GO Morris courant (consommation 17:32 CEST) ;
3. Review Handoff entrant tip `54a93ba4ae4ded70c739c863dececb3a667d366a` / blob `9e6a6761f26803ed86bd18badae9c2e860f58832` ;
4. documents 103–111 (hashes entrants vérifiés PASS, voir §9) ;
5. document 111 — DA-A / MIG-C / P1 appliqués, P2 co-compatible non sélectionné (contraintes héritées non réouvertes) ;
6. documents 90–102 — contexte FPI / AF / UX / A2 / dix ADR ;
7. code `projects/sfia-studio/app/**` (lecture seule) ;
8. sources externes documentaires consultées ~17:39 CEST (voir §13) — documentation officielle des projets cités, jamais des affirmations non sourcées ;
9. méthode SFIA v2.6 / template cycle / Review Pack & Handoff.

**Règle —** capacité absente = **GAP**. Donnée externe non prouvée localement = `EXTERNAL VALIDATION REQUIRED — NOT PROVEN IN REPO`. Une source externe documente une **capacité générale** du produit cité ; elle ne constitue jamais une preuve d'adéquation définitive ni une sélection.

---

## 8. Git Truth initial

| Champ | Valeur |
|---|---|
| **Date locale** | 2026-08-05 17:38:20 CEST +0200 |
| **Date UTC** | 2026-08-05 15:38:20 UTC |
| **toplevel** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1` |
| **Branche initiale (session)** | `decisions/sfia-studio-assistant-sfia-native-openai-lot-ip-0b` |
| **Branche cycle courant** | `implementation-preparation/sfia-studio-assistant-sfia-native-openai-persistence-a2-technology-selection` |
| **HEAD** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **ahead / behind** | 0 / 0 |
| **upstream projet** | aucun |
| **tracked modifié / staged** | aucun |
| **docs 90–111** | locaux non trackés |
| **docs 112/113** | absents avant création |
| **Handoff tip** | `54a93ba4ae4ded70c739c863dececb3a667d366a` |
| **Handoff blob** | `9e6a6761f26803ed86bd18badae9c2e860f58832` |
| **Handoff message** | `docs(review-handoff): publish Assistant SFIA LOT-IP-0B decisions applied` |

---

## 9. Hashes entrants 103 à 111

| Doc | SHA-256 | Lignes | Contrôle |
|---|---|---|---|
| 103 | `8291db2167033a3018b9d93da521c0b79c7601a941fccfbcc6db84f8953a3959` | 1643 | PASS |
| 104 | `48859ae1f54d4f5d64a39099e00fe9af3e89b6f1cf38a24bc12c58b5dbf11802` | 484 | PASS |
| 105 | `bfdb737713b9d93204aa870c2842ae8246eec6d2f70535b7efae136ecf0694a9` | 565 | PASS |
| 106 | `7f009bfef42dd020fe22bdd7ba718ab647f54695adf2eeea9bcdd22cbf1ceb17` | 286 | PASS |
| 107 | `b2c59ea42306231b6c8649a3b5c2897b9eb38ebef043d2af72b208f73bf13a45` | 451 | PASS |
| 108 | `101932c574c4685017ab1c631858c78e038cb7c9a447ffe1bdd5c619393662ec` | 415 | PASS |
| 109 | `037eb7220ded4ba8f19da4c0a256b39c6a45f8d4588953361c4b99260a32296b` | 683 | PASS |
| 110 | `475d79dec7474e80f6b058a68630572c2b281ef1c6a79e90d39d2c9c3bb29af5` | 295 | PASS |
| 111 | `da9357a9ec051fe80d596711fdac9c7d38b084ab922a54af6789a9d112c5f8cb` | 474 | PASS |

Aucune collision d'identifiant de décision détectée entre les cinq nouveaux IDs (§12) et les identifiants historiques `D-ASST-IP0B-*`, `D-ASST-A2-*` n'existant pas avant ce cycle.

---

## 10. Rappel des décisions architecturales non-réouvrables

| Décision historique | Valeur appliquée | Document source | Statut dans ce cycle |
|---|---|---|---|
| STORE-01 | **A** — classe SQL relationnelle managée (transactionnelle) | 107 | **non réouverte** — hérité |
| D-ASST-IP0B-DATA-ACCESS-01 | **DA-A** — adapters manuels derrière les ports domaine existants | 111 | **non réouverte** — hérité |
| D-ASST-IP0B-MIGRATION-01 | **MIG-C** — hybride versionné + expand/contract + gate backup/restore | 111 | **non réouverte** — hérité |
| D-ASST-IP0B-PLATFORM-01 | **P1** — compute éphémère/serverless + store durable externe | 111 | **non réouverte** — hérité |
| Statut P2 | **CO-COMPATIBLE BUT NOT SELECTED** | 111 | **inchangé** |

Ces cinq lignes fixent la **classe** et les **patterns** ; elles n'ont jamais nommé de produit, de moteur, de fournisseur, de driver ou d'outil. Le présent cycle instruit exactement cette zone produit/technologie restée ouverte, sans jamais revenir sur la classe ni sur les patterns ci-dessus.

---

## 11. Périmètre du cycle Persistence A2 Technology Selection

| Autorisé | Interdit |
|---|---|
| Comparer des moteurs SQL candidats compatibles STORE-01=A | Sélectionner un moteur SQL final |
| Comparer des stores managés candidats compatibles P1 | Sélectionner un fournisseur de store managé final |
| Comparer des drivers/bibliothèques d'accès candidats compatibles DA-A | Ajouter une dépendance `pg`, `postgres`, `prisma`, `drizzle`, etc. au `package.json` |
| Comparer des outils de migration candidats compatibles MIG-C | Créer une migration exécutable ou un outil de migration installé |
| Comparer des stratégies de développement/test local candidates | Configurer Docker, CI, ou un environnement local réel |
| Créer 112 et 113 | Créer 114 (decisions-applied) dans ce cycle |
| Publier Review Handoff L3 | Marquer TB-00-04/05/06 ou TB-01-* DONE · exécuter LOT-D1 · Delivery |
| Maintenir recommandations **candidates** | Réouvrir STORE-01=A, DA-A, MIG-C, P1 ou le statut de P2 |

---

## 12. Cinq décisions — identifiants et no-collision

| # | ID | Objet | Statut |
|---|---|---|---|
| 1 | `D-ASST-A2-SQL-ENGINE-01` | Moteur SQL relationnel | **NOT DECIDED** |
| 2 | `D-ASST-A2-MANAGED-STORE-01` | Fournisseur de store managé | **NOT DECIDED** |
| 3 | `D-ASST-A2-DATA-DRIVER-01` | Driver / bibliothèque d'accès aux données | **NOT DECIDED** |
| 4 | `D-ASST-A2-MIGRATION-TOOL-01` | Outil de gestion de migrations | **NOT DECIDED** |
| 5 | `D-ASST-A2-LOCAL-DEV-TEST-01` | Stratégie de développement et test local | **NOT DECIDED** |

Vérification no-collision : aucun de ces cinq identifiants n'apparaît dans les documents 90 à 111. Chaque ID est unique dans le registre documentaire du projet `sfia-studio` à la date de ce cycle. L'ordre d'arbitrage retenu (§18) place le moteur SQL en premier car les décisions 2 à 5 en dépendent toutes directement ou indirectement.

---

## 13. Registre des sources externes consultées

Sources documentaires officielles consultées ~2026-08-05 17:39 CEST / 15:39 UTC. Aucune source n'implique une sélection ; chacune documente une capacité générale citée à l'appui d'une comparaison.

| ID | Titre | Éditeur | URL | Consultation | Affirmation supportée | Confiance |
|---|---|---|---|---|---|---|
| S-PG-ISO | Transaction Isolation | PostgreSQL Global Development Group | `https://www.postgresql.org/docs/current/transaction-iso.html` | 2026-08-05 17:39 CEST / 15:39 UTC | Niveaux d'isolation Read Committed / Repeatable Read / Serializable disponibles nativement | haute |
| S-PG-DDL | Constraints | PostgreSQL GDG | `https://www.postgresql.org/docs/current/ddl-constraints.html` | 2026-08-05 17:39 CEST / 15:39 UTC | Contraintes UNIQUE, clé étrangère, CHECK disponibles en DDL natif | haute |
| S-PG-NODE-TX | node-postgres — Transactions | node-postgres.com | `https://node-postgres.com/features/transactions` | 2026-08-05 17:39 CEST / 15:39 UTC | Transactions exécutées sur un client dédié issu du pool, pas sur `pool.query` | haute |
| S-PG-NODE-POOL | node-postgres — Pooling | node-postgres.com | `https://node-postgres.com/features/pooling` | 2026-08-05 17:39 CEST / 15:39 UTC | Pool de connexions intégré au module `pg` | haute |
| S-PG-NPM | Package npm `pg` | npm registry | `https://www.npmjs.com/package/pg` | 2026-08-05 17:39 CEST / 15:39 UTC | Client PostgreSQL non-bloquant pour Node.js, pooling inclus, adoption large | haute |
| S-PJS | postgres.js — README | GitHub (porsager) | `https://github.com/porsager/postgres` | 2026-08-05 17:39 CEST / 15:39 UTC | Client minimal à templates taggés, transactions via `sql.begin` | haute |
| S-NEON-POOL | Connection pooling | Neon | `https://neon.com/docs/connect/connection-pooling` | 2026-08-05 17:39 CEST / 15:39 UTC | Proxy PgBouncer en mode transaction, distinction connexion « pooled » vs « direct », migrations recommandées sur connexion directe | haute |
| S-NEON-BR | Branching | Neon | `https://neon.com/docs/introduction/branching` | 2026-08-05 17:39 CEST / 15:39 UTC | Branches copy-on-write pour environnements dev/test, restauration à un point d'historique | haute |
| S-DBMATE | dbmate — README | GitHub (amacneil) | `https://github.com/amacneil/dbmate` | 2026-08-05 17:39 CEST / 15:39 UTC | Migrations SQL brutes versionnées, application atomique, table `schema_migrations`, support multi-moteurs | haute |
| S-DBMATE-LOCK | Concurrent migration lock — issues/PR | GitHub (amacneil) | `https://github.com/amacneil/dbmate/issues/101` · `https://github.com/amacneil/dbmate/pull/596` | 2026-08-05 17:39 CEST / 15:39 UTC | Verrouillage multi-instance non natif par défaut ; évolutions/discussions de verrou consultatif | moyenne |

**Note de méthode :** la ligne S-DBMATE-LOCK est explicitement documentée en confiance **moyenne** ; elle fonde la mention `EXTERNAL VALIDATION REQUIRED` sur le verrouillage multi-instance de dbmate dans le Decision Pack 113, et n'est en aucun cas une preuve d'incompatibilité définitive.

---

## 14. Inventaire repo — dépendances package et absence driver/ORM/migration

| Capacité | Qualification | Preuve |
|---|---|---|
| Driver PostgreSQL npm (`pg`, `postgres`, etc.) | **PROVEN ABSENT** | `app/package.json` — dépendances : `next`, `react`, `react-dom`, `ajv`, `openai` uniquement |
| ORM / query builder (`prisma`, `drizzle-orm`, `kysely`, `knex`, `typeorm`, `sequelize`) | **PROVEN ABSENT** | idem `app/package.json` |
| Framework de migration (`umzug`, `node-pg-migrate`, `dbmate` en dépendance npm, `drizzle-kit`) | **PROVEN ABSENT** | idem — dbmate n'est pas un module npm (binaire), aucune trace de configuration |
| Driver MySQL npm (`mysql`, `mysql2`) | **PROVEN ABSENT** | idem |
| `node:sqlite` runtime | **REUSE** local borné | `app/lib/ops1/db.ts`, `app/lib/d1/db.ts` — **incompatible A2** comme store ops |
| Verrouillage de version (lockfile) | **PROVEN** | Next `15.5.20`, React `19.2.7`, TypeScript `5.9.3`, `ajv` `6.15.0`, `openai` `6.48.0` |
| Champ `engines` | **PROVEN ABSENT** | `app/package.json` — aucune contrainte de version Node déclarée dans le package |
| Runtime CI Node | **PROVEN** | `.github/workflows/sfia-studio-ci.yml` — Node **24** |

**Conséquence directe :** aucune des cinq décisions ne peut s'appuyer sur une dépendance déjà installée. Toute recommandation candidate porte sur un ajout **futur** et non sur une confirmation d'existant.

---

## 15. Inventaire repo — ports OA, adapters memory, héritage DA-A

| Port | Adapter actuel | Qualification |
|---|---|---|
| `ExecutionRunRepositoryPort` | `MemoryExecutionRunRepository` + `Map` process-local | **REUSE** port · memory **PARTIAL** vs A2 |
| `ProjectRepositoryPort` / LPS | Memory | idem |
| `ExecutionContract` / `Attempt` / evidence-review / decision / cycle / trajectory / epistemic | Memory | idem |
| `DoctrinePackageRepositoryPort` | Filesystem lecture seule | **REUSE** FS · **N/A** SQL |
| Adapters SQL durables OA (DA-A) | **ABSENTS** | **NEW** futur — conforme DA-A, aucune bibliothèque choisie |

- disclosure `durable: false` · `multiInstance: false` · `restartSafe: false` (`domain/types.ts`, `composeExecutionRunMemory.ts`) — **PROVEN** ;
- DA-A (doc 111) exige de préserver ces ports comme frontière et d'implémenter les futurs adapters **manuellement** derrière eux ; aucune des cinq décisions de ce cycle ne modifie cette frontière ;
- les tests `__tests__/oa/execution-run/repository.memory.test.ts` restent la preuve de testabilité par double, indépendante du choix futur de moteur/driver.

---

## 16. Inventaire repo — SQLite local OPS1/D1 et CI/Docker (GAP vs A2/P1)

| Sujet | Observation | Classe |
|---|---|---|
| SQLite OPS1 | `.sfia-exec/.../state/*.sqlite` + `migrateOps1Schema` | **REUSE** harness local · **GAP** A2 |
| SQLite D1 | schéma inline + `CREATE TABLE IF NOT EXISTS` | **REUSE** harness local · **GAP** A2 |
| `boundedPersistenceDecision.ts` | product persistence **NOT_SELECTED** | **PROVEN** |
| Readiness migration | `NOT_STARTED` (`operationalReadiness.ts`) | **PROVEN** |
| Dockerfile `sfia-studio` | **ABSENT** | **PROVEN** / **GAP** packaging |
| CI `.github/workflows/sfia-studio-ci.yml` | build/lint/test — **validate only**, pas de déploiement | **PROVEN** |
| Multi-instance / restart-safe A2 | non démontrés sur le code actuel | **GAP** |
| Compute P1 vendor | non traité par ce repo — **hors périmètre** de ce cycle | **N/A** |

**Verdict runtime actuel vs A2/P1 :** le harness local (Maps + SQLite fichier) reste **INCOMPATIBLE as-is** avec un store durable Project A2. Aucune des cinq décisions de ce cycle ne transforme ce harness ; elles préparent uniquement le choix futur de la couche technologique qui le remplacera derrière les ports DA-A, dans le profil P1.

---

## 17. Index des preuves Git (E-IDs)

| ID | Sujet | Chemin |
|---|---|---|
| E-PKG-01 | `package.json` sans driver/ORM/migration | `projects/sfia-studio/app/package.json` |
| E-LOCK-01 | Verrouillage de versions | `projects/sfia-studio/app/package-lock.json` |
| E-ER-PORT | Port ExecutionRun | `app/lib/oa/execution-run/ports/executionRunRepository.ts` |
| E-ER-MEM | Store memory `Map` | `app/lib/oa/execution-run/infrastructure/memoryExecutionRunStore.ts` |
| E-ER-DISC | disclosure `durable:false` | `app/lib/oa/execution-run/domain/types.ts` · `composeExecutionRunMemory.ts` |
| E-ER-TEST | tests memory repo | `app/__tests__/oa/execution-run/repository.memory.test.ts` |
| E-OCC | Attempt OCC | `app/lib/oa/execution-attempt/ports/executionAttemptRepository.ts` |
| E-OPS1 | SQLite OPS1 | `app/lib/ops1/db.ts` · `paths.ts` |
| E-D1 | SQLite D1 | `app/lib/d1/db.ts` · `repository.ts` |
| E-BOUND | Bounded persistence NOT_SELECTED | `app/lib/platform/t-a7/boundedPersistenceDecision.ts` |
| E-READY | Migration readiness `NOT_STARTED` | `app/lib/d1/operationalReadiness.ts` |
| E-CI-STUDIO | CI validate-only | `.github/workflows/sfia-studio-ci.yml` |
| E-NODOCKER | Absence Dockerfile | recherche recursive `sfia-studio/` — aucun `Dockerfile` |
| E-DOC-A2 | ARCH-BUNDLE=A2 | `102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md` |
| E-DOC-STORE | STORE-01=A | `107-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decisions-applied.md` |
| E-DOC-IP0B | DA-A / MIG-C / P1 appliqués | `111-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decisions-applied.md` |
| E-TB0101 | Port persistance externe Project | document 103, `TB-01-01` |
| E-TB0104 | Transactions et concurrence explicite | document 103, `TB-01-04` |
| E-TB0106 | Fondation migrations, backup/restore | document 103, `TB-01-06` |
| E-SRC-PG | Documentation officielle PostgreSQL | §13, `S-PG-ISO`, `S-PG-DDL` |
| E-SRC-PG-NODE | Documentation `pg` / node-postgres | §13, `S-PG-NODE-TX`, `S-PG-NODE-POOL`, `S-PG-NPM` |
| E-SRC-PJS | Documentation postgres.js | §13, `S-PJS` |
| E-SRC-NEON | Documentation Neon | §13, `S-NEON-POOL`, `S-NEON-BR` |
| E-SRC-DBMATE | Documentation dbmate | §13, `S-DBMATE`, `S-DBMATE-LOCK` |

---

## 18. Ordre d'arbitrage retenu et justification

| Ordre | Décision | Justification de l'ordre |
|---|---|---|
| 1 | `D-ASST-A2-SQL-ENGINE-01` | fixe la famille SQL dont dépendent le store managé, le driver et l'outil de migration disponibles |
| 2 | `D-ASST-A2-MANAGED-STORE-01` | dépend du moteur retenu et de P1 (store externe durable) déjà appliqué |
| 3 | `D-ASST-A2-DATA-DRIVER-01` | dépend du moteur retenu et doit rester cohérent avec DA-A (pas d'ORM primaire) |
| 4 | `D-ASST-A2-MIGRATION-TOOL-01` | dépend du moteur retenu et doit rester cohérent avec MIG-C |
| 5 | `D-ASST-A2-LOCAL-DEV-TEST-01` | dépend des quatre décisions précédentes pour définir une parité locale cohérente |

Cet ordre est repris à l'identique dans le Decision Pack 113. Aucune décision ultérieure ne peut être arbitrée avant celles qui la précèdent sans invalider sa propre cohérence documentaire.

---

## 19. Matrice de compatibilité A2 transversale (cinq décisions)

| Contrainte A2 | Moteur SQL | Store managé | Driver | Outil migration | Stratégie locale |
|---|---|---|---|---|---|
| `external-durable-store` | orthogonale (classe fixée par STORE-01=A) | **directement engagée** | orthogonale | orthogonale | **directement engagée** (parité) |
| `explicit-concurrency` | isolation/transactions du moteur | dépend de la capacité pooling du fournisseur | API transaction du driver | verrouillage migration | tests de concurrence locaux |
| `no-embedded` | **élimine tout moteur embedded** | élimine tout store local non managé | orthogonale | orthogonale | **élimine SQLite/embedded en dev** |
| Multi-instance | support natif requis | pooling/proxy requis | compatible pool externe | verrouillage multi-instance requis | tests multi-instance simulables |
| Restart-safe | natif si transactionnel | store toujours-on | sans état applicatif | historique versionné | sans impact (compute éphémère) |

---

## 20. Matrice de compatibilité DA-A transversale

| Contrainte DA-A | Moteur SQL | Store managé | Driver | Outil migration | Stratégie locale |
|---|---|---|---|---|---|
| Ports domaine préservés | sans impact direct | sans impact direct | **le driver ne doit pas fuiter dans le domaine** | sans impact direct | ports testables par double conservés |
| Adapters manuels (pas d'ORM primaire) | orthogonale | orthogonale | **contrainte structurante — élimine ORM/query-builder comme primaire** | orthogonale | memory adapters conservés pour unitaires purs |
| SQL explicite pour unicité/OCC/idempotence | contraintes DDL du moteur | sans impact direct | API transaction/prepared statements | sans impact direct | vérifiable en local via moteur réel |

---

## 21. Matrice de compatibilité MIG-C transversale

| Contrainte MIG-C | Moteur SQL | Store managé | Driver | Outil migration | Stratégie locale |
|---|---|---|---|---|---|
| Versionnement + apply-once | support DDL transactionnel | sans impact direct | sans impact direct | **contrainte structurante** | reproductible localement |
| Expand/migrate/contract | limites DDL du moteur | sans impact direct | sans impact direct | doit exprimer les phases | testable avant contract |
| Gate backup/restore | capacités backup natives du moteur | **capacités backup/PITR du fournisseur** | sans impact direct | doit s'articuler avec le gate | runbook candidat vérifiable localement |
| Verrouillage multi-instance | support advisory lock du moteur | sans impact direct | sans impact direct | **EXTERNAL VALIDATION selon outil (voir §13)** | simulable avec plusieurs instances locales |

---

## 22. Matrice de compatibilité P1 / P2 co-compatible transversale

| Contrainte P1 (appliqué) | Moteur SQL | Store managé | Driver | Outil migration | Stratégie locale |
|---|---|---|---|---|---|
| Compute éphémère/serverless sans état durable local | sans impact direct | **store externe obligatoire** | doit fonctionner sans état de connexion persistant fort | migrations exécutées hors trafic normal | Docker local ≠ contrainte compute — dev uniquement |
| Multi-instance | support natif attendu | pooling/proxy pour rafales de connexions | compatible pool court-vécu | verrouillage multi-instance | tests multi-instance simulables localement |
| P2 co-compatible non sélectionné | inchangé | inchangé | inchangé | inchangé | inchangé |

**Rappel :** P2 reste **CO-COMPATIBLE BUT NOT SELECTED** (doc 111). Aucune des cinq décisions de ce cycle ne dépend d'un choix entre P1 et P2 ; toutes les recommandations candidates de ce document restent valables si Morris devait un jour réévaluer P1/P2, car elles portent sur la couche donnée, pas sur le compute.

---

## 23. Décision 1 — D-ASST-A2-SQL-ENGINE-01 — contexte, question, contraintes

| Champ | Contenu |
|---|---|
| **ID** | `D-ASST-A2-SQL-ENGINE-01` |
| **Question exacte** | Quel moteur SQL relationnel managé retenir comme candidat principal, dans la classe déjà fixée par STORE-01=A, sans encore sélectionner un fournisseur de store managé, un driver ou un outil de migration ? |
| **Contexte** | STORE-01=A fixe la classe « SQL relationnelle managée avec transactions » ; le repo ne contient aucun driver ni ORM ; SQLite local OPS1/D1 est **incompatible** `no-embedded` ; A2 exige `external-durable-store;explicit-concurrency;no-embedded` |
| **Preuves** | E-PKG-01 · E-OPS1 · E-D1 · E-DOC-STORE · E-DOC-A2 · §14 · §16 |
| **Contraintes** | classe SQL relationnelle managée déjà fixée · transactions requises · aucun embedded · compatibilité avec un store managé externe futur · compatibilité avec un driver Node maintenu · compatibilité avec un outil de migration versionné |

---

## 24. Paysage des moteurs candidats et critères éliminatoires

### Paysage large (avant élimination)

| Moteur | Famille | Statut dans le paysage |
|---|---|---|
| PostgreSQL | SQL relationnel, open source | candidat |
| MySQL / MariaDB | SQL relationnel, open source | candidat secondaire |
| Microsoft SQL Server | SQL relationnel, propriétaire | écarté du paysage utile — écosystème managé moins aligné avec la trajectoire Node/OSS observée dans ce repo, **EXTERNAL VALIDATION** si jamais réexaminé |
| Oracle Database | SQL relationnel, propriétaire | écarté du paysage utile — même motif, empreinte opérationnelle disproportionnée pour ce contexte |
| SQLite | SQL relationnel, embedded | **éliminé** — viole `no-embedded` |
| DuckDB / autres moteurs embedded analytiques | embedded/analytique | **éliminé** — hors classe transactionnelle applicative et viole `no-embedded` |
| Stores NoSQL (document, clé-valeur, colonne) | hors classe | **hors périmètre** — STORE-01=A fixe la classe SQL relationnelle, non réouverte ici |

### Critères éliminatoires

1. Violation `no-embedded` (élimination immédiate) ;
2. absence de support transactionnel ACID complet ;
3. absence d'écosystème driver Node.js maintenu et documenté ;
4. absence d'offre de store managé avec pooling/branching documentée (voir décision 2) ;
5. empreinte opérationnelle disproportionnée par rapport au profil P1 (éphémère/serverless).

---

## 25. Options éliminées et shortlist moteur

### Options éliminées

| Option | Motif d'élimination |
|---|---|
| SQLite / tout moteur embedded | viole `no-embedded` (A2) — anti-claim déjà établi par doc 102/107 |
| SQL Server, Oracle | écosystème managé et empreinte opérationnelle moins alignés avec la trajectoire OSS/Node observée ; **non retenus dans la shortlist**, non « impossibles » en absolu |
| NoSQL toutes familles | hors classe STORE-01=A, non réouverte |

### Shortlist retenue

| Rang | Moteur | Rôle dans la shortlist |
|---|---|---|
| 1 | **PostgreSQL** | candidat principal |
| 2 | **MySQL** | candidat secondaire — shortlist uniquement, non recommandé comme candidat principal |

MySQL demeure cité pour traçabilité de comparaison ; il n'est écarté d'aucune façon absolue mais **n'obtient pas** le rang de recommandation candidate principale dans ce document.

---

## 26. Matrice de comparaison moteur

| Critère | PostgreSQL | MySQL |
|---|---|---|
| Isolation transactionnelle | Read Committed / Repeatable Read / Serializable natifs (S-PG-ISO) | Read Committed / Repeatable Read (par défaut InnoDB) / Serializable disponible |
| Contraintes DDL | UNIQUE, FK, CHECK natifs (S-PG-DDL) | UNIQUE, FK, CHECK natifs |
| Extensions/typage avancé | riche (JSONB, types composites, extensions) | plus limité nativement |
| Écosystème driver Node | `pg` très adopté (S-PG-NPM), `postgres.js` | `mysql2` existant mais hors périmètre du repo actuel |
| Offres managées avec pooling/branching documentées | Neon, Supabase, RDS/Aurora PostgreSQL (voir décision 2) | offres managées existantes mais non instruites dans ce cycle |
| Outils de migration SQL-first disponibles | dbmate, node-pg-migrate (voir décision 4) | dbmate multi-moteur également compatible MySQL |
| Alignement avec le paysage déjà documenté (sources §13) | fort — toutes les sources consultées portent sur PostgreSQL/écosystème associé | aucune source consultée dans ce cycle ne porte sur MySQL |

---

## 27. Recommandation candidate moteur et justification

| Champ | Contenu |
|---|---|
| **Recommandation candidate** | **PostgreSQL** |
| **Statut** | **NOT DECIDED** — candidat uniquement |
| **Justification** | Isolation transactionnelle complète nativement documentée (S-PG-ISO), contraintes DDL riches (S-PG-DDL), écosystème driver Node mature (`pg`, `postgres.js`), pluralité d'offres managées avec pooling et branching documentées (Neon, Supabase, RDS/Aurora), cohérence avec les outils de migration SQL-first candidats. MySQL reste une shortlist secondaire crédible mais moins instruite par les sources consultées dans ce cycle. |
| **Avantages** | Richesse fonctionnelle DDL/typage, écosystème managé large, outils de migration engine-agnostic disponibles |
| **Inconvénients** | Aucun spécifique identifié dans ce cycle par rapport à MySQL sur les critères retenus |
| **Risques** | Confondre « moteur candidat » avec « moteur sélectionné » ; verrouiller prématurément un fournisseur managé avant l'arbitrage de la décision 2 |
| **Impacts A2/DA-A/MIG-C/P1** | Renforce `no-embedded` et `external-durable-store` ; aucun impact sur les ports DA-A ; aucun impact sur le pattern MIG-C ; compatible avec un store managé externe P1 |
| **Non-sélections** | fournisseur de store, driver, outil de migration, schéma physique, SQL/DDL exécutable |

---

## 28. Décision 2 — D-ASST-A2-MANAGED-STORE-01 — contexte, question, contraintes

| Champ | Contenu |
|---|---|
| **ID** | `D-ASST-A2-MANAGED-STORE-01` |
| **Question exacte** | Quel fournisseur de store managé retenir comme candidat principal pour héberger le moteur SQL candidat, en cohérence avec P1 (compute éphémère/serverless + store externe), sans sélectionner le vendor de compute P1 lui-même ? |
| **Contexte** | P1 exige un store durable externe ; le compute reste éphémère/serverless ; aucune offre managée n'est actuellement intégrée au repo ; le pooling de connexions et la gestion de rafales de connexions issues d'un compute serverless sont des préoccupations documentées par les sources externes (S-NEON-POOL) |
| **Preuves** | E-DOC-IP0B (P1 appliqué) · §13 S-NEON-POOL, S-NEON-BR · §16 |
| **Contraintes** | store externe durable · compatible pooling avec compute éphémère/serverless · backup/restore documenté (aligné MIG-C) · **compute P1 vendor explicitement hors périmètre de cette décision** |

**Clarification du périmètre — compute P1 vendor OUT OF SCOPE :** cette décision porte exclusivement sur le service de base de données managée (le store). Le choix du fournisseur de compute serverless/éphémère qui exécutera l'application Next.js dans le profil P1 est une question **distincte**, non traitée dans ce cycle, et **non réouverte** par cette décision.

---

## 29. Paysage des managed stores et critères éliminatoires

### Paysage large (avant élimination)

| Store managé | Modèle | Statut dans le paysage |
|---|---|---|
| Neon | PostgreSQL managé serverless, pooling PgBouncer, branching | candidat |
| Supabase (Postgres) | PostgreSQL managé avec plateforme applicative associée | candidat |
| Amazon RDS PostgreSQL | PostgreSQL managé classique (instance) | candidat |
| Amazon Aurora PostgreSQL | PostgreSQL managé compatible, stockage distribué | candidat |
| Google Cloud SQL for PostgreSQL | PostgreSQL managé classique | cité pour paysage — non instruit par une source consultée dans ce cycle |
| Azure Database for PostgreSQL | PostgreSQL managé classique | cité pour paysage — non instruit par une source consultée dans ce cycle |
| PostgreSQL auto-hébergé sur VM générique | non managé | **éliminé** — reporte la charge opérationnelle (patching, HA, backup) sur l'équipe, contraire à l'esprit « managé » recherché avec un compute P1 éphémère |

### Critères éliminatoires

1. Absence de gestion managée du moteur (patching, HA, backup) — élimine l'auto-hébergement générique ;
2. absence de mécanisme de pooling/proxy documenté compatible avec un compute serverless à connexions courtes et nombreuses ;
3. absence de procédure backup/restore documentée (nécessaire à MIG-C) ;
4. absence de source externe consultée dans ce cycle documentant la capacité (ne constitue pas une élimination technique mais limite la position dans la shortlist).

---

## 30. Options éliminées et shortlist managed store

### Options éliminées

| Option | Motif d'élimination |
|---|---|
| PostgreSQL auto-hébergé sur VM générique | charge opérationnelle non managée, incohérente avec P1 éphémère et avec l'esprit de STORE-01=A (« managée ») |
| Google Cloud SQL, Azure Database for PostgreSQL | cités pour paysage ; non instruits par une source consultée dans ce cycle ; **non éliminés en absolu**, simplement non shortlistés faute de preuve documentaire consultée |

### Shortlist retenue

| Rang | Fournisseur | Rôle dans la shortlist |
|---|---|---|
| 1 | **Neon** | candidat principal |
| 2 | **Supabase (Postgres)** | co-candidat |
| 2 | **Amazon RDS/Aurora PostgreSQL** | co-candidat |

**Aucun** des trois n'est sélectionné. Les trois options restent au même statut **NOT DECIDED** ; le rang 1 indique une préférence de recommandation candidate, non une adoption.

---

## 31. Matrice de comparaison managed store

| Critère | Neon | Supabase (Postgres) | Amazon RDS/Aurora PostgreSQL |
|---|---|---|---|
| Pooling / proxy pour compute serverless | PgBouncer intégré, mode transaction, distinction pooled/direct (S-NEON-POOL) | pooler intégré à la plateforme | RDS Proxy disponible séparément (Aurora inclut un pooling natif selon configuration) — **EXTERNAL VALIDATION** sur les détails exacts non consultés dans ce cycle |
| Branching / environnements éphémères | branches copy-on-write natives (S-NEON-BR) | fonctionnalités de projets multiples, branching moins central dans les sources consultées | pas de branching natif équivalent documenté dans ce cycle |
| Scale-to-zero / compute serverless du store | oui, orienté serverless | modèle plus proche instance persistante | modèle instance persistante (Aurora Serverless existe mais non instruit dans ce cycle) |
| Compatibilité protocole PostgreSQL pur | oui, wire-protocol standard | oui, wire-protocol standard | oui, wire-protocol standard |
| Portabilité / réversibilité | forte (Postgres standard) | forte (Postgres standard) | forte (Postgres standard) |
| Écosystème plateforme associé | focalisé base de données | plateforme applicative plus large (auth, storage, etc. — non instruits ici) | écosystème cloud large (IAM, réseau — non instruits ici) |
| Source externe consultée ce cycle | S-NEON-POOL, S-NEON-BR | aucune source dédiée consultée ce cycle | aucune source dédiée consultée ce cycle |

---

## 32. Recommandation candidate managed store et justification

| Champ | Contenu |
|---|---|
| **Recommandation candidate** | **Neon** comme candidat principal |
| **Co-candidats** | **Supabase (Postgres)**, **Amazon RDS/Aurora PostgreSQL** |
| **Statut** | **NOT DECIDED** — aucun des trois sélectionné |
| **Justification** | Alignement direct avec P1 : pooling PgBouncer documenté pour absorber les connexions courtes et nombreuses d'un compute serverless (S-NEON-POOL), branching natif utile à la stratégie locale/test candidate (décision 5, S-NEON-BR). Supabase et RDS/Aurora restent des co-candidats crédibles au même statut, notamment si les critères de plateforme associée ou d'intégration cloud existante devaient peser dans un arbitrage futur. |
| **Avantages Neon** | Pooling natif orienté serverless, branching pour environnements éphémères, protocole Postgres standard donc portable |
| **Inconvénients Neon** | Détails de tarification, SLA, région non instruits dans ce cycle (**EXTERNAL VALIDATION REQUIRED**) |
| **Risques** | Sélectionner implicitement un vendor de compute en confondant avec le vendor de store (voir clarification §28) |
| **Impacts A2/DA-A/MIG-C/P1** | Renforce `external-durable-store` (A2) ; sans impact sur les ports DA-A ; backup/restore à instruire pour MIG-C ; renforce directement P1 |
| **Non-sélections** | fournisseur final, région, plan tarifaire, SLA, vendor de compute P1 |

---

## 33. Décision 3 — D-ASST-A2-DATA-DRIVER-01 — contexte, question, contraintes

| Champ | Contenu |
|---|---|
| **ID** | `D-ASST-A2-DATA-DRIVER-01` |
| **Question exacte** | Quelle bibliothèque cliente Node.js retenir comme candidate principale pour implémenter les futurs adapters SQL derrière les ports domaine, en cohérence avec DA-A (adapters manuels, pas d'ORM primaire) ? |
| **Contexte** | DA-A exige des adapters manuels derrière les ports existants, sans ORM ni query-builder complet en position primaire ; aucun driver n'est présent dans `package.json` ; le moteur candidat principal (décision 1) est PostgreSQL |
| **Preuves** | E-PKG-01 · E-DOC-IP0B (DA-A) · §13 S-PG-NODE-TX, S-PG-NODE-POOL, S-PG-NPM, S-PJS |
| **Contraintes** | pas d'ORM/query-builder complet en position primaire (conflit DA-A) · API transaction explicite sur client dédié · compatibilité pooling avec le store managé candidat · exécution en runtime Node (pas Edge) |

---

## 34. Paysage des drivers/ORM/query-builders et critères éliminatoires

### Paysage large (avant élimination)

| Bibliothèque | Catégorie | Statut dans le paysage |
|---|---|---|
| `pg` (node-postgres) | driver bas niveau | candidat |
| `postgres.js` | driver bas niveau à templates taggés | candidat |
| `@neondatabase/serverless` | driver HTTP/WebSocket propre à un fournisseur | cité pour paysage — **éliminé de la shortlist** : couplage à un fournisseur particulier, contraire à la portabilité recherchée avant l'arbitrage de la décision 2 |
| Prisma Client | ORM complet | **éliminé comme primaire** — conflit DA-A |
| Drizzle ORM | ORM léger / query-builder typé | **éliminé comme primaire** — conflit DA-A |
| Kysely | query-builder typé | **éliminé comme primaire** — conflit DA-A |
| Knex | query-builder | **éliminé comme primaire** — conflit DA-A |
| TypeORM | ORM complet | **éliminé comme primaire** — conflit DA-A |
| Sequelize | ORM complet | **éliminé comme primaire** — conflit DA-A |

### Critères éliminatoires

1. Bibliothèque imposant un mapping d'entités ou un unit-of-work en position primaire (conflit DA-A) ;
2. bibliothèque couplée à un fournisseur de store unique avant l'arbitrage de la décision 2 ;
3. absence d'API transaction explicite sur un client dédié (nécessaire A2 `explicit-concurrency`) ;
4. absence de compatibilité runtime Node standard (les adapters DA-A s'exécutent hors Edge runtime).

---

## 35. Options éliminées et shortlist driver

### Options éliminées

| Option | Motif d'élimination |
|---|---|
| Prisma Client, Drizzle ORM, Kysely, Knex, TypeORM, Sequelize | **éliminées comme choix primaire** — chacune introduit un mapping/unit-of-work ou un query-builder complet, en conflit avec DA-A qui retient des adapters **manuels** derrière les ports domaine |
| `@neondatabase/serverless` | couplage fournisseur unique, prématuré avant l'arbitrage de la décision 2 (managed store) |

**Précision anti-claim :** cette élimination porte sur le rôle de **driver primaire d'accès aux données** dans ce cycle. Elle ne constitue ni une interdiction générale future de ces bibliothèques ni une affirmation qu'elles seraient inadéquates dans un autre contexte non couvert par DA-A.

### Shortlist retenue

| Rang | Bibliothèque | Rôle dans la shortlist |
|---|---|---|
| 1 | **`pg` (node-postgres)** | candidat principal |
| 2 | **`postgres.js`** | candidat alternatif |

---

## 36. Matrice de comparaison driver

| Critère | `pg` (node-postgres) | `postgres.js` |
|---|---|---|
| Pooling intégré | oui, `Pool` natif (S-PG-NODE-POOL) | pooling via configuration du client |
| Transactions explicites | client dédié issu du pool, `BEGIN`/`COMMIT` explicites (S-PG-NODE-TX) | `sql.begin(...)` avec callback transactionnel (S-PJS) |
| Adoption / maturité | très large adoption, ancienneté forte (S-PG-NPM) | adoption croissante, plus récent |
| Style d'API | requêtes paramétrées classiques | templates taggés (`sql\`...\``) |
| Typage TypeScript | typings communautaires matures | typings intégrés modernes |
| Runtime | Node standard | Node standard |
| Dépendance à un fournisseur de store particulier | aucune — wire-protocol standard | aucune — wire-protocol standard |
| Alignement DA-A (pas d'abstraction d'entités) | fort — requêtes SQL explicites | fort — requêtes SQL explicites via templates |

---

## 37. Recommandation candidate driver et justification

| Champ | Contenu |
|---|---|
| **Recommandation candidate** | **`pg` (node-postgres)** comme candidat principal |
| **Alternative** | **`postgres.js`** |
| **Statut** | **NOT DECIDED** — ni l'un ni l'autre sélectionné, aucune dépendance ajoutée |
| **Justification** | `pg` offre un pooling natif documenté et une API de transaction explicite sur client dédié (S-PG-NODE-TX, S-PG-NODE-POOL), une adoption large donc une maintenance long terme plus probable (S-PG-NPM), et aucune dépendance à un fournisseur de store particulier — cohérent avec le fait que la décision 2 reste NOT DECIDED. `postgres.js` reste une alternative crédible avec une ergonomie différente (templates taggés) et des garanties transactionnelles équivalentes. |
| **Avantages** | API bas niveau alignée avec DA-A (pas d'abstraction d'entités imposée), compatible avec tout fournisseur PostgreSQL wire-protocol standard |
| **Inconvénients** | Nécessite d'écrire manuellement le SQL des adapters (boilerplate), cohérent avec le choix déjà fait DA-A |
| **Risques** | Tentation d'introduire un query-builder « temporaire » qui deviendrait de facto un ORM primaire non arbitré |
| **Impacts A2/DA-A/MIG-C/P1** | Renforce DA-A (adapters manuels) ; sans impact sur MIG-C ; compatible pooling P1 selon le fournisseur retenu en décision 2 |
| **Non-sélections** | ORM, query-builder, driver propriétaire d'un fournisseur unique, version exacte du paquet |

---

## 38. Décision 4 — D-ASST-A2-MIGRATION-TOOL-01 — contexte, question, contraintes

| Champ | Contenu |
|---|---|
| **ID** | `D-ASST-A2-MIGRATION-TOOL-01` |
| **Question exacte** | Quel outil de gestion de migrations retenir comme candidat principal, en cohérence avec MIG-C (versionné + expand/contract + gate backup/restore), sans créer de migration exécutable ni installer d'outil ? |
| **Contexte** | MIG-C exige un journal versionné, une discipline expand/migrate/contract pour les changements non-additifs, et un gate backup/restore avant toute phase destructive ; OPS1/D1 ne fournissent qu'une discipline ad-hoc locale ; TB-01-06 exige une fondation migration + backup/restore |
| **Preuves** | E-DOC-IP0B (MIG-C) · E-TB0106 · E-OPS1 · E-D1 · §13 S-DBMATE, S-DBMATE-LOCK |
| **Contraintes** | SQL versionné et apply-once · support expand/contract compatible multi-instance · aucun outil bundlé à un ORM déjà éliminé (décision 3) · verrouillage multi-instance à documenter, même si non prouvé |

---

## 39. Paysage des outils de migration et critères éliminatoires

### Paysage large (avant élimination)

| Outil | Approche | Statut dans le paysage |
|---|---|---|
| dbmate | binaire CLI, SQL brut versionné, multi-moteurs | candidat |
| node-pg-migrate | bibliothèque Node, SQL brut ou DSL JS, spécifique PostgreSQL | candidat |
| Prisma Migrate | bundlé à l'ORM Prisma | **éliminé** — cohérence avec l'élimination de Prisma comme driver primaire (décision 3) |
| Drizzle Kit (migrate) | bundlé à Drizzle ORM | **éliminé** — cohérence avec l'élimination de Drizzle comme driver primaire (décision 3) |
| Umzug | bibliothèque Node générique, agnostique du moteur, orientée programmatique | cité pour paysage — non shortlisté, moins SQL-first que MIG-C ne le privilégie |
| Knex (migrations) | bundlé au query-builder Knex | **éliminé** — cohérence avec l'élimination de Knex comme driver primaire (décision 3) |
| Flyway | outil JVM, SQL versionné | cité pour paysage — non shortlisté, empreinte JVM non alignée avec la stack Node/CI Node 24 observée |
| Liquibase | outil JVM, changelog XML/YAML/SQL | cité pour paysage — non shortlisté, même motif que Flyway |
| golang-migrate / Atlas | binaires externes, SQL/DSL versionné | cités pour paysage — **EXTERNAL VALIDATION REQUIRED** si jamais réexaminés, non instruits par une source consultée dans ce cycle |

### Critères éliminatoires

1. Outil bundlé à un ORM/query-builder déjà éliminé comme driver primaire (décision 3) ;
2. empreinte runtime incompatible avec la stack Node-only observée (JVM notamment) ;
3. absence de mécanisme de versionnement explicite et d'application atomique ;
4. absence de source externe consultée dans ce cycle documentant la capacité (limite la position en shortlist sans élimination absolue).

---

## 40. Options éliminées et shortlist outil de migration

### Options éliminées

| Option | Motif d'élimination |
|---|---|
| Prisma Migrate | bundlé à un ORM déjà écarté comme driver primaire |
| Drizzle Kit (migrate) | bundlé à un ORM déjà écarté comme driver primaire |
| Knex (migrations) | bundlé à un query-builder déjà écarté comme driver primaire |
| Flyway, Liquibase | empreinte JVM non alignée avec la stack Node-only/CI Node 24 observée |

### Shortlist retenue

| Rang | Outil | Rôle dans la shortlist |
|---|---|---|
| 1 | **dbmate** | candidat principal |
| 2 | **node-pg-migrate** | candidat alternatif |

Umzug, golang-migrate et Atlas restent cités au paysage (§39) sans être promus en shortlist, faute de source consultée dans ce cycle ou de moindre alignement SQL-first avec MIG-C.

---

## 41. Matrice de comparaison outil de migration

| Critère | dbmate | node-pg-migrate |
|---|---|---|
| Format | fichiers SQL bruts versionnés (S-DBMATE) | SQL brut ou DSL JavaScript |
| Application | atomique par migration, table `schema_migrations` (S-DBMATE) | atomique par migration, table de suivi dédiée |
| Support multi-moteurs | oui — PostgreSQL, MySQL, SQLite et autres (S-DBMATE) | non — spécifique PostgreSQL |
| Intégration Node | binaire CLI indépendant du runtime applicatif | bibliothèque npm, intégrable programmatiquement |
| Verrouillage multi-instance | non natif par défaut ; discussions/évolutions de verrou consultatif documentées (S-DBMATE-LOCK) — **EXTERNAL VALIDATION REQUIRED**, confiance **moyenne** | non instruit par une source consultée dans ce cycle — **EXTERNAL VALIDATION REQUIRED** |
| Alignement MIG-C (versionné + expand/contract) | fort — SQL brut permet d'exprimer explicitement les phases | fort — SQL brut également disponible en option |
| Alignement avec le moteur candidat (décision 1) | compatible PostgreSQL et MySQL — cohérent avec la shortlist moteur | compatible PostgreSQL uniquement — cohérent avec le moteur candidat principal |

**Note EXTERNAL VALIDATION obligatoire :** le verrouillage multi-instance de dbmate est documenté en confiance **moyenne** (S-DBMATE-LOCK, `issues/101`, `PR #596`). Cette ligne doit être vérifiée opérationnellement avant tout usage en production multi-instance, quelle que soit l'issue de l'arbitrage Morris.

---

## 42. Recommandation candidate outil de migration et justification

| Champ | Contenu |
|---|---|
| **Recommandation candidate** | **dbmate** comme candidat principal |
| **Alternative** | **node-pg-migrate** |
| **Statut** | **NOT DECIDED** — ni l'un ni l'autre sélectionné, aucun outil installé, aucune migration créée |
| **Justification** | SQL brut versionné et application atomique documentés (S-DBMATE), support multi-moteurs cohérent avec la shortlist moteur (PostgreSQL principal, MySQL secondaire), indépendance du binaire CLI par rapport au runtime applicatif. `node-pg-migrate` reste une alternative crédible, plus intégrée à l'écosystème npm/Node, mais spécifique à PostgreSQL uniquement. |
| **Avantages dbmate** | SQL-first (aligné DA-A/MIG-C), multi-moteurs, simplicité du modèle de fichiers versionnés |
| **Inconvénients dbmate** | Verrouillage multi-instance non natif par défaut — **EXTERNAL VALIDATION REQUIRED** avant usage multi-instance réel |
| **Risques** | Déployer des migrations concurrentes depuis plusieurs instances sans verrou validé — risque directement lié à MIG-C et à P1 (multi-instance) |
| **Impacts A2/DA-A/MIG-C/P1** | Renforce directement MIG-C ; sans impact sur les ports DA-A ; compatible P1 si l'exécution des migrations est isolée hors trafic normal |
| **Non-sélections** | outil final, version exacte, mécanisme de verrouillage concret |

---

## 43. Décision 5 — D-ASST-A2-LOCAL-DEV-TEST-01 — contexte, question, contraintes

| Champ | Contenu |
|---|---|
| **ID** | `D-ASST-A2-LOCAL-DEV-TEST-01` |
| **Question exacte** | Quelle stratégie de développement et de test local retenir comme candidate, assurant une parité suffisante avec le moteur/store candidats sans réintroduire un embedded store ni imposer un environnement cloud permanent obligatoire ? |
| **Contexte** | Le repo dispose déjà d'adapters memory pour les tests unitaires purs ; SQLite local OPS1/D1 est un harness **incompatible** A2 en tant que store durable ; les fournisseurs candidats de la décision 2 documentent des mécanismes de branching utilisables en développement |
| **Preuves** | E-ER-MEM · E-ER-TEST · E-OPS1 · E-D1 · §13 S-NEON-BR · §16 |
| **Contraintes** | pas d'embedded comme substitut du moteur candidat · tests unitaires purs isolés de tout I/O réseau · parité de version majeure avec le moteur candidat pour les tests d'intégration · option cloud éphémère non obligatoire ni exclusive |

---

## 44. Paysage des stratégies locales et critères éliminatoires

### Paysage large (avant élimination)

| Stratégie | Description | Statut dans le paysage |
|---|---|---|
| Conteneur Docker PostgreSQL (même version majeure) | instance locale jetable, fidélité forte | candidat |
| Adapters memory (existants OA) | pour tests unitaires purs, sans I/O | candidat — usage restreint aux unitaires |
| Branche éphémère du fournisseur managé candidat | environnement cloud jetable pour intégration/preview | candidat — optionnel et supplémentaire |
| SQLite local comme substitut de dev | continuité de l'existant OPS1/D1 | **éliminé** — divergence avec le moteur candidat (décision 1), reconduit l'anti-claim `no-embedded` en dev |
| Base de données distante partagée unique (pas d'option locale) | tout développement contre une seule base cloud mutable | **éliminé** — risque d'état partagé mutable entre développeurs, coût réseau, absence de travail hors-ligne |
| Émulateur PostgreSQL en mémoire (compatibilité partielle) | moteur compatible simulé en process | cité pour paysage — **non retenu en primaire** : fidélité incomplète vis-à-vis des fonctionnalités réelles du moteur candidat, **EXTERNAL VALIDATION** si réexaminé comme complément futur |

### Critères éliminatoires

1. Divergence de moteur avec la décision 1 (élimine tout embedded de substitution) ;
2. absence d'isolation entre exécutions de tests (état partagé mutable) ;
3. dépendance réseau obligatoire pour les tests unitaires purs (doit rester local et rapide) ;
4. absence de parité de version majeure pour les tests d'intégration.

---

## 45. Options éliminées et stratégie candidate LD-A

### Options éliminées

| Option | Motif d'élimination |
|---|---|
| SQLite local comme substitut de dev | divergence de moteur, reconduit l'anti-claim `no-embedded` |
| Base distante partagée unique sans option locale | état mutable partagé, coût réseau systématique, absence de travail hors-ligne |
| Émulateur en mémoire comme stratégie primaire | fidélité incomplète vis-à-vis du moteur candidat réel — **non éliminé en absolu**, simplement non retenu en primaire |

### Stratégie candidate — LD-A

**LD-A — Conteneur Docker PostgreSQL (même version majeure que le moteur candidat) + adapters memory réservés aux tests unitaires purs + branche distante éphémère optionnelle (exemple illustratif : Neon).**

| Composante | Rôle | Statut |
|---|---|---|
| Conteneur Docker PostgreSQL, version majeure alignée avec la décision 1 | environnement de développement/intégration local à fidélité forte | candidat |
| Adapters memory existants (OA) | tests unitaires purs, sans I/O, rapides | **REUSE** déjà présent, conservé |
| Branche distante éphémère (exemple : Neon) | complément optionnel pour intégration/preview | candidat optionnel — **ne constitue pas** une adoption du fournisseur cité en décision 2, qui reste NOT DECIDED indépendamment |

**Anti-claim explicite :** la mention de Neon comme exemple de branche distante dans LD-A est purement illustrative de la capacité documentée (S-NEON-BR) ; elle n'anticipe ni ne préjuge l'arbitrage de `D-ASST-A2-MANAGED-STORE-01`, qui reste totalement indépendant et **NOT DECIDED**.

---

## 46. Matrice de comparaison stratégie locale

| Critère | Docker PostgreSQL local | Adapters memory | Branche distante éphémère (illustration) |
|---|---|---|---|
| Fidélité au moteur candidat | forte (même version majeure) | nulle (pas de moteur réel) | forte (moteur managé réel) |
| Vitesse d'exécution | correcte, dépend du démarrage conteneur | très rapide | dépend du réseau |
| Isolation entre tests | par conteneur/schéma | par instance de process | par branche |
| Fonctionnement hors-ligne | oui | oui | non |
| Faisabilité sur CI (Node 24) | nécessite un service Docker disponible sur le runner — **EXTERNAL VALIDATION REQUIRED** sur la configuration CI exacte | oui, sans dépendance externe | nécessite accès réseau et identifiants — hors périmètre CI actuel (**validate only**) |
| Usage recommandé dans LD-A | intégration / tests contre moteur réel | unitaires purs uniquement | preview/intégration optionnelle |

---

## 47. Recommandation candidate stratégie locale et justification

| Champ | Contenu |
|---|---|
| **Recommandation candidate** | **LD-A** — Docker PostgreSQL (même version majeure) + adapters memory pour unitaires purs + branche distante éphémère optionnelle |
| **Statut** | **NOT DECIDED** — aucune configuration Docker/CI créée dans ce cycle |
| **Justification** | Combine la fidélité d'un moteur réel local (Docker, même version majeure que la décision 1) avec la vitesse des adapters memory déjà présents pour les unitaires purs, tout en laissant une option cloud éphémère non obligatoire pour l'intégration/preview, cohérente avec le branching documenté par les fournisseurs candidats de la décision 2 sans les sélectionner. |
| **Avantages** | Fidélité forte pour l'intégration, vitesse préservée pour les unitaires, aucune obligation cloud permanente |
| **Inconvénients** | Nécessite Docker disponible en local et potentiellement sur CI — **EXTERNAL VALIDATION REQUIRED** sur la configuration CI actuelle (validate only, sans service Docker documenté) |
| **Risques** | Dérive de version majeure entre le conteneur local et le store managé réel si non maintenue explicitement |
| **Impacts A2/DA-A/MIG-C/P1** | Sans impact sur A2/DA-A/MIG-C/P1 en tant que tels — stratégie de test, pas de production ; renforce la testabilité des adapters DA-A et des migrations MIG-C avant tout déploiement P1 |
| **Non-sélections** | fournisseur cloud pour la branche éphémère, configuration CI Docker définitive, version exacte du conteneur |

---

## 48. Matrice globale décisions → items backlog

| Décision | Items orientés (document 103) | Statut item |
|---|---|---|
| `D-ASST-A2-SQL-ENGINE-01` | TB-01-01, TB-01-02, TB-01-03, TB-01-04, TB-01-05, TB-01-06 | **BLOCKED-BY-DECISION**, non DONE |
| `D-ASST-A2-MANAGED-STORE-01` | TB-01-01, TB-01-04, TB-01-06 | **BLOCKED-BY-DECISION**, non DONE |
| `D-ASST-A2-DATA-DRIVER-01` | TB-01-01, TB-01-03, TB-01-04, TB-01-05 | **BLOCKED-BY-DECISION**, non DONE |
| `D-ASST-A2-MIGRATION-TOOL-01` | TB-01-02, TB-01-06 | **BLOCKED-BY-DECISION**, non DONE |
| `D-ASST-A2-LOCAL-DEV-TEST-01` | TB-01-01 à TB-01-06 (validation) · futurs TB-06-* | **BLOCKED-BY-DECISION**, non DONE |

Aucun item TB-00-* ou TB-01-* n'est marqué DONE dans ce document. Le document 103 n'est pas modifié par ce cycle.

---

## 49. Matrice globale décisions → lots

| Décision | LOT-IP-0C | LOT-D1…D5 |
|---|---|---|
| Les cinq décisions D-ASST-A2-* | inchangé — **DEFERRED** (dépendance TB-02-05 non traitée ici) | orientation de préparation uniquement — **NOT AUTHORIZED**, non sélectionnable automatiquement |

**LOT-D1 NOT AUTHORIZED.** Aucune des cinq recommandations candidates, même si elles étaient toutes retenues telles quelles par un futur GO d'arbitrage, n'autoriserait par elle-même l'exécution de LOT-D1 : un GO Delivery distinct reste requis après l'arbitrage.

---

## 50. Impacts sur A2 et les dix ADR

| ADR / bundle | Impact de ce cycle |
|---|---|
| A2 (bundle) | préservé — les cinq décisions renforcent `external-durable-store;explicit-concurrency;no-embedded` sans les modifier |
| PERSIST=B | orienté par les cinq décisions candidates, non réécrit |
| TOPO=A | inchangé |
| SERVER=C | sans impact direct dans ce cycle |
| VALIDATE-LIB=A | orthogonale |
| SECRETS=A | orthogonale — les secrets de connexion au store managé restent hors périmètre technologique de ce cycle |
| ADMIN-AUTHZ=B | orthogonale |
| AUDIT-STORE=B | DA-A (hérité) continue de préserver la lane logique ; les décisions moteur/store/driver n'y portent pas atteinte |
| PURGE=C | orthogonale dans ce cycle |
| HEALTH=C | orthogonale dans ce cycle |

Aucun ADR réécrit. Aucune des dix décisions historiques n'est réouverte.

---

## 51. FinOps qualitatif

Facteurs uniquement — aucun tarif, aucun benchmark fournisseur chiffré :

- moteur : PostgreSQL et MySQL ont des coûts d'exploitation managés comparables en tendance générale, non chiffrés ici ;
- store managé : Neon (scale-to-zero orienté serverless) vs Supabase/RDS-Aurora (modèles plus proches d'une instance persistante) — arbitrage de coût futur, non tranché ;
- driver : `pg`/`postgres.js` n'ont pas de coût direct (bibliothèques open source) ;
- outil de migration : dbmate/node-pg-migrate n'ont pas de coût direct (outils open source) ;
- stratégie locale : Docker local a un coût machine développeur ; branche cloud éphémère a un coût d'usage variable non chiffré ;
- **R-TECH-FINOPS-HARD-01** reste **KEEP-OPEN** ;
- aucun hard cap sélectionné.

---

## 52. GreenOps qualitatif

- store managé serverless (Neon) : réduction de l'empreinte idle par scale-to-zero, contrepartie de cold-start ;
- store managé à instance persistante (Supabase/RDS-Aurora) : empreinte idle plus stable ;
- Docker local : empreinte machine développeur, hors périmètre GreenOps applicatif ;
- **aucune métrique carbone inventée** ni comparée chiffrée dans ce document.

---

## 53. RGPD technique

- localisation des données du futur store managé : **NOT DECIDED** · **EXTERNAL VALIDATION REQUIRED** ;
- TTL / rétention : **KEEP-OPEN** (R-TECH-TTL-01, hérité) ;
- redaction / minimisation dans les adapters DA-A futurs : à instruire lors de l'implémentation, hors périmètre de ce cycle ;
- aucune base légale ni conclusion de conformité établie par ce document.

---

## 54. Sécurité / RSSI

- aucun compte, rôle, secret ou identifiant créé dans ce cycle ;
- chiffrement en transit/au repos du futur store managé : critère à valider lors de l'implémentation, non validé ici ;
- surface d'attaque du driver retenu (`pg`/`postgres.js`) : bibliothèques largement auditées par la communauté, aucune vulnérabilité spécifique invoquée dans ce document ;
- verrouillage multi-instance de l'outil de migration candidat : **EXTERNAL VALIDATION REQUIRED** (§41) avant tout usage en production ;
- plateforme non déclarée « sécurisée » par ce document.

---

## 55. Risques et dette

| Risque / dette | Mitigation documentaire |
|---|---|
| Confondre moteur/store/driver/outil « candidat » avec « sélectionné » | statuts **NOT DECIDED** répétés dans chaque section |
| Sélectionner implicitement un fournisseur de store en illustrant LD-A avec Neon | anti-claim explicite §45 |
| Confondre le vendor de compute P1 avec le vendor de store managé | clarification explicite §28 |
| Utiliser dbmate multi-instance sans validation du verrouillage | mention **EXTERNAL VALIDATION REQUIRED** répétée §41, §42 |
| Introduire un ORM « temporaire » qui deviendrait de facto primaire | élimination explicite des ORM/query-builders comme primaires §35 |
| Autoriser LOT-D1 prématurément à partir de ce document | rappel **NOT AUTHORIZED** §49 |
| Réouvrir STORE-01=A, DA-A, MIG-C ou P1 par confusion de périmètre | rappel explicite §10 |

---

## 56. Réserves KEEP-OPEN

| Réserve | Statut |
|---|---|
| R-TECH-TTL-01 | KEEP-OPEN |
| R-TECH-FINOPS-HARD-01 | KEEP-OPEN |
| R-TECH-AF02-BOUNDARY-01 | KEEP-OPEN |
| Réserves UX | KEEP-OPEN |

Aucune réserve fermée par ce document.

---

## 57. Non-sélections consolidées

Moteur SQL final · fournisseur de store managé · région/instance du store · driver npm ajouté au `package.json` · ORM/query-builder · outil de migration installé · migration exécutable · schéma physique · SQL/DDL exécutable · configuration Docker/CI réelle · vendor de compute P1 · secret manager · observabilité vendor · modèle/endpoint OpenAI · TTL · hard cap · tarifs · SLA · SLO.

**Classe** SQL relationnelle managée (STORE-01=A), **patterns** DA-A / MIG-C / P1 = déjà **appliqués** (doc 107/111, historiques, non réouverts). Les cinq décisions de ce cycle = **NOT DECIDED**.

---

## 58. Verdict et prochaine gate candidate

**PERSISTENCE A2 TECHNOLOGY SELECTION PREPARATION EXECUTED —**
**FIVE D-ASST-A2 DECISIONS PRESENT — ALL NOT DECIDED —**
**RECOMMENDATIONS CANDIDATE ONLY (POSTGRESQL · NEON/SUPABASE/RDS-AURORA · PG/POSTGRES.JS · DBMATE/NODE-PG-MIGRATE · LD-A) —**
**NO SQL ENGINE, MANAGED STORE, DRIVER, MIGRATION TOOL OR LOCAL STRATEGY SELECTED —**
**STORE-01=A / DA-A / MIG-C / P1 UNCHANGED — P2 CO-COMPATIBLE BUT NOT SELECTED —**
**NO CODE, SQL, DDL, DOCKER OR PACKAGE CHANGE —**
**LOT-D1 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED**

Prochaine gate candidate :

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE PERSISTENCE A2 TECHNOLOGY SELECTION DECISION PACK
```

Statut : **candidate uniquement — non consommée**. Cette gate autorisera uniquement l'arbitrage explicite des cinq décisions du document 113. Elle n'autorise ni code, ni SQL, ni migration, ni Docker, ni Delivery, ni LOT-D1.


---

## Document 113 complet

# SFIA Studio — Assistant SFIA natif OpenAI — Persistence A2 Technology Selection Decision Pack

## 1. Statut

**DECISION PACK READY —**
**FIVE TECHNOLOGY DECISIONS PRESENT —**
**ALL DECISIONS NOT DECIDED —**
**RECOMMENDATIONS CANDIDATE ONLY —**
**NO TECHNOLOGY SELECTED —**
**NO SQL ENGINE, MANAGED STORE, DRIVER, MIGRATION TOOL OR LOCAL STRATEGY SELECTED —**
**STORE-01=A / DA-A / MIG-C / P1 UNCHANGED — P2 CO-COMPATIBLE BUT NOT SELECTED —**
**LOT-D1 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/113-assistant-sfia-native-openai-persistence-a2-technology-selection-decision-pack.md` |
| **Analyse source** | `projects/sfia-studio/112-assistant-sfia-native-openai-persistence-a2-technology-selection-preparation.md` |
| **GO d'exécution** | `PREPARE PERSISTENCE A2 TECHNOLOGY SELECTION` — consommé · n'adopte **aucune** option ci-dessous |
| **Document decisions-applied** | **non créé** (interdit dans ce cycle) |
| **Décisions historiques héritées** | STORE-01=A · DA-A · MIG-C · P1 (P2 co-compatible NOT SELECTED) — **non réouvertes** |

Toute option « recommandée » ci-dessous est **candidate**. Aucune case n'est précochée comme adoptée. Les cinq décisions restent **NOT DECIDED** jusqu'à un GO d'arbitrage explicite de Morris.

---

## 2. GO et autorité

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE PERSISTENCE A2 TECHNOLOGY SELECTION
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Phrase Morris consommée** | « ok go pour cette recommandation » |
| **Consommation** | 2026-08-05 17:32 CEST (+0200) / 15:32 UTC |
| **Application Cursor** | 2026-08-05 17:38 CEST (+0200) / 15:38 UTC |
| **Profil** | Critical |

Morris décide. Cursor prépare. Decision Pack ready ≠ décisions adoptées.

Gate suivante candidate :

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE PERSISTENCE A2 TECHNOLOGY SELECTION DECISION PACK
```

---

## 3. Ordre d'arbitrage recommandé

1. **`D-ASST-A2-SQL-ENGINE-01`** — fixe la famille SQL dont dépendent les quatre autres décisions.
2. **`D-ASST-A2-MANAGED-STORE-01`** — fixe le fournisseur managé compatible avec le moteur retenu et P1.
3. **`D-ASST-A2-DATA-DRIVER-01`** — fixe la bibliothèque cliente compatible avec le moteur retenu et DA-A.
4. **`D-ASST-A2-MIGRATION-TOOL-01`** — fixe l'outil de gestion de schéma compatible avec le moteur retenu et MIG-C.
5. **`D-ASST-A2-LOCAL-DEV-TEST-01`** — fixe la stratégie de parité locale, dépendante des quatre décisions précédentes.

**Ordre engine → managed store → driver → migration tool → local-dev.** Aucune ne peut être arbitrée de façon cohérente avant celles qui la précèdent dans cet ordre. Aucune n'autorise un produit hors de son propre périmètre. LOT-D1 reste **NOT AUTHORIZED** quelle que soit la combinaison retenue.

---

## 4. Matrice décisions → items

| Décision | Item(s) document 103 | Statut |
|---|---|---|
| `D-ASST-A2-SQL-ENGINE-01` | TB-01-01 à TB-01-06 | **NOT DECIDED** |
| `D-ASST-A2-MANAGED-STORE-01` | TB-01-01 · TB-01-04 · TB-01-06 | **NOT DECIDED** |
| `D-ASST-A2-DATA-DRIVER-01` | TB-01-01 · TB-01-03 · TB-01-04 · TB-01-05 | **NOT DECIDED** |
| `D-ASST-A2-MIGRATION-TOOL-01` | TB-01-02 · TB-01-06 | **NOT DECIDED** |
| `D-ASST-A2-LOCAL-DEV-TEST-01` | TB-01-01 à TB-01-06 (validation) | **NOT DECIDED** |

Aucun item TB-01-* n'est marqué DONE.

---

## 5. Matrice décisions → lots

| Décision | LOT-IP-0C | LOT-D1…D5 |
|---|---|---|
| Les cinq décisions D-ASST-A2-* | inchangé — **DEFERRED** | orientation de préparation uniquement — **NOT AUTHORIZED** |

LOT-D1 reste **NOT AUTHORIZED**. Un GO Delivery distinct, postérieur à l'arbitrage de ce Decision Pack, sera dans tous les cas nécessaire.

---

## 6. Décision D-ASST-A2-SQL-ENGINE-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question exacte** | Quel moteur SQL relationnel managé retenir comme candidat principal, dans la classe déjà fixée par STORE-01=A, sans encore sélectionner un fournisseur de store managé, un driver ou un outil de migration ? |
| **Contexte** | STORE-01=A fixe la classe SQL relationnelle managée transactionnelle ; aucun driver/ORM dans le repo ; SQLite local OPS1/D1 incompatible `no-embedded` |
| **Contraintes** | classe déjà fixée · transactions requises · aucun embedded · compatibilité store managé futur · compatibilité driver Node maintenu · compatibilité outil de migration versionné |
| **Sources Git** | `app/package.json` (E-PKG-01) · `app/lib/ops1/db.ts` (E-OPS1) · `app/lib/d1/db.ts` (E-D1) · document 107 (STORE-01=A) · document 102 (A2) |
| **Sources externes** | S-PG-ISO · S-PG-DDL (document 112 §13) |
| **Critères éliminatoires** | violation `no-embedded` · absence ACID complet · absence écosystème driver Node maintenu · empreinte opérationnelle disproportionnée vs P1 |

### Options

| Option | Statut |
|---|---|
| PostgreSQL | shortlist — candidat principal |
| MySQL | shortlist — candidat secondaire |
| SQLite / embedded | **éliminée** — viole `no-embedded` |
| SQL Server / Oracle | non shortlistées — empreinte managée moins alignée, non instruites par source consultée |
| NoSQL (toutes familles) | hors classe STORE-01=A, non réouverte |

| Champ | Contenu |
|---|---|
| **Options initiales** | PostgreSQL, MySQL, SQLite/embedded, SQL Server, Oracle, NoSQL |
| **Éliminées** | SQLite/embedded (viole `no-embedded`) · NoSQL (hors classe) · SQL Server/Oracle (non shortlistées, non éliminées en absolu) |
| **Shortlist** | PostgreSQL (principal) · MySQL (secondaire) |
| **Comparaison** | voir document 112 §26 — isolation transactionnelle, DDL, extensions, écosystème driver, offres managées documentées, outils de migration disponibles |
| **Recommandation candidate** | **PostgreSQL** |
| **Justification** | isolation transactionnelle complète documentée (S-PG-ISO), DDL riche (S-PG-DDL), écosystème driver Node mature, pluralité d'offres managées documentées |
| **Avantages** | richesse DDL/typage, écosystème managé large, outils SQL-first disponibles |
| **Inconvénients** | aucun spécifique identifié vs MySQL sur les critères retenus dans ce cycle |
| **Risques** | verrouiller prématurément un fournisseur avant l'arbitrage de la décision managed store |
| **Dette** | aucune dette technique introduite — aucune implémentation dans ce cycle |
| **Compat A2/DA-A/MIG-C/P1** | renforce `no-embedded`/`external-durable-store` (A2) · sans impact DA-A/MIG-C · compatible store externe P1 |
| **Impacts backlog/lots** | TB-01-01 à TB-01-06 orientés, non DONE · LOT-D1 non autorisé |
| **FinOps** | qualitatif seulement — coûts managés comparables en tendance, non chiffrés |
| **GreenOps** | qualitatif seulement — aucune métrique carbone inventée |
| **RGPD** | orthogonale au choix de moteur en tant que tel — localisation dépend du fournisseur (décision suivante) |
| **RSSI** | aucun compte/rôle/secret créé · surface d'attaque non évaluée dans ce cycle |
| **Réversibilité** | haute — wire-protocol standard, portable |
| **Validations externes** | aucune requise spécifiquement pour le choix de famille au-delà des sources déjà consultées |
| **Non-sélections** | fournisseur de store, driver, outil de migration, schéma physique, SQL/DDL exécutable |
| **Conséquence de non-décision** | TB-01-01 à TB-01-06 restent BLOCKED-BY-DECISION · les décisions 2 à 5 restent non instruisibles de façon définitive |
| **Réponse Morris attendue** | choisir **PostgreSQL**, **MySQL** ou une variante explicitement motivée — sans nommer de fournisseur, driver ou outil |

---

## 7. Décision D-ASST-A2-MANAGED-STORE-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question exacte** | Quel fournisseur de store managé retenir comme candidat principal pour héberger le moteur candidat, en cohérence avec P1, sans sélectionner le vendor de compute P1 lui-même ? |
| **Contexte** | P1 exige un store durable externe ; aucune offre managée intégrée au repo ; pooling et rafales de connexions serverless documentés par les sources |
| **Contraintes** | store externe durable · pooling compatible compute éphémère/serverless · backup/restore documenté (aligné MIG-C) · **compute P1 vendor explicitement hors périmètre** |
| **Sources Git** | document 111 (P1 appliqué) · document 102 (A2) |
| **Sources externes** | S-NEON-POOL · S-NEON-BR (document 112 §13) |
| **Critères éliminatoires** | absence de gestion managée (patching/HA/backup) · absence de pooling/proxy documenté · absence de procédure backup/restore documentée · absence de source consultée dans ce cycle (limite le rang, n'élimine pas en absolu) |

### Options

| Option | Statut |
|---|---|
| Neon | shortlist — candidat principal |
| Supabase (Postgres) | shortlist — co-candidat |
| Amazon RDS/Aurora PostgreSQL | shortlist — co-candidat |
| PostgreSQL auto-hébergé sur VM générique | **éliminée** — charge opérationnelle non managée |
| Google Cloud SQL / Azure Database for PostgreSQL | citées pour paysage, non shortlistées — non instruites par source consultée |

| Champ | Contenu |
|---|---|
| **Options initiales** | Neon, Supabase, RDS/Aurora PostgreSQL, VM auto-hébergée, Cloud SQL, Azure Database for PostgreSQL |
| **Éliminées** | VM auto-hébergée générique (charge opérationnelle non managée, contraire à l'esprit « managé ») |
| **Shortlist** | Neon (principal) · Supabase Postgres (co-candidat) · Amazon RDS/Aurora PostgreSQL (co-candidat) |
| **Comparaison** | voir document 112 §31 — pooling/proxy, branching, scale-to-zero, protocole standard, portabilité, écosystème plateforme |
| **Recommandation candidate** | **Neon** — co-candidats Supabase et RDS/Aurora PostgreSQL |
| **Justification** | pooling PgBouncer documenté pour compute serverless (S-NEON-POOL), branching natif utile à la stratégie locale (S-NEON-BR) |
| **Avantages** | pooling natif orienté serverless, branching pour environnements éphémères, protocole standard portable |
| **Inconvénients** | tarification, SLA, région non instruits dans ce cycle |
| **Risques** | confondre le vendor de store avec le futur vendor de compute P1 |
| **Dette** | aucune — aucune intégration réalisée |
| **Compat A2/DA-A/MIG-C/P1** | renforce `external-durable-store` (A2) · sans impact DA-A · backup/restore à instruire pour MIG-C · renforce directement P1 |
| **Impacts backlog/lots** | TB-01-01 · TB-01-04 · TB-01-06 orientés, non DONE · LOT-D1 non autorisé |
| **FinOps** | qualitatif — Neon scale-to-zero vs Supabase/RDS-Aurora instance persistante, non chiffré |
| **GreenOps** | qualitatif — réduction empreinte idle par scale-to-zero, contrepartie cold-start, non chiffré |
| **RGPD** | localisation des données **NOT DECIDED** · **EXTERNAL VALIDATION REQUIRED** |
| **RSSI** | chiffrement en transit/au repos à valider lors de l'implémentation, non validé ici |
| **Réversibilité** | haute — protocole PostgreSQL standard pour les trois candidats |
| **Validations externes** | détails RDS Proxy/Aurora Serverless non consultés dans ce cycle — **EXTERNAL VALIDATION REQUIRED** |
| **Non-sélections** | fournisseur final, région, plan tarifaire, SLA, vendor de compute P1 |
| **Conséquence de non-décision** | pooling/branching non exploitables concrètement · TB-01-06 (backup/restore) non instruit de façon définitive |
| **Réponse Morris attendue** | choisir **Neon**, **Supabase**, **RDS/Aurora PostgreSQL** ou une variante motivée — sans nommer de vendor de compute |

---

## 8. Décision D-ASST-A2-DATA-DRIVER-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question exacte** | Quelle bibliothèque cliente Node.js retenir comme candidate principale pour implémenter les futurs adapters SQL derrière les ports domaine, en cohérence avec DA-A ? |
| **Contexte** | DA-A exige des adapters manuels, sans ORM/query-builder primaire ; aucun driver présent dans `package.json` ; moteur candidat principal = PostgreSQL |
| **Contraintes** | pas d'ORM/query-builder complet en position primaire · API transaction explicite sur client dédié · compatibilité pooling avec le store candidat · runtime Node (pas Edge) |
| **Sources Git** | `app/package.json` (E-PKG-01) · document 111 (DA-A appliqué) |
| **Sources externes** | S-PG-NODE-TX · S-PG-NODE-POOL · S-PG-NPM · S-PJS (document 112 §13) |
| **Critères éliminatoires** | mapping d'entités/unit-of-work en position primaire (conflit DA-A) · couplage à un fournisseur unique avant la décision managed store · absence d'API transaction explicite · incompatibilité runtime Node standard |

### Options

| Option | Statut |
|---|---|
| `pg` (node-postgres) | shortlist — candidat principal |
| `postgres.js` | shortlist — candidat alternatif |
| Prisma Client, Drizzle ORM, Kysely, Knex, TypeORM, Sequelize | **éliminées comme primaire** — conflit DA-A |
| `@neondatabase/serverless` | **éliminée de la shortlist** — couplage fournisseur unique prématuré |

| Champ | Contenu |
|---|---|
| **Options initiales** | `pg`, `postgres.js`, `@neondatabase/serverless`, Prisma Client, Drizzle ORM, Kysely, Knex, TypeORM, Sequelize |
| **Éliminées** | Prisma/Drizzle/Kysely/Knex/TypeORM/Sequelize comme primaire (conflit DA-A) · `@neondatabase/serverless` (couplage fournisseur prématuré) |
| **Shortlist** | `pg` (principal) · `postgres.js` (alternatif) |
| **Comparaison** | voir document 112 §36 — pooling, transactions explicites, adoption, style d'API, typage, runtime, indépendance fournisseur |
| **Recommandation candidate** | **`pg` (node-postgres)** — alternative `postgres.js` |
| **Justification** | pooling natif et API transaction explicite documentés (S-PG-NODE-TX, S-PG-NODE-POOL), adoption large (S-PG-NPM), aucune dépendance à un fournisseur particulier |
| **Avantages** | API bas niveau alignée DA-A, compatible tout fournisseur PostgreSQL standard |
| **Inconvénients** | boilerplate SQL manuel — cohérent avec DA-A déjà appliqué |
| **Risques** | introduction d'un query-builder « temporaire » devenant de facto primaire non arbitré |
| **Dette** | aucune — aucune dépendance ajoutée dans ce cycle |
| **Compat A2/DA-A/MIG-C/P1** | renforce DA-A · sans impact MIG-C · compatible pooling P1 selon fournisseur retenu en décision 2 |
| **Impacts backlog/lots** | TB-01-01 · TB-01-03 · TB-01-04 · TB-01-05 orientés, non DONE · LOT-D1 non autorisé |
| **FinOps** | nul direct — bibliothèques open source sans coût de licence |
| **GreenOps** | sans impact direct mesurable dans ce cycle |
| **RGPD** | orthogonale — le driver ne détermine pas la localisation des données |
| **RSSI** | bibliothèques largement auditées par la communauté ; aucune vulnérabilité spécifique invoquée |
| **Réversibilité** | haute — wire-protocol standard, remplaçable derrière les ports DA-A |
| **Validations externes** | aucune additionnelle requise au-delà des sources déjà consultées |
| **Non-sélections** | ORM, query-builder, driver propriétaire d'un fournisseur unique, version exacte du paquet |
| **Conséquence de non-décision** | les futurs adapters DA-A ne peuvent pas être implémentés de façon stable · risque de choix ad-hoc non tracé |
| **Réponse Morris attendue** | choisir **`pg`**, **`postgres.js`** ou une variante motivée — sans nommer d'ORM primaire |

---

## 9. Décision D-ASST-A2-MIGRATION-TOOL-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question exacte** | Quel outil de gestion de migrations retenir comme candidat principal, en cohérence avec MIG-C, sans créer de migration exécutable ni installer d'outil ? |
| **Contexte** | MIG-C exige un journal versionné, une discipline expand/migrate/contract, un gate backup/restore ; OPS1/D1 = discipline ad-hoc locale ; TB-01-06 exige une fondation migration + backup/restore |
| **Contraintes** | SQL versionné et apply-once · support expand/contract multi-instance · aucun outil bundlé à un ORM déjà éliminé · verrouillage multi-instance à documenter |
| **Sources Git** | document 111 (MIG-C appliqué) · document 103 (TB-01-06) · `app/lib/ops1/db.ts` · `app/lib/d1/db.ts` |
| **Sources externes** | S-DBMATE · S-DBMATE-LOCK (document 112 §13) |
| **Critères éliminatoires** | outil bundlé à un ORM/query-builder déjà éliminé (décision 3) · empreinte JVM non alignée avec la stack Node-only · absence de versionnement explicite/atomique · absence de source consultée (limite le rang) |

### Options

| Option | Statut |
|---|---|
| dbmate | shortlist — candidat principal |
| node-pg-migrate | shortlist — candidat alternatif |
| Prisma Migrate | **éliminée** — bundlée à un ORM déjà écarté |
| Drizzle Kit (migrate) | **éliminée** — bundlée à un ORM déjà écarté |
| Knex (migrations) | **éliminée** — bundlée à un query-builder déjà écarté |
| Flyway, Liquibase | non shortlistées — empreinte JVM non alignée |
| Umzug, golang-migrate, Atlas | citées pour paysage, non shortlistées |

| Champ | Contenu |
|---|---|
| **Options initiales** | dbmate, node-pg-migrate, Prisma Migrate, Drizzle Kit, Knex, Flyway, Liquibase, Umzug, golang-migrate, Atlas |
| **Éliminées** | Prisma Migrate/Drizzle Kit/Knex (bundlées ORM déjà écartés) · Flyway/Liquibase (empreinte JVM) |
| **Shortlist** | dbmate (principal) · node-pg-migrate (alternatif) |
| **Comparaison** | voir document 112 §41 — format, application, multi-moteurs, intégration Node, verrouillage, alignement MIG-C, alignement moteur |
| **Recommandation candidate** | **dbmate** — alternative node-pg-migrate |
| **Justification** | SQL brut versionné et application atomique documentés (S-DBMATE), support multi-moteurs cohérent avec la shortlist moteur |
| **Avantages** | SQL-first aligné DA-A/MIG-C, multi-moteurs, simplicité du modèle de fichiers |
| **Inconvénients** | verrouillage multi-instance non natif par défaut |
| **Risques** | migrations concurrentes multi-instance sans verrou validé |
| **Dette** | aucune — aucun outil installé dans ce cycle |
| **Compat A2/DA-A/MIG-C/P1** | renforce directement MIG-C · sans impact DA-A · compatible P1 si exécution isolée hors trafic normal |
| **Impacts backlog/lots** | TB-01-02 · TB-01-06 orientés, non DONE · LOT-D1 non autorisé |
| **FinOps** | nul direct — outil open source sans coût de licence |
| **GreenOps** | sans impact direct mesurable |
| **RGPD** | orthogonale au choix d'outil |
| **RSSI** | verrouillage multi-instance = point de vigilance sécurité opérationnelle future |
| **Réversibilité** | moyenne à haute — format SQL brut portable, mais historique de migrations non trivialement transférable entre outils |
| **Validations externes** | **EXTERNAL VALIDATION REQUIRED** sur le verrouillage multi-instance dbmate (S-DBMATE-LOCK, `issues/101`, `PR #596`, confiance moyenne) |
| **Non-sélections** | outil final, version exacte, mécanisme de verrouillage concret |
| **Conséquence de non-décision** | TB-01-06 (fondation migration + backup/restore) non instruit de façon définitive · risque de migrations ad-hoc type OPS1 en Delivery |
| **Réponse Morris attendue** | choisir **dbmate**, **node-pg-migrate** ou une variante motivée — sans outil bundlé à un ORM déjà écarté |

---

## 10. Décision D-ASST-A2-LOCAL-DEV-TEST-01

| Champ | Contenu |
|---|---|
| **Statut** | **NOT DECIDED** |
| **Question exacte** | Quelle stratégie de développement et de test local retenir comme candidate, assurant une parité suffisante sans réintroduire un embedded store ni imposer un environnement cloud permanent obligatoire ? |
| **Contexte** | adapters memory déjà présents pour unitaires purs ; SQLite local OPS1/D1 = harness incompatible A2 en tant que store durable ; fournisseurs candidats de la décision 2 documentent du branching utilisable en développement |
| **Contraintes** | pas d'embedded comme substitut du moteur candidat · unitaires purs isolés de tout I/O réseau · parité de version majeure pour l'intégration · option cloud éphémère non obligatoire ni exclusive |
| **Sources Git** | `app/__tests__/oa/execution-run/repository.memory.test.ts` (E-ER-TEST) · `app/lib/ops1/db.ts` · `app/lib/d1/db.ts` |
| **Sources externes** | S-NEON-BR (document 112 §13) — illustration uniquement |
| **Critères éliminatoires** | divergence de moteur avec la décision 1 · absence d'isolation entre tests · dépendance réseau obligatoire pour les unitaires purs · absence de parité de version majeure |

### Options

| Option | Statut |
|---|---|
| Docker PostgreSQL (même version majeure) | shortlist — composante LD-A |
| Adapters memory (existants OA) | shortlist — composante LD-A, unitaires purs uniquement |
| Branche distante éphémère (illustration Neon) | shortlist — composante optionnelle LD-A |
| SQLite local comme substitut de dev | **éliminée** — divergence de moteur, reconduit `no-embedded` |
| Base distante partagée unique sans option locale | **éliminée** — état mutable partagé, coût réseau systématique |
| Émulateur PostgreSQL en mémoire | non retenu en primaire — fidélité incomplète |

| Champ | Contenu |
|---|---|
| **Options initiales** | Docker PostgreSQL, adapters memory, branche distante éphémère, SQLite local, base distante unique partagée, émulateur en mémoire |
| **Éliminées** | SQLite local (divergence moteur) · base distante unique partagée (état mutable, coût réseau, hors-ligne impossible) |
| **Shortlist / stratégie candidate** | **LD-A** = Docker PostgreSQL (même version majeure) + adapters memory (unitaires purs) + branche distante éphémère optionnelle (illustration) |
| **Comparaison** | voir document 112 §46 — fidélité, vitesse, isolation, hors-ligne, faisabilité CI |
| **Recommandation candidate** | **LD-A** |
| **Justification** | combine fidélité d'un moteur réel local avec la vitesse des adapters memory déjà présents, sans obligation cloud permanente |
| **Avantages** | fidélité forte pour l'intégration, vitesse préservée pour les unitaires, aucune obligation cloud permanente |
| **Inconvénients** | nécessite Docker disponible en local et potentiellement sur CI |
| **Risques** | dérive de version majeure entre conteneur local et store managé réel si non maintenue |
| **Dette** | aucune — aucune configuration créée dans ce cycle |
| **Compat A2/DA-A/MIG-C/P1** | sans impact production ; renforce la testabilité des adapters DA-A et des migrations MIG-C avant tout déploiement P1 |
| **Impacts backlog/lots** | TB-01-01 à TB-01-06 (validation) orientés, non DONE · LOT-D1 non autorisé |
| **FinOps** | Docker local = coût machine développeur ; branche cloud éphémère = coût d'usage variable, non chiffré |
| **GreenOps** | sans impact direct mesurable |
| **RGPD** | branche distante éphémère = même statut RGPD que la décision managed store, **NOT DECIDED** indépendamment |
| **RSSI** | isolation entre environnements de test à instruire lors de l'implémentation |
| **Réversibilité** | haute — chaque composante remplaçable indépendamment |
| **Validations externes** | **EXTERNAL VALIDATION REQUIRED** sur la disponibilité d'un service Docker en CI (actuellement validate only, sans service Docker documenté) |
| **Non-sélections** | fournisseur cloud pour la branche éphémère, configuration CI Docker définitive, version exacte du conteneur |
| **Conséquence de non-décision** | absence de parité locale formalisée · risque de tests d'intégration non représentatifs du moteur/store réels |
| **Réponse Morris attendue** | choisir **LD-A** ou une variante motivée — sans configuration Docker/CI réelle |

---

## 11. Matrice des dépendances entre décisions

| Décision | Dépend de | Débloque (orientation) |
|---|---|---|
| `D-ASST-A2-SQL-ENGINE-01` | STORE-01=A (fait) | les quatre décisions suivantes |
| `D-ASST-A2-MANAGED-STORE-01` | moteur candidat · P1 (fait) | pooling/branching concrets, backup/restore MIG-C |
| `D-ASST-A2-DATA-DRIVER-01` | moteur candidat · DA-A (fait) | implémentation future des adapters TB-01-* |
| `D-ASST-A2-MIGRATION-TOOL-01` | moteur candidat · MIG-C (fait) | TB-01-06, fondation migration/backup |
| `D-ASST-A2-LOCAL-DEV-TEST-01` | les quatre décisions précédentes | parité de test avant tout déploiement P1 |

Ordre recommandé : engine → managed store → driver → migration tool → local-dev (identique §3).

---

## 12. Matrice des réserves

| Réserve | Effet sur ce cycle | Statut |
|---|---|---|
| R-TECH-TTL-01 | aucune fermeture · hors arbitrage moteur/store/driver/migration/local | KEEP-OPEN |
| R-TECH-FINOPS-HARD-01 | facteurs FinOps qualitatifs seulement | KEEP-OPEN |
| R-TECH-AF02-BOUNDARY-01 | orthogonale | KEEP-OPEN |
| Réserves UX | orthogonales | KEEP-OPEN |

---

## 13. Matrice des non-sélections

| Domaine | Statut |
|---|---|
| Moteur SQL final | NOT SELECTED |
| Fournisseur de store managé / région / instance | NOT SELECTED |
| Driver npm ajouté au `package.json` | NOT SELECTED / NOT ADDED |
| ORM / query-builder primaire | NOT SELECTED |
| Outil de migration installé / migration exécutable | NOT SELECTED / NOT CREATED |
| Schéma physique / SQL / DDL | NOT SELECTED / NOT CREATED |
| Configuration Docker / CI réelle | NOT SELECTED / NOT CONFIGURED |
| Vendor de compute P1 | NOT IN SCOPE (décision 2) |
| Secret manager / IAM / IdP | NOT SELECTED (orientations SECRETS/AUTH déjà appliquées, non réouvertes) |
| Observabilité vendor | NOT SELECTED |
| Modèle / endpoint OpenAI | NOT SELECTED |
| TTL / hard cap / tarifs / SLA / SLO | NOT SELECTED / KEEP-OPEN |

**Classe** SQL managée = déjà **appliquée** (STORE-01=A). **Patterns** DA-A / MIG-C / P1 = déjà **appliqués** (doc 111). **Produits/technologies** des cinq décisions de ce cycle = **NOT DECIDED**.

---

## 14. FinOps consolidé

| Décision | Facteur qualitatif |
|---|---|
| Moteur | coûts managés comparables en tendance générale entre PostgreSQL et MySQL, non chiffrés |
| Store managé | Neon (scale-to-zero) vs Supabase/RDS-Aurora (instance persistante) — arbitrage de coût futur |
| Driver | nul direct — bibliothèques open source |
| Outil migration | nul direct — outils open source |
| Local-dev | Docker local = coût machine développeur ; branche cloud = coût d'usage variable |

**R-TECH-FINOPS-HARD-01** reste **KEEP-OPEN**. Aucun tarif, aucun hard cap sélectionné dans ce Decision Pack.

---

## 15. GreenOps consolidé

| Décision | Facteur qualitatif |
|---|---|
| Store managé | scale-to-zero (Neon) réduit l'empreinte idle, contrepartie cold-start ; instance persistante (Supabase/RDS-Aurora) = empreinte idle plus stable |
| Local-dev | Docker local = empreinte machine développeur, hors périmètre GreenOps applicatif |
| Moteur / driver / outil migration | sans impact GreenOps direct mesurable dans ce cycle |

**Aucune métrique carbone inventée.**

---

## 16. RGPD consolidé

| Décision | Point RGPD |
|---|---|
| Store managé | localisation des données **NOT DECIDED** · **EXTERNAL VALIDATION REQUIRED** |
| Local-dev | branche distante éphémère soumise au même statut RGPD que le store managé, non tranché indépendamment |
| Moteur / driver / outil migration | orthogonaux à la localisation des données |

TTL / rétention : **KEEP-OPEN** (R-TECH-TTL-01, hérité). Aucune base légale ni conclusion de conformité établie par ce document.

---

## 17. RSSI consolidé

| Décision | Point sécurité |
|---|---|
| Moteur / store managé | chiffrement en transit/au repos à valider lors de l'implémentation, non validé ici |
| Driver | bibliothèques largement auditées par la communauté, aucune vulnérabilité spécifique invoquée |
| Outil migration | verrouillage multi-instance = point de vigilance opérationnelle future, **EXTERNAL VALIDATION REQUIRED** pour dbmate |
| Local-dev | isolation entre environnements de test à instruire lors de l'implémentation |

Aucun compte, rôle, secret ou identifiant créé dans ce cycle. Plateforme non déclarée « sécurisée » par ce document.

---

## 18. Conséquences Delivery

| Affirmation | Statut |
|---|---|
| Decision Pack prêt | oui |
| Décisions adoptées | **non** |
| LOT-D1 autorisé | **non** |
| Code / SQL / migration / Docker / IaC autorisés | **non** |
| STORE-01=A / DA-A / MIG-C / P1 réouverts | **non** |
| Statut de P2 modifié | **non** — reste CO-COMPATIBLE BUT NOT SELECTED |
| Delivery | **NOT-CONSUMED** |

Après arbitrage futur des cinq décisions + gates techniques additionnelles si nécessaires + GO Delivery distinct seulement.

---

## 19. Verdict et prochaine gate

**DECISION PACK READY —**
**FIVE D-ASST-A2 DECISIONS PRESENT —**
**ALL DECISIONS NOT DECIDED —**
**RECOMMENDATIONS CANDIDATE ONLY (POSTGRESQL · NEON/SUPABASE/RDS-AURORA · PG/POSTGRES.JS · DBMATE/NODE-PG-MIGRATE · LD-A) —**
**NO SQL ENGINE, MANAGED STORE, DRIVER, MIGRATION TOOL OR LOCAL STRATEGY SELECTED —**
**STORE-01=A / DA-A / MIG-C / P1 UNCHANGED — P2 CO-COMPATIBLE BUT NOT SELECTED —**
**BLOCKED BY FUTURE MORRIS DECISION —**
**LOT-D1 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED**

Prochaine gate candidate :

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE PERSISTENCE A2 TECHNOLOGY SELECTION DECISION PACK
```

Statut : **candidate uniquement — non consommée**. N'autorise ni code ni Delivery ni LOT-D1.


---

## Sections modifiées 103

# SFIA Studio — Assistant SFIA natif OpenAI — Technical Implementation Backlog

## 1. Statut

**LOT-IP-0A DECISIONS APPLIED —**
**LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY SELECTION PREPARATION EXECUTED —**
**TECHNOLOGY DECISION PACK READY —**
**FIVE TECHNOLOGY DECISIONS NOT DECIDED —**
**LOT-IP-0C DEFERRED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**NO ITEM DONE —**
**DELIVERY NOT-CONSUMED**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md` |
| **Items** | 33 |
| **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
| **Documents 90–102** | Inchangés |
| **Delivery** | NOT-CONSUMED |


## 1bis. GO Morris — validation priorités et premier lot

```text
GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 14:46 CEST (+0200) / 12:46 UTC |
| **Profil** | **Critical** |
| **Effet** | Priorités P0–P3 **validées** · LOT-IP-0A **SELECTED** · LOT-IP-0B/0C **DEFERRED** · Delivery **NOT-CONSUMED** |
| **Non-effet** | Pas d’exécution LOT-IP-0A · pas de Decision Pack produit · pas de sélection techno · pas de code |

### Historique des décisions Backlog

| ID | Statut |
|---|---|
| D-ASST-BLG-PRIORITY-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-PRIORITY-02 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-LOT-STRUCTURE-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-FIRST-LOT-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-DELIVERY-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-NONSELECTIONS-01 | DECIDED — PRESERVE OPEN |

Record formel : `projects/sfia-studio/104-assistant-sfia-native-openai-technical-implementation-backlog-decisions-applied.md`.


## 1ter. GO Morris — exécution LOT-IP-0A

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 15:17 CEST (+0200) / 13:17 UTC |
| **Profil** | **Critical** |
| **Effet** | Exécution **documentaire** LOT-IP-0A · analyses 105 · Decision Pack 106 · Delivery **NOT-CONSUMED** |
| **Non-effet** | Pas d’adoption des options 106 · pas de techno · pas de code · pas de LOT-IP-0B/0C · pas de LOT-D* |

### Historique d’exécution LOT-IP-0A

| Étape | Résultat |
|---|---|
| TB-00-01 | Inventaire auth complet — auth end-user ABSENTE · OA AuthorityResolver REUSE/EXTEND |
| TB-00-02 | Verdict technique **FIT WITH EXTENSIONS** — schémas Assistant NEW requis |
| TB-00-03 | Classes store A2 préparées — **STORE-01=A** classe SQL managée **décidée** (produit NOT SELECTED) |
| TB-00-06 | Catalogue logique secrets/config — REUSE SecretSourcePort |
| Documents | `105-…-lot-ip-0a.md` · `106-…-lot-ip-0a-decision-pack.md` |
| Décisions D-ASST-IP0A-* | **AUTH/AJV/STORE/SECRETS = A — DECIDED** (voir §1quater · document 107) |

---



## 1quater. GO Morris — arbitrage LOT-IP-0A

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0A DECISION PACK
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 15:53 CEST (+0200) / 13:53 UTC |
| **Profil** | **Critical** |
| **Décisions** | `AUTH-01=A` · `AJV-01=A` (factory B différée) · `STORE-01=A` (classe SQL managée ; fournisseur/ORM/migration NOT SELECTED) · `SECRETS-01=A` (secret manager différé) |
| **Effet** | Orientations architecturales validées · document 107 créé · LOT-IP-0B **éligible** (non sélectionné) · Delivery **NOT-CONSUMED** |
| **Non-effet** | Pas de code · pas de produit/fournisseur · pas d’exécution LOT-IP-0B · pas de LOT-D* · pas de fermeture de réserve |

### Chaîne documentaire

| Document | Rôle |
|---|---|
| **105** | analyse LOT-IP-0A |
| **106** | Decision Pack historique **pré-arbitrage** (NOT DECIDED figés) |
| **107** | décisions appliquées — `projects/sfia-studio/107-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decisions-applied.md` |

---


## 1quinquies. GO Morris — sélection LOT-IP-0B

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — SELECT NEXT IMPLEMENTATION-PREPARATION LOT (LOT-IP-0B CANDIDATE)
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 16:09 CEST (+0200) / 14:09 UTC |
| **Profil** | **Standard** |
| **Décision** | `D-ASST-BLG-NEXT-LOT-01 = LOT-IP-0B — SELECTED BY MORRIS` |
| **Effet** | LOT-IP-0B **sélectionné** · exécution **non** autorisée · TB-00-04/05 **NOT EXECUTED** · document 108 créé · Delivery **NOT-CONSUMED** |
| **Non-effet** | Pas d’exécution TB-00-04/05 · pas de Decision Pack produit · pas de fournisseur/ORM/migration · pas de LOT-D1 · pas de code |
| **Record** | `projects/sfia-studio/108-assistant-sfia-native-openai-lot-ip-0b-selection-decisions-applied.md` |

---

## 1sexies. GO Morris — exécution LOT-IP-0B

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0B (TB-00-04, TB-00-05)
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 16:21 CEST (+0200) / 14:21 UTC |
| **Profil** | **Critical** |
| **Périmètre** | TB-00-04 · TB-00-05 |
| **Effet** | Exécution **documentaire** LOT-IP-0B · analyse 109 · Decision Pack 110 · trois décisions D-ASST-IP0B-* **NOT DECIDED** · Delivery **NOT-CONSUMED** |
| **Non-effet** | Pas d’adoption des options 110 · pas de produit/fournisseur/moteur/ORM/outil migration · pas de cloud/région/instances · pas de SQL/DDL/migration · pas de code · pas de LOT-IP-0C · pas de LOT-D* |
| **Analyse** | `projects/sfia-studio/109-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b.md` |
| **Decision Pack** | `projects/sfia-studio/110-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decision-pack.md` |

### Chaîne documentaire LOT-IP-0B

| Document | Rôle |
|---|---|
| **108** | sélection LOT-IP-0B (historique) |
| **109** | analyse et Implementation Preparation |
| **110** | Decision Pack pré-arbitrage |

### Décisions LOT-IP-0B (pré-arbitrage)

| ID | Statut |
|---|---|
| D-ASST-IP0B-DATA-ACCESS-01 | **NOT DECIDED** |
| D-ASST-IP0B-MIGRATION-01 | **NOT DECIDED** |
| D-ASST-IP0B-PLATFORM-01 | **NOT DECIDED** |

Items DONE : **aucun**. TB-00-04 / TB-00-05 : préparation décisionnelle exécutée · **pas** DONE.

---

## 1septies. GO Morris — arbitrage LOT-IP-0B

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE LOT-IP-0B DECISION PACK
```

### Bloc décisionnel consommé

```text
D-ASST-IP0B-DATA-ACCESS-01 = DA-A
D-ASST-IP0B-MIGRATION-01 = MIG-C
D-ASST-IP0B-PLATFORM-01 = P1 — P2 CO-COMPATIBLE BUT NOT SELECTED
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 17:08 CEST (+0200) / 15:08 UTC |
| **Profil** | **Critical** |
| **Effet** | Trois décisions **appliquées** · document 111 créé · orientations DA-A / MIG-C / P1 validées · P2 co-compatible **non** sélectionné · Delivery **NOT-CONSUMED** |
| **Non-effet** | Pas de techno concrète · pas de SQL/DDL/migration · pas d’ORM/outil · pas de cloud/région/instances · pas de sélection P2 · pas de LOT-D* · pas de code · pas de fermeture de réserve |
| **Record** | `projects/sfia-studio/111-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decisions-applied.md` |

### Chaîne documentaire LOT-IP-0B (post-arbitrage)

| Document | Rôle |
|---|---|
| **109** | analyse LOT-IP-0B (historique) |
| **110** | Decision Pack pré-arbitrage (NOT DECIDED figés) |
| **111** | décisions appliquées |

### Décisions LOT-IP-0B (appliquées)

| ID | Décision |
|---|---|
| D-ASST-IP0B-DATA-ACCESS-01 | **DA-A — DECIDED** |
| D-ASST-IP0B-MIGRATION-01 | **MIG-C — DECIDED** |
| D-ASST-IP0B-PLATFORM-01 | **P1 — DECIDED** |
| P2 | **CO-COMPATIBLE — NOT SELECTED** |

Items DONE : **aucun**. TB-00-04 / TB-00-05 : **pas** DONE.

---

## 1octies. GO Morris — Persistence A2 Technology Selection Preparation

Formulation utilisateur exacte consommée :

```text
ok go pour cette recommandation
```

Interprétation canonique bornée :

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE PERSISTENCE A2 TECHNOLOGY SELECTION
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 17:32 CEST (+0200) / 15:32 UTC |
| **Cycle** | Implementation Preparation — Persistence A2 Technology Selection Preparation |
| **Profil** | **Critical** |
| **Portée** | Préparer Decision Pack technologique (moteur · store managé · driver · outil migration · local-dev/test) sans adopter aucune techno · différer fournisseur compute P1 · ne pas sélectionner LOT-D1 |
| **Effet** | Analyse 112 · Decision Pack 113 · cinq décisions D-ASST-A2-* **NOT DECIDED** · Delivery **NOT-CONSUMED** |
| **Non-effet** | Pas d’adoption techno · pas de SQL/DDL/migration · pas de package · pas de compte/service · pas de LOT-D1 · pas de code |
| **Analyse** | `projects/sfia-studio/112-assistant-sfia-native-openai-persistence-a2-technology-selection-preparation.md` |
| **Decision Pack** | `projects/sfia-studio/113-assistant-sfia-native-openai-persistence-a2-technology-selection-decision-pack.md` |

### Chaîne documentaire Persistence A2 Technology Selection

| Document | Rôle |
|---|---|
| **111** | décisions architecturales LOT-IP-0B appliquées |
| **112** | analyse et préparation technologique |
| **113** | Decision Pack technologique pré-arbitrage |

### Décisions technologiques candidates (pré-arbitrage)

| ID | Statut |
|---|---|
| D-ASST-A2-SQL-ENGINE-01 | **NOT DECIDED** |
| D-ASST-A2-MANAGED-STORE-01 | **NOT DECIDED** |
| D-ASST-A2-DATA-DRIVER-01 | **NOT DECIDED** |
| D-ASST-A2-MIGRATION-TOOL-01 | **NOT DECIDED** |
| D-ASST-A2-LOCAL-DEV-TEST-01 | **NOT DECIDED** |

Items DONE : **aucun**. TB-00-04 / TB-00-05 / TB-01-* : **pas** DONE.

---

---

## 20. Matrice de dépendances (synthèse)

TB-00-* → TB-01-* (idempotence TB-01-05 **avant** AuthorityGate) → TB-02-* → TB-03-* (TB-03-02 dépend de TB-01-05) → TB-04-* → TB-05-* → TB-06-*.

Points durs : TB-00-03/04 bloquent TB-01-* · TB-00-01 bloque TB-03-01 · TB-00-02 bloque TB-02-03 · TB-02-05 (metering/soft cap) **n’est plus** bloqué par hard cap · TB-04-04 (Decision Pack hard cap) dépend de TB-02-05 · TB-06-04 readiness pilote attend hard cap/TTL.

**Graphe :** 33 nœuds · 56 arêtes · acyclique · topo 33/33 — inchangé après F-BLG-103-01/03 (boucle TB-01-05↔TB-03-02 cassée ; boucle logique FinOps dissociée). Aucune dépendance ajoutée ou supprimée dans ce cycle.

---

## 21. Ordre de réalisation (priorités validées · lots IP restructurés)

1. **LOT-IP-0A** (SELECTED) — TB-00-01/02/03/06
2. Décisions Morris issues de LOT-IP-0A (futur cycle)
3. **LOT-IP-0B** (DECISIONS APPLIED — DA-A / MIG-C / P1) — TB-00-04/05
4. Phase Persistence A2 (P1) dont TB-01-05 avant AuthorityGate
5. Phase Assistant (P1) · metering/soft cap TB-02-05 (P2)
6. Phase Governance (P1)
7. **LOT-IP-0C** (DEFERRED) — TB-04-04 après preuve TB-02-05
8. Lifecycle / Health / QA pilote (P2) · observabilité TB-05-03 (P3)

**Priorités : VALIDATED BY MORRIS · Exécution lots techniques : NOT AUTHORIZED · Delivery : NOT-CONSUMED**

---

## 22. Lots

### LOT-IP-0 (historique)

**SUPERSEDED BY DEPENDENCY-SAFE SPLIT LOT-IP-0A / LOT-IP-0B / LOT-IP-0C**

Motif : le lot historique regroupait TB-00-01…06 + TB-04-04 alors que TB-00-04/05 dépendent de TB-00-03 et TB-04-04 dépend de TB-02-05 (D-ASST-BLG-LOT-STRUCTURE-01).

### LOT-IP-0A — Foundational Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06 |
| **Dépendances backlog entrantes** | aucune |
| **Nature** | documentation / inventaire / analyse / Decision Pack uniquement |
| **Statut** | **DECISIONS APPLIED — IMPLEMENTATION PREPARATION COMPLETE — NO IMPLEMENTATION AUTHORIZED** |
| **Décision de sélection** | D-ASST-BLG-FIRST-LOT-01 (antérieure) |
| **GO d’exécution** | consommé 2026-08-05 15:17 CEST |
| **GO d’arbitrage** | consommé 2026-08-05 15:53 CEST |
| **Analyses** | `projects/sfia-studio/105-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a.md` |
| **Decision Pack historique** | `projects/sfia-studio/106-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decision-pack.md` (pré-arbitrage) |
| **Décisions appliquées** | `projects/sfia-studio/107-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decisions-applied.md` |
| **Décisions** | **AUTH=A** · **AJV=A** · **STORE=A** (classe SQL managée) · **SECRETS=A** |
| **Items DONE** | **aucun** |
| **Code / produit / Delivery** | toujours interdits |

### LOT-IP-0B — Store-Dependent Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-00-04 · TB-00-05 |
| **Dépendance** | TB-00-03 (STORE-01 classe SQL managée **décidée** ; produit/ORM/migration **NOT SELECTED**) |
| **Statut** | **DECISION PACK ARBITRATED — DECISIONS APPLIED — IMPLEMENTATION PREPARATION COMPLETE — NO IMPLEMENTATION AUTHORIZED** |
| **Décision de sélection** | `D-ASST-BLG-NEXT-LOT-01` (historique · document 108) |
| **GO de sélection** | consommé 2026-08-05 16:09 CEST |
| **GO d’exécution** | consommé 2026-08-05 16:21 CEST |
| **GO d’arbitrage** | consommé 2026-08-05 17:08 CEST |
| **Record sélection** | `projects/sfia-studio/108-assistant-sfia-native-openai-lot-ip-0b-selection-decisions-applied.md` |
| **Analyse** | `projects/sfia-studio/109-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b.md` |
| **Decision Pack** | `projects/sfia-studio/110-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decision-pack.md` (pré-arbitrage) |
| **Décisions appliquées** | `projects/sfia-studio/111-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decisions-applied.md` |
| **Décisions** | `DATA-ACCESS-01=DA-A` · `MIGRATION-01=MIG-C` · `PLATFORM-01=P1` — **DECIDED** · P2 **CO-COMPATIBLE — NOT SELECTED** |
| **Motif** | D-ASST-IP0A-STORE-01=A satisfait la dépendance de gouvernance store |
| **Items DONE** | **aucun** |
| **TB-00-04 / TB-00-05** | arbitrage tracé · **pas** DONE |
| **Non-effet** | décisions architecturales ≠ techno concrète · pas de SQL/migration · pas de LOT-D1 · pas d’implémentation |

### LOT-IP-0C — Pre-Pilot FinOps Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-04-04 |
| **Dépendance** | TB-02-05 |
| **Statut** | **DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED** |
| **Note** | Requis avant pilote · ne bloque pas l’exécution future de TB-02-05 |

### LOT-D1 à LOT-D5

**NOT AUTHORIZED — NOT SELECTED — FUTURE MORRIS DECISION REQUIRED**

LOT-D1 (persist foundation) reste **NOT AUTHORIZED**. Blocages actuels :
- cinq décisions technologiques D-ASST-A2-* **non arbitrées** ;
- stratégie de tests non autorisée ;
- fichiers Delivery non bornés ;
- GO Delivery absent ;
- réserves et preuves opérationnelles non traitées.

LOT-D2 à LOT-D5 restent **NOT AUTHORIZED**.

Aucun lot Delivery sélectionné. LOT-IP-0A / LOT-IP-0B décisions **appliquées** · préparation techno A2 **exécutée** / pack **ready** / décisions techno **NOT DECIDED** · produits/fournisseurs **NOT SELECTED**.


---

## 23. Chemin critique

**LOT-IP-0A** décisions appliquées → **LOT-IP-0B** décisions appliquées → **préparation technologique persistance A2** (112/113) → **arbitrage Morris** des cinq décisions D-ASST-A2-* → application des décisions → **sélection éventuelle** de LOT-D1 par Morris → GO Delivery distinct → implémentation fondation persistance (TB-01-*) → Provider → AuthorityGate → metering → **LOT-IP-0C** → QA pilote.

LOT-D1 **n’est pas** éligible, sélectionné ni autorisé sans décision Morris distincte.

---

## 24. Items bloqués par décision

| Item | Blocage |
|---|---|
| TB-01-* (sauf logique pure) | produit store / moteur / impl adapters (patterns DA-A/MIG-C décidés ; produit NOT SELECTED) |
| TB-02-03 | AJV fit N2/N3 (TB-00-02) |
| TB-03-01/02 | auth existante |
| TB-04-02 · TB-06-02 | store + TTL policy |
| TB-04-03 | décisions rétention/redaction (pas une réserve) |
| TB-05-01 · TB-06-01 | produit plateforme / preuve P1 (profil P1 décidé ; vendor NOT SELECTED) |
| TB-06-04 | hard cap + TTL + store/plateforme |
| TB-02-05 | **non bloqué** par hard cap (CANDIDATE) |

Statuts : **BLOCKED BY FUTURE MORRIS DECISION** / **IMPLEMENTATION-PREPARATION REQUIRED** / **CANDIDATE**.

---

## 25. Items prérequis avant pilote

TB-00-* (décisions) · TB-01-06 backup/restore · TB-04-02/04 · TB-05-02 · TB-06-01…04 · fermeture ou arbitrage explicite réserves TTL/FinOps.

---

## 26. Critères de passage

### Vers arbitrage LOT-IP-0B

- **fait** (GO consommé 2026-08-05 17:08 CEST) · document 111 créé.

### Vers une future Delivery (non consommée)

- validation ChatGPT du document 111 ;
- technologies concrètes traitées par gates dédiées si nécessaires ;
- preuve de compatibilité des choix concrets avec DA-A, MIG-C et P1 ;
- lot Delivery explicitement sélectionné par Morris ;
- GO Delivery distinct ;
- fichiers bornés ;
- stratégie de tests ;
- stratégie migration et backup/restore opérationnelle ;
- contraintes health, jobs, secrets et observabilité traitées ;
- réserves bloquantes traitées.

### Vers arbitrage techno Persistence A2 (prochaine)

- validation ChatGPT des documents 112/113 ;
- GO `ARBITRATE PERSISTENCE A2 TECHNOLOGY SELECTION DECISION PACK` ;
- cinq décisions encore **NOT DECIDED** jusqu’au GO ;
- Delivery reste NOT-CONSUMED.

### Vers LOT-D1 (futur, non autorisé, non éligible auto)

- décisions LOT-IP-0B appliquées (**fait**) ;
- cinq décisions D-ASST-A2-* arbitrées et appliquées ;
- technologies concrètes compatibles DA-A / MIG-C / P1 ;
- stratégie tests autorisée ;
- lot LOT-D1 **explicitement** sélectionné par Morris ;
- GO Delivery distinct ;
- fichiers bornés ;
- réserves bloquantes traitées.

LOT-D1 reste **NOT AUTHORIZED** jusqu’à ces conditions.

**DELIVERY-GATE=NOT-CONSUMED** (D-ASST-BLG-DELIVERY-01).

---

## 27. Risques et incertitudes

Auth absente en code · store classe décidée / produit non choisi · patterns DA-A/MIG-C/P1 décidés · cinq décisions techno **NOT DECIDED** (pack 113) · P2 non sélectionné · AJV extension décidée / schémas N2/N3 non implémentés · réserves UX · FinOps hard / TTL ouverts · memory/fixture **≠** A2 durable · risque de sélection implicite via shortlist.

---

## 28. Non-sélections

**Classe SQL relationnelle managée = DECIDED** (STORE-01=A). **Patterns** DA-A / MIG-C / P1 = **DECIDED**. P2 = **CO-COMPATIBLE — NOT SELECTED**. Cinq décisions techno D-ASST-A2-* = **NOT DECIDED**. Restent **NOT SELECTED** : moteur SQL · produit store · fournisseur store · driver · bibliothèque data-access · ORM · query builder · outil de migration · format de migration · cloud compute · hébergeur compute · région · nombre d’instances · scheduler · jobs service · secret manager · observability vendor · schéma physique · SQL/DDL · IaC · modèle/endpoint OpenAI · TTL · hard cap · tarifs validés · SLA validé · SLO — **FUTURE DEDICATED DECISION OR ARBITRATION GATE REQUIRED**.

---

## 29. Actions autorisées

Maintenir 112/113 · tracer la préparation techno dans 103 · maintenir 104–111 historiques byte-identical · préparer futur arbitrage des cinq décisions · publier le handoff.

---

## 30. Actions interdites

Adopter une option 113 · créer 114 · sélectionner une technologie concrète · sélectionner P2 · créer code, SQL, DDL, migration, package ou IaC · créer un compte/service · exécuter LOT-IP-0C · sélectionner ou exécuter LOT-D1 à LOT-D5 · fermer une réserve · marquer un item DONE · Delivery · commit/push projet · PR/merge.

---

## 31. Anti-claims

Préparation techno ≠ sélection · Decision Pack ready ≠ DECIDED · DA-A/MIG-C/P1 ≠ produits choisis · P2 ≠ sélectionné · TB-00-04/05/TB-01-* ≠ DONE · LOT-IP-0C DEFERRED · LOT-D* NOT AUTHORIZED · memory ≠ A2 durable · aucun item DONE · Delivery NOT-CONSUMED · réserves ouvertes.

---

## 32. Verdict

**LOT-IP-0A DECISIONS APPLIED — LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY SELECTION PREPARATION EXECUTED —**
**TECHNOLOGY DECISION PACK READY — FIVE TECHNOLOGY DECISIONS NOT DECIDED —**
**DOCUMENT 103 UPDATED — DOCUMENTS 112 AND 113 CREATED —**
**DOCUMENTS 104 TO 111 BYTE-IDENTICAL — DOCUMENT 114 ABSENT —**
**NO TECHNOLOGY SELECTED —**
**GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
**LOT-IP-0C DEFERRED — LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED —**
**READY FOR CHATGPT VALIDATION AND MORRIS PERSISTENCE A2 TECHNOLOGY ARBITRATION**


---

## 33. Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE PERSISTENCE A2 TECHNOLOGY SELECTION DECISION PACK
```

Statut : **candidate uniquement — non consommée**.

Cette gate autorisera uniquement l’arbitrage explicite des cinq décisions du document 113. Elle **n’autorise ni LOT-D1 ni Delivery**.

**PERSISTENCE A2 TECHNOLOGY DECISION PACK READY — MORRIS ARBITRATION REQUIRED — DELIVERY NOT CONSUMED**


---

## Diff RAW utile 103

```diff
diff --git a/.tmp-sfia-review/a2-tech-sel/103-before.md b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
index 81e1d59..5064f0d 100644
--- a/.tmp-sfia-review/a2-tech-sel/103-before.md
+++ b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
@@ -3,11 +3,10 @@
 ## 1. Statut

 **LOT-IP-0A DECISIONS APPLIED —**
-**LOT-IP-0B DECISION PACK ARBITRATED —**
-**DATA-ACCESS DA-A APPLIED —**
-**MIGRATION MIG-C APPLIED —**
-**PLATFORM P1 APPLIED —**
-**P2 CO-COMPATIBLE BUT NOT SELECTED —**
+**LOT-IP-0B DECISIONS APPLIED —**
+**PERSISTENCE A2 TECHNOLOGY SELECTION PREPARATION EXECUTED —**
+**TECHNOLOGY DECISION PACK READY —**
+**FIVE TECHNOLOGY DECISIONS NOT DECIDED —**
 **LOT-IP-0C DEFERRED —**
 **LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
 **NO ITEM DONE —**
@@ -204,6 +203,54 @@ Items DONE : **aucun**. TB-00-04 / TB-00-05 : **pas** DONE.

 ---

+## 1octies. GO Morris — Persistence A2 Technology Selection Preparation
+
+Formulation utilisateur exacte consommée :
+
+```text
+ok go pour cette recommandation
+```
+
+Interprétation canonique bornée :
+
+```text
+GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — PREPARE PERSISTENCE A2 TECHNOLOGY SELECTION
+```
+
+| Champ | Valeur |
+|---|---|
+| **Autorité** | Morris |
+| **Consommation** | 2026-08-05 17:32 CEST (+0200) / 15:32 UTC |
+| **Cycle** | Implementation Preparation — Persistence A2 Technology Selection Preparation |
+| **Profil** | **Critical** |
+| **Portée** | Préparer Decision Pack technologique (moteur · store managé · driver · outil migration · local-dev/test) sans adopter aucune techno · différer fournisseur compute P1 · ne pas sélectionner LOT-D1 |
+| **Effet** | Analyse 112 · Decision Pack 113 · cinq décisions D-ASST-A2-* **NOT DECIDED** · Delivery **NOT-CONSUMED** |
+| **Non-effet** | Pas d’adoption techno · pas de SQL/DDL/migration · pas de package · pas de compte/service · pas de LOT-D1 · pas de code |
+| **Analyse** | `projects/sfia-studio/112-assistant-sfia-native-openai-persistence-a2-technology-selection-preparation.md` |
+| **Decision Pack** | `projects/sfia-studio/113-assistant-sfia-native-openai-persistence-a2-technology-selection-decision-pack.md` |
+
+### Chaîne documentaire Persistence A2 Technology Selection
+
+| Document | Rôle |
+|---|---|
+| **111** | décisions architecturales LOT-IP-0B appliquées |
+| **112** | analyse et préparation technologique |
+| **113** | Decision Pack technologique pré-arbitrage |
+
+### Décisions technologiques candidates (pré-arbitrage)
+
+| ID | Statut |
+|---|---|
+| D-ASST-A2-SQL-ENGINE-01 | **NOT DECIDED** |
+| D-ASST-A2-MANAGED-STORE-01 | **NOT DECIDED** |
+| D-ASST-A2-DATA-DRIVER-01 | **NOT DECIDED** |
+| D-ASST-A2-MIGRATION-TOOL-01 | **NOT DECIDED** |
+| D-ASST-A2-LOCAL-DEV-TEST-01 | **NOT DECIDED** |
+
+Items DONE : **aucun**. TB-00-04 / TB-00-05 / TB-01-* : **pas** DONE.
+
+---
+
 ## 2. GO Morris

 ```text
@@ -1509,16 +1556,25 @@ Motif : le lot historique regroupait TB-00-01…06 + TB-04-04 alors que TB-00-04

 ### LOT-D1 à LOT-D5

-**NOT AUTHORIZED** — inchangés (persist foundation · Assistant N1 · N2/N3 Authority · lifecycle · pilot hardening).
+**NOT AUTHORIZED — NOT SELECTED — FUTURE MORRIS DECISION REQUIRED**
+
+LOT-D1 (persist foundation) reste **NOT AUTHORIZED**. Blocages actuels :
+- cinq décisions technologiques D-ASST-A2-* **non arbitrées** ;
+- stratégie de tests non autorisée ;
+- fichiers Delivery non bornés ;
+- GO Delivery absent ;
+- réserves et preuves opérationnelles non traitées.

-Aucun lot Delivery sélectionné. LOT-IP-0A décisions **appliquées** · LOT-IP-0B décisions **appliquées** (DA-A / MIG-C / P1) · P2 co-compatible **non** sélectionné · produits/fournisseurs toujours NOT SELECTED · LOT-D1…D5 **NOT AUTHORIZED**.
+LOT-D2 à LOT-D5 restent **NOT AUTHORIZED**.
+
+Aucun lot Delivery sélectionné. LOT-IP-0A / LOT-IP-0B décisions **appliquées** · préparation techno A2 **exécutée** / pack **ready** / décisions techno **NOT DECIDED** · produits/fournisseurs **NOT SELECTED**.


 ---

 ## 23. Chemin critique

-**LOT-IP-0A** décisions appliquées → **LOT-IP-0B** décisions appliquées (DA-A / MIG-C / P1 ; P2 co-compatible non sélectionné) → futures **gates technologiques** et/ou **sélection de lot** explicitement décidées par Morris → **LOT-D1 uniquement** après sélection et GO distinct → Persistence A2 (TB-01-*) dont TB-01-05 → Provider (TB-02-*) → AuthorityGate (TB-03-02) → TB-02-05 metering → **LOT-IP-0C** (TB-04-04) → Purge/Health/QA pilote (TB-06-04).
+**LOT-IP-0A** décisions appliquées → **LOT-IP-0B** décisions appliquées → **préparation technologique persistance A2** (112/113) → **arbitrage Morris** des cinq décisions D-ASST-A2-* → application des décisions → **sélection éventuelle** de LOT-D1 par Morris → GO Delivery distinct → implémentation fondation persistance (TB-01-*) → Provider → AuthorityGate → metering → **LOT-IP-0C** → QA pilote.

 LOT-D1 **n’est pas** éligible, sélectionné ni autorisé sans décision Morris distincte.

@@ -1566,11 +1622,20 @@ TB-00-* (décisions) · TB-01-06 backup/restore · TB-04-02/04 · TB-05-02 · TB
 - contraintes health, jobs, secrets et observabilité traitées ;
 - réserves bloquantes traitées.

+### Vers arbitrage techno Persistence A2 (prochaine)
+
+- validation ChatGPT des documents 112/113 ;
+- GO `ARBITRATE PERSISTENCE A2 TECHNOLOGY SELECTION DECISION PACK` ;
+- cinq décisions encore **NOT DECIDED** jusqu’au GO ;
+- Delivery reste NOT-CONSUMED.
+
 ### Vers LOT-D1 (futur, non autorisé, non éligible auto)

-- décisions LOT-IP-0B appliquées (**fait** au niveau patterns) ;
-- technologies concrètes sélectionnées par gates dédiées si nécessaires ;
-- lot Delivery / LOT-D1 **explicitement** sélectionné par Morris ;
+- décisions LOT-IP-0B appliquées (**fait**) ;
+- cinq décisions D-ASST-A2-* arbitrées et appliquées ;
+- technologies concrètes compatibles DA-A / MIG-C / P1 ;
+- stratégie tests autorisée ;
+- lot LOT-D1 **explicitement** sélectionné par Morris ;
 - GO Delivery distinct ;
 - fichiers bornés ;
 - réserves bloquantes traitées.
@@ -1583,48 +1648,46 @@ LOT-D1 reste **NOT AUTHORIZED** jusqu’à ces conditions.

 ## 27. Risques et incertitudes

-Auth absente en code (AUTH=A = direction seulement) · store **classe** décidée / **produit** non choisi · data-access **DA-A** / migration **MIG-C** / platform **P1** décidés (patterns) · P2 non sélectionné · AJV extension décidée / schémas N2/N3 non implémentés · réserves UX · FinOps hard / TTL ouverts · memory/fixture **≠** A2 durable / OpenAI live / multi-instance · risque de duplication de ports si réconciliation ignorée.
+Auth absente en code · store classe décidée / produit non choisi · patterns DA-A/MIG-C/P1 décidés · cinq décisions techno **NOT DECIDED** (pack 113) · P2 non sélectionné · AJV extension décidée / schémas N2/N3 non implémentés · réserves UX · FinOps hard / TTL ouverts · memory/fixture **≠** A2 durable · risque de sélection implicite via shortlist.

 ---

 ## 28. Non-sélections

-**Classe SQL relationnelle managée = DECIDED** (STORE-01=A). **Patterns** DA-A / MIG-C / P1 = **DECIDED**. P2 = **CO-COMPATIBLE — NOT SELECTED**. Restent **NOT SELECTED** : produit de store · fournisseur · moteur SQL · ORM · query builder concret · bibliothèque data-access · outil de migration · cloud · hébergeur · région · nombre d’instances · scheduler · job service · secret manager · observability vendor · schéma physique · SQL/DDL · IaC · modèle/endpoint OpenAI · TTL · hard cap · tarifs · SLA · SLO — **FUTURE DEDICATED DECISION OR IMPLEMENTATION-PREPARATION GATE REQUIRED**.
+**Classe SQL relationnelle managée = DECIDED** (STORE-01=A). **Patterns** DA-A / MIG-C / P1 = **DECIDED**. P2 = **CO-COMPATIBLE — NOT SELECTED**. Cinq décisions techno D-ASST-A2-* = **NOT DECIDED**. Restent **NOT SELECTED** : moteur SQL · produit store · fournisseur store · driver · bibliothèque data-access · ORM · query builder · outil de migration · format de migration · cloud compute · hébergeur compute · région · nombre d’instances · scheduler · jobs service · secret manager · observability vendor · schéma physique · SQL/DDL · IaC · modèle/endpoint OpenAI · TTL · hard cap · tarifs validés · SLA validé · SLO — **FUTURE DEDICATED DECISION OR ARBITRATION GATE REQUIRED**.

 ---

 ## 29. Actions autorisées

-Tracer l’arbitrage dans 103/111 · maintenir 109/110 historiques byte-identical · proposer une future gate bornée si explicitement supportée par le backlog · publier le handoff · maintenir 104–108 historiques.
+Maintenir 112/113 · tracer la préparation techno dans 103 · maintenir 104–111 historiques byte-identical · préparer futur arbitrage des cinq décisions · publier le handoff.

 ---

 ## 30. Actions interdites

-Modifier 109/110 · sélectionner P2 · sélectionner une technologie concrète · créer code, SQL, DDL, migration ou IaC · créer document 112 · exécuter LOT-IP-0C · sélectionner ou exécuter LOT-D1 à LOT-D5 · fermer une réserve · marquer un item DONE · Delivery · commit/push projet · PR/merge.
+Adopter une option 113 · créer 114 · sélectionner une technologie concrète · sélectionner P2 · créer code, SQL, DDL, migration, package ou IaC · créer un compte/service · exécuter LOT-IP-0C · sélectionner ou exécuter LOT-D1 à LOT-D5 · fermer une réserve · marquer un item DONE · Delivery · commit/push projet · PR/merge.

 ---

 ## 31. Anti-claims

-LOT-IP-0B décisions appliquées ≠ implémentation · DA-A ≠ SQL/moteur · MIG-C ≠ migrations créées · P1 ≠ cloud · P2 ≠ sélectionné · TB-00-04/05 ≠ DONE · STORE=A ≠ produit SQL · AUTH/AJV/SECRETS ≠ implémentés · LOT-IP-0C DEFERRED · LOT-D* NOT AUTHORIZED · memory ≠ A2 durable · aucun item DONE · Delivery NOT-CONSUMED · réserves ouvertes.
+Préparation techno ≠ sélection · Decision Pack ready ≠ DECIDED · DA-A/MIG-C/P1 ≠ produits choisis · P2 ≠ sélectionné · TB-00-04/05/TB-01-* ≠ DONE · LOT-IP-0C DEFERRED · LOT-D* NOT AUTHORIZED · memory ≠ A2 durable · aucun item DONE · Delivery NOT-CONSUMED · réserves ouvertes.

 ---

 ## 32. Verdict

-**LOT-IP-0A DECISIONS APPLIED —**
-**LOT-IP-0B DECISION PACK ARBITRATED —**
-**DATA-ACCESS DA-A APPLIED — MIGRATION MIG-C APPLIED — PLATFORM P1 APPLIED —**
-**P2 CO-COMPATIBLE BUT NOT SELECTED —**
-**DOCUMENT 103 UPDATED — DOCUMENT 111 CREATED —**
-**DOCUMENTS 104 TO 110 BYTE-IDENTICAL — DOCUMENT 112 ABSENT —**
-**NO PRODUCT, PROVIDER, ENGINE, ORM, QUERY BUILDER OR MIGRATION TOOL SELECTED —**
-**GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED —**
-**NO ITEM DONE — TB-00-04 AND TB-00-05 NOT DONE —**
+**LOT-IP-0A DECISIONS APPLIED — LOT-IP-0B DECISIONS APPLIED —**
+**PERSISTENCE A2 TECHNOLOGY SELECTION PREPARATION EXECUTED —**
+**TECHNOLOGY DECISION PACK READY — FIVE TECHNOLOGY DECISIONS NOT DECIDED —**
+**DOCUMENT 103 UPDATED — DOCUMENTS 112 AND 113 CREATED —**
+**DOCUMENTS 104 TO 111 BYTE-IDENTICAL — DOCUMENT 114 ABSENT —**
+**NO TECHNOLOGY SELECTED —**
+**GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
 **LOT-IP-0C DEFERRED — LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
 **DELIVERY NOT-CONSUMED —**
-**READY FOR CHATGPT VALIDATION AND MORRIS NEXT-STEP SELECTION DECISION**
+**READY FOR CHATGPT VALIDATION AND MORRIS PERSISTENCE A2 TECHNOLOGY ARBITRATION**


 ---
@@ -1632,12 +1695,11 @@ LOT-IP-0B décisions appliquées ≠ implémentation · DA-A ≠ SQL/moteur · M
 ## 33. Prochaine gate candidate

 ```text
-MORRIS NEXT-STEP SELECTION REQUIRED —
-NO NEXT LOT AUTO-SELECTED —
-LOT-D1 TO LOT-D5 NOT AUTHORIZED —
-DELIVERY NOT-CONSUMED
+GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE PERSISTENCE A2 TECHNOLOGY SELECTION DECISION PACK
 ```

-Statut : **absence justifiée de gate déterminable** — aucune gate Delivery ou LOT-D1 exacte n’est auto-sélectionnable depuis le backlog après arbitrage ; LOT-IP-0C reste DEFERRED ; les gates technologiques produit restent futures et non pré-formulées comme GO exact.
+Statut : **candidate uniquement — non consommée**.
+
+Cette gate autorisera uniquement l’arbitrage explicite des cinq décisions du document 113. Elle **n’autorise ni LOT-D1 ni Delivery**.

-**LOT-IP-0B DECISIONS APPLIED — MORRIS NEXT-STEP SELECTION REQUIRED — DELIVERY NOT CONSUMED**
+**PERSISTENCE A2 TECHNOLOGY DECISION PACK READY — MORRIS ARBITRATION REQUIRED — DELIVERY NOT CONSUMED**

```

---

## Local Git Truth finale projet

```text
=== LOCAL GIT TRUTH FINALE PROJET (avant publication handoff) ===
2026-08-05 18:00:37 CEST +0200
2026-08-05 16:00:37 UTC
TOPLEVEL=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1
BRANCH=implementation-preparation/sfia-studio-assistant-sfia-native-openai-persistence-a2-technology-selection
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
UPSTREAM=none
ORIGIN_MAIN=8dc54db0069eed78a8d8930cc2b035450ab56ad1
MERGE_BASE=8dc54db0069eed78a8d8930cc2b035450ab56ad1
LEFT_RIGHT=0	0
AHEAD=0
BEHIND=0
?? .tmp-sfia-review/
?? projects/sfia-studio/100-assistant-sfia-native-openai-technical-architecture.md
?? projects/sfia-studio/101-assistant-sfia-native-openai-technical-architecture-decision-pack.md
?? projects/sfia-studio/102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/104-assistant-sfia-native-openai-technical-implementation-backlog-decisions-applied.md
?? projects/sfia-studio/105-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a.md
?? projects/sfia-studio/106-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decision-pack.md
?? projects/sfia-studio/107-assistant-sfia-native-openai-implementation-preparation-lot-ip-0a-decisions-applied.md
?? projects/sfia-studio/108-assistant-sfia-native-openai-lot-ip-0b-selection-decisions-applied.md
?? projects/sfia-studio/109-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b.md
?? projects/sfia-studio/110-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decision-pack.md
?? projects/sfia-studio/111-assistant-sfia-native-openai-implementation-preparation-lot-ip-0b-decisions-applied.md
?? projects/sfia-studio/112-assistant-sfia-native-openai-persistence-a2-technology-selection-preparation.md
?? projects/sfia-studio/113-assistant-sfia-native-openai-persistence-a2-technology-selection-decision-pack.md
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
?? projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
?? projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
?? projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md
?? projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md
?? projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md
?? projects/sfia-studio/97-assistant-sfia-native-openai-ux-ui-decisions-applied.md
?? projects/sfia-studio/98-assistant-sfia-native-openai-technical-prerequisites-decision-pack.md
?? projects/sfia-studio/99-assistant-sfia-native-openai-technical-prerequisites-decisions-applied.md
?? projects/sfia-studio/app/.tmp-sfia-review/
HEAD_MSG=Merge pull request #311 from mcleland147/capitalization/sfia-studio-v3-1-d2-d3-rex
```

## Prochaine gate candidate

```text
GO DECISIONS IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — ARBITRATE PERSISTENCE A2 TECHNOLOGY SELECTION DECISION PACK
```

Statut : candidate uniquement — non consommée.

## Review pack content coverage

| Champ | Valeur |
|---|---|
| document 112 complet | yes |
| document 113 complet | yes |
| sections modifiées 103 | yes |
| diff utile 103 | yes |
| registre sources | yes (dans 112) |
| Local Git Truth initiale | yes |
| Local Git Truth finale | yes |
| synthesis only | no |
| placeholder actif | no |
| review pack verdict | complete |

## Verdict Review Pack

**PERSISTENCE A2 TECHNOLOGY SELECTION PREPARATION EXECUTED —**
**FIVE TECHNOLOGY DECISIONS NOT DECIDED — RECOMMENDATIONS CANDIDATE —**
**NO TECHNOLOGY SELECTED — LOT-D1 NOT AUTHORIZED — DELIVERY NOT-CONSUMED —**
**READY FOR HANDOFF PUBLICATION AND CHATGPT VALIDATION**
