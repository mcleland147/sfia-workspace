# SFIA MCP — Rapport d'essai intégration Cursor (flux réel L1)

**Date :** 2026-07-07
**Cycle :** Expérimental exceptionnel — branchement Cursor + flux ChatGPT → Cursor → rapport
**Niveau :** L1 read-only uniquement (pas de L3 risqué)
**Référence :** `docs/tooling/mcp/sfia-mcp-v2-architecture.md`

> Pas de commit, push, PR, merge ni PR readiness dans ce cycle.

---

## 1. Branche courante

```
method/sfia-v2.4.1-documentation-status-promotion
```

Aucune action Git en écriture effectuée.

---

## 2. Configuration MCP utilisée

Fichier créé au niveau **projet** (local, sans secret) :

**`.cursor/mcp.json`** dans `sfia-workspace` :

```json
{
  "mcpServers": {
    "sfia-mcp": {
      "command": "node",
      "args": ["/Users/morris/Projects/sfia-workspace/.sfia/mcp/server/server.js"],
      "env": {
        "SFIA_REPO_ROOT": "/Users/morris/Projects/sfia-workspace"
      }
    }
  }
}
```

| Élément | Valeur |
|---------|--------|
| Serveur | `sfia-mcp` |
| Transport | stdio |
| Secret / token / API key | **Aucun** |
| Racine repo | `/Users/morris/Projects/sfia-workspace` |

**Action utilisateur recommandée :** recharger la fenêtre Cursor (ou redémarrer les serveurs MCP dans les settings) pour que `sfia-mcp` apparaisse dans la liste MCP du projet `sfia-workspace`.

---

## 3. Tools visibles dans Cursor

Vérifié via client MCP stdio (`smoke-mcp.mjs` — même protocole que Cursor) :

| Tool | Visible | Niveau |
|------|---------|--------|
| `sfia_health` | ✅ | L1 |
| `sfia_repo_status` | ✅ | L1 |
| `sfia_list_directory` | ✅ | L1 |
| `sfia_read_file` | ✅ | L1 |
| `sfia_check_protected_paths` | ✅ | L1 |

**Total : 5 tools** — conforme au MVP L1.

---

## 4. Scénario de flux réel (ChatGPT → Cursor → rapport)

### Intent ChatGPT (simulé)

> Vérifier l'intégration MCP : health, statut repo, lecture doc autorisé, garde-fous chemins protégés, état gates Morris.

### Exécution Cursor (tools MCP L1)

Script : `.sfia/mcp/server/flow-cursor-real-l1.mjs`
Résultats machine : `.sfia/mcp/reports/flow-cursor-real-l1-results.json`

| # | Appel | Résultat | Statut |
|---|-------|----------|--------|
| 1 | `sfia_health` | `ok: true`, 5 tools, mode `L1-read-only` | **OK** |
| 2 | `sfia_repo_status` | branche `method/sfia-v2.4.1-documentation-status-promotion`, 9 modifiés, 7 untracked | **OK** |
| 3 | `sfia_list_directory` `docs/tooling/mcp` | 1 entrée (doc architecture) | **OK** |
| 4 | `sfia_read_file` `docs/tooling/mcp/sfia-mcp-v2-architecture.md` | contenu lu (tronqué 2 Ko), contient « SFIA MCP » | **OK** |
| 5 | `sfia_read_file` `.env` | `decision: protected`, `forbidden_pattern:.env` | **OK** (refus attendu) |
| 6 | `sfia_read_file` `projects/…/app/package.json` | `decision: protected`, `protected_segment:app` | **OK** (refus attendu) |
| 7 | `sfia_check_protected_paths` intent=`read` | 3 chemins protégés détectés, `blocked: false` | **OK** |
| 8 | Observation gates Morris | 2 gates `OPEN` listés, **aucune résolution** | **OK** |
| 9 | `sfia_health` avec gates ouverts | lecture L1 toujours autorisée | **OK** |

**Synthèse : 9 OK, 0 WARN, 0 FAIL.**

### Protocole MCP (validation Cursor)

```
tools: sfia_health, sfia_repo_status, sfia_list_directory, sfia_read_file, sfia_check_protected_paths
sfia_health.isError: false
SMOKE OK
```

---

## 5. Comportement face aux gates Morris ouverts

**État au moment du test :**

| Gate ID | Trigger | Status |
|---------|---------|--------|
| `gate-c04cda58-bddf-447a-81b0-16ec7afd7778` | G4_protected_path_write | OPEN |
| `gate-b15ca07f-6b89-4024-879f-7dca751e185a` | G4_protected_path_write | OPEN |

**Comportement observé :**

| Vérification | Résultat |
|--------------|----------|
| Gates listés via `sfia_list_directory` `.sfia/mcp/gates/pending` | ✅ |
| Contenu gate lu via `sfia_read_file` (chemin `.sfia/mcp/`) | ✅ |
| Résolution automatique des gates | ❌ **Aucune** (conforme — Morris uniquement) |
| Nouveau gate créé pendant ce flux | ❌ **Aucun** (pas d'intent `write` sur chemin protégé) |
| Contournement des gates | ❌ **Aucun** |
| Tools L1 read-only avec gates ouverts | ✅ **Fonctionnent** (gates bloquent L3 write tools, pas la lecture) |

**Note gouvernance :** les 2 gates OPEN sont des artefacts de tests précédents. Morris doit les résoudre manuellement (déplacer vers `gates/resolved/` avec décision) ou les supprimer s'ils sont considérés comme jetables.

---

## 6. Fichiers créés / modifiés

| Fichier | Action | Hors `.sfia/mcp/` ? |
|---------|--------|---------------------|
| `.cursor/mcp.json` | **Créé** — config MCP projet | Oui (autorisé — point 1 périmètre) |
| `.sfia/mcp/server/flow-cursor-real-l1.mjs` | **Créé** — script flux L1 | Non |
| `.sfia/mcp/reports/flow-cursor-real-l1-results.json` | **Créé** — résultats machine | Non |
| `.sfia/mcp/reports/2026-07-07-cursor-integration-flow.md` | **Créé** — ce rapport | Non |

**Aucune modification** hors `.sfia/mcp/` sauf `.cursor/mcp.json` (configuration Cursor explicitement autorisée).
**Aucun** chemin protégé, code applicatif, commit, push, PR ou merge.

---

## 7. Ce qui fonctionne / ne fonctionne pas

### ✅ Fonctionne

- Configuration Cursor projet `sfia-mcp` (stdio, sans secret).
- 5 tools L1 visibles et appelables via protocole MCP.
- Lecture documentaire autorisée (`docs/tooling/mcp/sfia-mcp-v2-architecture.md`).
- Refus `.env` et segment `app/` (secrets / chemins protégés).
- `sfia_check_protected_paths` en intent `read` sans ouvrir de nouveau gate.
- Observation des gates OPEN sans contournement.
- Flux ChatGPT → Cursor → rapport matérialisé dans `.sfia/mcp/reports/`.

### ⚠️ À valider manuellement dans l'UI Cursor

- Visibilité du serveur `sfia-mcp` dans le panneau MCP après reload fenêtre.
- Appel interactif des tools depuis le chat Cursor (ce rapport valide le protocole et les handlers ; l'UI dépend du reload).

### ❌ Hors scope (attendu)

- Tools L2/L3 non implémentés.
- Pas de runner automatique.
- Pas de résolution gate via MCP.

---

## 8. Décision Morris requise ?

**Non** pour ce cycle d'essai L1 (read-only, écriture limitée aux rapports `.sfia/mcp/reports/`, aucune action Git structurante).

**Oui pour la suite** sur :

1. Résolution ou suppression des 2 gates de test OPEN.
2. GO/NO-GO versionner `.sfia/mcp/` + `.cursor/mcp.json` (ou template uniquement).
3. GO incrément **L2** (`sfia_routing_lookup`, `sfia_prepare_task_handoff`).

---

## 9. Recommandation pour l'incrément L2

**Prochain incrément proposé (après GO Morris) :**

1. **Valider dans l'UI Cursor** — recharger MCP, invoquer `sfia_health` depuis le chat ; confirmer que Morris voit les 5 tools sans friction.
2. **Ajouter `sfia_gate_morris_status`** (L1 read-only) — exposer l'état des gates sans les résoudre.
3. **Ajouter tools L2** :
   - `sfia_routing_lookup` — références cycle depuis le Cycle Routing Guide ;
   - `sfia_prepare_task_handoff` — génération handoff JSON dans `.sfia/mcp/tasks/` (écriture confinée).
4. **Restreindre `projects/`** — allowlist par sous-arbre déclaré dans le handoff (réduire sur-restriction segment `app`).
5. **Cycle DOC** — décider versionnement `.sfia/mcp/` et politique `.cursor/mcp.json` (gitignore machine-specific).

> Rappel : L3 doc-only et L4 orchestration restent **après** validation L2 stable. Push / PR / merge = **L0 Morris**.

---

*Rapport d'essai intégration Cursor — L1 only — aucun commit, aucun push.*
