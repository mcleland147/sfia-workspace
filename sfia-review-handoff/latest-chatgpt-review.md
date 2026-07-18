# SFIA Studio — Review Pack FULL — Post-merge PR #214

**Date/heure :** 2026-07-18 22:36:19 CEST
**Niveau :** FULL
**Cycle :** 14 — Post-merge
**Profil SFIA :** Critical
**Typologie :** DOC — post-merge / trace finale

---

## 1. Identité Git

| Champ | Valeur |
|---|---|
| Repository local | `/Users/morris/Projects/sfia-workspace` |
| Repository distant | `mcleland147/sfia-workspace` |
| Branche locale | `project/sfia-studio-functional-architecture` |
| HEAD local | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
| origin/main | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| origin/project/sfia-studio-functional-architecture | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` — **conservée** |

---

## 2. PR #214 — faits Git

| Champ | Valeur |
|---|---|
| PR | [#214](https://github.com/mcleland147/sfia-workspace/pull/214) |
| État | **MERGED** |
| mergedAt | 2026-07-18T20:20:50Z |
| base | `main` |
| headRef | `project/sfia-studio-functional-architecture` |
| headRefOid | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
| mergeCommit | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| Parents | `19302836b45d49f19698c624e99f2d68afa7b290` + `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
| Additions / deletions | +67 / −54 |
| Fichiers intégrés | `README.md`, `07`, `11`, `12`, `13` sous `projects/sfia-studio/` |

---

## 3. Justification Critical

- documents structurants de l’architecture fonctionnelle ;
- chaîne de traçabilité #211 / #212 / #213 / #214 ;
- proximité immédiate du gate de clôture formelle ;
- risque de promotion implicite d’AF-CAND-11B ;
- aucune D-VAL-12 ne doit être créée ;
- working tree susceptible de contenir des modifications hors périmètre (Campus360, `.sfia`, `.tmp-sfia-review` — OOS).

---

## 4. Décision Morris (cycle)

**Autorisé :** cycle post-merge local ; contrôles Git ; corrections documentaires factuelles strictement nécessaires ; review pack FULL ; Review Handoff Git.

**Non autorisé :** staging/commit/push/PR projet ; ready-for-review ou merge ; clôture formelle ; sélection AF-CAND-11B ; UX/UI, tech, backlog, POC, MVP ; D-VAL-12 ; suppression de branche ; modification fonctionnelle/architecturale.

---

## 5. Sources lues

**Depuis Git `main` :**
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` (si présent)

**Projet :**
- `projects/sfia-studio/README.md`
- `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`
- `projects/sfia-studio/11-functional-architecture.md`
- `projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md`
- `projects/sfia-studio/13-functional-architecture-decision-pack.md`

**Baseline protégée (non modifiée) :** `01`–`06`, `08`–`10`

**Handoff précédent :** `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` @ `ccf2a4ac13f0ccdb29aefabf15418e4d94ccd453`

---

## 6. État avant (post-merge #214, docs non encore synchronisées localement)

- `origin/main` déjà @ `5f1eb908…` (PR #214 MERGED)
- HEAD branche architecture @ `4f4e7cf…` (= head #214)
- Contenu documentaire tip encore calé sur base `19302836…` et branche tip `0b61d728…`
- Statut déjà `functional-architecture-post-merge-integrated`
- Trace #213 présentée comme dernière intégration ; #214 absente des refs courantes
- Clôture formelle NON PRONONCÉE ; AF-CAND-11B NON DÉCIDÉE

---

## 7. Références obsolètes corrigées

| Avant (courant obsolète) | Après |
|---|---|
| Base / `origin/main` @ `19302836…` | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| Branche architecture @ `0b61d728…` | @ `4f4e7cf…` |
| Absence de PR #214 / merge `5f1eb908…` | PR #214 **MERGED** ; merge `5f1eb908…` ; commit trace `4f4e7cf…` |
| Trace post-#213 locale éventuelle non versionnée | Trace #214 **intégrée** ; éventuelle trace post-#214 locale |
| Verdict pack #213 | Verdict pack #214 |

Les SHA `19302836…` / `0b61d728…` restent **historiques** pour la finalisation #213 (correct).

---

## 8. État après (sync locale)

- PR #214 **MERGED** tracée
- Trace post-merge #213 **intégrée** sur `main` via #214
- `origin/main` @ `5f1eb908…` = base canonique courante
- Branche architecture **conservée** @ `4f4e7cf…`
- Statut conservé : `functional-architecture-post-merge-integrated` (pas de nouveau statut)
- Clôture formelle **NON PRONONCÉE**
- AF-CAND-11B **NON DÉCIDÉE**
- Aucune D-VAL-12
- Aucun cycle suivant lancé
- Branches conservées

Formulation clé : *La PR #214 intègre sur `main` la trace documentaire post-merge de la PR #213. Cette intégration ne prononce ni la clôture formelle du cycle d’architecture fonctionnelle, ni la sélection d’AF-CAND-11B, ni la suppression des branches conservées.*

---

## 9. Statut conservé

`functional-architecture-post-merge-integrated`

---

## 10. Fichiers modifiés (sync locale post-#214)

| Fichier | Rôle |
|---|---|
| `projects/sfia-studio/README.md` | Meta, section 0, trajectoire, gates, inventaire, source |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | Meta, section 0, D-NEXT-2i5, questions, verdict |
| `projects/sfia-studio/11-functional-architecture.md` | Base Git, branche, PR #214, notes |
| `projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md` | Base, PR, footer |
| `projects/sfia-studio/13-functional-architecture-decision-pack.md` | Base/main, commit/merge #214, gates, verdict |

**Hors périmètre (présents dans le working tree, non touchés par ce cycle) :** Campus360, `.sfia/`, `.tmp-sfia-review/`, worktree handoff.

---

## 11. Baseline protégée

`01`–`06`, `08`–`10` : **aucune modification** (diff vide).

---

## 12. Chaîne de décisions préservée

| Élément | État |
|---|---|
| PR #211 | **MERGED** + acceptée/régularisée Morris 2026-07-18 |
| PR #212 | **MERGED** (sync) |
| PR #213 | **MERGED** (finalisation) — merge `19302836…` |
| PR #214 | **MERGED** (trace) — merge `5f1eb908…` |
| AF-Option C | **VALIDÉE** (≠ Option C méthode) |
| AF-CAND-01…10 | **VALIDÉES** |
| AF-CAND-11A | **VALIDÉE** (recommandation UX/UI) |
| AF-CAND-11B | **NON DÉCIDÉE** |
| AF-CAND-12 | **VALIDÉE** |
| D10 | **Préservé** |
| D-VAL-12 | **Aucune** |
| Architecture technique | **Non lancée** |
| Cycle suivant | **Non sélectionné** |
| Clôture formelle | **NON PRONONCÉE** |
| Branches | **Conservées** |

---

## 13. Diff stat (périmètre studio)

```
 projects/sfia-studio/07-product-trajectory-and-decision-pack.md     |  29 +++--
 projects/sfia-studio/11-functional-architecture.md |  12 +-
 ...functional-architecture-flows-and-boundaries.md |   6 +-
 .../13-functional-architecture-decision-pack.md    |  13 +-
 projects/sfia-studio/README.md                     |  35 +++---
 5 files changed (studio scope; campus360 OOS ignored)
```

---

## 14. Diff check

`git diff --check` : **propre** (aucune erreur).

---

## 15. Staged / commit / push / PR projet

| Contrôle | Résultat |
|---|---|
| Staged | **Aucun** (`git diff --cached` vide) |
| Commit projet | **Aucun** |
| Push projet | **Aucun** |
| PR projet | **Aucune** |

---

## 16. Diff complet (fichiers studio autorisés)

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 6d25f39..7ae72fa 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -10,9 +10,9 @@
 | **Statut** | `functional-architecture-post-merge-integrated` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
 | **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; acceptation #211 **VALIDÉE** |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` @ `19302836b45d49f19698c624e99f2d68afa7b290` — cadrage + conception + architecture + sync + finalisation **intégrés** |
+| **Source de vérité** | Git `main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` — cadrage + conception + architecture + sync + finalisation + trace **intégrés** |
 
-> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`). Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`). Finalisation documentaire **INTÉGRÉE** (PR #213 / `19302836…`). Acceptation/régularisation #211 **VALIDÉE** (Morris — 2026-07-18). Clôture formelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
+> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** et **INTÉGRÉE** (PR #211). Sync #212 **INTÉGRÉE**. Finalisation #213 **INTÉGRÉE** (`19302836…`). Trace #214 **INTÉGRÉE** (`5f1eb908…`). Acceptation/régularisation #211 **VALIDÉE**. Clôture formelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
 
 ---
 
@@ -43,11 +43,12 @@
 | Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
 | Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` |
 | Finalisation post-merge (#213) | **INTÉGRÉE** — merge `19302836…` ; commit `0b61d728…` |
+| Trace post-merge (#214) | **INTÉGRÉE** — merge `5f1eb908…` ; commit `4f4e7cf…` |
 | Clôture formelle cycle architecture | **NON PRONONCÉE** |
 | Prochain cycle après architecture | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (11A) |
 | Branches | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
 
-> Merges #207 / #209/#210 : historiques. Merge #211 (`84e4863…`) : architecture **intégrée** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). Merge #212 (`cb870544…`) : sync **intégrée**. Merge #213 (`19302836…`) : finalisation documentaire **intégrée** — ne prononce ni clôture formelle, ni AF-CAND-11B, ni suppression de branches.
+> Merges #207 / #209/#210 : historiques. Merge #211 : architecture **intégrée** + acceptée/régularisée. Merge #212 : sync **intégrée**. Merge #213 (`19302836…`) : finalisation **intégrée**. Merge #214 (`5f1eb908…`) : trace post-merge **intégrée** — ne prononce ni clôture formelle, ni AF-CAND-11B, ni suppression de branches.
 
 ### Trace factuelle — cycle 2 (conception fonctionnelle)
 
@@ -124,7 +125,7 @@ Pré-cadrage                         ← terminé historiquement
   → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
   → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
   → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — **CLÔTURÉE**
-  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — sync #212 **intégrée** (`cb870544…`) — finalisation #213 **intégrée** (`19302836…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
+  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (#211) — sync #212 + finalisation #213 + trace #214 **intégrées** (`5f1eb908…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
   → UX/UI (recommandé AF-CAND-11A)  ← **non sélectionnée** (AF-CAND-11B)
   → architecture technique candidate
   → définition du POC
@@ -149,6 +150,7 @@ Pré-cadrage                         ← terminé historiquement
 - Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18.
 - Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`).
 - Finalisation documentaire **INTÉGRÉE** (PR #213 / `19302836…`).
+- Trace post-merge **INTÉGRÉE** (PR #214 / `5f1eb908…`).
 - **AF-CAND-11A** oriente UX/UI puis tech puis POC puis MVP — **sans lancer**.
 - **AF-CAND-11B** : sélection cycle suivant **NON DÉCIDÉE**.
 - Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main`.
@@ -191,8 +193,8 @@ Pré-cadrage                         ← terminé historiquement
 | AF-CAND-11B | **NON DÉCIDÉE** |
 | D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
 | Branche | `project/sfia-studio-functional-architecture` — **conservée** |
-| Commits / merges | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync `33d61e3…` ; merge #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836…` |
-| Intégration | Architecture **Oui** (#211) ; sync **Oui** (#212) ; finalisation **Oui** (#213) |
+| Commits / merges | … finalisation `0b61d728…` ; merge #213 `19302836…` ; trace `4f4e7cf…` ; merge #214 `5f1eb908…` |
+| Intégration | Architecture **Oui** (#211) ; sync **Oui** (#212) ; finalisation **Oui** (#213) ; trace **Oui** (#214) |
 | Acceptation #211 | **VALIDÉE** Morris 2026-07-18 (sans D-VAL-12) |
 | Ne lance pas | Architecture technique ; UX/UI ; stack ; POC ; MVP ; code ; clôture auto ; AF-CAND-11B |
 
@@ -235,6 +237,7 @@ Pré-cadrage                         ← terminé historiquement
 | D-NEXT-2i2 | Acceptation/régularisation documentaire #211 | Morris | **VALIDÉE** — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
 | D-NEXT-2i3 | Sync post-merge PR #212 | Observation Git | **MERGED** (`cb870544…`) — sync **intégrée** |
 | D-NEXT-2i4 | Finalisation post-merge PR #213 | Observation Git | **MERGED** (`19302836…`) — finalisation **intégrée** |
+| D-NEXT-2i5 | Trace post-merge PR #214 | Observation Git | **MERGED** (`5f1eb908…`) — trace **intégrée** |
 | D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — **non prononcée** |
 | D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **Non sélectionné** |
 | D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
@@ -279,7 +282,7 @@ Pré-cadrage                         ← terminé historiquement
 
 **Conception fonctionnelle bornée** (Option 1 de séquencement post-cadrage) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).
 
-**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync #212 **INTÉGRÉE** (`cb870544…`). Finalisation #213 **INTÉGRÉE** (`19302836…`).
+**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** et **acceptée/régularisée**. Sync #212 **INTÉGRÉE**. Finalisation #213 **INTÉGRÉE** (`19302836…`). Trace #214 **INTÉGRÉE** (`5f1eb908…`).
 
 **AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.
 
@@ -301,7 +304,7 @@ Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE** (`84e4863…`). Sync #212 + finalisation #213 : **INTÉGRÉES** (`19302836…`). Acceptation #211 : **VALIDÉE**. AF-CAND-11B : **non décidée**.
+Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE**. Sync #212 + finalisation #213 + trace #214 : **INTÉGRÉES** (`5f1eb908…`). Acceptation #211 : **VALIDÉE**. AF-CAND-11B : **non décidée**.
 
 ---
 
@@ -312,7 +315,7 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 3. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
 4. Quel niveau d’architecture minimale avant POC ?
 5. Quelles priorités NFR avant le POC ?
-6. Autorisez-vous une trace documentaire post-#213 éventuelle (commit/push/PR) ?
+6. Autorisez-vous une trace documentaire post-#214 éventuelle (commit/push/PR) ?
 
 ---
 
@@ -332,6 +335,7 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
 | Sync post-merge | **INTÉGRÉE** — `cb870544…` / PR #212 |
 | Finalisation post-merge | **INTÉGRÉE** — `19302836…` / PR #213 |
+| Trace post-merge | **INTÉGRÉE** — `5f1eb908…` / PR #214 |
 | Acceptation #211 | **VALIDÉE** — 2026-07-18 |
 | AF-Option C | **VALIDÉE** |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
@@ -354,13 +358,14 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
 | Sync post-merge | **INTÉGRÉE** — `cb870544…` |
 | Finalisation #213 | **INTÉGRÉE** — `19302836…` |
+| Trace #214 | **INTÉGRÉE** — `5f1eb908…` |
 | Acceptation #211 | **VALIDÉE** |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-11B | **NON DÉCIDÉE** |
 | Ready for POC / MVP / tech | **Non** |
-| Ready for Morris #213 post-merge review | **Oui** (trace locale) |
+| Ready for Morris #214 post-merge review | **Oui** (sync locale) |
 
-**Verdict :** `SFIA STUDIO PR #213 POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
+**Verdict :** `SFIA STUDIO PR #214 POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
 
 ---
 
@@ -378,4 +383,4 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — D10 → AF-01 / AF-15 |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND |
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 + trace #214 INTÉGRÉES (`5f1eb908…`) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
diff --git a/projects/sfia-studio/11-functional-architecture.md b/projects/sfia-studio/11-functional-architecture.md
index adea160..29681fb 100644
--- a/projects/sfia-studio/11-functional-architecture.md
+++ b/projects/sfia-studio/11-functional-architecture.md
@@ -8,17 +8,17 @@
 | **Profil** | Critical |
 | **Typologie** | DOC — EVOL produit |
 | **Baseline** | SFIA v2.6 (**Option C méthode** validée — D-VAL-6) |
-| **Base Git** | `origin/main` @ `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** @ `0b61d728…`) |
-| **Commit / merge** | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** @ `4f4e7cf…`) |
+| **Commit / merge** | … finalisation `0b61d728…` ; merge #213 `19302836…` ; trace `4f4e7cf…` ; merge #214 `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Autorité** | Morris (L0) |
 | **Entrée** | Conception validée `08`–`10` (inchangée) |
 | **Architecture** | **VALIDÉE** et **INTÉGRÉE** sur `main` — **AF-Option C** VALIDÉE |
 | **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; aucune D-VAL-12 ; acceptation #211 **VALIDÉE** |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** |
 
-> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18. Sync #212 + finalisation #213 **INTÉGRÉES** (`19302836…`). **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle **non prononcée**.
+> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** (PR #211) — **acceptée/régularisée** Morris 2026-07-18. Sync #212 + finalisation #213 + trace #214 **INTÉGRÉES** (`5f1eb908…`). **Pas** d’architecture technique. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle **non prononcée**.
 
 ---
 
@@ -370,4 +370,4 @@ Ces vues préparent un futur UX/UI **sans** maquette ni Figma.
 
 ---
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 + trace #214 INTÉGRÉES (`5f1eb908…`) — clôture NON PRONONCÉE — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*
diff --git a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
index 7e2ed7c..b1c86cb 100644
--- a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
+++ b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
@@ -5,8 +5,8 @@
 | **Document** | `12-functional-architecture-flows-and-boundaries.md` |
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Cycle** | Architecture fonctionnelle — Critical |
-| **Base** | `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** (`19302836…`) |
+| **Base** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** (`5f1eb908…`) |
 | **Complète** | [11-functional-architecture.md](./11-functional-architecture.md) |
 
 > Flux **AF-*** candidats. Ne remplacent pas F1–F12 validés ; ils les **structurent** architecturalement.
@@ -389,4 +389,4 @@ Voir document 11 §§9–10 et BR-001…025. Gates séparés : commit, push, PR,
 
 ---
 
-*Flux architecture VALIDÉS et INTÉGRÉS (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — Morris décide AF-CAND-11B / clôture.*
+*Flux architecture VALIDÉS et INTÉGRÉS (#211) — sync #212 + finalisation #213 + trace #214 INTÉGRÉES (`5f1eb908…`) — Morris décide AF-CAND-11B / clôture.*
diff --git a/projects/sfia-studio/13-functional-architecture-decision-pack.md b/projects/sfia-studio/13-functional-architecture-decision-pack.md
index 5d14684..6c98606 100644
--- a/projects/sfia-studio/13-functional-architecture-decision-pack.md
+++ b/projects/sfia-studio/13-functional-architecture-decision-pack.md
@@ -6,7 +6,7 @@
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Cycle** | 3 — Architecture fonctionnelle — sous-cycle amendements Morris |
 | **Profil** | Critical |
-| **Base / main** | `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base / main** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Commit head PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
 | **Merge #211** | `84e48636bb78808774b51f67329167f8e9749a6b` |
 | **Acceptation #211** | **VALIDÉE** — Morris — 2026-07-18 (sans D-VAL-12) |
@@ -14,7 +14,9 @@
 | **Merge #212** | `cb87054423ed80905f633e86d907eee1709611b2` |
 | **Commit finalisation #213** | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
 | **Merge #213** | `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** |
+| **Commit trace #214** | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
+| **Merge #214** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** |
 | **Complète** | [11](./11-functional-architecture.md) · [12](./12-functional-architecture-flows-and-boundaries.md) |
 
 > **AF-CAND-*** = décisions locales au cycle d’architecture. **≠ D-VAL**. Aucune D-VAL-12.
@@ -261,7 +263,7 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 2. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
 3. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
 4. Quel niveau d’architecture minimale avant POC ?
-5. Autorisez-vous une trace documentaire post-#213 éventuelle ?
+5. Autorisez-vous une trace documentaire post-#214 éventuelle ?
 
 ---
 
@@ -277,6 +279,7 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 | Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 |
 | Sync post-merge PR #212 | **INTÉGRÉE** — `cb870544…` |
 | Finalisation post-merge PR #213 | **INTÉGRÉE** — `19302836…` |
+| Trace post-merge PR #214 | **INTÉGRÉE** — `5f1eb908…` |
 | Clôture formelle cycle architecture | **Non** — **non prononcée** |
 | Lancement UX/UI / tech / POC / MVP | **Non** |
 
@@ -304,7 +307,7 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 
 ## 12. Verdict
 
-**Architecture fonctionnelle VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` — PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync #212 **INTÉGRÉE** (`cb870544…`). Finalisation #213 **INTÉGRÉE** (`19302836…`).
+**Architecture fonctionnelle VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` — PR #211 **MERGED** et **acceptée/régularisée**. Sync #212 **INTÉGRÉE**. Finalisation #213 **INTÉGRÉE** (`19302836…`). Trace #214 **INTÉGRÉE** (`5f1eb908…`).
 
 Validé : AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12 ; acceptation #211.
 Non décidé : AF-CAND-11B ; clôture formelle.
@@ -312,4 +315,4 @@ Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé. Clôt
 
 ---
 
-*Pack AF validé et intégré — Critical — sync #212 + finalisation #213 intégrées — Morris décide AF-CAND-11B / clôture.*
+*Pack AF validé et intégré — Critical — sync #212 + finalisation #213 + trace #214 intégrées — Morris décide AF-CAND-11B / clôture.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1264b2f..13fa42a 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,14 +4,14 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `functional-architecture-post-merge-integrated` — Architecture **VALIDÉE** et **INTÉGRÉE** ; sync post-merge **intégrée** (#212) ; finalisation documentaire **intégrée** (#213) ; clôture formelle **non prononcée** |
+| **Statut** | `functional-architecture-post-merge-integrated` — Architecture **VALIDÉE** et **INTÉGRÉE** ; sync #212 + finalisation #213 + trace #214 **intégrées** ; clôture formelle **non prononcée** |
 | **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — post-merge #213 (DOC, Critical) — trace locale |
-| **Typologie cycle** | DOC — post-merge / intégration finale |
-| **Cycle projet** | 3 — Architecture (**VALIDÉE** + **INTÉGRÉE**) ; sync + finalisation **intégrées** ; clôture formelle **ouverte** |
+| **Exécuteur** | Cursor — post-merge #214 (DOC, Critical) — sync locale |
+| **Typologie cycle** | DOC — post-merge / trace finale |
+| **Cycle projet** | 3 — Architecture (**VALIDÉE** + **INTÉGRÉE**) ; sync + finalisation + trace **intégrées** ; clôture formelle **ouverte** |
 | **Profil SFIA** | Critical |
-| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `0b61d728…`) |
+| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `4f4e7cf…`) |
 | **Commit architecture initial** | `215325858ed493564f6083ec5adc1618008593f6` |
 | **Head final PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
 | **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
@@ -23,10 +23,13 @@
 | **PR finalisation post-merge** | [#213](https://github.com/mcleland147/sfia-workspace/pull/213) — **MERGED** |
 | **Commit finalisation** | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
 | **Merge finalisation** | `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **PR trace post-merge** | [#214](https://github.com/mcleland147/sfia-workspace/pull/214) — **MERGED** |
+| **Commit trace** | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
+| **Merge trace** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
 | **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
 | **Chemin** | `projects/sfia-studio/` |
-| **Base canonique** | `origin/main` @ `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base canonique** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
 | **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
 | **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
@@ -61,6 +64,7 @@
 | Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
 | Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` ; commit `33d61e3…` |
 | Finalisation post-merge (#213) | **INTÉGRÉE** — merge `19302836…` ; commit `0b61d728…` |
+| Trace post-merge (#214) | **INTÉGRÉE** — merge `5f1eb908…` ; commit `4f4e7cf…` |
 | Intégration conception sur `main` | **Réalisée** via PR #209 / sync #210 → `e9d8193…` |
 | Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
 | Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 |
@@ -68,7 +72,7 @@
 | Prochain cycle | **Non sélectionné** (AF-CAND-11B) |
 | Branches | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
 
-> PR #207 / #209 : historiques. PR #211 : architecture **intégrée** (`84e4863…`) — **fait Git** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). PR #212 : sync post-merge **intégrée** (`cb870544…`). PR #213 : finalisation documentaire **intégrée** (`19302836…`). Cette intégration ne prononce ni la clôture formelle du cycle d’architecture fonctionnelle, ni la sélection d’AF-CAND-11B, ni la suppression des branches conservées.
+> PR #207 / #209 : historiques. PR #211 : architecture **intégrée** + acceptée/régularisée. PR #212 : sync **intégrée**. PR #213 : finalisation **intégrée** (`19302836…`). PR #214 : trace documentaire post-merge **intégrée** (`5f1eb908…`). Cette intégration ne prononce ni la clôture formelle du cycle d’architecture fonctionnelle, ni la sélection d’AF-CAND-11B, ni la suppression des branches conservées.
 
 ---
 
@@ -140,7 +144,7 @@ Pré-cadrage                    ← terminé historiquement
   → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
   → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
   → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — cycle **CLÔTURÉ**
-  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — sync #212 **intégrée** (`cb870544…`) — finalisation #213 **intégrée** (`19302836…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
+  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (#211) — sync #212 + finalisation #213 + trace #214 **intégrées** (`5f1eb908…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
   → UX/UI (recommandé AF-CAND-11A) / architecture technique / POC ← **non sélectionnés** (AF-CAND-11B)
   → MVP → delivery → industrialisation plateforme
 ```
@@ -189,7 +193,7 @@ Aucune stack / architecture **technique** validée. Architecture **fonctionnelle
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |
 
-> Statut `functional-architecture-post-merge-integrated`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. PR #211 **MERGED** + acceptée. PR #212 **MERGED**. PR #213 **MERGED** — finalisation sur `main` (`19302836…`). Clôture formelle **non prononcée**.
+> Statut `functional-architecture-post-merge-integrated`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. PR #211–#214 **MERGED** — finalisation + trace sur `main` (`5f1eb908…`). Clôture formelle **non prononcée**.
 
 ---
 
@@ -284,19 +288,19 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 |----------|--------|
 | AF-CAND-11B — sélection / lancement prochain cycle | **NON DÉCIDÉE** — UX/UI recommandé via 11A |
 | Acceptation / régularisation documentaire du merge #211 | **Ouverte** — fait Git tracé ; pas de D-VAL auto |
-| Commit / push / PR sync (#212) + finalisation (#213) | **Réalisés et intégrés** — trace post-#213 locale éventuelle **non versionnée** ici |
+| Commit / push / PR sync (#212) + finalisation (#213) + trace (#214) | **Réalisés et intégrés** — trace post-#214 éventuelle **non versionnée** ici |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches | Conservées ; décisions distinctes |
 | Contenu POC / définition MVP | Non pris |
 | Stack / architecture technique | Non pris |
 
-> Conception : intégrée (PR #209 / #210). Architecture : **intégrée** (PR #211 / `84e4863…`) — acceptée/régularisée Morris 2026-07-18. Sync #212 + finalisation #213 : **intégrées** (`cb870544…` / `19302836…`). Aucune réinterprétation rétroactive ; aucune D-VAL-12.
+> Conception : intégrée (PR #209 / #210). Architecture : **intégrée** (PR #211) — acceptée/régularisée. Sync #212 + finalisation #213 + trace #214 : **intégrées** (`5f1eb908…`). Aucune réinterprétation rétroactive ; aucune D-VAL-12.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Revue ChatGPT du handoff **post-merge #213**.
+1. Revue ChatGPT du handoff **post-merge #214**.
 2. Clôture formelle du cycle architecture (**non prononcée**).
 3. **AF-CAND-11B** — sélection du prochain cycle (**non décidée** ; UX/UI recommandé).
 4. Sort des branches (`pre-framing` / `functional-design` / `functional-architecture`).
@@ -316,12 +320,13 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Conception fonctionnelle validée | **`08`–`10`** sur **`main`** — baseline **inchangée** |
 | Architecture fonctionnelle validée + intégrée | **`11`–`13`** sur **`main`** (`84e4863…` / PR #211) |
 | Sync post-merge intégrée | PR #212 / `cb870544…` |
-| Finalisation post-merge intégrée | PR #213 / `19302836…` — statut `functional-architecture-post-merge-integrated` |
+| Finalisation post-merge intégrée | PR #213 / `19302836…` |
+| Trace post-merge intégrée | PR #214 / `5f1eb908…` — statut `functional-architecture-post-merge-integrated` |
 | Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
 | Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
-> `main` @ `19302836…` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de la **sync post-merge** et de la **finalisation documentaire** intégrées. Toute trace post-#213 éventuelle = **locale** jusqu’à GO versionnement.
+> `main` @ `5f1eb908…` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de la **sync**, de la **finalisation** et de la **trace post-merge** intégrées. Toute trace post-#214 éventuelle = **locale** jusqu’à GO versionnement.
 
 ---
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 + trace #214 INTÉGRÉES (`5f1eb908…`) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*

```

---

## 17. Risques

1. Confusion entre merge #214 et clôture formelle du cycle architecture.
2. Promotion implicite d’AF-CAND-11B / UX-UI / tech.
3. Création accidentelle d’une D-VAL-12.
4. Working tree pollué (Campus360 / `.sfia`) — risque de staging hors périmètre si GO versionnement.
5. Nouveau statut inventé pour #214 — **évité** (statut conservé).

---

## 18. Réserves

- Sync **locale uniquement** — non versionnée tant que Morris n’autorise pas commit/push/PR.
- Campus360 et artefacts locaux restent hors cycle.
- Les SHA #213 restent cités comme **historique** de finalisation (intentionnel).

---

## 19. Décisions Morris restantes

1. Clôture formelle du cycle d’architecture fonctionnelle (**ouverte**).
2. Sélection AF-CAND-11B / prochain cycle (**ouverte** ; UX/UI recommandé via 11A).
3. Sort des branches `pre-framing` / `functional-design` / `functional-architecture` (**conservées**).
4. Autorisation éventuelle de versionner cette sync post-#214 (commit/push/PR).

---

## 20. Verdict

**SFIA STUDIO PR #214 POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW**

Aucun commit projet. Aucun push projet. Aucune nouvelle PR projet. Aucune clôture formelle. Aucun cycle suivant lancé. Aucune suppression de branche.
