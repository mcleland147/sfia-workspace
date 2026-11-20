# SFIA Studio Next — Ensemble 06
## Procès-verbal de recette utilisateur — Journal V4 et Bibliothèque Documents

| Champ | Valeur |
| --- | --- |
| Date de décision utilisateur | **20 novembre 2026** |
| Autorité | **Morris — acceptation utilisateur explicitement exprimée** |
| Périmètre | Ensemble 06 : **Journal V4 (Sujets et Décisions)** + **Bibliothèque Documents** |
| Verdict utilisateur | **MORRIS UAT ACCEPTED — ENSEMBLE 06, WITH GOVERNED RESERVES** |
| Statut technique | Candidat local combiné **RECETTE SERVED** selon le rapport Cursor ; **code non mergé** |
| Statut Git du présent PV | Document de traçabilité utilisateur, sur branche documentaire candidate ; n'emporte ni intégration du code ni clôture Git |
| Repository | `mcleland147/sfia-workspace` |
| Base Git du PV | `main@d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Processus | SEF v0.2 ; SFIA v2.6 ; ENV-01 ; décisions et contrat UX existants |

> **Décision Morris, 20/11/2026 :** après avoir réalisé les parcours de recette, Morris indique ne relever aucune anomalie bloquante, majeure ou mineure à corriger avant de poursuivre, se déclare satisfait du fonctionnement et du rendu, **accepte Documents et accepte l'Ensemble 06 dans son état actuel, Journal et Documents compris**. Il demande la consolidation Git et la préparation du merge. Cette acceptation produit/utilisateur n'est pas un merge, un statut `ADOPTED`, une release ou une promotion STABLE.

### 1. Référence du candidat réellement évalué

La mise à disposition RECETTE est documentée par le [Review Handoff Ensemble 06 du 20/11](https://github.com/mcleland147/sfia-workspace/blob/3bc3af408346385d1fcc6f9dfd203e5c3182473e/sfia-review-handoff/latest-chatgpt-review.md), contrôlé sur GitHub, blob `3724604ca391aa18b5d17428ffabdb18b5aaa9e6`.

| Identité | Valeur rapportée par Cursor |
| --- | --- |
| Candidat combiné local, tip | `aa568cfab37bec1922b2a6886c621dc7d9d37088` |
| Commit code combiné | `7a13d7deec488bf62881eec11b5658c45c02c5b0` |
| Tree candidat | `6e1b2bed614ccf78339a6e95c4081860520515e7` |
| Branche locale | `sfia/next-ensemble06-journal-docs-recette-20261120` |
| URL | `http://127.0.0.1:3200` |
| Next BUILD ID | `t4pjnrn3wGVHZEjhiw6yH` |
| Lane | RECETTE — LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004` |
| PostgreSQL | `sfia_next_recette_ml4` @ `127.0.0.1:5434` |
| Migration | 014 préexistante ; aucune nouvelle migration Documents |
| Protection | Dump de sauvegarde et ancien build Journal conservés selon le handoff |

**Limite d'observation :** l'identité du processus local, les fichiers worktree et l'état de la base après les essais Morris ne sont pas directement observés depuis GitHub. Le SHA candidat est déclaré par Cursor mais son commit n'est pas publié sur une branche projet distante au moment de cette rédaction. Les inventaires avant/après du déploiement (`24 projets / 612 messages / 117 documents / 188 révisions`) précèdent la recette utilisateur et **ne doivent pas être présentés comme un inventaire post-UAT**.

### 2. Parcours réalisés et décision Morris

| UAT | Parcours | Observation utilisateur / preuve disponible | Verdict |
| --- | --- | --- | --- |
| E06-UAT-01 | **Journal V4 — non-régression** | Morris déclare le parcours vérifié et satisfaisant ; conservation de l'acceptation Journal du 19/11, Sujets et Décisions. | **PASS MORRIS** |
| E06-UAT-02 | **Bibliothèque et lecture** | Sélection sans ouverture automatique, fiche contextuelle, lecture seule et actions. Captures réelles CampusFlow : bibliothèque de trois documents, sélection de « Références externes — Enseignements de Chantiers360 », lecture V2. | **PASS MORRIS** |
| E06-UAT-03 | **Historique et comparaison** | Captures CampusFlow : historique V2 courante / V1 historique, comparaison en deux colonnes, modifications indiquées ; Morris juge le parcours satisfaisant. | **PASS MORRIS** |
| E06-UAT-04 | **Travail avec Nora — version historique** | Reprise dans le fil du projet, affichage 50/50. Morris déclare avoir vérifié la révision depuis une base historique. Les captures illustrent le fil unique et la visionneuse, mais ne documentent pas chaque transition de confirmation. | **PASS MORRIS — déclaration utilisateur** |
| E06-UAT-05 | **Conservation et continuité** | Morris déclare le parcours testé et satisfaisant, y compris conservation explicite et reprise ; les assertions transactionnelles détaillées relèvent des tests PG/E2E Cursor. | **PASS MORRIS — déclaration utilisateur** |

**Périmètre de données :** les captures de Documents fournies lors de la recette concernent **CampusFlow** ; la recette Journal antérieure concernait **CampusNova**. Ne pas substituer un projet à l'autre ni prétendre à des captures CampusNova Documents qui ne sont pas présentes.

**Portée de PASS MORRIS :** validation des cinq parcours regroupés tels qu'exécutés par Morris, sans attribution artificielle d'un PASS humain individuel à l'ensemble des 18 scénarios techniques contractuels.

### 3. Contrat UX et construction : qualification de sortie

Sources de conception :
- [Contrat Documents](https://github.com/mcleland147/sfia-workspace/blob/6516c7b56ec61bd72943ae0d26e625bf21139d4e/projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-contrat-realisation.md), validé en contenu par Morris ; statut Git de branche candidate conservé.
- [Dossier recette Journal V4](https://github.com/mcleland147/sfia-workspace/blob/docs/next-journal-v4-recette-20261119/projects/sfia-studio-next/validation-qualite/journal-v4-recette-utilisateur-20261119.md), acceptation utilisateur du 19/11 avec réserves historiques.
- Figma Documents : fichier `itgvCulInEnFY6DvgIegvP`, page 08, huit frames `930:3` à `930:10`.
- Figma Journal : même fichier, page `828:2`, onze frames.

**Verdict de réalisation :** surfaces principales Documents **IMPLEMENTED / BROWSER COVERAGE VERIFIED sur scénarios rapportés / MORRIS UAT ACCEPTED**. Journal V4 **MORRIS UAT ACCEPTED WITH RESERVES**. Les preuves Cursor unitaires, PostgreSQL et Playwright ne sont pas assimilées à une campagne fournisseur Nora LIVE exhaustive. F2 pixel-perfect exhaustif, comportement REAL global et adoption production ne sont pas revendiqués.

**Invariants à conserver à l'intégration :** un seul fil Nora par projet ; Documents sans édition manuelle dans l'Espace Projet ; D4 possède versions, provenance, candidats et conservation ; choix historique explicite ; proposition non enregistrée avant conservation ; contrôle d'idempotence/concurrence ; D6 conserve l'autorité des décisions ; aucune publication D9/Git implicite.

### 4. Réserves acceptées et limites de preuve

| Identifiant | État | Traitement |
| --- | --- | --- |
| `DOC-TECH-15` — comparaison volumineuse | **NOT RUN** au dernier handoff | Réserve de couverture ; à qualifier si un document volumineux est concerné, sans faux PASS |
| `DOC-TECH-16` — navigation rapide multi-documents | **PARTIAL** au dernier handoff | Réserve de couverture ; surveiller race A/B et retour navigateur, sans faux PASS |
| Journal V4 — R-01 à R-11 | **Réserves historiques gouvernées** | Conserver la liste et les conditions d'exit du dossier Journal du 19/11 ; ne pas les effacer par l'acceptation globale |
| Sas de préparation — édition documentaire manuelle | **KNOWN GAP hors scope** | Ne pas déclarer ce comportement corrigé par les surfaces Documents Projet ; cadrer un éventuel traitement transversal ultérieur |
| Comparaison F2 exhaustive et responsive complexe | **NON EXHAUSTIF** | Morris juge l'UX satisfaisante pour la RECETTE actuelle, sans preuve pixel-perfect universelle |
| Nora LIVE/REAL globale | **NOT PROVEN** | La recette Morris est une observation réelle des parcours, pas une campagne technique de qualification LIVE/REAL générale |

Ces réserves sont **acceptées pour la poursuite de l'intégration Git**, non déclarées résolues. Aucune nouvelle correction ou extension de périmètre n'est autorisée par ce PV.

### 5. Tests et preuve de mise à disposition

Le handoff Cursor de mise en RECETTE rapporte : TypeScript PASS, 93 tests unitaires Docs+Journal PASS, intégration PostgreSQL Docs/Journal PASS, Playwright Documents 08/Nora/P0 PASS, E2E Journal V4 PASS et build Next PASS. Les tests de la proposition historique, du candidat scellé et de la conservation exacte sont qualifiés au niveau de leur assertion. Ces résultats sont des **preuves rapportées**, pas des tests réexécutés par ChatGPT.

La mise en RECETTE a conservé le même service, le même port, la base et les inventaires au point de déploiement ; son rollback code renvoie au build Journal `5f6e2f38…`. Aucune promotion STABLE.

### 6. Décision Morris et gates restants

**Décision du 20/11/2026 :**
1. **Journal V4 : ACCEPTÉ** dans son état utilisateur antérieurement reçu avec réserves.
2. **Documents : ACCEPTÉ** ; aucun défaut observé ne motive un correctif pré-merge.
3. **Ensemble 06 : ACCEPTÉ PAR MORRIS**, **avec réserves gouvernées conservées**.
4. **Consolidation Git et préparation PR : GO exprimé par Morris** dans le chat du 20/11. Ce GO ne vaut pas merge ni promotion.

**À qualifier avant toute PR de code :** disponibilité du candidat local et relation à `main` courant ; inventaire de toutes les modifications Journal+Documents ; source des contrats UX ; synchronisation as-built/delivery-history ; compatibilité des frontières ; tests/CI sur le tree exact ; éventuels écarts de rebase/merge ; absence de fichiers temporaires et de secrets ; cohérence des réserves.

**Gate restant :** revue indépendante du candidat Git publiable et de sa CI, puis **GO Morris spécifique du merge**. Après merge : post-merge, correction documentaire factuelle éventuelle, sans prétendre à STABLE/ADOPTED.

### 7. Statut de sortie de cette pièce

- `USER ACCEPTANCE: ACCEPTED WITH GOVERNED RESERVES`
- `CONSTRUCTION: IMPLEMENTED ON LOCAL CANDIDATE / REPORTED VERIFIED`
- `RECETTE: SERVED / USER ACCEPTED`
- `PROJECT GIT INTEGRATION: NOT YET VERIFIED`
- `MERGE: NOT AUTHORIZED`
- `STABLE / RELEASE / ADOPTED: NOT ACQUIRED`

Ce PV constitue **une trace de la décision utilisateur**, pas une décision d'architecture, une mise à jour normative de Roadmap, un nouveau contrat D6 ou une preuve de publication du candidat code.
