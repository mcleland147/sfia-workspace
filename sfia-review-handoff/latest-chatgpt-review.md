# Review pack FULL — SFIA Studio — Amendements architecture fonctionnelle

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-18 20:31:26 CEST |
| **Repository** | `/Users/morris/Projects/sfia-workspace` (`mcleland147/sfia-workspace`) |
| **Branche** | `project/sfia-studio-functional-architecture` |
| **HEAD / base** | `e9d819368a6224259e8ba0e942d53effb81e191a` = `origin/main` |
| **Cycle** | 3 — Architecture fonctionnelle — sous-cycle amendements Morris |
| **Profil** | Critical |
| **Statut docs** | `functional-architecture-amended-review` |
| **Handoff revue précédent** | `fe0e580055a05ee1f305a7627618032e0160f8e5` |

---

## 1. État Git initial

Pré-check OK : branche architecture ; HEAD/main `e9d8193…` ; staged vide ; `08`–`10` inchangés ; cinq fichiers architecture présents ; hors périmètre intact.

### git status --short

M projects/campus360/README.md
 M projects/sfia-studio/07-product-trajectory-and-decision-pack.md
 M projects/sfia-studio/README.md
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/04-detailed-framing.md
?? projects/campus360/05-mvp-increment-trajectory.md
?? projects/campus360/06-governance-and-stakeholders.md
?? projects/campus360/07-risks-dependencies-and-gates.md
?? projects/sfia-studio/11-functional-architecture.md
?? projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
?? projects/sfia-studio/13-functional-architecture-decision-pack.md
?? sfia-review-handoff/

---

## 2. Décision Morris

Morris **valide** : AF-Option C ; AF-CAND-01…10 ; AF-CAND-12 ; rattachement D10 ; renommage AF-Option ; scission AF-CAND-11.

Morris **n’a pas validé** : sélection prochain cycle ; lancement UX/UI / tech / POC / MVP ; sort des branches.

Morris **autorise** : modifications documentaires locales autorisées ; review pack FULL ; handoff Git.

Morris **n’autorise pas** : modif `08`–`10` ; stack/tech ; code ; autre cycle ; commit/push/PR projet ; D-VAL-12.

---

## 3. Justification Critical

Frontières d’autorité ; statut de décisions AF ; distinction recommandation vs sélection ; collision sémantique Option C méthode ; pas de tech implicite.

---

## 4. Sources

Méthode (main) ; locaux README/`07`/`11`/`12`/`13` ; baseline `08`–`10` ; handoff `fe0e580…`.

---

## 5. Périmètre

Modifiés/créés autorisés : README, `07`, `11`, `12`, `13`. Protégés : `01`–`06`, `08`–`10`, method, campus360.

---

## 6. État avant amendements (snapshot)

| Fichier | SHA-256 avant |
|---------|---------------|
| README | `269e38a08be0d302bd5953d8804461c54ca813159494529fa277cb1bb203b5c2` |
| 07 | `5bb05cadbac39a96063ddf0c2939dd7cb4eb89d9d1350d834c969da7723c9a63` |
| 11 | `71d1452539429e7410b2ef57f8598dc3b095378cf864ae9aa9960cc0a83734b5` |
| 12 | `748239556d1fd384204722a17ab76f87ba440a33891562f2764dfe6d27231426` |
| 13 | `05641e8d46451f99734b863ff8e5673049404d351e28571c475468a9b6cdbba3` |

D10 avant : FB-11 / FR-024-025 / flux `—`. AF-CAND-11 mélangée. Options nommées Option A/B/C.

---

## 7. Amendement 1 — D10

**Après :** D10 → FB-11 → **AF-01 / AF-15** → FR-024 / FR-025.

Justification : AF-01 consomme paramètres admin pour qualification ; AF-15 consultation opérationnelle read-only ; aucun nouveau flux.

---

## 8. Amendement 2 — AF-Option

Option A/B/C (architecture) → **AF-Option A/B/C**. Option C méthode SFIA v2.6 préservée. **AF-Option C VALIDÉE**.

---

## 9. Amendement 3 — AF-CAND-11A / 11B

| ID | Statut | Contenu |
|----|--------|---------|
| AF-CAND-11A | **VALIDÉE** (recommandation) | UX/UI → tech → POC → MVP |
| AF-CAND-11B | **NON DÉCIDÉE** | Sélection effective du prochain cycle |

AF-CAND-01…10 et 12 **VALIDÉES**. Pas de renumérotation de 12. Pas de D-VAL-12.

---

## 10. Décisions validées / non décidées

**Validées :** AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12 ; D10→AF-01/AF-15.

**Non décidées :** AF-CAND-11B ; versionnement/intégration ; clôture formelle cycle ; sort branches ; UX/UI/tech/POC/MVP lancement.

---

## 11. Contrôles

| Contrôle | Résultat |
|----------|----------|
| D10 → AF-01/AF-15 | OK |
| FR-024/025 → AF-01/AF-15 | OK |
| AF-Option A/B/C | OK |
| Option C méthode préservée | OK |
| AF-Option C VALIDÉE | OK |
| AF-CAND-11A VALIDÉE reco | OK |
| AF-CAND-11B NON DÉCIDÉE | OK |
| Cycle suivant non lancé | OK |
| D-VAL-12 absente | OK |
| `08`–`10` inchangés | OK |
| Tech absente | OK |
| Ambiguïté nommage | 0 |

---

## 12. Recherche occurrences Option A/B/C

projects/sfia-studio/README.md:8 [Option C] Option C méthode
projects/sfia-studio/README.md:21 [AF-Option C] AF architecture
projects/sfia-studio/README.md:21 [Option C] Option C méthode
projects/sfia-studio/README.md:45 [AF-Option C] AF architecture
projects/sfia-studio/README.md:45 [Option C] Option C méthode
projects/sfia-studio/README.md:112 [Option C] Option C méthode
projects/sfia-studio/README.md:127 [AF-Option C] AF architecture
projects/sfia-studio/README.md:132 [AF-Option C] AF architecture
projects/sfia-studio/README.md:174 [AF-Option A] AF architecture
projects/sfia-studio/README.md:176 [AF-Option C] AF architecture
projects/sfia-studio/README.md:176 [Option C] Option C méthode
projects/sfia-studio/README.md:198 [Option C] Option C méthode
projects/sfia-studio/README.md:234 [Option C] Option C méthode
projects/sfia-studio/README.md:258 [AF-Option C] AF architecture
projects/sfia-studio/README.md:258 [Option C] Option C méthode
projects/sfia-studio/README.md:296 [Option C] Option C méthode
projects/sfia-studio/README.md:308 [AF-Option C] AF architecture
projects/sfia-studio/README.md:308 [Option C] Option C méthode
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:9 [Option C] Option C méthode
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:11 [AF-Option C] AF architecture
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:15 [AF-Option C] AF architecture
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:15 [Option C] Option C méthode
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:37 [AF-Option C] AF architecture
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:37 [Option C] Option C méthode
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:73 [Option C] Option C méthode
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:121 [AF-Option C] AF architecture
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:180 [AF-Option C] AF architecture
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:180 [Option C] Option C méthode
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:221 [AF-Option C] AF architecture
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:265 [AF-Option C] AF architecture
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:316 [AF-Option C] AF architecture
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:335 [AF-Option C] AF architecture
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:335 [Option C] Option C méthode
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:358 [AF-Option C] AF architecture
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:358 [Option C] Option C méthode
projects/sfia-studio/11-functional-architecture.md:10 [Option C] Option C méthode
projects/sfia-studio/11-functional-architecture.md:16 [AF-Option C] AF architecture
projects/sfia-studio/11-functional-architecture.md:19 [AF-Option C] AF architecture
projects/sfia-studio/11-functional-architecture.md:19 [Option C] Option C méthode
projects/sfia-studio/11-functional-architecture.md:235 [AF-Option C] AF architecture
projects/sfia-studio/11-functional-architecture.md:354 [AF-Option C] AF architecture
projects/sfia-studio/11-functional-architecture.md:354 [Option C] Option C méthode
projects/sfia-studio/11-functional-architecture.md:355 [AF-Option C] AF architecture
projects/sfia-studio/11-functional-architecture.md:371 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:13 [AF-Option A] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:13 [Option C] Option C méthode
projects/sfia-studio/13-functional-architecture-decision-pack.md:24 [Option C] Option C méthode
projects/sfia-studio/13-functional-architecture-decision-pack.md:37 [Option C] Option C méthode
projects/sfia-studio/13-functional-architecture-decision-pack.md:39 [AF-Option A] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:52 [AF-Option B] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:52 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:58 [AF-Option B] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:70 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:76 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:94 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:94 [Option C] Option C méthode
projects/sfia-studio/13-functional-architecture-decision-pack.md:100 [AF-Option A] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:100 [AF-Option B] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:100 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:107 [Option C] Option C méthode
projects/sfia-studio/13-functional-architecture-decision-pack.md:112 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:114 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:127 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:135 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:212 [Option C] Option C méthode
projects/sfia-studio/13-functional-architecture-decision-pack.md:233 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:249 [AF-Option B] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:249 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:249 [Option C] Option C méthode
projects/sfia-studio/13-functional-architecture-decision-pack.md:262 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:275 [AF-Option C] AF architecture
projects/sfia-studio/13-functional-architecture-decision-pack.md:295 [AF-Option C] AF architecture

---

## 13. Diff spécifique des amendements (avant → après sous-cycle)

### Diff amendement — `projects/sfia-studio/README.md`

BEGIN DIFF
--- before/projects/sfia-studio/README.md
+++ after/projects/sfia-studio/README.md
@@ -4,12 +4,12 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `functional-architecture-candidate-review` — architecture **candidate locale** ; conception **intégrée** sur `main` |
-| **Baseline méthode** | **SFIA v2.6** (consommée — Option **C** validée ; baseline inchangée) |
+| **Statut** | `functional-architecture-amended-review` — architecture **VALIDÉE PARTIELLEMENT** (amendements Morris) ; conception **intégrée** sur `main` |
+| **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — architecture fonctionnelle candidate (DOC, Critical) |
+| **Exécuteur** | Cursor — amendements architecture fonctionnelle (DOC, Critical) |
 | **Typologie cycle** | DOC — EVOL produit |
-| **Cycle projet** | Architecture fonctionnelle (**candidate** — **non validée** ; **non commitée** projet) |
+| **Cycle projet** | 3 — Architecture fonctionnelle (**VALIDÉE PARTIELLEMENT** ; amendements en revue ; **non commitée** projet) |
 | **Profil SFIA** | Critical |
 | **Branche architecture** | `project/sfia-studio-functional-architecture` (**locale** ; push projet **interdit**) |
 | **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
@@ -18,10 +18,12 @@
 | **Base canonique** | `origin/main` @ `e9d819368a6224259e8ba0e942d53effb81e191a` |
 | **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
 | **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
-| **AF-CAND-01…12** | **Candidates** — à soumettre à Morris — **≠ D-VAL** |
+| **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
+| **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
+| **AF-CAND-11B** | **NON DÉCIDÉE** — sélection du prochain cycle |
 | **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
-| **Architecture fonctionnelle** | **Candidate produite** — statut revue — **non validée** |
-| **Prochain cycle** | **Non sélectionné** (après revue architecture) |
+| **Architecture fonctionnelle** | **VALIDÉE PARTIELLEMENT** — amendements intégrés — revue finale ouverte |
+| **Prochain cycle** | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (AF-CAND-11A) |
 
 ---
 
@@ -39,12 +41,15 @@
 | Cadrage documentaire | **Clôturé** (D-VAL-11) |
 | Cycle 2 conception | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` |
 | FD-CAND-01…08 | **VALIDÉES** |
-| Cycle architecture fonctionnelle | **Lancé** (GO Morris) — livrables **candidates** en revue |
-| AF-CAND-01…12 | **Candidates** — non validées |
+| Cycle architecture fonctionnelle | **VALIDÉE PARTIELLEMENT** — amendements Morris intégrés — statut `functional-architecture-amended-review` |
+| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
+| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
+| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
+| D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
 | Intégration conception sur `main` | **Réalisée** via PR #209 / sync #210 → `e9d8193…` |
 | Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
 | Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 |
-| Prochain cycle | **Non sélectionné** |
+| Prochain cycle | **Non sélectionné** (AF-CAND-11B) |
 | Branches | `functional-design`, `pre-framing` **conservées** ; branche architecture **locale** |
 
 > PR #207 : fait Git ; D-VAL-10 n’autorisait pas ce merge ; D-VAL-11 régularise le cadrage. PR #209 : conception validée intégrée ; écart d’autorisation de merge **clôturé** par acceptation Morris (2026-07-18) — **sans** D-VAL-12 et **sans** réécriture rétroactive du GO draft.
@@ -119,12 +124,12 @@
   → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
   → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
   → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — cycle **CLÔTURÉ**
-  → architecture fonctionnelle ← **CANDIDATE** locale (`11`–`13`) — **non validée** — revue Morris
-  → UX / architecture technique / POC ← **non sélectionnés**
+  → architecture fonctionnelle ← **VALIDÉE PARTIELLEMENT** (`11`–`13` amendés) — AF-Option C **VALIDÉE** — AF-CAND-11B **ouverte**
+  → UX/UI (recommandé AF-CAND-11A) / architecture technique / POC ← **non sélectionnés** (AF-CAND-11B)
   → MVP → delivery → industrialisation plateforme
 ```
 
-Aucune stack / architecture **technique** validée. Architecture **fonctionnelle candidate** produite localement — **non validée**. Conception **validée et intégrée** sur `main`. POC / MVP non lancés. Cycle suivant après architecture **non sélectionné**.
+Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE PARTIELLEMENT** (AF-Option C ; AF-CAND-01…10, 11A, 12). Cycle suivant **non sélectionné**. POC / MVP non lancés.
 
 ---
 
@@ -160,15 +165,15 @@
 
 > Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. **Intégrée** sur `main` via PR #209 / sync #210 (`e9d8193…`). Baseline `08`–`10` **inchangée** pendant le cycle architecture. ≠ stack / UX visuelle / backlog / POC / MVP / code.
 
-### Architecture fonctionnelle — CANDIDATE (revue)
+### Architecture fonctionnelle — VALIDÉE PARTIELLEMENT (amendements)
 
 | Document | Rôle |
 |----------|------|
 | [11-functional-architecture.md](./11-functional-architecture.md) | Blocs, authority/truth models, NFR fonctionnels |
-| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières |
-| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | Options A/B/C ; AF-CAND-01…12 |
-
-> Architecture **candidate** — statut `functional-architecture-candidate-review`. **Non validée.** Aucune D-VAL-12. Branche locale uniquement — **pas** de commit/push/PR projet dans ce cycle.
+| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
+| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |
+
+> Statut `functional-architecture-amended-review`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. Branche locale — **pas** de commit/push/PR projet dans ce sous-cycle.
 
 ---
 
@@ -190,7 +195,7 @@
 | Conception validée = intégrée | PR #209 / `fdade59…` ; branche `functional-design` conservée |
 | Morris décide | Gates structurants |
 | GPT / Cursor | Qualifient / exécutent — ne décident pas |
-| Option C | Consomme v2.6 (**validé**) |
+| Option C méthode | Consomme v2.6 (**validé**) |
 | POC ≠ valeur | Faisabilité ≠ MVP |
 | Couverture progressive | 15 cycles = cible long terme |
 | Runtime candidat | Non figé |
@@ -226,7 +231,7 @@
 | D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
 | D-VAL-4 | Projet officiel | G1 |
 | D-VAL-5 | Problème / opportunité | G2 |
-| D-VAL-6 | Option C | G4 |
+| D-VAL-6 | **Option C méthode** (consomme v2.6) | G4 |
 | D-VAL-7 | Principe POC | G5 |
 | D-VAL-8 | Passage au cadrage détaillé **autorisé** | G6 |
 | D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
@@ -246,27 +251,41 @@
 
 Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01…08 — **2026-07-18**. Identifiants locaux au cycle de conception — **pas de D-VAL-12**.
 
-### Décisions encore ouvertes
+### Décisions architecture — VALIDÉES PARTIELLEMENT
 
 | Décision | Statut |
 |----------|--------|
-| Validation architecture fonctionnelle / AF-CAND | **Ouverte** — candidate en revue |
-| Sort des branches (`functional-design` / `pre-framing` / architecture) | Conservées ; décisions distinctes ; push architecture **interdit** ici |
+| AF-Option C (Studio / orchestrateur séparés) | **VALIDÉE** — ≠ Option C méthode |
+| AF-CAND-01…10 | **VALIDÉES** |
+| AF-CAND-11A (trajectoire recommandée) | **VALIDÉE** (recommandation uniquement) |
+| AF-CAND-11B (sélection prochain cycle) | **NON DÉCIDÉE** |
+| AF-CAND-12 (pas de D-VAL-12) | **VALIDÉE** |
+| D10 → AF-01 / AF-15 | **VALIDÉE** (amendement traçabilité) |
+
+### Décisions encore ouvertes
+
+| Décision | Statut |
+|----------|--------|
+| AF-CAND-11B — sélection / lancement prochain cycle | **NON DÉCIDÉE** — UX/UI recommandé via 11A |
+| Versionnement / intégration docs architecture | **Non autorisé** ici |
+| Clôture formelle cycle architecture | **Non** — amendements en revue |
+| Sort des branches | Conservées ; décisions distinctes |
 | Contenu POC / définition MVP | Non pris |
 | Stack / architecture technique | Non pris |
 
-> Commit / push / PR / merge de la conception : **faits Git réalisés** (PR #209 / #210). Architecture : **locale candidate** — aucun commit projet.
+> Commit / push / PR / merge de la conception : **faits Git réalisés** (PR #209 / #210). Architecture amendée : **locale** — aucun commit projet.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Revue ChatGPT du handoff d’**architecture fonctionnelle candidate**.
-2. Revue / validation Morris des AF-CAND-01…12 et de l’option recommandée (C) — **sans validation implicite**.
-3. Sélection du cycle suivant après architecture — **non sélectionné**.
-4. Sort des branches (décisions distinctes — suppression interdite ici).
-
-**Verdict documentaire candidat :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE CANDIDATE PRODUCED — READY FOR MORRIS REVIEW`
+1. Revue ChatGPT du handoff d’**amendements architecture**.
+2. Revue finale Morris des amendements (D10, AF-Option, AF-CAND-11A/11B).
+3. **AF-CAND-11B** — sélection du prochain cycle (**non décidée** ; UX/UI recommandé).
+4. GO distinct éventuel de versionnement / intégration documentaire.
+5. Sort des branches (décisions distinctes — suppression interdite ici).
+
+**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE AMENDMENTS APPLIED — READY FOR MORRIS FINAL REVIEW`
 
 ---
 
@@ -274,16 +293,16 @@
 
 | Élément | Source |
 |---------|--------|
-| Méthode | SFIA v2.6 sur `main` |
+| Méthode | SFIA v2.6 sur `main` — **Option C méthode** |
 | Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
 | Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** (PR #207 / #208) |
 | Conception fonctionnelle validée | **`08`–`10` + navigation** sur **`main`** (`e9d8193…`) — baseline **inchangée** |
-| Architecture fonctionnelle candidate | **`11`–`13`** — branche locale architecture — **non** sur `main` |
+| Architecture fonctionnelle amendée | **`11`–`13`** — branche locale — **VALIDÉE PARTIELLEMENT** — **non** sur `main` |
 | Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
 | Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
-> `main` est la source de vérité du **cadrage** et de la **conception**. L’architecture candidate est **locale** jusqu’à versionnement autorisé.
-
----
-
-*SFIA Studio — cadrage clôturé (D-VAL-11) — conception VALIDÉE et INTÉGRÉE (PR #209 / `fdade59…`) — cycle 2 clôturé — Option C — Morris décide.*
+> `main` est la source de vérité du **cadrage** et de la **conception**. L’architecture amendée est **locale** jusqu’à versionnement autorisé.
+
+---
+
+*SFIA Studio — cadrage clôturé — conception VALIDÉE/INTÉGRÉE — architecture VALIDÉE PARTIELLEMENT (AF-Option C) — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*

END DIFF

### Diff amendement — `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`

BEGIN DIFF
--- before/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ after/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -6,13 +6,13 @@
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
 | **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
 | **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
-| **Baseline** | SFIA v2.6 (Option C) |
-| **Statut** | `functional-architecture-candidate-review` (local) ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
-| **Décisions** | D-VAL-1 à D-VAL-11 (inchangées) ; FD-CAND-01…08 **VALIDÉES** ; AF-CAND-01…12 **candidates** |
+| **Baseline** | SFIA v2.6 (**Option C méthode**) |
+| **Statut** | `functional-architecture-amended-review` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
+| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` @ `e9d819368a6224259e8ba0e942d53effb81e191a` — cadrage + conception ; architecture **locale candidate** |
-
-> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture fonctionnelle **candidate** en revue — **pas de D-VAL-12.**
+| **Source de vérité** | Git `main` @ `e9d819368a6224259e8ba0e942d53effb81e191a` — cadrage + conception ; architecture **locale amendée** |
+
+> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE PARTIELLEMENT** (amendements) — **pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
 
 ---
 
@@ -33,9 +33,12 @@
 | Intégration Git conception | **Réalisée** — PR #209 / merge `fdade59…` / commit `99eaeaa…` |
 | Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 |
 | Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 ; sans réécriture rétroactive du GO draft |
-| Cycle architecture fonctionnelle | **Lancé** (GO Morris) — livrables `11`–`13` **candidates** — **non validées** |
-| AF-CAND-01…12 | **Candidates** — soumises à revue |
-| Prochain cycle après architecture | **Non sélectionné** |
+| Cycle architecture fonctionnelle | **VALIDÉE PARTIELLEMENT** — amendements intégrés — `functional-architecture-amended-review` |
+| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
+| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
+| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
+| D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
+| Prochain cycle après architecture | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (11A) |
 | Branches | `functional-design` / `pre-framing` **conservées** ; architecture **locale** (push interdit) |
 
 > Le merge #207 est un fait Git. D-VAL-11 clôture le cadrage. Le merge #209/#210 intègre la conception. L’architecture candidate est **locale** — aucun commit projet.
@@ -67,7 +70,7 @@
 | D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
 | D-VAL-4 | Projet officiel | G1 |
 | D-VAL-5 | Problème / opportunité | G2 |
-| D-VAL-6 | Option C — consomme v2.6 | G4 |
+| D-VAL-6 | **Option C méthode** — consomme v2.6 | G4 |
 | D-VAL-7 | Principe POC | G5 |
 | D-VAL-8 | Cadrage détaillé **autorisé** | G6 |
 | D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
@@ -115,8 +118,8 @@
   → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
   → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
   → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — **CLÔTURÉE**
-  → architecture fonctionnelle      ← **CANDIDATE** (`11`–`13`) — **non validée** — revue Morris
-  → UX/UI initiale                  ← non sélectionnée
+  → architecture fonctionnelle      ← **VALIDÉE PARTIELLEMENT** (`11`–`13` amendés) — AF-Option C **VALIDÉE** — AF-CAND-11B **ouverte**
+  → UX/UI (recommandé AF-CAND-11A)  ← **non sélectionnée** (AF-CAND-11B)
   → architecture technique candidate
   → définition du POC
   → POC de faisabilité (lot multi-cycle)
@@ -137,9 +140,10 @@
 - Merge #207 = fait Git ; régularisation cadrage = **D-VAL-11**.
 - Merge #209 / #210 = faits Git ; conception intégrée ; sync documentaire clôturable (post-#210).
 - Aucune stack / architecture **technique** validée.
-- Architecture **fonctionnelle candidate** produite — **non validée** ; **non commitée** projet.
-- Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main` ; UX visuelle / POC / MVP non lancés.
-- Cycle suivant après architecture **non sélectionné**.
+- Architecture **fonctionnelle VALIDÉE PARTIELLEMENT** — amendements locaux ; **non commitée** projet.
+- **AF-CAND-11A** oriente UX/UI puis tech puis POC puis MVP — **sans lancer**.
+- **AF-CAND-11B** : sélection cycle suivant **NON DÉCIDÉE**.
+- Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main`.
 
 ---
 
@@ -169,21 +173,24 @@
 
 | Champ | Contenu |
 |-------|---------|
-| Statut | **CANDIDATE EN REVUE** — cycle **lancé** (GO Morris) ; **non validée** |
+| Statut | **VALIDÉE PARTIELLEMENT** — amendements Morris — `functional-architecture-amended-review` |
 | Objectif | Blocs logiques ; frontières Studio / Git / GPT / Cursor / orchestrateur candidat |
-| Livrables | `11` / `12` / `13` — statut `functional-architecture-candidate-review` |
+| Livrables | `11` / `12` / `13` |
 | Profil | Critical |
-| AF-CAND-01…12 | **Candidates** — ≠ D-VAL ; ≠ D-VAL-12 |
-| Option recommandée | **C** (Studio ↔ orchestrateur séparés) — **à valider** |
+| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
+| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
+| AF-CAND-11B | **NON DÉCIDÉE** |
+| D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
 | Branche | `project/sfia-studio-functional-architecture` — **locale** ; push projet interdit |
-| Ne lance pas | Architecture technique ; UX visuelle ; stack ; POC ; MVP ; code ; commit projet |
+| Ne lance pas | Architecture technique ; UX/UI ; stack ; POC ; MVP ; code ; commit projet |
 
 ### 4.3 UX/UI
 
 | Champ | Contenu |
 |-------|---------|
-| Déclencheur | Parcours opérateur à concevoir |
-| Pourquoi pas maintenant | Figma désactivé ; cycle non sélectionné |
+| Statut | **Recommandé** (AF-CAND-11A) — **non sélectionné** (AF-CAND-11B) |
+| Déclencheur | GO Morris sur AF-CAND-11B |
+| Pourquoi pas maintenant | Sélection cycle non décidée ; Figma non lancé |
 
 ### 4.4 Architecture technique
 
@@ -211,10 +218,11 @@
 | D-NEXT-2c | Sélection du cycle suivant après validation conception | Morris | **FAIT** — architecture fonctionnelle **lancée** |
 | D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **FAIT** — réalisés (PR #209 / #210) |
 | D-NEXT-2e | Acceptation intégration / clôture écart merge #209 | Morris | **VALIDÉE** — 2026-07-18 (sans D-VAL-12) |
-| D-NEXT-2f | Validation architecture / AF-CAND | Morris | **Ouverte** — candidate en revue |
-| D-NEXT-2g | Sélection cycle suivant après architecture | Morris | **Non sélectionné** |
+| D-NEXT-2f | Validation architecture / AF-CAND | Morris | **PARTIELLE** — AF-Option C + AF-CAND-01…10, 11A, 12 **VALIDÉES** ; 11B ouverte |
+| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **Non sélectionné** |
+| D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
 | D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
-| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; architecture en revue ; suite **non sélectionnée** |
+| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; AF partiellement validée ; suite **non sélectionnée** |
 | D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
 | D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
 | D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
@@ -252,13 +260,15 @@
 
 ### Recommandation (≠ décision / ≠ sélection)
 
-**Conception fonctionnelle bornée** (Option 1) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).
-
-**Architecture fonctionnelle Critical** a été **lancée** (GO Morris) : livrables `11`–`13` **candidates** en revue — **non validées**.
-
-**Prochain cycle après architecture :** **non sélectionné**. Recommandation candidate (AF-CAND-11) : UX fonctionnelle non visuelle **ou** architecture technique **après** validation AF — **sans lancer**.
-
-Morris reste libre. **Aucun** cycle UX visuelle / architecture technique / POC / MVP n’est lancé ici.
+**Conception fonctionnelle bornée** (Option 1 de séquencement post-cadrage) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).
+
+**Architecture fonctionnelle Critical** : **VALIDÉE PARTIELLEMENT** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; amendements D10 / nommage / scission 11A–11B intégrés.
+
+**AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.
+
+**AF-CAND-11B :** **NON DÉCIDÉE** — aucun cycle suivant lancé. Nouveau GO Morris requis.
+
+Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n’est lancé ici.
 
 ---
 
@@ -274,14 +284,14 @@
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **candidate**. GO cycle suivant après architecture : **non pris**.
+Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE PARTIELLEMENT**. AF-CAND-11B : **non décidée**.
 
 ---
 
 ## 8. Questions Morris
 
-1. Validez-vous l’option d’architecture **C** et les AF-CAND-01…12 (tout/partie) ?
-2. Quel cycle suivant après architecture (UX fct / archi tech / autre) — **non sélectionné** ?
+1. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via AF-CAND-11A, ou autre ?
+2. Autorisez-vous le versionnement / intégration documentaire de l’architecture amendée (GO distinct) ?
 3. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
 4. Quel sort pour `project/sfia-studio-functional-design` et la branche architecture locale ?
 5. Quel niveau d’architecture minimale avant POC ?
@@ -302,8 +312,10 @@
 | Clôture formelle cadrage | **FAIT** (D-VAL-11 — 2026-07-18) |
 | Cycle conception fonctionnelle | **CLÔTURÉ** — intégré PR #209 / #210 |
 | FD-CAND-01…08 | **VALIDÉES** |
-| Architecture fonctionnelle | **CANDIDATE** en revue (`11`–`13`) |
-| AF-CAND-01…12 | **Candidates** |
+| Architecture fonctionnelle | **VALIDÉE PARTIELLEMENT** (`11`–`13` amendés) |
+| AF-Option C | **VALIDÉE** |
+| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
+| AF-CAND-11B | **NON DÉCIDÉE** |
 | Prochain cycle après architecture | **Non sélectionné** |
 
 ---
@@ -319,12 +331,13 @@
 | Conception fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — base `e9d8193…` |
 | FD-CAND-01…08 | **VALIDÉES** |
 | Cycle 2 | **CLÔTURÉ** |
-| Architecture fonctionnelle | **CANDIDATE** — non validée — locale |
-| AF-CAND-01…12 | **Candidates** — ≠ D-VAL-12 |
+| Architecture fonctionnelle | **VALIDÉE PARTIELLEMENT** — amendements |
+| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
+| AF-CAND-11B | **NON DÉCIDÉE** |
 | Ready for POC / MVP / tech | **Non** |
-| Ready for Morris review (AF) | **Oui** (candidate) |
-
-**Verdict candidat :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE CANDIDATE PRODUCED — READY FOR MORRIS REVIEW`
+| Ready for Morris final review (amendements) | **Oui** |
+
+**Verdict :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE AMENDMENTS APPLIED — READY FOR MORRIS FINAL REVIEW`
 
 ---
 
@@ -338,8 +351,8 @@
 | [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé / intégré** |
 | [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours **validés** |
 | [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation / clôture** |
-| [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **candidate** |
-| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — **candidate** |
-| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-CAND / options — **candidate** |
-
-*SFIA Studio — cadrage clôturé — conception VALIDÉE/INTÉGRÉE — architecture CANDIDATE en revue — Morris décide.*
+| [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE PARTIELLEMENT** |
+| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — amendé D10 |
+| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND — amendé |
+
+*SFIA Studio — architecture VALIDÉE PARTIELLEMENT (AF-Option C) — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*

END DIFF

### Diff amendement — `projects/sfia-studio/11-functional-architecture.md`

BEGIN DIFF
--- before/projects/sfia-studio/11-functional-architecture.md
+++ after/projects/sfia-studio/11-functional-architecture.md
@@ -7,15 +7,16 @@
 | **Cycle** | Architecture fonctionnelle |
 | **Profil** | Critical |
 | **Typologie** | DOC — EVOL produit |
-| **Baseline** | SFIA v2.6 (Option C) |
+| **Baseline** | SFIA v2.6 (**Option C méthode** validée — D-VAL-6) |
 | **Base Git** | `origin/main` @ `e9d819368a6224259e8ba0e942d53effb81e191a` |
 | **Branche travail** | `project/sfia-studio-functional-architecture` (locale — push interdit) |
-| **Statut** | `functional-architecture-candidate-review` |
+| **Statut** | `functional-architecture-amended-review` |
 | **Autorité** | Morris (L0) |
 | **Entrée** | Conception validée `08`–`10` (inchangée) |
-| **Décisions** | AF-CAND-* **candidates** — aucune D-VAL-12 |
-
-> Architecture **fonctionnelle candidate**. **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**.
+| **Architecture** | **VALIDÉE PARTIELLEMENT** — **AF-Option C** VALIDÉE |
+| **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; aucune D-VAL-12 |
+
+> Architecture fonctionnelle **VALIDÉE PARTIELLEMENT** (amendements Morris intégrés). **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode.
 
 ---
 
@@ -215,9 +216,11 @@
 | Finalité | Paramètres candidats ; coûts candidats |
 | Domaines | D10 |
 | FR | FR-024, FR-025 |
+| Flux | **AF-01** (paramètres nécessaires à la qualification) ; **AF-15** (consultation opérationnelle read-only) |
 | Acteurs | Morris / admin candidat |
 | Interdit | Contourner gates |
 | Preuves | Journal admin |
+| Amendement | Traçabilité D10 → FB-11 → AF-01 / AF-15 → FR-024 / FR-025 — **VALIDÉE** Morris |
 
 ### FB-12 — Orchestrateur déterministe (candidat)
 
@@ -229,7 +232,7 @@
 | Interdit | Créer autorisations ; arbitrer ; élever privilèges (INV-12) |
 | Dépendances | FB-04, FB-05, FB-06 |
 | Risques | Pris pour décideur |
-| Questions | Séparation Studio / orchestrateur (AF-CAND) |
+| Questions | Séparation Studio / orchestrateur — **tranchée** : **AF-Option C** VALIDÉE |
 
 ---
 
@@ -347,9 +350,10 @@
 
 ## 18. Réserves / risques / questions
 
-**Réserves :** FB ≠ composants ; Runtime candidat ; pas de stack ; pas de POC/MVP.  
-**Risques :** confusion Studio/orchestrateur ; seconde vérité ; GO implicite ; figer trop tôt.  
-**Questions :** option A/B/C ; granularité FB ; ordre UX vs technique vs POC.
+**Réserves :** FB ≠ composants ; Runtime candidat ; pas de stack ; pas de POC/MVP ; cycle suivant non sélectionné (AF-CAND-11B).  
+**Risques :** confusion Studio/orchestrateur ; seconde vérité ; GO implicite ; confusion **AF-Option C** / Option C méthode.  
+**Décidé :** **AF-Option C** VALIDÉE ; AF-CAND-01…10, 11A, 12 VALIDÉES.  
+**Questions restantes :** AF-CAND-11B (sélection prochain cycle) ; GO versionnement/intégration ; sort des branches.
 
 ---
 
@@ -360,8 +364,8 @@
 | [08-functional-design.md](./08-functional-design.md) | Baseline conception (**inchangée**) |
 | [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours / BR |
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF |
-| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-CAND / options |
-
----
-
-*SFIA Studio — architecture fonctionnelle CANDIDATE — Critical — non validée — Morris décide.*
+| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND (amendé) |
+
+---
+
+*SFIA Studio — architecture fonctionnelle VALIDÉE PARTIELLEMENT — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*

END DIFF

### Diff amendement — `projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md`

BEGIN DIFF
--- before/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
+++ after/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
@@ -3,7 +3,7 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `12-functional-architecture-flows-and-boundaries.md` |
-| **Statut** | `functional-architecture-candidate-review` |
+| **Statut** | `functional-architecture-amended-review` |
 | **Cycle** | Architecture fonctionnelle — Critical |
 | **Base** | `e9d819368a6224259e8ba0e942d53effb81e191a` |
 | **Complète** | [11-functional-architecture.md](./11-functional-architecture.md) |
@@ -48,16 +48,17 @@
 |-------|---------|
 | Déclencheur | Intention produit |
 | Initiateur | Morris / opérateur candidat |
-| Blocs | FB-01, FB-02 |
+| Blocs | FB-01, FB-02, **FB-11** (paramètres d’administration / exploitation nécessaires à la qualification — D10) |
 | Préconditions | Projet officiel ; conception validée disponible |
-| Étapes | 1) Saisir intention 2) Qualifier cycle/profil/blocs 3) Justifier Critical si besoin 4) Enregistrer note |
-| Données | Intention, typologie, profil, blocs |
+| Étapes | 1) Saisir intention 2) Consulter paramètres admin/exploitation candidats si nécessaires (FB-11 / D10) 3) Qualifier cycle/profil/blocs 4) Justifier Critical si besoin 5) Enregistrer note |
+| Données | Intention, typologie, profil, blocs ; paramètres admin candidats consommés |
 | Preuves | Note de qualification |
 | Gates | Aucun GO distant |
 | Erreurs | Profil ambigu → STOP qualification |
 | Stop | Critical non justifié |
 | Résultat | Cycle qualifié |
 | État final | État : intention/qualification |
+| Traçabilité D10 | **D10 / FB-11 / FR-024 / FR-025** — paramètres nécessaires à la qualification (amendement Morris) |
 
 ### AF-02 — Repo-informed pre-check
 
@@ -286,16 +287,17 @@
 |-------|---------|
 | Déclencheur | Opération read-only bornée |
 | Initiateur | Studio / Cursor lecture |
-| Blocs | FB-03, FB-01, FB-12 |
+| Blocs | FB-03, FB-01, FB-12, **FB-11** (consultation opérationnelle paramètres, coûts candidats, états administratifs — D10) |
 | Préconditions | Périmètre read-only explicite |
-| Étapes | 1) Qualifier L5 ciblé 2) Exécuter lecture 3) Journaliser 4) Aucune écriture |
-| Données | Requête lecture |
+| Étapes | 1) Qualifier L5 ciblé 2) Exécuter lecture (y compris consultation admin/coûts candidats si demandé) 3) Journaliser 4) Aucune écriture |
+| Données | Requête lecture ; paramètres / coûts / états admin observés |
 | Preuves | Journal lecture |
 | Gates | Non sauf chemins sensibles |
 | Erreurs | Écriture tentée → STOP |
 | Stop | Oui si écriture |
 | Résultat | Observation produite |
 | État final | État : lecture OK |
+| Traçabilité D10 | **D10 / FB-11 / FR-024 / FR-025** — consultation opérationnelle bornée (amendement Morris) |
 
 
 ---

END DIFF

### Diff amendement — `projects/sfia-studio/13-functional-architecture-decision-pack.md`

BEGIN DIFF
--- before/projects/sfia-studio/13-functional-architecture-decision-pack.md
+++ after/projects/sfia-studio/13-functional-architecture-decision-pack.md
@@ -1,14 +1,16 @@
-# SFIA Studio — Pack de décisions d’architecture fonctionnelle (candidat)
+# SFIA Studio — Pack de décisions d’architecture fonctionnelle (amendé)
 
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `13-functional-architecture-decision-pack.md` |
-| **Statut** | `functional-architecture-candidate-review` |
-| **Cycle** | Architecture fonctionnelle — Critical |
+| **Statut** | `functional-architecture-amended-review` |
+| **Cycle** | 3 — Architecture fonctionnelle — sous-cycle amendements Morris |
+| **Profil** | Critical |
 | **Base** | `e9d819368a6224259e8ba0e942d53effb81e191a` |
 | **Complète** | [11](./11-functional-architecture.md) · [12](./12-functional-architecture-flows-and-boundaries.md) |
 
-> **AF-CAND-*** = décisions **candidates** locales au cycle. **≠ D-VAL**. **≠ validation**. Aucune D-VAL-12.
+> **AF-CAND-*** = décisions locales au cycle d’architecture. **≠ D-VAL**. Aucune D-VAL-12.  
+> **AF-Option A/B/C** = options d’architecture fonctionnelle — **distinctes** de l’**Option C méthode** SFIA v2.6 (relation produit/méthode déjà validée).
 
 ---
 
@@ -19,19 +21,22 @@
 | D-VAL-1…11 | Inchangées |
 | FD-CAND-01…08 | VALIDÉES (conception) |
 | Conception `08`–`10` | Baseline **inchangée** |
+| Option C méthode SFIA v2.6 | **VALIDÉE** (D-VAL-6 / G4) — inchangée |
 | D-VAL-12 | **Absente** — non créée |
 
 ---
 
-## 2. Hors périmètre (interdit ce cycle)
-
-Stack ; API ; BDD ; services techniques ; Figma ; backlog ; POC ; MVP ; code ; commit/push/PR projet ; validation architecture ; D-VAL-12.
-
----
-
-## 3. Options d’architecture fonctionnelle
-
-### Option A — Studio centré pilotage, orchestration externe
+## 2. Hors périmètre (interdit)
+
+Stack ; API ; BDD ; services techniques ; Figma ; backlog ; POC ; MVP ; code ; commit/push/PR projet ; lancement cycle suivant ; D-VAL-12.
+
+---
+
+## 3. Options d’architecture fonctionnelle (AF-Option)
+
+> Nommage **AF-Option** pour éviter toute collision avec l’Option C méthode.
+
+### AF-Option A — Studio centré pilotage, orchestration externe
 
 | Champ | Contenu |
 |-------|---------|
@@ -44,13 +49,13 @@
 | Dette | Réintégration orchestrateur plus tard |
 | Git vérité | Compatible |
 | Autorité Morris | Compatible si gates stricts |
-| Évolution | Vers B ou C |
+| Évolution | Vers AF-Option B ou AF-Option C |
 | UX/UI | Surfaces pilotage prioritaires |
 | Architecture technique | Orchestrateur = futur choix |
 | POC/MVP | POC léger possible plus tard |
-| Décisions | Position orchestrateur externe |
-
-### Option B — Studio avec moteur fonctionnel intégré, exécution externe
+| Statut | **Non retenue** |
+
+### AF-Option B — Studio avec moteur fonctionnel intégré, exécution externe
 
 | Champ | Contenu |
 |-------|---------|
@@ -62,13 +67,13 @@
 | Dette | Découplage difficile |
 | Git vérité | Risque si états locaux trop forts |
 | Autorité Morris | OK si discipline |
-| Évolution | Peut converger vers C |
+| Évolution | Peut converger vers AF-Option C |
 | UX/UI | Fort impact surfaces |
 | Architecture technique | Moteur à découper plus tard |
 | POC/MVP | POC moteur plus tôt |
-| Décisions | Frontière moteur / UI |
-
-### Option C — Studio et orchestrateur candidat séparés avec contrat explicite (**recommandation candidate**)
+| Statut | **Non retenue** |
+
+### AF-Option C — Studio et orchestrateur déterministe candidat séparés avec contrat explicite
 
 | Champ | Contenu |
 |-------|---------|
@@ -84,48 +89,74 @@
 | UX/UI | Studio reste surface humaine |
 | Architecture technique | Découpage naturel |
 | POC/MVP | POC orchestrateur borné possible plus tard |
-| Décisions | AF-CAND position orchestrateur |
+| **Statut** | **VALIDÉE** par Morris — 2026-07-18 |
+
+**Distinction obligatoire :** AF-Option C ≠ Option C méthode SFIA v2.6.
 
 ---
 
 ## 4. Comparaison
 
-| Critère | A | B | C |
-|---------|---|---|---|
+| Critère | AF-Option A | AF-Option B | AF-Option C |
+|---------|-------------|-------------|-------------|
 | Séparation autorité | Moyenne | Moyenne | **Forte** |
 | Risque seconde vérité | Bas | **Élevé** | Bas–moyen |
 | Alignement Runtime candidat | Faible | Ambigu | **Fort** |
 | Complexité immédiate | Basse | Moyenne | Moyenne–haute |
 | Évolutivité technique future | Moyenne | Contrainte | **Haute** |
 | Compatibilité Option C méthode | Oui | Oui | Oui |
-
----
-
-## 5. Recommandation candidate
-
-**Recommander Option C** (Studio ↔ orchestrateur candidat séparés, contrat explicite) — **à valider par Morris**.  
-Non sélectionnée automatiquement ; non validée ; non transformée en D-VAL.
-
-Justification candidate : préserve INV-12 / BR-019 / BR-025 ; évite fusion Studio/décideur ; prépare architecture technique sans la lancer.
-
----
-
-## 6. AF-CAND-01 à AF-CAND-12
-
-| ID | Décision candidate | Option liée | Effet si validée (futur) | Effet non automatique |
-|----|-------------------|-------------|--------------------------|----------------------|
-| AF-CAND-01 | Découpe FB-01…FB-12 comme blocs fonctionnels | Toutes | Structure docs/UX | ≠ composants tech |
-| AF-CAND-02 | Orchestrateur déterministe **séparé** (Option C) | C | Frontière Studio/orch. | ≠ Runtime contractuel |
-| AF-CAND-03 | Git reste seule vérité durable | Toutes | Truth model | ≠ choix stockage |
-| AF-CAND-04 | Registre décisions ancré Git / preuves | Toutes | FB-09 | ≠ schéma |
-| AF-CAND-05 | États transitoires autorisés si reconstructibles | Toutes | FB-10 | ≠ BDD |
-| AF-CAND-06 | Modèle gates : GO explicite, durée, périmètre, révocation | Toutes | FB-05 | ≠ protocole |
-| AF-CAND-07 | Reprise = relecture Git + GO si sensible | Toutes | AF-10 | ≠ auto-resume |
-| AF-CAND-08 | Automatisation : L0 arbitrage ; L3–L4 exécution ; pas L5 global | Toutes | Matrice L | ≠ implémentation |
-| AF-CAND-09 | Preuve / audit : journal ≠ preuve Git ≠ verdict ≠ décision | Toutes | Observabilité | ≠ outil APM |
-| AF-CAND-10 | Option d’architecture recommandée = **C** | C | Orientation | ≠ validation tech |
-| AF-CAND-11 | Ordre suivant **proposé** : UX fonctionnelle non visuelle **ou** architecture technique **après** validation AF — **sans lancer** | — | Trajectoire | Aucun cycle auto |
-| AF-CAND-12 | Aucune D-VAL-12 ; AF-CAND ≠ D-VAL | — | Gouvernance | — |
+| Décision Morris | Non retenue | Non retenue | **VALIDÉE** |
+
+---
+
+## 5. Décision d’architecture — AF-Option C
+
+**AF-Option C est VALIDÉE** par Morris (Studio ↔ orchestrateur déterministe candidat séparés, contrat explicite).
+
+Effets automatiques **absents** : pas de stack, pas de Runtime contractuel, pas de services, pas de POC/MVP, pas de D-VAL-12.
+
+Justification : préserve INV-12 / BR-019 / BR-025 ; évite fusion Studio/décideur ; prépare architecture technique sans la lancer.
+
+---
+
+## 6. AF-CAND — statuts après revue Morris
+
+| ID | Décision | Statut | Effet | Effet non automatique |
+|----|----------|--------|-------|----------------------|
+| AF-CAND-01 | Découpe FB-01…FB-12 comme blocs fonctionnels | **VALIDÉE** | Structure docs/UX | ≠ composants tech |
+| AF-CAND-02 | Orchestrateur déterministe **séparé** (AF-Option C) | **VALIDÉE** | Frontière Studio/orch. | ≠ Runtime contractuel |
+| AF-CAND-03 | Git reste seule vérité durable | **VALIDÉE** | Truth model | ≠ choix stockage |
+| AF-CAND-04 | Registre décisions ancré Git / preuves | **VALIDÉE** | FB-09 | ≠ schéma |
+| AF-CAND-05 | États transitoires autorisés si reconstructibles | **VALIDÉE** | FB-10 | ≠ BDD |
+| AF-CAND-06 | Modèle gates : GO explicite, durée, périmètre, révocation | **VALIDÉE** | FB-05 | ≠ protocole |
+| AF-CAND-07 | Reprise = relecture Git + GO si sensible | **VALIDÉE** | AF-10 | ≠ auto-resume |
+| AF-CAND-08 | Automatisation : L0 arbitrage ; L3–L4 exécution ; pas L5 global | **VALIDÉE** | Matrice L | ≠ implémentation |
+| AF-CAND-09 | Preuve / audit : journal ≠ preuve Git ≠ verdict ≠ décision | **VALIDÉE** | Observabilité | ≠ outil APM |
+| AF-CAND-10 | Option d’architecture = **AF-Option C** | **VALIDÉE** | Orientation | ≠ validation tech |
+| AF-CAND-11A | Trajectoire recommandée après architecture fonctionnelle (voir §6.1) | **VALIDÉE** (recommandation uniquement) | Oriente la séquence | Ne lance aucun cycle |
+| AF-CAND-11B | Sélection effective du prochain cycle | **NON DÉCIDÉE / À SÉLECTIONNER** | — | Nouveau GO Morris requis |
+| AF-CAND-12 | Aucune D-VAL-12 ; AF-CAND ≠ D-VAL | **VALIDÉE** | Gouvernance | — |
+
+### 6.1 AF-CAND-11A — Trajectoire recommandée (VALIDÉE)
+
+Après validation et intégration documentaire de l’architecture fonctionnelle, la trajectoire **recommandée** est :
+
+1. UX/UI fonctionnelle et visuelle ;
+2. architecture technique ;
+3. POC borné de faisabilité ;
+4. définition du MVP après retour du POC et validation Morris.
+
+**Statut :** VALIDÉE comme **recommandation de trajectoire uniquement**.
+
+**Effets :** oriente la séquence ; prépare le futur cycle UX/UI ; **ne lance** aucun cycle ; **ne valide** aucune architecture technique ; **ne définit** ni POC ni MVP.
+
+### 6.2 AF-CAND-11B — Sélection du prochain cycle (NON DÉCIDÉE)
+
+La sélection effective du prochain cycle reste une décision Morris **distincte**.
+
+**Statut :** **NON DÉCIDÉE / À SÉLECTIONNER**.
+
+**Effets :** aucun cycle lancé automatiquement ; UX/UI reste seulement le prochain cycle **recommandé** (via 11A) ; un nouveau GO Morris est requis pour sélectionner et lancer le cycle suivant.
 
 ---
 
@@ -144,12 +175,12 @@
 | D7 | FB-08 | AF-08 | FR-012/013 | 09 | |
 | D8 | FB-09 | AF-09 | FR-014/020 | 04 | |
 | D9 | FB-10 | AF-10 | FR-016/017 | 07 | |
-| D10 | FB-11 | — | FR-024/025 | 01 | |
+| D10 | FB-11 | **AF-01 / AF-15** | FR-024/025 | 01 | Admin/qualification + lecture bornée |
 
 ### Exigences FR-001…025
 
-| Élément source | Bloc | Flux | Exigence | Décision candidate | Réserve |
-|----------------|------|------|----------|--------------------|---------|
+| Élément source | Bloc | Flux | Exigence | Décision | Réserve |
+|----------------|------|------|----------|----------|---------|
 | FR-001 | FB-02 | AF-01 | FR | AF-CAND-01 | Domaine≠composant |
 | FR-002 | FB-02 | AF-01 | FR | AF-CAND-01 | Domaine≠composant |
 | FR-003 | FB-03 | AF-02 | FR | AF-CAND-01 | Domaine≠composant |
@@ -173,12 +204,12 @@
 | FR-021 | FB-05 | AF-12 | FR | AF-CAND-01 | Domaine≠composant |
 | FR-022 | FB-07/09 | AF-07/09 | FR | AF-CAND-01 | Domaine≠composant |
 | FR-023 | FB-03/06 | AF-11 | FR | AF-CAND-01 | Domaine≠composant |
-| FR-024 | FB-11 | — | FR | AF-CAND-01 | Domaine≠composant |
-| FR-025 | FB-11 | — | FR | AF-CAND-01 | Domaine≠composant |
+| FR-024 | FB-11 | **AF-01 / AF-15** | FR | AF-CAND-01 | Coûts candidats — sens inchangé |
+| FR-025 | FB-11 | **AF-01 / AF-15** | FR | AF-CAND-01 | Admin paramètres — sens inchangé |
 
 ### Règles BR-001…025
 
-Toutes couvertes via FB-05/09/12 + AF-04/09/11/12 + AF-CAND-03/06/08/12. Mapping : BR-001→FB-05/09 ; BR-002/003→FB-03/09 ; BR-004/005→FB-02 ; BR-006/007→FB-04/05 ; BR-008/011→FB-05/AF-12 ; BR-009/010→FB-07/AF-13 ; BR-012…015→FB-09/10 ; BR-016…018→FB-05 ; BR-019/025→FB-12 ; BR-020→FB-01/08 ; BR-021→réserves ; BR-022→Option C méthode ; BR-023/024→FB-02/11.
+Toutes couvertes via FB-05/09/12 + AF-04/09/11/12 + AF-CAND-03/06/08/12. Mapping : BR-001→FB-05/09 ; BR-002/003→FB-03/09 ; BR-004/005→FB-02 ; BR-006/007→FB-04/05 ; BR-008/011→FB-05/AF-12 ; BR-009/010→FB-07/AF-13 ; BR-012…015→FB-09/10 ; BR-016…018→FB-05 ; BR-019/025→FB-12 ; BR-020→FB-01/08 ; BR-021→réserves ; BR-022→**Option C méthode** ; BR-023/024→FB-02/11.
 
 ### Parcours F1–F12
 
@@ -192,16 +223,16 @@
 | 02 | FB-02, AF-01 |
 | 03 | FB-08/09 |
 | 04 | Truth model, AF-CAND-03 |
-| 05 | AF-CAND-12, langage candidate |
+| 05 | AF-CAND-12 ; candidate ≠ validée |
 | 06 | FB-07, AF-07 |
 | 07 | AF-13 |
 | 08 | AF-09, FR-022 |
 | 09 | AF-11 |
 | 10 | Matrice L, AF-CAND-08 |
 | 11 | AF-12 |
-| 12 | FB-12, Option C |
+| 12 | FB-12, **AF-Option C** |
 | 13 | AF-06/10 |
-| 14 | AF-CAND-* |
+| 14 | AF-CAND-* ; AF-CAND-11B non décidée |
 
 ### AC-01…08 / RF-01…07
 
@@ -215,43 +246,56 @@
 
 ## 8. Risques / réserves / questions Morris
 
-**Risques :** Option B seconde vérité ; FB pris pour microservices ; Runtime contractuel implicite ; validation AF précipitée.  
-**Réserves :** Pas de tech ; pas de D-VAL-12 ; Runtime candidat.  
-**Questions Morris :** Valider Option C ? Valider AF-CAND-01…12 ? Ordre cycle suivant (UX fct / archi tech / autre) ?
-
----
-
-## 9. Gates de validation (futurs)
-
-Revue Morris → validation AF-CAND sélectionnés → éventuelle mise à jour statut docs → **pas** de lancement tech/UX/POC/MVP sans GO.
+**Risques :** AF-Option B seconde vérité (écartée) ; FB pris pour microservices ; Runtime contractuel implicite ; confusion AF-Option C / Option C méthode ; promotion implicite d’AF-CAND-11B.  
+**Réserves :** Pas de tech ; pas de D-VAL-12 ; Runtime candidat ; cycle suivant non sélectionné.  
+**Questions Morris restantes :**
+1. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
+2. Autorisez-vous le versionnement / intégration documentaire de l’architecture amendée (GO distinct) ?
+3. Quel sort pour les branches (`pre-framing` / `functional-design` / architecture locale) ?
+
+---
+
+## 9. Gates de validation
+
+| Gate | Statut |
+|------|--------|
+| Validation AF-Option C | **FAIT** |
+| Validation AF-CAND-01…10, 11A, 12 | **FAIT** |
+| AF-CAND-11B sélection cycle | **OUVERT** |
+| Versionnement / intégration docs architecture | **Non autorisé** ici |
+| Clôture formelle cycle architecture | **Non** — amendements en revue |
+| Lancement UX/UI / tech / POC / MVP | **Non** |
 
 ---
 
 ## 10. Effets d’une validation / non automatiques
 
-| Si Morris valide | N’implique pas |
-|------------------|----------------|
-| Orientation Option C | Stack choisie |
+| Validé | N’implique pas |
+|--------|----------------|
+| AF-Option C | Stack / Runtime contractuel |
 | FB-01…12 | Services créés |
-| AF-CAND | D-VAL-12 |
-| Trajectoire suivante | Cycle suivant lancé |
+| AF-CAND-01…10, 11A, 12 | D-VAL-12 |
+| AF-CAND-11A (trajectoire) | Cycle suivant lancé |
+| AF-CAND-11B | Toujours **non décidée** |
 
 ---
 
 ## 11. Proposition de cycle suivant (non lancé)
 
-Après revue Morris :  
-1) Validation partielle/totale AF-CAND ; **ou**  
-2) Cycle UX fonctionnelle non visuelle ; **ou**  
-3) Cycle architecture technique (si GO) — **aucun lancé ici**.
-
----
-
-## 12. Verdict candidat
-
-**Architecture fonctionnelle candidate produite — prête pour revue Morris.**  
-Aucune validation implicite. Aucune D-VAL-12. Baseline `08`–`10` intacte.
-
----
-
-*Pack AF CANDIDAT — Critical — Morris décide.*
+**Recommandation (AF-CAND-11A VALIDÉE) :** UX/UI fonctionnelle et visuelle en premier, puis architecture technique, POC borné, MVP après retour POC.
+
+**Sélection (AF-CAND-11B) :** **NON DÉCIDÉE**. Aucun cycle lancé. Nouveau GO Morris requis.
+
+---
+
+## 12. Verdict
+
+**Architecture fonctionnelle VALIDÉE PARTIELLEMENT** avec amendements intégrés — statut `functional-architecture-amended-review`.
+
+Validé : AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12.  
+Non décidé : AF-CAND-11B.  
+Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé.
+
+---
+
+*Pack AF amendé — Critical — Morris décide AF-CAND-11B et GO versionnement.*

END DIFF

---

## 14. Diff global / contrôles Git

### git diff --name-status

M	projects/campus360/README.md
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/README.md

### git diff --stat

projects/campus360/README.md                       | 134 +++++++++++----------
 .../07-product-trajectory-and-decision-pack.md     | 117 +++++++++++-------
 projects/sfia-studio/README.md                     | 100 ++++++++++-----
 3 files changed, 211 insertions(+), 140 deletions(-)

### git diff --check

(aucun avertissement)

### git diff --cached

(vide)

### Diff stat origin/main -- projects/sfia-studio/ (tracked only)

.../07-product-trajectory-and-decision-pack.md     | 117 +++++++++++++--------
 projects/sfia-studio/README.md                     | 100 ++++++++++++------
 2 files changed, 143 insertions(+), 74 deletions(-)

| Contrôle | Résultat |
|----------|----------|
| Commit projet | Non |
| Push projet | Non |
| PR projet | Non |
| Staged | Aucun |

---

## 15. Métadonnées fichiers après amendements

| Fichier | Octets | Lignes | SHA-256 |
|---------|--------|--------|---------|
| `projects/sfia-studio/README.md` | 17005 | 308 | `4f3f4031a612ea00958b86c555b694ef88231d15fb23ed5168a0ccbc08ebd809` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 17681 | 358 | `2a7650a86c61d60bde6800248d4fa0d888a308254d2efa0cbf3d6d1155e22b75` |
| `projects/sfia-studio/11-functional-architecture.md` | 14501 | 371 | `21b6cf78eb1f50e1042332718f603dd22a98c66bc91f0256936d58d06a08bfda` |
| `projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md` | 13469 | 391 | `b3a41abfb31b00dbb45c4c78c967e59ef04d29ca477844c6f69c15a0d0ecbe33` |
| `projects/sfia-studio/13-functional-architecture-decision-pack.md` | 13930 | 301 | `a5826617e2271ec58eec7a701e7e6eab464d02beec932ee899d6b0a1c3973406` |

---

## 16. Verdict

**SFIA STUDIO FUNCTIONAL ARCHITECTURE AMENDMENTS APPLIED — READY FOR MORRIS FINAL REVIEW**

Aucune clôture automatique. Aucun cycle suivant lancé. Aucune D-VAL-12.

---

## 17. Contenu intégral des cinq fichiers (BEGIN/END)

BEGIN FILE: projects/sfia-studio/README.md
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `functional-architecture-amended-review` — architecture **VALIDÉE PARTIELLEMENT** (amendements Morris) ; conception **intégrée** sur `main` |
| **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — amendements architecture fonctionnelle (DOC, Critical) |
| **Typologie cycle** | DOC — EVOL produit |
| **Cycle projet** | 3 — Architecture fonctionnelle (**VALIDÉE PARTIELLEMENT** ; amendements en revue ; **non commitée** projet) |
| **Profil SFIA** | Critical |
| **Branche architecture** | `project/sfia-studio-functional-architecture` (**locale** ; push projet **interdit**) |
| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
| **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
| **Chemin** | `projects/sfia-studio/` |
| **Base canonique** | `origin/main` @ `e9d819368a6224259e8ba0e942d53effb81e191a` |
| **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
| **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
| **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
| **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
| **AF-CAND-11B** | **NON DÉCIDÉE** — sélection du prochain cycle |
| **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
| **Architecture fonctionnelle** | **VALIDÉE PARTIELLEMENT** — amendements intégrés — revue finale ouverte |
| **Prochain cycle** | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (AF-CAND-11A) |

---

## 0. État post-merge (observation) et conception

| Élément | Valeur |
|---------|--------|
| PR cadrage | [#207](https://github.com/mcleland147/sfia-workspace/pull/207) — **MERGED** |
| PR conception | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
| Commit conception | `99eaeaab3120d488606963eb4e5f69c4f730cf14` |
| Merge conception | `fdade59a23a6dff4c264c73975358f77bc90f9b0` |
| Documents Studio sur `main` | **Onze** (`01`–`10` + README) — baseline conception |
| Documents architecture (locaux) | **Trois** (`11`–`13`) — **candidates** ; non sur `main` |
| Cadrage détaillé | **Validé** (D-VAL-9 / DF-G1) |
| Cadrage documentaire | **Clôturé** (D-VAL-11) |
| Cycle 2 conception | **VALIDÉE** et **CLÔTURÉE** — intégrée sur `main` |
| FD-CAND-01…08 | **VALIDÉES** |
| Cycle architecture fonctionnelle | **VALIDÉE PARTIELLEMENT** — amendements Morris intégrés — statut `functional-architecture-amended-review` |
| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
| D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
| Intégration conception sur `main` | **Réalisée** via PR #209 / sync #210 → `e9d8193…` |
| Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
| Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 |
| Prochain cycle | **Non sélectionné** (AF-CAND-11B) |
| Branches | `functional-design`, `pre-framing` **conservées** ; branche architecture **locale** |

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
  → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — cycle **CLÔTURÉ**
  → architecture fonctionnelle ← **VALIDÉE PARTIELLEMENT** (`11`–`13` amendés) — AF-Option C **VALIDÉE** — AF-CAND-11B **ouverte**
  → UX/UI (recommandé AF-CAND-11A) / architecture technique / POC ← **non sélectionnés** (AF-CAND-11B)
  → MVP → delivery → industrialisation plateforme
```

Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE PARTIELLEMENT** (AF-Option C ; AF-CAND-01…10, 11A, 12). Cycle suivant **non sélectionné**. POC / MVP non lancés.

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

> Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. **Intégrée** sur `main` via PR #209 / sync #210 (`e9d8193…`). Baseline `08`–`10` **inchangée** pendant le cycle architecture. ≠ stack / UX visuelle / backlog / POC / MVP / code.

### Architecture fonctionnelle — VALIDÉE PARTIELLEMENT (amendements)

| Document | Rôle |
|----------|------|
| [11-functional-architecture.md](./11-functional-architecture.md) | Blocs, authority/truth models, NFR fonctionnels |
| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |

> Statut `functional-architecture-amended-review`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. Branche locale — **pas** de commit/push/PR projet dans ce sous-cycle.

---

## 4. Justification Critical

Le cadrage détaillé a été exécuté en profil Critical : projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation.

Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical** : règles de contrôle des actions Git/GPT/Cursor ; gates, permissions, arrêts ; prévention d’auto-arbitrage et de seconde vérité.

Le cycle d’architecture fonctionnelle est en profil **Critical** : responsabilités Morris/GPT/Cursor/Git/orchestrateur candidat ; gates et preuves ; frontières empêchant une seconde vérité ou une architecture technique implicite.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| Git `main` = source de vérité | Cadrage `01`–`07` + conception `08`–`10` intégrés (PR #207 / #208 / #209) |
| Conception validée = intégrée | PR #209 / `fdade59…` ; branche `functional-design` conservée |
| Morris décide | Gates structurants |
| GPT / Cursor | Qualifient / exécutent — ne décident pas |
| Option C méthode | Consomme v2.6 (**validé**) |
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
| D-VAL-6 | **Option C méthode** (consomme v2.6) | G4 |
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

### Décisions architecture — VALIDÉES PARTIELLEMENT

| Décision | Statut |
|----------|--------|
| AF-Option C (Studio / orchestrateur séparés) | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10 | **VALIDÉES** |
| AF-CAND-11A (trajectoire recommandée) | **VALIDÉE** (recommandation uniquement) |
| AF-CAND-11B (sélection prochain cycle) | **NON DÉCIDÉE** |
| AF-CAND-12 (pas de D-VAL-12) | **VALIDÉE** |
| D10 → AF-01 / AF-15 | **VALIDÉE** (amendement traçabilité) |

### Décisions encore ouvertes

| Décision | Statut |
|----------|--------|
| AF-CAND-11B — sélection / lancement prochain cycle | **NON DÉCIDÉE** — UX/UI recommandé via 11A |
| Versionnement / intégration docs architecture | **Non autorisé** ici |
| Clôture formelle cycle architecture | **Non** — amendements en revue |
| Sort des branches | Conservées ; décisions distinctes |
| Contenu POC / définition MVP | Non pris |
| Stack / architecture technique | Non pris |

> Commit / push / PR / merge de la conception : **faits Git réalisés** (PR #209 / #210). Architecture amendée : **locale** — aucun commit projet.

---

## 8. Prochaine décision

1. Revue ChatGPT du handoff d’**amendements architecture**.
2. Revue finale Morris des amendements (D10, AF-Option, AF-CAND-11A/11B).
3. **AF-CAND-11B** — sélection du prochain cycle (**non décidée** ; UX/UI recommandé).
4. GO distinct éventuel de versionnement / intégration documentaire.
5. Sort des branches (décisions distinctes — suppression interdite ici).

**Verdict documentaire :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE AMENDMENTS APPLIED — READY FOR MORRIS FINAL REVIEW`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 sur `main` — **Option C méthode** |
| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
| Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** (PR #207 / #208) |
| Conception fonctionnelle validée | **`08`–`10` + navigation** sur **`main`** (`e9d8193…`) — baseline **inchangée** |
| Architecture fonctionnelle amendée | **`11`–`13`** — branche locale — **VALIDÉE PARTIELLEMENT** — **non** sur `main` |
| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
| Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |

> `main` est la source de vérité du **cadrage** et de la **conception**. L’architecture amendée est **locale** jusqu’à versionnement autorisé.

---

*SFIA Studio — cadrage clôturé — conception VALIDÉE/INTÉGRÉE — architecture VALIDÉE PARTIELLEMENT (AF-Option C) — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
END FILE: projects/sfia-studio/README.md

BEGIN FILE: projects/sfia-studio/07-product-trajectory-and-decision-pack.md
# SFIA Studio — Trajectoire produit et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `07-product-trajectory-and-decision-pack.md` |
| **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
| **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
| **Baseline** | SFIA v2.6 (**Option C méthode**) |
| **Statut** | `functional-architecture-amended-review` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** |
| **Destinataire** | Morris |
| **Source de vérité** | Git `main` @ `e9d819368a6224259e8ba0e942d53effb81e191a` — cadrage + conception ; architecture **locale amendée** |

> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE PARTIELLEMENT** (amendements) — **pas de D-VAL-12.** AF-Option C ≠ Option C méthode.

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
| Cycle architecture fonctionnelle | **VALIDÉE PARTIELLEMENT** — amendements intégrés — `functional-architecture-amended-review` |
| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
| D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
| Prochain cycle après architecture | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (11A) |
| Branches | `functional-design` / `pre-framing` **conservées** ; architecture **locale** (push interdit) |

> Le merge #207 est un fait Git. D-VAL-11 clôture le cadrage. Le merge #209/#210 intègre la conception. L’architecture candidate est **locale** — aucun commit projet.

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
| D-VAL-6 | **Option C méthode** — consomme v2.6 | G4 |
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
  → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — **CLÔTURÉE**
  → architecture fonctionnelle      ← **VALIDÉE PARTIELLEMENT** (`11`–`13` amendés) — AF-Option C **VALIDÉE** — AF-CAND-11B **ouverte**
  → UX/UI (recommandé AF-CAND-11A)  ← **non sélectionnée** (AF-CAND-11B)
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
- Merge #209 / #210 = faits Git ; conception intégrée ; sync documentaire clôturable (post-#210).
- Aucune stack / architecture **technique** validée.
- Architecture **fonctionnelle VALIDÉE PARTIELLEMENT** — amendements locaux ; **non commitée** projet.
- **AF-CAND-11A** oriente UX/UI puis tech puis POC puis MVP — **sans lancer**.
- **AF-CAND-11B** : sélection cycle suivant **NON DÉCIDÉE**.
- Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main`.

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
| Statut | **VALIDÉE PARTIELLEMENT** — amendements Morris — `functional-architecture-amended-review` |
| Objectif | Blocs logiques ; frontières Studio / Git / GPT / Cursor / orchestrateur candidat |
| Livrables | `11` / `12` / `13` |
| Profil | Critical |
| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
| AF-CAND-11B | **NON DÉCIDÉE** |
| D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
| Branche | `project/sfia-studio-functional-architecture` — **locale** ; push projet interdit |
| Ne lance pas | Architecture technique ; UX/UI ; stack ; POC ; MVP ; code ; commit projet |

### 4.3 UX/UI

| Champ | Contenu |
|-------|---------|
| Statut | **Recommandé** (AF-CAND-11A) — **non sélectionné** (AF-CAND-11B) |
| Déclencheur | GO Morris sur AF-CAND-11B |
| Pourquoi pas maintenant | Sélection cycle non décidée ; Figma non lancé |

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
| D-NEXT-2c | Sélection du cycle suivant après validation conception | Morris | **FAIT** — architecture fonctionnelle **lancée** |
| D-NEXT-2d | Autorisation commit / push / PR de la conception | Morris | **FAIT** — réalisés (PR #209 / #210) |
| D-NEXT-2e | Acceptation intégration / clôture écart merge #209 | Morris | **VALIDÉE** — 2026-07-18 (sans D-VAL-12) |
| D-NEXT-2f | Validation architecture / AF-CAND | Morris | **PARTIELLE** — AF-Option C + AF-CAND-01…10, 11A, 12 **VALIDÉES** ; 11B ouverte |
| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **Non sélectionné** |
| D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
| D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; AF partiellement validée ; suite **non sélectionnée** |
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

**Conception fonctionnelle bornée** (Option 1 de séquencement post-cadrage) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).

**Architecture fonctionnelle Critical** : **VALIDÉE PARTIELLEMENT** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; amendements D10 / nommage / scission 11A–11B intégrés.

**AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.

**AF-CAND-11B :** **NON DÉCIDÉE** — aucun cycle suivant lancé. Nouveau GO Morris requis.

Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n’est lancé ici.

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

Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE PARTIELLEMENT**. AF-CAND-11B : **non décidée**.

---

## 8. Questions Morris

1. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via AF-CAND-11A, ou autre ?
2. Autorisez-vous le versionnement / intégration documentaire de l’architecture amendée (GO distinct) ?
3. Conservez-vous ou autorisez-vous la suppression (cycle séparé) de `project/sfia-studio-pre-framing` ?
4. Quel sort pour `project/sfia-studio-functional-design` et la branche architecture locale ?
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
| Cycle conception fonctionnelle | **CLÔTURÉ** — intégré PR #209 / #210 |
| FD-CAND-01…08 | **VALIDÉES** |
| Architecture fonctionnelle | **VALIDÉE PARTIELLEMENT** (`11`–`13` amendés) |
| AF-Option C | **VALIDÉE** |
| AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
| AF-CAND-11B | **NON DÉCIDÉE** |
| Prochain cycle après architecture | **Non sélectionné** |

---

## 10. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage détaillé | **VALIDÉ** (D-VAL-9) |
| Intégration cadrage `main` | **Oui** (PR #207 / #208) |
| Cadrage documentaire | **Clôturé** |
| D-VAL-11 | **VALIDÉE** — Morris — 2026-07-18 |
| Conception fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — base `e9d8193…` |
| FD-CAND-01…08 | **VALIDÉES** |
| Cycle 2 | **CLÔTURÉ** |
| Architecture fonctionnelle | **VALIDÉE PARTIELLEMENT** — amendements |
| AF-Option C | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-11B | **NON DÉCIDÉE** |
| Ready for POC / MVP / tech | **Non** |
| Ready for Morris final review (amendements) | **Oui** |

**Verdict :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE AMENDMENTS APPLIED — READY FOR MORRIS FINAL REVIEW`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [08-functional-design.md](./08-functional-design.md) | Conception — contrat **validé / intégré** |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Conception — parcours **validés** |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Conception — pack de **validation / clôture** |
| [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE PARTIELLEMENT** |
| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — amendé D10 |
| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND — amendé |

*SFIA Studio — architecture VALIDÉE PARTIELLEMENT (AF-Option C) — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
END FILE: projects/sfia-studio/07-product-trajectory-and-decision-pack.md

BEGIN FILE: projects/sfia-studio/11-functional-architecture.md
# SFIA Studio — Architecture fonctionnelle (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `11-functional-architecture.md` |
| **Cycle** | Architecture fonctionnelle |
| **Profil** | Critical |
| **Typologie** | DOC — EVOL produit |
| **Baseline** | SFIA v2.6 (**Option C méthode** validée — D-VAL-6) |
| **Base Git** | `origin/main` @ `e9d819368a6224259e8ba0e942d53effb81e191a` |
| **Branche travail** | `project/sfia-studio-functional-architecture` (locale — push interdit) |
| **Statut** | `functional-architecture-amended-review` |
| **Autorité** | Morris (L0) |
| **Entrée** | Conception validée `08`–`10` (inchangée) |
| **Architecture** | **VALIDÉE PARTIELLEMENT** — **AF-Option C** VALIDÉE |
| **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; aucune D-VAL-12 |

> Architecture fonctionnelle **VALIDÉE PARTIELLEMENT** (amendements Morris intégrés). **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode.

---

## 1. Autorité et limites

| Couvre | Ne couvre pas |
|--------|---------------|
| Blocs fonctionnels candidats | Composants / microservices / packages techniques |
| Frontières et responsabilités | Stack, framework, API, schéma BDD |
| Authority / truth models | Code, tests, DevOps, déploiement |
| Flux AF-* | Wireframes / Figma / design system |
| Automatisation L0–L5 | L5 global ; auto-arbitrage |

Toute formulation ci-dessous est **proposée / à valider**, sauf rappel d’éléments déjà validés (conception, FD-CAND, D-VAL-1…11).

---

## 2. Sources

- Conception `08`–`10` (VALIDÉE / intégrée) ;
- Cadrage `04`–`07` ;
- Capacités C1–C16 / UC1–UC8 ;
- Handoff post-merge #210 `ba08f47…` ;
- Template cycle / routing / operating model / guardrails.

---

## 3. Principes structurants (candidats)

1. Morris = seule autorité structurante (L0).
2. Git = source de vérité ; états dérivés reconstructibles.
3. GPT qualifie / propose ; ne décide pas ; n’exécute pas Git.
4. Cursor exécute un contrat borné ; n’élargit pas le périmètre.
5. L’orchestrateur déterministe **candidat** applique ; ne crée pas d’autorisation.
6. Domaines D1–D10 ≠ blocs techniques ; un domaine peut traverser plusieurs blocs.
7. Observation ≠ recommandation ≠ décision ; candidate ≠ validée.
8. Commit / push / PR / ready-for-review / merge = gates **séparés**.
9. Automatiser l’exécution répétable, jamais l’arbitrage.
10. Architecture fonctionnelle ≠ architecture technique.

---

## 4. Architecture fonctionnelle globale (candidate)

```text
[Morris] ←gates/décisions→ [FB-01 Pilotage Studio]
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
 [FB-02 Qualification]   [FB-03 Contexte Git]    [FB-05 Gates]
        │                       │                       │
        └──────────► [FB-04 Contrat] ◄──────────────────┘
                           │
                           ▼
              [FB-12 Orchestrateur candidat] ──► [Cursor]
                           │
                           ▼
              [FB-06 Contrôle exécution] ←stop/events
                           │
              [FB-07 Preuves / packs] → [FB-08 Revue/verdict GPT]
                           │
              [FB-09 Registre décisions] ← Morris
                           │
              [FB-10 Historique/reprise] ← Git
                           │
              [FB-11 Administration]
```

Les flèches sont **fonctionnelles**, pas des protocoles réseau.

---

## 5. Blocs fonctionnels candidats (FB-01…FB-12)

> Ces blocs sont des **regroupements de responsabilités**. Ils ne sont pas des composants techniques.

### FB-01 — Espace de pilotage

| Champ | Contenu |
|-------|---------|
| Finalité | Présenter états, actions possibles/interdites, preuves et demandes de décision |
| Responsabilités | Vues fonctionnelles ; distinction observation/recommandation/décision |
| Entrées | États cycle, gates, événements, preuves |
| Sorties | Intentions utilisateur, confirmations, demandes de gate |
| Acteurs | Morris ; opérateur futur candidat |
| Interdit | Décider à la place de Morris ; créer un GO |
| Données | Identité cycle, statut, actions autorisées |
| Preuves | Journal d’affichage / interactions structurantes |
| Dépendances | FB-02…FB-11 |
| Stop | Divergence affichée non levée |
| Risques | Confusion UI → décision implicite |
| Questions | Surfaces minimales avant UX visuelle |

### FB-02 — Qualification et préparation

| Champ | Contenu |
|-------|---------|
| Finalité | Capturer intention ; qualifier cycle/profil/blocs |
| Domaines | D1 |
| FR | FR-001, FR-002 |
| Acteurs | Morris, GPT |
| Interdit | Critical implicite ; auto-lancement |
| Preuves | Intention horodatée ; note de qualification |

### FB-03 — Contexte repo et sources

| Champ | Contenu |
|-------|---------|
| Finalité | Pre-check Git ; sélection sources canoniques |
| Domaines | D2 |
| FR | FR-003, FR-004, FR-015, FR-023 |
| Acteurs | Studio, Git, GPT (lecture) |
| Interdit | Écrire hors Git ; inventer HEAD |
| Preuves | Snapshot branche/HEAD/status |

### FB-04 — Contrat d’exécution

| Champ | Contenu |
|-------|---------|
| Finalité | Produire contrat Cursor borné |
| Domaines | D3 |
| FR | FR-005 |
| Acteurs | GPT (draft), Morris (revue), Cursor (consommation) |
| Interdit | Élärgir allowlist sans GO |
| Preuves | Contrat versionné / horodaté |

### FB-05 — Gestion des gates

| Champ | Contenu |
|-------|---------|
| Finalité | Présenter et enregistrer GO/NO-GO/amendement |
| Domaines | D4 |
| FR | FR-006, FR-007, FR-018, FR-021 |
| Acteurs | Morris (décide), Studio (présente) |
| Interdit | Auto-GO ; timeout = GO |
| Preuves | Décision horodatée référencée |

### FB-06 — Contrôle d’exécution

| Champ | Contenu |
|-------|---------|
| Finalité | Suivre exécution ; appliquer stop |
| Domaines | D5 |
| FR | FR-008, FR-009, FR-019 |
| Acteurs | Cursor, orchestrateur candidat, Morris (stop) |
| Interdit | Poursuivre après divergence |
| Preuves | Événements d’exécution |

### FB-07 — Collecte des preuves

| Champ | Contenu |
|-------|---------|
| Finalité | Rapport + review pack + contrôle complétude |
| Domaines | D6 |
| FR | FR-010, FR-011, FR-022 |
| Acteurs | Cursor, Studio |
| Interdit | Verdict final |
| Preuves | Pack lui-même |

### FB-08 — Revue et verdict

| Champ | Contenu |
|-------|---------|
| Finalité | Analyse GPT ; verdict **candidat** |
| Domaines | D7 |
| FR | FR-012, FR-013 |
| Acteurs | GPT |
| Interdit | Décision structurante |
| Preuves | Analyse référencée |

### FB-09 — Registre des décisions

| Champ | Contenu |
|-------|---------|
| Finalité | Ancrer décisions Morris ; prévenir seconde vérité |
| Domaines | D8 |
| FR | FR-014, FR-020 |
| Acteurs | Morris, Git |
| Interdit | Décision hors trace |
| Preuves | Enregistrement décision |

### FB-10 — Historique et reprise

| Champ | Contenu |
|-------|---------|
| Finalité | Historique reconstructible ; reprise |
| Domaines | D9 |
| FR | FR-016, FR-017 |
| Acteurs | Morris, Cursor, Git |
| Interdit | Reprise distante silencieuse |
| Preuves | Journal de reprise |

### FB-11 — Administration et exploitation

| Champ | Contenu |
|-------|---------|
| Finalité | Paramètres candidats ; coûts candidats |
| Domaines | D10 |
| FR | FR-024, FR-025 |
| Flux | **AF-01** (paramètres nécessaires à la qualification) ; **AF-15** (consultation opérationnelle read-only) |
| Acteurs | Morris / admin candidat |
| Interdit | Contourner gates |
| Preuves | Journal admin |
| Amendement | Traçabilité D10 → FB-11 → AF-01 / AF-15 → FR-024 / FR-025 — **VALIDÉE** Morris |

### FB-12 — Orchestrateur déterministe (candidat)

| Champ | Contenu |
|-------|---------|
| Finalité | Appliquer contrats, permissions, gates, stops de façon déterministe |
| Statut | **Candidat non contractuel** (≠ SFIA Runtime validé) |
| Acteurs | Mécanisme candidat |
| Interdit | Créer autorisations ; arbitrer ; élever privilèges (INV-12) |
| Dépendances | FB-04, FB-05, FB-06 |
| Risques | Pris pour décideur |
| Questions | Séparation Studio / orchestrateur — **tranchée** : **AF-Option C** VALIDÉE |

---

## 6. Authority model (candidat)

| Acteur | Peut | Ne peut pas |
|--------|------|-------------|
| Morris | Gates structurants ; clôture ; GO distants | Être remplacé par timeout/outil |
| GPT | Qualifier, challenger, proposer | Décider ; exécuter Git |
| Cursor | Exécuter contrat borné | Élargir ; merger seul |
| Git | Tracer ; primer | Décider |
| Studio (FB-01…) | Présenter ; préparer ; journaliser | Créer un GO |
| Orchestrateur candidat | Appliquer | Autoriser |

---

## 7. Truth model (candidat)

| Couche | Rôle | Règle |
|--------|------|-------|
| Git | Vérité durable | Prime ; reconstructibilité |
| Décisions Morris | Vérité d’autorité | Explicites, horodatées, référencées |
| Rapports / packs | Preuves | Avant READY |
| États dérivés Studio | Observation | Jamais seconde vérité |
| Mémoire / cache candidat | Transitoire | Invalidable si divergence |

---

## 8. Données fonctionnelles (sans schéma)

Identité cycle ; intention ; profil/blocs ; branche/HEAD/base ; allowlist ; gates ; décisions ; événements ; rapports ; verdicts ; horodatages ; références Git ; coûts candidats ; journaux. **≠ BDD**.

---

## 9. Gates, permissions, erreurs, stop, reprise

| Mécanisme | Règle candidate |
|-----------|-----------------|
| Gate | Affiché avant action sensible ; GO explicite |
| Permission | Bornée (acteur, action, périmètre, durée) |
| Erreur | Signalisée ; n’implique pas GO |
| Stop | Manuel ou auto (divergence) ; journalisé |
| Reprise | Relecture Git ; nouveau GO si sensible |

---

## 10. Sécurité fonctionnelle (besoins)

Séparation des rôles ; moindre privilège ; GO à durée/périmètre ; révocation ; anti-replay ; anti-élargissement ; audit ; secrets (exigence) ; confirmation irréversible ; protected paths. **Sans protocole choisi.**

---

## 11. RGPD fonctionnel (candidat)

Données compte/opérateur ; historiques ; prompts/rapports ; journaux ; minimisation ; conservation candidate ; export/suppression/accès. **Pas de registre juridique définitif.**

---

## 12. Accessibilité fonctionnelle

Gates lisibles ; clavier ; alternatives textuelles ; statut ≠ couleur seule ; erreurs claires ; conséquences visibles ; confirmations ; historique accessible. **Pas de maquette.**

---

## 13. Performance fonctionnelle (qualitative)

Attentes candidates : chargement contexte Git ; qualification ; détection divergence ; affichage cycle ; reprise ; collecte packs ; volumétrie historique. **Pas de SLO contractuel.**

---

## 14. Observabilité / RUN readiness fonctionnelles

Événements : gates, exécutions, stops, reprises, divergences, complétude packs, santé orchestrateur candidat. Distinguer journal / preuve Git / métrique / alerte / audit.

---

## 15. FinOps / GreenOps candidats

**FinOps :** coûts IA / exécution / stockage / connecteurs ; seuils candidats.  
**GreenOps :** limiter appels inutiles ; réutiliser contexte ; borner exécutions ; éviter boucles/scans. **Sans objectif chiffré contractuel.**

---

## 16. Vues fonctionnelles (non visuelles — candidates)

Ces vues préparent un futur UX/UI **sans** maquette ni Figma.

| Vue | Finalité | Blocs | Contenu minimal |
|-----|----------|-------|-----------------|
| Tableau de bord | Vue d’ensemble cycles / alertes | FB-01, FB-10 | Cycles actifs, stops, gates en attente |
| Vue cycle | Suivi d’un cycle | FB-01…FB-10 | État, transitions, preuves |
| Vue gate | Décision Morris | FB-05 | Objet, conséquences, GO/NO-GO |
| Vue exécution | Suivi borné | FB-06, FB-12 | Contrat, événements, stop |
| Vue rapport | Preuves / packs | FB-07 | Complétude, artefacts |
| Vue décision | Ancrage | FB-08, FB-09 | Verdict candidat vs décision |
| Historique | Reprise / audit | FB-10 | Reconstructibilité Git |
| Administration | Paramètres / coûts candidats | FB-11 | Sans contourner gates |

---

## 17. Niveaux d’automatisation (candidats)

| Capacité | Actuel | Cible candidate | Conditions | Gate | Preuve |
|----------|--------|-----------------|------------|------|--------|
| Qualification | L1–L2 | L2 | Profil explicite | Non | Note |
| Contrat Cursor | L2 | L2–L3 | Sources OK | Avant exécution | Contrat |
| Exécution bornée | L3 | L3–L4* | GO | Oui | Journal |
| Orchestration | L3 | L4* candidat | Contrat + GO | Oui | Événements |
| Arbitrage | L0 | L0 | Toujours | Oui | Décision |
| L5 global | Interdit | Interdit | — | — | — |

\*L4 = orchestration contrôlée **candidate**, non validée techniquement.

---

## 18. Réserves / risques / questions

**Réserves :** FB ≠ composants ; Runtime candidat ; pas de stack ; pas de POC/MVP ; cycle suivant non sélectionné (AF-CAND-11B).  
**Risques :** confusion Studio/orchestrateur ; seconde vérité ; GO implicite ; confusion **AF-Option C** / Option C méthode.  
**Décidé :** **AF-Option C** VALIDÉE ; AF-CAND-01…10, 11A, 12 VALIDÉES.  
**Questions restantes :** AF-CAND-11B (sélection prochain cycle) ; GO versionnement/intégration ; sort des branches.

---

## 19. Liens

| Document | Usage |
|----------|-------|
| [08-functional-design.md](./08-functional-design.md) | Baseline conception (**inchangée**) |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours / BR |
| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF |
| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND (amendé) |

---

*SFIA Studio — architecture fonctionnelle VALIDÉE PARTIELLEMENT — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*
END FILE: projects/sfia-studio/11-functional-architecture.md

BEGIN FILE: projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
# SFIA Studio — Flux et frontières d’architecture fonctionnelle (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `12-functional-architecture-flows-and-boundaries.md` |
| **Statut** | `functional-architecture-amended-review` |
| **Cycle** | Architecture fonctionnelle — Critical |
| **Base** | `e9d819368a6224259e8ba0e942d53effb81e191a` |
| **Complète** | [11-functional-architecture.md](./11-functional-architecture.md) |

> Flux **AF-*** candidats. Ne remplacent pas F1–F12 validés ; ils les **structurent** architecturalement.

---

## 1. Acteurs

Morris ; GPT ; Cursor ; Git ; opérateur futur candidat ; orchestrateur déterministe candidat ; interface Studio (FB-01).

---

## 2. Blocs

FB-01…FB-12 (voir document 11). Domaines D1–D10 **couverts** par ces blocs sans bijection 1:1 obligatoire.

---

## Matrice acteurs / blocs (candidate)

| Acteur | FB-01 | FB-02 | FB-03 | FB-04 | FB-05 | FB-06 | FB-07 | FB-08 | FB-09 | FB-10 | FB-11 | FB-12 |
|--------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|-------|
| Morris | P/D | R | R | R | **D** | Stop | R | R | **D** | D | D | — |
| GPT | — | Q | L | Draft | — | — | — | **Q** | — | — | — | — |
| Cursor | — | — | L | Consomme | — | E | E | — | — | E | — | Appliqué |
| Git | — | — | Vérité | — | Preuve | — | Ancre | — | Ancre | Ancre | — | — |
| Studio | Pilotage | Oui | Oui | Oui | Présente | Suit | Collecte | Transmet | Enregistre | Affiche | Admin | Pilote |
| Orchestrateur candidat | — | — | Applique | Applique | Applique GO | Contrôle | Aide | — | — | Aide | — | **Cœur** |

Légende : P=pilotage, D=décide, R=revue, Q=qualifie, L=lit, E=exécute. **≠** validation technique.


---

## 3. Flux AF-01 à AF-15

### AF-01 — Création et qualification d’un cycle

| Champ | Contenu |
|-------|---------|
| Déclencheur | Intention produit |
| Initiateur | Morris / opérateur candidat |
| Blocs | FB-01, FB-02, **FB-11** (paramètres d’administration / exploitation nécessaires à la qualification — D10) |
| Préconditions | Projet officiel ; conception validée disponible |
| Étapes | 1) Saisir intention 2) Consulter paramètres admin/exploitation candidats si nécessaires (FB-11 / D10) 3) Qualifier cycle/profil/blocs 4) Justifier Critical si besoin 5) Enregistrer note |
| Données | Intention, typologie, profil, blocs ; paramètres admin candidats consommés |
| Preuves | Note de qualification |
| Gates | Aucun GO distant |
| Erreurs | Profil ambigu → STOP qualification |
| Stop | Critical non justifié |
| Résultat | Cycle qualifié |
| État final | État : intention/qualification |
| Traçabilité D10 | **D10 / FB-11 / FR-024 / FR-025** — paramètres nécessaires à la qualification (amendement Morris) |

### AF-02 — Repo-informed pre-check

| Champ | Contenu |
|-------|---------|
| Déclencheur | Qualification OK |
| Initiateur | Studio / Cursor lecture |
| Blocs | FB-03, FB-01 |
| Préconditions | Repo accessible |
| Étapes | 1) Lire branche/HEAD/status 2) Vérifier base 3) Afficher snapshot 4) Signaler anomalies |
| Données | Branche, HEAD, status, base |
| Preuves | Snapshot Git |
| Gates | Non |
| Erreurs | Repo inaccessible |
| Stop | Divergence détectée |
| Résultat | Contexte Git chargé |
| État final | État : contexte prêt / STOP |

### AF-03 — Génération d’un contrat Cursor

| Champ | Contenu |
|-------|---------|
| Déclencheur | Pre-check OK |
| Initiateur | GPT draft / Morris revue |
| Blocs | FB-04, FB-02, FB-03 |
| Préconditions | Sources sélectionnées |
| Étapes | 1) Lister allow/deny 2) Actions autorisées 3) Produire contrat 4) Revue humaine |
| Données | Allowlist, denylist, actions |
| Preuves | Contrat horodaté |
| Gates | Revue avant exécution |
| Erreurs | Allowlist trop large |
| Stop | Protected path sans GO |
| Résultat | Contrat candidat prêt |
| État final | État : contrat prêt |

### AF-04 — Présentation et décision d’un gate Morris

| Champ | Contenu |
|-------|---------|
| Déclencheur | Action sensible demandée |
| Initiateur | Studio → Morris |
| Blocs | FB-05, FB-01 |
| Préconditions | Conséquences visibles |
| Étapes | 1) Afficher gate 2) Alternatives 3) GO/NO-GO/amendement 4) Horodater |
| Données | Objet gate, périmètre, durée |
| Preuves | Décision enregistrée |
| Gates | Gate lui-même |
| Erreurs | Timeout ≠ GO |
| Stop | NO-GO |
| Résultat | Décision explicite |
| État final | État : autorisé / refusé |

### AF-05 — Lancement d’une exécution bornée

| Champ | Contenu |
|-------|---------|
| Déclencheur | GO exécution |
| Initiateur | Orchestrateur candidat / Cursor |
| Blocs | FB-06, FB-12, FB-04, FB-05 |
| Préconditions | Contrat + GO valides |
| Étapes | 1) Vérifier GO 2) Appliquer bornes 3) Lancer 4) Journaliser |
| Données | Contrat, GO, événements |
| Preuves | Journal lancement |
| Gates | GO exécution |
| Erreurs | Élargissement tenté → STOP |
| Stop | Stop manuel/auto |
| Résultat | Exécution en cours |
| État final | État : exécution |

### AF-06 — Stop condition et interruption

| Champ | Contenu |
|-------|---------|
| Déclencheur | Stop demandé ou condition |
| Initiateur | Morris / système |
| Blocs | FB-06, FB-05, FB-10 |
| Préconditions | Exécution active |
| Étapes | 1) Détecter 2) Interrompre 3) Journaliser 4) Figé état |
| Données | Raison stop |
| Preuves | Événement stop |
| Gates | Non (sauf reprise distante) |
| Erreurs | Échec interruption |
| Stop | Toujours |
| Résultat | Cycle interrompu traçable |
| État final | État : STOPPED |

### AF-07 — Collecte rapport et review pack

| Champ | Contenu |
|-------|---------|
| Déclencheur | Fin / stop / besoin preuve |
| Initiateur | Cursor / Studio |
| Blocs | FB-07 |
| Préconditions | Artefacts disponibles |
| Étapes | 1) Collecter 2) Contrôler complétude 3) Marquer niveau pack |
| Données | Rapport, diffs, logs |
| Preuves | Pack + checklist |
| Gates | Non |
| Erreurs | Pack incomplet |
| Stop | Incomplétude bloquante |
| Résultat | Pack prêt / incomplet |
| État final | État : preuves |

### AF-08 — Analyse GPT et verdict candidat

| Champ | Contenu |
|-------|---------|
| Déclencheur | Pack disponible |
| Initiateur | GPT |
| Blocs | FB-08, FB-07 |
| Préconditions | Pack minimal OK |
| Étapes | 1) Analyser 2) Produire verdict candidat 3) Lister réserves |
| Données | Pack, verdict proposé |
| Preuves | Analyse référencée |
| Gates | Non |
| Erreurs | Verdict ambigu |
| Stop | Non (sauf divergence) |
| Résultat | Verdict candidat |
| État final | État : revue |

### AF-09 — Décision Morris et clôture

| Champ | Contenu |
|-------|---------|
| Déclencheur | Verdict candidat |
| Initiateur | Morris |
| Blocs | FB-09, FB-08, FB-01 |
| Préconditions | Preuve suffisante (FR-022) |
| Étapes | 1) Décider 2) Ancrer 3) Clôturer ou poursuivre |
| Données | Décision, références |
| Preuves | Décision horodatée |
| Gates | Gate clôture si requis |
| Erreurs | Preuve insuffisante |
| Stop | STOP clôture |
| Résultat | Cycle clôturé / poursuivi |
| État final | État : CLOSED / CONTINUED |

### AF-10 — Reprise après interruption

| Champ | Contenu |
|-------|---------|
| Déclencheur | Reprise demandée |
| Initiateur | Morris |
| Blocs | FB-10, FB-03, FB-05 |
| Préconditions | Cycle STOPPED traçable |
| Étapes | 1) Relire Git 2) Comparer 3) Nouveau GO si sensible 4) Reprendre |
| Données | État antérieur, HEAD |
| Preuves | Journal reprise |
| Gates | GO reprise si distant/sensible |
| Erreurs | HEAD changé |
| Stop | Divergence |
| Résultat | Reprise ou STOP |
| État final | État : reprise / STOP |

### AF-11 — Divergence Git ou changement de HEAD

| Champ | Contenu |
|-------|---------|
| Déclencheur | Detection mismatch |
| Initiateur | FB-03 / FB-06 |
| Blocs | FB-03, FB-06, FB-05 |
| Préconditions | Snapshot antérieur |
| Étapes | 1) Détecter 2) Afficher 3) STOP 4) Attendre arbitrage |
| Données | HEAD attendu/observé |
| Preuves | Événement divergence |
| Gates | Arbitrage Morris |
| Erreurs | Non résolue |
| Stop | Oui |
| Résultat | Divergence ouverte |
| État final | État : STOPPED |

### AF-12 — Action Git distante avec GO distinct

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin push/PR/merge… |
| Initiateur | Morris |
| Blocs | FB-05, FB-12, FB-03 |
| Préconditions | GO **séparé** pour l’action |
| Étapes | 1) Demander gate dédié 2) GO 3) Exécuter action seule 4) Vérifier |
| Données | Type action, cible |
| Preuves | Preuve action + GO |
| Gates | Gate dédié action |
| Erreurs | Action hors GO |
| Stop | Oui |
| Résultat | Action effectuée / refusée |
| État final | État : post-action |

### AF-13 — Review handoff Git

| Champ | Contenu |
|-------|---------|
| Déclencheur | Critical / décision |
| Initiateur | Cursor borné + GO handoff |
| Blocs | FB-07, FB-05, FB-03 |
| Préconditions | Pack FULL ; branche handoff |
| Étapes | 1) Overwrite canonique 2) Commit handoff 3) Push handoff seulement |
| Données | Pack → latest-chatgpt-review.md |
| Preuves | Commit/SHA handoff |
| Gates | GO handoff (si requis) |
| Erreurs | Push projet tenté → STOP |
| Stop | Push hors handoff |
| Résultat | Handoff publié |
| État final | État : handoff OK |

### AF-14 — Cycle documentaire complet

| Champ | Contenu |
|-------|---------|
| Déclencheur | Intention DOC |
| Initiateur | Morris |
| Blocs | FB-01…FB-10, FB-12 |
| Préconditions | Baseline docs |
| Étapes | AF-01→AF-02→AF-03→AF-04→AF-05→AF-07→AF-08→AF-09 (+AF-13 si Critical) |
| Données | Tous artefacts cycle |
| Preuves | Chaîne de preuves |
| Gates | Gates selon actions |
| Erreurs | Toute violation |
| Stop | Selon BR |
| Résultat | Docs candidates / validées selon Morris |
| État final | État : clôturable |

### AF-15 — Lecture seule / faible risque potentiellement L5 ciblé

| Champ | Contenu |
|-------|---------|
| Déclencheur | Opération read-only bornée |
| Initiateur | Studio / Cursor lecture |
| Blocs | FB-03, FB-01, FB-12, **FB-11** (consultation opérationnelle paramètres, coûts candidats, états administratifs — D10) |
| Préconditions | Périmètre read-only explicite |
| Étapes | 1) Qualifier L5 ciblé 2) Exécuter lecture (y compris consultation admin/coûts candidats si demandé) 3) Journaliser 4) Aucune écriture |
| Données | Requête lecture ; paramètres / coûts / états admin observés |
| Preuves | Journal lecture |
| Gates | Non sauf chemins sensibles |
| Erreurs | Écriture tentée → STOP |
| Stop | Oui si écriture |
| Résultat | Observation produite |
| État final | État : lecture OK |
| Traçabilité D10 | **D10 / FB-11 / FR-024 / FR-025** — consultation opérationnelle bornée (amendement Morris) |


---

## 4. Frontières (obligatoires)

### Studio / Git
Studio consulte et représente ; Git trace et prime ; Studio ≠ seconde vérité.

### Studio / GPT
Studio fournit contexte ; GPT qualifie/propose ; GPT ne décide pas et n’exécute pas Git.

### Studio / Cursor
Studio produit/transmet contrat borné ; Cursor exécute ; Cursor ne décide ni gate ni merge.

### Studio / orchestrateur candidat
Studio pilote fonctionnellement ; orchestrateur applique déterministe ; orchestrateur ne crée pas d’autorisation.

### GPT / orchestrateur
GPT produit qualification/verdict candidat ; orchestrateur ne transforme jamais en décision.

### Morris / système
Morris valide gates ; décision explicite horodatée traçable ; timeout/clic implicite/outil ≠ GO.

### Données temporaires / Git
États transitoires possibles ; vérité durable reconstructible ou ancrée Git ; **sans choix de stockage**.

---

## 5. Entrées / sorties globales (candidate)

| Entrée | Sortie |
|--------|--------|
| Intention Morris | Cycle qualifié |
| Snapshot Git | Contexte |
| Contrat | Exécution bornée |
| GO | Action autorisée |
| Pack | Verdict candidat |
| Décision Morris | Clôture / suite |
| Divergence | STOP |

---

## 6. Gates / preuves / stop / reprise

Voir document 11 §§9–10 et BR-001…025. Gates séparés : commit, push, PR, ready-for-review, merge, delete branch, handoff, actions distantes.

---

## 7. Scénarios d’erreur / divergence / actions distantes / handoff

| Scénario | Comportement candidat |
|----------|----------------------|
| Erreur outil | Journal + STOP si sensible |
| Divergence HEAD | AF-11 |
| Push hors GO | STOP + audit |
| Handoff | AF-13 — push handoff ≠ push projet |
| Double lancement | Prévention (idempotence candidate) |

---

## 8. Invariants d’architecture fonctionnelle (candidats, ancrés INV)

- AF-INV-A : FB-12 n’autorise jamais (INV-12)
- AF-INV-B : Git prime (INV-04)
- AF-INV-C : Pas de READY sans preuve (INV-08)
- AF-INV-D : Candidate ≠ validée (INV-05 / INV-14)
- AF-INV-E : Gates distants séparés (INV-01 / INV-11)

---

## 9. Mapping parcours F → AF (candidate)

| F | AF principaux |
|---|---------------|
| F1 | AF-14, AF-01…AF-09 |
| F2 | AF-02, AF-03 |
| F3 | AF-04 |
| F4 | AF-05 |
| F5 | AF-06 |
| F6 | AF-07 |
| F7 | AF-08 |
| F8 | AF-09 |
| F9 | AF-12 (+ PR readiness) |
| F10 | AF-12 / post-merge + AF-02 |
| F11 | AF-10 |
| F12 | AF-11 |

---

*Flux architecture CANDIDATS — non validés — Morris décide.*
END FILE: projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md

BEGIN FILE: projects/sfia-studio/13-functional-architecture-decision-pack.md
# SFIA Studio — Pack de décisions d’architecture fonctionnelle (amendé)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `13-functional-architecture-decision-pack.md` |
| **Statut** | `functional-architecture-amended-review` |
| **Cycle** | 3 — Architecture fonctionnelle — sous-cycle amendements Morris |
| **Profil** | Critical |
| **Base** | `e9d819368a6224259e8ba0e942d53effb81e191a` |
| **Complète** | [11](./11-functional-architecture.md) · [12](./12-functional-architecture-flows-and-boundaries.md) |

> **AF-CAND-*** = décisions locales au cycle d’architecture. **≠ D-VAL**. Aucune D-VAL-12.  
> **AF-Option A/B/C** = options d’architecture fonctionnelle — **distinctes** de l’**Option C méthode** SFIA v2.6 (relation produit/méthode déjà validée).

---

## 1. Décisions validées à préserver (rappel)

| ID | Statut |
|----|--------|
| D-VAL-1…11 | Inchangées |
| FD-CAND-01…08 | VALIDÉES (conception) |
| Conception `08`–`10` | Baseline **inchangée** |
| Option C méthode SFIA v2.6 | **VALIDÉE** (D-VAL-6 / G4) — inchangée |
| D-VAL-12 | **Absente** — non créée |

---

## 2. Hors périmètre (interdit)

Stack ; API ; BDD ; services techniques ; Figma ; backlog ; POC ; MVP ; code ; commit/push/PR projet ; lancement cycle suivant ; D-VAL-12.

---

## 3. Options d’architecture fonctionnelle (AF-Option)

> Nommage **AF-Option** pour éviter toute collision avec l’Option C méthode.

### AF-Option A — Studio centré pilotage, orchestration externe

| Champ | Contenu |
|-------|---------|
| Description | Studio = pilotage + vues ; orchestration hors produit (scripts/processus humains) |
| Responsabilités | FB-01…FB-11 dans Studio ; FB-12 hors ou minimal |
| Frontières | Studio ne pilote pas un moteur intégré |
| Avantages | Simplicité initiale ; faible couplage technique anticipé |
| Limites | Moins de déterminisme ; charge Morris |
| Risques | Incohérence d’application des gates |
| Dette | Réintégration orchestrateur plus tard |
| Git vérité | Compatible |
| Autorité Morris | Compatible si gates stricts |
| Évolution | Vers AF-Option B ou AF-Option C |
| UX/UI | Surfaces pilotage prioritaires |
| Architecture technique | Orchestrateur = futur choix |
| POC/MVP | POC léger possible plus tard |
| Statut | **Non retenue** |

### AF-Option B — Studio avec moteur fonctionnel intégré, exécution externe

| Champ | Contenu |
|-------|---------|
| Description | Studio intègre logique de gates/contrats/états ; Cursor reste externe |
| Responsabilités | FB-01…FB-11 + cœur logique ; Cursor externe |
| Avantages | UX cohérente ; règles centralisées |
| Limites | Risque de « Studio = Runtime » |
| Risques | Seconde vérité ; GO implicite |
| Dette | Découplage difficile |
| Git vérité | Risque si états locaux trop forts |
| Autorité Morris | OK si discipline |
| Évolution | Peut converger vers AF-Option C |
| UX/UI | Fort impact surfaces |
| Architecture technique | Moteur à découper plus tard |
| POC/MVP | POC moteur plus tôt |
| Statut | **Non retenue** |

### AF-Option C — Studio et orchestrateur déterministe candidat séparés avec contrat explicite

| Champ | Contenu |
|-------|---------|
| Description | Studio pilote ; orchestrateur **candidat** séparé applique contrats/GO/stops ; Cursor exécute |
| Responsabilités | FB-01…FB-11 Studio ; FB-12 séparé par contrat |
| Avantages | Aligné INV-12 / BR-019 / Runtime candidat ; séparation d’autorité claire |
| Limites | Complexité de contrat |
| Risques | Sur-spécification précoce |
| Dette | Contrat à stabiliser |
| Git vérité | Compatible |
| Autorité Morris | Meilleure prévention GO système |
| Évolution | Meilleure pour architecture technique future |
| UX/UI | Studio reste surface humaine |
| Architecture technique | Découpage naturel |
| POC/MVP | POC orchestrateur borné possible plus tard |
| **Statut** | **VALIDÉE** par Morris — 2026-07-18 |

**Distinction obligatoire :** AF-Option C ≠ Option C méthode SFIA v2.6.

---

## 4. Comparaison

| Critère | AF-Option A | AF-Option B | AF-Option C |
|---------|-------------|-------------|-------------|
| Séparation autorité | Moyenne | Moyenne | **Forte** |
| Risque seconde vérité | Bas | **Élevé** | Bas–moyen |
| Alignement Runtime candidat | Faible | Ambigu | **Fort** |
| Complexité immédiate | Basse | Moyenne | Moyenne–haute |
| Évolutivité technique future | Moyenne | Contrainte | **Haute** |
| Compatibilité Option C méthode | Oui | Oui | Oui |
| Décision Morris | Non retenue | Non retenue | **VALIDÉE** |

---

## 5. Décision d’architecture — AF-Option C

**AF-Option C est VALIDÉE** par Morris (Studio ↔ orchestrateur déterministe candidat séparés, contrat explicite).

Effets automatiques **absents** : pas de stack, pas de Runtime contractuel, pas de services, pas de POC/MVP, pas de D-VAL-12.

Justification : préserve INV-12 / BR-019 / BR-025 ; évite fusion Studio/décideur ; prépare architecture technique sans la lancer.

---

## 6. AF-CAND — statuts après revue Morris

| ID | Décision | Statut | Effet | Effet non automatique |
|----|----------|--------|-------|----------------------|
| AF-CAND-01 | Découpe FB-01…FB-12 comme blocs fonctionnels | **VALIDÉE** | Structure docs/UX | ≠ composants tech |
| AF-CAND-02 | Orchestrateur déterministe **séparé** (AF-Option C) | **VALIDÉE** | Frontière Studio/orch. | ≠ Runtime contractuel |
| AF-CAND-03 | Git reste seule vérité durable | **VALIDÉE** | Truth model | ≠ choix stockage |
| AF-CAND-04 | Registre décisions ancré Git / preuves | **VALIDÉE** | FB-09 | ≠ schéma |
| AF-CAND-05 | États transitoires autorisés si reconstructibles | **VALIDÉE** | FB-10 | ≠ BDD |
| AF-CAND-06 | Modèle gates : GO explicite, durée, périmètre, révocation | **VALIDÉE** | FB-05 | ≠ protocole |
| AF-CAND-07 | Reprise = relecture Git + GO si sensible | **VALIDÉE** | AF-10 | ≠ auto-resume |
| AF-CAND-08 | Automatisation : L0 arbitrage ; L3–L4 exécution ; pas L5 global | **VALIDÉE** | Matrice L | ≠ implémentation |
| AF-CAND-09 | Preuve / audit : journal ≠ preuve Git ≠ verdict ≠ décision | **VALIDÉE** | Observabilité | ≠ outil APM |
| AF-CAND-10 | Option d’architecture = **AF-Option C** | **VALIDÉE** | Orientation | ≠ validation tech |
| AF-CAND-11A | Trajectoire recommandée après architecture fonctionnelle (voir §6.1) | **VALIDÉE** (recommandation uniquement) | Oriente la séquence | Ne lance aucun cycle |
| AF-CAND-11B | Sélection effective du prochain cycle | **NON DÉCIDÉE / À SÉLECTIONNER** | — | Nouveau GO Morris requis |
| AF-CAND-12 | Aucune D-VAL-12 ; AF-CAND ≠ D-VAL | **VALIDÉE** | Gouvernance | — |

### 6.1 AF-CAND-11A — Trajectoire recommandée (VALIDÉE)

Après validation et intégration documentaire de l’architecture fonctionnelle, la trajectoire **recommandée** est :

1. UX/UI fonctionnelle et visuelle ;
2. architecture technique ;
3. POC borné de faisabilité ;
4. définition du MVP après retour du POC et validation Morris.

**Statut :** VALIDÉE comme **recommandation de trajectoire uniquement**.

**Effets :** oriente la séquence ; prépare le futur cycle UX/UI ; **ne lance** aucun cycle ; **ne valide** aucune architecture technique ; **ne définit** ni POC ni MVP.

### 6.2 AF-CAND-11B — Sélection du prochain cycle (NON DÉCIDÉE)

La sélection effective du prochain cycle reste une décision Morris **distincte**.

**Statut :** **NON DÉCIDÉE / À SÉLECTIONNER**.

**Effets :** aucun cycle lancé automatiquement ; UX/UI reste seulement le prochain cycle **recommandé** (via 11A) ; un nouveau GO Morris est requis pour sélectionner et lancer le cycle suivant.

---

## 7. Matrice de traçabilité (extrait structurant)

### Domaines D1–D10

| Élément | Bloc | Flux | Exigence | AF-CAND | Réserve |
|---------|------|------|----------|---------|---------|
| D1 | FB-02 | AF-01 | FR-001/002 | 01 | ≠ composant |
| D2 | FB-03 | AF-02/11 | FR-003/004/015/023 | 03 | |
| D3 | FB-04 | AF-03 | FR-005 | 01 | |
| D4 | FB-05 | AF-04/12 | FR-006/007/018/021 | 06 | |
| D5 | FB-06/12 | AF-05/06 | FR-008/009 | 02 | |
| D6 | FB-07 | AF-07/13 | FR-010/011/022 | 09 | |
| D7 | FB-08 | AF-08 | FR-012/013 | 09 | |
| D8 | FB-09 | AF-09 | FR-014/020 | 04 | |
| D9 | FB-10 | AF-10 | FR-016/017 | 07 | |
| D10 | FB-11 | **AF-01 / AF-15** | FR-024/025 | 01 | Admin/qualification + lecture bornée |

### Exigences FR-001…025

| Élément source | Bloc | Flux | Exigence | Décision | Réserve |
|----------------|------|------|----------|----------|---------|
| FR-001 | FB-02 | AF-01 | FR | AF-CAND-01 | Domaine≠composant |
| FR-002 | FB-02 | AF-01 | FR | AF-CAND-01 | Domaine≠composant |
| FR-003 | FB-03 | AF-02 | FR | AF-CAND-01 | Domaine≠composant |
| FR-004 | FB-03 | AF-02 | FR | AF-CAND-01 | Domaine≠composant |
| FR-005 | FB-04 | AF-03 | FR | AF-CAND-01 | Domaine≠composant |
| FR-006 | FB-05 | AF-04 | FR | AF-CAND-01 | Domaine≠composant |
| FR-007 | FB-05 | AF-04 | FR | AF-CAND-01 | Domaine≠composant |
| FR-008 | FB-06 | AF-05 | FR | AF-CAND-01 | Domaine≠composant |
| FR-009 | FB-05/06 | AF-06 | FR | AF-CAND-01 | Domaine≠composant |
| FR-010 | FB-07 | AF-07 | FR | AF-CAND-01 | Domaine≠composant |
| FR-011 | FB-07 | AF-07 | FR | AF-CAND-01 | Domaine≠composant |
| FR-012 | FB-08 | AF-08 | FR | AF-CAND-01 | Domaine≠composant |
| FR-013 | FB-08/09 | AF-08/09 | FR | AF-CAND-01 | Domaine≠composant |
| FR-014 | FB-09 | AF-09 | FR | AF-CAND-01 | Domaine≠composant |
| FR-015 | FB-03 | AF-02 | FR | AF-CAND-01 | Domaine≠composant |
| FR-016 | FB-10 | AF-10 | FR | AF-CAND-01 | Domaine≠composant |
| FR-017 | FB-10 | AF-10 | FR | AF-CAND-01 | Domaine≠composant |
| FR-018 | FB-05 | AF-04/05 | FR | AF-CAND-01 | Domaine≠composant |
| FR-019 | FB-06/09 | AF-05/09 | FR | AF-CAND-01 | Domaine≠composant |
| FR-020 | FB-03/09 | AF-09 | FR | AF-CAND-01 | Domaine≠composant |
| FR-021 | FB-05 | AF-12 | FR | AF-CAND-01 | Domaine≠composant |
| FR-022 | FB-07/09 | AF-07/09 | FR | AF-CAND-01 | Domaine≠composant |
| FR-023 | FB-03/06 | AF-11 | FR | AF-CAND-01 | Domaine≠composant |
| FR-024 | FB-11 | **AF-01 / AF-15** | FR | AF-CAND-01 | Coûts candidats — sens inchangé |
| FR-025 | FB-11 | **AF-01 / AF-15** | FR | AF-CAND-01 | Admin paramètres — sens inchangé |

### Règles BR-001…025

Toutes couvertes via FB-05/09/12 + AF-04/09/11/12 + AF-CAND-03/06/08/12. Mapping : BR-001→FB-05/09 ; BR-002/003→FB-03/09 ; BR-004/005→FB-02 ; BR-006/007→FB-04/05 ; BR-008/011→FB-05/AF-12 ; BR-009/010→FB-07/AF-13 ; BR-012…015→FB-09/10 ; BR-016…018→FB-05 ; BR-019/025→FB-12 ; BR-020→FB-01/08 ; BR-021→réserves ; BR-022→**Option C méthode** ; BR-023/024→FB-02/11.

### Parcours F1–F12

Voir document 12 §9 — couverture complète via AF-01…AF-15.

### Invariants INV-01…14

| INV | Couverture architecture |
|-----|-------------------------|
| 01 | AF-12, FB-05 |
| 02 | FB-02, AF-01 |
| 03 | FB-08/09 |
| 04 | Truth model, AF-CAND-03 |
| 05 | AF-CAND-12 ; candidate ≠ validée |
| 06 | FB-07, AF-07 |
| 07 | AF-13 |
| 08 | AF-09, FR-022 |
| 09 | AF-11 |
| 10 | Matrice L, AF-CAND-08 |
| 11 | AF-12 |
| 12 | FB-12, **AF-Option C** |
| 13 | AF-06/10 |
| 14 | AF-CAND-* ; AF-CAND-11B non décidée |

### AC-01…08 / RF-01…07

AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde vérité, GO implicite, Runtime confondu, etc.) — registre à suivre, **non clos**.

### Douze états / transitions

États conception (intention → clôture / stop / reprise) couverts par AF-01…AF-15 et FB-01/06/10 — **sans modèle de persistance**.

---

## 8. Risques / réserves / questions Morris

**Risques :** AF-Option B seconde vérité (écartée) ; FB pris pour microservices ; Runtime contractuel implicite ; confusion AF-Option C / Option C méthode ; promotion implicite d’AF-CAND-11B.  
**Réserves :** Pas de tech ; pas de D-VAL-12 ; Runtime candidat ; cycle suivant non sélectionné.  
**Questions Morris restantes :**
1. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
2. Autorisez-vous le versionnement / intégration documentaire de l’architecture amendée (GO distinct) ?
3. Quel sort pour les branches (`pre-framing` / `functional-design` / architecture locale) ?

---

## 9. Gates de validation

| Gate | Statut |
|------|--------|
| Validation AF-Option C | **FAIT** |
| Validation AF-CAND-01…10, 11A, 12 | **FAIT** |
| AF-CAND-11B sélection cycle | **OUVERT** |
| Versionnement / intégration docs architecture | **Non autorisé** ici |
| Clôture formelle cycle architecture | **Non** — amendements en revue |
| Lancement UX/UI / tech / POC / MVP | **Non** |

---

## 10. Effets d’une validation / non automatiques

| Validé | N’implique pas |
|--------|----------------|
| AF-Option C | Stack / Runtime contractuel |
| FB-01…12 | Services créés |
| AF-CAND-01…10, 11A, 12 | D-VAL-12 |
| AF-CAND-11A (trajectoire) | Cycle suivant lancé |
| AF-CAND-11B | Toujours **non décidée** |

---

## 11. Proposition de cycle suivant (non lancé)

**Recommandation (AF-CAND-11A VALIDÉE) :** UX/UI fonctionnelle et visuelle en premier, puis architecture technique, POC borné, MVP après retour POC.

**Sélection (AF-CAND-11B) :** **NON DÉCIDÉE**. Aucun cycle lancé. Nouveau GO Morris requis.

---

## 12. Verdict

**Architecture fonctionnelle VALIDÉE PARTIELLEMENT** avec amendements intégrés — statut `functional-architecture-amended-review`.

Validé : AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12.  
Non décidé : AF-CAND-11B.  
Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé.

---

*Pack AF amendé — Critical — Morris décide AF-CAND-11B et GO versionnement.*
END FILE: projects/sfia-studio/13-functional-architecture-decision-pack.md
