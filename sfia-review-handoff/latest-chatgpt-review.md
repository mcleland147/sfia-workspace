# SFIA Review Pack FULL — Active status alignment SFIA v2.6

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-16 14:32 Europe/Paris (CEST) |
| **Repository** | `mcleland147/sfia-workspace` |
| **Cycle** | 15 — Capitalisation / REX corrective post-merge |
| **Profil SFIA** | Standard |
| **Branche** | `capitalization/sfia-v2.6-active-status-alignment` |
| **Base / HEAD** | `7182deea62e0b8d79e1144283016e5927aa3dd9a` (`origin/main`) |
| **PR officialisation** | [#204](https://github.com/mcleland147/sfia-workspace/pull/204) MERGED |
| **Merge commit** | `7182deea62e0b8d79e1144283016e5927aa3dd9a` |
| **Commit contenu #204** | `6e9eed1def9dec34b5e2a458728cb0d590238d5b` |
| **Handoff post-merge consulté** | `sfia/review-handoff` @ `4112f901015db9878e59fed4d466aca1e88447b3` |
| **Commit branche corrective** | **aucun** |
| **Push branche corrective** | **aucun** |
| **Staging** | **aucun** |
| **Verdict** | `SFIA v2.6 ACTIVE STATUS ALIGNED — READY FOR MORRIS COMMIT DECISION` |

---

## 1. Objet

Aligner les formulations actives pré-merge obsolètes pour que les documents opérationnels présentent **SFIA v2.6** comme **baseline opérationnelle officielle** sans ambiguïté, sans modification doctrinale ni hors périmètre.

---

## 2. Sources consultées

- Template canonique `prompts/templates/sfia-cycle-execution-template.md`
- Review Handoff post-merge `sfia-review-handoff/latest-chatgpt-review.md` (SHA `4112f90…`)
- Les huit fichiers du périmètre (état `origin/main` puis working tree branche corrective)
- PR #204 / merge commit

---

## 3. Liste des huit fichiers modifiés

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/README.md`
3. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
4. `method/sfia-fast-track/core/sfia-knowledge-layer.md`
5. `method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
6. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
7. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
8. `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md`

Exactement **8** fichiers — aucun hors périmètre.

---

## 4. Occurrences avant correction (28)

```text
method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md:543:> **Statut version :** acquis **absorbés dans SFIA v2.6 (proposed baseline)** — v2.5 = candidate absorbée, **jamais** baseline.
method/sfia-fast-track/core/sfia-global-capitalization-reference.md:38:| SFIA v2.6 | **Proposed baseline** — en vigueur après merge d'officialisation |
prompts/templates/sfia-cycle-execution-template.md:2:status: proposed-baseline
prompts/templates/sfia-cycle-execution-template.md:3:version: v2.6-proposed-baseline
prompts/templates/sfia-cycle-execution-template.md:6:updated_after: SFIA v2.6 proposed baseline officialization — consolidation v2.4 + v2.5 absorbed
prompts/templates/sfia-cycle-execution-template.md:10:# SFIA Cycle Execution — Template d'instanciation v2.6 (proposed baseline)
prompts/templates/sfia-cycle-execution-template.md:13:**Statut :** SFIA v2.6 **proposed baseline** — **en vigueur après merge** Morris
prompts/templates/sfia-cycle-execution-template.md:14:**Baseline proposée :** SFIA v2.6 — absorbe héritage v2.4 et acquis v2.5
prompts/templates/sfia-cycle-execution-template.md:29:| **Statut** | v2.6 **proposed baseline** — consolidation ; non en vigueur avant merge |
prompts/templates/sfia-cycle-execution-template.md:1353:8. v2.6 = proposed baseline (en vigueur après merge). v2.4 = historique précédente. v2.5 = candidate absorbée. v3.0 = hors trajectoire.
prompts/templates/sfia-cycle-execution-template.md:1359:*SFIA v2.6 proposed baseline — Template d'instanciation — consolidation v2.4 + acquis v2.5 — en vigueur après merge — Morris décide.*
method/sfia-fast-track/core/sfia-rules-and-guardrails.md:230:| **Baseline** | Règle **absorbée dans SFIA v2.6 (proposed baseline)** — origine capitalisation v2.5 ; entrée en vigueur de v2.6 après merge Morris |
method/sfia-fast-track/core/sfia-knowledge-layer.md:23:| SFIA v2.6 | **Proposed baseline** — en vigueur après merge d'officialisation |
method/sfia-fast-track/core/README.md:9:| **SFIA v2.6** | **Proposed baseline** opérationnelle — consolidation v2.4 + acquis v2.5 + rationalisation repository ; **en vigueur après merge** du cycle d'officialisation |
method/sfia-fast-track/core/sfia-cycle-routing-guide.md:4:updated_after: SFIA v2.6 proposed baseline officialization — consolidation v2.4 + v2.5 absorbed + repository rationalization
method/sfia-fast-track/core/sfia-cycle-routing-guide.md:11:**Status:** Validated — aligné **SFIA v2.6 proposed baseline** (héritage v2.4 §4.3 · acquis v2.5 absorbés §4.4)
method/sfia-fast-track/core/sfia-cycle-routing-guide.md:13:**Baseline proposée :** SFIA v2.6 — en vigueur après merge ; voir §4.3 (héritage) et §4.4 (acquis absorbés)
method/sfia-fast-track/core/sfia-cycle-routing-guide.md:164:> **Statut version :** héritage opérationnel **absorbé dans SFIA v2.6 (proposed baseline)** — v2.4 = baseline historique précédente.
method/sfia-fast-track/core/sfia-cycle-routing-guide.md:258:> **Statut version :** acquis **absorbés dans SFIA v2.6 (proposed baseline)** — v2.5 = candidate absorbée, **jamais** baseline opérationnelle
method/sfia-fast-track/core/sfia-cycle-routing-guide.md:984:`sfia-cycle-routing-guide.md` est le **guide validé** pour sélectionner les références, templates et contrôles de validation selon le type de cycle — aligné **SFIA v2.6 proposed baseline** (héritage v2.4 / v2.4.1 · acquis v2.5 absorbés).
method/sfia-fast-track/core/sfia-cycle-routing-guide.md:1002:*Référentiel SFIA — Guide de routage des cycles v1.4 — validated document — aligné SFIA v2.6 proposed baseline (héritage v2.4 / acquis v2.5 absorbés).*
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:5:| **Titre** | SFIA v2.6 — Manifest officiel de release (proposed baseline) |
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:13:| **Statut proposé** | **PROPOSED BASELINE** — non en vigueur avant merge Morris |
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:42:SFIA v2.6 (proposed baseline)
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:63:| **SFIA v2.6** | **Baseline opérationnelle officielle** | **PROPOSED BASELINE** (ce document) |
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:201:| R1 | Entrée en vigueur **uniquement après merge** — avant : PROPOSED BASELINE |
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:214:| **Avant merge** | Statut **PROPOSED BASELINE** — préparation locale uniquement |
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:255:| **Statut** | PROPOSED BASELINE |
```

---

## 5. Corrections par fichier (résumé)

| Fichier | Correction |
|---------|------------|
| Template | YAML `status: baseline` / `version: v2.6` ; titre/statut/baseline actifs ; anti-patterns génériques ; footer actif |
| README | v2.6 = baseline opérationnelle officielle active |
| Routing | frontmatter, status, baseline, §4.3/§4.4, §13, footer |
| Knowledge | cartographie v2.6 active |
| Global capitalization | cartographie v2.6 active |
| Operating model | `(baseline opérationnelle)` |
| Rules | baseline active + référence PR #204 |
| Manifest | métadonnées pré/post-merge ; formule sans proposed ; §14 historique ; **§15 clôture** ; footer actif |

---

## 6. Section manifest §15 — clôture post-merge (complète)

```markdown
## 15. Clôture post-merge — entrée en vigueur

| Métadonnée | Valeur |
|------------|--------|
| **PR** | [#204](https://github.com/mcleland147/sfia-workspace/pull/204) — **MERGED** |
| **Date / heure merge** | 2026-07-16 14:19 Europe/Paris (CEST) / `2026-07-16T12:19:06Z` |
| **Merge commit** | `7182deea62e0b8d79e1144283016e5927aa3dd9a` |
| **Commit contenu** | `6e9eed1def9dec34b5e2a458728cb0d590238d5b` |
| **Date d’entrée en vigueur** | 2026-07-16 — dès merge dans `main` |
| **Statut final** | **BASELINE OPÉRATIONNELLE OFFICIELLE** |
| **Source de vérité** | Git `main` |

### Confirmations

1. **SFIA v2.6** = baseline opérationnelle officielle et active sur `main`.
2. **SFIA v2.4** = baseline historique précédente (absorbée).
3. **SFIA v2.5** = candidate absorbée — **jamais** baseline opérationnelle.
4. **Exclusions inchangées :** Discovery / Notion non promus ; v3.0 hors trajectoire ; MCP / Bridge / Runner hors trajectoire ; pas d’automatisation L5 globale.
5. Git `main` reste la source de vérité.

> Les libellés `PROPOSED BASELINE` ailleurs dans ce manifest décrivent uniquement la phase **avant merge** (§3, §10 R1, §11, §14). Ils ne constituent plus le statut courant.

---

*Fin du manifest — consolidation, pas refonte — statut actif : BASELINE OPÉRATIONNELLE OFFICIELLE.*
```

---

## 7. Diff complet (huit fichiers)

```diff
diff --git a/method/sfia-fast-track/core/README.md b/method/sfia-fast-track/core/README.md
index b28fd12..bb17945 100644
--- a/method/sfia-fast-track/core/README.md
+++ b/method/sfia-fast-track/core/README.md
@@ -6,7 +6,7 @@ This folder contains the operational foundation documents of the SFIA Fast Track
 
 | Version | Role |
 |---------|------|
-| **SFIA v2.6** | **Proposed baseline** opérationnelle — consolidation v2.4 + acquis v2.5 + rationalisation repository ; **en vigueur après merge** du cycle d'officialisation |
+| **SFIA v2.6** | **Baseline opérationnelle officielle** — consolidation v2.4 + acquis v2.5 + rationalisation repository (active sur `main`) |
 | **SFIA v2.4** | **Baseline historique précédente** — héritage opérationnel absorbé dans v2.6 |
 | **SFIA v2.5** | **Candidate absorbée** dans v2.6 — **jamais** baseline opérationnelle |
 | **SFIA v1.1** | Baseline historique stable (fondations) |
diff --git a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
index 1a9a59f..c3e219d 100644
--- a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
+++ b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
@@ -540,7 +540,7 @@ Ces documents ne doivent être créés qu'**après validation** du présent Oper
 ### 18.2 Complément — acquis SFIA v2.5 absorbés dans v2.6 (MVP méthode proportionnée)
 
 > **Référence historique :** `sfia-v2.5-project-plan.md` — Cycle 1 — capitalisation Chantiers360 post-MVP.
-> **Statut version :** acquis **absorbés dans SFIA v2.6 (proposed baseline)** — v2.5 = candidate absorbée, **jamais** baseline.
+> **Statut version :** acquis **absorbés dans SFIA v2.6 (baseline opérationnelle)** — v2.5 = candidate absorbée, **jamais** baseline.
 > **Ne remplace pas** l'héritage v2.4 — **opérationnalise** la proportionnalité.
 
 Ce complément clarifie la séparation entre type de cycle et profil SFIA ; il ne remplace pas la typologie v2.4 `INC / EVOL / RUN / CAPA / DOC` ni les standards v2.0–v2.4 applicables (voir `sfia-cycle-routing-guide.md` §4.3.1).
diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index cd0fe1d..f2a402c 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -1,16 +1,16 @@
 ---
 status: validated
 version: v1.4
-updated_after: SFIA v2.6 proposed baseline officialization — consolidation v2.4 + v2.5 absorbed + repository rationalization
+updated_after: SFIA v2.6 baseline officialization post-merge (PR #204) — consolidation v2.4 + v2.5 absorbed + repository rationalization
 scope: cycle routing and reference selection
 ---
 
 # Guide de routage des cycles SFIA
 
 **Version:** v1.4
-**Status:** Validated — aligné **SFIA v2.6 proposed baseline** (héritage v2.4 §4.3 · acquis v2.5 absorbés §4.4)
+**Status:** Validated — aligné **SFIA v2.6 baseline opérationnelle** (héritage v2.4 §4.3 · acquis v2.5 absorbés §4.4)
 **Scope:** Routage des cycles, sélection des références, templates et validations
-**Baseline proposée :** SFIA v2.6 — en vigueur après merge ; voir §4.3 (héritage) et §4.4 (acquis absorbés)
+**Baseline opérationnelle :** SFIA v2.6 — active sur `main` ; voir §4.3 (héritage) et §4.4 (acquis absorbés)
 ## 1. Objectif
 
 Ce document définit comment SFIA sélectionne, pour chaque cycle :
@@ -161,7 +161,7 @@ Si le type de cycle n'est pas clair, lancer d'abord un **cycle de cadrage** (mé
 ### 4.3 Routage — héritage SFIA v2.4 (consolidation & operating efficiency)
 
 > **Référence détaillée :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
-> **Statut version :** héritage opérationnel **absorbé dans SFIA v2.6 (proposed baseline)** — v2.4 = baseline historique précédente.
+> **Statut version :** héritage opérationnel **absorbé dans SFIA v2.6 (baseline opérationnelle)** — v2.4 = baseline historique précédente.
 > **v3.0 :** immediate NO-GO — toute discussion v3.0 = décision Morris dédiée.
 
 SFIA v2.4 reste le **standard de consolidation** de référence pour les cycles. Il couvre notamment :
@@ -255,7 +255,7 @@ Handoff ChatGPT ↔ Cursor ↔ Git : **cadre documentaire** v2.4 §10 — **non
 ### 4.4 Routage — acquis SFIA v2.5 absorbés dans v2.6 (profils transverses)
 
 > **Référence historique :** `method/sfia-fast-track/documentation/archive/version-history/sfia-v2/sfia-v2.5-project-plan.md` — Cycle 1
-> **Statut version :** acquis **absorbés dans SFIA v2.6 (proposed baseline)** — v2.5 = candidate absorbée, **jamais** baseline opérationnelle
+> **Statut version :** acquis **absorbés dans SFIA v2.6 (baseline opérationnelle)** — v2.5 = candidate absorbée, **jamais** baseline opérationnelle
 > **Détail opérationnel :** `sfia-chatgpt-cursor-operating-model.md` §18.2
 > **Cartographie cycles projet :** s'appuie sur l'historique `…/archive/version-history/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` et le template d'exécution actif.
 
@@ -981,7 +981,7 @@ Référence : `method/sfia-fast-track/automation/sfia-repository-execution-engin
 
 ## 13. Décision
 
-`sfia-cycle-routing-guide.md` est le **guide validé** pour sélectionner les références, templates et contrôles de validation selon le type de cycle — aligné **SFIA v2.6 proposed baseline** (héritage v2.4 / v2.4.1 · acquis v2.5 absorbés).
+`sfia-cycle-routing-guide.md` est le **guide validé** pour sélectionner les références, templates et contrôles de validation selon le type de cycle — aligné **SFIA v2.6 baseline opérationnelle** (héritage v2.4 / v2.4.1 · acquis v2.5 absorbés).
 
 Il fournit le mécanisme opérationnel permettant de s'assurer que la documentation SFIA est appliquée au bon moment.
 
@@ -999,4 +999,4 @@ Il rend la sélection documentaire **explicite, auditable et validable**.
 
 ---
 
-*Référentiel SFIA — Guide de routage des cycles v1.4 — validated document — aligné SFIA v2.6 proposed baseline (héritage v2.4 / acquis v2.5 absorbés).*
+*Référentiel SFIA — Guide de routage des cycles v1.4 — validated document — aligné SFIA v2.6 baseline opérationnelle (héritage v2.4 / acquis v2.5 absorbés).*
diff --git a/method/sfia-fast-track/core/sfia-global-capitalization-reference.md b/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
index ddbcfb3..5876446 100644
--- a/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
+++ b/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
@@ -35,7 +35,7 @@ Le contenu historique ci-dessous reste inchangé à des fins de traçabilité.
 | Authority | **reference** — operational proof, not canonical |
 | Proposed disposition (CSV) | `rename` — **executed** Lot A → `sfia-global-capitalization-reference.md` |
 | Physical path | `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` |
-| SFIA v2.6 | **Proposed baseline** — en vigueur après merge d'officialisation |
+| SFIA v2.6 | **Baseline opérationnelle officielle** — active sur `main` |
 | SFIA v2.4 | **Baseline historique précédente** (absorbée dans v2.6) |
 | SFIA v2.5 | **Candidate absorbée** dans v2.6 — jamais baseline |
 
diff --git a/method/sfia-fast-track/core/sfia-knowledge-layer.md b/method/sfia-fast-track/core/sfia-knowledge-layer.md
index c2cd67c..d03b20f 100644
--- a/method/sfia-fast-track/core/sfia-knowledge-layer.md
+++ b/method/sfia-fast-track/core/sfia-knowledge-layer.md
@@ -20,7 +20,7 @@ scope: knowledge layer
 | Cartography tag | `lot-A` |
 | Authority | **reference** — active Documentation Routing Matrix |
 | Usage (cartography) | Clarified: **non-operational reference** for routing and Notion preparation rules |
-| SFIA v2.6 | **Proposed baseline** — en vigueur après merge d'officialisation |
+| SFIA v2.6 | **Baseline opérationnelle officielle** — active sur `main` |
 | SFIA v2.4 | **Baseline historique précédente** (absorbée dans v2.6) |
 | SFIA v2.5 | **Candidate absorbée** dans v2.6 — jamais baseline |
 | Canonical promotion | **none** — complements `sfia-rules-and-guardrails.md` and operating model |
diff --git a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
index b9a7953..e1445c1 100644
--- a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
+++ b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
@@ -227,7 +227,7 @@ SFIA utilise les décisions suivantes :
 | **Handoff required** | Copie review pack → commit → push `origin/sfia/review-handoff` → vérification remote — L3 borné |
 | **Rapport incomplet** | Rapport demandant lecture handoff sans push/remote confirmés → cycle incomplet |
 | **Instruction ChatGPT** | Bloc §9.1 obligatoire dans rapport final Cursor lorsque handoff required |
-| **Baseline** | Règle **absorbée dans SFIA v2.6 (proposed baseline)** — origine capitalisation v2.5 ; entrée en vigueur de v2.6 après merge Morris |
+| **Baseline** | Règle **absorbée dans SFIA v2.6 (baseline opérationnelle)** — origine capitalisation v2.5 ; v2.6 active sur `main` après merge PR #204 |
 
 ## 14. Documents associés
 
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md
index e8f3207c..9b88581 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md
@@ -2,7 +2,7 @@
 
 | Métadonnée | Valeur |
 |------------|--------|
-| **Titre** | SFIA v2.6 — Manifest officiel de release (proposed baseline) |
+| **Titre** | SFIA v2.6 — Manifest officiel de release |
 | **Date / heure** | 2026-07-16 13:30 Europe/Paris (CEST) |
 | **Cycle** | 15 — Capitalisation / REX |
 | **Profil SFIA** | Capitalization |
@@ -10,7 +10,8 @@
 | **Typologie** | CAPA / DOC |
 | **Branche** | `capitalization/sfia-v2.6-baseline-officialization` |
 | **Base Git** | `origin/main` @ `805952a9fffdba8787f07e5d60cf90ef74dacd37` |
-| **Statut proposé** | **PROPOSED BASELINE** — non en vigueur avant merge Morris |
+| **Statut proposé (pré-merge)** | **PROPOSED BASELINE** — non en vigueur avant merge Morris (historique du cycle) |
+| **Statut actuel (post-merge)** | **BASELINE OPÉRATIONNELLE OFFICIELLE** — voir §15 |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — préparation locale uniquement |
 
@@ -20,7 +21,7 @@
 
 ### 1.1 Définition de SFIA v2.6
 
-**SFIA v2.6** est la **consolidation officielle proposée** de la méthode opérationnelle du repository `mcleland147/sfia-workspace`. Elle représente :
+**SFIA v2.6** est la **consolidation officielle** de la méthode opérationnelle du repository `mcleland147/sfia-workspace`. Elle représente :
 
 1. la méthode opérationnelle jusqu’ici portée par **SFIA v2.4** ;
 2. les évolutions **SFIA v2.5** validées et déjà intégrées dans le fonctionnement courant (template, operating model, routing, review pack, handoff) ;
@@ -39,7 +40,7 @@ La méthode **fonctionne**. Les labels de version actifs (v2.4 baseline · v2.5
 ## 2. Formule de consolidation
 
 ```text
-SFIA v2.6 (proposed baseline)
+SFIA v2.6
   = héritage opérationnel SFIA v2.4
   + acquis retenus SFIA v2.5 (candidate absorbée)
   + apports repository SFIA v2.6 (rationalisation / standard)
@@ -55,12 +56,12 @@ SFIA v2.6 (proposed baseline)
 
 ## 3. Trajectoire des versions
 
-| Version | Statut cible après merge | Statut avant merge (présent cycle) |
-|---------|--------------------------|-------------------------------------|
+| Version | Statut cible après merge | Statut avant merge (historique du cycle) |
+|---------|--------------------------|------------------------------------------|
 | **SFIA v1.1** | Baseline historique stable | Inchangé |
 | **SFIA v2.4** | **Baseline historique précédente** | Encore présentée comme baseline opérationnelle dans docs actifs (à aligner) |
 | **SFIA v2.5** | **Trajectoire candidate absorbée** — **jamais** baseline opérationnelle | Encore présentée comme candidate non absorbée dans docs actifs |
-| **SFIA v2.6** | **Baseline opérationnelle officielle** | **PROPOSED BASELINE** (ce document) |
+| **SFIA v2.6** | **Baseline opérationnelle officielle** | **PROPOSED BASELINE** (statut du document avant merge) |
 | **SFIA v3.0** | Hors trajectoire | Hors trajectoire (sauf GO Morris explicite) |
 
 > **v2.5 n’est pas une « ancienne baseline ».** Elle reste une candidate absorbée dans v2.6.
@@ -198,7 +199,7 @@ Référence : `discovery-product-design/10-sfia-discovery-pd-09-capitalization-d
 
 | ID | Réserve |
 |----|---------|
-| R1 | Entrée en vigueur **uniquement après merge** — avant : PROPOSED BASELINE |
+| R1 | **Historique pré-merge :** entrée en vigueur uniquement après merge — avant : PROPOSED BASELINE (condition accomplie via PR #204) |
 | R2 | Occurrences historiques (`Baseline opérationnelle : SFIA v2.4` dans rapports datés) **volontairement conservées** |
 | R3 | Discovery / Notion métadonnées « Baseline v2.4 » = contexte pédagogique optionnel — **non spine** ; hors modification ce cycle |
 | R4 | Standard v2.4 consolidation doc reste référence technique héritée — libellé « baseline » historique acceptable dans ce fichier |
@@ -248,14 +249,38 @@ Référence : `discovery-product-design/10-sfia-discovery-pd-09-capitalization-d
 
 ---
 
-## 14. Verdict documentaire (préparation)
+## 14. Verdict documentaire (préparation — historique pré-merge)
 
 | Élément | Valeur |
 |---------|--------|
-| **Statut** | PROPOSED BASELINE |
+| **Statut (préparation)** | PROPOSED BASELINE *(historique — avant merge PR #204)* |
 | **Verdict cycle** | `SFIA v2.6 BASELINE PREPARED — READY FOR MORRIS REVIEW` |
-| **Baseline officielle active ?** | **Non** — avant merge |
+| **Baseline officielle active ?** | **Non** — avant merge *(historique)* |
 
 ---
 
-*Fin du manifest — consolidation, pas refonte.*
+## 15. Clôture post-merge — entrée en vigueur
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **PR** | [#204](https://github.com/mcleland147/sfia-workspace/pull/204) — **MERGED** |
+| **Date / heure merge** | 2026-07-16 14:19 Europe/Paris (CEST) / `2026-07-16T12:19:06Z` |
+| **Merge commit** | `7182deea62e0b8d79e1144283016e5927aa3dd9a` |
+| **Commit contenu** | `6e9eed1def9dec34b5e2a458728cb0d590238d5b` |
+| **Date d’entrée en vigueur** | 2026-07-16 — dès merge dans `main` |
+| **Statut final** | **BASELINE OPÉRATIONNELLE OFFICIELLE** |
+| **Source de vérité** | Git `main` |
+
+### Confirmations
+
+1. **SFIA v2.6** = baseline opérationnelle officielle et active sur `main`.
+2. **SFIA v2.4** = baseline historique précédente (absorbée).
+3. **SFIA v2.5** = candidate absorbée — **jamais** baseline opérationnelle.
+4. **Exclusions inchangées :** Discovery / Notion non promus ; v3.0 hors trajectoire ; MCP / Bridge / Runner hors trajectoire ; pas d’automatisation L5 globale.
+5. Git `main` reste la source de vérité.
+
+> Les libellés `PROPOSED BASELINE` ailleurs dans ce manifest décrivent uniquement la phase **avant merge** (§3, §10 R1, §11, §14). Ils ne constituent plus le statut courant.
+
+---
+
+*Fin du manifest — consolidation, pas refonte — statut actif : BASELINE OPÉRATIONNELLE OFFICIELLE.*
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index a8712ae..fd2b5e9 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -1,17 +1,17 @@
 ---
-status: proposed-baseline
-version: v2.6-proposed-baseline
+status: baseline
+version: v2.6
 type: prompt-instantiation-template
 family: SFIA v2.6 cycle execution
-updated_after: SFIA v2.6 proposed baseline officialization — consolidation v2.4 + v2.5 absorbed
+updated_after: SFIA v2.6 baseline officialization post-merge (PR #204) — consolidation v2.4 + v2.5 absorbed
 scope: instantiate Cursor execution prompts from ChatGPT
 ---
 
-# SFIA Cycle Execution — Template d'instanciation v2.6 (proposed baseline)
+# SFIA Cycle Execution — Template d'instanciation v2.6
 
 **Fichier :** `prompts/templates/sfia-cycle-execution-template.md`  
-**Statut :** SFIA v2.6 **proposed baseline** — **en vigueur après merge** Morris
-**Baseline proposée :** SFIA v2.6 — absorbe héritage v2.4 et acquis v2.5
+**Statut :** SFIA v2.6 **baseline opérationnelle officielle** (active sur `main`)
+**Baseline opérationnelle :** SFIA v2.6 — absorbe héritage v2.4 et acquis v2.5
 **Références :** operating model §18.2 ; routing guide §4.3–§4.4 ; manifest `2026-07-16-sfia-v2.6-baseline-release-manifest.md`
 
 > **Ce document est un template d'instanciation pour ChatGPT.** Il sert à **générer** des prompts Cursor SFIA adaptés au contexte. **Ce n'est pas un prompt Cursor à envoyer tel quel.**
@@ -26,7 +26,7 @@ scope: instantiate Cursor execution prompts from ChatGPT
 | **Pas pour** | Envoi direct à Cursor sans instanciation |
 | **Objectif** | Produire un **contrat d'exécution** borné : type de cycle + profil SFIA + périmètre + garde-fous |
 | **Repo-first** | Git est la source canonique ; le prompt déclare branche, HEAD, périmètre fichiers |
-| **Statut** | v2.6 **proposed baseline** — consolidation ; non en vigueur avant merge |
+| **Statut** | v2.6 **baseline opérationnelle officielle** — consolidation v2.4 + acquis v2.5 |
 | **Morris** | Autorité de décision — gates structurants, push, PR, merge, validation de baseline |
 | **Cursor** | Exécuteur contrôlé — ne décide pas, n'élargit pas le scope, n'arbitre pas |
 
@@ -156,7 +156,7 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 - Oublier review pack sur cycle documentaire
 - Omettre la décision Review Handoff Git (required / not required)
 - Présenter une candidate non mergée comme baseline validée
-- Présenter v2.6 comme baseline officielle **avant** merge Morris
+- Présenter une version non mergée comme baseline officielle
 - Relancer SFIA v3.0 sans GO Morris
 
 ---
@@ -323,7 +323,7 @@ Fichiers interdits :
 Garde-fous :
 - Ne pas push / PR / merge sans GO Morris
 - Ne pas élargir le périmètre
-- Ne pas déclarer SFIA v2.6 baseline officielle avant merge
+- Ne pas déclarer une candidate non mergée comme baseline officielle
 - Ne pas relancer SFIA 3.0
 - Git = source de vérité
 - [Garde-fous spécifiques au cycle]
@@ -1350,10 +1350,10 @@ Procédure détaillée :
 5. Critical : toujours justifier. Standard par défaut si doute.
 6. Review pack proportionné : none / light / full — voir template §7. Jamais de stub final si light ou full requis.
 7. Review Handoff Git : décision required / not required obligatoire dans chaque prompt (template §3, §5, §7.10–§7.11). Lorsque required : copie, commit, push origin/sfia/review-handoff, vérification remote, instruction ChatGPT §9.1 dans le rapport final. Verdict PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING si absent.
-8. v2.6 = proposed baseline (en vigueur après merge). v2.4 = historique précédente. v2.5 = candidate absorbée. v3.0 = hors trajectoire.
+8. v2.6 = baseline opérationnelle officielle (active sur `main`). v2.4 = historique précédente. v2.5 = candidate absorbée. v3.0 = hors trajectoire.
 9. Morris décide push branche projet, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas. Push handoff required = L3 borné sans micro-GO Morris.
 ```
 
 ---
 
-*SFIA v2.6 proposed baseline — Template d'instanciation — consolidation v2.4 + acquis v2.5 — en vigueur après merge — Morris décide.*
+*SFIA v2.6 baseline opérationnelle officielle — Template d'instanciation — consolidation v2.4 + acquis v2.5 — Morris décide.*
```

---

## 8. Occurrences après correction

```text
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:13:| **Statut proposé (pré-merge)** | **PROPOSED BASELINE** — non en vigueur avant merge Morris (historique du cycle) |
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:64:| **SFIA v2.6** | **Baseline opérationnelle officielle** | **PROPOSED BASELINE** (statut du document avant merge) |
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:202:| R1 | **Historique pré-merge :** entrée en vigueur uniquement après merge — avant : PROPOSED BASELINE (condition accomplie via PR #204) |
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:215:| **Avant merge** | Statut **PROPOSED BASELINE** — préparation locale uniquement |
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:256:| **Statut (préparation)** | PROPOSED BASELINE *(historique — avant merge PR #204)* |
method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md:282:> Les libellés `PROPOSED BASELINE` ailleurs dans ce manifest décrivent uniquement la phase **avant merge** (§3, §10 R1, §11, §14). Ils ne constituent plus le statut courant.
```

---

## 9. Tableau des occurrences restantes

| Fichier | Ligne | Formulation | Historique explicite | Active | Acceptable | Justification |
|---------|-------|-------------|----------------------|--------|------------|---------------|
| Manifest | 13 | `PROPOSED BASELINE` + `non en vigueur avant merge` | **oui** — champ « Statut proposé (pré-merge) » + mention historique | non | **oui** | Temporalité pré-merge explicite ; statut actuel = ligne suivante |
| Manifest | 64 | `PROPOSED BASELINE` (colonne avant merge) | **oui** — colonne « Statut avant merge (historique du cycle) » | non | **oui** | Colonne historique ; cible après merge = officielle |
| Manifest | 202 | R1 pré-merge / PROPOSED BASELINE | **oui** — « Historique pré-merge » + condition accomplie | non | **oui** | Réserve historique accomplie |
| Manifest | 215 | Avant merge → PROPOSED BASELINE | **oui** — tableau Effet de la release | non | **oui** | Timeline avant/après |
| Manifest | 256 | Statut (préparation) PROPOSED BASELINE | **oui** — §14 « historique pré-merge » | non | **oui** | Verdict de préparation figé |
| Manifest | 282 | mention méta des libellés PROPOSED | **oui** — note de lecture | non | **oui** | Clarifie que ce n’est plus le statut courant |

**Aucune occurrence restante dans template, README, routing, knowledge, global capa, operating model, rules.**

Tokens absents des docs actifs opérationnels : `proposed-baseline`, `v2.6-proposed-baseline`, `Baseline proposée`, `en vigueur après merge` (comme statut courant).

---

## 10. Contrôles Git

| Contrôle | Résultat |
|----------|----------|
| Branche | `capitalization/sfia-v2.6-active-status-alignment` |
| HEAD | `7182deea62e0b8d79e1144283016e5927aa3dd9a` |
| Upstream | **aucun** |
| `git diff --name-status` | 8 × M |
| `git diff --stat` | 8 files, +60 / −35 |
| `git diff --check` | OK |
| Staging | vide |
| Commit | aucun |
| Push branche corrective | aucun |
| Hors périmètre | aucun |
| Doctrine / cycles / profils / blocs | inchangés |
| Discovery / Notion / v3 / MCP Bridge | non promus / hors trajectoire préservés |

---

## 11. Question centrale

> Les documents actifs permettent-ils désormais d’utiliser SFIA v2.6 comme baseline opérationnelle officielle sans ambiguïté ?

**Oui.** Le template canonique déclare `status: baseline` / `version: v2.6` ; les documents opérationnels et la clôture §15 du manifest confirment la baseline active. Les résidus `PROPOSED BASELINE` sont uniquement historiques et explicitement étiquetés.

---

## 12. Décisions Morris

| Gate | Statut |
|------|--------|
| Branche corrective locale | **acquis** |
| Modification 8 fichiers | **acquis** |
| Review pack FULL | **acquis** |
| Push handoff | **acquis** (ce cycle) |
| Commit branche corrective | **non acquis** |
| Push / PR / merge corrective | **non acquis** |
| Suppression branches | **non acquis** |

---

## 13. Réserves

| ID | Réserve |
|----|---------|
| A1 | Alignement non encore sur `main` tant que commit/PR/merge non autorisés |
| A2 | Branche `capitalization/sfia-v2.6-baseline-officialization` distante encore présente (cleanup séparé) |
| A3 | Occurrences historiques `PROPOSED BASELINE` volontairement conservées dans le manifest |

---

## 14. Verdict

`SFIA v2.6 ACTIVE STATUS ALIGNED — READY FOR MORRIS COMMIT DECISION`

---

## 15. Instruction ChatGPT

Lire depuis `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier :

1. branche `capitalization/sfia-v2.6-active-status-alignment` ;
2. HEAD `7182dee…` ;
3. exactement 8 fichiers ;
4. template `status: baseline` / `version: v2.6` ; aucune règle active « non en vigueur avant merge » ;
5. README / routing / knowledge / global / OM / rules alignés ;
6. manifest §15 complète + footer actif ;
7. occurrences restantes uniquement historiques justifiées ;
8. aucun commit/push branche corrective ;
9. pack FULL (diff complet inclus) ;
10. verdict `SFIA v2.6 ACTIVE STATUS ALIGNED — READY FOR MORRIS COMMIT DECISION`.

Si sections modifiées / diff absents : `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.

*Fin review pack FULL — 2026-07-16 14:32 Europe/Paris.*
