# SFIA Foundation Documents — Audit

**Date** : 2026-07-03
**Branche** : `capitalization/sfia-documentation-completeness`
**Inventaire associé** : `sfia-foundation-documents-inventory.md`

## 1. Objectif

Ce document audite les documents fondateurs existants du workspace SFIA.

Il prépare une future passe de mise à jour des fondamentaux, mais ne modifie pas encore les documents sources.

## 2. Question centrale

La question centrale est :

> Quels documents portent réellement les fondamentaux de la méthode et de l'architecture SFIA ?

## 3. Fondamentaux recherchés

Les fondamentaux recherchés sont :

1. Vision SFIA ;
2. Platform Architecture ;
3. Decision Engine ;
4. Delivery Pipeline ;
5. Domain Model ;
6. Metamodel ;
7. Rules & Guardrails ;
8. Automation / Orchestration ;
9. ChatGPT ↔ Cursor workflow ;
10. Repository Execution ;
11. Validation Engine ;
12. Knowledge / Notion Layer ;
13. Role / Métier Modeling ;
14. Interv360 comme cas de référence.

## 4. Synthèse

**Décision :**

> **FONDATIONS PARTIELLES**

**Résumé :**

Le workspace SFIA possède un **noyau fondateur fort** : six référentiels d'architecture v1.0 dans `docs/architecture/` (Platform Architecture, Decision Engine, Delivery Pipeline, Domain Model, Metamodel, Repository Blueprint), exportés depuis Notion et explicitement déclarés fondateurs.

La méthode opérationnelle **SFIA Fast Track** (`method/sfia-fast-track/`) apporte la couche exécutable : règles, garde-fous, automation, capitalisations Interv360, checklists et mapping Notion.

Les **lacunes** concernent surtout :
- l'absence de documents canoniques **autonomes** pour ChatGPT ↔ Cursor, Validation Engine, Prompt Generation Engine et Knowledge Layer ;
- le **décalage** entre la vision Notion-native des docs architecture et la réalité Git post-cleanup ;
- la **dispersion** des moteurs opérationnels (décrits dans `sfia-automation-architecture.md` sans specs dédiées).

Les fondations sont **identifiées** et **localisables** — elles ne sont pas encore **consolidées** en un socle unique prêt pour Notion.

## 5. Analyse par fondamental

### 5.1. Vision SFIA

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **Partiel** | `docs/architecture/sfia-platform-architecture.md` (vision plateforme) ; `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` (vision Fast Track opérationnelle) ; `docs/foundation/sfia-engineering-principles.md` | Deux couches : vision plateforme (Notion) vs vision méthode pilote (Git). Cohérentes mais non fusionnées |

### 5.2. Platform Architecture

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **OK** | `docs/architecture/sfia-platform-architecture.md` ; `method/sfia-fast-track/core/sfia-architecture-standards.md` | Référentiel fondateur complet + standards projets opérationnels |

### 5.3. Decision Engine

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **OK** | `docs/architecture/2026-06-27-sfia-decision-engine.md` | Document fondateur v1.0 substantiel (~1600 lignes). Non relié explicitement aux ADR Interv360 ni aux arbitrages MVP |

### 5.4. Delivery Pipeline

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **OK** | `docs/architecture/sfia-delivery-pipeline.md` ; `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` ; `method/sfia-fast-track/cycles/` ; templates `cycle-template.md`, `mvp-delivery-pattern-template.md` | Pipeline conceptuel + preuve opérationnelle Interv360 |

### 5.5. Domain Model

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **OK** | `docs/architecture/sfia-domain-model.md` | Modèle objets v1 formalisé. À vérifier alignement avec objets CMP-001 / Notion actuels |

### 5.6. Metamodel

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **OK** | `docs/architecture/sfia-meta-model.md` | Méta-modèle v1.0 — modules Core/Studio/Runtime/Knowledge/Laboratory/Projects. Mapper sur arborescence repo actuelle |

### 5.7. Rules & Guardrails

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **Partiel** | `docs/foundation/sfia-engineering-principles.md` ; `method/sfia-fast-track/core/sfia-rules-update.md` ; `checklists/guardrails-checklist.md` | Trois sources complémentaires — pas de document canonique unique « rules + guardrails » |

### 5.8. Automation / Orchestration

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **Partiel** | `method/sfia-fast-track/automation/sfia-automation-architecture.md` ; `docs/architecture/sfia-platform-architecture.md` (modules) ; `docs/architecture/2026-06-27-sfia-decision-engine.md` (orchestration décisionnelle) | Vision forte dans automation doc ; pas d'implémentation moteur |

### 5.9. ChatGPT ↔ Cursor workflow

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **Partiel** | `sfia-automation-architecture.md` §2–3, §13 ; `sfia-global-capitalization-reference.md` §13 ; `ui/figma-design-first-ui-method.md` (prompt Cursor UI) ; `archive/interv360-realization/realization-prompt-family.md` | Boucle décrite mais **pas de document canonique** `sfia-chatgpt-cursor-operating-model.md` |

### 5.10. Repository Execution

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **Partiel** | `docs/architecture/sfia-repository-blueprint.md` ; `sfia-rules-update.md` (PR, post-merge) ; `templates/pr-body-template.md`, `post-merge-template.md` ; `validation-checklist.md` | Blueprint + pratiques FT. Pas de spec « Repository Execution Engine » autonome |

### 5.11. Validation Engine

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **Partiel** | `sfia-automation-architecture.md` §5.7 ; `checklists/validation-checklist.md` ; `checklists/guardrails-checklist.md` ; `docs/practices/roles/qa-tester-method.md` | Concept moteur dans automation ; opérationnel via checklists — **pas de spec Validation Engine** |

### 5.12. Knowledge / Notion Layer

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **Partiel** | `sfia-repository-blueprint.md` ; `notion-target-content-map.md` ; `notion-publication-plan.md` ; `notion-publication-checklist.md` ; `exports/notion/README.md` | Préparation Notion avancée ; tension source vérité Notion vs Git ; pas de `sfia-knowledge-layer.md` |

### 5.13. Role / Métier Modeling

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **Partiel** | `docs/practices/roles/` (6 Role Methods) ; `sfia-meta-model.md` ; `prompt-catalog.md` §4 | 6 rôles présents — 5 Draft, 1 Official (QA). Modèle rôle dans metamodel |

### 5.14. Interv360 comme cas de référence

| Statut | Documents sources | Commentaire |
|--------|-------------------|-------------|
| **OK** | `projects/interv360/` (00–09) ; `cycles/interv360-*` ; `audit-rex/2026-07-03-interv360-application-rex.md` ; ADR actifs | Cas référence le plus capitalisé du workspace — à résumer pour Notion, pas publier brut |

## 6. Documents à mettre à jour ensuite

| Priorité | Document | Mise à jour attendue |
|----------|----------|----------------------|
| **P0** | *(à créer)* `sfia-chatgpt-cursor-operating-model.md` | Extraire et formaliser la boucle ChatGPT ↔ Cursor depuis automation + capitalization |
| **P1** | `docs/architecture/sfia-platform-architecture.md` | Réconcilier avec structure repo post-PR #81 (`docs/practices/`, `method/complementary/`) |
| **P1** | `docs/architecture/sfia-repository-blueprint.md` | Aligner arborescence cible avec workspace nettoyé |
| **P1** | `method/sfia-fast-track/documentation/archive/notion/notion-target-content-map.md` | Remplacer terminologie SFA par SFIA ; citer `docs/practices/` |
| **P1** | `method/sfia-fast-track/documentation/archive/notion/notion-publication-plan.md` | Idem + layers méthode/pratiques |
| **P1** | `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md` | Référence cartographie repo v2.6 (remplace audit doc pré-Round 3) |
| **P2** | `docs/practices/roles/*.md` (5 Draft) | Revue maturité avant publication Notion |
| **P2** | `sfia-automation-architecture.md` | Référencer documents canoniques moteurs une fois créés |

## 7. Documents canoniques à créer ou consolider ensuite

| Document canonique cible | Objectif | Source(s) à consolider |
|--------------------------|----------|------------------------|
| `sfia-platform-architecture.md` | Architecture globale SFIA | **Existe** — `docs/architecture/` — aligner |
| `2026-06-27-sfia-decision-engine.md` | Moteur de décision | **Existe** — `docs/architecture/` — relier opérationnel |
| `sfia-delivery-pipeline.md` | Pipeline de livraison | **Existe** — fusionner avec Fast Track cycles |
| `sfia-domain-model.md` | Concepts métier | **Existe** — vérifier objets CMP |
| `sfia-metamodel.md` | Modèle artefacts, cycles, rôles | **Existe** — mapper repo |
| `sfia-rules-and-guardrails.md` | Règles fondamentales unifiées | `sfia-engineering-principles.md` + `sfia-rules-update.md` + `guardrails-checklist.md` |
| `sfia-chatgpt-cursor-operating-model.md` | Modèle d'échange ChatGPT ↔ Cursor | `sfia-automation-architecture.md` §2–3, `sfia-global-capitalization-reference.md` §13 |
| `sfia-prompt-generation-engine.md` | Spec moteur prompts | `sfia-automation-architecture.md` §5.5 + `prompt-catalog.md` |
| `sfia-repository-execution-engine.md` | Spec exécution repo | `sfia-repository-blueprint.md` + règles PR/post-merge |
| `sfia-validation-engine.md` | Spec contrôles GO/NO-GO | `sfia-automation-architecture.md` §5.7 + checklists |
| `sfia-knowledge-layer.md` | Notion / couche connaissance | `sfia-repository-blueprint.md` + mapping Notion |

**Note** : six documents canoniques existent déjà sous `docs/architecture/`. La passe de consolidation doit **mettre à jour et relier**, pas repartir de zéro.

## 8. Recommandation

**Décision recommandée :**

> **Ne pas ouvrir le chantier Notion tant que les documents fondateurs n'ont pas été consolidés.**

Priorité immédiate :

1. Créer `sfia-chatgpt-cursor-operating-model.md` (lacune P0) ;
2. Aligner les 6 référentiels `docs/architecture/` avec l'arborescence repo actuelle ;
3. Extraire les specs des 3 moteurs (Prompt Generation, Repository Execution, Validation) depuis `sfia-automation-architecture.md` ;
4. Consolider `sfia-rules-and-guardrails.md` et `sfia-knowledge-layer.md` ;
5. **Ensuite** reprendre complétions P1 de l'audit capitalisation ;
6. **Ensuite** ouvrir `notion/sfia-business-ide-preparation`.

## 9. Suite proposée

1. Valider la liste des documents fondateurs (ce document + inventaire) ;
2. Choisir les documents canoniques cibles — six existent déjà, quatre à créer/consolider ;
3. Créer ou mettre à jour ces documents (branche dédiée `capitalization/sfia-foundation-consolidation`) ;
4. Relier les documents canoniques à la méthode SFIA Fast Track (`README`, mapping Notion) ;
5. Mettre à jour la matrice de capitalisation documentaire ;
6. Reprendre ensuite les complétions P1 classiques (README phases, prompts, Role Methods) ;
7. Ouvrir seulement ensuite le chantier Notion.

## 10. Cartographie rapide — deux couches fondateures

```text
Couche conceptuelle (Notion exports — docs/architecture/)
├── sfia-platform-architecture.md
├── 2026-06-27-sfia-decision-engine.md
├── sfia-delivery-pipeline.md
├── sfia-domain-model.md
├── sfia-meta-model.md
└── sfia-repository-blueprint.md

Couche opérationnelle (Git — method/sfia-fast-track/)
├── core/          → vision, règles, standards (exécution)
├── automation/    → orchestration + moteurs (spec partielle)
├── cycles/        → preuves Interv360
├── checklists/    → validation opérationnelle
└── documentation/ → Notion prep + audits

Couche pratiques (Git — docs/practices/)
└── roles/         → modélisation métiers (5 Draft + 1 Official)

Couche preuve (Git — projects/interv360/)
└── 00–09          → cas de référence terrain
```

La consolidation doit **relier** ces couches — pas les fusionner brutalement.

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
- `capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md` (remplace `sfia-foundation-v1.1-consolidation-plan.md`)

## Update — Superseded by Foundation v1.1 Consolidation

This audit is preserved as a historical pre-v1.1 foundation audit.

The gaps identified at the time of this audit have been addressed by the SFIA foundation v1.1 consolidation, including:

- Engineering Principles;
- Decision Engine;
- Repository Blueprint;
- Delivery Pipeline;
- ChatGPT ↔ Cursor Operating Model;
- Rules & Guardrails;
- Knowledge Layer;
- Automation Architecture v1.1;
- Prompt Generation Engine;
- Repository Execution Engine;
- Validation Engine;
- Validation Checklist;
- Prompt Catalog;
- Prompt Templates.

This document should no longer be used alone to assess the current SFIA foundation completeness.

Use instead:

- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`
