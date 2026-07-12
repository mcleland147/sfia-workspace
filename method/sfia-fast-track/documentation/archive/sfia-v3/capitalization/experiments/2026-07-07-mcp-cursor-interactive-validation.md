> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA MCP — Validation interactive Cursor UI v0.4.0

**Date :** 2026-07-07
**Type :** Validation usage interactif depuis le chat Cursor
**Serveur :** sfia-mcp v0.4.0
**Résultat global :** **10/10 OK** (protocole + handlers)

> Pas de commit, push, PR, merge ni PR readiness.

---

## 1. Visibilité `sfia-mcp` dans Cursor UI

| Vérification | Statut | Détail |
|--------------|--------|--------|
| Config projet | **OK** | `/Users/morris/Projects/sfia-workspace/.cursor/mcp.json` |
| Serveur stdio démarre | **OK** | `[sfia-mcp] v0.4.0 ready (stdio)` |
| `tools/list` via protocole MCP | **OK** | **11 tools** listés |
| `sfia-mcp` dans session agent courante | **WARN** | Workspace Cursor actuel = `sfia-notion-sync` — `sfia-mcp` **non chargé** dans cette session chat |
| Config globale `~/.cursor/mcp.json` | **N/A** | Contient `penpot` uniquement — pas `sfia-mcp` |

**Conclusion visibilité :**

- **Protocole MCP : OK** — le serveur répond et expose les 11 tools (smoke stdio).
- **UI Cursor : WARN** — pour voir `sfia-mcp` dans le panneau MCP / chat tools, ouvrir **`sfia-workspace` comme racine** et **recharger la fenêtre** (Cmd+Shift+P → Reload Window).

---

## 2. Tools appelés (10 étapes + smoke)

| # | Tool | Statut | Résultat |
|---|------|--------|----------|
| 0 | MCP `tools/list` (visibilité) | **OK** | 11 tools |
| 1 | `sfia_health` | **OK** | v0.4.0, mode L1-L2-L3-confined |
| 2 | `sfia_repo_status` | **OK** | `method/sfia-v2.4.1-documentation-status-promotion` |
| 3 | `sfia_read_file` | **OK** | `docs/tooling/mcp/sfia-mcp-v2-architecture.md` (22 910 o) |
| 4 | `sfia_routing_lookup` | **OK** | `DOC/MCP` |
| 5 | `sfia_prepare_task_handoff` | **OK** | L2, `file_written: false` |
| 6 | `sfia_validate_prompt_scope` | **OK** | `valid: true` |
| 7 | `sfia_write_task_handoff` | **OK** | `.sfia/mcp/tasks/…` |
| 8 | `sfia_write_cycle_report` | **OK** | `.sfia/mcp/reports/…` |
| 9 | `sfia_read_file` (relecture) | **OK** | rapport JSON lisible |

**Trace machine :** `.sfia/mcp/reports/cursor-interactive-session.json`

---

## 3. Résultats OK / WARN / FAIL

| Catégorie | Count |
|-----------|-------|
| **OK** | 10 |
| **WARN** | 1 (visibilité UI — workspace racine) |
| **FAIL** | 0 |

---

## 4. Handoff créé

**Généré (L2) :** `task-9bbb186b-7171-473e-9e16-af0926f24426`
**Persisté (L3) :** `.sfia/mcp/tasks/task-9bbb186b-7171-473e-9e16-af0926f24426.json`

---

## 5. Rapport créé

**Fichier :** `.sfia/mcp/reports/report-2336603a-061f-40f1-8791-11f222ff4a31.json`

```json
{
  "cycle_id": "DOC-MCP-CURSOR-INTERACTIVE",
  "status": "COMPLETED",
  "summary": "Validation interactive Cursor — 10 appels MCP v0.4.0 exécutés",
  "consumable_by": "ChatGPT via sfia_read_file"
}
```

---

## 6. Preuve de relecture

| Champ | Valeur |
|-------|--------|
| `sfia_read_file` path | `.sfia/mcp/reports/report-2336603a-061f-40f1-8791-11f222ff4a31.json` |
| `ok` | `true` |
| `contains_report_id` | `true` |
| `bytes` | 1286 |

---

## 7. Garde-fous respectés

- `gates/pending/` vide avant exécution
- Écriture uniquement dans `.sfia/mcp/tasks/` et `.sfia/mcp/reports/`
- Aucun fichier hors `.sfia/mcp/` modifié (git scope OK)
- Pas de secret, token, push, PR, merge

---

## 8. Limites constatées

| # | Limite |
|---|--------|
| L1 | **Workspace racine** — `sfia-mcp` configuré dans `sfia-workspace/.cursor/mcp.json` ; invisible si Cursor ouvert sur un autre repo |
| L2 | **Session agent** — cette validation a utilisé les handlers MCP + client stdio (équivalent protocole) ; pas d'invocation `CallMcpTool` native car serveur non attaché à la session `sfia-notion-sync` |
| L3 | **Reload requis** — après ajout/modif MCP config, reload fenêtre obligatoire |
| L4 | **Pas de preuve screenshot UI** — validation protocolaire + fonctionnelle |

---

## 9. Décision Morris requise ?

**Non** pour ce cycle de validation interactive.

**Oui pour la suite** sur :

1. GO ouvrir **`sfia-workspace`** comme workspace Cursor pour test UI manuel final (1 appel `sfia_health` dans le chat).
2. GO **versionner** `.sfia/mcp/` + doc architecture (PR expérimentale).

---

## 10. Recommandation : versionner ou ajuster avant versionnement

### Ajuster avant versionnement (court terme)

1. Ouvrir `sfia-workspace` dans Cursor → vérifier panneau MCP → `sfia-mcp` enabled.
2. Dans le chat : « Appelle `sfia_health` » — confirmer réponse JSON.
3. Optionnel : copier bloc `sfia-mcp` dans `~/.cursor/mcp.json` si usage multi-repo.

### Versionner (après validation UI manuelle Morris)

| Inclure | Exclure (.gitignore) |
|---------|----------------------|
| `.sfia/mcp/server/` (sans `node_modules/`) | `server/node_modules/` |
| `.sfia/mcp/README.md` | `logs/*.log` |
| `.sfia/mcp/.gitignore` | `tasks/*.json` (artefacts test) |
| `cursor-mcp.example.json` | rapports de test `report-*.json` (optionnel) |
| `docs/tooling/mcp/sfia-mcp-v2-architecture.md` | `.cursor/mcp.json` (machine-specific) |

**Verdict :** dispositif **prêt à versionner** après **1 validation UI manuelle** dans `sfia-workspace` (WARN actuel = workspace racine uniquement).

---

## 11. Commande de reproduction

```bash
cd /Users/morris/Projects/sfia-workspace/.sfia/mcp/server
node flow-interactive-cursor.mjs
```

---

*Validation interactive Cursor — 10/10 OK — aucun commit, aucun push.*
