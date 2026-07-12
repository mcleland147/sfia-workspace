> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA MCP — Rapport d'expérimentation L2 handoff

**Date :** 2026-07-07
**Cycle :** Incrément L2 minimal — handoff ChatGPT → Cursor sans écriture repo par ChatGPT, sans L3
**Version serveur :** `0.2.0` — mode `L1-L2-read-only`
**Référence :** `docs/tooling/mcp/sfia-mcp-v2-architecture.md`

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

- Aucun commit effectué.
- Toutes les modifications confinées à `.sfia/mcp/`.
- Aucun fichier hors `.sfia/mcp/` créé ou modifié dans ce cycle L2.

---

## 3. Tools ajoutés

| Tool | Niveau | Écriture repo | Description |
|------|--------|---------------|-------------|
| `sfia_gate_morris_status` | L1 / gate | ❌ | Liste les gates Morris `OPEN` ; signale blocage L3 |
| `sfia_routing_lookup` | L2 | ❌ | Métadonnées de routage cycle (DOC, DOC/MCP, MCP) |
| `sfia_prepare_task_handoff` | L2 | ❌ | Génère handoff structuré **en mémoire uniquement** |
| `sfia_validate_prompt_scope` | L2 | ❌ | Valide scope + détecte actions Morris / chemins protégés |

**Total tools exposés : 9** (5 L1 + 1 gate + 3 L2)

**Modules ajoutés :**

- `server/routing.js` — carte de routage statique MVP
- `server/l2-guard.js` — garde-fous L2 (`BLOCKED_*`)
- Extensions : `gates.js`, `tools.js`, `server.js`, `config.js`

---

## 4. Tests réalisés

Commande : `npm run test:l2` (+ `node smoke-mcp.mjs` pour protocole MCP)

| # | Test | Statut |
|---|------|--------|
| 1 | `sfia_gate_morris_status` retourne 2 gates OPEN | **OK** |
| 2 | `sfia_routing_lookup` DOC/MCP — route valide | **OK** |
| 3 | `sfia_prepare_task_handoff` — handoff structuré, `file_written: false` | **OK** |
| 4 | `sfia_validate_prompt_scope` accepte `docs/tooling/mcp` | **OK** |
| 5 | `sfia_validate_prompt_scope` refuse `app/` → `BLOCKED_PROTECTED_PATH` | **OK** |
| 6 | `sfia_validate_prompt_scope` refuse `.env` → `BLOCKED_PROTECTED_PATH` | **OK** |
| 7 | `sfia_validate_prompt_scope` bloque push/PR/merge → `BLOCKED_MORRIS_DECISION` | **OK** |
| 8 | Aucun fichier hors `.sfia/mcp/` créé/modifié | **OK** |
| + | 12 champs obligatoires handoff présents | **OK** |
| + | `l3_progression_blocked: true` avec gates OPEN | **OK** |
| + | Smoke MCP — 9 tools listés, protocole stdio | **OK** |

**Synthèse : 26/26 PASS (test:l2) + SMOKE OK**

---

## 5. Résultats OK / WARN / FAIL

| Catégorie | Count |
|-----------|-------|
| **OK** | 26 |
| **WARN** | 0 |
| **FAIL** | 0 |

---

## 6. Comportement avec gates OPEN

**État :** 2 gates `OPEN` (artefacts tests L1 précédents)

| Vérification | Comportement |
|--------------|--------------|
| `sfia_gate_morris_status` | Retourne les 2 gates, `l3_progression_blocked: true` |
| `sfia_routing_lookup` | Route lisible + note gate OPEN |
| `sfia_prepare_task_handoff` | Handoff généré ; `l3_progression_blocked: true` ; `decision_required` explicite |
| `sfia_validate_prompt_scope` (scope valide) | `valid: true` + warning `BLOCKED_GATE_OPEN` — L3 bloqué |
| Résolution automatique gate | ❌ **Aucune** |
| Progression L3 | ❌ **Bloquée** tant que gates OPEN |

---

## 7. Exemple de handoff généré

Fichier machine : `.sfia/mcp/reports/example-handoff-l2.json`

```json
{
  "task_id": "task-b664d397-7683-4528-b340-c79f110ce1b3",
  "cycle_type": "DOC/MCP",
  "automation_level": "L2",
  "objective": "Documenter le résultat de l'expérimentation MCP L2 handoff",
  "allowed_paths": ["docs/tooling/mcp/", ".sfia/mcp/reports/"],
  "forbidden_paths": ["app/", "backend/", "src/", ".env", ".github/workflows/", "method/sfia-fast-track/core/"],
  "decision_required": "Morris — resolve open gate(s) before any L3 Cursor execution",
  "morris_gate_required": true,
  "l3_progression_blocked": true,
  "open_gates": ["gate-b15ca07f-…", "gate-c04cda58-…"],
  "file_written": false
}
```

Le champ `cursor_prompt` contient un prompt Cursor Markdown complet (non reproduit ici — voir fichier JSON).

---

## 8. Fichiers créés / modifiés

| Fichier | Action |
|---------|--------|
| `.sfia/mcp/server/routing.js` | Créé |
| `.sfia/mcp/server/l2-guard.js` | Créé |
| `.sfia/mcp/server/test-l2.mjs` | Créé |
| `.sfia/mcp/server/gates.js` | Modifié — `loadPendingGates`, `hasOpenGates` |
| `.sfia/mcp/server/tools.js` | Modifié — 4 tools L2/gate |
| `.sfia/mcp/server/server.js` | Modifié — enregistrement MCP |
| `.sfia/mcp/server/config.js` | Modifié — v0.2.0, 9 tools |
| `.sfia/mcp/server/package.json` | Modifié — script `test:l2` |
| `.sfia/mcp/reports/example-handoff-l2.json` | Créé — exemple handoff |
| `.sfia/mcp/reports/2026-07-07-mcp-l2-handoff-experiment.md` | Créé — ce rapport |

**Hors `.sfia/mcp/` :** aucune modification.

---

## 9. Codes de blocage implémentés

| Code | Déclencheur |
|------|-------------|
| `BLOCKED_SCOPE_AMBIGUITY` | Cycle inconnu, scope vide, chemin hors allowlist |
| `BLOCKED_PROTECTED_PATH` | Segment `app`, `.env`, `core/`, etc. |
| `BLOCKED_MORRIS_DECISION` | push / PR / merge / delete branch dans le prompt |
| `BLOCKED_GATE_OPEN` | Warning L2 — gates OPEN, L3 bloqué |
| `BLOCKED_L3_PROGRESSION` | Alias logique via `l3_progression_blocked: true` |

---

## 10. Réserves

- **R1** — Routage statique MVP (`routing.js`) : pas encore de lecture dynamique du Cycle Routing Guide.
- **R2** — `sfia_prepare_task_handoff` ne persiste pas le handoff dans `tasks/` (volontaire L2 : pas d'écriture repo ; persistance = incrément L3 contrôlé).
- **R3** — 2 gates de test toujours OPEN — à résoudre par Morris avant tout L3 réel.
- **R4** — Segment `app` sur-refuse certains chemins `projects/…/app` (sûreté > finesse au MVP).

---

## 11. Décision Morris requise ?

**Non** pour ce cycle L2 (génération en mémoire, aucune écriture repo hors rapports `.sfia/mcp/`, pas d'action Git).

**Oui pour la suite** sur :

1. Résolution/suppression des 2 gates de test OPEN.
2. GO persistance handoff dans `.sfia/mcp/tasks/` (premier pas L3 doc-only).
3. GO versionnement `.sfia/mcp/` + PR expérimentale si dispositif validé end-to-end dans Cursor UI.

---

## 12. Recommandation pour la suite

**Incrément L2.5 / L3 minimal (après GO Morris) :**

1. **Flux Cursor UI réel** — ChatGPT (ou agent) appelle `sfia_prepare_task_handoff` via MCP, Morris copie/valide le handoff, Cursor exécute en L1 read-only uniquement.
2. **Tool `sfia_write_handoff_artifact`** (L3 confiné) — écriture **uniquement** dans `.sfia/mcp/tasks/{task_id}.json` après GO Morris explicite.
3. **Résoudre gates de test** — nettoyer `gates/pending/` avant L3.
4. **Affiner allowlist `projects/`** — sous-arbre déclaré dans handoff vs bloc segment `app` global.
5. **Routage dynamique** — lire en-têtes YAML du Cycle Routing Guide au lieu de la carte statique.

> Rappel : L3 doc-only dans `.sfia/mcp/` uniquement ; push/PR/merge = L0 Morris ; pas de runner automatique.

---

*Rapport L2 handoff — aucun commit, aucun push.*
