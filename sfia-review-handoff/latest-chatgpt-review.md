# SFIA Review Pack FULL — ML4C Nora LIVE documentary qualification

## A. Date / heure

2026-11-15 ~04:40 CET (Europe/Paris)

## B. GO et profil SFIA

- GO Morris : QUALIFICATION NORA LIVE — PARCOURS DOCUMENTAIRE D3/D4
- Contrat : SFIA v2.6
- Cycle : 6 — Delivery / Qualification
- Profil : CRITICAL
- Produit : `projects/sfia-studio-next/` `0.0.0-dev`
- Release : NO RELEASE / STABLE NOT AVAILABLE
- Mandat : preuve comportementale LIVE uniquement — **aucune modification source**

## C. Git initial / final

| Champ | Valeur |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD initial = final | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` |
| tree | `587ea8899550e8ee86376a8de4bb5176b52eaff1` |
| parent | `6c50a1446734341b43a4f110aacde21c727fb2b1` |
| main distant | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| PR #676 | OPEN / HEAD `67bf6b0b` NOT MERGED |
| handoff précédent | `00d9eec6` blob `96e4f285` |
| status | clean hors `.tmp-sfia-review/chatgpt-review.md` |
| PRODUCT HEAD | **UNCHANGED** |
| FILES CREATED | **NONE** |
| FILES MODIFIED (produit) | **NONE** |

Git Truth : **PASS**.

## D. Sources lues et refs

- Conception corrective `c883db07` / blob `da397424` (D4/S05, PROPOSAL_SOURCE_CONFLICT)
- Runtime RO : `nora-adapter.ts`, `cognitive-policy.ts`, `service.ts`, `document-act.ts`, `semantic-qualification.ts`, `s05-pending-policy.ts`, `document/service.ts`, `session.ts`
- ENV-01 / versioning (refs main requis)
- Décisions R5 2026-11-11 / 2026-11-12
- Code exécuté = HEAD `a30d47d2`

## E. Préflight ENV-01

| Contrôle | Observé |
| --- | --- |
| DEV `:3100` | démarré pour ce cycle (`next dev` sans turbopack — turbopack panique symlink `node_modules`) |
| RECETTE `:3200` | LISTEN, **non mutée**, non utilisée pour les scénarios |
| E2E `:3101` | non utilisé (force fixture) |
| PG DEV | `sfia_next_dev` @ `127.0.0.1:5433` container `sfia-next-dev-pg` role `sfia_next_dev` |
| PG RECETTE | `sfia_next_recette_ml4` @ `:5434` container séparé |
| Sessions | Better Auth OAuth prioritaire ; isolation obtenue via `/api/auth/sign-out` puis `/api/dev/login` Pilote A |
| Identité utilisée | `Pilot A (DEV)` / `dev-test-login` / `pilot_10ad4dd9-…` |
| Contamin. RECETTE | évitée (pas de navigation `:3200` pendant les scénarios) |
| Candidat servi | worktree HEAD `a30d47d2` (cwd produit) |
| `node_modules` | symlink vers autre worktree (note opérationnelle ; pas de changement source) |

**ENV ROUTING COMPLETE** pour DEV LIVE.

## F. Configuration LIVE non secrète

Processus DEV démarré avec overrides **process-only** (`.env.local` non édité) :

- `STUDIO_LANE=DEV`
- `STUDIO_FORCE_NORA_FIXTURE=0` (écrase la valeur `1` du `.env.local` pour ce process)
- `STUDIO_E2E` unset
- `SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY`
- `OPENAI_API_KEY` : PRESENT (valeur non affichée)
- `NORA_STUDY_MODEL` (code) : `gpt-6.1-sol`

## G. Provider / model demandé et preuve de contact

Sur les 4 soumissions LIVE :

| Champ | Valeur |
| --- | --- |
| `noraMode` | `openai-agents-sdk-live` |
| `providerContacted` | `YES` (attempts stream SUCCESS) |
| `modelRequested` | `gpt-6.1-sol` |
| `modelApplied` | `UNVERIFIED` — **non revendiqué comme vérifié** |
| `effortApplied` | `UNVERIFIED` |
| streaming | attempted=true / delivered=true (LIVE-01 footer UI) |

Contact fournisseur : **PROUVÉ**. Modèle appliqué exact : **NON VÉRIFIÉ**.

## H. Profil et budget

- `profileType` : `TEST_BOUNDARY`
- `profile` : `analyse` (tours documentaires)
- Budget mandat : **4 soumissions USER max**
- Consommées : **4/4** (LIVE-01…04)
- Aucune relance automatique après LIVE-03

## I. Scénarios LIVE exécutés

### LIVE-01 — CREATE D4 sas sans projet — **PASS**

- Prep : `prep_5eb5ba8b-68d6-4d13-9553-8491d8de4c24` (projet non créé)
- USER : création document « Synthèse de cadrage DEV LIVE » + canari `CANARI-D4-LIVE-ALPHA-42` + « Ne crée pas de projet »
- Observé API : `COMPLETE` / LIVE / `QUALIFIED` / `INTENTION_EFFET` / `documentSave.AVAILABLE`
- IDs : `doc_634374ea-…` / `drev_525c7990-…` v1 / `op_10794fc1-…` / `gen_10804c70-…` / `att_63375c6b-…`
- DB : `project_id=NULL`, title exact, canari+Objectif+Périmètre présents, owner Pilote A
- UI Documents : canari visible ; « Créer le projet » reste non abouti
- Pas de D2 implicite

### LIVE-02 — CREATE D4 dans projet — **PASS**

- Projet existant DEV (acte Pilote historique E2E) : `proj_86481a64-…` / prep `prep_25257fcb-…`
- USER : « Options de solution DEV LIVE » + Option A/B + canari `SOURCE-CANARI-BETA-73`
- Observé : LIVE / `AVAILABLE` CREATE v1
- IDs : `doc_c78468e6-…` / `drev_1e0061da-…` / `op_c7fd5ae6-…` / `gen_6d808064-…`
- DB : `project_id` = projet courant ; canari Option A littéral ; Option B « À préciser. »

### LIVE-03 — REVISE D4 — **FAIL (pré-effet)**

- USER : réviser Option B de `doc_c78468e6-…` + canari `REVISION-CANARI-GAMMA-91`
- Observé : LIVE contact YES / `QUALIFIED` / `documentSave.status=NOT_EXECUTED` / reason=`PROPOSAL_SOURCE_CONFLICT` / act=`REVISE` / `baseRevisionId=drev_1e0061da-…`
- IDs : `op_73c39114-…` / `gen_32a649f2-…`
- DB après : **toujours 1 révision** ; gamma absent ; beta conservé ; 1 seul document titre
- ACK UI : pré-effet NOT_EXECUTED fidèle (pas de faux AVAILABLE)
- **Pas de relance** (mandat)

### LIVE-04 — Négation / no-effect — **PASS**

- USER : expliquer préparation documentaire sans créer/modifier
- Observé : LIVE / `DIALOGUE_INDEPENDANT` / `documentSave=null`
- IDs : `op_8dacd3fb-…` / `gen_44764706-…`
- DB : counts documents/révisions inchangés ; 0 human_decisions projet

## J. Scénarios NOT RUN / BLOCKED

Aucun scénario omis. LIVE-03 échoué mais exécuté (pas BLOCKED).

## K. Qualification sémantique Nora

- LIVE-01/02/03/04 : `semanticQualificationStatus=QUALIFIED` (réponse API)
- Intents détaillés souvent absents du payload HTTP résumé (tableau intents vide côté capture) — l'effet D4 a néanmoins été appliqué pour CREATE ; pour REVISE la qualification n'a pas produit d'écriture admissible
- `nextTurnKind` : INTENTION_EFFET (01–03) / DIALOGUE_INDEPENDANT (04)

## L. Autorité USER / Studio / D4

- Effets D4 uniquement après acte USER
- LIVE-03 refuse avant mutation (`NOT_EXECUTED`, transaction non tentée)
- Pas de création projet implicite (LIVE-01)
- Pas de HumanDecision parasite (count 0)

## M. Résultats propriétaires

| Scénario | documentSave | DB |
| --- | --- | --- |
| LIVE-01 | AVAILABLE CREATE v1 | confirmé + canari |
| LIVE-02 | AVAILABLE CREATE v1 | confirmé + canari projet |
| LIVE-03 | NOT_EXECUTED PROPOSAL_SOURCE_CONFLICT | v1 intact |
| LIVE-04 | null | inchangé |

## N. Provenance du document

- Sas LIVE-01 : prep sans projet, owner Pilote A
- Projet LIVE-02/03/04 : prep liée `proj_86481a64-…`
- Aucune fabrication DB hors actes UI/API Studio

## O. Fence et fidélité

- LIVE-01/02 : contenu persisté contient titres/sections/canaris demandés (preuve DB)
- LIVE-02 assistant inclut fence `sfia-document` en réponse
- LIVE-03 : fence proposée pour Option B présente dans la réponse Nora, mais **refusée** à l'admission (`PROPOSAL_SOURCE_CONFLICT`) — fidélité d'écriture non atteinte
- `modelApplied=UNVERIFIED` : ne pas conclure sur le modèle exact

## P. Versions et récupération

- LIVE-02 : v1 unique
- LIVE-03 : pas de v2
- LIVE-01 : visible bibliothèque sas après CREATE
- Reprise après refresh : DB + lecture propriétaire confirmées ; UI Documents sas a montré le canari

## Q. Preuves navigateur

- Screenshots DEV (login, portfolio Pilote A, sas LIVE-01, résultat CREATE, projet LIVE-02/03)
- Footer statut : `Nora openai-agents-sdk-live · COMPLETE · policy analyse/TEST_BOUNDARY`

## R. Captures / IDs / logs expurgés

IDs synthétiques DEV listés ci-dessus. Aucun secret, aucune clé, aucune DATABASE_URL complète.

## S. Fake / Real Qualification

| Niveau | Statut |
| --- | --- |
| IMPLEMENTED | Oui (candidat local) |
| COVERAGE VERIFIED (déterministe antérieur) | Oui (hors ce cycle) |
| DETERMINISTIC BEHAVIOR PROVEN | Oui (cycles précédents) |
| LIVE BEHAVIOR | **PARTIAL** — CREATE sas+projet + négation PROUVÉS ; REVISE LIVE **ÉCHEC** |
| LIVE provider contact | PROUVÉ (`providerContacted=YES`) |
| modelApplied verified | **NON** (`UNVERIFIED`) |
| USER RECETTE | **NOT RUN** |
| NORA LIVE PROVEN (global documentaire) | **NON** (gap REVISE) |
| ML4C ACCEPTED / GATE C / STABLE / ADOPTED | **NON** |

## T. Matrice D-01..D-12

| Id | Résultat |
| --- | --- |
| D-01 Existence | PASS (LIVE-01/02) |
| D-02 Identité | PASS CREATE |
| D-03 Fidélité canaris CREATE | PASS |
| D-04 Fence | PARTIAL (présente ; REVISE non admis) |
| D-05 Version REVISE | **FAIL** (pas de v2 ; conflit source) |
| D-06 Sas sans projet | PASS |
| D-07 Visibilité | PASS CREATE |
| D-08 Vérité ACK | PASS (NOT_EXECUTED honnête sur LIVE-03) |
| D-09 Isolation Pilote | PASS (Pilote A) |
| D-10 Externe | PASS (pas GitHub/D7) |
| D-11 Reprise | PASS (DB + UI sas) |
| D-12 Consistance | PASS (pas de double CREATE après NOT_EXECUTED) |

## U. Anomalies

1. **LIVE-03 `PROPOSAL_SOURCE_CONFLICT`** sur REVISE ciblé Option B alors que CREATE vient de réussir — gap fonctionnel LIVE aligné avec la conception corrective (fence/source), **non corrigé** (hors mandat).
2. `.env.local` contient `STUDIO_FORCE_NORA_FIXTURE=1` ; LIVE a nécessité override process `=0`.
3. Turbopack `npm run dev` échoue (symlink `node_modules` hors root) ; démarrage webpack `next dev` OK.
4. Session GitHub OAuth du profil navigateur prime sur DEV login jusqu'à sign-out explicite.
5. `modelApplied=UNVERIFIED` sur tous les tours.

## V. Réserves

- LIVE CREATE prouvé ; LIVE REVISE **non** prouvé.
- Pas de RECETTE utilisateur.
- Pas de preuve d'entitlement modèle au-delà de `modelRequested`.
- Projet LIVE-02 = existant E2E Pilote A (pas créé dans ce cycle pour économiser le budget).

## W. Git Review Index

| Artefact | Ref |
| --- | --- |
| Produit HEAD | `a30d47d2` (inchangé) |
| Conception | `c883db07` |
| Handoff précédent | `00d9eec6` |
| Branche handoff | `sfia/review-handoff` |
| Publisher | `scripts/sfia/publish-review-handoff.sh` |

## X. Verdict

**NORA LIVE DOCUMENTARY FLOW PARTIAL — FUNCTIONAL GAPS IDENTIFIED**

Distinctions :

- IMPLEMENTED
- COVERAGE VERIFIED (déterministe antérieur)
- DETERMINISTIC BEHAVIOR PROVEN
- LIVE BEHAVIOR **PARTIAL** (CREATE+négation oui ; REVISE non)
- USER RECETTE NOT RUN

## Y. Gate Morris suivant

1. Relire ce handoff distant.
2. Décider d'un **contrat de correction ciblé** pour `PROPOSAL_SOURCE_CONFLICT` / REVISE LIVE (hors ce cycle).
3. Aucun GO RECETTE tant que REVISE LIVE n'est pas requalifié.
4. Produit non poussé / pas de PR.
