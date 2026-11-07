> **Consolidation documentaire (GO Morris 2026-11-07).** Rapport D0 ChatGPT consolidé pour traçabilité Git.
> Captures PNG indexées (§5) **non présentes** dans le worktree Cursor au moment de la consolidation — constats repris du rapport D0 + conversation ; **pas de lecture directe des images** par Cursor.
> Non normative. Documente le SHA **recetté** `61fe295b` (pas une nouvelle recette du commit documentaire).

# SFIA Studio Next — R5 / ML3 — RCT-02 : restitution consolidée de recette LIVE ciblée

**Date des observations :** 7 novembre 2026 (Europe/Paris)
**Nature :** D0 — restitution de tests utilisateur et revue à partir des transcriptions/captures en conversation. Non normative ; ne vaut ni adoption, ni merge, ni clôture ML3.
**Auteur de la consolidation :** ChatGPT, sur les observations fournies par Morris.
**Statut :** **TARGETED LIVE RECETTE PASSED — 8/8 scénarios observés conformes ; C04/C05/C06 corrigés sur parcours testés ; DOCUMENTATION + DRAFT PR GATE**.
**Autorité de recette :** Morris. Ce rapport prépare la traçabilité et la revue d'intégration ; il n'est pas un GO de merge.

## 1. Identité du candidat et provenance

| Objet | Valeur | Niveau de vérification |
|---|---|---|
| Dépôt | `mcleland147/sfia-workspace` | GitHub distant consulté |
| Branche candidate | `sfia/next-ml3-rct02-live-remediation` | distante = SHA ci-dessous au pré-check |
| SHA candidat **recetté** | `61fe295b6704e820694d2379e7f6ab1814143172` | GitHub distant ; arbre `web/`/`cki/` de référence LIVE |
| Base précédente RECETTE | `d646d42addb5a4c4a3cab441e9e39018d85fae70` | parent précédent du correctif |
| Écart à `main` au pré-check | 5 commits ahead, 0 behind, merge-base `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` | GitHub compare ; revalider avant PR |
| Lane | RECETTE — `http://127.0.0.1:3200` | attribution de Cursor et captures utilisateur ; accès runtime direct de ChatGPT non disponible |
| Build | `ZCkIWQ341KK1KOHTD1a5L` | handoff Cursor `2be79663` + manifest rapporté ; ChatGPT n'a pas lu directement le runtime local |
| Schéma | `007_ml3_pilotage_decisions` | handoff Cursor ; pas de preuve SQL indépendante |
| Base RECETTE | `127.0.0.1:5434/sfia_next_recette_ml3` | handoff Cursor ; ne jamais exposer secret |
| Handoff de déploiement | `sfia/review-handoff@2be796638a61073639793d8a53b068f103644584`, blob `c873eb94358394b67c5184f612d0100f41fb0258` | GitHub distant vérifié |
| Version produit | `0.0.0-dev`, `NO RELEASE`, STABLE `NOT AVAILABLE` | Git / handoff |
| CI SHA correctif | `NOT RUN` au pré-check PR readiness ; résultat CI = observation après Draft PR | Aucun PASS implicite local |

**Périmètre de preuve :** les captures montrent les projections et journaux visibles après les actions. Les réponses Nora, rapportées dans la conversation, permettent de qualifier son discours. Cette preuve utilisateur ne remplace pas une extraction PostgreSQL, des traces runtime, un test de restauration ou une CI.

## 2. Contrat de test et scoreboard

| Test | Action utilisateur / précondition | Vérification sur Pilotage et Nora | Verdict |
|---|---|---|---|
| T01 — ouverture | GO naturel pour CADRAGE avec objectif exact | `CADRAGE ACTIVE`, rev1, 1 décision `OPEN_CYCLE APPLICABLE`, aucune restriction ; Nora propose une démarche sans valider les besoins | **PASS** |
| T02 / C04 — record | Message LIVE original de priorisation exploratoire | Rev2, 2 décisions ; `RECORD_DECISION APPLICABLE`; `objectRef` sur difficultés de coordination et suivi, pas sur la réserve ; texte sans `que,` ; Nora propose une question d'enquête | **PASS** |
| T03 / C05 — revise | Message LIVE original révisant la priorité d'exploration | Rev3, 3 décisions ; ancien RECORD `REVISED`, nouveau RECORD `APPLICABLE`, OPEN fondatrice toujours applicable ; Nora confirme la nouvelle orientation | **PASS** |
| T04 — précondition | Application cockpit d'une restriction `CYCLE_MUTATION` limitée à l'instance CADRAGE | Rev4, 4 décisions ; restriction ACTIVE sur `cyc_6fc63656-0109-45df-a7e1-5aa286605cd5` | **PASS** |
| T05 / C06 — lift | Message LIVE original levant cette seule restriction, sans clore ni ouvrir | Rev5, 5 décisions ; `LIFT_RESTRICTION APPLICABLE`, aucune restriction active, historique APPLY/LIFT conservé, CADRAGE toujours actif ; Nora annonce effet APPLIED | **PASS** |
| T06 / C07 — lecture | Question de constat sans décision D6 | Nora explique état projet rev5, aucune restriction active et journal historique ; capture après réponse : rev5, 5 décisions, CADRAGE ACTIVE | **PASS** |
| T07 / C08 — close | GO explicite de clôture, sans autre ouverture | Rev6, 6 décisions ; `CLOSE_CYCLE APPLICABLE`, aucun cycle actif, aucune restriction ; Nora confirme | **PASS** |
| T08 — faux GO | Citation « Ouvre le cycle CONCEPTION_FONCTIONNELLE » explicitement non exécutoire | Nora reconnaît l'illustration sans GO ; capture après réponse : rev6, 6 décisions, aucun cycle actif, aucune restriction | **PASS** |

**Bilan vérifié sur ces huit scénarios : 8/8 PASS.** Il ne prouve pas la qualification générale ML3, l'ensemble des scénarios R5/R6, ni l'absence de tout bug linguistique hors des formulations testées.

**Distinction C01 retract vs T08 :** le **retrait explicite d'un GO** (négation du même OPEN demandé) est couvert par des **tests locaux unit/PG**, pas par T08. Le **T08 LIVE** prouve seulement qu'une **commande citée / non exécutoire** ne mute pas l'état après clôture. Ne pas fusionner ces deux preuves.

## 3. Les trois défauts initiaux et leur sortie

**C04 — décision mal identifiée** : l'ancienne RECETTE enregistrait un `objectRef` provenant de la réserve « mais ne signifie pas que le besoin utilisateur... », et un énoncé commençant par « que, ». La nouvelle capture T02 montre un objet de coordination et un énoncé propre. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**

**C05 — révision non appliquée** : l'ancien moteur traitait `OPEN_CYCLE` fondateur et `RECORD_DECISION` comme deux cibles concurrentes avant filtrage. T03 montre la révision persistante et la conservation de la décision fondatrice. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**

**C06 — levée non appliquée** : « je ne souhaite ni clôturer » était interprété comme une seconde clôture affirmative. T05 montre la levée persistante de `CYCLE_MUTATION` sur l'instance active, sans clôture ni ouverture. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**

**T01, T06, T07, T08** assurent des contrôles de non-régression ciblés de l'autorité, de la lecture sans mutation, de la clôture et des citations non exécutoires ; ils ne constituent pas une campagne exhaustive de sûreté D6.

## 4. Chronologie d'état observée

| Instant | Révision | Décisions visibles | Cycle actif | Restrictions actives | Événement principal |
|---|---:|---:|---|---:|---|
| T01 | 1 | 1 | CADRAGE | 0 | OPEN |
| T02 | 2 | 2 | CADRAGE | 0 | RECORD |
| T03 | 3 | 3 | CADRAGE | 0 | REVISE |
| T04 | 4 | 4 | CADRAGE | 1 | APPLY |
| T05 | 5 | 5 | CADRAGE | 0 | LIFT |
| T06 | 5 | 5 | CADRAGE | 0 | Lecture seule |
| T07 | 6 | 6 | Aucun | 0 | CLOSE |
| T08 | 6 | 6 | Aucun | 0 | Citation non exécutée |

## 5. Index des captures primaires

Les fichiers ci-dessous sont les originaux téléversés dans la conversation et vérifiés dans la session d'analyse ChatGPT. Le préfixe SHA-256 permet de confirmer qu'une copie n'a pas été substituée ; le hash complet peut être recalculé sur la copie fournie. **Ils ne sont pas automatiquement accessibles au worktree Cursor, ni publiés dans Git.**

| Test | Lien au cas | Capture source | SHA-256 (16 premiers caractères) | Ce qui est visible |
|---|---|---|---|---|
| T01 | C01/C02 | `image(20261107-021710).png` | `0880cc706e571ef3` | CADRAGE ACTIVE, révision 1, objectif, OPEN_CYCLE applicable, 1 décision, aucune restriction |
| T02 | C04 | `image(20261107-021932).png` | `9ee57b3ff2f29e50` | Révision 2, 2 décisions, RECORD_DECISION applicable, objectRef coordination, énoncé sans « que, » |
| T03 | C05 | `image(20261107-022313).png` | `b4c6cf03f4fece1e` | Révision 3, 3 décisions, ancien RECORD REVISED, nouveau RECORD APPLICABLE, OPEN_CYCLE applicable |
| T04 | Prérequis C06 | `image(20261107-022507).png` | `24b12a6d8232d82e` | Révision 4, 4 décisions, CYCLE_MUTATION active sur instance CADRAGE |
| T05 | C06 | `image(20261107-022705).png` | `235d30b625171406` | Révision 5, 5 décisions, aucune restriction active, APPLY/LIFT conservées, CADRAGE actif |
| T06 | C07 | `image(20261107-023138).png` | `0ea0d869efa490c6` | Révision 5 et 5 décisions inchangées après lecture Nora, aucune restriction active |
| T07 | C08 | `image(20261107-023259).png` | `927284256c33325d` | Révision 6, 6 décisions, CLOSE_CYCLE applicable, aucun cycle actif, aucune restriction active |
| T08 | Faux GO | `image(20261107-023513).png` | `927284256c33325d` | Révision 6 et 6 décisions inchangées après citation non exécutoire, aucun cycle actif |

**Limite T07/T08 :** les empreintes SHA-256 (16 car.) de T07 et T08 sont **identiques** (`927284256c33325d`). Ne **pas** les traiter comme deux preuves visuelles indépendantes ; la distinction T07 vs T08 s'appuie sur la chronologie conversationnelle (CLOSE puis citation) et les transcriptions Nora, pas sur deux bitstreams distincts.

Transcriptions Nora : reproduites dans la conversation utilisateur aux mêmes étapes. Les messages C04/C05/C06 de test sont exactement ceux du document candidat `construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md` (source historique des anomalies), non de nouvelles variantes.

## 6. Réserves / dettes / exits

| Réserve | Constat | Condition de sortie | Gate |
|---|---|---|---|
| **CI SHA correctif / tip PR** | Aucun run prouvé sur `61fe295b` au pré-check ; tip documentaire distinct | Exécuter la CI Next sur le head de PR et vérifier les checks applicables ; tout rebase/modification invalide le lien direct de recette sans requalification | **Draft PR / merge** ; qualifier blocage si required checks manquants |
| **C03 CKI intercycles** | Pas de test d'accompagnement intercycles à partir de cette recette | Test ciblé distinct selon contrat ; ne pas le présenter comme validé | Avant clôture ML3 selon arbitrage Morris |
| **ENV-01 Reserve A** | Cookies potentiellement partagés sur host `127.0.0.1` malgré ports différents | Isolation technique et re-recette concernée ; mitigation actuelle : profils isolés | Avant STABLE |
| **Rollback DB** | Dump conservatoire créé, restauration non testée | Vérification de restauration adaptée sur environnement non destructif | Selon exigence ENV-01/DATA-01 avant promotion |
| **LIVE/REAL couverture** | 8 scénarios spécifiques, pas E2E produit global | Qualification R6, contrôles négatifs et parcours élargis selon criticité | R6 |
| **Preuve runtime autonome** | Handoff indique SHA/build ; captures montrent état fonctionnel, pas identifiant build affiché dans les screenshots | Relecture manifeste/servi par Cursor en PR readiness | Avant merge |
| **Ancien rapport C04–C06** | En-tête historique « non publié sur Git » persiste dans le fichier désormais publié | Note post-publication additive (sans changer le diagnostic historique) | Lot documentaire présent |

Aucune de ces réserves ne transforme le verdict 8/8 en FAIL. **Elles empêchent de revendiquer CI PASS, ML3 CLOSED, STABLE, release, ADOPTED ou qualité globale R6.**

## 7. Gate d'intégration et préparation de PR

- **État :** `TARGETED LIVE RECETTE PASSED (8/8)` sur SHA recetté `61fe295b` / build `ZCkIWQ341KK1KOHTD1a5L`.
- **GO Morris documentation + Draft PR :** consolidation Git des preuves et ouverture PR Draft vers `main` pour déclencher la CI ; **pas** de merge, clôture ML3, redeploy RECETTE, release ou ADOPTED.
- **SHA documentaire :** tout commit docs produira un SHA Git distinct ; l'arbre exécutable `web/`/`cki/` doit rester **identique** à `61fe295b`.
- **Décision distincte à venir :** revue ChatGPT de la PR/CI, puis GO Morris merge séparé.

**Verdict final borné : `ML3 RCT-02 TARGETED LIVE RECETTE PASSED (8/8) — DOCUMENTATION + DRAFT PR GATE`.**
