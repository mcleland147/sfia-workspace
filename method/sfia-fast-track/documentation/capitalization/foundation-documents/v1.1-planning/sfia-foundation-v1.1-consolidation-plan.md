# SFIA Foundation v1.1 — Consolidation Plan

**Date** : 2026-07-03  
**Branche** : `capitalization/sfia-documentation-completeness`  
**Matrice associée** : `sfia-foundation-v1.1-evolution-matrix.md`  
**Mode** : planification uniquement — validation humaine requise avant exécution

## 1. Objectif

Ce plan prépare la mise à jour v1.1 des documents fondateurs SFIA.

Il définit quoi enrichir, quoi créer, dans quel ordre, sans modifier les sources v1.0 dans cette étape.

## 2. Principe

Ne pas repartir de zéro.

Conserver les documents fondateurs existants comme base :

- Platform Architecture ;
- Decision Engine ;
- Delivery Pipeline ;
- Domain Model ;
- Metamodel ;
- Repository Blueprint ;
- Engineering Principles.

Les enrichir avec les apprentissages issus :

- d'Interv360 (cas de référence capitalisé) ;
- de SFIA Fast Track (méthode opérationnelle active) ;
- du workspace cleanup PR #81 (structure repo validée) ;
- de l'automatisation ChatGPT ↔ Cursor (vision + boucle prouvée) ;
- de la future couche Notion (IDE métier, pas sync brut).

**Deux couches complémentaires :**

| Couche | Emplacement | Rôle v1.1 |
|--------|-------------|-----------|
| Conceptuelle | `docs/architecture/`, `docs/foundation/` | Référentiels fondateurs v1.1 |
| Opérationnelle | `method/sfia-fast-track/` | Méthode active, moteurs, operating model |

## 3. Documents existants à faire évoluer

### 3.1. Référentiels architecture (`docs/architecture/`)

| Document | Version cible | Mise à jour attendue |
|----------|---------------|----------------------|
| `sfia-platform-architecture.md` | **v1.1** | Ajouter cartographie repo post-cleanup ; couches `method/`, `docs/practices/`, `prompts/`, `projects/` ; relation Git ↔ Notion ; module Projects ↔ Interv360 |
| `sfia-decision-engine.md` | **v1.1** | Ajouter décisions GO/NO-GO, réserves, arbitrage PR/post-merge, capitalisation vs delivery |
| `sfia-delivery-pipeline.md` | **v1.1** | Ajouter cycle Fast Track (branches, PR, post-merge, releases) ; séquence projet 00–09 ; lien capitalisations cycles |
| `sfia-domain-model.md` | **v1.1** | Ajouter Cycle, Prompt, Template, Practice, Role Method, Reference Project, Knowledge Page, Audit, REX |
| `sfia-meta-model.md` | **v1.1** | Ajouter relations artefacts/prompts/templates/practices/Notion/audits ; statuts maturité Role Method |
| `sfia-repository-blueprint.md` | **v1.1** | Aligner sur PR #81 : `method/complementary/`, `docs/practices/`, suppression refs `methods/`, `docs/methods/` |

### 3.2. Fondation (`docs/foundation/`)

| Document | Version cible | Mise à jour attendue |
|----------|---------------|----------------------|
| `sfia-engineering-principles.md` | **v1.1** | Ajouter garde-fous Fast Track, Cursor, Notion non auto, validation humaine, Figma Design-first |

### 3.3. Méthode opérationnelle (`method/sfia-fast-track/`)

| Document | Version cible | Mise à jour attendue |
|----------|---------------|----------------------|
| `automation/sfia-automation-architecture.md` | **v1.1** | Marquer version ; renvoyer vers specs moteurs ; frontière v1.1 / v2.0 ; mettre à jour boucle ChatGPT ↔ Cursor |
| `core/sfia-global-capitalization.md` | **v1.1** (cross-ref) | Ajouter renvois vers référentiels architecture v1.1 ; statut « preuve opérationnelle » |
| `core/sfia-rules-update.md` | **v1.1** (cross-ref) | Ajouter renvoi vers `sfia-rules-and-guardrails.md` ; conserver règles détaillées jusqu'à fusion P1 |

**Convention de versionnement v1.1 :**

- En-tête YAML ou bloc métadonnées : `version: v1.1`, `previous: v1.0`, `date`, `sources: Interv360, Fast Track, PR #81`
- Conserver historique v1.0 mentionné en section « Historique » ou via Git — ne pas effacer le contenu v1.0

## 4. Nouveaux documents à créer

| Document | Priorité | Objectif | Sources à consolider |
|----------|----------|----------|----------------------|
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | **P0** | Décrire le mode opératoire ChatGPT ↔ Cursor | `sfia-automation-architecture.md` §2–3 ; `sfia-global-capitalization.md` §13 ; `figma-design-first-ui-method.md` |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | **P1** | Consolider règles et garde-fous unifiées | `engineering-principles` + `rules-update` + `guardrails-checklist` |
| `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | **P1** | Spec moteur génération prompts | `automation` §5.5 ; `prompt-catalog.md` |
| `method/sfia-fast-track/automation/sfia-validation-engine.md` | **P1** | Spec moteur validation | `automation` §5.7 ; `validation-checklist` ; `guardrails-checklist` |
| `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` | **P1** | Spec moteur exécution repo | `automation` §5.6 ; `repository-blueprint` ; `rules-update` (PR/post-merge) |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | **P1** | Décrire couche connaissance / Notion | `repository-blueprint` ; `notion-target-content-map.md` ; `exports/notion/README.md` |

**Emplacement des nouveaux docs :**

- Operating model + rules + knowledge → `core/` (fondations opérationnelles)
- Moteurs → `automation/` (cohérent avec vision automation existante)

## 5. Documents à ne pas dupliquer

| Contenu | Action v1.1 |
|---------|-------------|
| `documentation-audit.md` | Archiver ou baseline — ne pas fusionner dans fondateurs |
| `notion-target-content-map.md` | Référencer depuis `sfia-knowledge-layer.md` — mise à jour terminologie SFIA lors consolidation |
| Payloads JSON CMP | Ne pas régénérer en v1.1 — chantier Notion ultérieur |
| 299 docs Interv360 | Citer comme preuve — ne pas importer dans architecture |
| `archive/interv360-realization/` | Référence historique uniquement |

## 6. Ordre recommandé des commits

| Phase | Action | Fichiers touchés | Commit suggéré |
|-------|--------|------------------|----------------|
| **0** | Valider ce plan (humain) | — | — |
| **1** | Mettre à jour les 6 référentiels `docs/architecture/` v1.1 | 6 fichiers | `docs: update SFIA architecture foundations to v1.1` |
| **2** | Mettre à jour `sfia-engineering-principles.md` v1.1 | 1 fichier | `docs: update SFIA engineering principles to v1.1` |
| **3** | Créer operating model ChatGPT ↔ Cursor | 1 nouveau | `docs: add SFIA ChatGPT Cursor operating model` |
| **4** | Créer `sfia-rules-and-guardrails.md` | 1 nouveau | `docs: consolidate SFIA rules and guardrails` |
| **5** | Extraire les 3 moteurs automation | 3 nouveaux | `docs: specify SFIA automation engines` |
| **6** | Créer knowledge layer | 1 nouveau | `docs: define SFIA knowledge layer` |
| **7** | Mettre à jour `sfia-automation-architecture.md` v1.1 (renvois) | 1 fichier | `docs: update SFIA automation architecture to v1.1` |
| **8** | Cross-références `global-capitalization` + `rules-update` | 2 fichiers | `docs: cross-reference SFIA operational foundations v1.1` |
| **9** | Mettre à jour `docs/architecture/README.md` + index capitalisation | README + audit | `docs: update SFIA capitalization after foundation consolidation` |

**Branche d'exécution recommandée :** `capitalization/sfia-foundation-v1.1` (à créer depuis `capitalization/sfia-documentation-completeness` ou `main` après merge).

## 7. Critères de validation v1.1

Avant de considérer v1.1 terminée :

- [x] Les 6 référentiels architecture portent la mention v1.1 et reflètent la structure PR #81
- [x] Aucune référence active à `methods/` racine ou `docs/methods/` dans les docs v1.1
- [x] Operating model ChatGPT ↔ Cursor documenté et référencé depuis automation
- [x] Les 3 moteurs ont une spec autonome (même si non implémentés)
- [x] Knowledge layer distingue Notion IDE métier vs sync brut
- [x] Domain model inclut Practice et Role Method
- [x] Terminologie **SFIA** exclusive dans tous les nouveaux contenus v1.1
- [x] Documents v1.0 restent traçables via Git history

**Status after P2.2:**

- Structural foundation: complete;
- Index and audit alignment: complete;
- Formal closure decision: pending P2.3.

## 8. Garde-fous

- ne pas modifier le code ;
- ne pas exécuter Notion sync ;
- ne pas publier dans Notion ;
- ne pas toucher `tools/cmp-001/` ;
- ne pas régénérer les payloads JSON ;
- ne pas toucher `projects/interv360/app/`, `backend/`, CI ;
- garder les documents v1.0 comme historique intellectuel (Git) ;
- documenter clairement le passage v1.1 dans chaque fichier enrichi ;
- ne pas supprimer de contenu v1.0 sans section « remplacé par » explicite.

## 9. Décision

> **La consolidation v1.1 peut démarrer après validation humaine de ce plan.**

**Prérequis avant chantier Notion :**

1. Phases 1–6 minimum exécutées ;
2. Matrice capitalisation documentaire mise à jour ;
3. Revue terminologie SFIA dans mapping Notion (`notion-target-content-map.md`).

**v2.0** : implémentation moteurs + Notion opérationnelle — hors périmètre v1.1.

## 10. Estimation d'effort (indicatif)

| Phase | Commits | Complexité |
|-------|---------|------------|
| 1 — 6 référentiels architecture | 1–2 | Élevée (gros fichiers Notion export) |
| 2 — Engineering principles | 1 | Faible |
| 3 — Operating model | 1 | Moyenne |
| 4–6 — Nouveaux docs | 3 | Moyenne |
| 7–9 — Cross-ref + index | 2 | Faible |

Total estimé : **8–9 commits** sur branche dédiée, sans refonte arborescence.

## Update — Capitalization Inputs Inventory

Un inventaire détaillé des apports de capitalisation v1.1 a été produit avant mise à jour des documents fondateurs.

**Livrables :**

- `v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` — 14 sections, classification par catégorie et par document cible
- `v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` — impact, risque, priorité, ordre recommandé

Il couvre :

- Interv360 ;
- SFIA Fast Track ;
- workspace cleanup PR #81 ;
- audits et REX ;
- prompts ;
- templates ;
- practices ;
- automatisation ChatGPT ↔ Cursor ;
- knowledge / Notion layer.

**Décision :** apports suffisamment identifiés — prêt pour consolidation v1.1.

Cet inventaire doit servir de référence avant toute modification des documents fondateurs.

## Update — P0 Foundation Consolidation Started

The P0 foundation consolidation has started.

**Updated documents:**

- `docs/architecture/sfia-repository-blueprint.md`
- `docs/architecture/sfia-platform-architecture.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `docs/architecture/sfia-domain-model.md`
- `docs/architecture/sfia-meta-model.md`

**Remaining next steps:**

- Decision Engine v1.1;
- Engineering Principles v1.1;
- ChatGPT ↔ Cursor Operating Model;
- Rules & Guardrails;
- Automation engine specifications;
- Knowledge Layer.

## Update — v1.1 Consistency Reserves Addressed

The minor consistency reserves identified after the P0 consolidation have been addressed.

Clarifications added:

- v1.1 sections prevail over v1.0 content in case of tension;
- Git repository is the operational source of truth;
- Notion is a curated knowledge layer, not a raw mirror;
- v1.0 delivery pipeline is the strategic model;
- v1.1 Fast Track pipeline is the current operational model;
- Domain Model and Meta Model use English canonical object names with French explanations allowed;
- ChatGPT ↔ Cursor Operating Model remains the next required foundation document.

## Update — ChatGPT Cursor Operating Model Created

The SFIA ChatGPT ↔ Cursor Operating Model has been created as a v1.1 foundation document.

Document:

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`

It defines:

- human / ChatGPT / Cursor / Git / GitHub PR / Notion responsibilities;
- the operational loop;
- prompt as contract;
- prompt structure;
- operating guardrails;
- validation decisions;
- maturity levels;
- automation trajectory.

This document is required before creating the automation engine specifications.

## Update — P1 Core Foundations Created

The first P1 core foundation documents have been created:

- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`

They define:

- canonical SFIA rules and guardrails;
- repository, ChatGPT/Cursor, Notion and automation constraints;
- the Documentation Routing Matrix;
- required sources and target folders by phase or context;
- Knowledge Layer principles;
- repo → knowledge mapping;
- Notion as a curated business knowledge layer;
- publication rules and maturity criteria.

The Operating Model has been updated to reference the Documentation Routing Matrix as an input for Prompt as Contract.

Remaining P1 documents:

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- optional: `method/sfia-fast-track/automation/sfia-documentation-engine.md`
## Update — Decision and Engineering Foundations Updated

The following foundation documents have been updated to v1.1:

- `docs/architecture/sfia-decision-engine.md`
- `docs/foundation/sfia-engineering-principles.md`

The Engineering Principles are now positioned as the normative execution reference for SFIA.

All cycles, prompts, repository changes, documentation updates, project deliveries, knowledge publication activities, automation initiatives and ChatGPT ↔ Cursor interactions must comply with them when applicable.

The Decision Engine now formalizes:

- GO / NO-GO decisions;
- reserve classification;
- ADR vs operational decision rules;
- ChatGPT ↔ Cursor decision responsibilities;
- pre-cycle and post-cycle audits;
- PR and post-merge decisions;
- capitalization decisions;
- Notion readiness decisions;
- decision anti-patterns.

Lightweight Engineering Principles references have also been added to key foundation documents.

Remaining P1 documents:

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- optional: `method/sfia-fast-track/automation/sfia-documentation-engine.md`
## Update — Prompt Generation Engine Created

The following P1 automation engine specification has been created:

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`

It defines how SFIA transforms a human intention or cycle need into a Cursor execution prompt.

The Prompt Generation Engine applies:

- Engineering Principles;
- ChatGPT ↔ Cursor Operating Model;
- Rules & Guardrails;
- Knowledge Layer and Documentation Routing Matrix;
- Decision Engine;
- prompt catalog;
- automation architecture.

It defines:

- inputs;
- outputs;
- mandatory prompt structure;
- generation workflow;
- prompt families;
- generation rules;
- guardrails;
- decision and reserve handling;
- validation criteria;
- anti-patterns;
- maturity model.

Remaining P1 automation engine specifications:

- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- optional: `method/sfia-fast-track/automation/sfia-documentation-engine.md`
## Update — Repository Execution Engine Created

The following P1 automation engine specification has been created:

- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`

It defines how SFIA executes a Cursor prompt in the repository in a controlled, traceable and validable way.

The Repository Execution Engine applies:

- Engineering Principles;
- Prompt Generation Engine;
- ChatGPT ↔ Cursor Operating Model;
- Rules & Guardrails;
- Knowledge Layer and Documentation Routing Matrix;
- Repository Blueprint;
- Delivery Pipeline;
- Decision Engine;
- automation architecture.

It defines:

- inputs;
- outputs;
- execution workflow;
- mandatory pre-checks;
- execution rules;
- protected paths;
- untracked files handling;
- diff handling;
- commit rules;
- PR readiness;
- post-merge readiness;
- standard execution report;
- validation criteria;
- anti-patterns;
- maturity model.

Remaining P1 automation engine specifications:

- `method/sfia-fast-track/automation/sfia-validation-engine.md`
- optional: `method/sfia-fast-track/automation/sfia-documentation-engine.md`
## Update — Validation Engine Created

The following P1 automation engine specification has been created:

- `method/sfia-fast-track/automation/sfia-validation-engine.md`

It defines how SFIA validates prompts, repository execution, diffs, commits, deliverables, PR readiness, post-merge traces, capitalization and Notion preparation.

The Validation Engine applies:

- Engineering Principles;
- Decision Engine;
- Prompt Generation Engine;
- Repository Execution Engine;
- ChatGPT ↔ Cursor Operating Model;
- Rules & Guardrails;
- Knowledge Layer and Documentation Routing Matrix;
- Repository Blueprint;
- Delivery Pipeline;
- automation architecture;
- validation and guardrail checklists.

It defines:

- inputs;
- outputs;
- validation scope;
- validation workflow;
- prompt validation;
- repository execution validation;
- generic and project-specific protected paths validation;
- diff validation;
- commit validation;
- PR readiness validation;
- post-merge validation;
- capitalization validation;
- Notion preparation validation;
- SFIA decisions;
- reserve classification;
- standard validation report;
- validation criteria;
- anti-patterns;
- maturity model.

All three P1 automation engine specifications are now available:

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

Remaining follow-up:

- update `method/sfia-fast-track/automation/sfia-automation-architecture.md` to v1.1;
- consolidate validation checklists;
- consolidate `prompts/prompt-catalog.md`;
- prepare P2 cross-references.
## Update — Automation Architecture Updated to v1.1

`method/sfia-fast-track/automation/sfia-automation-architecture.md` has been updated to v1.1.

The document now acts as the synthesis reference for SFIA automation architecture and points to the three P1 engine specifications:

- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/automation/sfia-repository-execution-engine.md`
- `method/sfia-fast-track/automation/sfia-validation-engine.md`

The updated architecture clarifies:

- SFIA v1.1 automation remains non-autonomous;
- the P1 engines are specifications, not executable autonomous components;
- Engineering Principles are mandatory for automation initiatives;
- human validation cannot be bypassed;
- the v1.1 automation chain is:
  - Prompt Generation Engine;
  - Repository Execution Engine;
  - Validation Engine;
- `sfia-documentation-engine.md` remains optional and should only be created if a future cycle validates the need.

Remaining follow-up:

- consolidate validation checklists;
- consolidate `prompts/prompt-catalog.md`;
- prepare P2 cross-references;
- prepare SFIA v2.0 automation trajectory after v1.1 stabilization.
## Update — Validation Checklist Created

The following operational checklist has been created:

- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`

It applies the SFIA Validation Engine v1.1 to real cycles.

The checklist covers:

- Cursor prompt validation;
- Engineering Principles compliance;
- repository execution validation;
- protected path validation;
- diff validation;
- commit validation;
- deliverable validation;
- PR readiness;
- post-merge validation;
- capitalization validation;
- Notion preparation validation;
- reserve classification;
- standard validation report;
- anti-patterns.

It is the operational bridge between the Validation Engine specification and day-to-day SFIA cycle validation.

Remaining follow-up:

- use the checklist on upcoming cycles;
- consolidate other checklists if necessary;
- consolidate `prompts/prompt-catalog.md`;
- prepare P2 cross-references.
## Update — Prompt Catalog Created

The following prompt catalog has been created or consolidated:

- `prompts/prompt-catalog.md`

It provides the first SFIA v1.1 candidate catalog of reusable prompt families and prompt cards.

The catalog includes:

- a mini audit of existing prompt inputs;
- common SFIA prompt principles;
- standard prompt card structure;
- prompt families;
- reusable prompt cards;
- common guardrails;
- expected validation;
- priority full templates to create later;
- anti-patterns;
- next steps.

The catalog operationalizes the Prompt Generation Engine and connects it with:

- Engineering Principles;
- Repository Execution Engine;
- Validation Engine;
- Validation Checklist;
- Rules & Guardrails;
- Knowledge Layer.

This first version does not attempt to create every full prompt template.

Remaining follow-up:

- create full templates for priority prompt cards;
- use the catalog on upcoming cycles;
- update the catalog after real usage;
- prepare P2 cross-references after the prompt templates cycle.
## Update — Prompt Templates Created

The priority full prompt templates from the SFIA Prompt Catalog have been created in:

- `prompts/templates/`

The templates cover:

- Create Foundation Document;
- Update Document to v1.1;
- Create Operational Checklist;
- Validate Cursor Result;
- Validate PR Readiness;
- Prepare PR Summary;
- Write Post-Merge Status;
- Capitalize Method Asset;
- Prepare Notion Mapping;
- Perform Safe Repository Cleanup.

This completes the first operational template layer of the SFIA Prompt Catalog v1.1.

The Prompt Catalog remains the index of prompt families and prompt cards.

The `prompts/templates/` folder now contains reusable operational skeletons that must be adapted before execution.

Remaining follow-up:

- use these templates in upcoming cycles;
- update templates after real usage;
- reconcile pilot Interv360 prompt families with the v1.1 families;
- prepare P2 cross-references.
## Update — P2 Cross-Reference Audit Created

The following audit has been created:

- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md`

It identifies the remaining P2 cross-reference and capitalization index updates required before SFIA foundation v1.1 closure.

Recommended follow-up:

1. P2.1 Core and architecture cross-references;
2. P2.2 Capitalization indexes and completeness matrix;
3. final foundation v1.1 closure decision.
## Update — P2.1 Cross-References Added

The P2.1 cross-reference cycle has aligned the following documents with SFIA v1.1:

- `method/sfia-fast-track/core/sfia-global-capitalization.md`
- `method/sfia-fast-track/core/sfia-rules-update.md`
- `docs/architecture/README.md`

The update clarifies:

- `sfia-global-capitalization.md` as operational evidence / capitalization proof;
- `sfia-rules-update.md` as historical consolidation trace;
- `sfia-rules-and-guardrails.md` as the current operational rules reference;
- `docs/architecture/README.md` as the v1.1 architecture index connected to Fast Track references.

Remaining follow-up:

- P2.2 capitalization indexes and completeness matrix;
- P2.3 foundation v1.1 closure decision.

## Update — P2.2 Capitalization Indexes Updated

The P2.2 cycle updates capitalization indexes and completeness tracking after:

- Prompt Catalog creation;
- Prompt Templates creation;
- P2 Cross-Reference Audit;
- P2.1 Core and Architecture Cross-References.

The foundation v1.1 consolidation is structurally complete.

Formal closure remains pending P2.3.
