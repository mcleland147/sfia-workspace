# SFIA Studio Next — Review Pack LIGHT (MONO-CYCLE)
## ML4C — Qualification Readiness Preflight (Q0 only)

- **Date/heure**: 2026-11-14 ~16:10 Europe/Paris
- **GO**: MORRIS — PRÉPARATION DE QUALIFICATION UNIQUEMENT
- **Cycle**: 9 — QA / validation
- **Profil**: STANDARD — read-only produit ; aucun effet métier / environnemental
- **Branche locale**: `fix/next-semantic-intent-convergence-20261112`
- **HEAD produit**: `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0`
- **origin/main**: `6cda86bde4aa450abb1d23eedd370a9004ddcbc1`
- **Prior technical handoff**: `sfia/review-handoff@c83385ea` blob `0bc949f4`
- **Product**: **LOCAL ONLY** — aucun commit / push / staging produit
- **LIVE / RECETTE mutation**: **NON EXÉCUTÉS**
- **Verdict**: **ML4C QA PRE-FLIGHT COMPLETE — AWAITING MORRIS CANDIDATE/RECETTE GATE**

---

## 1. Git Truth (observé)

| Check | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| Branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| `origin/build/next-ml4c-functional-convergence` | `67bf6b0b…` (identique HEAD) |
| `origin/main` | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| merge-base HEAD/main | `6d237452680640324eeadbb18f4601fd7de99850` |
| PR #676 | OPEN / NOT MERGED (réf. contrat ; non modifiée) |
| Staged | vide |
| Candidat sous `projects/sfia-studio-next` | **16 suivis modifiés + 14 non suivis = 30 chemins** |
| Empreinte descriptive candidats (hash-object liste) | `158b5564c235077e982761f78ac191aaedf21b55` |

**Constat fondamental :** `67bf6b0b` est le SHA de base produit / remote build, **pas** l’identité Git de l’ensemble du correctif ML4C local (30 chemins non commités). Aucun SHA figé reproductible du delta complet n’existe encore.

Inventaire 30 chemins : contenu intégral déjà archivé dans le Review Pack FULL `c83385ea` / blob `0bc949f4` — ce LIGHT pack **référence** ce FULL sans le répliquer.

---

## 2. Sources consultées

| Source | Ref / accès |
| --- | --- |
| SFIA routing + template v2.6 | worktree / main |
| ENV-01 gouvernance | `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md` |
| SEF / roadmap / versioning / décisions 11–12 nov | gouvernance Next |
| Cahier ML4C 53 cas | `origin/main` — `cahier-recette-utilisateur-ml4c.md` |
| Journal UAT | `origin/main` — `journal-recette-utilisateur-ml4c.md` |
| Cadrage V0.7 | `origin/docs/next-ml4c-continuite-nora-documents-v02-20261113` @ `86377fde` |
| Handoff technique | `sfia/review-handoff@c83385ea` blob `0bc949f4` |
| As-built / delivery-history locaux | worktree candidat (non commités) |

---

## 3. Candidat local et reproductibilité

### 3.1 Contenu candidat

**CANDIDATE CONTENT IDENTIFIED** — 30 chemins sous `projects/sfia-studio-next/` observés et cohérents avec le handoff `c83385ea`.

Preuves techniques antérieures (handoff / cycle précédent, non rejouées ici) : unit 319, integration 452, tsc/eslint/build PASS, Playwright ML4C ×2, LIVE NOT PROVEN.

### 3.2 Limite de SHA

| Artefact | Couvre le delta 30 chemins ? |
| --- | --- |
| HEAD `67bf6b0b` | **NON** |
| Build RECETTE `wYKCZCblBxWLiVsNjIr3e` sur WT `…-67bf6b0b` | **NON** (`document-command.ts` absent du WT RECETTE) |
| Empreinte descriptive `158b5564…` | Inventaire local seulement — **pas** un commit Git |

### 3.3 Procédure post-GO (Q1) — non exécutée

Après **GO Morris Q1 distinct** :

1. Commit mono-lot du candidat ML4C (30 chemins) sur branche produit autorisée.
2. Push produit si GO explicite.
3. Build reproductible (`next build`) → `build_id` + `source_sha` + tree.
4. Manifeste RECETTE (ENV-01 §6) avant toute mise à disposition (Q2).

**Ce cycle n’a pas stagé, committé ni poussé.**

---

## 4. ENV-01 — matrice readiness

| Prérequis | Observé | Source/preuve | Statut | Impact qualification | Action de sortie | Gate |
| --- | --- | --- | --- | --- | --- | --- |
| Isolation DEV | Lane DEV ; DB `sfia_next_dev` @ `127.0.0.1:5433` ; port config 3100 ; fixture force=1 | `.env.local` DEV (noms) | READY (config) | Tests fixture/DEV OK | Ne pas confondre avec LIVE | Q0 |
| Isolation RECETTE process | `next-server` PID écoute `127.0.0.1:3200` ; CWD WT `…-recette-build-67bf6b0b` ; `next start` | `lsof` + CWD + `start-recette.sh` | READY (runtime observé) | Sert **67bf6b0b**, pas delta local | Rebuild après commit candidat | Q1→Q2 |
| Build RECETTE servi | `.next/BUILD_ID=wYKCZCblBxWLiVsNjIr3e` ; manifeste freeze 2026-11-12 | fichier BUILD_ID + `ops/recette-freeze-manifest-67bf6b0b.md` | READY pour SHA 67bf | **≠** candidat correctif local | Nouveau build après Q1 | Q2 |
| DB RECETTE | `sfia_next_recette_ml4` @ `127.0.0.1:5434` ; Docker listen 5434 | env RECETTE + lsof | READY (isolation DB) | Mutations UAT futures sur cette DB | GO Q2/Q3 | Q2/Q3 |
| Schéma | migrations `001→012` présentes ; switch précédent « NOT RUN » | code + manifeste | UNKNOWN runtime | Vérifier révision réelle avant campagne | Lecture schema_migrations sous GO | Q2 |
| Hot reload RECETTE | `next start` production (pas `dev`) | start script | READY | Conforme ENV-01 | — | — |
| Secrets hors Git | env hors worktree `~/.config/sfia-studio-next/recette/.env.local` | path | READY | — | Ne pas publier secrets | — |
| Cookie / session cross-lane | Cookie studio lane-scopé `sfia_studio_session__*` ; Better Auth via `BETTER_AUTH_URL` par lane ; **réserve ENV-01 A** host `127.0.0.1` | `session.ts` + gouvernance | BLOCKED (architecture) pour STABLE | Profils navigateur séparés obligatoires en UAT | Isolation cookie avant STABLE | Q5/Q6 |
| ML4C-A-002 expiration session | Non requalifié ce cycle | journal | UNKNOWN | Politique expiresAt | Investigation read-only sous GO | ultérieur |
| ML4C-A-004 boutons DEV login en RECETTE | Flag `STUDIO_DEV_TEST_LOGIN` **ABSENT** de l’env RECETTE actuelle | env keys | READY provisoire (flag off) | UX boutons à re-vérifier navigateur | S01-05 retest | Q3 |
| ML4C-A-005 refus projet étranger | Investigation différée Morris | journal | UNKNOWN / NON BLOQUANT déclaré | Ne pas forcer usurpation | Observer sous Q3 | Q3 |
| STABLE | NOT AVAILABLE | gouvernance | N/A | — | — | Q6 |
| Identité affichée vs code servi | `SFIA_SOURCE_SHA=8ba77730…` dans env RECETTE **≠** CWD/HEAD `67bf6b0b` / BUILD `wYKCZ…` | env + process | **BLOCKED pour annonce d’identité** | Risque de confusion manifeste | Aligner `SFIA_SOURCE_SHA` au build réellement servi avant UAT | Q2 |

**ENV-01 ce cycle :** inspections RO uniquement — `ENV-01 : READ-ONLY PREFLIGHT` (pas N/A : lanes inspectées).

---

## 5. LIVE provider readiness (sans appel)

| Prérequis | Observé | Statut | Notes |
| --- | --- | --- | --- |
| SDK `@openai/agents` | `0.21.0` installé (package + lock + node_modules) | READY | Aligné handoff technique |
| Clé provider RECETTE | `OPENAI_API_KEY=PRESENT` (valeur non exposée) | READY config | **Aucun appel effectué** |
| Fixture force RECETTE | `STUDIO_FORCE_NORA_FIXTURE` / `STUDIO_E2E` **ABSENTS** | READY séparation | Fixture forcée seulement DEV |
| Fixture force DEV | `STUDIO_FORCE_NORA_FIXTURE=1` | READY DEV | Ne pas tester LIVE sur DEV fixture |
| Fail-closed hors DEV | Code refuse fixture hors DEV ; LIVE key required hors DEV | READY code | Preuve runtime LIVE = NOT PROVEN |
| `SFIA_COG_PROFILE_TYPE` RECETTE | `TEST_BOUNDARY` | UNKNOWN impact | Qualifier vs profils OPERATIONAL avant UAT LIVE |
| Outils historique / lecture doc | Présents dans code candidat local ; absents du WT RECETTE 67bf | BLOCKED pour preuve LIVE du correctif | Nécessite build du delta |
| Conversation LIVE | Non exécutée | NOT PROVEN | Gate Q3 |

---

## 6. Écart cahier / journal / cadrage V0.7

| Instantané | Verdicts | Candidat | Date / nature |
| --- | --- | --- | --- |
| Journal `main` | **4 PASS / 1 FAIL / 0 BLOCKED / 48 NOT RUN** | `2416e2ee` / build attendu `qB8JvX…` | UAT 12/11 — registre factuel |
| Cadrage V0.7 `86377fde` | **17 PASS / 6 FAIL / 30 BLOCKED / 0 NOT RUN** | Contexte correctif post-campagne (synthèse conception) | Document de cadrage — **pas** le journal d’exécution |
| Cahier validé | 53 cas S01–S07 normatifs | `2416e2ee` historique dans en-tête | VALIDATED CONTENT ; RECETTE utilisateur NOT RUN globalement |

**Ne pas fusionner.** Le journal sur `main` est la source d’exécution prouvable des fiches S01/S02. Le bilan 17/6/30 du V0.7 est une **synthèse de conception** ; les fiches détaillées PASS/FAIL supplémentaires **ne sont pas accessibles** comme journal Git unique sur `main` dans ce préflight → **UNKNOWN** pour le détail case-by-case du 17/6/30.

PASS journal prouvables : S01-01, S01-03, S01-04, S01-06.
FAIL journal prouvable : S02-01 (A-006/A-007).
Reste : NOT RUN.

**Tous les PASS/FAIL historiques sont relatifs à un candidat/build antérieur et doivent être retestés sur le prochain candidat figé (après Q1/Q2).**

---

## 7. Scénarios critiques priorisés (rejeu — non exécutés)

### Vague 1 — régressions bloquantes

| ID | Attendu (préparation) | Priorité | Statut courant prouvable |
| --- | --- | --- | --- |
| S02-01 / A-006 / A-007 | Nora LIVE comprend cadrage Intervencia + interdiction création ; zéro D2/D4 implicite ; pas de diagnostic brut | P0 | FAIL historique @2416 ; retest pending |
| S03-01…S03-04 | PREPARE → accord USER → D4 réel → bibliothèque/réponse concordantes | P0 | NOT RUN journal ; correctifs locaux non servis en RECETTE |
| S04-01 / A-011 | Rappel info ancienne après changement de sujet | P0 | NOT RUN / synthèse V0.7 |
| S04-03 / S04-04 | Temporalité / sources contradictoires sans inventer HumanDecision | P1 | NOT RUN |
| S07-06 / A-003 | Compositeur + Envoyer accessibles (fil long) | P1 | Réserve ouverte ; Playwright DEV fixture PASS ≠ LIVE |

### Vague 2 — continuité longue / documentaire

Préparer (pas exécuter) : N≈10, ≈110, ≈250, >300 ; refresh/reprise ; proposition ancienne → CREATE ; REVISE version réelle ; SHA/titre/révision ; refus non autorisé / zéro doublon.
**100 paires PG fixture ≠ cognition LIVE.**

### Vague 3 — 53 cas complets

Conserver IDs S01–S07. Git REAL WRITE / injection panne / révocation → **BLOCKED / NOT AUTHORIZED** jusqu’à GO Q4+.

---

## 8. Contrat de preuve campagne future

Chaque résultat réel : Case ID, date, Pilote, lane, **source_sha/tree + build_id réellement servi**, schema, projet/préparation, demande exacte, réponse Nora, attendu/observé, documentId/revisionId, état D4 réel, preuve navigateur + serveur/PG si applicable, niveau BROWSER/LIVE/REAL, verdict, anomalie.

Interdits d’inférence : texte Nora ≠ D4 ; présence d’outils ≠ capacité prouvée ; UNKNOWN/BLOCKED/NOT RUN ≠ PASS.

---

## 9. Bloqueurs / risques / dette

| ID | Type | Description | Sortie |
| --- | --- | --- | --- |
| B-01 | BLOCKED | Delta ML4C 30 chemins non commité → pas de SHA/build reproductible | GO **Q1** |
| B-02 | BLOCKED | RECETTE sert `67bf6b0b` / `wYKCZ…` **sans** fichiers correctifs (`document-command.ts` absent) | GO Q1 puis Q2 redeploy |
| B-03 | BLOCKED identité | `SFIA_SOURCE_SHA` env = `8ba77730` ≠ process `67bf6b0b` | Corriger manifeste/env avant UAT |
| B-04 | Réserve | Cookie host-shared ENV-01 A | Profils navigateur séparés ; fix avant STABLE |
| B-05 | UNKNOWN | Schéma runtime RECETTE non relu | Lecture RO sous Q2 |
| B-06 | NOT PROVEN | Nora LIVE | GO **Q3** |
| B-07 | NOT AUTHORIZED | Git REAL WRITE | GO **Q4** |
| B-08 | Documentary gap | Détail 17/6/30 V0.7 non rattaché fiche-par-fiche au journal main | Ne pas inventer ; retester |

---

## 10. Gates Morris (non consommés)

| Gate | Objet | Ce cycle |
| --- | --- | --- |
| **Q0** | Préflight readiness | **EXÉCUTÉ** |
| Q1 | Commit/tree/build candidat figé (+ push si GO) | NON AUTORISÉ |
| Q2 | Mise à disposition RECETTE de ce build | NON AUTORISÉ |
| Q3 | Nora LIVE + campagne mutative | NON AUTORISÉ |
| Q4 | Git REAL documentary WRITE | NON AUTORISÉ |
| Q5 | Verdict recette ML4C | MORRIS |
| Q6 | PR/merge/STABLE/Gate C/ADOPTED | NON AUTORISÉ |

### Prochain GO cohérent recommandé (un seul)

**GO Q1 — Figer le candidat ML4C :** commit (et push produit si autorisé) des 30 chemins sur la branche autorisée ; produire tree + `build_id` ; manifeste draft.
**Limites :** pas de mutation RECETTE, pas LIVE, pas merge, pas Q2 automatique.
**Ensuite (GO distinct) :** Q2 mise à disposition RECETTE du **nouveau** build uniquement, avec `SFIA_SOURCE_SHA` aligné, puis Q3 campagne.

---

## 11. Distinctions factuelles

| Classe | Exemples |
| --- | --- |
| Observations vérifiées | 30 chemins ; HEAD 67bf ; RECETTE process CWD/build ; DB ports ; SDK 0.21.0 ; journal 4/1/48 ; absence document-command en WT RECETTE |
| Informations rapportées | Manifeste freeze 12/11 ; CI gate SUCCESS historique ; Intervencia prep id |
| Hypothèses | Aucune cause A-005 affirmée |
| Inconnues | Détail case-level du bilan 17/6/30 ; schema_migrations runtime ; comportement LIVE |
| Recommandations | Q1 puis Q2 aligné ; profils navigateur ; retest Vague 1 |
| Décisions Morris existantes | A-005 différé ; cahier validé ; V0.7 contenu ; Q0 autorisé |
| Décisions encore nécessaires | Q1/Q2/Q3… |

---

## 12. Review Pack LIGHT — couverture

1. Git Truth + inventaire ✓
2. Sources ✓
3. Matrice candidat ✓
4. ENV-01 ✓
5. Écart bilans ✓
6. Plan rejeu ✓
7. Préconditions LIVE/REAL ✓
8. Bloqueurs ✓
9. Réserves ✓
10. Gates ✓
11. Prochain GO ✓
12. Verdict ✓

Référence FULL technique : `c83385ea` / `0bc949f4` (pas de réplication).

---

## 13. §9.1 Instruction ChatGPT

> **Instruction ChatGPT obligatoire :**
>
> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
>
> branche : `sfia/review-handoff`
> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
>
> Vérifier cohérence avec le rapport Cursor (préflight Q0, 30 chemins locaux, RECETTE sert 67bf sans delta, écart journal vs V0.7, gates non consommés, verdict ci-dessous). Tip/blob exacts = rapport Cursor §14.
>
> Produire ensuite la synthèse globale pour Morris (objectif, constats, bloqueurs, prochain GO, verdict).
>
> **Le rapport Cursor seul ne remplace pas le handoff Git.**

---

## 14. Verdict

**ML4C QA PRE-FLIGHT COMPLETE — AWAITING MORRIS CANDIDATE/RECETTE GATE**

Ce statut **≠** LIVE PROVEN, **≠** RECETTE READY pour le correctif ML4C local, **≠** acceptation produit.
