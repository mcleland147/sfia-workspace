# Interv360 — Préparation sync Notion roadmap technique CMP

**Projet** : PRJ-INTERV360  
**Type** : Préparation sync gouvernance Notion  
**Statut** : Prepared — Not published  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001 update project** : non exécuté

---

## 1. Objectif

Préparer la synchronisation de la **roadmap technique CMP / SFIA outillage** dans Notion (page projet Interv360), **sans publication** dans cette tâche.

---

## 2. Contexte

- **Prompt Library 39/39** publiée dans Notion.
- **PR #1** mergée dans `main` ; branche de travail clôturée.
- Besoin de tracer les **évolutions techniques** restantes pour CMP-001 et l'outillage SFIA.
- **Git** reste source détaillée (`docs/roadmaps/cmp-technical-roadmap.md`).
- **Notion** porte la synthèse gouvernance.

---

## 3. Roadmap ajoutée

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

## 4. Payload Notion préparé

| Élément | Valeur |
|---------|--------|
| **Fichier** | `notion-sync-cmp-technical-roadmap-project-update.json` |
| **Type CMP** | `project` — `update project` |
| **Cible** | Page projet PRJ-INTERV360 — Interv360 |
| **publish_to_notion** | `false` |
| **manual_review_required** | `true` |
| **Item** | `title`, `status`, `priority`, `health`, `summary`, `content` |

Le champ `item` du payload est compatible schéma CMP `project` pour exécution future via :

```bash
cd tools/cmp-001
set -a && source /path/to/sfia-notion-sync/.env && set +a
node src/cli.js update project <fichier-item-extrait>
```

*Note : extraire `item` ou adapter selon le flux CMP existant lors de la tâche de publication.*

---

## 5. Garde-fous

- [x] publication **non exécutée** ;
- [x] API Notion **non appelée** ;
- [x] `update project` **non exécuté** ;
- [x] aucun secret affiché ;
- [x] `.env` non modifié ;
- [x] pas de delivery ouvert ;
- [x] pas de backlog, user stories ou code applicatif ;
- [x] pas de scénarios ou cas de tests projet.

---

## 6. Décision proposée

**Décision proposée** : roadmap technique CMP **prête pour revue manuelle** avant synchronisation Notion.

---

*Préparation sync Notion roadmap technique CMP — gouvernance SFIA — non publié dans Notion.*
