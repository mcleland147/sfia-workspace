---
source: Notion / SFIA Architecture
status: reference
sync: manual-export
version: v1.1
previous: v1.0
updated_after: Interv360 capitalization, SFIA Fast Track
---

# SFIA Meta Model v1.1

**Version:** v1.1  
**Status:** Foundation document  
**Updated after:** Interv360 capitalization, SFIA Fast Track

<callout icon="🏛️">**Statut** : Référentiel fondateur — v1.1 (contenu v1.0 conservé, enrichi post-Fast Track)  

**Périmètre** : SFIA Core, Studio, Runtime, Knowledge, Laboratory, Projects  

**Nature** : Meta Model conceptuel — objets, responsabilités, relations, cycles de vie  

**Principe** : ce document ne décrit pas les processus ; il définit le langage commun des objets manipulés par la SFIA.</callout>

## v1.1 Consistency Rule

The v1.0 content is preserved for intellectual traceability.

When a tension exists between the v1.0 content and the v1.1 update, the v1.1 update prevails.

In SFIA v1.1:

- the Git repository is the operational source of truth;
- Notion is a curated knowledge layer, not a raw mirror of the repository;
- archived material is preserved for traceability but is not an active source;
- human validation remains mandatory before publishing, synchronizing or promoting content.

## Métadonnées

| Champ | Valeur |
| --- | --- |
| Nom | SFIA Meta Model |
| Version | v1.1 |
| Type | Référentiel d’architecture d’entreprise |
| Domaine | Software Factory IA |
| Niveau | Conceptuel / logique |
| Propriétaire cible | Gouvernance SFIA |
| Cycle de vie | Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived |
| Usage | Référence officielle pour modules, agents IA, scripts, templates, standards et bases Notion |

# Objectif

Définir le modèle conceptuel officiel de la plateforme SFIA.

Le Meta Model formalise les objets manipulés par la plateforme, leurs missions, responsabilités, entrées, sorties, relations, cycles de vie, niveaux de maturité et règles de gouvernance.

<aside>
🎯

Le Meta Model constitue le langage commun de la SFIA. Tous les futurs modules, agents IA, scripts, workflows, templates et référentiels doivent s’appuyer sur ce modèle.

</aside>

# Contexte

La SFIA vise à industrialiser une Software Factory augmentée par l’IA, produite nativement dans Notion.

Elle s’organise autour de six grands modules :

- **Core** : référentiels structurants, standards, règles, gouvernance.
- **Studio** : conception, prompts, templates, guides, composants.
- **Runtime** : exécution, workflows, pipelines, automatisations, agents IA.
- **Knowledge** : capitalisation, REX, evidence, décisions, documentation.
- **Laboratory** : expérimentations, validation, innovation, mesure.
- **Projects** : intake, delivery, releases, versions, recettes.

La multiplication des objets impose un modèle conceptuel stable pour réduire l’ambiguïté, fiabiliser les relations, faciliter l’automatisation et permettre une gouvernance par evidence.

# Vision

La SFIA repose sur une conviction d’architecture : **tout élément produit, utilisé, validé, automatisé ou réutilisé doit être représenté par un objet explicite, gouverné et traçable**.

La plateforme doit passer :

- d’une logique documentaire à un **référentiel vivant** ;
- d’une production artisanale à une production **standardisée et mesurable** ;
- d’une capitalisation implicite à une connaissance **structurée et exploitable par IA** ;
- d’une gouvernance réactive à une gouvernance **pilotée par preuves, KPI et décisions documentées**.

# Principes de modélisation

## 1. Mission unique

Chaque objet possède une mission claire et ne mélange pas plusieurs responsabilités conceptuelles.

## 2. Relations explicites

La valeur d’un objet provient de ses relations avec les autres objets : projet, standard, evidence, décision, release, agent IA, KPI.

## 3. Maturité gouvernée

Chaque objet est positionné dans un cycle de vie explicite : Draft, Candidate, Experimental, Validated, Gold, Deprecated, Archived.

## 4. Exploitabilité Notion et IA

Le modèle doit être actionnable dans Notion, par agents IA, scripts, automatisations, tableaux de bord et vues de pilotage.

## 5. Preuve avant validation

Aucun objet ne devient Validated ou Gold sans evidence : tests, recettes, audits, KPI, REX ou décision formalisée.

## 6. Séparation des natures d’objets

- Normatif : Standard, Rule, Guide, Template, Prompt.
- Factuel : Evidence, Audit, REX, KPI, Test, Recette.
- Décisionnel : ADR, Décision.
- Exécution : Workflow, Pipeline, Automation, Agent IA.
- Delivery : Project Intake, Projet, Epic, User Story, Release, Version.
- Innovation : Expérimentation.

# Catégories d'objets

## Gouvernance

### Objectif

Structurer les décisions, règles, responsabilités, standards et mécanismes d’arbitrage.

### Rôle dans la SFIA

La Gouvernance garantit que la plateforme évolue de manière contrôlée, traçable et alignée avec les objectifs d’architecture d’entreprise.

### Interactions

- Encadre Delivery par standards, décisions et règles.
- S’appuie sur Qualité via audits, KPI et evidence.
- Alimente Connaissance par ADR, guides et décisions.
- Oriente Plateforme par règles d’architecture.
- Statue sur Innovation par promotion, abandon ou itération.

## Delivery

### Objectif

Représenter les objets liés à la réalisation, au pilotage et à la livraison.

### Rôle dans la SFIA

Delivery transforme les besoins en livrables structurés, suivis, testés, versionnés et capitalisés.

### Interactions

- Consomme standards, templates, prompts et guides.
- Produit composants, releases, versions, recettes, evidence et REX.
- Utilise workflows, pipelines, agents IA et automatisations.
- Alimente les KPI et décisions de gouvernance.

## Connaissance

### Objectif

Capitaliser, structurer et rendre réutilisable le savoir SFIA.

### Rôle dans la SFIA

Connaissance transforme les productions, décisions, preuves et retours terrain en actifs réutilisables.

### Interactions

- Documente standards, guides, prompts, templates et REX.
- Alimente les agents IA.
- Conserve evidence et apprentissages.
- Sert de mémoire commune pour gouvernance, delivery, qualité et innovation.

## Plateforme

### Objectif

Décrire les objets techniques, fonctionnels et automatisables qui composent la SFIA.

### Rôle dans la SFIA

Plateforme porte les capacités d’exécution et d’industrialisation : modules, capabilities, workflows, pipelines, automatisations, agents IA.

### Interactions

- Applique les règles de gouvernance.
- Fournit les moyens d’exécution au delivery.
- Consomme les objets de connaissance.
- Produit logs, evidence et mesures qualité.
- Intègre les expérimentations validées.

## Qualité

### Objectif

Garantir que les objets SFIA sont vérifiés, mesurés, audités et conformes.

### Rôle dans la SFIA

Qualité fournit les mécanismes de confiance nécessaires à l’industrialisation.

### Interactions

- Valide les livrables Delivery.
- Produit tests, recettes, audits, KPI et evidence.
- Soutient les décisions de gouvernance.
- Mesure les expérimentations.
- Contrôle les agents IA, pipelines, automations et modules.

## Innovation

### Objectif

Explorer, expérimenter et qualifier les nouvelles pratiques, composants, prompts, agents et modèles d’usage.

### Rôle dans la SFIA

Innovation permet de tester avant de standardiser.

### Interactions

- Lance des expérimentations.
- Produit evidence, KPI et REX.
- Propose la promotion d’objets en Validated ou Gold.
- Alimente Studio, Runtime, Knowledge et Gouvernance.

# Référentiel des objets

## Projet

### Mission

Porter une initiative SFIA structurée, planifiée, pilotée et livrable.

### Description

Un Projet regroupe objectif, périmètre, parties prenantes, epics, user stories, composants, livrables, recettes et releases.

### Responsabilités

- Structurer un besoin en trajectoire de delivery.
- Porter les engagements de périmètre, délai, qualité et valeur.
- Relier livrables, standards, décisions et preuves.
- Générer REX et KPI.

### Entrées

Project Intake, besoin métier ou technique, standards, contraintes, capabilities, décisions de cadrage.

### Sorties

Epics, user stories, composants, releases, versions, recettes, evidence, REX, KPI.

### Relations

Initialisé par Project Intake ; contient Epic et User Story ; produit Composant, Release, Version ; utilise Template, Prompt, Standard, Guide ; validé par Test, Recette, Evidence.

### Cycle de vie

Draft → Candidate → Validated → Gold ou Archived.

### Niveau de maturité

Opérationnel à stratégique.

### Propriétaire

Project Owner SFIA ou responsable de domaine.

### Évolutions possibles

Transformation en programme, template projet, module réutilisable ou archivage.

## Project Intake

### Mission

Qualifier une demande avant engagement en projet.

### Description

Objet de cadrage initial évaluant pertinence, faisabilité, valeur, risques et prérequis.

### Responsabilités

- Capturer la demande.
- Qualifier besoin, sponsor, valeur et risques.
- Préparer une décision Go / No Go.
- Alimenter la priorisation.

### Entrées

Expression de besoin, opportunité, problème, hypothèse d’innovation, contrainte.

### Sorties

Projet candidat, décision de cadrage, risques, hypothèses, priorité, critères de succès.

### Relations

Crée Projet ; peut déclencher Expérimentation ou Décision ; référence Standards, Capabilities ou Modules.

### Cycle de vie

Draft → Candidate → Validated → Archived.

### Niveau de maturité

Pré-opérationnel.

### Propriétaire

Portfolio Owner, Product Owner ou Gouvernance SFIA.

### Évolutions possibles

Conversion en projet, fusion, rejet documenté ou mise en attente.

## Epic

### Mission

Regrouper un ensemble cohérent de fonctionnalités ou travaux livrables.

### Description

Bloc de valeur fonctionnelle, technique ou organisationnelle, découpable en User Stories.

### Responsabilités

Structurer la portée, regrouper les stories, porter un objectif de valeur, faciliter les releases.

### Entrées

Objectifs projet, Project Intake validé, capability cible, standard, besoin utilisateur.

### Sorties

User Stories, critères macro, dépendances, incréments de release.

### Relations

Appartient à Projet ; contient User Story ; peut implémenter Capability ; livré dans Release.

### Cycle de vie

Draft → Candidate → Validated → Archived.

### Niveau de maturité

Tactique.

### Propriétaire

Product Owner ou Delivery Lead.

### Évolutions possibles

Découpage, promotion en capability, archivage, transformation en template.

## User Story

### Mission

Décrire une unité de besoin livrable, testable et traçable.

### Description

Expression d’une attente utilisateur ou système avec critères d’acceptation.

### Responsabilités

Décrire le besoin exécutable, porter les critères d’acceptation, alimenter tests et recettes.

### Entrées

Epic, besoin utilisateur, standard, rule, guide, template.

### Sorties

Critères d’acceptation, tests, composants modifiés, evidence, éléments de release.

### Relations

Appartient à Epic ; produit ou modifie Composant ; validée par Test et Recette ; assistée par Prompt ou Agent IA.

### Cycle de vie

Draft → Candidate → Validated → Archived.

### Niveau de maturité

Opérationnel.

### Propriétaire

Product Owner, Business Analyst ou Delivery Team.

### Évolutions possibles

Découpage, conversion en tâche, capitalisation en template, archivage.

## Composant

### Mission

Représenter un élément réutilisable fonctionnel, technique, documentaire ou IA.

### Description

Unité réutilisable intégrable dans module, workflow, automation, projet ou livrable.

### Responsabilités

Encapsuler une capacité, porter un usage défini, être versionnable, testable et documenté.

### Entrées

Besoin projet, expérimentation, standard, template, guide, ADR.

### Sorties

Élément réutilisable, documentation, tests, evidence, version, release.

### Relations

Appartient à Module ; implémente Capability ; utilisé par Workflow, Pipeline, Automation ou Agent IA ; validé par Test.

### Cycle de vie

Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Candidat à industriel.

### Propriétaire

Component Owner ou Tech Lead SFIA.

### Évolutions possibles

Promotion en standard, intégration module, dépréciation, variante spécialisée.

## Template

### Mission

Standardiser la structure de production d’un livrable ou objet.

### Description

Modèle réutilisable pour homogénéiser pages, fiches, documents, prompts, projets, audits ou expérimentations.

### Responsabilités

Définir une structure cible, réduire la variabilité, accélérer la production, faciliter l’automatisation.

### Entrées

Standard, guide, REX, besoin récurrent, décision.

### Sorties

Modèle de page, structure, checklist, champs obligatoires, version.

### Relations

Dérivé de Standard ; documenté par Guide ; utilisé par Projet, Agent IA, Workflow ou Expérimentation.

### Cycle de vie

Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Réutilisable à industriel.

### Propriétaire

Knowledge Owner ou Standard Owner.

### Évolutions possibles

Spécialisation, automatisation, transformation en formulaire, dépréciation.

## Prompt

### Mission

Formaliser une instruction IA réutilisable, contrôlée et mesurable.

### Description

Actif de connaissance guidant un agent IA ou utilisateur vers un résultat attendu.

### Responsabilités

Définir intention, contexte, entrées, sorties, reproductibilité, évaluation et versioning.

### Entrées

Cas d’usage, template de prompt, standard, REX, evidence de performance.

### Sorties

Résultat généré, variante, score qualité, evidence, version Gold éventuelle.

### Relations

Utilisé par Agent IA ; supporte Workflow ; évalué dans Expérimentation ; peut produire Guide, Template, Test ou Evidence.

### Cycle de vie

Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Exploratoire à Gold Prompt.

### Propriétaire

Prompt Owner ou Knowledge Owner.

### Évolutions possibles

Bibliothèque Gold, paramétrage, intégration agent IA, dépréciation.

## Standard

### Mission

Définir une norme SFIA applicable et vérifiable.

### Description

Référence normative décrivant une manière attendue de concevoir, produire, documenter, tester ou gouverner.

### Responsabilités

Établir une référence, réduire les écarts, guider rules/templates/tests, soutenir l’auditabilité.

### Entrées

ADR, REX, audit, décision, evidence, contraintes.

### Sorties

Norme applicable, critères de conformité, rules, templates, guides.

### Relations

Justifié par ADR ; appliqué par Rule ; contrôlé par Test ou Audit ; suivi par KPI.

### Cycle de vie

Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Normatif.

### Propriétaire

Standard Owner ou Architecture Board SFIA.

### Évolutions possibles

Scission, automatisation via rules, promotion Gold, dépréciation.

## Guide

### Mission

Expliquer comment appliquer un standard, utiliser un objet ou réaliser une activité SFIA.

### Description

Support opérationnel facilitant l’adoption et la bonne application des objets.

### Responsabilités

Clarifier les pratiques, illustrer les usages, réduire les erreurs, accompagner utilisateurs et agents IA.

### Entrées

Standard, template, REX, questions utilisateurs, evidence d’usage.

### Sorties

Instructions, exemples, bonnes pratiques, FAQ, checklists.

### Relations

Explique Standard, Template, Prompt, Module ou Workflow ; enrichi par REX ; utilisé par Agent IA.

### Cycle de vie

Draft → Candidate → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Support opérationnel à référentiel officiel.

### Propriétaire

Knowledge Owner.

### Évolutions possibles

Formation, guides spécialisés, base Knowledge, dépréciation.

## ADR

### Mission

Documenter une décision d’architecture structurante et sa justification.

### Description

Architecture Decision Record formalisant contexte, options, décision et conséquences.

### Responsabilités

Tracer les choix, documenter alternatives, justifier standards, soutenir auditabilité.

### Entrées

Problème d’architecture, options, contraintes, evidence, REX, analyse d’impact.

### Sorties

Décision d’architecture, conséquences, standards/rules, actions, historique.

### Relations

Produit ou justifie Décision ; crée/modifie Standard ; impacte Module, Composant, Workflow ou Agent IA.

### Cycle de vie

Draft → Candidate → Validated → Deprecated → Archived.

### Niveau de maturité

Décisionnel structurant.

### Propriétaire

Enterprise Architect ou Architecture Board.

### Évolutions possibles

Remplacement, dépréciation, addendum, transformation en standard.

## Décision

### Mission

Formaliser un arbitrage gouverné ayant un impact SFIA.

### Description

Objet de gouvernance portant sur projet, standard, priorisation, expérimentation, release ou Meta Model.

### Responsabilités

Tracer arbitrage, décideur, justification, impacts et actions.

### Entrées

Analyse, KPI, audit, REX, evidence, ADR, recommandation.

### Sorties

Arbitrage, actions, changement de statut, validation ou rejet.

### Relations

Valide Projet, Standard, Prompt, Template, Composant ou Expérimentation ; s’appuie sur Evidence, Audit, KPI, REX.

### Cycle de vie

Draft → Candidate → Validated → Archived.

### Niveau de maturité

Gouvernance.

### Propriétaire

Gouvernance SFIA ou décideur désigné.

### Évolutions possibles

Annulation, révision, consolidation en ADR, transformation en rule ou standard.

## Module

### Mission

Regrouper capabilities, composants, workflows et règles autour d’un domaine SFIA.

### Description

Unité logique de plateforme : Core, Studio, Runtime, Knowledge, Laboratory, Projects ou sous-domaine.

### Responsabilités

Structurer la plateforme, exposer capabilities, regrouper composants, encadrer workflows.

### Entrées

Capability, standards, composants, workflows, agents IA, besoins projet.

### Sorties

Capacités de plateforme, workflows, automations, interfaces, releases module.

### Relations

Contient Capability ; utilise Composant ; expose Workflow ; servi par Agent IA ; versionné et livré par Release.

### Cycle de vie

Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Structurel à industriel.

### Propriétaire

Module Owner.

### Évolutions possibles

Sous-modules, fusion, externalisation, dépréciation.

## Capability

### Mission

Décrire une capacité stable que la SFIA doit fournir.

### Description

Ce que la plateforme doit être capable de faire indépendamment de l’implémentation.

### Responsabilités

Structurer la vision fonctionnelle, relier stratégie et exécution, guider modules et projets.

### Entrées

Vision SFIA, besoin métier, Project Intake, standard, REX, gap analysis.

### Sorties

Capacité cible, besoins modules, epics, KPI de couverture, roadmap.

### Relations

Réalisée par Module ; implémentée par Composant ; livrée par Projet ; mesurée par KPI.

### Cycle de vie

Draft → Candidate → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Architecture d’entreprise.

### Propriétaire

Enterprise Architect ou Capability Owner.

### Évolutions possibles

Sous-capabilities, affectation module, repriorisation, retrait.

## Workflow

### Mission

Décrire une orchestration logique d’activités ou d’objets.

### Description

Séquence structurée d’interactions entre objets, utilisateurs, agents IA, automatisations et règles.

### Responsabilités

Formaliser orchestration, entrées/sorties, dépendances, base d’automatisation.

### Entrées

Besoin, standard, template, agent IA, rule, données.

### Sorties

Résultat structuré, tâches, evidence, notification, pipeline ou automation candidate.

### Relations

Utilise Agent IA, Rule, Template, Prompt ; implémenté par Automation ; peut déclencher Pipeline.

### Cycle de vie

Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Opérationnel à industrialisé.

### Propriétaire

Workflow Owner ou Runtime Owner.

### Évolutions possibles

Automatisation, sous-workflows, transformation en pipeline, dépréciation.

## Pipeline

### Mission

Exécuter une chaîne d’étapes contrôlées, reproductibles et mesurables.

### Description

Implémentation opérationnelle d’un enchaînement d’activités produisant un résultat vérifiable.

### Responsabilités

Orchestrer, contrôler prérequis, produire logs/evidence, appliquer rules.

### Entrées

Workflow, composants, données, rules, paramètres, déclencheur.

### Sorties

Artefacts, evidence, tests, version, rapport d’exécution.

### Relations

Implémente Workflow ; utilise Composant ; déclenché par Automation ; implique Agent IA ; produit Evidence.

### Cycle de vie

Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Runtime industriel.

### Propriétaire

Runtime Owner ou Engineering Lead.

### Évolutions possibles

Optimisation, automatisation, observabilité, remplacement.

## Automation

### Mission

Exécuter automatiquement une action ou un enchaînement d’actions.

### Description

Mécanisme déclenché par événement, planning ou action utilisateur.

### Responsabilités

Déclencher actions standardisées, réduire erreurs, mettre à jour objets, appliquer rules, tracer.

### Entrées

Événement, rule, workflow, paramètres, données, permissions.

### Sorties

Mise à jour, notification, evidence, log, déclenchement pipeline.

### Relations

Implémente Workflow ; appelle Agent IA ; applique Rule ; produit Evidence ; alimente KPI.

### Cycle de vie

Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Automatisation contrôlée à industrielle.

### Propriétaire

Automation Owner ou Runtime Owner.

### Évolutions possibles

Extension, contrôles supplémentaires, remplacement par agent, dépréciation.

## Agent IA

### Mission

Assister, produire, contrôler ou orchestrer des actions SFIA.

### Description

Acteur logiciel opérant avec périmètre, permissions, prompts, règles et objectifs définis.

### Responsabilités

Exécuter tâches, produire livrables, appliquer prompts/templates, contrôler conformité, capitaliser.

### Entrées

Prompt, guide, template, rule, contexte projet, données Notion, objectif utilisateur.

### Sorties

Contenu, analyse, mise à jour d’objet, evidence, recommandation, rapport.

### Relations

Utilise Prompt, Template, Guide, Rule ; contribue à Workflow, Pipeline, Automation ; produit Evidence, REX ou décisions candidates.

### Cycle de vie

Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Assistant expérimental à agent industriel gouverné.

### Propriétaire

AI Agent Owner ou Runtime Owner.

### Évolutions possibles

Spécialisation, connexions, extension de permissions, dépréciation.

## Rule

### Mission

Exprimer une contrainte applicable, contrôlable et automatisable.

### Description

Règle opérationnelle dérivée d’un standard, d’une décision, d’une ADR ou d’un contrôle.

### Responsabilités

Traduire norme en contrainte vérifiable, alimenter tests/audits/automations, réduire interprétation.

### Entrées

Standard, ADR, décision, audit, risque, critère de conformité.

### Sorties

Condition vérifiable, test, contrôle, alerte, résultat de conformité.

### Relations

Dérive de Standard/ADR/Décision ; appliquée par Automation, Pipeline ou Agent IA ; vérifiée par Test ou Audit.

### Cycle de vie

Draft → Candidate → Experimental → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Norme opérationnalisée.

### Propriétaire

Rule Owner ou Standard Owner.

### Évolutions possibles

Contrôle automatisé, paramétrage, fusion, dépréciation.

## Test

### Mission

Vérifier qu’un objet satisfait un comportement ou critère attendu.

### Description

Mécanisme de vérification manuel ou automatisé appliqué à un objet SFIA.

### Responsabilités

Vérifier conformité, mesurer résultat, produire evidence, alimenter recette.

### Entrées

Critères d’acceptation, rule, standard, objet à tester, jeu de données.

### Sorties

Résultat, evidence, anomalie, KPI qualité, recommandation.

### Relations

Valide User Story, Composant, Prompt, Agent IA, Workflow ou Release ; dérive de Rule ; alimente Recette.

### Cycle de vie

Draft → Candidate → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Contrôle qualité.

### Propriétaire

QA Owner ou Test Owner.

### Évolutions possibles

Automatisation, intégration pipeline, extension couverture, dépréciation.

## Recette

### Mission

Valider qu’un livrable est acceptable au regard des attentes définies.

### Description

Dispositif de validation globale consolidant plusieurs tests et preuves.

### Responsabilités

Vérifier acceptabilité, consolider tests, formaliser réserves, autoriser ou bloquer release.

### Entrées

User Stories, tests, critères d’acceptation, evidence, release candidate, standard.

### Sorties

Résultat de recette, réserves, décision Go/No Go, evidence consolidée, actions correctives.

### Relations

Valide Release, Projet, Version ou Composant ; s’appuie sur Tests ; produit Evidence ; génère Décision.

### Cycle de vie

Draft → Candidate → Validated → Archived.

### Niveau de maturité

Validation opérationnelle.

### Propriétaire

Recette Owner, Product Owner ou QA Lead.

### Évolutions possibles

Template, automatisation partielle, extension conformité, archivage.

## Evidence

### Mission

Fournir une preuve vérifiable soutenant validation, décision, audit ou mesure.

### Description

Élément factuel démontrant qu’un objet a été testé, validé, utilisé, audité ou mesuré.

### Responsabilités

Prouver résultat, soutenir auditabilité, alimenter gouvernance, justifier maturité.

### Entrées

Test, recette, audit, pipeline, agent IA, observation, KPI.

### Sorties

Preuve, trace, capture, log, résultat, justification.

### Relations

Soutient Décision, ADR, Audit, KPI, Recette ou REX ; justifie Validated ou Gold.

### Cycle de vie

Draft → Candidate → Validated → Archived.

### Niveau de maturité

Factuel et probant.

### Propriétaire

Evidence Owner ou propriétaire de l’objet vérifié.

### Évolutions possibles

Consolidation, référence audit, archivage, obsolescence.

## REX

### Mission

Capitaliser les enseignements issus d’un projet, expérimentation, incident ou release.

### Description

Retour d’expérience formalisant réussites, échecs, causes, recommandations et impacts.

### Responsabilités

Capturer apprentissage, proposer améliorations, alimenter standards, guides, templates et prompts.

### Entrées

Projet, release, expérimentation, audit, KPI, evidence, feedback.

### Sorties

Enseignements, recommandations, actions, propositions de standards.

### Relations

Modifie Standard, Guide, Template, Prompt ou Workflow ; alimente Décision ; s’appuie sur Evidence et KPI.

### Cycle de vie

Draft → Candidate → Validated → Gold → Archived.

### Niveau de maturité

Capitalisation.

### Propriétaire

Knowledge Owner ou responsable initiative.

### Évolutions possibles

Guide, ADR, mise à jour standard, archivage.

## Audit

### Mission

Évaluer objectivement conformité, qualité ou maturité d’un périmètre.

### Description

Évaluation structurée d’un objet, projet, module, standard, agent IA ou processus.

### Responsabilités

Vérifier conformité, identifier écarts, produire recommandations, mesurer maturité.

### Entrées

Référentiel d’audit, standards, rules, evidence, KPI, objets audités.

### Sorties

Rapport, écarts, recommandations, actions, décisions, score.

### Relations

Contrôle Standards, Rules, Modules, Agents IA, Projets ou Composants ; produit KPI, Décisions, Actions.

### Cycle de vie

Draft → Candidate → Validated → Archived.

### Niveau de maturité

Contrôle gouverné.

### Propriétaire

Audit Owner, QA Lead ou Gouvernance SFIA.

### Évolutions possibles

Checklist, automatisation partielle, extension périmètre, archivage.

## KPI

### Mission

Mesurer performance, qualité, maturité, usage ou conformité.

### Description

Indicateur gouverné permettant de piloter décisions, priorités, validations et améliorations.

### Responsabilités

Mesurer, suivre tendances, déclencher alertes, alimenter décisions et audits.

### Entrées

Données projet, tests, recettes, audits, usage, evidence, logs.

### Sorties

Valeur, tendance, seuil, alerte, dashboard, recommandation.

### Relations

Mesure Projet, Module, Prompt, Agent IA, Standard, Test, Recette ou Expérimentation ; alimente Décision, Audit, REX.

### Cycle de vie

Draft → Candidate → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Pilotage.

### Propriétaire

KPI Owner ou Gouvernance SFIA.

### Évolutions possibles

Seuils, collecte automatisée, score consolidé, dépréciation.

## Release

### Mission

Regrouper un ensemble cohérent de livrables publiés ou mis à disposition.

### Description

Livraison contrôlée d’un ou plusieurs objets : module, composant, template, prompt, standard, agent IA ou projet.

### Responsabilités

Définir contenu livré, consolider versions, assurer traçabilité, porter notes de release.

### Entrées

Versions, user stories validées, tests, recette, décision Go, evidence.

### Sorties

Livraison, notes de release, version publiée, evidence, REX post-release.

### Relations

Contient Versions ; livre Composants, Modules, Prompts, Templates ou Agents IA ; validée par Tests et Recette.

### Cycle de vie

Draft → Candidate → Validated → Gold ou Archived.

### Niveau de maturité

Livraison maîtrisée.

### Propriétaire

Release Owner.

### Évolutions possibles

Patch, release majeure, rollback, archivage.

## Version

### Mission

Identifier un état précis et traçable d’un objet.

### Description

Matérialise l’évolution contrôlée d’un objet réutilisable, livrable ou gouverné.

### Responsabilités

Assurer historique, rollback, changelog, lien à release et auditabilité.

### Entrées

Objet source, changement, décision, tests, evidence, notes.

### Sorties

Version numérotée, changelog, statut, référence release, trace.

### Relations

Versionne Composant, Template, Prompt, Standard, Module, Agent IA, Workflow, Rule ou Guide ; incluse dans Release.

### Cycle de vie

Draft → Candidate → Validated → Gold → Deprecated → Archived.

### Niveau de maturité

Gestion de configuration.

### Propriétaire

Owner de l’objet versionné.

### Évolutions possibles

Version majeure, mineure, patch, dépréciation.

## Expérimentation

### Mission

Tester une hypothèse avant standardisation ou industrialisation.

### Description

Dispositif contrôlé d’évaluation d’une idée, composant, prompt, agent IA, automation, standard candidat ou pratique.

### Responsabilités

Formaliser hypothèse, protocole, KPI, résultats, evidence, REX et recommandation.

### Entrées

Hypothèse, protocole, KPI, composant/prompt candidat, besoin d’innovation, contraintes.

### Sorties

Résultats, evidence, REX, recommandation, décision candidate, objet promu ou abandonné.

### Relations

Porte sur Prompt, Composant, Agent IA, Automation, Workflow, Template ou Standard ; produit KPI, Evidence et REX ; génère Décision.

### Cycle de vie

Draft → Candidate → Experimental → Validated ou Archived.

### Niveau de maturité

Innovation contrôlée.

### Propriétaire

Laboratory Owner ou Experiment Owner.

### Évolutions possibles

Standardisation, industrialisation, abandon, relance modifiée.

# Relations entre les objets

## Interaction le long du cycle de vie projet

1. **Qualification**
    - Le besoin est capturé dans un Project Intake.
    - Le Project Intake peut générer Projet, Expérimentation ou Décision.
    - Les Capabilities et Standards existants servent de référence.
2. **Structuration**
    - Le Projet est découpé en Epics puis User Stories.
    - Les User Stories mobilisent Templates, Prompts, Guides, Standards et Rules.
3. **Conception**
    - Les besoins produisent Composants, Workflows, Rules ou Modules.
    - Les choix structurants sont formalisés par ADR.
    - Les arbitrages sont tracés dans Décision.
4. **Exécution**
    - Les Workflows sont exécutés par équipes, Automations, Pipelines ou Agents IA.
    - Les Prompts, Templates et Guides standardisent la production.
5. **Validation**
    - Les Tests vérifient les objets.
    - La Recette consolide l’acceptation.
    - Les Evidence prouvent les résultats.
    - Les KPI mesurent qualité, usage et maturité.
6. **Livraison**
    - Les objets validés sont versionnés.
    - Les Versions sont regroupées dans une Release.
    - La Release est validée, publiée puis capitalisée.
7. **Capitalisation**
    - Les résultats alimentent REX, Guides, Standards, Templates, Prompts et ADR.
    - Les objets robustes peuvent passer à Validated puis Gold.
    - Les objets obsolètes passent à Deprecated puis Archived.

## Matrice synthétique

| Objet source | Relation | Objets cibles |
| --- | --- | --- |
| Project Intake | qualifie / déclenche | Projet, Expérimentation, Décision |
| Projet | contient / produit | Epic, User Story, Composant, Release, REX |
| Epic | structure | User Story, Capability, Release |
| User Story | spécifie / valide | Test, Composant, Evidence |
| Composant | implémente | Module, Workflow, Pipeline, Agent IA |
| Template | structure | Projet, Guide, Agent IA |
| Prompt | instruit | Agent IA, Workflow, Livrable |
| Standard | norme | Rule, Template, Test, Audit |
| Guide | explique | Standard, Template, Module |
| ADR | justifie | Standard, Module, Décision |
| Décision | arbitre | Projet, Release, Standard |
| Module | expose | Capability, Workflow |
| Capability | oriente | Module, Projet, KPI |
| Workflow | orchestre | Automation, Pipeline, Agent IA |
| Pipeline | exécute | Test, Evidence, Version |
| Automation | déclenche | Workflow, Rule, Agent IA |
| Agent IA | produit / contrôle | Prompt, Template, Evidence |
| Rule | contraint | Test, Audit, Automation |
| Test | vérifie | User Story, Composant, Release |
| Recette | accepte | Release, Projet, Version |
| Evidence | prouve | Décision, Audit, KPI, Recette |
| REX | capitalise | Guide, Standard, Template, Prompt |
| Audit | évalue | Standard, Module, Agent IA |
| KPI | mesure | Projet, Module, Prompt |
| Release | publie | Version, Composant, Module |
| Version | trace | Objet versionné, Release |
| Expérimentation | teste | Prompt, Composant, Agent IA |

# Cycle de vie des objets

## Draft

Objet en cours de création.

**Critères d’entrée**

- Objet nouvellement créé.
- Mission ou périmètre incomplet.
- Relations non stabilisées.

**Critères de sortie**

- Description minimale complète.
- Propriétaire identifié.
- Usage potentiel clarifié.

## Candidate

Objet suffisamment défini pour être évalué ou testé.

**Critères d’entrée**

- Mission, responsabilités et périmètre décrits.
- Relations principales identifiées.
- Critères d’évaluation définis.

**Critères de sortie**

- Usage en expérimentation ou validation.
- Evidence initiale.
- Décision de poursuite, test ou abandon.

## Experimental

Objet testé dans un cadre contrôlé.

**Critères d’entrée**

- Hypothèse ou objectif de test défini.
- Protocole identifié.
- KPI ou critères de succès établis.

**Critères de sortie**

- Résultats mesurés.
- Evidence disponible.
- REX produit.
- Recommandation formalisée.

## Validated

Objet ayant démontré sa valeur et sa conformité.

**Critères d’entrée**

- Tests ou recettes réussis.
- Evidence suffisante.
- Décision de validation.
- Propriétaire confirmé.

**Critères de sortie**

- Extension d’usage.
- Versionnement.
- Promotion possible en Gold.

## Gold

Objet référence officielle.

**Critères d’entrée**

- Validation robuste.
- Réutilisation démontrée.
- Documentation complète.
- KPI satisfaisants.
- Gouvernance approuvée.
- Version stable.

**Critères de sortie**

- Évolution majeure.
- Obsolescence.
- Remplacement.
- Dépréciation.

## Deprecated

Objet non recommandé pour les nouveaux usages.

**Critères d’entrée**

- Remplacement disponible ou obsolescence constatée.
- Décision de dépréciation.
- Risque ou coût de maintien identifié.

**Critères de sortie**

- Migration terminée.
- Absence d’usage actif.
- Passage en Archived.

## Archived

Objet retiré de l’usage actif et conservé pour mémoire.

**Critères d’entrée**

- Objet clôturé, remplacé ou abandonné.
- Aucune action active.
- Historique conservé.

**Critères de sortie**

- Réouverture exceptionnelle uniquement.

## Règles générales

- Aucun objet ne passe en Validated sans evidence.
- Aucun objet ne passe en Gold sans usage démontré et documentation complète.
- Aucun objet Gold ne doit être modifié sans versioning.
- Tout passage en Deprecated doit identifier une alternative ou justification.
- Tout passage en Archived doit préserver la traçabilité.
- Les objets critiques doivent être reliés à une Décision ou une ADR.

# Gouvernance du Meta Model

## Règles d'ajout d'un nouvel objet

Un objet peut être ajouté si :

1. Il représente une responsabilité conceptuelle distincte.
2. Sa mission est claire.
3. Ses responsabilités sont explicites.
4. Il possède des relations structurantes avec les objets existants.
5. Son propriétaire est désigné.
6. Son cycle de vie est défini.
7. L’impact sur modules, agents IA, scripts, bases Notion, templates et standards est évalué.
8. L’ajout est justifié par ADR ou Décision.

## Règles de modification

Toute modification doit :

- identifier l’objet impacté ;
- décrire le changement ;
- justifier le changement par evidence, REX, audit, KPI, ADR ou décision ;
- évaluer l’impact sur bases Notion, templates, prompts, agents IA, scripts, automatisations, workflows et reporting ;
- versionner le document si le changement est significatif ;
- informer les owners concernés.

## Règles de suppression

La suppression est acceptable uniquement si :

- l’objet est redondant ;
- il n’est plus utilisé ;
- il a été remplacé ;
- il crée une ambiguïté ;
- les impacts sont maîtrisés.

Avant suppression :

1. Passer l’objet en Deprecated.
2. Identifier les dépendances.
3. Définir une stratégie de migration.
4. Produire une Décision.
5. Archiver avec historique.

## Versioning

Le Meta Model suit un versioning sémantique :

- **Majeur** : ajout/suppression d’objets majeurs, changement de relations critiques.
- **Mineur** : clarification, ajout d’attributs, relations non disruptives.
- **Patch** : correction éditoriale ou précision mineure.

Règles :

- Toute version dispose d’un changelog.
- Toute version majeure est liée à une ADR.
- Toute version Gold est figée jusqu’à décision de révision.
- Les versions obsolètes restent consultables pour audit.

## Liens avec les ADR

Une ADR est requise lorsque :

- un nouvel objet majeur est ajouté ;
- un objet change de responsabilité ;
- une relation structurante évolue ;
- une catégorie évolue ;
- un changement impacte agents IA, scripts ou bases Notion ;
- une évolution modifie les critères de maturité.

# Recommandations

## 1. Créer une base Notion “Objets SFIA”

Propriétés minimales :

- Nom
- Catégorie
- Mission
- Propriétaire
- Statut de maturité
- Version
- Relations entrantes
- Relations sortantes
- Standards associés
- ADR associées
- KPI associés
- Dernière revue

## 2. Créer une base “Relations SFIA”

Propriétés recommandées :

- Objet source
- Type de relation
- Objet cible
- Cardinalité
- Criticité
- Rule associée
- Evidence associée
- Commentaire d’architecture

## 3. Gouverner les objets Gold

Chaque objet Gold doit faire l’objet d’une revue périodique portant sur :

- usage réel ;
- performance ;
- conformité ;
- documentation ;
- pertinence ;
- compatibilité avec agents IA et automatisations.

## 4. Relier le Meta Model aux agents IA

Chaque agent IA doit déclarer :

- objets lisibles ;
- objets créables ;
- objets modifiables ;
- prompts utilisés ;
- templates utilisés ;
- rules applicables ;
- evidence produites.

## 5. Utiliser le Meta Model comme contrat d’intégration

Les modules, scripts et automatisations doivent respecter :

- noms d’objets stables ;
- statuts contrôlés ;
- relations explicites ;
- owners identifiés ;
- règles de maturité communes.

# Roadmap d'évolution

## Court terme — v1.1

- Créer la base “Objets SFIA”.
- Créer la base “Relations SFIA”.
- Associer chaque objet à une catégorie.
- Définir les vues par module.
- Identifier les owners initiaux.
- Créer un template standard de fiche objet.

## Moyen terme — v1.5

- Ajouter les cardinalités formelles.
- Définir les règles de validation par type d’objet.
- Relier objets, actions, KPI, standards et prompts.
- Mettre en place des vues de maturité.
- Créer une cartographie de dépendances.
- Définir règles d’accès et modification.

## Long terme — v2.0

- Transformer le Meta Model en référentiel exécutable.
- Générer automatiquement des templates depuis les objets.
- Connecter les agents IA aux règles de maturité.
- Automatiser les contrôles de conformité.
- Produire dashboards de couverture et maturité.
- Gouverner par ADR, evidence et KPI.

# v1.1 Update — Operational Metamodel Relations

## v1.1 Naming Convention

SFIA v1.1 uses the following naming convention for domain and meta-model objects:

| Usage | Convention |
|-------|------------|
| Canonical object names | English, singular form |
| French explanations | Allowed in descriptive text |
| Repository folders | Lowercase kebab-case |
| Templates and prompts | Explicit functional names |
| Notion labels | May be localized for readability |

Examples:

| Canonical object | French description |
|------------------|--------------------|
| Project | Projet de référence ou initiative de delivery |
| Component | Composant réutilisable |
| Prompt | Instruction réutilisable pour un workflow IA |
| Template | Structure réutilisable de document ou livrable |
| Practice | Pratique plateforme par rôle ou discipline |
| Role Method | Méthode attachée à un rôle |
| Artifact | Production issue d'un cycle |
| Knowledge Page | Page Notion éditorialisée issue du repo |
| Guardrail | Règle de contrainte ou de protection |

Rule:

> The canonical model uses English object names; French may be used to explain intent, responsibilities and business meaning.

SFIA v1.1 introduces explicit relations between operational artifacts:

| Relation | Meaning |
|----------|---------|
| Cycle produces Artifact | Each cycle must produce a useful output |
| Artifact uses Template | Reusable structures standardize delivery |
| Prompt guides Cycle | Prompts drive ChatGPT/Cursor execution |
| Checklist validates Artifact | Validation is explicit and traceable |
| Practice informs Role Method | Practices define role-level expectations |
| Reference Project validates Method | Interv360 acts as learning and validation base |
| Audit evaluates Project or Method | Audits identify maturity and gaps |
| REX feeds Capitalization | Lessons learned update the method |
| Knowledge Page derives from Artifact | Notion content must be curated from repo sources |
| Guardrail constrains Action | Execution is bounded by explicit constraints |
| Archive preserves History | Historical material is retained but not active |

## Template layers

| Layer | Location | Relation |
|-------|----------|----------|
| Fast Track operational templates | `method/sfia-fast-track/templates/` | Used by Cycles |
| Platform templates | `docs/templates/` | Used by Practices and Role Methods |

## Maturity (Role Methods)

| Status | Meaning |
|--------|---------|
| Draft | Under construction — not publication-ready |
| Official | Validated role method (e.g. QA Tester) |

## v1.0 metamodel preserved

The six SFIA modules (Core, Studio, Runtime, Knowledge, Laboratory, Projects) and all v1.0 object relations remain valid.

v1.1 adds operational relations observed during Interv360 and workspace consolidation.

# Conclusion

Le **SFIA Meta Model v1.1** établit le langage conceptuel commun de la plateforme SFIA.

Il clarifie les objets fondamentaux, leurs responsabilités, leurs relations, leur cycle de vie et leurs règles de gouvernance. Il aligne architecture d’entreprise, delivery, connaissance, qualité, innovation et plateforme dans un référentiel unique, exploitable nativement dans Notion.

<aside>
✅

Le Meta Model est le socle de cohérence de la SFIA. Sa valeur dépend de son adoption comme référentiel vivant, gouverné, mesuré et actionnable.

</aside>