# Review pack FULL — SFIA Studio post-merge documentary synchronization

**Date / heure :** 2026-07-18 17:14:34 CEST
**Repository :** `/Users/morris/Projects/sfia-workspace` (`mcleland147/sfia-workspace`)
**Cycle :** 1 — Cadrage (sous-cycle synchronisation documentaire post-merge)
**Profil :** Standard | **Typologie :** DOC
**Baseline :** SFIA v2.6 | **Option C**
**Branche locale :** `project/sfia-studio-pre-framing`
**HEAD local :** `b853af1113a2ff03de72a7db3a00724c3c53820e`
**origin/main :** `ec21074ee1bff63153a3aa179b8d33d0678db389`
**PR :** #207 MERGED | **Merge :** `ec21074ee1bff63153a3aa179b8d33d0678db389`
**Commit projet historique :** `b853af1113a2ff03de72a7db3a00724c3c53820e`
**Rôle du cycle :** corriger formulations obsolètes post-merge ; préserver historique D-VAL-10 ; proposer D-VAL-11 candidate only ; **sans** commit/push/PR projet.

---

## 1. État Git

```
 M projects/campus360/README.md
 M projects/sfia-studio/01-opportunity-and-vision.md
 M projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md
 M projects/sfia-studio/03-pre-framing-decision-pack.md
 M projects/sfia-studio/04-detailed-product-framing.md
 M projects/sfia-studio/05-product-capabilities-and-use-cases.md
 M projects/sfia-studio/06-scope-constraints-and-success-criteria.md
 M projects/sfia-studio/07-product-trajectory-and-decision-pack.md
 M projects/sfia-studio/README.md
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/04-detailed-framing.md
?? projects/campus360/05-mvp-increment-trajectory.md
?? projects/campus360/06-governance-and-stakeholders.md
?? projects/campus360/07-risks-dependencies-and-gates.md
?? sfia-review-handoff/
```

Aucun fichier staged. Campus360 / `.sfia` / `.tmp` / handoff worktree hors périmètre (non touchés pour le projet).

**Commit projet :** NON exécuté. **Push projet :** NON exécuté. **PR corrective :** NON créée.

---

## 2. Sources consultées

- Template / routing / operating model / rules
- Huit docs sur `origin/main` (pré-édition = b853af1)
- Handoff post-merge `d11a15c`
- PR #207 / merge `ec21074`

---

## 3. Périmètre

Exactement 8 fichiers `projects/sfia-studio/`.

```
M	projects/sfia-studio/01-opportunity-and-vision.md
M	projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md
M	projects/sfia-studio/03-pre-framing-decision-pack.md
M	projects/sfia-studio/04-detailed-product-framing.md
M	projects/sfia-studio/05-product-capabilities-and-use-cases.md
M	projects/sfia-studio/06-scope-constraints-and-success-criteria.md
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/README.md
```

### Diff stat

```
 projects/sfia-studio/01-opportunity-and-vision.md  |  33 +++--
 .../02-sfia-cycle-coverage-hypothesis.md           |   6 +-
 .../sfia-studio/03-pre-framing-decision-pack.md    |  74 ++++++----
 .../sfia-studio/04-detailed-product-framing.md     |  13 +-
 .../05-product-capabilities-and-use-cases.md       |   4 +-
 .../06-scope-constraints-and-success-criteria.md   |   9 +-
 .../07-product-trajectory-and-decision-pack.md     | 151 ++++++++++++---------
 projects/sfia-studio/README.md                     | 111 ++++++++++-----
 8 files changed, 243 insertions(+), 158 deletions(-)
```

### git diff --check

```
(aucune alerte)
```

---

## 4. Inventaire post-édition (lignes / octets / SHA-256)

| Fichier | Lignes | Octets | SHA-256 |
|---------|--------|--------|---------|
| `projects/sfia-studio/README.md` | 239 | 10836 | `0c7b5e1fe6bcc46a487dfffa464648c99140ae6f47e1ae2c9d1ea67c63b5e535` |
| `projects/sfia-studio/01-opportunity-and-vision.md` | 350 | 13578 | `124f6d935680d59692053e7852f7f5403a5d1c7958d71400362012444ba38907` |
| `projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md` | 165 | 7286 | `62bbc183ac8877aabb036cf01fe38878e63cb803aa3561a0f87e851b568038f3` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 279 | 11729 | `c5261c420763d74563be08242b2406fcf53cdf78924a9a91524745c04eaa5d63` |
| `projects/sfia-studio/04-detailed-product-framing.md` | 237 | 10499 | `a6dda1ccbbf608217c6f4168c25d5f01e42309393ab7ae9186c582a21fcab149` |
| `projects/sfia-studio/05-product-capabilities-and-use-cases.md` | 377 | 11258 | `eb0b78058030dba24e9ff6e97c8e89d96668e2e1d48597a6cc297f48ce7cd20a` |
| `projects/sfia-studio/06-scope-constraints-and-success-criteria.md` | 248 | 9076 | `50528e4930779f05cf1c4af6fe6d51c04a0996915ac9dde7e3a62ac4e365085f` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 286 | 10738 | `9a6b51a96973bfd51cb581adbf920f8491f5276749d07beaf257ca1173149a8c` |

---

## 5. Corrections (synthèse)


| Occurrence type | Action |
|-----------------|--------|
| `detailed-framing-in-progress` | Remplacé par `post-merge-documentary-synchronization-candidate-review` (README, 04–06) ; 07 déjà aligné |
| MERGE FORBIDDEN / verdict prêt commit-push-draft | Remplacé par verdicts post-merge sync ready for Morris review |
| ready-for-review / merge comme prochaine action | Remplacé par D-VAL-11 / clôture / branche / prochain cycle |
| documents locaux | Remplacé par documents sur `main` (PR #207 / ec21074) |
| G7 « MERGE INTERDIT » comme statut courant | Reformulé : historique D-VAL-10 + observation merge + D-VAL-11 candidate |
| D-VAL-10 texte | Conservé comme **historique** (merge non autorisé par cette décision) |
| D-VAL-11 | Ajoutée **CANDIDATE ONLY — NOT VALIDATED** (README, 03, 07 ; bandeaux 01–02) |

### Formulations historiques conservées

- Texte D-VAL-10 : commit/push/draft PR autorisés ; merge non autorisé **par cette décision**
- Nature historique des docs 01–03
- Option C, Runtime candidat, macOS preuve, quinze cycles progressifs, POC/MVP non démarrés

### Formulations courantes corrigées

- Statuts `detailed-framing-in-progress` → `post-merge-documentary-synchronization-candidate-review`
- Source de vérité = `main`
- G7 = historique + observation merge + D-VAL-11 candidate
- Prochaines décisions = D-VAL-11 / branche / prochain cycle (plus ready-for-review/merge)
- Verdicts post-merge sync

---

## 6. D-VAL et gates

| Élément | Statut |
|---------|--------|
| D-VAL-1…10 | Historiques — inchangés dans leur sens |
| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
| G1–G6 / DF-G1 | Validés (historiques) |
| G7 | Historique D-VAL-10 ; merge observé ; pas de réécriture rétroactive |

---

## 7. Trajectoire / branche / prochain cycle

- Pré-cadrage terminé ; cadrage validé D-VAL-9 ; G7 versionnement fait ; merge PR #207 fait Git ; sync = cycle actuel
- Branche `project/sfia-studio-pre-framing` conservée ; intégrée ; suppression interdite ici
- Prochain cycle **non sélectionné** ; recommandation candidate : sync puis conception bornée

---

## 8. Diff complet (contenu exploitable)

```diff
diff --git a/projects/sfia-studio/01-opportunity-and-vision.md b/projects/sfia-studio/01-opportunity-and-vision.md
index 49669bb..25198c7 100644
--- a/projects/sfia-studio/01-opportunity-and-vision.md
+++ b/projects/sfia-studio/01-opportunity-and-vision.md
@@ -11,23 +11,32 @@
 | **Statut** | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
 | **Autorité** | Morris |
 
-> **Note historique :** Ce document a porté l’opportunité et la vision lors du pré-cadrage. Le **cadrage détaillé validé** (D-VAL-9 / DF-G1) est désormais porté par les documents `04` à `07`. En cas d’écart sur l’état courant, **README et `04`–`07` priment**.
+> **Note historique :** Ce document a porté l’opportunité et la vision lors du pré-cadrage. Le **cadrage détaillé validé** (D-VAL-9 / DF-G1) et l’**état courant post-merge** sont portés par **README et `04`–`07`**. En cas d’écart, **README prime**.
 
-### Statut actuel (synchronisation post D-VAL-9)
+### Bandeau post-merge
+
+| Élément | Valeur |
+|---------|--------|
+| Nature | Document **historique** de pré-cadrage |
+| PR #207 | **MERGED** — merge `ec21074…` ; socle sur `main` |
+| D-VAL-10 (historique) | Commit / push / draft PR autorisés — merge **non** autorisé par cette décision |
+| Observation | Merge réalisé et vérifié techniquement |
+| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
+| Prochain cycle | **Non sélectionné** |
+
+### Statut des décisions (rappel)
 
 | Élément | Statut |
 |---------|--------|
-| D-VAL-1 à D-VAL-7 | **Validés** |
-| D-VAL-8 / G6 | **VALIDÉ** — cadrage détaillé autorisé |
-| D-VAL-9 / DF-G1 | **VALIDÉ** — cadrage détaillé validé |
-| D-VAL-10 / G7 | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** |
-| G1 / G2 | **VALIDÉ** |
+| D-VAL-1 à D-VAL-9 | **Validés** (historiques) |
+| D-VAL-10 / G7 | **Historique** — commit / push / draft PR autorisés ; merge non autorisé **par D-VAL-10** |
+| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
+| G1 / G2 / G4 / G6 / DF-G1 | **VALIDÉ** |
 | G3 | **REVUE CONFORME** |
-| G4 | **VALIDÉ — OPTION C** |
 | G5 | **VALIDÉ SUR LE PRINCIPE** |
 | Prochain cycle | **Non sélectionné** |
 
-> G7 autorise commit, push et draft PR. **Merge non autorisé.** Le push technique du Review Handoff Git **ne vaut pas** merge.
+> Handoff review ≠ décision Morris. Observation du merge ≠ validation de D-VAL-11.
 
 ---
 
@@ -286,7 +295,7 @@ Cadrage détaillé ; architecture ; stack ; UX/Figma ; backlog ; code ; démarra
 
 ## 18. Contraintes
 
-Baseline v2.6 non modifiable ici ; Option C ; pas de seconde vérité ; pas d’auto-décision ; G6 et DF-G1 **réalisés** ; G7 autorisé pour commit/push/draft PR — **merge interdit** ; Campus360 hors périmètre.
+Baseline v2.6 non modifiable ici ; Option C ; pas de seconde vérité ; pas d’auto-décision ; G6 et DF-G1 **réalisés** ; G7 historique (D-VAL-10) = commit/push/draft PR ; merge = fait Git (PR #207) — régularisation D-VAL-11 candidate ; Campus360 hors périmètre.
 
 ---
 
@@ -303,7 +312,7 @@ Seconde vérité ; contournement gates ; Runtime figé trop tôt ; macOS pris po
 3. macOS = contrainte de preuve.
 4. Critères candidats de valeur présents ; POC ≠ valeur.
 5. Couverture 15 cycles = progressive.
-6. G1/G2/G4/G5 principe / G3 revue conforme / G6 / DF-G1 / G7 (commit/push/draft PR) correctement marqués ; merge interdit ; prochain cycle non sélectionné.
+6. G1/G2/G4/G5 principe / G3 revue conforme / G6 / DF-G1 / G7 historique correctement marqués ; merge observé (PR #207) ; D-VAL-11 candidate only ; prochain cycle non sélectionné.
 
 ---
 
@@ -338,4 +347,4 @@ Seconde vérité ; contournement gates ; Runtime figé trop tôt ; macOS pris po
 
 ---
 
-*SFIA Studio — document historique de pré-cadrage — synchronisé post D-VAL-10 — G7 autorisé — merge interdit — Morris décide.*
+*SFIA Studio — document historique de pré-cadrage — PR #207 mergée — D-VAL-11 candidate only — Morris décide.*
diff --git a/projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md b/projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md
index 56676e3..6e3ff45 100644
--- a/projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md
+++ b/projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md
@@ -12,9 +12,9 @@
 
 > **Règle (G3-R5) :** les 15 cycles représentent la **cible de couverture progressive** du produit. Aucun incrément n’est obligé de les couvrir tous. Le MVP pourra couvrir un **sous-ensemble prioritaire** — **non sélectionné ici**. Aucun cycle n’est automatiquement activé. Profil requalifié à chaque cycle.
 >
-> **Statut actuel (post D-VAL-10) :** G1, G2, G3 (revue conforme), G4 (Option C), G5 (principe), G6, DF-G1 et G7 (**commit / push / draft PR autorisés — merge interdit**) **validés**. Prochain cycle **non sélectionné**.
+> **Bandeau post-merge :** document **historique**. PR **#207** mergée (`ec21074`). État courant porté par **README et `04`–`07`**. D-VAL-10 = historique (commit/push/draft PR ; merge non autorisé par cette décision). Merge = observation Git. **D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED.** Prochain cycle **non sélectionné**.
 >
-> La sélection du prochain cycle reste une décision Morris distincte. Aucun cycle de conception, architecture ou UX n’est lancé par cette synchronisation. En cas d’écart, README et `04`–`07` priment.
+> La sélection du prochain cycle reste une décision Morris distincte. Aucun cycle de conception, architecture ou UX n’est lancé ici. En cas d’écart, README et `04`–`07` priment.
 
 ---
 
@@ -162,4 +162,4 @@ Activation auto ; architecture déguisée ; backlog ; sélection MVP ; validatio
 
 ---
 
-*SFIA Studio — document historique de pré-cadrage — synchronisé post D-VAL-10 — prochain cycle non lancé — Morris décide.*
+*SFIA Studio — document historique de pré-cadrage — PR #207 mergée — D-VAL-11 candidate only — prochain cycle non lancé — Morris décide.*
diff --git a/projects/sfia-studio/03-pre-framing-decision-pack.md b/projects/sfia-studio/03-pre-framing-decision-pack.md
index 976b45e..e6194ef 100644
--- a/projects/sfia-studio/03-pre-framing-decision-pack.md
+++ b/projects/sfia-studio/03-pre-framing-decision-pack.md
@@ -10,19 +10,21 @@
 | **Typologie** | DOC — composante EVOL projet |
 | **Baseline** | SFIA v2.6 (Option C) |
 | **Statut pré-cadrage** | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
-| **Verdict** | `PRE-FRAMING PACK SYNCHRONIZED — DETAILED FRAMING VALIDATED — G7 AUTHORIZED FOR COMMIT PUSH DRAFT PR — MERGE FORBIDDEN` |
+| **Verdict** | `PRE-FRAMING PACK HISTORICAL — POST-MERGE SYNC IN README/04-07 — D-VAL-11 CANDIDATE ONLY` |
+
+> **Bandeau post-merge :** document **historique**. PR **#207** mergée (`ec21074`). État courant porté par **README et `04`–`07`**. D-VAL-10 reste historique (merge non autorisé **par cette décision**). **D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED.** Prochain cycle **non sélectionné**.
 
 ---
 
 ## 1. Objet
 
-Pack d’arbitrage **historique** du pré-cadrage, synchronisé après validation du cadrage détaillé.
+Pack d’arbitrage **historique** du pré-cadrage, synchronisé après validation du cadrage détaillé et aligné sur l’observation post-merge.
 
 Ce document :
-1. trace D-VAL-1 à D-VAL-10 ;
+1. trace D-VAL-1 à D-VAL-10 (**historiques**) ;
 2. enregistre le statut G1–G7 et DF-G1 ;
-3. renvoie au cadrage détaillé validé (`04`–`07`) ;
-4. rappelle que le **merge** et le **prochain cycle** restent des décisions Morris distinctes.
+3. renvoie au cadrage détaillé validé (`04`–`07`) et au README post-merge ;
+4. rappelle que **D-VAL-11** et le **prochain cycle** restent des décisions Morris distinctes.
 
 En cas d’écart sur l’état courant, **README et `04`–`07` priment**.
 
@@ -59,9 +61,15 @@ Principe POC validé. **N’autorise pas** le démarrage du POC. Périmètre pr
 
 D-VAL-8 a autorisé le cadrage détaillé. D-VAL-9 / DF-G1 valide le cadrage documenté dans `04`–`07`. **Ne lance pas** le prochain cycle.
 
-### Contenu D-VAL-10 (G7)
+### Contenu D-VAL-10 (G7) — historique
+
+Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé** par cette décision. Handoff review ≠ G7.
+
+### D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED
+
+Intégration PR #207 reconnue ; socle sur `main` ; cadrage documentaire clôturé (candidat) ; branche conservée ; prochain cycle non sélectionné.
 
-Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé.** Handoff review ≠ G7.
+> **Ne vaut pas** décision Morris. GO distinct requis.
 
 ---
 
@@ -76,9 +84,9 @@ Commit, push et création d’une draft PR du socle documentaire autorisés par
 | **G5** | **VALIDÉ SUR LE PRINCIPE** | POC de faisabilité requis ; détail ultérieur. |
 | **G6** | **VALIDÉ** | Cadrage détaillé autorisé (D-VAL-8). |
 | **DF-G1** | **VALIDÉ** | Cadrage détaillé validé (D-VAL-9). |
-| **G7** | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** | D-VAL-10 |
+| **G7** | **Historique (D-VAL-10)** | Commit / push / draft PR autorisés — merge **non** autorisé par D-VAL-10. **Observation :** PR #207 mergée. **Régularisation :** D-VAL-11 candidate only. |
 
-> Le push technique du Review Handoff Git **ne vaut pas** G7. **Merge interdit.**
+> Le push technique du Review Handoff Git **ne vaut pas** G7. G7 **≠** autorisation rétroactive de merge.
 
 ### Rappels d’effet
 
@@ -88,7 +96,8 @@ Commit, push et création d’une draft PR du socle documentaire autorisés par
 | G4 Option C | Modification de SFIA v2.6 |
 | G5 principe | Démarrage du POC |
 | G6 / DF-G1 | Conception / architecture / UX / prochain cycle |
-| G7 / D-VAL-10 | Merge ; force push ; prochain cycle |
+| G7 / D-VAL-10 | Merge (historique) ; force push ; prochain cycle |
+| D-VAL-11 candidate | Aucun effet tant que non validée |
 
 ---
 
@@ -128,7 +137,9 @@ Produit complet ; MVP ; industrialisation plateforme ; couverture des 15 cycles
 
 | Sujet | Statut |
 |-------|--------|
-| G7 commit / push / draft PR | **VALIDÉ** (D-VAL-10) — **merge interdit** |
+| G7 commit / push / draft PR (D-VAL-10) | **Historique — FAIT** |
+| Merge PR #207 | **Fait Git** (`ec21074`) — régularisation = D-VAL-11 candidate |
+| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
 | Sélection du prochain cycle | **Non sélectionné** |
 | Ordre conception / architecture / UX | Non pris |
 | Contenu exact POC / démarrage POC | Non pris |
@@ -161,6 +172,9 @@ Options A/B : non retenues pour la relation produit/méthode au démarrage.
 Produit cible complet
   → pré-cadrage (01–03) — historique synchronisé
   → cadrage détaillé (04–07) — VALIDÉ D-VAL-9 / DF-G1
+  → versionnement G7 — commit / push / draft PR (D-VAL-10)
+  → merge PR #207 — fait Git (ec21074) ; D-VAL-11 candidate
+  → synchronisation post-merge — cycle actuel
   → conception / architecture / UX — non lancés
   → POC de faisabilité
   → décision de poursuite ou d’ajustement
@@ -185,13 +199,15 @@ Produit cible complet
 
 ---
 
-## 10. Questions ouvertes (post-synchronisation)
+## 10. Questions ouvertes (post-merge)
 
-1. Passage ready-for-review / merge de la draft PR (décisions distinctes — **merge non autorisé ici**) ?
-2. Quel prochain cycle (conception bornée recommandée, non décidée) ?
-3. Ordre conception / architecture / UX ?
-4. Quelles questions G5 retenues dans le périmètre POC détaillé (ultérieur) ?
-5. POC jetable ou réutilisable (post-POC) ?
+1. Validation ou rejet de **D-VAL-11** (GO distinct) ?
+2. Clôture formelle du cadrage documentaire ?
+3. Sort de la branche `project/sfia-studio-pre-framing` ?
+4. Quel prochain cycle (conception bornée recommandée, non décidée) ?
+5. Ordre conception / architecture / UX ?
+6. Quelles questions G5 retenues dans le périmètre POC détaillé (ultérieur) ?
+7. POC jetable ou réutilisable (post-POC) ?
 
 ---
 
@@ -206,17 +222,20 @@ Produit cible complet
 | Principe POC | G5 | **Fait (principe)** |
 | Cadrage détaillé autorisé | G6 | **Fait** |
 | Cadrage détaillé validé | DF-G1 / D-VAL-9 | **Fait** |
-| Versionnement projet (commit / push / draft PR) | G7 / D-VAL-10 | **Fait (autorisé)** — merge interdit |
+| Versionnement projet (commit / push / draft PR) | G7 / D-VAL-10 | **Fait (historique)** |
+| Merge PR #207 | Observation Git | **Fait** — D-VAL-11 candidate |
+| Clôture formelle cadrage | D-VAL-11 | **Ouverte** |
 
 ---
 
 ## 12. Prochaine décision recommandée
 
-1. Revue ChatGPT de la draft PR + handoff.
-2. Morris : ready-for-review / merge (**merge non autorisé ici**).
-3. **Sélection du prochain cycle** (conception fonctionnelle bornée = recommandation, pas décision).
+1. Revue ChatGPT de la synchronisation documentaire + handoff.
+2. Morris : validation ou rejet de **D-VAL-11**.
+3. Sort de la branche projet (décision distincte).
+4. **Sélection du prochain cycle** (conception fonctionnelle bornée = recommandation, pas décision).
 
-G5 ≠ POC démarré. DF-G1 ≠ prochain cycle lancé. G7 ≠ merge. Handoff ≠ merge.
+G5 ≠ POC démarré. DF-G1 ≠ prochain cycle lancé. D-VAL-10 ≠ merge. Observation merge ≠ D-VAL-11. Handoff ≠ décision.
 
 ---
 
@@ -224,14 +243,15 @@ G5 ≠ POC démarré. DF-G1 ≠ prochain cycle lancé. G7 ≠ merge. Handoff ≠
 
 | Élément | Valeur |
 |---------|--------|
-| D-VAL-1 à D-VAL-10 | Tracées |
+| D-VAL-1 à D-VAL-10 | Tracées (historiques) |
+| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
 | DF-G1 | **VALIDÉ** |
-| G7 | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** |
+| G7 | Historique D-VAL-10 ; merge observé (PR #207) |
 | Prochain cycle | Non sélectionné |
 | Architecture / stack / POC / MVP | Non démarrés |
-| Synchronisation 01–03 | **Oui** |
+| Synchronisation 01–03 | **Oui** (bandeaux post-merge) |
 
-**Verdict :** `PRE-FRAMING PACK SYNCHRONIZED — DETAILED FRAMING VALIDATED — G7 AUTHORIZED FOR COMMIT PUSH DRAFT PR — MERGE FORBIDDEN`
+**Verdict :** `PRE-FRAMING PACK HISTORICAL — POST-MERGE SYNC IN README/04-07 — D-VAL-11 CANDIDATE ONLY`
 
 ---
 
@@ -256,4 +276,4 @@ G5 ≠ POC démarré. DF-G1 ≠ prochain cycle lancé. G7 ≠ merge. Handoff ≠
 
 ---
 
-*SFIA Studio — decision pack historique — synchronisé post D-VAL-10 — G7 autorisé commit/push/draft PR — merge interdit — Morris décide.*
+*SFIA Studio — decision pack historique — PR #207 mergée — D-VAL-11 candidate only — Morris décide.*
diff --git a/projects/sfia-studio/04-detailed-product-framing.md b/projects/sfia-studio/04-detailed-product-framing.md
index 4bbb2ea..57cbaa6 100644
--- a/projects/sfia-studio/04-detailed-product-framing.md
+++ b/projects/sfia-studio/04-detailed-product-framing.md
@@ -8,11 +8,12 @@
 | **Profil** | Critical |
 | **Typologie** | DOC — EVOL projet |
 | **Baseline** | SFIA v2.6 (Option C) |
-| **Statut** | `detailed-framing-in-progress` |
-| **Décisions applicables** | D-VAL-1 à D-VAL-10 |
+| **Statut** | `post-merge-documentary-synchronization-candidate-review` |
+| **Décisions applicables** | D-VAL-1 à D-VAL-10 (historiques) ; D-VAL-11 candidate only |
 | **Autorité** | Morris |
+| **Source de vérité** | Git `main` — PR #207 / `ec21074` |
 
-> Contrat produit détaillé. **Pas** de conception fonctionnelle, architecture, stack, backlog, UX ni POC.
+> Contrat produit détaillé **validé** (D-VAL-9). **Pas** de conception fonctionnelle, architecture, stack, backlog, UX ni POC.
 
 ---
 
@@ -20,7 +21,7 @@
 
 SFIA Studio est le projet officiel visant une **plateforme métier opérationnelle et durable** pour **qualifier, lancer, suivre et clôturer** les cycles SFIA, en orchestrant Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris, tout en **consommant** SFIA v2.6 (Option C).
 
-Le pré-cadrage (G1–G5, revue G3 conforme) et **G6** autorisent ce cadrage détaillé. Le **POC** reste une preuve de faisabilité ultérieure. Le **MVP** et l’**industrialisation de la plateforme** restent distincts et non figés ici. **G7** (D-VAL-10) : commit / push / draft PR **autorisés** — **merge interdit**.
+Le pré-cadrage (G1–G5, revue G3 conforme) et **G6** ont autorisé ce cadrage détaillé, **validé** par D-VAL-9 / DF-G1. Le **POC** reste une preuve de faisabilité ultérieure. Le **MVP** et l’**industrialisation de la plateforme** restent distincts et non figés ici. **G7** (D-VAL-10, historique) : commit / push / draft PR autorisés — merge **non** autorisé par cette décision. **Observation :** PR #207 mergée (`ec21074`). **D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED.**
 
 ---
 
@@ -203,7 +204,7 @@ Aucune valeur numérique inventée.
 3. Métriques de valeur à contractualiser au MVP ?
 4. Gouvernance multi-opérateur future ?
 5. Politique secrets / permissions produit ?
-6. Merge de la draft PR — décision distincte (**non autorisée ici**) ?
+6. Validation ou rejet de **D-VAL-11** (régularisation merge / clôture) ?
 7. Quel prochain cycle ?
 
 ---
@@ -233,4 +234,4 @@ Aucune valeur numérique inventée.
 
 ---
 
-*SFIA Studio — cadrage détaillé produit — G6 — Morris décide.*
+*SFIA Studio — cadrage détaillé produit validé — post-merge sync — D-VAL-11 candidate only — Morris décide.*
diff --git a/projects/sfia-studio/05-product-capabilities-and-use-cases.md b/projects/sfia-studio/05-product-capabilities-and-use-cases.md
index 06ccea5..2b33366 100644
--- a/projects/sfia-studio/05-product-capabilities-and-use-cases.md
+++ b/projects/sfia-studio/05-product-capabilities-and-use-cases.md
@@ -7,8 +7,8 @@
 | **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
 | **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (Option C) |
-| **Statut** | `detailed-framing-in-progress` |
-| **Décisions** | D-VAL-1 à D-VAL-10 |
+| **Statut** | `post-merge-documentary-synchronization-candidate-review` |
+| **Décisions** | D-VAL-1 à D-VAL-10 (historiques) ; D-VAL-11 candidate only |
 
 > Définit **ce que le produit doit permettre**. Pas de backlog, user stories détaillées, écrans, composants ni architecture.
 
diff --git a/projects/sfia-studio/06-scope-constraints-and-success-criteria.md b/projects/sfia-studio/06-scope-constraints-and-success-criteria.md
index 43df6f5..ce77983 100644
--- a/projects/sfia-studio/06-scope-constraints-and-success-criteria.md
+++ b/projects/sfia-studio/06-scope-constraints-and-success-criteria.md
@@ -7,8 +7,8 @@
 | **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
 | **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (Option C) |
-| **Statut** | `detailed-framing-in-progress` |
-| **Décisions** | D-VAL-1 à D-VAL-10 |
+| **Statut** | `post-merge-documentary-synchronization-candidate-review` |
+| **Décisions** | D-VAL-1 à D-VAL-10 (historiques) ; D-VAL-11 candidate only |
 
 > Borne le produit, les phases et les preuves. **Ne sélectionne pas** le MVP. **Ne fige pas** le POC détaillé. **Ne conçoit pas** l’industrialisation.
 
@@ -109,7 +109,8 @@ Pas de conception détaillée dans ce cycle.
 | Pas d’automatisation d’arbitrage | Garde-fou |
 | macOS = preuve POC non contractuelle | G3-R3 |
 | Runtime = candidat non contractuel | G3-R2 |
-| G7 commit / push / draft PR autorisé — merge interdit | Morris (D-VAL-10) |
+| G7 historique (D-VAL-10) : commit / push / draft PR — merge hors D-VAL-10 | Historique |
+| Merge PR #207 observé ; D-VAL-11 candidate only | Observation / candidate |
 
 ---
 
@@ -220,7 +221,7 @@ Arrêt / escalade Morris si :
 - modification silencieuse de méthode ;
 - élargissement au-delà du contrat de cycle ;
 - secrets exposés ;
-- force push / merge non autorisé ;
+- force push ; merge sans GO Morris explicite ;
 - présentation d’une candidate comme baseline.
 
 ---
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 1edccfa..088ba1b 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,18 +4,36 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
-| **Profil** | Critical |
+| **Cycle** | 1 — Cadrage (synchronisation documentaire post-merge) |
+| **Profil** | Standard (sous-cycle sync) / Critical (cadrage historique) |
 | **Baseline** | SFIA v2.6 (Option C) |
-| **Statut** | `detailed-framing-validated` |
-| **Décisions** | D-VAL-1 à D-VAL-10 |
+| **Statut** | `post-merge-documentary-synchronization-candidate-review` |
+| **Décisions** | D-VAL-1 à D-VAL-10 (historiques) ; D-VAL-11 **CANDIDATE ONLY** |
 | **Destinataire** | Morris |
+| **Source de vérité** | Git `main` — PR #207 / `ec21074` |
 
-> Trace la trajectoire et les décisions après validation du cadrage détaillé. Ne lance aucun cycle suivant. **Merge non autorisé.**
+> Trajectoire et décisions après merge vérifié. Ne lance aucun cycle produit suivant. **D-VAL-11 non validée.**
 
 ---
 
-## 1. Rappel D-VAL-1 à D-VAL-10
+## 0. État post-merge (observation)
+
+| Élément | Valeur |
+|---------|--------|
+| PR #207 | **MERGED** |
+| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
+| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
+| Intégration | Techniquement vérifiée (blobs identiques) |
+| D-VAL-10 | Historique — **n’autorisait pas** le merge |
+| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
+| Branche projet | Conservée ; intégrée à `main` ; suppression = décision distincte |
+| Prochain cycle | **Non sélectionné** |
+
+> Observation ≠ décision. Aucune validation rétroactive automatique du merge.
+
+---
+
+## 1. Rappel D-VAL-1 à D-VAL-10 (historiques)
 
 | # | Décision | Gate |
 |---|----------|------|
@@ -28,11 +46,20 @@
 | D-VAL-7 | Principe POC | G5 |
 | D-VAL-8 | Cadrage détaillé **autorisé** | G6 |
 | D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
-| D-VAL-10 | Commit, push et **draft PR** du socle documentaire **autorisés** ; **merge non autorisé** | G7 |
+| D-VAL-10 | Commit, push et **draft PR** **autorisés** ; **merge non autorisé** | G7 |
 
-### Contenu D-VAL-10 (G7)
+### Contenu D-VAL-10 (G7) — historique
 
-Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé.**
+Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé** par cette décision. Handoff ≠ G7.
+
+### D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED
+
+| Champ | Contenu candidat |
+|-------|------------------|
+| Objet | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche projet conservée jusqu’à décision distincte ; prochain cycle non sélectionné |
+| Statut | **CANDIDATE ONLY — NOT VALIDATED** |
+
+> Cette proposition **ne vaut pas** décision Morris. Elle nécessite un **GO distinct**.
 
 ---
 
@@ -42,23 +69,25 @@ Commit, push et création d’une draft PR du socle documentaire autorisés par
 |------|--------|
 | **G1** | **VALIDÉ** |
 | **G2** | **VALIDÉ** |
-| **G3** | **REVUE CONFORME** — base du cadrage ; **pas de D-VAL inventé** |
+| **G3** | **REVUE CONFORME** |
 | **G4** | **VALIDÉ — OPTION C** |
 | **G5** | **VALIDÉ SUR LE PRINCIPE** |
 | **G6** | **VALIDÉ** — cadrage détaillé autorisé |
 | **DF-G1** | **VALIDÉ** — cadrage détaillé validé (D-VAL-9) |
-| **G7** | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** (D-VAL-10) |
+| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé. **Observation :** PR #207 mergée (`ec21074`). **Régularisation :** D-VAL-11 candidate only. |
 
-Le push du handoff `sfia/review-handoff` **≠ merge**. G7 **≠** autorisation de merge.
+G7 **≠** autorisation rétroactive de merge.
 
 ---
 
-## 3. Trajectoire produit candidate
+## 3. Trajectoire produit (état factuel)
 
 ```text
-Pré-cadrage
-  → cadrage détaillé          ← VALIDÉ (D-VAL-9 / DF-G1)
-  → versionnement documentaire ← G7 autorisé (commit / push / draft PR) — merge interdit
+Pré-cadrage                         ← terminé historiquement
+  → cadrage détaillé                ← VALIDÉ (D-VAL-9 / DF-G1)
+  → versionnement documentaire      ← commit / push / draft PR (D-VAL-10 / G7)
+  → merge PR #207                   ← fait Git vérifié (ec21074)
+  → synchronisation post-merge      ← cycle actuel (candidate review)
   → conception fonctionnelle
   → architecture fonctionnelle
   → UX/UI initiale
@@ -78,7 +107,8 @@ Pré-cadrage
 - Trajectoire **non séquentielle rigide** ; activation par déclencheurs.
 - POC = **lot** multi-cycle, pas un cycle SFIA autonome.
 - MVP **distinct** du POC.
-- G7 = versionnement du socle (commit / push / draft PR) — **distinct** du merge et des phases futures.
+- G7 historique = versionnement (commit / push / draft PR) — **distinct** du merge.
+- Merge = observation Git ; régularisation = D-VAL-11 candidate.
 - Aucune stack / architecture validée.
 - Prochain cycle **non sélectionné**.
 
@@ -86,16 +116,22 @@ Pré-cadrage
 
 ## 4. Prochains cycles candidats (options de routage — non lancés)
 
+### 4.0 Synchronisation documentaire post-merge
+
+| Champ | Contenu |
+|-------|---------|
+| Statut | **Cycle actuel** — en revue Morris |
+| Objectif | Aligner docs sur l’état Git post-merge |
+| Ne lance pas | Conception / architecture / POC |
+
 ### 4.1 Conception fonctionnelle
 
 | Champ | Contenu |
 |-------|---------|
-| Déclencheur | Validation documentaire du cadrage (**faite**) + sélection Morris |
+| Déclencheur | Après sync documentaire + sélection Morris |
 | Objectif | Préciser comportements et règles métier des capacités |
-| Dépendances | Documents 04–07 validés |
+| Dépendances | Documents 04–07 ; sync post-merge |
 | Profil probable | Critical ou Standard — à requalifier |
-| Gates possibles | Périmètre conception ; non-objectifs |
-| Livrables attendus | Specs fonctionnelles bornées |
 | Pourquoi pas maintenant | Prochain cycle **non sélectionné** |
 
 ### 4.2 Architecture fonctionnelle
@@ -104,10 +140,6 @@ Pré-cadrage
 |-------|---------|
 | Déclencheur | Besoin de structurer capacités / frontières |
 | Objectif | Modules logiques ; séparation Studio / orchestration candidate |
-| Dépendances | Conception ou capacité map validée |
-| Profil probable | Critical |
-| Gates possibles | Frontières ; non-choix de stack |
-| Livrables attendus | Vue fonctionnelle — pas technique |
 | Pourquoi pas maintenant | Risque de figer trop tôt |
 
 ### 4.3 UX/UI
@@ -115,11 +147,6 @@ Pré-cadrage
 | Champ | Contenu |
 |-------|---------|
 | Déclencheur | Parcours opérateur à concevoir |
-| Objectif | Surfaces et parcours — accessibilité |
-| Dépendances | Capacités / cas d’usage |
-| Profil probable | Standard ou Critical |
-| Gates possibles | Contrat visuel ultérieur |
-| Livrables attendus | Maquettes / Figma (cycle dédié) |
 | Pourquoi pas maintenant | Figma désactivé ; cycle non sélectionné |
 
 ### 4.4 Architecture technique
@@ -127,40 +154,32 @@ Pré-cadrage
 | Champ | Contenu |
 |-------|---------|
 | Déclencheur | Après archi fonctionnelle suffisante |
-| Objectif | Options techniques candidates — non contractuelles |
-| Dépendances | Frontières fonctionnelles |
-| Profil probable | Critical |
-| Gates possibles | Non-figeage de stack |
-| Livrables attendus | Note d’options — pas de choix validé |
-| Pourquoi pas maintenant | Prématuré |
+| Pourquoi pas maintenant | Prématuré ; stack non décidée |
 
 ### 4.5 Sécurité (bornée)
 
 | Champ | Contenu |
 |-------|---------|
 | Déclencheur | Avant POC à permissions élevées |
-| Objectif | Familles de risques et contrôles minimaux |
-| Dépendances | Capacités C13 / NFR sécurité |
-| Profil probable | Critical |
-| Gates possibles | Go sécurité borné |
-| Livrables attendus | Note risques / contrôles — pas threat model complet |
 | Pourquoi pas maintenant | Identification déjà faite au cadrage |
 
 ---
 
-## 5. Décisions à préparer après cadrage
+## 5. Décisions à préparer
 
 | ID | Décision | Nature | Statut |
 |----|----------|--------|--------|
 | D-NEXT-1 | Validation documentaire du cadrage détaillé | Morris | **FAIT** (D-VAL-9 / DF-G1) |
 | D-NEXT-2 | Sélection du prochain cycle | Morris | **Non sélectionné** |
-| D-NEXT-3 | Autorisation versionnement **G7** | Morris | **FAIT** (D-VAL-10) — merge interdit |
+| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
 | D-NEXT-4 | Ordre conception / architecture / UX | Morris | Non pris |
 | D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
 | D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
 | D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
 | D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris |
-| D-NEXT-9 | Ready-for-review / merge de la draft PR | Morris | **Merge interdit** à ce stade |
+| D-NEXT-9 | Merge PR #207 | Observation Git | **Réalisé** (`ec21074`) — régularisation = D-VAL-11 candidate |
+| D-NEXT-10 | Validation / rejet de **D-VAL-11** | Morris | **Ouverte** |
+| D-NEXT-11 | Sort de la branche projet | Morris | Conservée ; décision distincte |
 
 ---
 
@@ -172,8 +191,7 @@ Pré-cadrage
 |--|--|
 | **Bénéfices** | Clarifie le « quoi » avant le « comment logique » |
 | **Risques** | Conception trop détaillée sans frontières |
-| **Dette** | Faible si bornée |
-| **Prérequis** | Cadrage validé |
+| **Prérequis** | Sync documentaire + cadrage validé |
 
 ### Option 2 — Architecture fonctionnelle légère puis conception détaillée
 
@@ -181,8 +199,6 @@ Pré-cadrage
 |--|--|
 | **Bénéfices** | Pose frontières Studio / orchestration tôt |
 | **Risques** | Archi prématurée si trop technique |
-| **Dette** | Moyenne si dérive vers stack |
-| **Prérequis** | Capacité map stable |
 
 ### Option 3 — Exploration UX bornée après capacité map
 
@@ -190,14 +206,12 @@ Pré-cadrage
 |--|--|
 | **Bénéfices** | Valide parcours opérateur tôt |
 | **Risques** | UI avant règles métier |
-| **Dette** | Refonte UX si capacités changent |
-| **Prérequis** | Cas d’usage prioritaires |
 
 ### Recommandation candidate (non décision)
 
-**Option 1** comme séquence par défaut : conception fonctionnelle bornée → architecture fonctionnelle → puis UX ou technique selon risques.
+**Synchronisation documentaire (en cours) puis Option 1** : conception fonctionnelle bornée → architecture fonctionnelle → puis UX ou technique selon risques.
 
-Morris reste libre de choisir Option 2 ou 3. **Aucun cycle n’est lancé.**
+Morris reste libre de choisir Option 2 ou 3. **Aucun cycle produit n’est lancé.**
 
 ---
 
@@ -207,22 +221,24 @@ Morris reste libre de choisir Option 2 ou 3. **Aucun cycle n’est lancé.**
 |--------------|-------|--------|
 | **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
 | **DF-G2** | Sélectionner le prochain cycle | **PROPOSÉ** |
-| **DF-G3** | Autoriser G7 (commit/push/draft PR projet) | **VALIDÉ** (D-VAL-10) — merge interdit |
+| **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique ; merge hors périmètre D-VAL-10 |
 | **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** |
 | **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** |
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G2 et DF-G4+ **ne sont pas** validés par ce document.
+Les gates DF-G2 et DF-G4+ **ne sont pas** validés.
 
 ---
 
 ## 8. Questions Morris
 
-1. Passez-vous la draft PR en ready-for-review ? (**merge = décision distincte, non autorisée ici**)
-2. Quel prochain cycle (conception / archi / UX / autre) ?
-3. Quel niveau d’architecture minimale avant POC ?
-4. Quelles priorités NFR avant le POC ?
+1. Validez-vous ou rejetez-vous **D-VAL-11** (GO distinct) ?
+2. Clôturez-vous formellement le cadrage documentaire ?
+3. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
+4. Quel prochain cycle (conception / archi / UX / autre) ?
+5. Quel niveau d’architecture minimale avant POC ?
+6. Quelles priorités NFR avant le POC ?
 
 ---
 
@@ -234,8 +250,9 @@ Les gates DF-G2 et DF-G4+ **ne sont pas** validés par ce document.
 | Alignement D-VAL-1…10 / G1–G7 / DF-G1 | **Oui** |
 | Pas d’archi/stack/MVP/POC démarrés | **Oui** |
 | DF-G1 validé | **Oui** (D-VAL-9) |
-| G7 commit / push / draft PR | **Autorisé** (D-VAL-10) |
-| Merge | **Interdit** |
+| G7 commit / push / draft PR | **Réalisés** (D-VAL-10) |
+| Merge PR #207 | **Fait Git** — régularisation D-VAL-11 candidate |
+| Clôture formelle cadrage | **Ouverte** (liée à D-VAL-11) |
 | Prochain cycle | **Non sélectionné** |
 
 ---
@@ -244,14 +261,14 @@ Les gates DF-G2 et DF-G4+ **ne sont pas** validés par ce document.
 
 | Élément | Valeur |
 |---------|--------|
-| Cadrage détaillé documenté | Oui |
-| DF-G1 | **VALIDÉ** |
-| G7 | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** |
+| Cadrage détaillé | **VALIDÉ** (D-VAL-9) |
+| Intégration `main` | **Oui** (PR #207 / `ec21074`) |
+| Synchronisation post-merge | **En revue** |
+| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
 | Ready for next cycle | **Non** — non sélectionné |
-| Ready for merge | **Non** |
 | Ready for POC | **Non** |
 
-**Verdict :** `SFIA STUDIO DETAILED FRAMING VALIDATED — G7 AUTHORIZED FOR COMMIT PUSH DRAFT PR — MERGE FORBIDDEN`
+**Verdict :** `SFIA STUDIO POST-MERGE DOCUMENTARY SYNCHRONIZATION READY FOR MORRIS REVIEW`
 
 ---
 
@@ -259,11 +276,11 @@ Les gates DF-G2 et DF-G4+ **ne sont pas** validés par ce document.
 
 | Document | Usage |
 |----------|-------|
-| [README.md](./README.md) | Gates / D-VAL |
+| [README.md](./README.md) | Gates / D-VAL / état post-merge |
 | [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
 | [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
 | [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
 
 ---
 
-*SFIA Studio — trajectoire et decision pack — D-VAL-10 / G7 autorisé — merge interdit — Morris décide.*
+*SFIA Studio — trajectoire post-merge — D-VAL-11 candidate only — prochain cycle non sélectionné — Morris décide.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 84bb81c..de5470c 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,15 +4,34 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `detailed-framing-in-progress` |
+| **Statut** | `post-merge-documentary-synchronization-candidate-review` |
 | **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — Cycle 1 cadrage détaillé produit (DOC, Critical) |
+| **Exécuteur** | Cursor — synchronisation documentaire post-merge (DOC, Standard) |
 | **Typologie cycle** | DOC — EVOL projet |
-| **Cycle projet** | 1 — Cadrage (sous-phase : **cadrage détaillé produit**) |
-| **Profil SFIA** | Critical |
-| **Branche** | `project/sfia-studio-pre-framing` |
+| **Cycle projet** | 1 — Cadrage (sous-cycle : **synchronisation documentaire post-merge**) |
+| **Profil SFIA** | Standard |
+| **Branche historique** | `project/sfia-studio-pre-framing` (conservée ; intégrée à `main`) |
 | **Chemin** | `projects/sfia-studio/` |
+| **Source de vérité** | Git **`main`** — PR **#207** mergée |
+
+---
+
+## 0. État post-merge (observation)
+
+| Élément | Valeur |
+|---------|--------|
+| PR | [#207](https://github.com/mcleland147/sfia-workspace/pull/207) — **MERGED** |
+| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
+| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
+| Socle sur `main` | Huit documents intégrés — intégrité vérifiée |
+| Cadrage détaillé | **Validé** (D-VAL-9 / DF-G1) |
+| Synchronisation post-merge | **Cycle actuel** — en revue Morris |
+| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
+| Prochain cycle | **Non sélectionné** |
+| Branche projet | Conservée ; suppression **non autorisée** ici |
+
+> **Observation ≠ décision.** Le merge est un **fait Git** vérifié. D-VAL-10 n’autorisait **pas** le merge. Aucune validation rétroactive automatique. D-VAL-11 candidate nécessite un **GO Morris distinct**.
 
 ---
 
@@ -41,7 +60,7 @@
 > SFIA Studio permet de **qualifier, lancer, suivre et clôturer** les cycles SFIA.
 > La plateforme est ensuite destinée à être **exploitée de manière industrialisée**, sécurisée, observable, maintenable et distribuable.
 
-Revue documentaire G3 : **conforme** (aucune réserve bloquante). Aucune décision Morris supplémentaire inventée. La vision corrigée constitue la **base autorisée du cadrage** via **D-VAL-8 / G6**.
+Revue documentaire G3 : **conforme** (aucune réserve bloquante). La vision corrigée constitue la **base autorisée du cadrage** via **D-VAL-8 / G6**. Cadrage détaillé **validé** via **D-VAL-9 / DF-G1**.
 
 ### Orchestration déterministe (candidat — non validé)
 
@@ -75,31 +94,34 @@ Produit indépendant **consommant** SFIA v2.6. Pas de v2.7 / v3.0. Évolution m
 
 ---
 
-## 2. Trajectoire macro
+## 2. Trajectoire macro (état factuel)
 
 ```text
-Pré-cadrage → cadrage détaillé (ce cycle)
-  → conception / architecture / UX (cycles futurs)
-  → POC de faisabilité → décision de poursuite
-  → MVP → delivery incrémental → industrialisation plateforme
+Pré-cadrage                    ← terminé historiquement
+  → cadrage détaillé           ← VALIDÉ (D-VAL-9 / DF-G1)
+  → versionnement (G7)         ← commit / push / draft PR réalisés (D-VAL-10)
+  → merge PR #207              ← fait Git vérifié (ec21074) — régularisation = D-VAL-11 candidate
+  → synchronisation post-merge ← cycle actuel (en revue)
+  → conception / architecture / UX  ← non sélectionnés
+  → POC → MVP → delivery → industrialisation plateforme
 ```
 
-Aucune stack / architecture validée. Aucun cycle suivant démarré.
+Aucune stack / architecture validée. Aucun cycle produit suivant démarré.
 
 ---
 
 ## 3. Navigation
 
-### Pré-cadrage
+### Pré-cadrage (historique)
 
 | Document | Rôle |
 |----------|------|
-| [README.md](./README.md) | Identité, décisions, navigation |
-| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité et vision |
-| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles |
-| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage |
+| [README.md](./README.md) | Identité, état post-merge, décisions, navigation |
+| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité et vision (historique) |
+| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles (historique) |
+| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage (historique) |
 
-### Cadrage détaillé (en cours)
+### Cadrage détaillé (validé — D-VAL-9)
 
 | Document | Rôle |
 |----------|------|
@@ -112,11 +134,11 @@ Aucune stack / architecture validée. Aucun cycle suivant démarré.
 
 ---
 
-## 4. Justification Critical
+## 4. Justification Critical (historique du cadrage)
 
-Projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation ; risques de sur-cadrage et seconde vérité.
+Le cadrage détaillé a été exécuté en profil Critical : projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation.
 
-N’autorise pas : architecture, stack, backlog, maquettes, POC, MVP, commit/push/PR projet.
+Le présent sous-cycle de synchronisation post-merge est en profil **Standard**.
 
 ---
 
@@ -124,7 +146,7 @@ N’autorise pas : architecture, stack, backlog, maquettes, POC, MVP, commit/pus
 
 | Principe | Portée |
 |----------|--------|
-| Git = source de vérité | Durable ; état opérationnel dérivé / reconstructible |
+| Git `main` = source de vérité | Socle `projects/sfia-studio/` intégré via PR #207 |
 | Morris décide | Gates structurants |
 | GPT / Cursor | Qualifient / exécutent — ne décident pas |
 | Option C | Consomme v2.6 (**validé**) |
@@ -136,24 +158,24 @@ N’autorise pas : architecture, stack, backlog, maquettes, POC, MVP, commit/pus
 
 ---
 
-## 6. Gates G1–G7
+## 6. Gates G1–G7 (historiques) et observation merge
 
 | Gate | Statut |
 |------|--------|
 | **G1** | **VALIDÉ — GO** (D-VAL-4) |
 | **G2** | **VALIDÉ — GO** (D-VAL-5) |
-| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 (pas de D-VAL inventé) |
+| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 |
 | **G4** | **VALIDÉ — OPTION C** (D-VAL-6) |
 | **G5** | **VALIDÉ SUR LE PRINCIPE** (D-VAL-7) |
 | **G6** | **VALIDÉ — GO** (D-VAL-8) — cadrage détaillé autorisé |
 | **DF-G1** | **VALIDÉ** (D-VAL-9) — cadrage détaillé validé |
-| **G7** | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** (D-VAL-10) |
+| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé par cette décision. **Observation :** PR #207 **mergée**. **Régularisation :** D-VAL-11 **CANDIDATE ONLY — NOT VALIDATED**. |
 
-**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. **Merge non autorisé.**
+**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. G7 **≠** autorisation rétroactive de merge.
 
 ---
 
-## 7. Décisions D-VAL-1 à D-VAL-10
+## 7. Décisions D-VAL-1 à D-VAL-10 (historiques)
 
 | # | Décision | Gate |
 |---|----------|------|
@@ -166,13 +188,24 @@ N’autorise pas : architecture, stack, backlog, maquettes, POC, MVP, commit/pus
 | D-VAL-7 | Principe POC | G5 |
 | D-VAL-8 | Passage au cadrage détaillé **autorisé** | G6 |
 | D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
-| D-VAL-10 | Commit, push et **draft PR** du socle documentaire **autorisés** ; **merge non autorisé** | G7 |
+| D-VAL-10 | Commit, push et **draft PR** autorisés ; **merge non autorisé** (historique) | G7 |
 
-### En attente / non pris
+### D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED
+
+| Champ | Contenu candidat |
+|-------|------------------|
+| Objet | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche projet conservée jusqu’à décision distincte ; prochain cycle non sélectionné |
+| Statut | **CANDIDATE ONLY — NOT VALIDATED** |
+
+> Cette proposition **ne vaut pas** décision Morris. Elle nécessite un **GO distinct**.
+
+### Décisions ouvertes
 
 | Décision | Statut |
 |----------|--------|
-| Merge de la PR | **INTERDIT** à ce stade |
+| Validation ou rejet de D-VAL-11 | **Ouverte** |
+| Clôture formelle du cadrage documentaire | **Ouverte** (liée à D-VAL-11) |
+| Sort de la branche `project/sfia-studio-pre-framing` | Conservée ; décision distincte |
 | Prochain cycle (conception / archi / UX…) | **Non sélectionné** |
 | Stack / architecture / contenu POC / MVP | Non pris |
 
@@ -180,11 +213,14 @@ N’autorise pas : architecture, stack, backlog, maquettes, POC, MVP, commit/pus
 
 ## 8. Prochaine décision
 
-1. Revue ChatGPT de la draft PR + handoff.
-2. Morris : passage ready-for-review / merge (décisions distinctes — **merge non autorisé ici**).
-3. Sélection du prochain cycle (non lancée).
+1. Revue ChatGPT de la synchronisation documentaire + handoff.
+2. Morris : validation ou rejet de **D-VAL-11** (GO distinct).
+3. Sort de la branche projet (conserver / supprimer en cycle séparé).
+4. Sélection du prochain cycle (non lancée).
+
+**Recommandation candidate (≠ décision) :** synchronisation documentaire (ce cycle) puis conception fonctionnelle bornée.
 
-**Verdict documentaire :** `SFIA STUDIO DOCUMENTATION READY FOR COMMIT PUSH AND DRAFT PR — MERGE FORBIDDEN`
+**Verdict documentaire :** `SFIA STUDIO POST-MERGE DOCUMENTARY SYNCHRONIZATION READY FOR MORRIS REVIEW`
 
 ---
 
@@ -194,9 +230,10 @@ N’autorise pas : architecture, stack, backlog, maquettes, POC, MVP, commit/pus
 |---------|--------|
 | Méthode | SFIA v2.6 sur `main` |
 | Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
-| Documents projet | `projects/sfia-studio/` (locaux) |
-| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné |
+| Documents projet | `projects/sfia-studio/` sur **`main`** (PR #207 / `ec21074`) |
+| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
+| Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
 ---
 
-*SFIA Studio — cadrage détaillé validé — G7 commit/push/draft PR autorisés — merge interdit — Option C — Morris décide.*
+*SFIA Studio — socle intégré sur main (PR #207) — synchronisation post-merge en revue — D-VAL-11 candidate only — Option C — Morris décide.*
```

---

## 9. Contenu complet post-édition des huit fichiers

### projects/sfia-studio/README.md

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `post-merge-documentary-synchronization-candidate-review` |
| **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — synchronisation documentaire post-merge (DOC, Standard) |
| **Typologie cycle** | DOC — EVOL projet |
| **Cycle projet** | 1 — Cadrage (sous-cycle : **synchronisation documentaire post-merge**) |
| **Profil SFIA** | Standard |
| **Branche historique** | `project/sfia-studio-pre-framing` (conservée ; intégrée à `main`) |
| **Chemin** | `projects/sfia-studio/` |
| **Source de vérité** | Git **`main`** — PR **#207** mergée |

---

## 0. État post-merge (observation)

| Élément | Valeur |
|---------|--------|
| PR | [#207](https://github.com/mcleland147/sfia-workspace/pull/207) — **MERGED** |
| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
| Socle sur `main` | Huit documents intégrés — intégrité vérifiée |
| Cadrage détaillé | **Validé** (D-VAL-9 / DF-G1) |
| Synchronisation post-merge | **Cycle actuel** — en revue Morris |
| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
| Prochain cycle | **Non sélectionné** |
| Branche projet | Conservée ; suppression **non autorisée** ici |

> **Observation ≠ décision.** Le merge est un **fait Git** vérifié. D-VAL-10 n’autorisait **pas** le merge. Aucune validation rétroactive automatique. D-VAL-11 candidate nécessite un **GO Morris distinct**.

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
  → merge PR #207              ← fait Git vérifié (ec21074) — régularisation = D-VAL-11 candidate
  → synchronisation post-merge ← cycle actuel (en revue)
  → conception / architecture / UX  ← non sélectionnés
  → POC → MVP → delivery → industrialisation plateforme
```

Aucune stack / architecture validée. Aucun cycle produit suivant démarré.

---

## 3. Navigation

### Pré-cadrage (historique)

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, état post-merge, décisions, navigation |
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

---

## 4. Justification Critical (historique du cadrage)

Le cadrage détaillé a été exécuté en profil Critical : projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation.

Le présent sous-cycle de synchronisation post-merge est en profil **Standard**.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| Git `main` = source de vérité | Socle `projects/sfia-studio/` intégré via PR #207 |
| Morris décide | Gates structurants |
| GPT / Cursor | Qualifient / exécutent — ne décident pas |
| Option C | Consomme v2.6 (**validé**) |
| POC ≠ valeur | Faisabilité ≠ MVP |
| Couverture progressive | 15 cycles = cible long terme |
| Runtime candidat | Non figé |
| macOS = preuve | Non plateforme produit |
| Observation ≠ règle | Pas de promotion méthode |

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
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé par cette décision. **Observation :** PR #207 **mergée**. **Régularisation :** D-VAL-11 **CANDIDATE ONLY — NOT VALIDATED**. |

**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. G7 **≠** autorisation rétroactive de merge.

---

## 7. Décisions D-VAL-1 à D-VAL-10 (historiques)

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

### D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED

| Champ | Contenu candidat |
|-------|------------------|
| Objet | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche projet conservée jusqu’à décision distincte ; prochain cycle non sélectionné |
| Statut | **CANDIDATE ONLY — NOT VALIDATED** |

> Cette proposition **ne vaut pas** décision Morris. Elle nécessite un **GO distinct**.

### Décisions ouvertes

| Décision | Statut |
|----------|--------|
| Validation ou rejet de D-VAL-11 | **Ouverte** |
| Clôture formelle du cadrage documentaire | **Ouverte** (liée à D-VAL-11) |
| Sort de la branche `project/sfia-studio-pre-framing` | Conservée ; décision distincte |
| Prochain cycle (conception / archi / UX…) | **Non sélectionné** |
| Stack / architecture / contenu POC / MVP | Non pris |

---

## 8. Prochaine décision

1. Revue ChatGPT de la synchronisation documentaire + handoff.
2. Morris : validation ou rejet de **D-VAL-11** (GO distinct).
3. Sort de la branche projet (conserver / supprimer en cycle séparé).
4. Sélection du prochain cycle (non lancée).

**Recommandation candidate (≠ décision) :** synchronisation documentaire (ce cycle) puis conception fonctionnelle bornée.

**Verdict documentaire :** `SFIA STUDIO POST-MERGE DOCUMENTARY SYNCHRONIZATION READY FOR MORRIS REVIEW`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 sur `main` |
| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
| Documents projet | `projects/sfia-studio/` sur **`main`** (PR #207 / `ec21074`) |
| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
| Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |

---

*SFIA Studio — socle intégré sur main (PR #207) — synchronisation post-merge en revue — D-VAL-11 candidate only — Option C — Morris décide.*
```

### projects/sfia-studio/01-opportunity-and-vision.md

```markdown
# SFIA Studio — Opportunité et vision

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `01-opportunity-and-vision.md` |
| **Cycle** | 1 — Cadrage (document **historique** de pré-cadrage) |
| **Profil** | Critical (historique) |
| **Typologie** | DOC — composante EVOL projet |
| **Baseline** | SFIA v2.6 (consommée — Option C) |
| **Statut** | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
| **Autorité** | Morris |

> **Note historique :** Ce document a porté l’opportunité et la vision lors du pré-cadrage. Le **cadrage détaillé validé** (D-VAL-9 / DF-G1) et l’**état courant post-merge** sont portés par **README et `04`–`07`**. En cas d’écart, **README prime**.

### Bandeau post-merge

| Élément | Valeur |
|---------|--------|
| Nature | Document **historique** de pré-cadrage |
| PR #207 | **MERGED** — merge `ec21074…` ; socle sur `main` |
| D-VAL-10 (historique) | Commit / push / draft PR autorisés — merge **non** autorisé par cette décision |
| Observation | Merge réalisé et vérifié techniquement |
| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
| Prochain cycle | **Non sélectionné** |

### Statut des décisions (rappel)

| Élément | Statut |
|---------|--------|
| D-VAL-1 à D-VAL-9 | **Validés** (historiques) |
| D-VAL-10 / G7 | **Historique** — commit / push / draft PR autorisés ; merge non autorisé **par D-VAL-10** |
| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
| G1 / G2 / G4 / G6 / DF-G1 | **VALIDÉ** |
| G3 | **REVUE CONFORME** |
| G5 | **VALIDÉ SUR LE PRINCIPE** |
| Prochain cycle | **Non sélectionné** |

> Handoff review ≠ décision Morris. Observation du merge ≠ validation de D-VAL-11.

---

## 1. Résumé exécutif

Boucle actuelle (observation) :

**Morris → ChatGPT → template Git → prompt Cursor → exécution → review pack → analyse ChatGPT → décision Morris.**

Opérationnelle sous SFIA v2.6, mais fragmentée.

**SFIA Studio** (projet officiel) construit une **plateforme métier opérationnelle et durable** pour piloter les cycles et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris — en **consommant** SFIA v2.6 (Option C).

Le pré-cadrage (ce document + `02`/`03`) est **clôturé et synchronisé**. Le cadrage détaillé validé vit dans `04`–`07`.

---

## 2. Définitions

| Terme | Définition |
|-------|------------|
| **Produit cible** | Plateforme métier complète — couverture **progressive** des cycles SFIA |
| **POC** | Preuve de faisabilité technique limitée |
| **MVP** | Première version réellement utilisable (valeur métier) — non défini ici |
| **Industrialisation** | Exploitation industrialisée de la **plateforme** — pas des cycles |

---

## 3. Contexte

| Élément | Observation / décision |
|---------|------------------------|
| Baseline | SFIA v2.6 — **consommée**, non modifiée (Option C) |
| Source de vérité | Git |
| Autorité | Morris (L0) |
| Architecture historique Studio/Runtime/Core | Inspiration — **non validée** |

---

## 4. Problème (G2 validé)

Absence d’une plateforme métier permettant de piloter durablement les cycles SFIA (qualification → exécution contrôlée → revue → décision) tout en préservant Git, Morris, GPT, Cursor et un mécanisme d’orchestration déterministe dans leurs rôles.

---

## 5. Irritants (hypothèses)

Copier/coller GPT↔Cursor ; multiplicité d’artefacts ; dépendance à la discipline opérateur ; visibilité Git partielle ; absence d’UI métier ; tentation d’automatiser trop tôt.

---

## 6. Opportunité produit (G2 validé)

| Dimension | Contenu |
|-----------|---------|
| Produit | Plateforme métier complète de pilotage des cycles |
| Orchestration | Git + GPT + Cursor + orchestration déterministe sous gates |
| Traçabilité | Ancrée Git |
| Relation méthode | Consomme v2.6 — Option C |
| Progressivité | Produit → archi → POC → MVP → industrialisation plateforme |

---

## 7. Opportunité méthode

Épreuve terrain sur conformité aux garde-fous v2.6. **Non-objectif :** créer v2.7 ou relancer v3.0. Toute évolution méthode = CAPA/EVOL séparé + GO Morris.

---

## 8. Vision produit (corrigée G3-R1 à G3-R5)

### Formulation cible (G3-R1)

> **SFIA Studio permet de qualifier, lancer, suivre et clôturer les cycles SFIA.**
> **La plateforme est ensuite destinée à être exploitée de manière industrialisée, sécurisée, observable, maintenable et distribuable.**

Éviter toute formulation du type « industrialiser les cycles SFIA ».

### Orchestration déterministe (G3-R2)

> Un mécanisme d’orchestration déterministe, éventuellement matérialisé par un composant nommé SFIA Runtime, devra appliquer les contrats, permissions, gates et stop conditions.
>
> Sa séparation avec l’interface SFIA Studio reste à qualifier pendant l’architecture fonctionnelle et technique.

| Élément | Statut |
|---------|--------|
| Besoin fonctionnel | **Candidat** |
| Architecture | **Non validée** |
| Nom « SFIA Runtime » | **Non contractuel** |

### Support macOS (G3-R3)

> Le POC devra pouvoir être exécuté dans l’environnement local de Morris sur macOS.
> Cette contrainte de preuve ne présume ni du support technique ni du mode de distribution du produit cible.

Plateforme produit définitive (native, web locale, desktop packagée, cloud, hybride) : **non décidée**.

### Valeur produit (G3-R4)

Le POC valide la **faisabilité technique**.
Le MVP et les expérimentations produit valideront la **valeur métier**.

**Dimensions candidates de mesure** (à confirmer au cadrage détaillé — non contractualisées) :

- réduction du nombre de manipulations entre GPT, Cursor et Git ;
- réduction des erreurs de routage et de contrat ;
- diminution du temps de préparation et de clôture d’un cycle ;
- amélioration de la visibilité sur les gates ;
- amélioration de la traçabilité des décisions ;
- diminution de la charge cognitive opérateur ;
- conformité accrue aux garde-fous SFIA ;
- reproductibilité des cycles.

### Couverture des 15 cycles (G3-R5)

> La cible produit prévoit une couverture progressive des quinze cycles SFIA.
> Cette cible n’implique pas leur disponibilité dans le POC ou le MVP.
> Chaque incrément couvre uniquement les cycles nécessaires à la valeur et aux risques traités.

Le sous-ensemble MVP reste à définir au cadrage et au backlog. Aucun cycle n’est automatiquement activé.

### Orientations candidates

| Aspect | Orientation |
|--------|-------------|
| Nature | Plateforme métier opérationnelle et durable |
| Rôle | Cockpit de cycle — pas seconde source de vérité |
| Couverture | Progressive — pas obligation immédiate des 15 |
| Décision | Morris |
| Automatisation | Progressive ; L3/L4 hors pré-cadrage |
| Orchestration | Mécanisme déterministe candidat |

### Explicitement non décidé

Stack ; architecture ; contenu exact POC ; MVP ; mode de distribution produit ; multi-user / cloud / auth détaillés.

---

## 9. Trajectoire

```text
Pré-cadrage
  → cadrage produit complet
  → conception et architecture cible
  → POC de faisabilité
  → décision de poursuite ou d’ajustement
  → MVP utilisable
  → delivery incrémental
  → industrialisation de la plateforme
```

POC **dérivé** de la vision et d’une architecture cible suffisamment cadrée — pas l’inverse.

---

## 10. Catégories

| Catégorie | Contenu |
|-----------|---------|
| Produit cible | Plateforme complète ; couverture progressive |
| POC | Faisabilité technique (Git, GPT, Cursor, orchestration déterministe, règles, gates) |
| MVP | Première valeur métier utilisable — non défini |
| Industrialisation | Exploitation durable de la plateforme |

---

## 11. Parties prenantes

| Acteur | Rôle |
|--------|------|
| Morris | Autorité L0 — utilisateur primaire |
| GPT | Qualification / analyse / revue |
| Cursor | Exécuteur repository |
| Orchestration déterministe (Runtime candidat) | Contrats, permissions, gates — **non validé** |
| Git / GitHub | Source de vérité / revue |

---

## 12. Proposition de valeur

Pilotage métier durable ; moins de friction ; meilleure conformité et traçabilité. Valeur mesurée via critères candidats §8 (G3-R4) au MVP — pas via le seul POC.

---

## 13. Principes fondateurs

1. Git = source de vérité durable.
2. Morris décide les gates.
3. GPT prépare ; Cursor exécute.
4. Produit complet ; POC = étape de faisabilité.
5. POC dérive de l’architecture cible.
6. POC ≠ MVP ≠ industrialisation plateforme.
7. Faisabilité technique ≠ valeur métier.
8. Couverture progressive des 15 cycles.
9. Orchestration déterministe = besoin candidat, architecture non figée.
10. macOS = contrainte de preuve POC.
11. Option C : consomme v2.6, ne la modifie pas.
12. Observation ≠ règle méthode.

---

## 14. Périmètre produit global candidat

Pilotage progressif des cycles ; orchestration sous gates ; visibilité Git ; historique décisions ; garde-fous ; trajectoire MVP puis industrialisation plateforme ; automatisation progressive future.

Le POC local macOS n’est **pas** le périmètre produit.

---

## 15. POC de faisabilité (principe G5 validé)

### Rôle

Démontrer la faisabilité d’implémentation : Git, GPT, Cursor, mécanisme d’orchestration déterministe, règles SFIA, gates Morris — depuis une interface métier.

### Questions techniques cibles (périmètre détaillé ultérieur)

| # | Question |
|---|----------|
| 1 | L’interface peut-elle lire l’état Git réel ? |
| 2 | Les instructions SFIA peuvent-elles être composées et injectées à GPT ? |
| 3 | GPT peut-il produire une qualification et un contrat structurés ? |
| 4 | Cursor peut-il être invoqué de manière contrôlée ? |
| 5 | Le mécanisme d’orchestration déterministe peut-il imposer gates et stop conditions ? |
| 6 | Résultats, diffs et review packs récupérables et analysables ? |
| 7 | Exécution possible dans l’environnement local Morris sur macOS ? |

G5 validé **n’autorise pas** le démarrage du POC. Périmètre précis après cadrage et architecture suffisante.

### Le POC ne valide pas

Produit complet ; MVP ; industrialisation ; couverture des 15 cycles ; stack ; architecture définitive ; **valeur métier complète**.

---

## 16. Hors périmètre (ce cycle)

Cadrage détaillé ; architecture ; stack ; UX/Figma ; backlog ; code ; démarrage POC/MVP ; modification v2.6 ; commit/push/PR projet.

---

## 17. Hypothèses

| ID | Hypothèse |
|----|----------|
| H1 | Friction principale = orchestration multi-outils |
| H2 | POC lève les risques techniques critiques — **pas** la valeur produit seule |
| H3 | GPT / Cursor restent moteurs d’analyse / exécution à moyen terme |
| H4 | Morris décideur au moins jusqu’au MVP |
| H5 | UI peut renforcer les gates sans les contourner |
| H6 | Option C (**validée**) reste appropriée |
| H7 | POC dérivé d’architecture cible suffisante |
| H8 | Orchestration déterministe utile ; forme/nom non figés |

---

## 18. Contraintes

Baseline v2.6 non modifiable ici ; Option C ; pas de seconde vérité ; pas d’auto-décision ; G6 et DF-G1 **réalisés** ; G7 historique (D-VAL-10) = commit/push/draft PR ; merge = fait Git (PR #207) — régularisation D-VAL-11 candidate ; Campus360 hors périmètre.

---

## 19. Risques

Seconde vérité ; contournement gates ; Runtime figé trop tôt ; macOS pris pour plateforme produit ; confusion POC/valeur ; couverture 15 cycles prise pour obligation MVP ; architecture historique prise pour validée.

---

## 20. Critères de crédibilité G3

1. Pas de formulation « industrialiser les cycles ».
2. Runtime = candidat non figé.
3. macOS = contrainte de preuve.
4. Critères candidats de valeur présents ; POC ≠ valeur.
5. Couverture 15 cycles = progressive.
6. G1/G2/G4/G5 principe / G3 revue conforme / G6 / DF-G1 / G7 historique correctement marqués ; merge observé (PR #207) ; D-VAL-11 candidate only ; prochain cycle non sélectionné.

---

## 21. Relation SFIA v2.6

| Option | Statut |
|--------|--------|
| A — Extension compatible | Non retenue |
| B — Évolution méthode | Non retenue (cycles séparés possibles plus tard) |
| **C — Produit indépendant consommant v2.6** | **VALIDÉE (D-VAL-6 / G4)** |

---

## 22. Liens

### Pré-cadrage (historique)

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité / gates (prime sur l’état courant) |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture progressive |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités / cas d’usage |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres / critères |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire / décisions |

---

*SFIA Studio — document historique de pré-cadrage — PR #207 mergée — D-VAL-11 candidate only — Morris décide.*
```

### projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md

```markdown
# SFIA Studio — Hypothèse de couverture des cycles SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `02-sfia-cycle-coverage-hypothesis.md` |
| **Cycle** | 1 — Cadrage (document **historique** de pré-cadrage) |
| **Profil** | Critical (historique) |
| **Baseline** | SFIA v2.6 (Option C — consommée) |
| **Statut** | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
| **Référence** | Template v2.6 §4.1 ; routing guide §4–§6 |

> **Règle (G3-R5) :** les 15 cycles représentent la **cible de couverture progressive** du produit. Aucun incrément n’est obligé de les couvrir tous. Le MVP pourra couvrir un **sous-ensemble prioritaire** — **non sélectionné ici**. Aucun cycle n’est automatiquement activé. Profil requalifié à chaque cycle.
>
> **Bandeau post-merge :** document **historique**. PR **#207** mergée (`ec21074`). État courant porté par **README et `04`–`07`**. D-VAL-10 = historique (commit/push/draft PR ; merge non autorisé par cette décision). Merge = observation Git. **D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED.** Prochain cycle **non sélectionné**.
>
> La sélection du prochain cycle reste une décision Morris distincte. Aucun cycle de conception, architecture ou UX n’est lancé ici. En cas d’écart, README et `04`–`07` priment.

---

## 1. Légende

| Caractère | Signification |
|-----------|---------------|
| **Quasi systématique** | Attendue sur trajectoire produit complète |
| **Activable** | Fortement probable si engagé |
| **Conditionnel** | Dépend d’un événement / arbitrage |
| **Événementiel** | INC / RUN / EVOL |

---

## 2. Quatre couvertures distinctes

| Couverture | Objet | Règle |
|------------|-------|-------|
| **Produit cible** | Progressive des 15 cycles | Cible long terme — pas obligation immédiate |
| **POC** | Lot technique mobilisant plusieurs cycles | **Jamais** un cycle autonome ; faisabilité seulement |
| **MVP** | Sous-ensemble prioritaire | À définir au cadrage / backlog — **pas ici** |
| **Industrialisation** | Cycles renforcés (sécurité, release, RUN…) | Exploitation durable de la **plateforme** |

Le POC est un **lot** pouvant mobiliser architecture technique, intégration/DevOps, sécurité, QA — **pas** un 16ᵉ cycle.

---

## 3. Familles de cycles

| Famille | Exemples |
|---------|----------|
| Conception produit cible | 1–4, 6 |
| POC de faisabilité (lot) | Parties bornées de 6, 7, 8, 9, 10 |
| Construction MVP | 5, 8, puis 9–12 selon besoin |
| Industrialisation plateforme | 7, 10–12 renforcés |
| Évolution méthode | Hors produit — CAPA/EVOL + GO Morris |

---

## 4. Synthèse des 15 cycles (hypothèse produit)

| # | Cycle | Caractère | Note |
|---|-------|-----------|------|
| 1 | Cadrage | Quasi systématique | Pré-cadrage **clôturé** ; cadrage détaillé **validé** (D-VAL-9) — voir `04`–`07` |
| 2 | Conception fonctionnelle | Quasi systématique | Plateforme métier |
| 3 | Architecture fonctionnelle | Activable | Orchestration déterministe à cadrer — non validée |
| 4 | UX/UI | Activable | Figma désactivé ici |
| 5 | Backlog / user stories | Quasi systématique | Après POC / poursuite — sous-ensemble MVP |
| 6 | Architecture technique | Activable | Cible d’abord ; POC en dérive |
| 7 | Intégration / DevOps | Activable | Faisabilité puis industrialisation |
| 8 | Delivery | Quasi systématique | Lot POC borné puis incréments MVP |
| 9 | QA / validation | Quasi systématique | QA faisabilité **et** QA produit |
| 10 | Sécurité / RSSI | Activable | Critique produit ; contrôles en POC |
| 11 | Déploiement / release | Activable | Surtout industrialisation plateforme |
| 12 | Observabilité / RUN | Activable | Industrialisation ; tests limités en POC |
| 13 | PR readiness | Quasi systématique | Si versionnement |
| 14 | Post-merge | Quasi systématique | Si merge |
| 15 | Capitalisation / REX | Quasi systématique | Observations ≠ promotion méthode |

---

## 5. Profils probables (non figés)

Pré-cadrage / correction G3 : Critical. Autres situations : à requalifier. Aucun profil futur figé.

---

## 6. Déclencheurs (hypothèses)

| Phase | Déclencheur | Cycles probables |
|-------|-------------|------------------|
| Cadrage produit | GO G6 **réalisé** ; DF-G1 **validé** | 1 suite (cadrage détaillé livré) |
| Conception / archi | Clôture cadrage | 2, 3, 4, 6 |
| POC (lot) | GO dédié post-archi | 6/7/8/9/10 bornés |
| MVP | GO post-POC | Sous-ensemble via 5, 8… |
| Industrialisation plateforme | Maturité MVP | 7, 10–12 |
| Capitalisation | Leçon durable | 15 |

---

## 7. Blocs transverses

FinOps, RGPD, accessibilité, performance, sécurité, DevOps, observabilité, capitalisation : identifiés. UX/UI+Figma **désactivé**. GreenOps conditionnel.

---

## 8. Projet vs méthode

| Famille | Règle |
|---------|-------|
| Cycles projet SFIA Studio | Sous `projects/sfia-studio/` (+ code futur) |
| Cycles méthode | `method/`, `prompts/` — GO Morris + cycle dédié (Option C) |

Interdit ici : modification v2.6, v2.7, v3.0.

---

## 9. Trajectoire macro (hypothèse)

```text
Pré-cadrage                          ← historique (01–03)
  → cadrage détaillé produit         ← VALIDÉ (D-VAL-9 / DF-G1) — docs 04–07
  → conception fonctionnelle         ← non lancé (recommandation, non décision)
  → architecture fonctionnelle
  → UX/UI initiale si nécessaire
  → architecture technique candidate
  → POC de faisabilité (lot multi-cycles)
  → QA de faisabilité
  → décision Morris de poursuite
  → backlog / MVP (sous-ensemble)
  → delivery incrémental
  → sécurité / QA / release / RUN readiness
  → industrialisation de la plateforme
  → capitalisation / REX
```

Cadrage détaillé **réalisé**. Ne lance aucun cycle suivant. Pas de backlog. Pas d’architecture validée. Pas de sélection du sous-ensemble MVP. Prochain cycle = décision Morris distincte.

---

## 10. Ce que ce document n’est pas

Activation auto ; architecture déguisée ; backlog ; sélection MVP ; validation POC ; centrage projet sur POC ; obligation immédiate des 15 cycles.

---

## 11. Liens

### Pré-cadrage (historique)

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Décisions / gates (prime) |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision historique |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — document historique de pré-cadrage — PR #207 mergée — D-VAL-11 candidate only — prochain cycle non lancé — Morris décide.*
```

### projects/sfia-studio/03-pre-framing-decision-pack.md

```markdown
# SFIA Studio — Decision pack de pré-cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `03-pre-framing-decision-pack.md` |
| **Destinataire** | Morris (L0) |
| **Cycle** | 1 — Cadrage (document **historique** de pré-cadrage) |
| **Profil** | Critical (historique) |
| **Typologie** | DOC — composante EVOL projet |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut pré-cadrage** | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
| **Verdict** | `PRE-FRAMING PACK HISTORICAL — POST-MERGE SYNC IN README/04-07 — D-VAL-11 CANDIDATE ONLY` |

> **Bandeau post-merge :** document **historique**. PR **#207** mergée (`ec21074`). État courant porté par **README et `04`–`07`**. D-VAL-10 reste historique (merge non autorisé **par cette décision**). **D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED.** Prochain cycle **non sélectionné**.

---

## 1. Objet

Pack d’arbitrage **historique** du pré-cadrage, synchronisé après validation du cadrage détaillé et aligné sur l’observation post-merge.

Ce document :
1. trace D-VAL-1 à D-VAL-10 (**historiques**) ;
2. enregistre le statut G1–G7 et DF-G1 ;
3. renvoie au cadrage détaillé validé (`04`–`07`) et au README post-merge ;
4. rappelle que **D-VAL-11** et le **prochain cycle** restent des décisions Morris distinctes.

En cas d’écart sur l’état courant, **README et `04`–`07` priment**.

---

## 2. Décisions validées (D-VAL-1 à D-VAL-9)

| # | Décision | Gate | Statut |
|---|----------|------|--------|
| D-VAL-1 | Initier le pré-cadrage SFIA Studio | — | **VALIDÉE** |
| D-VAL-2 | Créer localement le socle documentaire | — | **VALIDÉE** |
| D-VAL-3 | Produit complet ; POC = faisabilité technique intermédiaire uniquement | Trajectoire | **VALIDÉE** |
| D-VAL-4 | SFIA Studio confirmé comme **projet officiel** | **G1** | **VALIDÉE** |
| D-VAL-5 | Problème et opportunité **validés** | **G2** | **VALIDÉE** |
| D-VAL-6 | **Option C** — produit indépendant consommant SFIA v2.6 | **G4** | **VALIDÉE** |
| D-VAL-7 | **Principe** d’un POC technique de faisabilité **validé** ; périmètre détaillé après cadrage/archi suffisants | **G5** | **VALIDÉE (principe)** |
| D-VAL-8 | Passage au cadrage détaillé **autorisé** | **G6** | **VALIDÉE** |
| D-VAL-9 | Cadrage détaillé SFIA Studio **validé** | **DF-G1** | **VALIDÉE** |
| D-VAL-10 | Commit, push et création d’une **draft PR** du socle documentaire **autorisés** par Morris ; **merge non autorisé** | **G7** | **VALIDÉE** |

### Contenu D-VAL-3 (rappel)

Produit complet ; POC ≠ produit ≠ MVP ≠ limite de trajectoire ; POC dérivé de vision/archi ; MVP et industrialisation distincts.

### Contenu D-VAL-6 (G4)

SFIA Studio adopte l’Option C. Toute évolution de méthode = cycle CAPA/EVOL méthode séparé + GO Morris. **Ne modifie pas** SFIA v2.6.

### Contenu D-VAL-7 (G5)

Principe POC validé. **N’autorise pas** le démarrage du POC. Périmètre précis ultérieur.

### Contenu D-VAL-8 / D-VAL-9

D-VAL-8 a autorisé le cadrage détaillé. D-VAL-9 / DF-G1 valide le cadrage documenté dans `04`–`07`. **Ne lance pas** le prochain cycle.

### Contenu D-VAL-10 (G7) — historique

Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé** par cette décision. Handoff review ≠ G7.

### D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED

Intégration PR #207 reconnue ; socle sur `main` ; cadrage documentaire clôturé (candidat) ; branche conservée ; prochain cycle non sélectionné.

> **Ne vaut pas** décision Morris. GO distinct requis.

---

## 3. Statut des gates G1–G7 et DF-G1

| Gate | Statut | Formulation |
|------|--------|-------------|
| **G1** | **VALIDÉ** | SFIA Studio est un projet officiel. |
| **G2** | **VALIDÉ** | Le problème et l’opportunité sont validés. |
| **G3** | **REVUE CONFORME** | Vision corrigée = base validée du cadrage. |
| **G4** | **VALIDÉ — OPTION C** | Produit indépendant consommant SFIA v2.6. |
| **G5** | **VALIDÉ SUR LE PRINCIPE** | POC de faisabilité requis ; détail ultérieur. |
| **G6** | **VALIDÉ** | Cadrage détaillé autorisé (D-VAL-8). |
| **DF-G1** | **VALIDÉ** | Cadrage détaillé validé (D-VAL-9). |
| **G7** | **Historique (D-VAL-10)** | Commit / push / draft PR autorisés — merge **non** autorisé par D-VAL-10. **Observation :** PR #207 mergée. **Régularisation :** D-VAL-11 candidate only. |

> Le push technique du Review Handoff Git **ne vaut pas** G7. G7 **≠** autorisation rétroactive de merge.

### Rappels d’effet

| Décision | N’autorise pas |
|----------|----------------|
| G1 validé | Automatisme des phases suivantes |
| G4 Option C | Modification de SFIA v2.6 |
| G5 principe | Démarrage du POC |
| G6 / DF-G1 | Conception / architecture / UX / prochain cycle |
| G7 / D-VAL-10 | Merge (historique) ; force push ; prochain cycle |
| D-VAL-11 candidate | Aucun effet tant que non validée |

---

## 4. Réserves G3 traitées (R1–R5)

| ID | Réserve | Traitement |
|----|---------|------------|
| **G3-R1** | « Industrialiser les cycles » | Vision : qualifier/lancer/suivre/clôturer les cycles ; industrialiser la **plateforme** |
| **G3-R2** | Runtime figé | Mécanisme d’orchestration déterministe **candidat** ; nom non contractuel ; archi non validée |
| **G3-R3** | macOS = plateforme produit | macOS = contrainte de **preuve** POC uniquement |
| **G3-R4** | POC = valeur produit | Critères candidats de valeur ajoutés ; POC = faisabilité ; MVP = valeur |
| **G3-R5** | 15 cycles obligatoires | Couverture **progressive** ; MVP = sous-ensemble à définir plus tard |

---

## 5. Formulation G5 (principe validé)

POC destiné **uniquement** à démontrer la faisabilité d’implémentation.

Questions techniques cibles (périmètre détaillé **non figé**) :

1. Lecture état Git réel ?
2. Composition / injection instructions SFIA vers GPT ?
3. Qualification et contrat structurés par GPT ?
4. Invocation contrôlée de Cursor ?
5. Orchestration déterministe (Runtime candidat) : gates et stop conditions ?
6. Récupération / analyse résultats, diffs, review packs ?
7. Exécution dans l’environnement local Morris sur **macOS** (contrainte de preuve) ?

### Le POC ne valide pas

Produit complet ; MVP ; industrialisation plateforme ; couverture des 15 cycles ; stack ; architecture définitive ; valeur métier complète.

---

## 6. Décisions non prises / restantes Morris

| Sujet | Statut |
|-------|--------|
| G7 commit / push / draft PR (D-VAL-10) | **Historique — FAIT** |
| Merge PR #207 | **Fait Git** (`ec21074`) — régularisation = D-VAL-11 candidate |
| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
| Sélection du prochain cycle | **Non sélectionné** |
| Ordre conception / architecture / UX | Non pris |
| Contenu exact POC / démarrage POC | Non pris |
| MVP / backlog | Non pris |
| Stack / architecture | Non pris |
| Sécurité détaillée / secrets | Non pris |
| Mode distribution produit | Non pris |
| L3/L4 | Non pris |
| Modification v2.6 | Interdite ici |

**DF-G1 est VALIDÉ.** Les autres gates futurs (DF-G2…) restent **non validés**.

---

## 7. Option C (validée) — rappel impacts

| Impact | Contenu |
|--------|---------|
| Produit | Indépendant, consomme v2.6 |
| Méthode | Inchangée sans cycle CAPA/EVOL + GO |
| Risque évité | Confusion extension = baseline |

Options A/B : non retenues pour la relation produit/méthode au démarrage.

---

## 8. Trajectoire macro

```text
Produit cible complet
  → pré-cadrage (01–03) — historique synchronisé
  → cadrage détaillé (04–07) — VALIDÉ D-VAL-9 / DF-G1
  → versionnement G7 — commit / push / draft PR (D-VAL-10)
  → merge PR #207 — fait Git (ec21074) ; D-VAL-11 candidate
  → synchronisation post-merge — cycle actuel
  → conception / architecture / UX — non lancés
  → POC de faisabilité
  → décision de poursuite ou d’ajustement
  → MVP réellement utilisable
  → construction incrémentale
  → industrialisation de la plateforme
```

---

## 9. Risques résiduels

| ID | Risque | Reporté à |
|----|--------|-----------|
| R1 | Seconde vérité hors Git | Cadrage / sécurité |
| R2 | Contournement gates | Sécurité ; POC |
| R3 | Runtime figé trop tôt | Architecture |
| R4 | macOS pris pour plateforme produit | G3 final / cadrage |
| R5 | Confusion POC ↔ valeur | G3-R4 / MVP |
| R6 | 15 cycles pris pour obligation MVP | G3-R5 / backlog |
| R7 | Campus360 local coexistant | Discipline Git |

---

## 10. Questions ouvertes (post-merge)

1. Validation ou rejet de **D-VAL-11** (GO distinct) ?
2. Clôture formelle du cadrage documentaire ?
3. Sort de la branche `project/sfia-studio-pre-framing` ?
4. Quel prochain cycle (conception bornée recommandée, non décidée) ?
5. Ordre conception / architecture / UX ?
6. Quelles questions G5 retenues dans le périmètre POC détaillé (ultérieur) ?
7. POC jetable ou réutilisable (post-POC) ?

---

## 11. Critères de clôture pré-cadrage (actualisés)

| Critère | Gate | État |
|---------|------|------|
| Projet officiel | G1 | **Fait** |
| Problème / opportunité | G2 | **Fait** |
| Vision produit | G3 | **Revue conforme** |
| Relation v2.6 Option C | G4 | **Fait** |
| Principe POC | G5 | **Fait (principe)** |
| Cadrage détaillé autorisé | G6 | **Fait** |
| Cadrage détaillé validé | DF-G1 / D-VAL-9 | **Fait** |
| Versionnement projet (commit / push / draft PR) | G7 / D-VAL-10 | **Fait (historique)** |
| Merge PR #207 | Observation Git | **Fait** — D-VAL-11 candidate |
| Clôture formelle cadrage | D-VAL-11 | **Ouverte** |

---

## 12. Prochaine décision recommandée

1. Revue ChatGPT de la synchronisation documentaire + handoff.
2. Morris : validation ou rejet de **D-VAL-11**.
3. Sort de la branche projet (décision distincte).
4. **Sélection du prochain cycle** (conception fonctionnelle bornée = recommandation, pas décision).

G5 ≠ POC démarré. DF-G1 ≠ prochain cycle lancé. D-VAL-10 ≠ merge. Observation merge ≠ D-VAL-11. Handoff ≠ décision.

---

## 13. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| D-VAL-1 à D-VAL-10 | Tracées (historiques) |
| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
| DF-G1 | **VALIDÉ** |
| G7 | Historique D-VAL-10 ; merge observé (PR #207) |
| Prochain cycle | Non sélectionné |
| Architecture / stack / POC / MVP | Non démarrés |
| Synchronisation 01–03 | **Oui** (bandeaux post-merge) |

**Verdict :** `PRE-FRAMING PACK HISTORICAL — POST-MERGE SYNC IN README/04-07 — D-VAL-11 CANDIDATE ONLY`

---

## 14. Liens

### Pré-cadrage (historique)

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité / décisions (prime) |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision historique |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture progressive |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — decision pack historique — PR #207 mergée — D-VAL-11 candidate only — Morris décide.*
```

### projects/sfia-studio/04-detailed-product-framing.md

```markdown
# SFIA Studio — Cadrage détaillé produit

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `04-detailed-product-framing.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Typologie** | DOC — EVOL projet |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `post-merge-documentary-synchronization-candidate-review` |
| **Décisions applicables** | D-VAL-1 à D-VAL-10 (historiques) ; D-VAL-11 candidate only |
| **Autorité** | Morris |
| **Source de vérité** | Git `main` — PR #207 / `ec21074` |

> Contrat produit détaillé **validé** (D-VAL-9). **Pas** de conception fonctionnelle, architecture, stack, backlog, UX ni POC.

---

## 1. Résumé exécutif

SFIA Studio est le projet officiel visant une **plateforme métier opérationnelle et durable** pour **qualifier, lancer, suivre et clôturer** les cycles SFIA, en orchestrant Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris, tout en **consommant** SFIA v2.6 (Option C).

Le pré-cadrage (G1–G5, revue G3 conforme) et **G6** ont autorisé ce cadrage détaillé, **validé** par D-VAL-9 / DF-G1. Le **POC** reste une preuve de faisabilité ultérieure. Le **MVP** et l’**industrialisation de la plateforme** restent distincts et non figés ici. **G7** (D-VAL-10, historique) : commit / push / draft PR autorisés — merge **non** autorisé par cette décision. **Observation :** PR #207 mergée (`ec21074`). **D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED.**

---

## 2. Problème validé (G2)

### Situation actuelle

La boucle SFIA fonctionne manuellement :

**Morris → ChatGPT → template Git → prompt Cursor → exécution → review pack → analyse → décision Morris.**

### Effets observables

- Friction de copier/coller entre surfaces (chat, IDE, terminal, fichiers temporaires).
- Charge cognitive liée à la multiplicité d’artefacts (prompt, rapport, review pack, handoff).
- Risque d’écarts hors branche / hors périmètre par discipline opérateur variable.
- Visibilité partielle de l’état Git et des gates en un seul lieu.
- Tentation d’automatiser trop tôt et de contourner les gates humains.

### Populations concernées

| Population | Implication |
|------------|-------------|
| Morris | Utilisateur primaire et autorité L0 |
| Futurs opérateurs autorisés | Candidats ultérieurs — non définis pour le MVP |
| Contributeurs / reviewers | Consommateurs indirects de la traçabilité Git |

### Symptômes vs causes candidates

| Symptômes | Causes candidates (hypothèses) |
|-----------|--------------------------------|
| Friction multi-outils | Absence d’interface métier unifiée |
| Erreurs de contrat / routage | Qualification et sources non assistées dans un cockpit |
| Perte de contexte | État dispersé hors d’une vue cycle unique |
| Risque de dérive | Gates et stop conditions non présentés au même endroit que l’exécution |

---

## 3. Opportunité validée (G2)

| Dimension | Contenu |
|-----------|---------|
| **Valeur attendue** | Pilotage métier durable des cycles ; moins de friction ; meilleure conformité aux garde-fous ; traçabilité ancrée Git |
| **Pourquoi maintenant** | Méthode v2.6 stabilisée ; boucle éprouvée ; friction devenue le goulot principal |
| **Coût de l’inaction** | Persistance de la charge cognitive ; risque accru d’écarts ; difficulté à industrialiser l’exploitation de la plateforme |
| **Limites** | Ne remplace pas la méthode ; ne crée pas de valeur métier sans MVP ultérieur ; Option C interdit le couplage doctrine silencieux |

---

## 4. Vision produit détaillée

1. Plateforme métier **complète** (produit cible), pas un POC.
2. Pilotage **progressif** des cycles SFIA (pas obligation immédiate des 15).
3. Orchestration Git + GPT + Cursor + mécanisme déterministe **sous gates Morris**.
4. Industrialisation de la **plateforme** (sécurité, observabilité, maintenabilité, distribution) — **pas** des cycles.
5. Git = vérité durable ; état opérationnel éventuel = dérivé / reconstructible.
6. Automatisation progressive bornée — **jamais** d’arbitrage automatique.

---

## 5. Objectifs produit candidats

| ID | Objectif qualitatif | Résultat attendu |
|----|---------------------|------------------|
| O1 | Unifier le pilotage de cycle | Intention → clôture dans une surface métier |
| O2 | Renforcer la conformité | Contrats, profils, chemins interdits, stop conditions visibles |
| O3 | Ancrer la traçabilité | Décisions et preuves rattachées à Git |
| O4 | Réduire la friction | Moins de manipulations manuelles GPT/Cursor/Git |
| O5 | Préparer la preuve technique | POC de faisabilité dérivé du produit (pas l’inverse) |
| O6 | Préparer la valeur métier | MVP utilisable après preuve — non défini ici |
| O7 | Préparer l’exploitation durable | Industrialisation plateforme ultérieure |

Aucune valeur numérique inventée.

---

## 6. Non-objectifs

- Remplacer Git comme source de vérité.
- Automatiser les arbitrages Morris.
- Modifier silencieusement SFIA v2.6 / créer v2.7 / relancer v3.0.
- Couvrir immédiatement les quinze cycles.
- Transformer le POC en produit ou en MVP.
- Imposer l’architecture plateforme historique (Studio/Runtime/Core/Knowledge) comme cible validée.
- Choisir stack, API, modèle de données ou UX dans ce cycle.

---

## 7. Utilisateurs et parties prenantes

| Acteur | Rôle |
|--------|------|
| **Morris** | Utilisateur primaire ; autorité de décision |
| **Futurs opérateurs autorisés** | Candidats produit ultérieurs |
| **GPT** | Qualification, analyse, revue — non décideur |
| **Cursor** | Exécuteur repository contrôlé |
| **Git / GitHub** | Vérité / revue PR |
| **Mécanisme d’orchestration (candidat)** | Contrats, permissions, gates, stop conditions |
| **Sécurité / exploitation** | Exigences et contrôles futurs |
| **Contributeurs** | Consommateurs de la traçabilité |

---

## 8. Principes produit

| Principe | Implication |
|----------|-------------|
| **Repo-first** | Git porte l’état durable |
| **Human gates** | Aucune décision structurante automatisée |
| **Réversibilité** | Actions bornées, arrêtables, traçables |
| **Explicabilité** | Contrats, profils, stop conditions visibles |
| **État durable dans Git** | Décisions, docs, preuves versionnées |
| **État opérationnel dérivé** | Reconstructible depuis Git — hypothèse |
| **Permissions minimales** | Moindre privilège agents / commandes |
| **Automatisation progressive** | L3/L4 futurs éventuels — non activés |

---

## 9. Hypothèses

| ID | Domaine | Hypothèse | Risque si fausse |
|----|---------|-----------|------------------|
| H1 | Valeur | La friction multi-outils est le goulot principal | Mauvais produit |
| H2 | Usage | Morris restera l’opérateur primaire au moins jusqu’au MVP | Gouvernance à revoir |
| H3 | Faisabilité | Orchestration Git/GPT/Cursor/mécanisme déterministe est réalisable | POC échoue |
| H4 | Gouvernance | Les gates UI renforcent sans contourner | Risque sécurité |
| H5 | Adoption | Une UI métier améliore la conformité v2.6 | ROI faible |
| H6 | Méthode | Option C reste adaptée | Repositionnement G4 |
| H7 | Preuve | POC dérivé d’une archi cible suffisante | POC non représentatif |

---

## 10. Contraintes

| Domaine | Contrainte |
|---------|------------|
| Méthode | Consomme v2.6 ; Option C ; pas de modification silencieuse |
| Repository | Git = source de vérité |
| Environnement initial | Preuve POC sur macOS local Morris — non contractuel pour le produit |
| Fournisseurs | GPT / Cursor / éventuels services — capacités non inventées |
| Sécurité | Secrets, permissions, exécution locale, gates |
| Coûts | Tokens / modèles / exécutions à mesurer |
| Accessibilité | Exigence produit à qualifier — pas de référentiel figé ici |

---

## 11. Dépendances

| Dépendance | Nature |
|------------|--------|
| Git | Lecture / écriture contrôlée d’état |
| GPT | Qualification, analyse, verdict |
| Cursor | Exécution repository bornée |
| Mécanisme d’orchestration | Candidat — non validé |
| Environnement local | Preuve initiale |
| Permissions / secrets | Prérequis sécurité |

---

## 12. Risques de niveau cadrage

| ID | Risque | Domaine |
|----|--------|---------|
| R1 | Valeur non démontrée malgré faisabilité | Valeur |
| R2 | Contournement des gates via UI | Sécurité |
| R3 | Fuite de contexte vers fournisseurs IA | Confidentialité / RGPD |
| R4 | Dépendance fournisseur IA / Cursor | Dépendance |
| R5 | Dette par sur-cadrage ou archi prématurée | Dette |
| R6 | Complexité plateforme trop tôt | Complexité |
| R7 | Seconde source de vérité opaque | Gouvernance |
| R8 | Observabilité insuffisante | Observabilité |
| R9 | Sur-automatisation (L3/L4 trop tôt) | Gouvernance |

---

## 13. Questions ouvertes

1. Ordre des cycles post-cadrage (conception vs architecture vs UX) ?
2. Niveau de preuve architecture avant définition détaillée du POC ?
3. Métriques de valeur à contractualiser au MVP ?
4. Gouvernance multi-opérateur future ?
5. Politique secrets / permissions produit ?
6. Validation ou rejet de **D-VAL-11** (régularisation merge / clôture) ?
7. Quel prochain cycle ?

---

## 14. Critères de clôture du cadrage détaillé

| Critère | Cible |
|---------|-------|
| Contrat produit (04) | Complet et cohérent |
| Capacités / cas d’usage (05) | Exploitables sans backlog |
| Périmètres / critères (06) | Produit ≠ POC ≠ MVP ≠ industrialisation |
| Trajectoire / décisions (07) | Options de routage sans lancement |
| Alignement D-VAL-1…10 | Cohérent |
| Architecture / stack / MVP / POC démarrés | **Absents** |
| Revue GPT + arbitrage Morris | Requis |

---

## 15. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité / gates |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — cadrage détaillé produit validé — post-merge sync — D-VAL-11 candidate only — Morris décide.*
```

### projects/sfia-studio/05-product-capabilities-and-use-cases.md

```markdown
# SFIA Studio — Capacités produit et cas d’usage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `05-product-capabilities-and-use-cases.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `post-merge-documentary-synchronization-candidate-review` |
| **Décisions** | D-VAL-1 à D-VAL-10 (historiques) ; D-VAL-11 candidate only |

> Définit **ce que le produit doit permettre**. Pas de backlog, user stories détaillées, écrans, composants ni architecture.

---

## 1. Acteurs

| Acteur | Nature | Rôle |
|--------|--------|------|
| Morris | Humain | Opérateur primaire ; décideur L0 |
| Futur opérateur autorisé | Humain (candidat) | Usage ultérieur éventuel |
| GPT | Système | Qualification, analyse, verdict |
| Cursor | Système | Exécution repository bornée |
| Git | Système | Source de vérité / historique |
| Mécanisme d’orchestration (candidat) | Système | Contrats, permissions, gates, stop conditions |

---

## 2. Carte de capacités produit candidates

Légende statut : **Cible** = produit long terme · **POC potentiel** · **MVP potentiel** · **Ultérieur** — sans décider le périmètre MVP.

### C1 — Gestion d’une intention

| Champ | Contenu |
|-------|---------|
| Finalité | Capturer une demande Morris en intention de cycle |
| Utilisateur | Morris |
| Valeur | Entrée standardisée |
| Dépendances | UI métier |
| Risques | Ambiguïté non qualifiée |
| Statut | Cible / MVP potentiel |

### C2 — Qualification SFIA

| Champ | Contenu |
|-------|---------|
| Finalité | Qualifier cycle, profil, typologie, profondeur |
| Utilisateur | Morris + GPT |
| Valeur | Routage conforme v2.6 |
| Dépendances | Template / routing / GPT |
| Risques | Mauvais profil (Critical implicite) |
| Statut | Cible / MVP potentiel / POC potentiel (partiel) |

### C3 — Lecture du contexte repository

| Champ | Contenu |
|-------|---------|
| Finalité | Lire branche, HEAD, status, fichiers pertinents |
| Utilisateur | Morris / GPT / Cursor |
| Valeur | Repo-informed |
| Dépendances | Git |
| Risques | Contexte incomplet / trop large |
| Statut | Cible / POC potentiel |

### C4 — Sélection et chargement des sources canoniques

| Champ | Contenu |
|-------|---------|
| Finalité | Identifier et charger template, guides, docs projet |
| Utilisateur | GPT (assisté) / Morris |
| Valeur | Conformité sources |
| Dépendances | Git main / projet |
| Risques | Sources obsolètes |
| Statut | Cible / POC potentiel |

### C5 — Génération d’un contrat Cursor

| Champ | Contenu |
|-------|---------|
| Finalité | Produire un prompt/contrat borné |
| Utilisateur | GPT → Morris |
| Valeur | Exécution contrôlée |
| Dépendances | Template §structure |
| Risques | Contrat incomplet |
| Statut | Cible / POC potentiel / MVP potentiel |

### C6 — Présentation des gates Morris

| Champ | Contenu |
|-------|---------|
| Finalité | Afficher gates / GO-NOGO explicites |
| Utilisateur | Morris |
| Valeur | Pas d’auto-arbitrage |
| Dépendances | Orchestration candidate |
| Risques | Contournement UI |
| Statut | Cible / MVP potentiel / POC potentiel |

### C7 — Suivi d’une exécution

| Champ | Contenu |
|-------|---------|
| Finalité | Suivre l’exécution Cursor bornée |
| Utilisateur | Morris |
| Valeur | Visibilité / arrêt |
| Dépendances | Cursor ; orchestration |
| Risques | Exécution opaque |
| Statut | Cible / POC potentiel |

### C8 — Collecte rapport et review pack

| Champ | Contenu |
|-------|---------|
| Finalité | Récupérer rapport / review pack |
| Utilisateur | Morris / GPT |
| Valeur | Preuve exploitable |
| Dépendances | Cursor ; fichiers locaux |
| Risques | Pack incomplet |
| Statut | Cible / POC potentiel / MVP potentiel |

### C9 — Analyse et verdict GPT

| Champ | Contenu |
|-------|---------|
| Finalité | Analyser le retour ; proposer verdict |
| Utilisateur | GPT → Morris |
| Valeur | Décision informée |
| Dépendances | GPT ; pack |
| Risques | Verdict biaisé |
| Statut | Cible / MVP potentiel |

### C10 — Enregistrement des décisions

| Champ | Contenu |
|-------|---------|
| Finalité | Tracer décisions Morris (ancrage Git) |
| Utilisateur | Morris |
| Valeur | Auditabilité |
| Dépendances | Git |
| Risques | Décision hors Git |
| Statut | Cible / MVP potentiel |

### C11 — Visibilité Git (branche, HEAD, status, diff)

| Champ | Contenu |
|-------|---------|
| Finalité | Afficher l’état Git réel |
| Utilisateur | Morris |
| Valeur | Anti-dérive |
| Dépendances | Git |
| Risques | Affichage trompeur |
| Statut | Cible / POC potentiel |

### C12 — Historique de cycles

| Champ | Contenu |
|-------|---------|
| Finalité | Consulter l’historique des cycles |
| Utilisateur | Morris |
| Valeur | Continuité / REX |
| Dépendances | Git + éventuel état dérivé |
| Risques | Seconde vérité |
| Statut | Cible / Ultérieur / MVP potentiel |

### C13 — Permissions et stop conditions

| Champ | Contenu |
|-------|---------|
| Finalité | Appliquer permissions, chemins interdits, stops |
| Utilisateur | Orchestration + Morris |
| Valeur | Sécurité / conformité |
| Dépendances | Mécanisme déterministe candidat |
| Risques | Contournement |
| Statut | Cible / POC potentiel |

### C14 — Observabilité et diagnostic

| Champ | Contenu |
|-------|---------|
| Finalité | Logs, audit, reprise, diagnostic |
| Utilisateur | Morris / exploitation |
| Valeur | RUN readiness |
| Dépendances | Journalisation |
| Risques | Bruit / fuite |
| Statut | Cible / Ultérieur / POC potentiel (limité) |

### C15 — Suivi des coûts

| Champ | Contenu |
|-------|---------|
| Finalité | Suivre coûts modèles / tokens / exécutions |
| Utilisateur | Morris |
| Valeur | FinOps |
| Dépendances | Fournisseurs IA |
| Risques | Mesure incomplète |
| Statut | Cible / Ultérieur / MVP potentiel |

### C16 — Administration des paramètres produit

| Champ | Contenu |
|-------|---------|
| Finalité | Paramétrer chemins, profils par défaut, connexions bornées |
| Utilisateur | Morris |
| Valeur | Opérabilité |
| Dépendances | Config locale sécurisée |
| Risques | Secrets mal gérés |
| Statut | Cible / Ultérieur |

---

## 3. Cas d’usage prioritaires candidats

### UC1 — Lancer un cycle documentaire borné

| Champ | Contenu |
|-------|---------|
| Déclencheur | Intention documentaire |
| Acteur | Morris |
| Préconditions | Repo accessible ; baseline connue |
| Résultat | Cycle qualifié prêt à cadrage/prompt |
| Gates | Qualification profil ; périmètre |
| Erreurs / stops | Repo inaccessible ; Critical non justifié |
| Preuves | Intention + qualification tracées |

### UC2 — Préparer un prompt Cursor repo-informed

| Champ | Contenu |
|-------|---------|
| Déclencheur | Qualification OK |
| Acteur | GPT + Morris |
| Préconditions | Sources lues ; Git truth check |
| Résultat | Contrat Cursor complet |
| Gates | Revue contrat avant exécution |
| Erreurs / stops | Sources absentes ; contrat incomplet |
| Preuves | Prompt + inventaire sources |

### UC3 — Exécuter une analyse read-only

| Champ | Contenu |
|-------|---------|
| Déclencheur | Contrat read-only |
| Acteur | Cursor |
| Préconditions | Permissions lecture |
| Résultat | Rapport d’analyse sans écriture hors périmètre |
| Gates | Confirmation read-only |
| Erreurs / stops | Tentative d’écriture |
| Preuves | Status / diffs nuls hors lecture |

### UC4 — Contrôler un review pack

| Champ | Contenu |
|-------|---------|
| Déclencheur | Fin d’exécution |
| Acteur | Morris + GPT |
| Préconditions | Pack présent |
| Résultat | Complétude / verdict proposés |
| Gates | Acceptation pack |
| Erreurs / stops | Contenu manquant |
| Preuves | Checklist complétude |

### UC5 — Soumettre une décision Morris

| Champ | Contenu |
|-------|---------|
| Déclencheur | Verdict proposé |
| Acteur | Morris |
| Préconditions | Preuves disponibles |
| Résultat | GO / NO-GO / amendement tracé |
| Gates | Décision humaine obligatoire |
| Erreurs / stops | Auto-approve interdit |
| Preuves | Décision ancrée |

### UC6 — Préparer une PR readiness

| Champ | Contenu |
|-------|---------|
| Déclencheur | Intention de PR |
| Acteur | Morris + Cursor/GPT |
| Préconditions | Diff borné ; G7 ou GO équivalent |
| Résultat | Dossier PR readiness |
| Gates | G7 / readiness |
| Erreurs / stops | Fichiers hors périmètre |
| Preuves | Diff check / inventaire |

### UC7 — Suivre un cycle interrompu

| Champ | Contenu |
|-------|---------|
| Déclencheur | Interruption / stop |
| Acteur | Morris |
| Préconditions | État partiel journalisé |
| Résultat | État d’interruption visible |
| Gates | Reprise ou abandon |
| Erreurs / stops | État perdu |
| Preuves | Journal / status Git |

### UC8 — Reprendre un cycle depuis Git

| Champ | Contenu |
|-------|---------|
| Déclencheur | Reprise après interruption |
| Acteur | Morris |
| Préconditions | Vérité Git cohérente |
| Résultat | Cycle repris sans seconde vérité |
| Gates | Confirmation HEAD/branche |
| Erreurs / stops | Divergence non résolue |
| Preuves | Truth check |

---

## 4. Parcours opérateur macro

```text
Intention
  → Qualification
  → Cadrage / contrat
  → Autorisation (gate Morris)
  → Exécution
  → Revue (pack / analyse)
  → Décision Morris
  → Clôture (ancrage Git / éventuel handoff)
```

Parcours **fonctionnel**, non visuel. Aucune maquette.

---

## 5. Matrice capacités × cycles SFIA (potentielle)

| Capacité | Cycles potentiellement touchés |
|----------|--------------------------------|
| C1–C2 | 1 Cadrage |
| C3–C5 | 1, 13, delivery doc |
| C6–C7 | Transverse (tous cycles exécutés) |
| C8–C9 | 9 QA, 13 PR readiness, 15 REX |
| C10–C12 | Transverse gouvernance |
| C13 | 10 Sécurité |
| C14 | 12 Observabilité / RUN |
| C15 | FinOps transverse |
| C16 | Administration transverse |

**Règles :** couverture **progressive** ; aucun cycle forcé ; **pas de sélection MVP** ici ; POC = lot multi-capacités, pas un cycle autonome.

---

## 6. Hors capacité produit

- Arbitrage automatique des gates Morris.
- Modification silencieuse de méthode / baseline.
- Auto-merge / auto-push projet.
- Gestion opaque des secrets.
- Vérité durable hors Git.
- Couverture obligatoire immédiate des 15 cycles.

---

## 7. Questions ouvertes

1. Quelles capacités sont indispensables au premier MVP (à décider plus tard) ?
2. Quelle granularité d’historique de cycles sans créer de seconde vérité ?
3. Quelles permissions minimales pour Cursor en POC ?
4. Quelles surfaces UX prioritaires après capacité map ?

---

## 8. Liens

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [README.md](./README.md) | Navigation |

---

*SFIA Studio — capacités et cas d’usage — cadrage détaillé — Morris décide.*
```

### projects/sfia-studio/06-scope-constraints-and-success-criteria.md

```markdown
# SFIA Studio — Périmètres, contraintes et critères de succès

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `06-scope-constraints-and-success-criteria.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé produit) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `post-merge-documentary-synchronization-candidate-review` |
| **Décisions** | D-VAL-1 à D-VAL-10 (historiques) ; D-VAL-11 candidate only |

> Borne le produit, les phases et les preuves. **Ne sélectionne pas** le MVP. **Ne fige pas** le POC détaillé. **Ne conçoit pas** l’industrialisation.

---

## 1. Périmètre produit cible

| Élément | Contenu candidat |
|---------|------------------|
| Capacités | Carte C1–C16 (voir `05-…`) — couverture progressive |
| Cycles | Quinze cycles = cible long terme, pas obligation immédiate |
| Utilisateurs | Morris primaire ; opérateurs futurs candidats |
| Exploitation | Industrialisation **plateforme** ultérieure |
| Méthode | Consomme v2.6 (Option C) |

---

## 2. Périmètre du cadrage détaillé (ce cycle)

### Définit

- Contrat produit (problème, opportunité, vision, objectifs, non-objectifs).
- Acteurs, capacités, cas d’usage, parcours macro.
- Distinctions produit / POC / MVP / industrialisation.
- Exigences non fonctionnelles **candidates**.
- Critères de valeur **candidats**.
- Trajectoire et options de prochains cycles.

### Ne définit pas

- Conception fonctionnelle détaillée ; architecture ; stack ; API ; modèle de données.
- UX/UI / Figma / maquettes.
- Backlog / user stories / estimations.
- Contenu exact du POC ; sélection MVP.
- Code, CI/CD, packaging.

---

## 3. Périmètre candidat du POC (principe G5)

| Règle | Contenu |
|-------|---------|
| Nature | Preuve de **faisabilité technique** uniquement |
| Dérivation | Après cadrage + architecture cible **suffisante** |
| Détail | **Non figé** dans ce cycle |
| Valeur métier | **Non validée** par le POC |

### Sept questions G5 (rappel)

1. Lecture état Git réel ?
2. Composition / injection instructions SFIA → GPT ?
3. Qualification et contrat structurés par GPT ?
4. Invocation contrôlée de Cursor ?
5. Orchestration déterministe : gates et stop conditions ?
6. Récupération / analyse résultats, diffs, review packs ?
7. Exécution dans l’environnement local Morris sur **macOS** (contrainte de preuve) ?

macOS ≠ plateforme produit définitive.

---

## 4. Périmètre candidat du MVP (principes uniquement)

| Principe | Contenu |
|----------|---------|
| Nature | Première version **réellement utilisable** |
| Valeur | Métier mesurable — critères candidats §9 |
| Cycles | **Sous-ensemble** prioritaire — **non sélectionné ici** |
| Relation au POC | Après preuve de faisabilité et GO de poursuite |
| Interdiction | Confondre MVP et POC ; inventer le périmètre maintenant |

---

## 5. Périmètre d’industrialisation (plateforme)

| Domaine | Besoin candidat (non conçu) |
|---------|-----------------------------|
| Sécurité | Permissions, secrets, contrôles durables |
| Observabilité | Logs, audit, diagnostic, reprise |
| Maintenance | Évolutivité, dette maîtrisée |
| Distribution | Mode de livraison produit — non décidé |
| Support | RUN borné ultérieur |
| Conformité | RGPD, accessibilité, méthode |

Pas de conception détaillée dans ce cycle.

---

## 6. Contraintes obligatoires

| Contrainte | Origine |
|------------|---------|
| Git = source de vérité | Operating model / rules |
| Morris = autorité | Gouvernance L0 |
| Option C | D-VAL-6 / G4 |
| Baseline v2.6 inchangée | Méthode |
| Gates humains | D-VAL / operating model |
| Pas d’automatisation d’arbitrage | Garde-fou |
| macOS = preuve POC non contractuelle | G3-R3 |
| Runtime = candidat non contractuel | G3-R2 |
| G7 historique (D-VAL-10) : commit / push / draft PR — merge hors D-VAL-10 | Historique |
| Merge PR #207 observé ; D-VAL-11 candidate only | Observation / candidate |

---

## 7. Exigences non fonctionnelles candidates

Chaque exigence = **besoin à qualifier** — **aucun seuil inventé**.

| NFR | Besoin candidat |
|-----|-----------------|
| Sécurité | Contrôler accès repo, agents, commandes, secrets |
| Confidentialité | Minimiser contexte transmis aux IA |
| Traçabilité | Relier intentions, exécutions, décisions, preuves |
| Auditabilité | Permettre revue a posteriori |
| Réversibilité | Pouvoir arrêter / revenir sans opacité |
| Accessibilité | UI métier utilisable — référentiel ultérieur |
| Performance | Qualifier latence IA, contexte, durée cycles, volumétrie Git |
| Résilience | Reprendre après interruption |
| Maintenabilité | Éviter dette prématurée |
| Interopérabilité | Intégrer Git / GPT / Cursor bornés |
| Coût | Suivre inducteurs (modèles, tokens, stockage, exécutions, hébergement) |
| Sobriété | Éviter sur-automatisation et sur-contexte (GreenOps léger) |

---

## 8. Blocs cadrage (identification)

| Bloc | Identification | Non produit |
|------|----------------|-------------|
| Sécurité / RSSI | Acteurs, actifs, familles de risques, contrôles déterministes | Threat model |
| RGPD | Demandes, historique, décisions, fichiers, logs, contexte IA | DPIA |
| Accessibilité | Exigence produit | Référentiel / UI |
| FinOps | Inducteurs de coûts ; métriques futures | Budget |
| Performance | Latence, contexte, durée, volumétrie Git | SLA |
| UX/UI | Surfaces à concevoir plus tard | Maquettes / Figma |
| DevOps | Frontières Git/GPT/Cursor/orchestration | Interfaces techniques |
| Observabilité | Logs, audit, reprise, diagnostic | Runbook / SLO |
| Capitalisation | Observation ≠ règle méthode | Cycle méthode |
| GreenOps | Identification légère | Engagements |

---

## 9. Critères candidats de valeur produit

| # | Critère | Mesure ultérieure (méthode à définir) |
|---|---------|----------------------------------------|
| 1 | Réduction des manipulations GPT / Cursor / Git | Comptage d’étapes / observation |
| 2 | Réduction erreurs de routage et de contrat | Taux d’écarts |
| 3 | Diminution temps préparation / clôture | Durée observée |
| 4 | Amélioration visibilité des gates | Feedback opérateur |
| 5 | Amélioration traçabilité des décisions | Couverture décisions↔Git |
| 6 | Diminution charge cognitive | Charge perçue / erreurs |
| 7 | Conformité accrue aux garde-fous | Checklists / audits |
| 8 | Reproductibilité des cycles | Reprises réussies |

Aucune cible numérique inventée. Le POC **ne contractualise pas** ces critères ; le MVP et les expérimentations produit les valideront.

---

## 10. Critères de réussite du cadrage détaillé

| Critère | Attendu |
|---------|---------|
| Documents 04–07 complets | Oui |
| Cohérence D-VAL-1…10 / G1–G7 | Oui |
| Frontières cadrage vs conception/archi/backlog | Respectées |
| Revue GPT | Effectuée |
| Validation Morris du cadrage | Requise pour clôturer |

---

## 11. Critères futurs de réussite du POC

| Verdict | Signification |
|---------|---------------|
| `FEASIBILITY CONFIRMED` | Hypothèses techniques critiques démontrées |
| `FEASIBILITY CONFIRMED WITH RESERVES` | Faisabilité partielle ; réserves documentées |
| `FEASIBILITY NOT DEMONSTRATED` | Preuve insuffisante ou échec |

Le POC ne produit pas de verdict de valeur métier.

---

## 12. Critères futurs de réussite du MVP

| Critère | Nature |
|---------|--------|
| Valeur métier réelle | Au moins une boucle utilisable mesurable |
| Utilisabilité | Opérateur peut conduire un cycle borné |
| Conformité aux gates | Aucun contournement structurel |
| Ancrage Git | Décisions / preuves traçables |

Sans métrique inventée.

---

## 13. Hypothèses et risques (synthèse)

Voir `04-…` §9 et §12. Risques majeurs : seconde vérité ; contournement gates ; confusion POC/MVP ; sur-cadrage ; dépendance fournisseurs.

---

## 14. Stop conditions produit

Arrêt / escalade Morris si :

- automatisation d’une décision structurante ;
- écriture durable hors Git ;
- modification silencieuse de méthode ;
- élargissement au-delà du contrat de cycle ;
- secrets exposés ;
- force push ; merge sans GO Morris explicite ;
- présentation d’une candidate comme baseline.

---

## 15. Questions ouvertes

1. Quelles NFR prioriser avant POC ?
2. Quelles métriques de valeur instrumenter au MVP ?
3. Quel niveau d’observabilité minimal en POC ?
4. Politique de conservation des logs / contextes IA ?

---

## 16. Liens

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — périmètres et critères — cadrage détaillé — Morris décide.*
```

### projects/sfia-studio/07-product-trajectory-and-decision-pack.md

```markdown
# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 1 — Cadrage (synchronisation documentaire post-merge) |
| **Profil** | Standard (sous-cycle sync) / Critical (cadrage historique) |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `post-merge-documentary-synchronization-candidate-review` |
| **Décisions** | D-VAL-1 à D-VAL-10 (historiques) ; D-VAL-11 **CANDIDATE ONLY** |
| **Destinataire** | Morris |
| **Source de vérité** | Git `main` — PR #207 / `ec21074` |

> Trajectoire et décisions après merge vérifié. Ne lance aucun cycle produit suivant. **D-VAL-11 non validée.**

---

## 0. État post-merge (observation)

| Élément | Valeur |
|---------|--------|
| PR #207 | **MERGED** |
| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
| Intégration | Techniquement vérifiée (blobs identiques) |
| D-VAL-10 | Historique — **n’autorisait pas** le merge |
| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
| Branche projet | Conservée ; intégrée à `main` ; suppression = décision distincte |
| Prochain cycle | **Non sélectionné** |

> Observation ≠ décision. Aucune validation rétroactive automatique du merge.

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

### D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED

| Champ | Contenu candidat |
|-------|------------------|
| Objet | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche projet conservée jusqu’à décision distincte ; prochain cycle non sélectionné |
| Statut | **CANDIDATE ONLY — NOT VALIDATED** |

> Cette proposition **ne vaut pas** décision Morris. Elle nécessite un **GO distinct**.

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
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé. **Observation :** PR #207 mergée (`ec21074`). **Régularisation :** D-VAL-11 candidate only. |

G7 **≠** autorisation rétroactive de merge.

---

## 3. Trajectoire produit (état factuel)

```text
Pré-cadrage                         ← terminé historiquement
  → cadrage détaillé                ← VALIDÉ (D-VAL-9 / DF-G1)
  → versionnement documentaire      ← commit / push / draft PR (D-VAL-10 / G7)
  → merge PR #207                   ← fait Git vérifié (ec21074)
  → synchronisation post-merge      ← cycle actuel (candidate review)
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI initiale
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
- Merge = observation Git ; régularisation = D-VAL-11 candidate.
- Aucune stack / architecture validée.
- Prochain cycle **non sélectionné**.

---

## 4. Prochains cycles candidats (options de routage — non lancés)

### 4.0 Synchronisation documentaire post-merge

| Champ | Contenu |
|-------|---------|
| Statut | **Cycle actuel** — en revue Morris |
| Objectif | Aligner docs sur l’état Git post-merge |
| Ne lance pas | Conception / architecture / POC |

### 4.1 Conception fonctionnelle

| Champ | Contenu |
|-------|---------|
| Déclencheur | Après sync documentaire + sélection Morris |
| Objectif | Préciser comportements et règles métier des capacités |
| Dépendances | Documents 04–07 ; sync post-merge |
| Profil probable | Critical ou Standard — à requalifier |
| Pourquoi pas maintenant | Prochain cycle **non sélectionné** |

### 4.2 Architecture fonctionnelle

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin de structurer capacités / frontières |
| Objectif | Modules logiques ; séparation Studio / orchestration candidate |
| Pourquoi pas maintenant | Risque de figer trop tôt |

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
| D-NEXT-2 | Sélection du prochain cycle | Morris | **Non sélectionné** |
| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Non pris |
| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
| D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
| D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris |
| D-NEXT-9 | Merge PR #207 | Observation Git | **Réalisé** (`ec21074`) — régularisation = D-VAL-11 candidate |
| D-NEXT-10 | Validation / rejet de **D-VAL-11** | Morris | **Ouverte** |
| D-NEXT-11 | Sort de la branche projet | Morris | Conservée ; décision distincte |

---

## 6. Options de séquencement post-cadrage

### Option 1 — Conception puis architecture fonctionnelle

| | |
|--|--|
| **Bénéfices** | Clarifie le « quoi » avant le « comment logique » |
| **Risques** | Conception trop détaillée sans frontières |
| **Prérequis** | Sync documentaire + cadrage validé |

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

### Recommandation candidate (non décision)

**Synchronisation documentaire (en cours) puis Option 1** : conception fonctionnelle bornée → architecture fonctionnelle → puis UX ou technique selon risques.

Morris reste libre de choisir Option 2 ou 3. **Aucun cycle produit n’est lancé.**

---

## 7. Gates futurs proposés

| Gate proposé | Objet | Statut |
|--------------|-------|--------|
| **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
| **DF-G2** | Sélectionner le prochain cycle | **PROPOSÉ** |
| **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique ; merge hors périmètre D-VAL-10 |
| **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** |
| **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** |
| **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
| **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |

Les gates DF-G2 et DF-G4+ **ne sont pas** validés.

---

## 8. Questions Morris

1. Validez-vous ou rejetez-vous **D-VAL-11** (GO distinct) ?
2. Clôturez-vous formellement le cadrage documentaire ?
3. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
4. Quel prochain cycle (conception / archi / UX / autre) ?
5. Quel niveau d’architecture minimale avant POC ?
6. Quelles priorités NFR avant le POC ?

---

## 9. Critères de clôture du cadrage détaillé

| Critère | État |
|---------|------|
| 04–07 complets et cohérents | **Oui** |
| Alignement D-VAL-1…10 / G1–G7 / DF-G1 | **Oui** |
| Pas d’archi/stack/MVP/POC démarrés | **Oui** |
| DF-G1 validé | **Oui** (D-VAL-9) |
| G7 commit / push / draft PR | **Réalisés** (D-VAL-10) |
| Merge PR #207 | **Fait Git** — régularisation D-VAL-11 candidate |
| Clôture formelle cadrage | **Ouverte** (liée à D-VAL-11) |
| Prochain cycle | **Non sélectionné** |

---

## 10. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage détaillé | **VALIDÉ** (D-VAL-9) |
| Intégration `main` | **Oui** (PR #207 / `ec21074`) |
| Synchronisation post-merge | **En revue** |
| D-VAL-11 | **CANDIDATE ONLY — NOT VALIDATED** |
| Ready for next cycle | **Non** — non sélectionné |
| Ready for POC | **Non** |

**Verdict :** `SFIA STUDIO POST-MERGE DOCUMENTARY SYNCHRONIZATION READY FOR MORRIS REVIEW`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Gates / D-VAL / état post-merge |
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |

---

*SFIA Studio — trajectoire post-merge — D-VAL-11 candidate only — prochain cycle non sélectionné — Morris décide.*
```


---

## 10. Garde-fous / réserves

- Aucun commit / push / PR projet
- D-VAL-11 non validée
- D-VAL-10 non réécrite rétroactivement
- Pas de prochain cycle lancé
- Pas d’architecture / stack / POC / MVP démarrés
- Méthode / Campus360 / code inchangés

---

## 11. Décisions Morris restantes

1. Validation ou rejet de D-VAL-11
2. Autorisation commit / push / PR corrective de la sync (si GO)
3. Sort de la branche projet
4. Sélection du prochain cycle

---

## 12. Verdict

`SFIA STUDIO POST-MERGE DOCUMENTARY SYNCHRONIZATION READY FOR MORRIS REVIEW`
