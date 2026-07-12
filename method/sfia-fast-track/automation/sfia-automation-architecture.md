---
status: foundation
version: v1.1
updated_after: SFIA foundation v1.1 consolidation
scope: automation architecture
---

# SFIA Fast Track — Automation Architecture v1.1

**Version:** v1.1
**Status:** Foundation document
**Updated after:** SFIA foundation v1.1 consolidation
**Scope:** Automation architecture

## v1.1 Consistency Rule

SFIA v1.1 preserves the historical automation architecture vision while adding operational clarifications derived from SFIA Fast Track, the ChatGPT ↔ Cursor operating model, Engineering Principles, Rules & Guardrails, the Knowledge Layer and the three P1 automation engine specifications.

When v1.0 and v1.1 formulations are in tension, the v1.1 operational clarification prevails for current SFIA execution.

Historical automation concepts remain useful for target architecture, but current automation cycles must follow the v1.1 engine specifications and human validation rules.

## v1.1 Engineering Principles Reference

All SFIA automation initiatives must comply with:

- `docs/foundation/sfia-engineering-principles.md`

Automation must not bypass:

- repository-first execution;
- prompt-as-contract;
- guardrails before execution;
- documentation routing;
- quality by evidence;
- human validation;
- controlled automation;
- no raw Notion sync.

Any automation exception must be explicit, justified, traceable and validated by a human according to:

- `docs/architecture/2026-06-27-sfia-decision-engine.md`

## 1. Objectif

Ce document formalise la vision d'automatisation de SFIA.

L'objectif est de transformer SFIA Fast Track :

- d'une méthode assistée par IA ;
- vers une architecture d'orchestration automatisable ;
- capable de produire des applications sur mesure à partir d'un besoin exprimé en self-service.

Vision cible :

> Un utilisateur exprime son besoin dans un formulaire.
> SFIA qualifie, cadre, conçoit, génère, teste, documente et prépare la livraison d'une application adaptée.

## 2. Constat issu d'Interv360

Le projet Interv360 a permis de valider la méthode :

- cycles courts ;
- PR uniques ;
- garde-fous ;
- build/tests ;
- post-merge documenté ;
- releases ;
- audit ;
- REX ;
- capitalisation.

Mais il a aussi montré une limite importante :

> L'exécution reste trop manuelle.

Les allers-retours suivants sont encore trop nombreux :

- utilisateur → ChatGPT ;
- ChatGPT → Cursor ;
- Cursor → résultat ;
- résultat → ChatGPT ;
- ChatGPT → nouveau prompt ;
- Cursor → commit ;
- GitHub → PR ;
- retour utilisateur ;
- post-merge manuel ;
- documentation manuelle.

Cette boucle fonctionne, mais elle n'est pas encore industrialisable à grande échelle.

## 3. Décision stratégique

SFIA ne doit pas rester uniquement une méthode documentaire.

SFIA doit devenir :

> un système d'orchestration IA pour la création contrôlée d'applications.

Cela signifie que les règles SFIA doivent être converties en :

- workflows ;
- moteurs de décision ;
- prompts standardisés ;
- agents spécialisés ;
- validations automatisées ;
- garde-fous exécutables ;
- templates ;
- pipelines ;
- connecteurs.

## 4. Vision cible self-service

### 4.1. Entrée utilisateur

L'utilisateur renseigne un formulaire :

- problème métier ;
- cible utilisateur ;
- objectifs ;
- fonctionnalités attendues ;
- contraintes ;
- niveau d'ambition UI ;
- besoin d'authentification ;
- besoin de base de données ;
- besoin API ;
- besoin d'intégration externe ;
- besoin reporting/export ;
- volumétrie ;
- criticité ;
- délais ;
- budget ou niveau d'effort souhaité.

### 4.2. Sortie attendue

SFIA produit automatiquement :

- cadrage produit ;
- expression de besoin ;
- périmètre MVP ;
- hors scope ;
- backlog ;
- architecture fonctionnelle ;
- architecture technique ;
- stratégie UI ;
- stratégie data ;
- stratégie tests ;
- maquettes ou brief Figma ;
- prompts Cursor ;
- code ;
- tests ;
- documentation ;
- PR ;
- release notes ;
- plan Notion ;
- REX.

## 5. Architecture cible des moteurs SFIA

### 5.1. Intake Engine

Rôle :

Transformer un formulaire utilisateur en besoin exploitable.

Responsabilités :

- clarifier le problème ;
- identifier les utilisateurs ;
- détecter les ambiguïtés ;
- classer le type de projet ;
- estimer la complexité ;
- produire une première fiche besoin.

Sorties :

- besoin structuré ;
- hypothèses ;
- questions ouvertes ;
- risques initiaux.

### 5.2. Product Framing Engine

Rôle :

Transformer le besoin en cadrage produit.

Responsabilités :

- définir la proposition de valeur ;
- cadrer le MVP ;
- identifier les hors scope ;
- prioriser les fonctionnalités ;
- définir les écrans clés ;
- proposer une trajectoire de livraison.

Sorties :

- product brief ;
- MVP scope ;
- backlog initial ;
- critères de succès.

### 5.3. Architecture Decision Engine

Rôle :

Proposer l'architecture adaptée au projet.

Responsabilités :

- choisir frontend/backend ;
- décider local/API ;
- décider base de données ;
- identifier intégrations ;
- détecter besoins auth ;
- proposer patterns techniques ;
- générer ADR si nécessaire.

Sorties :

- architecture cible ;
- ADR ;
- risques techniques ;
- garde-fous.

### 5.4. UI Design Engine

Rôle :

Piloter la stratégie UI.

Responsabilités :

- décider si Figma Design est nécessaire ;
- générer un brief Figma ;
- définir tokens, composants, écrans ;
- préparer mapping Figma → code ;
- choisir stack UI ;
- empêcher le code avant validation design premium.

Sorties :

- UI brief ;
- design system brief ;
- composants attendus ;
- stack UI proposée ;
- checklist Figma Design-first.

### 5.5. Prompt Generation Engine

Rôle :

Générer les prompts Cursor nécessaires.

Responsabilités :

- produire prompts de cycle ;
- produire prompts de validation ;
- produire prompts de PR ;
- produire prompts post-merge ;
- intégrer garde-fous ;
- adapter les prompts au type de cycle.

Sorties :

- prompt cadrage ;
- prompt implémentation ;
- prompt validation ;
- prompt PR ;
- prompt post-merge.

#### v1.1 Status — Specified

The Prompt Generation Engine is now specified in:

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`

In SFIA v1.1, this engine transforms a human intention or cycle need into a structured, compliant, routed and controllable Cursor prompt.

It produces an execution contract including:

- objective;
- repository;
- branch;
- expected commit;
- SFIA phase or context;
- reference sources;
- target folder;
- capitalization type;
- scope;
- out of scope;
- files to read;
- files to modify;
- forbidden files or paths;
- expected actions;
- verification commands;
- expected commit;
- expected result.

### 5.6. Repository Execution Engine

Rôle :

Exécuter les actions dans le repo.

Responsabilités :

- créer branche ;
- modifier fichiers ;
- lancer build/tests ;
- lire erreurs ;
- proposer corrections ;
- préparer commits ;
- préparer PR ;
- vérifier diff.

Sorties :

- branche ;
- fichiers modifiés ;
- commit ;
- PR prête ;
- rapport d'exécution.

#### v1.1 Status — Specified

The Repository Execution Engine is now specified in:

- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`

In SFIA v1.1, this engine executes a Cursor prompt in Git in a controlled, traceable and validable way.

It controls:

- repository path;
- branch;
- expected commit;
- `git status`;
- sources;
- target folders;
- generic SFIA protected path categories;
- project-specific protected paths;
- diff;
- checks;
- local commit;
- PR readiness;
- post-merge readiness;
- execution report.

Protected paths are not hardcoded to a single project.

The prompt must declare project-specific protected paths for each cycle.

### 5.7. Validation Engine

Rôle :

Contrôler que les garde-fous sont respectés.

Responsabilités :

- vérifier build/tests ;
- vérifier diff hors scope ;
- vérifier absence de backend si cycle UI ;
- vérifier absence auth/CRUD si non demandé ;
- vérifier documentation ;
- vérifier PR body ;
- vérifier statut Git ;
- vérifier couverture minimale.

Sorties :

- rapport validation ;
- go/no-go ;
- corrections nécessaires.

#### v1.1 Status — Specified

The Validation Engine is now specified in:

- `method/sfia-fast-track/automation/sfia-validation-engine.md`

In SFIA v1.1, this engine validates:

- Cursor prompts;
- repository execution;
- diffs;
- commits;
- deliverables;
- PR readiness;
- post-merge traces;
- capitalization;
- Notion preparation;
- automation readiness.

It produces explicit SFIA decisions, classifies reserves and proposes next steps.

### 5.8. Documentation Engine

Rôle :

Générer et maintenir la documentation.

Responsabilités :

- créer documents de cycle ;
- mettre à jour roadmap ;
- produire audit ;
- produire REX ;
- produire release notes ;
- documenter post-merge ;
- préparer documentation utilisateur.

Sorties :

- docs Markdown ;
- changelog ;
- REX ;
- audit ;
- notes de release.

### 5.9. Notion Publication Engine

Rôle :

Publier dans Notion uniquement après validation.

Responsabilités :

- inventorier documents publiables ;
- exclure docs internes ;
- préparer arborescence Notion ;
- générer plan publication ;
- exécuter sync ;
- vérifier rendu Notion.

Sorties :

- plan Notion ;
- pages publiées ;
- rapport de publication.

### 5.10. Release Engine

Rôle :

Créer tags et releases sur jalons significatifs.

Responsabilités :

- décider si release nécessaire ;
- générer notes ;
- créer tag ;
- créer GitHub Release ;
- vérifier main propre.

Sorties :

- tag ;
- release ;
- release notes.

## 6. Niveaux d'automatisation

### Niveau 0 — Manuel assisté

État actuel observé sur Interv360.

Caractéristiques :

- ChatGPT produit les prompts ;
- Cursor exécute ;
- l'utilisateur copie/colle ;
- GitHub est contrôlé manuellement ;
- validations humaines fréquentes.

### Niveau 1 — Prompts standardisés

Objectif court terme.

Caractéristiques :

- prompts typés par cycle ;
- templates de PR ;
- templates post-merge ;
- checklists ;
- décisions mieux structurées.

### Niveau 2 — Orchestration semi-automatique

Objectif moyen terme.

Caractéristiques :

- formulaire besoin ;
- génération automatique de roadmap ;
- génération prompts Cursor ;
- exécution semi-guidée ;
- validations automatiques ;
- humains uniquement pour go/no-go.

### Niveau 3 — Agentic Delivery

Objectif avancé.

Caractéristiques :

- agents spécialisés ;
- orchestration multi-étapes ;
- création branche/commit/PR automatisée ;
- corrections tests semi-autonomes ;
- documentation automatique ;
- validation humaine sur jalons.

### Niveau 4 — Self-service Application Factory

Vision cible.

Caractéristiques :

- utilisateur décrit son besoin ;
- SFIA génère le produit ;
- design, code, tests, docs et release sont orchestrés ;
- humain intervient sur arbitrages métier et validations sensibles.

## 7. Ce qui doit rester humain

Même avec automatisation, certains points doivent rester validés humainement :

- problème métier ;
- proposition de valeur ;
- validation Figma Design ;
- arbitrages fonctionnels ;
- choix d'architecture sensibles ;
- sécurité/auth ;
- accès données réelles ;
- publication externe ;
- merge final ;
- release publique ;
- mise en production.

## 8. Garde-fous exécutables

Les garde-fous SFIA doivent devenir contrôlables automatiquement :

| Garde-fou | Contrôle automatisable |
|-----------|------------------------|
| Pas de backend dans cycle UI | `git diff` sur backend |
| Pas de CI modifiée | `git diff` sur `.github/workflows` |
| Pas de `sfia-notion-sync` | `git diff` ciblé |
| Pas d'exports Figma suivis | `git status` |
| Build obligatoire | commande build |
| Tests obligatoires | commande tests |
| PR body obligatoire | vérification fichier |
| Post-merge obligatoire | section statut merge |
| Pas d'auth implicite | détection fichiers auth/tokens |
| Pas de CRUD implicite | détection routes/forms/mutations |

## 9. Modèle de formulaire cible

Le formulaire self-service doit collecter au minimum :

### Produit

- nom du projet ;
- problème métier ;
- utilisateurs ;
- objectifs ;
- irritants actuels ;
- valeur attendue.

### Fonctionnel

- fonctionnalités principales ;
- données manipulées ;
- workflows ;
- rôles ;
- règles métier ;
- exports ;
- intégrations.

### Technique

- web/mobile/API ;
- base de données ;
- auth ;
- hébergement ;
- volumétrie ;
- sécurité ;
- contraintes SI.

### UI/UX

- niveau design ;
- besoin Figma Design ;
- charte ;
- écrans clés ;
- responsive ;
- accessibilité ;
- inspiration visuelle.

### Livraison

- MVP attendu ;
- priorité ;
- délai ;
- niveau de documentation ;
- besoin Notion ;
- besoin release.

## 10. MVP de la plateforme SFIA

Le premier MVP de la plateforme SFIA ne doit pas générer une application complète en autonomie.

Il doit d'abord automatiser :

1. formulaire besoin ;
2. cadrage produit ;
3. roadmap cycles ;
4. génération prompts Cursor ;
5. génération PR body ;
6. génération documentation ;
7. checklists de validation ;
8. préparation release notes.

Objectif MVP :

> Réduire les allers-retours humains sans supprimer les validations importantes.

## 11. Trajectoire de réalisation

### Étape 1 — Formaliser les workflows

- cycles types ;
- transitions ;
- go/no-go ;
- templates ;
- checklists.

### Étape 2 — Construire le formulaire intake

- structure besoin ;
- scoring complexité ;
- classification projet.

### Étape 3 — Générer automatiquement les livrables méthode

- cadrage ;
- backlog ;
- roadmap ;
- prompts ;
- PR body.

### Étape 4 — Brancher le repo

- création branche ;
- exécution tests ;
- validation diff ;
- rapport.

### Étape 5 — Brancher design / Notion / release

- Figma Design ;
- publication Notion ;
- release GitHub.

## 12. Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Automatiser trop tôt | Génération incohérente | Commencer par automatiser docs/prompts |
| Supprimer trop d'humain | Mauvais arbitrages | Garder go/no-go humain |
| Mélanger périmètres | Dérive de projet | Cycle = objectif |
| Générer du code non maintenable | Dette technique | Validation Engine |
| Publier trop tôt | Documentation incohérente | Notion plan obligatoire |
| Design approximatif | Mauvaise adoption | Figma Design-first |

## 13. Décision

SFIA doit évoluer en deux dimensions :

1. **méthode de livraison contrôlée** ;
2. **architecture d'orchestration automatisable**.

Décision :

> L'objectif long terme de SFIA est de devenir une application factory assistée par IA, capable de transformer un besoin utilisateur structuré en application livrable, testée, documentée et gouvernée.

## 14. Suites

À intégrer dans les prochains chantiers :

- Chantier 4 — inclure l'inventaire des documents nécessaires à l'automatisation ;
- Chantier 5 — formaliser les règles exécutables, workflows, checklists et templates ;
- nouveau projet — tester progressivement l'approche semi-automatisée.

---

## v1.1 Update — Automation Architecture

SFIA automation v1.1 is based on three P1 engine specifications:

1. `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
2. `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
3. `method/sfia-fast-track/automation/sfia-validation-engine.md`

These engines are specifications, not autonomous executable components.

They define how SFIA should:

- generate Cursor prompts;
- execute repository changes;
- validate prompts, diffs, commits, deliverables and decisions.

SFIA v1.1 remains:

- human-validated;
- prompt-driven;
- repository-first;
- non-autonomous;
- controlled by evidence;
- constrained by guardrails.

The three engine specifications prepare a future SFIA v2.0 automation model, but do not activate autonomous automation by themselves.

## v1.1 P1 Engine Chain

The SFIA v1.1 automation chain is:

```text
Human intention
→ Prompt Generation Engine
→ Cursor prompt / execution contract
→ Repository Execution Engine
→ Controlled Git changes
→ Validation Engine
→ SFIA decision / reserves / next step
→ Documentation / Knowledge capitalization
```

| Engine | Role | Canonical specification |
|--------|------|-------------------------|
| Prompt Generation Engine | Produces the Cursor execution contract | `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` |
| Repository Execution Engine | Executes the contract in Git with guardrails | `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` |
| Validation Engine | Validates prompt, execution, diff, commit, deliverables and decisions | `method/sfia-fast-track/automation/sfia-validation-engine.md` |

This chain is the current operational automation reference for SFIA v1.1.

## v1.1 Automation Boundaries

In SFIA v1.1, no automation engine is autonomous.

The P1 engine specifications must not be interpreted as permission to automate execution without human control.

SFIA automation must not:

- execute repository changes without a validated prompt;
- push without human validation;
- create PRs without human validation;
- merge automatically;
- publish to Notion automatically;
- run raw Notion sync;
- bypass Engineering Principles;
- bypass Rules & Guardrails;
- modify protected paths without explicit scope and validation;
- treat generated outputs as validated without evidence.

Any move toward executable automation must be handled in a dedicated cycle, validated by a human, traced in Git and controlled by the Validation Engine.

## v1.1 Remaining Automation Work

The three P1 automation engine specifications are now available.

Remaining follow-up work:

1. consolidate validation checklists;
2. consolidate `prompts/prompt-catalog.md`;
3. decide whether `sfia-documentation-engine.md` is necessary;
4. prepare P2 cross-references;
5. update older foundation documents that still reference automation only at conceptual level;
6. prepare SFIA v2.0 automation trajectory only after v1.1 stabilization.

`sfia-documentation-engine.md` remains optional.

It should only be created if a future cycle proves that documentation production requires a dedicated engine beyond Prompt Generation, Repository Execution and Validation.

## v1.1 Decision

`method/sfia-fast-track/automation/sfia-automation-architecture.md` is the synthesis reference for SFIA automation architecture v1.1.

The three P1 engine specifications are now the canonical operational references for automation-related cycles:

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

SFIA v1.1 automation remains non-autonomous, human-validated, prompt-driven and repository-first.

No automation engine may bypass the Engineering Principles, Rules & Guardrails, Decision Engine or human validation.
