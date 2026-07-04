---
status: candidate
version: v1.1
cycle_type: notion preparation / current space inventory
scope: current Notion space and repository Notion traces inventory
---

# SFIA Notion Current Space Inventory

**Version :** v1.1  
**Statut :** Candidate  
**Cycle :** Préparation Notion — Cycle 2 (inventaire espace actuel)  
**Branche :** `notion/sfia-target-model-integration-plan`  
**Base :** `main` @ `72c87c0` (post PR #85)

## 1. Objectif

Ce document répond à la question :

> Qu'est-ce qui existe déjà côté Notion ou en traces Notion dans le repository, et que doit-on en faire ?

Il distingue :

- l'espace Notion live (si accessible) ;
- les traces Notion dans le repo ;
- les anciens mappings et plans ;
- les exports JSON ;
- les payloads notion-sync ;
- les logs notion-sync ;
- l'outillage CMP.

Il prépare la décision de stratégie pour le Cycle 2 : **ne pas supprimer brutalement l'ancien espace**, créer un **nouvel espace cible SFIA v1.1**, archiver l'ancien.

## 2. Sources auditées

| Source | Chemin | Rôle |
|--------|--------|------|
| Catégorisation Cycle 1 | `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md` | Inventaire contenus repo |
| Ancien mapping cible | `method/sfia-fast-track/documentation/notion-target-content-map.md` | Structure SFA/SFIA pré-v1.1 |
| Ancien plan publication | `method/sfia-fast-track/documentation/notion-publication-plan.md` | Pages proposées, ordre publication |
| Exports Notion | `exports/notion/` | 11 JSON + manifest + README |
| Archives notion-sync Interv360 | `projects/interv360/archive/notion-sync/` | 30 fichiers Markdown |
| Payloads notion-sync actifs | `projects/interv360/**/notion-sync-*.json` | 15 fichiers JSON |
| Outillage CMP | `tools/cmp-001/` | Client Notion, scripts, exemples (référencé, non modifié) |
| Checklist publication | `method/sfia-fast-track/checklists/notion-publication-checklist.md` | Contrôles publication |
| Knowledge Layer | `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Principes knowledge Notion |
| Archive méthode | `method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md` | Plan historique |

## 3. Limites de l'audit

> **Live Notion workspace not directly audited in this cycle.**  
> **Current Notion inventory is inferred from repository traces and existing Notion/CMP artifacts.**  
> **A live Notion review may be required before actual publication or archive.**

Contraintes appliquées :

- aucun accès Notion live utilisé dans ce cycle ;
- aucune sync, publication, suppression ou déplacement d'espace Notion ;
- aucune modification de `tools/cmp-001/` ;
- aucune modification des payloads JSON historiques ;
- inventaire basé uniquement sur les artefacts repository.

**Inférence espace Notion live (depuis `export-manifest.json`, juin 2026) :**

L'espace Notion actif semble contenir au minimum ces bases (IDs Notion présents dans le manifest) :

| Base inférée | databaseId (extrait manifest) | Fichier export |
|--------------|-------------------------------|----------------|
| Experiments | `05bc96b1-5793-...` | `experiments.json` |
| Components | `056fa8ce-bfab-...` | `components.json` |
| Prompts | `ceee9b1d-5a7f-...` | `prompts.json` |
| SFIA — Templates | `2bb3717a-3fbd-...` | `templates.json` |
| SFIA — Standards | `20fa398e-00e2-...` | `standards.json` |
| Knowledge | (manifest) | `knowledge.json` |
| KPI | (manifest) | `kpi.json` |
| Projects | (manifest) | `projects.json` |
| REX | (manifest) | `rex.json` |
| ADR | (manifest) | `adr.json` |

Structure inférée de l'ancien espace : orientée **CMP / composants / expérimentations**, pas alignée sur la structure SFIA v1.1 (Operating Model, Cycle Routing, engines, etc.).

## 4. Synthèse exécutive

| Indicateur | Valeur |
|------------|--------|
| Espace Notion live audité directement | Non |
| Bases Notion inférées (manifest) | ~10 |
| Exports JSON `exports/notion/` | 11 + manifest |
| Payloads notion-sync Interv360 (actifs) | 15 |
| Logs/archives notion-sync (md) | 30 |
| Documents mapping/plan legacy (md) | 2 |
| Terminologie SFA résiduelle | Oui — à harmoniser |
| Alignement foundation v1.1 | Non — artefacts antérieurs à consolidation |

**Conclusion synthétique :** l'écosystème Notion existant est un mélange de publications CMP par lots (prompt library, QA, Figma, architecture), d'exports JSON juin 2026, et de plans pré-v1.1. Il **ne doit pas être réutilisé tel quel** comme modèle cible. Il **ne doit pas être supprimé immédiatement** — archivage legacy recommandé.

## 5. Inventaire des éléments Notion existants

### 5.1 Espace Notion live

| Élément | Statut audit | Contenu inféré | Action recommandée |
|---------|--------------|----------------|-------------------|
| Espace SFIA / SFA actuel | Non audité live | Bases CMP, prompts, templates, standards, experiments | Renommer → **SFIA Legacy — Archive ancienne version** |
| Pages publiées par lots Interv360 | Non audité live | Prompt library, QA governance, Figma v1, architecture P1/P2 | Conserver en legacy ; reprendre sélectivement |
| Navigation / structure | Non audité live | Structure pré-v1.1, terminologie SFA possible | Ne pas étendre ; créer nouvel espace |

### 5.2 Anciens mappings Notion

| Fichier | Date / version | Contenu | Action |
|---------|----------------|---------|--------|
| `notion-target-content-map.md` | Pré-v1.1 | Structure 11 sections SFA/SFIA Fast Track | **Remplacer** — input historique pour Cycle 2 |
| `notion-publication-plan.md` | Pré-v1.1 | ~12 pages cibles, ordre publication | **Remplacer** — principes conservables |
| `archive/interv360-realization/notion-integration-plan.md` | Archive | Plan intégration historique | **Archiver** — ne pas réutiliser |

### 5.3 Plans de publication Notion

| Document | Éléments utiles à conserver | Éléments obsolètes |
|----------|----------------------------|-------------------|
| `notion-publication-plan.md` | Principes no raw sync, validation humaine, ~12 pages cibles | Références documents déplacés/renommés, terminologie SFA |
| `notion-publication-checklist.md` | Contrôles préparation / qualité / validation | À enrichir avec modèle v1.1 |

### 5.4 Exports Notion JSON

| Fichier | export-manifest | Action |
|---------|-----------------|--------|
| `exports/notion/export-manifest.json` | v1.1.0, 2026-06-27 | **Ne pas réutiliser** — référence IDs legacy |
| `exports/notion/adr.json` | 2 entrées | Archive technique |
| `exports/notion/components.json` | 2 entrées | Archive technique |
| `exports/notion/experiments.json` | 6 entrées | Archive technique |
| `exports/notion/knowledge.json` | — | Archive technique |
| `exports/notion/kpi.json` | — | Archive technique |
| `exports/notion/projects.json` | — | Archive technique |
| `exports/notion/prompts.json` | 2 entrées | Archive technique |
| `exports/notion/rex.json` | — | Archive technique |
| `exports/notion/standards.json` | 2 entrées | Archive technique |
| `exports/notion/templates.json` | 2 entrées | Archive technique |
| `exports/notion/README.md` | Règle no auto-sync | **Conserver** |

### 5.5 Payloads notion-sync Interv360

**15 payloads JSON actifs** (non modifiés ce cycle) :

| Payload | Phase | Thème |
|---------|-------|-------|
| `01-cadrage/notion-sync-payload.json` | Cadrage | Intake initial |
| `02-architecture/notion-sync-architecture-p1-payload.json` | Architecture | P1 |
| `02-architecture/notion-sync-architecture-p2-payload.json` | Architecture | P2 |
| `02-architecture/notion-sync-cmp-technical-roadmap-*` (2) | Architecture | Roadmap CMP |
| `02-architecture/notion-sync-existing-prompt-library-inventory.json` | Architecture | Inventaire prompts |
| `02-architecture/notion-sync-figma-v1-*` (2) | Design | Figma v1 |
| `02-architecture/notion-sync-prompt-library-*` (4) | Prompts | Lots 1, 2, final |
| `02-architecture/notion-sync-qa-*` (4) | QA | Prompt library, tester governance |

**Action globale :** `ARCHIVER_OU_NE_PAS_PUBLIER` — ne pas republier sans régénération et validation humaine.

### 5.6 Logs et archives notion-sync

**30 fichiers Markdown** dans `projects/interv360/archive/notion-sync/` :

| Famille | Fichiers | Exemples |
|---------|----------|----------|
| Summaries | 5 | architecture-p1/p2, figma-v1-closure, prompt-library-closure, qa-tester-governance |
| Preparation | 6 | lots prompt library, QA, CMP roadmap, figma |
| Publication logs | 7 | logs par lot publié |
| Payload reviews | 4 | cmp-payload-review par lot |
| Blocked / tooling | 3 | cmp-components-blocked, publication-tooling-check |
| Meta | 5 | README, summary, PR qa-tester |

**Action :** conserver en repo comme preuve ; zone **Archives / Références repo** dans le nouvel espace Notion (liens, pas republication).

### 5.7 Outillage CMP

| Élément | Chemin | Action |
|---------|--------|--------|
| CMP-001 package | `tools/cmp-001/` | **Ne pas modifier** — cycle dédié si évolution |
| Notion client | `tools/cmp-001/src/notionClient.js` | Repo-only |
| Exemples sync | `tools/cmp-001/examples/real-objects/*notion*` | Référence technique — ne pas réutiliser payloads |
| Exports CMP | `tools/cmp-001/exports/` | Repo-only |

## 6. Décisions recommandées par type d'élément

| Type d'élément | Décision |
|----------------|----------|
| Espace Notion live actuel | Archiver — renommer legacy, bannière avertissement |
| Nouvel espace cible | Créer **SFIA v1.1 — Workspace** |
| `notion-target-content-map.md` | Remplacer par modèle Cycle 2 — conserver en archive repo |
| `notion-publication-plan.md` | Remplacer — extraire principes utiles |
| `exports/notion/*.json` | Ne pas réutiliser directement |
| Payloads notion-sync Interv360 | Ne pas republier — archive repo |
| Logs notion-sync | Repo-only + liens archive Notion |
| CMP tooling | Hors scope — cycle dédié |
| Catégorisation Cycle 1 | Source principale pour modèle cible |

## 7. Éléments à conserver

- Principes de `notion-publication-plan.md` : no raw sync, validation humaine, éditorialisation
- `exports/notion/README.md` — règle no auto-sync
- `notion-publication-checklist.md` — base contrôles (à enrichir)
- Logs notion-sync comme preuve d'audit (repo)
- Contenus Notion live utiles identifiés lors d'une revue live future (à reprendre sélectivement)

## 8. Éléments à remplacer

- Structure navigation Notion legacy (11 sections SFA) → structure v1.1 (7 sections)
- `notion-target-content-map.md` → `sfia-notion-target-model-and-integration-plan.md`
- Exports JSON juin 2026 → futurs exports régénérés post-modèle v1.1
- Terminologie SFA → SFIA uniforme
- Mapping pages basé sur docs pré-consolidation → mapping basé catégorisation Cycle 1

## 9. Éléments à archiver

- Espace Notion actuel → **SFIA Legacy — Archive ancienne version**
- `projects/interv360/archive/notion-sync/` — déjà archivé repo
- Payloads JSON historiques — ne pas exposer navigation principale
- `archive/interv360-realization/notion-integration-plan.md`
- Documents foundation v1.1 planning/inputs (clos)

## 10. Éléments à ne pas réutiliser directement

| Élément | Raison |
|---------|--------|
| `exports/notion/*.json` | Datés juin 2026, IDs legacy, contenu partiel |
| Payloads `notion-sync-*.json` | Générés pour ancienne structure, lots CMP |
| `export-manifest.json` databaseIds | Peuvent ne plus correspondre au live |
| Structure 11 sections SFA | Non alignée foundation v1.1 |
| Raw sync depuis repo | Violation Knowledge Layer |
| Documentation Engine | Non existant — ne pas créer sans décision |

## 11. Risques identifiés

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Suppression prématurée espace legacy | Perte contenu publié utile | Archiver d'abord ; suppression après validation humaine |
| Republication payloads JSON | Doublons, contenu obsolète | No raw sync ; régénération cycle dédié |
| Confusion SFA / SFIA | Lisibilité | Harmonisation terminologie Cycle 2 |
| Espace live non audité | Écarts inventaire / réalité | Revue live avant Lot 1 publication |
| Reprise selective insuffisante | Perte travail éditorial passé | Inventaire live + mapping contenu utile |
| CMP modifié sans cycle dédié | Régression outillage | `tools/cmp-001/` protégé |

## 12. Recommandation de stratégie

**Décision recommandée :**

1. **Ne pas supprimer** immédiatement l'espace SFIA actuel.
2. **Créer** un nouvel espace cible : **SFIA v1.1 — Workspace**.
3. **Renommer** l'ancien espace : **SFIA Legacy — Archive ancienne version**.
4. **Ajouter** une bannière d'avertissement dans l'ancien espace :

   > ⚠️ Archive — ancienne structure SFIA.  
   > La source active est désormais : **SFIA v1.1 — Workspace**.  
   > Ne pas modifier sauf reprise contrôlée.

5. **Reprendre** uniquement les contenus utiles et validés (revue live requise).
6. **Supprimer définitivement** l'ancien espace uniquement après validation humaine explicite.

## 13. Décision

**Décision proposée : CURRENT NOTION SPACE INVENTORY COMPLETE WITH RESERVES**

**Justification :**

- Inventaire repository complet des traces Notion/CMP
- Stratégie legacy vs nouvel espace définie
- Risques payloads historiques documentés
- Réserve live Notion explicitée

**Réserves :**

| Réserve | Priorité | Action |
|---------|----------|--------|
| Espace Notion live non audité directement | P0 | Revue live avant publication Lot 1 |
| Contenu exact pages live inconnu | P1 | Inventaire live complémentaire |
| IDs bases manifest — validité | P1 | Vérifier avant toute reprise CMP |

**Input pour :** `sfia-notion-target-model-and-integration-plan.md`
