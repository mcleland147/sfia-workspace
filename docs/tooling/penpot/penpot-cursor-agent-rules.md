# Penpot Cursor Agent — Règles d'usage SFIA

**Type** : Doctrine agent  
**Domaine** : UX/UI — Design tooling  
**Statut** : Draft  
**Branche** : `tooling/penpot-design-agent`  
**Documents associés** : [`penpot-design-agent-architecture.md`](penpot-design-agent-architecture.md), [`penpot-sfia-method-integration.md`](penpot-sfia-method-integration.md)

---

## 1. Objectif

Ce document définit les **règles d'usage** de l'agent Cursor connecté à Penpot via MCP dans l'écosystème SFIA.

L'agent assiste la production visuelle — il **ne remplace pas** le designer, le métier ni les specs Git.

---

## 2. Règles impératives

| Règle | Application |
|-------|-------------|
| Toujours lire les specs Git **avant** Penpot | Scope, parcours, specs écran, dashboard, ADR |
| Toujours **inspecter** le fichier Penpot avant modification | Pages, frames, composants existants |
| Ne jamais modifier **en masse** sans plan validé | Une frame ou un écran à la fois |
| Travailler **écran par écran** | Incrémental, traçable |
| Produire un **résumé** après chaque action MCP | Ce qui a changé, ce qui reste ouvert |
| Ne pas créer de **nouveaux parcours** non documentés dans Git | `user-journeys.md` = référence |
| Ne pas créer de **nouveaux statuts** métier | Alignement `status-and-transitions.md` / ADR |
| Ne pas transformer le **dashboard** en BI technique | KPI fonctionnels uniquement |
| Respecter la **méthode UX/UI SFIA** | Reprise documentaire, design V2, garde-fous |
| Conserver les **exports** comme artefacts | Référencés dans Git — pas source unique |
| Ne pas committer de **secret**, clé MCP, token ou `.env` | Configuration locale uniquement |
| **Revue humaine** avant clôture design ou export officiel | Obligatoire |

---

## 3. Workflow standard

```
1. Lire scope / design specs Git
        ↓
2. Ouvrir fichier Penpot cible (référence penpot-project-reference.md)
        ↓
3. Inspecter structure pages / frames / components (MCP)
        ↓
4. Proposer plan d'action (liste d'écrans, ordre, écarts attendus)
        ↓
5. Créer ou modifier UNE frame
        ↓
6. Vérifier cohérence vs spec (libellés, statuts, actions)
        ↓
7. Demander revue humaine
        ↓
8. Documenter dans Git (écarts, lien Penpot, checklist revue)
```

---

## 4. Prompts types (génériques)

### Inspecter un fichier Penpot

> Lire les specs Git `[PROJECT_PHASE_PATH]/`. Inspecter le fichier Penpot `[penpot-file]`. Lister pages, frames et composants. Ne modifier rien. Résumer la structure et les écarts évidents vs `screen-inventory.md`.

### Créer une page projet

> Selon convention SFIA (00–06, 99), créer la page `[nom]` dans le fichier Penpot `[penpot-file]`. Ne pas créer d'écrans hors scope. Résumer après création.

### Créer un écran depuis une spec

> Lire `screen-functional-specs.md` §[écran]. Inspecter Penpot page `03 — Screens`. Créer ou mettre à jour la frame `[écran]` conformément à la spec. Pas de nouveau statut ni parcours. Résumé + demande revue humaine.

### Auditer un écran

> Comparer frame Penpot `[écran]` avec `screen-functional-specs.md` et `user-journeys.md`. Liste des écarts : libellés, actions manquantes, statuts, garde-fous. Ne pas corriger sans plan.

### Comparer écran vs spec

> Tableau : Spec Git | Penpot | Écart | Criticité | Action proposée. Pas de modification automatique.

### Préparer une revue

> Produire agenda revue : écrans à valider, décisions requises, points ouverts, checklist `penpot-review-checklist.md`. Pas d'export massif sans validation.

---

## 5. Garde-fous

| Interdit | Raison |
|----------|--------|
| Secret, clé, token dans Git ou prompts commités | Sécurité |
| Suppression massive de pages / frames | Risque perte design |
| Design system inventé sans validation | Cohérence SFIA |
| Écran hors scope MVP / scope design | Périmètre |
| Modification captures V1 versionnées dans Git | Référence historique |
| Backlog, user stories, code, API, SQL | Hors cycle design |
| Merge ou PR automatique sans demande | Gouvernance Git |
| Publication Notion sans demande explicite | Git = source de vérité |

---

## 6. En cas d'écart spec / Penpot

1. **Documenter** l'écart dans Git (review ou summary).
2. **Ne pas** « corriger » la spec depuis Penpot sans validation métier.
3. **Proposer** arbitrage : ajuster design, ajuster spec (cycle documentaire dédié), ou reporter.

---

## 7. Références

- Architecture : [`penpot-design-agent-architecture.md`](penpot-design-agent-architecture.md)
- Intégration méthodes : [`penpot-sfia-method-integration.md`](penpot-sfia-method-integration.md)
- Prompts : [`../../../prompts/tooling/penpot/penpot-design-agent-prompt-family.md`](../../../prompts/tooling/penpot/penpot-design-agent-prompt-family.md)
- MCP template : [`.cursor/mcp-templates/`](../../../.cursor/mcp-templates/)

---

*Doctrine agent SFIA — Penpot Cursor — Draft.*
