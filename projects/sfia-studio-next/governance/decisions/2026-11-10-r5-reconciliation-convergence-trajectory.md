# SFIA Studio Next — Décision de trajectoire R5 : réconciliation et convergence produit

**Date :** 10 novembre 2026
**Autorité :** Morris
**Statut :** orientation de programme VALIDATED IN CONTENT BY MORRIS le 10/11/2026 ; document publié sur branche Git candidate, sans PR, merge, GO technique ni adoption.
**Référence Git de cadrage :** `mcleland147/sfia-workspace`, `main@0182b0a7053babefe33aa4de181631b21613ac69`.
**Nature :** décision structurante D2 ; traçabilité CP0, sans réouverture automatique des décisions antérieures.

## 1. Motivation

Après la construction de ML1 à ML4, Studio Next dispose d'un socle applicatif substantiel. Toutefois, l'intégration technique des capacités et les validations ponctuelles ne démontrent pas, à elles seules, que le produit reproduit l'expérience et les comportements attendus dans la vision fondatrice.

La cible demeure un Studio **centré sur la relation Pilote–Nora**, dans lequel Nora accompagne naturellement le travail, mobilise les capacités disponibles et restitue des résultats fiables, tandis que les décisions et les actes protégés demeurent sous autorité humaine.

L'objectif n'est donc pas seulement de terminer le développement, mais de **réconcilier la vision, les contrats, les réalisations et les comportements**, puis de faire converger le produit avant d'engager ML5.

## 2. Trajectoire retenue

La construction R5 est prolongée selon l'ordre suivant :

**ML1–ML4 intégrés → ML4B réconciliation → gate Morris → ML4C convergence → gate Morris → ML5 Cursor → R6 qualification globale.**

Les identifiants ML4B et ML4C sont des repères de programme, sans effet sur le nommage des composants permanents ni réécriture des macro-lots historiques.

## 3. ML4B — Réconciliation produit et conformité des capacités

**Finalité :** déterminer dans quelle mesure les capacités construites dans ML1–ML4 couvrent les engagements des macro-lots et reproduisent la vision produit R1/R2.

**IN :**

- Reconstitution des contrats initiaux des quatre macro-lots et de leurs évolutions explicitement validées.
- Analyse du code, des interfaces, des responsabilités, des données, des tests et des preuves disponibles.
- Confrontation aux neuf domaines et aux parcours E2E de la vision R1, ainsi qu'aux exigences R2 applicables.
- Identification des omissions, écarts, comportements incohérents, preuves absentes et réserves reportées.
- Qualification des causes présumées, risques, impacts, dépendances et options de traitement.
- Production d'une matrice de couverture et d'un diagnostic consolidé par capacité, avec traçabilité Git.

**OUT :**

- Modification du produit, refonte UX, correction opportuniste du code.
- Réouverture automatique des décisions déjà validées.
- Construction de capacités propres à ML5.
- Déclaration de conformité ou de comportement prouvé sans preuve adéquate.

**Résultat de sortie :** diagnostic suffisamment complet pour identifier les capacités acquises, les écarts à corriger, les preuves à compléter et les arbitrages nécessaires à ML4C.

**Gate Morris B :** validation du diagnostic, des priorités, du périmètre de convergence et du traitement des réserves critiques.

## 4. ML4C — Convergence fonctionnelle et expérience Pilote–Nora

**Finalité :** rapprocher le produit réel de la vision cible à partir des écarts retenus lors de ML4B.

**IN :**

- Résolution des écarts fonctionnels, conversationnels et UX arbitrés.
- Conception ou ajustement des parcours Figma concernés.
- Réutilisation des services existants et respect de leurs propriétaires fonctionnels.
- Implémentation des corrections nécessaires, y compris code, architecture, données, tests et documentation associés.
- Vérification de la fidélité visuelle, des interactions, des états, de la navigation et des comportements de Nora.
- Validation de parcours utilisateurs de bout en bout sur des versions et environnements identifiés.

**OUT :**

- Reconstruction générale du produit sans justification par un écart démontré.
- Création d'un second moteur de décision, de conversation ou d'exécution.
- Réalisation technique Cursor propre à ML5.
- Promotion STABLE, release ou adoption implicite.

**Résultat de sortie :** capacités ML1–ML4 convergées sur le périmètre approuvé, avec conformité fonctionnelle et UX démontrée au niveau de preuve requis, écarts résiduels documentés et dette assortie de conditions de sortie.

**Gate Morris C :** acceptation du résultat de convergence, arbitrage des réserves et qualification des prérequis d'ouverture de ML5.

## 5. Principes de pilotage

1. La vision et les exigences validées demeurent des références ; les évolutions approuvées ultérieurement sont intégrées à leur juste portée.
2. Une conformité au contrat de macro-lot ne prouve pas automatiquement la conformité à la vision produit.
3. L'analyse ML4B précède les corrections ML4C, sauf incident critique justifiant une dérogation spécifique.
4. ML4C est organisé par parcours ou capacités cohérentes, et non en micro-tâches d'écran ou en cycles documentaires autonomes.
5. La qualité conversationnelle de Nora, la vérité des effets applicatifs et l'autorité du Pilote sont des exigences fonctionnelles, non de simples détails d'interface.
6. Les décisions et preuves historiques restent conservées. Les nouveaux constats actualisent leur interprétation sans les effacer.
7. Construction, couverture de tests, preuve comportementale, clôture de lot et adoption restent des statuts distincts.

## 6. Documentation et checkpoints

- **CP0 — Trajectoire :** présente décision et actualisation de la roadmap.
- **CP1 — Diagnostic :** matrice ML1–ML4, couverture de la vision, écarts et arbitrages.
- **CP2 — Contrat de convergence :** parcours, comportements, UX, architecture, tests et GO technique.
- **CP3 — Livraison/réception :** preuves de convergence, requalification des réserves et décision de sortie.
- **CP4 — ML5 :** contrat d'ouverture du macro-lot de réalisation Cursor.

Les supports existants R1–R5 restent propriétaires de leurs contenus. Le dossier UX déjà constitué est réutilisé ; aucun référentiel fonctionnel parallèle n'est créé.

## 7. Conditions d'autorité

L'approbation de la trajectoire ne vaut pas autorisation d'écriture Git au-delà du mandat CP0 borné, de modification Figma, de lancement Cursor, d'ouverture de PR, de merge, de promotion ou d'adoption.

La présente contribution D2 est limitée à cette décision et à l'actualisation de `governance/roadmap.md` sur la branche documentaire dédiée. Aucun effet produit ni aucune clôture nouvelle de ML1–ML4 ne sont inférés.

**Prochaine capacité :** ouvrir ML4B et établir la matrice de réconciliation sur une baseline Git vérifiée.
