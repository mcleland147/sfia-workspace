# Penpot self-host — Guide Docker SFIA

**Type** : Guide outillage  
**Domaine** : UX/UI — Design tooling  
**Statut** : Draft  
**Branche** : `tooling/penpot-design-agent`

---

## 1. Objectif

Ce guide décrit comment **préparer** une installation Penpot self-host en Docker pour l'écosystème SFIA.

Il **ne remplace pas** la documentation officielle Penpot. Il complète le repo SFIA avec des templates sûrs (`docker/penpot/`) et des règles d'intégration Cursor MCP.

**Cette tâche documentaire n'installe pas** Penpot automatiquement — l'installation réelle se fait sur la machine cible en suivant ce guide et la doc officielle.

---

## 2. Pré-requis

| Pré-requis | Usage |
|------------|-------|
| **Docker** | Exécution conteneurs Penpot |
| **Docker Compose** | Orchestration stack officielle |
| **Navigateur** | Accès UI Penpot, session pour MCP local si requis |
| **DNS local ou domaine** | Si exposition hors localhost |
| **Reverse proxy (optionnel)** | HTTPS, certificats — Traefik, Caddy, nginx |
| **Gestion des volumes** | Persistance données et assets |
| **Sauvegardes** | Backup BDD et volumes avant mise à jour |

---

## 3. Principe d'installation

L'**installation officielle Penpot** reste la **référence technique**.

### Documentation officielle (à consulter avant déploiement)

| Ressource | URL |
|-----------|-----|
| Penpot — Technical guide / Getting started | [https://help.penpot.app/technical-guide/getting-started/](https://help.penpot.app/technical-guide/getting-started/) |
| Penpot — Docker installation | [https://help.penpot.app/technical-guide/getting-started/docker/](https://help.penpot.app/technical-guide/getting-started/docker/) |
| Penpot MCP | Vérifier la documentation MCP la plus récente sur [https://penpot.app](https://penpot.app) et le dépôt / annonces Penpot |

**Garde-fou :** ce repo SFIA **ne duplique pas** le `docker-compose.yml` officiel complet. Le dossier `docker/penpot/` fournit des **overrides et exemples** uniquement.

### Étapes recommandées (hors repo)

1. Cloner ou télécharger la stack Docker **officielle** Penpot selon la doc du moment.
2. Copier `docker/penpot/.env.example` vers `.env` **localement** (hors commit).
3. Générer `PENPOT_SECRET_KEY` localement — ne jamais commiter.
4. Appliquer `docker-compose.override.example.yml` si les noms de services correspondent.
5. Démarrer la stack et valider l'accès UI.

---

## 4. Arborescence proposée (repo SFIA)

```
docker/penpot/
  README.md
  docker-compose.override.example.yml
  .env.example
```

Le `docker-compose.yml` **principal** provient de la documentation officielle Penpot, pas de ce repo.

---

## 5. Variables d'environnement

Le fichier `docker/penpot/.env.example` contient **uniquement des placeholders**.

| Variable | Exemple placeholder | Rôle |
|----------|---------------------|------|
| `PENPOT_PUBLIC_URI` | `http://localhost:9001` | URL publique de l'instance |
| `PENPOT_SECRET_KEY` | `CHANGE_ME_GENERATE_LOCALLY` | Secret application — générer localement |
| `PENPOT_SMTP_DEFAULT_FROM` | `no-reply@example.local` | Expéditeur mail (si SMTP activé) |
| `PENPOT_SMTP_DEFAULT_REPLY_TO` | `no-reply@example.local` | Reply-to mail |
| `PENPOT_DOMAIN` | `localhost` | Domaine optionnel |

**Règles :**

- Copier `.env.example` → `.env` sur la machine locale.
- **Ne jamais** commiter `.env`.
- Les vraies valeurs restent locales ou dans un gestionnaire de secrets.

---

## 6. Ports et accès

| Élément | Recommandation SFIA |
|---------|---------------------|
| Port local UI | **9001** (exemple override — adapter si conflit) |
| URL locale type | `http://localhost:9001` |
| Reverse proxy | Recommandé si exposition réseau ou internet |
| HTTPS | **Obligatoire** si instance accessible hors réseau de confiance |

Vérifier les ports réellement mappés dans le `docker-compose.yml` officiel avant de démarrer.

---

## 7. Volumes et sauvegardes

| Élément | Action recommandée |
|---------|-------------------|
| Base de données | Backup régulier selon doc Penpot (pg_dump ou procédure officielle) |
| Assets / fichiers | Sauvegarder volumes Docker nommés |
| Configuration locale | Sauvegarder `.env` **hors Git** (gestionnaire secrets ou coffre local) |
| Test restauration | Restaurer sur environnement de test au moins une fois |

Documenter emplacement des volumes et fréquence de backup dans la doc projet ou runbook local.

---

## 8. Sécurité

- **Instance locale** par défaut pour le développement SFIA.
- **Comptes utilisateurs** : créer comptes dédiés, pas de compte admin partagé en production.
- **Pas d'exposition publique** sans HTTPS et durcissement.
- **Pas de secrets** dans Git — `.gitignore` couvre `.env` et `.env.*` (sauf `.env.example`).
- **Sauvegarde chiffrée** si données design sensibles.

---

## 9. MCP Cursor

Le MCP Penpot peut être activé **après** :

1. Installation Penpot opérationnelle ;
2. Accès UI validé ;
3. Fichier Penpot cible ouvert dans le navigateur ;
4. Plugin MCP connecté dans ce fichier (voir §9.1).

### Configuration

- Utiliser le template [`.cursor/mcp-templates/penpot-mcp.example.json`](../../../.cursor/mcp-templates/penpot-mcp.example.json).
- Copier le bloc dans la configuration MCP **locale** de Cursor — pas dans le repo.
- Choisir l'URL MCP selon le **mode d'installation** retenu (self-host vs standalone — voir §9.1).
- **Aucune clé** ni token dans Git.

Voir [`.cursor/mcp-templates/README.md`](../../../.cursor/mcp-templates/README.md) et le REX [`penpot-mcp-self-host-rex.md`](penpot-mcp-self-host-rex.md).

### 9.1 MCP Cursor — retour d'expérience self-host

Dans une installation Penpot **self-host** locale, l'intégration MCP validée utilise l'endpoint exposé par l'instance Penpot elle-même :

```
http://localhost:9001/mcp/stream?userToken=<USER_TOKEN>
```

| Point validé | Détail |
|--------------|--------|
| Instance Penpot | Accessible sur `http://localhost:9001` |
| Serveur MCP | Exposé par l'instance self-host (pas un service séparé sur le port 4401) |
| `userToken` | **Requis** dans l'URL MCP — généré dans Penpot (Integrations → MCP Server) |
| Fichier ouvert | Le fichier Penpot cible doit être ouvert dans le navigateur |
| Plugin MCP | Le bouton / plugin **MCP** doit afficher un état **connecté** dans ce fichier |

**Erreurs typiques si une condition manque :**

| Erreur | Cause probable |
|--------|----------------|
| `No userToken found in session context` | URL MCP sans `userToken` ou token absent de la config Cursor |
| `No plugin instance connected for user token` | Fichier non ouvert, ou plugin MCP non connecté dans Penpot |

Une fois le plugin connecté, Cursor peut **lire** le fichier Penpot ouvert (pages, frames, composants) via `execute_code`.

**À ne jamais commiter :**

- token réel ;
- URL MCP complète avec vrai token ;
- capture d'écran contenant un token ;
- configuration Cursor locale contenant un token.

**Différence avec le mode standalone :**

| Mode | Endpoint type | Usage |
|------|---------------|-------|
| **Self-host** (validé SFIA) | `http://localhost:9001/mcp/stream?userToken=...` | Instance Penpot Docker locale — MCP intégré à l'instance |
| **Standalone** | `http://localhost:4401/mcp` | Serveur MCP séparé (`npx @penpot/mcp@stable` ou équivalent) |

Le choix dépend du mode d'installation MCP retenu. Pour une stack Penpot self-host Docker, utiliser le mode **self-host**.

---

## 10. Critères de validation

| Critère | Validé |
|---------|:------:|
| Conteneurs Penpot démarrés | ☐ |
| Penpot accessible dans le navigateur | ☐ |
| Compte admin créé | ☐ |
| Projet test créé (structure pages SFIA) | ☐ |
| Fichier test ouvert | ☐ |
| Cursor connecté via MCP (config locale) | ☐ |
| Prompt de lecture simple réussi | ☐ |
| Aucun secret commité dans sfia-workspace | ☐ |

---

## 11. Dépannage rapide

| Symptôme | Piste |
|----------|-------|
| Port déjà utilisé | Changer mapping dans override ou arrêter service conflictuel |
| Override ignoré | Vérifier noms de services dans compose officiel |
| MCP inaccessible | Vérifier mode (self-host `9001/mcp/stream` vs standalone `4401/mcp`), `userToken`, plugin connecté — voir §9.1 |
| `No userToken found` | Ajouter `userToken` à l'URL MCP Cursor |
| `No plugin instance connected` | Ouvrir le fichier Penpot ; connecter le plugin MCP |
| Perte données | Restaurer depuis backup volumes / BDD |

---

*Guide outillage SFIA — Penpot self-host Docker — Draft.*
