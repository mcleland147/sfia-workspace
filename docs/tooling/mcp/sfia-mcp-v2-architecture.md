# SFIA MCP v2.0 — Architecture des échanges ChatGPT ↔ Cursor

**Type :** Architecture outillage
**Version :** v2.0 (draft)
**Statut :** Documentation — **aucune implémentation serveur dans ce cycle**
**Scope :** Échanges automatisés contrôlés entre ChatGPT et Cursor via MCP
**Repository :** `mcleland147/sfia-workspace` (Git = source de vérité opérationnelle)

---

## 1. Purpose

Ce document décrit la **première architecture MCP SFIA v2.0** permettant des échanges automatisés **contrôlés** entre ChatGPT et Cursor, sans retirer Morris des arbitrages structurants.

**Objectifs :**

- formaliser le modèle MCP SFIA (rôles, flux, invariants) ;
- définir un **catalogue initial** de tools MCP autorisés ;
- fixer les **politiques de permissions** et de **gates Morris** ;
- documenter le **cycle de vie** d'une tâche ChatGPT → Cursor → rapport → ChatGPT ;
- associer chaque capacité aux **niveaux d'automatisation** L0–L5 ;
- expliciter le **hors périmètre MVP**.

**Doctrine :**

> Automatiser l'exécution répétable, jamais l'arbitrage structurant.

**Hors scope de ce document :** implémentation du serveur MCP, modification de code applicatif, runner automatique, secrets, tokens.

**Références alignées :**

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` — §4.3.3 gates Morris
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`
- `docs/tooling/penpot/penpot-design-agent-architecture.md` — précédent pont MCP outillage
- Git Reader API — pont read-only ChatGPT → GitHub (L1/L2 industrialisé, repo séparé)

---

## 2. Modèle MCP SFIA

### 2.1 Positionnement

Le **SFIA MCP Server** est un serveur MCP **borné** qui expose uniquement des tools explicitement catalogués. Il ne remplace ni ChatGPT, ni Cursor, ni Git, ni Morris.

Il sert de **couche d'intégration contrôlée** entre :

| Acteur | Rôle dans le modèle MCP |
|--------|-------------------------|
| **ChatGPT** | Cadre, route, challenge, analyse — consomme des tools **L1/L2** ; ne déclenche pas d'écriture repo |
| **Cursor** | Exécuteur contrôlé — consomme des tools **L1/L2/L3** dans un périmètre explicite |
| **Morris** | Autorité de décision — résout les gates ; seul acteur habilité à lever un blocage structurant |
| **Git (`sfia-workspace`)** | Source de vérité opérationnelle — état, handoffs, rapports, traçabilité |
| **SFIA MCP Server** | Proxy borné — valide permissions, chemins, niveau L, état des gates avant toute action |

### 2.2 Architecture logique

```text
Morris (décision structurante)
    ↑ gate resolve / GO-NO-GO
    │
ChatGPT (cadrage, routing, challenge, analyse)
    │  tools L1 / L2
    ↓
SFIA MCP Server (tools bornés, permissions, gates)
    │  handoff structuré + garde-fous
    ↓
Cursor (exécution repo contrôlée)
    │  tools L1 / L2 / L3
    ↓
Git — mcleland147/sfia-workspace (source de vérité)
```

**Complément read-only existant (hors MCP) :**

```text
ChatGPT Custom GPT `SFIA Git Reader`
→ Render — sfia-git-reader-api
→ GitHub REST API (read-only)
→ sfia-workspace
```

Le Git Reader couvre la **lecture distante** pour ChatGPT. Le MCP SFIA v2.0 couvre la **coordination opérationnelle** avec Cursor sur le workspace local ou cible, sous garde-fous plus fins que l'API Git Reader.

### 2.3 Invariants non négociables

| # | Invariant |
|---|-----------|
| I1 | **Git reste source de vérité** — aucun état critique hors repo |
| I2 | **Morris reste autorité de décision** pour tout arbitrage structurant |
| I3 | **Cursor agit comme exécuteur contrôlé** — jamais décideur |
| I4 | **ChatGPT cadre, route, challenge et analyse** — jamais push/merge/suppression |
| I5 | **Le MCP Server expose uniquement des tools bornés** — pas d'API générique Git |
| I6 | **Toute décision humaine requise crée un gate Morris** et **bloque** le cycle |
| I7 | **Aucun secret** dans prompts versionnés, schémas MCP publics ou documentation |
| I8 | **L5 global interdit** — voir `../../../method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` |

### 2.4 Principes de conception MCP

| Principe | Application |
|----------|-------------|
| **Tool = contrat** | Chaque tool a un niveau L, un client autorisé, des entrées/sorties et des stop conditions |
| **Deny by default** | Tout ce qui n'est pas dans le catalogue est interdit |
| **Read before write** | Les tools L3 exigent un contrôle L1 préalable sur le même périmètre |
| **Gate before risk** | Push, merge, PR, chemins protégés, architecture → gate Morris obligatoire |
| **Report mandatory** | Toute exécution L3 produit un rapport structuré consommable par ChatGPT |
| **No runner implicite** | Le MCP ne lance pas Cursor ; il prépare, valide et enregistre — l'exécution reste explicite |

---

## 3. Catalogue initial des tools MCP autorisés

**Convention de nommage :** `sfia_<domaine>_<action>`

**Légende :** ✅ MVP catalogue | 🔒 Gate requis avant exécution | 🚫 Interdit — hors catalogue

### 3.1 Tools L1 — Contrôle automatisé (read-only)

| Tool | Client | Description | MVP |
|------|--------|-------------|-----|
| `sfia_health` | ChatGPT, Cursor | Disponibilité serveur MCP, version schéma, mode read-only/write-borné | ✅ |
| `sfia_repo_status` | ChatGPT, Cursor | Résumé `git status` — branche, fichiers modifiés, untracked | ✅ |
| `sfia_repo_branch_info` | ChatGPT, Cursor | Branche courante, ahead/behind, tracking remote | ✅ |
| `sfia_repo_diff_stat` | ChatGPT, Cursor | `git diff --stat` sur périmètre autorisé | ✅ |
| `sfia_read_file` | ChatGPT, Cursor | Lecture fichier — chemins autorisés uniquement | ✅ |
| `sfia_list_directory` | ChatGPT, Cursor | Liste répertoire — profondeur et préfixes bornés | ✅ |
| `sfia_check_protected_paths` | ChatGPT, Cursor | Vérifie si chemins touchent zones protégées | ✅ |
| `sfia_routing_lookup` | ChatGPT, Cursor | Retourne références, template et validation pour un type de cycle | ✅ |
| `sfia_get_main_head` | ChatGPT, Cursor | SHA, message et métadonnées commit `main` | ✅ |
| `sfia_detect_anomalies` | ChatGPT, Cursor | Terme SFA erroné, fichiers interdits dans diff, scope flou | ✅ |

### 3.2 Tools L2 — Génération guidée (sans écriture repo)

| Tool | Client | Description | MVP |
|------|--------|-------------|-----|
| `sfia_prepare_cursor_prompt` | ChatGPT | Génère un prompt Cursor depuis template 01–10 + contexte | ✅ |
| `sfia_prepare_task_handoff` | ChatGPT | Produit un handoff structuré (JSON/Markdown) pour Cursor | ✅ |
| `sfia_validate_prompt_scope` | ChatGPT, Cursor | Valide périmètre, chemins protégés, type de cycle | ✅ |
| `sfia_generate_validation_report` | ChatGPT | Synthèse L1 — OK/WARN/FAIL par contrôle | ✅ |
| `sfia_summarize_cursor_report` | ChatGPT | Analyse structurée d'un rapport Cursor existant | ✅ |
| `sfia_pr_readiness_draft` | ChatGPT | Brouillon PR readiness — **sans création PR** | ✅ |

### 3.3 Tools L3 — Exécution bornée (Cursor uniquement)

| Tool | Client | Description | MVP |
|------|--------|-------------|-----|
| `sfia_write_handoff_artifact` | Cursor | Écrit handoff dans `docs/tooling/mcp/handoffs/` — fichier unique | ✅ |
| `sfia_write_cycle_report` | Cursor | Écrit rapport dans `docs/tooling/mcp/reports/` — fichier unique | ✅ |
| `sfia_apply_documentation_patch` | Cursor | Modifie **un** fichier documentation hors chemins protégés | ✅ |
| `sfia_create_documentation_file` | Cursor | Crée **un** fichier documentation hors chemins protégés | ✅ |
| `sfia_local_commit_draft` | Cursor | Commit local **uniquement** si handoff l'autorise explicitement | 🔒 |

> **Note MVP :** `sfia_local_commit_draft` est catalogué mais **désactivé par défaut** dans le MVP — documentation et rapport uniquement jusqu'à validation Morris.

### 3.4 Tools gate Morris

| Tool | Client | Description | MVP |
|------|--------|-------------|-----|
| `sfia_gate_morris_open` | ChatGPT, Cursor | Ouvre un gate — **bloque** tous les tools L3 et toute progression de cycle | ✅ |
| `sfia_gate_morris_status` | ChatGPT, Cursor | Lit l'état des gates ouverts pour une tâche / cycle | ✅ |
| `sfia_gate_morris_resolve` | Morris (manuel) | Résout un gate — GO / NO-GO / DEFER — débloque si GO | ✅ |

### 3.5 Tools explicitement interdits (hors catalogue)

Ces capacités **ne doivent jamais** apparaître comme tools MCP SFIA :

| Capacité interdite | Raison |
|--------------------|--------|
| `sfia_git_push` | L0 — Morris uniquement, demande explicite |
| `sfia_git_merge` | L0 — Morris uniquement |
| `sfia_create_pull_request` | L0 — Morris uniquement |
| `sfia_delete_branch` | L0 — Morris uniquement |
| `sfia_write_protected_path` | L0 — Morris toujours |
| `sfia_architecture_decide` | Arbitrage structurant — humain uniquement |
| `sfia_change_guardrails` | Évolution de périmètre — gate Morris |
| `sfia_notion_apply` | Trajectoire dormante — cycle dédié |
| `sfia_cmp_execute` | Hors scope v2.0 default |
| `sfia_run_cursor_agent` | Runner automatique — hors périmètre |
| `sfia_auto_orchestrate` | L4+ — hors MVP |

---

## 4. Politique de permissions

### 4.1 Matrice client × niveau

| Niveau | ChatGPT | Cursor | Morris (manuel) |
|--------|---------|--------|-----------------|
| **L1** read-only | ✅ Autorisé | ✅ Autorisé | ✅ (lecture gates) |
| **L2** génération | ✅ Autorisé | ✅ Autorisé (validation) | — |
| **L3** écriture bornée | 🚫 Interdit | ✅ Autorisé si gate OK | — |
| **L4** orchestration | 🚫 Interdit | 🚫 Interdit (MVP) | — |
| **Gate open** | ✅ | ✅ | — |
| **Gate resolve** | 🚫 | 🚫 | ✅ Seul acteur |

### 4.2 Chemins autorisés (MVP)

**Lecture (L1) — préfixes autorisés :**

- `method/sfia-fast-track/`
- `docs/`
- `prompts/`
- `projects/` — sous-arbres explicitement déclarés dans le handoff
- `README.md`, `../../roadmaps/cmp-technical-roadmap.md`, `CHANGELOG.md`

**Écriture (L3) — périmètre MVP restreint :**

- `docs/tooling/mcp/handoffs/`
- `docs/tooling/mcp/reports/`
- `docs/` — fichiers `.md` uniquement, hors sous-dossiers protégés
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/` — candidats v2.x uniquement, **pas** canonique v1.1

### 4.3 Chemins protégés (écriture toujours interdite via MCP)

Aligné sur `../../../method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` et le Cycle Routing Guide :

| Zone protégée | Exemples | Niveau max |
|---------------|----------|------------|
| Code applicatif | `app/`, `backend/`, `src/` (hors doc) | L0 — Morris |
| CI / workflows | `.github/workflows/` | L0 — Morris |
| Outillage transverse | `cmp-001/`, runners, scripts destructifs | L0 — Morris |
| Secrets | `.env`, `.secret`, credentials | 🚫 Lecture MCP interdite |
| Canonique v1.1 | `method/sfia-fast-track/core/` sans GO | L0 — Morris |
| Lockfiles / deps | `package-lock.json`, `node_modules/` | 🚫 |
| Configuration MCP locale | `.cursor/mcp.json` (secrets) | 🚫 Lecture secrets |

### 4.4 Règles d'autorisation par requête

Chaque appel tool MCP doit passer **toutes** les vérifications suivantes :

1. **Client autorisé** pour ce tool (ChatGPT vs Cursor).
2. **Niveau L** du tool ≤ niveau max du client.
3. **Aucun gate Morris ouvert** sur le `task_id` / `cycle_id` (sauf tools gate eux-mêmes).
4. **Chemins** dans périmètre autorisé et hors liste protégée.
5. **Handoff valide** présent pour tout tool L3 (référence `handoff_id`, scope explicite).
6. **Type de cycle** identifié via `sfia_routing_lookup` pour L2/L3.
7. **Stop conditions** (`../../../method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` §9) — arrêt immédiat si déclenchées.

**En cas d'échec :** réponse structurée `permission_denied` ou `gate_blocked` — **pas** de retry automatique.

### 4.5 Authentification (cible — hors implémentation MVP)

| Élément | Règle |
|---------|-------|
| Secrets | Stockés hors repo — KeePass (Morris) ; jamais dans schéma MCP versionné |
| ChatGPT → MCP | Clé dédiée read/L2 — distincte de Git Reader API |
| Cursor → MCP | Configuration locale `.cursor/mcp.json` — gitignored |
| Rotation | KeePass → config locale → invalidation ancienne clé |

---

## 5. Politique de gates Morris

### 5.1 Définition

Un **gate Morris** est un point d'arrêt formel qui **bloque** la progression du cycle jusqu'à résolution humaine explicite. Il matérialise l'invariant : *toute décision humaine requise crée un gate et bloque le cycle*.

**État d'un gate :** `OPEN` | `RESOLVED_GO` | `RESOLVED_NO_GO` | `DEFERRED`

### 5.2 Déclencheurs obligatoires (gate OPEN automatique)

| # | Déclencheur | Tool déclencheur | Effet |
|---|-------------|------------------|-------|
| G1 | Changement de doctrine ou méthode structurante | `sfia_gate_morris_open` | Bloque L3 |
| G2 | Arbitrage structurant (scope, profil Critical, v2.5+, v3.0) | auto ou `sfia_gate_morris_open` | Bloque L3 |
| G3 | Décision d'architecture | auto sur détection | Bloque L3 |
| G4 | Modification chemin protégé demandée | `sfia_check_protected_paths` → FAIL | Bloque L3 |
| G5 | Demande push / PR / merge / suppression branche | toute détection | Bloque tout write |
| G6 | Évolution garde-fou ou périmètre MCP | `sfia_gate_morris_open` | Bloque L2/L3 |
| G7 | Anomalie L1 non résolue | `sfia_detect_anomalies` → FAIL | Bloque L3 |
| G8 | Routing ambigu — type de cycle inconnu | `sfia_routing_lookup` → FAIL | Bloque L2/L3 |
| G9 | Clôture structurante ou merge | handoff PR readiness | Bloque jusqu'à GO Morris |
| G10 | Promotion vers document canonique v1.1 | détection chemin core/ | Bloque L3 |

### 5.3 Sans gate Morris dédié

Conforme à `../../../method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.3 :

- vérifications read-only L1 ;
- PR readiness technique sans arbitrage ;
- post-merge check documentaire ;
- génération prompt L2 avant envoi à Cursor — **validation Morris avant exécution L3**, pas gate formel pour L1 seul.

### 5.4 Résolution

| Résolution | Acteur | Effet |
|------------|--------|-------|
| `RESOLVED_GO` | Morris | Débloque le cycle — outil L3 autorisé dans le scope validé |
| `RESOLVED_NO_GO` | Morris | Clôture le cycle — rapport d'arrêt obligatoire |
| `DEFERRED` | Morris | Cycle en pause — aucun tool L3 |

**Règle :** `sfia_gate_morris_resolve` n'est **pas** un tool MCP automatisé — résolution manuelle par Morris, enregistrée dans le rapport de cycle (artifact Git).

### 5.5 Artefact gate (structure cible)

```json
{
  "gate_id": "<uuid>",
  "task_id": "<task-id>",
  "trigger": "G3_architecture_decision",
  "status": "OPEN",
  "opened_at": "<iso8601>",
  "opened_by": "sfia_check_protected_paths",
  "reason": "Protected path app/ referenced in handoff scope",
  "required_decision": "Morris — scope reduction or explicit GO",
  "blocked_tools": ["sfia_apply_documentation_patch", "sfia_local_commit_draft"]
}
```

---

## 6. Cycle de vie d'une tâche

### 6.1 Vue d'ensemble

```text
[1] Intention
      ↓ ChatGPT
[2] Qualification cycle (INC/EVOL/RUN/CAPA/DOC)
      ↓ sfia_routing_lookup (L1)
[3] Contrôles repo (L1)
      ↓ sfia_repo_status, sfia_check_protected_paths
[4] Gate ? ──oui──→ [4b] Gate Morris OPEN → STOP → Morris resolve
      ↓ non
[5] Préparation handoff + prompt (L2)
      ↓ sfia_prepare_task_handoff, sfia_prepare_cursor_prompt
[6] Validation scope (L2)
      ↓ sfia_validate_prompt_scope
[7] Morris GO exécution ? ──non──→ STOP (rapport attente)
      ↓ oui
[8] Cursor exécution bornée (L3)
      ↓ sfia_write_cycle_report, sfia_apply_documentation_patch (scope)
[9] Rapport structuré → Git
      ↓ sfia_write_cycle_report
[10] ChatGPT analyse (L2)
      ↓ sfia_summarize_cursor_report
[11] Décision Morris si structurant (push/PR/merge/clôture)
      ↓ manuel L0
[12] Fin de cycle ou gate suivant
```

### 6.2 Étapes détaillées

| Étape | Acteur | Tools / actions | Niveau | Gate |
|-------|--------|-----------------|--------|------|
| **1. Intention** | Morris / ChatGPT | Expression besoin, contexte | L0 | Si structurant |
| **2. Routing** | ChatGPT | `sfia_routing_lookup` | L1 | G8 si ambigu |
| **3. Repo check** | ChatGPT | `sfia_repo_status`, `sfia_repo_diff_stat`, `sfia_detect_anomalies` | L1 | G7 si FAIL |
| **4. Gate check** | MCP | Évaluation déclencheurs G1–G10 | — | OPEN si oui |
| **5. Handoff** | ChatGPT | `sfia_prepare_task_handoff`, `sfia_prepare_cursor_prompt` | L2 | — |
| **6. Validation** | ChatGPT | `sfia_validate_prompt_scope` | L2 | G4/G8 si FAIL |
| **7. GO exécution** | Morris | Validation explicite hors MCP | L0 | Obligatoire |
| **8. Exécution** | Cursor | Tools L3 dans scope handoff | L3 | Bloqué si gate OPEN |
| **9. Rapport** | Cursor | `sfia_write_cycle_report` | L3 | — |
| **10. Analyse** | ChatGPT | `sfia_summarize_cursor_report`, challenge | L2 | — |
| **11. Suite** | Morris | Push/PR/merge manuels si applicable | L0 | G5/G9 |
| **12. Clôture** | ChatGPT + Morris | Rapport final, capitalisation si requis | L2/L0 | G9 si structurant |

### 6.3 Format minimal du rapport Cursor (L3)

Conforme à `../../../method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` §10 :

```text
Branch status
→ Files changed
→ Guardrails check
→ Validation result
→ Decision needed from Morris
→ Reserves (if any)
```

### 6.4 Identifiants de traçabilité

| ID | Usage |
|----|-------|
| `cycle_id` | Type de cycle SFIA (ex. `DOC-capitalization-2026-07`) |
| `task_id` | Unité de travail ChatGPT → Cursor |
| `handoff_id` | Artefact handoff dans Git |
| `report_id` | Rapport Cursor dans Git |
| `gate_id` | Gate Morris si ouvert |

Tous les IDs sont référencés dans les artifacts Git — **pas** d'état critique uniquement en mémoire MCP.

---

## 7. Niveaux d'automatisation associés

### 7.1 Cartographie MCP × niveaux L

| Composant | Niveau MVP | Niveau cible v2.0 | Notes |
|-----------|------------|-------------------|-------|
| SFIA MCP Server (read) | **L1** | L1 / L5 ciblé | Contrôles industrialisables |
| ChatGPT via MCP (génération) | **L2** | L2 | Prompts, handoffs, synthèses |
| Cursor via MCP (écriture doc) | **L3** | L3 | Scope strict, rapport obligatoire |
| Séquence complète ChatGPT→Cursor→rapport | **L3** | **L4** | L4 = orchestration avec gates — hors MVP |
| Push / merge / PR | **L0** | **L0** | Morris — jamais MCP |
| Autonomie globale | **Interdit** | **Interdit** | L5 global — hors cible |

### 7.2 Matrice action × niveau max MCP

| Action | Niveau max | Gate Morris | Client |
|--------|------------|-------------|--------|
| Audit repo read-only | L1 / L5 ciblé | Si anomalie | ChatGPT, Cursor |
| Lecture fichier / répertoire | L1 | Non | ChatGPT, Cursor |
| Génération prompt / handoff | L2 | Avant L3 | ChatGPT |
| Validation scope | L2 | Si FAIL | ChatGPT, Cursor |
| Écriture doc bornée | L3 | Avant + après si structurant | Cursor |
| Rapport de cycle | L3 | Non | Cursor |
| Commit local | L3 (désactivé MVP) | **Oui — toujours** | Cursor |
| Push / PR / merge | L0 | **Oui — toujours** | Morris manuel |
| Décision architecture | L0–L2 assistance | **Oui — toujours** | Morris |

### 7.3 Promotion future (hors MVP)

| Transition | Condition |
|------------|-----------|
| MVP → L4 orchestration | ≥3 cycles L3 réussis ; gates testés ; stop conditions validées |
| L3 → commit auto | Désactivé MVP ; promotion cycle Morris dédié |
| L5 ciblé read tools | Possible pour inventaire documentaire — Morris valide généralisation |

---

## 8. Hors périmètre explicite du MVP

### 8.1 Non livré dans ce cycle

| Élément | Statut |
|---------|--------|
| Implémentation serveur MCP | **Non** — documentation seule |
| Runner automatique Cursor | **Non** |
| Orchestration L4 enchaînée | **Non** — cycles manuels entre étapes |
| `sfia_local_commit_draft` actif | **Non** — catalogué, désactivé |
| Push / PR / merge via MCP | **Non** — interdit permanent |
| Connexion Notion / CMP | **Non** — trajectoire dormante |
| Tools design Penpot / Figma | **Non** — architecture séparée (`docs/tooling/penpot/`) |
| Remplacement Git Reader API | **Non** — complémentaire |
| Multi-repo | **Non** — `sfia-workspace` uniquement |
| Authentification industrialisée | **Non** — spec §4.5 seulement |

### 8.2 Comportements explicitement interdits

- Automatiser un **push**, **merge** ou **suppression de branche**
- Modifier un **chemin protégé** via MCP
- Prendre une **décision d'architecture** sans Morris
- **Contourner** un gate OPEN
- **Lancer** Cursor ou un agent sans action humaine explicite
- Stocker des **secrets** dans le schéma MCP ou les handoffs versionnés
- **Élever** implicitement le niveau L d'un tool
- **L5 global** — autonomie complète sans humain

### 8.3 Critères de sortie MVP (documentation → implémentation future)

Le MVP documentation est considéré prêt pour un cycle d'implémentation lorsque :

1. Morris valide ce document (gate documentation).
2. Le catalogue tools est stable pour L1/L2/L3 doc-only.
3. Les chemins autorisés / protégés sont alignés avec un projet pilote.
4. Un schéma OpenAPI / MCP tool descriptor est dérivé de ce catalogue — **cycle séparé**.
5. Le Git Reader API et le MCP SFIA ont des périmètres non ambigus.

---

## 9. SFIA status

```text
Decision: SFIA MCP v2.0 architecture documented (draft).
Automation level: L1/L2 target for ChatGPT; L3 bounded for Cursor.
Scope: Controlled ChatGPT ↔ Cursor exchange via bounded MCP tools.
Git source of truth: mcleland147/sfia-workspace.
Human decision authority: Morris.
Write operations: L3 doc-only in MVP; push/merge/PR permanently L0.
Global L5 autonomy: forbidden.
Implementation: not in this cycle.
```

ChatGPT cadre, route, challenge et analyse les cycles SFIA. Cursor reste un exécuteur contrôlé. GitHub reste la source de vérité opérationnelle. Morris reste l'autorité de décision pour tout arbitrage structurant, toute évolution de périmètre, tout changement de garde-fou et toute action Git non read-only. Le SFIA MCP Server ne permet aucun arbitrage automatisé et n'expose aucune capacité de push, merge ou suppression.

---

## 10. Prochaines étapes recommandées (hors ce cycle)

| # | Étape | Gate |
|---|-------|------|
| 1 | Validation Morris de cette architecture | Morris |
| 2 | Dérivation schéma MCP tools depuis §3 | DOC cycle |
| 3 | Projet pilote — handoff ChatGPT → Cursor manuel avec tools L1 | L3 pilote |
| 4 | Implémentation serveur MCP minimal (L1 only) | Cycle dédié |
| 5 | Extension L2 puis L3 doc-only | Promotion documentée |

---

*SFIA MCP v2.0 — Architecture draft — Documentation only — No server implementation in this cycle.*
