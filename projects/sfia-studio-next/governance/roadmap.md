# SFIA Studio Next — Living Roadmap

**Nature :** feuille de route de construction Next ; distincte de `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`.

**État courant au 2026-11-02 : R1 CLOSED WITH CARRIED RESERVES / R2 CLOSED BY MORRIS WITH CARRIED RESERVES — MERGED AND POST-MERGE GIT VERIFIED.** [Décision R2](decisions/2026-11-02-r2-functional-exit.md) et [rapport de sortie](../conception-fonctionnelle/revue-formelle-sortie-r2.md) : neuf specs globalement validées, 300 règles et 241 scénarios documentaires ; 15 CKI et 50 relations `VALIDATED CONTENT v0.2`. [PR #640](https://github.com/mcleland147/sfia-workspace/pull/640) mergée le 2026-11-02T19:33:10Z ; `main@455bb706ecdb13cc046b65b531e72ce96f4a4455` relu et arborescence identique à la candidate R2. **R3 UX NOT STARTED** ; aucune architecture Next, implémentation, preuve LIVE/REAL ni `ADOPTED`.

| Jalon | Statut | Résultat/exit |
| --- | --- | --- |
| R0-A — méthode et rebaseline | **VALIDATED — ON MAIN via PR #636** | SEF v0.2 approuvé, frontières et périmètre Next décidés |
| R0-B — bootstrap gouverné | **CLOSED BY MORRIS GO — POST-MERGE VERIFIED** | PR #636 merged sur `main` ; SEF, Roadmap et naming validés ; vision + 3 PNG originaux et routage Next présents ; preuves Git post-merge ; pas de preuve produit LIVE/REAL ni de CI Next revendiquée |
| R1 — cadrage produit | **CLOSED BY MORRIS WITH CARRIED RESERVES — PR #639 MERGED / POST-MERGE VERIFIED** | Vision R1, neuf domaines et sept E2E ; `main@8751775…` prouvé, runtime Next non implémenté. |
| R2 — conception fonctionnelle | **CLOSED BY MORRIS — WITH CARRIED RESERVES ; PR #640 MERGED / POST-MERGE VERIFIED** | [Décision R2](decisions/2026-11-02-r2-functional-exit.md) ; 9 specs, 300 RG, 241 PF, 15 CKI et 50 relations validés ; réserves R3–R6 conservées. [PR #640](https://github.com/mcleland147/sfia-workspace/pull/640), CI applicable PASS (build historique SKIPPED), `main@455bb706ecdb13cc046b65b531e72ce96f4a4455` vérifié. R3 NOT STARTED. |
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
5. **R1 — CLOSED BY MORRIS / PR #639 MERGED ET POST-MERGE VÉRIFIÉ (2026-11-02)** — base `main@8751775…` ; **R2 fermé par Morris avec réserves puis PR #640 mergée et vérifiée** sur `main@455bb706ecdb13cc046b65b531e72ce96f4a4455`. Aucun choix d'architecture ni runtime adopté.

**Dépendance structurante :** décisions historiques H7/H8 et G0-A/B conservées en tant qu'historique ; leur portée pour la nouvelle architecture reste à arbitrer, sans supersession implicite. Ancien runtime v3 **NON ADOPTED**.

**Règle de mise à jour :** un statut ne devient PASSED/READY/ADOPTED qu'après preuve et décision ; mettre à jour cette roadmap dans le même macro-lot que le changement, sans cycle documentaire artificiel.

## R2 — consolidation documentaire (2026-11-02)

- **Base R1 :** PR #639 mergée sur `main@8751775edc314e8fc7f0855104e5000290be9839` ; branche R2 distincte.
- **R2 :** 9 specs individuelles validées par Morris, 300 RG, 241 PF documentaires après les 4 PF D3 approuvés ; sept E2E R1 non exécutés.
- **CKI :** 15 fiches et 50 relations `VALIDATED CONTENT v0.2` par Morris le 2026-11-02 ; preuve d'usage et de valeur cognitive à obtenir en R5/R6.
- **Gates :** clôture R2 Morris confirmée ; PR #640 et CI vérifiées, merge et lecture `main` réalisés. **L'entrée effective R3 UX demeure une décision distincte**, avec cadrage du premier macro-lot ; le produit Next reste non implémenté.

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

**Verdict post-merge : R0-B MERGED AND POST-MERGE GIT VERIFIED — CLOSURE FORMALIZED UNDER MORRIS GO (2026-11-01).** Cette synchronisation de statut est soumise aux contrôles Git d'intégration de la Roadmap ; elle n'entraîne aucune promotion du runtime. Réserves non bloquantes et traçables : paramètres ChatGPT non observables depuis Git ; pas de CI produit Next avant sa conception R4/R5 ; aucun comportement produit Next ni runtime ADOPTED revendiqué. **R1 NOT STARTED / REQUIRES ITS OWN GO.**


## R0-B — enregistrement de clôture post-merge (2026-11-01)

- **Autorité :** GO Morris donné en conversation pour formaliser la clôture après post-merge #636, puis GO complémentaire pour **publier cette seule synchronisation documentaire par PR et merge contrôlés** ; ce mandat n'autorise pas d'ouverture Delivery R1 ni de modification technique.
- **Preuve principale :** PR #636 merged ; `main@aeb4b81fd598f9440a23a6a7f1ce36da4de9a97c` observé ; 12 fichiers de la PR présents ; aucune modification de l'application historique dans le périmètre de la PR.
- **Livrables :** SEF v0.2, conventions de nommage validées, Roadmap Next, décisions, vision avec trois schémas originaux, routage SFIA v2.6 Next spécialisé sur guide/template canoniques.
- **Qualité limitée au périmètre R0-B :** Git post-merge et empreintes des actifs ; gate PR `SFIA Studio Required Gate` PASS avec build historique SKIPPED ; pas de pipeline ni de runtime Next à tester à ce jalon.
- **Reste à instruire, sans réouverture R0-B :** stratégie CI Next proportionnée aux capacités nouvelles (R4/R5), application des instructions ChatGPT si non déjà faite, conception fonctionnelle/UX/architecture et preuves futures.
- **Trajectoire :** R1 cadrage produit est le prochain jalon, **non engagé** tant que son propre périmètre, son contrat et son GO ne sont pas posés.
- **Traçabilité :** synchronisation documentaire bornée à `governance/roadmap.md` depuis `docs/sfia-studio-next-r0b-postmerge-closure-20261101`, issue du merge #636 (`aeb4b81…`) ; publication sous PR/merge distincts. L'intégration effective sur `main` est à établir par preuve Git post-merge, et non à déduire du contenu du présent document.


## R1 — cadrage produit : formal exit Morris et réserves reportées (2026-11-02)

- **Autorité et statut :** décision explicite Morris du 2026-11-02 : **R1 CLOSED BY MORRIS WITH CARRIED RESERVES** ; 9 domaines et 7 E2E validés ; critères de sortie évalués ; §2.39 et [Decision Record](decisions/2026-11-02-r1-cadrage-formal-exit.md). **L'exit décidé n'est ni merge déjà réalisé, ni R2 commencé, ni conformité Next démontrée.**
- **Référence unique de cadrage :** [`cadrage/vision-produit.md`](../cadrage/vision-produit.md), version documentaire 0.15 et §2.39 de sortie R1, sur la branche candidate jusqu'à preuve Git d'intégration. Aucun document parallèle de revue n'est requis ; les décisions et remplacements (dont simplification du journal) sont retracés dans le document vivant.
- **Acquis du périmètre :** cockpit sans Nora, sas pré-création récupérable, création explicite/fil continu ; un cycle actif et CKC de guidance non prescriptif ; production cognitive directe et restitution riche/proportionnée ; continuité des connaissances/decisions, journal Sujets/Décisions et points ouverts ; autorité du Pilote, contrat « Exécuter », suivi véridique de Cursor, revue de preuves, correction non lancée automatiquement ; identité GitHub par Pilote, Git facultatif, collaboration Git sans fusion des projets.
- **Revue transverse documentaire :** neuf domaines couverts au niveau cadrage par sept parcours de référence ; pas de contradiction structurante majeure identifiée. Cinq familles d'exceptions et six ensembles de risques/dépendances explicités en §2.37, notamment **identité/isolation Cursor CLI**, **continuité et autorité persistante**, **preuve/observabilité**, **concurrence Git**, **restitution interactive**, **sources/accès envisagés**. Résolution technique/UX reportée aux jalons R2–R6 selon la nature de chaque risque, **sans prétendre les capacités disponibles**.
- **Reprise méthodologique et instructions Nora — quatre qualifications R2 VALIDATED BY MORRIS (2026-11-02) :** (1) responsabilités/versions/provenance d'une méthode applicable et évaluation comparative **DoctrinePackage vs plus simple** ; (2) instructions opérationnelles de Nora : hiérarchie, composition, protection contre sources non fiables et séparation de la méthode de construction ; (3) adaptation ciblée SFIA v2.6 (nature du travail, profils, lenses, contrats, STOP, preuves), sans dépendance runtime ; (4) gouvernance des apprentissages/versions et des changements applicables sans promotion automatique. **R2 : contrats métier ; R3 : représentation utile ; R4 : mécanismes ; R5–R6 : preuves.** Aucun GO R2 ou choix d'architecture.
- **Critères d'exit R1 : CONSOMMÉS DANS LA DÉCISION MORRIS.** Vision et frontières approuvées, sept scénarios et exceptions, responsabilités cohérentes, risques/dépendances transférés, cohérence documentaire sur candidate. **Le GO de sortie est accordé avec réserves reportées**, sans prétendre à une spécification R2 ou un runtime prouvé.
- **Git vérifié pour la reprise :** branche `docs/sfia-studio-next-r1-vision-pilote-nora-01`, issue de la baseline `main@2f47d7e63663ed4a18aa1dad0409c12df2d7dfbe`, **non mergée** au moment de cette revue. HEAD et blobs des deux documents à relire après synchronisation ; état local **NON OBSERVÉ**.
- **Gates restants :** GO Morris de sortie R1 **accordé** ; autorisation de publication **commit/PR/merge avec contrôles** également accordée pour la branche R1 et son périmètre documentaire. **Restent à prouver :** PR, checks applicables, merge et relecture de `main`; puis lancer R2 sur la baseline intégrée. Pas de code Next, CI Next, UX/ADR adoptés ni preuve LIVE/REAL.

**Frontière de cette décision :** R0-B reste historique ; **R1 est clos sur décision de Morris avec réserves**, mais l'intégration Git doit être constatée après merge. Les validations R2/R4 et l'adoption runtime restent indépendantes. **La Roadmap doit être requalifiée sur preuves après chaque gate et R2 n'est pas engagé par le seul commit R1.**


## Décision R2 — clôture fonctionnelle confirmée (2026-11-02)

Morris valide la [sortie R2 avec réserves](decisions/2026-11-02-r2-functional-exit.md) et les quinze CKI en contenu ; la PR #640 a ensuite été **mergée le 2026-11-02T19:33:10Z et vérifiée sur `main@455bb706ecdb13cc046b65b531e72ce96f4a4455`**. Il s'agit d'une intégration Git documentaire, sans preuve de fonctionnement produit. L'entrée R3 UX reste à décider, sans automatisme.


## R2 — preuve post-merge Git #640 (constat du 2026-11-02)

- **Autorité :** sortie R2 avec réserves approuvée par Morris ; GO merge #640 expressément accordé dans la conversation. La décision [R2](decisions/2026-11-02-r2-functional-exit.md) conserve sa portée historique ; ce constat n'en modifie pas rétroactivement les autorisations.
- **Références :** [PR #640](https://github.com/mcleland147/sfia-workspace/pull/640) `merged=true` le `2026-11-02T19:33:10Z` ; branche candidate finale `sfia/next-r2-functional-specs@61e2848035b41a237fbfe09dca3ae52f19f04c54` ; merge `455bb706ecdb13cc046b65b531e72ce96f4a4455` ; parents `8751775edc314e8fc7f0855104e5000290be9839` et `61e2848035b41a237fbfe09dca3ae52f19f04c54`.
- **Équivalence des arborescences :** Git `tree=ffce65b39114773c56506ae12768d86fc0d886fd` identique sur le commit candidat et le commit de merge ; diff candidat → `main` ne contient aucun changement de fichier. `main@455bb706ecdb13cc046b65b531e72ce96f4a4455` lu après le merge.
- **Portée :** 32 fichiers Markdown dans `projects/sfia-studio-next/`, aucun fichier runtime, CI, chemin `method/` ou ancien Studio modifié. [Workflow #41510344563](https://github.com/mcleland147/sfia-workspace/actions/runs/41510344563) `SUCCESS` : détection `SUCCESS`, gate requis `SUCCESS`, build historique `SKIPPED` ; **aucune CI Next ni preuve produit LIVE/REAL**.
- **Vérifications documentaires :** [spécifications D1–D9](../conception-fonctionnelle/README.md), [corpus CKI](../cki/README.md), [matrice](../cki/relations-methodologiques-cki.md), [décision R2](decisions/2026-11-02-r2-functional-exit.md) et rapport de sortie effectivement accessibles sur `main` ; contenu conforme.
- **Suite :** gate Git R2 **ACQUIS — POST-MERGE VERIFIED**. **R3 UX NOT STARTED** : cadrer la capacité/parcours, risques, résultats, sources et critères UX avec Morris, sans démarrer de réalisation technique ou créer une architecture implicite.
