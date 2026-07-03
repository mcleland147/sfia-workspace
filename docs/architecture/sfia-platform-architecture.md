---
source: Notion / SFIA Architecture
status: reference
sync: manual-export
version: v1.1
previous: v1.0
updated_after: PR #81 workspace cleanup, Interv360 capitalization
---

# SFIA Platform Architecture v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** PR #81 workspace cleanup, Interv360 capitalization

<aside>
🏛️

**Document fondateur SFIA** — Ce document définit l’architecture de référence de la plateforme SFIA. Le contenu v1.0 (export Notion) est conservé ci-dessous. La section **v1.1 Update** en fin de document intègre la structure opérationnelle Git post-capitalisation.

</aside>

## v1.1 Consistency Rule

The v1.0 content is preserved for intellectual traceability.

When a tension exists between the v1.0 content and the v1.1 update, the v1.1 update prevails.

In SFIA v1.1:

- the Git repository is the operational source of truth;
- Notion is a curated knowledge layer, not a raw mirror of the repository;
- archived material is preserved for traceability but is not an active source;
- human validation remains mandatory before publishing, synchronizing or promoting content.

## Objectif du document

### Objectif

Définir l’architecture de référence de la plateforme **SFIA — Software Factory IA**.

### Contexte

La SFIA n’est pas un projet métier. Elle constitue le socle permettant de concevoir, générer, gouverner, tester, documenter et améliorer les futurs projets logiciels.

### Constats

- Les livrables méthodologiques doivent être produits nativement dans Notion.
- Les projets futurs doivent être structurés par une plateforme commune.
- L’IA générative doit devenir un levier d’industrialisation, et non un simple assistant documentaire.
- Chaque projet doit enrichir le référentiel, les standards, les composants et les pratiques SFIA.

### Analyse

L’enjeu est de passer d’une méthode assistée par IA à une **plateforme d’ingénierie logicielle pilotée par IA**.  

Cette plateforme doit combiner référentiel, moteur de décision, environnement de production, capitalisation, gouvernance et amélioration continue.

### Recommandations

- Positionner Notion comme source de vérité.
- Structurer la SFIA en modules à responsabilités claires.
- Gouverner les évolutions par ADR, versioning et analyse d’impact.
- Faire de chaque projet un mécanisme de validation et d’enrichissement de la plateforme.

### Plan d’action

1. Formaliser l’architecture cible.
2. Définir les modules SFIA.
3. Décrire le pipeline global.
4. Mettre en place la gouvernance.
5. Initialiser les décisions structurantes.
6. Préparer la roadmap d’évolution.

### Conclusion

Ce document constitue la première référence officielle de la plateforme SFIA. Il établit le cadre d’architecture qui permettra de produire, gouverner et faire évoluer les projets futurs.

# Vision

## Objectif

Faire de la SFIA un système capable de transformer un besoin projet en environnement de delivery structuré, gouverné et capitalisable.

## Contexte

Les organisations cherchent à industrialiser le delivery logiciel tout en intégrant l’IA générative de manière contrôlée. La SFIA répond à cet enjeu en combinant architecture d’entreprise, architecture logicielle, gouvernance IT, urbanisation SI et automatisation du cycle de delivery.

## Constats

- Les projets logiciels sont souvent documentés après coup.
- Les standards sont parfois dispersés entre documents, outils et pratiques informelles.
- Les prompts, templates et décisions ne sont pas toujours capitalisés.
- Les retours d’expérience restent insuffisamment exploités.
- Les architectures évoluent souvent par opportunité plutôt que par mécanisme structuré.

## Analyse

La SFIA doit devenir un **moteur de production, de décision et d’apprentissage**.  

Elle ne doit pas être une simple bibliothèque documentaire. Elle doit orchestrer les décisions, les composants, les standards, les prompts, les templates et les preuves produits par les projets.

## Vision cible

À terme, la plateforme devra permettre :

- de qualifier un besoin via un formulaire intelligent ;
- de détecter automatiquement les caractéristiques du projet ;
- d’activer les bons composants SFIA ;
- de générer l’arborescence projet ;
- de générer les livrables initiaux ;
- de proposer les prompts adaptés ;
- de structurer les tâches de delivery ;
- de produire les tests et la recette ;
- de capitaliser les enseignements ;
- de faire évoluer le référentiel SFIA.

<aside>
🎯

**Vision directrice** — La SFIA transforme un besoin brut en dispositif de delivery logiciel structuré, gouverné, traçable et améliorable.

</aside>

## Recommandations

- Concevoir la plateforme comme un système modulaire.
- Séparer clairement les fonctions de décision, production, exécution, connaissance et expérimentation.
- Documenter nativement dans Notion tous les objets structurants.
- Mesurer la valeur produite par la capitalisation projet.

## Plan d’action

1. Stabiliser le modèle d’architecture.
2. Définir le méta-modèle SFIA.
3. Créer les registres de composants, standards, prompts et décisions.
4. Mettre en œuvre le pipeline de fonctionnement.
5. Installer les mécanismes d’évolution continue.

## Conclusion

La vision SFIA positionne la plateforme comme un actif stratégique : elle produit des projets, mais elle produit aussi la capacité durable de produire de meilleurs projets.

# Objectifs

## Objectif

Définir les objectifs structurants de la plateforme SFIA.

## Contexte

Une plateforme d’architecture et de delivery pilotée par IA doit répondre simultanément à des enjeux de productivité, qualité, gouvernance, traçabilité, réutilisabilité et apprentissage organisationnel.

## Constats

- Les méthodes projet classiques produisent souvent des livrables peu réutilisables.
- Les pratiques d’IA générative restent difficiles à standardiser.
- La qualité dépend trop fortement des individus.
- Les décisions structurantes manquent de traçabilité exploitable.
- Les retours d’expérience ne modifient pas toujours les standards.

## Analyse

Les objectifs SFIA doivent couvrir trois horizons :

1. **Court terme** — structurer les livrables, prompts, standards et projets.
2. **Moyen terme** — automatiser la qualification, la génération et la capitalisation.
3. **Long terme** — disposer d’une plateforme évolutive de delivery logiciel pilotée par IA.

## Objectifs stratégiques

### Industrialiser le delivery logiciel

- Standardiser les cycles de cadrage, conception, développement, test et recette.
- Réduire les écarts entre projets.
- Accélérer la production de livrables de qualité.

### Gouverner l’usage de l’IA générative

- Définir des prompts validés.
- Encadrer les rôles IA.
- Tracer les décisions et productions.
- Maîtriser les risques de dérive méthodologique.

### Capitaliser nativement

- Transformer chaque projet en source d’amélioration.
- Convertir les livrables projet en templates, standards ou composants.
- Promouvoir les meilleurs prompts en Gold Prompts.
- Documenter les preuves, REX et audits.

### Renforcer la qualité d’architecture

- Structurer les décisions d’architecture.
- Assurer la cohérence avec l’urbanisation SI.
- Identifier les impacts avant évolution.
- Préserver la stabilité globale de la plateforme.

### Créer un référentiel vivant

- Versionner les standards.
- Maintenir les composants.
- Consolider les pratiques.
- Mesurer la maturité SFIA.

## Recommandations

- Associer chaque objectif à des indicateurs.
- Relier les objectifs aux modules SFIA.
- Prioriser les objectifs qui renforcent la réutilisabilité et la gouvernance.
- Faire de la capitalisation un critère obligatoire de clôture projet.

## Plan d’action

1. Créer le tableau des objectifs SFIA.
2. Associer chaque objectif à un module propriétaire.
3. Définir les KPI de maturité.
4. Intégrer les objectifs dans les revues de gouvernance.
5. Réviser les objectifs à chaque version majeure.

## Conclusion

Les objectifs SFIA permettent de dépasser la logique documentaire pour installer une plateforme de production logicielle gouvernée, mesurable et évolutive.

# Principes fondateurs

## Objectif

Établir les principes non négociables qui guident la conception, l’exploitation et l’évolution de la plateforme SFIA.

## Contexte

Une architecture de référence doit s’appuyer sur des principes stables. Ces principes évitent les arbitrages opportunistes et garantissent la cohérence dans le temps.

## Constats

- Sans principes explicites, les projets créent leurs propres variantes.
- Sans gouvernance, les standards deviennent rapidement obsolètes.
- Sans capitalisation, la plateforme n’apprend pas.
- Sans modularité, chaque évolution fragilise l’ensemble.

## Analyse

Les principes fondateurs doivent garantir que la SFIA reste à la fois stable dans son architecture et évolutive dans ses composants.

## Principe 1 — Notion est la source de vérité

### Description

Tous les livrables méthodologiques, référentiels, architectures, audits, standards, processus, templates et guides sont produits nativement dans Notion.

### Implications

- Notion est le référentiel maître.
- Les exports Word, PDF et PowerPoint sont secondaires.
- Les liens, bases, relations et statuts Notion structurent la gouvernance.
- Les documents externes ne doivent pas devenir des sources divergentes.

<aside>
📌

**Principe clé** — Un livrable n’existe officiellement que lorsqu’il est structuré, versionné et gouverné dans Notion.

</aside>

## Principe 2 — Architecture modulaire

### Description

La plateforme est organisée en modules indépendants, chacun avec une responsabilité claire.

### Implications

- Une évolution locale ne doit pas remettre en cause l’architecture globale.
- Les modules doivent exposer des interfaces fonctionnelles stables.
- Les responsabilités doivent être documentées.
- Les dépendances doivent être explicites.

## Principe 3 — Architecture vivante

### Description

L’architecture SFIA évolue par versions successives à partir des projets, audits, REX, expérimentations et décisions d’architecture.

### Sources d’évolution

- Projets réalisés.
- Audits SFIA.
- REX projet.
- Expérimentations.
- Architecture Impact Reports.
- Nouveaux composants validés.
- Décisions d’architecture.

## Principe 4 — Capitalisation native

### Description

Chaque projet doit enrichir la SFIA.

### Classification obligatoire des productions

- Livrable projet.
- Template.
- Prompt.
- Standard.
- Composant SFIA.
- Décision.
- Evidence.
- Expérimentation.
- REX.
- KPI.

## Principe 5 — Gouvernance par ADR

### Description

Toute décision structurante doit être documentée dans un ADR.

### Exemples de décisions

- Choix d’architecture plateforme.
- Choix des outils.
- Choix du modèle documentaire.
- Évolution du moteur de décision.
- Intégration d’un nouveau composant SFIA.
- Modification d’un standard de référence.

## Principe 6 — Composants avant documents

### Description

La SFIA privilégie des composants réutilisables plutôt que des documents isolés.

### Implications

- Un template est un composant.
- Un prompt validé est un composant.
- Un standard versionné est un composant.
- Une architecture récurrente peut devenir un blueprint.
- Un processus réutilisable doit être référencé et maintenu.

## Principe 7 — Projet = validation de la plateforme

### Description

Chaque projet constitue à la fois une livraison métier et un test de maturité de la SFIA.

### Implications

- Le projet valide les composants activés.
- Le projet révèle les manques.
- Le projet produit des preuves.
- Le projet alimente le Core, la Knowledge et le Laboratory.

## Principe 8 — Platform over Projects

### Description

La SFIA est conçue comme une plateforme d’ingénierie logicielle évolutive. Les projets ne constituent pas la finalité de la plateforme : ils représentent des vecteurs de validation, d’apprentissage et d’enrichissement du patrimoine méthodologique SFIA.

### Intention

Ce principe rappelle que la valeur de la SFIA ne se limite pas aux logiciels livrés. Elle réside également dans la capacité de chaque projet à renforcer le référentiel, les composants, les standards, les prompts, les règles de décision et les mécanismes de gouvernance de la plateforme.

<aside>
🧠

**Philosophie SFIA** — Chaque projet doit rendre la plateforme plus intelligente que la veille.

</aside>

### Implications

- Chaque projet doit être conçu comme un cas de validation de la plateforme.
- Chaque projet doit produire des enseignements exploitables.
- Chaque projet doit identifier les composants réutilisables générés ou améliorés.
- Chaque projet doit contribuer à la maturité de la SFIA.
- Chaque projet doit alimenter le Core, la Knowledge, le Laboratory ou les registres de gouvernance lorsque cela est pertinent.

### Contributions attendues

Un projet peut enrichir la plateforme en produisant :

- de nouveaux composants SFIA ;
- des templates réutilisables ;
- des prompts industrialisés ;
- des standards ;
- des règles de décision ;
- des retours d’expérience ;
- des décisions d’architecture ;
- des preuves de fonctionnement ;
- des Architecture Impact Reports ;
- des indicateurs de maturité.

### Valeur pour la plateforme

- Augmentation progressive du niveau d’automatisation.
- Renforcement de la réutilisation inter-projets.
- Amélioration continue des standards et composants.
- Réduction de la dette méthodologique.
- Consolidation du patrimoine SFIA.
- Transformation des projets en boucles d’apprentissage.

### Risques à maîtriser

- Limiter un projet à sa livraison métier sans capitalisation.
- Créer des livrables non réutilisables.
- Multiplier les variantes locales hors gouvernance.
- Promouvoir des composants sans preuve suffisante.
- Enrichir le Core sans analyse d’impact ni ADR.

### Règles opérationnelles

1. Tout projet doit intégrer une phase de capitalisation.
2. Tout livrable significatif doit être classé selon sa valeur de réutilisation.
3. Toute évolution structurante issue d’un projet doit faire l’objet d’un Architecture Impact Report.
4. Tout composant candidat doit être évalué avant intégration au Core.
5. Toute décision structurante doit être documentée par un ADR.

## Recommandations

- Formaliser ces principes dans le référentiel Core.
- Les intégrer dans les revues d’architecture.
- Les utiliser comme critères d’arbitrage.
- Les relier aux ADR et aux standards.

## Plan d’action

1. Créer une page de principes SFIA.
2. Associer chaque principe à des règles opérationnelles.
3. Identifier les exceptions possibles.
4. Mettre en place une revue périodique.
5. Versionner les principes.

## Conclusion

Les principes fondateurs garantissent la stabilité conceptuelle de la SFIA tout en permettant son amélioration continue.

# Architecture globale

## Objectif

Décrire l’architecture cible de la plateforme SFIA et les responsabilités de chacun de ses modules.

## Contexte

La SFIA est conçue comme une plateforme modulaire. Chaque module porte une fonction spécifique du cycle d’industrialisation : référencer, qualifier, décider, générer, exécuter, capitaliser, expérimenter et améliorer.

## Constats

- Une plateforme documentaire seule ne suffit pas à industrialiser le delivery.
- Un moteur d’exécution sans référentiel produit de l’automatisation non gouvernée.
- Une base de connaissance sans mécanisme de réintégration reste passive.
- Un laboratoire sans passerelle vers le Core ne crée pas de standardisation durable.

## Analyse

L’architecture cible doit organiser la plateforme en six modules complémentaires :

1. **SFIA Core** — cœur méthodologique et décisionnel.
2. **SFIA Studio** — point d’entrée utilisateur et qualification.
3. **SFIA Runtime** — moteur d’exécution et d’orchestration.
4. **SFIA Knowledge** — mémoire, capitalisation et référentiel d’apprentissage.
5. **SFIA Laboratory** — expérimentation et validation préalable.
6. **SFIA Projects** — projets de delivery et de validation.

<aside>
🏗️

**Architecture de référence** — La SFIA est un système modulaire où chaque projet active, consomme, teste et enrichit les modules de la plateforme.

</aside>

## Vue d’ensemble des modules

| Module | Rôle principal | Nature |
| --- | --- | --- |
| SFIA Core | Décider et standardiser | Référentiel |
| SFIA Studio | Qualifier le besoin | Interface |
| SFIA Runtime | Exécuter le pipeline | Orchestration |
| SFIA Knowledge | Capitaliser | Mémoire |
| SFIA Laboratory | Expérimenter | Innovation |
| SFIA Projects | Valider en conditions réelles | Delivery |

## SFIA Core

### Mission

Porter le cœur méthodologique, normatif et décisionnel de la plateforme.

### Responsabilités

- Maintenir le référentiel SFIA.
- Définir les cycles de vie projet.
- Porter les principes fondateurs.
- Gérer les règles de décision.
- Maintenir les standards.
- Référencer les composants.
- Définir les conventions de nommage et de structuration.
- Arbitrer l’activation des composants selon le contexte projet.

### Données manipulées

- Principes.
- Standards.
- Règles de décision.
- Composants SFIA.
- Blueprints.
- Conventions.
- Cycles de vie.
- ADR structurants.
- Versions de référence.

### Interactions

- Reçoit les demandes d’évolution issues de Knowledge, Laboratory et Projects.
- Fournit à Studio les règles de qualification.
- Fournit à Runtime les composants et standards à activer.
- S’appuie sur les ADR pour valider les changements.
- Publie les versions officielles de la plateforme.

### Valeur apportée

- Cohérence globale.
- Réutilisabilité.
- Qualité méthodologique.
- Réduction des écarts projet.
- Maîtrise des évolutions.

### Constats

Le Core doit éviter de devenir une simple documentation. Il doit agir comme un référentiel décisionnel activable par les autres modules.

### Analyse

Le Core est le point de stabilité de la plateforme. Il doit évoluer lentement, de manière contrôlée, uniquement après analyse d’impact et décision formalisée.

### Recommandations

- Protéger le Core par des règles d’évolution strictes.
- Versionner tous les standards.
- Relier chaque composant à son origine, son statut et ses usages.
- Exiger un ADR pour toute modification structurante.

### Plan d’action

1. Finaliser le référentiel Core.
2. Créer le registre des composants.
3. Définir les règles d’activation.
4. Mettre en place le versioning.
5. Relier Core aux modules Studio, Runtime et Knowledge.

### Conclusion

SFIA Core est le centre de gravité de la plateforme. Il garantit que les projets futurs s’appuient sur une base cohérente, gouvernée et évolutive.

## SFIA Studio

### Mission

Transformer un besoin brut en description projet exploitable, qualifiée et orientée décision.

### Responsabilités

- Porter le formulaire Project Intake.
- Gérer les questionnaires dynamiques.
- Accompagner la qualification du besoin.
- Identifier les caractéristiques du projet.
- Produire le cadrage initial.
- Préparer l’analyse par le Decision Engine.
- Sélectionner les besoins, contraintes et hypothèses.

### Données manipulées

- Besoins utilisateurs.
- Formulaires d’entrée.
- Réponses de qualification.
- Hypothèses.
- Contraintes.
- Typologies projet.
- Niveaux de complexité.
- Risques initiaux.
- Données de cadrage.

### Interactions

- Consomme les règles de qualification du Core.
- Transmet le besoin qualifié au Decision Engine.
- Déclenche Runtime après validation.
- Alimente Knowledge avec les patterns de besoin observés.
- Fournit à Projects les éléments de cadrage initial.

### Valeur apportée

- Standardisation de l’entrée projet.
- Réduction de l’ambiguïté.
- Accélération du cadrage.
- Amélioration de la qualité des décisions initiales.
- Traçabilité de la demande.

### Constats

Le besoin projet est souvent le point de variabilité le plus fort. Sans qualification structurée, les livrables générés sont instables.

### Analyse

Studio doit agir comme une interface intelligente entre l’expression métier et les mécanismes d’architecture SFIA. Il ne décide pas seul ; il prépare une décision robuste.

### Recommandations

- Créer un Project Intake Engine.
- Définir des questionnaires par typologie projet.
- Relier les réponses aux règles de décision.
- Mesurer la qualité de qualification.
- Conserver les hypothèses initiales pour comparaison en fin de projet.

### Plan d’action

1. Formaliser le formulaire Project Intake.
2. Définir les typologies projet.
3. Construire les règles de qualification.
4. Créer les modèles de cadrage.
5. Tester Studio sur un projet pilote.

### Conclusion

SFIA Studio permet de transformer l’entrée projet en matière exploitable par la plateforme. Il conditionne la qualité du pipeline complet.

## SFIA Runtime

### Mission

Exécuter le pipeline SFIA en orchestrant la génération, la structuration et l’automatisation du delivery.

### Responsabilités

- Générer l’environnement projet.
- Générer l’arborescence Notion.
- Générer les livrables initiaux.
- Sélectionner les prompts adaptés.
- Créer le backlog.
- Structurer les tâches de delivery.
- Générer les scénarios de tests.
- Préparer les éléments de recette.
- Orchestrer les scripts d’automatisation.
- Appliquer les standards activés.

### Données manipulées

- Besoin qualifié.
- Règles de décision.
- Composants activés.
- Templates.
- Prompts.
- Backlogs.
- Tâches.
- Plans de tests.
- Scripts.
- Livrables générés.
- Statuts d’exécution.

### Interactions

- Reçoit la décision issue du Core ou du futur Decision Engine.
- Consomme les composants et standards du Core.
- Utilise les templates, prompts et exemples de Knowledge.
- Produit les artefacts pour Projects.
- Retourne les preuves d’exécution vers Knowledge.
- Signale les limites rencontrées au Laboratory.

### Valeur apportée

- Accélération du lancement projet.
- Réduction des tâches manuelles.
- Homogénéisation des livrables.
- Meilleure qualité de structuration.
- Traçabilité de l’exécution.

### Constats

Sans moteur d’exécution, les standards restent déclaratifs. Runtime rend les standards opérables.

### Analyse

Runtime est le bras opérationnel de la plateforme. Il doit rester aligné sur le Core et ne jamais introduire de logique non gouvernée.

### Recommandations

- Définir un Delivery Pipeline standard.
- Créer des templates d’arborescence projet.
- Relier chaque génération à une règle ou un composant.
- Tracer les artefacts générés.
- Mettre en place des contrôles qualité.

### Plan d’action

1. Décrire le pipeline d’exécution cible.
2. Identifier les premières automatisations.
3. Créer les templates de génération.
4. Définir les preuves d’exécution attendues.
5. Tester Runtime sur Projet 2 — Interv360.

### Conclusion

SFIA Runtime transforme la plateforme en système productif. Il matérialise les décisions en environnements, livrables, tâches et preuves.

## SFIA Knowledge

### Mission

Capitaliser, organiser et rendre réutilisable tout ce qui est appris, produit et validé par la plateforme.

### Responsabilités

- Stocker les REX.
- Centraliser les audits.
- Référencer les décisions.
- Maintenir les standards publiés.
- Organiser les templates.
- Structurer les prompts.
- Conserver les exemples.
- Gérer les preuves projet.
- Alimenter les analyses d’évolution.
- Fournir les données de maturité.

### Données manipulées

- REX.
- Audits.
- ADR.
- Standards.
- Templates.
- Prompts.
- Gold Prompts.
- Exemples.
- Evidences.
- KPI.
- Architecture Impact Reports.
- Historique de versions.

### Interactions

- Reçoit les livrables et preuves de Projects.
- Reçoit les résultats d’expérimentation de Laboratory.
- Fournit à Core les éléments d’évolution.
- Fournit à Runtime les templates et prompts validés.
- Alimente les revues de gouvernance.
- Supporte les audits de maturité.

### Valeur apportée

- Mémoire organisationnelle.
- Réutilisation.
- Amélioration continue.
- Réduction de la dette méthodologique.
- Traçabilité des apprentissages.

### Constats

La connaissance non structurée est difficilement activable. La capitalisation doit donc être native, catégorisée et reliée aux objets SFIA.

### Analyse

Knowledge n’est pas une archive. C’est un actif opérationnel qui nourrit la décision, la génération et l’évolution de la plateforme.

### Recommandations

- Définir une taxonomie SFIA.
- Relier chaque élément à son origine projet ou expérimentation.
- Distinguer clairement draft, validé, standard et obsolète.
- Créer des vues par usage : architecture, delivery, audit, prompt, template.
- Mettre en place des KPI de réutilisation.

### Plan d’action

1. Structurer les bases Knowledge.
2. Définir les statuts de capitalisation.
3. Relier Knowledge aux projets.
4. Créer les vues de gouvernance.
5. Mettre en place les indicateurs de maturité.

### Conclusion

SFIA Knowledge transforme l’expérience accumulée en capacité réutilisable. C’est la mémoire active de la plateforme.

## SFIA Laboratory

### Mission

Tester les nouvelles approches, méthodes, rôles IA, outils, standards et automatisations avant leur intégration au Core.

### Responsabilités

- Mener les expérimentations.
- Tester de nouveaux rôles IA.
- Évaluer de nouveaux outils.
- Tester de nouvelles méthodes.
- Prototyper de nouveaux standards.
- Expérimenter de nouvelles automatisations.
- Mesurer la valeur et les risques.
- Produire des recommandations d’intégration.
- Proposer la promotion vers Core ou Knowledge.

### Données manipulées

- Fiches d’expérimentation.
- Hypothèses.
- Protocoles de test.
- Résultats.
- KPI expérimentaux.
- Recommandations.
- Décisions de promotion.
- Composants candidats.
- Limites observées.

### Interactions

- Reçoit les irritants et opportunités issus de Projects.
- Produit des recommandations vers Core.
- Alimente Knowledge avec les résultats.
- Fournit à Runtime des prototypes d’automatisation.
- Peut déclencher un ADR en cas de décision structurante.

### Valeur apportée

- Innovation maîtrisée.
- Réduction du risque d’intégration prématurée.
- Validation par preuve.
- Accélération de l’amélioration.
- Protection du Core.

### Constats

Intégrer directement une idée dans le référentiel crée un risque de dérive. Le Laboratory sert de zone contrôlée d’apprentissage.

### Analyse

Laboratory est un sas d’innovation. Il permet d’expérimenter sans fragiliser l’architecture cible.

### Recommandations

- Formaliser chaque expérimentation.
- Définir des critères de succès.
- Mesurer les impacts sur le Core.
- Documenter les décisions de promotion ou d’abandon.
- Relier les expérimentations aux projets qui les ont déclenchées.

### Plan d’action

1. Stabiliser la fiche d’expérimentation.
2. Créer le registre des composants candidats.
3. Définir les critères de promotion.
4. Connecter Laboratory aux Architecture Impact Reports.
5. Prioriser les expérimentations liées au Projet 2.

### Conclusion

SFIA Laboratory garantit que l’innovation est évaluée, mesurée et gouvernée avant d’être standardisée.

## SFIA Projects

### Mission

Porter les projets de validation et transformer l’expérience projet en maturité SFIA.

### Responsabilités

- Livrer des applications ou dispositifs métier.
- Appliquer les composants SFIA.
- Tester les standards.
- Utiliser les prompts et templates.
- Produire des preuves.
- Réaliser le REX projet.
- Contribuer aux audits SFIA.
- Produire l’Architecture Impact Report.
- Proposer des évolutions.
- Valider les capacités de la plateforme.

### Données manipulées

- Cadrage projet.
- Backlog.
- Architecture projet.
- Livrables.
- Tâches.
- Tests.
- Recette.
- Evidences.
- REX.
- Audit projet.
- Architecture Impact Report.
- Propositions d’évolution.

### Interactions

- Reçoit l’environnement généré par Runtime.
- Consomme les standards et composants du Core.
- Utilise les ressources Knowledge.
- Produit des enseignements vers Knowledge.
- Signale des besoins d’expérimentation au Laboratory.
- Déclenche des évolutions via la gouvernance.

### Valeur apportée

- Validation en conditions réelles.
- Production de preuves.
- Amélioration de la plateforme.
- Mesure de maturité.
- Alignement entre théorie et delivery.

### Constats

Un projet ne doit pas être considéré uniquement comme un livrable métier. Il est aussi un test de robustesse de la plateforme.

### Analyse

Projects représente la boucle terrain de la SFIA. Chaque projet doit fournir un feedback structuré permettant d’améliorer la plateforme sans remettre en cause son architecture globale.

### Recommandations

- Rendre obligatoire le REX.
- Produire un Architecture Impact Report par projet.
- Classer chaque livrable en fin de projet.
- Mesurer la réutilisation des composants.
- Utiliser Projet 2 — Interv360 comme premier cas de validation plateforme.

### Plan d’action

1. Créer le modèle de projet SFIA.
2. Définir les livrables obligatoires.
3. Intégrer REX, audit et impact report dans la clôture.
4. Relier les projets aux composants utilisés.
5. Consolider les enseignements dans Knowledge.

### Conclusion

SFIA Projects transforme chaque delivery en mécanisme d’apprentissage et de consolidation de la plateforme.

## Recommandations globales d’architecture

- Maintenir une séparation stricte entre Core, Runtime, Knowledge et Laboratory.
- Ne jamais modifier le Core sans analyse d’impact.
- Faire de Projects le canal principal de validation.
- Faire de Knowledge la mémoire exploitable.
- Faire de Laboratory le sas d’innovation.

## Plan d’action global

1. Créer les bases structurantes de chaque module.
2. Définir les relations entre objets SFIA.
3. Formaliser les règles de passage entre modules.
4. Mettre en place les vues de gouvernance.
5. Lancer un premier cycle complet sur Projet 2 — Interv360.

## Conclusion

L’architecture globale SFIA combine stabilité, modularité et apprentissage. Elle permet de faire évoluer la plateforme sans remise en cause de son architecture fondamentale.

# Pipeline global de fonctionnement

## Objectif

Décrire le cycle complet permettant de transformer un besoin en projet livré, capitalisé et intégré dans l’évolution de la plateforme.

## Contexte

Le pipeline SFIA doit assurer la continuité entre qualification, décision, génération, delivery, tests, production, capitalisation et évolution.

## Constats

- Les ruptures entre cadrage, architecture, développement et capitalisation créent de la perte de valeur.
- Les décisions initiales ne sont pas toujours reliées aux livrables produits.
- La clôture projet ne nourrit pas systématiquement l’amélioration des standards.
- Les tests et la recette sont souvent insuffisamment connectés au référentiel.

## Analyse

Le pipeline SFIA doit fonctionner comme une chaîne intégrée. Chaque étape produit des données exploitables par l’étape suivante et capitalisables en fin de cycle.

<aside>
🔁

**Cycle cible** — Besoin → Qualification → Décision → Génération → Développement → Tests → Production → Capitalisation → Évolution.

</aside>

## Étape 1 — Besoin

### Objectif

Capturer l’expression initiale du besoin.

### Entrées

- Demande métier.
- Opportunité.
- Irritant.
- Initiative technique.
- Hypothèse d’expérimentation.

### Sorties

- Fiche de besoin.
- Contexte.
- Contraintes.
- Objectifs initiaux.

## Étape 2 — Qualification

### Objectif

Transformer le besoin brut en description exploitable.

### Activités

- Analyse du contexte.
- Identification de la typologie projet.
- Qualification des contraintes.
- Détection des risques.
- Identification des dépendances.
- Préparation du cadrage initial.

### Module principal

SFIA Studio.

## Étape 3 — Décision

### Objectif

Déterminer les composants, standards, templates et prompts à activer.

### Activités

- Application des règles Core.
- Analyse de complexité.
- Sélection des blueprints.
- Identification des standards applicables.
- Validation des hypothèses.
- Arbitrage d’architecture.

### Modules principaux

- SFIA Core.
- Futur Decision Engine.

## Étape 4 — Génération

### Objectif

Créer l’environnement projet et les premiers livrables.

### Activités

- Génération de l’arborescence.
- Création du cadrage.
- Génération des templates.
- Préparation des prompts.
- Création du backlog initial.
- Création des dossiers de tests.

### Module principal

SFIA Runtime.

## Étape 5 — Développement

### Objectif

Produire la solution selon les standards SFIA.

### Activités

- Développement assisté par IA.
- Application des conventions.
- Production des livrables d’architecture.
- Suivi des tâches.
- Documentation native Notion.
- Collecte des preuves.

### Modules principaux

- SFIA Projects.
- SFIA Runtime.
- SFIA Knowledge.

## Étape 6 — Tests

### Objectif

Vérifier la conformité fonctionnelle, technique et méthodologique.

### Activités

- Génération des scénarios de test.
- Exécution des tests.
- Recette.
- Revue qualité.
- Analyse des écarts.
- Collecte des evidences.

### Modules principaux

- SFIA Runtime.
- SFIA Projects.
- SFIA Knowledge.

## Étape 7 — Production

### Objectif

Préparer et sécuriser le passage en production.

### Activités

- Validation des critères de mise en production.
- Vérification des livrables.
- Consolidation des preuves.
- Documentation du passage.
- Préparation de la clôture projet.

### Module principal

SFIA Projects.

## Étape 8 — Capitalisation

### Objectif

Transformer l’expérience projet en connaissance réutilisable.

### Activités

- REX projet.
- Audit SFIA projet.
- Classification des livrables.
- Promotion des prompts.
- Proposition de standards.
- Création ou évolution de composants.
- Production de l’Architecture Impact Report.

### Modules principaux

- SFIA Knowledge.
- SFIA Projects.

## Étape 9 — Évolution

### Objectif

Faire évoluer la plateforme de manière gouvernée.

### Activités

- Analyse d’impact.
- Proposition d’évolution.
- ADR.
- Mise à jour du composant concerné.
- Mise à jour du Core.
- Versioning SFIA.
- Communication de version.

### Modules principaux

- SFIA Core.
- SFIA Knowledge.
- SFIA Laboratory.

## Vue synthétique du pipeline

| Étape | Module pilote | Sortie principale |
| --- | --- | --- |
| Besoin | Studio | Fiche de besoin |
| Qualification | Studio | Besoin qualifié |
| Décision | Core | Composants activés |
| Génération | Runtime | Environnement projet |
| Développement | Projects | Livrables et solution |
| Tests | Runtime / Projects | Evidences de validation |
| Production | Projects | Passage validé |
| Capitalisation | Knowledge | REX, audit, impact report |
| Évolution | Core | Nouvelle version SFIA |

## Recommandations

- Tracer les entrées et sorties de chaque étape.
- Rendre obligatoire la production d’evidences.
- Automatiser progressivement la génération.
- Relier chaque livrable à une étape du pipeline.
- Intégrer la capitalisation dans la définition de terminé.

## Plan d’action

1. Formaliser le pipeline dans Notion.
2. Créer les templates par étape.
3. Définir les critères de passage.
4. Installer les contrôles qualité.
5. Tester le pipeline sur un projet pilote.

## Conclusion

Le pipeline SFIA assure la continuité entre besoin, delivery et amélioration. Il transforme chaque cycle projet en moteur d’apprentissage plateforme.

# Gouvernance

## Objectif

Définir les mécanismes de gouvernance permettant de piloter, contrôler et faire évoluer la plateforme SFIA.

## Contexte

Une plateforme de delivery pilotée par IA doit être gouvernée avec un niveau d’exigence comparable à une architecture d’entreprise. La gouvernance doit couvrir les décisions, versions, composants, standards, règles d’évolution et mécanismes de contrôle.

## Constats

- L’absence de gouvernance crée des divergences de pratiques.
- Les standards non versionnés perdent leur valeur.
- Les composants non maintenus deviennent sources de dette.
- Les décisions non documentées fragilisent la continuité.
- L’IA générative impose un besoin renforcé de traçabilité.

## Analyse

La gouvernance SFIA doit être légère dans son usage, mais stricte dans ses règles. Elle doit éviter la bureaucratie tout en garantissant la cohérence, la traçabilité et la qualité.

## Gouvernance par ADR

### Objectif

Documenter toute décision structurante.

### Déclencheurs

- Création d’un nouveau module.
- Modification du Core.
- Ajout d’un standard.
- Promotion d’un composant.
- Changement de modèle documentaire.
- Évolution du pipeline.
- Introduction d’un nouvel outil.
- Modification d’un principe fondateur.

### Structure minimale d’un ADR

- Identifiant.
- Titre.
- Statut.
- Date.
- Contexte.
- Problème.
- Options étudiées.
- Décision.
- Conséquences.
- Impacts.
- Références.
- Propriétaire.

### Statuts ADR

- Proposé.
- Accepté.
- Rejeté.
- Remplacé.
- Obsolète.

<aside>
🧭

**Règle de gouvernance** — Toute évolution structurante doit être justifiée par un ADR avant intégration au Core.

</aside>

## Versioning

### Objectif

Contrôler l’évolution de la plateforme.

### Règles

- Chaque version SFIA doit avoir un périmètre clair.
- Chaque changement doit être rattaché à une source.
- Chaque mise à jour du Core doit être versionnée.
- Chaque standard doit disposer d’un statut et d’une version.
- Chaque composant doit être traçable depuis sa création jusqu’à son retrait.

### Typologie de versions

- **Version majeure** — changement significatif du modèle ou du pipeline.
- **Version mineure** — ajout de composants, standards ou templates.
- **Patch** — correction, clarification, amélioration locale.

### Exemple

- SFIA v1.0 — Architecture initiale.
- SFIA v1.1 — Ajout du Meta Model.
- SFIA v1.2 — Ajout du Decision Engine.
- SFIA v2.0 — Changement majeur du pipeline ou du modèle d’orchestration.

## Règles d’évolution

### Objectif

Éviter les modifications opportunistes et préserver la stabilité globale.

### Règles obligatoires

- Pas d’évolution directe du Core sans analyse d’impact.
- Pas de promotion d’un composant sans preuve.
- Pas de standard sans propriétaire.
- Pas de template sans usage cible.
- Pas de Gold Prompt sans validation.
- Pas de modification majeure sans ADR.
- Pas de nouvelle version sans release note.

## Gestion des composants

### Objectif

Maintenir un registre cohérent des composants SFIA.

### Types de composants

- Template.
- Prompt.
- Standard.
- Blueprint.
- Processus.
- Questionnaire.
- Pipeline.
- Règle de décision.
- Automatisation.
- Guide.
- Checklist.
- Evidence pattern.

### Cycle de vie composant

1. Candidat.
2. Expérimenté.
3. Validé.
4. Standardisé.
5. Actif.
6. Déprécié.
7. Retiré.

### Métadonnées minimales

- Nom.
- Type.
- Description.
- Module propriétaire.
- Version.
- Statut.
- Origine.
- Usages.
- Dépendances.
- Dernière revue.
- Propriétaire.
- Liens vers preuves.
- ADR associé.

## Gestion des standards

### Objectif

Garantir que les standards restent applicables, maintenus et alignés avec l’architecture globale.

### Règles

- Un standard doit avoir un propriétaire.
- Un standard doit être versionné.
- Un standard doit être relié à des preuves d’usage.
- Un standard doit préciser son périmètre d’application.
- Un standard doit indiquer ses exceptions.
- Un standard doit être revu périodiquement.

### Statuts

- Draft.
- En revue.
- Validé.
- Actif.
- Remplacé.
- Obsolète.

## Modèle de gouvernance opérationnelle

### Instances recommandées

- Revue d’architecture SFIA.
- Revue des composants.
- Revue des standards.
- Revue des expérimentations.
- Revue de capitalisation projet.
- Revue de version.

### Rituels recommandés

- Revue mensuelle des évolutions.
- Revue post-projet.
- Revue de maturité trimestrielle.
- Revue de version à chaque release SFIA.

## Recommandations

- Créer une base ADR dédiée.
- Créer un registre des composants.
- Créer un registre des standards.
- Relier ADR, composants, standards, projets et evidences.
- Automatiser les vues de pilotage.

## Plan d’action

1. Définir le modèle ADR.
2. Créer le registre des composants.
3. Créer le registre des standards.
4. Définir les statuts et workflows.
5. Mettre en place la revue de gouvernance.
6. Lancer la première release SFIA v1.0.

## Conclusion

La gouvernance SFIA garantit que la plateforme reste cohérente, traçable et évolutive. Elle permet d’innover sans fragiliser l’architecture globale.

# Architecture Evolution Framework

## Objectif

Décrire le mécanisme d’évolution de la plateforme SFIA à travers les projets, REX, audits, expérimentations et Architecture Impact Reports.

## Contexte

La plateforme SFIA est conçue pour évoluer sans remise en cause de son architecture globale. Les modules structurants restent stables ; les composants, standards, prompts, templates, règles et automatisations évoluent de manière contrôlée.

## Constats

- Les projets produisent des apprentissages précieux mais souvent dispersés.
- Les audits identifient des écarts mais ne déclenchent pas toujours d’évolution.
- Les expérimentations restent parfois isolées.
- Les décisions d’architecture ne sont pas systématiquement reliées aux impacts terrain.

## Analyse

L’Architecture Evolution Framework doit créer une boucle d’amélioration continue. Cette boucle transforme les signaux terrain en évolutions gouvernées.

<aside>
🧬

**Principe d’évolution** — La SFIA évolue par adaptation de ses composants, standards et règles, sans remise en cause de son architecture modulaire globale.

</aside>

## Sources d’évolution

### Projets

Les projets fournissent :

- des cas d’usage réels ;
- des livrables ;
- des preuves ;
- des écarts ;
- des limites ;
- des besoins de nouveaux composants.

### REX

Les REX identifient :

- ce qui a fonctionné ;
- ce qui doit être amélioré ;
- ce qui peut être réutilisé ;
- ce qui doit être standardisé ;
- ce qui doit être abandonné.

### Audits

Les audits mesurent :

- la conformité aux standards ;
- la qualité des livrables ;
- la maturité d’utilisation de la SFIA ;
- les écarts entre modèle cible et réalité ;
- les risques méthodologiques.

### Expérimentations

Les expérimentations testent :

- nouveaux rôles IA ;
- nouveaux prompts ;
- nouvelles automatisations ;
- nouveaux blueprints ;
- nouveaux standards ;
- nouveaux processus.

### Architecture Impact Reports

Les rapports d’impact identifient les conséquences d’un projet ou d’une expérimentation sur la plateforme.

## Architecture Impact Report

### Objectif

Identifier les impacts du projet sur la plateforme SFIA.

### Questions obligatoires

- Un nouveau composant SFIA doit-il être créé ?
- Un composant existant doit-il évoluer ?
- Un standard doit-il être modifié ?
- Un template doit-il être amélioré ?
- Un prompt doit-il être promu en Gold ?
- Une règle de décision doit-elle être ajoutée ?
- Une décision structurante doit-elle être documentée ?
- Une limite de la plateforme a-t-elle été observée ?
- Une dette méthodologique a-t-elle été créée ?
- Une nouvelle automatisation doit-elle être étudiée ?

### Sorties attendues

- Liste des impacts.
- Proposition d’évolution.
- Composants concernés.
- Standards concernés.
- Niveau de criticité.
- Recommandation.
- ADR à créer si nécessaire.
- Décision de gouvernance.

## Cycle d’évolution SFIA

### Étapes

1. Observation projet.
2. REX.
3. Audit SFIA projet.
4. Architecture Impact Report.
5. Proposition d’évolution.
6. Expérimentation si nécessaire.
7. ADR.
8. Mise à jour du composant concerné.
9. Mise à jour du référentiel.
10. Versioning SFIA.
11. Publication de la release note.

## Typologie des évolutions

### Évolution locale

Modification limitée à un template, prompt ou guide.

### Évolution de composant

Modification d’un composant réutilisable.

### Évolution de standard

Modification d’une règle applicable à plusieurs projets.

### Évolution de pipeline

Modification d’une étape, d’une entrée ou d’une sortie du pipeline.

### Évolution d’architecture

Modification structurante nécessitant ADR, analyse d’impact et version majeure ou mineure.

## Mécanisme de stabilité

### Principe

La plateforme évolue sans remise en cause de son architecture globale grâce à trois mécanismes :

1. **Modularité** — les changements sont localisés.
2. **Versioning** — les changements sont maîtrisés.
3. **ADR** — les changements sont justifiés et tracés.

### Garde-fous

- Aucun changement direct non documenté.
- Aucune promotion sans preuve.
- Aucune expérimentation directement intégrée au Core.
- Aucune modification d’architecture sans décision.
- Aucune release sans synthèse d’impact.

## Recommandations

- Créer un modèle standard d’Architecture Impact Report.
- Relier chaque rapport à un projet, un REX et un audit.
- Définir un score d’impact.
- Prioriser les évolutions par valeur, risque et effort.
- Créer une vue “Évolutions candidates”.

## Plan d’action

1. Formaliser le template d’Architecture Impact Report.
2. Définir les critères d’impact.
3. Créer le workflow d’évolution.
4. Relier les rapports à la gouvernance.
5. Tester le framework avec Projet 2 — Interv360.

## Conclusion

L’Architecture Evolution Framework permet à la SFIA d’apprendre de chaque projet tout en préservant sa stabilité. Il transforme l’expérience terrain en évolution gouvernée.

# Décisions structurantes

## Objectif

Initialiser les premières Architecture Decision Records de la plateforme SFIA.

## Contexte

Les ADR constituent la mémoire décisionnelle de l’architecture. Ils documentent les arbitrages structurants et leurs conséquences.

## Constats

- La plateforme nécessite des décisions fondatrices.
- Ces décisions doivent être explicites, stables et traçables.
- Elles serviront de référence aux futures évolutions.

## Analyse

Les ADR initiaux fixent les règles du jeu : modularité, source de vérité, capitalisation projet, analyse d’impact, composants et rôle des projets.

<aside>
📘

**ADR initiaux** — Les décisions ci-dessous constituent le socle de gouvernance de SFIA Platform Architecture v1.0.

</aside>

## ADR-001 — Architecture modulaire

### Statut

Acceptée.

### Contexte

La SFIA doit couvrir plusieurs responsabilités : référentiel, qualification, exécution, connaissance, expérimentation et projets.

### Décision

La plateforme SFIA est organisée en modules :

- SFIA Core.
- SFIA Studio.
- SFIA Runtime.
- SFIA Knowledge.
- SFIA Laboratory.
- SFIA Projects.

### Conséquences

- Chaque module possède une mission claire.
- Les interactions doivent être documentées.
- Les évolutions doivent rester localisées.
- La cohérence globale est portée par le Core.

### Recommandations

- Définir un propriétaire par module.
- Maintenir une cartographie des interactions.
- Éviter les responsabilités redondantes.

## ADR-002 — Notion comme source de vérité

### Statut

Acceptée.

### Contexte

Les livrables SFIA doivent être produits, maintenus et gouvernés de manière centralisée.

### Décision

Notion devient la source de vérité documentaire et opérationnelle de la SFIA.  

Word, PDF et PowerPoint sont uniquement des formats d’export et de diffusion.

### Conséquences

- Les livrables officiels sont créés dans Notion.
- Les bases Notion portent les métadonnées de gouvernance.
- Les exports ne doivent pas devenir des référentiels parallèles.
- Les liens entre objets SFIA doivent être maintenus dans Notion.

### Recommandations

- Créer une convention de nommage.
- Versionner les pages structurantes.
- Relier les livrables aux bases de gouvernance.

## ADR-003 — Chaque projet enrichit la SFIA

### Statut

Acceptée.

### Contexte

Les projets produisent des enseignements, livrables, preuves et composants potentiellement réutilisables.

### Décision

Chaque projet doit contribuer à l’enrichissement de la plateforme SFIA.

### Conséquences

- Le REX devient obligatoire.
- L’audit SFIA projet devient obligatoire.
- Les livrables doivent être classés.
- Les composants candidats doivent être identifiés.
- Les prompts efficaces peuvent être promus.

### Recommandations

- Intégrer la capitalisation dans la clôture projet.
- Créer une checklist de capitalisation.
- Mesurer la contribution de chaque projet à la maturité SFIA.

## ADR-004 — Évolution par analyse d’impact

### Statut

Acceptée.

### Contexte

Le Core doit rester stable. Les évolutions doivent être justifiées, évaluées et tracées.

### Décision

Toute évolution structurante de la plateforme doit passer par une analyse d’impact.

### Conséquences

- Aucun changement direct du Core sans impact report.
- Les évolutions sont priorisées.
- Les impacts sur composants, standards, prompts, templates et pipeline sont analysés.
- Les ADR sont déclenchés lorsque nécessaire.

### Recommandations

- Créer le template d’Architecture Impact Report.
- Définir un score d’impact.
- Relier chaque évolution à sa source.

## ADR-005 — Composants avant documents

### Statut

Acceptée.

### Contexte

Une logique documentaire classique produit des livrables difficiles à réutiliser et à maintenir.

### Décision

La SFIA privilégie la création et la gestion de composants réutilisables plutôt que de documents isolés.

### Conséquences

- Les templates, prompts, standards, blueprints et processus sont gérés comme des composants.
- Chaque composant doit avoir un statut, une version et un propriétaire.
- Les documents deviennent des assemblages de composants.
- La réutilisation devient mesurable.

### Recommandations

- Créer le Component Registry.
- Définir le cycle de vie composant.
- Relier les documents aux composants utilisés.

## ADR-006 — Projet = validation de la plateforme

### Statut

Acceptée.

### Contexte

Les projets sont les lieux où la plateforme est réellement testée.

### Décision

Chaque projet SFIA est considéré comme une validation opérationnelle de la plateforme.

### Conséquences

- Le projet mesure la pertinence des composants activés.
- Le projet produit des preuves.
- Le projet identifie les limites.
- Le projet alimente les évolutions.
- Le projet contribue à la maturité globale.

### Recommandations

- Associer chaque projet aux composants utilisés.
- Produire un audit SFIA projet.
- Utiliser les projets pilotes pour valider les nouvelles briques.

## Plan d’action

1. Créer une base ADR SFIA.
2. Enregistrer les six ADR initiaux.
3. Relier chaque ADR aux modules concernés.
4. Définir le workflow de création ADR.
5. Mettre à jour les ADR à chaque version majeure.

## Conclusion

Les décisions structurantes établissent les fondations de la plateforme. Elles garantissent une architecture explicite, gouvernée et durable.

# Roadmap d’évolution

## Objectif

Décrire les prochaines briques nécessaires pour faire évoluer la plateforme SFIA vers un système complet de production logicielle pilotée par IA.

## Contexte

La version 1.0 formalise l’architecture de référence. Les prochaines versions devront transformer ce cadre en plateforme opérationnelle, automatisable et mesurable.

## Constats

- L’architecture cible est définie, mais certains mécanismes doivent être détaillés.
- Le modèle d’objets SFIA doit être stabilisé.
- Le moteur de décision doit être formalisé.
- Le pipeline doit être opérationnalisé.
- Les composants doivent être enregistrés, versionnés et suivis.
- L’entrée projet doit devenir intelligente et standardisée.

## Analyse

La roadmap doit prioriser les briques qui transforment l’architecture de référence en système activable.

<aside>
🚀

**Orientation roadmap** — Les prochaines briques doivent rendre la SFIA plus structurée, plus automatisable et plus apprenante.

</aside>

## Brique 1 — Meta Model

### Objectif

Définir les objets manipulés par la plateforme.

### Objets cibles

- Projet.
- Composant.
- Template.
- Prompt.
- Standard.
- ADR.
- REX.
- KPI.
- Expérimentation.
- Pipeline.
- Action.
- Evidence.
- Architecture Impact Report.

### Valeur attendue

- Clarification du modèle de données.
- Meilleure structuration Notion.
- Relations explicites entre objets.
- Base solide pour l’automatisation.

## Brique 2 — Decision Engine

### Objectif

Formaliser le mécanisme permettant de décider quels composants, standards, prompts et templates activer selon le contexte projet.

### Fonctions cibles

- Analyse de typologie projet.
- Détection de complexité.
- Sélection de composants.
- Application de règles.
- Proposition d’architecture.
- Justification des décisions.

### Valeur attendue

- Décisions plus cohérentes.
- Réduction de l’arbitraire.
- Traçabilité des choix.
- Accélération du cadrage.

## Brique 3 — Delivery Pipeline

### Objectif

Définir le pipeline opérationnel complet du delivery SFIA.

### Fonctions cibles

- Étapes standardisées.
- Entrées et sorties par étape.
- Templates associés.
- Contrôles qualité.
- Evidences attendues.
- Points de décision.

### Valeur attendue

- Exécution homogène.
- Qualité renforcée.
- Meilleure automatisation.
- Alignement entre architecture et delivery.

## Brique 4 — Repository Blueprint

### Objectif

Définir la structure type des espaces projet et référentiels.

### Fonctions cibles

- Arborescence Notion.
- Dossiers projet.
- Bases liées.
- Nommage.
- Vues de pilotage.
- Modèles de pages.
- Relations entre objets.

### Valeur attendue

- Lancement projet accéléré.
- Cohérence documentaire.
- Réutilisation facilitée.
- Maintenance simplifiée.

## Brique 5 — Project Intake Engine

### Objectif

Créer le point d’entrée intelligent des projets SFIA.

### Fonctions cibles

- Formulaire structuré.
- Questions dynamiques.
- Qualification automatique.
- Détection de typologie.
- Pré-cadrage.
- Transmission au Decision Engine.

### Valeur attendue

- Meilleure qualité d’entrée.
- Moins d’ambiguïté.
- Décisions plus fiables.
- Gain de temps en cadrage.

## Brique 6 — Component Registry

### Objectif

Créer le registre officiel des composants SFIA.

### Fonctions cibles

- Référencement des composants.
- Statuts.
- Versions.
- Propriétaires.
- Dépendances.
- Usages.
- Evidences.
- ADR associés.
- Historique.

### Valeur attendue

- Réutilisation contrôlée.
- Gouvernance des actifs.
- Réduction de la duplication.
- Mesure de maturité.

## Séquencement recommandé

### Phase 1 — Structuration

- Meta Model.
- Component Registry.
- ADR Registry.

### Phase 2 — Opérationnalisation

- Project Intake Engine.
- Decision Engine.
- Delivery Pipeline.

### Phase 3 — Industrialisation

- Repository Blueprint.
- Automatisations Runtime.
- Tableaux de bord KPI.
- Capitalisation assistée.

### Phase 4 — Optimisation

- Scoring de maturité.
- Recommandations automatiques.
- Détection d’écarts.
- Optimisation continue par REX.

## Recommandations

- Prioriser le Meta Model avant les automatisations.
- Construire le Component Registry rapidement.
- Tester le Project Intake sur un projet réel.
- Définir les règles du Decision Engine de manière progressive.
- Ne pas automatiser un processus non stabilisé.

## Plan d’action

1. Produire le document fondateur n°2 : **SFIA Meta Model v1.0**.
2. Créer le Component Registry.
3. Formaliser le Project Intake Engine.
4. Décrire le Decision Engine.
5. Définir le Delivery Pipeline.
6. Tester l’ensemble sur Projet 2 — Interv360.

## Conclusion

La roadmap transforme l’architecture de référence en plateforme opérationnelle. Elle permet de passer d’un cadre conceptuel à un système de delivery industrialisé et piloté par IA.

# Fonctionnement global cible

## Objectif

Synthétiser le fonctionnement de bout en bout de la plateforme.

## Contexte

La SFIA doit être comprise à la fois par des décideurs, architectes, responsables delivery et contributeurs opérationnels.

## Constats

- Une architecture de plateforme doit être lisible en vision exécutive.
- Les équipes opérationnelles doivent comprendre les étapes concrètes.
- Les interactions entre modules doivent être explicites.

## Analyse

La plateforme fonctionne comme une boucle intégrée :

1. **Studio** capture et qualifie le besoin.
2. **Core** fournit les règles, standards et composants.
3. **Runtime** génère et orchestre l’environnement.
4. **Projects** exécute le delivery et produit des preuves.
5. **Knowledge** capitalise les apprentissages.
6. **Laboratory** expérimente les évolutions candidates.
7. **Core** intègre les évolutions validées.

## Recommandations

- Présenter cette boucle dans les pages de pilotage.
- Relier chaque module à ses bases Notion.
- Définir des indicateurs par module.
- Créer une vue “cycle SFIA complet”.

## Plan d’action

1. Cartographier les flux entre modules.
2. Créer les vues de pilotage.
3. Mettre en place les indicateurs.
4. Tester la boucle complète.
5. Ajuster les règles de gouvernance.

## Conclusion

Le fonctionnement global de la SFIA repose sur une boucle fermée : produire, tester, capitaliser, décider et faire évoluer.

# Métadonnées

| Champ | Valeur |
| --- | --- |
| Version | 1.0 |
| Date | Juin 2026 |
| Auteur | Morris Cleland / SFIA |
| Statut | Architecture de référence initiale |
| Source de vérité | Notion |
| Périmètre | Plateforme SFIA |
| Nature du document | Document fondateur |
| Documents liés | SFIA Meta Model, SFIA Decision Engine, SFIA Delivery Pipeline, SFIA Repository Blueprint |
| Prochaine révision | Après Projet 2 — Interv360 |

# Conclusion générale

## Objectif

Clore le document en rappelant la portée structurante de SFIA Platform Architecture v1.0.

## Contexte

La SFIA ambitionne de devenir la plateforme de référence pour produire les futurs projets logiciels avec un haut niveau de gouvernance, d’industrialisation et d’intégration de l’IA générative.

## Constats

- La source de vérité est désormais Notion.
- Les projets doivent devenir des mécanismes d’apprentissage.
- L’architecture doit rester modulaire.
- Les évolutions doivent être gouvernées.
- Les composants doivent primer sur les documents isolés.

## Analyse

SFIA Platform Architecture v1.0 définit une plateforme capable de concilier stabilité et évolution. Elle fournit un cadre pour produire les projets futurs tout en renforçant continuellement la capacité de delivery.

## Recommandations

- Valider cette architecture comme référence officielle.
- L’utiliser pour structurer les prochains documents fondateurs.
- Décliner rapidement le Meta Model et le Component Registry.
- Tester la plateforme sur Projet 2 — Interv360.
- Installer la gouvernance ADR dès la première version.

## Plan d’action

1. Publier ce document comme référence SFIA v1.0.
2. Créer les registres associés.
3. Produire SFIA Meta Model v1.0.
4. Formaliser le Decision Engine.
5. Déployer le pipeline sur un projet pilote.
6. Consolider les enseignements dans Knowledge.

# v1.1 Update — Operational Architecture

SFIA v1.1 distinguishes between:

| Layer | Role |
|-------|------|
| Foundation architecture | Conceptual architecture documents in `docs/architecture/` |
| Active method | SFIA Fast Track in `method/sfia-fast-track/` |
| Practices | Platform practices in `docs/practices/` |
| Prompt assets | Prompt families in `prompts/` |
| Reference projects | Interv360 in `projects/interv360/` |
| Knowledge layer | Notion as a curated business knowledge layer |

SFIA v1.1 is not yet the fully automated target.

SFIA v2.0 is reserved for active engines and operational Notion integration.

## v1.1 Source of Truth Clarification

The original v1.0 architecture positioned Notion as the primary structured repository for SFIA documentation.

After the workspace cleanup and Interv360 capitalization, the v1.1 operating model clarifies the split:

| Layer | Role |
|-------|------|
| Git repository | Operational source of truth for versioned SFIA documents, architecture, prompts, templates and project capitalisation |
| Notion | Curated knowledge layer for navigation, reading, synthesis and business usage |
| Exports | Prepared publication material, not authoritative sources |
| Archives | Historical traceability, not active reference |

This clarification does not invalidate the v1.0 vision.

It updates the operating rule for v1.1:

> SFIA is governed from the repository and published to Notion only through curated, validated and human-approved flows.

Notion must not be synchronized as a raw mirror of the repository.

## v1.1 Foundation — ChatGPT ↔ Cursor Operating Model

SFIA v1.1 formalizes the ChatGPT ↔ Cursor workflow in:

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`

This document defines the current level-0 operating model and acts as the bridge toward future automation engine specifications.

The workflow is at **automation level 0** (manual assisted execution).

This document is required before moving to automation engine specifications.

## Conclusion

**SFIA Platform Architecture v1.1** constitue le socle d’une Software Factory IA modulaire, gouvernée, capitalisable et évolutive.  

Elle ne décrit pas un projet métier ; elle définit la plateforme qui permettra de produire tous les projets futurs.