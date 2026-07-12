# Penpot Docker — Templates SFIA

**Dossier** : `docker/penpot/`  
**Statut** : Templates sûrs — pas d'installation standalone  
**Branche** : `tooling/penpot-design-agent`

---

## 1. Objectif

Ce dossier fournit des **templates et overrides** pour intégrer Penpot self-host à l'écosystème SFIA.

Il **ne contient pas** le `docker-compose.yml` officiel Penpot complet — celui-ci doit être obtenu depuis la [documentation Docker Penpot](https://help.penpot.app/technical-guide/getting-started/docker/).

---

## 2. Documentation officielle à suivre

1. [Penpot — Getting started](https://help.penpot.app/technical-guide/getting-started/)
2. [Penpot — Docker](https://help.penpot.app/technical-guide/getting-started/docker/)
3. Guide SFIA : [`docs/tooling/penpot/penpot-self-host-docker-guide.md`](../../docs/tooling/penpot/penpot-self-host-docker-guide.md)

---

## 3. Fichiers du dossier

| Fichier | Rôle |
|---------|------|
| `README.md` | Ce fichier |
| `.env.example` | Placeholders uniquement — copier vers `.env` localement |
| `docker-compose.override.example.yml` | Exemple override port local — à fusionner avec compose officiel |

---

## 4. Règle `.env.example` uniquement

- **Versionner** : `.env.example`
- **Ne jamais commiter** : `.env`, `.env.local`, tout fichier contenant des secrets
- `.gitignore` du repo ignore `.env` et `.env.*` (sauf `.env.example`)

```bash
cp .env.example .env
# Éditer .env localement — générer PENPOT_SECRET_KEY hors Git
```

---

## 5. Ports recommandés (exemple SFIA)

| Service | Port hôte (exemple) | Note |
|---------|---------------------|------|
| Penpot frontend | `9001` | Voir `docker-compose.override.example.yml` |

Adapter si conflit avec un autre service local.

**Important :** les noms de services (`penpot-frontend`, etc.) peuvent varier selon la version du compose officiel. **Vérifier** les noms dans le `docker-compose.yml` Penpot avant d'appliquer l'override.

---

## 6. Intégration Cursor MCP

Après installation :

1. Valider l'accès UI Penpot.
2. Configurer MCP dans Cursor via [`.cursor/mcp-templates/penpot-mcp.example.json`](../../.cursor/mcp-templates/penpot-mcp.example.json).
3. Lire [`.cursor/mcp-templates/README.md`](../../.cursor/mcp-templates/README.md).

Aucune clé MCP dans ce dossier.

---

## 7. Checklist installation

- [ ] Stack officielle Penpot récupérée
- [ ] `.env` créé localement depuis `.env.example`
- [ ] `PENPOT_SECRET_KEY` généré localement
- [ ] Override appliqué si noms de services compatibles
- [ ] Conteneurs démarrés
- [ ] UI accessible (ex. `http://localhost:9001`)
- [ ] Compte admin créé
- [ ] Aucun `.env` commité
- [ ] MCP Cursor configuré localement
- [ ] Backup volumes documenté

---

*Templates Docker SFIA — Penpot — Draft.*
