# SFIA MCP v2.0 — Rapport d'expérimentation MVP L1

**Date :** 2026-07-07
**Cycle :** Expérimental exceptionnel (exclusif au besoin MCP)
**Type :** MVP local — validation technique de l'échange ChatGPT ↔ Cursor
**Auteur exécution :** Cursor (exécuteur contrôlé)
**Autorité de décision :** Morris
**Référence architecture :** `docs/tooling/mcp/sfia-mcp-v2-architecture.md`

> Ce rapport ne prépare **pas** de PR readiness. Pas de push / PR / merge dans ce cycle.

---

## 1. Objectif

Vérifier concrètement qu'un serveur MCP local minimal peut exposer des tools **L1 read-only** consommables par Cursor, avec garde-fous **deny by default**, structure locale tasks/reports/gates, et mécanisme de **gate Morris** fonctionnel.

---

## 2. Branche courante

```
method/sfia-v2.4.1-documentation-status-promotion
```

Aucune bascule de branche. Aucune action Git en écriture (commit/push/PR/merge) effectuée.

---

## 3. Fichiers créés / modifiés

**Créés — tous dans `.sfia/mcp/` (aucune écriture ailleurs) :**

| Fichier | Rôle |
|---------|------|
| `.sfia/mcp/README.md` | Instructions installation / lancement / config Cursor |
| `.sfia/mcp/.gitignore` | Ignore `server/node_modules/`, `logs/*.log`, config locale |
| `.sfia/mcp/cursor-mcp.example.json` | Exemple config Cursor MCP (sans secret) |
| `.sfia/mcp/server/config.js` | Racine repo, allowlist, limites, noms de tools |
| `.sfia/mcp/server/guardrails.js` | Politique de chemins — deny by default |
| `.sfia/mcp/server/audit.js` | Journal JSONL append-only |
| `.sfia/mcp/server/gates.js` | Ouverture des gates Morris |
| `.sfia/mcp/server/tools.js` | Implémentation des 5 tools L1 |
| `.sfia/mcp/server/server.js` | Serveur MCP (stdio) |
| `.sfia/mcp/server/test-l1.mjs` | Test fonctionnel des tools L1 |
| `.sfia/mcp/server/smoke-mcp.mjs` | Test protocole MCP réel (stdio) |
| `.sfia/mcp/server/package.json` | Dépendances (`@modelcontextprotocol/sdk`, `zod`) |
| `.sfia/mcp/server/package-lock.json` | Lock local (dans `.sfia/mcp/`, non protégé) |
| `.sfia/mcp/tasks/.gitkeep` | Placeholder structure |
| `.sfia/mcp/gates/resolved/.gitkeep` | Placeholder structure |
| `.sfia/mcp/reports/2026-07-07-mcp-mvp-l1-experiment.md` | Ce rapport |

**Artefacts générés par les tests :**

| Fichier | Nature |
|---------|--------|
| `.sfia/mcp/gates/pending/gate-c04cda58-….json` | Gate Morris ouvert par le test (write sur `app/`) — **laissé OPEN** |
| `.sfia/mcp/logs/audit-2026-07-07.log` | Journal des appels de tools (non versionné) |

**Modifiés hors `.sfia/mcp/` :** aucun.
**Chemins protégés touchés :** aucun.
**Code applicatif modifié :** aucun.

---

## 4. Tools MCP disponibles

| Tool | Niveau | Statut |
|------|--------|--------|
| `sfia_health` | L1 | ✅ opérationnel |
| `sfia_repo_status` | L1 | ✅ opérationnel |
| `sfia_list_directory` | L1 | ✅ opérationnel (deny by default) |
| `sfia_read_file` | L1 | ✅ opérationnel (secrets refusés) |
| `sfia_check_protected_paths` | L1 | ✅ opérationnel (ouvre gate Morris) |

---

## 5. Commandes de lancement

```bash
# Installation
cd .sfia/mcp/server
npm install

# Lancement manuel (vérification ; normalement lancé par Cursor)
SFIA_REPO_ROOT="$(git rev-parse --show-toplevel)" node server.js

# Tests
npm run test:l1        # test fonctionnel des 5 tools
node smoke-mcp.mjs     # test protocole MCP (stdio)
```

---

## 6. Configuration Cursor à appliquer localement

Copier dans `.cursor/mcp.json` (projet) ou `~/.cursor/mcp.json` (global), en remplaçant le chemin absolu. **Aucun secret requis.**

```json
{
  "mcpServers": {
    "sfia-mcp": {
      "command": "node",
      "args": ["<ABSOLUTE_PATH_TO_REPO>/.sfia/mcp/server/server.js"],
      "env": { "SFIA_REPO_ROOT": "<ABSOLUTE_PATH_TO_REPO>" }
    }
  }
}
```

---

## 7. Tests réalisés

### 7.1 Test fonctionnel (`npm run test:l1`) — 16 assertions

| # | Test | Attendu | Résultat |
|---|------|---------|----------|
| 1 | `sfia_health.ok` | true | ✅ PASS |
| 2 | health expose 5 tools | 5 | ✅ PASS |
| 3 | `sfia_repo_status.ok` | true | ✅ PASS |
| 4 | repo_status branche présente | branche | ✅ PASS |
| 5 | list `docs/tooling/mcp` | allowed | ✅ PASS |
| 6 | list `docker` | denied (not_in_allowlist) | ✅ PASS |
| 7 | list `projects/…/app` | protected (segment app) | ✅ PASS |
| 8 | read `README.md` | allowed | ✅ PASS |
| 9 | read doc architecture MCP | allowed (22 910 o) | ✅ PASS |
| 10 | read `.env` | protected (secret) | ✅ PASS |
| 11 | read `../../etc/passwd` | denied (path_traversal) | ✅ PASS |
| 12 | check paths (read) ok | true | ✅ PASS |
| 13 | check paths (read) sans gate | true | ✅ PASS |
| 14 | check paths détecte 3 protégés | 3 | ✅ PASS |
| 15 | check paths (write sur app/) bloqué | blocked | ✅ PASS |
| 16 | gate Morris créé | fichier gate | ✅ PASS |

**Résultat : 16 passed, 0 failed.**

### 7.2 Test protocole MCP (`smoke-mcp.mjs`)

- Spawn du serveur en stdio via le client MCP officiel : **OK**
- `tools/list` → `sfia_health, sfia_repo_status, sfia_list_directory, sfia_read_file, sfia_check_protected_paths` : **OK**
- `callTool sfia_health` → `isError: false`, payload JSON valide : **OK**
- Fermeture propre : **SMOKE OK**

### 7.3 Traçabilité

- 12 appels de tools journalisés dans `logs/audit-2026-07-07.log` (JSONL).
- 1 gate Morris matérialisé dans `gates/pending/` avec `trigger`, `reason`, `required_decision`, `blocked_tools`.

---

## 8. Résultats — ce qui fonctionne / ne fonctionne pas

### ✅ Fonctionne

- Serveur MCP local démarre en stdio et répond au protocole (`initialize`, `tools/list`, `callTool`).
- Cursor peut consommer les 5 tools L1 (validé via client MCP officiel).
- **Deny by default** effectif : chemins hors allowlist refusés.
- **Chemins protégés** refusés (`app/`, `.env`, canonique `core/`…).
- **Path traversal** (`..`) bloqué.
- **Secrets** non lisibles (aucun secret exposé).
- Écriture confinée à `.sfia/mcp/` (structure tasks/reports/gates/logs).
- **Gate Morris** créé automatiquement sur intent write vers chemin protégé, et **bloque** (liste `blocked_tools`).
- Journal d'audit JSONL par appel.

### ⚠️ Limites / ne fait pas (attendu au MVP)

- Aucun tool L2/L3 (génération, écriture doc) — hors scope MVP.
- Pas de runner automatique Cursor (interdit).
- Pas de résolution de gate automatisée (par conception — Morris uniquement).
- Pas d'authentification (non requis en L1 local ; spec §4.5 du doc d'architecture).
- Détection « protégé » volontairement large (ex. tout segment `app`) — favorise la sûreté, peut sur-refuser certains chemins légitimes.
- Non testé sous Windows (chemins POSIX ; `git` requis dans le PATH).

---

## 9. Blocages

Aucun blocage technique. Installation npm, exécution des tests et smoke test protocole : tous réussis.

---

## 10. Réserves

- **R1 — Gate de test laissé OPEN :** le test a créé un vrai gate dans `gates/pending/`. Il n'est **pas** auto-résolu (invariant : seul Morris résout). Morris peut le déplacer vers `gates/resolved/` ou le supprimer (artefact de test).
- **R2 — Sur-restriction possible :** la règle segment `app`/`backend` peut refuser des chemins doc légitimes contenant ces noms ; à affiner si un cas réel apparaît.
- **R3 — Périmètre allowlist :** `projects/` est autorisé en bloc au MVP ; à restreindre par sous-arbre déclaré (handoff) avant montée en L3.
- **R4 — Versionnement :** `.sfia/` est actuellement untracked ; décision de versionner (et quoi ignorer) relève de Morris.

---

## 11. Décision Morris requise ?

**Non requise pour ce cycle expérimental** (L1 read-only, aucune écriture hors `.sfia/mcp/`, aucune action Git structurante).

**Décision Morris requise pour la suite** sur :

1. GO/NO-GO pour versionner `.sfia/mcp/` (et périmètre `.gitignore`).
2. GO/NO-GO pour un incrément L2 (génération handoff/prompt) puis L3 doc-only.
3. Traitement du gate de test `gate-c04cda58-…` (résoudre / supprimer).

---

## 12. Prochaine étape recommandée

**Incrément suivant proposé (après GO Morris) :**

1. **Validation Cursor réelle** — brancher `sfia-mcp` dans `.cursor/mcp.json` local et exécuter un flux ChatGPT → Cursor manuel sur les 5 tools L1 (preuve d'usage end-to-end dans l'IDE).
2. **Restreindre l'allowlist `projects/`** par sous-arbre déclaré via un handoff dans `tasks/`.
3. **Ajouter les tools L2** (`sfia_routing_lookup`, `sfia_prepare_task_handoff`) — génération, sans écriture repo.
4. **Cycle DOC dédié** pour décider du versionnement de `.sfia/mcp/` et la promotion documentée L1 → L2.

> Rappel gouvernance : push / PR / merge / suppression de branche / chemins protégés / décision d'architecture restent **L0 — Morris uniquement**. L5 global interdit.

---

*Rapport d'expérimentation — MVP L1 — documentation only — aucun commit, aucun push, aucune PR readiness.*
