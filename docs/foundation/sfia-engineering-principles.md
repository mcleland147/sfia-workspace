---
source: Notion / SFIA Architecture
status: foundation
sync: manual-export
version: v1.1
updated_after: SFIA foundation v1.1 consolidation
scope: engineering principles
---

# SFIA Engineering Principles v1.1

**Version:** v1.1
**Status:** Foundation document
**Updated after:** SFIA foundation v1.1 consolidation
**Scope:** Engineering principles

## Préambule

La SFIA est une plateforme d'ingénierie dont l'objectif est de transformer une idée en un produit, un composant ou une solution de manière structurée, traçable et réutilisable.

Ces principes constituent le cadre de référence de tous les projets réalisés avec la SFIA.

## v1.1 Consistency Rule

SFIA v1.1 preserves the historical foundation content while adding operational rules derived from Interv360, SFIA Fast Track, workspace consolidation and the ChatGPT ↔ Cursor operating model.

When v1.0 and v1.1 formulations are in tension, the v1.1 operational clarification prevails for current SFIA execution.

Historical content remains useful for context, but current cycles, prompts, repository changes, documentation updates, knowledge publication and automation initiatives must follow the v1.1 engineering principles.

## v1.1 Normative Position

The SFIA Engineering Principles are the highest-level execution principles for SFIA.

All SFIA cycles, prompts, repository changes, documentation updates, project deliveries, knowledge publications, automation initiatives and ChatGPT ↔ Cursor interactions must comply with these principles when applicable.

When a lower-level document introduces an operational rule, that rule must remain consistent with the Engineering Principles.

In case of tension:

1. `docs/foundation/sfia-engineering-principles.md` prevails at principle level;
2. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` defines operational constraints;
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` defines ChatGPT ↔ Cursor execution;
4. `method/sfia-fast-track/core/sfia-knowledge-layer.md` defines documentation routing and knowledge publication;
5. `docs/architecture/2026-06-27-sfia-decision-engine.md` arbitrates exceptions, trade-offs and explicit decisions.

# 1. Les besoins réels avant les idées

La SFIA évolue uniquement pour répondre à un besoin identifié sur un projet réel.

Aucune fonctionnalité n'est développée "au cas où".

# 2. Une seule tâche à la fois

Chaque chantier possède un objectif clair.

Un chantier est terminé avant d'en ouvrir un autre.

# 3. Concevoir avant de développer

Toute implémentation est précédée d'une phase de conception.

L'architecture guide le développement, jamais l'inverse.

# 4. La simplicité est une exigence

La solution la plus simple répondant au besoin est privilégiée.

Chaque nouvelle complexité doit être justifiée.

# 5. Les composants sont autonomes

Chaque composant possède son propre cycle de vie :
- Conception
- Développement
- Tests
- Documentation
- Version
- Clôture

# 6. Les décisions sont tracées

Toute décision structurante est documentée dans un ADR.

Aucune décision importante ne repose uniquement sur les échanges.

# 7. Le référentiel est la source de vérité

Notion constitue le référentiel officiel de la plateforme.

Toute documentation durable y est centralisée.

# 8. Le code appartient au dépôt Git

Le code, les scripts et les versions sont gérés exclusivement dans Git.

Le référentiel documentaire ne remplace jamais le dépôt de code.

# 9. Chaque amélioration est mesurable

Une amélioration doit apporter au moins un des bénéfices suivants :
- simplification ;
- robustesse ;
- réutilisabilité ;
- gain de temps ;
- réduction du risque.

# 10. Tester avant de publier

Aucune version n'est publiée sans validation.

Les tests sont considérés comme faisant partie intégrante du composant.

# 11. Industrialiser ce qui est récurrent

Une tâche répétitive est automatisée uniquement lorsqu'elle devient suffisamment fréquente pour justifier son coût de développement.

# 12. Le référentiel évolue en continu

La SFIA n'est jamais considérée comme figée.

Les retours d'expérience, les projets et les expérimentations alimentent son évolution de manière continue.

# 13. Les outils ont des responsabilités claires

- ChatGPT : conception, architecture, analyse et aide à la décision.
- Cursor : développement et implémentation.
- Notion : référentiel de connaissance et gouvernance.
- Git : gestion du code source et des versions.

Chaque outil possède un rôle précis et complémentaire.

# 14. Construire pour être réutilisé

Tout artefact produit dans la SFIA doit pouvoir être réutilisé dans un autre projet avec un minimum d'adaptation.

# 15. La plateforme sert les projets

La SFIA n'est pas une finalité.

Sa raison d'être est de permettre de concevoir, développer et maintenir des projets de meilleure qualité, plus rapidement et avec une gouvernance cohérente.

---

# v1.1 Update — Fast Track Engineering Principles

SFIA v1.1 applies the following engineering principles.

## 1. One cycle, one useful result

A SFIA cycle must produce one useful and identifiable result.

A cycle can produce:

- a validated document;
- a repository cleanup;
- an audit;
- a delivery artifact;
- a post-merge status;
- a reusable prompt;
- a template;
- a checklist;
- a practice;
- a capitalization artifact.

SFIA must avoid unnecessary administrative micro-cycles.

When a process becomes too long, the cycle must ask:

1. does this process create value for SFIA?
2. if yes, what is the value and should it be preserved?
3. if no, how can the process be accelerated or removed?

## 2. Repository first

The Git repository is the operational source of truth.

Notion is a curated knowledge layer, not a raw mirror of the repository.

Any official SFIA foundation, method, practice, template, prompt, audit, REX, roadmap or delivery artifact must have a traceable repository source.

## 3. Prompt as contract

A Cursor prompt is an execution contract.

It must define:

- objective;
- repository;
- branch;
- expected latest commit;
- SFIA phase or context;
- reference sources;
- target folder;
- expected capitalization type;
- scope;
- out of scope;
- files to read;
- files to modify;
- forbidden paths;
- expected actions;
- verification commands;
- expected commit;
- expected result.

Cursor must not improvise outside the execution contract.

## 4. Human validation first

AI assists. Cursor executes. Humans decide.

Human validation is required for:

- scope validation;
- significant repository changes;
- push;
- PR creation;
- merge;
- Notion publication;
- automation activation;
- architectural trade-offs;
- sensitive project or method decisions.

## 5. Guardrails before execution

Before any significant execution, the cycle must define:

- scope;
- out of scope;
- reference sources;
- target folder;
- forbidden paths;
- verification commands;
- validation decision expected;
- capitalization target.

Execution without clear guardrails is not SFIA-compliant.

## 6. Documentation routing by default

Every produced document must be routed according to the Documentation Routing Matrix defined in:

- `method/sfia-fast-track/core/sfia-knowledge-layer.md`

Every prompt must identify the reference sources and the target folder before asking Cursor to produce or modify documentation.

## 7. Figma Design-first for premium UI

For premium UI work, design must be stabilized before implementation.

The expected sequence is:

1. design exploration;
2. Figma or design reference;
3. human visual validation;
4. Cursor implementation;
5. visual review;
6. delivery validation.

Cursor must not freely interpret premium UI intent without a stable design source.

## 8. Backend, API, auth and CI in dedicated cycles

Backend, API, authentication, CI and infrastructure-sensitive changes must not be mixed with unrelated UI, documentation or cleanup cycles.

They require dedicated scope, validation and guardrails.

## 9. Capitalization by default

Every major cycle must produce or update a capitalization trace.

Capitalization can take the form of:

- audit;
- REX;
- post-merge status;
- foundation update;
- method update;
- practice;
- checklist;
- template;
- prompt;
- roadmap item;
- archive map.

## 10. Controlled automation

SFIA automation is progressive.

SFIA v1.1 remains a human-validated, prompt-driven and repository-first model.

No automation engine is considered autonomous unless explicitly designed, validated and governed.

Future automation must remain:

- traceable;
- reviewable;
- disableable;
- scoped;
- human-governed.

## 11. Quality by evidence

A document, practice, prompt, template, engine or architectural decision can only be promoted when supported by evidence.

Evidence can include:

- audit;
- tests;
- release readiness;
- PR review;
- merge commit;
- tag;
- project usage;
- REX;
- documented reserve resolution.

## v1.1 Anti-patterns

| Anti-pattern | Risk |
|--------------|------|
| Process for process | Administrative load without SFIA value |
| Vague prompt | Cursor improvises outside scope |
| Cycle too broad | PR becomes hard to review |
| Documentation without routing | Artifact becomes hard to find |
| Repository change without source | Knowledge is not traceable |
| UI without stable design | Visual drift and rework |
| Backend mixed with UI/doc cycle | Hidden regression risk |
| Raw Notion sync | Non-curated and misleading publication |
| Automation before guardrails | Loss of control |
| Decision without evidence | Weak governance |

## v1.1 Related Documents

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `docs/architecture/2026-06-27-sfia-decision-engine.md`
- `docs/architecture/sfia-delivery-pipeline.md`
- `docs/architecture/sfia-repository-blueprint.md`
- `docs/architecture/sfia-platform-architecture.md`

## v1.1 Decision

`docs/foundation/sfia-engineering-principles.md` is the normative engineering reference for SFIA execution.

All SFIA cycles, prompts, repository changes, documentation updates, project deliveries, knowledge publications, automation initiatives and ChatGPT ↔ Cursor interactions must comply with these principles when applicable.

Lower-level documents may specialize these principles, but must not contradict them.
