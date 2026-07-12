> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA Cursor Task Runner — Experiment Report

**Date :** 2026-07-07
**Cycle :** DOC/MCP — watcher local expérimental
**Décision Morris :** GO watcher manuel, limité au bus `.sfia/mcp/`
**PR :** reportée — aucun commit / push / merge

---

## 1. Fichiers créés

```
.sfia/mcp/runner/
├── package.json
├── src/
│   ├── runner.js          # CLI once | watch
│   ├── processor.js       # logique traitement tâches
│   ├── paths.js           # chemins bus MCP
│   └── audit.js           # journal runner-audit.jsonl
└── test/
    └── runner.test.mjs    # 10 tests intégration
```

**Runtime (non versionné) :**

- `.sfia/mcp/logs/runner-audit.jsonl`

---

## 2. Architecture

```text
ChatGPT → Bridge → .sfia/mcp/tasks/ (PENDING_CURSOR)
                          │
                          ▼
              sfia-cursor-task-runner (manuel)
                npm run once | watch
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
  sfia_gate_morris_status  sfia_repo_status  lecture task
        │                 │                 │
        └─────────────────┴─────────────────┘
                          │
              gate OPEN? ─┬─ oui → BLOCKED_MORRIS_DECISION + mini-rapport
                          │
                          └─ non → RUNNING → rapport → DONE
                          │
                          ▼
              .sfia/mcp/reports/*.json
                          │
                          ▼
              ChatGPT ← Bridge GET /reports/latest
```

**Important :** le runner **ne lance pas Cursor**. Il reproduit les contrôles L1 autorisés et écrit le rapport automatiquement.

---

## 3. Commandes de lancement

```bash
cd .sfia/mcp/runner
export SFIA_REPO_ROOT="/chemin/vers/sfia-workspace"

# Traiter une seule tâche PENDING_CURSOR puis s'arrêter
npm run once

# Surveiller en continu (poll 3s, Ctrl+C pour arrêter)
npm run watch

# Tests
npm test
```

Variable optionnelle : `SFIA_RUNNER_POLL_MS=3000` (intervalle watch).

---

## 4. Comportement

| Étape | Action |
|-------|--------|
| Scan | Liste `tasks/*.json` avec `status: PENDING_CURSOR` |
| Filtre | Uniquement `cycle_type: DOC/MCP` |
| Gate OPEN | → `BLOCKED_MORRIS_DECISION` + mini-rapport direct |
| Cycle inconnu | → `BLOCKED_UNKNOWN_CYCLE` + mini-rapport |
| OK | → `RUNNING` → contrôles L1 → rapport MCP L3 → `DONE` |

### Statuts tâche

| Statut | Signification |
|--------|---------------|
| `PENDING_CURSOR` | En attente (créée par bridge) |
| `RUNNING` | En cours de traitement |
| `DONE` | Rapport produit, `report_id` renseigné |
| `BLOCKED_MORRIS_DECISION` | Gate OPEN — Morris requis |
| `BLOCKED_UNKNOWN_CYCLE` | cycle_type non DOC/MCP |
| `FAILED` | Échec écriture rapport |

---

## 5. Tests réalisés

| # | Test | Résultat |
|---|------|----------|
| 1 | PENDING_CURSOR traitée (mode processTask) | **OK** → DONE |
| 2 | Rapport créé | **OK** |
| 3 | Task mise à jour DONE | **OK** |
| 4 | Refus si gate OPEN | **OK** → BLOCKED_MORRIS_DECISION + mini-rapport |
| 5 | Refus si cycle_type inconnu (DOC) | **OK** → BLOCKED_UNKNOWN_CYCLE |
| 6 | Aucune écriture hors .sfia/mcp/ | **OK** |
| 7 | Audit log créé | **OK** — `runner-audit.jsonl` |
| 8 | `npm run once` smoke | **OK** |
| 9 | Mini-rapport gate (écriture directe reports/) | **OK** |
| 10 | DONE exclu de pending | **OK** |

**Suite complète :** `10/10 OK`

---

## 6. Garde-fous validés

| Garde-fou | Validé |
|-----------|--------|
| Écriture limitée `.sfia/mcp/tasks/` + `.sfia/mcp/reports/` | ✅ |
| Pas de lancement Cursor | ✅ |
| Pas de commandes shell dangereuses | ✅ |
| Pas de résolution gate automatique | ✅ |
| Blocage si gate OPEN | ✅ |
| Refus cycle_type non DOC/MCP | ✅ |
| Réutilisation tools MCP L1/L3 (gates fermés) | ✅ |
| Mini-rapport direct si gate OPEN (MCP L3 refuserait) | ✅ |
| Audit JSONL | ✅ |

---

## 7. Limites

1. **Manuel** — Morris lance `npm run once` ou `npm run watch` ; pas de daemon système.
2. **DOC/MCP uniquement** — autres cycles ignorés/bloqués.
3. **Pas d'exécution Cursor réelle** — le runner produit le rapport L1, pas de modification code.
4. **Poll watch** — pas de fs.watch fiable cross-platform ; poll 3s par défaut.
5. **Mini-rapports bloqués** — écriture directe `reports/` (hors tool MCP) quand gate OPEN.
6. **PR reportée** — expérimentation locale uniquement.

---

## 8. Décision Morris requise ?

**Non pour le runner MVP** — GO déjà donné.

**Oui avant industrialisation :**

- GO pour daemon/systemd ou lancement auto au démarrage session
- GO pour étendre les cycle_types traités
- GO pour PR après fin d'expérimentation ChatGPT réel

---

## 9. Prochaine étape recommandée

1. ChatGPT dépose une tâche via bridge (`POST /tasks`).
2. Lancer en parallèle : `cd .sfia/mcp/runner && npm run watch`.
3. Vérifier task → `DONE` + rapport dans `reports/`.
4. ChatGPT relit via `GET /reports/latest`.
5. Documenter flux E2E complet sans prompt manuel Cursor.

**Flux cible validé :**

```text
ChatGPT → Bridge → tasks/ → Runner (watch) → reports/ → Bridge → ChatGPT
```

Sans intervention Cursor manuelle pour « consommer la tâche ».

---

**Statut :** **OK** — runner opérationnel, tests passants, prêt pour test E2E avec watch actif.
