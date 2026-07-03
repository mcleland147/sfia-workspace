# SFIA v1.1 — Foundation Impact Matrix

**Date** : 2026-07-03  
**Branche** : `capitalization/sfia-documentation-completeness`  
**Inventaire associé** : `sfia-v1.1-capitalization-inputs-inventory.md`  
**Mode** : planification — aucun document fondateur source modifié

## 1. Objectif

Cette matrice indique précisément quels apports de capitalisation doivent être intégrés dans chaque document fondateur SFIA.

Elle complète l'inventaire des apports par une évaluation d'impact, de risque et de priorité.

## 2. Matrice — documents fondateurs existants

| Document fondateur | Impacts v1.1 à intégrer | Niveau d'impact | Risque | Priorité |
|--------------------|-------------------------|-----------------|--------|----------|
| `sfia-platform-architecture.md` | Cartographie repo post-PR #81 ; couches `method/`, `docs/practices/`, `prompts/`, `projects/`, `exports/` ; distinction Git (détail) vs Notion (éditorial) ; module Projects ↔ Interv360 ; lien automation / application factory | **Fort** | Effacer vision Notion-native v1.0 sans section historique ; fichier ~2100 lignes | **P0** |
| `sfia-decision-engine.md` | Décisions GO/NO-GO FT ; réserves non bloquantes (PR #81, audit Interv360) ; arbitrages MVP ; lien ADR-001–008 ; audit pré-cycle ; décision consolidation vs Notion | **Moyen** | Surcharge si import ADR complets — résumer patterns | **P1** |
| `sfia-delivery-pipeline.md` | Cycle FT : un objectif, PR unique, post-merge, releases ; pattern lots MVP (6 lots) ; séquence Interv360 00–09 ; capitalisations cycles ; note Controlled Delivery complémentaire | **Fort** | Confusion pipeline théorique v1.0 vs opérationnel — clarifier deux niveaux | **P0** |
| `sfia-domain-model.md` | Objets Cycle, Prompt, Template, Practice, Role Method, Reference Project, Knowledge Page, Audit, REX ; double référentiel présentation/métier ; statuts Draft/Official | **Fort** | Casser identifiants v1.0 — étendre, ne pas renommer | **P0** |
| `sfia-meta-model.md` | Relations prompts ↔ templates ↔ practices ↔ FT ↔ Notion ; templates FT vs plateforme ; archives vs actif ; maturité Role Method | **Moyen** | Complexité relations — diagramme recommandé | **P1** |
| `sfia-repository-blueprint.md` | Alignement PR #81 : `method/complementary/`, `docs/practices/`, suppression `methods/`, `docs/methods/` ; règle archives ; index README | **Fort** | Chemins obsolètes actifs dans v1.0 — correction prioritaire | **P0** |
| `sfia-engineering-principles.md` | Garde-fous FT ; Cursor/ChatGPT ; Notion non auto ; validation humaine ; Figma Design-first ; séparation cycles UI/backend | **Moyen** | Dupliquer rules-update — renvoyer vers doc unifié P1 | **P1** |
| `sfia-automation-architecture.md` | Version v1.1 ; renvois specs moteurs ; Niveau 0 actuel ; frontière v1.1 spec / v2.0 impl ; garde-fous exécutables §8 | **Moyen** | Document déjà récent — enrichissement ciblé | **P1** |
| `sfia-global-capitalization.md` | Cross-références v1.1 architecture ; statut « preuve opérationnelle » vs « référentiel conceptuel » ; lien operating model | **Faible** | Redondance si recopie platform-architecture | **P2** |
| `sfia-rules-update.md` | Cross-référence `sfia-rules-and-guardrails.md` ; statuts réserves audit ; pointer checklists | **Faible** | Fusion destructive — conserver jusqu'à P1 rules doc | **P2** |

## 3. Matrice — nouveaux documents nécessaires

| Nouveau document | Justification | Sources à utiliser | Niveau d'impact | Risque | Priorité |
|------------------|---------------|--------------------|-----------------|--------|----------|
| `sfia-chatgpt-cursor-operating-model.md` | Lacune P0 — boucle décrite mais dispersée dans 4+ docs | `automation` §2–3, `global-capitalization` §13, `figma-design-first-ui-method` §6, `prompt-catalog` §6, cycles Interv360 | **Fort** (création) | Sous-spécifier la boucle ; oublier garde-fous humains | **P0** |
| `sfia-rules-and-guardrails.md` | 3 sources complémentaires sans doc unifié | `engineering-principles`, `rules-update`, 3 checklists | **Moyen** | Duplication si fusion destructive | **P1** |
| `sfia-prompt-generation-engine.md` | Moteur décrit §5.5 sans spec autonome | `automation` §5.5, `prompt-catalog`, `cycle-template`, `global-capitalization` §13 | **Moyen** | Confondre spec et implémentation v2.0 | **P1** |
| `sfia-validation-engine.md` | Checklists opérationnelles sans spec moteur | `automation` §5.7, `validation-checklist`, `guardrails-checklist`, audit templates | **Moyen** | Sur-promettre automatisation v1.1 | **P1** |
| `sfia-repository-execution-engine.md` | Blueprint structure sans spec comportement | `automation` §5.6, `repository-blueprint`, `rules-update` §3–5, templates PR/post-merge | **Moyen** | Chevauchement Delivery Pipeline | **P1** |
| `sfia-knowledge-layer.md` | Notion préparé mais pas de doc couche connaissance | `notion-target-content-map`, `notion-publication-plan`, `exports/notion/README`, PR #81 | **Moyen** | Déclencher sync Notion prématurée | **P1** |

## 4. Synthèse d'impact par catégorie de capitalisation

| Catégorie | Documents impactés (nb) | Impact global | Action v1.1 |
|-----------|-------------------------|---------------|-------------|
| Vision SFIA | 3 | Moyen | Enrichir platform-architecture + cross-ref capitalization |
| Architecture plateforme | 2 | Fort | Repository Blueprint + Platform Architecture |
| Decision Engine | 2 | Moyen | Decision Engine + nouveau operating model (arbitrages) |
| Delivery Pipeline | 4 | Fort | Delivery Pipeline + templates/checklists référencés |
| Domain Model | 3 | Fort | Domain Model + Metamodel + practices |
| Metamodel | 2 | Moyen | Metamodel + Knowledge Layer |
| Repository Blueprint | 2 | Fort | Repository Blueprint + Repository Execution Engine |
| Rules & Guardrails | 3 | Moyen | Engineering Principles + nouveau rules doc |
| ChatGPT ↔ Cursor | 1 (nouveau) | Fort | Operating model P0 |
| Automation Engines | 4 (3 nouveaux + automation) | Moyen | Specs P1 + automation v1.1 renvois |
| Knowledge / Notion | 2 | Moyen | Knowledge Layer P1 |
| UX/UI | 3 | Moyen | Engineering Principles + Delivery Pipeline + figma method ref |
| Audit / REX | 3 | Faible | Delivery Pipeline + Decision Engine patterns |
| Role / Métier | 2 | Faible | Domain Model + Metamodel (modèle, pas contenu Draft) |
| Reference Project | 6+ | Faible | Références ciblées Interv360 — pas import massif |

## 5. Risques transverses v1.1

| Risque | Mitigation |
|--------|------------|
| Effacement contenu v1.0 Notion exports | Section « Historique v1.0 » + Git history |
| Terminologie SFA résiduelle | Revue terminologique SFIA exclusive dans nouveaux contenus |
| Duplication rules / principles / checklists | Doc unifié P1 avec renvois — ne pas supprimer sources |
| Confusion v1.1 spec vs v2.0 implémentation | Frontière explicite dans automation + moteurs |
| Scope creep vers Notion sync | Garde-fous plan consolidation §8 |
| Import massif Interv360 | Résumer patterns — citer chemins, pas copier |

## 6. Ordre recommandé

| Ordre | Action | Documents | Justification |
|-------|--------|-----------|---------------|
| **1** | Mettre à jour Repository Blueprint v1.1 | `sfia-repository-blueprint.md` | Fondation structurelle — débloque tous les autres ; chemins obsolètes P0 |
| **2** | Mettre à jour Platform Architecture + Delivery Pipeline v1.1 | 2 docs architecture | Vision + cycle opérationnel — cœur v1.1 |
| **3** | Mettre à jour Domain Model + Metamodel v1.1 | 2 docs architecture | Objets et relations — prérequis Knowledge Layer et practices |
| **4** | Mettre à jour Decision Engine v1.1 | `sfia-decision-engine.md` | Patterns décisionnels prouvés Interv360 |
| **5** | Mettre à jour Engineering Principles v1.1 | `sfia-engineering-principles.md` | Garde-fous transverses avant rules unifiées |
| **6** | Créer ChatGPT ↔ Cursor Operating Model | **nouveau P0** | Lacune centrale — débloque moteurs et automation |
| **7** | Créer Rules & Guardrails unifié | **nouveau P1** | Consolide 3 sources sans fusion destructive |
| **8** | Créer specs 3 moteurs (Prompt, Validation, Repository Execution) | **3 nouveaux P1** | Extraction automation §5.5–5.7 |
| **9** | Créer Knowledge Layer | **nouveau P1** | Prépare Notion sans sync |
| **10** | Mettre à jour Automation Architecture v1.1 (renvois) | `sfia-automation-architecture.md` | Pivot — référencer specs créées |
| **11** | Cross-références Global Capitalization + Rules Update | 2 docs core | Relier opérationnel ↔ conceptuel |
| **12** | Mettre à jour index capitalisation + README architecture | README, audit | Clôture passe v1.1 |

## 7. Estimation d'effort par ordre

| Ordre | Commits suggérés | Complexité |
|-------|------------------|------------|
| 1–4 | 1–2 | Élevée (gros fichiers architecture) |
| 5 | 1 | Faible |
| 6 | 1 | Moyenne (doc nouveau structurant) |
| 7–9 | 2–3 | Moyenne |
| 10–12 | 2 | Faible |

**Total estimé : 8–9 commits** sur branche `capitalization/sfia-foundation-v1.1`.

## 8. Critères de complétude matrice

- [ ] Chaque apport inventaire §3 a un document cible identifié
- [ ] Chaque document fondateur a un niveau d'impact et une priorité
- [ ] Les 6 nouveaux documents ont des sources listées
- [ ] L'ordre recommandé respecte les dépendances (Blueprint → Platform → Domain → Operating Model → Moteurs)
- [ ] Les risques transverses ont des mitigations
- [ ] Aucun apport v2.0 (moteurs exécutables, Notion sync) n'est classé P0 v1.1

## 9. Décision

> La matrice d'impact confirme que la consolidation v1.1 peut démarrer après validation humaine de l'inventaire des apports.

**Documents P0 v1.1 (impact fort, priorité immédiate) :**

1. `sfia-repository-blueprint.md`
2. `sfia-platform-architecture.md`
3. `sfia-delivery-pipeline.md`
4. `sfia-domain-model.md`
5. **nouveau** `sfia-chatgpt-cursor-operating-model.md`

## Update — P0 Foundation Consolidation Started

The P0 foundation consolidation has started on branch `capitalization/sfia-foundation-v1.1`.

**Updated documents:**

- `docs/architecture/sfia-repository-blueprint.md` — commit `dd01fcf`
- `docs/architecture/sfia-platform-architecture.md` — commit `bea4609`
- `docs/architecture/sfia-delivery-pipeline.md` — commit `bea4609`
- `docs/architecture/sfia-domain-model.md` — commit `2c70485`
- `docs/architecture/sfia-meta-model.md` — commit `2c70485`

**Remaining next steps:**

- Decision Engine v1.1;
- Engineering Principles v1.1;
- ChatGPT ↔ Cursor Operating Model *(dedicated pass — placeholder renvoi added in platform architecture)*;
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
