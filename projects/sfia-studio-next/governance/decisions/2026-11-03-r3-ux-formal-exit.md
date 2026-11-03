# Decision Record — R3 : sortie formelle de la conception UX/UI

| Champ | Valeur |
| --- | --- |
| Décideur | **Morris** |
| Date | **2026-11-03 (Europe/Paris)** |
| Périmètre | **SFIA Studio Next — R3 conception UX/UI, interaction Pilote–Nora** |
| Décision | **R3 CLOSED BY MORRIS — WITH CARRIED RESERVES** (niveau **conception UX**, pas runtime) |
| Autorisation explicite | Après lecture et acceptation du [rapport de sortie R3](../../ux-ui/revue-formelle-sortie-r3.md), validation des quatre clarifications fonctionnelles R1/R2, puis réponse **« ok go de cloture »** au jalon formel |
| Base de décision | [SEF v0.2](../SEF.md), [Roadmap Next](../roadmap.md), [conception UX](../../ux-ui/espace-projet-interaction-pilote-nora.md), [guide de couverture](../../ux-ui/audit-couverture-ux-r3.md) |
| Baseline Git constatée avant rédaction | `main@139c706e8b3dca6f1db836a14ffd1aafa1c5e990` ; branche candidate `sfia/next-r3-ux-interaction-candidate@a21996fe39fc61b007d7a2c4beafb66f2a91c9c5` ; **84 commits devant / 10 derrière** |
| Portée du GO | **Clôture de R3 en conception UX**, avec réserves identifiées. Autorisation de tracer cette décision sur la branche candidate. **PR, merge et lancement R4 non autorisés par ce GO.** |
| État de preuve | `DOCUMENTED / UX CONTENT VALIDATED BY MORRIS / FIGMA PROTOTYPE GRAPH VERIFIED` ; `N/A — NON IMPLÉMENTÉ` pour le runtime Next |

## 1. Décision et périmètre clos

**Morris prononce la sortie formelle du jalon R3 avec réserves reportées.** Le périmètre accepté comprend :

- **Macro-lot A** : entrée, portefeuille, sas, fil conversationnel, documents, continuité, lecture des éléments de connaissance.
- **Macro-lot B** : trajectoire, cycles, CKI, décisions et gouvernance, autorité distincte du Pilote.
- **Macro-lot C** : contrat d'exécution compréhensible et inspectable, instruction Cursor, contrôles avant effet, résultat et preuves, réception humaine distincte.
- **Macro-lot D** : Git facultatif, sources, droits, provenance, échecs et qualité transverse, sans Git imposé.
- **Consolidation transversale** : visibilité du travail de Nora, états d'activité cognitifs/outils/Cursor distincts, arrêt demandé vs confirmé, acquis, reprise contrôlée, animation accessible, et [contrat de transposition Figma → code](../../ux-ui/contrat-transposition-figma-code.md).

La revue globale constate une **couverture de conception des neuf domaines D1–D9 et des sept scénarios E2E R1**, sans conclure à leur exécution effective. Le prototype Figma possède **223 frames**, toutes accessibles depuis le [flux de revue intégrale R3](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=264-401), sans destination de navigation inexistante dans le graphe audité ; trois flux de présentation sont conservés (principal, revue intégrale, compact).

La vérification de graphe, le rendu des maquettes et la validation métier du Pilote sur le parcours **constituent les preuves de conception R3**. Ils ne démontrent pas le fonctionnement de Nora, les permissions réelles, les effets Cursor ou la fidélité du code en navigateur.

## 2. Arbitrages fonctionnels associés déjà acquis

Morris a approuvé et autorisé l'intégration Git de **quatre clarifications normatives** pour rendre les écrans de suivi Nora cohérents avec R1/R2. Elles sont tracées dans le [référentiel R2 §24](../../conception-fonctionnelle/README.md), sans nouvelle série de règles `RG`/`PF`, sans réouverture des clôtures R1/R2 :

| Clarification | Responsabilités propriétaires | Décision de contenu |
| --- | --- | --- |
| **Visibilité intelligible du travail** | [Vision R1 §9](../../cadrage/vision-produit.md) | **VALIDÉE** — faits réellement connus et limites explicites, pas de raisonnement interne ni faux pourcentage |
| **Cognition / outils / Cursor** | [D3 §13](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) | **VALIDÉE** — états et sources distingués, pas de télémétrie externe inventée |
| **Arrêter et autorité** | [D6 §9](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md) et [D7 §9.1](../../conception-fonctionnelle/realisation-operationnelle-gouvernee.md) | **VALIDÉE** — cible et disponibilité explicites, STOP demandé/transmis/observé/inconnu distingués |
| **Acquis et reprise sans duplication** | [D3 §13.2](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md), [D7 §9.2](../../conception-fonctionnelle/realisation-operationnelle-gouvernee.md), [D8 §9](../../conception-fonctionnelle/resultats-et-preuves.md) | **VALIDÉE** — réalisé/reste à faire/à vérifier, vérifications avant nouvel effet, pas de replay implicite |

Ces validations établissent **des contrats fonctionnels**, pas un mécanisme API, un modèle d'événements ou une capacité d'interruption déjà implémentés.

## 3. Réserves reportées avec propriétaires et conditions de sortie

| Réserve reportée | Jalon responsable | Condition de résolution attendue |
| --- | --- | --- |
| Événements Nora et Cursor observables, provenance, filtrage, fraîcheur, granularité et persistance | **R4 architecture**, réalisation R5, qualification R6 | Source de vérité unique, contrats d'événements et d'erreurs, preuve qu'un statut affiché correspond à un état réellement accessible |
| Interruption externe, capacités réelles, ordre transmis vs arrêt observé, effets possibles, autorité D6 | **R4–R6** | Contrat de STOP, limites par exécutant, protection des décisions, scénarios négatifs et preuve des situations indéterminées |
| Reprise, acquis, déconnexion, collisions, permissions et idempotence | **R4–R6** | Invariants, références/version, réconciliation avant retry, non-duplication prouvée |
| Correspondance contrat métier ↔ instruction transmise, six volets, preuves et réception | **R4–R6** | Traçabilité des versions, contrôles avant effet, attribution des sorties, réception D6 distincte de conformité D8 |
| Transposition fidèle Figma → code | **R4 fondations**, R5 construction, R6 tests | Tokens et composants partagés décidés, arbitrage du rail 240 vs 246 px, extraction profonde des calques par capacité, comparaison navigateur/captures à tolérances approuvées |
| Accessibilité, responsive et animation | **R5–R6** | Tests clavier, zoom, focus, lecture d'états, réduction des mouvements, reflow et contraste selon contrat |
| Gouvernance Git de la branche candidate, divergences et promotion sur `main` | **Gate Git distinct** | Requalification de base, diff/risques, PR sous mandat Morris, CI et mergeabilité vérifiées, **GO de merge spécifique**, relecture distante post-merge |

**Dette/exit :** ces réserves sont **acceptées pour la sortie du jalon de conception** mais ne constituent pas des exceptions permanentes à la qualité R4–R6. Aucun choix architectural historique n'est repris par inertie.

## 4. Gates et intégration Git

1. **Décision R3 acquise en contenu :** `R3 CLOSED BY MORRIS — WITH CARRIED RESERVES`. La présente publication sur branche candidate documente la décision ; elle **ne la rend pas intégrée à `main`**.
2. **Baseline `main` inchangée** au moment de la décision. La Roadmap Git main reste à synchroniser selon les gates d'intégration, et ses anciens statuts R3 « not started » ne constituent pas le statut d'avancement de la branche candidate.
3. **Avant PR :** vérifier l'écart avec `main` (divergence observée **84 devant / 10 derrière** au début du gate), les fichiers et chemins affectés, les chevauchements, les conflits, les exigences de CI et la politique de promotion. Une branche non mergée n'est pas la nouvelle baseline.
4. **Interdit sans GO distinct :** ouvrir PR, merger, supprimer une branche, modifier directement `main`, contours des protections, lancer Cursor ou débuter R4 comme lot de construction, déclarer `IMPLEMENTED`, `BEHAVIOR PROVEN` ou `ADOPTED`.
5. **Après intégration Git autorisée et vérifiée :** relecture de `main` et enregistrement des preuves post-merge, mise à jour de la Roadmap et qualification de l'ouverture R4, sous ses propres décisions.

## 5. Capacité suivante

**R4 — Conception d'architecture SFIA Studio Next.** Le futur cadrage devra traiter les interfaces propriétaires des neuf domaines, le fil Nora et sa connaissance, l'autorité D6, l'exécution D7, les preuves D8, Git D9, les contraintes UX et le contrat de transposition. **R4 non démarré par cette décision.**

**État opposable : `R3 CLOSED BY MORRIS — WITH CARRIED RESERVES / GIT INTEGRATION PENDING`.**
