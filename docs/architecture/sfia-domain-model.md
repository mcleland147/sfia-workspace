---
source: Notion / SFIA Architecture
status: reference
sync: manual-export
---

# SFIA Domain Model

## Objectifs et portée

Ce document définit le **modèle de domaine officiel** de la Software Factory IA (SFIA). Il constitue la **référence métier** préalable à toute création d’objets dans :

- les bases Notion
- le repository Git
- les composants Cursor
- les APIs
- les futures bases SQL
- les dashboards
- les agents IA

<aside>
⚠️

Aucun objet (page, ligne de base, artefact, API, table) ne doit être créé s’il n’existe pas d’abord une **définition métier** validée dans ce modèle.

</aside>

---

# Objets métier (v1)

## 1) Experiment

### Nom de l'objet

Experiment

### Définition

Un **Experiment** est une initiative cadrée, limitée dans le temps, visant à **tester une hypothèse** (technique, produit, data, IA) et à produire des **preuves** exploitables.

### Mission

Réduire l’incertitude en fournissant rapidement des résultats mesurables (apprentissages, métriques, artefacts) permettant une décision : abandon, itération, industrialisation.

### Responsabilités

- Formaliser une hypothèse et des critères de succès/échec
- Définir un protocole (méthode, dataset, prompt, environnement)
- Produire des artefacts (PoC, scripts, notebooks, prompts, résultats)
- Documenter les résultats et recommandations

### Cycle de vie

- **Draft** → **Proposed** → **Running** → **Completed** → **Reviewed** → (**Promoted** | **Archived**)

### Identifiant officiel

`EXP-YYYY-NNN`

### Convention de nommage

`EXP — <Domaine> — <Hypothèse courte>`

### Statuts autorisés

Draft, Proposed, Running, Completed, Reviewed, Promoted, Archived

### Transitions possibles

- Draft → Proposed
- Proposed → Running | Archived
- Running → Completed | Archived
- Completed → Reviewed
- Reviewed → Promoted | Archived

### Attributs obligatoires

- Identifiant (ID)
- Titre
- Propriétaire (Owner)
- Hypothèse
- Objectif
- Critères de succès
- Périmètre / contraintes
- Date de début

### Attributs optionnels

- Date de fin
- Risques identifiés
- Budget/effort estimé
- Liens vers datasets / environnements
- Résultats chiffrés
- Recommandations

### Propriétés recommandées

- Priorité
- Domaine / Capability (future)
- Tags
- Niveau de preuve (Evidence level)
- Coût, délai

### Types de propriétés Notion

- ID : `Text`
- Titre : `Title`
- Owner : `Person`
- Statut : `Status`
- Hypothèse : `Text`
- Critères de succès : `Text`
- Dates : `Date`
- Relations : `Relation`
- Tags : `Multi-select`

### Relations avec les autres objets

- peut produire → **REX**
- peut devenir → **Component**
- utilise / teste → **Component**, **Prompt**, **Template**, **Standard**
- est cadré par → **ADR** (si décision structurante)
- mesure → **KPI**
- alimente → **Knowledge Article**

### Règles de gestion

- Un Experiment doit toujours avoir au moins **1 hypothèse** et **1 critère de succès**.
- Un Experiment **Completed** doit avoir un **résultat** et un **REX** (au minimum un lien).
- La transition **Promoted** implique un candidat **Component** (nouveau ou existant) ou une industrialisation documentée.

### Exemples

- « EXP — Retrieval — Impact du reranking sur la précision »
- « EXP — Prompting — Comparaison CoT vs ReAct sur tickets support »

### Bonnes pratiques

- Définir une fenêtre temporelle courte (timebox)
- Instrumenter la mesure dès le départ
- Conserver les paramètres (versions, prompts, datasets)

### Risques

- Expérimentation sans métriques (résultats non exploitables)
- Multiplication d’expériences redondantes
- Industrialisation prématurée sans preuve suffisante

---

## 2) Component

### Nom de l'objet

Component

### Définition

Un **Component** est une brique **réutilisable** et **versionnée** de la plateforme SFIA (logicielle, IA, data, process), intégrable dans des projets et gouvernée par des standards.

### Mission

Accélérer la delivery par la réutilisation, garantir la cohérence technique et fonctionnelle, réduire le coût total de possession.

### Responsabilités

- Fournir une capacité réutilisable (API, lib, service, workflow, prompt pack, modèle)
- Exposer une interface claire (contrat)
- Être versionné, documenté, testable
- Respecter les Standards applicables

### Cycle de vie

- **Proposed** → **In Development** → **Ready** → **In Use** → (**Deprecated** → **Retired**) | **Archived**

### Identifiant officiel

`CMP-<domain>-NNN`

### Convention de nommage

`CMP — <Domaine> — <Nom composant>`

### Statuts autorisés

Proposed, In Development, Ready, In Use, Deprecated, Retired, Archived

### Transitions possibles

- Proposed → In Development | Archived
- In Development → Ready | Archived
- Ready → In Use | Deprecated
- In Use → Deprecated
- Deprecated → Retired

### Attributs obligatoires

- Identifiant (ID)
- Nom
- Propriétaire
- Description
- Type de composant (ex: API, Library, Service, Prompt Pack)
- Version
- Interface/Contrat (lien)
- Statut

### Attributs optionnels

- SLA/SLO
- Dépendances
- Coûts
- Roadmap
- Artefacts techniques (repo, package)

### Propriétés recommandées

- Criticité
- Maturité
- Compatibilité
- Tags

### Types de propriétés Notion

- ID : `Text`
- Nom : `Title`
- Owner : `Person`
- Type : `Select`
- Version : `Text`
- Statut : `Status`
- Dépendances : `Relation`
- Repo : `URL`

### Relations avec les autres objets

- est issu de → **Experiment**
- est utilisé par → **Project**
- applique → **Standard**
- est impacté par → **ADR**
- génère / utilise → **Template**, **Prompt**
- est mesuré par → **KPI**
- est documenté par → **Knowledge Article**

### Règles de gestion

- Un Component **Ready** doit avoir : version, contrat, documentation minimale.
- Un Component **In Use** doit référencer au moins un Project consommateur.
- Toute dépréciation doit indiquer une stratégie de remplacement.

### Exemples

- « CMP — Retrieval — Vector Store Adapter »
- « CMP — Prompting — Prompt Pack: Support Triage »

### Bonnes pratiques

- Interface-first (contrat avant implémentation)
- Versionner sémantiquement
- Définir des exemples d’usage

### Risques

- Composants “one-off” non réutilisables
- Non-maîtrise des versions et dépendances

---

## 3) Project

### Nom de l'objet

Project

### Définition

Un **Project** est une initiative orientée **livraison** (produit, interne, plateforme) regroupant objectifs, périmètre, plan de livraison et consommation de composants.

### Mission

Produire une valeur livrable en orchestrant des composants, des standards, et des décisions d’architecture.

### Responsabilités

- Définir le résultat attendu (deliverables)
- Planifier et suivre l’exécution
- Consommer/faire évoluer des Components
- Produire les ADR et REX associés

### Cycle de vie

- **Initiated** → **Planned** → **In Progress** → **Delivered** → **Closed** | **On Hold** | **Cancelled**

### Identifiant officiel

`PRJ-YYYY-NNN`

### Convention de nommage

`PRJ — <Produit/Client> — <Objectif>`

### Statuts autorisés

Initiated, Planned, In Progress, Delivered, Closed, On Hold, Cancelled

### Transitions possibles

- Initiated → Planned | Cancelled
- Planned → In Progress | On Hold | Cancelled
- In Progress → Delivered | On Hold | Cancelled
- Delivered → Closed
- On Hold → In Progress | Cancelled

### Attributs obligatoires

- Identifiant
- Nom
- Sponsor / Owner
- Objectifs
- Périmètre
- Statut
- Dates (début)

### Attributs optionnels

- Budget
- Dates (fin)
- Risques
- Jalons

### Propriétés recommandées

- Priorité
- Domaine
- KPI cibles

### Types de propriétés Notion

- ID : `Text`
- Nom : `Title`
- Owner : `Person`
- Statut : `Status`
- Dates : `Date`
- Components : `Relation`
- ADR/REX : `Relation`

### Relations avec les autres objets

- utilise → **Component**
- génère → **ADR**, **REX**
- utilise → **Template**, **Prompt**
- est contraint par → **Standard**
- mesure → **KPI**
- produit / enrichit → **Knowledge Article**

### Règles de gestion

- Tout Project livré doit avoir au moins un REX.
- Tout Project ayant des impacts structurants doit avoir des ADR.

### Exemples

- « PRJ — Onboarding — Assistant IA de support interne »

### Bonnes pratiques

- Réutiliser avant de construire
- Formaliser les décisions

### Risques

- Effet tunnel sans REX ni mesures

---

## 4) Prompt

### Nom de l'objet

Prompt

### Définition

Un **Prompt** est un artefact textuel (ou structuré) versionné, destiné à piloter un modèle IA dans un contexte donné, avec contraintes, entrées, sorties et critères de qualité.

### Mission

Standardiser et capitaliser l’ingénierie d’instructions afin d’assurer reproductibilité, qualité et sécurité.

### Responsabilités

- Définir intention, contexte, instructions et format de sortie
- Définir variables/paramètres et exemples
- Assurer la conformité aux standards (sécurité, style, éthique)

### Cycle de vie

- **Draft** → **Validated** → **Published** → (**Deprecated** → **Archived**)

### Identifiant officiel

`PRM-<domain>-NNN`

### Convention de nommage

`PRM — <Usage> — <But>`

### Statuts autorisés

Draft, Validated, Published, Deprecated, Archived

### Transitions possibles

Draft → Validated → Published → Deprecated → Archived

### Attributs obligatoires

- Identifiant
- Nom
- Owner
- Texte du prompt (ou gabarit)
- Inputs attendus
- Output attendu (format)
- Version
- Statut

### Attributs optionnels

- Exemples (few-shot)
- Contraintes (token, langue)
- Modèle cible
- Mesures/score

### Propriétés recommandées

- Pattern (ex: ReAct, CoT)
- Température / paramètres
- Tags

### Types de propriétés Notion

- ID : `Text`
- Nom : `Title`
- Owner : `Person`
- Prompt : `Text` (ou contenu de page)
- Statut : `Status`
- Version : `Text`
- Pattern : `Select`
- Relations : `Relation`

### Relations avec les autres objets

- appartient à / est instancié par → **Template**
- est utilisé par → **Component**, **Project**, **Experiment**
- est contraint par → **Standard**
- est évalué par → **KPI**
- est documenté par → **Knowledge Article**

### Règles de gestion

- Un Prompt **Published** doit être **Validé** et versionné.
- Toute dépréciation doit indiquer un remplacement ou une raison.

### Exemples

- Prompt de triage de tickets
- Prompt de synthèse de réunion

### Bonnes pratiques

- Spécifier explicitement le format de sortie
- Utiliser des exemples minimaux et représentatifs

### Risques

- Prompt non reproductible (variables implicites)
- Fuites de données / instructions non sûres

---

## 5) Template

### Nom de l'objet

Template

### Définition

Un **Template** est un modèle réutilisable (Notion, document, code, prompt wrapper) qui standardise une structure de contenu ou un flux de travail.

### Mission

Accélérer la production de contenus/artefacts cohérents et réduire la variabilité.

### Responsabilités

- Définir une structure
- Porter des champs obligatoires
- Faciliter la conformité aux standards

### Cycle de vie

Draft → Validated → Published → Deprecated → Archived

### Identifiant officiel

`TPL-<scope>-NNN`

### Convention de nommage

`TPL — <Objet> — <Usage>`

### Statuts autorisés

Draft, Validated, Published, Deprecated, Archived

### Transitions possibles

Draft → Validated → Published → Deprecated → Archived

### Attributs obligatoires

- Identifiant
- Nom
- Objet cible (ex: ADR, REX, Article)
- Version
- Statut

### Attributs optionnels

- Variantes
- Instructions d’usage

### Propriétés recommandées

- Tags
- Conformité standard (flag)

### Types de propriétés Notion

- ID : Text
- Nom : Title
- Objet cible : Select
- Statut : Status
- Version : Text

### Relations avec les autres objets

- instancie → **ADR**, **REX**, **Knowledge Article**
- encapsule / référence → **Prompt**
- est contraint par → **Standard**

### Règles de gestion

- Un Template Published doit avoir une version et un objet cible.

### Exemples

- Template d’ADR
- Template de REX

### Bonnes pratiques

- Garder le template minimal et évolutif

### Risques

- Templates trop lourds, non adoptés

---

## 6) Standard

### Nom de l'objet

Standard

### Définition

Un **Standard** est une règle, norme ou convention officielle de la SFIA (architecture, sécurité, qualité, rédaction, IA), applicable à des objets et vérifiable.

### Mission

Assurer cohérence, sécurité, qualité et interopérabilité des livrables.

### Responsabilités

- Définir exigences, recommandations, exceptions
- Définir critères de conformité
- Versionner et publier

### Cycle de vie

Draft → Proposed → Approved → Published → Deprecated → Archived

### Identifiant officiel

`STD-<category>-NNN`

### Convention de nommage

`STD — <Catégorie> — <Sujet>`

### Statuts autorisés

Draft, Proposed, Approved, Published, Deprecated, Archived

### Transitions possibles

Draft → Proposed → Approved → Published → Deprecated → Archived

### Attributs obligatoires

- Identifiant
- Nom
- Catégorie
- Règles
- Critères de conformité
- Version
- Statut

### Attributs optionnels

- Exceptions
- Exemples

### Propriétés recommandées

- Niveau (must/should)
- Domaine

### Types de propriétés Notion

- ID : Text
- Nom : Title
- Catégorie : Select
- Statut : Status
- Version : Text

### Relations avec les autres objets

- s’applique à → **Component**, **Project**, **Prompt**, **Template**, **Experiment**
- est enrichi par → **REX**, **Knowledge Article**

### Règles de gestion

- Un Standard Published doit avoir critères de conformité.

### Exemples

- Standard de nommage des repos
- Standard de rédaction des ADR

### Bonnes pratiques

- Formuler des règles testables

### Risques

- Standards non mesurables → non applicables

---

## 7) ADR

### Nom de l'objet

ADR (Architecture Decision Record)

### Définition

Un **ADR** est un enregistrement versionné d’une **décision d’architecture** : contexte, options, décision, conséquences.

### Mission

Rendre les décisions traçables, auditables, et faciliter l’alignement.

### Responsabilités

- Capturer le contexte et les options
- Formaliser la décision
- Documenter impacts et conséquences

### Cycle de vie

Draft → Proposed → Accepted → Superseded → Archived

### Identifiant officiel

`ADR-YYYY-NNN`

### Convention de nommage

`ADR — <Sujet> — <Décision courte>`

### Statuts autorisés

Draft, Proposed, Accepted, Superseded, Archived

### Transitions possibles

Draft → Proposed → Accepted → (Superseded → Archived)

### Attributs obligatoires

- Identifiant
- Titre
- Date
- Statut
- Contexte
- Décision
- Conséquences

### Attributs optionnels

- Alternatives
- Liens vers preuves/experiments

### Propriétés recommandées

- Impact scope
- Urgence

### Types de propriétés Notion

- ID : Text
- Titre : Title
- Statut : Status
- Date : Date
- Relations : Relation

### Relations avec les autres objets

- impacte → **Component**, **Project**, **Standard**
- est justifié par → **Experiment**, **KPI**
- est instancié par → **Template**

### Règles de gestion

- Un ADR Accepted doit référencer les composants/projets impactés.

### Exemples

- Choix du vector store

### Bonnes pratiques

- Décision claire, alternatives explicites

### Risques

- ADR incomplet → décisions réinterprétées

---

## 8) REX

### Nom de l'objet

REX (Retour d’Expérience)

### Définition

Un **REX** est une synthèse structurée des apprentissages issus d’un projet/expérience : résultats, écarts, causes, actions.

### Mission

Capitaliser les apprentissages et alimenter l’amélioration continue.

### Responsabilités

- Capturer ce qui a fonctionné / échoué
- Identifier causes racines
- Proposer des actions

### Cycle de vie

Draft → Reviewed → Published → Archived

### Identifiant officiel

`REX-YYYY-NNN`

### Convention de nommage

`REX — <Contexte> — <Sujet>`

### Statuts autorisés

Draft, Reviewed, Published, Archived

### Transitions possibles

Draft → Reviewed → Published → Archived

### Attributs obligatoires

- Identifiant
- Titre
- Contexte (Project/Experiment)
- Résultats
- Leçons
- Recommandations

### Attributs optionnels

- Actions
- Données chiffrées

### Propriétés recommandées

- Catégorie
- Tags

### Types de propriétés Notion

- ID : Text
- Titre : Title
- Statut : Status
- Relations : Relation

### Relations avec les autres objets

- est généré par → **Project**, **Experiment**
- enrichit → **Knowledge Article**, **Standard**

### Règles de gestion

- Un REX Published doit contenir au moins 1 recommandation actionnable.

### Exemples

- REX d’industrialisation d’un composant

### Bonnes pratiques

- Factuel, orienté action

### Risques

- REX trop narratif, non exploitable

---

## 9) KPI

### Nom de l'objet

KPI

### Définition

Un **KPI** est un indicateur quantitatif défini (formule, source, fréquence) permettant de mesurer performance, qualité ou valeur.

### Mission

Piloter la plateforme et objectiver décisions et priorités.

### Responsabilités

- Définir la métrique et son mode de calcul
- Définir source, propriétaire, fréquence
- Suivre l’évolution et interpréter

### Cycle de vie

Draft → Defined → Active → Retired

### Identifiant officiel

`KPI-<domain>-NNN`

### Convention de nommage

`KPI — <Domaine> — <Mesure>`

### Statuts autorisés

Draft, Defined, Active, Retired

### Transitions possibles

Draft → Defined → Active → Retired

### Attributs obligatoires

- Identifiant
- Nom
- Définition (formule)
- Source
- Fréquence
- Owner
- Statut

### Attributs optionnels

- Seuils / targets
- Visualisation

### Propriétés recommandées

- Unité
- Périmètre

### Types de propriétés Notion

- ID : Text
- Nom : Title
- Statut : Status
- Owner : Person
- Source : Select/Text
- Fréquence : Select

### Relations avec les autres objets

- mesure → **Project**, **Component**, **Experiment**, **Prompt**
- justifie → **ADR**

### Règles de gestion

- Un KPI Active doit avoir une source et une fréquence.

### Exemples

- Taux de succès d’un workflow
- Temps moyen de résolution

### Bonnes pratiques

- Définition non ambiguë, reproductible

### Risques

- KPI “vanity” non actionnable

---

## 10) Knowledge Article

### Nom de l'objet

Knowledge Article

### Définition

Un **Knowledge Article** est un article de connaissance versionné, structuré et référencé, visant à diffuser une information fiable (concept, how-to, runbook, référence).

### Mission

Centraliser et rendre accessible la connaissance validée de la SFIA.

### Responsabilités

- Produire un contenu clair et maintenable
- Maintenir la version et l’actualité
- Référencer sources et artefacts

### Cycle de vie

Draft → Reviewed → Published → Updated → Archived

### Identifiant officiel

`KNO-<domain>-NNN`

### Convention de nommage

`KNO — <Domaine> — <Titre>`

### Statuts autorisés

Draft, Reviewed, Published, Updated, Archived

### Transitions possibles

Draft → Reviewed → Published → Updated → Archived

### Attributs obligatoires

- Identifiant
- Titre
- Owner
- Statut
- Contenu
- Sources / références

### Attributs optionnels

- Mots-clés
- Version
- Date de revue

### Propriétés recommandées

- Audience
- Type (how-to, concept, runbook)

### Types de propriétés Notion

- ID : Text
- Titre : Title
- Owner : Person
- Statut : Status
- Type : Select
- Tags : Multi-select
- Relations : Relation

### Relations avec les autres objets

- est enrichi par → **REX**, **Experiment**
- améliore / influence → **Standard**
- documente → **Component**, **Prompt**, **Project**

### Règles de gestion

- Un article Published doit être Reviewed.

### Exemples

- Runbook d’incident
- Guide d’usage d’un composant

### Bonnes pratiques

- Un article = un sujet
- Inclure exemples et anti-exemples

### Risques

- Obsolescence (non revue)

---

# Relations entre les objets (graphe SFIA)

## Relations principales

- **Experiment** → peut devenir → **Component**
- **Experiment** → produit → **REX**
- **Experiment** → mesure → **KPI**
- **Project** → utilise → **Component**
- **Project** → utilise → **Prompt**
- **Project** → utilise → **Template**
- **Project** → génère → **ADR**
- **Project** → génère → **REX**
- **Component** → applique → **Standard**
- **Component** → est impacté par → **ADR**
- **Prompt** → est contraint par → **Standard**
- **Template** → instancie → **ADR** | **REX** | **Knowledge Article**
- **REX** → enrichit → **Knowledge Article**
- **Knowledge Article** → améliore → **Standard**
- **ADR** → impacte → **Component**

<aside>
🔗

Les relations sont des objets de première classe : elles seront matérialisées dans Notion par des **Relations** (et, lorsque nécessaire, par des tables dédiées de “Relationship” avec attributs : type, direction, justification, date, état).

</aside>

---

# Principes de modélisation

## Principes

- Chaque objet possède un **cycle de vie** (statuts + transitions).
- Chaque objet possède un **propriétaire** (responsable métier/technique de la qualité).
- Chaque objet possède une **version** (ou un mécanisme d’évolution contrôlé).
- Un objet peut être relié à plusieurs autres objets.
- Les **relations** sont aussi importantes que les objets.
- Aucun objet n’est créé sans définition métier.
- Aucune base Notion n’est créée avant validation du modèle.

<aside>
✅

Règle d’architecture : la conception des bases (schémas Notion / API / SQL) est un **dérivé** du Domain Model, jamais l’inverse.

</aside>

---

# Roadmap du Domain Model

## Objets à modéliser dans une prochaine version

- Mission
- Agent
- Workflow
- Policy
- Context
- Capability
- Release
- Version
- Evidence
- Decision
- Automation
- Runtime

<aside>
🧭

Cette roadmap indique les futures extensions du domaine. Elle n’autorise pas la création d’objets correspondants avant modélisation (principe de non-création hors modèle).

</aside>