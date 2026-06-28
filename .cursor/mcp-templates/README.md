# Cursor MCP templates — Penpot

**Dossier** : `.cursor/mcp-templates/`  
**Statut** : Exemples non secrets — configuration locale uniquement

---

## 1. Objectif

Ce dossier contient des **exemples de configuration MCP** pour connecter Cursor à Penpot.

Ces fichiers sont des **templates** — ils ne contiennent pas de clés, tokens ni mots de passe.

---

## 2. Utilisation

1. Ouvrir `penpot-mcp.example.json`.
2. Copier le bloc `mcpServers` dans la configuration MCP **locale** de Cursor (paramètres utilisateur ou projet — selon votre setup Cursor).
3. **Adapter l'URL** selon le mode Penpot MCP utilisé (port, chemin, HTTPS).
4. **Ne jamais** commiter de clé API, token ou credentials dans le repo.

---

## 3. Modes MCP — self-host vs standalone

Penpot expose **deux modes MCP** distincts. Choisir l'URL selon le mode d'installation retenu.

| Mode | Endpoint type | Quand l'utiliser |
|------|---------------|------------------|
| **Self-host** | `http://localhost:9001/mcp/stream?userToken=REPLACE_WITH_LOCAL_USER_TOKEN` | Instance Penpot Docker self-host — **mode validé SFIA** |
| **Standalone** | `http://localhost:4401/mcp` | Serveur MCP séparé (`npx @penpot/mcp@stable` ou équivalent) |

### Exemple self-host (placeholder)

```json
{
  "mcpServers": {
    "penpot-self-host": {
      "type": "http",
      "url": "http://localhost:9001/mcp/stream?userToken=REPLACE_WITH_LOCAL_USER_TOKEN"
    }
  }
}
```

Remplacer `REPLACE_WITH_LOCAL_USER_TOKEN` par le token généré dans Penpot (Integrations → MCP Server). **Le token reste local** — ne jamais le committer.

### Prérequis plugin MCP (self-host)

Pour le mode self-host, Cursor ne peut agir que si :

1. le **fichier Penpot cible** est ouvert dans le navigateur ;
2. le bouton / plugin **MCP** affiche un état **connecté** dans ce fichier.

### Erreurs connues

| Message | Cause probable | Action |
|---------|----------------|--------|
| `No userToken found in session context` | `userToken` absent de l'URL MCP Cursor | Ajouter le token à l'URL ou régénérer dans Penpot |
| `No plugin instance connected for user token` | Plugin MCP non connecté ou mauvais fichier ouvert | Ouvrir le fichier cible ; cliquer **MCP** jusqu'à connexion |

### Test de lecture recommandé

Une fois la config MCP et le plugin connectés, exécuter dans Cursor :

> Inspecte le fichier Penpot actuellement ouvert et liste les pages disponibles. Ne modifie rien.

Succès attendu : liste des pages du fichier ouvert (ex. `Page 1`).

Voir le REX détaillé : [`docs/tooling/penpot/penpot-mcp-self-host-rex.md`](../docs/tooling/penpot/penpot-mcp-self-host-rex.md).

---

## 4. Sécurité

| Règle | Application |
|-------|-------------|
| Pas de secret dans Git | Templates avec placeholders uniquement |
| Config réelle hors repo | Machine locale, gestionnaire secrets |
| HTTPS si exposé | Ne pas exposer MCP sur internet sans protection |

---

## 5. Documentation associée

- Architecture : [`docs/tooling/penpot/penpot-design-agent-architecture.md`](../docs/tooling/penpot/penpot-design-agent-architecture.md)
- Guide Docker : [`docs/tooling/penpot/penpot-self-host-docker-guide.md`](../docs/tooling/penpot/penpot-self-host-docker-guide.md)
- REX self-host MCP : [`docs/tooling/penpot/penpot-mcp-self-host-rex.md`](../docs/tooling/penpot/penpot-mcp-self-host-rex.md)
- Règles agent : [`docs/tooling/penpot/penpot-cursor-agent-rules.md`](../docs/tooling/penpot/penpot-cursor-agent-rules.md)
- Penpot MCP : documentation officielle Penpot

---

## 6. Fichiers

| Fichier | Rôle |
|---------|------|
| `penpot-mcp.example.json` | Exemple connexion HTTP MCP |
| `README.md` | Ce fichier |

---

*Templates MCP Cursor SFIA — Penpot — Draft.*
