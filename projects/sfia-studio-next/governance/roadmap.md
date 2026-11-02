# SFIA Studio Next — Living Roadmap

**Nature :** feuille de route de construction Next ; distincte de `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`.

**État courant R1 au 2026-11-02 — branche candidate `docs/sfia-studio-next-r1-vision-pilote-nora-01` (hors `main`) :** R0-A **VALIDATED BY MORRIS** (SEF v0.2) et R0-B **CLOSED / POST-MERGE VERIFIED** sur preuves historiques. **R1 IN PROGRESS : neuf domaines et sept scénarios E2E validés**, revue de sortie candidate (§2.37) et **quatre exigences méthodologiques à qualifier en R2 explicitement ajoutées** (§2.38). **R1 EXIT NOT APPROVED ; R2 NOT STARTED**. Le GO documentaire ne valide pas un DoctrinePackage pour Next ni une architecture d'instructions. `main` demeure baseline jusqu'à PR/merge distincts ; les mentions historiques R0-B sont conservées comme traces de ce jalon.

| Jalon | Statut | Résultat/exit |
| --- | --- | --- |
| R0-A — méthode et rebaseline | **VALIDATED — ON MAIN via PR #636** | SEF v0.2 approuvé, frontières et périmètre Next décidés |
| R0-B — bootstrap gouverné | **CLOSED BY MORRIS GO — POST-MERGE VERIFIED** | PR #636 merged sur `main` ; SEF, Roadmap et naming validés ; vision + 3 PNG originaux et routage Next présents ; preuves Git post-merge ; pas de preuve produit LIVE/REAL ni de CI Next revendiquée |
| R1 — cadrage produit | **IN PROGRESS — NINE-DOMAIN IN/OUT + E2E 01–07 VALIDATED ; R2 METHODOLOGICAL CARRY-FORWARD VALIDATED ; EXIT GATE NOT APPROVED** | [Vision produit](../cadrage/vision-produit.md) §§2.29–2.38 : périmètre, sept scénarios et quatre axes R2 de qualification méthodologique. **Clôture, PR/merge et GO R2 distincts, non accordés.** |
| R2 — conception fonctionnelle | **NOT STARTED — FOUR REQUIRED QUALIFICATIONS DOCUMENTED, NOT YET DESIGNED** | Règles, décisions, contrats, exceptions, continuité ; qualifier **(1) méthode applicable et option DoctrinePackage, (2) instructions opérationnelles Nora, (3) héritage SFIA v2.6 proportionné, (4) gouvernance de l'évolution méthodologique** (§2.38). Aucune architecture ou implémentation anticipée. |
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
5. **R1 — VISION + CARTE DES NEUF DOMAINES + SEPT E2E VALIDÉS ; REVIEW CANDIDATE PREPARED (2026-11-02)** — vision documentée sur la branche candidate, sans équivalence à `main`. **Nora uniquement dans sas/projet**, création explicite avec sas récupérable ; cycle actif unique et CKC lié ; production cognitive et restitution structurée adaptative ; mémoire du projet et journal **deux vues Sujets/Décisions + points ouverts transversaux** ; contrats techniques inspectables, clic « Exécuter », Cursor sous droits propres, revue de preuves et acceptation humaine ; **projets Studio personnels, Git facultatif, dépôts partagés mais droits/décisions non transférables**. La carte IN/OUT (§2.29) et les sept scénarios (§§2.30–2.36) sont **VALIDATED BY MORRIS**. La revue des risques/exceptions, dépendances R2–R6 et proposition des critères de sortie est **PRÉPARÉE, NON VALIDÉE COMME EXIT** (§2.37). **Complément de revue pré-exit : quatre exigences R2 validées comme carry-forward (§2.38) ; DoctrinePackage, mécanisme d'instructions et doctrine produit non adoptés par défaut.** **Next NON IMPLÉMENTÉ ; R2 NOT STARTED**. Suite : validation Morris de l'exit R1, puis gates Git de PR/merge/post-merge et GO R2 **séparés** ; aucun statut de produit ADOPTED.

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

**Verdict post-merge : R0-B MERGED AND POST-MERGE GIT VERIFIED — CLOSURE FORMALIZED UNDER MORRIS GO (2026-11-01).** Cette synchronisation de statut est soumise aux contrôles Git d'intégration de la Roadmap ; elle n'entraîne aucune promotion du runtime. Réserves non bloquantes et traçables : paramètres ChatGPT non observables depuis Git ; pas de CI produit Next avant sa conception R4/R5 ; aucun comportement produit Next ni runtime ADOPTED revendiqué. **R1 NOT STARTED / REQUIRES ITS OWN GO.**


## R0-B — enregistrement de clôture post-merge (2026-11-01)

- **Autorité :** GO Morris donné en conversation pour formaliser la clôture après post-merge #636, puis GO complémentaire pour **publier cette seule synchronisation documentaire par PR et merge contrôlés** ; ce mandat n'autorise pas d'ouverture Delivery R1 ni de modification technique.
- **Preuve principale :** PR #636 merged ; `main@aeb4b81fd598f9440a23a6a7f1ce36da4de9a97c` observé ; 12 fichiers de la PR présents ; aucune modification de l'application historique dans le périmètre de la PR.
- **Livrables :** SEF v0.2, conventions de nommage validées, Roadmap Next, décisions, vision avec trois schémas originaux, routage SFIA v2.6 Next spécialisé sur guide/template canoniques.
- **Qualité limitée au périmètre R0-B :** Git post-merge et empreintes des actifs ; gate PR `SFIA Studio Required Gate` PASS avec build historique SKIPPED ; pas de pipeline ni de runtime Next à tester à ce jalon.
- **Reste à instruire, sans réouverture R0-B :** stratégie CI Next proportionnée aux capacités nouvelles (R4/R5), application des instructions ChatGPT si non déjà faite, conception fonctionnelle/UX/architecture et preuves futures.
- **Trajectoire :** R1 cadrage produit est le prochain jalon, **non engagé** tant que son propre périmètre, son contrat et son GO ne sont pas posés.
- **Traçabilité :** synchronisation documentaire bornée à `governance/roadmap.md` depuis `docs/sfia-studio-next-r0b-postmerge-closure-20261101`, issue du merge #636 (`aeb4b81…`) ; publication sous PR/merge distincts. L'intégration effective sur `main` est à établir par preuve Git post-merge, et non à déduire du contenu du présent document.


## R1 — cadrage produit : état courant et revue de sortie candidate (2026-11-02)

- **Autorité et statut :** principes de vision, **neuf domaines IN/OUT** (§2.29) et **sept scénarios E2E** (§§2.30–2.36) approuvés explicitement par Morris. La consolidation transversale (§2.37) et les **critères de sortie proposés** sont **PREPARED FOR MORRIS EXIT REVIEW**, pas une validation de clôture. **R1 IN PROGRESS ; R2 NOT STARTED**.
- **Référence unique de cadrage :** [`cadrage/vision-produit.md`](../cadrage/vision-produit.md), version documentaire 0.14 enrichie sur cette branche candidate. Aucun document parallèle de revue n'est requis ; les décisions et remplacements (dont simplification du journal) sont retracés dans le document vivant.
- **Acquis du périmètre :** cockpit sans Nora, sas pré-création récupérable, création explicite/fil continu ; un cycle actif et CKC de guidance non prescriptif ; production cognitive directe et restitution riche/proportionnée ; continuité des connaissances/decisions, journal Sujets/Décisions et points ouverts ; autorité du Pilote, contrat « Exécuter », suivi véridique de Cursor, revue de preuves, correction non lancée automatiquement ; identité GitHub par Pilote, Git facultatif, collaboration Git sans fusion des projets.
- **Revue transverse documentaire :** neuf domaines couverts au niveau cadrage par sept parcours de référence ; pas de contradiction structurante majeure identifiée. Cinq familles d'exceptions et six ensembles de risques/dépendances explicités en §2.37, notamment **identité/isolation Cursor CLI**, **continuité et autorité persistante**, **preuve/observabilité**, **concurrence Git**, **restitution interactive**, **sources/accès envisagés**. Résolution technique/UX reportée aux jalons R2–R6 selon la nature de chaque risque, **sans prétendre les capacités disponibles**.
- **Reprise méthodologique et instructions Nora — quatre qualifications R2 VALIDATED BY MORRIS (2026-11-02) :** (1) responsabilités/versions/provenance d'une méthode applicable et évaluation comparative **DoctrinePackage vs plus simple** ; (2) instructions opérationnelles de Nora : hiérarchie, composition, protection contre sources non fiables et séparation de la méthode de construction ; (3) adaptation ciblée SFIA v2.6 (nature du travail, profils, lenses, contrats, STOP, preuves), sans dépendance runtime ; (4) gouvernance des apprentissages/versions et des changements applicables sans promotion automatique. **R2 : contrats métier ; R3 : représentation utile ; R4 : mécanismes ; R5–R6 : preuves.** Aucun GO R2 ou choix d'architecture.
- **Critères candidats d'exit R1 :** vision et frontières approuvées ; sept parcours et exceptions significatives ; responsabilités/autorité/continuité cohérentes ; risques/dépendances assignés aux étapes suivantes ; documentation et statuts candidats cohérents avec `main` distingué ; **décision Morris explicite de sortie**. Ces critères restent **soumis à arbitrage Morris**, sans création de gate automatique.
- **Git vérifié pour la reprise :** branche `docs/sfia-studio-next-r1-vision-pilote-nora-01`, issue de la baseline `main@2f47d7e63663ed4a18aa1dad0409c12df2d7dfbe`, **non mergée** au moment de cette revue. HEAD et blobs des deux documents à relire après synchronisation ; état local **NON OBSERVÉ**.
- **Gates restants :** (1) validation Morris du contenu/critères et **GO distinct de clôture R1** ; (2) autorisation Git spécifique pour **PR, merge et relecture post-merge** ; (3) décision de démarrer R2 avec contrat de sortie fonctionnelle, **non déduite** du cadrage. Pas de code Next, CI Next, UX/ADR adoptés ou preuve LIVE/REAL.

**Frontière de l'actualisation documentaire :** l'état historique de clôture R0-B figurant plus haut est conservé comme trace de son propre jalon ; il ne doit pas être confondu avec l'état R1 actuel. Cette mise à jour R1 est une **synchronisation d'état sans promotion**.
