# SFIA Foundation Documents — Inventory

**Date** : 2026-07-03  
**Branche** : `capitalization/sfia-documentation-completeness`  
**Mode** : identification uniquement — aucun document source modifié

**Inventaires bruts** : `foundation-candidate-files.txt` (462 fichiers), `foundation-priority-files.txt` (102 fichiers).

## 1. Objectif

Ce document inventorie les documents fondateurs du workspace SFIA.

L'objectif est d'identifier les documents qui portent les principes structurants de la méthode SFIA, avant toute mise à jour.

Cette étape ne modifie pas les documents existants.

## 2. Domaines de classification

| Domaine | Description |
|---------|-------------|
| Vision SFIA | Vision globale, ambition, finalité |
| Platform Architecture | Architecture globale de la plateforme SFIA |
| Decision Engine | Moteur de décision, arbitrages, règles |
| Delivery Pipeline | Chaîne de livraison, phases, transitions, validations |
| Domain Model | Concepts métier et objets centraux |
| Metamodel | Modèle conceptuel des artefacts, cycles, rôles, livrables |
| Rules & Guardrails | Règles, garde-fous, contraintes |
| Automation / Orchestration | Moteurs, automatisation, orchestration IA |
| ChatGPT ↔ Cursor | Automatisation des échanges entre assistant et IDE |
| Repository Execution | Branches, commits, PR, exécution repo |
| Validation Engine | Contrôles, revues, GO/NO-GO |
| Knowledge / Notion Layer | Capitalisation, publication, couche connaissance |
| Role / Métier Modeling | Définition des rôles, pratiques et métiers |
| Reference Project | Interv360 comme implémentation de référence |

## 3. Inventaire des documents candidats

### 3.1. Référentiels fondateurs `docs/architecture/` (sources Notion v1.0)

| Document | Emplacement actuel | Domaine principal | Domaines secondaires | Statut | Commentaire |
|----------|--------------------|------------------|----------------------|--------|-------------|
| `sfia-platform-architecture.md` | `docs/architecture/` | Platform Architecture | Vision SFIA, Automation, Knowledge | **Actif** | ~2100 lignes ; se déclare « Document fondateur SFIA » ; export Notion |
| `sfia-decision-engine.md` | `docs/architecture/` | Decision Engine | Automation, Validation | **Actif** | ~1600 lignes ; moteur décisionnel officiel v1.0 |
| `sfia-delivery-pipeline.md` | `docs/architecture/` | Delivery Pipeline | Validation, Repository Execution | **Actif** | ~1900 lignes ; pipeline officiel avec quality gates |
| `sfia-domain-model.md` | `docs/architecture/` | Domain Model | Metamodel | **Actif** | Objets métier v1 (Experiment, Project, etc.) |
| `sfia-meta-model.md` | `docs/architecture/` | Metamodel | Domain Model, Role / Métier | **Actif** | ~1700 lignes ; modules Core/Studio/Runtime/Knowledge/Lab/Projects |
| `sfia-repository-blueprint.md` | `docs/architecture/` | Repository Execution | Knowledge / Notion Layer | **Actif** | ~1300 lignes ; patrimoine Git + Notion, gouvernance repo |
| `docs/architecture/README.md` | `docs/architecture/` | Platform Architecture | — | **Actif** | Index des 6 documents fondateurs |

### 3.2. Principes et fondation

| Document | Emplacement actuel | Domaine principal | Domaines secondaires | Statut | Commentaire |
|----------|--------------------|------------------|----------------------|--------|-------------|
| `sfia-engineering-principles.md` | `docs/foundation/` | Rules & Guardrails | Vision SFIA | **Actif** | 10 principes engineering ; export Notion KNO-001 |
| `docs/foundation/README.md` | `docs/foundation/` | Vision SFIA | — | **Actif** | Index fondation |

### 3.3. Méthode opérationnelle SFIA Fast Track

| Document | Emplacement actuel | Domaine principal | Domaines secondaires | Statut | Commentaire |
|----------|--------------------|------------------|----------------------|--------|-------------|
| `sfia-global-capitalization.md` | `method/sfia-fast-track/core/` | Vision SFIA | Reference Project, ChatGPT ↔ Cursor, Repository Execution | **Actif** | Capitalisation Interv360 → règles réutilisables ; §13 prompts Cursor |
| `sfia-rules-update.md` | `method/sfia-fast-track/core/` | Rules & Guardrails | Delivery Pipeline, Repository Execution | **Actif** | 8+ règles opérationnelles post-consolidation |
| `sfia-architecture-standards.md` | `method/sfia-fast-track/core/` | Platform Architecture | Rules & Guardrails | **Actif** | Standards projets ; complète les docs architecture |
| `sfia-consolidation-roadmap.md` | `method/sfia-fast-track/core/` | Vision SFIA | Delivery Pipeline | **Actif** | Roadmap chantiers — pas fondateur pur mais structurant |
| `sfia-automation-architecture.md` | `method/sfia-fast-track/automation/` | Automation / Orchestration | ChatGPT ↔ Cursor, Prompt Generation, Repository Execution, Validation Engine | **Actif** | Définit explicitement les 3 moteurs (Prompt Gen, Repo Exec, Validation) |
| `guardrails-checklist.md` | `method/sfia-fast-track/checklists/` | Rules & Guardrails | Validation Engine | **Actif** | Garde-fous exécutables |
| `validation-checklist.md` | `method/sfia-fast-track/checklists/` | Validation Engine | Repository Execution | **Actif** | Contrôles Git, code, doc, PR, post-merge |
| `notion-publication-checklist.md` | `method/sfia-fast-track/checklists/` | Knowledge / Notion Layer | — | **Actif** | Contrôles publication Notion |
| `notion-target-content-map.md` | `method/sfia-fast-track/documentation/` | Knowledge / Notion Layer | — | **Actif** | Mapping éditorial Notion — contient encore terme « SFA » (doc existant, non modifié) |
| `notion-publication-plan.md` | `method/sfia-fast-track/documentation/` | Knowledge / Notion Layer | — | **À consolider** | Plan publication — pré-cleanup partiel |
| `method/sfia-fast-track/README.md` | `method/sfia-fast-track/` | Delivery Pipeline | Vision SFIA | **Actif** | Point d'entrée méthode active |

### 3.4. Pratiques rôles et métiers

| Document | Emplacement actuel | Domaine principal | Domaines secondaires | Statut | Commentaire |
|----------|--------------------|------------------|----------------------|--------|-------------|
| `docs/practices/roles/README.md` | `docs/practices/roles/` | Role / Métier Modeling | — | **Actif** | Structure Role Method |
| `business-analyst-method.md` | `docs/practices/roles/` | Role / Métier Modeling | — | **À consolider** | Draft |
| `product-owner-method.md` | `docs/practices/roles/` | Role / Métier Modeling | — | **À consolider** | Draft |
| `project-manager-method.md` | `docs/practices/roles/` | Role / Métier Modeling | — | **À consolider** | Draft |
| `architect-method.md` | `docs/practices/roles/` | Role / Métier Modeling | Platform Architecture | **À consolider** | Draft |
| `ux-ui-designer-method.md` | `docs/practices/roles/` | Role / Métier Modeling | — | **À consolider** | Draft |
| `rssi-method.md` | `docs/practices/roles/` | Role / Métier Modeling | Rules & Guardrails | **À consolider** | Draft |
| `qa-tester-method.md` | `docs/practices/roles/` | Role / Métier Modeling | Validation Engine | **Actif** | Official — seul rôle stabilisé |

### 3.5. Prompts et génération

| Document | Emplacement actuel | Domaine principal | Domaines secondaires | Statut | Commentaire |
|----------|--------------------|------------------|----------------------|--------|-------------|
| `prompt-catalog.md` | `prompts/` | Prompt Generation | Role / Métier, ChatGPT ↔ Cursor | **Actif** | Catalogue ~15 familles ; référentiel central |
| `prompts/README.md` | `prompts/` | Prompt Generation | — | **Actif** | Distinction templates FT vs plateforme |
| Familles formalisées (`architecture/`, `qa/`, `bpmn/`, `security/`, `ux-ui/`, `tooling/penpot/`) | `prompts/` | Prompt Generation | — | **Actif** | 7 fichiers — familles cadrage/arbitrages/governance vides |

### 3.6. Cas de référence Interv360

| Document | Emplacement actuel | Domaine principal | Domaines secondaires | Statut | Commentaire |
|----------|--------------------|------------------|----------------------|--------|-------------|
| `interv360-mvp-delivery-capitalization.md` | `method/sfia-fast-track/cycles/` | Reference Project | Delivery Pipeline | **Actif** | Pattern lots MVP |
| `interv360-final-capitalization.md` | `method/sfia-fast-track/cycles/` | Reference Project | Vision SFIA | **Actif** | Clôture séquence pilote |
| `interv360-application-rex.md` | `method/sfia-fast-track/audit-rex/` | Reference Project | Rules & Guardrails | **Actif** | REX structurant |
| `projects/interv360/README.md` | `projects/interv360/` | Reference Project | Delivery Pipeline | **Actif** | Index phases 00–09 |
| `projects/interv360/00-intake/` … `09-roadmap/` | `projects/interv360/` | Reference Project | Tous domaines opérationnels | **Actif** | ~299 docs ; capitalisation terrain |
| `current-application-audit.md` | `projects/interv360/06-audit-rex/` | Reference Project | Validation Engine | **Actif** | Audit application |
| ADR `02-architecture/adr/` (9 fichiers) | `projects/interv360/` | Reference Project | Decision Engine | **Actif** | Décisions structurantes pilote |

### 3.7. Documents historiques repérés

| Document | Emplacement actuel | Domaine principal | Statut | Commentaire |
|----------|--------------------|------------------|--------|-------------|
| `archive/interv360-realization/*` | `method/sfia-fast-track/archive/` | Delivery Pipeline, Prompt Generation | **Historique** | Méthode réalisation pré-Fast Track ; prompts Cursor/ChatGPT détaillés |
| `documentation-audit.md` | `method/sfia-fast-track/documentation/` | Knowledge / Notion Layer | **Historique** | Audit pré-PR #81 ; chemins obsolètes |
| `documentation-structure-target.md` | `method/sfia-fast-track/documentation/` | Repository Execution | **Historique** | Cible pré-cleanup |
| `method/complementary/controlled-delivery/*` | `method/complementary/` | Delivery Pipeline | **Actif complémentaire** | Méthode parallèle capitalisée |

## 4. Documents fondateurs évidents

| Document | Pourquoi il est fondateur |
|----------|---------------------------|
| `docs/architecture/sfia-platform-architecture.md` | Document fondateur explicite — vision plateforme, modules, principes |
| `docs/architecture/sfia-decision-engine.md` | Moteur de décision officiel v1.0 — cerveau de la plateforme |
| `docs/architecture/sfia-delivery-pipeline.md` | Pipeline delivery officiel — phases, gates, capitalisation |
| `docs/architecture/sfia-domain-model.md` | Modèle de domaine officiel — objets métier avant toute implémentation |
| `docs/architecture/sfia-meta-model.md` | Méta-modèle conceptuel — langage commun artefacts et cycles |
| `docs/architecture/sfia-repository-blueprint.md` | Blueprint repository — Git, Notion, gouvernance patrimoine |
| `docs/foundation/sfia-engineering-principles.md` | Principes engineering transverses |
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Vision orchestration + définition des 3 moteurs opérationnels |
| `method/sfia-fast-track/core/sfia-global-capitalization.md` | Vision opérationnelle Fast Track validée par Interv360 |
| `method/sfia-fast-track/core/sfia-rules-update.md` | Règles et garde-fous exécutables de la méthode active |

## 5. Documents historiques mais utiles

| Document | Élément utile à récupérer |
|----------|--------------------------|
| `archive/interv360-realization/realization-prompt-family.md` | Famille prompts Cursor/ChatGPT détaillée pour réalisation |
| `archive/interv360-realization/realization-method.md` | Méthode réalisation pré-Fast Track — traçabilité évolution |
| `archive/interv360-realization/notion-integration-plan.md` | Plan intégration Notion historique |
| `documentation-audit.md` | Inventaire qualitatif pré-cleanup — utile comme baseline |
| `workspace-audit/sfia-workspace-global-audit.md` | Cartographie moteurs ↔ documents (Validation, Prompt Gen, Repo Exec) |
| `method/complementary/controlled-delivery/controlled-delivery-standard.md` | Méthode delivery alternative — complément Controlled Delivery |

## 6. Documents à promouvoir comme sources canoniques

| Domaine | Document candidat | Action proposée |
|---------|------------------|----------------|
| Platform Architecture | `docs/architecture/sfia-platform-architecture.md` | **Promouvoir** — aligner avec état repo post-cleanup |
| Decision Engine | `docs/architecture/sfia-decision-engine.md` | **Promouvoir** — relier à Fast Track opérationnel |
| Delivery Pipeline | `docs/architecture/sfia-delivery-pipeline.md` + `sfia-global-capitalization.md` | **Consolider** — fusion conceptuel / opérationnel |
| Domain Model | `docs/architecture/sfia-domain-model.md` | **Promouvoir** — vérifier objets vs repo actuel |
| Metamodel | `docs/architecture/sfia-meta-model.md` | **Promouvoir** — mapper artefacts repo (method/, docs/, prompts/) |
| Rules & Guardrails | `sfia-rules-update.md` + `guardrails-checklist.md` + `sfia-engineering-principles.md` | **Consolider** — une référence unique après mise à jour |
| Automation / Orchestration | `sfia-automation-architecture.md` | **Promouvoir** — source des moteurs |
| ChatGPT ↔ Cursor | `sfia-automation-architecture.md` §2–3 | **Réécrire** — extraire en document canonique dédié |
| Repository Execution | `sfia-repository-blueprint.md` + `sfia-rules-update.md` (PR, post-merge) | **Consolider** |
| Validation Engine | `validation-checklist.md` + `sfia-automation-architecture.md` §5.7 | **Réécrire** — spec moteur autonome |
| Prompt Generation | `prompt-catalog.md` + `sfia-automation-architecture.md` §5.5 | **Consolider** |
| Knowledge / Notion Layer | `sfia-repository-blueprint.md` + `notion-target-content-map.md` | **Consolider** — créer `sfia-knowledge-layer.md` |
| Role / Métier Modeling | `docs/practices/roles/` + `sfia-meta-model.md` | **Consolider** — élever maturité Role Methods |
| Reference Project | `cycles/interv360-*` + `projects/interv360/` | **Promouvoir** — cas référence, pas sync brut |

## 7. Lacunes identifiées

| Domaine | Lacune | Priorité |
|---------|--------|----------|
| ChatGPT ↔ Cursor workflow | Pas de document canonique autonome — contenu dispersé dans automation + capitalization | **P0** |
| Validation Engine | Pas de spec moteur — seulement checklist opérationnelle | **P1** |
| Prompt Generation Engine | Pas de spec moteur — catalogue + section automation | **P1** |
| Repository Execution Engine | Blueprint repo présent ; pas de spec « moteur d'exécution » autonome | **P1** |
| Knowledge Layer | Pas de `sfia-knowledge-layer.md` — blueprint + mapping partiels | **P1** |
| Alignement Notion ↔ repo | 6 docs architecture exportés Notion vs structure repo post-PR #81 | **P1** |
| Role Methods | 5/6 rôles encore Draft | **P2** |
| Operating model unifié | Tension Notion=source vérité (docs architecture) vs Git=source détaillée (Fast Track) | **P1** — à arbitrer |
| Moteurs exécutables | Aucun script/moteur implémenté — documentation seule | **P2** — attendu à ce stade |

## Update — v1.1 Orientation

**Décision d'orientation :**

- conserver les documents fondateurs v1.0 ;
- les faire évoluer vers une v1.1 ;
- ne pas repartir de zéro ;
- créer de nouveaux documents uniquement pour les lacunes transverses ;
- réserver la v2.0 à une future SFIA automatisée avec moteurs actifs et intégration Notion opérationnelle.

Les documents `docs/architecture/*` restent les sources fondatrices conceptuelles.

Les documents `method/sfia-fast-track/*` portent la méthode opérationnelle active.

**Livrables de planification v1.1 :**

- `v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md`
- `v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`

## Update — v1.1 Assets Created

The foundation v1.1 consolidation created or updated the following operational assets:

| Asset | Role |
|-------|------|
| `docs/foundation/sfia-engineering-principles.md` | Higher-order execution principles |
| `docs/architecture/sfia-decision-engine.md` | Decision, reserves and GO / NO-GO logic |
| `docs/architecture/sfia-repository-blueprint.md` | Repository structure and routing |
| `docs/architecture/sfia-delivery-pipeline.md` | Delivery and post-merge workflow |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | ChatGPT ↔ Cursor execution loop |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Current operational rules |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Knowledge and documentation routing |
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Automation architecture v1.1 |
| `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | Prompt generation |
| `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` | Repository execution |
| `method/sfia-fast-track/automation/sfia-validation-engine.md` | Validation and decisions |
| `method/sfia-fast-track/checklists/sfia-validation-checklist.md` | Operational validation checklist |
| `prompts/prompt-catalog.md` | Prompt families and cards |
| `prompts/templates/` | Full reusable prompt templates |

This inventory remains a historical foundation identification document. The current completeness view is maintained in `../sfia-documentation-completeness-matrix.md`.
