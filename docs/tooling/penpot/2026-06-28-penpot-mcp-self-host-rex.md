# Penpot MCP self-host — REX d'installation locale

**Type** : Retour d'expérience outillage
**Domaine** : UX/UI — Design tooling
**Statut** : Draft
**Branche** : `tooling/penpot-mcp-self-host-feedback`

---

## 1. Objectif

Documenter le retour d'expérience d'une **installation locale Penpot self-host** avec **Cursor MCP**, afin de capitaliser les points validés, les erreurs rencontrées et les prérequis opérationnels avant d'ouvrir un cycle design projet SFIA.

---

## 2. Environnement validé

| Élément | Valeur |
|---------|--------|
| Penpot | Self-host Docker **v2.16** |
| Dossier local (hors repo) | `/Users/morris/Tools/penpot` |
| URL locale | `http://localhost:9001` |
| Projet test | `SFIA — Penpot Agent Test` |
| Fichier test | `Nouveau fichier 1` |
| Cursor MCP | Configuré localement (serveur `user-penpot` ou équivalent) |
| Secrets dans Git | **Aucun** — tokens et `.env` restent locaux |

---

## 3. Problèmes rencontrés

| Problème | Cause | Résolution |
|----------|-------|------------|
| `No userToken found in session context` | URL MCP sans `userToken`, ou token absent de la config Cursor | Générer un token dans Penpot (Integrations → MCP Server) et l'ajouter à l'URL MCP Cursor |
| `No plugin instance connected for user token` | Fichier Penpot non ouvert, ou plugin MCP non connecté | Ouvrir le fichier cible dans le navigateur ; cliquer **MCP** dans la barre d'outils jusqu'à l'état **connecté** |

---

## 4. Configuration MCP validée

Endpoint self-host opérationnel :

```
http://localhost:9001/mcp/stream?userToken=<USER_TOKEN_LOCAL>
```

- `<USER_TOKEN_LOCAL>` est généré dans Penpot — **ne jamais le committer** dans Git.
- Ne pas confondre avec `http://localhost:4401/mcp` (mode standalone / serveur MCP séparé).

Voir aussi : [`.cursor/mcp-templates/penpot-mcp.example.json`](../../../.cursor/mcp-templates/penpot-mcp.example.json).

---

## 5. Test validé

| Élément | Résultat |
|---------|----------|
| Action | Lecture fichier Penpot via Cursor MCP (`execute_code`, lecture seule) |
| Fichier | `Nouveau fichier 1` |
| Page | `Page 1` |
| Contenu observé | 1 **Board** à la racine |
| Outils MCP disponibles | `execute_code`, `high_level_overview`, `penpot_api_info`, `export_shape` |

**Prompt de test recommandé :**

> Inspecte le fichier Penpot actuellement ouvert et liste les pages disponibles. Ne modifie rien.

---

## 6. Critères validés

| Critère | Statut |
|---------|:------:|
| Stack Penpot démarrable (Docker) | ✅ |
| Instance accessible (`http://localhost:9001`) | ✅ |
| Projet test créé | ✅ |
| Cursor MCP configuré localement | ✅ |
| Lecture fichier réussie via MCP | ✅ |
| Aucun secret dans Git | ✅ |

---

## 7. Points non encore validés

| Point | Statut |
|-------|:------:|
| Structure pages SFIA (`00–06`, `99`) dans le fichier Penpot | ☐ |
| Écriture MCP (création / modification frame) | ☐ |
| `export_shape` | ☐ |
| Cycle pilote Interv360 design V2 | ☐ |
| Comparaison specs Git vs design Penpot | ☐ |

---

## 8. Recommandation

Avant d'ouvrir un cycle design projet :

1. Créer la **structure de pages SFIA** dans le fichier Penpot (`00 — Cover` à `99 — Archive`).
2. Documenter la référence projet dans Git (`penpot-project-reference.md`).
3. Tester une **action d'écriture non critique** (ex. renommer une page test) pour valider le flux complet MCP.
4. Lancer ensuite le cycle pilote Interv360 depuis les specs `06-ux-ui/`.

---

## 9. Documentation associée

- Guide Docker : [`penpot-self-host-docker-guide.md`](penpot-self-host-docker-guide.md)
- Règles agent : [`penpot-cursor-agent-rules.md`](penpot-cursor-agent-rules.md)
- Architecture : [`penpot-design-agent-architecture.md`](penpot-design-agent-architecture.md)
- Templates MCP : [`.cursor/mcp-templates/`](../../../.cursor/mcp-templates/)

---

*REX outillage SFIA — Penpot MCP self-host — Draft.*
