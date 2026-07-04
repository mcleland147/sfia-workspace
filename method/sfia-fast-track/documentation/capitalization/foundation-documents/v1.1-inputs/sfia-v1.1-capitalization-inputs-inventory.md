# SFIA v1.1 — Capitalization Inputs Inventory

**Date** : 2026-07-03  
**Branche** : `capitalization/sfia-documentation-completeness`  
**Mode** : inventaire uniquement — aucun document fondateur source modifié  
**Plans associés** : `../v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md`, `../v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`

## 1. Objectif

Ce document inventorie tous les apports de capitalisation à prendre en compte avant la mise à jour v1.1 des documents fondateurs SFIA.

Il ne modifie pas les documents fondateurs.

Il sert de base de travail pour enrichir :

- Platform Architecture ;
- Decision Engine ;
- Delivery Pipeline ;
- Domain Model ;
- Metamodel ;
- Repository Blueprint ;
- Engineering Principles ;
- Automation Architecture ;
- Rules & Guardrails ;
- futurs documents canoniques.

## 2. Sources analysées

### 2.1. Interv360 (projet de référence)

| Famille | Fichiers / zones | Apports principaux |
|---------|------------------|-------------------|
| Racine projet | `projects/interv360/README.md` | Séquence 00–09, règle une phase = un numéro, cas référence SFIA Fast Track |
| Cadrage | `01-cadrage/` | Arbitrages MVP, framing métier |
| Architecture | `02-architecture/` — 8 ADR (ADR-001 à ADR-008 + candidat ADR-009) | Contrats API simulés, erreurs intégration, email sécurisé, notifications, signatures, rétention, dashboard séparé |
| Design | `03-design/` | Instructions Figma, design system (exports Figma non suivis — hors sync) |
| Delivery | `04-delivery/premium-design-system.md` | Cycle UI premium, garde-fous backend/API, Figma Design-first opérationnel |
| Release | `05-release/mvp-release-readiness.md` | Pattern release readiness, tag `v0.1.0-mvp`, checklist Go/No-Go |
| Audit / REX | `06-audit-rex/current-application-audit.md`, `README.md` | Décision `APPLICATION_SAINE_AVEC_RESERVES`, dette premium/legacy, mapping DEM-248x / SAV-DEMO |
| Roadmap | `09-roadmap/` — 14 documents | MVP Final Roadmap, backend/auth/API framing, évolutions post-MVP (CRUD, auth, CRM — P2) |

### 2.2. SFIA Fast Track (méthode opérationnelle)

| Famille | Fichiers | Apports principaux |
|---------|----------|-------------------|
| Core | `sfia-global-capitalization.md`, `sfia-rules-update.md`, `sfia-architecture-standards.md`, `sfia-consolidation-roadmap.md` | 10 règles FT, prompts Cursor §13, standards frontend/backend/data, chantiers consolidation |
| Automation | `sfia-automation-architecture.md` | 10 moteurs conceptuels, 5 niveaux automatisation, garde-fous exécutables, boucle ChatGPT ↔ Cursor |
| Cycles | `interv360-mvp-delivery-capitalization.md`, `interv360-final-capitalization.md` | Pattern lot produit, post-merge léger, releases `v0.1.0-mvp` / `v0.2.0-premium-ui` |
| UI | `figma-design-first-ui-method.md` | Figma Design vs Make, prompt Cursor UI standard, séquence 8 étapes |
| Audit / REX | `audit-rex/interv360-application-rex.md` | Enseignements réutilisables, anti-patterns Figma Make |
| Templates | 6 templates (`cycle`, `pr-body`, `post-merge`, `audit`, `rex`, `mvp-delivery-pattern`) | Structures réutilisables pour industrialiser cycles |
| Checklists | `validation-checklist.md`, `guardrails-checklist.md`, `notion-publication-checklist.md` | Contrôles Git, code, docs, PR, post-merge |

### 2.3. Workspace cleanup PR #81

| Source | Apports |
|--------|---------|
| `pr-81-post-merge-status.md` | Structure repo validée, merge `7c0e865`, réserves non bloquantes |
| `final-architecture-review/sfa-workspace-final-architecture-audit.md` | Décision `GO AVEC RÉSERVES NON BLOQUANTES`, 494 fichiers md, séparation method/practices |
| `round-2/*`, `operational-cleanup-report.md`, `interv360-folder-normalization-audit.md` | Historique cleanup, normalisation phases Interv360 |
| `sfia-workspace-migration-plan.md`, `sfia-workspace-global-audit.md` | Trajectoire migration, état pré/post cleanup |

### 2.4. Audits et capitalisation documentaire

| Source | Apports |
|--------|---------|
| `sfia-documentation-capitalization-audit.md` | Décision `COMPLETE AVEC RÉSERVES`, maturité par domaine |
| `sfia-documentation-completeness-matrix.md` | Grille complétude par zone |
| `sfia-foundation-documents-audit.md` | Décision `FONDATIONS PARTIELLES`, 10 sources fondateurs fortes |
| `sfia-foundation-documents-inventory.md` | Inventaire 462 candidats, 102 prioritaires |
| `documentation-audit.md` | Baseline historique pré-Round 3 — à référencer, pas fusionner |
| `documentation-structure-target.md` | Cible structure documentaire |

### 2.5. Templates et checklists

| Emplacement | Contenu | Usage v1.1 |
|-------------|---------|------------|
| `method/sfia-fast-track/templates/` | 6 templates opérationnels FT | Delivery Pipeline, Validation Engine, Repository Execution |
| `docs/templates/` | 11 templates plateforme (architecture, process, ux-ui, penpot) | Domain Model, Metamodel, Role Methods |
| `method/sfia-fast-track/checklists/` | 3 checklists FT | Rules & Guardrails, Validation Engine |

### 2.6. Prompts

| Source | Apports |
|--------|---------|
| `prompts/prompt-catalog.md` | 14+ prompts candidats, 6 familles, structure cible prompt SFIA |
| `prompts/architecture/PROMPT-ARCH-001` | Draft — revue intégrations/erreurs |
| `prompts/security/PROMPT-SEC-001` | Draft — canal email sécurisé |
| `prompts/qa/qa-tester-prompt-family.md` | Famille QA — seul rôle avec prompts formalisés |
| `prompts/bpmn/`, `prompts/ux-ui/`, `prompts/architecture/` | Familles par discipline |

### 2.7. Pratiques et rôles

| Zone | Fichiers | Maturité |
|------|----------|----------|
| `docs/practices/roles/` | 6 Role Methods + README | 1 Official (QA), 5 Draft |
| `docs/practices/architecture/` | Méthode architecture fonctionnelle (3 fichiers) | OK |
| `docs/practices/process/` | BPMN (5 fichiers) | OK |
| `docs/practices/ux-ui/` | Reprise UX (3 fichiers) | OK |
| `docs/practices/methods-structure-check.md` | Contrôle arborescence | Diagramme §2 obsolète |

### 2.8. Controlled Delivery (méthode complémentaire)

| Source | Apports |
|--------|---------|
| `method/complementary/controlled-delivery/` — 14 fichiers | Standard delivery contrôlé, micro-cycles vs batch, REX Level 3 |
| Distinction FT vs Controlled Delivery | Delivery Pipeline — note complémentaire, pas fusion |

### 2.9. Archives et sources historiques utiles

| Source | Apports |
|--------|---------|
| `method/sfia-fast-track/archive/interv360-realization/` | Prompt family réalisation, historique pré-FT |
| `projects/interv360/archive/` | inc-* micro-incréments archivés — ne pas réimporter |
| `exports/notion/README.md` | Exports ≠ source de vérité, dry-run obligatoire |

### 2.10. Sources additionnelles analysées (non listées initialement)

| Source | Apports |
|--------|---------|
| `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` | 5 chantiers consolidation post-Interv360 |
| `method/sfia-fast-track/documentation/notion-target-content-map.md` | Structure Notion cible 11 sections, exclusions sync brut |
| `method/sfia-fast-track/documentation/notion-publication-plan.md` | Plan publication éditoriale |
| `docs/architecture/` (6 référentiels v1.0) | Base conceptuelle Notion — à enrichir, pas remplacer |
| `docs/foundation/sfia-engineering-principles.md` | 10 principes transverses v1.0 |
| Racine `README.md` | Point d'entrée workspace, Method Layers |

## 3. Synthèse des apports

| Catégorie | Apport clé | Source principale | Document cible v1.1 |
|-----------|------------|-------------------|---------------------|
| Vision SFIA | SFIA Fast Track validée ; cible application factory assistée IA ; deux couches conceptuelle (docs/architecture) + opérationnelle (method/) | `sfia-global-capitalization.md`, `sfia-automation-architecture.md` | `sfia-platform-architecture.md`, `sfia-global-capitalization.md` |
| Architecture de plateforme | Modules Core/Studio/Runtime/Knowledge/Lab/Projects + couches repo Git post-PR #81 | `sfia-platform-architecture.md`, `pr-81-post-merge-status.md` | `sfia-platform-architecture.md` |
| Decision Engine | GO/NO-GO, réserves non bloquantes, arbitrages MVP, ADR structurants | `current-application-audit.md`, ADR Interv360, `sfia-rules-update.md` | `sfia-decision-engine.md` |
| Delivery Pipeline | Un cycle = un objectif ; lots produit ; PR unique ; post-merge ; releases jalons | `interv360-mvp-delivery-capitalization.md`, `sfia-rules-update.md` | `sfia-delivery-pipeline.md` |
| Domain Model | Cycle, Prompt, Template, Practice, Role Method, Reference Project, Knowledge Page, Audit, REX | `prompt-catalog.md`, `docs/practices/`, cycles Interv360 | `sfia-domain-model.md` |
| Metamodel | Relations prompts ↔ templates ↔ practices ↔ méthode FT ↔ Notion ; statuts Draft/Official | `sfia-meta-model.md`, `docs/practices/roles/` | `sfia-meta-model.md` |
| Repository Blueprint | `method/`, `docs/practices/`, `prompts/`, `projects/`, `exports/` ; archives ; pas de `methods/` racine | `pr-81-post-merge-status.md`, final architecture audit | `sfia-repository-blueprint.md` |
| Rules & Guardrails | 10 règles FT + 10 principes engineering + 3 checklists | `sfia-rules-update.md`, `engineering-principles.md`, checklists | `sfia-engineering-principles.md`, **nouveau** `sfia-rules-and-guardrails.md` |
| ChatGPT ↔ Cursor | Boucle manuelle Niveau 0 ; prompts typés §13 ; rôle ChatGPT=cadrage/prompts, Cursor=exécution | `sfia-automation-architecture.md` §2–3, `sfia-global-capitalization.md` §13 | **nouveau** `sfia-chatgpt-cursor-operating-model.md` |
| Automation Engines | 10 moteurs conceptuels ; 3 prioritaires v1.1 (Prompt, Validation, Repository Execution) | `sfia-automation-architecture.md` §5 | Specs moteurs dédiées + `sfia-automation-architecture.md` v1.1 |
| Knowledge / Notion | Notion = IDE métier éditorialisé ; repo = source vérité ; pas miroir brut | `notion-target-content-map.md`, `exports/notion/README.md` | **nouveau** `sfia-knowledge-layer.md` |
| UX/UI | Figma Design-first ; Make = exploration ; prompt Cursor UI ; tokens/composants avant code | `figma-design-first-ui-method.md`, `premium-design-system.md` | `sfia-engineering-principles.md`, `sfia-delivery-pipeline.md` |
| Architecture applicative | Séparation frontend/backend/data ; ADR ; double référentiel présentation/métier | `sfia-architecture-standards.md`, ADR-001 à ADR-008, audit Interv360 | `sfia-domain-model.md`, `sfia-decision-engine.md` |
| Audit / REX | Audit pré-cycle majeur ; REX post-jalon ; décision `APPLICATION_SAINE_AVEC_RESERVES` | `current-application-audit.md`, `interv360-application-rex.md`, templates audit/rex | `sfia-delivery-pipeline.md`, `sfia-decision-engine.md` |
| Role / Métier Modeling | 6 Role Methods (1 Official QA) ; practices vs role methods vs prompts | `docs/practices/roles/`, `prompt-catalog.md` §4–7 | `sfia-domain-model.md`, `sfia-meta-model.md` |
| Templates / Checklists | 6 templates FT + 11 templates plateforme + 3 checklists FT | `templates/`, `checklists/`, `docs/templates/` | Delivery Pipeline, Validation Engine, Rules & Guardrails |
| Reference Project | Interv360 = preuve opérationnelle ; 299 docs projet ; tags v0.1.0 / v0.2.0 | `projects/interv360/`, cycles, audit-rex | Tous documents concernés (références ciblées) |
| P1/P2 Future Work | Moteurs exécutables, Notion sync, Role Methods Draft, payloads JSON CMP | Audits, roadmap 09 | v2.0 ou chantiers dédiés |

## 4. Apports issus d'Interv360

### 4.1. Projet de référence

- Interv360 est le **seul projet actif** dans `projects/` — cas de référence SFIA Fast Track documenté.
- Séquence phases **00–09** normalisée post-PR #81 ; une phase = un numéro ; archives séparées.
- Tags jalons : `v0.1.0-mvp`, `v0.2.0-premium-ui`.
- PR significatives capitalisées : #73 Premium UI, #74 Figma Design-first, #75 capitalisation finale.
- **Ne pas importer** les 299 fichiers projet dans les fondateurs — résumer et référencer.

### 4.2. Architecture applicative

- Stack frontend : React 19, Vite 6, TypeScript, Tailwind 4, Vitest (202 tests au audit).
- Stack backend : Express, SQLite, API REST `/api/v1` — **non modifié** pendant cycle Premium UI.
- Pattern repository : mode local / mode API via factory ; `VITE_INTERV360_DATA_SOURCE`.
- **8 ADR actifs** (ADR-001 à ADR-008) : contrats simulés, erreurs visibles, email sécurisé, notifications, signatures, rétention, dashboard séparé.
- Séparation `app/`, `domain/`, `data/`, `ui/premium/`, `ui/legacy/` — standard à généraliser dans architecture standards.
- **Double référentiel** DEM-248x (présentation) vs SAV-DEMO-00x (métier) — leçon domain model.

### 4.3. Delivery MVP / Premium UI

- **MVP** : 6 lots produit (Users, Audit Trail, Request Model, API Hardening, UX Finalization, Industrialization) → tag `v0.1.0-mvp`.
- **Premium UI** : cycle UI distinct `ui/interv360-premium-design-system` — zéro modification backend.
- Pattern : `Décision → Roadmap → Lots → PR/lot → Post-merge léger → Release readiness → Tag → Capitalisation`.
- Release readiness documentée (`mvp-release-readiness.md`) — template réutilisable.

### 4.4. UX / UI / Figma Design-first

- Figma Make utile en exploration ; **Figma Design = source vérité** pour UI premium.
- Cycle Premium a montré : habillage tardif insuffisant ; tokens/composants avant Cursor.
- Prompt Cursor UI standard dans `figma-design-first-ui-method.md` §6.
- Revue visuelle humaine obligatoire ; comparaison Figma vs localhost.
- Actions hors scope **désactivées** explicitement (Nouvelle demande, Export PDF, Catalogue).

### 4.5. Audit / REX

- Audit : décision **`APPLICATION_SAINE_AVEC_RESERVES`** — build OK, 202/202 tests, dette premium/legacy documentée.
- REX : enseignements sur Figma Make, coexistence legacy/premium, données présentation vs métier.
- Règle capitalisée : **audit avant cycle majeur**, **REX après jalon majeur**.
- Risques catalogués avant CRUD, auth, CRM, dashboard backend (tous = cycles dédiés futurs).

### 4.6. Roadmap post-MVP

- 14 documents `09-roadmap/` : auth, backend persistence, API contract, workflow extension, industrialisation.
- Tous classés **P2 Future Work** — cadrages futurs Interv360, pas intégration v1.1 fondateurs.
- Décision `interv360-next-product-axis.md` : suites = nouveaux cycles distincts avec cadrage explicite.

### 4.7. Ce qu'Interv360 prouve pour SFIA

| Preuve | Implication v1.1 |
|--------|------------------|
| Cycles courts + garde-fous | Delivery Pipeline opérationnel validé |
| PR unique par cycle | Repository Execution pattern |
| Post-merge documenté | Traçabilité décisionnelle |
| Releases sur jalons | Release Engine (v2.0) — pattern documenté v1.1 |
| Figma Design-first | Règle UI transversale |
| ChatGPT → Cursor manuel | Operating model à formaliser (P0) |
| 202 tests maintenus | Validation Engine critères |
| Documentation ~300 fichiers | Knowledge layer = sélection éditoriale, pas sync brut |

## 5. Apports issus du workspace cleanup PR #81

| Apport | Détail | Impact v1.1 |
|--------|--------|-------------|
| Structure repo réelle | `method/`, `docs/practices/`, `projects/`, `prompts/`, `exports/` | Repository Blueprint, Platform Architecture |
| Suppression `methods/` racine | → `method/complementary/controlled-delivery/` | Mettre à jour refs obsolètes dans docs v1.0 |
| Renommage `docs/methods/` | → `docs/practices/` | Domain Model, Metamodel, Knowledge Layer |
| Interv360 00–09 | Phases normalisées, archives isolées | Delivery Pipeline, Reference Project |
| Rôle des archives | `archive/` FT, `projects/interv360/archive/`, inc-* archivés | Repository Blueprint — règle archives |
| Rôle des audits | `documentation/workspace-audit/`, `capitalization/` | Decision Engine, post-merge |
| Post-merge obligatoire | Statuts PR documentés (#79, #81, etc.) | Delivery Pipeline, Repository Execution |
| Règle pas de sync brute Notion | `exports/notion/` ≠ source vérité | Knowledge Layer, Engineering Principles |
| Décision GO avec réserves | README phases manquants, payloads JSON obsolètes, documentation-audit stale | P1/P2 — pas bloquant v1.1 fondateurs |
| Séparation templates | FT (`method/.../templates/`) vs plateforme (`docs/templates/`) | Metamodel relations |

## 6. Apports issus de SFIA Fast Track

| Apport | Source | Document cible |
|--------|--------|----------------|
| Un cycle = un résultat utile | `sfia-rules-update.md` Règle 1 | Delivery Pipeline |
| Garde-fous explicites (autorisé/interdit/validations) | Règle 2, `guardrails-checklist.md` | Rules & Guardrails |
| PR unique par cycle | Règle 3, templates `pr-body-template.md` | Delivery Pipeline, Repository Execution |
| Post-merge obligatoire | Règle 4, `post-merge-template.md` | Delivery Pipeline |
| Audit avant cycle majeur | Règle 5, `audit-template.md` | Decision Engine |
| REX après jalon majeur | Règle 6, `rex-template.md` | Delivery Pipeline |
| Figma Design-first | Règle 7, `figma-design-first-ui-method.md` | Engineering Principles |
| Notion jamais automatique | Règle 8, `notion-publication-checklist.md` | Knowledge Layer |
| Backend/API cycle dédié | Règle 9, `sfia-architecture-standards.md` | Delivery Pipeline, Decision Engine |
| Automatisation progressive | Règle 10 | Automation Architecture |
| Conventions branches | `consolidation/`, `method/`, `ui/`, `docs/`, `fix/` | Repository Blueprint |
| Prompts Cursor standards | `sfia-global-capitalization.md` §13 (début cycle, validation PR, post-merge) | ChatGPT ↔ Cursor Operating Model |
| Anti-patterns | §14 global-capitalization (UI avant maquette, mélange scopes, Notion trop tôt) | Rules & Guardrails |
| 5 chantiers consolidation | `sfia-consolidation-roadmap.md` | Contexte — chantiers 1–4 exécutés, 5 en cours |

## 7. Apports issus de l'automatisation ChatGPT ↔ Cursor

### État actuel (Niveau 0 — Manuel assisté)

| Rôle | Responsabilités observées Interv360 |
|------|--------------------------------------|
| **ChatGPT** | Cadrage cycle, rédaction prompts Cursor, arbitrages, validation diff, body PR, post-merge, capitalisation |
| **Cursor** | Exécution fichiers, build/tests, commits, respect garde-fous si prompt explicite |
| **Humain** | Go/merge, revue visuelle Figma, décisions métier, validation finale |

### Boucle documentée

```text
Besoin → ChatGPT (cadrage + prompt) → Cursor (exécution) → Résultat
→ ChatGPT (validation + corrections) → Cursor (fix) → Commit → PR
→ Merge humain → Post-merge doc → Capitalisation
```

### Format des prompts

- Structure cycle : objectif, périmètre, hors scope, garde-fous, validations, branche, commit.
- Prompts typés : début cycle, validation PR, post-merge (`global-capitalization.md` §13).
- Prompt UI : Figma Design source vérité (`figma-design-first-ui-method.md` §6).
- Catalogue : 14 sections cibles par prompt formalisé (`prompt-catalog.md` §6).

### Limites actuelles

- Copier/coller manuel entre ChatGPT et Cursor.
- Pas de moteur prompt generation exécutable.
- Validations humaines fréquentes (revue visuelle, merge).
- Pas de détection automatique hors scope (concept dans automation §8, non implémenté).

### Modèle cible (v1.1 spec / v2.0 implémentation)

- Niveau 1 : prompts + templates + checklists standardisés (**v1.1**).
- Niveau 2–4 : orchestration semi-auto → agentic → self-service (**v2.0**).

### Risques

- Dérive de périmètre si garde-fous absents du prompt.
- Interprétation design par Cursor (Figma Make).
- Publication Notion prématurée.
- Automatisation complète sans validation humaine.

### Garde-fous

- Liste explicite dans chaque prompt.
- Checklists validation + guardrails.
- `git diff --stat` systématique.
- Zones interdites : backend (cycle UI), CI, Notion sync, cmp-001.

### Éléments pour `sfia-chatgpt-cursor-operating-model.md` (P0)

1. Rôles ChatGPT / Cursor / Humain par phase cycle.
2. Format prompt standard (sections obligatoires).
3. Boucle instruction → exécution → retour → validation.
4. Prompts référencés (§13 global-capitalization, figma method, prompt-catalog).
5. Niveaux maturité 0–4 et frontière v1.1 / v2.0.
6. Anti-patterns et exemples Interv360.

## 8. Apports pour les futurs moteurs SFIA

### Prompt Generation Engine

| Élément | Source |
|---------|--------|
| Types prompts : cycle, validation, PR, post-merge, UI | `automation` §5.5, `global-capitalization` §13 |
| Adaptation au type de cycle | `sfia-rules-update.md`, `cycle-template.md` |
| Intégration garde-fous dans prompt | `guardrails-checklist.md` |
| Catalogue familles et maturité | `prompt-catalog.md` |
| **v1.1** : spec autonome ; **v2.0** : génération automatique |

### Repository Execution Engine

| Élément | Source |
|---------|--------|
| Conventions branches | `sfia-rules-update.md` §3 |
| Format commits | §4 |
| PR body structure | `pr-body-template.md` |
| Post-merge structure | `post-merge-template.md` |
| Validations fin cycle | `validation-checklist.md` §1–5 |
| Garde-fous diff (backend, CI, Notion) | `automation` §8 |
| **v1.1** : spec comportement ; **v2.0** : exécution automatisée |

### Validation Engine

| Élément | Source |
|---------|--------|
| Contrôles Git | `validation-checklist.md` |
| Build/tests si code | `global-capitalization` §10 |
| Vérification hors scope | `guardrails-checklist.md` |
| GO/NO-GO par type cycle | `mvp-release-readiness.md`, audit templates |
| Rapport validation | `automation` §5.7 |
| **v1.1** : spec + mapping checklists ; **v2.0** : exécution auto |

### Documentation Engine

| Élément | Source |
|---------|--------|
| Templates cycle, audit, rex, post-merge | `templates/` |
| Mise à jour roadmap | `sfia-consolidation-roadmap.md` |
| Release notes | `mvp-release-readiness.md` |
| **Priorité P2 v1.1** — peut attendre v2.0 |

### Knowledge / Notion Layer

| Élément | Source |
|---------|--------|
| Structure Notion 11 sections | `notion-target-content-map.md` |
| Exclusions sync brut | §4 notion-target-content-map, `exports/notion/README.md` |
| Mapping sources repo → pages Notion | §3 notion-target-content-map |
| Checklist publication | `notion-publication-checklist.md` |
| Distinction method / practices / complementary | PR #81, final architecture audit |
| **v1.1** : `sfia-knowledge-layer.md` ; **v2.0** : Notion Publication Engine actif |

## 9. Apports pour les rôles et métiers

| Rôle | Méthode | Statut | Prompts associés | Apport v1.1 |
|------|---------|--------|------------------|-------------|
| Business Analyst | `business-analyst-method.md` | Draft | PROMPT-CAD-001, 002 | Domain Model objet Role Method |
| Product Owner | `product-owner-method.md` | Draft | PROMPT-ARB-001, 002 | Decision Engine arbitrages MVP |
| Chef de projet (PM) | `project-manager-method.md` | Draft | PROMPT-ROLE-001–003, GOV-001 | Delivery Pipeline gouvernance |
| UX/UI Designer | `ux-ui-designer-method.md` | Draft | PROMPT-UX-001–003 | UX/UI Figma Design-first |
| Architecte | `architect-method.md` | Draft | PROMPT-ARCH-001 (Draft) | Architecture applicative, ADR |
| RSSI | `rssi-method.md` | Draft | PROMPT-SEC-001 (Draft) | Garde-fous sécurité |
| QA / Testeur | `qa-tester-method.md` | **Official** | PROMPT-QA-001–010 | Validation Engine, seul modèle mature |
| Process / BPMN | `process/bpmn-*` (5 fichiers) | OK | `bpmn-prompt-family.md` | Practice distincte de Role Method |

### Distinctions à formaliser en v1.1

| Concept | Emplacement | Relation |
|---------|-------------|----------|
| **Practice** | `docs/practices/` — discipline transverse (architecture, BPMN, UX reprise) | Alimente Domain Model |
| **Role Method** | `docs/practices/roles/` — méthode par rôle métier | Lié à prompts catalogue |
| **Template** | `docs/templates/` (plateforme) vs `method/.../templates/` (FT) | Metamodel |
| **Prompt** | `prompts/` — instruction exécutable Cursor/ChatGPT | Lié Role Method + cycle |

## 10. Apports pour Notion / Knowledge Layer

| Principe | Source | Action v1.1 |
|----------|--------|-------------|
| Notion = IDE métier | `notion-target-content-map.md` §1 | Documenter dans `sfia-knowledge-layer.md` |
| Notion = couche lecture/navigation éditorialisée | Structure 11 sections | Mapping, pas copie |
| Repo = source de vérité | `exports/notion/README.md`, PR #81 | Repository Blueprint |
| Exclusion miroir brut | Audits, `notion-target-content-map.md` §4 | Engineering Principles, Knowledge Layer |
| Mapping éditorial obligatoire | `notion-target-content-map.md` §3 | Table sources → pages |
| Dry-run obligatoire avant publication | `notion-publication-checklist.md` | Knowledge Layer |
| Payloads JSON historiques | PR #81 réserves — chemins obsolètes `docs/methods/` | **Ne pas réutiliser** — chantier Notion ultérieur |
| Terminologie SFIA | Mapping contient encore « SFA » | Corriger lors consolidation Knowledge Layer |
| Séparation FT / complementary / practices | §6 notion-target-content-map | Metamodel + Knowledge Layer |

## 11. Apports à intégrer par document fondateur

| Document cible | Apports à intégrer | Sources |
|----------------|-------------------|---------|
| `docs/architecture/sfia-platform-architecture.md` | Cartographie repo post-PR #81 ; couches method/practices/prompts/projects/exports ; relation Git détaillé vs Notion éditorialisé ; module Projects ↔ Interv360 ; vision application factory | PR #81, final architecture audit, automation vision, global-capitalization §16 |
| `docs/architecture/sfia-decision-engine.md` | GO/NO-GO Fast Track ; réserves non bloquantes ; arbitrages MVP ; ADR Interv360 ; audit pré-cycle ; décision consolidation vs Notion | Audit Interv360, ADR-001–008, rules-update Règles 5–6, pr-81 |
| `docs/architecture/sfia-delivery-pipeline.md` | Cycle FT réel ; conventions branches ; PR unique ; post-merge ; releases/tags ; séquence 00–09 ; pattern lots MVP ; capitalisations cycles ; Controlled Delivery note | cycles Interv360, rules-update, mvp-delivery-capitalization, templates |
| `docs/architecture/sfia-domain-model.md` | Objets Cycle, Prompt, Template, Practice, Role Method, Reference Project, Knowledge Page, Audit Report, REX ; double référentiel données ; statuts maturité | prompt-catalog, practices/roles, audit Interv360, metamodel v1 |
| `docs/architecture/sfia-meta-model.md` | Relations artefacts/prompts/templates/practices/Notion/audits ; statuts Draft/Official ; archives vs actif ; templates FT vs plateforme | practices/, templates/, notion-target-content-map, PR #81 |
| `docs/architecture/sfia-repository-blueprint.md` | Arborescence validée : method/complementary/, docs/practices/, prompts/, exports/notion/ ; suppression refs methods/, docs/methods/ ; règle archives | pr-81-post-merge-status, final architecture audit, root README |
| `docs/foundation/sfia-engineering-principles.md` | Garde-fous FT ; Cursor/ChatGPT ; Notion non auto ; validation humaine ; Figma Design-first ; séparation cycles | rules-update, figma method, guardrails-checklist, global-capitalization §5–9 |
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Version v1.1 ; renvois specs moteurs ; frontière v1.1 spec / v2.0 impl ; Niveau 0 actuel documenté | Ce doc + checklists + prompt-catalog |
| `method/sfia-fast-track/core/sfia-global-capitalization.md` | Cross-ref v1.1 architecture ; statut preuve opérationnelle vs référentiel conceptuel | evolution matrix, ce inventaire |
| `method/sfia-fast-track/core/sfia-rules-update.md` | Cross-ref sfia-rules-and-guardrails.md ; conserver règles détaillées | engineering-principles, checklists |
| **nouveau** `sfia-chatgpt-cursor-operating-model.md` | Rôles, boucle, formats prompts, niveaux 0–4, anti-patterns, exemples Interv360 | automation §2–3, global-capitalization §13, figma method §6 |
| **nouveau** `sfia-rules-and-guardrails.md` | Fusion 10 principes + 10 règles + 3 checklists sans supprimer sources | engineering-principles, rules-update, checklists |
| **nouveau** `sfia-prompt-generation-engine.md` | Spec §5.5 + catalogue + templates cycle | automation, prompt-catalog |
| **nouveau** `sfia-validation-engine.md` | Spec §5.7 + validation + guardrails checklists | automation, checklists |
| **nouveau** `sfia-repository-execution-engine.md` | Spec §5.6 + blueprint + rules PR/post-merge + templates | automation, repository-blueprint, templates |
| **nouveau** `sfia-knowledge-layer.md` | Notion IDE métier, mapping, exclusions, dry-run, repo source vérité | notion-target-content-map, exports/notion/README, publication-plan |

## 12. Points à ne pas intégrer en v1.1

| Sujet | Raison | Horizon |
|-------|--------|---------|
| Moteurs réellement exécutables (scripts, agents) | Non implémentés — documentation seule | v2.0 |
| Intégration Notion opérationnelle / sync CMP | Chantier dédié après consolidation fondateurs | Post-v1.1 |
| Payloads JSON CMP régénérés | Chemins obsolètes, outil non touché | Chantier Notion |
| Automatisation complète sans validation humaine | Risque dérive — principe explicite automation §7 | v2.0+ |
| Refonte code Interv360 | Hors périmètre documentation | Cycles produit futurs |
| Synchronisation réelle Notion | Garde-fou global | Chantier Notion |
| 299 docs Interv360 bruts | Trop volumineux — résumer | Références ciblées |
| Roadmap post-MVP Interv360 (auth, CRM, CRUD) | Cadrages futurs produit | P2 |
| Role Methods Draft → Official | Maturité éditoriale insuffisante | P2 post-v1.1 |
| Controlled Delivery fusion avec Fast Track | Méthodes parallèles complémentaires | Note dans Delivery Pipeline |
| Exports Figma | Non suivis, hors sync | Inchangé |
| Code app/backend Interv360 | Interdit par garde-fous | Inchangé |
| `.github/workflows/`, `tools/cmp-001/` | Interdit par garde-fous | Inchangé |

## 13. Décision

**Décision proposée :**

> Les apports de capitalisation sont **suffisamment identifiés** pour lancer la consolidation v1.1 des documents fondateurs SFIA.

**Réserves mineures (non bloquantes) :**

- Terminologie « SFA » résiduelle dans `notion-target-content-map.md` et final architecture audit — à corriger lors exécution v1.1.
- 5 Role Methods encore Draft — intégrer le modèle, pas le contenu détaillé.
- `documentation-audit.md` obsolète — baseline historique, pas source v1.1.

Aucune source critique manquante identifiée au-delà des familles listées §2.

## 14. Suite recommandée

1. Valider cet inventaire et la matrice d'impact associée ;
2. Lancer la branche `capitalization/sfia-foundation-v1.1` ;
3. Mettre à jour les documents fondateurs existants (phases 1–2 du plan consolidation) ;
4. Créer les nouveaux documents canoniques (operating model P0, moteurs P1, knowledge layer P1) ;
5. Mettre à jour la capitalisation documentaire et cross-références ;
6. Seulement ensuite ouvrir le chantier Notion `notion/sfia-business-ide-preparation`.

## Update — P0 Foundation Consolidation Started

The P0 foundation consolidation has started on branch `capitalization/sfia-foundation-v1.1`.

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

The P2.2 cycle has updated the capitalization indexes, completeness matrix and historical audits to reflect the current SFIA foundation v1.1 status.

Updated references include:

- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`

Current status:

- foundation v1.1 structurally complete;
- capitalization indexes aligned;
- formal closure pending P2.3.
## Update — Foundation v1.1 Closure Recorded

The P2.3 cycle records the formal closure of SFIA foundation v1.1:

- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md`

The closure confirms:

- foundation v1.1 structurally complete;
- P2.1 cross-references completed;
- P2.2 capitalization indexes completed;
- deferred P2 items non-blocking;
- PR readiness and merge remain separate human-validated steps.
