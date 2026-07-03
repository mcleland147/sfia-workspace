---
source: Notion / SFIA Architecture
status: reference
sync: manual-export
version: v1.1
previous: v1.0
updated_after: SFIA Fast Track operational validation (Interv360)
---

# SFIA Delivery Pipeline v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** SFIA Fast Track operational validation (Interv360)

<aside>
🏛️

**Statut du document** : Référentiel fondateur — version 1.1 (contenu v1.0 conservé, enrichi post-Fast Track)  

**Domaine** : Software Factory IA / Delivery / Gouvernance / Capitalisation  

**Portée** : Plateforme SFIA, projets livrés via SFIA, assets méthodologiques, composants, prompts, templates, REX et amélioration continue  

**Audience** : Direction, architecture d’entreprise, product owners, tech leads, équipes delivery, gouvernance IT, responsables qualité, responsables plateforme  

**Propriétaire** : Gouvernance SFIA  

**Cycle de revue recommandé** : mensuel en phase de structuration, trimestriel en régime nominal  

**Niveau de référence** : officiel

</aside>

## v1.1 Consistency Rule

The v1.0 content is preserved for intellectual traceability.

When a tension exists between the v1.0 content and the v1.1 update, the v1.1 update prevails.

In SFIA v1.1:

- the Git repository is the operational source of truth;
- Notion is a curated knowledge layer, not a raw mirror of the repository;
- archived material is preserved for traceability but is not an active source;
- human validation remains mandatory before publishing, synchronizing or promoting content.

## v1.1 Engineering Principles Reference

All cycles, prompts, repository changes, documentation updates, knowledge publication activities and automation initiatives described or derived from this document must comply with:

- `docs/foundation/sfia-engineering-principles.md`

This reference acts as a lightweight compliance anchor. It does not duplicate the Engineering Principles, but requires that the document be interpreted and applied consistently with them.


# Objectif

Le présent document définit le **pipeline officiel de delivery de la plateforme SFIA**.

Il décrit la manière dont un besoin traverse la plateforme SFIA depuis son expression initiale jusqu’à la production d’un ensemble complet de livrables :

- une application livrée ;
- une documentation complète ;
- des composants réutilisables ;
- des prompts industrialisés ;
- des templates ;
- des retours d’expérience ;
- des standards enrichis ;
- des actions d’amélioration ;
- une évolution maîtrisée de la plateforme SFIA.

Ce pipeline ne se limite pas à la production logicielle. Il formalise également la **production de connaissance**, la **capitalisation méthodologique** et l’**amélioration continue** de la plateforme.

<aside>
🎯

Le pipeline SFIA transforme chaque projet en actif de plateforme. Un delivery réussi ne produit pas uniquement une solution : il enrichit durablement la capacité collective à concevoir, construire, valider et opérer les futurs projets.

</aside>

## Lecture exécutive

La plateforme SFIA repose sur une logique de **delivery industrialisé et apprenant**. Chaque besoin est traité selon un flux structuré, contrôlé par des quality gates, instrumenté par des KPI, et relié aux référentiels de standards, prompts, composants, templates et retours d’expérience.

Le pipeline vise trois résultats simultanés :

1. **Livrer efficacement** une solution conforme au besoin métier.
2. **Sécuriser la qualité** par des contrôles intégrés dès la conception.
3. **Capitaliser systématiquement** les enseignements, assets et améliorations issus du projet.

## Lecture opérationnelle

Pour les équipes delivery, le pipeline sert de cadre d’exécution commun. Il précise :

- les phases à suivre ;
- les entrées et sorties attendues ;
- les artefacts à produire ;
- les modules SFIA à mobiliser ;
- les sous-moteurs à activer ;
- les critères de passage entre phases ;
- les décisions à formaliser ;
- les risques à maîtriser ;
- le niveau d’automatisation attendu.

# Contexte

La transformation digitale, l’industrialisation du delivery logiciel et l’intégration de l’IA dans les processus d’ingénierie imposent une évolution profonde des modèles de production.

Les organisations ne peuvent plus considérer chaque projet comme une initiative isolée. Les projets doivent devenir des **sources d’apprentissage**, des **accélérateurs de standardisation** et des **contributeurs à la maturité de la plateforme**.

Dans ce contexte, la SFIA — Software Factory IA — constitue une plateforme méthodologique, technique et organisationnelle destinée à :

- standardiser les pratiques de delivery ;
- intégrer l’IA dans les activités d’analyse, de conception, de build, de validation et de documentation ;
- structurer la production de livrables nativement exploitables dans Notion ;
- favoriser la réutilisation des composants et des prompts ;
- consolider les retours d’expérience ;
- piloter la maturité et l’amélioration continue de la Software Factory.

## Problématique adressée

Sans pipeline commun, les risques suivants apparaissent :

- fragmentation des pratiques de delivery ;
- documentation incomplète ou produite trop tardivement ;
- perte de connaissance en fin de projet ;
- faible réutilisation des composants ;
- prompts non maîtrisés ou non versionnés ;
- standards appliqués de manière variable ;
- capitalisation REX insuffisante ;
- amélioration de plateforme opportuniste plutôt que systémique.

Le pipeline SFIA répond à ces risques par une architecture de delivery intégrée, contrôlée et auto-améliorante.

# Vision

La vision du pipeline SFIA est de mettre en place un **système de delivery augmenté**, dans lequel chaque phase contribue simultanément à la livraison d’un produit et à l’enrichissement de la plateforme.

## Ambition cible

La plateforme SFIA doit permettre de passer d’un modèle de delivery projet à un modèle de **delivery plateforme** :

- les projets consomment les standards, prompts, composants et templates existants ;
- les équipes produisent des livrables homogènes et auditables ;
- les résultats sont mesurés par des KPI partagés ;
- les retours d’expérience alimentent les référentiels ;
- les innovations validées deviennent des standards ;
- les écarts et exceptions sont gouvernés ;
- la plateforme s’améliore à chaque cycle.

## Positionnement architectural

Le pipeline SFIA s’inscrit comme une couche d’orchestration entre :

- la demande métier ;
- l’architecture d’entreprise ;
- les pratiques de Software Factory ;
- l’ingénierie logicielle ;
- la gouvernance IT ;
- la documentation ;
- l’automatisation ;
- la capitalisation de connaissance ;
- la gestion de la maturité.

<aside>
🧭

La vision cible est celle d’un pipeline où la valeur métier, la qualité logicielle, la documentation, les actifs réutilisables et l’apprentissage organisationnel sont produits dans un même flux.

</aside>

# Principes du pipeline

## Flow over Tasks

Le pipeline privilégie le **flux de valeur** plutôt que l’exécution isolée de tâches.

### Définition

Chaque activité est conçue comme une contribution au passage fluide du besoin vers une solution livrée, documentée, validée et capitalisée.

### Implications

- Les phases sont reliées par des entrées et sorties explicites.
- Les goulots d’étranglement sont mesurés.
- Les dépendances sont visibles.
- Les reprises sont documentées.
- Les décisions bloquantes sont escaladées.
- La valeur livrée prime sur le volume d’activités réalisées.

### Application SFIA

Dans SFIA, le flux ne s’arrête pas à la mise en production. Il se poursuit jusqu’à la phase Learn puis Improve, afin que l’apprentissage devienne un actif de plateforme.

## Quality by Design

La qualité est intégrée dès l’amont, et non ajoutée en fin de cycle.

### Définition

Les exigences de qualité, sécurité, architecture, maintenabilité, testabilité et exploitabilité sont définies dès la qualification et contrôlées tout au long du pipeline.

### Implications

- Les critères d’acceptation sont formalisés tôt.
- Les standards applicables sont identifiés dès la conception.
- Les tests sont anticipés dès le design.
- Les risques sont qualifiés par phase.
- Les quality gates conditionnent le passage entre phases.

### Application SFIA

Les standards SFIA, checklists, patterns d’architecture, templates de recette et prompts de validation sont mobilisés comme mécanismes de qualité native.

## Documentation by Design

La documentation est produite progressivement, dans le flux de delivery.

### Définition

La documentation n’est pas un livrable final séparé. Elle est générée, enrichie et validée au fil des phases.

### Implications

- Les artefacts documentaires sont créés dès l’intake.
- Les décisions sont historisées.
- Les hypothèses sont tracées.
- Les composants et prompts réutilisables sont documentés.
- Le REX est préparé dès le début du projet.

### Application SFIA

Chaque phase produit des pages Notion structurées, exploitables comme référentiel, support d’audit, base de connaissance et matière première pour l’amélioration continue.

## Automation by Design

L’automatisation est pensée dès la conception du delivery.

### Définition

Les activités répétitives, contrôlables ou structurées sont candidates à l’automatisation ou à l’assistance IA.

### Implications

- Les tâches manuelles sont identifiées.
- Les prompts sont standardisés.
- Les contrôles automatisables sont définis.
- Les templates sont utilisés systématiquement.
- Les métriques sont collectées dans le flux.

### Application SFIA

Les sous-moteurs SFIA — prompts, génération documentaire, analyse de conformité, assistance à la recette, capitalisation REX — doivent réduire la variabilité, accélérer le delivery et améliorer la traçabilité.

## Learning by Design

L’apprentissage est intégré au cycle de delivery.

### Définition

Chaque projet doit produire des enseignements exploitables, au-delà du résultat livré.

### Implications

- Les hypothèses sont explicitées.
- Les écarts sont analysés.
- Les réussites sont codifiées.
- Les irritants sont transformés en actions.
- Les bonnes pratiques deviennent candidates à la standardisation.

### Application SFIA

La phase Learn est obligatoire. Elle structure les retours d’expérience, mesure les impacts et alimente les actions d’amélioration, les standards et la bibliothèque de prompts.

## Platform over Projects

Le pipeline donne la priorité à la construction progressive de la plateforme.

### Définition

Les projets sont considérés comme des contributeurs à la plateforme, et non comme des initiatives indépendantes.

### Implications

- Les composants réutilisables sont identifiés.
- Les prompts sont industrialisés.
- Les templates sont enrichis.
- Les standards sont validés ou ajustés.
- Les KPI de maturité sont mis à jour.
- Les exceptions sont gouvernées.

### Application SFIA

Chaque projet doit répondre à une double exigence : livrer sa valeur propre et contribuer à la performance future de la SFIA.

# Les phases du pipeline

## Vue d’ensemble

Le pipeline SFIA est structuré en huit phases :

1. Project Intake
2. Qualification
3. Design
4. Build
5. Validate
6. Release
7. Learn
8. Improve

Ces phases constituent un flux continu, avec des quality gates, des boucles de rétroaction et une capitalisation structurée.

---

## 1. Project Intake

### Mission

Capturer, formaliser et enregistrer un besoin dans la plateforme SFIA afin de déterminer s’il doit entrer dans le pipeline de delivery.

### Objectifs

- Recueillir le besoin initial.
- Identifier le sponsor et les parties prenantes.
- Clarifier la valeur attendue.
- Déterminer le périmètre préliminaire.
- Initialiser la traçabilité Notion.
- Créer la fiche projet de référence.
- Détecter les dépendances ou contraintes majeures.

### Entrées

- Demande métier.
- Opportunité d’amélioration.
- Idée d’application.
- Besoin d’automatisation.
- Irritant opérationnel.
- Initiative issue d’un REX.
- Demande de standardisation.

### Sorties

- Fiche intake projet.
- Description du besoin.
- Objectifs métier initiaux.
- Hypothèses connues.
- Parties prenantes identifiées.
- Première évaluation de complexité.
- Décision d’orientation : qualifier, différer, fusionner, rejeter.

### Modules SFIA utilisés

- Référentiel projets.
- Référentiel besoins.
- Bibliothèque de templates intake.
- Base actions SFIA.
- Base KPI maturité.
- Référentiel REX si le besoin provient d’un enseignement antérieur.

### Sous-moteurs utilisés

- Moteur de structuration du besoin.
- Moteur de classification.
- Moteur d’analyse de valeur initiale.
- Moteur de détection des dépendances.
- Moteur de génération de fiche intake.

### Artefacts produits

- Page Notion “Fiche Project Intake”.
- Synthèse exécutive du besoin.
- Carte parties prenantes.
- Première matrice valeur / complexité.
- Journal de décision initial.
- Entrée dans le backlog SFIA.

### KPI

- Nombre de demandes reçues.
- Taux de demandes qualifiées.
- Temps moyen de traitement intake.
- Taux de demandes incomplètes.
- Ratio demandes acceptées / rejetées.
- Volume de demandes issues de REX ou d’amélioration continue.

### Critères de validation

- Besoin compréhensible.
- Sponsor identifié.
- Valeur attendue explicitée.
- Périmètre préliminaire documenté.
- Absence de doublon majeur.
- Données minimales disponibles pour qualification.
- Décision d’orientation formalisée.

### Risques

- Besoin trop vague.
- Sponsor non identifié.
- Demande redondante.
- Périmètre implicite.
- Urgence non justifiée.
- Confusion entre besoin, solution et technologie.
- Absence de valeur métier mesurable.

### Décisions

- Accepter en qualification.
- Demander un complément.
- Fusionner avec une initiative existante.
- Rejeter.
- Mettre en attente.
- Orienter vers une expérimentation.

### Niveau d’automatisation

**Moyen à élevé.**

Les activités de structuration, classification, synthèse et détection de doublons peuvent être fortement assistées par IA. La décision d’entrée en qualification reste gouvernée.

---

## 2. Qualification

### Mission

Évaluer la pertinence, la faisabilité, la valeur, les risques et les conditions de delivery du besoin.

### Objectifs

- Clarifier le problème à résoudre.
- Définir les résultats attendus.
- Identifier les exigences fonctionnelles et non fonctionnelles.
- Évaluer la complexité.
- Identifier les contraintes d’architecture, sécurité, données et intégration.
- Déterminer le mode de delivery.
- Préparer la décision de lancement.

### Entrées

- Fiche intake validée.
- Informations métier complémentaires.
- Contraintes connues.
- Données existantes.
- Standards applicables.
- REX pertinents.
- Composants ou templates existants.

### Sorties

- Dossier de qualification.
- Analyse de valeur.
- Périmètre cible.
- Liste des exigences initiales.
- Hypothèses et dépendances.
- Cartographie des risques.
- Recommandation de delivery.
- Décision go / no-go / expérimentation.

### Modules SFIA utilisés

- Référentiel standards SFIA.
- Référentiel architecture.
- Base REX.
- Bibliothèque composants.
- Bibliothèque prompts.
- Base actions.
- Base KPI.

### Sous-moteurs utilisés

- Moteur d’analyse fonctionnelle.
- Moteur d’analyse NFR.
- Moteur de scoring valeur / complexité.
- Moteur de conformité standards.
- Moteur d’identification des risques.
- Moteur d’aide à la décision.

### Artefacts produits

- Dossier de qualification.
- Grille valeur / complexité / risque.
- Liste d’exigences initiales.
- Matrice parties prenantes.
- Registre des hypothèses.
- Registre des risques.
- Note de recommandation.
- Journal de décision.

### KPI

- Temps moyen de qualification.
- Taux de besoins qualifiés.
- Taux de besoins réorientés.
- Qualité des exigences initiales.
- Nombre de risques identifiés en amont.
- Taux de réutilisation d’assets dès la qualification.

### Critères de validation

- Problème métier clarifié.
- Valeur attendue mesurable.
- Périmètre initial stable.
- Risques principaux identifiés.
- Contraintes majeures documentées.
- Standards applicables identifiés.
- Décision de lancement formalisée.

### Risques

- Qualification superficielle.
- Exigences instables.
- Sous-estimation de complexité.
- Oubli d’exigences non fonctionnelles.
- Mauvaise identification des dépendances.
- Décision prise sans données suffisantes.

### Décisions

- Lancer le design.
- Lancer une expérimentation préalable.
- Réduire le périmètre.
- Revoir la priorisation.
- Mettre en attente.
- Abandonner.

### Niveau d’automatisation

**Moyen.**

L’IA assiste l’analyse, la structuration et le scoring. La décision finale reste humaine et gouvernée.

---

## 3. Design

### Mission

Définir l’architecture cible, la conception fonctionnelle, la conception technique, la stratégie de validation et les artefacts nécessaires au build.

### Objectifs

- Traduire le besoin qualifié en solution cible.
- Définir l’architecture applicative, technique, données et intégration.
- Identifier les patterns et standards applicables.
- Définir les composants réutilisables.
- Préparer les prompts nécessaires au build et à la documentation.
- Définir la stratégie de test.
- Formaliser les décisions structurantes.

### Entrées

- Dossier de qualification.
- Exigences fonctionnelles.
- Exigences non fonctionnelles.
- Contraintes d’architecture.
- Standards SFIA.
- Patterns existants.
- Composants réutilisables.
- REX pertinents.

### Sorties

- Dossier de conception.
- Architecture cible.
- Modèle fonctionnel.
- Modèle de données si applicable.
- Design d’intégration.
- Stratégie de test.
- Backlog de build.
- Liste des composants à créer ou réutiliser.
- Prompts de conception et de génération.
- Décisions d’architecture.

### Modules SFIA utilisés

- Référentiel architecture.
- Standards SFIA.
- Bibliothèque composants.
- Bibliothèque prompts.
- Templates de conception.
- Référentiel décisions.
- Référentiel qualité.
- Base REX.

### Sous-moteurs utilisés

- Moteur de conception fonctionnelle.
- Moteur de conception applicative.
- Moteur de conception technique.
- Moteur d’analyse d’intégration.
- Moteur de génération de diagrammes et documentation.
- Moteur de revue d’architecture.
- Moteur de préparation des tests.

### Artefacts produits

- Document de conception fonctionnelle.
- Document de conception technique.
- Architecture decision records.
- Diagrammes d’architecture.
- Matrice exigences / composants.
- Stratégie de tests.
- Catalogue de composants candidats.
- Prompts de build candidats.
- Checklist de conformité design.

### KPI

- Taux de conformité aux standards.
- Nombre de décisions d’architecture formalisées.
- Taux de réutilisation de composants.
- Taux de couverture des exigences par le design.
- Nombre d’écarts identifiés avant build.
- Temps moyen de production du design.

### Critères de validation

- Architecture approuvée.
- Exigences couvertes.
- NFR intégrées.
- Standards appliqués ou écarts justifiés.
- Composants identifiés.
- Stratégie de test validée.
- Décisions structurantes documentées.

### Risques

- Surconception.
- Sous-documentation.
- Incohérence avec standards.
- Dette technique introduite dès le design.
- Réutilisation insuffisante.
- Prompts non maîtrisés.
- Tests pensés trop tardivement.

### Décisions

- Valider le design.
- Demander une revue complémentaire.
- Adapter l’architecture.
- Créer un nouveau standard candidat.
- Créer un composant réutilisable.
- Accepter une dérogation.
- Revenir en qualification.

### Niveau d’automatisation

**Moyen à élevé.**

La génération de documentation, l’analyse de conformité, la préparation des tests et la création de prompts peuvent être largement assistées. Les décisions d’architecture restent sous gouvernance.

---

## 4. Build

### Mission

Construire la solution conformément au design validé, en produisant simultanément le code, la documentation, les composants, les prompts et les preuves nécessaires à la validation.

### Objectifs

- Développer les fonctionnalités.
- Réutiliser ou créer les composants identifiés.
- Produire la documentation technique dans le flux.
- Appliquer les standards de code et d’architecture.
- Industrialiser les prompts utiles.
- Préparer les preuves de validation.
- Maintenir la traçabilité exigences / build.

### Entrées

- Dossier de conception validé.
- Backlog de build.
- Standards de développement.
- Composants existants.
- Prompts validés ou candidats.
- Stratégie de test.
- Critères d’acceptation.

### Sorties

- Application construite.
- Code source ou configuration.
- Composants réutilisables.
- Documentation technique.
- Prompts industrialisés candidats.
- Preuves de conformité.
- Tests unitaires ou équivalents.
- Journal d’écarts.
- Mise à jour des artefacts de design si nécessaire.

### Modules SFIA utilisés

- Bibliothèque composants.
- Bibliothèque prompts.
- Standards de développement.
- Templates de documentation technique.
- Référentiel qualité.
- Base actions.
- Référentiel décisions.
- Base KPI.

### Sous-moteurs utilisés

- Moteur d’assistance au développement.
- Moteur de génération de code.
- Moteur de revue de code.
- Moteur de génération documentaire.
- Moteur de normalisation des prompts.
- Moteur de détection de dette technique.
- Moteur de traçabilité exigences / implémentation.

### Artefacts produits

- Incréments applicatifs.
- Documentation technique actualisée.
- Composants réutilisables documentés.
- Prompts de build versionnés.
- Checklists de conformité.
- Journal de dette technique.
- Journal de décisions de build.
- Preuves de tests unitaires.
- Notes d’implémentation.

### KPI

- Vélocité de build.
- Taux de réutilisation de composants.
- Taux de génération ou assistance IA maîtrisée.
- Taux de couverture des tests unitaires.
- Nombre d’écarts qualité détectés.
- Nombre de prompts industrialisés.
- Taux de dette technique ouverte.

### Critères de validation

- Fonctionnalités implémentées selon le périmètre.
- Standards respectés.
- Documentation technique à jour.
- Tests unitaires exécutés.
- Composants documentés.
- Prompts candidats tracés.
- Dette technique documentée.
- Preuves prêtes pour validation.

### Risques

- Divergence entre design et build.
- Documentation produite après coup.
- Prompts non versionnés.
- Composants spécifiques non réutilisables.
- Dette technique non visible.
- Automatisation non contrôlée.
- Faible couverture de tests.

### Décisions

- Poursuivre le build.
- Corriger un écart.
- Revenir au design.
- Créer un composant réutilisable.
- Rejeter un composant candidat.
- Promouvoir un prompt candidat.
- Accepter une dette technique temporaire.

### Niveau d’automatisation

**Élevé.**

Le build est fortement assisté par les moteurs IA, l’automatisation documentaire, les checklists et les contrôles de conformité. La supervision humaine demeure nécessaire pour les décisions structurantes, la qualité finale et l’arbitrage de dette.

---

## 5. Validate

### Mission

Vérifier que la solution, la documentation, les composants, les prompts et les artefacts associés répondent aux exigences et standards SFIA.

### Objectifs

- Valider la conformité fonctionnelle.
- Valider les exigences non fonctionnelles.
- Vérifier la qualité documentaire.
- Contrôler les composants réutilisables.
- Évaluer les prompts industrialisés.
- Vérifier la traçabilité.
- Préparer la décision de release.

### Entrées

- Application construite.
- Documentation technique et fonctionnelle.
- Stratégie de test.
- Critères d’acceptation.
- Composants candidats.
- Prompts candidats.
- Standards applicables.
- Preuves de build.

### Sorties

- Rapport de validation.
- Résultats de tests.
- Liste d’anomalies.
- Évaluation de conformité.
- Statut des composants.
- Statut des prompts.
- Recommandation de release.
- Journal des risques résiduels.

### Modules SFIA utilisés

- Référentiel qualité.
- Standards SFIA.
- Templates de recette.
- Bibliothèque composants.
- Bibliothèque prompts.
- Base anomalies.
- Base décisions.
- Base KPI.

### Sous-moteurs utilisés

- Moteur de génération de cas de test.
- Moteur d’analyse de couverture.
- Moteur de contrôle documentaire.
- Moteur d’analyse de conformité.
- Moteur de qualification des anomalies.
- Moteur d’évaluation des prompts.
- Moteur de synthèse de validation.

### Artefacts produits

- Plan de test finalisé.
- Rapport de tests.
- Rapport de conformité.
- Liste d’anomalies.
- Matrice exigences / tests.
- Fiche d’évaluation des composants.
- Fiche d’évaluation des prompts.
- Recommandation go / no-go release.

### KPI

- Taux de couverture des exigences.
- Taux de réussite des tests.
- Nombre d’anomalies critiques.
- Taux de conformité documentaire.
- Taux de conformité standards.
- Taux de prompts validés.
- Taux de composants acceptés pour réutilisation.

### Critères de validation

- Tests critiques passés.
- Anomalies bloquantes résolues ou arbitrées.
- Documentation complète.
- Traçabilité suffisante.
- Composants évalués.
- Prompts évalués.
- Risques résiduels acceptés.
- Recommandation de release formalisée.

### Risques

- Couverture de test insuffisante.
- Validation documentaire négligée.
- Critères d’acceptation ambigus.
- Anomalies sous-classifiées.
- Prompts acceptés sans évaluation.
- Composants promus trop tôt.
- Décision de release non objectivée.

### Décisions

- Autoriser la release.
- Bloquer la release.
- Corriger puis revalider.
- Revenir au build.
- Revoir le design.
- Accepter un risque résiduel.
- Promouvoir ou rejeter les assets candidats.

### Niveau d’automatisation

**Moyen à élevé.**

La génération de tests, l’analyse de conformité, la synthèse des résultats et le contrôle documentaire peuvent être assistés. L’acceptation finale et l’arbitrage des risques restent gouvernés.

---

## 6. Release

### Mission

Livrer la solution validée, publier la documentation, activer les composants et prompts réutilisables, et formaliser l’état final du delivery.

### Objectifs

- Mettre à disposition l’application.
- Publier les documents de référence.
- Formaliser les décisions de release.
- Enregistrer les versions livrées.
- Publier les composants validés.
- Publier les prompts validés.
- Préparer la phase Learn.

### Entrées

- Rapport de validation.
- Solution prête à livrer.
- Documentation validée.
- Composants acceptés.
- Prompts validés.
- Décision de release.
- Risques résiduels acceptés.

### Sorties

- Application livrée.
- Documentation publiée.
- Notes de release.
- Composants intégrés au catalogue.
- Prompts intégrés à la bibliothèque.
- Templates mis à jour si nécessaire.
- Dossier de clôture delivery.
- Données pour REX.

### Modules SFIA utilisés

- Référentiel documentation.
- Bibliothèque composants.
- Bibliothèque prompts.
- Bibliothèque templates.
- Base release.
- Base décisions.
- Base KPI.
- Référentiel REX.

### Sous-moteurs utilisés

- Moteur de génération de release notes.
- Moteur de publication documentaire.
- Moteur de versioning d’assets.
- Moteur de synthèse exécutive.
- Moteur de préparation REX.
- Moteur de contrôle de complétude.

### Artefacts produits

- Notes de release.
- Dossier de livraison.
- Documentation utilisateur.
- Documentation technique.
- Catalogue composants mis à jour.
- Bibliothèque prompts mise à jour.
- Liste des écarts acceptés.
- Fiche de préparation REX.

### KPI

- Respect de la date de release.
- Taux de livraisons sans retour critique.
- Complétude documentaire à la release.
- Nombre de composants publiés.
- Nombre de prompts publiés.
- Nombre de templates enrichis.
- Taux de risques résiduels acceptés.

### Critères de validation

- Décision de release approuvée.
- Documentation publiée.
- Assets réutilisables versionnés.
- Notes de release disponibles.
- Risques résiduels tracés.
- Support ou exploitation informé.
- Phase Learn planifiée.

### Risques

- Livraison sans documentation complète.
- Publication d’assets non matures.
- Notes de release insuffisantes.
- Non-alignement avec parties prenantes.
- Absence de versioning.
- REX non préparé.
- Passage en production non maîtrisé.

### Décisions

- Publier.
- Reporter.
- Publier partiellement.
- Limiter le périmètre.
- Restreindre la réutilisation d’un asset.
- Créer une action post-release.
- Déclencher un REX prioritaire.

### Niveau d’automatisation

**Moyen.**

La production de notes, la publication documentaire et la préparation REX peuvent être automatisées ou assistées. Les décisions de release et de publication d’assets restent contrôlées.

---

## 7. Learn

### Mission

Capitaliser les enseignements du projet, mesurer les résultats obtenus et identifier les améliorations à apporter à la plateforme SFIA.

### Objectifs

- Réaliser le retour d’expérience.
- Comparer résultats attendus et résultats obtenus.
- Identifier les facteurs de succès.
- Identifier les irritants et écarts.
- Évaluer l’efficacité des standards, prompts, composants et templates.
- Produire des recommandations.
- Créer les actions d’amélioration.

### Entrées

- Dossier de release.
- KPI projet.
- Retours utilisateurs.
- Retours équipe delivery.
- Anomalies post-release.
- Écarts documentés.
- Prompts et composants utilisés.
- Décisions prises.

### Sorties

- Fiche REX.
- Synthèse des enseignements.
- Recommandations.
- Actions d’amélioration.
- Candidats standards.
- Candidats templates.
- Candidats prompts Gold.
- Mise à jour des KPI maturité.

### Modules SFIA utilisés

- Référentiel REX.
- Base actions SFIA.
- Bibliothèque prompts.
- Bibliothèque composants.
- Bibliothèque templates.
- Standards SFIA.
- Base KPI maturité.
- Référentiel décisions.

### Sous-moteurs utilisés

- Moteur d’analyse REX.
- Moteur de synthèse d’enseignements.
- Moteur d’identification d’améliorations.
- Moteur de scoring d’impact.
- Moteur de recommandation de standardisation.
- Moteur de mise à jour KPI.

### Artefacts produits

- Fiche REX.
- Rapport d’apprentissage.
- Liste des irritants.
- Liste des bonnes pratiques.
- Backlog d’amélioration.
- Actions SFIA.
- Prompts candidats Gold.
- Standards candidats.
- Templates candidats.
- Mise à jour des métriques.

### KPI

- Taux de projets avec REX réalisé.
- Délai moyen de production du REX.
- Nombre d’enseignements capitalisés.
- Nombre d’actions créées.
- Nombre de prompts candidats.
- Nombre de standards candidats.
- Taux de réutilisation observé.
- Impact mesuré sur maturité SFIA.

### Critères de validation

- REX documenté.
- Résultats mesurés.
- Enseignements qualifiés.
- Actions créées et priorisées.
- Assets candidats identifiés.
- KPI mis à jour.
- Recommandations validées.
- Décision de passage en Improve formalisée.

### Risques

- REX réalisé trop tard.
- Enseignements trop génériques.
- Actions non priorisées.
- Mesure insuffisante.
- Capitalisation non exploitable.
- Retours utilisateurs absents.
- Absence de lien avec amélioration plateforme.

### Décisions

- Créer une action d’amélioration.
- Promouvoir un prompt candidat.
- Proposer un standard.
- Proposer un template.
- Déprécier un composant.
- Ouvrir une expérimentation.
- Clôturer sans amélioration majeure.

### Niveau d’automatisation

**Moyen à élevé.**

La synthèse, la classification, la détection de patterns et la génération d’actions peuvent être fortement assistées. La validation des enseignements et priorités relève de la gouvernance.

---

## 8. Improve

### Mission

Transformer les apprentissages validés en évolutions concrètes de la plateforme SFIA.

### Objectifs

- Prioriser les actions d’amélioration.
- Mettre à jour les standards.
- Publier ou améliorer les templates.
- Industrialiser les prompts Gold.
- Intégrer ou déprécier les composants.
- Ajuster les quality gates.
- Mettre à jour le pipeline si nécessaire.
- Mesurer l’impact des améliorations.

### Entrées

- Fiche REX.
- Actions d’amélioration.
- Recommandations.
- Prompts candidats.
- Standards candidats.
- Templates candidats.
- Composants candidats.
- KPI maturité.

### Sorties

- Standards mis à jour.
- Prompts Gold publiés.
- Templates enrichis.
- Composants intégrés ou dépréciés.
- Quality gates ajustés.
- Roadmap SFIA mise à jour.
- KPI maturité actualisés.
- Version du pipeline éventuellement révisée.

### Modules SFIA utilisés

- Standards SFIA.
- Bibliothèque Gold Prompts.
- Bibliothèque templates.
- Bibliothèque composants.
- Base actions.
- Base KPI maturité.
- Roadmap SFIA.
- Référentiel gouvernance.

### Sous-moteurs utilisés

- Moteur de priorisation.
- Moteur de standardisation.
- Moteur de normalisation des prompts.
- Moteur de gestion de versions.
- Moteur d’analyse d’impact.
- Moteur de mise à jour de roadmap.
- Moteur de gouvernance des changements.

### Artefacts produits

- Fiche d’évolution plateforme.
- Standard révisé.
- Prompt Gold publié.
- Template versionné.
- Composant référencé.
- Décision de gouvernance.
- Mise à jour roadmap.
- Tableau de suivi des impacts.
- Nouvelle version éventuelle du pipeline.

### KPI

- Taux d’actions d’amélioration clôturées.
- Délai moyen de transformation REX → amélioration.
- Nombre de standards mis à jour.
- Nombre de prompts Gold publiés.
- Nombre de templates enrichis.
- Taux d’adoption des assets améliorés.
- Progression de maturité SFIA.
- Réduction des irritants récurrents.

### Critères de validation

- Amélioration priorisée.
- Impact documenté.
- Asset versionné.
- Gouvernance validée.
- Communication réalisée.
- KPI mis à jour.
- Adoption mesurable.
- Boucle de feedback fermée.

### Risques

- Backlog d’amélioration non traité.
- Standardisation excessive.
- Prompts publiés sans preuve suffisante.
- Templates enrichis mais non utilisés.
- Absence de mesure d’impact.
- Gouvernance trop lourde.
- Améliorations non alignées avec la roadmap.

### Décisions

- Mettre à jour un standard.
- Publier un prompt Gold.
- Créer ou modifier un template.
- Intégrer un composant.
- Déprécier un asset.
- Modifier un quality gate.
- Réviser le pipeline.
- Reporter une amélioration.

### Niveau d’automatisation

**Moyen.**

L’analyse d’impact, la proposition de mise à jour, la normalisation et la génération documentaire peuvent être assistées. La validation des standards et versions officielles relève de la gouvernance SFIA.

# Quality Gates

Les quality gates constituent les points de contrôle formels entre les phases du pipeline. Ils garantissent que le passage à la phase suivante repose sur des critères objectifs, documentés et traçables.

<aside>
✅

Un quality gate SFIA ne contrôle pas uniquement l’avancement projet. Il vérifie également la qualité des artefacts, la traçabilité des décisions, la complétude documentaire et le potentiel de capitalisation plateforme.

</aside>

## Gate 1 — Intake → Qualification

### Objectif du contrôle

Vérifier que le besoin est suffisamment clair pour justifier une qualification.

### Critères clés

- Besoin formulé.
- Sponsor identifié.
- Valeur attendue exprimée.
- Périmètre initial décrit.
- Absence de doublon évident.
- Informations minimales disponibles.
- Décision d’entrée en qualification validée.

### Décision possible

- Passer en qualification.
- Demander complément.
- Fusionner.
- Rejeter.
- Mettre en attente.

## Gate 2 — Qualification → Design

### Objectif du contrôle

Valider que le besoin est pertinent, faisable et suffisamment cadré pour engager une conception.

### Critères clés

- Problème métier clarifié.
- Valeur mesurable.
- Risques principaux identifiés.
- Contraintes documentées.
- Exigences initiales formalisées.
- Standards applicables identifiés.
- Décision go / no-go documentée.

### Décision possible

- Passer en design.
- Réduire le périmètre.
- Lancer une expérimentation.
- Requalifier.
- Abandonner.

## Gate 3 — Design → Build

### Objectif du contrôle

Valider que la solution cible est suffisamment conçue pour être construite.

### Critères clés

- Architecture cible validée.
- Exigences couvertes.
- NFR intégrées.
- Composants identifiés.
- Prompts de build cadrés.
- Stratégie de test définie.
- Décisions d’architecture documentées.

### Décision possible

- Autoriser le build.
- Demander revue d’architecture.
- Revoir le design.
- Accepter une dérogation.
- Lancer un spike technique.

## Gate 4 — Build → Validate

### Objectif du contrôle

Vérifier que la solution est suffisamment construite, documentée et testée pour entrer en validation.

### Critères clés

- Fonctionnalités implémentées.
- Tests unitaires réalisés.
- Documentation technique à jour.
- Écarts documentés.
- Composants candidats décrits.
- Prompts candidats versionnés.
- Preuves de build disponibles.

### Décision possible

- Passer en validation.
- Corriger.
- Revenir au design.
- Réduire le périmètre.
- Formaliser une dette temporaire.

## Gate 5 — Validate → Release

### Objectif du contrôle

Évaluer si la solution peut être livrée dans des conditions acceptables de qualité, conformité et risque.

### Critères clés

- Tests critiques passés.
- Anomalies bloquantes résolues.
- Documentation complète.
- Conformité standards contrôlée.
- Risques résiduels acceptés.
- Assets réutilisables évalués.
- Recommandation go / no-go formalisée.

### Décision possible

- Autoriser release.
- Bloquer release.
- Corriger et revalider.
- Publier partiellement.
- Accepter risque résiduel.

## Gate 6 — Release → Learn

### Objectif du contrôle

S’assurer que la livraison est complète et que les conditions de capitalisation sont réunies.

### Critères clés

- Application livrée.
- Documentation publiée.
- Notes de release disponibles.
- Composants et prompts versionnés.
- Écarts acceptés tracés.
- KPI collectés.
- REX planifié.

### Décision possible

- Passer en Learn.
- Compléter documentation.
- Corriger versioning.
- Reporter REX.
- Ouvrir action post-release.

## Gate 7 — Learn → Improve

### Objectif du contrôle

Valider que les enseignements sont suffisamment qualifiés pour déclencher des améliorations de plateforme.

### Critères clés

- REX produit.
- Enseignements qualifiés.
- Actions priorisées.
- Assets candidats identifiés.
- KPI maturité mis à jour.
- Recommandations validées.
- Impact potentiel estimé.

### Décision possible

- Passer en Improve.
- Requalifier les enseignements.
- Compléter les mesures.
- Clôturer sans action.
- Lancer expérimentation.

## Gate 8 — Improve → Platform Baseline

### Objectif du contrôle

Valider l’intégration officielle d’une amélioration dans la baseline SFIA.

### Critères clés

- Changement priorisé.
- Asset versionné.
- Standard ou template validé.
- Prompt Gold vérifié.
- Impact documenté.
- Communication réalisée.
- KPI mis à jour.

### Décision possible

- Intégrer à la baseline.
- Reporter.
- Rejeter.
- Expérimenter davantage.
- Déprécier un asset existant.

# Boucles de rétroaction

Le pipeline SFIA n’est pas linéaire au sens strict. Il comprend des boucles de rétroaction permettant d’ajuster le périmètre, la conception, la réalisation, les standards et la plateforme.

## Boucles principales

### Qualification → Intake

Utilisée lorsque le besoin initial est incomplet, ambigu ou mal orienté.

#### Impact

- Clarification du sponsor.
- Reformulation du besoin.
- Fusion avec une demande existante.
- Repriorisation.
- Mise à jour de la fiche intake.

### Design → Qualification

Utilisée lorsque la conception révèle une complexité, une contrainte ou un risque non identifié.

#### Impact

- Révision de la valeur attendue.
- Ajustement du périmètre.
- Réévaluation de la faisabilité.
- Mise à jour des risques.
- Nouvelle décision de lancement.

### Build → Design

Utilisée lorsque l’implémentation révèle une incohérence de conception ou une dette technique significative.

#### Impact

- Révision de l’architecture.
- Modification de patterns.
- Ajustement de composants.
- Mise à jour des décisions d’architecture.
- Revalidation du design.

### Validate → Build

Utilisée lorsque la validation détecte des anomalies, écarts de conformité ou manques documentaires.

#### Impact

- Correction logicielle.
- Complément documentaire.
- Ajustement de tests.
- Mise à jour des preuves.
- Nouvelle validation.

### Release → Validate

Utilisée lorsque des conditions de livraison ne sont pas satisfaites ou qu’un risque final exige une revalidation.

#### Impact

- Reprise des tests.
- Revue des risques.
- Ajustement des notes de release.
- Validation complémentaire.
- Nouvelle décision go / no-go.

### Learn → Improve

Utilisée pour transformer les enseignements en actions structurées.

#### Impact

- Création d’actions plateforme.
- Mise à jour de standards.
- Promotion de prompts.
- Enrichissement des templates.
- Ajustement des quality gates.

### Improve → Intake

Utilisée lorsqu’une amélioration de plateforme génère un nouveau besoin de delivery ou d’expérimentation.

#### Impact

- Création d’un nouveau besoin.
- Lancement d’un projet plateforme.
- Qualification d’une expérimentation.
- Mise à jour de roadmap.

## Typologie des retours

### Retour correctif

Corrige une anomalie, un écart ou une insuffisance.

### Retour adaptatif

Ajuste le périmètre ou la conception à une contrainte découverte.

### Retour d’apprentissage

Transforme une expérience en connaissance.

### Retour de standardisation

Convertit une bonne pratique en standard, prompt, template ou composant réutilisable.

### Retour stratégique

Réoriente la roadmap ou la gouvernance SFIA.

# Indicateurs de performance

Les KPI du pipeline mesurent la performance de delivery, la qualité des livrables, la capacité de réutilisation, le niveau d’automatisation et la maturité de la plateforme.

## KPI de flux

- Temps moyen Intake → Qualification.
- Temps moyen Qualification → Design.
- Temps moyen Design → Build.
- Temps moyen Build → Validate.
- Temps moyen Validate → Release.
- Temps moyen Release → Learn.
- Temps moyen Learn → Improve.
- Lead time global du besoin à l’amélioration plateforme.
- Nombre de retours entre phases.
- Taux de blocage par quality gate.

## KPI de qualité

- Taux de conformité aux standards.
- Taux de couverture des exigences.
- Taux de réussite des tests.
- Nombre d’anomalies critiques.
- Taux de documentation complète à la release.
- Nombre d’écarts acceptés.
- Taux de dette technique ouverte.
- Taux de revalidation nécessaire.

## KPI de documentation

- Taux de livrables documentaires produits dans le flux.
- Taux de pages Notion complètes.
- Taux de décisions documentées.
- Taux de traçabilité exigences / design / build / test.
- Délai de publication documentaire.
- Nombre de documents réutilisables produits.

## KPI de réutilisation

- Taux de réutilisation de composants existants.
- Nombre de nouveaux composants validés.
- Taux d’adoption des composants publiés.
- Nombre de templates enrichis.
- Taux d’utilisation des templates standards.
- Nombre de standards appliqués.
- Nombre de standards révisés.

## KPI prompts et IA

- Nombre de prompts candidats.
- Nombre de prompts Gold publiés.
- Taux de prompts validés.
- Taux de réutilisation des prompts.
- Taux d’assistance IA par phase.
- Gains estimés liés à l’automatisation.
- Nombre d’écarts liés à un usage IA non maîtrisé.

## KPI d’apprentissage

- Taux de projets avec REX.
- Délai moyen de production du REX.
- Nombre d’enseignements capitalisés.
- Nombre d’actions issues du REX.
- Taux d’actions REX clôturées.
- Taux d’améliorations intégrées à la plateforme.
- Impact sur la maturité SFIA.

## KPI de gouvernance

- Nombre de décisions formalisées.
- Nombre de dérogations.
- Taux de dérogations clôturées.
- Temps moyen d’arbitrage.
- Taux de respect des quality gates.
- Nombre d’évolutions de pipeline.
- Taux d’adoption des évolutions.

# Gouvernance du pipeline

La gouvernance du pipeline garantit la cohérence, la stabilité, l’évolutivité et la conformité du modèle SFIA.

## Gestion des évolutions

Les évolutions du pipeline doivent être traitées comme des changements de référentiel.

### Principes

- Toute évolution doit être justifiée par un besoin, un REX, un risque ou une opportunité mesurée.
- Toute évolution doit être documentée.
- Toute évolution doit être versionnée.
- Toute évolution doit préciser son impact sur les phases, quality gates, artefacts, KPI et rôles.
- Toute évolution majeure doit être validée par la gouvernance SFIA.

### Processus

1. Identification d’un besoin d’évolution.
2. Qualification de l’impact.
3. Proposition de changement.
4. Revue par la gouvernance SFIA.
5. Validation ou rejet.
6. Mise à jour du référentiel.
7. Communication.
8. Mesure d’adoption.

## Gestion des exceptions

Les exceptions sont autorisées uniquement lorsqu’elles sont explicites, justifiées et temporaires.

### Types d’exceptions

- Exception de périmètre.
- Exception de standard.
- Exception documentaire.
- Exception de qualité.
- Exception de délai.
- Exception technique.
- Exception de gouvernance.

### Règles

- Toute exception doit être documentée.
- Toute exception doit avoir un propriétaire.
- Toute exception doit avoir une date de revue.
- Toute exception doit comporter un risque associé.
- Toute exception doit être clôturée, prolongée ou transformée en évolution de standard.

## Amélioration continue

L’amélioration continue est intégrée au pipeline par les phases Learn et Improve.

### Sources d’amélioration

- REX projet.
- KPI de performance.
- Écarts récurrents.
- Dette technique.
- Anomalies post-release.
- Feedback utilisateurs.
- Feedback équipes delivery.
- Opportunités d’automatisation.
- Expérimentations validées.

### Mécanismes

- Backlog d’amélioration SFIA.
- Revues périodiques.
- Priorisation par valeur et impact.
- Mise à jour des standards.
- Publication de prompts Gold.
- Enrichissement des templates.
- Suivi KPI maturité.

## Rôles et responsabilités

### Sponsor métier

- Porte la valeur attendue.
- Valide les objectifs.
- Participe aux arbitrages.
- Confirme l’acceptation métier.

### Product Owner ou responsable besoin

- Formalise le besoin.
- Priorise le périmètre.
- Valide les exigences.
- Suit la valeur livrée.

### Enterprise Architect

- Garantit l’alignement avec l’architecture d’entreprise.
- Valide les décisions structurantes.
- Identifie les standards applicables.
- Arbitre les écarts majeurs.

### Architecte solution

- Conçoit l’architecture cible.
- Documente les choix techniques.
- S’assure de la cohérence avec les patterns.
- Contribue à la stratégie de validation.

### Tech Lead

- Pilote la réalisation.
- Garantit la qualité technique.
- Supervise la réutilisation des composants.
- Documente la dette technique.

### Équipe delivery

- Produit la solution.
- Met à jour les artefacts.
- Applique les standards.
- Contribue au REX.

### Responsable qualité

- Définit et contrôle les critères de validation.
- Suit les anomalies.
- Vérifie la conformité documentaire.
- Contribue aux quality gates.

### Responsable plateforme SFIA

- Maintient les référentiels.
- Priorise les améliorations.
- Supervise les assets réutilisables.
- Pilote les KPI de maturité.

### Gouvernance SFIA

- Valide les évolutions du pipeline.
- Arbitre les exceptions.
- Approuve les standards.
- Suit l’amélioration continue.

# Pipeline auto-améliorant

Le pipeline SFIA est conçu comme un système auto-améliorant. Chaque projet enrichit la plateforme par les assets, données, décisions et enseignements qu’il produit.

## Mécanisme d’enrichissement

Chaque projet contribue à la plateforme selon sept axes :

### 1. Enrichissement des standards

Les pratiques efficaces, répétables et validées peuvent devenir des standards SFIA.

### 2. Enrichissement des prompts

Les prompts utiles, robustes et réutilisables peuvent être promus en prompts Gold.

### 3. Enrichissement des templates

Les documents, checklists ou formats efficaces peuvent être intégrés à la bibliothèque de templates.

### 4. Enrichissement des composants

Les éléments techniques réutilisables peuvent être documentés, versionnés et intégrés au catalogue.

### 5. Enrichissement du REX

Les enseignements structurés alimentent la base de connaissance SFIA.

### 6. Enrichissement des KPI

Les mesures collectées améliorent le pilotage de la maturité, du flux et de la qualité.

### 7. Enrichissement du pipeline

Les limites observées du pipeline peuvent déclencher une évolution de sa structure, de ses gates ou de ses critères.

## Chaîne de transformation de la connaissance

Le cycle d’apprentissage SFIA suit la chaîne suivante :

1. Observation projet.
2. Mesure.
3. Analyse.
4. Enseignement.
5. Recommandation.
6. Action d’amélioration.
7. Standardisation.
8. Adoption.
9. Mesure d’impact.
10. Révision de la baseline.

<aside>
🔁

Le pipeline devient plus performant lorsque chaque projet est traité comme une source de connaissance. La livraison est donc à la fois un résultat et un instrument d’apprentissage.

</aside>

## Conditions de réussite

- REX systématique.
- KPI fiables.
- Gouvernance active.
- Assets versionnés.
- Standards vivants.
- Prompts évalués.
- Templates réellement utilisés.
- Décisions documentées.
- Boucles de feedback fermées.

# Recommandations

## Recommandations stratégiques

1. Positionner le pipeline SFIA comme référentiel officiel de delivery.
2. Rendre les quality gates obligatoires pour les projets structurants.
3. Piloter la performance du pipeline par des KPI visibles.
4. Formaliser une gouvernance SFIA légère mais régulière.
5. Traiter les prompts, templates et composants comme des actifs de plateforme.
6. Faire du REX un livrable obligatoire, non optionnel.
7. Versionner les évolutions du pipeline.

## Recommandations opérationnelles

1. Créer des templates Notion pour chaque phase.
2. Définir les checklists de chaque quality gate.
3. Mettre en place un tableau de suivi des projets par phase.
4. Structurer la bibliothèque de prompts Gold.
5. Créer un registre des standards SFIA.
6. Créer une base actions d’amélioration.
7. Relier les KPI aux phases du pipeline.
8. Définir les responsabilités minimales par rôle.
9. Mettre en place une revue mensuelle du pipeline.

## Recommandations d’automatisation

1. Automatiser la génération des fiches intake.
2. Assister la qualification par scoring valeur / complexité / risque.
3. Générer les dossiers de conception à partir de templates.
4. Assister la revue de conformité standards.
5. Générer les cas de test depuis les exigences.
6. Produire automatiquement les notes de release.
7. Générer une synthèse REX structurée.
8. Proposer automatiquement des actions d’amélioration.
9. Identifier les prompts candidats à la promotion Gold.

# Roadmap

## Horizon 1 — Stabilisation du référentiel

### Objectif

Formaliser la baseline méthodologique du pipeline SFIA.

### Actions prioritaires

- Valider SFIA Delivery Pipeline v1.0.
- Définir les templates Notion des huit phases.
- Définir les checklists des quality gates.
- Créer le registre des décisions.
- Créer le modèle de fiche REX.
- Définir les KPI minimums.

### Résultat attendu

Un pipeline documenté, compréhensible, exploitable et prêt pour expérimentation contrôlée.

## Horizon 2 — Expérimentation contrôlée

### Objectif

Tester le pipeline sur un nombre limité de projets pilotes.

### Actions prioritaires

- Sélectionner deux à trois projets pilotes.
- Appliquer le pipeline complet.
- Mesurer les KPI de flux, qualité, documentation et apprentissage.
- Identifier les frictions.
- Ajuster les templates.
- Capitaliser les premiers REX.

### Résultat attendu

Une version éprouvée du pipeline, enrichie par des observations réelles.

## Horizon 3 — Industrialisation

### Objectif

Étendre le pipeline à l’ensemble des projets éligibles SFIA.

### Actions prioritaires

- Généraliser les quality gates.
- Publier les prompts Gold.
- Standardiser les templates.
- Mettre en place le tableau de bord KPI.
- Former les rôles clés.
- Formaliser le comité de gouvernance SFIA.

### Résultat attendu

Un modèle de delivery reproductible, mesurable et piloté.

## Horizon 4 — Optimisation continue

### Objectif

Transformer le pipeline en système auto-améliorant mature.

### Actions prioritaires

- Automatiser les contrôles récurrents.
- Détecter les patterns d’écarts.
- Mesurer l’adoption des assets.
- Réviser les standards sur base REX.
- Optimiser les boucles de feedback.
- Mettre à jour régulièrement la baseline.

### Résultat attendu

Une plateforme SFIA capable d’apprendre de chaque projet et d’améliorer continuellement sa performance.

# v1.1 Update — SFIA Fast Track Delivery Pipeline

The SFIA Fast Track delivery pipeline is based on:

1. Scope and guardrails;
2. Dedicated branch;
3. Targeted implementation or documentation update;
4. Validation and audit when needed;
5. Pull request;
6. Human review and merge;
7. Post-merge status;
8. Capitalization;
9. Optional Notion preparation after capitalization.

The pipeline follows the rule:

> One cycle = one useful result.

## Operational constraints (v1.1)

| Rule | Source |
|------|--------|
| One cycle = one objective | `method/sfia-fast-track/core/sfia-rules-update.md` |
| Explicit guardrails per cycle | `method/sfia-fast-track/checklists/guardrails-checklist.md` |
| Single PR per cycle | `method/sfia-fast-track/templates/pr-body-template.md` |
| Mandatory post-merge documentation | `method/sfia-fast-track/templates/post-merge-template.md` |
| Audit before major cycle | Interv360 audit (`projects/interv360/06-audit-rex/`) |
| REX after major milestone | `method/sfia-fast-track/audit-rex/interv360-application-rex.md` |
| Notion only after capitalization plan | `method/sfia-fast-track/checklists/notion-publication-checklist.md` |

## v1.1 Pipeline Clarification

The v1.0 pipeline describes the strategic target delivery model:

1. Project Intake;
2. Qualification;
3. Design;
4. Build;
5. Validate;
6. Release;
7. Learn;
8. Improve.

The v1.1 Fast Track pipeline describes the current operational mode validated through Interv360:

1. Scope and guardrails;
2. Dedicated branch;
3. Targeted implementation or documentation update;
4. Validation and audit when needed;
5. Pull request;
6. Human review and merge;
7. Post-merge status;
8. Capitalization;
9. Optional Notion preparation after capitalization.

These two pipelines are not competing models.

They operate at two levels:

| Level | Pipeline | Role |
|-------|----------|------|
| Strategic | v1.0 Delivery Pipeline | Target end-to-end SFIA delivery model |
| Operational | v1.1 Fast Track | Current working mode for controlled repository-based cycles |

The Fast Track pipeline is the operational bridge toward the broader strategic pipeline.

## v1.1 Foundation — ChatGPT ↔ Cursor Operating Model

SFIA v1.1 formalizes the ChatGPT ↔ Cursor workflow in:

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`

This document defines the current level-0 operating model and acts as the bridge toward future automation engine specifications.

Execution relies on a manual ChatGPT ↔ Cursor loop with mandatory human validation.

This document is required before moving to automation engine specifications.

## Reference project

Interv360 (`projects/interv360/`, phases 00–09) validates this pipeline operationally.

# Conclusion

Le **SFIA Delivery Pipeline v1.1** constitue le référentiel fondateur du delivery au sein de la plateforme SFIA.

Il établit un modèle intégré dans lequel chaque besoin est cadré, conçu, construit, validé, livré, capitalisé puis transformé en amélioration de plateforme. Il dépasse la logique traditionnelle de gestion de projet pour instaurer un modèle de **Software Factory apprenante**, orienté flux, qualité, documentation, automatisation, capitalisation et gouvernance.

Ce pipeline devient la référence officielle pour orchestrer la production de valeur, sécuriser la qualité des livrables, industrialiser les pratiques, structurer les actifs réutilisables et améliorer continuellement la maturité SFIA.

<aside>
🏁

La finalité du pipeline SFIA est de faire de chaque projet un double succès : une solution livrée et une plateforme renforcée.

</aside>