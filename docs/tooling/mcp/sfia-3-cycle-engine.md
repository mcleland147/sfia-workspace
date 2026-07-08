# SFIA 3.0 — Cycle Engine (moteur de cycle orchestré)

**Type :** Architecture cycle
**Version :** 3.0 (opening)
**Statut :** Doctrine opérationnelle — alignée sur preuve technique 2026-07-07

---

## 1. Purpose

Définir le **moteur de cycle SFIA 3.0** : les états, transitions, artefacts et critères qui rendent un cycle **validable** et un rapport **consommable**.

---

## 2. Vue d'ensemble

```text
┌─────────────┐     POST /tasks      ┌──────────────┐
│  ChatGPT    │ ───────────────────► │    Bridge    │
│ (intent)    │                      │   (HTTP)     │
└─────────────┘                      └──────┬───────┘
       ▲                                    │
       │                          .sfia/mcp/tasks/
       │                          status: PENDING_CURSOR
       │                                    │
       │                                    ▼
       │                          ┌──────────────┐
       │                          │    Runner    │  npm run once|watch
       │                          │  (manuel)    │
       │                          └──────┬───────┘
       │                                    │
       │              ┌─────────────────────┼─────────────────────┐
       │              ▼                     ▼                     ▼
       │         gate OPEN?           RUNNING              cycle_type
       │              │                     │                 invalide
       │              ▼                     ▼                     ▼
       │    BLOCKED_MORRIS_DECISION    L1 controls          BLOCKED_UNKNOWN_CYCLE
       │              │                     │
       │              └──────────┬──────────┘
       │                         ▼
       │                 .sfia/mcp/reports/
       │                         │
       │    GET /reports/latest  │
       └─────────────────────────┘
              ChatGPT (analyze)
```

**Parallèle Cursor :** pour cycles L3 enrichis, Cursor + `sfia-mcp` stdio peut remplacer ou compléter le runner sur le même bus.

---

## 3. États du cycle (task)

| État | Signification | Acteur suivant |
|------|---------------|----------------|
| `PENDING_CURSOR` | Task déposée, en attente | Runner / Cursor |
| `RUNNING` | Traitement en cours | Runner / Cursor |
| `DONE` | Rapport produit, `report_id` lié | ChatGPT |
| `REPORT_READY` | Alias sémantique DONE (legacy) | ChatGPT |
| `BLOCKED_MORRIS_DECISION` | Gate OPEN ou décision requise | Morris |
| `BLOCKED_UNKNOWN_CYCLE` | cycle_type non supporté | ChatGPT (corriger) |
| `FAILED` | Erreur technique | ChatGPT / Morris |

### Transitions autorisées

```text
PENDING_CURSOR → RUNNING → DONE
PENDING_CURSOR → BLOCKED_MORRIS_DECISION
PENDING_CURSOR → BLOCKED_UNKNOWN_CYCLE
RUNNING → FAILED
```

**Interdit :** transition automatique `BLOCKED_*` → `DONE` sans Morris.

---

## 4. États du rapport

| Champ `status` | Signification |
|----------------|---------------|
| `COMPLETED` | Cycle exécuté dans le périmètre |
| `BLOCKED` | Arrêt sur gate ou refus |
| `FAILED` | Erreur technique |

| Champ `validation_result` | Signification |
|---------------------------|---------------|
| `OK` | Contrôles passés |
| `WARN` | Anomalies non bloquantes |
| `FAIL` | Échec validation |
| `BLOCKED` | Gate ou refus explicite |

---

## 5. Définition d'un cycle validable

Un cycle SFIA 3.0 est **validable** si et seulement si :

| # | Critère |
|---|---------|
| C1 | `task_id` unique, format `task-<uuid>` |
| C2 | `source` = `chatgpt` (via bridge) |
| C3 | `cycle_type` reconnu (ex. `DOC/MCP`) |
| C4 | `objective` non vide, sans action Morris interdite |
| C5 | `payload` objet JSON, sans secret |
| C6 | Aucun gate OPEN au moment du consume |
| C7 | Écriture limitée au périmètre autorisé |
| C8 | Rapport JSON produit avec `task_id` lié |
| C9 | `guardrails_check` explicite (PASS / FAIL) |
| C10 | `decision_needed_from_morris` booléen explicite |

---

## 6. Définition d'un rapport consommable

Un rapport est **consommable par ChatGPT** si :

| # | Champ requis | Usage ChatGPT |
|---|--------------|---------------|
| R1 | `report_id` | Identification |
| R2 | `task_id` | Lien cycle |
| R3 | `summary` | Synthèse humaine |
| R4 | `tools_used[]` | Traçabilité |
| R5 | `guardrails_check` | Conformité |
| R6 | `validation_result` | Verdict technique |
| R7 | `decision_needed_from_morris` | Escalade |
| R8 | `files_created[]` / `files_modified[]` | Impact |
| R9 | `reserves[]` | Points d'attention |
| R10 | `next_recommendation` | Suite proposée |

**Consommation :** `GET /reports/latest` (bridge) ou `sfia_read_file` (MCP).

Template (référence documentaire) : `docs/templates/sfia-3-report-template.json`

---

## 7. Types de cycle (phase opening)

| cycle_type | Label | Runner | Cursor L3 |
|------------|-------|--------|-----------|
| `DOC/MCP` | Expérimentation / doc MCP | ✅ | ✅ (confiné) |
| `DOC` | Documentation seule | ❌ (phase 3.0) | Sous GO |
| `MCP` | Alias DOC/MCP | ✅ | ✅ |

Extension future : sous GO Morris et mise à jour cycle-router.

---

## 8. Séquence type DOC/MCP

| Étape | Action | Artefact |
|-------|--------|----------|
| 1 | ChatGPT applique `prompts/tooling/mcp/sfia-3-cycle-router.md` | Choix DOC/MCP |
| 2 | ChatGPT applique `prompts/tooling/mcp/sfia-3-task-builder.md` | JSON task |
| 3 | Bridge `POST /tasks` | `tasks/<id>.json` |
| 4 | Morris lance `npm run once` ou `watch` | — |
| 5 | Runner consomme | `reports/<id>.json` |
| 6 | ChatGPT `GET /reports/latest` | Analyse |
| 7 | ChatGPT applique `prompts/tooling/mcp/sfia-3-report-analyzer.md` | Décision cycle |

---

## 9. Rôles dans le moteur

| Composant | Entrée | Sortie | Niveau |
|-----------|--------|--------|--------|
| Git Reader | Requête lecture GitHub | Contenu read-only | L1/L2 |
| ChatGPT | Contexte + rapport | Task / analyse | L2 |
| Bridge | HTTP + token | Fichiers bus | L4 boundary |
| Runner | tasks PENDING | reports + task DONE | L4 exp |
| sfia-mcp | Tools bornés | Handoffs / reports L3 | L1–L3 |
| Morris | Gate resolve | gates/resolved/ | L0 |

---

## 10. Conditions d'arrêt du moteur

Le cycle **s'arrête** (ne progresse pas) si :

1. Gate OPEN (`BLOCKED_MORRIS_DECISION`)
2. `decision_needed_from_morris: true` sans GO Morris
3. `validation_result: FAIL`
4. cycle_type non supporté
5. Secret ou action Morris dans payload
6. Écriture hors périmètre détectée
7. Runner non lancé (task reste `PENDING_CURSOR` — arrêt passif)

Voir `sfia-3-gates-and-stop-conditions.md` pour le détail.

---

## 11. Références

- `sfia-3-orchestration-doctrine.md`
- `prompts/tooling/mcp/sfia-3-cycle-router.md`
- `prompts/tooling/mcp/sfia-3-task-builder.md`
- `prompts/tooling/mcp/sfia-3-report-analyzer.md`
- `docs/templates/sfia-3-task-template.json` *(contrat JSON — référence documentaire)*
- `docs/templates/sfia-3-report-template.json` *(contrat JSON — référence documentaire)*
