# SFIA Review Pack FULL — R5 / ML4D — Cycle 11 Mise à disposition RECETTE Sas Nora

**Date:** 2026-11-16
**Intégrateur:** Cursor
**Décideur:** Morris
**Profil:** CRITICAL
**Typologie:** EVOL
**Review Pack:** FULL — mono-cycle
**Review Handoff:** required / publish-in-cycle / push L3 borné
**Verdict proposé:** `RECETTE DEPLOYED WITH RESERVES — MORRIS USER REVIEW PENDING`

---

## 0. GO Morris — portée exacte

GO groupé Morris 16 novembre 2026 — autorise uniquement :

1. Régularisation documentaire D2 — **déjà faite par ChatGPT** (`docs/next-ml4d-sas-nora-uniqueness-d2-20261116@52012abe`) — **ne pas reproduire / ne pas merger**.
2. Sauvegarde RECETTE + preuve de restauration sur copie jetable.
3. Application **ciblée** migration `013_preparation_projection.sql` seule.
4. Bascule contrôlée RECETTE vers candidat Sas Nora SHA exact `cd091385…`.

**Hors GO :** PR, merge, STABLE, release officielle, Gate C, ML5, ADOPTED, DROP COLUMN, `db-migrate.sh` complet, push branche produit Sas, campagne cognitive Nora LIVE autonome, prononcé de recette utilisateur.

**Objectif unique :** mettre à disposition en RECETTE le Sas Nora du commit exact, sans dégrader données / préparations historiques / UX-003/UX-004, pour que Morris réalise lui-même revue visuelle, preuves UI, essais Nora LIVE et recette création/continuité.

---

## 1. Git Truth Check

### 1.1 Repo / origin

| Champ | Valeur |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` |
| Origin | `https://github.com/mcleland147/sfia-workspace.git` |
| Projet | `projects/sfia-studio-next/` |
| Worktree produit (pilotage) | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche produit | `feat/next-ml4d-sas-nora-convergence-20261116` |

### 1.2 Identité candidat autorisée (servie)

| Champ | Attendu | Observé | Statut |
| --- | --- | --- | --- |
| Candidate SHA | `cd091385de10262918cf79bf8c86ad1d725cb9d1` | worktree RECETTE detached @ `cd091385` ; process `SFIA_SOURCE_SHA=cd091385…` | PASS |
| Tree web | `6f089bda818fa60e061f458fad928f3478e648b4` | `git rev-parse cd091385:projects/sfia-studio-next/web` = identique | PASS |
| Main distante | `997d4c4e8204993de7107552898c8cc08cd3b0ed` | `origin/main` = identique | PASS |
| Build DEV antérieur | `T03qorYZpGs0odz56Nb9f` | **non réutilisé** | PASS |
| Nouveau build RECETTE | (à relever) | `E3J7wVO4MsKgl5aCTDhed` (HTML `<!--E3J7wVO4MsKgl5aCTDhed-->`) | PASS |

### 1.3 D2 documentaire (hors merge)

| Champ | Valeur |
| --- | --- |
| Branche | `docs/next-ml4d-sas-nora-uniqueness-d2-20261116` |
| HEAD publié | `52012abe17351025ca989b6c77c9d11a7b284a8a` |
| Contenu | VALIDÉ par Morris / PUBLIÉ sur branche / **pas sur main** |
| Fichiers | `creation-de-projet-et-continuite-du-sas.md`, `cadrage-r4.md` |
| Action Cursor | **aucune fusion** |

### 1.4 Handoff qualification précédent

| Champ | Valeur |
| --- | --- |
| Tip | `9d522725f2ce34f6cbb7d422b37a84d1f6fce58a` |
| Blob | `8be09125e940397425fb6e5a17c3cf805760476c` |

### 1.5 État Git produit (fin de cycle technique, avant handoff)

| Champ | Valeur |
| --- | --- |
| HEAD local produit | `16f45a917ca10f150d42ff4f23965d1927259e8e` (commit **docs only** `delivery-history` cutover — **non poussé**) |
| Ascendance | `cd091385` ⊆ ancestors de HEAD local |
| Code fonctionnel candidat | **inchangé** depuis `cd091385` |
| Push produit | **AUCUN** |
| Status | clean hors `.tmp-sfia-review/chatgpt-review.md` (pack local) |
| Worktree RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-cd091385` @ detached `cd091385` |
| Worktree rollback UX-004 | `.../sfia-workspace-next-ml4d-ux004-recette-build-b05dacf47983` @ `b05dacf4` **conservé** |

**Aucun reset/clean/rebase destructeur.**

---

## 2. Sources obligatoires (refs)

| Source | Ref / note |
| --- | --- |
| PROCESSUS SFIA v2.6 | method/sfia-fast-track (cycle routing + execution template) |
| SEF / roadmap / ENV-01 / product-versioning / naming | `projects/sfia-studio-next/governance/*` on applicable baseline |
| ENV-01 blob | `14b61f0d1265cf85fcca09b028dd09bd8c71597f` — VALIDATED / ON MAIN |
| Product versioning blob | `8bc93e0fafac0f981c446e978a37f5f93d183875` — VALIDATED / ON MAIN |
| Décisions R4/R5 | `2026-11-04-r4-architecture-exit`, `2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire` |
| Contrats Sas candidats | `docs/next-ml4d-sas-nora-convergence-20261116@22ee5540…` |
| Amendement R2/R4 unicité | branche D2 `52012abe…` (lecture amendement, **sans substitution baseline main**) |
| Doctrine | `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md` |
| CKC | applicabilité vérifiée ; fallback SFIA v2.6 si absent — pack suit v2.6 Review Pack / Handoff |
| Qualification handoff | `9d522725` / blob `8be09125` |

---

## 3. ENV-01 — état de départ recontrôlé

### 3.1 Classe / release

| Champ | Valeur |
| --- | --- |
| Classe candidate | MINOR (sous réserve compatibilité) |
| Produit | **NO RELEASE** |
| Package | `0.0.0-dev` (vérifié sur `cd091385` `package.json`) |
| STABLE | **NOT AVAILABLE** |

### 3.2 RECETTE pré-intervention (recontrôlée)

| Champ | Rapporté | Observé pré-013 |
| --- | --- | --- |
| SHA servi | `b05dacf4…` | artefact UX-004 conservé |
| Tree | `467a4621…` | (rollback artefact) |
| Build | `20blGylSEta7201PgVvlw` | conservé |
| URL | `http://127.0.0.1:3200` | inchangée après bascule |
| Conteneur PG | `sfia-next-recette-pg` | `127.0.0.1:5434→5432` |
| Base / rôle | `sfia_next_recette_ml4` | confirmés |
| `projection_json` | ABSENTE | **confirmée absente** (`has_projection_json: false`) |
| Préparations | 178 | **178** (OPEN 161 / ATTACHED 17) |
| Projets | 17 | **17** |
| Links / conversations | — | links 17 / conversations 178 |

### 3.3 Isolation

| Lane | Host/port | PG |
| --- | --- | --- |
| DEV | `127.0.0.1:3102` | `sfia-next-dev-pg` / host `5433` / user `sfia_next_dev` |
| RECETTE | `127.0.0.1:3200` | `sfia-next-recette-pg` / host `5434` / `sfia_next_recette_ml4` |
| STABLE | N/A | N/A |

Secrets RECETTE : `~/.config/sfia-studio-next/recette/.env.local` (non exposés).
DSN RECETTE asserté port **5434** avant migration.
Aucune contamination DEV→RECETTE silencieuse.

---

## 4. Préparation build RECETTE

| Étape | Résultat |
| --- | --- |
| Commit présent | PASS — worktree detached `cd091385` |
| Tree web | PASS — `6f089bda…` |
| Worktree indépendant | PASS — `.../sas-nora-recette-build-cd091385` |
| Build depuis SHA seul | PASS — `next build` production |
| Hot reload DEV | non utilisé |
| Build ID | **`E3J7wVO4MsKgl5aCTDhed`** (≠ DEV `T03qorYZpGs0odz56Nb9f`) |
| TypeScript / lint / build | PASS (rebuild après correctif deps : `npm ci` sans `NODE_ENV=production` pour tooling) |
| Config RECETTE | PASS — secrets lane RECETTE ; `FORCE_FIXTURE` / `STUDIO_FORCE_NORA_FIXTURE` unset |
| Artefact UX-004 | **intact** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
| Code fonctionnel | **aucune modification** dans ce mandat |

Script de démarrage : `start-recette-sas-nora-cd091385.sh`
Manifeste local non secret : `recette-manifest-sas-nora-cd091385.yaml`

---

## 5. Gate sécurité — backup + restauration copie

### 5.1 Identification positive RECETTE

- Conteneur `sfia-next-recette-pg`
- Port hôte **5434**
- Base / rôle `sfia_next_recette_ml4`
- DSN lane RECETTE (port assert 5434) — secret non publié
- Pas de connexion croisée DEV (DEV = 5433)

### 5.2 Capture pré-mutation

Fichier : `/Users/morris/Projects/sfia-recette-backups/ml4d-sas-nora-20261116-pre-cd091385/precheck.json`

```json
{"db":"sfia_next_recette_ml4","role":"sfia_next_recette_ml4","has_projection_json":false,"preparations":178,"open":161,"attached":17,"projects":17,"links":17,"conversations":178}
```

### 5.3 Sauvegarde

| Champ | Valeur |
| --- | --- |
| Chemin (hors Git / hors worktree runtime) | `.../sfia-recette-backups/ml4d-sas-nora-20261116-pre-cd091385/sfia_next_recette_ml4_pre013.dump` |
| Format | `pg_dump -Fc` |
| Taille | 499385 B |
| sha256 | `436225aafa023b11493f6aebdeaa479d3c2d3f8d1c92e15fc1e38366c8aaa874` |
| Permissions | restreintes (`600` dump/meta) |
| Meta | `DUMP_META.json` (sans secret) |

### 5.4 Restauration de COPIE (preuve réelle, rejouée)

| Champ | Valeur |
| --- | --- |
| Cible | DB jetable `sfia_next_restore_proof_cd091385` sur **`sfia-next-dev-pg`** (rôle `sfia_next_dev`) |
| Flags | `pg_restore --no-owner --no-acl` |
| `pg_restore` exit | 0 |
| Observé | prep 178 / open 161 / attached 17 / projects 17 / `projection_json` **absent** |
| Match precheck | **PASS** |
| RECETTE non écrasée | **YES** |
| Cleanup | DB jetable droppée ; leftover 0 |
| Preuve | `RESTORE_PROOF.txt` (même dossier backup) |

**Note :** le rôle RECETTE ne peut pas `CREATE DATABASE` — restauration prouvée sur DEV isolé, jamais sur RECETTE.

---

## 6. Migration 013 — application ciblée

### 6.1 SQL exact (`cd091385`)

Fichier : `web/src/db/migrations/013_preparation_projection.sql`
sha256 contenu : `2a6396b79a0034f90b7d6bb7da81be1bcd151f5a587b3f5b4afaf898157a6aae`

```sql
ALTER TABLE preparations
  ADD COLUMN IF NOT EXISTS projection_json jsonb;
```

+ COMMENT (nullable jsonb ; pas de backfill).

### 6.2 Interdictions respectées

- **Pas** de `db-migrate.sh` complet contre RECETTE
- **Pas** de rejeu 001→012
- **Pas** de modification des fichiers de migration
- **Pas** de schéma anticipé hors 013

### 6.3 Application

Exécution exclusive du SQL 013 sur `sfia_next_recette_ml4` (ON_ERROR_STOP), après gate §5.

### 6.4 Post-application (avant bascule runtime / avant smoke créateur)

| Contrôle | Résultat |
| --- | --- |
| Colonne présente | PASS |
| Type | `jsonb` |
| Nullable | YES |
| Backfill fictif | aucun — historiques NULL |
| Comptes post-mig immédiats | prep 178 / open 161 / attached 17 / projects 17 — **inchangés** |
| Erreur DB | aucune |

**Pas de DROP COLUMN.**

---

## 7. Bascule contrôlée RECETTE

### 7.1 Conditions d’entrée

SHA conforme · build propre · backup+restore PASS · 013 OK · isolation OK · UX-004 conservé → **GO bascule**.

### 7.2 Cible process / LaunchAgent

| Champ | Valeur |
| --- | --- |
| Label | `com.sfia.studio.next.recette.ml4d-ux004` |
| ProgramArguments | `.../sas-nora-recette-build-cd091385/start-recette-sas-nora-cd091385.sh` |
| WorkingDirectory | `.../sas-nora-recette-build-cd091385/projects/sfia-studio-next/web` |
| URL | `http://127.0.0.1:3200` (inchangée) |
| DB | RECETTE 5434 (inchangée) |
| Secrets | lane RECETTE (inchangés) |
| Backup plist UX-004 | `~/Library/LaunchAgents/com.sfia.studio.next.recette.ml4d-ux004.b05dacf4.plist.bak` |
| DEV / STABLE | **non modifiés** |

### 7.3 Process réellement servi (vérifié)

| Champ | Valeur |
| --- | --- |
| PID | 82011 (`next-server` v15.5.29) |
| cwd | worktree Sas Nora `.../cd091385/.../web` |
| HTML build comment | `<!--E3J7wVO4MsKgl5aCTDhed-->` |
| `SFIA_SOURCE_SHA` | `cd091385de10262918cf79bf8c86ad1d725cb9d1` |
| Port listen | `127.0.0.1:3200` |

---

## 8. Smoke après bascule (S01–S18)

Méthode : API contrôlée `/api/dev/login` `{pilot:a|b}` + lectures/écritures test autorisées.
Créations : **uniquement** identités de test ; **pas** de purge destructive.

| ID | Contrôle | Résultat |
| --- | --- | --- |
| S01 | Port :3200 / santé | PASS — listen + `/login` 200 ; `/` 307 |
| S02 | SHA/tree/build servis | PASS — cwd + `SFIA_SOURCE_SHA` + HTML `E3J7wVO4MsKgl5aCTDhed` + tree `6f089bda` |
| S03 | `projection_json` | PASS — jsonb nullable |
| S04 | Session / auth | PASS — login A `ok:true` |
| S05 | Portefeuille | PASS — `/api/portfolio` 200 |
| S06 | Préparation existante | PASS — accessibles |
| S07 | Projection legacy NULL | PASS — supportée (majorité NULL) |
| S08 | Anciens projets | PASS — 17 historiques conservés ; +2 créations test smoke uniquement |
| S09 | Rail personnel Sas | PASS — présence UI/route Sas |
| S10 | Conversation Nora non déclenchée sur GET | PASS — pas de tour artificiel |
| S11 | Aucun projet sur simple navigation | PASS |
| S12 | Création explicite | PASS — create 201 (préconditions D2) |
| S13 | Route projet / continuité | PASS |
| S14 | Pas de cycle/CKI/Git induit | PASS |
| S15 | Permissions inter-Pilotes | PASS — cross-pilot create distinct ; isolation respectée |
| S16 | Unicité same-pilot | PASS — CONFLICT 409 |
| S17 | UX-003/UX-004 non régressées (mécanismes) | PASS technique (UI visuelle = Morris) |
| S18 | Logs sans erreur critique non traitée | PASS au smoke |

**Synthèse smoke technique :** `ALL_SMOKE_CORE_PASS`
**Retests :** login body corrigé (`pilot` non `which`) ; champ create `preparationId` (non `id`).

### 8.1 Données après smoke (écriture test)

| Métrique | Pré-013 | Post-mig | Post-smoke |
| --- | --- | --- | --- |
| preparations | 178 | 178 | **182** |
| open | 161 | 161 | 163 |
| attached | 17 | 17 | 19 |
| projects | 17 | 17 | **19** |
| projection_json non-null | n/a | 0 | **3** (écritures PATCH/create test) |

Les +2 projets / +4 préparations / 3 projections non-null sont des **effets de smoke test autorisés**, pas une perte historique.

---

## 9. Fake / Real / Nora LIVE

| Frontière | Qualification |
| --- | --- |
| Fake/Real | APPLICABLE |
| PostgreSQL | RECETTE **REAL** |
| Navigateur | runtime RECETTE réel ; smoke contrôlé |
| Nora | OpenAI/provider **référencé** lane RECETTE (`OPENAI_API_KEY` set ; longueur seule relevée) |
| `STUDIO_FORCE_NORA_FIXTURE` | **unset** |
| Niveau | **NORA LIVE NOT PROVEN** |
| Campagne cognitive Cursor | **non conduite** (hors mandat) |
| Affirmation qualité cognitive | **aucune** sur seul build/smoke |

**Nora LIVE :** `PENDING USER RECETTE` jusqu’aux essais Morris.

E2E FAKE cycles antérieurs = preuves déterministes ≠ preuve LIVE.

---

## 10. Rollback / reprise

### 10.1 Artefacts conservés

| Élément | Valeur |
| --- | --- |
| Ancien SHA | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Ancien build | `20blGylSEta7201PgVvlw` |
| Worktree | `.../ml4d-ux004-recette-build-b05dacf47983` |
| Plist backup | `com.sfia.studio.next.recette.ml4d-ux004.b05dacf4.plist.bak` |
| Procédure | `RESTORE-PREVIOUS-UX004-RECETTE.txt` |

### 10.2 Politique

- Scénario privilégié : **retour code UX-004** en **conservant** `projection_json`.
- **Ne pas** `DROP COLUMN projection_json` par défaut.
- Rollback code ≠ rollback DB ; créations post-bascule restent.
- Restauration destructive dump sur RECETTE = **nouveau GO Morris** requis.

**Rollback non exécuté** (smoke PASS).

---

## 11. Manifeste RECETTE (non secret)

Voir aussi `recette-manifest-sas-nora-cd091385.yaml` dans le worktree servi.

| Champ | Valeur |
| --- | --- |
| lane | RECETTE |
| repository | `mcleland147/sfia-workspace` |
| branche source | `feat/next-ml4d-sas-nora-convergence-20261116` |
| base_main_sha | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| candidate_sha | `cd091385de10262918cf79bf8c86ad1d725cb9d1` |
| tree_web | `6f089bda818fa60e061f458fad928f3478e648b4` |
| build_identifier **servi** | **`E3J7wVO4MsKgl5aCTDhed`** |
| version produit | NOT AVAILABLE / **NO RELEASE** |
| package | `0.0.0-dev` |
| schéma | 013 appliquée (`projection_json` jsonb nullable) |
| date mise à disposition | 2026-11-16 |
| URL | `http://127.0.0.1:3200` |
| backup sha256 | `436225aa…c8aaa874` |
| restore | PASS (copie jetable) |
| rollback | UX-004 `b05dacf4` / `20blGylSEta7201PgVvlw` |
| futur gate Morris | revue UI + Nora LIVE + continuité/création |

Traces livraison : entrée `DELIV-2026-11-16-ML4D-SAS-NORA-RECETTE-CUTOVER` dans `construction/delivery-history.md` (commit local docs `16f45a91`, **non poussé**).
**Aucune version STABLE inventée.**

---

## 12. Vérification règles PF-CRE-14 / A12 (doc D2)

Amendement D2 `52012abe` lu : unicité same-pilot → CONFLICT ; cross-pilot autorisé.
Smoke S15/S16 alignés.
**Branche D2 non mergée** — dette documentaire main ouverte.

---

## 13. Dette / exit / gates restants

| Item | État |
| --- | --- |
| Gate C | **OPEN** |
| ML5 | **NON AUTORISÉ** |
| STABLE / ADOPTED / release | **non** |
| D2 docs sur main | **non** (branche `52012abe` seulement) |
| DATA-01 backups opérationnels produit | **NOT PROVEN** comme mécanisme produit (backup manuel cycle OK) |
| Nora LIVE | **PENDING USER RECETTE** |
| Revue visuelle / preuves UI Morris | **PENDING** |
| Push candidat Sas | **non** |
| PR / merge | **non** |

---

## 14. Git Truth Check final (pré-handoff)

| Contrôle | Résultat |
| --- | --- |
| RECETTE sert `cd091385` / tree `6f089bda` / build `E3J7wVO4MsKgl5aCTDhed` | PASS |
| Produit local HEAD | `16f45a91` (docs delivery only) ; candidat code = `cd091385` |
| Push produit | aucun |
| Isolation ports 3102/3200 & 5433/5434 | PASS |
| UX-004 rollback dispo | PASS |
| Pack local | ce fichier |

---

## 15. Verdict

**`RECETTE DEPLOYED WITH RESERVES — MORRIS USER REVIEW PENDING`**

Réserves non bloquantes pour la mise à disposition technique :

1. Nora LIVE non éprouvé (séances Morris).
2. Revue visuelle / preuves UI / recette création-continuité = Morris.
3. Docs D2 unicité validées sur branche, pas sur main.
4. Gate C / ML5 / STABLE / ADOPTED restent hors GO.

### Restitution finale (12 points)

1. **Candidat SHA :** `cd091385de10262918cf79bf8c86ad1d725cb9d1`
2. **Nouveau build RECETTE :** `E3J7wVO4MsKgl5aCTDhed`
3. **Schéma :** migration **013** — `preparations.projection_json` jsonb nullable
4. **Sauvegarde / restauration :** dump sha256 `436225aa…` ; restore copie DEV **PASS**
5. **Contrôles données :** pré 178/17 → post-mig inchangé → post-smoke 182/19 (créations test)
6. **URL :** `http://127.0.0.1:3200`
7. **Smoke :** S01–S18 core PASS
8. **RECETTE réellement servie :** PID 82011 / cwd Sas Nora worktree / HTML build comment
9. **Ancien candidat rollback :** `b05dacf4` / `20blGylSEta7201PgVvlw` + plist `.bak`
10. **Handoff tip/blob :** *à compléter après publish L3*
11. **Réserves :** Nora LIVE + UI Morris + D2 not on main + Gate C open
12. **Gates restants :** Morris user review ; pas de merge/STABLE/ADOPTED/ML5

---

## 16. Handoff (section publisher)

Publisher : `scripts/sfia/publish-review-handoff.sh`
Branche : `sfia/review-handoff`
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
Mode : publish-in-cycle / push L3 borné / fast-forward only / no force push.

*(Les SHA tip/blob distants seront consignés dans le rapport Cursor après publication.)*
