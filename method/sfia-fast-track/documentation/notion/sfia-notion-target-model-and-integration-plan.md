---
status: candidate
version: v1.1
cycle_type: notion preparation / target model and integration plan
scope: Notion target model, databases, mapping and integration plan
---

# SFIA Notion Target Model and Integration Plan

**Version :** v1.1  
**Statut :** Candidate  
**Cycle :** Préparation Notion — Cycle 2 (modèle cible + plan d'intégration)  
**Branche :** `notion/sfia-target-model-integration-plan`  
**Base :** `main` @ `72c87c0` (post PR #85)

## 1. Objectif

Ce document répond à la question :

> Comment doit être structuré le nouvel espace Notion SFIA v1.1 pour être utile, lisible et maintenable ?

Il s'appuie sur :

- `sfia-notion-content-categorization.md` (Cycle 1)
- `sfia-notion-current-space-inventory.md` (Cycle 2 — inventaire espace actuel)
- `sfia-knowledge-layer.md`
- `sfia-cycle-routing-guide.md`
- `notion-publication-checklist.md`

**Principe cible :**

```text
Repo = source de vérité versionnée
Notion = couche éditorialisée de lecture, navigation, usage et capitalisation
```

Notion **n'est pas** un miroir du repository.

Ce document **ne synchronise pas**, **ne publie pas**, **ne crée pas** de pages Notion réelles.

## 2. Principes directeurs

| Principe | Application Notion |
|----------|-------------------|
| Repository first | Chaque page/base pointe vers une source repo |
| No raw mirror | Pas d'export brut de l'arborescence Git |
| Curated knowledge | Publication par lots validés |
| Human validation first | Aucune publication sans GO humain |
| Editorialization | Specs techniques → pages lisibles |
| Cycle routing | Accueil oriente vers le type de cycle SFIA |
| Legacy preservation | Ancien espace archivé, pas supprimé |
| Progressive integration | 7 lots — du Operating Model aux archives |

## 3. Stratégie de migration recommandée

| Étape | Action | Timing |
|-------|--------|--------|
| 1 | Valider humainement ce modèle cible | Avant Lot 0 |
| 2 | Créer espace **SFIA v1.1 — Workspace** | Lot 0 |
| 3 | Renommer espace actuel → **SFIA Legacy — Archive ancienne version** | Lot 0 |
| 4 | Ajouter bannière legacy | Lot 0 |
| 5 | Revue live espace legacy — contenu à reprendre | Lot 0 |
| 6 | Intégrer lots 1–6 progressivement | Lots 1–6 |
| 7 | Suppression définitive legacy | Uniquement après validation humaine explicite |

## Stratégie ancien espace Notion

**Décision recommandée :**

- Ne pas supprimer l'espace SFIA actuel immédiatement.
- Créer un nouvel espace cible **SFIA v1.1 — Workspace**.
- Renommer l'ancien espace en archive legacy si possible : **SFIA Legacy — Archive ancienne version**.
- Ajouter une bannière d'avertissement dans l'ancien espace :

```text
⚠️ Archive — ancienne structure SFIA.
La source active est désormais : SFIA v1.1 — Workspace.
Ne pas modifier sauf reprise contrôlée.
```

- Reprendre uniquement les contenus validés ou utiles (revue live).
- Supprimer définitivement uniquement après validation humaine explicite.

## 4. Structure cible de l'espace Notion

```text
SFIA v1.1 — Workspace
├── Accueil SFIA
├── 1. Démarrer avec SFIA
├── 2. Fondations & Architecture
├── 3. Operating Model
├── 4. Automation & Execution
├── 5. Prompt System
├── 6. Projets & Capitalisation
└── 7. Archives / Références repo
```

### 4.1 Accueil SFIA

Page d'entrée unique. Répond à :

- Qu'est-ce que SFIA ?
- À quoi sert SFIA ?
- Comment utiliser SFIA ?
- Où aller selon mon besoin ?
- Quel cycle utiliser ?
- Quels sont les liens rapides ?

**Blocs recommandés (call-to-action) :**

| Bloc | Destination | Cycle SFIA associé |
|------|-------------|-------------------|
| Je veux cadrer un projet | §6 Projets + Cycle Routing Guide | Cadrage projet |
| Je veux créer un livrable | §2 Fondations ou §6 Projets | Création foundation / livrable projet |
| Je veux préparer un prompt Cursor | §5 Prompt System + Operating Model | Prompt generation |
| Je veux valider un résultat | Validation Checklist | Validation |
| Je veux préparer une PR | §3 Operating Model (PR readiness) | PR readiness |
| Je veux capitaliser un projet | §6 Capitalisation | Capitalisation |
| Je veux préparer une publication Notion | §7 Archives + checklist | Préparation Notion |

**Sources repo :** `sfia-global-capitalization.md`, Fast Track README, `sfia-cycle-routing-guide.md`

### 4.2 Démarrer avec SFIA

| Page Notion | Source repo | Catégorie Cycle 1 | Traitement |
|-------------|-------------|-------------------|------------|
| Guide de démarrage SFIA | Fast Track README + global capitalization (synthèse) | EDITORIALISER | Créer page hub |
| ChatGPT ↔ Cursor Operating Model | `sfia-chatgpt-cursor-operating-model.md` | PAGE_NOTION_DEDIEE | Éditorialiser |
| Cycle Routing Guide | `sfia-cycle-routing-guide.md` | PAGE_NOTION_DEDIEE | Publier (badge Candidate) |
| Rules & Guardrails | `sfia-rules-and-guardrails.md` | PAGE_NOTION_DEDIEE | Éditorialiser |
| Validation Checklist | `sfia-validation-checklist.md` | PAGE_NOTION_DEDIEE | Adapter format Notion |

### 4.3 Fondations & Architecture

| Page Notion | Source repo | Traitement |
|-------------|-------------|------------|
| Engineering Principles | `docs/foundation/sfia-engineering-principles.md` | PAGE — légère éditorialisation |
| Decision Engine | `docs/architecture/sfia-decision-engine.md` | PAGE |
| Delivery Pipeline | `docs/architecture/sfia-delivery-pipeline.md` | EDITORIALISER — simplifier Git |
| Platform Architecture | `docs/architecture/sfia-platform-architecture.md` | EDITORIALISER |
| Repository Blueprint | `docs/architecture/sfia-repository-blueprint.md` | EDITORIALISER — schéma visuel |
| Domain Model | `docs/architecture/sfia-domain-model.md` | EDITORIALISER |
| Meta-Model | `docs/architecture/sfia-meta-model.md` | EDITORIALISER |

**Règle :** pages denses → résumé exécutif + lien repo complet.

### 4.4 Operating Model

| Page | Rôle Notion |
|------|-------------|
| Operating Model | Usage quotidien ChatGPT ↔ Cursor |
| Cycle Routing Guide | Sélection cycle avant action |
| Knowledge Layer | Où ranger / capitaliser (complément routing) |
| Rules & Guardrails | Garde-fous opérationnels |
| Validation Checklist | Contrôle avant clôture |
| Global Capitalization | Preuve opérationnelle — section historique / preuves |

**Distinction :**

- **Usage quotidien** — Operating Model, Routing, Rules, Validation
- **Gouvernance knowledge** — Knowledge Layer
- **Historique / preuves** — Global Capitalization (résumé + lien repo)

### 4.5 Automation & Execution

| Page | Source | Traitement |
|------|--------|------------|
| Automation Architecture | `sfia-automation-architecture.md` | EDITORIALISER — vision niveaux 0–4 |
| Prompt Generation Engine | `sfia-prompt-generation-engine.md` | EDITORIALISER — règles, pas spec brute |
| Repository Execution Engine | `sfia-repository-execution-engine.md` | EDITORIALISER |
| Validation Engine | `sfia-validation-engine.md` | EDITORIALISER |

**Règle :** ne pas publier les specs moteur comme documents techniques bruts.

### 4.6 Prompt System

**Logique hub + bases.**

| Élément | Type Notion |
|---------|-------------|
| Prompt Catalog | Page hub |
| Prompt Templates | Base §5.2 |
| Prompt Cards / Families | Base §5.3 |
| Règles d'utilisation | Page (templates README + routing) |
| Cycle type → template | Tableau depuis Cycle Routing Guide |

### 4.7 Projets & Capitalisation

| Élément | Structure Interv360 recommandée |
|---------|--------------------------------|
| Hub Interv360 | 1 page synthèse trajectoire MVP → Premium UI |
| Pages synthèse | 4–6 max : cadrage, architecture, audit, REX, demo, release |
| Base ADR | 8 ADR actifs + 1 candidate |
| Base Roadmap / décisions | `09-roadmap/` |
| REX capitalisé | `interv360-application-rex.md` — éditorialisé |
| Futurs projets | Entrées base Projets |

### 4.8 Archives / Références repo

Zone secondaire — ne pas polluer la navigation principale.

| Contenu | Traitement |
|---------|------------|
| Audits techniques détaillés | Lien repo |
| Closure / post-merge | Résumé + lien |
| Payloads JSON Notion/CMP | Ne pas exposer — mention archive |
| Logs notion-sync | Lien repo archive |
| Archives Interv360 | Contextualisation minimale |
| Documents repo-only | Index liens si utile |

## 5. Bases Notion cibles

### 5.1 Documents SFIA

**Usage :** index des pages et documents SFIA publiés ou en préparation.

| Propriété | Type | Valeurs / notes |
|-----------|------|-----------------|
| Titre | Title | — |
| Domaine | Select | Foundation, Architecture, Operating Model, Automation, Validation, Prompt, Capitalization, Projet |
| Type | Select | Fondation, Guide, Engine, Checklist, Audit, Closure, REX |
| Statut | Select | validated, candidate, draft, historical |
| Version | Text | v1.1, etc. |
| Priorité | Select | Haute, Moyenne, Faible |
| Public cible | Multi-select | Mainteneur, Contributeur, Utilisateur méthode, Lecteur projet |
| Source repo | URL | Lien GitHub fichier |
| Catégorie Notion | Select | Catégories Cycle 1 |
| Dernière revue | Date | — |

### 5.2 Prompt Templates

| Propriété | Type |
|-----------|------|
| Nom | Title |
| Numéro | Number (01–10) |
| Famille | Select |
| Type de cycle | Relation / Select |
| Statut | Select |
| Usage | Text |
| Entrées nécessaires | Text |
| Sortie attendue | Text |
| Validation associée | Relation → Checklists |
| Lien repo | URL |
| Dernière version | Text |

**Entrées initiales :** `prompts/templates/01` à `10`

### 5.3 Prompt Cards / Families

| Propriété | Type |
|-----------|------|
| Nom | Title |
| Famille | Select |
| Domaine | Select |
| Type de cycle | Select |
| Statut | Select |
| Usage | Text |
| Template associé | Relation → Prompt Templates |
| Lien repo | URL |

**Sources :** `prompts/prompt-catalog.md`, familles architecture/QA/BPMN/UX/security/penpot

### 5.4 Checklists

| Propriété | Type |
|-----------|------|
| Nom | Title |
| Type | Select |
| Cycle associé | Select |
| Statut | Select |
| Usage | Text |
| Lien repo | URL |

**Entrées :** sfia-validation-checklist, notion-publication-checklist, guardrails-checklist

### 5.5 ADR / Décisions

| Propriété | Type |
|-----------|------|
| Titre | Title |
| Projet | Relation → Projets |
| Statut | Select | accepted, candidate, superseded |
| Date | Date |
| Domaine | Select |
| Décision | Text |
| Impact | Text |
| Lien repo | URL |

### 5.6 Practices & Templates

| Propriété | Type |
|-----------|------|
| Nom | Title |
| Discipline | Select |
| Type | Select | Practice, Template, Standard |
| Statut | Select | validated, draft, official |
| Public cible | Select |
| Lien repo | URL |

**Sources :** `docs/practices/`, `docs/templates/`, `method/sfia-fast-track/templates/`

### 5.7 Projets

| Propriété | Type |
|-----------|------|
| Projet | Title |
| Statut | Select |
| Domaine | Text |
| Phase | Select |
| Livrables clés | Text |
| Décisions | Relation → ADR |
| REX | URL / Relation |
| Assets capitalisés | Relation |
| Lien repo | URL |

### 5.8 Assets de capitalisation

| Propriété | Type |
|-----------|------|
| Nom | Title |
| Origine | Select |
| Projet source | Relation |
| Type d'asset | Select |
| Statut | Select |
| Réutilisabilité | Select |
| Lien repo | URL |

## 6. Propriétés communes recommandées

Toutes les bases partagent si possible :

| Propriété | Obligatoire | Règle |
|-----------|-------------|-------|
| Source repo | Oui | URL GitHub vers fichier canonique |
| Statut | Oui | validated / candidate / draft / historical |
| Version | Recommandé | v1.1 par défaut nouvel espace |
| Dernière revue | Recommandé | Date validation humaine |
| Lot intégration | Recommandé | Lot 0–6 |
| Notes éditoriales | Optionnel | Réserves publication |

## 7. Mapping catégorie Cycle 1 → structure Notion cible

| Catégorie Cycle 1 | Traitement Notion cible | Emplacement |
|-------------------|-------------------------|-------------|
| `PAGE_NOTION_DEDIEE` | Page dédiée dans le hub concerné | §4.2–4.5 selon domaine |
| `EDITORIALISER_AVANT_PUBLICATION` | Page cible — rédaction/simplification avant publication | Idem + badge « draft Notion » |
| `INTEGRER_DANS_BASE_NOTION` | Entrée dans une base Notion | §5.x |
| `RESUMER_DANS_NOTION_AVEC_LIEN_REPO` | Bloc résumé + lien repo | Hub projet ou §7 Archives |
| `GARDER_REPO_ONLY` | Ne pas publier ; lien éventuel archive technique | §7 uniquement |
| `ARCHIVER_OU_NE_PAS_PUBLIER` | Ne pas exposer navigation principale | Legacy ou §7 |
| `A_REVOIR_PLUS_TARD` | Liste arbitrage humain — page §16 | Arbitrage |

## 8. Pages prioritaires à créer

**Lot 1 (priorité immédiate) :**

1. Accueil SFIA
2. Guide de démarrage SFIA
3. ChatGPT ↔ Cursor Operating Model
4. Cycle Routing Guide
5. Rules & Guardrails
6. Validation Checklist
7. Engineering Principles
8. Decision Engine

**Lot 2 :** Delivery Pipeline, Platform Architecture, Repository Blueprint, Domain/Meta-Model

**Lot 3 :** Prompt Catalog hub + bases Templates et Cards

**Lot 4 :** Hub Interv360 + 4–6 synthèses + base ADR

**Lot 5 :** Practices, Controlled Delivery, templates plateforme

## 9. Contenus à éditorialiser

Voir Cycle 1 §7 — priorité :

- Engines (3 specs → pages opérationnelles)
- Global Capitalization
- Delivery Pipeline, Platform Architecture
- Summaries Interv360 architecture
- Role Methods Draft
- Controlled Delivery pack
- Anciens plans Notion (terminologie SFIA)

## 10. Contenus à intégrer en bases

| Base | ~Entrées | Source principale |
|------|----------|-------------------|
| Prompt Templates | 10 | `prompts/templates/` |
| Prompt Cards | ~15 | `prompts/` |
| Checklists | 4 | `checklists/` |
| ADR Interv360 | 8–9 | `02-architecture/adr/` |
| Practices | ~20 | `docs/practices/` |
| Templates | ~16 | `docs/templates/` + Fast Track templates |
| Projets | 1+ | Interv360 + futurs |
| Documents SFIA | ~30 | Pages publiées indexées |

## 11. Contenus à garder repo-only ou archive

- ~50 docs Interv360 `04-delivery/`
- ~17 docs Interv360 `03-design/` (instructions agent)
- Inventaires `.txt` workspace audit
- Payloads JSON historiques
- `tools/cmp-001/`
- Code app/backend
- Logs notion-sync détaillés

## 12. Règles de nommage

| Élément | Convention | Exemple |
|---------|------------|---------|
| Espace cible | `SFIA v1.1 — Workspace` | — |
| Espace legacy | `SFIA Legacy — Archive ancienne version` | — |
| Pages | Titre métier, pas chemin repo | « Cycle Routing Guide » |
| Bases | `SFIA — <Nom base>` | `SFIA — Prompt Templates` |
| Statuts Notion | Alignés repo | validated, candidate, draft, historical |
| Terminologie | **SFIA** exclusive — pas SFA | — |
| Versions | `v1.1` dans propriété Version | — |
| Lots | `Lot N — <nom>` | — |

## 13. Règles de source de vérité et liens repo

1. **Git = source de vérité** — Notion ne remplace jamais le repo.
2. **Lien repo obligatoire** — chaque page/base a une propriété Source repo.
3. **Pas de contenu sans source** — page Notion orpheline interdite.
4. **Mise à jour** — modification repo → revue Notion planifiée (pas sync auto).
5. **Candidate vs Validated** — badge visible si statut candidate.
6. **No raw sync** — interdiction export brut arborescence.
7. **Diff repo/Notion** — Notion = lecture ; exécution = repo + Cursor.

Format lien :

```text
https://github.com/mcleland147/sfia-workspace/blob/main/<chemin-fichier>
```

## 14. Plan d'intégration par lots

### Lot 0 — Préparation & validation humaine

| Élément | Détail |
|---------|--------|
| Objectif | Valider modèle cible ; créer espaces ; revue legacy live |
| Contenus | Ce document + inventaire + catégorisation |
| Sorties | Espace v1.1 créé ; legacy renommé + bannière ; GO humain Lot 1 |
| Contrôles | Validation modèle ; revue live legacy ; terminologie SFIA |
| Risques | Espace live non audité |
| Décision | NOTION TARGET MODEL READY ou WITH RESERVES |

### Lot 1 — Accueil + Operating Model

| Élément | Détail |
|---------|--------|
| Objectif | Navigation quotidienne SFIA opérationnelle |
| Contenus | Accueil, démarrage, Operating Model, Routing, Rules, Validation Checklist |
| Sorties | 6–7 pages ; base Documents SFIA amorcée |
| Contrôles | notion-publication-checklist ; liens repo ; no raw sync |
| Risques | Routing Guide candidate |
| Décision | LOT 1 INTEGRATION COMPLETE |

### Lot 2 — Fondations & Architecture

| Élément | Détail |
|---------|--------|
| Objectif | Fondations conceptuelles accessibles |
| Contenus | Engineering Principles, Decision Engine, Delivery Pipeline, Platform, Blueprint, Domain, Meta-Model |
| Sorties | 7 pages éditorialisées |
| Contrôles | Éditorialisation validée |
| Risques | Pages trop techniques |
| Décision | LOT 2 INTEGRATION COMPLETE |

### Lot 3 — Prompt System

| Élément | Détail |
|---------|--------|
| Objectif | Hub prompts + bases Templates et Cards |
| Contenus | Catalog, 10 templates, familles prompts |
| Sorties | 1 hub + 2 bases (~25 entrées) |
| Contrôles | Cohérence Cycle Routing Guide |
| Risques | Templates utilisés isolément |
| Décision | LOT 3 INTEGRATION COMPLETE |

### Lot 4 — Projets & Capitalisation (Interv360)

| Élément | Détail |
|---------|--------|
| Objectif | Cas référence Interv360 exploitable |
| Contenus | Hub, 4–6 synthèses, base ADR, base Roadmap, REX, audit résumé |
| Sorties | ~8 pages + 2 bases |
| Contrôles | Profondeur conservative |
| Risques | Sur-publication |
| Décision | LOT 4 INTEGRATION COMPLETE |

### Lot 5 — Practices, Templates, Controlled Delivery

| Élément | Détail |
|---------|--------|
| Objectif | Pratiques plateforme et méthode complémentaire |
| Contenus | Role Methods, BPMN, UX, architecture fonctionnelle, Controlled Delivery |
| Sorties | Base Practices & Templates remplie |
| Contrôles | Role Methods Draft — badge visible |
| Risques | Draft publié comme Official |
| Décision | LOT 5 INTEGRATION COMPLETE |

### Lot 6 — Archives, liens repo, nettoyage legacy

| Élément | Détail |
|---------|--------|
| Objectif | Zone archive ; liens repo ; clôture legacy |
| Contenus | §7 Archives, index repo-only, décision suppression legacy |
| Sorties | Page Archives ; rapport clôture intégration |
| Contrôles | Legacy non supprimé sans GO explicite |
| Risques | Suppression prématurée |
| Décision | NOTION INTEGRATION COMPLETE |

## 15. Contrôles avant publication

Avant toute publication réelle (tout lot) :

- [ ] Validation humaine du modèle cible (Lot 0)
- [ ] Validation humaine du lot concerné
- [ ] Terminologie SFIA vérifiée (pas SFA)
- [ ] Liens repo présents et valides
- [ ] Statuts Candidate / Validated / Historical cohérents
- [ ] Payloads JSON historiques **non** réutilisés
- [ ] No raw sync confirmé
- [ ] No publication sans validation humaine
- [ ] `tools/cmp-001/` non modifié (sauf cycle dédié)
- [ ] `notion-publication-checklist.md` appliquée
- [ ] Dry-run si outillage disponible (cycle CMP dédié futur)

## 16. Points d'arbitrage humain

| # | Sujet | Recommandation provisoire |
|---|-------|---------------------------|
| 1 | Suppression espace legacy | Non — archiver d'abord |
| 2 | Role Methods Draft dans Notion | Publier avec badge Draft |
| 3 | Profondeur Interv360 | Hub + 4–6 pages max |
| 4 | Controlled Delivery vs Fast Track | Section complémentaire distincte |
| 5 | Reprise contenu legacy live | Revue live Lot 0 |
| 6 | Régénération exports JSON | Cycle CMP dédié |
| 7 | Cycle Routing Guide candidate | Publier avec badge Candidate |
| 8 | Penpot tooling | Repo-only sauf demande |
| 9 | Documentation Engine | Ne pas créer |
| 10 | `prompts/governance/notion/` | Vide — peupler si besoin |

## 17. Risques et mitigations

| Risque | Mitigation |
|--------|------------|
| Miroir repo | Structure éditorialisée ; catégories Cycle 1 |
| Payloads obsolètes republiés | Contrôles §15 ; archive §7 |
| Legacy supprimé trop tôt | Stratégie §3 ; GO explicite |
| Notion illisible | Lots progressifs ; ~40 pages cibles max phase 1 |
| Divergence repo/Notion | Lien repo obligatoire |
| CMP modifié accidentellement | Garde-fou paths |
| Live non audité | Réserve inventaire ; revue Lot 0 |

## 18. Décision

**Décision proposée : NOTION TARGET MODEL READY WITH RESERVES**

**Justification :**

- Modèle cible 7 sections défini
- 8 bases Notion spécifiées avec propriétés
- Mapping catégories Cycle 1 → structure
- Plan intégration 7 lots (0–6)
- Stratégie legacy vs nouvel espace
- Contrôles publication définis
- Aucune sync/publication exécutée

**Réserves :**

| Réserve | Priorité |
|---------|----------|
| Espace Notion live non audité | P0 |
| Contenu legacy à reprendre — liste non finalisée | P1 |
| CMP / sync technique — cycle dédié requis | P1 |
| Role Methods Draft — arbitrage publication | P1 |

## 19. Prochaines étapes

1. **Validation humaine** de ce modèle cible et de l'inventaire espace actuel
2. **PR readiness** puis PR vers `main`
3. **Lot 0** — revue live Notion legacy ; création espace v1.1 ; bannière legacy
4. **Lot 1** — première intégration éditoriale (Operating Model)
5. Cycle CMP/sync **séparé** si exécution technique requise

**Documents Cycle 2 produits :**

- `sfia-notion-current-space-inventory.md`
- `sfia-notion-target-model-and-integration-plan.md` (ce document)

**Document Cycle 1 input :**

- `sfia-notion-content-categorization.md`
