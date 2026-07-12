# Penpot — Intégration aux méthodes SFIA

**Type** : Guide d'intégration méthode  
**Domaine** : UX/UI — Design tooling  
**Statut** : Draft  
**Branche** : `tooling/penpot-design-agent`

---

## 1. Objectif

Ce document explique comment **Penpot s'intègre** aux méthodes SFIA existantes dans `sfia-workspace`, sans remplacer Git, les specs documentaires ni Camunda.

Penpot intervient **après** la reprise UX/UI documentaire lorsque le cycle nécessite une **production visuelle** (wireframes, maquette V2, prototype, revue design).

---

## 2. Méthodes concernées

| Méthode / cycle | Rôle Penpot |
|-----------------|-------------|
| **Reprise UX/UI documentaire** (`docs/practices/ux-ui/`) | Source des specs — Penpot en aval, pas pendant la reprise doc |
| **Design V2** (`projects/<projet>/03-design/`) | Production maquettes et wireframes |
| **Review design** | Audit cohérence Penpot vs specs Git |
| **Prototypage** | Prototypes simples pour validation parcours |
| **Préparation delivery visuelle** | Exports et références pour implémentation future — hors backlog dans ce cycle |

---

## 3. Où Penpot intervient

| Phase SFIA | Rôle de Penpot | Source Git associée |
|------------|----------------|---------------------|
| Après cadrage reprise UX/UI | Référence visuelle V1 archivée ; préparation V2 | `ux-ui-reprise-scope.md`, `penpot-project-reference.md` |
| Après parcours consolidés | Structurer page `02 — User journeys` | `user-journeys.md` |
| Après inventaire écrans | Créer frames sur `03 — Screens` | `screen-inventory.md` |
| Après specs fonctionnelles écran | Détail comportemental visuel | `screen-functional-specs.md` |
| Après vues dashboard | Maquettes dashboard par profil | `dashboard-ux-view.md` |
| Revue design | Audit, checklist, écarts | `penpot-review-checklist.md` |
| Avant backlog éventuel | Design validé humainement | `design-v2-summary.md`, clôture design |

**Penpot n'intervient pas** pendant les cycles :

- architecture fonctionnelle pure ;
- BPMN / Camunda ;
- ADR ;
- reprise UX/UI **documentaire seule** (sans maquette).

---

## 4. Ce que Penpot ne remplace pas

| Élément | Raison |
|---------|--------|
| **Git / sfia-workspace** | Source de vérité documentaire et méthodologique |
| **Méthode SFIA** | Garde-fous, ordre des livrables, exclusions |
| **Specs UX/UI** | Comportements, statuts, garde-fous fonctionnels |
| **Validation métier** | Arbitrages, acceptation produit |
| **ADR** | Décisions structurantes |
| **Architecture fonctionnelle** | Objets, statuts, intégrations |
| **Camunda / BPMN** | Processus métier — outil distinct |

---

## 5. Convention de nommage

### Projets Penpot

`[Code projet] — [Type]` — ex. `PRJ-INTERV360 — Design V2`

### Pages

`NN — [Nom]` — ex. `03 — Screens`, `04 — Dashboards`

### Frames

`[Code écran] — [Nom écran]` — aligné sur `screen-inventory.md`

### Exports

`[projet]-[écran]-[version]-[date].png` — référencés dans Git, pas forcément tous versionnés

### Liens documentés

Dans `penpot-project-reference.md` :

- URL instance (sans credentials)
- ID ou nom fichier Penpot
- Pages actives
- Dernière revue humaine

---

## 6. Capitalisation future

| Asset | Description |
|-------|-------------|
| **Templates Penpot** | Fichiers modèles SFIA (pages, structure) — `docs/templates/tooling/penpot/` |
| **Design system SFIA** | Composants, tokens visuels partagés entre projets |
| **Bibliothèque d'écrans métier** | Patterns SAV, dashboard, mobile terrain |
| **Prompts réutilisables** | `prompts/tooling/penpot/penpot-design-agent-prompt-family.md` |
| **Checklists revue** | Alignées méthode UX/UI et design V2 |

Ces assets seront enrichis **après** retours d'expérience sur le premier cycle design V2 pilote (ex. Interv360).

---

## 7. Liens méthode UX/UI reprise

| Livrable méthode | Usage Penpot |
|------------------|--------------|
| `../../practices/ux-ui/ux-ui-reprise-method.md` | Garde-fous — Penpot = phase après reprise doc |
| `../../practices/ux-ui/ux-ui-reprise-deliverables-standard.md` | Entrées pour design V2 |
| `../../practices/ux-ui/ux-ui-reprise-checklist.md` | Préconditions avant ouverture Penpot |
| `ux-ui-reprise-prompt-family.md` | Complété par prompts Penpot — pas de remplacement |

---

## 8. Prochaine action recommandée

1. Installer Penpot localement selon [`penpot-self-host-docker-guide.md`](penpot-self-host-docker-guide.md).
2. Configurer MCP Cursor (template local).
3. Ouvrir un cycle pilote `03-design/` sur un projet — **hors scope de cette PR tooling**.

---

*Intégration méthode SFIA — Penpot — Draft.*
