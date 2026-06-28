# Interv360 — Préparation sync Notion roadmap technique CMP

**Projet** : PRJ-INTERV360  
**Type** : Préparation sync gouvernance Notion  
**Statut** : Prepared — Not published  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001 create component** : non exécuté  
**CMP-001 update project** : non exécuté

---

## 1. Objectif

Préparer la synchronisation de la **roadmap technique CMP / SFIA outillage** dans Notion — **cible principale : base SFIA Components** — sans publication dans cette tâche.

---

## 2. Contexte

- **Prompt Library 39/39** publiée dans Notion.
- **PR #1** mergée dans `main` ; branche de travail clôturée.
- Besoin de tracer les **évolutions techniques** restantes pour CMP-001 et l'outillage SFIA.
- **Git** reste source détaillée (`docs/roadmaps/cmp-technical-roadmap.md`).
- **Notion** porte la synthèse gouvernance et le référentiel **SFIA Components**.

---

## Correction de cible Notion

La roadmap technique CMP / SFIA outillage **ne doit pas** être uniquement synchronisée comme mise à jour de la page projet Interv360.

Elle doit être rattachée à la **catégorie SFIA Components**, car les entrées concernent des **composants d'outillage réutilisables** :

- CMP-001 ;
- Prompt Library ;
- export Notion ;
- contrôle de doublons ;
- publication batch ;
- lifecycle Draft → Tested.

La page projet Interv360 peut conserver une **synthèse de gouvernance**, mais la **traçabilité structurée** des évolutions doit être portée par **SFIA Components**.

**Décision** :

- préparer une **synchronisation dédiée** vers SFIA Components ;
- conserver le payload project update uniquement comme **option secondaire** / trace de gouvernance projet ;
- **ne pas publier** avant revue manuelle et arbitrage doublons CMP-001.

---

## 3. Type CMP identifié

| Élément | Constat |
|---------|---------|
| **Type CMP** | `component` — **supporté** |
| **Commande** | `node src/cli.js create component <json-file>` |
| **Schéma** | `tools/cmp-001/src/schemas/component.schema.json` |
| **Variable env** | `NOTION_DATABASE_COMPONENTS` |
| **Base Notion** | SFIA Components (Components) |
| **update component** | **Non supporté** — arbitrage requis si fiche CMP-001 existe déjà |

*Pas de type `sfia-component` distinct — le mapping est `component` → base Components.*

---

## 4. Roadmap ajoutée

| ID | Sujet | Priorité | Statut |
|----|-------|----------|--------|
| CMP-ROADMAP-001 | Ajouter update prompt | Haute | À cadrer |
| CMP-ROADMAP-002 | Ajouter un mode batch | Haute | À cadrer |
| CMP-ROADMAP-003 | Formaliser prompts Draft sous `prompts/<famille>/` | Moyenne | À planifier |
| CMP-ROADMAP-004 | Passage Draft → Tested | Moyenne | À cadrer |
| CMP-ROADMAP-005 | Fiabiliser export Notion | Haute | À cadrer |
| CMP-ROADMAP-006 | Contrôle doublons renforcé | Haute | À cadrer |
| CMP-ROADMAP-007 | Procédure standard publication Prompt Library | Moyenne | À documenter |
| CMP-ROADMAP-008 | Clôture semi-automatique des lots publiés | Basse | À étudier |

---

## 5. Payload Notion préparé

### Cible principale — SFIA Components

| Élément | Valeur |
|---------|--------|
| **Fichier** | `notion-sync-cmp-technical-roadmap-sfia-components-payload.json` |
| **Type CMP** | `component` — `create component` |
| **Base** | `NOTION_DATABASE_COMPONENTS` — SFIA Components |
| **publish_to_notion** | `false` |
| **manual_review_required** | `true` |
| **Items** | **9** — 1 composant principal + 8 évolutions roadmap en Backlog |

**Modèle retenu** :

1. **SFIA-COMP-CMP-001 — CMP-001 Notion Connector** (Active) — roadmap intégrée dans `currentVersion`.
2. **CMP-ROADMAP-001 à 008** (Backlog) — une fiche composant par évolution structurante.

*Alternative documentée : une seule fiche CMP-001 avec roadmap en sections uniquement — arbitrage en revue si doublons.*

Exécution future (tâche dédiée, après revue) :

```bash
cd tools/cmp-001
set -a && source /path/to/sfia-notion-sync/.env && set +a
node src/cli.js create component /tmp/sfia-cmp-roadmap/SFIA-COMP-CMP-001.json
# … une commande par item si arbitrage validé
```

### Option secondaire — gouvernance projet

| Élément | Valeur |
|---------|--------|
| **Fichier** | `notion-sync-cmp-technical-roadmap-project-update.json` |
| **Type CMP** | `project` — `update project` |
| **Rôle** | Trace de gouvernance projet Interv360 — **secondaire** |
| **publish_to_notion** | `false` |

**Ce payload** :

- est une **trace de gouvernance projet** ;
- **ne répond pas seul** au besoin de classement dans SFIA Components ;
- **ne doit pas être publié** tant que l'arbitrage SFIA Components n'est pas validé.

---

## 6. Garde-fous

- [x] publication **non exécutée** ;
- [x] API Notion **non appelée** ;
- [x] `create component` **non exécuté** ;
- [x] `update project` **non exécuté** ;
- [x] aucun secret affiché ;
- [x] `.env` non modifié ;
- [x] pas de delivery ouvert ;
- [x] pas de backlog, user stories ou code applicatif ;
- [x] pas de scénarios ou cas de tests projet.

---

## 7. Décision proposée

**Décision proposée** : roadmap technique CMP **prête pour revue manuelle** avant synchronisation dans **SFIA Components**. La mise à jour de la page projet Interv360 reste **optionnelle et secondaire**.

---

*Préparation sync Notion roadmap technique CMP — cible SFIA Components — gouvernance SFIA — non publié dans Notion.*
