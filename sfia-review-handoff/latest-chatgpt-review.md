# Review pack FULL — SFIA Studio post-merge sync PR readiness

**Date / heure :** 2026-07-18 18:20:52 CEST
**Repository :** `/Users/morris/Projects/sfia-workspace` (`mcleland147/sfia-workspace`)
**Branche :** `project/sfia-studio-functional-design`
**HEAD initial :** `99eaeaab3120d488606963eb4e5f69c4f730cf14`
**HEAD / commit projet :** `cf64fdd82f9b71960111d22d10c0fb7e0433cb4d`
**origin/main :** `fdade59a23a6dff4c264c73975358f77bc90f9b0`
**Handoff source :** `7ef5d924d928cff3a830f5a12a9f0672caf3011b`
**Cycle :** 13 — PR readiness | **Profil :** Critical
**PR :** #210 draft — https://github.com/mcleland147/sfia-workspace/pull/210
**PR historique :** #209 MERGED (`fdade59…`)

---

## 1. Décision Morris

Autorise staging, commit unique, push sans force, draft PR, review pack FULL, handoff.
**Interdit :** ready-for-review ; merge ; auto-merge ; suppression branche ; modification baseline fonctionnelle ; D-VAL-12 ; architecture / POC / MVP.

---

## 2. Justification Critical

Documents contrôlant Git/GPT/Cursor ; sync factuelle uniquement ; non-régression fonctionnelle obligatoire avant versionnement.

---

## 3. État Git

```text
 M projects/campus360/README.md
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/04-detailed-framing.md
?? projects/campus360/05-mvp-increment-trajectory.md
?? projects/campus360/06-governance-and-stakeholders.md
?? projects/campus360/07-risks-dependencies-and-gates.md
?? sfia-review-handoff/
```

---

## 4. Périmètre — quatre fichiers

| Fichier | Action |
|---------|--------|
| README.md | M |
| 07-product-trajectory-and-decision-pack.md | M |
| 08-functional-design.md | M |
| 10-functional-decision-pack.md | M |

`09` et `01`–`06` : **non modifiés**.

---

## 5. Statuts synchronisés

Conception validée + intégrée ; PR #209 mergée ; `fdade59…` ; cycle 2 clôturé ; écart autorisation clôturé ; onze docs ; branches conservées ; FD-CAND VALIDÉES ; pas de D-VAL-12 ; architecture/stack/POC/MVP non lancés ; cycle suivant non sélectionné.

---

## 6. Non-régression

| Élément | Preuve |
|---------|--------|
| Corps fonctionnel `08` (##2–##12) | IDENTIQUE au `99eaeaa…` — hash `383f0cfd89d20a9c1d6d419dcbdad178f000f08782799f9f5a94f4e185863cff` — match=True |
| Fichier `09` | IDENTIQUE — hash `88be70d27f918cc8103ce90e385356b0704edc6433ab37940d4432b2b318ec00` — match=True |
| FR / BR / F / INV / AC / RF | Inchangés |
| FD-CAND-01…08 | Conservées VALIDÉES |
| D-VAL-12 | Absente |

---

## 7. Commit

```text
commit cf64fdd82f9b71960111d22d10c0fb7e0433cb4d
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sat Jul 18 18:20:05 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sat Jul 18 18:20:05 2026 +0200

    docs(sfia-studio): synchronize functional design post-merge status
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/08-functional-design.md
M	projects/sfia-studio/10-functional-decision-pack.md
M	projects/sfia-studio/README.md
```

```text
cf64fdd docs(sfia-studio): synchronize functional design post-merge status
 .../07-product-trajectory-and-decision-pack.md     | 79 ++++++++++++----------
 projects/sfia-studio/08-functional-design.md       | 23 ++++---
 .../sfia-studio/10-functional-decision-pack.md     | 47 +++++++------
 projects/sfia-studio/README.md                     | 65 ++++++++++--------
 4 files changed, 115 insertions(+), 99 deletions(-)
```

| Champ | Valeur |
|-------|--------|
| SHA | `cf64fdd82f9b71960111d22d10c0fb7e0433cb4d` |
| Message | `docs(sfia-studio): synchronize functional design post-merge status` |
| Fichiers | Exactement 4 |

---

## 8. Push

| Champ | Valeur |
|-------|--------|
| Force | Non |
| Distant | `cf64fdd82f9b71960111d22d10c0fb7e0433cb4d	refs/heads/project/sfia-studio-functional-design` |
| Local = distant | Oui |

---

## 9. Diff vs main

```text
cf64fdd docs(sfia-studio): synchronize functional design post-merge status
```

```text
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/08-functional-design.md
M	projects/sfia-studio/10-functional-decision-pack.md
M	projects/sfia-studio/README.md
```

```text
 .../07-product-trajectory-and-decision-pack.md     | 79 ++++++++++++----------
 projects/sfia-studio/08-functional-design.md       | 23 ++++---
 .../sfia-studio/10-functional-decision-pack.md     | 47 +++++++------
 projects/sfia-studio/README.md                     | 65 ++++++++++--------
 4 files changed, 115 insertions(+), 99 deletions(-)
```

`git diff --check` : `clean`

---

## 10. Draft PR

```json
{"baseRefName":"main","body":"## Objet\n\nSynchronise les statuts documentaires de la conception fonctionnelle après le merge de la PR #209.\n\n## Contexte\n\n- conception fonctionnelle validée et intégrée sur `main` ;\n- PR #209 mergée ;\n- cycle 2 clôturé ;\n- écart d’autorisation du merge clôturé en traçabilité ;\n- aucune D-VAL-12.\n\n## Modifications\n\n- met à jour le README ;\n- met à jour la trajectoire et les décisions ;\n- met à jour les métadonnées du contrat fonctionnel ;\n- met à jour le pack de décision fonctionnel.\n\n## Périmètre\n\n- quatre fichiers `projects/sfia-studio/` uniquement ;\n- aucune modification du référentiel fonctionnel ;\n- aucune modification de `09-functional-flows-and-rules.md` ;\n- aucune modification méthode, Campus360, code ou configuration.\n\n## Non-régression\n\n- FR-001 à FR-025 inchangées ;\n- BR-001 à BR-025 inchangées ;\n- F1 à F12 inchangés ;\n- INV-01 à INV-14 inchangés ;\n- AC-01 à AC-08 et RF-01 à RF-07 inchangés ;\n- FD-CAND-01 à FD-CAND-08 conservées validées.\n\n## Garde-fous\n\n- architecture et stack non décidées ;\n- Runtime candidat ;\n- POC non lancé ;\n- MVP non défini ;\n- prochain cycle non sélectionné ;\n- branches conservées.\n\n## Validation\n\n- review pack FULL ;\n- `git diff --check` conforme ;\n- handoff Git publié.\n\n## Restrictions\n\n- PR maintenue en draft ;\n- ready-for-review non autorisé ;\n- merge non autorisé ;\n- suppression de branche non autorisée ;\n- architecture fonctionnelle non lancée.\n\n\nMade with [Cursor](https://cursor.com)","files":[{"path":"projects/sfia-studio/07-product-trajectory-and-decision-pack.md","additions":42,"deletions":37,"changeType":"MODIFIED"},{"path":"projects/sfia-studio/08-functional-design.md","additions":12,"deletions":11,"changeType":"MODIFIED"},{"path":"projects/sfia-studio/10-functional-decision-pack.md","additions":26,"deletions":21,"changeType":"MODIFIED"},{"path":"projects/sfia-studio/README.md","additions":35,"deletions":30,"changeType":"MODIFIED"}],"headRefName":"project/sfia-studio-functional-design","headRefOid":"cf64fdd82f9b71960111d22d10c0fb7e0433cb4d","isDraft":true,"number":210,"state":"OPEN","title":"docs: synchronize SFIA Studio functional design post-merge status","url":"https://github.com/mcleland147/sfia-workspace/pull/210"}
```

| Champ | Valeur |
|-------|--------|
| Numéro | **210** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/210 |
| Draft | **true** |
| Base/head | main ← project/sfia-studio-functional-design |
| Fichiers | Exactement 4 |
| Ready-for-review / merge | **Non** |

---

## 11. Architecture / POC / MVP / branches / cycle suivant

Architecture non lancée ; stack non choisie ; Runtime candidat ; POC/MVP non lancés ; branches conservées ; cycle suivant **non sélectionné** (reco architecture).

---

## 12. Verdict

`SFIA STUDIO POST-MERGE STATUS SYNC VERSIONED — DRAFT PR CREATED — READY FOR CHATGPT REVIEW`

---

## 13. DIFF COMPLET vs main (Studio)

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index bab129c..df1237a 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -7,12 +7,12 @@
 | **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
 | **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
 | **Baseline** | SFIA v2.6 (Option C) |
-| **Statut** | `functional-design-validated` (trajectoire) ; cadrage documentaire **clôturé** |
+| **Statut** | `functional-design-integrated` ; cadrage documentaire **clôturé** ; cycle 2 **clôturé** |
 | **Décisions** | D-VAL-1 à D-VAL-11 (inchangées) ; FD-CAND-01…08 **VALIDÉES** |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` — base `8f5e8a8…` (cadrage) ; conception validée **locale** |
+| **Source de vérité** | Git `main` @ `fdade59…` — cadrage + conception intégrés |
 
-> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception fonctionnelle **VALIDÉE** — Morris — 2026-07-18. **Pas de D-VAL-12.**
+> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE** (PR #209). **Pas de D-VAL-12.**
 
 ---
 
@@ -28,26 +28,30 @@
 | D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
 | Cadrage documentaire | **Clôturé** (inchangé) |
 | Branche projet historique | Conservée ; intégrée à `main` ; suppression = décision distincte |
-| Cycle 2 conception | **Sélectionnée, produite, revue et VALIDÉE** — Morris — 2026-07-18 |
+| Cycle 2 conception | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` via PR #209 |
 | FD-CAND-01…08 | **VALIDÉES** — Morris — 2026-07-18 |
-| Intégration Git conception | **Non réalisée** — GO distinct requis |
+| Intégration Git conception | **Réalisée** — PR #209 / merge `fdade59…` / commit `99eaeaa…` |
+| Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 |
+| Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 ; sans réécriture rétroactive du GO draft |
 | Prochain cycle après conception | **Non sélectionné** |
 
-> Le merge est un fait Git. D-VAL-11 le régularise et clôture le cadrage documentaire.
+> Le merge #207 est un fait Git. D-VAL-11 clôture le cadrage. Le merge #209 intègre la conception ; l’acceptation Morris clôture l’écart d’autorisation.
 
 ### Trace factuelle — cycle 2 (conception fonctionnelle)
 
 | Champ | Valeur |
 |-------|--------|
 | Sélection / lancement | **2026-07-18** — décision Morris |
-| Production et revue | Documents `08`–`10` ; handoff `80987d8…` |
+| Production et revue | Documents `08`–`10` |
 | **Validation Morris** | **2026-07-18** — conception **VALIDÉE** |
 | FD-CAND-01…08 | **VALIDÉES** |
 | Profil | Critical |
-| Statut conception | `functional-design-validated` |
-| Intégration Git | **Non réalisée** (commit/push/PR interdits dans ce sous-cycle) |
-| Exclu / réserve | Architecture non validée ; UX visuelle non lancée ; stack non décidée ; POC non lancé ; MVP non défini ; code interdit |
+| Statut conception | `functional-design-validated` puis **intégrée** |
+| Intégration Git | **Réalisée** — PR #209 MERGED ; `99eaeaa…` → `fdade59…` |
+| Clôture cycle 2 | **Oui** — technique et documentaire (acceptation Morris post-merge) |
+| Exclu / réserve | Architecture non validée ; UX visuelle non lancée ; stack non décidée ; POC non lancé ; MVP non défini |
 | D-VAL-1…11 | **Inchangées** — **aucune D-VAL-12** |
+| Branches | `functional-design` et `pre-framing` **conservées** |
 
 ---
 
@@ -107,7 +111,7 @@ Pré-cadrage                         ← terminé historiquement
   → versionnement documentaire      ← commit / push / draft PR (D-VAL-10 / G7)
   → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
   → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
-  → conception fonctionnelle        ← **VALIDÉE** Morris — 2026-07-18 — locale hors main
+  → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / `fdade59…`) — **CLÔTURÉE**
   → architecture fonctionnelle      ← **RECOMMANDATION — NON SÉLECTIONNÉE**
   → UX/UI initiale                  ← non sélectionnée
   → architecture technique candidate
@@ -127,9 +131,10 @@ Pré-cadrage                         ← terminé historiquement
 - POC = **lot** multi-cycle, pas un cycle SFIA autonome.
 - MVP **distinct** du POC.
 - G7 historique = versionnement (commit / push / draft PR) — **distinct** du merge.
-- Merge = fait Git ; régularisation et clôture = **D-VAL-11 validée**.
+- Merge #207 = fait Git ; régularisation cadrage = **D-VAL-11**.
+- Merge #209 = fait Git ; conception intégrée ; écart d’autorisation **clôturé** par acceptation Morris (sans D-VAL-12).
 - Aucune stack / architecture validée.
-- Conception fonctionnelle **VALIDÉE** localement ; **pas** intégrée sur `main` ; aucune architecture / UX visuelle / POC / MVP lancée.
+- Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main` ; aucune architecture / UX visuelle / POC / MVP lancée.
 - Cycle suivant après conception **non sélectionné**.
 
 ---
@@ -148,12 +153,12 @@ Pré-cadrage                         ← terminé historiquement
 
 | Champ | Contenu |
 |-------|---------|
-| Statut | **VALIDÉE** — Morris — 2026-07-18 |
+| Statut | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` (PR #209) |
 | Objectif | Préciser comportements et règles métier des capacités |
-| Livrables | `08` / `09` / `10` — **validés** (locaux) |
+| Livrables | `08` / `09` / `10` — **validés** et **intégrés** |
 | Profil | Critical |
 | FD-CAND-01…08 | **VALIDÉES** |
-| Intégration Git | Non réalisée — GO distinct |
+| Intégration Git | **Réalisée** — `99eaeaa…` / `fdade59…` |
 | Ne lance pas | Architecture ; UX visuelle ; stack ; POC ; MVP ; code |
 
 ### 4.2 Architecture fonctionnelle
@@ -195,9 +200,10 @@ Pré-cadrage                         ← terminé historiquement
 | D-NEXT-2 | Sélection du cycle conception fonctionnelle | Morris | **FAIT** — 2026-07-18 |
 | D-NEXT-2b | Validation de la conception (FD-CAND-01…08) | Morris | **VALIDÉE** — 2026-07-18 |
 | D-NEXT-2c | Sélection du cycle suivant après validation conception | Morris | **Non sélectionné** |
-| D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **Non prise** — interdite ici |
+| D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **FAIT** — réalisés (PR #209) |
+| D-NEXT-2e | Acceptation intégration / clôture écart merge #209 | Morris | **VALIDÉE** — 2026-07-18 (sans D-VAL-12) |
 | D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
-| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception validée ; suite **non sélectionnée** |
+| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; suite **non sélectionnée** |
 | D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
 | D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
 | D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
@@ -205,7 +211,7 @@ Pré-cadrage                         ← terminé historiquement
 | D-NEXT-9 | Merge PR #207 | Observation Git + D-VAL-11 | **Réalisé / régularisé** (`ec21074`) |
 | D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
 | D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
-| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Locale ; non poussée ; décision distincte |
+| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Conservée (poussée ; intégrée) ; décision distincte |
 
 ---
 
@@ -235,11 +241,11 @@ Pré-cadrage                         ← terminé historiquement
 
 ### Recommandation (≠ décision / ≠ sélection)
 
-**Conception fonctionnelle bornée** (Option 1) a été **sélectionnée, produite et VALIDÉE** le 2026-07-18.
+**Conception fonctionnelle bornée** (Option 1) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209).
 
 **Prochain cycle recommandé :** architecture fonctionnelle Critical — **RECOMMANDATION — NON SÉLECTIONNÉE**.
 
-Morris reste libre de choisir Option 2, Option 3 ou un autre cycle. **Aucun** cycle architecture / UX visuelle / POC / MVP n’est lancé. **Aucun** commit/push/PR projet autorisé ici.
+Morris reste libre de choisir Option 2, Option 3 ou un autre cycle. **Aucun** cycle architecture / UX visuelle / POC / MVP n’est lancé.
 
 ---
 
@@ -255,18 +261,17 @@ Morris reste libre de choisir Option 2, Option 3 ou un autre cycle. **Aucun** cy
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G4+ **ne sont pas** validés. Validation conception (FD-CAND-01…08) : **VALIDÉE** — 2026-07-18. GO Git conception : **non pris**.
+Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Intégration #209 : **acceptée**. GO cycle suivant : **non pris**.
 
 ---
 
 ## 8. Questions Morris
 
-1. Autorisez-vous commit / push / PR de la conception (GO Git distinct) ?
-2. Sélectionnez-vous le cycle suivant (architecture fonctionnelle Critical recommandée — **non sélectionnée**) ?
-3. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
-4. Quel sort pour `project/sfia-studio-functional-design` ?
-5. Quel niveau d’architecture minimale avant POC ?
-6. Quelles priorités NFR avant le POC ?
+1. Sélectionnez-vous le cycle suivant (architecture fonctionnelle Critical recommandée — **non sélectionnée**) ?
+2. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
+3. Quel sort pour `project/sfia-studio-functional-design` (conservée) ?
+4. Quel niveau d’architecture minimale avant POC ?
+5. Quelles priorités NFR avant le POC ?
 
 ---
 
@@ -281,7 +286,7 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception (FD-CAND-01…0
 | G7 commit / push / draft PR | **Réalisés** (D-VAL-10) |
 | Merge PR #207 | **Fait Git** — régularisé D-VAL-11 |
 | Clôture formelle cadrage | **FAIT** (D-VAL-11 — 2026-07-18) |
-| Cycle conception fonctionnelle | **VALIDÉ** — locale hors main |
+| Cycle conception fonctionnelle | **CLÔTURÉ** — intégré PR #209 |
 | FD-CAND-01…08 | **VALIDÉES** |
 | Prochain cycle après conception | **Non sélectionné** |
 
@@ -292,16 +297,16 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception (FD-CAND-01…0
 | Élément | Valeur |
 |---------|--------|
 | Cadrage détaillé | **VALIDÉ** (D-VAL-9) |
-| Intégration cadrage `main` | **Oui** (PR #207 / #208 ; base `8f5e8a8…`) |
-| Synchronisation post-merge | **VALIDÉE** (D-VAL-11) |
+| Intégration cadrage `main` | **Oui** (PR #207 / #208) |
 | Cadrage documentaire | **Clôturé** |
 | D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
-| Conception fonctionnelle | **VALIDÉE** — Morris — 2026-07-18 — **locale** |
+| Conception fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — PR #209 / `fdade59…` |
 | FD-CAND-01…08 | **VALIDÉES** |
-| Intégration conception `main` | **Non** — GO distinct |
+| Cycle 2 | **CLÔTURÉ** |
+| Écart autorisation merge #209 | **Clôturé** (sans D-VAL-12) |
 | Ready for architecture / POC / MVP | **Non** |
 
-**Verdict :** `SFIA STUDIO FUNCTIONAL DESIGN VALIDATED — DOCUMENTARY FINALIZATION READY FOR MORRIS REVIEW`
+**Verdict :** `SFIA STUDIO FUNCTIONAL DESIGN POST-MERGE STATUS SYNCHRONIZED — READY FOR MORRIS REVIEW`
 
 ---
 
@@ -313,10 +318,10 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception (FD-CAND-01…0
 | [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
 | [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
 | [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
-| [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé** |
+| [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé / intégré** |
 | [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours **validés** |
-| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation** |
+| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation / clôture** |
 
 ---
 
-*SFIA Studio — cadrage clôturé (D-VAL-11) — conception fonctionnelle VALIDÉE (Morris — 2026-07-18) — locale hors main — Morris décide.*
+*SFIA Studio — cadrage clôturé (D-VAL-11) — conception VALIDÉE et INTÉGRÉE (PR #209 / `fdade59…`) — cycle 2 clôturé — Morris décide.*
diff --git a/projects/sfia-studio/08-functional-design.md b/projects/sfia-studio/08-functional-design.md
index 819db3a..2bf2f33 100644
--- a/projects/sfia-studio/08-functional-design.md
+++ b/projects/sfia-studio/08-functional-design.md
@@ -8,16 +8,17 @@
 | **Profil** | Critical |
 | **Typologie** | DOC — EVOL produit |
 | **Baseline** | SFIA v2.6 (Option C) |
-| **Base Git** | `origin/main` @ `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
-| **Branche travail** | `project/sfia-studio-functional-design` (locale — push interdit) |
-| **Statut** | `functional-design-validated` |
+| **Base Git** | `origin/main` @ `fdade59a23a6dff4c264c73975358f77bc90f9b0` (PR #209) |
+| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée) |
+| **Statut** | `functional-design-validated` — **intégré** sur `main` ; cycle **clôturé** |
 | **Autorité** | Morris (L0) |
 | **Décision validation** | Morris — **2026-07-18** — conception fonctionnelle **VALIDÉE** |
+| **Intégration** | PR #209 MERGED — commit `99eaeaab…` — merge `fdade59…` |
 | **Décisions cadrage** | D-VAL-1 à D-VAL-11 (historiques / validées) |
 | **Décisions conception** | FD-CAND-01 à FD-CAND-08 — **VALIDÉES** — Morris — 2026-07-18 |
 | **Cycle suivant** | **Non sélectionné** |
 
-> Contrat de conception fonctionnelle **validé**. **Pas** d’architecture technique, stack, API, modèle de données, Figma, backlog, POC ou MVP. Aucune D-VAL-12.
+> Contrat de conception fonctionnelle **validé** et **intégré** sur `main`. **Pas** d’architecture technique, stack, API, modèle de données, Figma, backlog, POC ou MVP. Aucune D-VAL-12.
 
 ---
 
@@ -50,17 +51,17 @@ Acteurs et responsabilités ; domaines D1–D10 ; douze états ; transitions ; F
 | MVP | **Non défini / non lancé** |
 | Backlog / user stories | **Non créés** |
 | Cycle suivant | **Non lancé** par cette validation |
-| Actions Git projet | Commit / push / PR / merge **non autorisés** par cette validation |
+| Actions Git projet (à la validation) | Commit / push / PR / merge **non autorisés** par la seule validation — faits ultérieurs sous GO distincts |
 
-### Effet de la validation
+### Effet de la validation (historique) et état post-intégration
 
-- Le référentiel fonctionnel `08`–`10` devient **socle validé** localement.
-- Aucun effet sur architecture, POC, MVP, stack ou actions Git projet.
-- L’intégration sur `main` exige un **GO Git distinct**.
+- Le référentiel fonctionnel `08`–`10` est devenu **socle validé**.
+- Aucun effet automatique sur architecture, POC, MVP ou stack.
+- **État courant :** intégration réalisée via PR #209 (`99eaeaa…` / `fdade59…`) ; cycle conception **clôturé** ; acceptation Morris de l’intégration (2026-07-18) ; écart d’autorisation de merge **clôturé** sans D-VAL-12.
 
 ### Éléments non décidés
 
-Architecture ; UX/UI visuelle ; stack ; contenu POC ; définition MVP ; commit/push/PR de la conception ; sort des branches ; sélection du cycle suivant.
+Architecture ; UX/UI visuelle ; stack ; contenu POC ; définition MVP ; sort des branches ; sélection du cycle suivant.
 
 ---
 
@@ -338,4 +339,4 @@ Pas de wireframes, maquettes, Figma, dimensions ni composants UI.
 
 ---
 
-*SFIA Studio — conception fonctionnelle VALIDÉE (Morris — 2026-07-18) — Critical — architecture/stack/POC/MVP non décidés — Morris décide.*
+*SFIA Studio — conception fonctionnelle VALIDÉE et INTÉGRÉE (PR #209 / `fdade59…`) — Critical — architecture/stack/POC/MVP non décidés — Morris décide.*
diff --git a/projects/sfia-studio/10-functional-decision-pack.md b/projects/sfia-studio/10-functional-decision-pack.md
index 826c29b..f732004 100644
--- a/projects/sfia-studio/10-functional-decision-pack.md
+++ b/projects/sfia-studio/10-functional-decision-pack.md
@@ -7,12 +7,12 @@
 | **Cycle** | 2 — Conception fonctionnelle (finalisation documentaire) |
 | **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (Option C) |
-| **Base Git** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
-| **Statut** | `functional-design-validated` |
+| **Base Git** | `fdade59a23a6dff4c264c73975358f77bc90f9b0` (PR #209) |
+| **Statut** | `functional-design-validated` — **intégré** ; cycle **clôturé** |
 | **Destinataire** | Morris (L0) |
-| **Décision** | Validation Morris — **2026-07-18** |
+| **Décision** | Validation Morris — **2026-07-18** ; acceptation intégration #209 — **2026-07-18** |
 
-> Pack de **validation**. FD-CAND-01…08 **VALIDÉES**. Identifiants `FD-CAND-*` = locaux au cycle de conception — **ne modifient pas** la numérotation D-VAL. **Pas de D-VAL-12.**
+> Pack de **validation / clôture**. FD-CAND-01…08 **VALIDÉES**. Identifiants `FD-CAND-*` = locaux au cycle de conception — **ne modifient pas** la numérotation D-VAL. **Pas de D-VAL-12.**
 
 ---
 
@@ -22,18 +22,19 @@
 |-------|------|
 | Sélection cycle 2 | Morris — 2026-07-18 |
 | Production `08`–`10` | Cycle conception Critical |
-| Revue handoff | `80987d8…` sur `sfia/review-handoff` |
 | **Validation conception** | **Morris — 2026-07-18 — VALIDÉE** |
-| Intégration Git projet | **Non réalisée** — GO distinct requis |
+| Intégration Git projet | **Réalisée** — PR #209 MERGED (`99eaeaa…` / `fdade59…`) |
+| Acceptation intégration / écart merge | **Clôturés** — Morris — 2026-07-18 (sans D-VAL-12) |
+| Cycle 2 | **CLÔTURÉ** |
 | Cycle suivant | **Non sélectionné** |
 
-Livrables validés localement :
+Livrables validés et **intégrés** sur `main` :
 
 - `08-functional-design.md` — contrat fonctionnel ;
 - `09-functional-flows-and-rules.md` — parcours F1–F12 et règles BR ;
-- `10-functional-decision-pack.md` — le présent pack de validation.
+- `10-functional-decision-pack.md` — le présent pack.
 
-Aucune architecture, stack, UX visuelle, backlog, POC ou MVP n’a été lancé. Aucun commit / push / PR projet.
+Aucune architecture, stack, UX visuelle, backlog, POC ou MVP n’a été lancé.
 
 ---
 
@@ -55,7 +56,8 @@ Aucune architecture, stack, UX visuelle, backlog, POC ou MVP n’a été lancé.
 | Autorité | Morris |
 | Date | **2026-07-18** |
 | Objet | Socle fonctionnel `08`–`10` + FD-CAND-01…08 |
-| Effet Git projet | **Aucun** (commit/push/PR interdits dans ce sous-cycle) |
+| Effet Git projet (à la validation) | Aucun automatique — faits Git ultérieurs sous GO distincts |
+| Intégration courante | **Réalisée** — PR #209 |
 | Effet architecture / POC / MVP | **Aucun** |
 
 ---
@@ -86,10 +88,11 @@ Aucune architecture, stack, UX visuelle, backlog, POC ou MVP n’a été lancé.
 | Figma / maquettes / design system | Non autorisés |
 | Backlog / user stories delivery | Non créés |
 | POC / MVP | **Non lancés / non définis** |
-| Code / tests | Interdits |
-| Commit / push / PR / merge projet | **Interdits** (GO distinct) |
+| Code / tests | Hors conception |
 | Modification SFIA v2.6 / Campus360 | Interdites |
 
+> Note historique : le cycle de validation n’autorisait pas commit/push/PR/merge. Ces faits Git ont ensuite été réalisés sous GO distincts (PR #209). Commit / push / PR / merge restent des autorisations **génériques distinctes**.
+
 ---
 
 ## 6. Réserves structurantes
@@ -164,13 +167,14 @@ RF-01…RF-07 demeurent le registre de risques fonctionnels à suivre (voir hist
 
 | Décision | Statut |
 |----------|--------|
-| Autorisation commit / push / PR de la conception | **Non prise** — interdite dans ce sous-cycle |
 | Sélection / lancement du cycle architecture fonctionnelle | **Non sélectionné** (recommandation ci-dessous) |
 | Validation future du contenu d’architecture | Ouverte |
-| Sort des branches (`functional-design` / `pre-framing`) | Ouvert |
+| Sort des branches (`functional-design` / `pre-framing`) | Conservées ; décisions distinctes |
 | Contenu du POC | Ouvert — non lancé |
 | Définition / lancement du MVP | Ouvert — non lancé |
 
+> Intégration Git / commit / push / PR de la conception : **faits réalisés** (PR #209) — plus des décisions ouvertes.
+
 ---
 
 ## 12. Gates
@@ -179,10 +183,11 @@ RF-01…RF-07 demeurent le registre de risques fonctionnels à suivre (voir hist
 |------|--------|
 | Validation Morris conception | **VALIDÉE** — 2026-07-18 |
 | FD-CAND-01…08 | **VALIDÉES** |
-| Finalisation documentaire | **Autorisée** (ce sous-cycle) |
-| GO Git projet (commit/push/PR) | **Interdit** |
+| Intégration PR #209 / acceptation | **VALIDÉE** — 2026-07-18 |
+| Écart d’autorisation merge | **Clôturé** (sans D-VAL-12) |
+| Cycle 2 conception | **CLÔTURÉ** |
 | GO cycle suivant | **Non pris** |
-| Merge / suppression branche | **Interdits** |
+| Suppression branche | **Interdite** |
 
 ---
 
@@ -192,13 +197,13 @@ RF-01…RF-07 demeurent le registre de risques fonctionnels à suivre (voir hist
 |---------|--------|
 | Recommandation | Architecture fonctionnelle Critical |
 | Qualification | **RECOMMANDATION — NON SÉLECTIONNÉE** |
-| Lancement | **Non autorisé** par la présente validation |
+| Lancement | **Non autorisé** / **non sélectionné** |
 
 ---
 
 ## 14. Verdict documentaire
 
-`SFIA STUDIO FUNCTIONAL DESIGN VALIDATED — DOCUMENTARY FINALIZATION READY FOR MORRIS REVIEW`
+`SFIA STUDIO FUNCTIONAL DESIGN POST-MERGE STATUS SYNCHRONIZED — READY FOR MORRIS REVIEW`
 
 ---
 
@@ -206,11 +211,11 @@ RF-01…RF-07 demeurent le registre de risques fonctionnels à suivre (voir hist
 
 | Document | Usage |
 |----------|-------|
-| [08-functional-design.md](./08-functional-design.md) | Contrat validé |
+| [08-functional-design.md](./08-functional-design.md) | Contrat validé / intégré |
 | [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours / BR validés |
 | [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |
 | [README.md](./README.md) | Navigation |
 
 ---
 
-*SFIA Studio — conception VALIDÉE (Morris — 2026-07-18) — FD-CAND-01…08 VALIDÉES — pas de D-VAL-12 — Critical — Morris décide.*
+*SFIA Studio — conception VALIDÉE et INTÉGRÉE (PR #209 / `fdade59…`) — FD-CAND-01…08 VALIDÉES — pas de D-VAL-12 — cycle 2 clôturé — Critical — Morris décide.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index dc3fa21..c61dcec 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,16 +4,19 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `functional-design-validated` |
+| **Statut** | `functional-design-integrated` — conception **clôturée** et sur `main` |
 | **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — finalisation documentaire conception (DOC, Critical) |
+| **Exécuteur** | Cursor — synchronisation documentaire post-merge (DOC, Critical) |
 | **Typologie cycle** | DOC — EVOL produit |
-| **Cycle projet** | 2 — Conception fonctionnelle (**VALIDÉE** — Morris — 2026-07-18) |
+| **Cycle projet** | 2 — Conception fonctionnelle (**CLÔTURÉE** — intégrée via PR #209) |
 | **Profil SFIA** | Critical |
-| **Branche travail** | `project/sfia-studio-functional-design` (locale — **non poussée**) |
-| **Branche historique** | `project/sfia-studio-pre-framing` (conservée ; intégrée à `main`) |
+| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
+| **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
 | **Chemin** | `projects/sfia-studio/` |
+| **main** | `fdade59a23a6dff4c264c73975358f77bc90f9b0` |
+| **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
+| **Commit projet** | `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
 | **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
 | **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
 | **Architecture fonctionnelle** | **RECOMMANDATION — NON SÉLECTIONNÉE / NON LANCÉE** |
@@ -25,21 +28,22 @@
 
 | Élément | Valeur |
 |---------|--------|
-| PR | [#207](https://github.com/mcleland147/sfia-workspace/pull/207) — **MERGED** |
-| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
-| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
-| Socle cadrage sur `main` | Huit documents — intégrité vérifiée |
+| PR cadrage | [#207](https://github.com/mcleland147/sfia-workspace/pull/207) — **MERGED** |
+| PR conception | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
+| Commit conception | `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
+| Merge conception | `fdade59a23a6dff4c264c73975358f77bc90f9b0` |
+| Documents Studio sur `main` | **Onze** (`01`–`10` + README) |
 | Cadrage détaillé | **Validé** (D-VAL-9 / DF-G1) |
 | Cadrage documentaire | **Clôturé** (D-VAL-11) |
-| Synchronisation post-merge | **Validée** (D-VAL-11) |
-| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
-| Cycle 2 conception | **VALIDÉE** — Morris — 2026-07-18 |
+| Cycle 2 conception | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` |
 | FD-CAND-01…08 | **VALIDÉES** |
-| Intégration conception sur `main` | **Non réalisée** — GO Git distinct requis |
+| Intégration conception sur `main` | **Réalisée** via PR #209 / `fdade59…` |
+| Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
+| Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — le GO draft n’autorisait pas le merge ; l’intégration est acceptée sans D-VAL-12 |
 | Prochain cycle | **Non sélectionné** |
-| Branche projet historique | Conservée ; suppression = décision distincte |
+| Branches | `functional-design` et `pre-framing` **conservées** |
 
-> Le merge PR #207 est un **fait Git** vérifié. D-VAL-10 n’autorisait **pas** le merge. D-VAL-11 **régularise** l’intégration et clôture le cadrage documentaire. La conception fonctionnelle est **validée** localement ; elle n’est **pas** encore sur `main`.
+> PR #207 : fait Git ; D-VAL-10 n’autorisait pas ce merge ; D-VAL-11 régularise le cadrage. PR #209 : conception validée intégrée ; écart d’autorisation de merge **clôturé** par acceptation Morris (2026-07-18) — **sans** D-VAL-12 et **sans** réécriture rétroactive du GO draft.
 
 ---
 
@@ -110,12 +114,12 @@ Pré-cadrage                    ← terminé historiquement
   → versionnement (G7)         ← commit / push / draft PR réalisés (D-VAL-10)
   → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
   → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
-  → conception fonctionnelle   ← **VALIDÉE** (Morris — 2026-07-18) — locale, hors main
+  → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / `fdade59…`) — cycle **CLÔTURÉ**
   → architecture / UX          ← RECOMMANDATION architecture — **NON SÉLECTIONNÉE**
   → POC → MVP → delivery → industrialisation plateforme
 ```
 
-Aucune stack / architecture validée. Conception fonctionnelle **validée** (locale). POC / MVP non lancés. Intégration Git conception = GO distinct.
+Aucune stack / architecture validée. Conception fonctionnelle **validée et intégrée** sur `main`. POC / MVP non lancés. Prochain cycle **non sélectionné**.
 
 ---
 
@@ -149,7 +153,7 @@ Aucune stack / architecture validée. Conception fonctionnelle **validée** (loc
 | [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours F1–F12 et règles métier |
 | [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation (FD-CAND-01…08 VALIDÉES) |
 
-> Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. ≠ architecture / stack / UX visuelle / backlog / POC / MVP / code. Présence **locale** sur `project/sfia-studio-functional-design` — **pas** encore sur `main`.
+> Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. **Intégrée** sur `main` via PR #209 (`fdade59…`). ≠ architecture / stack / UX visuelle / backlog / POC / MVP / code.
 
 ---
 
@@ -165,8 +169,8 @@ Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical**
 
 | Principe | Portée |
 |----------|--------|
-| Git `main` = source de vérité du **cadrage** validé | Socle `01`–`07` intégré via PR #207 / #208 |
-| Conception validée = locale jusqu’à GO Git | Branche `project/sfia-studio-functional-design` |
+| Git `main` = source de vérité | Cadrage `01`–`07` + conception `08`–`10` intégrés (PR #207 / #208 / #209) |
+| Conception validée = intégrée | PR #209 / `fdade59…` ; branche `functional-design` conservée |
 | Morris décide | Gates structurants |
 | GPT / Cursor | Qualifient / exécutent — ne décident pas |
 | Option C | Consomme v2.6 (**validé**) |
@@ -175,6 +179,7 @@ Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical**
 | Runtime candidat | Non figé |
 | macOS = preuve | Non plateforme produit |
 | Observation ≠ règle | Pas de promotion méthode |
+| Commit / push / PR / merge | Autorisations **distinctes** (règle générique) |
 
 ---
 
@@ -228,22 +233,22 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 | Décision | Statut |
 |----------|--------|
-| Autorisation commit / push / PR de la conception | **Non prise** |
 | Sélection / lancement architecture fonctionnelle | **Non sélectionné** (recommandation uniquement) |
-| Sort des branches | Conservées ; décisions distinctes |
+| Sort des branches (`functional-design` / `pre-framing`) | Conservées ; décisions distinctes |
 | Contenu POC / définition MVP | Non pris |
 | Stack / architecture technique | Non pris |
 
+> Commit / push / PR / merge de la conception : **faits Git réalisés** (PR #209). Intégration **acceptée** par Morris — 2026-07-18. Plus une décision ouverte.
+
 ---
 
 ## 8. Prochaine décision
 
-1. Revue ChatGPT du handoff de **finalisation** (validation).
-2. GO distinct éventuel : commit / push / PR de la conception (non autorisé ici).
-3. Sélection du cycle suivant — **RECOMMANDATION :** architecture fonctionnelle Critical — **NON SÉLECTIONNÉE**.
-4. Sort des branches (décisions distinctes).
+1. Revue ChatGPT du handoff de **synchronisation post-merge**.
+2. Sélection du cycle suivant — **RECOMMANDATION :** architecture fonctionnelle Critical — **NON SÉLECTIONNÉE**.
+3. Sort des branches (décisions distinctes — suppression interdite ici).
 
-**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL DESIGN VALIDATED — DOCUMENTARY FINALIZATION READY FOR MORRIS REVIEW`
+**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL DESIGN POST-MERGE STATUS SYNCHRONIZED — READY FOR MORRIS REVIEW`
 
 ---
 
@@ -254,12 +259,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Méthode | SFIA v2.6 sur `main` |
 | Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
 | Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** (PR #207 / #208) |
-| Conception fonctionnelle validée | **Locale** — branche `project/sfia-studio-functional-design` (`08`–`10` + navigation) — **pas encore sur `main`** |
+| Conception fonctionnelle validée | **`08`–`10` + navigation** sur **`main`** (PR #209 / `fdade59…`) — **onze** documents |
 | Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
 | Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
-> `main` reste la source de vérité du **cadrage**. L’intégration de la conception exige un **GO Git distinct**.
+> `main` est la source de vérité du **cadrage** et de la **conception fonctionnelle** intégrée.
 
 ---
 
-*SFIA Studio — cadrage clôturé (D-VAL-11) — conception fonctionnelle VALIDÉE (Morris — 2026-07-18) — locale hors main — Option C — Morris décide.*
+*SFIA Studio — cadrage clôturé (D-VAL-11) — conception VALIDÉE et INTÉGRÉE (PR #209 / `fdade59…`) — cycle 2 clôturé — Option C — Morris décide.*
```

---

## 14. CONTENU COMPLET — README.md

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `functional-design-integrated` — conception **clôturée** et sur `main` |
| **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — synchronisation documentaire post-merge (DOC, Critical) |
| **Typologie cycle** | DOC — EVOL produit |
| **Cycle projet** | 2 — Conception fonctionnelle (**CLÔTURÉE** — intégrée via PR #209) |
| **Profil SFIA** | Critical |
| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
| **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
| **Chemin** | `projects/sfia-studio/` |
| **main** | `fdade59a23a6dff4c264c73975358f77bc90f9b0` |
| **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
| **Commit projet** | `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
| **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
| **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
| **Architecture fonctionnelle** | **RECOMMANDATION — NON SÉLECTIONNÉE / NON LANCÉE** |
| **Prochain cycle** | **Non sélectionné** |

---

## 0. État post-merge (observation) et conception

| Élément | Valeur |
|---------|--------|
| PR cadrage | [#207](https://github.com/mcleland147/sfia-workspace/pull/207) — **MERGED** |
| PR conception | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
| Commit conception | `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
| Merge conception | `fdade59a23a6dff4c264c73975358f77bc90f9b0` |
| Documents Studio sur `main` | **Onze** (`01`–`10` + README) |
| Cadrage détaillé | **Validé** (D-VAL-9 / DF-G1) |
| Cadrage documentaire | **Clôturé** (D-VAL-11) |
| Cycle 2 conception | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` |
| FD-CAND-01…08 | **VALIDÉES** |
| Intégration conception sur `main` | **Réalisée** via PR #209 / `fdade59…` |
| Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
| Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — le GO draft n’autorisait pas le merge ; l’intégration est acceptée sans D-VAL-12 |
| Prochain cycle | **Non sélectionné** |
| Branches | `functional-design` et `pre-framing` **conservées** |

> PR #207 : fait Git ; D-VAL-10 n’autorisait pas ce merge ; D-VAL-11 régularise le cadrage. PR #209 : conception validée intégrée ; écart d’autorisation de merge **clôturé** par acceptation Morris (2026-07-18) — **sans** D-VAL-12 et **sans** réécriture rétroactive du GO draft.

---

## 1. Finalité du projet (produit complet)

**SFIA Studio vise la construction d’une plateforme métier complète** permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.

### Formulation structurante (D-VAL-3)

> SFIA Studio vise la construction d’une plateforme métier complète permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.
>
> Le POC est une étape technique de validation de faisabilité.
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### Distinction obligatoire

| Terme | Définition |
|-------|------------|
| **Produit cible** | Plateforme complète — opérationnelle et durable |
| **POC** | Preuve de **faisabilité technique** limitée |
| **MVP** | Première version **réellement utilisable** (valeur métier) — non défini ici |
| **Industrialisation** | Exploitation industrialisée de la **plateforme** — pas « industrialiser les cycles » |

### Vision produit (base du cadrage)

> SFIA Studio permet de **qualifier, lancer, suivre et clôturer** les cycles SFIA.
> La plateforme est ensuite destinée à être **exploitée de manière industrialisée**, sécurisée, observable, maintenable et distribuable.

Revue documentaire G3 : **conforme** (aucune réserve bloquante). La vision corrigée constitue la **base autorisée du cadrage** via **D-VAL-8 / G6**. Cadrage détaillé **validé** via **D-VAL-9 / DF-G1**.

### Orchestration déterministe (candidat — non validé)

Un mécanisme d’orchestration déterministe, **éventuellement** matérialisé par un composant nommé SFIA Runtime, devra appliquer les contrats, permissions, gates et stop conditions. Séparation Studio / Runtime à qualifier en architecture.

| Élément | Statut |
|---------|--------|
| Besoin fonctionnel | **Candidat** |
| Architecture Runtime | **Non validée** |
| Nom « SFIA Runtime » | **Non contractuel** |

### Couverture des 15 cycles

Couverture **progressive**. Pas d’obligation dans le POC ou le MVP. Sous-ensemble MVP **non sélectionné** ici.

### Faisabilité vs valeur

| Étape | Ce qu’elle valide |
|-------|-------------------|
| **POC** | Faisabilité technique |
| **MVP** | Première valeur métier utilisable |
| **Industrialisation** | Durabilité d’exploitation de la plateforme |

### macOS

Contrainte de **preuve** du POC — **pas** plateforme produit définitive.

### Relation méthode (G4 — Option C)

Produit indépendant **consommant** SFIA v2.6. Pas de v2.7 / v3.0. Évolution méthode = CAPA/EVOL séparé + GO Morris.

---

## 2. Trajectoire macro (état factuel)

```text
Pré-cadrage                    ← terminé historiquement
  → cadrage détaillé           ← VALIDÉ (D-VAL-9 / DF-G1)
  → versionnement (G7)         ← commit / push / draft PR réalisés (D-VAL-10)
  → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
  → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
  → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / `fdade59…`) — cycle **CLÔTURÉ**
  → architecture / UX          ← RECOMMANDATION architecture — **NON SÉLECTIONNÉE**
  → POC → MVP → delivery → industrialisation plateforme
```

Aucune stack / architecture validée. Conception fonctionnelle **validée et intégrée** sur `main`. POC / MVP non lancés. Prochain cycle **non sélectionné**.

---

## 3. Navigation

### Pré-cadrage (historique)

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, état, décisions, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité et vision (historique) |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles (historique) |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage (historique) |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Rôle |
|----------|------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit détaillé |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités et cas d’usage |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres et critères |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire et décisions |

> **Cadrage détaillé ≠ conception / architecture / UX / backlog / POC / code.**

### Conception fonctionnelle — VALIDÉE

| Document | Rôle |
|----------|------|
| [08-functional-design.md](./08-functional-design.md) | Contrat de conception fonctionnelle |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours F1–F12 et règles métier |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation (FD-CAND-01…08 VALIDÉES) |

> Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. **Intégrée** sur `main` via PR #209 (`fdade59…`). ≠ architecture / stack / UX visuelle / backlog / POC / MVP / code.

---

## 4. Justification Critical

Le cadrage détaillé a été exécuté en profil Critical : projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation.

Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical** : règles de contrôle des actions Git/GPT/Cursor ; gates, permissions, arrêts ; prévention d’auto-arbitrage et de seconde vérité.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| Git `main` = source de vérité | Cadrage `01`–`07` + conception `08`–`10` intégrés (PR #207 / #208 / #209) |
| Conception validée = intégrée | PR #209 / `fdade59…` ; branche `functional-design` conservée |
| Morris décide | Gates structurants |
| GPT / Cursor | Qualifient / exécutent — ne décident pas |
| Option C | Consomme v2.6 (**validé**) |
| POC ≠ valeur | Faisabilité ≠ MVP |
| Couverture progressive | 15 cycles = cible long terme |
| Runtime candidat | Non figé |
| macOS = preuve | Non plateforme produit |
| Observation ≠ règle | Pas de promotion méthode |
| Commit / push / PR / merge | Autorisations **distinctes** (règle générique) |

---

## 6. Gates G1–G7 (historiques) et observation merge

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ — GO** (D-VAL-4) |
| **G2** | **VALIDÉ — GO** (D-VAL-5) |
| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 |
| **G4** | **VALIDÉ — OPTION C** (D-VAL-6) |
| **G5** | **VALIDÉ SUR LE PRINCIPE** (D-VAL-7) |
| **G6** | **VALIDÉ — GO** (D-VAL-8) — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** (D-VAL-9) — cadrage détaillé validé |
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé par cette décision. **Observation :** PR #207 **mergée**. **Régularisation :** D-VAL-11 **VALIDÉE**. |

**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. G7 **≠** autorisation rétroactive de merge.

---

## 7. Décisions D-VAL-1 à D-VAL-11 et FD-CAND

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | Option C | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Passage au cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** autorisés ; **merge non autorisé** (historique) | G7 |
| D-VAL-11 | Intégration PR #207 reconnue ; socle sur `main` ; cadrage documentaire **clôturé** ; branche conservée ; prochain cycle non sélectionné | Clôture |

### Contenu D-VAL-11 — VALIDÉE

| Champ | Valeur |
|-------|--------|
| Statut | **VALIDÉE** |
| Autorité | Morris |
| Date | **2026-07-18** |
| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche `project/sfia-studio-pre-framing` conservée jusqu’à décision distincte |

### FD-CAND-01…08 — VALIDÉES

Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01…08 — **2026-07-18**. Identifiants locaux au cycle de conception — **pas de D-VAL-12**.

### Décisions encore ouvertes

| Décision | Statut |
|----------|--------|
| Sélection / lancement architecture fonctionnelle | **Non sélectionné** (recommandation uniquement) |
| Sort des branches (`functional-design` / `pre-framing`) | Conservées ; décisions distinctes |
| Contenu POC / définition MVP | Non pris |
| Stack / architecture technique | Non pris |

> Commit / push / PR / merge de la conception : **faits Git réalisés** (PR #209). Intégration **acceptée** par Morris — 2026-07-18. Plus une décision ouverte.

---

## 8. Prochaine décision

1. Revue ChatGPT du handoff de **synchronisation post-merge**.
2. Sélection du cycle suivant — **RECOMMANDATION :** architecture fonctionnelle Critical — **NON SÉLECTIONNÉE**.
3. Sort des branches (décisions distinctes — suppression interdite ici).

**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL DESIGN POST-MERGE STATUS SYNCHRONIZED — READY FOR MORRIS REVIEW`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 sur `main` |
| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
| Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** (PR #207 / #208) |
| Conception fonctionnelle validée | **`08`–`10` + navigation** sur **`main`** (PR #209 / `fdade59…`) — **onze** documents |
| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
| Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |

> `main` est la source de vérité du **cadrage** et de la **conception fonctionnelle** intégrée.

---

*SFIA Studio — cadrage clôturé (D-VAL-11) — conception VALIDÉE et INTÉGRÉE (PR #209 / `fdade59…`) — cycle 2 clôturé — Option C — Morris décide.*

```

---

## 15. CONTENU COMPLET — 07

```markdown
# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
| **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `functional-design-integrated` ; cadrage documentaire **clôturé** ; cycle 2 **clôturé** |
| **Décisions** | D-VAL-1 à D-VAL-11 (inchangées) ; FD-CAND-01…08 **VALIDÉES** |
| **Destinataire** | Morris |
| **Source de vérité** | Git `main` @ `fdade59…` — cadrage + conception intégrés |

> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE** (PR #209). **Pas de D-VAL-12.**

---

## 0. État post-merge

| Élément | Valeur |
|---------|--------|
| PR #207 | **MERGED** |
| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
| Intégration | Techniquement vérifiée ; **reconnue** (D-VAL-11) |
| D-VAL-10 | Historique — **n’autorisait pas** le merge |
| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
| Cadrage documentaire | **Clôturé** (inchangé) |
| Branche projet historique | Conservée ; intégrée à `main` ; suppression = décision distincte |
| Cycle 2 conception | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` via PR #209 |
| FD-CAND-01…08 | **VALIDÉES** — Morris — 2026-07-18 |
| Intégration Git conception | **Réalisée** — PR #209 / merge `fdade59…` / commit `99eaeaa…` |
| Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 |
| Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 ; sans réécriture rétroactive du GO draft |
| Prochain cycle après conception | **Non sélectionné** |

> Le merge #207 est un fait Git. D-VAL-11 clôture le cadrage. Le merge #209 intègre la conception ; l’acceptation Morris clôture l’écart d’autorisation.

### Trace factuelle — cycle 2 (conception fonctionnelle)

| Champ | Valeur |
|-------|--------|
| Sélection / lancement | **2026-07-18** — décision Morris |
| Production et revue | Documents `08`–`10` |
| **Validation Morris** | **2026-07-18** — conception **VALIDÉE** |
| FD-CAND-01…08 | **VALIDÉES** |
| Profil | Critical |
| Statut conception | `functional-design-validated` puis **intégrée** |
| Intégration Git | **Réalisée** — PR #209 MERGED ; `99eaeaa…` → `fdade59…` |
| Clôture cycle 2 | **Oui** — technique et documentaire (acceptation Morris post-merge) |
| Exclu / réserve | Architecture non validée ; UX visuelle non lancée ; stack non décidée ; POC non lancé ; MVP non défini |
| D-VAL-1…11 | **Inchangées** — **aucune D-VAL-12** |
| Branches | `functional-design` et `pre-framing` **conservées** |

---

## 1. Rappel D-VAL-1 à D-VAL-10 (historiques)

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | Option C — consomme v2.6 | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** **autorisés** ; **merge non autorisé** | G7 |

### Contenu D-VAL-10 (G7) — historique

Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé** par cette décision. Handoff ≠ G7.

### D-VAL-11 — VALIDÉE

| Champ | Valeur |
|-------|--------|
| Statut | **VALIDÉE** |
| Autorité | Morris |
| Date | **2026-07-18** |
| Contexte | Validation après contrôle post-merge et revue de la synchronisation documentaire |
| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche projet conservée jusqu’à décision distincte ; prochain cycle non sélectionné |

---

## 2. Statut G1–G7 et DF-G1

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ** |
| **G2** | **VALIDÉ** |
| **G3** | **REVUE CONFORME** |
| **G4** | **VALIDÉ — OPTION C** |
| **G5** | **VALIDÉ SUR LE PRINCIPE** |
| **G6** | **VALIDÉ** — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** — cadrage détaillé validé (D-VAL-9) |
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé. **Observation :** PR #207 mergée (`ec21074`). **Régularisation :** D-VAL-11 validée. |

G7 **≠** autorisation rétroactive de merge.

---

## 3. Trajectoire produit (état factuel)

```text
Pré-cadrage                         ← terminé historiquement
  → cadrage détaillé                ← VALIDÉ (D-VAL-9 / DF-G1)
  → versionnement documentaire      ← commit / push / draft PR (D-VAL-10 / G7)
  → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
  → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
  → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / `fdade59…`) — **CLÔTURÉE**
  → architecture fonctionnelle      ← **RECOMMANDATION — NON SÉLECTIONNÉE**
  → UX/UI initiale                  ← non sélectionnée
  → architecture technique candidate
  → définition du POC
  → POC de faisabilité (lot multi-cycle)
  → décision de poursuite
  → backlog / MVP
  → delivery incrémental
  → QA / sécurité / release / RUN
  → industrialisation plateforme
  → capitalisation
```

### Précisions

- Trajectoire **non séquentielle rigide** ; activation par déclencheurs.
- POC = **lot** multi-cycle, pas un cycle SFIA autonome.
- MVP **distinct** du POC.
- G7 historique = versionnement (commit / push / draft PR) — **distinct** du merge.
- Merge #207 = fait Git ; régularisation cadrage = **D-VAL-11**.
- Merge #209 = fait Git ; conception intégrée ; écart d’autorisation **clôturé** par acceptation Morris (sans D-VAL-12).
- Aucune stack / architecture validée.
- Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main` ; aucune architecture / UX visuelle / POC / MVP lancée.
- Cycle suivant après conception **non sélectionné**.

---

## 4. Prochains cycles candidats (options de routage — non lancés)

### 4.0 Synchronisation documentaire post-merge

| Champ | Contenu |
|-------|---------|
| Statut | **FAIT / VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé |
| Objectif | Aligner docs sur l’état Git post-merge |
| Ne lance pas | Conception / architecture / POC |

### 4.1 Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| Statut | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` (PR #209) |
| Objectif | Préciser comportements et règles métier des capacités |
| Livrables | `08` / `09` / `10` — **validés** et **intégrés** |
| Profil | Critical |
| FD-CAND-01…08 | **VALIDÉES** |
| Intégration Git | **Réalisée** — `99eaeaa…` / `fdade59…` |
| Ne lance pas | Architecture ; UX visuelle ; stack ; POC ; MVP ; code |

### 4.2 Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| Statut | **RECOMMANDATION — NON SÉLECTIONNÉE** |
| Objectif | Modules logiques ; séparation Studio / orchestration candidate |
| Pourquoi pas maintenant | Non sélectionnée ; lancement interdit sans GO distinct |

### 4.3 UX/UI

| Champ | Contenu |
|-------|---------|
| Déclencheur | Parcours opérateur à concevoir |
| Pourquoi pas maintenant | Figma désactivé ; cycle non sélectionné |

### 4.4 Architecture technique

| Champ | Contenu |
|-------|---------|
| Déclencheur | Après archi fonctionnelle suffisante |
| Pourquoi pas maintenant | Prématuré ; stack non décidée |

### 4.5 Sécurité (bornée)

| Champ | Contenu |
|-------|---------|
| Déclencheur | Avant POC à permissions élevées |
| Pourquoi pas maintenant | Identification déjà faite au cadrage |

---

## 5. Décisions à préparer

| ID | Décision | Nature | Statut |
|----|----------|--------|--------|
| D-NEXT-1 | Validation documentaire du cadrage détaillé | Morris | **FAIT** (D-VAL-9 / DF-G1) |
| D-NEXT-2 | Sélection du cycle conception fonctionnelle | Morris | **FAIT** — 2026-07-18 |
| D-NEXT-2b | Validation de la conception (FD-CAND-01…08) | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-2c | Sélection du cycle suivant après validation conception | Morris | **Non sélectionné** |
| D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **FAIT** — réalisés (PR #209) |
| D-NEXT-2e | Acceptation intégration / clôture écart merge #209 | Morris | **VALIDÉE** — 2026-07-18 (sans D-VAL-12) |
| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; suite **non sélectionnée** |
| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
| D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
| D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris |
| D-NEXT-9 | Merge PR #207 | Observation Git + D-VAL-11 | **Réalisé / régularisé** (`ec21074`) |
| D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Conservée (poussée ; intégrée) ; décision distincte |

---

## 6. Options de séquencement post-cadrage

### Option 1 — Conception puis architecture fonctionnelle

| | |
|--|--|
| **Bénéfices** | Clarifie le « quoi » avant le « comment logique » |
| **Risques** | Conception trop détaillée sans frontières |
| **Prérequis** | Cadrage documentaire clôturé (D-VAL-11) |

### Option 2 — Architecture fonctionnelle légère puis conception détaillée

| | |
|--|--|
| **Bénéfices** | Pose frontières Studio / orchestration tôt |
| **Risques** | Archi prématurée si trop technique |

### Option 3 — Exploration UX bornée après capacité map

| | |
|--|--|
| **Bénéfices** | Valide parcours opérateur tôt |
| **Risques** | UI avant règles métier |

### Recommandation (≠ décision / ≠ sélection)

**Conception fonctionnelle bornée** (Option 1) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209).

**Prochain cycle recommandé :** architecture fonctionnelle Critical — **RECOMMANDATION — NON SÉLECTIONNÉE**.

Morris reste libre de choisir Option 2, Option 3 ou un autre cycle. **Aucun** cycle architecture / UX visuelle / POC / MVP n’est lancé.

---

## 7. Gates futurs proposés

| Gate proposé | Objet | Statut |
|--------------|-------|--------|
| **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
| **DF-G2** | Sélectionner le prochain cycle | **FAIT** pour conception ; suite après conception **ouverte** |
| **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique ; merge hors périmètre D-VAL-10 |
| **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** |
| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** |
| **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
| **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |

Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Intégration #209 : **acceptée**. GO cycle suivant : **non pris**.

---

## 8. Questions Morris

1. Sélectionnez-vous le cycle suivant (architecture fonctionnelle Critical recommandée — **non sélectionnée**) ?
2. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
3. Quel sort pour `project/sfia-studio-functional-design` (conservée) ?
4. Quel niveau d’architecture minimale avant POC ?
5. Quelles priorités NFR avant le POC ?

---

## 9. Critères de clôture du cadrage détaillé

| Critère | État |
|---------|------|
| 04–07 complets et cohérents | **Oui** |
| Alignement D-VAL-1…11 / G1–G7 / DF-G1 | **Oui** |
| Pas d’archi/stack/MVP/POC démarrés | **Oui** |
| DF-G1 validé | **Oui** (D-VAL-9) |
| G7 commit / push / draft PR | **Réalisés** (D-VAL-10) |
| Merge PR #207 | **Fait Git** — régularisé D-VAL-11 |
| Clôture formelle cadrage | **FAIT** (D-VAL-11 — 2026-07-18) |
| Cycle conception fonctionnelle | **CLÔTURÉ** — intégré PR #209 |
| FD-CAND-01…08 | **VALIDÉES** |
| Prochain cycle après conception | **Non sélectionné** |

---

## 10. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage détaillé | **VALIDÉ** (D-VAL-9) |
| Intégration cadrage `main` | **Oui** (PR #207 / #208) |
| Cadrage documentaire | **Clôturé** |
| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
| Conception fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — PR #209 / `fdade59…` |
| FD-CAND-01…08 | **VALIDÉES** |
| Cycle 2 | **CLÔTURÉ** |
| Écart autorisation merge #209 | **Clôturé** (sans D-VAL-12) |
| Ready for architecture / POC / MVP | **Non** |

**Verdict :** `SFIA STUDIO FUNCTIONAL DESIGN POST-MERGE STATUS SYNCHRONIZED — READY FOR MORRIS REVIEW`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Gates / D-VAL / état |
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé / intégré** |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours **validés** |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation / clôture** |

---

*SFIA Studio — cadrage clôturé (D-VAL-11) — conception VALIDÉE et INTÉGRÉE (PR #209 / `fdade59…`) — cycle 2 clôturé — Morris décide.*

```

---

## 16. CONTENU COMPLET — 08

```markdown
# SFIA Studio — Conception fonctionnelle

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `08-functional-design.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Typologie** | DOC — EVOL produit |
| **Baseline** | SFIA v2.6 (Option C) |
| **Base Git** | `origin/main` @ `fdade59a23a6dff4c264c73975358f77bc90f9b0` (PR #209) |
| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée) |
| **Statut** | `functional-design-validated` — **intégré** sur `main` ; cycle **clôturé** |
| **Autorité** | Morris (L0) |
| **Décision validation** | Morris — **2026-07-18** — conception fonctionnelle **VALIDÉE** |
| **Intégration** | PR #209 MERGED — commit `99eaeaab…` — merge `fdade59…` |
| **Décisions cadrage** | D-VAL-1 à D-VAL-11 (historiques / validées) |
| **Décisions conception** | FD-CAND-01 à FD-CAND-08 — **VALIDÉES** — Morris — 2026-07-18 |
| **Cycle suivant** | **Non sélectionné** |

> Contrat de conception fonctionnelle **validé** et **intégré** sur `main`. **Pas** d’architecture technique, stack, API, modèle de données, Figma, backlog, POC ou MVP. Aucune D-VAL-12.

---

## 0. Validation Morris (2026-07-18)

| Champ | Valeur |
|-------|--------|
| Décision | Validation explicite de la conception fonctionnelle SFIA Studio |
| Autorité | Morris (L0) |
| Date | **2026-07-18** |
| FD-CAND-01…08 | **VALIDÉES** |
| Identifiants | `FD-CAND-*` = identifiants locaux au cycle de conception — **ne modifient pas** la numérotation D-VAL historique |
| D-VAL-12 | **Non créée** |

### Périmètre validé (socle fonctionnel)

Acteurs et responsabilités ; domaines D1–D10 ; douze états ; transitions ; FR-001…025 ; BR-001…025 ; parcours F1–F12 ; invariants ; AC-01…08 ; risques RF-01…07 (registre à suivre) ; sécurité fonctionnelle ; UX fonctionnelle non visuelle ; données fonctionnelles candidates (sans schéma technique).

### Réserves structurantes

| Réserve | Portée |
|---------|--------|
| Domaines D1–D10 | Regroupements **fonctionnels** — **≠** composants techniques |
| États / transitions | Indépendants de toute implémentation |
| Données candidates | **≠** modèle de données / schéma BDD |
| Orchestrateur / « SFIA Runtime » | **Candidat** — non contractuel |
| Architecture fonctionnelle / technique | **Non validée** |
| Stack / API / BDD / composant / service / framework | **Non choisis** |
| POC | **Non lancé** |
| MVP | **Non défini / non lancé** |
| Backlog / user stories | **Non créés** |
| Cycle suivant | **Non lancé** par cette validation |
| Actions Git projet (à la validation) | Commit / push / PR / merge **non autorisés** par la seule validation — faits ultérieurs sous GO distincts |

### Effet de la validation (historique) et état post-intégration

- Le référentiel fonctionnel `08`–`10` est devenu **socle validé**.
- Aucun effet automatique sur architecture, POC, MVP ou stack.
- **État courant :** intégration réalisée via PR #209 (`99eaeaa…` / `fdade59…`) ; cycle conception **clôturé** ; acceptation Morris de l’intégration (2026-07-18) ; écart d’autorisation de merge **clôturé** sans D-VAL-12.

### Éléments non décidés

Architecture ; UX/UI visuelle ; stack ; contenu POC ; définition MVP ; sort des branches ; sélection du cycle suivant.

---

## 1. Objet et limites

### Couvre

- acteurs et responsabilités fonctionnelles ;
- domaines fonctionnels dérivés de C1–C16 ;
- états et transitions d’un cycle SFIA dans Studio ;
- exigences fonctionnelles (`FR-*`) ;
- invariants ;
- données fonctionnelles candidates (sans stockage) ;
- sécurité fonctionnelle (besoins, sans technologie) ;
- UX fonctionnelle non visuelle ;
- critères d’acceptation fonctionnels.

### Ne couvre pas

| Hors périmètre | Statut |
|----------------|--------|
| Architecture fonctionnelle détaillée (composants / frontières techniques) | Non autorisée |
| Architecture technique / stack / API / BDD | Non décidées |
| Maquettes / Figma / design system | Non autorisés |
| Backlog / user stories de delivery | Non autorisés |
| POC / MVP | Non lancés / non définis |
| Code / tests applicatifs | Interdits |
| Commit / push / PR projet | Interdits |

### Séparation

| Artifact | Rôle |
|----------|------|
| Cadrage `04`–`07` | Contrat produit validé (entrée) |
| Conception `08`–`10` | Comportements et règles (ce cycle) |
| Architecture (future) | Structure logique / technique — non lancée |
| Delivery / POC / MVP | Preuve ou valeur — ultérieurs |

---

## 2. Acteurs et responsabilités fonctionnelles

| Acteur | Nature | Responsabilité | Ne fait pas |
|--------|--------|----------------|-------------|
| **Morris** | Humain L0 | Décide gates structurants ; autorise actions sensibles ; clôture | Automatiser l’arbitrage |
| **GPT** | Système | Qualifie, challenge, analyse, propose verdicts | Décider ; exécuter Git |
| **Cursor** | Système | Exécute dans un contrat borné | Inventer le périmètre ; merger seul |
| **Git** | Système | Source de vérité ; historique ; preuves | Décider |
| **Opérateur futur** | Humain candidat | Usage ultérieur éventuel | Autorité L0 |
| **Orchestrateur déterministe (candidat)** | Mécanisme candidat | Applique contrats, permissions, gates, stop | Créer des autorisations ; arbitrer |

Le nom « SFIA Runtime » reste **non contractuel**. L’architecture de ce mécanisme est **non validée**.

---

## 3. Domaines fonctionnels

Regroupements **fonctionnels** (≠ composants techniques) :

| Domaine | Capacités | Objet |
|---------|-----------|-------|
| **D1 — Intention et qualification** | C1, C2 | Capturer l’intention ; qualifier cycle / profil / blocs |
| **D2 — Contexte Git et sources** | C3, C4, C11 | Repo-informed pre-check ; sources canoniques ; visibilité Git |
| **D3 — Contrat d’exécution** | C5 | Générer le contrat Cursor borné |
| **D4 — Gates et permissions** | C6, C13 | Présenter gates ; appliquer permissions et stop |
| **D5 — Exécution et suivi** | C7, C14 | Suivre exécution ; diagnostic fonctionnel |
| **D6 — Rapports et review packs** | C8 | Collecter et contrôler rapports / packs |
| **D7 — Analyse et verdict** | C9 | Analyse GPT ; verdict proposé |
| **D8 — Décisions et clôture** | C10 | Enregistrer décisions Morris ; clôturer |
| **D9 — Historique et reprise** | C12 | Historique cycles ; reprise depuis Git |
| **D10 — Administration et exploitation** | C15, C16 | Coûts candidats ; paramètres produit |

Ces domaines ne fixent aucune découpe de services, modules ou packages.

---

## 4. Contrat fonctionnel de cycle — états candidats

États **candidats** (sans modèle technique imposé) :

| État | Signification |
|------|---------------|
| `intention_capturée` | Intention enregistrée, non encore qualifiée |
| `qualification_en_cours` | Qualification profil / blocs / sources |
| `qualification_prête` | Qualification proposée, en attente de confirmation |
| `attente_gate_morris` | Gate structurant présenté |
| `autorisé` | GO Morris reçu pour l’action demandée |
| `en_exécution` | Exécution Cursor / collecte en cours |
| `stoppé` | Stop condition ou interruption explicite |
| `rapport_disponible` | Rapport / review pack collecté |
| `revue_en_cours` | Analyse GPT / revue en cours |
| `décision_requise` | Arbitrage Morris requis |
| `clôturé` | Cycle terminé avec décision tracée |
| `abandonné` | Cycle abandonné explicitement |

---

## 5. Transitions

| Transition | Déclencheur | Acteur | Préconditions | Résultat | Preuves | Erreurs / stop | Gate Morris |
|------------|-------------|--------|---------------|----------|---------|----------------|-------------|
| Intention → qualification | Soumission intention | Morris | Projet connu | `qualification_en_cours` | Intention horodatée | Intention incomplète | Non |
| Qualification → prête | Fin qualification GPT | GPT | Sources lues | `qualification_prête` | Note de qualification | Sources manquantes | Non |
| Prête → attente gate | Action sensible demandée | Studio | Qualification cohérente | `attente_gate_morris` | Demande de gate | Périmètre ambigu | Oui (présentation) |
| Attente → autorisé | GO explicite | Morris | Gate affiché | `autorisé` | Décision GO | Refus / amendement | Oui |
| Autorisé → exécution | Lancement | Cursor / orchestrateur candidat | Contrat borné | `en_exécution` | Contrat + HEAD | Divergence Git | Non si déjà GO |
| Exécution → stoppé | Stop / erreur / annulation | Morris / système | Exécution active | `stoppé` | Journal stop | Contournement stop | Selon cause |
| Exécution → rapport | Fin nominale | Cursor | Livrables attendus | `rapport_disponible` | Rapport / pack | Pack incomplet | Non |
| Rapport → revue | Demande analyse | GPT / Morris | Pack présent | `revue_en_cours` | Pack référencé | Pack illisible | Non |
| Revue → décision requise | Verdict proposé | GPT | Analyse faite | `décision_requise` | Verdict candidat | Verdict inventé | Oui |
| Décision → clôturé | Décision Morris | Morris | Verdict / options | `clôturé` | Décision ancrée | Décision hors Git | Oui |
| * → abandonné | Abandon explicite | Morris | Cycle ouvert | `abandonné` | Motif | Abandon silencieux | Oui |

**Règle :** aucune transition vers une action distante (push, PR, merge, suppression branche) sans GO Morris **distinct**.

---

## 6. Autorité fonctionnelle

1. **Morris** — seule autorité de décision structurante.
2. **GPT** — qualifie et recommande ; ne décide pas.
3. **Cursor** — exécute un contrat ; n’élargit pas le périmètre.
4. **Git** — trace et prime.
5. **Orchestrateur candidat** — applique le contrat ; **ne crée pas** d’autorisations.

Observation ≠ recommandation ≠ décision.

---

## 7. Exigences fonctionnelles

| ID | Exigence | Domaine |
|----|----------|---------|
| FR-001 | Capturer une intention de cycle avec projet, objectif et typologie | D1 |
| FR-002 | Qualifier cycle SFIA, profil, blocs activés/désactivés avec justification | D1 |
| FR-003 | Exécuter un repo-informed pre-check (branche, HEAD, status, base) | D2 |
| FR-004 | Sélectionner et charger des sources canoniques explicites | D2 |
| FR-005 | Générer un contrat Cursor borné (fichiers autorisés/interdits, actions) | D3 |
| FR-006 | Afficher les gates Morris avant toute action sensible | D4 |
| FR-007 | Enregistrer une autorisation explicite Morris (GO / NO-GO / amendement) | D4 |
| FR-008 | Suivre l’état d’une exécution jusqu’à fin, stop ou erreur | D5 |
| FR-009 | Permettre l’arrêt immédiat d’une exécution | D4 / D5 |
| FR-010 | Collecter rapport d’exécution et review pack | D6 |
| FR-011 | Contrôler la complétude minimale d’un review pack | D6 |
| FR-012 | Soumettre le pack à analyse GPT et produire un verdict proposé | D7 |
| FR-013 | Distinguer verdict proposé et décision Morris | D7 / D8 |
| FR-014 | Enregistrer une décision Morris avec horodatage et références | D8 |
| FR-015 | Afficher branche, HEAD, status, diff pertinents | D2 |
| FR-016 | Conserver un historique de cycles reconstructible depuis Git | D9 |
| FR-017 | Reprendre un cycle interrompu à partir de Git et des artefacts tracés | D9 |
| FR-018 | Appliquer permissions et stop conditions avant actions sensibles | D4 |
| FR-019 | Journaliser les événements structurants (gates, stops, décisions) | D5 / D8 |
| FR-020 | Empêcher l’écriture durable hors Git (pas de seconde vérité) | D2 / D8 |
| FR-021 | Traiter commit, push, PR, ready-for-review et merge comme autorisations **distinctes** | D4 |
| FR-022 | Exiger une preuve suffisante avant tout READY / clôture nominale | D6 / D8 |
| FR-023 | Signaler les divergences Git / mémoire / sources et stopper si nécessaire | D2 / D5 |
| FR-024 | Exposer un suivi de coûts candidat (sans moteur imposé) | D10 |
| FR-025 | Administrer des paramètres produit candidats sans contourner les gates | D10 |

---

## 8. Invariants fonctionnels

| ID | Invariant |
|----|-----------|
| INV-01 | Aucune action distante sans GO Morris explicite |
| INV-02 | Aucun Critical implicite — profil justifié à chaque cycle |
| INV-03 | Aucune décision structurante inventée par GPT ou Cursor |
| INV-04 | Git prime sur tout état dérivé |
| INV-05 | Hypothèse ≠ décision ; candidate ≠ validée |
| INV-06 | Review pack requis selon le type de cycle |
| INV-07 | Handoff requis lorsque décidé Critical / explicitement |
| INV-08 | Pas de READY sans preuve suffisante |
| INV-09 | Arrêt en cas de divergence non résolue |
| INV-10 | Automatiser l’exécution répétable, pas l’arbitrage |
| INV-11 | Commit / push / PR / merge / suppression branche = gates séparés |
| INV-12 | L’orchestrateur candidat n’élève jamais ses propres privilèges |
| INV-13 | Un cycle abandonné ou stoppé reste traçable |
| INV-14 | Les décisions candidates n’ont aucun effet tant que non validées |

---

## 9. Données fonctionnelles candidates

Informations nécessaires — **sans schéma de stockage** :

| Famille | Exemples |
|---------|----------|
| Identité | ID cycle, projet, titre, typologie |
| Qualification | Profil, blocs, justification Critical |
| Git | Branche, HEAD, base, status, merge-base |
| Périmètre | Fichiers autorisés / interdits / protected paths |
| Gates | Type, statut, décideur, horodatage |
| Décisions | Contenu, GO/NO-GO, références |
| Exécution | Contrat, événements, stops |
| Preuves | Rapports, review packs, SHAs, liens |
| Verdicts | Proposition GPT, décision Morris |
| Coûts | Estimations / relevés candidats |
| Journaux | Horodatages, acteurs, actions |

---

## 10. Sécurité fonctionnelle

Besoins candidats — **aucune technologie choisie** :

| Besoin | Exigence |
|--------|----------|
| Authentification opérateur | Identifier l’opérateur avant actions sensibles |
| Autorisation | Moindre privilège ; lecture ≠ écriture ≠ distante |
| Chemins | Allowlist / protected paths explicites |
| Branche / HEAD | Contrôle avant écriture |
| Confirmations | Confirmation explicite des actions sensibles |
| Divergence | Stop immédiat si incohérence |
| Journalisation | Décisions et stops auditables |
| Secrets | Protection exigée — mécanisme non imposé |
| Non-répudiation raisonnable | Décisions Morris horodatées et référencées |
| Réversibilité | Actions automatisées stoppables / traçables |
| L5 | Impossible en global — pas d’auto-arbitrage total |

---

## 11. UX fonctionnelle non visuelle

Morris doit pouvoir :

| Voir | Décider | Distinguer |
|------|---------|------------|
| État du cycle | GO / NO-GO / amendement | Observation vs recommandation vs décision |
| Branche / HEAD / status | Autoriser commit, push, PR, merge **séparément** | Candidate vs validée |
| Gates en attente | Stopper / reprendre / abandonner | Preuve manquante vs preuve suffisante |
| Erreurs et divergences | Clôturer | Action locale vs distante |
| Review pack / verdict proposé | Choisir le cycle suivant (hors ce document) | Automatisation autorisée vs interdite |

Pas de wireframes, maquettes, Figma, dimensions ni composants UI.

---

## 12. Critères d’acceptation fonctionnels

| ID | Critère |
|----|---------|
| AC-01 | Chaque capacité C1–C16 est couverte par au moins un domaine et une FR |
| AC-02 | Chaque UC1–UC8 est tracé vers au moins un parcours F* (doc 09) |
| AC-03 | Aucune transition distante sans gate Morris |
| AC-04 | États et transitions sont explicites et testables |
| AC-05 | Invariants INV-01…14 sont formulés sans ambiguïté d’autorité |
| AC-06 | Aucune stack / API / BDD / composant technique n’est validé |
| AC-07 | POC et MVP restent hors conception (limites / questions ouvertes uniquement) |
| AC-08 | Les décisions FD-CAND-01…08 sont validées (Morris — 2026-07-18) avec réserves ; aucune D-VAL-12 |

---

## 13. Questions ouvertes

| Zone | Questions |
|------|-----------|
| Fonctionnel | Granularité des états ; priorisation des parcours F* pour une première incrémentation |
| UX | Surfaces exactes d’affichage des gates (non visuelle ici) |
| Architecture | Frontières Studio / orchestrateur candidat — **cycle futur** |
| POC | Questions de faisabilité à retenir — **non sélectionnées** |
| MVP | Sous-ensemble de valeur — **non défini** |
| Exploitation | Mode multi-opérateur ; distribution — **non décidé** |

---

## 14. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Navigation |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | C1–C16 / UC1–UC8 |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours et BR |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation conception |

---

*SFIA Studio — conception fonctionnelle VALIDÉE et INTÉGRÉE (PR #209 / `fdade59…`) — Critical — architecture/stack/POC/MVP non décidés — Morris décide.*

```

---

## 17. CONTENU COMPLET — 10

```markdown
# SFIA Studio — Decision pack conception fonctionnelle (validation)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `10-functional-decision-pack.md` |
| **Cycle** | 2 — Conception fonctionnelle (finalisation documentaire) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Base Git** | `fdade59a23a6dff4c264c73975358f77bc90f9b0` (PR #209) |
| **Statut** | `functional-design-validated` — **intégré** ; cycle **clôturé** |
| **Destinataire** | Morris (L0) |
| **Décision** | Validation Morris — **2026-07-18** ; acceptation intégration #209 — **2026-07-18** |

> Pack de **validation / clôture**. FD-CAND-01…08 **VALIDÉES**. Identifiants `FD-CAND-*` = locaux au cycle de conception — **ne modifient pas** la numérotation D-VAL. **Pas de D-VAL-12.**

---

## 1. Synthèse du cycle

| Étape | Fait |
|-------|------|
| Sélection cycle 2 | Morris — 2026-07-18 |
| Production `08`–`10` | Cycle conception Critical |
| **Validation conception** | **Morris — 2026-07-18 — VALIDÉE** |
| Intégration Git projet | **Réalisée** — PR #209 MERGED (`99eaeaa…` / `fdade59…`) |
| Acceptation intégration / écart merge | **Clôturés** — Morris — 2026-07-18 (sans D-VAL-12) |
| Cycle 2 | **CLÔTURÉ** |
| Cycle suivant | **Non sélectionné** |

Livrables validés et **intégrés** sur `main` :

- `08-functional-design.md` — contrat fonctionnel ;
- `09-functional-flows-and-rules.md` — parcours F1–F12 et règles BR ;
- `10-functional-decision-pack.md` — le présent pack.

Aucune architecture, stack, UX visuelle, backlog, POC ou MVP n’a été lancé.

---

## 2. Sources consultées

- Template cycle SFIA v2.6 ; routing guide ; operating model ; rules/guardrails ;
- Cadrage `01`–`07` sur `main` @ `8f5e8a8…` ;
- Capacités C1–C16 et UC1–UC8 (`05`) ;
- Handoff conception `80987d8…` ;
- Décisions D-VAL-1 à D-VAL-11 (inchangées).

---

## 3. Décision Morris de validation

| Champ | Valeur |
|-------|--------|
| Décision | Validation de la conception fonctionnelle SFIA Studio |
| Autorité | Morris |
| Date | **2026-07-18** |
| Objet | Socle fonctionnel `08`–`10` + FD-CAND-01…08 |
| Effet Git projet (à la validation) | Aucun automatique — faits Git ultérieurs sous GO distincts |
| Intégration courante | **Réalisée** — PR #209 |
| Effet architecture / POC / MVP | **Aucun** |

---

## 4. Périmètre validé

- Acteurs et responsabilités fonctionnelles ;
- Domaines D1–D10 (regroupements fonctionnels) ;
- Douze états et transitions ;
- Exigences FR-001…025 ;
- Règles BR-001…025 ;
- Parcours F1–F12 et matrices ;
- Invariants INV-01…14 ;
- Données fonctionnelles candidates (sans schéma) ;
- Sécurité fonctionnelle (besoins) ;
- UX fonctionnelle non visuelle ;
- Critères AC-01…08 ;
- Risques RF-01…07 (registre à suivre).

---

## 5. Périmètre explicitement exclu (inchangé)

| Exclu | Statut |
|-------|--------|
| Architecture fonctionnelle détaillée / technique | **Non validée** |
| Stack / API / BDD / microservices / frameworks | **Non décidés** |
| Figma / maquettes / design system | Non autorisés |
| Backlog / user stories delivery | Non créés |
| POC / MVP | **Non lancés / non définis** |
| Code / tests | Hors conception |
| Modification SFIA v2.6 / Campus360 | Interdites |

> Note historique : le cycle de validation n’autorisait pas commit/push/PR/merge. Ces faits Git ont ensuite été réalisés sous GO distincts (PR #209). Commit / push / PR / merge restent des autorisations **génériques distinctes**.

---

## 6. Réserves structurantes

| Réserve | Portée |
|---------|--------|
| Domaines D1–D10 | **≠** composants techniques |
| États / transitions | **≠** implémentation |
| Données candidates | **≠** schéma technique / BDD |
| Runtime / orchestrateur | Candidat — non contractuel |
| Architecture | Non validée |
| Stack | Non décidée |
| POC | Non lancé |
| MVP | Non défini |
| Backlog | Non lancé |
| Cycle suivant | Non lancé par cette validation |

---

## 7. FD-CAND-01 à FD-CAND-08 — VALIDÉES

> Note : les identifiants `FD-CAND` sont locaux au cycle de conception fonctionnelle. Leur validation **ne modifie pas** la numérotation D-VAL historique. **Aucune D-VAL-12.**

| ID | Décision | Effet (avec réserves) | Statut |
|----|----------|------------------------|--------|
| **FD-CAND-01** | Domaines fonctionnels D1–D10 | Socle domaines validé | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-02** | Acteurs et responsabilités | Contrat d’autorité stable | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-03** | États et transitions | Contrat de cycle validé | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-04** | Invariants INV-01…14 | Garde-fous stables | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-05** | Parcours F1–F12 | Référentiel parcours validé | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-06** | Passage à l’architecture fonctionnelle | Option de séquencement privilégiée **retenue** — **cycle non lancé** ; GO de démarrage distinct requis | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-07** | Cycle UX fonctionnel non visuel avant architecture | Option alternative **retenue** — **non sélectionnée** | **VALIDÉE — Morris — 2026-07-18** |
| **FD-CAND-08** | Préparer ultérieurement le périmètre POC | Préparation ultérieure autorisable — **POC non lancé** | **VALIDÉE — Morris — 2026-07-18** |

FD-CAND-06 et FD-CAND-07 n’entraînent **aucun** démarrage automatique de cycle. La sélection effective du cycle suivant reste **ouverte**.

---

## 8. Domaines / états / exigences / règles / parcours / invariants

| Élément | Statut |
|---------|--------|
| Domaines D1–D10 | **Validés** (fonctionnels ≠ techniques) |
| États et transitions | **Validés** |
| FR-001…025 | **Validées** |
| BR-001…025 | **Validées** |
| F1–F12 | **Validés** |
| INV-01…14 | **Validés** |

---

## 9. Risques (registre à suivre)

RF-01…RF-07 demeurent le registre de risques fonctionnels à suivre (voir historique du cycle).

---

## 10. Questions ouvertes (hors validation)

| Zone | Question |
|------|----------|
| Fonctionnel | Priorisation des parcours F* pour une première incrémentation |
| UX | Surfaces d’information minimales avant UI |
| Architecture | Frontières Studio / orchestrateur — **cycle futur non lancé** |
| POC | Preuves de faisabilité — **non sélectionnées** |
| MVP | Sous-ensemble de valeur — **non défini** |
| Branche | Sort de `project/sfia-studio-pre-framing` |

---

## 11. Décisions encore ouvertes

| Décision | Statut |
|----------|--------|
| Sélection / lancement du cycle architecture fonctionnelle | **Non sélectionné** (recommandation ci-dessous) |
| Validation future du contenu d’architecture | Ouverte |
| Sort des branches (`functional-design` / `pre-framing`) | Conservées ; décisions distinctes |
| Contenu du POC | Ouvert — non lancé |
| Définition / lancement du MVP | Ouvert — non lancé |

> Intégration Git / commit / push / PR de la conception : **faits réalisés** (PR #209) — plus des décisions ouvertes.

---

## 12. Gates

| Gate | Statut |
|------|--------|
| Validation Morris conception | **VALIDÉE** — 2026-07-18 |
| FD-CAND-01…08 | **VALIDÉES** |
| Intégration PR #209 / acceptation | **VALIDÉE** — 2026-07-18 |
| Écart d’autorisation merge | **Clôturé** (sans D-VAL-12) |
| Cycle 2 conception | **CLÔTURÉ** |
| GO cycle suivant | **Non pris** |
| Suppression branche | **Interdite** |

---

## 13. Cycle suivant

| Élément | Valeur |
|---------|--------|
| Recommandation | Architecture fonctionnelle Critical |
| Qualification | **RECOMMANDATION — NON SÉLECTIONNÉE** |
| Lancement | **Non autorisé** / **non sélectionné** |

---

## 14. Verdict documentaire

`SFIA STUDIO FUNCTIONAL DESIGN POST-MERGE STATUS SYNCHRONIZED — READY FOR MORRIS REVIEW`

---

## 15. Liens

| Document | Usage |
|----------|-------|
| [08-functional-design.md](./08-functional-design.md) | Contrat validé / intégré |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours / BR validés |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |
| [README.md](./README.md) | Navigation |

---

*SFIA Studio — conception VALIDÉE et INTÉGRÉE (PR #209 / `fdade59…`) — FD-CAND-01…08 VALIDÉES — pas de D-VAL-12 — cycle 2 clôturé — Critical — Morris décide.*

```

---

## 18. Instruction ChatGPT

Lire depuis Git :

- repository : `mcleland147/sfia-workspace`
- PR : **#210**
- ref handoff : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- base main : `fdade59a23a6dff4c264c73975358f77bc90f9b0`

Analyser : conformité 4 fichiers ; statuts post-merge ; non-régression FR/BR/F/INV/AC/RF ; absence D-VAL-12 ; diff vs main ; hors périmètre ; architecture/stack/POC/MVP ; readiness draft→ready-for-review ; readiness merge **sans merger** ; branches ; cycle suivant **sans le lancer**.

---

*Review pack FULL — PR #210 — Critical — 2026-07-18 18:20:52 CEST*
