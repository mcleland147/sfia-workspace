---
status: candidate
version: v1.1
cycle_type: notion preparation / method audit
scope: SFIA and project content audit for Notion categorization
---

# SFIA Notion Content Categorization

**Version :** v1.1
**Statut :** Candidate
**Cycle :** Préparation Notion — Cycle 1 (audit + inventaire + catégorisation)
**Branche :** `notion/sfia-content-audit-categorization`
**Base :** `main` @ `388e892` (post PR #84)

## 1. Objectif

Ce document catégorise les contenus du repository SFIA selon leur utilité pour une future intégration Notion.

Il répond à la question :

> Quels documents du repo méritent une page Notion, une base Notion, un résumé éditorialisé, ou doivent rester repo-only ?

Ce cycle **ne définit pas** le modèle cible Notion complet, **ne prépare pas** de plan d'intégration détaillé, **ne synchronise pas** et **ne publie pas** dans Notion.

Références appliquées :

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` — type de cycle : Préparation Notion
- `method/sfia-fast-track/core/sfia-knowledge-layer.md` — principes knowledge, no raw mirror
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` — garde-fous Notion
- `prompts/templates/09-prepare-notion-mapping.md` — contraintes de préparation

## 2. Périmètre audité

| Zone | Fichiers `.md` audités | Notes |
|------|------------------------|-------|
| `docs/` | 54 | Foundation, architecture, practices, templates, standards, tooling |
| `method/sfia-fast-track/core/` | 9 | Documents opérationnels SFIA |
| `method/sfia-fast-track/automation/` | 5 | Engines et vision automation |
| `method/sfia-fast-track/checklists/` | 5 | Checklists opérationnelles |
| `method/sfia-fast-track/templates/` | 6 | Templates Fast Track |
| `method/sfia-fast-track/ui/` | 2 | Méthode UI / Figma |
| `method/sfia-fast-track/audit-rex/` | 2 | REX Interv360 capitalisé |
| `method/sfia-fast-track/documentation/` | 27 | Capitalisation, audits, plans Notion existants |
| `method/sfia-fast-track/archive/` | 9 | Archives méthode |
| `prompts/` | 20 | Catalog, templates, familles |
| `method/complementary/` | 14 | Controlled Delivery |
| `exports/notion/` | 1 README + 11 JSON | Exports préparés — non source de vérité |
| `projects/interv360/` (actif) | 128 | Hors `app/`, `backend/`, `archive/` |
| `projects/interv360/archive/` | 171 | Historique, notion-sync, pre-delivery |
| Inventaires `.txt` (workspace audit, capitalization) | ~45 | Traces d'audit — repo-only |
| Payloads JSON Notion/CMP (référencés, non modifiés) | ~20+ | Interv360 + exports — **ne pas republier tels quels** |

**Total approximatif analysé :** ~954 fichiers Markdown + ~45 inventaires texte + artefacts Notion/CMP référencés.

**Hors périmètre audit détaillé (repo-only par défaut) :**

- `projects/interv360/app/` — code applicatif
- `projects/interv360/backend/` — code backend
- `projects/interv360/03-design/exports/` — exports design non suivis
- `tools/cmp-001/` — outillage CMP (référencé, non modifié)
- `.github/workflows/` — CI

## 3. Principes de catégorisation

| Catégorie | Signification |
|-----------|---------------|
| `PAGE_NOTION_DEDIEE` | Document structurant, lisible, utile comme page Notion autonome |
| `EDITORIALISER_AVANT_PUBLICATION` | Utile mais trop technique, long ou repo-oriented — transformer avant publication |
| `RESUMER_DANS_NOTION_AVEC_LIEN_REPO` | Preuve, trace ou détail — résumé + lien source repo |
| `INTEGRER_DANS_BASE_NOTION` | Entrée dans une base structurée (prompts, checklists, ADR, assets) |
| `GARDER_REPO_ONLY` | Utile au repo, versioning ou exécution — non pertinent pour Notion |
| `ARCHIVER_OU_NE_PAS_PUBLIER` | Obsolète, doublon, historique ancien — ne pas exposer |
| `A_REVOIR_PLUS_TARD` | Ambigu — arbitrage humain requis |

**Principes directeurs :**

1. **Repository first** — Git reste la source de vérité ; Notion est une couche éditorialisée.
2. **No raw mirror** — pas de reproduction brute de l'arborescence repo.
3. **Curated knowledge** — publier par lots validés, pas en masse.
4. **Ne pas tout publier** — la majorité des documents Interv360 delivery/design restent repo-only.
5. **Réutiliser l'existant avec prudence** — `notion-target-content-map.md`, `notion-publication-plan.md` et `exports/notion/*.json` sont des traces antérieures à actualiser, pas des sources directes de sync.

## 4. Synthèse exécutive

| Indicateur | Valeur approximative |
|------------|---------------------|
| Documents analysés | ~954 Markdown + ~45 inventaires texte |
| `PAGE_NOTION_DEDIEE` | ~18 |
| `EDITORIALISER_AVANT_PUBLICATION` | ~32 |
| `INTEGRER_DANS_BASE_NOTION` | ~55 |
| `RESUMER_DANS_NOTION_AVEC_LIEN_REPO` | ~48 |
| `GARDER_REPO_ONLY` | ~720 |
| `ARCHIVER_OU_NE_PAS_PUBLIER` | ~75 |
| `A_REVOIR_PLUS_TARD` | ~16 |

**Principaux domaines à intégrer dans Notion (priorité haute) :**

1. SFIA Operating Model — boucle ChatGPT ↔ Cursor, routage, règles
2. SFIA Foundation & Architecture — principes, decision engine, pipeline
3. SFIA Prompt System — catalog + templates (bases)
4. SFIA Validation — checklist + engines (résumés)
5. Projets & Capitalisation — cas Interv360 synthétique + ADR clés
6. Practices & Templates — bases par rôle/discipline

**Points d'attention avant le cycle 2 :**

- Terminologie résiduelle **SFA** dans `notion-target-content-map.md` et `notion-publication-plan.md` — à harmoniser SFIA
- Payloads JSON et logs Notion-sync Interv360 **obsolètes** — ne pas republier sans régénération
- `exports/notion/*.json` — préparation historique, à remplacer par mapping v1.1
- Role Methods en statut **Draft** — décider du niveau de publication
- Volume Interv360 actif (128 md) — ne publier qu'une sélection éditorialisée
- Documentation Engine — **non créé** ; ne pas positionner comme moteur existant

## 5. Inventaire catégorisé des contenus

> Colonnes : Chemin | Titre | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves

### 5.1 SFIA Foundation & Architecture

| Chemin repo | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
|-------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
| `docs/foundation/sfia-engineering-principles.md` | SFIA Engineering Principles | SFIA Foundation | Fondation | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Contributeur SFIA | Créer page Notion dédiée | Norme supérieure — référence transversale | Versionner les mises à jour |
| `docs/foundation/README.md` | Foundation README | SFIA Foundation | README / Index | validated | Faible | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Faible | Contributeur SFIA | Résumer et lier au repo | Index local | — |
| `docs/architecture/2026-06-27-sfia-decision-engine.md` | SFIA Decision Engine | SFIA Architecture | Architecture | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Contributeur SFIA | Créer page Notion dédiée | Décisions GO/NO-GO, réserves | — |
| `docs/architecture/sfia-delivery-pipeline.md` | SFIA Delivery Pipeline | SFIA Architecture | Architecture | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Contributeur SFIA | Éditorialiser | Pipeline PR/merge — simplifier pour lecteur métier | — |
| `docs/architecture/sfia-repository-blueprint.md` | SFIA Repository Blueprint | SFIA Architecture | Architecture | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Contributeur SFIA | Éditorialiser | Structure repo — utile mais technique | — |
| `docs/architecture/sfia-platform-architecture.md` | SFIA Platform Architecture | SFIA Architecture | Architecture | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Contributeur SFIA | Éditorialiser | Vision plateforme v1.1 | — |
| `docs/architecture/sfia-domain-model.md` | SFIA Domain Model | SFIA Architecture | Architecture | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Contributeur SFIA | Éditorialiser | Modèle métier — dense | — |
| `docs/architecture/sfia-meta-model.md` | SFIA Meta-Model | SFIA Architecture | Architecture | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Contributeur SFIA | Éditorialiser | Meta-modèle — dense | — |
| `docs/architecture/README.md` | Architecture README | SFIA Architecture | README / Index | validated | Faible | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Faible | Contributeur SFIA | Résumer et lier au repo | Index | — |
| `docs/adr/README.md` | ADR README | SFIA Architecture | README / Index | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Pas d'ADR plateforme consolidés | — |
| `docs/knowledge/README.md` | Knowledge README | SFIA Foundation | README / Index | candidate | Faible | A_REVOIR_PLUS_TARD | Faible | Repo-only | Arbitrer plus tard | Placeholder | Contenu à définir |
| `docs/rex/README.md` | REX README | SFIA Capitalization | README / Index | candidate | Faible | A_REVOIR_PLUS_TARD | Faible | Repo-only | Arbitrer plus tard | Placeholder | — |
| `docs/roadmaps/cmp-technical-roadmap.md` | CMP Technical Roadmap | SFIA Architecture | Roadmap | historical | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Morris / mainteneur | Résumer et lier au repo | Roadmap outillage — lien CMP | Ne pas republier payload associé |
| `docs/2026-06-27-workspace-readiness-report.md` | Workspace Readiness Report | Historique / Audit | Audit | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Rapport ponctuel pré-consolidation | — |
| `docs/README.md` | Docs README | SFIA Foundation | README / Index | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Contributeur SFIA | Résumer et lier au repo | Point d'entrée docs | — |

### 5.2 SFIA Operating Model

| Chemin repo | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
|-------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | ChatGPT ↔ Cursor Operating Model | SFIA Operating Model | Guide opérationnel | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Utilisateur méthode | Créer page Notion dédiée | Modèle opératoire central | — |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Cycle Routing Guide | SFIA Operating Model | Guide opérationnel | candidate | Haute | PAGE_NOTION_DEDIEE | Haute | Utilisateur méthode | Créer page Notion dédiée | Routage cycles — nouveau asset v1.1 | Statut candidate — valider après usage |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Knowledge Layer | SFIA Operating Model | Guide opérationnel | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Contributeur SFIA | Créer page Notion dédiée | Routing Matrix + règles Notion | — |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Rules & Guardrails | SFIA Operating Model | Guide opérationnel | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Utilisateur méthode | Créer page Notion dédiée | Garde-fous canoniques | — |
| `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | Global Capitalization | SFIA Operating Model | Capitalisation | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Utilisateur méthode | Éditorialiser | Preuve opérationnelle — long, traces merge | Retirer détails Git bruts |
| `method/sfia-fast-track/core/sfia-rules-update.md` | Rules Update | SFIA Operating Model | Guide opérationnel | historical | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Faible | Contributeur SFIA | Résumer et lier au repo | Trace historique règles | Supplanté par rules-and-guardrails |
| `method/sfia-fast-track/core/sfia-architecture-standards.md` | Architecture Standards | SFIA Operating Model | Guide opérationnel | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Contributeur SFIA | Éditorialiser | Standards méthode | — |
| `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` | Consolidation Roadmap | SFIA Operating Model | Roadmap | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Morris / mainteneur | Éditorialiser | Roadmap amélioration SFIA | — |
| `method/sfia-fast-track/core/README.md` | Core README | SFIA Operating Model | README / Index | validated | Faible | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Faible | Contributeur SFIA | Résumer et lier au repo | Index lecture core | — |
| `method/sfia-fast-track/README.md` | Fast Track README | SFIA Operating Model | README / Index | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Utilisateur méthode | Éditorialiser | Point d'entrée méthode | — |
| `method/sfia-fast-track/ui/figma-design-first-ui-method.md` | Figma Design-first UI Method | SFIA Operating Model | Guide opérationnel | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Utilisateur méthode | Créer page Notion dédiée | Méthode UI premium — référence active | — |
| `method/sfia-fast-track/ui/README.md` | UI README | SFIA Operating Model | README / Index | validated | Faible | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Faible | Contributeur SFIA | Résumer et lier au repo | Index UI | — |

### 5.3 SFIA Automation & Engines

| Chemin repo | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
|-------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Automation Architecture | SFIA Automation | Architecture | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Contributeur SFIA | Éditorialiser | Vision niveaux 0–4 | Résumer pour lecteur métier |
| `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | Prompt Generation Engine | SFIA Automation | Engine | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Contributeur SFIA | Éditorialiser | Spec moteur — technique | Non autonome v1.1 |
| `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` | Repository Execution Engine | SFIA Automation | Engine | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Contributeur SFIA | Éditorialiser | Spec moteur — technique | — |
| `method/sfia-fast-track/automation/sfia-validation-engine.md` | Validation Engine | SFIA Automation | Engine | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Contributeur SFIA | Éditorialiser | Spec moteur — technique | — |
| `method/sfia-fast-track/automation/README.md` | Automation README | SFIA Automation | README / Index | validated | Faible | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Faible | Contributeur SFIA | Résumer et lier au repo | Index automation | — |

### 5.4 SFIA Validation

| Chemin repo | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
|-------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
| `method/sfia-fast-track/checklists/sfia-validation-checklist.md` | SFIA Validation Checklist | SFIA Validation | Checklist | candidate | Haute | PAGE_NOTION_DEDIEE | Haute | Utilisateur méthode | Créer page Notion dédiée | Checklist canonique v1.1 | Statut candidate |
| `method/sfia-fast-track/documentation/archive/checklists/notion-publication-checklist.md` | Notion Publication Checklist | SFIA Notion | Checklist | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Morris / mainteneur | Créer entrée base Notion | Contrôle publication Notion | — |
| `method/sfia-fast-track/checklists/guardrails-checklist.md` | Guardrails Checklist | SFIA Validation | Checklist | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Utilisateur méthode | Créer entrée base Notion | Legacy — complémentaire | Doublon partiel avec rules-and-guardrails |
| `method/sfia-fast-track/documentation/archive/checklists/validation-checklist.md` | Validation Checklist (legacy) | SFIA Validation | Checklist | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Supplantée par sfia-validation-checklist | — |
| `method/sfia-fast-track/checklists/README.md` | Checklists README | SFIA Validation | README / Index | validated | Faible | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Faible | Contributeur SFIA | Résumer et lier au repo | Index checklists | — |

### 5.5 SFIA Prompt System

| Chemin repo | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
|-------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
| `prompts/prompt-catalog.md` | SFIA Prompt Catalog | SFIA Prompt System | Prompt catalog | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Utilisateur méthode | Créer page Notion dédiée | Index familles et cartes prompts | + base Notion pour cartes |
| `prompts/templates/README.md` | Prompt Templates README | SFIA Prompt System | README / Index | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Utilisateur méthode | Résumer et lier au repo | Guide sélection templates | — |
| `prompts/templates/01-create-foundation-document.md` | Template 01 — Foundation | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | Template opérationnel | Repo reste source |
| `prompts/templates/02-update-document-v1-1.md` | Template 02 — Update v1.1 | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | Template consolidation | — |
| `prompts/templates/03-create-operational-checklist.md` | Template 03 — Checklist | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
| `prompts/templates/04-validate-cursor-result.md` | Template 04 — Validate Cursor | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
| `prompts/templates/2026-07-04-05-validate-pr-readiness.md` | Template 05 — PR Readiness | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
| `prompts/templates/06-prepare-pr-summary.md` | Template 06 — PR Summary | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
| `prompts/templates/07-write-post-merge-status.md` | Template 07 — Post-merge | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
| `prompts/templates/08-capitalize-method-asset.md` | Template 08 — Capitalize | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
| `prompts/templates/09-prepare-notion-mapping.md` | Template 09 — Notion Mapping | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Morris / mainteneur | Créer entrée base Notion | Template cycle Notion | — |
| `prompts/templates/10-perform-safe-repository-cleanup.md` | Template 10 — Cleanup | SFIA Prompt System | Prompt template | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Utilisateur méthode | Créer entrée base Notion | — | — |
| `prompts/README.md` | Prompts README | SFIA Prompt System | README / Index | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Contributeur SFIA | Résumer et lier au repo | Index prompts | — |
| `prompts/architecture/functional-architecture-prompt-family.md` | Functional Architecture prompts | SFIA Prompt System | Prompt catalog | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Contributeur SFIA | Créer entrée base Notion | Famille discipline | — |
| `prompts/architecture/PROMPT-ARCH-001-*.md` | PROMPT-ARCH-001 | SFIA Prompt System | Prompt catalog | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Contributeur SFIA | Créer entrée base Notion | Carte prompt | — |
| `prompts/bpmn/bpmn-prompt-family.md` | BPMN prompt family | SFIA Prompt System | Prompt catalog | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Contributeur SFIA | Créer entrée base Notion | — | — |
| `prompts/qa/qa-tester-prompt-family.md` | QA prompt family | SFIA Prompt System | Prompt catalog | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Contributeur SFIA | Créer entrée base Notion | — | — |
| `prompts/security/PROMPT-SEC-001-*.md` | PROMPT-SEC-001 | SFIA Prompt System | Prompt catalog | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Contributeur SFIA | Créer entrée base Notion | — | — |
| `prompts/ux-ui/ux-ui-reprise-prompt-family.md` | UX/UI reprise prompts | SFIA Prompt System | Prompt catalog | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Contributeur SFIA | Créer entrée base Notion | — | — |
| `prompts/tooling/penpot/penpot-design-agent-prompt-family.md` | Penpot prompt family | SFIA Prompt System | Prompt catalog | validated | Faible | INTEGRER_DANS_BASE_NOTION | Faible | Contributeur SFIA | Créer entrée base Notion | Tooling périphérique | — |
| `prompts/governance/notion/` | Governance Notion prompts | SFIA Notion | Prompt catalog | unknown | Moyenne | A_REVOIR_PLUS_TARD | À arbitrer | Morris / mainteneur | Arbitrer plus tard | Dossier référencé — contenu à inventorier | — |

### 5.6 SFIA Capitalization, Audits & Closure

| Chemin repo | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
|-------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
| `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` | Documentation Completeness Matrix | SFIA Capitalization | Audit | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Morris / mainteneur | Résumer et lier au repo | Matrice complétude — utile pilotage | Sections historiques |
| `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md` | Capitalization Audit | SFIA Capitalization | Audit | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Audit interne | — |
| `method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-closure/sfia-foundation-v1.1-closure-status.md` | Foundation v1.1 Closure | SFIA Capitalization | Closure | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Morris / mainteneur | Résumer et lier au repo | Trace clôture fondation | — |
| `method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md` | Foundation v1.1 Post-merge | SFIA Capitalization | Closure | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Trace merge — détail Git | — |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md` | P2 Cross-reference Audit | SFIA Capitalization | Audit | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Audit technique cross-réfs | — |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/*.md` | Foundation v1.1 Planning (2) | SFIA Capitalization | Capitalisation | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Planification consolidation — clos | — |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/*.md` | Foundation v1.1 Inputs (2) | SFIA Capitalization | Capitalisation | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Inputs consolidation — clos | — |
| `method/sfia-fast-track/documentation/capitalization/inventory-*.txt` | Inventaires capitalisation (7) | SFIA Capitalization | Audit | historical | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Listes brutes fichiers | — |
| `method/sfia-fast-track/documentation/workspace-audit/*.md` | Workspace audits (9) | Historique / Audit | Audit | historical | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Audits cleanup — traces | — |
| `method/sfia-fast-track/documentation/workspace-audit/**/*.txt` | Inventaires workspace (~36) | Historique / Audit | Audit | historical | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Inventaires bruts | — |
| `method/sfia-fast-track/documentation/documentation-audit.md` | Documentation Audit | SFIA Capitalization | Audit | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Pré-Round 3 | — |
| `method/sfia-fast-track/documentation/documentation-structure-target.md` | Documentation Structure Target | SFIA Capitalization | Guide opérationnel | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Cible pré-consolidation | — |
| `method/sfia-fast-track/templates/*.md` | Fast Track Templates (6) | SFIA Operating Model | Template | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Utilisateur méthode | Créer entrée base Notion | Cycle, PR, post-merge, audit, REX, MVP | — |
| `method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md` | Interv360 Application REX | SFIA Capitalization | REX | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Lecteur projet | Éditorialiser | REX capitalisé — preuve méthode | Fusionner avec synthèse projet |
| `method/sfia-fast-track/documentation/archive/interv360-realization/` | Archive realization (9) | Historique / Audit | Archive | archive | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Méthode historique Interv360 | — |

### 5.7 Notion / CMP / Publication

| Chemin repo | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
|-------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
| `method/sfia-fast-track/documentation/archive/notion/notion-target-content-map.md` | Notion Target Content Map | SFIA Notion | Mapping Notion | candidate | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Morris / mainteneur | Éditorialiser | Mapping existant — base cycle 2 | Terminologie SFA résiduelle |
| `method/sfia-fast-track/documentation/archive/notion/notion-publication-plan.md` | Notion Publication Plan | SFIA Notion | Mapping Notion | candidate | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Morris / mainteneur | Éditorialiser | Plan publication existant | À actualiser post v1.1 |
| `exports/notion/README.md` | Exports Notion README | SFIA Notion | README / Index | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Règle no auto-sync | — |
| `exports/notion/*.json` (11 fichiers) | Exports JSON préparés | SFIA Notion | Mapping Notion | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Payloads historiques — non source vérité | Ne pas republier tels quels |
| `projects/interv360/**/notion-sync-*.json` | Payloads Notion-sync Interv360 (~15) | SFIA Notion | Mapping Notion | historical | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Anciennes sync CMP | Risque doublon Notion |
| `projects/interv360/archive/notion-sync/` (~40 md) | Logs et summaries Notion-sync | SFIA Notion | Audit | archive | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Traces publication ancienne | Ne pas republier |
| `tools/cmp-001/` (référencé) | CMP tooling | Repo / Technique | Technique repo | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Outillage — hors Notion | Non modifié ce cycle |

### 5.8 Projet Interv360

#### 5.8.1 Documents actifs — synthèse par phase

| Chemin repo (groupe) | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
|----------------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
| `projects/interv360/README.md` | Interv360 README | Projet Interv360 | README / Index | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Lecteur projet | Éditorialiser | Porte d'entrée projet référence | — |
| `projects/interv360/00-intake/` (3 md) | Intake & test strategy | Projet Interv360 | Livrable projet | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Lecteur projet | Résumer et lier au repo | Contexte initial | — |
| `projects/interv360/01-cadrage/` (14 md) | Cadrage & arbitrages | Projet Interv360 | Livrable projet | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Lecteur projet | Résumer et lier au repo | Traces cadrage — synthèse suffit | — |
| `projects/interv360/02-architecture/adr/ADR-001..008` | ADR Interv360 (8) | Projet Interv360 | Décision | validated | Haute | INTEGRER_DANS_BASE_NOTION | Haute | Lecteur projet | Créer entrée base Notion | Décisions structurantes MVP | Base ADR projet |
| `projects/interv360/02-architecture/adr/ADR-CAND-009` | ADR Candidate 009 | Projet Interv360 | Décision | candidate | Moyenne | A_REVOIR_PLUS_TARD | À arbitrer | Lecteur projet | Arbitrer plus tard | Candidate post-MVP | — |
| `projects/interv360/02-architecture/*-summary.md` | Summaries architecture (~8) | Projet Interv360 | Livrable projet | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Lecteur projet | Éditorialiser | Synthèses lisibles | Bonnes candidates pages |
| `projects/interv360/02-architecture/*.md` (détails) | Détails architecture (~8) | Projet Interv360 | Livrable projet | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Détails techniques | Summaries suffisent |
| `projects/interv360/03-design/` (17 md) | Design / Figma / Penpot | Projet Interv360 | Livrable projet | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Instructions agent/design — repo | Exports Figma hors scope |
| `projects/interv360/04-delivery/` (~50 md) | Delivery & implémentation | Projet Interv360 | Livrable projet | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Traces delivery détaillées | Capitalisation déjà extraite |
| `projects/interv360/05-release/2026-07-02-mvp-release-readiness.md` | MVP Release Readiness | Projet Interv360 | Livrable projet | validated | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Moyenne | Lecteur projet | Résumer et lier au repo | Jalon release | — |
| `projects/interv360/06-audit-rex/current-application-audit.md` | Current Application Audit | Projet Interv360 | Audit | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Lecteur projet | Éditorialiser | Audit santé application | — |
| `projects/interv360/08-presentation/` (4 md) | Demo presentation package | Projet Interv360 | Livrable projet | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Lecteur externe | Éditorialiser | Demo one-page, script — showcase | — |
| `projects/interv360/09-roadmap/` (14 md) | Roadmap & décisions backend | Projet Interv360 | Roadmap | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Lecteur projet | Créer entrée base Notion | Décisions et framing — base roadmap | — |
| `projects/interv360/07-documentation/README.md` | Documentation README | Projet Interv360 | README / Index | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Index local | — |

#### 5.8.2 Archives Interv360

| Chemin repo (groupe) | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
|----------------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
| `projects/interv360/archive/notion-sync/` (~40 md) | Anciennes sync Notion | Projet Interv360 | Audit | archive | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Logs sync obsolètes | — |
| `projects/interv360/archive/pre-delivery-phases/` (~30 md) | Phases pré-delivery | Projet Interv360 | Archive | archive | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | UX/BPMN/archi pré-MVP | Contextualiser si besoin |
| `projects/interv360/archive/role-enrichment/` (~8 md) | Role enrichment | Projet Interv360 | Archive | archive | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Enrichissement rôles historique | — |
| `projects/interv360/archive/stubs/` | Stubs archivés | Projet Interv360 | Archive | archive | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Stubs vides | — |
| `projects/interv360/archive/inc-*` et micro-incréments | Incréments historiques | Projet Interv360 | Archive | archive | Faible | ARCHIVER_OU_NE_PAS_PUBLIER | Faible | Repo-only | Archiver | Traces inc-* | — |

### 5.9 Repo-only / Technique / Archives — autres zones

| Chemin repo (groupe) | Titre / nom | Domaine | Type | Statut | Utilité Notion | Catégorie | Priorité | Public | Action | Justification | Réserves |
|----------------------|-------------|---------|------|--------|----------------|-----------|----------|--------|--------|---------------|----------|
| `docs/practices/roles/*.md` (7) | Role Methods | SFIA Foundation | Guide opérationnel | draft | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Utilisateur méthode | Éditorialiser | Pratiques par rôle — plusieurs Draft | QA seule Official |
| `docs/practices/architecture/` (3) | Functional Architecture practice | SFIA Foundation | Guide opérationnel | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Contributeur SFIA | Créer entrée base Notion | Pack architecture fonctionnelle | — |
| `docs/practices/process/bpmn-*.md` (5) | BPMN practice pack | SFIA Foundation | Guide opérationnel | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Contributeur SFIA | Créer entrée base Notion | Méthode BPMN | — |
| `docs/practices/ux-ui/` (3) | UX/UI reprise pack | SFIA Foundation | Guide opérationnel | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Contributeur SFIA | Créer entrée base Notion | Pack UX reprise | — |
| `docs/templates/` (10+) | Platform templates | SFIA Foundation | Template | validated | Moyenne | INTEGRER_DANS_BASE_NOTION | Moyenne | Contributeur SFIA | Créer entrée base Notion | Templates plateforme | — |
| `docs/standards/ux-ui-v1-governance-standard.md` | UX/UI Governance Standard | SFIA Foundation | Guide opérationnel | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Contributeur SFIA | Éditorialiser | Standard gouvernance UX | — |
| `docs/tooling/penpot/` (5) | Penpot tooling docs | Repo / Technique | Guide opérationnel | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Tooling agent design | Périphérique SFIA core |
| `method/complementary/controlled-delivery/` (13) | Controlled Delivery method | SFIA Operating Model | Guide opérationnel | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Utilisateur méthode | Éditorialiser | Méthode complémentaire | Distinct de Fast Track |
| `docs/practices/methods-structure-check.md` | Methods Structure Check | SFIA Validation | Checklist | validated | Faible | GARDER_REPO_ONLY | Faible | Repo-only | Conserver repo-only | Contrôle interne structure | — |

## 6. Pages Notion dédiées recommandées

Documents recommandés en **page Notion autonome** (priorité haute) :

| # | Document source | Public cible | Action cycle 2 |
|---|---------------|--------------|----------------|
| 1 | `docs/foundation/sfia-engineering-principles.md` | Contributeur SFIA | Éditorialiser légèrement |
| 2 | `docs/architecture/2026-06-27-sfia-decision-engine.md` | Contributeur SFIA | Publier |
| 3 | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Utilisateur méthode | Éditorialiser |
| 4 | `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Utilisateur méthode | Valider statut puis publier |
| 5 | `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Contributeur SFIA | Éditorialiser |
| 6 | `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Utilisateur méthode | Éditorialiser |
| 7 | `method/sfia-fast-track/checklists/sfia-validation-checklist.md` | Utilisateur méthode | Adapter format checklist Notion |
| 8 | `prompts/prompt-catalog.md` | Utilisateur méthode | Page hub + lien bases |
| 9 | `method/sfia-fast-track/ui/figma-design-first-ui-method.md` | Utilisateur méthode | Publier |
| 10 | `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Contributeur SFIA | Résumer vision niveaux |
| 11 | `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | Utilisateur méthode | Forte éditorialisation |
| 12 | `projects/interv360/README.md` + synthèse | Lecteur projet | Page hub Interv360 |
| 13 | `projects/interv360/06-audit-rex/current-application-audit.md` | Lecteur projet | Synthèse audit |
| 14 | `projects/interv360/08-presentation/interv360-demo-one-page-summary.md` | Lecteur externe | Showcase |
| 15 | `method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md` | Lecteur projet | REX éditorialisé |
| 16 | `docs/architecture/sfia-delivery-pipeline.md` | Contributeur SFIA | Éditorialiser |
| 17 | `docs/architecture/sfia-platform-architecture.md` | Contributeur SFIA | Éditorialiser |
| 18 | `method/sfia-fast-track/documentation/archive/notion/notion-target-content-map.md` | Morris / mainteneur | Actualiser SFIA — input cycle 2 |

## 7. Contenus à éditorialiser

| Document | Raison | Priorité |
|----------|--------|----------|
| Engines (Prompt Generation, Repository Execution, Validation) | Specs techniques — extraire règles opérationnelles | Moyenne |
| `sfia-global-capitalization-reference.md` | Long, traces Git/merge | Haute |
| `sfia-delivery-pipeline.md` | Pipeline technique | Haute |
| `sfia-repository-blueprint.md` | Arborescence repo | Moyenne |
| `sfia-platform-architecture.md`, domain/meta-model | Dense architecture | Moyenne |
| Summaries Interv360 architecture | Bon contenu — polish métier | Haute |
| Role Methods (Draft) | Compléter ou marquer Draft dans Notion | Moyenne |
| Controlled Delivery pack | Méthode complémentaire — clarifier relation Fast Track | Moyenne |
| `notion-target-content-map.md` + `notion-publication-plan.md` | Terminologie SFA, pré v1.1 | Haute |

## 8. Contenus à intégrer dans une base Notion

| Base Notion recommandée | Contenu source | Entrées approx. |
|-------------------------|----------------|-----------------|
| **Prompt Templates** | `prompts/templates/01–10` | 10 |
| **Prompt Cards / Families** | `prompts/prompt-catalog.md` + familles discipline | ~15 |
| **Checklists SFIA** | checklists Fast Track + publication Notion | ~4 |
| **Templates Fast Track** | `method/sfia-fast-track/templates/` | 6 |
| **Templates plateforme** | `docs/templates/` | ~10 |
| **ADR Interv360** | `projects/interv360/02-architecture/adr/` | 8–9 |
| **Practices & Role Methods** | `docs/practices/` | ~20 |
| **Roadmap / Décisions Interv360** | `projects/interv360/09-roadmap/` | ~14 |
| **Assets capitalisation** | futures entrées post-cycle | — |

## 9. Contenus à résumer avec lien repo

| Type | Exemples | Action Notion |
|------|----------|---------------|
| Closures & post-merge | foundation v1.1 closure, PR post-merge status | Paragraphe + lien Git |
| Audits capitalisation | completeness matrix, P2 audit | Synthèse décision + lien |
| Cadrage Interv360 | 01-cadrage/* | Page synthèse projet |
| Release readiness | mvp-release-readiness | Jalon dans timeline Interv360 |
| Roadmaps outillage | cmp-technical-roadmap | Encart roadmap |
| README / index | core README, docs README, prompts README | Liens navigation |

## 10. Contenus repo-only ou à archiver

**Repo-only (ne pas publier) :**

- ~50 docs `projects/interv360/04-delivery/` — traces implémentation
- ~17 docs `projects/interv360/03-design/` — instructions Penpot/Figma/agent
- Inventaires `.txt` workspace audit et capitalization (~45)
- Workspace audit reports détaillés
- Tooling Penpot (`docs/tooling/penpot/`)
- Code `app/`, `backend/`, CI, CMP tooling

**Archiver / ne pas publier :**

- `projects/interv360/archive/notion-sync/` — anciennes publications
- Payloads JSON Notion-sync Interv360
- `exports/notion/*.json` — sans régénération
- `archive/pre-delivery-phases/`, `inc-*`, stubs
- `validation-checklist.md` legacy
- Plans foundation v1.1 planning/inputs (clos)

## 11. Points d'arbitrage humain

| # | Sujet | Options | Recommandation provisoire |
|---|-------|---------|---------------------------|
| 1 | Role Methods Draft — publier ou attendre ? | Publier Draft vs Official only | Publier QA Official ; autres en Draft visible |
| 2 | Volume Interv360 — quelle profondeur ? | Page hub vs pages par phase | Hub + 4–6 pages synthèse max |
| 3 | Controlled Delivery vs Fast Track dans Notion | Fusion vs section séparée | Section complémentaire distincte |
| 4 | `exports/notion/*.json` — réutiliser ou régénérer ? | Réutiliser vs ignorer | Ignorer — régénérer au cycle 2+ |
| 5 | Penpot tooling — inclure dans Notion ? | Oui vs repo-only | Repo-only sauf demande explicite |
| 6 | Cycle Routing Guide — statut candidate | Publier candidate vs attendre validation | Publier avec badge Candidate |
| 7 | Anciens mappings SFA | Remplacer vs migrer | Remplacer terminologie SFIA cycle 2 |
| 8 | ADR-CAND-009 | Publier candidate | Arbitrer après revue MVP |
| 9 | Documentation Engine | Ne pas créer sans décision | Exclu — non existant |
| 10 | `prompts/governance/notion/` | Inventorier contenu | Cycle 2 ou audit complémentaire |

## 12. Risques identifiés

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Raw sync depuis JSON historiques | Doublons, contenu obsolète | No raw sync ; régénération cycle 2 |
| Terminologie SFA/SFIA mixte | Confusion lecteur | Harmonisation éditoriale cycle 2 |
| Sur-publication Interv360 | Notion illisible | Hub + synthèses ; repo pour détails |
| Publication Role Methods Draft | Crédibilité méthode | Badge statut + QA Official en priorité |
| Confusion repo vs Notion source | Perte traçabilité | Liens source repo obligatoires |
| Reprise payloads CMP sans audit | Erreurs publication | `tools/cmp-001/` hors scope ; validation humaine |
| Duplication guides (Knowledge Layer vs Routing Guide) | Redondance | Complémentarité déjà documentée — respecter en Notion |

## 13. Recommandations pour le cycle 2

**Cycle 2 proposé : Notion Target Model & Integration Plan**

Le cycle 2 devra définir :

1. **Modèle cible Notion** — espaces, hiérarchie, relation avec Knowledge Layer
2. **Pages principales** — à partir de la liste §6 (18 pages prioritaires)
3. **Bases Notion** — Prompt Templates, Checklists, ADR, Practices, Roadmap (§8)
4. **Propriétés Notion** — statut, version, domaine, source repo, public cible, priorité
5. **Règles de nommage** — SFIA uniforme, fin terminologie SFA
6. **Mapping catégorie → structure Notion** — transformer les 7 catégories en règles de placement
7. **Ordre d'intégration** — suggéré :
   - Lot 1 : Operating Model + Rules + Routing + Validation Checklist
   - Lot 2 : Foundation + Architecture (pages éditorialisées)
   - Lot 3 : Prompt Catalog + Templates (bases)
   - Lot 4 : Interv360 hub + ADR + REX/Audit
   - Lot 5 : Practices + Controlled Delivery
8. **Plan d'intégration** — jalons, dry-run, validation humaine par lot
9. **Contrôles avant publication** — notion-publication-checklist, no raw sync

**Inputs cycle 2 :**

- Ce document (`sfia-notion-content-categorization.md`)
- `sfia-knowledge-layer.md` §10 structure cible Notion
- `notion-target-content-map.md` (actualisé)
- `notion-publication-plan.md` (actualisé)
- `prompts/templates/09-prepare-notion-mapping.md`

## 14. Décision

**Décision proposée : NOTION CONTENT AUDIT COMPLETE WITH RESERVES**

**Justification :**

- Audit et inventaire réalisés sur ~954 fichiers Markdown + inventaires texte
- Catégorisation structurée selon 7 catégories Notion
- 18 pages dédiées, ~55 entrées base, ~48 résumés identifiés
- Majorité repo-only correctement identifiée (~720 docs)
- Risques anciens payloads Notion/CMP documentés
- Cycle 2 cadré sans produire le modèle cible

**Réserves :**

| Réserve | Priorité | Action |
|---------|----------|--------|
| `prompts/governance/notion/` non inventorié fichier par fichier | P1 | Compléter avant cycle 2 ou en parallèle |
| Role Methods Draft — arbitrage publication | P1 | Décision humaine cycle 2 |
| Terminologie SFA dans anciens plans Notion | P1 | Harmoniser cycle 2 |
| Cycle Routing Guide statut candidate | P2 | Valider après usage réel |
| Profondeur publication Interv360 | P1 | Arbitrage humain cycle 2 |

**Prochaine étape :** validation humaine de cette catégorisation, puis lancement **Cycle 2 — Notion Target Model & Integration Plan**.
