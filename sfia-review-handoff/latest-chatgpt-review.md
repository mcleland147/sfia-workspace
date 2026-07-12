---
status: temporary-review-handoff
cycle: PR readiness corrective — Lot A branch sync
profile: Critical
decision_scope: remise en cohérence PR #169 avec main post-PR #170
source_branch: migration/sfia-v2.6-lot-a-core
source_head: d630c6cd765a51617917a9869ee20814657e586f
main_base: 54b6646a15867477abd2c604adf2ce11c023859e
merge_base: 54b6646a15867477abd2c604adf2ce11c023859e
pr: 169
pr_merged: false
pr_state: open
pr_mergeable: true
old_head: 4281387658f463c1f863c49b8343ad60b53b058a
old_main: 8b604fbcd34994b25d3e96c5abba0b0144a780ba
pr_170_merge_commit: 54b6646a15867477abd2c604adf2ce11c023859e
pr_170_preserved: true
conflicts: none
changed_files: 20
rename_executed: true
old_basename: sfia-global-capitalization.md
new_basename: sfia-global-capitalization-reference.md
active_old_basename_references: 0
canonical_basename_corrected: true
doctrine_changed: false
canonical_promotion: none
canonical_authority_unchanged: true
file_deletions: 0
csv_sha: 00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275
csv_unchanged: true
lot_0_archive_status: closed
lot_a_scope: 6
lots_c_j: not_started
baseline: v2.4
candidate: v2.6
lot_a_untouched_scope: true
pr_170_regression: false
synthesis_only: no
closure_verdict: PR_169_READY_FOR_READINESS_REVIEW
---

# SFIA v2.6 — PR #169 Review Handoff (remise en cohérence)

**Date/heure :** 2026-07-12 16:55 Europe/Paris
**Cycle :** 13 — PR readiness corrective
**Profil :** Critical
**synthesis only = no**

## Instruction ChatGPT

Lire ce handoff puis vérifier : cycle, profil, branche, HEAD, base main, PR #169 mergeable, 20 fichiers, rename, références actives, CSV, canonical, PR #170 préservée, réserves, verdict.

## 1. État Git

| Élément | Valeur |
|---------|--------|
| PR | #169 — **OPEN** — **MERGEABLE** — **NOT MERGED** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/169 |
| Branche | `migration/sfia-v2.6-lot-a-core` |
| HEAD | `d630c6cd765a51617917a9869ee20814657e586f` |
| Ancien HEAD | `4281387658f463c1f863c49b8343ad60b53b058a` |
| Base main | `54b6646a15867477abd2c604adf2ce11c023859e` |
| merge-base | `54b6646a15867477abd2c604adf2ce11c023859e` |

## 2. Intégration main

| Élément | Valeur |
|---------|--------|
| Opération | `git merge --no-edit origin/main` |
| Conflits | **aucun** |
| PR #170 | **préservée** — lien cassé absent, contexte Interv360 présent |
| Commits ajoutés | merge `7d717a7` + rapport `d630c6c` |

## 3. Lot A (6 fichiers core)

1. `core/README.md` — modifié
2. `core/sfia-consolidation-roadmap.md` — modifié
3. `core/sfia-global-capitalization-reference.md` — **renamed**
4. `core/sfia-knowledge-layer.md` — modifié
5. `core/sfia-architecture-standards.md` — inchangé
6. `core/sfia-rules-update.md` — inchangé

## 4. Rename + canonical

| Élément | Valeur |
|---------|--------|
| Rename | `sfia-global-capitalization.md` → `sfia-global-capitalization-reference.md` |
| Authority | reference / reference |
| Active old basename | **0** |
| Canonical §8.1 | basename corrigé — doctrine **unchanged** |

## 5. Fichiers PR (20)

```
method/sfia-fast-track/README.md
method/sfia-fast-track/core/README.md
method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
method/sfia-fast-track/core/sfia-consolidation-roadmap.md
method/sfia-fast-track/core/sfia-global-capitalization-reference.md
method/sfia-fast-track/core/sfia-knowledge-layer.md
method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md
method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md
method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md
method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md
method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-a-core-execution.md
method/sfia-fast-track/documentation/documentation-audit.md
method/sfia-fast-track/documentation/documentation-structure-target.md
method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md
method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md
method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md
tools/cmp-001/config/sfia-v1-1-workspace.config.json
```

## 6. Commits (origin/main..HEAD)

```
d630c6c docs: record lot a branch sync with main after pr 170
7d717a7 Merge remote-tracking branch 'origin/main' into migration/sfia-v2.6-lot-a-core
4281387 docs: update canonical global capitalization reference
8678208 docs: complete lot a global capitalization rename
b87ef94 docs: record sfia v2.6 lot a execution
7b9bc1c docs: stabilize sfia lot a core references
```

## 7. Diff stat

```
method/sfia-fast-track/README.md                   |   2 +-
 method/sfia-fast-track/core/README.md              |  38 ++-
 .../core/sfia-chatgpt-cursor-operating-model.md    |   2 +-
 .../core/sfia-consolidation-roadmap.md             |  32 +--
 ....md => sfia-global-capitalization-reference.md} |  13 +-
 .../sfia-fast-track/core/sfia-knowledge-layer.md   |  11 +
 .../sfia-foundation-documents-audit.md             |   8 +-
 .../sfia-v1.1-p2-cross-reference-audit.md          |  14 +-
 .../sfia-foundation-v1.1-consolidation-plan.md     |   8 +-
 .../sfia-documentation-capitalization-audit.md     |   2 +-
 .../sfia-documentation-completeness-matrix.md      |   2 +-
 .../2026-07-11-sfia-v2.6-repository-cartography.md |  25 +-
 ...-11-sfia-v2.6-repository-migration-lots-plan.md |  12 +-
 .../2026-07-12-sfia-v2.6-lot-a-core-execution.md   | 273 +++++++++++++++++++++
 .../documentation/documentation-audit.md           |   6 +-
 .../documentation-structure-target.md              |   6 +-
 .../notion/sfia-notion-content-categorization.md   |   6 +-
 ...fia-notion-target-model-and-integration-plan.md |   2 +-
 .../workspace-audit/sfia-workspace-global-audit.md |   4 +-
 .../cmp-001/config/sfia-v1-1-workspace.config.json |   4 +-
 20 files changed, 405 insertions(+), 65 deletions(-)
```

## 8. Garde-fous

| Contrôle | Résultat |
|----------|----------|
| Doctrine changed | **no** |
| Canonical promotion | **none** |
| Physical deletions | **0** |
| CSV SHA | `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` |
| CSV in diff | **no** |
| Lot 0 | **closed** 76/76 |
| Lots C–J | **not started** |
| SFIA v2.4 | **baseline** |
| SFIA v2.6 | **candidate** |

## 9. Réserves hors périmètre

- `controlled-delivery-standard.md` — lien cassé
- `controlled-delivery-prompt-family.md` — lien cassé

## 10. Rapport exécution Lot A (contenu complet)

# SFIA v2.6 — Lot A Core Stabilization Execution

**Horodatage :** 2026-07-12 10:35 Europe/Paris  
**Cycle :** Capitalisation / stabilisation core  
**Profil :** Critical  
**GO Morris :** explicite — Lot A depuis `main` post-clôture Lot 0  
**Base Git :** `main` @ `8b604fbcd34994b25d3e96c5abba0b0144a780ba`  
**Branche :** `migration/sfia-v2.6-lot-a-core`

---

## 1. Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-lot-0-qualification.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-0-archive-completion-execution.md`
- Les 6 fichiers Lot A et leurs consommateurs directs

---

## 2. Manifeste Lot A (6 fichiers)

| # | Chemin | Authority | Usage CSV | Disposition CSV |
|---|--------|-----------|-----------|-----------------|
| 1 | `method/sfia-fast-track/core/README.md` | reference | non-operational | keep |
| 2 | `method/sfia-fast-track/core/sfia-architecture-standards.md` | reference | non-operational | keep |
| 3 | `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` | reference | non-operational | keep |
| 4 | `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | reference | non-operational | rename **executed** |
| 5 | `method/sfia-fast-track/core/sfia-knowledge-layer.md` | reference | unknown | keep |
| 6 | `method/sfia-fast-track/core/sfia-rules-update.md` | reference | non-operational | keep |

**Contrôles manifeste :** brut = 6 · doublons = 0 · canonical Lot 0 exclus = 3 · v3/MCP exclus · total = **6** ✓

---

## 3. Qualification par fichier

| Fichier | Observation | Écart démontré | Action | Modifié |
|---------|-------------|----------------|--------|---------|
| `core/README.md` | Index core sans distinction canonical/reference ni contexte v2.4/v2.6 | Navigation ambiguë post-Lot 0 | Ajout sections version + authority | **oui** |
| `sfia-architecture-standards.md` | Reference cohérente, placement conforme, pas de lien cassé interne | Aucun | Aucune | **non** |
| `sfia-consolidation-roadmap.md` | Chemins livrables obsolètes (réorg documentation, archive Lot 0, déplacement audit-rex) | 7 motifs de chemins invalides | Correction chemins actifs | **oui** |
| `sfia-global-capitalization-reference.md` | CSV propose rename ; nom ambigu sans suffixe `-reference` | Clarifier rôle reference vs capitalisation v2.6 | `git mv` + refs actives | **oui** (rename + status) |
| `sfia-knowledge-layer.md` | Usage `unknown` en CSV ; contenu actif (Routing Matrix) | Usage non documenté post-cartographie | Clarification usage + statut reference | **oui** |
| `sfia-rules-update.md` | Trace historique, renvois vers canonical OK | Aucun | Aucune | **non** |

---

## 4. Contrôle autorité documentaire

| Contrôle | Résultat |
|----------|----------|
| 3 canonical Lot 0 modifiés doctrinalement | **0** — operating-model : correction descriptive basename §8.1 uniquement ; routing-guide, rules-and-guardrails **inchangés** |
| 6 fichiers Lot A restent `reference` | ✓ |
| Nouveau canonical créé | **non** |
| SFIA v2.4 baseline | ✓ — explicitement tracé |
| SFIA v2.6 candidate | ✓ — ne remplace pas v2.4 |
| Promotion baseline v2.6 | **non** |

---

## 5. Modifications réalisées

### `core/README.md`

- Sections **SFIA version context** (v2.4 baseline / v2.6 candidate)
- Section **Document authority** (canonical lot-0 vs reference lot-A)
- Colonne authority dans la table documents

### `sfia-consolidation-roadmap.md`

Corrections de chemins (14 occurrences, 7 motifs) :

| Ancien chemin | Nouveau chemin |
|---------------|----------------|
| `projects/interv360/04-delivery/current-application-audit.md` | `projects/interv360/06-audit-rex/current-application-audit.md` |
| `method/sfia-fast-track/interv360-application-rex.md` | `method/sfia-fast-track/audit-rex/interv360-application-rex.md` |
| `method/sfia-fast-track/documentation-audit.md` | `method/sfia-fast-track/documentation/documentation-audit.md` |
| `method/sfia-fast-track/documentation-structure-target.md` | `method/sfia-fast-track/documentation/documentation-structure-target.md` |
| `method/sfia-fast-track/notion-publication-plan.md` | `method/sfia-fast-track/documentation/archive/notion/notion-publication-plan.md` |
| `method/sfia-fast-track/sfia-rules-update.md` | `method/sfia-fast-track/core/sfia-rules-update.md` |
| `method/sfia-fast-track/sfia-architecture-standards.md` | `method/sfia-fast-track/core/sfia-architecture-standards.md` |

### `sfia-global-capitalization-reference.md` *(rename Lot A corrective)*

- **Ancien chemin :** `method/sfia-fast-track/core/sfia-global-capitalization.md`
- **Nouveau chemin :** `method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
- **Commande :** `git mv` (R100, contenu préservé)
- **Justification nom :** suffixe `-reference` explicite le rôle `reference` / preuve opérationnelle ; cohérent avec `sfia-rules-update.md` (trace historique) ; évite confusion avec docs `documentation/capitalization/sfia-v2.6/`
- **Authority avant/après :** `reference` / `reference`
- **Disposition :** `keep` (rename physique uniquement)
- Bloc **SFIA v2.6 cartography status** mis à jour — rename executed

### `sfia-knowledge-layer.md`

- Bloc **SFIA v2.6 cartography status** — usage clarifié, reference active Routing Matrix

---

## 6. Fichiers non modifiés

| Fichier | Justification |
|---------|---------------|
| `sfia-architecture-standards.md` | Placement conforme ; contenu reference cohérent ; aucun lien interne cassé |
| `sfia-rules-update.md` | Statut historique déjà explicite ; renvois canonical corrects |

---

## 7. Références

### Analysées

- Entrantes : README core, standards README, notion categorization, automation engines, templates Notion, cartography docs
- Sortantes : consolidation-roadmap (corrigées), knowledge-layer (archive notion paths déjà corrects post-Lot 0)

### Corrigées

- 14 références de chemins dans `sfia-consolidation-roadmap.md`
- Navigation authority dans `core/README.md`

### Réserve controlled-delivery — résolue par PR #170 (mergée)

- Lien cassé `inc-01-phase-2-rex.md` supprimé de `method/complementary/controlled-delivery/README.md` via PR #170 @ `54b6646`
- Intégré dans la branche PR #169 par merge `origin/main` @ 2026-07-12 16:53 Europe/Paris
- Contexte Interv360 INC-01 phase 2 **préservé**

### Canonical Lot 0 — basename corrigé (GO Morris 2026-07-12 11:24)

- `sfia-chatgpt-cursor-operating-model.md` §8.1 — mention descriptive : `sfia-global-capitalization-reference.md` §13

---

## 8. Contrôles

| Contrôle | Résultat |
|----------|----------|
| Fichiers Lot A modifiés | **5/6** (4 stabilisation + 1 rename) |
| Fichiers Lot A analysés | **6/6** |
| Canonical promotion | **none** |
| Physical deletions | **0** |
| CSV SHA | `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` inchangé |
| Lot 0 archive | **closed** (76/76) |
| Lot B | **not required** |
| Lots C–J | **not started** |

---

## 9. Risques et réserves

- CSV conserve le chemin historique `sfia-global-capitalization.md` — snapshot frozen ; divergence physique documentée.
- Liens cassés similaires dans `controlled-delivery-standard.md` et `controlled-delivery-prompt-family.md` — **hors périmètre Lot A**.

---

## 13. Canonical basename reference corrective (GO Morris 2026-07-12 11:24)

**Horodatage :** 2026-07-12 11:24 Europe/Paris
**Fichier :** `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
**Section :** §8.1 Prompts types (référence)
**Classification :** `CANONICAL OCCURRENCE CONFIRMED — DESCRIPTIVE REFERENCE ONLY`

| Élément | Valeur |
|---------|--------|
| Avant | `Extraits de \`sfia-global-capitalization.md\` §13 :` |
| Après | `Extraits de \`sfia-global-capitalization-reference.md\` §13 :` |
| Modification doctrinale | **aucune** — substitution basename uniquement |
| Authority canonical | **inchangée** |
| Références actives ancien basename | **0** |
| Réserve canonical basename | **closed** |
| Lien controlled-delivery | **closed** — PR #170 mergée et intégrée |

---

## 12. Corrective rename — Global Capitalization (GO Morris 2026-07-12 11:07)

**Horodatage :** 2026-07-12 11:07 Europe/Paris
**GO Morris :** traitement immédiat dans PR #169

### Qualification du nom

| Nom candidat | Avantages | Risques | Cohérence | Verdict |
|--------------|-----------|---------|-----------|---------|
| `sfia-global-capitalization-reference.md` | Rôle reference explicite ; convention `sfia-*` core ; distinct des rapports v2.6 | Nom plus long | **Élevée** | **RETENU** |
| `YYYY-MM-DD-sfia-global-capitalization.md` | Proposé CSV | Style archive/date ; hors convention core active | Faible | Rejeté |
| `sfia-global-capitalization-evidence.md` | Rôle preuve opérationnelle | Moins aligné avec disposition CSV `rename`→reference | Moyenne | Rejeté |

**Verdict :** `TARGET NAME CONFIRMED — REFERENCE ROLE PRESERVED`

### Références actives corrigées (15 fichiers)

- `method/sfia-fast-track/core/README.md`
- `method/sfia-fast-track/core/sfia-consolidation-roadmap.md`
- `method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
- `method/sfia-fast-track/README.md`
- `method/sfia-fast-track/documentation/documentation-audit.md`
- `method/sfia-fast-track/documentation/documentation-structure-target.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md`
- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md`
- `tools/cmp-001/config/sfia-v1-1-workspace.config.json`

### Occurrences historiques conservées (non modifiées)

- CSV frozen — chemin source historique
- `documentation/archive/**` — snapshots et inventaires archivés
- `2026-07-11-sfia-v2.6-repository-read-only-audit.md` — photographie audit
- Rapports v2.6 et migration-lots-plan — traçabilité rename old→new

### Statut réserve rename

**Fermée** — rename exécuté ; Lot D ne possède plus ce rename.

---

## 10. Verdict (actualisé)

```
LOT A CORE STABILIZATION READY
LOT A GLOBAL CAPITALIZATION RENAME COMPLETE
CANONICAL BASENAME REFERENCE CORRECTED
TARGET NAME CONFIRMED — REFERENCE ROLE PRESERVED
ACTIVE OLD BASENAME REFERENCES 0
RENAME RESERVE FULLY CLOSED
6 OF 6 LOT A FILES QUALIFIED
5 OF 6 LOT A FILES UPDATED OR RENAMED
RENAME RESERVE CLOSED
NO CANONICAL PROMOTION
LOT 0 CANONICAL FILES UNCHANGED
CSV UNCHANGED
PR #169 BRANCH UPDATED WITH CURRENT MAIN
PR #170 MERGE PRESERVED
LOT A SCOPE PRESERVED
NO CONFLICTS
CSV UNCHANGED
PR #169 OPEN — NOT MERGED
```

---

## 14. Remise en cohérence avec main (GO Morris 2026-07-12 16:53)

**Horodatage :** 2026-07-12 16:53 Europe/Paris
**Opération :** `git merge --no-edit origin/main` sur `migration/sfia-v2.6-lot-a-core`
**Ancien HEAD branche :** `4281387658f463c1f863c49b8343ad60b53b058a`
**Ancienne base PR :** `8b604fbcd34994b25d3e96c5abba0b0144a780ba`
**Nouveau main :** `54b6646a15867477abd2c604adf2ce11c023859e` (merge PR #170)
**Nouveau HEAD branche :** `7d717a744d84b4fdb21c4b81ad5cc0daa6788e2b`

| Élément | Résultat |
|---------|----------|
| Conflits | **aucun** |
| Fichier intégré depuis main | `method/complementary/controlled-delivery/README.md` (PR #170) |
| PR #170 préservée | **oui** — lien cassé absent, contexte Interv360 présent |
| Périmètre Lot A | **préservé** — 20 fichiers PR inchangés |
| Mergeable PR #169 | **oui** |
| Doctrine changed | **non** |
| CSV | **unchanged** |

---

## 11. Prochaine décision Morris

1. PR readiness review (ChatGPT) sur PR #169 @ HEAD actualisé
2. GO merge séparé
3. Liens controlled-delivery restants (`standard.md`, `prompt-family.md`) — traitement ultérieur si souhaité


## 11. Diff complet (origin/main...HEAD)

```diff
diff --git a/method/sfia-fast-track/README.md b/method/sfia-fast-track/README.md
index 388e22a..3354a4e 100644
--- a/method/sfia-fast-track/README.md
+++ b/method/sfia-fast-track/README.md
@@ -36,7 +36,7 @@ method/sfia-fast-track/
 
 Normative reference: `docs/foundation/sfia-engineering-principles.md`
 
-- `sfia-global-capitalization.md`
+- `sfia-global-capitalization-reference.md`
 - `sfia-rules-update.md`
 - `sfia-architecture-standards.md`
 - `sfia-consolidation-roadmap.md`
diff --git a/method/sfia-fast-track/core/README.md b/method/sfia-fast-track/core/README.md
index a5b76ba..1d07d5d 100644
--- a/method/sfia-fast-track/core/README.md
+++ b/method/sfia-fast-track/core/README.md
@@ -2,24 +2,38 @@
 
 This folder contains the operational foundation documents of the SFIA Fast Track method.
 
+## SFIA version context
+
+| Version | Role |
+|---------|------|
+| **SFIA v2.4** | **Baseline** opérationnelle actuelle |
+| **SFIA v2.6** | **Candidate** — cartographie et trajectoire capitalisation ; ne remplace pas v2.4 |
+
+## Document authority
+
+| Tier | Documents | Lot cartography | Physical change |
+|------|-----------|-----------------|-----------------|
+| **Canonical** | `sfia-chatgpt-cursor-operating-model.md`, `sfia-rules-and-guardrails.md`, `sfia-cycle-routing-guide.md` | lot-0 | Lot 0 — confirmed, unchanged |
+| **Core reference** | Six documents Lot A (table below, excluding canonical trio) | lot-A | Stabilisation — **no canonical promotion** |
+
 ## Documents
 
-| Document | Role |
-|----------|------|
-| `docs/foundation/sfia-engineering-principles.md` | Normative SFIA engineering principles (foundation v1.1) |
-| `sfia-global-capitalization.md` | Global capitalization of SFIA Fast Track |
-| `sfia-rules-update.md` | Historical rules and Fast Track refinements |
-| `sfia-architecture-standards.md` | Architecture standards |
-| `sfia-consolidation-roadmap.md` | Consolidation roadmap post-Interv360 |
-| `sfia-chatgpt-cursor-operating-model.md` | ChatGPT ↔ Cursor operating model |
-| `sfia-rules-and-guardrails.md` | Canonical SFIA rules and guardrails |
-| `sfia-knowledge-layer.md` | SFIA knowledge layer, Documentation Routing Matrix and Notion positioning |
-| `sfia-cycle-routing-guide.md` | Guide de routage des cycles SFIA : sélection des références, templates, validations et décisions selon le type de cycle méthode ou projet |
+| Document | Role | Authority |
+|----------|------|-----------|
+| `docs/foundation/sfia-engineering-principles.md` | Normative SFIA engineering principles (foundation v1.1) | foundation |
+| `sfia-global-capitalization-reference.md` | Global capitalization — operational proof (historical trace) | reference |
+| `sfia-rules-update.md` | Historical rules and Fast Track refinements — superseded by `sfia-rules-and-guardrails.md` for live rules | reference |
+| `sfia-architecture-standards.md` | Architecture standards | reference |
+| `sfia-consolidation-roadmap.md` | Consolidation roadmap post-Interv360 | reference |
+| `sfia-chatgpt-cursor-operating-model.md` | ChatGPT ↔ Cursor operating model | **canonical** |
+| `sfia-rules-and-guardrails.md` | Canonical SFIA rules and guardrails | **canonical** |
+| `sfia-knowledge-layer.md` | SFIA knowledge layer, Documentation Routing Matrix and Notion positioning | reference |
+| `sfia-cycle-routing-guide.md` | Guide de routage des cycles SFIA : sélection des références, templates, validations et décisions selon le type de cycle méthode ou projet | **canonical** |
 
 ## Reading order (foundation v1.1)
 
 1. `docs/foundation/sfia-engineering-principles.md` — normative execution principles
-2. `sfia-global-capitalization.md` — operational proof and principles
+2. `sfia-global-capitalization-reference.md` — operational proof and principles
 3. `sfia-chatgpt-cursor-operating-model.md` — ChatGPT ↔ Cursor loop
 4. `sfia-rules-and-guardrails.md` — canonical rules and guardrails
 5. `sfia-knowledge-layer.md` — knowledge layer and Documentation Routing Matrix
diff --git a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
index b3fe296..b15c93c 100644
--- a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
+++ b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
@@ -292,7 +292,7 @@ Résultat attendu :
 
 ### 8.1. Prompts types (référence)
 
-Extraits de `sfia-global-capitalization.md` §13 :
+Extraits de `sfia-global-capitalization-reference.md` §13 :
 
 **Début de cycle :**
 
diff --git a/method/sfia-fast-track/core/sfia-consolidation-roadmap.md b/method/sfia-fast-track/core/sfia-consolidation-roadmap.md
index da9a11c..020b91f 100644
--- a/method/sfia-fast-track/core/sfia-consolidation-roadmap.md
+++ b/method/sfia-fast-track/core/sfia-consolidation-roadmap.md
@@ -67,7 +67,7 @@ Analyser l'état réel de l'application Interv360 après MVP + Premium UI.
 
 Livrable attendu :
 
-`projects/interv360/04-delivery/current-application-audit.md`
+`projects/interv360/06-audit-rex/current-application-audit.md`
 
 Décision attendue :
 
@@ -81,7 +81,7 @@ Audit réalisé et intégré à `main`.
 
 Livrable :
 
-`projects/interv360/04-delivery/current-application-audit.md`
+`projects/interv360/06-audit-rex/current-application-audit.md`
 
 Décision :
 
@@ -112,7 +112,7 @@ Produire un retour d'expérience honnête sur la trajectoire Interv360.
 
 Livrable attendu :
 
-`method/sfia-fast-track/interv360-application-rex.md`
+`method/sfia-fast-track/audit-rex/interv360-application-rex.md`
 
 ### Statut
 
@@ -120,7 +120,7 @@ REX réalisé et intégré à `main`.
 
 Livrable :
 
-`method/sfia-fast-track/interv360-application-rex.md`
+`method/sfia-fast-track/audit-rex/interv360-application-rex.md`
 
 Décision :
 
@@ -149,7 +149,7 @@ Capitaliser la méthode SFIA au-delà d'Interv360.
 
 Livrable attendu :
 
-`method/sfia-fast-track/core/sfia-global-capitalization.md`
+`method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
 
 ### Statut
 
@@ -157,7 +157,7 @@ Capitalisation SFIA globale réalisée et intégrée à `main`.
 
 Livrables :
 
-- `method/sfia-fast-track/core/sfia-global-capitalization.md`
+- `method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
 - `method/sfia-fast-track/automation/sfia-automation-architecture.md`
 
 Décision :
@@ -189,9 +189,9 @@ Analyser toute la documentation existante et améliorer sa cohérence.
 
 Livrables attendus :
 
-- `method/sfia-fast-track/documentation-audit.md`
-- `method/sfia-fast-track/documentation-structure-target.md`
-- `method/sfia-fast-track/notion-publication-plan.md`
+- `method/sfia-fast-track/documentation/documentation-audit.md`
+- `method/sfia-fast-track/documentation/documentation-structure-target.md`
+- `method/sfia-fast-track/documentation/archive/notion/notion-publication-plan.md`
 
 Important :
 
@@ -203,9 +203,9 @@ Revue documentaire réalisée et intégrée à `main`.
 
 Livrables :
 
-- `method/sfia-fast-track/documentation-audit.md`
-- `method/sfia-fast-track/documentation-structure-target.md`
-- `method/sfia-fast-track/notion-publication-plan.md`
+- `method/sfia-fast-track/documentation/documentation-audit.md`
+- `method/sfia-fast-track/documentation/documentation-structure-target.md`
+- `method/sfia-fast-track/documentation/archive/notion/notion-publication-plan.md`
 
 Décision :
 
@@ -245,8 +245,8 @@ Axes possibles :
 
 Livrables possibles :
 
-- `method/sfia-fast-track/sfia-rules-update.md`
-- `method/sfia-fast-track/sfia-architecture-standards.md`
+- `method/sfia-fast-track/core/sfia-rules-update.md`
+- `method/sfia-fast-track/core/sfia-architecture-standards.md`
 - `method/sfia-fast-track/automation/sfia-automation-architecture.md`
 - `method/sfia-fast-track/templates/`
 - `method/sfia-fast-track/checklists/`
@@ -265,8 +265,8 @@ Objectif :
 
 Livrables :
 
-- `method/sfia-fast-track/sfia-rules-update.md`
-- `method/sfia-fast-track/sfia-architecture-standards.md`
+- `method/sfia-fast-track/core/sfia-rules-update.md`
+- `method/sfia-fast-track/core/sfia-architecture-standards.md`
 - `method/sfia-fast-track/README.md`
 - `method/sfia-fast-track/templates/cycle-template.md`
 - `method/sfia-fast-track/templates/pr-body-template.md`
diff --git a/method/sfia-fast-track/core/sfia-global-capitalization.md b/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
similarity index 94%
rename from method/sfia-fast-track/core/sfia-global-capitalization.md
rename to method/sfia-fast-track/core/sfia-global-capitalization-reference.md
index bdf002a..7b410f2 100644
--- a/method/sfia-fast-track/core/sfia-global-capitalization.md
+++ b/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
@@ -27,6 +27,17 @@ Le rôle de ce document est de préserver la preuve opérationnelle que le cycle
 
 Le contenu historique ci-dessous reste inchangé à des fins de traçabilité.
 
+## SFIA v2.6 cartography status
+
+| Élément | Statut |
+|---------|--------|
+| Cartography tag | `lot-A` |
+| Authority | **reference** — operational proof, not canonical |
+| Proposed disposition (CSV) | `rename` — **executed** Lot A → `sfia-global-capitalization-reference.md` |
+| Physical path | `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` |
+| SFIA v2.4 | **Baseline** opérationnelle |
+| SFIA v2.6 | **Candidate** — ne remplace pas v2.4 |
+
 ## 1. Objectif
 
 Ce document capitalise la méthode SFIA Fast Track au-delà du seul cas Interv360.
@@ -356,7 +367,7 @@ La PR de capitalisation SFIA globale et vision d'automatisation a été mergée
 | Commit d'intégration | `254744f` |
 | Statut | Mergé |
 | Type | Documentation méthode / capitalisation globale |
-| Livrables | `sfia-global-capitalization.md`, `sfia-automation-architecture.md` |
+| Livrables | `sfia-global-capitalization-reference.md`, `sfia-automation-architecture.md` |
 | Code Interv360 | Non modifié |
 | Backend / API / CI | Inchangés |
 | `sfia-notion-sync` | Non modifié |
diff --git a/method/sfia-fast-track/core/sfia-knowledge-layer.md b/method/sfia-fast-track/core/sfia-knowledge-layer.md
index e2bf4c7..1a4b5d7 100644
--- a/method/sfia-fast-track/core/sfia-knowledge-layer.md
+++ b/method/sfia-fast-track/core/sfia-knowledge-layer.md
@@ -13,6 +13,17 @@ scope: knowledge layer
 **Updated after:** SFIA foundation v1.1 consolidation  
 **Scope:** Knowledge layer
 
+## SFIA v2.6 cartography status
+
+| Élément | Statut |
+|---------|--------|
+| Cartography tag | `lot-A` |
+| Authority | **reference** — active Documentation Routing Matrix |
+| Usage (cartography) | Clarified: **non-operational reference** for routing and Notion preparation rules |
+| SFIA v2.4 | **Baseline** opérationnelle |
+| SFIA v2.6 | **Candidate** — ne remplace pas v2.4 |
+| Canonical promotion | **none** — complements `sfia-rules-and-guardrails.md` and operating model |
+
 ## 1. Objectif
 
 Ce document définit la couche knowledge SFIA v1.1.
diff --git a/method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md b/method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md
index 5441b26..c41222f 100644
--- a/method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md
+++ b/method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md
@@ -60,7 +60,7 @@ Les fondations sont **identifiées** et **localisables** — elles ne sont pas e
 
 | Statut | Documents sources | Commentaire |
 |--------|-------------------|-------------|
-| **Partiel** | `docs/architecture/sfia-platform-architecture.md` (vision plateforme) ; `method/sfia-fast-track/core/sfia-global-capitalization.md` (vision Fast Track opérationnelle) ; `docs/foundation/sfia-engineering-principles.md` | Deux couches : vision plateforme (Notion) vs vision méthode pilote (Git). Cohérentes mais non fusionnées |
+| **Partiel** | `docs/architecture/sfia-platform-architecture.md` (vision plateforme) ; `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` (vision Fast Track opérationnelle) ; `docs/foundation/sfia-engineering-principles.md` | Deux couches : vision plateforme (Notion) vs vision méthode pilote (Git). Cohérentes mais non fusionnées |
 
 ### 5.2. Platform Architecture
 
@@ -78,7 +78,7 @@ Les fondations sont **identifiées** et **localisables** — elles ne sont pas e
 
 | Statut | Documents sources | Commentaire |
 |--------|-------------------|-------------|
-| **OK** | `docs/architecture/sfia-delivery-pipeline.md` ; `method/sfia-fast-track/core/sfia-global-capitalization.md` ; `method/sfia-fast-track/cycles/` ; templates `cycle-template.md`, `mvp-delivery-pattern-template.md` | Pipeline conceptuel + preuve opérationnelle Interv360 |
+| **OK** | `docs/architecture/sfia-delivery-pipeline.md` ; `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` ; `method/sfia-fast-track/cycles/` ; templates `cycle-template.md`, `mvp-delivery-pattern-template.md` | Pipeline conceptuel + preuve opérationnelle Interv360 |
 
 ### 5.5. Domain Model
 
@@ -108,7 +108,7 @@ Les fondations sont **identifiées** et **localisables** — elles ne sont pas e
 
 | Statut | Documents sources | Commentaire |
 |--------|-------------------|-------------|
-| **Partiel** | `sfia-automation-architecture.md` §2–3, §13 ; `sfia-global-capitalization.md` §13 ; `ui/figma-design-first-ui-method.md` (prompt Cursor UI) ; `archive/interv360-realization/realization-prompt-family.md` | Boucle décrite mais **pas de document canonique** `sfia-chatgpt-cursor-operating-model.md` |
+| **Partiel** | `sfia-automation-architecture.md` §2–3, §13 ; `sfia-global-capitalization-reference.md` §13 ; `ui/figma-design-first-ui-method.md` (prompt Cursor UI) ; `archive/interv360-realization/realization-prompt-family.md` | Boucle décrite mais **pas de document canonique** `sfia-chatgpt-cursor-operating-model.md` |
 
 ### 5.10. Repository Execution
 
@@ -163,7 +163,7 @@ Les fondations sont **identifiées** et **localisables** — elles ne sont pas e
 | `sfia-domain-model.md` | Concepts métier | **Existe** — vérifier objets CMP |
 | `sfia-metamodel.md` | Modèle artefacts, cycles, rôles | **Existe** — mapper repo |
 | `sfia-rules-and-guardrails.md` | Règles fondamentales unifiées | `sfia-engineering-principles.md` + `sfia-rules-update.md` + `guardrails-checklist.md` |
-| `sfia-chatgpt-cursor-operating-model.md` | Modèle d'échange ChatGPT ↔ Cursor | `sfia-automation-architecture.md` §2–3, `sfia-global-capitalization.md` §13 |
+| `sfia-chatgpt-cursor-operating-model.md` | Modèle d'échange ChatGPT ↔ Cursor | `sfia-automation-architecture.md` §2–3, `sfia-global-capitalization-reference.md` §13 |
 | `sfia-prompt-generation-engine.md` | Spec moteur prompts | `sfia-automation-architecture.md` §5.5 + `prompt-catalog.md` |
 | `sfia-repository-execution-engine.md` | Spec exécution repo | `sfia-repository-blueprint.md` + règles PR/post-merge |
 | `sfia-validation-engine.md` | Spec contrôles GO/NO-GO | `sfia-automation-architecture.md` §5.7 + checklists |
diff --git a/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md b/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md
index 03df1ee..1ab8ccf 100644
--- a/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md
+++ b/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md
@@ -28,7 +28,7 @@ Il produit une recommandation d'action claire pour les cycles P2.1 et P2.2.
 
 | Document | Chemin réel |
 |----------|-------------|
-| Global Capitalization | `method/sfia-fast-track/core/sfia-global-capitalization.md` |
+| Global Capitalization | `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` |
 | Rules Update | `method/sfia-fast-track/core/sfia-rules-update.md` |
 | Architecture README | `docs/architecture/README.md` |
 | Completeness Matrix | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` |
@@ -85,7 +85,7 @@ Les actifs suivants constituent le référentiel opérationnel v1.1 que les docu
 
 | Document | Current role | Current state | v1.1 gap | Recommended action | Priority |
 |----------|--------------|---------------|----------|--------------------|----------|
-| `sfia-global-capitalization.md` | Preuve opérationnelle Interv360 ; synthèse Fast Track pré-v1.1 | Substantiel (~340 lignes) ; merge status PR #79 ; §16 pointe uniquement vers Automation Architecture | Aucune mention v1.1 ; pas de cross-réfs Operating Model, Knowledge Layer, Rules & Guardrails, moteurs P1, Validation Checklist, Prompt Catalog, Prompt Templates, Engineering Principles, Decision Engine ; rôle normatif vs preuve opérationnelle non clarifié | Ajouter section **v1.1 Cross-References** + note de statut : *operational evidence / capitalization proof* — référence normative vivante = fondations v1.1 | **P1** |
+| `sfia-global-capitalization-reference.md` | Preuve opérationnelle Interv360 ; synthèse Fast Track pré-v1.1 | Substantiel (~340 lignes) ; merge status PR #79 ; §16 pointe uniquement vers Automation Architecture | Aucune mention v1.1 ; pas de cross-réfs Operating Model, Knowledge Layer, Rules & Guardrails, moteurs P1, Validation Checklist, Prompt Catalog, Prompt Templates, Engineering Principles, Decision Engine ; rôle normatif vs preuve opérationnelle non clarifié | Ajouter section **v1.1 Cross-References** + note de statut : *operational evidence / capitalization proof* — référence normative vivante = fondations v1.1 | **P1** |
 | `sfia-rules-update.md` | Trace historique des règles post-Interv360 | Substantiel (~167 lignes) ; §8 annonce règles exécutables pour futurs prompts/moteurs | Aucune mention v1.1 ; pas de renvoi vers `sfia-rules-and-guardrails.md` comme référence opérationnelle actuelle ; pas de renvoi vers Validation Checklist | Ajouter note de statut : *historical consolidation trace* ; pointer `sfia-rules-and-guardrails.md` comme référence opérationnelle ; cross-réf légère vers checklists v1.1 | **P1** |
 | `docs/architecture/README.md` | Index des 6 documents fondateurs architecture | 17 lignes ; liste les 6 fichiers sans versions | Pas de mention v1.1 ; pas de renvois Fast Track (Operating Model, moteurs P1, Validation Checklist, Prompt Catalog, Prompt Templates, Knowledge Layer) ; pas de lien Engineering Principles | Ajouter section **SFIA v1.1 Architecture References** ou **Related Fast Track References** | **P1** |
 | `sfia-documentation-completeness-matrix.md` | Matrice globale complétude documentaire | Datée 2026-07-03 ; branche `capitalization/sfia-documentation-completeness` ; terminologie SFA/SFIA mixte | Ne couvre pas les actifs v1.1 (Operating Model, Rules & Guardrails, Knowledge Layer, 3 moteurs P1, Validation Checklist, Prompt Catalog, Prompt Templates) ; §12 indique consolidation non terminée ; automation = 1 doc ; checklists = 3 legacy ; prompts = catalogue seul sans templates | Mettre à jour après P2.1 ; ajouter lignes v1.1 ; corriger statuts ; ajouter référence à cet audit ; §12 clôture v1.1 | **P1** |
@@ -103,14 +103,14 @@ Les actifs suivants constituent le référentiel opérationnel v1.1 que les docu
 
 ### Cross-reference gaps
 
-- `sfia-global-capitalization.md` ne référence que `sfia-automation-architecture.md` (§16) parmi les actifs v1.1.
+- `sfia-global-capitalization-reference.md` ne référence que `sfia-automation-architecture.md` (§16) parmi les actifs v1.1.
 - `sfia-rules-update.md` n'a aucun renvoi vers `sfia-rules-and-guardrails.md`.
 - `docs/architecture/README.md` isole les 6 référentiels sans lien vers la couche opérationnelle Fast Track v1.1.
 - Les 6 référentiels architecture eux-mêmes incluent déjà des sections v1.1 et des renvois Operating Model — l'écart est concentré sur l'index README et les docs core historiques.
 
 ### Status clarification gaps
 
-- `sfia-global-capitalization.md` peut être lu comme norme vivante alors qu'il documente une **preuve opérationnelle** Interv360 et une vision pré-consolidation.
+- `sfia-global-capitalization-reference.md` peut être lu comme norme vivante alors qu'il documente une **preuve opérationnelle** Interv360 et une vision pré-consolidation.
 - `sfia-rules-update.md` peut être lu comme référence opérationnelle actuelle alors que `sfia-rules-and-guardrails.md` est le document canonique v1.1.
 - Trois checklists legacy (`validation-checklist.md`, `guardrails-checklist.md`, `notion-publication-checklist.md`) coexistent avec `sfia-validation-checklist.md` sans statut explicite.
 
@@ -139,7 +139,7 @@ Les actifs suivants constituent le référentiel opérationnel v1.1 que les docu
 
 | Action | Files | Goal | Priority | Suggested commit |
 |--------|-------|------|----------|------------------|
-| Cross-références core historiques | `sfia-global-capitalization.md`, `sfia-rules-update.md` | Clarifier rôle historique ; pointer référentiel v1.1 | **P1** | `docs: add SFIA v1.1 cross-references` |
+| Cross-références core historiques | `sfia-global-capitalization-reference.md`, `sfia-rules-update.md` | Clarifier rôle historique ; pointer référentiel v1.1 | **P1** | `docs: add SFIA v1.1 cross-references` |
 | Index architecture v1.1 | `docs/architecture/README.md` | Relier référentiels architecture et couche Fast Track v1.1 | **P1** | (même commit P2.1) |
 | Mise à jour matrice complétude | `sfia-documentation-completeness-matrix.md` | Refléter actifs v1.1 ; corriger statuts ; terminologie SFIA | **P1** | `docs: update SFIA v1.1 capitalization indexes` |
 | Mise à jour audits capitalisation | `sfia-foundation-documents-audit.md`, `sfia-documentation-capitalization-audit.md` | Ajouter sections Update post-v1.1 ; repositionner décisions historiques | **P1** | (même commit P2.2) |
@@ -180,7 +180,7 @@ Les actifs suivants constituent le référentiel opérationnel v1.1 que les docu
 
 **Files :**
 
-- `method/sfia-fast-track/core/sfia-global-capitalization.md`
+- `method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
 - `method/sfia-fast-track/core/sfia-rules-update.md`
 - `docs/architecture/README.md`
 
@@ -244,7 +244,7 @@ docs: record SFIA foundation v1.1 closure
 ## 9. Réserves
 
 - Ne pas réécrire les documents historiques — ajouter cross-références et clarifications de rôle uniquement.
-- Conserver le détail historique de consolidation dans `sfia-rules-update.md` et `sfia-global-capitalization.md`.
+- Conserver le détail historique de consolidation dans `sfia-rules-update.md` et `sfia-global-capitalization-reference.md`.
 - Ne pas fusionner destructivement les checklists legacy dans P2 — clarification de statut suffit.
 - Ne pas créer `sfia-documentation-engine.md` en P2 sauf décision dédiée validée humainement.
 - Ne pas lancer de sync Notion ni publication Notion.
diff --git a/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md b/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md
index 6c7a6a6..4ea192a 100644
--- a/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md
@@ -64,7 +64,7 @@ Les enrichir avec les apprentissages issus :
 | Document | Version cible | Mise à jour attendue |
 |----------|---------------|----------------------|
 | `automation/sfia-automation-architecture.md` | **v1.1** | Marquer version ; renvoyer vers specs moteurs ; frontière v1.1 / v2.0 ; mettre à jour boucle ChatGPT ↔ Cursor |
-| `core/sfia-global-capitalization.md` | **v1.1** (cross-ref) | Ajouter renvois vers référentiels architecture v1.1 ; statut « preuve opérationnelle » |
+| `core/sfia-global-capitalization-reference.md` | **v1.1** (cross-ref) | Ajouter renvois vers référentiels architecture v1.1 ; statut « preuve opérationnelle » |
 | `core/sfia-rules-update.md` | **v1.1** (cross-ref) | Ajouter renvoi vers `sfia-rules-and-guardrails.md` ; conserver règles détaillées jusqu'à fusion P1 |
 
 **Convention de versionnement v1.1 :**
@@ -76,7 +76,7 @@ Les enrichir avec les apprentissages issus :
 
 | Document | Priorité | Objectif | Sources à consolider |
 |----------|----------|----------|----------------------|
-| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | **P0** | Décrire le mode opératoire ChatGPT ↔ Cursor | `sfia-automation-architecture.md` §2–3 ; `sfia-global-capitalization.md` §13 ; `figma-design-first-ui-method.md` |
+| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | **P0** | Décrire le mode opératoire ChatGPT ↔ Cursor | `sfia-automation-architecture.md` §2–3 ; `sfia-global-capitalization-reference.md` §13 ; `figma-design-first-ui-method.md` |
 | `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | **P1** | Consolider règles et garde-fous unifiées | `engineering-principles` + `rules-update` + `guardrails-checklist` |
 | `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | **P1** | Spec moteur génération prompts | `automation` §5.5 ; `prompt-catalog.md` |
 | `method/sfia-fast-track/automation/sfia-validation-engine.md` | **P1** | Spec moteur validation | `automation` §5.7 ; `validation-checklist` ; `guardrails-checklist` |
@@ -590,13 +590,13 @@ Recommended follow-up:
 
 The P2.1 cross-reference cycle has aligned the following documents with SFIA v1.1:
 
-- `method/sfia-fast-track/core/sfia-global-capitalization.md`
+- `method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
 - `method/sfia-fast-track/core/sfia-rules-update.md`
 - `docs/architecture/README.md`
 
 The update clarifies:
 
-- `sfia-global-capitalization.md` as operational evidence / capitalization proof;
+- `sfia-global-capitalization-reference.md` as operational evidence / capitalization proof;
 - `sfia-rules-update.md` as historical consolidation trace;
 - `sfia-rules-and-guardrails.md` as the current operational rules reference;
 - `docs/architecture/README.md` as the v1.1 architecture index connected to Fast Track references.
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md b/method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md
index 1b7ca4a..cd7da85 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md
@@ -63,7 +63,7 @@ Aucun manque structurel bloquant n'empêche d'ouvrir le chantier Notion — à c
 | `checklists/` | Validation, garde-fous, Notion | **OK** | 3 checklists — manque README index |
 | `archive/` | Méthode interv360-realization | **OK** | 8 fichiers historiques bien isolés |
 
-**Documents structurants lus** : `sfia-global-capitalization.md`, `sfia-rules-update.md`, `sfia-architecture-standards.md`, `sfia-automation-architecture.md`, `figma-design-first-ui-method.md`, `notion-target-content-map.md` — tous présents et cohérents avec la vision SFA.
+**Documents structurants lus** : `sfia-global-capitalization-reference.md`, `sfia-rules-update.md`, `sfia-architecture-standards.md`, `sfia-automation-architecture.md`, `figma-design-first-ui-method.md`, `notion-target-content-map.md` — tous présents et cohérents avec la vision SFA.
 
 ### 4.2. Méthodes complémentaires
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md b/method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md
index b135d27..67435e3 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md
@@ -69,7 +69,7 @@ L'objectif est de s'assurer que la méthode, les templates, les prompts, les pra
 
 | Domaine | Document attendu | Emplacement attendu | Statut | Commentaire |
 |---------|------------------|---------------------|--------|-------------|
-| Vision globale | Capitalisation globale SFIA | `method/sfia-fast-track/core/sfia-global-capitalization.md` | **OK** | Preuve opérationnelle Interv360 — cross-réfs v1.1 ajoutées (P2.1) |
+| Vision globale | Capitalisation globale SFIA | `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | **OK** | Preuve opérationnelle Interv360 — cross-réfs v1.1 ajoutées (P2.1) |
 | Règles méthode | Règles opérationnelles actuelles | `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | **OK** | Référence opérationnelle v1.1 |
 | Règles historiques | Trace consolidation règles | `method/sfia-fast-track/core/sfia-rules-update.md` | **OK** | Trace historique — cross-réfs v1.1 ajoutées (P2.1) |
 | Operating Model | Boucle ChatGPT ↔ Cursor | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | **OK** | Foundation v1.1 |
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
index 00984fa..0c1da55 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
@@ -1365,7 +1365,30 @@ Recalcul CSV validé contre rapport §2, §6, §19 et plan §3–§16 :
 | Cartography classification (CSV) | **frozen** — SHA `00a6902f…` inchangé |
 | CSV paths | **photographie initiale** — chemins historiques conservés |
 | Paths physically migrated (cumulative) | **76** — 9 + 67 |
-| Lot A–J | **not started** |
+| Lot A–J | **Lot A executed — pending merge** ; B–J **not started** |
+
+---
+
+## 24. Lot A Core Stabilization Execution
+
+**Horodatage :** 2026-07-12 10:35 Europe/Paris
+**Branche :** `migration/sfia-v2.6-lot-a-core`
+**Base :** `main` @ `8b604fbcd34994b25d3e96c5abba0b0144a780ba`
+**Volume :** **6** fichiers `lot-A` — core **reference**
+**Rapport :** `2026-07-12-sfia-v2.6-lot-a-core-execution.md`
+
+| Distinction | Statut |
+|-------------|--------|
+| Lot 0 Archive Execution | **closed** — 76/76 |
+| Lot A scope | **6/6** qualified |
+| Fichiers modifiés | **5/6** |
+| Rename global-capitalization | **executed** → `sfia-global-capitalization-reference.md` |
+| Lot D rename scope | **unchanged otherwise** — this rename no longer deferred to Lot D |
+| Canonical promotion | **none** |
+| Canonical Lot 0 (3) | **unchanged** |
+| CSV | **frozen** — SHA `00a6902f…` inchangé |
+| Lot B | **not required** |
+| Lots C–J | **not started** |
 
 ---
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index ed299b3..96187c8 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -96,7 +96,9 @@ Cartographie finale (PR #165)
 | **Rapport exécution completion** | `2026-07-12-sfia-v2.6-lot-0-archive-completion-execution.md` |
 | **Migration exécutée (autres lots)** | **non** |
 | **Next gate** | PR readiness → décision Morris merge Lot 0 archive completion |
-| **Lot A** | **not started** |
+| **Lot A** | **executed** on branch `migration/sfia-v2.6-lot-a-core` — **pending PR merge** |
+| **Volume Lot A** | **6** fichiers core reference |
+| **Canonical promotion Lot A** | **none** |
 
 ---
 
@@ -109,6 +111,12 @@ Cartographie finale (PR #165)
 | **Contenu lot-A** | Core **reference** (README, standards, roadmap, knowledge-layer) |
 | **Gate** | Critical — post-Lot 0 |
 | **PR cible** | ≤6 fichiers — stabilisation core, pas promotion canonical |
+| **Statut exécution** | **executed** on branch `migration/sfia-v2.6-lot-a-core` — **pending merge** |
+| **Rapport exécution** | `2026-07-12-sfia-v2.6-lot-a-core-execution.md` |
+| **Fichiers modifiés** | **5/6** (4 stabilisation + rename global-capitalization) |
+| **Rename exécuté** | `sfia-global-capitalization.md` → `sfia-global-capitalization-reference.md` |
+| **Lot D rename ownership** | **transferred** — ce rename n'appartient plus au Lot D |
+| **Canonical promotion** | **none** |
 
 ---
 
@@ -325,4 +333,4 @@ Les clarifications des lots (Lot 0, Lot F, Lot G, Lot D, sous-lots) sont intégr
 
 ---
 
-*Plan candidate — **Lot 0 archive execution complete (76/76)** — **completion PR pending merge** — **Lot A not started**.*
+*Plan candidate — **Lot 0 archive closed (76/76)** — **Lot A executed (6)** on branch — **pending PR merge** — **Lot B not required**.*
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-a-core-execution.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-a-core-execution.md
new file mode 100644
index 0000000..24766f7
--- /dev/null
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-a-core-execution.md
@@ -0,0 +1,273 @@
+# SFIA v2.6 — Lot A Core Stabilization Execution
+
+**Horodatage :** 2026-07-12 10:35 Europe/Paris  
+**Cycle :** Capitalisation / stabilisation core  
+**Profil :** Critical  
+**GO Morris :** explicite — Lot A depuis `main` post-clôture Lot 0  
+**Base Git :** `main` @ `8b604fbcd34994b25d3e96c5abba0b0144a780ba`  
+**Branche :** `migration/sfia-v2.6-lot-a-core`
+
+---
+
+## 1. Sources consultées
+
+- `prompts/templates/sfia-cycle-execution-template.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-lot-0-qualification.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-0-archive-completion-execution.md`
+- Les 6 fichiers Lot A et leurs consommateurs directs
+
+---
+
+## 2. Manifeste Lot A (6 fichiers)
+
+| # | Chemin | Authority | Usage CSV | Disposition CSV |
+|---|--------|-----------|-----------|-----------------|
+| 1 | `method/sfia-fast-track/core/README.md` | reference | non-operational | keep |
+| 2 | `method/sfia-fast-track/core/sfia-architecture-standards.md` | reference | non-operational | keep |
+| 3 | `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` | reference | non-operational | keep |
+| 4 | `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | reference | non-operational | rename **executed** |
+| 5 | `method/sfia-fast-track/core/sfia-knowledge-layer.md` | reference | unknown | keep |
+| 6 | `method/sfia-fast-track/core/sfia-rules-update.md` | reference | non-operational | keep |
+
+**Contrôles manifeste :** brut = 6 · doublons = 0 · canonical Lot 0 exclus = 3 · v3/MCP exclus · total = **6** ✓
+
+---
+
+## 3. Qualification par fichier
+
+| Fichier | Observation | Écart démontré | Action | Modifié |
+|---------|-------------|----------------|--------|---------|
+| `core/README.md` | Index core sans distinction canonical/reference ni contexte v2.4/v2.6 | Navigation ambiguë post-Lot 0 | Ajout sections version + authority | **oui** |
+| `sfia-architecture-standards.md` | Reference cohérente, placement conforme, pas de lien cassé interne | Aucun | Aucune | **non** |
+| `sfia-consolidation-roadmap.md` | Chemins livrables obsolètes (réorg documentation, archive Lot 0, déplacement audit-rex) | 7 motifs de chemins invalides | Correction chemins actifs | **oui** |
+| `sfia-global-capitalization-reference.md` | CSV propose rename ; nom ambigu sans suffixe `-reference` | Clarifier rôle reference vs capitalisation v2.6 | `git mv` + refs actives | **oui** (rename + status) |
+| `sfia-knowledge-layer.md` | Usage `unknown` en CSV ; contenu actif (Routing Matrix) | Usage non documenté post-cartographie | Clarification usage + statut reference | **oui** |
+| `sfia-rules-update.md` | Trace historique, renvois vers canonical OK | Aucun | Aucune | **non** |
+
+---
+
+## 4. Contrôle autorité documentaire
+
+| Contrôle | Résultat |
+|----------|----------|
+| 3 canonical Lot 0 modifiés doctrinalement | **0** — operating-model : correction descriptive basename §8.1 uniquement ; routing-guide, rules-and-guardrails **inchangés** |
+| 6 fichiers Lot A restent `reference` | ✓ |
+| Nouveau canonical créé | **non** |
+| SFIA v2.4 baseline | ✓ — explicitement tracé |
+| SFIA v2.6 candidate | ✓ — ne remplace pas v2.4 |
+| Promotion baseline v2.6 | **non** |
+
+---
+
+## 5. Modifications réalisées
+
+### `core/README.md`
+
+- Sections **SFIA version context** (v2.4 baseline / v2.6 candidate)
+- Section **Document authority** (canonical lot-0 vs reference lot-A)
+- Colonne authority dans la table documents
+
+### `sfia-consolidation-roadmap.md`
+
+Corrections de chemins (14 occurrences, 7 motifs) :
+
+| Ancien chemin | Nouveau chemin |
+|---------------|----------------|
+| `projects/interv360/04-delivery/current-application-audit.md` | `projects/interv360/06-audit-rex/current-application-audit.md` |
+| `method/sfia-fast-track/interv360-application-rex.md` | `method/sfia-fast-track/audit-rex/interv360-application-rex.md` |
+| `method/sfia-fast-track/documentation-audit.md` | `method/sfia-fast-track/documentation/documentation-audit.md` |
+| `method/sfia-fast-track/documentation-structure-target.md` | `method/sfia-fast-track/documentation/documentation-structure-target.md` |
+| `method/sfia-fast-track/notion-publication-plan.md` | `method/sfia-fast-track/documentation/archive/notion/notion-publication-plan.md` |
+| `method/sfia-fast-track/sfia-rules-update.md` | `method/sfia-fast-track/core/sfia-rules-update.md` |
+| `method/sfia-fast-track/sfia-architecture-standards.md` | `method/sfia-fast-track/core/sfia-architecture-standards.md` |
+
+### `sfia-global-capitalization-reference.md` *(rename Lot A corrective)*
+
+- **Ancien chemin :** `method/sfia-fast-track/core/sfia-global-capitalization.md`
+- **Nouveau chemin :** `method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
+- **Commande :** `git mv` (R100, contenu préservé)
+- **Justification nom :** suffixe `-reference` explicite le rôle `reference` / preuve opérationnelle ; cohérent avec `sfia-rules-update.md` (trace historique) ; évite confusion avec docs `documentation/capitalization/sfia-v2.6/`
+- **Authority avant/après :** `reference` / `reference`
+- **Disposition :** `keep` (rename physique uniquement)
+- Bloc **SFIA v2.6 cartography status** mis à jour — rename executed
+
+### `sfia-knowledge-layer.md`
+
+- Bloc **SFIA v2.6 cartography status** — usage clarifié, reference active Routing Matrix
+
+---
+
+## 6. Fichiers non modifiés
+
+| Fichier | Justification |
+|---------|---------------|
+| `sfia-architecture-standards.md` | Placement conforme ; contenu reference cohérent ; aucun lien interne cassé |
+| `sfia-rules-update.md` | Statut historique déjà explicite ; renvois canonical corrects |
+
+---
+
+## 7. Références
+
+### Analysées
+
+- Entrantes : README core, standards README, notion categorization, automation engines, templates Notion, cartography docs
+- Sortantes : consolidation-roadmap (corrigées), knowledge-layer (archive notion paths déjà corrects post-Lot 0)
+
+### Corrigées
+
+- 14 références de chemins dans `sfia-consolidation-roadmap.md`
+- Navigation authority dans `core/README.md`
+
+### Réserve controlled-delivery — résolue par PR #170 (mergée)
+
+- Lien cassé `inc-01-phase-2-rex.md` supprimé de `method/complementary/controlled-delivery/README.md` via PR #170 @ `54b6646`
+- Intégré dans la branche PR #169 par merge `origin/main` @ 2026-07-12 16:53 Europe/Paris
+- Contexte Interv360 INC-01 phase 2 **préservé**
+
+### Canonical Lot 0 — basename corrigé (GO Morris 2026-07-12 11:24)
+
+- `sfia-chatgpt-cursor-operating-model.md` §8.1 — mention descriptive : `sfia-global-capitalization-reference.md` §13
+
+---
+
+## 8. Contrôles
+
+| Contrôle | Résultat |
+|----------|----------|
+| Fichiers Lot A modifiés | **5/6** (4 stabilisation + 1 rename) |
+| Fichiers Lot A analysés | **6/6** |
+| Canonical promotion | **none** |
+| Physical deletions | **0** |
+| CSV SHA | `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` inchangé |
+| Lot 0 archive | **closed** (76/76) |
+| Lot B | **not required** |
+| Lots C–J | **not started** |
+
+---
+
+## 9. Risques et réserves
+
+- CSV conserve le chemin historique `sfia-global-capitalization.md` — snapshot frozen ; divergence physique documentée.
+- Liens cassés similaires dans `controlled-delivery-standard.md` et `controlled-delivery-prompt-family.md` — **hors périmètre Lot A**.
+
+---
+
+## 13. Canonical basename reference corrective (GO Morris 2026-07-12 11:24)
+
+**Horodatage :** 2026-07-12 11:24 Europe/Paris
+**Fichier :** `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
+**Section :** §8.1 Prompts types (référence)
+**Classification :** `CANONICAL OCCURRENCE CONFIRMED — DESCRIPTIVE REFERENCE ONLY`
+
+| Élément | Valeur |
+|---------|--------|
+| Avant | `Extraits de \`sfia-global-capitalization.md\` §13 :` |
+| Après | `Extraits de \`sfia-global-capitalization-reference.md\` §13 :` |
+| Modification doctrinale | **aucune** — substitution basename uniquement |
+| Authority canonical | **inchangée** |
+| Références actives ancien basename | **0** |
+| Réserve canonical basename | **closed** |
+| Lien controlled-delivery | **closed** — PR #170 mergée et intégrée |
+
+---
+
+## 12. Corrective rename — Global Capitalization (GO Morris 2026-07-12 11:07)
+
+**Horodatage :** 2026-07-12 11:07 Europe/Paris
+**GO Morris :** traitement immédiat dans PR #169
+
+### Qualification du nom
+
+| Nom candidat | Avantages | Risques | Cohérence | Verdict |
+|--------------|-----------|---------|-----------|---------|
+| `sfia-global-capitalization-reference.md` | Rôle reference explicite ; convention `sfia-*` core ; distinct des rapports v2.6 | Nom plus long | **Élevée** | **RETENU** |
+| `YYYY-MM-DD-sfia-global-capitalization.md` | Proposé CSV | Style archive/date ; hors convention core active | Faible | Rejeté |
+| `sfia-global-capitalization-evidence.md` | Rôle preuve opérationnelle | Moins aligné avec disposition CSV `rename`→reference | Moyenne | Rejeté |
+
+**Verdict :** `TARGET NAME CONFIRMED — REFERENCE ROLE PRESERVED`
+
+### Références actives corrigées (15 fichiers)
+
+- `method/sfia-fast-track/core/README.md`
+- `method/sfia-fast-track/core/sfia-consolidation-roadmap.md`
+- `method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
+- `method/sfia-fast-track/README.md`
+- `method/sfia-fast-track/documentation/documentation-audit.md`
+- `method/sfia-fast-track/documentation/documentation-structure-target.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md`
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`
+- `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md`
+- `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md`
+- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md`
+- `tools/cmp-001/config/sfia-v1-1-workspace.config.json`
+
+### Occurrences historiques conservées (non modifiées)
+
+- CSV frozen — chemin source historique
+- `documentation/archive/**` — snapshots et inventaires archivés
+- `2026-07-11-sfia-v2.6-repository-read-only-audit.md` — photographie audit
+- Rapports v2.6 et migration-lots-plan — traçabilité rename old→new
+
+### Statut réserve rename
+
+**Fermée** — rename exécuté ; Lot D ne possède plus ce rename.
+
+---
+
+## 10. Verdict (actualisé)
+
+```
+LOT A CORE STABILIZATION READY
+LOT A GLOBAL CAPITALIZATION RENAME COMPLETE
+CANONICAL BASENAME REFERENCE CORRECTED
+TARGET NAME CONFIRMED — REFERENCE ROLE PRESERVED
+ACTIVE OLD BASENAME REFERENCES 0
+RENAME RESERVE FULLY CLOSED
+6 OF 6 LOT A FILES QUALIFIED
+5 OF 6 LOT A FILES UPDATED OR RENAMED
+RENAME RESERVE CLOSED
+NO CANONICAL PROMOTION
+LOT 0 CANONICAL FILES UNCHANGED
+CSV UNCHANGED
+PR #169 BRANCH UPDATED WITH CURRENT MAIN
+PR #170 MERGE PRESERVED
+LOT A SCOPE PRESERVED
+NO CONFLICTS
+CSV UNCHANGED
+PR #169 OPEN — NOT MERGED
+```
+
+---
+
+## 14. Remise en cohérence avec main (GO Morris 2026-07-12 16:53)
+
+**Horodatage :** 2026-07-12 16:53 Europe/Paris
+**Opération :** `git merge --no-edit origin/main` sur `migration/sfia-v2.6-lot-a-core`
+**Ancien HEAD branche :** `4281387658f463c1f863c49b8343ad60b53b058a`
+**Ancienne base PR :** `8b604fbcd34994b25d3e96c5abba0b0144a780ba`
+**Nouveau main :** `54b6646a15867477abd2c604adf2ce11c023859e` (merge PR #170)
+**Nouveau HEAD branche :** `7d717a744d84b4fdb21c4b81ad5cc0daa6788e2b`
+
+| Élément | Résultat |
+|---------|----------|
+| Conflits | **aucun** |
+| Fichier intégré depuis main | `method/complementary/controlled-delivery/README.md` (PR #170) |
+| PR #170 préservée | **oui** — lien cassé absent, contexte Interv360 présent |
+| Périmètre Lot A | **préservé** — 20 fichiers PR inchangés |
+| Mergeable PR #169 | **oui** |
+| Doctrine changed | **non** |
+| CSV | **unchanged** |
+
+---
+
+## 11. Prochaine décision Morris
+
+1. PR readiness review (ChatGPT) sur PR #169 @ HEAD actualisé
+2. GO merge séparé
+3. Liens controlled-delivery restants (`standard.md`, `prompt-family.md`) — traitement ultérieur si souhaité
diff --git a/method/sfia-fast-track/documentation/documentation-audit.md b/method/sfia-fast-track/documentation/documentation-audit.md
index 47f7c75..8faa509 100644
--- a/method/sfia-fast-track/documentation/documentation-audit.md
+++ b/method/sfia-fast-track/documentation/documentation-audit.md
@@ -48,7 +48,7 @@ Objectifs :
 | Fichier | Famille | Statut | Rôle | Commentaire |
 |---------|---------|--------|------|-------------|
 | `sfia-consolidation-roadmap.md` | Méthode | Actif | Roadmap consolidation | Pilote les chantiers 1–5 |
-| `sfia-global-capitalization.md` | Capitalisation | Actif | Règles SFIA globales | Référence méthode post-Interv360 |
+| `sfia-global-capitalization-reference.md` | Capitalisation | Actif | Règles SFIA globales | Référence méthode post-Interv360 |
 | `sfia-automation-architecture.md` | Méthode / Automation | Actif | Vision orchestration IA | Cible long terme |
 | `interv360-application-rex.md` | REX | Actif | Retour d'expérience Interv360 | Chantier 2 clôturé |
 | `interv360-final-capitalization.md` | Capitalisation | Actif | Clôture séquence Interv360 | Complète le REX, pré-consolidation |
@@ -121,7 +121,7 @@ Objectifs :
 
 ### 4.1. Méthode SFIA
 
-- `method/sfia-fast-track/core/sfia-global-capitalization.md`
+- `method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
 - `method/sfia-fast-track/core/sfia-consolidation-roadmap.md`
 - `method/sfia-fast-track/automation/sfia-automation-architecture.md`
 - `method/sfia-fast-track/figma-design-first-ui-method.md`
@@ -175,7 +175,7 @@ Objectifs :
 
 | Document | Pourquoi le conserver | Usage futur |
 |----------|----------------------|-------------|
-| `sfia-global-capitalization.md` | Règles SFIA validées | Référence tous projets Fast Track |
+| `sfia-global-capitalization-reference.md` | Règles SFIA validées | Référence tous projets Fast Track |
 | `sfia-automation-architecture.md` | Vision orchestration | Chantier 5 + plateforme SFIA |
 | `sfia-consolidation-roadmap.md` | Pilotage consolidation | Suivi chantiers |
 | `figma-design-first-ui-method.md` | Règle UI premium | Cycles UI futurs |
diff --git a/method/sfia-fast-track/documentation/documentation-structure-target.md b/method/sfia-fast-track/documentation/documentation-structure-target.md
index b8e4486..743c09f 100644
--- a/method/sfia-fast-track/documentation/documentation-structure-target.md
+++ b/method/sfia-fast-track/documentation/documentation-structure-target.md
@@ -38,7 +38,7 @@ method/
   sfia-fast-track/
     README.md                          # Index méthode Fast Track
     core/
-      sfia-global-capitalization.md    # ← existant
+      sfia-global-capitalization-reference.md    # ← existant
       sfia-automation-architecture.md  # ← existant
       sfia-consolidation-roadmap.md    # ← existant
       sfia-rules-update.md             # Chantier 5
@@ -104,7 +104,7 @@ projects/
 
 | Fichier / famille actuelle | Emplacement cible proposé | Action |
 |----------------------------|--------------------------|--------|
-| `method/sfia-fast-track/core/sfia-global-capitalization.md` | `core/` | Déplacer plus tard |
+| `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | `core/` | Déplacer plus tard |
 | `method/sfia-fast-track/automation/sfia-automation-architecture.md` | `core/` | Déplacer plus tard |
 | `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` | `core/` | Déplacer plus tard |
 | `method/sfia-fast-track/figma-design-first-ui-method.md` | `ui/` | Déplacer plus tard |
@@ -129,7 +129,7 @@ projects/
 
 | Document | Publiable Notion | Commentaire |
 |----------|------------------|-------------|
-| `sfia-global-capitalization.md` | Oui | Adapter — retirer références Git internes |
+| `sfia-global-capitalization-reference.md` | Oui | Adapter — retirer références Git internes |
 | `figma-design-first-ui-method.md` | Oui | Publier tel quel |
 | `sfia-automation-architecture.md` | Oui | Résumer vision — détail moteurs optionnel |
 | `interv360-mvp-delivery-capitalization.md` | Oui | Cas de référence MVP |
diff --git a/method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md b/method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md
index 1c456d5..96a27d2 100644
--- a/method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md
+++ b/method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md
@@ -144,7 +144,7 @@ Références appliquées :
 | `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Cycle Routing Guide | SFIA Operating Model | Guide opérationnel | candidate | Haute | PAGE_NOTION_DEDIEE | Haute | Utilisateur méthode | Créer page Notion dédiée | Routage cycles — nouveau asset v1.1 | Statut candidate — valider après usage |
 | `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Knowledge Layer | SFIA Operating Model | Guide opérationnel | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Contributeur SFIA | Créer page Notion dédiée | Routing Matrix + règles Notion | — |
 | `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Rules & Guardrails | SFIA Operating Model | Guide opérationnel | validated | Haute | PAGE_NOTION_DEDIEE | Haute | Utilisateur méthode | Créer page Notion dédiée | Garde-fous canoniques | — |
-| `method/sfia-fast-track/core/sfia-global-capitalization.md` | Global Capitalization | SFIA Operating Model | Capitalisation | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Utilisateur méthode | Éditorialiser | Preuve opérationnelle — long, traces merge | Retirer détails Git bruts |
+| `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | Global Capitalization | SFIA Operating Model | Capitalisation | validated | Haute | EDITORIALISER_AVANT_PUBLICATION | Haute | Utilisateur méthode | Éditorialiser | Preuve opérationnelle — long, traces merge | Retirer détails Git bruts |
 | `method/sfia-fast-track/core/sfia-rules-update.md` | Rules Update | SFIA Operating Model | Guide opérationnel | historical | Moyenne | RESUMER_DANS_NOTION_AVEC_LIEN_REPO | Faible | Contributeur SFIA | Résumer et lier au repo | Trace historique règles | Supplanté par rules-and-guardrails |
 | `method/sfia-fast-track/core/sfia-architecture-standards.md` | Architecture Standards | SFIA Operating Model | Guide opérationnel | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Contributeur SFIA | Éditorialiser | Standards méthode | — |
 | `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` | Consolidation Roadmap | SFIA Operating Model | Roadmap | validated | Moyenne | EDITORIALISER_AVANT_PUBLICATION | Moyenne | Morris / mainteneur | Éditorialiser | Roadmap amélioration SFIA | — |
@@ -292,7 +292,7 @@ Documents recommandés en **page Notion autonome** (priorité haute) :
 | 8 | `prompts/prompt-catalog.md` | Utilisateur méthode | Page hub + lien bases |
 | 9 | `method/sfia-fast-track/ui/figma-design-first-ui-method.md` | Utilisateur méthode | Publier |
 | 10 | `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Contributeur SFIA | Résumer vision niveaux |
-| 11 | `method/sfia-fast-track/core/sfia-global-capitalization.md` | Utilisateur méthode | Forte éditorialisation |
+| 11 | `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | Utilisateur méthode | Forte éditorialisation |
 | 12 | `projects/interv360/README.md` + synthèse | Lecteur projet | Page hub Interv360 |
 | 13 | `projects/interv360/06-audit-rex/current-application-audit.md` | Lecteur projet | Synthèse audit |
 | 14 | `projects/interv360/08-presentation/interv360-demo-one-page-summary.md` | Lecteur externe | Showcase |
@@ -306,7 +306,7 @@ Documents recommandés en **page Notion autonome** (priorité haute) :
 | Document | Raison | Priorité |
 |----------|--------|----------|
 | Engines (Prompt Generation, Repository Execution, Validation) | Specs techniques — extraire règles opérationnelles | Moyenne |
-| `sfia-global-capitalization.md` | Long, traces Git/merge | Haute |
+| `sfia-global-capitalization-reference.md` | Long, traces Git/merge | Haute |
 | `sfia-delivery-pipeline.md` | Pipeline technique | Haute |
 | `sfia-repository-blueprint.md` | Arborescence repo | Moyenne |
 | `sfia-platform-architecture.md`, domain/meta-model | Dense architecture | Moyenne |
diff --git a/method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md b/method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md
index 6788390..372d39a 100644
--- a/method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md
+++ b/method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md
@@ -118,7 +118,7 @@ Page d'entrée unique. Répond à :
 | Je veux capitaliser un projet | §6 Capitalisation | Capitalisation |
 | Je veux préparer une publication Notion | §7 Archives + checklist | Préparation Notion |
 
-**Sources repo :** `sfia-global-capitalization.md`, Fast Track README, `sfia-cycle-routing-guide.md`
+**Sources repo :** `sfia-global-capitalization-reference.md`, Fast Track README, `sfia-cycle-routing-guide.md`
 
 ### 4.2 Démarrer avec SFIA
 
diff --git a/method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md b/method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md
index edfad8e..367808d 100644
--- a/method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md
+++ b/method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md
@@ -118,7 +118,7 @@ Documents de référence actuels sous `method/sfia-fast-track/` :
 | Document | Rôle |
 |----------|------|
 | `README.md` | Point d'entrée méthode |
-| `sfia-global-capitalization.md` | Règles globales validées |
+| `sfia-global-capitalization-reference.md` | Règles globales validées |
 | `sfia-automation-architecture.md` | Vision orchestration IA |
 | `sfia-rules-update.md` | Règles opérationnelles |
 | `sfia-architecture-standards.md` | Standards architecture |
@@ -205,7 +205,7 @@ Documents structurants actifs :
 
 | Document | Zone actuelle | Rôle | Zone cible proposée |
 |----------|---------------|------|---------------------|
-| `sfia-global-capitalization.md` | `method/sfia-fast-track/` | Méthode référence | `method/sfia-fast-track/core/` |
+| `sfia-global-capitalization-reference.md` | `method/sfia-fast-track/` | Méthode référence | `method/sfia-fast-track/core/` |
 | `sfia-automation-architecture.md` | idem | Vision automation | `method/sfia-fast-track/automation/` |
 | `sfia-rules-update.md` | idem | Règles | `method/sfia-fast-track/core/` |
 | `sfia-architecture-standards.md` | idem | Standards | `method/sfia-fast-track/core/` |
diff --git a/tools/cmp-001/config/sfia-v1-1-workspace.config.json b/tools/cmp-001/config/sfia-v1-1-workspace.config.json
index dfbeb60..5d9dc09 100644
--- a/tools/cmp-001/config/sfia-v1-1-workspace.config.json
+++ b/tools/cmp-001/config/sfia-v1-1-workspace.config.json
@@ -53,7 +53,7 @@
       "repoLinks": [
         {
           "label": "Global Capitalization",
-          "path": "method/sfia-fast-track/core/sfia-global-capitalization.md"
+          "path": "method/sfia-fast-track/core/sfia-global-capitalization-reference.md"
         }
       ]
     },
@@ -227,7 +227,7 @@
           "status": "planned",
           "repoLinks": [
             {
-              "path": "method/sfia-fast-track/core/sfia-global-capitalization.md"
+              "path": "method/sfia-fast-track/core/sfia-global-capitalization-reference.md"
             }
           ]
         }

```

## 12. Verdict

```
PR #169 BRANCH UPDATED WITH CURRENT MAIN
PR #170 MERGE PRESERVED
LOT A SCOPE PRESERVED
CONFLICTS RESOLVED WITHIN SCOPE
GLOBAL CAPITALIZATION RENAME CONFIRMED
ACTIVE OLD BASENAME REFERENCES ZERO
REFERENCE AUTHORITY PRESERVED
CANONICAL AUTHORITY UNCHANGED
NO DOCTRINE CHANGE
NO CANONICAL PROMOTION
NO PHYSICAL FILE DELETION
CSV UNCHANGED
LOT 0 CLOSED 76/76
LOTS C–J NOT STARTED
SFIA V2.4 BASELINE
SFIA V2.6 CANDIDATE
PR #169 OPEN AND MERGEABLE
REVIEW HANDOFF COMPLETE
READY FOR CHATGPT PR READINESS REVIEW
MERGE REQUIRES SEPARATE MORRIS GO
```
