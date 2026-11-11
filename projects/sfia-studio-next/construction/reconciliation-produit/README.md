# SFIA Studio Next — Réconciliation produit R5 (ML4B)

**Nature :** dossier de diagnostic documentaire D1, non normatif.
**Ouverture :** 10 novembre 2026.
**Baseline d'analyse :** `mcleland147/sfia-workspace`, `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` (après PR #673).
**Branche candidate :** `docs/next-reconciliation-produit-ml1-20261110`.
**État :** `DOCUMENTED / CP1 SYNTHESIS CANDIDATE FOR MORRIS REVIEW / GATE B NOT HELD / NO PRODUCT CHANGE`.
**Environnement local, runtime, DB et navigateur :** `NON OBSERVÉS`.

> **MISE À JOUR DE GOUVERNANCE DU 11/11/2026 (postérieure au diagnostic CP1) :** Morris a validé **ML4C fonctionnel intégré, puis ML4D UX/UI global**, dans la [décision complémentaire](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md). **Ce choix remplace les options A/B/C comme trajectoire de réalisation uniquement** ; les 628 références indexées, sept E2E/43 étapes, X-01..08 et leurs statuts de preuve restent inchangés. Inclure cockpit/portefeuille, accès, sas et navigation en ML4C lorsqu'un écart fonctionnel ou d'UX bloquante l'exige, puis reprendre toutes les surfaces applicables en ML4D pour la fidélité Figma. **CP1/Gate B non acceptés par ce seul arbitrage ; aucun GO de construction.**

## 1. Résultat du dossier et frontière

Conformément à la [décision CP0](../../governance/decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md), ML4B confronte la **vision R1, les contrats R2, la conception UX R3, l'architecture R4, les contrats R5, le code intégré, les tests et les comportements réellement prouvés**.

L'unité de restitution est la **fonctionnalité vérifiable** ; chaque fonctionnalité doit retrouver les exigences RG/PF individuelles, ses réalisations réelles et ses preuves ou réserves. Une synthèse au seul niveau ML1–ML4 est insuffisante.

**IN :** reconstitution des contrats initiaux et décisions d'évolution, inspection des services/routes/données/UX, analyse des résultats et preuves, recherche des écarts fonctionnels, techniques, cognitifs et visuels.

**OUT :** correction du produit, modification normative R1/R2/R4/SEF, nouvelle décision Morris, construction ML4C/ML5, test LIVE/REAL ou preuve navigateur inventée, PR/merge/promotion/ADOPTED implicites.

**Sortie attendue :** diagnostic CP1 complet et arbitrable par Morris au gate B ; pas de nouveaux macro-lots ou micro-cycles par écran.

## 2. Sources canoniques et hiérarchie

- [SEF v0.2](../../governance/SEF.md) : macro-lots, niveaux D0–D3, distinction des preuves et statuts.
- [Roadmap Next](../../governance/roadmap.md) et [décision CP0](../../governance/decisions/2026-11-10-r5-reconciliation-convergence-trajectory.md) : trajectoire et gates.
- [Vision produit R1](../../cadrage/vision-produit.md), [schémas fondateurs](../../cadrage/vision-cible/README.md) : neuf domaines, E2E et expérience Pilote–Nora.
- [Index des neuf spécifications R2](../../conception-fonctionnelle/README.md) et documents propriétaires : **texte/autorité canoniques** des règles RG et parcours PF.
- [Référence delivery R5 §4](../reference-delivery-r5.md) : **schéma de traçabilité existant** à réutiliser, sans seconde méthode.
- Matrices et contrats propres à chaque macro-lot : [ML1](../ml1-entree-et-continuite/matrice-tracabilite.md), [ML2](../ml2-production-et-capitalisation-nora/matrice-tracabilite.md), [ML3](../ml3-pilotage-et-decisions/tracabilite-r2-r3-r4.md), [ML4](../ml4-integration-git/matrice-acceptation.md).
- [Dossier convergence UX](../convergence-ux-parcours-pilote-nora/qualification.md) et [as-built G4](../convergence-ux-parcours-pilote-nora/as-built-g4-figma-ux-transposition-2026-11-08.md) : transposition déclarée, **pas preuve de fidélité navigateur**.
- `web/` : fichiers d'application et de tests effectivement présents au SHA précisé.

L'autorité est **Git et preuves → décisions Morris → specs et documents → hypothèses**. Une exigence a un propriétaire R2 unique, mais peut contribuer à plusieurs capacités/lot : liens N↔N, sans règle ou test dupliqué artificiellement.

## 3. Méthode de réconciliation détaillée

La lecture suit **trois étages** : (1) résultat et périmètre du macro-lot ; (2) capacité fonctionnelle vérifiable ; (3) RG/PF individuelles, code, interfaces, données, scénario nominal/négatif et preuves.

Chaque enregistrement de capacité doit porter :

| Champ | Contenu attendu |
| --- | --- |
| Identité et source | `coverageId`, ML, propriétaire, fonctionnalité, référence R1/E2E, RG/PF R2 et décisions d'évolution |
| Conception | Contrat théorique R5, frontière IN/OUT, UX Figma R3 frames/variantes, invariants R4 |
| Réalisation | SHA et chemins de code (API, service, DB, UI), effets/rôles, erreurs, reprise, idempotence |
| Preuve | Test exact, résultat, SHA/lane/données/identité, niveau DETERMINISTIC/INTEGRATION/BROWSER/LIVE/REAL, limites |
| Qualification | `DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED` distincts |
| Écart et sortie | Absence, contradiction, preuve manquante ou différé justifié ; impact, propriétaire, risque, condition de sortie et gate |

**Exhaustivité descendante :** aucune RG/PF applicable ne reste sans rattachement, différé explicite ou écart. **Exhaustivité remontante :** tout mécanisme important dans le code retrouve sa justification produit et son propriétaire, ou est signalé comme développement non justifié.

Le code présent ne démontre pas son usage réel ; un test BROWSER FAKE ne prouve pas Nora LIVE ; un effet Git observé ne prouve ni conformité ni acceptation. Des exigences distinctes peuvent être couvertes par un seul scénario discriminant, sans obligation d'un test par phrase.

## 4. Dossiers de capacités et progression

| Ensemble | Restitution actuelle | État |
| --- | --- | --- |
| **ML1 — Accès, sas, création et continuité** | [Diagnostic ML1](ml1/diagnostic-acces-preparation-creation.md), [D1 (55)](ml1/verification-detaillee-acces-portefeuille.md), [D2 (60)](ml1/verification-detaillee-sas-creation-continuite.md), [E2E01/D3–D4](ml1/reconciliation-e2e01-nora-connaissance.md), [Consolidation ML1↔ML2–ML4](ml1/consolidation-capacites-reserves-ml2-ml4.md) | **115/115 IDs D1/D2 rattachés ; 8/8 capacités ML1 et A01–A16 consolidés** avec apports ML2–ML4 et réserves. **Ni conformité LIVE globale, ni Figma, ni gate CP1** |
| **ML2 — Production et capitalisation** | [17 capacités](ml2/diagnostic-ml2-contrats-capacites.md) · [Consolidation ML2/QA/réserves](ml2/consolidation-capacites-qa-reserves-ml2-ml4.md) · [D3 : 118 RG/PF](ml2/verification-detaillee-conduite-nora-d3.md) · [D4 : 46 RG/PF](ml2/verification-detaillee-connaissance-d4.md) · [E2E03 + E2E04](ml2/reconciliation-e2e03-e2e04-preuves.md) | **17/17 capacités, Q01–Q29, COG-01–07, OBS-Q01–12 rapprochés des preuves**, 164/164 références D3/D4 rattachées et 12 étapes E2E étudiées ; conformité LIVE globale et Figma/runtime non certifiées, CP1 ouvert |
| **ML3 — Pilotage et décisions** | [Diagnostic détaillé D5/D6 : 136 références](ml3/diagnostic-pilotage-decisions-d5-d6.md) · [E2E02/E2E04 : continuité et autorité Git](ml3/reconciliation-e2e02-e2e04-continuite-autorite-git.md) · [Matrice ML3](../ml3-pilotage-et-decisions/tracabilite-r2-r3-r4.md) · [Décision Morris](../../governance/decisions/2026-11-07-pilotage-decisions-formal-exit.md) | **136/136 références D5/D6 et 12/12 étapes R1 E2E02/E2E04 rapprochées**, 18 oracles QA et LIVE 8/8 + C03 requalifiés ; **4 constats transverses principaux, 2 réserves complémentaires**, preuves UX/LIVE globales manquantes |
| **ML4 — Collaboration et Git** | [Diagnostic capacités/22 QA/E2E07](ml4/diagnostic-capacites-qa-recette-ml4.md) · [213 références R2 D7/D8/D9](ml4/inventaire-r2-d7-d8-d9.md) · [Registre historique de RECETTE](../ml4-integration-git/recette-ml4-r01-r14-anomalies.md) | **213/213 références R2 indexées, 22/22 critères ML4-AT qualifiés, E2E07 7/7 étapes rapprochées** ; REAL documentaire borné historique, G1 ciblé ; **R12 Git/R13/R14 USER non exécutés**, merge REAL hard-blocked, UX Figma non certifiée ; **ML4 non accepté globalement** |
| **Synthèse transverse R1 → Gate B** | [Sept parcours et 43 étapes, 628 IDs R2, options de convergence](transversal/synthese-r1-e2e-gate-b.md) | **Neuf domaines rattachés, huit familles d'écarts non dupliquées et trois options de macro-lots A/B/C** ; dossier documentaire **candidat à revue Morris**, conformité E2E/Figma globale non prouvée, gate B non tenu |
| **UX transversal** | [G4 as-built](../convergence-ux-parcours-pilote-nora/as-built-g4-figma-ux-transposition-2026-11-08.md) | 19/20 frames **déclarées** implémentées, 1 partielle ; F2/G5 NOT RUN : aucune conformité visuelle acquise |

**Statuts historiques à préserver :** ML1 fermé Morris avec réserves (#649) ; ML2 accepté fonctionnellement avec réserves (#659), sans clôture nouvelle inférée ; ML3 fermé avec réserves (#661) ; ML4 code intégré mais recette globale non acceptée. Aucun ADOPTED.

## 5. Registre initial des constats à instruire

| Repère analytique | Type | Constats | Preuve actuelle |
| --- | --- | --- | --- |
| `REC-ML1-DOC-01` | Couverture R2 | Inventaire D1/D2 103 IDs ; 12 autres IDs candidats, apparus dans les addenda du 05/11 | **SOURCE VERIFIED** ; ne pas assimiler candidats aux 103 approuvés |
| `REC-ML1-CODE-01` | Métier/UX | Statuts projet Actif/En réflexion/À reprendre générés selon la position dans le tableau ; contradiction `RG-ACC-013` | **KNOWN GAP — CODE INSPECTED** ; BROWSER NOT RUN |
| `REC-ML1-CODE-02` | Erreurs D1/D2 | `POST /api/preparations` et certaines routes GET/PATCH du sas renvoient 401 `SESSION_INVALID` pour une erreur non-authentification | **KNOWN GAP — CODE INSPECTED** ; injection panne NOT RUN |
| `REC-UX-PROOF-01` | Conformité visuelle | Couverture G4 ≠ comparaison Figma/runtime | **NOT VERIFIED** |
| `REC-ML4-PROOF-01` | Effets Git | Publication/PR/merge non entièrement qualifiés par la campagne ML4 | **INCOMPLETE PROOF** |

Les IDs `REC-*` sont des **repères de diagnostic**, ni des noms de composants ni des règles métier. La criticité et les actions ML4C ne sont pas arbitrées par leur enregistrement.

## 5.1. Revue individualisée D1 — publication du 10/11/2026

La [matrice des 55 références D1](ml1/verification-detaillee-acces-portefeuille.md) conserve une ligne par `RG-ACC`/`PF-ACC` : contrat source, module concerné, test disponible et limite. Elle distingue **49 historiques VALIDATED SPEC** et **6 candidats**. L'analyse de code relève cinq constats (deux contradictions établies et trois risques/observations complémentaires), détaillés avec frontières de preuve ; aucune nouvelle exécution LIVE, BROWSER ou Figma.

**Important :** `55/55 SOURCE MAPPED` n'est **pas** `55/55 COVERAGE VERIFIED` ni `BEHAVIOR PROVEN`. Le dossier passe ensuite à D2, sans lancer de correctifs ni conclure CP1.

## 5.2. Réconciliation individualisée D2 — publication du 10/11/2026

La [matrice des 60 références D2](ml1/verification-detaillee-sas-creation-continuite.md) rattache **54 RG/PF historiques validés + 6 candidats** aux chemins de préparation, commande, idempotence, reprise, connaissance, Nora et preuves disponibles. Elle documente cinq découvertes de niveaux distincts : classification API des erreurs, parcours client d'ACK perdu, concurrence des propositions, atomicité de création du sas, distinction entre projet créé et continuation de mission.

**État du corpus ML1 : 55 références D1 + 60 références D2 = 115/115 identifiants répertoriés individuellement**, avec contrats propriétaires R2 inchangés. Les risques partagés (401 technique D1/D2) sont **corrélés, pas additionnés artificiellement**. Aucune exécution LIVE/REAL ou Figma, et aucune preuve de conformité complète, n'en découlent. La suite est la réconciliation profonde D3/D4, E2E01 et les preuves Figma/runtime.

## 5.3. Réconciliation E2E01 — interfaces Nora D3 et connaissance D4

Le [diagnostic E2E01/D3–D4](ml1/reconciliation-e2e01-nora-connaissance.md) confronte les **six étapes nominales et six exceptions de R1 §2.30** aux contrats D1/D2, interfaces D3/D4 et mécanismes R5 actuellement intégrés. Il préserve la différence entre **fil durable**, **sélection cognitive D4 réellement utile**, **vérité D2 du projet créé**, **continuation D3/D4** et **absence d'autorité Git/cycle induite**.

**Constats transverses :** sélection de contexte/capitalisation **lexicale bornée** (pertinence LIVE non démontrée), lecture Git Nora du sas pré-projet non établie dans le chemin inspecté, manque de preuve E2E01 LIVE complet, distinction projet créé/mission composite, comparaison Figma/runtime encore absente. Ces repères de **couverture** ne doublonnent pas les écarts D1/D2 déjà enregistrés.

**Limite :** D3/D4 ne sont pas audités exhaustivement ici : ce sont les interfaces pertinentes pour ML1/E2E01. Leur autonomie sémantique, mémoire vivante et restitution cognitive restent à reconcilier en profondeur avec **ML2**, avec ses propres contrats et preuves. `NO CP1 EXIT / NO ADOPTED`.

## 5.4. Consolidation ML1 : huit capacités et réserves face aux apports ML2–ML4

Le [bilan de consolidation ML1](ml1/consolidation-capacites-reserves-ml2-ml4.md) relie **chaque capacité historique**, les **16 oracles A01–A16**, les réserves ENV/CI/UX et les constats utilisateur ML4 aux mécanismes et preuves réellement introduits dans ML2–ML4. Il conserve **sans les réécrire** les verdicts PASS/PARTIAL/OUT de ML1 et les contrats normatifs D1/D2/D3/D4/D5/D6/D9.

**Distinctions structurantes :** fil et document durables ≠ mémoire cognitive pertinente ; test de rejeu PG ≠ perte d'ACK avec reprise navigateur ; création D2 réelle ≠ mission D3/D4 terminée ; validation de transposition G4 ≠ conformité Figma ; **CI Next et isolation de cookie DEV par lane ont progressé**, sans passer automatiquement en STABLE/R6. La **contradiction ACK D4 / narration Nora** a été observée en RECETTE ML4 et reste une réserve transverse ouverte.

**Avancement :** `ML1 8/8 CAPACITIES CONSOLIDATED / QA A01–A16 RECONCILED / NO GLOBAL BEHAVIOR PROVEN / CP1 IN PROGRESS`. **Prochaine analyse en profondeur : ML2**, sur les mêmes exigences de granularité et preuve, puis ML3/ML4 et le gate B.

## 5.5. ML2 — Contrats, 17 capacités et revue individuelle D4

Le [premier diagnostic ML2](ml2/diagnostic-ml2-contrats-capacites.md) reconstitue les **17 capacités R5 ML2-COH-01..17** du travail Nora, documents, connaissance et interfaces, avec les codes réellement présents, les suites de tests et les limites de leurs preuves historiques. Les sources R2 D3 et D4 montrent **164 références documentaires** au total, dont certaines sont candidates ou relèvent fonctionnellement d'autres macro-lots ; ce nombre n'est pas un score de conformité.

La [matrice D4](ml2/verification-detaillee-connaissance-d4.md) vérifie **46/46 IDs** (`20 RG + 14 PF` validés ou approuvés en contenu, `6 RG + 6 PF` candidats), avec contrat, réalisation et preuve/réserve. **Il reste à faire la revue individuelle D3 (74 RG + 44 PF), la reconstitution E2E03/E2E04 et les comparaisons Figma/runtime**.

**Premiers constats :** stockage et versions D4 solides au niveau DB/PG ; récupération et capitalisation sélectionnées lexicalement, utilité cognitive LIVE non démontrée globalement ; contradiction historique entre effet documentaire `AVAILABLE` et restitution de Nora ; sûreté de lecture D4 en code mais révocation/continuité REAL à requalifier. Ces constats restent liés aux registres ML1/ML4 propriétaires, **sans doublon ni GO de correction**.

## 5.6. ML2 — 118 références D3 individualisées et rapprochement E2E03/E2E04

La [matrice D3](ml2/verification-detaillee-conduite-nora-d3.md) confronte **74 RG et 44 PF de conduite de Nora** aux services et preuves connues : **62 RG + 35 PF validés en contenu**, **12 RG + 9 PF candidats**, soit **118/118 références**. Les textes D3 relatifs à la méthode, aux cycles, aux droits et aux arrêts ne deviennent pas des responsabilités techniques ML2 par simple rattachement : leurs propriétaires D5/D6/D7/D9 et leurs gates restent distincts.

**Corpus ML2 désormais tracé par ID :** D3 **118/118** + D4 **46/46** = **164/164 références**. Il ne s'agit **ni de 164 fonctions implémentées, ni de 164 PASS** : tests PG/FAKE, essais LIVE bornés et absence de qualification cognitive/visuelle globale sont explicitement séparés. Les six obligations supplémentaires `NORA-INFO-01..06` et le contrat d'activité/STOP sont également relevés, hors compteur des RG/PF.

**Points déterminants :** boucle Agents SDK et outils sous budget réels, `modelApplied/effortApplied` non vérifiés, streaming SDK tenté sans preuve de diffusion progressive dans l'UI, frontière Nora/ACK D4 à requalifier au SHA courant (écart observé dans la RECETTE ML4), scénarios négatifs D5–D9 insuffisamment exercés ensemble. Les six étapes **E2E03 et E2E04** sont rapprochées du code et des tests, **sans verdict E2E LIVE**.

**Suite :** consolider E2E03/E2E04 à partir des observations et des oracles, puis poursuivre ML3/ML4 et les écarts transverses avant Gate B ; pas de correction ML4C ni de nouvelle norme créée.

## 5.7. ML2 — Réconciliation probatoire E2E03 et E2E04 (2026-11-11)

Le [diagnostic E2E03/E2E04](ml2/reconciliation-e2e03-e2e04-preuves.md) reconstruit les **six étapes nominales d'investigation/production/restitution** et les **six étapes de mémoire/décision/reprise** du contrat R1, en incluant **neuf familles d'exceptions** et un tableau de preuves de leur portée exacte. Chaque étape distingue R2, services, tests historiques, RECETTE LIVE/FAKE et statut encore manquant.

**Résultats de code et de recette :** Nora dialogue et consulte D4 ; PG prouve identité/version/concurrence et récupération sélective ; ML3 prouve des décisions D6 ciblées, ML4 des créations/révisions D4 `AVAILABLE`, du Git sourcé ciblé et la reprise du même fil. **Mais** la qualité cognitive longue, la capitalisation implicite, le choix d'une présentation interactive adaptée et la narration fiable après effet **ne sont pas prouvés comme une chaîne unique LIVE**. `ML4-REC-08` demeure une contradiction observée, non une disparition supposée des données.

**Aucun nouveau test ni GO de correction :** les comparaisons COG formelles avaient été reportées par Morris à l'acceptation ML2 ; ce diagnostic prépare des **oracles possibles** pour le gate B, pas un gate rétroactif. Les preuves Figma/browser sont `NOT RUN`. La prochaine passe consolide ML2 par capacité puis qualifie ML3/ML4, sans fragmentation en micro-cycles documentaires.

## 5.8. ML2 — Consolidation de l'ensemble du lot et des réserves (2026-11-11)

Le [bilan consolidé ML2](ml2/consolidation-capacites-qa-reserves-ml2-ml4.md) réconcilie **les 17 capacités R5**, **Q01–Q29**, **COG-01–07** et **OBS-Q01–12**, les preuves PG/FAKE/LIVE historiques et les effets réellement observés plus tard en ML3/ML4. Il sépare **statut de code, résultat de test et comportement utilisateur**, sans déclarer une conformité des 164 RG/PF parce qu'ils ont été cartographiés.

**Acquis :** SDK Nora et outils D4, fil unique, documents/version/CAS, Sujets/Acquis/Points ouverts en PostgreSQL, garde-fous, RECETTE ML2 9/9 **acceptée avec réserves**. **Gaps ou preuves manquantes :** qualité cognitive à long terme et initiative de capitalisation, rappel sourcé après session/cycle, restitution post-effet D4 (`ML4-REC-08` FAIL LIVE sur REVISE), création/révision commandée selon intention, orchestration E2E unique et conformité R3/Figma. Les preuves ML3/ML4 sont **complémentaires**, à leurs SHA propres, et ne réécrivent pas l'acceptation ML2.

**Reports explicitement conservés :** comparatif formel ChatGPT↔Nora non exigé pour la RECETTE ML2, modèle/effort effectivement appliqués `UNVERIFIED`, streaming UI progressif non câblé, `PG-DBFAIL-03` non garanti exercé par CI. Pas de gate rétroactif ni correctif technique avant arbitrage Morris.

**Suite :** passer à la réconciliation **ML3 — Pilotage et décisions**, puis ML4 et transverse avant le Gate B ; ML2 reste **consolidé analytiquement, non déclaré globalement conforme**.

## 5.9. ML3 — Réconciliation D5/D6 et CKI (2026-11-11)

Le [diagnostic ML3](ml3/diagnostic-pilotage-decisions-d5-d6.md) conserve **136/136 références R2 D5/D6** en lignes individuelles (`40 RG-TRJ + 37 RG-GOV + 30 PF-TRJ + 29 PF-GOV`) ; chaque ligne rattache le contrat canonique, la portée ML3 ou interface, l'oracle B01–B18 et les modules présents. Les **18 oracles historiques**, la RECETTE **RCT-02 T01–T08 8/8 LIVE** et l'essai **C03 intercycles** sont distingués des preuves absentes, du code intégré et de la décision de sortie Morris.

**Acquis étayés :** trajectoire suggérée non autorisante, cycle ACTIVE unique/transaction/rollback, décisions D6 révisées et conservées, restrictions appliquées/levées, méthodes choisies et retirées, CKI versionné/résolu ; F01/F02 relient le langage du Pilote au service D5/D6. **Limites :** B08 (maturité proactive) sans oracle dédié, détection linguistique hors formulations de recette non certifiée, `CKI RESOLVED` ≠ injection `DELIVERED`, cognition longue et Figma/browser non comparés, E2E externe D7/D8/D9 et restauration REAL non prouvés globalement.

La décision du 7 novembre demeure **ML3 CLOSED BY MORRIS WITH CARRIED RESERVES** ; **CP1/Gate B restent ouverts**. La prochaine analyse suit les interfaces ML3→ML4, puis le diagnostic ML4 et les E2E transverses avant tout arbitrage de convergence.

## 5.10. ML3 — Continuité intégrée E2E02/E2E04 et frontière Git (2026-11-11)

La [réconciliation intégrée](ml3/reconciliation-e2e02-e2e04-continuite-autorite-git.md) retrace **6/6 étapes E2E02 et 6/6 étapes E2E04**, de la proposition de trajectoire au GO humain, de la décision persistante à la reprise du fil, et jusqu'aux mandats Git D6 propres à ML4. **12 étapes rattachées ≠ 12 preuves LIVE complètes** ; les recettes historiques ML3 8/8 et C03 restent bornées à leur SHA et à leurs scénarios.

**Constats code à instruire au gate B :** (1) un pending métier empêche aussi une question cognitive indépendante (`R-UX-01` déjà reporté) ; (2) sur perte de propriété après génération, un retour UNKNOWN peut omettre la HumanDecision D6 déjà appliquée, sans perte DB ni double effet démontrés ; (3) la réconciliation d'une commande D5/D6 réussie ne garantit pas la restitution du tour Nora initial ; (4) un rejeu d'authorize merge peut restituer un ancien statut sans requalifier dans cette branche la décision D6, **mais le dispatch demeure protégé par la vérification d'autorité au point d'effet**. Deux limites complémentaires concernent maturité/CKI et représentation des sources Git dans l'UX.

**Aucun test nouveau, aucune correction**, pas de réouverture de la sortie Morris ML3. Prochaine analyse : ML4 D7/D8/D9 et ses recettes, puis consolidation transversale des E2E et préparation du dossier de décision CP1.

## 5.11. ML4 — Diagnostic D7/D8/D9, 22 critères et E2E07 (2026-11-11)

La [réconciliation des capacités ML4](ml4/diagnostic-capacites-qa-recette-ml4.md) reprend **22/22 ML4-AT** avec le statut de campagne Morris du 10 novembre conservé (**3 PASS / 10 PARTIAL / 8 NOT RUN / 1 KNOWN GAP HARD-BLOCKED**) et l'effet limité du rejeu ciblé G1. Le [rattachement individuel R2](ml4/inventaire-r2-d7-d8-d9.md) indexe **213/213 références** propres aux domaines D7/D8/D9 (`113 RG + 100 PF`), sans transformer les parcours Cursor de ML5 en capacités ML4.

**Acquis :** intégration GitHub App/OAuth et lecture REAL ciblées ; publication documentaire API/Studio REAL bornée antérieure (commit et PR ouverte sur sandbox), code de mandat D6/fingerprint/permissions/restrictions et dédoublonnage/réconciliation ; G1 a qualifié un chemin absent sous ref vérifiée, préparé un diff D7 `PREPARED/CREATE` et corrigé une provenance ciblée en LIVE. **Réserves :** en USER RECETTE aucune nouvelle mutation Git R12, R13/R14 non exécutés, **merge REAL hard-blocked** ; `ML4-REC-08` demeure un FAIL LIVE de narration malgré `D4 REVISE AVAILABLE` ; multi-compte/revocation/adversarial et fidélité Figma/runtime insuffisamment prouvés.

**E2E :** les **sept étapes de R1 E2E07** sont rapprochées des services et preuves ; E2E05/E2E06 ne sont couverts qu'à la frontière **Git documentaire** de D7/D8/D9, tandis que l'exécution technique Cursor reste **ML5 OUT**. Il n'y a ni second moteur d'autorisation, ni nouvelle décision, ni publication Git. **ML4 globalement NOT ACCEPTED ; CP1/Gate B reste ouvert.**

## 5.12. CP1 — Synthèse transverse des sept E2E et préparation du gate B (2026-11-11)

La [synthèse transverse](transversal/synthese-r1-e2e-gate-b.md) rapproche **43/43 étapes nominales R1 E2E01–E2E07** aux capacités historiques, responsabilités D1–D9, sources de code et QA disponibles. Les annexes ML1–ML4 indexent au total **628 identifiants RG/PF**, y compris les addenda/candidats explicitement distingués. **Ce total est une couverture documentaire, pas 628 PASS individuels ni sept parcours prouvés LIVE.**

Le registre de consolidation réunit **huit familles de constats** sans doublonner les découvertes précédentes : parole Nora vs effet D4 réel, mémoire pertinente, pending et reprise, publication Git USER, autorité et permissions, restitution UX/Figma, erreurs/résilience, et frontière de périmètre merge REAL/ML5. Les preuves historiques demeurent attachées à leurs SHA/lanes ; le dernier rejeu G1 ne vaut ni R12–R14 complet ni acceptation ML4.

Trois **options de convergence ML4C** sont proposées **à arbitrage**, et non décidées : **A** continuité/vérité des actions, **B** valeur cognitive/mémoire/restitution, **C** publication Git documentaire gouvernée. Les cas négatifs/UX/observabilité sont intégrés à leur parcours propriétaire. Le merge REAL ne sort pas de son blocage sans décision Morris distincte ; Cursor reste **ML5 OUT**.

**État :** `CP1 DOCUMENTED / GATE B NOT HELD / MORRIS REVIEW PENDING / NO ML4C GO`. Le dossier peut être challengé et corrigé avant toute validation ; cette publication documentaire ne déclenche aucune opération technique, Figma, PR, merge ou R6.

## 6. Preuve UX à produire et gate CP1

Comparer **chaque écran et chaque état important** : frame Figma et version native, capture source, viewport, données/état/lane, capture navigateur au SHA, géométrie/typo/couleurs/rail/espacements, transitions, états négatifs, responsive et accessibilité.

**Aucune paire Figma/runtime n'a été observée pour cette publication documentaire.** `data-figma-frame` ou un composant React portant le même nom ne prouve pas la fidélité. Morris garde le verdict d'acceptation.

**Gate B :** après diagnostic exhaustif ML1–ML4 et transversal R1 E2E, revue des réserves et des preuves, priorisation des options de convergence. Le présent dossier est **CP1 IN PROGRESS**, pas une proposition de clôture.

**Maintien :** enrichir progressivement ce même dossier sur la baseline Git recontrôlée, sans PR par constat, sans réécriture des spécifications propriétaires. La publication sur branche candidate ne vaut pas fusion `main`.
