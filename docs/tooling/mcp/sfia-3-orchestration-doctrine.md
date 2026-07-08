# SFIA 3.0 — Doctrine d'orchestration contrôlée

**Type :** Doctrine outillage
**Version :** 3.0 (opening)
**Statut :** Trajectoire ouverte — preuve technique validée, industrialisation reportée
**Repository :** `mcleland147/sfia-workspace`
**Décision Morris :** GO ouverture trajectoire documentaire SFIA 3.0 (2026-07-07)

---

## 1. Purpose

Ce document formalise la **rupture méthodologique SFIA 3.0** : le passage de l'automatisation progressive (v2.0) à l'**orchestration contrôlée de cycles projet** avec boucle fermée ChatGPT ↔ bus `.sfia/mcp/` ↔ exécution locale.

**Preuve technique validée (2026-07-07) :**

```text
ChatGPT Custom GPT
  → SFIA Orchestrator Bridge (HTTP)
  → .sfia/mcp/tasks/
  → SFIA Cursor Task Runner (manuel)
  → .sfia/mcp/reports/
  → Bridge
  → ChatGPT
```

**Doctrine centrale :**

> Orchestrer les cycles projet de façon traçable et bornée — jamais l'arbitrage structurant.

---

## 2. Pourquoi SFIA 3.0 est une rupture

| Avant (v1.1 / v2.0) | SFIA 3.0 |
|----------------------|----------|
| Assistance et prompts manuels | **Cycle orchestré** avec artefacts structurés |
| Automatisation progressive par niveau L | **Enchaînement contrôlé** task → exécution → report |
| ChatGPT lit Git à distance (Git Reader) | ChatGPT **dépose et relit** via bus MCP |
| Cursor invoqué par prompt humain | Runner **consomme** les tâches sans copier-coller |
| Rapport ad hoc dans le chat | Rapport **JSON consommable** par ChatGPT |
| Coordination implicite | **Contrat explicite** task / report / gate |

SFIA 3.0 ne remplace pas la méthode : elle **industrialise le flux opérationnel** entre acteurs déjà définis en v1.1, en s'appuyant sur les garde-fous v2.0.

---

## 3. Héritage SFIA v1.1 (inchangé)

| Élément v1.1 | Statut en 3.0 |
|--------------|---------------|
| Git = source de vérité | **Invariant** |
| Morris = autorité de décision structurante | **Invariant** |
| Chemins protégés (`method/.../core/`, `app/`, etc.) | **Invariant** |
| Cycle Routing Guide | **Référence** — routage des types de cycle |
| Validation checklist | **Référence** — critères de clôture |
| ChatGPT cadre, route, challenge | **Étendu** — dépose tâches, analyse rapports |
| Cursor exécuteur contrôlé | **Étendu** — consommable via runner / MCP |
| Pas de L5 global | **Invariant** |

---

## 4. Ce que SFIA v2.0 a permis

| Apport v2.0 | Rôle dans 3.0 |
|-------------|---------------|
| Niveaux L0–L5 | Grille de lecture des capacités orchestrées |
| Architecture MCP v2.0 | Fondation tools bornés (`sfia-mcp` v0.4.0) |
| Gates Morris | Blocage explicite et traçable |
| Git Reader API (L1/L2) | Lecture distante méthode / docs pour ChatGPT |
| Catalogue tools `sfia_*` | Contrôles L1/L3 dans runner et Cursor |
| Deny by default | Appliqué au bridge et au runner |

SFIA v2.0 a **préparé les garde-fous**. SFIA 3.0 **ferme la boucle opérationnelle**.

---

## 5. Ce que SFIA 3.0 ajoute

### 5.1 Bus orchestrateur `.sfia/mcp/` (runtime uniquement)

> **Règle :** `.sfia/mcp/` est le **runtime bus** — tasks JSON, reports JSON, gates, logs, code (bridge, server, runner). Les livrables documentaires durables (prompts Markdown, doctrine, rapports de capitalisation) ne sont **pas** stockés sous ce préfixe.

| Répertoire | Rôle |
|------------|------|
| `tasks/` | Intentions ChatGPT structurées (entrée cycle) — artefacts JSON |
| `reports/` | Résultats consommables (sortie cycle) — **fichiers `report-*.json` uniquement** |
| `gates/pending/` | Blocages Morris actifs |
| `gates/resolved/` | Historique résolutions Morris |
| `logs/` | Audit JSONL (bridge, runner, MCP) |
| `bridge/`, `server/`, `runner/` | Code outillage expérimental |

### 5.2 Composants et assets durables (hors bus)

| Composant / asset | Emplacement canonique | Niveau typique |
|-------------------|----------------------|----------------|
| **SFIA Orchestrator Bridge** | `.sfia/mcp/bridge/` (code) + `docs/tooling/mcp/` (doctrine) | L2/L4 boundary |
| **SFIA Cursor Task Runner** | `.sfia/mcp/runner/` (code) | L4 expérimental |
| **Prompts cycle** | `prompts/tooling/mcp/`, `prompts/governance/sfia-3-morris-gate.md` | L2 |
| **Templates (contrats JSON)** | `docs/templates/sfia-3-task-template.json`, `docs/templates/sfia-3-report-template.json` | L2 |

### 5.3 Cycle projet orchestré

Un **cycle SFIA 3.0 validable** est une unité fermée :

1. **Intent** — ChatGPT produit une task conforme au template.
2. **Deposit** — Bridge écrit `tasks/<task_id>.json`.
3. **Consume** — Runner (ou Cursor manuel) traite sous garde-fous.
4. **Report** — `reports/<report_id>.json` produit.
5. **Analyze** — ChatGPT relit et conclut (GO / NO-GO / gate).

---

## 6. Rôles des acteurs

| Acteur | Rôle SFIA 3.0 | Interdit |
|--------|---------------|----------|
| **Git Reader API** | Lecture distante read-only GitHub pour ChatGPT | Écriture, orchestration |
| **ChatGPT** | Route, dépose task, analyse report, challenge | Push, merge, PR, résolution gate |
| **Bridge** | Transport HTTP borné tasks/gates/reports | Écriture hors bus, résolution gate |
| **Runner** | Consomme tasks PENDING, produit reports (L1) | Lancer Cursor, daemon permanent, push |
| **Cursor + sfia-mcp** | Exécution L3 confinée, rapports enrichis | Arbitrage, auto-resolve gate |
| **Morris** | GO/NO-GO, résolution gates, périmètre | Délégation L5 global |
| **Git** | Source de vérité, traçabilité | — |

---

## 7. Niveaux d'automatisation en contexte 3.0

| Niveau | SFIA 3.0 — application |
|--------|------------------------|
| **L0** | Morris pilote tout manuellement (fallback) |
| **L1** | Runner / MCP : repo status, gates, lecture |
| **L2** | ChatGPT : task-builder, report-analyzer, cycle-router |
| **L3** | Cursor MCP : écriture confinée `.sfia/mcp/` ou docs autorisées |
| **L4** | **Cœur 3.0** — Bridge + Runner + boucle task/report |
| **L5 ciblé** | Expérimental localisé (hors périmètre actuel) |
| **L5 global** | **Interdit** |

Le flux validé opère principalement en **L4 expérimental local** : orchestration avec points d'arrêt Morris (gates).

---

## 8. Limites à ne pas franchir

| # | Limite |
|---|--------|
| L1 | Pas de daemon runner permanent sans GO Morris |
| L2 | Pas de push / PR / merge / suppression automatisés |
| L3 | Pas d'écriture hors périmètre autorisé |
| L4 | Pas de résolution gate par machine |
| L5 | Pas de secrets dans repo ou prompts versionnés |
| L6 | Pas de modification `method/sfia-fast-track/core/` sans Morris L0 |
| L7 | Pas de PR 3.0 tant que trajectoire en expérimentation |

---

## 9. Gates Morris obligatoires

Tout événement suivant **ouvre ou maintient** un gate — voir `sfia-3-gates-and-stop-conditions.md` :

- Intent write sur chemin protégé
- Push, PR, merge, delete branch demandés
- Gate déjà OPEN
- Scope ambigu ou cycle_type inconnu
- Secret détecté dans payload
- Écart méthode structurante (doctrine, canonical v1.1)

---

## 10. Références

- `docs/tooling/mcp/sfia-mcp-v2-architecture.md`
- `docs/tooling/mcp/sfia-3-cycle-engine.md`
- `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`
- `docs/tooling/mcp/sfia-mcp-v2-architecture.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md`
- `prompts/tooling/mcp/sfia-3-cycle-router.md`
- `prompts/tooling/mcp/sfia-3-task-builder.md`
- `prompts/tooling/mcp/sfia-3-report-analyzer.md`
- `docs/templates/sfia-3-task-template.json` *(contrat JSON — référence documentaire)*
- `docs/templates/sfia-3-report-template.json` *(contrat JSON — référence documentaire)*

---

## 11. Statut

```text
Decision: SFIA 3.0 trajectory opened (documentation).
Proof: ChatGPT ↔ Bridge ↔ Runner ↔ Reports ↔ ChatGPT validated.
Automation level: L4 experimental local.
Morris authority: unchanged.
PR: deferred.
```
