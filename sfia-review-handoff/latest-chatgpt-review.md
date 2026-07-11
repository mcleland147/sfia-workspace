---
status: temporary-review-handoff
branch: sfia/review-handoff
source: .tmp-sfia-review/chatgpt-review.md
canonical: false
merge_to_main: forbidden
updated_for: PR 165 Usage Documentation Alignment
cycle: Usage Documentation Alignment
head_initial: 1a5969f47a1637fdbfbba3dcc7c20afff0e28712
commit_substantif: d733283ef6a31a5b5e533be49a9f30887bc449b0
head_pr: d733283ef6a31a5b5e533be49a9f30887bc449b0
csv_sha: 2000dc36a3410ec37a803d0baeb53846eda67b38cd1d45bfbc805bda8a0ab51a
usage: 469/545/31
usage_dimension: frozen
pass_authority: pending
pr_merged: false
---

# SFIA v2.6 — Review Pack (Full borné)

**Date/heure :** 2026-07-11 19:47 Europe/Paris
**Cycle :** Validation corrective finale — Usage Documentation Alignment
**Profil :** Critical
**Branche :** audit/sfia-v2.6-repository-cartography
**HEAD initial :** `1a5969f47a1637fdbfbba3dcc7c20afff0e28712`
**Commit substantif :** `d733283ef6a31a5b5e533be49a9f30887bc449b0`
**HEAD courant PR :** `d733283ef6a31a5b5e533be49a9f30887bc449b0`
**Base :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
**synthesis only = no**

## Local Git Truth Check

- HEAD initial micro-correctif: `1a5969f47a1637fdbfbba3dcc7c20afff0e28712`
- Branche: audit/sfia-v2.6-repository-cartography
- PR #165: OPEN, non-draft, non-mergée
- Worktree tracked/staged: propre

## CSV (read-only)

- path: `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv`
- SHA avant: `2000dc36a3410ec37a803d0baeb53846eda67b38cd1d45bfbc805bda8a0ab51a`
- SHA après: `2000dc36a3410ec37a803d0baeb53846eda67b38cd1d45bfbc805bda8a0ab51a` (inchangé byte-for-byte)
- lignes: 1045 × 36

## Statistiques Usage recalculées (CSV)

| Usage | Count |
|-------|------:|
| operational | 469 |
| non-operational | 545 |
| unknown | 31 |
| **Total** | **1045** |

## Confidence recalculée (CSV)

| Confidence | Count |
|------------|------:|
| high | 689 |
| medium | 325 |
| low | 31 |
| **Total** | **1045** |

## Section §2 Executive summary (vérifiée)

(état courant — recalculé CSV)

Toutes les métriques ci-dessous sont **recalculées depuis le CSV** (SHA `3a88f304…`). Aucune saisie manuelle.

| Domaine | Count |
|---------|------:|
| **lifecycle_applicability document-lifecycle** | 697 |
| **lifecycle_applicability technical-artifact-lifecycle** | 10 |
| **lifecycle_applicability not-applicable** | 338 |
| **lifecycle_status not-applicable** | 338 |
| **lifecycle_status validated** | 145 |
| **lifecycle_status candidate** | 154 |
| **lifecycle_status draft** | 138 |
| **lifecycle_status archived** | 265 |
| **lifecycle_status superseded** | 5 |
| **usage operational** | **469** |
| **usage non-operational** | **545** |
| **usage unknown** | **31** |
| **authority unknown** | 534 |
| Nommage D12 documentaire non-conforme | 161 |
| Conventions techniques | 308 |
| D10 non conforme (v3) | 23 |
| Lot B | 0 |
| Lot C | 23 |
| B/C overlap | 0 |
| delete-candidate | 11 |
| archive (`proposed_disposition`) | 227 |
| archive non-v3 | 204 |
| archive v3 (Lot C) | 23 |
| Lot 0 tag | 103 |
| investigate | 38 |
| morris_gate yes | 43 |

---

## Section §6 Tableau de qualité (corrigée — section complète)

## 6. Tableau de qualité (recalculé CSV)

(recalculé CSV)

| Métrique | Count |
|----------|------:|
| confidence high | 689 |
| confidence medium | 325 |
| confidence low | 31 |
| usage operational | **469** |
| usage non-operational | **545** |
| usage unknown | **31** |
| authority unknown | 534 |
| lifecycle unknown | 0 |
| lifecycle not-applicable | 338 |
| morris_gate yes | 43 |
| investigate | 38 |
| delete-candidate | 11 |
| archive (`proposed_disposition`) | 227 |
| archive v3 (Lot C) | 23 |
| archive non-v3 | 204 |
| lifecycle superseded | 5 |

---

## Section §17 Direct Usage Evidence Final Review (vérifiée)

**Horodatage :** 2026-07-11 19:35 Europe/Paris
**HEAD initial :** `e48980216e86a4092cbfe3b859c7ff274ccd0272`
**Commit substantif :** `7ff924fb026b5dc98503fa1e27900906479ef3c6`
**HEAD courant PR :** `7ff924fb026b5dc98503fa1e27900906479ef3c6`

### Définition de D

Lignes avec `usage = operational` et `usage-graph-review;result=operational` — les **197** operational conservés après Usage Evidence Graph Review.

### Volume D

**|D| = 197**

### Matrice préalable

| Métrique | Valeur |
|----------|-------:|
| Consommateurs directs déclarés (graphe) | **11** |
| Références exactes dans consommateur déclaré | **15** |
| Références absentes dans consommateur déclaré | **182** |
| Chaînes `projects/interv360/app/src/tests/README.md` | **24** |
| Chaînes `projects/interv360/app/src/domain/README.md` | **72** |
| Chaînes `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | **43** |
| Chaînes `exports/notion/export-manifest.json` | **6** |
| Chaînes `docs/architecture/README.md` | **0** |

**Top consommateurs déclarés (graphe) :** domain README Interv360 (72), rules-and-guardrails (43), docker-compose.test.yml (27), tests README Interv360 (24), backend types.ts (12), export-manifest (6).

### Méthode de preuve directe

Pour chaque ligne de D : ouverture du consommateur déclaré ou recherche d’un référent direct unique ; capture ligne/section/import ; vérification direction **consumer → current_path** ; type relation fonctionnel ; activité indépendante du consommateur ; format `usage-direct-review;result=…;consumer=…;reference=…;relation=…;consumer-active-proof=…;current-use=…;confidence=…`. Chaînes indirectes, citation-only, audit-only et README génériques Interv360 rejetés.

### Résultats avant / après (direct)

| Usage | Avant | Après | Δ |
|-------|------:|------:|--:|
| operational | 577 | **469** | −108 |
| non-operational | 443 | **545** | +102 |
| unknown | 25 | **31** | +6 |

### Résultats sur D

| Action | Count |
|--------|------:|
| operational **confirmés** (preuve directe complète) | **89** |
| rétrogradés **non-operational** | **102** |
| rétrogradés **unknown** | **6** |

### Usage global final

| Usage | Count |
|-------|------:|
| operational | **469** |
| non-operational | **545** |
| unknown | **31** |

### Unknown globaux (31)

- **25** inchangés (18 revue evidence + 7 graphe)
- **6** nouveaux (preuve directe partielle — consommateur en D sans preuve propre)

Liste exhaustive des 6 nouveaux unknown :

1. `method/sfia-fast-track/checklists/guardrails-checklist.md`
2. `method/sfia-fast-track/checklists/notion-publication-checklist.md`
3. `method/sfia-fast-track/checklists/validation-checklist.md`
4. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
5. `method/sfia-fast-track/core/sfia-knowledge-layer.md`
6. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

### Exemples preuves directes valides

- `docs/tooling/penpot/penpot-mcp-self-host-rex.md` L50 → `.cursor/mcp-templates/penpot-mcp.example.json` (method-use, lien markdown)
- `exports/notion/export-manifest.json` L7–L14 → payloads Notion JSON (manifest, processus export actif)
- `prompts/prompt-catalog.md` L35 → `docs/architecture/sfia-decision-engine.md` (template-use, génération prompts SFIA)
- `docs/tooling/penpot/penpot-cursor-agent-rules.md` L117 → `docker/penpot/README.md` (method-use)

### Exemples chaînes / preuves rejetées

- `projects/interv360/app/src/domain/README.md` → méthodes BPMN / standards sans lien domaine applicatif (**42** rejets `interv360-domain-readme-generic`)
- `projects/interv360/app/src/tests/README.md` → templates SFIA / Penpot sans lien tests (**15** rejets `interv360-tests-readme-generic`)
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` → cibles hors guardrails sans référence directe (**6** rejets)
- Chaîne docker-compose → QA docs sans référence dans le YAML (**39** rejets `indirect-chain-no-direct-reference`)
- `sfia-foundation-v1.1-consolidation-plan.md` → table inventaire architecture (citation-only / inventory)
- closure-report / runbook « Références » → listes documentaires sans consommation fonctionnelle

### Références absentes / directions

| Contrôle | Count |
|----------|------:|
| Référence directe absente (consommateur déclaré) | **182** (matrice préalable) |
| Directions inversées acceptées | **0** |
| Citation-only conservées | **0** |

### Contrôles prioritaires

| Racine | Résultat |
|--------|----------|
| README tests Interv360 | **0** confirmé / **15** rejeté — racine générique invalidée |
| README domain Interv360 | **0** confirmé / **42** rejeté — racine générique invalidée |
| rules-and-guardrails | **0** confirmé via racine générique / **6** rejetés |
| docs/architecture/README | **0** dans D |
| export-manifest | **6/6** confirmés — référence directe + manifest actif |

### Anomalies hors passe

Aucune — lifecycle, authority, lots et dispositions inchangés.

### Statut final

**USAGE DIMENSION FROZEN** — Pass Authority pending.

---

## Plan §14 Cartography contract status (aligné)

## 14. Cartography contract status

| Élément | Statut |
|---------|--------|
| **Contract** | **Frozen** — CSV = seule source statistique |
| **Pass Lifecycle** | Completed and corrected |
| **Pass Usage** | **Completed** |
| **Usage Evidence Corrective Review** | **Completed** — C=414 |
| **Usage Evidence Graph Review** | **Completed** — G=374 |
| **Direct Usage Evidence Final Review** | **Completed** — D=197 ; op confirmés **89** / rétro non-op **102** / rétro unknown **6** |
| **Usage dimension** | **Frozen** — op **469** / non-op **545** / unknown **31** |
| **Pass Authority** | **Pending** |
| **Migration** | **Aucune autorisée** |
| **Champs CSV** | **36** |
| **lifecycle not-applicable** | 338 |
| **technical-artifact-lifecycle** | 10 |

---

## Description PR (cible)

- CSV 1045 × 36
- SHA: `2000dc36a3410ec37a803d0baeb53846eda67b38cd1d45bfbc805bda8a0ab51a`
- D=197 ; 89 confirmés ; 102 non-operational ; 6 unknown
- Usage global: 469 / 545 / 31
- Usage dimension frozen ; Pass Authority pending
- HEAD courant PR: `d733283ef6a31a5b5e533be49a9f30887bc449b0`

## Lifecycle / Authority / lots

- Lifecycle: inchangé (CSV read-only)
- Authority: inchangée
- Lots et dispositions: inchangés

## Fichiers modifiés

- `2026-07-11-sfia-v2.6-repository-cartography.md` (§6, §11 état gelé, statut)
- `2026-07-11-sfia-v2.6-repository-migration-lots-plan.md` (§14, §15, footer)

## Diff utile complet

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
index a80560d..4112828 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
@@ -3,9 +3,9 @@
 *Cartographie exhaustive read-only — périmètre stable 1045 fichiers — qualification D1–D12*
 
 **Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`
-**Date et heure :** 2026-07-11 19:35 Europe/Paris
-**Statut :** **Candidate** — contrat gelé — Pass Usage **completed** — Direct Usage Evidence Final Review **completed** — **USAGE DIMENSION FROZEN** — Pass Authority pending
-**Cycle :** Validation corrective de cartographie — Direct Usage Evidence Final Review
+**Date et heure :** 2026-07-11 19:48 Europe/Paris
+**Statut :** **Candidate** — contrat gelé — Pass Lifecycle **completed** — Pass Usage **completed** — Direct Usage Evidence Final Review **completed** — **USAGE DIMENSION FROZEN** — Pass Authority pending — PR #165 **non mergée**
+**Cycle :** Validation corrective finale — Usage Documentation Alignment
 **Profil SFIA :** **Critical**
 **Repository :** mcleland147/sfia-workspace
 **Branche :** audit/sfia-v2.6-repository-cartography
@@ -137,12 +137,12 @@ compliant=1022, non-compliant=**23** (v3 uniquement)
 
 | Métrique | Count |
 |----------|------:|
-| confidence high | 797 |
-| confidence medium | 223 |
-| confidence low | 25 |
-| usage operational | **577** |
-| usage non-operational | **443** |
-| usage unknown | **25** |
+| confidence high | 689 |
+| confidence medium | 325 |
+| confidence low | 31 |
+| usage operational | **469** |
+| usage non-operational | **545** |
+| usage unknown | **31** |
 | authority unknown | 534 |
 | lifecycle unknown | 0 |
 | lifecycle not-applicable | 338 |
@@ -395,6 +395,7 @@ Les **10** `technical-artifact-lifecycle` conservent un lifecycle réel (schemas
 | Usage Evidence Corrective Review | `0f423ad09f69ea532b61acb231c9e903c585fd53` |
 | Usage Evidence Graph Review | `58d10c255c6cc1d534acfe59838401bbb5f3f945` |
 | Direct Usage Evidence Final Review | `7ff924fb026b5dc98503fa1e27900906479ef3c6` |
+| Usage Documentation Alignment | *(review pack / handoff)* |
 
 ### A. Source de vérité
 
@@ -501,9 +502,9 @@ Le contrat est **gelé** pour les deux prochaines passes. Il reste **candidate**
 | lifecycle archived | 265 |
 | lifecycle superseded | 5 |
 | lifecycle not-applicable | 338 |
-| usage operational | **577** |
-| usage non-operational | **443** |
-| usage unknown | **25** |
+| usage operational | **469** |
+| usage non-operational | **545** |
+| usage unknown | **31** |
 | authority unknown | 534 |
 
 ---
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index f03c2c2..d763168 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -3,9 +3,9 @@
 *Plan de mise en conformité — périmètre stable 1045 — Lots B/C disjoints*
 
 **Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
-**Date et heure :** 2026-07-11 19:35 Europe/Paris
+**Date et heure :** 2026-07-11 19:48 Europe/Paris
 **Statut :** **Candidate** — contrat gelé — **USAGE DIMENSION FROZEN** — aucune exécution
-**Cycle :** Validation corrective finale — Direct Usage Evidence Final Review
+**Cycle :** Validation corrective finale — Usage Documentation Alignment
 **Profil SFIA :** **Critical**
 **Base inventaire :** `072058a` — **1045 fichiers**
 **Artefacts audit exclus :** 3 livrables PR #165 (hors CSV)
@@ -170,9 +170,11 @@ Les 3 livrables PR ne sont **pas** dans le CSV. Ils ne participent à aucun lot
 |---------|--------|
 | **Contract** | **Frozen** — CSV = seule source statistique |
 | **Pass Lifecycle** | Completed and corrected |
-| **Pass Usage** | **Completed** — 481 qualifiés initialement |
-| **Usage Evidence Review** | **Completed** — C=414 |
-| **Usage Evidence Graph Review** | **Completed** — G=374 ; op **577** / non-op **443** / unknown **25** |
+| **Pass Usage** | **Completed** |
+| **Usage Evidence Corrective Review** | **Completed** — C=414 |
+| **Usage Evidence Graph Review** | **Completed** — G=374 |
+| **Direct Usage Evidence Final Review** | **Completed** — D=197 ; op confirmés **89** / rétro non-op **102** / rétro unknown **6** |
+| **Usage dimension** | **Frozen** — op **469** / non-op **545** / unknown **31** |
 | **Pass Authority** | **Pending** |
 | **Migration** | **Aucune autorisée** |
 | **Champs CSV** | **36** |
@@ -194,7 +196,10 @@ Les 3 livrables PR ne sont **pas** dans le CSV. Ils ne participent à aucun lot
 | Pass Lifecycle | **Completed and corrected** |
 | Contract | **Frozen** |
 | Pass Usage | **Completed** |
+| Usage Evidence Corrective Review | **Completed** |
 | Usage Evidence Graph Review | **Completed** |
+| Direct Usage Evidence Final Review | **Completed** |
+| Usage dimension | **Frozen** — op **469** / non-op **545** / unknown **31** |
 | Pass Authority | **Pending** |
 | lifecycle not-applicable | **338** |
 | archive non-v3 (total B) | **204** |
@@ -205,4 +210,4 @@ Les 3 livrables PR ne sont **pas** dans le CSV. Ils ne participent à aucun lot
 
 ---
 
-*Plan candidate — **CARTOGRAPHY CONTRACT FROZEN** — Usage Graph Review **completed** — Pass Authority next.*
+*Plan candidate — **CARTOGRAPHY CONTRACT FROZEN** — **USAGE DIMENSION FROZEN** — op **469** / non-op **545** / unknown **31** — Pass Authority pending.*

```

## Risques

- Aucun — micro-correctif documentaire uniquement

## Réserves

- Pass Authority non démarrée
- SFIA v2.4 baseline ; v2.6 candidate

## Verdict

```
FINAL USAGE DOCUMENTATION ALIGNMENT COMPLETE
USAGE OPERATIONAL = 469
USAGE NON-OPERATIONAL = 545
USAGE UNKNOWN = 31
CSV UNCHANGED
CSV SHA UNCHANGED
REPORT QUALITY TABLE ALIGNED
USAGE DIMENSION FORMALLY FROZEN
PASS AUTHORITY NOT STARTED
PR NOT MERGED
READY FOR CHATGPT FINAL USAGE FREEZE REVIEW
```