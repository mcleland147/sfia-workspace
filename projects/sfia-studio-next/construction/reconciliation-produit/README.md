# SFIA Studio Next — Réconciliation produit R5 (ML4B)

**Nature :** dossier de diagnostic documentaire D1, non normatif.
**Ouverture :** 10 novembre 2026.
**Baseline d'analyse :** `mcleland147/sfia-workspace`, `main@deba6ee40dfe0ac395555460a0bd7d6bc48d5aa4` (après PR #673).
**Branche candidate :** `docs/next-reconciliation-produit-ml1-20261110`.
**État :** `DOCUMENTED / CP1 IN PROGRESS / NOT REVIEWED BY MORRIS / NO PRODUCT CHANGE`.
**Environnement local, runtime, DB et navigateur :** `NON OBSERVÉS`.

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
| **ML2 — Production et capitalisation** | [Contrats et 17 capacités](ml2/diagnostic-ml2-contrats-capacites.md) · [46 règles/parcours D4](ml2/verification-detaillee-connaissance-d4.md) · [Matrice canonique R5](../ml2-production-et-capitalisation-nora/matrice-tracabilite.md) | **17/17 capacités initialement raccordées au code** ; **46/46 D4 RG/PF individuellement cartographiées** ; D3 (118 références) et E2E03/E2E04 à approfondir ; LIVE/Figma non certifiés |
| **ML3 — Pilotage et décisions** | Matrice et contrat [ML3](../ml3-pilotage-et-decisions/tracabilite-r2-r3-r4.md) | Pré-inventaire ; couverture de guidance et frontières d'autorité à requalifier |
| **ML4 — Collaboration et Git** | [Registre de RECETTE](../ml4-integration-git/recette-ml4-r01-r14-anomalies.md) | Code mergé (#672), première campagne non acceptée globalement ; R13/R14 NOT RUN |
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

## 6. Preuve UX à produire et gate CP1

Comparer **chaque écran et chaque état important** : frame Figma et version native, capture source, viewport, données/état/lane, capture navigateur au SHA, géométrie/typo/couleurs/rail/espacements, transitions, états négatifs, responsive et accessibilité.

**Aucune paire Figma/runtime n'a été observée pour cette publication documentaire.** `data-figma-frame` ou un composant React portant le même nom ne prouve pas la fidélité. Morris garde le verdict d'acceptation.

**Gate B :** après diagnostic exhaustif ML1–ML4 et transversal R1 E2E, revue des réserves et des preuves, priorisation des options de convergence. Le présent dossier est **CP1 IN PROGRESS**, pas une proposition de clôture.

**Maintien :** enrichir progressivement ce même dossier sur la baseline Git recontrôlée, sans PR par constat, sans réécriture des spécifications propriétaires. La publication sur branche candidate ne vaut pas fusion `main`.
