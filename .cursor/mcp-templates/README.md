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

## 3. Mode local Penpot MCP

Selon la documentation Penpot MCP officielle :

- une **session Penpot active** dans le navigateur peut être requise ;
- l'URL MCP locale peut différer de `http://localhost:4401/mcp` — vérifier la doc à jour ;
- redémarrer Cursor après modification de la config MCP.

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
