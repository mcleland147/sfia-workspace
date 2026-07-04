---
status: candidate
version: v1.1
cycle_type: notion preparation / live export audit
scope: Notion legacy export audit before Lot 0B
---

# SFIA Notion Live Export Audit

**Version :** v1.1  
**Statut :** Candidate  
**Cycle :** Lot 0A — Audit export Notion legacy  
**Branche :** `notion/sfia-live-export-audit`  
**Base :** `main` @ `0ac751e` (post PR #86)

## 1. Objectif

Ce document audite l'**export réel** de l'espace Notion SFIA legacy fourni par Morris, afin de préparer le Lot 0B (création de l'espace `SFIA v1.1 — Workspace`).

Il compare l'export live avec :

- l'inventaire repo Cycle 2 (`sfia-notion-current-space-inventory.md`) ;
- le modèle cible Cycle 2 (`sfia-notion-target-model-and-integration-plan.md`) ;
- la catégorisation Cycle 1 (`sfia-notion-content-categorization.md`).

Ce cycle **n'a pas** créé, modifié, synchronisé ou publié dans Notion live.

## 2. Source export analysée

| Élément | Valeur |
|---------|--------|
| Chemin local | `/Users/morris/Downloads/ExportBlock-c5ca2499-3447-49b6-98b2-248d1a745e51-Part-1` |
| Type | Export Notion Markdown + CSV (ExportBlock) |
| Date export | Non datée dans l'archive — contenus datés juin 2026 |
| Racine export | `SFIA Home` (+ fichier racine `SFIA Home *.md`) |
| Traitement | Lecture seule — **non copié dans le repo** |

## 3. Limites de l'audit

- Audit basé sur **export statique** — pas d'accès API Notion live dans ce cycle.
- Les propriétés Notion complètes ne sont visibles que partiellement via les CSV exportés.
- Les relations entre bases ne sont pas entièrement reconstructibles depuis l'export.
- Le contenu repo **v1.1** (foundation consolidée, Cycle Routing Guide, engines, etc.) est **postérieur** à la majorité des pages exportées (v1.0 ou snapshots juin 2026).
- Les versions repo font foi — Notion legacy ne remplace pas Git.

## 4. Synthèse exécutive

| Indicateur | Valeur |
|------------|--------|
| Fichiers exportés (total) | 159 |
| Fichiers Markdown | 137 |
| Fichiers CSV | 20 (10 bases × 2 exports : filtré + `_all`) |
| Fichiers HTML | 0 |
| Sections principales (hub) | 13 sous `SFIA Home` |
| Bases CSV détectées | 10 |
| Pages prompts (fichiers `.md`) | 52 |
| Entrées `[ARCHIVED TEST]` | 9 |
| Contenu « Préparation réalisation » | ~16 fichiers (pages + prompts + templates) |
| **REPRENDRE_DANS_SFIA_V1_1** | ~8 |
| **EDITORIALISER_AVANT_REPRISE** | ~28 |
| **INTEGRER_DANS_BASE_CIBLE** | ~35 (sélectif — pas les 52 prompts) |
| **RESUMER_ET_LIER** | ~10 |
| **ARCHIVER_LEGACY** | ~25 |
| **IGNORER** | ~12 |
| **A_ARBITRER** | ~14 |
| Cohérence modèle cible v1.1 | **Faible** — structure legacy orientée CMP/registry, pas modèle 7 sections |

**Conclusion :** l'espace legacy contient un socle utile (architecture v1.0, prompts Interv360, projet Interv360, ADR CMP) mais **ne correspond pas** au modèle cible v1.1. La reprise doit être **sélective et éditorialisée depuis le repo**, pas par copie d'export.

## 5. Structure réelle de l'export

### 5.1 Volumétrie

```text
ExportBlock-c5ca2499-3447-49b6-98b2-248d1a745e51-Part-1/
├── SFIA Home *.md                    (page racine — hub 13 sections)
└── SFIA Home/
    ├── SFIA Foundation/              (5 pages)
    ├── SFIA Core/                    (1 page — quasi vide)
    ├── SFIA Architecture/            (6 docs v1.0 + 6 hubs)
    ├── SFIA Components/              (base CSV + 2 pages)
    ├── SFIA Laboratory/              (base Experiments + 6 pages)
    ├── SFIA Templates/               (base CSV + 11 pages)
    ├── SFIA Standards/               (base CSV + 4 pages)
    ├── SFIA Prompt Library/          (base CSV + 52 pages prompts)
    ├── SFIA Projects/                (base CSV + 1 projet actif)
    ├── SFIA Roadmap/                 (2 pages)
    ├── SFIA Governance/              (base ADR + KPI + 1 page)
    ├── SFIA Runtime/                 (2 pages)
    └── SFIA Knowledge/               (FAQ, Glossary, Getting Started + bases REX/Knowledge Articles + subtree temporaire)
```

### 5.2 Pages Markdown détectées

137 fichiers `.md` répartis en :

| Zone | ~Pages | Nature |
|------|--------|--------|
| Hub / navigation | 14 | Index sections |
| SFIA Foundation | 5 | Vision, Valeurs, Principes, Constitution, Historique |
| SFIA Architecture | 12 | 6 hubs + 6 documents v1.0 |
| SFIA Prompt Library | 52 | Prompts CMP/Interv360/préparation réalisation |
| SFIA Knowledge | 18 | FAQ, Glossary, Getting Started, articles, subtree temporaire |
| SFIA Templates | 11 | Templates préparation réalisation + TPL-001 |
| SFIA Standards | 4 | STD-001 + préparation réalisation |
| SFIA Laboratory | 6 | EXP-011 à EXP-015 + test |
| SFIA Governance | 3 | Governance Model + ADR pages |
| SFIA Projects | 1 | PRJ-INTERV360 |
| SFIA Components | 2 | CMP-001 + test |
| SFIA Roadmap | 1 | Roadmap Board |
| SFIA Runtime | 2 | Overview + Runbooks |
| SFIA Core | 1 | Operating Model (quasi vide) |

### 5.3 Bases / CSV détectés

| Base CSV | databaseId (manifest repo) | Entrées actives (hors test) | Propriétés visibles |
|----------|---------------------------|------------------------------|---------------------|
| Prompts | `ceee9b1d-...` | ~51 prompts | Prompt, Status, Category, Model, Version, Tags |
| Templates | `2bb3717a-...` | ~10 templates | (CSV) |
| Standards | `20fa398e-...` | ~3 standards | (CSV) |
| Components | `056fa8ce-...` | 1 (CMP-001) | (CSV) |
| Experiments | `05bc96b1-...` | 5 (EXP-011–015) | (CSV) |
| Knowledge Articles | (manifest) | ~6 articles | Category, Status, Tags |
| REX | (manifest) | 1 (REX-001) | (CSV) |
| ADR | (manifest) | 1 (ADR-002) + test | ADR, Status, Decision, Impact |
| Projects | (manifest) | 1 (PRJ-INTERV360) | Status, Priority, Health |
| KPI | (manifest) | 0 actif (+ test) | (CSV) |

Les 10 bases correspondent aux hypothèses de `export-manifest.json` (juin 2026) — **confirmé**.

### 5.4 Arborescence principale

L'espace legacy est organisé autour d'un **hub CMP / registry** :

```text
SFIA Home
├── Foundation          → vision/mission (pas Engineering Principles repo)
├── Core                → Operating Model (stub)
├── Architecture        → docs v1.0 (pas v1.1)
├── Components          → CMP-001
├── Laboratory          → ontologie/expérimentations (hors modèle v1.1)
├── Templates           → mix TPL-001 + préparation réalisation
├── Standards           → STD-001 + préparation réalisation
├── Prompt Library      → 52 prompts (majoritairement Interv360/UX/QA)
├── Projects            → Interv360
├── Roadmap             → board
├── Governance          → ADR + KPI
├── Runtime             → runbooks (hors modèle v1.1)
└── Knowledge           → FAQ, glossary, articles, subtree temporaire
```

**Absences notables vs modèle cible v1.1 :**

- Pas de Cycle Routing Guide
- Pas de Rules & Guardrails canoniques
- Pas de Validation Checklist v1.1
- Pas de Knowledge Layer
- Pas de Prompt Generation / Validation / Repository Execution engines
- Pas de section « Démarrer avec SFIA » structurée
- Pas de Figma Design-first
- Pas de Controlled Delivery

### 5.5 Pièces jointes / autres fichiers

- 2 fichiers `.DS_Store` (macOS — ignorer)
- Aucune pièce jointe binaire détectée dans l'export
- Aucun HTML

## 6. Écarts avec l'inventaire Cycle 2

### 6.1 Hypothèses confirmées

| Hypothèse Cycle 2 | Statut export |
|-------------------|---------------|
| ~10 bases Notion inférées depuis manifest | **Confirmé** — 10 bases CSV |
| Structure orientée CMP/composants | **Confirmé** — SFIA Components, Laboratory, PRM-001 |
| Publications par lots (prompt library, QA, UX) | **Confirmé** — 52 prompts, familles QA/UX/ROLE |
| Projet Interv360 présent | **Confirmé** — PRJ-INTERV360 |
| ADR présents | **Confirmé** — ADR-002 (CMP Notion) |
| Contenu antérieur à foundation v1.1 | **Confirmé** — docs Architecture v1.0, pas v1.1 |
| Entrées test ARCHIVED | **Confirmé** — 9 entrées test juin 2026 |

### 6.2 Hypothèses infirmées

| Hypothèse Cycle 2 | Réalité export |
|-------------------|----------------|
| Terminologie SFA dominante | **Infirmé** — espace déjà nommé **SFIA** (pas SFA) |
| Operating Model substantiel publié | **Infirmé** — page quasi vide |
| ~12 pages cibles publication plan | **Infirmé** — structure différente, plus orientée registry |
| Contenu Fast Track capitalisation publié | **Partiellement infirmé** — absent ; préparation réalisation temporaire à la place |

### 6.3 Éléments nouveaux détectés

| Élément | Impact |
|---------|--------|
| SFIA Laboratory + EXP-011–015 (ontologie) | Non prévu modèle v1.1 — arbitrage |
| SFIA Runtime (Runbooks, Overview) | Non dans modèle cible — archive ou repo-only |
| SFIA Foundation (Constitution, Vision, Valeurs) | Complément marketing — pas dans repo v1.1 |
| Subtree « Préparation réalisation — publication temporaire » (8 pages) | Publication temporaire Interv360 — archiver |
| 52 prompts (vs ~15 dans repo catalog actuel) | Volume legacy supérieur — reprise sélective |
| KNO-001 Engineering Principles (snapshot Notion) | Version antérieure au doc repo v1.1 |
| Governance Model page | Non mappé repo v1.1 direct |

### 6.4 Éléments attendus mais absents

| Attendu (repo v1.1 / modèle cible) | Présent export ? |
|-----------------------------------|------------------|
| Cycle Routing Guide | Non |
| Rules & Guardrails v1.1 | Non |
| Validation Checklist v1.1 | Non |
| Knowledge Layer | Non |
| Automation Architecture v1.1 | Non |
| Prompt/Validation/Repository engines | Non |
| Figma Design-first UI method | Non |
| Global Capitalization | Non |
| Interv360 REX capitalisé (repo) | Non — REX-001 CMP only |
| Controlled Delivery | Non |
| Prompt templates 01–10 (repo) | Non — autre modèle prompts |

## 7. Inventaire catégorisé des pages et bases legacy

### 7.1 Hubs et sections principales

| Nom exporté | Type | Chemin export | Domaine | Statut | Utilité v1.1 | Catégorie | Destination cible | Lien repo | Justification | Réserve |
|-------------|------|---------------|---------|--------|--------------|-----------|-------------------|-----------|---------------|---------|
| SFIA Home | Page | racine | SFIA Operating Model | active | Haute | EDITORIALISER_AVANT_REPRISE | Accueil SFIA | Fast Track README | Hub à reconstruire — 13 liens legacy | Structure différente modèle cible |
| SFIA Foundation | Page | SFIA Home/SFIA Foundation | SFIA Foundation | legacy | Moyenne | A_ARBITRER | Fondations & Architecture | docs/foundation/ | Vision/Constitution — pas équivalent repo | Complément ou archive |
| SFIA Core | Page | SFIA Home/SFIA Core | SFIA Operating Model | obsolete | Faible | ARCHIVER_LEGACY | Archives | sfia-chatgpt-cursor-operating-model.md | Stub Operating Model vide | Reprendre depuis repo |
| SFIA Architecture | Page | SFIA Home/SFIA Architecture | SFIA Architecture | active | Haute | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | docs/architecture/ | Hub utile — contenu v1.0 | Migrer v1.1 depuis repo |
| SFIA Components | Page | SFIA Home/SFIA Components | CMP | active | Faible | RESUMER_ET_LIER | Archives / Références repo | tools/cmp-001/ | CMP-001 — repo-only | Ne pas promouvoir navigation principale |
| SFIA Laboratory | Page | SFIA Home/SFIA Laboratory | Legacy / SFA | legacy | Faible | A_ARBITRER | Archives / Références repo | — | Ontologie/expérimentations | Hors modèle v1.1 |
| SFIA Templates | Page | SFIA Home/SFIA Templates | SFIA Prompt System | mixed | Moyenne | INTEGRER_DANS_BASE_CIBLE | Prompt System | docs/templates/ + method/templates/ | Mix prep réalisation + TPL-001 | Reprise sélective |
| SFIA Standards | Page | SFIA Home/SFIA Standards | SFIA Validation | mixed | Moyenne | INTEGRER_DANS_BASE_CIBLE | Prompt System / Checklists | docs/standards/ | STD-001 + prep réalisation | Éditorialiser |
| SFIA Prompt Library | Page | SFIA Home/SFIA Prompt Library | SFIA Prompt System | active | Haute | INTEGRER_DANS_BASE_CIBLE | Prompt System | prompts/ | 52 prompts — sélection ~15–20 | Volume legacy |
| SFIA Projects | Page | SFIA Home/SFIA Projects | Interv360 | active | Haute | REPRENDRE_DANS_SFIA_V1_1 | Projets & Capitalisation | projects/interv360/ | Hub projet Interv360 | Synthèse depuis repo |
| SFIA Roadmap | Page | SFIA Home/SFIA Roadmap | SFIA Architecture | active | Moyenne | RESUMER_ET_LIER | Projets & Capitalisation | docs/roadmaps/ | Roadmap board | Lien repo |
| SFIA Governance | Page | SFIA Home/SFIA Governance | SFIA Architecture | active | Moyenne | INTEGRER_DANS_BASE_CIBLE | Fondations & Architecture | docs/architecture/sfia-decision-engine.md | ADR + KPI | ADR-002 historique CMP |
| SFIA Runtime | Page | SFIA Home/SFIA Runtime | Legacy / SFA | legacy | Faible | ARCHIVER_LEGACY | Archives / Références repo | — | Runbooks — hors scope v1.1 | — |
| SFIA Knowledge | Page | SFIA Home/SFIA Knowledge | SFIA Notion | mixed | Moyenne | EDITORIALISER_AVANT_REPRISE | Démarrer avec SFIA | sfia-knowledge-layer.md | FAQ, glossary, articles | Subtree temp à archiver |

### 7.2 Bases CSV

| Nom exporté | Type | Chemin export | Domaine | Statut | Utilité v1.1 | Catégorie | Destination cible | Lien repo | Justification | Réserve |
|-------------|------|---------------|---------|--------|--------------|-----------|-------------------|-----------|---------------|---------|
| Prompts | Base CSV | SFIA Prompt Library/Prompts*.csv | SFIA Prompt System | active | Haute | INTEGRER_DANS_BASE_CIBLE | Prompt System — Prompt Cards | prompts/prompt-catalog.md | ~51 entrées — aligner repo | Ne pas importer brut |
| Templates | Base CSV | SFIA Templates/SFIA — Templates*.csv | SFIA Prompt System | mixed | Moyenne | INTEGRER_DANS_BASE_CIBLE | Prompt System — Templates | prompts/templates/ | Recréer structure v1.1 | Prep réalisation obsolète |
| Standards | Base CSV | SFIA Standards/SFIA — Standards*.csv | SFIA Validation | mixed | Moyenne | INTEGRER_DANS_BASE_CIBLE | Checklists / Practices | docs/standards/ | STD-001 seul pertinent | — |
| Components | Base CSV | SFIA Components/Components*.csv | CMP | active | Faible | ARCHIVER_LEGACY | Archives / Références repo | tools/cmp-001/ | CMP registry | Repo-only |
| Experiments | Base CSV | SFIA Laboratory/Experiments*.csv | Legacy / SFA | legacy | Faible | ARCHIVER_LEGACY | Archives / Références repo | — | Ontologie lab | — |
| Knowledge Articles | Base CSV | SFIA Knowledge/Knowledge Articles*.csv | Interv360 | mixed | Moyenne | EDITORIALISER_AVANT_REPRISE | Projets & Capitalisation | projects/interv360/ | Articles Interv360 + KNO-001 | KNO-001 = snapshot ancien |
| REX | Base CSV | SFIA Knowledge/REX*.csv | REX | active | Moyenne | INTEGRER_DANS_BASE_CIBLE | Projets & Capitalisation — Assets | audit-rex/interv360-application-rex.md | REX-001 CMP — pas REX repo | Reprendre REX repo |
| ADR | Base CSV | SFIA Governance/ADR*.csv | ADR | active | Moyenne | INTEGRER_DANS_BASE_CIBLE | Projets & Capitalisation — ADR | 02-architecture/adr/ | ADR-002 CMP + Interv360 ADR repo | Deux familles ADR |
| Projects | Base CSV | SFIA Projects/Projects*.csv | Interv360 | active | Haute | INTEGRER_DANS_BASE_CIBLE | Projets & Capitalisation — Projets | projects/interv360/ | PRJ-INTERV360 | — |
| KPI | Base CSV | SFIA Governance/KPI*.csv | Legacy / SFA | obsolete | Faible | IGNORER | — | — | Vide sauf test | — |

### 7.3 Documents Architecture v1.0 (pages)

| Nom exporté | Type | Domaine | Catégorie | Destination | Lien repo | Réserve |
|-------------|------|---------|-----------|-------------|-----------|---------|
| SFIA Decision Engine v1.0 | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | sfia-decision-engine.md | Repo v1.1 — version différente |
| SFIA Delivery Pipeline v1.0 | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | sfia-delivery-pipeline.md | Idem |
| SFIA Platform Architecture v1.0 | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | sfia-platform-architecture.md | Idem |
| SFIA Repository Blueprint v1.0 | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | sfia-repository-blueprint.md | Idem |
| SFIA Domain Model | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | sfia-domain-model.md | Idem |
| SFIA Meta Model v1.0 | Page | SFIA Architecture | EDITORIALISER_AVANT_REPRISE | Fondations & Architecture | sfia-meta-model.md | Idem |

### 7.4 Prompt Library — synthèse par famille

| Famille prompts export | ~Count | Catégorie dominante | Destination | Lien repo | Réserve |
|------------------------|--------|---------------------|-------------|-----------|---------|
| PROMPT-QA-* (001–010) | 10 | INTEGRER_DANS_BASE_CIBLE | Prompt System | prompts/qa/ | Aligner catalog repo |
| PROMPT-UXUI-* (001–015) | 15 | EDITORIALISER_AVANT_REPRISE | Prompt System | prompts/ux-ui/ | Jalon UX V1 — contexte Interv360 |
| PROMPT-UX-* (001–003) | 3 | INTEGRER_DANS_BASE_CIBLE | Prompt System | prompts/ux-ui/ | — |
| PROMPT-ROLE-* (001–003) | 3 | INTEGRER_DANS_BASE_CIBLE | Prompt System | docs/practices/roles/ | — |
| PROMPT-CAD-* (001–002) | 2 | INTEGRER_DANS_BASE_CIBLE | Prompt System | — | Cadrage Interv360 |
| PROMPT-ARB-* (001–002) | 2 | RESUMER_ET_LIER | Projets & Capitalisation | 01-cadrage/ | Arbitrages MVP |
| PROMPT-ARCH-001 | 1 | INTEGRER_DANS_BASE_CIBLE | Prompt System | prompts/architecture/ | — |
| PROMPT-SEC-001 | 1 | INTEGRER_DANS_BASE_CIBLE | Prompt System | prompts/security/ | — |
| PROMPT-GOV-* (001–002) | 2 | ARCHIVER_LEGACY | Archives | — | Sync gouvernance Notion — obsolète |
| PRM-001 Notion Object Creation | 1 | ARCHIVER_LEGACY | Archives | tools/cmp-001/ | Prompt CMP — ne pas reprendre navigation |
| Prompt — * (préparation réalisation) | 10 | ARCHIVER_LEGACY | Archives | — | Cycle temporaire Interv360 |
| `[ARCHIVED TEST]` prompts | 0 md | IGNORER | — | — | — |

### 7.5 Contenu « Préparation réalisation » (groupe)

| Nom exporté | Type | Catégorie | Destination | Justification |
|-------------|------|-----------|-------------|---------------|
| Préparation réalisation — publication temporaire (hub + 8 sous-pages) | Page | ARCHIVER_LEGACY | Archives / Références repo | Publication temporaire juin 2026 — clos |
| Templates préparation réalisation (×9) | Page | ARCHIVER_LEGACY | Archives | Doublons templates repo |
| Standards préparation réalisation (×2) | Page | ARCHIVER_LEGACY | Archives | — |
| Prompts préparation réalisation (×10) | Page | ARCHIVER_LEGACY | Archives | — |
| Knowledge Articles Interv360 prep (×2) | Page | RESUMER_ET_LIER | Projets & Capitalisation | Synthèse depuis repo |

### 7.6 Entrées `[ARCHIVED TEST]` (groupe)

| Zone | Count | Catégorie | Action |
|------|-------|-----------|--------|
| Toutes bases + pages test juin 2026 | 9 | IGNORER | Ne pas reprendre — tests CMP |

## 8. Contenus à reprendre dans SFIA v1.1

Reprise = **réédition depuis repo v1.1**, pas copie export.

| Contenu legacy | Destination v1.1 | Source repo prioritaire |
|----------------|------------------|-------------------------|
| Hub projet Interv360 | Projets & Capitalisation | projects/interv360/README.md |
| Getting Started | Démarrer avec SFIA | Fast Track README + Operating Model |
| FAQ SFIA | Démarrer avec SFIA | À créer depuis repo |
| Glossary | Démarrer avec SFIA | À enrichir |
| PRJ-INTERV360 (base) | Base Projets | projects/interv360/ |
| Prompts QA/ARCH/SEC alignés repo | Base Prompt Cards | prompts/ |
| ADR Interv360 (repo) | Base ADR | 02-architecture/adr/ — **pas** ADR-002 CMP seul |

**~8 éléments** à reprendre directement ( après validation ).

## 9. Contenus à éditorialiser avant reprise

| Contenu | Raison | Source repo |
|---------|--------|-------------|
| 6 docs Architecture v1.0 | Version v1.0 vs v1.1 consolidée | docs/architecture/*.md |
| KNO-001 Engineering Principles | Snapshot Notion ≠ repo v1.1 | docs/foundation/sfia-engineering-principles.md |
| SFIA Home hub | Structure legacy vs 7 sections | Modèle cible §4 |
| SFIA Knowledge hub | Mélange FAQ + temp | sfia-knowledge-layer.md |
| PROMPT-UXUI-* (15) | Contexte jalon UX V1 Interv360 | Éditorialiser ou archiver |
| Governance Model | Non aligné repo | sfia-decision-engine.md |

**~28 éléments.**

## 10. Contenus à intégrer dans les bases cibles

| Base cible v1.1 | Source legacy | Entrées estimées | Mode |
|-----------------|---------------|------------------|------|
| Prompt Cards / Families | Prompts CSV + pages | 15–20 sélectionnés | Créer depuis repo, pas import CSV |
| Prompt Templates | Templates CSV | 10 repo templates (01–10) | Repo fait foi |
| ADR / Décisions | ADR CSV + pages Interv360 repo | 8–9 ADR Interv360 | Repo ADR, pas ADR-002 CMP |
| Projets | Projects CSV | 1 (Interv360) | Enrichir depuis repo |
| Checklists | Standards partiel | 2–3 | Depuis checklists repo |
| Practices & Templates | Templates/Standards legacy partiel | Sélectif | Repo practices |
| Assets capitalisation | REX-001 | 1 | Préférer interv360-application-rex.md repo |

**~35 entrées** — création manuelle éditorialisée, **pas import CSV brut**.

## 11. Contenus à archiver en legacy

- Espace entier actuel → **SFIA Legacy — Archive ancienne version**
- Subtree « Préparation réalisation — publication temporaire » (~10 pages)
- SFIA Runtime (Runbooks, Overview)
- SFIA Core stub Operating Model
- PROMPT-GOV-* (sync gouvernance Notion)
- PRM-001 (Notion Object Creation)
- Prompts/templates/standards préparation réalisation (~21 fichiers)
- SFIA Components / CMP-001 page (lien archive)
- SFIA Laboratory / Experiments (si arbitrage = archive)

**~25 éléments** — conserver dans legacy, bannière avertissement.

## 12. Contenus à ignorer

- 9 entrées `[ARCHIVED TEST]` (juin 2026)
- Base KPI (vide)
- Fichiers `.DS_Store`
- Doublons CSV `_all` vs filtré (même données)
- Pages hub vides ou stubs sans contenu

**~12 éléments.**

## 13. Points d'arbitrage humain

| # | Sujet | Recommandation provisoire |
|---|-------|---------------------------|
| 1 | SFIA Foundation (Constitution, Vision, Valeurs) | Archiver legacy — ne pas fusionner repo v1.1 |
| 2 | SFIA Laboratory / ontologie EXP-011–015 | Archiver legacy — hors modèle v1.1 |
| 3 | SFIA Runtime | Archiver legacy |
| 4 | 52 prompts legacy vs ~20 repo | Reprendre ~15–20 alignés repo catalog |
| 5 | PROMPT-UXUI-* (15 prompts jalon V1) | Archiver ou résumer — contexte Interv360 clos |
| 6 | ADR-002 (CMP Notion) vs ADR Interv360 repo | ADR repo dans base ; ADR-002 en archive governance |
| 7 | KNO-001 snapshot vs Engineering Principles repo | Repo v1.1 fait foi — réédition |
| 8 | Import CSV vs création manuelle bases | **Création manuelle** — no raw import |
| 9 | Getting Started / FAQ / Glossary legacy | Rééditer depuis modèle cible Accueil |
| 10 | REX-001 CMP vs interv360-application-rex.md | Repo REX fait foi |
| 11 | Governance Model page | Arbitrer — probablement archive |
| 12 | STD-001 Object Lifecycle | Vérifier alignement repo standards |
| 13 | Timing suppression legacy | Uniquement après validation explicite post-Lot 6 |
| 14 | Revue live complémentaire | Recommandée avant Lot 0B si export incomplet |

## 14. Recommandation pour Lot 0B

### Peut-on passer au Lot 0B ?

**Décision proposée : GO LOT 0B WITH RESERVES**

**Justification GO :**

- Export analysé — volumétrie et structure connues
- Écarts Cycle 2 documentés
- Mapping vers modèle cible v1.1 établi
- Stratégie legacy confirmée (ne pas supprimer, créer nouvel espace)
- Liste reprise sélective vs archive vs ignore prête
- Aucun blocage technique repo identifié

**Réserves (non bloquantes pour Lot 0B structure vide) :**

| Réserve | Impact Lot 0B | Action |
|---------|---------------|--------|
| Export statique — pas revue live API | Moyen | Revue live rapide Morris avant création contenu Lot 1 |
| 14 points arbitrage ouverts | Faible pour Lot 0B | Lot 0B = structure vide — arbitrages avant Lot 1 |
| Repo v1.1 postérieur à export | Fort pour contenu | Lot 0B crée structure — contenu depuis repo Lot 1+ |
| Import CSV déconseillé | Fort | Lot 0B manuel — pas d'import |

### Lot 0B attendu (hors ce cycle)

1. Créer espace **SFIA v1.1 — Workspace**
2. Renommer / marquer legacy **SFIA Legacy — Archive ancienne version**
3. Ajouter bannière legacy (validation humaine)
4. **Aucune suppression**
5. **Aucune publication Lot 1**
6. Préparer structure vide ou minimale (7 sections + bases vides)
7. **Ne pas** importer export CSV

## 15. Risques identifiés

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Copie brute export → nouveau espace | Duplication contenu v1.0 obsolète | Reprise depuis repo v1.1 uniquement |
| Import CSV prompts (51 entrées) | Prompts obsolètes, prep réalisation | Création manuelle bases depuis repo |
| Confusion v1.0 Notion vs v1.1 repo | Décisions incorrectes | Repo fait foi — badge version |
| Suppression legacy prématurée | Perte contenu prep réalisation | Archiver d'abord — GO explicite pour delete |
| Operating Model vide en legacy | Fausse impression publié | Lot 1 depuis repo Operating Model |
| Laboratory/Runtime promus par erreur | Navigation polluée | Exclure modèle cible |
| ADR-002 CMP confondu avec ADR Interv360 | Mauvaise base ADR | Séparer gouvernance CMP vs projet |

## 16. Décision

**Décision proposée : NOTION LIVE EXPORT AUDIT COMPLETE WITH RESERVES**

| Critère | Statut |
|---------|--------|
| Export analysé | Oui — 159 fichiers |
| Comparaison Cycle 2 | Oui — §6 |
| Comparaison modèle cible | Oui — §7–11 |
| Catégorisation action | Oui — 7 catégories |
| Recommandation Lot 0B | **GO LOT 0B WITH RESERVES** |
| Export ajouté au repo | **Non** |
| Notion live modifié | **Non** |

**Prochaine étape :** validation humaine Morris → PR readiness Lot 0A → Lot 0B (création espace structure vide).
