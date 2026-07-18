# SFIA Studio — Review Pack FULL — PR readiness conception fonctionnelle

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-18 18:03:22 CEST |
| **Repository** | `/Users/morris/Projects/sfia-workspace` (`mcleland147/sfia-workspace`) |
| **Branche** | `project/sfia-studio-functional-design` |
| **HEAD initial** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **HEAD actuel / commit projet** | `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
| **origin/main** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Handoff source (validation)** | `963fe366baaef0ac5820f8ab9df43fb29ff5b91a` |
| **Cycle** | 13 — PR readiness |
| **Profil** | Critical |
| **Typologie** | DOC — EVOL produit |
| **Niveau review pack** | FULL |
| **PR** | #209 — draft |
| **URL** | https://github.com/mcleland147/sfia-workspace/pull/209 |

---

## 1. Décision Morris

Morris autorise staging, commit unique, push sans force de `project/sfia-studio-functional-design`, création d’une **draft PR** vers `main`, review pack FULL et handoff Git.

**Interdit :** ready-for-review ; merge ; auto-merge ; suppression de branche ; architecture ; UX/UI/Figma ; POC/MVP ; backlog ; modification méthode/Campus360/code.

Conception fonctionnelle déjà **VALIDÉE** — Morris — 2026-07-18. FD-CAND-01…08 **VALIDÉES**. Aucune D-VAL-12.

---

## 2. Justification Critical

- le contenu définit les règles fonctionnelles contrôlant Git, GPT et Cursor ;
- il formalise les gates, permissions, arrêts et responsabilités ;
- une erreur de périmètre ou de versionnement pourrait promouvoir une décision ou une architecture non autorisée ;
- les cinq fichiers doivent rester strictement cohérents avec la validation Morris.

---

## 3. Sources

Méthode : template cycle ; routing ; operating model ; guardrails.
Socle main : README, 04–07.
Locaux versionnés : 08, 09, 10.
Handoff validation : `963fe366…`.

---

## 4. Périmètre — cinq fichiers

| Fichier | Action |
|---------|--------|
| `projects/sfia-studio/README.md` | Modifié |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | Modifié |
| `projects/sfia-studio/08-functional-design.md` | Créé |
| `projects/sfia-studio/09-functional-flows-and-rules.md` | Créé |
| `projects/sfia-studio/10-functional-decision-pack.md` | Créé |

Hors périmètre préservé : Campus360, `.sfia`, `.tmp-sfia-review`, method, prompts, 01–06.

---

## 5. Contrôles documentaires

| Contrôle | Résultat |
|----------|----------|
| `functional-design-validated` | Présent |
| `functional-flows-and-rules-validated` | Présent (09) |
| Validation Morris 2026-07-18 | Présente |
| FD-CAND-01…08 VALIDÉES | Présent |
| D-VAL-12 | **Absente** (mentions « non créée » uniquement) |
| Architecture validée | **Non** |
| Stack choisie | **Non** |
| Runtime | Candidat non contractuel |
| POC lancé | **Non** |
| MVP défini | **Non** |
| Cycle suivant sélectionné | **Non** |
| Présentée comme déjà sur `main` | **Non** (locale / GO distinct) |
| `functional-design-candidate-review` courant | **Absent** |

---

## 6. Staged (avant commit)

```text
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
A	projects/sfia-studio/08-functional-design.md
A	projects/sfia-studio/09-functional-flows-and-rules.md
A	projects/sfia-studio/10-functional-decision-pack.md
M	projects/sfia-studio/README.md
```

Staged stat : 5 files, +1038 / −67. `git diff --cached --check` : clean.

---

## 7. Commit projet

```text
commit 99eaeaab3120d488606963eb4e5f69c4f730cf14
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Sat Jul 18 18:02:51 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Sat Jul 18 18:02:51 2026 +0200

    docs(sfia-studio): add validated functional design
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
A	projects/sfia-studio/08-functional-design.md
A	projects/sfia-studio/09-functional-flows-and-rules.md
A	projects/sfia-studio/10-functional-decision-pack.md
M	projects/sfia-studio/README.md
```

### Stat

```text
99eaeaa docs(sfia-studio): add validated functional design
 .../07-product-trajectory-and-decision-pack.md     | 109 ++++---
 projects/sfia-studio/08-functional-design.md       | 341 ++++++++++++++++++++
 .../sfia-studio/09-functional-flows-and-rules.md   | 353 +++++++++++++++++++++
 .../sfia-studio/10-functional-decision-pack.md     | 216 +++++++++++++
 projects/sfia-studio/README.md                     |  86 +++--
 5 files changed, 1038 insertions(+), 67 deletions(-)
```

| Champ | Valeur |
|-------|--------|
| SHA | `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
| Message | `docs(sfia-studio): add validated functional design` |
| Fichiers | Exactement 5 |

---

## 8. Push

| Champ | Valeur |
|-------|--------|
| Commande | `git push -u origin project/sfia-studio-functional-design` |
| Force | **Non** |
| SHA distant | `99eaeaab3120d488606963eb4e5f69c4f730cf14	refs/heads/project/sfia-studio-functional-design` |
| Local = distant | **Oui** (`99eaeaab3120d488606963eb4e5f69c4f730cf14`) |

---

## 9. Diff vs main

### Commits

```text
99eaeaa docs(sfia-studio): add validated functional design
```

### Name-status

```text
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
A	projects/sfia-studio/08-functional-design.md
A	projects/sfia-studio/09-functional-flows-and-rules.md
A	projects/sfia-studio/10-functional-decision-pack.md
M	projects/sfia-studio/README.md
```

### Stat

```text
 .../07-product-trajectory-and-decision-pack.md     | 109 ++++---
 projects/sfia-studio/08-functional-design.md       | 341 ++++++++++++++++++++
 .../sfia-studio/09-functional-flows-and-rules.md   | 353 +++++++++++++++++++++
 .../sfia-studio/10-functional-decision-pack.md     | 216 +++++++++++++
 projects/sfia-studio/README.md                     |  86 +++--
 5 files changed, 1038 insertions(+), 67 deletions(-)
```

### git diff --check

```text
(clean — exit 0)
```

---

## 10. Draft PR

```json
{"baseRefName":"main","body":"## Objet\n\nIntègre la conception fonctionnelle validée de SFIA Studio.\n\n## Contenu\n\n- ajoute le contrat de conception fonctionnelle ;\n- ajoute les parcours et règles métier ;\n- ajoute le pack de validation fonctionnelle ;\n- met à jour README et trajectoire ;\n- trace la validation Morris des FD-CAND-01 à FD-CAND-08.\n\n## Périmètre\n\n- cinq fichiers `projects/sfia-studio/` uniquement ;\n- aucune modification méthode, Campus360, code ou configuration.\n\n## Décisions\n\n- conception fonctionnelle validée ;\n- FD-CAND-01 à 08 validées ;\n- aucune D-VAL-12.\n\n## Garde-fous\n\n- domaines fonctionnels ≠ composants ;\n- données candidates ≠ schéma ;\n- Runtime candidat ;\n- architecture et stack non décidées ;\n- POC non lancé ;\n- MVP non défini ;\n- prochain cycle non sélectionné.\n\n## Validation\n\n- review pack FULL ;\n- `git diff --check` conforme ;\n- handoff Git publié.\n\n## Restrictions\n\n- PR maintenue en draft ;\n- ready-for-review non autorisé ;\n- merge non autorisé ;\n- architecture fonctionnelle non lancée.\n\n\nMade with [Cursor](https://cursor.com)","headRefName":"project/sfia-studio-functional-design","headRefOid":"99eaeaab3120d488606963eb4e5f69c4f730cf14","isDraft":true,"number":209,"state":"OPEN","title":"docs: add validated SFIA Studio functional design","url":"https://github.com/mcleland147/sfia-workspace/pull/209"}
```

| Champ | Valeur |
|-------|--------|
| Numéro | **209** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/209 |
| State | OPEN |
| Draft | **true** |
| Base | main |
| Head | project/sfia-studio-functional-design |
| Head SHA | `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
| Fichiers PR | Exactement 5 — Studio uniquement |
| Ready-for-review | **Non** |
| Merge | **Non** |
| Auto-merge | **Non** |

---

## 11. Architecture / stack / POC / MVP / cycle suivant

| Élément | Statut |
|---------|--------|
| Architecture fonctionnelle / technique | Non validée / non lancée |
| Stack / API / BDD | Non choisies |
| POC | Non lancé |
| MVP | Non défini / non lancé |
| Cycle suivant | **RECOMMANDATION** architecture — **NON SÉLECTIONNÉE** |

---

## 12. Branches

| Branche | Statut |
|---------|--------|
| `project/sfia-studio-functional-design` | Poussée @ `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
| `project/sfia-studio-pre-framing` | Conservée (historique) |
| Suppression | **Interdite** |

---

## 13. État Git final (working tree)

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

Campus360 / hors périmètre inchangés. Aucun staged Studio après commit.

---

## 14. Garde-fous

- Domaines ≠ composants ; données ≠ schéma ; Runtime candidat
- Draft uniquement ; pas ready-for-review ; pas merge
- Aucune D-VAL-12
- Handoff ≠ autorisation merge

---

## 15. Réserves

- PR draft — non prête à merger sans GO distinct
- Conception validée documentairement ; intégration `main` = merge futur non autorisé ici
- Working tree dirty hors périmètre (Campus360, etc.)

---

## 16. Décisions Morris restantes

1. Ready-for-review (interdit ici)
2. Merge (interdit ici)
3. Sélection cycle suivant (architecture recommandée — non sélectionnée)
4. Sort des branches
5. Contenu POC / MVP

---

## 17. Verdict

`SFIA STUDIO FUNCTIONAL DESIGN VERSIONED — DRAFT PR CREATED — READY FOR CHATGPT REVIEW`

---

## 18. DIFF COMPLET vs main (projects/sfia-studio/)

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 756376f..bab129c 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 1 — Cadrage (synchronisation documentaire post-merge) |
-| **Profil** | Standard (sous-cycle sync) / Critical (cadrage historique) |
+| **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
+| **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
 | **Baseline** | SFIA v2.6 (Option C) |
-| **Statut** | `post-merge-documentary-synchronization-validated` |
-| **Décisions** | D-VAL-1 à D-VAL-11 |
+| **Statut** | `functional-design-validated` (trajectoire) ; cadrage documentaire **clôturé** |
+| **Décisions** | D-VAL-1 à D-VAL-11 (inchangées) ; FD-CAND-01…08 **VALIDÉES** |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` — PR #207 / `ec21074` |
+| **Source de vérité** | Git `main` — base `8f5e8a8…` (cadrage) ; conception validée **locale** |
 
-> Trajectoire et décisions après merge vérifié et D-VAL-11. Ne lance aucun cycle produit suivant. **Cadrage documentaire clôturé.**
+> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception fonctionnelle **VALIDÉE** — Morris — 2026-07-18. **Pas de D-VAL-12.**
 
 ---
 
@@ -26,12 +26,29 @@
 | Intégration | Techniquement vérifiée ; **reconnue** (D-VAL-11) |
 | D-VAL-10 | Historique — **n’autorisait pas** le merge |
 | D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
-| Cadrage documentaire | **Clôturé** |
-| Branche projet | Conservée ; intégrée à `main` ; suppression = décision distincte |
-| Prochain cycle | **Non sélectionné** |
+| Cadrage documentaire | **Clôturé** (inchangé) |
+| Branche projet historique | Conservée ; intégrée à `main` ; suppression = décision distincte |
+| Cycle 2 conception | **Sélectionnée, produite, revue et VALIDÉE** — Morris — 2026-07-18 |
+| FD-CAND-01…08 | **VALIDÉES** — Morris — 2026-07-18 |
+| Intégration Git conception | **Non réalisée** — GO distinct requis |
+| Prochain cycle après conception | **Non sélectionné** |
 
 > Le merge est un fait Git. D-VAL-11 le régularise et clôture le cadrage documentaire.
 
+### Trace factuelle — cycle 2 (conception fonctionnelle)
+
+| Champ | Valeur |
+|-------|--------|
+| Sélection / lancement | **2026-07-18** — décision Morris |
+| Production et revue | Documents `08`–`10` ; handoff `80987d8…` |
+| **Validation Morris** | **2026-07-18** — conception **VALIDÉE** |
+| FD-CAND-01…08 | **VALIDÉES** |
+| Profil | Critical |
+| Statut conception | `functional-design-validated` |
+| Intégration Git | **Non réalisée** (commit/push/PR interdits dans ce sous-cycle) |
+| Exclu / réserve | Architecture non validée ; UX visuelle non lancée ; stack non décidée ; POC non lancé ; MVP non défini ; code interdit |
+| D-VAL-1…11 | **Inchangées** — **aucune D-VAL-12** |
+
 ---
 
 ## 1. Rappel D-VAL-1 à D-VAL-10 (historiques)
@@ -90,9 +107,9 @@ Pré-cadrage                         ← terminé historiquement
   → versionnement documentaire      ← commit / push / draft PR (D-VAL-10 / G7)
   → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
   → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
-  → conception fonctionnelle
-  → architecture fonctionnelle
-  → UX/UI initiale
+  → conception fonctionnelle        ← **VALIDÉE** Morris — 2026-07-18 — locale hors main
+  → architecture fonctionnelle      ← **RECOMMANDATION — NON SÉLECTIONNÉE**
+  → UX/UI initiale                  ← non sélectionnée
   → architecture technique candidate
   → définition du POC
   → POC de faisabilité (lot multi-cycle)
@@ -112,7 +129,8 @@ Pré-cadrage                         ← terminé historiquement
 - G7 historique = versionnement (commit / push / draft PR) — **distinct** du merge.
 - Merge = fait Git ; régularisation et clôture = **D-VAL-11 validée**.
 - Aucune stack / architecture validée.
-- Prochain cycle **non sélectionné**.
+- Conception fonctionnelle **VALIDÉE** localement ; **pas** intégrée sur `main` ; aucune architecture / UX visuelle / POC / MVP lancée.
+- Cycle suivant après conception **non sélectionné**.
 
 ---
 
@@ -130,19 +148,21 @@ Pré-cadrage                         ← terminé historiquement
 
 | Champ | Contenu |
 |-------|---------|
-| Déclencheur | Sélection Morris (recommandation : après clôture documentaire) |
+| Statut | **VALIDÉE** — Morris — 2026-07-18 |
 | Objectif | Préciser comportements et règles métier des capacités |
-| Dépendances | Documents 04–07 ; sync post-merge validée |
-| Profil probable | Critical ou Standard — à requalifier |
-| Pourquoi pas maintenant | Prochain cycle **non sélectionné** |
+| Livrables | `08` / `09` / `10` — **validés** (locaux) |
+| Profil | Critical |
+| FD-CAND-01…08 | **VALIDÉES** |
+| Intégration Git | Non réalisée — GO distinct |
+| Ne lance pas | Architecture ; UX visuelle ; stack ; POC ; MVP ; code |
 
 ### 4.2 Architecture fonctionnelle
 
 | Champ | Contenu |
 |-------|---------|
-| Déclencheur | Besoin de structurer capacités / frontières |
+| Statut | **RECOMMANDATION — NON SÉLECTIONNÉE** |
 | Objectif | Modules logiques ; séparation Studio / orchestration candidate |
-| Pourquoi pas maintenant | Risque de figer trop tôt |
+| Pourquoi pas maintenant | Non sélectionnée ; lancement interdit sans GO distinct |
 
 ### 4.3 UX/UI
 
@@ -172,16 +192,20 @@ Pré-cadrage                         ← terminé historiquement
 | ID | Décision | Nature | Statut |
 |----|----------|--------|--------|
 | D-NEXT-1 | Validation documentaire du cadrage détaillé | Morris | **FAIT** (D-VAL-9 / DF-G1) |
-| D-NEXT-2 | Sélection du prochain cycle | Morris | **Non sélectionné** |
+| D-NEXT-2 | Sélection du cycle conception fonctionnelle | Morris | **FAIT** — 2026-07-18 |
+| D-NEXT-2b | Validation de la conception (FD-CAND-01…08) | Morris | **VALIDÉE** — 2026-07-18 |
+| D-NEXT-2c | Sélection du cycle suivant après validation conception | Morris | **Non sélectionné** |
+| D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **Non prise** — interdite ici |
 | D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
-| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Non pris |
+| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception validée ; suite **non sélectionnée** |
 | D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
 | D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
 | D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
 | D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris |
 | D-NEXT-9 | Merge PR #207 | Observation Git + D-VAL-11 | **Réalisé / régularisé** (`ec21074`) |
 | D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
-| D-NEXT-11 | Sort de la branche projet | Morris | Conservée ; décision distincte |
+| D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
+| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Locale ; non poussée ; décision distincte |
 
 ---
 
@@ -211,9 +235,11 @@ Pré-cadrage                         ← terminé historiquement
 
 ### Recommandation (≠ décision / ≠ sélection)
 
-**Conception fonctionnelle bornée** (Option 1) comme prochain cycle produit privilégié.
+**Conception fonctionnelle bornée** (Option 1) a été **sélectionnée, produite et VALIDÉE** le 2026-07-18.
+
+**Prochain cycle recommandé :** architecture fonctionnelle Critical — **RECOMMANDATION — NON SÉLECTIONNÉE**.
 
-Morris reste libre de choisir Option 2, Option 3 ou un autre cycle. **Aucun cycle produit n’est lancé.**
+Morris reste libre de choisir Option 2, Option 3 ou un autre cycle. **Aucun** cycle architecture / UX visuelle / POC / MVP n’est lancé. **Aucun** commit/push/PR projet autorisé ici.
 
 ---
 
@@ -222,23 +248,25 @@ Morris reste libre de choisir Option 2, Option 3 ou un autre cycle. **Aucun cycl
 | Gate proposé | Objet | Statut |
 |--------------|-------|--------|
 | **DF-G1** | Valider le cadrage détaillé documentaire | **VALIDÉ** (D-VAL-9) |
-| **DF-G2** | Sélectionner le prochain cycle | **PROPOSÉ** |
+| **DF-G2** | Sélectionner le prochain cycle | **FAIT** pour conception ; suite après conception **ouverte** |
 | **DF-G3** | Autoriser G7 (commit/push/draft PR) | **VALIDÉ** (D-VAL-10) — historique ; merge hors périmètre D-VAL-10 |
 | **DF-G4** | Autoriser définition détaillée du POC | **PROPOSÉ** |
 | **DF-G5** | Autoriser démarrage du POC | **PROPOSÉ** |
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G2 et DF-G4+ **ne sont pas** validés.
+Les gates DF-G4+ **ne sont pas** validés. Validation conception (FD-CAND-01…08) : **VALIDÉE** — 2026-07-18. GO Git conception : **non pris**.
 
 ---
 
 ## 8. Questions Morris
 
-1. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
-2. Quel prochain cycle (conception fonctionnelle bornée / archi / UX / autre) ?
-3. Quel niveau d’architecture minimale avant POC ?
-4. Quelles priorités NFR avant le POC ?
+1. Autorisez-vous commit / push / PR de la conception (GO Git distinct) ?
+2. Sélectionnez-vous le cycle suivant (architecture fonctionnelle Critical recommandée — **non sélectionnée**) ?
+3. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
+4. Quel sort pour `project/sfia-studio-functional-design` ?
+5. Quel niveau d’architecture minimale avant POC ?
+6. Quelles priorités NFR avant le POC ?
 
 ---
 
@@ -253,7 +281,9 @@ Les gates DF-G2 et DF-G4+ **ne sont pas** validés.
 | G7 commit / push / draft PR | **Réalisés** (D-VAL-10) |
 | Merge PR #207 | **Fait Git** — régularisé D-VAL-11 |
 | Clôture formelle cadrage | **FAIT** (D-VAL-11 — 2026-07-18) |
-| Prochain cycle | **Non sélectionné** |
+| Cycle conception fonctionnelle | **VALIDÉ** — locale hors main |
+| FD-CAND-01…08 | **VALIDÉES** |
+| Prochain cycle après conception | **Non sélectionné** |
 
 ---
 
@@ -262,14 +292,16 @@ Les gates DF-G2 et DF-G4+ **ne sont pas** validés.
 | Élément | Valeur |
 |---------|--------|
 | Cadrage détaillé | **VALIDÉ** (D-VAL-9) |
-| Intégration `main` | **Oui** (PR #207 / `ec21074`) |
+| Intégration cadrage `main` | **Oui** (PR #207 / #208 ; base `8f5e8a8…`) |
 | Synchronisation post-merge | **VALIDÉE** (D-VAL-11) |
 | Cadrage documentaire | **Clôturé** |
 | D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
-| Ready for next cycle | **Non** — non sélectionné |
-| Ready for POC | **Non** |
+| Conception fonctionnelle | **VALIDÉE** — Morris — 2026-07-18 — **locale** |
+| FD-CAND-01…08 | **VALIDÉES** |
+| Intégration conception `main` | **Non** — GO distinct |
+| Ready for architecture / POC / MVP | **Non** |
 
-**Verdict :** `SFIA STUDIO DOCUMENTARY FRAMING CLOSED — POST-MERGE SYNCHRONIZATION VALIDATED`
+**Verdict :** `SFIA STUDIO FUNCTIONAL DESIGN VALIDATED — DOCUMENTARY FINALIZATION READY FOR MORRIS REVIEW`
 
 ---
 
@@ -277,11 +309,14 @@ Les gates DF-G2 et DF-G4+ **ne sont pas** validés.
 
 | Document | Usage |
 |----------|-------|
-| [README.md](./README.md) | Gates / D-VAL / état post-merge |
+| [README.md](./README.md) | Gates / D-VAL / état |
 | [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
 | [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
 | [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
+| [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé** |
+| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours **validés** |
+| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation** |
 
 ---
 
-*SFIA Studio — trajectoire post-merge — D-VAL-11 validée — prochain cycle non sélectionné — Morris décide.*
+*SFIA Studio — cadrage clôturé (D-VAL-11) — conception fonctionnelle VALIDÉE (Morris — 2026-07-18) — locale hors main — Morris décide.*
diff --git a/projects/sfia-studio/08-functional-design.md b/projects/sfia-studio/08-functional-design.md
new file mode 100644
index 0000000..819db3a
--- /dev/null
+++ b/projects/sfia-studio/08-functional-design.md
@@ -0,0 +1,341 @@
+# SFIA Studio — Conception fonctionnelle
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Projet** | SFIA Studio — projet officiel (G1) |
+| **Document** | `08-functional-design.md` |
+| **Cycle** | 2 — Conception fonctionnelle |
+| **Profil** | Critical |
+| **Typologie** | DOC — EVOL produit |
+| **Baseline** | SFIA v2.6 (Option C) |
+| **Base Git** | `origin/main` @ `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
+| **Branche travail** | `project/sfia-studio-functional-design` (locale — push interdit) |
+| **Statut** | `functional-design-validated` |
+| **Autorité** | Morris (L0) |
+| **Décision validation** | Morris — **2026-07-18** — conception fonctionnelle **VALIDÉE** |
+| **Décisions cadrage** | D-VAL-1 à D-VAL-11 (historiques / validées) |
+| **Décisions conception** | FD-CAND-01 à FD-CAND-08 — **VALIDÉES** — Morris — 2026-07-18 |
+| **Cycle suivant** | **Non sélectionné** |
+
+> Contrat de conception fonctionnelle **validé**. **Pas** d’architecture technique, stack, API, modèle de données, Figma, backlog, POC ou MVP. Aucune D-VAL-12.
+
+---
+
+## 0. Validation Morris (2026-07-18)
+
+| Champ | Valeur |
+|-------|--------|
+| Décision | Validation explicite de la conception fonctionnelle SFIA Studio |
+| Autorité | Morris (L0) |
+| Date | **2026-07-18** |
+| FD-CAND-01…08 | **VALIDÉES** |
+| Identifiants | `FD-CAND-*` = identifiants locaux au cycle de conception — **ne modifient pas** la numérotation D-VAL historique |
+| D-VAL-12 | **Non créée** |
+
+### Périmètre validé (socle fonctionnel)
+
+Acteurs et responsabilités ; domaines D1–D10 ; douze états ; transitions ; FR-001…025 ; BR-001…025 ; parcours F1–F12 ; invariants ; AC-01…08 ; risques RF-01…07 (registre à suivre) ; sécurité fonctionnelle ; UX fonctionnelle non visuelle ; données fonctionnelles candidates (sans schéma technique).
+
+### Réserves structurantes
+
+| Réserve | Portée |
+|---------|--------|
+| Domaines D1–D10 | Regroupements **fonctionnels** — **≠** composants techniques |
+| États / transitions | Indépendants de toute implémentation |
+| Données candidates | **≠** modèle de données / schéma BDD |
+| Orchestrateur / « SFIA Runtime » | **Candidat** — non contractuel |
+| Architecture fonctionnelle / technique | **Non validée** |
+| Stack / API / BDD / composant / service / framework | **Non choisis** |
+| POC | **Non lancé** |
+| MVP | **Non défini / non lancé** |
+| Backlog / user stories | **Non créés** |
+| Cycle suivant | **Non lancé** par cette validation |
+| Actions Git projet | Commit / push / PR / merge **non autorisés** par cette validation |
+
+### Effet de la validation
+
+- Le référentiel fonctionnel `08`–`10` devient **socle validé** localement.
+- Aucun effet sur architecture, POC, MVP, stack ou actions Git projet.
+- L’intégration sur `main` exige un **GO Git distinct**.
+
+### Éléments non décidés
+
+Architecture ; UX/UI visuelle ; stack ; contenu POC ; définition MVP ; commit/push/PR de la conception ; sort des branches ; sélection du cycle suivant.
+
+---
+
+## 1. Objet et limites
+
+### Couvre
+
+- acteurs et responsabilités fonctionnelles ;
+- domaines fonctionnels dérivés de C1–C16 ;
+- états et transitions d’un cycle SFIA dans Studio ;
+- exigences fonctionnelles (`FR-*`) ;
+- invariants ;
+- données fonctionnelles candidates (sans stockage) ;
+- sécurité fonctionnelle (besoins, sans technologie) ;
+- UX fonctionnelle non visuelle ;
+- critères d’acceptation fonctionnels.
+
+### Ne couvre pas
+
+| Hors périmètre | Statut |
+|----------------|--------|
+| Architecture fonctionnelle détaillée (composants / frontières techniques) | Non autorisée |
+| Architecture technique / stack / API / BDD | Non décidées |
+| Maquettes / Figma / design system | Non autorisés |
+| Backlog / user stories de delivery | Non autorisés |
+| POC / MVP | Non lancés / non définis |
+| Code / tests applicatifs | Interdits |
+| Commit / push / PR projet | Interdits |
+
+### Séparation
+
+| Artifact | Rôle |
+|----------|------|
+| Cadrage `04`–`07` | Contrat produit validé (entrée) |
+| Conception `08`–`10` | Comportements et règles (ce cycle) |
+| Architecture (future) | Structure logique / technique — non lancée |
+| Delivery / POC / MVP | Preuve ou valeur — ultérieurs |
+
+---
+
+## 2. Acteurs et responsabilités fonctionnelles
+
+| Acteur | Nature | Responsabilité | Ne fait pas |
+|--------|--------|----------------|-------------|
+| **Morris** | Humain L0 | Décide gates structurants ; autorise actions sensibles ; clôture | Automatiser l’arbitrage |
+| **GPT** | Système | Qualifie, challenge, analyse, propose verdicts | Décider ; exécuter Git |
+| **Cursor** | Système | Exécute dans un contrat borné | Inventer le périmètre ; merger seul |
+| **Git** | Système | Source de vérité ; historique ; preuves | Décider |
+| **Opérateur futur** | Humain candidat | Usage ultérieur éventuel | Autorité L0 |
+| **Orchestrateur déterministe (candidat)** | Mécanisme candidat | Applique contrats, permissions, gates, stop | Créer des autorisations ; arbitrer |
+
+Le nom « SFIA Runtime » reste **non contractuel**. L’architecture de ce mécanisme est **non validée**.
+
+---
+
+## 3. Domaines fonctionnels
+
+Regroupements **fonctionnels** (≠ composants techniques) :
+
+| Domaine | Capacités | Objet |
+|---------|-----------|-------|
+| **D1 — Intention et qualification** | C1, C2 | Capturer l’intention ; qualifier cycle / profil / blocs |
+| **D2 — Contexte Git et sources** | C3, C4, C11 | Repo-informed pre-check ; sources canoniques ; visibilité Git |
+| **D3 — Contrat d’exécution** | C5 | Générer le contrat Cursor borné |
+| **D4 — Gates et permissions** | C6, C13 | Présenter gates ; appliquer permissions et stop |
+| **D5 — Exécution et suivi** | C7, C14 | Suivre exécution ; diagnostic fonctionnel |
+| **D6 — Rapports et review packs** | C8 | Collecter et contrôler rapports / packs |
+| **D7 — Analyse et verdict** | C9 | Analyse GPT ; verdict proposé |
+| **D8 — Décisions et clôture** | C10 | Enregistrer décisions Morris ; clôturer |
+| **D9 — Historique et reprise** | C12 | Historique cycles ; reprise depuis Git |
+| **D10 — Administration et exploitation** | C15, C16 | Coûts candidats ; paramètres produit |
+
+Ces domaines ne fixent aucune découpe de services, modules ou packages.
+
+---
+
+## 4. Contrat fonctionnel de cycle — états candidats
+
+États **candidats** (sans modèle technique imposé) :
+
+| État | Signification |
+|------|---------------|
+| `intention_capturée` | Intention enregistrée, non encore qualifiée |
+| `qualification_en_cours` | Qualification profil / blocs / sources |
+| `qualification_prête` | Qualification proposée, en attente de confirmation |
+| `attente_gate_morris` | Gate structurant présenté |
+| `autorisé` | GO Morris reçu pour l’action demandée |
+| `en_exécution` | Exécution Cursor / collecte en cours |
+| `stoppé` | Stop condition ou interruption explicite |
+| `rapport_disponible` | Rapport / review pack collecté |
+| `revue_en_cours` | Analyse GPT / revue en cours |
+| `décision_requise` | Arbitrage Morris requis |
+| `clôturé` | Cycle terminé avec décision tracée |
+| `abandonné` | Cycle abandonné explicitement |
+
+---
+
+## 5. Transitions
+
+| Transition | Déclencheur | Acteur | Préconditions | Résultat | Preuves | Erreurs / stop | Gate Morris |
+|------------|-------------|--------|---------------|----------|---------|----------------|-------------|
+| Intention → qualification | Soumission intention | Morris | Projet connu | `qualification_en_cours` | Intention horodatée | Intention incomplète | Non |
+| Qualification → prête | Fin qualification GPT | GPT | Sources lues | `qualification_prête` | Note de qualification | Sources manquantes | Non |
+| Prête → attente gate | Action sensible demandée | Studio | Qualification cohérente | `attente_gate_morris` | Demande de gate | Périmètre ambigu | Oui (présentation) |
+| Attente → autorisé | GO explicite | Morris | Gate affiché | `autorisé` | Décision GO | Refus / amendement | Oui |
+| Autorisé → exécution | Lancement | Cursor / orchestrateur candidat | Contrat borné | `en_exécution` | Contrat + HEAD | Divergence Git | Non si déjà GO |
+| Exécution → stoppé | Stop / erreur / annulation | Morris / système | Exécution active | `stoppé` | Journal stop | Contournement stop | Selon cause |
+| Exécution → rapport | Fin nominale | Cursor | Livrables attendus | `rapport_disponible` | Rapport / pack | Pack incomplet | Non |
+| Rapport → revue | Demande analyse | GPT / Morris | Pack présent | `revue_en_cours` | Pack référencé | Pack illisible | Non |
+| Revue → décision requise | Verdict proposé | GPT | Analyse faite | `décision_requise` | Verdict candidat | Verdict inventé | Oui |
+| Décision → clôturé | Décision Morris | Morris | Verdict / options | `clôturé` | Décision ancrée | Décision hors Git | Oui |
+| * → abandonné | Abandon explicite | Morris | Cycle ouvert | `abandonné` | Motif | Abandon silencieux | Oui |
+
+**Règle :** aucune transition vers une action distante (push, PR, merge, suppression branche) sans GO Morris **distinct**.
+
+---
+
+## 6. Autorité fonctionnelle
+
+1. **Morris** — seule autorité de décision structurante.
+2. **GPT** — qualifie et recommande ; ne décide pas.
+3. **Cursor** — exécute un contrat ; n’élargit pas le périmètre.
+4. **Git** — trace et prime.
+5. **Orchestrateur candidat** — applique le contrat ; **ne crée pas** d’autorisations.
+
+Observation ≠ recommandation ≠ décision.
+
+---
+
+## 7. Exigences fonctionnelles
+
+| ID | Exigence | Domaine |
+|----|----------|---------|
+| FR-001 | Capturer une intention de cycle avec projet, objectif et typologie | D1 |
+| FR-002 | Qualifier cycle SFIA, profil, blocs activés/désactivés avec justification | D1 |
+| FR-003 | Exécuter un repo-informed pre-check (branche, HEAD, status, base) | D2 |
+| FR-004 | Sélectionner et charger des sources canoniques explicites | D2 |
+| FR-005 | Générer un contrat Cursor borné (fichiers autorisés/interdits, actions) | D3 |
+| FR-006 | Afficher les gates Morris avant toute action sensible | D4 |
+| FR-007 | Enregistrer une autorisation explicite Morris (GO / NO-GO / amendement) | D4 |
+| FR-008 | Suivre l’état d’une exécution jusqu’à fin, stop ou erreur | D5 |
+| FR-009 | Permettre l’arrêt immédiat d’une exécution | D4 / D5 |
+| FR-010 | Collecter rapport d’exécution et review pack | D6 |
+| FR-011 | Contrôler la complétude minimale d’un review pack | D6 |
+| FR-012 | Soumettre le pack à analyse GPT et produire un verdict proposé | D7 |
+| FR-013 | Distinguer verdict proposé et décision Morris | D7 / D8 |
+| FR-014 | Enregistrer une décision Morris avec horodatage et références | D8 |
+| FR-015 | Afficher branche, HEAD, status, diff pertinents | D2 |
+| FR-016 | Conserver un historique de cycles reconstructible depuis Git | D9 |
+| FR-017 | Reprendre un cycle interrompu à partir de Git et des artefacts tracés | D9 |
+| FR-018 | Appliquer permissions et stop conditions avant actions sensibles | D4 |
+| FR-019 | Journaliser les événements structurants (gates, stops, décisions) | D5 / D8 |
+| FR-020 | Empêcher l’écriture durable hors Git (pas de seconde vérité) | D2 / D8 |
+| FR-021 | Traiter commit, push, PR, ready-for-review et merge comme autorisations **distinctes** | D4 |
+| FR-022 | Exiger une preuve suffisante avant tout READY / clôture nominale | D6 / D8 |
+| FR-023 | Signaler les divergences Git / mémoire / sources et stopper si nécessaire | D2 / D5 |
+| FR-024 | Exposer un suivi de coûts candidat (sans moteur imposé) | D10 |
+| FR-025 | Administrer des paramètres produit candidats sans contourner les gates | D10 |
+
+---
+
+## 8. Invariants fonctionnels
+
+| ID | Invariant |
+|----|-----------|
+| INV-01 | Aucune action distante sans GO Morris explicite |
+| INV-02 | Aucun Critical implicite — profil justifié à chaque cycle |
+| INV-03 | Aucune décision structurante inventée par GPT ou Cursor |
+| INV-04 | Git prime sur tout état dérivé |
+| INV-05 | Hypothèse ≠ décision ; candidate ≠ validée |
+| INV-06 | Review pack requis selon le type de cycle |
+| INV-07 | Handoff requis lorsque décidé Critical / explicitement |
+| INV-08 | Pas de READY sans preuve suffisante |
+| INV-09 | Arrêt en cas de divergence non résolue |
+| INV-10 | Automatiser l’exécution répétable, pas l’arbitrage |
+| INV-11 | Commit / push / PR / merge / suppression branche = gates séparés |
+| INV-12 | L’orchestrateur candidat n’élève jamais ses propres privilèges |
+| INV-13 | Un cycle abandonné ou stoppé reste traçable |
+| INV-14 | Les décisions candidates n’ont aucun effet tant que non validées |
+
+---
+
+## 9. Données fonctionnelles candidates
+
+Informations nécessaires — **sans schéma de stockage** :
+
+| Famille | Exemples |
+|---------|----------|
+| Identité | ID cycle, projet, titre, typologie |
+| Qualification | Profil, blocs, justification Critical |
+| Git | Branche, HEAD, base, status, merge-base |
+| Périmètre | Fichiers autorisés / interdits / protected paths |
+| Gates | Type, statut, décideur, horodatage |
+| Décisions | Contenu, GO/NO-GO, références |
+| Exécution | Contrat, événements, stops |
+| Preuves | Rapports, review packs, SHAs, liens |
+| Verdicts | Proposition GPT, décision Morris |
+| Coûts | Estimations / relevés candidats |
+| Journaux | Horodatages, acteurs, actions |
+
+---
+
+## 10. Sécurité fonctionnelle
+
+Besoins candidats — **aucune technologie choisie** :
+
+| Besoin | Exigence |
+|--------|----------|
+| Authentification opérateur | Identifier l’opérateur avant actions sensibles |
+| Autorisation | Moindre privilège ; lecture ≠ écriture ≠ distante |
+| Chemins | Allowlist / protected paths explicites |
+| Branche / HEAD | Contrôle avant écriture |
+| Confirmations | Confirmation explicite des actions sensibles |
+| Divergence | Stop immédiat si incohérence |
+| Journalisation | Décisions et stops auditables |
+| Secrets | Protection exigée — mécanisme non imposé |
+| Non-répudiation raisonnable | Décisions Morris horodatées et référencées |
+| Réversibilité | Actions automatisées stoppables / traçables |
+| L5 | Impossible en global — pas d’auto-arbitrage total |
+
+---
+
+## 11. UX fonctionnelle non visuelle
+
+Morris doit pouvoir :
+
+| Voir | Décider | Distinguer |
+|------|---------|------------|
+| État du cycle | GO / NO-GO / amendement | Observation vs recommandation vs décision |
+| Branche / HEAD / status | Autoriser commit, push, PR, merge **séparément** | Candidate vs validée |
+| Gates en attente | Stopper / reprendre / abandonner | Preuve manquante vs preuve suffisante |
+| Erreurs et divergences | Clôturer | Action locale vs distante |
+| Review pack / verdict proposé | Choisir le cycle suivant (hors ce document) | Automatisation autorisée vs interdite |
+
+Pas de wireframes, maquettes, Figma, dimensions ni composants UI.
+
+---
+
+## 12. Critères d’acceptation fonctionnels
+
+| ID | Critère |
+|----|---------|
+| AC-01 | Chaque capacité C1–C16 est couverte par au moins un domaine et une FR |
+| AC-02 | Chaque UC1–UC8 est tracé vers au moins un parcours F* (doc 09) |
+| AC-03 | Aucune transition distante sans gate Morris |
+| AC-04 | États et transitions sont explicites et testables |
+| AC-05 | Invariants INV-01…14 sont formulés sans ambiguïté d’autorité |
+| AC-06 | Aucune stack / API / BDD / composant technique n’est validé |
+| AC-07 | POC et MVP restent hors conception (limites / questions ouvertes uniquement) |
+| AC-08 | Les décisions FD-CAND-01…08 sont validées (Morris — 2026-07-18) avec réserves ; aucune D-VAL-12 |
+
+---
+
+## 13. Questions ouvertes
+
+| Zone | Questions |
+|------|-----------|
+| Fonctionnel | Granularité des états ; priorisation des parcours F* pour une première incrémentation |
+| UX | Surfaces exactes d’affichage des gates (non visuelle ici) |
+| Architecture | Frontières Studio / orchestrateur candidat — **cycle futur** |
+| POC | Questions de faisabilité à retenir — **non sélectionnées** |
+| MVP | Sous-ensemble de valeur — **non défini** |
+| Exploitation | Mode multi-opérateur ; distribution — **non décidé** |
+
+---
+
+## 14. Liens
+
+| Document | Usage |
+|----------|-------|
+| [README.md](./README.md) | Navigation |
+| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | C1–C16 / UC1–UC8 |
+| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours et BR |
+| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation conception |
+
+---
+
+*SFIA Studio — conception fonctionnelle VALIDÉE (Morris — 2026-07-18) — Critical — architecture/stack/POC/MVP non décidés — Morris décide.*
diff --git a/projects/sfia-studio/09-functional-flows-and-rules.md b/projects/sfia-studio/09-functional-flows-and-rules.md
new file mode 100644
index 0000000..e4da59c
--- /dev/null
+++ b/projects/sfia-studio/09-functional-flows-and-rules.md
@@ -0,0 +1,353 @@
+# SFIA Studio — Parcours fonctionnels et règles métier
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Projet** | SFIA Studio — projet officiel (G1) |
+| **Document** | `09-functional-flows-and-rules.md` |
+| **Cycle** | 2 — Conception fonctionnelle |
+| **Profil** | Critical |
+| **Baseline** | SFIA v2.6 (Option C) |
+| **Base Git** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
+| **Statut** | `functional-flows-and-rules-validated` |
+| **Autorité** | Morris |
+| **Décision validation** | Morris — **2026-07-18** — parcours et règles **VALIDÉS** |
+| **FD-CAND** | FD-CAND-01…08 **VALIDÉES** (voir `10`) |
+
+> Parcours F1–F12 et règles `BR-*` **validés** comme référentiel fonctionnel. **Pas** d’implémentation technique. Commit / push / PR / ready-for-review / merge restent des autorisations **distinctes**. Pas d’auto-merge, pas de suppression automatique de branche, pas de promotion automatique de candidate, pas de L5 global.
+
+---
+
+## 1. Parcours fonctionnels
+
+### F1 — Lancer un cycle documentaire borné
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Créer et qualifier une intention de cycle DOC borné |
+| Acteur primaire | Morris |
+| Secondaires | GPT, Git |
+| Préconditions | Projet SFIA Studio connu ; Git accessible |
+| Scénario nominal | 1) Saisir intention 2) Pre-check Git 3) Qualification GPT 4) Confirmer profil/blocs 5) État `qualification_prête` ou `attente_gate_morris` |
+| Variantes | Light vs Critical ; reprise d’une intention brouillon |
+| Erreurs | Intention incomplète ; repo inaccessible |
+| Stop | Divergence Git majeure |
+| Gates | Non pour la seule capture ; oui si action sensible suit |
+| Données | Intention, projet, profil, blocs |
+| Preuves | Intention horodatée ; note de qualification |
+| État final | `qualification_prête` |
+| Auto autorisées | Lecture Git ; proposition de qualification |
+| Auto interdites | Décision de lancer une écriture distante |
+
+### F2 — Préparer un prompt Cursor repo-informed
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Produire un contrat Cursor cohérent avec le repo |
+| Acteur primaire | GPT / Morris |
+| Secondaires | Git, Cursor (contrat non encore lancé) |
+| Préconditions | Qualification prête ; sources sélectionnées |
+| Scénario nominal | 1) Pre-check 2) Sources 3) Périmètre fichiers 4) Génération contrat 5) Revue Morris |
+| Variantes | Read-only vs écriture locale documentaire |
+| Erreurs | Sources absentes ; HEAD inattendu |
+| Stop | Working tree incompatible non tracé |
+| Gates | GO avant exécution (F4), pas avant génération |
+| Données | Branche, HEAD, allowlist, interdits |
+| Preuves | Contrat versionné / horodaté |
+| État final | Contrat prêt → `attente_gate_morris` si exécution demandée |
+| Auto autorisées | Lecture ; drafting |
+| Auto interdites | Exécution sans GO |
+
+### F3 — Soumettre et enregistrer un gate Morris
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Présenter un gate et enregistrer GO / NO-GO / amendement |
+| Acteur primaire | Morris |
+| Secondaires | Studio (présentation), Git (trace) |
+| Préconditions | Action sensible identifiée |
+| Scénario nominal | 1) Afficher enjeu 2) Options 3) Décision 4) Ancrage |
+| Variantes | Amendement de périmètre |
+| Erreurs | Gate ambigu ; décision hors Git |
+| Stop | Tentative de contournement |
+| Gates | Le gate lui-même |
+| Données | Type gate, décision, horodatage |
+| Preuves | Décision référencée |
+| État final | `autorisé` ou retour qualification / abandon |
+| Auto autorisées | Affichage ; journalisation |
+| Auto interdites | Auto-GO |
+
+### F4 — Lancer une exécution autorisée
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Démarrer Cursor dans le contrat borné |
+| Acteur primaire | Cursor / orchestrateur candidat |
+| Secondaires | Morris (superviseur), Git |
+| Préconditions | `autorisé` ; contrat cohérent avec HEAD |
+| Scénario nominal | 1) Vérifier HEAD/branche 2) Appliquer allowlist 3) Exécuter 4) Émettre événements |
+| Variantes | Exécution read-only vs écriture locale |
+| Erreurs | Fichier hors périmètre ; commande interdite |
+| Stop | Divergence ; stop manuel ; protected path |
+| Gates | GO préalable (F3) |
+| Données | Contrat, événements |
+| Preuves | Journal d’exécution |
+| État final | `en_exécution` puis `rapport_disponible` ou `stoppé` |
+| Auto autorisées | Exécution bornée |
+| Auto interdites | Élargissement ; push ; merge |
+
+### F5 — Interrompre une exécution
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Stopper immédiatement une exécution |
+| Acteur primaire | Morris (ou stop automatique) |
+| Préconditions | `en_exécution` |
+| Scénario nominal | 1) Signal stop 2) Halt 3) Journal 4) État `stoppé` |
+| Variantes | Stop automatique (divergence) vs manuel |
+| Erreurs | Stop ignoré |
+| Stop | N/A (est le stop) |
+| Gates | Non pour stop de sécurité |
+| Données | Motif, horodatage |
+| Preuves | Événement stop |
+| État final | `stoppé` |
+| Auto autorisées | Stop de sécurité |
+| Auto interdites | Reprise automatique d’une action distante |
+
+### F6 — Collecter un rapport et un review pack
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Rassembler preuves d’exécution |
+| Acteur primaire | Cursor / Studio |
+| Préconditions | Fin nominale ou stop avec artefacts |
+| Scénario nominal | 1) Collecter 2) Contrôler complétude minimale 3) `rapport_disponible` |
+| Variantes | Pack FULL vs Standard |
+| Erreurs | Pack incomplet |
+| Stop | Contenu manquant bloquant |
+| Gates | Selon cycle |
+| Données | Rapport, pack, SHAs |
+| Preuves | Pack lui-même |
+| État final | `rapport_disponible` |
+| Auto autorisées | Collecte / contrôle structurel |
+| Auto interdites | Verdict final |
+
+### F7 — Analyser le pack et proposer un verdict
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Analyse GPT + verdict proposé |
+| Acteur primaire | GPT |
+| Préconditions | Pack disponible |
+| Scénario nominal | 1) Lire pack 2) Challenger 3) Verdict candidat 4) `décision_requise` |
+| Variantes | Revue partielle |
+| Erreurs | Pack illisible ; conclusion inventée |
+| Stop | Contradiction majeure non signalée |
+| Gates | Décision finale = Morris |
+| Données | Verdict proposé |
+| Preuves | Analyse référencée |
+| État final | `décision_requise` |
+| Auto autorisées | Analyse / recommandation |
+| Auto interdites | Décision structurante |
+
+### F8 — Enregistrer une décision Morris
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Ancrer une décision L0 |
+| Acteur primaire | Morris |
+| Préconditions | `décision_requise` ou gate ouvert |
+| Scénario nominal | 1) Choisir 2) Motiver 3) Horodater 4) Référencer preuves 5) Tracer |
+| Variantes | Validation partielle / amendement |
+| Erreurs | Décision non tracée |
+| Stop | Tentative d’effet sans trace |
+| Gates | Oui |
+| Données | Décision, références |
+| Preuves | Enregistrement décision |
+| État final | `clôturé` ou retour cycle |
+| Auto autorisées | Journalisation |
+| Auto interdites | Décider à la place de Morris |
+
+### F9 — Préparer une PR readiness
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Contrôler readiness avant publication distante |
+| Acteur primaire | Cursor / Morris |
+| Préconditions | Diff borné ; preuves |
+| Scénario nominal | 1) Diff check 2) Périmètre 3) Pack 4) Demande GO push/PR séparés |
+| Variantes | Draft PR vs ready-for-review (GO distincts) |
+| Erreurs | Fichiers hors périmètre |
+| Stop | Secret / hors scope |
+| Gates | Push ; création PR ; ready-for-review ; merge = séparés |
+| Données | Diff stat, liste fichiers |
+| Preuves | Pack readiness |
+| État final | `attente_gate_morris` |
+| Auto autorisées | Contrôles locaux |
+| Auto interdites | Push / PR / merge sans GO |
+
+### F10 — Contrôler un post-merge
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Vérifier intégrité post-intégration sur `main` |
+| Acteur primaire | Cursor / GPT |
+| Préconditions | Merge observé |
+| Scénario nominal | 1) Fetch 2) Ascendance 3) Diff périmètre 4) Intégrité blobs 5) Pack 6) Décision clôture si écart gouvernance |
+| Variantes | Écart d’autorisation à qualifier sans réécrire l’histoire |
+| Erreurs | Contenu divergent |
+| Stop | Altération détectée |
+| Gates | Clôture / régularisation = Morris |
+| Données | SHAs, inventaire |
+| Preuves | Pack post-merge |
+| État final | `rapport_disponible` / `décision_requise` |
+| Auto autorisées | Lecture / comparaison |
+| Auto interdites | Rewrite history ; D-VAL inventée |
+
+### F11 — Reprendre un cycle interrompu depuis Git
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Reprendre sans seconde vérité |
+| Acteur primaire | Morris / Cursor |
+| Préconditions | Cycle `stoppé` ; artefacts Git |
+| Scénario nominal | 1) Relire Git 2) Reconstruire état dérivé 3) Confirmer 4) Reprendre ou abandonner |
+| Variantes | Reprise partielle |
+| Erreurs | Artefacts manquants |
+| Stop | Incohérence non résolue |
+| Gates | Reprise d’action sensible = nouveau GO |
+| Données | Références Git, état reconstruit |
+| Preuves | Journal de reprise |
+| État final | État repris cohérent |
+| Auto autorisées | Reconstruction lecture |
+| Auto interdites | Reprise distante silencieuse |
+
+### F12 — Gérer une divergence Git / mémoire / sources
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Détecter et traiter les divergences |
+| Acteur primaire | Studio / Morris |
+| Préconditions | Incohérence détectée |
+| Scénario nominal | 1) Signaler 2) Stopper actions sensibles 3) Présenter écart 4) Décision Morris |
+| Variantes | Mémoire vs Git ; sources vs HEAD |
+| Erreurs | Divergence ignorée |
+| Stop | Oui — par défaut |
+| Gates | Oui pour lever le stop |
+| Données | Description écart |
+| Preuves | Capture d’écart |
+| État final | `stoppé` puis reprise ou abandon |
+| Auto autorisées | Détection / stop |
+| Auto interdites | « Réparer » en silence |
+
+---
+
+## 2. Matrices
+
+### 2.1 Parcours × capacités C1–C16
+
+| | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | C10 | C11 | C12 | C13 | C14 | C15 | C16 |
+|--|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|
+| F1 | ● | ● | ● | ○ | | | | | | | ● | | ○ | | | |
+| F2 | ○ | ● | ● | ● | ● | ○ | | | | | ● | | ○ | | | |
+| F3 | | | | | | ● | | | | ● | | | ● | | | |
+| F4 | | | ● | | ● | ○ | ● | | | | ● | | ● | ● | | |
+| F5 | | | | | | ○ | ● | | | | | | ● | ● | | |
+| F6 | | | | | | | ○ | ● | | | | ○ | | ○ | | |
+| F7 | | | | ○ | | | | ● | ● | | | | | | | |
+| F8 | | | | | | ● | | | ○ | ● | | ● | ● | | | |
+| F9 | | | ● | ● | ○ | ● | ○ | ● | ○ | | ● | | ● | | ○ | |
+| F10 | | | ● | ● | | ○ | | ● | ● | ○ | ● | ● | ● | | | |
+| F11 | ○ | ○ | ● | ● | ○ | ○ | ○ | ○ | | ○ | ● | ● | ● | ● | | |
+| F12 | | | ● | ● | | ● | ● | | | ○ | ● | ○ | ● | ● | | |
+
+Légende : ● primaire · ○ secondaire
+
+### 2.2 Parcours × profils
+
+| Parcours | Light | Standard | Critical | Capitalization |
+|----------|-------|----------|----------|----------------|
+| F1–F2 | ○ | ● | ● | ○ |
+| F3–F5 | ○ | ● | ● | ○ |
+| F6–F8 | ○ | ● | ● | ● |
+| F9–F10 | | ● | ● | ○ |
+| F11–F12 | ○ | ● | ● | ○ |
+
+### 2.3 Parcours × niveaux d’automatisation L0–L5
+
+| Niveau | Sens | Parcours concernés |
+|--------|------|--------------------|
+| L0 | Décision humaine | F3, F8 (cœur) |
+| L1–L2 | Aide / drafting | F1, F2, F7 |
+| L3 | Exécution bornée après GO | F4, F6, F9 (contrôles) |
+| L4 | Orchestration candidate limitée | F4/F5 sous contrat — **non validé techniquement** |
+| L5 | Auto-arbitrage global | **Interdit** |
+
+### 2.4 Parcours × actions sensibles
+
+| Action | Parcours | Gate distinct |
+|--------|----------|---------------|
+| Écriture locale hors allowlist | F4 | Stop |
+| Commit | F9 | GO commit |
+| Push | F9 | GO push |
+| Création PR | F9 | GO PR |
+| Ready-for-review | F9 | GO distinct |
+| Merge | F9 / F10 | GO merge |
+| Suppression branche | — | GO dédié — jamais auto |
+| Force push | — | Interdit / GO exceptionnel explicite |
+
+---
+
+## 3. Règles métier
+
+| ID | Règle |
+|----|-------|
+| BR-001 | Morris est la seule autorité de décision structurante |
+| BR-002 | Git est la source de vérité ; tout état dérivé doit être reconstructible |
+| BR-003 | Hiérarchie des sources : Git `main` / docs projet / méthode / handoff — sans seconde vérité |
+| BR-004 | Le profil est sélectionné explicitement à chaque cycle |
+| BR-005 | Critical est justifié ; jamais implicite |
+| BR-006 | Le périmètre d’exécution est borné (allowlist / denylist) |
+| BR-007 | Les protected paths ne sont jamais modifiés sans GO dédié |
+| BR-008 | Commit, push, PR, ready-for-review et merge sont des autorisations **séparées** |
+| BR-009 | Un review pack est produit selon le niveau décidé pour le cycle |
+| BR-010 | Un handoff Git est publié lorsque requis (Critical / décision explicite) |
+| BR-011 | Les stop conditions priment sur la poursuite automatique |
+| BR-012 | Toute décision structurante est horodatée |
+| BR-013 | Preuve avant READY / clôture nominale |
+| BR-014 | L’historique de cycle est conservé et traçable |
+| BR-015 | Une reprise exige relecture Git et, si sensible, un nouveau GO |
+| BR-016 | Pas d’auto-merge |
+| BR-017 | Pas de suppression automatique de branche |
+| BR-018 | Pas de promotion automatique d’une candidate (FD-CAND / D-VAL candidate) |
+| BR-019 | GPT ne décide pas ; Cursor n’élargit pas ; l’orchestrateur candidat n’autorise pas |
+| BR-020 | Observation ≠ recommandation ≠ décision |
+| BR-021 | POC ≠ MVP ≠ produit cible ≠ industrialisation plateforme |
+| BR-022 | Option C : consommer SFIA v2.6 sans la modifier dans ce produit |
+| BR-023 | Couverture progressive des quinze cycles — aucun cycle auto-activé |
+| BR-024 | macOS = contrainte de preuve éventuelle — pas plateforme produit définitive |
+| BR-025 | Runtime / orchestrateur = candidat non contractuel |
+
+Ces règles ne définissent **aucune** implémentation technique.
+
+### Statut de validation (2026-07-18)
+
+| Élément | Statut |
+|---------|--------|
+| Parcours F1–F12 | **VALIDÉS** comme parcours fonctionnels |
+| Règles BR-001…025 | **VALIDÉES** comme règles métier |
+| Matrices (C1–C16 / profils / L0–L5 / actions sensibles) | **VALIDÉES** comme référentiel fonctionnel |
+| Implémentation technique | **Non décidée** |
+
+---
+
+## 4. Liens
+
+| Document | Usage |
+|----------|-------|
+| [08-functional-design.md](./08-functional-design.md) | Contrat FR / états |
+| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation |
+| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | C1–C16 / UC |
+
+---
+
+*SFIA Studio — parcours et règles VALIDÉS (Morris — 2026-07-18) — Critical — Morris décide.*
diff --git a/projects/sfia-studio/10-functional-decision-pack.md b/projects/sfia-studio/10-functional-decision-pack.md
new file mode 100644
index 0000000..826c29b
--- /dev/null
+++ b/projects/sfia-studio/10-functional-decision-pack.md
@@ -0,0 +1,216 @@
+# SFIA Studio — Decision pack conception fonctionnelle (validation)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Projet** | SFIA Studio — projet officiel (G1) |
+| **Document** | `10-functional-decision-pack.md` |
+| **Cycle** | 2 — Conception fonctionnelle (finalisation documentaire) |
+| **Profil** | Critical |
+| **Baseline** | SFIA v2.6 (Option C) |
+| **Base Git** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
+| **Statut** | `functional-design-validated` |
+| **Destinataire** | Morris (L0) |
+| **Décision** | Validation Morris — **2026-07-18** |
+
+> Pack de **validation**. FD-CAND-01…08 **VALIDÉES**. Identifiants `FD-CAND-*` = locaux au cycle de conception — **ne modifient pas** la numérotation D-VAL. **Pas de D-VAL-12.**
+
+---
+
+## 1. Synthèse du cycle
+
+| Étape | Fait |
+|-------|------|
+| Sélection cycle 2 | Morris — 2026-07-18 |
+| Production `08`–`10` | Cycle conception Critical |
+| Revue handoff | `80987d8…` sur `sfia/review-handoff` |
+| **Validation conception** | **Morris — 2026-07-18 — VALIDÉE** |
+| Intégration Git projet | **Non réalisée** — GO distinct requis |
+| Cycle suivant | **Non sélectionné** |
+
+Livrables validés localement :
+
+- `08-functional-design.md` — contrat fonctionnel ;
+- `09-functional-flows-and-rules.md` — parcours F1–F12 et règles BR ;
+- `10-functional-decision-pack.md` — le présent pack de validation.
+
+Aucune architecture, stack, UX visuelle, backlog, POC ou MVP n’a été lancé. Aucun commit / push / PR projet.
+
+---
+
+## 2. Sources consultées
+
+- Template cycle SFIA v2.6 ; routing guide ; operating model ; rules/guardrails ;
+- Cadrage `01`–`07` sur `main` @ `8f5e8a8…` ;
+- Capacités C1–C16 et UC1–UC8 (`05`) ;
+- Handoff conception `80987d8…` ;
+- Décisions D-VAL-1 à D-VAL-11 (inchangées).
+
+---
+
+## 3. Décision Morris de validation
+
+| Champ | Valeur |
+|-------|--------|
+| Décision | Validation de la conception fonctionnelle SFIA Studio |
+| Autorité | Morris |
+| Date | **2026-07-18** |
+| Objet | Socle fonctionnel `08`–`10` + FD-CAND-01…08 |
+| Effet Git projet | **Aucun** (commit/push/PR interdits dans ce sous-cycle) |
+| Effet architecture / POC / MVP | **Aucun** |
+
+---
+
+## 4. Périmètre validé
+
+- Acteurs et responsabilités fonctionnelles ;
+- Domaines D1–D10 (regroupements fonctionnels) ;
+- Douze états et transitions ;
+- Exigences FR-001…025 ;
+- Règles BR-001…025 ;
+- Parcours F1–F12 et matrices ;
+- Invariants INV-01…14 ;
+- Données fonctionnelles candidates (sans schéma) ;
+- Sécurité fonctionnelle (besoins) ;
+- UX fonctionnelle non visuelle ;
+- Critères AC-01…08 ;
+- Risques RF-01…07 (registre à suivre).
+
+---
+
+## 5. Périmètre explicitement exclu (inchangé)
+
+| Exclu | Statut |
+|-------|--------|
+| Architecture fonctionnelle détaillée / technique | **Non validée** |
+| Stack / API / BDD / microservices / frameworks | **Non décidés** |
+| Figma / maquettes / design system | Non autorisés |
+| Backlog / user stories delivery | Non créés |
+| POC / MVP | **Non lancés / non définis** |
+| Code / tests | Interdits |
+| Commit / push / PR / merge projet | **Interdits** (GO distinct) |
+| Modification SFIA v2.6 / Campus360 | Interdites |
+
+---
+
+## 6. Réserves structurantes
+
+| Réserve | Portée |
+|---------|--------|
+| Domaines D1–D10 | **≠** composants techniques |
+| États / transitions | **≠** implémentation |
+| Données candidates | **≠** schéma technique / BDD |
+| Runtime / orchestrateur | Candidat — non contractuel |
+| Architecture | Non validée |
+| Stack | Non décidée |
+| POC | Non lancé |
+| MVP | Non défini |
+| Backlog | Non lancé |
+| Cycle suivant | Non lancé par cette validation |
+
+---
+
+## 7. FD-CAND-01 à FD-CAND-08 — VALIDÉES
+
+> Note : les identifiants `FD-CAND` sont locaux au cycle de conception fonctionnelle. Leur validation **ne modifie pas** la numérotation D-VAL historique. **Aucune D-VAL-12.**
+
+| ID | Décision | Effet (avec réserves) | Statut |
+|----|----------|------------------------|--------|
+| **FD-CAND-01** | Domaines fonctionnels D1–D10 | Socle domaines validé | **VALIDÉE — Morris — 2026-07-18** |
+| **FD-CAND-02** | Acteurs et responsabilités | Contrat d’autorité stable | **VALIDÉE — Morris — 2026-07-18** |
+| **FD-CAND-03** | États et transitions | Contrat de cycle validé | **VALIDÉE — Morris — 2026-07-18** |
+| **FD-CAND-04** | Invariants INV-01…14 | Garde-fous stables | **VALIDÉE — Morris — 2026-07-18** |
+| **FD-CAND-05** | Parcours F1–F12 | Référentiel parcours validé | **VALIDÉE — Morris — 2026-07-18** |
+| **FD-CAND-06** | Passage à l’architecture fonctionnelle | Option de séquencement privilégiée **retenue** — **cycle non lancé** ; GO de démarrage distinct requis | **VALIDÉE — Morris — 2026-07-18** |
+| **FD-CAND-07** | Cycle UX fonctionnel non visuel avant architecture | Option alternative **retenue** — **non sélectionnée** | **VALIDÉE — Morris — 2026-07-18** |
+| **FD-CAND-08** | Préparer ultérieurement le périmètre POC | Préparation ultérieure autorisable — **POC non lancé** | **VALIDÉE — Morris — 2026-07-18** |
+
+FD-CAND-06 et FD-CAND-07 n’entraînent **aucun** démarrage automatique de cycle. La sélection effective du cycle suivant reste **ouverte**.
+
+---
+
+## 8. Domaines / états / exigences / règles / parcours / invariants
+
+| Élément | Statut |
+|---------|--------|
+| Domaines D1–D10 | **Validés** (fonctionnels ≠ techniques) |
+| États et transitions | **Validés** |
+| FR-001…025 | **Validées** |
+| BR-001…025 | **Validées** |
+| F1–F12 | **Validés** |
+| INV-01…14 | **Validés** |
+
+---
+
+## 9. Risques (registre à suivre)
+
+RF-01…RF-07 demeurent le registre de risques fonctionnels à suivre (voir historique du cycle).
+
+---
+
+## 10. Questions ouvertes (hors validation)
+
+| Zone | Question |
+|------|----------|
+| Fonctionnel | Priorisation des parcours F* pour une première incrémentation |
+| UX | Surfaces d’information minimales avant UI |
+| Architecture | Frontières Studio / orchestrateur — **cycle futur non lancé** |
+| POC | Preuves de faisabilité — **non sélectionnées** |
+| MVP | Sous-ensemble de valeur — **non défini** |
+| Branche | Sort de `project/sfia-studio-pre-framing` |
+
+---
+
+## 11. Décisions encore ouvertes
+
+| Décision | Statut |
+|----------|--------|
+| Autorisation commit / push / PR de la conception | **Non prise** — interdite dans ce sous-cycle |
+| Sélection / lancement du cycle architecture fonctionnelle | **Non sélectionné** (recommandation ci-dessous) |
+| Validation future du contenu d’architecture | Ouverte |
+| Sort des branches (`functional-design` / `pre-framing`) | Ouvert |
+| Contenu du POC | Ouvert — non lancé |
+| Définition / lancement du MVP | Ouvert — non lancé |
+
+---
+
+## 12. Gates
+
+| Gate | Statut |
+|------|--------|
+| Validation Morris conception | **VALIDÉE** — 2026-07-18 |
+| FD-CAND-01…08 | **VALIDÉES** |
+| Finalisation documentaire | **Autorisée** (ce sous-cycle) |
+| GO Git projet (commit/push/PR) | **Interdit** |
+| GO cycle suivant | **Non pris** |
+| Merge / suppression branche | **Interdits** |
+
+---
+
+## 13. Cycle suivant
+
+| Élément | Valeur |
+|---------|--------|
+| Recommandation | Architecture fonctionnelle Critical |
+| Qualification | **RECOMMANDATION — NON SÉLECTIONNÉE** |
+| Lancement | **Non autorisé** par la présente validation |
+
+---
+
+## 14. Verdict documentaire
+
+`SFIA STUDIO FUNCTIONAL DESIGN VALIDATED — DOCUMENTARY FINALIZATION READY FOR MORRIS REVIEW`
+
+---
+
+## 15. Liens
+
+| Document | Usage |
+|----------|-------|
+| [08-functional-design.md](./08-functional-design.md) | Contrat validé |
+| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours / BR validés |
+| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |
+| [README.md](./README.md) | Navigation |
+
+---
+
+*SFIA Studio — conception VALIDÉE (Morris — 2026-07-18) — FD-CAND-01…08 VALIDÉES — pas de D-VAL-12 — Critical — Morris décide.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 16ba571..dc3fa21 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,35 +4,42 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `post-merge-documentary-synchronization-validated` |
+| **Statut** | `functional-design-validated` |
 | **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — synchronisation documentaire post-merge (DOC, Standard) |
-| **Typologie cycle** | DOC — EVOL projet |
-| **Cycle projet** | 1 — Cadrage (sous-cycle : **synchronisation documentaire post-merge**) |
-| **Profil SFIA** | Standard |
+| **Exécuteur** | Cursor — finalisation documentaire conception (DOC, Critical) |
+| **Typologie cycle** | DOC — EVOL produit |
+| **Cycle projet** | 2 — Conception fonctionnelle (**VALIDÉE** — Morris — 2026-07-18) |
+| **Profil SFIA** | Critical |
+| **Branche travail** | `project/sfia-studio-functional-design` (locale — **non poussée**) |
 | **Branche historique** | `project/sfia-studio-pre-framing` (conservée ; intégrée à `main`) |
 | **Chemin** | `projects/sfia-studio/` |
-| **Source de vérité** | Git **`main`** — PR **#207** mergée |
+| **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
+| **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
+| **Architecture fonctionnelle** | **RECOMMANDATION — NON SÉLECTIONNÉE / NON LANCÉE** |
+| **Prochain cycle** | **Non sélectionné** |
 
 ---
 
-## 0. État post-merge (observation)
+## 0. État post-merge (observation) et conception
 
 | Élément | Valeur |
 |---------|--------|
 | PR | [#207](https://github.com/mcleland147/sfia-workspace/pull/207) — **MERGED** |
 | Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
 | Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
-| Socle sur `main` | Huit documents intégrés — intégrité vérifiée |
+| Socle cadrage sur `main` | Huit documents — intégrité vérifiée |
 | Cadrage détaillé | **Validé** (D-VAL-9 / DF-G1) |
 | Cadrage documentaire | **Clôturé** (D-VAL-11) |
 | Synchronisation post-merge | **Validée** (D-VAL-11) |
 | D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
+| Cycle 2 conception | **VALIDÉE** — Morris — 2026-07-18 |
+| FD-CAND-01…08 | **VALIDÉES** |
+| Intégration conception sur `main` | **Non réalisée** — GO Git distinct requis |
 | Prochain cycle | **Non sélectionné** |
-| Branche projet | Conservée ; suppression = décision distincte |
+| Branche projet historique | Conservée ; suppression = décision distincte |
 
-> Le merge PR #207 est un **fait Git** vérifié. D-VAL-10 n’autorisait **pas** le merge. D-VAL-11 **régularise** l’intégration et clôture le cadrage documentaire.
+> Le merge PR #207 est un **fait Git** vérifié. D-VAL-10 n’autorisait **pas** le merge. D-VAL-11 **régularise** l’intégration et clôture le cadrage documentaire. La conception fonctionnelle est **validée** localement ; elle n’est **pas** encore sur `main`.
 
 ---
 
@@ -103,11 +110,12 @@ Pré-cadrage                    ← terminé historiquement
   → versionnement (G7)         ← commit / push / draft PR réalisés (D-VAL-10)
   → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
   → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
-  → conception / architecture / UX  ← non sélectionnés
+  → conception fonctionnelle   ← **VALIDÉE** (Morris — 2026-07-18) — locale, hors main
+  → architecture / UX          ← RECOMMANDATION architecture — **NON SÉLECTIONNÉE**
   → POC → MVP → delivery → industrialisation plateforme
 ```
 
-Aucune stack / architecture validée. Aucun cycle produit suivant démarré.
+Aucune stack / architecture validée. Conception fonctionnelle **validée** (locale). POC / MVP non lancés. Intégration Git conception = GO distinct.
 
 ---
 
@@ -117,7 +125,7 @@ Aucune stack / architecture validée. Aucun cycle produit suivant démarré.
 
 | Document | Rôle |
 |----------|------|
-| [README.md](./README.md) | Identité, état post-merge, décisions, navigation |
+| [README.md](./README.md) | Identité, état, décisions, navigation |
 | [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité et vision (historique) |
 | [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles (historique) |
 | [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage (historique) |
@@ -133,13 +141,23 @@ Aucune stack / architecture validée. Aucun cycle produit suivant démarré.
 
 > **Cadrage détaillé ≠ conception / architecture / UX / backlog / POC / code.**
 
+### Conception fonctionnelle — VALIDÉE
+
+| Document | Rôle |
+|----------|------|
+| [08-functional-design.md](./08-functional-design.md) | Contrat de conception fonctionnelle |
+| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours F1–F12 et règles métier |
+| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation (FD-CAND-01…08 VALIDÉES) |
+
+> Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. ≠ architecture / stack / UX visuelle / backlog / POC / MVP / code. Présence **locale** sur `project/sfia-studio-functional-design` — **pas** encore sur `main`.
+
 ---
 
-## 4. Justification Critical (historique du cadrage)
+## 4. Justification Critical
 
 Le cadrage détaillé a été exécuté en profil Critical : projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation.
 
-Le présent sous-cycle de synchronisation post-merge est en profil **Standard**.
+Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical** : règles de contrôle des actions Git/GPT/Cursor ; gates, permissions, arrêts ; prévention d’auto-arbitrage et de seconde vérité.
 
 ---
 
@@ -147,7 +165,8 @@ Le présent sous-cycle de synchronisation post-merge est en profil **Standard**.
 
 | Principe | Portée |
 |----------|--------|
-| Git `main` = source de vérité | Socle `projects/sfia-studio/` intégré via PR #207 |
+| Git `main` = source de vérité du **cadrage** validé | Socle `01`–`07` intégré via PR #207 / #208 |
+| Conception validée = locale jusqu’à GO Git | Branche `project/sfia-studio-functional-design` |
 | Morris décide | Gates structurants |
 | GPT / Cursor | Qualifient / exécutent — ne décident pas |
 | Option C | Consomme v2.6 (**validé**) |
@@ -176,7 +195,7 @@ Le présent sous-cycle de synchronisation post-merge est en profil **Standard**.
 
 ---
 
-## 7. Décisions D-VAL-1 à D-VAL-11
+## 7. Décisions D-VAL-1 à D-VAL-11 et FD-CAND
 
 | # | Décision | Gate |
 |---|----------|------|
@@ -199,28 +218,32 @@ Le présent sous-cycle de synchronisation post-merge est en profil **Standard**.
 | Statut | **VALIDÉE** |
 | Autorité | Morris |
 | Date | **2026-07-18** |
-| Contexte | Validation après contrôle post-merge et revue de la synchronisation documentaire |
-| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche `project/sfia-studio-pre-framing` conservée jusqu’à décision distincte ; prochain cycle non sélectionné |
+| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche `project/sfia-studio-pre-framing` conservée jusqu’à décision distincte |
+
+### FD-CAND-01…08 — VALIDÉES
+
+Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01…08 — **2026-07-18**. Identifiants locaux au cycle de conception — **pas de D-VAL-12**.
 
 ### Décisions encore ouvertes
 
 | Décision | Statut |
 |----------|--------|
-| Sort de la branche `project/sfia-studio-pre-framing` | Conservée ; décision distincte |
-| Prochain cycle (conception / archi / UX…) | **Non sélectionné** |
-| Stack / architecture / contenu POC / MVP | Non pris |
+| Autorisation commit / push / PR de la conception | **Non prise** |
+| Sélection / lancement architecture fonctionnelle | **Non sélectionné** (recommandation uniquement) |
+| Sort des branches | Conservées ; décisions distinctes |
+| Contenu POC / définition MVP | Non pris |
+| Stack / architecture technique | Non pris |
 
 ---
 
 ## 8. Prochaine décision
 
-1. Revue ChatGPT de la draft PR corrective + handoff (si créée).
-2. Sort de la branche projet (conserver / supprimer en cycle séparé).
-3. Sélection du prochain cycle (non lancée).
+1. Revue ChatGPT du handoff de **finalisation** (validation).
+2. GO distinct éventuel : commit / push / PR de la conception (non autorisé ici).
+3. Sélection du cycle suivant — **RECOMMANDATION :** architecture fonctionnelle Critical — **NON SÉLECTIONNÉE**.
+4. Sort des branches (décisions distinctes).
 
-**Recommandation (≠ décision) :** conception fonctionnelle bornée.
-
-**Verdict documentaire :** `SFIA STUDIO DOCUMENTARY FRAMING CLOSED — POST-MERGE SYNCHRONIZATION VALIDATED`
+**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL DESIGN VALIDATED — DOCUMENTARY FINALIZATION READY FOR MORRIS REVIEW`
 
 ---
 
@@ -230,10 +253,13 @@ Le présent sous-cycle de synchronisation post-merge est en profil **Standard**.
 |---------|--------|
 | Méthode | SFIA v2.6 sur `main` |
 | Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
-| Documents projet | `projects/sfia-studio/` sur **`main`** (PR #207 / `ec21074`) |
+| Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** (PR #207 / #208) |
+| Conception fonctionnelle validée | **Locale** — branche `project/sfia-studio-functional-design` (`08`–`10` + navigation) — **pas encore sur `main`** |
 | Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
 | Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
+> `main` reste la source de vérité du **cadrage**. L’intégration de la conception exige un **GO Git distinct**.
+
 ---
 
-*SFIA Studio — socle intégré sur main (PR #207) — cadrage documentaire clôturé — D-VAL-11 validée — Option C — Morris décide.*
+*SFIA Studio — cadrage clôturé (D-VAL-11) — conception fonctionnelle VALIDÉE (Morris — 2026-07-18) — locale hors main — Option C — Morris décide.*
```

---

## 19. CONTENU COMPLET — 08-functional-design.md

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
| **Base Git** | `origin/main` @ `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Branche travail** | `project/sfia-studio-functional-design` (locale — push interdit) |
| **Statut** | `functional-design-validated` |
| **Autorité** | Morris (L0) |
| **Décision validation** | Morris — **2026-07-18** — conception fonctionnelle **VALIDÉE** |
| **Décisions cadrage** | D-VAL-1 à D-VAL-11 (historiques / validées) |
| **Décisions conception** | FD-CAND-01 à FD-CAND-08 — **VALIDÉES** — Morris — 2026-07-18 |
| **Cycle suivant** | **Non sélectionné** |

> Contrat de conception fonctionnelle **validé**. **Pas** d’architecture technique, stack, API, modèle de données, Figma, backlog, POC ou MVP. Aucune D-VAL-12.

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
| Actions Git projet | Commit / push / PR / merge **non autorisés** par cette validation |

### Effet de la validation

- Le référentiel fonctionnel `08`–`10` devient **socle validé** localement.
- Aucun effet sur architecture, POC, MVP, stack ou actions Git projet.
- L’intégration sur `main` exige un **GO Git distinct**.

### Éléments non décidés

Architecture ; UX/UI visuelle ; stack ; contenu POC ; définition MVP ; commit/push/PR de la conception ; sort des branches ; sélection du cycle suivant.

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

*SFIA Studio — conception fonctionnelle VALIDÉE (Morris — 2026-07-18) — Critical — architecture/stack/POC/MVP non décidés — Morris décide.*

```

---

## 20. CONTENU COMPLET — 09-functional-flows-and-rules.md

```markdown
# SFIA Studio — Parcours fonctionnels et règles métier

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `09-functional-flows-and-rules.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Base Git** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Statut** | `functional-flows-and-rules-validated` |
| **Autorité** | Morris |
| **Décision validation** | Morris — **2026-07-18** — parcours et règles **VALIDÉS** |
| **FD-CAND** | FD-CAND-01…08 **VALIDÉES** (voir `10`) |

> Parcours F1–F12 et règles `BR-*` **validés** comme référentiel fonctionnel. **Pas** d’implémentation technique. Commit / push / PR / ready-for-review / merge restent des autorisations **distinctes**. Pas d’auto-merge, pas de suppression automatique de branche, pas de promotion automatique de candidate, pas de L5 global.

---

## 1. Parcours fonctionnels

### F1 — Lancer un cycle documentaire borné

| Champ | Contenu |
|-------|---------|
| Objectif | Créer et qualifier une intention de cycle DOC borné |
| Acteur primaire | Morris |
| Secondaires | GPT, Git |
| Préconditions | Projet SFIA Studio connu ; Git accessible |
| Scénario nominal | 1) Saisir intention 2) Pre-check Git 3) Qualification GPT 4) Confirmer profil/blocs 5) État `qualification_prête` ou `attente_gate_morris` |
| Variantes | Light vs Critical ; reprise d’une intention brouillon |
| Erreurs | Intention incomplète ; repo inaccessible |
| Stop | Divergence Git majeure |
| Gates | Non pour la seule capture ; oui si action sensible suit |
| Données | Intention, projet, profil, blocs |
| Preuves | Intention horodatée ; note de qualification |
| État final | `qualification_prête` |
| Auto autorisées | Lecture Git ; proposition de qualification |
| Auto interdites | Décision de lancer une écriture distante |

### F2 — Préparer un prompt Cursor repo-informed

| Champ | Contenu |
|-------|---------|
| Objectif | Produire un contrat Cursor cohérent avec le repo |
| Acteur primaire | GPT / Morris |
| Secondaires | Git, Cursor (contrat non encore lancé) |
| Préconditions | Qualification prête ; sources sélectionnées |
| Scénario nominal | 1) Pre-check 2) Sources 3) Périmètre fichiers 4) Génération contrat 5) Revue Morris |
| Variantes | Read-only vs écriture locale documentaire |
| Erreurs | Sources absentes ; HEAD inattendu |
| Stop | Working tree incompatible non tracé |
| Gates | GO avant exécution (F4), pas avant génération |
| Données | Branche, HEAD, allowlist, interdits |
| Preuves | Contrat versionné / horodaté |
| État final | Contrat prêt → `attente_gate_morris` si exécution demandée |
| Auto autorisées | Lecture ; drafting |
| Auto interdites | Exécution sans GO |

### F3 — Soumettre et enregistrer un gate Morris

| Champ | Contenu |
|-------|---------|
| Objectif | Présenter un gate et enregistrer GO / NO-GO / amendement |
| Acteur primaire | Morris |
| Secondaires | Studio (présentation), Git (trace) |
| Préconditions | Action sensible identifiée |
| Scénario nominal | 1) Afficher enjeu 2) Options 3) Décision 4) Ancrage |
| Variantes | Amendement de périmètre |
| Erreurs | Gate ambigu ; décision hors Git |
| Stop | Tentative de contournement |
| Gates | Le gate lui-même |
| Données | Type gate, décision, horodatage |
| Preuves | Décision référencée |
| État final | `autorisé` ou retour qualification / abandon |
| Auto autorisées | Affichage ; journalisation |
| Auto interdites | Auto-GO |

### F4 — Lancer une exécution autorisée

| Champ | Contenu |
|-------|---------|
| Objectif | Démarrer Cursor dans le contrat borné |
| Acteur primaire | Cursor / orchestrateur candidat |
| Secondaires | Morris (superviseur), Git |
| Préconditions | `autorisé` ; contrat cohérent avec HEAD |
| Scénario nominal | 1) Vérifier HEAD/branche 2) Appliquer allowlist 3) Exécuter 4) Émettre événements |
| Variantes | Exécution read-only vs écriture locale |
| Erreurs | Fichier hors périmètre ; commande interdite |
| Stop | Divergence ; stop manuel ; protected path |
| Gates | GO préalable (F3) |
| Données | Contrat, événements |
| Preuves | Journal d’exécution |
| État final | `en_exécution` puis `rapport_disponible` ou `stoppé` |
| Auto autorisées | Exécution bornée |
| Auto interdites | Élargissement ; push ; merge |

### F5 — Interrompre une exécution

| Champ | Contenu |
|-------|---------|
| Objectif | Stopper immédiatement une exécution |
| Acteur primaire | Morris (ou stop automatique) |
| Préconditions | `en_exécution` |
| Scénario nominal | 1) Signal stop 2) Halt 3) Journal 4) État `stoppé` |
| Variantes | Stop automatique (divergence) vs manuel |
| Erreurs | Stop ignoré |
| Stop | N/A (est le stop) |
| Gates | Non pour stop de sécurité |
| Données | Motif, horodatage |
| Preuves | Événement stop |
| État final | `stoppé` |
| Auto autorisées | Stop de sécurité |
| Auto interdites | Reprise automatique d’une action distante |

### F6 — Collecter un rapport et un review pack

| Champ | Contenu |
|-------|---------|
| Objectif | Rassembler preuves d’exécution |
| Acteur primaire | Cursor / Studio |
| Préconditions | Fin nominale ou stop avec artefacts |
| Scénario nominal | 1) Collecter 2) Contrôler complétude minimale 3) `rapport_disponible` |
| Variantes | Pack FULL vs Standard |
| Erreurs | Pack incomplet |
| Stop | Contenu manquant bloquant |
| Gates | Selon cycle |
| Données | Rapport, pack, SHAs |
| Preuves | Pack lui-même |
| État final | `rapport_disponible` |
| Auto autorisées | Collecte / contrôle structurel |
| Auto interdites | Verdict final |

### F7 — Analyser le pack et proposer un verdict

| Champ | Contenu |
|-------|---------|
| Objectif | Analyse GPT + verdict proposé |
| Acteur primaire | GPT |
| Préconditions | Pack disponible |
| Scénario nominal | 1) Lire pack 2) Challenger 3) Verdict candidat 4) `décision_requise` |
| Variantes | Revue partielle |
| Erreurs | Pack illisible ; conclusion inventée |
| Stop | Contradiction majeure non signalée |
| Gates | Décision finale = Morris |
| Données | Verdict proposé |
| Preuves | Analyse référencée |
| État final | `décision_requise` |
| Auto autorisées | Analyse / recommandation |
| Auto interdites | Décision structurante |

### F8 — Enregistrer une décision Morris

| Champ | Contenu |
|-------|---------|
| Objectif | Ancrer une décision L0 |
| Acteur primaire | Morris |
| Préconditions | `décision_requise` ou gate ouvert |
| Scénario nominal | 1) Choisir 2) Motiver 3) Horodater 4) Référencer preuves 5) Tracer |
| Variantes | Validation partielle / amendement |
| Erreurs | Décision non tracée |
| Stop | Tentative d’effet sans trace |
| Gates | Oui |
| Données | Décision, références |
| Preuves | Enregistrement décision |
| État final | `clôturé` ou retour cycle |
| Auto autorisées | Journalisation |
| Auto interdites | Décider à la place de Morris |

### F9 — Préparer une PR readiness

| Champ | Contenu |
|-------|---------|
| Objectif | Contrôler readiness avant publication distante |
| Acteur primaire | Cursor / Morris |
| Préconditions | Diff borné ; preuves |
| Scénario nominal | 1) Diff check 2) Périmètre 3) Pack 4) Demande GO push/PR séparés |
| Variantes | Draft PR vs ready-for-review (GO distincts) |
| Erreurs | Fichiers hors périmètre |
| Stop | Secret / hors scope |
| Gates | Push ; création PR ; ready-for-review ; merge = séparés |
| Données | Diff stat, liste fichiers |
| Preuves | Pack readiness |
| État final | `attente_gate_morris` |
| Auto autorisées | Contrôles locaux |
| Auto interdites | Push / PR / merge sans GO |

### F10 — Contrôler un post-merge

| Champ | Contenu |
|-------|---------|
| Objectif | Vérifier intégrité post-intégration sur `main` |
| Acteur primaire | Cursor / GPT |
| Préconditions | Merge observé |
| Scénario nominal | 1) Fetch 2) Ascendance 3) Diff périmètre 4) Intégrité blobs 5) Pack 6) Décision clôture si écart gouvernance |
| Variantes | Écart d’autorisation à qualifier sans réécrire l’histoire |
| Erreurs | Contenu divergent |
| Stop | Altération détectée |
| Gates | Clôture / régularisation = Morris |
| Données | SHAs, inventaire |
| Preuves | Pack post-merge |
| État final | `rapport_disponible` / `décision_requise` |
| Auto autorisées | Lecture / comparaison |
| Auto interdites | Rewrite history ; D-VAL inventée |

### F11 — Reprendre un cycle interrompu depuis Git

| Champ | Contenu |
|-------|---------|
| Objectif | Reprendre sans seconde vérité |
| Acteur primaire | Morris / Cursor |
| Préconditions | Cycle `stoppé` ; artefacts Git |
| Scénario nominal | 1) Relire Git 2) Reconstruire état dérivé 3) Confirmer 4) Reprendre ou abandonner |
| Variantes | Reprise partielle |
| Erreurs | Artefacts manquants |
| Stop | Incohérence non résolue |
| Gates | Reprise d’action sensible = nouveau GO |
| Données | Références Git, état reconstruit |
| Preuves | Journal de reprise |
| État final | État repris cohérent |
| Auto autorisées | Reconstruction lecture |
| Auto interdites | Reprise distante silencieuse |

### F12 — Gérer une divergence Git / mémoire / sources

| Champ | Contenu |
|-------|---------|
| Objectif | Détecter et traiter les divergences |
| Acteur primaire | Studio / Morris |
| Préconditions | Incohérence détectée |
| Scénario nominal | 1) Signaler 2) Stopper actions sensibles 3) Présenter écart 4) Décision Morris |
| Variantes | Mémoire vs Git ; sources vs HEAD |
| Erreurs | Divergence ignorée |
| Stop | Oui — par défaut |
| Gates | Oui pour lever le stop |
| Données | Description écart |
| Preuves | Capture d’écart |
| État final | `stoppé` puis reprise ou abandon |
| Auto autorisées | Détection / stop |
| Auto interdites | « Réparer » en silence |

---

## 2. Matrices

### 2.1 Parcours × capacités C1–C16

| | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | C10 | C11 | C12 | C13 | C14 | C15 | C16 |
|--|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|
| F1 | ● | ● | ● | ○ | | | | | | | ● | | ○ | | | |
| F2 | ○ | ● | ● | ● | ● | ○ | | | | | ● | | ○ | | | |
| F3 | | | | | | ● | | | | ● | | | ● | | | |
| F4 | | | ● | | ● | ○ | ● | | | | ● | | ● | ● | | |
| F5 | | | | | | ○ | ● | | | | | | ● | ● | | |
| F6 | | | | | | | ○ | ● | | | | ○ | | ○ | | |
| F7 | | | | ○ | | | | ● | ● | | | | | | | |
| F8 | | | | | | ● | | | ○ | ● | | ● | ● | | | |
| F9 | | | ● | ● | ○ | ● | ○ | ● | ○ | | ● | | ● | | ○ | |
| F10 | | | ● | ● | | ○ | | ● | ● | ○ | ● | ● | ● | | | |
| F11 | ○ | ○ | ● | ● | ○ | ○ | ○ | ○ | | ○ | ● | ● | ● | ● | | |
| F12 | | | ● | ● | | ● | ● | | | ○ | ● | ○ | ● | ● | | |

Légende : ● primaire · ○ secondaire

### 2.2 Parcours × profils

| Parcours | Light | Standard | Critical | Capitalization |
|----------|-------|----------|----------|----------------|
| F1–F2 | ○ | ● | ● | ○ |
| F3–F5 | ○ | ● | ● | ○ |
| F6–F8 | ○ | ● | ● | ● |
| F9–F10 | | ● | ● | ○ |
| F11–F12 | ○ | ● | ● | ○ |

### 2.3 Parcours × niveaux d’automatisation L0–L5

| Niveau | Sens | Parcours concernés |
|--------|------|--------------------|
| L0 | Décision humaine | F3, F8 (cœur) |
| L1–L2 | Aide / drafting | F1, F2, F7 |
| L3 | Exécution bornée après GO | F4, F6, F9 (contrôles) |
| L4 | Orchestration candidate limitée | F4/F5 sous contrat — **non validé techniquement** |
| L5 | Auto-arbitrage global | **Interdit** |

### 2.4 Parcours × actions sensibles

| Action | Parcours | Gate distinct |
|--------|----------|---------------|
| Écriture locale hors allowlist | F4 | Stop |
| Commit | F9 | GO commit |
| Push | F9 | GO push |
| Création PR | F9 | GO PR |
| Ready-for-review | F9 | GO distinct |
| Merge | F9 / F10 | GO merge |
| Suppression branche | — | GO dédié — jamais auto |
| Force push | — | Interdit / GO exceptionnel explicite |

---

## 3. Règles métier

| ID | Règle |
|----|-------|
| BR-001 | Morris est la seule autorité de décision structurante |
| BR-002 | Git est la source de vérité ; tout état dérivé doit être reconstructible |
| BR-003 | Hiérarchie des sources : Git `main` / docs projet / méthode / handoff — sans seconde vérité |
| BR-004 | Le profil est sélectionné explicitement à chaque cycle |
| BR-005 | Critical est justifié ; jamais implicite |
| BR-006 | Le périmètre d’exécution est borné (allowlist / denylist) |
| BR-007 | Les protected paths ne sont jamais modifiés sans GO dédié |
| BR-008 | Commit, push, PR, ready-for-review et merge sont des autorisations **séparées** |
| BR-009 | Un review pack est produit selon le niveau décidé pour le cycle |
| BR-010 | Un handoff Git est publié lorsque requis (Critical / décision explicite) |
| BR-011 | Les stop conditions priment sur la poursuite automatique |
| BR-012 | Toute décision structurante est horodatée |
| BR-013 | Preuve avant READY / clôture nominale |
| BR-014 | L’historique de cycle est conservé et traçable |
| BR-015 | Une reprise exige relecture Git et, si sensible, un nouveau GO |
| BR-016 | Pas d’auto-merge |
| BR-017 | Pas de suppression automatique de branche |
| BR-018 | Pas de promotion automatique d’une candidate (FD-CAND / D-VAL candidate) |
| BR-019 | GPT ne décide pas ; Cursor n’élargit pas ; l’orchestrateur candidat n’autorise pas |
| BR-020 | Observation ≠ recommandation ≠ décision |
| BR-021 | POC ≠ MVP ≠ produit cible ≠ industrialisation plateforme |
| BR-022 | Option C : consommer SFIA v2.6 sans la modifier dans ce produit |
| BR-023 | Couverture progressive des quinze cycles — aucun cycle auto-activé |
| BR-024 | macOS = contrainte de preuve éventuelle — pas plateforme produit définitive |
| BR-025 | Runtime / orchestrateur = candidat non contractuel |

Ces règles ne définissent **aucune** implémentation technique.

### Statut de validation (2026-07-18)

| Élément | Statut |
|---------|--------|
| Parcours F1–F12 | **VALIDÉS** comme parcours fonctionnels |
| Règles BR-001…025 | **VALIDÉES** comme règles métier |
| Matrices (C1–C16 / profils / L0–L5 / actions sensibles) | **VALIDÉES** comme référentiel fonctionnel |
| Implémentation technique | **Non décidée** |

---

## 4. Liens

| Document | Usage |
|----------|-------|
| [08-functional-design.md](./08-functional-design.md) | Contrat FR / états |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | C1–C16 / UC |

---

*SFIA Studio — parcours et règles VALIDÉS (Morris — 2026-07-18) — Critical — Morris décide.*

```

---

## 21. CONTENU COMPLET — 10-functional-decision-pack.md

```markdown
# SFIA Studio — Decision pack conception fonctionnelle (validation)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `10-functional-decision-pack.md` |
| **Cycle** | 2 — Conception fonctionnelle (finalisation documentaire) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 (Option C) |
| **Base Git** | `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a` |
| **Statut** | `functional-design-validated` |
| **Destinataire** | Morris (L0) |
| **Décision** | Validation Morris — **2026-07-18** |

> Pack de **validation**. FD-CAND-01…08 **VALIDÉES**. Identifiants `FD-CAND-*` = locaux au cycle de conception — **ne modifient pas** la numérotation D-VAL. **Pas de D-VAL-12.**

---

## 1. Synthèse du cycle

| Étape | Fait |
|-------|------|
| Sélection cycle 2 | Morris — 2026-07-18 |
| Production `08`–`10` | Cycle conception Critical |
| Revue handoff | `80987d8…` sur `sfia/review-handoff` |
| **Validation conception** | **Morris — 2026-07-18 — VALIDÉE** |
| Intégration Git projet | **Non réalisée** — GO distinct requis |
| Cycle suivant | **Non sélectionné** |

Livrables validés localement :

- `08-functional-design.md` — contrat fonctionnel ;
- `09-functional-flows-and-rules.md` — parcours F1–F12 et règles BR ;
- `10-functional-decision-pack.md` — le présent pack de validation.

Aucune architecture, stack, UX visuelle, backlog, POC ou MVP n’a été lancé. Aucun commit / push / PR projet.

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
| Effet Git projet | **Aucun** (commit/push/PR interdits dans ce sous-cycle) |
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
| Code / tests | Interdits |
| Commit / push / PR / merge projet | **Interdits** (GO distinct) |
| Modification SFIA v2.6 / Campus360 | Interdites |

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
| Autorisation commit / push / PR de la conception | **Non prise** — interdite dans ce sous-cycle |
| Sélection / lancement du cycle architecture fonctionnelle | **Non sélectionné** (recommandation ci-dessous) |
| Validation future du contenu d’architecture | Ouverte |
| Sort des branches (`functional-design` / `pre-framing`) | Ouvert |
| Contenu du POC | Ouvert — non lancé |
| Définition / lancement du MVP | Ouvert — non lancé |

---

## 12. Gates

| Gate | Statut |
|------|--------|
| Validation Morris conception | **VALIDÉE** — 2026-07-18 |
| FD-CAND-01…08 | **VALIDÉES** |
| Finalisation documentaire | **Autorisée** (ce sous-cycle) |
| GO Git projet (commit/push/PR) | **Interdit** |
| GO cycle suivant | **Non pris** |
| Merge / suppression branche | **Interdits** |

---

## 13. Cycle suivant

| Élément | Valeur |
|---------|--------|
| Recommandation | Architecture fonctionnelle Critical |
| Qualification | **RECOMMANDATION — NON SÉLECTIONNÉE** |
| Lancement | **Non autorisé** par la présente validation |

---

## 14. Verdict documentaire

`SFIA STUDIO FUNCTIONAL DESIGN VALIDATED — DOCUMENTARY FINALIZATION READY FOR MORRIS REVIEW`

---

## 15. Liens

| Document | Usage |
|----------|-------|
| [08-functional-design.md](./08-functional-design.md) | Contrat validé |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours / BR validés |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |
| [README.md](./README.md) | Navigation |

---

*SFIA Studio — conception VALIDÉE (Morris — 2026-07-18) — FD-CAND-01…08 VALIDÉES — pas de D-VAL-12 — Critical — Morris décide.*

```

---

## 22. CONTENU COMPLET — README.md (HEAD)

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `functional-design-validated` |
| **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — finalisation documentaire conception (DOC, Critical) |
| **Typologie cycle** | DOC — EVOL produit |
| **Cycle projet** | 2 — Conception fonctionnelle (**VALIDÉE** — Morris — 2026-07-18) |
| **Profil SFIA** | Critical |
| **Branche travail** | `project/sfia-studio-functional-design` (locale — **non poussée**) |
| **Branche historique** | `project/sfia-studio-pre-framing` (conservée ; intégrée à `main`) |
| **Chemin** | `projects/sfia-studio/` |
| **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
| **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
| **Architecture fonctionnelle** | **RECOMMANDATION — NON SÉLECTIONNÉE / NON LANCÉE** |
| **Prochain cycle** | **Non sélectionné** |

---

## 0. État post-merge (observation) et conception

| Élément | Valeur |
|---------|--------|
| PR | [#207](https://github.com/mcleland147/sfia-workspace/pull/207) — **MERGED** |
| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
| Socle cadrage sur `main` | Huit documents — intégrité vérifiée |
| Cadrage détaillé | **Validé** (D-VAL-9 / DF-G1) |
| Cadrage documentaire | **Clôturé** (D-VAL-11) |
| Synchronisation post-merge | **Validée** (D-VAL-11) |
| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
| Cycle 2 conception | **VALIDÉE** — Morris — 2026-07-18 |
| FD-CAND-01…08 | **VALIDÉES** |
| Intégration conception sur `main` | **Non réalisée** — GO Git distinct requis |
| Prochain cycle | **Non sélectionné** |
| Branche projet historique | Conservée ; suppression = décision distincte |

> Le merge PR #207 est un **fait Git** vérifié. D-VAL-10 n’autorisait **pas** le merge. D-VAL-11 **régularise** l’intégration et clôture le cadrage documentaire. La conception fonctionnelle est **validée** localement ; elle n’est **pas** encore sur `main`.

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
  → conception fonctionnelle   ← **VALIDÉE** (Morris — 2026-07-18) — locale, hors main
  → architecture / UX          ← RECOMMANDATION architecture — **NON SÉLECTIONNÉE**
  → POC → MVP → delivery → industrialisation plateforme
```

Aucune stack / architecture validée. Conception fonctionnelle **validée** (locale). POC / MVP non lancés. Intégration Git conception = GO distinct.

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

> Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. ≠ architecture / stack / UX visuelle / backlog / POC / MVP / code. Présence **locale** sur `project/sfia-studio-functional-design` — **pas** encore sur `main`.

---

## 4. Justification Critical

Le cadrage détaillé a été exécuté en profil Critical : projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation.

Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical** : règles de contrôle des actions Git/GPT/Cursor ; gates, permissions, arrêts ; prévention d’auto-arbitrage et de seconde vérité.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| Git `main` = source de vérité du **cadrage** validé | Socle `01`–`07` intégré via PR #207 / #208 |
| Conception validée = locale jusqu’à GO Git | Branche `project/sfia-studio-functional-design` |
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
| Autorisation commit / push / PR de la conception | **Non prise** |
| Sélection / lancement architecture fonctionnelle | **Non sélectionné** (recommandation uniquement) |
| Sort des branches | Conservées ; décisions distinctes |
| Contenu POC / définition MVP | Non pris |
| Stack / architecture technique | Non pris |

---

## 8. Prochaine décision

1. Revue ChatGPT du handoff de **finalisation** (validation).
2. GO distinct éventuel : commit / push / PR de la conception (non autorisé ici).
3. Sélection du cycle suivant — **RECOMMANDATION :** architecture fonctionnelle Critical — **NON SÉLECTIONNÉE**.
4. Sort des branches (décisions distinctes).

**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL DESIGN VALIDATED — DOCUMENTARY FINALIZATION READY FOR MORRIS REVIEW`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 sur `main` |
| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
| Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** (PR #207 / #208) |
| Conception fonctionnelle validée | **Locale** — branche `project/sfia-studio-functional-design` (`08`–`10` + navigation) — **pas encore sur `main`** |
| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
| Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |

> `main` reste la source de vérité du **cadrage**. L’intégration de la conception exige un **GO Git distinct**.

---

*SFIA Studio — cadrage clôturé (D-VAL-11) — conception fonctionnelle VALIDÉE (Morris — 2026-07-18) — locale hors main — Option C — Morris décide.*

```

---

## 23. CONTENU COMPLET — 07-product-trajectory-and-decision-pack.md (HEAD)

```markdown
# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
| **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
| **Baseline** | SFIA v2.6 (Option C) |
| **Statut** | `functional-design-validated` (trajectoire) ; cadrage documentaire **clôturé** |
| **Décisions** | D-VAL-1 à D-VAL-11 (inchangées) ; FD-CAND-01…08 **VALIDÉES** |
| **Destinataire** | Morris |
| **Source de vérité** | Git `main` — base `8f5e8a8…` (cadrage) ; conception validée **locale** |

> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception fonctionnelle **VALIDÉE** — Morris — 2026-07-18. **Pas de D-VAL-12.**

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
| Cycle 2 conception | **Sélectionnée, produite, revue et VALIDÉE** — Morris — 2026-07-18 |
| FD-CAND-01…08 | **VALIDÉES** — Morris — 2026-07-18 |
| Intégration Git conception | **Non réalisée** — GO distinct requis |
| Prochain cycle après conception | **Non sélectionné** |

> Le merge est un fait Git. D-VAL-11 le régularise et clôture le cadrage documentaire.

### Trace factuelle — cycle 2 (conception fonctionnelle)

| Champ | Valeur |
|-------|--------|
| Sélection / lancement | **2026-07-18** — décision Morris |
| Production et revue | Documents `08`–`10` ; handoff `80987d8…` |
| **Validation Morris** | **2026-07-18** — conception **VALIDÉE** |
| FD-CAND-01…08 | **VALIDÉES** |
| Profil | Critical |
| Statut conception | `functional-design-validated` |
| Intégration Git | **Non réalisée** (commit/push/PR interdits dans ce sous-cycle) |
| Exclu / réserve | Architecture non validée ; UX visuelle non lancée ; stack non décidée ; POC non lancé ; MVP non défini ; code interdit |
| D-VAL-1…11 | **Inchangées** — **aucune D-VAL-12** |

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
  → conception fonctionnelle        ← **VALIDÉE** Morris — 2026-07-18 — locale hors main
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
- Merge = fait Git ; régularisation et clôture = **D-VAL-11 validée**.
- Aucune stack / architecture validée.
- Conception fonctionnelle **VALIDÉE** localement ; **pas** intégrée sur `main` ; aucune architecture / UX visuelle / POC / MVP lancée.
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
| Statut | **VALIDÉE** — Morris — 2026-07-18 |
| Objectif | Préciser comportements et règles métier des capacités |
| Livrables | `08` / `09` / `10` — **validés** (locaux) |
| Profil | Critical |
| FD-CAND-01…08 | **VALIDÉES** |
| Intégration Git | Non réalisée — GO distinct |
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
| D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **Non prise** — interdite ici |
| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception validée ; suite **non sélectionnée** |
| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
| D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
| D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
| D-NEXT-8 | Stratégie secrets / permissions | Morris / sécurité | Non pris |
| D-NEXT-9 | Merge PR #207 | Observation Git + D-VAL-11 | **Réalisé / régularisé** (`ec21074`) |
| D-NEXT-10 | **D-VAL-11** — clôture cadrage documentaire | Morris | **VALIDÉE** — 2026-07-18 |
| D-NEXT-11 | Sort de la branche projet historique | Morris | Conservée ; décision distincte |
| D-NEXT-12 | Sort de `project/sfia-studio-functional-design` | Morris | Locale ; non poussée ; décision distincte |

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

**Conception fonctionnelle bornée** (Option 1) a été **sélectionnée, produite et VALIDÉE** le 2026-07-18.

**Prochain cycle recommandé :** architecture fonctionnelle Critical — **RECOMMANDATION — NON SÉLECTIONNÉE**.

Morris reste libre de choisir Option 2, Option 3 ou un autre cycle. **Aucun** cycle architecture / UX visuelle / POC / MVP n’est lancé. **Aucun** commit/push/PR projet autorisé ici.

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

Les gates DF-G4+ **ne sont pas** validés. Validation conception (FD-CAND-01…08) : **VALIDÉE** — 2026-07-18. GO Git conception : **non pris**.

---

## 8. Questions Morris

1. Autorisez-vous commit / push / PR de la conception (GO Git distinct) ?
2. Sélectionnez-vous le cycle suivant (architecture fonctionnelle Critical recommandée — **non sélectionnée**) ?
3. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
4. Quel sort pour `project/sfia-studio-functional-design` ?
5. Quel niveau d’architecture minimale avant POC ?
6. Quelles priorités NFR avant le POC ?

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
| Cycle conception fonctionnelle | **VALIDÉ** — locale hors main |
| FD-CAND-01…08 | **VALIDÉES** |
| Prochain cycle après conception | **Non sélectionné** |

---

## 10. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage détaillé | **VALIDÉ** (D-VAL-9) |
| Intégration cadrage `main` | **Oui** (PR #207 / #208 ; base `8f5e8a8…`) |
| Synchronisation post-merge | **VALIDÉE** (D-VAL-11) |
| Cadrage documentaire | **Clôturé** |
| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
| Conception fonctionnelle | **VALIDÉE** — Morris — 2026-07-18 — **locale** |
| FD-CAND-01…08 | **VALIDÉES** |
| Intégration conception `main` | **Non** — GO distinct |
| Ready for architecture / POC / MVP | **Non** |

**Verdict :** `SFIA STUDIO FUNCTIONAL DESIGN VALIDATED — DOCUMENTARY FINALIZATION READY FOR MORRIS REVIEW`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Gates / D-VAL / état |
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé** |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours **validés** |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation** |

---

*SFIA Studio — cadrage clôturé (D-VAL-11) — conception fonctionnelle VALIDÉE (Morris — 2026-07-18) — locale hors main — Morris décide.*

```

---

## 24. Instruction ChatGPT

Lire depuis Git :

- repository : `mcleland147/sfia-workspace`
- PR : **#209**
- ref handoff : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- base main : `8f5e8a853cfa61ce9f77d6754bd8c1ef78da603a`

Analyser : conformité des cinq fichiers ; conception validée ; FD-CAND-01…08 ; absence D-VAL-12 ; diff vs main ; absence hors périmètre ; architecture/stack/POC/MVP ; readiness draft → ready-for-review ; readiness de merge **sans merger** ; cycle suivant recommandé **sans le lancer**.

---

*Review pack FULL — PR readiness #209 — Critical — 2026-07-18 18:03:22 CEST*
