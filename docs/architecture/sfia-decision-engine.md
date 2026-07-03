---
source: Notion / SFIA Architecture
status: foundation
sync: manual-export
version: v1.1
updated_after: SFIA foundation v1.1 consolidation
scope: decision engine
---

# SFIA Decision Engine v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** SFIA foundation v1.1 consolidation  
**Scope:** Decision engine

<callout icon="🏛️">**Document fondateur — Référentiel d'architecture d'entreprise**  

Ce document définit le moteur de décision officiel de la plateforme SFIA. Le contenu v1.0 (export Notion) est conservé ci-dessous. Les sections **v1.1 Update** en fin de document formalisent le modèle décisionnel opérationnel.</callout>

## v1.1 Consistency Rule

SFIA v1.1 preserves the historical Decision Engine foundation while adding operational decision rules derived from Interv360, SFIA Fast Track, workspace consolidation, the ChatGPT ↔ Cursor operating model, Rules & Guardrails and the Knowledge Layer.

When v1.0 and v1.1 formulations are in tension, the v1.1 operational clarification prevails for current SFIA execution.

## v1.1 Engineering Principles Compliance

All SFIA decisions must comply with:

- `docs/foundation/sfia-engineering-principles.md`

The Decision Engine applies these principles to explicit decisions, trade-offs, exceptions, ADRs, GO / NO-GO reviews, PR readiness, post-merge closure and capitalization choices.

When a decision requires an exception to an Engineering Principle, the exception must be explicit, justified, traceable and validated by a human.

# Objectif

## Finalité du document

Le présent document définit le **SFIA Decision Engine v1.0**, moteur de décision officiel de la plateforme **Software Factory IA — SFIA**.

Il décrit la manière dont la plateforme :

- analyse un besoin ou un projet ;
- qualifie son contexte ;
- classe la demande selon des critères standardisés ;
- évalue la complexité, les risques, le potentiel de réutilisation et le niveau d’automatisation ;
- sélectionne les composants, standards, templates et prompts appropriés ;
- orchestre les modules contributifs de la plateforme ;
- produit les livrables nécessaires au delivery ;
- capitalise les résultats pour améliorer les décisions futures.

## Positionnement

Le **Decision Engine** constitue le cerveau de la SFIA.

Il ne définit pas les règles métier d’une application spécifique. Il définit les règles, mécanismes et principes qui permettent à la plateforme SFIA de décider **comment produire, documenter, contrôler, industrialiser et améliorer** les projets qu’elle accompagne.

## Objectifs opérationnels

Le Decision Engine vise à :

1. **Accélérer la prise de décision** en standardisant les analyses et arbitrages.
2. **Réduire la variabilité** des pratiques projet.
3. **Favoriser la réutilisation** des actifs existants.
4. **Garantir la conformité** aux standards SFIA.
5. **Renforcer la qualité** des livrables produits.
6. **Piloter les risques** dès les phases amont.
7. **Capitaliser l’expérience** issue des projets, audits, KPI et expérimentations.
8. **Faire évoluer la plateforme** sur la base de preuves et non d’intuitions.

# Contexte

## Enjeux de la SFIA

La plateforme SFIA vise à industrialiser la conception, la documentation, la gouvernance et le delivery de projets mobilisant des pratiques de Software Factory, d’architecture d’entreprise, d’intelligence décisionnelle et d’IA générative.

Dans ce contexte, les projets présentent généralement :

- une diversité de besoins métiers et techniques ;
- des niveaux variables de maturité ;
- des dépendances multiples entre composants, standards, prompts, données et livrables ;
- des contraintes de qualité, sécurité, conformité et maintenabilité ;
- un besoin de traçabilité des décisions ;
- une nécessité d’amélioration continue.

Sans moteur de décision explicite, la plateforme risque de produire des réponses hétérogènes, dépendantes des contributeurs, difficiles à auditer et peu capitalisables.

## Besoin d’un moteur décisionnel

Le Decision Engine répond à ce besoin en fournissant un cadre structuré pour :

- qualifier chaque demande ;
- orienter le projet vers le bon parcours ;
- recommander les composants pertinents ;
- déclencher les standards applicables ;
- sélectionner les templates documentaires ;
- générer les prompts nécessaires ;
- appliquer les contrôles qualité ;
- intégrer les retours d’expérience ;
- faire évoluer les règles de décision.

## Périmètre

Le Decision Engine couvre les décisions relatives à la plateforme SFIA elle-même, notamment :

- la qualification des projets ;
- la classification des cas d’usage ;
- la sélection des composants SFIA ;
- l’activation des standards ;
- la génération documentaire ;
- la génération et l’adaptation des prompts ;
- l’évaluation qualité ;
- l’identification des risques ;
- la planification des actions ;
- la capitalisation post-delivery ;
- l’évolution des règles et référentiels.

Il ne couvre pas :

- les règles métier propres à une application cliente ;
- les décisions opérationnelles internes à un système applicatif tiers ;
- les arbitrages organisationnels hors périmètre SFIA ;
- les règles de sécurité ou conformité non traduites en standards SFIA.

# Vision

## Vision cible

La vision cible est de faire du Decision Engine un **mécanisme d’orchestration intelligent, gouverné et évolutif**, capable de transformer un besoin initial en parcours projet structuré, outillé, documenté et capitalisable.

Le moteur doit fonctionner comme une couche décisionnelle transverse reliant :

- les besoins métiers ;
- les standards d’architecture ;
- les composants réutilisables ;
- les templates documentaires ;
- les prompts SFIA ;
- les contrôles qualité ;
- les risques ;
- les KPI ;
- les REX ;
- les expérimentations.

## Ambition

L’ambition du Decision Engine est de permettre à la SFIA de passer d’une logique de production assistée à une logique de **production pilotée par référentiel**.

Cela implique que chaque décision importante soit :

- explicite ;
- traçable ;
- justifiée ;
- mesurable ;
- réutilisable ;
- améliorable.

## Lecture exécutive

Pour les décideurs, le Decision Engine apporte :

- une meilleure maîtrise du portefeuille de projets ;
- une réduction du risque d’exécution ;
- une cohérence accrue des livrables ;
- un pilotage par la valeur, la maturité et la preuve ;
- une capacité à industrialiser les bonnes pratiques.

## Lecture opérationnelle

Pour les équipes, le Decision Engine fournit :

- un parcours de décision clair ;
- des critères d’analyse partagés ;
- des composants recommandés ;
- des standards applicables ;
- des prompts prêts à l’emploi ;
- des contrôles qualité intégrés ;
- des mécanismes de retour d’expérience.

# Principes du moteur de décision

<aside>
🧭

Les principes du Decision Engine sont des invariants d’architecture. Ils doivent guider toutes les règles, arbitrages et évolutions du moteur.

</aside>

## Décision guidée par le contexte

### Principe

Toute décision doit être prise à partir du contexte réel du projet, et non à partir d’une réponse générique.

Le moteur tient compte notamment :

- du type de besoin ;
- du domaine concerné ;
- du niveau de maturité ;
- des enjeux métiers ;
- de la criticité ;
- des dépendances techniques ;
- des contraintes de sécurité ;
- des délais ;
- de la capacité de delivery ;
- du niveau d’incertitude ;
- de la disponibilité des actifs existants.

### Implications

Ce principe impose que le moteur commence toujours par une phase de qualification. Une sélection de composants ou de templates sans qualification préalable est considérée comme non conforme.

### Exemple

Un projet exploratoire à forte incertitude ne doit pas suivre le même parcours qu’un projet de standardisation déjà mature. Le premier sera orienté vers expérimentation, hypothèses et KPI de validation ; le second vers industrialisation, conformité et déploiement contrôlé.

## Réutilisation avant création

### Principe

Le moteur doit privilégier la réutilisation des composants, standards, prompts, templates et livrables existants avant toute création nouvelle.

### Implications

Avant de recommander une création, le moteur doit :

1. rechercher les actifs existants ;
2. évaluer leur adéquation ;
3. mesurer l’effort d’adaptation ;
4. comparer adaptation et création ;
5. justifier toute décision de création nette.

### Bénéfices

Ce principe permet de :

- réduire les délais ;
- limiter la dette documentaire ;
- renforcer la cohérence ;
- améliorer la maintenabilité ;
- augmenter le retour sur investissement des actifs SFIA.

## Standardisation avant personnalisation

### Principe

La personnalisation doit rester une exception justifiée. Le moteur applique d’abord les standards SFIA, puis identifie les écarts nécessaires.

### Implications

Chaque projet doit être comparé aux standards existants :

- standards d’architecture ;
- standards de documentation ;
- standards de prompts ;
- standards qualité ;
- standards de gouvernance ;
- standards de capitalisation.

Toute personnalisation doit être :

- contextualisée ;
- documentée ;
- évaluée ;
- validée ;
- capitalisée si elle présente un intérêt récurrent.

## Preuves avant validation

### Principe

Une décision structurante ne doit pas être validée sans preuve suffisante.

Les preuves peuvent provenir :

- d’un REX ;
- d’un audit ;
- d’un KPI ;
- d’une expérimentation ;
- d’un test ;
- d’une revue d’architecture ;
- d’un contrôle qualité ;
- d’une comparaison de scénarios ;
- d’un benchmark interne ;
- d’un historique de projets.

### Implications

Le moteur doit distinguer :

- une hypothèse ;
- une recommandation ;
- une décision provisoire ;
- une décision validée ;
- une décision standardisée.

Cette distinction est essentielle pour éviter de transformer prématurément une intuition en règle officielle.

## Amélioration continue

### Principe

Le Decision Engine doit apprendre de chaque projet.

Chaque delivery, audit, expérimentation ou REX doit enrichir progressivement :

- les règles de décision ;
- les scores ;
- les seuils ;
- les standards ;
- les templates ;
- les prompts ;
- les contrôles qualité ;
- les recommandations de composants.

### Implications

Le moteur n’est pas statique. Il évolue par cycles gouvernés, selon un processus de création, test, validation, promotion et suppression des règles.

# Les niveaux de décision

## Vue d’ensemble

Le Decision Engine intervient à trois niveaux complémentaires :

1. **Décisions stratégiques** — orienter la plateforme et les investissements.
2. **Décisions tactiques** — structurer les parcours, standards et composants.
3. **Décisions opérationnelles** — guider l’exécution quotidienne des projets.

Ces niveaux doivent être cohérents entre eux. Une décision opérationnelle ne doit pas contredire une orientation tactique ou stratégique validée.

## Décisions stratégiques

### Définition

Les décisions stratégiques déterminent les grandes orientations de la plateforme SFIA.

Elles concernent notamment :

- les domaines prioritaires d’industrialisation ;
- les capacités à développer ;
- les standards à institutionnaliser ;
- les composants à pérenniser ;
- les familles de prompts à structurer ;
- les règles de gouvernance à renforcer ;
- les axes d’automatisation ;
- les indicateurs de maturité cible.

### Exemples

- Prioriser l’industrialisation des standards d’architecture.
- Créer un référentiel de prompts Gold.
- Définir un modèle de maturité SFIA.
- Renforcer les contrôles qualité avant promotion des livrables.
- Structurer une bibliothèque de composants réutilisables.

### Acteurs concernés

- Sponsor SFIA ;
- Enterprise Architect ;
- responsable de la gouvernance IT ;
- responsable Software Factory ;
- responsable IA générative ;
- comité d’architecture ;
- comité de pilotage.

## Décisions tactiques

### Définition

Les décisions tactiques traduisent les orientations stratégiques en mécanismes opérables.

Elles concernent :

- les règles de classification ;
- les critères de scoring ;
- les seuils d’activation ;
- les parcours projet ;
- les standards applicables ;
- les templates à utiliser ;
- les contrôles qualité à déclencher ;
- les niveaux de validation requis ;
- les règles d’escalade.

### Exemples

- Déclencher une revue d’architecture pour tout projet dont le score de complexité est supérieur à un seuil défini.
- Imposer un template de cadrage pour les projets multi-domaines.
- Activer un contrôle de sécurité pour les projets manipulant des données sensibles.
- Orienter les projets à faible maturité vers une phase d’expérimentation.

### Acteurs concernés

- architectes ;
- product owners ;
- responsables qualité ;
- responsables gouvernance ;
- référents standards ;
- référents prompts ;
- équipes delivery.

## Décisions opérationnelles

### Définition

Les décisions opérationnelles guident l’exécution concrète d’un projet ou d’une demande.

Elles concernent :

- le choix d’un template ;
- la sélection d’un prompt ;
- l’activation d’un composant ;
- la planification d’une action ;
- la demande d’un contrôle qualité ;
- la génération d’un livrable ;
- la création d’une fiche REX ;
- la mise à jour d’un KPI ;
- la proposition d’un ajustement.

### Exemples

- Utiliser le template de fiche d’expérimentation pour un cas d’usage non validé.
- Sélectionner un composant candidat existant plutôt qu’en créer un nouveau.
- Générer une note de cadrage à partir du contexte qualifié.
- Créer une action de remédiation après détection d’un risque élevé.
- Capitaliser un apprentissage dans le référentiel REX.

### Acteurs concernés

- contributeurs projet ;
- architectes opérationnels ;
- analystes ;
- équipes de production documentaire ;
- responsables de la capitalisation ;
- agents IA ou assistants spécialisés.

# Architecture du Decision Engine

<aside>
🧠

Le Decision Engine est organisé en sous-moteurs spécialisés. Chaque sous-moteur possède une mission claire, des responsabilités explicites, des entrées normalisées, des sorties exploitables et des interactions définies.

</aside>

## Vue d’ensemble de l’architecture

Le Decision Engine se compose de sept sous-moteurs principaux :

1. **Qualification Engine**
2. **Classification Engine**
3. **Component Selection Engine**
4. **Documentation Engine**
5. **Quality Engine**
6. **Risk Engine**
7. **Learning Engine**

Ces sous-moteurs ne fonctionnent pas comme des silos. Ils constituent une chaîne décisionnelle intégrée.

## Qualification Engine

### Mission

Le Qualification Engine transforme un besoin initial, souvent incomplet ou ambigu, en contexte exploitable par la plateforme SFIA.

### Responsabilités

- collecter les informations initiales ;
- clarifier le périmètre ;
- identifier les parties prenantes ;
- préciser les objectifs ;
- détecter les contraintes ;
- évaluer le niveau d’incertitude ;
- déterminer les informations manquantes ;
- préparer les données pour l’analyse et la classification.

### Entrées

- besoin exprimé ;
- description du projet ;
- objectifs métiers ;
- contraintes connues ;
- délais ;
- parties prenantes ;
- périmètre fonctionnel ;
- périmètre technique ;
- hypothèses initiales ;
- documents existants.

### Sorties

- fiche de qualification ;
- contexte structuré ;
- hypothèses explicites ;
- points ouverts ;
- premières contraintes identifiées ;
- niveau de complétude ;
- recommandation de poursuite ou de clarification.

### Interactions

Le Qualification Engine alimente :

- le Classification Engine pour catégoriser la demande ;
- le Risk Engine pour détecter les risques initiaux ;
- le Documentation Engine pour préparer les premiers livrables ;
- le Learning Engine pour comparer le contexte à des cas historiques.

## Classification Engine

### Mission

Le Classification Engine classe le projet selon des typologies standardisées afin d’orienter le parcours SFIA approprié.

### Responsabilités

- déterminer le type de projet ;
- identifier le niveau de maturité ;
- qualifier la nature du besoin ;
- classer le projet par domaine ;
- identifier les dépendances ;
- distinguer expérimentation, standardisation, industrialisation ou amélioration ;
- préparer les règles d’activation des composants et standards.

### Entrées

- contexte qualifié ;
- typologies SFIA ;
- référentiel des standards ;
- référentiel des composants ;
- historique des projets ;
- critères de maturité ;
- scores préliminaires.

### Sorties

- catégorie projet ;
- parcours recommandé ;
- niveau de maturité initial ;
- domaines concernés ;
- dépendances identifiées ;
- règles candidates à activer ;
- besoin éventuel d’arbitrage.

### Interactions

Le Classification Engine fournit des éléments au :

- Component Selection Engine pour recommander les composants ;
- Documentation Engine pour sélectionner les templates ;
- Quality Engine pour définir les contrôles ;
- Risk Engine pour affiner l’analyse des risques ;
- Learning Engine pour enrichir les patterns de classification.

## Component Selection Engine

### Mission

Le Component Selection Engine sélectionne les composants SFIA les plus pertinents pour répondre au besoin qualifié et classé.

### Responsabilités

- rechercher les composants existants ;
- évaluer leur adéquation ;
- comparer réutilisation, adaptation et création ;
- recommander les composants à activer ;
- identifier les dépendances entre composants ;
- proposer des composants candidats ;
- documenter les arbitrages de sélection.

### Entrées

- classification du projet ;
- contexte qualifié ;
- référentiel des composants ;
- standards applicables ;
- scores de réutilisation ;
- scores de complexité ;
- contraintes techniques ;
- retours d’expérience antérieurs.

### Sorties

- liste des composants recommandés ;
- composants obligatoires ;
- composants optionnels ;
- composants à adapter ;
- composants à créer ;
- justification de sélection ;
- dépendances ;
- risques associés ;
- plan d’activation.

### Interactions

Le Component Selection Engine interagit avec :

- le Documentation Engine pour documenter les composants retenus ;
- le Quality Engine pour vérifier la conformité ;
- le Risk Engine pour évaluer les impacts ;
- le Learning Engine pour capitaliser les résultats de sélection.

## Documentation Engine

### Mission

Le Documentation Engine produit, sélectionne et structure les livrables documentaires nécessaires au projet.

### Responsabilités

- sélectionner les templates appropriés ;
- générer les livrables de cadrage ;
- produire les documents d’architecture ;
- préparer les supports de décision ;
- générer les prompts associés ;
- assurer la cohérence documentaire ;
- maintenir la traçabilité entre besoin, décisions, composants et preuves.

### Entrées

- contexte qualifié ;
- classification projet ;
- composants sélectionnés ;
- standards applicables ;
- prompts disponibles ;
- règles de documentation ;
- niveau de maturité ;
- exigences de gouvernance.

### Sorties

- documents de cadrage ;
- dossiers d’architecture ;
- fiches d’expérimentation ;
- fiches REX ;
- plans d’action ;
- prompts générés ou sélectionnés ;
- matrices de décision ;
- synthèses exécutives.

### Interactions

Le Documentation Engine interagit avec :

- le Quality Engine pour vérifier les livrables ;
- le Risk Engine pour intégrer les risques ;
- le Learning Engine pour capitaliser les contenus ;
- le Component Selection Engine pour documenter les choix.

## Quality Engine

### Mission

Le Quality Engine garantit que les livrables, composants, prompts et décisions respectent les standards SFIA applicables.

### Responsabilités

- appliquer les contrôles qualité ;
- vérifier la complétude ;
- contrôler la cohérence ;
- détecter les écarts aux standards ;
- qualifier le niveau de preuve ;
- recommander des corrections ;
- préparer les validations ;
- empêcher la promotion d’actifs insuffisamment qualifiés.

### Entrées

- livrables produits ;
- standards qualité ;
- critères de validation ;
- règles de complétude ;
- composants sélectionnés ;
- prompts générés ;
- preuves disponibles ;
- résultats d’audit.

### Sorties

- score qualité ;
- liste des écarts ;
- recommandations de correction ;
- statut de validation ;
- niveau de preuve ;
- décision de promotion ou de rejet ;
- actions de remédiation.

### Interactions

Le Quality Engine interagit avec :

- le Documentation Engine pour corriger les livrables ;
- le Risk Engine pour signaler les écarts critiques ;
- le Learning Engine pour capitaliser les non-conformités ;
- les instances de gouvernance pour préparer les validations.

## Risk Engine

### Mission

Le Risk Engine identifie, qualifie et suit les risques associés aux projets, composants, décisions et livrables.

### Responsabilités

- identifier les risques initiaux ;
- évaluer la criticité ;
- qualifier la probabilité et l’impact ;
- détecter les risques liés à l’IA générative ;
- détecter les risques de dette documentaire ;
- proposer des mesures de réduction ;
- déclencher des contrôles renforcés ;
- recommander des arbitrages.

### Entrées

- contexte projet ;
- classification ;
- composants sélectionnés ;
- standards applicables ;
- résultats qualité ;
- historique des incidents ;
- REX ;
- audits ;
- contraintes de sécurité ;
- données sensibles potentielles.

### Sorties

- score de risque ;
- registre des risques ;
- mesures de mitigation ;
- exigences de contrôle ;
- règles d’escalade ;
- alertes ;
- recommandations d’arbitrage.

### Interactions

Le Risk Engine alimente :

- le Quality Engine pour renforcer les contrôles ;
- le Documentation Engine pour documenter les risques ;
- le Component Selection Engine pour ajuster les choix ;
- le Learning Engine pour enrichir les modèles de risque.

## Learning Engine

### Mission

Le Learning Engine organise l’apprentissage continu de la plateforme SFIA à partir des projets, REX, KPI, audits et expérimentations.

### Responsabilités

- collecter les retours d’expérience ;
- analyser les KPI ;
- identifier les patterns récurrents ;
- détecter les règles efficaces ou inefficaces ;
- proposer des ajustements ;
- recommander la promotion de pratiques éprouvées ;
- signaler les règles obsolètes ;
- enrichir les référentiels.

### Entrées

- REX projet ;
- résultats d’audit ;
- KPI de maturité ;
- expérimentations ;
- scores qualité ;
- scores de risque ;
- décisions prises ;
- résultats de delivery ;
- écarts constatés ;
- données de réutilisation.

### Sorties

- recommandations d’amélioration ;
- propositions de nouvelles règles ;
- ajustements de seuils ;
- règles à déprécier ;
- standards à promouvoir ;
- composants à industrialiser ;
- prompts à qualifier ;
- enseignements capitalisés.

### Interactions

Le Learning Engine interagit avec tous les autres sous-moteurs. Il constitue la boucle de rétroaction du Decision Engine.

# Processus de décision

<aside>
🔁

Le processus de décision SFIA transforme progressivement un besoin initial en delivery documenté, contrôlé et capitalisé.

</aside>

## Pipeline complet

Le pipeline standard du Decision Engine est le suivant :

**Besoin → Qualification → Analyse → Classification → Scoring → Sélection des composants → Génération documentaire → Génération des prompts → Planification → Delivery → Capitalisation**

## 1. Besoin

### Description

Le processus démarre par l’expression d’un besoin. Celui-ci peut provenir :

- d’un métier ;
- d’une équipe projet ;
- d’un architecte ;
- d’un audit ;
- d’un REX ;
- d’une expérimentation ;
- d’un besoin de standardisation ;
- d’une opportunité d’automatisation ;
- d’un écart qualité.

### Décisions associées

- Le besoin est-il suffisamment clair ?
- Le besoin relève-t-il de la SFIA ?
- Existe-t-il déjà un actif correspondant ?
- Une phase de clarification est-elle nécessaire ?

## 2. Qualification

### Description

Le besoin est transformé en contexte structuré par le Qualification Engine.

### Décisions associées

- Le périmètre est-il défini ?
- Les objectifs sont-ils explicites ?
- Les contraintes sont-elles identifiées ?
- Les parties prenantes sont-elles connues ?
- Le niveau d’incertitude est-il acceptable ?

## 3. Analyse

### Description

Le contexte qualifié est analysé pour identifier les enjeux, contraintes, dépendances, hypothèses et points de vigilance.

### Décisions associées

- Quels sont les facteurs structurants ?
- Quels sont les risques initiaux ?
- Quels standards peuvent s’appliquer ?
- Quelles informations restent manquantes ?
- Le projet doit-il être poursuivi, clarifié ou suspendu ?

## 4. Classification

### Description

Le projet est classé selon les typologies SFIA.

### Décisions associées

- S’agit-il d’une expérimentation ?
- S’agit-il d’une standardisation ?
- S’agit-il d’une industrialisation ?
- S’agit-il d’une amélioration continue ?
- Quels domaines sont concernés ?
- Quel parcours SFIA doit être activé ?

## 5. Scoring

### Description

Le moteur attribue des scores permettant d’objectiver les décisions.

### Décisions associées

- Le projet est-il complexe ?
- Le risque est-il acceptable ?
- Le potentiel de réutilisation est-il élevé ?
- Le niveau d’automatisation est-il suffisant ?
- Le niveau de maturité permet-il une industrialisation ?

## 6. Sélection des composants

### Description

Le Component Selection Engine recommande les composants à utiliser, adapter ou créer.

### Décisions associées

- Quels composants existants sont pertinents ?
- Quels composants sont obligatoires ?
- Quels composants sont optionnels ?
- Faut-il adapter un composant ?
- Faut-il créer un nouveau composant ?
- Quels standards sont associés ?

## 7. Génération documentaire

### Description

Le Documentation Engine sélectionne les templates et produit les livrables nécessaires.

### Décisions associées

- Quels livrables sont requis ?
- Quel niveau de détail est nécessaire ?
- Une synthèse exécutive est-elle requise ?
- Une fiche d’expérimentation est-elle nécessaire ?
- Un dossier d’architecture est-il obligatoire ?
- Une fiche REX doit-elle être préparée ?

## 8. Génération des prompts

### Description

Le moteur sélectionne ou génère les prompts nécessaires à l’exécution des tâches.

### Décisions associées

- Existe-t-il un prompt Gold applicable ?
- Le prompt doit-il être adapté ?
- Le prompt doit-il être créé ?
- Le prompt doit-il être testé avant usage récurrent ?
- Le prompt peut-il être promu dans le référentiel ?

## 9. Planification

### Description

Le moteur transforme les décisions en plan d’action.

### Décisions associées

- Quelles actions doivent être créées ?
- Quels jalons sont nécessaires ?
- Quels contrôles doivent être planifiés ?
- Quels arbitrages doivent être escaladés ?
- Quels livrables doivent être produits en priorité ?

## 10. Delivery

### Description

Les composants, livrables, prompts et contrôles sont exécutés selon le parcours défini.

### Décisions associées

- Les livrables sont-ils conformes ?
- Les contrôles qualité sont-ils satisfaits ?
- Les risques sont-ils maîtrisés ?
- Les écarts sont-ils acceptables ?
- Le résultat peut-il être validé ?

## 11. Capitalisation

### Description

Le Learning Engine collecte les enseignements et enrichit les référentiels.

### Décisions associées

- Quels apprentissages doivent être conservés ?
- Quels KPI doivent être mis à jour ?
- Une règle doit-elle être ajustée ?
- Un composant doit-il être promu ?
- Un prompt doit-il devenir Gold ?
- Un standard doit-il évoluer ?
- Une règle doit-elle être supprimée ?

# Règles de décision

## Définition

Une règle de décision SFIA est une instruction gouvernée qui permet au Decision Engine de déclencher une action, recommander un actif, appliquer un contrôle ou orienter un parcours.

Une règle doit être :

- identifiable ;
- versionnée ;
- contextualisée ;
- testable ;
- justifiée ;
- rattachée à des preuves ;
- gouvernée ;
- révisable.

## Typologie des règles

### Règles d’activation des composants

Ces règles déterminent quels composants doivent être utilisés, adaptés ou créés.

#### Exemples

- Si le projet relève d’un cas d’usage déjà couvert par un composant validé, alors le composant existant est recommandé en priorité.
- Si le score de réutilisation est élevé et le score de complexité faible, alors l’adaptation d’un composant existant est privilégiée.
- Si aucun composant existant ne couvre plus de 60 % du besoin, alors un composant candidat peut être proposé.
- Si un composant candidat est réutilisé avec succès sur plusieurs projets, alors il peut être proposé à la promotion.

### Règles d’activation des standards

Ces règles déterminent quels standards SFIA s’appliquent au projet.

#### Exemples

- Si le projet produit un livrable d’architecture, alors le standard documentaire d’architecture est obligatoire.
- Si le projet mobilise de l’IA générative, alors le standard de gouvernance des prompts est applicable.
- Si le projet manipule des données sensibles, alors un contrôle sécurité renforcé est déclenché.
- Si le projet vise l’industrialisation, alors les standards de qualité, de documentation et de capitalisation sont obligatoires.

### Règles d’activation des templates

Ces règles déterminent quels templates doivent être utilisés.

#### Exemples

- Si le projet est exploratoire, alors le template de fiche d’expérimentation est obligatoire.
- Si le projet nécessite un arbitrage, alors un support de décision doit être généré.
- Si le projet implique plusieurs composants, alors une matrice de traçabilité doit être produite.
- Si le projet est clôturé, alors une fiche REX doit être créée.

### Règles de contrôles qualité

Ces règles déterminent les contrôles à appliquer avant validation.

#### Exemples

- Si un livrable est destiné à devenir une référence officielle, alors une revue qualité est obligatoire.
- Si un prompt est proposé comme prompt Gold, alors il doit disposer de preuves d’efficacité.
- Si un standard est créé, alors il doit être testé sur au moins un cas d’usage.
- Si une décision présente un score de risque élevé, alors une revue d’architecture ou de gouvernance est requise.

## Format recommandé d’une règle

### Métadonnées minimales

| Champ | Description |
| --- | --- |
| Identifiant | Code unique de la règle |
| Nom | Nom court et explicite |
| Description | Formulation de la règle |
| Type | Composant, standard, template, qualité, risque, scoring |
| Statut | Brouillon, en test, validée, promue, dépréciée, supprimée |
| Version | Version de la règle |
| Propriétaire | Responsable fonctionnel ou architectural |
| Conditions | Critères d’activation |
| Actions | Effets attendus |
| Preuves | REX, KPI, audit ou expérimentation associés |
| Date de création | Date d’introduction |
| Date de revue | Date de réévaluation |
| Décision de gouvernance | Validation, promotion, maintien, dépréciation ou suppression |

# Système de scoring

<aside>
📊

Le scoring permet d’objectiver les décisions. Il ne remplace pas le jugement architectural, mais fournit une base commune d’analyse, de comparaison et de traçabilité.

</aside>

## Vue d’ensemble

Le Decision Engine utilise cinq scores principaux :

1. **Score de complexité**
2. **Score de risque**
3. **Score de réutilisation**
4. **Score d’automatisation**
5. **Score de maturité**

Chaque score doit être calculé selon des critères explicites, révisables et capitalisables.

## Score de complexité

### Objectif

Mesurer la difficulté intrinsèque du projet ou du besoin.

### Critères indicatifs

- nombre de domaines concernés ;
- nombre de composants impliqués ;
- dépendances techniques ;
- incertitude fonctionnelle ;
- hétérogénéité des sources ;
- effort documentaire ;
- nombre de parties prenantes ;
- niveau d’intégration requis.

### Rôle dans les décisions

Un score de complexité élevé peut déclencher :

- une revue d’architecture ;
- un découpage en lots ;
- une planification renforcée ;
- des livrables complémentaires ;
- une analyse de risques approfondie ;
- une gouvernance plus formelle.

## Score de risque

### Objectif

Mesurer l’exposition du projet à des risques significatifs.

### Critères indicatifs

- criticité métier ;
- sensibilité des données ;
- dépendance à des technologies non éprouvées ;
- incertitude sur les résultats ;
- dette documentaire potentielle ;
- impact d’une erreur ;
- niveau de conformité requis ;
- exposition aux risques liés à l’IA générative.

### Rôle dans les décisions

Un score de risque élevé peut déclencher :

- un contrôle qualité renforcé ;
- une revue sécurité ;
- une validation par comité ;
- une expérimentation préalable ;
- une mitigation obligatoire ;
- une limitation du périmètre.

## Score de réutilisation

### Objectif

Évaluer dans quelle mesure des actifs existants peuvent couvrir le besoin.

### Critères indicatifs

- existence de composants similaires ;
- disponibilité de standards applicables ;
- pertinence des templates existants ;
- taux de couverture fonctionnelle ;
- effort d’adaptation ;
- historique de succès ;
- niveau de maintenance de l’actif ;
- compatibilité avec le contexte projet.

### Rôle dans les décisions

Un score de réutilisation élevé peut déclencher :

- la recommandation d’un composant existant ;
- l’adaptation contrôlée d’un actif ;
- l’interdiction de création redondante ;
- une capitalisation accélérée ;
- une réduction de l’effort de cadrage.

## Score d’automatisation

### Objectif

Mesurer le potentiel d’automatisation documentaire, décisionnelle ou opérationnelle.

### Critères indicatifs

- répétabilité du besoin ;
- disponibilité de données structurées ;
- existence de prompts standardisés ;
- stabilité des règles ;
- fréquence d’exécution ;
- niveau de variabilité ;
- maturité des templates ;
- capacité de contrôle automatique.

### Rôle dans les décisions

Un score d’automatisation élevé peut déclencher :

- la génération automatique de livrables ;
- la sélection de prompts Gold ;
- l’industrialisation d’un workflow ;
- la création d’un assistant spécialisé ;
- la mise en place d’un contrôle automatisé.

## Score de maturité

### Objectif

Évaluer le niveau de préparation d’un projet, d’un composant, d’un standard ou d’un prompt.

### Critères indicatifs

- complétude documentaire ;
- validation par preuves ;
- historique d’utilisation ;
- stabilité des résultats ;
- niveau de gouvernance ;
- disponibilité des KPI ;
- conformité aux standards ;
- existence de REX associés.

### Rôle dans les décisions

Un score de maturité élevé peut déclencher :

- la promotion d’un actif ;
- la standardisation ;
- l’industrialisation ;
- la réduction des contrôles exploratoires ;
- l’intégration dans le référentiel officiel.

Un score de maturité faible peut déclencher :

- une expérimentation ;
- une phase de clarification ;
- des contrôles supplémentaires ;
- une limitation d’usage ;
- une décision de non-promotion.

## Échelle indicative

| Score | Niveau | Interprétation |
| --- | --- | --- |
| ---: | --- | --- |
| 0–20 | Très faible | Peu exploitable ou non significatif |
| 21–40 | Faible | Usage limité, clarification requise |
| 41–60 | Moyen | Exploitable sous conditions |
| 61–80 | Élevé | Recommandé avec contrôles standards |
| 81–100 | Très élevé | Candidat à standardisation ou automatisation |

# Apprentissage continu

## Principe général

Le Decision Engine doit s’améliorer à partir des preuves générées par l’usage réel de la plateforme.

L’apprentissage continu repose sur quatre sources principales :

1. **REX**
2. **KPI**
3. **Audits**
4. **Expérimentations**

## REX

### Rôle

Les retours d’expérience permettent de comprendre ce qui a fonctionné, ce qui a échoué et ce qui doit être ajusté.

### Contributions au moteur

Les REX enrichissent :

- les règles de sélection ;
- les critères de scoring ;
- les recommandations de composants ;
- les standards documentaires ;
- les prompts ;
- les règles de gouvernance ;
- les seuils d’activation.

### Exemple

Si plusieurs REX montrent qu’un template de cadrage réduit fortement les erreurs de qualification, le Learning Engine peut recommander son usage obligatoire pour certaines catégories de projets.

## KPI

### Rôle

Les KPI fournissent une mesure objective de la performance et de la maturité.

### Contributions au moteur

Les KPI permettent de suivre :

- le taux de réutilisation des composants ;
- le taux de conformité documentaire ;
- le taux de promotion des prompts ;
- le temps moyen de qualification ;
- le nombre d’écarts qualité ;
- le niveau de maturité des standards ;
- la performance des règles de décision.

### Exemple

Si le taux de réutilisation reste faible malgré l’existence de composants validés, le moteur peut recommander une amélioration du référentiel, une meilleure classification ou une revue des règles de sélection.

## Audits

### Rôle

Les audits permettent de vérifier la conformité du système décisionnel aux standards et règles de gouvernance.

### Contributions au moteur

Les audits identifient :

- les règles non appliquées ;
- les écarts de qualité ;
- les décisions non tracées ;
- les standards obsolètes ;
- les composants insuffisamment documentés ;
- les prompts non qualifiés ;
- les risques récurrents.

### Exemple

Un audit révélant des validations sans preuves peut conduire à renforcer les exigences du Quality Engine et à imposer un niveau de preuve minimal.

## Expérimentations

### Rôle

Les expérimentations permettent de tester de nouvelles règles, pratiques, composants ou prompts avant standardisation.

### Contributions au moteur

Les expérimentations permettent de :

- tester des hypothèses ;
- mesurer l’efficacité d’un nouveau composant ;
- comparer plusieurs approches ;
- valider un prompt ;
- évaluer une règle candidate ;
- réduire l’incertitude avant promotion.

### Exemple

Un prompt candidat peut être testé sur plusieurs cas d’usage avant d’être promu comme prompt Gold.

## Boucle d’apprentissage

Le cycle d’apprentissage continu suit la logique suivante :

1. Collecter les résultats.
2. Identifier les patterns.
3. Comparer aux règles existantes.
4. Proposer des ajustements.
5. Tester les ajustements.
6. Valider par preuves.
7. Promouvoir les règles efficaces.
8. Supprimer ou déprécier les règles obsolètes.

# Gouvernance

<aside>
⚖️

La gouvernance du Decision Engine garantit que les règles de décision restent fiables, traçables, testées, validées et alignées avec les objectifs de la SFIA.

</aside>

## Objectifs de gouvernance

La gouvernance vise à :

- garantir la cohérence des règles ;
- éviter la prolifération de règles redondantes ;
- sécuriser la promotion des règles ;
- assurer la traçabilité des décisions ;
- maintenir l’alignement avec les standards SFIA ;
- organiser l’amélioration continue ;
- supprimer les règles obsolètes ;
- préserver la confiance dans le moteur.

## Cycle de vie d’une règle de décision

### 1. Création

Une règle peut être créée à partir :

- d’un besoin récurrent ;
- d’un REX ;
- d’un audit ;
- d’un écart qualité ;
- d’une expérimentation ;
- d’une décision d’architecture ;
- d’une évolution stratégique ;
- d’une opportunité d’automatisation.

La règle est alors enregistrée avec un statut **Brouillon**.

### 2. Qualification

La règle est qualifiée afin de préciser :

- son objectif ;
- son périmètre ;
- ses conditions d’activation ;
- ses effets attendus ;
- les risques associés ;
- les preuves disponibles ;
- les impacts sur les autres règles ;
- le propriétaire.

### 3. Test

La règle passe en statut **En test** lorsqu’elle est appliquée à un ou plusieurs cas d’usage contrôlés.

Le test doit permettre de mesurer :

- la pertinence de la règle ;
- sa clarté ;
- son applicabilité ;
- son impact qualité ;
- son impact delivery ;
- ses effets indésirables ;
- sa compatibilité avec les standards existants.

### 4. Validation

Une règle peut être validée si elle dispose :

- d’un périmètre clair ;
- de résultats de test satisfaisants ;
- de preuves documentées ;
- d’un propriétaire identifié ;
- d’une absence de conflit avec les règles existantes ;
- d’un bénéfice démontré.

La règle passe alors en statut **Validée**.

### 5. Promotion

Une règle validée peut être promue lorsqu’elle devient applicable comme référence officielle.

La promotion implique :

- intégration au référentiel ;
- communication aux contributeurs ;
- activation dans les parcours SFIA ;
- rattachement aux standards concernés ;
- mise à jour des templates ou prompts si nécessaire ;
- définition d’une date de revue.

La règle passe alors en statut **Promue**.

### 6. Révision

Toute règle promue doit être revue périodiquement.

La révision évalue :

- son taux d’application ;
- son efficacité ;
- les écarts constatés ;
- les retours utilisateurs ;
- les KPI associés ;
- les évolutions du contexte ;
- les risques de redondance ou d’obsolescence.

### 7. Dépréciation

Une règle peut être dépréciée si :

- elle n’est plus adaptée ;
- elle est remplacée par une règle plus pertinente ;
- elle génère des effets indésirables ;
- elle n’est plus alignée avec les standards ;
- elle n’est plus utilisée ;
- les preuves ne soutiennent plus son maintien.

Le statut devient **Dépréciée**.

### 8. Suppression

Une règle peut être supprimée après analyse d’impact et décision de gouvernance.

La suppression doit être documentée avec :

- motif ;
- date ;
- impacts ;
- règle de remplacement le cas échéant ;
- décision de gouvernance ;
- historique conservé.

## Rôles de gouvernance

| Rôle | Responsabilités |
| --- | --- |
| Sponsor SFIA | Valide les orientations structurantes |
| Enterprise Architect | Garantit la cohérence d’architecture |
| Responsable gouvernance | Supervise le cycle de vie des règles |
| Référent qualité | Définit et vérifie les contrôles qualité |
| Référent composants | Maintient le référentiel des composants |
| Référent prompts | Gouverne les prompts et leur promotion |
| Référent risques | Supervise l’analyse et le suivi des risques |
| Contributeurs projet | Produisent les preuves, REX et retours terrain |

## Comités et rituels

### Comité d’architecture SFIA

Responsable des décisions structurantes, des arbitrages complexes et de la validation des standards majeurs.

### Revue qualité SFIA

Responsable de l’évaluation des livrables, prompts, composants et règles avant validation ou promotion.

### Revue de capitalisation

Responsable de l’exploitation des REX, KPI, audits et expérimentations pour améliorer le moteur.

### Revue de portefeuille des règles

Responsable de l’analyse périodique du référentiel de règles, de la suppression des doublons et de la dépréciation des règles obsolètes.

# Recommandations

## Recommandations structurantes

1. **Créer un référentiel dédié des règles de décision**  
    
    Chaque règle doit être versionnée, qualifiée, reliée à des preuves et gouvernée.
    
2. **Mettre en place un modèle de scoring standardisé**  
    
    Les scores doivent être calculés selon des critères partagés et audités régulièrement.
    
3. **Formaliser les parcours SFIA types**  
    
    Les parcours expérimentation, standardisation, industrialisation et amélioration continue doivent être explicites.
    
4. **Relier systématiquement décisions, composants, standards et preuves**  
    
    Toute décision structurante doit pouvoir être retracée jusqu’à son contexte et ses justifications.
    
5. **Définir un seuil minimal de preuve avant promotion**  
    
    Aucun composant, prompt, standard ou règle ne doit devenir officiel sans preuve suffisante.
    
6. **Industrialiser la capitalisation**  
    
    Les REX, KPI, audits et expérimentations doivent alimenter le Learning Engine de manière régulière.
    
7. **Séparer clairement règles candidates et règles officielles**  
    
    La plateforme doit distinguer les hypothèses, expérimentations, règles validées et règles promues.
    
8. **Mettre en place une revue périodique du moteur**  
    
    Le Decision Engine doit être révisé selon un cycle défini, par exemple trimestriel.
    

# Roadmap d’évolution

## Horizon 1 — Stabilisation du référentiel

### Objectif

Structurer la première version exploitable du Decision Engine.

### Initiatives clés

- Créer le référentiel des règles de décision.
- Définir les statuts de cycle de vie.
- Formaliser les typologies de projets.
- Définir les scores initiaux.
- Lister les standards et templates activables.
- Documenter les premiers parcours décisionnels.
- Identifier les premiers KPI de suivi.

## Horizon 2 — Mise en œuvre opérationnelle

### Objectif

Déployer le moteur sur des projets pilotes.

### Initiatives clés

- Appliquer le pipeline de décision sur plusieurs cas réels.
- Tester les règles d’activation des composants.
- Évaluer la pertinence des scores.
- Générer les premiers livrables à partir du moteur.
- Collecter les premiers REX structurés.
- Ajuster les seuils et règles candidates.
- Définir les contrôles qualité prioritaires.

## Horizon 3 — Industrialisation

### Objectif

Transformer les règles éprouvées en standards opérables.

### Initiatives clés

- Promouvoir les règles validées.
- Automatiser les sélections de templates et prompts.
- Déployer les contrôles qualité récurrents.
- Structurer les tableaux de bord KPI.
- Industrialiser la génération documentaire.
- Mettre en place une gouvernance récurrente.
- Déprécier les règles inefficaces.

## Horizon 4 — Optimisation continue

### Objectif

Faire du Decision Engine un système apprenant piloté par les preuves.

### Initiatives clés

- Exploiter systématiquement les REX.
- Corréler scores, résultats et qualité de delivery.
- Ajuster les seuils par analyse historique.
- Identifier les patterns de succès.
- Automatiser les recommandations de promotion.
- Renforcer la traçabilité des décisions.
- Développer des assistants spécialisés par sous-moteur.

# Conclusion

Le **SFIA Decision Engine v1.0** constitue le socle décisionnel de la plateforme SFIA.

Il formalise la manière dont la plateforme analyse les besoins, classe les projets, sélectionne les composants, applique les standards, génère les livrables, contrôle la qualité, maîtrise les risques et apprend de l’expérience.

Sa valeur repose sur cinq convictions fortes :

- les décisions doivent être contextualisées ;
- la réutilisation doit précéder la création ;
- la standardisation doit précéder la personnalisation ;
- la preuve doit précéder la validation ;
- l’amélioration continue doit guider l’évolution du système.

En tant que référentiel d’architecture d’entreprise, ce document doit être utilisé comme base officielle pour concevoir, gouverner et faire évoluer le moteur de décision de la SFIA.

Le Decision Engine n’est pas uniquement un mécanisme d’aide à la décision. Il est la capacité centrale qui permet à la SFIA de devenir une plateforme industrialisable, gouvernée, apprenante et orientée valeur.

---


# v1.1 Update — Operational Decision Model

SFIA decisions are explicit, traceable and capitalizable.

The Decision Engine defines how SFIA decides, records and reuses decisions across:

- cycle framing;
- audits;
- delivery validation;
- PR readiness;
- post-merge closure;
- architecture decisions;
- ADR creation;
- capitalization;
- Notion preparation;
- automation readiness.

## Decision Types

| Decision type | Example | Expected trace |
|---------------|---------|----------------|
| Cycle framing decision | Open, reduce, postpone or cancel a cycle | Cycle scope, prompt, branch |
| Audit decision | GO, GO with reserves, NO-GO | Audit report |
| Delivery decision | Accept delivery, request correction, defer | Release readiness or delivery doc |
| PR decision | Ready for review, needs correction, not acceptable | PR summary or PR prep |
| Post-merge decision | Cycle closed, capitalization needed | Post-merge status |
| Architecture decision | ADR required, existing ADR applies, no ADR needed | ADR or impact note |
| Capitalization decision | Promote to method, practice, template, prompt, archive | Capitalization doc |
| Notion decision | Prepare, dry-run, publish, block | Mapping / dry-run report |
| Automation decision | Specify, validate, activate, block engine | Engine spec / validation report |

## GO / NO-GO Model

| Decision | Meaning | Follow-up |
|----------|---------|-----------|
| GO | Acceptable without major reserve | Continue or deliver |
| GO with reserves | Acceptable with documented reserves | Continue with tracking |
| NO-GO | Not acceptable | Rework required |
| COMPLETE | Work complete | Close cycle or prepare PR |
| COMPLETE WITH RESERVES | Usable but imperfect | Track reserves |
| INCOMPLETE | Insufficient | Continue or reframe |
| FOUNDATIONS IDENTIFIED | Foundation material exists | Consolidate |
| PARTIAL FOUNDATIONS | Foundation material exists but has gaps | Consolidate with reserves |
| INSUFFICIENT FOUNDATIONS | Foundation material is not enough | Create or recover foundations |

## Reserve Classification

| Reserve type | Meaning | Default handling |
|--------------|---------|------------------|
| Blocking | Prevents delivery or continuation | Treat before GO |
| Minor | Should be addressed soon | Track in next cycle |
| Residual | Known but non-blocking | Monitor |
| P0 | Immediate priority | Current or next cycle |
| P1 | Next structured pass | Planned follow-up |
| P2 | Later improvement | Roadmap or backlog |

## ADR vs Operational Decision

Not every decision requires an ADR.

| Decision | ADR required? |
|----------|---------------|
| Structural architecture choice | Yes |
| Durable technical or governance choice | Yes |
| Difficult-to-reverse decision | Yes |
| Repository source-of-truth rule | Yes or foundation decision |
| Notion as curated knowledge layer | Yes or foundation decision |
| Minor README correction | No |
| PR closure | No |
| Documentation wording adjustment | No |
| Cycle status decision | No |
| Temporary execution tactic | Usually no |

Rule:

> Create an ADR when the decision is structural, durable, hard to reverse, architecture-impacting or governance-impacting.

## Decisions in the ChatGPT ↔ Cursor Loop

The operational loop follows this decision model:

| Actor | Decision responsibility |
|-------|-------------------------|
| Human | Opens, validates, arbitrates, approves push / PR / merge / publication |
| ChatGPT | Recommends, frames, analyzes, identifies reserves |
| Cursor | Executes within the prompt contract |
| Git | Records the decision through versioned changes |
| GitHub PR | Materializes review and delivery decision |
| Post-merge status | Records closure and remaining reserves |

ChatGPT recommends. Cursor executes. The human decides. Git traces.

## Pre-cycle and Post-cycle Audits

A pre-cycle audit is required before major restructuring, foundation consolidation, product delivery, automation specification or Notion preparation.

A post-cycle audit or post-merge status is required after significant delivery or merge.

| Audit type | Purpose | Example |
|------------|---------|---------|
| Pre-cycle audit | Validate the existing base before action | Foundation inventory, workspace audit |
| Post-cycle audit | Validate the result after delivery | Application audit, documentation audit |
| Post-merge status | Record final merge outcome | PR #81 post-merge status |

## PR and Post-merge Decisions

A PR must carry an explicit decision state:

- ready for review;
- ready with reserves;
- requires correction;
- blocked;
- merged;
- merged with reserves;
- closed by post-merge status.

A significant PR is not fully closed until its post-merge status or equivalent trace is recorded.

## Capitalization Decisions

A project output can become:

- a foundation document;
- a method update;
- a practice;
- a role method;
- a template;
- a checklist;
- a prompt;
- a roadmap item;
- an archive.

Capitalization decisions must use the Documentation Routing Matrix defined in:

- `method/sfia-fast-track/core/sfia-knowledge-layer.md`

## Notion Decisions

Notion-related decisions must follow the Knowledge Layer and Rules & Guardrails.

Allowed decisions:

| Decision | Meaning |
|----------|---------|
| Prepare mapping | Allowed after foundation validation |
| Prepare dry-run | Allowed after mapping |
| Publish | Requires explicit human validation |
| Block publication | Required if sources, mapping or editorialization are insufficient |

No raw Notion sync is allowed.

## Decision Anti-patterns

| Anti-pattern | Risk |
|--------------|------|
| Implicit decision | No traceability |
| GO without reserves despite known issues | Hidden risk |
| NO-GO without explanation | No actionable follow-up |
| ADR for every minor choice | Decision noise |
| No ADR for structural choice | Architecture debt |
| PR merged without closure trace | Lost context |
| Capitalization without routing | Knowledge fragmentation |
| Notion publication without dry-run | Uncontrolled publication |

## v1.1 Related Documents

- `docs/foundation/sfia-engineering-principles.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `docs/architecture/sfia-repository-blueprint.md`

## v1.1 Decision

The SFIA Decision Engine is the foundation for explicit, traceable and capitalizable decisions.

It must be used to frame GO / NO-GO decisions, reserves, ADR requirements, PR readiness, post-merge closure, capitalization choices, Notion readiness and future validation engine behavior.

---

# Métadonnées

| Métadonnée | Valeur |
| --- | --- |
| Titre | SFIA Decision Engine v1.1 |
| Type de document | Référentiel d’architecture d’entreprise |
| Domaine | Software Factory IA, architecture d’entreprise, gouvernance IT, IA générative |
| Version | v1.1 (enrichi post-Fast Track — contenu v1.0 conservé) |
| Statut | Foundation document |
| Niveau de référence | Document fondateur |
| Propriétaire | Enterprise Architecture / SFIA |
| Audience exécutive | Sponsor, direction, gouvernance, comité d’architecture |
| Audience opérationnelle | Architectes, responsables qualité, équipes delivery, référents prompts, contributeurs SFIA |
| Périmètre | Moteur décisionnel de la plateforme SFIA |
| Hors périmètre | Règles métier applicatives spécifiques |
| Date de création | 27 juin 2026 |
| Langue | Français |
| Format cible | Notion natif |
| Usage principal | Référence officielle du Decision Engine SFIA |
| Fréquence de revue recommandée | Trimestrielle |
| Sources d’amélioration | REX, KPI, audits, expérimentations |
| Niveau de confidentialité | Interne SFIA |