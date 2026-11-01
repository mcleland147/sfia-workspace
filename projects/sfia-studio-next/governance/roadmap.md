# SFIA Studio Next — Living Roadmap

**Nature :** feuille de route de construction Next ; distincte de `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`.

**État au 2026-11-01, vérifié sur `main` @ `aeb4b81fd598f9440a23a6a7f1ce36da4de9a97c` :** R0-A **VALIDATED BY MORRIS** (SEF v0.2) ; R0-B **MERGED + POST-MERGE GIT VERIFIED** via PR **#636**, puis **GO Morris de formalisation de clôture** donné en conversation. Cette mise à jour de Roadmap est une **candidate documentaire** sur branche de synchronisation post-merge, et n'est pas encore publiée sur `main`. **R1 non engagé.**

| Jalon | Statut | Résultat/exit |
| --- | --- | --- |
| R0-A — méthode et rebaseline | **VALIDATED — ON MAIN via PR #636** | SEF v0.2 approuvé, frontières et périmètre Next décidés |
| R0-B — bootstrap gouverné | **CLOSED BY MORRIS GO — POST-MERGE VERIFIED ; ROADMAP TRUTH-SYNC CANDIDATE** | PR #636 merged sur `main` ; SEF, Roadmap et naming validés ; vision + 3 PNG originaux et routage Next présents ; preuves Git post-merge ; pas de preuve produit LIVE/REAL ni de CI Next revendiquée |
| R1 — cadrage produit | **NOT STARTED / NOT AUTHORIZED AS DELIVERY** | Vision, outcomes, capability map, frontières et exigences, REX explicite |
| R2 — conception fonctionnelle | **NOT STARTED** | Règles, processus, décisions, contrats et exceptions |
| R3 — UX/UI | **NOT STARTED** | Parcours, maquettes et contrats UX approuvés |
| R4 — architecture technique | **NOT STARTED** | Architecture, ADR, contrats, responsabilités et choix de persistence |
| R5 — reconstruction par macro-capacités | **NOT STARTED** | Code neuf, preuves verticales, documents synchronisés |
| R6 — qualification et bascule | **NOT STARTED** | Tests E2E/REAL applicables, gouvernance de transition, GO adoption |

## Chemin critique

1. **Routage SFIA v2.6 Next : ON MAIN — STATIC VERIFIED** — guide partagé `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b et template partagé `prompts/templates/sfia-cycle-execution-template.md` §2.0.H présents à `main@aeb4b81…`, avec conservation du routage historique et statut naming `VALIDATED BY MORRIS` harmonisé. Les effets LIVE/REAL du routage n'ont pas été testés. Les instructions projet ChatGPT ont été approuvées par Morris dans la conversation ; l'application effective des réglages n'est **pas vérifiable depuis Git** (aucun claim d'installation).
2. **THREE ORIGINAL PNG ON MAIN — POST-MERGE VERIFIED** — commit source `3d3d09eca427e6dcaaec589a6a64561227f8a622`, merge #636 `aeb4b81…` ; chemins et blob SHA Git des 3 PNG vérifiés sur `main`, identiques aux blobs distants candidats dont les octets ont été vérifiés contre les SHA-256 originaux :
   - `01-pilote-nora-capacites.png` → `df80a9470c32d5f18aa0a21087300648f80dde5beec4f3fbba68d3d61073f1ef`
   - `02-cockpit-architecture-conceptuelle.png` → `1c12dedcca1ec1060636d9197b9e6039ef8aaa6edd99763a4cc74e710b139f50`
   - `03-mission-execution-restitution.png` → `b84363a0a3e70eb94013d998975f8646c83daf67013ffb5888e60d704d5fcede`
   Index navigable : `cadrage/vision-cible/README.md` (VISION FONDATRICE, non architecture validée / non REAL).
3. **R0-B Git integration : MERGED #636 / POST-MERGE VERIFIED — CLOSURE GO MORRIS (2026-11-01)** — documents Next, 3 PNG et deux fichiers partagés présents sur `main`; pas de modification du runtime historique `projects/sfia-studio/`. Merge GitHub autorisé par Morris et réalisé le 2026-11-01 ; post-merge Git vérifié. Le gate CI commun PR a réussi, la suite applicative historique a été SKIPPED ; **aucune CI Next ni test runtime Next n'est revendiqué**.
4. **Nomenclature : VALIDATED BY MORRIS / ON MAIN** — règles de nommage de construction Next validées le 2026-11-01 ; guide et template partagés harmonisés et présents sur `main`. Le glossaire R1/R2 et les conventions techniques R4 restent à concevoir ; aucun exemple de classe automatiquement adopté.
5. **Capacité suivante : R1 — cadrage produit, NON ENGAGÉ EN DELIVERY** — ouvrir un macro-lot de définition des capacités Pilote/Nora et de leurs résultats attendus, en partant des trois schémas et des décisions Next ; périmètre, contrat d'acceptation et GO Morris R1 distincts. Ne pas commencer R1 par inertie.

**Dépendance structurante :** décisions historiques H7/H8 et G0-A/B conservées en tant qu'historique ; leur portée pour la nouvelle architecture reste à arbitrer, sans supersession implicite. Ancien runtime v3 **NON ADOPTED**.

**Règle de mise à jour :** un statut ne devient PASSED/READY/ADOPTED qu'après preuve et décision ; mettre à jour cette roadmap dans le même macro-lot que le changement, sans cycle documentaire artificiel.

## R0-B — critères de clôture et réserves factuelles (2026-11-01)

| Contrôle | État | Preuve / suite |
| --- | --- | --- |
| R0-A SEF v0.2 | **VALIDATED MORRIS / ON MAIN** | `governance/SEF.md` sur `main@aeb4b81…` + décision du 2026-11-01 |
| Convention nommage | **VALIDATED MORRIS / ON MAIN** | `governance/product-naming-conventions.md` + décision et guide/template partagés sur `main` |
| Routage v2.6 Next | **ON MAIN / STATIC VERIFIED** | Guide §4.3.0b + template §2.0.H présents ; effets LIVE/REAL non prouvés |
| Trois schémas | **ON MAIN / POST-MERGE GIT VERIFIED** | Merge `aeb4b81…` ; trois blobs identiques à la candidate ; SHA-256 originaux vérifiés sur la candidate distante |
| Instructions ChatGPT Next | **APPROVED MORRIS / SETTINGS NOT OBSERVED** | Instructions Next validées dans la conversation ; leur activation effective dans les paramètres n'est pas une preuve Git ; source documentaire `governance/chatgpt-project-instructions-next.md` sur main |
| CI/validation intégration | **PR REQUIRED GATE PASS / LEGACY BUILD SKIPPED ; NEXT CI NOT IMPLEMENTED** | PR #636 : `Detect SFIA Studio changes = SUCCESS`, `SFIA Studio Required Gate = SUCCESS`, `Build and validate SFIA Studio = SKIPPED`, workflow [#41311482392](https://github.com/mcleland147/sfia-workspace/actions/runs/41311482392). Aucun workflow post-merge observé sur le merge SHA au contrôle du 2026-11-01. Ces checks ne prouvent **aucune qualité runtime Next** ; CI Next à concevoir en R4/R5 sous GO technique. |
| PR / merge / main | **MERGED / POST-MERGE GIT VERIFIED** | Morris GO PR puis GO MERGE consommés ; PR [#636](https://github.com/mcleland147/sfia-workspace/pull/636) merged le 2026-11-01T13:31:18Z, SHA `aeb4b81fd598f9440a23a6a7f1ce36da4de9a97c` ; HEAD `main` vérifié au même SHA |

**Verdict post-merge : R0-B MERGED AND POST-MERGE GIT VERIFIED — CLOSURE FORMALIZED UNDER MORRIS GO (2026-11-01).** Cette mise à jour de statut, créée sur une branche documentaire issue du merge SHA, reste **CANDIDATE UNTIL PUBLISHED ON MAIN**. Réserves non bloquantes et traçables : paramètres ChatGPT non observables depuis Git ; pas de CI produit Next avant sa conception R4/R5 ; aucun comportement produit Next ni runtime ADOPTED revendiqué. **R1 NOT STARTED / REQUIRES ITS OWN GO.**


## R0-B — enregistrement de clôture post-merge (2026-11-01)

- **Autorité :** GO Morris donné en conversation pour formaliser la clôture après post-merge #636, sans autorisation implicite de nouvelle PR/merge ni d'ouverture Delivery R1.
- **Preuve principale :** PR #636 merged ; `main@aeb4b81fd598f9440a23a6a7f1ce36da4de9a97c` observé ; 12 fichiers de la PR présents ; aucune modification de l'application historique dans le périmètre de la PR.
- **Livrables :** SEF v0.2, conventions de nommage validées, Roadmap Next, décisions, vision avec trois schémas originaux, routage SFIA v2.6 Next spécialisé sur guide/template canoniques.
- **Qualité limitée au périmètre R0-B :** Git post-merge et empreintes des actifs ; gate PR `SFIA Studio Required Gate` PASS avec build historique SKIPPED ; pas de pipeline ni de runtime Next à tester à ce jalon.
- **Reste à instruire, sans réouverture R0-B :** stratégie CI Next proportionnée aux capacités nouvelles (R4/R5), application des instructions ChatGPT si non déjà faite, conception fonctionnelle/UX/architecture et preuves futures.
- **Trajectoire :** R1 cadrage produit est le prochain jalon, **non engagé** tant que son propre périmètre, son contrat et son GO ne sont pas posés.
- **Traçabilité :** cette synchronisation documentaire est un commit **candidat** sur `docs/sfia-studio-next-r0b-postmerge-closure-20261101` issu de `aeb4b81…`. Aucun statut `ON MAIN` n'est revendiqué pour **cette version du texte** avant son intégration Git distincte.
