---
source: Notion / SFIA Architecture
status: reference
sync: manual-export
version: v1.1
previous: v1.0
updated_after: PR #81 workspace cleanup
---

# SFIA Repository Blueprint v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** PR #81 workspace cleanup

<aside>
🏛️

**Statut du document** : Référence officielle du Repository Blueprint de la plateforme SFIA. Ce document définit le modèle cible d’organisation, de gouvernance, de versioning et d’évolution du patrimoine méthodologique et technique SFIA.

Le contenu v1.0 (export Notion) est conservé ci-dessous. La section **v1.1 Update** en fin de document aligne le blueprint sur la structure Git validée post-PR #81.

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

## Finalité du Repository Blueprint

Le **SFIA Repository Blueprint v1.0** définit l’organisation officielle du repository SFIA et constitue le document fondateur de son implémentation dans Notion.

Il formalise la manière dont l’ensemble des connaissances, composants, templates, prompts, standards, guides, projets, décisions et assets sont organisés, gouvernés, versionnés, reliés et capitalisés.

## Portée

Ce blueprint ne se limite pas à une arborescence documentaire. Il définit un **modèle de gestion du patrimoine méthodologique et technique** de la plateforme SFIA, couvrant :

- la structure logique du repository ;
- les espaces fonctionnels et leurs responsabilités ;
- les règles de nommage, de cycle de vie et de versioning ;
- la gouvernance documentaire ;
- les relations entre Notion, GitHub et les actifs opérationnels ;
- les mécanismes d’amélioration continue fondés sur les REX, audits, KPI et apprentissages.

## Résultat attendu

Le repository SFIA doit permettre :

- une lecture exécutive claire de la plateforme ;
- une exploitation opérationnelle par les équipes ;
- une réutilisation contrôlée des actifs ;
- une traçabilité complète des décisions, standards et composants ;
- une capacité d’évolution continue sans perte de cohérence.

# Contexte

## Enjeux de la plateforme SFIA

La plateforme SFIA s’inscrit dans une logique de **Software Factory augmentée par l’IA**, combinant architecture d’entreprise, gouvernance documentaire, knowledge management, ingénierie logicielle, automatisation et industrialisation des pratiques.

Dans ce contexte, la valeur de la plateforme dépend autant de la qualité des composants techniques que de la capacité à structurer, maintenir et faire évoluer le patrimoine méthodologique.

## Problématiques adressées

Sans modèle de repository explicite, les organisations font face à plusieurs risques :

- dispersion des standards et des guides ;
- duplication des templates, prompts et composants ;
- absence de traçabilité entre décisions, expérimentations et actifs validés ;
- difficulté à distinguer les contenus exploratoires des contenus officiels ;
- perte de connaissance lors des changements d’équipe ou de contexte ;
- incapacité à mesurer la maturité réelle de la factory.

## Positionnement du blueprint

Le Repository Blueprint agit comme un **contrat d’architecture documentaire et opérationnelle**. Il définit les règles communes qui permettent à la plateforme SFIA de rester lisible, gouvernable, réutilisable et scalable dans le temps.

# Vision

## Vision cible

La plateforme SFIA doit être considérée comme un **système de connaissance vivant**, structuré autour d’une Single Source of Truth, alimenté par les usages, enrichi par les retours d’expérience et gouverné comme un actif d’entreprise.

Elle doit permettre de transformer progressivement les pratiques éprouvées en standards réutilisables, puis en actifs industrialisés.

## Ambition

L’ambition du repository SFIA est de devenir :

- le référentiel officiel des méthodes, standards et décisions SFIA ;
- le catalogue des assets réutilisables ;
- le point d’entrée des projets de validation et d’industrialisation ;
- le support de gouvernance de la plateforme ;
- le socle de capitalisation pour le Learning Engine.

## Lecture exécutive

Pour les décideurs, le repository fournit une vision consolidée de la maturité, des risques, des standards disponibles et des priorités d’évolution.

Pour les équipes opérationnelles, il fournit les guides, modèles, prompts, composants et règles nécessaires à l’exécution contrôlée des projets.

<aside>
🎯

**Principe directeur** : le repository SFIA n’est pas un espace de stockage. C’est une plateforme de gouvernance, de capitalisation et de réutilisation des actifs méthodologiques et techniques.

</aside>

# Principes d'organisation

## Single Source of Truth

Le repository SFIA constitue la source de vérité officielle pour les actifs de la plateforme.

Chaque actif structurant doit posséder un emplacement canonique, un propriétaire, un statut, une version et des relations explicites avec les autres actifs.

### Implications opérationnelles

- Aucun standard officiel ne doit exister en plusieurs versions concurrentes.
- Les duplications doivent être remplacées par des liens, des relations ou des références.
- Les contenus de travail peuvent exister, mais doivent être clairement identifiés comme non validés.
- Les actifs Gold constituent la référence d’usage.

## Knowledge by Design

La connaissance SFIA doit être conçue, structurée et gouvernée dès sa création.

Elle ne doit pas résulter uniquement de notes informelles ou de capitalisation a posteriori.

### Implications opérationnelles

- Chaque page structurante doit suivre un template adapté.
- Les décisions doivent être documentées sous forme d’ADR ou d’équivalent.
- Les expérimentations doivent produire des enseignements exploitables.
- Les REX doivent être reliés aux standards, prompts, composants ou projets concernés.

## Reuse by Design

Le repository doit favoriser la réutilisation contrôlée plutôt que la recréation locale.

Les actifs doivent être conçus pour être retrouvés, compris, évalués et réutilisés.

### Implications opérationnelles

- Les templates doivent être paramétrables et contextualisables.
- Les prompts doivent être classés par usage, maturité et domaine.
- Les composants doivent exposer leurs prérequis, limites et conditions d’emploi.
- Les projets doivent référencer les assets utilisés.

## Version by Design

Le versioning doit être intégré au modèle de repository.

Chaque actif structurant doit pouvoir évoluer sans perte d’historique ni ambiguïté sur son statut.

### Implications opérationnelles

- Les versions majeures correspondent à des changements de structure, de responsabilité ou de contrat d’usage.
- Les versions mineures correspondent à des améliorations compatibles.
- Les corrections éditoriales ou clarifications peuvent être tracées sans changement majeur.
- Les versions dépréciées doivent rester consultables tant qu’elles sont nécessaires à la traçabilité.

## Traceability by Design

La traçabilité doit permettre de relier :

- une décision à ses motivations ;
- un standard aux projets qui l’appliquent ;
- un prompt aux cas d’usage qu’il supporte ;
- un composant aux expérimentations qui l’ont validé ;
- un KPI aux pratiques qu’il mesure ;
- un REX aux évolutions qu’il déclenche.

### Implications opérationnelles

Les relations entre bases Notion doivent être considérées comme une partie intégrante de l’architecture du repository, et non comme un enrichissement optionnel.

## Platform over Projects

La plateforme prime sur les projets.

Les projets contribuent au repository, mais ne doivent pas fragmenter les standards ni créer des pratiques parallèles non gouvernées.

### Implications opérationnelles

- Les projets consomment les actifs officiels.
- Les adaptations projet doivent être capitalisées si elles apportent une valeur réutilisable.
- Les exceptions doivent être documentées.
- Les contributions projet doivent passer par le cycle de vie officiel avant de devenir des actifs plateforme.

<aside>
⚖️

**Règle d’arbitrage** : lorsqu’un besoin projet entre en tension avec la cohérence plateforme, l’arbitrage doit privilégier la réutilisabilité, la traçabilité et la gouvernance à long terme.

</aside>

# Architecture du Repository

## Vue d'ensemble

Le repository SFIA est organisé en six espaces complémentaires :

- **Core** : doctrine, gouvernance, décisions et principes structurants ;
- **Knowledge** : connaissances, guides, retours d’expérience et référentiels de compréhension ;
- **Assets** : templates, prompts, standards, composants et livrables réutilisables ;
- **Projects** : projets de validation, expérimentations, pilotes et initiatives de transformation ;
- **Platform** : architecture, configuration, intégrations et mécanismes de fonctionnement de la plateforme ;
- **Runtime** : suivi opérationnel, exécution, KPI, actions, incidents, audits et amélioration continue.

## Core

### Mission

L’espace **Core** porte le noyau doctrinal et décisionnel de la plateforme SFIA.

Il définit les principes, règles, modèles de gouvernance et décisions structurantes applicables à l’ensemble du repository.

### Contenu

- principes d’architecture ;
- modèles de gouvernance ;
- ADR ;
- politiques de versioning ;
- règles de contribution ;
- cartographie des responsabilités ;
- modèle de maturité ;
- doctrine d’usage de la plateforme.

### Responsabilités

Core est responsable de la cohérence globale du repository.

Il arbitre les principes transverses, valide les règles structurantes et maintient les décisions de référence.

### Relations avec les autres espaces

- définit les règles appliquées par Assets ;
- fournit les principes utilisés par Projects ;
- gouverne les mécanismes de Platform ;
- exploite les indicateurs issus de Runtime ;
- structure la capitalisation de Knowledge.

### Gouvernance

Les contenus Core sont soumis à un niveau de gouvernance élevé.

Toute modification significative doit être tracée, justifiée et validée par les rôles responsables de l’architecture et de la gouvernance SFIA.

## Knowledge

### Mission

L’espace **Knowledge** organise la connaissance explicative, pédagogique et contextuelle de la plateforme.

Il rend les concepts compréhensibles, transmissibles et exploitables.

### Contenu

- guides méthodologiques ;
- notes de cadrage ;
- REX ;
- synthèses d’audit ;
- bonnes pratiques ;
- glossaire ;
- modèles conceptuels ;
- documentation pédagogique ;
- apprentissages issus des projets et expérimentations.

### Responsabilités

Knowledge assure la capitalisation, la clarification et la diffusion de la connaissance.

Il transforme les expériences terrain en enseignements structurés.

### Relations avec les autres espaces

- alimente Assets en recommandations de standardisation ;
- reçoit les REX de Projects et Runtime ;
- s’appuie sur Core pour assurer la cohérence doctrinale ;
- nourrit le Learning Engine ;
- fournit le contexte utile aux décisions ADR.

### Gouvernance

Les contenus Knowledge peuvent être plus évolutifs que Core, mais doivent rester qualifiés par statut, propriétaire, date de mise à jour et domaine de validité.

Les connaissances devenues prescriptives doivent être promues vers Assets ou Core selon leur nature.

## Assets

### Mission

L’espace **Assets** constitue le catalogue des actifs réutilisables de la plateforme SFIA.

Il contient les éléments prêts à être utilisés, adaptés ou intégrés dans les projets et opérations.

### Contenu

- templates ;
- prompts ;
- standards ;
- composants ;
- guides opérationnels ;
- checklists ;
- modèles de livrables ;
- patterns d’architecture ;
- accélérateurs ;
- assets Gold.

### Responsabilités

Assets garantit que les éléments réutilisables sont disponibles, qualifiés, versionnés, documentés et reliés à leurs preuves d’usage.

### Relations avec les autres espaces

- applique les règles définies par Core ;
- est enrichi par Knowledge ;
- est consommé par Projects ;
- peut dépendre de composants ou automatisations stockés dans GitHub ;
- est mesuré via Runtime.

### Gouvernance

Chaque asset doit avoir :

- un identifiant officiel ;
- un propriétaire ;
- un statut de cycle de vie ;
- une version ;
- un domaine d’usage ;
- des conditions d’application ;
- des relations vers les décisions, REX, projets ou KPI pertinents.

## Projects

### Mission

L’espace **Projects** organise les initiatives qui testent, valident, adaptent ou déploient les pratiques SFIA.

Il constitue le lieu de mise en situation et de preuve.

### Contenu

- projets de validation ;
- expérimentations ;
- pilotes ;
- chantiers d’industrialisation ;
- plans d’action ;
- livrables projet ;
- hypothèses ;
- résultats ;
- recommandations ;
- décisions de passage au statut supérieur.

### Responsabilités

Projects démontre la valeur et la faisabilité des assets et standards.

Il produit les preuves nécessaires à la promotion d’un actif vers Validated ou Gold.

### Relations avec les autres espaces

- consomme les assets ;
- produit des REX pour Knowledge ;
- déclenche des décisions dans Core ;
- génère des actions et KPI dans Runtime ;
- peut demander des évolutions de Platform.

### Gouvernance

Chaque projet doit documenter :

- son objectif ;
- son périmètre ;
- les actifs utilisés ;
- les résultats obtenus ;
- les écarts constatés ;
- les recommandations ;
- la décision de capitalisation.

## Platform

### Mission

L’espace **Platform** décrit et gouverne l’architecture de la plateforme SFIA elle-même.

Il couvre les intégrations, bases, automatisations, agents, connecteurs et mécanismes de fonctionnement.

### Contenu

- architecture Notion ;
- cartographie des bases ;
- relations entre bases ;
- intégrations GitHub ;
- automatisations ;
- agents IA ;
- règles de configuration ;
- modèles de permissions ;
- principes d’exploitation ;
- documentation technique de la plateforme.

### Responsabilités

Platform garantit que le repository est techniquement exploitable, maintenable, extensible et cohérent.

Il porte les choix d’implémentation et leurs contraintes.

### Relations avec les autres espaces

- implémente les principes de Core ;
- supporte les usages de Knowledge, Assets et Projects ;
- expose des données exploitées par Runtime ;
- peut être enrichi par les retours d’exploitation.

### Gouvernance

Les évolutions Platform doivent être documentées, testées et reliées à une décision ou à un besoin clairement identifié.

Toute modification de structure de base, relation, automatisation ou permission doit être tracée.

## Runtime

### Mission

L’espace **Runtime** assure le pilotage opérationnel de la plateforme SFIA.

Il mesure l’usage, suit les actions, détecte les écarts et alimente l’amélioration continue.

### Contenu

- actions SFIA ;
- KPI de maturité ;
- audits ;
- incidents ;
- demandes d’évolution ;
- backlog d’amélioration ;
- suivi de conformité ;
- tableaux de bord ;
- indicateurs d’adoption ;
- alertes de dépréciation ou d’obsolescence.

### Responsabilités

Runtime fournit la vision opérationnelle de la santé du repository.

Il permet d’identifier les zones à renforcer, les actifs à promouvoir, les contenus à archiver et les pratiques à standardiser.

### Relations avec les autres espaces

- mesure l’usage des assets ;
- suit la conformité aux règles Core ;
- consolide les retours des projets ;
- déclenche des mises à jour Knowledge et Platform ;
- alimente le Learning Engine.

### Gouvernance

Runtime doit être maintenu avec une logique de pilotage.

Les indicateurs doivent être définis, mesurables, reliés à des objectifs et interprétés régulièrement.

<aside>
🧭

**Lecture d’architecture** : Core définit les règles, Knowledge explique, Assets fournit les briques réutilisables, Projects prouve, Platform opère la structure, Runtime mesure et améliore.

</aside>

# Conventions de nommage

## Principes généraux

Les conventions de nommage garantissent l’unicité, la lisibilité, la traçabilité et la gouvernance des actifs SFIA.

Chaque actif structurant doit être nommé selon un format stable.

## Format recommandé

Le format standard est :

`PREFIXE-DOMAINE-NNN - Nom court - vX.Y`

### Exemple

`STD-ARCH-001 - Architecture cible Notion SFIA - v1.0`

## Préfixes officiels

### Décisions et gouvernance

- **ADR** : Architecture Decision Record ;
- **POL** : Policy ;
- **GOV** : Gouvernance ;
- **RACI** : matrice de responsabilités ;
- **PRIN** : principe d’architecture.

### Templates et livrables

- **TPL** : template ;
- **GUIDE** : guide méthodologique ou opérationnel ;
- **CHK** : checklist ;
- **PLAYBOOK** : mode opératoire structuré.

### Prompts et IA

- **PROMPT** : prompt réutilisable ;
- **AG** : agent IA ;
- **LEARN** : actif lié au Learning Engine ;
- **EVAL** : grille ou protocole d’évaluation.

### Standards et composants

- **STD** : standard ;
- **COMP** : composant ;
- **PAT** : pattern ;
- **API** : contrat ou interface ;
- **AUTO** : automatisation.

### Projets et expérimentation

- **PRJ** : projet ;
- **EXP** : expérimentation ;
- **POC** : preuve de concept ;
- **REX** : retour d’expérience ;
- **AUDIT** : audit.

### Pilotage et mesure

- **KPI** : indicateur ;
- **ACT** : action ;
- **RISK** : risque ;
- **CTRL** : contrôle ;
- **OBS** : observation.

## Domaines recommandés

Les domaines peuvent être adaptés, mais doivent rester stables :

- **ARCH** : architecture ;
- **DOC** : documentation ;
- **PROMPT** : prompting ;
- **DATA** : données ;
- **SEC** : sécurité ;
- **DEV** : développement ;
- **OPS** : opérations ;
- **GOV** : gouvernance ;
- **KNOW** : knowledge management ;
- **PLAT** : plateforme ;
- **RUN** : runtime.

## Règles de versioning

### Version majeure

Une version majeure `vX.0` est créée lorsqu’un changement modifie :

- le contrat d’usage ;
- la structure fondamentale ;
- le périmètre de responsabilité ;
- les conditions d’application ;
- les relations de dépendance critiques.

### Version mineure

Une version mineure `vX.Y` est créée lorsqu’un changement apporte :

- une clarification ;
- une extension compatible ;
- une amélioration de contenu ;
- un enrichissement sans rupture.

### Correction

Les corrections éditoriales mineures peuvent être tracées dans l’historique sans créer systématiquement une nouvelle version, sauf si l’actif est Gold ou réglementairement sensible.

## Règles d’unicité

Chaque identifiant doit être unique.

Un même actif ne doit pas être renommé si son identité fonctionnelle reste stable.

En cas de remplacement, l’ancien actif passe en Deprecated ou Archived, et le nouvel actif reçoit son propre identifiant.

# Gestion du cycle de vie

## Vue d'ensemble

Le cycle de vie officiel des actifs SFIA est :

**Draft → Candidate → Validated → Gold → Deprecated → Archived**

## Draft

### Définition

État initial d’un actif en cours de conception.

Le contenu est exploratoire, incomplet ou non validé.

### Critères d’entrée

- besoin identifié ;
- propriétaire provisoire désigné ;
- première structure créée.

### Critères de sortie

- contenu suffisamment structuré ;
- usage cible défini ;
- hypothèses explicitées.

## Candidate

### Définition

Actif suffisamment mature pour être testé ou revu.

Il n’est pas encore standard officiel.

### Critères d’entrée

- contenu complet ;
- domaine d’usage précisé ;
- version initiale disponible ;
- critères d’évaluation définis.

### Critères de sortie

- revue réalisée ;
- expérimentation ou usage pilote documenté ;
- écarts identifiés.

## Validated

### Définition

Actif validé pour un usage contrôlé.

Il peut être utilisé par plusieurs projets, mais reste sous observation.

### Critères d’entrée

- preuves d’usage disponibles ;
- validation par le propriétaire ;
- absence de risque majeur identifié ;
- relations documentées.

### Critères de sortie

- usage répété ;
- valeur démontrée ;
- stabilité suffisante ;
- retours positifs consolidés.

## Gold

### Définition

Actif de référence officielle.

Il constitue la version recommandée ou obligatoire selon le contexte.

### Critères d’entrée

- adoption démontrée ;
- qualité vérifiée ;
- documentation complète ;
- gouvernance établie ;
- version stable.

### Règles spécifiques

Un actif Gold doit être maintenu activement, surveillé via KPI et relié aux standards, guides ou projets qui le justifient.

## Deprecated

### Définition

Actif encore consultable, mais non recommandé pour les nouveaux usages.

Il est remplacé, obsolète ou en fin de vie.

### Critères d’entrée

- alternative disponible ;
- décision de dépréciation documentée ;
- impacts identifiés.

### Règles spécifiques

La page doit indiquer :

- la raison de la dépréciation ;
- l’actif remplaçant ;
- la date cible d’archivage ;
- les usages résiduels autorisés.

## Archived

### Définition

Actif retiré de l’usage actif.

Il est conservé uniquement pour historique, audit ou traçabilité.

### Critères d’entrée

- plus aucun usage opérationnel attendu ;
- dépendances traitées ;
- archivage validé.

<aside>
🔁

**Principe de cycle de vie** : aucun actif ne devient Gold sans preuve d’usage, et aucun actif obsolète ne doit rester présenté comme référence active.

</aside>

# Gouvernance documentaire

## Création

La création d’un actif SFIA doit répondre à un besoin explicite.

Chaque création doit préciser :

- le type d’actif ;
- le propriétaire ;
- le domaine ;
- le problème adressé ;
- le statut initial ;
- les relations attendues ;
- le niveau de criticité.

## Validation

La validation repose sur une revue adaptée au type d’actif.

Elle peut inclure :

- revue d’architecture ;
- revue documentaire ;
- revue sécurité ;
- validation métier ;
- expérimentation ;
- contrôle de cohérence avec les standards existants.

## Publication

La publication correspond à la mise à disposition contrôlée d’un actif.

Un actif publié doit être :

- correctement nommé ;
- versionné ;
- relié aux objets pertinents ;
- compréhensible par son audience cible ;
- positionné dans son cycle de vie.

## Modification

Toute modification significative doit être tracée.

Les modifications doivent préciser :

- la nature du changement ;
- le motif ;
- l’impact ;
- le responsable ;
- la version concernée ;
- les relations impactées.

## Archivage

L’archivage doit préserver la traçabilité sans maintenir l’actif dans les parcours actifs.

Il doit être accompagné :

- d’une justification ;
- d’une date ;
- d’un lien vers l’actif remplaçant si applicable ;
- d’un statut explicite.

## Rôles de gouvernance

### Owner

Responsable de la qualité, de l’actualité et de la pertinence de l’actif.

### Reviewer

Responsable de la revue de contenu, de conformité ou d’architecture.

### Approver

Responsable de la validation finale pour les actifs structurants.

### Contributor

Contributeur autorisé à proposer des ajouts, corrections ou améliorations.

### Consumer

Utilisateur de l’actif dans un contexte projet, opérationnel ou décisionnel.

# Intégration avec Notion

## Principe d'implémentation

Notion constitue le socle natif de gestion documentaire, de connaissance, de gouvernance et de pilotage du repository SFIA.

Les informations y sont structurées selon deux formes complémentaires :

- **bases de données** pour les objets gouvernables, filtrables, reliables et mesurables ;
- **pages** pour les contenus narratifs, explicatifs, méthodologiques ou décisionnels.

## Informations stockées sous forme de bases de données

Les bases de données doivent être utilisées pour les objets nécessitant des propriétés, statuts, relations ou vues multiples.

### Bases recommandées

#### Standards SFIA

Contient les standards officiels, leurs versions, statuts, domaines, propriétaires et relations.

#### Prompts SFIA

Contient les prompts réutilisables, classés par cas d’usage, maturité, modèle cible, domaine et niveau de validation.

#### Templates SFIA

Contient les modèles de livrables, fiches, guides, checklists et documents réutilisables.

#### Composants SFIA

Contient les composants fonctionnels, techniques ou méthodologiques réutilisables.

#### ADR SFIA

Contient les décisions d’architecture, leurs contextes, options, décisions, impacts et statuts.

#### Projets SFIA

Contient les projets de validation, expérimentations, pilotes et initiatives.

#### REX SFIA

Contient les retours d’expérience, observations, enseignements et recommandations.

#### Actions SFIA

Contient les actions de gouvernance, amélioration, correction ou industrialisation.

#### KPI Maturité SFIA

Contient les indicateurs de maturité, adoption, qualité, conformité et performance.

#### Audits SFIA

Contient les résultats d’audit, constats, écarts, risques et recommandations.

## Informations stockées sous forme de pages

Les pages doivent être utilisées pour les contenus à forte valeur narrative ou structurante :

- blueprint ;
- guides détaillés ;
- doctrines ;
- notes de cadrage ;
- synthèses exécutives ;
- comptes rendus ;
- playbooks ;
- fiches de décision ;
- documentation de composants ;
- analyses de REX ;
- recommandations.

## Relations entre les bases

Les relations doivent matérialiser la traçabilité du repository.

### Relations structurantes

- un standard peut être relié à des templates, prompts, composants, projets, ADR et KPI ;
- un prompt peut être relié à des cas d’usage, projets, REX et KPI ;
- un composant peut être relié à des standards, projets, GitHub repositories et audits ;
- un projet peut être relié aux assets utilisés, REX produits, actions ouvertes et KPI impactés ;
- un ADR peut être relié aux standards, composants ou choix Platform concernés ;
- un audit peut générer des actions, recommandations et évolutions de standards ;
- un KPI peut mesurer l’adoption ou l’efficacité d’un asset, d’un standard ou d’un processus.

## Vues Notion recommandées

### Vue exécutive

Tableaux de bord orientés statut, maturité, risques et priorités.

### Vue opérationnelle

Vues filtrées par domaine, owner, statut, échéance ou type d’actif.

### Vue gouvernance

Vues centrées sur les actifs en Candidate, Deprecated, en attente de validation ou sans owner.

### Vue capitalisation

Vues reliant REX, projets, standards et recommandations.

<aside>
🗂️

**Règle Notion** : tout objet qui doit être filtré, relié, versionné ou mesuré doit être stocké dans une base de données. Tout contenu explicatif ou méthodologique approfondi doit être porté par une page.

</aside>

# Intégration avec GitHub

## Principe de frontière

GitHub est le référentiel des actifs techniques exécutables ou versionnés comme code.

Notion reste le référentiel de gouvernance, documentation, connaissance, décisions et pilotage.

## Documentation dans Notion

Notion porte :

- le sens métier et architectural ;
- les décisions ;
- les standards ;
- les guides ;
- les statuts ;
- les responsabilités ;
- la traçabilité ;
- les relations entre actifs ;
- les KPI et REX.

## Code et composants dans GitHub

GitHub porte :

- le code source ;
- les scripts ;
- les workflows ;
- les automatisations ;
- les configurations versionnées ;
- les tests ;
- les packages ;
- les exemples techniques exécutables ;
- les issues ou pull requests techniques si applicables.

## Relation entre Notion et GitHub

Chaque composant technique référencé dans Notion doit inclure :

- le lien GitHub ;
- la version ou tag ;
- le statut SFIA ;
- le propriétaire ;
- les prérequis ;
- les modalités d’usage ;
- les standards applicables ;
- les projets consommateurs ;
- les risques ou limites connues.

## Règles de synchronisation

- Une décision d’architecture doit être documentée dans Notion, même si elle impacte du code GitHub.
- Un composant GitHub réutilisable doit être référencé dans la base Composants SFIA.
- Une automatisation critique doit être documentée dans Platform.
- Les changements techniques majeurs doivent être reliés à une décision ADR ou à une action SFIA.
- Les releases GitHub significatives doivent pouvoir être rapprochées d’une version d’actif Notion.

## Frontière opérationnelle

### Notion est responsable de la gouvernance

Il répond aux questions : pourquoi, quoi, pour qui, avec quel statut, selon quelle règle, avec quelle preuve.

### GitHub est responsable de l’exécution technique

Il répond aux questions : comment c’est implémenté, testé, packagé, livré et maintenu techniquement.

# Contribution au Repository

## Principes de contribution

Toute contribution au repository SFIA doit renforcer la cohérence, la réutilisabilité et la traçabilité du patrimoine.

Une contribution ne doit pas créer une variante locale non gouvernée d’un actif existant.

## Règles d'ajout d'un actif

Avant d’ajouter un actif, le contributeur doit vérifier :

- l’existence d’un actif équivalent ;
- le domaine concerné ;
- le type d’actif ;
- le besoin adressé ;
- le propriétaire pressenti ;
- les relations nécessaires ;
- le statut initial.

## Règles de modification d'un actif

Avant de modifier un actif, le contributeur doit préciser :

- la nature du changement ;
- le motif ;
- l’impact sur les consommateurs ;
- la compatibilité avec la version actuelle ;
- les relations à mettre à jour ;
- la nécessité ou non de changer de version.

## Parcours de contribution

### Étape 1 — Proposition

Création ou modification en statut Draft, avec description du besoin.

### Étape 2 — Qualification

Revue du type d’actif, de son périmètre, de son owner et de ses relations.

### Étape 3 — Revue

Évaluation de la qualité, de la cohérence et de la valeur de réutilisation.

### Étape 4 — Validation

Passage au statut Candidate ou Validated selon le niveau de preuve.

### Étape 5 — Publication

Mise à disposition dans les vues officielles et documentation des règles d’usage.

### Étape 6 — Suivi

Mesure de l’usage, collecte des REX et ajustement du cycle de vie.

## Critères d'acceptation

Une contribution est recevable si elle est :

- utile ;
- non redondante ;
- correctement structurée ;
- reliée aux objets pertinents ;
- assignée à un owner ;
- conforme aux conventions de nommage ;
- positionnée dans le cycle de vie.

<aside>
✍️

**Règle de contribution** : une contribution SFIA n’est complète que lorsqu’elle est nommée, versionnée, reliée, gouvernée et exploitable.

</aside>

# Repository auto-évolutif

## Principe

Le repository SFIA doit évoluer par apprentissage continu.

Il ne s’agit pas d’un référentiel figé, mais d’un système capable d’intégrer progressivement les enseignements issus des usages, audits, KPI et retours terrain.

## Rôle des REX

Les REX permettent d’identifier :

- les actifs réellement utiles ;
- les limites des standards existants ;
- les besoins d’adaptation ;
- les opportunités de généralisation ;
- les écarts entre théorie et exécution.

## Rôle des audits

Les audits apportent une vision structurée de la conformité, des risques et des écarts.

Ils permettent de déclencher :

- actions correctives ;
- évolutions de standards ;
- mises à jour de guides ;
- dépréciations d’actifs ;
- décisions d’architecture.

## Rôle des KPI

Les KPI mesurent la performance réelle du repository.

Ils doivent couvrir :

- adoption des assets ;
- taux de réutilisation ;
- maturité documentaire ;
- conformité aux standards ;
- temps de validation ;
- volume d’actifs obsolètes ;
- efficacité des prompts ;
- impact des projets de validation.

## Rôle du Learning Engine

Le Learning Engine transforme les signaux faibles et apprentissages en propositions d’amélioration.

Il peut recommander :

- la promotion d’un actif vers Gold ;
- la dépréciation d’un actif peu utilisé ;
- la création d’un nouveau standard ;
- la consolidation de templates similaires ;
- l’amélioration d’un prompt ;
- l’ouverture d’une action de gouvernance ;
- la mise à jour d’un guide.

## Boucle d'amélioration continue

### Collecter

Collecte des données issues des projets, audits, REX, KPI et usages.

### Analyser

Identification des tendances, écarts, redondances, risques et opportunités.

### Décider

Arbitrage via les mécanismes de gouvernance Core.

### Mettre à jour

Évolution des assets, standards, guides, composants ou règles Platform.

### Mesurer

Suivi de l’impact des changements via Runtime.

<aside>
🧠

**Ambition auto-évolutive** : le repository SFIA doit apprendre de ses usages et transformer les preuves terrain en standards, assets et décisions gouvernées.

</aside>

# Recommandations

## Recommandation 1 — Stabiliser le noyau Core

Formaliser en priorité les principes, conventions, cycles de vie, rôles et décisions structurantes.

Sans Core robuste, les autres espaces risquent de diverger.

## Recommandation 2 — Mettre en place les bases transverses

Créer ou stabiliser les bases suivantes :

- Standards SFIA ;
- Prompts SFIA ;
- Templates SFIA ;
- Composants SFIA ;
- Projets SFIA ;
- REX SFIA ;
- Actions SFIA ;
- KPI Maturité SFIA ;
- ADR SFIA.

## Recommandation 3 — Définir les templates officiels

Chaque type d’actif doit disposer d’un template Notion officiel.

Les templates doivent inclure les métadonnées, les relations et les critères de passage de statut.

## Recommandation 4 — Prioriser les actifs Gold

Identifier rapidement les premiers actifs Gold afin de fournir une référence stable aux équipes.

## Recommandation 5 — Relier systématiquement projets, REX et standards

La valeur du repository dépendra de sa capacité à démontrer pourquoi un actif est recommandé.

Les relations doivent donc être obligatoires pour les actifs structurants.

## Recommandation 6 — Institutionnaliser le Learning Engine

Le Learning Engine doit être considéré comme un mécanisme de gouvernance et non comme une simple automatisation.

Ses recommandations doivent être tracées, qualifiées et arbitrées.

# Roadmap

## Phase 1 — Fondation

### Objectif

Stabiliser les règles fondamentales du repository.

### Travaux clés

- validation du Repository Blueprint ;
- création des conventions de nommage ;
- définition des statuts de cycle de vie ;
- formalisation des rôles ;
- création des premières bases structurantes ;
- création des templates officiels.

## Phase 2 — Structuration

### Objectif

Organiser les actifs existants et établir la traçabilité.

### Travaux clés

- classification des contenus existants ;
- identification des doublons ;
- rattachement des assets aux espaces Core, Knowledge, Assets, Projects, Platform ou Runtime ;
- création des relations entre bases ;
- qualification des statuts ;
- désignation des owners.

## Phase 3 — Industrialisation

### Objectif

Rendre le repository exploitable à l’échelle.

### Travaux clés

- mise en place des vues exécutives et opérationnelles ;
- activation des tableaux de bord KPI ;
- formalisation des workflows de contribution ;
- intégration GitHub ;
- définition des contrôles de gouvernance ;
- publication des premiers actifs Gold.

## Phase 4 — Amélioration continue

### Objectif

Mettre en place le repository auto-évolutif.

### Travaux clés

- structuration des REX ;
- exploitation des audits ;
- suivi des KPI ;
- recommandations du Learning Engine ;
- revues périodiques des actifs ;
- gestion active de la dépréciation et de l’archivage.

## Phase 5 — Passage à l'échelle

### Objectif

Faire du repository SFIA une plateforme de référence durable.

### Travaux clés

- extension à de nouveaux domaines ;
- intégration avec les outils d’ingénierie ;
- automatisation des contrôles ;
- consolidation des standards ;
- mesure de la valeur ;
- alignement avec les pratiques d’architecture d’entreprise.

# v1.1 Update — Post Workspace Cleanup PR #81

The repository blueprint has been updated after PR #81.

The active SFIA workspace structure is now:

| Zone | Role |
|------|------|
| `method/sfia-fast-track/` | Active SFIA Fast Track delivery method |
| `method/complementary/` | Complementary methods |
| `docs/practices/` | Platform practices by role, discipline or domain |
| `docs/templates/` | Platform templates |
| `docs/standards/` | Platform standards |
| `prompts/` | Prompt assets |
| `projects/interv360/` | Reference project |
| `exports/notion/` | Prepared Notion exports, not source of truth |
| `tools/cmp-001/` | Technical tooling |
| `projects/interv360/archive/` | Project archives |
| `method/sfia-fast-track/archive/` | Method archives |

## Source of Truth Rule

The repository remains the source of truth (see also **v1.1 Consistency Rule** at document introduction).

Notion must be treated as a curated knowledge layer, not as a raw mirror of the repository.

## Archive Rule

Historical documents are preserved in archive folders.

Archives must not be published or synchronized blindly.

## Obsolete paths (post-PR #81)

The following paths are no longer active in the SFIA workspace:

| Former path | Current path |
|-------------|----------------|
| `methods/` (root) | `method/complementary/` |
| `docs/methods/` | `docs/practices/` |

## Reference

- Workspace cleanup merge: PR #81 — commit `7c0e865`
- Capitalization inputs: `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/`

# Conclusion

Le **SFIA Repository Blueprint v1.1** établit le modèle officiel d’organisation, de gouvernance, de versioning et d’évolution du repository SFIA.

Il positionne Notion comme socle natif de documentation, connaissance, gouvernance et pilotage, tout en définissant clairement la frontière avec GitHub pour les actifs techniques exécutables.

Ce blueprint transforme le repository en un véritable **système de gestion du patrimoine méthodologique et technique**.

Il permet de passer d’une logique documentaire à une logique plateforme, où chaque actif est identifié, relié, gouverné, mesuré et progressivement amélioré.

La réussite du repository SFIA reposera sur trois conditions :

- une gouvernance claire et appliquée ;
- une traçabilité systématique entre décisions, projets, assets et KPI ;
- une boucle d’apprentissage continue alimentée par les REX, audits, usages et recommandations du Learning Engine.

<aside>
🏁

**Conclusion exécutive** : le Repository Blueprint v1.0 constitue la référence officielle pour construire, gouverner et faire évoluer la plateforme SFIA comme un actif stratégique d’entreprise.

</aside>

# Métadonnées

| Champ | Valeur |
| --- | --- |
| Titre | SFIA Repository Blueprint v1.1 |
| Type de document | Référentiel d’architecture d’entreprise |
| Domaine | SFIA, Software Factory, Knowledge Management, Gouvernance documentaire, Plateforme d’ingénierie |
| Version | v1.1 (enrichi post-PR #81 — contenu v1.0 conservé) |
| Statut | Foundation document |
| Classification | Référence officielle SFIA |
| Audience | Direction, Architecture d’entreprise, Gouvernance, Product Owners, Engineering, Knowledge Management, Contributeurs SFIA |
| Propriétaire | Morris Cleland |
| Date de création | 2026-06-27 |
| Cycle de vie | Draft → Candidate → Validated → Gold → Deprecated → Archived |
| Repository cible | Plateforme SFIA native Notion |
| Outils associés | Notion, GitHub, Learning Engine, KPI Runtime |
| Révision recommandée | Trimestrielle ou à chaque évolution majeure de l’architecture SFIA |