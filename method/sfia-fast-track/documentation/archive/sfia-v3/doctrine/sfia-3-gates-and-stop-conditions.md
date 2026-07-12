> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA 3.0 — Gates Morris et conditions d'arrêt

**Type :** Politique gouvernance
**Version :** 3.0 (opening)
**Statut :** Aligné sur sfia-mcp v0.4.0 + bridge v0.1.0 + runner v0.1.0

---

## 1. Purpose

Formaliser les **gates Morris** et les **conditions d'arrêt** du cycle orchestré SFIA 3.0 — aucune progression automatique au-delà d'un blocage structurant.

**Principe :**

> Un gate OPEN bloque. Seul Morris résout. Aucun composant ne contourne.

---

## 2. Anatomie d'un gate Morris

```json
{
  "gate_id": "gate-<uuid>",
  "status": "OPEN | RESOLVED_GO | RESOLVED_NO_GO",
  "trigger": "<code>",
  "reason": "<description>",
  "required_decision": "<ce que Morris doit trancher>",
  "blocked_tools": ["<tools MCP ou actions bloquées>"],
  "context": {},
  "opened_at": "<ISO8601>",
  "opened_by": "sfia-mcp | sfia-orchestrator-bridge",
  "resolution": null,
  "resolved_at": null,
  "resolved_by": null
}
```

| Répertoire | Contenu |
|------------|---------|
| `gates/pending/` | Gates OPEN — **bloquants** |
| `gates/resolved/` | Historique résolutions Morris |

---

## 3. Triggers obligatoires (ouverture gate)

| Code | Condition | Ouvert par |
|------|-----------|------------|
| `G4_protected_path_write` | Intent write sur chemin protégé | sfia-mcp |
| `push_merge_pr` | push / PR / merge / delete branch détecté | bridge, MCP, runner |
| `GATE_OPEN` | Gate déjà pending | bridge, runner, MCP L3 |
| `doctrine_change` | Modification doctrine / canonical | ChatGPT → Morris |
| `l3_without_go` | L3 hors `.sfia/mcp/` sans GO | MCP |
| `BRIDGE_TEST_GATE` | Test expérimental | bridge (test only) |

---

## 4. Gates et composants

| Composant | Peut ouvrir gate | Peut résoudre | Bloqué si gate OPEN |
|-----------|-----------------|---------------|---------------------|
| ChatGPT | Via `POST /gates/open` (bridge) | **Non** | N/A |
| Bridge | `POST /gates/open` | **Non** | `POST /tasks` refusé |
| Runner | **Non** | **Non** | Task → BLOCKED_MORRIS_DECISION |
| sfia-mcp L3 | `sfia_check_protected_paths` | **Non** | write tools refusés |
| Morris | Manuel (move pending→resolved) | **Oui** | — |

---

## 5. Conditions d'arrêt — matrice

| # | Condition | Statut task | Statut report | Action suivante |
|---|-----------|-------------|---------------|-----------------|
| S1 | Gate OPEN | `BLOCKED_MORRIS_DECISION` | `BLOCKED` | Morris résout |
| S2 | cycle_type inconnu | `BLOCKED_UNKNOWN_CYCLE` | `BLOCKED` | ChatGPT corrige task |
| S3 | Secret dans payload | Refus bridge/runner | — | ChatGPT corrige |
| S4 | push/PR/merge dans texte | Refus bridge | — | Morris L0 si réel |
| S5 | `validation_result: FAIL` | `FAILED` ou DONE+FAIL | `FAIL` | Analyse + retry |
| S6 | `decision_needed_from_morris: true` | Peut être DONE | COMPLETED | Morris GO avant suite |
| S7 | Runner non lancé | `PENDING_CURSOR` | — | Lancer runner |
| S8 | Token bridge invalide | — | — | Config Morris |
| S9 | Écriture hors `.sfia/mcp/` | — | — | Stop immédiat |
| S10 | Échec technique | `FAILED` | `FAILED` | Debug |

---

## 6. Stop conditions (catalogue)

Aligné sur handoffs MCP L2 :

| Stop condition | Détection |
|----------------|-----------|
| `unexpected_files_modified` | Diff hors périmètre |
| `protected_path_touched` | classifyRead / isProtected |
| `gate_morris_open_unresolved` | pending_count > 0 |
| `push_pr_merge_requested_without_morris` | detectMorrisActions |
| `scope_change_mid_cycle` | Écart allowed_paths |
| `secret_in_payload` | detectSecrets |
| `runner_not_started` | Task PENDING > seuil temps (manuel) |

---

## 7. Résolution Morris (procédure manuelle)

**Autorisé :**

1. Lire gate dans `gates/pending/<gate_id>.json`
2. Trancher GO ou NO-GO
3. Mettre `status: RESOLVED_GO | RESOLVED_NO_GO`
4. Renseigner `resolution`, `resolved_at`, `resolved_by: Morris`
5. Déplacer vers `gates/resolved/`

**Interdit :**

- Résolution automatique par runner, bridge ou MCP
- Résolution via API (bridge n'expose pas `POST /gates/resolve`)
- Suppression du gate sans trace dans `resolved/`

Prompt de référence : `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md`

---

## 8. Interaction L3 / gates

| État gates | Bridge POST /tasks | Runner consume | MCP L3 write |
|------------|-------------------|----------------|--------------|
| 0 OPEN | ✅ | ✅ | ✅ (périmètre) |
| ≥1 OPEN | ❌ BLOCKED | ❌ BLOCKED | ❌ BLOCKED |

---

## 9. Escalade ChatGPT → Morris

ChatGPT **doit** escalader (suggérer gate ou `decision_needed_from_morris: true`) si :

- Rapport indique chemins protégés touchés
- Demande utilisateur implique push/PR/merge
- Écart doctrine ou périmètre architecture
- `validation_result` FAIL non résolu en 1 cycle
- Réserve critique dans `reserves[]`

ChatGPT **ne doit pas** simuler une résolution Morris.

---

## 10. Audit et traçabilité

| Fichier | Contenu |
|---------|---------|
| `logs/audit-*.log` | MCP tools |
| `logs/bridge-audit.jsonl` | HTTP bridge |
| `logs/runner-audit.jsonl` | Runner events |
| `gates/resolved/*.json` | Historique Morris |

---

## 11. Références

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.3
- `docs/tooling/mcp/sfia-mcp-v2-architecture.md` §5
- `sfia-3-orchestration-doctrine.md`
- `sfia-3-cycle-engine.md`
