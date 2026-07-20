# SFIA Studio — Decision pack scénario OPS1 (validé avec amendements)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `56-ops1-scenario-decision-pack.md` |
| **Cycle** | Conception du scénario opérationnel OPS1 |
| **Profil** | Standard |
| **Statut** | `scenario-decisions-validated-with-amendments` — **22 décisions validées avec amendements** (2026-07-20 18:34:47 CEST) |
| **Gate d’ouverture** | `G-OPS1-SCENARIO-VAL` — consommé pour production candidate |
| **Gate de validation** | `G-OPS1-SCENARIO-VAL` — **consommé** — Morris — 2026-07-20 18:34:47 CEST — **VALIDATION AVEC AMENDEMENTS** |
| **Décisions** | `OPS1-SCENARIO-CAND-01`…`22` |
| **Companions** | [`54`](./54-ops1-operational-scenario.md) · [`55`](./55-ops1-campus360-scope-and-allowlist-rules.md) |
| **Baseline Git** | `origin/main` @ `5a595b0dfcc01302ce8e7f729fee2dd383735388` |
| **Horodatage production** | 2026-07-20 18:08:37 CEST |
| **Horodatage validation Morris** | 2026-07-20 18:34:47 CEST |
| **Autorité** | Morris (L0) |

> Decision pack **validé avec amendements** sous `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
> Identifiants historiques `OPS1-SCENARIO-CAND-*` **conservés**.

---

## 1. Synthèse

| Élément | Valeur |
|---------|--------|
| Nombre de décisions | **22** |
| Statut collectif | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
| Décision Morris | `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST` |
| Projet pilote | Campus360 |
| Docs | `54` scénario · `55` cartographie/allowlist/branche · `56` décisions |
| Fermé | Tech-arch · backlog · code · delivery · live · MVP · production · Figma |

---

## 2. Décisions validées avec amendements

## OPS1-SCENARIO-CAND-01 — Projet pilote Campus360

| Champ | Contenu |
|-------|---------|
| **Sujet** | Projet pilote Campus360 |
| **Proposition** | Confirmer Campus360 comme projet pilote **exclusif** d’action OPS1. |
| **Options alternatives** | Autre projet workspace ; multi-projets. |
| **Impacts** | Ancre le scénario ; exclut les autres projets d’action. |
| **Risques** | Confusion OPS1 = feature Campus360. |
| **Dette** | Maintenir la distinction Studio vs Campus360. |
| **Recommandation** | Retenir Campus360 exclusif. |
| **Réserve** | FD-CAND-26 |
| **Amendement** | Amendement : FD-CAND-26 levée pour Campus360 OPS1 ; `03` protégé par défaut. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-02 — Chemins éligibles constatés

| Champ | Contenu |
|-------|---------|
| **Sujet** | Chemins éligibles constatés |
| **Proposition** | Retenir comme éligibles les 4 Markdown sous `projects/campus360/` + futurs `NN-*.md` documentaires non protégés. |
| **Options alternatives** | Éligibilité limitée à un seul fichier ; éligibilité dossier entier via wildcard. |
| **Impacts** | Cartographie exploitable immédiatement. |
| **Risques** | Sur-interprétation « tout le dossier ». |
| **Dette** | Réviser si nouveaux fichiers. |
| **Recommandation** | Retenir la liste repo-informed + règle de révision. |
| **Réserve** | FD-CAND-20 |
| **Amendement** | Amendement : FD-CAND-20 levée pour OPS1 ; pas de wildcard dossier ; 1..n explicite. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-03 — Catégories consultables

| Champ | Contenu |
|-------|---------|
| **Sujet** | Catégories consultables |
| **Proposition** | Les 4 fichiers existants sont consultables dans une allowlist. |
| **Options alternatives** | Lecture seule hors contrat. |
| **Impacts** | Permet contextualisation GPT/Cursor bornée. |
| **Risques** | Lecture excessive hors besoin. |
| **Dette** | Proportionner `allowedReads`. |
| **Recommandation** | Autoriser reads listés uniquement. |
| **Réserve** | — |
| **Amendement** | Amendement : lecture uniquement si chemin dans `allowedReads`. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-04 — Catégories créables

| Champ | Contenu |
|-------|---------|
| **Sujet** | Catégories créables |
| **Proposition** | Autoriser la création de nouveaux Markdown sous `projects/campus360/` s’ils sont listés dans `allowedCreates`. |
| **Options alternatives** | Interdire toute création dans OPS1. |
| **Impacts** | Couvre le cas cadrage détaillé / suite documentaire. |
| **Risques** | Création hors naming / hors besoin. |
| **Dette** | Convention de nommage à respecter. |
| **Recommandation** | Création possible si listée et justifiée. |
| **Réserve** | — |
| **Amendement** | Amendement : création uniquement si chemin dans `allowedCreates` (naming `NN-*.md`). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-05 — Catégories modifiables

| Champ | Contenu |
|-------|---------|
| **Sujet** | Catégories modifiables |
| **Proposition** | `README`, `01`, `02` modifiables si listés ; `03` **protégé par défaut** (hors scénario nominal) ; modification future de `03` seulement avec justification + cycle adapté + allowlist dédiée + gate Morris distinct. |
| **Options alternatives** | Tout en lecture seule ; `03` totalement gelé. |
| **Impacts** | Preuve d’écriture réelle possible. |
| **Risques** | Réécriture silencieuse des décisions Morris dans `03`. |
| **Dette** | Motif fort obligatoire pour `03`. |
| **Recommandation** | Retenir vigilance sur `03`. |
| **Réserve** | FD-CAND-20 |
| **Amendement** | Amendement : `03` **protégé par défaut** — hors modifies du scénario nominal ; modification future seulement avec justification + cycle adapté + allowlist dédiée + gate Morris distinct. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-06 — Exclusions structurelles

| Champ | Contenu |
|-------|---------|
| **Sujet** | Exclusions structurelles |
| **Proposition** | Exclure hors `projects/campus360/`, méthode, prompts, app, harness, `.github`, lockfiles, secrets, autres projets. |
| **Options alternatives** | Allowlist large workspace. |
| **Impacts** | Fail-closed structurel. |
| **Risques** | Tentative d’élargissement implicite. |
| **Dette** | Denylist à rappeler dans chaque contrat. |
| **Recommandation** | Retenir exclusions listées. |
| **Réserve** | — |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-07 — Convention de branche

| Champ | Contenu |
|-------|---------|
| **Sujet** | Convention de branche |
| **Proposition** | Adopter candidate `scenario/campus360-<action-slug>-<session-id-court>` (locale, sans push auto). |
| **Options alternatives** | Réutiliser branche design ; nom libre non préfixé. |
| **Impacts** | Traçabilité Git locale. |
| **Risques** | Collision / branche sale. |
| **Dette** | Cleanup non automatique. |
| **Recommandation** | Retenir la convention candidate §6 doc 55. |
| **Réserve** | FD-CAND-26 |
| **Amendement** | Amendement : convention validée avec FD-CAND-26 levée (branche locale, sans push auto). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-08 — Allowlist exhaustive avant gate

| Champ | Contenu |
|-------|---------|
| **Sujet** | Allowlist exhaustive avant gate |
| **Proposition** | Toute action présente une allowlist 1..n exhaustive avant décision Morris. |
| **Options alternatives** | Allowlist après GO ; wildcard dossier. |
| **Impacts** | Alignement FR-026…032. |
| **Risques** | Oubli de fichier nécessaire. |
| **Dette** | Correction avant GO. |
| **Recommandation** | Retenir exhaustivité avant gate. |
| **Réserve** | — |
| **Amendement** | Amendement : aligné FD-CAND-20 levée (exhaustivité, gel, nouveau gate si extension). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-09 — Règle multi-fichiers

| Champ | Contenu |
|-------|---------|
| **Sujet** | Règle multi-fichiers |
| **Proposition** | Multi-fichiers autorisé **uniquement si nécessaire** ; pas de plafond mono-fichier. |
| **Options alternatives** | Revenir au mono-fichier obligatoire. |
| **Impacts** | Alignement amendement Morris 2026-07-20 13:36 CEST. |
| **Risques** | Allowlist disproportionnée. |
| **Dette** | Justification par fichier. |
| **Recommandation** | Retenir proportionnalité. |
| **Réserve** | FD-CAND-20 |
| **Amendement** | Amendement : multi-fichiers proportionné formalisé sous FD-CAND-20 levée. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-10 — Scénario nominal

| Champ | Contenu |
|-------|---------|
| **Sujet** | Scénario nominal |
| **Proposition** | Adopter le scénario nominal §4 du doc 54 (16 étapes). |
| **Options alternatives** | Scénario purement simulé / scripté. |
| **Impacts** | Preuve opératoire alignée UX/flows. |
| **Risques** | Sur-scripting des phrases. |
| **Dette** | Ne pas figer les microcopies conversationnelles. |
| **Recommandation** | Retenir §4. |
| **Réserve** | UX-R02 |
| **Amendement** | Amendement : clôture + continuation liée (FD-CAND-13 levée). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-11 — Scénario sans action

| Champ | Contenu |
|-------|---------|
| **Sujet** | Scénario sans action |
| **Proposition** | Adopter variante `ACTION_NOT_REQUIRED` (§5 doc 54). |
| **Options alternatives** | Action toujours obligatoire. |
| **Impacts** | Prouve le caractère facultatif de l’action. |
| **Risques** | Confusion avec abandon. |
| **Dette** | Signal explicite distinct de NO-GO. |
| **Recommandation** | Retenir la variante. |
| **Réserve** | — |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-12 — Correction avant GO

| Champ | Contenu |
|-------|---------|
| **Sujet** | Correction avant GO |
| **Proposition** | CORRIGER invalide l’ancien contrat ; nouveau hash + nouveau gate. |
| **Options alternatives** | Mutation in-place du contrat GO-able. |
| **Impacts** | Alignement FR-030 amont. |
| **Risques** | Réutilisation accidentelle ancien hash. |
| **Dette** | Journaliser invalidation. |
| **Recommandation** | Retenir invalidation + nouveau contrat. |
| **Réserve** | — |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-13 — Extension après GO

| Champ | Contenu |
|-------|---------|
| **Sujet** | Extension après GO |
| **Proposition** | Extension allowlist post-GO refusée ; nouveau contrat + gate obligatoires. |
| **Options alternatives** | Patch allowlist à chaud. |
| **Impacts** | Fail-closed ; preuve PN-03. |
| **Risques** | Pression à élargir pendant exécution. |
| **Dette** | STOP si tentative en cours d’exécution. |
| **Recommandation** | Retenir refus strict. |
| **Réserve** | — |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-14 — NO-GO / abandon

| Champ | Contenu |
|-------|---------|
| **Sujet** | NO-GO / abandon |
| **Proposition** | NO-GO et ABANDONNER : aucun effet Git d’exécution ; journalisation ; suite conversationnelle possible. |
| **Options alternatives** | Effacer la session. |
| **Impacts** | Traçabilité décisionnelle. |
| **Risques** | Confusion NO-GO vs ACTION_NOT_REQUIRED. |
| **Dette** | Motifs distincts. |
| **Recommandation** | Retenir §8 doc 54. |
| **Réserve** | — |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-15 — STOP

| Champ | Contenu |
|-------|---------|
| **Sujet** | STOP |
| **Proposition** | STOP prioritaire ; arrêt / non-démarrage ; preuves conservées ; pas de reprise implicite. |
| **Options alternatives** | STOP = pause temporaire auto-reprise. |
| **Impacts** | Sécurité opératoire. |
| **Risques** | Reprise ambiguë. |
| **Dette** | Reprise = décision Morris explicite. |
| **Recommandation** | Retenir §9 doc 54. |
| **Réserve** | — |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-16 — Échec Cursor

| Champ | Contenu |
|-------|---------|
| **Sujet** | Échec Cursor |
| **Proposition** | Rapport d’échec ; pas de retry auto ; analyse candidate ; décision Morris. |
| **Options alternatives** | Retry automatique N fois. |
| **Impacts** | Contrôle Morris. |
| **Risques** | Boucles coûteuses (FinOps). |
| **Dette** | FD-CAND-15 chiffres OPEN. |
| **Recommandation** | Retenir §10 doc 54. |
| **Réserve** | FD-CAND-15 |
| **Amendement** | Amendement : FinOps numériques restent OPEN (FD-CAND-15 maintenue). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-17 — Rapport incomplet

| Champ | Contenu |
|-------|---------|
| **Sujet** | Rapport incomplet |
| **Proposition** | Clôture nominale interdite ; re-exécution même hash bloquée ; correction ou abandon. |
| **Options alternatives** | Clôture avec dette silencieuse. |
| **Impacts** | Intégrité de preuve. |
| **Risques** | Pression à clôturer. |
| **Dette** | Flag d’incomplétude visible UX. |
| **Recommandation** | Retenir §11 doc 54. |
| **Réserve** | — |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-18 — Preuves négatives

| Champ | Contenu |
|-------|---------|
| **Sujet** | Preuves négatives |
| **Proposition** | Exiger PN-01…09 comme batterie minimale de la démonstration OPS1. |
| **Options alternatives** | Uniquement happy path. |
| **Impacts** | Crédibilité fail-closed. |
| **Risques** | Non-exécution des PN. |
| **Dette** | Planifier PN dans la démo. |
| **Recommandation** | Retenir §12 doc 54. |
| **Réserve** | live |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-19 — Critères de réussite

| Champ | Contenu |
|-------|---------|
| **Sujet** | Critères de réussite |
| **Proposition** | Adopter la matrice §14 doc 54 comme critères de succès de démonstration. |
| **Options alternatives** | Critères delivery/MVP. |
| **Impacts** | Borne la preuve opératoire. |
| **Risques** | Glissement vers claims production. |
| **Dette** | Anti-claims obligatoires. |
| **Recommandation** | Retenir la matrice. |
| **Réserve** | — |
| **Amendement** | Amendement : critères incluent continuation liée post-CLOSE (FD-CAND-13). |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-20 — Cleanup branche d’exécution

| Champ | Contenu |
|-------|---------|
| **Sujet** | Cleanup branche d’exécution |
| **Proposition** | Cleanup local (et distant si jamais poussée) uniquement après GO Morris distinct ; pas automatique. |
| **Options alternatives** | Cleanup auto en fin de session. |
| **Impacts** | Évite perte de preuves. |
| **Risques** | Branches orphelines. |
| **Dette** | Procédure post-démo. |
| **Recommandation** | Retenir cleanup gouverné. |
| **Réserve** | — |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-21 — Limites FinOps

| Champ | Contenu |
|-------|---------|
| **Sujet** | Limites FinOps |
| **Proposition** | FinOps reste placeholder ; aucun plafond numérique figé dans ce cycle. |
| **Options alternatives** |  inventer des seuils. |
| **Impacts** | Évite fausse précision. |
| **Risques** | Coût live non borné numériquement. |
| **Dette** | FD-CAND-15 avant live. |
| **Recommandation** | Maintenir OPEN. |
| **Réserve** | FD-CAND-15 |
| **Amendement** | Amendement : FD-CAND-15 **maintenue** jusqu’au gate FinOps/live — aucun seuil inventé. |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |
## OPS1-SCENARIO-CAND-22 — Condition d’ouverture architecture technique

| Champ | Contenu |
|-------|---------|
| **Sujet** | Condition d’ouverture architecture technique |
| **Proposition** | L’architecture technique OPS1 reste **fermée** ; ouverture uniquement par GO Morris explicite distinct après validation scénario (si retenue). |
| **Options alternatives** | Ouvrir tech-arch automatiquement après ce document. |
| **Impacts** | Respect du routage SFIA. |
| **Risques** | Ouverture prématurée. |
| **Dette** | Gate tech-arch séparé. |
| **Recommandation** | Ne pas ouvrir tech-arch dans ce cycle. |
| **Réserve** | — |
| **Amendement** | — |
| **Décision Morris** | `VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL — Morris — 2026-07-20 18:34:47 CEST` |


---

## 3. Matrice de couverture minimale

| Thème requis | Décision(s) |
|--------------|-------------|
| Projet pilote Campus360 | CAND-01 |
| Chemins éligibles | CAND-02 |
| Consultables / créables / modifiables | CAND-03…05 |
| Exclusions | CAND-06 |
| Multi-fichiers | CAND-09 |
| Allowlist exhaustive | CAND-08 |
| Convention de branche | CAND-07 |
| Scénario nominal | CAND-10 |
| Sans action | CAND-11 |
| Correction avant GO | CAND-12 |
| Extension après GO | CAND-13 |
| NO-GO | CAND-14 |
| STOP | CAND-15 |
| Échec Cursor | CAND-16 |
| Rapport incomplet | CAND-17 |
| Critères de réussite | CAND-19 |
| Preuves négatives | CAND-18 |
| Cleanup | CAND-20 |
| FinOps | CAND-21 |
| Ouverture architecture technique | CAND-22 |

---

## 4. Réserves — traitement sous ce GO

| Réserve | Statut |
|---------|--------|
| **FD-CAND-13** | `LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN` |
| **FD-CAND-20** | `LIFTED FOR OPS1 SCENARIO` (non généralisé hors OPS1) |
| **FD-CAND-26** | `LIFTED FOR CAMPUS360 OPS1 WITH 03 PROTECTED BY DEFAULT` |
| **FD-CAND-15** | `MAINTAINED UNTIL FINOPS/LIVE GATE` |
| **UX-R01…R04** | **Maintenues** et routées (non levées ici) |
| **Isolation / CI** | `ROUTED TO OPS1 TECHNICAL ARCHITECTURE — NOT DESIGNED HERE` |
| **Tech-arch / backlog / delivery / live** | **Fermés** |

---

## 5. Anti-claims

Pas de READY FOR DELIVERY · PRODUCTION READY · OPS1 PROVEN · MVP DEFINED · LIVE READY · ARCHITECTURE TECHNIQUE VALIDÉE.
La validation scénario **n’ouvre pas** tech-arch, backlog, code, delivery ni live.

---

## 6. Verdict

`scenario-decisions-validated-with-amendments`

`OPS1 SCENARIO VALIDATED WITH AMENDMENTS — G-OPS1-SCENARIO-VAL`

`GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`

22 / 22 décisions `OPS1-SCENARIO-CAND-01…22` validées avec amendements. Identifiants historiques conservés.
