> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA MCP — Rapport d'expérimentation L3 confiné handoff

**Date :** 2026-07-07
**Cycle :** Incrément L3 confiné — persistance handoff dans `.sfia/mcp/tasks/` uniquement
**Version serveur :** `0.3.0` — mode `L1-L2-L3-confined`
**Décision Morris :** GO résolution gates de test + GO L3 confiné `.sfia/mcp/`

> Pas de commit, push, PR, merge ni PR readiness dans ce cycle.

---

## 1. Branche courante

```
method/sfia-v2.4.1-documentation-status-promotion
```

## 2. Statut Git

```
?? .sfia/mcp/
```

Aucun commit. Toutes les modifications confinées à `.sfia/mcp/`.

---

## 3. Gates traités

**Morris GO — résolution manuelle des 2 gates de test L1/L2 :**

| Gate ID | Action | Résolution |
|---------|--------|------------|
| `gate-c04cda58-bddf-447a-81b0-16ec7afd7778` | `OPEN` → `RESOLVED_GO` | Gate de test validé — comportement bloquant observé en L1/L2, aucune action réelle exécutée. |
| `gate-b15ca07f-6b89-4024-879f-7dca751e185a` | `OPEN` → `RESOLVED_GO` | Idem |

- Fichiers déplacés : `gates/pending/` → `gates/resolved/`
- Script utilisé : `server/resolve-test-gates.mjs` (action Morris manuelle, hors MCP)
- **Aucune résolution automatique via MCP**

**État après tests L3 :** `gates/pending/` vide — 1 gate de test L3 créé puis résolu en teardown (`RESOLVED_GO` Morris-test).

---

## 4. Tool ajouté

| Tool | Niveau | Écriture | Périmètre |
|------|--------|----------|-----------|
| `sfia_write_task_handoff` | L3 confiné | ✅ | `.sfia/mcp/tasks/{task_id}.json` uniquement |

**Module ajouté :** `server/l3-write.js` — validation task_id, cible, secrets, actions Morris.

**Contrôles implémentés :**

1. Refus si gate Morris `OPEN` → `BLOCKED` / `BLOCKED_GATE_OPEN`
2. Refus si cible hors `.sfia/mcp/tasks/` → `BLOCKED_OUTSIDE_TASKS`
3. Refus path traversal (`task_id` invalide) → `BLOCKED_PATH_TRAVERSAL`
4. Refus secret détecté → `BLOCKED_SECRET`
5. Refus push/PR/merge dans contenu → `BLOCKED_MORRIS_DECISION`
6. Journalisation audit JSONL
7. Statut explicite : `OK` | `BLOCKED` | `FAIL`

**Total tools exposés : 10**

---

## 5. Tests réalisés

Commandes :
```bash
node resolve-test-gates.mjs   # Morris GO — 2 gates résolus
npm run test:l3
node smoke-mcp.mjs
```

| # | Test | Statut |
|---|------|--------|
| 1 | Écriture handoff OK sans gate OPEN | **OK** |
| 2 | Refus si gate OPEN | **OK** |
| 3 | Refus path hors `.sfia/mcp/tasks/` | **OK** |
| 4 | Refus path traversal (`task_id`) | **OK** |
| 5 | Refus contenu secret (`api_key`) | **OK** |
| 6 | Refus contenu push/PR/merge | **OK** |
| 7 | Audit log créé | **OK** |
| 8 | Aucun fichier hors `.sfia/mcp/` | **OK** |
| + | `gates/pending` vide après teardown | **OK** |
| + | Smoke MCP — 10 tools listés | **OK** |

**Synthèse : 11/11 PASS + SMOKE OK**

---

## 6. Résultats OK / WARN / FAIL

| Catégorie | Count |
|-----------|-------|
| **OK** | 11 |
| **WARN** | 0 |
| **FAIL** | 0 |

---

## 7. Exemple de handoff persisté

Fichier : `.sfia/mcp/tasks/task-0b35d0b8-8e4a-4214-b2eb-a8cedf29e0b7.json`

```json
{
  "task_id": "task-0b35d0b8-8e4a-4214-b2eb-a8cedf29e0b7",
  "cycle_type": "DOC/MCP",
  "automation_level": "L3-confined",
  "objective": "Persister un handoff L3 confiné pour test",
  "handoff_payload": {
    "allowed_paths": ["docs/tooling/mcp/", ".sfia/mcp/reports/"],
    "note": "Test handoff persistence"
  },
  "write_scope": ".sfia/mcp/tasks/",
  "morris_gate_required_before_repo_write": true
}
```

---

## 8. Fichiers créés / modifiés

| Fichier | Action |
|---------|--------|
| `.sfia/mcp/server/l3-write.js` | Créé |
| `.sfia/mcp/server/resolve-test-gates.mjs` | Créé |
| `.sfia/mcp/server/test-l3.mjs` | Créé |
| `.sfia/mcp/server/tools.js` | Modifié — `sfia_write_task_handoff` |
| `.sfia/mcp/server/server.js` | Modifié — enregistrement MCP |
| `.sfia/mcp/server/config.js` | Modifié — v0.3.0 |
| `.sfia/mcp/server/package.json` | Modifié — `test:l3` |
| `.sfia/mcp/gates/resolved/gate-*.json` | 4 fichiers (2 Morris GO + 2 teardown test) |
| `.sfia/mcp/tasks/task-*.json` | 2 handoffs de test |
| `.sfia/mcp/reports/2026-07-07-mcp-l3-confined-handoff-experiment.md` | Ce rapport |

**Hors `.sfia/mcp/` :** aucune modification.

---

## 9. Limites

- **L1** — Écriture **uniquement** dans `.sfia/mcp/tasks/` ; pas d'écriture doc repo, pas de commit.
- **L2** — `sfia_prepare_task_handoff` reste sans persistance (L2 = mémoire ; L3 = persistance explicite).
- **L3** — `morris_gate_required_before_repo_write: true` dans le document — rappel qu'écriture hors `.sfia/mcp/` = Morris L0.
- **Secrets** — détection heuristique (patterns) ; pas de scan binaire.
- **Gates** — résolution hors MCP uniquement (Morris manuel ou script autorisé).

---

## 10. Décision Morris requise ?

**Non** pour ce cycle L3 confiné (périmètre respecté, gates de test résolus avec GO explicite, tests PASS).

**Oui pour la suite** sur :

1. GO **PR expérimentale** MCP si validation Cursor UI end-to-end complète.
2. GO extension L3 — `sfia_write_cycle_report` dans `.sfia/mcp/reports/` (après handoff validé).
3. GO versionnement `.sfia/mcp/` dans `sfia-workspace`.

---

## 11. Recommandation pour la suite

**Flux ChatGPT → Cursor complet (après GO Morris) :**

1. ChatGPT appelle `sfia_prepare_task_handoff` (L2) → Morris valide le JSON retourné.
2. Morris GO → ChatGPT/Cursor appelle `sfia_write_task_handoff` (L3) → fichier dans `tasks/`.
3. Cursor exécute en **L1 read-only** selon le handoff persisté.
4. Rapport produit manuellement ou via futur `sfia_write_cycle_report` (L3 confiné `reports/`).
5. **PR expérimentale** si le dispositif est validé de bout en bout dans Cursor.

> Rappel : push / PR / merge / chemins protégés / code applicatif = **hors périmètre** — L0 Morris.

---

*Rapport L3 confiné — aucun commit, aucun push.*
