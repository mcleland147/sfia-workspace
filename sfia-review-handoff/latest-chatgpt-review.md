---
status: temporary-review-handoff
cycle: Lot C v3 MCP archive
profile: Critical
decision_scope: archive SFIA v3 trajectory 23 files
source_branch: archive/sfia-v2.6-lot-c-v3-mcp
source_head: d4401c3da6c08cb7e8716fea5a513df22d467c0e
main_base: 2736de4944ff3747c8d69d64a0c4a01b6eede85e
pr: 171
pr_merged: false
pr_state: open
lot_c_files: 23
git_mv_count: 23
physical_deletions: 0
active_operational_v3_references: 0
doctrine_changed: false
canonical_changed: false
csv_sha: 00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275
csv_unchanged: true
lot_0_closed: true
lot_a_closed: true
lot_b: not_required
lots_d_j: not_started
baseline: v2.4
candidate: v2.6
v3_trajectory: archived
synthesis_only: no
closure_verdict: LOT_C_V3_ARCHIVED
---

# SFIA v2.6 — Lot C Review Handoff

**Date/heure :** 2026-07-12 17:10 Europe/Paris
**Cycle :** Lot C — archivage trajectoire SFIA v3 / MCP
**Profil :** Critical
**synthesis only = no**

## Instruction ChatGPT

Lire ce handoff ; vérifier manifeste 23/23, git mv, active operational refs = 0, CSV, doctrine, PR #171.

## PR

- **#171** — OPEN — NOT MERGED
- URL: https://github.com/mcleland147/sfia-workspace/pull/171
- Branche: `archive/sfia-v2.6-lot-c-v3-mcp`
- HEAD: `d4401c3da6c08cb7e8716fea5a513df22d467c0e`

## Manifeste 23/23

Tous les fichiers Lot C déplacés vers `method/sfia-fast-track/documentation/archive/sfia-v3/` (doctrine/, prompts/, governance/, capitalization/).

## archive/sfia-v3/README.md

# SFIA v3.0 — Archived trajectory (Lot C)

**Lifecycle :** archived  
**Trajectory :** SFIA v3.0 — hors trajectoire courante  
**Usage :** consultation historique uniquement ; non-operational  
**SFIA v2.4 :** baseline opérationnelle  
**SFIA v2.6 :** candidate  

## Structure

| Dossier | Contenu |
|---------|---------|
| `doctrine/` | Doctrine orchestration, cycle engine, gates (ex-`docs/tooling/mcp/sfia-3-*`) |
| `prompts/` | Prompts cycle MCP (ex-`prompts/tooling/mcp/sfia-3-*`) |
| `governance/` | Morris gate prompt (ex-`prompts/governance/sfia-3-morris-gate.md`) |
| `capitalization/` | Rapports, audits et expérimentations v3 (ex-`capitalization/sfia-v3/`) |

**23 fichiers** archivés par Lot C (2026-07-12). Réouverture = GO Morris explicite.


## Rapport exécution (complet)

# SFIA v2.6 — Lot C v3/MCP Archive Execution

**Horodatage :** 2026-07-12 17:08 Europe/Paris  
**Cycle :** Capitalisation / archivage documentaire  
**Profil :** Critical  
**GO Morris :** explicite — Lot C depuis `main` @ `2736de4944ff3747c8d69d64a0c4a01b6eede85e`  
**Branche :** `archive/sfia-v2.6-lot-c-v3-mcp`

---

## 1. Manifeste Lot C (23/23)

| # | Ancien chemin | Nouveau chemin |
|---|---------------|----------------|
| 1 | `docs/tooling/mcp/sfia-3-cycle-engine.md` | `method/.../archive/sfia-v3/doctrine/sfia-3-cycle-engine.md` |
| 2 | `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md` | `method/.../archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md` |
| 3 | `docs/tooling/mcp/sfia-3-orchestration-doctrine.md` | `method/.../archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md` |
| 4 | `method/.../capitalization/sfia-3-documentation-routing-audit.md` | `method/.../archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md` |
| 5 | `method/.../capitalization/sfia-v3/2026-07-07-sfia-3-opening-report.md` | `method/.../archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md` |
| 6 | `method/.../capitalization/sfia-v3/2026-07-08-sfia-3-exploration-closure.md` | `method/.../archive/sfia-v3/capitalization/2026-07-08-sfia-3-exploration-closure.md` |
| 7 | `method/.../capitalization/sfia-v3/2026-07-08-sfia-3-runtime-loop-validation.md` | `method/.../archive/sfia-v3/capitalization/2026-07-08-sfia-3-runtime-loop-validation.md` |
| 8 | `method/.../capitalization/sfia-v3/sfia-3-documentation-links-correction-report.md` | `method/.../archive/sfia-v3/capitalization/sfia-3-documentation-links-correction-report.md` |
| 9 | `method/.../capitalization/sfia-v3/sfia-3-documentation-realignment-report.md` | `method/.../archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md` |
| 10 | `method/.../capitalization/sfia-v3/sfia-3-pr-readiness-report.md` | `method/.../archive/sfia-v3/capitalization/sfia-3-pr-readiness-report.md` |
| 11 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-cursor-integration-flow.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-cursor-integration-flow.md` |
| 12 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-cursor-interactive-validation.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-cursor-interactive-validation.md` |
| 13 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-e2e-v040-flow.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-e2e-v040-flow.md` |
| 14 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-l2-handoff-experiment.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l2-handoff-experiment.md` |
| 15 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md` |
| 16 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md` |
| 17 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-mvp-l1-experiment.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-mvp-l1-experiment.md` |
| 18 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md` |
| 19 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md` |
| 20 | `prompts/governance/sfia-3-morris-gate.md` | `method/.../archive/sfia-v3/governance/sfia-3-morris-gate.md` |
| 21 | `prompts/tooling/mcp/sfia-3-cycle-router.md` | `method/.../archive/sfia-v3/prompts/sfia-3-cycle-router.md` |
| 22 | `prompts/tooling/mcp/sfia-3-report-analyzer.md` | `method/.../archive/sfia-v3/prompts/sfia-3-report-analyzer.md` |
| 23 | `prompts/tooling/mcp/sfia-3-task-builder.md` | `method/.../archive/sfia-v3/prompts/sfia-3-task-builder.md` |

**Commande :** `git mv` (R100) pour chaque fichier.  
**Collisions :** aucune.  
**Suppressions physiques :** **0**.

---

## 2. Structure d'archive

```
method/sfia-fast-track/documentation/archive/sfia-v3/
  README.md
  doctrine/          (3)
  prompts/           (3)
  governance/        (1)
  capitalization/    (6 + experiments/ 10)
```

---

## 3. Lifecycle / trajectory

| Élément | Avant | Après |
|---------|-------|-------|
| lifecycle | archived (CSV) | archived — confirmé dans bannières |
| trajectory | SFIA v3.0 | SFIA v3.0 — hors trajectoire courante |
| usage | non-operational | consultation historique uniquement |
| authority | informational / supporting | inchangée (historique) |

---

## 4. Références modifiées

| Fichier | Action |
|---------|--------|
| 23 fichiers archivés | bannière archive + liens internes mis à jour vers chemins archive |
| `sfia-v2.5-source-routing-map-candidate.md` | chemin sfia-v3 → archive |
| `archive/sfia-v3/README.md` | **créé** — index archive |

### Non modifiés (historiques / frozen)

- CSV cartography frozen — chemins source historiques
- `2026-07-11-sfia-v2.6-repository-read-only-audit.md` — photographie audit
- `docs/tooling/mcp/sfia-mcp-v2-architecture.md` — **Lot E**, hors Lot C

---

## 5. Contrôle non-réactivation

**active operational references to SFIA v3 / MCP / Bridge / Runner = 0**

Occurrences restantes : archive interne, rapports historiques, CSV frozen, read-only audit photograph, `.sfia/` local untracked (runtime, hors dépôt).

---

## 6. Garde-fous

| Contrôle | Résultat |
|----------|----------|
| Doctrine changed | **no** |
| Canonical changed | **no** |
| CSV SHA | `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` — **unchanged** |
| CSV in diff | **no** |
| Lot 0 | **closed** 76/76 |
| Lot A | **closed** (PR #169 merged) |
| Lot B | **not required** |
| Lots D–J | **not started** |
| SFIA v2.4 | **baseline** |
| SFIA v2.6 | **candidate** |
| SFIA v3 | **archived — non réactivé** |

---

## 7. Verdict

```
LOT C MANIFEST VERIFIED 23/23
SFIA V3 TRAJECTORY ARCHIVED
ACTIVE OPERATIONAL V3 REFERENCES ZERO
NO PHYSICAL FILE DELETION
NO DOCTRINE CHANGE
CSV UNCHANGED
PR OPEN — NOT MERGED
```

---

## 8. Prochaine décision Morris

1. PR readiness review (ChatGPT)
2. GO merge séparé
3. Lot D — non ouvert


## Diff stat

```
.../documentation/archive/sfia-v3/README.md        |  18 +++
 .../2026-07-07-sfia-3-opening-report.md            |  20 ++--
 .../2026-07-08-sfia-3-exploration-closure.md       |  14 ++-
 .../2026-07-08-sfia-3-runtime-loop-validation.md   |  22 ++--
 .../2026-07-07-cursor-integration-flow.md          |   2 +
 ...2026-07-07-mcp-cursor-interactive-validation.md |   2 +
 .../experiments/2026-07-07-mcp-e2e-v040-flow.md    |   2 +
 .../2026-07-07-mcp-l2-handoff-experiment.md        |   2 +
 ...026-07-07-mcp-l3-confined-handoff-experiment.md |   2 +
 .../2026-07-07-mcp-l3-cycle-report-experiment.md   |   2 +
 .../2026-07-07-mcp-mvp-l1-experiment.md            |   2 +
 ...026-07-07-sfia-cursor-task-runner-experiment.md |   2 +
 ...fia-orchestrator-bridge-architecture-and-mvp.md |   2 +
 ...sfia-3-documentation-links-correction-report.md |  64 +++++-----
 .../sfia-3-documentation-realignment-report.md     |  54 ++++-----
 .../sfia-3-documentation-routing-audit.md          |  48 ++++----
 .../capitalization}/sfia-3-pr-readiness-report.md  |  72 ++++++------
 .../sfia-v3/doctrine}/sfia-3-cycle-engine.md       |  14 ++-
 .../doctrine}/sfia-3-gates-and-stop-conditions.md  |   4 +-
 .../doctrine}/sfia-3-orchestration-doctrine.md     |  18 +--
 .../sfia-v3}/governance/sfia-3-morris-gate.md      |   4 +-
 .../sfia-v3/prompts}/sfia-3-cycle-router.md        |   6 +-
 .../sfia-v3/prompts}/sfia-3-report-analyzer.md     |   6 +-
 .../sfia-v3/prompts}/sfia-3-task-builder.md        |   4 +-
 ...-11-sfia-v2.6-repository-migration-lots-plan.md |   5 +-
 ...-12-sfia-v2.6-lot-c-v3-mcp-archive-execution.md | 129 +++++++++++++++++++++
 .../sfia-v2.5-source-routing-map-candidate.md      |   4 +-
 27 files changed, 360 insertions(+), 164 deletions(-)
```

## Diff complet

```diff
diff --git a/method/sfia-fast-track/documentation/archive/sfia-v3/README.md b/method/sfia-fast-track/documentation/archive/sfia-v3/README.md
new file mode 100644
index 0000000..38d8d3f
--- /dev/null
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/README.md
@@ -0,0 +1,18 @@
+# SFIA v3.0 — Archived trajectory (Lot C)
+
+**Lifecycle :** archived  
+**Trajectory :** SFIA v3.0 — hors trajectoire courante  
+**Usage :** consultation historique uniquement ; non-operational  
+**SFIA v2.4 :** baseline opérationnelle  
+**SFIA v2.6 :** candidate  
+
+## Structure
+
+| Dossier | Contenu |
+|---------|---------|
+| `doctrine/` | Doctrine orchestration, cycle engine, gates (ex-`docs/tooling/mcp/sfia-3-*`) |
+| `prompts/` | Prompts cycle MCP (ex-`prompts/tooling/mcp/sfia-3-*`) |
+| `governance/` | Morris gate prompt (ex-`prompts/governance/sfia-3-morris-gate.md`) |
+| `capitalization/` | Rapports, audits et expérimentations v3 (ex-`capitalization/sfia-v3/`) |
+
+**23 fichiers** archivés par Lot C (2026-07-12). Réouverture = GO Morris explicite.
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-07-sfia-3-opening-report.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md
similarity index 80%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-07-sfia-3-opening-report.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md
index 9899b4d..4b5866c 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-07-sfia-3-opening-report.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Opening Report
 
 **Date :** 2026-07-07
@@ -17,14 +19,14 @@
 | `sfia-3-cycle-engine.md` | Moteur cycle, états, cycle validable, rapport consommable |
 | `sfia-3-gates-and-stop-conditions.md` | Gates Morris, conditions d'arrêt, escalade |
 
-### Prompts cycle (`prompts/tooling/mcp/` + `prompts/governance/`)
+### Prompts cycle (`method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)` + `prompts/governance/`)
 
 | Fichier | Rôle |
 |---------|------|
-| `prompts/tooling/mcp/sfia-3-cycle-router.md` | Routage cycle_type avant task |
-| `prompts/tooling/mcp/sfia-3-task-builder.md` | Construction task pour bridge |
-| `prompts/tooling/mcp/sfia-3-report-analyzer.md` | Analyse rapport post-cycle |
-| `prompts/governance/sfia-3-morris-gate.md` | Escalade et résolution gate |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` | Routage cycle_type avant task |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` | Construction task pour bridge |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` | Analyse rapport post-cycle |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` | Escalade et résolution gate |
 
 ### Templates (`docs/templates/` — contrats JSON)
 
@@ -137,8 +139,8 @@ ChatGPT → Bridge → tasks/ → Runner → reports/ → Bridge → ChatGPT
 
 ## 8. Prochaine étape recommandée
 
-1. **Test E2E ChatGPT réel** — Custom GPT Action → bridge tunnel → task → `npm run watch` → `GET /reports/latest` → `prompts/tooling/mcp/sfia-3-report-analyzer.md`
-2. **Documenter le flux** dans `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/` (rapport E2E daté — capitalisation, pas bus runtime)
+1. **Test E2E ChatGPT réel** — Custom GPT Action → bridge tunnel → task → `npm run watch` → `GET /reports/latest` → `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md`
+2. **Documenter le flux** dans `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` (rapport E2E daté — capitalisation, pas bus runtime)
 3. **Revue Morris** des 3 docs doctrine + 4 prompts
 4. **Décider** date promotion PR (hors scope immédiat)
 
@@ -152,7 +154,7 @@ docs/tooling/mcp/
   sfia-3-cycle-engine.md
   sfia-3-gates-and-stop-conditions.md
 
-prompts/tooling/mcp/
+method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)
   sfia-3-cycle-router.md
   sfia-3-task-builder.md
   sfia-3-report-analyzer.md
@@ -164,7 +166,7 @@ docs/templates/
   sfia-3-task-template.json
   sfia-3-report-template.json
 
-method/.../capitalization/sfia-v3/
+method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/
   2026-07-07-sfia-3-opening-report.md
 
 .sfia/mcp/                    ← runtime bus uniquement (tasks/, reports/*.json, gates/, logs/, code)
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-08-sfia-3-exploration-closure.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-08-sfia-3-exploration-closure.md
similarity index 92%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-08-sfia-3-exploration-closure.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-08-sfia-3-exploration-closure.md
index de40420..f729dc5 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-08-sfia-3-exploration-closure.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-08-sfia-3-exploration-closure.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Clôture d'exploration et retour trajectoire v2.4
 
 **Date :** 2026-07-08  
@@ -45,9 +47,9 @@ ChatGPT Custom GPT
 
 **Livrables documentaires** intégrés via PR #142 :
 
-- doctrine outillage (`docs/tooling/mcp/sfia-3-*.md`) ;
-- prompts cycle (`prompts/tooling/mcp/`, `prompts/governance/sfia-3-morris-gate.md`) ;
-- capitalisation (`method/.../capitalization/sfia-v3/`).
+- doctrine outillage (`method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/ (archived)`) ;
+- prompts cycle (`method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)`, `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md`) ;
+- capitalisation (`method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/`).
 
 Voir : `2026-07-07-sfia-3-opening-report.md`.
 
@@ -265,9 +267,9 @@ Morris (validation, commit, push, PR, merge — L0)
 
 ### Doctrine (gelée — exploration clôturée)
 
-- `docs/tooling/mcp/sfia-3-orchestration-doctrine.md`
-- `docs/tooling/mcp/sfia-3-cycle-engine.md`
-- `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md`
 
 ### Baseline retenue
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-08-sfia-3-runtime-loop-validation.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-08-sfia-3-runtime-loop-validation.md
similarity index 88%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-08-sfia-3-runtime-loop-validation.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-08-sfia-3-runtime-loop-validation.md
index e9baff4..427c6ea 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-08-sfia-3-runtime-loop-validation.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-08-sfia-3-runtime-loop-validation.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Validation de la boucle runtime post-PR #142
 
 **Date :** 2026-07-08  
@@ -12,9 +14,9 @@
 
 La trajectoire documentaire SFIA 3.0 a été intégrée dans `main` via PR #142 (22 fichiers Markdown) :
 
-- doctrine outillage (`docs/tooling/mcp/sfia-3-*.md`) ;
-- prompts canoniques (`prompts/tooling/mcp/`, `prompts/governance/sfia-3-morris-gate.md`) ;
-- capitalisation méthode (`method/.../capitalization/sfia-v3/`).
+- doctrine outillage (`method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/ (archived)`) ;
+- prompts canoniques (`method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)`, `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md`) ;
+- capitalisation méthode (`method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/`).
 
 La règle architecturale validée reste :
 
@@ -61,13 +63,13 @@ Git Reader a permis à ChatGPT de **lire `main` à distance** sans dépendre du
 
 | Fichier | Statut |
 |---------|--------|
-| `docs/tooling/mcp/sfia-3-orchestration-doctrine.md` | ✅ Lu |
-| `docs/tooling/mcp/sfia-3-cycle-engine.md` | ✅ Lu |
-| `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md` | ✅ Lu |
-| `prompts/tooling/mcp/sfia-3-cycle-router.md` | ✅ Lu |
-| `prompts/tooling/mcp/sfia-3-task-builder.md` | ✅ Lu |
-| `prompts/tooling/mcp/sfia-3-report-analyzer.md` | ✅ Lu |
-| `prompts/governance/sfia-3-morris-gate.md` | ✅ Lu |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md` | ✅ Lu |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md` | ✅ Lu |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md` | ✅ Lu |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` | ✅ Lu |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` | ✅ Lu |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` | ✅ Lu |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` | ✅ Lu |
 
 ### Réserve documentaire observée
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-cursor-integration-flow.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-cursor-integration-flow.md
similarity index 96%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-cursor-integration-flow.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-cursor-integration-flow.md
index 1cfbbf4..42818fd 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-cursor-integration-flow.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-cursor-integration-flow.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA MCP — Rapport d'essai intégration Cursor (flux réel L1)
 
 **Date :** 2026-07-07
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-cursor-interactive-validation.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-cursor-interactive-validation.md
similarity index 95%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-cursor-interactive-validation.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-cursor-interactive-validation.md
index 46a97fb..f8c0f26 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-cursor-interactive-validation.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-cursor-interactive-validation.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA MCP — Validation interactive Cursor UI v0.4.0
 
 **Date :** 2026-07-07
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-e2e-v040-flow.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-e2e-v040-flow.md
similarity index 95%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-e2e-v040-flow.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-e2e-v040-flow.md
index c561441..f2999d8 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-e2e-v040-flow.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-e2e-v040-flow.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA MCP — Flux bout-en-bout E2E v0.4.0
 
 **Date :** 2026-07-07
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l2-handoff-experiment.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l2-handoff-experiment.md
similarity index 96%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l2-handoff-experiment.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l2-handoff-experiment.md
index 7a87b35..bb57dfe 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l2-handoff-experiment.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l2-handoff-experiment.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA MCP — Rapport d'expérimentation L2 handoff
 
 **Date :** 2026-07-07
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md
similarity index 95%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md
index 805f992..8665bad 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA MCP — Rapport d'expérimentation L3 confiné handoff
 
 **Date :** 2026-07-07
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md
similarity index 95%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md
index 2769a34..8df4b35 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA MCP — Rapport d'expérimentation L3 cycle report
 
 **Date :** 2026-07-07
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-mvp-l1-experiment.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-mvp-l1-experiment.md
similarity index 97%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-mvp-l1-experiment.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-mvp-l1-experiment.md
index c8d3388..e17d59e 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-mvp-l1-experiment.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-mvp-l1-experiment.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA MCP v2.0 — Rapport d'expérimentation MVP L1
 
 **Date :** 2026-07-07
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md
similarity index 95%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md
index e8a624a..647eed8 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA Cursor Task Runner — Experiment Report
 
 **Date :** 2026-07-07
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md
similarity index 96%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md
index b8ba72f..b38f79e 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA Orchestrator Bridge — Architecture & MVP Report
 
 **Date :** 2026-07-07
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-links-correction-report.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-links-correction-report.md
similarity index 55%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-links-correction-report.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-links-correction-report.md
index c9e1301..7a1dcdd 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-links-correction-report.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-links-correction-report.md
@@ -1,12 +1,14 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Rapport de correction liens Markdown
 
 **Date :** 2026-07-08
 **Références :**
-- `method/sfia-fast-track/documentation/capitalization/sfia-3-documentation-routing-audit.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-realignment-report.md`
-- `docs/tooling/mcp/sfia-3-orchestration-doctrine.md`
-- `docs/tooling/mcp/sfia-3-cycle-engine.md`
-- `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md`
 
 **Décision Morris :** cycle DOC uniquement — fichiers `.md` ; aucun `.json` touché
 **Action Git :** aucun commit, push ou PR
@@ -23,20 +25,20 @@ Corriger les références obsolètes vers `.sfia/mcp/prompts/`, `.sfia/mcp/templ
 
 | Fichier | Nature des corrections |
 |---------|------------------------|
-| `docs/tooling/mcp/sfia-3-orchestration-doctrine.md` | §5.1 règle runtime ; §5.2 chemins canoniques prompts/templates ; §10 références |
-| `docs/tooling/mcp/sfia-3-cycle-engine.md` | Template report ; séquence §8 ; §11 références |
-| `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md` | Chemin prompt Morris gate |
-| `method/.../sfia-3-documentation-routing-audit.md` | Note historique §4 ; §13 synthèse post-réalignement |
-| `method/.../sfia-v3/sfia-3-documentation-realignment-report.md` | Réserves §6 ; risques §7 ; action §9 |
-| `method/.../sfia-v3/2026-07-07-sfia-3-opening-report.md` | §8 prochaines étapes (chemins canoniques) |
-| `method/.../sfia-v3/sfia-3-documentation-links-correction-report.md` | Ce rapport |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md` | §5.1 règle runtime ; §5.2 chemins canoniques prompts/templates ; §10 références |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md` | Template report ; séquence §8 ; §11 références |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md` | Chemin prompt Morris gate |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md` | Note historique §4 ; §13 synthèse post-réalignement |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md` | Réserves §6 ; risques §7 ; action §9 |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md` | §8 prochaines étapes (chemins canoniques) |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-links-correction-report.md` | Ce rapport |
 
 **Non modifiés (déjà conformes après réalignement 2026-07-07) :**
 
-- `prompts/tooling/mcp/sfia-3-cycle-router.md`
-- `prompts/tooling/mcp/sfia-3-task-builder.md`
-- `prompts/tooling/mcp/sfia-3-report-analyzer.md`
-- `prompts/governance/sfia-3-morris-gate.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md`
 - `prompts/prompt-catalog.md` *(hors scope — réserve)*
 
 ---
@@ -45,15 +47,15 @@ Corriger les références obsolètes vers `.sfia/mcp/prompts/`, `.sfia/mcp/templ
 
 | Ancien chemin (obsolète) | Nouveau chemin (canonique) | Fichiers impactés |
 |--------------------------|----------------------------|-------------------|
-| `.sfia/mcp/prompts/cycle-router.md` | `prompts/tooling/mcp/sfia-3-cycle-router.md` | doctrine, cycle-engine |
-| `.sfia/mcp/prompts/task-builder.md` | `prompts/tooling/mcp/sfia-3-task-builder.md` | doctrine, cycle-engine |
-| `.sfia/mcp/prompts/report-analyzer.md` | `prompts/tooling/mcp/sfia-3-report-analyzer.md` | doctrine, cycle-engine, opening-report |
-| `.sfia/mcp/prompts/morris-gate.md` | `prompts/governance/sfia-3-morris-gate.md` | gates-and-stop-conditions |
+| `.sfia/mcp/prompts/cycle-router.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` | doctrine, cycle-engine |
+| `.sfia/mcp/prompts/task-builder.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` | doctrine, cycle-engine |
+| `.sfia/mcp/prompts/report-analyzer.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` | doctrine, cycle-engine, opening-report |
+| `.sfia/mcp/prompts/morris-gate.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` | gates-and-stop-conditions |
 | `.sfia/mcp/templates/task-template.json` | `docs/templates/sfia-3-task-template.json` *(réf. documentaire)* | doctrine, cycle-engine |
 | `.sfia/mcp/templates/report-template.json` | `docs/templates/sfia-3-report-template.json` *(réf. documentaire)* | doctrine, cycle-engine |
-| `.sfia/mcp/reports/2026-07-07-sfia-orchestrator-bridge-*.md` | `method/.../sfia-v3/experiments/...` | doctrine §10 |
-| `.sfia/mcp/reports/2026-07-07-sfia-cursor-task-runner-experiment.md` | `method/.../sfia-v3/experiments/...` | doctrine §10 |
-| `.sfia/mcp/reports/` *(capitalisation E2E)* | `method/.../sfia-v3/experiments/` | opening-report §8 |
+| `.sfia/mcp/reports/2026-07-07-sfia-orchestrator-bridge-*.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/...` | doctrine §10 |
+| `.sfia/mcp/reports/2026-07-07-sfia-cursor-task-runner-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/...` | doctrine §10 |
+| `.sfia/mcp/reports/` *(capitalisation E2E)* | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` | opening-report §8 |
 
 **Total :** ~15 références mises à jour dans la doctrine et les rapports de capitalisation.
 
@@ -96,10 +98,10 @@ Seuls des fichiers `.md` ont été édités.
 ?? docs/templates/sfia-3-report-template.json
 ?? docs/templates/sfia-3-task-template.json
 ?? docs/tooling/mcp/
-?? method/.../sfia-3-documentation-routing-audit.md
-?? method/.../capitalization/sfia-v3/
-?? prompts/governance/sfia-3-morris-gate.md
-?? prompts/tooling/mcp/
+?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
+?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/
+?? method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
+?? method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)
 ?? (autres untracked hors périmètre SFIA 3.0)
 ```
 
@@ -112,10 +114,10 @@ Seuls des fichiers `.md` ont été édités.
 ?? docs/templates/sfia-3-report-template.json
 ?? docs/templates/sfia-3-task-template.json
 ?? docs/tooling/mcp/
-?? method/.../sfia-3-documentation-routing-audit.md
-?? method/.../capitalization/sfia-v3/    (+ sfia-3-documentation-links-correction-report.md)
-?? prompts/governance/sfia-3-morris-gate.md
-?? prompts/tooling/mcp/
+?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
+?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/    (+ sfia-3-documentation-links-correction-report.md)
+?? method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
+?? method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)
 ?? (autres untracked hors périmètre SFIA 3.0)
 ```
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-realignment-report.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md
similarity index 66%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-realignment-report.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md
index 6559921..9f1332f 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-realignment-report.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md
@@ -1,7 +1,9 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Rapport de réalignement documentaire
 
 **Date :** 2026-07-07
-**Référence :** `method/sfia-fast-track/documentation/capitalization/sfia-3-documentation-routing-audit.md`
+**Référence :** `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md`
 **Décision Morris :** GO déplacement documentaire uniquement — pas de modification de fond
 **Action Git :** aucun commit, push ou PR
 
@@ -21,7 +23,7 @@
 ?? .cursor/mcp.json
 ?? .sfia/
 ?? docs/tooling/mcp/
-?? method/.../sfia-3-documentation-routing-audit.md
+?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
 ?? (autres untracked hors périmètre)
 ```
 
@@ -32,9 +34,9 @@
 ?? docs/templates/sfia-3-task-template.json
 ?? docs/tooling/mcp/
 ?? method/.../capitalization/sfia-3-documentation-routing-audit.md
-?? method/.../capitalization/sfia-v3/
-?? prompts/governance/sfia-3-morris-gate.md
-?? prompts/tooling/mcp/
+?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/
+?? method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
+?? method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)
 ?? .sfia/                    (runtime bus — prompts/templates/reports .md retirés)
 ```
 
@@ -46,10 +48,10 @@
 
 | Source | Destination |
 |--------|-------------|
-| `.sfia/mcp/prompts/cycle-router.md` | `prompts/tooling/mcp/sfia-3-cycle-router.md` |
-| `.sfia/mcp/prompts/task-builder.md` | `prompts/tooling/mcp/sfia-3-task-builder.md` |
-| `.sfia/mcp/prompts/report-analyzer.md` | `prompts/tooling/mcp/sfia-3-report-analyzer.md` |
-| `.sfia/mcp/prompts/morris-gate.md` | `prompts/governance/sfia-3-morris-gate.md` |
+| `.sfia/mcp/prompts/cycle-router.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` |
+| `.sfia/mcp/prompts/task-builder.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` |
+| `.sfia/mcp/prompts/report-analyzer.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` |
+| `.sfia/mcp/prompts/morris-gate.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` |
 
 ### Templates (2)
 
@@ -62,21 +64,21 @@
 
 | Source | Destination | Motif |
 |--------|-------------|-------|
-| `.sfia/mcp/reports/2026-07-07-sfia-3-opening-report.md` | `method/.../capitalization/sfia-v3/2026-07-07-sfia-3-opening-report.md` | Rapport d'ouverture méthode |
+| `.sfia/mcp/reports/2026-07-07-sfia-3-opening-report.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md` | Rapport d'ouverture méthode |
 
 ### Rapports Markdown — expérimentation (9)
 
 | Source | Destination |
 |--------|-------------|
-| `.sfia/mcp/reports/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md` | `method/.../capitalization/sfia-v3/experiments/` |
-| `.sfia/mcp/reports/2026-07-07-sfia-cursor-task-runner-experiment.md` | `method/.../capitalization/sfia-v3/experiments/` |
-| `.sfia/mcp/reports/2026-07-07-mcp-cursor-interactive-validation.md` | `method/.../capitalization/sfia-v3/experiments/` |
-| `.sfia/mcp/reports/2026-07-07-mcp-e2e-v040-flow.md` | `method/.../capitalization/sfia-v3/experiments/` |
-| `.sfia/mcp/reports/2026-07-07-mcp-l3-cycle-report-experiment.md` | `method/.../capitalization/sfia-v3/experiments/` |
-| `.sfia/mcp/reports/2026-07-07-mcp-l3-confined-handoff-experiment.md` | `method/.../capitalization/sfia-v3/experiments/` |
-| `.sfia/mcp/reports/2026-07-07-mcp-l2-handoff-experiment.md` | `method/.../capitalization/sfia-v3/experiments/` |
-| `.sfia/mcp/reports/2026-07-07-cursor-integration-flow.md` | `method/.../capitalization/sfia-v3/experiments/` |
-| `.sfia/mcp/reports/2026-07-07-mcp-mvp-l1-experiment.md` | `method/.../capitalization/sfia-v3/experiments/` |
+| `.sfia/mcp/reports/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
+| `.sfia/mcp/reports/2026-07-07-sfia-cursor-task-runner-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
+| `.sfia/mcp/reports/2026-07-07-mcp-cursor-interactive-validation.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
+| `.sfia/mcp/reports/2026-07-07-mcp-e2e-v040-flow.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
+| `.sfia/mcp/reports/2026-07-07-mcp-l3-cycle-report-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
+| `.sfia/mcp/reports/2026-07-07-mcp-l3-confined-handoff-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
+| `.sfia/mcp/reports/2026-07-07-mcp-l2-handoff-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
+| `.sfia/mcp/reports/2026-07-07-cursor-integration-flow.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
+| `.sfia/mcp/reports/2026-07-07-mcp-mvp-l1-experiment.md` | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
 
 **Dossiers supprimés (vides) :** `.sfia/mcp/prompts/`, `.sfia/mcp/templates/`
 
@@ -88,7 +90,7 @@ Liens internes mis à jour **uniquement** dans les prompts déplacés (chemins c
 
 | Fichier | Changement |
 |---------|------------|
-| `sfia-3-cycle-router.md` | Référence task-builder → `prompts/tooling/mcp/sfia-3-task-builder.md` |
+| `sfia-3-cycle-router.md` | Référence task-builder → `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` |
 | `sfia-3-task-builder.md` | Template → `docs/templates/sfia-3-task-template.json` |
 | `sfia-3-report-analyzer.md` | Template + morris-gate → chemins canoniques |
 
@@ -125,9 +127,9 @@ Références runtime `.sfia/mcp/` (bus, gates, reports JSON) **inchangées** —
 
 Restent à leur emplacement actuel (non déplacés) :
 
-- `docs/tooling/mcp/sfia-3-orchestration-doctrine.md`
-- `docs/tooling/mcp/sfia-3-cycle-engine.md`
-- `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md`
 - `docs/tooling/mcp/sfia-mcp-v2-architecture.md`
 
 ---
@@ -175,10 +177,10 @@ Restent à leur emplacement actuel (non déplacés) :
 
 | # | Action | Bloquant ? |
 |---|--------|------------|
-| 1 | ~~Patch liens dans `docs/tooling/mcp/sfia-3-*.md`~~ | **Fait** (2026-07-08 — voir `sfia-3-documentation-links-correction-report.md`) |
+| 1 | ~~Patch liens dans `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/ (archived)`~~ | **Fait** (2026-07-08 — voir `sfia-3-documentation-links-correction-report.md`) |
 | 2 | Entrées SFIA 3.0 dans `prompts/prompt-catalog.md` | Non — souhaitable |
 | 3 | Hub `docs/tooling/mcp/README.md` | Non |
-| 4 | **Reprise test** ChatGPT → Bridge → Runner avec chemins `prompts/tooling/mcp/` | **GO opérationnel** |
+| 4 | **Reprise test** ChatGPT → Bridge → Runner avec chemins `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)` | **GO opérationnel** |
 
 **Morris peut reprendre l'orchestrateur et Git Reader** dès maintenant — le bus runtime est propre ; les assets durables sont aux emplacements canoniques.
 
@@ -190,7 +192,7 @@ Restent à leur emplacement actuel (non déplacés) :
 Déplacements : 16 fichiers
 Liens corrigés : 5 références (prompts déplacés uniquement)
 .sfia/mcp/ : runtime uniquement
-Capitalisation : method/.../capitalization/sfia-v3/
+Capitalisation : method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/
 Statut : REALIGNEMENT OK
 ```
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-3-documentation-routing-audit.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
similarity index 84%
rename from method/sfia-fast-track/documentation/capitalization/sfia-3-documentation-routing-audit.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
index 627f2b9..ded9f56 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-3-documentation-routing-audit.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Audit de cartographie documentaire
 
 **Date :** 2026-07-07
@@ -110,10 +112,10 @@ Tous les livrables SFIA 3.0 et le bus `.sfia/mcp/` sont **non suivis** (`??`) à
 
 | Fichier | Emplacement au moment de l'audit |
 |---------|----------------------------------|
-| `cycle-router.md` | `.sfia/mcp/prompts/` → **`prompts/tooling/mcp/sfia-3-cycle-router.md`** |
-| `task-builder.md` | `.sfia/mcp/prompts/` → **`prompts/tooling/mcp/sfia-3-task-builder.md`** |
-| `report-analyzer.md` | `.sfia/mcp/prompts/` → **`prompts/tooling/mcp/sfia-3-report-analyzer.md`** |
-| `morris-gate.md` | `.sfia/mcp/prompts/` → **`prompts/governance/sfia-3-morris-gate.md`** |
+| `cycle-router.md` | `.sfia/mcp/prompts/` → **`method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md`** |
+| `task-builder.md` | `.sfia/mcp/prompts/` → **`method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md`** |
+| `report-analyzer.md` | `.sfia/mcp/prompts/` → **`method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md`** |
+| `morris-gate.md` | `.sfia/mcp/prompts/` → **`method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md`** |
 
 ### 4.3 Templates (état audit — avant réalignement)
 
@@ -166,20 +168,20 @@ Tous les livrables SFIA 3.0 et le bus `.sfia/mcp/` sont **non suivis** (`??`) à
 
 | Fichier | Emplacement actuel | Classification | Emplacement cible recommandé | Justification |
 |---------|-------------------|----------------|----------------------------|---------------|
-| `sfia-3-orchestration-doctrine.md` | `docs/tooling/mcp/` | Doctrine durable | **Conserver** `docs/tooling/mcp/` *(court terme)* → `method/.../capitalization/sfia-v3/` *(promotion)* | Aligné précédent `docs/tooling/penpot/` ; promotion méthode si statut Candidate |
+| `sfia-3-orchestration-doctrine.md` | `docs/tooling/mcp/` | Doctrine durable | **Conserver** `docs/tooling/mcp/` *(court terme)* → `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/` *(promotion)* | Aligné précédent `docs/tooling/penpot/` ; promotion méthode si statut Candidate |
 | `sfia-3-cycle-engine.md` | `docs/tooling/mcp/` | Architecture outillage | **Conserver** `docs/tooling/mcp/` | Doc moteur cycle = outillage orchestrateur |
 | `sfia-3-gates-and-stop-conditions.md` | `docs/tooling/mcp/` | Architecture outillage / normatif | **Conserver** `docs/tooling/mcp/` *(court terme)* → référence croisée `method/.../core/` si norme | Gates opérationnels MCP ; pas core v1.1 |
 | `sfia-mcp-v2-architecture.md` | `docs/tooling/mcp/` | Architecture outillage | **Conserver** | Déjà conforme |
-| `cycle-router.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `prompts/tooling/mcp/sfia-3-cycle-router.md` | Matrix : prompts → `prompts/` ; précédent `prompts/tooling/penpot/` |
-| `task-builder.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `prompts/tooling/mcp/sfia-3-task-builder.md` | Idem |
-| `report-analyzer.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `prompts/tooling/mcp/sfia-3-report-analyzer.md` | Idem |
-| `morris-gate.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `prompts/governance/sfia-3-morris-gate.md` ou `prompts/arbitrages/` | Thème gouvernance / arbitrage |
+| `cycle-router.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` | Matrix : prompts → `prompts/` ; précédent `prompts/tooling/penpot/` |
+| `task-builder.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` | Idem |
+| `report-analyzer.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` | Idem |
+| `morris-gate.md` | `.sfia/mcp/prompts/` | Prompt réutilisable | `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` ou `prompts/arbitrages/` | Thème gouvernance / arbitrage |
 | `task-template.json` | `.sfia/mcp/templates/` | Template technique | `docs/templates/sfia-3-task-template.json` | Matrix : templates plateforme → `docs/templates/` |
 | `report-template.json` | `.sfia/mcp/templates/` | Template technique | `docs/templates/sfia-3-report-template.json` | Idem |
 | `2026-07-07-sfia-3-opening-report.md` | `.sfia/mcp/reports/` | Rapport temporaire | `method/.../capitalization/sfia-3-opening-report.md` | Capitalisation méthode — pas runtime |
-| `2026-07-07-sfia-orchestrator-bridge-*.md` | `.sfia/mcp/reports/` | Rapport temporaire | `method/.../capitalization/sfia-v3/` ou `docs/tooling/mcp/reports/` | REX outillage ; extraire durable vers README bridge |
-| `2026-07-07-sfia-cursor-task-runner-*.md` | `.sfia/mcp/reports/` | Rapport temporaire | `method/.../capitalization/sfia-v3/` | Idem |
-| `2026-07-07-mcp-*.md` (expériences) | `.sfia/mcp/reports/` | Rapport temporaire | `method/.../capitalization/sfia-v3/experiments/` | Evidence cycles ; pas bus |
+| `2026-07-07-sfia-orchestrator-bridge-*.md` | `.sfia/mcp/reports/` | Rapport temporaire | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/` ou `docs/tooling/mcp/reports/` | REX outillage ; extraire durable vers README bridge |
+| `2026-07-07-sfia-cursor-task-runner-*.md` | `.sfia/mcp/reports/` | Rapport temporaire | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/` | Idem |
+| `2026-07-07-mcp-*.md` (expériences) | `.sfia/mcp/reports/` | Rapport temporaire | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` | Evidence cycles ; pas bus |
 | `bridge/README.md` | `.sfia/mcp/bridge/` | Architecture outillage | **Conserver** à côté du code *(court terme)* → lien depuis `docs/tooling/mcp/` | README co-localisé acceptable pour outillage exécutable |
 | `tasks/*.json` | `.sfia/mcp/tasks/` | Artefact runtime | **Conserver** `.sfia/mcp/tasks/` | Bus orchestrateur |
 | `reports/report-*.json` | `.sfia/mcp/reports/` | Artefact runtime | **Conserver** `.sfia/mcp/reports/` | Consommables ChatGPT |
@@ -194,16 +196,16 @@ Tous les livrables SFIA 3.0 et le bus `.sfia/mcp/` sont **non suivis** (`??`) à
 
 | Fichier / dossier | Raison | Cible recommandée |
 |-------------------|--------|-------------------|
-| `prompts/cycle-router.md` | Prompt réutilisable — Matrix → `prompts/` | `prompts/tooling/mcp/` |
-| `prompts/task-builder.md` | Idem | `prompts/tooling/mcp/` |
-| `prompts/report-analyzer.md` | Idem | `prompts/tooling/mcp/` |
+| `prompts/cycle-router.md` | Prompt réutilisable — Matrix → `prompts/` | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)` |
+| `prompts/task-builder.md` | Idem | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)` |
+| `prompts/report-analyzer.md` | Idem | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)` |
 | `prompts/morris-gate.md` | Idem | `prompts/governance/` |
 | `templates/task-template.json` | Template plateforme | `docs/templates/` |
 | `templates/report-template.json` | Idem | `docs/templates/` |
 | `reports/2026-07-07-sfia-3-opening-report.md` | Capitalisation méthode | `method/.../capitalization/` |
-| `reports/2026-07-07-sfia-orchestrator-bridge-*.md` | REX — pas artefact cycle | `method/.../capitalization/sfia-v3/` |
-| `reports/2026-07-07-sfia-cursor-task-runner-*.md` | Idem | `method/.../capitalization/sfia-v3/` |
-| `reports/2026-07-07-mcp-*.md` | Rapports expérimentation | `method/.../capitalization/sfia-v3/experiments/` |
+| `reports/2026-07-07-sfia-orchestrator-bridge-*.md` | REX — pas artefact cycle | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/` |
+| `reports/2026-07-07-sfia-cursor-task-runner-*.md` | Idem | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/` |
+| `reports/2026-07-07-mcp-*.md` | Rapports expérimentation | `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/` |
 | `reports/2026-07-07-cursor-integration-flow.md` | Idem | Idem |
 
 **Total : 13 fichiers / groupes à déplacer** (sur ~20 livrables documentaires hors runtime JSON).
@@ -235,7 +237,7 @@ docs/tooling/mcp/                          ← Hub architecture outillage MCP /
   sfia-3-gates-and-stop-conditions.md
   README.md                                ← (à créer) index hub → bus runtime
 
-prompts/tooling/mcp/                       ← Prompts cycle SFIA 3.0
+method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)                       ← Prompts cycle SFIA 3.0
   sfia-3-cycle-router.md
   sfia-3-task-builder.md
   sfia-3-report-analyzer.md
@@ -297,9 +299,9 @@ method/sfia-fast-track/documentation/capitalization/
 | # | Décision |
 |---|----------|
 | 1 | Valider la cartographie cible §8 |
-| 2 | Autoriser le déplacement des 4 prompts vers `prompts/tooling/mcp/` (+ morris-gate → governance) |
+| 2 | Autoriser le déplacement des 4 prompts vers `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)` (+ morris-gate → governance) |
 | 3 | Autoriser le déplacement des 2 templates vers `docs/templates/` |
-| 4 | Autoriser le déplacement des rapports `.md` vers `method/.../capitalization/sfia-v3/` |
+| 4 | Autoriser le déplacement des rapports `.md` vers `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/` |
 | 5 | Créer le hub `docs/tooling/mcp/README.md` (index) |
 | 6 | Décider si `sfia-3-orchestration-doctrine.md` reste `docs/tooling/mcp/` ou migre vers `capitalization/sfia-v3/` |
 | 7 | Autoriser la PR de consolidation (hors scope immédiat) |
@@ -316,9 +318,9 @@ method/sfia-fast-track/documentation/capitalization/
 
 1. **Morris valide** cette cartographie (GO / ajustements).
 2. **Cycle DOC dédié** — déplacements uniquement (pas de code applicatif) :
-   - prompts → `prompts/tooling/mcp/`
+   - prompts → `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)`
    - templates → `docs/templates/`
-   - rapports `.md` → `method/.../capitalization/sfia-v3/`
+   - rapports `.md` → `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/`
 3. **Créer hub** `docs/tooling/mcp/README.md` liant doctrine, bus runtime, bridge, runner.
 4. **Mettre à jour** `prompts/prompt-catalog.md` (entrées SFIA 3.0).
 5. **Puis** reprendre test E2E ChatGPT ↔ Bridge ↔ Runner avec chemins canoniques.
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-pr-readiness-report.md b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-pr-readiness-report.md
similarity index 78%
rename from method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-pr-readiness-report.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-pr-readiness-report.md
index 4c1f3a0..6d57519 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-pr-readiness-report.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-pr-readiness-report.md
@@ -1,9 +1,11 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Rapport PR readiness (documentation / MCP)
 
 **Date :** 2026-07-08
 **Agent :** préparation PR readiness — **aucun commit, push ou PR créée**
 **Références :**
-- `method/.../sfia-3-documentation-routing-audit.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md`
 - `method/.../sfia-3-documentation-realignment-report.md`
 - `method/.../sfia-3-documentation-links-correction-report.md`
 
@@ -68,12 +70,12 @@ La trajectoire SFIA 3.0 est **complète en local** mais **non indexée** :
 ?? docs/templates/sfia-3-report-template.json
 ?? docs/templates/sfia-3-task-template.json
 ?? docs/tooling/mcp/
-?? method/sfia-fast-track/documentation/capitalization/sfia-3-documentation-routing-audit.md
-?? method/sfia-fast-track/documentation/capitalization/sfia-v3/
+?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
+?? method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/
 ?? projects/chantiers360-v2/app/test-results/
 ?? projects/interv360/03-design/exports/
-?? prompts/governance/sfia-3-morris-gate.md
-?? prompts/tooling/mcp/
+?? method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
+?? method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)
 ```
 
 ---
@@ -123,9 +125,9 @@ M	prompts/ux-ui/.gitkeep
 
 | Fichier | Statut |
 |---------|--------|
-| `docs/tooling/mcp/sfia-3-orchestration-doctrine.md` | untracked ✅ |
-| `docs/tooling/mcp/sfia-3-cycle-engine.md` | untracked ✅ |
-| `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md` | untracked ✅ |
 | `docs/tooling/mcp/sfia-mcp-v2-architecture.md` | untracked ✅ *(référence v2)* |
 | `docs/templates/sfia-3-task-template.json` | untracked ✅ *(contrat durable)* |
 | `docs/templates/sfia-3-report-template.json` | untracked ✅ *(contrat durable)* |
@@ -134,21 +136,21 @@ M	prompts/ux-ui/.gitkeep
 
 | Fichier | Statut |
 |---------|--------|
-| `prompts/tooling/mcp/sfia-3-cycle-router.md` | untracked ✅ |
-| `prompts/tooling/mcp/sfia-3-task-builder.md` | untracked ✅ |
-| `prompts/tooling/mcp/sfia-3-report-analyzer.md` | untracked ✅ |
-| `prompts/governance/sfia-3-morris-gate.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` | untracked ✅ |
 
 ### 6.3 Capitalisation SFIA v3 (`method/.../capitalization/`)
 
 | Fichier | Statut |
 |---------|--------|
-| `method/.../sfia-3-documentation-routing-audit.md` | untracked ✅ |
-| `method/.../sfia-v3/2026-07-07-sfia-3-opening-report.md` | untracked ✅ |
-| `method/.../sfia-v3/sfia-3-documentation-realignment-report.md` | untracked ✅ |
-| `method/.../sfia-v3/sfia-3-documentation-links-correction-report.md` | untracked ✅ |
-| `method/.../sfia-v3/sfia-3-pr-readiness-report.md` | untracked ✅ *(ce rapport)* |
-| `method/.../sfia-v3/experiments/*.md` (9 fichiers) | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-links-correction-report.md` | untracked ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-pr-readiness-report.md` | untracked ✅ *(ce rapport)* |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/*.md` (9 fichiers) | untracked ✅ |
 
 ### 6.4 Runtime `.sfia/mcp/` — à traiter avec prudence
 
@@ -232,10 +234,10 @@ M	prompts/ux-ui/.gitkeep
 
 | Emplacement attendu | Présent |
 |---------------------|---------|
-| `docs/tooling/mcp/sfia-3-*.md` | ✅ 3 fichiers |
-| `prompts/tooling/mcp/sfia-3-*.md` | ✅ 3 fichiers |
-| `prompts/governance/sfia-3-morris-gate.md` | ✅ |
-| `method/.../capitalization/sfia-v3/` | ✅ 13 fichiers `.md` |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/ (archived)` | ✅ 3 fichiers |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)sfia-3-*.md` | ✅ 3 fichiers |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` | ✅ |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/` | ✅ 13 fichiers `.md` |
 | `.sfia/mcp/prompts/` | ✅ Absent |
 | `.sfia/mcp/templates/` | ✅ Absent |
 
@@ -248,18 +250,18 @@ M	prompts/ux-ui/.gitkeep
 **23 fichiers** — documentation durable + contrats templates :
 
 ```text
-docs/tooling/mcp/sfia-3-orchestration-doctrine.md
-docs/tooling/mcp/sfia-3-cycle-engine.md
-docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md
+method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md
+method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md
+method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md
 docs/tooling/mcp/sfia-mcp-v2-architecture.md
 docs/templates/sfia-3-task-template.json
 docs/templates/sfia-3-report-template.json
-prompts/tooling/mcp/sfia-3-cycle-router.md
-prompts/tooling/mcp/sfia-3-task-builder.md
-prompts/tooling/mcp/sfia-3-report-analyzer.md
-prompts/governance/sfia-3-morris-gate.md
-method/sfia-fast-track/documentation/capitalization/sfia-3-documentation-routing-audit.md
-method/sfia-fast-track/documentation/capitalization/sfia-v3/**  (13 .md)
+method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md
+method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md
+method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md
+method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
+method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md
+method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/**  (13 .md)
 ```
 
 > **Note Morris :** les 2 templates JSON dans `docs/templates/` sont des **contrats durables** (déplacés depuis `.sfia/mcp/templates/` lors du réalignement). Ils ne sont pas des artefacts runtime — inclusion légitime dans la PR documentation.
@@ -415,10 +417,10 @@ feat(sfia-3): add orchestration docs, MCP bridge/server/runner, and prompts
 ```markdown
 ## Summary
 
-- Open SFIA 3.0 orchestration doctrine (`docs/tooling/mcp/sfia-3-*.md`)
-- Add reusable cycle prompts (`prompts/tooling/mcp/`, `prompts/governance/sfia-3-morris-gate.md`)
+- Open SFIA 3.0 orchestration doctrine (`method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/ (archived)`)
+- Add reusable cycle prompts (`method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)`, `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md`)
 - Add task/report JSON templates (`docs/templates/sfia-3-*.json`)
-- Capitalize routing audit, realignment, link correction, and experiment reports (`method/.../sfia-v3/`)
+- Capitalize routing audit, realignment, link correction, and experiment reports (`method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/`)
 
 ## Architecture rule
 
@@ -430,7 +432,7 @@ feat(sfia-3): add orchestration docs, MCP bridge/server/runner, and prompts
 - [ ] Verify all Markdown links resolve to canonical paths
 - [ ] Confirm no secrets in versioned files
 - [ ] Confirm `.sfia/mcp/reports/*.md` absent from repo
-- [ ] Git Reader can locate prompts under `prompts/tooling/mcp/`
+- [ ] Git Reader can locate prompts under `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)`
 - [ ] Morris review doctrine + gates before operational E2E
 ```
 
diff --git a/docs/tooling/mcp/sfia-3-cycle-engine.md b/method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md
similarity index 88%
rename from docs/tooling/mcp/sfia-3-cycle-engine.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md
index b5589db..398a4e0 100644
--- a/docs/tooling/mcp/sfia-3-cycle-engine.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Cycle Engine (moteur de cycle orchestré)
 
 **Type :** Architecture cycle
@@ -149,13 +151,13 @@ Extension future : sous GO Morris et mise à jour cycle-router.
 
 | Étape | Action | Artefact |
 |-------|--------|----------|
-| 1 | ChatGPT applique `prompts/tooling/mcp/sfia-3-cycle-router.md` | Choix DOC/MCP |
-| 2 | ChatGPT applique `prompts/tooling/mcp/sfia-3-task-builder.md` | JSON task |
+| 1 | ChatGPT applique `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md` | Choix DOC/MCP |
+| 2 | ChatGPT applique `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` | JSON task |
 | 3 | Bridge `POST /tasks` | `tasks/<id>.json` |
 | 4 | Morris lance `npm run once` ou `watch` | — |
 | 5 | Runner consomme | `reports/<id>.json` |
 | 6 | ChatGPT `GET /reports/latest` | Analyse |
-| 7 | ChatGPT applique `prompts/tooling/mcp/sfia-3-report-analyzer.md` | Décision cycle |
+| 7 | ChatGPT applique `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md` | Décision cycle |
 
 ---
 
@@ -191,8 +193,8 @@ Voir `sfia-3-gates-and-stop-conditions.md` pour le détail.
 ## 11. Références
 
 - `sfia-3-orchestration-doctrine.md`
-- `prompts/tooling/mcp/sfia-3-cycle-router.md`
-- `prompts/tooling/mcp/sfia-3-task-builder.md`
-- `prompts/tooling/mcp/sfia-3-report-analyzer.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md`
 - `docs/templates/sfia-3-task-template.json` *(contrat JSON — référence documentaire)*
 - `docs/templates/sfia-3-report-template.json` *(contrat JSON — référence documentaire)*
diff --git a/docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md b/method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md
similarity index 93%
rename from docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md
index 51ddc84..ff62a11 100644
--- a/docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Gates Morris et conditions d'arrêt
 
 **Type :** Politique gouvernance
@@ -116,7 +118,7 @@ Aligné sur handoffs MCP L2 :
 - Résolution via API (bridge n'expose pas `POST /gates/resolve`)
 - Suppression du gate sans trace dans `resolved/`
 
-Prompt de référence : `prompts/governance/sfia-3-morris-gate.md`
+Prompt de référence : `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md`
 
 ---
 
diff --git a/docs/tooling/mcp/sfia-3-orchestration-doctrine.md b/method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md
similarity index 86%
rename from docs/tooling/mcp/sfia-3-orchestration-doctrine.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md
index ce5f7f2..a570299 100644
--- a/docs/tooling/mcp/sfia-3-orchestration-doctrine.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Doctrine d'orchestration contrôlée
 
 **Type :** Doctrine outillage
@@ -96,7 +98,7 @@ SFIA v2.0 a **préparé les garde-fous**. SFIA 3.0 **ferme la boucle opérationn
 |-------------------|----------------------|----------------|
 | **SFIA Orchestrator Bridge** | `.sfia/mcp/bridge/` (code) + `docs/tooling/mcp/` (doctrine) | L2/L4 boundary |
 | **SFIA Cursor Task Runner** | `.sfia/mcp/runner/` (code) | L4 expérimental |
-| **Prompts cycle** | `prompts/tooling/mcp/`, `prompts/governance/sfia-3-morris-gate.md` | L2 |
+| **Prompts cycle** | `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)`, `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` | L2 |
 | **Templates (contrats JSON)** | `docs/templates/sfia-3-task-template.json`, `docs/templates/sfia-3-report-template.json` | L2 |
 
 ### 5.3 Cycle projet orchestré
@@ -171,15 +173,15 @@ Tout événement suivant **ouvre ou maintient** un gate — voir `sfia-3-gates-a
 ## 10. Références
 
 - `docs/tooling/mcp/sfia-mcp-v2-architecture.md`
-- `docs/tooling/mcp/sfia-3-cycle-engine.md`
-- `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md`
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`
 - `docs/tooling/mcp/sfia-mcp-v2-architecture.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md`
-- `prompts/tooling/mcp/sfia-3-cycle-router.md`
-- `prompts/tooling/mcp/sfia-3-task-builder.md`
-- `prompts/tooling/mcp/sfia-3-report-analyzer.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md`
 - `docs/templates/sfia-3-task-template.json` *(contrat JSON — référence documentaire)*
 - `docs/templates/sfia-3-report-template.json` *(contrat JSON — référence documentaire)*
 
diff --git a/prompts/governance/sfia-3-morris-gate.md b/method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
similarity index 87%
rename from prompts/governance/sfia-3-morris-gate.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
index fee1a28..09c8452 100644
--- a/prompts/governance/sfia-3-morris-gate.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Morris Gate (prompt générique)
 
 **Usage :** Morris — résolution manuelle gate ; ChatGPT — préparation escalade
@@ -105,5 +107,5 @@ Résolution manuelle Morris pour permettre le test ChatGPT ↔ Cursor via bridge
 
 ## Références
 
-- `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md`
 - `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.3
diff --git a/prompts/tooling/mcp/sfia-3-cycle-router.md b/method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md
similarity index 78%
rename from prompts/tooling/mcp/sfia-3-cycle-router.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md
index 6d9cf09..6d0df44 100644
--- a/prompts/tooling/mcp/sfia-3-cycle-router.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-cycle-router.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Cycle Router (prompt générique)
 
 **Usage :** ChatGPT — début de cycle orchestré
@@ -53,6 +55,6 @@ next_prompt: task-builder
 
 ## Références
 
-- `docs/tooling/mcp/sfia-3-cycle-engine.md` §7
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md` §7
 - `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
-- `prompts/tooling/mcp/sfia-3-task-builder.md` (étape suivante)
+- `method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md` (étape suivante)
diff --git a/prompts/tooling/mcp/sfia-3-report-analyzer.md b/method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md
similarity index 80%
rename from prompts/tooling/mcp/sfia-3-report-analyzer.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md
index 3f981e0..4b65d1a 100644
--- a/prompts/tooling/mcp/sfia-3-report-analyzer.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-report-analyzer.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Report Analyzer (prompt générique)
 
 **Usage :** ChatGPT — après lecture rapport via bridge ou MCP
@@ -77,5 +79,5 @@ Sinon : `cycle_closed: false` + action recommandée.
 ## Références
 
 - `docs/templates/sfia-3-report-template.json`
-- `docs/tooling/mcp/sfia-3-cycle-engine.md` §6
-- `prompts/governance/sfia-3-morris-gate.md` (si escalade)
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md` §6
+- `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md` (si escalade)
diff --git a/prompts/tooling/mcp/sfia-3-task-builder.md b/method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md
similarity index 85%
rename from prompts/tooling/mcp/sfia-3-task-builder.md
rename to method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md
index 0e12bf2..ebe7510 100644
--- a/prompts/tooling/mcp/sfia-3-task-builder.md
+++ b/method/sfia-fast-track/documentation/archive/sfia-v3/prompts/sfia-3-task-builder.md
@@ -1,3 +1,5 @@
+> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.
+
 # SFIA 3.0 — Task Builder (prompt générique)
 
 **Usage :** ChatGPT — construction task avant `POST /tasks`
@@ -76,4 +78,4 @@ Content-Type: application/json
 
 - `docs/templates/sfia-3-task-template.json`
 - `.sfia/mcp/bridge/README.md`
-- `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md`
+- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md`
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 96187c8..5e84b52 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -138,10 +138,13 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 | Champ | Contenu |
 |-------|---------|
 | **Volume exécution** | **23 fichiers** (trajectory SFIA v3.0) |
+| **Statut exécution** | **exécuté** — branche `archive/sfia-v2.6-lot-c-v3-mcp` (2026-07-12) |
+| **Cible archive** | `method/sfia-fast-track/documentation/archive/sfia-v3/` |
 | **Périmètre** | docs/tooling/mcp/sfia-3-* ; capitalization/sfia-v3/* ; sfia-3-documentation-routing-audit ; prompts v3 ; governance/sfia-3-morris-gate |
-| **Actions lot futur unique** | `git mv` vers `method/.../documentation/archive/sfia-v3/` ; lifecycle/trajectory ; refs directes ; contrôle non-réactivation |
+| **Actions exécutées** | `git mv` 23/23 ; bannières archive ; refs directes ; README archive |
 | **D10** | 23/23 non-conformités D10 = v3 → **Lot C exclusivement** |
 | **Gate** | Critical — Morris |
+| **active operational v3 refs** | **0** post-archivage |
 | **Archive non-v3 (204 total)** | **Hors Lot C** — 56 dans Lot 0 ; 148 dans autres lots (lot-G) |
 | **Archive total (`proposed_disposition`)** | **227** (dont 23 v3 Lot C) |
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-c-v3-mcp-archive-execution.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-c-v3-mcp-archive-execution.md
new file mode 100644
index 0000000..85b078c
--- /dev/null
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-c-v3-mcp-archive-execution.md
@@ -0,0 +1,129 @@
+# SFIA v2.6 — Lot C v3/MCP Archive Execution
+
+**Horodatage :** 2026-07-12 17:08 Europe/Paris  
+**Cycle :** Capitalisation / archivage documentaire  
+**Profil :** Critical  
+**GO Morris :** explicite — Lot C depuis `main` @ `2736de4944ff3747c8d69d64a0c4a01b6eede85e`  
+**Branche :** `archive/sfia-v2.6-lot-c-v3-mcp`
+
+---
+
+## 1. Manifeste Lot C (23/23)
+
+| # | Ancien chemin | Nouveau chemin |
+|---|---------------|----------------|
+| 1 | `docs/tooling/mcp/sfia-3-cycle-engine.md` | `method/.../archive/sfia-v3/doctrine/sfia-3-cycle-engine.md` |
+| 2 | `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md` | `method/.../archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md` |
+| 3 | `docs/tooling/mcp/sfia-3-orchestration-doctrine.md` | `method/.../archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md` |
+| 4 | `method/.../capitalization/sfia-3-documentation-routing-audit.md` | `method/.../archive/sfia-v3/capitalization/sfia-3-documentation-routing-audit.md` |
+| 5 | `method/.../capitalization/sfia-v3/2026-07-07-sfia-3-opening-report.md` | `method/.../archive/sfia-v3/capitalization/2026-07-07-sfia-3-opening-report.md` |
+| 6 | `method/.../capitalization/sfia-v3/2026-07-08-sfia-3-exploration-closure.md` | `method/.../archive/sfia-v3/capitalization/2026-07-08-sfia-3-exploration-closure.md` |
+| 7 | `method/.../capitalization/sfia-v3/2026-07-08-sfia-3-runtime-loop-validation.md` | `method/.../archive/sfia-v3/capitalization/2026-07-08-sfia-3-runtime-loop-validation.md` |
+| 8 | `method/.../capitalization/sfia-v3/sfia-3-documentation-links-correction-report.md` | `method/.../archive/sfia-v3/capitalization/sfia-3-documentation-links-correction-report.md` |
+| 9 | `method/.../capitalization/sfia-v3/sfia-3-documentation-realignment-report.md` | `method/.../archive/sfia-v3/capitalization/sfia-3-documentation-realignment-report.md` |
+| 10 | `method/.../capitalization/sfia-v3/sfia-3-pr-readiness-report.md` | `method/.../archive/sfia-v3/capitalization/sfia-3-pr-readiness-report.md` |
+| 11 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-cursor-integration-flow.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-cursor-integration-flow.md` |
+| 12 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-cursor-interactive-validation.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-cursor-interactive-validation.md` |
+| 13 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-e2e-v040-flow.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-e2e-v040-flow.md` |
+| 14 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-l2-handoff-experiment.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l2-handoff-experiment.md` |
+| 15 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md` |
+| 16 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md` |
+| 17 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-mcp-mvp-l1-experiment.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-mcp-mvp-l1-experiment.md` |
+| 18 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md` |
+| 19 | `method/.../capitalization/sfia-v3/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md` | `method/.../archive/sfia-v3/capitalization/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md` |
+| 20 | `prompts/governance/sfia-3-morris-gate.md` | `method/.../archive/sfia-v3/governance/sfia-3-morris-gate.md` |
+| 21 | `prompts/tooling/mcp/sfia-3-cycle-router.md` | `method/.../archive/sfia-v3/prompts/sfia-3-cycle-router.md` |
+| 22 | `prompts/tooling/mcp/sfia-3-report-analyzer.md` | `method/.../archive/sfia-v3/prompts/sfia-3-report-analyzer.md` |
+| 23 | `prompts/tooling/mcp/sfia-3-task-builder.md` | `method/.../archive/sfia-v3/prompts/sfia-3-task-builder.md` |
+
+**Commande :** `git mv` (R100) pour chaque fichier.  
+**Collisions :** aucune.  
+**Suppressions physiques :** **0**.
+
+---
+
+## 2. Structure d'archive
+
+```
+method/sfia-fast-track/documentation/archive/sfia-v3/
+  README.md
+  doctrine/          (3)
+  prompts/           (3)
+  governance/        (1)
+  capitalization/    (6 + experiments/ 10)
+```
+
+---
+
+## 3. Lifecycle / trajectory
+
+| Élément | Avant | Après |
+|---------|-------|-------|
+| lifecycle | archived (CSV) | archived — confirmé dans bannières |
+| trajectory | SFIA v3.0 | SFIA v3.0 — hors trajectoire courante |
+| usage | non-operational | consultation historique uniquement |
+| authority | informational / supporting | inchangée (historique) |
+
+---
+
+## 4. Références modifiées
+
+| Fichier | Action |
+|---------|--------|
+| 23 fichiers archivés | bannière archive + liens internes mis à jour vers chemins archive |
+| `sfia-v2.5-source-routing-map-candidate.md` | chemin sfia-v3 → archive |
+| `archive/sfia-v3/README.md` | **créé** — index archive |
+
+### Non modifiés (historiques / frozen)
+
+- CSV cartography frozen — chemins source historiques
+- `2026-07-11-sfia-v2.6-repository-read-only-audit.md` — photographie audit
+- `docs/tooling/mcp/sfia-mcp-v2-architecture.md` — **Lot E**, hors Lot C
+
+---
+
+## 5. Contrôle non-réactivation
+
+**active operational references to SFIA v3 / MCP / Bridge / Runner = 0**
+
+Occurrences restantes : archive interne, rapports historiques, CSV frozen, read-only audit photograph, `.sfia/` local untracked (runtime, hors dépôt).
+
+---
+
+## 6. Garde-fous
+
+| Contrôle | Résultat |
+|----------|----------|
+| Doctrine changed | **no** |
+| Canonical changed | **no** |
+| CSV SHA | `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` — **unchanged** |
+| CSV in diff | **no** |
+| Lot 0 | **closed** 76/76 |
+| Lot A | **closed** (PR #169 merged) |
+| Lot B | **not required** |
+| Lots D–J | **not started** |
+| SFIA v2.4 | **baseline** |
+| SFIA v2.6 | **candidate** |
+| SFIA v3 | **archived — non réactivé** |
+
+---
+
+## 7. Verdict
+
+```
+LOT C MANIFEST VERIFIED 23/23
+SFIA V3 TRAJECTORY ARCHIVED
+ACTIVE OPERATIONAL V3 REFERENCES ZERO
+NO PHYSICAL FILE DELETION
+NO DOCTRINE CHANGE
+CSV UNCHANGED
+PR OPEN — NOT MERGED
+```
+
+---
+
+## 8. Prochaine décision Morris
+
+1. PR readiness review (ChatGPT)
+2. GO merge séparé
+3. Lot D — non ouvert
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md
index ee68974..203d18d 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md
@@ -68,7 +68,7 @@ Il vise à éviter :
 | `prompts/prompt-catalog.md` | Catalogue prompts SFIA validés / historiques | Référence prompts existants ; **ne pas modifier** sans GO Morris | Génération nouveau prompt v2.5 (→ template Cycle 3) ; source opérationnelle par défaut v2.5 candidate | ChatGPT (lecture), Morris | Git only — protégé |
 | `docs/tooling/mcp/*` | Doctrine et tooling SFIA 3.0 / MCP | **Jamais** en trajectoire v2.5 courante | Tout cycle v2.5 sans réouverture explicite Morris | — | **Hors trajectoire** |
 | `.sfia/*` | Bridge, Runner, gates, tasks, reports automation | **Jamais** en trajectoire v2.5 courante | Tout cycle v2.5 sans réouverture explicite Morris | — | **Hors trajectoire** |
-| `method/sfia-fast-track/documentation/capitalization/sfia-v3/*` | Clôture et historique exploration SFIA 3.0 | Confirmation que v3 est gelé ; contexte décisionnel | Routage opérationnel v2.5 ; relance automation | Morris (lecture ponctuelle) | **Hors trajectoire** |
+| `method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/*` | Clôture et historique exploration SFIA 3.0 | Confirmation que v3 est gelé ; contexte décisionnel | Routage opérationnel v2.5 ; relance automation | Morris (lecture ponctuelle) | **Hors trajectoire** |
 
 ---
 
@@ -138,7 +138,7 @@ Il vise à éviter :
 
 Les éléments suivants sont **hors trajectoire courante SFIA v2.5** :
 
-- SFIA 3.0 — doctrine, exploration, clôture (`method/.../sfia-v3/`, `docs/tooling/mcp/`)
+- SFIA 3.0 — doctrine, exploration, clôture (`method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/`, `docs/tooling/mcp/`)
 - MCP Bridge / Runner / automation (`.sfia/`)
 - Templates JSON SFIA 3.0 (`docs/templates/sfia-3-*`)
 

```

## Verdict

```
LOT C MANIFEST VERIFIED 23/23
SFIA V3 TRAJECTORY ARCHIVED
ACTIVE OPERATIONAL V3 REFERENCES ZERO
NO PHYSICAL FILE DELETION
NO DOCTRINE CHANGE
CSV UNCHANGED
PR #171 OPEN — NOT MERGED
READY FOR CHATGPT PR READINESS REVIEW
MERGE REQUIRES SEPARATE MORRIS GO
```
