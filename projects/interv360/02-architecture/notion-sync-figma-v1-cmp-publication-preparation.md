# Interv360 — Préparation publication CMP-001 — clôture Figma V1

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Jalon** : Figma V1  
**Type** : Préparation publication Notion via CMP-001  
**Statut** : Prepared — Not published  
**Source diagnostic** : `notion-publication-tooling-check.md`  
**Objet** : préparer la mise à jour Notion du projet Interv360 via CMP-001

---

## 1. Objectif

Cette note **prépare la publication Notion** de la clôture Figma V1 via **CMP-001**, sans **exécution API** dans cette tâche.

- JSON **Project** CMP préparé à partir du payload et de la synthèse gouvernance ;
- page cible **Interv360** identifiée dans les exports ;
- commande `update project` **documentée mais non exécutée**.

---

## 2. Outillage utilisé

| Élément | Détail |
|---------|--------|
| Connecteur | `tools/cmp-001/` — CMP-001 SFIA Notion Sync v1.1.2 |
| Commande cible | `node src/cli.js update project <page-id> <fichier.json>` |
| Configuration | `.env` requis dans `tools/cmp-001/` (`NOTION_TOKEN`, `NOTION_DATABASE_PROJECTS`, etc.) |
| Page cible | Entrée `PRJ-INTERV360 — Interv360` dans `exports/notion/projects.json` |

---

## 3. Fichier JSON préparé

**Fichier** : `notion-sync-figma-v1-cmp-project-update.json`

**Dérivé de**

- `notion-sync-figma-v1-closure-summary.md`
- `notion-sync-figma-v1-closure-payload.json` (payload initial **non modifié**)
- `prompt-catalog-ux-ui-v1-validation.md`
- `docs/standards/ux-ui-v1-governance-standard.md`

**Structure**

| Champ | Valeur / rôle |
|-------|----------------|
| `title` | PRJ-INTERV360 — Interv360 |
| `status` | In progress |
| `priority` | High |
| `health` | Green |
| `startDate` | 2026-06-27 |
| `summary` | Synthèse clôture Figma V1 (gouvernance) |
| `content` | Corps markdown — clôture, capitalisation, garde-fous |

**Compatibilité schéma CMP Project**

- **Propriétés Notion** (`title`, `status`, `priority`, `health`, `startDate`) : conformes au schéma `tools/cmp-001/src/schemas/project.schema.json`.
- **`summary` / `content`** : suivent le modèle `01-cadrage/notion-sync-payload.json` ; consommés par `buildPageContentBlocks` / `replacePageBlocks` lors de `update project`.
- **Point de vigilance** : le validateur CMP v1.1.2 peut rejeter `summary` et `content` comme champs non reconnus tant que le schéma Project n'inclut pas ces champs (`notionType: page_content`, comme Knowledge). **Avant exécution CLI**, vérifier la validation ou étendre le schéma Project — hors scope de cette préparation.

---

## 4. Page cible

| Champ | Valeur |
|-------|--------|
| **Projet Notion** | PRJ-INTERV360 — Interv360 |
| **Page ID** | `38c0bc33-8074-8182-881a-c284f2cf789b` |
| **Source ID** | `exports/notion/projects.json` (export du 2026-06-28) |
| **URL** | Visible dans l'export Notion (non reprise ici) |

Si l'ID ne correspond plus, récupérer la page via :

```bash
cd tools/cmp-001
node src/cli.js export projects
```

puis relire `exports/projects.json` ou `exports/notion/projects.json`.

---

## 5. Commande à exécuter manuellement

**Ne pas exécuter dans cette tâche** — à lancer après prérequis validés :

```bash
cd tools/cmp-001
node src/cli.js update project 38c0bc33-8074-8182-881a-c284f2cf789b ../../projects/interv360/02-architecture/notion-sync-figma-v1-cmp-project-update.json
```

Chemin relatif depuis `tools/cmp-001/` vers le JSON préparé.

---

## 6. Pré-requis avant exécution

- [ ] `.env` configuré dans `tools/cmp-001/`
- [ ] `NOTION_TOKEN` présent et valide
- [ ] `NOTION_DATABASE_PROJECTS` présent
- [ ] Intégration Notion autorisée sur la base Projects
- [ ] Page ID vérifié (`38c0bc33-8074-8182-881a-c284f2cf789b` ou ID à jour)
- [ ] JSON CMP relu (`notion-sync-figma-v1-cmp-project-update.json`)
- [ ] Validation CMP `summary`/`content` résolue si nécessaire
- [ ] **Décision explicite** de publication confirmée
- [ ] Payload initial `notion-sync-figma-v1-closure-payload.json` inchangé (`publish_to_notion: false` jusqu'à décision)

---

## 7. Garde-fous

- pas d'API appelée dans cette tâche ;
- pas de publication dans cette tâche ;
- payload initial gouvernance **non modifié** ;
- synthèse initiale **non modifiée** ;
- pas de QA / Testeur ouvert ;
- pas de delivery, backlog, user stories ni code déclenchés par cette préparation.

---

## 8. Prochaine action

**Exécution manuelle** de la commande CMP-001 `update project`, après :

1. vérification de `.env` ;
2. confirmation du page ID ;
3. relecture du JSON préparé ;
4. résolution éventuelle validation `summary`/`content` ;
5. décision explicite de publication.

---

## 9. Conclusion

La publication Notion de la **clôture Figma V1** est **prête à être exécutée** via CMP-001.

Le **JSON compatible Project** est préparé, la **page cible** est identifiée (`38c0bc33-8074-8182-881a-c284f2cf789b`), et la **commande d'exécution manuelle** est documentée.

**Aucune API Notion n'a été appelée** dans cette préparation.

---

*Préparation publication CMP-001 — clôture Figma V1 — gouvernance SFIA — non publié.*
